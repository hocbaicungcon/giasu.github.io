// Focused scheduling regressions without Office or a browser.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../taskpane/taskpane.js', import.meta.url), 'utf8');
let timer, delay, reads = 0, current = 0, peak = 0, parsed = [], applied = [];
const pending = [];
const elements = {
  'editor-auto': { checked: true },
  'tab-editor': { classList: { contains: () => true } },
  'editor-latex': { value: '' },
};
const context = vm.createContext({
  $: id => elements[id], visual: null, Date,
  document: { hasFocus: () => false, dispatchEvent() {} },
  CustomEvent: class {},
  setTimeout(fn, ms) { timer = fn; delay = ms; return 1; }, clearTimeout() { timer = null; },
  io: { readCursorContext() {
    reads++; peak = Math.max(peak, ++current);
    return new Promise(resolve => pending.push(value => { current--; resolve(value); }));
  } },
  pickEquation(value) { parsed.push(value); return { eq: { latex: value } }; },
  async loadFormulaFromWord(_notice, result, isCurrent) { if (isCurrent()) applied.push(result.eq.latex); },
});
vm.runInContext(source.slice(source.indexOf('let autoTimer ='), source.indexOf('function installSelectionWatcher()')), context);
const event = () => vm.runInContext('onSelectionChanged()', context);
const flush = async () => { const fn = timer; timer = null; fn?.(); await settle(); };
const settle = async () => { for (let i = 0; i < 8; i++) await Promise.resolve(); };
event(); assert.equal(delay, 30, 'selection recognition waits only for a very short debounce'); await flush();
assert.equal(reads, 1);
for (let i = 0; i < 10; i++) { event(); await flush(); }
assert.equal(reads, 1, 'events cannot overlap Word reads');
pending.shift()('stale'); await settle();
assert.equal(reads, 2, 'burst retains one trailing read');
assert.deepEqual(parsed, [], 'stale OOXML is discarded before parsing');
pending.shift()('latest'); await settle();
assert.deepEqual(applied, ['latest']);
assert.equal(peak, 1);
elements['editor-auto'].checked = false;
event(); await flush();
assert.equal(reads, 2, 'disabled auto does no reads');
elements['editor-auto'].checked = true;
event(); await flush();
elements['editor-auto'].checked = false;
pending.shift()('disabled'); await settle();
assert.deepEqual(applied, ['latest'], 'disabling auto rejects an outstanding result');
elements['editor-auto'].checked = true;
event(); await flush();
event(); await flush(); // a trailing request waits behind the current read
event(); // the newest selection has not finished its debounce
const beforeLatest = reads;
pending.shift()('old-again'); await settle();
assert.equal(reads, beforeLatest, 'pending work respects a newer debounce timer');
await flush();
assert.equal(reads, beforeLatest + 1);
pending.shift()('debounced-latest'); await settle();
assert.equal(reads, beforeLatest + 1, 'no extra trailing read remains');
assert.deepEqual(applied, ['latest', 'debounced-latest']);
let mounts = 0;
const initContext = vm.createContext({
  $: () => ({}), attachLatexAutocomplete() { mounts++; },
  createVisualEditor() { return {}; }, mountEditorToolbar() {},
  document: { querySelectorAll: () => [] }, localStorage: { getItem: () => 'latex' },
  renderEditorPreview() {},
});
vm.runInContext(source.slice(source.indexOf('let editorInitialized ='), source.indexOf('// Offline use:')), initContext);
assert.equal(mounts, 0, 'editor remains unmounted until requested');
vm.runInContext('initEditor(); initEditor();', initContext);
assert.equal(mounts, 1, 'opening editor repeatedly mounts only once');
console.log('PASS: lazy editor initialization, single-flight cursor reads, burst coalescing, stale and disabled results');

// Registration retries when Office is late or rejects a subscription, without duplicate handlers.
let subscription, registrations = 0, notifications = 0, retry;
const watcherEnv = vm.createContext({
  Office: { context: {}, EventType: { DocumentSelectionChanged: 'selection' }, AsyncResultStatus: { Failed: 'failed' } },
  setTimeout(fn) { retry = fn; }, onSelectionChanged() { notifications++; },
});
const watcherSource = source.slice(source.indexOf('let selectionWatcherInstalled ='), source.indexOf('// Returning to Word'));
vm.runInContext(watcherSource, watcherEnv);
vm.runInContext('installSelectionWatcher()', watcherEnv);
assert.equal(typeof retry, 'function', 'Office not ready schedules a retry');
watcherEnv.Office.context.document = { addHandlerAsync(_type, handler, callback) { registrations++; subscription = handler; callback({ status: registrations === 1 ? 'failed' : 'succeeded' }); } };
retry(); retry();
assert.equal(registrations, 2);
assert.equal(notifications, 1, 'successful subscription refreshes the current selection');
subscription();
assert.equal(notifications, 2, 'clicking another formula requests automatic loading');
vm.runInContext('installSelectionWatcher()', watcherEnv);
assert.equal(registrations, 2, 'ready and boot cannot register duplicate handlers');
console.log('PASS: selection event registration recovers from late Office readiness and subscription failure');

// Existing editor content must not prevent refreshing the Word selection.
let refreshes = 0;
const tabButtons = ['eq', 'editor'].map(tab => ({ dataset: { tab }, setAttribute() {}, scrollIntoView() {} }));
const tabsEnv = vm.createContext({
  selectionVersion: 0, autoTimer: null, autoPending: false, clearTimeout() {},
  location: { search: '' }, state: {},
  $: id => id === 'editor-auto' ? { checked: true } : { value: 'previous formula' },
  document: {
    querySelectorAll: selector => selector === 'section' ? [] : tabButtons,
    querySelector: selector => tabButtons.find(b => selector.includes('"' + b.dataset.tab + '"')),
  },
  initEditor() {}, renderEditorPreview() {}, onSelectionChanged() { refreshes++; },
});
vm.runInContext(source.slice(source.indexOf('const FULL ='), source.indexOf('function checkUrlTab()')), tabsEnv);
vm.runInContext("switchTab('editor')", tabsEnv);
assert.equal(refreshes, 1, 'reopening editor refreshes even with previous content');
vm.runInContext("switchTab('editor', false)", tabsEnv);
assert.equal(refreshes, 1, 'opening a calculation result preserves its formula');
console.log('PASS: editor entry refreshes selection while preserving calculation results');
assert.equal(tabsEnv.selectionVersion, 2, 'tab transitions invalidate previous reads, including calculation results');

// Restoring visual input must not steal focus or block automatic recognition.
let fieldFocus = 0, paneFocused = true;
class FakeMathfield {
  setAttribute() {} addEventListener() {} setValue() {} focus() { fieldFocus++; }
}
const visualSource = readFileSync(new URL('../taskpane/visual-editor.js', import.meta.url), 'utf8');
const visualEnv = vm.createContext({
  loadMathlive: async () => FakeMathfield,
  document: { hasFocus: () => paneFocused },
});
vm.runInContext(visualSource.slice(visualSource.indexOf('export function createVisualEditor')).replace('export function', 'function'), visualEnv);
const visualEditor = visualEnv.createVisualEditor({
  host: { appendChild() {}, closest: () => ({ classList: { contains: () => true } }) },
  textarea: { value: 'x' }, onChange() {},
});
await visualEditor.setActive(true, { focus: false });
assert.equal(fieldFocus, 0, 'restoring visual input leaves Word focus alone');
paneFocused = false;
await visualEditor.setActive(true);
assert.equal(fieldFocus, 0, 'async activation cannot pull focus back from Word');
paneFocused = true;
await visualEditor.setActive(true);
assert.equal(fieldFocus, 1, 'explicit activation still focuses visual input in the pane');
console.log('PASS: restored visual input and tab changes preserve automatic recognition');

// Late manual results cannot replace a newer selection or edits made while reading.
let manualResolve, renders = 0;
const manualField = { value: 'draft' };
const manualEnv = vm.createContext({
  selectionVersion: 0, applying: false, previewTimer: 0,
  $: id => id === 'editor-latex' ? manualField : id === 'tab-editor' ? { classList: { contains: () => true } } : {},
  io: { readCursorContext: () => new Promise(resolve => { manualResolve = resolve; }) },
  pickEquation: () => ({ eq: { latex: 'old formula' } }),
  clearTimeout() {}, renderEditorPreviewNow() { renders++; }, esc: s => s,
});
vm.runInContext(source.slice(source.indexOf('async function loadFormulaFromWord'), source.indexOf('async function applyFormulaToWord')), manualEnv);
let manual = manualEnv.loadFormulaFromWord();
manualEnv.selectionVersion++;
manualResolve({}); await manual;
assert.equal(manualField.value, 'draft');
manual = manualEnv.loadFormulaFromWord();
manualField.value = 'new typing';
manualResolve({}); await manual;
assert.equal(manualField.value, 'new typing');
assert.equal(renders, 0);

// Apply blocks auto for the full async operation and cannot be submitted twice.
let packageResolve, writeResolve, writes = 0, refreshed = 0;
const applyEnv = vm.createContext({
  applying: false, selectionVersion: 0,
  $: id => id === 'editor-latex' ? { value: 'x' } : {},
  document: { querySelector: () => ({ value: 'mathtype' }) },
  mtOptions: async () => ({}), browserRender() {},
  makeMathTypePackage: () => new Promise(resolve => { packageResolve = resolve; }),
  io: { replaceSelection() { writes++; return new Promise(resolve => { writeResolve = resolve; }); } },
  onSelectionChanged() { refreshed++; }, esc: s => s,
});
vm.runInContext(source.slice(source.indexOf('async function applyFormulaToWord'), source.indexOf('// Palette tabs switching')), applyEnv);
const writing = applyEnv.applyFormulaToWord();
await settle();
assert.equal(applyEnv.applying, true, 'guard starts before MathType generation');
await applyEnv.applyFormulaToWord();
packageResolve('package'); await settle();
assert.equal(writes, 1);
assert.equal(applyEnv.applying, true, 'guard remains until Word write completes');
writeResolve(); await writing;
assert.equal(applyEnv.applying, false);
assert.equal(refreshed, 1);
console.log('PASS: late manual results and overlapping apply cannot overwrite newer editor state');
