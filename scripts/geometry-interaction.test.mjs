import test from 'node:test';
import assert from 'node:assert/strict';
import {measureAngle,GeometryScene} from '../assets/geometry-interaction.js';

test('measureAngle returns the smaller unsigned angle with a signed drawing sweep',()=>{
 const right=measureAngle([0,0],[1,0],[0,1]);assert.equal(right.degrees,90);assert.ok(right.delta>0);
 const reflex=measureAngle([0,0],[0,1],[1,0]);assert.equal(reflex.degrees,90);assert.ok(reflex.delta<0);
 const straight=measureAngle([0,0],[1,0],[-1,0]);assert.equal(straight.degrees,180);
});

test('geometry scenes compose connected objects and expose their point state',()=>{
 let attached;
 const fake=()=>({dataset:{},setAttribute(){},append(){},replaceChildren(){},contains(){return false;},addEventListener(){},querySelector(){return null;},textContent:'',focus(){}});
 globalThis.document={createElementNS:fake,activeElement:null};
 try{
 const scene=new GeometryScene({append(node){attached=node;},addEventListener(){}});
 scene.point('A',0,0,{minX:-10,maxX:10,minY:-10,maxY:10,constrain:([x,y])=>[x,Math.max(0,y)]})
  .point('B',10,0,{draggable:false}).point('C',0,10,{draggable:false})
  .polygon('triangle',['A','B','C']).segment('base','B','C').circle('circle','A',5)
  .angle('angle','A','B','C').text('label','A',s=>String(s.points.size));
 assert.deepEqual(scene.snapshot(),{A:{x:0,y:0},B:{x:10,y:0},C:{x:0,y:10}});
 scene.setPoint('A',50,-8);
 assert.deepEqual(scene.snapshot().A,{x:10,y:0});
 assert.deepEqual(scene.objects.map(item=>item.type),['point','point','point','polygon','segment','circle','angle','text']);
 assert.ok(attached);
 }finally{delete globalThis.document;}
});
