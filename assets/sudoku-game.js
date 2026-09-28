/* credit: giasu.ai.vn */
import {setGameControlLabel} from './game-controls.js';
import {sudokuCandidates} from './extra-game-rules.js';
import {makeSudokuLevel,sudokuLevels} from './sudoku-levels.js';
import {candidateNotes,findSudokuStep,makeSudokuPractice,sudokuTechniques} from './sudoku-training.js';
import {sound} from './puzzle-audio.js';

const $=selector=>document.querySelector(selector),board=$('#sudoku-board'),status=$('#sudoku-status');
const peers=(a,b)=>Math.floor(a/9)===Math.floor(b/9)||a%9===b%9||Math.floor(a/27)===Math.floor(b/27)&&Math.floor(a%9/3)===Math.floor(b%9/3);
let puzzle,solution,cells,notes,selected=-1,highlight=0,done=false,notesMode=false,multiMode=false,multi=new Set(),history=[],practice=null,saved=null,elapsed=0,hintLevel=0,hintCell=-1,checked=false,revealCount=0;
const focusCell=()=>board.querySelector(`[data-cell="${selected}"]`)?.focus({preventScroll:true});
const say=message=>{status.textContent=message;};
const snapshot=()=>({cells:[...cells],notes:notes.map(group=>new Set(group)),selected,highlight,done,checked,practiceLeft:practice&&new Set(practice.left)});
function remember(){history.push(snapshot());if(history.length>100)history.shift();}
function restore(state){cells=state.cells;notes=state.notes;selected=state.selected;highlight=state.highlight;done=state.done;checked=state.checked;if(practice&&state.practiceLeft)practice.left=state.practiceLeft;render();focusCell();}
function resetReveal(){revealCount=0;$('#sudoku-reveal').style.removeProperty('--solution-fill');delete $('#sudoku-reveal').dataset.solutionProgress;$('#sudoku-reveal').setAttribute('aria-pressed','false');}
function conflict(i){return Boolean(cells[i])&&cells.some((value,j)=>j!==i&&value===cells[i]&&peers(i,j));}
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
 $('#sudoku-keys').querySelectorAll('[data-sudoku-number]').forEach(button=>{
  const digit=Number(button.dataset.sudokuNumber),remaining=9-cells.filter(n=>n===digit).length;
  button.disabled=done;button.classList.toggle('sudoku-used',digit>0&&remaining<=0);
  button.classList.toggle('sudoku-number-active',digit>0&&digit===highlight);
  if(digit>0){button.setAttribute('aria-label',`Số ${digit}, còn ${remaining} ô`);button.title=`Còn ${remaining} ô`;}
 });
 $('#sudoku-notes').setAttribute('aria-pressed',String(notesMode));$('#sudoku-multi').setAttribute('aria-pressed',String(multiMode));
 $('#sudoku-practice').setAttribute('aria-pressed',String(Boolean(practice)));
 $('#sudoku-undo').disabled=!history.length;
 $('#sudoku-fill-singles').disabled=done||Boolean(practice)||!notes.some((group,i)=>!cells[i]&&group.size===1);
 $('#sudoku-reveal').disabled=done||Boolean(practice);
 setGameControlLabel($('#sudoku-reveal'),revealCount===10?'Đã hiện đáp án':`Hiện đáp án (${revealCount}/10)`);
}
function clearHints(){hintLevel=0;hintCell=-1;checked=false;}
function newGame(){
 ({puzzle,solution}=makeSudokuLevel($('#sudoku-level').value));cells=[...puzzle];notes=Array.from({length:81},()=>new Set());
 selected=puzzle.findIndex(n=>!n);highlight=0;done=false;notesMode=false;multiMode=false;multi.clear();history=[];clearHints();resetReveal();elapsed=0;$('#sudoku-timer').textContent='0:00';say(`${sudokuLevels.find(level=>level.id===$('#sudoku-level').value)?.name||'Sudoku'} · Chọn ô rồi bấm số. Bạn có thể dùng ghi chú hoặc luyện từng kỹ thuật.`);render();
 if(!$('#game-sudoku').hidden)focusCell();
}
function finish(){if(!cells.every((value,i)=>value===solution[i]))return;done=true;sound('win');say(`Chính xác! Hoàn thành trong ${$('#sudoku-timer').textContent}.`);render();}
function completePractice(){practice.done=true;done=true;hintLevel=0;sound('win');say(`Chính xác! ${practice.step.text} Chọn “Bài tiếp” để luyện tiếp.`);render();}
function removePracticeCandidate(i,digit){
 if(!practice||practice.done||!notes[i].has(digit))return;
 const key=`${i}:${digit}`;if(!practice.left.has(key)){say('Ứng viên này chưa thể loại bằng kỹ thuật đang luyện.');sound('error');return;}
 remember();notes[i].delete(digit);practice.left.delete(key);highlight=digit;selected=i;
 if(!practice.left.size)completePractice();else{say(`Đúng rồi. Còn ${practice.left.size} ứng viên cần loại.`);render();}
}
function enterNumber(digit){
 if(done)return;
 if(practice?.step.kind==='remove'){
  if(selected<0||!digit){highlight=digit;render();return;}
  removePracticeCandidate(selected,digit);focusCell();return;
 }
 if(selected<0){highlight=highlight===digit?0:digit;render();return;}
 if(practice){const step=practice.step;if(selected!==step.cell||digit!==step.digit){say('Chưa đúng. Hãy xem các ô được tô sáng hoặc dùng gợi ý.');sound('error');return;}}
 if(!practice&&multiMode&&multi.size>1&&notesMode&&digit){remember();const all=[...multi].every(i=>notes[i].has(digit));for(const i of multi)if(!puzzle[i]&&!cells[i])all?notes[i].delete(digit):notes[i].add(digit);highlight=digit;render();say('Đã cập nhật ghi chú cho các ô được chọn.');return;}
 if(puzzle[selected])return;
 remember();highlight=digit;clearHints();
 if(notesMode&&digit&&!practice){if(cells[selected])return;notes[selected].has(digit)?notes[selected].delete(digit):notes[selected].add(digit);say('Đã cập nhật ghi chú.');}
 else{
  cells[selected]=practice?digit:(cells[selected]===digit?0:digit);notes[selected].clear();
  if(digit)for(let i=0;i<81;i++)if(i!==selected&&peers(i,selected))notes[i].delete(digit);
  if(practice){completePractice();focusCell();return;}
  say(conflict(selected)?'Số bị trùng trong hàng, cột hoặc ô vuông 3×3.':`Đã điền ${cells.filter(Boolean).length}/81 ô.`);
  if(conflict(selected))sound('error');
 }
 render();focusCell();finish();
}
board.addEventListener('click',event=>{
 const button=event.target.closest('[data-cell]');if(!button)return;const i=Number(button.dataset.cell),note=event.target.closest('[data-note]');
 if(practice?.step.kind==='remove'&&note&&notes[i].has(Number(note.dataset.note))){removePracticeCandidate(i,Number(note.dataset.note));focusCell();return;}
 if(multiMode&&!practice){multi.has(i)?multi.delete(i):multi.add(i);selected=i;}else{multi.clear();selected=i;}
 highlight=cells[i]||highlight;render();focusCell();
});
board.addEventListener('keydown',event=>{
 if(event.ctrlKey||event.metaKey||event.altKey)return;
 if(/^[1-9]$/.test(event.key)){event.preventDefault();enterNumber(Number(event.key));return;}
 if(['Backspace','Delete','0'].includes(event.key)){event.preventDefault();enterNumber(0);return;}
 const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-9,ArrowDown:9}[event.key];
 if(delta){event.preventDefault();selected=Math.max(0,Math.min(80,selected+delta));highlight=cells[selected]||highlight;render();focusCell();}
});
$('#sudoku-keys').addEventListener('click',event=>{const button=event.target.closest('[data-sudoku-number]');if(button)enterNumber(Number(button.dataset.sudokuNumber));});
$('#sudoku-erase').onclick=()=>enterNumber(0);
$('#sudoku-notes').onclick=()=>{notesMode=!notesMode;say(notesMode?'Ghi chú: chọn ô rồi chạm một số để thêm hoặc bỏ.':'Đã tắt ghi chú.');render();};
$('#sudoku-multi').onclick=()=>{if(practice)return;multiMode=!multiMode;multi.clear();say(multiMode?'Chọn nhiều ô trống rồi thêm hoặc bỏ cùng một ghi chú.':'Đã tắt chọn nhiều ô.');render();};
$('#sudoku-auto').onclick=()=>{
 if(done)return;remember();notes=practice?practice.baseNotes.map(group=>new Set(group)):candidateNotes(cells);
 if(practice?.step.kind==='remove')practice.left=new Set(practice.step.remove.map(([i,n])=>`${i}:${n}`));
 say('Đã tự điền các ứng viên hợp lệ vào mọi ô trống.');render();
};
$('#sudoku-fill-singles').onclick=()=>{
 if(done||practice)return;
 const singles=notes.flatMap((group,i)=>!cells[i]&&group.size===1?[[i,[...group][0]]]:[]);
 const valid=singles.filter(([i,digit])=>sudokuCandidates(cells,i).includes(digit)&&digit===solution[i]);
 if(!valid.length){say('Chưa có ô nào với một ghi chú đúng để điền. Hãy kiểm tra lại ghi chú.');return;}
 remember();clearHints();
 for(const [i,digit] of valid){cells[i]=digit;notes[i].clear();}
 for(let i=0;i<81;i++)if(!cells[i])for(const [cell,digit] of valid)if(peers(i,cell))notes[i].delete(digit);
 selected=valid.at(-1)[0];highlight=valid.at(-1)[1];
 say(`Đã điền ${valid.length} ô chỉ còn một ghi chú.${valid.length<singles.length?' Một số ghi chú chưa đúng đã được giữ lại để bạn kiểm tra.':''}`);
 render();focusCell();finish();
};
$('#sudoku-undo').onclick=()=>{const state=history.pop();if(!state)return;restore(state);say('Đã hoàn tác một bước.');};
$('#sudoku-check').onclick=()=>{
 if(practice){say(practice.step.kind==='place'?'Hãy tìm ô và số bắt buộc.':`Còn ${practice.left.size} ứng viên cần loại.`);return;}
 checked=true;const wrong=cells.filter((value,i)=>value&&value!==solution[i]).length;
 say(wrong?`Có ${wrong} ô chưa đúng; chúng được tô đỏ.`:'Các số đã điền đều đúng.');render();
};
$('#sudoku-reset').onclick=()=>{if(practice){nextPractice();return;}cells=[...puzzle];notes=Array.from({length:81},()=>new Set());selected=puzzle.findIndex(n=>!n);highlight=0;done=false;history=[];clearHints();resetReveal();say('Đã làm lại ván hiện tại.');render();focusCell();};
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
 selected=-1;highlight=0;notesMode=exercise.step.kind==='remove';multiMode=false;multi.clear();done=false;history=[];hintLevel=0;hintCell=-1;checked=false;
 say(`${sudokuTechniques.find(t=>t.id===techniqueSelect.value).name}: ${sudokuTechniques.find(t=>t.id===techniqueSelect.value).help}`);render();
}
function enterPractice(){if(practice)return;saved={puzzle,solution,cells,notes,selected,highlight,done,notesMode,multiMode,history,elapsed,checked};
 $('#sudoku-practice-bar').hidden=false;$('#sudoku-timer').hidden=true;nextPractice();}
function exitPractice(){if(!practice||!saved)return;({puzzle,solution,cells,notes,selected,highlight,done,notesMode,multiMode,history,elapsed,checked}=saved);
 practice=null;saved=null;multi.clear();hintLevel=0;hintCell=-1;$('#sudoku-practice-bar').hidden=true;$('#sudoku-timer').hidden=false;say('Đã trở lại ván Sudoku trước đó.');render();}
$('#sudoku-practice').onclick=()=>practice?exitPractice():enterPractice();
$('#sudoku-practice-next').onclick=nextPractice;$('#sudoku-practice-exit').onclick=exitPractice;techniqueSelect.onchange=nextPractice;
setInterval(()=>{if(done||practice||document.hidden)return;elapsed++;$('#sudoku-timer').textContent=`${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,'0')}`;},1000);
newGame();
