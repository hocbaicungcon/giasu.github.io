// Solution region (miền nghiệm) of a system of linear inequalities in x, y.
import { compile } from './expr.js';
import { niceStep, numLatex } from './svgkit.js';
import { sceneToSvg, labelBox } from './scene.js';
import { snap } from './analysis.js';

const REL = /(<=|>=|≤|≥|=<|=>|<|>|=)/;

export function parseInequality(src) {
  const m = REL.exec(src.replace(/\s+/g, ''));
  if (!m) throw new Error(`Thiếu dấu so sánh trong “${src}”`);
  const clean = src.replace(/\s+/g, '');
  const [l, r] = [clean.slice(0, m.index), clean.slice(m.index + m[0].length)];
  const rel = { '<=': '≤', '=<': '≤', '≤': '≤', '>=': '≥', '=>': '≥', '≥': '≥', '<': '<', '>': '>', '=': '=' }[m[0]];
  const gl = compile(l || '0', ['x', 'y']), gr = compile(r || '0', ['x', 'y']);
  const g = (x, y) => gl(x, y) - gr(x, y);
  const c = g(0, 0), a = g(1, 0) - c, b = g(0, 1) - c;
  for (const [x, y] of [[2, 3], [-1.5, 4], [5, -2]]) if (Math.abs(g(x, y) - (a * x + b * y + c)) > 1e-6) throw new Error(`“${src}” không phải bất phương trình bậc nhất hai ẩn`);
  if (Math.abs(a) < 1e-12 && Math.abs(b) < 1e-12) throw new Error(`“${src}” không chứa x, y`);
  return { a: snap(a), b: snap(b), c: snap(c), rel, src };
}

function clip(poly, h) {   // keep a*x+b*y+c  <=0 (sign=-1) or >=0 (sign=+1)
  const keep = h.rel === '≤' || h.rel === '<' ? -1 : 1, v = ([x, y]) => keep * (h.a * x + h.b * y + h.c);
  const out = [];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i], q = poly[(i + 1) % poly.length], vp = v(p), vq = v(q);
    if (vp >= -1e-12) out.push(p);
    if ((vp > 1e-12 && vq < -1e-12) || (vp < -1e-12 && vq > 1e-12)) { const t = vp / (vp - vq); out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]); }
  }
  return out;
}

export function regionFigure(lines, opts = {}) {
  const hs = lines.filter((s) => s.trim()).map(parseInequality);
  if (!hs.length) throw new Error('Nhập ít nhất một bất phương trình');
  // window from the intersections of the boundary lines and the axes
  const pts = [[0, 0]];
  const all = [...hs, { a: 1, b: 0, c: 0 }, { a: 0, b: 1, c: 0 }];
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
    const d = all[i].a * all[j].b - all[j].a * all[i].b;
    if (Math.abs(d) > 1e-12) pts.push([(all[i].b * all[j].c - all[j].b * all[i].c) / d, (all[j].a * all[i].c - all[i].a * all[j].c) / d]);
  }
  for (const h of hs) { if (Math.abs(h.a) > 1e-12) pts.push([-h.c / h.a, 0]); if (Math.abs(h.b) > 1e-12) pts.push([0, -h.c / h.b]); }
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  let xmin = opts.xmin ?? Math.min(...xs), xmax = opts.xmax ?? Math.max(...xs), ymin = opts.ymin ?? Math.min(...ys), ymax = opts.ymax ?? Math.max(...ys);
  if (opts.xmin === undefined) { const pad = Math.max(1, (xmax - xmin) * 0.25); xmin -= pad; xmax += pad; }
  if (opts.ymin === undefined) { const pad = Math.max(1, (ymax - ymin) * 0.25); ymin -= pad; ymax += pad; }
  const W = opts.width || 420, H = opts.height || 340, padL = 34, padR = 22, padT = 16, padB = 26;
  const px = (x) => padL + (x - xmin) / (xmax - xmin) * (W - padL - padR), py = (y) => H - padB - (y - ymin) / (ymax - ymin) * (H - padT - padB);
  let poly = [[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax]];
  for (const h of hs) if (h.rel !== '=') poly = clip(poly, h);
  const items = [];
  const gx = niceStep(xmax - xmin, 9), gy = niceStep(ymax - ymin, 7);
  if (opts.grid !== false) {
    for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) items.push({ t: 'line', x1: px(x), y1: py(ymin), x2: px(x), y2: py(ymax), w: 0.5, color: '#dcdcdc' });
    for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) items.push({ t: 'line', x1: px(xmin), y1: py(y), x2: px(xmax), y2: py(y), w: 0.5, color: '#dcdcdc' });
  }
  // the region: shaded, or hatch the rejected part (textbook style)
  const mode = opts.mode || 'hatch';
  if (poly.length >= 3 && mode !== 'hatch') items.push({ t: 'poly', pts: poly.map((p) => [px(p[0]), py(p[1])]), closed: true, fill: '#9ec9f5', sw: 0.1, color: '#9ec9f5', opacity: 0.55 });
  if (mode === 'hatch') {
    const step = 9, hatchColor = '#8a8a8a';
    const full = [[padL, padT], [W - padR, padT], [W - padR, H - padB], [padL, H - padB]];
    const inner = poly.length >= 3 ? poly.map((p) => [px(p[0]), py(p[1])]) : [];
    for (let c = -(H); c < W + H; c += step) {   // lines x + y = c in pixel space, 45 degrees
      const seg = clipLineToRect(c, full);
      if (!seg) continue;
      const inside = inner.length ? clipLineToConvex(seg, inner) : null;
      if (!inside) items.push({ t: 'line', x1: seg[0][0], y1: seg[0][1], x2: seg[1][0], y2: seg[1][1], w: 0.6, color: hatchColor });
      else {
        if (dist(seg[0], inside[0]) > 1) items.push({ t: 'line', x1: seg[0][0], y1: seg[0][1], x2: inside[0][0], y2: inside[0][1], w: 0.6, color: hatchColor });
        if (dist(inside[1], seg[1]) > 1) items.push({ t: 'line', x1: inside[1][0], y1: inside[1][1], x2: seg[1][0], y2: seg[1][1], w: 0.6, color: hatchColor });
      }
    }
  }
  const ax = xmin <= 0 && xmax >= 0 ? px(0) : px(xmin), ay = ymin <= 0 && ymax >= 0 ? py(0) : py(ymin);
  const boxes = [];   // label boxes already on the figure, so new labels can avoid them
  const claim = (latex, x, y, anchor, size) => { const b = labelBox(latex, size); const left = anchor === 'l' ? x : anchor === 'r' ? x - b.w : x - b.w / 2; boxes.push([left - 2, y - b.h / 2 - 2, left + b.w + 2, y + b.h / 2 + 2]); };
  items.push({ t: 'line', x1: px(xmin) - 4, y1: ay, x2: px(xmax) + 8, y2: ay, w: 1.3, arrow: true }, { t: 'line', x1: ax, y1: py(ymin) + 4, x2: ax, y2: py(ymax) - 8, w: 1.3, arrow: true });
  items.push({ t: 'label', latex: 'x', x: px(xmax) + 6, y: ay + 14, size: 15 }, { t: 'label', latex: 'y', x: ax + 12, y: py(ymax) - 6, size: 15 }, { t: 'label', latex: 'O', x: ax - 9, y: ay + 12, size: 14 });
  if (poly.some((p) => Math.abs(p[0]) < 1e-9 && Math.abs(p[1]) < 1e-9)) items.pop();   // the vertex label already says (0; 0)
  for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) { const v = snap(Math.round(x * 1e6) / 1e6); if (Math.abs(v) < 1e-9) continue; items.push({ t: 'line', x1: px(v), y1: ay - 3, x2: px(v), y2: ay + 3, w: 1 }, { t: 'label', latex: numLatex(v), x: px(v), y: ay + 15, size: 12 }); claim(numLatex(v), px(v), ay + 15, 'c', 12); }
  for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) { const v = snap(Math.round(y * 1e6) / 1e6); if (Math.abs(v) < 1e-9) continue; items.push({ t: 'line', x1: ax - 3, y1: py(v), x2: ax + 3, y2: py(v), w: 1 }, { t: 'label', latex: numLatex(v), x: ax - 7, y: py(v), size: 12, anchor: 'r' }); claim(numLatex(v), ax - 7, py(v), 'r', 12); }
  // boundary lines
  hs.forEach((h, i) => {
    const ends = [];
    if (Math.abs(h.b) > 1e-12) { ends.push([xmin, -(h.a * xmin + h.c) / h.b], [xmax, -(h.a * xmax + h.c) / h.b]); } else ends.push([-h.c / h.a, ymin], [-h.c / h.a, ymax]);
    const seg = clipLineToRect(null, [[padL, padT], [W - padR, padT], [W - padR, H - padB], [padL, H - padB]], [[px(ends[0][0]), py(ends[0][1])], [px(ends[1][0]), py(ends[1][1])]]);
    if (!seg) return;
    items.push({ t: 'line', x1: seg[0][0], y1: seg[0][1], x2: seg[1][0], y2: seg[1][1], w: 1.8, color: '#1a3d8f', dash: h.rel === '<' || h.rel === '>' ? '6 4' : '' });
    if (opts.labelLines !== false) { const lx = Math.min(W - padR - 14, Math.max(padL + 14, seg[1][0] - 4)), ly = Math.min(H - padB - 10, Math.max(padT + 12, seg[1][1] - 12)); items.push({ t: 'label', latex: `(d_{${i + 1}})`, x: lx, y: ly, size: 13, anchor: 'r', halo: true }); claim(`(d_{${i + 1}})`, lx, ly, 'r', 13); }
  });
  // vertices of the region: a dot, its letter and coordinates, placed where nothing else is
  if (poly.length >= 3 && opts.vertices !== false) {
    const names = opts.names || 'ABCDEFGH'.split('');
    let k = 0;
    const cx = poly.reduce((s2, q) => s2 + q[0], 0) / poly.length, cy = poly.reduce((s2, q) => s2 + q[1], 0) / poly.length;
    const segs = items.filter((it) => it.t === 'line' && it.w >= 1.5);
    const hits = (b2) => boxes.some((o) => !(b2[2] < o[0] || b2[0] > o[2] || b2[3] < o[1] || b2[1] > o[3]));
    const nearLine = (b2) => segs.some((l) => { for (let t = 0; t <= 1; t += 0.1) { const x = l.x1 + (l.x2 - l.x1) * t, y = l.y1 + (l.y2 - l.y1) * t; if (x > b2[0] && x < b2[2] && y > b2[1] && y < b2[3]) return true; } return false; });
    const verts = [];
    for (const q of poly) {
      const onLines = hs.filter((h) => Math.abs(h.a * q[0] + h.b * q[1] + h.c) < 1e-6 * Math.max(1, Math.abs(h.c))).length;
      const onWindow = Math.abs(q[0] - xmin) < 1e-9 || Math.abs(q[0] - xmax) < 1e-9 || Math.abs(q[1] - ymin) < 1e-9 || Math.abs(q[1] - ymax) < 1e-9;
      if ((onLines < 2 && onWindow) || onLines < 1) continue;
      verts.push(q);
    }
    for (const q of verts) {
      const name = names[k++ % names.length], text = `${name}(${numLatex(snap(q[0]))};${numLatex(snap(q[1]))})`, size = 12;
      items.push({ t: 'dot', x: px(q[0]), y: py(q[1]), r: 3 });
      const bx = labelBox(text, size);
      const away = [px(q[0]) - px(cx), py(q[1]) - py(cy)];
      const base = Math.atan2(away[1], away[0]);
      let best = null;
      for (const turn of [0, 0.5, -0.5, 1, -1, 1.6, -1.6, 2.4, -2.4, Math.PI]) {
        const ang = base + turn, dist = 10 + (Math.abs(turn) > 2 ? 6 : 0);
        const cxp = px(q[0]) + Math.cos(ang) * dist, cyp = py(q[1]) + Math.sin(ang) * dist;
        const anchor = Math.cos(ang) > 0.35 ? 'l' : Math.cos(ang) < -0.35 ? 'r' : 'c';
        const left = anchor === 'l' ? cxp : anchor === 'r' ? cxp - bx.w : cxp - bx.w / 2;
        const top = Math.sin(ang) >= 0 ? cyp : cyp - bx.h;
        const box = [left - 2, top - 2, left + bx.w + 2, top + bx.h + 2];
        const inside = box[0] >= padL - 6 && box[2] <= W - padR + 14 && box[1] >= padT - 8 && box[3] <= H - padB + 14;
        if (inside && !hits(box) && !nearLine(box)) { best = { box, x: anchor === 'l' ? cxp : anchor === 'r' ? cxp : cxp, y: top + bx.h / 2, anchor }; break; }
        if (!best && inside && !hits(box)) best = { box, x: cxp, y: top + bx.h / 2, anchor };
      }
      if (!best) { const ang = base, cxp = px(q[0]) + Math.cos(ang) * 12, cyp = py(q[1]) + Math.sin(ang) * 12; best = { box: [cxp, cyp, cxp + bx.w, cyp + bx.h], x: cxp, y: cyp, anchor: Math.cos(ang) > 0 ? 'l' : 'r' }; }
      boxes.push(best.box);
      items.push({ t: 'label', latex: text, x: best.x, y: best.y, size, anchor: best.anchor, halo: true });
    }
  }
  const scene = { width: W, height: H, items };
  return { scene, svg: sceneToSvg(scene), width: W, height: H, polygon: poly, empty: poly.length < 3, constraints: hs };
}

const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);

function clipLineToRect(c, rect, given) {   // the part of line x+y=c (or of the given segment's line) inside the rectangle
  const [x0, y0] = rect[0], [x1, y1] = rect[2];
  let p, q;
  if (given) { p = given[0]; q = given[1]; } else { p = [c - y0, y0]; q = [c - y1, y1]; }
  let t0 = -1e9, t1 = 1e9;
  const dx = q[0] - p[0], dy = q[1] - p[1];
  const upd = (pk, qk) => { if (Math.abs(pk) < 1e-12) return qk >= 0; const t = qk / pk; if (pk < 0) t0 = Math.max(t0, t); else t1 = Math.min(t1, t); return t0 <= t1; };
  if (!(upd(-dx, p[0] - x0) && upd(dx, x1 - p[0]) && upd(-dy, p[1] - y0) && upd(dy, y1 - p[1]))) return null;
  return [[p[0] + dx * t0, p[1] + dy * t0], [p[0] + dx * t1, p[1] + dy * t1]];
}

function clipLineToConvex(seg, poly) {   // intersection of a segment with a convex polygon (pixel space), or null
  let t0 = 0, t1 = 1;
  const d = [seg[1][0] - seg[0][0], seg[1][1] - seg[0][1]];
  const area = poly.reduce((s, p, i) => { const q = poly[(i + 1) % poly.length]; return s + (p[0] * q[1] - q[0] * p[1]); }, 0);
  const orient = area > 0 ? 1 : -1;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    const nx = -(b[1] - a[1]) * orient, ny = (b[0] - a[0]) * orient;   // inward normal
    const num = nx * (seg[0][0] - a[0]) + ny * (seg[0][1] - a[1]), den = nx * d[0] + ny * d[1];
    if (Math.abs(den) < 1e-12) { if (num < 0) return null; continue; }
    const t = -num / den;
    if (den > 0) t0 = Math.max(t0, t); else t1 = Math.min(t1, t);
    if (t0 > t1) return null;
  }
  return [[seg[0][0] + d[0] * t0, seg[0][1] + d[1] * t0], [seg[0][0] + d[0] * t1, seg[0][1] + d[1] * t1]];
}
