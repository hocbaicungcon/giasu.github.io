import assert from 'node:assert/strict';
import { deflateRawSync } from 'node:zlib';
import { zipStore } from '../src/xlsx.js';
import { docxToPackage, readCompressedPackage } from '../src/docx-package.js';
import { splitParts } from '../src/ooxml.js';
import { readBody, writeBodySnapshot } from '../src/word-io.js';

const files = [
  { name: '[Content_Types].xml', data: '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="bin" ContentType="application/vnd.openxmlformats-officedocument.oleObject"/><Default Extension="png" ContentType="image/png"/></Types>' },
  { name: 'word/document.xml', data: '<?xml version="1.0"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:r><w:t>Đề kiểm tra</w:t></w:r></w:p><w:tbl><w:tr><w:tc><w:p/></w:tc></w:tr></w:tbl><w:sectPr/></w:body></w:document>' },
  { name: 'word/_rels/document.xml.rels', data: '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>' },
  { name: 'word/header1.xml', data: '<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p/></w:hdr>' },
  { name: 'word/embeddings/oleObject1.bin', data: new Uint8Array([0, 255, 15, 1]) },
  { name: 'word/media/image1.png', data: new Uint8Array([137, 80, 78, 71]) },
];
const stored = Buffer.from(zipStore(files));
// Reuse the stored ZIP's CRCs and file names, compressing only its file payloads.
function compressZip(zip) {
  const end = zip.length - 22, count = zip.readUInt16LE(end + 10), locals = [], central = [];
  let pos = zip.readUInt32LE(end + 16), offset = 0;
  for (let i = 0; i < count; i++) {
    const len = zip.readUInt16LE(pos + 28), extra = zip.readUInt16LE(pos + 30), comment = zip.readUInt16LE(pos + 32);
    const c = Buffer.from(zip.subarray(pos, pos + 46 + len + extra + comment));
    const start = c.readUInt32LE(42), size = c.readUInt32LE(24);
    const headerSize = 30 + zip.readUInt16LE(start + 26) + zip.readUInt16LE(start + 28);
    const header = Buffer.from(zip.subarray(start, start + headerSize));
    const packed = deflateRawSync(zip.subarray(start + headerSize, start + headerSize + size));
    header.writeUInt16LE(8, 8); header.writeUInt32LE(packed.length, 18);
    c.writeUInt16LE(8, 10); c.writeUInt32LE(packed.length, 20); c.writeUInt32LE(offset, 42);
    locals.push(header, packed); central.push(c); offset += header.length + packed.length;
    pos += c.length;
  }
  const footer = Buffer.from(zip.subarray(end));
  footer.writeUInt32LE(Buffer.concat(central).length, 12); footer.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, ...central, footer]);
}
const compressed = compressZip(stored);
for (const bytes of [stored, compressed]) {
  const pkg = await docxToPackage(bytes), parts = splitParts(pkg);
  assert.equal(parts.size, files.length - 1);
  assert.ok(pkg.includes('Đề kiểm tra'));
  assert.ok(pkg.includes('<w:tbl>'));
  assert.ok(pkg.includes('<w:sectPr/>'));
  assert.ok(!pkg.includes('<?xml'), 'XML declarations must not be embedded inside pkg:xmlData');
  assert.ok(parts.get('/word/embeddings/oleObject1.bin').body.includes('AP8PAQ=='));
  const scan = splitParts(await docxToPackage(bytes, { scanOnly: true }));
  assert.equal(scan.size, 3);
  assert.ok(!scan.has('/word/media/image1.png'), 'scanning does not decompress or encode pictures');
}
await assert.rejects(docxToPackage(compressed.subarray(0, -5)), /DOCX/);
await assert.rejects(docxToPackage(new Uint8Array(20)), /DOCX/);

const previousOffice = globalThis.Office, previousWord = globalThis.Word;
try {
  let closes = 0, exports = 0, fallbacks = 0, inserts = 0, syncs = 0, failSlice = false;
  globalThis.Office = { context: { diagnostics: { platform: 'Mac' }, document: {
    getFileAsync(type, _opts, cb) {
      assert.equal(_opts.sliceSize, 4 * 1024 * 1024, 'desktop exports use fewer file slices');
      assert.equal(type, 'compressed'); exports++;
      cb({ status: 'succeeded', value: {
        size: compressed.length, sliceCount: 2,
        getSliceAsync(i, done) {
          const middle = Math.floor(compressed.length / 2);
          done(failSlice ? { status: 'failed', error: { message: 'slice failed' } } :
            { status: 'succeeded', value: { data: i ? compressed.subarray(middle) : compressed.subarray(0, middle) } });
        },
        closeAsync(done) { closes++; done({ status: 'succeeded' }); },
      } });
    },
  } } };
  const paragraphs = { items: [{}, {}], load() {} };
  globalThis.Word = { run: fn => fn({ document: { body: { paragraphs,
    getOoxml() { fallbacks++; return { value: 'fallback' }; },
    insertOoxml(pkg, where) { inserts++; assert.equal(where, 'Replace'); assert.ok(pkg.includes('<w:tbl>')); },
  } }, sync: async () => { syncs++; } }) };
  const snapshot = await readBody({ scanOnly: true });
  assert.equal(snapshot.paragraphCount, 2);
  assert.equal(fallbacks, 0, 'compressed reading avoids getOoxml entirely');
  assert.equal(closes, 1);
  assert.equal(exports, 1);
  assert.equal(syncs, 1);
  const full = await readCompressedPackage();
  const before = syncs;
  assert.deepEqual(await writeBodySnapshot(full, 2), { before: 2, after: 2 });
  assert.equal(inserts, 1);
  assert.equal(syncs - before, 1, 'all paragraphs and tables use one write sync');
  failSlice = true;
  const after = await readBody();
  assert.equal(after.pkg, 'fallback');
  assert.equal(closes, 3, 'file handles also close when a slice fails');
} finally { globalThis.Office = previousOffice; globalThis.Word = previousWord; }
console.log('PASS: stored/deflated DOCX, scan-only reads, tables and sections, compressed Office export, close on failure, OOXML fallback and one body write');
