// Variation table (bảng biến thiên) of y = f(x), in the Vietnamese textbook layout, drawn as SVG.
import { compile } from './expr.js';
import { analyse, limitAtInfinity, oneSided, snap } from './analysis.js';
import { numLatex } from './svgkit.js';
import { sceneToSvg } from './scene.js';

export function variationTable(src, { lo, hi, width = 560, label = 'y', domain = '' } = {}) {
  const f = compile(src);
  const info = analyse(f, { lo: lo ?? -60, hi: hi ?? 60 });
  // key points left to right: left end, critical points, poles, domain edges, right end
  const pts = [];
  const leftEdge = info.edges.find((e) => e.side === 'left-start' && e.x <= (lo ?? -60) + 1e-6 + 0);
  const firstFinite = info.xs.findIndex((x, i) => Number.isFinite(info.ys[i]));
  const startsFinite = Number.isFinite(info.ys[0]), endsFinite = Number.isFinite(info.ys[info.ys.length - 1]);
  const first = startsFinite ? { x: -Infinity, kind: 'inf' } : { x: info.edges.find((e) => e.side === 'left-start')?.x ?? info.xs[firstFinite], kind: 'edge' };
  const lastEdge = [...info.edges].reverse().find((e) => e.side === 'right-end');
  const last = endsFinite ? { x: Infinity, kind: 'inf' } : { x: lastEdge ? lastEdge.x : info.xs[info.xs.length - 1], kind: 'edge' };
  void leftEdge;
  pts.push(first);
  for (const c of info.crit) pts.push({ x: c.x, kind: 'crit', undef: c.undefinedDerivative });
  for (const p of info.poles) pts.push({ x: p, kind: 'pole' });
  // a right-end and a left-start at the same x: f is undefined at one point only (a pole or a hole) -> one "pole" column
  const loneEdges = [];
  for (const e of info.edges) {
    const mate = loneEdges.find((o) => Math.abs(o.x - e.x) < 1e-5 && o.side !== e.side);
    if (mate) { mate.kind = 'pole'; continue; }
    loneEdges.push({ ...e, kind: 'edge' });
  }
  for (const e of loneEdges) if (e.x > (first.x === -Infinity ? -1e9 : first.x) + 1e-9 && e.x < (last.x === Infinity ? 1e9 : last.x) - 1e-9 && !pts.some((q) => Math.abs(q.x - e.x) < 1e-6)) pts.push({ x: e.x, kind: e.kind });
  pts.push(last);
  pts.sort((a, b) => a.x - b.x);
  const uniq = pts.filter((p, i) => i === 0 || Math.abs(p.x - pts[i - 1].x) > 1e-6 || p.x === Infinity);

  const dsgn = (a, b) => {   // sign of f' between consecutive key points
    const A = Number.isFinite(a) ? a : (Number.isFinite(b) ? b - 20 : -20), B = Number.isFinite(b) ? b : A + 20;
    const mids = [0.5, 0.3, 0.7, 0.2, 0.8].map((t) => A + (B - A) * t);
    for (const m of mids) { const v = info.d(m); if (Number.isFinite(v) && Math.abs(v) > 1e-9) return v > 0 ? 1 : -1; }
    return 0;
  };
  const gaps = (a, b) => { const m = (Number.isFinite(a) ? a : b - 2) / 2 + (Number.isFinite(b) ? b : a + 2) / 2; return !Number.isFinite(f(Number.isFinite(a) && Number.isFinite(b) ? (a + b) / 2 : m)); };
  const segs = [];
  for (let i = 0; i < uniq.length - 1; i++) segs.push({ gap: gaps(uniq[i].x, uniq[i + 1].x), sign: dsgn(uniq[i].x, uniq[i + 1].x) });
  const valueAt = (p, side) => {   // side -1: from the left, +1: from the right
    if (p.kind === 'inf') return limitAtInfinity(f, p.x > 0 ? 1 : -1);
    if (p.kind === 'pole') return oneSided(f, p.x, side);
    const v = f(p.x);
    return Number.isFinite(v) ? snap(Math.round(v * 1e9) / 1e9) : oneSided(f, p.x, side || (p === uniq[0] ? 1 : -1));
  };

  const W = width, labelW = 70, rowH = [44, 44, 150], top = 4;
  const H = top + rowH[0] + rowH[1] + rowH[2] + top;
  const n = uniq.length, colX = (i) => labelW + 36 + (W - labelW - 72) * (n === 1 ? 0 : i / (n - 1));
  const items = [];
  const bx = 3, by = top, bw = W - 6, bh = H - 2 * top;
  items.push({ t: 'rect', x: bx, y: by, w: bw, h: bh, sw: 1.5 });
  items.push({ t: 'line', x1: bx, y1: by + rowH[0], x2: bx + bw, y2: by + rowH[0] }, { t: 'line', x1: bx, y1: by + rowH[0] + rowH[1], x2: bx + bw, y2: by + rowH[0] + rowH[1] });
  items.push({ t: 'line', x1: bx + labelW, y1: by, x2: bx + labelW, y2: by + bh });
  const rowMid = [by + rowH[0] / 2, by + rowH[0] + rowH[1] / 2, by + rowH[0] + rowH[1] + rowH[2] / 2];
  items.push({ t: 'label', latex: 'x', x: bx + labelW / 2, y: rowMid[0] }, { t: 'label', latex: "y'", x: bx + labelW / 2, y: rowMid[1] }, { t: 'label', latex: label, x: bx + labelW / 2, y: rowMid[2] });
  const yTop = by + rowH[0] + rowH[1] + 34, yBot = by + H - 2 * top - 34;
  const xTex = (p) => (p.kind === 'inf' ? (p.x > 0 ? '+\\infty' : '-\\infty') : numLatex(p.x));
  uniq.forEach((p, i) => {
    const x = colX(i);
    items.push({ t: 'label', latex: xTex(p), x: i === 0 ? x - 6 : i === n - 1 ? x + 6 : x, y: rowMid[0], anchor: i === 0 ? 'l' : i === n - 1 ? 'r' : 'c' });
    if (p.kind === 'crit') {
      if (p.undef) items.push({ t: 'line', x1: x - 2, y1: by + rowH[0], x2: x - 2, y2: by + rowH[0] + rowH[1] }, { t: 'line', x1: x + 2, y1: by + rowH[0], x2: x + 2, y2: by + rowH[0] + rowH[1] });
      else items.push({ t: 'label', latex: '0', x, y: rowMid[1] });
    }
    if (p.kind === 'pole') items.push({ t: 'line', x1: x - 2, y1: by + rowH[0], x2: x - 2, y2: by + bh }, { t: 'line', x1: x + 2, y1: by + rowH[0], x2: x + 2, y2: by + bh });
    if (p.kind === 'edge') items.push({ t: 'line', x1: x, y1: by + rowH[0], x2: x, y2: by + bh });
  });
  segs.forEach((s, i) => { if (!s.gap && s.sign) items.push({ t: 'label', latex: s.sign > 0 ? '+' : '-', x: (colX(i) + colX(i + 1)) / 2, y: rowMid[1] }); });
  const pos = segs.map((s) => (s.gap ? null : s.sign > 0 ? [yBot, yTop] : [yTop, yBot]));
  const valTex = (v) => numLatex(v);
  uniq.forEach((p, i) => {
    const x = colX(i);
    const L = i > 0 && pos[i - 1] ? pos[i - 1][1] : null, R = i < segs.length && pos[i] ? pos[i][0] : null;
    const dy = (y) => (y === yTop ? -10 : 10);
    if (p.kind === 'pole') {
      if (L !== null) items.push({ t: 'label', latex: valTex(valueAt(p, -1)), x: x - 9, y: L + dy(L), anchor: 'r' });
      if (R !== null) items.push({ t: 'label', latex: valTex(valueAt(p, 1)), x: x + 9, y: R + dy(R), anchor: 'l' });
    } else {
      const y = L ?? R;
      if (y === null) return;
      items.push({ t: 'label', latex: valTex(valueAt(p, i === 0 ? 1 : -1)), x: i === 0 ? x - 10 : i === n - 1 ? x + 10 : x, y: y + dy(y), anchor: i === 0 ? 'l' : i === n - 1 ? 'r' : 'c' });
    }
  });
  segs.forEach((sg, i) => {
    if (!pos[i]) return;
    const x1 = colX(i) + (uniq[i].kind === 'pole' ? 16 : 10), x2 = colX(i + 1) - (uniq[i + 1].kind === 'pole' ? 16 : 10);
    const y1 = pos[i][0] + (pos[i][0] === yTop ? 16 : -16), y2 = pos[i][1] + (pos[i][1] === yTop ? 16 : -16);
    items.push({ t: 'line', x1, y1, x2, y2, w: 1.3, arrow: true });
  });
  if (domain) items.push({ t: 'text', s: domain, x: W / 2, y: H + 14, size: 13, anchor: 'c' });
  const scene = { width: W, height: H + (domain ? 20 : 0), items };
  return { scene, svg: sceneToSvg(scene), width: scene.width, height: scene.height, data: { points: uniq.map((p) => ({ x: p.x, kind: p.kind })), signs: segs.map((sg) => sg.sign), poles: info.poles, crit: info.crit } };
}
