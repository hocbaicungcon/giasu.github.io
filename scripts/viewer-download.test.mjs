import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
test('viewer downloads the selected paper and keeps its id while navigating during export',async()=>{
 const element=()=>({disabled:false,textContent:'',addEventListener(){}}),original={...element(),dataset:{paperDownload:'original'}},annotated={...element(),dataset:{paperDownload:'annotated'}};
 const nodes={'.paper-viewer-stage':element(),'canvas':{getContext:()=>({drawImage(){}})},'[data-paper-prev]':element(),'[data-paper-next]':element(),'[data-paper-close]':element(),'[data-paper-title]':element(),'[data-paper-counter]':element(),'[data-paper-download-status]':element()};
 const dialog={open:false,querySelector:s=>nodes[s],querySelectorAll:()=>[original,annotated],addEventListener(){},showModal(){this.open=true},close(){this.open=false}};
 const context={module:{exports:{}},document:{body:{classList:{add(){},remove(){}}},activeElement:null},performance:{now:()=>0}};
 vm.runInNewContext(fs.readFileSync(new URL('../cham-thi/js/viewer.js',import.meta.url),'utf8'),context);
 let finish;const calls=[];
 const viewer=context.module.exports.create({dialog,getIds:()=>['first','second'],render:id=>({image:{width:1,height:1},label:id}),download:(id,type)=>{calls.push([id,type]);return new Promise(resolve=>finish=resolve);}});
 viewer.open('first');const first=original.onclick();viewer.move(1);await annotated.onclick();assert.deepEqual(calls,[['first','original']]);assert.equal(original.disabled,true);
 finish();await first;assert.equal(original.disabled,false);const second=annotated.onclick();assert.deepEqual(calls,[['first','original'],['second','annotated']]);finish();await second;
});
