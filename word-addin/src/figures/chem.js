// Chemistry figures: laboratory glassware, experiment set-ups, molecule models and Bohr atom models.
import { Canvas, frame, P, add, sub, mul, unit, len, mid, rot, rad, arcPts, COLORS, list } from './sci-kit.js';

const liqColor = (o) => COLORS[o.liquid] || '';
const LIQ = [['none', 'Không có chất lỏng'], ['water', 'Xanh lam nhạt'], ['pink', 'Hồng'], ['yellow', 'Vàng'], ['green', 'Xanh lục'], ['orange', 'Cam']];
const fillPoly = (cv, pts, fill) => cv.poly(pts, { fill, color: fill, w: 0.5 });

/** Alcohol lamp with its flame; (cx, yb) is the middle of the bottom; scale k. */
export function lamp(cv, cx, yb, k = 1, flame = true) {
  const X = (dx) => cx + dx * k, Y = (dy) => yb + dy * k;
  cv.ellipse(cx, Y(-30), 55 * k, 30 * k, { fill: COLORS.glass });
  cv.line([X(-45), Y(-26)], [X(45), Y(-26)], { w: 0.9, color: '#6b8fb5' });
  cv.rect(X(-12), Y(-84), 24 * k, 28 * k, { fill: COLORS.glass });
  cv.poly([[X(-19), Y(-84)], [X(19), Y(-84)], [X(14), Y(-98)], [X(-14), Y(-98)]], { fill: COLORS.metal });
  cv.line([X(0), Y(-98)], [X(0), Y(-108)], { w: 2 });
  if (flame) cv.poly([[X(0), Y(-140)], [X(-9), Y(-120)], [X(-6), Y(-108)], [X(6), Y(-108)], [X(9), Y(-120)]], { fill: COLORS.orange, color: '#d9792b', w: 1 });
}

/** Test tube: local frame with the mouth at the origin and the axis along +x; returns the outline in local coordinates. */
const tubeLocal = (length, w) => [[0, -w / 2], [length - w / 2, -w / 2], ...arcPts(length - w / 2, 0, w / 2, w / 2, 90, -90, 14), [0, w / 2]];
const place = (pts, deg, M) => pts.map((p) => add(rot(p, deg), M));

function erlenPts(cx, top, bottom, neckW, baseW, neckLen) {
  const ny = top + neckLen;
  return [[cx - neckW / 2, top], [cx - neckW / 2, ny], [cx - baseW / 2, bottom], [cx + baseW / 2, bottom], [cx + neckW / 2, ny], [cx + neckW / 2, top]];
}
const erlenHalf = (cx, top, bottom, neckW, baseW, neckLen, y) => { const ny = top + neckLen, t = (y - ny) / (bottom - ny); return (neckW + (baseW - neckW) * Math.max(0, Math.min(1, t))) / 2; };
function erlenLiquid(cv, cx, top, bottom, neckW, baseW, neckLen, level, fill) {
  if (!fill) return;
  const h = erlenHalf(cx, top, bottom, neckW, baseW, neckLen, level);
  fillPoly(cv, [[cx - h, level], [cx - baseW / 2, bottom], [cx + baseW / 2, bottom], [cx + h, level]], fill);
}

// ---------------------------------------------------------------- single pieces of glassware
const WARE = {
  tube: { name: 'Ống nghiệm', draw(cv, cx, fill) {
    if (fill) fillPoly(cv, [[cx - 28, 130], [cx - 28, 250], ...arcPts(cx, 250, 28, 28, 180, 360, 14), [cx + 28, 130]], fill);
    cv.path([[cx - 28, 40], [cx - 28, 250], ...arcPts(cx, 250, 28, 28, 180, 360, 14), [cx + 28, 40]]);
    cv.line([cx - 34, 40], [cx + 34, 40]);
    if (fill) cv.line([cx - 28, 130], [cx + 28, 130], { w: 1 });
  } },
  beaker: { name: 'Cốc thủy tinh', draw(cv, cx, fill) {
    if (fill) fillPoly(cv, [[cx - 60, 150], [cx - 60, 260], [cx + 60, 260], [cx + 60, 150]], fill);
    cv.path([[cx - 68, 64], [cx - 60, 70], [cx - 60, 260], [cx + 60, 260], [cx + 60, 70]]);
    if (fill) cv.line([cx - 60, 150], [cx + 60, 150], { w: 1 });
    [110, 150, 190, 230].forEach((y, i) => cv.line([cx - 60, y], [cx - (i % 2 ? 48 : 38), y], { w: 1 }));
  } },
  erlen: { name: 'Bình tam giác', draw(cv, cx, fill) {
    erlenLiquid(cv, cx, 40, 260, 30, 160, 70, 190, fill);
    cv.path(erlenPts(cx, 40, 260, 30, 160, 70));
    cv.line([cx - 20, 40], [cx + 20, 40]);
    if (fill) cv.line([cx - erlenHalf(cx, 40, 260, 30, 160, 70, 190), 190], [cx + erlenHalf(cx, 40, 260, 30, 160, 70, 190), 190], { w: 1 });
  } },
  round: { name: 'Bình cầu đáy tròn', draw(cv, cx, fill) {
    const c = [cx, 190], r = 80, a1 = Math.acos(15 / 80) * 180 / Math.PI;
    if (fill) fillPoly(cv, arcPts(c[0], c[1], r, r, 180 - Math.asin(20 / 80) * 180 / Math.PI + 0, 360 + Math.asin(20 / 80) * 180 / Math.PI, 28), fill);
    cv.path([[cx - 15, 40], ...arcPts(c[0], c[1], r, r, 180 - a1, 360 + a1, 40), [cx + 15, 40]]);
    cv.line([cx - 20, 40], [cx + 20, 40]);
    if (fill) { const dx = Math.sqrt(80 * 80 - 20 * 20); cv.line([cx - dx, 170], [cx + dx, 170], { w: 1 }); }
  } },
  cylinder: { name: 'Ống đong', draw(cv, cx, fill) {
    if (fill) fillPoly(cv, [[cx - 25, 130], [cx - 25, 270], [cx + 25, 270], [cx + 25, 130]], fill);
    cv.path([[cx - 25, 30], [cx - 25, 270], [cx + 25, 270], [cx + 25, 30]]);
    cv.poly([[cx - 25, 270], [cx + 25, 270], [cx + 42, 288], [cx - 42, 288]], { fill: COLORS.glass });
    for (let y = 60, i = 0; y <= 250; y += 20, i++) cv.line([cx - 25, y], [cx - (i % 2 ? 14 : 5), y], { w: 1 });
    cv.line([cx - 31, 30], [cx + 31, 30]);
  } },
  funnel: { name: 'Phễu', draw(cv, cx, fill) {
    cv.path([[cx - 75, 60], [cx - 10, 190], [cx - 10, 270]]);
    cv.path([[cx + 75, 60], [cx + 10, 190], [cx + 10, 270]]);
    cv.line([cx - 75, 60], [cx + 75, 60]);
    if (fill) fillPoly(cv, [[cx - 62, 90], [cx - 6, 195], [cx + 6, 195], [cx + 62, 90]], fill);
  } },
  lamp: { name: 'Đèn cồn', draw(cv, cx) { lamp(cv, cx, 280, 1.15); } },
};
export function labware(o = {}) {
  const w = WARE[o.kind] || WARE.tube, cv = new Canvas(), cx = 130;
  w.draw(cv, cx, o.kind === 'lamp' ? '' : liqColor(o));
  if (o.showName !== false) cv.text(String(o.names || '').trim() || w.name, [cx, 312], { size: 15 });
  return frame(cv, 260, 330);
}

// ---------------------------------------------------------------- experiment set-ups
function heatedTube(cv, M, deg, fill) {
  const outline = place(tubeLocal(150, 44), deg, M);
  const bottom = place([[88, -22], [128, -22], ...arcPts(128, 0, 22, 22, 90, -90, 14), [88, 22]], deg, M);
  fillPoly(cv, bottom, fill || COLORS.gray);
  cv.path(outline);
  cv.poly(place([[-4, -11], [22, -9], [22, 9], [-4, 11]], deg, M), { fill: '#b98a5a', color: '#7a5a38' });
  return place([[50, 0], [-24, 0]], deg, M);
}

function gasWater(o) {
  const cv = new Canvas(), W = 600, H = 360;
  fillPoly(cv, [[41, 245], [229, 245], [229, 319], [41, 319]], COLORS.water);
  cv.path([[40, 215], [40, 320], [230, 320], [230, 215]]);
  fillPoly(cv, [[109, 205], [109, 290], [151, 290], [151, 205]], COLORS.water);
  cv.path([[108, 290], [108, 142], ...arcPts(130, 142, 22, 22, 180, 0, 12), [152, 290]]);
  const [s, e] = heatedTube(cv, P(330, 212), -12, o.solid ? COLORS.gray : COLORS.yellow);
  cv.path([s, e, [e[0] - 16, 200], [200, 200], [200, 300], [130, 300], [130, 262]], { w: 2.2, color: '#4a6a88' });
  lamp(cv, 455, 354);
  if (o.showName !== false) {
    cv.note('Hỗn hợp phản ứng', [462, 190], [440, 110]);
    cv.note('Ống dẫn khí', [250, 200], [250, 150]);
    cv.note('Khí thu được', [130, 170], [200, 105]);
    cv.note('Chậu nước', [60, 300], [60, 338]);
    cv.note('Đèn cồn', [508, 330], [530, 330]);
    cv.note('Nút cao su', [316, 214], [316, 258]);
  }
  return frame(cv, W, H);
}

function gasAir(o) {
  const cv = new Canvas(), W = 600, H = 360, up = o.collect !== 'down';
  const [s, e] = heatedTube(cv, P(330, 212), -12, COLORS.yellow);
  if (up) {
    cv.path([[90, 170], [90, 330], [170, 330], [170, 170]]);
    cv.path([s, e, [e[0] - 16, 200], [130, 200], [130, 310]], { w: 2.2, color: '#4a6a88' });
    cv.text('Khí', [130, 250], { size: 15 });
    if (o.showName !== false) { cv.note('Bình thu khí (để ngửa)', [170, 250], [190, 250]); }
  } else {
    cv.path([[90, 320], [90, 180], [170, 180], [170, 320]]);
    cv.path([s, e, [e[0] - 16, 250], [262, 250], [262, 345], [130, 345], [130, 200]], { w: 2.2, color: '#4a6a88' });
    cv.text('Khí', [150, 215], { size: 15, anchor: 'c' });
    if (o.showName !== false) { cv.note('Bình thu khí (úp ngược)', [170, 270], [190, 290]); }
  }
  lamp(cv, 455, 354);
  if (o.showName !== false) {
    cv.note('Hỗn hợp phản ứng', [462, 190], [440, 110]);
    cv.note('Đèn cồn', [508, 330], [530, 330]);
    cv.note('Ống dẫn khí', up ? [200, 200] : [262, 300], up ? [200, 150] : [284, 300]);
  }
  return frame(cv, W, H);
}

function filtration(o) {
  const cv = new Canvas(), W = 440, H = 370;
  fillPoly(cv, [[81, 300], [81, 339], [239, 339], [239, 300]], COLORS.water);
  cv.path([[80, 230], [80, 340], [240, 340], [240, 230]]);
  cv.line([80, 300], [240, 300], { w: 1 });
  fillPoly(cv, [[104, 106], [160, 205], [160, 205], [216, 106]], COLORS.yellow);
  cv.poly([[88, 100], [160, 212], [232, 100]], { dash: '4 3', w: 1, color: '#666' });
  cv.path([[70, 100], [150, 215], [150, 268]]);
  cv.path([[250, 100], [170, 215], [170, 268]]);
  cv.line([70, 100], [250, 100]);
  cv.line([225, 40], [160, 150], { w: 3.2, color: '#4a6a88' });
  [[160, 283], [160, 295]].forEach((p) => cv.dot(p, 2.4, '#4a90d9'));
  if (o.showName !== false) {
    cv.note('Phễu lọc', [250, 100], [275, 80]);
    cv.note('Giấy lọc', [232, 118], [275, 130]);
    cv.note('Đũa thủy tinh', [215, 55], [245, 40]);
    cv.note('Dung dịch cần lọc', [185, 130], [275, 170]);
    cv.note('Cốc hứng (nước lọc)', [240, 320], [262, 320]);
  }
  return frame(cv, W, H);
}

function distillation(o) {
  const cv = new Canvas(), W = 640, H = 372;
  const c = [110, 190], r = 60, a1 = Math.acos(14 / 60) * 180 / Math.PI;
  fillPoly(cv, arcPts(c[0], c[1], r, r, 180 - Math.asin(10 / 60) * 180 / Math.PI, 360 + Math.asin(10 / 60) * 180 / Math.PI, 24), COLORS.water);
  cv.path([[96, 70], ...arcPts(c[0], c[1], r, r, 180 - a1, 360 + a1, 36), [124, 70]]);
  cv.line([110, 52], [110, 206], { w: 2, color: '#a33' });
  cv.circle([110, 210], 5, { fill: '#e5534b', color: '#a33', w: 1 });
  // condenser: two jackets around an inner tube, sloping down to the right
  const S = [124, 100], T = [430, 205], d = unit(sub(T, S)), n = [-d[1], d[0]];
  const A = add(S, mul(d, 10)), B = sub(T, mul(d, 10));
  cv.path([A, B], { w: 2.2, color: '#4a6a88' });
  [-14, 14].forEach((k) => cv.line(add(A, mul(n, k)), add(B, mul(n, k)), { w: 1.5 }));
  cv.line(add(A, mul(n, -14)), add(A, mul(n, 14)), { w: 1.5 });
  cv.line(add(B, mul(n, -14)), add(B, mul(n, 14)), { w: 1.5 });
  const wOut = add(add(A, mul(d, 40)), mul(n, -14)), wIn = add(sub(B, mul(d, 40)), mul(n, 14));
  cv.arrow(add(wOut, mul(n, -6)), add(wOut, mul(n, -40)), { w: 1.8, color: '#2a7ac8' });
  cv.arrow(add(wIn, mul(n, 40)), add(wIn, mul(n, 6)), { w: 1.8, color: '#2a7ac8' });
  const ex = T[0] + 12;
  erlenLiquid(cv, ex, 235, 350, 28, 110, 40, 330, COLORS.water);
  cv.path(erlenPts(ex, 235, 350, 28, 110, 40));
  cv.path([sub(T, mul(d, 6)), add(T, mul(d, 14)), [ex, 262]], { w: 2.2, color: '#4a6a88' });
  [[ex, 290]].forEach((p) => cv.dot(p, 2.4, '#4a90d9'));
  lamp(cv, 110, 360, 0.72);
  if (o.showName !== false) {
    cv.note('Nhiệt kế', [110, 56], [140, 38]);
    cv.text('Bình cầu', [110, 232], { size: 13 });
    cv.note('Ống sinh hàn', add(mid(A, B), mul(n, 14)), add(mid(A, B), [30, -62]));
    cv.note('Nước ra', add(wOut, mul(n, -40)), add(wOut, [24, -52]));
    cv.note('Nước vào', add(wIn, mul(n, 40)), add(add(wIn, mul(n, 40)), [-24, 26]));
    cv.note('Bình hứng', [ex + 55, 330], [ex + 66, 330]);
    cv.note('Đèn cồn', [165, 345], [185, 345]);
  }
  return frame(cv, W, H);
}

export function setup(o = {}) {
  return ({ gaswater: gasWater, gasair: gasAir, filter: filtration, distill: distillation }[o.kind] || gasWater)(o);
}

// ---------------------------------------------------------------- molecules
const EL = {
  H: { color: '#f4f4f4', r: 0.26, text: '#000' }, C: { color: '#4a4f57', r: 0.36, text: '#fff' }, O: { color: '#e5534b', r: 0.34, text: '#fff' },
  N: { color: '#4a6fd8', r: 0.34, text: '#fff' }, Cl: { color: '#4cae5a', r: 0.44, text: '#fff' },
};
const hex = (r, a0) => Array.from({ length: 6 }, (_x, i) => [r * Math.cos(rad(a0 + 60 * i)), r * Math.sin(rad(a0 + 60 * i))]);
function benzene() {
  const ring = hex(1.2, 0), atoms = [], bonds = [];
  ring.forEach((p, i) => { atoms.push(['C', p[0], p[1]]); });
  ring.forEach((p, i) => { atoms.push(['H', p[0] * 1.8, p[1] * 1.8]); });
  for (let i = 0; i < 6; i++) { bonds.push([i, (i + 1) % 6, i % 2 ? 1 : 2]); bonds.push([i, 6 + i, 1]); }
  return { atoms, bonds };
}
const MOLECULES = {
  h2o: { name: 'Nước H₂O', f: 'H_2O', atoms: [['O', 0, 0], ['H', -0.79, 0.61], ['H', 0.79, 0.61]], bonds: [[0, 1, 1], [0, 2, 1]] },
  co2: { name: 'Cacbon đioxit CO₂', f: 'CO_2', atoms: [['O', -1.2, 0], ['C', 0, 0], ['O', 1.2, 0]], bonds: [[0, 1, 2], [1, 2, 2]] },
  nh3: { name: 'Amoniac NH₃', f: 'NH_3', atoms: [['N', 0, 0], ['H', 0, -1], ['H', -0.87, 0.5], ['H', 0.87, 0.5]], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]] },
  ch4: { name: 'Metan CH₄', f: 'CH_4', atoms: [['C', 0, 0], ['H', 0, -1], ['H', 0, 1], ['H', -1, 0], ['H', 1, 0]], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]] },
  c2h6: { name: 'Etan C₂H₆', f: 'C_2H_6', atoms: [['C', -0.75, 0], ['C', 0.75, 0], ['H', -0.75, -1], ['H', -0.75, 1], ['H', -1.75, 0], ['H', 0.75, -1], ['H', 0.75, 1], ['H', 1.75, 0]], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1]] },
  c2h4: { name: 'Etilen C₂H₄', f: 'C_2H_4', atoms: [['C', -0.7, 0], ['C', 0.7, 0], ['H', -1.3, -0.85], ['H', -1.3, 0.85], ['H', 1.3, -0.85], ['H', 1.3, 0.85]], bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]] },
  c2h2: { name: 'Axetilen C₂H₂', f: 'C_2H_2', atoms: [['H', -1.9, 0], ['C', -0.65, 0], ['C', 0.65, 0], ['H', 1.9, 0]], bonds: [[0, 1, 1], [1, 2, 3], [2, 3, 1]] },
  c2h5oh: { name: 'Etanol C₂H₅OH', f: 'C_2H_5OH', atoms: [['C', -1.3, 0.1], ['C', 0, -0.1], ['O', 1.3, 0.1], ['H', 2.1, 0.7], ['H', -1.3, -0.95], ['H', -1.3, 1.15], ['H', -2.25, 0.1], ['H', 0, -1.15], ['H', 0, 0.95]], bonds: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [1, 7, 1], [1, 8, 1]] },
  c6h6: { name: 'Benzen C₆H₆', f: 'C_6H_6', ...benzene() },
  hcl: { name: 'Hiđro clorua HCl', f: 'HCl', atoms: [['H', -0.75, 0], ['Cl', 0.75, 0]], bonds: [[0, 1, 1]] },
  o2: { name: 'Oxi O₂', f: 'O_2', atoms: [['O', -0.6, 0], ['O', 0.6, 0]], bonds: [[0, 1, 2]] },
  n2: { name: 'Nitơ N₂', f: 'N_2', atoms: [['N', -0.6, 0], ['N', 0.6, 0]], bonds: [[0, 1, 3]] },
  h2: { name: 'Hiđro H₂', f: 'H_2', atoms: [['H', -0.5, 0], ['H', 0.5, 0]], bonds: [[0, 1, 1]] },
};
const chemTex = (f) => f.replace(/([A-Za-z]+)|_(\d+)/g, (_m, el, n) => (el ? `\\text{${el}}` : `_{${n}}`));
export const MOLECULE_CHOICES = Object.entries(MOLECULES).map(([k, m]) => [k, m.name]);

export function molecule(o = {}) {
  const m = MOLECULES[o.kind] || MOLECULES.h2o, cv = new Canvas(), ball = o.style === 'ball', K = ball ? 78 : 74;
  const xs = m.atoms.map((a) => a[1]), ys = m.atoms.map((a) => a[2]);
  const pad = 1.2, minx = Math.min(...xs) - pad, maxx = Math.max(...xs) + pad, miny = Math.min(...ys) - pad, maxy = Math.max(...ys) + pad;
  const W = Math.max(240, (maxx - minx) * K), H = (maxy - miny) * K + (o.showName !== false ? 38 : 0);
  const pos = m.atoms.map((a) => [W / 2 + (a[1] - (minx + maxx) / 2) * K, (maxy - miny) * K / 2 + (a[2] - (miny + maxy) / 2) * K]);
  for (const [i, j, order] of m.bonds) {
    const a = pos[i], b = pos[j], d = unit(sub(b, a)), nrm = [-d[1], d[0]];
    const ga = ball ? 0 : EL[m.atoms[i][0]].r * K * 0.85 + 3, gb = ball ? 0 : EL[m.atoms[j][0]].r * K * 0.85 + 3;
    const A = add(a, mul(d, ga)), B = sub(b, mul(d, gb));
    const offs = order === 1 ? [0] : order === 2 ? [-3.2, 3.2] : [-5, 0, 5];
    offs.forEach((k) => cv.line(add(A, mul(nrm, k)), add(B, mul(nrm, k)), { w: ball ? 4 : 1.8, color: ball ? '#9aa0a8' : '#000' }));
  }
  m.atoms.forEach(([el], i) => {
    const e = EL[el];
    if (ball) { cv.circle(pos[i], e.r * K, { fill: e.color, color: '#333', w: 1.2 }); cv.label(`\\mathrm{${el}}`, pos[i], { size: 15 + (el === 'H' ? -2 : 0) }); }
    else cv.label(`\\mathrm{${el}}`, pos[i], { size: 18 });
  });
  if (o.showName !== false) cv.label(chemTex(m.f), [W / 2, H - 16], { size: 20 });
  return frame(cv, W, H);
}


// ---------------------------------------------------------------- aromatic compounds (benzene ring family), skeletal formulae
const MIRROR = { CH_3: 'H_3C', OH: 'HO', NH_2: 'H_2N', NO_2: 'O_2N', COOH: 'HOOC', CHO: 'OHC' };
/** Single ring, vertex 0 at the top, then clockwise; `subs` maps ring vertex -> label or chain of [dx-angle, order] bonds. */
const ringOf = (subs, extra = {}) => ({ rings: [{ c: [0, 0], a0: -90 }], subs, ...extra });
const AROMATICS = {
  benzene: { name: 'Benzen', f: 'C_6H_6', ...ringOf({}) },
  toluene: { name: 'Toluen', f: 'C_6H_5CH_3', ...ringOf({ 0: 'CH_3' }) },
  ethylbenzene: { name: 'Etylbenzen', f: 'C_6H_5C_2H_5', ...ringOf({ 0: { chain: [[-90, 1], [-30, 1]] } }) },
  styrene: { name: 'Stiren', f: 'C_6H_5CH=CH_2', ...ringOf({ 0: { chain: [[-90, 1], [-30, 2]] } }) },
  phenol: { name: 'Phenol', f: 'C_6H_5OH', ...ringOf({ 0: 'OH' }) },
  aniline: { name: 'Anilin', f: 'C_6H_5NH_2', ...ringOf({ 0: 'NH_2' }) },
  chlorobenzene: { name: 'Clobenzen', f: 'C_6H_5Cl', ...ringOf({ 0: 'Cl' }) },
  bromobenzene: { name: 'Brombenzen', f: 'C_6H_5Br', ...ringOf({ 0: 'Br' }) },
  nitrobenzene: { name: 'Nitrobenzen', f: 'C_6H_5NO_2', ...ringOf({ 0: 'NO_2' }) },
  benzaldehyde: { name: 'Benzanđehit', f: 'C_6H_5CHO', ...ringOf({ 0: 'CHO' }) },
  benzoic: { name: 'Axit benzoic', f: 'C_6H_5COOH', ...ringOf({ 0: 'COOH' }) },
  o_xylene: { name: 'o-Xilen', f: 'C_6H_4(CH_3)_2', ...ringOf({ 0: 'CH_3', 1: 'CH_3' }) },
  m_xylene: { name: 'm-Xilen', f: 'C_6H_4(CH_3)_2', ...ringOf({ 0: 'CH_3', 2: 'CH_3' }) },
  p_xylene: { name: 'p-Xilen', f: 'C_6H_4(CH_3)_2', ...ringOf({ 0: 'CH_3', 3: 'CH_3' }) },
  o_cresol: { name: 'o-Crezol', f: 'CH_3C_6H_4OH', ...ringOf({ 0: 'OH', 1: 'CH_3' }) },
  m_cresol: { name: 'm-Crezol', f: 'CH_3C_6H_4OH', ...ringOf({ 0: 'OH', 2: 'CH_3' }) },
  p_cresol: { name: 'p-Crezol', f: 'CH_3C_6H_4OH', ...ringOf({ 0: 'OH', 3: 'CH_3' }) },
  tnt: { name: '2,4,6-Trinitrotoluen (TNT)', f: 'C_6H_2(NO_2)_3CH_3', ...ringOf({ 0: 'CH_3', 1: 'NO_2', 3: 'NO_2', 5: 'NO_2' }) },
  picric: { name: 'Axit picric (2,4,6-trinitrophenol)', f: 'C_6H_2(NO_2)_3OH', ...ringOf({ 0: 'OH', 1: 'NO_2', 3: 'NO_2', 5: 'NO_2' }) },
  tribromophenol: { name: '2,4,6-Tribromphenol', f: 'C_6H_2Br_3OH', ...ringOf({ 0: 'OH', 1: 'Br', 3: 'Br', 5: 'Br' }) },
  biphenyl: { name: 'Biphenyl', f: 'C_6H_5-C_6H_5', rings: [{ c: [-1.5, 0], a0: 0 }, { c: [1.5, 0], a0: 0 }], subs: {}, link: [[0, 0], [1, 3]] },
  naphthalene: { name: 'Naphtalen', f: 'C_{10}H_8', fused: true, subs: {} },
};
export const AROMATIC_CHOICES = Object.entries(AROMATICS).map(([k, m]) => [k, m.name]);

export function aromatic(o = {}) {
  const m = AROMATICS[o.kind] || AROMATICS.benzene, cv = new Canvas(), R = 34, circle = o.style === 'circle', LW = 1.8;
  const atoms = [], bonds = [], ringList = [];        // atoms: [x,y]; bonds: [i,j,order,centre]
  const ringAtoms = (c, a0) => Array.from({ length: 6 }, (_x, i) => atoms.push([c[0] + R * Math.cos(rad(a0 + 60 * i)), c[1] + R * Math.sin(rad(a0 + 60 * i))]) - 1);
  if (m.fused) {                                       // naphthalene: pointy-top rings sharing a vertical edge
    const d = Math.sqrt(3) * R, cL = [-d / 2, 0], cR = [d / 2, 0];
    // left ring atoms L0..L5, right ring R0..R5; the shared edge is L1-L2 (= R5-R4), so R4 and R5 reuse the left atoms
    const L = ringAtoms(cL, -90), Rr = ringAtoms(cR, -90);
    Rr[5] = L[1]; Rr[4] = L[2]; atoms.length = Rr[3] + 1;
    const edges = [[L[0], L[1], cL], [L[1], L[2], cL], [L[2], L[3], cL], [L[3], L[4], cL], [L[4], L[5], cL], [L[5], L[0], cL],
      [Rr[0], Rr[1], cR], [Rr[1], Rr[2], cR], [Rr[2], Rr[3], cR], [Rr[3], Rr[4], cR], [Rr[5], Rr[0], cR]];
    // Kekulé: L0=L5, L3=L4, L1=L2 (shared), R0=R1, R2=R3
    const dbls = new Set([[L[0], L[5]], [L[3], L[4]], [L[1], L[2]], [Rr[0], Rr[1]], [Rr[2], Rr[3]]].map(([i, j]) => `${Math.min(i, j)}-${Math.max(i, j)}`));
    for (const [i, j, c] of edges) bonds.push([i, j, !circle && dbls.has(`${Math.min(i, j)}-${Math.max(i, j)}`) ? 2 : 1, c]);
    ringList.push(cL, cR);
  } else {
    m.rings.forEach((r, ri) => {
      const idx = ringAtoms([r.c[0] * R, r.c[1] * R], r.a0);
      for (let i = 0; i < 6; i++) bonds.push([idx[i], idx[(i + 1) % 6], !circle && i % 2 === 0 ? 2 : 1, [r.c[0] * R, r.c[1] * R]]);
      ringList.push([r.c[0] * R, r.c[1] * R]); r.idx = idx; void ri;
    });
    if (m.link) bonds.push([m.rings[0].idx[m.link[0][1]], m.rings[1].idx[m.link[1][1]], 1, null]);
  }
  // substituents on the first ring (vertex k at -90 + 60k degrees, clockwise)
  const labels = [];
  const ring0 = m.fused ? null : m.rings[0];
  for (const [k, sub0] of Object.entries(m.subs || {})) {
    const i = ring0.idx[Number(k)], p = atoms[i], ang = -90 + 60 * Number(k);
    if (typeof sub0 === 'string') {
      const dir = [Math.cos(rad(ang)), Math.sin(rad(ang))], end = add(p, mul(dir, R));
      const left = Math.cos(rad(ang)) < -0.1, right = Math.cos(rad(ang)) > 0.1, text = left ? (MIRROR[sub0] || sub0) : sub0;
      bonds.push([i, atoms.push(end) - 1, 1, null, true]);
      labels.push([chemTex(text), left ? [end[0] - 4, end[1]] : right ? [end[0] + 4, end[1]] : add(end, mul(dir, 13)), left ? 'r' : right ? 'l' : 'c']);
    } else {
      let cur = i, a = p;
      for (const [da, order] of sub0.chain) { const e = add(a, [R * Math.cos(rad(da)), R * Math.sin(rad(da))]); const j = atoms.push(e) - 1; bonds.push([cur, j, order, null]); cur = j; a = e; }
    }
  }
  const pad = 30, xsAll = atoms.map((a) => a[0]), ysAll = atoms.map((a) => a[1]);
  const lab = labels.map(([, p, an]) => [p[0] - (an === 'r' ? 40 : 0), p[0] + (an === 'l' ? 40 : an === 'c' ? 14 : 0)]).flat();
  const minx = Math.min(...xsAll, ...lab) - pad, maxx = Math.max(...xsAll, ...lab) + pad, miny = Math.min(...ysAll) - pad, maxy = Math.max(...ysAll) + pad;
  const nameH = o.showName !== false ? 40 : 0, W = Math.max(210, maxx - minx, o.showName !== false ? (m.name.length + m.f.replace(/[_{}]/g, '').length) * 9 + 50 : 0), H = maxy - miny + nameH;
  const ox = W / 2 - (minx + maxx) / 2, oy = -miny;
  const T = (p) => [p[0] + ox, p[1] + oy];
  for (const [i, j, order, c, labelled] of bonds) {
    let A = atoms[i], B = atoms[j];
    void labelled;
    cv.line(T(A), T(B), { w: LW, color: '#000' });
    if (order === 2 && c) {
      const d = unit(sub(B, A)), n = [-d[1], d[0]], ctr = sub(c, mul(add(A, B), 0.5)), sgn = (n[0] * ctr[0] + n[1] * ctr[1]) >= 0 ? 1 : -1, L = len(sub(B, A));
      const a2 = add(add(A, mul(d, L * 0.14)), mul(n, 5.5 * sgn)), b2 = add(sub(B, mul(d, L * 0.14)), mul(n, 5.5 * sgn));
      cv.line(T(a2), T(b2), { w: LW, color: '#000' });
    } else if (order === 2) {                           // exocyclic C=C (styrene): second line to the left of travel
      const d = unit(sub(B, A)), n = [-d[1], d[0]];
      cv.line(T(add(A, mul(n, 4))), T(add(B, mul(n, 4))), { w: LW, color: '#000' });
    }
  }
  if (circle) ringList.forEach((c) => cv.circle(T(c), R * 0.62, { w: 1.6, color: '#000' }));
  labels.forEach(([tex, p, an]) => cv.label(tex, T(p), { size: 18, anchor: an }));
  if (o.showName !== false) cv.label(`\\text{${m.name}}\\ (${chemTex(m.f)})`, [W / 2, H - 18], { size: 17 });
  return frame(cv, W, H);
}

// ---------------------------------------------------------------- Bohr atom model
const ELEMENTS = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'];
const VN = ['Hiđro', 'Heli', 'Liti', 'Beri', 'Bo', 'Cacbon', 'Nitơ', 'Oxi', 'Flo', 'Neon', 'Natri', 'Magie', 'Nhôm', 'Silic', 'Photpho', 'Lưu huỳnh', 'Clo', 'Agon', 'Kali', 'Canxi'];
export const ELEMENT_CHOICES = ELEMENTS.map((s, i) => [String(i + 1), `${i + 1} – ${VN[i]} (${s})`]);
export const shells = (z) => { const out = []; for (const cap of [2, 8, 8, 2]) { if (z <= 0) break; const n = Math.min(cap, z); out.push(n); z -= n; } return out; };
export function atomModel(o = {}) {
  const z = Math.max(1, Math.min(20, Number(o.z) || 11)), sh = shells(z), cv = new Canvas();
  const R = 30 + 26 * sh.length, W = 2 * R + 60, H = 2 * R + 60 + (o.showName !== false ? 34 : 0), c = [W / 2, R + 30];
  sh.forEach((n, k) => {
    const r = 30 + 26 * (k + 1) - 6;
    cv.circle(c, r, { w: 1.2, color: '#666' });
    for (let i = 0; i < n; i++) { const t = rad(-90 + 360 * i / n + (k % 2 ? 180 / n : 0)); cv.dot([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)], 4, '#2a6fc8'); }
  });
  cv.circle(c, 17, { fill: '#f08a4b', color: '#a85a22', w: 1.4 });
  cv.label(`+${z}`, c, { size: 15 });
  if (o.showName !== false) cv.label(`\\text{${ELEMENTS[z - 1]}}:\\ ${sh.join(",")}`, [W / 2, H - 14], { size: 17 });
  return frame(cv, W, H);
}

export const CHEMISTRY = [
  { id: 'labware', label: 'Dụng cụ thí nghiệm (một dụng cụ)', make: labware, names: '', namesLabel: 'Tên ghi dưới hình (bỏ trống = tên mặc định)',
    options: [['kind', 'Dụng cụ', Object.entries(WARE).map(([k, v]) => [k, v.name])], ['liquid', 'Chất lỏng', LIQ], ['showName', 'Ghi tên dụng cụ']] },
  { id: 'setup', label: 'Bộ dụng cụ thí nghiệm', make: setup, names: '',
    options: [['kind', 'Thí nghiệm', [['gaswater', 'Điều chế khí, thu bằng đẩy nước'], ['gasair', 'Điều chế khí, thu bằng đẩy không khí'], ['filter', 'Lọc'], ['distill', 'Chưng cất']]], ['collect', 'Thu khí (đẩy không khí)', [['up', 'Ngửa bình (khí nặng hơn không khí)'], ['down', 'Úp bình (khí nhẹ hơn không khí)']]], ['showName', 'Ghi tên các dụng cụ']] },
  { id: 'molecule', label: 'Sơ đồ phân tử', make: molecule, names: '',
    options: [['kind', 'Phân tử', MOLECULE_CHOICES], ['style', 'Kiểu', [['structural', 'Công thức cấu tạo'], ['ball', 'Mô hình quả cầu – que']]], ['showName', 'Ghi công thức']] },
  { id: 'aromatic', label: 'Hợp chất thơm (vòng benzen)', make: aromatic, names: '',
    options: [['kind', 'Chất', AROMATIC_CHOICES], ['style', 'Kiểu vòng', [['kekule', 'Kekulé (3 liên kết đôi)'], ['circle', 'Vòng tròn (hệ thơm)']]], ['showName', 'Ghi tên và công thức']] },
  { id: 'atom', label: 'Mô hình nguyên tử (Bo)', make: atomModel, names: '',
    options: [['z', 'Nguyên tố (Z = 1–20)', ELEMENT_CHOICES], ['showName', 'Ghi kí hiệu và số electron mỗi lớp']] },
];
void len; void list;
