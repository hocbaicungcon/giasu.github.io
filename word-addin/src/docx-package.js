// Read Office's compressed document locally. No server, external library or installed MathType needed.
import { escapeXml } from './xml.js';

const text = bytes => new TextDecoder().decode(bytes);
const b64 = bytes => {
  let value = '';
  for (let i = 0; i < bytes.length; i += 0x8000) value += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(value);
};
const attr = (tag, name) => new RegExp(`\\b${name}=["']([^"']+)["']`).exec(tag)?.[1];

export function canReadCompressed() {
  try { return typeof Blob !== 'undefined' && typeof Response !== 'undefined' && !!new DecompressionStream('deflate-raw'); }
  catch { return false; }
}

export async function docxToPackage(bytes, { scanOnly = false } = {}) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let end = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) {
    if (view.getUint32(i, true) === 0x06054b50 && i + 22 + view.getUint16(i + 20, true) === bytes.length) { end = i; break; }
  }
  if (end < 0) throw new Error('Không đọc được cấu trúc DOCX');
  const count = view.getUint16(end + 10, true);
  let pos = view.getUint32(end + 16, true), totalSize = 0;
  const entries = new Map();
  for (let i = 0; i < count; i++) {
    if (pos + 46 > end || view.getUint32(pos, true) !== 0x02014b50) throw new Error('Danh mục DOCX không hợp lệ');
    const flags = view.getUint16(pos + 8, true), method = view.getUint16(pos + 10, true);
    const size = view.getUint32(pos + 24, true), packed = view.getUint32(pos + 20, true);
    const length = view.getUint16(pos + 28, true), extra = view.getUint16(pos + 30, true), comment = view.getUint16(pos + 32, true);
    const local = view.getUint32(pos + 42, true);
    const name = text(bytes.subarray(pos + 46, pos + 46 + length));
    totalSize += size;
    if ((flags & 1) || totalSize > 256 * 1024 * 1024 || local + 30 > bytes.length ||
      view.getUint32(local, true) !== 0x04034b50) throw new Error('DOCX quá lớn hoặc không được hỗ trợ');
    const start = local + 30 + view.getUint16(local + 26, true) + view.getUint16(local + 28, true);
    if (start + packed > bytes.length) throw new Error('Dữ liệu DOCX bị cắt');
    entries.set(name, { method, size, data: bytes.subarray(start, start + packed) });
    pos += 46 + length + extra + comment;
  }
  async function read(name) {
    const entry = entries.get(name);
    if (!entry) throw new Error('DOCX thiếu ' + name);
    let output;
    if (entry.method === 0) output = entry.data;
    else if (entry.method === 8) {
      output = new Uint8Array(await new Response(new Blob([entry.data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
    } else throw new Error('Kiểu nén DOCX chưa hỗ trợ');
    if (output.length !== entry.size) throw new Error('Kích thước phần DOCX không khớp');
    return output;
  }
  const types = text(await read('[Content_Types].xml')), defaults = new Map(), overrides = new Map();
  for (const tag of types.match(/<(?:\w+:)?(?:Default|Override)\b[^>]*\/>/g) || []) {
    const type = attr(tag, 'ContentType'), name = attr(tag, 'PartName');
    if (name) overrides.set(name.slice(1), type); else defaults.set(attr(tag, 'Extension'), type);
  }
  const names = [...entries.keys()].filter(name => !name.endsWith('/') && name !== '[Content_Types].xml' &&
    (!scanOnly || name === 'word/document.xml' || name === 'word/_rels/document.xml.rels' || name.startsWith('word/embeddings/')));
  const parts = [];
  for (let i = 0; i < names.length; i += 8) {
    parts.push(...await Promise.all(names.slice(i, i + 8).map(async name => {
      const type = overrides.get(name) || defaults.get(name.split('.').pop());
      if (!type) throw new Error('DOCX thiếu kiểu nội dung: ' + name);
      const data = await read(name), xml = /(?:\+xml|\/xml)$/.test(type);
      const body = xml ? `<pkg:xmlData>${text(data).replace(/^\uFEFF/, '').replace(/^\s*<\?xml[^?]*\?>\s*/, '')}</pkg:xmlData>` : `<pkg:binaryData>${b64(data)}</pkg:binaryData>`;
      return `<pkg:part pkg:name="/${escapeXml(name)}" pkg:contentType="${escapeXml(type)}">${body}</pkg:part>`;
    })));
  }
  if (!entries.has('word/document.xml')) throw new Error('DOCX thiếu nội dung Word');
  return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">${parts.join('')}</pkg:package>`;
}

const call = (target, method, ...args) => new Promise((resolve, reject) => {
  target[method](...args, result => {
    if (result.status === 'succeeded') resolve(result.value);
    else reject(new Error(result.error?.message || `${method} thất bại`));
  });
});

export async function readCompressedPackage(options) {
  const office = Office.context;
  const platform = office.diagnostics?.platform || office.platform || '';
  const file = await call(office.document, 'getFileAsync', Office.FileType?.Compressed || 'compressed', {
    sliceSize: /iPad|iOS/i.test(platform) ? 65536 : 4 * 1024 * 1024,
  });
  try {
    if (!file.size || file.size > 128 * 1024 * 1024) throw new Error('DOCX quá lớn');
    const bytes = new Uint8Array(file.size);
    let offset = 0;
    for (let i = 0; i < file.sliceCount; i++) {
      const slice = await call(file, 'getSliceAsync', i);
      bytes.set(slice.data, offset); offset += slice.data.length;
    }
    if (offset !== bytes.length) throw new Error('Chưa đọc đủ DOCX');
    return await docxToPackage(bytes, options);
  } finally {
    try { await call(file, 'closeAsync'); } catch { /* original read result takes precedence */ }
  }
}
