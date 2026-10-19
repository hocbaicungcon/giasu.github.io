// End to end on a real file: convert every paragraph exactly as the add-in would (package in -> package out), put the
// results back into a copy of the docx and write it for pandoc / LibreOffice / Word. Usage: node tests/e2e_docx.mjs in.docx out.docx [display]
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadDocx, paragraphsOf, packageFor, paragraphFromPackage } from './fixture.js';
import { convertMathTypeInPackage, scanPackage } from '../src/ooxml.js';
import { parseXml } from '../src/xml.js';

const [input, output, display] = process.argv.slice(2);
const docx = loadDocx(input);
const paras = paragraphsOf(docx.doc);
let doc = docx.doc, delta = 0, converted = 0, kept = 0, paraCount = 0;
const reasons = {};
for (const p of paras) {
  if (!p.xml.includes('<w:object')) continue;
  const pkg = packageFor(docx, p.xml);
  const r = convertMathTypeInPackage(pkg, { display: display === 'display' });
  converted += r.converted; kept += r.kept.length;
  for (const k of r.kept) reasons[k.reason] = (reasons[k.reason] || 0) + 1;
  if (!r.changed) continue;
  paraCount++;
  const newXml = paragraphFromPackage(r.pkg);
  if (/<w:object\b[^>]*>[\s\S]*?Equation\.DSMT/.test(newXml) && r.kept.length === 0) throw new Error('object left behind');
  doc = doc.slice(0, p.start + delta) + newXml + doc.slice(p.end + delta);
  delta += newXml.length - p.xml.length;
}
parseXml(doc);   // well-formed?
console.log({ paragraphs: paras.length, paragraphsChanged: paraCount, converted, kept, reasons });
const dir = mkdtempSync(join(tmpdir(), 'e2e-'));
writeFileSync(join(dir, 'document.xml'), doc);
execFileSync('python3', ['-I', '-c', `
import zipfile, sys
src, doc, out = sys.argv[1:4]
zin = zipfile.ZipFile(src)
zout = zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = zin.read(item.filename)
    if item.filename == 'word/document.xml': data = open(doc, 'rb').read()
    zout.writestr(item, data)
zout.close()`, input, join(dir, 'document.xml'), output]);
console.log('wrote', output);
