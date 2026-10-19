import { answerXlsx, answerTsv } from '../src/xlsx.js';
import { unansweredQuestions, parseBody, analyze, answersOf, normalize, shuffleVersion, answerTable, answerTableXml, appendToBody } from '../src/exam.js';
import { scanPackage } from '../src/ooxml.js';
import { buildExamPptx, PPTX_THEMES } from '../src/pptx.js';
import { qrPayloads, renderQr } from '../src/answer-qr.js';
import { makePicturePackage, canvasToPng, downloadBlob } from '../src/picture.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function mountExam(root, io) {
  root.innerHTML = `
  <div class="notice">Nhận dạng: <b>PHẦN I/II/III</b>, <b>Câu N.</b>, phương án <b>A. B. C. D.</b>, ý <b>a) b) c) d)</b>. Đáp án đúng được nhận qua nhãn phương án <b>gạch chân / chữ đỏ / tô nổi</b>. Mọi thao tác ghi vào tài liệu chỉ chạy khi bạn bấm nút; hãy làm trên bản sao.</div>
  <fieldset><legend>1. Phân tích đề</legend>
    <div class="btns"><button class="primary" id="ex-analyze">Phân tích tài liệu</button></div>
    <div id="ex-summary" class="muted"></div>
  </fieldset>
  <fieldset><legend>2. Chuẩn hóa câu hỏi</legend>
    <label class="field"><span>Đánh số lại câu</span>
      <select id="ex-renumber"><option value="part">theo từng phần (mỗi phần bắt đầu từ Câu 1)</option><option value="continuous">liên tục toàn đề</option><option value="">không đổi</option></select></label>
    <label class="field"><span>Căn lề phương án</span>
      <select id="ex-layout"><option value="auto">tự động (1 dòng / 2 dòng / 4 dòng theo độ dài)</option><option value="4">luôn 4 cột</option><option value="2">luôn 2 cột</option><option value="1">mỗi phương án một dòng</option><option value="false">giữ nguyên</option></select></label>
    <label><input type="checkbox" id="ex-labels" checked> nhãn A. B. C. D. in đậm, viết hoa, dấu chấm</label>
    <label><input type="checkbox" id="ex-qformat" checked> “Câu N.” cùng định dạng với câu đầu tiên (nhãn “Bài N.” được đổi thành “Câu N.”)</label>
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
    <label><input type="checkbox" id="ex-strip" checked> bỏ dấu đáp án (gạch chân/đỏ) khỏi đề trộn</label>
    <label><input type="checkbox" id="ex-withkey" checked> thêm bảng đáp án của mã đề vào cuối mỗi đề</label>
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
  const chips = (list) => (list.length ? `<div class="chips-title">Câu chưa có đáp án — bấm để chuyển tới trong Word (${list.length}):</div><div class="chips">${list.map((q) => `<button type="button" class="chip" data-p="${q.paragraph}" title="Chuyển tới ${esc(q.label)} trong Word">${esc(q.label)}</button>`).join('')}</div>` : '');
  root.addEventListener('click', async (ev) => {
    const b = ev.target.closest('.chip');
    if (!b) return;
    try { await io.selectParagraph(Number(b.dataset.p)); } catch (e) { /* not inside Word */ }
  });
  const fail = (el, e) => { el.innerHTML = `<span class="bad">Lỗi: ${esc(e.message || e)}</span>`; };

  $('ex-analyze').addEventListener('click', async () => {
    try {
      $('ex-summary').textContent = 'Đang đọc…';
      const pkg = await body();
      const model = parseBody(pkg);
      const a = analyze(model);
      const ans = answersOf(model, a);
      const lines = a.parts.map((p) => {
        const flagged = p.questions.filter((q) => q.flags.length).length;
        const marked = ans.filter((x) => x.part === p.title && x.value).length;
        return `<li><b>${esc(p.title.slice(0, 70) || '(đầu đề)')}</b> — ${p.kind === 'mc' ? 'nhiều phương án' : p.kind === 'tf' ? 'đúng/sai' : p.kind === 'short' ? 'trả lời ngắn' : 'khác'}: ${p.questions.length} câu` +
          `${p.kind === 'mc' ? `, nhận đáp án ${marked}/${p.questions.length}` : ''}${flagged ? `, <span class="warn">${flagged} câu cần chú ý</span>` : ''}</li>`;
      });
      $('ex-summary').innerHTML = a.parts.length ? `<ul>${lines.join('')}</ul>${chips(unansweredQuestions(model, a))}` : '<span class="warn">Không thấy “Câu N.” nào.</span>';
    } catch (e) { fail($('ex-summary'), e); }
  });

  $('ex-normalize').addEventListener('click', async () => {
    if (!$('ex-backup1').checked) { $('ex-norm-out').innerHTML = '<span class="warn">Hãy lưu một bản sao tài liệu rồi tick ô xác nhận.</span>'; return; }
    try {
      const layout = $('ex-layout').value;
      const r = normalize(await body(), { renumber: $('ex-renumber').value || false, labels: $('ex-labels').checked, questionFormat: $('ex-qformat').checked,
        keepNext: $('ex-keep').checked, layout: layout === 'false' ? false : layout });
      await io.replaceBody(r.pkg);
      const rep = r.report;
      $('ex-norm-out').innerHTML = `<span class="ok">Đã chuẩn hóa ${rep.questions} câu</span>: đánh số lại ${rep.renumbered}, căn lại phương án ${rep.relaid}.` +
        (rep.skipped.length ? `<ul class="warn">${rep.skipped.slice(0, 8).map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : '') +
        `<div class="muted">Hoàn tác bằng Ctrl/Cmd+Z (Word coi đây là một thao tác thay thế toàn bộ nội dung).</div>`;
    } catch (e) { fail($('ex-norm-out'), e); }
  });

  const options = () => ({ shuffleQuestions: $('ex-shq').checked, shuffleOptions: $('ex-sho').checked, shuffleStatements: $('ex-shs').checked,
    stripMarks: $('ex-strip').checked, renumber: $('ex-renumber').value || 'part', layout: $('ex-layout').value === 'false' ? 'auto' : $('ex-layout').value });

  $('ex-shuffle').addEventListener('click', async () => {
    const out = $('ex-shuffle-out'), bar = $('ex-progress');
    try {
      const pkg = await body();
      const n = Number($('ex-n').value), first = Number($('ex-code').value), seed = Number($('ex-seed').value);
      const target = $('ex-target').value;
      const versions = [];
      for (let i = 0; i < n; i++) {
        const code = String(first + i);
        const r = shuffleVersion(pkg, { ...options(), seed: seed + i * 7919, code });
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
          const finalPkg = $('ex-withkey').checked ? appendToBody(v.pkg, answerTableXml(answerTable([{ code: v.code, answers: v.answers }]).groups, `ĐÁP ÁN — MÃ ĐỀ ${v.code}`)) : v.pkg;
          try { await io.openAsNewDocument(finalPkg); opened++; } catch (e) { await io.insertAtEnd(finalPkg); fellBack = true; }
        }
        note = fellBack ? `Word này không cho tạo tài liệu mới từ add-in: đã chèn ${versions.length - opened} đề vào cuối tài liệu hiện tại (mở ${opened} tài liệu mới).` : `Đã mở ${versions.length} tài liệu mới.`;
      } else if (target === 'append') {
        for (const v of versions) await io.insertAtEnd(v.pkg);
        note = `Đã chèn ${versions.length} đề vào cuối tài liệu.`;
      }
      const warns = [...new Set(versions.flatMap((v) => [
        ...(v.report.sharedParts.length ? [`Không trộn thứ tự câu ở: ${v.report.sharedParts.join('; ')} (có câu dùng chung dữ kiện)`] : []),
        ...(v.report.pinnedQuestions.length ? [`Giữ nguyên phương án các câu: ${[...new Set(v.report.pinnedQuestions)].join(', ')}`] : []),
        ...v.report.notes]))];
      const origModel = parseBody(pkg);
      const unansweredChips = chips(unansweredQuestions(origModel, analyze(origModel)));
      out.innerHTML = `<p class="ok"><b>${versions.length} mã đề</b> đã tạo. ${esc(note)}</p>` + (unknown ? `<p class="warn">${unknown} câu chưa nhận được đáp án (nhãn đúng chưa được gạch chân / tô đỏ): bảng đáp án ghi “?”.</p>${unansweredChips}` : '') +
        (warns.length ? `<ul class="warn">${warns.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : '') +
        `<div class="scroll"><table><tbody>${table.groups.filter((g) => g.kind === 'mc').map((g) => `<tr><td><b>${esc(g.code)}</b></td><td>${g.items.map((i) => `${i.number}${esc(i.value ?? '?')}`).join(' ')}</td></tr>`).join('')}</tbody></table></div>`;
    } catch (e) { fail(out, e); }
  });

  $('ex-key').addEventListener('click', async () => {
    const out = $('ex-shuffle-out');
    try {
      const pkg = await body();
      const model = parseBody(pkg);
      const answers = answersOf(model, analyze(model));
      const table = answerTable([{ code: '', answers }]);
      lastCsv = table.csv; $('ex-copy').disabled = false;
      await io.insertAtEnd(wrap(answerTableXml(table.groups)));
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
        pkg = found ? found.pkg : await body();
      } else {
        pkg = await body();
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
