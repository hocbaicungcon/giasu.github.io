// "Hình vẽ" tab: variation table, graph, solution region, geometry figures. Insert into Word as editable shapes or as a picture.
import { variationTable, manualVariationTable } from '../src/figures/bbt.js';
import { plotFunctions, PRESETS } from '../src/figures/plot.js';
import { regionFigure } from '../src/figures/region.js';
import { GEOMETRY } from '../src/figures/geometry.js';
import { sceneToPackage } from '../src/figures/scene.js';
import { mountMtSettings, figurePt } from './mt-settings.js';
import { makePicturePackage, svgToPngPx, downloadBlob } from '../src/picture.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (v) => (v === '' || v === null || v === undefined || Number.isNaN(Number(v)) ? undefined : Number(v));
const sw = (id, label, checked = false) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? ' checked' : ''}><span class="switch-track"></span><span>${label}</span></label>`;
const field = (label, inner) => `<label class="field"><span>${label}</span>${inner}</label>`;

export function mountFigures(root, io) {
  const kinds = [['bbt', 'Bảng biến thiên'], ['plot', 'Đồ thị'], ['region', 'Miền nghiệm'], ['geo', 'Hình học']];
  root.innerHTML = `
    <div class="grid2 fig-kind-row"><label class="field fig-kind"><span>Loại hình</span><select id="fig-kind">${kinds.map(([id, l]) => `<option value="${id}">${l}</option>`).join('')}</select></label><div id="fig-sub"></div></div>
    <div id="fig-form"></div>
    <div id="fig-error" class="bad"></div>
    <div class="fig-preview" id="fig-preview"></div>
    <div class="grid2 fig-opts">
      <div id="fig-size"></div>
      <label class="field"><span>Kiểu hình sửa được</span><select id="fig-float"><option value="float">Hình nổi</option><option value="inline">Cùng dòng chữ</option></select></label>
    </div>
    <div class="btns fig-actions"><button class="primary" id="fig-insert" title="Các đường thẳng, hộp chữ và công thức Word nhóm lại: bấm vào để sửa từng phần trong Word">Chèn vào Word (hình sửa được)</button></div>
    <div class="btns three fig-actions"><button class="secondary" id="fig-png">Chèn ảnh PNG</button><button class="secondary" id="fig-dl-png">Tải PNG</button><button class="secondary" id="fig-dl-svg">Tải SVG</button></div>
    <div id="fig-out"></div>`;
  const $ = (id) => root.querySelector('#' + id);
  mountMtSettings($('fig-size'), { fontRow: false, onChange: () => schedule() });
  let fontPt = 12;
  let kind = 'bbt', current = null, timer = null;

  const forms = {
    bbt: () => `<label class="field sub-field"><span>Cách lập</span><select id="b-mode"><option value="auto">Từ hàm số (tự khảo sát)</option><option value="manual">Tự vẽ (nhập từng dòng)</option></select></label>
      <div id="b-auto">${field('Hàm số y = f(x)', '<input type="text" id="b-expr" value="x^3-3x+1" spellcheck="false" placeholder="vd. (2x+1)/(x-1), x^3-3x+1, sqrt(x)">')}
      <label class="field"><span>Mẫu có sẵn</span><select id="b-preset"><option value="">— chọn mẫu —</option>${PRESETS.map((p) => `<option value="${esc(p.expr)}">${esc(p.label)}</option>`).join('')}</select></label>
      <div class="grid2">${field('Khảo sát từ x =', '<input type="number" id="b-lo" placeholder="−∞">')}${field('đến x =', '<input type="number" id="b-hi" placeholder="+∞">')}</div>
      ${field('Ghi chú tập xác định (tùy chọn)', '<input type="text" id="b-domain" placeholder="vd. TXĐ: D = ℝ \\ {1}">')}</div>
      <div id="b-manual" hidden>
        ${field('Dòng x (cách nhau bởi dấu cách)', '<input type="text" id="m-x" value="-inf -1 1 +inf" spellcheck="false">')}
        ${field("Dòng y' (dấu từng khoảng, xen kẽ 0 hoặc ||)", '<input type="text" id="m-dy" value="+ 0 - 0 +" spellcheck="false">')}
        ${field('Dòng y (mỗi cột x một giá trị)', '<input type="text" id="m-y" value="-inf 3 -1 +inf" spellcheck="false">')}
        ${field('Nhãn hàng cuối', '<input type="text" id="m-label" value="f(x)" spellcheck="false">')}
        ${field('Ghi chú (tùy chọn)', '<input type="text" id="m-domain" placeholder="vd. TXĐ: D = ℝ \\ {1}">')}
        <div class="hint">Viết <b>-inf</b>, <b>+inf</b> cho ∞. Dòng y' có thể chỉ gồm các dấu (+ - +), hoặc xen kẽ dấu với <b>0</b> (cực trị) / <b>||</b> (không xác định), vd. <code>+ 0 - || -</code>. Ở dòng y, cột gián đoạn viết <b>trái|phải</b>, vd. <code>-inf|+inf</code>. Có thể dùng LaTeX như <code>\\frac{1}{2}</code>. Khoảng hàm không xác định ghi <b>//</b> ở dòng y' (được gạch chéo), vd. x: <code>-inf -2 2 +inf</code>, y': <code>- // +</code>, y: <code>0 +inf| |-inf 0</code> (bỏ trống phía không có giá trị). Mũi tên lên/xuống theo dấu của y'.</div>
      </div>`,
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
    geo: () => `<label class="field sub-field"><span>Hình</span><select id="g-kind">${GEOMETRY.map((g) => `<option value="${g.id}">${esc(g.label)}</option>`).join('')}</select></label><div id="g-opts"></div>`,
  };

  function geoOptions() {
    const g = GEOMETRY.find((x) => x.id === $('g-kind').value);
    const choices = g.options.filter((o) => o[2]), flags = g.options.filter((o) => !o[2]);
    const hint = g.names ? (g.hint ? `<div class="hint">${esc(g.hint)}</div>` : '') : '';
    $('g-opts').innerHTML =
      (choices.length ? `<div class="grid2 g-choices">${choices.map(([key, label, ch]) => field(label, `<select data-opt="${key}">${ch.map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join('')}</select>`)).join('')}</div>` : '') +
      (g.names ? field('Tên các điểm (cách nhau bởi dấu phẩy)', `<input type="text" id="g-names" value="${esc(g.names)}" spellcheck="false" placeholder="${esc(g.names)}">`) + hint : '') +
      (flags.length ? `<div class="sw-grid">${flags.map(([key, label]) => sw('go-' + key, label, /^show/.test(key))).join('')}</div>` : '');
    $('g-opts').querySelectorAll('input,select').forEach((el) => el.addEventListener('input', schedule));
    // default point names follow the chosen variant; a list the user has edited is kept
    const NAMES = {
      pyramid: { opt: 'base', tri: 'S,A,B,C', quad: 'S,A,B,C,D' },
      prism: { opt: 'kind', triangle: "A,B,C,A',B',C'", box: "A,B,C,D,A',B',C',D'", cube: "A,B,C,D,A',B',C',D'" },
      round: { opt: 'kind', cone: 'S,O,A', cylinder: "O,O',A", frustum: "O,O'", sphere: 'O,A' },
    }[g.id];
    const namesEl = $('g-names');
    if (NAMES && namesEl) {
      const sel = $('g-opts').querySelector(`select[data-opt="${NAMES.opt}"]`);
      let last = NAMES[sel.value] || g.names;
      namesEl.value = last;
      sel.addEventListener('change', () => { const next = NAMES[sel.value]; if (next && (namesEl.value.trim() === last || !namesEl.value.trim())) namesEl.value = next; last = next || last; render(); });
    }
  }

  function build() {
    if (kind === 'bbt') {
      if ($('b-mode').value === 'manual') return manualVariationTable({ x: $('m-x').value, dy: $('m-dy').value, y: $('m-y').value, label: $('m-label').value.trim() || 'f(x)', fontPt, domain: $('m-domain').value.trim() });
      const r = variationTable($('b-expr').value, { lo: num($('b-lo').value), hi: num($('b-hi').value), domain: $('b-domain').value.trim(), fontPt });
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
  async function render() {
    $('fig-error').textContent = '';
    if (kind === 'bbt') fontPt = await figurePt();
    try { current = build(); $('fig-preview').innerHTML = current.svg; } catch (e) { current = null; $('fig-error').textContent = e.message; }
    ['fig-insert', 'fig-png', 'fig-dl-png', 'fig-dl-svg'].forEach((id) => { $(id).disabled = !current; });
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(render, 250); }

  function show(k) {
    kind = k;
    $('fig-size').hidden = k !== 'bbt';
    $('fig-kind').value = k;
    $('fig-form').innerHTML = forms[k]();
    $('fig-sub').innerHTML = '';
    const sub = $('fig-form').querySelector('.sub-field'); if (sub) $('fig-sub').appendChild(sub);   // the variant select shares a row with the figure type
    $('fig-form').querySelectorAll('input,textarea,select').forEach((el) => el.addEventListener('input', schedule));
    if (k === 'geo') { $('g-kind').addEventListener('change', () => { geoOptions(); render(); }); geoOptions(); }
    if (k === 'bbt') $('b-mode').addEventListener('change', () => { const m = $('b-mode').value === 'manual'; $('b-auto').hidden = m; $('b-manual').hidden = !m; render(); });
    if (k === 'bbt') $('b-preset').addEventListener('change', () => { if ($('b-preset').value) { $('b-expr').value = $('b-preset').value; render(); } });
    if (k === 'plot') $('p-preset').addEventListener('change', () => {
      const p = PRESETS.find((x) => x.id === $('p-preset').value);
      if (!p) return;
      $('p-expr').value = p.expr; $('p-xmin').value = p.win[0]; $('p-xmax').value = p.win[1]; $('p-ymin').value = p.win[2]; $('p-ymax').value = p.win[3];
      render();
    });
    render();
  }
  $('fig-kind').addEventListener('change', () => show($('fig-kind').value));

  const title = () => ({ bbt: 'Bảng biến thiên', plot: 'Đồ thị hàm số', region: 'Miền nghiệm', geo: 'Hình học' }[kind]);
  $('fig-insert').addEventListener('click', async () => {
    try { await io.replaceSelection(sceneToPackage(current.scene, { name: title(), alt: title(), float: $('fig-float').value === 'float' })); $('fig-out').innerHTML = '<span class="ok">Đã chèn vào Word tại con trỏ (hình sửa được).</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  });
  $('fig-png').addEventListener('click', async () => {
    try { const png = await svgToPngPx(current.svg, current.width, current.height, 3); await io.replaceSelection(makePicturePackage(png, { widthPt: current.width * 0.75, heightPt: current.height * 0.75, alt: title(), name: 'Hinh', center: true })); $('fig-out').innerHTML = '<span class="ok">Đã chèn ảnh PNG vào Word.</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  });
  $('fig-dl-png').addEventListener('click', async () => { try { downloadBlob(await svgToPngPx(current.svg, current.width, current.height, 3), `${title()}.png`); } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; } });
  $('fig-dl-svg').addEventListener('click', () => downloadBlob(new TextEncoder().encode(current.svg), `${title()}.svg`, 'image/svg+xml'));
  show('bbt');
}
