// Variation table (bảng biến thiên) of y = f(x), in the Vietnamese textbook layout, drawn as SVG.
import { compile } from './expr.js';
import { analyse, limitAtInfinity, oneSided, snap } from './analysis.js';
import { numLatex } from './svgkit.js';
import { sceneToSvg, labelBox } from './scene.js';

export function variationTable(src, { lo, hi, width = 560, label = 'y', domain = '', fontPt = 12 } = {}) {
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

  const model = {
    pts: uniq.map((p) => ({ xl: p.kind === 'inf' ? (p.x > 0 ? '+\\infty' : '-\\infty') : numLatex(p.x), kind: p.kind, undef: p.undef })),
    signs: segs.map((sg) => (sg.gap ? 0 : sg.sign)),
    vals: uniq.map((p, i) => (p.kind === 'pole' ? { l: numLatex(valueAt(p, -1)), r: numLatex(valueAt(p, 1)) } : { v: numLatex(valueAt(p, i === 0 ? 1 : -1)) })),
  };
  const out = layoutVariation(model, { width, label, domain, fontPt });
  return { ...out, data: { points: uniq.map((p) => ({ x: p.x, kind: p.kind })), signs: segs.map((sg) => sg.sign), poles: info.poles, crit: info.crit } };
}

/** y' label for a given function label: y -> y', f(x) -> f'(x). */
const primeLabel = (l) => (/^[A-Za-z]\(x\)$/.test(l) ? `${l[0]}'(x)` : `${l}'`);

/**
 * Lay out a variation table. model: {pts:[{xl (latex), kind:'inf'|'crit'|'pole'|'edge', undef, zero}], signs:[+1|-1|0 per gap], vals:[{v}|{l,r} per point]}
 * fontPt: size of the surrounding text; every label is drawn at that size (1 pt = 4/3 px).
 */
export function layoutVariation(model, { width = 560, label = 'y', domain = '', fontPt = 12 } = {}) {
  const { pts: uniq, signs } = model;
  const segs = signs.map((sign) => ({ gap: sign === 0, sign }));
  const fs = fontPt / 0.75, k = fs / 16;
  const W = width, labelW = 70 * k, rowH = [36 * k, 36 * k, 104 * k], top = 4;
  const H = top + rowH[0] + rowH[1] + rowH[2] + top;
  const n = uniq.length, colX = (i) => labelW + 40 * k + (W - labelW - 80 * k) * (n === 1 ? 0 : i / (n - 1));
  const L = (latex, x, y, anchor, extra = {}) => ({ t: 'label', latex, x, y, size: fs, ...(anchor ? { anchor } : {}), ...extra });
  const items = [];
  const bx = 3, by = top, bw = W - 6, bh = H - 2 * top;
  items.push({ t: 'rect', x: bx, y: by, w: bw, h: bh, sw: 1.5 });
  items.push({ t: 'line', x1: bx, y1: by + rowH[0], x2: bx + bw, y2: by + rowH[0] }, { t: 'line', x1: bx, y1: by + rowH[0] + rowH[1], x2: bx + bw, y2: by + rowH[0] + rowH[1] });
  items.push({ t: 'line', x1: bx + labelW, y1: by, x2: bx + labelW, y2: by + bh });
  const rowMid = [by + rowH[0] / 2, by + rowH[0] + rowH[1] / 2, by + rowH[0] + rowH[1] + rowH[2] / 2];
  items.push(L('x', bx + labelW / 2, rowMid[0]), L(primeLabel(label), bx + labelW / 2, rowMid[1]), L(label, bx + labelW / 2, rowMid[2]));
  const bh3 = labelBox('0', fs).h;
  const yTop = by + rowH[0] + rowH[1] + 0.34 * rowH[2] * 0.7 + bh3 / 2 - 4, yBot = by + H - top - (yTop - (by + rowH[0] + rowH[1]));
  const rowY2 = by + rowH[0] + rowH[1];
  // horizontal extent [x0, x1] of the value label drawn on one side of column i
  const spanOf = (i, text, side) => {
    const w = labelBox(text, fs).w, x = colX(i), p = uniq[i];
    if (p.kind === 'pole') return side < 0 ? [x - 9 - w, x - 9] : [x + 9, x + 9 + w];
    if (i === 0) return [x - 10, x - 10 + w];
    if (i === n - 1) return [x + 10 - w, x + 10];
    return [x - w / 2, x + w / 2];
  };
  uniq.forEach((p, i) => {
    const x = colX(i);
    items.push(L(p.xl, i === 0 ? x - 6 : i === n - 1 ? x + 6 : x, rowMid[0], i === 0 ? 'l' : i === n - 1 ? 'r' : 'c'));
    if (p.kind === 'crit') {
      if (p.undef) items.push({ t: 'line', x1: x - 2, y1: by + rowH[0], x2: x - 2, y2: rowY2 }, { t: 'line', x1: x + 2, y1: by + rowH[0], x2: x + 2, y2: rowY2 });
      else if (p.zero !== false) items.push(L('0', x, rowMid[1], 'c'));
    }
    if (p.kind === 'pole') items.push({ t: 'line', x1: x - 2, y1: by + rowH[0], x2: x - 2, y2: by + bh }, { t: 'line', x1: x + 2, y1: by + rowH[0], x2: x + 2, y2: by + bh });
    if (p.kind === 'edge') items.push({ t: 'line', x1: x, y1: by + rowH[0], x2: x, y2: by + bh });
  });
  segs.forEach((sg, i) => {   // f is not defined on the whole interval: hatch it across the y' and y rows
    if (!sg.gap) return;
    const xa = colX(i) + 3, xb = colX(i + 1) - 3, ya = by + rowH[0] + 1, yb = by + bh - 1;
    for (let c = xa - yb; c <= xb - ya; c += 5 * k + 1) {
      const x0 = Math.max(xa, ya + c), x1 = Math.min(xb, yb + c);
      if (x1 - x0 > 0.5) items.push({ t: 'line', x1: x0, y1: x0 - c, x2: x1, y2: x1 - c, w: 0.7 });
    }
  });
  segs.forEach((sg, i) => { if (!sg.gap && sg.sign) items.push(L(sg.sign > 0 ? '+' : '-', (colX(i) + colX(i + 1)) / 2, rowMid[1])); });
  const pos = segs.map((sg) => (sg.gap ? null : sg.sign > 0 ? [yBot, yTop] : [yTop, yBot]));
  const lab = (i) => model.vals[i];
  const out = [];   // per column: text placed at the end of the arrow arriving (in) and leaving (out)
  uniq.forEach((p, i) => {
    const x = colX(i), v = lab(i);
    const inY = i > 0 && pos[i - 1] ? pos[i - 1][1] : null, outY = i < segs.length && pos[i] ? pos[i][0] : null;
    const tIn = v.v ?? v.l ?? v.r, tOut = v.v ?? v.r ?? v.l;
    if (p.kind === 'pole') {
      if (inY !== null && v.l) { items.push(L(v.l, x - 9, inY, 'r')); out[i] = { ...out[i], in: spanOf(i, v.l, -1) }; }
      if (outY !== null && v.r) { items.push(L(v.r, x + 9, outY, 'l')); out[i] = { ...out[i], out: spanOf(i, v.r, 1) }; }
    } else {
      const y = inY ?? outY;
      if (y === null) return;
      items.push(L(tIn, i === 0 ? x - 10 : i === n - 1 ? x + 10 : x, y, i === 0 ? 'l' : i === n - 1 ? 'r' : 'c'));
      out[i] = { in: spanOf(i, tIn, -1), out: spanOf(i, tIn, 1) };
    }
  });
  const gapX = 7 * k;   // arrows start/end level with the middle of each value, just beside it
  segs.forEach((sg, i) => {
    if (!pos[i] || !out[i]?.out || !out[i + 1]?.in) return;
    const x1 = out[i].out[1] + gapX, x2 = out[i + 1].in[0] - gapX;
    const y1 = pos[i][0], y2 = pos[i][1];
    if (x2 - x1 > 10) items.push({ t: 'line', x1, y1, x2, y2, w: 1.1, arrow: true });
  });
  if (domain) items.push({ t: 'text', s: domain, x: W / 2, y: H + 14, size: fs * 0.85, anchor: 'c' });
  const scene = { width: W, height: H + (domain ? 20 : 0), items };
  return { scene, svg: sceneToSvg(scene), width: scene.width, height: scene.height };
}

const INF = /^([+\-−]?)(inf|infty|infinity|∞|\\infty)$/i;
const SIGN = { '+': 1, '-': -1, '−': -1, '↗': 1, '↘': -1, '//': 0, x: 0, X: 0, '#': 0 };   // 0: f is not defined on the interval
/** Hand-drawn table from three typed rows (whitespace separated tokens). */
export function manualVariationTable({ x = '', dy = '', y = '', label = 'f(x)', domain = '', width = 560, fontPt = 12 } = {}) {
  const tok = (s) => String(s).trim().split(/\s+/).filter(Boolean);
  const xs = tok(x), ds = tok(dy), ys = tok(y), n = xs.length;
  if (n < 2) throw new Error('Dòng x cần ít nhất 2 giá trị (vd. -inf 1 +inf).');
  const num = (t) => { const m = INF.exec(t); return m ? `${m[1] === '-' || m[1] === '−' ? '-' : '+'}\\infty` : t.replace(/^\+(?=\d)/, ''); };
  let signs, marks = new Array(n).fill('');
  if (ds.length === 2 * n - 3) { signs = ds.filter((_, i) => i % 2 === 0); ds.forEach((t, i) => { if (i % 2) marks[(i - 1) / 2 + 1] = t; }); } else if (ds.length === n - 1) signs = ds;
  else throw new Error(`Dòng y' cần ${n - 1} dấu (+/−) hoặc ${2 * n - 3} ký hiệu xen kẽ dấu và 0 / || (đang có ${ds.length}).`);
  if (signs.some((t) => !(t in SIGN))) throw new Error("Dòng y': dấu mỗi khoảng chỉ là +, - hoặc // (hàm không xác định).");
  if (ys.length !== n) throw new Error(`Dòng y cần đúng ${n} giá trị, ứng với từng cột x (đang có ${ys.length}). Điểm gián đoạn viết dạng trái|phải, vd. -inf|+inf.`);
  const pts = xs.map((t, i) => {
    const isInf = INF.test(t), pole = marks[i] === '||' || ys[i].includes('|');
    return { xl: num(t), kind: isInf ? 'inf' : pole ? 'pole' : 'crit', undef: marks[i] === '||' && !ys[i].includes('|') };
  });
  const vals = ys.map((t, i) => {
    if (t.includes('|')) { const [l, r] = t.split('|'); return { l: l ? num(l) : '', r: r ? num(r) : '' }; }
    return pts[i].kind === 'pole' ? { l: num(t), r: num(t) } : { v: num(t) };
  });
  pts.forEach((p, i) => { if (marks[i] === '0' && p.kind !== 'pole' && p.kind !== 'inf') p.kind = 'crit'; });
  // marks '0' draw the zero; a plain crit point without '0' gets no zero label
  pts.forEach((p, i) => { p.zero = marks[i] === '0'; });
  const out = layoutVariation({ pts, signs: signs.map((t) => SIGN[t]), vals }, { width, label, domain, fontPt });
  return out;
}
