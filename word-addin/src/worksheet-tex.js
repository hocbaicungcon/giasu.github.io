// Block-level LaTeX of the worksheet generator (center, tabular, minipage, enumerate, tikzpicture, \hfill rows, \vspace)
// -> Word body XML (paragraphs and tables). Inline content goes through texToRuns (worksheet-docx.js).
import { texToRuns, para, esc, tikzRun, sceneRun } from './worksheet-docx.js';
import { colour } from './tikz.js';

const CM_DXA = 567;   // twips per cm
const W_DXA = 9638;   // text width of an A4 page with 2 cm margins

function splitTop(s, re) {   // split at top level (outside {} and $...$)
  const out = []; let depth = 0, math = false, cur = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '\\') {
      if (depth === 0 && !math) { const m = re.exec(s.slice(i)); if (m && m.index === 0) { out.push(cur); cur = ''; i += m[0].length - 1; continue; } }
      cur += c + (s[++i] || ''); continue;
    }
    if (c === '$') math = !math;
    if (!math) { if (c === '{') depth++; else if (c === '}') depth--; }
    if (depth === 0 && !math) { const m = re.exec(s.slice(i)); if (m && m.index === 0 && m[0] && c !== '\\') { out.push(cur); cur = ''; i += m[0].length - 1; continue; } }
    cur += c;
  }
  out.push(cur);
  return out;
}

const cmOf = (t) => { const m = /(-?[\d.]+)\s*(cm|mm|pt|em|ex)?/.exec(t || ''); return m ? parseFloat(m[1]) * ({ mm: 0.1, pt: 0.0352, em: 0.4, ex: 0.2 }[m[2]] || 1) : 0; };

/** Find the matching \end{env} for the \begin{env} whose body starts at `from`; returns the body end and the index after \end. */
function envEnd(s, name, from) {
  const open = `\\begin{${name}}`, close = `\\end{${name}}`;
  let depth = 1, i = from;
  while (depth > 0) {
    const o = s.indexOf(open, i), c = s.indexOf(close, i);
    if (c < 0) throw new Error('unterminated ' + name);
    if (o >= 0 && o < c) { depth++; i = o + open.length; } else { depth--; i = c + close.length; if (depth === 0) return [c, i]; }
  }
  return [from, from];
}
function group(s, i) {
  let depth = 0, j = i;
  for (; j < s.length; j++) { if (s[j] === '\\') { j++; continue; } if (s[j] === '{') depth++; else if (s[j] === '}' && --depth === 0) break; }
  return [s.slice(i + 1, j), j + 1];
}

const NOB = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
const LINES = (b, line = '222222') => `<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map((k) => `<w:${k} w:val="${b[k] ? 'single' : 'nil'}" w:sz="8" w:space="0" w:color="${line}"/>`).join('')}</w:tblBorders>`;   // light accent lines: modern, still clear to write in
/** \fbox{...} that makes up a whole cell -> the cell gets the border instead. */
function unbox(text) {
  const t = text.trim();
  const m = /^\\(fbox|fcolorbox)\b/.exec(t);
  if (!m) return { text, box: false };
  let i = m[0].length;
  const skip = m[1] === 'fcolorbox' ? 2 : 0;
  for (let k = 0; k < skip; k++) { while (t[i] === ' ') i++; i = group(t, i)[1]; }
  while (t[i] === ' ') i++;
  if (t[i] !== '{') return { text, box: false };
  const [inner, end] = group(t, i);
  return end >= t.length ? { text: inner.replace(/\\rule\{[^}]*\}\{[^}]*\}/g, '').replace(/^\\ |\\ $/g, '').trim(), box: true } : { text, box: false };
}
const cellPara = (inner, o = {}) => para(inner, { after: 0, ...o });
const tbl = ({ rows, widths, borders, jc, heights = [], line }) => `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>${jc ? `<w:jc w:val="${jc}"/>` : ''}${borders ? LINES(borders, line) : NOB}<w:tblLayout w:type="fixed"/><w:tblCellMar>${borders ? '<w:top w:w="30" w:type="dxa"/>' : ''}<w:left w:w="${borders ? 100 : 60}" w:type="dxa"/>${borders ? '<w:bottom w:w="30" w:type="dxa"/>' : ''}<w:right w:w="${borders ? 100 : 60}" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows.map((r, ri) => `<w:tr><w:trPr><w:cantSplit/>${heights[ri] ? `<w:trHeight w:val="${Math.round(heights[ri])}" w:hRule="atLeast"/>` : ''}</w:trPr>${r.map((c, k) => `<w:tc><w:tcPr><w:tcW w:w="${widths[k]}" w:type="dxa"/>${c.fill ? `<w:shd w:val="clear" w:color="auto" w:fill="${c.fill}"/>` : ''}${c.box ? '<w:tcBorders>' + ['top', 'left', 'bottom', 'right'].map((k) => `<w:${k} w:val="single" w:sz="8" w:space="0" w:color="${line || '222222'}"/>`).join('') + '</w:tcBorders>' : ''}<w:vAlign w:val="center"/></w:tcPr>${c.xml}</w:tc>`).join('')}</w:tr>`).join('')}</w:tbl>`;

/** column spec of a tabular: [{align, width|null}], and whether it has vertical rules. */
function parseSpec(spec) {
  const cols = []; let vlines = false, i = 0;
  const s = spec.replace(/\s+/g, '');
  while (i < s.length) {
    const c = s[i];
    if (c === '|') { vlines = true; i++; } else if (c === '*') { const [n, e] = group(s, i + 1); const [inner, e2] = group(s, e); const sub = parseSpec(inner); for (let k = 0; k < parseInt(n, 10); k++) cols.push(...sub.cols); vlines = vlines || sub.vlines; i = e2; } else if (c === '@' && cols.length) { const [g, e] = group(s, i + 1), h = /\\hspace\*?\{([^}]*)\}/.exec(g); if (h) cols[cols.length - 1].gap = Math.round(cmOf(h[1]) * CM_DXA); i = e; } else if (c === '>' || c === '@' || c === '!' || c === '<') { const [, e] = group(s, i + 1); i = e; } else if (c === 'p' || c === 'm' || c === 'b') { const [w, e] = group(s, i + 1); cols.push({ align: 'left', width: Math.round(cmOf(w) * CM_DXA) }); i = e; } else if ('clr'.includes(c)) { cols.push({ align: { c: 'center', l: 'left', r: 'right' }[c], width: null }); i++; } else i++;
  }
  return { cols, vlines };
}

function tabular(inner, spec, ctx, f, centered) {
  const { cols, vlines } = parseSpec(spec);
  const rowsSrc = splitTop(inner, /^\\\\(\[[^\]]*\])?/);
  let hlines = false;
  const rows = [], heights = [], boxW = [];
  for (const r0 of rowsSrc) {
    let r = r0;
    const gapM = /^\s*$/.test(r) ? null : null; void gapM;
    if (/\\hline/.test(r)) hlines = true;
    r = r.replace(/\\hline/g, '').replace(/\\(?:cline)\{[^}]*\}/g, '');
    if (!r.trim()) continue;
    const cells = splitTop(r, /^&/);
    const rule = /\\rule\{[^}]*\}\{([^}]*)\}/.exec(r);
    const pbh = /\\parbox(?:\[[^\]]*\])?\[([^\]]*)\]/.exec(r);
    heights.push(((rule ? cmOf(rule[1]) : pbh ? cmOf(pbh[1]) : 0.75) + 0.1) * CM_DXA);
    rows.push(cells.map((c, k) => {
      const fill = /\\cellcolor\{([^}]*)\}/.exec(c);
      const col = cols[k] || { align: 'center' };
      const text = c.replace(/\\cellcolor\{[^}]*\}/g, '').replace(/\\rule\{[^}]*\}\{[^}]*\}/g, '');
      const u = unbox(text), pw = /\\parbox(?:\[[^\]]*\])*\{([\d.]+)(cm|mm)\}/.exec(u.text);
      if (pw) boxW[k] = Math.max(boxW[k] || 0, Math.round(cmOf(pw[1] + pw[2]) * CM_DXA) + 140);
      return { xml: cellPara(texToRuns(u.text.trim(), ctx, f), { jc: col.align }), fill: fill ? safeColour(fill[1]) : null, box: u.box };
    }));
  }
  const n = Math.max(...rows.map((r) => r.length), cols.length);
  const widths = Array.from({ length: n }, (_, k) => (cols[k] && cols[k].width) || boxW[k] || 0);
  const known = widths.reduce((a, b) => a + b, 0), unknown = widths.filter((w) => !w).length;
  const avail = ctx.availW || W_DXA, share = unknown ? Math.max(450, Math.min(unknown > 1 ? 2600 : 5200, Math.floor((avail - known) / unknown))) : 0;   // never wider than the room (a cell, the page)
  const w2 = widths.map((w) => w || share);
  rows.forEach((r) => { while (r.length < n) r.push({ xml: cellPara('') }); });
  // @{\hspace{..}} between columns: an empty column, so boxed cells stand apart (the lines of a matching exercise go there)
  for (let k = n - 2; k >= 0; k--) if (cols[k] && cols[k].gap) { w2.splice(k + 1, 0, cols[k].gap); rows.forEach((r) => r.splice(k + 1, 0, { xml: cellPara('') })); }
  return tbl({ rows, widths: w2, borders: vlines ? { top: 1, left: 1, bottom: 1, right: 1, insideH: 1, insideV: 1 } : hlines ? { top: 1, bottom: 1, insideH: 1 } : null, jc: centered ? 'center' : null, heights, line: ctx.line }) + para('', { after: 60 });
}
const safeColour = (c) => { try { return colour(c).toUpperCase(); } catch { return null; } };

const SKIP = { medskip: 120, bigskip: 240, smallskip: 60 };

/** Paragraph-level text: \par / blank lines split paragraphs, \hfill splits a line into columns, \vspace adds space. */
function paragraphs(text, ctx, f, centered) {
  let out = '';
  const parts = text.split(/(\\par\b|\n\s*\n|\\medskip|\\bigskip|\\smallskip|\\vspace\*?\{[^}]*\})/);
  let before = 0;
  for (const part of parts) {
    const sp = /^\\(medskip|bigskip|smallskip)$/.exec(part), vs = /^\\vspace\*?\{([^}]*)\}$/.exec(part);
    if (sp) { before += SKIP[sp[1]]; continue; }
    if (vs) { before += cmOf(vs[1]) * CM_DXA; continue; }
    if (/^(\\par\b|\n\s*\n)$/.test(part)) continue;
    const t = part.replace(/\\(noindent|centering|sffamily|hspace\*?\{[^}]*\}\s*$)/g, '').trim();
    if (!t) continue;
    const chunks = splitTop(t, /^\\hfill\b/).map((c) => c.trim()).filter(Boolean);
    if (chunks.length >= 2 && chunks.length <= 6) {
      const w = Math.floor(W_DXA / chunks.length);
      out += tbl({ rows: [chunks.map((c, k) => { const u = unbox(c); return { xml: cellPara(texToRuns(u.text, ctx, f), { jc: 'center' }), box: u.box }; })], widths: chunks.map(() => w), heights: [0.9 * CM_DXA], line: ctx.line }) + para('', { after: Math.max(60, before) });
      before = 0;
    } else {
      out += para(texToRuns(chunks.join(' '), ctx, f), { jc: centered ? 'center' : undefined, before: Math.round(before), after: 80, line: 340 });
      before = 0;
    }
  }
  if (before > 200) out += para('', { after: Math.round(before) });
  return out;
}

/** The block LaTeX of an exercise -> body XML. ctx: {cps, pics, math, fs, baseSz, unsupported}. */
export function texBlocks(src, ctx, f, centered = false) {
  let s = src.replace(/\\(renewcommand|setlength)\{[^}]*\}\{[^}]*\}/g, '').replace(/\\setlength\{[^}]*\}\{[^}]*\}/g, '');
  let out = '', i = 0;
  while (i < s.length) {
    const b = s.indexOf('\\begin{', i);
    if (b < 0) { out += paragraphs(s.slice(i), ctx, f, centered); break; }
    out += paragraphs(s.slice(i, b), ctx, f, centered);
    const [name, afterName] = (() => { const e = s.indexOf('}', b); return [s.slice(b + 7, e), e + 1]; })();
    if (/^(array|aligned|align\*?|equation\*?|gather\*?|cases|matrix)$/.test(name)) {   // maths environment outside $: let the text path handle it
      const [bodyEnd, next] = envEnd(s, name, afterName);
      out += paragraphs(s.slice(b, next), ctx, f, centered); i = next; void bodyEnd; continue;
    }
    const [bodyEnd, next] = envEnd(s, name, afterName);
    const inner = s.slice(afterName, bodyEnd);
    if (name === 'center') out += texBlocks(inner, ctx, f, true);
    else if (name === 'tabular') {
      let rest = inner, spec = '';
      while (rest[0] === ' ') rest = rest.slice(1);
      if (rest[0] === '{') { const [g, e] = group(rest, 0); spec = g; rest = rest.slice(e); }
      out += tabular(rest, spec, ctx, f, centered);
    } else if (name === 'tikzpicture') {
      let rest = inner, o = '';
      if (rest.trimStart()[0] === '[') { const t = rest.trimStart(); const e = t.indexOf(']'); o = t.slice(1, e); rest = t.slice(e + 1); }
      out += para(tikzRun(rest, o, ctx), { jc: centered ? 'center' : undefined, after: 100 });
    } else if (name === 'minipage') {
      // consecutive minipages (joined by \hfill) become the columns of one row
      const cells = []; let at = b, nx = next;
      for (;;) {
        const e1 = s.indexOf('}', at + 7), nm = s.slice(at + 7, e1);
        const [be, nn] = envEnd(s, 'minipage', e1 + 1);
        let body = s.slice(e1 + 1, be);
        let wm = /^\s*(?:\[[^\]]*\])?\s*\{([^}]*)\}/.exec(body);
        const frac = wm ? parseFloat(wm[1]) || 0.47 : 0.47;
        body = wm ? body.slice(wm[0].length) : body;
        const cw = Math.round(frac * W_DXA), keep = ctx.availW;
        ctx.availW = cw - 140;
        cells.push({ xml: texBlocks(body, ctx, f, false) || cellPara(''), w: cw });
        ctx.availW = keep;
        nx = nn; void nm;
        const m = /^\s*(?:\\hfill|\\quad|\\qquad)?\s*\\begin\{minipage\}/.exec(s.slice(nn));
        if (!m) break;
        at = nn + m[0].length - '\\begin{minipage}'.length;
      }
      out += tbl({ rows: [cells.map((c) => ({ xml: c.xml.replace(/<\/w:tbl>$/, '</w:tbl>' + '<w:p/>') }))], widths: cells.map((c) => c.w), line: ctx.line }) + para('', { after: 60 });
      i = nx; continue;
    } else if (name === 'enumerate' || name === 'itemize') {
      const items = inner.split(/\\item\b/).slice(1);
      items.forEach((it, k) => {
        const mark = name === 'enumerate' ? `${k + 1}. ` : '• ';
        out += para(`<w:r><w:rPr><w:b/><w:sz w:val="${ctx.baseSz || 26}"/></w:rPr><w:t xml:space="preserve">${esc(mark)}</w:t></w:r>${texToRuns(it.trim(), ctx, f)}`, { ind: 360, after: 80, line: 340 });
      });
    } else if (name === 'multicols') {
      out += texBlocks(inner.replace(/^\s*\{\d+\}/, ''), ctx, f, centered);
    } else out += texBlocks(inner, ctx, f, centered);
    i = next;
  }
  return out;
}

export { sceneRun };
