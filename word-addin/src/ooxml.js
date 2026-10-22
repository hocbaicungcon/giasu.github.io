// Flat-OPC helpers: what paragraph.getOoxml() returns -> MathType objects and native equations, and the rewritten
// package to hand back to insertOoxml. Works on strings (not a DOM) so everything else in the paragraph is preserved
// byte for byte and the same code runs in node tests.
import { oleToLatex, MtefError } from './mtef.js';
import { ommlToLatex } from './omml.js';
import { latexToOmml } from './latex2omml.js';
import { escapeXml, unescapeXml } from './xml.js';
import { splitChildren } from './exam.js';

const NS_M = 'http://schemas.openxmlformats.org/officeDocument/2006/math';
const NS_W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';

export function base64ToBytes(b64) {
  const bin = atob(b64.replace(/\s+/g, ''));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** {name -> {attrs, body, start, end}} for the pkg:part elements of a flat OPC package. */
export function splitParts(pkg) {
  const parts = new Map();
  const re = /<pkg:part\b([^>]*)>([\s\S]*?)<\/pkg:part>/g;
  let m;
  while ((m = re.exec(pkg))) {
    const name = /pkg:name="([^"]+)"/.exec(m[1]);
    if (name) parts.set(name[1], { attrs: m[1], body: m[2], start: m.index, end: m.index + m[0].length });
  }
  return parts;
}

/** Split a flat body snapshot locally, avoiding one getOoxml call per paragraph.
 * Complex bodies (tables, content controls, text boxes) deliberately use the host's paragraph API instead.
 */
export function paragraphPackages(pkg, paragraphCount, kinds) {
  const parts = splitParts(pkg), docPart = parts.get('/word/document.xml');
  if (!docPart) return null;
  const doc = xmlData(docPart), body = /<w:body\b[^>]*>([\s\S]*)<\/w:body>/.exec(doc);
  if (!body || /<w:(?:tbl|sdt|txbxContent|customXml|altChunk)\b/.test(body[1])) return null;
  const children = splitChildren(body[1]);
  if (children.some(c => c.trim() && !/^<w:(?:p|sectPr)\b/.test(c.trim()))) return null;
  const paras = children.filter(c => /^<w:p\b/.test(c.trim()));
  if (paras.length !== paragraphCount) return null;
  const relsPart = parts.get('/word/_rels/document.xml.rels');
  const rels = relsPart ? xmlData(relsPart) : '';
  const tags = rels.match(/<Relationship\b[^>]*\/>/g) || [];
  const binaryRels = tags.filter(t => /\bType="[^"]*\/(?:image|oleObject)"/.test(t));
  const protectedTargets = otherPartTargets(parts, relsPart);
  const outer = pkg.slice(0, pkg.indexOf('<pkg:part'));
  const items = [];
  paras.forEach((p, index) => {
    if (kinds && !((kinds.has('mathtype') && /<w:object\b/.test(p)) ||
      (kinds.has('native') && /<m:oMath\b/.test(p)) || kinds.has('latex'))) return;
    const used = new Set(Array.from(p.matchAll(/\br:(?:id|embed|link|pict)="([^"]+)"/g), m => m[1]));
    const removed = binaryRels.filter(t => !used.has(/\bId="([^"]+)"/.exec(t)[1]));
    const removedTags = new Set(removed);
    const keepRels = tags.filter(t => !removedTags.has(t));
    // Shared pictures/OLE targets must survive if another relationship still refers to them.
    const keptTargets = new Set(keepRels.map(t => (/\bTarget="([^"]+)"/.exec(t) || [])[1]));
    const drop = new Set(removed.map(t => /\bTarget="([^"]+)"/.exec(t)[1])
      .filter(t => !keptTargets.has(t)).map(resolveTarget));
    const chunks = [];
    for (const [name, part] of parts) {
      if (drop.has(name) && !protectedTargets.has(name)) continue;
      let raw = pkg.slice(part.start, part.end);
      if (name === '/word/document.xml') {
        const bodyOpen = body[0].slice(0, body[0].indexOf('>') + 1);
        const inner = doc.slice(0, body.index) + bodyOpen + p + '</w:body>' + doc.slice(body.index + body[0].length);
        raw = raw.replace(part.body, () => '<pkg:xmlData>' + inner + '</pkg:xmlData>');
      } else if (part === relsPart) {
        const local = rels.replace(/<Relationship\b[^>]*\/>/g, tag => removedTags.has(tag) ? '' : tag);
        raw = raw.replace(part.body, () => '<pkg:xmlData>' + local + '</pkg:xmlData>');
      }
      chunks.push(raw);
    }
    items.push({ index, pkg: outer + chunks.join('') + '</pkg:package>' });
  });
  return items;
}

// Parts such as headers can share a picture with document.xml.
function otherPartTargets(parts, ignoredPart) {
  const protectedTargets = new Set();
  for (const [name, part] of parts) {
    if (!name.endsWith('.rels') || part === ignoredPart) continue;
    const base = name.replace(/\/[_]rels\/[^/]+$/, '/');
    for (const tag of xmlData(part).match(/<Relationship\b[^>]*>/g) || []) {
      const target = (/\bTarget="([^"]+)"/.exec(tag) || [])[1];
      if (!target || /TargetMode="External"/.test(tag)) continue;
      const segments = [];
      for (const seg of (target.startsWith('/') ? target : base + target).split('/')) {
        if (seg === '..') segments.pop(); else if (seg && seg !== '.') segments.push(seg);
      }
      protectedTargets.add('/' + segments.join('/'));
    }
  }
  return protectedTargets;
}

const xmlData = (part) => {
  const m = /<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(part.body);
  return m ? m[1] : '';
};

function readRels(parts, relsName) {
  const part = parts.get(relsName);
  const map = new Map();
  if (!part) return map;
  for (const tag of xmlData(part).match(/<Relationship\b[^>]*>/g) || []) {
    const id = /\bId="([^"]+)"/.exec(tag), target = /\bTarget="([^"]+)"/.exec(tag);
    if (id && target) map.set(id[1], { target: target[1], tag, external: /TargetMode="External"/.test(tag) });
  }
  return map;
}

function resolveTarget(target) {   // relative to /word/
  if (target.startsWith('/')) return target;
  const stack = ['word'];
  for (const seg of target.split('/')) {
    if (seg === '..') stack.pop();
    else if (seg && seg !== '.') stack.push(seg);
  }
  return '/' + stack.join('/');
}

/** Spans of w:object elements in the document XML with the run that holds each. */
export function findObjects(doc) {
  const out = [];
  const re = /<w:object\b[\s\S]*?<\/w:object>/g;
  let m;
  while ((m = re.exec(doc))) {
    const start = m.index, end = m.index + m[0].length;
    const progId = (/<o:OLEObject\b[^>]*\bProgID="([^"]+)"/.exec(m[0]) || [])[1] || '';
    const oleId = (/<o:OLEObject\b[^>]*\br:id="([^"]+)"/.exec(m[0]) || [])[1] || '';
    const imageId = (/<v:imagedata\b[^>]*\br:id="([^"]+)"/.exec(m[0]) || [])[1] || '';
    // enclosing run
    let runStart = -1;
    for (let i = doc.lastIndexOf('<w:r', start); i >= 0; i = doc.lastIndexOf('<w:r', i - 1)) {
      if (/[\s>]/.test(doc[i + 4])) { runStart = i; break; }
      if (i === 0) break;
    }
    const closeIdx = doc.indexOf('</w:r>', end);
    let run = null;
    if (runStart >= 0 && closeIdx >= 0 && doc.slice(runStart, start).indexOf('</w:r>') < 0) {
      const open = /^<w:r\b[^>]*>/.exec(doc.slice(runStart))[0];
      const inner = doc.slice(runStart + open.length, start);
      const rpr = (/^\s*<w:rPr>[\s\S]*?<\/w:rPr>/.exec(inner) || [''])[0];
      run = { start: runStart, end: closeIdx + 6, open, rpr, before: inner.slice(rpr.length), after: doc.slice(end, closeIdx) };
    }
    out.push({ start, end, progId, oleId, imageId, run });
  }
  return out;
}

const isMathType = (progId) => /^Equation\.(DSMT\d*|3)$/.test(progId);

/**
 * Inspect a paragraph (or body) package. Returns {equations: [...]}, each
 * {kind: 'mathtype'|'native', latex|null, error, progId, ...}.
 */
export function scanPackage(pkg) {
  const parts = splitParts(pkg);
  const docPart = parts.get('/word/document.xml');
  if (!docPart) return { equations: [], parts };
  const doc = xmlData(docPart);
  const rels = readRels(parts, '/word/_rels/document.xml.rels');
  const equations = [];
  const hasFields = /<w:instrText[^>]*>[^<]*EMBED\s+Equation/.test(doc);
  for (const obj of findObjects(doc)) {
    if (!isMathType(obj.progId)) continue;
    const eq = { kind: 'mathtype', pos: obj.start, progId: obj.progId, latex: null, error: null, inline: true };
    const rel = rels.get(obj.oleId);
    const part = rel && parts.get(resolveTarget(rel.target));
    if (!obj.run) eq.error = 'phương trình nằm trong khối phức tạp (giữ nguyên)';
    else if (hasFields) eq.error = 'phương trình bọc trong field EMBED (giữ nguyên)';
    else if (!part) eq.error = 'không tìm thấy phần oleObject trong gói OOXML';
    else {
      const bin = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body);
      if (!bin) eq.error = 'oleObject không có dữ liệu nhị phân';
      else {
        try { [eq.latex, eq.inline] = oleToLatex(base64ToBytes(bin[1])); } catch (e) { eq.error = e instanceof MtefError ? e.message : String(e.message || e); }
      }
    }
    eq.obj = obj;
    equations.push(eq);
  }
  const re = /<m:oMath\b(?![A-Za-z])[\s\S]*?<\/m:oMath>/g;
  let m;
  while ((m = re.exec(doc))) {
    const eq = { kind: 'native', pos: m.index, latex: null, error: null, span: [m.index, m.index + m[0].length] };
    try { [eq.latex] = ommlToLatex(m[0]); } catch (e) { eq.error = e.message; }
    equations.push(eq);
  }

  // Quét các công thức LaTeX dạng văn bản ($...$, $$...$$, \(...\), \[...\])
  const pRegex = /<w:p\b[\s\S]*?<\/w:p>/g;
  let pMatch;
  while ((pMatch = pRegex.exec(doc))) {
    const pXml = pMatch[0];
    const pPos = pMatch.index;
    const tMatches = pXml.match(/<w:t\b[^>]*>([^<]*)<\/w:t>/g);
    if (!tMatches) continue;
    const pText = tMatches.map((t) => unescapeXml(t.replace(/<[^>]+>/g, ''))).join('');
    let lMatch;
    LATEX_RE.lastIndex = 0;
    while ((lMatch = LATEX_RE.exec(pText))) {
      const rawInner = lMatch[1] || lMatch[2] || lMatch[3] || lMatch[4];
      if (!isLikelyLatex(rawInner)) continue;
      const latex = rawInner.trim();
      const display = Boolean(lMatch[1] || lMatch[2]);
      let error = null;
      try {
        latexToOmml(latex, { display });
      } catch (e) {
        error = e.message;
      }
      equations.push({
        kind: 'latex',
        pos: pPos + lMatch.index,
        latex,
        error,
        display,
        raw: lMatch[0]
      });
    }
  }

  equations.sort((a, b) => a.pos - b.pos);
  return { equations, parts, doc, docPart, rels };
}

// Lookbehind (?<!..) is a syntax error in old Word web views (Edge 18), so the native regex is built at run time and a prefix-capturing equivalent stands in.
const LATEX_NATIVE = (() => { try { return new RegExp(String.raw`(?<!\\)\$\$(?!\s)((?:[^\$\\]|\\.)+?)(?<!\\)\$\$|(?<!\\)\\\[([\s\S]+?)(?<!\\)\\\]|(?<!\\)\\\(([\s\S]+?)(?<!\\)\\\)|(?<![\\\w\$])\$(?!\s)((?:[^\$\\]|\\.)+?)(?<!\\)\$(?!\d)`, 'g'); } catch { return null; } })();
const LATEX_FALLBACK = /(?:(^|[^\\])(?:\$\$(?!\s)((?:[^\$\\]|\\.)+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\))|(^|[^\\\w\$])\$(?!\s)((?:[^\$\\]|\\.)+?)\$(?!\d))/g;
const LATEX_RE = {
  lastIndex: 0,
  exec(str) {
    if (LATEX_NATIVE) { LATEX_NATIVE.lastIndex = this.lastIndex; const r = LATEX_NATIVE.exec(str); this.lastIndex = LATEX_NATIVE.lastIndex; return r; }
    LATEX_FALLBACK.lastIndex = Math.max(0, this.lastIndex - 1);
    const m = LATEX_FALLBACK.exec(str);
    if (!m) { this.lastIndex = 0; return null; }
    const pre = (m[1] ?? m[5] ?? '').length;
    const r = [m[0].slice(pre), m[2], m[3], m[4], m[6]];
    r.index = m.index + pre;
    this.lastIndex = LATEX_FALLBACK.lastIndex;
    return r;
  },
};

function isLikelyLatex(rawInner) {
  const s = rawInner.trim();
  if (!s) return false;
  if (s.includes('\\')) return true;
  if (/^\d+([.,]\d+)?$/.test(s)) return true;
  if (/[=+\-*/^_<>≤≥≠≈∈∉⊂⊃∪∩∅√∫∑∏~()]/.test(s)) return true;
  if (/^[a-zA-Z0-9_'^]+$/.test(s)) return true;
  return false;
}

function convertLatexInRuns(runs, options = {}) {
  let fullText = '';
  const map = [];
  runs.forEach((r, rIdx) => {
    for (let i = 0; i < r.text.length; i++) {
      map.push({ rIdx, offset: i });
    }
    fullText += r.text;
  });

  const matches = [];
  let m;
  LATEX_RE.lastIndex = 0;
  while ((m = LATEX_RE.exec(fullText)) !== null) {
    const rawInner = m[1] || m[2] || m[3] || m[4];
    if (!isLikelyLatex(rawInner)) continue;
    const latex = rawInner.trim();
    const display = Boolean(m[1] || m[2]);
    matches.push({ start: m.index, end: LATEX_RE.lastIndex, latex, display, raw: m[0] });
  }

  if (!matches.length) return null;

  const out = [];
  let cur = 0;
  let converted = 0;

  for (const match of matches) {
    while (cur < match.start) {
      const { rIdx } = map[cur];
      let endRun = cur;
      while (endRun < match.start && map[endRun].rIdx === rIdx) endRun++;
      const sliceText = fullText.slice(cur, endRun);
      out.push(`<w:r>${runs[rIdx].rpr}<w:t xml:space="preserve">${escapeXml(sliceText)}</w:t></w:r>`);
      cur = endRun;
    }

    try {
      const omml = latexToOmml(match.latex, { display: match.display });
      out.push(omml);
      converted++;
    } catch (e) {
      const firstRIdx = map[match.start].rIdx;
      out.push(`<w:r>${runs[firstRIdx].rpr}<w:t xml:space="preserve">${escapeXml(match.raw)}</w:t></w:r>`);
    }
    cur = match.end;
  }

  while (cur < fullText.length) {
    const { rIdx } = map[cur];
    let endRun = cur;
    while (endRun < fullText.length && map[endRun].rIdx === rIdx) endRun++;
    const sliceText = fullText.slice(cur, endRun);
    out.push(`<w:r>${runs[rIdx].rpr}<w:t xml:space="preserve">${escapeXml(sliceText)}</w:t></w:r>`);
    cur = endRun;
  }

  return { xml: out.join(''), converted };
}

export function convertLatexInPara(paraXml, options = {}) {
  if (/^<w:p\b[^>]*\/>$/.test(paraXml)) return { xml: paraXml, converted: 0 };
  const open = /^<w:p\b[^>]*>/.exec(paraXml)[0];
  const inner = paraXml.slice(open.length, paraXml.length - 6);
  const children = splitChildren(inner);
  let convertedTotal = 0;
  const newChildren = [];
  let curRunGroup = [];

  function flushRunGroup() {
    if (!curRunGroup.length) return;
    const res = convertLatexInRuns(curRunGroup, options);
    if (res) {
      newChildren.push(res.xml);
      convertedTotal += res.converted;
    } else {
      for (const r of curRunGroup) newChildren.push(r.raw);
    }
    curRunGroup = [];
  }

  for (const child of children) {
    if (/^<w:r\b/.test(child)) {
      if (!/<w:(?:object|drawing|pict|fldChar|sym)\b|<m:oMath\b/.test(child)) {
        const rprM = /^\s*<w:rPr>[\s\S]*?<\/w:rPr>|^\s*<w:rPr\/>/.exec(child.slice(/^<w:r\b[^>]*>/.exec(child)[0].length));
        const rpr = rprM ? rprM[0].trim() : '';
        const tMatches = child.match(/<w:t\b[^>]*>([^<]*)<\/w:t>/g);
        if (tMatches) {
          const text = tMatches.map((t) => unescapeXml(t.replace(/<[^>]+>/g, ''))).join('');
          curRunGroup.push({ raw: child, rpr, text });
          continue;
        }
      }
    }
    flushRunGroup();
    newChildren.push(child);
  }
  flushRunGroup();

  if (convertedTotal === 0) return { xml: paraXml, converted: 0 };
  return { xml: `${open}${newChildren.join('')}</w:p>`, converted: convertedTotal };
}

export function convertLatexInDoc(doc, options = {}) {
  let converted = 0;
  const newDoc = doc.replace(/<w:p\b[\s\S]*?<\/w:p>/g, (pXml) => {
    const res = convertLatexInPara(pXml, options);
    converted += res.converted;
    return res.xml;
  });
  return { doc: newDoc, converted };
}

function paragraphIsEquationOnly(doc, objects) {
  if (objects !== 1) return false;
  const stripped = doc.replace(/<w:object\b[\s\S]*?<\/w:object>/g, '').replace(/<w:rPr>[\s\S]*?<\/w:rPr>|<w:pPr>[\s\S]*?<\/w:pPr>/g, '');
  if (/<w:t\b[^>]*>[^<]*\S[^<]*<\/w:t>|<w:tab\/>|<w:br\b|<w:drawing|<w:pict|<w:sym\b|<w:fldChar|<m:oMath/.test(stripped)) return false;
  return true;
}

function ensureNamespaces(root) {
  let r = root;
  const add = (prefix, uri) => { if (!new RegExp(`xmlns:${prefix}=`).test(r.match(/^<[^>]*>/)[0])) r = r.replace(/^<([\w:]+)/, `<$1 xmlns:${prefix}="${uri}"`); };
  add('m', NS_M);
  add('w', NS_W);
  return r;
}

/**
 * Replace decodable MathType objects and/or LaTeX text with native Word equations.
 * options.convertMathType: boolean (default true)
 * options.convertLatex: boolean (default true)
 * options.display: a paragraph holding nothing but one equation becomes a display (centered) equation.
 * options.only: optional Set of equation indexes (into scan().equations) to convert.
 * Returns {pkg, converted, convertedMathType, convertedLatex, kept: [{reason}], changed}.
 */
export function convertMathTypeInPackage(pkg, options = {}) {
  const convertMt = options.convertMathType !== false;
  const convertLt = options.convertLatex !== false;
  const scan = scanPackage(pkg);
  const { equations, parts, docPart } = scan;
  let doc = scan.doc;
  const result = { pkg, converted: 0, convertedMathType: 0, convertedLatex: 0, kept: [], changed: false, details: [] };
  let relsXmlUpdated = null;
  const dropPartsFinal = [];

  if (convertMt) {
    const targets = equations.map((eq, idx) => ({ eq, idx })).filter(({ eq }) => eq.kind === 'mathtype');
    const mathObjects = targets.length;
    const removedRel = new Set();
    const edits = [];
    for (const { eq, idx } of targets) {
      if (options.only && !options.only.has(idx)) continue;
      if (eq.latex === null) { result.kept.push({ reason: eq.error }); continue; }
      let omml;
      try {
        const display = Boolean(options.display) && paragraphIsEquationOnly(doc, mathObjects);
        omml = latexToOmml(eq.latex, { display });
      } catch (e) { result.kept.push({ reason: 'LaTeX→OMML: ' + e.message, latex: eq.latex }); continue; }
      const run = eq.obj.run;
      let repl = '';
      const piece = (inner) => (inner.trim() ? `${run.open}${run.rpr}${inner}</w:r>` : '');
      repl += piece(run.before) + omml + piece(run.after);
      edits.push({ start: run.start, end: run.end, repl });
      removedRel.add(eq.obj.oleId); removedRel.add(eq.obj.imageId);
      result.converted++;
      result.convertedMathType++;
      result.details.push({ latex: eq.latex, kind: 'mathtype' });
    }
    if (edits.length) {
      edits.sort((a, b) => b.start - a.start);
      for (const e of edits) doc = doc.slice(0, e.start) + e.repl + doc.slice(e.end);
      let relsPart = parts.get('/word/_rels/document.xml.rels');
      let relsXml = relsPart ? xmlData(relsPart) : '';
      for (const id of removedRel) {
        if (!id || new RegExp(`r:(?:id|embed|link|pict)="${id}"`).test(doc)) continue;
        const tag = new RegExp(`<Relationship\\b[^>]*\\bId="${id}"[^>]*/>`).exec(relsXml);
        if (!tag) continue;
        const target = /\bTarget="([^"]+)"/.exec(tag[0]);
        relsXml = relsXml.replace(tag[0], '');
        if (target && !new RegExp(`Target="${target[1]}"`).test(relsXml)) dropPartsFinal.push(resolveTarget(target[1]));
      }
      if (relsPart) relsXmlUpdated = relsXml;
      result.changed = true;
    }
  }

  if (convertLt) {
    const ltRes = convertLatexInDoc(doc, options);
    if (ltRes.converted > 0) {
      doc = ltRes.doc;
      result.converted += ltRes.converted;
      result.convertedLatex = ltRes.converted;
      result.changed = true;
    }
  }

  if (!result.changed) return result;

  // rebuild the package text: replace document.xml and rels bodies, remove dropped parts
  const replaceBody = (text, part, newXml) => {
    const body = part.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + newXml + b);
    return text.replace(part.body, () => body);
  };
  let out = pkg;
  const newDoc = ensureNamespaces(doc.trimStart());
  out = replaceBody(out, docPart, newDoc);
  let relsPart = parts.get('/word/_rels/document.xml.rels');
  if (relsPart && relsXmlUpdated !== null) out = replaceBody(out, relsPart, relsXmlUpdated);
  // Parse and rebuild once: hundreds of objects used to reparse the entire package each time.
  const dropped = new Set(dropPartsFinal);
  for (const name of otherPartTargets(parts, relsPart)) dropped.delete(name);
  const chunks = [];
  let offset = 0;
  for (const [name, p] of splitParts(out)) {
    if (!dropped.has(name)) continue;
    chunks.push(out.slice(offset, p.start));
    offset = p.end;
  }
  chunks.push(out.slice(offset));
  out = chunks.join('');
  result.pkg = out;
  return result;
}

/**
 * Apply a LaTeX transformation to every equation of the package (native ones, and MathType ones that decode).
 * transform(latex) -> new latex or null (no change). Returns {pkg, changed, changes: [{before, after, kind}], failed: []}.
 */
export function rewriteEquations(pkg, transform, options = {}) {
  const scan = scanPackage(pkg);
  const { equations, parts, docPart } = scan;
  let doc = scan.doc;
  const out = { pkg, changed: 0, changes: [], failed: [] };
  const mathObjects = equations.filter((e) => e.kind === 'mathtype').length;
  const edits = [];
  const removedRel = new Set();
  for (const eq of equations) {
    if (eq.latex === null) continue;
    if (eq.kind === 'mathtype' && options.includeMathType === false) continue;
    const after = transform(eq.latex);
    if (after === null || after === eq.latex) continue;
    let omml;
    try {
      if (eq.kind === 'native') {
        const original = doc.slice(eq.span[0], eq.span[1]);
        const display = /<m:oMathPara\b/.test(doc.slice(Math.max(0, eq.span[0] - 40), eq.span[0]));
        omml = latexToOmml(after, { display: false });
        edits.push({ start: eq.span[0], end: eq.span[1], repl: omml, original, display });
      } else {
        omml = latexToOmml(after, { display: Boolean(options.display) && paragraphIsEquationOnly(doc, mathObjects) });
        const run = eq.obj.run;
        const piece = (inner) => (inner.trim() ? `${run.open}${run.rpr}${inner}</w:r>` : '');
        edits.push({ start: run.start, end: run.end, repl: piece(run.before) + omml + piece(run.after) });
        removedRel.add(eq.obj.oleId); removedRel.add(eq.obj.imageId);
      }
      out.changes.push({ before: eq.latex, after, kind: eq.kind });
      out.changed++;
    } catch (e) { out.failed.push({ latex: after, reason: e.message }); }
  }
  if (!edits.length) return out;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) {
    // inline oMath inside a pre-existing oMathPara stays inside it
    doc = doc.slice(0, e.start) + e.repl + doc.slice(e.end);
  }
  let relsPart = parts.get('/word/_rels/document.xml.rels');
  let relsXml = relsPart ? xmlData(relsPart) : '';
  const dropParts = [];
  for (const id of removedRel) {
    if (!id || new RegExp(`r:(?:id|embed|link|pict)="${id}"`).test(doc)) continue;
    const tag = new RegExp(`<Relationship\\b[^>]*\\bId="${id}"[^>]*/>`).exec(relsXml);
    if (!tag) continue;
    const target = /\bTarget="([^"]+)"/.exec(tag[0]);
    relsXml = relsXml.replace(tag[0], '');
    if (target && !new RegExp(`Target="${target[1]}"`).test(relsXml)) dropParts.push(resolveTarget(target[1]));
  }
  const replaceBody = (text, part, newXml) => text.replace(part.body, () => part.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + newXml + b));
  let text = replaceBody(pkg, docPart, ensureNamespaces(doc.trimStart()));
  if (relsPart) text = replaceBody(text, relsPart, relsXml);
  for (const name of dropParts) {
    const p = splitParts(text).get(name);
    if (p) text = text.slice(0, p.start) + text.slice(p.end);
  }
  out.pkg = text;
  return out;
}

/**
 * Replace equations by LaTeX text ($…$, or $$…$$ for display equations).
 * options.fromMathType / options.fromNative: which kinds to convert (default both).
 * Returns {pkg, converted, convertedMathType, convertedNative, kept: [{reason}], changed}.
 */
export function convertEquationsToLatexText(pkg, options = {}) {
  const fromMt = options.fromMathType !== false;
  const fromNative = options.fromNative !== false;
  const scan = scanPackage(pkg);
  const { equations, parts, docPart } = scan;
  let doc = scan.doc;
  const result = { pkg, converted: 0, convertedMathType: 0, convertedNative: 0, kept: [], changed: false };
  const edits = [];
  const removedRel = new Set();
  const textRun = (rpr, tex, delim) => `<w:r>${rpr}<w:t xml:space="preserve">${escapeXml(delim + tex + delim)}</w:t></w:r>`;
  for (const eq of equations) {
    if (eq.kind === 'mathtype' ? !fromMt : eq.kind !== 'native' || !fromNative) continue;
    if (eq.latex === null) { result.kept.push({ reason: eq.error }); continue; }
    if (eq.kind === 'native') {
      let [start, end] = eq.span;
      const para = /<m:oMathPara>\s*$/.exec(doc.slice(0, start)), paraEnd = /^\s*<\/m:oMathPara>/.exec(doc.slice(end));
      const display = Boolean(para && paraEnd);
      if (display) { start -= para[0].length; end += paraEnd[0].length; }
      edits.push({ start, end, repl: textRun('', eq.latex, display ? '$$' : '$') });
      result.convertedNative++;
    } else {
      const run = eq.obj.run;
      const piece = (inner) => (inner.trim() ? `${run.open}${run.rpr}${inner}</w:r>` : '');
      edits.push({ start: run.start, end: run.end, repl: piece(run.before) + textRun(run.rpr, eq.latex, '$') + piece(run.after) });
      removedRel.add(eq.obj.oleId); removedRel.add(eq.obj.imageId);
      result.convertedMathType++;
    }
    result.converted++;
  }
  if (!edits.length) return result;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) doc = doc.slice(0, e.start) + e.repl + doc.slice(e.end);
  const relsPart = parts.get('/word/_rels/document.xml.rels');
  let relsXml = relsPart ? xmlData(relsPart) : '';
  const dropParts = [];
  for (const id of removedRel) {
    if (!id || new RegExp(`r:(?:id|embed|link|pict)="${id}"`).test(doc)) continue;
    const tag = new RegExp(`<Relationship\\b[^>]*\\bId="${id}"[^>]*/>`).exec(relsXml);
    if (!tag) continue;
    const target = /\bTarget="([^"]+)"/.exec(tag[0]);
    relsXml = relsXml.replace(tag[0], '');
    if (target && !new RegExp(`Target="${target[1]}"`).test(relsXml)) dropParts.push(resolveTarget(target[1]));
  }
  const replaceBody = (text, part, newXml) => text.replace(part.body, () => part.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + newXml + b));
  let text = replaceBody(pkg, docPart, ensureNamespaces(doc.trimStart()));
  if (relsPart) text = replaceBody(text, relsPart, relsXml);
  for (const name of dropParts) {
    const p = splitParts(text).get(name);
    if (p) text = text.slice(0, p.start) + text.slice(p.end);
  }
  result.pkg = text;
  result.changed = true;
  return result;
}

export function makeEquationPackage(omml) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?mso-application progid="Word.Document"?>
<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
  <pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
    <pkg:xmlData>
      <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
        <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
      </Relationships>
    </pkg:xmlData>
  </pkg:part>
  <pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">
    <pkg:xmlData>
      <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
                  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
        <w:body>
          <w:p>${omml}</w:p>
        </w:body>
      </w:document>
    </pkg:xmlData>
  </pkg:part>
</pkg:package>`;
}

export { latexToOmml };
