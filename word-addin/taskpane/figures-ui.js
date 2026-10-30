// "Hình vẽ" tab: variation table, graph, solution region, geometry figures. Insert into Word as editable shapes or as a picture.
import { variationTable, manualVariationTable } from '../src/figures/bbt.js';
import { plotFunctions, PRESETS } from '../src/figures/plot.js';
import { regionFigure } from '../src/figures/region.js';
import { GEOMETRY } from '../src/figures/geometry.js';
import { CHEMISTRY } from '../src/figures/chem.js';
import { PHYSICS } from '../src/figures/physics.js';
import { BIOLOGY } from '../src/figures/bio.js';
import { tikzToScene, TikzError } from '../src/tikz.js';
import { sceneToPackage, sceneToSvg } from '../src/figures/scene.js';
import { mountMtSettings, figurePt } from './mt-settings.js';
import { makePicturePackage, svgToPngPx, downloadBlob } from '../src/picture.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (v) => (v === '' || v === null || v === undefined || Number.isNaN(Number(v)) ? undefined : Number(v));
const sw = (id, label, checked = false) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? ' checked' : ''}><span class="switch-track"></span><span>${label}</span></label>`;
const field = (label, inner) => `<label class="field"><span>${label}</span>${inner}</label>`;

export function mountFigures(root, io) {
  const kinds = [['bbt', 'Bảng biến thiên'], ['plot', 'Đồ thị'], ['region', 'Miền nghiệm'], ['geo', 'Hình học'], ['chem', 'Hóa học'], ['phys', 'Vật lí'], ['bio', 'Sinh học'], ['tikz', 'Mã TikZ']];
  const CATALOGS = { geo: GEOMETRY, chem: CHEMISTRY, phys: PHYSICS, bio: BIOLOGY };
  root.innerHTML = `
    <details class="inline-help"><summary>Cách vẽ và chèn hình</summary><p>Chọn loại hình, chọn mẫu hoặc nhập dữ liệu, rồi xem hình bên dưới. Bấm vào vị trí muốn chèn trong Word trước khi bấm “Chèn vào Word”.</p></details>
    <div class="grid2 fig-kind-row"><label class="field fig-kind"><span>Loại hình</span><select id="fig-kind">${kinds.map(([id, l]) => `<option value="${id}">${l}</option>`).join('')}</select></label><div id="fig-sub"></div></div>
    <div id="fig-form"></div>
    <div id="fig-error" class="bad" role="status" aria-live="polite"></div>
    <div class="fig-preview" id="fig-preview"></div>
    <div class="hint" id="fig-note"></div>
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
  let kind = 'bbt', current = null, timer = null, renderVersion = 0;

  const forms = {
    bbt: () => `<label class="field sub-field"><span>Cách lập</span><select id="b-mode"><option value="auto">Tự động vẽ</option><option value="manual">Tự nhập</option></select></label>
      <div id="b-auto">${field('Hàm số y = f(x) (gõ thường hoặc LaTeX)', '<input type="text" id="b-expr" value="x^3-3x+1" spellcheck="false" placeholder="vd. (2x+1)/(x-1), \\frac{2x+1}{x-1}, x^3-3x+1, \\sqrt{x}">')}
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
    tikz: () => `${field('Mã TikZ (dán \\begin{tikzpicture}…\\end{tikzpicture} hoặc chỉ các lệnh \\draw, \\node…)', '<textarea id="t-code" rows="9" spellcheck="false" placeholder="\\begin{tikzpicture}\n  \\draw (0,0) -- (4,0) -- (1,3) -- cycle;\n  \\node[below left] at (0,0) {$A$};\n\\end{tikzpicture}">\\begin{tikzpicture}[scale=1]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (4,0);\n  \\coordinate (C) at (1,3);\n  \\draw[thick] (A) -- (B) -- (C) -- cycle;\n  \\draw[dashed] (C) -- (1,0);\n  \\fill (A) circle (1.5pt); \\fill (B) circle (1.5pt); \\fill (C) circle (1.5pt);\n  \\node[below left] at (A) {$A$};\n  \\node[below right] at (B) {$B$};\n  \\node[above] at (C) {$C$};\n\\end{tikzpicture}</textarea>')}
      <div class="hint">Không cần cài LaTeX: add-in tự vẽ lại hình từ mã TikZ ngay trên máy. Hỗ trợ: <code>\\draw</code>, <code>\\fill</code>, <code>\\filldraw</code>, <code>\\node</code>, <code>\\coordinate</code>, <code>\\foreach</code>, <code>scope</code>; nét <code>--</code>, <code>cycle</code>, <code>circle</code>, <code>ellipse</code>, <code>arc</code>, <code>rectangle</code>, <code>grid</code>, <code>.. controls ..</code>; <code>thick</code>, <code>dashed</code>, <code>-&gt;</code>, màu, <code>scale</code>. Hỗ trợ cả tkz-euclide: <code>\\tkzDefPoints</code>, <code>\\tkzDefPoint</code>, <code>\\tkzDefMidPoint</code>, <code>\\tkzDefLine</code>, <code>\\tkzDefTriangleCenter</code>, <code>\\tkzDefPointBy</code>, <code>\\tkzInterLL/LC/CC</code>, <code>\\tkzDrawPolygon/Segment/Line/Circle/Arc/Points</code>, <code>\\tkzLabelPoints</code>, <code>\\tkzMarkRightAngle/Angle/Segment</code>, <code>\\tkzFillPolygon</code>…. Chưa hỗ trợ <code>calc</code>, <code>plot</code>, <code>pgfplots</code>.</div>`,
    plot: () => `${field('Hàm số (mỗi dòng một hàm; gõ thường hoặc LaTeX, vd. \\frac{x+1}{x-1})', '<textarea id="p-expr" rows="2" spellcheck="false">x^3-3x+1</textarea>')}
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
  };
  for (const [k, cat] of Object.entries(CATALOGS)) forms[k] = () => `<label class="field sub-field"><span>Hình</span><select id="g-kind">${cat.map((g) => `<option value="${g.id}">${esc(g.label)}</option>`).join('')}</select></label><div id="g-opts"></div>`;

  // One option of a catalogue figure: [key, label, choices?, default?]. choices: array -> list, {num:[min,max,def,step]} -> number, {text:def} -> text; none -> switch.
  function optionHtml([key, label, ch, def]) {
    if (Array.isArray(ch)) return field(label, `<select data-opt="${key}">${ch.map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join('')}</select>`);
    if (ch && ch.num) { const [min, max, val, step] = ch.num; return field(label, `<input type="number" data-opt="${key}" min="${min}" max="${max}" step="${step || 1}" value="${val}">`); }
    if (ch && 'text' in ch) return field(label, `<input type="text" data-opt="${key}" value="${esc(ch.text)}" spellcheck="false">`);
    return sw('go-' + key, label, def ?? (kind === 'geo' ? /^show/.test(key) : true));
  }
  function geoOptions() {
    const g = CATALOGS[kind].find((x) => x.id === $('g-kind').value);
    const selects = g.options.filter((o) => Array.isArray(o[2])), others = g.options.filter((o) => o[2] && !Array.isArray(o[2])), flags = g.options.filter((o) => !o[2]);
    const hint = g.names ? (g.hint ? `<div class="hint">${esc(g.hint)}</div>` : '') : '';
    $('g-opts').innerHTML =
      (selects.length ? `<div class="grid2 g-choices">${selects.map(optionHtml).join('')}</div>` : '') +
      (others.length ? `<div class="${others.length > 1 ? 'grid2' : ''}">${others.map(optionHtml).join('')}</div>` : '') +
      (g.names || g.namesLabel ? field(g.namesLabel || 'Tên các điểm (cách nhau bởi dấu phẩy)', `<input type="text" id="g-names" value="${esc(g.names || '')}" spellcheck="false" placeholder="${esc(g.names || '')}">`) + hint : '') +
      (flags.length ? `<div class="sw-grid">${flags.map(optionHtml).join('')}</div>` : '');
    $('g-opts').querySelectorAll('input,select').forEach((el) => el.addEventListener('input', schedule));
    // default point names follow the chosen variant; a list the user has edited is kept
    const NAMES = kind !== 'geo' ? null : {
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
    if (kind === 'tikz') {
      const code = $('t-code').value;
      if (!code.trim()) throw new Error('Nhập mã TikZ');
      const sm = /\\begin\{tikzpicture\}\s*\[[^\]]*?\bscale\s*=\s*([\d.]+)/.exec(code);
      let sc;
      try { sc = tikzToScene(code, { scale: sm ? parseFloat(sm[1]) : 1, fs: 16 }); } catch (e) {
        if (e instanceof TikzError) throw new Error(`Chưa hỗ trợ đoạn TikZ này (${e.message}). Hãy đơn giản hóa hoặc bỏ lệnh đó`);
        throw e;
      }
      const scene = { width: sc.width, height: sc.height, items: sc.items };
      return { scene, svg: sceneToSvg(scene), width: sc.width, height: sc.height, note: 'Hình dựng từ mã TikZ; có thể chèn dạng hình sửa được hoặc ảnh PNG.' };
    }
    const g = CATALOGS[kind].find((x) => x.id === $('g-kind').value);
    const o = { names: $('g-names') ? $('g-names').value : '' };
    $('g-opts').querySelectorAll('[data-opt]').forEach((s) => { o[s.dataset.opt] = s.value; });
    $('g-opts').querySelectorAll('input[id^="go-"]').forEach((c) => { o[c.id.slice(3)] = c.checked; });
    return g.make(o);
  }
  async function render() {
    const version = ++renderVersion;
    current = null;
    ['fig-insert', 'fig-png', 'fig-dl-png', 'fig-dl-svg'].forEach(id => { $(id).disabled = true; });
    $('fig-error').textContent = '';
    if (kind === 'bbt') fontPt = await figurePt();
    if (version !== renderVersion) return;
    try { current = build(); $('fig-preview').innerHTML = current.svg; $('fig-note').textContent = current.note || ''; } catch (e) {
      current = null;
      $('fig-note').textContent = '';
      $('fig-preview').innerHTML = '<p class="muted">Chưa có hình hợp lệ. Sửa dữ liệu bên trên để xem hình mới.</p>';
      $('fig-error').textContent = `${e.message}. Thầy cô hãy kiểm tra dữ liệu vừa nhập${kind === 'bbt' ? ', ví dụ: x² - 3x + 1' : ''}.`;
    }
    ['fig-insert', 'fig-png', 'fig-dl-png', 'fig-dl-svg'].forEach((id) => { $(id).disabled = !current; });
  }
  function schedule() {
    ++renderVersion;
    current = null;
    ['fig-insert', 'fig-png', 'fig-dl-png', 'fig-dl-svg'].forEach(id => { $(id).disabled = true; });
    $('fig-preview').innerHTML = '<p class="muted">Đang cập nhật hình theo dữ liệu vừa nhập…</p>';
    clearTimeout(timer); timer = setTimeout(render, 250);
  }

  function show(k) {
    kind = k;
    $('fig-size').hidden = k !== 'bbt';
    $('fig-kind').value = k;
    $('fig-form').innerHTML = forms[k]();
    $('fig-sub').innerHTML = '';
    const sub = $('fig-form').querySelector('.sub-field'); if (sub) $('fig-sub').appendChild(sub);   // the variant select shares a row with the figure type
    $('fig-form').querySelectorAll('input,textarea,select').forEach((el) => el.addEventListener('input', schedule));
    if (CATALOGS[k]) { $('g-kind').addEventListener('change', () => { geoOptions(); render(); }); geoOptions(); }
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

  const title = () => (CATALOGS[kind] ? (CATALOGS[kind].find((x) => x.id === $('g-kind').value)?.label || 'Hình vẽ') : { bbt: 'Bảng biến thiên', plot: 'Đồ thị hàm số', region: 'Miền nghiệm', tikz: 'Hình TikZ' }[kind]);
  $('fig-insert').addEventListener('click', async () => {
    try { await io.replaceSelection(sceneToPackage(current.scene, { name: title(), alt: title(), float: $('fig-float').value === 'float' })); $('fig-out').innerHTML = '<span class="ok">Đã chèn vào Word tại con trỏ (hình sửa được).</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  });
  $('fig-png').addEventListener('click', async () => {
    try { const png = await svgToPngPx(current.svg, current.width, current.height, 3); await io.replaceSelection(makePicturePackage(png, { widthPt: current.width * 0.75, heightPt: current.height * 0.75, alt: title(), name: 'Hinh', center: true })); $('fig-out').innerHTML = '<span class="ok">Đã chèn ảnh PNG vào Word.</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  });
  $('fig-dl-png').addEventListener('click', async () => { try { const r = await downloadBlob(await svgToPngPx(current.svg, current.width, current.height, 3), `${title()}.png`); if (r === 'copied') $('fig-out').innerHTML = '<span class="ok">Đã sao chép ảnh PNG vào clipboard: dán (Ctrl+V) vào Word.</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; } });
  $('fig-dl-svg').addEventListener('click', async () => { try { const r = await downloadBlob(new TextEncoder().encode(current.svg), `${title()}.svg`, 'image/svg+xml'); if (r === 'copied') $('fig-out').innerHTML = '<span class="ok">Đã sao chép mã SVG vào clipboard.</span>'; } catch (e) { $('fig-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; } });
  show('bbt');
}
