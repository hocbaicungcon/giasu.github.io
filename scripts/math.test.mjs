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
