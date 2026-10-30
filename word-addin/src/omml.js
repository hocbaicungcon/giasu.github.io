// Office Math (OMML) -> LaTeX. Port of core/omml.py with the same tables and rules (src/tables.js).
// Deliberate deviations (kept small, all marked "JS:") improve native equations written by Word itself.
import T from './tables.js';
import { FUNCTIONS, renderJoin, tidy } from './mtef.js';
import { parseXml, local, elements, textOf, descendants } from './xml.js';

export class OmmlError extends Error {}
const BS = '\\';
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const isAlpha = (s) => /^[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]$/u.test(s);

function prop(element, name, dflt) {
  for (const holder of elements(element)) {
    if (local(holder).endsWith('Pr')) {
      for (const item of elements(holder)) {
        if (local(item) === name) {
          const v = item.attrs['m:val'];
          if (v !== undefined) return v;
          return item.attrs.val !== undefined ? item.attrs.val : (dflt !== undefined ? dflt : 'on');
        }
      }
    }
  }
  return dflt;
}

function charToken(char) {
  const cp = char.codePointAt(0);
  if (has(T.GREEK_LOWER, char)) return T.GREEK_LOWER[char];
  if (has(T.GREEK_UPPER, char)) return T.GREEK_UPPER[char];
  if (has(T.SYMBOLS, String(cp))) return T.SYMBOLS[String(cp)];
  if (has(T.OMML_ESCAPES, char)) return T.OMML_ESCAPES[char];
  if (cp < 128) return char;
  if (isAlpha(char)) return `${BS}text{${char}}`;
  throw new OmmlError('unknown character U+' + cp.toString(16).toUpperCase().padStart(4, '0'));
}

function run(element) {
  let text = '';
  for (const t of descendants(element)) if (local(t) === 't') text += textOf(t);
  if (!text) text = element.children.filter((c) => typeof c === 'string').join('');
  let plain = false, nor = false;
  for (const holder of elements(element)) {
    if (local(holder) === 'rPr') {
      for (const item of elements(holder)) {
        if (local(item) === 'nor') { plain = true; nor = true; }
        if (local(item) === 'sty' && item.attrs['m:val'] === 'p') plain = true;
      }
    }
  }
  if (!text.trim() && text) return [...text].map((c) => (has(T.SPACES, String(c.codePointAt(0))) ? T.SPACES[String(c.codePointAt(0))] : `${BS} `));
  // JS: normal text (<m:nor/>) is \text{...} whatever it holds, so find/replace rewrites it as text, not as italic letters
  if (nor && text) return [`${BS}text{${[...text].map((c) => (has(T.TEXT_ESCAPES, c) ? T.TEXT_ESCAPES[c] : c)).join('')}}`];
  if (plain && text && /^[A-Za-z0-9 ]+$/.test(text)) return [!text.includes(' ') ? `${BS}mathrm{${text}}` : `${BS}text{${text}}`];
  // JS: a space typed inside a run is kept as a space (core/omml.py drops it, so "1, 2" would read back as 1{,}2)
  const chars = [...text].filter((c) => !'\u200b\u2061\u2062'.includes(c));
  // a plain space after a comma or semicolon is what the renderer adds itself
  return chars.filter((c, i) => !(c === ' ' && (chars[i - 1] === ',' || chars[i - 1] === ';'))).map((c) => (/\s/.test(c) ? (has(T.SPACES, String(c.codePointAt(0))) ? T.SPACES[String(c.codePointAt(0))] : `${BS} `) : charToken(c)));
}

const children = (el, names) => elements(el).filter((c) => !local(c).endsWith('Pr') && (!names || names.includes(local(c))));
function renderSeq(els) {
  const tokens = [];
  for (const c of els) tokens.push(...node(c));
  return tokens;
}
const group = (el) => renderJoin(renderSeq(children(el)), true);
function subOf(el, name) {
  for (const c of elements(el)) if (local(c) === name) return group(c);
  return '';
}

function node(el) {
  const tag = local(el);
  if (tag === 'r') return run(el);
  if (['oMath', 'e', 'num', 'den', 'sub', 'sup', 'deg', 'lim', 'fName'].includes(tag)) return renderSeq(children(el));
  if (tag === 'f') {
    const num = subOf(el, 'num'), den = subOf(el, 'den');
    const kind = prop(el, 'type', 'bar');
    if (kind === 'noBar') return [`${BS}binom{${num}}{${den}}`];
    if (kind === 'skw' || kind === 'lin') return [`{${num}}/{${den}}`];
    return [`${BS}frac{${num}}{${den}}`];
  }
  if (['sSup', 'sSub', 'sSubSup', 'sPre'].includes(tag)) {
    let base = subOf(el, 'e');
    const sub = subOf(el, 'sub');
    let sup = subOf(el, 'sup');
    if (tag === 'sPre') return [`{}_{${sub}}^{${sup}}${base}`];
    const fn = /^\\mathrm\{([A-Za-z]+)\}$/.exec(base);   // JS: \ln^2 x written as a script on a plain-text name
    if (fn && FUNCTIONS.has(fn[1])) base = BS + fn[1];
    if (sup === `^{${BS}circ}`) sup = `${BS}circ`;   // JS: a degree sign reads back as x^{\circ}, not x^{^{\circ}}
    if (/[\^_]\S*$/.test(base) && ((tag !== 'sSub' && sup) || (tag !== 'sSup' && sub))) base = `{${base}}`;
    return [base + (sub && tag !== 'sSup' ? `_{${sub}}` : '') + (sup && tag !== 'sSub' ? `^{${sup}}` : '')];
  }
  if (tag === 'rad') {
    const body = subOf(el, 'e'), deg = subOf(el, 'deg');
    const hide = !['on', '1', 'true'].includes(prop(el, 'degHide', 'off'));
    return [deg && hide ? `${BS}sqrt[${deg}]{${body}}` : `${BS}sqrt{${body}}`];
  }
  if (tag === 'nary') {
    const chr = prop(el, 'chr', '\u222b');
    const op = T.NARY[chr];
    if (op === undefined) throw new OmmlError('operator ' + chr);
    const sub = subOf(el, 'sub'), sup = subOf(el, 'sup'), body = subOf(el, 'e');
    return [op + (sub ? `_{${sub}}` : '') + (sup ? `^{${sup}}` : '') + (body ? ' ' + body : '')];
  }
  if (tag === 'd') {
    const beg = prop(el, 'begChr', '('), end = prop(el, 'endChr', ')'), sep = prop(el, 'sepChr', '|');
    for (const f of [beg, end, sep]) if (!has(T.FENCE_CHARS, f)) throw new OmmlError('fence ' + f);
    const parts = elements(el).filter((i) => local(i) === 'e').map((i) => renderJoin(renderSeq(children(i)), true));
    if (parts.length === 1 && beg === '(' && end === ')' && /^\\binom\{[^{}]*\}\{[^{}]*\}$/.test(parts[0])) return [parts[0]];
    const separator = ` ${T.FENCE_CHARS[sep].replace(/\./g, '|')} `;
    return [`${BS}left${T.FENCE_CHARS[beg]} ${parts.join(separator)} ${BS}right${T.FENCE_CHARS[end]}`];
  }
  if (tag === 'func') {
    const name = subOf(el, 'fName');
    const plain = name.replace(/\\mathrm\{([^}]*)\}/g, '$1');
    const head = FUNCTIONS.has(plain) ? BS + plain : name;
    return [head, subOf(el, 'e')];
  }
  if (tag === 'limLow' || tag === 'limUpp') {
    const body = subOf(el, 'e'), lim = subOf(el, 'lim');
    const named = /^\\mathrm\{(lim|max|min|sup|inf)\}$/.exec(body);   // JS: also for max/min/sup/inf written as plain text
    if ([`${BS}lim`, `${BS}max`, `${BS}min`, `${BS}sup`, `${BS}inf`].includes(body) || named) {
      return [(named ? BS + named[1] : body) + (tag === 'limLow' ? `_{${lim}}` : `^{${lim}}`)];
    }
    return [tag === 'limLow' ? `${BS}underset{${lim}}{${body}}` : `${BS}overset{${lim}}{${body}}`];
  }
  if (tag === 'acc') {
    const chr = prop(el, 'chr', '\u0302');
    const body = subOf(el, 'e');
    // OMML has one accent kind for both short and extensible TeX accents.
    // Preserve the extensible form over a group when exporting to MathType.
    const grouped = [...body.replace(/\s/g, '')].length > 1;
    const command = grouped && chr === '\u0302' ? `${BS}widehat`
      : grouped && chr === '\u20d7' ? `${BS}overrightarrow` : T.ACCENTS[chr];
    if (command === undefined) throw new OmmlError('accent ' + chr);
    return [`${command}{${body}}`];
  }
  if (tag === 'bar') {
    const body = subOf(el, 'e');
    return [prop(el, 'pos', 'top') === 'bot' ? `${BS}underline{${body}}` : `${BS}overline{${body}}`];
  }
  if (tag === 'groupChr') {
    const body = subOf(el, 'e');
    const chr = prop(el, 'chr', undefined);
    if (chr === '\u2192') return [`${BS}overrightarrow{${body}}`];   // JS: Word's long-arrow accents
    if (chr === '\u2190') return [`${BS}overleftarrow{${body}}`];
    if (chr === '\u2194') return [`${BS}overleftrightarrow{${body}}`];
    return [prop(el, 'pos', 'bot') === 'top' ? `${BS}overbrace{${body}}` : `${BS}underbrace{${body}}`];
  }
  if (tag === 'box' || tag === 'phant') return [subOf(el, 'e')];
  if (tag === 'borderBox') return [`${BS}boxed{${subOf(el, 'e')}}`];
  if (tag === 'm') {
    const rows = elements(el).filter((r) => local(r) === 'mr').map((r) => elements(r).filter((c) => local(c) === 'e').map(group));
    const width = Math.max(0, ...rows.map((r) => r.length));
    if (!width) throw new OmmlError('empty matrix');
    return [`${BS}begin{array}{${'c'.repeat(width)}} ${rows.map((r) => r.join(' & ')).join(` ${BS}${BS} `)} ${BS}end{array}`];
  }
  if (tag === 'eqArr') {
    const rows = elements(el).filter((i) => local(i) === 'e').map(group);
    return [`${BS}begin{array}{l} ${rows.join(` ${BS}${BS} `)} ${BS}end{array}`];
  }
  if (tag === 'ctrlPr' || tag === 'rPr') return [];
  throw new OmmlError('element ' + tag);
}

/** Render one parsed <m:oMath> element. */
export function oMathToLatex(zone) {
  return renderJoin(renderSeq(children(zone)), true);
}

/** OMML fragment text (an <m:oMath> or <m:oMathPara>) -> [latex, isDisplay]. */
export function ommlToLatex(xml) {
  const cleaned = xml.replace(/<(?!\/?m:)[^>]+>/g, '').replace(/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
  let root;
  try { root = parseXml(`<root>${cleaned}</root>`); } catch (e) { throw new OmmlError('unreadable OMML'); }
  if (!root) throw new OmmlError('unreadable OMML');
  const display = elements(root).some((i) => local(i) === 'oMathPara');
  const zones = [...descendants(root)].filter((i) => local(i) === 'oMath');
  if (!zones.length) throw new OmmlError('no math');
  const pieces = zones.map(oMathToLatex);
  const latex = pieces.length > 1 ? tidy(pieces.filter((p) => p).join(` ${BS}${BS} `), true) : tidy(pieces[0], true);
  if (!latex) throw new OmmlError('empty');
  return [latex, display];
}
