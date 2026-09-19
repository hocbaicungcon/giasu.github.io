import {gradeExam} from './exam-core.js';
const exam=JSON.parse(document.getElementById('exam-data').textContent);
const $=id=>document.getElementById(id), key=`giasu-exam:${exam.slug}:${exam.version}`;
let state=null,clock;
try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&Number.isFinite(saved.started)&&saved.deadline===saved.started+exam.duration*60000&&saved.answers&&typeof saved.answers==='object'&&!Array.isArray(saved.answers))state=saved;}catch{}
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{$('storage-warning').hidden=false;}}
function input(type,name,value){const el=document.createElement('input');el.type=type;el.name=name;el.value=value;return el;}
function answered(q){if(q.kind==='proof'&&state.completed?.[q.id])return true;const a=state.answers[q.id];return q.kind==='truefalse'?Array.isArray(a)&&a.filter(v=>v==='true'||v==='false').length===q.options.length:typeof a==='string'&&a.trim()!=='';}
function progress(){const n=exam.questions.filter(answered).length;$('exam-progress').textContent=`Đã trả lời ${n}/${exam.questions.length} câu`;exam.questions.forEach(q=>$('jump-'+q.id).classList.toggle('answered',answered(q)));}
function render(){
 $('exam-start').hidden=true;$('exam-session').hidden=false;$('exam-questions').replaceChildren();$('exam-nav').replaceChildren();
 let section='';let navSection='';let sectionNav;
 for(const [index,q]of exam.questions.entries()){
  if(section!==q.section){section=q.section;const h=document.createElement('h2');h.textContent=section;$('exam-questions').append(h);}
  if(navSection!==q.section){navSection=q.section;sectionNav=document.createElement('div');sectionNav.className='exam-nav-group';const navTitle=document.createElement('strong');navTitle.textContent=q.section;sectionNav.append(navTitle);$('exam-nav').append(sectionNav);}
  const card=document.createElement('section');card.id=q.id;card.className='exam-question prose';
  const title=document.createElement('h3');title.textContent=q.label;card.append(title);
  const content=document.createElement('div');content.innerHTML=q.question;card.append(content);
  const field=document.createElement('fieldset');const legend=document.createElement('legend');legend.textContent=q.kind==='choice'?'Chọn một đáp án':q.kind==='truefalse'?'Chọn đúng hoặc sai cho từng ý':'Nhập đáp án';field.append(legend);
  if(q.kind==='proof'){
   legend.textContent='Bài tự luyện chứng minh';
   q.options.forEach(o=>{const text=document.createElement('div');text.innerHTML=o;field.append(text);});
   const label=document.createElement('label');label.textContent='Ghi chú hoặc hướng giải (có thể làm trên giấy)';
   const text=document.createElement('textarea');text.name=q.id;text.rows=6;text.value=state.answers[q.id]||'';label.append(text);field.append(label);
   const done=document.createElement('label');done.className='proof-done';const check=input('checkbox',q.id+'-done','done');check.dataset.done='true';check.checked=Boolean(state.completed?.[q.id]);done.append(check,document.createTextNode('Đã hoàn thành bài trên giấy'));field.append(done);
  }
  else if(q.kind==='choice')q.options.forEach((o,i)=>{const label=document.createElement('label');label.className='quiz-option';const radio=input('radio',q.id,String(i));radio.checked=state.answers[q.id]===String(i);const text=document.createElement('span');text.innerHTML=o;label.append(radio,text);field.append(label);});
  else if(q.kind==='truefalse')q.options.forEach((o,i)=>{const row=document.createElement('fieldset');row.className='truefalse-row';const statement=document.createElement('legend');statement.innerHTML=`${String.fromCharCode(97+i)}) ${o}`;row.append(statement);for(const [labelText,value]of [['Đúng','true'],['Sai','false']]){const label=document.createElement('label');const radio=input('radio',q.id+'-'+i,value);radio.dataset.part=i;radio.checked=state.answers[q.id]?.[i]===value;label.append(radio,document.createTextNode(labelText));row.append(label);}field.append(row);});
  else {const label=document.createElement('label');label.textContent='Câu trả lời của bạn';const text=input('text',q.id,state.answers[q.id]||'');text.autocomplete='off';label.append(text);field.append(label);}
  field.addEventListener('input',event=>{if(state.finished)return;if(Date.now()>=state.deadline){finish(true);return;}if(event.target.dataset.done){state.completed??={};state.completed[q.id]=event.target.checked;}else if(q.kind==='truefalse'){const values=state.answers[q.id]||Array(q.options.length).fill('');values[Number(event.target.dataset.part)]=event.target.value;state.answers[q.id]=values;}else state.answers[q.id]=event.target.value;save();progress();});
  card.append(field);const review=document.createElement('div');review.className='exam-review';review.hidden=true;card.append(review);$('exam-questions').append(card);
  const link=document.createElement('a');link.href='#'+q.id;link.id='jump-'+q.id;link.textContent=q.label.replace(/^Câu\s+/i,'');link.setAttribute('aria-label',`${q.section} — ${q.label}`);sectionNav.append(link);
 }
 progress();if(state.finished)showResult();else{tick();if(!state.finished)clock=setInterval(tick,1000);}
}
function tick(){const seconds=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));$('exam-timer').textContent=`${Math.floor(seconds/60).toString().padStart(2,'0')}:${(seconds%60).toString().padStart(2,'0')}`;if(exam.duration>15&&seconds<=15*60&&seconds>0){const warning=$('exam-time-warning');warning.hidden=false;if(!state.timeWarningShown){state.timeWarningShown=true;save();warning.scrollIntoView({block:'nearest',behavior:'smooth'});}}if(!seconds)finish(true);}
function finish(expired=false){if(!state||state.finished)return;if(!expired){const blank=exam.questions.filter(q=>!answered(q)).length;if(!confirm(blank?`Còn ${blank} câu chưa hoàn thành. Bạn muốn nộp bài?`:'Bạn muốn nộp bài và xem kết quả?'))return;}state.finished=expired?state.deadline:Date.now();state.expired=expired;save();clearInterval(clock);showResult();$('exam-result').focus();}
function confetti(){
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const canvas=document.createElement('canvas');canvas.className='confetti-canvas';document.body.append(canvas);
 const ctx=canvas.getContext('2d'),colors=['#42caea','#fd827b','#f6c978','#75c7a5','#8f9ee8'],pieces=[];
 const resize=()=>{canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);};resize();addEventListener('resize',resize,{once:true});
 for(let i=0;i<110;i++)pieces.push({x:innerWidth/2+(Math.random()-.5)*160,y:innerHeight*.22+(Math.random()-.5)*45,vx:(Math.random()-.5)*8,vy:Math.random()*-8-3,w:Math.random()*8+5,h:Math.random()*13+7,r:Math.random()*Math.PI,c:colors[i%colors.length]});
 const started=performance.now();function frame(now){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of pieces){p.x+=p.vx;p.vy+=.18;p.y+=p.vy;p.r+=.12;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();}if(now-started<3600)requestAnimationFrame(frame);else canvas.remove();}requestAnimationFrame(frame);
}
function showResult(){
 clearInterval(clock);const result=gradeExam(exam.questions,state.answers,exam);
 $('exam-result').hidden=false;$('submit-exam').hidden=true;$('exam-timer').textContent=state.expired?'Đã hết giờ':'Đã nộp bài';if(!state.expired&&!state.confettiShown){state.confettiShown=true;save();confetti();}
 $('score').textContent=exam.mode==='self-review'?'Đã kết thúc buổi tự luyện. Đối chiếu bài làm với lời giải tham khảo bên dưới; không có điểm tự động.':result.complete?`Điểm: ${result.score.toFixed(2)}/10`:'Đề chưa đủ đáp án nên chưa tính tổng điểm. Xem phản hồi từng câu bên dưới.';
 const seconds=Math.max(0,Math.min(exam.duration*60,Math.floor((state.finished-state.started)/1000)));$('elapsed').textContent=`Thời gian làm bài: ${Math.floor(seconds/60)} phút ${seconds%60} giây.`;
 exam.questions.forEach((q,i)=>{const card=$(q.id);card.querySelectorAll('input,textarea').forEach(el=>el.disabled=true);const review=card.querySelector('.exam-review');review.hidden=false;review.replaceChildren();const status=document.createElement('strong');status.textContent=q.kind==='proof'?(q.solution?'Tự đối chiếu lời giải':'Chưa có lời giải tham khảo'):result.scores[i]===null?'Chưa có đáp án':result.scores[i]===1?'Chính xác':result.scores[i]===0?'Chưa đúng hoặc chưa trả lời':`Đúng ${Math.round(result.scores[i]*q.options.length)}/${q.options.length} ý`;review.append(status);
 if(result.weighted&&result.points[i]!==null){const points=document.createElement('span');points.textContent=' · '+result.points[i].toLocaleString('vi-VN')+' điểm';review.append(points);}
 if(q.answer!==null){const answer=document.createElement('p');answer.textContent='Đáp án: '+(q.kind==='choice'?String.fromCharCode(65+Number(q.answer)):q.kind==='truefalse'?q.answer.map((a,j)=>`${String.fromCharCode(97+j)}) ${a?'Đúng':'Sai'}`).join('; '):q.answer.join(' hoặc '));review.append(answer);}
 if(q.solution){const solution=document.createElement('div');solution.innerHTML=q.solution;review.append(solution);}
 });
}
$('start-exam').onclick=()=>{const now=Date.now();state={started:now,deadline:now+exam.duration*60000,answers:{},finished:null};save();render();};
$('submit-exam').onclick=()=>finish();
$('restart-exam').onclick=()=>{if(!confirm('Làm lại sẽ xóa bài làm đang lưu trên trình duyệt này. Tiếp tục?'))return;clearInterval(clock);try{localStorage.removeItem(key);}catch{}state=null;$('exam-result').hidden=true;$('exam-session').hidden=true;$('exam-start').hidden=false;$('submit-exam').hidden=false;$('start-exam').focus();};
if(state)render();
document.addEventListener('visibilitychange',()=>{if(state&&!state.finished&&!document.hidden)tick();});
