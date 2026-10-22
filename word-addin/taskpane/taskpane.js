import './polyfills.js';
import { mountMtSettings, mtOptions, mtConvertOptions, classicLayout } from './mt-settings.js';
import * as io from '../src/word-io.js';
import { attachLatexAutocomplete } from './latex-autocomplete.js';
import { mountEditorToolbar } from './editor-toolbar.js';
import { createVisualEditor } from './visual-editor.js';
import { pickEquation } from '../src/cursor-eq.js';
import { scanBody, previewReplace, makeTransform, convertMathTypeInPackage, convertEquationsToLatexText, rewriteEquations, scanPackage, makeEquationPackage, latexToOmml, convertNativeToMathType, makeMathTypePackage, browserRender } from '../src/app-core.js';

// Weak machine (few cores / little RAM / reduced-motion / ?lite): drop animations and shadows via the .lite class.
try {
  const nav = navigator;
  if (/[?&]lite\b/.test(location.search) || (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) || (nav.deviceMemory && nav.deviceMemory <= 4) || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) document.documentElement.classList.add('lite');
} catch { /* old web view */ }

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const state = { scanned: null, lastBackup: null, examLoaded: false };
let lastPreview = [];

// ---------------------------------------------------------------- tabs
// Public edition includes Soạn thảo for every teacher. Extra tools remain in ?edition=full (see manifest-full.xml).
const FULL = /[?&]edition=full\b/.test(location.search);
const LITE_TABS = ['eq', 'editor', 'exam', 'figures', 'about'];
if (!FULL) document.querySelectorAll('nav button').forEach((b) => { if (!LITE_TABS.includes(b.dataset.tab)) b.remove(); });
function switchTab(name, followSelection = true) {
  if (!FULL && !LITE_TABS.includes(name)) name = 'eq';
  const b = document.querySelector(`nav button[data-tab="${name}"]`);
  if (!b) return;
  ++selectionVersion;
  clearTimeout(autoTimer);
  autoTimer = null;
  autoPending = false;
  document.querySelectorAll('nav button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
  document.querySelectorAll('section').forEach((s) => s.classList.toggle('active', s.id === 'tab-' + name));
  try { b.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } catch { /* old web view */ }
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
    import('./calc-ui.js').then((m) => m.mountCalc($('calc-root'), io, { openEditor: (latex) => { $('editor-latex').value = latex; switchTab('editor', false); renderEditorPreview(); } })).catch((e) => { $('calc-root').textContent = 'Không tải được mô-đun tính toán: ' + e.message; });
  }
  if (name === 'lms' && !state.lmsLoaded) {
    state.lmsLoaded = true;
    import('./lms-ui.js').then((m) => m.mountLms($('lms-root'), io)).catch((e) => { $('lms-root').textContent = 'Không tải được mô-đun LMS: ' + e.message; });
  }
  if (name === 'exam' && !state.examLoaded) {
    state.examLoaded = true;
    import('./exam-ui.js').then((m) => m.mountExam($('exam-root'), io)).catch((e) => { $('exam-root').textContent = 'Không tải được mô-đun đề thi: ' + e.message; });
  }
  if (name === 'editor') {
    initEditor();
    renderEditorPreview();
    if (followSelection && $('editor-auto')?.checked) onSelectionChanged();
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
// Mouse wheel scrolls the tab strip sideways (Windows has no horizontal wheel).
document.querySelector('nav').addEventListener('wheel', (e) => { if (e.deltaY) { e.currentTarget.scrollLeft += e.deltaY; e.preventDefault(); } }, { passive: false });
if (window.__texcraftLoaded) window.__texcraftLoaded();

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

const convSrc = () => $('conv-src')?.value || 'mathtype';
const convDst = () => $('conv-dst')?.value || 'word';
const SRC_KIND = { mathtype: 'mathtype', latex: 'latex', word: 'native' };
const CONV_HINTS = {
  'same:mathtype': 'MathType → MathType: làm lại các công thức MathType (và công thức Word) trong phạm vi đã chọn theo kiểu chữ và cỡ chữ ở trên.',
  'same:latex': 'Nguồn và đích đều là LaTeX: không có gì để chuyển.',
  'same:word': 'Nguồn và đích đều là công thức Word: không có gì để chuyển.',
  'mathtype:latex': 'Công thức MathType được thay bằng mã LaTeX dạng $…$.',
  'word:latex': 'Công thức Word được thay bằng mã LaTeX dạng $…$ ($$…$$ nếu riêng dòng).',
  'latex:mathtype': 'Mã LaTeX ($…$, $$…$$, \\(…\\), \\[…\\]) được chuyển thành đối tượng MathType mới (máy không cần cài MathType để xem). Các công thức Word có sẵn trong phạm vi cũng bị đổi sang MathType.',
  'word:mathtype': 'Công thức Word được chuyển thành đối tượng MathType mới (máy không cần cài MathType để xem; sửa bằng MathType khi có).',
};
// valid targets for each source: LaTeX -> Word/MathType, Word -> LaTeX/MathType, MathType -> anything
const DST_FOR = { latex: ['mathtype', 'word'], word: ['mathtype', 'latex'], mathtype: ['mathtype', 'latex', 'word'] };
function syncConvertUi() {
  const ok = DST_FOR[convSrc()] || [];
  const dstEl = $('conv-dst');
  [...dstEl.options].forEach((o) => { o.hidden = o.disabled = !ok.includes(o.value); });
  if (!ok.includes(dstEl.value)) dstEl.value = ok.includes('word') ? 'word' : ok[0];
  const s = convSrc(), d = convDst();
  $('conv-hint').textContent = CONV_HINTS[s === d ? `same:${s}` : `${s}:${d}`] || '';
  $('mt-settings-convert').hidden = d !== 'mathtype';
  $('opt-display').closest('label').hidden = d !== 'word';
}
$('conv-src').addEventListener('change', syncConvertUi);
$('conv-dst').addEventListener('change', syncConvertUi);
syncConvertUi();

async function paragraphsToProcess(scope, onProgress, { kinds: wanted } = {}) {
  if (scope === 'selection') return { scope: { kind: 'selection' }, items: await io.readParagraphs({ kind: 'selection' }, onProgress) };
  if (!state.scanned) await scan();
  const s = state.scanned;
  if (s.mapped) {
    const kinds = [...wanted];
    const indexes = [...new Set(s.equations.filter((e) => kinds.includes(e.kind) && e.latex !== null).map((e) => e.para))].sort((a, b) => a - b);
    return { scope: { kind: 'all' }, items: await io.readParagraphs({ kind: 'indexes', indexes }, onProgress) };
  }
  return { scope: { kind: 'all' }, items: await io.readParagraphs({ kind: 'all' }, onProgress) };
}

async function convert() {
  if (!$('opt-backup').checked) { $('convert-summary').innerHTML = '<span class="warn">Hãy lưu một bản sao tài liệu rồi tick ô xác nhận.</span>'; return; }
  const src = convSrc(), dst = convDst();
  if (src === dst && src !== 'mathtype') { $('convert-summary').innerHTML = '<span class="warn">Nguồn và đích giống nhau: không có gì để chuyển.</span>'; return; }
  const normalize = src === 'mathtype' && dst === 'mathtype';
  // kinds of equations that take part (MathType→MathType also redoes Word equations; ->MathType goes through Word equations)
  const kinds = new Set([SRC_KIND[src]]);
  if (dst === 'mathtype') kinds.add('native');
  $('btn-convert').disabled = true;
  const bar = $('progress');
  try {
    const scopeName = document.querySelector('input[name=scope]:checked').value;
    $('convert-summary').textContent = 'Đang đọc các đoạn…';
    const { scope, items } = await paragraphsToProcess(scopeName, (d, t) => progress(bar, d, t * 2), { kinds });
    let converted = 0, convertedMathType = 0, convertedLatex = 0, kept = 0;
    const reasons = {}, writes = [], backup = [];
    // Resolve the cursor font once, rather than one Office round trip per paragraph.
    const mathTypeOptions = dst === 'mathtype' ? { ...mtConvertOptions(), defaultSize: (await mtOptions()).size } : null;
    let lastYield = Date.now();
    for (const it of items) {
      if (Date.now() - lastYield >= 16) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        lastYield = Date.now();
      }
      let r;
      if (dst === 'mathtype') {
        // LaTeX text -> Word equation first, then every Word equation -> MathType object
        const a = convertMathTypeInPackage(it.pkg, { convertMathType: normalize, convertLatex: src === 'latex', display: false });
        const b = await convertNativeToMathType(a.pkg, { render: browserRender, ...mathTypeOptions });
        r = { converted: b.converted, convertedLatex: a.convertedLatex || 0, convertedMathType: 0, kept: [...a.kept, ...b.kept], changed: b.changed, pkg: b.changed ? b.pkg : a.pkg };
        if (!b.changed && a.changed) r.converted = a.converted;
      } else if (dst === 'latex') {
        r = convertEquationsToLatexText(it.pkg, { fromMathType: src === 'mathtype', fromNative: src === 'word' });
      } else {
        r = convertMathTypeInPackage(it.pkg, { convertMathType: src === 'mathtype', convertLatex: src === 'latex', display: $('opt-display').checked });
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
let visual = null;
let previewTimer = 0;
function renderEditorPreview() {   // coalesce keystrokes: one KaTeX render per pause (longer on weak machines)
  clearTimeout(previewTimer);
  previewTimer = setTimeout(renderEditorPreviewNow, document.documentElement.classList.contains('lite') ? 220 : 60);
}
function renderEditorPreviewNow() {
  if (visual && visual.active()) visual.pull();
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

async function loadFormulaFromWord(showNotice = true, picked = null, isCurrent = () => true) {
  const statusEl = $('editor-status');
  if (statusEl) statusEl.textContent = 'Đang đọc công thức từ Word…';
  try {
    if (!picked) {
      const version = ++selectionVersion;
      const draft = $('editor-latex').value;
      const ctx = await io.readCursorContext();
      if (version !== selectionVersion || applying || !$('tab-editor')?.classList.contains('active') || $('editor-latex').value !== draft) return;
      picked = pickEquation(ctx);
    }
    if (!isCurrent()) return;
    const r = picked;
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
    clearTimeout(previewTimer);
    renderEditorPreviewNow();
    const kindLabel = target.kind === 'mathtype' ? 'MathType' : target.kind === 'native' ? 'Word Equation' : 'LaTeX';
    const where = r.count > 1 ? ` — công thức ${r.index + 1}/${r.count}${r.how === 'cursor' ? ' (gần con trỏ nhất)' : ''}` : '';
    if (statusEl) statusEl.innerHTML = `<span class="ok">Đã nạp công thức (${kindLabel})${where}:</span> <code style="font-size:11px">${esc(target.latex)}</code>`;
  } catch (e) {
    if (statusEl) statusEl.innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`;
  }
}

async function applyFormulaToWord() {
  if (applying) return;
  const tex = $('editor-latex')?.value.trim();
  const msgEl = $('editor-msg');
  if (!tex) {
    if (msgEl) msgEl.innerHTML = '<span class="bad">Vui lòng nhập mã LaTeX trước khi cập nhật.</span>';
    return;
  }
  if (msgEl) msgEl.textContent = 'Đang chèn vào Word…';
  applying = true;
  ++selectionVersion;
  try {
    const isDisplay = $('editor-display')?.checked ?? false;
    const asMathType = document.querySelector('input[name=editor-format]:checked')?.value === 'mathtype';
    const pkg = asMathType ? await makeMathTypePackage(tex, { render: browserRender, inline: !isDisplay, ...(await mtOptions()) }) : makeEquationPackage(latexToOmml(tex, { display: isDisplay }));
    await io.replaceSelection(pkg);
    if (msgEl) msgEl.innerHTML = `<span class="ok">Đã cập nhật công thức vào Word thành công (${asMathType ? 'đối tượng MathType' : 'chuẩn Word Equation'}).</span>`;
  } catch (e) {
    if (msgEl) msgEl.innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`;
  } finally {
    applying = false;
    onSelectionChanged();
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

$('btn-guide').addEventListener('click', () => { const url = 'https://giasu.ai.vn/word-addin/su-dung.html'; try { window.open(url, '_blank', 'noopener'); } catch { location.href = url; } });
$('copy-acct').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('4802518888'); $('acct-msg').textContent = 'Đã sao chép'; } catch { $('acct-msg').textContent = 'Hãy chọn và sao chép thủ công'; }
});

// ---------------------------------------------------------------- boot (real Word, or the browser mock for development)
// ---------------------------------------------------------------- auto-load the equation under the cursor
let autoTimer = null, lastAutoSig = '', selectionVersion = 0, applying = false;
let autoReading = false, autoPending = false;
const canAutoLoad = () => !applying && $('editor-auto')?.checked && $('tab-editor')?.classList.contains('active') &&
  !(document.hasFocus() && (document.activeElement === $('editor-latex') || visual?.focused()));
async function refreshAutoSelection(version) {
  if (!canAutoLoad()) return;
  if (autoReading) { autoPending = true; return; }
  autoPending = false;
  autoReading = true;
  try {
    const ctx = await io.readCursorContext();
    if (version !== selectionVersion || !canAutoLoad()) return;
    const r = pickEquation(ctx);
    if (!r.eq) return;
    const signature = JSON.stringify([r.eq.latex, r.eq.inline]);
    if (signature === lastAutoSig && $('editor-latex').value === r.eq.latex && $('editor-display')?.checked === !r.eq.inline) return;
    lastAutoSig = signature;
    await loadFormulaFromWord(false, r, () => version === selectionVersion && canAutoLoad());
  } catch { /* selection not readable: ignore */ }
  finally {
    autoReading = false;
    if (autoPending) {
      autoPending = false;
      if (autoTimer === null) refreshAutoSelection(selectionVersion);
    }
  }
}
function onSelectionChanged() {
  const version = ++selectionVersion;
  clearTimeout(autoTimer);
  autoTimer = null;
  if (applying) return;
  autoTimer = setTimeout(() => {
    autoTimer = null;
    // other tabs (Tính toán) listen to this event and read the cursor themselves
    document.dispatchEvent(new CustomEvent('texcraft:selection'));
    return refreshAutoSelection(version);
  }, 80);
}
let selectionWatcherInstalled = false, selectionWatcherPending = false, selectionWatcherRetries = 0;
function installSelectionWatcher() {
  if (selectionWatcherInstalled || selectionWatcherPending) return;
  const retry = () => {
    selectionWatcherPending = false;
    if (++selectionWatcherRetries <= 3) setTimeout(installSelectionWatcher, 1000);
  };
  try {
    if (typeof Office === 'undefined' || !Office.context?.document?.addHandlerAsync) { retry(); return; }
    selectionWatcherPending = true;
    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onSelectionChanged, (result) => {
      selectionWatcherPending = false;
      if (result.status === Office.AsyncResultStatus.Failed) { retry(); return; }
      selectionWatcherInstalled = true;
      onSelectionChanged();
    });
  } catch { retry(); }
}
// Returning to Word can precede its selection event; refresh after the click settles.
window.addEventListener('blur', onSelectionChanged);
$('editor-auto')?.addEventListener('change', onSelectionChanged);

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
    try {
      const ready = Office.onReady().then(() => { installSelectionWatcher(); registerRibbonActions(); });
      await Promise.race([ready, new Promise((_r, rej) => setTimeout(() => rej(new Error('timeout')), 4000))]);
    } catch { /* not inside Office */ }
    registerRibbonActions();
  }
  if (!io.hasWord() || (typeof Office !== 'undefined' && !Office.context?.host)) {
    const note = document.createElement('div');
    note.className = 'notice';
    try {
      if (!/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && new URLSearchParams(location.search).get('mock') !== '1') throw new Error('Real Office APIs must not be replaced by the mock.');
      const mock = await import('./mock-word.js');
      await mock.install(new URLSearchParams(location.search).get('doc') || '/fixtures/sample-body.xml');
      note.textContent = 'Chế độ thử (không có Word): dùng tài liệu giả lập đọc từ /fixtures. Mọi thay đổi chỉ nằm trong bộ nhớ trình duyệt.';
    } catch {
      note.textContent = 'Trang này chỉ hoạt động bên trong Word (Chèn → Add-ins). Mở nó từ Word nhé.';
    }
    document.body.prepend(note);
  }
  try { if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) $('apply-kbd').textContent = '⌘↩'; } catch { /* ignore */ }
  installSelectionWatcher();
  requestStartupLoad();
  checkUrlTab();
}
let editorInitialized = false;
function initEditor() {
  if (editorInitialized) return;
  editorInitialized = true;
  attachLatexAutocomplete($('editor-latex'), { onChange: () => renderEditorPreview() });
  visual = createVisualEditor({ host: $('editor-visual'), textarea: $('editor-latex'), onChange: () => renderEditorPreview() });
  mountEditorToolbar($('editor-toolbar'), $('editor-latex'), { visual });
  const KEY_IN = 'texcraft-editor-input';
  const setInput = async (mode, focus = true) => {
    try { await visual.setActive(mode === 'visual', { focus }); } catch (e) { $('editor-msg').innerHTML = `<span class="bad">Không tải được ô nhập trực quan: ${esc(e.message)}</span>`; mode = 'latex'; await visual.setActive(false); }
    const r = document.querySelector(`input[name=editor-input][value=${mode}]`); if (r) r.checked = true;
    try { localStorage.setItem(KEY_IN, mode); } catch { /* ignore */ }
    renderEditorPreview();
  };
  document.querySelectorAll('input[name=editor-input]').forEach((r) => r.addEventListener('change', () => setInput(r.value)));
  let saved = 'latex'; try { saved = localStorage.getItem(KEY_IN) || 'latex'; } catch { /* ignore */ }
  if (saved === 'visual') setInput('visual', false);
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
