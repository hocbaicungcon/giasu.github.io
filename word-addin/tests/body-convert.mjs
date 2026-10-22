// Exercise the real UI conversion handler with a host that forbids paragraph-by-paragraph I/O.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { convertMathTypeInPackage, scanPackage } from '../src/ooxml.js';
const source = readFileSync(new URL('../taskpane/taskpane.js', import.meta.url), 'utf8');
const table = '<w:tbl><w:tr><w:tc><w:p><w:r><w:t>Giữ bảng</w:t></w:r></w:p></w:tc></w:tr></w:tbl>';
const original = readFileSync(new URL('../fixtures/sample-body.xml', import.meta.url), 'utf8').replace('<w:body>', '<w:body>' + table);
const formulaCount = scanPackage(original).equations.filter(e => e.kind === 'mathtype').length;
const elements = Object.fromEntries(['opt-backup', 'opt-display', 'btn-convert', 'btn-cancel-convert', 'progress', 'convert-summary', 'btn-restore'].map(id => [id, { disabled: false }]));
elements['opt-backup'].checked = true;
elements['opt-display'].checked = false;
let reads = 0, writes = 0, backup, fail = false, cancelOnRead = false;
const state = { scanned: {}, lastBackup: null };
const env = vm.createContext({
  $: id => elements[id], convSrc: () => 'mathtype', convDst: () => 'word', SRC_KIND: { mathtype: 'mathtype' },
  document: { querySelector: () => ({ value: 'all' }), querySelectorAll: () => Object.values(elements) },
  conversionJob: null,
  state, lastPreview: [], Set, Object, Date,
  esc: value => String(value), progress() {}, setTimeout: fn => fn(),
  convertMathTypeInPackage,
  io: {
    async readBody() { reads++; if (cancelOnRead) env.conversionJob.aborted = true; return { pkg: original, paragraphCount: 100 }; },
    async writeBodySnapshot(pkg, count) {
      writes++;
      assert.equal(count, 100);
      assert.ok(pkg.includes(table));
      assert.equal(scanPackage(pkg).equations.filter(e => e.kind === 'native').length, formulaCount);
      if (fail) throw Object.assign(new Error('GeneralException'), { code: 'GeneralException' });
      return { before: 100, after: 100 };
    },
    writeParagraphs() { assert.fail('whole-document conversion must not write individual paragraphs'); },
  },
  paragraphsToProcess() { assert.fail('whole-document conversion must not read individual paragraphs'); },
  afterWrite(_result, value) { backup = state.lastBackup = value; },
});
vm.runInContext(source.slice(source.indexOf('async function convert()'), source.indexOf("$('btn-convert').addEventListener")), env);
await env.convert();
assert.equal(reads, 1); assert.equal(writes, 1);
assert.equal(backup.pkg, original, 'restore keeps the complete original snapshot');
assert.equal(backup.scope.kind, 'body');
assert.ok(elements['convert-summary'].innerHTML.includes(`Đã chuyển ${formulaCount}`));
assert.equal(elements['btn-convert'].disabled, false);
fail = true;
await env.convert();
assert.equal(reads, 2); assert.equal(writes, 2, 'failed whole-body writes are not retried');
assert.equal(state.lastBackup, null);
assert.equal(elements['btn-restore'].disabled, true);
assert.ok(elements['convert-summary'].innerHTML.includes('Lỗi khi ghi công thức vào Word'));
cancelOnRead = true;
await env.convert();
assert.equal(writes, 2, 'cancelling during the read prevents all writes');
assert.match(elements['convert-summary'].textContent, /Chưa ghi thay đổi/);
assert.equal(elements['btn-cancel-convert'].hidden, true);
assert.equal(elements['btn-convert'].hidden, false);
assert.equal(elements['progress'].hidden, true);
assert.equal(env.conversionJob, null);
console.log('PASS: whole-document UI uses one snapshot and one insertion, preserves tables and backup, and stops on host failure');
