// Build fixtures/sample-body.xml (a flat-OPC "body" package with real MathType objects) from a docx: node tools/make-fixture.mjs in.docx first last
import { writeFileSync } from 'node:fs';
import { loadDocx, paragraphsOf, packageFor } from '../tests/fixture.js';
const [input, first, last] = process.argv.slice(2);
const docx = loadDocx(input);
const paras = paragraphsOf(docx.doc).slice(Number(first), Number(last));
const pkg = packageFor(docx, paras.map((p) => p.xml).join(''));
writeFileSync(new URL('../fixtures/sample-body.xml', import.meta.url), pkg);
console.log('paragraphs', paras.length, 'bytes', pkg.length);
