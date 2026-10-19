// Browser only: draw a LaTeX equation exactly as KaTeX lays it out (the same picture as the live preview), as outlines.
// KaTeX renders the equation to HTML; every glyph, rule and SVG path is read back with its position, glyph outlines come
// from the KaTeX font files (src/ttf.js). Result: {groups: [[contour...]...], width, height, baseline} in points, usable for
// an EMF (polygonsToEmf) or a PNG (canvas) -- both identical to the pane, with no dependency on installed fonts.
import { parseTtf } from './ttf.js';

const FONT_URL = (name) => new URL(`../taskpane/katex/fonts/KaTeX_${name}.ttf`, import.meta.url).href;
const AVAILABLE = new Set(['AMS-Regular', 'Caligraphic-Bold', 'Caligraphic-Regular', 'Fraktur-Bold', 'Fraktur-Regular', 'Main-Bold', 'Main-BoldItalic', 'Main-Italic', 'Main-Regular', 'Math-BoldItalic', 'Math-Italic', 'SansSerif-Bold', 'SansSerif-Italic', 'SansSerif-Regular', 'Script-Regular', 'Size1-Regular', 'Size2-Regular', 'Size3-Regular', 'Size4-Regular', 'Typewriter-Regular']);
const fontCache = new Map();
function loadFont(name) {
  if (!fontCache.has(name)) fontCache.set(name, fetch(FONT_URL(name)).then((r) => { if (!r.ok) throw new Error('font ' + name); return r.arrayBuffer(); }).then((b) => parseTtf(new Uint8Array(b))));
  return fontCache.get(name);
}

function fontName(cs) {
  const base = (cs.fontFamily.split(',')[0] || '').replace(/["']/g, '').trim().replace(/^KaTeX_/, '') || 'Main';
  const bold = parseInt(cs.fontWeight, 10) >= 600 || cs.fontWeight === 'bold', italic = cs.fontStyle === 'italic';
  let name;
  if (base === 'Math') name = bold ? 'Math-BoldItalic' : 'Math-Italic';
  else if (/^Size\d$/.test(base) || ['AMS', 'Script', 'Typewriter'].includes(base)) name = `${base}-Regular`;
  else name = `${base}-${bold && italic ? 'BoldItalic' : bold ? 'Bold' : italic ? 'Italic' : 'Regular'}`;
  if (!AVAILABLE.has(name)) name = AVAILABLE.has(`${base}-Regular`) ? `${base}-Regular` : 'Main-Regular';
  return name;
}

// ---- SVG path -> polygons (flattened), supports M m L l H h V v C c S s Q q T t Z z
function pathPolys(d) {
  const toks = d.match(/[MmLlHhVvCcSsQqTtZzAa]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/g) || [];
  const polys = []; let cur = [], x = 0, y = 0, sx = 0, sy = 0, cmd = '', k = 0, lastC = null, lastQ = null;
  const num = () => parseFloat(toks[k++]);
  const flushPoly = () => { if (cur.length > 2) polys.push(cur); cur = []; };
  while (k < toks.length) {
    if (/^[A-Za-z]$/.test(toks[k])) cmd = toks[k++];
    const rel = cmd === cmd.toLowerCase(), C = cmd.toUpperCase();
    if (C === 'Z') { flushPoly(); x = sx; y = sy; lastC = lastQ = null; continue; }
    if (C === 'M') { flushPoly(); const a = num(), b = num(); x = rel ? x + a : a; y = rel ? y + b : b; sx = x; sy = y; cur = [[x, y]]; cmd = rel ? 'l' : 'L'; lastC = lastQ = null; continue; }
    if (C === 'L') { const a = num(), b = num(); x = rel ? x + a : a; y = rel ? y + b : b; cur.push([x, y]); lastC = lastQ = null; continue; }
    if (C === 'H') { const a = num(); x = rel ? x + a : a; cur.push([x, y]); lastC = lastQ = null; continue; }
    if (C === 'V') { const b = num(); y = rel ? y + b : b; cur.push([x, y]); lastC = lastQ = null; continue; }
    if (C === 'C' || C === 'S') {
      let x1, y1;
      if (C === 'C') { x1 = num(); y1 = num(); if (rel) { x1 += x; y1 += y; } } else if (lastC) { x1 = 2 * x - lastC[0]; y1 = 2 * y - lastC[1]; } else { x1 = x; y1 = y; }
      let x2 = num(), y2 = num(), ex = num(), ey = num();
      if (rel) { x2 += x; y2 += y; ex += x; ey += y; }
      for (let t = 1; t <= 10; t++) { const u = t / 10, w = 1 - u; cur.push([w * w * w * x + 3 * w * w * u * x1 + 3 * w * u * u * x2 + u * u * u * ex, w * w * w * y + 3 * w * w * u * y1 + 3 * w * u * u * y2 + u * u * u * ey]); }
      lastC = [x2, y2]; lastQ = null; x = ex; y = ey; continue;
    }
    if (C === 'Q' || C === 'T') {
      let x1, y1;
      if (C === 'Q') { x1 = num(); y1 = num(); if (rel) { x1 += x; y1 += y; } } else if (lastQ) { x1 = 2 * x - lastQ[0]; y1 = 2 * y - lastQ[1]; } else { x1 = x; y1 = y; }
      let ex = num(), ey = num(); if (rel) { ex += x; ey += y; }
      for (let t = 1; t <= 8; t++) { const u = t / 8, w = 1 - u; cur.push([w * w * x + 2 * w * u * x1 + u * u * ex, w * w * y + 2 * w * u * y1 + u * u * ey]); }
      lastQ = [x1, y1]; lastC = null; x = ex; y = ey; continue;
    }
    throw new Error('svg path command ' + cmd);
  }
  flushPoly();
  return polys;
}

function clipRect(poly, r) {   // Sutherland-Hodgman against the axis-aligned rect r = {l, t, r, b}
  const edges = [[(p) => p[0] >= r.l, (a, b) => { const t = (r.l - a[0]) / (b[0] - a[0]); return [r.l, a[1] + t * (b[1] - a[1])]; }], [(p) => p[0] <= r.r, (a, b) => { const t = (r.r - a[0]) / (b[0] - a[0]); return [r.r, a[1] + t * (b[1] - a[1])]; }],
    [(p) => p[1] >= r.t, (a, b) => { const t = (r.t - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), r.t]; }], [(p) => p[1] <= r.b, (a, b) => { const t = (r.b - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), r.b]; }]];
  let out = poly;
  for (const [inside, cut] of edges) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const a = inp[i], b = inp[(i + 1) % inp.length], ia = inside(a), ib = inside(b);
      if (ia && ib) out.push(b); else if (ia && !ib) out.push(cut(a, b)); else if (!ia && ib) { out.push(cut(a, b)); out.push(b); }
    }
    if (!out.length) return [];
  }
  return out;
}

/** KaTeX layout -> {groups, width, height, baseline}. `size`: the font size in points. Throws when KaTeX is missing or rejects the LaTeX. */
export async function katexOutlines(latex, size = 12) {
  const katex = globalThis.katex;
  if (!katex || typeof document === 'undefined') throw new Error('KaTeX is not available');
  const host = document.createElement('div');
  host.style.cssText = `position:absolute;left:-20000px;top:0;font-size:${size}px;line-height:normal;white-space:nowrap;`;
  document.body.appendChild(host);
  try {
    katex.render(latex, host, { displayMode: false, throwOnError: true, output: 'html', strict: 'ignore' });
    const root = host.querySelector('.katex');
    root.style.fontSize = '1em';
    host.getBoundingClientRect();
    await document.fonts.ready;
    // make sure every KaTeX font used is loaded before measuring
    const fams = new Set(); root.querySelectorAll('*').forEach((el) => { const f = getComputedStyle(el).fontFamily; if (/KaTeX/.test(f)) fams.add(`${getComputedStyle(el).fontStyle} ${getComputedStyle(el).fontWeight} 1em ${f}`); });
    await Promise.all([...fams].map((f) => document.fonts.load(f).catch(() => null)));
    await document.fonts.ready;
    const o = host.getBoundingClientRect();
    const glyphs = [], rects = [], polys = [];

    // baseline of the main line: a zero-size inline-block as first child of the first .base span
    let baseline = null;
    const mk = () => { const m = document.createElement('span'); m.style.cssText = 'display:inline-block;width:0;height:0;'; return m; };
    const base = root.querySelector('.base');
    if (base) { const m = mk(); base.insertBefore(m, base.firstChild); baseline = m.getBoundingClientRect().bottom - o.top; m.remove(); }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = []; for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
    for (const node of nodes) {
      const text = node.nodeValue, parent = node.parentElement;
      if (!parent || !text.trim() || parent.closest('.katex-mathml')) continue;
      const cs = getComputedStyle(parent), fs = parseFloat(cs.fontSize), name = fontName(cs);
      const m = mk(); parent.insertBefore(m, node);
      const by = m.getBoundingClientRect().bottom - o.top;
      m.remove();
      const rg = document.createRange();
      let i = 0;
      for (const ch of text) {
        const len = ch.length;
        if (ch.trim()) { rg.setStart(node, i); rg.setEnd(node, i + len); glyphs.push({ name, cp: ch.codePointAt(0), x: rg.getBoundingClientRect().left - o.left, y: by, size: fs }); }
        i += len;
      }
      if (baseline === null) baseline = by;
    }

    root.querySelectorAll('*').forEach((el) => {   // rules: borders (fraction bars, overlines, \hline ...)
      const cs = getComputedStyle(el);
      if (cs.display === 'none') return;
      const r = el.getBoundingClientRect();
      for (const side of ['Top', 'Bottom', 'Left', 'Right']) {
        const bw = parseFloat(cs[`border${side}Width`]);
        if (!(bw > 0) || cs[`border${side}Style`] === 'none') continue;
        const x = r.left - o.left, y = r.top - o.top;
        if (side === 'Top') rects.push([x, y, r.width, bw]); else if (side === 'Bottom') rects.push([x, y + r.height - bw, r.width, bw]);
        else if (side === 'Left') rects.push([x, y, bw, r.height]); else rects.push([x + r.width - bw, y, bw, r.height]);
      }
    });

    root.querySelectorAll('svg').forEach((svg) => {   // radicals, stretchy arrows, braces
      const r = svg.getBoundingClientRect(), vb = svg.viewBox && svg.viewBox.baseVal;
      if (!vb || !vb.width || !vb.height) return;
      let clip = { l: r.left, t: r.top, r: r.right, b: r.bottom };
      for (let a = svg.parentElement; a && a !== host; a = a.parentElement) {
        const cs = getComputedStyle(a);
        if (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') { const q = a.getBoundingClientRect(); clip = { l: Math.max(clip.l, q.left), t: Math.max(clip.t, q.top), r: Math.min(clip.r, q.right), b: Math.min(clip.b, q.bottom) }; }
      }
      const par = svg.getAttribute('preserveAspectRatio') || 'xMidYMid meet';
      let sx, sy, ox, oy;
      if (/none/.test(par)) { sx = r.width / vb.width; sy = r.height / vb.height; ox = r.left; oy = r.top; } else {
        const s = /slice/.test(par) ? Math.max(r.width / vb.width, r.height / vb.height) : Math.min(r.width / vb.width, r.height / vb.height);
        sx = sy = s;
        ox = r.left + (r.width - vb.width * s) * (/xMin/.test(par) ? 0 : /xMax/.test(par) ? 1 : 0.5);
        oy = r.top + (r.height - vb.height * s) * (/YMin/.test(par) ? 0 : /YMax/.test(par) ? 1 : 0.5);
      }
      const tf = ([px, py]) => [ox + (px - vb.x) * sx - o.left, oy + (py - vb.y) * sy - o.top];
      const cl = { l: clip.l - o.left, t: clip.t - o.top, r: clip.r - o.left, b: clip.b - o.top };
      svg.querySelectorAll('path').forEach((p) => { for (const poly of pathPolys(p.getAttribute('d') || '')) { const c = clipRect(poly.map(tf), cl); if (c.length > 2) polys.push(c); } });
      svg.querySelectorAll('line').forEach((ln) => {
        const a = tf([+ln.getAttribute('x1'), +ln.getAttribute('y1')]), b = tf([+ln.getAttribute('x2'), +ln.getAttribute('y2')]);
        const w = (parseFloat(ln.getAttribute('stroke-width')) || 1) * sx, dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * w / 2, ny = dx / L * w / 2;
        polys.push([[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny], [a[0] - nx, a[1] - ny]]);
      });
    });

    // glyph outlines -> contours (points, y down)
    const fontMap = new Map();
    await Promise.all([...new Set(glyphs.map((g) => g.name))].map(async (n) => fontMap.set(n, await loadFont(n))));
    const groups = [];
    for (const g of glyphs) {
      const font = fontMap.get(g.name), outline = font.outline(g.cp);
      if (!outline || !outline.length) continue;
      const k = g.size / font.unitsPerEm;
      groups.push(outline.map((c) => c.map(([px, py]) => [g.x + px * k, g.y - py * k])));
    }
    for (const [x, y, w, h] of rects) groups.push([[[x, y], [x + w, y], [x + w, y + h], [x, y + h]]]);
    for (const p of polys) groups.push([p]);
    if (!groups.length) throw new Error('empty equation');

    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const gr of groups) for (const c of gr) for (const [x, y] of c) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    const pad = 0.8;
    const dx = pad - x0, dy = pad - y0;
    const moved = groups.map((gr) => gr.map((c) => c.map(([x, y]) => [x + dx, y + dy])));
    const height = y1 - y0 + 2 * pad;
    return { groups: moved, width: x1 - x0 + 2 * pad, height, baseline: Math.max(0, height - ((baseline ?? y1) + dy)) };   // baseline: depth of the picture below the text baseline
  } finally { host.remove(); }
}

/** Contours -> PNG bytes (browser canvas), `scale` px per point. */
export function outlinesToPng(res, scale = 8) {
  const c = document.createElement('canvas');
  c.width = Math.ceil(res.width * scale); c.height = Math.ceil(res.height * scale);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000';
  for (const gr of res.groups) {
    ctx.beginPath();
    for (const ct of gr) { ct.forEach(([x, y], i) => (i ? ctx.lineTo(x * scale, y * scale) : ctx.moveTo(x * scale, y * scale))); ctx.closePath(); }
    ctx.fill('nonzero');
  }
  const bin = atob(c.toDataURL('image/png').split(',')[1]), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
