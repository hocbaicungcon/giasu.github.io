// Flat-OPC helpers: what paragraph.getOoxml() returns -> MathType objects and native equations, and the rewritten
// package to hand back to insertOoxml. Works on strings (not a DOM) so everything else in the paragraph is preserved
// byte for byte and the same code runs in node tests.
import { oleToLatex, MtefError } from './mtef.js';
import { ommlToLatex } from './omml.js';
import { latexToOmml } from './latex2omml.js';

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
    else if (obj.progId === 'Equation.3') eq.error = 'MathType 3 (MTEF v3) chưa hỗ trợ';
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
  equations.sort((a, b) => a.pos - b.pos);
  return { equations, parts, doc, docPart, rels };
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
 * Replace decodable MathType objects with native equations.
 * options.display: a paragraph holding nothing but one equation becomes a display (centered) equation.
 * options.only: optional Set of equation indexes (into scan().equations) to convert.
 * Returns {pkg, converted, kept: [{reason}], changed}.
 */
export function convertMathTypeInPackage(pkg, options = {}) {
  const scan = scanPackage(pkg);
  const { equations, parts, docPart } = scan;
  let doc = scan.doc;
  const result = { pkg, converted: 0, kept: [], changed: false, details: [] };
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
    result.details.push({ latex: eq.latex });
  }
  if (!edits.length) return result;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) doc = doc.slice(0, e.start) + e.repl + doc.slice(e.end);
  // drop relationships (and their parts) nothing refers to any more
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
  // rebuild the package text: replace document.xml and rels bodies, remove dropped parts
  const replaceBody = (text, part, newXml) => {
    const body = part.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + newXml + b);
    return text.replace(part.body, () => body);
  };
  let out = pkg;
  const newDoc = ensureNamespaces(doc.trimStart());
  out = replaceBody(out, docPart, newDoc);
  if (relsPart) out = replaceBody(out, relsPart, relsXml);
  for (const name of dropParts) {
    const p = splitParts(out).get(name);
    if (p) out = out.slice(0, p.start) + out.slice(p.end);
  }
  result.pkg = out;
  result.changed = true;
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

export { latexToOmml };
