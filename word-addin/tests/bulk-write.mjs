// Simulate host batch rejection, paragraph shifts and partial writes without Office.
import assert from 'node:assert/strict';
import { writeParagraphs } from '../src/word-io.js';

function host({ platform, count = 3, rejectMultiple = false, failAt = -1, growAt = -1 } = {}) {
  const values = Array.from({ length: count }, (_, i) => `old-${i}`);
  const attempts = [], batches = [], progress = [];
  let pending = [];
  const coll = { items: [], load() {
    this.items = values.map((_, index) => ({
      getRange(mode) { assert.equal(mode, 'Content'); return this; },
      insertOoxml(pkg, mode) { assert.equal(mode, 'Replace'); pending.push({ index, pkg }); attempts.push(index); },
    }));
  } };
  globalThis.Office = { context: { diagnostics: { platform } } };
  globalThis.Word = { run: fn => fn({
    document: { body: { paragraphs: coll }, getSelection: () => ({ paragraphs: coll }) },
    async sync() {
      if (!pending.length) return;
      const commands = pending; pending = [];
      batches.push(commands);
      if ((rejectMultiple && commands.length > 1) || commands.some(c => c.index === failAt)) {
        const e = new Error('Host rejected OOXML insertion');
        e.code = 'GeneralException'; e.debugInfo = { errorLocation: 'Range.insertOoxml' };
        throw e;
      }
      for (const c of commands) {
        values[c.index] = c.pkg;
        if (c.index === growAt) values.splice(c.index + 1, 0, 'extra-paragraph');
      }
    },
  }) };
  return { values, attempts, batches, progress, onProgress: (d, t) => progress.push([d, t]) };
}

const prevWord = globalThis.Word, prevOffice = globalThis.Office;
const writes = Array.from({ length: 3 }, (_, index) => ({ index, pkg: `new-${index}` }));
try {
  // Same host accepts individual writes but rejects a queue containing multiple OOXML inserts.
  const mac = host({ platform: 'Mac', rejectMultiple: true });
  assert.deepEqual(await writeParagraphs({ kind: 'all' }, writes, 'content', mac.onProgress), { before: 3, after: 3 });
  assert.deepEqual(mac.values, ['new-0', 'new-1', 'new-2']);
  assert.deepEqual(mac.attempts, [2, 1, 0]);
  assert.deepEqual(mac.progress, [[1, 3], [2, 3], [3, 3]]);
  assert.deepEqual(writes.map(it => it.index), [0, 1, 2], 'caller backup order stays intact');

  const growing = host({ platform: 'Mac', growAt: 2 });
  assert.deepEqual(await writeParagraphs({ kind: 'selection' }, writes, 'paragraph'), { before: 3, after: 4 });
  assert.deepEqual(growing.values, ['new-0', 'new-1', 'new-2', 'extra-paragraph'], 'earlier targets survive a new paragraph');

  const failed = host({ platform: 'Mac', failAt: 1 });
  await assert.rejects(writeParagraphs({ kind: 'all' }, writes, 'content'), e => {
    assert.match(e.message, /đoạn 2 \(đã ghi 1\/3 đoạn\)/);
    assert.equal(e.code, 'GeneralException');
    assert.equal(e.debugInfo.errorLocation, 'Range.insertOoxml');
    return true;
  });
  assert.deepEqual(failed.attempts, [2, 1], 'no retries or further edits after a failed write');
  assert.deepEqual(failed.values, ['old-0', 'old-1', 'new-2']);

  const invalid = host({ platform: 'Mac' });
  await assert.rejects(writeParagraphs({ kind: 'all' }, [writes[0], writes[0]], 'content'), /trùng lặp/);
  assert.deepEqual(invalid.attempts, [], 'validate all indexes before making changes');

  const windows = host({ platform: 'PC', count: 30 });
  const many = Array.from({ length: 30 }, (_, index) => ({ index, pkg: `new-${index}` }));
  await writeParagraphs({ kind: 'all' }, many, 'content');
  assert.equal(windows.batches.length, 2, 'Windows keeps batched writes');
  assert.deepEqual(windows.values, many.map(it => it.pkg));

  const large = host({ platform: 'PC' });
  await writeParagraphs({ kind: 'all' }, writes.map(it => ({ ...it, pkg: 'x'.repeat(140000) })), 'content');
  assert.equal(large.batches.length, 3, 'large packages are sent separately even on Windows');
} finally {
  globalThis.Word = prevWord; globalThis.Office = prevOffice;
}
console.log('PASS: Mac single writes, reverse order, paragraph growth, partial-failure diagnostics, index validation and Windows batching');
