import {crossRiver} from './game-rules.js';
import {riverLevels} from './puzzle-levels.js';
const $=s=>document.querySelector(s),names={wolf:'Sói',goat:'Dê',cabbage:'Bắp cải'},artNames={wolf:'wolf',goat:'sheep',cabbage:'cabbage'};
let river,steps,riverDone,passenger='',crossing=false,tripTimer,levelIndex=0;
riverLevels.forEach((level,i)=>$('#river-level').add(new Option(level.name,i)));
function renderRiver(){
 const level=riverLevels[levelIndex];
 for(const [side,id] of [[0,'left'],[1,'right']]){const bank=$('#river-'+id);bank.replaceChildren();for(const k of Object.keys(names))if(river[k]===side&&passenger!==k){const button=document.createElement('button');button.type='button';button.className='river-character';button.dataset.passenger=k;button.disabled=side!==river.person||riverDone||crossing;button.setAttribute('aria-label',`${names[k]}, ${side?'bờ bên kia':'bờ xuất phát'}${side===river.person?', bấm để lên thuyền':''}`);const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),use=document.createElementNS(svg.namespaceURI,'use');svg.setAttribute('aria-hidden','true');use.setAttribute('href','#river-art-'+artNames[k]);svg.append(use);const label=document.createElement('span');label.textContent=names[k];button.append(svg,label);bank.append(button);}}
 $('#river-cross').disabled=riverDone||crossing;$('#river-cross').setAttribute('aria-label',crossing?'Đang qua sông':`Qua sông ${passenger?'cùng '+names[passenger]:'một mình'}`);
 $('#river-steps').textContent=steps+(level.limit?'/'+level.limit:'')+' lượt';$('.river-world').dataset.side=String(river.person);$('.river-world').classList.toggle('is-crossing',crossing);
 $('#river-unload').hidden=!passenger;$('#river-unload').disabled=riverDone||crossing;$('.river-cargo use').setAttribute('href',passenger?'#river-art-'+artNames[passenger]:'#river-art-cabbage');
 $('#river-next').hidden=$('#river-status').dataset.result!=='won'||levelIndex===riverLevels.length-1;
}
function selectPassenger(value){if(crossing||riverDone)return;passenger=value;renderRiver();const danger=crossRiver(river,passenger).lost;$('#river-status').textContent=riverLevels[levelIndex].hints&&danger?'Chú ý: nếu đi chuyến này, một cặp nguy hiểm sẽ bị bỏ lại. Hãy đổi hành khách.':passenger?`${names[passenger]} đã lên thuyền. Bấm thuyền để đi, hoặc bấm hành khách để xuống.`:'Thuyền chỉ chở bạn. Bấm thuyền để qua sông.';}
$('.river-world').addEventListener('click',event=>{const button=event.target.closest('[data-passenger]');if(button&&!button.disabled)selectPassenger(button.dataset.passenger);});
$('#river-unload').addEventListener('click',()=>selectPassenger(''));
export function startRiver(){clearTimeout(tripTimer);const level=riverLevels[levelIndex];river={...level.start};steps=0;riverDone=false;crossing=false;passenger='';$('#river-mission').textContent=level.description;$('#river-status').textContent='Bấm vào nhân vật cùng bờ để chọn lên thuyền.';$('#river-status').dataset.result='';renderRiver();}
$('#river-level').addEventListener('change',event=>{levelIndex=Number(event.target.value);startRiver();});
$('#river-next').addEventListener('click',()=>{if(levelIndex<riverLevels.length-1){levelIndex++;$('#river-level').value=String(levelIndex);startRiver();}});
$('#river-cross').addEventListener('click',()=>{
 if(crossing||riverDone)return;const result=crossRiver(river,passenger);if(result.error)return;
 crossing=true;renderRiver();$('.river-world').dataset.side=String(result.state.person);$('#river-status').textContent='Thuyền đang qua sông…';
 tripTimer=setTimeout(()=>{river=result.state;steps++;crossing=false;passenger='';const exhausted=riverLevels[levelIndex].limit&&steps>=riverLevels[levelIndex].limit;riverDone=Boolean(result.won||result.lost||exhausted);$('#river-status').dataset.result=result.won?'won':riverDone?'lost':'';$('#river-status').textContent=result.won?`Hoàn thành màn ${levelIndex+1} sau ${steps} lượt!${levelIndex<riverLevels.length-1?' Bấm mũi tên trong cảnh để sang màn tiếp theo.':''}`:result.lost?'Một cặp nguy hiểm bị bỏ lại! Bấm ↻ trong cảnh để thử lại.':exhausted?'Hết lượt của màn này. Bấm ↻ trong cảnh để thử lại.':`Đã qua sông ${steps} lượt. Chọn hành khách hoặc bấm thuyền để đi một mình.`;renderRiver();},matchMedia('(prefers-reduced-motion: reduce)').matches?0:650);
});
