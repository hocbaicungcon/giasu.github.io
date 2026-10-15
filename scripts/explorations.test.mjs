import test from 'node:test';import assert from 'node:assert/strict';
import {gcd,divisors,quadratic,tossCoins} from '../assets/exploration-models.js';
import {explorationKind,renderExploration} from './explorations.mjs';
test('number model identifies all common divisors and the greatest one',()=>{assert.equal(gcd(18,24),6);assert.deepEqual(divisors(6),[1,2,3,6]);assert.equal(gcd(17,19),1);assert.equal(gcd(120,120),120);});
test('quadratic model handles two, repeated, absent and degenerate roots',()=>{assert.deepEqual(quadratic(1,0,-4).roots,[-2,2]);assert.deepEqual(quadratic(1,-2,1).vertex,[1,0]);assert.deepEqual(quadratic(1,0,1).roots,[]);assert.deepEqual(quadratic(0,2,-4).roots,[2]);assert.equal(quadratic(0,0,0).roots,null);});
test('coin experiment conserves total and has predictable deterministic runs',()=>{assert.deepEqual(tossCoins(100,()=>.1),{heads:100,tails:0});assert.deepEqual(tossCoins(100,()=>.9),{heads:0,tails:100});});
test('explorations attach only to relevant mathematics lessons',()=>{const p=title=>({title,category:'Toán học',type:'Bài học'});assert.equal(explorationKind(p('Hàm số bậc hai')),'quadratic');assert.equal(explorationKind(p('Căn bậc hai số học')),null);assert.equal(explorationKind(p('Xác suất thực nghiệm')),'probability');assert.match(renderExploration(p('Ước chung và ƯCLN')),/data-exploration="gcd"/);assert.equal(explorationKind({...p('Hàm số bậc hai'),type:'Đề thi'}),null);});

test('probability sorting requires all unique events in decreasing likelihood',async()=>{
 const {probabilityEvents,moveEvent,isProbabilityOrder}=await import('../assets/exploration-models.js');
 const correct=probabilityEvents.map(e=>e.id);assert.equal(isProbabilityOrder(correct),true);assert.equal(isProbabilityOrder([...correct].reverse()),false);assert.equal(isProbabilityOrder(correct.slice(1)),false);assert.equal(isProbabilityOrder([...correct.slice(0,-1),correct[0]]),false);
 assert.deepEqual(moveEvent(['a','b','c'],0,2),['b','c','a']);assert.deepEqual(moveEvent(['a','b','c'],2,0),['c','a','b']);assert.deepEqual(moveEvent(['a','b'],0,-1),['a','b']);assert.deepEqual(correct,probabilityEvents.map(e=>e.id));
 assert.equal(probabilityEvents.find(e=>e.id==='double').probability,1/36);
});

test('triangle exploration measures acute, right and obtuse shapes with a constant angle sum',async()=>{
 const {triangleAngles}=await import('../assets/triangle-angles-model.js');
 for(const [x,y] of [[280,40],[80,80],[40,230],[520,230]]){
  const angles=triangleAngles(x,y);assert.ok(angles.every(a=>a>0&&a<180));assert.ok(Math.abs(angles.reduce((a,b)=>a+b,0)-180)<1e-10);
 }
 assert.ok(Math.abs(triangleAngles(80,80)[1]-90)<1e-10);
 assert.ok(triangleAngles(40,230)[1]>90);
 const post={title:'Bài 12: Tổng các góc trong một tam giác',type:'Bài học',category:'Toán học'};
 assert.equal(explorationKind(post),'triangle-angles');assert.match(renderExploration(post),/data-exploration="triangle-angles"/);
});
