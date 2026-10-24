// Numeric analysis of a one-variable function: domain pieces, poles, critical points, limits (for the variation table and graphs).
import { fmtNum } from './svgkit.js';

const finite = (v) => Number.isFinite(v);
const sgn = (v) => (v > 0 ? 1 : v < 0 ? -1 : 0);

function bisect(pred, a, b, iterations = 80) {   // pred(a) !== pred(b); returns the switching point
  let lo = a, hi = b;
  const pa = pred(lo);
  for (let i = 0; i < iterations; i++) { const mid = (lo + hi) / 2; if (pred(mid) === pa) lo = mid; else hi = mid; }
  return (lo + hi) / 2;
}

/** Snap a numeric value to a "nice" one (integers, simple fractions, square roots) when it is within tolerance. */
export function snap(v) {
  if (!finite(v)) return v;
  if (Math.abs(v) < 1e-7) return 0;
  const tol = 1e-6 * Math.max(1, Math.abs(v));
  if (Math.abs(v - Math.round(v)) < tol) return Math.round(v);
  for (let q = 2; q <= 12; q++) { const p = Math.round(v * q); if (Math.abs(v - p / q) < tol) return p / q; }
  const sq = v * v;
  for (let k = 1; k <= 3; k++) { const r = sq / (k * k); if (Math.abs(r - Math.round(r)) < 1e-5 * Math.max(1, r) && Math.round(r) > 0 && Math.round(r) <= 400) return Math.sign(v) * k * Math.sqrt(Math.round(r)); }
  return v;
}

export function analyse(f, { lo = -60, hi = 60, samples = 6000 } = {}) {
  const dx = (hi - lo) / samples;
  const xs = Array.from({ length: samples + 1 }, (_x, i) => lo + i * dx);
  const ys = xs.map((x) => { try { return f(x); } catch { return NaN; } });
  const d = (x) => { const h = 1e-6 * Math.max(1, Math.abs(x)); return (f(x + h) - f(x - h)) / (2 * h); };

  // 1. domain pieces (runs of finite values) and their open/closed ends
  const edges = [];
  for (let i = 0; i < xs.length - 1; i++) {
    const a = finite(ys[i]), b = finite(ys[i + 1]);
    if (a !== b) { const t = bisect((x) => finite(f(x)), a ? xs[i] : xs[i + 1], a ? xs[i + 1] : xs[i]); edges.push({ x: snap(t), side: a ? 'right-end' : 'left-start' }); }
  }
  // 2. poles: points inside the domain where |f| blows up
  const poles = [];
  for (let i = 1; i < xs.length - 1; i++) {
    if (!finite(ys[i]) || !finite(ys[i - 1]) || !finite(ys[i + 1])) continue;
    const a = Math.abs(ys[i - 1]), b = Math.abs(ys[i]), c = Math.abs(ys[i + 1]);
    if (b > a && b >= c && b > 200 && (a < b * 0.98 || c < b * 0.98)) {
      let l = xs[i - 1], r = xs[i + 1];
      for (let k = 0; k < 90; k++) { const m1 = l + (r - l) / 3, m2 = r - (r - l) / 3; if (Math.abs(f(m1)) < Math.abs(f(m2))) l = m1; else r = m2; }
      const p = (l + r) / 2;
      if (Math.abs(f(p)) > 1e5 || !finite(f(p))) poles.push(snap(p));
    }
  }
  // 3. critical points: sign changes of f'
  const crit = [];
  const dsign = (x) => { const v = d(x); return finite(v) ? sgn(Math.abs(v) < 1e-9 ? 0 : v) : 0; };
  let prevS = 0, prevX = null;
  for (let i = 0; i < xs.length; i++) {
    if (!finite(ys[i])) { prevS = 0; prevX = null; continue; }
    const s = dsign(xs[i]);
    if (s !== 0 && prevS !== 0 && s !== prevS && prevX !== null) {
      const t = bisect((x) => dsign(x) > 0, prevX, xs[i]);
      const near = poles.some((p) => Math.abs(p - t) < 1e-3);
      if (!near && !crit.some((c) => Math.abs(c.x - t) < 1e-4)) {
        const left = d(t - 1e-4 * Math.max(1, Math.abs(t))), right = d(t + 1e-4 * Math.max(1, Math.abs(t)));
        crit.push({ x: snap(t), undefinedDerivative: Math.abs(left) > 1e-2 && Math.abs(right) > 1e-2 });
      }
    }
    if (s !== 0) { prevS = s; prevX = xs[i]; }
  }
  // a right-end and a left-start at the same x: f is undefined at that single point -> a pole (or a hole)
  const lone = [];
  for (const e of edges) {
    const mate = lone.findIndex((o) => Math.abs(o.x - e.x) < 1e-5 && o.side !== e.side);
    if (mate >= 0) { poles.push(lone[mate].x); lone.splice(mate, 1); } else lone.push(e);
  }
  const uniquePoles = [...new Set(poles.map((p) => Math.round(p * 1e6) / 1e6))].sort((a, b) => a - b);
  return { f, d, lo, hi, edges: lone, poles: uniquePoles, crit: crit.filter((c) => !uniquePoles.some((p) => Math.abs(p - c.x) < 1e-4)).sort((a, b) => a.x - b.x), ys, xs };
}

/** Limit of f at +∞ / -∞ ("±∞" or a number), or one-sided limits near a point. */
export function limitAtInfinity(f, sign) {
  const a = f(sign * 1e6), b = f(sign * 1e8);
  if (!finite(a) || !finite(b)) return NaN;
  if (Math.abs(a - b) < 1e-3 * Math.max(1, Math.abs(a)) && Math.abs(b) < 1e5) return snap(Math.round(b * 1e6) / 1e6);
  return Math.abs(b) > Math.abs(a) ? sgn(b) * Infinity : (Math.abs(b) > 1e5 ? sgn(b) * Infinity : snap(b));
}
export function oneSided(f, x, side) {
  const e = 1e-7 * Math.max(1, Math.abs(x));
  const v = f(x + side * e), w = f(x + side * e * 0.1);
  if (!finite(v)) return NaN;
  if (Math.abs(w) > Math.abs(v) * 5 && Math.abs(w) > 1e5) return sgn(w) * Infinity;
  return Math.abs(v) > 1e5 ? sgn(v) * Infinity : snap(Math.round(v * 1e6) / 1e6);
}

export { fmtNum };
