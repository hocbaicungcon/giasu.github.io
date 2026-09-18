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
import {riverLevels,waterLevels,waterMove,waterWon} from '../assets/puzzle-levels.js';
test('all water levels are reachable within their move limits',()=>{
 for(const level of waterLevels){const queue=[{state:[0,0],steps:0}],seen=new Set(['0,0']);let solved=false;
  while(queue.length){const {state,steps}=queue.shift();if(waterWon(state,level)){solved=true;break;}if(level.limit&&steps>=level.limit)continue;
   for(const action of ['fill','empty','pour'])for(const i of [0,1]){const result=waterMove(state,action,i);assert.ok(result.state.every((n,j)=>n>=0&&n<=[5,3][j]));const key=result.state.join(',');if(!seen.has(key)){seen.add(key);queue.push({state:result.state,steps:steps+1});}}
  }assert.ok(solved,level.name);
 }
});
test('all river levels have a safe solution within budget',()=>{
 for(const level of riverLevels){const queue=[{state:level.start,steps:0}],seen=new Set();let solved=false;
  while(queue.length){const {state,steps}=queue.shift();if(Object.values(state).every(n=>n===1)){solved=true;break;}if(level.limit&&steps>=level.limit)continue;
   for(const passenger of ['', 'wolf','goat','cabbage']){const next=crossRiver(state,passenger);if(next.error||next.lost)continue;const key=JSON.stringify(next.state);if(!seen.has(key)){seen.add(key);queue.push({state:next.state,steps:steps+1});}}
  }assert.ok(solved,level.name);
 }
});
test('pouring conserves water and respects the receiving capacity',()=>{
 assert.deepEqual(waterMove([5,0],'pour',0).state,[2,3]);assert.deepEqual(waterMove([4,3],'pour',1).state,[5,2]);assert.equal(waterMove([5,3],'fill',0).changed,false);
});
