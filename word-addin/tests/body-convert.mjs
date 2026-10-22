// Exercise the real UI conversion handler with a host that forbids paragraph-by-paragraph I/O.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { convertMathTypeInPackage, convertEquationsToLatexText, scanPackage, makeEquationPackage } from '../src/ooxml.js';
import { convertNativeToMathType } from '../src/mathtype-object.js';
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

// Every default whole-document route must bypass paragraph reads, even with tables.
const latex = makeEquationPackage('').replace('<w:p></w:p>', '<w:p><w:r><w:t>$1$ và $t = \\qty{3}{\\second}$</w:t></w:r></w:p>')
  .replace('<w:body>', '<w:body>' + table);
const native = convertMathTypeInPackage(latex, { convertMathType: false }).pkg;
for (const [src, dst, pkg, targetCount] of [
  ['latex', 'word', latex, 2], ['latex', 'mathtype', latex, 2],
  ['word', 'mathtype', native, 2], ['word', 'latex', native, 2],
  ['mathtype', 'latex', original, formulaCount], ['mathtype', 'mathtype', original, formulaCount],
]) {
  let bodyReads = 0, bodyWrites = 0;
  const controls = Object.fromEntries(Object.keys(elements).map(id => [id, { disabled: false, checked: id === 'opt-backup' }]));
  const context = vm.createContext({
    $: id => controls[id], convSrc: () => src, convDst: () => dst,
    SRC_KIND: { mathtype: 'mathtype', word: 'native', latex: 'latex' },
    document: { querySelector: () => ({ value: 'all' }), querySelectorAll: () => Object.values(controls) },
    conversionJob: null, state: {}, lastPreview: [], Set, Object, Date,
    esc: String, progress() {}, setTimeout: fn => fn(),
    convertMathTypeInPackage, convertEquationsToLatexText, convertNativeToMathType,
    mtConvertOptions: () => ({}), mtOptions: async () => ({ size: 12 }),
    browserRender: async () => ({ png: new Uint8Array([137, 80, 78, 71]), width: 20, height: 12, baseline: 2 }),
    io: {
      async readBody() { bodyReads++; return { pkg, paragraphCount: 100 }; },
      async writeBodySnapshot(output) {
        bodyWrites++;
        assert.ok(output.includes(table), `${src} → ${dst} keeps tables`);
        const targetKind = { word: 'native', mathtype: 'mathtype', latex: 'latex' }[dst];
        assert.equal(scanPackage(output).equations.filter(eq => eq.kind === targetKind).length, targetCount, `${src} → ${dst}`);
        return { before: 100, after: 100 };
      },
    },
    paragraphsToProcess() { assert.fail(`${src} → ${dst} must not read paragraphs`); },
    afterWrite() {},
  });
  vm.runInContext(source.slice(source.indexOf('async function convert()'), source.indexOf("$('btn-convert').addEventListener")), context);
  await context.convert();
  assert.equal(bodyReads, 1, `${src} → ${dst}: one read`);
  assert.equal(bodyWrites, 1, `${src} → ${dst}: one write; ${controls['convert-summary'].innerHTML}`);
}
const signal = { aborted: false };
await assert.rejects(convertNativeToMathType(native, { signal, render: async () => {
  signal.aborted = true;
  return { png: new Uint8Array([137, 80, 78, 71]), width: 20, height: 12, baseline: 2 };
} }), { name: 'AbortError' });
console.log('PASS: all default whole-body conversion routes read/write once, preserve tables and cancel MathType rendering');
