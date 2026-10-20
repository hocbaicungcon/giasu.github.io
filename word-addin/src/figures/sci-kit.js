// Shared helpers of the science figure generators (chemistry, physics, biology): a small canvas that collects scene primitives.
import { sceneToSvg } from './scene.js';

export const P = (x, y) => [x, y];
export const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
export const mul = (a, k) => [a[0] * k, a[1] * k];
export const len = (a) => Math.hypot(a[0], a[1]);
export const unit = (a) => mul(a, 1 / (len(a) || 1));
export const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
export const lerp = (a, b, t) => add(a, mul(sub(b, a), t));
export const rad = (deg) => deg * Math.PI / 180;
/** Rotate point p by deg degrees (clockwise on screen) around c. */
export const rot = (p, deg, c = [0, 0]) => { const t = rad(deg), d = sub(p, c); return [c[0] + d[0] * Math.cos(t) - d[1] * Math.sin(t), c[1] + d[0] * Math.sin(t) + d[1] * Math.cos(t)]; };
/** Points of an elliptical arc; angles in degrees, counter-clockwise on screen (y is flipped), from a0 to a1. */
export function arcPts(cx, cy, rx, ry, a0, a1, n = 24) {
  return Array.from({ length: n + 1 }, (_x, i) => { const t = rad(a0 + (a1 - a0) * i / n); return [cx + rx * Math.cos(t), cy - ry * Math.sin(t)]; });
}

export const COLORS = { water: '#8ec5f5', blue: '#6fb1ea', pink: '#f4a6c0', yellow: '#f6e27a', green: '#8fd18b', orange: '#f5a45d', red: '#e5534b', gray: '#c9ced6', glass: '#dbe9f5', wood: '#d9b27c', metal: '#9aa5b1', none: '' };

export class Canvas {
  constructor() { this.items = []; }
  line(a, b, o = {}) { this.items.push({ t: 'line', x1: a[0], y1: a[1], x2: b[0], y2: b[1], w: o.w || 1.5, dash: o.dash || '', color: o.color, arrow: o.arrow }); return this; }
  arrow(a, b, o = {}) { return this.line(a, b, { ...o, arrow: true }); }
  poly(pts, o = {}) { this.items.push({ t: 'poly', pts, closed: o.closed !== false, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.dash || '', opacity: o.opacity }); return this; }
  path(pts, o = {}) { return this.poly(pts, { ...o, closed: false }); }
  ellipse(cx, cy, rx, ry, o = {}) { this.items.push({ t: 'ellipse', cx, cy, rx, ry, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.dash || '' }); return this; }
  circle(c, r, o = {}) { return this.ellipse(c[0], c[1], r, r, o); }
  rect(x, y, w, h, o = {}) { this.items.push({ t: 'rect', x, y, w, h, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.dash || '' }); return this; }
  dot(p, r = 2.6, color) { this.items.push({ t: 'dot', x: p[0], y: p[1], r, color }); return this; }
  /** LaTeX label centred on p (anchor 'l' / 'r': p is its left / right end). */
  label(latex, p, o = {}) { this.items.push({ t: 'label', latex, x: p[0], y: p[1], size: o.size || 15, anchor: o.anchor || 'c', valign: o.valign, halo: o.halo }); return this; }
  /** Plain (Vietnamese) words as a label. */
  text(s, p, o = {}) { return this.label(`\\text{${s}}`, p, o); }
  /** A note: short leader line from `from` (on the figure) to `to`, with the words next to `to`. */
  note(s, from, to, o = {}) {
    this.line(from, to, { w: 0.9, color: '#555' });
    const side = to[0] >= from[0] ? 'l' : 'r';
    return this.text(s, [to[0] + (side === 'l' ? 4 : -4), to[1]], { size: o.size || 13, anchor: side });
  }
}

export function frame(c, W, H) {
  const scene = { width: W, height: H, items: c.items };
  return { scene, svg: sceneToSvg(scene), width: W, height: H };
}

/** Parse "a, b ; c" into a list. */
export const list = (s, fallback = []) => { const l = String(s ?? '').split(/[,;\n]+/).map((x) => x.trim()).filter(Boolean); return l.length ? l : fallback; };
export const clamp = (v, lo, hi, def) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : def; };
