// MathType -> Word equation -> MathType again, on a real exam, written to a docx for LibreOffice / Word. Usage: node tests/mathtype_e2e.mjs in.docx out.docx
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadDocx, paragraphsOf, packageFor, documentXmlOf } from './fixture.js';
import { convertMathTypeInPackage } from '../src/ooxml.js';
import { convertNativeToMathType } from '../src/mathtype-object.js';
import { renderLatex } from '../src/mathrender.js';
import { parseXml } from '../src/xml.js';
import { splitParts } from '../src/ooxml.js';

const [input, output] = process.argv.slice(2);
const png = Uint8Array.from(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'));
const render = (latex) => { const r = renderLatex(latex); return { png, width: r.width, height: r.height, baseline: r.baseline }; };
const docx = loadDocx(input);
const paras = paragraphsOf(docx.doc);
let doc = docx.doc, delta = 0, stats = { toWord: 0, toMathType: 0, kept: 0 };
const extraParts = [], extraRels = [];
for (const p of paras) {
  if (!p.xml.includes('<w:object')) continue;
  const w = convertMathTypeInPackage(packageFor(docx, p.xml), { display: false });
  if (!w.changed) continue;
  stats.toWord += w.converted;
  const m = await convertNativeToMathType(w.pkg, { render });
  stats.toMathType += m.converted; stats.kept += m.kept.length;
  const finalPkg = m.changed ? m.pkg : w.pkg;
  const xml = /<w:body>([\s\S]*?)<w:sectPr\/><\/w:body>/.exec(documentXmlOf(finalPkg))[1];
  doc = doc.slice(0, p.start + delta) + xml + doc.slice(p.end + delta);
  delta += xml.length - p.xml.length;
  for (const [name, part] of splitParts(finalPkg)) {
    if (/Tc\d+\.(bin|png|emf)$/.test(name)) { const b = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body)[1].replace(/\s+/g, ''); extraParts.push({ name: name.replace(/^\//, ''), b64: b }); }
  }
  const rels = /<pkg:part pkg:name="\/word\/_rels\/document\.xml\.rels"[^>]*>[\s\S]*?<\/pkg:part>/.exec(finalPkg)[0];
  for (const r of rels.match(/<Relationship\b[^>]*Id="rIdTc[^>]*\/>/g) || []) extraRels.push(r);
}
const rootNs = 'xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"';
void rootNs;
parseXml(doc);
const dir = mkdtempSync(join(tmpdir(), 'mt-'));
writeFileSync(join(dir, 'document.xml'), doc);
writeFileSync(join(dir, 'extra.json'), JSON.stringify({ parts: extraParts, rels: [...new Set(extraRels)] }));
execFileSync('python3', ['-I', new URL('./write_docx_extra.py', import.meta.url).pathname, input, dir, output]);
console.log(stats, 'wrote', output);
