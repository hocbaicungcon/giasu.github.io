import { answerXlsx, answerTsv } from '../src/xlsx.js';
import { prepareEnglish, unansweredQuestions, parseBody, analyze, answersOf, normalize, shuffleVersion, answerTable, answerTableXml, appendToBody, prependToBody } from '../src/exam.js';
import { DEFAULT_FORM, examHeaderXml, examEndXml, examFooterXml, simplePackage } from '../src/exam-header.js';
import { scanPackage } from '../src/ooxml.js';
import { buildExamPptx, PPTX_THEMES } from '../src/pptx.js';
import { qrPayloads, renderQr } from '../src/answer-qr.js';
import { makePicturePackage, canvasToPng, downloadBlob } from '../src/picture.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function mountExam(root, io) {
  root.innerHTML = `
  <div class="notice">Nhận dạng: <b>PHẦN I/II/III</b>, <b>Câu N.</b> hoặc <b>Question N.</b> (đề tiếng Anh, tự nhận),phương án <b>A. B. C. D.</b>, ý <b>a) b) c) d)</b>. Đáp án đúng được nhận qua nhãn phương án <b>gạch chân / chữ đỏ / tô nổi</b>. Mọi thao tác ghi vào tài liệu chỉ chạy khi bạn bấm nút; hãy làm trên bản sao.</div>
  <fieldset><legend>1. Phân tích đề</legend>
    <div class="btns"><button class="primary" id="ex-analyze">Phân tích tài liệu</button></div>
    <div id="ex-summary" class="muted"></div>
  </fieldset>
  <fieldset><legend>2. Chuẩn hóa câu hỏi</legend>
    <label class="field"><span>Đánh số lại câu</span>
      <select id="ex-renumber"><option value="part">theo từng phần (mỗi phần bắt đầu từ Câu 1)</option><option value="continuous">liên tục toàn đề</option><option value="">không đổi</option></select></label>
    <label class="field"><span>Căn lề phương án</span>
      <select id="ex-layout"><option value="auto">tự động (1 dòng / 2 dòng / 4 dòng theo độ dài)</option><option value="4">luôn 4 cột</option><option value="2">luôn 2 cột</option><option value="1">mỗi phương án một dòng</option><option value="false">giữ nguyên</option></select></label>
    <label class="field"><span>Từ trong nhãn câu</span>
      <select id="ex-word"><option value="keep">giữ nguyên như tài liệu (Câu 1. / Bài 1. / bài 1:)</option><option value="Câu">đổi tất cả thành “Câu N.”</option><option value="Bài">đổi tất cả thành “Bài N.”</option></select></label>
    <label><input type="checkbox" id="ex-labels" checked> nhãn A. B. C. D. in đậm, viết hoa, dấu chấm</label>
    <label><input type="checkbox" id="ex-qformat" checked> nhãn “Câu N.” / “Bài N.” cùng định dạng với câu đầu tiên</label>
    <label><input type="checkbox" id="ex-keep" checked> giữ câu hỏi và phương án cùng trang (keep with next)</label>
    <label><input type="checkbox" id="ex-backup1"> Tôi đã lưu một bản sao tài liệu</label>
    <div class="btns"><button class="primary" id="ex-normalize">Chuẩn hóa</button></div>
    <div id="ex-norm-out"></div>
  </fieldset>
  <fieldset><legend>3. Trộn đề &amp; bảng đáp án</legend>
    <div class="grid3"><label class="field"><span>Số mã đề</span><input type="number" id="ex-n" value="4" min="1" max="12"></label><label class="field"><span>Mã đề đầu</span><input type="number" id="ex-code" value="101"></label><label class="field"><span>Hạt giống</span><input type="number" id="ex-seed" value="2026"></label></div>
    <label><input type="checkbox" id="ex-shq" checked> trộn thứ tự câu trong từng phần</label>
    <label><input type="checkbox" id="ex-sho" checked> trộn thứ tự phương án A–D (giữ nguyên câu có “cả A và B…”, “tất cả các đáp án…”)</label>
    <label><input type="checkbox" id="ex-shs"> trộn cả thứ tự ý a) b) c) d) ở phần đúng sai</label>
    <div id="ex-sections"></div>
    <label><input type="checkbox" id="ex-strip" checked> bỏ dấu đáp án (gạch chân/đỏ) khỏi đề trộn</label>
    <label><input type="checkbox" id="ex-withkey" checked> thêm bảng đáp án của mã đề vào cuối mỗi đề</label>
    <details class="mt-details" id="ex-form-box"><summary>Tiêu đề, chân trang, dòng HẾT (theo mẫu đề kiểm tra)</summary>
      <label><input type="checkbox" id="ex-h-title" checked> thêm khối tiêu đề (Sở, Trường, Kỳ thi, Họ tên, Mã đề) đầu mỗi đề</label>
      <label><input type="checkbox" id="ex-h-end" checked> thêm dòng ----HẾT---- cuối đề</label>
      <label><input type="checkbox" id="ex-h-footer" checked> thêm chân trang “Trang X/Y-Mã đề” (khi mở tài liệu mới)</label>
      <div class="grid2">
        <label class="field"><span>Sở GD&amp;ĐT</span><input type="text" id="ex-f-soGd"></label>
        <label class="field"><span>Trường</span><input type="text" id="ex-f-truong"></label>
        <label class="field"><span>Dòng thứ 3 (bên trái)</span><input type="text" id="ex-f-chinhThuc"></label>
        <label class="field"><span>Kỳ kiểm tra</span><input type="text" id="ex-f-kyThi"></label>
        <label class="field"><span>Năm học</span><input type="text" id="ex-f-namHoc"></label>
        <label class="field"><span>Môn</span><input type="text" id="ex-f-mon" placeholder="vd. Toán"></label>
        <label class="field"><span>Lớp</span><input type="text" id="ex-f-lop" placeholder="vd. 12"></label>
        <label class="field"><span>Thời gian (phút)</span><input type="text" id="ex-f-thoiGian" placeholder="vd. 90"></label>
      </div>
      <div class="btns two"><button class="secondary" id="ex-f-reset">Khôi phục mặc định</button><button class="secondary" id="ex-f-insert" title="Chèn khối tiêu đề tại con trỏ, mã đề lấy từ ô “Mã đề đầu tiên”">Chèn tiêu đề tại con trỏ</button></div>
    </details>
    <label class="field"><span>Nơi đặt kết quả</span>
      <select id="ex-target"><option value="new">mỗi mã đề một tài liệu mới</option><option value="append">chèn nối tiếp vào cuối tài liệu này</option><option value="none">chỉ lập bảng đáp án (không tạo đề)</option></select></label>
    <div class="btns"><button class="primary" id="ex-shuffle">Tạo đề</button></div>
    <div class="btns two"><button class="secondary" id="ex-key">Chèn bảng đáp án</button><button class="secondary" id="ex-copy" disabled>Sao chép CSV</button></div>
    <div class="subhead">Xuất đáp án</div>
    <label class="field"><span>Mẫu Excel</span><select id="ex-xlsx"><option value="giasu">Mẫu GIASU.AI.VN (hàng = câu, cột = mã đề)</option><option value="texcraft">Mẫu TEXCRAFT (hàng = đề, cột = câu / ý)</option><option value="both">Cả hai mẫu</option></select></label>
    <div class="orig-row"><label class="switch"><input type="checkbox" id="ex-orig" checked><span class="switch-track"></span><span>Thêm đề gốc, mã</span></label><input type="text" id="ex-origcode" value="0000" maxlength="4" inputmode="numeric"></div>
    <div class="btns two"><button class="secondary" id="ex-export">Tải file Excel</button><button class="secondary" id="ex-tsv">Sao chép bảng</button></div>
    <div class="btns"><button class="secondary tb-action" id="ex-qr"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3v3h3v3h-6v-3m6-3v-3m-9 0h3"/></svg><span>Tạo mã QR đáp án</span></button></div>
    <p class="hint">Dùng để nhập đáp án vào <a href="https://giasu.ai.vn/cham-thi/" target="_blank" rel="noopener">giasu.ai.vn/cham-thi</a></p>
    <div id="ex-qr-panel" hidden class="qr-panel"><canvas id="ex-qr-canvas" style="max-width:100%;height:auto;border:1px solid var(--line);border-radius:8px;background:#fff"></canvas><div id="ex-qr-status" class="muted" style="margin:6px 0"></div><div class="btns four"><button class="secondary" id="ex-qr-prev">‹ QR trước</button><button class="secondary" id="ex-qr-next">QR tiếp ›</button><button class="secondary" id="ex-qr-save">Tải PNG</button><button class="secondary" id="ex-qr-insert">Chèn vào Word</button></div></div>
    <progress id="ex-progress" value="0" max="1" hidden></progress>
    <div id="ex-shuffle-out"></div>
  </fieldset>
  <fieldset><legend>4. Xuất bài trình chiếu PowerPoint</legend>
    <label class="field"><span>Tiêu đề slide</span><input type="text" id="ex-pptx-title" value="BÀI TẬP TRẮC NGHIỆM"></label>
    <label class="field" id="ex-pptx-source-box" hidden><span>Nguồn đề</span><select id="ex-pptx-source"><option value="current">Tài liệu hiện tại</option></select></label>
    <label class="field"><span>Giao diện (màu sắc, phông chữ)</span><select id="ex-pptx-theme">${PPTX_THEMES.map((t) => `<option value="${t.id}">${t.label} — ${t.font}</option>`).join('')}</select></label>
    <div id="ex-pptx-swatch" class="swatch"></div>
    <div class="notice" style="margin: 6px 0;">
      Tạo file trình chiếu PPTX 16:9 tương tác: bấm vào phương án sẽ hiển thị ngay thông báo <b>Đúng</b> (chúc mừng) hoặc <b>Sai</b> (thử lại). Chạy trực tiếp trên PowerPoint, Google Slides, Keynote và CHITUP Slide.
    </div>
    <div class="btns"><button class="primary" id="ex-pptx-btn">Tải file PowerPoint (PPTX)</button></div>
    <div id="ex-pptx-out"></div>
  </fieldset>`;
  const $ = (id) => root.querySelector('#' + id);
  let lastCsv = '';
  let lastVersions = null;   // [{code, answers}] of the latest "Tạo đề"

  async function body() { const { pkg } = await io.readBody(); return pkg; }
  /** English papers pasted from PDF (tables, glued "Question N.", auto-lettered options) are read in a cleaned layout; the document itself is untouched. */
  async function preparedBody() { const prep = prepareEnglish(await body()); return prep; }
  const prepNote = (prep) => (prep.changed ? `<div class="muted">Đã tự chuẩn hóa bố cục trong bộ nhớ (${prep.stats.tables} bảng, ${prep.stats.split} chỗ tách, ${prep.stats.labels} nhãn A–D tự đánh số); tài liệu gốc không bị sửa. Bấm “Chuẩn hóa” nếu muốn ghi bố cục này vào tài liệu.</div>` : '');
  const chips = (list) => (list.length ? `<div class="chips-title">Câu chưa có đáp án — bấm để chuyển tới trong Word (${list.length}):</div><div class="chips">${list.map((q) => `<button type="button" class="chip" data-p="${q.paragraph}" title="Chuyển tới ${esc(q.label)} trong Word">${esc(q.label)}</button>`).join('')}</div>` : '');
  root.addEventListener('click', async (ev) => {
    const b = ev.target.closest('.chip');
    if (!b) return;
    try { await io.selectParagraph(Number(b.dataset.p)); } catch (e) { /* not inside Word */ }
  });
  // ---- English exams ("Question N"): questions are grouped by instruction line / passage; each group can be shuffled or kept
  const SEC_KIND = { independent: 'câu độc lập', passage: 'có đoạn văn', order: 'sắp xếp câu' };
  let secState = { sig: '', modes: {} };
  /** Shows the detected sections (English exams only) and returns the chosen mode per section index. */
  function sectionsUi(a) {
    const box = $('ex-sections');
    if (!a.english) { box.innerHTML = ''; return undefined; }
    const sig = a.sections.map((s) => `${s.firstNumber}-${s.lastNumber}:${s.kind}`).join('|');
    if (sig !== secState.sig) secState = { sig, modes: Object.fromEntries(a.sections.map((s) => [s.index, s.mode])) };
    const lost = a.expected > a.detected ? `<p class="bad">Chỉ nhận được ${a.detected}/${a.expected} câu “Question N” (các câu nằm trong bảng, dính liền đoạn khác hoặc có phương án đánh số tự động chưa đọc được). Không nên trộn đề này khi chưa sửa bố cục.</p>` : '';
    box.innerHTML = `${lost}<div class="subhead">Đề tiếng Anh — ${a.sections.length} nhóm câu</div><div class="muted">Nhóm có đoạn văn / sắp xếp câu giữ thứ tự câu (số chỗ trống, câu a–e không lệch); phương án A–D vẫn được trộn.</div><ul class="sec-list">` +
      a.sections.map((s) => `<li><span title="${esc(s.title)}">Question ${s.firstNumber}${s.lastNumber !== s.firstNumber ? '–' + s.lastNumber : ''} · ${SEC_KIND[s.kind]}</span>` +
        `<select data-sec="${s.index}"><option value="shuffle"${secState.modes[s.index] === 'shuffle' ? ' selected' : ''}>trộn câu</option><option value="keep"${secState.modes[s.index] === 'keep' ? ' selected' : ''}>giữ thứ tự câu</option></select></li>`).join('') + '</ul>';
    box.querySelectorAll('select[data-sec]').forEach((sel) => sel.addEventListener('change', () => { secState.modes[sel.dataset.sec] = sel.value; }));
    return secState.modes;
  }
  const fail = (el, e) => { el.innerHTML = `<span class="bad">Lỗi: ${esc(e.message || e)}</span>`; };

  $('ex-analyze').addEventListener('click', async () => {
    try {
      $('ex-summary').textContent = 'Đang đọc…';
      const prep = await preparedBody();
      const model = parseBody(prep.pkg);
      const a = analyze(model);
      const ans = answersOf(model, a);
      const lines = a.parts.map((p) => {
        const flagged = p.questions.filter((q) => q.flags.length).length;
        const marked = ans.filter((x) => x.part === p.title && x.value).length;
        return `<li><b>${esc(p.title.slice(0, 70) || '(đầu đề)')}</b> — ${p.kind === 'mc' ? 'nhiều phương án' : p.kind === 'tf' ? 'đúng/sai' : p.kind === 'short' ? 'trả lời ngắn' : 'khác'}: ${p.questions.length} câu` +
          `${p.kind === 'mc' ? `, nhận đáp án ${marked}/${p.questions.length}` : ''}${flagged ? `, <span class="warn">${flagged} câu cần chú ý</span>` : ''}</li>`;
      });
      sectionsUi(a);
      $('ex-summary').innerHTML = a.parts.length ? `${a.english ? '<div class="ok">Nhận ra đề tiếng Anh (Question N) — xem các nhóm câu ở mục 3.</div>' : ''}${prepNote(prep)}<ul>${lines.join('')}</ul>${prep.changed ? '' : chips(unansweredQuestions(model, a))}` : '<span class="warn">Không thấy “Câu N.” / “Question N.” nào.</span>';
    } catch (e) { fail($('ex-summary'), e); }
  });

  $('ex-normalize').addEventListener('click', async () => {
    if (!$('ex-backup1').checked) { $('ex-norm-out').innerHTML = '<span class="warn">Hãy lưu một bản sao tài liệu rồi tick ô xác nhận.</span>'; return; }
    try {
      const layout = $('ex-layout').value;
      const r = normalize(await body(), { renumber: $('ex-renumber').value || false, labelWord: $('ex-word').value, labels: $('ex-labels').checked, questionFormat: $('ex-qformat').checked,
        keepNext: $('ex-keep').checked, layout: layout === 'false' ? false : layout });
      await io.replaceBody(r.pkg);
      const rep = r.report;
      $('ex-norm-out').innerHTML = `<span class="ok">Đã chuẩn hóa ${rep.questions} câu</span>: đánh số lại ${rep.renumbered}, căn lại phương án ${rep.relaid}.` +
        (rep.skipped.length ? `<ul class="warn">${rep.skipped.slice(0, 8).map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : '') +
        `<div class="muted">Hoàn tác bằng Ctrl/Cmd+Z (Word coi đây là một thao tác thay thế toàn bộ nội dung).</div>`;
    } catch (e) { fail($('ex-norm-out'), e); }
  });

  const options = () => ({ shuffleQuestions: $('ex-shq').checked, shuffleOptions: $('ex-sho').checked, shuffleStatements: $('ex-shs').checked,
    stripMarks: $('ex-strip').checked, labelWord: $('ex-word').value, renumber: $('ex-renumber').value || 'part', layout: $('ex-layout').value === 'false' ? 'auto' : $('ex-layout').value });

  // ---- title block / footer of the paper (school's template); values are kept between sessions
  const FORM_KEYS = Object.keys(DEFAULT_FORM), KEY_FORM = 'texcraft-exam-form';
  const loadForm = () => { let saved = {}; try { saved = JSON.parse(localStorage.getItem(KEY_FORM) || '{}'); } catch { saved = {}; } return { ...DEFAULT_FORM, ...saved, ...Object.fromEntries(['mon', 'lop', 'thoiGian'].filter((k) => saved[k] === undefined).map((k) => [k, ''])) }; };
  const readForm = () => Object.fromEntries(FORM_KEYS.map((k) => [k, $('ex-f-' + k).value]));
  const fillForm = (f) => FORM_KEYS.forEach((k) => { $('ex-f-' + k).value = f[k] ?? ''; });
  const saveForm = () => { try { localStorage.setItem(KEY_FORM, JSON.stringify(readForm())); } catch { /* ignore */ } };
  fillForm(loadForm());
  FORM_KEYS.forEach((k) => $('ex-f-' + k).addEventListener('input', saveForm));
  $('ex-f-reset').addEventListener('click', () => { fillForm({ ...DEFAULT_FORM, mon: '', lop: '', thoiGian: '' }); saveForm(); });
  $('ex-f-insert').addEventListener('click', async () => {
    const out = $('ex-shuffle-out');
    try { await io.replaceSelection(simplePackage(examHeaderXml(readForm(), $('ex-code').value.trim()))); out.innerHTML = '<span class="ok">Đã chèn khối tiêu đề tại con trỏ.</span>'; } catch (e) { fail(out, e); }
  });
  /** The paper of one version with the chosen title block and closing line. */
  const decorate = (pkg, code) => {
    let out = pkg;
    if ($('ex-h-title').checked) out = prependToBody(out, examHeaderXml(readForm(), code));
    if ($('ex-h-end').checked) out = appendToBody(out, examEndXml());
    return out;
  };

  $('ex-shuffle').addEventListener('click', async () => {
    const out = $('ex-shuffle-out'), bar = $('ex-progress');
    try {
      const prep = await preparedBody(), pkg = prep.pkg;
      const n = Number($('ex-n').value), first = Number($('ex-code').value), seed = Number($('ex-seed').value);
      const target = $('ex-target').value;
      const origA = analyze(parseBody(pkg));
      const sectionModes = sectionsUi(origA), qWord = origA.english ? 'Question' : 'Câu';
      const versions = [];
      for (let i = 0; i < n; i++) {
        const code = String(first + i);
        const r = shuffleVersion(pkg, { ...options(), seed: seed + i * 7919, code, sectionModes });
        versions.push({ code, ...r });
        bar.hidden = false; bar.max = n; bar.value = i + 1;
      }
      const table = answerTable(versions.map((v) => ({ code: v.code, answers: v.answers })));
      lastCsv = table.csv;
      lastVersions = { pkg, versions: versions.map((v) => ({ code: v.code, answers: v.answers, pkg: v.pkg })) };
      const sourceSelect = $('ex-pptx-source');
      if (sourceSelect) {
        sourceSelect.innerHTML = '<option value="current">Tài liệu hiện tại (đề gốc)</option>' +
          versions.map((v) => `<option value="${esc(v.code)}">Mã đề ${esc(v.code)}</option>`).join('');
        const sourceBox = $('ex-pptx-source-box');
        if (sourceBox) sourceBox.hidden = false;
      }
      $('ex-copy').disabled = false;
      const unknown = versions[0].answers.filter((a) => a.value === null).length;
      let note = '';
      if (target === 'new') {
        let opened = 0, fellBack = false;
        for (const v of versions) {
          const paper = decorate(v.pkg, v.code);
          const finalPkg = $('ex-withkey').checked ? appendToBody(paper, answerTableXml(answerTable([{ code: v.code, answers: v.answers }]).groups, `ĐÁP ÁN — MÃ ĐỀ ${v.code}`, qWord)) : paper;
          try { await io.openAsNewDocument(finalPkg, { footerPkg: $('ex-h-footer').checked ? simplePackage(examFooterXml(v.code)) : null }); opened++; } catch (e) { await io.insertAtEnd(finalPkg); fellBack = true; }
        }
        note = fellBack ? `Word này không cho tạo tài liệu mới từ add-in: đã chèn ${versions.length - opened} đề vào cuối tài liệu hiện tại (mở ${opened} tài liệu mới).` : `Đã mở ${versions.length} tài liệu mới.`;
      } else if (target === 'append') {
        for (const v of versions) await io.insertAtEnd(decorate(v.pkg, v.code));
        note = `Đã chèn ${versions.length} đề vào cuối tài liệu.`;
      }
      const warns = [...new Set(versions.flatMap((v) => [
        ...(v.report.sharedParts.length ? [`Không trộn thứ tự câu ở: ${v.report.sharedParts.join('; ')} (có câu dùng chung dữ kiện)`] : []),
        ...(v.report.keptSections.length ? [`Giữ nguyên thứ tự câu ở: ${v.report.keptSections.join(', ')}`] : []),
        ...(v.report.pinnedQuestions.length ? [`Giữ nguyên phương án các câu: ${[...new Set(v.report.pinnedQuestions)].join(', ')}`] : []),
        ...v.report.notes]))];
      const origModel = parseBody(pkg);
      const unansweredChips = chips(unansweredQuestions(origModel, origA));
      out.innerHTML = `<p class="ok"><b>${versions.length} mã đề</b> đã tạo. ${esc(note)}</p>` + prepNote(prep) + (unknown ? `<p class="warn">${unknown} câu chưa nhận được đáp án (nhãn đúng chưa được gạch chân / tô đỏ): bảng đáp án ghi “?”.</p>${prep.changed ? '' : unansweredChips}` : '') +
        (warns.length ? `<ul class="warn">${warns.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : '') +
        `<div class="scroll"><table><tbody>${table.groups.filter((g) => g.kind === 'mc').map((g) => `<tr><td><b>${esc(g.code)}</b></td><td>${g.items.map((i) => `${i.number}${esc(i.value ?? '?')}`).join(' ')}</td></tr>`).join('')}</tbody></table></div>`;
    } catch (e) { fail(out, e); }
  });

  $('ex-key').addEventListener('click', async () => {
    const out = $('ex-shuffle-out');
    try {
      const model = parseBody((await preparedBody()).pkg);
      const answers = answersOf(model, analyze(model));
      const table = answerTable([{ code: '', answers }]);
      lastCsv = table.csv; $('ex-copy').disabled = false;
      await io.insertAtEnd(wrap(answerTableXml(table.groups, 'BẢNG ĐÁP ÁN', analyze(model).english ? 'Question' : 'Câu')));
      out.innerHTML = '<span class="ok">Đã chèn bảng đáp án vào cuối tài liệu.</span>';
    } catch (e) { fail(out, e); }
  });
  function wrap(bodyXml) {   // minimal package for body.insertOoxml
    return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
  }
  async function exportVersions() {
    const pkg = lastVersions ? lastVersions.pkg : await body();
    const list = lastVersions ? lastVersions.versions.slice() : [];
    if (!list.length) throw new Error('Chưa có mã đề nào: bấm “Tạo đề” trước (hoặc dùng “Chèn bảng đáp án đề hiện tại”).');
    if ($('ex-orig').checked) { const m = parseBody(pkg); list.unshift({ code: $('ex-origcode').value || '0000', answers: answersOf(m, analyze(m)) }); }
    return list;
  }
  $('ex-export').addEventListener('click', async () => {
    const out = $('ex-shuffle-out');
    try {
      const list = await exportVersions();
      const which = $('ex-xlsx').value === 'both' ? ['giasu', 'texcraft'] : [$('ex-xlsx').value];
      for (const t of which) {
        const blob = new Blob([answerXlsx(t, list)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = `DapAn-${t === 'giasu' ? 'GIASU.AI.VN' : 'TEXCRAFT'}.xlsx`;
        document.body.appendChild(a); a.click(); a.remove();
      }
      out.innerHTML = '<span class="ok">Đã tạo file Excel.</span> <span class="muted">Nếu Word chặn tải xuống, dùng “Sao chép bảng” rồi dán vào Excel.</span>';
    } catch (e) { fail(out, e); }
  });
  // ---- QR of the answer key (same format as giasu.ai.vn/cham-thi)
  let qrState = { groups: [], index: 0, token: 0 };
  async function showQr() {
    const my = ++qrState.token, st = $('ex-qr-status'), cv = $('ex-qr-canvas');
    st.classList.remove('bad'); st.textContent = 'Đang tạo QR và kiểm tra đọc lại…';
    try {
      const g = qrState.groups[qrState.index];
      const c = await renderQr(g.text, { vendorBase: 'vendor/', logoUrl: 'icon-80.png' });
      if (my !== qrState.token) return;
      cv.width = c.width; cv.height = c.height; cv.getContext('2d').drawImage(c, 0, 0);
      st.textContent = `QR ${qrState.index + 1}/${qrState.groups.length} · mã đề ${g.codes.join(', ')} · đã kiểm tra đọc lại đúng` + (qrState.warnings.length ? ` · ${qrState.warnings.length} cảnh báo (câu chưa có đáp án ghi X)` : '');
      $('ex-qr-prev').disabled = qrState.index === 0; $('ex-qr-next').disabled = qrState.index === qrState.groups.length - 1;
    } catch (e) { if (my === qrState.token) { st.classList.add('bad'); st.textContent = e.message; } }
  }
  $('ex-qr').addEventListener('click', async () => {
    const out = $('ex-shuffle-out');
    try {
      const list = await exportVersions();
      const { payloads, warnings } = qrPayloads(list);
      qrState = { groups: payloads, index: 0, token: qrState.token, warnings };
      $('ex-qr-panel').hidden = false;
      await showQr();
    } catch (e) { fail(out, e); }
  });
  $('ex-qr-prev').addEventListener('click', () => { qrState.index = Math.max(0, qrState.index - 1); showQr(); });
  $('ex-qr-next').addEventListener('click', () => { qrState.index = Math.min(qrState.groups.length - 1, qrState.index + 1); showQr(); });
  $('ex-qr-save').addEventListener('click', async () => downloadBlob(await canvasToPng($('ex-qr-canvas')), `QR-dap-an-${qrState.index + 1}.png`));
  $('ex-qr-insert').addEventListener('click', async () => {
    try {
      const png = await canvasToPng($('ex-qr-canvas'));
      await io.replaceSelection(makePicturePackage(png, { widthPt: 170, heightPt: 170, alt: 'QR đáp án chấm thi giasu.ai.vn', name: 'QR' }));
      $('ex-qr-status').textContent = 'Đã chèn mã QR vào Word tại con trỏ.';
    } catch (e) { fail($('ex-shuffle-out'), e); }
  });
  $('ex-tsv').addEventListener('click', async () => {
    const out = $('ex-shuffle-out');
    try {
      const list = await exportVersions();
      const t = $('ex-xlsx').value === 'both' ? 'giasu' : $('ex-xlsx').value;
      const text = answerTsv(t, list);
      try { await navigator.clipboard.writeText(text); out.innerHTML = '<span class="ok">Đã sao chép; dán vào ô A1 của Excel.</span>'; } catch { out.innerHTML = `<textarea rows="8">${esc(text)}</textarea>`; }
    } catch (e) { fail(out, e); }
  });
  $('ex-copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(lastCsv); $('ex-copy').textContent = 'Đã sao chép'; } catch { $('ex-shuffle-out').innerHTML = `<textarea rows="6">${esc(lastCsv)}</textarea>`; }
  });

  const swatch = () => {
    const t = PPTX_THEMES.find((x) => x.id === $('ex-pptx-theme').value);
    const c = { dark: '0F172A', primary: '3B82F6', accent: '4F46E5', paper: 'F8FAFC', sky: '38BDF8', ...t.colors };
    $('ex-pptx-swatch').innerHTML = ['dark', 'primary', 'accent', 'sky', 'paper'].map((k) => `<span title="${k}" style="display:inline-block;width:28px;height:18px;border-radius:4px;border:1px solid var(--line);background:#${c[k]}"></span>`).join('') + `<span class="muted" style="font-family:'${t.font}',serif;margin-left:6px">Aa Bb — Câu 1. Đúng</span>`;
  };
  $('ex-pptx-theme').addEventListener('change', swatch);
  swatch();

  $('ex-pptx-btn').addEventListener('click', async () => {
    const out = $('ex-pptx-out');
    try {
      out.innerHTML = '<span class="muted">Đang đọc tài liệu và tạo file PowerPoint…</span>';
      let pkg;
      const srcCode = $('ex-pptx-source')?.value;
      if (srcCode && srcCode !== 'current' && lastVersions) {
        const found = lastVersions.versions.find((v) => v.code === srcCode);
        pkg = found ? found.pkg : (await preparedBody()).pkg;
      } else {
        pkg = (await preparedBody()).pkg;
      }

      const model = parseBody(pkg);
      const a = analyze(model);
      const ans = answersOf(model, a);
      const scan = scanPackage(pkg);
      const title = $('ex-pptx-title').value.trim() || 'BÀI TẬP TRẮC NGHIỆM';

      const buf = buildExamPptx(model, a, ans, {
        title,
        theme: $('ex-pptx-theme')?.value || 'blue',
        scannedEquations: scan.equations
      });

      const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
      const dl = document.createElement('a');
      dl.href = URL.createObjectURL(blob);
      const fileName = `${title.replace(/[\/\\?%*:|"<>]/g, '_') || 'DeThi'}${srcCode && srcCode !== 'current' ? `-${srcCode}` : ''}.pptx`;
      dl.download = fileName;
      document.body.appendChild(dl);
      dl.click();
      dl.remove();

      out.innerHTML = `<span class="ok">Đã tạo bài trình chiếu <b>${esc(fileName)}</b> thành công!</span> <div class="muted">Bấm vào phương án A/B/C/D để hiện thông báo Đúng/Sai trực tiếp.</div>`;
    } catch (e) {
      fail(out, e);
    }
  });
}
