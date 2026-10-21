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
  let t = text.replace(/\\(?:tiny|small|footnotesize|large|Large|LARGE|huge|Huge|bfseries|itshape|sffamily|normalsize)\b\s*/g, '').trim();
  if (!t) return '';
  if (/^\$[\s\S]*\$$/.test(t) && t.indexOf('$', 1) === t.length - 1) return t.slice(1, -1);
  if (t.includes('$')) return t.replace(/\$([^$]*)\$/g, '$1');
  return /^[\d\s+\-−×:=.,]*$/.test(t) ? t : `\\text{${t}}`;
}

const braceGroup = (s, i) => { let d = 0, j = i; for (; j < s.length; j++) { if (s[j] === '{') d++; else if (s[j] === '}' && --d === 0) break; } return [s.slice(i + 1, j), j + 1]; };
const fmtNum = (x) => String(+x.toFixed(6));
function listValues(list) {   // {a,b,c}  {0,45,...,315}  {1,...,5}
  const items = splitTop(list, ',').map((x) => x.trim()).filter(Boolean), dots = items.indexOf('...');
  if (dots < 0) return items;
  const head = items.slice(0, dots).map(parseFloat), end = parseFloat(items[dots + 1]);
  const step = head.length > 1 ? head[1] - head[0] : (end >= head[0] ? 1 : -1), out = [];
  if (!step) throw new TikzError('foreach list');
  for (let v = head[0], k = 0; (step > 0 ? v <= end + 1e-9 : v >= end - 1e-9) && k < 400; v += step, k++) out.push(fmtNum(v));
  return out;
}
/** \foreach \a/\b in {..}{body} (or a single statement) written out for every value. */
function expandForeach(src) {
  for (let guard = 0; guard < 60; guard++) {
    const m = /\\foreach\s+((?:\\[A-Za-z]+\/?)+)\s+in\s*\{/.exec(src);
    if (!m) return src;
    const names = m[1].split('/').filter(Boolean).map((v) => v.slice(1));
    const [list, afterList] = braceGroup(src, m.index + m[0].length - 1);
    let k = afterList; while (/\s/.test(src[k])) k++;
    let body, end;
    if (src[k] === '{') [body, end] = braceGroup(src, k); else { const e = src.indexOf(';', k); body = src.slice(k, e + 1); end = e + 1; }
    const out = listValues(list).map((v) => {
      const parts = names.length > 1 ? v.split('/') : [v];
      return names.reduce((b, n, idx) => b.replace(new RegExp('\\\\' + n + '(?![A-Za-z])', 'g'), () => parts[idx]), body);
    }).join('\n');
    src = src.slice(0, m.index) + out + src.slice(end);
  }
  throw new TikzError('foreach');
}
/** \begin{scope}[shift={(x,y)}] ... \end{scope}: the shift written into the coordinates inside. */
function expandScopes(src) {
  for (let guard = 0; guard < 60; guard++) {
    const m = /\\begin\{scope\}\s*(\[[^\n]*?\])?/.exec(src);
    if (!m) return src;
    const end = src.indexOf('\\end{scope}', m.index);
    if (end < 0) throw new TikzError('scope');
    const o = parseOpts((m[1] || '').slice(1, -1));
    if (Object.keys(o).some((k) => k !== 'shift')) throw new TikzError('scope ' + Object.keys(o).join());
    let dx = 0, dy = 0;
    if (o.shift) { const sm = /\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/.exec(o.shift); if (!sm) throw new TikzError('shift'); dx = parseFloat(sm[1]); dy = parseFloat(sm[2]); }
    const body = src.slice(m.index + m[0].length, end).replace(/\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/g, (_, a, b) => `(${fmtNum(parseFloat(a) + dx)},${fmtNum(parseFloat(b) + dy)})`);
    src = src.slice(0, m.index) + body + src.slice(end + '\\end{scope}'.length);
  }
  throw new TikzError('scope');
}
const num = (t) => { const x = String(t).replace(/cm/g, '').trim(); if (!/^[-+*/().\d\s]+$/.test(x)) throw new TikzError('number ' + t); return Function(`return (${x})`)(); };   // 0.5*2, -0.2+0.1

export function tikzToScene(code, { scale = 1, fs = 16, lw = 1.2, ink, icon } = {}) {
  const S = CM * scale;
  const items = [], nodes = new Map();
  const pt = (x, y) => [x * S, -y * S];
  let src = expandScopes(expandForeach(code.replace(/%[^\n]*/g, '')));

  const coord = (tok, cur) => {
    const m = /^\s*\(([^)]*)\)\s*$/.exec(tok);
    if (!m) throw new TikzError('coordinate ' + tok);
    const inner = m[1].trim();
    if (/^[A-Za-z][\w.]*$/.test(inner)) { const n = nodes.get(inner); if (!n) throw new TikzError('node ' + inner); return { p: n.c, node: n }; }
    if (inner.includes(':') && !inner.includes(',')) { const [aa, rr] = inner.split(':'); const a = num(aa) * Math.PI / 180, r = num(rr); return { p: pt(r * Math.cos(a), r * Math.sin(a)) }; }
    const xy = splitTop(inner.replace(/[{}]/g, ''), ',');
    if (xy.length === 2) return { p: pt(num(xy[0]), num(xy[1])) };
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
    const im = /^\s*\\ic(O?)([A-Z][A-Za-z]*)(?:\[([\d.]+)\])?\s*$/.exec(text);   // a TikZ icon of the worksheet library as the node's content
    if (im && icon) {
      const code = icon(im[2].toLowerCase(), Boolean(im[1]));
      if (code) {
        const sc = im[3] ? parseFloat(im[3]) : 1, sub = tikzToScene(code, { scale: sc * scale, fs, lw: (0.6 + 0.55 * sc) * 1.33, ink: '#4a4a4a', icon });
        const dx = c[0] - sub.width / 2, dy = c[1] - sub.height / 2;
        for (const it of sub.items) items.push(shiftItem(it, dx, dy));
        if (name) nodes.set(name, { c, shape: 'rect', r: 0, hw: sub.width / 2, hh: sub.height / 2 });
        return;
      }
    }
    if (/above|below|left|right/.test(Object.keys(opts).join(' '))) {   // node[below left] at p: the text sits beside the point, not on it
      const k = Object.keys(opts).join(' '), tex0 = nodeLatex(text), b0 = tex0 ? labelBox(tex0, fs) : { w: 0, h: 0 };
      c = [c[0] + (/right/.test(k) ? 1 : /left/.test(k) ? -1 : 0) * (b0.w / 2 + 4), c[1] + (/below/.test(k) ? 1 : /above/.test(k) ? -1 : 0) * (b0.h / 2 + 4)];
    }
    const pm = /\\wspic(?:\[([\d.]+)cm\])?\{ws-([0-9a-f-]+)\}/i.exec(text), pic = pm ? (pm[1] ? parseFloat(pm[1]) : 1) * CM : 0;   // an emoji picture in a node
    const size = opts['minimum size'] ? dim(opts['minimum size']) * scale : 0;   // nodes follow the picture's scale, so boxes laid out on a scaled grid keep their gaps
    const w0 = opts['minimum width'] ? dim(opts['minimum width']) * scale : size, h0 = opts['minimum height'] ? dim(opts['minimum height']) * scale : size;
    const inner = opts['inner sep'] ? dim(opts['inner sep']) : 5;
    const tex = pm ? '' : nodeLatex(text);
    const plain = !pm && tex && /^\\text\{[^$\\]*\}$/.test(tex) && /[^\x00-\x7f]|[A-Za-z]{2}/.test(tex);   // words: plain text (keeps the letter spacing), not a formula
    const box = tex && !plain ? labelBox(tex, fs * (/Large/.test(text) ? 1.3 : 1)) : plain ? { w: tex.length * fs * 0.5, h: fs * 1.3 } : { w: 0, h: 0 };
    const shape = opts.circle ? 'circle' : 'rect';
    const draw = Boolean(opts.draw);
    const hw = Math.max(w0, box.w + 2 * inner, draw && pic ? pic + 2 * inner : 0) / 2 * (draw || size ? 1 : 0) || box.w / 2, hh = Math.max(h0, box.h + 2 * inner, draw && pic ? pic + 2 * inner : 0) / 2 * (draw || size ? 1 : 0) || box.h / 2;
    const r = Math.max(w0, h0, shape === 'circle' ? Math.max(box.w, box.h) + 2 * inner : 0) / 2;
    if (draw) {
      const sw = opts['line width'] ? dim(opts['line width']) : lw;
      const fill = opts.fill ? '#' + colour(opts.fill) : undefined;
      if (shape === 'circle') items.push({ t: 'ellipse', cx: c[0], cy: c[1], rx: r, ry: r, sw, fill });
      else items.push({ t: 'rect', x: c[0] - hw, y: c[1] - hh, w: 2 * hw, h: 2 * hh, sw, fill });
    }
    if (tex && plain) items.push({ t: 'ptext', s: tex.slice(6, -1), x: c[0], y: c[1], size: fs * (/Large/.test(text) ? 1.3 : 1), color: '#222222' });
    else if (tex) items.push({ t: 'label', latex: tex, x: c[0], y: c[1], size: fs * (/Large|huge/.test(opts.font || '') ? 1.35 : 1), anchor: 'c' });
    if (pm) items.push({ t: 'ptext', s: String.fromCodePoint(...pm[2].split('-').map((h) => parseInt(h, 16))), x: c[0], y: c[1], size: pic * 0.8, font: 'Segoe UI Emoji' });
    if (name) nodes.set(name, { c, shape, r: shape === 'circle' ? r : 0, hw: hw || pic / 2, hh: hh || pic / 2 });
  };

  const place = (pos, base, w, h) => {   // for node[above] {..} on a segment: shift the label away from the point
    const dx = /right/.test(pos) ? 1 : /left/.test(pos) ? -1 : 0, dy = /above/.test(pos) ? -1 : /below/.test(pos) ? 1 : 0;
    return [base[0] + dx * (w / 2 + 3), base[1] + dy * (h / 2 + 3)];
  };

  const placeBeside = (pos, mid, d, w, h) => {   // a label beside the middle of a segment, clear of the line (not on it)
    const L = Math.hypot(d[0], d[1]) || 1;
    let n = [-d[1] / L, d[0] / L];
    const want = /above/.test(pos) ? (n[1] > 0 ? -1 : 1) : /below/.test(pos) ? (n[1] < 0 ? -1 : 1) : /right/.test(pos) ? (n[0] < 0 ? -1 : 1) : /left/.test(pos) ? (n[0] > 0 ? -1 : 1) : 0;
    if (!want) return mid;
    n = [n[0] * want, n[1] * want];
    const off = Math.abs(n[0]) * w / 2 + Math.abs(n[1]) * h / 2 + 4;
    return [mid[0] + n[0] * off, mid[1] + n[1] * off];
  };

  for (const raw of splitTop(src, ';')) {
    const st = raw.trim();
    if (!st) continue;
    const head = /^\\(draw|fill|filldraw|node|path)\b\s*(\[[^\]]*\])?\s*([\s\S]*)$/.exec(st);
    if (!head) throw new TikzError('statement ' + st.slice(0, 30));
    const cmd = head[1], opts = parseOpts((head[2] || '').slice(1, -1)), rest = head[3].trim().replace(/\.\.\s*controls\s*(\([^)]*\))\s*(?:and\s*(\([^)]*\))\s*)?\.\.\s*(\([^)]*\))/g, (_, a, b, c) => ` ~BEZ${a}${b || a}${c} `);
    const firstItem = items.length;
    if (opts.wsdashline) { opts.draw = 'black!40'; opts['line width'] = '2.4pt'; }   // dotted path to trace
    if (cmd === 'node') {
      const m = /^(?:\(([^)]*)\)\s*)?at\s*(\([^)]*\))\s*\{([\s\S]*)\}$/.exec(rest);
      if (!m) throw new TikzError('node ' + rest.slice(0, 30));
      addNode(opts, m[1], coord(m[2]).p, m[3]);
      continue;
    }
    const doDraw = cmd === 'draw' || cmd === 'filldraw' || opts.draw, doFill = cmd === 'fill' || cmd === 'filldraw' || opts.fill;
    const bare = colourOpt(opts);
    const fill = doFill ? '#' + (opts.fill ? colour(opts.fill) : cmd === 'fill' && bare ? bare : '000000') : undefined;
    const sw = opts['line width'] ? dim(opts['line width']) : lw;
    const arrow = Boolean(opts['->'] || opts['-stealth']);
    const stroke = doDraw ? (opts.draw && opts.draw !== true ? '#' + colour(opts.draw) : cmd !== 'fill' && bare ? '#' + bare : ink) : undefined;
    // tokenise the path
    const toks = rest.match(/~BEZ\([^)]*\)\([^)]*\)\([^)]*\)|\(\s*[^()]*\)|--|\bcycle\b|\brectangle\b|\bcircle\b|\bellipse\b|\bgrid\b|\barc\b|\bnode\b\s*(?:\[[^\]]*\])?\s*(?:\([^)]*\))?\s*\{(?:[^{}]|\{[^{}]*\})*\}|\bto\b|\bsin\b|\bcos\b/g) || [];
    let cur = null, curNode = null, i = 0, pending = null, pathPts = [], joined = false, wave = '';
    const flush = () => {
      if (pathPts.length > 1 && (doDraw || doFill)) items.push({ t: 'poly', pts: pathPts, closed: false, sw, fill, color: stroke, noStroke: !doDraw });
      pathPts = [];
    };
    while (i < toks.length) {
      const t = toks[i];
      if (t === '--' || t === 'to') { joined = true; i++; continue; }
      if (t === 'sin' || t === 'cos') { joined = true; wave = t; i++; continue; }
      if (t.startsWith('~BEZ')) {   // .. controls p1 and p2 .. p3 : a cubic curve
        if (!cur) throw new TikzError('curve start');
        const [c1, c2, c3] = t.slice(4).match(/\([^)]*\)/g).map((q) => coord(q).p);
        if (!pathPts.length) pathPts = [cur];
        for (let k = 1; k <= 14; k++) { const u = k / 14, m = 1 - u; pathPts.push([m * m * m * cur[0] + 3 * m * m * u * c1[0] + 3 * m * u * u * c2[0] + u * u * u * c3[0], m * m * m * cur[1] + 3 * m * m * u * c1[1] + 3 * m * u * u * c2[1] + u * u * u * c3[1]]); }
        cur = c3; i++; continue;
      }
      if (t === 'cycle') { if (pathPts.length) { items.push({ t: 'poly', pts: pathPts, closed: true, sw, fill, color: stroke }); pathPts = []; } i++; continue; }
      if (t === 'rectangle') { const q = coord(toks[++i]).p; const x = Math.min(cur[0], q[0]), y = Math.min(cur[1], q[1]); items.push({ t: 'rect', x, y, w: Math.abs(q[0] - cur[0]), h: Math.abs(q[1] - cur[1]), sw, fill, color: stroke, noStroke: !doDraw }); cur = q; pathPts = []; i++; continue; }
      if (t === 'circle') { const m = /\(\s*([\d.]+)\s*(cm)?\s*\)/.exec(toks[++i]); const r = parseFloat(m[1]) * S; items.push({ t: 'ellipse', cx: cur[0], cy: cur[1], rx: r, ry: r, sw, fill, color: stroke, noStroke: !doDraw }); pathPts = []; i++; continue; }
      if (t === 'ellipse') { const m = /\(\s*([\d.]+)\s*(?:cm)?\s+and\s+([\d.]+)\s*(?:cm)?\s*\)/.exec(toks[++i]); if (!m) throw new TikzError('ellipse'); items.push({ t: 'ellipse', cx: cur[0], cy: cur[1], rx: parseFloat(m[1]) * S, ry: parseFloat(m[2]) * S, sw, fill, color: stroke, noStroke: !doDraw }); pathPts = []; i++; continue; }
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
      if (cur !== null && !joined) { flush(); cur = null; }   // a coordinate with no -- before it starts a new sub-path
      joined = false;
      if (cur === null) { cur = c.p; curNode = c.node; pathPts = [cur]; } else {
        let from = clip(c.p, cur, curNode), to = clip(cur, c.p, c.node);
        if (curNode || c.node) { flush(); pathPts = [from, to]; } else if (wave) {   // a quarter of a sine / cosine wave
          for (let k = 1; k <= 10; k++) { const u = k / 10, y = wave === 'sin' ? Math.sin(u * Math.PI / 2) : 1 - Math.cos(u * Math.PI / 2); pathPts.push([cur[0] + (c.p[0] - cur[0]) * u, cur[1] + (c.p[1] - cur[1]) * y]); }
          to = c.p; from = cur; wave = '';
        } else { pathPts.push(c.p); to = c.p; from = cur; }
        if (pending) {
          const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2], tex = nodeLatex(pending.text), b = tex ? labelBox(tex, fs) : { w: 0, h: 0 };
          const pos = Object.keys(pending.o).filter((k) => /above|below|left|right/.test(k)).join(' ');
          const p2 = placeBeside(pos, mid, [to[0] - from[0], to[1] - from[1]], b.w, b.h);
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
    if (opts.wsdashline) for (let k = firstItem; k < items.length; k++) if (items[k].t !== 'label') items[k].dash = 'dot';
  }
  return fit(items);
}

export function shiftItem(it, dx, dy) {
  const o = { ...it };
  if (o.t === 'line') { o.x1 += dx; o.x2 += dx; o.y1 += dy; o.y2 += dy; } else if (o.t === 'poly') o.pts = o.pts.map((q) => [q[0] + dx, q[1] + dy]);
  else if (o.t === 'rect') { o.x += dx; o.y += dy; } else if (o.t === 'ellipse') { o.cx += dx; o.cy += dy; } else if (o.t === 'dot' || o.t === 'label' || o.t === 'ptext') { o.x += dx; o.y += dy; }
  return o;
}
/** Translate the items so the bounding box starts at (pad, pad); returns {width, height, items}. */
export function fit(items, pad = 3) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const grow = (x, y) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); };
  for (const it of items) {
    if (it.t === 'line') { grow(it.x1, it.y1); grow(it.x2, it.y2); } else if (it.t === 'poly') it.pts.forEach((q) => grow(q[0], q[1]));
    else if (it.t === 'rect') { grow(it.x, it.y); grow(it.x + it.w, it.y + it.h); } else if (it.t === 'ellipse') { grow(it.cx - it.rx, it.cy - it.ry); grow(it.cx + it.rx, it.cy + it.ry); } else if (it.t === 'dot') grow(it.x, it.y);
    else if (it.t === 'ptext') { const hs = (it.size || 16) * 0.75; grow(it.x - hs, it.y - hs); grow(it.x + hs, it.y + hs); }
    else if (it.t === 'label') { const b = labelBox(it.latex, it.size || 16); grow(it.x - b.w / 2, it.y - b.h / 2); grow(it.x + b.w / 2, it.y + b.h / 2); }
  }
  if (!Number.isFinite(x0)) throw new TikzError('empty picture');
  const dx = pad - x0, dy = pad - y0;
  const mv = (it) => {
    const o = { ...it };
    if (o.t === 'line') { o.x1 += dx; o.x2 += dx; o.y1 += dy; o.y2 += dy; } else if (o.t === 'poly') o.pts = o.pts.map((q) => [q[0] + dx, q[1] + dy]);
    else if (o.t === 'rect') { o.x += dx; o.y += dy; } else if (o.t === 'ellipse') { o.cx += dx; o.cy += dy; } else if (o.t === 'dot' || o.t === 'label' || o.t === 'ptext') { o.x += dx; o.y += dy; }
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
