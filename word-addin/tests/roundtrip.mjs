// MTEF -> LaTeX -> OMML (JS) -> LaTeX (JS omml.js) over the whole corpus, plus the same OMML read by core/omml.py.
// Usage: node tests/roundtrip.mjs [maxFiles]
import { execFileSync, spawnSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readZip } from './zip.js';
import { corpusFiles } from './corpus.js';
import { oleToLatex, tidy } from '../src/mtef.js';
import { latexToOmml } from '../src/latex2omml.js';
import { ommlToLatex } from '../src/omml.js';

const canon = (t) => t.replace(/\\,/g, '\\ ').replace(/\\text\{([A-Za-z0-9]+)\}/g, '\\mathrm{$1}').replace(/\\overrightarrow/g, '\\vec').replace(/\s+/g, ' ');
const files = corpusFiles().slice(0, Number(process.argv[2] || 1e9));
const seen = new Set();
const items = [];
const stats = { total: 0, unique: 0, writerError: 0, readerError: 0, same: 0, different: 0 };
const errors = new Map();
const diffs = [], idemDiffs = [];
for (const f of files) {
  let z; try { z = readZip(f); } catch { continue; }
  for (const n of z.names.filter((x) => /^word\/embeddings\/oleObject\d+\.bin$/.test(x))) {
    let latex; try { latex = oleToLatex(new Uint8Array(z.read(n)))[0]; } catch { continue; }
    stats.total++;
    if (seen.has(latex)) continue;
    seen.add(latex); stats.unique++;
    let omml;
    try { omml = latexToOmml(latex); } catch (e) { stats.writerError++; errors.set(e.message, (errors.get(e.message) || 0) + 1); if (diffs.length < 40) diffs.push({ latex, err: e.message }); continue; }
    let back;
    try { back = ommlToLatex(omml)[0]; } catch (e) { stats.readerError++; if (diffs.length < 40) diffs.push({ latex, readErr: e.message }); continue; }
    let idem = true;
    try { idem = latexToOmml(back) === omml; } catch { idem = false; }
    if (!idem) { stats.notIdempotent = (stats.notIdempotent || 0) + 1; if (idemDiffs.length < 12) idemDiffs.push({ latex, back }); }
    items.push({ latex, omml, back });
    if (canon(back) === canon(latex)) stats.same++; else { stats.different++; if (diffs.length < 40) diffs.push({ latex, back }); }
  }
}
// Python reader parity on the generated OMML
const dir = mkdtempSync(join(tmpdir(), 'rt-'));
const jsonPath = join(dir, 'items.json');
writeFileSync(jsonPath, JSON.stringify(items.map((i) => i.omml)));
const py = spawnSync('python3', ['-I', new URL('./py_omml.py', import.meta.url).pathname, jsonPath], { maxBuffer: 1 << 30 });
const pyOut = JSON.parse(py.stdout.toString());
let pyMismatch = 0;
const pyDiffs = [];
items.forEach((it, i) => { if (pyOut[i] !== it.back) { pyMismatch++; if (pyDiffs.length < 15) pyDiffs.push({ js: it.back, py: pyOut[i], omml: it.omml.slice(0, 300) }); } });
console.log(JSON.stringify(stats));
for (const d of idemDiffs) console.log('IDEM', JSON.stringify(d).slice(0, 400));
console.log('writer errors by message:', JSON.stringify([...errors.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)));
console.log('JS omml.js vs Python omml.py on generated OMML: mismatches =', pyMismatch, 'of', items.length);
for (const d of pyDiffs) console.log('PYDIFF', JSON.stringify(d));
for (const d of diffs.slice(0, Number(process.env.SHOW || 25))) console.log(JSON.stringify(d));

process.exit(stats.writerError === 0 && stats.readerError < 10 && stats.different < stats.unique * 0.1 ? 0 : 1);
