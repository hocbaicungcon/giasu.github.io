import {pentShapes} from './new-game-levels.js';
const normalize=cells=>{const minX=Math.min(...cells.map(c=>c[0])),minY=Math.min(...cells.map(c=>c[1]));return cells.map(([x,y])=>[x-minX,y-minY]);};
export function solvePent(layout){
 const {w,h,pieces}=layout,total=w*h,full=(1n<<BigInt(total))-1n,options=Array.from({length:total},()=>[]);
 pieces.forEach((shape,owner)=>{const seen=new Set();for(let flip=0;flip<2;flip++)for(let turn=0;turn<4;turn++){
  let cells=pentShapes[shape].map(([x,y])=>[flip?-x:x,y]);for(let i=0;i<turn;i++)cells=cells.map(([x,y])=>[-y,x]);cells=normalize(cells);
  const signature=cells.map(([x,y])=>`${x},${y}`).sort().join(';');if(seen.has(signature))continue;seen.add(signature);
  const width=1+Math.max(...cells.map(c=>c[0])),height=1+Math.max(...cells.map(c=>c[1]));
  for(let y=0;y<=h-height;y++)for(let x=0;x<=w-width;x++){const indices=cells.map(([cx,cy])=>(y+cy)*w+x+cx),mask=indices.reduce((bits,index)=>bits|(1n<<BigInt(index)),0n),entry={owner,indices,mask};indices.forEach(index=>options[index].push(entry));}
 }});
 const failed=new Set(),search=(covered,used,answer)=>{if(covered===full)return answer;const key=`${covered}:${used}`;if(failed.has(key))return null;let best=[];for(let cell=0;cell<total;cell++)if(!(covered&(1n<<BigInt(cell)))){const candidates=options[cell].filter(option=>!(used&(1<<option.owner))&&!(covered&option.mask));if(!candidates.length){failed.add(key);return null;}if(!best.length||candidates.length<best.length)best=candidates;}for(const option of best){const next=search(covered|option.mask,used|(1<<option.owner),[...answer,option]);if(next)return next;}failed.add(key);return null;};
 const placements=search(0n,0,[]);if(!placements)return null;const result=Array(total).fill(-1);placements.forEach(({owner,indices})=>indices.forEach(index=>result[index]=owner));return result;
}
