/* credit: giasu.ai.vn */
import './sudoku-game.js';
import {moveHanoi} from './extra-game-rules.js';
import {sound} from './puzzle-audio.js';
const $=s=>document.querySelector(s);
let pegs,history=[],from=null,won=false;
function renderHanoi(){const n=Number($('#hanoi-level').value);$('#hanoi-counter').textContent=`${history.length} lượt · Tối thiểu ${2**n-1} lượt`;
 $('#hanoi-board').replaceChildren(...pegs.map((peg,i)=>{const b=document.createElement('button');b.type='button';b.dataset.peg=i;b.setAttribute('aria-label',`Cọc ${i+1}: ${peg.length?'đĩa '+peg.join(', '):'trống'}`);b.setAttribute('aria-pressed',String(from===i));const disks=document.createElement('span');disks.className='hanoi-disks';peg.forEach(d=>{const disk=document.createElement('span');disk.className='hanoi-disk';disk.style.width=(28+d*9)+'%';disk.style.setProperty('--disk',d);disk.textContent=d;disks.append(disk);});b.append(disks,document.createTextNode('Cọc '+(i+1)));return b;}));$('#hanoi-undo').disabled=!history.length;}
function resetHanoi(){pegs=[Array.from({length:Number($('#hanoi-level').value)},(_,i)=>Number($('#hanoi-level').value)-i),[],[]];history=[];from=null;won=false;$('#hanoi-status').textContent='Bấm cọc 1 để chọn đĩa trên cùng.';renderHanoi();}
$('#hanoi-board').onclick=e=>{const b=e.target.closest('[data-peg]');if(!b||won)return;const to=Number(b.dataset.peg);if(from===null){if(!pegs[to].length){$('#hanoi-status').textContent='Cọc này chưa có đĩa.';return;}from=to;sound('key',{volume:.2});$('#hanoi-status').textContent='Chọn cọc đích.';}else if(from===to){from=null;}else {const next=moveHanoi(pegs,from,to);if(!next){$('#hanoi-status').textContent='Không được đặt đĩa lớn lên đĩa nhỏ.';sound('error');return;}history.push(pegs);pegs=next;from=null;won=pegs[2].length===Number($('#hanoi-level').value);$('#hanoi-status').textContent=won?`Hoàn thành sau ${history.length} lượt!`:'Chọn cọc để tiếp tục.';sound(won?'win':'merge',{volume:.24});}renderHanoi();};
$('#hanoi-undo').onclick=()=>{if(history.length){pegs=history.pop();from=null;won=false;sound('move',{volume:.2});$('#hanoi-status').textContent='Đã hoàn tác một lượt.';renderHanoi();}};
$('#hanoi-reset').onclick=resetHanoi;$('#hanoi-level').onchange=resetHanoi;resetHanoi();
