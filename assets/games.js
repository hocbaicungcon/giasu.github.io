import './extra-games.js';
import {createGameResult} from './game-result.js';
import {sound,stopSounds} from './puzzle-audio.js';
import {startRiver} from './river-game.js';
import './water-game.js';
import {moveBoard,canMove,scoreWord,words} from './game-rules.js';
const $=s=>document.querySelector(s);
document.querySelectorAll('[data-game]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-game]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.game-panel').forEach(p=>p.hidden=p.id!=='game-'+button.dataset.game);if(button.dataset.game==='words')$('#game-words').scrollIntoView({block:'start',behavior:'instant'});}));
let board,score,numberDone,numberSize=4;
const numberResult=createGameResult($('#number-scene'),{restart:startNumbers});
function spawn(){const empty=board.map((n,i)=>n?null:i).filter(i=>i!==null);if(empty.length)board[empty[Math.floor(Math.random()*empty.length)]]=Math.random()<.9?2:4;}
function renderNumbers(){const cells=board.map(n=>{const el=document.createElement('div');el.className='number-cell';el.dataset.level=Math.min(11,Math.log2(n||1));el.textContent=n||'';el.setAttribute('aria-label',n?String(n):'Ô trống');return el;});$('#number-board').replaceChildren(...cells);$('#game-score').textContent=score;document.querySelectorAll('[data-direction]').forEach(b=>b.disabled=numberDone);}
function startNumbers(){numberResult.clear();$('#number-board').style.setProperty('--number-size',numberSize);board=Array(numberSize*numberSize).fill(0);score=0;numberDone=false;spawn();spawn();$('#number-status').textContent='Ghép những ô cùng số nhé!';renderNumbers();}
function move(direction){if(numberDone)return;const result=moveBoard(board,direction,numberSize);if(!result.changed)return;board=result.board;score+=result.score;spawn();if(board.includes(2048)){numberDone=true;numberResult.show({won:true,description:'Bạn đã ghép được ô 2048 với '+score+' điểm!'});$('#number-status').textContent='Bạn đã đạt 2048! Chúc mừng!';}else if(!canMove(board,numberSize)){numberDone=true;numberResult.show({won:false,description:'Bàn đã đầy và không còn nước đi. Bạn đạt '+score+' điểm.'});$('#number-status').textContent='Hết nước đi. Bấm Chơi lại để thử lần nữa.';}else $('#number-status').textContent=result.score?`Cộng ${result.score} điểm.`:'Tiếp tục nào!';if(!numberDone)sound(result.score?'merge':'move');renderNumbers();}
document.querySelectorAll('[data-direction]').forEach(b=>b.addEventListener('click',()=>move(b.dataset.direction)));
$('#number-board').addEventListener('keydown',e=>{const d={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'}[e.key];if(d){e.preventDefault();move(d);}});
let touch;$('#number-board').addEventListener('pointerdown',e=>{touch=[e.clientX,e.clientY];$('#number-board').setPointerCapture(e.pointerId);});
$('#number-board').addEventListener('pointerup',e=>{if(!touch)return;const dx=e.clientX-touch[0],dy=e.clientY-touch[1];touch=null;if(Math.max(Math.abs(dx),Math.abs(dy))>25)move(Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'down':'up');});$('#number-board').addEventListener('pointercancel',()=>touch=null);
let answer,guesses,wordDone,draft='',keyStates={};const dictionary=new Set(words);
const stateNames={correct:'đúng vị trí',present:'có trong từ, sai vị trí',absent:'không có thêm chữ này'},rank={absent:1,present:2,correct:3};
function renderWords(reveal=false){
 const rows=Array.from({length:6},(_,r)=>{const row=document.createElement('div');row.className='word-row';row.setAttribute('role','group');row.setAttribute('aria-label',`Lượt ${r+1}`);const entry=guesses[r];const letters=entry?.word||(r===guesses.length?draft:'');
  for(let c=0;c<5;c++){const cell=document.createElement('span');const state=entry?.scores[c];cell.className='word-cell '+(state|| (letters[c]?'filled':'empty'));cell.textContent=letters[c]||'';cell.setAttribute('aria-label',letters[c]?`${letters[c]}${state?': '+stateNames[state]:''}`:'Ô trống');if(reveal&&r===guesses.length-1){cell.classList.add('word-reveal');cell.style.animationDelay=`${c*90}ms`;}row.append(cell);}return row;});
 $('#word-board').replaceChildren(...rows);
 document.querySelectorAll('[data-word-key]').forEach(b=>{const key=b.dataset.wordKey,state=keyStates[key];b.className='word-key'+(key.length>1?' wide':'')+(state?' '+state:'');b.disabled=wordDone;b.setAttribute('aria-label',key==='ENTER'?'Gửi đáp án':key==='BACKSPACE'?'Xoá một chữ':key+(state?': '+stateNames[state]:''));});
}
for(const keys of ['QWERTYUIOP'.split(''),'ASDFGHJKL'.split(''),['ENTER',...'ZXCVBNM','BACKSPACE']]){const row=document.createElement('div');row.className='keyboard-row';for(const key of keys){const button=document.createElement('button');button.type='button';button.dataset.wordKey=key;button.textContent=key==='ENTER'?'↵':key==='BACKSPACE'?'⌫':key;row.append(button);}$('#word-keyboard').append(row);}
function startWords(){const options=words.filter(w=>w!==answer);answer=options[Math.floor(Math.random()*options.length)];guesses=[];wordDone=false;draft='';keyStates={};$('#word-status').textContent='Một từ mới đang chờ bạn. Có 6 lượt đoán.';renderWords();}
function wordKey(key){
 if(wordDone)return;
 if(key==='BACKSPACE'){if(draft.length)sound('key');draft=draft.slice(0,-1);renderWords();return;}
 if(/^[A-Z]$/.test(key)){if(draft.length<5){draft+=key;sound('key');renderWords();}return;}
 if(key!=='ENTER')return;
 if(draft.length!==5){sound('error');$('#word-status').textContent='Nhập đủ 5 chữ cái trước khi gửi nhé.';return;}
 if(!dictionary.has(draft)){sound('error');$('#word-status').textContent='Từ chưa có trong bộ từ cơ bản. Thử HOUSE, TRAIN hoặc APPLE. Lượt đoán chưa bị tính.';return;}
 const guess=draft,scores=scoreWord(answer,guess);guesses.push({word:guess,scores});scores.forEach((state,i)=>{if((rank[keyStates[guess[i]]]||0)<rank[state])keyStates[guess[i]]=state;});
 wordDone=guess===answer||guesses.length===6;draft='';renderWords(true);sound(guess===answer?'win':wordDone?'lose':'merge');
 $('#word-status').textContent=guess===answer?`Chính xác! ${answer} — bạn dùng ${guesses.length} lượt.`:wordDone?`Hết lượt. Đáp án là ${answer}.`:`Còn ${6-guesses.length} lượt. Xem màu ô và bàn phím để đoán tiếp.`;
}
$('#word-keyboard').addEventListener('click',event=>{const key=event.target.closest('[data-word-key]')?.dataset.wordKey;if(key)wordKey(key);});
document.addEventListener('keydown',event=>{if($('#game-words').hidden||event.ctrlKey||event.metaKey||event.altKey||event.isComposing||event.target.closest('input,textarea,select,[contenteditable="true"],header'))return;const key=event.key.toUpperCase();if(key==='ENTER'&&event.target.closest('button')&&!event.target.closest('#word-keyboard'))return;if(/^[A-Z]$/.test(key)||['ENTER','BACKSPACE'].includes(key)){event.preventDefault();wordKey(key);}});
const starts={numbers:startNumbers,river:startRiver,words:startWords};document.querySelectorAll('[data-restart]').forEach(b=>b.addEventListener('click',()=>{if(starts[b.dataset.restart]){stopSounds();starts[b.dataset.restart]();}}));document.getElementById('number-size')?.addEventListener('change',event=>{numberSize=Number(event.target.value);startNumbers();});startNumbers();startRiver();startWords();

$('#word-give-up').addEventListener('click',()=>{if(wordDone)return;wordDone=true;draft='';renderWords();$('#word-status').textContent='Đã bỏ cuộc. Đáp án là '+answer+'. Bấm Từ mới để chơi tiếp.';sound('lose');});
