// Autocomplete logic for the LaTeX editor (no DOM): ranking, snippets with Tab stops, symbol glyphs.
import { ENTRIES, ALIASES } from './latex-dict.js';

const EXTRA_ALIASES = {
  sum: ['tong', 'sigma'], prod: ['tich', 'pi'], int: ['tichphan', 'tp'], lim: ['gioihan', 'gh'], infty: ['vocuc', 'vc', 'infinity'], sqrt: ['can', 'canbachai', 'cbh'],
  frac: ['phan', 'ps', 'phanso'], vec: ['vecto', 'vt'], overrightarrow: ['vectodai'], widehat: ['goc', 'mu'], angle: ['goc'], perp: ['vuonggoc', 'vg'], parallel: ['songsong', 'ss'],
  Rightarrow: ['suyra', 'keotheo'], Leftrightarrow: ['tuongduong', 'td'], in: ['thuoc'], notin: ['khongthuoc'], subset: ['tapcon'], cup: ['hop'], cap: ['giao'],
  forall: ['vimoi', 'moi'], exists: ['tontai'], leq: ['nhohonbang', 'lebang'], geq: ['lonhonbang', 'gebang'], neq: ['khac'], approx: ['xapxi'], pm: ['congtru'],
  alpha: ['anpha'], beta: ['beta'], gamma: ['gama'], delta: ['denta'], Delta: ['denta'], pi: ['pi'], theta: ['theta'], lambda: ['lamda'], omega: ['omega'], varphi: ['phi'],
  cases: ['he', 'hephuongtrinh'], pmatrix: ['matran'], text: ['chu', 'vanban'], mathbb: ['tapso'], circ: ['do'], boxed: ['khung'], overline: ['gachtren'], underline: ['gachduoi'],
};

export const stripAccents = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();

const coreName = (label) => { const m = /^\\begin\{([^}]+)\}$/.exec(label); return m ? m[1] : label.replace(/^\\/, ''); };
const aliasesOf = (name) => [...(ALIASES[name] || []), ...(EXTRA_ALIASES[name] || []), ...(ALIASES[name.replace(/\*$/, '')] || [])];

/** Ranked suggestions for what the user has typed after "\" (or a bare word). usage: {label: count}. */
export function suggest(query, { usage = {}, limit = 9, bare = false } = {}) {
  const q = String(query || '').replace(/^\\/, '').toLowerCase();
  const qa = stripAccents(q);
  const boost = (label) => Math.min(25, (usage[label] || 0) * 3);
  if (!q) {
    const used = ENTRIES.filter((e) => usage[e[0]]).sort((a, b) => usage[b[0]] - usage[a[0]]);
    const common = ['\\frac', '\\sqrt', '\\sum', '\\int', '\\lim', '\\left', '\\alpha', '\\infty', '\\begin{cases}'];
    return [...used, ...common.map((c) => ENTRIES.find((e) => e[0] === c)).filter(Boolean)].filter((e, i, a) => a.indexOf(e) === i).slice(0, limit);
  }
  const scored = [];
  for (const entry of ENTRIES) {
    const [label, , detail] = entry;
    const name = coreName(label), lname = name.toLowerCase();
    let score = 0;
    if (lname === q) score = 200;
    else if (lname.startsWith(q)) score = 120 - (lname.length - q.length);
    else {
      const al = aliasesOf(name).map((a) => a.toLowerCase());
      if (al.includes(q) || al.includes(qa)) score = 110;
      else if (al.some((a) => a.startsWith(qa))) score = 80;
      else if (!bare) {
        const d = stripAccents(detail);
        if (d.startsWith(qa)) score = 50;
        else if (d.includes(qa)) score = 30;
        else if (lname.includes(q) && q.length >= 3) score = 25;
      }
    }
    if (score) scored.push({ entry, score: score + boost(label) });
  }
  scored.sort((a, b) => b.score - a.score || a.entry[0].length - b.entry[0].length);
  return scored.slice(0, limit).map((s) => s.entry);
}

/** Snippet "\frac{|}{}" -> {text, caret, stops}: caret where "|" was; empty {} / [] after it are Tab stops. */
export function expandSnippet(snippet) {
  const bar = snippet.indexOf('|');
  const text = snippet.replace('|', '');
  const caret = bar < 0 ? text.length : bar;
  return { text, caret };
}

/** The command token being typed right before `caret`: {start, token, bare} or null. */
export function tokenAt(text, caret) {
  const before = text.slice(0, caret);
  let m = /\\(?:begin\{[A-Za-z*]*|[A-Za-z]*)$/.exec(before);
  if (m) return { start: m.index, token: m[0], bare: false };
  m = /(?:^|[^A-Za-z\\])([A-Za-z]{3,})$/.exec(before);
  if (m) return { start: before.length - m[1].length, token: m[1], bare: true };
  return null;
}

/** Next/previous empty {} or [] after/before the caret (Tab stops of a template). Returns the caret position or -1. */
export function nextStop(text, caret, backward = false) {
  if (backward) {
    for (let i = caret - 2; i >= 0; i--) if ((text[i] === '{' && text[i + 1] === '}') || (text[i] === '[' && text[i + 1] === ']')) return i + 1;
    return -1;
  }
  for (let i = caret; i < text.length - 1; i++) {
    if ((text[i] === '{' && text[i + 1] === '}') || (text[i] === '[' && text[i + 1] === ']')) { if (i + 1 === caret) continue; return i + 1; }
  }
  return -1;
}

const GLYPHS = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varepsilon: 'ϵ', zeta: 'ζ', eta: 'η', theta: 'θ', vartheta: 'ϑ', iota: 'ι', kappa: 'κ', lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', upsilon: 'υ', phi: 'ϕ', varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Xi: 'Ξ', Pi: 'Π', Sigma: 'Σ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
  infty: '∞', leq: '≤', le: '≤', geq: '≥', ge: '≥', neq: '≠', approx: '≈', equiv: '≡', sim: '∼', pm: '±', mp: '∓', times: '×', cdot: '⋅', div: '÷', in: '∈', notin: '∉', ni: '∋', subset: '⊂', supset: '⊃', subseteq: '⊆', supseteq: '⊇', cup: '∪', cap: '∩', emptyset: '∅',
  forall: '∀', exists: '∃', nabla: '∇', partial: '∂', angle: '∠', perp: '⊥', parallel: '∥', to: '→', rightarrow: '→', leftarrow: '←', leftrightarrow: '↔', Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', mapsto: '↦', ldots: '…', cdots: '⋯', vdots: '⋮', ddots: '⋱',
  sum: '∑', prod: '∏', int: '∫', iint: '∬', iiint: '∭', oint: '∮', sqrt: '√', degree: '°', circ: '∘', bullet: '∙', therefore: '∴', because: '∵', wedge: '∧', vee: '∨', neg: '¬', ell: 'ℓ', hbar: 'ℏ', prime: '′', star: '★', triangle: '△', square: '□',
};
export const glyphOf = (label) => GLYPHS[label.replace(/^\\/, '')] || '';
