// The two answer-key layouts must reproduce the user's own template files cell for cell. Usage: node tests/xlsx.mjs [outdir]
import assert from 'node:assert/strict';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { readZip } from './zip.js';
import { answerRows, answerXlsx } from '../src/xlsx.js';

const out = process.argv[2] || '.';
mkdirSync(out, { recursive: true });
const un = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
function readRows(path) {
  const z = readZip(path);
  const ss = [...z.read('xl/sharedStrings.xml').toString('utf8').matchAll(/<si>([\s\S]*?)<\/si>/g)].map((m) => un(m[1].replace(/<[^>]+>/g, '')));
  const d = z.read('xl/worksheets/sheet1.xml').toString('utf8');
  const col = (r) => [...r.replace(/\d+/, '')].reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0) - 1;
  return [...d.matchAll(/<row [^>]*>([\s\S]*?)<\/row>/g)].map((r) => {
    const row = [];
    for (const m of r[1].matchAll(/<c r="([A-Z]+\d+)"([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const v = /<v>([\s\S]*?)<\/v>/.exec(m[3] || '');
      if (v) row[col(m[1])] = /t="s"/.test(m[2]) ? ss[Number(v[1])] : v[1];
    }
    return Array.from(row, (x) => x ?? '');
  });
}
const T1 = join(homedir(), 'Downloads/BGD-2025-GIASU.AI.VN.xlsx'), T2 = join(homedir(), 'Downloads/BGD-2025-TEXCRAFT.xlsx');

// --- template 1 (rows = questions)
{
  const rows = readRows(T1);
  const codes = rows[0].slice(1);
  const kindOf = (n) => (n <= 12 ? 'mc' : n <= 17 ? 'tf' : 'short');
  const versions = codes.map((code, k) => ({ code, answers: rows.slice(1).map((r, i) => {
    const n = i + 1, kind = kindOf(n), v = r[k + 1];
    return kind === 'tf' ? { kind, number: n - 12, tf: [...v] } : { kind, number: kind === 'short' ? n - 17 : n, value: v };
  }) }));
  assert.deepEqual(answerRows('giasu', versions), rows, 'giasu layout differs from the template');
  writeFileSync(join(out, 'giasu.xlsx'), answerXlsx('giasu', versions));
}
// --- template 2 (rows = exam codes)
{
  const rows = readRows(T2);
  const head = rows[0];
  const versions = rows.slice(1).map((r) => {
    const answers = [];
    for (let c = 1; c < head.length; c++) {
      const h = head[c];
      if (/^\d+$/.test(h) && c <= 40) answers.push({ kind: 'mc', number: Number(h), value: r[c] });
      else if (/^\d+a$/.test(h)) answers.push({ kind: 'tf', number: parseInt(h, 10), tf: [r[c], r[c + 1], r[c + 2], r[c + 3]].map((x) => (x === 'D' ? 'Đ' : x)) });
      else if (/^\d+$/.test(h)) answers.push({ kind: 'short', number: Number(h), value: r[c] });
    }
    return { code: r[0], answers };
  });
  assert.deepEqual(answerRows('texcraft', versions), rows, 'texcraft layout differs from the template');
  writeFileSync(join(out, 'texcraft.xlsx'), answerXlsx('texcraft', versions));
}
console.log('both layouts reproduce the template files exactly; wrote', out);
