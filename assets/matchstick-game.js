import {createGameResult} from './game-result.js';
import {sound} from './puzzle-audio.js';
import {matchstickLevels} from './matchstick-levels.js';

const $=selector=>document.querySelector(selector);
const digitSegments={'0':'abcdef','1':'bc','2':'abdeg','3':'abcdg','4':'bcfg','5':'acdfg','6':'acdefg','7':'abc','8':'abcdefg','9':'abcdfg'};
const operatorSegments={'+':'hv','-':'h'};
const equalSegments={'=':'ul'};
const segmentSets=[digitSegments,operatorSegments,digitSegments,equalSegments,digitSegments];
const possibleSegments=['abcdefg','hv','abcdefg','ul','abcdefg'];
let level=0,sticks=[],selected=null,moved=false,won=false;
const result=createGameResult($('#match-scene'),{restart:()=>start(),next:()=>start(level+1)});

function identify(slot,segments){const keys=segmentSets[slot];return Object.keys(keys).find(char=>keys[char].length===segments.size&&[...keys[char]].every(part=>segments.has(part)));}
function equation(){const chars=sticks.map((set,slot)=>identify(slot,set));if(chars.some(char=>!char))return null;const [a,op,b,,c]=chars;return {text:chars.join(''),correct:op==='+'?Number(a)+Number(b)===Number(c):Number(a)-Number(b)===Number(c)};}
function render(){
 const board=$('#match-board');board.replaceChildren(...sticks.map((parts,slot)=>{
  const symbol=document.createElement('div');symbol.className='match-symbol';symbol.setAttribute('aria-label',`Kí hiệu ${slot+1}`);
  for(const segment of possibleSegments[slot]){
   const active=parts.has(segment),fixed=slot===3;
   const element=document.createElement(fixed?'span':'button');
   if(!fixed){element.type='button';element.dataset.slot=slot;element.dataset.segment=segment;element.setAttribute('aria-label',`${active?'Que đang đặt':'Vị trí trống'} ở kí hiệu ${slot+1}, nét ${segment}`);}
   element.className=`match-segment match-${segment}${active?' on':' off'}${selected?.slot===slot&&selected?.segment===segment?' picked':''}`;
   symbol.append(element);
  }
  return symbol;
 }));
 const expression=equation();board.setAttribute('aria-label',`Phép tính ${expression?.text||'đang thay đổi'}`);
}
function start(next=level){result.clear();level=Math.max(0,Math.min(matchstickLevels.length-1,next));const [startEquation]=matchstickLevels[level];sticks=[...startEquation].map((char,slot)=>new Set(segmentSets[slot][char]));selected=null;moved=false;won=false;$('#match-level').textContent=`Màn ${level+1}/${matchstickLevels.length}`;$('#match-jump').value=String(level);$('#match-prev').disabled=level===0;$('#match-next').disabled=level===matchstickLevels.length-1;$('#match-status').textContent='Nhấc một que rồi đặt vào nét mờ.';render();}
$('#match-board').addEventListener('click',event=>{
 const button=event.target.closest('[data-segment]');if(!button||moved||won)return;
 const slot=Number(button.dataset.slot),segment=button.dataset.segment,active=sticks[slot].has(segment);
 if(!selected){if(!active){$('#match-status').textContent='Hãy chọn một que đang sáng trước.';return;}selected={slot,segment};sound('key');$('#match-status').textContent='Chọn nét mờ để đặt que diêm.';render();return;}
 if(active){selected=selected.slot===slot&&selected.segment===segment?null:{slot,segment};$('#match-status').textContent=selected?'Chọn nét mờ để đặt que diêm.':'Đã bỏ chọn que.';render();return;}
 sticks[selected.slot].delete(selected.segment);sticks[slot].add(segment);selected=null;moved=true;sound('move');render();
 const calculation=equation();if(calculation?.correct){won=true;$('#match-status').textContent=`Chính xác! ${calculation.text} là phép tính đúng.`;result.show({won:true,description:`Bạn đã sửa thành ${calculation.text} bằng đúng một que diêm.`,hasNext:level<matchstickLevels.length-1});}
 else{$('#match-status').textContent=calculation?`${calculation.text} vẫn chưa đúng. Bấm Chơi lại rồi thử cách khác.`:'Kí hiệu sau khi chuyển chưa hợp lệ. Bấm Chơi lại rồi thử lại.';sound('error');}
});
$('#match-prev').addEventListener('click',()=>start(level-1));
$('#match-next').addEventListener('click',()=>start(level+1));
$('#match-reset').addEventListener('click',()=>start());
const select=$('#match-jump');select.replaceChildren(...matchstickLevels.map((_,i)=>{const option=document.createElement('option');option.value=i;option.textContent=`Màn ${i+1}`;return option;}));select.addEventListener('change',()=>start(Number(select.value)));
start();
