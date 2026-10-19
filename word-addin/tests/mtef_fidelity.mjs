// MathType writer vs real MathType: for every corpus equation, write its LaTeX back and compare with what MathType wrote.
// identical = same MTEF body bytes (after the font/preferences prefix); roundtrip = decodes to the same LaTeX. Usage: node tests/mtef_fidelity.mjs [maxFiles]
import { readZip } from './zip.js';
import { corpusFiles } from './corpus.js';
import { mtefFromOle, oleToLatex, readOleStream, Parser } from '../src/mtef.js';
import { latexToEquationStream, MtefWriteError } from '../src/mtef-writer.js';
import { buildOle } from '../src/ole-writer.js';

const files = corpusFiles().slice(0, Number(process.argv[2] || 1e9));
const stats = { equations: 0, unique: 0, written: 0, unsupported: 0, roundtrip: 0, roundtripDiff: 0, identical: 0, bodyDiff: 0, error: 0 };
const reasons = new Map(), diffs = [], rtDiffs = [];
const seen = new Set();
const body = (mtef) => { const [root] = new Parser(mtef).parse(); return root.span ? mtef.subarray(root.span[0]) : null; };
for (const f of files) {
  let z; try { z = readZip(f); } catch { continue; }
  for (const n of z.names.filter((x) => /embeddings\/oleObject\d+\.bin$/.test(x))) {
    const ole = new Uint8Array(z.read(n));
    let latex, orig;
    try { latex = oleToLatex(ole)[0]; orig = mtefFromOle(ole); } catch { continue; }
    stats.equations++;
    if (seen.has(latex)) continue;
    seen.add(latex); stats.unique++;
    let st;
    try { st = latexToEquationStream(latex); } catch (e) {
      if (e instanceof MtefWriteError) { stats.unsupported++; const k = e.message.replace(/U\+[0-9a-f]+/, 'U+X').slice(0, 60); reasons.set(k, (reasons.get(k) || 0) + 1); } else { stats.error++; if (diffs.length < 3) diffs.push({ latex, err: e.stack.slice(0, 200) }); }
      continue;
    }
    stats.written++;
    const newOle = buildOle(st);
    let back;
    try { back = oleToLatex(newOle)[0]; } catch (e) { back = 'ERR ' + e.message; }
    if (back === latex) stats.roundtrip++; else { stats.roundtripDiff++; if (rtDiffs.length < 12) rtDiffs.push({ latex, back }); }
    const mine = mtefFromOle(newOle);
    const a = body(orig), b = body(mine);
    if (a && b && Buffer.compare(Buffer.from(a), Buffer.from(b)) === 0) stats.identical++;
    else { stats.bodyDiff++; if (diffs.length < 12) diffs.push({ latex, orig: Buffer.from(a || []).toString('hex').slice(0, 160), mine: Buffer.from(b || []).toString('hex').slice(0, 160) }); }
  }
}
console.log(JSON.stringify(stats));
console.log('unsupported reasons:', JSON.stringify([...reasons.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)));
for (const d of rtDiffs) console.log('RT', JSON.stringify(d));
for (const d of diffs.slice(0, 8)) console.log('BODY', JSON.stringify(d));
