// Minimal .xlsx writer (stored zip + inline strings): enough for the two answer-key layouts, no dependencies.
import { escapeXml } from './xml.js';

const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = (d) => { let c = 0xffffffff; for (let i = 0; i < d.length; i++) c = CRC[(c ^ d[i]) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const utf8 = (s) => new TextEncoder().encode(s);

export function zipStore(files) {
  const parts = [], central = [];
  let offset = 0;
  for (const f of files) {
    const name = utf8(f.name), data = typeof f.data === 'string' ? utf8(f.data) : f.data, crc = crc32(data);
    const local = new Uint8Array(30 + name.length);
    const v = new DataView(local.buffer);
    v.setUint32(0, 0x04034b50, true); v.setUint16(4, 20, true); v.setUint16(6, 0x0800, true); v.setUint16(8, 0, true);
    v.setUint16(10, 0, true); v.setUint16(12, 0x21, true); v.setUint32(14, crc, true); v.setUint32(18, data.length, true); v.setUint32(22, data.length, true);
    v.setUint16(26, name.length, true); local.set(name, 30);
    const cen = new Uint8Array(46 + name.length);
    const c = new DataView(cen.buffer);
    c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(12, 0, true); c.setUint16(14, 0x21, true);
    c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true); c.setUint16(28, name.length, true); c.setUint32(42, offset, true);
    cen.set(name, 46);
    parts.push(local, data); central.push(cen);
    offset += local.length + data.length;
  }
  const cenSize = central.reduce((s, x) => s + x.length, 0);
  const end = new Uint8Array(22), e = new DataView(end.buffer);
  e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, cenSize, true); e.setUint32(16, offset, true);
  const all = [...parts, ...central, end];
  const out = new Uint8Array(all.reduce((s, x) => s + x.length, 0));
  let p = 0;
  for (const x of all) { out.set(x, p); p += x.length; }
  return out;
}

const colName = (i) => { let s = ''; for (i++; i > 0; i = Math.floor((i - 1) / 26)) s = String.fromCharCode(65 + ((i - 1) % 26)) + s; return s; };

/** rows: array of arrays of strings (null/'' = empty). opts: {sheet, widths: [{from,to,width}], headerRow, headerCol}. */
export function buildXlsx(rows, opts = {}) {
  const sheet = opts.sheet || 'Sheet1';
  const cell = (v, r, c) => {
    if (v === null || v === undefined || v === '') return '';
    const head = r === 0 && opts.headerRow !== false, firstCol = c === 0 && opts.headerCol !== false;
    return `<c r="${colName(c)}${r + 1}" s="${head || firstCol ? 2 : 1}" t="inlineStr"><is><t xml:space="preserve">${escapeXml(String(v))}</t></is></c>`;
  };
  const sheetData = rows.map((row, r) => `<row r="${r + 1}">${row.map((v, c) => cell(v, r, c)).join('')}</row>`).join('');
  const cols = (opts.widths || []).map((w) => `<col min="${w.from}" max="${w.to}" width="${w.width}" customWidth="1"/>`).join('');
  const ns = 'xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"';
  const files = [
    { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>' },
    { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
    { name: 'xl/workbook.xml', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook ${ns} xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${escapeXml(sheet.slice(0, 31))}" sheetId="1" r:id="rId1"/></sheets></workbook>` },
    { name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>' },
    { name: 'xl/styles.xml', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet ${ns}><fonts count="2"><font><sz val="11"/><name val="Arial"/></font><font><b/><sz val="11"/><name val="Arial"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE8F0EC"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FF999999"/></left><right style="thin"><color rgb="FF999999"/></right><top style="thin"><color rgb="FF999999"/></top><bottom style="thin"><color rgb="FF999999"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf></cellXfs></styleSheet>` },
    { name: 'xl/worksheets/sheet1.xml', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet ${ns}>${cols ? `<cols>${cols}</cols>` : ''}<sheetData>${sheetData}</sheetData></worksheet>` },
  ];
  return zipStore(files);
}

/**
 * Two answer-key layouts used by the school templates.
 *  giasu:    rows = questions 1..N (continuous), columns = exam codes; true/false as "ĐSĐS"; sheet "GIASU.AI.VN", header "Câu\Mã đề".
 *  texcraft: rows = exam codes, columns = 1..n, then 1a,1b,1c,1d.. for each true/false question, then the short answers; D/S as ASCII; sheet "TEXCRAFT", header "Đề\câu".
 * versions: [{code, answers:[{kind, number, value, tf}]}] (answers in document order; every version has the same layout).
 */
export function answerRows(template, versions) {
  const BS = '\\';
  const cell = (a, ascii) => {
    if (a.kind === 'tf') return a.tf ? a.tf.map((x) => (x === 'Đ' && ascii ? 'D' : x)).join(ascii ? ',' : '') : '';
    return a.value ?? '';
  };
  const layout = versions[0].answers;
  if (template === 'giasu') {
    const header = [`Câu${BS}Mã đề`, ...versions.map((v) => v.code)];
    return [header, ...layout.map((_a, i) => [String(i + 1), ...versions.map((v) => (v.answers[i] ? cell(v.answers[i], false) : ''))])];
  }
  const header = [`Đề${BS}câu`], perVersion = versions.map(() => []);
  const mc = layout.map((a, i) => ({ a, i })).filter((x) => x.a.kind === 'mc' || x.a.kind === 'other');
  const tf = layout.map((a, i) => ({ a, i })).filter((x) => x.a.kind === 'tf');
  const short = layout.map((a, i) => ({ a, i })).filter((x) => x.a.kind === 'short');
  for (const { a, i } of mc) { header.push(String(a.number)); versions.forEach((v, k) => perVersion[k].push(v.answers[i]?.value ?? '')); }
  for (const { a, i } of tf) {
    'abcd'.split('').forEach((l, j) => {
      header.push(`${a.number}${l}`);
      versions.forEach((v, k) => { const t = v.answers[i]?.tf; perVersion[k].push(t ? (t[j] === 'Đ' ? 'D' : t[j] || '') : ''); });
    });
  }
  for (const { a, i } of short) { header.push(String(a.number)); versions.forEach((v, k) => perVersion[k].push(v.answers[i]?.value ?? '')); }
  return [header, ...versions.map((v, k) => [v.code, ...perVersion[k]])];
}

export function answerXlsx(template, versions) {
  const rows = answerRows(template, versions);
  const wide = template === 'giasu' ? [{ from: 1, to: 1, width: 12 }, { from: 2, to: 40, width: 10 }] : [{ from: 1, to: 1, width: 9 }, { from: 2, to: 73, width: 4.5 }, { from: 74, to: 200, width: 7 }];
  return buildXlsx(rows, { sheet: template === 'giasu' ? 'GIASU.AI.VN' : 'TEXCRAFT', widths: wide });
}

export const answerTsv = (template, versions) => answerRows(template, versions).map((r) => r.join('\t')).join('\n');
