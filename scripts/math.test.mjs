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
  assert.match(html,/class="[^"]*(?:mathsf|textsf)/);
  assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
 }
 assert.match(renderMath('\\unit',{macros:{'\\unit':'\\mathrm{cm}'}}),/mathsf/);
});
