// Shuffle + normalise invariants over every corpus document that looks like an exam. Usage: node tests/exam_all.mjs
import { loadDocx, bodyPackage, documentXmlOf } from './fixture.js';
import { corpusFiles } from './corpus.js';
import { parseXml } from '../src/xml.js';
import { childText, parseBody, analyze, normalize, shuffleVersion, paragraphText } from '../src/exam.js';

const stats = { files: 0, checked: 0, problems: 0, skippedLarge: 0 };
const problems = [];
const objCount = (pkg) => (documentXmlOf(pkg).match(/<w:object\b|<m:oMath>|<w:drawing\b|<w:pict\b/g) || []).length;
const textOf = (m) => m.blocks.map((b) => (b.kind === 'p' ? paragraphText(b) : '')).join('\n').replace(/[\s ]+/g, '').replace(/[A-D][.)]|[a-d]\)|(C[âa]u|B[àa]i)\d+[.:)]/gi, '').replace(/\d/g, '').split('').sort().join('');
const qkeys = (pkg) => {
  const m = parseBody(pkg), a = analyze(m);
  return a.parts.flatMap((p) => p.questions.map((q) => (m.blocks.slice(q.start, q.end).map((b) => (b.kind === 'p' ? b.children.join('') : b.xml)).join('').match(/w14:anchorId="\w+"/g) || []).length + '|' + paragraphText(m.blocks[q.start]).replace(/^\s*(C[âa]u|B[àa]i)\s*\d+\s*[.:)]/i, '').trim() + '|' + (q.options || []).map((o) => o.content.map(childText).join('').replace(/\s/g, '')).sort().join('/'))).sort();
};
for (const f of corpusFiles()) {
  let docx; try { docx = loadDocx(f); } catch { continue; }
  stats.files++;
  if (docx.doc.length > 20e6) { stats.skippedLarge++; continue; }
  let pkg, a, m;
  try { pkg = bodyPackage(docx); m = parseBody(pkg); a = analyze(m); } catch (e) { problems.push(`${f.split('/').pop()}: parse ${e.message}`); continue; }
  const ok = a.parts.flatMap((p) => (p.kind === 'mc' ? p.questions : [])).filter((q) => q.options && q.options.length === 4 && !q.flags.length);
  if (ok.length < 3) continue;
  stats.checked++;
  const name = f.split('/').pop().slice(0, 50);
  try {
    const before = { keys: qkeys(pkg), objs: objCount(pkg), text: textOf(m) };
    for (const [label, out] of [['shuffle', shuffleVersion(pkg, { seed: 3, code: '555' }).pkg], ['normalize', normalize(pkg, { renumber: 'part', layout: 'auto', keepNext: true }).pkg]]) {
      parseXml(documentXmlOf(out));
      const after = { keys: qkeys(out), objs: objCount(out), text: textOf(parseBody(out)) };
      const bad = [];
      if (JSON.stringify(after.keys) !== JSON.stringify(before.keys)) bad.push('questions/options changed');
      if (after.objs !== before.objs) bad.push(`objects ${before.objs}->${after.objs}`);
      if (after.text !== before.text) bad.push('text characters changed');
      if (bad.length) problems.push(`${name} [${label}]: ${bad.join('; ')}`);
    }
  } catch (e) { problems.push(`${name}: ${e.message}`); }
}
stats.problems = problems.length;
console.log(stats);
problems.slice(0, 20).forEach((p) => console.log(' -', p));
process.exit(problems.length ? 1 : 0);
