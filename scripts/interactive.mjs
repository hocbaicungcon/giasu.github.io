import {renderExtraGeometry} from './geometry.mjs';
/* credit: giasu.ai.vn */
import YAML from 'yaml';
export const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function youtubeId(value) {
 if(typeof value!=='string')throw Error('youtube: cần URL hoặc ID video');
 if(/^[\w-]{11}$/.test(value))return value;
 let url;try{url=new URL(value);}catch{throw Error('youtube: URL không hợp lệ');}
 if(url.protocol!=='https:')throw Error('youtube: cần URL HTTPS');
 let id;
 if(url.hostname==='youtu.be')id=url.pathname.slice(1);
 else if(['youtube.com','www.youtube.com','m.youtube.com','www.youtube-nocookie.com'].includes(url.hostname))id=url.pathname==='/watch'?url.searchParams.get('v'):/^\/(?:embed|shorts)\/([\w-]{11})\/?$/.exec(url.pathname)?.[1];
 if(!id||!/^[\w-]{11}$/.test(id))throw Error('youtube: chỉ chấp nhận video YouTube hợp lệ');
 return id;
}
export function renderVideo(text){
 const data=YAML.parse(text);if(!data||typeof data!=='object')throw Error('youtube: cần url và title');
 const id=youtubeId(data.url);if(typeof data.title!=='string'||!data.title.trim())throw Error('youtube: thiếu title');
 return `<figure class="lesson-video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${escapeHTML(data.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><figcaption>${escapeHTML(data.title)} · <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">Xem trên YouTube</a></figcaption></figure>`;
}
export function normalizeQuizMath(text){
 return text.replace(/(\$\$[\s\S]*?\$\$|\$(?:\\.|[^$\n])*\$|`[^`]*`)|(-?\d+(?:[.,]\d+)?\s*\^\s*\\circ)/g,(match,protectedPart,degrees)=>protectedPart||`$${degrees}$`);
}
function renderQuestion(q,inline){
 const format=value=>inline(normalizeQuizMath(value));
 if(!q||typeof q.question!=='string'||!q.question.trim())throw Error('quiz: thiếu question');
 if(!['choice','text'].includes(q.type))throw Error('quiz: type phải là choice hoặc text');
 if(typeof q.explanation!=='string'||!q.explanation.trim())throw Error('quiz: thiếu explanation');
 if(q.type==='choice'&&(!Array.isArray(q.options)||q.options.length<2||q.options.some(x=>typeof x!=='string'||!x.trim())||!Number.isInteger(q.answer)||q.answer<1||q.answer>q.options.length))throw Error('quiz: options hoặc answer không hợp lệ (answer bắt đầu từ 1)');
 if(q.hint!==undefined&&(typeof q.hint!=='string'||!q.hint.trim()))throw Error('quiz: hint phải là chuỗi không rỗng');
 if(q.type==='text'&&(!Array.isArray(q.answers)||!q.answers.length||q.answers.some(x=>typeof x!=='string'||!x.trim())))throw Error('quiz: answers phải là danh sách chuỗi không rỗng');
 const answers=q.type==='choice'?[String(q.answer)]:q.answers;
 const fields=q.type==='choice'?q.options.map((o,i)=>`<label class="quiz-option"><input type="radio" name="answer" value="${i+1}"><span>${format(o)}</span></label>`).join(''):'<label class="quiz-text">Câu trả lời của bạn<input type="text" name="answer" autocomplete="off" placeholder="Nhập đáp án…"></label>';
 return `<form class="quiz" data-answers="${escapeHTML(JSON.stringify(answers))}"><fieldset><legend>${format(q.question)}</legend>${fields}</fieldset><div class="quiz-actions"><button class="primary" type="submit">Kiểm tra đáp án</button><button class="quiz-reset" type="reset">Làm lại</button><button class="quiz-show-solution" type="button" hidden>Xem lời giải</button></div><p class="quiz-feedback" role="status" aria-live="polite"></p>${q.hint?`<details class="quiz-hint"><summary>Gợi ý</summary><div>${format(q.hint)}</div></details>`:''}<div class="quiz-explanation" hidden><strong>Giải thích</strong><div>${format(q.explanation)}</div></div><noscript>Bật JavaScript để làm bài và kiểm tra đáp án.</noscript></form>`;
}


// Options that point at other options or at "none" must keep their position when shuffled.
const positionalOption=/^\s*(?:cả|tất cả|không có|không (?:phải|đáp án)|đáp án|các đáp án)\b/i;
function seeded(text){let h=2166136261;for(const c of text){h^=c.codePointAt(0);h=Math.imul(h,16777619);}return()=>{h=Math.imul(h^(h>>>15),h|1);h^=h+Math.imul(h^(h>>>7),h|61);return((h^(h>>>14))>>>0)/4294967296;};}
export function shuffleQuestion(q){
 if(q.options.some(o=>positionalOption.test(o)))return q;
 const order=q.options.map((_,i)=>i),random=seeded(q.question);
 for(let i=order.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
 return {...q,options:order.map(i=>q.options[i]),answer:order.indexOf(q.answer)};
}
// Several questions in one fence: {title, questions:[{question, options, answer, hint, explanation}]}.
// `answer` is the 0-based index of the right option, as written by the authors of these sets.
function renderQuizSet(data,inline){
 const total=data.questions.length;
 if(!total)throw Error('quiz: questions không được rỗng');
 if(data.title!==undefined&&(typeof data.title!=='string'||!data.title.trim()))throw Error('quiz: title phải là chuỗi không rỗng');
 const forms=data.questions.map((raw,index)=>{
  const where=`quiz: câu ${index+1}/${total}`;
  if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error(`${where} không hợp lệ`);
  const q={type:'choice',...raw};
  if(q.type!=='choice')throw Error(`${where}: bộ câu hỏi chỉ hỗ trợ type choice`);
  if(!Array.isArray(q.options)||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.options.length)throw Error(`${where}: answer phải là vị trí từ 0 của một lựa chọn`);
  const shuffled=shuffleQuestion(q);
  try{return `<p class="quiz-set-count">Câu ${index+1}/${total}</p>${renderQuestion({...shuffled,answer:shuffled.answer+1},inline)}`;}
  catch(error){throw Error(`${where}: ${error.message.replace(/^quiz: /,'')}`);}
 }).join('');
 const heading=data.title?`<h3 class="quiz-set-title">${inline(normalizeQuizMath(data.title))}</h3>`:'';
 return `<section class="quiz-set"${data.title?` aria-label="${escapeHTML(data.title)}"`:''}>${heading}${forms}</section>`;
}
export function renderQuiz(text,inline){
 const data=YAML.parse(text);
 return Array.isArray(data?.questions)?renderQuizSet(data,inline):renderQuestion(data,inline);
}


// A reusable, dependency-free geometry activity for Markdown lessons.
export function renderGeometry(text){
 const extra=renderExtraGeometry(text);if(extra)return extra;
 const data=YAML.parse(text);
 if(data?.type!=='triangle-angles')throw Error('geometry: type chưa được hỗ trợ');
 return `<section class="geometry-lab" data-geometry="triangle-angles" aria-label="Thí nghiệm góc tam giác">
 <div class="geometry-intro"><span class="geometry-kicker">THỬ • QUAN SÁT • GIẢI THÍCH</span><h3>Ba góc thay đổi. Tổng có thay đổi?</h3><p>Kéo điểm A hoặc dùng các thanh trượt. Quan sát ba góc, rồi bật đường song song để tìm lời giải.</p></div>
 <svg class="geometry-canvas" viewBox="0 0 600 340" role="img" aria-label="Tam giác ABC với ba góc có màu riêng"><title>Tam giác ABC: kéo đỉnh A để thay đổi hình</title></svg>
 <div class="geometry-readouts"><span class="angle-a">A = <output data-angle="a"></output></span><span class="angle-b">B = <output data-angle="b"></output></span><span class="angle-c">C = <output data-angle="c"></output></span><strong>Tổng = 180°</strong></div>
 <div class="geometry-controls"><label>Vị trí ngang của A<input data-coordinate="x" type="range" min="100" max="470" value="280"></label><label>Độ cao của A<input data-coordinate="y" type="range" min="65" max="220" value="95"></label></div>
 <div class="geometry-actions"><button type="button" data-shape="acute">Tam giác nhọn</button><button type="button" data-shape="right">Tam giác vuông</button><button type="button" data-shape="obtuse">Tam giác tù</button><button type="button" data-proof aria-pressed="false">Xem chứng minh</button><button type="button" data-reset>Đặt lại</button></div>
 <p class="geometry-observation" role="status" aria-live="polite"></p><div class="geometry-proof" hidden><p data-proof-text></p><button type="button" data-next>Bước tiếp theo →</button></div>
 <noscript>Ba góc của tam giác luôn có tổng bằng 180°. Bật JavaScript để thay đổi hình và xem chứng minh.</noscript></section>`;
}
