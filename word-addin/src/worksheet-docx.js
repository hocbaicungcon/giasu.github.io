// Worksheet (phiếu bài tập) -> Word. Takes result.sheets of the worksheet generator (latex_bank/worksheet-lib) and writes
// native Word content: title, name line, numbered exercises with items in columns, maths as Word equations, answer page.
import { latexToOmml } from './latex2omml.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const EMOJI_FONT = '<w:rFonts w:ascii="Segoe UI Emoji" w:hAnsi="Segoe UI Emoji" w:eastAsia="Segoe UI Emoji"/>';
const SHAPES = { shapecircle: '⚪', shaperectangle: '▭', shapesquare: '⬜', shapetriangle: '△' };

/** Emoji for a TikZ icon name (\icOChick -> chick); `cps` maps id -> code point (hex), from the generator's picture library. */
const emojiOf = (id, cps) => (cps[id] ? String.fromCodePoint(...String(cps[id]).split('-').map((h) => parseInt(h, 16))) : SHAPES[id] || '●');

function group(s, i) {   // text of the {...} group starting at s[i] (s[i] === '{'), and the index after it
  let depth = 0, j = i;
  for (; j < s.length; j++) { if (s[j] === '\\') { j++; continue; } if (s[j] === '{') depth++; else if (s[j] === '}' && --depth === 0) break; }
  return [s.slice(i + 1, j), j + 1];
}

/** Vertical arithmetic ($\begin{array}{r@{\,}r} a\\ + & b\\ \hline ... $) -> lines of text, right aligned. */
function arrayLines(tex) {
  const t = tex.trim();
  if (!t.startsWith('\\begin{array}') || !t.endsWith('\\end{array}')) return null;
  const [, after] = group(t, '\\begin{array}'.length);
  const inner = t.slice(after, t.length - '\\end{array}'.length);
  if (!/\\hline/.test(inner)) return null;
  const m = [null, inner];
  const rows = m[1].split(/\\\\(?:\[[^\]]*\])?/).map((r) => r.trim()).filter(Boolean);
  const lines = [];
  for (const r of rows) {
    const hl = /\\hline/.test(r);
    const cells = r.replace(/\\hline/g, '').split('&').map((c) => c.replace(/\\phantom\{[^}]*\}/g, '').replace(/\\,/g, '').trim());
    const text = cells.filter(Boolean).join(' ');
    if (text) lines.push({ text, rule: false });
    if (hl && lines.length) lines[lines.length - 1].rule = true;
  }
  return lines;
}

/**
 * LaTeX text fragment (text with $maths$, \textit{..}, \ldots ...) -> runs XML. fmt: {b, i, u, box, sz}.
 * ctx: {cps, math(latex) -> omml or throws}.
 */
export function texToRuns(s, ctx = {}, fmt = {}) {
  const cps = ctx.cps || {};
  const rpr = (f, extra = '') => {
    const x = `${extra}${f.b ? '<w:b/>' : ''}${f.i ? '<w:i/>' : ''}${f.u ? '<w:u w:val="single"/>' : ''}${f.box ? '<w:bdr w:val="single" w:sz="6" w:space="1" w:color="444444"/>' : ''}${f.color ? `<w:color w:val="${f.color}"/>` : ''}${f.sz ? `<w:sz w:val="${f.sz}"/><w:szCs w:val="${f.sz}"/>` : ''}`;
    return x ? `<w:rPr>${x}</w:rPr>` : '';
  };
  const run = (t, f = fmt, extra = '') => (t ? `<w:r>${rpr(f, extra)}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>` : '');
  let out = '', buf = '', i = 0;
  const flush = () => { out += run(buf); buf = ''; };
  const dots = (n) => '.'.repeat(Math.max(4, Math.round(n)));
  const cm = (t) => { const m = /([\d.]+)\s*(cm|mm|pt|em|ex)?/.exec(t || ''); return m ? parseFloat(m[1]) * ({ mm: 0.1, pt: 0.035, em: 0.4, ex: 0.2 }[m[2]] || 1) : 1; };
  while (i < s.length) {
    const c = s[i];
    if (c === '$') {
      const j = s.indexOf('$', i + 1);
      if (j < 0) { buf += s.slice(i + 1); break; }
      flush();
      const tex = s.slice(i + 1, j);
      try { out += ctx.math ? ctx.math(tex, fmt) : latexToOmml(tex); } catch { out += run(tex.replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '')); }
      i = j + 1; continue;
    }
    if (c === '\\') {
      const d = s[i + 1];
      if (d === '\\') { flush(); out += '<w:r><w:br/></w:r>'; i += 2; if (s[i] === '[') i = s.indexOf(']', i) + 1; continue; }
      if (d === ' ' || d === ',' || d === ';' || d === ':') { buf += d === ',' ? ' ' : ' '; i += 2; continue; }
      if (/[_%&#{}$]/.test(d)) { buf += d; i += 2; continue; }
      const m = /^\\([a-zA-Z]+)\*?/.exec(s.slice(i));
      if (!m) { i += 2; continue; }
      const name = m[1]; i += m[0].length;
      let opt = '';
      if (s[i] === '[') { const e = s.indexOf(']', i); opt = s.slice(i + 1, e); i = e + 1; }
      const arg = () => { while (s[i] === ' ') i++; if (s[i] !== '{') return ''; const [g, e] = group(s, i); i = e; return g; };
      if (name === 'textit' || name === 'emph') { flush(); out += texToRuns(arg(), ctx, { ...fmt, i: true }); } else if (name === 'textbf') { flush(); out += texToRuns(arg(), ctx, { ...fmt, b: true }); } else if (name === 'underline') { flush(); out += texToRuns(arg(), ctx, { ...fmt, u: true }); } else if (name === 'text' || name === 'textrm' || name === 'textsf' || name === 'mbox') { flush(); out += texToRuns(arg(), ctx, fmt); } else if (name === 'wsbox' || name === 'fbox') { flush(); out += texToRuns(arg(), ctx, { ...fmt, box: true }); } else if (name === 'textcolor') { arg(); flush(); out += texToRuns(arg(), ctx, fmt); } else if (name === 'makebox') {
        const body = arg(); flush();
        out += /dotfill|hrulefill/.test(body) ? run(dots(cm(opt) * 4.5)) : texToRuns(body, ctx, fmt);
      } else if (name === 'dotfill' || name === 'hrulefill') { flush(); out += run(dots(18)); } else if (name === 'hspace') { const w = cm(arg()); buf += ' '.repeat(Math.max(1, Math.round(w * 3))); } else if (name === 'phantom' || name === 'vspace' || name === 'rule' || name === 'color') { arg(); if (name === 'rule') arg(); } else if (name === 'wspic' || name === 'wshz') {
        const id = arg(); flush();
        const cp = /^ws-([0-9a-f-]+)$/i.exec(id);
        if (cp) out += run(String.fromCodePoint(...cp[1].split('-').map((h) => parseInt(h, 16))), { ...fmt, sz: fmt.emoji || 36 }, EMOJI_FONT);
      } else if (/^icO/.test(name)) { flush(); out += run(emojiOf(name.slice(3).toLowerCase(), cps), { ...fmt, sz: fmt.emoji || 36 }, EMOJI_FONT); } else if (name === 'ldots' || name === 'dots' || name === 'cdots') buf += '…';
      else if (name === 'quad' || name === 'qquad') buf += ' ';
      else if (name === 'checkmark') buf += '✓';
      else if (name === 'rightarrow' || name === 'to') buf += '→';
      else if (name === 'times') buf += '×';
      else if (name === 'textbullet') buf += '•';
      else if (name === 'par' || name === 'smallskip' || name === 'medskip' || name === 'bigskip') { flush(); out += '<w:r><w:br/></w:r>'; } else if (name === 'wsarrow') { buf += '→'; }
      // other commands (\hfill, \noindent, \linewidth ...): dropped
      continue;
    }
    if (c === '{' || c === '}') { i++; continue; }
    if (c === '~') { buf += ' '; i++; continue; }
    if (c === '-' && s[i + 1] === '-') { buf += s[i + 2] === '-' ? '—' : '–'; i += s[i + 2] === '-' ? 3 : 2; continue; }
    if (c === '`' && s[i + 1] === '`') { buf += '“'; i += 2; continue; }
    if (c === "'" && s[i + 1] === "'") { buf += '”'; i += 2; continue; }
    if (c === '\n') { buf += ' '; i++; continue; }
    buf += c; i++;
  }
  flush();
  return out;
}

const para = (inner, o = {}) => `<w:p><w:pPr>${o.keepNext ? '<w:keepNext/>' : ''}${o.pageBreakBefore ? '<w:pageBreakBefore/>' : ''}${o.shade ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.shade}"/>` : ''}${o.border ? '<w:pBdr><w:top w:val="single" w:sz="8" w:space="2" w:color="444444"/><w:left w:val="single" w:sz="8" w:space="4" w:color="444444"/><w:bottom w:val="single" w:sz="8" w:space="2" w:color="444444"/><w:right w:val="single" w:sz="8" w:space="4" w:color="444444"/></w:pBdr>' : ''}<w:spacing w:before="${o.before ?? 0}" w:after="${o.after ?? 60}"${o.line ? ` w:line="${o.line}" w:lineRule="auto"` : ''}/>${o.ind ? `<w:ind w:left="${o.ind}"/>` : ''}${o.jc ? `<w:jc w:val="${o.jc}"/>` : ''}</w:pPr>${inner}</w:p>`;
const NOB = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
const table = (rows, cols, widths) => `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${NOB}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows.map((r) => `<w:tr><w:trPr><w:cantSplit/></w:trPr>${r.map((cell, k) => `<w:tc><w:tcPr><w:tcW w:w="${widths[k]}" w:type="dxa"/></w:tcPr>${cell}</w:tc>`).join('')}</w:tr>`).join('')}</w:tbl>`;

// pictures drawn with TikZ in the LaTeX version (clock faces, dice, fraction pictures, tracing) have no Word form yet
const UNSUPPORTED = /\\(wsclock|tikz|draw|fill|filldraw|wstrace|wsblank|begin\{tikzpicture\})/;
/** True when a generated block can be written to Word (it has items and no TikZ-only pictures). */
export const printable = (b) => b.items.length > 0 && !UNSUPPORTED.test(b.items.map((it) => it.q).join(' ') + b.instr);
const SUBJECT_TITLE = { math: 'TOÁN', vi: 'TIẾNG VIỆT', en: 'TIẾNG ANH' };

/**
 * options: {subject, grade, title, school, color: 'color'|'bw', fontPt (12-16), answers (bool), cps: {id: cp}, accent: '#hex'}
 * Returns {body (w:body children XML), skipped: [topic names with no printable items], count}.
 */
export function worksheetBody(result, options = {}) {
  const { subject = 'math', grade = 1, color = 'color', fontPt = 13, answers = true, cps = {}, accent = '1D6FB8' } = options;
  const acc = color === 'bw' ? '222222' : accent.replace('#', '');
  const sz = Math.round(fontPt * 2);
  const half = sz;
  const ctx = { cps, math: (tex) => latexToOmml(tex.replace(/\\boxed\{\\phantom\{[^}]*\}\}/g, '\\square')).replace(/<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"\/><\/w:rPr>/g, `<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/><w:sz w:val="${half}"/><w:szCs w:val="${half}"/></w:rPr>`) };
  const f = { sz, emoji: Math.round(sz * 1.5) };
  const skipped = [];
  let body = '', count = 0;
  const W = 9638;   // text width in dxa (A4, 2 cm margins) -- Word rescales the percentage table anyway
  result.sheets.forEach((sheet, v) => {
    const code = result.sheets.length > 1 ? ` — Mã đề ${String.fromCharCode(65 + v)}` : '';
    if (options.school) body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t>${esc(options.school)}</w:t></w:r>`, { after: 40 });
    const heading = (options.title || `PHIẾU BÀI TẬP ${SUBJECT_TITLE[subject] || ''}`.trim()) + code;
    body += para(`<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz + 12}"/></w:rPr><w:t>${esc(heading)}</w:t></w:r>`, { jc: 'center', before: v ? 0 : 0, after: 40, pageBreakBefore: v > 0 });
    body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz + 2}"/></w:rPr><w:t>Lớp ${grade}</w:t></w:r>`, { jc: 'center', after: 120 });
    body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">Họ và tên: ${'.'.repeat(34)}   Lớp: ${'.'.repeat(10)}   Ngày: ${'.'.repeat(12)}</w:t></w:r>`, { border: true, shade: color === 'bw' ? 'F3F3F3' : 'EAF2FB', after: 160, line: 360 });
    let n = 0;
    for (const b of sheet.blocks) {
      if (!printable(b)) { skipped.push(b.name); continue; }
      n++;
      body += para(`<w:r><w:rPr><w:b/><w:color w:val="FFFFFF"/><w:sz w:val="${sz}"/><w:shd w:val="clear" w:color="auto" w:fill="${acc}"/></w:rPr><w:t xml:space="preserve"> Bài ${n} </w:t></w:r><w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">  </w:t></w:r>${texToRuns(b.instr, ctx, { ...f, b: true })}`, { before: 160, after: 80, keepNext: true });
      const cols = Math.max(1, Math.min(b.cols || 1, 5));
      const cell = (it, k) => {
        const q = it.q;
        const lines = /^\$\\begin\{array\}/.test(q.trim()) ? arrayLines(q.trim().replace(/^\$|\$$/g, '')) : null;
        const num = `<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">${k + 1}. </w:t></w:r>`;
        if (lines) {
          return para(num, { after: 0 }) + lines.map((l) => `<w:p><w:pPr><w:spacing w:before="0" w:after="0"/><w:ind w:left="500"/>${l.rule ? '<w:pBdr><w:bottom w:val="single" w:sz="8" w:space="1" w:color="222222"/></w:pBdr>' : ''}<w:jc w:val="left"/></w:pPr>${texToRuns(l.text.replace(/^([+\-−×:])\s*/, '$1  '), ctx, f)}</w:p>`).join('') + para(texToRuns(' ', ctx, f), { after: 120 });
        }
        return para(num + texToRuns(q, ctx, f), { after: 100, line: 340 });
      };
      if (cols === 1) body += b.items.map((it, k) => cell(it, k)).join('');
      else {
        const widths = Array.from({ length: cols }, () => Math.floor(W / cols));
        const rows = [];
        for (let k = 0; k < b.items.length; k += cols) rows.push(Array.from({ length: cols }, (_, c) => (b.items[k + c] ? cell(b.items[k + c], k + c) : para('', { after: 0 }))));
        body += table(rows, cols, widths);
      }
      count += b.items.length;
    }
    body += para(`<w:r><w:rPr><w:i/><w:color w:val="666666"/><w:sz w:val="18"/></w:rPr><w:t>Gia sư AI • https://giasu.ai.vn</w:t></w:r>`, { jc: 'right', before: 240, after: 0 });
    if (answers) {
      body += para(`<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz + 8}"/></w:rPr><w:t>ĐÁP ÁN${code}</w:t></w:r>`, { jc: 'center', pageBreakBefore: true, after: 120 });
      let k = 0;
      for (const b of sheet.blocks) {
        if (!printable(b)) continue;
        k++;
        const parts = b.noAnswer ? [] : b.items.map((it, j) => `${j + 1}) ${it.a}`);
        body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">Bài ${k}. </w:t></w:r>${parts.length ? parts.map((p) => texToRuns(p, ctx, { sz })).join('<w:r><w:t xml:space="preserve">    </w:t></w:r>') : texToRuns(b.answer || '(bài làm tự do)', ctx, { sz })}`, { after: 80, line: 340 });
      }
    }
  });
  return { body, skipped, count };
}

const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
/** Flat-OPC package whose body is the given XML (for selection.insertOoxml / a new document). */
export function bodyPackage(bodyXml) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><?mso-application progid="Word.Document"?><pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS}><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
}
