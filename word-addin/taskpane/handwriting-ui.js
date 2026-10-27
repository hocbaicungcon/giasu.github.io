// "Tập viết" tab: handwriting / tracing worksheets for mầm non, lớp 1, lớp 2, set in the HP001 and UNI Tap Viet fonts.
import { bodyPackage, WORKSHEET_THEMES } from '../src/worksheet-docx.js';
import { handwritingBody, topicsFor, defaultTopics, MODEL_FONTS, TRACE_FONTS, GRADES, FONT_FILES, FONT_BASE } from '../src/handwriting.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const field = (label, inner) => `<label class="field"><span>${label}</span>${inner}</label>`;
const sw = (id, label, checked = false) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? ' checked' : ''}><span class="switch-track"></span><span>${label}</span></label>`;
const opts = (list, sel) => list.map(([v, l]) => `<option value="${v}"${v === sel ? ' selected' : ''}>${esc(l)}</option>`).join('');

// Rows can be drawn as pictures (canvas, 4x resolution) from copies of the fonts, so nothing has to be installed on the computer.
const FACES = [['HP001 4 hang 1 ô ly', 'HP001_4_hang_1_o_ly', 'normal'], ['HP001 4 hàng 2 ô ly', 'HP001_4_hang_2_o_ly', 'normal'], ['HP001 5 hàng 1 ô ly', 'HP001_5_hang_1_o_ly', 'normal'], ['HP001 4 hàng', 'HP001_4_hang_bold', 'bold'], ['UNI Tap Viet 5', 'UNITapviet_5_ly', 'normal'], ['UNI Tap Viet 0', 'UNITapviet_0_ly', 'normal']];
let facesPromise = null;
function loadFaces() {
  facesPromise = facesPromise || Promise.all(FACES.map(async ([family, file, weight]) => {
    const buf = await (await fetch(new URL(`./vendor/fonts/${file}.ttf`, import.meta.url))).arrayBuffer();
    const face = await new FontFace(family, buf, { weight }).load();
    document.fonts.add(face);
  })).catch((e) => { facesPromise = null; throw e; });
  return facesPromise;
}
const SCALE = 4;
function makeImageRows() {   // -> {imageRow, images}: pictures de-duplicated by content
  const cache = new Map(), images = [], ctx = document.createElement('canvas').getContext('2d');
  const imageRow = (text, font, pt, o = {}) => {
    const key = [text, font, pt, o.bold ? 1 : 0, o.color || ''].join('|');
    if (cache.has(key)) return cache.get(key);
    const px = pt * SCALE, f = `${o.bold ? 'bold ' : ''}${px}px "${font}"`;
    ctx.font = f;
    const m = ctx.measureText(text || ' '), asc = m.fontBoundingBoxAscent || px * 1.1, desc = m.fontBoundingBoxDescent || px * 0.5;
    const c = document.createElement('canvas'); c.width = Math.ceil(m.width) + 2; c.height = Math.ceil(asc + desc);
    const g = c.getContext('2d'); g.font = f; g.textBaseline = 'alphabetic'; g.fillStyle = o.color ? '#' + o.color : '#000'; g.fillText(text, 0, asc);
    const bin = atob(c.toDataURL('image/png').split(',')[1]), png = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) png[i] = bin.charCodeAt(i);
    const rid = `rIdHw${images.length + 1}`, im = { rid, wPt: c.width / SCALE, hPt: c.height / SCALE };
    images.push({ rid, png }); cache.set(key, im);
    return im;
  };
  return { imageRow, images };
}

export function mountHandwriting(root, io) {
  const themes = WORKSHEET_THEMES.filter((t) => t[2]);
  root.innerHTML = `
    <div class="notice">Phiếu tập tô, tập viết cho bé mầm non, lớp 1, lớp 2: chữ mẫu, dòng chữ chấm để tô, dòng kẻ trống để viết. Chính tả dùng câu tục ngữ, ca dao hợp với trẻ em. Mặc định chữ được vẽ thành hình nên không cần cài phông; chọn “Văn bản phông chữ” nếu muốn sửa chữ (khi đó cần cài phông bên dưới).</div>
    <fieldset><legend>Phiếu</legend>
      <div class="grid2">
        ${field('Đối tượng', `<select id="h-grade">${opts(GRADES, 1)}</select>`)}
        ${field('Số mục mỗi dạng', '<select id="h-count"><option value="3">3 (ngắn)</option><option value="4" selected>4</option><option value="6">6</option><option value="10">10 (dài)</option></select>')}
      </div>
      <div class="grid2">
        ${field('Phông chữ mẫu', `<select id="h-model">${opts(MODEL_FONTS.map((m) => [m[0], m[1]]), '4h1')}</select>`)}
        ${field('Phông chữ tô', `<select id="h-trace">${opts(TRACE_FONTS.map((m) => [m[0], m[1]]), 'uni5')}</select>`)}
      </div>
      <div class="grid2">
        ${field('Số dòng tô', '<select id="h-trows"><option>1</option><option selected>2</option><option>3</option></select>')}
        ${field('Số dòng viết trống', '<select id="h-brows"><option>0</option><option selected>1</option><option>2</option><option>3</option></select>')}
      </div>
      <div class="grid2">
        ${field('Cỡ chữ (pt, 0 = theo lớp)', '<input type="number" id="h-pt" min="0" max="60" step="2" value="0">')}
        ${field('Mã đề (seed)', '<input type="number" id="h-seed" min="1" step="1">')}
      </div>
      ${field('Tên bé (cho bài “Tô tên”)', '<input type="text" id="h-name" placeholder="vd. Nguyễn Minh An">')}
      ${field('Tiêu đề (để trống = tự đặt)', '<input type="text" id="h-title" placeholder="vd. PHIẾU TẬP VIẾT TUẦN 5">')}
      ${field('Trường (tùy chọn)', '<input type="text" id="h-school" placeholder="vd. Trường Mầm non ...">')}
      <div class="field"><span>Màu chủ đạo: <b id="h-theme-name">${esc(themes[1] ? themes[1][1] : '')}</b></span>
        <input type="hidden" id="h-theme" value="${themes[1] ? themes[1][2] : '1D6FB8'}">
        <div class="theme-grid" id="h-theme-grid" role="radiogroup" aria-label="Màu chủ đạo">${themes.map(([v, l, c], k) => `<button type="button" class="theme-dot${k === 1 ? ' on' : ''}" data-v="${c}" data-n="${esc(l)}" role="radio" aria-checked="${k === 1}" title="${esc(l)}" style="--c:#${c}"></button>`).join('')}</div>
      </div>
      ${field('Cách đưa chữ vào Word', '<select id="h-mode"><option value="image">Hình ảnh (không cần cài phông, khuyên dùng)</option><option value="text">Văn bản phông chữ (cần cài phông, sửa được)</option></select>')}
      ${sw('h-nomodel', 'Không dòng mẫu: chỉ chữ chấm để tô')}
      ${sw('h-light', 'Chữ chấm màu nhạt')}
      ${sw('h-answers', 'Thêm trang bài đọc cho phần nghe – viết', true)}
    </fieldset>
    <fieldset><legend>Dạng bài</legend><div id="h-topics"></div></fieldset>
    <div class="btns two"><button class="primary" id="h-insert">Chèn vào Word</button><button class="secondary" id="h-new">Tạo tài liệu mới</button><button class="secondary" id="h-reroll">Đổi nội dung (mã đề khác)</button></div>
    <div id="h-out"></div>
    <details class="hint"><summary>Phông chữ (chỉ cần cài khi chọn “Văn bản phông chữ”)</summary>
      <ul>${FONT_FILES.map(([p, n]) => `<li><a href="${FONT_BASE}${p}" target="_blank" rel="noopener">${esc(n)}</a></li>`).join('')}</ul>
      <p>Chưa cài phông thì Word hiện chữ thường, không có dòng kẻ và nét chấm.</p>
    </details>`;
  const $ = (id) => root.querySelector('#' + id);
  const grade = () => Number($('h-grade').value);
  const renderTopics = () => {
    const def = new Set(defaultTopics(grade()));
    $('h-topics').innerHTML = topicsFor(grade()).map(([id, name]) => `<label class="inline"><input type="checkbox" data-t="${esc(id)}"${def.has(id) ? ' checked' : ''}> ${esc(name)}</label>`).join('');
  };
  const newSeed = () => { $('h-seed').value = String(Math.floor(Math.random() * 900000) + 100000); };
  const chosen = () => [...root.querySelectorAll('#h-topics input[data-t]:checked')].map((c) => c.dataset.t);

  async function write(newDoc) {
    $('h-out').textContent = 'Đang tạo phiếu…';
    try {
      const topics = chosen();
      if (!topics.length) throw new Error('Chọn ít nhất một dạng bài.');
      const asImage = $('h-mode').value === 'image', pics = asImage ? makeImageRows() : null;
      if (asImage) await loadFaces();
      const { body, count } = handwritingBody({
        noModel: $('h-nomodel').checked, light: $('h-light').checked, imageRow: pics ? pics.imageRow : null,
        grade: grade(), topics, count: Number($('h-count').value), seed: Number($('h-seed').value) || 1, name: $('h-name').value, model: $('h-model').value, trace: $('h-trace').value,
        traceRows: Number($('h-trows').value), blankRows: Number($('h-brows').value), fontPt: Number($('h-pt').value) || 0, accent: $('h-theme').value,
        school: $('h-school').value.trim(), title: $('h-title').value.trim(), answers: $('h-answers').checked,
      });
      const pkg = bodyPackage(body, pics ? pics.images : []);
      if (newDoc) await io.openAsNewDocument(pkg); else await io.replaceSelection(pkg);
      $('h-out').innerHTML = `<span class="ok">Đã ${newDoc ? 'tạo tài liệu mới' : 'chèn vào Word'}: ${count} mục tập viết.</span>`;
    } catch (e) { $('h-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  }

  $('h-insert').addEventListener('click', () => write(false));
  $('h-new').addEventListener('click', () => write(true));
  $('h-reroll').addEventListener('click', () => { newSeed(); $('h-out').innerHTML = '<span class="ok">Đã đổi mã đề; bấm Chèn để tạo phiếu mới.</span>'; });
  $('h-grade').addEventListener('change', renderTopics);
  $('h-theme-grid').addEventListener('click', (ev) => {
    const b = ev.target.closest('.theme-dot'); if (!b) return;
    for (const d of root.querySelectorAll('#h-theme-grid .theme-dot')) { d.classList.toggle('on', d === b); d.setAttribute('aria-checked', d === b ? 'true' : 'false'); }
    $('h-theme').value = b.dataset.v; $('h-theme-name').textContent = b.dataset.n;
  });
  newSeed();
  renderTopics();
}
