import * as io from '../src/word-io.js';
import { scanBody, previewReplace, makeTransform, convertMathTypeInPackage, rewriteEquations, scanPackage } from '../src/app-core.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const state = { scanned: null, lastBackup: null, examLoaded: false };
let lastPreview = [];

// ---------------------------------------------------------------- tabs
document.querySelectorAll('nav button').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('nav button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
  document.querySelectorAll('section').forEach((s) => s.classList.toggle('active', s.id === 'tab-' + b.dataset.tab));
  if (b.dataset.tab === 'exam' && !state.examLoaded) {
    state.examLoaded = true;
    import('./exam-ui.js').then((m) => m.mountExam($('exam-root'), io)).catch((e) => { $('exam-root').textContent = 'Không tải được mô-đun đề thi: ' + e.message; });
  }
}));

// After any write: previews are stale, and "restore" is only safe while paragraph numbering is unchanged.
function afterWrite(res, backup) {
  state.scanned = null;
  lastPreview = [];
  $('btn-apply').disabled = true;
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
  const ok = mt.filter((e) => e.latex !== null).length;
  const native = s.equations.filter((e) => e.kind === 'native');
  $('scan-summary').innerHTML = `${s.equations.length} công thức: MathType đọc được <b class="ok">${ok}</b>, không đọc được <b class="bad">${mt.length - ok}</b>, công thức Word <b>${native.length}</b>` +
    (s.mapped ? '' : ` · <span class="warn">số đoạn không khớp (${s.paragraphTotal} ≠ ${s.paragraphCount}); chế độ chuyển toàn bộ sẽ đọc từng đoạn</span>`);
  const only = $('only-bad').checked;
  const rows = s.equations.filter((e) => !only || (e.kind === 'mathtype' && e.latex === null) || (e.kind === 'native' && e.latex === null));
  $('eq-table').tBodies[0].innerHTML = rows.slice(0, 600).map((e) => {
    const badge = e.latex === null ? `<span class="badge bad" title="${esc(e.error)}">không đọc được</span>` : e.kind === 'mathtype' ? '<span class="badge ok">MathType</span>' : '<span class="badge native">Word</span>';
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

async function paragraphsToProcess(scope, onProgress) {
  if (scope === 'selection') return { scope: { kind: 'selection' }, items: await io.readParagraphs({ kind: 'selection' }, onProgress) };
  if (!state.scanned) await scan();
  const s = state.scanned;
  if (s.mapped) {
    const indexes = [...new Set(s.equations.filter((e) => e.kind === 'mathtype' && e.latex !== null).map((e) => e.para))].sort((a, b) => a - b);
    return { scope: { kind: 'all' }, items: await io.readParagraphs({ kind: 'indexes', indexes }, onProgress) };
  }
  return { scope: { kind: 'all' }, items: await io.readParagraphs({ kind: 'all' }, onProgress) };
}

async function convert() {
  if (!$('opt-backup').checked) { $('convert-summary').innerHTML = '<span class="warn">Hãy lưu một bản sao tài liệu rồi tick ô xác nhận.</span>'; return; }
  $('btn-convert').disabled = true;
  const bar = $('progress');
  try {
    const scopeName = document.querySelector('input[name=scope]:checked').value;
    $('convert-summary').textContent = 'Đang đọc các đoạn…';
    const { scope, items } = await paragraphsToProcess(scopeName, (d, t) => progress(bar, d, t * 2));
    let converted = 0, kept = 0;
    const reasons = {}, writes = [], backup = [];
    items.forEach((it) => {
      const r = convertMathTypeInPackage(it.pkg, { display: $('opt-display').checked });
      converted += r.converted; kept += r.kept.length;
      r.kept.forEach((k) => { reasons[k.reason] = (reasons[k.reason] || 0) + 1; });
      if (r.changed) { writes.push({ index: it.index, pkg: r.pkg }); backup.push({ index: it.index, pkg: it.pkg }); }
    });
    if (!writes.length) { $('convert-summary').innerHTML = `Không có gì để chuyển. Giữ nguyên MathType: ${kept}.`; return; }
    $('convert-summary').textContent = `Đang ghi ${writes.length} đoạn…`;
    const res = await io.writeParagraphs(scope, writes, writeMode(), (d, t) => progress(bar, t + d, t * 2));
    afterWrite(res, { scope, items: backup, mode: writeMode() });
    const reasonList = Object.entries(reasons).map(([k, v]) => `<li>${esc(k)}: ${v}</li>`).join('');
    $('convert-summary').innerHTML = `<p><b class="ok">Đã chuyển ${converted}</b> công thức; <b class="${kept ? 'warn' : ''}">giữ nguyên MathType ${kept}</b>.</p>` +
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
    $('convert-summary').innerHTML = '<span class="ok">Đã khôi phục các đoạn gốc (MathType).</span>';
    $('btn-restore').disabled = true;
  } catch (e) { $('convert-summary').innerHTML = `<span class="bad">Không khôi phục được: ${esc(e.message)}</span>`; }
});

// ---------------------------------------------------------------- find / replace
const replaceOpts = () => ({ find: $('find').value, replace: $('replace').value, regex: $('opt-regex').checked, matchCase: $('opt-case').checked, includeMathType: $('opt-mt').checked });
$('btn-preview').addEventListener('click', async () => {
  try {
    $('preview-summary').textContent = 'Đang quét…';
    await scan();
    lastPreview = previewReplace(state.scanned, replaceOpts());
    $('preview-summary').innerHTML = lastPreview.length ? `<b>${lastPreview.length}</b> công thức sẽ đổi (chưa ghi gì vào tài liệu).` : 'Không có công thức nào khớp.';
    $('preview-table').tBodies[0].innerHTML = lastPreview.slice(0, 300).map((r) => `<tr><td>${r.n + 1}</td><td class="diff"><div><del class="tex">${esc(r.before)}</del></div><div><ins class="tex">${esc(r.after)}</ins></div></td><td><span class="badge ${r.kind === 'mathtype' ? 'ok' : 'native'}">${r.kind === 'mathtype' ? 'MathType→Word' : 'Word'}</span></td></tr>`).join('');
    $('btn-apply').disabled = !lastPreview.length;
  } catch (e) { $('preview-summary').innerHTML = `<span class="bad">${esc(e.message)}</span>`; }
});
$('btn-apply').addEventListener('click', async () => {
  if (!$('rep-backup').checked) { $('apply-summary').innerHTML = '<span class="warn">Hãy lưu một bản sao tài liệu rồi tick ô xác nhận.</span>'; return; }
  const bar = $('progress2');
  $('btn-apply').disabled = true;
  try {
    if (!lastPreview.length || !state.scanned) throw new Error('Hãy bấm “Xem trước” lại (tài liệu đã thay đổi).');
    const opts = replaceOpts();
    const transform = makeTransform(opts);
    const indexes = [...new Set(lastPreview.map((r) => r.para))].sort((a, b) => a - b);
    if (!state.scanned.mapped) throw new Error('Số đoạn trong OOXML không khớp với tài liệu nên không thể xác định đoạn cần sửa. Hãy dùng chuyển đổi trong phạm vi đoạn đang chọn.');
    const items = await io.readParagraphs({ kind: 'indexes', indexes }, (d, t) => progress(bar, d, t * 2));
    const writes = [], backup = [];
    let changed = 0, failed = 0;
    items.forEach((it) => {
      const r = rewriteEquations(it.pkg, transform, { includeMathType: opts.includeMathType, display: $('opt-display').checked });
      changed += r.changed; failed += r.failed.length;
      if (r.changed) { writes.push({ index: it.index, pkg: r.pkg }); backup.push({ index: it.index, pkg: it.pkg }); }
    });
    const res = await io.writeParagraphs({ kind: 'all' }, writes, writeMode(), (d, t) => progress(bar, t + d, t * 2));
    afterWrite(res, { scope: { kind: 'all' }, items: backup, mode: writeMode() });
    $('apply-summary').innerHTML = `<b class="ok">Đã sửa ${changed}</b> công thức${failed ? `, <b class="warn">${failed} không ghi được</b>` : ''}.` +
      (res.before !== res.after ? ` <span class="warn">Số đoạn ${res.before} → ${res.after}.</span>` : '');
  } catch (e) { $('apply-summary').innerHTML = `<span class="bad">Lỗi: ${esc(e.message)}</span>`; }
  finally { $('btn-apply').disabled = false; }
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
async function boot() {
  if (typeof Office !== 'undefined' && Office.onReady) {
    try { await Promise.race([Office.onReady(), new Promise((_r, rej) => setTimeout(() => rej(new Error('timeout')), 4000))]); } catch { /* not inside Office */ }
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
}
boot();
