import {loadData,normalizeAnswer,choose} from './fun-data.js';
const player=document.querySelector('.fun-player');
const kind=player.dataset.kind, content=player.querySelector('.fun-content'), next=player.querySelector('.fun-next'), error=player.querySelector('.fun-error'), count=player.querySelector('.fun-count'), filters=[...player.querySelectorAll('[data-filter]')], form=player.querySelector('form'), result=player.querySelector('.riddle-result');
let index, current, record;const cache=new Map();
function element(tag,text,className){const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;}
async function show(){
 next.disabled=true;filters.forEach(x=>x.disabled=true);if(form)form.querySelector('button').disabled=true;
 content.setAttribute('aria-busy','true');error.hidden=true;
 try{
  index??=await loadData(`${kind}-index`);
  for(const filter of filters)if(filter.options.length===1){for(const value of [...new Set(index.map(x=>x[filter.dataset.filter]))].filter(Boolean).sort((a,b)=>a.localeCompare(b))){filter.add(new Option(value,value));}}
  const matches=index.filter(x=>filters.every(f=>!f.value||x[f.dataset.filter]===f.value));
  count.textContent=`${matches.length.toLocaleString('vi')} nội dung phù hợp`;
  if(result){result.hidden=true;result.replaceChildren();form.reset();}
  record=null;
  if(!matches.length){content.replaceChildren(element('p','Chưa có nội dung kết hợp các bộ lọc này. Hãy chọn lại bộ lọc.'));return;}
  const selected=choose(matches,current);
  if(!cache.has(selected.chunk))cache.set(selected.chunk,await loadData(`${kind}-${selected.chunk}`));
  record=cache.get(selected.chunk)[selected.offset];current=selected;
  content.replaceChildren();content.lang='en';
  if(record.category)content.append(element('span',record.category,'fun-label'));
  if(record.title)content.append(element('h2',record.title));
  content.append(element(kind==='quotes'?'blockquote':'p',record.body,'fun-text'));
  if(record.author)content.append(element('p',`— ${record.author}`,'fun-author'));
 }catch(e){error.textContent=e.message;error.hidden=false;}
 finally{content.setAttribute('aria-busy','false');next.disabled=false;filters.forEach(x=>x.disabled=false);if(form)form.querySelector('button').disabled=!record;}
}
next.addEventListener('click',show);filters.forEach(f=>f.addEventListener('change',show));
form?.addEventListener('submit',event=>{
 event.preventDefault();if(!record)return;
 const answer=form.querySelector('input').value;if(!normalizeAnswer(answer))return;
 const correct=normalizeAnswer(answer)===normalizeAnswer(record.answer);
 result.className=`riddle-result ${correct?'correct':'incorrect'}`;
 result.replaceChildren(element('strong',correct?'Chính xác!':'Chưa khớp đáp án.'),element('p',`Đáp án: ${record.answer}`));result.hidden=false;
});
show();
