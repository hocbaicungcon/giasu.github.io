import test from 'node:test';
import assert from 'node:assert/strict';
import { parseBody, analyze, answersOf } from '../word-addin/src/exam.js';
import { buildExamPptx, preparePptxSource } from '../word-addin/src/pptx.js';

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

// ---- layout: empty / long / picture stems
const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
const pkgWith = (body, extra = '') => `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
  <pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData>
    <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}</w:body></w:document>
  </pkg:xmlData></pkg:part>${extra}</pkg:package>`;
const imgParts = `<pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image1.png"/></Relationships></pkg:xmlData></pkg:part>
<pkg:part pkg:name="/word/media/image1.png" pkg:contentType="image/png" pkg:compression="store"><pkg:binaryData>${PNG_1PX}</pkg:binaryData></pkg:part>`;
const drawing = '<w:r><w:drawing><wp:inline><wp:extent cx="2400000" cy="1800000"/><a:graphic><a:graphicData><a:blip r:embed="rId9"/></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>';
const opts4 = (a = '1', b = '2', c = '3', d = '4') => `<w:p><w:r><w:rPr><w:u w:val="single"/></w:rPr><w:t>A.</w:t></w:r><w:r><w:t> ${a}</w:t></w:r><w:r><w:tab/><w:t>B. ${b}</w:t></w:r><w:r><w:tab/><w:t>C. ${c}</w:t></w:r><w:r><w:tab/><w:t>D. ${d}</w:t></w:r></w:p>`;
const slideText = (buf, n) => new TextDecoder('utf-8').decode(buf).split('ppt/slides/slide').filter((x) => x.startsWith(`${n}.xml`)).join('');
const build = (body, extra) => {
  const { model, analysis, answers, pkg } = preparePptxSource(pkgWith(body, extra));
  return buildExamPptx(model, analysis, answers, { title: 'T', pkg });
};

test('question and options written in one paragraph keep all their text', () => {
  const buf = build(`<w:p><w:r><w:t>Câu 1. Tính giá trị của biểu thức sau đây.</w:t></w:r><w:r><w:t xml:space="preserve"> </w:t></w:r><w:r><w:rPr><w:u w:val="single"/></w:rPr><w:t>A.</w:t></w:r><w:r><w:t xml:space="preserve"> 10 </w:t></w:r><w:r><w:t>B. 20 </w:t></w:r><w:r><w:t>C. 30 </w:t></w:r><w:r><w:t>D. 40</w:t></w:r></w:p>`);
  assert.ok(slideText(buf, 2).includes('Tính giá trị của biểu thức sau đây.'));
});

test('math in the stem becomes readable text and a picture is embedded', () => {
  const buf = build(`<w:p><w:r><w:t>Câu 1. Cho </w:t></w:r><m:oMath><m:f><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:oMath><w:r><w:t> và hình vẽ:</w:t></w:r></w:p><w:p>${drawing}</w:p>${opts4()}`, imgParts);
  const text = new TextDecoder('utf-8').decode(buf);
  assert.ok(text.includes('ppt/media/image1.png'));
  assert.ok(text.includes('<p:pic>'));
  assert.ok(text.includes('Extension="png"'));
  assert.ok(text.includes('1/2'));
  assert.equal(buf.missingPictures, 0);
});

test('very long stem shrinks, and a stem that cannot share the slide with the options is split in two', () => {
  const long = 'Một đoạn đề bài rất dài cần được hiển thị đầy đủ trên slide mà không bị che khuất. '.repeat(34);
  const buf = build(`<w:p><w:r><w:t>Câu 1. ${long}</w:t></w:r></w:p>${opts4('một phương án khá dài để thử', 'hai', 'ba', 'bốn')}<w:p><w:r><w:t>Câu 2. Ngắn gọn?</w:t></w:r></w:p>${opts4()}`);
  assert.equal(buf.splitCount, 1);
  const text = new TextDecoder('utf-8').decode(buf);
  assert.ok(text.includes('XEM CÁC PHƯƠNG ÁN'));
  // 2 questions: title + (stem, options, right, wrong) + (question, right, wrong) + final
  assert.ok(text.includes('ppt/slides/slide9.xml') && !text.includes('ppt/slides/slide10.xml'));
});
