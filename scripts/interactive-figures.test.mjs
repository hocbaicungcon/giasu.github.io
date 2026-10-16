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

test('moving a vertex synchronizes labels, angle arcs, right angles, and tick marks',()=>{
 const makeEl=(tag,initialAttrs)=>({
  tagName:tag,
  attributes:{...initialAttrs},
  getAttribute(name){return this.attributes[name];},
  setAttribute(name,val){this.attributes[name]=String(val);},
  classList:{contains:()=>false}
 });

 const circleA=makeEl('circle',{cx:'270',cy:'30',r:'4.5'});
 const circleB=makeEl('circle',{cx:'110',cy:'230',r:'4.5'});
 const circleC=makeEl('circle',{cx:'430',cy:'230',r:'4.5'});
 const circleH=makeEl('circle',{cx:'270',cy:'230',r:'3.5'});

 const polyABC=makeEl('polygon',{points:'270,30 110,230 430,230'});
 const altLine=makeEl('line',{x1:'270',y1:'30',x2:'270',y2:'230'});
 const tickAB=makeEl('line',{x1:'185',y1:'125',x2:'195',y2:'135'});
 const angleB=makeEl('path',{d:'M 140,230 A 30 30 0 0 0 126,204','data-angle-kind':'arc','data-angle-vertex':'110,230','data-angle-rays':'270,230 270,30','data-angle-size':'24'});
 const rightAtH=makeEl('path',{d:'M 256,230 L 256,216 L 270,216','data-angle-kind':'right','data-angle-vertex':'270,230','data-angle-rays':'270,30 430,230','data-angle-size':'14'});
 const rectH=makeEl('rect',{x:'256',y:'216',width:'14',height:'14'});
 const labelA=makeEl('text',{x:'265',y:'18'});
 const labelEdgeAB=makeEl('text',{x:'145',y:'115'});

 const handles=[];
 const mockSvg={
  tagName:'svg',
  viewBox:{baseVal:{x:0,y:0,width:540,height:280}},
  dataset:{},
  querySelectorAll(sel){
   if(sel==='circle')return [circleA,circleB,circleC,circleH];
   if(sel==='polygon')return [polyABC];
   if(sel==='line')return [altLine,tickAB];
   if(sel==='path')return [angleB,rightAtH];
   if(sel==='rect')return [rectH];
   if(sel==='text')return [labelA,labelEdgeAB];
   return [];
  },
  querySelector(){return null;},
  appendChild(child){
   if(child.className?.baseVal==='diagram-handles-group')handles.push(...child.children);
  },
  addEventListener(evt,cb){
   if(evt==='pointermove')this.onPointerMove=cb;
  },
  parentElement:{
   querySelector(){return null;},
   insertBefore(){},
   appendChild(){}
  },
  closest(){return null;},
  classList:{contains:()=>false},
  getScreenCTM(){
   return {inverse(){return {a:1,b:0,c:0,d:1,e:0,f:0};}};
  }
 };

 globalThis.DOMPoint=class{
  constructor(x,y){this.x=x;this.y=y;}
  matrixTransform(){return {x:this.x,y:this.y};}
 };

 globalThis.document={
  querySelector(sel){
   if(sel.includes('exam-paper'))return null;
   return {querySelectorAll:()=>[mockSvg]};
  },
  createElement(){
   return {className:'',style:{},innerHTML:'',querySelector(){return {addEventListener(){},hidden:true};}};
  },
  createElementNS(ns,tag){
   const listeners=new Map();
   return {
    children:[],
    attributes:{},
    setAttribute(k,v){this.attributes[k]=String(v);},
    getAttribute(k){return this.attributes[k];},
    style:{},
    addEventListener(evt,cb){listeners.set(evt,cb);},
    trigger(evt,arg){listeners.get(evt)?.(arg);},
    appendChild(c){this.children.push(c);},
    replaceChildren(){this.children=[];},
    className:{baseVal:''},
    setPointerCapture(){},
    releasePointerCapture(){}
   };
  }
 };

 try{
  initInteractiveDiagrams();
  assert.equal(handles.length,4); // A, B, C, H
  const handleA=handles[0];

  // Drag handle A from (270, 30) to (300, 50): dx = +30, dy = +20
  handleA.trigger('pointerdown',{pointerId:1,preventDefault(){},stopPropagation(){}});
  mockSvg.onPointerMove({clientX:300,clientY:50});

  // Verify vertex A circle moved
  assert.equal(circleA.getAttribute('cx'),'300.0');
  assert.equal(circleA.getAttribute('cy'),'50.0');

  // Verify polygon updated
  assert.ok(polyABC.getAttribute('points').startsWith('300.0,50.0'));

  // Drag handle A further to (360, 80) (large displacement +90, +50 from orig)
  mockSvg.onPointerMove({clientX:360,clientY:80});
  assert.equal(circleA.getAttribute('cx'),'360.0');
  assert.equal(circleA.getAttribute('cy'),'80.0');
  assert.ok(polyABC.getAttribute('points').startsWith('360.0,80.0'));

  // Move back to (300, 50)
  mockSvg.onPointerMove({clientX:300,clientY:50});
  assert.equal(circleA.getAttribute('cx'),'300.0');
  assert.equal(circleA.getAttribute('cy'),'50.0');
  assert.ok(polyABC.getAttribute('points').startsWith('300.0,50.0'));

  // Verify vertex label A moved by +30, +20 (original was 265, 18)
  assert.equal(labelA.getAttribute('x'),'295.0');
  assert.equal(labelA.getAttribute('y'),'38.0');

  // Verify altitude line top end moved
  assert.equal(altLine.getAttribute('x1'),'300.0');
  assert.equal(altLine.getAttribute('y1'),'50.0');

  // Verify edge label AB moved along with the side
  assert.ok(labelEdgeAB.getAttribute('x')!=='145');

  // Verify tick mark on AB moved to new segment
  assert.ok(tickAB.getAttribute('x1')!=='185');

  // Now test moving vertex B from (110, 230) to (90, 250): dx = -20, dy = +20
  const handleB=handles[1];
  handleB.trigger('pointerdown',{pointerId:2,preventDefault(){},stopPropagation(){}});
  mockSvg.onPointerMove({clientX:90,clientY:250});

  // The angle arc follows its current rays instead of translating as a rigid path.
  assert.notEqual(angleB.getAttribute('d'),'M 140,230 A 30 30 0 0 0 126,204');
  assert.match(angleB.getAttribute('d'),/^M /);
  // A right-angle marker disappears when its current rays are no longer perpendicular.
  assert.equal(rightAtH.getAttribute('d'),'');

  // Verify midpoint H moved automatically (midpoint of B(90, 250) and C(430, 230) is (260, 240))
  assert.equal(circleH.getAttribute('cx'),'260.0');
  assert.equal(circleH.getAttribute('cy'),'240.0');

  // Verify right-angle rect at H moved with H (orig rect was 256, 216; dx = -14, dy = -14 from H(270, 230))
  assert.equal(rectH.getAttribute('x'),'246.0');
  assert.equal(rectH.getAttribute('y'),'226.0');
 }finally{
  delete globalThis.DOMPoint;
  delete globalThis.document;
 }
});
