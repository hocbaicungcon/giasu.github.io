/* credit: giasu.ai.vn */
import {makeSudoku} from './extra-game-rules.js';
import bank from './sudoku-level-bank.js';

export const sudokuLevels = [
 {id:'very-easy',name:'Very Easy',clues:56},
 {id:'easy',name:'Easy',clues:49},
 {id:'moderately-easy',name:'Moderately Easy',clues:44},
 {id:'moderate',name:'Moderate',clues:39},
 {id:'moderately-hard',name:'Moderately Hard',clues:34},
 {id:'hard',name:'Hard',clues:30},
 {id:'vicious',name:'Vicious'},
 {id:'fiendish',name:'Fiendish'},
 {id:'devilish',name:'Devilish'},
 {id:'hell',name:'Hell'},
 {id:'beyond-hell',name:'Beyond Hell'},
];
const cursors=new Map();
export function makeSudokuLevel(id){
 const level=sudokuLevels.find(item=>item.id===id)||sudokuLevels[0];
 if(level.clues)return makeSudoku(level.clues);
 const samples=bank[level.id];
 if(!samples?.length)throw new Error(`Missing Sudoku level: ${level.id}`);
 const next=(cursors.get(level.id)??Math.floor(Math.random()*samples.length))%samples.length;
 cursors.set(level.id,next+1);
 const [puzzleText,solutionText]=samples[next];
 // Renaming the digits and reflecting the grid preserve the puzzle's structure.
 const digits=[1,2,3,4,5,6,7,8,9].sort(()=>Math.random()-.5);
 const transpose=Math.random()<.5,mirror=Math.random()<.5;
 const transform=text=>Array.from({length:81},(_,i)=>{
  const row=Math.floor(i/9),col=i%9;
  const source=transpose?(mirror?8-col:col)*9+row:row*9+(mirror?8-col:col);
  const value=Number(text[source]);return value?digits[value-1]:0;
 });
 return {puzzle:transform(puzzleText),solution:transform(solutionText)};
}
