// Batch detection of TikZ environments in paragraph texts (pure, testable).
const BEGIN = /\\begin\{tikzpicture\}/;
const END = /\\end\{tikzpicture\}/;

/**
 * texts: paragraph texts. Returns { blocks: [{start,end,code}], skipped: [{start,reason}] }.
 * A block spans whole paragraphs from the one holding \begin{tikzpicture} to the one holding \end{tikzpicture}.
 * Paragraphs that also contain other text before \begin / after \end are skipped (we never delete user text).
 * Optional \begin{center}/\end{center} lines directly around the block are ignored (kept as-is).
 */
export function findTikzBlocks(texts) {
  const blocks = [], skipped = [];
  for (let i = 0; i < texts.length; i++) {
    const t = String(texts[i] || '').replace(/[​\r ]/g, ' ');
    if (!BEGIN.test(t)) continue;
    let j = i;
    let acc = t;
    while (!END.test(acc) && j + 1 < texts.length && j - i < 400) { j++; acc += '\n' + String(texts[j] || '').replace(/[​\r ]/g, ' '); }
    if (!END.test(acc)) { skipped.push({ start: i, reason: 'Thiếu \\end{tikzpicture}' }); continue; }
    const b = acc.search(BEGIN);
    const em = END.exec(acc);
    const endPos = em.index + em[0].length;
    const before = acc.slice(0, b).trim(), after = acc.slice(endPos).trim();
    if (before || after) { skipped.push({ start: i, reason: 'Có chữ cùng đoạn với mã TikZ' }); i = j; continue; }
    blocks.push({ start: i, end: j, code: acc.slice(b, endPos) });
    i = j;
  }
  return { blocks, skipped };
}
