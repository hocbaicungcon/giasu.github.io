// Run the exam analyser on every corpus document and report detection quality (no document is modified).
import { loadDocx, bodyPackage } from './fixture.js';
import { corpusFiles } from './corpus.js';
import { parseBody, analyze, answersOf } from '../src/exam.js';
const tot = { files: 0, withQuestions: 0, questions: 0, mc: 0, mcOk4: 0, tf: 0, tf4: 0, short: 0, marked: 0, errors: 0 };
const flags = {};
const bad = [];
for (const f of corpusFiles()) {
  let docx;
  try { docx = loadDocx(f); } catch { continue; }
  if (docx.doc.length > 30e6) continue;
  tot.files++;
  try {
    const model = parseBody(bodyPackage(docx));
    const a = analyze(model);
    const qs = a.parts.flatMap((p) => p.questions.map((q) => ({ p, q })));
    if (!qs.length) continue;
    tot.withQuestions++;
    tot.questions += qs.length;
    for (const { p, q } of qs) {
      if (p.kind === 'mc') { tot.mc++; if (q.options && q.options.length === 4 && !q.flags.length) tot.mcOk4++; }
      if (p.kind === 'tf') { tot.tf++; if (q.statements.length === 4) tot.tf4++; }
      if (p.kind === 'short') tot.short++;
      for (const fl of q.flags) flags[fl.split(':')[0]] = (flags[fl.split(':')[0]] || 0) + 1;
    }
    tot.marked += answersOf(model, a).filter((x) => x.value).length;
  } catch (e) { tot.errors++; if (bad.length < 5) bad.push(f.split('/').pop() + ': ' + e.message); }
}
console.log(tot, flags, bad);
