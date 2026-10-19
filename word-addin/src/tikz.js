// A small TikZ subset -> scene (src/figures/scene.js primitives), enough for the worksheet generator's own pictures:
// \draw / \fill / \filldraw / \node with coordinates (x,y) (a:r) (name), --, cycle, rectangle, circle, grid, arc,
// inline `node[...] {..}` on a segment, options draw, fill=, line width=, ->, circle/rectangle nodes with minimum size.
// Units: 1 cm = 37.8 px (the scene's unit). Throws TikzError on anything else, so the caller can fall back.
import { labelBox } from './figures/scene.js';

export class TikzError extends Error {}
const CM = 37.795;

const COLORS = { black: [0, 0, 0], white: [255, 255, 255], red: [255, 0, 0], blue: [0, 0, 255], green: [0, 255, 0], yellow: [255, 255, 0], orange: [255, 128, 0], pink: [255, 191, 191], gray: [128, 128, 128], brown: [191, 128, 64], purple: [191, 0, 191], cyan: [0, 255, 255], magenta: [255, 0, 255] };
const hex = (rgb) => rgb.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
/** TikZ colour expression (black!30, red!80!black, yellow!35) -> RRGGBB. */
export function colour(expr) {
  const parts = String(expr).trim().split('!');
  const base = COLORS[parts[0]];
  if (!base) throw new TikzError('colour ' + expr);
  if (parts.length === 1) return hex(base);
  const p = parseFloat(parts[1]) / 100, other = parts[2] ? COLORS[parts[2]] : COLORS.white;
  if (!other) throw new TikzError('colour ' + expr);
  return hex(base.map((v, i) => v * p + other[i] * (1 - p)));
}

const dim = (s) => { const m = /^\s*(-?[\d.]+)\s*(cm|mm|pt|em|ex)?\s*$/.exec(s || ''); if (!m) throw new TikzError('dimension ' + s); return parseFloat(m[1]) * ({ cm: CM, mm: CM / 10, pt: CM / 28.45, em: 10, ex: 5 }[m[2] || 'cm']); };

/** Split on `sep` at brace/bracket/paren depth 0. */
function splitTop(s, sep) {
  const out = []; let depth = 0, cur = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '\\') { cur += c + (s[++i] || ''); continue; }
    if ('{[('.includes(c)) depth++; else if ('}])'.includes(c)) depth--;
    if (c === sep && depth === 0) { out.push(cur); cur = ''; } else cur += c;
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

const FLAGS = new Set(['draw', 'fill', 'circle', 'rectangle', 'rounded corners', 'thick', 'thin', 'dashed', 'dotted']);
/** `\fill[red]` / `\draw[blue!50]`: a bare colour name among the options. */
function colourOpt(opts) {
  for (const k of Object.keys(opts)) { if (FLAGS.has(k) || opts[k] !== true) continue; try { return colour(k); } catch { /* not a colour */ } }
  return null;
}

function nodeLatex(text) {
  let t = text.replace(/\\(?:tiny|small|footnotesize|large|Large|LARGE|huge|bfseries|itshape|sffamily|normalsize)\b\s*/g, '').trim();
  if (!t) return '';
  if (/^\$[\s\S]*\$$/.test(t) && t.indexOf('$', 1) === t.length - 1) return t.slice(1, -1);
  if (t.includes('$')) return t.replace(/\$([^$]*)\$/g, '$1');
  return /^[\d\s+\-−×:=.,]*$/.test(t) ? t : `\\text{${t}}`;
}

export function tikzToScene(code, { scale = 1, fs = 16 } = {}) {
  const S = CM * scale;
  const items = [], nodes = new Map();
  const pt = (x, y) => [x * S, -y * S];
  let src = code.replace(/%[^\n]*/g, '');

  const coord = (tok, cur) => {
    const m = /^\s*\(([^)]*)\)\s*$/.exec(tok);
    if (!m) throw new TikzError('coordinate ' + tok);
    const inner = m[1].trim();
    if (/^[A-Za-z][\w.]*$/.test(inner)) { const n = nodes.get(inner); if (!n) throw new TikzError('node ' + inner); return { p: n.c, node: n }; }
    const polar = /^(-?[\d.]+)\s*:\s*(-?[\d.]+)$/.exec(inner);
    if (polar) { const a = parseFloat(polar[1]) * Math.PI / 180, r = parseFloat(polar[2]); return { p: pt(r * Math.cos(a), r * Math.sin(a)) }; }
    const xy = /^\{?\s*(-?[\d.]+)\s*(cm)?\s*\}?\s*,\s*\{?\s*(-?[\d.]+)\s*(cm)?\s*\}?$/.exec(inner);
    if (xy) return { p: pt(parseFloat(xy[1]), parseFloat(xy[3])) };
    throw new TikzError('coordinate ' + inner);
  };

  const clip = (from, to, node) => {   // where the line from `from` towards `to` leaves the named node
    if (!node) return to;
    const d = [from[0] - to[0], from[1] - to[1]], L = Math.hypot(d[0], d[1]) || 1;
    const u = [d[0] / L, d[1] / L];
    if (node.shape === 'circle') return [to[0] + u[0] * node.r, to[1] + u[1] * node.r];
    const t = Math.min(Math.abs(u[0]) > 1e-6 ? node.hw / Math.abs(u[0]) : 1e9, Math.abs(u[1]) > 1e-6 ? node.hh / Math.abs(u[1]) : 1e9);
    return [to[0] + u[0] * t, to[1] + u[1] * t];
  };

  const addNode = (opts, name, c, text) => {
    const tex = nodeLatex(text);
    const size = opts['minimum size'] ? dim(opts['minimum size']) : 0;
    const w0 = opts['minimum width'] ? dim(opts['minimum width']) : size, h0 = opts['minimum height'] ? dim(opts['minimum height']) : size;
    const inner = opts['inner sep'] ? dim(opts['inner sep']) : 5;
    const box = tex ? labelBox(tex, fs) : { w: 0, h: 0 };
    const shape = opts.circle ? 'circle' : 'rect';
    const draw = Boolean(opts.draw);
    const hw = Math.max(w0, box.w + 2 * inner) / 2 * (draw || size ? 1 : 0) || box.w / 2, hh = Math.max(h0, box.h + 2 * inner) / 2 * (draw || size ? 1 : 0) || box.h / 2;
    const r = Math.max(w0, h0, shape === 'circle' ? Math.max(box.w, box.h) + 2 * inner : 0) / 2;
    if (draw) {
      const sw = opts['line width'] ? dim(opts['line width']) : 1.2;
      const fill = opts.fill ? '#' + colour(opts.fill) : undefined;
      if (shape === 'circle') items.push({ t: 'ellipse', cx: c[0], cy: c[1], rx: r, ry: r, sw, fill });
      else items.push({ t: 'rect', x: c[0] - hw, y: c[1] - hh, w: 2 * hw, h: 2 * hh, sw, fill });
    }
    if (tex) items.push({ t: 'label', latex: tex, x: c[0], y: c[1], size: fs, anchor: 'c' });
    if (name) nodes.set(name, { c, shape, r: shape === 'circle' ? r : 0, hw, hh });
  };

  const place = (pos, base, w, h) => {   // for node[above] {..} on a segment: shift the label away from the point
    const dx = /right/.test(pos) ? 1 : /left/.test(pos) ? -1 : 0, dy = /above/.test(pos) ? -1 : /below/.test(pos) ? 1 : 0;
    return [base[0] + dx * (w / 2 + 3), base[1] + dy * (h / 2 + 3)];
  };

  for (const raw of splitTop(src, ';')) {
    const st = raw.trim();
    if (!st) continue;
    const head = /^\\(draw|fill|filldraw|node|path)\b\s*(\[[^\]]*\])?\s*([\s\S]*)$/.exec(st);
    if (!head) throw new TikzError('statement ' + st.slice(0, 30));
    const cmd = head[1], opts = parseOpts((head[2] || '').slice(1, -1)), rest = head[3].trim();
    if (cmd === 'node') {
      const m = /^(?:\(([^)]*)\)\s*)?at\s*(\([^)]*\))\s*\{([\s\S]*)\}$/.exec(rest);
      if (!m) throw new TikzError('node ' + rest.slice(0, 30));
      addNode(opts, m[1], coord(m[2]).p, m[3]);
      continue;
    }
    const doDraw = cmd === 'draw' || cmd === 'filldraw' || opts.draw, doFill = cmd === 'fill' || cmd === 'filldraw' || opts.fill;
    const bare = colourOpt(opts);
    const fill = doFill ? '#' + (opts.fill ? colour(opts.fill) : cmd === 'fill' && bare ? bare : '000000') : undefined;
    const sw = opts['line width'] ? dim(opts['line width']) : 1.2;
    const arrow = Boolean(opts['->'] || opts['-stealth']);
    const stroke = doDraw ? (opts.draw && opts.draw !== true ? '#' + colour(opts.draw) : cmd !== 'fill' && bare ? '#' + bare : undefined) : undefined;
    // tokenise the path
    const toks = rest.match(/\(\s*[^()]*\)|--|\bcycle\b|\brectangle\b|\bcircle\b|\bgrid\b|\barc\b|\bnode\b\s*(?:\[[^\]]*\])?\s*(?:\([^)]*\))?\s*\{(?:[^{}]|\{[^{}]*\})*\}|\bto\b/g) || [];
    let cur = null, curNode = null, i = 0, pending = null, pathPts = [];
    const flush = () => {
      if (pathPts.length > 1 && (doDraw || doFill)) items.push({ t: 'poly', pts: pathPts, closed: false, sw, fill, color: stroke, noStroke: !doDraw });
      pathPts = [];
    };
    while (i < toks.length) {
      const t = toks[i];
      if (t === '--' || t === 'to') { i++; continue; }
      if (t === 'cycle') { if (pathPts.length) { items.push({ t: 'poly', pts: pathPts, closed: true, sw, fill, color: stroke }); pathPts = []; } i++; continue; }
      if (t === 'rectangle') { const q = coord(toks[++i]).p; const x = Math.min(cur[0], q[0]), y = Math.min(cur[1], q[1]); items.push({ t: 'rect', x, y, w: Math.abs(q[0] - cur[0]), h: Math.abs(q[1] - cur[1]), sw, fill, color: stroke, noStroke: !doDraw }); cur = q; pathPts = []; i++; continue; }
      if (t === 'circle') { const m = /\(\s*([\d.]+)\s*(cm)?\s*\)/.exec(toks[++i]); const r = parseFloat(m[1]) * S; items.push({ t: 'ellipse', cx: cur[0], cy: cur[1], rx: r, ry: r, sw, fill, color: stroke, noStroke: !doDraw }); pathPts = []; i++; continue; }
      if (t === 'grid') { const q = coord(toks[++i]).p; for (let x = Math.min(cur[0], q[0]); x <= Math.max(cur[0], q[0]) + 0.5; x += S) items.push({ t: 'line', x1: x, y1: cur[1], x2: x, y2: q[1], w: sw }); for (let y = Math.min(cur[1], q[1]); y <= Math.max(cur[1], q[1]) + 0.5; y += S) items.push({ t: 'line', x1: cur[0], y1: y, x2: q[0], y2: y, w: sw }); i++; continue; }
      if (t === 'arc') { const m = /\(\s*(-?[\d.]+)\s*:\s*(-?[\d.]+)\s*:\s*([\d.]+)\s*\)/.exec(toks[++i]); const a1 = parseFloat(m[1]), a2 = parseFloat(m[2]), r = parseFloat(m[3]) * S; const c0 = [cur[0] - r * Math.cos(a1 * Math.PI / 180), cur[1] + r * Math.sin(a1 * Math.PI / 180)]; for (let k = 1; k <= 12; k++) { const a = (a1 + (a2 - a1) * k / 12) * Math.PI / 180; pathPts.push([c0[0] + r * Math.cos(a), c0[1] - r * Math.sin(a)]); } cur = pathPts[pathPts.length - 1]; i++; continue; }
      if (/^node/.test(t)) {
        const m = /^node\s*(\[[^\]]*\])?\s*(?:\(([^)]*)\)\s*)?\{([\s\S]*)\}$/.exec(t);
        const o = parseOpts((m[1] || '').slice(1, -1));
        if (cur && toks[i + 1] === undefined) addNode(o, m[2], cur, m[3]);   // node at the end of the path: at the current point
        else if (cur) pending = { o, name: m[2], text: m[3] };   // node on a segment: at its middle (placed once the end point is known)
        else addNode(o, m[2], cur, m[3]);
        i++; continue;
      }
      const c = coord(t);
      if (cur === null) { cur = c.p; curNode = c.node; pathPts = [cur]; } else {
        let from = clip(c.p, cur, curNode), to = clip(cur, c.p, c.node);
        if (curNode || c.node) { flush(); pathPts = [from, to]; } else { pathPts.push(c.p); to = c.p; from = cur; }
        if (pending) {
          const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2], tex = nodeLatex(pending.text), b = tex ? labelBox(tex, fs) : { w: 0, h: 0 };
          const pos = Object.keys(pending.o).filter((k) => /above|below|left|right/.test(k)).join(' ');
          const p2 = place(pos, mid, b.w, b.h);
          if (tex) items.push({ t: 'label', latex: tex, x: p2[0], y: p2[1], size: fs, anchor: 'c' });
          pending = null;
        }
        if (arrow && (curNode || c.node)) { items.push({ t: 'line', x1: from[0], y1: from[1], x2: to[0], y2: to[1], w: sw, arrow: true }); pathPts = []; } else if (curNode || c.node) { items.push({ t: 'line', x1: from[0], y1: from[1], x2: to[0], y2: to[1], w: sw }); pathPts = []; }
        cur = c.p; curNode = c.node;
      }
      i++;
    }
    if (arrow && pathPts.length > 1) { const a = pathPts[pathPts.length - 2], b = pathPts[pathPts.length - 1]; items.push({ t: 'line', x1: a[0], y1: a[1], x2: b[0], y2: b[1], w: sw, arrow: true }); pathPts = pathPts.slice(0, -1).length > 1 ? pathPts.slice(0, -1) : []; }
    flush();
  }
  return fit(items);
}

/** Translate the items so the bounding box starts at (pad, pad); returns {width, height, items}. */
export function fit(items, pad = 3) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const grow = (x, y) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); };
  for (const it of items) {
    if (it.t === 'line') { grow(it.x1, it.y1); grow(it.x2, it.y2); } else if (it.t === 'poly') it.pts.forEach((q) => grow(q[0], q[1]));
    else if (it.t === 'rect') { grow(it.x, it.y); grow(it.x + it.w, it.y + it.h); } else if (it.t === 'ellipse') { grow(it.cx - it.rx, it.cy - it.ry); grow(it.cx + it.rx, it.cy + it.ry); } else if (it.t === 'dot') grow(it.x, it.y);
    else if (it.t === 'label') { const b = labelBox(it.latex, it.size || 16); grow(it.x - b.w / 2, it.y - b.h / 2); grow(it.x + b.w / 2, it.y + b.h / 2); }
  }
  if (!Number.isFinite(x0)) throw new TikzError('empty picture');
  const dx = pad - x0, dy = pad - y0;
  const mv = (it) => {
    const o = { ...it };
    if (o.t === 'line') { o.x1 += dx; o.x2 += dx; o.y1 += dy; o.y2 += dy; } else if (o.t === 'poly') o.pts = o.pts.map((q) => [q[0] + dx, q[1] + dy]);
    else if (o.t === 'rect') { o.x += dx; o.y += dy; } else if (o.t === 'ellipse') { o.cx += dx; o.cy += dy; } else if (o.t === 'dot' || o.t === 'label') { o.x += dx; o.y += dy; }
    return o;
  };
  return { width: x1 - x0 + 2 * pad, height: y1 - y0 + 2 * pad, items: items.map(mv) };
}

/** The clock face drawn by \wsclock{hourAngle}{minuteAngle} (angles as in TikZ: degrees, counter-clockwise from the x axis). */
export function clockScene(hourDeg, minDeg, fs = 11) {
  const R = 1.5 * 0.62 * CM, items = [];
  const at = (deg, r) => { const a = deg * Math.PI / 180; return [r * Math.cos(a), -r * Math.sin(a)]; };
  items.push({ t: 'ellipse', cx: 0, cy: 0, rx: R, ry: R, sw: 1.4, fill: '#ffffff' });
  for (let a = 0; a < 360; a += 30) { const p = at(a, R * 0.87), q = at(a, R); items.push({ t: 'line', x1: p[0], y1: p[1], x2: q[0], y2: q[1], w: 1, color: '#4d4d4d' }); }
  for (let n = 1; n <= 12; n++) { const p = at(90 - 30 * n, R * 0.7); items.push({ t: 'label', latex: String(n), x: p[0], y: p[1], size: fs, anchor: 'c' }); }
  const h = at(hourDeg, 0.72 * 0.62 * CM), m = at(minDeg, 1.05 * 0.62 * CM);
  items.push({ t: 'line', x1: 0, y1: 0, x2: h[0], y2: h[1], w: 2.4, arrow: true, color: '#b30000' }, { t: 'line', x1: 0, y1: 0, x2: m[0], y2: m[1], w: 1.6, arrow: true, color: '#1f3f9f' }, { t: 'dot', x: 0, y: 0, r: 2.2 });
  return fit(items);
}
