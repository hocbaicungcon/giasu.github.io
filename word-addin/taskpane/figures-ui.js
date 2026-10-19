// "Hình vẽ" tab: variation table, graph, solution region, geometry figures. Insert into Word as editable shapes or as a picture.
import { variationTable } from '../src/figures/bbt.js';
import { plotFunctions, PRESETS } from '../src/figures/plot.js';
import { regionFigure } from '../src/figures/region.js';
import { GEOMETRY } from '../src/figures/geometry.js';
import { sceneToPackage } from '../src/figures/scene.js';
import { makePicturePackage, svgToPngPx, downloadBlob } from '../src/picture.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (v) => (v === '' || v === null || v === undefined || Number.isNaN(Number(v)) ? undefined : Number(v));
const sw = (id, label, checked = false) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? ' checked' : ''}><span class="switch-track"></span><span>${label}</span></label>`;
const field = (label, inner) => `<label class="field"><span>${label}</span>${inner}</label>`;

export function mountFigures(root, io) {
  const kinds = [['bbt', 'Bảng biến thiên'], ['plot', 'Đồ thị'], ['region', 'Miền nghiệm'], ['geo', 'Hình học']];
  root.innerHTML = `
    <div class="tb-tabs fig-tabs" role="tablist">${kinds.map(([id, l]) => `<button type="button" class="tb-tab" data-k="${id}"><span class="tb-tab-label" style="display:inline">${l}</span></button>`).join('')}</div>
    <div id="fig-error" class="bad"></div>
    <div class="fig-preview" id="fig-preview"></div>
    <div class="btns two"><button class="primary" id="fig-insert">Chèn vào Word (hình sửa được)</button><button class="secondary" id="fig-png">Chèn dạng ảnh PNG</button></div>
    <div class="btns two"><button class="secondary" id="fig-dl-png">Tải PNG</button><button class="secondary" id="fig-dl-svg">Tải SVG</button></div>
    <div class="hint" id="fig-note">“Hình sửa được” là các đường thẳng, hộp chữ và công thức Word nhóm lại: bấm vào để sửa từng phần trong Word.</div>
    <div id="fig-out"></div>
    <div id="fig-form"></div>`;
  const $ = (id) => root.querySelector('#' + id);
  let kind = 'bbt', current = null, timer = null;

  const forms = {
    bbt: () => `${field('Hàm số y = f(x)', '<input type="text" id="b-expr" value="x^3-3x+1" spellcheck="false" placeholder="vd. (2x+1)/(x-1), x^3-3x+1, sqrt(x)">')}
      <label class="field"><span>Mẫu có sẵn</span><select id="b-preset"><option value="">— chọn mẫu —</option>${PRESETS.map((p) => `<option value="${esc(p.expr)}">${esc(p.label)}</option>`).join('')}</select></label>
      <div class="grid2">${field('Khảo sát từ x =', '<input type="number" id="b-lo" placeholder="−∞">')}${field('đến x =', '<input type="number" id="b-hi" placeholder="+∞">')}</div>
      ${field('Ghi chú tập xác định (tùy chọn)', '<input type="text" id="b-domain" placeholder="vd. TXĐ: D = ℝ \\ {1}">')}`,
    plot: () => `${field('Hàm số (mỗi dòng một hàm)', '<textarea id="p-expr" rows="2" spellcheck="false">x^3-3x+1</textarea>')}
      <label class="field"><span>Mẫu có sẵn</span><select id="p-preset"><option value="">— chọn mẫu —</option>${PRESETS.map((p) => `<option value="${p.id}">${esc(p.label)}</option>`).join('')}</select></label>
      <div class="subhead">Khoảng giá trị trên các trục</div>
      <div class="grid2">${field('x nhỏ nhất', '<input type="number" id="p-xmin" value="-3" step="any">')}${field('x lớn nhất', '<input type="number" id="p-xmax" value="3" step="any">')}</div>
      <div class="grid2">${field('y nhỏ nhất', '<input type="number" id="p-ymin" placeholder="tự động" step="any">')}${field('y lớn nhất', '<input type="number" id="p-ymax" placeholder="tự động" step="any">')}</div>
      <div class="subhead">Hiển thị</div>
      ${sw('p-grid', 'Hiện lưới', true)}${sw('p-asym', 'Tiệm cận đứng (nét đứt)', true)}${sw('p-points', 'Đánh dấu điểm cực trị', true)}${sw('p-legend', 'Ghi tên hàm số (khi vẽ nhiều hàm)')}`,
    region: () => `${field('Hệ bất phương trình (mỗi dòng một bất phương trình)', '<textarea id="r-ineq" rows="4" spellcheck="false">x+y<=4\n2x-y>=-2\nx>=0\ny>=0</textarea>')}
      <label class="field"><span>Cách thể hiện miền nghiệm</span><select id="r-mode"><option value="hatch">Gạch bỏ phần không thuộc miền nghiệm</option><option value="fill">Tô màu miền nghiệm</option></select></label>
      <div class="grid2">${field('x nhỏ nhất', '<input type="number" id="r-xmin" placeholder="tự động" step="any">')}${field('x lớn nhất', '<input type="number" id="r-xmax" placeholder="tự động" step="any">')}</div>
      <div class="grid2">${field('y nhỏ nhất', '<input type="number" id="r-ymin" placeholder="tự động" step="any">')}${field('y lớn nhất', '<input type="number" id="r-ymax" placeholder="tự động" step="any">')}</div>
      ${sw('r-grid', 'Hiện lưới', true)}${sw('r-vertices', 'Ghi tên và tọa độ các đỉnh', true)}${sw('r-lines', 'Ghi tên các đường thẳng (d₁), (d₂)…', true)}`,
    geo: () => `<label class="field"><span>Hình</span><select id="g-kind">${GEOMETRY.map((g) => `<option value="${g.id}">${esc(g.label)}</option>`).join('')}</select></label><div id="g-opts"></div>`,
  };

  function geoOptions() {
    const g = GEOMETRY.find((x) => x.id === $('g-kind').value);
    $('g-opts').innerHTML = g.options.map(([key, label, choices]) => (choices
      ? field(label, `<select data-opt="${key}">${choices.map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join('')}</select>`)
      : sw('go-' + key, label, /^show/.test(key)))).join('') + (g.names ? field('Tên các điểm (cách nhau bởi dấu phẩy)', `<input type="text" id="g-names" value="${esc(g.names)}" spellcheck="false" placeholder="${esc(g.names)}">`) + (g.hint ? `<div class="hint">${esc(g.hint)}</div>` : '<div class="hint">Đổi tên tùy ý, ví dụ M,N,P,Q; ô để trống dùng tên mặc định.</div>') : '');
    $('g-opts').querySelectorAll('input,select').forEach((el) => el.addEventListener('input', schedule));
    const kindSel = $('g-opts').querySelector('select[data-opt="kind"]');
    if (g.id === 'round' && kindSel && $('g-names')) kindSel.addEventListener('change', () => { $('g-names').value = { cone: 'S,O,A', cylinder: "O,O',A", frustum: "O,O'", sphere: 'O,A' }[kindSel.value]; render(); });
  }

  function build() {
    if (kind === 'bbt') {
      const r = variationTable($('b-expr').value, { lo: num($('b-lo').value), hi: num($('b-hi').value), domain: $('b-domain').value.trim() });
      return r;
    }
    if (kind === 'plot') {
      const exprs = $('p-expr').value.split('\n').map((s) => s.trim()).filter(Boolean);
      if (!exprs.length) throw new Error('Nhập ít nhất một hàm số');
      return plotFunctions(exprs, { xmin: num($('p-xmin').value), xmax: num($('p-xmax').value), ymin: num($('p-ymin').value), ymax: num($('p-ymax').value), grid: $('p-grid').checked, asymptotes: $('p-asym').checked, points: $('p-points').checked, legend: $('p-legend').checked });
    }
    if (kind === 'region') {
      const r = regionFigure($('r-ineq').value.split('\n'), { mode: $('r-mode').value, xmin: num($('r-xmin').value), xmax: num($('r-xmax').value), ymin: num($('r-ymin').value), ymax: num($('r-ymax').value), grid: $('r-grid').checked, vertices: $('r-vertices').checked, labelLines: $('r-lines').checked });
      if (r.empty) throw new Error('Hệ bất phương trình vô nghiệm (miền nghiệm rỗng) trong khung nhìn này.');
      return r;
    }
    const g = GEOMETRY.find((x) => x.id === $('g-kind').value);
    const o = { names: $('g-names') ? $('g-names').value : '' };
    $('g-opts').querySelectorAll('select[data-opt]').forEach((s) => { o[s.dataset.opt] = s.value; });
    $('g-opts').querySelectorAll('input[id^="go-"]').forEach((c) => { o[c.id.slice(3)] = c.checked; });
    return g.make(o);
  }
  function render() {
    $('fig-error').textContent = '';
    try { current = build(); $('fig-preview').innerHTML = current.svg; } catch (e) { current = null; $('fig-error').textContent = e.message; }
    ['fig-insert', 'fig-png', 'fig-dl-png', 'fig-dl-svg'].forEach((id) => { $(id).disabled = !current; });
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(render, 250); }

  function show(k) {
    kind = k;
    root.querySelectorAll('.fig-tabs .tb-tab').forEach((t) => t.classList.toggle('active', t.dataset.k === k));
    $('fig-form').innerHTML = forms[k]();
    $('fig-form').querySelectorAll('input,textarea,select').forEach((el) => el.addEventListener('input', schedule));
    if (k === 'geo') { $('g-kind').addEventListener('change', () => { geoOptions(); render(); }); geoOptions(); }
    if (k === 'bbt') $('b-preset').addEventListener('change', () => { if ($('b-preset').value) { $('b-expr').value = $('b-preset').value; render(); } });
    if (k === 'plot') $('p-preset').addEventListener('change', () => {
      const p = PRESETS.find((x) => x.id === $('p-preset').value);
      if (!p) return;
      $('p-expr').value = p.expr; $('p-xmin').value = p.win[0]; $('p-xmax').value = p.win[1]; $('p-ymin').value = p.win[2]; $('p-ymax').value = p.win[3];
      render();
    });
    render();
  }
  root.querySelector('.fig-tabs').addEventListener('click', (ev) => { const t = ev.target.closest('.tb-tab'); if (t) show(t.dataset.k); });

  const title = () => ({ bbt: 'Bảng biến thiên', plot: 'Đồ thị hàm số', region: 'Miền nghiệm', geo: 'Hình học' }[kind]);
  $('fig-insert').addEventListener('click', async () => {
    try { await io.replaceSelection(sceneToPackage(current.scene, { name: title(), alt: title() })); $('fig-out').innerHTML = '<span class="ok">Đã chèn vào Word tại con trỏ (hình sửa được).</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  });
  $('fig-png').addEventListener('click', async () => {
    try { const png = await svgToPngPx(current.svg, current.width, current.height, 3); await io.replaceSelection(makePicturePackage(png, { widthPt: current.width * 0.75, heightPt: current.height * 0.75, alt: title(), name: 'Hinh', center: true })); $('fig-out').innerHTML = '<span class="ok">Đã chèn ảnh PNG vào Word.</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  });
  $('fig-dl-png').addEventListener('click', async () => { try { downloadBlob(await svgToPngPx(current.svg, current.width, current.height, 3), `${title()}.png`); } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; } });
  $('fig-dl-svg').addEventListener('click', () => downloadBlob(new TextEncoder().encode(current.svg), `${title()}.svg`, 'image/svg+xml'));
  show('bbt');
}
