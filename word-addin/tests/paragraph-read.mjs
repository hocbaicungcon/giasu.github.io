import assert from 'node:assert/strict';
import { readParagraphs } from '../src/word-io.js';

const previousWord = globalThis.Word, previousOffice = globalThis.Office;
function host({ platform = 'Mac', failBatch = false, badIndex = -1 } = {}) {
  let contexts = 0, paragraphCalls = 0;
  globalThis.Office = { context: { diagnostics: { platform } } };
  globalThis.Word = { run: fn => {
    contexts++;
    let queued = [];
    const coll = { load() {}, items: Array.from({ length: 3 }, (_, index) => ({
      getOoxml() {
        paragraphCalls++;
        if (platform === 'Mac') throw new Error('Paragraph.getOoxml unsupported');
        queued.push(index); return { value: `pkg-${index}` };
      },
      getRange(mode) {
        assert.equal(mode, 'Whole');
        return { getOoxml() { queued.push(index); return { value: `pkg-${index}` }; } };
      },
    })) };
    return fn({ document: { body: { paragraphs: coll }, getSelection: () => ({ paragraphs: coll }) }, async sync() {
      const batch = queued; queued = [];
      if ((failBatch && batch.length > 1) || batch.includes(badIndex)) {
        throw Object.assign(new Error('GeneralException'), { code: 'GeneralException', debugInfo: { errorLocation: 'Range.getOoxml' } });
      }
    } });
  } };
  return { get contexts() { return contexts; }, get paragraphCalls() { return paragraphCalls; } };
}
try {
  const mac = host();
  assert.deepEqual(await readParagraphs({ kind: 'all' }), [0, 1, 2].map(index => ({ index, pkg: `pkg-${index}` })));
  assert.equal(mac.paragraphCalls, 0, 'Mac never calls Paragraph.getOoxml');
  const retry = host({ platform: 'PC', failBatch: true });
  assert.equal((await readParagraphs({ kind: 'selection' })).length, 3);
  assert.equal(retry.contexts, 4, 'retry each range in a fresh context');
  host({ badIndex: 1 });
  await assert.rejects(readParagraphs({ kind: 'selection' }), error => {
    assert.match(error.message, /đoạn 2 trong vùng chọn/);
    assert.equal(error.code, 'GeneralException');
    assert.equal(error.debugInfo.errorLocation, 'Range.getOoxml');
    return true;
  });
  const cancelled = host();
  await assert.rejects(readParagraphs({ kind: 'all' }, undefined, { signal: { aborted: true } }), { name: 'AbortError' });
  assert.equal(cancelled.contexts, 0);
} finally {
  globalThis.Word = previousWord; globalThis.Office = previousOffice;
}
console.log('PASS: Mac range export, fresh-context read retries, exact failed paragraph and cancellation');
