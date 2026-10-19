// LaTeX -> OMML (Word's native equation XML). Own small parser for the closed vocabulary that the MTEF renderer
// emits (\frac, \sqrt, \left..\right, array, scripts, \overset, accents, big operators, functions, \text ...) plus the
// usual hand-typed LaTeX. Unknown commands throw LatexError so nothing is written for them.
import T from './tables.js';
import { escapeXml } from './xml.js';

export class LatexError extends Error {}
const BS = '\\';
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const cp = (n) => String.fromCodePoint(n);

// ---------------------------------------------------------------- symbol tables (inverse of the renderer's tables)
const CMD = {};   // control word -> unicode text
for (const [code, latex] of Object.entries(T.SYMBOLS)) {
  const m = /^\\([A-Za-z]+)$/.exec(latex);
  if (m && !has(CMD, m[1])) CMD[m[1]] = cp(Number(code));
}
Object.assign(CMD, { cdot: '\u22c5', bullet: '\u2219', circ: '\u2218', ast: '\u2217', ldots: '\u2026', dots: '\u2026', cdots: '\u22ef',
  to: '\u2192', le: '\u2264', ge: '\u2265', ne: '\u2260', gets: '\u2190', land: '\u2227', lor: '\u2228', lnot: '\u00ac', iff: '\u21d4',
  implies: '\u21d2', lbrace: '{', rbrace: '}', langle: '\u27e8', rangle: '\u27e9', lfloor: '\u230a', rfloor: '\u230b', lceil: '\u2308',
  rceil: '\u2309', prime: '\u2032', degree: '\u00b0', Box: '\u25a1', square: '\u25a1', oint: '\u222e', neq: '\u2260', vert: '|',
  Vert: '\u2016', mid: '\u2223', sim: '\u223c', setminus: '\u2216', backslash: '\\', emptyset: '\u2205', varnothing: '\u2205',
  triangle: '\u25b3', lVert: '\u2016', rVert: '\u2016', Re: 'Re', Im: 'Im' });
const GREEK = {};
for (const map of [T.GREEK_LOWER, T.GREEK_UPPER]) for (const [ch, name] of Object.entries(map)) {
  const m = /^\\([A-Za-z]+)$/.exec(name);
  if (m && !has(GREEK, m[1])) GREEK[m[1]] = ch;
}
const SPACE_CMD = { ',': '\u2009', ';': '\u2005', ':': '\u2005', ' ': ' ', quad: '\u2003', qquad: '\u2003\u2003', '!': '' };
const NARY_OPS = { sum: '\u2211', prod: '\u220f', coprod: '\u2210', int: '\u222b', iint: '\u222c', iiint: '\u222d', oint: '\u222e',
  bigcup: '\u22c3', bigcap: '\u22c2', bigwedge: '\u22c0', bigvee: '\u22c1' };
const SIDE_LIMITS = new Set(['int', 'iint', 'iiint', 'oint']);
const LIMIT_FUNCS = new Set(['lim', 'max', 'min', 'sup', 'inf']);
const FUNCS = new Set(T.FUNCTIONS);
const ACCENT = { hat: '\u0302', tilde: '\u0303', dot: '\u0307', ddot: '\u0308', vec: '\u20d7', check: '\u030c', acute: '\u0301',
  grave: '\u0300', breve: '\u0306', widehat: '\u0302', widetilde: '\u0303', bar: '\u0305', overrightarrow: '\u20d7', dddot: '\u20db' };
const LONG_ARROW = { overleftarrow: '\u2190', overleftrightarrow: '\u2194' };
const BB = { R: '\u211d', N: '\u2115', Z: '\u2124', Q: '\u211a', C: '\u2102', H: '\u210d', P: '\u2119' };
const FENCE_NAMES = { '(': '(', ')': ')', '[': '[', ']': ']', '|': '|', '.': '', '/': '/', '<': '\u27e8', '>': '\u27e9' };
const REL = new Set([...'=<>', ...'\u2264\u2265\u2260\u2248\u2261\u223c\u2243\u2245\u221d\u226a\u226b\u2a7d\u2a7e\u2208\u2209\u220b\u2282\u2283\u2286\u2287\u2192\u2190\u2194\u21d2\u21d0\u21d4\u27f6\u27f9\u27fa\u21a6\u2225\u22a5\u2226']);
const ADD = new Set([...'+-\u2212\u00b1\u2213']);
const SEP = new Set([',', ';']);
const MUL = new Set([...'\u00d7\u22c5\u00b7\u00f7\u2217']);

// ---------------------------------------------------------------- parser -> small tree
class Parser {
  constructor(src) { this.s = src; this.i = 0; }
  ws() { while (this.i < this.s.length && /\s/.test(this.s[this.i])) this.i++; }
  eof() { this.ws(); return this.i >= this.s.length; }
  peekCs() {   // control sequence name at i, without consuming
    this.ws();
    if (this.s[this.i] !== BS) return null;
    const m = /^\\([A-Za-z]+|.)/s.exec(this.s.slice(this.i));
    return m ? m[1] : null;
  }
  atStop() {
    this.ws();
    const c = this.s[this.i];
    if (c === undefined || c === '}' || c === '&') return true;
    const cs = this.peekCs();
    return cs === BS || cs === 'right' || cs === 'end' || cs === 'middle';
  }
  seq() {
    const nodes = [];
    while (!this.atStop()) nodes.push(this.item());
    return nodes;
  }
  item() {   // one atom with its scripts
    this.ws();
    let atom = this.atom();
    let sub = null, sup = null;
    for (;;) {
      this.ws();
      const c = this.s[this.i];
      if (c === '^' && !sup) { this.i++; sup = this.arg(true); } else if (c === '_' && !sub) { this.i++; sub = this.arg(true); } else break;
    }
    if (atom.k === 'pendNary' || atom.k === 'pendFunc') { atom.sub = sub; atom.sup = sup; return atom; }
    if (sub || sup) return { k: 'script', base: atom, sub, sup };
    return atom;
  }
  arg(inScript = false) {   // {group} or a single token
    this.ws();
    if (this.s[this.i] === '{') { this.i++; const nodes = this.seq(); this.expect('}'); return inScript ? this.degree(nodes) : nodes; }
    if (this.i >= this.s.length) throw new LatexError('missing argument');
    const atom = this.atom();
    return inScript ? this.degree([atom]) : [atom];
  }
  degree(nodes) { return nodes; }
  expect(ch) {
    this.ws();
    if (this.s[this.i] !== ch) throw new LatexError(`expected ${ch}`);
    this.i++;
  }
  raw() {   // {text} with nested braces, returned verbatim
    this.ws();
    if (this.s[this.i] !== '{') throw new LatexError('expected {');
    let depth = 0;
    const start = this.i + 1;
    for (; this.i < this.s.length; this.i++) {
      const c = this.s[this.i];
      if (c === BS) { this.i++; continue; }
      if (c === '{') depth++;
      else if (c === '}' && --depth === 0) { const text = this.s.slice(start, this.i); this.i++; return text; }
    }
    throw new LatexError('unbalanced braces');
  }
  run(text, sty = '') { return { k: 'run', text, sty }; }
  delim() {
    this.ws();
    const c = this.s[this.i];
    if (c === BS) {
      const cs = this.peekCs();
      this.i += 1 + cs.length;
      if (cs === '{' || cs === 'lbrace') return '{';
      if (cs === '}' || cs === 'rbrace') return '}';
      if (cs === '|' || cs === 'Vert' || cs === 'lVert' || cs === 'rVert') return '\u2016';
      if (has(CMD, cs) && /^[\u2308\u2309\u230a\u230b\u27e8\u27e9]$/.test(CMD[cs])) return CMD[cs];
      if (cs === 'vert') return '|';
      throw new LatexError('delimiter \\' + cs);
    }
    this.i++;
    if (has(FENCE_NAMES, c)) return FENCE_NAMES[c];
    throw new LatexError('delimiter ' + c);
  }
  atom() {
    this.ws();
    const c = this.s[this.i];
    if (c === '{') { this.i++; const nodes = this.seq(); this.expect('}'); return { k: 'group', nodes }; }
    if (c === '^' || c === '_') return { k: 'group', nodes: [] };   // script without a base: {}_a^b X
    if (c === "'") { this.i++; return this.run('\u2032'); }
    if (c === '~') { this.i++; return this.run('\u00a0'); }
    if (c === '$') { this.i++; return { k: 'group', nodes: [] }; }
    if (c !== BS) {
      const ch = String.fromCodePoint(this.s.codePointAt(this.i));
      this.i += ch.length;
      if ((ch === ',' || ch === ';') && /\s/.test(this.s[this.i] || '')) return this.run(ch + ' ');   // "1, 2": the space after a comma is typed, keep it
      return this.run(ch === '-' ? '\u2212' : ch);   // typeset minus, as Word does
    }
    const m = /^\\([A-Za-z]+|.)/s.exec(this.s.slice(this.i));
    const name = m[1];
    this.i += m[0].length;
    return this.command(name);
  }
  command(name) {
    if (name === 'frac' || name === 'dfrac' || name === 'tfrac') return { k: 'f', num: this.arg(), den: this.arg() };
    if (name === 'binom' || name === 'dbinom') return { k: 'd', beg: '(', end: ')', items: [[{ k: 'f', num: this.arg(), den: this.arg(), noBar: true }]] };
    if (name === 'sqrt') {
      this.ws();
      let deg = null;
      if (this.s[this.i] === '[') {
        const close = this.s.indexOf(']', this.i);
        if (close < 0) throw new LatexError('unbalanced [');
        const inner = new Parser(this.s.slice(this.i + 1, close));
        deg = inner.seq();
        this.i = close + 1;
      }
      return { k: 'rad', deg, e: this.arg() };
    }
    if (name === 'left') {
      const beg = this.delim();
      const items = [this.seq()];
      let sep = null;
      while (this.peekCs() === 'middle') { this.i += 7; sep = this.delim(); items.push(this.seq()); }
      if (this.peekCs() !== 'right') throw new LatexError('missing \\right');
      this.i += 6;
      const end = this.delim();
      return { k: 'd', beg, end, sep, items };
    }
    if (name === 'begin') return this.environment(this.raw().trim());
    if (name === 'text' || name === 'textrm' || name === 'mbox' || name === 'textnormal') {
      return this.run(this.raw().replace(/\\([%&#$_{}])/g, '$1').replace(/\\ /g, ' '), 'nor');
    }
    if (name === 'mathrm' || name === 'operatorname' || name === 'mathbf' || name === 'boldsymbol' || name === 'mathit' || name === 'bm' ||
        name === 'mathbb' || name === 'mathcal' || name === 'mathsf' || name === 'mathtt' || name === 'mathfrak' || name === 'textbf' || name === 'mathscr') {
      const body = this.arg();
      if (name === 'operatorname') return { k: 'pendFunc', name: nodesText(body), plain: true };
      const sty = { mathrm: 'p', mathbf: 'b', boldsymbol: 'b', bm: 'b', textbf: 'b', mathit: 'i', mathsf: 'p', mathtt: 'p', mathbb: 'dbl', mathcal: 'scr', mathfrak: 'fra', mathscr: 'scr' }[name];
      return { k: 'group', nodes: styled(body, sty, name === 'mathbb') };
    }
    if (has(NARY_OPS, name)) return { k: 'pendNary', op: name, sub: null, sup: null };
    if (FUNCS.has(name)) return { k: 'pendFunc', name, plain: true, sub: null, sup: null };
    if (name === 'overline') return { k: 'bar', pos: 'top', e: this.arg() };
    if (name === 'underline') return { k: 'bar', pos: 'bot', e: this.arg() };
    if (name === 'overbrace') return { k: 'groupChr', pos: 'top', chr: '\u23de', e: this.arg() };
    if (name === 'underbrace') return { k: 'groupChr', pos: 'bot', chr: '\u23df', e: this.arg() };
    if (has(LONG_ARROW, name)) return { k: 'groupChr', pos: 'top', chr: LONG_ARROW[name], e: this.arg() };
    if (has(ACCENT, name)) return { k: 'acc', chr: ACCENT[name], e: this.arg() };
    if (name === 'boxed' || name === 'fbox') return { k: 'box', e: this.arg() };
    if (name === 'overset' || name === 'stackrel') { const lim = this.arg(); return { k: 'lim', upp: true, lim, e: this.arg() }; }
    if (name === 'underset') { const lim = this.arg(); return { k: 'lim', upp: false, lim, e: this.arg() }; }
    if (name === 'xrightarrow' || name === 'xleftarrow') {
      this.ws();
      let bottom = null;
      if (this.s[this.i] === '[') {
        const close = this.s.indexOf(']', this.i);
        if (close < 0) throw new LatexError('unbalanced [');
        bottom = new Parser(this.s.slice(this.i + 1, close)).seq();
        this.i = close + 1;
      }
      const top = this.arg();
      let node = { k: 'lim', upp: true, lim: top, e: [this.run(name === 'xrightarrow' ? '\u2192' : '\u2190')] };
      if (bottom) node = { k: 'lim', upp: false, lim: bottom, e: [node] };
      return node;
    }
    if (name === 'not') {
      const next = this.atom();
      const text = next.k === 'run' ? next.text : '';
      if (!text) throw new LatexError('\\not');
      return this.run(text + '\u0338');
    }
    if (name === 'displaystyle' || name === 'textstyle' || name === 'scriptstyle' || name === 'limits' || name === 'nolimits' || name === 'bigl' ||
        name === 'bigr' || name === 'Big' || name === 'big' || name === 'Bigl' || name === 'Bigr') return { k: 'group', nodes: [] };
    if (name === 'hspace' || name === 'vspace' || name === 'phantom') { this.raw(); return { k: 'group', nodes: [] }; }
    if (has(SPACE_CMD, name)) return this.run(SPACE_CMD[name]);
    if (has(GREEK, name)) return this.run(GREEK[name]);
    if (has(CMD, name)) return this.run(CMD[name]);
    if (has(T.ASCII_ESCAPES, name)) return this.run(name);   // \{ \} \% \& \# \$ \_
    if (name === '|') return this.run('\u2016');
    if (name === '\\') throw new LatexError('unexpected \\\\');
    throw new LatexError('unsupported command \\' + name);
  }
  environment(env) {
    let spec = '';
    if (env === 'array') spec = this.raw();
    const rows = [[]];
    for (;;) {
      rows[rows.length - 1].push(this.seq());
      this.ws();
      if (this.s[this.i] === '&') { this.i++; continue; }
      const cs = this.peekCs();
      if (cs === BS) { this.i += 2; if (this.s[this.i] === '[') { const close = this.s.indexOf(']', this.i); if (close > 0) this.i = close + 1; } rows.push([]); continue; }
      if (cs === 'end') { this.i += 4; const e = this.raw().trim(); if (e !== env) throw new LatexError(`\\end{${e}} does not match \\begin{${env}}`); break; }
      throw new LatexError('unterminated environment');
    }
    if (rows.length > 1 && rows[rows.length - 1].length === 1 && !rows[rows.length - 1][0].length) rows.pop();   // trailing \\
    const cols = Math.max(...rows.map((r) => r.length));
    const table = { k: cols === 1 && (env === 'cases' || /^l*$/.test(spec) || env === 'aligned' || env === 'align') ? 'eqArr' : 'm', rows };
    const fences = { cases: ['{', ''], pmatrix: ['(', ')'], bmatrix: ['[', ']'], Bmatrix: ['{', '}'], vmatrix: ['|', '|'], Vmatrix: ['\u2016', '\u2016'] };
    if (has(fences, env)) return { k: 'd', beg: fences[env][0], end: fences[env][1], items: [[table]] };
    if (!['array', 'matrix', 'aligned', 'align', 'gathered', 'smallmatrix'].includes(env)) throw new LatexError('environment ' + env);
    return table;
  }
}

function nodesText(nodes) {
  return nodes.map((n) => (n.k === 'run' ? n.text : n.k === 'group' ? nodesText(n.nodes) : '')).join('');
}

function styled(nodes, sty, blackboard) {
  return nodes.map((n) => {
    if (n.k === 'group') return { ...n, nodes: styled(n.nodes, sty, blackboard) };
    if (n.k !== 'run') return n;
    if (blackboard) {
      const out = [...n.text].map((c) => (has(BB, c) ? BB[c] : c)).join('');
      return { ...n, text: out, sty: [...n.text].every((c) => has(BB, c)) ? '' : sty };
    }
    return { ...n, sty: n.sty === 'nor' ? 'nor' : sty };
  });
}

// ---------------------------------------------------------------- resolve n-ary operands and function arguments
const opChar = (n) => (n && n.k === 'run' && !n.sty && [...n.text].length === 1 ? n.text : null);
const isLetterRun = (n) => n && ((n.k === 'run' && /^\p{L}$/u.test(n.text)) || (n.k === 'script' && n.base.k === 'run' && /^\p{L}$/u.test(n.base.text)));

function bodyEnd(nodes, start, pending) {
  const isInt = pending.k === 'pendNary' && SIDE_LIMITS.has(pending.op);
  let depth = 0;
  for (let j = start + 1; j < nodes.length; j++) {
    const n = nodes[j];
    const c = opChar(n);
    if (c === '(' || c === '[') depth++;
    else if (c === ')' || c === ']') depth = Math.max(0, depth - 1);
    if (depth > 0) continue;
    if (pending.k === 'pendFunc' && (n.k === 'pendFunc' || n.k === 'pendNary') && j > start + 1) return j;
    if (pending.k === 'pendNary' && n.k === 'pendNary') return j;
    if (c && (REL.has(c) || SEP.has(c))) return j;
    if (!isInt && c && ADD.has(c) && j > start + 1) return j;
    if (pending.k === 'pendFunc' && c && MUL.has(c)) return j;
    if (isInt && c === 'd' && isLetterRun(nodes[j + 1])) return j + 2;
    if (isInt && n.k === 'run' && n.sty === 'p' && n.text === 'd' && isLetterRun(nodes[j + 1])) return j + 2;
  }
  return nodes.length;
}

function resolve(nodes) {
  const out = [];
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.k === 'pendNary' || n.k === 'pendFunc') {
      const end = bodyEnd(nodes, i, n);
      const body = resolve(nodes.slice(i + 1, end));
      out.push(n.k === 'pendNary' ? { k: 'nary', op: n.op, sub: n.sub, sup: n.sup, e: body } : { k: 'func', name: n.name, sub: n.sub, sup: n.sup, e: body });
      i = end - 1;
    } else if (n.k === 'script' && n.base.k === 'group' && !n.base.nodes.length && i + 1 < nodes.length) {
      out.push({ k: 'sPre', sub: n.sub, sup: n.sup, e: [nodes[i + 1]] });
      i++;
    } else out.push(n);
  }
  return out;
}

// ---------------------------------------------------------------- OMML emission
const FONT = '<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr>';
const val = (name, v) => `<m:${name} m:val="${escapeXml(v)}"/>`;

function runXml(text, sty) {
  if (!text) return '';
  let pr = '';
  if (sty === 'p') pr = val('sty', 'p');
  else if (sty === 'b') pr = val('sty', 'b');
  else if (sty === 'i') pr = val('sty', 'i');
  else if (sty === 'nor') pr = '<m:nor/>';
  else if (sty === 'dbl') pr = val('scr', 'double-struck');
  else if (sty === 'scr') pr = val('scr', 'script');
  else if (sty === 'fra') pr = val('scr', 'fraktur');
  return `<m:r>${pr ? `<m:rPr>${pr}</m:rPr>` : ''}${FONT}<m:t xml:space="preserve">${escapeXml(text)}</m:t></m:r>`;
}

function flatten(nodes, out = []) {
  for (const n of nodes) {
    if (n.k === 'group') flatten(n.nodes, out);
    else out.push(n);
  }
  return out;
}

function seqXml(nodes) {
  const list = flatten(resolve(nodes));
  let xml = '', text = '', style = null;
  const flush = () => { if (text) xml += runXml(text, style); text = ''; style = null; };
  for (const n of list) {
    if (n.k === 'run') {
      const blank = !n.text.trim();   // spaces get runs of their own: Word and core/omml.py read those as spacing
      if (style !== null && (style !== n.sty || blank || !text.trim())) flush();
      style = n.sty;
      text += n.text;
      if (blank) flush();
    } else { flush(); xml += nodeXml(n); }
  }
  flush();
  return xml;
}

const e = (tag, nodes) => `<m:${tag}>${seqXml(nodes || [])}</m:${tag}>`;

function nodeXml(n) {
  switch (n.k) {
    case 'f': return `<m:f>${n.noBar ? `<m:fPr>${val('type', 'noBar')}</m:fPr>` : ''}${e('num', n.num)}${e('den', n.den)}</m:f>`;
    case 'rad': return `<m:rad><m:radPr>${n.deg ? '' : val('degHide', '1')}</m:radPr>${e('deg', n.deg || [])}${e('e', n.e)}</m:rad>`;
    case 'd': {
      const sep = n.sep ? val('sepChr', n.sep) : '';
      return `<m:d><m:dPr>${val('begChr', n.beg)}${sep}${val('endChr', n.end)}</m:dPr>${n.items.map((it) => e('e', it)).join('')}</m:d>`;
    }
    case 'script': return scriptXml(n);
    case 'sPre': return `<m:sPre>${e('sub', n.sub || [])}${e('sup', n.sup || [])}${e('e', n.e)}</m:sPre>`;
    case 'nary': {
      const side = SIDE_LIMITS.has(n.op);
      const pr = val('chr', NARY_OPS[n.op]) + val('limLoc', side ? 'subSup' : 'undOvr') + (n.sub ? '' : val('subHide', '1')) + (n.sup ? '' : val('supHide', '1'));
      return `<m:nary><m:naryPr>${pr}</m:naryPr>${e('sub', n.sub || [])}${e('sup', n.sup || [])}${e('e', n.e)}</m:nary>`;
    }
    case 'func': {
      const nameRun = [{ k: 'run', text: n.name, sty: 'p' }];
      let name;
      if (LIMIT_FUNCS.has(n.name) && (n.sub || n.sup)) {
        name = n.sub ? `<m:limLow>${e('e', nameRun)}${e('lim', n.sub)}</m:limLow>` : `<m:limUpp>${e('e', nameRun)}${e('lim', n.sup)}</m:limUpp>`;
      } else if (n.sub || n.sup) name = scriptXml({ base: nameRun[0], sub: n.sub, sup: n.sup });
      else name = seqXml(nameRun);
      return `<m:func><m:fName>${name}</m:fName>${e('e', n.e)}</m:func>`;
    }
    case 'lim': return `<m:${n.upp ? 'limUpp' : 'limLow'}>${e('e', n.e)}${e('lim', n.lim)}</m:${n.upp ? 'limUpp' : 'limLow'}>`;
    case 'acc': return `<m:acc><m:accPr>${val('chr', n.chr)}</m:accPr>${e('e', n.e)}</m:acc>`;
    case 'bar': return `<m:bar><m:barPr>${val('pos', n.pos)}</m:barPr>${e('e', n.e)}</m:bar>`;
    case 'groupChr': return `<m:groupChr><m:groupChrPr>${val('chr', n.chr)}${val('pos', n.pos)}${val('vertJc', n.pos === 'top' ? 'bot' : 'top')}</m:groupChrPr>${e('e', n.e)}</m:groupChr>`;
    case 'box': return `<m:borderBox>${e('e', n.e)}</m:borderBox>`;
    case 'm': return `<m:m>${n.rows.map((r) => `<m:mr>${r.map((c) => e('e', c)).join('')}</m:mr>`).join('')}</m:m>`;
    case 'eqArr': return `<m:eqArr>${n.rows.map((r) => e('e', r[0])).join('')}</m:eqArr>`;
    default: throw new LatexError('internal: ' + n.k);
  }
}

function scriptXml(n) {
  const base = n.base.k === 'run' || n.base.k === undefined ? [n.base] : [n.base];
  const only = flatten(resolve(base))[0];
  if (only && only.k === 'groupChr') {   // \overbrace{x}^{y}: text above/below the brace, not a superscript
    if (only.pos === 'top' && n.sup && !n.sub) return `<m:limUpp>${e('e', [only])}${e('lim', n.sup)}</m:limUpp>`;
    if (only.pos === 'bot' && n.sub && !n.sup) return `<m:limLow>${e('e', [only])}${e('lim', n.sub)}</m:limLow>`;
  }
  let baseNodes = base;
  if (only && only.k === 'run' && [...only.text].length > 1 && !only.sty) {   // x^2 attaches to the last character only
    const chars = [...only.text];
    const last = chars.pop();
    return seqXml([{ k: 'run', text: chars.join(''), sty: only.sty }]) + scriptXml({ base: { k: 'run', text: last, sty: only.sty }, sub: n.sub, sup: n.sup });
  }
  if (n.sup && n.sup.length === 1 && n.sup[0].k === 'run' && n.sup[0].text === '\u2218') n = { ...n, sup: [{ k: 'run', text: '\u00b0', sty: '' }] };
  baseNodes = base;
  if (n.sub && n.sup) return `<m:sSubSup>${e('e', baseNodes)}${e('sub', n.sub)}${e('sup', n.sup)}</m:sSubSup>`;
  if (n.sub) return `<m:sSub>${e('e', baseNodes)}${e('sub', n.sub)}</m:sSub>`;
  return `<m:sSup>${e('e', baseNodes)}${e('sup', n.sup)}</m:sSup>`;
}

/**
 * LaTeX -> OMML fragment (prefixes m: and w: must be declared by the surrounding XML).
 * display=true wraps in <m:oMathPara>. Top-level "\\" rows become an equation array.
 */
export function latexToOmml(latex, { display = false } = {}) {
  const p = new Parser(latex.trim());
  const rows = [];
  for (;;) {
    rows.push(p.seq());
    p.ws();
    if (p.i >= p.s.length) break;
    if (p.peekCs() === BS) { p.i += 2; continue; }
    throw new LatexError('unexpected ' + p.s.slice(p.i, p.i + 8));
  }
  const inner = rows.length > 1 ? nodeXml({ k: 'eqArr', rows: rows.map((r) => [r]) }) : seqXml(rows[0]);
  const math = `<m:oMath>${inner}</m:oMath>`;
  return display ? `<m:oMathPara>${math}</m:oMathPara>` : math;
}

export const NS = 'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';

// ---------------------------------------------------------------- MathML (live preview in the editor)
const MML = { open: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">', close: '</math>' };
const mrow = (nodes) => `<mrow>${mmlSeq(nodes)}</mrow>`;

function mmlRun(text, sty) {
  if (sty === 'nor') return `<mtext>${escapeXml(text)}</mtext>`;
  const variant = sty === 'p' ? ' mathvariant="normal"' : sty === 'b' ? ' mathvariant="bold"' : '';
  let out = '';
  for (const m of text.matchAll(/[0-9]+(?:[.,][0-9]+)?|\p{L}|\s|[\s\S]/gu)) {
    const t = m[0];
    if (/^[0-9]/.test(t)) out += `<mn>${t}</mn>`;
    else if (/^\p{L}$/u.test(t)) out += `<mi${variant}>${escapeXml(t)}</mi>`;
    else if (/^\s$/.test(t)) out += '<mspace width="0.3em"/>';
    else out += `<mo>${escapeXml(t)}</mo>`;
  }
  return out;
}

function mmlSeq(nodes) {
  return flatten(resolve(nodes)).map((n) => (n.k === 'run' ? mmlRun(n.text, n.sty) : mmlNode(n))).join('');
}

function mmlNode(n) {
  const r = mrow;
  switch (n.k) {
    case 'f': return `<mfrac${n.noBar ? ' linethickness="0"' : ''}>${r(n.num)}${r(n.den)}</mfrac>`;
    case 'rad': return n.deg ? `<mroot>${r(n.e)}${r(n.deg)}</mroot>` : `<msqrt>${r(n.e)}</msqrt>`;
    case 'd': return `<mrow><mo>${escapeXml(n.beg)}</mo>${n.items.map((it) => r(it)).join(`<mo>${escapeXml(n.sep || '|')}</mo>`)}<mo>${escapeXml(n.end)}</mo></mrow>`;
    case 'script': {
      const base = r([n.base]);
      if (n.sub && n.sup) return `<msubsup>${base}${r(n.sub)}${r(n.sup)}</msubsup>`;
      return n.sub ? `<msub>${base}${r(n.sub)}</msub>` : `<msup>${base}${r(n.sup)}</msup>`;
    }
    case 'sPre': return `<mmultiscripts>${r(n.e)}<mprescripts/>${r(n.sub || [])}${r(n.sup || [])}</mmultiscripts>`;
    case 'nary': {
      const op = `<mo>${NARY_OPS[n.op]}</mo>`;
      const head = SIDE_LIMITS.has(n.op) ? (n.sub || n.sup ? `<msubsup>${op}${r(n.sub || [])}${r(n.sup || [])}</msubsup>` : op)
        : (n.sub || n.sup ? `<munderover>${op}${r(n.sub || [])}${r(n.sup || [])}</munderover>` : op);
      return head + r(n.e);
    }
    case 'func': {
      const name = `<mi mathvariant="normal">${n.name}</mi>`;
      let head = name;
      if (LIMIT_FUNCS.has(n.name) && n.sub) head = `<munder>${name}${r(n.sub)}</munder>`;
      else if (n.sub && n.sup) head = `<msubsup>${name}${r(n.sub)}${r(n.sup)}</msubsup>`;
      else if (n.sub) head = `<msub>${name}${r(n.sub)}</msub>`;
      else if (n.sup) head = `<msup>${name}${r(n.sup)}</msup>`;
      return head + '<mo>&#x2061;</mo>' + r(n.e);
    }
    case 'lim': return n.upp ? `<mover>${r(n.e)}${r(n.lim)}</mover>` : `<munder>${r(n.e)}${r(n.lim)}</munder>`;
    case 'acc': return `<mover accent="true">${r(n.e)}<mo>${escapeXml(n.chr)}</mo></mover>`;
    case 'bar': return n.pos === 'bot' ? `<munder>${r(n.e)}<mo>&#x2015;</mo></munder>` : `<mover>${r(n.e)}<mo>&#x2015;</mo></mover>`;
    case 'groupChr': return n.pos === 'top' ? `<mover>${r(n.e)}<mo>${escapeXml(n.chr)}</mo></mover>` : `<munder>${r(n.e)}<mo>${escapeXml(n.chr)}</mo></munder>`;
    case 'box': return `<menclose notation="box">${r(n.e)}</menclose>`;
    case 'm': return `<mtable>${n.rows.map((row) => `<mtr>${row.map((c) => `<mtd>${r(c)}</mtd>`).join('')}</mtr>`).join('')}</mtable>`;
    case 'eqArr': return `<mtable columnalign="left">${n.rows.map((row) => `<mtr><mtd>${r(row[0])}</mtd></mtr>`).join('')}</mtable>`;
    default: throw new LatexError('internal: ' + n.k);
  }
}

/** LaTeX -> MathML string (throws LatexError like latexToOmml); used for the preview in the editor. */
export function latexToMathml(latex) {
  const p = new Parser(latex.trim());
  const rows = [];
  for (;;) {
    rows.push(p.seq());
    p.ws();
    if (p.i >= p.s.length) break;
    if (p.peekCs() === BS) { p.i += 2; continue; }
    throw new LatexError('unexpected ' + p.s.slice(p.i, p.i + 8));
  }
  const inner = rows.length > 1 ? mmlNode({ k: 'eqArr', rows: rows.map((r) => [r]) }) : mmlSeq(rows[0]);
  return `${MML.open}${inner}${MML.close}`;
}

// ---------------------------------------------------------------- shared tree API (MathType writer, renderer)
export { NARY_OPS, SIDE_LIMITS, LIMIT_FUNCS };

/** LaTeX -> normalised tree: {rows: [nodes]} (several rows for top-level "\\\\"). Nodes are flat lists, groups inlined, operands resolved. */
export function latexToTree(latex) {
  const p = new Parser(latex.trim());
  const rows = [];
  for (;;) {
    rows.push(p.seq());
    p.ws();
    if (p.i >= p.s.length) break;
    if (p.peekCs() === BS) { p.i += 2; continue; }
    throw new LatexError('unexpected ' + p.s.slice(p.i, p.i + 8));
  }
  return { rows };
}
export const normalizeNodes = (nodes) => flatten(resolve(nodes));
