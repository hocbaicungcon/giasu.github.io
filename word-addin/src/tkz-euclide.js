// tkz-euclide subset -> plain TikZ text (numeric coordinates, cm), which src/tikz.js then draws. No LaTeX needed.
// Def* / Inter* commands compute points here; Draw* / Label* / Mark* / Fill* commands become \draw / \fill / \node lines.
// Every defined point is also emitted as \coordinate so ordinary TikZ after it can use the name.
export class TkzError extends Error {}

const fmt = (x) => String(+x.toFixed(6));
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const mul = (a, k) => [a[0] * k, a[1] * k];
const len = (a) => Math.hypot(a[0], a[1]);
const unit = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l]; };
const rot = (a, deg) => { const t = deg * Math.PI / 180, c = Math.cos(t), s = Math.sin(t); return [a[0] * c - a[1] * s, a[0] * s + a[1] * c]; };
const angOf = (a) => Math.atan2(a[1], a[0]) * 180 / Math.PI;
const mid = (a, b) => mul(add(a, b), 0.5);
const pstr = (p) => `(${fmt(p[0])},${fmt(p[1])})`;
const ccw = (from, to) => { let d = (to - from) % 360; if (d < 0) d += 360; return d; };

function evalNum(t) {
  const x = String(t).replace(/cm|pt|mm/g, '').trim();
  if (!/^[-+*/().\d\s]+$/.test(x)) throw new TkzError('số ' + t);
  return Function(`return (${x})`)();
}

function splitTop(s, sep) {
  const out = []; let d = 0, cur = '';
  for (const c of s) {
    if ('{[('.includes(c)) d++; else if ('}])'.includes(c)) d--;
    if (c === sep && d === 0) { out.push(cur); cur = ''; } else cur += c;
  }
  out.push(cur);
  return out;
}
function parseOpts(str) {
  const o = {};
  for (const part of splitTop(str || '', ',')) {
    const p = part.trim();
    if (!p) continue;
    const eq = p.indexOf('=');
    if (eq < 0) o[p] = true; else o[p.slice(0, eq).trim()] = p.slice(eq + 1).trim();
  }
  return o;
}

const COLOR = /^(black|white|red|blue|green|yellow|orange|pink|gray|brown|purple|cyan|magenta)(![\d.]+(![a-z]+)?)?$/;
const LINE_KEYS = new Set(['thick', 'thin', 'very thick', 'ultra thick', 'very thin', 'ultra thin', 'dashed', 'dotted', '->', '-latex', '-stealth']);
/** tkz options -> TikZ option string for a stroked path (`stroke`) or a filled one (`fill`). */
function style(o, kind = 'stroke') {
  const out = [];
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined) continue;
    if (LINE_KEYS.has(k)) out.push(k);
    else if (k === 'line width' && v !== true) out.push(`line width=${v}`);
    else if (k === 'color' && v !== true) out.push(kind === 'fill' ? `fill=${v}` : `draw=${v}`);
    else if (k === 'fill' && v !== true) out.push(`fill=${v}`);
    else if (v === true && COLOR.test(k)) out.push(kind === 'fill' ? `fill=${k}` : `draw=${k}`);
  }
  return out.length ? `[${out.join(',')}]` : '';
}
const posOf = (o) => Object.keys(o).filter((k) => /^(above|below|left|right)( (left|right))?$/.test(k)).join(' ') || 'above';
const texName = (n) => '$' + n.replace(/_(\w)/, '_$1') + '$';

export function tkzToTikz(code) {
  const pts = new Map(), out = [];
  let bounds = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, ptDef = {}, lineDef = {};
  const P = (name) => { const p = pts.get(String(name).trim()); if (!p) throw new TkzError(`điểm ${String(name).trim()} chưa định nghĩa`); return p; };
  const list = (s) => s.split(',').map((x) => x.trim()).filter(Boolean);
  const setPt = (name, p) => { pts.set(name, p); out.push(`\\coordinate (${name}) at ${pstr(p)};`); };
  const emit = (s) => out.push(s);

  const text = String(code);
  const re = /\\tkz([A-Za-z]+)/g;
  let last = 0, m;
  const plain = (seg) => {   // text between commands: plain TikZ, but remember its \coordinate points
    out.push(seg);
    for (const c of seg.matchAll(/\\coordinate\s*(?:\[[^\]]*\])?\s*\(([^)]+)\)\s*at\s*\(([^)]*)\)/g)) { try { pts.set(c[1].trim(), parseCoord(c[2])); } catch { /* not numeric */ } }
  };
  const parseCoord = (s) => {
    if (s.includes(':') && !s.includes(',')) { const [a, r] = s.split(':'); return rot([evalNum(r), 0], evalNum(a)); }
    const xy = s.split(',');
    if (xy.length !== 2) throw new TkzError('tọa độ ' + s);
    return [evalNum(xy[0]), evalNum(xy[1])];
  };
  const group = (s, i, open, close) => { let d = 0, j = i; for (; j < s.length; j++) { if (s[j] === open) d++; else if (s[j] === close && --d === 0) break; } if (j >= s.length) throw new TkzError('thiếu dấu ' + close); return [s.slice(i + 1, j), j + 1]; };

  while ((m = re.exec(text))) {
    plain(text.slice(last, m.index));
    const cmd = m[1];
    let i = m.index + m[0].length;
    const skipWs = () => { while (/\s/.test(text[i] || '')) i++; };
    skipWs();
    let optStr = '';
    if (text[i] === '[') { let g; [g, i] = group(text, i, '[', ']'); optStr = g; }
    const args = [];
    for (;;) {
      const save = i; skipWs();
      if (text[i] === '(') { let g; [g, i] = group(text, i, '(', ')'); args.push({ p: g }); } else if (text[i] === '{') { let g; [g, i] = group(text, i, '{', '}'); args.push({ b: g }); } else { i = save; break; }
    }
    const o = parseOpts(optStr), lo = { ...lineDef, ...o };
    const a = (k) => { const x = args[k]; if (!x || x.p === undefined) throw new TkzError(`\\tkz${cmd}: thiếu đối số`); return x.p; };
    const bodyOf = (k) => { const x = args[k]; if (!x || x.b === undefined) throw new TkzError(`\\tkz${cmd}: thiếu {…}`); return x.b; };
    // the names given by a following \tkzGetPoint{M} / \tkzGetPoints{P}{Q}
    let names = [];
    const gm = /^\s*\\tkzGetPoints\s*\{([^}]*)\}\s*\{([^}]*)\}|^\s*\\tkzGetPoint\s*\{([^}]*)\}/.exec(text.slice(i));
    const wantsGet = /^(Def|Inter)/.test(cmd) && cmd !== 'DefPoint' && cmd !== 'DefPoints';
    if (wantsGet && gm) { names = gm[3] ? [gm[3].trim()] : [gm[1].trim(), gm[2].trim()]; i += gm[0].length; }
    const result = (...ps) => { names.forEach((n, k) => { if (ps[k]) setPt(n, ps[k]); }); };
    const ps = (k) => list(a(k)).map(P);

    switch (cmd) {
      case 'Init': for (const k of ['xmin', 'xmax', 'ymin', 'ymax']) if (o[k] !== undefined) bounds[k] = evalNum(o[k]); break;
      case 'Clip': case 'ShowBB': case 'SetUpCompass': case 'SetUpStyle': case 'GetPoint': case 'GetPoints': break;
      case 'SetUpPoint': ptDef = { ...ptDef, ...o }; break;
      case 'SetUpLine': lineDef = { ...lineDef, ...o }; break;
      case 'Grid': emit(`\\draw${style({ color: o.color || 'gray!40', ...o })} ${pstr([bounds.xmin, bounds.ymin])} grid ${pstr([bounds.xmax, bounds.ymax])};`); break;
      case 'AxeXY': case 'AxeX': case 'AxeY':
        if (cmd !== 'AxeY') emit(`\\draw[->] ${pstr([bounds.xmin, 0])} -- ${pstr([bounds.xmax, 0])};`);
        if (cmd !== 'AxeX') emit(`\\draw[->] ${pstr([0, bounds.ymin])} -- ${pstr([0, bounds.ymax])};`);
        break;
      case 'DefPoint': {
        const name = bodyOf(1).trim(), p = parseCoord(a(0));
        setPt(name, p);
        if (typeof o.label === 'string') { const k = o.label.indexOf(':'); emit(`\\node[${k < 0 ? 'above' : o.label.slice(0, k).trim()}] at ${pstr(p)} {${k < 0 ? o.label : o.label.slice(k + 1)}};`); }
        break;
      }
      case 'DefPoints':
        for (const t of list(bodyOf(0))) { const [x, y, n] = t.split('/'); if (n === undefined) throw new TkzError('\\tkzDefPoints: ' + t); setPt(n.trim(), [evalNum(x), evalNum(y)]); }
        break;
      case 'DefMidPoint': { const [A, B] = ps(0); result(mid(A, B)); break; }
      case 'DefPointOnLine': { const [A, B] = ps(0); result(add(A, mul(sub(B, A), o.pos !== undefined ? evalNum(o.pos) : 0.5))); break; }
      case 'DefPointWith': {
        const [A, B] = ps(0), d = sub(B, A);
        if (o.linear !== undefined || o['linear normed'] !== undefined) result(add(A, mul(d, evalNum(o.K ?? 1))));
        else if (o['colinear at']) result(add(P(o['colinear at']), d));
        else if (o.orthogonal !== undefined) result(add(A, rot(d, 90)));
        else throw new TkzError('\\tkzDefPointWith ' + optStr);
        break;
      }
      case 'DefPointBy': {
        const spec = Object.keys(o)[0] || '', val = String(o[spec]);
        const one = (X) => {
          if (spec === 'translation') { const t = /from\s+(\S+)\s+to\s+(\S+)/.exec(val); return add(X, sub(P(t[2]), P(t[1]))); }
          if (spec === 'rotation') { const t = /center\s+(\S+)\s+angle\s+(\S+)/.exec(val); const O = P(t[1]); return add(O, rot(sub(X, O), evalNum(t[2]))); }
          if (spec === 'homothety') { const t = /center\s+(\S+)\s+ratio\s+(\S+)/.exec(val); const O = P(t[1]); return add(O, mul(sub(X, O), evalNum(t[2]))); }
          if (spec === 'symmetry') { const O = P(/center\s+(\S+)/.exec(val)[1]); return sub(mul(O, 2), X); }
          if (spec === 'reflection' || spec === 'projection') {
            const t = /(?:over|onto)\s+([^-\s]+)\s*--\s*(\S+)/.exec(val); const A = P(t[1]), B = P(t[2]), u = unit(sub(B, A));
            const proj = add(A, mul(u, (X[0] - A[0]) * u[0] + (X[1] - A[1]) * u[1]));
            return spec === 'projection' ? proj : sub(mul(proj, 2), X);
          }
          throw new TkzError('\\tkzDefPointBy ' + optStr);
        };
        result(...ps(0).map(one));
        break;
      }
      case 'DefLine': {
        const [A, B] = ps(0), d = sub(B, A), key = Object.keys(o)[0] || '';
        if (key === 'mediator') { const M = mid(A, B); result(add(M, rot(d, -90)), add(M, rot(d, 90))); break; }
        if (key === 'bisector') { const [C0] = [P(list(a(0))[2])]; const u = add(unit(sub(A, B)), unit(sub(C0, B))); result(add(B, mul(unit(u), Math.min(len(sub(A, B)), len(sub(C0, B)))))); break; }
        const T = P(String(o[key]).replace(/^through\s+/, '').trim());
        if (key === 'perpendicular' || key === 'orthogonal') result(add(T, rot(d, 90)));
        else if (key === 'parallel') result(add(T, d));
        else throw new TkzError('\\tkzDefLine ' + optStr);
        break;
      }
      case 'DefParallelogram': { const [A, B, C] = ps(0); result(sub(add(A, C), B)); break; }
      case 'DefSquare': { const [A, B] = ps(0), d = rot(sub(B, A), 90); result(add(B, d), add(A, d)); break; }
      case 'DefTriangle': {
        const [A, B] = ps(0), d = sub(B, A);
        if (o.equilateral !== undefined || Object.keys(o).length === 0) result(add(A, rot(d, 60)));
        else if (o['two angles']) { const [x, y] = o['two angles'].split(/\s+and\s+/).map(evalNum), g = 180 - x - y; result(add(A, mul(rot(unit(d), x), len(d) * Math.sin(y * Math.PI / 180) / Math.sin(g * Math.PI / 180)))); }
        else throw new TkzError('\\tkzDefTriangle ' + optStr);
        break;
      }
      case 'DefTriangleCenter': {
        const [A, B, C] = ps(0), key = Object.keys(o)[0] || 'centroid';
        const circum = () => { const d = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1])); if (Math.abs(d) < 1e-9) throw new TkzError('ba điểm thẳng hàng'); const f = (P0) => P0[0] * P0[0] + P0[1] * P0[1]; return [(f(A) * (B[1] - C[1]) + f(B) * (C[1] - A[1]) + f(C) * (A[1] - B[1])) / d, (f(A) * (C[0] - B[0]) + f(B) * (A[0] - C[0]) + f(C) * (B[0] - A[0])) / d]; };
        const cen = mul(add(add(A, B), C), 1 / 3), ortho = sub(mul(cen, 3), mul(circum(), 2));
        if (key === 'centroid' || key === 'median') result(cen);
        else if (key === 'circum') result(circum());
        else if (key === 'ortho') result(ortho);
        else if (key === 'euler') result(mid(circum(), ortho));
        else if (key === 'in') { const la = len(sub(B, C)), lb = len(sub(A, C)), lc = len(sub(A, B)), s = la + lb + lc; result(mul(add(add(mul(A, la), mul(B, lb)), mul(C, lc)), 1 / s)); } else throw new TkzError('\\tkzDefTriangleCenter ' + key);
        break;
      }
      case 'DefCircle': {
        const key = Object.keys(o)[0] || '';
        if (key === 'diameter') { const [A, B] = ps(0); result(mid(A, B), A); break; }
        if (key === 'circum' || key === 'in') {
          const [A, B, C] = ps(0);
          const d = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1]));
          if (key === 'circum') { const f = (q) => q[0] * q[0] + q[1] * q[1], O = [(f(A) * (B[1] - C[1]) + f(B) * (C[1] - A[1]) + f(C) * (A[1] - B[1])) / d, (f(A) * (C[0] - B[0]) + f(B) * (A[0] - C[0]) + f(C) * (B[0] - A[0])) / d]; result(O, A); } else {
            const la = len(sub(B, C)), lb = len(sub(A, C)), lc = len(sub(A, B)), I = mul(add(add(mul(A, la), mul(B, lb)), mul(C, lc)), 1 / (la + lb + lc)), u = unit(sub(B, A));
            result(I, add(A, mul(u, (I[0] - A[0]) * u[0] + (I[1] - A[1]) * u[1])));
          }
          break;
        }
        throw new TkzError('\\tkzDefCircle ' + optStr);
      }
      case 'InterLL': {
        const [A, B] = ps(0), [C, D] = ps(1), d1 = sub(B, A), d2 = sub(D, C), den = d1[0] * d2[1] - d1[1] * d2[0];
        if (Math.abs(den) < 1e-9) throw new TkzError('hai đường thẳng song song, không có giao điểm');
        const t = ((C[0] - A[0]) * d2[1] - (C[1] - A[1]) * d2[0]) / den;
        result(add(A, mul(d1, t)));
        break;
      }
      case 'InterLC': case 'InterCC': {
        const circ = (k) => { const q = list(a(k)), O = P(q[0]); return [O, o.R !== undefined && !pts.has(q[1]) ? evalNum(q[1]) : len(sub(P(q[1]), O))]; };
        const [O1, r1] = circ(cmd === 'InterLC' ? 1 : 0);
        let res;
        if (cmd === 'InterLC') {
          const [A, B] = ps(0), u = unit(sub(B, A)), f = sub(A, O1), b = f[0] * u[0] + f[1] * u[1], c = f[0] * f[0] + f[1] * f[1] - r1 * r1, disc = b * b - c;
          if (disc < -1e-9) throw new TkzError('đường thẳng không cắt đường tròn');
          const s = Math.sqrt(Math.max(0, disc));
          res = [add(A, mul(u, -b - s)), add(A, mul(u, -b + s))];
        } else {
          const [O2, r2] = circ(1), d = len(sub(O2, O1));
          if (d > r1 + r2 + 1e-9 || d < Math.abs(r1 - r2) - 1e-9 || d < 1e-9) throw new TkzError('hai đường tròn không cắt nhau');
          const x = (d * d + r1 * r1 - r2 * r2) / (2 * d), h = Math.sqrt(Math.max(0, r1 * r1 - x * x)), u = unit(sub(O2, O1)), base = add(O1, mul(u, x));
          res = [add(base, mul(rot(u, 90), h)), add(base, mul(rot(u, -90), h))];
        }
        result(...res);
        break;
      }
      case 'DrawPoint': case 'DrawPoints': {
        const po = { ...ptDef, ...o }, col = po.fill || po.color || (COLOR.test(Object.keys(po).find((k) => COLOR.test(k)) || '') ? Object.keys(po).find((k) => COLOR.test(k)) : 'black');
        const r = 0.55 * parseFloat(po.size || 3);
        for (const p of ps(0)) emit(`\\fill[fill=${col}] ${pstr(p)} circle (${fmt(r)}pt);`);
        break;
      }
      case 'LabelPoint': { const p = ps(0)[0]; emit(`\\node[${posOf(o)}] at ${pstr(p)} {${bodyOf(1)}};`); break; }
      case 'LabelPoints': for (const n of list(a(0))) emit(`\\node[${posOf(o)}] at ${pstr(P(n))} {${texName(n)}};`); break;
      case 'AutoLabelPoints': {
        const names = list(a(0)), arr = names.map(P), c = o.center ? P(o.center) : mul(arr.reduce((s, q) => add(s, q), [0, 0]), 1 / arr.length);
        names.forEach((n, k) => { const d = sub(arr[k], c), ang = angOf(d); const h = Math.abs(d[0]) < 0.3 * len(d) ? '' : d[0] > 0 ? 'right' : 'left', v = Math.abs(d[1]) < 0.3 * len(d) ? '' : d[1] > 0 ? 'above' : 'below'; void ang; emit(`\\node[${(v + ' ' + h).trim() || 'above'}] at ${pstr(arr[k])} {${texName(n)}};`); });
        break;
      }
      case 'LabelSegment': { const [A, B] = ps(0), t = o.pos !== undefined && !isNaN(parseFloat(o.pos)) ? parseFloat(o.pos) : 0.5; emit(`\\node[${posOf(o)}] at ${pstr(add(A, mul(sub(B, A), t)))} {${bodyOf(1)}};`); break; }
      case 'DrawSegment': { const [A, B] = ps(0); emit(`\\draw${style(lo)} ${pstr(A)} -- ${pstr(B)};`); break; }
      case 'DrawSegments': for (const pair of a(0).trim().split(/\s+/)) { const [A, B] = list(pair).map(P); emit(`\\draw${style(lo)} ${pstr(A)} -- ${pstr(B)};`); } break;
      case 'DrawPolySeg': emit(`\\draw${style(lo)} ${ps(0).map(pstr).join(' -- ')};`); break;
      case 'DrawPolygon': emit(`\\draw${style(lo)} ${ps(0).map(pstr).join(' -- ')} -- cycle;`); break;
      case 'FillPolygon': emit(`\\fill${style(o, 'fill') || '[fill=gray!30]'} ${ps(0).map(pstr).join(' -- ')} -- cycle;`); break;
      case 'DrawLine': case 'DrawLines': {
        const pairs = cmd === 'DrawLine' ? [a(0)] : a(0).trim().split(/\s+/);
        for (const pair of pairs) {
          const [A, B] = list(pair).map(P);
          let s0, s1;
          if (o.add) { const [x, y] = o.add.split(/\s+and\s+/).map(evalNum); s0 = -x; s1 = 1 + y; } else {
            const all = [...pts.values()], pad = 1;
            const bx = [Math.min(...all.map((q) => q[0])) - pad, Math.max(...all.map((q) => q[0])) + pad], by = [Math.min(...all.map((q) => q[1])) - pad, Math.max(...all.map((q) => q[1])) + pad];
            const d = sub(B, A); let t0 = -1e9, t1 = 1e9;
            for (const [k, lim] of [[0, bx], [1, by]]) if (Math.abs(d[k]) > 1e-9) { const u = (lim[0] - A[k]) / d[k], v = (lim[1] - A[k]) / d[k]; t0 = Math.max(t0, Math.min(u, v)); t1 = Math.min(t1, Math.max(u, v)); }
            s0 = t0; s1 = t1;
          }
          const d = sub(B, A);
          emit(`\\draw${style(lo)} ${pstr(add(A, mul(d, s0)))} -- ${pstr(add(A, mul(d, s1)))};`);
        }
        break;
      }
      case 'DrawCircle': case 'FillCircle': {
        const q = list(a(0));
        let O, r;
        if (o.diameter !== undefined) { const [A, B] = q.map(P); O = mid(A, B); r = len(sub(A, B)) / 2; } else if (o.circum !== undefined || o.in !== undefined) {
          const [A, B, C] = q.map(P), d = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1])), f = (z) => z[0] * z[0] + z[1] * z[1];
          if (o.circum !== undefined) { O = [(f(A) * (B[1] - C[1]) + f(B) * (C[1] - A[1]) + f(C) * (A[1] - B[1])) / d, (f(A) * (C[0] - B[0]) + f(B) * (A[0] - C[0]) + f(C) * (B[0] - A[0])) / d]; r = len(sub(A, O)); } else {
            const la = len(sub(B, C)), lb = len(sub(A, C)), lc = len(sub(A, B)), s = la + lb + lc; O = mul(add(add(mul(A, la), mul(B, lb)), mul(C, lc)), 1 / s); r = Math.abs(d) / 2 / (s / 2) ;
          }
        } else { O = P(q[0]); r = o.R !== undefined ? evalNum(q[1]) : len(sub(P(q[1]), O)); }
        emit(cmd === 'FillCircle' ? `\\fill${style(o, 'fill') || '[fill=gray!30]'} ${pstr(O)} circle (${fmt(r)});` : `\\draw${style(lo)} ${pstr(O)} circle (${fmt(r)});`);
        break;
      }
      case 'DrawArc': case 'DrawSector': case 'DrawSemiCircle': {
        const [O, A] = ps(0);
        const r = len(sub(A, O)), a1 = angOf(sub(A, O));
        const a2 = cmd === 'DrawSemiCircle' ? a1 + 180 : a1 + ccw(a1, angOf(sub(ps(1)[0], O)));
        const body = cmd === 'DrawSector' ? `${pstr(O)} -- ${pstr(A)} arc (${fmt(a1)}:${fmt(a2)}:${fmt(r)}) -- cycle` : `${pstr(A)} arc (${fmt(a1)}:${fmt(a2)}:${fmt(r)})`;
        if (cmd === 'DrawSector' && (o.fill || o.color && o.fill)) emit(`\\fill${style({ color: o.fill }, 'fill')} ${body};`);
        emit(`\\draw${style({ ...lo, fill: undefined })} ${body};`);
        break;
      }
      case 'MarkRightAngle': {
        const [A, B, C] = ps(0), s = o.size !== undefined ? evalNum(o.size) : 0.3, u1 = unit(sub(A, B)), u2 = unit(sub(C, B));
        emit(`\\draw${style(lo)} ${pstr(add(B, mul(u1, s)))} -- ${pstr(add(B, mul(add(u1, u2), s)))} -- ${pstr(add(B, mul(u2, s)))};`);
        break;
      }
      case 'MarkAngle': case 'FillAngle': {
        const [A, B, C] = ps(0), s = o.size !== undefined ? evalNum(o.size) : 0.5, a1 = angOf(sub(A, B)), a2 = a1 + ccw(a1, angOf(sub(C, B))), st = add(B, mul(unit(sub(A, B)), s));
        const arcTxt = `${pstr(st)} arc (${fmt(a1)}:${fmt(a2)}:${fmt(s)})`;
        if (cmd === 'FillAngle' || o.fill) emit(`\\fill${style({ color: o.fill || o.color || 'gray!30' }, 'fill')} ${pstr(B)} -- ${arcTxt} -- cycle;`);
        if (cmd === 'MarkAngle') emit(`\\draw${style({ ...lo, fill: undefined })} ${arcTxt};`);
        break;
      }
      case 'LabelAngle': {
        const [A, B, C] = ps(0), a1 = angOf(sub(A, B)), a2 = a1 + ccw(a1, angOf(sub(C, B))), r = o.pos !== undefined ? evalNum(o.pos) : 0.8;
        emit(`\\node at ${pstr(add(B, rot([r, 0], (a1 + a2) / 2)))} {${bodyOf(1)}};`);
        break;
      }
      case 'MarkSegment': case 'MarkSegments': {
        const pairs = cmd === 'MarkSegment' ? [a(0)] : a(0).trim().split(/\s+/), n = Math.max(1, (String(o.mark || '|').match(/\|/g) || []).length);
        for (const pair of pairs) {
          const [A, B] = list(pair).map(P), M = mid(A, B), u = unit(sub(B, A)), nrm = rot(u, 90);
          for (let k = 0; k < n; k++) { const c = add(M, mul(u, (k - (n - 1) / 2) * 0.12)); emit(`\\draw${style(lo)} ${pstr(add(c, mul(nrm, 0.1)))} -- ${pstr(sub(c, mul(nrm, 0.1)))};`); }
        }
        break;
      }
      default: throw new TkzError(`lệnh \\tkz${cmd}`);
    }
    last = i;
    re.lastIndex = i;
  }
  plain(text.slice(last));
  return out.join('\n');
}
