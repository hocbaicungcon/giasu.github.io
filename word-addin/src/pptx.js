// Pure JavaScript PowerPoint (.pptx) generator with interactive right/wrong feedback.
// Compatible with PowerPoint (Win/Mac/Web), Google Slides, Keynote, and CHITUP Slide.
import { zipStore } from './xlsx.js';
import { escapeXml, unescapeXml } from './xml.js';
import { splitParts, convertMathTypeInPackage, base64ToBytes } from './ooxml.js';
import { ommlToLatex } from './omml.js';
import { parseBody, analyze, answersOf, paragraphText } from './exam.js';

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
  runs = null,
  inset = 140000,
  rightInset = null,
  fit = true,
  fontScale = 0
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
        <a:bodyPr wrap="square" lIns="${inset}" tIns="${inset}" rIns="${rightInset ?? inset}" bIns="${inset}" rtlCol="0" ${vAnchor}>${fit ? (fontScale ? `<a:normAutofit fontScale="${fontScale}" lnSpcReduction="10000"/>` : '<a:normAutofit/>') : ''}</a:bodyPr>
        <a:lstStyle/>
        ${bodyContent}
      </p:txBody>
    </p:sp>`;
}

/** A picture placed on a slide. rId: relationship id of the image part in the slide's rels. */
export function makePic({ id, rId, x, y, cx, cy, name = 'Hình', linkTarget = null, linkTooltip = '' }) {
  const linkXml = linkTarget ? `<a:hlinkClick r:id="${linkTarget}" tooltip="${escapeXml(linkTooltip)}" action="ppaction://hlinksldjump"/>` : '';
  return `
    <p:pic>
      <p:nvPicPr><p:cNvPr id="${id}" name="${escapeXml(name)}" descr="${escapeXml(name)}">${linkXml}</p:cNvPr><p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr/></p:nvPicPr>
      <p:blipFill><a:blip r:embed="${rId}"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>
      <p:spPr><a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr>
    </p:pic>`;
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

const REL_IMAGE = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image';
function makeSlideRels(links = []) {
  const rels = [
    '<Relationship Id="rIdLayout" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>'
  ];
  for (const lnk of links) {
    rels.push(`<Relationship Id="${lnk.id}" Type="${lnk.image ? REL_IMAGE : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide'}" Target="${lnk.target}"/>`);
  }
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${rels.join('\n  ')}
</Relationships>`;
}


// ---------------------------------------------------------------- content extraction (text, maths, pictures)
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '+': '⁺', '-': '⁻', '−': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', n: 'ⁿ', i: 'ⁱ' };
const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉', '+': '₊', '-': '₋', '−': '₋', '=': '₌', '(': '₍', ')': '₎', a: 'ₐ', e: 'ₑ', o: 'ₒ', x: 'ₓ', n: 'ₙ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', m: 'ₘ', p: 'ₚ', s: 'ₛ', t: 'ₜ', h: 'ₕ', l: 'ₗ' };
const toScript = (map, mark, x) => {
  x = String(x).trim();
  if (!x) return '';
  if ([...x].every((ch) => map[ch])) return [...x].map((ch) => map[ch]).join('');
  return mark + (/^[A-Za-z0-9]$/.test(x) ? x : `(${x})`);
};
const sup = (x) => toScript(SUP, '^', x);
const sub = (x) => toScript(SUB, '_', x);
const SYM = {
  le: '≤', leq: '≤', leqslant: '≤', ge: '≥', geq: '≥', geqslant: '≥', neq: '≠', ne: '≠', approx: '≈', equiv: '≡', sim: '∼', cong: '≅', propto: '∝',
  times: '×', cdot: '·', div: '÷', pm: '±', mp: '∓', ast: '∗', circ: '°', degree: '°', bullet: '•', star: '★',
  infty: '∞', partial: '∂', nabla: '∇', prime: '′', ldots: '…', dots: '…', cdots: '⋯', vdots: '⋮', ddots: '⋱',
  to: '→', rightarrow: '→', leftarrow: '←', Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', leftrightarrow: '↔', mapsto: '↦', implies: '⇒', iff: '⇔',
  in: '∈', notin: '∉', ni: '∋', subset: '⊂', supset: '⊃', subseteq: '⊆', supseteq: '⊇', cap: '∩', cup: '∪', setminus: '∖', emptyset: '∅', varnothing: '∅',
  forall: '∀', exists: '∃', nexists: '∄', neg: '¬', land: '∧', lor: '∨', perp: '⊥', parallel: '∥', angle: '∠', triangle: '△',
  sum: '∑', prod: '∏', int: '∫', iint: '∬', iiint: '∭', oint: '∮',
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varepsilon: 'ε', zeta: 'ζ', eta: 'η', theta: 'θ', vartheta: 'ϑ', iota: 'ι', kappa: 'κ', lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', upsilon: 'υ', phi: 'φ', varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Xi: 'Ξ', Pi: 'Π', Sigma: 'Σ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω'
};
const BB = { R: 'ℝ', N: 'ℕ', Z: 'ℤ', Q: 'ℚ', C: 'ℂ' };
const paren = (x) => { x = x.trim(); return /^[A-Za-z0-9À-ɏ.,°′'π∞]+$/.test(x) ? x : `(${x})`; };

/** LaTeX -> readable one-line Unicode text (PowerPoint has no maths engine, so formulas are written as plain text). */
export function texToPlain(tex) {
  let s = ` ${tex} `;
  s = s.replace(/\\(?:left|right)\s*\./g, '').replace(/\\(?:left|right|bigl|bigr|Bigl|Bigr|big|Big|displaystyle|textstyle)(?![A-Za-z])\s*/g, '');
  s = s.replace(/\\[,;:!> ]|\\q?quad(?![A-Za-z])/g, ' ').replace(/\\(?:dfrac|tfrac|cfrac)(?![A-Za-z])/g, '\\frac');
  s = s.replace(/\\mathbb\s*\{([A-Z])\}/g, (m, x) => BB[x] || x);
  s = s.replace(/\\(?:text|textbf|mathrm|mathbf|mathit|mathsf|mathcal|operatorname|boldsymbol)\s*\{([^{}]*)\}/g, '$1');
  s = s.replace(/\^\s*\{?\s*\\circ\s*\}?/g, '°');
  s = s.replace(/\\begin\{(cases|array|aligned|matrix|pmatrix|bmatrix|vmatrix)\}(\{[^{}]*\})?([\s\S]*?)\\end\{\1\}/g, (m, env, spec, body) => {
    const rows = body.split(/\\\\/).map((r) => r.trim().replace(/&/g, '  ')).filter(Boolean);
    if (env === 'cases') return `{ ${rows.join('; ')} `;
    return (env === 'vmatrix' ? '|' : '(') + rows.join('; ') + (env === 'vmatrix' ? '|' : ')');
  });
  for (let i = 0; i < 14; i++) {
    const before = s;
    s = s.replace(/\\sqrt\s*\[([^\]]*)\]\s*\{([^{}]*)\}/g, (m, n, x) => `${sup(n)}√${paren(x)}`);
    s = s.replace(/\\sqrt\s*\{([^{}]*)\}/g, (m, x) => `√${paren(x)}`);
    s = s.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (m, a, b) => `${paren(a)}/${paren(b)}`);
    s = s.replace(/\\binom\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (m, a, b) => `C(${a.trim()}; ${b.trim()})`);
    s = s.replace(/\\(?:overrightarrow|vec)\s*\{([^{}]*)\}/g, '$1⃗');
    s = s.replace(/\\(?:overline|bar)\s*\{([^{}]*)\}/g, '$1̅');
    s = s.replace(/\\widehat\s*\{([^{}]*)\}/g, '∠$1').replace(/\\hat\s*\{([^{}]*)\}/g, '$1̂');
    s = s.replace(/\^\s*\{([^{}]*)\}/g, (m, x) => sup(x));
    s = s.replace(/_\s*\{([^{}]*)\}/g, (m, x) => sub(x));
    if (s === before) break;
  }
  s = s.replace(/\^\s*([0-9A-Za-z+\-−])/g, (m, x) => sup(x)).replace(/_\s*([0-9A-Za-z+\-−])/g, (m, x) => sub(x));
  s = s.replace(/\\([A-Za-z]+)/g, (m, name) => (SYM[name] !== undefined ? SYM[name] : name));
  s = s.replace(/\\\\/g, '; ').replace(/\\\|/g, '‖').replace(/\\([^A-Za-z])/g, '$1');
  s = s.replace(/[{}]/g, '').replace(/&/g, ' ').replace(/\s+/g, ' ').trim();
  return s;
}

const IMG_EXT = { 'image/png': 'png', 'image/jpeg': 'jpeg', 'image/jpg': 'jpeg', 'image/gif': 'gif', 'image/x-emf': 'emf', 'image/emf': 'emf', 'image/x-wmf': 'wmf', 'image/wmf': 'wmf' };
const RE_LABEL = /^\s*(?:C[âa]u|B[àa]i)\s*\d+\s*(?:[.:)\-–—]|\s)?\s*/iu;

/** Picture parts of the package (relationship id -> {ext, b64}); formats PowerPoint cannot show are left out. */
function imageParts(pkg) {
  const parts = splitParts(pkg), map = new Map();
  const rels = parts.get('/word/_rels/document.xml.rels');
  if (!rels) return map;
  for (const tag of rels.body.match(/<Relationship\b[^>]*>/g) || []) {
    const id = /\bId="([^"]+)"/.exec(tag), target = /\bTarget="([^"]+)"/.exec(tag);
    if (!id || !target || /TargetMode="External"/.test(tag)) continue;
    const part = parts.get(target[1].startsWith('/') ? target[1] : '/word/' + target[1].replace(/^\.\//, ''));
    if (!part) continue;
    const type = /pkg:contentType="([^"]+)"/.exec(part.attrs), bin = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body);
    const ext = type && IMG_EXT[type[1].toLowerCase()];
    if (ext && bin) map.set(id[1], { ext, b64: bin[1] });
  }
  return map;
}

function pngSize(b) {
  return b.length > 24 && b[0] === 0x89 && b[1] === 0x50 ? { cx: ((b[16] << 24) | (b[17] << 16) | (b[18] << 8) | b[19]) * 9525, cy: ((b[20] << 24) | (b[21] << 16) | (b[22] << 8) | b[23]) * 9525 } : null;
}

/** Extraction context: picture parts, the media files used so far and a count of pictures that could not be carried over. */
function makeContext(pkg) {
  return { parts: pkg ? imageParts(pkg) : new Map(), media: new Map(), missing: 0 };
}

function runPicture(run, ctx) {
  if (!/<w:object\b|<w:pict\b|<mc:AlternateContent|<w:drawing/.test(run)) return null;
  const blip = /<a:blip\b[^>]*r:embed="([^"]+)"/.exec(run) || /<v:imagedata\b[^>]*r:id="([^"]+)"/.exec(run);
  const part = blip && ctx.parts.get(blip[1]);
  if (!part) { ctx.missing++; return null; }
  let media = ctx.media.get(blip[1]);
  if (!media) {
    media = { name: `image${ctx.media.size + 1}.${part.ext}`, ext: part.ext, bytes: base64ToBytes(part.b64) };
    ctx.media.set(blip[1], media);
  }
  let cx = 0, cy = 0;
  const e = /<wp:extent cx="(\d+)" cy="(\d+)"/.exec(run);
  if (e) { cx = Number(e[1]); cy = Number(e[2]); }
  else {
    const st = /style="[^"]*?width:([\d.]+)pt;[^"]*?height:([\d.]+)pt/.exec(run);
    if (st) { cx = Math.round(Number(st[1]) * 12700); cy = Math.round(Number(st[2]) * 12700); }
  }
  if (!(cx > 0 && cy > 0)) { const n = pngSize(media.bytes); cx = n ? n.cx : 3000000; cy = n ? n.cy : 2000000; }
  return { media, cx, cy };
}

/** Children of one paragraph -> {text, imgs}. skip: number of leading characters to drop (the "Câu 1." label). */
function collect(kids, ctx, st, out) {
  for (const c of kids) {
    if (typeof c !== 'string') continue;
    if (/^<m:oMath(Para)?[\s>]/.test(c)) {
      if (st.skip) { st.skip--; continue; }
      try { out.text += ` ${texToPlain(ommlToLatex(c)[0])} `; } catch { out.text += ' [công thức] '; }
    } else if (/^<w:r[\s>]/.test(c)) {
      const pic = runPicture(c, ctx);
      if (pic) out.imgs.push(pic);
      const rpr = /<w:rPr>([\s\S]*?)<\/w:rPr>/.exec(c)?.[1] || '';
      const script = /<w:vertAlign w:val="superscript"/.test(rpr) ? sup : /<w:vertAlign w:val="subscript"/.test(rpr) ? sub : null;
      let t = '';
      for (const m of c.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\/>|<w:br\b[^>]*\/>|<w:noBreakHyphen\/>/g)) {
        if (m[0].startsWith('<w:tab')) { t += ' '; continue; }
        if (m[0].startsWith('<w:br')) { t += '\n'; continue; }
        if (m[0].startsWith('<w:noBreak')) { t += '-'; continue; }
        let x = unescapeXml(m[1]);
        if (st.skip) { const cut = Math.min(st.skip, x.length); x = x.slice(cut); st.skip -= cut; }
        t += x;
      }
      out.text += script && t.trim() ? script(t) : t;
    } else if (/^<w:hyperlink[\s>]/.test(c)) {
      collect(c.replace(/^<w:hyperlink\b[^>]*>/, '').replace(/<\/w:hyperlink>$/, '').match(/<w:r[\s>][\s\S]*?<\/w:r>/g) || [], ctx, st, out);
    }
  }
}

const toLines = (text) => text.replace(/[ \t ]+/g, ' ').split('\n').map((l) => l.trim()).filter(Boolean);

/** {lines, imgs} of one paragraph block, or of a table block (one line per row, cells joined by " | "). */
function blockContent(b, ctx, skipLen = 0) {
  if (b.kind === 'p') {
    const out = { text: '', imgs: [] };
    collect(b.children, ctx, { skip: skipLen }, out);
    return { lines: toLines(out.text), imgs: out.imgs };
  }
  const lines = [], imgs = [];
  for (const row of b.xml.split('</w:tr>')) {
    const cells = [];
    for (const cell of row.split('</w:tc>')) {
      const out = { text: '', imgs: [] };
      for (const para of cell.match(/<w:p\b[\s\S]*?<\/w:p>/g) || []) {
        collect(para.match(/<m:oMathPara>[\s\S]*?<\/m:oMathPara>|<m:oMath>[\s\S]*?<\/m:oMath>|<w:r[\s>][\s\S]*?<\/w:r>/g) || [], ctx, { skip: 0 }, out);
        out.text += '\n';
      }
      imgs.push(...out.imgs);
      const t = toLines(out.text).join(' ');
      if (t) cells.push(t);
    }
    if (cells.length) lines.push(cells.join(' | '));
  }
  return { lines, imgs };
}

/** Everything the slides need about each question. */
function collectItems(model, analysis, answers, ctx) {
  const items = [];
  for (const part of analysis.parts) {
    for (const q of part.questions) {
      const qAns = answers.find((x) => x.part === part.title && x.number === q.number);
      let lines = [], imgs = [];
      for (let i = q.start; i < q.stemEnd; i++) {
        const b = model.blocks[i];
        if (!b) continue;
        const skip = i === q.start && b.kind === 'p' ? (RE_LABEL.exec(paragraphText(b)) || [''])[0].length : 0;
        const c = blockContent(b, ctx, skip);
        lines.push(...c.lines);
        imgs.push(...c.imgs);
      }
      // a figure set in its own paragraph after the options (or between them) still belongs to the question
      const optionBlocks = new Set([...(q.optionParas || []), ...(q.statements || []).map((st) => st.block)]);
      for (let i = Math.max(q.stemEnd, q.start + 1); i < q.end; i++) {
        if (optionBlocks.has(i) || !model.blocks[i]) continue;
        const c = blockContent(model.blocks[i], ctx);
        if (c.lines.length) break;
        imgs.push(...c.imgs);
      }
      if (part.kind === 'tf' && q.statements && q.statements.length) {
        for (const st of q.statements) {
          const c = blockContent(model.blocks[st.block], ctx);
          lines.push(...c.lines);
          imgs.push(...c.imgs);
        }
      }
      const options = (q.options || []).map((o) => {
        const out = { text: '', imgs: [] };
        collect(o.content, ctx, { skip: 0 }, out);
        return { letter: o.letter, text: toLines(out.text).join(' ').replace(/^[A-Za-z]\s*[.:)]\s*/, ''), imgs: out.imgs };
      });
      items.push({
        number: q.number,
        partTitle: part.title,
        kind: part.kind,
        stemLines: lines,
        stemImgs: imgs,
        options,
        correct: qAns?.value || null,
        tf: qAns?.tf || null,
        tfLetters: (q.statements || []).map((s) => s.letter)
      });
    }
  }
  return items;
}

/** Convert MathType objects / LaTeX text of the document package, then read it: everything buildExamPptx needs. */
export function preparePptxSource(pkg0) {
  let pkg = pkg0;
  for (const convertLatex of [true, false]) {   // a paragraph the LaTeX reader cannot take apart must not stop the export
    try {
      const conv = convertMathTypeInPackage(pkg0, { convertMathType: true, convertLatex, display: false });
      if (conv.changed) pkg = conv.pkg;
      break;
    } catch { /* try the next, simpler conversion */ }
  }
  const model = parseBody(pkg), analysis = analyze(model);
  return { pkg, model, analysis, answers: answersOf(model, analysis) };
}


// ---------------------------------------------------------------- layout: fit text and pictures into the slide
const MX = 700000, CW = 10792000, TOP = 950000, BOTTOM = 6250000, GAP = 150000, STEM_ONLY_H = 4500000;
const PTE = 12700;
const STEM_SIZES = [2400, 2200, 2000, 1800, 1600, 1400, 1200, 1100];

/** Height (EMU) of the text in a box of the given width; wrapping is estimated from the average glyph width, on the safe side. */
function textHeight(lines, size, width, inset, bold) {
  const pt = size / 100;
  const cpl = Math.max(3, Math.floor(((width - 2 * inset) / (pt * PTE * (bold ? 0.6 : 0.55))) * 0.93));
  let n = 0;
  for (const l of lines) n += Math.max(1, Math.ceil(l.length / cpl));
  return n * pt * PTE * 1.22 + 2 * inset;
}

function fitSize(lines, w, h, sizes, inset, bold) {
  for (const s of sizes) if (textHeight(lines, s, w, inset, bold) <= h) return { size: s, fits: true };
  return { size: sizes[sizes.length - 1], fits: false };
}

function scaleInto(img, w, h, cap = 1.8) {
  const s = Math.max(0.01, Math.min(w / img.cx, h / img.cy, cap));
  return { cx: Math.round(img.cx * s), cy: Math.round(img.cy * s) };
}

/** Place pictures in an area, in the grid (columns x rows) that shows them largest. */
function gridFit(area, imgs, gap = 100000) {
  let best = null;
  for (let cols = 1; cols <= imgs.length; cols++) {
    const rows = Math.ceil(imgs.length / cols), cw = (area.w - gap * (cols - 1)) / cols, ch = (area.h - gap * (rows - 1)) / rows;
    const boxes = imgs.map((img, i) => {
      const sz = scaleInto(img, cw, ch), c = i % cols, r = Math.floor(i / cols);
      return { img, x: Math.round(area.x + c * (cw + gap) + (cw - sz.cx) / 2), y: Math.round(area.y + r * (ch + gap) + (ch - sz.cy) / 2), cx: sz.cx, cy: sz.cy };
    });
    const score = boxes.reduce((t, b) => t + b.cx * b.cy, 0);
    if (!best || score > best.score) best = { boxes, score };
  }
  return best;
}

/** The question stem (text and pictures) inside region r = {x, y, w, h}. */
function stemLayout(r, lines, imgs) {
  const inset = 140000, bold = lines.join('').length < 140;
  const base = { region: r, bold };
  if (!imgs.length) {
    const f = fitSize(lines, r.w, r.h, STEM_SIZES, inset, bold);
    return { ...base, text: r, size: f.size, fits: f.fits, pics: [] };
  }
  const pad = 120000, inner = { x: r.x + pad, y: r.y + pad, w: r.w - 2 * pad, h: r.h - 2 * pad };
  if (!lines.length) return { ...base, text: null, size: 0, fits: true, pics: gridFit(inner, imgs).boxes };
  const cands = [];
  for (const ratio of [0.5, 0.62, 0.4]) {
    const tw = Math.round(inner.w * ratio - GAP / 2);
    const text = { x: inner.x - pad, y: r.y, w: tw + pad, h: r.h };
    const area = { x: inner.x + tw + GAP, y: inner.y, w: inner.w - tw - GAP, h: inner.h };
    const f = fitSize(lines, text.w, text.h, STEM_SIZES, inset, bold), g = gridFit(area, imgs);
    cands.push({ ...base, text, size: f.size, fits: f.fits, pics: g.boxes, frac: g.score / (area.w * area.h) });
  }
  // picture(s) under the text
  let sz = STEM_SIZES[STEM_SIZES.length - 1];
  for (const s of STEM_SIZES) if (textHeight(lines, s, r.w, inset, bold) <= r.h * 0.5) { sz = s; break; }
  const th = Math.round(Math.min(r.h * 0.6, Math.max(textHeight(lines, sz, r.w, inset, bold), 600000)));
  const area = { x: inner.x, y: r.y + th + 40000, w: inner.w, h: r.h - th - 40000 - pad };
  if (area.h > 400000) {
    const g = gridFit(area, imgs);
    cands.push({ ...base, text: { x: r.x, y: r.y, w: r.w, h: th }, size: sz, fits: textHeight(lines, sz, r.w, inset, bold) <= th, pics: g.boxes, frac: g.score / (area.w * area.h) });
  }
  const score = (c) => (c.fits ? 1e6 : 0) + c.size * 10 + c.frac * 3000;
  return cands.reduce((a, b) => (score(b) > score(a) ? b : a));
}

// ---- options
const OPT_GAP = 150000;
function evalOptions(options, layout, size) {
  const anyImg = options.some((o) => o.imgs.length);
  const cellW = layout === 'grid2' ? 5250000 : CW;
  const share = anyImg ? 0.4 : 0;
  const textW = Math.round(cellW * (1 - share));
  const imgMaxW = Math.round(cellW * share) - 120000, imgMaxH = layout === 'grid2' ? 1300000 : 1000000;
  const specs = options.map((o) => {
    let h = Math.max(textHeight([`${o.letter}. ${o.text}`], size, textW, 100000, false), 620000), imgBox = null;
    if (o.imgs.length) {
      const sz = scaleInto(o.imgs[0], imgMaxW, imgMaxH, 1.5);
      imgBox = { cx: sz.cx, cy: sz.cy, pad: 90000 };
      h = Math.max(h, sz.cy + 180000);
    }
    return { h, imgBox, textW, w: cellW };
  });
  const perRow = layout === 'grid2' ? 2 : 1;
  const rowsH = [];
  specs.forEach((s, i) => { const r = Math.floor(i / perRow); rowsH[r] = Math.max(rowsH[r] || 0, s.h); });
  return { layout, size, specs, perRow, rowsH, cap: layout === 'grid2' ? 1400000 : 950000 };
}

function placeOptions(op, rowsH) {
  const ys = [];
  let y = 0;
  rowsH.forEach((h, r) => { ys[r] = y; y += h + OPT_GAP; });
  const cells = op.specs.map((s, i) => {
    const r = Math.floor(i / op.perRow), c = i % op.perRow;
    return { x: op.layout === 'grid2' ? (c ? 6242000 : MX) : MX, y: ys[r], w: s.w, h: rowsH[r], textW: s.textW, imgBox: s.imgBox };
  });
  return { ...op, rowsH, cells, total: y - OPT_GAP };
}

function planOptions(options, budget) {
  const order = [['grid2', 1800], ['grid2', 1600], ['list', 1800], ['list', 1600], ['list', 1400], ['list', 1200], ['list', 1100]];
  let last;
  for (const [layout, size] of order) {
    const ev = evalOptions(options, layout, size);
    last = placeOptions(ev, ev.rowsH);
    if (last.total <= budget) return { ...last, fits: true };
  }
  return { ...last, fits: false };
}

/** Hand spare height to the option rows, up to a comfortable card height. */
function growOptions(op, spare) {
  const add = Math.max(0, spare) / op.rowsH.length;
  return placeOptions(op, op.rowsH.map((h) => Math.max(h, Math.min(op.cap, h + add))));
}

/** Decide how one question is laid out: all on one slide, or (when stem and options cannot both be read) stem first, options next. */
function planItem(item) {
  const AREA = BOTTOM - TOP, inset = 140000;
  const lines = item.stemLines, imgs = item.stemImgs;
  const bold = lines.join('').length < 140;
  if (!item.options.length) return { mode: 'single', stem: stemLayout({ x: MX, y: TOP, w: CW, h: STEM_ONLY_H }, lines, imgs) };
  const need = imgs.length ? 2400000 : Math.min(AREA * 0.55, Math.max(1000000, textHeight(lines, 1800, CW, inset, bold)));
  const op = planOptions(item.options, AREA - need - GAP);
  if (op.fits) {
    const maxStem = AREA - GAP - op.total;
    const desired = imgs.length ? maxStem : Math.max(1300000, textHeight(lines, 2000, CW, inset, bold) + 100000);
    const stemH0 = Math.min(maxStem, desired);
    const grown = growOptions(op, maxStem - stemH0);
    const stemH = AREA - GAP - grown.total;
    const stem = stemLayout({ x: MX, y: TOP, w: CW, h: stemH }, lines, imgs);
    if (stem.fits) return { mode: 'single', stem, opts: grown, optsTop: TOP + stemH + GAP };
  }
  // the options slide repeats the end of the stem (usually the actual question) so it can be answered without flipping back
  const joined = lines.join(' ');
  const tail = joined ? (joined.length > 230 ? '… ' + joined.slice(-230).replace(/^\S*\s/, '') : joined) : '';
  const remH = tail ? 1100000 : 0, optBudget = AREA - (remH ? remH + GAP : 0);
  const full = growOptions(planOptions(item.options, optBudget), optBudget);
  return { mode: 'split', stem: stemLayout({ x: MX, y: TOP, w: CW, h: STEM_ONLY_H }, lines, imgs), opts: full, optsTop: TOP + (remH ? remH + GAP : 0), reminder: remH ? { text: tail, h: remH } : null };
}

// ---------------------------------------------------------------- themes (colours + font)
// The slides are written with the default (blue) palette; a theme swaps those colours and the font after the fact.
// Right / wrong colours (green, red) keep their meaning in every theme.
const BASE = { dark: '0F172A', dark2: '1E293B', text2: '475569', text3: '64748B', text4: '94A3B8', pale: 'E2E8F0', line: 'CBD5E1', paper: 'F8FAFC', primary: '3B82F6', accent: '4F46E5', accent2: '6366F1', sky: '38BDF8' };
export const PPTX_THEMES = [
  { id: 'blue', label: 'Xanh dương đêm (mặc định)', font: 'Arial', colors: {} },
  { id: 'emerald', label: 'Xanh ngọc TexCraft', font: 'Georgia', colors: { dark: '0B2B20', dark2: '14392B', text2: '3F5B4E', text3: '5F7F70', text4: '9DB8AB', pale: 'DDEEE4', line: 'CFE3D8', paper: 'F4FAF7', primary: '1F6F4F', accent: '2F855A', accent2: '38A169', sky: '6EE7B7' } },
  { id: 'sunset', label: 'Hoàng hôn (cam ấm)', font: 'Verdana', colors: { dark: '2B1608', dark2: '3D2410', text2: '6B4A32', text3: '8A6A52', text4: 'C9A98F', pale: 'F3E2D3', line: 'F3D5BE', paper: 'FFF8F1', primary: 'F97316', accent: 'EA580C', accent2: 'FB923C', sky: 'FDBA74' } },
  { id: 'violet', label: 'Tím mộng mơ', font: 'Georgia', colors: { dark: '1E1033', dark2: '2E1A4A', text2: '57457A', text3: '7A68A0', text4: 'B8A9D6', pale: 'E9E1F7', line: 'DCCFF2', paper: 'FAF7FF', primary: '7C3AED', accent: '6D28D9', accent2: '8B5CF6', sky: 'C4B5FD' } },
  { id: 'classic', label: 'Cổ điển (đỏ thẫm, chữ có chân)', font: 'Times New Roman', colors: { dark: '3A0A0A', dark2: '511414', text2: '5E3A3A', text3: '7E5A5A', text4: 'C6A0A0', pale: 'F2DEDE', line: 'E6CACA', paper: 'FFF8F6', primary: 'B91C1C', accent: '991B1B', accent2: 'DC2626', sky: 'FCA5A5' } },
  { id: 'mono', label: 'Đen trắng (tiết kiệm mực)', font: 'Tahoma', colors: { dark: '111111', dark2: '262626', text2: '404040', text3: '595959', text4: 'A6A6A6', pale: 'E5E5E5', line: 'BFBFBF', paper: 'FAFAFA', primary: '404040', accent: '262626', accent2: '595959', sky: 'D4D4D4' } },
];

export function applyTheme(xml, themeId) {
  const theme = PPTX_THEMES.find((t) => t.id === themeId);
  if (!theme || theme.id === 'blue') return xml;
  const map = {};
  for (const [role, hex] of Object.entries(theme.colors)) map[BASE[role]] = hex;
  const out = xml.replace(/srgbClr val="([0-9A-Fa-f]{6})"/g, (m, hex) => `srgbClr val="${map[hex.toUpperCase()] || hex}"`);
  return out.replace(/<a:latin typeface="Arial"\/>/g, `<a:latin typeface="${theme.font}"/>`);
}

export function buildExamPptx(model, analysis, answers, opts = {}) {
  const ctx = makeContext(opts.pkg);
  const items = collectItems(model, analysis, answers, ctx);
  if (!items.length) throw new Error('Không tìm thấy câu hỏi nào trong tài liệu.');
  items.forEach((it) => { it.plan = planItem(it); });

  const slides = []; // { fileName, relsFileName, xml, rels }
  const presentationRels = [
    '<Relationship Id="rIdMaster" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>',
    '<Relationship Id="rIdTheme" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>'
  ];
  const sldIdList = [];

  let slideIndex = 1;
  const registerSlide = (xml, links = [], show = true) => {
    const sId = slideIndex++;
    const sName = `slide${sId}.xml`;
    slides.push({ fileName: `ppt/slides/${sName}`, relsFileName: `ppt/slides/_rels/${sName}.rels`, xml, rels: makeSlideRels(links), sId });
    presentationRels.push(`<Relationship Id="rIdSld${sId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/${sName}"/>`);
    sldIdList.push(`<p:sldId id="${255 + sId}" r:id="rIdSld${sId}"/>`);
    return sId;
  };

  // Slide numbering: 1 = title; then per question [question slide(s)] + right + wrong; last = final slide.
  let cursor = 2;
  for (const it of items) {
    it.qSlide = cursor;
    it.optSlide = it.plan.mode === 'split' ? cursor + 1 : cursor;
    it.rightSlide = it.optSlide + 1;
    it.wrongSlide = it.optSlide + 2;
    cursor = it.wrongSlide + 1;
  }
  const finalSlideId = cursor;

  // Pictures of one slide: relationship + <p:pic>.
  const slidePics = () => {
    const links = [];
    let n = 0;
    return {
      links,
      add(img, box, link) {
        n++;
        const rId = `rIdImg${n}`;
        links.push({ id: rId, target: `../media/${img.media.name}`, image: true });
        return makePic({ id: 70 + n, rId, x: box.x, y: box.y, cx: box.cx, cy: box.cy, name: `Hình ${n}`, linkTarget: link, linkTooltip: link ? 'Chọn' : '' });
      }
    };
  };
  const stemShapes = (it, st, pics) => {
    const out = [];
    out.push(makeShape({ id: 12, name: 'StemCard', x: st.region.x, y: st.region.y, cx: st.region.w, cy: st.region.h, fill: 'FFFFFF', line: 'CBD5E1', lineWidth: 19050, roundAdj: 6000, text: '', fit: false }));
    if (st.text) {
      const tall = textHeight(it.stemLines, st.size, st.text.w, 140000, st.bold) > st.text.h * 0.6;
      const lines = it.stemLines.length ? it.stemLines : (it.stemImgs.length ? [] : ['(Nội dung câu hỏi nằm trong tài liệu gốc)']);
      const need = textHeight(lines, st.size, st.text.w, 140000, st.bold);
      const fontScale = st.fits ? 0 : Math.floor(Math.max(0.4, st.text.h / need) * 100) * 1000;   // text longer than the box even at the smallest size: let PowerPoint scale it down
      if (lines.length) out.push(makeShape({ id: 13, name: 'Stem', x: st.text.x, y: st.text.y, cx: st.text.w, cy: st.text.h, fill: null, round: false, text: lines.join('\n'), textSize: st.size, textColor: '0F172A', bold: st.bold, align: 'l', valign: tall || it.stemImgs.length || !st.fits ? 't' : 'ctr', fontScale }));
    }
    for (const b of st.pics) out.push(pics.add(b.img, b));
    return out;
  };
  const optionShapes = (it, op, top, pics, baseId) => {
    const out = [];
    op.cells.forEach((cell, k) => {
      const opt = it.options[k];
      const isRight = it.correct ? opt.letter.toUpperCase() === it.correct.toUpperCase() : true;
      const target = isRight ? 'rIdRight' : 'rIdWrong';
      const y = top + cell.y;
      out.push(makeShape({
        id: baseId + k, name: `Opt${opt.letter}`, x: cell.x, y, cx: cell.w, cy: cell.h,
        fill: 'FFFFFF', line: 'CBD5E1', lineWidth: 19050, roundAdj: 12000,
        text: `${opt.letter}. ${opt.text}`, textSize: op.size, textColor: '1E293B', bold: false, align: 'l',
        linkTarget: target, linkTooltip: `Chọn ${opt.letter}`, inset: 100000, rightInset: cell.imgBox ? Math.round(cell.w - cell.textW + 60000) : 100000
      }));
      if (cell.imgBox) {
        const im = cell.imgBox;
        out.push(pics.add(opt.imgs[0], { x: cell.x + cell.w - im.pad - im.cx, y: y + Math.round((cell.h - im.cy) / 2), cx: im.cx, cy: im.cy }, target));
      }
    });
    return out;
  };

  // 1. Title slide
  const titleText = opts.title || 'BÀI TẬP TRẮC NGHIỆM';
  const subtitleText = `Đề thi gồm ${items.length} câu hỏi • Tương tác Đúng/Sai trực tiếp`;
  const titleShapes = `
    ${makeShape({ id: 2, name: 'Title', x: 1200000, y: 1600000, cx: 9792000, cy: 1600000, fill: null, text: titleText, textSize: titleText.length > 50 ? 2800 : 3600, textColor: 'FFFFFF', bold: true, align: 'ctr' })}
    ${makeShape({ id: 3, name: 'Sub', x: 1200000, y: 3100000, cx: 9792000, cy: 800000, fill: null, text: subtitleText, textSize: 2000, textColor: '94A3B8', bold: false, align: 'ctr' })}
    ${makeShape({ id: 4, name: 'StartBtn', x: 4396000, y: 4300000, cx: 3400000, cy: 900000, fill: '3B82F6', roundAdj: 25000, text: 'BẮT ĐẦU  ➡', textSize: 2200, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdNext', linkTooltip: 'Bắt đầu' })}
  `;
  registerSlide(makeSlideXml('0F172A', titleShapes, true), [{ id: 'rIdNext', target: 'slide2.xml' }]);

  const header = (it, suffix = '') => [
    makeShape({ id: 10, name: 'Badge', x: 700000, y: 350000, cx: 1600000, cy: 450000, fill: '4F46E5', roundAdj: 10000, text: `CÂU ${it.number}`, textSize: 1600, textColor: 'FFFFFF', bold: true, align: 'ctr' }),
    makeShape({ id: 11, name: 'Part', x: 2450000, y: 350000, cx: 8500000, cy: 450000, fill: null, text: (it.partTitle || 'TRẮC NGHIỆM') + suffix, textSize: it.partTitle && it.partTitle.length > 70 ? 1100 : 1400, textColor: '64748B', bold: true, align: 'l' })
  ];
  const showAnswerLink = () => makeShape({ id: 35, name: 'ShowAnswerSmall', x: 9200000, y: 6350000, cx: 2292000, cy: 400000, fill: null, text: 'Xem đáp án 💡', textSize: 1300, textColor: '6366F1', bold: true, align: 'r', linkTarget: 'rIdRight', linkTooltip: 'Xem đáp án' });

  items.forEach((item, qIdx) => {
    const nextQSlideId = qIdx === items.length - 1 ? finalSlideId : items[qIdx + 1].qSlide;
    const plan = item.plan;
    const hasOptions = item.options.length > 0;

    // --- QUESTION SLIDE(S) ---
    const pics = slidePics();
    const qShapes = header(item);
    const qLinks = [{ id: 'rIdRight', target: `slide${item.rightSlide}.xml` }, { id: 'rIdWrong', target: `slide${item.wrongSlide}.xml` }];
    qShapes.push(...stemShapes(item, plan.stem, pics));
    if (plan.mode === 'single' && hasOptions) {
      qShapes.push(...optionShapes(item, plan.opts, plan.optsTop, pics, 20));
      qShapes.push(showAnswerLink());
    } else if (plan.mode === 'split') {
      qLinks.push({ id: 'rIdOpts', target: `slide${item.optSlide}.xml` });
      qShapes.push(makeShape({ id: 20, name: 'ToOptions', x: 3896000, y: 5600000, cx: 4400000, cy: 650000, fill: '3B82F6', roundAdj: 25000, text: 'XEM CÁC PHƯƠNG ÁN  ➡', textSize: 1800, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdOpts', linkTooltip: 'Xem các phương án' }));
      qShapes.push(showAnswerLink());
    } else {
      qShapes.push(makeShape({ id: 20, name: 'ShowAnswerBtn', x: 3896000, y: 5600000, cx: 4400000, cy: 650000, fill: '3B82F6', roundAdj: 20000, text: 'XEM ĐÁP ÁN & LỜI GIẢI 💡', textSize: 1800, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdRight', linkTooltip: 'Xem đáp án' }));
    }
    qLinks.push(...pics.links);
    registerSlide(makeSlideXml('F8FAFC', qShapes.join('\n'), true), qLinks);

    if (plan.mode === 'split') {
      const pics2 = slidePics();
      const oShapes = header(item, '  ·  Chọn đáp án');
      if (plan.reminder) {
        const rf = fitSize([plan.reminder.text], CW, plan.reminder.h, [1600, 1400, 1200], 140000, false);
        oShapes.push(makeShape({ id: 14, name: 'StemReminder', x: MX, y: TOP, cx: CW, cy: plan.reminder.h, fill: 'E2E8F0', roundAdj: 8000, text: plan.reminder.text, textSize: rf.size, textColor: '475569', bold: false, align: 'l' }));
      }
      oShapes.push(...optionShapes(item, plan.opts, plan.optsTop, pics2, 20));
      oShapes.push(makeShape({ id: 36, name: 'BackToStem', x: 700000, y: 6350000, cx: 3600000, cy: 400000, fill: null, text: '↩  Xem lại đề bài', textSize: 1300, textColor: '64748B', bold: false, align: 'l', linkTarget: 'rIdStem', linkTooltip: 'Xem lại đề bài' }));
      oShapes.push(showAnswerLink());
      registerSlide(makeSlideXml('F8FAFC', oShapes.join('\n'), true), [
        { id: 'rIdRight', target: `slide${item.rightSlide}.xml` }, { id: 'rIdWrong', target: `slide${item.wrongSlide}.xml` }, { id: 'rIdStem', target: `slide${item.qSlide}.xml` }, ...pics2.links
      ]);
    }

    // --- CORRECT FEEDBACK SLIDE ---
    const correctLetter = item.correct || '';
    const correctOpt = hasOptions && correctLetter ? item.options.find((o) => o.letter.toUpperCase() === correctLetter.toUpperCase()) : null;
    let detailLines;
    if (correctOpt) detailLines = [`Phương án đúng là ${correctOpt.letter}: ${correctOpt.text}`.trim()];
    else if (item.tf) detailLines = item.tf.map((v, i) => `${item.tfLetters[i] || 'abcd'[i]}) ${v === 'Đ' ? 'Đúng' : 'Sai'}`);
    else if (item.correct) detailLines = [`Đáp án đúng: ${item.correct}`];
    else detailLines = ['Đề chưa đánh dấu đáp án cho câu này.'];
    const isKnown = Boolean(item.correct);
    const isLastQ = qIdx === items.length - 1;
    const nextBtnText = isLastQ ? 'HOÀN THÀNH BÀI THI 🏆' : 'CÂU TIẾP THEO ➡';
    const rightTitle = !isKnown ? '📌  GHI NHẬN' : hasOptions ? '🎉  CHÍNH XÁC!' : '💡  ĐÁP ÁN';
    const rightSub = !isKnown ? `Câu ${item.number}` : hasOptions ? `Chúc mừng bạn đã trả lời đúng câu hỏi số ${item.number}!` : `Đáp án câu ${item.number}`;
    const detailBox = { x: 2400000, y: 2800000, w: 7392000, h: 1400000 };
    const dFit = fitSize(detailLines, detailBox.w, detailBox.h, [1700, 1500, 1300, 1100], 140000, true);
    const rpics = slidePics();
    const optPic = correctOpt && correctOpt.imgs[0] ? correctOpt.imgs[0] : null;
    const rightShapes = [
      makeShape({ id: 40, name: 'Card', x: 1800000, y: 1000000, cx: 8592000, cy: 4800000, fill: 'FFFFFF', line: '10B981', lineWidth: 28000, roundAdj: 15000, text: '', fit: false }),
      makeShape({ id: 41, name: 'Title', x: 2200000, y: 1400000, cx: 7792000, cy: 800000, fill: null, text: rightTitle, textSize: 3200, textColor: '059669', bold: true, align: 'ctr' }),
      makeShape({ id: 42, name: 'Sub', x: 2200000, y: 2200000, cx: 7792000, cy: 500000, fill: null, text: rightSub, textSize: 1800, textColor: '475569', bold: false, align: 'ctr' }),
      makeShape({ id: 43, name: 'DetailBox', x: detailBox.x, y: detailBox.y, cx: optPic ? Math.round(detailBox.w * 0.62) : detailBox.w, cy: detailBox.h, fill: 'F0FDF4', line: '86EFAC', lineWidth: 15000, roundAdj: 10000, text: detailLines.join('\n'), textSize: dFit.size, textColor: '065F46', bold: true, align: 'ctr' }),
      makeShape({ id: 44, name: 'NextBtn', x: 3896000, y: 4400000, cx: 4400000, cy: 850000, fill: '10B981', roundAdj: 25000, text: nextBtnText, textSize: 2000, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdNext', linkTooltip: nextBtnText }),
      makeShape({ id: 45, name: 'BackBtn', x: 4596000, y: 5300000, cx: 3000000, cy: 400000, fill: null, text: '↩  Xem lại câu hỏi', textSize: 1300, textColor: '64748B', bold: false, align: 'ctr', linkTarget: 'rIdQ', linkTooltip: 'Xem lại câu hỏi' })
    ];
    if (optPic) {
      const sz = scaleInto(optPic, Math.round(detailBox.w * 0.34), detailBox.h - 100000);
      rightShapes.push(rpics.add(optPic, { x: detailBox.x + detailBox.w - sz.cx, y: detailBox.y + Math.round((detailBox.h - sz.cy) / 2), cx: sz.cx, cy: sz.cy }));
    }
    registerSlide(makeSlideXml('F0FDF4', rightShapes.join('\n'), true), [
      { id: 'rIdNext', target: `slide${nextQSlideId}.xml` },
      { id: 'rIdQ', target: `slide${item.qSlide}.xml` },
      ...rpics.links
    ]);

    // --- INCORRECT FEEDBACK SLIDE (show="0", accessed via jump) ---
    const wrongShapes = `
      ${makeShape({ id: 50, name: 'Card', x: 1800000, y: 1200000, cx: 8592000, cy: 4400000, fill: 'FFFFFF', line: 'EF4444', lineWidth: 28000, roundAdj: 15000, text: '', fit: false })}
      ${makeShape({ id: 51, name: 'Title', x: 2200000, y: 1700000, cx: 7792000, cy: 800000, fill: null, text: '❌  CHƯA CHÍNH XÁC!', textSize: 3200, textColor: 'DC2626', bold: true, align: 'ctr' })}
      ${makeShape({ id: 52, name: 'Sub', x: 2200000, y: 2600000, cx: 7792000, cy: 800000, fill: null, text: 'Rất tiếc! Phương án bạn vừa chọn chưa đúng.\nĐừng nản lòng, hãy đọc kỹ lại đề bài và thử lại nhé!', textSize: 1800, textColor: '475569', bold: false, align: 'ctr' })}
      ${makeShape({ id: 53, name: 'RetryBtn', x: 3896000, y: 3900000, cx: 4400000, cy: 900000, fill: 'EF4444', roundAdj: 25000, text: '🔄  QUAY LẠI THỬ LẠI', textSize: 2000, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdQ', linkTooltip: 'Thử lại' })}
    `;
    registerSlide(makeSlideXml('FEF2F2', wrongShapes, false), [{ id: 'rIdQ', target: `slide${item.optSlide}.xml` }]);
  });

  // Final slide
  const finalShapes = `
    ${makeShape({ id: 60, name: 'Card', x: 1800000, y: 1200000, cx: 8592000, cy: 4400000, fill: '1E293B', line: '38BDF8', lineWidth: 25000, roundAdj: 15000, text: '', fit: false })}
    ${makeShape({ id: 61, name: 'Title', x: 2200000, y: 1800000, cx: 7792000, cy: 900000, fill: null, text: '🏆  HOÀN THÀNH BÀI THI!', textSize: 3400, textColor: '38BDF8', bold: true, align: 'ctr' })}
    ${makeShape({ id: 62, name: 'Sub', x: 2200000, y: 2800000, cx: 7792000, cy: 700000, fill: null, text: `Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ ${items.length} câu hỏi!`, textSize: 2000, textColor: 'E2E8F0', bold: false, align: 'ctr' })}
    ${makeShape({ id: 63, name: 'RestartBtn', x: 4196000, y: 4100000, cx: 3800000, cy: 850000, fill: '3B82F6', roundAdj: 25000, text: '↺  LÀM LẠI TỪ ĐẦU', textSize: 2000, textColor: 'FFFFFF', bold: true, align: 'ctr', linkTarget: 'rIdFirst', linkTooltip: 'Làm lại' })}
  `;
  registerSlide(makeSlideXml('0F172A', finalShapes, true), [{ id: 'rIdFirst', target: 'slide1.xml' }]);

  // Build full package files list
  const mediaExts = [...new Set([...ctx.media.values()].map((m) => m.ext))];
  const mimeOf = { png: 'image/png', jpeg: 'image/jpeg', gif: 'image/gif', emf: 'image/x-emf', wmf: 'image/x-wmf' };
  const contentTypesOverrides = slides.map((s) => `  <Override PartName="/${s.fileName}" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n');
  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
${mediaExts.map((e) => `  <Default Extension="${e}" ContentType="${mimeOf[e]}"/>`).join('\n')}
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
  for (const m of ctx.media.values()) files.push({ name: `ppt/media/${m.name}`, data: m.bytes });

  const themeId = opts.theme || 'blue';
  for (const f of files) if (/^ppt\/(slides|theme|slideMasters|slideLayouts)\/[^/]*\.xml$/.test(f.name) && typeof f.data === 'string') f.data = applyTheme(f.data, themeId);

  const out = zipStore(files);
  out.missingPictures = ctx.missing;
  out.questionCount = items.length;
  out.splitCount = items.filter((i) => i.plan.mode === 'split').length;
  return out;
}
