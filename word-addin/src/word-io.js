// The only file that talks to Word (Office.js). Everything else works on flat-OPC strings, so it can be tested in node
// and against taskpane/mock-word.js in a browser.
const BATCH = 25;

export const hasWord = () => typeof Word !== 'undefined' && typeof Office !== 'undefined';

async function run(fn) { return Word.run(fn); }

export async function readBody() {
  return run(async (context) => {
    const ox = context.document.body.getOoxml();
    const paras = context.document.body.paragraphs;
    paras.load('items');
    await context.sync();
    return { pkg: ox.value, paragraphCount: paras.items.length };
  });
}

export async function selectionParagraphCount() {
  return run(async (context) => {
    const paras = context.document.getSelection().paragraphs;
    paras.load('items');
    await context.sync();
    return paras.items.length;
  });
}

export async function readSelection() {
  return run(async (context) => {
    const sel = context.document.getSelection();
    const ox = sel.getOoxml();
    const paras = sel.paragraphs;
    paras.load('items');
    await context.sync();
    return { pkg: ox.value, paragraphCount: paras.items.length };
  });
}

/** OOXML around the cursor: the selection, its first paragraph, and that paragraph's start up to the selection start. */
export async function readCursorContext() {
  return run(async (context) => {
    const sel = context.document.getSelection();
    const selOx = sel.getOoxml();
    const paras = sel.paragraphs;
    paras.load('items');
    await context.sync();
    const para = paras.items[0];
    const paraOx = para ? para.getOoxml() : null;
    let beforeOx = null;
    try { if (para) beforeOx = para.getRange('Start').expandTo(sel.getRange('Start')).getOoxml(); } catch { beforeOx = null; }
    await context.sync();
    return { selPkg: selOx.value, paraPkg: paraOx ? paraOx.value : null, beforePkg: beforeOx ? beforeOx.value : null };
  });
}

/** Font size (points) at the cursor / of the selection; 0 when it is mixed or unknown. */
export async function selectionFontSize() {
  return run(async (context) => {
    const font = context.document.getSelection().font;
    font.load('size');
    await context.sync();
    return Number(font.size) || 0;
  });
}

export async function replaceSelection(pkg) {
  return run(async (context) => {
    const sel = context.document.getSelection();
    sel.insertOoxml(pkg, 'Replace');
    await context.sync();
  });
}

/** Read OOXML of paragraphs. scope: {kind:'selection'} | {kind:'indexes', indexes:[...]} | {kind:'all'}. onProgress(done,total). */
export async function readParagraphs(scope, onProgress = () => {}) {
  return run(async (context) => {
    const coll = scope.kind === 'selection' ? context.document.getSelection().paragraphs : context.document.body.paragraphs;
    coll.load('items');
    await context.sync();
    const idx = scope.kind === 'indexes' ? scope.indexes : coll.items.map((_p, i) => i);
    const out = [];
    for (let i = 0; i < idx.length; i += BATCH) {
      const slice = idx.slice(i, i + BATCH);
      const calls = slice.map((k) => coll.items[k].getOoxml());
      await context.sync();
      slice.forEach((k, j) => out.push({ index: k, pkg: calls[j].value }));
      onProgress(Math.min(i + BATCH, idx.length), idx.length);
    }
    return out;
  });
}

/**
 * Replace paragraphs with new packages. items: [{index, pkg}] (indexes refer to the CURRENT document, so callers pass
 * them in ascending order and the paragraph count must not change in between). mode: 'content' | 'paragraph'.
 * Returns {before, after} paragraph counts so callers can spot stray paragraphs.
 */
export async function writeParagraphs(scope, items, mode, onProgress = () => {}) {
  return run(async (context) => {
    const coll = scope.kind === 'selection' ? context.document.getSelection().paragraphs : context.document.body.paragraphs;
    coll.load('items');
    const all = context.document.body.paragraphs;
    all.load('items');
    await context.sync();
    const before = all.items.length;
    for (let i = 0; i < items.length; i += BATCH) {
      for (const it of items.slice(i, i + BATCH)) {
        const p = coll.items[it.index];
        const target = mode === 'paragraph' ? p : p.getRange('Content');
        target.insertOoxml(it.pkg, 'Replace');
      }
      await context.sync();
      onProgress(Math.min(i + BATCH, items.length), items.length);
    }
    const again = context.document.body.paragraphs;
    again.load('items');
    await context.sync();
    return { before, after: again.items.length };
  });
}

export async function selectParagraph(index) {
  return run(async (context) => {
    const paras = context.document.body.paragraphs;
    paras.load('items');
    await context.sync();
    if (paras.items[index]) paras.items[index].select();
    await context.sync();
  });
}

export async function insertAtEnd(pkg) {
  return run(async (context) => {
    context.document.body.insertOoxml(pkg, 'End');
    await context.sync();
  });
}

export async function replaceBody(pkg) {
  return run(async (context) => {
    context.document.body.insertOoxml(pkg, 'Replace');
    await context.sync();
  });
}

/** New document with the given body package (opens a window). Throws when the host cannot do it; the caller falls back. */
export async function openAsNewDocument(pkg) {
  return run(async (context) => {
    const doc = context.application.createDocument();
    doc.body.insertOoxml(pkg, 'Replace');
    await context.sync();
    doc.open();
    await context.sync();
  });
}
