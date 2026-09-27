import {createGameResult} from './game-result.js';
import {suggestCaroMove} from './caro-rules.js';
import {setGameControlIcon} from './game-controls.js';
import {sound} from './puzzle-audio.js';
const boardEl=document.getElementById('caro-board');
if(boardEl){
 const result=createGameResult(document.getElementById('game-caro'),{restart:()=>reset()});
 const size=15, cells=Array(size*size).fill(''), buttons=[];
 const status=document.getElementById('caro-status'), modeButtons=[...document.querySelectorAll('[data-caro-mode]')];
 let mode='bot',botTimer;
 let turn='X', winner='', busy=false, winning=[],hint=-1;
 const hintButton=document.getElementById('caro-hint');
 setGameControlIcon(hintButton,'hint','Gợi ý nước đi');
 const lines=(index)=>{const row=Math.floor(index/size),col=index%size;return [[1,0],[0,1],[1,1],[1,-1]].map(([dr,dc])=>{const found=[index];for(const sign of [-1,1]){let r=row+dr*sign,c=col+dc*sign;while(r>=0&&r<size&&c>=0&&c<size&&cells[r*size+c]===cells[index]){found.push(r*size+c);r+=dr*sign;c+=dc*sign;}}return found;});};
 const check=(index)=>lines(index).find(line=>line.length>=5)||[];
 const label=()=>{status.textContent=winner?winner==='draw'?'Hòa! Bàn cờ đã đầy.':winner==='O'&&mode==='bot'?'Máy thắng!':`Người chơi ${winner} thắng!`:busy?'Máy đang đi…':`Lượt ${turn}${mode==='bot'&&turn==='X'?' · Bạn':''}`;};
 function drawWinningLine(){
  const existing=boardEl.querySelector('.caro-win-line');
  if(!winning.length){existing?.remove();return;}
  const signature=winning.join(',');if(existing?.dataset.line===signature)return;
  existing?.remove();
  const ordered=[...winning].sort((a,b)=>a-b),first=ordered[0],last=ordered.at(-1);
  const x1=(first%size+.5)*10,y1=(Math.floor(first/size)+.5)*10,x2=(last%size+.5)*10,y2=(Math.floor(last/size)+.5)*10;
  const length=Math.hypot(x2-x1,y2-y1),dx=(x2-x1)/length,dy=(y2-y1)/length;
  const startX=x1-dx*3,startY=y1-dy*3,endX=x2+dx*3,endY=y2+dy*3;
  const path=`M${startX} ${startY} Q${(x1+x2)/2-dy*.45} ${(y1+y2)/2+dx*.45} ${endX} ${endY}`;
  const ns='http://www.w3.org/2000/svg',overlay=document.createElementNS(ns,'svg');
  overlay.setAttribute('viewBox',`0 0 ${size*10} ${size*10}`);overlay.setAttribute('aria-hidden','true');overlay.classList.add('caro-win-line');overlay.dataset.line=signature;
  for(const className of ['caro-brush','caro-brush-grain']){const stroke=document.createElementNS(ns,'path');stroke.setAttribute('d',path);stroke.setAttribute('pathLength','1');stroke.setAttribute('class',className);overlay.append(stroke);}
  boardEl.append(overlay);
 }
 const draw=()=>{buttons.forEach((button,i)=>{if(cells[i]){const mark=document.createElement('img');mark.className='caro-mark';mark.src=new URL(`./caro-${cells[i].toLowerCase()}.svg`,import.meta.url).href;mark.alt='';mark.setAttribute('aria-hidden','true');mark.draggable=false;button.replaceChildren(mark);}else button.replaceChildren();button.classList.toggle('caro-hint',i===hint);button.classList.toggle('caro-x',cells[i]==='X');button.classList.toggle('caro-o',cells[i]==='O');button.disabled=Boolean(cells[i]||winner||busy);button.setAttribute('aria-label',`Hàng ${Math.floor(i/size)+1}, cột ${i%size+1}${cells[i]?`, ${cells[i]}`:''}`);});hintButton.disabled=Boolean(winner||busy);label();drawWinningLine();};
 const put=(i)=>{if(cells[i]||winner)return;hint=-1;cells[i]=turn;winning=check(i);if(winning.length)winner=turn;else if(cells.every(Boolean))winner='draw';else turn=turn==='X'?'O':'X';if(!winner)sound('move');draw();if(winner){const drawGame=winner==='draw',won=!drawGame&&(mode==='friend'||winner==='X');result.show({won,draw:drawGame,title:drawGame?'Hòa!':won?'Chiến thắng!':'Thua cuộc',description:drawGame?'Bàn cờ đã đầy, chưa ai nối được năm quân.':mode==='friend'?`Người chơi ${winner} đã nối được năm quân liên tiếp.`:won?'Bạn đã nối được năm quân và thắng máy!':'Máy đã nối được năm quân. Hãy thử lại ván mới!',delay:850});}};
 const choose=()=>suggestCaroMove(cells,size,turn);
 boardEl.setAttribute('role','grid');boardEl.setAttribute('aria-label','Bàn cờ caro 15 nhân 15');for(let i=0;i<cells.length;i++){const button=document.createElement('button');button.type='button';button.className='caro-cell';button.addEventListener('click',()=>{if(busy||winner||cells[i]||mode==='bot'&&turn==='O')return;put(i);if(mode==='bot'&&!winner){busy=true;draw();botTimer=setTimeout(()=>{const move=choose();busy=false;if(move!==null)put(move);else draw();},260);}});buttons.push(button);boardEl.append(button);}
 const reset=()=>{result.clear();clearTimeout(botTimer);cells.fill('');turn='X';winner='';busy=false;winning=[];hint=-1;draw();};
 hintButton.addEventListener('click',()=>{if(winner||busy)return;hint=suggestCaroMove(cells,size,turn);draw();if(hint!==null){status.textContent=`Gợi ý cho ${turn}: hàng ${Math.floor(hint/size)+1}, cột ${hint%size+1}.`;buttons[hint].setAttribute('aria-label',buttons[hint].getAttribute('aria-label')+', ô gợi ý');sound('move');}});
 document.getElementById('caro-reset').addEventListener('click',reset);modeButtons.forEach(button=>{setGameControlIcon(button,button.dataset.caroMode==='bot'?'robot':'people',button.title);button.addEventListener('click',()=>{if(mode===button.dataset.caroMode)return;mode=button.dataset.caroMode;modeButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));reset();});});draw();
}
