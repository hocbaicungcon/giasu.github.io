// Parity: JS port vs core/mtef.py on every oleObject*.bin of the corpus. Usage: node tests/parity.mjs [files...]
import { execFileSync } from 'node:child_process';
import { readZip } from './zip.js';
import { corpusFiles } from './corpus.js';
import { oleToLatex } from '../src/mtef.js';

const files = process.argv.length > 2 ? process.argv.slice(2) : corpusFiles();
const py = JSON.parse(execFileSync('python3', ['-I', new URL('./py_reference.py', import.meta.url).pathname, ...files], { maxBuffer: 1 << 30 }).toString());
const zips = new Map();
let same = 0, bothFail = 0, okPy = 0;
const diffs = [];
for (const rec of py) {
  if (!zips.has(rec.file)) zips.set(rec.file, readZip(rec.file));
  let js;
  try { js = { ok: true, latex: oleToLatex(new Uint8Array(zips.get(rec.file).read(rec.name)))[0] }; } catch (e) { js = { ok: false, err: e.message }; }
  if (rec.ok) okPy++;
  if (rec.ok === js.ok && (!rec.ok || rec.latex === js.latex)) { rec.ok ? same++ : bothFail++; } else diffs.push({ rec, js });
}
console.log(`files=${files.length} equations=${py.length} pythonDecoded=${okPy} identicalLatex=${same} bothRefused=${bothFail} DIFFERENT=${diffs.length}`);
for (const d of diffs.slice(0, 15)) console.log(JSON.stringify(d).slice(0, 600));
process.exit(diffs.length ? 1 : 0);
