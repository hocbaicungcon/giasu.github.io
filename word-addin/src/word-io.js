// The only file that talks to Word (Office.js). Everything else works on flat-OPC strings, so it can be tested in node
// and against taskpane/mock-word.js in a browser.
import { paragraphPackages } from './ooxml.js';
import { canReadCompressed, readCompressedPackage } from './docx-package.js';

const BATCH = 25;
const WRITE_BYTES = 512 * 1024;
let lastReadRoute = 'chưa đọc';
export const bodyReadRoute = () => lastReadRoute;

function checkCancelled(signal) {
  if (signal?.aborted) {
    const error = new Error('Đã hủy chuyển đổi.');
    error.name = 'AbortError';
    throw error;
  }
}

function writeBatchSize() {
  // Keep the Mac path equivalent to a successful single-paragraph conversion.
  const platform = typeof Office !== 'undefined' ? (Office.context?.diagnostics?.platform || Office.context?.platform) : '';
  return /^mac/i.test(String(platform || '')) ? 1 : BATCH;
}

function paragraphWriteError(error, batch, completed, total) {
  const indexes = batch.map(it => it.index + 1).sort((a, b) => a - b);
  const location = indexes.length === 1 ? String(indexes[0]) : `${indexes[0]}–${indexes[indexes.length - 1]}`;
  const out = new Error(`Không ghi được đoạn ${location} (đã ghi ${completed}/${total} đoạn): ${error.message || error}`);
  out.code = error.code;
  out.debugInfo = error.debugInfo;
  return out;
}

export const hasWord = () => typeof Word !== 'undefined' && typeof Office !== 'undefined';

async function run(fn) { return Word.run(fn); }

export async function readBody({ scanOnly = false } = {}) {
  if (typeof Office !== 'undefined' && Office.context?.document?.getFileAsync && canReadCompressed()) {
    try {
      const [pkg, paragraphCount] = await Promise.all([readCompressedPackage({ scanOnly }), run(async context => {
        const paragraphs = context.document.body.paragraphs;
        paragraphs.load('items/$none'); await context.sync();
        return paragraphs.items.length;
      })]);
      lastReadRoute = 'DOCX (getFileAsync)';
      return { pkg, paragraphCount };
    } catch (error) { lastReadRoute = 'OOXML dự phòng: ' + error.message; }
  } else {
    lastReadRoute = 'OOXML (host chưa hỗ trợ đọc DOCX trực tiếp)';
  }
  return run(async (context) => {
    const ox = context.document.body.getOoxml();
    const paras = context.document.body.paragraphs;
    paras.load('items/$none');
    await context.sync();
    return { pkg: ox.value, paragraphCount: paras.items.length };
  });
}

export async function selectionParagraphCount() {
  return run(async (context) => {
    const paras = context.document.getSelection().paragraphs;
    paras.load('items/$none');
    await context.sync();
    return paras.items.length;
  });
}

export async function readSelection({ wholeParagraphs = false } = {}) {
  return run(async (context) => {
    const sel = context.document.getSelection();
    const paras = sel.paragraphs;
    // Conversion replaces entire paragraphs, including text outside a partial selection.
    const range = wholeParagraphs
      ? paras.getFirst().getRange('Whole').expandTo(paras.getLast().getRange('Whole'))
      : sel;
    const ox = range.getOoxml();
    paras.load('items/$none');
    await context.sync();
    return { pkg: ox.value, paragraphCount: paras.items.length };
  });
}

/** One body snapshot for flat documents; preserve host paragraph semantics for complex layouts. */
export async function readConversionParagraphs(kinds, onProgress = () => {}, { signal, scope = { kind: 'all' } } = {}) {
  checkCancelled(signal);
  let items;
  try {
    const { pkg, paragraphCount } = await (scope.kind === 'selection' ? readSelection({ wholeParagraphs: true }) : readBody());
    checkCancelled(signal);
    items = paragraphPackages(pkg, paragraphCount, kinds);
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    /* A host may export individual paragraphs even when body export fails. */
  }
  if (items != null) { onProgress(items.length, items.length); return items; }
  return readParagraphs(scope, onProgress, { signal });
}

/** OOXML around the cursor: the selection, its first paragraph, and that paragraph's start up to the selection start. */
export async function readCursorContext() {
  try { return await readCursorContextRanges(); } catch {
    // Older hosts may not support ranges; automatic and manual loading share this fallback.
    const ctx = {};
    try { ctx.selPkg = (await readSelection()).pkg; } catch { /* try paragraph */ }
    try { ctx.paraPkg = (await readParagraphs({ kind: 'selection' }))[0]?.pkg; } catch { /* selection may suffice */ }
    if (!ctx.selPkg && !ctx.paraPkg) throw new Error('Không đọc được vùng chọn từ Word.');
    return ctx;
  }
}

async function readCursorContextRanges() {
  // Fast path: one round trip for selection, paragraph and text before the cursor.
  try {
    return await run(async (context) => {
      const sel = context.document.getSelection();
      const para = sel.paragraphs.getFirst();
      if (sel.load) sel.load('isEmpty');
      const selOx = sel.getOoxml();
      const paraOx = para.getRange('Whole').getOoxml();
      const beforeOx = para.getRange('Start').expandTo(sel.getRange('Start')).getOoxml();
      const afterOx = sel.getRange('Start').expandTo(para.getRange('End')).getOoxml();
      await context.sync();
      return { selPkg: selOx.value, paraPkg: paraOx.value, beforePkg: beforeOx.value, afterPkg: afterOx.value, selectionEmpty: sel.isEmpty };
    });
  } catch { /* fall back to the step-by-step read below */ }
  return run(async (context) => {
    const sel = context.document.getSelection();
    if (sel.load) sel.load('isEmpty');
    const selOx = sel.getOoxml();
    const paras = sel.paragraphs;
    paras.load('items/$none');
    await context.sync();
    const para = paras.items[0];
    const paraOx = para ? para.getRange('Whole').getOoxml() : null;
    // Resolve the useful data before the optional range operation can fail at sync().
    await context.sync();
    const result = { selPkg: selOx.value, paraPkg: paraOx ? paraOx.value : null, beforePkg: null, afterPkg: null, selectionEmpty: sel.isEmpty };
    try {
      if (para) {
        const beforeOx = para.getRange('Start').expandTo(sel.getRange('Start')).getOoxml();
        await context.sync();
        result.beforePkg = beforeOx.value;
      }
    } catch { /* cursor range unavailable: keep the selection and paragraph */ }
    try {
      if (para) {
        const afterOx = sel.getRange('Start').expandTo(para.getRange('End')).getOoxml();
        await context.sync();
        result.afterPkg = afterOx.value;
      }
    } catch { /* prefix alone may still locate the equation */ }
    return result;
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
export async function readParagraphs(scope, onProgress = () => {}, { signal } = {}) {
  checkCancelled(signal);
  return run(async (context) => {
    const coll = scope.kind === 'selection' ? context.document.getSelection().paragraphs : context.document.body.paragraphs;
    coll.load('items/$none');
    await context.sync();
    const idx = scope.kind === 'indexes' ? scope.indexes : coll.items.map((_p, i) => i);
    const out = [];
    for (let i = 0; i < idx.length; i += BATCH) {
      checkCancelled(signal);
      const slice = idx.slice(i, i + BATCH);
      try {
        // Word Mac can reject Paragraph.getOoxml for embedded MathType objects.
        // Export the paragraph's full range instead, retaining its paragraph mark.
        const calls = slice.map((k) => {
          const p = coll.items[k];
          return writeBatchSize() === 1 ? p.getRange('Whole').getOoxml() : p.getOoxml();
        });
        await context.sync();
        slice.forEach((k, j) => out.push({ index: k, pkg: calls[j].value }));
      } catch (batchError) {
        // Read-only retries use fresh contexts: a rejected sync may poison the old one.
        for (const k of slice) {
          checkCancelled(signal);
          try {
            const pkg = await run(async retry => {
              const paragraphs = scope.kind === 'selection' ? retry.document.getSelection().paragraphs : retry.document.body.paragraphs;
              paragraphs.load('items/$none');
              await retry.sync();
              const p = paragraphs.items[k];
              if (!p) throw new Error('Vị trí đoạn đã thay đổi. Hãy đọc lại tài liệu.');
              const ox = p.getRange('Whole').getOoxml();
              await retry.sync();
              return ox.value;
            });
            out.push({ index: k, pkg });
          } catch (error) {
            const detail = new Error(`Không đọc được đoạn ${k + 1}${scope.kind === 'selection' ? ' trong vùng chọn' : ''}: ${error.message || error}`);
            detail.code = error.code || batchError.code;
            detail.debugInfo = error.debugInfo || batchError.debugInfo;
            throw detail;
          }
        }
      }
      onProgress(Math.min(i + BATCH, idx.length), idx.length);
    }
    return out;
  });
}

/**
 * Replace paragraphs with new packages. items: [{index, pkg}] refer to the CURRENT document.
 * Write backwards so paragraph insertion cannot shift an earlier target. mode: 'content' | 'paragraph'.
 * Returns {before, after} paragraph counts so callers can spot stray paragraphs.
 */
export async function writeParagraphs(scope, items, mode, onProgress = () => {}, { signal } = {}) {
  checkCancelled(signal);
  return run(async (context) => {
    const coll = scope.kind === 'selection' ? context.document.getSelection().paragraphs : context.document.body.paragraphs;
    coll.load('items/$none');
    const all = context.document.body.paragraphs;
    all.load('items/$none');
    await context.sync();
    const before = all.items.length;
    const ordered = [...items].sort((a, b) => b.index - a.index);
    const seen = new Set();
    for (const it of ordered) {
      if (!Number.isInteger(it.index) || !coll.items[it.index] || seen.has(it.index)) {
        throw new Error(`Vị trí đoạn không hợp lệ hoặc trùng lặp: ${it.index + 1}. Hãy đọc lại tài liệu.`);
      }
      seen.add(it.index);
    }
    const limit = writeBatchSize();
    for (let i = 0; i < ordered.length;) {
      checkCancelled(signal);
      const batch = [];
      let bytes = 0;
      while (i + batch.length < ordered.length && batch.length < limit) {
        const it = ordered[i + batch.length];
        // UTF-16 size is a conservative estimate for these mostly XML/base64 packages.
        const size = it.pkg.length * 2;
        if (batch.length && bytes + size > WRITE_BYTES) break;
        batch.push(it); bytes += size;
      }
      try {
        for (const it of batch) {
          const p = coll.items[it.index];
          const target = mode === 'paragraph' ? p : p.getRange('Content');
          target.insertOoxml(it.pkg, 'Replace');
        }
        await context.sync();
      } catch (error) {
        // A rejected sync may have applied some edits. Never retry the same write automatically.
        throw paragraphWriteError(error, batch, i, ordered.length);
      }
      i += batch.length;
      onProgress(i, ordered.length);
      if (signal && i < ordered.length) await new Promise(resolve => setTimeout(resolve, 0));
    }
    const again = context.document.body.paragraphs;
    again.load('items/$none');
    await context.sync();
    return { before, after: again.items.length };
  });
}

export async function selectParagraph(index) {
  return run(async (context) => {
    const paras = context.document.body.paragraphs;
    paras.load('items/$none');
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

/** Replace a snapshot in one OOXML insertion, preserving the package's tables and section properties. */
export async function writeBodySnapshot(pkg, before) {
  return run(async (context) => {
    const body = context.document.body;
    body.insertOoxml(pkg, 'Replace');
    // Load the post-write count in the same sync, after the insertion command.
    const paragraphs = body.paragraphs;
    paragraphs.load('items/$none');
    await context.sync();
    return { before, after: paragraphs.items.length };
  });
}

/** New document with the given body package (opens a window). Throws when the host cannot do it; the caller falls back. */
export async function openAsNewDocument(pkg, { footerPkg = null } = {}) {
  return run(async (context) => {
    const doc = context.application.createDocument();
    doc.body.insertOoxml(pkg, 'Replace');
    await context.sync();
    if (footerPkg) {   // footer of the first section; a failure here must not lose the exam itself
      try { doc.sections.getFirst().getFooter('Primary').insertOoxml(footerPkg, 'Replace'); await context.sync(); } catch { /* footer not supported by this Word */ }
    }
    doc.open();
    await context.sync();
  });
}

/** Replace the same whole-paragraph selection exported for Markdown conversion. */
export async function writeSelectionSnapshot(pkg, before) {
  return run(async context => {
    const paragraphs = context.document.getSelection().paragraphs;
    const range = paragraphs.getFirst().getRange('Whole').expandTo(paragraphs.getLast().getRange('Whole'));
    range.insertOoxml(pkg, 'Replace');
    await context.sync();
    // Markdown can add/remove paragraphs; its selection backup is handled by Word Undo.
    return { before, after: null };
  });
}
