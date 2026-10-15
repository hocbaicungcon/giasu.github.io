/* credit: giasu.ai.vn */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {trianglePoints,triangleSasPoints,triangleAsaPoints,renderExtraGeometry} from './geometry.mjs';
import {renderQuiz,normalizeQuizMath} from './interactive.mjs';
test('SSS construction preserves all three selected lengths throughout slider range',()=>{
 for(let ab=3;ab<=9;ab+=.5)for(let bc=3;bc<=9;bc+=.5)for(let ca=3;ca<=9;ca+=.5){
  const points=trianglePoints(ab,bc,ca),valid=ab+bc>ca&&ab+ca>bc&&bc+ca>ab;
  assert.equal(Boolean(points),valid);
  if(!valid)continue;
  const distance=(p,q)=>Math.hypot(p[0]-q[0],p[1]-q[1]);
  assert.ok(Math.abs(distance(points[0],points[1])-ab)<1e-8);
  assert.ok(Math.abs(distance(points[1],points[2])-bc)<1e-8);
  assert.ok(Math.abs(distance(points[2],points[0])-ca)<1e-8);
 }
 assert.equal(trianglePoints(NaN,4,5),null);
 assert.equal(trianglePoints(-1,4,5),null);
});
test('reusable activities provide keyboard controls and validate angle modes',()=>{
 const sss=renderExtraGeometry('type: triangle-sss');
 assert.equal((sss.match(/type="range"/g)||[]).length,5);
 assert.match(sss,/data-match/);assert.match(sss,/aria-live="polite"/);
 for(const mode of ['vertical','parallel'])assert.match(renderExtraGeometry(`type: angle-pairs\nmode: ${mode}`),/data-angle-input/);
 assert.throws(()=>renderExtraGeometry('type: angle-pairs\nmode: unknown'),/mode/);
});
test('quizzes provide optional hints and an explicit reveal control',()=>{
 const quiz=renderQuiz('type: choice\nquestion: Tìm góc\noptions: ["30°", "60°"]\nanswer: 2\nexplanation: Tổng bằng 180°\nhint: Cộng hai góc đã biết',s=>s);
 assert.match(quiz,/class="quiz-hint"/);assert.match(quiz,/quiz-show-solution[^>]*hidden/);
 assert.throws(()=>renderQuiz('type: choice\nquestion: Test\noptions: [A,B]\nanswer: 1\nexplanation: Test\nhint: 5',s=>s),/hint/);
});

test('bare quiz degree notation renders without changing existing math or code',()=>{
 const raw='Góc 35^\\circ, $60^\\circ$ và `90^\\circ`';
 assert.equal(normalizeQuizMath(raw),'Góc $35^\\circ$, $60^\\circ$ và `90^\\circ`');
});

test('SAS construction preserves two sides and included angle',()=>{
 for(let ab=3;ab<=8;ab+=1)for(let a=35;a<=125;a+=15)for(let ac=3;ac<=8;ac+=1){
  const model=triangleSasPoints(ab,a,ac);
  assert.ok(model);
  const [A,B,C]=model.points;
  assert.ok(Math.abs(Math.hypot(B[0]-A[0],B[1]-A[1])-ab)<1e-8);
  assert.ok(Math.abs(Math.hypot(C[0]-A[0],C[1]-A[1])-ac)<1e-8);
  assert.ok(Math.abs(Math.hypot(C[0]-B[0],C[1]-B[1])-model.bc)<1e-8);
 }
 assert.equal(triangleSasPoints(-1,60,5),null);
 assert.equal(triangleSasPoints(5,190,5),null);
});

test('ASA construction preserves one side and two adjacent angles',()=>{
 for(let b=30;b<=75;b+=15)for(let bc=4;bc<=8;bc+=1)for(let c=30;c<=75;c+=15){
  const model=triangleAsaPoints(b,bc,c);
  assert.ok(model);
  const [A,B,C]=model.points;
  assert.ok(Math.abs(Math.hypot(C[0]-B[0],C[1]-B[1])-bc)<1e-8);
  assert.equal(model.angleA,180-b-c);
 }
 assert.equal(triangleAsaPoints(90,7,95),null);
 assert.equal(triangleAsaPoints(-10,7,50),null);
});

test('extended geometry activities provide controls and observations',()=>{
 const sas=renderExtraGeometry('type: triangle-sas');
 assert.match(sas,/data-side="ab"/);
 assert.match(sas,/data-angle-sas/);
 assert.match(sas,/data-match/);

 const asa=renderExtraGeometry('type: triangle-asa');
 assert.match(asa,/data-side="bc"/);
 assert.match(asa,/data-angle-b/);
 assert.match(asa,/data-match/);

 const bisector=renderExtraGeometry('type: angle-bisector');
 assert.match(bisector,/data-angle-xoy/);
 assert.match(bisector,/data-dist-m/);

 const euclid=renderExtraGeometry('type: euclid-parallel');
 assert.match(euclid,/data-coord-m/);
 assert.match(euclid,/data-angle-slope/);
});
