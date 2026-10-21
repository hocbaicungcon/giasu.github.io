// A figure as a list of primitives, drawn two ways: SVG (preview / PNG) and DrawingML shapes (editable in Word).
// Primitives (px): {t:'line', x1,y1,x2,y2, w, arrow, dash} {t:'rect', x,y,w,h, sw, fill} {t:'poly', pts:[[x,y]..], closed, sw, fill, dash}
// {t:'ellipse', cx,cy,rx,ry, sw, fill, dash} {t:'label', latex, x,y, anchor:'c'|'l'|'r', size} {t:'text', s, x,y, anchor, size, italic} {t:'ptext', s, x,y, size, bold, color, font} (plain text, centred on x,y: digits, emoji)
import { renderLatex } from '../mathrender.js';
import { latexToOmml } from '../latex2omml.js';
import { n2, FONT, esc } from './svgkit.js';

export const labelBox = (latex, size = 16) => { const r = renderLatex(latex, { fontSize: size, pad: 0 }); return { w: r.width, h: r.height, base: r.baseline, svg: r.svg }; };

function labelSvg(p) {
  const size = p.size || 16;
  const b = labelBox(p.latex, size);
  const x = p.anchor === 'l' ? p.x : p.anchor === 'r' ? p.x - b.w : p.x - b.w / 2;
  const y = (p.valign === 'b' ? p.y - b.h : p.valign === 't' ? p.y : p.y - b.h / 2);
  const inner = b.svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const halo = p.halo ? `<rect x="${n2(x - 2)}" y="${n2(y - 1)}" width="${n2(b.w + 4)}" height="${n2(b.h + 2)}" rx="2" fill="#fff" fill-opacity="0.92"/>` : '';
  return `${halo}<g transform="translate(${n2(x)} ${n2(y)})" fill="#000">${inner}</g>`;
}

export function sceneToSvg(scene, { bg = '#fff' } = {}) {
  let body = '';
  for (const p of scene.items) {
    const sw = (p.t === 'line' ? p.w : p.sw) || 1.4, dash = p.dash ? ` stroke-dasharray="${p.dash === 'dot' ? `0.1 ${n2(sw * 2.4)}` : p.dash}"` : '';
    if (p.t === 'line') {
      body += `<line x1="${n2(p.x1)}" y1="${n2(p.y1)}" x2="${n2(p.x2)}" y2="${n2(p.y2)}" stroke="${p.color || '#000'}" stroke-width="${sw}" stroke-linecap="round"${dash}/>`;
      if (p.arrow) { const a = Math.atan2(p.y2 - p.y1, p.x2 - p.x1), s = 8; body += `<path d="M${n2(p.x2)} ${n2(p.y2)} L${n2(p.x2 - s * Math.cos(a - 0.4))} ${n2(p.y2 - s * Math.sin(a - 0.4))} L${n2(p.x2 - s * Math.cos(a + 0.4))} ${n2(p.y2 - s * Math.sin(a + 0.4))}Z" fill="${p.color || '#000'}"/>`; }
    } else if (p.t === 'rect') body += `<rect x="${n2(p.x)}" y="${n2(p.y)}" width="${n2(p.w)}" height="${n2(p.h)}" fill="${p.fill || 'none'}" stroke="${p.color || '#000'}" stroke-width="${sw}" stroke-linecap="round"${dash}/>`;
    else if (p.t === 'poly') body += `<path d="M${p.pts.map((q) => `${n2(q[0])} ${n2(q[1])}`).join('L')}${p.closed ? 'Z' : ''}" fill="${p.fill || 'none'}" stroke="${p.color || '#000'}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"${dash}${p.opacity ? ` fill-opacity="${p.opacity}"` : ''}/>`;
    else if (p.t === 'ellipse') body += `<ellipse cx="${n2(p.cx)}" cy="${n2(p.cy)}" rx="${n2(p.rx)}" ry="${n2(p.ry)}" fill="${p.fill || 'none'}" stroke="${p.color || '#000'}" stroke-width="${sw}" stroke-linecap="round"${dash}/>`;
    else if (p.t === 'dot') body += `<circle cx="${n2(p.x)}" cy="${n2(p.y)}" r="${p.r || 2.6}" fill="${p.color || '#000'}"/>`;
    else if (p.t === 'label') body += labelSvg(p);
    else if (p.t === 'ptext') body += `<text x="${n2(p.x)}" y="${n2(p.y)}" font-size="${n2(p.size || 16)}" text-anchor="middle" dominant-baseline="central" font-family="${p.font || FONT}"${p.bold ? ' font-weight="700"' : ''} fill="${p.color || '#000'}">${esc(p.s)}</text>`;
    else if (p.t === 'text') body += `<text x="${n2(p.x)}" y="${n2(p.y)}" font-size="${p.size || 15}" text-anchor="${p.anchor === 'l' ? 'start' : p.anchor === 'r' ? 'end' : 'middle'}" font-family="${FONT}"${p.italic ? ' font-style="italic"' : ''}>${esc(p.s)}</text>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${n2(scene.width)}" height="${n2(scene.height)}" viewBox="0 0 ${n2(scene.width)} ${n2(scene.height)}"><rect width="100%" height="100%" fill="${bg}"/>${body}</svg>`;
}

// ---------------------------------------------------------------- DrawingML (Word shapes)
const EMU = 9525;   // per px
const e = (v) => Math.round(v * EMU);
const clr = (c) => (c || '#000000').replace('#', '').padEnd(6, '0').toUpperCase().slice(0, 6);
const ln = (w, color, dash, arrow) => `<a:ln w="${Math.round((w || 1.4) * EMU)}" cap="rnd"><a:solidFill><a:srgbClr val="${clr(color)}"/></a:solidFill>${dash ? `<a:prstDash val="${dash === 'dot' ? 'sysDot' : 'dash'}"/>` : ''}<a:round/>${arrow ? '<a:tailEnd type="triangle" w="med" len="med"/>' : ''}</a:ln>`;
let shapeId = 1;

function xfrm(x, y, w, h, extra = '') { return `<a:xfrm${extra}><a:off x="${e(x)}" y="${e(y)}"/><a:ext cx="${Math.max(0, e(w))}" cy="${Math.max(0, e(h))}"/></a:xfrm>`; }
const shape = (name, spPr, extra = '') => `<wps:wsp><wps:cNvPr id="${++shapeId}" name="${esc(name)}"/><wps:cNvSpPr/><wps:spPr>${spPr}</wps:spPr><wps:bodyPr/>${extra}</wps:wsp>`;

function sizeRuns(omml, halfPts) { return omml.replace(/<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"\/><\/w:rPr>/g, `<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/><w:sz w:val="${halfPts}"/><w:szCs w:val="${halfPts}"/></w:rPr>`); }

function itemXml(p) {
  const color = p.color;
  if (p.t === 'line') {
    const x = Math.min(p.x1, p.x2), y = Math.min(p.y1, p.y2), w = Math.abs(p.x2 - p.x1), h = Math.abs(p.y2 - p.y1);
    const flipH = p.x2 < p.x1, flipV = p.y2 < p.y1;
    return `<wps:wsp><wps:cNvPr id="${++shapeId}" name="Đoạn thẳng"/><wps:cNvCnPr/><wps:spPr>${xfrm(x, y, w, h, `${flipH ? ' flipH="1"' : ''}${flipV ? ' flipV="1"' : ''}`)}<a:prstGeom prst="line"><a:avLst/></a:prstGeom>${ln(p.w, color, p.dash, p.arrow)}</wps:spPr><wps:bodyPr/></wps:wsp>`;
  }
  if (p.t === 'rect') return shape('Hình chữ nhật', `${xfrm(p.x, p.y, p.w, p.h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>${p.fill ? `<a:solidFill><a:srgbClr val="${clr(p.fill)}"/></a:solidFill>` : '<a:noFill/>'}${ln(p.sw, color, p.dash)}`);
  if (p.t === 'ellipse') return shape('Elip', `${xfrm(p.cx - p.rx, p.cy - p.ry, 2 * p.rx, 2 * p.ry)}<a:prstGeom prst="ellipse"><a:avLst/></a:prstGeom>${p.fill ? `<a:solidFill><a:srgbClr val="${clr(p.fill)}"/></a:solidFill>` : '<a:noFill/>'}${ln(p.sw, color, p.dash)}`);
  if (p.t === 'dot') return shape('Điểm', `${xfrm(p.x - (p.r || 2.6), p.y - (p.r || 2.6), 2 * (p.r || 2.6), 2 * (p.r || 2.6))}<a:prstGeom prst="ellipse"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="${clr(color)}"/></a:solidFill><a:ln><a:noFill/></a:ln>`);
  if (p.t === 'poly') {
    const xs = p.pts.map((q) => q[0]), ys = p.pts.map((q) => q[1]);
    const x0 = Math.min(...xs), y0 = Math.min(...ys), w = Math.max(...xs) - x0, h = Math.max(...ys) - y0;
    const pt = (q) => `<a:pt x="${e(q[0] - x0)}" y="${e(q[1] - y0)}"/>`;
    const geom = `<a:custGeom><a:avLst/><a:gdLst/><a:ahLst/><a:cxnLst/><a:rect l="0" t="0" r="r" b="b"/><a:pathLst><a:path w="${Math.max(1, e(w))}" h="${Math.max(1, e(h))}"${p.closed ? '' : ' fill="none"'}><a:moveTo>${pt(p.pts[0])}</a:moveTo>${p.pts.slice(1).map((q) => `<a:lnTo>${pt(q)}</a:lnTo>`).join('')}${p.closed ? '<a:close/>' : ''}</a:path></a:pathLst></a:custGeom>`;
    return shape(p.closed ? 'Đa giác' : 'Đường cong', `${xfrm(x0, y0, w, h)}${geom}${p.fill ? `<a:solidFill><a:srgbClr val="${clr(p.fill)}"/></a:solidFill>` : '<a:noFill/>'}${ln(p.sw, color, p.dash)}`);
  }
  if (p.t === 'ptext') {
    const size = p.size || 16, half = Math.round(size * 0.75 * 2), chars = [...p.s].length, w = size * 1.35 * chars + 8, h = size * 1.5;
    const rpr = `<w:rPr>${p.font ? `<w:rFonts w:ascii="${esc(p.font)}" w:hAnsi="${esc(p.font)}" w:eastAsia="${esc(p.font)}"/>` : ''}${p.bold ? '<w:b/>' : ''}${p.color ? `<w:color w:val="${clr(p.color)}"/>` : ''}<w:sz w:val="${half}"/><w:szCs w:val="${half}"/></w:rPr>`;
    return `<wps:wsp><wps:cNvPr id="${++shapeId}" name="Chữ"/><wps:cNvSpPr txBox="1"/><wps:spPr>${xfrm(p.x - w / 2, p.y - h / 2, w, h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></wps:spPr><wps:txbx><w:txbxContent><w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/><w:jc w:val="center"/></w:pPr><w:r>${rpr}<w:t xml:space="preserve">${esc(p.s)}</w:t></w:r></w:p></w:txbxContent></wps:txbx><wps:bodyPr lIns="0" tIns="0" rIns="0" bIns="0" rtlCol="0" anchor="ctr"><a:noAutofit/></wps:bodyPr></wps:wsp>`;
  }
  if (p.t === 'label' || p.t === 'text') {
    const size = p.size || 16, latex = p.t === 'label' ? p.latex : (p.italic ? p.s : `\\text{${p.s}}`);
    const b = labelBox(latex, size);
    const w = b.w + 10, h = b.h + 4;
    const x = (p.anchor === 'l' ? p.x - 5 : p.anchor === 'r' ? p.x - w + 5 : p.x - w / 2);
    const y = p.valign === 'b' ? p.y - h : p.valign === 't' ? p.y : p.y - h / 2;
    const half = Math.round(size * 0.75 * 2);   // px -> pt -> half-points
    const omml = sizeRuns(latexToOmml(latex), half);
    const jc = p.anchor === 'l' ? 'left' : p.anchor === 'r' ? 'right' : 'center';
    return `<wps:wsp><wps:cNvPr id="${++shapeId}" name="Nhãn"/><wps:cNvSpPr txBox="1"/><wps:spPr>${xfrm(x, y, w, h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>${p.halo ? '<a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill>' : '<a:noFill/>'}<a:ln><a:noFill/></a:ln></wps:spPr><wps:txbx><w:txbxContent><w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/><w:jc w:val="${jc}"/></w:pPr>${omml}</w:p></w:txbxContent></wps:txbx><wps:bodyPr lIns="0" tIns="0" rIns="0" bIns="0" rtlCol="0" anchor="ctr"><a:noAutofit/></wps:bodyPr></wps:wsp>`;
  }
  return '';
}

/**
 * The w:drawing (group of shapes) for a scene. Everything stays editable in Word.
 * float: true -> a floating group (wrap top and bottom, centred): its parts can be selected and dragged one by one.
 * Default is the group "in line with text".
 */
export function sceneToDrawingXml(scene, { name = 'Hình vẽ', alt = '', float = false } = {}) {
  shapeId = 10;
  const W = e(scene.width), H = e(scene.height);
  const body = scene.items.map(itemXml).join('');
  const id = Math.floor(Math.random() * 90000) + 1000;
  const graphic = `<a:graphic><a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"><wpg:wgp><wpg:cNvGrpSpPr/><wpg:grpSpPr>${`<a:xfrm><a:off x="0" y="0"/><a:ext cx="${W}" cy="${H}"/><a:chOff x="0" y="0"/><a:chExt cx="${W}" cy="${H}"/></a:xfrm>`}</wpg:grpSpPr>${body}</wpg:wgp></a:graphicData></a:graphic>`;
  const docPr = `<wp:docPr id="${id}" name="${esc(name)} ${id}" descr="${esc(alt)}"/><wp:cNvGraphicFramePr/>`;
  if (float) return `<w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="251658240" behindDoc="0" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="column"><wp:align>center</wp:align></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV><wp:extent cx="${W}" cy="${H}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapTopAndBottom/>${docPr}${graphic}</wp:anchor></w:drawing>`;
  return `<w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${W}" cy="${H}"/><wp:effectExtent l="0" t="0" r="0" b="0"/>${docPr}${graphic}</wp:inline></w:drawing>`;
}

const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" mc:Ignorable="wp14"';

/** Flat-OPC package with one paragraph holding the shapes (for selection.insertOoxml). */
export function sceneToPackage(scene, opts = {}) {
  const drawing = sceneToDrawingXml(scene, opts);
  return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS}><w:body><w:p><w:pPr><w:jc w:val="${opts.center === false ? 'left' : 'center'}"/></w:pPr><w:r>${drawing}</w:r></w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
}
