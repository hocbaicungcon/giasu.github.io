// Pure JavaScript PowerPoint (.pptx) generator with interactive right/wrong feedback.
// Compatible with PowerPoint (Win/Mac/Web), Google Slides, Keynote, and CHITUP Slide.
import { zipStore } from './xlsx.js';
import { escapeXml } from './xml.js';

const SLIDE_W = 12192000; // 16:9 widescreen: 13.333 inches in EMUs
const SLIDE_H = 6858000;  // 7.5 inches in EMUs

const THEME_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
  <a:themeElements>
    <a:clrScheme name="Office">
      <a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>
      <a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="1F2937"/></a:dk2>
      <a:lt2><a:srgbClr val="F3F4F6"/></a:lt2>
      <a:accent1><a:srgbClr val="3B82F6"/></a:accent1>
      <a:accent2><a:srgbClr val="10B981"/></a:accent2>
      <a:accent3><a:srgbClr val="EF4444"/></a:accent3>
      <a:accent4><a:srgbClr val="F59E0B"/></a:accent4>
      <a:accent5><a:srgbClr val="6366F1"/></a:accent5>
      <a:accent6><a:srgbClr val="8B5CF6"/></a:accent6>
      <a:hlink><a:srgbClr val="2563EB"/></a:hlink>
      <a:folHlink><a:srgbClr val="7C3AED"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="Office">
      <a:majorFont><a:latin typeface="Arial"/><a:ea typeface=""/><a:cs typeface=""/></a:majorFont>
      <a:minorFont><a:latin typeface="Arial"/><a:ea typeface=""/><a:cs typeface=""/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Office">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="50000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000"/></a:gradFill></a:fillStyleLst>
      <a:lnStyleLst><a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>
      <a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>
      <a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
</a:theme>`;

const SLIDE_MASTER_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>
</p:sldMaster>`;

const SLIDE_LAYOUT_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" preserve="1">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sldLayout>`;

export function makeShape({
  id,
  name = '',
  x,
  y,
  cx,
  cy,
  fill = 'FFFFFF',
  line = null,
  lineWidth = 19050,
  round = true,
  roundAdj = 12000,
  text = '',
  textSize = 1800,
  textColor = '0F172A',
  bold = false,
  align = 'l',
  valign = 'ctr',
  linkTarget = null,
  linkTooltip = '',
  runs = null
}) {
  const geom = round ? `<a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val ${roundAdj}"/></a:avLst></a:prstGeom>` : '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>';
  const fillXml = fill ? `<a:solidFill><a:srgbClr val="${fill}"/></a:solidFill>` : '<a:noFill/>';
  const lineXml = line ? `<a:ln w="${lineWidth}"><a:solidFill><a:srgbClr val="${line}"/></a:solidFill></a:ln>` : '<a:ln><a:noFill/></a:ln>';
  const linkXml = linkTarget ? `<a:hlinkClick r:id="${linkTarget}" tooltip="${escapeXml(linkTooltip)}" action="ppaction://hlinksldjump"/>` : '';
  const alignXml = align === 'ctr' ? 'algn="ctr"' : align === 'r' ? 'algn="r"' : 'algn="l"';
  const vAnchor = valign === 't' ? 'anchor="t"' : valign === 'b' ? 'anchor="b"' : 'anchor="ctr"';

  let bodyContent = '';
  if (runs && runs.length) {
    bodyContent = runs.map((r) => `
      <a:p>
        <a:pPr ${alignXml} indent="0" marL="0"><a:buNone/></a:pPr>
        <a:r>
          <a:rPr lang="vi-VN" sz="${r.size || textSize}" b="${r.bold ? '1' : '0'}">
            <a:solidFill><a:srgbClr val="${r.color || textColor}"/></a:solidFill>
            <a:latin typeface="Arial"/>
          </a:rPr>
          <a:t>${escapeXml(r.text)}</a:t>
        </a:r>
      </a:p>`).join('');
  } else {
    const lines = String(text ?? '').split('\n');
    bodyContent = lines.map((l) => `
      <a:p>
        <a:pPr ${alignXml} indent="0" marL="0"><a:buNone/></a:pPr>
        <a:r>
          <a:rPr lang="vi-VN" sz="${textSize}" b="${bold ? '1' : '0'}">
            <a:solidFill><a:srgbClr val="${textColor}"/></a:solidFill>
            <a:latin typeface="Arial"/>
          </a:rPr>
          <a:t>${escapeXml(l)}</a:t>
        </a:r>
      </a:p>`).join('');
  }

  return `
    <p:sp>
      <p:nvSpPr>
        <p:cNvPr id="${id}" name="${escapeXml(name)}">${linkXml}</p:cNvPr>
        <p:cNvSpPr txBox="1"/>
        <p:nvPr/>
      </p:nvSpPr>
      <p:spPr>
        <a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm>
        ${geom}
        ${fillXml}
        ${lineXml}
      </p:spPr>
      <p:txBody>
        <a:bodyPr wrap="square" lIns="140000" tIns="140000" rIns="140000" bIns="140000" rtlCol="0" ${vAnchor}/>
        <a:lstStyle/>
        ${bodyContent}
      </p:txBody>
    </p:sp>`;
}

function makeSlideXml(bgHex, shapesXml, show = true) {
  const showAttr = show ? '' : ' show="0"';
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"${showAttr}>
  <p:cSld>
    <p:bg><p:bgPr><a:solidFill><a:srgbClr val="${bgHex}"/></a:solidFill></p:bgPr></p:bg>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
      ${shapesXml}
    </p:spTree>
  </p:cSld>
</p:sld>`;
}

function makeSlideRels(links = []) {
  const rels = [
    '<Relationship Id="rIdLayout" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>'
  ];
  for (const lnk of links) {
    rels.push(`<Relationship Id="${lnk.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="${lnk.target}"/>`);
  }
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${rels.join('\n  ')}
</Relationships>`;
}

function extractTextWithMath(blocks, oleMap = new Map()) {
  let full = '';
  for (const b of blocks) {
    if (b.kind !== 'p') continue;
    let pText = '';
    for (const c of b.children) {
      if (typeof c !== 'string') continue;
      // Check OLE object
      const objM = /<o:OLEObject\b[^>]*\br:id="([^"]+)"/.exec(c);
      if (objM && oleMap.has(objM[1])) {
        pText += ' ' + oleMap.get(objM[1]) + ' ';
        continue;
      }
      const wt = c.match(/<w:t\b[^>]*>([^<]*)<\/w:t>/g);
      if (wt) pText += wt.map((t) => t.replace(/<[^>]+>/g, '')).join('');
      const mt = c.match(/<m:t\b[^>]*>([^<]*)<\/m:t>/g);
      if (mt) pText += mt.map((t) => t.replace(/<[^>]+>/g, '')).join('');
    }
    const clean = pText.replace(/\s+/g, ' ').trim();
    if (clean) full += (full ? '\n' : '') + clean;
  }
  return full;
}

function cleanOptionText(content, oleMap = new Map()) {
  let s = '';
  for (const c of content) {
    if (typeof c !== 'string') continue;
    const objM = /<o:OLEObject\b[^>]*\br:id="([^"]+)"/.exec(c);
    if (objM && oleMap.has(objM[1])) {
      s += ' ' + oleMap.get(objM[1]) + ' ';
      continue;
    }
    const wt = c.match(/<w:t\b[^>]*>([^<]*)<\/w:t>/g);
    if (wt) s += wt.map((t) => t.replace(/<[^>]+>/g, '')).join('');
    const mt = c.match(/<m:t\b[^>]*>([^<]*)<\/m:t>/g);
    if (mt) s += mt.map((t) => t.replace(/<[^>]+>/g, '')).join('');
  }
  return s.replace(/\s+/g, ' ').trim().replace(/^[A-Za-z]\s*[.:)]\s*/i, '');
}

/**
 * Build an interactive PowerPoint (.pptx) file from analyzed exam questions.
 * Each question has:
 *  - Slide 1: Question with clickable options (A, B, C, D)
 *  - Slide 2: Correct answer celebration & next button
 *  - Slide 3: Hidden Incorrect feedback slide with retry button
 */
export function buildExamPptx(model, analysis, answers, opts = {}) {
  const oleMap = new Map();
  if (opts.scannedEquations) {
    for (const eq of opts.scannedEquations) {
      const id = eq.oleId || eq.obj?.oleId;
      if (id && eq.latex) oleMap.set(id, eq.latex);
    }
  }

  // Filter questions to present (defaults to multiple choice, or all questions)
  const items = [];
  for (const part of analysis.parts) {
    for (const q of part.questions) {
      const qAns = answers.find((x) => x.part === part.title && x.number === q.number);
      const stemBlocks = model.blocks.slice(q.start, q.stemEnd);
      let stemText = extractTextWithMath(stemBlocks, oleMap);
      // Remove leading "Câu N." from stemText if present
      stemText = stemText.replace(/^\s*(?:Câu|Bài)\s*\d+\s*[:.]\s*/i, '');

      if (part.kind === 'tf' && q.statements && q.statements.length) {
        const stmtTexts = q.statements.map((st) => {
          const raw = extractTextWithMath([model.blocks[st.block]], oleMap);
          return raw;
        }).filter(Boolean);
        if (stmtTexts.length) {
          stemText += '\n' + stmtTexts.join('\n');
        }
      }

      let options = [];
      if (q.options && q.options.length) {
        options = q.options.map((o) => ({
          letter: o.letter,
          text: cleanOptionText(o.content, oleMap)
        }));
      }

      items.push({
        number: q.number,
        partTitle: part.title,
        kind: part.kind,
        stem: stemText,
        options,
        correct: qAns?.value || null
      });
    }
  }

  if (!items.length) throw new Error('Không tìm thấy câu hỏi nào trong tài liệu.');

  const slides = []; // { name, relsName, xml, rels }
  const presentationRels = [
    '<Relationship Id="rIdMaster" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>',
    '<Relationship Id="rIdTheme" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>'
  ];
  const sldIdList = [];

  let slideIndex = 1;
  const registerSlide = (xml, links = [], show = true) => {
    const sId = slideIndex++;
    const sName = `slide${sId}.xml`;
    const relsName = `slide${sId}.xml.rels`;
    slides.push({
      fileName: `ppt/slides/${sName}`,
      relsFileName: `ppt/slides/_rels/${relsName}`,
      xml,
      rels: makeSlideRels(links),
      sId
    });
    presentationRels.push(`<Relationship Id="rIdSld${sId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/${sName}"/>`);
    sldIdList.push(`<p:sldId id="${255 + sId}" r:id="rIdSld${sId}"/>`);
    return sId;
  };

  // 1. Title Slide (Slide 1)
  const titleText = opts.title || 'BÀI TẬP TRẮC NGHIỆM';
  const subtitleText = `Đề thi gồm ${items.length} câu hỏi • Tương tác Đúng/Sai trực tiếp`;
  const titleShapes = `
    ${makeShape({ id: 2, name: 'Title', x: 1200000, y: 1600000, cx: 9792000, cy: 1600000, fill: null, text: titleText, textSize: 3600, textColor: 'FFFFFF', bold: true, align: 'ctr' })}
    ${makeShape({ id: 3, name: 'Sub', x: 1200000, y: 3100000, cx: 9792000, cy: 800000, fill: null, text: subtitleText, textSize: 2000, textColor: '94A3B8', bold: false, align: 'ctr' })}
    ${makeShape({ id: 4, name: 'StartBtn', x: 4396000, y: 4300000, cx: 3400000, cy: 900000, fill: '3B82F6', roundAdj: 25000, text: 'BẮT ĐẦU  ➡', textSize: 2200, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdNext', linkTooltip: 'Bắt đầu' })}
  `;
  registerSlide(makeSlideXml('0F172A', titleShapes, true), [{ id: 'rIdNext', target: 'slide2.xml' }]);

  // Calculate slide index mapping:
  // Each question i (0-based) occupies 3 slides:
  // Question Slide: index = 2 + 3 * i
  // Correct Slide:  index = 3 + 3 * i
  // Incorrect Slide:index = 4 + 3 * i
  const totalQuestions = items.length;
  const finalSlideId = 2 + 3 * totalQuestions;

  items.forEach((item, qIdx) => {
    const qSlideId = 2 + 3 * qIdx;
    const rightSlideId = qSlideId + 1;
    const wrongSlideId = qSlideId + 2;
    const nextQSlideId = qIdx === totalQuestions - 1 ? finalSlideId : qSlideId + 3;

    // --- QUESTION SLIDE ---
    const qShapes = [];
    qShapes.push(makeShape({ id: 10, name: 'Badge', x: 700000, y: 350000, cx: 1600000, cy: 450000, fill: '4F46E5', roundAdj: 10000, text: `CÂU ${item.number}`, textSize: 1600, textColor: 'FFFFFF', bold: true, align: 'ctr' }));
    qShapes.push(makeShape({ id: 11, name: 'Part', x: 2450000, y: 350000, cx: 8500000, cy: 450000, fill: null, text: item.partTitle || 'TRẮC NGHIỆM', textSize: 1400, textColor: '64748B', bold: true, align: 'l' }));
    const hasOptions = item.options && item.options.length > 0;
    const stemHeight = hasOptions ? 2200000 : 3700000;
    qShapes.push(makeShape({ id: 12, name: 'Stem', x: 700000, y: 950000, cx: 10792000, cy: stemHeight, fill: 'FFFFFF', line: 'CBD5E1', lineWidth: 19050, roundAdj: 10000, text: item.stem, textSize: 2000, textColor: '0F172A', bold: true, align: 'l', valign: 't' }));

    const qLinks = [
      { id: 'rIdRight', target: `slide${rightSlideId}.xml` },
      { id: 'rIdWrong', target: `slide${wrongSlideId}.xml` }
    ];

    if (hasOptions) {
      // 2x2 grid positions
      const positions = [
        { x: 700000, y: 3350000, cx: 5250000, cy: 1350000 },
        { x: 6242000, y: 3350000, cx: 5250000, cy: 1350000 },
        { x: 700000, y: 4900000, cx: 5250000, cy: 1350000 },
        { x: 6242000, y: 4900000, cx: 5250000, cy: 1350000 }
      ];

      item.options.forEach((opt, optIdx) => {
        const pos = positions[optIdx] || { x: 700000, y: 3350000 + optIdx * 800000, cx: 10792000, cy: 750000 };
        const isRight = item.correct ? opt.letter.toUpperCase() === item.correct.toUpperCase() : optIdx === 0;
        const targetId = isRight ? 'rIdRight' : 'rIdWrong';
        const optCardText = `${opt.letter}. ${opt.text}`;
        qShapes.push(makeShape({
          id: 20 + optIdx,
          name: `Opt${opt.letter}`,
          x: pos.x,
          y: pos.y,
          cx: pos.cx,
          cy: pos.cy,
          fill: 'FFFFFF',
          line: 'CBD5E1',
          lineWidth: 19050,
          roundAdj: 12000,
          text: optCardText,
          textSize: 1800,
          textColor: '1E293B',
          bold: false,
          align: 'l',
          linkTarget: targetId,
          linkTooltip: `Chọn ${opt.letter}`
        }));
      });

      qShapes.push(makeShape({
        id: 35,
        name: 'ShowAnswerSmall',
        x: 9200000,
        y: 6350000,
        cx: 2292000,
        cy: 400000,
        fill: null,
        text: 'Xem đáp án 💡',
        textSize: 1300,
        textColor: '6366F1',
        bold: true,
        align: 'r',
        linkTarget: 'rIdRight',
        linkTooltip: 'Xem đáp án'
      }));
    } else {
      // Single button for short answer or non-MC question
      qShapes.push(makeShape({
        id: 20,
        name: 'ShowAnswerBtn',
        x: 3896000,
        y: 4950000,
        cx: 4400000,
        cy: 900000,
        fill: '3B82F6',
        roundAdj: 20000,
        text: 'XEM ĐÁP ÁN & LỜI GIẢI 💡',
        textSize: 1800,
        textColor: 'FFFFFF',
        bold: true,
        align: 'ctr',
        linkTarget: 'rIdRight',
        linkTooltip: 'Xem đáp án'
      }));
    }

    registerSlide(makeSlideXml('F8FAFC', qShapes.join('\n'), true), qLinks);

    // --- CORRECT FEEDBACK SLIDE ---
    const correctLetter = item.correct || (item.options && item.options[0]?.letter) || '';
    const correctOpt = item.options ? item.options.find((o) => o.letter.toUpperCase() === correctLetter.toUpperCase()) : null;
    const correctDetail = correctOpt ? `Phương án đúng là ${correctOpt.letter}: ${correctOpt.text}` : (item.correct ? `Đáp án đúng: ${item.correct}` : 'Đã ghi nhận câu trả lời!');
    const isLastQ = qIdx === totalQuestions - 1;
    const nextBtnText = isLastQ ? 'HOÀN THÀNH BÀI THI 🏆' : 'CÂU TIẾP THEO ➡';

    const rightShapes = `
      ${makeShape({ id: 40, name: 'Card', x: 1800000, y: 1000000, cx: 8592000, cy: 4800000, fill: 'FFFFFF', line: '10B981', lineWidth: 28000, roundAdj: 15000, text: '' })}
      ${makeShape({ id: 41, name: 'Title', x: 2200000, y: 1400000, cx: 7792000, cy: 800000, fill: null, text: '🎉  CHÍNH XÁC!', textSize: 3200, textColor: '059669', bold: true, align: 'ctr' })}
      ${makeShape({ id: 42, name: 'Sub', x: 2200000, y: 2200000, cx: 7792000, cy: 500000, fill: null, text: `Chúc mừng bạn đã trả lời đúng câu hỏi số ${item.number}!`, textSize: 1800, textColor: '475569', bold: false, align: 'ctr' })}
      ${makeShape({ id: 43, name: 'DetailBox', x: 2400000, y: 2800000, cx: 7392000, cy: 1300000, fill: 'F0FDF4', line: '86EFAC', lineWidth: 15000, roundAdj: 10000, text: correctDetail, textSize: 1700, textColor: '065F46', bold: true, align: 'ctr' })}
      ${makeShape({ id: 44, name: 'NextBtn', x: 3896000, y: 4300000, cx: 4400000, cy: 850000, fill: '10B981', roundAdj: 25000, text: nextBtnText, textSize: 2000, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdNext', linkTooltip: nextBtnText })}
      ${makeShape({ id: 45, name: 'BackBtn', x: 4596000, y: 5250000, cx: 3000000, cy: 400000, fill: null, text: '↩  Xem lại câu hỏi', textSize: 1300, textColor: '64748B', bold: false, align: 'ctr', linkTarget: 'rIdQ', linkTooltip: 'Xem lại câu hỏi' })}
    `;
    registerSlide(makeSlideXml('F0FDF4', rightShapes, true), [
      { id: 'rIdNext', target: `slide${nextQSlideId}.xml` },
      { id: 'rIdQ', target: `slide${qSlideId}.xml` }
    ]);

    // --- INCORRECT FEEDBACK SLIDE (show="0", accessed via jump) ---
    const wrongShapes = `
      ${makeShape({ id: 50, name: 'Card', x: 1800000, y: 1200000, cx: 8592000, cy: 4400000, fill: 'FFFFFF', line: 'EF4444', lineWidth: 28000, roundAdj: 15000, text: '' })}
      ${makeShape({ id: 51, name: 'Title', x: 2200000, y: 1700000, cx: 7792000, cy: 800000, fill: null, text: '❌  CHƯA CHÍNH XÁC!', textSize: 3200, textColor: 'DC2626', bold: true, align: 'ctr' })}
      ${makeShape({ id: 52, name: 'Sub', x: 2200000, y: 2600000, cx: 7792000, cy: 800000, fill: null, text: 'Rất tiếc! Phương án bạn vừa chọn chưa đúng.\nĐừng nản lòng, hãy đọc kỹ lại đề bài và thử lại nhé!', textSize: 1800, textColor: '475569', bold: false, align: 'ctr' })}
      ${makeShape({ id: 53, name: 'RetryBtn', x: 3896000, y: 3900000, cx: 4400000, cy: 900000, fill: 'EF4444', roundAdj: 25000, text: '🔄  QUAY LẠI THỬ LẠI', textSize: 2000, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdQ', linkTooltip: 'Thử lại' })}
    `;
    registerSlide(makeSlideXml('FEF2F2', wrongShapes, false), [
      { id: 'rIdQ', target: `slide${qSlideId}.xml` }
    ]);
  });

  // Final Slide (Slide finalSlideId)
  const finalShapes = `
    ${makeShape({ id: 60, name: 'Card', x: 1800000, y: 1200000, cx: 8592000, cy: 4400000, fill: '1E293B', line: '38BDF8', lineWidth: 25000, roundAdj: 15000, text: '' })}
    ${makeShape({ id: 61, name: 'Title', x: 2200000, y: 1800000, cx: 7792000, cy: 900000, fill: null, text: '🏆  HOÀN THÀNH BÀI THI!', textSize: 3400, textColor: '38BDF8', bold: true, align: 'ctr' })}
    ${makeShape({ id: 62, name: 'Sub', x: 2200000, y: 2800000, cx: 7792000, cy: 700000, fill: null, text: `Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ ${items.length} câu hỏi!`, textSize: 2000, textColor: 'E2E8F0', bold: false, align: 'ctr' })}
    ${makeShape({ id: 63, name: 'RestartBtn', x: 4196000, y: 4100000, cx: 3800000, cy: 850000, fill: '3B82F6', roundAdj: 25000, text: '↺  LÀM LẠI TỪ ĐẦU', textSize: 2000, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdFirst', linkTooltip: 'Làm lại' })}
  `;
  registerSlide(makeSlideXml('0F172A', finalShapes, true), [
    { id: 'rIdFirst', target: 'slide1.xml' }
  ]);

  // Build full package files list
  const contentTypesOverrides = slides.map((s) => `  <Override PartName="/${s.fileName}" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n');

  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
${contentTypesOverrides}
</Types>`;

  const presentationXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rIdMaster"/></p:sldMasterIdLst>
  <p:sldIdLst>
    ${sldIdList.join('\n    ')}
  </p:sldIdLst>
  <p:sldSz cx="${SLIDE_W}" cy="${SLIDE_H}" type="screen16x9"/>
  <p:notesSz cx="6858000" cy="9144000"/>
</p:presentation>`;

  const presentationRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${presentationRels.join('\n  ')}
</Relationships>`;

  const files = [
    { name: '[Content_Types].xml', data: contentTypesXml },
    { name: '_rels/.rels', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>` },
    { name: 'ppt/_rels/presentation.xml.rels', data: presentationRelsXml },
    { name: 'ppt/presentation.xml', data: presentationXml },
    { name: 'ppt/theme/theme1.xml', data: THEME_XML },
    { name: 'ppt/slideMasters/slideMaster1.xml', data: SLIDE_MASTER_XML },
    { name: 'ppt/slideMasters/_rels/slideMaster1.xml.rels', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>` },
    { name: 'ppt/slideLayouts/slideLayout1.xml', data: SLIDE_LAYOUT_XML },
    { name: 'ppt/slideLayouts/_rels/slideLayout1.xml.rels', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>` }
  ];

  for (const s of slides) {
    files.push({ name: s.fileName, data: s.xml });
    files.push({ name: s.relsFileName, data: s.rels });
  }

  return zipStore(files);
}
