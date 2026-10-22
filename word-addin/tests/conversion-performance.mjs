// Run without Word or private documents: node word-addin/tests/conversion-performance.mjs
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { readFileSync } from 'node:fs';
import { paragraphPackages, scanPackage, convertMathTypeInPackage, splitParts, makeEquationPackage } from '../src/ooxml.js';
import { mathTypeObject } from '../src/mathtype-object.js';
import { latexToEquationStream } from '../src/mtef-writer.js';
import { buildOle } from '../src/ole-writer.js';
import { parseXml } from '../src/xml.js';
import { readConversionParagraphs } from '../src/word-io.js';

const relNs = 'http://schemas.openxmlformats.org/package/2006/relationships';
const part = (name, type, body) => `<pkg:part pkg:name="${name}" pkg:contentType="${type}">${body}</pkg:part>`;
const objects = [];
for (let i = 0; i < 480; i++) objects.push(await mathTypeObject(`x^{${i + 1}}+1`, {
  render: async () => ({ png: new Uint8Array([137, 80, 78, 71]), width: 20, height: 12, baseline: 2 }),
}));
const paras = objects.map(o => `<w:p><w:pPr><w:jc w:val="left"/></w:pPr><w:r><w:t>Đề bài </w:t></w:r>${o.runXml}</w:p>`);
const extra = part('/word/_rels/document.xml.rels', 'application/vnd.openxmlformats-package.relationships+xml',
  `<pkg:xmlData><Relationships xmlns="${relNs}">${objects.flatMap(o => o.rels).map(r => `<Relationship Id="${r.id}" Type="${r.type}" Target="${r.target}"/>`).join('')}</Relationships></pkg:xmlData>`) +
  objects.flatMap(o => o.parts).map(p => part(p.name, p.type, `<pkg:binaryData>${Buffer.from(p.data).toString('base64')}</pkg:binaryData>`)).join('');
const pkg = makeEquationPackage('').replace('<w:p></w:p>', paras.join(''))
  .replace('<w:document ', '<w:document xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" ')
  .replace('</pkg:package>', extra + '</pkg:package>');
const start = performance.now();
const items = paragraphPackages(pkg, 480, new Set(['mathtype']));
assert.equal(items.length, 480);
let converted = 0;
for (const [i, it] of items.entries()) {
  assert.equal(it.index, i);
  assert.equal(scanPackage(it.pkg).equations.length, 1);
  assert.equal([...splitParts(it.pkg).keys()].filter(n => n.includes('/embeddings/')).length, 1);
  const r = convertMathTypeInPackage(it.pkg, { convertLatex: false });
  converted += r.converted;
  assert.equal(r.kept.length, 0);
  assert.ok(r.pkg.includes('Đề bài '));
  assert.ok(r.pkg.includes('<w:jc w:val="left"/>'));
  parseXml(r.pkg);
}
assert.equal(converted, 480);
console.log(`PASS: split + convert 480 synthetic MathType equations: ${(performance.now() - start).toFixed(0)} ms (JS only, excludes Word I/O)`);

// Complex layouts and paragraph-count mismatches must never use guessed paragraph indexes.
assert.equal(paragraphPackages(pkg, 479), null);
assert.equal(paragraphPackages(pkg.replace(paras[0], `<w:tbl><w:tr><w:tc>${paras[0]}</w:tc></w:tr></w:tbl>`), 480), null);
assert.equal(paragraphPackages(pkg.replace(paras[0], `<w:sdt><w:sdtContent>${paras[0]}</w:sdtContent></w:sdt>`), 480), null);
assert.equal(paragraphPackages(pkg, 480, new Set(['native'])).length, 0);

// An Equation.3 ProgID does not identify the MTEF stream version; decode the actual stream.
const oldId = items[0].pkg.replace('Equation.DSMT4', 'Equation.3');
assert.equal(convertMathTypeInPackage(oldId, { convertLatex: false }).converted, 1);
const oldStream = latexToEquationStream('x');
oldStream[28] = 3;
const unsupported = oldId.replace(/<pkg:binaryData>[\s\S]*?<\/pkg:binaryData>/,
  `<pkg:binaryData>${Buffer.from(buildOle(oldStream)).toString('base64')}</pkg:binaryData>`);
assert.equal(convertMathTypeInPackage(unsupported, { convertLatex: false }).converted, 0);
assert.match(convertMathTypeInPackage(unsupported, { convertLatex: false }).kept[0].reason, /version 5/);

// A header can share a picture that is unused by this paragraph; keep its dependency valid.
const sharedName = objects[1].parts[1].name;
const headerRels = part('/word/_rels/header1.xml.rels', 'application/vnd.openxmlformats-package.relationships+xml',
  `<pkg:xmlData><Relationships xmlns="${relNs}"><Relationship Id="headerPic" Type="${objects[1].rels[1].type}" Target="${objects[1].rels[1].target}"/></Relationships></pkg:xmlData>`);
const sharedPkg = pkg.replace('</pkg:package>', headerRels + '</pkg:package>');
assert.ok(splitParts(paragraphPackages(sharedPkg, 480, new Set(['mathtype']))[0].pkg).has(sharedName));
assert.ok(splitParts(convertMathTypeInPackage(sharedPkg, { convertLatex: false }).pkg).has(sharedName), 'whole-body conversion preserves header pictures');

// Bulk conversion must remove every converted binary and picture, leaving valid OMML.
const whole = convertMathTypeInPackage(pkg, { convertLatex: false });
assert.equal(whole.converted, 480);
assert.equal(whole.kept.length, 0);
assert.equal(splitParts(whole.pkg).size, 3);
parseXml(whole.pkg);

// Compare the optimized splitter against the existing real, public fixture decoder.
const fixture = readFileSync(new URL('../fixtures/sample-body.xml', import.meta.url), 'utf8');
const doc = scanPackage(fixture).doc;
const count = (doc.match(/<w:p[ >]/g) || []).length;
const split = paragraphPackages(fixture, count);
assert.ok(split, 'fixture has a simple paragraph body');
const expected = scanPackage(fixture).equations.map(e => [e.kind, e.latex, e.error]);
assert.deepEqual(split.flatMap(it => scanPackage(it.pkg).equations.map(e => [e.kind, e.latex, e.error])), expected);

// A body snapshot costs one Word sync; fallback still reads host paragraphs when needed.
const previous = globalThis.Word;
try {
  let syncs = 0, bodyFails = false, reads = 0;
  const coll = { load() {}, items: objects.map((_, i) => ({ getOoxml() { reads++; return { value: items[i].pkg }; } })) };
  globalThis.Word = { run: fn => fn({ document: { body: { paragraphs: coll, getOoxml() {
    if (bodyFails) throw new Error('Host body export failed');
    return { value: pkg };
  } } }, sync: async () => { syncs++; } }) };
  assert.equal((await readConversionParagraphs(new Set(['mathtype']))).length, 480);
  assert.equal(syncs, 1);
  assert.equal(reads, 0);
  bodyFails = true;
  assert.equal((await readConversionParagraphs(new Set(['mathtype']))).length, 480);
  assert.equal(reads, 480);
} finally { globalThis.Word = previous; }
console.log('PASS: real-fixture parity, bulk cleanup, Equation.3 stream detection, safe layout fallback and one-sync body read');
