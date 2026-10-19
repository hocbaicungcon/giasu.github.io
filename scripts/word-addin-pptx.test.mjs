import test from 'node:test';
import assert from 'node:assert/strict';
import { parseBody, analyze, answersOf } from '../word-addin/src/exam.js';
import { buildExamPptx } from '../word-addin/src/pptx.js';

test('buildExamPptx generates interactive PowerPoint deck with Right/Wrong feedback', () => {
  const bodyContent = `
    <w:p><w:r><w:t>PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.</w:t></w:r></w:p>
    <w:p><w:r><w:t>Câu 1. </w:t></w:r><w:r><w:t>Hàm số y = x^2 có đạo hàm là:</w:t></w:r></w:p>
    <w:p>
      <w:r><w:rPr><w:u w:val="single"/></w:rPr><w:t>A.</w:t></w:r><w:r><w:t> 2x</w:t></w:r>
      <w:r><w:t>B. x</w:t></w:r>
      <w:r><w:t>C. x^2</w:t></w:r>
      <w:r><w:t>D. 2</w:t></w:r>
    </w:p>
    <w:p><w:r><w:t>PHẦN II. Câu trắc nghiệm đúng sai.</w:t></w:r></w:p>
    <w:p><w:r><w:t>Câu 2. </w:t></w:r><w:r><w:t>Cho hình chóp S.ABC. Xét tính đúng sai của các mệnh đề:</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:u w:val="single"/></w:rPr><w:t>a) </w:t></w:r><w:r><w:t>Mệnh đề A đúng.</w:t></w:r></w:p>
    <w:p><w:r><w:t>b) </w:t></w:r><w:r><w:t>Mệnh đề B sai.</w:t></w:r></w:p>
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

  const model = parseBody(pkg);
  const a = analyze(model);
  const ans = answersOf(model, a);

  assert.equal(a.parts.length, 2);
  assert.equal(a.parts[0].questions.length, 1);
  assert.equal(ans[0].value, 'A');

  const pptxBuffer = buildExamPptx(model, a, ans, {
    title: 'ĐỀ THI KHẢO SÁT CHẤT LƯỢNG'
  });

  // Verify Uint8Array returned
  assert.ok(pptxBuffer instanceof Uint8Array);
  assert.ok(pptxBuffer.length > 5000);

  // PK zip magic header 0x50 0x4B 0x03 0x04
  assert.equal(pptxBuffer[0], 0x50);
  assert.equal(pptxBuffer[1], 0x4B);
  assert.equal(pptxBuffer[2], 0x03);
  assert.equal(pptxBuffer[3], 0x04);

  // Convert buffer to string to check for OpenXML presentation structures
  const text = new TextDecoder('utf-8').decode(pptxBuffer);

  // Verify core PPTX files exist in zip
  assert.ok(text.includes('ppt/presentation.xml'));
  assert.ok(text.includes('[Content_Types].xml'));
  assert.ok(text.includes('ppt/slides/slide1.xml')); // Title slide
  assert.ok(text.includes('ppt/slides/slide2.xml')); // Question 1
  assert.ok(text.includes('ppt/slides/slide3.xml')); // Correct feedback
  assert.ok(text.includes('ppt/slides/slide4.xml')); // Incorrect feedback

  // Verify interactive action jumps
  assert.ok(text.includes('ppaction://hlinksldjump'));

  // Verify hidden slide attribute on incorrect retry slide
  assert.ok(text.includes('show="0"'));

  // Verify title
  assert.ok(text.includes('ĐỀ THI KHẢO SÁT CHẤT LƯỢNG'));

  // Verify question stem and options
  assert.ok(text.includes('Hàm số y = x^2 có đạo hàm là:'));
  assert.ok(text.includes('2x'));
});
