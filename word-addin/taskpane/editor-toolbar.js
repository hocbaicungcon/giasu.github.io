// Toolbar of the equation editor: grouped buttons showing the real rendered symbol (KaTeX), search, recent items,
// insertion that wraps the selected text, templates with Tab stops.
import { nextStop } from '../src/latex-suggest.js';
import { renderLatex } from '../src/mathrender.js';

// [face (LaTeX drawn on the button), snippet ("@" = caret / selected text), title, extra search words]
const G = (id, label, icon, items) => ({ id, label, icon, items });
const GROUPS = [
  G('struct', 'Đại số', '\\sqrt{x}', [
    ['\\tfrac{a}{b}', '\\frac{@}{}', 'Phân số', 'phan so frac'],
    ['\\sqrt{x}', '\\sqrt{@}', 'Căn bậc hai', 'can sqrt'],
    ['\\sqrt[n]{x}', '\\sqrt[@]{}', 'Căn bậc n (ô đầu: chỉ số n)', 'can bac n'],
    ['x^{2}', '^{@}', 'Số mũ', 'mu luy thua'],
    ['x_{i}', '_{@}', 'Chỉ số dưới', 'chi so duoi'],
    ['x_{i}^{2}', '_{@}^{}', 'Chỉ số dưới và số mũ', ''],
    ['\\left(x\\right)', '\\left( @ \\right)', 'Ngoặc tròn co giãn', 'ngoac tron'],
    ['\\left[x\\right]', '\\left[ @ \\right]', 'Ngoặc vuông co giãn', 'ngoac vuong'],
    ['\\left\\{x\\right\\}', '\\left\\{ @ \\right\\}', 'Ngoặc nhọn co giãn', 'ngoac nhon tap hop'],
    ['\\left|x\\right|', '\\left| @ \\right|', 'Giá trị tuyệt đối', 'tri tuyet doi abs'],
    ['\\overline{AB}', '\\overline{@}', 'Gạch trên', 'gach tren'],
    ['\\underline{x}', '\\underline{@}', 'Gạch dưới', 'gach duoi'],
    ['\\boxed{x}', '\\boxed{@}', 'Khung', 'khung'],
    ['\\binom{n}{k}', '\\binom{@}{}', 'Tổ hợp', 'to hop binom'],
    ['\\overbrace{x}^{n}', '\\overbrace{@}^{}', 'Ngoặc nhọn trên', ''],
    ['\\underbrace{x}_{n}', '\\underbrace{@}_{}', 'Ngoặc nhọn dưới', ''],
  ]),
  G('calc', 'Giải tích', '\\int', [
    ['\\int', '\\int @ \\,\\mathrm{d}x', 'Tích phân bất định', 'tich phan'],
    ['\\int_a^b', '\\int_{@}^{} \\,\\mathrm{d}x', 'Tích phân xác định', 'tich phan xac dinh'],
    ['\\sum_{i}^{n}', '\\sum_{i=@}^{n}', 'Tổng', 'tong sigma'],
    ['\\prod', '\\prod_{i=@}^{n}', 'Tích', 'tich pi'],
    ['\\lim_{x\\to a}', '\\lim_{x \\to @}', 'Giới hạn', 'gioi han'],
    ['\\lim_{x\\to\\infty}', '\\lim_{x \\to +\\infty} @', 'Giới hạn tại +∞', 'gioi han vo cuc'],
    ["f'", "f'(@)", 'Đạo hàm', 'dao ham'],
    ['\\tfrac{d}{dx}', '\\frac{\\mathrm{d}}{\\mathrm{d}x} @', 'd/dx', 'dao ham'],
    ['\\left.f\\right|_a^b', '\\left. @ \\right|_{}^{}', 'Thế cận (F(x)|ₐᵇ)', 'the can'],
    ['\\log_a', '\\log_{@}', 'Logarit cơ số a', 'logarit'],
    ['\\ln', '\\ln @', 'Logarit tự nhiên', 'ln'],
    ['\\lg', '\\lg @', 'Logarit thập phân', 'lg'],
    ['\\sin', '\\sin @', 'sin', ''], ['\\cos', '\\cos @', 'cos', ''], ['\\tan', '\\tan @', 'tan', ''], ['\\cot', '\\cot @', 'cot', ''],
    ['\\max', '\\max_{@}', 'Giá trị lớn nhất', 'max'], ['\\min', '\\min_{@}', 'Giá trị nhỏ nhất', 'min'],
    ['\\infty', '\\infty', 'Vô cực', 'vo cuc'],
    ['\\to', '\\to ', 'Tiến tới', 'tien toi'],
    ['\\xrightarrow{n}', '\\xrightarrow{@}', 'Mũi tên có chữ', ''],
  ]),
  G('system', 'Hệ & ma trận', '\\{\\begin{smallmatrix}x\\\\y\\end{smallmatrix}', [
    ['\\scriptstyle\\begin{cases}a\\\\b\\end{cases}', '\\left\\{ \\begin{array}{l} @ \\\\ \\end{array} \\right.', 'Hệ phương trình (2 dòng)', 'he phuong trinh cases'],
    ['\\scriptstyle\\left[\\begin{matrix}a\\\\b\\end{matrix}\\right.', '\\left[ \\begin{array}{l} @ \\\\ \\end{array} \\right.', 'Hoặc (ngoặc vuông, 2 dòng)', 'hoac'],
    ['\\scriptstyle\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}', '\\left( \\begin{array}{cc} @ & \\\\ & \\end{array} \\right)', 'Ma trận 2×2', 'ma tran'],
    ['\\scriptstyle\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}', '\\left[ \\begin{array}{cc} @ & \\\\ & \\end{array} \\right]', 'Ma trận vuông 2×2', ''],
    ['\\scriptstyle\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}', '\\left| \\begin{array}{cc} @ & \\\\ & \\end{array} \\right|', 'Định thức 2×2', 'dinh thuc'],
    ['\\scriptscriptstyle\\begin{pmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{pmatrix}', '\\left( \\begin{array}{ccc} @ & & \\\\ & & \\\\ & & \\end{array} \\right)', 'Ma trận 3×3', ''],
    ['a \\\\ b', ' \\\\ ', 'Xuống dòng (trong hệ)', 'xuong dong'],
    ['a & b', ' & ', 'Sang cột (trong ma trận)', ''],
  ]),
  G('ops', 'Phép toán & quan hệ', '\\pm', [
    ['\\pm', '\\pm ', 'Cộng trừ', 'cong tru'], ['\\mp', '\\mp ', 'Trừ cộng', ''], ['\\times', '\\times ', 'Nhân', 'nhan'], ['\\div', '\\div ', 'Chia', ''], ['\\cdot', '\\cdot ', 'Chấm nhân', ''], ['\\circ', '\\circ ', 'Hợp (∘)', ''],
    ['=', '=', 'Bằng', ''], ['\\neq', '\\neq ', 'Khác', 'khac'], ['\\approx', '\\approx ', 'Xấp xỉ', 'xap xi'], ['\\equiv', '\\equiv ', 'Đồng nhất / đồng dư', ''], ['\\sim', '\\sim ', 'Đồng dạng', 'dong dang'], ['\\cong', '\\cong ', 'Bằng nhau (≅)', ''],
    ['<', '<', 'Nhỏ hơn', ''], ['>', '>', 'Lớn hơn', ''], ['\\leq', '\\leq ', 'Nhỏ hơn hoặc bằng', ''], ['\\geq', '\\geq ', 'Lớn hơn hoặc bằng', ''], ['\\ll', '\\ll ', 'Rất nhỏ hơn', ''], ['\\gg', '\\gg ', 'Rất lớn hơn', ''],
    ['\\propto', '\\propto ', 'Tỉ lệ thuận', ''], ['\\ldots', '\\ldots ', 'Ba chấm dưới', ''], ['\\cdots', '\\cdots ', 'Ba chấm giữa', ''], ['\\vdots', '\\vdots ', 'Ba chấm dọc', ''],
  ]),
  G('sets', 'Tập hợp & logic', '\\in', [
    ['\\in', '\\in ', 'Thuộc', 'thuoc'], ['\\notin', '\\notin ', 'Không thuộc', ''], ['\\ni', '\\ni ', 'Chứa phần tử', ''], ['\\subset', '\\subset ', 'Tập con', 'tap con'], ['\\subseteq', '\\subseteq ', 'Tập con hoặc bằng', ''], ['\\supset', '\\supset ', 'Chứa tập', ''],
    ['\\cup', '\\cup ', 'Hợp', 'hop'], ['\\cap', '\\cap ', 'Giao', 'giao'], ['\\setminus', '\\setminus ', 'Hiệu tập', ''], ['\\emptyset', '\\emptyset ', 'Tập rỗng', 'tap rong'],
    ['\\mathbb{R}', '\\mathbb{R}', 'Tập số thực', 'so thuc'], ['\\mathbb{N}', '\\mathbb{N}', 'Tập số tự nhiên', ''], ['\\mathbb{Z}', '\\mathbb{Z}', 'Tập số nguyên', ''], ['\\mathbb{Q}', '\\mathbb{Q}', 'Tập số hữu tỉ', ''], ['\\mathbb{C}', '\\mathbb{C}', 'Tập số phức', ''],
    ['\\forall', '\\forall ', 'Với mọi', 'voi moi'], ['\\exists', '\\exists ', 'Tồn tại', 'ton tai'], ['\\neg', '\\neg ', 'Phủ định', ''], ['\\wedge', '\\wedge ', 'Và', ''], ['\\vee', '\\vee ', 'Hoặc', ''],
    ['\\Rightarrow', '\\Rightarrow ', 'Suy ra', 'suy ra'], ['\\Leftarrow', '\\Leftarrow ', 'Kéo theo ngược', ''], ['\\Leftrightarrow', '\\Leftrightarrow ', 'Tương đương', 'tuong duong'], ['\\rightarrow', '\\rightarrow ', 'Mũi tên phải', ''], ['\\leftarrow', '\\leftarrow ', 'Mũi tên trái', ''], ['\\leftrightarrow', '\\leftrightarrow ', 'Mũi tên hai chiều', ''], ['\\mapsto', '\\mapsto ', 'Ánh xạ', ''],
    ['\\therefore', '\\therefore ', 'Vậy', ''], ['\\because', '\\because ', 'Vì', ''],
  ]),
  G('geo', 'Hình học', '\\angle', [
    ['\\vec{u}', '\\vec{@}', 'Vectơ (1 chữ)', 'vecto'], ['\\overrightarrow{AB}', '\\overrightarrow{@}', 'Vectơ AB', 'vecto'], ['|\\vec{AB}|', '\\left| \\overrightarrow{@} \\right|', 'Độ dài vectơ', ''],
    ['\\vec{a}\\cdot\\vec{b}', '\\overrightarrow{@} \\cdot \\overrightarrow{}', 'Tích vô hướng', ''],
    ['\\widehat{AB}', '\\widehat{@}', 'Góc (dấu mũ)', 'goc'], ['\\angle', '\\angle ', 'Ký hiệu góc ∠', ''], ['{}^{\\circ}', '^{\\circ}', 'Độ (°)', 'do'],
    ['\\overset{\\frown}{AB}', '\\overset{\\frown}{@}', 'Cung AB', 'cung'], ['\\triangle', '\\triangle ', 'Tam giác', 'tam giac'], ['\\square', '\\square ', 'Hình vuông', ''],
    ['\\perp', '\\perp ', 'Vuông góc', 'vuong goc'], ['\\parallel', '\\parallel ', 'Song song', 'song song'], ['\\nparallel', '\\nparallel ', 'Không song song', ''], ['\\sim', '\\sim ', 'Đồng dạng', ''], ['\\cong', '\\cong ', 'Bằng nhau (≅)', ''],
  ]),
  G('greek', 'Hy Lạp', '\\alpha', [...'alpha beta gamma delta epsilon varepsilon zeta eta theta iota kappa lambda mu nu xi pi rho sigma tau upsilon phi varphi chi psi omega'.split(' ').map((n) => [`\\${n}`, `\\${n} `, n, 'hy lap greek']),
    ...'Gamma Delta Theta Lambda Xi Pi Sigma Phi Psi Omega'.split(' ').map((n) => [`\\${n}`, `\\${n} `, n, 'hy lap greek hoa'])]),
  G('space', 'Chữ & khoảng cách', '\\mathbf{A}', [
    ['\\text{ab}', '\\text{@}', 'Chữ thường (văn bản)', 'van ban text'],
    ['\\mathrm{d}', '\\mathrm{@}', 'Chữ đứng', 'chu dung'],
    ['\\mathbf{v}', '\\mathbf{@}', 'Chữ đậm', 'chu dam'],
    ['\\mathbb{R}', '\\mathbb{@}', 'Tập số (R, N, Z, Q, C)', 'tap so'],
    ['\\mathcal{L}', '\\mathcal{@}', 'Chữ thư pháp', 'thu phap'],
    ['\\mathsf{A}', '\\mathsf{@}', 'Chữ không chân', 'khong chan'],
    ['a\\,b', '\\,', 'Cách mỏng', 'cach'], ['a\\;b', '\\;', 'Cách vừa', ''], ['a\\quad b', '\\quad ', 'Cách rộng', ''], ['a\\text{ }b', '\\text{ }', 'Dấu cách (văn bản)', ''],
    ['1{,}5', '{,}', 'Dấu phẩy thập phân (1{,}5)', 'thap phan'], [';', '; ', 'Chấm phẩy', ''],
  ]),
];

const KEY_RECENT = 'texcraft-addin-recent-symbols';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const strip = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase();

const faceCache = new Map();
/** The picture on a button: the symbol drawn by KaTeX, exactly as in the live preview (our own layout only as a fallback). */
export function face(latex) {
  if (faceCache.has(latex)) return faceCache.get(latex);
  let out;
  try {
    if (typeof katex === 'undefined') throw new Error('no katex');
    out = `<span class="tb-math">${katex.renderToString(`\\displaystyle ${latex}`, { throwOnError: true, output: 'html', strict: 'ignore' })}</span>`;
  } catch {
    try {
      const r = renderLatex(latex, { fontSize: 15, pad: 1 });
      out = r.svg.replace(/ width="[^"]*pt" height="[^"]*pt"/, ` fill="currentColor" class="tb-svg" style="aspect-ratio:${(r.width / r.height).toFixed(3)}"`).replace(/#000/g, 'currentColor');
    } catch { out = `<span class="tb-text">${esc(latex)}</span>`; }
  }
  if (typeof katex !== 'undefined') faceCache.set(latex, out);
  return out;
}

export function insertSnippet(field, snippet) {
  const v = field.value, s = field.selectionStart ?? v.length, e = field.selectionEnd ?? s;
  const selected = v.slice(s, e);
  let text = snippet, caret;
  const at = text.indexOf('@');
  if (at >= 0) {
    text = text.replace('@', selected);
    caret = selected ? s + text.length : s + at;
  } else caret = s + text.length;
  let out = v.slice(0, s) + text + v.slice(e);
  const next = out[s + text.length] || '';
  if (/\\[A-Za-z]+$/.test(text) && /[A-Za-z]/.test(next)) { out = out.slice(0, s + text.length) + ' ' + out.slice(s + text.length); if (!selected && at < 0) caret += 1; }
  field.value = out;
  field.setSelectionRange(caret, caret);
  field.focus();
  field.dispatchEvent(new Event('input', { bubbles: true }));
  return caret;
}

export function mountEditorToolbar(root, field, { visual = null } = {}) {
  if (!root || !field) return;
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem(KEY_RECENT) || '[]'); } catch { recent = []; }
  const all = GROUPS.flatMap((g) => g.items.map((it) => ({ it, group: g.id })));
  const byKey = new Map(all.map(({ it }) => [it[1], it]));
  let active = 'struct';

  root.innerHTML = `
    <div class="tb-search"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg><input type="search" id="tb-q" placeholder="Tìm ký hiệu: phân số, tích phân, vuông góc…" autocomplete="off"></div>
    <div class="tb-recent" id="tb-recent" hidden><span class="tb-recent-label">Gần đây</span><div class="tb-grid" id="tb-recent-grid"></div></div>
    <div class="tb-tabs" role="tablist">${GROUPS.map((g) => `<button type="button" role="tab" class="tb-tab" data-g="${g.id}" title="${esc(g.label)}"><span class="tb-tab-icon">${face(g.icon)}</span><span class="tb-tab-label">${esc(g.label)}</span></button>`).join('')}</div>
    <div class="tb-grid" id="tb-grid"></div>
    <div class="tb-tip">Bôi đen chữ trong ô LaTeX rồi bấm nút để bao chữ đó vào (ví dụ bôi <code>x+1</code> rồi bấm √). Tab nhảy giữa các ô trống.</div>`;

  const grid = root.querySelector('#tb-grid');
  const btn = (it) => `<button type="button" class="tb-btn${/begin\{[pbv]?matrix\}/.test(it[0]) ? ' wide' : ''}" data-s="${esc(it[1])}" title="${esc(it[2])}  —  ${esc(it[1].replace('@', ''))}">${face(it[0])}</button>`;
  const renderGrid = (items) => { grid.innerHTML = items.length ? items.map(btn).join('') : '<div class="tb-empty">Không có ký hiệu phù hợp.</div>'; };
  const renderRecent = () => {
    const items = recent.map((k) => byKey.get(k)).filter(Boolean).slice(0, 10);
    root.querySelector('#tb-recent').hidden = !items.length;
    root.querySelector('#tb-recent-grid').innerHTML = items.map(btn).join('');
  };
  const showGroup = (id) => {
    active = id;
    root.querySelectorAll('.tb-tab').forEach((t) => t.classList.toggle('active', t.dataset.g === id));
    renderGrid(GROUPS.find((g) => g.id === id).items);
  };
  root.querySelector('.tb-tabs').addEventListener('click', (ev) => { const t = ev.target.closest('.tb-tab'); if (t) { root.querySelector('#tb-q').value = ''; showGroup(t.dataset.g); } });
  root.querySelector('#tb-q').addEventListener('input', (ev) => {
    const q = strip(ev.target.value.trim());
    if (!q) { showGroup(active); return; }
    root.querySelectorAll('.tb-tab').forEach((t) => t.classList.remove('active'));
    renderGrid(all.filter(({ it }) => strip(`${it[2]} ${it[3]} ${it[1]}`).includes(q)).map(({ it }) => it));
  });
  root.addEventListener('mousedown', (ev) => { if (ev.target.closest('.tb-btn')) ev.preventDefault(); });   // keep the caret / selection in the LaTeX box
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('.tb-btn');
    if (!b) return;
    const snippet = b.dataset.s;
    if (visual && visual.active()) visual.insert(snippet); else insertSnippet(field, snippet);
    recent = [snippet, ...recent.filter((k) => k !== snippet)].slice(0, 12);
    try { localStorage.setItem(KEY_RECENT, JSON.stringify(recent)); } catch { /* ignore */ }
    renderRecent();
  });
  showGroup('struct');
  renderRecent();
  void nextStop;
}
