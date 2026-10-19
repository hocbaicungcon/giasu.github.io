// MathType (MTEF v5) -> LaTeX. Line-by-line port of core/mtef.py: same tables (src/tables.js is generated from the
// Python module), same tokens, same tidy(). Anything not understood throws MtefError so the equation stays untouched.
import T from './tables.js';

export class MtefError extends Error {}

const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const BS = '\\';
const isAlpha = (s) => s.length > 0 && /^\p{L}+$/u.test(s);
const isDigit = (s) => /^[0-9]$/.test(s);
const at = (arr, i) => {   // Python's list[i] raises IndexError; undefined would silently become the text "undefined"
  if (i < 0 || i >= arr.length) throw new MtefError('missing slot');
  return arr[i];
};
const SPACE_TOKENS = new Set(T.SPACE_TOKENS);
const BINARY = new Set(T.BINARY);
const OPERATORS = new Set([...T.BINARY, '+', '-', '=', '<', '>']);
const FUNCTIONS = new Set(T.FUNCTIONS);
export { FUNCTIONS };

// ---------------------------------------------------------------- OLE compound file (just enough to read one stream)
function concat(chunks) {
  let total = 0;
  for (const c of chunks) total += c.length;
  const out = new Uint8Array(total);
  let pos = 0;
  for (const c of chunks) { out.set(c, pos); pos += c.length; }
  return out;
}

export function readOleStream(data, wanted = 'Equation Native') {
  const magic = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1];
  if (data.length < 0x200 || magic.some((b, i) => data[i] !== b)) throw new MtefError('not an OLE file');
  const dv = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const u16 = (o) => dv.getUint16(o, true);
  const u32 = (o) => dv.getUint32(o, true);
  const sectorSize = 1 << u16(0x1e);
  const miniSize = 1 << u16(0x20);
  const fatCount = u32(0x2c), dirStart = u32(0x30);
  const cutoff = u32(0x38), miniStart = u32(0x3c);
  const difatStart = u32(0x44), difatCount = u32(0x48);
  const sector = (index) => {
    const start = (index + 1) * sectorSize;
    const chunk = data.subarray(start, start + sectorSize);
    if (chunk.length < sectorSize) throw new MtefError('truncated OLE file');
    return chunk;
  };
  const words = (chunk) => {
    const v = new DataView(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    const out = [];
    for (let o = 0; o + 4 <= chunk.length; o += 4) out.push(v.getUint32(o, true));
    return out;
  };
  let fatSectors = [];
  for (let i = 0; i < 109; i++) fatSectors.push(u32(0x4c + 4 * i));
  let index = difatStart;
  for (let n = 0; n < difatCount; n++) {
    if (index >= 0xfffffffa) break;
    const block = words(sector(index));
    fatSectors = fatSectors.concat(block.slice(0, -1));
    index = block[block.length - 1];
  }
  let fat = [];
  for (const item of fatSectors.slice(0, fatCount)) {
    if (item >= 0xfffffffa) continue;
    fat = fat.concat(words(sector(item)));
  }
  const chain = (first, table = fat) => {
    const out = [], seen = new Set();
    while (first < 0xfffffffa && !seen.has(first) && first < table.length) {
      seen.add(first);
      out.push(first);
      first = table[first];
    }
    return out;
  };
  const directory = concat(chain(dirStart).map(sector));
  const dirView = new DataView(directory.buffer, directory.byteOffset, directory.byteLength);
  const entries = [];
  for (let offset = 0; offset <= directory.length - 128; offset += 128) {
    const length = dirView.getUint16(offset + 64, true);
    let name = '';
    for (let k = 0; k < Math.max(length - 2, 0); k += 2) {
      if (k + 1 < Math.max(length - 2, 0)) name += String.fromCharCode(dirView.getUint16(offset + k, true));
      else name += String.fromCharCode(0xfffd);
    }
    entries.push([name, directory[offset + 66], dirView.getUint32(offset + 116, true), dirView.getUint32(offset + 120, true)]);
  }
  if (!entries.length) throw new MtefError('empty directory');
  const root = entries[0];
  const target = entries.slice(1).find((e) => e[0] === wanted);
  if (!target) throw new MtefError('no Equation Native stream');
  const [, , start, size] = target;
  let out;
  if (size < cutoff) {
    let miniFat = [];
    for (const item of chain(miniStart)) miniFat = miniFat.concat(words(sector(item)));
    const container = concat(chain(root[2]).map(sector));
    out = concat(chain(start, miniFat).map((i) => container.subarray(i * miniSize, (i + 1) * miniSize)));
  } else {
    out = concat(chain(start).map(sector));
  }
  return out.subarray(0, size);
}

export function mtefFromOle(data) {
  const stream = readOleStream(data);
  if (stream.length < 2) throw new MtefError('short stream');
  const header = stream[0] | (stream[1] << 8);
  return stream.subarray(header);
}

// ---------------------------------------------------------------- MTEF parsing
class Reader {
  constructor(data) { this.data = data; this.pos = 0; }
  byte() {
    if (this.pos >= this.data.length) throw new MtefError('unexpected end');
    return this.data[this.pos++];
  }
  word() { const lo = this.byte(); return lo | (this.byte() << 8); }
  unsigned() { const v = this.byte(); return v === 255 ? this.word() : v; }
  cstring() {
    let out = '';
    for (;;) {
      const v = this.byte();
      if (v === 0) return out;
      out += String.fromCharCode(v);
    }
  }
  skip(count) {
    this.pos += count;
    if (this.pos > this.data.length) throw new MtefError('unexpected end');
  }
}

const [END, LINE, CHAR, TMPL, PILE, MATRIX, EMBELL, RULER, FONT_STYLE_DEF, SIZE] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [COLOR, COLOR_DEF, FONT_DEF, EQN_PREFS, ENCODING_DEF] = [15, 16, 17, 18, 19];

function nudge(reader, opt) {
  if (opt & 0x08) {
    const dx = reader.byte(), dy = reader.byte();
    if (dx === 128 && dy === 128) reader.skip(4);
  }
}

function dimensionArray(reader) {
  const count = reader.byte();
  let seen = 0;
  while (seen < count) {   // units nibble, value nibbles, 0xF terminator
    const value = reader.byte();
    for (const nibble of [value >> 4, value & 15]) if (nibble === 15) seen++;
    if (seen >= count) break;
  }
}

function parsePrefs(reader) {
  reader.byte();
  dimensionArray(reader);
  dimensionArray(reader);
  const count = reader.byte();
  for (let i = 0; i < count; i++) {
    const index = reader.byte();
    if (index) reader.byte();
  }
}

function parseRuler(reader) {
  const n = reader.byte();
  for (let i = 0; i < n; i++) { reader.byte(); reader.word(); }
}

export class Parser {
  constructor(data) { this.r = new Reader(data); this.fonts = new Map(); }

  parse() {
    const r = this.r;
    if (r.byte() !== 5) throw new MtefError('only MTEF version 5 is supported');
    r.skip(3);
    r.byte();
    r.cstring();
    const options = r.byte();
    let root = null;
    for (;;) {
      const node = this.record(true);
      if (node === 'END') break;
      if (node !== null && root === null && (node[0] === 'line' || node[0] === 'pile')) root = node;
    }
    if (root === null) root = ['line', []];
    return [root, Boolean(options & 1)];
  }

  objects() {
    const out = [];
    for (;;) {
      const node = this.record(false);
      if (node === 'END') return out;
      if (node !== null) out.push(node);
    }
  }

  record(top) {
    const start = this.r.pos;
    const node = this.recordInner(top);
    if (Array.isArray(node)) node.span = [start, this.r.pos];   // byte range, for the analysis tools
    return node;
  }

  recordInner(top) {
    const r = this.r;
    if (r.pos >= r.data.length) {
      if (top) return 'END';
      throw new MtefError('missing END');
    }
    const kind = r.byte();
    if (kind === END) return 'END';
    if (kind === LINE) {
      const opt = r.byte();
      nudge(r, opt);
      if (opt & 0x04) r.word();
      if (opt & 0x02) parseRuler(r);
      if (opt & 0x01) return ['line', []];
      return ['line', this.objects()];
    }
    if (kind === CHAR) {
      const opt = r.byte();
      nudge(r, opt);
      const face = r.byte() - 128;
      const code = !(opt & 0x20) ? r.word() : null;
      const char8 = opt & 0x04 ? r.byte() : null;
      const char16 = opt & 0x10 ? r.word() : null;
      const embells = [];
      if (opt & 0x01) {
        for (;;) {
          if (r.pos < r.data.length && r.data[r.pos] === EMBELL) {
            r.byte();
            const eopt = r.byte();
            nudge(r, eopt);
            embells.push(r.byte());
          } else if (r.pos < r.data.length && r.data[r.pos] === END) {
            r.byte();
            break;
          } else if (this.record(false) !== null) {
            throw new MtefError('embellishment expected');
          }
        }
      }
      return ['char', face, code, char8, char16, embells, Boolean(opt & 0x02), this.fonts.get(-face)];
    }
    if (kind === TMPL) {
      const opt = r.byte();
      nudge(r, opt);
      const selector = r.byte();
      let variation = r.byte();
      if (variation & 0x80) variation = (variation & 0x7f) | (r.byte() << 8);
      r.byte();
      return ['tmpl', selector, variation, this.objects()];
    }
    if (kind === PILE) {
      const opt = r.byte();
      nudge(r, opt);
      const halign = r.byte();
      r.byte();
      if (opt & 0x02) parseRuler(r);
      return ['pile', halign, this.objects()];
    }
    if (kind === MATRIX) {
      const opt = r.byte();
      nudge(r, opt);
      r.byte(); r.byte(); r.byte();
      const rows = r.byte(), cols = r.byte();
      r.skip(Math.floor((rows + 1) * 2 / 8) + (((rows + 1) * 2) % 8 ? 1 : 0));
      r.skip(Math.floor((cols + 1) * 2 / 8) + (((cols + 1) * 2) % 8 ? 1 : 0));
      return ['matrix', rows, cols, this.objects()];
    }
    if (kind === EMBELL) {
      const opt = r.byte();
      nudge(r, opt);
      r.byte();
      return null;
    }
    if (kind === RULER) { parseRuler(r); return null; }
    if (kind === FONT_STYLE_DEF) { r.unsigned(); r.byte(); return null; }
    if (kind === SIZE) {
      const first = r.byte();
      if (first === 101) r.word();
      else if (first === 100) { r.byte(); r.word(); }
      else r.byte();
      return null;
    }
    if (kind >= 10 && kind <= 14) return null;
    if (kind === COLOR) { r.unsigned(); return null; }
    if (kind === COLOR_DEF) {
      const opt = r.byte();
      const n = opt & 1 ? 4 : 3;
      for (let i = 0; i < n; i++) r.word();
      if (opt & 4) r.cstring();
      return null;
    }
    if (kind === FONT_DEF) {
      const index = this.fonts.size + 1;
      r.unsigned();
      this.fonts.set(index, r.cstring());
      return null;
    }
    if (kind === EQN_PREFS) { parsePrefs(r); return null; }
    if (kind === ENCODING_DEF) { r.cstring(); return null; }
    if (kind >= 100) { r.skip(r.unsigned()); return null; }
    throw new MtefError(`unknown record ${kind}`);
  }
}

// ---------------------------------------------------------------- LaTeX rendering
const fail = (message) => { throw new MtefError(message); };
const hex4 = (v) => v.toString(16).toUpperCase().padStart(4, '0');
const TEXT_ESC = (word) => [...word].map((c) => (has(T.TEXT_ESCAPES, c) ? T.TEXT_ESCAPES[c] : c)).join('');
const strip = (s) => s.trim();

function isPlain(font) { return !/symbol|extra|mt|wingding/i.test(font); }

function glyph(char, value) {
  if (has(T.GREEK_LOWER, char)) return T.GREEK_LOWER[char];
  if (has(T.GREEK_UPPER, char)) return T.GREEK_UPPER[char];
  if (has(T.SYMBOLS, String(value))) return T.SYMBOLS[String(value)];
  if (has(T.ASCII_ESCAPES, char)) return T.ASCII_ESCAPES[char];
  if (value < 128) return char;
  if (value > 127 && isAlpha(char)) return `${BS}text{${char}}`;
  return fail(`unknown character U+${hex4(value)}`);
}

function classify(node) {
  const [, face, code, char8, char16, , , font] = node;
  const value = code !== null ? code : (char16 !== null ? char16 : char8);
  if (value === null) fail('character without code');
  if (face === 24) return ['math', has(T.SPACES, String(value)) ? T.SPACES[String(value)] : (value ? `${BS},` : '')];
  if (face === 22 || face === 23) return ['skip', ''];
  const char = String.fromCharCode(value);
  if (value === 0xad) return ['skip', ''];
  if (has(T.SPACES, String(value)) && value !== 0x20 && face !== 24) return ['math', T.SPACES[String(value)]];
  if (value >= 0xe000) {
    if (value === 0xeb01 || value === 0xeb02 || value === 0xeb03 || value === 0xf700) return ['skip', ''];
    if (value === 0xe98f) return ['math', `${BS}bullet`];
    fail(`private character U+${hex4(value)}`);
  }
  if (face === 2 && isAlpha(char)) return ['func', char];
  if (face === 1 || (face < 0 && font && isPlain(font))) {
    if (has(T.SYMBOLS, String(value)) || has(T.GREEK_LOWER, char) || has(T.GREEK_UPPER, char)) return ['math', glyph(char, value)];
    return ['text', char];
  }
  if (face === 7) return ['math', `${BS}mathbf{${glyph(char, value)}}`];
  return ['math', glyph(char, value)];
}

function embellish(body, embells) {
  for (const kind of embells) {
    if (has(T.EMBELLISHMENTS, String(kind))) {
      body = T.EMBELLISHMENTS[String(kind)].replace('%s', () => body);
    } else if (kind === 10) {
      body = body === `${BS}in` ? `${BS}notin` : (body === '=' ? `${BS}neq` : `${BS}not` + body);
    } else if (kind === 5 || kind === 6 || kind === 18) {
      body += "'".repeat({ 5: 1, 6: 2, 18: 3 }[kind]);
    } else fail(`embellishment ${kind}`);
  }
  return body;
}

export function join(parts, keepSpaces = false) {
  const tokens = [];
  for (const part of parts) {
    if (part && part.trim()) tokens.push(part.trim() === BS ? `${BS} ` : part.trim());
  }
  const cleaned = [];
  tokens.forEach((token0, index) => {
    let token = token0;
    const before = cleaned.length ? cleaned[cleaned.length - 1] : '';
    const after = index + 1 < tokens.length ? tokens[index + 1] : '';
    if (!keepSpaces && SPACE_TOKENS.has(token) && (before === ',' || before === ';' || after === ',' || after === ';' || SPACE_TOKENS.has(before) ||
        OPERATORS.has(before) || OPERATORS.has(after) || (before.length === 1 && isAlpha(before) && after.length === 1 && isAlpha(after)))) {
      return;
    }
    if (token === ',' && isDigit(before.slice(-1)) && isDigit(after.slice(0, 1))) token = '{,}';
    cleaned.push(token);
  });
  while (!keepSpaces && cleaned.length && SPACE_TOKENS.has(cleaned[0])) cleaned.shift();
  while (!keepSpaces && cleaned.length && SPACE_TOKENS.has(cleaned[cleaned.length - 1])) cleaned.pop();
  let out = '', previous = '';
  for (const token of cleaned) {
    if (out) out += separator(previous, token, out);
    out += token;
    previous = token;
  }
  return out.trim();
}

function separator(previous, token, built) {
  if (token === ',' || token === ';' || token === '{,}' || previous === '{,}') return '';
  if (previous === ',' || previous === ';') return ' ';
  if (token === ')' || token === ']' || token === '|' || ['(', '[', '|', `${BS}{`].includes(previous) ||
      previous.endsWith(`${BS}left(`) || previous.endsWith(`${BS}left[`)) return '';
  if (['+', '-', '=', '<', '>'].includes(token) || BINARY.has(token)) return ' ';
  if (['=', '<', '>'].includes(previous) || BINARY.has(previous)) return ' ';
  if (previous === '+' || previous === '-') {
    const before = built.slice(0, built.length - previous.length).trimEnd();
    const last = before.slice(-1);
    if (!before || ('([;=<>+-|{'.includes(last) && last !== '') || (last === ',' && !before.endsWith(`${BS},`)) ||
        [...BINARY].some((item) => before.endsWith(item)) ||
        before.endsWith(`${BS}left(`) || before.endsWith(`${BS}left[`) || before.endsWith(`${BS}left${BS}{`) || before.endsWith(`${BS}left|`)) return '';
    return ' ';
  }
  if (/\\[A-Za-z]+$/.test(previous) && /^\p{L}/u.test(token.slice(0, 1))) return ' ';
  return '';
}

const protect = (cell) => (cell.trimStart().startsWith('[') ? '{}' + cell : cell);

function slot(node) {
  if (node[0] === 'line') return line(node[1]);
  if (node[0] === 'pile') return block(node);
  if (node[0] === 'char') return line([node]);
  return fail('bad slot');
}
const slots = (children) => children.filter((c) => c[0] === 'line' || c[0] === 'pile');

function block(node) {
  if (node[0] === 'line') return line(node[1]);
  if (node[0] === 'pile') {
    const align = { 1: 'l', 2: 'c', 3: 'r', 4: 'l', 5: 'c' }[node[1]] || 'c';
    const rows = node[2].filter((c) => c[0] === 'line' || c[0] === 'pile').map((c) => protect(slot(c)));
    if (rows.length === 1) return rows[0];
    return `${BS}begin{array}{${align}} ${rows.join(` ${BS}${BS} `)} ${BS}end{array}`;
  }
  if (node[0] === 'matrix') {
    const [, rows, cols, children] = node;
    const cells = slots(children).map((c) => protect(slot(c)));
    if (cells.length !== rows * cols) fail('matrix size');
    const table = [];
    for (let r = 0; r < rows; r++) table.push(cells.slice(r * cols, (r + 1) * cols).join(' & '));
    return `${BS}begin{array}{${'c'.repeat(cols)}} ${table.join(` ${BS}${BS} `)} ${BS}end{array}`;
  }
  return fail('bad block');
}

function line(nodes) {
  const parts = [];
  let index = 0;
  while (index < nodes.length) {
    const node = nodes[index];
    const tag = node[0];
    if (tag === 'char') {
      const [kind, payload] = classify(node);
      if (kind === 'skip') { index++; continue; }
      if (kind === 'text' || kind === 'func') {
        const run = [payload];
        while (index + 1 < nodes.length && nodes[index + 1][0] === 'char' && !nodes[index + 1][5].length) {
          const [nxtKind, nxt] = classify(nodes[index + 1]);
          if (nxtKind !== kind) break;
          run.push(nxt);
          index++;
        }
        const word = run.join('');
        if (kind === 'func') {
          if (FUNCTIONS.has(word)) parts.push(BS + word + ' ');
          else if (has(T.FUNCTION_ALIASES, word)) parts.push(T.FUNCTION_ALIASES[word] + ' ');
          else parts.push(`${BS}mathrm{${TEXT_ESC(word)}}`);
        } else parts.push(`${BS}text{${TEXT_ESC(word)}}`);
      } else {
        parts.push(node[5].length ? embellish(payload, node[5]) : payload);
      }
    } else if (tag === 'tmpl') {
      template(node, parts);
    } else if (tag === 'pile' || tag === 'matrix' || tag === 'line') {
      parts.push(block(node));
    }
    index++;
  }
  return join(parts);
}

const SCRIPT_RE_SUP = /\^(?:[^\s{}]|\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})$/;
const SCRIPT_RE_SUB = /_(?:[^\s{}]|\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})(?:\^(?:[^\s{}]|\{[^{}]*\}))?$/;

function template(node, parts) {
  const [, selector, variation, children] = node;
  const text = slots(children).map(slot);
  if (has(T.FENCES, String(selector))) {
    if (!text.length) fail('empty fence');
    let [left, right] = T.FENCES[String(selector)];
    const hasLeft = Boolean(variation & 1), hasRight = Boolean(variation & 2);
    if (selector === 8) [left, right] = ['[', ']'];
    parts.push(`${BS}left${hasLeft ? left : '.'} ${text[0]} ${BS}right${hasRight ? right : '.'}`);
    return;
  }
  if (selector === 10) {
    if (variation === 0) parts.push(`${BS}sqrt{${at(text, 0)}}`);
    else if (text.length >= 2) parts.push(`${BS}sqrt[${text[1]}]{${text[0]}}`);
    else fail('root');
    return;
  }
  if (selector === 11) {
    if (text.length < 2) fail('fraction');
    parts.push(!(variation & 0x02) ? `${BS}frac{${text[0]}}{${text[1]}}` : `{${text[0]}}/{${text[1]}}`);
    return;
  }
  if (selector === 12) { parts.push(`${BS}underline{${at(text, 0)}}`); return; }
  if (selector === 13) { parts.push(`${BS}overline{${at(text, 0)}}`); return; }
  if (has(T.BIG_OPS, String(selector))) {
    if (text.length < 1) fail('big operator');
    const main = text[0];
    const lower = text.length > 1 ? text[1] : '';
    const upper = text.length > 2 ? text[2] : '';
    let op = T.BIG_OPS[String(selector)];
    if (selector === 15) {
      const count = variation & 3;
      op = { 2: `${BS}iint`, 3: `${BS}iiint` }[count] || `${BS}int`;
      if (variation & 0x0c) fail('loop integral');
    }
    const scripts = (lower ? `_{${lower}}` : '') + (upper ? `^{${upper}}` : '');
    parts.push(`${op}${scripts} ${main}`);
    return;
  }
  if (selector === 9 || selector === 14) {
    const marks = children.filter((c) => c[0] === 'char' && c[2]).map((c) => String.fromCharCode(c[2]));
    if (selector === 9) {
      const pairs = { '(': '(', ')': ')', '[': '[', ']': ']', '{': `${BS}{`, '}': `${BS}}`, '\u27e8': `${BS}langle`, '\u27e9': `${BS}rangle`, '|': '|' };
      if (marks.length < 2 || !has(pairs, marks[0]) || !has(pairs, marks[1]) || !text.length) fail('interval');
      parts.push(`${BS}left${pairs[marks[0]]} ${text[0]} ${BS}right${pairs[marks[1]]}`);
      return;
    }
    if (!marks.length) fail('arrow');
    const last = marks[marks.length - 1];
    const g = (marks[0] === '\u21c0' && marks[1] === '\u21bd') ? `${BS}rightleftharpoons` : glyph(last, last.charCodeAt(0));
    const top = text.length ? text[0] : '';
    const bottom = text.length > 1 ? text[1] : '';
    if (!top && !bottom) parts.push(g);
    else if (g === `${BS}rightarrow` || g === `${BS}leftarrow`) {
      parts.push((g === `${BS}rightarrow` ? `${BS}xrightarrow` : `${BS}xleftarrow`) + (bottom ? `[${bottom}]` : '') + `{${top}}`);
    } else {
      parts.push(!bottom ? `${BS}overset{${top}}{${g}}` : `${BS}underset{${bottom}}{${BS}overset{${top}}{${g}}}`);
    }
    return;
  }
  if (selector === 23) {
    const main = text.length ? text[0] : '';
    const lower = text.length > 1 ? text[1] : '';
    const upper = text.length > 2 ? text[2] : '';
    const body = main.trim();
    if ([`${BS}lim`, `${BS}max`, `${BS}min`, `${BS}sup`, `${BS}inf`].includes(body)) {
      parts.push(body + (lower ? `_{${lower}}` : '') + (upper ? `^{${upper}}` : ''));
    } else parts.push(lower ? `${BS}underset{${lower}}{${main}}` : main);
    return;
  }
  if (selector === 25) fail('unverified template 25');
  if (selector === 24) {
    if (text.length < 2) fail('brace');
    parts.push(variation & 1 ? `${BS}overbrace{${text[0]}}^{${text[1]}}` : `${BS}underbrace{${text[0]}}_{${text[1]}}`);
    return;
  }
  if (selector === 27 || selector === 28 || selector === 29) {
    const nonempty = text.filter((v) => v);
    let sub, sup;
    if (selector === 29) [sub, sup] = [...text, '', ''].slice(0, 2);
    else if (selector === 27) { sub = nonempty.length ? nonempty[0] : ''; sup = ''; }
    else { sub = ''; sup = nonempty.length ? nonempty[nonempty.length - 1] : ''; }
    if (!parts.length) parts.push('{}');
    let previous = parts[parts.length - 1];
    if ((sup && SCRIPT_RE_SUP.test(previous)) || (sub && SCRIPT_RE_SUB.test(previous))) previous = '{' + previous + '}';
    const suffix = (sub ? `_{${sub}}` : '') + (sup ? `^{${sup}}` : '');
    parts[parts.length - 1] = previous.trimEnd() + suffix;
    return;
  }
  if (selector === 31) {
    if (!text.length) fail('vector');
    const body = text[0];
    if (variation !== 2) fail('vector variant');
    parts.push(body.length > 1 ? `${BS}overrightarrow{${body}}` : `${BS}vec{${body}}`);
    return;
  }
  if (selector === 32) { parts.push(`${BS}widehat{${at(text, 0)}}`); return; }
  if (selector === 33) { parts.push(`${BS}overset{${BS}frown}{${at(text, 0)}}`); return; }
  if (selector === 34) { parts.push(`${BS}widetilde{${at(text, 0)}}`); return; }
  if (selector === 37) { parts.push(`${BS}boxed{${at(text, 0)}}`); return; }
  fail(`template ${selector}/${variation}`);
}

// ---------------------------------------------------------------- tidy()
function groupEnd(text, start) {
  let depth = 0;
  for (let index = start; index < text.length; index++) {
    const char = text[index];
    if (char === BS) continue;
    if (text.slice(index - 1, index) === BS) continue;   // slice(-1, 0) is '' like Python's text[-1:0]
    if (char === '{') depth++;
    else if (char === '}') {
      depth--;
      if (depth === 0) return index;
    }
  }
  return -1;
}

function unwrapDoubleBraces(text) {
  let changed = true;
  while (changed) {
    changed = false;
    let from = 0;
    for (;;) {   // re.finditer(r'(?<!\\)\{\{') without lookbehind: matches never overlap
      const found = text.indexOf('{{', from);
      if (found < 0) break;
      if (found > 0 && text[found - 1] === BS) { from = found + 1; continue; }
      const outer = found, inner = found + 1;
      const outerEnd = groupEnd(text, outer), innerEnd = groupEnd(text, inner);
      if (outerEnd > 0 && innerEnd === outerEnd - 1 && text.slice(outer - 1, outer) !== BS) {
        text = text.slice(0, outer + 1) + text.slice(inner + 1, innerEnd) + text.slice(outerEnd);
        changed = true;
        break;
      }
      from = found + 2;
    }
  }
  return text;
}

function simplifyFences(text) {
  for (;;) {
    const simpler = simplifyFencesOnce(text);
    if (simpler === text) return text;
    text = simpler;
  }
}

function simplifyFencesOnce(text) {
  const pattern = /\\left(\\\{|\(|\[|\||\\\|)/g;
  let position = 0;
  for (;;) {
    pattern.lastIndex = position;
    const match = pattern.exec(text);
    if (!match) return text;
    let depth = 1, index = match.index + match[0].length, end = -1;
    while (index < text.length) {
      const opener = text.indexOf(`${BS}left`, index), closer = text.indexOf(`${BS}right`, index);
      if (closer < 0) break;
      if (opener >= 0 && opener < closer) { depth++; index = opener + 5; continue; }
      depth--;
      if (depth === 0) { end = closer; break; }
      index = closer + 6;
    }
    const matchEnd = match.index + match[0].length;
    if (end < 0) { position = matchEnd; continue; }
    const close = /^\\right(\\\{|\\\}|\)|\]|\||\\\||\.)/.exec(text.slice(end));
    const inner = text.slice(matchEnd, end);
    if (!close || close[1] === '.' || T.TALL.some((w) => inner.includes(w)) || /\^\{[^{}]{6,}\}|_\{[^{}]{6,}\}/.test(inner)) {
      position = matchEnd;
      continue;
    }
    text = text.slice(0, match.index) + match[1] + inner.trim() + close[1] + text.slice(end + close[0].length);
    position = match.index + 1;
  }
}

export function tidy(latex, keepSpaces = false) {
  const held = [];
  const S1 = String.fromCharCode(1), S2 = String.fromCharCode(2);
  let text = latex.replace(/\\(?:text|mathrm)\{[^{}]*\}/g, (m) => { held.push(m); return `${S1}${held.length - 1}${S2}`; });
  text = text.replace(/\^\{([A-Za-z0-9])\}/g, '^$1');
  text = text.replace(/_\{([A-Za-z0-9])\}/g, '_$1');
  text = unwrapDoubleBraces(text);
  text = simplifyFences(text);
  if (!keepSpaces) {   // MathType's manual spacing is noise; typed spacing in a Word equation is kept
    text = text.replace(/\s*\\,\s*(?=[+\-=<>}\)\]]|$)/g, '');
    text = text.replace(/([({\[+\-=<>])\s*\\,\s*/g, '$1');
    text = text.replace(/^(?:\s*\\[ ,;:]|\s*\\quad)+\s*/, '');
    text = text.replace(/(?:\\[ ,;:]|\\quad)\s*$/, '');
  }
  text = text.replace(/\{\s+/g, '{');
  text = text.replace(/\s+\}/g, '}');
  text = text.replace(/\s+/g, ' ').trim();
  return text.replace(new RegExp(`${S1}(\\d+)${S2}`, 'g'), (_m, i) => held[Number(i)]);
}

/** MTEF bytes -> [latex, isInline]. Throws MtefError when anything is not understood. */
export function mtefToLatex(data) {
  try {
    const parser = new Parser(data);
    const [root, inline] = parser.parse();
    return [tidy(block(root)), inline];
  } catch (error) {
    if (error instanceof MtefError) throw error;
    throw new MtefError(error instanceof RangeError ? 'too deep or truncated' : `bad MTEF: ${error.message}`);
  }
}

export function oleToLatex(data) {
  return mtefToLatex(mtefFromOle(data));
}

export { join as renderJoin };
