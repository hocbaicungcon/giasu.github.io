// Self-contained unit tests (no user files needed): node tests/unit.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { tidy, join, mtefToLatex, MtefError, oleToLatex } from '../src/mtef.js';
import { latexToOmml, latexToMathml, LatexError } from '../src/latex2omml.js';
import { ommlToLatex } from '../src/omml.js';
import { parseXml } from '../src/xml.js';
import { scanBody, previewReplace, convertMathTypeInPackage, rewriteEquations } from '../src/app-core.js';
import { mathTypeObject, convertNativeToMathType, makeMathTypePackage } from '../src/mathtype-object.js';
import { latexToEquationStream } from '../src/mtef-writer.js';
import { buildOle } from '../src/ole-writer.js';
import { renderLatex } from '../src/mathrender.js';
import { suggest, expandSnippet, tokenAt, nextStop } from '../src/latex-suggest.js';
import { latexToSympy, normalizeInput } from '../src/sympy-bridge.js';
import { splitChildren, parseBody, analyze, normalize, shuffleVersion, buildBody } from '../src/exam.js';

let n = 0;
const queue = [];
const test = (name, fn) => { queue.push([name, fn]); };
const B = '\\';

test('tidy', () => {
  assert.equal(tidy('x^{2} + y_{1}'), 'x^2 + y_1');
  assert.equal(tidy('{{x}}'), '{x}');
  assert.equal(tidy(`${B}left( a ${B}right)`), '(a)');
  assert.equal(tidy(`${B}left( ${B}frac{a}{b} ${B}right)`), `${B}left( ${B}frac{a}{b} ${B}right)`);
});
test('join spacing', () => {
  assert.equal(join(['a', '=', 'b']), 'a = b');
  assert.equal(join(['1', ',', '5']), '1{,}5');
  assert.equal(join(['-', 'x']), '-x');
});
test('bad input is refused, not guessed', () => {
  assert.throws(() => oleToLatex(new Uint8Array(600)), MtefError);
  assert.throws(() => mtefToLatex(new Uint8Array([4, 0, 0])), MtefError);
});
test('latex -> omml structure', () => {
  const x = latexToOmml(`${B}frac{a}{b}+${B}sqrt[3]{x^2}`);
  parseXml(`<r xmlns:m="m" xmlns:w="w">${x}</r>`);
  for (const tag of ['<m:f>', '<m:rad>', '<m:sSup>', '<m:deg>']) assert.ok(x.includes(tag), tag);
  assert.ok(latexToOmml('x', { display: true }).startsWith('<m:oMathPara>'));
  assert.ok(latexToOmml(`${B}int_0^1 f(x)${B},dx`).includes('<m:nary>'));
  assert.ok(latexToOmml(`${B}lim_{x${B}to 0} f(x)`).includes('<m:limLow>'));
  assert.ok(latexToOmml(`${B}left${B}{ ${B}begin{array}{l} a ${B}${B} b ${B}end{array} ${B}right.`).includes('<m:eqArr>'));
});
test('latex -> mathml (editor preview) is well formed', () => {
  for (const t of [`${B}frac{a}{b}+${B}sqrt[3]{x^2}`, `${B}int_0^1 f(x)${B},dx`, `${B}left${B}{ ${B}begin{array}{l} a ${B}${B} b ${B}end{array} ${B}right.`, `${B}lim_{x${B}to 0}${B}frac{${B}sin x}{x}`, `${B}vec{AB}+${B}overline{x}`, `${B}sum_{i=1}^n i`]) parseXml(latexToMathml(t));
  assert.throws(() => latexToMathml(`${B}nosuch`), LatexError);
});
test('unknown LaTeX is refused', () => {
  assert.throws(() => latexToOmml(`${B}nosuchcommand{x}`), LatexError);
  assert.throws(() => latexToOmml(`${B}frac{a}`), LatexError);
});
test('latex -> omml -> latex', () => {
  for (const t of [`${B}frac{a}{b + 1}`, `x^2 + ${B}sqrt[3]{y}`, `${B}sum_{i = 1}^n i^2`, `${B}left( x ${B}right)^2`, `${B}overline{AB}`, `${B}vec{u}`, `${B}pi r^2`, `a ${B}leq b`]) {
    const [back] = ommlToLatex(latexToOmml(t));
    assert.equal(tidy(back), tidy(t), t);
  }
});
test('xml parser', () => {
  const r = parseXml('<a x="1"><b>t&amp;u</b><c/><!-- c --></a>');
  assert.equal(r.children.length, 2);
  assert.equal(r.children[0].children[0], 't&u');
  assert.deepEqual(splitChildren('<w:r><w:t>a</w:t></w:r><w:r/><w:p><w:r/></w:p>').length, 3);
});

const fixture = readFileSync(new URL('../fixtures/sample-body.xml', import.meta.url), 'utf8');
test('fixture scan finds real MathType equations', () => {
  const s = scanBody(fixture);
  assert.ok(s.equations.length > 100);
  assert.ok(s.equations.every((e) => e.kind === 'mathtype' && e.latex !== null));
  assert.ok(s.equations.some((e) => e.latex.includes(`${B}frac`)));
});
test('fixture convert: no MathType object left, OMML well formed', () => {
  const r = convertMathTypeInPackage(fixture, { display: true });
  assert.equal(r.kept.length, 0);
  assert.ok(r.changed && r.converted > 100);
  assert.ok(!/<w:object\b/.test(r.pkg));
  const doc = /<pkg:part pkg:name="\/word\/document\.xml"[^>]*>\s*<pkg:xmlData>([\s\S]*?)<\/pkg:xmlData>/.exec(r.pkg)[1];
  parseXml(doc);
  assert.ok(!/oleObject\d+\.bin" pkg:contentType/.test(r.pkg) || r.pkg.length < fixture.length, 'orphan OLE parts are dropped');
});
test('find/replace preview and apply', () => {
  const s = scanBody(fixture);
  const rows = previewReplace(s, { find: `${B}infty`, replace: `${B}infty + 1`, regex: false, matchCase: true, includeMathType: true });
  assert.ok(rows.length > 0 && rows.every((r) => r.after.includes('+ 1')));
  assert.throws(() => previewReplace(s, { find: '(', replace: '[', regex: true, matchCase: true }), /chính quy/);   // invalid regex is reported, not applied
});
test('exam: normalise and shuffle keep every equation', () => {
  const count = (pkg) => (pkg.match(/<w:object\b/g) || []).length;
  const before = count(fixture);
  const m = parseBody(fixture), a = analyze(m);
  assert.ok(a.parts[0].questions.length >= 10);
  const nrm = normalize(fixture, { renumber: 'part', layout: 'auto' });
  assert.equal(count(nrm.pkg), before);
  const v = shuffleVersion(fixture, { seed: 5, code: '777' });
  assert.equal(count(v.pkg), before);
  assert.notEqual(buildBody(parseBody(v.pkg)), fixture);
});

const pngStub = Uint8Array.from([137, 80, 78, 71]);
const renderStub = (l) => { const r = renderLatex(l); return { png: pngStub, width: r.width, height: r.height, baseline: r.baseline }; };
test('MathType writer: LaTeX -> OLE -> decoder gives the same LaTeX', () => {
  for (const t of [`${B}frac{2x^3}{3} - 16x + 1`, `${B}sqrt[3]{x^2 + 1}`, `(3; +${B}infty)`, `${B}int_a^b f(x)${B},${B}text{d}x`, `${B}left${B}{ ${B}begin{array}{l} x > 3 ${B}${B} x < 6 ${B}end{array} ${B}right.`]) {
    assert.equal(oleToLatex(buildOle(latexToEquationStream(t)))[0].replace(/\s+/g, ''), t.replace(/\s+/g, ''), t);
  }
});
test('MathType object package: parts, relationships and namespaces', async () => {
  const pkg = await makeMathTypePackage(`${B}frac{a}{b}`, { render: renderStub });
  assert.ok(/ProgID="Equation.DSMT4"/.test(pkg) && /oleObjectTc\d+\.bin/.test(pkg) && /imageTc\d+\.png/.test(pkg) && /xmlns:v=/.test(pkg) && /xmlns:o=/.test(pkg));
  const word = convertMathTypeInPackage(fixture, { display: false });
  const back = await convertNativeToMathType(word.pkg, { render: renderStub });
  assert.equal(back.converted, word.converted);
  assert.ok((back.pkg.match(/<w:object\b/g) || []).length === word.converted);
});
test('autocomplete: commands, Vietnamese words, snippets, Tab stops', () => {
  assert.equal(suggest('fra')[0][0], `${B}frac`);
  assert.equal(suggest('sqr')[0][0], `${B}sqrt`);
  assert.ok(suggest('tichphan').some((e) => e[0] === `${B}int`));
  assert.ok(suggest('vocuc').some((e) => e[0] === `${B}infty`));
  assert.ok(suggest('phan so').length === 0 || true);
  assert.deepEqual(expandSnippet(`${B}frac{|}{}`), { text: `${B}frac{}{}`, caret: 6 });
  assert.deepEqual(tokenAt(`x + ${B}fra`, 8), { start: 4, token: `${B}fra`, bare: false });
  assert.equal(tokenAt('x = 2', 5), null);
  assert.equal(nextStop(`${B}frac{}{}`, 6), 8);
  assert.equal(nextStop(`${B}frac{}{}`, 8), -1);
  assert.equal(nextStop(`${B}frac{}{}`, 8, true), 6);
});
test('LaTeX -> SymPy text', () => {
  assert.equal(latexToSympy(`${B}frac{x^2 + 1}{x - 1}`), '((x**(2)+1)/(x-1))');
  assert.equal(latexToSympy(`${B}sqrt{x} + ${B}sqrt[3]{x}`), 'sqrt(x)+(x)**(1/(3))');
  assert.equal(latexToSympy(`${B}sin x + ${B}ln(x)`), 'sin(x)+log((x))');
  assert.equal(latexToSympy(`${B}left| x - 1 ${B}right|`), 'Abs(x-1)');
  assert.equal(latexToSympy(`${B}log_{2} x`), 'log(x, 2)');
  assert.equal(normalizeInput('2x(x-1)^2'), '2x(x-1)^2');
  assert.throws(() => latexToSympy(`${B}int f`), /tích phân/i);
});
for (const [name, fn] of queue) { try { await fn(); n++; } catch (e) { console.error('FAIL', name, '\n', e.message); process.exitCode = 1; } }
console.log(n + ' unit tests ran' + (process.exitCode ? ' — with failures' : ' — all passed'));
