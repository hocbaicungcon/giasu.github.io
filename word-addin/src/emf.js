// SVG (as drawn by mathrender.js: <text>, <line>, <path> with M L H V Q, <rect>) -> EMF bytes, so a MathType object's picture
// stays sharp at any zoom, like the vector picture MathType itself stores. Throws on anything it does not understand
// (the caller then keeps the PNG).
const U = 100;   // logical units per point
const MM100_PER_PT = 35.2778;   // 0.01 mm per point

const unesc = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const attr = (tag, name) => { const m = new RegExp(`\\s${name}="([^"]*)"`).exec(tag); return m ? m[1] : null; };
const num = (v) => { const n = Number(v); if (!Number.isFinite(n)) throw new Error('emf: bad number'); return n; };

// glyphs Times New Roman / Arial lack: drawn with Cambria Math
const BASE_SYMBOLS = new Set([0x2202, 0x2206, 0x220f, 0x2211, 0x2212, 0x221a, 0x221e, 0x222b, 0x2248, 0x2260, 0x2264, 0x2265, 0x2022, 0x2026, 0x2013, 0x2014, 0x2032, 0x2033, 0x00b0, 0x00b1, 0x00d7, 0x00f7, 0x00b7]);
const needsMathFont = (cp) => cp >= 0x2190 && !BASE_SYMBOLS.has(cp);

class Out {
  constructor() { this.parts = []; this.count = 0; }
  rec(type, ...fields) {   // fields: [format, value] pairs flattened into a Uint8Array body
    const body = [];
    for (const f of fields) {
      if (typeof f === 'number') { body.push(f & 255, (f >> 8) & 255, (f >> 16) & 255, (f >> 24) & 255); } else body.push(...f);
    }
    while (body.length % 4) body.push(0);
    const size = body.length + 8;
    const head = [type & 255, (type >> 8) & 255, 0, 0, size & 255, (size >> 8) & 255, (size >> 16) & 255, 0];
    this.parts.push(head, body);
    this.count++;
  }
}
const i32 = (v) => { const n = Math.round(v); return n < 0 ? n + 0x100000000 : n; };   // used via `>>`/`&`, JS ints wrap fine
const u16 = (v) => [v & 255, (v >> 8) & 255];

/** advance(ch, fontPx, italic, bold) -> width in px (points here) for a single character. */
export function svgToEmf(svg, advance) {
  const root = /<svg\b[^>]*viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(svg);
  if (!root) throw new Error('emf: no viewBox');
  const W = Math.ceil(num(root[1]) * U), H = Math.ceil(num(root[2]) * U);
  const out = new Out();
  let handles = 0;
  const fonts = new Map(), pens = new Map();
  const select = (h) => out.rec(37, h);

  out.rec(18, 1);                 // SETBKMODE transparent
  out.rec(22, 24);                // SETTEXTALIGN TA_BASELINE | TA_LEFT
  out.rec(24, 0);                 // SETTEXTCOLOR black
  out.rec(37, 0x80000005);        // NULL_BRUSH

  const font = (face, px, italic, bold) => {
    const key = `${face}|${px}|${italic}|${bold}`;
    if (!fonts.has(key)) {
      const h = ++handles;
      const lf = [...[-Math.round(px * U)].flatMap((v) => [v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >> 24) & 255]), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ...[bold ? 700 : 400].flatMap((v) => [v & 255, (v >> 8) & 255, 0, 0]), italic ? 1 : 0, 0, 0, 1, 0, 0, 4, 0x12];   // CHARSET default(1), quality antialiased(4)... pitch&family
      const name = []; for (let i = 0; i < 32; i++) name.push(...u16(i < face.length ? face.charCodeAt(i) : 0));
      out.rec(82, h, lf, name);
      fonts.set(key, h);
    }
    return fonts.get(key);
  };
  const pen = (wPt) => {
    const w = Math.max(1, Math.round(wPt * U));
    if (!pens.has(w)) {
      const h = ++handles;
      out.rec(38, h, 0, w, 0, 0);   // CREATEPEN: PS_SOLID, width, (unused y), COLORREF black
      pens.set(w, h);
    }
    return pens.get(w);
  };
  const pt = (x, y) => [i32(x * U), i32(y * U)];
  const moveTo = (x, y) => out.rec(27, ...pt(x, y));
  const lineTo = (x, y) => out.rec(54, ...pt(x, y));

  let any = 0;
  const body = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  const tagRe = /<(text|line|path|rect)\b([^>]*?)(?:\/>|>([\s\S]*?)<\/text>)/g;
  let m, last = 0;
  while ((m = tagRe.exec(body))) {
    if (body.slice(last, m.index).trim()) throw new Error('emf: unexpected markup');
    last = tagRe.lastIndex;
    const [, kind, a, inner] = m;
    any++;
    if (kind === 'text') {
      const text = unesc(inner || '');
      const x = num(attr(a, 'x')), y = num(attr(a, 'y')), fs = num(attr(a, 'font-size'));
      const italic = /font-style="italic"/.test(a), bold = /font-weight="bold"/.test(a);
      const family = (attr(a, 'font-family') || '').replace(/&quot;/g, '"').split(',')[0].replace(/['"]/g, '').trim() || 'Times New Roman';
      const chars = [...text];
      let cx = x, i = 0;
      while (i < chars.length) {   // runs of one typeface
        const math = needsMathFont(chars[i].codePointAt(0));
        let j = i; while (j < chars.length && needsMathFont(chars[j].codePointAt(0)) === math) j++;
        const run = chars.slice(i, j).join('');
        const units = [...run].flatMap((c) => { const cp = c.codePointAt(0); return cp > 0xffff ? [0xd800 + ((cp - 0x10000) >> 10), 0xdc00 + ((cp - 0x10000) & 0x3ff)] : [cp]; });
        const adv = [...run].map((c) => advance(c, fs, italic, bold));
        const dx = []; [...run].forEach((c, k) => { const n = c.codePointAt(0) > 0xffff ? 2 : 1; for (let q = 0; q < n; q++) dx.push(q === 0 ? Math.round(adv[k] * U) : 0); });
        select(font(math ? 'Cambria Math' : family, fs, italic && !math, bold));
        const str = units.flatMap(u16); while (str.length % 4) str.push(0);
        const n = units.length, base = 8 + 16 + 4 + 4 + 4 + 8 + 4 + 4 + 4 + 16 + 4;   // record bytes before the string
        const dxBytes = dx.flatMap((v) => [v & 255, (v >> 8) & 255, (v >> 16) & 255, 0]);
        const w = adv.reduce((s, v) => s + v, 0);
        out.rec(84, 0, 0, W, H, 1, 0, 0, ...pt(cx, y), n, base, 0, 0, 0, 0, 0, base + str.length, str, dxBytes);
        cx += w; i = j;
      }
    } else if (kind === 'line') {
      select(pen(num(attr(a, 'stroke-width') || 1)));
      moveTo(num(attr(a, 'x1')), num(attr(a, 'y1'))); lineTo(num(attr(a, 'x2')), num(attr(a, 'y2')));
    } else if (kind === 'rect') {
      select(pen(num(attr(a, 'stroke-width') || 1)));
      const x = num(attr(a, 'x')), y = num(attr(a, 'y')), w = num(attr(a, 'width')), h = num(attr(a, 'height'));
      moveTo(x, y); lineTo(x + w, y); lineTo(x + w, y + h); lineTo(x, y + h); lineTo(x, y);
    } else {
      if (!/fill="none"/.test(a)) throw new Error('emf: filled path');
      select(pen(num(attr(a, 'stroke-width') || 1)));
      const toks = (attr(a, 'd') || '').match(/[MLHVQ]|-?[\d.]+(?:e-?\d+)?/g) || [];
      let k = 0, cx = 0, cy = 0, cmd = '';
      const n = () => num(toks[k++]);
      while (k < toks.length) {
        if (/^[A-Z]$/.test(toks[k])) cmd = toks[k++];
        if (cmd === 'M') { cx = n(); cy = n(); moveTo(cx, cy); cmd = 'L'; } else if (cmd === 'L') { cx = n(); cy = n(); lineTo(cx, cy); } else if (cmd === 'H') { cx = n(); lineTo(cx, cy); } else if (cmd === 'V') { cy = n(); lineTo(cx, cy); } else if (cmd === 'Q') {
          const qx = n(), qy = n(), ex = n(), ey = n();   // quadratic -> cubic
          const c1 = [cx + 2 / 3 * (qx - cx), cy + 2 / 3 * (qy - cy)], c2 = [ex + 2 / 3 * (qx - ex), ey + 2 / 3 * (qy - ey)];
          const P = [...c1, ...c2, ex, ey];
          const bx = P.map((v, idx) => i32(v * U));
          out.rec(88, i32(Math.min(cx, ex, qx) * U), i32(Math.min(cy, ey, qy) * U), i32(Math.max(cx, ex, qx) * U), i32(Math.max(cy, ey, qy) * U), 3, ...bx);   // POLYBEZIERTO: bounds, count, points
          cx = ex; cy = ey;
        } else throw new Error('emf: path command');
      }
    }
  }
  if (body.slice(last).trim()) throw new Error('emf: trailing markup');
  if (!any) throw new Error('emf: empty drawing');

  const eof = [14, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0];   // EOF: no palette, offset 16, size-last 20
  const records = out.parts.flat();
  const total = 88 + records.length + eof.length;
  const hd = new Uint8Array(88), dv = new DataView(hd.buffer);
  dv.setUint32(0, 1, true); dv.setUint32(4, 88, true);
  dv.setInt32(8, 0, true); dv.setInt32(12, 0, true); dv.setInt32(16, W - 1, true); dv.setInt32(20, H - 1, true);   // rclBounds (device units)
  dv.setInt32(24, 0, true); dv.setInt32(28, 0, true); dv.setInt32(32, Math.round(W / U * MM100_PER_PT), true); dv.setInt32(36, Math.round(H / U * MM100_PER_PT), true);   // rclFrame 0.01 mm
  dv.setUint32(40, 0x464d4520, true); dv.setUint32(44, 0x10000, true);
  dv.setUint32(48, total, true); dv.setUint32(52, out.count + 2, true);   // header + records + EOF
  dv.setUint16(56, handles + 1, true); dv.setUint16(58, 0, true);
  dv.setUint32(60, 0, true); dv.setUint32(64, 0, true); dv.setUint32(68, 0, true);   // no description, no palette
  dv.setInt32(72, 72000, true); dv.setInt32(76, 72000, true);   // device: 7200 dpi over 10 in -> 1 unit = 0.01 pt
  dv.setInt32(80, 254, true); dv.setInt32(84, 254, true);       // ... = 254 mm
  const res = new Uint8Array(total);
  res.set(hd, 0); res.set(records, 88); res.set(eof, 88 + records.length);
  return res;
}

/**
 * Filled polygons (a list of groups; a group = contours drawn together with the winding rule, e.g. one glyph with its holes)
 * -> EMF bytes. Coordinates in points; 20 EMF units per point (int16 limit: pictures up to ~1600 pt).
 */
export function polygonsToEmf(groups, widthPt, heightPt) {
  const U2 = 20;
  const W = Math.ceil(widthPt * U2), H = Math.ceil(heightPt * U2);
  if (W > 32000 || H > 32000) throw new Error('emf: picture too large');
  const out = new Out();
  out.rec(18, 1);        // transparent background
  out.rec(19, 2);        // SETPOLYFILLMODE: winding
  out.rec(37, 0x80000008);   // NULL_PEN
  out.rec(37, 0x80000004);   // BLACK_BRUSH
  const s16 = (v) => { const n = Math.max(-32768, Math.min(32767, Math.round(v * U2))); return [n & 255, (n >> 8) & 255]; };
  for (const contours of groups) {
    const cs = contours.filter((c) => c.length >= 3);
    if (!cs.length) continue;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const pts = [];
    for (const c of cs) for (const [x, y] of c) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); pts.push(...s16(x), ...s16(y)); }
    const total = cs.reduce((n, c) => n + c.length, 0);
    const counts = cs.flatMap((c) => [c.length & 255, (c.length >> 8) & 255, 0, 0]);
    out.rec(91, i32(x0 * U2), i32(y0 * U2), i32(x1 * U2), i32(y1 * U2), cs.length, total, counts, pts);   // POLYPOLYGON16
  }
  const eof = [14, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0];
  const records = out.parts.flat();
  const total = 88 + records.length + eof.length;
  const hd = new Uint8Array(88), dv = new DataView(hd.buffer);
  dv.setUint32(0, 1, true); dv.setUint32(4, 88, true);
  dv.setInt32(16, W - 1, true); dv.setInt32(20, H - 1, true);
  dv.setInt32(32, Math.round(widthPt * 35.2778), true); dv.setInt32(36, Math.round(heightPt * 35.2778), true);
  dv.setUint32(40, 0x464d4520, true); dv.setUint32(44, 0x10000, true);
  dv.setUint32(48, total, true); dv.setUint32(52, out.count + 2, true);
  dv.setUint16(56, 1, true);
  dv.setInt32(72, 14400, true); dv.setInt32(76, 14400, true);   // device: 1440 dpi over 10 in -> 20 units per point
  dv.setInt32(80, 254, true); dv.setInt32(84, 254, true);
  const res = new Uint8Array(total);
  res.set(hd, 0); res.set(records, 88); res.set(eof, 88 + records.length);
  return res;
}
