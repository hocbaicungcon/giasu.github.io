// Which equation does the user mean? Word gives the OOXML of the selection, but a collapsed cursor inside an equation
// selects nothing, so fall back to the paragraph and use the part of it before the cursor to count equations.
import { scanPackage } from './ooxml.js';

const list = (pkg) => (pkg ? scanPackage(pkg).equations.slice().sort((a, b) => a.pos - b.pos) : []);

/**
 * {selPkg, paraPkg, beforePkg}: OOXML of the selection, of its paragraph, and of the paragraph's start up to the cursor.
 * Returns {eq, how: 'selection'|'paragraph'|'cursor'|'none', count, index, found, errors}.
 */
export function pickEquation({ selPkg, paraPkg, beforePkg, afterPkg, selectionEmpty } = {}) {
  const sel = list(selPkg), selOk = sel.filter((e) => e.latex !== null);
  if (selOk.length && (selectionEmpty === false || (selectionEmpty !== true && selOk.length === 1))) return { eq: selOk[0], how: 'selection', count: selOk.length, index: 0 };
  const para = list(paraPkg);
  const errors = [...sel, ...para].filter((e) => e.error).map((e) => e.error);
  if (!para.length) return { eq: null, how: 'none', found: 0, errors };
  let index = 0, how = 'paragraph';
  if (para.length > 1) {
    if (!beforePkg && !afterPkg) return { eq: null, how: 'none', found: para.length,
      errors: ['Word chưa cung cấp vị trí con trỏ. Hãy bôi đen công thức cần lấy.', ...errors] };
    const before = list(beforePkg).length;
    // A cursor inside $...$ leaves an incomplete formula in the prefix. Native
    // equations can instead be exported in BOTH halves. The suffix distinguishes them.
    const after = afterPkg ? list(afterPkg).length : null;
    const position = !beforePkg && after !== null ? para.length - after
      : before - (after === null || before + after > para.length ? 1 : 0);
    index = Math.min(Math.max(position, 0), para.length - 1);
    how = 'cursor';
  }
  const eq = para[index];
  if (eq.latex === null) return { eq: null, how: 'none', found: para.length, errors: [eq.error, ...errors].filter(Boolean) };
  return { eq, how, count: para.length, index };
}
