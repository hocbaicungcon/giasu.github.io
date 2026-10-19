// LaTeX -> MathType (MTEF v5) bytes. The record layouts are the ones MathType itself writes (checked byte for byte
// against equations of real documents, see tests/mtef_fidelity.mjs). Anything without a verified layout throws
// MtefWriteError so the caller keeps the equation in another format instead of writing something MathType may dislike.
import { latexToTree, normalizeNodes, LatexError } from './latex2omml.js';
import { CHARS } from './mtefchars.js';
import { STYLES } from './mathtype-template.js';

export class MtefWriteError extends Error {}
const fail = (m) => { throw new MtefWriteError(m); };
const unb64 = (s) => { const bin = atob(s); const out = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i); return out; };

// ---- typefaces (MTEF "typeface numbers")
const SUB = 0x0b, SUB2 = 0x0c, FULL = 0x0a, SYM = 0x0d;
const TEXT = 1, FUNCTION = 2, VARIABLE = 3, LCGREEK = 4, UCGREEK = 5, SYMBOL = 6, VECTOR = 7, NUMBER = 8, EXPAND = 22, SPACE = 24;
const SPACE_CODE = { ' ': 0xef02, ' ': 0xef04, ' ': 0xef04, ' ': 0xef05 };

const rec = (...b) => b;
const word = (v) => [v & 255, v >> 8];

function charRec(face, code, c8 = null, funcStart = false) {
  const opt = (c8 !== null ? 0x04 : 0) | (funcStart ? 0x02 : 0);
  return [0x02, opt, 128 + face, ...word(code), ...(c8 !== null ? [c8] : [])];
}


function textChars(text, face, firstFunc = false) {
  const out = [];
  [...text].forEach((ch, i) => out.push(...charRec(face, ch.codePointAt(0), null, firstFunc && i === 0)));
  return out;
}

/** A run -> one element (byte array) per character; primes become embellishments of the previous character. */
function runElements(text, sty, previous) {
  const out = [];
  let first = true;
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i], cp = ch.codePointAt(0);
    if (ch === ' ' && (chars[i - 1] === ',' || chars[i - 1] === ';')) continue;   // MathType has no space there; the reader adds it back
    if (cp === 0x2032 || cp === 0x2033 || cp === 0x2034) {   // prime(s): an embellishment of the character before
      const count = cp === 0x2032 ? 1 : cp === 0x2033 ? 2 : 3;
      const target = out.length ? out[out.length - 1] : previous;
      if (target && target[0] === 0x02 && !(target[1] & 0x01) && target[2] !== 128 + EXPAND) {
        const kind = { 1: 5, 2: 6, 3: 18 }[count];
        const grown = target.slice();
        grown[1] |= 0x01;
        grown.push(0x06, 0x00, kind, 0x00);
        if (out.length) out[out.length - 1] = grown; else previous.splice(0, previous.length, ...grown);   // (previous is the caller's array: mutated in place)
        continue;
      }
    }
    if (sty === 'nor') { out.push(charRec(TEXT, cp)); continue; }
    if (has(SPACE_CODE, ch)) { out.push(charRec(SPACE, SPACE_CODE[ch])); continue; }
    if (cp === 0x20 || cp === 0xa0) { out.push(charRec(TEXT, 0x20)); continue; }
    const isDigit = cp >= 48 && cp <= 57;
    const isAsciiLetter = (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
    if (isAsciiLetter) {
      if (sty === 'p') out.push(charRec(FUNCTION, cp, null, first));
      else if (sty === 'b') out.push(charRec(VECTOR, cp));
      else out.push(charRec(VARIABLE, cp));
      first = false;
      continue;
    }
    if (isDigit) { out.push(charRec(sty === 'b' ? VECTOR : NUMBER, cp)); continue; }
    const learned = CHARS[cp];
    if (!learned) fail(`no MathType encoding for U+${cp.toString(16)}`);
    out.push(charRec(learned.face, cp, learned.c8));
  }
  return out;
}
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

// ---------------------------------------------------------------- tree -> records
const FENCES = {   // key = begin+end, [selector, variation, left piece, right piece]
  '()': [1, 3, 0x28, 0x29], '[]': [3, 3, 0x5b, 0x5d], '{}': [2, 3, 0x7b, 0x7d], '||': [4, 3, 0xec07, 0xec08],
  '(': [1, 1, 0x28, null], ')': [1, 2, null, 0x29], '{': [2, 1, 0x7b, null], '}': [2, 2, null, 0x7d], '[': [3, 1, 0x5b, null], ']': [3, 2, null, 0x5d],
};
const INTERVALS = { '[)': [9, 0x12, 0x5b, 0x29], '(]': [9, 0x30, 0x28, 0x5d] };
const OPEN = { '(': 1, '[': 1, '{': 1 }, CLOSE = { ')': 1, ']': 1, '}': 1 };
const PAIRS = new Set(['()', '[]', '{}', '[)', '(]']);
const LIMITS = new Set(['lim', 'max', 'min', 'sup', 'inf']);

/** Split runs into single characters and turn matching ( ) [ ] { } into fence nodes, as MathType users get them. */
function pairFences(nodes) {
  const flat = [];
  for (const n of nodes) {
    if (n.k === 'run' && n.sty !== 'nor' && [...n.text].length > 1) for (const ch of n.text) flat.push({ k: 'run', text: ch, sty: n.sty });
    else flat.push(n);
  }
  const stack = [{ open: null, items: [] }];
  const isRun = (n, set) => n.k === 'run' && n.sty !== 'nor' && has(set, n.text);
  for (const n of flat) {
    const top = stack[stack.length - 1];
    if (isRun(n, OPEN)) stack.push({ open: n, items: [] });
    else if (isRun(n, CLOSE) && stack.length > 1 && PAIRS.has(top.open.text + n.text)) {
      stack.pop();
      stack[stack.length - 1].items.push({ k: 'd', beg: top.open.text, end: n.text, items: [top.items] });
    } else top.items.push(n);
  }
  while (stack.length > 1) { const t = stack.pop(); stack[stack.length - 1].items.push(t.open, ...t.items); }
  return stack[0].items;
}

/** Stateful emitter: MathType writes a size record (full / subscript / sub-subscript) whenever the size has to change. */
class Writer {
  constructor() { this.out = []; this.size = FULL; this.expect = FULL; this.lastChar = -1; }
  raw(...b) { this.out.push(...b); }
  sync() { if (this.size !== this.expect) { this.out.push(this.expect); this.size = this.expect; } }
  obj(bytes) { this.sync(); this.lastChar = -1; this.out.push(...bytes); }
  within(expect, fn) { const prev = this.expect; this.expect = expect; fn(); this.expect = prev; }
  sizeRecord(rec) { this.out.push(rec); this.size = rec; }
  nested() { return this.expect === FULL ? SUB : SUB2; }

  char(face, code, c8 = null, funcStart = false) {
    this.sync();
    this.lastChar = this.out.length;
    this.out.push(...charRec(face, code, c8, funcStart));
  }
  prime(count) {   // decorate the character just written
    const p = this.lastChar;
    if (p < 0 || p + 5 > this.out.length || this.out[p] !== 0x02 || (this.out[p + 1] & 0x01) || this.out[p + 2] === 128 + EXPAND) return false;
    this.out[p + 1] |= 0x01;
    this.out.push(0x06, 0x00, { 1: 5, 2: 6, 3: 18 }[count], 0x00);
    return true;
  }
  line(fn, expect = this.expect) {
    this.sync();
    this.lastChar = -1;
    this.out.push(0x01, 0x00);
    this.within(expect, fn);
    this.out.push(0x00);
  }
  nullLine() { this.sync(); this.lastChar = -1; this.out.push(0x01, 0x01); }
  template(sel, variation, fn) {
    this.sync();
    this.lastChar = -1;
    this.out.push(0x03, 0x00, sel, variation, 0x00);
    fn();
    this.out.push(0x00);
  }
}

function runs(w, text, sty) {
  let first = true;
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i], cp = ch.codePointAt(0);
    if (ch === ' ' && (chars[i - 1] === ',' || chars[i - 1] === ';')) continue;   // MathType has no space there; the reader adds it back
    if (cp === 0x2032 || cp === 0x2033 || cp === 0x2034) { if (w.prime(cp - 0x2031)) continue; }
    if (sty === 'nor') { w.char(TEXT, cp); continue; }
    if (has(SPACE_CODE, ch)) { w.char(SPACE, SPACE_CODE[ch]); continue; }
    if (cp === 0x20 || cp === 0xa0) { w.char(TEXT, 0x20); continue; }
    const isDigit = cp >= 48 && cp <= 57;
    const isAsciiLetter = (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
    if (isAsciiLetter) {
      if (sty === 'p') w.char(FUNCTION, cp, null, first);
      else w.char(sty === 'b' ? VECTOR : VARIABLE, cp);
      first = false;
      continue;
    }
    if (isDigit) { w.char(sty === 'b' ? VECTOR : NUMBER, cp); continue; }
    const learned = CHARS[cp];
    if (!learned) fail(`no MathType encoding for U+${cp.toString(16)}`);
    w.char(learned.face, cp, learned.c8);
  }
}

function seq(w, nodes) {
  const trimmed = normalizeNodes(nodes).map((n) => (n.k === 'run' && n.sty !== 'nor' ? { ...n, text: n.text.replace(/([,;]) /g, '$1') } : n));
  for (const n of pairFences(trimmed)) node(w, n);
}
const content = (w, nodes) => w.line(() => seq(w, nodes));
const slotLine = (w, nodes) => { if (normalizeNodes(nodes).length) content(w, nodes); else w.line(() => {}); };

function node(w, n) {
  switch (n.k) {
    case 'run': return runs(w, n.text, n.sty);
    case 'f': return w.template(11, n.noBar ? 6 : 0, () => { slotLine(w, n.num); slotLine(w, n.den); });
    case 'rad': return w.template(10, n.deg ? 1 : 0, () => {
      slotLine(w, n.e);
      w.sizeRecord(w.nested());
      w.within(w.size, () => { if (n.deg) slotLine(w, n.deg); else w.nullLine(); });
    });
    case 'script': {
      node(w, n.base);
      return script(w, n.sub, n.sup);
    }
    case 'd': return fence(w, n);
    case 'nary': return nary(w, n);
    case 'func': {
      const name = [...n.name];
      const lim = LIMITS.has(n.name) && (n.sub || n.sup);
      if (lim) {
        if (n.sup) fail('limit with upper bound');
        w.template(23, 16, () => {
          w.line(() => name.forEach((c, i) => w.char(FUNCTION, c.codePointAt(0), null, i === 0)));
          w.sizeRecord(w.nested());
          w.within(w.size, () => { slotLine(w, n.sub); w.nullLine(); });
        });
      } else {
        name.forEach((c, i) => w.char(FUNCTION, c.codePointAt(0), null, i === 0));
        if (n.sub || n.sup) script(w, n.sub, n.sup);
      }
      return seq(w, n.e);
    }
    case 'acc':
      if (n.chr === '\u20d7') return w.template(31, 2, () => { slotLine(w, n.e); w.char(EXPAND, 0x20d7); });
      if (n.chr === '\u0302') return w.template(33, 0, () => { slotLine(w, n.e); w.char(EXPAND, 0x302); });
      return fail('accent U+' + n.chr.codePointAt(0).toString(16));
    case 'bar': return w.template(n.pos === 'bot' ? 12 : 13, n.pos === 'bot' ? 1 : 0, () => slotLine(w, n.e));
    case 'box': return w.template(37, 30, () => slotLine(w, n.e));
    case 'm': return matrix(w, n);
    case 'eqArr': return pile(w, n.rows.map((r) => r[0]), 1);
    default: return fail('unsupported ' + n.k);
  }
}

function script(w, sub, sup) {
  const sel = sub && sup ? 29 : sub ? 27 : 28;
  w.template(sel, 0, () => {
    w.sizeRecord(w.nested());
    w.within(w.size, () => {
      if (sub) slotLine(w, sub); else w.nullLine();
      if (sup) slotLine(w, sup); else if (sel === 27) w.nullLine();
    });
  });
}

function pile(w, rows, halign) {
  w.sync();
  w.raw(0x04, 0x00, halign, 0x01);
  rows.forEach((r) => slotLine(w, r));
  w.raw(0x00);
}

function matrix(w, n) {
  const rows = n.rows.length, cols = Math.max(...n.rows.map((r) => r.length));
  const bytes = (count) => Math.ceil((count + 1) * 2 / 8);
  w.sync();
  w.raw(0x05, 0x00, 0x01, 0x01, 0x01, rows, cols, ...new Array(bytes(rows)).fill(0), ...new Array(bytes(cols)).fill(0));
  for (const r of n.rows) for (let c = 0; c < cols; c++) slotLine(w, r[c] || []);
  w.raw(0x00);
}

function fence(w, n) {
  if (n.items.length !== 1) fail('fence with separators');
  const key = n.beg + n.end;
  const flat = normalizeNodes(n.items[0]);
  const f = FENCES[key] || INTERVALS[key];
  if (!f) fail('fence ' + key);
  const asPile = flat.length === 1 && (flat[0].k === 'eqArr' || (flat[0].k === 'm' && Math.max(...flat[0].rows.map((r) => r.length)) === 1));
  w.template(f[0], f[1], () => {
    if (asPile) pile(w, flat[0].rows.map((r) => r[0]), flat[0].k === 'eqArr' ? 1 : 2);
    else content(w, flat);
    if (f[2] !== null) w.char(EXPAND, f[2]);
    if (f[3] !== null) w.char(EXPAND, f[3]);
  });
}

function nary(w, n) {
  if (n.op !== 'int' && n.op !== 'sum') fail('operator ' + n.op);
  const limits = n.sub || n.sup;
  const sel = n.op === 'int' ? 15 : 22, variation = n.op === 'int' ? (limits ? 0x71 : 1) : 0x70;
  w.template(sel, variation, () => {
    if (n.op === 'sum') w.nullLine(); else w.line(() => {});
    w.sizeRecord(w.nested());
    w.within(w.size, () => {
      if (limits) { slotLine(w, n.sub || []); slotLine(w, n.sup || []); } else { w.nullLine(); w.nullLine(); }
    });
    w.sizeRecord(SYM);
    w.within(SYM, () => {
      if (n.op === 'int') w.char(SYMBOL, 0x222b, 0xf2);
      else w.line(() => w.char(SYMBOL, 0x2211, 0xe5));
    });
  });
  w.expect = n.op === 'int' || true ? w.expect : w.expect;
  seq(w, n.e);
}

// ---------------------------------------------------------------- public API
/** Equation body records for a LaTeX string. */
export function latexToRecords(latex) {
  const { rows } = latexToTree(latex);
  const w = new Writer();
  if (rows.length > 1) pile(w, rows, 1); else content(w, rows[0]);
  return w.out;
}

/** The fonts a MathType equation can use for text and variables: `base` picks the template, `name` the typeface written into it. */
export const MT_FONTS = {
  times: { label: 'Times New Roman (có chân)', base: 'times', name: 'Times New Roman', family: 'times' },
  palatino: { label: 'Palatino Linotype (có chân)', base: 'palatino', name: 'Palatino Linotype', family: 'palatino' },
  cambriamath: { label: 'Cambria Math (hỗ trợ toán đầy đủ)', base: 'times', name: 'Cambria Math', family: 'cambriamath' },
  cambria: { label: 'Cambria (có chân)', base: 'times', name: 'Cambria', family: 'cambria' },
  sans: { label: 'Arial (không chân)', base: 'times', name: 'Arial', family: 'sans' },
};

/** Full size of the equation (points) as the MTEF size table writes it: units nibble 2 (pt), digits, 0xF. */
function sizeBytes(pt) {
  const v = Math.round(Math.min(72, Math.max(6, pt)) * 2) / 2;
  const [i, f] = String(v).split('.');
  const nib = [2, ...(i.length < 2 ? '0' + i : i).split('').map(Number), ...(f ? [10, Number(f)] : []), 15];
  const out = [];
  for (let k = 0; k < nib.length; k += 2) out.push((nib[k] << 4) | nib[k + 1]);
  return out;
}

function patchPrefix(prefix, { fontName, baseName, size }) {
  let out = Array.from(prefix);
  if (fontName && fontName !== baseName) {
    const find = [...baseName].map((c) => c.charCodeAt(0));
    const at = out.findIndex((_, i) => find.every((b, k) => out[i + k] === b) && out[i + find.length] === 0);
    if (at >= 0) out.splice(at, find.length, ...[...fontName].map((c) => c.charCodeAt(0)));
  }
  if (size) {
    const at = out.findIndex((b, i) => b === 0x12 && out[i + 1] === 0x00 && out[i + 2] === 0x08);   // EQN_PREFS, 8 sizes; the first is the full size
    if (at >= 0) {
      let end = at + 3;
      while (out[end] !== undefined && (out[end] & 0x0f) !== 0x0f && (out[end] >> 4) !== 0x0f) end++;   // the full size ends at its 0xF nibble
      out.splice(at + 3, end + 1 - (at + 3), ...sizeBytes(size));
    }
  }
  return Uint8Array.from(out);
}

/**
 * LaTeX -> bytes of the OLE "Equation Native" stream (28-byte header + MTEF v5).
 * options: style 'times' | 'palatino' (fonts MathType uses when the equation is edited), inline (default true).
 */
export function latexToEquationStream(latex, { style = 'times', inline = true, font = null, size = 0 } = {}) {
  let records;
  try { records = latexToRecords(latex); } catch (e) { if (e instanceof LatexError) throw new MtefWriteError(e.message); throw e; }
  const f = MT_FONTS[font] || MT_FONTS[style] || MT_FONTS.times;
  const st = STYLES[f.base] || STYLES.times;
  const baseName = f.base === 'palatino' ? 'Palatino Linotype' : 'Times New Roman';
  const prefix = patchPrefix(unb64(st.prefix), { fontName: f.name, baseName, size });
  prefix[11] = inline ? 1 : 0;   // options byte after the "DSMT7\0" application key
  const mtef = new Uint8Array(prefix.length + records.length + 1);
  mtef.set(prefix, 0);
  mtef.set(records, prefix.length);
  mtef[mtef.length - 1] = 0x00;   // END of the equation
  const header = unb64(st.header).slice();
  new DataView(header.buffer).setUint32(8, mtef.length, true);
  const out = new Uint8Array(header.length + mtef.length);
  out.set(header, 0);
  out.set(mtef, header.length);
  return out;
}
