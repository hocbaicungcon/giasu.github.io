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
 assert.equal(master.terms.length,518);assert.equal(terms.length,614);
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
