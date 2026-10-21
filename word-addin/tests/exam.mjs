// Normalise / shuffle invariants on a real exam. Usage: node tests/exam.mjs exam.docx [outdir]
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { loadDocx, bodyPackage, documentXmlOf } from './fixture.js';
import { parseXml } from '../src/xml.js';
import { childText, parseBody, analyze, answersOf, normalize, shuffleVersion, paragraphText, answerTable, answerTableXml, appendToBody, labelMark } from '../src/exam.js';

const [input, outDir = '.'] = process.argv.slice(2);
const optKey = (o) => o.content.map(childText).join('').replace(/\s/g, '') + '|' + (o.content.join('').match(/w14:anchorId="[^"]+"/g) || []).join(',');
mkdirSync(outDir, { recursive: true });
const docx = loadDocx(input);
const pkg0 = bodyPackage(docx);
const dump = (pkg, name) => {
  const doc = documentXmlOf(pkg);
  parseXml(doc);   // well-formed
  writeFileSync(join(outDir, name + '.xml'), doc);
  execFileSync('python3', ['-I', new URL('./write_docx.py', import.meta.url).pathname, input, join(outDir, name + '.xml'), join(outDir, name + '.docx')]);
};
const sig = (pkg) => {   // content fingerprint of every question: stem text + options (without labels), equations counted
  const m = parseBody(pkg), a = analyze(m);
  return a.parts.flatMap((p) => p.questions.map((q) => ({
    kind: p.kind, stem: paragraphText(m.blocks[q.start]).replace(/^\s*C[âa]u\s*\d+\s*[.:)]/i, '').trim(),
    options: (q.options || []).map(optKey).sort(),
    id: (m.blocks.slice(q.start, q.end).map((b) => b.kind === 'p' ? b.children.join('') : b.xml).join('').match(/w14:anchorId="[^"]+"/g) || []).sort().join(','),
    objects: (m.blocks.slice(q.start, q.end).map((b) => b.kind === 'p' ? b.children.join('') : b.xml).join('').match(/<w:object\b|<m:oMath>/g) || []).length,
  })));
};
const base = sig(pkg0);
console.log('questions', base.length);

// 1. normalise
const n = normalize(pkg0, { renumber: 'part', labels: true, layout: 'auto', keepNext: true, questionFormat: true });
console.log('normalize report', JSON.stringify(n.report));
dump(n.pkg, 'normalized');
assert.deepEqual(sig(n.pkg), base, 'normalize changed content');

// 2. shuffle with synthetic answer marks on option B (underline) of every mc question
const marked = (() => {
  const m = parseBody(pkg0), a = analyze(m);
  for (const p of a.parts) if (p.kind === 'mc') for (const q of p.questions) {
    for (const i of q.optionParas) m.blocks[i].children = m.blocks[i].children.map((c) => (/>B\.<\/w:t>/.test(c) ? c.replace(/<w:rPr>/, '<w:rPr><w:u w:val="single"/>') : c));
  }
  return normalize(pkg0, { layout: false }).pkg && (() => { const out = { pkg: null }; return out; })();
})();
void marked;

// build marked package by editing the XML directly
const qid = (m, q) => (m.blocks.slice(q.start, q.end).map((b) => b.kind === 'p' ? b.children.join('') : b.xml).join('').match(/w14:anchorId="[^"]+"/g) || []).sort().join(',') + paragraphText(m.blocks[q.start]).replace(/^\s*C[âa]u\s*\d+\s*[.:)]/i, '');
const mm = parseBody(pkg0), aa = analyze(mm);
const expected = new Map();
for (const p of aa.parts) if (p.kind === 'mc') for (const q of p.questions) {
  const opt = q.options[1];
  expected.set(qid(mm, q), optKey(opt));
  q.options[1].labelRun = q.options[1].labelRun.replace('<w:rPr>', '<w:rPr><w:u w:val="single"/>');
}
// rebuild blocks with marked labels using layoutOptions through normalize path: easiest is to mark in place on the original paragraphs
let markedPkg = pkg0;
{
  const m2 = parseBody(pkg0), a2 = analyze(m2);
  for (const p of a2.parts) if (p.kind === 'mc') for (const q of p.questions) for (const i of q.optionParas) {
    m2.blocks[i].children = m2.blocks[i].children.map((c) => (/^<w:r\b[\s\S]*<w:t[^>]*>B\.<\/w:t>/.test(c) ? c.replace('<w:rPr>', '<w:rPr><w:u w:val="single"/>') : c));
  }
  const { buildBody } = await import('../src/exam.js');
  markedPkg = buildBody(m2);
}
const marksBefore = answersOf(parseBody(markedPkg), analyze(parseBody(markedPkg))).filter((a) => a.kind === 'mc');
assert.ok(marksBefore.every((a) => a.value === 'B'), 'synthetic marks not detected: ' + JSON.stringify(marksBefore.slice(0, 2)));

const versions = [];
for (const [k, code] of ['101', '102', '103'].entries()) {
  const r = shuffleVersion(markedPkg, { seed: 7 + k * 11, code, stripMarks: false, layout: 'auto' });
  assert.deepEqual(sig(r.pkg).sort((a, b) => (a.id + a.stem).localeCompare(b.id + b.stem)), base.slice().sort((a, b) => (a.id + a.stem).localeCompare(b.id + b.stem)), 'shuffle changed content (v' + code + ')');
  // answer letter must point at the option that was marked originally
  const m = parseBody(r.pkg), a = analyze(m);
  for (const p of a.parts) if (p.kind === 'mc') for (const q of p.questions) {
    const stem = paragraphText(m.blocks[q.start]).replace(/^\s*C[âa]u\s*\d+\s*[.:)]/i, '').trim();
    const ans = r.answers.find((x) => x.kind === 'mc' && x.number === Number(/\d+/.exec(paragraphText(m.blocks[q.start]))[0]));
    const idx = 'ABCD'.indexOf(ans.value);
    assert.ok(idx >= 0, 'no answer for question');
    const got = optKey(q.options[idx]);
    assert.equal(got, expected.get(qid(m, q)), 'answer letter does not follow the option');
  }
  console.log('version', code, JSON.stringify(r.report), 'first answers', r.answers.slice(0, 6).map((x) => x.value).join(''));
  versions.push({ code, answers: r.answers, pkg: r.pkg });
  dump(r.pkg, 'version-' + code);
}
// differing versions really differ
assert.notEqual(versions[0].answers.map((a) => a.value).join(), versions[1].answers.map((a) => a.value).join());
// stripped marks
const clean = shuffleVersion(markedPkg, { seed: 3, code: '999' });
assert.ok(answersOf(parseBody(clean.pkg), analyze(parseBody(clean.pkg))).every((a) => a.value === null), 'marks were not stripped');
// red label marks: any reddish shade counts, orange / other colours do not
const redRun = (c) => `<w:r><w:rPr><w:color w:val="${c}"/></w:rPr><w:t>A.</w:t></w:r>`;
for (const c of ['FF0000', 'C00000', 'EE0000', 'ED1C24', 'FF3300', 'CC0000', 'ff0000']) assert.equal(labelMark(redRun(c)), 'red', 'red not detected: ' + c);
for (const c of ['000000', '0070C0', '00B050', 'FF6600', 'FFC000', '7030A0']) assert.equal(labelMark(redRun(c)), null, 'not red: ' + c);

// answer key tables
const table = answerTable(versions.map((v) => ({ code: v.code, answers: v.answers })));
console.log(table.csv.split('\n').slice(0, 3).join('\n'));
dump(appendToBody(versions[0].pkg, answerTableXml(table.groups)), 'version-101-with-key');
console.log('OK wrote', outDir);
