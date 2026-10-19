// Analysis helper: print the record tree of a MathType equation with raw bytes. node tools/mtef_tree.mjs file.docx [ole-name | latex-substring]
import { readZip } from '../tests/zip.js';
import { readOleStream, mtefFromOle, oleToLatex, Parser } from '../src/mtef.js';
const hex = (d, a, b) => Buffer.from(d.subarray(a, b)).toString('hex').replace(/(..)/g, '$1 ').trim();
export function tree(data, given) {
  const root = given || new Parser(data).parse()[0];
  const lines = [];
  const walk = (n, depth) => {
    if (!n.span) return;
    const pad = '  '.repeat(depth);
    if (n[0] === 'char') lines.push(`${pad}CHAR face=${n[1]} code=0x${(n[2] ?? n[4] ?? n[3]).toString(16)} emb=[${n[5]}]  <${hex(data, n.span[0], n.span[1])}>`);
    else if (n[0] === 'tmpl') {
      const kids = n[3];
      const headEnd = kids.length ? kids[0].span[0] : n.span[1];
      lines.push(`${pad}TMPL sel=${n[1]} var=${n[2]} head<${hex(data, n.span[0], headEnd)}>`);
      kids.forEach((k) => walk(k, depth + 1));
    } else if (n[0] === 'line') {
      lines.push(`${pad}LINE <${hex(data, n.span[0], n.span[0] + 2)}>`);
      n[1].forEach((k) => walk(k, depth + 1));
    } else if (n[0] === 'pile') { lines.push(`${pad}PILE align=${n[1]}`); n[2].forEach((k) => walk(k, depth + 1)); }
    else if (n[0] === 'matrix') { lines.push(`${pad}MATRIX ${n[1]}x${n[2]} <${hex(data, n.span[0], n[3][0].span[0])}>`); n[3].forEach((k) => walk(k, depth + 1)); }
  };
  walk(root, 0);
  return { lines, prefix: hex(data, 0, root.span ? root.span[0] : data.length), root };
}
if (process.argv[1].endsWith('mtef_tree.mjs')) {
  const z = readZip(process.argv[2]);
  const want = process.argv[3];
  for (const n of z.names.filter((x) => /embeddings\/oleObject\d+\.bin$/.test(x))) {
    const ole = new Uint8Array(z.read(n));
    let latex; try { latex = oleToLatex(ole)[0]; } catch { continue; }
    if (want && n !== want && !latex.includes(want)) continue;
    const m = mtefFromOle(ole);
    console.log('==', n, latex);
    const t = tree(m);
    console.log(t.lines.join('\n'));
    if (want) break;
  }
}
