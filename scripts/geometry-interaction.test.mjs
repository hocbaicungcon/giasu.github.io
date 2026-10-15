import test from 'node:test';
import assert from 'node:assert/strict';
import {measureAngle,GeometryScene} from '../assets/geometry-interaction.js';

test('measureAngle returns the smaller unsigned angle with a signed drawing sweep',()=>{
 const right=measureAngle([0,0],[1,0],[0,1]);assert.equal(right.degrees,90);assert.ok(right.delta>0);
 const reflex=measureAngle([0,0],[0,1],[1,0]);assert.equal(reflex.degrees,90);assert.ok(reflex.delta<0);
 const straight=measureAngle([0,0],[1,0],[-1,0]);assert.equal(straight.degrees,180);
 assert.throws(()=>measureAngle([0,0],[0,0],[1,1]),/tia có độ dài bằng 0/);
 assert.throws(()=>measureAngle([NaN,0],[1,0],[0,1]),/tọa độ hữu hạn/);
});

test('geometry scenes compose connected objects and expose their point state',()=>{
 let attached,changes=0,removed=0;
 const fake=()=>({dataset:{},setAttribute(){},append(){},replaceChildren(){},contains(){return false;},addEventListener(){},removeEventListener(){removed++;},querySelector(){return null;},textContent:'',focus(){},remove(){}});
 globalThis.document={createElementNS:fake,activeElement:null};
 try{
 const scene=new GeometryScene({append(node){attached=node;},addEventListener(){},removeEventListener(){removed++;}},{onChange:()=>changes++});
 scene.point('A',0,0,{minX:-10,maxX:10,minY:-10,maxY:10,constrain:([x,y])=>[x,Math.max(0,y)]})
  .point('B',10,0,{draggable:false}).point('C',0,10,{draggable:false})
  .polygon('triangle',['A','B','C']).segment('base','B','C').circle('circle','A',5)
  .angle('angle','A','B','C').text('label','A',s=>String(s.points.size));
 assert.deepEqual(scene.snapshot(),{A:{x:0,y:0},B:{x:10,y:0},C:{x:0,y:10}});
 scene.setPoints({A:[8,6],B:[7,4]});assert.equal(changes,1);
 scene.transaction(current=>{current.setPoint('A',4,3);current.setVisible('triangle',false);});assert.equal(changes,2);assert.equal(scene.objects.find(item=>item.id==='triangle').visible,false);
 scene.setPoint('A',50,-8);
 assert.deepEqual(scene.snapshot().A,{x:10,y:0});
 assert.deepEqual(scene.snapshot().B,{x:7,y:4});
 assert.deepEqual(scene.objects.map(item=>item.type),['point','point','point','polygon','segment','circle','angle','text']);
 const before=scene.snapshot();assert.throws(()=>scene.transaction(current=>{current.setPoint('A',2,2);current.setVisible('triangle',true);throw Error('rollback');}),/rollback/);assert.deepEqual(scene.snapshot(),before);assert.equal(scene.objects.find(item=>item.id==='triangle').visible,false);
 assert.throws(()=>scene.setPoints({A:[2,2],B:[Infinity,0]}),/hữu hạn/);assert.deepEqual(scene.snapshot().A,{x:10,y:0});
 assert.ok(attached);
 scene.destroy();assert.equal(scene.points.size,0);assert.equal(removed,5);assert.equal(scene.destroyed,true);
 }finally{delete globalThis.document;}
});
