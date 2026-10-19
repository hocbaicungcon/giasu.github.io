// Document-level logic shared by the task pane and the node tests: scan a body package into a flat equation list with
// paragraph ordinals, build find/replace previews, and rewrite one paragraph package at a time.
import { scanPackage, convertMathTypeInPackage, rewriteEquations } from './ooxml.js';

export function paragraphOrdinals(doc) {
  const starts = [];
  const re = /<w:p[ >]/g;
  let m;
  while ((m = re.exec(doc))) starts.push(m.index);
  return starts;
}

const paraText = (xml) => (xml.match(/<w:t\b[^>]*>[^<]*<\/w:t>/g) || []).map((t) => t.replace(/<[^>]+>/g, '')).join('');

/** Scan a whole-body package: equations with the ordinal and an excerpt of their paragraph. */
export function scanBody(pkg) {
  const scan = scanPackage(pkg);
  const starts = paragraphOrdinals(scan.doc || '');
  const ends = starts.map((s) => { const e = scan.doc.indexOf('</w:p>', s); return e < 0 ? scan.doc.length : e + 6; });
  const list = scan.equations.map((eq, n) => {
    let lo = 0, hi = starts.length - 1, para = -1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (starts[mid] <= eq.pos) { para = mid; lo = mid + 1; } else hi = mid - 1; }
    const excerpt = para >= 0 ? paraText(scan.doc.slice(starts[para], ends[para])).slice(0, 80) : '';
    return { n, kind: eq.kind, latex: eq.latex, error: eq.error, progId: eq.progId, para, excerpt };
  });
  return { equations: list, paragraphTotal: starts.length };
}

export function makeTransform({ find, replace, regex, matchCase }) {
  if (!find) return null;
  let re;
  try { re = new RegExp(regex ? find : find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), matchCase ? 'g' : 'gi'); } catch (e) { throw new Error('Biểu thức chính quy không hợp lệ: ' + e.message); }
  const rep = regex ? replace : replace.replace(/\$/g, '$$$$');
  return (latex) => { re.lastIndex = 0; if (!re.test(latex)) return null; re.lastIndex = 0; return latex.replace(re, rep); };
}

export function previewReplace(scanned, opts) {
  const t = makeTransform(opts);
  if (!t) return [];
  const rows = [];
  for (const eq of scanned.equations) {
    if (eq.latex === null) continue;
    if (eq.kind === 'mathtype' && opts.includeMathType === false) continue;
    const after = t(eq.latex);
    if (after !== null && after !== eq.latex) rows.push({ n: eq.n, para: eq.para, kind: eq.kind, before: eq.latex, after });
  }
  return rows;
}

export { convertMathTypeInPackage, rewriteEquations, scanPackage };
