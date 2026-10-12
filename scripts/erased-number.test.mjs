import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),readPng=require('./fixtures/png-fixture.cjs');
const sandbox={module:{exports:{}}};vm.runInNewContext(fs.readFileSync(new URL('../cham-thi/js/omr.js',import.meta.url),'utf8'),sandbox);const O=sandbox.module.exports;
const positions=Array.from({length:4},(_,col)=>Array.from({length:10},(_,digit)=>[col,digit]));
function columns(ink){
 const dot=(col,digit)=>{const item=ink[col];dot.lastEvidence=item?.digit===digit?item.evidence:0;dot.lastOccluded=0;return item?.digit===digit?item.score:0;};
 return O.numericColumns(dot,positions);
}
test('erased edge trace beside two strong digits is omitted with a review flag',()=>{
 const result=columns([{digit:1,score:.38,evidence:.052},{digit:1,score:1,evidence:.43},{digit:0,score:1,evidence:.47},null]);
 assert.equal(result.map(c=>c.value).join(''),'10');assert.equal(result[0].erased,true);assert.match(result[0].flag,/cần kiểm tra/);
 assert.deepEqual(Array.from(result.filter(c=>c.value).map(c=>c.position[0])),[1,2]);
});
test('uniformly faint digits, clear 110, and a weak interior digit remain intact',()=>{
 for(const ink of [
  [{digit:1,score:.38,evidence:.052},{digit:1,score:.4,evidence:.055},{digit:0,score:.39,evidence:.053}],
  [{digit:1,score:1,evidence:.4},{digit:1,score:1,evidence:.43},{digit:0,score:1,evidence:.47}],
  [{digit:1,score:1,evidence:.4},{digit:1,score:.38,evidence:.052},{digit:0,score:1,evidence:.47}],
 ])assert.equal(columns(ink).map(c=>c.value).join(''),'110');
 assert.equal(columns([{digit:1,score:.38,evidence:.052},{digit:0,score:1,evidence:.47}]).map(c=>c.value).join(''),'10','one strong digit is insufficient evidence for erasure');
});
test('private local sample reads -10; no image data is bundled in the repository', {skip:!process.env.OMR_ERASURE_SAMPLE},()=>{
 const image=readPng(process.env.OMR_ERASURE_SAMPLE),aligned=O.autoAlign(image);assert.ok(aligned);
 const result=O.recognize(image,aligned.points,aligned.profile);assert.equal(result.answers.p3[1],'-10');assert.match(result.flags.p3[1],/đã xóa ở cột 1/);
});

test('two dark alternatives remain ambiguous, while a dark choice beside an erased trace remains reviewable',()=>{
 const ambiguous=O.choose([1,.95,0,0],['A','B','C','D'],true,[.45,.4,0,0]);
 assert.equal(ambiguous.value,'');assert.match(ambiguous.flag,/tô nhiều/);
 const faded=O.choose([1,.6,0,0],['A','B','C','D'],true,[.45,.08,0,0]);
 assert.equal(faded.value,'A');assert.match(faded.flag,/cần kiểm tra/);
});
test('private training pages preserve erased columns, decimals, blanks and physical gaps', {skip:!process.env.OMR_TRAIN_PAGES},()=>{
 const cases=[
  [2,['7','-10','106','405']], // Finger covers a corner; distributed markers retain alignment.
  [6,['7','-10','1,6','405']], // An actual marked decimal is distinct from 106.
  [10,['7','','106','405']], // An unanswered question must remain empty.
  [16,['7','-10','106','460']], // Erased leading digit is omitted but remains flagged.
  [23,['7','-10','106','4,5']],
  [28,['-70','-10','106','405']], // A physical gap is retained as a review warning.
  [42,['7','-10','','405']],
 ];
 for(const [page,expected] of cases){
  const file=`${process.env.OMR_TRAIN_PAGES}/page-${String(page).padStart(2,'0')}.png`;
  const image=readPng(file),aligned=O.autoAlign(image);assert.ok(aligned,`page ${page}: alignment`);
  assert.equal(aligned.profile,'standard');assert.ok(aligned.support>=.9);
  const result=O.recognize(image,aligned.points,aligned.profile);
  assert.deepEqual(Array.from(result.answers.p3.slice(0,4)),expected,`page ${page}: short answers`);
  if(page===16)assert.match(result.flags.p3[1],/đã xóa ở cột 1/);
  if(page===28)assert.match(result.flags.p3[0],/khoảng trống/);
 }
});
