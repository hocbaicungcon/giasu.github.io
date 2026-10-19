// Geometry figures of the Vietnamese maths curriculum as scenes (editable Word shapes or SVG/PNG).
// Points are named by the user ("A,B,C" ...); hidden edges are dashed; 3D uses the oblique (cabinet) projection.
import { sceneToSvg } from './scene.js';

const P = (x, y) => [x, y];
const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const mul = (a, k) => [a[0] * k, a[1] * k];
const len = (a) => Math.hypot(a[0], a[1]);
const unit = (a) => mul(a, 1 / (len(a) || 1));
const lerp = (a, b, t) => add(a, mul(sub(b, a), t));
const foot = (p, a, b) => { const d = sub(b, a), t = ((p[0] - a[0]) * d[0] + (p[1] - a[1]) * d[1]) / (d[0] * d[0] + d[1] * d[1]); return add(a, mul(d, t)); };

class Canvas {
  constructor() { this.items = []; this.pts = new Map(); }
  seg(a, b, o = {}) { this.items.push({ t: 'line', x1: a[0], y1: a[1], x2: b[0], y2: b[1], w: o.w || 1.5, dash: o.hidden ? '5 4' : (o.dash || ''), color: o.color }); }
  poly(pts, o = {}) { this.items.push({ t: 'poly', pts, closed: true, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.hidden ? '5 4' : '' }); }
  circle(c, r, o = {}) { this.items.push({ t: 'ellipse', cx: c[0], cy: c[1], rx: r, ry: o.ry ?? r, sw: o.w || 1.5, dash: o.hidden ? '5 4' : '', fill: o.fill, color: o.color }); }
  dot(p) { this.items.push({ t: 'dot', x: p[0], y: p[1], r: 2.4 }); }
  label(name, p, away, o = {}) {   // name placed away from the figure's centre
    const d = unit(away || [0, -1]);
    this.items.push({ t: 'label', latex: name, x: p[0] + d[0] * (o.dist || 12), y: p[1] + d[1] * (o.dist || 12), size: 16, anchor: 'c' });
  }
  rightAngle(v, a, b, size = 9) { const u = unit(sub(a, v)), w = unit(sub(b, v)); const p1 = add(v, mul(u, size)), p3 = add(v, mul(w, size)), p2 = add(p1, mul(w, size)); this.items.push({ t: 'poly', pts: [p1, p2, p3], closed: false, sw: 1 }); }
  tick(a, b, n = 1) { const m = mid(a, b), d = unit(sub(b, a)), nrm = [-d[1], d[0]]; for (let i = 0; i < n; i++) { const c = add(m, mul(d, (i - (n - 1) / 2) * 4)); this.seg(add(c, mul(nrm, 4)), sub(c, mul(nrm, 4)), { w: 1 }); } }
  arcAngle(v, a, b, r = 16) {   // small arc at v between rays va and vb
    const a1 = Math.atan2(a[1] - v[1], a[0] - v[0]), a2 = Math.atan2(b[1] - v[1], b[0] - v[0]);
    let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    const pts = Array.from({ length: 13 }, (_x, i) => [v[0] + r * Math.cos(a1 + d * i / 12), v[1] + r * Math.sin(a1 + d * i / 12)]);
    this.items.push({ t: 'poly', pts, closed: false, sw: 1 });
  }
}

function frame(c, W, H) { return { scene: { width: W, height: H, items: c.items }, svg: sceneToSvg({ width: W, height: H, items: c.items }), width: W, height: H }; }
function centre(pts) { return [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length]; }
function labelAll(c, names, pts, cen, extra = {}) { names.forEach((n, i) => { if (!n) return; c.dot(pts[i]); c.label(n, pts[i], sub(pts[i], cen), extra); }); }
const pick = (used, ...cands) => cands.find((c) => !used.includes(c)) || cands[0] + "'";   // an auto label that does not clash with the names the user chose
const nm = (src, fallback) => { const l = String(src || '').split(/[\s,;]+/).filter(Boolean); return fallback.map((f, i) => l[i] ?? f); };

// ---------------------------------------------------------------- plane figures
export function triangle(o = {}) {
  const [A, B, C] = nm(o.names, ['A', 'B', 'C']);
  const W = 420, H = 300, k = o.kind || 'scalene';
  let a, b, c;
  if (k === 'right') { b = P(70, 240); c = P(330, 240); a = P(70, 50); }
  else if (k === 'isosceles') { b = P(80, 240); c = P(320, 240); a = P(200, 50); }
  else if (k === 'equilateral') { b = P(90, 240); c = P(310, 240); a = P(200, 240 - 220 * Math.sqrt(3) / 2); }
  else { b = P(70, 240); c = P(340, 240); a = P(150, 50); }
  const cv = new Canvas(), cen = centre([a, b, c]);
  cv.poly([a, b, c]);
  const h = foot(a, b, c);
  if (o.altitude && k !== 'right') { cv.seg(a, h, { dash: '5 4' }); cv.rightAngle(h, a, c); cv.dot(h); cv.label(pick([A, B, C], o.heightName || 'H', 'K'), h, [0, 1]); }
  if (o.median) { const m = mid(b, c); cv.seg(a, m, { dash: '5 4' }); cv.dot(m); cv.label(pick([A, B, C], o.medianName || 'M', 'N'), m, [0, 1]); cv.tick(b, m); cv.tick(m, c); }
  if (o.bisector) { const bc = len(sub(b, a)), cc = len(sub(c, a)), d = lerp(b, c, bc / (bc + cc)); cv.seg(a, d, { dash: '5 4' }); cv.dot(d); cv.label('D', d, [0, 1]); cv.arcAngle(a, b, d, 22); cv.arcAngle(a, d, c, 26); }
  if (o.centroid) { const g = centre([a, b, c]); cv.seg(a, mid(b, c), { dash: '5 4' }); cv.seg(b, mid(a, c), { dash: '5 4' }); cv.seg(c, mid(a, b), { dash: '5 4' }); cv.dot(g); cv.label('G', g, [0.6, 0.6], { dist: 10 }); }
  if (k === 'right') cv.rightAngle(a, b, c, 12);
  if (k === 'isosceles') { cv.tick(a, b); cv.tick(a, c); }
  if (k === 'equilateral') { cv.tick(a, b); cv.tick(b, c); cv.tick(a, c); }
  if (o.circum) { const ax = a[0], ay = a[1], bx = b[0], by = b[1], cx = c[0], cy = c[1]; const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)); const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d, uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d; cv.circle([ux, uy], Math.hypot(ax - ux, ay - uy), { w: 1.2 }); cv.dot([ux, uy]); cv.label('O', [ux, uy], [0.6, 0.6], { dist: 9 }); }
  if (o.incircle) { const la = len(sub(b, c)), lb = len(sub(a, c)), lc = len(sub(a, b)), s = la + lb + lc; const i = [(la * a[0] + lb * b[0] + lc * c[0]) / s, (la * a[1] + lb * b[1] + lc * c[1]) / s]; const r = len(sub(i, foot(i, b, c))); cv.circle(i, r, { w: 1.2 }); cv.dot(i); cv.label('I', i, [0.6, 0.6], { dist: 9 }); }
  labelAll(cv, [A, B, C], [a, b, c], cen);
  return frame(cv, W, H);
}

export function circleFigure(o = {}) {
  const [Oc, A, B, Cc] = nm(o.names, ['O', 'A', 'B', 'C']);
  const W = 400, H = 360, c = P(200, 180), r = 140, cv = new Canvas();
  cv.circle(c, r); cv.dot(c); cv.label(Oc, c, [0.5, 0.7], { dist: 12 });
  const at = (deg) => [c[0] + r * Math.cos(deg * Math.PI / 180), c[1] - r * Math.sin(deg * Math.PI / 180)];
  const k = o.kind || 'diameter';
  if (k === 'diameter') { const p = at(180), q = at(0); cv.seg(p, q); cv.dot(p); cv.dot(q); cv.label(A, p, [-1, 0]); cv.label(B, q, [1, 0]); const t = at(65); cv.seg(p, t); cv.seg(t, q); cv.dot(t); cv.label(Cc, t, [0.3, -1]); cv.rightAngle(t, p, q, 10); }
  else if (k === 'chord') { const p = at(200), q = at(330); cv.seg(p, q); cv.seg(c, mid(p, q)); cv.dot(p); cv.dot(q); cv.label(A, p, [-1, 0.6]); cv.label(B, q, [1, 0.6]); const m = mid(p, q); cv.dot(m); cv.label('H', m, [0, 1]); cv.rightAngle(m, c, p, 9); }
  else if (k === 'tangent') { const t = at(300); const nrm = unit(sub(t, c)), d = [-nrm[1], nrm[0]]; cv.seg(c, t); cv.seg(add(t, mul(d, 120)), add(t, mul(d, -120))); cv.dot(t); cv.label(A, t, nrm, { dist: 12 }); cv.rightAngle(t, c, add(t, d), 10); }
  else if (k === 'inscribed') { const p = at(90), q = at(215), s = at(-35); cv.poly([p, q, s]); [[A, p, [0, -1]], [B, q, [-1, 0.6]], [Cc, s, [1, 0.6]]].forEach(([n, pt, d]) => { cv.dot(pt); cv.label(n, pt, d); }); }
  return frame(cv, W, H);
}

export function quadrilateral(o = {}) {
  const [A, B, C, D] = nm(o.names, ['A', 'B', 'C', 'D']);
  const W = 420, H = 280, k = o.kind || 'rectangle', cv = new Canvas();
  let a, b, c, d;
  if (k === 'square') { a = P(120, 60); b = P(300, 60); c = P(300, 240); d = P(120, 240); }
  else if (k === 'parallelogram') { a = P(100, 220); b = P(280, 220); c = P(340, 70); d = P(160, 70); [a, b, c, d] = [d, c, b, a]; a = P(160, 70); b = P(340, 70); c = P(280, 220); d = P(100, 220); }
  else if (k === 'rhombus') { a = P(210, 40); b = P(340, 140); c = P(210, 240); d = P(80, 140); }
  else if (k === 'trapezoid') { a = P(140, 70); b = P(280, 70); c = P(350, 230); d = P(70, 230); }
  else if (k === 'righttrapezoid') { a = P(110, 70); b = P(250, 70); c = P(340, 230); d = P(110, 230); }
  else { a = P(90, 70); b = P(330, 70); c = P(330, 230); d = P(90, 230); }
  cv.poly([a, b, c, d]);
  const cen = centre([a, b, c, d]);
  if (o.diagonals) { cv.seg(a, c, { dash: '5 4' }); cv.seg(b, d, { dash: '5 4' }); const m = mid(a, c); cv.dot(m); cv.label('O', m, [0.4, -0.6], { dist: 9 }); }
  if (k === 'rectangle' || k === 'square') [[a, d, b], [b, a, c], [c, b, d], [d, c, a]].forEach(([v, p, q]) => cv.rightAngle(v, p, q, 10));
  if (k === 'righttrapezoid') { cv.rightAngle(a, b, d, 10); cv.rightAngle(d, a, c, 10); }
  if (k === 'rhombus') { cv.tick(a, b); cv.tick(b, c); cv.tick(c, d); cv.tick(d, a); }
  labelAll(cv, [A, B, C, D], [a, b, c, d], cen);
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- solids (cabinet projection)
const proj = (x, y, z, s = 1) => [x + 0.5 * z * Math.cos(Math.PI / 4) * s, -y - 0.5 * z * Math.sin(Math.PI / 4) * s];

export function pyramid(o = {}) {
  const base = o.base || 'quad', W = 440, H = 340, cv = new Canvas();
  const perp = o.apex === 'A';   // SA vertical (SA ⟂ base), as in many exam figures
  if (base === 'tri') {
    const [S, A, B, C] = nm(o.names, ['S', 'A', 'B', 'C']);
    const a = P(70, 280), b = P(310, 280), c = P(220, 220), s = perp ? P(70, 40) : P(180, 40);
    cv.seg(a, b); cv.seg(b, c); cv.seg(a, c, { hidden: true }); cv.seg(s, a); cv.seg(s, b); cv.seg(s, c);
    if (perp) cv.rightAngle(a, s, b, 10);
    if (o.height && !perp) { const h = [s[0], 262]; cv.seg(s, h, { dash: '5 4' }); cv.dot(h); cv.label('H', h, [0, 1]); cv.rightAngle(h, s, [h[0] + 30, h[1]], 8); }
    if (o.midpoints) { const used = [S, A, B, C], mn = pick(used, 'M', 'K', 'E'), nn = pick([...used, mn], 'N', 'I', 'F'); const m = mid(b, c), n = mid(s, a); cv.seg(n, m, { dash: '5 4' }); cv.dot(m); cv.dot(n); cv.label(mn, m, [0.8, 0.6]); cv.label(nn, n, [-1, 0]); }
    labelAll(cv, [S, A, B, C], [s, a, b, c], centre([a, b, c, s]));
    return frame(cv, W, H);
  }
  const [S, A, B, C, D] = nm(o.names, ['S', 'A', 'B', 'C', 'D']);
  const a = P(70, 280), b = P(280, 280), d = P(150, 215), c = P(360, 215), s = perp ? P(70, 40) : P(225, 40);
  cv.seg(a, b); cv.seg(b, c); cv.seg(c, d, { hidden: true }); cv.seg(d, a, { hidden: true });
  cv.seg(s, a); cv.seg(s, b); cv.seg(s, c); cv.seg(s, d, { hidden: true });
  const O = mid(a, c);
  if (perp) cv.rightAngle(a, s, b, 10);
  if ((o.height && !perp) || o.diagonals) { cv.seg(a, c, { hidden: true }); cv.seg(b, d, { hidden: true }); cv.dot(O); cv.label(pick([S, A, B, C, D], 'O', 'H'), O, [0.3, 1], { dist: 11 }); }
  if (o.height && !perp) cv.seg(s, O, { dash: '5 4' });
  if (o.midpoints) { const used = [S, A, B, C, D], mn = pick(used, 'M', 'K', 'E'), nn = pick([...used, mn], 'N', 'I', 'F'); const m = mid(b, c), n = mid(s, a); cv.seg(n, m, { dash: '5 4' }); cv.dot(m); cv.dot(n); cv.label(mn, m, [0.8, 0.6]); cv.label(nn, n, [-1, 0]); }
  labelAll(cv, [S, A, B, C, D], [s, a, b, c, d], centre([a, b, c, d, s]));
  return frame(cv, W, H);
}

export function tetrahedron(o = {}) {
  const [A, B, C, D] = nm(o.names, ['A', 'B', 'C', 'D']), W = 440, H = 340, cv = new Canvas();
  const a = P(70, 280), b = P(310, 280), c = P(225, 215), d = P(185, 40);
  cv.seg(a, b); cv.seg(b, c); cv.seg(a, c, { hidden: true }); cv.seg(d, a); cv.seg(d, b); cv.seg(d, c);
  const used = [A, B, C, D], mn = pick(used, 'M', 'K', 'E'), nn = pick([...used, mn], 'N', 'I', 'F');
  if (o.medians) { const m = mid(b, c); cv.seg(a, m, { dash: '5 4' }); cv.seg(d, m, { dash: '5 4' }); cv.dot(m); cv.label(mn, m, [0.8, 0.6]); }
  if (o.opposite) { const m = mid(a, d), n = mid(b, c); cv.seg(m, n, { dash: '5 4' }); cv.dot(m); cv.dot(n); cv.label(mn, m, [-1, 0]); cv.label(nn, n, [0.8, 0.6]); }
  labelAll(cv, [D, A, B, C], [d, a, b, c], centre([a, b, c, d]));
  return frame(cv, W, H);
}

export function prism(o = {}) {
  const kind = o.kind || 'triangle', W = 440, H = 360, cv = new Canvas();
  const ox = 70, oy = 300;
  const q = (x, y, z) => { const p = proj(x, y, z); return [ox + p[0], oy + p[1]]; };
  if (kind === 'triangle') {
    const [A, B, C, A1, B1, C1] = nm(o.names, ['A', 'B', 'C', "A'", "B'", "C'"]);
    const a = q(0, 0, 0), b = q(220, 0, 0), c = q(0, 0, 160), a1 = q(0, 190, 0), b1 = q(220, 190, 0), c1 = q(0, 190, 160);
    cv.seg(a, b); cv.seg(b, c); cv.seg(a, c, { hidden: true }); cv.seg(a1, b1); cv.seg(b1, c1); cv.seg(a1, c1); cv.seg(a, a1); cv.seg(b, b1); cv.seg(c, c1, { hidden: true });
    labelAll(cv, [A, B, C, A1, B1, C1], [a, b, c, a1, b1, c1], centre([a, b, c, a1, b1, c1]));
    return frame(cv, W, H);
  }
  const names = nm(o.names, ['A', 'B', 'C', 'D', "A'", "B'", "C'", "D'"]);
  const w = kind === 'cube' ? 190 : 230, hgt = kind === 'cube' ? 190 : 150, dep = kind === 'cube' ? 190 : 170;
  const v = (x, y, z) => q(x, y, z);
  const A = v(0, 0, 0), B = v(w, 0, 0), D = v(0, 0, dep), C = v(w, 0, dep), A1 = v(0, hgt, 0), B1 = v(w, hgt, 0), D1 = v(0, hgt, dep), C1 = v(w, hgt, dep);
  cv.poly([A, B, C, D], { hidden: false }); cv.seg(A, B); cv.seg(B, C); cv.seg(C, D, { hidden: true }); cv.seg(D, A, { hidden: true });
  cv.seg(A1, B1); cv.seg(B1, C1); cv.seg(C1, D1); cv.seg(D1, A1); cv.seg(A, A1); cv.seg(B, B1); cv.seg(C, C1); cv.seg(D, D1, { hidden: true });
  // redraw hidden edges dashed over the solid polygon outline
  cv.items = cv.items.filter((it) => it.t !== 'poly');
  cv.seg(A, B); cv.seg(B, C); cv.seg(A, D, { hidden: true }); cv.seg(D, C, { hidden: true });
  if (o.diagonals) { cv.seg(A, C1, { dash: '5 4' }); }
  labelAll(cv, names, [A, B, C, D, A1, B1, C1, D1], centre([A, B, C, D, A1, B1, C1, D1]));
  return frame(cv, W, H);
}

export function roundSolid(o = {}) {
  const kind = o.kind || 'cone', W = 360, H = 360, cv = new Canvas();
  const cx = 180, rx = 110, ry = 28;
  const arc = (cx0, cyy, rx0, ry0, front) => { const pts = Array.from({ length: 31 }, (_x, i) => { const t = (front ? 0 : Math.PI) + Math.PI * i / 30; return [cx0 + rx0 * Math.cos(t), cyy + ry0 * Math.sin(t)]; }); cv.items.push({ t: 'poly', pts, closed: false, sw: 1.5, dash: front ? '' : '5 4' }); };
  if (kind === 'cone') {
    const [Sn, On, An] = nm(o.names, ['S', 'O', 'A']);
    const top = P(cx, 40), by = 290, Oc = P(cx, by), Ap = P(cx + rx, by);
    arc(cx, by, rx, ry, true); arc(cx, by, rx, ry, false); cv.seg(top, [cx - rx, by]); cv.seg(top, Ap);
    cv.seg(top, Oc, { dash: '5 4' }); cv.seg(Oc, Ap, { dash: '5 4' });
    cv.rightAngle(Oc, top, Ap, 9);
    cv.dot(top); cv.dot(Oc); cv.dot(Ap); cv.label(Sn, top, [0, -1]); cv.label(On, Oc, [-0.7, 0.8], { dist: 13 }); cv.label(An, Ap, [1, 0.5], { dist: 13 });
    if (o.showR !== false) cv.label('R', mid(Oc, Ap), [0, 1], { dist: 12 });
    if (o.showH !== false) cv.label('h', mid(top, Oc), [-1, 0], { dist: 12 });
    if (o.showL !== false) cv.label('l', mid(top, Ap), [1, -0.3], { dist: 14 });
  } else if (kind === 'cylinder') {
    const [On, O1n, An] = nm(o.names, ['O', "O'", 'A']);
    const t = 70, b = 290, O1 = P(cx, t), O2 = P(cx, b), Ap = P(cx + rx, b);
    cv.items.push({ t: 'ellipse', cx, cy: t, rx, ry, sw: 1.5 }); arc(cx, b, rx, ry, true); arc(cx, b, rx, ry, false); cv.seg([cx - rx, t], [cx - rx, b]); cv.seg([cx + rx, t], [cx + rx, b]);
    cv.seg(O1, O2, { dash: '5 4' }); cv.seg(O2, Ap, { dash: '5 4' }); cv.rightAngle(O2, O1, Ap, 9);
    cv.dot(O1); cv.dot(O2); cv.dot(Ap); cv.label(On, O2, [-0.7, 0.8], { dist: 13 }); cv.label(O1n, O1, [0, -1], { dist: 14 }); cv.label(An, Ap, [1, 0.5], { dist: 13 });
    if (o.showR !== false) cv.label('R', mid(O2, Ap), [0, 1], { dist: 12 });
    if (o.showH !== false) cv.label('h', mid(O1, O2), [-1, 0], { dist: 12 });
  } else if (kind === 'frustum') {
    const [On, O1n] = nm(o.names, ['O', "O'"]);
    const t = 80, b = 290, r1 = 62, r2 = 120, O1 = P(cx, t), O2 = P(cx, b);
    cv.items.push({ t: 'ellipse', cx, cy: t, rx: r1, ry: r1 * 0.26, sw: 1.5 }); arc(cx, b, r2, r2 * 0.26, true); arc(cx, b, r2, r2 * 0.26, false);
    cv.seg([cx - r1, t], [cx - r2, b]); cv.seg([cx + r1, t], [cx + r2, b]); cv.seg(O1, O2, { dash: '5 4' });
    cv.dot(O1); cv.dot(O2); cv.label(On, O2, [-0.7, 0.8], { dist: 13 }); cv.label(O1n, O1, [0, -1], { dist: 14 });
    if (o.showR !== false) { cv.seg(O2, [cx + r2, b], { dash: '5 4' }); cv.label('R', mid(O2, [cx + r2, b]), [0, 1], { dist: 12 }); cv.seg(O1, [cx + r1, t], { dash: '5 4' }); cv.label('r', mid(O1, [cx + r1, t]), [0, -1], { dist: 10 }); }
    if (o.showH !== false) cv.label('h', mid(O1, O2), [-1, 0], { dist: 12 });
  } else {
    const [On, An] = nm(o.names, ['O', 'A']);
    const r = 130, c = P(cx, 180), Ap = [c[0] + r, c[1]];
    cv.circle(c, r); arc2(cv, c, r);
    cv.dot(c); cv.dot(Ap); cv.label(On, c, [-0.5, 0.8], { dist: 11 }); cv.label(An, Ap, [1, 0], { dist: 12 }); cv.seg(c, Ap);
    if (o.showR !== false) cv.label('R', mid(c, Ap), [0, -1], { dist: 10 });
  }
  return frame(cv, W, H);
}
function arc2(cv, c, r) { const rx = r, ry = r * 0.25; const pts = Array.from({ length: 31 }, (_x, i) => { const t = Math.PI * i / 30; return [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]; }); const back = Array.from({ length: 31 }, (_x, i) => { const t = Math.PI + Math.PI * i / 30; return [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]; }); cv.items.push({ t: 'poly', pts, closed: false, sw: 1.3 }, { t: 'poly', pts: back, closed: false, sw: 1.3, dash: '5 4' }); }

export function axes(o = {}) {
  const W = 360, H = 320, cv = new Canvas();
  if (o.kind === 'oxyz') {
    const org = P(150, 220), x = P(330, 262), y = P(150, 20), z = P(40, 300);
    // Ox points right-down? textbook: Oy up, Oz toward the viewer (down-left), Ox right
    const xe = P(320, 220), ye = P(150, 24), ze = P(50, 290);
    [[xe, 'x'], [ye, 'y'], [ze, 'z']].forEach(([e, n]) => { cv.items.push({ t: 'line', x1: org[0], y1: org[1], x2: e[0], y2: e[1], w: 1.5, arrow: true }); cv.label(n, e, sub(e, org), { dist: 12 }); });
    cv.label('O', org, [-0.6, 0.8], { dist: 12 });
    void x; void y; void z;
  } else {
    const org = P(170, 170);
    cv.items.push({ t: 'line', x1: 20, y1: 170, x2: 340, y2: 170, w: 1.5, arrow: true }, { t: 'line', x1: 170, y1: 300, x2: 170, y2: 20, w: 1.5, arrow: true });
    cv.label('x', [340, 170], [1, 0.4], { dist: 12 }); cv.label('y', [170, 20], [0.5, -1], { dist: 12 }); cv.label('O', org, [-0.7, 0.9], { dist: 11 });
  }
  return frame(cv, W, H);
}

export const GEOMETRY = [
  { id: 'triangle', label: 'Tam giác', make: triangle, options: [['kind', 'Loại', [['scalene', 'Thường'], ['isosceles', 'Cân'], ['right', 'Vuông'], ['equilateral', 'Đều']]], ['altitude', 'Đường cao'], ['median', 'Trung tuyến'], ['bisector', 'Phân giác'], ['centroid', 'Trọng tâm'], ['circum', 'Đường tròn ngoại tiếp'], ['incircle', 'Đường tròn nội tiếp']], names: 'A,B,C' },
  { id: 'circle', label: 'Đường tròn', make: circleFigure, options: [['kind', 'Dạng', [['diameter', 'Đường kính + góc nội tiếp chắn nửa đường tròn'], ['chord', 'Dây cung + đường vuông góc'], ['tangent', 'Tiếp tuyến'], ['inscribed', 'Tam giác nội tiếp']]]], names: 'O,A,B,C' },
  { id: 'quad', label: 'Tứ giác', make: quadrilateral, options: [['kind', 'Loại', [['rectangle', 'Hình chữ nhật'], ['square', 'Hình vuông'], ['parallelogram', 'Hình bình hành'], ['rhombus', 'Hình thoi'], ['trapezoid', 'Hình thang'], ['righttrapezoid', 'Hình thang vuông']]], ['diagonals', 'Hai đường chéo']], names: 'A,B,C,D' },
  { id: 'pyramid', label: 'Hình chóp (đáy tứ giác / tam giác)', make: pyramid, options: [['base', 'Đáy', [['quad', 'Tứ giác  S.ABCD'], ['tri', 'Tam giác  S.ABC']]], ['apex', 'Đỉnh S', [['center', 'Chóp đều (đường cao SO / SH)'], ['A', 'SA vuông góc với đáy']]], ['height', 'Đường cao SO (chóp đều)'], ['diagonals', 'Hai đường chéo đáy'], ['midpoints', 'Trung điểm M của BC, N của SA']], names: 'S,A,B,C,D' },
  { id: 'tetra', label: 'Tứ diện', make: tetrahedron, options: [['medians', 'Trung tuyến AM, DM (M trung điểm BC)'], ['opposite', 'Đoạn nối trung điểm hai cạnh đối AD, BC']], names: 'A,B,C,D' },
  { id: 'prism', label: 'Lăng trụ / hình hộp / lập phương', make: prism, options: [['kind', 'Loại', [['triangle', 'Lăng trụ tam giác ABC.A\'B\'C\''], ['box', 'Hình hộp chữ nhật'], ['cube', 'Hình lập phương']]], ['diagonals', 'Đường chéo AC\'']], names: "A,B,C,D,A',B',C',D'" },
  { id: 'round', label: 'Hình nón / trụ / nón cụt / cầu', make: roundSolid, options: [['kind', 'Hình', [['cone', 'Hình nón'], ['cylinder', 'Hình trụ'], ['frustum', 'Hình nón cụt'], ['sphere', 'Hình cầu']]], ['showR', 'Ghi bán kính R'], ['showH', 'Ghi chiều cao h'], ['showL', 'Ghi đường sinh l (hình nón)']], names: 'S,O,A', hint: 'Hình nón: S,O,A · hình trụ: O,O\',A · nón cụt: O,O\' · hình cầu: O,A' },
  { id: 'axes', label: 'Hệ trục tọa độ', make: axes, options: [['kind', 'Hệ', [['oxy', 'Oxy'], ['oxyz', 'Oxyz']]]], names: '' },
];
