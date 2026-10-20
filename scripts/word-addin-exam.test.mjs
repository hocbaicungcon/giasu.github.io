import test from 'node:test';
import assert from 'node:assert/strict';
import { normalize, shuffleVersion } from '../word-addin/src/exam.js';

test('Part III short answer exam renumbers correctly across single and multi-run paragraphs', () => {
  const bodyContent = `
    <w:p><w:r><w:t>PHẦN III. Câu trắc nghiệm trả lời ngắn.</w:t></w:r></w:p>
    <w:p><w:r><w:t>Thí sinh trả lời từ câu 1 đến câu 6.</w:t></w:r></w:p>
    <w:p><w:r><w:t>Câu </w:t></w:r><w:r><w:t>17.</w:t></w:r><w:r><w:t> Giá trị của x là bao nhiêu?</w:t></w:r></w:p>
    <w:p><w:r><w:t>Đáp án: 15</w:t></w:r></w:p>
    <w:p><w:r><w:t>Câu 18. </w:t></w:r><w:r><w:t>Tính diện tích hình tròn.</w:t></w:r></w:p>
    <w:p><w:r><w:t>Đáp án: 25</w:t></w:r></w:p>
  `;

  const pkg = `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
    <pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">
      <pkg:xmlData>
        <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
          <w:body>${bodyContent}</w:body>
        </w:document>
      </pkg:xmlData>
    </pkg:part>
  </pkg:package>`;

  const norm = normalize(pkg, { renumber: 'part' });
  assert.equal(norm.report.questions, 2);
  assert.equal(norm.report.renumbered, 2);
  assert.match(norm.pkg, /Câu 1\./);
  assert.match(norm.pkg, /Câu 2\./);
  assert.doesNotMatch(norm.pkg, /Câu 17\./);
  assert.doesNotMatch(norm.pkg, /Câu 18\./);

  const shuf = shuffleVersion(pkg, { seed: 1234, renumber: 'part', shuffleQuestions: true });
  assert.equal(shuf.report.questions, 2);
  assert.equal(shuf.report.notes.length, 0);
  assert.match(shuf.pkg, /Câu 1\./);
  assert.match(shuf.pkg, /Câu 2\./);
  assert.doesNotMatch(shuf.pkg, /Câu 17\./);
  assert.doesNotMatch(shuf.pkg, /Câu 18\./);
});

test('normalize sets font, text size and equation size on question paragraphs', () => {
  const body = `<w:p><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:b/><w:sz w:val="20"/></w:rPr><w:t>Câu 1. Tính </w:t></w:r><m:oMath><m:r><m:rPr><m:sty m:val="p"/></m:rPr><w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr><m:t>x</m:t></m:r><m:f><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:oMath></w:p><w:p><w:r><w:t>A. 1</w:t></w:r><w:r><w:tab/><w:t>B. 2</w:t></w:r><w:r><w:tab/><w:t>C. 3</w:t></w:r><w:r><w:tab/><w:t>D. 4</w:t></w:r></w:p>`;
  const pkg = `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/word/document.xml" pkg:contentType="x"><pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><w:body>${body}</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
  const r = normalize(pkg, { renumber: false, font: 'Times New Roman', fontSize: 13, mathSize: 14 });
  assert.equal(r.report.retyped, 2);
  assert.ok(!/Arial/.test(r.pkg));
  assert.ok(/<w:sz w:val="26"\/>/.test(r.pkg));                       // text 13 pt
  assert.equal((r.pkg.match(/<w:sz w:val="28"\/>/g) || []).length, 3);   // x, 1, 2 at 14 pt
  assert.ok(/<w:rFonts[^>]*Cambria Math/.test(r.pkg));                 // the math font itself is kept
  const same = normalize(pkg, { renumber: false, font: '', fontSize: 0, mathSize: 0 });
  assert.ok(/Arial/.test(same.pkg) && same.report.retyped === 0);
});
