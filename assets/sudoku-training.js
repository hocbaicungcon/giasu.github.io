/* credit: giasu.ai.vn */
import {makeSudoku,sudokuCandidates} from './extra-game-rules.js';
import cases from './sudoku-technique-cases.js';

const groups=[
 ['Hidden Techniques',[['hidden-single-box','Hidden Single (Box)'],['hidden-single-line','Hidden Single (Line)'],['hidden-pair','Hidden Pair'],['hidden-triple','Hidden Triple'],['hidden-quadruple','Hidden Quadruple']]],
 ['Naked Techniques',[['naked-single','Naked Single'],['naked-pair','Naked Pair'],['naked-triple','Naked Triple'],['naked-quadruple','Naked Quadruple']]],
 ['Locked Candidate',[['locked-candidate','Locked Candidate']]],
 ['Fish',[['x-wing','X-Wing'],['swordfish','Swordfish'],['jellyfish','Jellyfish'],['finned-x-wing','Finned X-Wing'],['sashimi-x-wing','Sashimi X-Wing'],['finned-swordfish','Finned Swordfish'],['sashimi-swordfish','Sashimi Swordfish'],['finned-jellyfish','Finned Jellyfish'],['sashimi-jellyfish','Sashimi Jellyfish']]],
 ['Single-Digit Techniques',[['skyscraper','Skyscraper'],['two-string-kite','Two-String Kite'],['crane','Crane'],['empty-rectangle','Empty Rectangle']]],
 ['Y-Wing Techniques',[['y-wing','Y-Wing'],['xyz-wing','XYZ-Wing'],['wxyz-wing','4-Y-Wing (WXYZ-Wing)'],['5-y-wing','5-Y-Wing'],['6-y-wing','6-Y-Wing'],['7-y-wing','7-Y-Wing'],['8-y-wing','8-Y-Wing']]],
 ['W-Wing Technique',[['w-wing','W-Wing']]],
 ['Chaining Techniques',[['simple-coloring','Simple Coloring'],['x-chain','X-Chain'],['grouped-x-chain','Grouped X-Chain'],['medusa','3D Medusa'],['xy-chain','XY-Chain'],['aic','Alternating Inference Chain (AIC)'],['nishio','Nishio Forcing Chain'],['forcing-chain','Cell/Region Forcing Chain'],['forcing-net','Cell/Region Forcing Net']]],
 ['Uniqueness Techniques',[['ur1','Unique Rectangle Type 1'],['ur2','Unique Rectangle Type 2'],['ur3','Unique Rectangle Type 3'],['ur4','Unique Rectangle Type 4'],['ur5','Unique Rectangle Type 5'],['bug','BUG (Binary Universal Grave)']]]
];
export const sudokuTechniques=groups.flatMap(([group,entries])=>entries.map(([id,name])=>({id,name,group,available:Boolean(cases[id]?.length),help:`Áp dụng ${name} để xác định ứng viên cần loại hoặc số bắt buộc.`})));
const units=[];
for(let k=0;k<9;k++){
 units.push({name:`hàng ${k+1}`,cells:Array.from({length:9},(_,c)=>k*9+c)});
 units.push({name:`cột ${k+1}`,cells:Array.from({length:9},(_,r)=>r*9+k)});
 const r=Math.floor(k/3)*3,c=k%3*3;
 units.push({name:`ô vuông ${k+1}`,cells:[0,1,2].flatMap(dr=>[0,1,2].map(dc=>(r+dr)*9+c+dc))});
}
export const candidateNotes=board=>board.map((v,i)=>new Set(v?[]:sudokuCandidates(board,i)));

export function findSudokuStep(board,notes,technique){
 const has=(i,n)=>!board[i]&&notes[i].has(n);
 if(technique==='single')for(let i=0;i<81;i++)if(!board[i]&&notes[i].size===1){const digit=[...notes[i]][0];return {kind:'place',cell:i,digit,pattern:[i],text:`Ô hàng ${Math.floor(i/9)+1}, cột ${i%9+1} chỉ còn số ${digit}.`};}
 if(technique==='hidden')for(const unit of units)for(let digit=1;digit<=9;digit++){
  if(unit.cells.some(i=>board[i]===digit))continue;
  const cells=unit.cells.filter(i=>has(i,digit));
  if(cells.length===1&&notes[cells[0]].size>1)return {kind:'place',cell:cells[0],digit,pattern:unit.cells,text:`Trong ${unit.name}, số ${digit} chỉ có thể ở hàng ${Math.floor(cells[0]/9)+1}, cột ${cells[0]%9+1}.`};
 }
 if(technique==='locked')for(const first of units)for(let digit=1;digit<=9;digit++){
  const candidates=first.cells.filter(i=>has(i,digit));if(candidates.length<2)continue;
  for(const second of units){if(first===second||!candidates.every(i=>second.cells.includes(i)))continue;
   const remove=second.cells.filter(i=>!first.cells.includes(i)&&has(i,digit)).map(i=>[i,digit]);
   if(remove.length)return {kind:'remove',remove,pattern:candidates,text:`Trong ${first.name}, số ${digit} chỉ nằm ở phần giao với ${second.name}; hãy loại ${digit} khỏi phần còn lại của ${second.name}.`};
  }
 }
 if(technique==='pair')for(const unit of units){
  const pairs=unit.cells.filter(i=>!board[i]&&notes[i].size===2);
  for(let a=0;a<pairs.length;a++)for(let b=a+1;b<pairs.length;b++){
   const digits=[...notes[pairs[a]]];if(!digits.every(n=>notes[pairs[b]].has(n)))continue;
   const remove=unit.cells.filter(i=>i!==pairs[a]&&i!==pairs[b]).flatMap(i=>digits.filter(n=>has(i,n)).map(n=>[i,n]));
   if(remove.length)return {kind:'remove',remove,pattern:[pairs[a],pairs[b]],text:`Hai ô trong ${unit.name} giữ cặp ${digits.join(' và ')}; hãy loại chúng khỏi các ô khác trong nhóm.`};
  }
 }
 if(technique==='hidden-pair')for(const unit of units)for(let a=1;a<=9;a++)for(let b=a+1;b<=9;b++){
  const aa=unit.cells.filter(i=>has(i,a)),bb=unit.cells.filter(i=>has(i,b));
  if(aa.length!==2||bb.length!==2||aa[0]!==bb[0]||aa[1]!==bb[1])continue;
  const remove=aa.flatMap(i=>[...notes[i]].filter(n=>n!==a&&n!==b).map(n=>[i,n]));
  if(remove.length)return {kind:'remove',remove,pattern:aa,text:`Trong ${unit.name}, ${a} và ${b} chỉ nằm ở hai ô được tô sáng; loại các số khác khỏi hai ô này.`};
 }
 if(technique==='triple')for(const unit of units){
  const choices=unit.cells.filter(i=>!board[i]&&notes[i].size>=2&&notes[i].size<=3);
  for(let a=0;a<choices.length;a++)for(let b=a+1;b<choices.length;b++)for(let c=b+1;c<choices.length;c++){
   const group=[choices[a],choices[b],choices[c]],digits=new Set(group.flatMap(i=>[...notes[i]]));if(digits.size!==3)continue;
   const remove=unit.cells.filter(i=>!group.includes(i)).flatMap(i=>[...digits].filter(n=>has(i,n)).map(n=>[i,n]));
   if(remove.length)return {kind:'remove',remove,pattern:group,text:`Bộ ba ô trong ${unit.name} giữ ba số ${[...digits].join(', ')}; loại chúng khỏi các ô khác trong nhóm.`};
  }
 }
 if(technique==='x-wing')for(let digit=1;digit<=9;digit++)for(const transpose of [false,true]){
  const lines=[];
  for(let line=0;line<9;line++){
   const spots=[];for(let pos=0;pos<9;pos++){const i=transpose?pos*9+line:line*9+pos;if(has(i,digit))spots.push(pos);}
   if(spots.length===2)lines.push([line,spots]);
  }
  for(let a=0;a<lines.length;a++)for(let b=a+1;b<lines.length;b++){
   const [first,positions]=lines[a],[second,other]=lines[b];if(positions[0]!==other[0]||positions[1]!==other[1])continue;
   const pattern=[first,second].flatMap(line=>positions.map(pos=>transpose?pos*9+line:line*9+pos));
   const remove=[];for(const pos of positions)for(let line=0;line<9;line++)if(line!==first&&line!==second){const i=transpose?pos*9+line:line*9+pos;if(has(i,digit))remove.push([i,digit]);}
   if(remove.length)return {kind:'remove',remove,pattern,text:`Số ${digit} tạo hình X-Wing ở hai ${transpose?'cột':'hàng'} được tô sáng; loại ${digit} khỏi phần còn lại của hai ${transpose?'hàng':'cột'} giao nhau.`};
  }
 }

 return null;
}

const parseToken=token=>[Number(token[1])*9+Number(token[2])-10,Number(token[0])];
const caseCursor=new Map();
export function makeSudokuPractice(technique){
 const samples=cases[technique];if(!samples?.length)return null;
 const choice=(caseCursor.get(technique)??Math.floor(Math.random()*samples.length))%samples.length;
 caseCursor.set(technique,choice+1);
 const sample=samples[choice];
 const [grid,deleted,eliminated,placed,digits]=sample;
 const puzzle=[...grid].map(ch=>Number(ch)||0);
 const notes=candidateNotes(puzzle);
 for(const token of deleted.split(' '))if(token.length===3){const [cell,digit]=parseToken(token);notes[cell].delete(digit);}
 const targets=(placed||eliminated).split(' ').filter(Boolean).map(parseToken);
 const valid=targets.filter(([cell,digit])=>!puzzle[cell]&&notes[cell].has(digit));
 if(!valid.length)return null;
 const pattern=[...new Set(valid.map(([cell])=>cell))];
 const loc=([cell,digit])=>`r${Math.floor(cell/9)+1}c${cell%9+1} ≠ ${digit}`;
 const step=placed?{kind:'place',cell:valid[0][0],digit:valid[0][1],pattern,text:`${sudokuTechniques.find(t=>t.id===technique).name}: điền ${valid[0][1]} vào hàng ${Math.floor(valid[0][0]/9)+1}, cột ${valid[0][0]%9+1}.`}:{kind:'remove',remove:valid,pattern,text:`${sudokuTechniques.find(t=>t.id===technique).name}: loại ${valid.map(loc).join(', ')}.`};
 return {puzzle,notes,step};
}
