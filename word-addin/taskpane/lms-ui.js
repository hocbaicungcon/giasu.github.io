// "LMS" tab: export the multiple-choice questions of the document as one interactive HTML page.
import { extractQuiz, buildQuizHtml, DEFAULT_LMS } from '../src/lms.js';
import { downloadBlob } from '../src/picture.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sw = (id, label, checked) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? ' checked' : ''}><span class="switch-track"></span><span>${label}</span></label>`;

export function mountLms(root, io) {
  root.innerHTML = `
  <div class="notice">Xuất các câu trắc nghiệm của tài liệu thành <b>một file HTML tương tác</b>: học sinh mở bằng trình duyệt (điện thoại hay máy tính), chọn đáp án và nhận kết quả ngay; có thể nhúng hoặc tải lên LMS (Moodle, Google Sites, Classroom…). Công thức được hiển thị bằng KaTeX nên cần có mạng khi mở. Đáp án đúng lấy từ nhãn <b>gạch chân / chữ đỏ</b> như tab Đề thi.</div>
  <fieldset><legend>1. Đọc câu hỏi</legend>
    <div class="btns"><button class="primary" id="lms-read">Đọc câu hỏi từ tài liệu</button></div>
    <div id="lms-summary" class="muted"></div>
  </fieldset>
  <fieldset><legend>2. Tùy chọn trang bài làm</legend>
    <label class="field"><span>Tiêu đề</span><input type="text" id="lms-title" value="${esc(DEFAULT_LMS.title)}"></label>
    <label class="field"><span>Chế độ</span><select id="lms-mode"><option value="practice">Luyện tập: báo đúng/sai ngay sau mỗi câu</option><option value="test">Kiểm tra: nộp bài rồi mới chấm điểm</option></select></label>
    <label class="field"><span>Thời gian làm bài (phút, 0 = không giới hạn)</span><input type="number" id="lms-min" value="0" min="0" max="300"></label>
    ${sw('lms-shq', 'Trộn thứ tự câu trong từng phần', false)}
    ${sw('lms-sho', 'Trộn thứ tự phương án A–D (câu nhiều lựa chọn)', false)}
    ${sw('lms-name', 'Hỏi họ tên học sinh trước khi làm', true)}
    ${sw('lms-key', 'Hiện đáp án đúng sau khi chấm', true)}
    <div class="hint">Đáp án nằm trong file (xem được bằng “Xem mã nguồn”), nên phù hợp luyện tập và kiểm tra trong lớp; không dùng cho thi chính thức cần bảo mật.</div>
  </fieldset>
  <fieldset><legend>3. Xuất</legend>
    <div class="btns two"><button class="secondary" id="lms-preview" disabled>Xem thử</button><button class="primary" id="lms-save" disabled>Tải file HTML</button></div>
    <div id="lms-out"></div>
    <iframe id="lms-frame" title="Xem thử" sandbox="allow-scripts allow-modals" hidden style="width:100%;height:480px;border:1px solid var(--line);border-radius:8px;margin-top:8px;background:#fff"></iframe>
  </fieldset>`;
  const $ = (id) => root.querySelector('#' + id);
  let quiz = null;
  const options = () => ({ title: $('lms-title').value.trim() || DEFAULT_LMS.title, mode: $('lms-mode').value, minutes: $('lms-min').value, shuffleQ: $('lms-shq').checked, shuffleO: $('lms-sho').checked, askName: $('lms-name').checked, showKey: $('lms-key').checked });
  const fail = (e) => { $('lms-out').innerHTML = `<span class="bad">Lỗi: ${esc(e.message || e)}</span>`; };

  async function read() {
    $('lms-summary').textContent = 'Đang đọc…';
    try {
      const { pkg } = await io.readBody();
      quiz = extractQuiz(pkg);
      const n = quiz.questions.length, kinds = { mc: 0, tf: 0, short: 0 };
      quiz.questions.forEach((q) => { kinds[q.kind]++; });
      if (!n) { $('lms-summary').innerHTML = '<span class="warn">Không thấy “Câu N.” nào trong tài liệu.</span>'; ['lms-preview', 'lms-save'].forEach((id) => { $(id).disabled = true; }); return; }
      const w = quiz.warnings;
      $('lms-summary').innerHTML = `<p><b class="ok">${n} câu</b>: ${kinds.mc} nhiều phương án, ${kinds.tf} đúng/sai, ${kinds.short} trả lời ngắn.</p>` +
        (w.length ? `<p class="warn">${w.length} lưu ý (các câu này không tính điểm hoặc cần kiểm tra):</p><ul>${w.slice(0, 8).map((x) => `<li>${esc(x)}</li>`).join('')}${w.length > 8 ? `<li>… và ${w.length - 8} lưu ý khác</li>` : ''}</ul>` : '');
      ['lms-preview', 'lms-save'].forEach((id) => { $(id).disabled = false; });
    } catch (e) { $('lms-summary').textContent = ''; fail(e); }
  }
  $('lms-read').addEventListener('click', read);
  $('lms-preview').addEventListener('click', () => {
    if (!quiz) return;
    const f = $('lms-frame'); f.hidden = false; f.srcdoc = buildQuizHtml(quiz, options());
    f.scrollIntoView({ block: 'nearest' });
  });
  $('lms-save').addEventListener('click', () => {
    if (!quiz) return;
    try {
      const o = options(), name = `${o.title.replace(/[\/\\?%*:|"<>]/g, '_') || 'BaiTracNghiem'}.html`;
      downloadBlob(new TextEncoder().encode(buildQuizHtml(quiz, o)), name, 'text/html');
      $('lms-out').innerHTML = `<span class="ok">Đã tạo <b>${esc(name)}</b>.</span> <span class="muted">Mở bằng trình duyệt hoặc tải lên LMS.</span>`;
    } catch (e) { fail(e); }
  });
}
