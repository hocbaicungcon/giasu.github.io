// Build the flat-OPC package that Word's paragraph.getOoxml() is expected to return, from a paragraph of a real docx.
import { readZip } from './zip.js';

export function loadDocx(path) {
  const z = readZip(path);
  const doc = z.read('word/document.xml').toString('utf8');
  const rels = z.read('word/_rels/document.xml.rels').toString('utf8');
  return { z, doc, rels };
}

export function paragraphsOf(doc) {
  const out = [];
  const re = /<w:p[ >][\s\S]*?<\/w:p>/g;
  let m;
  while ((m = re.exec(doc))) out.push({ xml: m[0], start: m.index, end: m.index + m[0].length });
  return out;
}

export function bodyPackage(docx) {
  const m = /<w:body>([\s\S]*)<\/w:body>/.exec(docx.doc);
  const sect = /<w:sectPr\b(?:(?!<w:sectPr)[\s\S])*<\/w:sectPr>\s*$/.exec(m[1]);
  const inner = sect ? m[1].slice(0, sect.index) : m[1];
  return packageFor(docx, inner, sect ? sect[0] : '<w:sectPr/>');
}

export function packageFor(docx, paragraphXml, sectPr = '<w:sectPr/>') {
  const rootOpen = /<w:document\b[^>]*>/.exec(docx.doc)[0];
  const relTags = docx.rels.match(/<Relationship\b[^>]*\/>/g) || [];
  const used = relTags.filter((t) => { const id = /\bId="([^"]+)"/.exec(t)[1]; return new RegExp(`"${id}"`).test(paragraphXml); });
  const parts = [];
  for (const t of used) {
    const target = /\bTarget="([^"]+)"/.exec(t)[1];
    if (/embeddings\/oleObject/.test(target)) {
      const b64 = docx.z.read('word/' + target).toString('base64').replace(/(.{76})/g, '$1\n');
      parts.push(`<pkg:part pkg:name="/word/${target}" pkg:contentType="application/vnd.openxmlformats-officedocument.oleObject" pkg:compression="store"><pkg:binaryData>${b64}</pkg:binaryData></pkg:part>`);
    }
  }
  return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">` +
    `<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part>` +
    `<pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${used.join('')}</Relationships></pkg:xmlData></pkg:part>` +
    `<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData>${rootOpen}<w:body>${paragraphXml}${sectPr}</w:body></w:document></pkg:xmlData></pkg:part>` +
    parts.join('') + `</pkg:package>`;
}

export function paragraphFromPackage(pkg) {
  const m = /<w:body>([\s\S]*?)<w:sectPr\/><\/w:body>/.exec(pkg) || /<w:body>([\s\S]*)<\/w:body>/.exec(pkg);
  return m[1];
}

export function documentXmlOf(pkg) {
  return /<pkg:part pkg:name="\/word\/document\.xml"[^>]*>\s*<pkg:xmlData>([\s\S]*?)<\/pkg:xmlData>/.exec(pkg)[1];
}
