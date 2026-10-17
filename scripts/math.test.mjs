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
 const {wrapLongDisplayFormula}=await import('./math.mjs'),layout=wrapLongDisplayFormula(tex);assert.match(html,/class="katex-display/);assert.ok(layout.startsWith('\\begin{aligned}AH &= '));assert.ok(layout.includes('\\\\&= '));assert.match(html,/columnalign="right left"/);assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
});

test('proportional proof with an implication remains one coherent display equation',async()=>{
 const tex='\\frac{AB}{AC} = \\frac{DE}{DF} \\implies AB = AC \\times \\frac{DE}{DF} = 16 \\times \\frac{1{,}5}{2} = \\mathbf{12}\\text{ m}.',html=renderMath(tex,{displayMode:true});
 const {wrapLongDisplayFormula}=await import('./math.mjs'),layout=wrapLongDisplayFormula(tex);
 assert.ok(layout.startsWith('\\begin{aligned}& '));
 assert.ok(layout.includes('\\implies & AB = AC'));
 assert.ok(layout.includes('= 16'));
 assert.match(html,/columnalign="right left"/);
 assert.ok(html.includes(`<annotation encoding="application/x-tex">${tex}</annotation>`));
 assert.match(html,/⟹/);
});

test('inline angle formulas with implications do not wrap into multi-line arrays',async()=>{
 const tex='\\widehat{A} \\implies \\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}';
 const {wrapLongDisplayFormula}=await import('./math.mjs'),layout=wrapLongDisplayFormula(tex);
 assert.equal(layout,tex);
 const html=renderMath(tex);
 assert.ok(!html.includes('katex-auto-wrap'));
 assert.ok(!html.includes('mtable'));
});

test('implication puts arrow in its own left column with formulas aligned in second column',async()=>{
 const tex='\\frac{2x}{30} = \\frac{3y}{30} = \\frac{5z}{30} \\implies \\frac{x}{15} = \\frac{y}{10} = \\frac{z}{6}';
 const {wrapLongDisplayFormula}=await import('./math.mjs'),layout=wrapLongDisplayFormula(tex);
 assert.equal(layout,'\\begin{aligned}& \\frac{2x}{30} = \\frac{3y}{30} = \\frac{5z}{30}\\\\\\implies & \\frac{x}{15} = \\frac{y}{10} = \\frac{z}{6}\\end{aligned}');
 const html=renderMath(tex);
 assert.match(html,/class="katex-display/);
 assert.match(html,/columnalign="right left"/);
});


test('wrapped equation rows keep display style so fractions are not shrunk',async()=>{
 const html=renderMath('\\frac{a+b}{c+d} = \\frac{1}{2} \\implies x = \\frac{p}{q} = \\frac{r}{s} = \\frac{t}{u} = 1',{displayMode:true});
 assert.match(html,/displaystyle="true"/);assert.ok(!/<mstyle scriptlevel="0" displaystyle="false"/.test(html));
});

test('long equation chains break into balanced rows with aligned equals signs and no orphan row',async()=>{
 const {wrapLongDisplayFormula,visualWidth}=await import('./math.mjs');
 const tex='\\frac{3}{4} + \\frac{5}{6} - \\frac{7}{12} = \\frac{9}{12} + \\frac{10}{12} - \\frac{7}{12} = \\frac{9+10-7}{12} = \\frac{12}{12} = 1';
 const layout=wrapLongDisplayFormula(tex),rows=layout.replace('\\begin{aligned}','').replace('\\end{aligned}','').split('\\\\');
 assert.ok(rows.length>=2&&rows.slice(1).every(row=>row.startsWith('&= ')));
 const widths=rows.map(row=>visualWidth(row.replace(/&/g,'')));
 assert.ok(Math.min(...widths)>=0.4*Math.max(...widths),`unbalanced rows ${widths}`);
 assert.ok(visualWidth('\\frac{a+b+c}{d}')<8&&visualWidth('\\sqrt{x}')<4,'fractions and roots count by rendered width');
});

test('very wide inline formulas become their own block rather than a scrolling inline box',()=>{
 const wide='\\sqrt{2x^3+3x^2+6x+16}-\\sqrt{4-x}\\ge 2\\sqrt{3}+\\sqrt{x^2+1}+\\sqrt{x+9}-\\sqrt{x-2}+\\sqrt{3x}+x+y+z';
 assert.match(renderMath(wide),/class="katex-display/);
 assert.ok(!/class="katex-display/.test(renderMath('a+b=c')));
});

test('imported formulas lose invisible delimiter pairs and get row breaks in separator-less arrays',async()=>{
 const {normalizeImportedFormula}=await import('./math.mjs');
 const rows=normalizeImportedFormula('\\left\\{ \\begin{array}{l} a_{ 1 } =k.b_{ 1 } a_{ 2 } =k.b_{ 2 } \\end{array} \\right.');
 assert.ok(rows.includes('\\\\')&&rows.includes('\\right.'),'a real brace group stays');
 assert.equal(normalizeImportedFormula('\\left. x=1 \\right.'),'x=1');
 assert.equal(normalizeImportedFormula('\\left. x \\rightarrow y \\right.'),'x \\rightarrow y');
 assert.equal(normalizeImportedFormula('\\left ( { y } \\right.  )'),'\\left ( { y } \\right.  )');
});

test('a long side of an equation may continue at a plus or minus sign, indented under the equals sign',async()=>{
 const {wrapLongDisplayFormula}=await import('./math.mjs');
 const tex='P(A)=P(A\\cap B)+P(A\\cap\\bar B)+P(B)\\cdot P(A\\mid B)+P(\\bar B)\\cdot P(A\\mid\\bar B)+P(C)+P(D)+P(E)';
 const layout=wrapLongDisplayFormula(tex);
 assert.match(layout,/\\\\&\\quad [+-]/);
 assert.ok(layout.startsWith('\\begin{aligned}P(A) &='));
});
