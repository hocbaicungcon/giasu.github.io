import {probabilityEvents,moveEvent,isProbabilityOrder} from './exploration-models.js?v=850bdab1108d';
const initial=['six','impossible','coin','certain','double','five'];
const icons={die:'<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="16" r="1"/><circle cx="12" cy="12" r="1"/>',coin:'<circle cx="12" cy="12" r="9"/><path d="M12 6v12m-3-9h5a2 2 0 0 1 0 4h-4"/>'};
const svg=path=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
const arrow=up=>svg(`<path d="m7 ${up?14:10} 5 ${up?-5:5} 5 ${up?5:-5}"/>`);
document.querySelectorAll('[data-probability-sort]').forEach(root=>{
 const list=root.querySelector('ol'),status=root.querySelector('[role=status]'),explanation=root.querySelector('[data-sort-explanation]');let order=[...initial],drag=null;
 const rows=new Map();
 function update(){for(const [i,id] of order.entries()){const row=rows.get(id);row.querySelector('.sort-position').textContent=i+1;row.querySelector('[data-move=up]').disabled=i===0;row.querySelector('[data-move=down]').disabled=i===order.length-1;list.append(row);}explanation.hidden=true;root.classList.remove('is-correct');}
 function move(id,target){const from=order.indexOf(id);if(from===target||target<0||target>=order.length)return;order=moveEvent(order,from,target);update();status.textContent=`Đã chuyển sự kiện đến vị trí ${target+1} trên ${order.length}.`;}
 for(const event of probabilityEvents){
  const row=document.createElement('li');row.className='sort-event';row.dataset.event=event.id;
  row.innerHTML=`<button type="button" class="sort-handle" aria-label="Di chuyển sự kiện: ${event.text}">${svg('<path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01"/>')}</button><span class="sort-position" aria-hidden="true"></span><span class="sort-event-icon">${svg(icons[event.icon])}</span><span class="sort-event-text"></span><span class="sort-moves"><button type="button" data-move="up" aria-label="Đưa lên: ${event.text}">${arrow(true)}</button><button type="button" data-move="down" aria-label="Đưa xuống: ${event.text}">${arrow(false)}</button></span>`;
  row.querySelector('.sort-event-text').textContent=event.text;
  for(const button of row.querySelectorAll('[data-move]'))button.addEventListener('click',()=>{move(event.id,order.indexOf(event.id)+(button.dataset.move==='up'?-1:1));row.querySelector('.sort-handle').focus();});
  const handle=row.querySelector('.sort-handle');handle.addEventListener('keydown',e=>{if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault();move(event.id,order.indexOf(event.id)+(e.key==='ArrowUp'?-1:1));handle.focus();}});
  handle.addEventListener('pointerdown',e=>{if(e.button!==0||drag)return;drag={id:event.id,pointer:e.pointerId};root.setPointerCapture(e.pointerId);row.classList.add('is-dragging');});
  rows.set(event.id,row);
 }
 root.addEventListener('pointermove',e=>{if(!drag||drag.pointer!==e.pointerId)return;e.preventDefault();const from=order.indexOf(drag.id);let target=from;for(let i=0;i<order.length;i++){if(i===from)continue;const r=rows.get(order[i]).getBoundingClientRect(),middle=r.top+r.height/2;if(i<from&&e.clientY<middle){target=i;break;}if(i>from&&e.clientY>middle)target=i;}move(drag.id,target);});
 const stop=e=>{if(!drag||drag.pointer!==e.pointerId)return;rows.get(drag.id).classList.remove('is-dragging');drag=null;};root.addEventListener('pointerup',stop);root.addEventListener('pointercancel',stop);root.addEventListener('lostpointercapture',stop);
 root.querySelector('[data-sort-check]').addEventListener('click',()=>{const correct=isProbabilityOrder(order);root.classList.toggle('is-correct',correct);status.textContent=correct?'Đúng rồi! Xác suất giảm dần từ 1 đến 0. Em có thể xem giải thích dưới đây.':'Chưa đúng thứ tự. Hãy đặt sự kiện chắc chắn lên đầu, sự kiện không thể xảy ra xuống cuối, rồi so sánh số kết quả thuận lợi.';if(correct)explanation.hidden=false;});
 root.querySelector('[data-sort-reset]').addEventListener('click',()=>{order=[...initial];update();status.textContent='Đã đặt lại các sự kiện. Em hãy sắp xếp từ dễ xảy ra đến khó xảy ra.';});
 const reasons=document.createElement('ol');for(const event of probabilityEvents){const item=document.createElement('li');item.textContent=event.reason;reasons.append(item);}explanation.append(reasons);update();
});
