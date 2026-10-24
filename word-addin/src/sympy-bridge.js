// SymPy in the browser (Pyodide, loaded on demand) + LaTeX -> SymPy text conversion for the "Tính toán" tab.
import { latexToTree, normalizeNodes } from './latex2omml.js';

export class CalcError extends Error {}

const GREEK = { alpha: 'alpha', beta: 'beta', gamma: 'gamma', delta: 'delta', theta: 'theta', lambda: 'lambda', mu: 'mu', pi: 'pi', phi: 'phi', varphi: 'phi', omega: 'omega', sigma: 'sigma', rho: 'rho', tau: 'tau' };
const FUNC = { sin: 'sin', cos: 'cos', tan: 'tan', cot: 'cot', sec: 'sec', csc: 'csc', arcsin: 'asin', arccos: 'acos', arctan: 'atan', sinh: 'sinh', cosh: 'cosh', tanh: 'tanh', ln: 'log', exp: 'exp', lg: 'log10', max: 'Max', min: 'Min', det: 'det', gcd: 'gcd' };
const CHARS = { '−': '-', '×': '*', '⋅': '*', '·': '*', '÷': '/', '∞': 'oo', 'π': 'pi', '≤': '<=', '≥': '>=', '≠': '!=', '′': "'", ' ': ' ', ' ': ' ' };

/** LaTeX -> text SymPy's parser understands (x**2, sqrt(...), Abs(...), oo ...). Throws CalcError for unsupported input. */
export function latexToSympy(latex) {
  let tree;
  try { tree = latexToTree(latex); } catch (e) { throw new CalcError('Không đọc được LaTeX: ' + e.message); }
  const rows = tree.rows.map((r) => plain(r));
  return rows.join('\n');
}

function plain(nodes) {
  const flat = normalizeNodes(nodes);
  let out = '';
  for (const n of flat) out += one(n);
  return out;
}
const wrap = (s) => (/^[A-Za-z0-9_.]+$/.test(s) ? s : `(${s})`);

function one(n) {
  switch (n.k) {
    case 'run': return [...n.text].map((c) => (c === ' ' || c === ' ' ? ' ' : (CHARS[c] ?? (GREEK[c] || c)))).join('').replace(/\{,\}/g, '.');
    case 'f': return `((${plain(n.num)})/(${plain(n.den)}))`;
    case 'rad': return n.deg ? `(${plain(n.e)})**(1/(${plain(n.deg)}))` : `sqrt(${plain(n.e)})`;
    case 'script': {
      const base = one(n.base);
      if (n.sup) return `${wrap(base)}**(${plain(n.sup)})`;
      if (n.sub) return `${base}_${plain(n.sub).replace(/[^A-Za-z0-9]/g, '')}`;
      return base;
    }
    case 'd': {
      const inner = n.items.map((it) => plain(it)).join(',');
      if (n.beg === '|' && n.end === '|') return `Abs(${inner})`;
      if (n.beg === '(' || n.beg === '[' || n.beg === '{' || n.beg === '') return `(${inner})`;
      throw new CalcError('Ngoặc không hỗ trợ trong biểu thức');
    }
    case 'func': {
      const arg = plain(n.e);
      if (n.name === 'log') { const base = n.sub ? plain(n.sub) : '10'; return `log(${arg}, ${base})`; }
      if (FUNC[n.name]) return `${FUNC[n.name]}(${arg})${n.sup ? `**(${plain(n.sup)})` : ''}`;
      throw new CalcError(`Hàm “${n.name}” chưa hỗ trợ`);
    }
    case 'nary': {
      if (n.op === 'sum' || n.op === 'prod') {
        const lo = n.sub ? plain(n.sub) : '', hi = n.sup ? plain(n.sup) : '';
        const m = /^([A-Za-z])=(.+)$/.exec(lo);
        if (!m || !hi) throw new CalcError('Tổng cần cận dạng i=1 và cận trên');
        return `${n.op === 'sum' ? 'Sum' : 'Product'}(${plain(n.e)},(${m[1]},${m[2]},${hi})).doit()`;
      }
      throw new CalcError('Hãy dùng thao tác “Tích phân / Nguyên hàm” thay vì gõ ký hiệu ∫');
    }
    case 'm': return `Matrix([${n.rows.map((r) => `[${r.map((c) => plain(c)).join(',')}]`).join(',')}])`;
    case 'eqArr': return n.rows.map((r) => plain(r[0])).join('\n');
    default: throw new CalcError('Chưa hỗ trợ cấu trúc “' + n.k + '” trong biểu thức tính toán');
  }
}

/** Plain text typed by hand ("x^2+1", "2x(x-1)", "sin x") passes through; LaTeX (contains a backslash or braces) is converted. */
export function normalizeInput(text) {
  const t = String(text).trim();
  if (!t) throw new CalcError('Chưa nhập biểu thức');
  const plain = /[\\{}]/.test(t) ? latexToSympy(t) : t.replace(/[\u2212]/g, '-').replace(/[\u00d7\u00b7]/g, '*').replace(/\u00f7/g, '/').replace(/\u03c0/g, 'pi').replace(/\u221e/g, 'oo').replace(/\u00b2/g, '**2').replace(/\u00b3/g, '**3');
  // 1,5 is a decimal only outside brackets and argument lists
  return /[\[\]()]/.test(plain) || /,\s/.test(plain) ? plain : plain.replace(/(\d),(\d)/g, '$1.$2');
}

// ---------------------------------------------------------------- Pyodide + SymPy
const PYODIDE = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
let engine = null;
let enginePromise = null;
const script = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => { s.remove(); rej(new Error('Không tải được ' + src)); }; document.head.appendChild(s); });

export async function loadSympy(onStatus = () => {}) {
  if (engine) return engine;
  if (enginePromise) return enginePromise;
  enginePromise = (async () => {
  onStatus('Đang tải Python (Pyodide)… lần đầu có thể mất 1–2 phút');
  if (typeof loadPyodide === 'undefined') await script(PYODIDE + 'pyodide.js');
  const py = await loadPyodide({ indexURL: PYODIDE });
  onStatus('Đang tải SymPy (khoảng 20 MB, chỉ lần đầu)…');
  await py.loadPackage(['sympy']);
  onStatus('Đang khởi tạo…');
  py.runPython(PY_SOURCE);
  engine = py;
  return py;
  })();
  try { return await enginePromise; } finally { enginePromise = null; }
}

/** op: simplify | expand | factor | apart | together | diff | integrate | defint | limit | solve | system | inequality | eval | series | matrix | number. */
export async function calc(op, args, onStatus) {
  const py = await loadSympy(onStatus);
  py.globals.set('_args', JSON.stringify({ op, ...args }));
  const out = py.runPython('run(_args)');
  return JSON.parse(out);
}

export const PY_SOURCE = `
import json, sympy as sp
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, convert_xor
T = standard_transformations + (implicit_multiplication_application, convert_xor)
x, y, z, t, n = sp.symbols('x y z t n')
LD = {'x': x, 'y': y, 'z': z, 't': t, 'n': n, 'e': sp.E, 'pi': sp.pi, 'oo': sp.oo, 'ln': sp.log, 'lg': lambda v: sp.log(v, 10), 'arcsin': sp.asin, 'arccos': sp.acos, 'arctan': sp.atan,
      'abs': sp.Abs, 'sqrt': sp.sqrt, 'cbrt': sp.cbrt, 'Matrix': sp.Matrix, 'Sum': sp.Sum, 'Product': sp.Product, 'Abs': sp.Abs, 'log10': lambda v: sp.log(v, 10)}
def P(s):
    return parse_expr(s, local_dict=LD, transformations=T)
def L(v):
    return sp.latex(v, ln_notation=True, inv_trig_style='power' if False else 'abbreviated')
def VN(res, name='S'):
    s = L(res)
    if res.is_FiniteSet:
        items = [L(v) for v in sorted(res, key=lambda q: float(q) if q.is_real and q.is_number else 0)]
        return name + ' = \\\\left\\\\{' + ';\\\\ '.join(items) + '\\\\right\\\\}' if items else name + ' = \\\\varnothing'
    if res == sp.S.EmptySet:
        return name + ' = \\\\varnothing'
    s = s.replace(', \\\\infty', '; +\\\\infty').replace(', ', '; ')
    return name + ' = ' + s
def R(**kw):
    return json.dumps(kw, ensure_ascii=False)
def var_of(a, default=None):
    v = a.get('var') or default or 'x'
    return sp.Symbol(v)
def relation(s):
    for op in ('<=', '>=', '!=', '<', '>', '='):
        if op in s:
            l, r = s.split(op, 1)
            return op, P(l), P(r)
    return None, P(s), None
def run(raw):
    a = json.loads(raw)
    op = a['op']
    try:
        if op in ('simplify', 'expand', 'factor', 'apart', 'together', 'cancel', 'trigsimp', 'radsimp'):
            e = P(a['expr'])
            fn = {'simplify': sp.simplify, 'expand': sp.expand, 'factor': sp.factor, 'apart': lambda v: sp.apart(v, var_of(a)), 'together': sp.together, 'cancel': sp.cancel, 'trigsimp': sp.trigsimp, 'radsimp': sp.radsimp}[op]
            res = fn(e)
            return R(latex=L(res), text=str(res))
        if op == 'diff':
            e = P(a['expr']); v = var_of(a); k = int(a.get('order') or 1)
            res = sp.diff(e, v, k)
            return R(latex=L(res), text=str(res), simplified=L(sp.simplify(res)))
        if op == 'integrate':
            e = P(a['expr']); v = var_of(a)
            res = sp.integrate(e, v)
            if res.has(sp.Integral): return R(error='SymPy chưa tìm được nguyên hàm dạng đóng của biểu thức này.')
            return R(latex=L(res) + ' + C', text=str(res) + ' + C')
        if op == 'defint':
            e = P(a['expr']); v = var_of(a)
            lo, hi = P(a['lo']), P(a['hi'])
            res = sp.integrate(e, (v, lo, hi))
            if res.has(sp.Integral): return R(error='SymPy chưa tính được tích phân này.')
            return R(latex=L(res), text=str(res), numeric=L(sp.N(res, 8)))
        if op == 'limit':
            e = P(a['expr']); v = var_of(a); pt = P(a['point'])
            d = a.get('dir') or '+-'
            res = sp.limit(e, v, pt, d)
            return R(latex=L(res), text=str(res))
        if op == 'eval':
            e = P(a['expr']); digits = int(a.get('digits') or 10)
            res = sp.N(e, digits)
            return R(latex=L(res), text=str(res), exact=L(sp.nsimplify(e)) )
        if op == 'series':
            e = P(a['expr']); v = var_of(a); pt = P(a.get('point') or '0'); k = int(a.get('order') or 6)
            res = sp.series(e, v, pt, k)
            return R(latex=L(res), text=str(res))
        if op == 'solve':
            lines = [s for s in a['expr'].split('\\n') if s.strip()]
            v = var_of(a)
            rel, l, r = relation(lines[0])
            if rel in ('<', '>', '<=', '>='):
                ineq = {'<': sp.StrictLessThan, '>': sp.StrictGreaterThan, '<=': sp.LessThan, '>=': sp.GreaterThan}[rel](l, r)
                res = sp.solveset(ineq, v, domain=sp.S.Reals)
                return R(latex=VN(res), text=str(res), kind='set', var=str(v))
            eq = sp.Eq(l, r if r is not None else 0)
            res = sp.solveset(eq, v, domain=sp.S.Reals)
            sols = list(res) if res.is_FiniteSet else None
            return R(latex=VN(res), text=str(res), kind='set', var=str(v), solutions=[L(s) for s in sols] if sols is not None else None, numeric=[L(sp.N(s, 6)) for s in sols] if sols else None)
        if op == 'system':
            eqs = []
            syms = set()
            for s in [s for s in a['expr'].split('\\n') if s.strip()]:
                rel, l, r = relation(s)
                eqs.append(sp.Eq(l, r if r is not None else 0)); syms |= (l.free_symbols | (r.free_symbols if r is not None else set()))
            order = sorted(syms, key=lambda q: q.name)
            res = sp.solve(eqs, order, dict=True)
            def one(d): return ',\\\\ '.join(str(k) + ' = ' + L(v) for k, v in sorted(d.items(), key=lambda kv: str(kv[0])))
            tex = ('\\\\text{ hoặc }').join(one(d) for d in res) if res else '\\\\text{vô nghiệm}'
            return R(latex=tex, text=str(res), kind='system', solutions=[{str(k): L(v) for k, v in d.items()} for d in res])
        if op == 'matrix':
            m = P(a['expr'])
            if isinstance(m, (list, tuple)): m = sp.Matrix(m)
            if not isinstance(m, sp.MatrixBase): return R(error='Nhập ma trận dạng [[1,2],[3,4]]')
            what = a.get('what') or 'det'
            res = {'det': lambda: m.det(), 'inv': lambda: m.inv(), 'rank': lambda: m.rank(), 'T': lambda: m.T, 'eigen': lambda: m.eigenvals(), 'rref': lambda: m.rref()[0]}[what]()
            return R(latex=L(res), text=str(res))
        if op == 'number':
            k = sp.Integer(P(a['expr']))
            what = a.get('what') or 'factor'
            if what == 'factor': res = sp.factorint(k); return R(latex=' \\\\cdot '.join(f'{p}^{{{e}}}' if e > 1 else str(p) for p, e in sorted(res.items())), text=str(res))
            if what == 'prime': return R(latex='\\\\text{' + ('là số nguyên tố' if sp.isprime(k) else 'không là số nguyên tố') + '}', text=str(sp.isprime(k)))
            if what == 'divisors': res = sp.divisors(k); return R(latex=L(res), text=str(res))
        return R(error='Thao tác chưa hỗ trợ')
    except Exception as ex:
        return R(error=str(ex)[:300])
`;
