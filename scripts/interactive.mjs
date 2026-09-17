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
export function renderQuiz(text,inline){
 const q=YAML.parse(text);
 if(!q||typeof q.question!=='string'||!q.question.trim())throw Error('quiz: thiếu question');
 if(!['choice','text'].includes(q.type))throw Error('quiz: type phải là choice hoặc text');
 if(typeof q.explanation!=='string'||!q.explanation.trim())throw Error('quiz: thiếu explanation');
 if(q.type==='choice'&&(!Array.isArray(q.options)||q.options.length<2||q.options.some(x=>typeof x!=='string'||!x.trim())||!Number.isInteger(q.answer)||q.answer<1||q.answer>q.options.length))throw Error('quiz: options hoặc answer không hợp lệ (answer bắt đầu từ 1)');
 if(q.type==='text'&&(!Array.isArray(q.answers)||!q.answers.length||q.answers.some(x=>typeof x!=='string'||!x.trim())))throw Error('quiz: answers phải là danh sách chuỗi không rỗng');
 const answers=q.type==='choice'?[String(q.answer)]:q.answers;
 const fields=q.type==='choice'?q.options.map((o,i)=>`<label class="quiz-option"><input type="radio" name="answer" value="${i+1}"><span>${inline(o)}</span></label>`).join(''):'<label class="quiz-text">Câu trả lời của bạn<input type="text" name="answer" autocomplete="off" placeholder="Nhập đáp án…"></label>';
 return `<form class="quiz" data-answers="${escapeHTML(JSON.stringify(answers))}"><fieldset><legend>${inline(q.question)}</legend>${fields}</fieldset><div class="quiz-actions"><button class="primary" type="submit">Kiểm tra đáp án</button><button class="quiz-reset" type="reset">Làm lại</button></div><p class="quiz-feedback" role="status" aria-live="polite"></p><div class="quiz-explanation" hidden><strong>Giải thích</strong><div>${inline(q.explanation)}</div></div><noscript>Bật JavaScript để làm bài và kiểm tra đáp án.</noscript></form>`;
}
