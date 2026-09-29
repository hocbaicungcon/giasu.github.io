/* credit: giasu.ai.vn */
import {mountGameNavigation,setGameControlIcon} from './game-controls.js';
import './extra-games.js';
import {createGameResult} from './game-result.js';
import {sound,stopSounds,speakCombo} from './puzzle-audio.js';
import {startRiver} from './river-game.js';
import './water-game.js';
import {moveBoard,canMove,moveCrazyBoard,canMoveCrazy,makeCrazyTile,scoreWord,words} from './game-rules.js';
const $=s=>document.querySelector(s);
document.querySelectorAll('[data-game]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-game]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.game-panel').forEach(p=>p.hidden=p.id!=='game-'+button.dataset.game);const panel=$('#game-'+button.dataset.game),scene=panel?.querySelector('[id$="-scene"],.river-world,.water-world')||panel;if(scene){scene.setAttribute('tabindex','-1');scene.scrollIntoView({block:'start',behavior:'instant'});scene.focus({preventScroll:true});}}));
// Keep each game's settings and navigation in one place. Move existing controls
// so their IDs and event handlers continue to work.
document.querySelectorAll('.game-panel').forEach(panel=>{
 const game=panel.id.slice(5);
 const scene=panel.querySelector('[id$="-scene"],.river-world,.water-world')||panel;
 let nav=panel.querySelector('.puzzle-level,.new-puzzle-bar,.tangram-level-tools,.scene-tools,.einstein-level,.caro-toolbar,.number-toolbar,.scene-corner-controls');
 if(!nav){nav=document.createElement('div');scene.prepend(nav);}
 nav.classList.add('game-nav');nav.setAttribute('role','group');nav.setAttribute('aria-label','Điều khiển '+(panel.querySelector('h2')?.textContent||'game'));
 if(game==='numbers'){
  nav.append(panel.querySelector('.scene-corner-controls [data-puzzle-sound]'),panel.querySelector('[data-restart="numbers"]'));
 }else if(game==='words'){
  nav.append(panel.querySelector('#word-give-up'),panel.querySelector('[data-restart="words"]'));
 }else if(game==='sudoku'){
  nav.append(panel.querySelector('#sudoku-level').parentElement,...panel.querySelector('.puzzle-actions').children);
  nav.after(panel.querySelector('#sudoku-timer'));
 }else if(game==='hanoi'){
  nav.append(panel.querySelector('#hanoi-level').parentElement,...panel.querySelector('.puzzle-actions').children);
 }else if(game==='einstein'){
  const actions=panel.querySelector('.einstein-toolbar');
  if(actions)nav.append(actions);
 }
 panel.querySelectorAll('.puzzle-actions,.tangram-actions').forEach(holder=>nav.append(...holder.querySelectorAll('button')));
 panel.querySelectorAll('#nonogram-hint,#lightup-hint').forEach(button=>nav.append(button));
 const sound=panel.querySelector('[data-puzzle-sound]');
 if(sound&&!nav.contains(sound))nav.append(sound);
 panel.querySelectorAll('.scene-corner-controls,.puzzle-actions,.tangram-actions').forEach(holder=>{if(holder!==nav&&!holder.children.length)holder.remove();});
 mountGameNavigation(nav);
});
document.querySelectorAll('.game-panel').forEach(panel=>{
 const control=document.createElement('button'); control.type='button'; control.className='game-fullscreen'; control.setAttribute('aria-label','Mở toàn màn hình'); control.title='Mở toàn màn hình'; setGameControlIcon(control,'fullscreen','Mở toàn màn hình');
 control.addEventListener('click',async()=>{if(document.fullscreenElement===panel){await document.exitFullscreen?.();}else{try{await panel.requestFullscreen?.();}catch{panel.classList.toggle('is-fullscreen');}}});
 const nav=panel.querySelector('.game-nav');
 const actions=nav.querySelector('.einstein-toolbar'),speaker=nav.querySelector('[data-puzzle-sound]');
 if(actions)actions.append(control);else if(speaker)speaker.after(control);else nav.append(control);control.classList.add('in-toolbar');
 document.addEventListener('fullscreenchange',()=>{const active=document.fullscreenElement===panel||panel.classList.contains('is-fullscreen');setGameControlIcon(control,active?'close':'fullscreen',active?'Thoát toàn màn hình':'Mở toàn màn hình');});
});
let board,score,numberDone,numberSize=4,numberStreak=0,numberBonus=true,numberCrazy=false,comboTimer;
const bonusButton=$('#number-bonus');
const crazyButton=document.createElement('button');
crazyButton.type='button';
crazyButton.id='number-crazy';
crazyButton.setAttribute('aria-pressed','false');
const CRAZY_ICON=`<svg viewBox="0 0 24 24" aria-hidden="true">
 <path d="M4.5 7.2c2.1-3.4 6.8-4.7 10.3-2.7 1.5.8 2.7 2.1 3.4 3.6"/>
 <path d="M19.5 16.8c-2.1 3.4-6.8 4.7-10.3 2.7-1.5-.8-2.7-2.1-3.4-3.6"/>
 <path d="M17.2 4.8 18.5 8l-3.4.3M6.8 19.2 5.5 16l3.4-.3"/>
 <path d="m9.1 8.8 1.7 1.7 4-4M14.9 15.2l-1.7-1.7-4 4"/>
 <path d="M3.5 12h2M18.5 12h2M12 2.5v2M12 19.5v2"/>
</svg>`;
function renderCrazyButton(){
 crazyButton.innerHTML=CRAZY_ICON;
 crazyButton.setAttribute('aria-label',`Crazy: ${numberCrazy?'bật':'tắt'}`);
 crazyButton.setAttribute('title',`Crazy: ${numberCrazy?'bật':'tắt'}`);
}
renderCrazyButton();
const numberPanel=$('#game-numbers');
const numberNav=numberPanel?.querySelector('.game-nav');
if(numberNav){
 numberNav.append(crazyButton);
 crazyButton.classList.add('game-control');
}
crazyButton.addEventListener('click',()=>{
 numberCrazy=!numberCrazy;
 crazyButton.setAttribute('aria-pressed',String(numberCrazy));
 renderCrazyButton();
 startNumbers();
});
setGameControlIcon(bonusButton,'new','Bonus combo: bật');
bonusButton.addEventListener('click',()=>{numberBonus=!numberBonus;numberStreak=0;clearNumberCombo();bonusButton.setAttribute('aria-pressed',String(numberBonus));setGameControlIcon(bonusButton,'new',`Bonus combo: ${numberBonus?'bật':'tắt'}`);});
function clearNumberCombo(){clearTimeout(comboTimer);$('#number-combo').replaceChildren();}
const numberComboTitles=['COMBO!','DOUBLE COMBO!','TRIPLE COMBO!','SUPER COMBO!','MEGA COMBO!','AMAZING COMBO!','EPIC COMBO!','ULTRA COMBO!','MONSTER COMBO!','INSANE COMBO!','LEGENDARY COMBO!','UNSTOPPABLE COMBO!','COSMIC COMBO!','INFINITY COMBO!'];
function showNumberCombo(){
 const display=$('#number-combo'),title=numberComboTitles[Math.min(numberComboTitles.length-1,numberStreak-2)];
 const burst=document.createElement('div'),label=document.createElement('strong');
 burst.className='combo-burst';label.textContent=title;
 burst.append(label);display.replaceChildren(burst);speakCombo(title,numberStreak);
 clearTimeout(comboTimer);comboTimer=setTimeout(clearNumberCombo,750);
}
const numberResult=createGameResult($('#number-scene'),{restart:startNumbers});
function spawn(){
 const empty=board.map((n,i)=>n?null:i).filter(i=>i!==null);
 if(!empty.length)return;
 const index=empty[Math.floor(Math.random()*empty.length)];
 board[index]=numberCrazy&&Math.random()<.30?makeCrazyTile():Math.random()<.9?2:4;
}
function renderNumberScore(){
 const segments=['abcdef','bc','abdeg','abcdg','bcfg','acdfg','acdefg','abc','abcdefg','abcdfg'];
 const lines={a:[4,2,16,2],b:[18,4,18,14],c:[18,18,18,28],d:[4,30,16,30],e:[2,18,2,28],f:[2,4,2,14],g:[4,16,16,16]};
 const digits=String(score);
 $('#game-score').innerHTML=`<svg viewBox="0 0 ${digits.length*24} 32" role="img" aria-label="${score}">${[...digits].map((digit,i)=>`<g transform="translate(${i*24} 0)">${[...segments[Number(digit)]].map(key=>{const [x1,y1,x2,y2]=lines[key];return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;}).join('')}</g>`).join('')}</svg>`;
}
function renderNumbers(){
 const cells=board.map(v=>{
  const el=document.createElement('div');
  el.className='number-cell';
  if(typeof v==='string'){
   const parts=v.split(':'),kind=parts[0],power=Number(parts[1])||2,wide=parts[2]==='wide';
   const label=kind==='bomb'?'💣':kind==='mul'?(wide?`×${power}×${power}×${power}`:`×${power}`):(wide?`÷${power}÷${power}÷${power}`:`÷${power}`);
   el.classList.add('number-special',`number-${kind}`);
   if(wide)el.classList.add('number-wide');
   el.dataset.level='0';
   el.textContent=label;
   el.setAttribute('aria-label',kind==='bomb'?'Bom':label);
  }else{
   el.dataset.level=String(Math.min(11,Math.log2(v||1)));
   el.textContent=v||'';
   el.setAttribute('aria-label',v?String(v):'Ô trống');
  }
  return el;
 });
 const boardEl=$('#number-board');
 boardEl.replaceChildren(...cells);
 // Keep keyboard/swipe focus on the board after every render.
 if(document.activeElement?.closest?.('#game-numbers'))boardEl.focus({preventScroll:true});
 renderNumberScore();
 document.querySelectorAll('[data-direction]').forEach(b=>b.disabled=numberDone);
}
function startNumbers(){numberStreak=0;clearNumberCombo();numberResult.clear();$('#number-board').style.setProperty('--number-size',numberSize);board=Array(numberSize*numberSize).fill(0);score=0;numberDone=false;spawn();spawn();$('#number-status').textContent=numberCrazy?'Crazy: các ô đặc biệt có thể nhân, chia hoặc phá huỷ ô khi va chạm.':'Ghép những ô cùng số nhé!';renderNumbers();}
function move(direction){
 if(numberDone)return;
 const result=numberCrazy?moveCrazyBoard(board,direction,numberSize):moveBoard(board,direction,numberSize);
 if(!result.changed)return;
 board=result.board;
 numberStreak=result.score&&numberBonus?numberStreak+1:0;
 const bonus=numberStreak>=2?Math.round(result.score*Math.min(2,(numberStreak-1)*.25)):0;
 score+=result.score+bonus;
 if(bonus)showNumberCombo();else clearNumberCombo();
 spawn();
 const numeric=board.filter(v=>typeof v==='number'&&v>0);
 if(numeric.includes(2048)){
  numberDone=true;
  numberResult.show({won:true,description:'Bạn đã ghép được ô 2048 với '+score+' điểm!'});
  $('#number-status').textContent='Bạn đã đạt 2048! Chúc mừng!';
 }else if(!(numberCrazy?canMoveCrazy(board,numberSize):canMove(board,numberSize))){
  numberDone=true;
  numberResult.show({won:false,description:'Bàn đã đầy và không còn nước đi. Bạn đạt '+score+' điểm.'});
  $('#number-status').textContent='Hết nước đi. Bấm Chơi lại để thử lần nữa.';
 }else{
  $('#number-status').textContent=result.score?`Cộng ${result.score} điểm${bonus?` + ${bonus} điểm thưởng (combo ${numberStreak})`:''}.`:numberCrazy?'Crazy! Tiếp tục nào!':'Tiếp tục nào!';
 }
 if(!numberDone)sound(result.score?'merge':'move');
 renderNumbers();
}
document.querySelectorAll('[data-direction]').forEach(b=>b.addEventListener('click',()=>move(b.dataset.direction)));
$('#number-board').addEventListener('keydown',e=>{const d={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'}[e.key];if(d){e.preventDefault();move(d);}});
let touch;$('#number-board').addEventListener('pointerdown',e=>{touch=[e.clientX,e.clientY];$('#number-board').setPointerCapture(e.pointerId);});
$('#number-board').addEventListener('pointerup',e=>{if(!touch)return;const dx=e.clientX-touch[0],dy=e.clientY-touch[1];touch=null;if(Math.max(Math.abs(dx),Math.abs(dy))>25)move(Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'down':'up');});$('#number-board').addEventListener('pointercancel',()=>touch=null);
let answer,guesses,wordDone,draft='',keyStates={};const dictionary=new Set(words);
const wordResult=createGameResult($('#word-scene'),{restart:()=>startWords(false),next:()=>startWords()});
$('#word-scene [data-result-next]').textContent='Từ tiếp theo →';
const stateNames={correct:'đúng vị trí',present:'có trong từ, sai vị trí',absent:'không có thêm chữ này'},rank={absent:1,present:2,correct:3};
function renderWords(reveal=false){
 const rows=Array.from({length:6},(_,r)=>{const row=document.createElement('div');row.className='word-row';row.setAttribute('role','group');row.setAttribute('aria-label',`Lượt ${r+1}`);const entry=guesses[r];const letters=entry?.word||(r===guesses.length?draft:'');
  for(let c=0;c<5;c++){const cell=document.createElement('span');const state=entry?.scores[c];cell.className='word-cell '+(state|| (letters[c]?'filled':'empty'));cell.textContent=letters[c]||'';cell.setAttribute('aria-label',letters[c]?`${letters[c]}${state?': '+stateNames[state]:''}`:'Ô trống');if(reveal&&r===guesses.length-1){cell.classList.add('word-reveal');cell.style.animationDelay=`${c*90}ms`;}row.append(cell);}return row;});
 $('#word-board').replaceChildren(...rows);
 document.querySelectorAll('[data-word-key]').forEach(b=>{const key=b.dataset.wordKey,state=keyStates[key];b.className='word-key'+(key.length>1?' wide':'')+(state?' '+state:'');b.disabled=wordDone;b.setAttribute('aria-label',key==='ENTER'?'Gửi đáp án':key==='BACKSPACE'?'Xoá một chữ':key+(state?': '+stateNames[state]:''));});
}
for(const keys of ['QWERTYUIOP'.split(''),'ASDFGHJKL'.split(''),['ENTER',...'ZXCVBNM','BACKSPACE']]){const row=document.createElement('div');row.className='keyboard-row';for(const key of keys){const button=document.createElement('button');button.type='button';button.dataset.wordKey=key;button.textContent=key==='ENTER'?'↵':key==='BACKSPACE'?'⌫':key;row.append(button);}$('#word-keyboard').append(row);}
function startWords(fresh=true){wordResult.clear();if(fresh||!answer){const options=words.filter(w=>w!==answer);answer=options[Math.floor(Math.random()*options.length)];}guesses=[];wordDone=false;draft='';keyStates={};$('#word-status').textContent='Một từ mới đang chờ bạn. Có 6 lượt đoán.';renderWords();}
function wordKey(key){
 if(wordDone)return;
 if(key==='BACKSPACE'){if(draft.length)sound('key');draft=draft.slice(0,-1);renderWords();return;}
 if(/^[A-Z]$/.test(key)){if(draft.length<5){draft+=key;sound('key');renderWords();}return;}
 if(key!=='ENTER')return;
 if(draft.length!==5){sound('error');$('#word-status').textContent='Nhập đủ 5 chữ cái trước khi gửi nhé.';return;}
 if(!dictionary.has(draft)){sound('error');$('#word-status').textContent='Từ chưa có trong bộ từ cơ bản. Thử HOUSE, TRAIN hoặc APPLE. Lượt đoán chưa bị tính.';return;}
 const guess=draft,scores=scoreWord(answer,guess);guesses.push({word:guess,scores});scores.forEach((state,i)=>{if((rank[keyStates[guess[i]]]||0)<rank[state])keyStates[guess[i]]=state;});
 wordDone=guess===answer||guesses.length===6;draft='';renderWords(true);if(!wordDone)sound('merge');else wordResult.show({won:guess===answer,title:guess===answer?'Chiến thắng!':'Hết lượt đoán!',description:guess===answer?`${answer} — bạn đã đoán đúng sau ${guesses.length} lượt.`:`Đáp án là ${answer}. Hãy thử lại nhé!`,hasNext:guess===answer,delay:750});
 $('#word-status').textContent=guess===answer?`Chính xác! ${answer} — bạn dùng ${guesses.length} lượt.`:wordDone?`Hết lượt. Đáp án là ${answer}.`:`Còn ${6-guesses.length} lượt. Xem màu ô và bàn phím để đoán tiếp.`;
}
$('#word-keyboard').addEventListener('click',event=>{const key=event.target.closest('[data-word-key]')?.dataset.wordKey;if(key)wordKey(key);});
document.addEventListener('keydown',event=>{if($('#game-words').hidden||event.ctrlKey||event.metaKey||event.altKey||event.isComposing||event.target.closest('input,textarea,select,[contenteditable="true"],header,.game-result'))return;const key=event.key.toUpperCase();if(/^[A-Z]$/.test(key)||['ENTER','BACKSPACE'].includes(key)){event.preventDefault();wordKey(key);}});
const starts={numbers:startNumbers,river:startRiver,words:startWords};document.querySelectorAll('[data-restart]').forEach(b=>b.addEventListener('click',()=>{if(starts[b.dataset.restart]){stopSounds();starts[b.dataset.restart]();}}));document.querySelectorAll('[data-number-size]').forEach(button=>{setGameControlIcon(button,button.dataset.numberSize==='4'?'board4':'board5',button.getAttribute('aria-label'));button.addEventListener('click',()=>{numberSize=Number(button.dataset.numberSize);document.querySelectorAll('[data-number-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));startNumbers();});});startNumbers();startRiver();startWords();

$('#word-give-up').addEventListener('click',()=>{if(wordDone)return;wordDone=true;draft='';renderWords();$('#word-status').textContent='Đã bỏ cuộc. Đáp án là '+answer+'. Bấm Từ mới để chơi tiếp.';wordResult.show({won:false,title:'Đã bỏ cuộc',description:'Đáp án là '+answer+'. Bạn có thể chơi lại hoặc xem lại các lượt đoán.'});});
