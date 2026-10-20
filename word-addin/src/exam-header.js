// Title block, "HẾT" line and footer of a Vietnamese exam paper (layout of the school's "Form đề kiểm tra" template):
//   left: Sở / Trường / ĐỀ CHÍNH THỨC / (Đề kiểm tra có N trang)      right: tên kỳ kiểm tra / năm học / Môn; Lớp / thời gian
//   then: Họ, tên học sinh / Số báo danh                               and a box "Mã đề: NNNN"
//   end of paper: ----HẾT----       footer: Trang X/Y-Mã đề: NNNN
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const DEFAULT_FORM = {
  soGd: 'SỞ GDĐT TỈNH NINH BÌNH',
  truong: 'TRƯỜNG THPT XUÂN TRƯỜNG B',
  chinhThuc: 'ĐỀ CHÍNH THỨC',
  kyThi: 'ĐỀ KIỂM TRA CHẤT LƯỢNG GIỮA HỌC KỲ I',
  namHoc: 'NĂM HỌC 2026-2027',
  mon: '……..',
  lop: '.....',
  thoiGian: '…..',
};

const FONT = 'Times New Roman';
const SZ = 26;   // 13 pt
const rpr = (o = {}) => `<w:rPr><w:rFonts w:ascii="${o.font || FONT}" w:hAnsi="${o.font || FONT}" w:cs="${o.font || FONT}"/>${o.b ? '<w:b/>' : ''}${o.i ? '<w:i/>' : ''}${o.color ? `<w:color w:val="${o.color}"/>` : ''}<w:sz w:val="${o.sz || SZ}"/><w:szCs w:val="${o.sz || SZ}"/></w:rPr>`;
const run = (t, o) => (t === '' ? '' : `<w:r>${rpr(o)}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>`);
const field = (instr, shown, o) => `<w:fldSimple w:instr=" ${instr} "><w:r>${rpr(o)}<w:t>${shown}</w:t></w:r></w:fldSimple>`;
const bdr = (side, sz = 6) => `<w:${side} w:val="single" w:sz="${sz}" w:space="1" w:color="000000"/>`;
const p = (inner, { jc, before = 0, after = 0, ind, border } = {}) => `<w:p><w:pPr>${border ? `<w:pBdr>${border}</w:pBdr>` : ''}<w:spacing w:before="${before}" w:after="${after}" w:line="276" w:lineRule="auto"/>${ind ? `<w:ind w:left="${ind}" w:right="${ind}"/>` : ''}${jc ? `<w:jc w:val="${jc}"/>` : ''}</w:pPr>${inner}</w:p>`;
const NOB = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
const cell = (pct, inner, { box = false, valign = 'top' } = {}) => `<w:tc><w:tcPr><w:tcW w:w="${pct * 50}" w:type="pct"/>${box ? `<w:tcBorders>${['top', 'left', 'bottom', 'right'].map((k) => bdr(k, 8).replace(' w:space="1"', ' w:space="0"')).join('')}</w:tcBorders>` : ''}<w:vAlign w:val="${valign}"/></w:tcPr>${inner}</w:tc>`;
const GRID_W = 10200;   // a typical A4 text width in twips: only the proportions of the columns matter (the table is 100 % wide)
const table = (cells, widths, jc) => `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${jc ? `<w:jc w:val="${jc}"/>` : ''}${NOB}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${Math.round(GRID_W * w / 100)}"/>`).join('')}</w:tblGrid><w:tr><w:trPr><w:cantSplit/></w:trPr>${cells.join('')}</w:tr></w:tbl>`;
const dots = (s, fallback) => (String(s ?? '').trim() ? String(s).trim() : fallback);

/** Body XML (a table, a table and an empty line) for the top of the paper. form: see DEFAULT_FORM. code: the exam code ('' to leave it blank). */
export function examHeaderXml(form = {}, code = '') {
  const f = { ...DEFAULT_FORM, ...form };
  const left = [
    p(run(f.soGd), { jc: 'center' }),
    p(run(f.truong, { b: true, sz: 24 }), { jc: 'center' }),
    p(run(f.chinhThuc), { jc: 'center', ind: 700, border: bdr('top') }),
    p(run('(Đề kiểm tra có ', { i: true }) + field('NUMPAGES', '1', { i: true }) + run(' trang)', { i: true }), { jc: 'center' }),
  ].join('');
  const right = [
    p(run(f.kyThi, { b: true }), { jc: 'center' }),
    p(run(f.namHoc, { b: true }), { jc: 'center' }),
    p(run('Môn ' + dots(f.mon, '……..'), { b: true }) + run('; Lớp: ' + dots(f.lop, '.....'), { b: true, color: 'FF0000' }), { jc: 'center' }),
    p(run('Thời gian làm bài: ' + dots(f.thoiGian, '…..') + ' phút', { i: true }), { jc: 'center', ind: 500, border: bdr('bottom') }),
  ].join('');
  const top = table([cell(47, left), cell(53, right)], [47, 53]);
  const lines = [
    p(run('Họ, tên học sinh:', { b: true }) + run('…………………………………….'), { before: 120 }),
    p(run('Số báo danh:', { b: true }) + run('…………………………………………')),
  ].join('');
  const box = p(run('Mã đề: ', { b: true, sz: 24 }) + run(String(code || '……'), { b: true, sz: 24, color: 'FF0000' }), { jc: 'center' });
  const second = table([cell(80, lines), cell(20, box, { box: true, valign: 'center' })], [80, 20]);
  return top + second + p('', { after: 120 });
}

/** The closing line of the paper. */
export function examEndXml() {
  return p(run('----------------', { b: true }) + run('HẾT', { b: true, sz: 26 }) + run('---------------', { b: true }), { jc: 'center', before: 200 });
}

/** Footer paragraph: "Trang X/Y-Mã đề: NNNN", right aligned. */
export function examFooterXml(code = '') {
  const o = { font: 'Cambria', sz: 24 };
  return p(run('Trang ', o) + field('PAGE', '1', { font: 'Calibri', sz: 24 }) + run('/', o) + field('NUMPAGES', '1', { font: 'Calibri', sz: 24 }) + run('-Mã đề: ' + (code || '……….'), o), { jc: 'right' });
}

const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
/** A flat-OPC package holding the given body XML (for insertOoxml into a footer / at the cursor). */
export function simplePackage(bodyXml) {
  return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS}><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
}
