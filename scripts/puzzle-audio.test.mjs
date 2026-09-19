import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

function harness(muted=false){
 const clips=[];
 class Audio {
  constructor(){clips.push(this);this.currentTime=1;this.paused=true;}
  addEventListener(){}
  play(){return new Promise(resolve=>{this.loaded=()=>{this.paused=false;resolve();};});}
  pause(){this.paused=true;}
 }
 const context=vm.createContext({Audio,URL,localStorage:{getItem:()=>String(muted)},document:{hidden:false,querySelectorAll:()=>[],addEventListener(){}}});
 const source=fs.readFileSync(new URL('../assets/puzzle-audio.js',import.meta.url),'utf8').replace(/^export /gm,'').replaceAll('import.meta.url',JSON.stringify('https://example.test/assets/puzzle-audio.js'));
 vm.runInContext(source+'\nthis.api={sound,stopSounds};',context);
 return {clips,...context.api};
}
test('individual sound stops on arrival, even if loading finishes late',async()=>{
 const {clips,sound}=harness();const stop=sound('row');stop();
 clips[0].loaded();await Promise.resolve();assert.equal(clips[0].paused,true);assert.equal(clips[0].currentTime,0);
});
test('stopping a rowing clip leaves other effects alone; global stop cancels all',async()=>{
 const {clips,sound,stopSounds}=harness();const stopRow=sound('row');sound('win');
 clips.forEach(c=>c.loaded());await Promise.resolve();stopRow();
 assert.equal(clips[0].paused,true);assert.equal(clips[1].paused,false);
 stopSounds();assert.ok(clips.every(c=>c.paused));
});
test('muted audio returns a harmless stop callback without loading a clip',()=>{
 const {clips,sound}=harness(true);sound('row')();assert.equal(clips.length,0);
});
