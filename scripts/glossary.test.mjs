/* credit: giasu.ai.vn */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {prepareGlossary} from './glossary.mjs';
const master=JSON.parse(fs.readFileSync(new URL('../assets/data/math-glossary.json',import.meta.url),'utf8'));
const definitions=JSON.parse(fs.readFileSync(new URL('../assets/data/math-glossary-definitions.json',import.meta.url),'utf8'));
const extra=JSON.parse(fs.readFileSync(new URL('../assets/data/math-glossary-supplement.json',import.meta.url),'utf8'));
test('all terms have definitions and retain separate editorial provenance',()=>{
 const terms=prepareGlossary(master,extra,definitions);
 assert.equal(master.terms.length,518);assert.equal(terms.length,616);
 assert.equal(master.terms.filter(t=>t.definition).length,134);
 assert.equal(Object.keys(definitions).length,384);
 assert.ok(terms.every(t=>t.definition.trim()));
 assert.ok(terms.filter(t=>t.origin==='workbook').every(t=>t.source));
 assert.match(terms.find(t=>t.id==='excel-102').definitionSource,/tự biên soạn/);
 assert.match(terms.find(t=>t.id==='excel-5').definitionSource,/Excel/);
 assert.ok(terms.filter(t=>t.origin==='editorial').every(t=>t.source.includes('bổ sung')));
});
test('aliases handle spelling variants without matching ambiguous single-word context',()=>{
 const terms=prepareGlossary(master,extra,definitions);
 assert.ok(terms.find(t=>t.term==='Mặt phẳng toạ độ').aliases.includes('mặt phẳng tọa độ'));
 assert.ok(terms.find(t=>t.term==='Định lí toán học').aliases.includes('định lý toán học'));
 assert.ok(!terms.find(t=>t.id==='excel-102').aliases.includes('giao'));
 assert.ok(terms.find(t=>t.id==='goc-ngoai').aliases.includes('góc ngoài'));
});
test('definitions escape HTML and render LaTeX without introducing executable markup',()=>{
 const [term]=prepareGlossary({terms:[{id:'safe',term:'Kiểm thử',definition:'<img src=x onerror=alert(1)> $x^2$',source:'Test'}]});
 assert.ok(!term.html.includes('<img'));assert.match(term.html,/&lt;img/);assert.match(term.html,/class="katex"/);
 assert.throws(()=>prepareGlossary({terms:[{id:'x',term:'A'},{id:'x',term:'B'}]}),/ID trùng/);
});
test('all definition and title formulas render without raw math delimiters',()=>{
 for(const term of prepareGlossary(master,extra,definitions)){
  assert.ok(!term.html.includes('$'),term.id+' definition');
  assert.ok(!term.termHtml.includes('$'),term.id+' title');
  assert.doesNotMatch(term.html,/katex-error/);
 }
});

test('highlighting prefers complete phrases and avoids ordinary prose',async()=>{
 const {createGlossaryMatcher}=await import('../assets/glossary-matcher.js');
 const terms=prepareGlossary(master,extra,definitions),find=createGlossaryMatcher(terms);
 const matches=find('Khoảng cách từ A đến đường thẳng d; có khoảng 20 số đối tượng.');
 assert.ok(matches.some(m=>m.text==='Khoảng cách'&&m.id==='bo-sung-97'));assert.ok(!matches.some(m=>m.text.toLocaleLowerCase('vi')==='khoảng'||m.text==='số đối'));
 assert.ok(find('Khoảng cách từ một điểm đến một đường thẳng')[0].id==='excel-225');
 assert.ok(find('mẫu số liệu gồm 20 giá trị')[0].id==='bo-sung-98');
 assert.ok(!find('kiến thức trọng tâm của bài học').some(m=>m.text==='trọng tâm'));
 assert.ok(find('Trọng tâm của tam giác')[0].id==='bo-sung-68');
 assert.ok(find('khoảng   cách giữa A và B')[0].id==='bo-sung-97');
 assert.deepEqual(find('khoảng 20 cm và lời khuyên'),[]);
 assert.ok(!find('khoảng cáchx').some(m=>m.id==='bo-sung-97'));
 assert.ok(!find('Xác nhận hai tam giác đều vuông').some(m=>m.text==='tam giác đều'));
 assert.ok(find('Một tam giác đều có ba cạnh bằng nhau').some(m=>m.text==='tam giác đều'));
 assert.ok(find('số đối của −3').some(m=>m.id==='bo-sung-33'));
});
