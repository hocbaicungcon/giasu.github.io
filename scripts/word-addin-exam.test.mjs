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
