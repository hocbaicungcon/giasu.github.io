import test from 'node:test';
import assert from 'node:assert/strict';
import {initInteractiveDiagrams} from '../assets/interactive-figures.js';

test('interactive diagrams do not run on exam pages or non-lesson contexts',()=>{
 let queriedSvgs=false;
 globalThis.document={
  querySelector(sel){
   if(sel.includes('exam-paper'))return {id:'fake-exam'};
   return {querySelectorAll(){queriedSvgs=true;return [];}};
  }
 };
 try{
  initInteractiveDiagrams();
  assert.equal(queriedSvgs,false);
 }finally{
  delete globalThis.document;
 }
});

test('interactive diagrams find geometric vertices and bind handles on lesson pages',()=>{
 let handleCount=0,toolbarCreated=false;
 const mockCircle=(cx,cy,r)=>({
  tagName:'circle',
  getAttribute(name){return {cx,cy,r}[name];},
  setAttribute(){},
  classList:{contains:()=>false}
 });
 const mockPoly=points=>({
  tagName:'polygon',
  getAttribute(name){return name==='points'?points:'';},
  setAttribute(){},
  points:points.split(' ').map(p=>p.split(',').map(Number))
 });
 const mockSvg={
  tagName:'svg',
  viewBox:{baseVal:{x:0,y:0,width:500,height:300}},
  dataset:{},
  querySelectorAll(sel){
   if(sel==='circle')return [mockCircle(100,50,4),mockCircle(50,200,4),mockCircle(250,200,4)];
   if(sel==='polygon')return [mockPoly('100,50 50,200 250,200')];
   if(sel==='line')return [];
   if(sel==='text')return [];
   return [];
  },
  querySelector(sel){
   return null;
  },
  appendChild(child){
   if(child.className?.baseVal==='diagram-handles-group')handleCount=child.children?.length||3;
  },
  addEventListener(){},
  parentElement:{
   querySelector(){return null;},
   insertBefore(){toolbarCreated=true;},
   appendChild(){toolbarCreated=true;}
  },
  closest(){return null;},
  classList:{contains:()=>false}
 };

 globalThis.document={
  querySelector(sel){
   if(sel.includes('exam-paper'))return null;
   return {querySelectorAll:()=>[mockSvg]};
  },
  createElement(tag){
   return {
    className:'',
    style:{},
    innerHTML:'',
    querySelector(){return {addEventListener(){},hidden:true};}
   };
  },
  createElementNS(ns,tag){
   return {
    children:[],
    setAttribute(){},
    style:{},
    addEventListener(){},
    appendChild(c){this.children.push(c);},
    replaceChildren(){this.children=[];},
    className:{baseVal:''}
   };
  }
 };

 try{
  initInteractiveDiagrams();
  assert.equal(mockSvg.dataset.interactiveDone,'true');
  assert.equal(toolbarCreated,true);
  assert.equal(handleCount,3);
 }finally{
  delete globalThis.document;
 }
});
