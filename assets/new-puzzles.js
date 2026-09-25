import {sound,stopSounds} from './puzzle-audio.js';
const $=s=>document.querySelector(s);
// Minesweeper
let mw=9,mh=9,mb=10;
const mineSizes={9:10,12:24,16:40};
const sizeSelect=document.createElement('select');sizeSelect.id='mines-size';sizeSelect.setAttribute('aria-label','Kích thước lưới dò mìn');
for(const [size,count] of Object.entries(mineSizes)){const option=document.createElement('option');option.value=size;option.textContent=`${size}×${size} · ${count} mìn`;sizeSelect.append(option);}
$('#mines-new').before(sizeSelect);
sizeSelect.addEventListener('change',()=>{mw=mh=Number(sizeSelect.value);mb=mineSizes[mw];buildMineBoard();minesStart(true);});
let mines=[],opened=new Set(),flags=new Set(),minesReady=false,minesDone=false,minesLost=false,mineHit=-1,flagMode=false;
const mineButtons=[];
const flagButton=document.createElement('button');
flagButton.type='button';flagButton.textContent='⚑';flagButton.title='Chế độ cắm cờ';flagButton.setAttribute('aria-label','Chế độ cắm cờ');flagButton.setAttribute('aria-pressed','false');
$('#mines-reset').after(flagButton);
$('#mines-reset').setAttribute('aria-label','Chơi lại Minesweeper');
flagButton.onclick=()=>{flagMode=!flagMode;flagButton.setAttribute('aria-pressed',String(flagMode));};
function neighbors(i){const x=i%mw,y=Math.floor(i/mw),a=[];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const xx=x+dx,yy=y+dy;if((dx||dy)&&xx>=0&&xx<mw&&yy>=0&&yy<mh)a.push(yy*mw+xx);}return a;}
function seedMines(first){
 const safe=new Set([first,...neighbors(first)]),positions=Array.from({length:mw*mh},(_,i)=>i).filter(i=>!safe.has(i));
 for(let i=positions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[positions[i],positions[j]]=[positions[j],positions[i]];}
 positions.slice(0,mb).forEach(i=>mines[i]=-1);
 mines=mines.map((v,i)=>v===-1?-1:neighbors(i).filter(j=>mines[j]===-1).length);minesReady=true;
}
function toggleFlag(i){if(minesDone||opened.has(i))return;if(flags.has(i))flags.delete(i);else if(flags.size<mb)flags.add(i);sound('move');minesRender();}
function revealMine(i){
 if(minesDone||opened.has(i)||flags.has(i))return;
 if(!minesReady)seedMines(i);
 if(mines[i]===-1){mineHit=i;minesDone=true;minesLost=true;sound('lose');}
 else{const stack=[i];while(stack.length){const j=stack.pop();if(opened.has(j)||flags.has(j)||mines[j]===-1)continue;opened.add(j);if(mines[j]===0)stack.push(...neighbors(j));}
  if(opened.size===mw*mh-mb){minesDone=true;mines.forEach((v,j)=>{if(v===-1)flags.add(j);});sound('win');}else sound('move');}
 minesRender();
}
function minesRender(){
 mineButtons.forEach((button,i)=>{const v=mines[i],isOpen=opened.has(i),showMine=minesLost&&v===-1;
  button.className='mine-cell'+(isOpen?' open':'')+(flags.has(i)?' flag':'')+(showMine?' revealed-mine':'')+(i===mineHit?' mine-hit':'');
  button.textContent=showMine?'✹':flags.has(i)?(minesLost&&v!==-1?'×':'⚑'):isOpen?(v||''):'';
  button.dataset.count=isOpen?String(v):'';button.disabled=minesDone;
  button.setAttribute('aria-label',`Hàng ${Math.floor(i/mw)+1}, cột ${i%mw+1}: ${showMine?'mìn':flags.has(i)?'cắm cờ':isOpen?(v?`${v} mìn lân cận`:'ô trống'):'chưa mở'}`);
 });
 $('#mines-status').textContent=minesDone?(minesLost?'Trúng mìn. Bấm ↻ để chơi lại.':'Đã mở tất cả ô an toàn!'):`⚑ ${flags.size}/${mb} · ${opened.size}/${mw*mh-mb} ô an toàn`;
}
function buildMineBoard(){
mineButtons.length=0;
$('#mines-board').style.setProperty('--mine-size',mw);
$('#mines-board').dataset.size=String(mw);
for(let i=0;i<mw*mh;i++){
 const button=document.createElement('button');button.type='button';let timer=null,held=false,origin=null;
 const cancel=()=>{clearTimeout(timer);timer=null;button.classList.remove('holding');};
 button.addEventListener('pointerdown',event=>{if(event.button!==0||minesDone)return;cancel();held=false;origin=[event.clientX,event.clientY];if(!opened.has(i)){button.classList.add('holding');timer=setTimeout(()=>{held=true;cancel();toggleFlag(i);},450);}});
 button.addEventListener('pointermove',event=>{if(origin&&Math.hypot(event.clientX-origin[0],event.clientY-origin[1])>10)cancel();});
 button.addEventListener('pointerup',cancel);button.addEventListener('pointerleave',cancel);button.addEventListener('pointercancel',()=>{held=true;cancel();});
 button.addEventListener('click',()=>{cancel();if(held){held=false;return;}if(flagMode)toggleFlag(i);else revealMine(i);});
 button.addEventListener('contextmenu',event=>{event.preventDefault();cancel();if(!held)toggleFlag(i);});
 mineButtons.push(button);
}
$('#mines-board').replaceChildren(...mineButtons);
}
function minesStart(fresh=true){if(fresh){mines=Array(mw*mh).fill(0);minesReady=false;}opened=new Set();flags=new Set();minesDone=false;minesLost=false;mineHit=-1;flagMode=false;flagButton.setAttribute('aria-pressed','false');stopSounds();minesRender();}
$('#mines-reset').onclick=()=>minesStart(false);
$('#mines-new').onclick=()=>minesStart(true);buildMineBoard();minesStart();
// Maze
let mazeSize=9,mazeMap=[],mazePos=0,mazeGoal=0,mazeSteps=0,mazeDone=false,mazeTouch=null;
const mazeBoard=$('#maze-board');
function generateMaze(){
 mazeMap=Array(mazeSize*mazeSize).fill(1);const start=mazeSize+1,stack=[start];mazeMap[start]=0;
 while(stack.length){const cell=stack.at(-1),x=cell%mazeSize,y=Math.floor(cell/mazeSize);
  const options=[[0,-2],[0,2],[-2,0],[2,0]].filter(([dx,dy])=>x+dx>0&&x+dx<mazeSize-1&&y+dy>0&&y+dy<mazeSize-1&&mazeMap[(y+dy)*mazeSize+x+dx]===1);
  if(!options.length){stack.pop();continue;}const [dx,dy]=options[Math.floor(Math.random()*options.length)],next=(y+dy)*mazeSize+x+dx;
  mazeMap[cell+dy/2*mazeSize+dx/2]=0;mazeMap[next]=0;stack.push(next);
 }
 mazeGoal=(mazeSize-2)*mazeSize+mazeSize-2;
}
function mazeRender(){
 mazeBoard.style.setProperty('--maze-cols',mazeSize);
 mazeBoard.dataset.size=String(mazeSize);
 mazeBoard.replaceChildren(...mazeMap.map((v,i)=>{const cell=document.createElement('span');cell.className='maze-cell '+(v?'wall':'floor')+(i===mazeGoal?' goal':'')+(i===mazePos?' player':'');cell.setAttribute('aria-hidden','true');if(i===mazeGoal)cell.textContent='⚑';return cell;}));
 mazeBoard.setAttribute('aria-label',`Mê cung ${mazeSize}×${mazeSize}, hàng ${Math.floor(mazePos/mazeSize)+1}, cột ${mazePos%mazeSize+1}. Dùng phím mũi tên.`);
 $('#maze-status').textContent=mazeDone?`Đã đến đích sau ${mazeSteps} bước!`:`${mazeSteps} bước · Đưa chấm sáng tới ⚑`;
 document.querySelectorAll('[data-maze]').forEach(button=>button.disabled=mazeDone);
}
function mazeStart(fresh=false,focus=true){stopSounds();if(fresh||!mazeMap.length)generateMaze();mazePos=mazeSize+1;mazeSteps=0;mazeDone=false;mazeTouch=null;mazeRender();if(focus)mazeBoard.focus({preventScroll:true});}
function mazeMove(direction){
 if(mazeDone)return;const delta={up:-mazeSize,down:mazeSize,left:-1,right:1}[direction],next=mazePos+delta;
 if(delta===undefined||next<0||next>=mazeMap.length||mazeMap[next]!==0)return;
 if(Math.abs(Math.floor(next/mazeSize)-Math.floor(mazePos/mazeSize))+Math.abs(next%mazeSize-mazePos%mazeSize)!==1)return;
 mazePos=next;mazeSteps++;mazeDone=mazePos===mazeGoal;sound(mazeDone?'win':'move');mazeRender();
}
document.querySelectorAll('[data-maze]').forEach(button=>button.onclick=()=>{mazeMove(button.dataset.maze);mazeBoard.focus({preventScroll:true});});
mazeBoard.addEventListener('keydown',event=>{const direction={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'}[event.key];if(direction&&!event.ctrlKey&&!event.metaKey&&!event.altKey){event.preventDefault();mazeMove(direction);}});
mazeBoard.addEventListener('pointerdown',event=>{if(event.button!==0)return;mazeBoard.focus({preventScroll:true});mazeTouch=[event.clientX,event.clientY];mazeBoard.setPointerCapture(event.pointerId);});
mazeBoard.addEventListener('pointerup',event=>{if(!mazeTouch)return;const dx=event.clientX-mazeTouch[0],dy=event.clientY-mazeTouch[1];mazeTouch=null;if(Math.max(Math.abs(dx),Math.abs(dy))>15)mazeMove(Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'down':'up');});
mazeBoard.addEventListener('pointercancel',()=>mazeTouch=null);
$('#maze-reset').onclick=()=>mazeStart(false);$('#maze-new').onclick=()=>mazeStart(true);
$('#maze-size').onchange=event=>{mazeSize=Number(event.target.value);mazeStart(true);};
document.querySelector('[data-game="maze"]').addEventListener('click',()=>requestAnimationFrame(()=>mazeBoard.focus({preventScroll:true})));
mazeStart(true,false);
// Mastermind
let secret=[],masterGuesses=[],masterDraft=Array(4).fill(null),masterSelected=0,masterDone=false;
const masterNames=['Đỏ','Vàng','Xanh dương','Xanh lá','Tím','Hồng'];
const masterEntry=document.createElement('div');masterEntry.className='master-entry';
$('#mastermind-draft').before(masterEntry);
const masterPaletteLabel=document.createElement('p');masterPaletteLabel.className='master-palette-label';masterPaletteLabel.textContent='Chọn màu để điền vào ô đang sáng';
masterEntry.append($('#mastermind-draft'),masterPaletteLabel,$('#mastermind-palette'),document.querySelector('#game-mastermind .master-actions'));
const masterLegend=document.createElement('div');masterLegend.className='master-legend';masterLegend.innerHTML='<span><i class="master-dot exact" aria-hidden="true"></i> Đúng vị trí</span><span><i class="master-dot misplaced" aria-hidden="true"></i> Đúng màu, sai vị trí</span>';
$('#mastermind-board').before(masterLegend);
function masterScore(answer,guess){let exact=0;const left=Array(6).fill(0),right=Array(6).fill(0);for(let i=0;i<4;i++){if(answer[i]===guess[i])exact++;else{left[answer[i]]++;right[guess[i]]++;}}return {exact,misplaced:left.reduce((sum,n,i)=>sum+Math.min(n,right[i]),0)};}
function masterPeg(value,tag='span'){const node=document.createElement(tag);node.className='master-peg';node.dataset.color=value===null?'empty':String(value);node.textContent=value===null?'·':String(value+1);node.setAttribute('aria-label',value===null?'Chưa chọn màu':masterNames[value]);if(tag==='button')node.type='button';return node;}
function masterRender(){
 $('#mastermind-board').replaceChildren(...masterGuesses.map((guess,index)=>{const row=document.createElement('div');row.className='master-row';const label=document.createElement('span');label.className='master-turn';label.textContent=index+1;label.title=`Lượt ${index+1}`;row.append(label,...guess.values.map(v=>masterPeg(v)));const feedback=document.createElement('span');feedback.className='master-feedback';feedback.setAttribute('role','img');feedback.setAttribute('aria-label',`${guess.exact} đúng vị trí, ${guess.misplaced} đúng màu sai vị trí`);feedback.title=feedback.getAttribute('aria-label');for(let i=0;i<4;i++){const dot=document.createElement('i');dot.className='master-dot '+(i<guess.exact?'exact':i<guess.exact+guess.misplaced?'misplaced':'absent');dot.setAttribute('aria-hidden','true');feedback.append(dot);}row.append(feedback);return row;}));
 $('#mastermind-board').hidden=!masterGuesses.length;masterLegend.hidden=!masterGuesses.length;
 masterEntry.hidden=masterDone;
 $('#mastermind-draft').replaceChildren(...masterDraft.map((value,i)=>{const button=masterPeg(value,'button');button.disabled=masterDone;button.setAttribute('aria-label',`Ô ${i+1}: ${value===null?'chưa chọn màu':masterNames[value]}`);button.setAttribute('aria-pressed',String(i===masterSelected));button.onclick=()=>{masterSelected=i;masterRender();};return button;}));
 $('#mastermind-palette').replaceChildren(...masterNames.map((name,value)=>{const button=masterPeg(value,'button');button.title=`${value+1} · ${name}`;button.setAttribute('aria-label',`Chọn ${name}`);button.disabled=masterDone;button.onclick=()=>{masterDraft[masterSelected]=value;const next=Array.from({length:4},(_,i)=>(masterSelected+1+i)%4).find(i=>masterDraft[i]===null);if(next!==undefined)masterSelected=next;sound('move');masterRender();};const item=document.createElement('div');item.className='master-color-option';const label=document.createElement('span');label.textContent=name;item.append(button,label);return item;}));
 $('#mastermind-submit').disabled=masterDone||masterDraft.includes(null);$('#mastermind-clear').disabled=masterDone||masterDraft[masterSelected]===null;
 const answer=$('#mastermind-answer');answer.hidden=!masterDone;answer.replaceChildren();if(masterDone){const label=document.createElement('span');label.textContent='Đáp án:';answer.append(label,...secret.map(v=>masterPeg(v)));}
}
function masterStart(fresh=true){stopSounds();if(fresh||!secret.length){const old=secret.join(',');do{secret=Array.from({length:4},()=>Math.floor(Math.random()*6));}while(secret.join(',')===old);}masterGuesses=[];masterDraft=Array(4).fill(null);masterSelected=0;masterDone=false;$('#mastermind-status').textContent='Lượt 1/10 · Chọn 4 màu rồi gửi đáp án.';masterRender();}
function masterSubmit(){if(masterDone||masterDraft.includes(null))return;const result=masterScore(secret,masterDraft);masterGuesses.push({values:[...masterDraft],...result});masterDone=result.exact===4||masterGuesses.length===10;
 $('#mastermind-status').textContent=result.exact===4?`Chính xác sau ${masterGuesses.length} lượt!`:masterDone?'Đã hết 10 lượt. Xem đáp án bên dưới.':`Lượt ${masterGuesses.length+1}/10 · Vừa đoán: ${result.exact} đúng vị trí, ${result.misplaced} đúng màu sai vị trí.`;
 if(!masterDone){masterDraft=Array(4).fill(null);masterSelected=0;}sound(result.exact===4?'win':masterDone?'lose':'move');masterRender();
}
$('#mastermind-submit').onclick=masterSubmit;
$('#mastermind-clear').onclick=()=>{if(masterDone)return;masterDraft[masterSelected]=null;masterRender();};
$('#mastermind-reset').onclick=()=>masterStart(false);$('#mastermind-new').onclick=()=>masterStart(true);masterStart();
// Rush Hour
const rushLayouts={
 6:[{x:0,y:2,w:2,h:1},{x:2,y:1,w:1,h:2},{x:4,y:0,w:1,h:3},{x:2,y:3,w:2,h:1},{x:3,y:4,w:3,h:1},{x:0,y:0,w:2,h:1}],
 7:[{x:0,y:3,w:2,h:1},{x:2,y:2,w:1,h:2},{x:4,y:2,w:1,h:3},{x:3,y:0,w:3,h:1},{x:0,y:1,w:2,h:1},{x:1,y:5,w:3,h:1},{x:6,y:0,w:1,h:3}],
 8:[{x:0,y:3,w:2,h:1},{x:2,y:2,w:1,h:3},{x:5,y:1,w:1,h:3},{x:3,y:0,w:3,h:1},{x:0,y:1,w:2,h:1},{x:2,y:5,w:3,h:1},{x:6,y:4,w:1,h:3},{x:0,y:7,w:3,h:1}]
};
let rushSize=6,rushExitRow=2,rushCars=[],rushInitial=[],rushSelected=0,rushSteps=0,rushDone=false,rushDrag=null;
const rushBoard=$('#rush-board');
function rushCanMove(cars,index,step){
 const car=cars[index],horizontal=car.h===1,x=car.x+(horizontal?step:0),y=car.y+(horizontal?0:step);
 const escaping=index===0&&horizontal&&step>0&&car.y===rushExitRow;
 if(x<0||y<0||y+car.h>rushSize||(!escaping&&x+car.w>rushSize)||escaping&&x>rushSize)return false;
 return cars.every((other,i)=>i===index||x+car.w<=other.x||other.x+other.w<=x||y+car.h<=other.y||other.y+other.h<=y);
}
function rushShuffle(){const base=structuredClone(rushLayouts[rushSize]),cars=structuredClone(base),turns={6:45,7:75,8:110}[rushSize];for(let i=0;i<turns;i++){const options=cars.flatMap((_,index)=>[-1,1].filter(step=>rushCanMove(cars,index,step)&&!(index===0&&cars[0].x+step>=rushSize-2)).map(step=>({index,step})));if(!options.length)break;const move=options[Math.floor(Math.random()*options.length)],car=cars[move.index];car[car.h===1?'x':'y']+=move.step;}return cars[0].x>=rushSize-2?base:cars;}
function rushArt(car,index){
 const horizontal=car.h===1,length=Math.max(car.w,car.h)*48;
 const body='<rect x="4" y="10" width="6" height="17" rx="2" fill="#263c42"/><rect x="38" y="10" width="6" height="17" rx="2" fill="#263c42"/><rect x="4" y="'+(length-27)+'" width="6" height="17" rx="2" fill="#263c42"/><rect x="38" y="'+(length-27)+'" width="6" height="17" rx="2" fill="#263c42"/><rect x="8" y="3" width="32" height="'+(length-6)+'" rx="9" fill="var(--vehicle)" stroke="var(--vehicle-edge)" stroke-width="2"/><path d="M13 24h22l-3 16H16Z" fill="#d7edf0" stroke="#45646b" stroke-width="1.5"/><path d="M16 '+(length-31)+'h16l3 12H13Z" fill="#aacdd6" stroke="#45646b" stroke-width="1.5"/><rect x="16" y="44" width="16" height="'+(length-81)+'" rx="4" fill="#ffffff28"/><path d="M12 11h7m10 0h7" stroke="#fff3ae" stroke-width="4" stroke-linecap="round"/><path d="M12 '+(length-10)+'h6m12 0h6" stroke="#722d32" stroke-width="3" stroke-linecap="round"/><text x="24" y="'+(length/2+5)+'" text-anchor="middle" fill="#fff" stroke="none" font-family="Arial,sans-serif" font-weight="700" font-size="13">'+(index+1)+'</text>';
 return '<svg viewBox="0 0 '+(horizontal?length+' 48':'48 '+length)+'" aria-hidden="true"><g'+(horizontal?' transform="translate('+length+' 0) rotate(90)"':'')+'>'+body+'</g></svg>';
}
function rushRender(){
 rushBoard.style.setProperty('--rush-size',rushSize);rushBoard.closest('.rush-parking').style.setProperty('--rush-size',rushSize);rushBoard.closest('.rush-parking').style.setProperty('--rush-exit-row',rushExitRow);rushBoard.setAttribute('aria-label',`Bãi đỗ xe ${rushSize}×${rushSize}`);
 rushBoard.replaceChildren(...rushCars.map((car,i)=>{const button=document.createElement('button');button.type='button';button.className='rush-car';button.dataset.car=i;button.style.cssText='--x:'+car.x+';--y:'+car.y+';--w:'+car.w+';--h:'+car.h;button.innerHTML=rushArt(car,i);button.disabled=rushDone;button.setAttribute('aria-label',(i===0?'Xe đỏ':'Xe '+(i+1))+', hướng '+(car.h===1?'ngang':'dọc'));button.setAttribute('aria-pressed',String(i===rushSelected));button.onclick=()=>{rushSelected=i;rushUpdateControls();};button.onkeydown=event=>{const step=car.h===1?{ArrowLeft:-1,ArrowRight:1}[event.key]:{ArrowUp:-1,ArrowDown:1}[event.key];if(step){event.preventDefault();rushSelected=i;rushMove(step,true);}};return button;}));rushUpdateControls();
}
function rushUpdateControls(){
 rushBoard.querySelectorAll('.rush-car').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===rushSelected)));
 const horizontal=rushCars[rushSelected].h===1;$('#rush-back').textContent=horizontal?'←':'↑';$('#rush-forward').textContent=horizontal?'→':'↓';
 $('#rush-selected').textContent=rushDone?'Đã ra khỏi bãi!':rushSelected===0?'Xe đỏ':'Xe '+(rushSelected+1);
 $('#rush-back').disabled=rushDone||!rushCanMove(rushCars,rushSelected,-1);$('#rush-forward').disabled=rushDone||!rushCanMove(rushCars,rushSelected,1);
 $('#rush-status').textContent=rushDone?'Xe đỏ đã ra hẳn khỏi cổng sau '+rushSteps+' lượt!':rushSteps+' lượt · Đưa toàn bộ xe đỏ qua cổng →';
}
function rushMove(amount,focus=false){if(rushDone)return;const car=rushCars[rushSelected],step=Math.sign(amount);let moved=0;for(let i=0;i<Math.abs(amount);i++){if(!rushCanMove(rushCars,rushSelected,step))break;car[car.h===1?'x':'y']+=step;moved++;}if(moved){rushSteps++;rushDone=rushCars[0].x>=rushSize;sound(rushDone?'win':'move');}rushRender();if(focus&&!rushDone)rushBoard.querySelector('[data-car="'+rushSelected+'"]')?.focus({preventScroll:true});}
function rushStart(fresh=false){stopSounds();rushExitRow=Math.floor((rushSize-1)/2);if(fresh||!rushInitial.length)rushInitial=rushShuffle();rushCars=structuredClone(rushInitial);rushSteps=0;rushSelected=0;rushDone=false;rushDrag=null;rushRender();}
 rushBoard.addEventListener('pointerdown',event=>{const button=event.target.closest('.rush-car');if(!button||event.button!==0||rushDone)return;rushSelected=Number(button.dataset.car);rushUpdateControls();button.focus({preventScroll:true});rushDrag={x:event.clientX,y:event.clientY,id:event.pointerId};rushBoard.setPointerCapture(event.pointerId);});
 rushBoard.addEventListener('pointerup',event=>{if(!rushDrag||event.pointerId!==rushDrag.id)return;const car=rushCars[rushSelected],distance=car.h===1?event.clientX-rushDrag.x:event.clientY-rushDrag.y;rushDrag=null;const amount=Math.round(distance/(rushBoard.getBoundingClientRect().width/rushSize));if(amount)rushMove(amount);});
 rushBoard.addEventListener('pointercancel',()=>rushDrag=null);
 $('#rush-back').onclick=()=>rushMove(-1);$('#rush-forward').onclick=()=>rushMove(1);
 $('#rush-reset').onclick=()=>rushStart(false);$('#rush-new').onclick=()=>rushStart(true);$('#rush-size').onchange=event=>{rushSize=Number(event.target.value);rushInitial=[];rushStart(true);};rushStart(true);

// Rotate pipes into one connected water network.
const PIPE_N=1,PIPE_E=2,PIPE_S=4,PIPE_W=8,pipeDirs=[[PIPE_N,0,-1,PIPE_S],[PIPE_E,1,0,PIPE_W],[PIPE_S,0,1,PIPE_N],[PIPE_W,-1,0,PIPE_E]];
let pipesSize=5,pipesSolution=[],pipesTiles=[],pipesInitial=[],pipesTurns=0,pipesDone=false;
const pipesBoard=$('#pipes-board');
const rotatePipe=(mask,turns=1)=>{for(let i=0;i<turns%4;i++)mask=((mask<<1)&15)|((mask>>3)&1);return mask;};
function generatePipes(){
 const total=pipesSize*pipesSize,tree=Array(total).fill(0),seen=new Set([0]),stack=[0];
 while(stack.length){const cell=stack.at(-1),x=cell%pipesSize,y=Math.floor(cell/pipesSize),options=pipeDirs.map(([bit,dx,dy,back])=>({bit,back,x:x+dx,y:y+dy})).filter(next=>next.x>=0&&next.x<pipesSize&&next.y>=0&&next.y<pipesSize&&!seen.has(next.y*pipesSize+next.x));if(!options.length){stack.pop();continue;}const next=options[Math.floor(Math.random()*options.length)],index=next.y*pipesSize+next.x;tree[cell]|=next.bit;tree[index]|=next.back;seen.add(index);stack.push(index);}
 pipesSolution=tree;pipesInitial=tree.map(mask=>rotatePipe(mask,Math.floor(Math.random()*4)));pipesTiles=[...pipesInitial];let guard=0;while(pipePowered().size===total&&pipeValid()&&guard++<4){const index=Math.floor(Math.random()*total);pipesInitial[index]=rotatePipe(pipesInitial[index]);pipesTiles=[...pipesInitial];}
}
function pipePowered(){const reached=new Set([0]),queue=[0];for(let k=0;k<queue.length;k++){const cell=queue[k],x=cell%pipesSize,y=Math.floor(cell/pipesSize),mask=pipesTiles[cell];for(const [bit,dx,dy,back] of pipeDirs){if(!(mask&bit))continue;const xx=x+dx,yy=y+dy,next=yy*pipesSize+xx;if(xx>=0&&xx<pipesSize&&yy>=0&&yy<pipesSize&&(pipesTiles[next]&back)&&!reached.has(next)){reached.add(next);queue.push(next);}}}return reached;}
function pipeValid(){return pipesTiles.every((mask,cell)=>{const x=cell%pipesSize,y=Math.floor(cell/pipesSize);return pipeDirs.every(([bit,dx,dy,back])=>!(mask&bit)||(x+dx>=0&&x+dx<pipesSize&&y+dy>=0&&y+dy<pipesSize&&(pipesTiles[(y+dy)*pipesSize+x+dx]&back)));});}
function pipeSvg(mask,powered,source){let paths='';for(const [bit,dx,dy] of pipeDirs)if(mask&bit)paths+=`M24 24L${24+dx*22} ${24+dy*22}`;return `<svg viewBox="0 0 48 48" aria-hidden="true"><g class="pipe-lines"><path d="${paths}"/><circle cx="24" cy="24" r="5"/></g>${source?'<circle class="pipe-source" cx="24" cy="24" r="9"/><path class="pipe-drop" d="M24 15c-7 8-8 12-8 16a8 8 0 0 0 16 0c0-4-1-8-8-16Z"/>':''}</svg>`;}
function pipesRender(){
 const powered=pipePowered();pipesBoard.style.setProperty('--pipes-size',pipesSize);pipesBoard.dataset.size=String(pipesSize);
 pipesBoard.replaceChildren(...pipesTiles.map((mask,i)=>{const button=document.createElement('button');button.type='button';button.className='pipe-tile'+(powered.has(i)?' powered':'')+(i===0?' source':'');button.innerHTML=pipeSvg(mask,powered.has(i),i===0);button.disabled=pipesDone;button.setAttribute('aria-label',`Ô hàng ${Math.floor(i/pipesSize)+1}, cột ${i%pipesSize+1}${powered.has(i)?', có nước':''}`);button.onclick=()=>{if(pipesDone)return;pipesTiles[i]=rotatePipe(mask);pipesTurns++;const reached=pipePowered();pipesDone=reached.size===pipesTiles.length&&pipeValid();sound(pipesDone?'win':'move');pipesRender();};return button;}));
 $('#pipes-status').textContent=pipesDone?`Tất cả ${pipesTiles.length} đoạn ống đã thông nước sau ${pipesTurns} lượt!`:`${powered.size}/${pipesTiles.length} ô có nước · ${pipesTurns} lượt xoay`;
}
function pipesStart(fresh=false){stopSounds();if(fresh||!pipesInitial.length)generatePipes();pipesTiles=[...pipesInitial];pipesTurns=0;pipesDone=false;pipesRender();}
$('#pipes-new').onclick=()=>pipesStart(true);$('#pipes-reset').onclick=()=>pipesStart(false);$('#pipes-size').onchange=event=>{pipesSize=Number(event.target.value);pipesInitial=[];pipesStart(true);};pipesStart(true);
