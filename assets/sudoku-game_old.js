/* credit: giasu.ai.vn */
import {setGameControlIcon,setGameControlLabel} from './game-controls.js';
import {sudokuCandidates} from './extra-game-rules.js';
import {makeSudokuLevel,sudokuLevels} from './sudoku-levels.js';
import {candidateNotes,findSudokuStep,makeSudokuPractice,sudokuTechniques} from './sudoku-training.js';
import {sound} from './puzzle-audio.js';

const $=selector=>document.querySelector(selector),board=$('#sudoku-board'),status=$('#sudoku-status');
const controlBar=document.createElement('div');
controlBar.className='sudoku-control-bar';
$('#sudoku-keys').before(controlBar);
controlBar.append($('#sudoku-keys'),$('#game-sudoku .sudoku-tools'));
const arrowButton=document.createElement('button');
arrowButton.type='button';arrowButton.id='sudoku-arrows';arrowButton.setAttribute('aria-pressed','false');
$('#sudoku-practice').before(arrowButton);
const toolIcons={'sudoku-notes':'notes','sudoku-erase':'erase','sudoku-auto':'autoNotes','sudoku-fill-singles':'autoFill','sudoku-undo':'undo','sudoku-multi':'selectMany','sudoku-hint':'hint','sudoku-practice':'board4'};
for(const [id,icon] of Object.entries(toolIcons)){
 const button=$(`#${id}`);
 setGameControlIcon(button,icon,id==='sudoku-undo'?'Hoàn tác (Ctrl+Z / ⌘Z)':button.textContent.trim());
}
setGameControlIcon(arrowButton,'arrowSolid','Bật vẽ mũi tên liền');
$('#sudoku-keys').querySelectorAll('[data-sudoku-number]').forEach(button=>{
 const number=button.dataset.sudokuNumber;
 button.replaceChildren();
 const face=document.createElement('span'),count=document.createElement('span');
 face.className='sudoku-key-number';face.textContent=number;
 count.className='sudoku-remaining';count.setAttribute('aria-hidden','true');
 button.append(face,count);
});
const peers=(a,b)=>Math.floor(a/9)===Math.floor(b/9)||a%9===b%9||Math.floor(a/27)===Math.floor(b/27)&&Math.floor(a%9/3)===Math.floor(b%9/3);
let puzzle,solution,cells,notes,selected=-1,highlight=0,armedDigit=0,done=false,notesMode=false,multiMode=false,multi=new Set(),history=[],practice=null,saved=null,elapsed=0,hintLevel=0,hintCell=-1,checked=false,revealCount=0,autoFill=false,arrowMode='off',arrows=[],arrowDrag=null,pendingArrowStart=-1;
const focusCell=()=>board.querySelector(`[data-cell="${selected}"]`)?.focus({preventScroll:true});
const say=message=>{status.textContent=message;};
const snapshot=()=>({cells:[...cells],notes:notes.map(group=>new Set(group)),arrows:arrows.map(arrow=>({...arrow})),selected,highlight,armedDigit,done,checked,practiceLeft:practice&&new Set(practice.left)});
function remember(){history.push(snapshot());if(history.length>100)history.shift();}
function restore(state){cells=state.cells;notes=state.notes;arrows=state.arrows||[];selected=state.selected;highlight=state.highlight;armedDigit=state.armedDigit;done=state.done;checked=state.checked;if(practice&&state.practiceLeft)practice.left=state.practiceLeft;render();focusCell();}
function resetReveal(){revealCount=0;$('#sudoku-reveal').style.removeProperty('--solution-fill');delete $('#sudoku-reveal').dataset.solutionProgress;$('#sudoku-reveal').setAttribute('aria-pressed','false');}
function conflict(i){return Boolean(cells[i])&&cells.some((value,j)=>j!==i&&value===cells[i]&&peers(i,j));}
function renderArrows(){
 board.querySelector('.sudoku-arrow-layer')?.remove();
 board.querySelectorAll('.arrow-origin').forEach(cell=>cell.classList.remove('arrow-origin'));
 if(pendingArrowStart>=0)board.children[pendingArrowStart]?.classList.add('arrow-origin');
 const lines=[...arrows];if(arrowDrag?.end>=0&&arrowDrag.end!==arrowDrag.start)lines.push({...arrowDrag,style:arrowMode,preview:true});
 if(!lines.length)return;
 const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');
 svg.classList.add('sudoku-arrow-layer');svg.setAttribute('viewBox',`0 0 ${board.clientWidth} ${board.clientHeight}`);svg.setAttribute('aria-hidden','true');
 svg.innerHTML='<defs><marker id="sudoku-arrow-tip" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M1 1 7 4 1 7Z"/></marker></defs>';
 for(const arrow of lines){
  const from=board.children[arrow.start],to=board.children[arrow.end];if(!from||!to)continue;
  const x1=from.offsetLeft+from.offsetWidth/2,y1=from.offsetTop+from.offsetHeight/2,x2=to.offsetLeft+to.offsetWidth/2,y2=to.offsetTop+to.offsetHeight/2;
  const length=Math.hypot(x2-x1,y2-y1)||1,ux=(x2-x1)/length,uy=(y2-y1)/length,gap=Math.min(from.offsetWidth,from.offsetHeight)*.27;
  const line=document.createElementNS(ns,'line');line.setAttribute('x1',x1+ux*gap);line.setAttribute('y1',y1+uy*gap);line.setAttribute('x2',x2-ux*gap);line.setAttribute('y2',y2-uy*gap);line.setAttribute('marker-end','url(#sudoku-arrow-tip)');
  if(arrow.style==='dashed')line.classList.add('dashed');if(arrow.preview)line.classList.add('preview');svg.append(line);
 }
 board.append(svg);
}
function syncArrowButton(){
 const icon=arrowMode==='dashed'?'arrowDashed':'arrowSolid';
 const label=arrowMode==='off'?'Bật vẽ mũi tên liền':arrowMode==='solid'?'Mũi tên liền · bấm để chuyển nét đứt':'Mũi tên nét đứt · bấm để tắt';
 if(arrowButton.dataset.controlIcon!==icon)setGameControlIcon(arrowButton,icon,label);else setGameControlLabel(arrowButton,label);
 arrowButton.dataset.arrowMode=arrowMode;arrowButton.setAttribute('aria-pressed',String(arrowMode!=='off'));
 board.classList.toggle('arrow-mode',arrowMode!=='off');
}
function render(){
 board.replaceChildren(...cells.map((value,i)=>{
  const button=document.createElement('button');button.type='button';button.dataset.cell=i;
  button.classList.toggle('given',Boolean(puzzle[i]));button.classList.toggle('selected',i===selected||multi.has(i));
  button.classList.toggle('peer',selected>=0&&i!==selected&&peers(i,selected));
  button.classList.toggle('same-number',Boolean(highlight)&&value===highlight);
  button.classList.toggle('wrong',conflict(i)||checked&&value&&!puzzle[i]&&solution&&value!==solution[i]);
  button.classList.toggle('practice-pattern',Boolean(practice&&hintLevel>=2&&practice.step.pattern.includes(i)));
  button.classList.toggle('practice-target',Boolean(practice&&hintLevel>=3&&practice.step.kind==='place'&&practice.step.cell===i));
  button.setAttribute('aria-label',`Hàng ${Math.floor(i/9)+1}, cột ${i%9+1}: ${value||'trống'}${puzzle[i]?', số cho sẵn':''}`);
  button.setAttribute('aria-pressed',String(i===selected||multi.has(i)));
  button.setAttribute('aria-invalid',String(button.classList.contains('wrong')));
  if(value)button.textContent=value;
  else if(notes[i]?.size){const grid=document.createElement('span');grid.className='sudoku-notes-grid';for(let digit=1;digit<=9;digit++){
   const mark=document.createElement('i');mark.dataset.note=digit;mark.textContent=notes[i].has(digit)?digit:'';
   mark.classList.toggle('highlighted',Boolean(highlight)&&digit===highlight&&notes[i].has(digit));
   mark.classList.toggle('practice-target',Boolean(practice&&hintLevel>=3&&practice.left.has(`${i}:${digit}`)));
   grid.append(mark);
  }button.append(grid);}
  return button;
 }));
 renderArrows();syncArrowButton();
 $('#sudoku-keys').querySelectorAll('[data-sudoku-number]').forEach(button=>{
  const digit=Number(button.dataset.sudokuNumber),remaining=9-cells.filter(n=>n===digit).length;
  button.disabled=done;button.classList.toggle('sudoku-used',digit>0&&remaining<=0);
  button.classList.toggle('sudoku-number-active',digit>0&&digit===highlight);
  button.setAttribute('aria-pressed',String(digit>0&&digit===highlight));
  if(digit>0){button.setAttribute('aria-label',`Số ${digit}, còn ${remaining} ô`);button.title=`Còn ${remaining} ô`;button.querySelector('.sudoku-remaining').textContent=remaining;}
 });
 $('#sudoku-notes').setAttribute('aria-pressed',String(notesMode));$('#sudoku-multi').setAttribute('aria-pressed',String(multiMode));
 $('#sudoku-fill-singles').setAttribute('aria-pressed',String(autoFill));
 setGameControlLabel($('#sudoku-fill-singles'),autoFill?'Tắt tự động điền':'Bật tự động điền');
 $('#sudoku-practice').setAttribute('aria-pressed',String(Boolean(practice)));
 $('#sudoku-undo').disabled=!history.length;
 $('#sudoku-fill-singles').disabled=Boolean(practice);
 $('#sudoku-reveal').disabled=done||Boolean(practice);
 setGameControlLabel($('#sudoku-reveal'),revealCount===10?'Đã hiện đáp án':`Hiện đáp án (${revealCount}/10)`);
}
function clearHints(){hintLevel=0;hintCell=-1;checked=false;}
function newGame(){
 ({puzzle,solution}=makeSudokuLevel($('#sudoku-level').value));cells=[...puzzle];notes=Array.from({length:81},()=>new Set());
 selected=-1;highlight=0;armedDigit=0;done=false;notesMode=false;multiMode=false;multi.clear();arrows=[];arrowDrag=null;pendingArrowStart=-1;history=[];clearHints();resetReveal();elapsed=0;$('#sudoku-timer').textContent='0:00';say(`${sudokuLevels.find(level=>level.id===$('#sudoku-level').value)?.name||'Sudoku'} · Chọn ô rồi bấm số. Bạn có thể dùng ghi chú hoặc luyện từng kỹ thuật.`);render();
 if(!$('#game-sudoku').hidden)focusCell();
}
function finish(){if(done||practice||!cells.every((value,i)=>value===solution[i]))return;done=true;sound('win');say(`Chính xác! Hoàn thành trong ${$('#sudoku-timer').textContent}.`);render();}
function completePractice(){practice.done=true;done=true;hintLevel=0;sound('win');say(`Chính xác! ${practice.step.text} Chọn “Bài tiếp” để luyện tiếp.`);render();}
function fillRemainingSingles(saveHistory=false){
 if(!autoFill||practice||done)return 0;
 let filled=0;
 while(true){
  const singles=notes.flatMap((group,i)=>!cells[i]&&group.size===1?[[i,[...group][0]]]:[])
   .filter(([i,digit])=>digit===solution[i]&&sudokuCandidates(cells,i).includes(digit));
  if(!singles.length)break;
  if(saveHistory&&filled===0)remember();
  for(const [i,digit] of singles){cells[i]=digit;notes[i].clear();}
  for(let i=0;i<81;i++)if(!cells[i])for(const [cell,digit] of singles)if(peers(i,cell))notes[i].delete(digit);
  for(const [i] of singles)multi.delete(i);
  filled+=singles.length;
 }
 return filled;
}
function removePracticeCandidate(i,digit){
 if(!practice||practice.done||!notes[i].has(digit))return;
 const key=`${i}:${digit}`;if(!practice.left.has(key)){say('Ứng viên này chưa thể loại bằng kỹ thuật đang luyện.');sound('error');return;}
 remember();notes[i].delete(digit);practice.left.delete(key);highlight=digit;selected=i;
 if(!practice.left.size)completePractice();else{say(`Đúng rồi. Còn ${practice.left.size} ứng viên cần loại.`);render();}
}
function enterNumber(digit,forceValue=false){
 if(done)return;
 if(practice?.step.kind==='remove'){
  if(selected<0||!digit){highlight=digit;render();return;}
  removePracticeCandidate(selected,digit);focusCell();return;
 }
 if(!practice&&multi.size&&digit){
  remember();const all=[...multi].every(i=>notes[i].has(digit));
  for(const i of multi)if(!puzzle[i]&&!cells[i])all?notes[i].delete(digit):notes[i].add(digit);
  highlight=digit;const filled=fillRemainingSingles();
  say(`Đã ${all?'bỏ':'thêm'} ghi chú ${digit} cho ${multi.size} ô.${filled?` Tự động điền thêm ${filled} ô.`:''}`);
  render();finish();return;
 }
 if(selected<0){armedDigit=armedDigit===digit?0:digit;highlight=armedDigit;render();return;}
 if(practice){const step=practice.step;if(selected!==step.cell||digit!==step.digit){say('Chưa đúng. Hãy xem các ô được tô sáng hoặc dùng gợi ý.');sound('error');return;}}
 if(puzzle[selected])return;
 remember();highlight=digit;if(!forceValue)armedDigit=0;clearHints();
 if(notesMode&&digit&&!practice&&!forceValue){if(cells[selected])return;notes[selected].has(digit)?notes[selected].delete(digit):notes[selected].add(digit);say('Đã cập nhật ghi chú.');}
 else{
  cells[selected]=practice?digit:(cells[selected]===digit?0:digit);notes[selected].clear();
  if(digit)for(let i=0;i<81;i++)if(i!==selected&&peers(i,selected))notes[i].delete(digit);
  if(practice){completePractice();focusCell();return;}
  say(conflict(selected)?'Số bị trùng trong hàng, cột hoặc ô vuông 3×3.':`Đã điền ${cells.filter(Boolean).length}/81 ô.`);
  if(conflict(selected))sound('error');
 }
 if(!practice){const filled=fillRemainingSingles();if(filled)say(`Tự động điền thêm ${filled} ô chỉ còn một ghi chú.`);}
 if(forceValue){selected=-1;highlight=armedDigit;}
 render();focusCell();finish();
}
let dragCells=null,suppressBoardClick=false;
function arrowCellAt(x,y){const cell=document.elementFromPoint(x,y)?.closest?.('[data-cell]');return cell&&board.contains(cell)?Number(cell.dataset.cell):-1;}
function placeArrow(from,to){
 if(from<0||to<0||from===to)return;
 remember();const found=arrows.findIndex(arrow=>arrow.start===from&&arrow.end===to);
 const removed=found>=0&&arrows[found].style===arrowMode;
 if(removed)arrows.splice(found,1);
 else if(found>=0)arrows[found].style=arrowMode;
 else arrows.push({start:from,end:to,style:arrowMode});
 say(`Đã ${removed?'xóa':'vẽ'} mũi tên ${arrowMode==='dashed'?'nét đứt':'liền'}.`);
 render();
}
board.addEventListener('pointerdown',event=>{
 if(arrowMode==='off'||event.button!==0)return;
 const cell=event.target.closest('[data-cell]');if(!cell)return;
 event.preventDefault();arrowDrag={start:Number(cell.dataset.cell),end:-1};
 board.setPointerCapture(event.pointerId);
});
board.addEventListener('pointermove',event=>{
 if(!arrowDrag)return;
 const end=arrowCellAt(event.clientX,event.clientY);
 if(end!==arrowDrag.end){arrowDrag.end=end;renderArrows();}
});
board.addEventListener('pointerup',event=>{
 if(!arrowDrag)return;
 const from=arrowDrag.start,to=arrowCellAt(event.clientX,event.clientY),dragged=to>=0&&to!==from;
 arrowDrag=null;
 if(dragged){placeArrow(from,to);pendingArrowStart=-1;}
 else if(to>=0){if(pendingArrowStart>=0&&pendingArrowStart!==to){const start=pendingArrowStart;pendingArrowStart=-1;placeArrow(start,to);}else{pendingArrowStart=to;say('Chọn ô đích hoặc kéo sang ô khác để vẽ mũi tên.');renderArrows();}}
 else renderArrows();
});
board.addEventListener('pointercancel',()=>{arrowDrag=null;renderArrows();});
board.addEventListener('pointerdown',event=>{
 if(arrowMode!=='off'||!multiMode||event.pointerType!=='mouse'||event.button!==0||practice||done)return;
 const cell=event.target.closest('[data-cell]');if(!cell||cells[Number(cell.dataset.cell)])return;
 dragCells=new Set([Number(cell.dataset.cell)]);
});
function trackDragCell(event,finish=false){
 if(!dragCells||!finish&&!(event.buttons&1))return;
 const cell=event.target.closest?.('[data-cell]');if(!cell||!board.contains(cell))return;
 const i=Number(cell.dataset.cell);if(cells[i])return;
 dragCells.add(i);cell.classList.add('selected');
}
board.addEventListener('pointermove',trackDragCell);
board.addEventListener('pointerover',trackDragCell);
document.addEventListener('pointerup',event=>{
 if(!dragCells)return;
 trackDragCell(event,true);
 if(dragCells.size>1){multi=new Set(dragCells);selected=-1;highlight=0;armedDigit=0;suppressBoardClick=true;
  say(`Đã chọn ${multi.size} ô. Bấm một số để thêm hoặc bỏ ghi chú.`);render();}
 dragCells=null;
 setTimeout(()=>{suppressBoardClick=false;},0);
});
board.addEventListener('click',event=>{
 if(arrowMode!=='off')return;
 if(suppressBoardClick){suppressBoardClick=false;return;}
 const button=event.target.closest('[data-cell]');if(!button)return;const i=Number(button.dataset.cell),note=event.target.closest('[data-note]');
 if(practice?.step.kind==='remove'&&note&&notes[i].has(Number(note.dataset.note))){removePracticeCandidate(i,Number(note.dataset.note));focusCell();return;}
 if(multi.size){multi.clear();selected=i;armedDigit=0;highlight=cells[i]||0;}
 else if(selected===i){selected=-1;armedDigit=0;highlight=cells[i]||0;}
 else if(selected<0&&armedDigit&&!cells[i]&&!practice){selected=i;enterNumber(armedDigit,true);return;}
 else{multi.clear();selected=i;armedDigit=0;highlight=cells[i]||0;}
 render();focusCell();
});
document.addEventListener('keydown',event=>{
 if($('#game-sudoku').hidden||event.target.closest('input,select,textarea,[contenteditable="true"]')||event.target.closest('.game-panel')&&!event.target.closest('#game-sudoku'))return;
 if((event.ctrlKey||event.metaKey)&&!event.altKey&&!event.shiftKey&&event.key.toLowerCase()==='z'){
  if(history.length){event.preventDefault();$('#sudoku-undo').click();}
  return;
 }
 if(event.ctrlKey||event.metaKey||event.altKey)return;
 if(/^[1-9]$/.test(event.key)){event.preventDefault();enterNumber(Number(event.key));return;}
 if(['Backspace','Delete','0'].includes(event.key)){event.preventDefault();enterNumber(0);return;}
 const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-9,ArrowDown:9}[event.key];
 if(delta){event.preventDefault();multi.clear();selected=Math.max(0,Math.min(80,selected+delta));armedDigit=0;highlight=cells[selected]||0;render();focusCell();}
});
$('#sudoku-keys').addEventListener('click',event=>{const button=event.target.closest('[data-sudoku-number]');if(button)enterNumber(Number(button.dataset.sudokuNumber));});
$('#sudoku-erase').onclick=()=>enterNumber(0);
$('#sudoku-notes').onclick=()=>{notesMode=!notesMode;say(notesMode?'Ghi chú: chọn ô rồi chạm một số để thêm hoặc bỏ.':'Đã tắt ghi chú.');render();};
$('#sudoku-multi').onclick=()=>{if(practice)return;multiMode=!multiMode;multi.clear();selected=-1;armedDigit=0;say(multiMode?'Quét chuột qua các ô trống rồi bấm số để thêm hoặc bỏ ghi chú.':'Đã tắt chọn nhiều ô.');render();};
arrowButton.onclick=()=>{arrowMode=arrowMode==='off'?'solid':arrowMode==='solid'?'dashed':'off';arrowDrag=null;pendingArrowStart=-1;if(arrowMode!=='off'){multiMode=false;multi.clear();}say(arrowMode==='off'?'Đã tắt vẽ mũi tên.':`Vẽ mũi tên ${arrowMode==='dashed'?'nét đứt':'liền'}: kéo giữa hai ô, hoặc chạm lần lượt ô đầu và ô cuối.`);render();};
$('#sudoku-auto').onclick=()=>{
 if(done)return;remember();notes=practice?practice.baseNotes.map(group=>new Set(group)):candidateNotes(cells);
 if(practice?.step.kind==='remove')practice.left=new Set(practice.step.remove.map(([i,n])=>`${i}:${n}`));
 const filled=fillRemainingSingles();
 say(`Đã tự điền các ứng viên hợp lệ vào mọi ô trống.${filled?` Tự động điền thêm ${filled} ô.`:''}`);render();finish();
};
$('#sudoku-fill-singles').onclick=()=>{
 if(practice)return;
 autoFill=!autoFill;
 const filled=autoFill?fillRemainingSingles(true):0;
 say(autoFill?`Đã bật tự động điền.${filled?` Đã điền ${filled} ô chỉ còn một ghi chú.`:''}`:'Đã tắt tự động điền.');
 render();finish();
};
$('#sudoku-undo').onclick=()=>{const state=history.pop();if(!state)return;restore(state);say('Đã hoàn tác một bước.');};
$('#sudoku-check').onclick=()=>{
 if(practice){say(practice.step.kind==='place'?'Hãy tìm ô và số bắt buộc.':`Còn ${practice.left.size} ứng viên cần loại.`);return;}
 checked=true;const wrong=cells.filter((value,i)=>value&&value!==solution[i]).length;
 say(wrong?`Có ${wrong} ô chưa đúng; chúng được tô đỏ.`:'Các số đã điền đều đúng.');render();
};
$('#sudoku-reset').onclick=()=>{if(practice){nextPractice();return;}cells=[...puzzle];notes=Array.from({length:81},()=>new Set());arrows=[];pendingArrowStart=-1;selected=-1;highlight=0;armedDigit=0;done=false;history=[];clearHints();resetReveal();say('Đã làm lại ván hiện tại.');render();focusCell();};
$('#sudoku-reveal').onclick=()=>{if(done||practice)return;revealCount=10;cells=[...solution];notes=Array.from({length:81},()=>new Set());done=true;selected=-1;highlight=0;$('#sudoku-reveal').setAttribute('aria-pressed','true');say('Đã hiện đáp án. Bấm Làm lại hoặc Ván mới để tự giải tiếp.');render();};
$('#sudoku-new').onclick=()=>{if(practice)exitPractice();newGame();};$('#sudoku-level').onchange=()=>{if(practice)exitPractice();newGame();};
$('#sudoku-hint').onclick=()=>{
 if(done)return;
 if(practice){hintLevel=Math.min(3,hintLevel+1);const {step}=practice;
  say(hintLevel===1?sudokuTechniques.find(t=>t.id===$('#sudoku-technique').value).help:hintLevel===2?'Các ô được tô sáng chứa quy luật cần tìm.':step.text);
  if(hintLevel===3&&step.kind==='place')selected=step.cell;
  render();return;
 }
 const wrong=cells.findIndex((value,i)=>value&&value!==solution[i]);if(wrong>=0){selected=wrong;checked=true;say('Ô được chọn chứa một số chưa đúng.');render();return;}
 const candidate=candidateNotes(cells),step=findSudokuStep(cells,candidate,'single')||findSudokuStep(cells,candidate,'hidden');
 if(!step){say('Chưa tìm thấy bước đơn giản; hãy dùng ghi chú để loại trừ thêm.');return;}
 if(hintCell!==step.cell){hintCell=step.cell;hintLevel=0;}hintLevel=Math.min(3,hintLevel+1);
 say(hintLevel===1?'Hãy xem hàng, cột và ô vuông quanh ô còn trống.':hintLevel===2?'Ô được chọn có một số bắt buộc.':step.text);
 if(hintLevel>=2)selected=step.cell;render();
};
const techniqueSelect=$('#sudoku-technique');techniqueSelect.replaceChildren(...[...new Set(sudokuTechniques.map(t=>t.group))].map(group=>{const node=document.createElement('optgroup');node.label=group;node.append(...sudokuTechniques.filter(t=>t.group===group).map(technique=>{const option=document.createElement('option');option.value=technique.id;option.disabled=!technique.available;option.textContent=technique.available?technique.name:`${technique.name} · đang bổ sung`;return option;}));return node;}));
function nextPractice(){
 const exercise=makeSudokuPractice(techniqueSelect.value);
 if(!exercise){say('Chưa tạo được bài phù hợp. Hãy bấm Bài tiếp để thử lại.');return;}
 puzzle=[...exercise.puzzle];solution=null;cells=[...puzzle];notes=exercise.notes.map(group=>new Set(group));
 practice={step:exercise.step,baseNotes:exercise.notes.map(group=>new Set(group)),left:new Set((exercise.step.remove||[]).map(([i,n])=>`${i}:${n}`)),done:false};
 selected=-1;highlight=0;armedDigit=0;notesMode=exercise.step.kind==='remove';multiMode=false;multi.clear();arrows=[];arrowDrag=null;pendingArrowStart=-1;done=false;history=[];hintLevel=0;hintCell=-1;checked=false;
 say(`${sudokuTechniques.find(t=>t.id===techniqueSelect.value).name}: ${sudokuTechniques.find(t=>t.id===techniqueSelect.value).help}`);render();
}
function enterPractice(){if(practice)return;saved={puzzle,solution,cells,notes,arrows,selected,highlight,armedDigit,done,notesMode,multiMode,history,elapsed,checked};
 $('#sudoku-practice-bar').hidden=false;$('#sudoku-timer').hidden=true;nextPractice();}
function exitPractice(){if(!practice||!saved)return;({puzzle,solution,cells,notes,arrows,selected,highlight,armedDigit,done,notesMode,multiMode,history,elapsed,checked}=saved);
 practice=null;saved=null;multi.clear();hintLevel=0;hintCell=-1;$('#sudoku-practice-bar').hidden=true;$('#sudoku-timer').hidden=false;say('Đã trở lại ván Sudoku trước đó.');render();}
$('#sudoku-practice').onclick=()=>practice?exitPractice():enterPractice();
$('#sudoku-practice-next').onclick=nextPractice;$('#sudoku-practice-exit').onclick=exitPractice;techniqueSelect.onchange=nextPractice;
setInterval(()=>{if(done||practice||document.hidden)return;elapsed++;$('#sudoku-timer').textContent=`${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,'0')}`;},1000);
newGame();
