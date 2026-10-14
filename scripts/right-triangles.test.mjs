import test from 'node:test';
import assert from 'node:assert/strict';
import {rightTriangle} from '../assets/right-triangles-model.js';
import {renderExtraGeometry} from './geometry.mjs';
test('right triangles preserve a right angle and congruent data across slider range',()=>{
 for(let a=2;a<=8;a+=.25)for(let b=2;b<=8;b+=.25){
  const t=rightTriangle(a,b);assert.ok(Math.abs(t.hypotenuse**2-a*a-b*b)<1e-10);assert.equal(t.angleB+t.angleC,90);
  const [A,B,C]=t.points;assert.equal((B[0]-A[0])*(C[0]-A[0])+(B[1]-A[1])*(C[1]-A[1]),0);
 }
 assert.throws(()=>rightTriangle(0,3),RangeError);assert.throws(()=>rightTriangle(3,NaN),RangeError);
});
test('right triangle activity provides slider alternatives, reset and four criteria',()=>{
 const html=renderExtraGeometry('type: right-triangles');assert.match(html,/data-leg="a"/);assert.match(html,/data-leg="b"/);assert.match(html,/data-reset/);assert.match(html,/<noscript>/);assert.equal((html.match(/<option /g)||[]).length,4);
});
