import { latexToTree } from '../src/latex2omml.js';

/** Required formula slots, beyond LaTeX syntax (which permits empty fractions). */
export function formulaIssue(latex) {
  if (!latex?.trim()) return 'Thầy cô hãy nhập công thức trước.';
  if (/\\placeholder\b/.test(latex)) return 'Công thức còn ô trống. Thầy cô hãy điền vào ô đó trước khi chèn.';
  let tree;
  try { tree = latexToTree(latex); } catch {
    return 'Công thức chưa hợp lệ. Thầy cô hãy kiểm tra dấu ngoặc và các ô nhập.';
  }
  const empty = value => Array.isArray(value) && value.length === 0;
  function inspect(node) {
    if (!node || typeof node !== 'object') return '';
    if (node.k === 'f' && (empty(node.num) || empty(node.den))) {
      const missing = empty(node.num) && empty(node.den) ? 'tử số và mẫu số' : empty(node.num) ? 'tử số' : 'mẫu số';
      return `Thầy cô chưa nhập ${missing}. Bấm vào ô trống để điền, dùng Tab để chuyển ô.`;
    }
    if (node.k === 'rad' && empty(node.e)) return 'Thầy cô chưa nhập biểu thức trong dấu căn.';
    if ((node.k === 'script' || node.k === 'pendNary') && (empty(node.sup) || empty(node.sub))) return 'Số mũ hoặc chỉ số còn trống. Thầy cô hãy điền vào ô trống.';
    if (node.k === 'm' && node.rows.some(row => row.some(empty))) return 'Ma trận còn ô trống. Thầy cô hãy điền các ô, dùng 0 nếu giá trị bằng không.';
    for (const value of Object.values(node)) {
      if (Array.isArray(value)) {
        for (const child of value) { const issue = inspect(child); if (issue) return issue; }
      } else if (value && typeof value === 'object') { const issue = inspect(value); if (issue) return issue; }
    }
    return '';
  }
  return inspect(tree);
}
