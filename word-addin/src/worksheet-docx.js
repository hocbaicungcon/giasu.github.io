// Worksheet (phiếu bài tập) -> Word. Takes result.sheets of the worksheet generator (latex_bank/worksheet-lib) and writes
// native Word content: title, name line, numbered exercises with items in columns, maths as Word equations, answer page.
import { latexToOmml } from './latex2omml.js';
import { tikzToScene, clockScene, TikzError } from './tikz.js';
import { texBlocks } from './worksheet-tex.js';
import { sceneToDrawingXml } from './figures/scene.js';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const EMOJI_FONT = '<w:rFonts w:ascii="Segoe UI Emoji" w:hAnsi="Segoe UI Emoji" w:eastAsia="Segoe UI Emoji"/>';
export const SHAPES = { shapecircle: '⚪', shaperectangle: '▭', shapesquare: '⬜', shapetriangle: '△' };

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

/** A figure (scene) as an inline drawing run (editable shapes). */
export function sceneRun(scene, ctx, name = 'Hình') {
  return `<w:r><w:rPr><w:noProof/></w:rPr>${sceneToDrawingXml(scene, { name, alt: name })}</w:r>`;
}
/** \tikz / tikzpicture code -> drawing run; anything the TikZ subset cannot do is flagged (ctx.unsupported) and shown as a note. */
export function tikzRun(code, optStr, ctx) {
  try {
    const sc = /scale\s*=\s*([\d.]+)/.exec(optStr || '');
    return sceneRun(tikzToScene(code, { scale: sc ? parseFloat(sc[1]) : 1, fs: ctx.fs || 16 }), ctx, 'Hình');
  } catch (e) {
    if (!(e instanceof TikzError)) throw e;
    ctx.unsupported = (ctx.unsupported || []).concat(e.message);
    return '<w:r><w:t>[hình]</w:t></w:r>';
  }
}

// blank to fill in (\boxed{\phantom{..}}): an inline rectangle drawing, about one digit wide and a little taller than the text
const BLANK_RE = /\\boxed\{\\phantom\{[^}]*\}\}/;
const BLANK_SPLIT = /(\\boxed\{\\phantom\{[^}]*\}\})/;
const blankRun = (ctx, chars = 2) => {
  const pt = (ctx.fs || 16) * 0.75, hPt = pt * 1.05, wPt = hPt * (chars > 1 ? 1.7 : 1), cm = (v) => (v / 28.35).toFixed(3);
  const sc = tikzToScene(`\\draw[line width=0.6pt] (0,0) rectangle (${cm(wPt)},${cm(hPt)});`, { scale: 1, fs: ctx.fs || 16 });
  const down = -Math.round(2 * (hPt / 2 - 0.2 * pt));   // half-points: lower the box so its middle is at the middle of the digits
  return sceneRun(sc, ctx, 'Ô trống').replace('<w:rPr><w:noProof/></w:rPr>', `<w:rPr><w:noProof/><w:position w:val="${down}"/></w:rPr>`).replace('distL="0" distR="0"', 'distL="36000" distR="36000"');
};
// primary-school arithmetic (digits, + - × ÷ = < >, brackets) is plain text, not an equation: easier to edit and lines up with the box
const PLAIN_MATH = /^(?:[0-9+\-=<>().,:;?\s]|\\(?:times|div|cdot|ldots|dots|leq?|geq?|neq|ne|quad|qquad|[ ,;:])|[{}])*$/;
const PLAIN_SYM = { times: '×', div: ':', cdot: '·', ldots: '…', dots: '…', le: '≤', leq: '≤', ge: '≥', geq: '≥', ne: '≠', neq: '≠' };
const plainMath = (tex) => tex.replace(/\\([a-z]+)/g, (_, n) => (n === 'quad' || n === 'qquad' ? '  ' : PLAIN_SYM[n] || '')).replace(/\\[ ,;:]/g, ' ').replace(/[{}]/g, '').replace(/-/g, '\u2212');
// the generator's shapes (\icShapecircle ...) as Word drawings, so "khoanh vào các hình ..." has something to circle
const SHAPE_TIKZ = {
  shapecircle: (f) => `\\filldraw[fill=${f || 'blue!60'},line width=0.8pt] (0,0) circle (0.34);`,
  shapesquare: (f) => `\\filldraw[fill=${f || 'red!65'},line width=0.8pt] (-0.3,-0.3) rectangle (0.3,0.3);`,
  shapetriangle: (f) => `\\filldraw[fill=${f || 'green!60'},line width=0.8pt] (0,0.38) -- (-0.42,-0.3) -- (0.42,-0.3) -- cycle;`,
  shaperectangle: (f) => `\\filldraw[fill=${f || 'yellow!85'},line width=0.8pt] (-0.44,-0.24) rectangle (0.44,0.24);`,
};
let picId = 5000;
/** A Twemoji picture (PNG prepared by the caller: ctx.pics.get(cp) = {rid, pt}) inline in the text, else the emoji character. */
function pictureRun(cp, ctx, fmt, shapeId = '') {
  const pic = cp && ctx.pics && ctx.pics.get(cp);
  const emoji = () => `<w:r><w:rPr>${EMOJI_FONT}<w:sz w:val="${fmt.emoji || 36}"/></w:rPr><w:t>${esc(cp ? String.fromCodePoint(...String(cp).split('-').map((h) => parseInt(h, 16))) : SHAPES[shapeId] || '●')}</w:t></w:r>`;
  if (!pic) return emoji();
  const e = Math.round(pic.pt * 12700), id = ++picId;
  return `<w:r><w:rPr><w:noProof/></w:rPr><w:drawing><wp:inline distT="0" distB="0" distL="30000" distR="30000"><wp:extent cx="${e}" cy="${e}"/><wp:docPr id="${id}" name="Twemoji ${cp}" descr="${cp}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${id}" name="${cp}.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${pic.rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${e}" cy="${e}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`;
}

/** Code points (hex, as file names of the Twemoji set) of the pictures the sheets use. */
export function usedPictures(result, cps = {}) {
  const text = JSON.stringify(result.sheets).replace(/\\\\/g, '\\');
  const set = new Set();
  for (const m of text.matchAll(/\\(?:wspic|wshz)(?:\[[^\]]*\])?\{ws-([0-9a-f-]+)\}/gi)) set.add(m[1].toLowerCase());
  for (const m of text.matchAll(/\\icO([A-Za-z]+)/g)) { const cp = cps[m[1].toLowerCase()]; if (cp) set.add(String(cp)); }
  return [...set];
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
      try {
        // blank boxes are drawn as a picture (a rectangle), big enough to write in; the maths around them stays equations
        tex.split(BLANK_SPLIT).forEach((part) => {
          const b = BLANK_RE.test(part) && /^\\boxed\{\\phantom\{([^}]*)\}\}$/.exec(part);
          if (b) out += blankRun(ctx, b[1].length);
          else if (PLAIN_MATH.test(part)) { flush(); out += run(plainMath(part)); } else if (part.replace(/\\[ ,;:]/g, '').trim()) out += ctx.math ? ctx.math(part.replace(/^(\\[ ,;:])+|(\\[ ,;:])+$/g, ''), fmt) : latexToOmml(part.replace(/^(\\[ ,;:])+|(\\[ ,;:])+$/g, ''));
        });
      } catch { out += run(tex.replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '')); }
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
      } else if (/^icO?Shape/.test(name)) {
        const id = name.replace(/^icO?/, '').toLowerCase(); flush();
        out += SHAPE_TIKZ[id] ? tikzRun(SHAPE_TIKZ[id](/^icO/.test(name) ? 'white' : ''), `scale=${parseFloat(opt) || 1}`, ctx) : '';
      } else if (/^icO/.test(name)) { flush(); out += run(emojiOf(name.slice(3).toLowerCase(), cps), { ...fmt, sz: fmt.emoji || 36 }, EMOJI_FONT); } else if (name === 'ldots' || name === 'dots' || name === 'cdots') buf += '…';
      else if (name === 'begin' && /^\{tikzpicture\}/.test(s.slice(i))) {
        flush();
        const e = s.indexOf('\\end{tikzpicture}', i);
        let code = s.slice(i + '{tikzpicture}'.length, e), o = opt;
        const t = code.trimStart();
        if (!o && t[0] === '[') { const k = t.indexOf(']'); o = t.slice(1, k); code = t.slice(k + 1); }
        out += tikzRun(code, o, ctx);
        i = e + '\\end{tikzpicture}'.length;
      } else if (name === 'end') { arg(); }
      else if (name === 'large' || name === 'Large' || name === 'LARGE' || name === 'huge' || name === 'small' || name === 'footnotesize' || name === 'tiny' || name === 'normalsize') { flush(); const k = { large: 1.15, Large: 1.3, LARGE: 1.5, huge: 1.7, small: 0.9, footnotesize: 0.8, tiny: 0.65, normalsize: 1 }[name]; fmt = { ...fmt, sz: Math.round((ctx.baseSz || fmt.sz || 26) * k) }; } else if (name === 'bfseries') { flush(); fmt = { ...fmt, b: true }; } else if (name === 'itshape') { flush(); fmt = { ...fmt, i: true }; } else if (name === 'tikz') {
        flush();
        let o = opt;
        while (s[i] === ' ') i++;
        if (!o && s[i] === '[') { const e = s.indexOf(']', i); o = s.slice(i + 1, e); i = e + 1; while (s[i] === ' ') i++; }
        let code;
        if (s[i] === '{') { const [g, e] = group(s, i); code = g; i = e; } else { const e = s.indexOf(';', i); code = s.slice(i, e + 1); i = e + 1; }
        out += tikzRun(code, o, ctx);
      } else if (name === 'wsclock') { const a = parseFloat(arg()), b = parseFloat(arg()); flush(); out += sceneRun(clockScene(a, b, ctx.fs ? ctx.fs * 0.7 : 11), ctx, 'đồng hồ'); } else if (name === 'wsarrow') {
        const ang = parseFloat(opt || '0'); arg(); flush();
        out += run(['→', '↗', '↑', '↖', '←', '↙', '↓', '↘'][((Math.round(ang / 45) % 8) + 8) % 8], { ...fmt, b: true });
      } else if (name === 'wstrace') { const t = arg(); flush(); out += texToRuns(t, ctx, { ...fmt, color: 'B3B3B3', sz: Math.round((fmt.sz || 26) * 1.3) }); } else if (name === 'wsblank') {
        const w = cm(arg()); flush(); out += run('\u00a0'.repeat(Math.max(3, Math.round(w * 4.2))), { ...fmt, u: true });
      } else if (name === 'raisebox') { arg(); while (s[i] === '[') i = s.indexOf(']', i) + 1; flush(); out += texToRuns(arg(), ctx, fmt); } else if (name === 'parbox') { arg(); flush(); out += texToRuns(arg(), ctx, fmt); } else if (name === 'fcolorbox') { arg(); arg(); flush(); out += texToRuns(arg(), ctx, { ...fmt, box: true }); } else if (name === 'cellcolor') arg();
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

export const para = (inner, o = {}) => `<w:p><w:pPr>${o.keepNext ? '<w:keepNext/>' : ''}${o.pageBreakBefore ? '<w:pageBreakBefore/>' : ''}${o.shade ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.shade}"/>` : ''}${o.pbdr ? `<w:pBdr>${o.pbdr}</w:pBdr>` : ''}${o.border ? '<w:pBdr><w:top w:val="single" w:sz="8" w:space="2" w:color="444444"/><w:left w:val="single" w:sz="8" w:space="4" w:color="444444"/><w:bottom w:val="single" w:sz="8" w:space="2" w:color="444444"/><w:right w:val="single" w:sz="8" w:space="4" w:color="444444"/></w:pBdr>' : ''}<w:spacing w:before="${o.before ?? 0}" w:after="${o.after ?? 60}"${o.line ? ` w:line="${o.line}" w:lineRule="auto"` : ''}/>${o.ind ? `<w:ind w:left="${o.ind}"/>` : ''}${o.jc ? `<w:jc w:val="${o.jc}"/>` : ''}</w:pPr>${inner}</w:p>`;
const NOB = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
const table = (rows, cols, widths) => `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${NOB}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows.map((r) => `<w:tr><w:trPr><w:cantSplit/></w:trPr>${r.map((cell, k) => `<w:tc><w:tcPr><w:tcW w:w="${widths[k]}" w:type="dxa"/></w:tcPr>${cell}</w:tc>`).join('')}</w:tr>`).join('')}</w:tbl>`;

// pictures drawn with TikZ in the LaTeX version (clock faces, dice, fraction pictures, tracing) have no Word form yet
const UNSUPPORTED = /\\(wsclock|tikz|draw|fill|filldraw|wstrace|wsblank|begin\{tikzpicture\})/;
/** True when a generated block can be written to Word (it has items and no TikZ-only pictures). */
export const printable = (b) => b.items.length > 0 || Boolean(b.bodyTex);
const SUBJECT_TITLE = { math: 'TOÁN', vi: 'TIẾNG VIỆT', en: 'TIẾNG ANH' };

/** Layout styles for the exercise headings (Bài 1, Bài 2 ...) and the title. */
export const WORKSHEET_STYLES = [
  ['round', 'Số trong vòng tròn (❶ ❷ ❸)'],
  ['band', 'Dải màu đậm'],
  ['box', 'Khung viền'],
  ['bar', 'Thanh màu bên trái'],
  ['line', 'Gạch chân'],
  ['plain', 'Đơn giản'],
];
const tint = (hex, k) => { const n = parseInt(hex, 16); const m = (c) => Math.round(c + (255 - c) * k); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => m(c).toString(16).padStart(2, '0')).join('').toUpperCase(); };
const CIRCLED = '❶❷❸❹❺❻❼❽❾❿';
const sbdr = (side, sz, color, space = 4) => `<w:${side} w:val="single" w:sz="${sz}" w:space="${space}" w:color="${color}"/>`;

function exHeading(style, n, instrRuns, acc, sz) {
  const bold = `<w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr>`;
  const label = (text, color, size = sz) => `<w:r><w:rPr><w:b/><w:color w:val="${color}"/><w:sz w:val="${size}"/></w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
  const gap = `<w:r>${bold}<w:t xml:space="preserve">  </w:t></w:r>`;
  const base = { before: 200, after: 100, keepNext: true };
  if (style === 'band') return para(label(` BÀI ${n} `, 'FFFFFF') + `<w:r><w:rPr><w:b/><w:color w:val="FFFFFF"/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve"> </w:t></w:r>` + instrRuns.replace(/<w:rPr>/g, '<w:rPr><w:color w:val="FFFFFF"/>'), { ...base, shade: acc, ind: 0 });
  if (style === 'box') return para(label(`Bài ${n}.`, acc) + gap + instrRuns, { ...base, shade: tint(acc, 0.9), pbdr: sbdr('top', 8, acc, 3) + sbdr('left', 8, acc, 5) + sbdr('bottom', 8, acc, 3) + sbdr('right', 8, acc, 5) });
  if (style === 'bar') return para(label(`Bài ${n}.`, acc) + gap + instrRuns, { ...base, shade: tint(acc, 0.92), pbdr: sbdr('left', 36, acc, 6) });
  if (style === 'line') return para(label(`Bài ${n}.`, acc) + gap + instrRuns, { ...base, pbdr: sbdr('bottom', 8, acc, 2) });
  if (style === 'plain') return para(label(`Bài ${n}.`, acc) + gap + instrRuns, base);
  return para(`<w:r><w:rPr><w:rFonts w:ascii="Segoe UI Symbol" w:hAnsi="Segoe UI Symbol"/><w:color w:val="${acc}"/><w:sz w:val="${sz + 8}"/></w:rPr><w:t xml:space="preserve">${n <= 10 ? CIRCLED[n - 1] : [...String(n)].map((d) => (d === '0' ? '⓿' : CIRCLED[d - 1])).join('')}</w:t></w:r>${gap}${instrRuns}`, base);
}

function titleBlock(style, heading, grade, acc, sz) {
  const run = (color, size) => `<w:r><w:rPr><w:b/><w:color w:val="${color}"/><w:sz w:val="${size}"/></w:rPr><w:t>${esc(heading)}</w:t></w:r>`;
  const lop = (color) => `<w:r><w:rPr><w:b/>${color ? `<w:color w:val="${color}"/>` : ''}<w:sz w:val="${sz + 2}"/></w:rPr><w:t>Lớp ${grade}</w:t></w:r>`;
  if (style === 'band') return para(run('FFFFFF', sz + 12), { jc: 'center', shade: acc, before: 0, after: 40, line: 400 }) + para(lop(acc), { jc: 'center', after: 120 });
  if (style === 'box') return para(run(acc, sz + 12), { jc: 'center', after: 40, shade: tint(acc, 0.9), pbdr: sbdr('top', 12, acc, 4) + sbdr('left', 12, acc, 6) + sbdr('bottom', 12, acc, 4) + sbdr('right', 12, acc, 6) }) + para(lop(acc), { jc: 'center', after: 120 });
  if (style === 'line') return para(run(acc, sz + 12), { jc: 'center', after: 40, pbdr: sbdr('bottom', 12, acc, 3) }) + para(lop(), { jc: 'center', after: 120 });
  return para(run(acc, sz + 12), { jc: 'center', after: 40 }) + para(lop(), { jc: 'center', after: 120 });
}

/**
 * options: {subject, grade, title, school, color: 'color'|'bw', fontPt (12-16), answers (bool), cps: {id: cp}, accent: '#hex'}
 * Returns {body (w:body children XML), skipped: [topic names with no printable items], count}.
 */
export function worksheetBody(result, options = {}) {
  const { subject = 'math', grade = 1, color = 'color', fontPt = 13, answers = true, cps = {}, accent = '1D6FB8', style = 'round', pics = new Map() } = options;
  const acc = color === 'bw' ? '222222' : accent.replace('#', '');
  const sz = Math.round(fontPt * 2);
  const half = sz;
  const ctx = { cps, pics, fs: fontPt / 0.75, baseSz: sz, math: (tex) => latexToOmml(tex).replace(/<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"\/><\/w:rPr>/g, `<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/><w:sz w:val="${half}"/><w:szCs w:val="${half}"/></w:rPr>`) };
  const f = { sz, emoji: Math.round(sz * 1.5) };
  const skipped = [];
  let body = '', count = 0;
  const W = 9638;   // text width in dxa (A4, 2 cm margins) -- Word rescales the percentage table anyway
  const renderBlock = (b) => {
    ctx.unsupported = [];
    let xml = '';
    try {
      if (b.bodyTex) xml = texBlocks(b.bodyTex, ctx, f);
      else if (b.items.length) {
        const cols = Math.max(1, Math.min(b.cols || 1, 5));
        const cell = (it, k) => {
          const q = it.q;
          const lines = /^\$\\begin\{array\}/.test(q.trim()) ? arrayLines(q.trim().replace(/^\$|\$$/g, '')) : null;
          const num = `<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">${k + 1}. </w:t></w:r>`;
          if (lines) {
            return para(num, { after: 0 }) + lines.map((l) => `<w:p><w:pPr><w:spacing w:before="0" w:after="0"/><w:ind w:left="500"/>${l.rule ? '<w:pBdr><w:bottom w:val="single" w:sz="8" w:space="1" w:color="222222"/></w:pBdr>' : ''}<w:jc w:val="left"/></w:pPr>${texToRuns(l.text.replace(/^([+\-−×:])\s*/, '$1  '), ctx, f)}</w:p>`).join('') + para(texToRuns('\u00a0', ctx, f), { after: 120 });
          }
          return para(num + texToRuns(q, ctx, f), { after: 100, line: 340 });
        };
        if (cols === 1) xml = b.items.map((it, k) => cell(it, k)).join('');
        else {
          const widths = Array.from({ length: cols }, () => Math.floor(W / cols));
          const rows = [];
          for (let k = 0; k < b.items.length; k += cols) rows.push(Array.from({ length: cols }, (_, c) => (b.items[k + c] ? cell(b.items[k + c], k + c) : para('', { after: 0 }))));
          xml = table(rows, cols, widths);
        }
      }
    } catch (e) { return { b, ok: false, xml: '' }; }
    return { b, ok: Boolean(xml) && !(ctx.unsupported && ctx.unsupported.length), xml };
  };
  result.sheets.forEach((sheet, v) => {
    const code = result.sheets.length > 1 ? ` — Mã đề ${String.fromCharCode(65 + v)}` : '';
    if (options.school) body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t>${esc(options.school)}</w:t></w:r>`, { after: 40 });
    const heading = (options.title || `PHIẾU BÀI TẬP ${SUBJECT_TITLE[subject] || ''}`.trim()) + code;
    { const t = titleBlock(style, heading, grade, acc, sz); body += v > 0 ? t.replace('<w:pPr>', '<w:pPr><w:pageBreakBefore/>') : t; }
    body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">Họ và tên: ${'.'.repeat(34)}   Lớp: ${'.'.repeat(10)}   Ngày: ${'.'.repeat(12)}</w:t></w:r>`, { border: true, shade: color === 'bw' ? 'F3F3F3' : 'EAF2FB', after: 160, line: 360 });
    let n = 0;
    const rendered = sheet.blocks.map((b) => renderBlock(b));
    for (const r of rendered) { if (!r.ok && !skipped.includes(r.b.name)) skipped.push(r.b.name); }
    for (const r of rendered) {
      if (!r.ok) continue;
      n++;
      body += exHeading(style, n, texToRuns(r.b.instr, ctx, { ...f, b: true }), acc, sz) + r.xml;
      count += r.b.bodyTex ? Math.max(1, r.b.items.length) : r.b.items.length;
    }
    sheet.ok = rendered;
    body += para(`<w:r><w:rPr><w:i/><w:color w:val="666666"/><w:sz w:val="18"/></w:rPr><w:t>Gia sư AI • https://giasu.ai.vn</w:t></w:r>`, { jc: 'right', before: 240, after: 0 });
    if (pics.size) body += para(`<w:r><w:rPr><w:i/><w:color w:val="888888"/><w:sz w:val="14"/></w:rPr><w:t>Hình minh hoạ: Twemoji (Twitter, Inc. và những người đóng góp), giấy phép CC-BY 4.0 — github.com/jdecked/twemoji</w:t></w:r>`, { jc: 'right', after: 0 });
    if (answers) {
      body += para(`<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz + 8}"/></w:rPr><w:t>ĐÁP ÁN${code}</w:t></w:r>`, { jc: 'center', pageBreakBefore: true, after: 120 });
      let k = 0;
      for (const { b, ok } of sheet.ok) {
        if (!ok) continue;
        k++;
        const parts = b.noAnswer || (b.bodyTex && b.answer) ? [] : b.items.map((it, j) => `${j + 1}) ${it.a}`);
        body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">Bài ${k}. </w:t></w:r>${parts.length ? parts.map((p) => texToRuns(p, ctx, { sz })).join('<w:r><w:t xml:space="preserve">    </w:t></w:r>') : texToRuns(b.answer || '(bài làm tự do)', ctx, { sz })}`, { after: 80, line: 340 });
      }
    }
  });
  return { body, skipped, count };
}

const NS = 'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
/** Flat-OPC package whose body is the given XML (for selection.insertOoxml / a new document). */
export function bodyPackage(bodyXml, images = []) {
  const b64 = (bytes) => { let t = ''; for (let i = 0; i < bytes.length; i += 0x8000) t += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(t).replace(/(.{76})/g, '$1\n'); };
  const rels = images.map((im) => `<Relationship Id="${im.rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${im.rid}.png"/>`).join('');
  const media = images.map((im) => `<pkg:part pkg:name="/word/media/${im.rid}.png" pkg:contentType="image/png" pkg:compression="store"><pkg:binaryData>${b64(im.png)}</pkg:binaryData></pkg:part>`).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><?mso-application progid="Word.Document"?><pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS}><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part>${images.length ? `<pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels}</Relationships></pkg:xmlData></pkg:part>` : ''}${media}</pkg:package>`;
}
