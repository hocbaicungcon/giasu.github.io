// Safe expression parser for f(x) / g(x, y): numbers, x y, pi e, + - * / ^, functions, implicit multiplication (2x, 3(x+1), x sin x).
export class ExprError extends Error {}
const FUNCS = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan, cot: (v) => 1 / Math.tan(v), sec: (v) => 1 / Math.cos(v), csc: (v) => 1 / Math.sin(v),
  asin: Math.asin, arcsin: Math.asin, acos: Math.acos, arccos: Math.acos, atan: Math.atan, arctan: Math.atan,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, exp: Math.exp, ln: Math.log, lg: Math.log10, log10: Math.log10, log2: Math.log2,
  sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, sign: Math.sign, floor: Math.floor, ceil: Math.ceil,
};
const CONST = { pi: Math.PI, e: Math.E };

function tokenize(src) {
  const s = src.replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/×|·/g, '*').replace(/÷/g, '/').replace(/²/g, '^2').replace(/³/g, '^3').replace(/π/g, 'pi').replace(/√/g, 'sqrt');
  const out = [];
  for (let i = 0; i < s.length;) {
    const c = s[i];
    let m;
    if ((m = /^(?:\d+[.,]?\d*|[.,]\d+)(?:e[+-]?\d+)?/i.exec(s.slice(i))) && !/^e[+-]?\d*$/i.test(m[0])) { out.push({ t: 'num', v: Number(m[0].replace(',', '.')) }); i += m[0].length; }
    else if ((m = /^[a-zA-Z_][a-zA-Z_0-9]*/.exec(s.slice(i)))) { out.push({ t: 'id', v: m[0] }); i += m[0].length; }
    else if ('+-*/^(),|'.includes(c)) { out.push({ t: c }); i++; }
    else throw new ExprError(`Ký tự không hợp lệ: “${c}”`);
  }
  return out;
}

/** Split run-together identifiers like "xsinx" / "2xy" into known names and single letters. */
function split(tokens, vars) {
  const out = [];
  for (const tk of tokens) {
    if (tk.t !== 'id') { out.push(tk); continue; }
    let w = tk.v;
    const parts = [];
    while (w) {
      const fn = Object.keys(FUNCS).filter((f) => w.startsWith(f)).sort((a, b) => b.length - a.length)[0];
      const cn = Object.keys(CONST).filter((f) => w === f)[0];
      if (fn) { parts.push(fn); w = w.slice(fn.length); } else if (cn) { parts.push(cn); w = ''; } else if (vars.includes(w[0])) { parts.push(w[0]); w = w.slice(1); } else if (w[0] === 'e') { parts.push('e'); w = w.slice(1); } else throw new ExprError(`Không hiểu “${w}”`);
    }
    parts.forEach((p) => out.push({ t: 'id', v: p }));
  }
  return out;
}

/** Compile to a JS function of the given variables (default x). */
export function compile(src, vars = ['x']) {
  const toks = split(tokenize(String(src)), vars);
  let pos = 0;
  const peek = () => toks[pos], next = () => toks[pos++];
  const isAtomStart = (t) => t && (t.t === 'num' || t.t === 'id' || t.t === '(' || t.t === '|');
  function parseExpr() {
    let left = parseTerm();
    while (peek() && (peek().t === '+' || peek().t === '-')) { const op = next().t; const right = parseTerm(); const l = left; left = op === '+' ? (e) => l(e) + right(e) : (e) => l(e) - right(e); }
    return left;
  }
  function parseTerm() {
    let left = parseUnary();
    for (;;) {
      const t = peek();
      if (t && (t.t === '*' || t.t === '/')) { next(); const right = parseUnary(); const l = left; left = t.t === '*' ? (e) => l(e) * right(e) : (e) => l(e) / right(e); }
      else if (isAtomStart(t) && !(t.t === '|' )) { const right = parseUnary(); const l = left; left = (e) => l(e) * right(e); }   // implicit multiplication
      else return left;
    }
  }
  function parseUnary() {
    const t = peek();
    if (t && t.t === '-') { next(); const v = parseUnary(); return (e) => -v(e); }
    if (t && t.t === '+') { next(); return parseUnary(); }
    return parsePow();
  }
  function parsePow() {
    const base = parseAtom();
    if (peek() && peek().t === '^') { next(); const exp = parseUnary(); return (e) => { const b = base(e), p = exp(e); return b < 0 && Math.abs(p - Math.round(p)) > 1e-12 && Math.abs(1 / p - Math.round(1 / p)) < 1e-12 && Math.round(1 / p) % 2 === 1 ? -Math.pow(-b, p) : Math.pow(b, p); }; }
    return base;
  }
  function parseAtom() {
    const t = next();
    if (!t) throw new ExprError('Biểu thức chưa đầy đủ');
    if (t.t === 'num') return () => t.v;
    if (t.t === '(') { const v = parseExpr(); if (!peek() || next().t !== ')') throw new ExprError('Thiếu dấu ngoặc đóng ")"'); return v; }
    if (t.t === '|') { const v = parseExpr(); if (!peek() || next().t !== '|') throw new ExprError('Thiếu dấu | đóng'); return (e) => Math.abs(v(e)); }
    if (t.t === 'id') {
      if (vars.includes(t.v)) return (e) => e[t.v];
      if (Object.prototype.hasOwnProperty.call(CONST, t.v)) return () => CONST[t.v];
      if (FUNCS[t.v]) {
        const f = FUNCS[t.v];
        if (peek() && peek().t === '(') { next(); const a = parseExpr(); if (!peek() || next().t !== ')') throw new ExprError('Thiếu dấu ngoặc đóng ")"'); return (e) => f(a(e)); }
        const a = parsePow();   // sin x, ln x without brackets
        return (e) => f(a(e));
      }
    }
    throw new ExprError('Biểu thức không hợp lệ');
  }
  const fn = parseExpr();
  if (pos < toks.length) throw new ExprError('Thừa ký tự ở cuối biểu thức');
  return vars.length === 1 ? (x) => fn({ [vars[0]]: x }) : (...a) => fn(Object.fromEntries(vars.map((v, i) => [v, a[i]])));
}
