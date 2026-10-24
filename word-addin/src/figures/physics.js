// Physics figures: pendulums, springs, inclined plane, force diagrams, weights, carts, pulleys, lever, circuits, thin lenses.
import { Canvas, frame, P, add, sub, mul, unit, len, mid, rad, arcPts, COLORS, clamp, list } from './sci-kit.js';

/** Force / vector arrow with its label just beyond the tip. */
function vec(cv, from, to, latex, o = {}) {
  cv.arrow(from, to, { w: o.w || 2.2, color: o.color || '#c62828', dash: o.dash });
  if (latex) { const d = unit(sub(to, from)); cv.label(latex, add(to, add(mul(d, o.dist || 13), o.nudge || [0, 0])), { size: o.size || 16 }); }
}
function hatch(cv, x1, x2, y, down = true) {
  cv.line([x1, y], [x2, y], { w: 2.5 });
  for (let x = x1 + 8; x <= x2; x += 10) cv.line([x, y], [x - 8, y + (down ? 9 : -9)], { w: 1 });
}
const coil = (a, b, turns = 9, amp = 11, lead = 0.14) => {
  const d = unit(sub(b, a)), n = [-d[1], d[0]], L = len(sub(b, a)), pts = [a, add(a, mul(d, L * lead))];
  const steps = turns * 2;
  for (let i = 0; i < steps; i++) { const t = lead + (1 - 2 * lead) * (i + 0.5) / steps; pts.push(add(add(a, mul(d, L * t)), mul(n, (i % 2 ? -1 : 1) * amp))); }
  pts.push(add(a, mul(d, L * (1 - lead))), b);
  return pts;
};
const blockBox = (cv, x, y, w, h, fill = COLORS.wood) => cv.rect(x, y, w, h, { fill, w: 1.6 });

// ---------------------------------------------------------------- pendulums
export function pendulum(o = {}) {
  const cv = new Canvas(), W = 460, H = 370, O = P(170, 40), L = 230, a = clamp(o.angle, 5, 60, 30);
  const B = P(O[0] + L * Math.sin(rad(a)), O[1] + L * Math.cos(rad(a)));
  hatch(cv, 90, 250, O[1], false);
  cv.line(O, [O[0], O[1] + L + 36], { dash: '6 4', w: 1.1, color: '#666' });
  cv.line(O, B, { w: 1.8 });
  cv.path(arcPts(O[0], O[1], 70, 70, 270, 270 + a, 14), { w: 1.2 });
  cv.label('\\alpha', [O[0] + 92 * Math.sin(rad(a / 2)), O[1] + 92 * Math.cos(rad(a / 2))], { size: 16 });
  if (o.showL !== false) cv.label('\\ell', mid(O, B), { size: 16, halo: true, anchor: 'c' });
  cv.circle(B, 17, { fill: COLORS.metal, w: 1.8 });
  cv.dot(O, 3);
  const u = [Math.sin(rad(a)), Math.cos(rad(a))], t = [-Math.cos(rad(a)), Math.sin(rad(a))];
  if (o.forces !== false) {
    vec(cv, B, add(B, [0, 85]), '\\vec{P}');
    vec(cv, B, sub(B, mul(u, 95)), '\\vec{T}', { color: '#1565c0' });
  }
  if (o.components) {
    const pn = mul(u, 85 * Math.cos(rad(a))), pt = mul(t, 85 * Math.sin(rad(a))), tip = add(B, [0, 85]);
    cv.line(tip, add(B, pn), { dash: '4 3', w: 1, color: '#777' });
    cv.line(tip, add(B, pt), { dash: '4 3', w: 1, color: '#777' });
    vec(cv, B, add(B, pn), '\\vec{P}_{n}', { color: '#2e7d32', w: 1.8, dist: 11 });
    vec(cv, B, add(B, pt), '\\vec{P}_{t}', { color: '#2e7d32', w: 1.8, dist: 11 });
  }
  return frame(cv, W, H);
}

export function springPendulum(o = {}) {
  const cv = new Canvas();
  const shifted = o.displaced !== false;
  if (o.kind === 'vertical') {
    const W = 440, H = 400, top = 190 + (shifted ? 50 : 0), cx = 200;
    hatch(cv, 120, 280, 30, false);
    cv.path(coil([cx, 30], [cx, top], 10, 14));
    blockBox(cv, cx - 38, top, 76, 62);
    cv.text('m', [cx, top + 31], { size: 16 });
    cv.line([cx - 90, 190 + 31], [cx + 90, 190 + 31], { dash: '6 4', w: 1, color: '#666' });
    cv.label('O', [cx - 105, 221], { size: 15 });
    cv.arrow([380, 221], [380, 360], { w: 1.4 });
    cv.label('x', [394, 356], { size: 15 });
    if (o.forces !== false) {
      vec(cv, [cx, top + 62], [cx, top + 62 + 70], '\\vec{P}');
      vec(cv, [cx + 38, top], [cx + 38, top - 70], '\\vec{F}_{\\text{đh}}', { color: '#1565c0' });
    }
    return frame(cv, W, H);
  }
  const W = 480, H = 250, floor = 190, x0 = 235, dx = shifted ? 45 : 0, bw = 76, bh = 60;
  hatch(cv, 40, 470, floor, true);
  cv.line([40, 60], [40, floor], { w: 2.5 });
  for (let y = 70; y < floor; y += 10) cv.line([40, y], [30, y + 8], { w: 1 });
  const bx = x0 + dx;
  cv.path(coil([40, floor - bh / 2], [bx, floor - bh / 2], 9, 12));
  blockBox(cv, bx, floor - bh, bw, bh);
  cv.text('m', [bx + bw / 2, floor - bh / 2], { size: 16 });
  const eq = x0 + bw / 2;
  cv.line([eq, floor - bh - 25], [eq, floor + 40], { dash: '6 4', w: 1, color: '#666' });
  cv.label('O', [eq, floor + 56], { size: 15 });
  cv.arrow([eq, floor + 30], [440, floor + 30], { w: 1.4 });
  cv.label('x', [452, floor + 34], { size: 15 });
  if (shifted) { const cxp = bx + bw / 2; cv.line([cxp, floor - bh - 8], [cxp, floor + 40], { dash: '3 3', w: 1, color: '#999' }); }
  if (o.forces !== false) {
    const G = [bx + bw / 2, floor - bh - 22];
    if (shifted) vec(cv, G, [G[0] - 78, G[1]], '\\vec{F}_{\\text{đh}}', { color: '#1565c0', dist: 16 });
  }
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- inclined plane and forces
export function incline(o = {}) {
  const cv = new Canvas(), W = 470, H = 340, a = clamp(o.angle, 10, 60, 30), L = Math.min(330, 240 / Math.sin(rad(a)));
  const A = P(40, 300), B = P(40 + L * Math.cos(rad(a)), 300), C = P(B[0], 300 - L * Math.sin(rad(a)));
  cv.line(A, B, { w: 2.4 }); cv.line(B, C, { w: 1.6 }); cv.line(A, C, { w: 2.6 });
  cv.path([[B[0] - 12, B[1]], [B[0] - 12, B[1] - 12], [B[0], B[1] - 12]], { w: 1 });
  cv.path(arcPts(A[0], A[1], 52, 52, 0, a, 12), { w: 1.2 });
  cv.label('\\alpha', [A[0] + 72 * Math.cos(rad(a / 2)), A[1] - 72 * Math.sin(rad(a / 2))], { size: 16 });
  for (let s = 14; s < L; s += 14) { const p = add(A, mul([Math.cos(rad(a)), -Math.sin(rad(a))], s)); cv.line(p, add(p, [-6, 8]), { w: 0.9, color: '#777' }); void p; }
  const u = [Math.cos(rad(a)), -Math.sin(rad(a))], n = [-Math.sin(rad(a)), -Math.cos(rad(a))], w = 78, h = 48, s0 = L * 0.52;
  const P0 = add(A, mul(u, s0)), c1 = sub(P0, mul(u, w / 2)), c2 = add(P0, mul(u, w / 2));
  cv.poly([c1, c2, add(c2, mul(n, h)), add(c1, mul(n, h))], { fill: COLORS.wood, w: 1.7 });
  const G = add(P0, mul(n, h / 2)); cv.dot(G, 2.8);
  const k = 88;
  if (o.forces !== false) {
    vec(cv, G, add(G, [0, k]), '\\vec{P}');
    vec(cv, G, add(G, mul(n, k * 0.9)), '\\vec{N}', { color: '#1565c0' });
    if (o.friction) vec(cv, G, add(G, mul(u, k * 0.6)), '\\vec{F}_{ms}', { color: '#2e7d32' });
  }
  if (o.components) {
    const px = mul(u, -k * Math.sin(rad(a))), py = mul(n, -k * Math.cos(rad(a))), tip = add(G, [0, k]);
    cv.line(tip, add(G, px), { dash: '4 3', w: 1, color: '#777' }); cv.line(tip, add(G, py), { dash: '4 3', w: 1, color: '#777' });
    vec(cv, G, add(G, px), '\\vec{P}_{x}', { color: '#6a1b9a', w: 1.8, dist: 11 });
    vec(cv, G, add(G, py), '\\vec{P}_{y}', { color: '#6a1b9a', w: 1.8, dist: 11 });
  }
  return frame(cv, W, H);
}

export function flatForces(o = {}) {
  const cv = new Canvas(), W = 440, H = 300, floor = 215, bx = 170, bw = 100, bh = 64, G = [bx + bw / 2, floor - bh / 2];
  hatch(cv, 40, 400, floor, true);
  blockBox(cv, bx, floor - bh, bw, bh);
  cv.dot(G, 2.8);
  vec(cv, G, [G[0], G[1] + 80], '\\vec{P}');
  vec(cv, G, [G[0], G[1] - 80], '\\vec{N}', { color: '#1565c0' });
  if (o.pull !== false) {
    const th = rad(clamp(o.angle, 0, 70, 30)), F = 105;
    vec(cv, G, add(G, [F * Math.cos(th), -F * Math.sin(th)]), '\\vec{F}', { color: '#2e7d32' });
    if (th > 0.05) { cv.path(arcPts(G[0], G[1], 55, 55, 0, th * 180 / Math.PI, 8), { w: 1.1 }); cv.label('\\alpha', [G[0] + 72 * Math.cos(th / 2), G[1] - 72 * Math.sin(th / 2) + 2], { size: 14 }); }
  }
  if (o.friction !== false) vec(cv, [bx, floor - 14], [bx - 70, floor - 14], '\\vec{F}_{ms}', { color: '#6a1b9a' });
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- weights, carts, pulleys
function weightKnob(cv, cx, y, k, text) {
  const X = (dx) => cx + dx * k, Y = (dy) => y + dy * k;
  cv.poly([[X(-36), Y(70)], [X(36), Y(70)], [X(28), Y(0)], [X(-28), Y(0)]], { fill: COLORS.metal, w: 1.7 });
  cv.rect(X(-11), Y(-18), 22 * k, 18 * k, { fill: COLORS.metal, w: 1.7 });
  cv.ellipse(cx, Y(-19), 11 * k, 4 * k, { fill: '#b9c2cc', w: 1.4 });
  cv.text(text, [cx, Y(38)], { size: 14 });
}
function weightHooked(cv, cx, y, text) {
  cv.rect(cx - 32, y, 64, 74, { fill: COLORS.metal, w: 1.7 });
  cv.line([cx - 32, y + 14], [cx + 32, y + 14], { w: 1.2 });
  cv.line([cx, y], [cx, y - 18], { w: 2 }); cv.circle([cx, y - 28], 10, { w: 2 });
  cv.text(text, [cx, y + 44], { size: 14 });
}
export function weights(o = {}) {
  const cv = new Canvas();
  if (o.kind === 'set') {
    const m = list(o.mass, ['50 g', '100 g', '200 g']);
    const W = 140 * m.length + 40, H = 210;
    m.forEach((t, i) => weightKnob(cv, 90 + 140 * i, 70, 0.8 + 0.18 * i, t));
    cv.line([20, 168], [W - 20, 168], { w: 2 });
    return frame(cv, W, H);
  }
  const m = list(o.mass, ['100 g'])[0];
  if (o.kind === 'hooked') { weightHooked(cv, 120, 60, m); return frame(cv, 240, 170); }
  weightKnob(cv, 120, 60, 1.1, m);
  return frame(cv, 240, 170);
}

function wheel(cv, c, r = 12) { cv.circle(c, r, { fill: '#555', w: 1.6 }); cv.dot(c, 2.4, '#ddd'); }
export function cart(o = {}) {
  const cv = new Canvas();
  if (o.kind === 'pulley') {
    const W = 440, H = 290, top = 170, cx = 150, cw = 120, ch = 38;
    cv.line([30, top], [345, top], { w: 2.5 });
    cv.line([345, top], [345, top + 60], { w: 2 });
    for (let y = top + 12; y < top + 60; y += 10) cv.line([345, y], [354, y - 8], { w: 1 });
    for (let x = 40; x < 345; x += 12) cv.line([x, top], [x - 8, top + 9], { w: 1 });
    blockBox(cv, cx, top - 22 - ch, cw, ch, '#8fb6de');
    wheel(cv, [cx + 24, top - 11]); wheel(cv, [cx + cw - 24, top - 11]);
    cv.text('M', [cx + cw / 2, top - 22 - ch / 2], { size: 17 });
    const sy = top - 22 - ch / 2, pc = [362, sy + 14];
    cv.line([345, top], [pc[0], pc[1] + 6], { w: 1.6 });
    cv.circle(pc, 14, { fill: '#e8edf3', w: 1.8 }); cv.dot(pc, 2.4);
    cv.path([[cx + cw, sy], [pc[0], sy], ...arcPts(pc[0], pc[1], 14, 14, 90, 0, 8), [pc[0] + 14, pc[1] + 100]], { w: 1.4 });
    blockBox(cv, pc[0] - 20, pc[1] + 100, 40, 40, COLORS.metal);
    cv.text('m', [pc[0], pc[1] + 120], { size: 16 });
    if (o.forces) { vec(cv, [cx + cw, sy], [cx + cw + 46, sy], '\\vec{T}', { color: '#1565c0', dist: 12 }); vec(cv, [pc[0] + 14, pc[1] + 100], [pc[0] + 14, pc[1] + 60], '\\vec{T}', { color: '#1565c0', dist: 12 }); }
    return frame(cv, W, H);
  }
  const W = 400, H = 220, top = 150, cx = 120, cw = 150, ch = 44;
  cv.line([30, top], [370, top], { w: 2.5 });
  for (let x = 40; x < 370; x += 12) cv.line([x, top], [x - 8, top + 9], { w: 1 });
  blockBox(cv, cx, top - 24 - ch, cw, ch, '#8fb6de');
  wheel(cv, [cx + 30, top - 12], 12); wheel(cv, [cx + cw - 30, top - 12], 12);
  cv.text('xe lăn', [cx + cw / 2, top - 24 - ch / 2], { size: 15 });
  if (o.forces) {
    const G = [cx + cw / 2, top - 24 - ch / 2];
    vec(cv, [cx + cw, G[1]], [cx + cw + 70, G[1]], '\\vec{F}', { color: '#2e7d32' });
    vec(cv, [cx, G[1]], [cx - 55, G[1]], '\\vec{F}_{ms}', { color: '#6a1b9a' });
    cv.arrow([cx + 20, top - 24 - ch - 20], [cx + 100, top - 24 - ch - 20], { w: 1.6 });
    cv.label('\\vec{v}', [cx + 120, top - 24 - ch - 20], { size: 16 });
  }
  return frame(cv, W, H);
}

export function pulleys(o = {}) {
  const cv = new Canvas(), kind = o.kind || 'fixed', W = 380, H = 330;
  const pulley = (c, r = 28) => { cv.circle(c, r, { fill: '#e8edf3', w: 2 }); cv.circle(c, r - 7, { w: 1 }); cv.dot(c, 3); };
  if (kind === 'movable') {
    hatch(cv, 100, 190, 30, false);
    const c = [200, 160];
    cv.line([172, 30], [172, c[1]], { w: 1.8 });
    pulley(c);
    cv.path([[172, c[1]], ...arcPts(c[0], c[1], 28, 28, 180, 360, 14), [228, 40]], { w: 1.8 });
    vec(cv, [228, 90], [228, 52], '\\vec{F}', { color: '#2e7d32' });
    cv.line(c, [200, 240], { w: 1.8 });
    blockBox(cv, 170, 240, 60, 52, COLORS.metal); cv.text('P', [200, 266], { size: 16 });
    return frame(cv, W, H);
  }
  hatch(cv, 110, 290, 30, false);
  const c = [200, 100];
  cv.line([200, 30], c, { w: 2 });
  pulley(c);
  if (kind === 'atwood') {
    cv.line([172, c[1]], [172, 210], { w: 1.8 }); cv.line([228, c[1]], [228, 190], { w: 1.8 });
    cv.path(arcPts(c[0], c[1], 28, 28, 0, 180, 14), { w: 1.8 });
    blockBox(cv, 145, 210, 54, 60, COLORS.metal); cv.label('m_1', [172, 240], { size: 16 });
    blockBox(cv, 205, 190, 46, 46, '#b9c2cc'); cv.label('m_2', [228, 213], { size: 16 });
    if (o.forces) { vec(cv, [172, 210], [172, 160], '\\vec{T}', { color: '#1565c0', dist: 12 }); }
    return frame(cv, W, H);
  }
  cv.path([[172, 240], [172, c[1]], ...arcPts(c[0], c[1], 28, 28, 180, 0, 14), [228, 200]], { w: 1.8 });
  blockBox(cv, 144, 240, 56, 56, COLORS.metal); cv.text('P', [172, 268], { size: 16 });
  vec(cv, [228, 170], [228, 240], '\\vec{F}', { color: '#2e7d32' });
  return frame(cv, W, H);
}

export function lever(o = {}) {
  const cv = new Canvas(), W = 500, H = 340, y = 150, xl = 60, xr = 440;
  const d1 = clamp(o.d1, 1, 20, 2), d2 = clamp(o.d2, 1, 20, 1), xf = xl + (xr - xl) * d1 / (d1 + d2);
  cv.poly([[xf, y + 4], [xf - 28, y + 58], [xf + 28, y + 58]], { fill: '#d5d9df', w: 1.8 });
  hatch(cv, xf - 60, xf + 60, y + 58, true);
  cv.line([xl - 20, y], [xr + 20, y], { w: 6, color: '#7a5a38' });
  cv.dot([xf, y], 3.4);
  cv.label('O', [xf, y - 18], { size: 15 });
  vec(cv, [xl, y + 8], [xl, y + 80], '\\vec{F}_1');
  vec(cv, [xr, y + 8], [xr, y + 80], '\\vec{F}_2');
  if (o.weights) {
    blockBox(cv, xl - 30, y + 125, 60, 46, COLORS.metal); cv.label('m_1', [xl, y + 148], { size: 15 });
    blockBox(cv, xr - 22, y + 125, 44, 46, '#b9c2cc'); cv.label('m_2', [xr, y + 148], { size: 15 });
    cv.line([xl, y + 80], [xl, y + 125], { w: 1.4 }); cv.line([xr, y + 80], [xr, y + 125], { w: 1.4 });
  }
  if (o.arms !== false) {
    const ya = y - 48;
    [[xl, xf, 'd_1'], [xf, xr, 'd_2']].forEach(([a, b, t]) => {
      cv.arrow([(a + b) / 2, ya], [a, ya], { w: 1.2, color: '#333' }); cv.arrow([(a + b) / 2, ya], [b, ya], { w: 1.2, color: '#333' });
      cv.line([a, ya - 8], [a, y - 4], { w: 0.9, dash: '3 3', color: '#888' }); cv.line([b, ya - 8], [b, y - 4], { w: 0.9, dash: '3 3', color: '#888' });
      cv.label(t, [(a + b) / 2, ya - 14], { size: 15 });
    });
  }
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- electric circuits
export function circuit(o = {}) {
  const cv = new Canvas(), W = 460, H = 290, T = 50, B = 245, Lx = 60, Rx = 400, resistor = o.load === 'resistor';
  const wire = (...pts) => cv.path(pts, { w: 1.8 });
  const bulbH = (c, name) => { if (resistor) { cv.rect(c[0] - 24, c[1] - 10, 48, 20, { fill: '#fff', w: 1.8 }); } else { cv.circle(c, 18, { fill: '#fff', w: 1.8 }); const d = 18 * 0.707; cv.line([c[0] - d, c[1] - d], [c[0] + d, c[1] + d], { w: 1.6 }); cv.line([c[0] - d, c[1] + d], [c[0] + d, c[1] - d], { w: 1.6 }); } cv.label(name, [c[0], c[1] - 32], { size: 15 }); };
  const bulbV = (c, name) => { if (resistor) { cv.rect(c[0] - 10, c[1] - 24, 20, 48, { fill: '#fff', w: 1.8 }); } else { cv.circle(c, 18, { fill: '#fff', w: 1.8 }); const d = 18 * 0.707; cv.line([c[0] - d, c[1] - d], [c[0] + d, c[1] + d], { w: 1.6 }); cv.line([c[0] - d, c[1] + d], [c[0] + d, c[1] - d], { w: 1.6 }); } cv.label(name, [c[0] + 34, c[1]], { size: 15 }); };
  const meter = (c, t) => { cv.circle(c, 16, { fill: '#fff', w: 1.8 }); cv.label(`\\text{${t}}`, c, { size: 15 }); };
  // battery on the left side: long plate = +
  const my = (T + B) / 2;
  wire([Lx, T], [Lx, my - 12]); wire([Lx, my + 12], [Lx, B]);
  cv.line([Lx - 18, my - 12], [Lx + 18, my - 12], { w: 2 }); cv.line([Lx - 10, my + 12], [Lx + 10, my + 12], { w: 4 });
  cv.label('+', [Lx + 30, my - 18], { size: 15 }); cv.label('-', [Lx + 30, my + 18], { size: 15 });
  // switch on the top rail
  const sx = 130, closed = o.closed !== false;
  wire([Lx, T], [sx, T]); cv.dot([sx, T], 3); cv.dot([sx + 44, T], 3);
  cv.line([sx, T], closed ? [sx + 44, T] : [sx + 40, T - 22], { w: 2 });
  const named = (i) => (resistor ? `R_{${i}}` : `\\text{Đ}_{${i}}`);
  if (o.kind === 'parallel') {
    wire([sx + 44, T], [Rx, T]);
    wire([Lx, B], [Rx, B]); wire([Rx, T], [Rx, B]);
    [[260, 1], [340, 2]].forEach(([x, i]) => { cv.dot([x, T], 3); cv.dot([x, B], 3); wire([x, T], [x, 110 - (resistor ? 24 : 18)]); wire([x, 110 + (resistor ? 24 : 18)], [x, B]); bulbV([x, 110], named(i)); });
    if (o.ammeter) { cv.circle([Lx + 90, B], 16, { fill: '#fff', w: 1.8 }); cv.label('\\text{A}', [Lx + 90, B], { size: 15 }); }
    return frame(cv, W, H);
  }
  const lx = 270, half = resistor ? 24 : 18;
  wire([sx + 44, T], [lx - half, T]); wire([lx + half, T], [Rx, T]); bulbH([lx, T], named(1));
  wire([Rx, T], [Rx, B]); wire([Lx, B], [Rx, B]);
  if (o.ammeter) { wire([Lx, B], [Lx, B]); cv.circle([220, B], 16, { fill: '#fff', w: 1.8 }); cv.label('\\text{A}', [220, B], { size: 15 }); }
  if (o.voltmeter) {
    const vx1 = lx - half - 14, vx2 = lx + half + 14, vy = 120;
    cv.dot([vx1, T], 3); cv.dot([vx2, T], 3);
    wire([vx1, T], [vx1, vy], [lx - 16, vy]); wire([lx + 16, vy], [vx2, vy], [vx2, T]);
    meter([lx, vy], 'V');
  }
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- thin lens
/** Image distance d' (cm) for object distance d and signed focal length f (cm): 1/f = 1/d + 1/d'. */
export const imageDistance = (d, f) => { if (Math.abs(d - f) < 1e-9) throw new Error('Vật đặt đúng tiêu điểm: ảnh ở vô cực.'); return d * f / (d - f); };
export function lens(o = {}) {
  const diverging = o.kind === 'diverging', d = clamp(o.d, 1, 200, 30), F = clamp(o.f, 1, 200, 10), f = diverging ? -F : F, h = clamp(o.h, 0.5, 20, 3);
  const di = imageDistance(d, f), cv = new Canvas(), W = 660, H = 340, x0 = 330, y0 = 170;
  const s = Math.min(28, 290 / Math.max(d, Math.abs(di), 2 * F, 1));
  const hP = Math.min(h * s, 100), D = d * s, Fx = f * s, xEnd = W - 14;
  const T = [x0 - D, y0 - hP], hiMath = -hP * di / d, I = [x0 + di * s, y0 - hiMath], virtual = di < 0;
  cv.arrow([14, y0], [W - 8, y0], { w: 1.3, color: '#444' });
  cv.line([x0, y0 - 118], [x0, y0 + 118], { w: 2.2, color: '#1565c0' });
  const tipHead = (y, dir) => cv.poly([[x0, y], [x0 - 8, y + dir * 13], [x0 + 8, y + dir * 13]], { fill: '#1565c0', color: '#1565c0', w: 1 });
  if (diverging) { tipHead(y0 - 118, -1); tipHead(y0 + 118, 1); cv.line([x0 - 10, y0 - 118], [x0 + 10, y0 - 118], { w: 2, color: '#1565c0' }); cv.line([x0 - 10, y0 + 118], [x0 + 10, y0 + 118], { w: 2, color: '#1565c0' }); }
  else { tipHead(y0 - 118, 1); tipHead(y0 + 118, -1); }
  [[x0 - Math.abs(Fx), 'F'], [x0 + Math.abs(Fx), "F'"]].forEach(([x, t]) => { cv.line([x, y0 - 5], [x, y0 + 5], { w: 1.6 }); cv.label(t, [x, y0 + 20], { size: 15 }); });
  cv.label('O', [x0 + 11, y0 + 18], { size: 15 });
  cv.arrow([T[0], y0], T, { w: 2.4, color: '#222' });
  cv.label('A', [T[0], y0 + 16], { size: 15 }); cv.label('B', [T[0], T[1] - 13], { size: 15 });
  if (o.rays !== false) {
    const col = '#c62828', sg = Math.sign(f);
    const ext = (p, dir) => { const t = (xEnd - p[0]) / dir[0]; return [xEnd, p[1] + dir[1] * t]; };
    const r1 = [x0, y0 - hP], d1 = [sg * Fx, sg * hP];
    const y3 = y0 + hP * Fx / (D - Fx), r3 = [x0, y3];
    const d2 = [D, hP];
    cv.line(T, r1, { w: 1.5, color: col }); cv.line(r1, ext(r1, d1), { w: 1.5, color: col });
    cv.line(T, [x0, y0], { w: 1.5, color: col }); cv.line([x0, y0], ext([x0, y0], d2), { w: 1.5, color: col });
    cv.line(T, r3, { w: 1.5, color: col }); cv.line(r3, [xEnd, y3], { w: 1.5, color: col });
    if (virtual) [r1, [x0, y0], r3].forEach((p) => cv.line(p, I, { w: 1.3, color: col, dash: '5 4' }));
  }
  const inFrame = I[0] > 10 && I[0] < W - 10;
  if (inFrame) {
    cv.arrow([I[0], y0], I, { w: 2.4, color: '#2e7d32', dash: virtual ? '5 3' : '' });
    cv.label("A'", [I[0], y0 + (hiMath > 0 ? 16 : -16)], { size: 15 }); cv.label("B'", [I[0], I[1] + (hiMath > 0 ? -13 : 13)], { size: 15 });
  }
  const m = -di / d, r = (v) => String(Math.round(v * 100) / 100).replace('.', ',');
  const note = `Ảnh ${virtual ? 'ảo' : 'thật'}, ${m < 0 ? 'ngược chiều' : 'cùng chiều'} vật, ${Math.abs(m) > 1.0001 ? 'lớn hơn' : Math.abs(m) < 0.9999 ? 'nhỏ hơn' : 'bằng'} vật; d' = ${r(di)} cm, k = ${r(m)}.`;
  return { ...frame(cv, W, H), note, image: { d: di, virtual, inverted: hiMath < 0, magnification: m } };
}

export const PHYSICS = [
  { id: 'pendulum', label: 'Con lắc đơn', make: pendulum, options: [['angle', 'Góc lệch α (độ)', { num: [5, 60, 30, 1] }], ['forces', 'Vẽ trọng lực P và lực căng T'], ['components', 'Phân tích P thành Pₙ, Pₜ', undefined, false], ['showL', 'Ghi chiều dài ℓ']] },
  { id: 'spring', label: 'Con lắc lò xo', make: springPendulum, options: [['kind', 'Cách đặt', [['horizontal', 'Nằm ngang'], ['vertical', 'Thẳng đứng']]], ['displaced', 'Vật lệch khỏi vị trí cân bằng (có trục Ox)'], ['forces', 'Vẽ các lực']] },
  { id: 'incline', label: 'Mặt phẳng nghiêng', make: incline, options: [['angle', 'Góc nghiêng α (độ)', { num: [10, 60, 30, 1] }], ['forces', 'Vẽ P và N'], ['friction', 'Vẽ lực ma sát', undefined, false], ['components', 'Phân tích P thành Pₓ, Pᵧ', undefined, false]] },
  { id: 'flat', label: 'Lực tác dụng lên vật (mặt phẳng ngang)', make: flatForces, options: [['pull', 'Lực kéo F'], ['angle', 'Góc của lực kéo (độ)', { num: [0, 70, 30, 1] }], ['friction', 'Lực ma sát']] },
  { id: 'weights', label: 'Quả cân', make: weights, options: [['kind', 'Loại', [['knob', 'Quả cân có núm'], ['hooked', 'Quả nặng có móc'], ['set', 'Bộ quả cân']]], ['mass', 'Khối lượng ghi trên quả cân (bộ: cách nhau bởi dấu phẩy)', { text: '100 g' }]] },
  { id: 'cart', label: 'Xe mô hình', make: cart, options: [['kind', 'Kiểu', [['simple', 'Xe lăn trên mặt phẳng'], ['pulley', 'Xe nối quả nặng qua ròng rọc']]], ['forces', 'Vẽ các lực', undefined, false]] },
  { id: 'pulley', label: 'Ròng rọc', make: pulleys, options: [['kind', 'Loại', [['fixed', 'Ròng rọc cố định'], ['movable', 'Ròng rọc động'], ['atwood', 'Hai vật qua ròng rọc']]], ['forces', 'Vẽ lực căng (hai vật)', undefined, false]] },
  { id: 'lever', label: 'Đòn bẩy', make: lever, options: [['d1', 'Tay đòn d₁', { num: [1, 20, 2, 0.5] }], ['d2', 'Tay đòn d₂', { num: [1, 20, 1, 0.5] }], ['arms', 'Ghi tay đòn'], ['weights', 'Vẽ vật treo', undefined, false]] },
  { id: 'circuit', label: 'Mạch điện', make: circuit, options: [['kind', 'Mạch', [['series', 'Nối tiếp'], ['parallel', 'Song song']]], ['load', 'Thiết bị', [['bulb', 'Bóng đèn'], ['resistor', 'Điện trở']]], ['closed', 'Công tắc đóng'], ['ammeter', 'Ampe kế', undefined, false], ['voltmeter', 'Vôn kế (mạch nối tiếp)', undefined, false]] },
  { id: 'lens', label: 'Thấu kính (tạo ảnh)', make: lens, options: [['kind', 'Loại', [['converging', 'Thấu kính hội tụ'], ['diverging', 'Thấu kính phân kì']]], ['d', 'Khoảng cách vật d (cm)', { num: [1, 200, 30, 1] }], ['f', 'Tiêu cự f (cm)', { num: [1, 200, 10, 1] }], ['h', 'Chiều cao vật (cm)', { num: [0.5, 20, 3, 0.5] }], ['rays', 'Vẽ các tia sáng']] },
];
