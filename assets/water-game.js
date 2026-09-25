import {createGameResult} from './game-result.js';
import {waterLevels,waterMove,waterWon} from './puzzle-levels.js';
import {sound,stopSounds} from './puzzle-audio.js';
const $=s=>document.querySelector(s),ACTION_MS=2200;let flowFrame,soundTimer,flowEndTimer,stopFlow=()=>{};
$('.water-world').style.setProperty('--pour-duration',(ACTION_MS-450)+'ms');
let state,steps,selected=null,done=false,busy=false,levelIndex=0,timer;
const waterJump=document.createElement('select');waterJump.id='water-jump';waterJump.setAttribute('aria-label','Chọn màn Đong nước');waterJump.replaceChildren(...waterLevels.map((_,index)=>{const option=document.createElement('option');option.value=index;option.textContent=`Màn ${index+1}`;return option;}));$('.water-world .scene-tools').insertBefore(waterJump,$('#water-next'));
try{levelIndex=Math.min(waterLevels.length-1,Math.max(0,parseInt(localStorage.getItem('water-level'),10)||0));}catch{}
const level=()=>waterLevels[levelIndex];
const resultScene=createGameResult($('.water-world'),{restart:startWater,next:()=>{if(levelIndex<waterLevels.length-1){levelIndex++;startWater();}}});
function message(text,result=''){$('#water-status').textContent=text;$('#water-status').dataset.result=result;}
function render(){
 $('#water-steps').textContent=steps+(level().limit?'/'+level().limit:'')+' lượt';
 document.querySelectorAll('[data-jug]').forEach(button=>{
  const i=Number(button.dataset.jug),cap=level().caps[i];
  button.setAttribute('aria-pressed',String(selected===i));button.setAttribute('aria-label','Can '+cap+' lít, đang có '+state[i]+' lít'+(selected===i?', đang chọn':''));button.disabled=done||busy;
  const rect=button.querySelector('[data-water-fill]'),bottom=Number(rect.dataset.bottom),height=Number(rect.dataset.height)*state[i]/cap;
  rect.setAttribute('height',height);rect.setAttribute('y',bottom-height);
  button.querySelector('[data-water-volume]').textContent=state[i]+' lít';
 });
 $('#water-tap').disabled=done||busy;$('#water-drain').disabled=done||busy;
 $('#water-prev').disabled=levelIndex===0;$('#water-next').disabled=levelIndex===waterLevels.length-1;
 waterJump.value=String(levelIndex);
}
function stream(source,target,action,toLeft){
 const svg=$('#water-stream'),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function anchor(button,receiving){
  const art=button.querySelector('svg'),fill=button.querySelector('[data-water-fill]');
  let x,y;
  if(fill){const width=Number(fill.getAttribute('width'));x=receiving?18+width/2:toLeft?18:18+width;y=18;}
  else if(button.id==='water-tap'){x=104;y=74;}else{x=70;y=75;}
  const point=new DOMPoint(x,y).matrixTransform(art.getScreenCTM());return point;
 }
 function draw(){
  const world=$('.water-world').getBoundingClientRect(),a=anchor(source,false),b=anchor(target,true);
  const x1=a.x-world.x,y1=a.y-world.y,x2=b.x-world.x,y2=b.y-world.y;
  svg.setAttribute('viewBox','0 0 '+world.width+' '+world.height);
  const d=action==='fill'?'M'+x1+' '+y1+' Q'+x1+' '+y2+' '+x2+' '+y2:'M'+x1+' '+y1+' Q'+(x1+x2)/2+' '+(Math.min(y1,y2)-14)+' '+x2+' '+y2;
  svg.querySelectorAll('path').forEach(path=>path.setAttribute('d',d));
  svg.querySelector('.stream-landing').setAttribute('transform','translate('+x2+' '+y2+')');
  if(!reduced)flowFrame=requestAnimationFrame(draw);
 }
 cancelAnimationFrame(flowFrame);draw();svg.classList.add('flowing');
}

function act(action,destination){
 if(done||busy)return;if(selected===null){message('Bấm vào một can trước, rồi chọn vòi hoặc chỗ xả.');return;}
 const result=waterMove(state,action,selected,level().caps,destination);if(!result.changed){message('Lượng nước không thay đổi; không tính lượt.');return;}
 const source=$('[data-jug="'+selected+'"]'),target=action==='pour'?$('[data-jug="'+destination+'"]'):action==='empty'?$('#water-drain'):source;
 const from=source.querySelector('svg').getBoundingClientRect(),to=target.querySelector('svg').getBoundingClientRect();
 source.style.setProperty('--pour-x',action==='empty'?(to.x+to.width/2-from.x-from.width/2-20)+'px':'0px');
 source.style.setProperty('--pour-y',action==='fill'?'0px':Math.min(-8,(action==='empty'?to.y+to.height*.45:to.y)-from.y-35)+'px');
 busy=true;source.classList.add(action==='fill'?'is-filling':'is-pouring');source.style.setProperty('--tilt',action==='pour'&&destination<selected?'-22deg':'22deg');
 message(action==='fill'?'Đang đổ đầy can '+level().caps[selected]+' lít…':action==='empty'?'Đang đổ hết nước…':'Đang rót từ can '+level().caps[selected]+' lít sang can '+level().caps[destination]+' lít…');
 const duration=matchMedia('(prefers-reduced-motion: reduce)').matches?0:ACTION_MS;
 stream(action==='fill'?$('#water-tap'):source,target,action,destination<selected);
 stopFlow();clearTimeout(soundTimer);
 if(duration){soundTimer=setTimeout(()=>{if(!$('#game-water').hidden)stopFlow=sound('water',{volume:action==='fill'?.22:.18});},250);flowEndTimer=setTimeout(()=>{stopFlow();$('#water-stream').classList.remove('flowing');},ACTION_MS-200);}
 state=result.state;steps++;render();
 timer=setTimeout(()=>{
  clearTimeout(soundTimer);clearTimeout(flowEndTimer);stopFlow();cancelAnimationFrame(flowFrame);busy=false;source.classList.remove('is-filling','is-pouring');$('#water-stream').classList.remove('flowing');
  const won=waterWon(state,level()),lost=level().limit&&steps>=level().limit&&!won;done=Boolean(won||lost);
  message(won?'Chính xác! Hoàn thành sau '+steps+' lượt. Bấm → để chơi tiếp.':lost?'Hết lượt. Bấm ↻ để thử lại.':'Bấm vòi, chỗ xả hoặc can nhận để tiếp tục.',won?'won':lost?'lost':'');render();
  if(won||lost)resultScene.show({won,description:won?'Đong nước chính xác sau '+steps+' lượt. Bạn làm tốt lắm!':'Đã hết '+level().limit+' lượt. Thử một cách rót khác nhé!',hasNext:levelIndex<waterLevels.length-1});
 },duration);
}
$('.water-jugs').addEventListener('click',event=>{
 const button=event.target.closest('[data-jug]');if(!button||done||busy)return;const index=Number(button.dataset.jug);
 if(selected!==null&&selected!==index){act('pour',index);return;}
 selected=selected===index?null:index;render();message(selected===null?'Bấm can để chọn.':'Đã chọn can '+level().caps[selected]+' lít. Bấm vòi, chỗ xả hoặc can nhận; bấm lại can để bỏ chọn.');
});
$('#water-tap').addEventListener('click',()=>act('fill'));$('#water-drain').addEventListener('click',()=>act('empty'));
function startWater(){
 resultScene.clear();clearTimeout(soundTimer);clearTimeout(flowEndTimer);stopFlow();cancelAnimationFrame(flowFrame);clearTimeout(timer);stopSounds();state=level().caps.map(()=>0);steps=0;selected=null;done=false;busy=false;$('#water-stream').classList.remove('flowing');
 $('.water-jugs').replaceChildren(...level().caps.map((cap,i)=>{
  const fragment=$('#jug-template-'+cap).content.cloneNode(true),button=fragment.querySelector('button');button.dataset.jug=i;button.style.setProperty('--jug-size',(105+cap*6)+'px');button.style.setProperty('--jug-mobile-size',(88+cap*5)+'px');return button;
 }));
 $('#water-mission').textContent=level().description+(level().limit?' Hoàn thành trong '+level().limit+' lượt.':' Không giới hạn lượt.');$('#water-mission').setAttribute('aria-label','Màn '+(levelIndex+1)+' trên '+waterLevels.length+'. '+$('#water-mission').textContent);
 message('Chọn một can để bắt đầu.');render();
 try{localStorage.setItem('water-level',String(levelIndex));}catch{}
}
for(const [id,delta] of [['water-prev',-1],['water-next',1]])$('#'+id).addEventListener('click',()=>{levelIndex=Math.max(0,Math.min(waterLevels.length-1,levelIndex+delta));startWater();});
waterJump.addEventListener('change',()=>{levelIndex=Number(waterJump.value);startWater();});
document.querySelector('[data-restart="water"]').addEventListener('click',startWater);startWater();

document.querySelectorAll('[data-game]').forEach(button=>button.addEventListener('click',()=>{clearTimeout(soundTimer);stopFlow();}));
