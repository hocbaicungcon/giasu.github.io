import { mountMtSettings, mtOptions, mtConvertOptions, classicLayout } from './mt-settings.js';
import * as io from '../src/word-io.js';
import { attachLatexAutocomplete } from './latex-autocomplete.js';
import { mountEditorToolbar } from './editor-toolbar.js';
import { pickEquation } from '../src/cursor-eq.js';
import { scanBody, previewReplace, makeTransform, convertMathTypeInPackage, rewriteEquations, scanPackage, makeEquationPackage, latexToOmml, convertNativeToMathType, makeMathTypePackage, browserRender } from '../src/app-core.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const state = { scanned: null, lastBackup: null, examLoaded: false };
let lastPreview = [];

// ---------------------------------------------------------------- tabs
function switchTab(name) {
  const b = document.querySelector(`nav button[data-tab="${name}"]`);
  if (!b) return;
  document.querySelectorAll('nav button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
  document.querySelectorAll('section').forEach((s) => s.classList.toggle('active', s.id === 'tab-' + name));
  if (name === 'figures' && !state.figuresLoaded) {
    state.figuresLoaded = true;
    import('./figures-ui.js').then((m) => m.mountFigures($('figures-root'), io)).catch((e) => { $('figures-root').textContent = 'Không tải được mô-đun hình vẽ: ' + e.message; });
  }
  if (name === 'worksheet' && !state.worksheetLoaded) {
    state.worksheetLoaded = true;
    import('./worksheet-ui.js').then((m) => m.mountWorksheet($('worksheet-root'), io)).catch((e) => { $('worksheet-root').textContent = 'Không tải được mô-đun phiếu bài tập: ' + e.message; });
  }
  if (name === 'calc' && !state.calcLoaded) {
    state.calcLoaded = true;
    import('./calc-ui.js').then((m) => m.mountCalc($('calc-root'), io, { openEditor: (latex) => { $('editor-latex').value = latex; switchTab('editor'); renderEditorPreview(); } })).catch((e) => { $('calc-root').textContent = 'Không tải được mô-đun tính toán: ' + e.message; });
  }
  if (name === 'exam' && !state.examLoaded) {
    state.examLoaded = true;
    import('./exam-ui.js').then((m) => m.mountExam($('exam-root'), io)).catch((e) => { $('exam-root').textContent = 'Không tải được mô-đun đề thi: ' + e.message; });
  }
  if (name === 'editor') {
    renderEditorPreview();
    if ($('editor-latex') && !$('editor-latex').value.trim()) {
      loadFormulaFromWord(false).catch(() => {});
    }
  }
}

function checkUrlTab() {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') || window.location.hash.replace(/^#/, '');
  if (tab) switchTab(tab);
}

document.querySelectorAll('nav button').forEach((b) => b.addEventListener('click', () => {
  switchTab(b.dataset.tab);
}));
window.addEventListener('hashchange', checkUrlTab);

// After any write: previews are stale, and "restore" is only safe while paragraph numbering is unchanged.
function afterWrite(res, backup) {
  state.scanned = null;
  lastPreview = [];
  const same = res.before === res.after;
  state.lastBackup = same ? backup : null;
  $('btn-restore').disabled = !same;
}

function progress(el, done, total) { el.hidden = false; el.max = total || 1; el.value = done; }

// ---------------------------------------------------------------- scan
async function scan() {
  $('scan-summary').textContent = 'Đang đọc tài liệu…';
  try {
    const { pkg, paragraphCount } = await io.readBody();
    const scanned = scanBody(pkg);
    scanned.mapped = scanned.paragraphTotal === paragraphCount;
    scanned.paragraphCount = paragraphCount;
    state.scanned = scanned;
    renderScan();
  } catch (e) { $('scan-summary').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
}

function renderScan() {
  const s = state.scanned;
  const mt = s.equations.filter((e) => e.kind === 'mathtype');
  const okMt = mt.filter((e) => e.latex !== null).length;
  const badMt = mt.length - okMt;
  const lx = s.equations.filter((e) => e.kind === 'latex');
  const native = s.equations.filter((e) => e.kind === 'native');
  $('scan-summary').innerHTML = `${s.equations.length} công thức: MathType <b class="ok">${okMt}</b>${badMt ? ` (lỗi <b class="bad">${badMt}</b>)` : ''}, LaTeX <b class="warn">${lx.length}</b>, Word <b>${native.length}</b>` +
    (s.mapped ? '' : ` · <span class="warn">số đoạn không khớp (${s.paragraphTotal} ≠ ${s.paragraphCount}); chế độ chuyển toàn bộ sẽ đọc từng đoạn</span>`);
  const only = $('only-bad').checked;
  const rows = s.equations.filter((e) => !only || e.latex === null);
  $('eq-table').tBodies[0].innerHTML = rows.slice(0, 600).map((e) => {
    let badge = '';
    if (e.latex === null) {
      badge = `<span class="badge bad" title="${esc(e.error)}">không đọc được</span>`;
    } else if (e.kind === 'mathtype') {
      badge = '<span class="badge ok">MathType</span>';
    } else if (e.kind === 'latex') {
      badge = '<span class="badge warn">LaTeX</span>';
    } else {
      badge = '<span class="badge native">Word</span>';
    }
    return `<tr data-para="${e.para}"><td>${e.n + 1}</td><td class="muted">${esc(e.excerpt)}</td><td>${e.latex === null ? `<span class="muted">${esc(e.error)}</span>` : `<span class="tex">${esc(e.latex)}</span>`}</td><td>${badge}</td></tr>`;
  }).join('') + (rows.length > 600 ? `<tr><td colspan="4" class="muted">… còn ${rows.length - 600} dòng</td></tr>` : '');
  $('btn-convert').disabled = false;
}
$('btn-scan').addEventListener('click', scan);
$('only-bad').addEventListener('change', () => state.scanned && renderScan());
$('eq-table').addEventListener('click', (ev) => {
  const tr = ev.target.closest('tr[data-para]');
  if (tr && state.scanned && state.scanned.mapped && io.hasWord()) io.selectParagraph(Number(tr.dataset.para)).catch(() => {});
});

// ---------------------------------------------------------------- convert
const writeMode = () => ($('opt-mode').checked ? 'paragraph' : 'content');

mountMtSettings($('mt-settings-convert'));
mountMtSettings($('mt-settings-editor'), { onChange: () => renderEditorPreview() });
const syncEditorFormat = () => { const mt = document.querySelector('input[name=editor-format]:checked')?.value === 'mathtype'; $('mt-details').hidden = !mt; renderEditorPreview(); };
document.querySelectorAll('input[name=editor-format]').forEach((r) => r.addEventListener('change', syncEditorFormat));

async function paragraphsToProcess(scope, onProgress, { convertMathType, convertLatex } = {}) {
  if (scope === 'selection') return { scope: { kind: 'selection' }, items: await io.readParagraphs({ kind: 'selection' }, onProgress) };
  if (!state.scanned) await scan();
  const s = state.scanned;
  if (s.mapped) {
    const kinds = [];
    if (convertMathType) kinds.push('mathtype');
    if (convertLatex) kinds.push('latex');
    if (document.querySelector('input[name=target]:checked')?.value !== 'word') kinds.push('native');
    const indexes = [...new Set(s.equations.filter((e) => kinds.includes(e.kind) && e.latex !== null).map((e) => e.para))].sort((a, b) => a - b);
    return { scope: { kind: 'all' }, items: await io.readParagraphs({ kind: 'indexes', indexes }, onProgress) };
  }
  return { scope: { kind: 'all' }, items: await io.readParagraphs({ kind: 'all' }, onProgress) };
}

async function convert() {
  if (!$('opt-backup').checked) { $('convert-summary').innerHTML = '<span class="warn">Hãy lưu một bản sao tài liệu rồi tick ô xác nhận.</span>'; return; }
  const normalize = document.querySelector('input[name=target]:checked')?.value === 'normalize';
  const convertMathType = normalize || ($('opt-src-mt')?.checked ?? true);
  const convertLatex = $('opt-src-latex')?.checked ?? true;
  if (!convertMathType && !convertLatex) {
    $('convert-summary').innerHTML = '<span class="warn">Hãy chọn ít nhất một loại nguồn cần chuyển (MathType hoặc LaTeX).</span>';
    return;
  }
  $('btn-convert').disabled = true;
  const bar = $('progress');
  try {
    const scopeName = document.querySelector('input[name=scope]:checked').value;
    $('convert-summary').textContent = 'Đang đọc các đoạn…';
    const { scope, items } = await paragraphsToProcess(scopeName, (d, t) => progress(bar, d, t * 2), { convertMathType, convertLatex });
    let converted = 0, convertedMathType = 0, convertedLatex = 0, kept = 0;
    const reasons = {}, writes = [], backup = [];
    const toMathType = document.querySelector('input[name=target]:checked')?.value !== 'word';
    for (const it of items) {
      let r;
      if (toMathType) {
        // LaTeX text -> Word equation first, then every Word equation -> MathType object
        const a = convertMathTypeInPackage(it.pkg, { convertMathType: normalize, convertLatex, display: false });
        const b = await convertNativeToMathType(a.pkg, { render: browserRender, ...mtConvertOptions(), defaultSize: await mtOptions().then((o) => o.size) });
        r = { converted: b.converted, convertedLatex: a.convertedLatex || 0, convertedMathType: 0, kept: [...a.kept, ...b.kept], changed: b.changed, pkg: b.changed ? b.pkg : a.pkg };
        if (!b.changed && a.changed) r.converted = a.converted;
      } else {
        r = convertMathTypeInPackage(it.pkg, { convertMathType, convertLatex, display: $('opt-display').checked });
      }
      converted += r.converted;
      convertedMathType += (r.convertedMathType || 0);
      convertedLatex += (r.convertedLatex || 0);
      kept += r.kept.length;
      r.kept.forEach((k) => { reasons[k.reason] = (reasons[k.reason] || 0) + 1; });
      if (r.changed) { writes.push({ index: it.index, pkg: r.pkg }); backup.push({ index: it.index, pkg: it.pkg }); }
    }
    if (!writes.length) { $('convert-summary').innerHTML = `Không có gì để chuyển.${kept ? ` Giữ nguyên: ${kept}.` : ''}`; return; }
    $('convert-summary').textContent = `Đang ghi ${writes.length} đoạn…`;
    const res = await io.writeParagraphs(scope, writes, writeMode(), (d, t) => progress(bar, t + d, t * 2));
    afterWrite(res, { scope, items: backup, mode: writeMode() });
    const reasonList = Object.entries(reasons).map(([k, v]) => `<li>${esc(k)}: ${v}</li>`).join('');
    const details = [];
    if (convertedMathType) details.push(`${convertedMathType} MathType`);
    if (convertedLatex) details.push(`${convertedLatex} LaTeX`);
    const detailStr = details.length ? ` (${details.join(', ')})` : '';
    $('convert-summary').innerHTML = `<p><b class="ok">Đã chuyển ${converted}</b> công thức${detailStr}; <b class="${kept ? 'warn' : ''}">giữ nguyên ${kept}</b>.</p>` +
      (reasonList ? `<ul>${reasonList}</ul>` : '') +
      (res.before !== res.after ? `<p class="warn">Số đoạn thay đổi ${res.before} → ${res.after}: Word có thể đã thêm đoạn trống. Nút “Khôi phục” bị tắt (không an toàn); hãy dùng Hoàn tác (Ctrl/Cmd+Z) hoặc mở lại bản sao.</p>` : '');
  } catch (e) {
    $('convert-summary').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`;
  } finally { $('btn-convert').disabled = false; }
}
$('btn-convert').addEventListener('click', convert);
$('btn-restore').addEventListener('click', async () => {
  const b = state.lastBackup;
  if (!b) return;
  try {
    await io.writeParagraphs(b.scope, b.items, b.mode, (d, t) => progress($('progress'), d, t));
    $('convert-summary').innerHTML = '<span class="ok">Đã khôi phục các đoạn gốc.</span>';
    $('btn-restore').disabled = true;
  } catch (e) { $('convert-summary').innerHTML = `<span class="bad">Không khôi phục được: ${esc(e.message)}</span>`; }
});

// ---------------------------------------------------------------- formula editor
function renderEditorPreview() {
  const tex = $('editor-latex')?.value.trim() || '';
  const previewEl = $('editor-preview');
  if (!previewEl) return;
  if (!tex) {
    previewEl.innerHTML = '<span class="muted" style="font-size:12px;font-style:italic">(Chưa có nội dung công thức)</span>';
    return;
  }
  if (typeof katex !== 'undefined' && katex.render) {
    try {
      const asMt = document.querySelector('input[name=editor-format]:checked')?.value === 'mathtype';
      const classic = asMt && classicLayout() && !($('editor-display')?.checked);   // the picture of a MathType object follows the chosen layout
      katex.render(classic && !/^\s*\\displaystyle/.test(tex) ? `\\displaystyle ${tex}` : tex, previewEl, {
        displayMode: $('editor-display')?.checked ?? false,
        throwOnError: false,
        output: 'htmlAndMathml'
      });
    } catch (e) {
      previewEl.innerHTML = `<span class="bad">Lỗi cú pháp: ${esc(e.message)}</span>`;
    }
  } else {
    previewEl.textContent = tex;
  }
}

function insertSymbolAtCursor(text) {
  const el = $('editor-latex');
  if (!el) return;
  const start = el.selectionStart ?? el.value.length;
  const end = el.selectionEnd ?? el.value.length;
  const before = el.value.slice(0, start);
  const after = el.value.slice(end);
  el.value = before + text + after;
  const newPos = start + text.length;
  el.setSelectionRange(newPos, newPos);
  el.focus();
  renderEditorPreview();
}

async function loadFormulaFromWord(showNotice = true) {
  const statusEl = $('editor-status');
  if (statusEl) statusEl.textContent = 'Đang đọc công thức từ Word…';
  try {
    let ctx;
    try { ctx = await io.readCursorContext(); } catch (e) {
      // older Word / mock without ranges: selection, then its paragraph
      ctx = {};
      try { ctx.selPkg = (await io.readSelection())?.pkg; } catch { /* ignore */ }
      try { ctx.paraPkg = (await io.readParagraphs({ kind: 'selection' }))[0]?.pkg; } catch { /* ignore */ }
    }
    if (!ctx.selPkg && !ctx.paraPkg) throw new Error('Không đọc được vùng chọn từ Word.');
    const r = pickEquation(ctx);
    if (!r.eq) {
      if (r.errors && r.errors.length && r.found) throw new Error(`Công thức bị lỗi: ${r.errors[0]}`);
      if (statusEl) statusEl.innerHTML = showNotice
        ? '<span class="warn">Không tìm thấy công thức nào tại con trỏ / vùng chọn (đoạn này không có công thức). Bạn có thể tự soạn bên dưới.</span>'
        : 'Đặt con trỏ trong công thức rồi bấm “Lấy từ Word”, hoặc soạn mới bên dưới.';
      return;
    }
    const target = r.eq;
    $('editor-latex').value = target.latex;
    if ($('editor-display')) $('editor-display').checked = !target.inline;
    renderEditorPreview();
    const kindLabel = target.kind === 'mathtype' ? 'MathType' : target.kind === 'native' ? 'Word Equation' : 'LaTeX';
    const where = r.count > 1 ? ` — công thức ${r.index + 1}/${r.count}${r.how === 'cursor' ? ' (gần con trỏ nhất)' : ''}` : '';
    if (statusEl) statusEl.innerHTML = `<span class="ok">Đã nạp công thức (${kindLabel})${where}:</span> <code style="font-size:11px">${esc(target.latex)}</code>`;
  } catch (e) {
    if (statusEl) statusEl.innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`;
  }
}

async function applyFormulaToWord() {
  const tex = $('editor-latex')?.value.trim();
  const msgEl = $('editor-msg');
  if (!tex) {
    if (msgEl) msgEl.innerHTML = '<span class="bad">Vui lòng nhập mã LaTeX trước khi cập nhật.</span>';
    return;
  }
  if (msgEl) msgEl.textContent = 'Đang chèn vào Word…';
  try {
    const isDisplay = $('editor-display')?.checked ?? false;
    const asMathType = document.querySelector('input[name=editor-format]:checked')?.value === 'mathtype';
    const pkg = asMathType ? await makeMathTypePackage(tex, { render: browserRender, inline: !isDisplay, ...(await mtOptions()) }) : makeEquationPackage(latexToOmml(tex, { display: isDisplay }));
    ignoreAutoUntil = Date.now() + 1200;
    await io.replaceSelection(pkg);
    if (msgEl) msgEl.innerHTML = `<span class="ok">Đã cập nhật công thức vào Word thành công (${asMathType ? 'đối tượng MathType' : 'chuẩn Word Equation'}).</span>`;
  } catch (e) {
    if (msgEl) msgEl.innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`;
  }
}

// Palette tabs switching
document.querySelectorAll('.sym-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sym-tab-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.sym-panel').forEach((p) => { p.classList.remove('active'); p.hidden = true; });
    btn.classList.add('active');
    const panel = $('sym-group-' + btn.dataset.group);
    if (panel) { panel.classList.add('active'); panel.hidden = false; }
  });
});

// Palette buttons
document.querySelectorAll('.sym-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const ins = btn.dataset.ins;
    if (ins) insertSymbolAtCursor(ins);
  });
});

// Editor events
$('editor-latex')?.addEventListener('input', renderEditorPreview);
$('editor-display')?.addEventListener('change', renderEditorPreview);
$('btn-load-sel')?.addEventListener('click', () => loadFormulaFromWord(true));
$('btn-clear-editor')?.addEventListener('click', () => {
  $('editor-latex').value = '';
  renderEditorPreview();
  if ($('editor-msg')) $('editor-msg').textContent = '';
  if ($('editor-status')) $('editor-status').textContent = 'Đặt con trỏ trong công thức rồi bấm “Lấy từ Word”, hoặc soạn mới bên dưới.';
});
$('btn-apply-editor')?.addEventListener('click', applyFormulaToWord);
$('editor-latex')?.addEventListener('keydown', (ev) => {
  if ((ev.ctrlKey || ev.metaKey) && ev.key === 'Enter') {
    ev.preventDefault();
    applyFormulaToWord();
  }
});

// ---------------------------------------------------------------- diagnostics
$('btn-env').addEventListener('click', () => {
  const lines = [];
  lines.push('Office có: ' + (typeof Office !== 'undefined') + ', Word có: ' + (typeof Word !== 'undefined'));
  try {
    const c = Office.context;
    lines.push('host=' + c.diagnostics?.host + ' platform=' + c.diagnostics?.platform + ' version=' + c.diagnostics?.version);
    for (const v of ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']) lines.push(`WordApi ${v}: ${c.requirements.isSetSupported('WordApi', v)}`);
  } catch (e) { lines.push('lỗi: ' + e.message); }
  $('diag-log').textContent = lines.join('\n');
});
$('btn-dump').addEventListener('click', async () => {
  try {
    const items = await io.readParagraphs({ kind: 'selection' });
    const out = [];
    for (const it of items.slice(0, 3)) {
      const names = [...it.pkg.matchAll(/pkg:name="([^"]+)"[^>]*>/g)].map((m) => m[1]);
      const s = scanPackage(it.pkg);
      out.push(`— đoạn ${it.index}: gói ${it.pkg.length} ký tự, ${names.length} phần:\n  ${names.join('\n  ')}`);
      out.push(`  công thức nhận ra: ${s.equations.map((e) => `${e.kind}:${e.latex ?? ('✗ ' + e.error)}`).join(' | ') || 'không có'}`);
      const body = /<w:body>([\s\S]*?)<\/w:body>/.exec(it.pkg);
      out.push('  w:body (400 ký tự đầu): ' + (body ? body[1].slice(0, 400) : '?'));
    }
    $('diag-log').textContent = out.join('\n') || 'Không có đoạn nào được chọn.';
  } catch (e) { $('diag-log').textContent = 'Lỗi: ' + e.message; }
});

$('copy-acct').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('4802518888'); $('acct-msg').textContent = 'Đã sao chép'; } catch { $('acct-msg').textContent = 'Hãy chọn và sao chép thủ công'; }
});

// ---------------------------------------------------------------- boot (real Word, or the browser mock for development)
// ---------------------------------------------------------------- auto-load the equation under the cursor
let autoTimer = null, lastAutoSig = '', ignoreAutoUntil = 0;
function onSelectionChanged() {
  if (Date.now() < ignoreAutoUntil) return;
  clearTimeout(autoTimer);
  autoTimer = setTimeout(async () => {
    // other tabs (Tính toán) listen to this event and read the cursor themselves
    document.dispatchEvent(new CustomEvent('texcraft:selection'));
    if (!$('editor-auto')?.checked || !$('tab-editor')?.classList.contains('active')) return;
    if (document.activeElement === $('editor-latex')) return;   // the user is typing: do not overwrite
    try {
      const r = pickEquation(await io.readCursorContext());
      if (!r.eq) return;   // no equation here: leave the editor alone
      if (r.eq.latex === lastAutoSig && $('editor-latex').value === r.eq.latex) return;
      lastAutoSig = r.eq.latex;
      await loadFormulaFromWord(false);
    } catch { /* selection not readable: ignore */ }
  }, 350);
}
function installSelectionWatcher() {
  try {
    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onSelectionChanged);
  } catch { /* not available (browser mock) */ }
}

// Ask Word to load the add-in at startup, so the ribbon buttons are there after a restart (needs a Word that supports it).
function requestStartupLoad() {
  try {
    if (Office.addin && Office.addin.setStartupBehavior) Office.addin.setStartupBehavior(Office.StartupBehavior.load);
  } catch { /* older Word: the add-in has to be inserted again (see README) */ }
}

// Ribbon buttons run in the same (shared) runtime as this pane: each one shows the pane and switches to its tab,
// instead of Word opening one extra pane per button.
function registerRibbonActions() {
  try {
    if (!Office.actions?.associate) return;
    for (const t of ['eq', 'editor', 'exam', 'about', 'figures', 'calc', 'worksheet']) {
      Office.actions.associate('showTab_' + t, async () => {
        switchTab(t);
        try { await Office.addin.showAsTaskpane(); } catch { /* already visible */ }
      });
    }
  } catch { /* older Word: the buttons open panes by URL (?tab=) */ }
}

async function boot() {
  if (typeof Office !== 'undefined' && Office.onReady) {
    try { await Promise.race([Office.onReady(), new Promise((_r, rej) => setTimeout(() => rej(new Error('timeout')), 4000))]); } catch { /* not inside Office */ }
    registerRibbonActions();
  }
  if (!io.hasWord() || (typeof Office !== 'undefined' && !Office.context?.host)) {
    const note = document.createElement('div');
    note.className = 'notice';
    try {
      const mock = await import('./mock-word.js');
      await mock.install(new URLSearchParams(location.search).get('doc') || '/fixtures/sample-body.xml');
      note.textContent = 'Chế độ thử (không có Word): dùng tài liệu giả lập đọc từ /fixtures. Mọi thay đổi chỉ nằm trong bộ nhớ trình duyệt.';
    } catch {
      note.textContent = 'Trang này chỉ hoạt động bên trong Word (Chèn → Add-ins). Mở nó từ Word nhé.';
    }
    document.body.prepend(note);
  }
  try { if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) $('apply-kbd').textContent = '⌘↩'; } catch { /* ignore */ }
  attachLatexAutocomplete($('editor-latex'), { onChange: () => renderEditorPreview() });
  mountEditorToolbar($('editor-toolbar'), $('editor-latex'));
  installSelectionWatcher();
  requestStartupLoad();
  checkUrlTab();
}
// Offline use: a service worker keeps the add-in for ~30 days (not on localhost, unless ?sw=1 for testing)
async function registerOffline() {
  const note = $('offline-status');
  try {
    if (!('serviceWorker' in navigator)) { if (note) note.textContent = 'Bản Word này chưa hỗ trợ lưu để dùng khi mất mạng.'; return; }
    const dev = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && !/[?&]sw=1/.test(location.search);
    if (dev) { if (note) note.textContent = 'Chế độ phát triển: không lưu bản offline.'; return; }
    const base = new URL('../sw.js', location.href);
    await navigator.serviceWorker.register(base.href, { scope: new URL('../', location.href).pathname });
    const reg = await navigator.serviceWorker.ready;
    const ask = () => reg.active && reg.active.postMessage('status');
    navigator.serviceWorker.addEventListener('message', (ev) => { if (ev.data && ev.data.type === 'status' && note) note.innerHTML = `<span class="ok">Đã lưu ${ev.data.files} tệp để dùng khi mất mạng</span> (giữ ${ev.data.maxAgeDays} ngày, tự làm mới khi có mạng; bản ${esc(ev.data.version)}).`; });
    ask(); setTimeout(ask, 3000);
  } catch (e) { if (note) note.textContent = 'Không bật được chế độ offline: ' + e.message; }
}
$('btn-offline-sympy')?.addEventListener('click', async () => {
  const st = $('offline-sympy-status');
  try { const m = await import('../src/sympy-bridge.js'); await m.loadSympy((t) => { st.textContent = t; }); st.innerHTML = '<span class="ok">Đã tải SymPy; lần sau tính toán được khi mất mạng.</span>'; } catch (e) { st.innerHTML = `<span class="bad">${esc(e.message)}</span>`; }
});
registerOffline();
boot();
