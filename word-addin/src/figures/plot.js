// Graph of one or several functions (đồ thị hàm số) as a scene: axes with arrows, ticks, curve pieces, asymptotes, marked points.
import { compile } from './expr.js';
import { analyse, snap } from './analysis.js';
import { niceStep, numLatex } from './svgkit.js';
import { sceneToSvg } from './scene.js';

const COLORS = ['#1a3d8f', '#c62828', '#2e7d32', '#6a1b9a'];

export function plotFunctions(exprs, opts = {}) {
  const fs = exprs.map((e) => ({ src: e, f: compile(e) }));
  const W = opts.width || 420, H = opts.height || 340, padL = 34, padR = 22, padT = 16, padB = 26;
  let { xmin, xmax, ymin, ymax } = opts;
  if (xmin === undefined || xmax === undefined) { xmin = -5; xmax = 5; }
  if (ymin === undefined || ymax === undefined) {
    const vals = [];
    for (const { f } of fs) for (let i = 0; i <= 400; i++) { const v = f(xmin + (xmax - xmin) * i / 400); if (Number.isFinite(v)) vals.push(v); }
    vals.sort((a, b) => a - b);
    if (!vals.length) { ymin = -5; ymax = 5; } else {
      const lo = vals[Math.floor(vals.length * 0.03)], hi = vals[Math.ceil(vals.length * 0.97) - 1];
      const pad = Math.max(0.5, (hi - lo) * 0.12);
      ymin = Math.min(lo - pad, -0.5); ymax = Math.max(hi + pad, 0.5);
    }
  }
  const px = (x) => padL + (x - xmin) / (xmax - xmin) * (W - padL - padR);
  const py = (y) => H - padB - (y - ymin) / (ymax - ymin) * (H - padT - padB);
  const items = [];
  const gx = niceStep(xmax - xmin, 9), gy = niceStep(ymax - ymin, 7);
  // grid
  if (opts.grid !== false) {
    for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) items.push({ t: 'line', x1: px(x), y1: py(ymin), x2: px(x), y2: py(ymax), w: 0.5, color: '#d5d5d5' });
    for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) items.push({ t: 'line', x1: px(xmin), y1: py(y), x2: px(xmax), y2: py(y), w: 0.5, color: '#d5d5d5' });
  }
  // axes (through the origin when visible, else along the border)
  const ax = xmin <= 0 && xmax >= 0 ? px(0) : px(xmin), ay = ymin <= 0 && ymax >= 0 ? py(0) : py(ymin);
  items.push({ t: 'line', x1: px(xmin) - 4, y1: ay, x2: px(xmax) + 8, y2: ay, w: 1.3, arrow: true }, { t: 'line', x1: ax, y1: py(ymin) + 4, x2: ax, y2: py(ymax) - 8, w: 1.3, arrow: true });
  items.push({ t: 'label', latex: 'x', x: px(xmax) + 6, y: ay + 14, size: 15 }, { t: 'label', latex: 'y', x: ax + 12, y: py(ymax) - 6, size: 15 }, { t: 'label', latex: 'O', x: ax - 9, y: ay + 12, size: 14 });
  for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) { const v = snap(Math.round(x * 1e6) / 1e6); if (Math.abs(v) < 1e-9) continue; items.push({ t: 'line', x1: px(v), y1: ay - 3, x2: px(v), y2: ay + 3, w: 1 }, { t: 'label', latex: numLatex(v), x: px(v), y: ay + 15, size: 12 }); }
  for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) { const v = snap(Math.round(y * 1e6) / 1e6); if (Math.abs(v) < 1e-9) continue; items.push({ t: 'line', x1: ax - 3, y1: py(v), x2: ax + 3, y2: py(v), w: 1 }, { t: 'label', latex: numLatex(v), x: ax - 7, y: py(v), size: 12, anchor: 'r' }); }
  // curves, cut at the window border and broken at discontinuities
  fs.forEach(({ f, src }, k) => {
    let seg = [];
    const flush = () => { if (seg.length > 1) items.push({ t: 'poly', pts: seg, sw: 1.8, color: COLORS[k % COLORS.length] }); seg = []; };
    const N = 2400, inside = (y) => Number.isFinite(y) && y >= ymin && y <= ymax;
    let px0 = null, py0 = null;
    for (let i = 0; i <= N; i++) {
      const x = xmin + (xmax - xmin) * i / N, y = f(x);
      const jump = Number.isFinite(y) && Number.isFinite(py0) && Math.abs(y - py0) > (ymax - ymin) * 0.9 && Math.sign(y) !== Math.sign(py0);
      if (!Number.isFinite(y) || jump) { if (inside(py0) === false && Number.isFinite(py0)) { /* already cut */ } flush(); px0 = x; py0 = Number.isFinite(y) ? y : NaN; if (!Number.isFinite(y)) continue; }
      if (inside(y)) {
        if (px0 !== null && Number.isFinite(py0) && !inside(py0) && !jump && !seg.length) { const edge = py0 > ymax ? ymax : ymin, t = (edge - py0) / (y - py0); seg.push([px(px0 + (x - px0) * t), py(edge)]); }
        seg.push([px(x), py(y)]);
      } else if (seg.length && Number.isFinite(y)) {   // leaving the window: finish exactly on the border
        const edge = y > ymax ? ymax : ymin, t = (edge - py0) / (y - py0);
        seg.push([px(px0 + (x - px0) * t), py(edge)]);
        flush();
      }
      px0 = x; py0 = y;
    }
    flush();
    if (opts.legend && fs.length > 1) items.push({ t: 'label', latex: `y=${String(src).replace(/^\s*(?:y|f\s*\(\s*x\s*\))\s*=/, '')}`, x: padL + 8, y: padT + 10 + k * 18, size: 12, anchor: 'l' });
  });
  // asymptotes and special points of the first function
  const { f } = fs[0];
  const info = analyse(f, { lo: xmin, hi: xmax, samples: 3000 });
  if (opts.asymptotes !== false) for (const p of info.poles) items.push({ t: 'line', x1: px(p), y1: py(ymin), x2: px(p), y2: py(ymax), w: 1, dash: '5 4', color: '#777' });
  if (opts.points) {
    for (const c of info.crit) { const y = f(c.x); if (Number.isFinite(y) && y >= ymin && y <= ymax) items.push({ t: 'dot', x: px(c.x), y: py(y), r: 3 }, { t: 'line', x1: px(c.x), y1: py(y), x2: px(c.x), y2: ay, w: 0.8, dash: '3 3', color: '#666' }, { t: 'label', latex: `(${numLatex(c.x)};${numLatex(snap(y))})`, x: px(c.x) + 6, y: py(y) - 10, size: 12, anchor: 'l' }); }
    const y0 = f(0); if (Number.isFinite(y0) && xmin < 0 && xmax > 0 && y0 >= ymin && y0 <= ymax && Math.abs(y0) > 1e-9) items.push({ t: 'dot', x: px(0), y: py(y0), r: 3 });
  }
  const scene = { width: W, height: H, items };
  return { scene, svg: sceneToSvg(scene), width: W, height: H, window: { xmin, xmax, ymin, ymax } };
}

export const PRESETS = [
  { id: 'lin', label: 'Bậc nhất  y = ax + b', expr: '2x-1', win: [-4, 4, -5, 5] },
  { id: 'quad', label: 'Bậc hai  y = ax² + bx + c', expr: 'x^2-2x-3', win: [-3, 5, -5, 4] },
  { id: 'cubic', label: 'Bậc ba  y = ax³ + bx² + cx + d', expr: 'x^3-3x+1', win: [-3, 3, -3, 5] },
  { id: 'quartic', label: 'Trùng phương  y = ax⁴ + bx² + c', expr: 'x^4-2x^2-1', win: [-2.5, 2.5, -3, 3] },
  { id: 'frac1', label: 'Phân thức  y = (ax + b)/(cx + d)', expr: '(2x+1)/(x-1)', win: [-4, 6, -4, 6] },
  { id: 'frac2', label: 'Phân thức  y = (ax² + bx + c)/(dx + e)', expr: '(x^2-x+1)/(x-1)', win: [-4, 6, -6, 8] },
  { id: 'sqrt', label: 'Căn thức  y = √x', expr: 'sqrt(x)', win: [-1, 9, -1, 4] },
  { id: 'abs', label: 'Giá trị tuyệt đối  y = |x|', expr: 'abs(x-1)', win: [-3, 5, -1, 5] },
  { id: 'exp', label: 'Mũ  y = aˣ', expr: '2^x', win: [-4, 4, -1, 8] },
  { id: 'log', label: 'Logarit  y = log₂ x', expr: 'log2(x)', win: [-1, 8, -4, 4] },
  { id: 'sin', label: 'Lượng giác  y = sin x', expr: 'sin(x)', win: [-7, 7, -2, 2] },
  { id: 'cos', label: 'Lượng giác  y = cos x', expr: 'cos(x)', win: [-7, 7, -2, 2] },
  { id: 'tan', label: 'Lượng giác  y = tan x', expr: 'tan(x)', win: [-5, 5, -4, 4] },
];
