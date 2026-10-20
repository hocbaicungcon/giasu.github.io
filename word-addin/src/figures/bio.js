// Biology figures: DNA models, cells, chromosomes, arrow diagrams (food chains, gene expression), ecological pyramids, Punnett squares.
import { Canvas, frame, P, add, sub, mul, unit, mid, rad, rot, arcPts, COLORS, clamp, list } from './sci-kit.js';
import { labelBox } from './scene.js';

const PALETTE = ['#d8f0d2', '#fdf2c4', '#fbd9c6', '#e6d6f5', '#d3e6f8', '#fcd5e5'];
const textW = (s, size) => labelBox(`\\text{${s}}`, size).w;

// ---------------------------------------------------------------- DNA
const BASE_COLOR = { A: '#e8a33d', T: '#5aa9e6', G: '#3fb37f', X: '#e06666' };
const PAIR = { A: 'T', T: 'A', G: 'X', X: 'G', C: 'G' };
/** Complementary strand of a base sequence (A-T, G-X; C is read as X). */
export const complement = (seq) => [...String(seq).toUpperCase().replace(/[^ATGXC]/g, '')].map((b) => PAIR[b]).join('');

export function dna(o = {}) {
  const cv = new Canvas();
  if (o.kind === 'ladder') {
    const seq = (String(o.seq || 'ATGXC').toUpperCase().replace(/[^ATGXC]/g, '') || 'ATGXC').replace(/C/g, 'X').slice(0, 12), comp = complement(seq);
    const n = seq.length, rowH = 40, top = 66, W = 340, H = top + n * rowH + 40, xl = 90, xr = 250;
    cv.line([xl, top - 24], [xl, top + (n - 1) * rowH + 24], { w: 2.6, color: '#2b4a8a' });
    cv.line([xr, top - 24], [xr, top + (n - 1) * rowH + 24], { w: 2.6, color: '#8a2b4a' });
    for (let i = 0; i < n; i++) {
      const y = top + i * rowH, a = seq[i], b = comp[i];
      cv.circle([xl, y], 5.5, { fill: '#fff', w: 1.8 }); cv.circle([xr, y], 5.5, { fill: '#fff', w: 1.8 });
      cv.line([xl + 6, y], [xl + 28, y], { w: 1.6 }); cv.line([xr - 6, y], [xr - 28, y], { w: 1.6 });
      cv.circle([xl + 44, y], 15, { fill: BASE_COLOR[a], w: 1.4 }); cv.circle([xr - 44, y], 15, { fill: BASE_COLOR[b], w: 1.4 });
      cv.label(`\\text{${a}}`, [xl + 44, y], { size: 16 }); cv.label(`\\text{${b}}`, [xr - 44, y], { size: 16 });
      const hb = a === 'G' || a === 'X' ? 3 : 2;
      for (let k = 0; k < hb; k++) cv.line([xl + 62, y + (k - (hb - 1) / 2) * 6], [xr - 62, y + (k - (hb - 1) / 2) * 6], { w: 1.3, dash: '3 2.5', color: '#444' });
    }
    if (o.ends !== false) {
      cv.label("5'", [xl, top - 40], { size: 15 }); cv.label("3'", [xl, top + (n - 1) * rowH + 40], { size: 15 });
      cv.label("3'", [xr, top - 40], { size: 15 }); cv.label("5'", [xr, top + (n - 1) * rowH + 40], { size: 15 });
    }
    return frame(cv, W, H);
  }
  const turns = clamp(o.turns, 1, 3, 2), A = 56, Pd = 130, cx = 150, y0 = 34, W = 300, legend = o.legend !== false, Hh = turns * Pd, H = y0 + Hh + 30 + (legend ? 42 : 0);
  const th0 = -Math.PI / 2, yOf = (th) => y0 + (th - th0) / (2 * Math.PI) * Pd, thMax = th0 + 2 * Math.PI * turns;
  const xOf = (th, s) => cx + s * A * Math.sin(th);
  const pieces = [];   // {s, a, b}: strand s between two extremes
  for (let s of [1, -1]) for (let k = 0; k < turns * 2; k++) pieces.push({ s, a: th0 + k * Math.PI, b: th0 + (k + 1) * Math.PI });
  const pts = (p) => Array.from({ length: 19 }, (_x, i) => { const th = p.a + (p.b - p.a) * i / 18; return [xOf(th, p.s), yOf(th)]; });
  const front = (p) => { const m = (p.a + p.b) / 2; return (p.s * Math.cos(m)) > 0; };
  const col = (s) => (s === 1 ? '#2b4a8a' : '#8a2b4a');
  pieces.filter((p) => !front(p)).forEach((p) => cv.path(pts(p), { w: 4.2, color: col(p.s) }));
  const rungs = turns * 10, seq = ['A', 'G', 'T', 'X', 'A', 'X', 'G', 'T', 'T', 'G'];
  for (let i = 0; i <= rungs; i++) {
    const th = th0 + (thMax - th0) * i / rungs, x1 = xOf(th, 1), x2 = xOf(th, -1), y = yOf(th);
    if (Math.abs(x1 - x2) < 16) continue;
    const a = seq[i % seq.length], b = PAIR[a], m = (x1 + x2) / 2;
    cv.line([x1, y], [m, y], { w: 4.5, color: BASE_COLOR[a] }); cv.line([m, y], [x2, y], { w: 4.5, color: BASE_COLOR[b] });
  }
  pieces.filter(front).forEach((p) => { cv.path(pts(p), { w: 8, color: '#fff' }); cv.path(pts(p), { w: 4.2, color: col(p.s) }); });
  if (legend) {
    const ly = y0 + Hh + 34;
    ['A', 'T', 'G', 'X'].forEach((b, i) => { const x = 66 + i * 54; cv.rect(x - 8, ly - 8, 16, 16, { fill: BASE_COLOR[b], w: 1.2 }); cv.label(`\\text{${b}}`, [x + 20, ly], { size: 15 }); });
  }
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- cells
const blob = (cx, cy, rx, ry, deg = 0, n = 36) => Array.from({ length: n }, (_x, i) => { const t = 2 * Math.PI * i / n; return add(rot([rx * Math.cos(t), ry * Math.sin(t)], deg), [cx, cy]); });
const stadium = (cx, cy, w, h, n = 14) => [...arcPts(cx + w / 2 - h / 2, cy, h / 2, h / 2, 90, -90, n), ...arcPts(cx - w / 2 + h / 2, cy, h / 2, h / 2, -90, -270, n)];
const rrect = (cx, cy, w, h, r, n = 8) => [...arcPts(cx + w / 2 - r, cy - h / 2 + r, r, r, 90, 0, n), ...arcPts(cx + w / 2 - r, cy + h / 2 - r, r, r, 0, -90, n), ...arcPts(cx - w / 2 + r, cy + h / 2 - r, r, r, -90, -180, n), ...arcPts(cx - w / 2 + r, cy - h / 2 + r, r, r, 180, 90, n)];
const dots = (cv, pts, r = 2.2) => pts.forEach((p) => cv.dot(p, r, '#333'));
function mito(cv, c, deg = 0, k = 1) {
  cv.poly(blob(c[0], c[1], 30 * k, 14 * k, deg), { fill: '#f6b26b', color: '#b9721f', w: 1.4 });
  const wave = Array.from({ length: 9 }, (_x, i) => add(rot([(-22 + i * 5.5) * k, (i % 2 ? -6 : 6) * k], deg), c));
  cv.path(wave, { w: 1, color: '#b9721f' });
}
function chloroplast(cv, c, deg = 0) {
  cv.poly(blob(c[0], c[1], 24, 13, deg), { fill: '#7cc46f', color: '#3f8a35', w: 1.4 });
  [-10, 0, 10].forEach((dx) => cv.line(add(rot([dx, -6], deg), c), add(rot([dx, 6], deg), c), { w: 2, color: '#3f8a35' }));
}
export function cell(o = {}) {
  const cv = new Canvas(), W = 680, H = 400, cx = 340, names = o.names !== false;
  const N = (s, from, to) => { if (names) cv.note(s, from, to, { size: 14 }); };
  if (o.kind === 'plant') {
    cv.poly(rrect(cx, 200, 360, 300, 40), { fill: '#eaf6e0', w: 3.2 });
    cv.poly(rrect(cx, 200, 342, 282, 34), { fill: '#f6fbf1', w: 1.4 });
    cv.poly(blob(cx + 40, 205, 100, 100), { fill: '#cfe8f7', color: '#5f9fc7', w: 1.5 });
    cv.circle([cx - 100, 120], 36, { fill: '#cfd8f5', w: 1.8 }); cv.circle([cx - 106, 116], 11, { fill: '#6b7fd7', w: 1 });
    [[cx - 130, 235, 25], [cx - 85, 305, -15], [cx + 130, 100, 15], [cx + 140, 310, -30]].forEach(([x, y, d]) => chloroplast(cv, [x, y], d));
    mito(cv, [cx - 40, 70], 10, 0.8); mito(cv, [cx + 150, 195], 80, 0.8);
    dots(cv, [[cx - 20, 150], [cx - 60, 170], [cx - 40, 210], [cx + 10, 90], [cx + 95, 82]]);
    N('Thành xenlulôzơ', [cx - 180, 220], [cx - 205, 250]);
    N('Màng sinh chất', [cx - 171, 150], [cx - 215, 120]);
    N('Nhân', [cx - 134, 100], [cx - 215, 60]);
    N('Lục lạp', [cx - 140, 245], [cx - 215, 300]);
    N('Không bào', [cx + 40, 205], [cx + 210, 270]);
    N('Ti thể', [cx + 165, 200], [cx + 215, 160]);
    N('Ribôxôm', [cx + 95, 82], [cx + 215, 100]);
    return frame(cv, W, H);
  }
  if (o.kind === 'bacteria') {
    cv.poly(stadium(cx, 200, 400, 190, 14), { fill: '#fff6dc', color: '#c9a64a', w: 1.6, dash: '6 3' });
    cv.poly(stadium(cx, 200, 372, 162, 14), { fill: '#fdf0d0', w: 2.6 });
    cv.poly(stadium(cx, 200, 352, 142, 14), { fill: '#fdf0d0', w: 1.3 });
    const nuc = Array.from({ length: 34 }, (_x, i) => { const t = 2 * Math.PI * i / 34; return [cx - 20 + (52 + 12 * Math.sin(5 * t)) * Math.cos(t), 200 + (34 + 10 * Math.cos(4 * t)) * Math.sin(t)]; });
    cv.poly(nuc, { fill: '#e6e2f6', color: '#6b5fb5', w: 1.6 });
    cv.circle([cx + 90, 232], 13, { w: 1.8, color: '#6b5fb5' });
    dots(cv, [[cx - 110, 170], [cx - 100, 230], [cx - 60, 255], [cx + 60, 160], [cx + 120, 190], [cx + 40, 250], [cx - 130, 205], [cx + 20, 150]]);
    const flag = Array.from({ length: 30 }, (_x, i) => [cx + 200 + i * 8, 200 + 14 * Math.sin(i * 0.7)]);
    cv.path(flag, { w: 2.4, color: '#555' });
    [[-120, -1], [-60, -1], [10, -1], [80, -1], [-90, 1], [40, 1], [120, 1]].forEach(([dx, s]) => cv.line([cx + dx, 200 + s * 95], [cx + dx + 3, 200 + s * 112], { w: 1.2, color: '#777' }));
    N('Vỏ nhầy', [cx - 150, 112], [cx - 215, 60]);
    N('Thành tế bào', [cx - 180, 128], [cx - 215, 95]);
    N('Màng sinh chất', [cx - 170, 200], [cx - 215, 150]);
    N('Vùng nhân (ADN vòng)', [cx - 20, 190], [cx - 75, 335]);
    N('Plasmit', [cx + 90, 245], [cx + 120, 320]);
    N('Ribôxôm', [cx - 100, 230], [cx - 215, 290]);
    N('Roi', [cx + 300, 192], [cx + 250, 130]);
    return frame(cv, W, H);
  }
  // animal cell
  cv.poly(blob(cx, 200, 185, 140), { fill: '#fdf1e3', w: 2.6 });
  cv.circle([cx - 10, 195], 52, { fill: '#cfd8f5', w: 1.8 }); cv.circle([cx - 22, 188], 14, { fill: '#6b7fd7', w: 1 });
  cv.path(Array.from({ length: 24 }, (_x, i) => [cx - 76 + i * 3.5 + 0, 260 + 7 * Math.sin(i * 1.1)]).map((p, i) => [p[0] - 10, p[1] + i * 0.6]), { w: 2, color: '#a56b3c' });
  for (let k = 0; k < 4; k++) cv.path(arcPts(cx - 120, 250 - 0, 40 - k * 3, 16, 200 + 5 * k, 340 - 5 * k, 10).map((p) => [p[0], p[1] + k * 8 - 8]), { w: 2.2, color: '#c27c2c' });
  mito(cv, [cx + 100, 150], 25); mito(cv, [cx + 60, 270], -20);
  cv.circle([cx + 120, 235], 9, { fill: '#e06666', w: 1.2 });
  cv.rect(cx - 70, 100, 8, 24, { fill: '#999', w: 1 }); cv.rect(cx - 56, 108, 24, 8, { fill: '#999', w: 1 });
  dots(cv, [[cx + 20, 130], [cx + 40, 150], [cx - 110, 160], [cx + 130, 200], [cx - 40, 290], [cx + 10, 255], [cx + 80, 205]]);
  N('Màng sinh chất', [cx - 183, 220], [cx - 225, 290]);
  N('Bộ máy Gôngi', [cx - 140, 235], [cx - 225, 330]);
  N('Lưới nội chất', [cx - 70, 262], [cx - 150, 355]);
  N('Trung thể', [cx - 60, 112], [cx - 225, 80]);
  N('Nhân', [cx - 40, 160], [cx - 130, 45]);
  N('Hạch nhân', [cx - 22, 188], [cx - 225, 150]);
  N('Ti thể', [cx + 126, 140], [cx + 215, 90]);
  N('Lizôxôm', [cx + 128, 238], [cx + 215, 320]);
  N('Ribôxôm', [cx + 80, 205], [cx + 215, 220]);
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- chromosomes
export function chromosome(o = {}) {
  const cv = new Canvas(), W = 420, H = 340, cx = 190, cy = 170, w = 28, len = 230;
  const chromatid = (deg, offx) => {
    const pts = []; const hw = w / 2, hl = len / 2;
    pts.push(...arcPts(0, -hl + hw, hw, hw, 180, 0, 12), ...arcPts(0, hl - hw, hw, hw, 0, -180, 12));
    return pts.map((p) => add(rot([p[0] + offx, p[1]], deg), [cx, cy]));
  };
  if (o.kind === 'single') {
    cv.poly(chromatid(0, 0), { fill: '#b9a3e8', color: '#5b3fa0', w: 2 });
    cv.line([cx - 15, cy - 6], [cx + 15, cy - 6], { w: 2.4, color: '#5b3fa0' }); cv.line([cx - 15, cy + 6], [cx + 15, cy + 6], { w: 2.4, color: '#5b3fa0' });
    cv.note('Tâm động', [cx + 14, cy], [cx + 90, cy - 24], { size: 14 });
    cv.note('Crômatit', [cx + 12, cy - 70], [cx + 90, cy - 90], { size: 14 });
    return frame(cv, W, H);
  }
  cv.poly(chromatid(-9, -11), { fill: '#b9a3e8', color: '#5b3fa0', w: 2 });
  cv.poly(chromatid(9, 11), { fill: '#d7a3e8', color: '#7a3fa0', w: 2 });
  cv.circle([cx, cy], 12, { fill: '#7a5bc4', color: '#3b2780', w: 1.6 });
  cv.note('Tâm động', [cx + 12, cy], [cx + 90, cy - 6], { size: 14 });
  cv.note('Crômatit chị em', [cx + 50, cy - 80], [cx + 100, cy - 110], { size: 14 });
  cv.note('Crômatit chị em', [cx + 40, cy + 85], [cx + 100, cy + 115], { size: 14 });
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- arrow diagrams
const FLOW = {
  foodchain: { items: ['Cây cỏ', 'Châu chấu', 'Ếch', 'Rắn', 'Đại bàng'], arrows: [], sub: ['Sinh vật sản xuất', 'Sinh vật tiêu thụ bậc 1', 'Sinh vật tiêu thụ bậc 2', 'Sinh vật tiêu thụ bậc 3', 'Sinh vật tiêu thụ bậc 4'] },
  gene: { items: ['ADN', 'mARN', 'Prôtêin', 'Tính trạng'], arrows: ['Phiên mã', 'Dịch mã', 'Biểu hiện'], sub: [] },
};
export function flow(o = {}) {
  const preset = FLOW[o.kind] || FLOW.foodchain, items = list(o.items, preset.items), arrows = list(o.arrows, preset.arrows);
  const sub = o.kind === 'custom' || !o.levels ? [] : preset.sub, vertical = o.dir === 'v', cv = new Canvas();
  const bw = items.map((t, i) => Math.max(textW(t, 16) + 30, 84, sub[i] ? textW(sub[i], 12) + 8 : 0)), bh = 40, gap = vertical ? 54 : 70 + (arrows.length ? Math.max(0, Math.max(...arrows.map((a) => textW(a, 13))) - 50) : 0);
  if (vertical) {
    const wmax = Math.max(...bw), W = wmax + 60 + (arrows.length ? Math.max(...arrows.map((a) => textW(a, 13))) + 20 : 0), H = items.length * bh + (items.length - 1) * gap + 40;
    items.forEach((t, i) => {
      const y = 20 + i * (bh + gap), x = 20;
      cv.rect(x, y, wmax, bh, { fill: PALETTE[i % PALETTE.length], w: 1.8 }); cv.text(t, [x + wmax / 2, y + bh / 2], { size: 16 });
      if (i < items.length - 1) { cv.arrow([x + wmax / 2, y + bh + 4], [x + wmax / 2, y + bh + gap - 4], { w: 2 }); if (arrows[i]) cv.text(arrows[i], [x + wmax / 2 + 12, y + bh + gap / 2], { size: 13, anchor: 'l' }); }
    });
    return frame(cv, W, H);
  }
  const W = bw.reduce((a, b) => a + b, 0) + gap * (items.length - 1) + 40, H = 110 + (sub.length ? 26 : 0);
  let x = 20;
  items.forEach((t, i) => {
    const y = 36;
    cv.rect(x, y, bw[i], bh, { fill: PALETTE[i % PALETTE.length], w: 1.8 }); cv.text(t, [x + bw[i] / 2, y + bh / 2], { size: 16 });
    if (sub[i]) cv.text(sub[i], [x + bw[i] / 2, y + bh + 20], { size: 12 });
    if (i < items.length - 1) { cv.arrow([x + bw[i] + 5, y + bh / 2], [x + bw[i] + gap - 5, y + bh / 2], { w: 2 }); if (arrows[i]) cv.text(arrows[i], [x + bw[i] + gap / 2, y + bh / 2 - 16], { size: 13 }); }
    x += bw[i] + gap;
  });
  return frame(cv, W, H);
}

export function pyramid(o = {}) {
  const items = list(o.items, ['Cây cỏ', 'Sâu', 'Chim sâu', 'Đại bàng']), n = items.length, cv = new Canvas(), lh = 56, Wb = 400, Wt = 60, W = Wb + 80, H = n * lh + 60;
  items.forEach((t, i) => {
    const yb = H - 30 - i * lh, yt = yb - lh, wb = Wb - (Wb - Wt) * i / n, wt = Wb - (Wb - Wt) * (i + 1) / n, c = W / 2;
    cv.poly([[c - wb / 2, yb], [c + wb / 2, yb], [c + wt / 2, yt], [c - wt / 2, yt]], { fill: PALETTE[i % PALETTE.length], w: 1.8 });
    cv.text(t, [c, (yb + yt) / 2], { size: 16 });
  });
  if (o.axis !== false) { cv.arrow([34, H - 30], [34, 36], { w: 1.6 }); cv.text('Bậc dinh dưỡng', [44, 24], { size: 13, anchor: 'l' }); }
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- Punnett square
const ordered = (a, b) => (a.toLowerCase() === b.toLowerCase() && a !== b ? (a === a.toUpperCase() ? a + b : b + a) : a + b);
/** Genotype of the offspring of two gametes such as "AB" and "ab": one allele pair per gene, the capital letter first. */
export function offspring(g1, g2) {
  let out = '';
  for (let i = 0; i < Math.max(g1.length, g2.length); i++) out += ordered(g1[i] || '', g2[i] || '');
  return out;
}
const phenotypeKey = (gen) => { let k = ''; for (let i = 0; i < gen.length; i += 2) { const a = gen[i], b = gen[i + 1] || ''; k += (a === a.toUpperCase() || b === b.toUpperCase()) ? `${(a === a.toUpperCase() ? a : b)}-` : a + b; } return k; };
export function punnettTable(p1, p2) {
  const g1 = list(p1, ['A', 'a']), g2 = list(p2, ['A', 'a']), grid = g2.map((m) => g1.map((f) => offspring(f, m)));
  const count = (key) => { const c = new Map(); grid.flat().forEach((g) => { const k = key(g); c.set(k, (c.get(k) || 0) + 1); }); return c; };
  const sortKeys = (m) => [...m.entries()].sort((a, b) => (b[0].replace(/[^A-Z]/g, '').length - a[0].replace(/[^A-Z]/g, '').length) || (a[0] < b[0] ? -1 : 1));
  return { g1, g2, grid, genotypes: sortKeys(count((g) => g)), phenotypes: [...count(phenotypeKey).entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)) };
}
export function punnett(o = {}) {
  const t = punnettTable(o.father, o.mother), cv = new Canvas(), cw = Math.max(70, 18 * (t.grid[0][0].length) + 40), ch = 46, left = 70, top = 52;
  const W = left + cw * t.g1.length + 40, tbl = ch * t.g2.length;
  const fmt = (arr) => arr.map(([k, c]) => `${c} ${k}`).join(' : ');
  const H = top + ch * (t.g2.length + 1) + (o.ratio !== false ? 74 : 20);
  cv.rect(10, top, left - 10 + cw * t.g1.length, ch, { fill: '#eef2f8', w: 1.4 });
  t.g1.forEach((g, i) => { cv.label(`\\text{${g}}`, [left + cw * (i + 0.5), top + ch / 2], { size: 17 }); });
  t.g2.forEach((g, j) => {
    const y = top + ch * (j + 1);
    cv.rect(10, y, left - 10, ch, { fill: '#eef2f8', w: 1.4 });
    cv.label(`\\text{${g}}`, [(10 + left) / 2, y + ch / 2], { size: 17 });
    t.g1.forEach((_f, i) => { cv.rect(left + cw * i, y, cw, ch, { w: 1.4 }); cv.label(`\\text{${t.grid[j][i]}}`, [left + cw * (i + 0.5), y + ch / 2], { size: 17 }); });
  });
  for (let i = 0; i < t.g1.length; i++) cv.rect(left + cw * i, top, cw, ch, { w: 1.4 });
  cv.text('Giao tử đực (♂)', [left + cw * t.g1.length / 2, top - 22], { size: 14 });
  cv.text('♀ / ♂', [(10 + left) / 2, top + ch / 2], { size: 14 });
  void tbl;
  if (o.ratio !== false) {
    const y = top + ch * (t.g2.length + 1) + 22;
    cv.text(`Tỉ lệ kiểu gen: ${fmt(t.genotypes)}`, [W / 2, y], { size: 15 });
    cv.text(`Tỉ lệ kiểu hình: ${fmt(t.phenotypes)}`, [W / 2, y + 26], { size: 15 });
  }
  return { ...frame(cv, Math.max(W, 330), H), table: t };
}

export const BIOLOGY = [
  { id: 'dna', label: 'Mô hình ADN', make: dna, options: [['kind', 'Kiểu', [['helix', 'Xoắn kép'], ['ladder', 'Dạng thang (có trình tự bazơ)']]], ['turns', 'Số vòng xoắn (xoắn kép)', { num: [1, 3, 2, 1] }], ['legend', 'Chú thích màu bazơ (xoắn kép)'], ['seq', 'Mạch 1 (A, T, G, X; dạng thang)', { text: 'ATGXC' }], ['ends', "Ghi đầu 5', 3' (dạng thang)"]] },
  { id: 'cell', label: 'Tế bào', make: cell, options: [['kind', 'Loại tế bào', [['animal', 'Tế bào động vật'], ['plant', 'Tế bào thực vật'], ['bacteria', 'Tế bào vi khuẩn']]], ['names', 'Ghi tên các bào quan']] },
  { id: 'chromosome', label: 'Nhiễm sắc thể', make: chromosome, options: [['kind', 'Trạng thái', [['double', 'Nhiễm sắc thể kép'], ['single', 'Nhiễm sắc thể đơn']]]] },
  { id: 'flow', label: 'Sơ đồ mũi tên (chuỗi thức ăn, cơ chế di truyền…)', make: flow, options: [['kind', 'Mẫu', [['foodchain', 'Chuỗi thức ăn'], ['gene', 'ADN → ARN → Prôtêin → Tính trạng'], ['custom', 'Tự nhập']]], ['items', 'Các thành phần (cách nhau bởi dấu phẩy; bỏ trống = mẫu)', { text: '' }], ['arrows', 'Nhãn trên các mũi tên (bỏ trống = mẫu)', { text: '' }], ['dir', 'Chiều', [['h', 'Ngang'], ['v', 'Dọc']]], ['levels', 'Ghi bậc dinh dưỡng (chuỗi thức ăn, chiều ngang)', undefined, false]] },
  { id: 'pyramid', label: 'Tháp sinh thái', make: pyramid, options: [['items', 'Các bậc, từ đáy lên đỉnh (cách nhau bởi dấu phẩy)', { text: 'Cây cỏ, Sâu, Chim sâu, Đại bàng' }], ['axis', 'Mũi tên “Bậc dinh dưỡng”']] },
  { id: 'punnett', label: 'Sơ đồ lai (bảng Punnett)', make: punnett, options: [['father', 'Giao tử đực (vd. AB, Ab, aB, ab)', { text: 'A, a' }], ['mother', 'Giao tử cái', { text: 'A, a' }], ['ratio', 'Ghi tỉ lệ kiểu gen, kiểu hình']] },
];
void P; void mid; void unit; void sub; void mul; void rad; void COLORS;
