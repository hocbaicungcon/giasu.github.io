/* credit: giasu.ai.vn */
import {makeSudoku} from './extra-game-rules.js';
import {candidateNotes,findSudokuStep,sudokuTechniques} from './sudoku-training.js';
import bank from './sudoku-level-bank.js';

export const sudokuLevels = [
 {id:'very-easy',name:'Very Easy',minRank:0,maxRank:1,clueRange:[50,58]},
 {id:'easy',name:'Easy',minRank:1,maxRank:2,clueRange:[44,53]},
 {id:'moderately-easy',name:'Moderately Easy',minRank:2,maxRank:4,clueRange:[39,49]},
 {id:'moderate',name:'Moderate',minRank:3,maxRank:6,clueRange:[34,45]},
 {id:'moderately-hard',name:'Moderately Hard',minRank:5,maxRank:9,clueRange:[30,40]},
 {id:'hard',name:'Hard',minRank:7,maxRank:12,clueRange:[27,36]},
 {id:'vicious',name:'Vicious',minRank:10,maxRank:15},
 {id:'fiendish',name:'Fiendish',minRank:12,maxRank:17},
 {id:'devilish',name:'Devilish',minRank:14,maxRank:19},
 {id:'hell',name:'Hell',minRank:16,maxRank:21},
 {id:'beyond-hell',name:'Beyond Hell',minRank:18,maxRank:99},
];

export const sudokuTechniquePriority=[
 'single','naked-single','hidden','hidden-single-box','hidden-single-line',
 'locked-candidate',
 'naked-pair','hidden-pair',
 'naked-triple','hidden-triple',
 'naked-quadruple','hidden-quadruple',
 'x-wing','swordfish','jellyfish',
 'skyscraper','two-string-kite','empty-rectangle',
 'y-wing','xyz-wing','w-wing','wxyz-wing',
 'finned-x-wing','sashimi-x-wing',
 'finned-swordfish','sashimi-swordfish',
 'finned-jellyfish','sashimi-jellyfish'
];

const techniqueRank=new Map(sudokuTechniquePriority.map((id,i)=>[id,i]));
const cursors=new Map();

function applyStep(cells,notes,step){
 if(step.kind==='place'&&Number.isInteger(step.cell)&&step.digit){
  cells[step.cell]=step.digit;
  return true;
 }
 if(step.kind==='remove'&&step.remove?.length){
  let changed=false;
  for(const [cell,digit] of step.remove){
   if(notes[cell]?.has(digit)){notes[cell].delete(digit);changed=true;}
  }
  return changed;
 }
 return false;
}

function rateSudoku(puzzle){
 const cells=[...puzzle];
 let hardest=-1,steps=0;
 for(;steps<500&&!cells.every(Boolean);steps++){
  const notes=candidateNotes(cells);
  let found=null,rank=-1;
  for(const id of sudokuTechniquePriority){
   const item=sudokuTechniques.find(t=>t.id===id);
   if(item?.available===false)continue;
   const step=findSudokuStep(cells,notes,id);
   if(step){found=step;rank=techniqueRank.get(id)??99;break;}
  }
  if(!found||!applyStep(cells,notes,found))return {solved:false,hardest:99,steps};
  hardest=Math.max(hardest,rank);
 }
 return {solved:cells.every(Boolean),hardest:Math.max(0,hardest),steps};
}

function generatedLevel(level){
 const [minClues,maxClues]=level.clueRange;
 let best=null,bestDistance=Infinity;
 // Nhiều lần thử vì độ khó được xác định bằng kỹ thuật, không còn chỉ bằng số clue.
 for(let attempt=0;attempt<28;attempt++){
  const clues=Math.round(minClues+Math.random()*(maxClues-minClues));
  const candidate=makeSudoku(clues);
  const rated=rateSudoku(candidate.puzzle);
  if(!rated.solved)continue;
  if(rated.hardest>=level.minRank&&rated.hardest<=level.maxRank)return candidate;
  const distance=rated.hardest<level.minRank?level.minRank-rated.hardest:rated.hardest-level.maxRank;
  if(distance<bestDistance){best=candidate;bestDistance=distance;}
 }
 return best||makeSudoku(Math.round((minClues+maxClues)/2));
}

function bankLevel(level){
 const samples=bank[level.id];
 if(!samples?.length)return null;
 // Ưu tiên mẫu trong bank có độ khó kỹ thuật đúng mức.
 const start=(cursors.get(level.id)??Math.floor(Math.random()*samples.length))%samples.length;
 let fallback=null;
 for(let offset=0;offset<Math.min(samples.length,24);offset++){
  const pair=samples[(start+offset)%samples.length];
  const puzzle=Array.from(pair[0],c=>Number(c)||0),solution=Array.from(pair[1],c=>Number(c)||0);
  const rated=rateSudoku(puzzle);
  if(!fallback)fallback={puzzle,solution};
  if(rated.solved&&rated.hardest>=level.minRank&&rated.hardest<=level.maxRank){
   cursors.set(level.id,start+offset+1);
   return transformLevel(puzzle,solution);
  }
 }
 cursors.set(level.id,start+1);
 return fallback?transformLevel(fallback.puzzle,fallback.solution):null;
}

function transformLevel(puzzle,solution){
 const digits=[1,2,3,4,5,6,7,8,9].sort(()=>Math.random()-.5);
 const transpose=Math.random()<.5,mirror=Math.random()<.5;
 const transform=source=>Array.from({length:81},(_,i)=>{
  const row=Math.floor(i/9),col=i%9;
  const j=transpose?(mirror?8-col:col)*9+row:row*9+(mirror?8-col:col);
  const value=source[j];return value?digits[value-1]:0;
 });
 return {puzzle:transform(puzzle),solution:transform(solution)};
}

export function makeSudokuLevel(id){
 const level=sudokuLevels.find(item=>item.id===id)||sudokuLevels[0];
 // Sáu mức đầu sinh động, nhưng chỉ nhận đề phù hợp với thang kỹ thuật.
 if(level.clueRange)return generatedLevel(level);
 // Các mức rất khó tiếp tục dùng bank, đồng thời ưu tiên mẫu khớp độ khó kỹ thuật.
 return bankLevel(level)||generatedLevel({...level,clueRange:[24,34]});
}
