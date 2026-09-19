import {createGameResult} from './game-result.js';
import {riverLevels,riverMove} from './puzzle-levels.js';
import {sound,stopSounds} from './puzzle-audio.js';
const $=s=>document.querySelector(s),names={wolf:'Sói',goat:'Dê',cabbage:'Bắp cải'},art={wolf:'wolf',goat:'sheep',cabbage:'cabbage'};
const TRIP_MS=2600;
$('.river-world').style.setProperty('--trip-duration',TRIP_MS+'ms');
let state,steps,done,cargo=[],crossing=false,timer,levelIndex=0,stopRow=()=>{};
$('.river-vessel').addEventListener('transitionend',event=>{if(event.target===$('.river-vessel')&&event.propertyName==='left')stopRow();});
try{levelIndex=Math.min(riverLevels.length-1,Math.max(0,parseInt(localStorage.getItem('river-level'),10)||0));}catch{}
const level=()=>riverLevels[levelIndex];
const resultScene=createGameResult($('.river-world'),{restart:startRiver,next:()=>{if(levelIndex<riverLevels.length-1){levelIndex++;startRiver();}}});
function character(i,onBoat=false){
 const kind=level().items[i],button=document.createElement('button');
 button.type='button';button.className=onBoat?'river-passenger':'river-character';button.dataset.passenger=i;
 button.disabled=done||crossing||(!onBoat&&state.positions[i]!==state.person);
 button.setAttribute('aria-label',names[kind]+' '+(i+1)+(onBoat?', bấm để xuống thuyền':', bấm để lên thuyền'));
 button.append($('#river-template-'+art[kind]).content.cloneNode(true));return button;
}
function render(){
 for(const [side,id] of [[0,'left'],[1,'right']])$('#river-'+id).replaceChildren(...state.positions.map((s,i)=>s===side&&!cargo.includes(i)?character(i):null).filter(Boolean));
 $('#river-cargo').replaceChildren(...cargo.map(i=>character(i,true)));
 $('#river-cross').disabled=done||crossing;$('#river-farmer-cross').disabled=done||crossing;$('#river-cross').setAttribute('aria-label','Qua sông, đang chở '+cargo.length+'/'+level().capacity+' nhân vật');
 $('#river-steps').textContent=steps+(level().limit?'/'+level().limit:'')+' lượt';
 $('.river-world').dataset.side=String(state.person);$('.river-world').classList.toggle('is-crossing',crossing);$('.river-world').classList.toggle('is-crowded',level().items.length>6);
 $('#river-prev').disabled=levelIndex===0;$('#river-next').disabled=levelIndex===riverLevels.length-1;
 $('#river-mission').setAttribute('aria-label','Màn '+(levelIndex+1)+' trên '+riverLevels.length+'. '+$('#river-mission').textContent);
}
function message(text,result=''){const status=$('#river-status');status.textContent=text;status.dataset.result=result;}
$('.river-world').addEventListener('click',event=>{
 const button=event.target.closest('[data-passenger]');if(!button||button.disabled||done||crossing)return;
 const i=Number(button.dataset.passenger);
 if(cargo.includes(i))cargo=cargo.filter(n=>n!==i);
 else if(cargo.length<level().capacity)cargo.push(i);
 else {message('Thuyền đã đủ chỗ. Bấm một hành khách trên thuyền để cho xuống.');return;}
 sound('splash');render();message('Đã chọn '+cargo.length+'/'+level().capacity+' chỗ. Bấm thuyền để qua sông.');
});
export function startRiver(){
 resultScene.clear();clearTimeout(timer);stopRow();stopSounds();state=structuredClone(level().start);steps=0;done=false;crossing=false;cargo=[];
 $('#river-mission').textContent=level().description+(level().limit?' Hoàn thành trong '+level().limit+' lượt.':' Không giới hạn lượt.');
 message('Bấm nhân vật để lên thuyền, bấm thuyền để đi.');render();
 try{localStorage.setItem('river-level',String(levelIndex));}catch{}
}
for(const [id,delta] of [['river-prev',-1],['river-next',1]])$('#'+id).addEventListener('click',()=>{levelIndex=Math.max(0,Math.min(riverLevels.length-1,levelIndex+delta));startRiver();});
$('#river-cross').addEventListener('click',()=>{
 if(crossing||done)return;const result=riverMove(state,cargo,level());if(result.error)return;
 const duration=matchMedia('(prefers-reduced-motion: reduce)').matches?0:TRIP_MS;
 crossing=true;render();$('.river-world').dataset.side=String(result.state.person);stopRow();stopRow=duration?sound('row'):()=>{};message('Thuyền đang qua sông…');
 timer=setTimeout(()=>{
  stopRow();state=result.state;steps++;crossing=false;cargo=[];const exhausted=level().limit&&steps>=level().limit;
  done=Boolean(result.won||result.lost||exhausted);render();
  if(result.lost){
   message(names[level().items[result.danger.predator]]+' đã ăn '+names[level().items[result.danger.prey]].toLowerCase()+' khi không có người trông! Bấm ↻ để thử lại.','lost');
   const predator=$('[data-passenger="'+result.danger.predator+'"]'),prey=$('[data-passenger="'+result.danger.prey+'"]');
   const a=predator.getBoundingClientRect(),b=prey.getBoundingClientRect();predator.style.setProperty('--chase-x',(b.x-a.x)*.55+'px');predator.style.setProperty('--chase-y',(b.y-a.y)*.55+'px');predator.classList.add('is-munching');prey.classList.add('is-eaten');sound('munch');resultScene.show({won:false,description:$('#river-status').textContent.replace(' Bấm ↻ để thử lại.',' Hãy thử sắp xếp chuyến đi khác nhé!'),delay:1600});
  }else if(result.won){message('Hoàn thành sau '+steps+' lượt! Bấm → để chơi thử thách tiếp theo.','won');resultScene.show({won:true,description:'Bạn đã đưa cả nhóm sang sông an toàn sau '+steps+' lượt.',hasNext:levelIndex<riverLevels.length-1});}
  else if(exhausted){message('Hết lượt. Bấm ↻ để thử một cách khác.','lost');resultScene.show({won:false,description:'Bạn đã dùng hết '+level().limit+' lượt. Thử sắp xếp chuyến đi theo cách khác nhé!'});}
  else message('Chọn hành khách hoặc bấm thuyền để đi một mình.');
 },duration);
});

$('#river-farmer-cross').addEventListener('click',()=>$('#river-cross').click());
