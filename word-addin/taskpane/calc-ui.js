// "Tính toán" tab: SymPy (Pyodide) for algebra, calculus and equations; results as LaTeX, insertable as Word equation or MathType.
import { calc, normalizeInput, CalcError } from '../src/sympy-bridge.js';
import { latexToOmml } from '../src/latex2omml.js';
import { makeEquationPackage } from '../src/ooxml.js';
import { mtOptions } from './mt-settings.js';
import { pickEquation } from '../src/cursor-eq.js';
import { makeMathTypePackage, browserRender } from '../src/mathtype-object.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const field = (label, inner, id = '') => `<label class="field"${id ? ` id="${id}"` : ''}><span>${label}</span>${inner}</label>`;

const OPS = [
  ['Đại số', [['simplify', 'Rút gọn'], ['expand', 'Khai triển'], ['factor', 'Phân tích thành nhân tử'], ['apart', 'Tách phân thức đơn giản'], ['together', 'Quy đồng'], ['cancel', 'Giản ước phân thức'], ['trigsimp', 'Rút gọn lượng giác'], ['eval', 'Tính giá trị (số thập phân)']]],
  ['Giải tích', [['diff', 'Đạo hàm'], ['integrate', 'Nguyên hàm'], ['defint', 'Tích phân xác định'], ['limit', 'Giới hạn'], ['series', 'Khai triển Taylor']]],
  ['Phương trình', [['solve', 'Giải phương trình / bất phương trình'], ['system', 'Giải hệ phương trình']]],
  ['Ma trận & số học', [['matrix', 'Ma trận'], ['number', 'Số nguyên']]],
];
const EXAMPLES = { simplify: '(x^2-1)/(x-1)', expand: '(x+1)^3', factor: 'x^3-3x^2+2x', apart: '(2x+3)/((x-1)(x+2))', together: '1/x+1/(x+1)', cancel: '(x^2-4)/(x^2-2x)', trigsimp: 'sin(x)^2+cos(x)^2', eval: 'sqrt(2)+pi', diff: 'x^3-3x+1', integrate: 'x*sin(x)', defint: 'x^2', limit: 'sin(x)/x', series: 'exp(x)', solve: 'x^2-5x+6=0', system: 'x+y=5\nx-y=1', matrix: '[[1,2],[3,4]]', number: '360' };

export function mountCalc(root, io, hooks = {}) {
  root.innerHTML = `
    <div class="notice">SymPy chạy ngay trong trình duyệt (Python/WebAssembly). Lần đầu cần mạng và tải khoảng 20–30 MB; các lần sau dùng lại bản đã lưu.</div>
    <fieldset><legend>Phép tính</legend>
      ${field('Thao tác', `<select id="c-op">${OPS.map(([g, list]) => `<optgroup label="${g}">${list.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</optgroup>`).join('')}</select>`)}
      ${field('Biểu thức (gõ thường hoặc LaTeX)', '<textarea id="c-expr" rows="3" spellcheck="false"></textarea>')}
      <div class="btns two"><button class="secondary" id="c-load">Lấy công thức từ Word</button><label class="switch" style="margin:0"><input type="checkbox" id="c-auto" checked><span class="switch-track"></span><span>Tự lấy theo con trỏ</span></label></div>
      <div id="c-opts"></div>
      <div class="btns"><button class="primary" id="c-run">Tính</button></div>
      <div id="c-status" class="muted"></div>
    </fieldset>
    <div id="c-results"></div>`;
  const $ = (id) => root.querySelector('#' + id);
  const results = [];

  function options() {
    const op = $('c-op').value;
    const v = field('Biến', '<input type="text" id="c-var" value="x" maxlength="2">');
    let html = '';
    if (['diff'].includes(op)) html = `<div class="grid2">${v}${field('Cấp đạo hàm', '<input type="number" id="c-order" value="1" min="1" max="6">')}</div>`;
    else if (op === 'integrate' || op === 'apart') html = v;
    else if (op === 'defint') html = `${v}<div class="grid2">${field('Cận dưới', '<input type="text" id="c-lo" value="0">')}${field('Cận trên', '<input type="text" id="c-hi" value="1">')}</div>`;
    else if (op === 'limit') html = `<div class="grid3">${v}${field('x →', '<input type="text" id="c-pt" value="0">')}${field('Phía', '<select id="c-dir"><option value="+-">hai phía</option><option value="+">phải (+)</option><option value="-">trái (−)</option></select>')}</div><div class="hint">Dùng <b>oo</b> hoặc ∞ cho vô cực (vd. x → oo).</div>`;
    else if (op === 'series') html = `<div class="grid3">${v}${field('Tại', '<input type="text" id="c-pt" value="0">')}${field('Số hạng', '<input type="number" id="c-order" value="6" min="2" max="12">')}</div>`;
    else if (op === 'solve') html = `${v}<div class="hint">Phương trình: x^2-5x+6=0 · Bất phương trình: (x-1)/(x+2)>=0</div>`;
    else if (op === 'eval') html = field('Số chữ số', '<input type="number" id="c-digits" value="10" min="3" max="60">');
    else if (op === 'matrix') html = field('Phép tính', '<select id="c-what"><option value="det">Định thức</option><option value="inv">Ma trận nghịch đảo</option><option value="rank">Hạng</option><option value="T">Chuyển vị</option><option value="rref">Dạng bậc thang rút gọn</option><option value="eigen">Giá trị riêng</option></select>');
    else if (op === 'number') html = field('Phép tính', '<select id="c-what"><option value="factor">Phân tích ra thừa số nguyên tố</option><option value="prime">Có phải số nguyên tố?</option><option value="divisors">Các ước</option></select>');
    $('c-opts').innerHTML = html;
    if (!$('c-expr').dataset.touched) $('c-expr').value = EXAMPLES[op] || '';
  }
  $('c-op').addEventListener('change', options);
  $('c-expr').addEventListener('input', () => { $('c-expr').dataset.touched = '1'; });
  $('c-expr').addEventListener('keydown', (ev) => { if ((ev.ctrlKey || ev.metaKey) && ev.key === 'Enter') { ev.preventDefault(); run(); } });

  const val = (id) => (root.querySelector('#' + id) || {}).value;
  async function run() {
    const op = $('c-op').value, btn = $('c-run');
    if (btn.disabled) return;
    btn.disabled = true;
    try {
      const lines = $('c-expr').value.split('\n').map((l) => normalizeInput(l)).join('\n');
      const args = { expr: lines, var: val('c-var') || 'x', order: val('c-order'), lo: val('c-lo'), hi: val('c-hi'), point: val('c-pt'), dir: val('c-dir'), digits: val('c-digits'), what: val('c-what') };
      $('c-status').textContent = 'Đang tính…';
      const r = await calc(op, args, (m) => { $('c-status').textContent = m; });
      $('c-status').textContent = '';
      if (r.error) throw new CalcError(r.error);
      results.unshift({ op, input: $('c-expr').value.trim(), r });
      results.length = Math.min(results.length, 8);
      render();
    } catch (e) { $('c-status').innerHTML = `<span class="bad">${esc(e.message)}</span>`; } finally { btn.disabled = false; }
  }
  $('c-run').addEventListener('click', run);

  // the formula at the cursor in Word (MathType object, Word equation or $LaTeX$) -> the expression box
  let lastLatex = '';
  async function loadFromWord(showNotice) {
    try {
      const r = pickEquation(await io.readCursorContext());
      if (!r.eq) { if (showNotice) $('c-status').innerHTML = '<span class="warn">Không thấy công thức tại con trỏ / vùng chọn.</span>'; return; }
      if (!showNotice && r.eq.latex === lastLatex) return;
      lastLatex = r.eq.latex;
      $('c-expr').value = r.eq.latex.replace(/\s+/g, ' ').trim();
      $('c-expr').dataset.touched = '1';
      const kind = r.eq.kind === 'mathtype' ? 'MathType' : r.eq.kind === 'native' ? 'Word Equation' : 'LaTeX';
      $('c-status').innerHTML = `<span class="ok">Đã lấy công thức (${kind})${r.count > 1 ? ` ${r.index + 1}/${r.count}` : ''}.</span>`;
    } catch (e) { if (showNotice) $('c-status').innerHTML = `<span class="bad">${esc(e.message)}</span>`; }
  }
  $('c-load').addEventListener('click', () => loadFromWord(true));
  document.addEventListener('texcraft:selection', () => {
    if (!$('c-auto').checked || !root.closest('section')?.classList.contains('active')) return;
    if (document.activeElement === $('c-expr')) return;   // typing: do not overwrite
    loadFromWord(false);
  });

  function tex(latex) { try { if (typeof katex !== 'undefined') return katex.renderToString(latex, { throwOnError: false, displayMode: true }); } catch { /* fall back */ } return `<code>${esc(latex)}</code>`; }
  function render() {
    $('c-results').innerHTML = results.slice(0, 8).map((it, i) => {
      const r = it.r, label = OPS.flatMap(([, l]) => l).find(([v]) => v === it.op)[1];
      const extra = [r.simplified && r.simplified !== r.latex ? `Rút gọn: ${tex(r.simplified)}` : '', r.numeric ? `Gần đúng: ${tex(Array.isArray(r.numeric) ? r.numeric.join(',\;') : r.numeric)}` : '', r.exact ? `Dạng chính xác: ${tex(r.exact)}` : ''].filter(Boolean).join('');
      return `<fieldset class="calc-card" data-i="${i}"><legend>${esc(label)}</legend><div class="muted calc-input">${esc(it.input).replace(/\n/g, ' · ')}</div><div class="calc-result">${tex(r.latex)}</div>${extra ? `<div class="calc-extra">${extra}</div>` : ''}
        <div class="btns four"><button class="secondary" data-a="word">Chèn công thức Word</button><button class="secondary" data-a="mt">Chèn MathType</button><button class="secondary" data-a="copy">Sao chép LaTeX</button><button class="secondary" data-a="edit">Mở trong Soạn thảo</button></div><div class="calc-out"></div></fieldset>`;
    }).join('');
  }
  $('c-results').addEventListener('click', async (ev) => {
    const b = ev.target.closest('button[data-a]');
    if (!b) return;
    const card = b.closest('.calc-card'), it = results[Number(card.dataset.i)], out = card.querySelector('.calc-out');
    const latex = it.r.latex;
    try {
      if (b.dataset.a === 'copy') { await navigator.clipboard.writeText(latex); out.innerHTML = '<span class="ok">Đã sao chép LaTeX.</span>'; }
      else if (b.dataset.a === 'edit') { if (hooks.openEditor) hooks.openEditor(latex); }
      else if (b.dataset.a === 'word') { await io.replaceSelection(makeEquationPackage(latexToOmml(latex, { display: false }))); out.innerHTML = '<span class="ok">Đã chèn công thức Word.</span>'; }
      else { await io.replaceSelection(await makeMathTypePackage(latex, { render: browserRender, inline: true, ...(await mtOptions()) })); out.innerHTML = '<span class="ok">Đã chèn đối tượng MathType.</span>'; }
    } catch (e) { out.innerHTML = `<span class="bad">${esc(e.message)}</span>`; }
  });
  options();
}
