import test from 'node:test';
import assert from 'node:assert/strict';
import {renderMath} from './math.mjs';
test('angle accents use the sans-serif font during layout and preserve TeX source',()=>{
 for(const tex of ['\\widehat{A}','\\widehat{ABC}','\\widehat{A_1}+\\frac{\\widehat{B}}{2}','\\sqrt{x^2+1}']){
  const html=renderMath(tex,{throwOnError:true});
  assert.match(html,/class="[^"]*mathsf/);
  assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
 }
 assert.match(renderMath('\\mathbb{R}+\\mathcal{A}',{throwOnError:true}),/mathbb/);
});

test('upright letters and text labels use sans-serif metrics without changing the original formula',()=>{
 for(const tex of ['\\mathrm{ABC}','5\\,\\mathrm{cm}','\\text{Diện tích}','\\textrm{cm}']){
  const html=renderMath(tex,{throwOnError:true,macros:{'\\unit':'\\mathrm{cm}'}});
  assert.doesNotMatch(html,/class="[^"]*\bmathrm\b/);
  assert.match(html,/class="[^"]*(?:mathsf|textsf|math-vietnamese)/);
  assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
 }
 assert.match(renderMath('\\unit',{macros:{'\\unit':'\\mathrm{cm}'}}),/mathsf/);
});
test('Vietnamese labels retain complete Unicode glyphs and accessible source',()=>{
 for(const label of ['ƯCLN','ƯC','ước chung lớn nhất','Số học','Diện tích']){
  const tex=`\\text{${label}}(a,b)`,html=renderMath(tex,{throwOnError:true});
  assert.match(html,/math-vietnamese/);assert.ok(html.includes('>'+label+'</span>'));assert.ok(html.split('katex-html')[0].includes(label.split(' ')[0]));
  assert.doesNotMatch(html,/latin_fallback/);assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
 }
 assert.doesNotMatch(renderMath('\\htmlClass{untrusted}{x}',{throwOnError:true}),/class="[^"]*untrusted/);
});

test('math comparisons embedded in raw HTML decode angle entities before rendering',()=>{
 const html=renderMath('a &lt; b &gt; 0',{throwOnError:true});assert.match(html,/class="katex"/);assert.match(html,/<annotation encoding="application\/x-tex">a &lt; b &gt; 0<\/annotation>/);
});

test('display and inline formulas render without injected line breaks',()=>{
 const display=renderMath('a+b=c+d',{displayMode:true});assert.doesNotMatch(display,/<wbr/);
 const inline=renderMath('a+b=c+d');assert.doesNotMatch(inline,/<wbr/);
 assert.ok(display.includes('<annotation encoding="application/x-tex">a+b=c+d</annotation>'));
});

test('display formulas retain the authored line layout',async()=>{
 const {wrapLongDisplayFormula}=await import('./math.mjs');
 assert.equal(wrapLongDisplayFormula('a+b=c'), 'a+b=c');
 assert.equal(wrapLongDisplayFormula('x+'.repeat(60)+'y'),'x+'.repeat(60)+'y');
 assert.equal(wrapLongDisplayFormula('\\frac{a+b+c+d}{e+f+g+h}'), '\\frac{a+b+c+d}{e+f+g+h}');
 const long=renderMath('x+'.repeat(60)+'y',{displayMode:true});assert.ok(long.includes('<annotation encoding="application/x-tex">'));
});

test('long inline equation chains promote only when they can be aligned at equality signs',async()=>{
 const tex='AH = \\sqrt{AB^2 - BH^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}',html=renderMath(tex);
 const {wrapLongDisplayFormula}=await import('./math.mjs'),layout=wrapLongDisplayFormula(tex);assert.match(html,/class="katex-display/);assert.ok(layout.startsWith('\\begin{array}{l}'));assert.ok(layout.includes('\\\\= '));assert.match(html,/columnalign="left"/);assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
});

test('proportional proof with an implication remains one coherent display equation',async()=>{
 const tex='\\frac{AB}{AC} = \\frac{DE}{DF} \\implies AB = AC \\times \\frac{DE}{DF} = 16 \\times \\frac{1{,}5}{2} = \\mathbf{12}\\text{ m}.',html=renderMath(tex,{displayMode:true});
 const {wrapLongDisplayFormula}=await import('./math.mjs'),layout=wrapLongDisplayFormula(tex);assert.ok(layout.startsWith('\\begin{array}{l}'));assert.ok(layout.includes('\\implies AB = AC'));assert.ok(layout.includes('= 16'));assert.match(html,/columnalign="left"/);assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));assert.match(html,/⟹/);
});
