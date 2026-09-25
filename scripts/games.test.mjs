import {test} from 'node:test';
import assert from 'node:assert/strict';
import {moveBoard,canMove,crossRiver,scoreWord,words} from '../assets/game-rules.js';
import {compareItems} from '../assets/sort.js';
test('2048 merges each tile once and only spawns after real movement',()=>{
 const board=[2,2,2,2,...Array(12).fill(0)];const left=moveBoard(board,'left');assert.deepEqual(left.board.slice(0,4),[4,4,0,0]);assert.equal(left.score,8);assert.deepEqual(board.slice(0,4),[2,2,2,2]);
 assert.deepEqual(moveBoard(board,'right').board.slice(0,4),[0,0,4,4]);assert.equal(moveBoard([2,...Array(15).fill(0)],'left').changed,false);
 assert.deepEqual(moveBoard([2,0,0,0,2,0,0,0,...Array(8).fill(0)],'down').board.slice(12),[4,0,0,0]);
 assert.equal(canMove([2,4,2,4,4,2,4,2,2,4,2,4,4,2,4,2]),false);
});
test('river crossing detects danger and solves in seven trips',()=>{
 let state={person:0,wolf:0,goat:0,cabbage:0};assert.equal(crossRiver(state,'wolf').lost,true);
 let result;for(const passenger of ['goat','','wolf','goat','cabbage','','goat']){result=crossRiver(state,passenger);assert.ok(!result.lost);state=result.state;}assert.equal(result.won,true);
});
test('word scoring respects repeated letters and exact positions',()=>{
 assert.deepEqual(scoreWord('APPLE','PUPPY'),['present','absent','correct','absent','absent']);assert.deepEqual(scoreWord('APPLE','APPLE'),Array(5).fill('correct'));assert.ok(words.every(w=>/^[A-Z]{5}$/.test(w)));
});
test('both sorting directions use names and publication dates',()=>{
 const a={title:'Đề 2',date:'2026-01-01'},b={title:'Đề 10',date:'2026-02-01'};
 assert.ok(compareItems(a,b,'title')<0);assert.ok(compareItems(a,b,'title-desc')>0);assert.ok(compareItems(a,b,'new')>0);assert.ok(compareItems(a,b,'old')<0);
});
import {riverLevels,waterLevels,waterMove,waterWon,riverMove,riverCargoOptions} from '../assets/puzzle-levels.js';
test('all water puzzles are distinct and solvable within budget',()=>{
 assert.equal(waterLevels.length,1001);assert.equal(new Set(waterLevels.map(l=>JSON.stringify([l.caps,l.mode,l.target]))).size,1001);
 assert.deepEqual([...new Set(waterLevels.map(l=>l.caps.length))].sort(),[2,3,4]);
 for(const level of waterLevels){
  const zero=level.caps.map(()=>0),queue=[{state:zero,steps:0}],seen=new Set([zero.join(',')]);let minimum=null;
  for(let head=0;head<queue.length;head++){
   const {state,steps}=queue[head];if(waterWon(state,level)){minimum=steps;break;}
   for(const action of ['fill','empty','pour'])for(let i=0;i<level.caps.length;i++)for(const j of action==='pour'?level.caps.map((_,k)=>k):[0]){
    const result=waterMove(state,action,i,level.caps,j);assert.ok(result.state.every((n,k)=>n>=0&&n<=level.caps[k]));
    if(action==='pour')assert.equal(result.state.reduce((a,b)=>a+b),state.reduce((a,b)=>a+b));
    const key=result.state.join(',');if(!seen.has(key)){seen.add(key);queue.push({state:result.state,steps:steps+1});}
   }
  }
  assert.equal(minimum,level.minimum,level.description);assert.ok(minimum>0);assert.ok(!level.limit||minimum<=level.limit);
 }
});
test('all river puzzles have safe solutions and valid capacities',()=>{
 assert.equal(riverLevels.length,1001);assert.equal(new Set(riverLevels.map(l=>JSON.stringify([l.items,l.capacity,l.start]))).size,1001);
 for(const level of riverLevels){
  const queue=[{state:level.start,steps:0}],seen=new Set();let minimum=null;
  for(let head=0;head<queue.length;head++){
   const {state,steps}=queue[head];if(state.person===1&&state.positions.every(n=>n===1)){minimum=steps;break;}
   for(const cargo of riverCargoOptions(state,level)){
    const next=riverMove(state,cargo,level);if(next.error||next.lost)continue;
    const key=JSON.stringify(next.state);if(!seen.has(key)){seen.add(key);queue.push({state:next.state,steps:steps+1});}
   }
  }
  assert.equal(minimum,level.minimum,level.description);assert.ok(minimum>0);assert.ok(!level.limit||minimum<=level.limit);
 }
});
test('river rules reject overcapacity and identify both predators',()=>{
 const level=riverLevels[0];assert.equal(riverMove(level.start,[0,1],level).error,true);
 assert.equal(riverMove(level.start,[0,0],level).error,true);
 assert.equal(riverMove(level.start,[99],level).error,true);
 assert.deepEqual(riverMove(level.start,[2],level).danger,{predator:0,prey:1});
 assert.deepEqual(riverMove(level.start,[0],level).danger,{predator:1,prey:2});
 let state=level.start;for(const cargo of [[1],[],[0],[1],[2],[],[1]]){const r=riverMove(state,cargo,level);assert.ok(!r.lost);state=r.state;}assert.ok(state.positions.every(n=>n===1));
});
test('pouring supports arbitrary destinations and no-op actions',()=>{
 assert.deepEqual(waterMove([5,0],'pour',0).state,[2,3]);
 assert.deepEqual(waterMove([4,3],'pour',1).state,[5,2]);
 assert.equal(waterMove([5,3],'fill',0).changed,false);
 assert.deepEqual(waterMove([8,0,0],'pour',0,[8,5,3],2).state,[5,0,3]);
 assert.equal(waterMove([8,0,0],'pour',0,[8,5,3],0).changed,false);
 assert.equal(waterMove([8,0,0],'pour',0,[8,5,3],99).changed,false);
 assert.equal(waterMove([8,0,0],'fill',99,[8,5,3]).changed,false);
 assert.ok(waterWon([2,3,2],{mode:'total',target:7}));
});
