// Small math layout engine: LaTeX tree -> SVG (and PNG in a browser). It draws the picture Word shows for a MathType
// object (MathType itself redraws it when the equation is edited). Units are points for a 12 pt equation.
import { latexToTree, normalizeNodes, NARY_OPS, SIDE_LIMITS } from './latex2omml.js';

const FONT = "'Times New Roman', 'STIX Two Text', serif";
const SYMS = "'Cambria Math', 'STIX Two Math', 'Apple Symbols', 'Segoe UI Symbol'";
export const FAMILIES = {
  times: `'Times New Roman', 'Times', 'STIX Two Text', ${SYMS}, serif`,
  palatino: `'Palatino Linotype', 'Book Antiqua', Palatino, 'Times New Roman', ${SYMS}, serif`,
  cambria: `Cambria, 'Times New Roman', ${SYMS}, serif`,
  sans: `Arial, 'Helvetica Neue', Helvetica, ${SYMS}, sans-serif`,
};
let MATHFONT = FAMILIES.times;
const BINARY = new Set([...'=<>+−±∓×⋅÷≤≥≠≈≡∈∉⊂⊃⊆⊇∪∩→←↔⇒⇐⇔⟶∝∥⊥≃≅∼≪≫']);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// approximate advance widths (em) when no canvas is available
function approxWidth(ch, italic) {
  if (/\s/.test(ch)) return 0.25;
  if (/[0-9]/.test(ch)) return 0.5;
  if (/[ilj.,;:'!|()[\]]/.test(ch)) return 0.3;
  if (/[mwMW]/.test(ch)) return 0.8;
  if (/[A-Z]/.test(ch)) return italic ? 0.62 : 0.68;
  if (/[a-z]/.test(ch)) return 0.48;
  if (BINARY.has(ch)) return 0.78;
  return 0.65;
}

let canvasCtx = null;
function measure(ch, fs, italic) {
  try {
    if (typeof document !== 'undefined') {
      canvasCtx = canvasCtx || document.createElement('canvas').getContext('2d');
      canvasCtx.font = `${italic ? 'italic ' : ''}${fs}px ${MATHFONT}`;
      return canvasCtx.measureText(ch).width;
    }
  } catch { /* fall through */ }
  return approxWidth(ch, italic) * fs;
}

// A box: {w, a, d, draw(x, y) -> svg string} where y is the baseline.
const empty = () => ({ w: 0, a: 0, d: 0, draw: () => '' });
function hbox(parts) {
  let w = 0, a = 0, d = 0;
  for (const p of parts) { w += p.w; a = Math.max(a, p.a); d = Math.max(d, p.d); }
  return { w, a, d, draw: (x, y) => { let cx = x; return parts.map((p) => { const s = p.draw(cx, y); cx += p.w; return s; }).join(''); } };
}
const kern = (w) => ({ w, a: 0, d: 0, draw: () => '' });

function glyph(text, fs, { italic = false, bold = false } = {}) {
  const w = [...text].reduce((s, c) => s + measure(c, fs, italic), 0);
  return {
    w, a: fs * 0.72, d: fs * 0.22,
    draw: (x, y) => `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-size="${fs}" font-family="${MATHFONT}"${italic ? ' font-style="italic"' : ''}${bold ? ' font-weight="bold"' : ''}>${esc(text)}</text>`,
  };
}

function runBox(text, sty, fs, noSpaceFirst) {
  const parts = [];
  const chars = [...text];
  chars.forEach((ch, i) => {
    const letter = /\p{L}/u.test(ch);
    const italic = letter && sty !== 'p' && sty !== 'nor' && !/[Ͱ-Ͽ]/.test(ch) ? true : (letter && /[α-ω]/.test(ch) && sty !== 'p');
    const bold = sty === 'b';
    const binary = BINARY.has(ch) && sty !== 'nor' && !(noSpaceFirst && i === 0);
    if (binary) parts.push(kern(fs * 0.22));
    parts.push(glyph(ch, fs, { italic, bold }));
    if (binary) parts.push(kern(fs * 0.22));
    if ((ch === ',' || ch === ';') && chars[i + 1] !== ' ') parts.push(kern(fs * 0.17));
  });
  return hbox(parts);
}

function line(x1, y1, x2, y2, sw) { return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="#000" stroke-width="${sw}"/>`; }

function stretchy(kind, h, d, fs) {   // a fence drawn as a path, spanning from baseline-a to baseline+d
  const w = Math.max(fs * 0.34, h * 0.14);
  const total = h + d;
  return {
    w, a: h, d,
    draw: (x, y) => {
      const top = y - h, bot = y + d, mid = (top + bot) / 2, sw = Math.max(0.6, fs * 0.06);
      const L = x + w * 0.2, R = x + w * 0.85;
      let p = '';
      switch (kind) {
        case '(': p = `<path d="M${R} ${top} Q${L - 1} ${mid} ${R} ${bot}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case ')': p = `<path d="M${L} ${top} Q${R + 1} ${mid} ${L} ${bot}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case '[': p = `<path d="M${R} ${top} H${L} V${bot} H${R}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case ']': p = `<path d="M${L} ${top} H${R} V${bot} H${L}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case '{': p = `<path d="M${R} ${top} Q${x + w * 0.5} ${top} ${x + w * 0.5} ${top + total * 0.2} V${mid - total * 0.06} Q${x + w * 0.5} ${mid} ${L} ${mid} Q${x + w * 0.5} ${mid} ${x + w * 0.5} ${mid + total * 0.06} V${bot - total * 0.2} Q${x + w * 0.5} ${bot} ${R} ${bot}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case '}': p = `<path d="M${L} ${top} Q${x + w * 0.5} ${top} ${x + w * 0.5} ${top + total * 0.2} V${mid - total * 0.06} Q${x + w * 0.5} ${mid} ${R} ${mid} Q${x + w * 0.5} ${mid} ${x + w * 0.5} ${mid + total * 0.06} V${bot - total * 0.2} Q${x + w * 0.5} ${bot} ${L} ${bot}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case '|': p = line(x + w / 2, top, x + w / 2, bot, sw); break;
        case '‖': p = line(x + w * 0.35, top, x + w * 0.35, bot, sw) + line(x + w * 0.7, top, x + w * 0.7, bot, sw); break;
        case '⟨': p = `<path d="M${R} ${top} L${L} ${mid} L${R} ${bot}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        case '⟩': p = `<path d="M${L} ${top} L${R} ${mid} L${L} ${bot}" fill="none" stroke="#000" stroke-width="${sw}"/>`; break;
        default: p = '';
      }
      return p;
    },
  };
}

function layout(nodes, fs, level = 0) {
  const parts = [];
  let prev = null;
  for (const n of normalizeNodes(nodes)) {
    // + and - at the start of a group, or right after an operator / opening bracket, are signs: no spacing around them
    const unary = n.k === 'run' && /^[+\u2212\u00b1\u2213]/.test(n.text) && (prev === null || (prev.k === 'run' && (BINARY.has(prev.text.slice(-1)) || /[(\[{,;]$/.test(prev.text))));
    parts.push(unary ? { ...nodeBox({ ...n, text: n.text.slice(0, 1) }, fs, level, true), } && hbox([runBox(n.text.slice(0, 1), n.sty, fs, true), n.text.length > 1 ? runBox(n.text.slice(1), n.sty, fs) : empty()]) : nodeBox(n, fs, level));
    prev = n;
  }
  return parts.length ? hbox(parts) : empty();
}
const scriptFs = (fs) => Math.max(fs * 0.7, 5);

function stack(top, bottom, gap, w) {   // vertical fraction-like stack: top above axis, bottom below
  return { top, bottom, gap, w };
}

function nodeBox(n, fs, level) {
  switch (n.k) {
    case 'run': return runBox(n.text, n.sty, fs);
    case 'f': {
      const cfs = level === 0 ? fs : fs;
      const nu = layout(n.num, cfs * 0.95, level + 1), de = layout(n.den, cfs * 0.95, level + 1);
      const w = Math.max(nu.w, de.w) + fs * 0.3, axis = fs * 0.28, gap = fs * 0.12;
      const a = axis + gap + nu.d + nu.a, d = de.a + de.d + gap - axis;
      return { w, a, d: Math.max(d, 0), draw: (x, y) => nu.draw(x + (w - nu.w) / 2, y - axis - gap - nu.d) + (n.noBar ? '' : line(x + fs * 0.05, y - axis, x + w - fs * 0.05, y - axis, Math.max(0.5, fs * 0.05))) + de.draw(x + (w - de.w) / 2, y - axis + gap + de.a) };
    }
    case 'rad': {
      const body = layout(n.e, fs, level), deg = n.deg ? layout(n.deg, scriptFs(fs), level + 1) : null;
      const rw = fs * 0.6, pad = fs * 0.1, top = body.a + fs * 0.15;
      const w = rw + body.w + pad + (deg ? Math.max(deg.w - rw * 0.4, 0) : 0), off = deg ? Math.max(deg.w - rw * 0.4, 0) : 0;
      return { w, a: top + fs * 0.08, d: body.d + fs * 0.05, draw: (x, y) => {
        const x0 = x + off, sw = Math.max(0.5, fs * 0.05), bot = y + body.d + fs * 0.03;
        return (deg ? deg.draw(x, y - top * 0.55) : '') +
          `<path d="M${x0} ${y - fs * 0.12} L${x0 + rw * 0.25} ${y - fs * 0.2} L${x0 + rw * 0.5} ${bot} L${x0 + rw} ${y - top}" fill="none" stroke="#000" stroke-width="${sw}"/>` +
          line(x0 + rw, y - top, x0 + w - off - pad / 2, y - top, sw) + body.draw(x0 + rw, y);
      } };
    }
    case 'script': {
      const base = nodeBox(n.base, fs, level);
      const sfs = scriptFs(fs);
      const sup = n.sup ? layout(n.sup, sfs, level + 1) : null, sub = n.sub ? layout(n.sub, sfs, level + 1) : null;
      const supUp = Math.max(base.a * 0.62, fs * 0.38) + (sup ? sup.d * 0.2 : 0), subDown = Math.max(base.d, 0) + fs * 0.18 + (sub ? 0 : 0);
      const w = base.w + Math.max(sup ? sup.w : 0, sub ? sub.w : 0) + fs * 0.04;
      return { w, a: Math.max(base.a, sup ? supUp + sup.a : 0), d: Math.max(base.d, sub ? subDown + sub.d - fs * 0.1 : 0), draw: (x, y) => base.draw(x, y) + (sup ? sup.draw(x + base.w + fs * 0.03, y - supUp) : '') + (sub ? sub.draw(x + base.w + fs * 0.03, y + subDown - fs * 0.12) : '') };
    }
    case 'd': {
      const items = n.items.map((it) => layout(it, fs, level));
      const inner = hbox(items.flatMap((b, i) => (i ? [kern(fs * 0.3), b] : [b])));
      const a = Math.max(inner.a, fs * 0.72) + fs * 0.05, d = Math.max(inner.d, fs * 0.22) + fs * 0.05;
      const l = n.beg ? stretchy(n.beg, a, d, fs) : empty(), r = n.end ? stretchy(n.end, a, d, fs) : empty();
      return hbox([l, kern(fs * 0.05), inner, kern(fs * 0.05), r]);
    }
    case 'nary': {
      const big = fs * (SIDE_LIMITS.has(n.op) ? 1.5 : 1.3);
      const sym = glyph(NARY_OPS[n.op], big);
      const sfs = scriptFs(fs);
      const lo = n.sub ? layout(n.sub, sfs, level + 1) : null, up = n.sup ? layout(n.sup, sfs, level + 1) : null;
      const side = SIDE_LIMITS.has(n.op);
      const w = side ? sym.w + Math.max(lo ? lo.w : 0, up ? up.w : 0) * 0.9 : Math.max(sym.w, lo ? lo.w : 0, up ? up.w : 0);
      const a = side ? Math.max(sym.a * 0.9, up ? fs * 0.7 + up.a : 0) : sym.a * 0.9 + (up ? up.a + up.d + fs * 0.1 : 0);
      const d = side ? Math.max(sym.d, lo ? fs * 0.85 + lo.d : 0) : sym.d + (lo ? lo.a + lo.d + fs * 0.1 : 0);
      const head = { w, a, d, draw: (x, y) => {
        const sy = y + fs * 0.08;
        if (side) return sym.draw(x, sy) + (up ? up.draw(x + sym.w * 0.9, y - fs * 0.7) : '') + (lo ? lo.draw(x + sym.w * 0.45, y + fs * 0.85) : '');
        return sym.draw(x + (w - sym.w) / 2, sy) + (up ? up.draw(x + (w - up.w) / 2, y - sym.a - up.d - fs * 0.05) : '') + (lo ? lo.draw(x + (w - lo.w) / 2, y + sym.d + lo.a + fs * 0.1) : '');
      } };
      return hbox([head, kern(fs * 0.1), layout(n.e, fs, level)]);
    }
    case 'func': {
      const name = glyph(n.name, fs);
      let head = name;
      const sfs = scriptFs(fs);
      if (['lim', 'max', 'min', 'sup', 'inf'].includes(n.name) && n.sub) {
        const lo = layout(n.sub, sfs, level + 1);
        const w = Math.max(name.w, lo.w);
        head = { w, a: name.a, d: name.d + lo.a + lo.d + fs * 0.08, draw: (x, y) => name.draw(x + (w - name.w) / 2, y) + lo.draw(x + (w - lo.w) / 2, y + name.d + lo.a + fs * 0.08) };
      } else if (n.sub || n.sup) head = nodeBox({ k: 'script', base: { k: 'run', text: n.name, sty: 'p' }, sub: n.sub, sup: n.sup }, fs, level);
      return hbox([head, kern(fs * 0.17), layout(n.e, fs, level)]);
    }
    case 'lim': {
      const base = layout(n.e, fs, level), t = layout(n.lim, scriptFs(fs), level + 1);
      const w = Math.max(base.w, t.w);
      return { w, a: base.a + (n.upp ? t.a + t.d + fs * 0.1 : 0), d: base.d + (n.upp ? 0 : t.a + t.d + fs * 0.1), draw: (x, y) => base.draw(x + (w - base.w) / 2, y) + (n.upp ? t.draw(x + (w - t.w) / 2, y - base.a - t.d - fs * 0.08) : t.draw(x + (w - t.w) / 2, y + base.d + t.a + fs * 0.08)) };
    }
    case 'acc': case 'bar': case 'groupChr': {
      const body = layout(n.e, fs, level);
      const bottom = n.pos === 'bot', sw = Math.max(0.5, fs * 0.05);
      const arrow = n.chr === '⃗' || n.chr === '→';
      const hat = n.chr === '̂';
      return { w: body.w, a: body.a + (bottom ? 0 : fs * 0.22), d: body.d + (bottom ? fs * 0.18 : 0), draw: (x, y) => {
        let s = body.draw(x, y);
        const yy = bottom ? y + body.d + fs * 0.1 : y - body.a - fs * 0.1;
        if (arrow) s += line(x, yy, x + body.w, yy, sw) + `<path d="M${x + body.w - fs * 0.18} ${yy - fs * 0.1} L${x + body.w} ${yy} L${x + body.w - fs * 0.18} ${yy + fs * 0.1}" fill="none" stroke="#000" stroke-width="${sw}"/>`;
        else if (hat) s += `<path d="M${x + body.w / 2 - fs * 0.2} ${yy + fs * 0.08} L${x + body.w / 2} ${yy - fs * 0.08} L${x + body.w / 2 + fs * 0.2} ${yy + fs * 0.08}" fill="none" stroke="#000" stroke-width="${sw}"/>`;
        else s += line(x, yy, x + body.w, yy, sw);
        return s;
      } };
    }
    case 'box': {
      const body = layout(n.e, fs, level), p = fs * 0.12;
      return { w: body.w + 2 * p, a: body.a + p, d: body.d + p, draw: (x, y) => `<rect x="${x.toFixed(2)}" y="${(y - body.a - p).toFixed(2)}" width="${(body.w + 2 * p).toFixed(2)}" height="${(body.a + body.d + 2 * p).toFixed(2)}" fill="none" stroke="#000" stroke-width="${Math.max(0.5, fs * 0.05)}"/>` + body.draw(x + p, y) };
    }
    case 'm': case 'eqArr': {
      const rows = n.k === 'eqArr' ? n.rows.map((r) => [r[0]]) : n.rows;
      const cols = Math.max(...rows.map((r) => r.length));
      const cells = rows.map((r) => Array.from({ length: cols }, (_x, c) => layout(r[c] || [], fs, level)));
      const colW = Array.from({ length: cols }, (_x, c) => Math.max(...cells.map((r) => r[c].w)));
      const gap = fs * 0.8, rowGap = fs * 0.25;
      const w = colW.reduce((s, v) => s + v, 0) + gap * (cols - 1);
      const heights = cells.map((r) => ({ a: Math.max(...r.map((b) => b.a), fs * 0.7), d: Math.max(...r.map((b) => b.d), fs * 0.22) }));
      const total = heights.reduce((s, h) => s + h.a + h.d, 0) + rowGap * (rows.length - 1);
      const axis = fs * 0.28;
      return { w, a: total / 2 + axis, d: total / 2 - axis, draw: (x, y) => {
        let cy = y - axis - total / 2, out = '';
        cells.forEach((r, i) => {
          cy += heights[i].a;
          let cx = x;
          r.forEach((b, c) => { out += b.draw(n.k === 'eqArr' ? cx : cx + (colW[c] - b.w) / 2, cy); cx += colW[c] + gap; });
          cy += heights[i].d + rowGap;
        });
        return out;
      } };
    }
    case 'sPre': {
      const sfs = scriptFs(fs), sub = layout(n.sub || [], sfs, level + 1), sup = layout(n.sup || [], sfs, level + 1), body = layout(n.e, fs, level);
      const w = Math.max(sub.w, sup.w);
      return hbox([{ w, a: fs * 0.6, d: fs * 0.3, draw: (x, y) => sup.draw(x, y - fs * 0.4) + sub.draw(x, y + fs * 0.2) }, body]);
    }
    default: return empty();
  }
}

/** LaTeX -> {svg, width, height, baseline} (points). Throws LatexError for unsupported LaTeX. */
export function renderLatex(latex, { fontSize = 12, pad = 1.5, family = 'times' } = {}) {
  MATHFONT = FAMILIES[family] || FAMILIES.times;
  const { rows } = latexToTree(latex);
  const box = rows.length > 1 ? nodeBox({ k: 'eqArr', rows: rows.map((r) => [r]) }, fontSize, 0) : layout(rows[0], fontSize, 0);
  const width = box.w + 2 * pad, height = box.a + box.d + 2 * pad;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width.toFixed(2)}pt" height="${height.toFixed(2)}pt" viewBox="0 0 ${width.toFixed(2)} ${height.toFixed(2)}">${box.draw(pad, pad + box.a)}</svg>`;
  return { svg, width, height, baseline: box.d + pad };
}

/** Browser only: SVG -> PNG bytes at `scale` x. */
export async function svgToPng(svg, width, height, scale = 4) {
  const img = new Image();
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error('không vẽ được ảnh công thức')); img.src = url; });
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(width * scale * (96 / 72));
  canvas.height = Math.ceil(height * scale * (96 / 72));
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const b64 = canvas.toDataURL('image/png').split(',')[1];
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
