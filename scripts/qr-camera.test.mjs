import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
function harness(){
 const timers=[],tracks=[],events={},pending=[];let payload=null,imported=0;
 const dialog={open:false,showModal(){this.open=true},close(){this.open=false;events.close?.()},addEventListener(name,fn){events[name]=fn}};
 const video={readyState:2,videoWidth:1280,videoHeight:720,srcObject:null,play:async()=>{}};
 const status={textContent:''};
 const stream=()=>({getTracks:()=>[{stop(){tracks.push('stopped')}}]});
 const ctx={drawImage(){},getImageData(){return {data:new Uint8ClampedArray(4)}}};
 const root={addEventListener(){},jsQR:()=>payload,ChamTNInputs:{parseQrPayload(value){if(value!=='valid')throw new Error('invalid QR');return [{code:'101'}]}}};
 const sandbox={window:root,navigator:{mediaDevices:{getUserMedia:()=>new Promise(resolve=>pending.push(resolve))}},document:{hidden:false,createElement:()=>({getContext:()=>ctx}),addEventListener(){}},setTimeout:fn=>{timers.push(fn);return timers.length},clearTimeout(){}};
 vm.runInNewContext(fs.readFileSync(new URL('../cham-thi/js/qr-camera.js',import.meta.url),'utf8'),sandbox);
 const camera=root.ChamTNQrCamera.create({dialog,video,status,onImport:()=>imported++});
 return {camera,dialog,video,status,pending,stream,timers,tracks,setPayload:value=>payload=value,get imported(){return imported}};
}
test('valid QR imports once, closes the dialog and stops all camera tracks',async()=>{
 const h=harness();h.setPayload({data:'valid'});const opening=h.camera.start();h.pending.shift()(h.stream());await opening;
 assert.equal(h.imported,1);assert.equal(h.dialog.open,false);assert.equal(h.tracks.length,1);assert.equal(h.video.srcObject,null);
});
test('invalid QR does not import; a later valid frame imports automatically',async()=>{
 const h=harness();h.setPayload({data:'other'});const opening=h.camera.start();h.pending.shift()(h.stream());await opening;
 assert.equal(h.imported,0);assert.equal(h.dialog.open,true);assert.match(h.status.textContent,/invalid QR/);
 h.setPayload({data:'valid'});await h.timers.shift()();assert.equal(h.imported,1);assert.equal(h.dialog.open,false);
});
test('closing while permission is pending releases the late stream without importing',async()=>{
 const h=harness();h.setPayload({data:'valid'});const opening=h.camera.start();h.camera.stop();h.pending.shift()(h.stream());await opening;
 assert.equal(h.imported,0);assert.equal(h.tracks.length,1);assert.equal(h.dialog.open,false);
});
