// The QR payload must be accepted by the grading site's own parser (giasu.github.io/cham-thi/js/inputs.js).
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { qrPayloads } from '../src/answer-qr.js';

const site = new URL('../../../giasu.github.io/cham-thi/js/inputs.js', import.meta.url).pathname;
const mk = (code, seed) => ({ code, answers: [
  ...'ABCDABCDAB'.split('').map((v, i) => ({ kind: 'mc', number: i + 1, value: v })),
  ...[0, 1, 2, 3].map((i) => ({ kind: 'tf', number: i + 1, tf: ['Đ', 'S', 'Đ', 'S'].map((c, j) => ((i + j + seed) % 3 ? c : (c === 'Đ' ? 'S' : 'Đ'))) })),
  ...['1,5', '-2', '40'].map((v, i) => ({ kind: 'short', number: i + 1, value: v })),
] });
const { payloads } = qrPayloads(['101', '102', '103', '104', '105', '106'].map((c, i) => mk(c, i)));
console.log('payloads', payloads.length, payloads.map((p) => p.codes.join('/') + ':' + p.text.length).join(' '));
assert.ok(payloads.every((p) => p.text.length <= 700));
if (existsSync(site)) {
  await import(site);   // an ES module there: the API lands on globalThis.ChamTNInputs
  const Inputs = globalThis.ChamTNInputs;
  const parsed = payloads.flatMap((p) => Inputs.parseQrPayload(p.text));
  assert.equal(parsed.length, 6);
  assert.deepEqual(parsed[0].keys.p1, 'ABCDABCDAB'.split(''));
  assert.deepEqual(parsed[0].keys.p3, ['1,5', '-2', '40']);
  console.log('accepted by the site parser:', parsed.map((e) => e.code).join(','));
} else console.log('site parser not found; payload shape only');
