export function sudokuCandidates(board,i){
 const row=Math.floor(i/9),col=i%9,used=new Set();
 for(let n=0;n<9;n++){used.add(board[row*9+n]);used.add(board[n*9+col]);used.add(board[(Math.floor(row/3)*3+Math.floor(n/3))*9+Math.floor(col/3)*3+n%3]);}
 return [1,2,3,4,5,6,7,8,9].filter(n=>!used.has(n));
}
export function countSudokuSolutions(board,limit=2){
 const cells=[...board];let count=0;
 function visit(){if(count>=limit)return;let best=-1,choices;
  for(let i=0;i<81;i++)if(!cells[i]){const c=sudokuCandidates(cells,i);if(!c.length)return;if(!choices||c.length<choices.length){best=i;choices=c;}}
  if(best<0){count++;return;}for(const n of choices){cells[best]=n;visit();if(count>=limit)break;}cells[best]=0;
 }visit();return count;
}
const shuffle=(a,random)=>a.map(v=>({v,k:random()})).sort((a,b)=>a.k-b.k).map(x=>x.v);
export function makeSudoku(clues=40,random=Math.random){
 const groups=()=>shuffle([0,1,2],random).flatMap(g=>shuffle([0,1,2],random).map(n=>g*3+n));
 const rows=groups(),cols=groups(),digits=shuffle([1,2,3,4,5,6,7,8,9],random);
 const solution=rows.flatMap(r=>cols.map(c=>digits[(r*3+Math.floor(r/3)+c)%9]));
 const puzzle=[...solution];let remaining=81;
 for(const i of shuffle(Array.from({length:81},(_,i)=>i),random)){if(remaining<=clues)break;const value=puzzle[i];puzzle[i]=0;if(countSudokuSolutions(puzzle)!==1)puzzle[i]=value;else remaining--;}
 return {puzzle,solution};
}
export function moveHanoi(pegs,from,to){
 if(from===to||!pegs[from]?.length||!pegs[to])return null;
 const disk=pegs[from].at(-1);if(pegs[to].length&&pegs[to].at(-1)<disk)return null;
 const next=pegs.map(p=>[...p]);next[from].pop();next[to].push(disk);return next;
}
