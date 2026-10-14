import test from 'node:test';import assert from 'node:assert/strict';
import {renderKnowledgeNotes} from './knowledge-notes.mjs';
test('note maps preserve formulas, nested markup and heading IDs',()=>{
 const html='<div class="flowchart-container" style="background:white"><h3 id="map" style="color:blue">BẢN ĐỒ KIẾN THỨC</h3><div style="display:grid"><div style="border:1px solid"><h4>Góc</h4><p><span class="katex" style="height:1em">x</span> <b>90°</b></p></div></div></div><p style="color:red">Ngoài bản đồ</p>';
 const result=renderKnowledgeNotes(html);assert.match(result,/class="knowledge-note-grid"/);assert.match(result,/class="knowledge-note"/);assert.match(result,/id="map"/);assert.match(result,/<span class="katex" style="height:1em">x<\/span>/);assert.match(result,/<b>90°<\/b>/);assert.match(result,/<p style="color:red">Ngoài bản đồ<\/p>/);assert.doesNotMatch(result,/background:white|color:blue|border:1px solid/);
});
test('unrelated flowcharts are left intact and repeated maps are handled',()=>{
 const other='<div class="flowchart-container" style="color:red"><h3>Quy trình</h3><div>Thử</div></div>';assert.equal(renderKnowledgeNotes(other),other);
 const map='<div class="flowchart-container"><h3>BẢN ĐỒ KIẾN THỨC</h3><div><div><p>Nội dung</p></div></div></div>';assert.equal((renderKnowledgeNotes(map+other+map).match(/class="knowledge-note"/g)||[]).length,2);
});
