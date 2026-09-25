import {nonogramLevels} from './nonogram-levels.js';
import {createGameResult} from './game-result.js';
import {sound} from './puzzle-audio.js';

const $=selector=>document.querySelector(selector);
const board=$('#nonogram-board');
const scene=$('#nonogram-scene');
let level=0,values=[],mode='fill',selected=0,finished=false;
const result=createGameResult(scene,{restart:()=>start(),next:()=>start(level+1)});
const size=()=>nonogramLevels[level].rows.length;
const target=index=>nonogramLevels[level].rows[Math.floor(index/size())][index%size()]==='#';
function runs(bits){const result=[];let count=0;for(const filled of [...bits,false]){if(filled)count++;else if(count){result.push(count);count=0;}}return result.length?result:[0];}
function hints(){const rows=nonogramLevels[level].rows,n=rows.length;return {rows:rows.map(row=>runs([...row].map(c=>c==='#'))),cols:Array.from({length:n},(_,x)=>runs(rows.map(row=>row[x]==='#')))};}
function updateMode(){for(const [name,id] of [['fill','#nonogram-fill'],['mark','#nonogram-mark']])$(id).setAttribute('aria-pressed',String(mode===name));}
function renderClues(){const {rows,cols}=hints(),n=size();scene.style.setProperty('--nonogram-size',n);scene.dataset.size=n;$('#nonogram-row-clues').replaceChildren(...rows.map((hint,y)=>{const item=document.createElement('div');item.className='nonogram-clue';item.textContent=hint.join(' ');item.setAttribute('aria-label',`Hàng ${y+1}: ${hint.join(', ')}`);return item;}));$('#nonogram-col-clues').replaceChildren(...cols.map((hint,x)=>{const item=document.createElement('div');item.className='nonogram-clue';item.setAttribute('aria-label',`Cột ${x+1}: ${hint.join(', ')}`);for(const number of hint){const span=document.createElement('span');span.textContent=number;item.append(span);}return item;}));}
function render(){const n=size();board.replaceChildren(...values.map((value,index)=>{const cell=document.createElement('button');cell.type='button';cell.className='nonogram-cell'+(value===1?' filled':value===2?' crossed':'');cell.dataset.index=index;cell.setAttribute('role','gridcell');cell.setAttribute('aria-label',`Hàng ${Math.floor(index/n)+1}, cột ${index%n+1}: ${value===1?'đã tô':value===2?'đánh dấu trống':'chưa chọn'}`);cell.setAttribute('aria-pressed',String(value===1));cell.tabIndex=index===selected?0:-1;return cell;}));[...$('#nonogram-row-clues').children].forEach((el,y)=>el.classList.toggle('complete',values.slice(y*n,(y+1)*n).every((v,x)=>(v===1)===target(y*n+x))));[...$('#nonogram-col-clues').children].forEach((el,x)=>el.classList.toggle('complete',Array.from({length:n},(_,y)=>(values[y*n+x]===1)===target(y*n+x)).every(Boolean)));}
function focusSelected(){if(!$('#game-nonogram').hidden)board.querySelector(`[data-index="${selected}"]`)?.focus({preventScroll:true});}
function start(next=level){result.clear();level=Math.max(0,Math.min(nonogramLevels.length-1,next));values=Array(size()*size()).fill(0);mode='fill';selected=0;finished=false;$('#nonogram-level').textContent=`Màn ${level+1}/${nonogramLevels.length} · ${nonogramLevels[level].difficulty}`;$('#nonogram-jump').value=String(level);$('#nonogram-prev').disabled=level===0;$('#nonogram-next').disabled=level===nonogramLevels.length-1;$('#nonogram-status').textContent='Tô các ô theo gợi ý ở đầu cột và bên trái hàng.';updateMode();renderClues();render();focusSelected();}
function checkComplete(){if(values.every((value,index)=>(value===1)===target(index))){finished=true;$('#nonogram-status').textContent='Bạn đã ghép đúng hình bí mật!';result.show({won:true,description:`Bạn đã hoàn thành màn ${level+1}.`,hasNext:level<nonogramLevels.length-1});return true;}return false;}
function mark(index,chosenMode=mode){if(finished)return;selected=index;const wanted=chosenMode==='fill'?1:2;values[index]=values[index]===wanted?0:wanted;sound('move');render();focusSelected();if(!checkComplete())$('#nonogram-status').textContent=`Đã tô ${values.filter(v=>v===1).length} ô. Dùng gợi ý để hoàn thành hình.`;}
board.addEventListener('click',event=>{const cell=event.target.closest('[data-index]');if(cell)mark(Number(cell.dataset.index));});
board.addEventListener('contextmenu',event=>{const cell=event.target.closest('[data-index]');if(cell){event.preventDefault();mark(Number(cell.dataset.index),'mark');}});
board.addEventListener('keydown',event=>{const n=size(),delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-n,ArrowDown:n}[event.key];if(delta){event.preventDefault();const row=Math.floor(selected/n),col=selected%n;const nextRow=Math.max(0,Math.min(n-1,row+(delta===-n?-1:delta===n?1:0))),nextCol=Math.max(0,Math.min(n-1,col+(delta===-1?-1:delta===1?1:0)));selected=nextRow*n+nextCol;render();focusSelected();}else if(event.key.toLowerCase()==='x'){event.preventDefault();mark(selected,'mark');}else if(event.key.toLowerCase()==='f'){event.preventDefault();mark(selected,'fill');}});
$('#nonogram-fill').addEventListener('click',()=>{mode='fill';updateMode();});
$('#nonogram-mark').addEventListener('click',()=>{mode='mark';updateMode();});
$('#nonogram-hint').addEventListener('click',()=>{if(finished)return;const index=values.findIndex((value,i)=>(value===1)!==target(i));if(index<0)return;selected=index;values[index]=target(index)?1:2;render();focusSelected();sound('move');if(!checkComplete())$('#nonogram-status').textContent=`Đã gợi ý ô hàng ${Math.floor(index/size())+1}, cột ${index%size()+1}.`;});
$('#nonogram-prev').addEventListener('click',()=>start(level-1));
$('#nonogram-next').addEventListener('click',()=>start(level+1));
$('#nonogram-reset').addEventListener('click',()=>start());
const select=$('#nonogram-jump'),groups=new Map();nonogramLevels.forEach((entry,index)=>{if(!groups.has(entry.difficulty)){const group=document.createElement('optgroup');group.label=entry.difficulty;groups.set(entry.difficulty,group);}const option=document.createElement('option');option.value=index;option.textContent=`${index+1} ${'★'.repeat(Math.min(5,1+Math.floor(index/Math.max(1,nonogramLevels.length/5))))}`;groups.get(entry.difficulty).append(option);});select.replaceChildren(...groups.values());select.addEventListener('change',()=>start(Number(select.value)));
document.querySelector('[data-game="nonogram"]').addEventListener('click',focusSelected);
start();
