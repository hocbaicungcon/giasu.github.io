// Generated OMML must be readable by an independent consumer: build a docx and let pandoc turn it back into LaTeX.
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readZip } from './zip.js';
import { corpusFiles } from './corpus.js';
import { oleToLatex } from '../src/mtef.js';
import { latexToOmml } from '../src/latex2omml.js';

const seen = new Set(), latexes = [];
outer: for (const f of corpusFiles()) {
  let z; try { z = readZip(f); } catch { continue; }
  for (const n of z.names.filter((x) => /^word\/embeddings\/oleObject\d+\.bin$/.test(x))) {
    let l; try { l = oleToLatex(new Uint8Array(z.read(n)))[0]; } catch { continue; }
    if (!seen.has(l)) { seen.add(l); latexes.push(l); }
    if (latexes.length >= Number(process.argv[2] || 3000)) break outer;
  }
}
const dir = mkdtempSync(join(tmpdir(), 'pd-'));
const omml = latexes.map((l, i) => latexToOmml(l, { display: i % 7 === 0 }));
writeFileSync(join(dir, 'o.json'), JSON.stringify(omml));
execFileSync('python3', ['-I', new URL('./make_docx.py', import.meta.url).pathname, join(dir, 'o.json'), join(dir, 't.docx')]);
const out = execFileSync('pandoc', ['-f', 'docx', '-t', 'latex', join(dir, 't.docx'), '--wrap=none'], { maxBuffer: 1 << 28 }).toString();
const paras = out.split(/\n\n+/).filter((p) => /^EQ\d+:/.test(p));
let empty = 0;
const bad = [];
paras.forEach((p) => { const body = p.replace(/^EQ\d+:\s*/, '').replace(/\\\(|\\\)|\\\[|\\\]/g, '').trim(); if (!body) { empty++; bad.push(p.slice(0, 200)); } });
console.log(`equations=${latexes.length} paragraphs read by pandoc=${paras.length} emptyMath=${empty}`);
console.log('sample:\n' + paras.slice(0, 6).join('\n'));
console.log(bad.slice(0, 5).join('\n'));
console.log('docx kept at', join(dir, 't.docx'));
process.exit(paras.length === latexes.length && empty === 0 ? 0 : 1);
