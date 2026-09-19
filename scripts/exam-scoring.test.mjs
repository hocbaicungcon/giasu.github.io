import test from 'node:test';
import assert from 'node:assert/strict';
import {gradeExam,uses90MinuteScoring} from '../assets/exam-core.js';
const questions=[...Array.from({length:12},()=>({kind:'choice',options:['A','B','C','D'],answer:'0'})),...Array.from({length:4},()=>({kind:'truefalse',options:['a','b','c','d'],answer:[true,false,true,false]})),...Array.from({length:6},()=>({kind:'short',options:[],answer:['2,5']}))].map((q,i)=>({...q,id:'q'+i}));
const exam={duration:90,questions};
const correct=Object.fromEntries(questions.map(q=>[q.id,q.kind==='truefalse'?q.answer.map(String):q.kind==='short'?'2.5':'0']));
test('90-minute paper totals 3 + 4 + 3 points and unanswered paper scores zero',()=>{
 const result=gradeExam(questions,correct,exam);
 assert.equal(result.score,10);
 assert.equal(result.points.slice(0,12).reduce((a,b)=>a+b),3);
 assert.equal(result.points.slice(12,16).reduce((a,b)=>a+b),4);
 assert.equal(result.points.slice(16).reduce((a,b)=>a+b),3);
 assert.equal(gradeExam(questions,{},exam).score,0);
});
test('true/false awards nonlinear points for zero through four correct statements',()=>{
 for(let n=0;n<=4;n++){
  const result=gradeExam(questions,{q12:questions[12].answer.map((a,i)=>i<n?String(a):'')},exam);
  assert.equal(result.points[12],[0,.1,.25,.5,1][n]);
  assert.equal(result.scores[12],n/4);
 }
 assert.equal(gradeExam(questions,{q0:'0',q12:['true','','',''],q16:'2.5'},exam).score,.85);
});
test('missing answers prevent total and other paper formats retain existing scoring',()=>{
 const missing=questions.map((q,i)=>i===12?{...q,answer:null}:q);
 assert.equal(gradeExam(missing,correct,exam).score,null);
 assert.equal(uses90MinuteScoring({...exam,duration:60}),false);
 assert.equal(uses90MinuteScoring({...exam,questions:questions.slice(1)}),false);
 assert.equal(uses90MinuteScoring({...exam,mode:'self-review'}),false);
 assert.equal(gradeExam(questions,{q12:['true','','','']},{duration:60}).weighted,false);
});
