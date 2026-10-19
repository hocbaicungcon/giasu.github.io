import { loadDocx, bodyPackage } from './fixture.js';
import { parseBody, analyze, answersOf } from '../src/exam.js';
const docx = loadDocx(process.argv[2]);
const model = parseBody(bodyPackage(docx));
const a = analyze(model);
console.log('blocks', model.blocks.length);
for (const p of a.parts) {
  console.log(`PART ${p.kind} "${p.title.slice(0, 60)}" questions=${p.questions.length}`);
  for (const q of p.questions.slice(0, Number(process.argv[3] || 4))) console.log('  Q', q.number, 'blocks', q.start, '-', q.end, 'options', q.options && q.options.map((o) => o.letter).join(''), 'optParas', q.optionParas.join(','), 'stmts', q.statements.length, 'flags', q.flags.join(','));
}
const ans = answersOf(model, a);
console.log('answers sample', JSON.stringify(ans.slice(0, 5)), 'withValue', ans.filter((x) => x.value).length, '/', ans.length);
