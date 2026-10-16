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

test('algebra and calculus exploration models calculate values correctly',async()=>{
 const {rationalNumber,linearFunction,equationBalance,derivativeTangent}=await import('../assets/exploration-models.js');
 // Rational numbers
 assert.deepEqual(rationalNumber(-6,8).simplified,[-3,4]);
 assert.equal(rationalNumber(-6,8).value,-0.75);
 assert.equal(rationalNumber(-6,8).opposite,0.75);
 assert.equal(rationalNumber(6,2).isInteger,true);
 assert.equal(rationalNumber(5,0),null);

 // Linear functions
 const lin1=linearFunction(2,-4);
 assert.equal(lin1.root,2);
 assert.deepEqual(lin1.yIntercept,[0,-4]);
 assert.equal(lin1.monotonicity,'increasing');
 const lin2=linearFunction(-1,3);
 assert.equal(lin2.monotonicity,'decreasing');
 const lin3=linearFunction(0,5);
 assert.equal(lin3.monotonicity,'constant');

 // Equation balance
 const eq=equationBalance(2,3,11);
 assert.equal(eq.transferred,8);
 assert.equal(eq.solution,4);

 // Derivative & tangent for cubic f(x) = x^3 - 3x
 const tanAt0=derivativeTangent(1,0,-3,0,0);
 assert.equal(tanAt0.y0,0);
 assert.equal(tanAt0.slope,-3);
 assert.equal(tanAt0.sign,-1);
 const tanAtCrit=derivativeTangent(1,0,-3,0,-1);
 assert.equal(tanAtCrit.slope,0);
 assert.equal(tanAtCrit.sign,0);
 const tanAtInc=derivativeTangent(1,0,-3,0,2);
 assert.equal(tanAtInc.slope,9);
 assert.equal(tanAtInc.sign,1);

 // Exploration kind attachments
 const p=title=>({title,category:'Toán học',type:'Bài học'});
 assert.equal(explorationKind(p('Tập hợp các số hữu tỉ')),'rational-numberline');
 assert.equal(explorationKind(p('Quy tắc dấu ngoặc và quy tắc chuyển vế')),'equation-balance');
 assert.equal(explorationKind(p('Hàm số bậc nhất và đồ thị')),'linear-function');
 assert.equal(explorationKind(p('Bài giảng ứng dụng đạo hàm để khảo sát hàm số CTST')),'derivative-tangent');
 assert.match(renderExploration(p('Tập hợp các số hữu tỉ')),/data-exploration="rational-numberline"/);
 assert.match(renderExploration(p('Ứng dụng đạo hàm để khảo sát hàm số')),/data-exploration="derivative-tangent"/);
});
