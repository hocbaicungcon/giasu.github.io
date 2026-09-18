import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {renderExamCatalog,languages} from './exam-catalog.mjs';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function buildExams(imported,out,shell,markdown){
 const exams=imported.map(p=>p.exam).filter(e=>e.questions.length);
 fs.mkdirSync(path.join(out,'de-kiem-tra'),{recursive:true});
 for(const e of exams){
  const rendered={...e,questions:e.questions.map(q=>({...q,question:markdown(q.question),options:q.options.map(o=>markdown(o)),solution:markdown(q.solution)}))};
  rendered.version=createHash('sha256').update(JSON.stringify(rendered)).digest('hex').slice(0,16);
  const selfReview=e.mode==='self-review';
  const missing=e.questions.filter(q=>q.answer===null).length;
  const body=`<main id="main" class="wrap exam-wrap"><a class="back" href="./">← Danh sách đề kiểm tra</a><h1>${esc(e.title)}</h1><p>${e.questions.length} câu · ${e.duration} phút · ${esc(e.category)}${e.grade?` · Lớp ${e.grade}`:''}</p><p>${esc([e.competition,e.level,e.year,languages[e.language]].filter(Boolean).join(' · '))}</p><p class="exam-policy">${selfReview?'Tự luyện chứng minh: làm bài trên giấy hoặc ghi nháp bên dưới, sau đó đối chiếu lời giải. Không chấm điểm tự động.':'Tự luyện: mỗi câu có trọng số bằng nhau; câu đúng/sai tính theo tỉ lệ ý đúng. Tổng điểm quy đổi về thang 10.'}</p>${!selfReview&&missing?`<p class="exam-warning">Đề còn ${missing} câu chưa có đáp án. Bạn vẫn có thể làm bài, nhưng chưa có tổng điểm. Các câu thiếu đáp án sẽ ghi “Chưa có đáp án”.</p>`:''}<section id="exam-start" class="quiz"><h2>Sẵn sàng làm bài?</h2><p>Thời gian bắt đầu khi bạn bấm nút bên dưới. Bài đang làm được lưu trên trình duyệt này.</p><button class="primary" id="start-exam">Bắt đầu làm bài</button></section><p id="storage-warning" role="status" hidden>Trình duyệt không cho phép lưu bài. Đừng đóng hoặc tải lại trang khi đang làm.</p><section id="exam-session" hidden><div class="exam-toolbar"><strong id="exam-timer" role="timer" aria-label="Thời gian còn lại"></strong><span id="exam-progress"></span><button class="primary" id="submit-exam">${selfReview?'Kết thúc và xem lời giải':'Nộp bài'}</button></div><nav id="exam-nav" aria-label="Chuyển nhanh đến câu hỏi"></nav><div id="exam-questions"></div></section><section id="exam-result" class="quiz" hidden tabindex="-1"><h2>${selfReview?'Đối chiếu lời giải':'Kết quả bài làm'}</h2><p id="score" role="status"></p><p id="elapsed"></p><button id="restart-exam" class="primary">Làm lại đề</button><a class="back" href="../bai-viet/${e.slug}.html">Xem bản đề</a></section><noscript>Bật JavaScript để làm bài kiểm tra.</noscript></main><script type="application/json" id="exam-data">${JSON.stringify(rendered).replace(/</g,'\\u003c')}</script><script type="module" src="../assets/exam.js"></script>`;
  fs.writeFileSync(path.join(out,'de-kiem-tra',e.slug+'.html'),shell(e.title,'Làm đề kiểm tra trực tuyến và xem lời giải.',body,'../'));
 }
 const body=renderExamCatalog(exams);
 fs.writeFileSync(path.join(out,'de-kiem-tra/index.html'),shell('Đề kiểm tra','Kho đề tự luyện theo môn học và lớp.',body,'../'));
}
