// "Tập viết" worksheets (mầm non, lớp 1, lớp 2) -> Word. Rows are plain text set in handwriting fonts that draw their own ruled
// lines and dotted letters (assets/fonts/font-tieu-hoc: HP001 *, assets/fonts/uni-tapviet: UNI Tap Viet *), so the sheet stays
// editable and prints crisply. The fonts must be installed on the computer (the task pane links to the files).
import { para, esc } from './worksheet-docx.js';

export const FONT_BASE = 'https://giasu.ai.vn/assets/fonts/';
export const FONT_FILES = [
  ['font-tieu-hoc/HP001_4_hang_1_o_ly.ttf', 'HP001 4 hang 1 ô ly'], ['font-tieu-hoc/HP001_4_hang_2_o_ly.ttf', 'HP001 4 hàng 2 ô ly'],
  ['font-tieu-hoc/HP001_5_hang_1_o_ly.ttf', 'HP001 5 hàng 1 ô ly'], ['font-tieu-hoc/HP001_4_hang_bold.ttf', 'HP001 4 hàng (đậm)'],
  ['uni-tapviet/UNITapviet_5_ly.ttf', 'UNI Tap Viet 5'], ['uni-tapviet/UNITapviet_0_ly.ttf', 'UNI Tap Viet 0'],
];
/** Model-row fonts: [id, label, Word font family, bold]. */
export const MODEL_FONTS = [
  ['4h1', 'Mẫu 4 hàng, 1 ô ly', 'HP001 4 hang 1 ô ly', false],
  ['4h2', 'Mẫu 4 hàng, 2 ô ly', 'HP001 4 hàng 2 ô ly', false],
  ['5h1', 'Mẫu 5 hàng, 1 ô ly', 'HP001 5 hàng 1 ô ly', false],
  ['bold', 'Mẫu đậm, không dòng kẻ', 'HP001 4 hàng', true],
];
export const TRACE_FONTS = [['uni5', 'Chấm tô, có dòng kẻ', 'UNI Tap Viet 5'], ['uni0', 'Chấm tô, không dòng kẻ', 'UNI Tap Viet 0']];
export const GRADES = [[0, 'Mầm non (bé 4–6 tuổi)'], [1, 'Lớp 1'], [2, 'Lớp 2']];
const BASE_PT = { 0: 36, 1: 30, 2: 26 };
const BIG_PT = 72;   // large letters and digits for the youngest children

const SPLIT = (s) => s.trim().split(/\s+/);
const VOWELS = ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y'];
const CONS = ['b', 'c', 'd', 'đ', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x'];
const up = (c) => c.toLocaleUpperCase('vi');
// the easiest letters first (round / straight strokes), as in the first-grade textbooks
const EASY = ['i', 't', 'l', 'u', 'ư', 'o', 'ô', 'ơ', 'a', 'ă', 'â', 'c', 'e', 'ê', 'n', 'm'];
const VAN = SPLIT('an at ac ai ao au ay am ap ăn ăt ăc ăm ăp ân ât âc âm âp âu ây en et eo em ep ên êt êu êm in it iu im ip on ot oi oc om op ôn ôt ôi ôc ôm ôp ơn ơt ơi ơm ơp un ut ui uc um up ưn ưt ưi ưc ưu');
const WORDS = {
  'Gia đình': SPLIT('ba mẹ bà ông anh chị em bé cô dì chú bác nhà cửa'),
  'Trường học': SPLIT('bàn ghế bảng sách vở bút thước lớp trường thầy cô bạn'),
  'Con vật': SPLIT('gà vịt cá chó mèo bò dê thỏ ngan voi hổ cua'),
  'Cây cối, hoa quả': SPLIT('cây lá hoa cỏ nụ quả chuối cam na bưởi lúa mía'),
  'Thiên nhiên': SPLIT('trời mây mưa gió nắng sao trăng núi sông biển đồi'),
};
const PHRASES = [
  'Bé học bài.', 'Mẹ đi chợ.', 'Bà kể chuyện.', 'Cô giáo giảng bài.', 'Bé chào ông bà.', 'Chim hót trên cành.', 'Mưa rơi tí tách.',
  'Gà mẹ dẫn đàn con.', 'Em yêu trường em.', 'Bố đưa bé đi học.', 'Hoa nở đầy vườn.', 'Cá bơi dưới ao.',
];

/** Folk sayings and proverbs (tục ngữ, ca dao) that suit children: study, family love, friendship, manners, nature, hygiene. */
export const SAYINGS = [
  ['Ăn quả nhớ kẻ trồng cây.', 'tục ngữ'], ['Uống nước nhớ nguồn.', 'tục ngữ'], ['Có công mài sắt, có ngày nên kim.', 'tục ngữ'],
  ['Học thầy không tày học bạn.', 'tục ngữ'], ['Lá lành đùm lá rách.', 'tục ngữ'], ['Chị ngã em nâng.', 'tục ngữ'],
  ['Tiên học lễ, hậu học văn.', 'tục ngữ'], ['Có chí thì nên.', 'tục ngữ'], ['Kính trên nhường dưới.', 'tục ngữ'],
  ['Thương người như thể thương thân.', 'tục ngữ'], ['Ở hiền gặp lành.', 'tục ngữ'], ['Chim có tổ, người có tông.', 'tục ngữ'],
  ['Một điều nhịn, chín điều lành.', 'tục ngữ'], ['Lời chào cao hơn mâm cỗ.', 'tục ngữ'], ['Nhà sạch thì mát, bát sạch ngon cơm.', 'tục ngữ'],
  ['Ăn chín uống sôi.', 'tục ngữ'], ['Đói cho sạch, rách cho thơm.', 'tục ngữ'], ['Nước chảy đá mòn.', 'tục ngữ'],
  ['Trăm hay không bằng tay quen.', 'tục ngữ'], ['Không thầy đố mày làm nên.', 'tục ngữ'], ['Nhường cơm sẻ áo.', 'tục ngữ'],
  ['Đi một ngày đàng, học một sàng khôn.', 'tục ngữ'], ['Gần mực thì đen, gần đèn thì rạng.', 'tục ngữ'],
  ['Một con ngựa đau, cả tàu bỏ cỏ.', 'tục ngữ'], ['Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.', 'tục ngữ'],
  ['Chuồn chuồn bay thấp thì mưa, bay cao thì nắng, bay vừa thì râm.', 'tục ngữ'],
  ['Anh em như thể tay chân, rách lành đùm bọc, dở hay đỡ đần.', 'ca dao'],
  ['Bầu ơi thương lấy bí cùng, tuy rằng khác giống nhưng chung một giàn.', 'ca dao'],
  ['Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra.', 'ca dao'],
  ['Muốn sang thì bắc cầu kiều, muốn con hay chữ phải yêu lấy thầy.', 'ca dao'],
  ['Trâu ơi ta bảo trâu này, trâu ăn no cỏ, trâu cày với ta.', 'ca dao'],
  ['Ai ơi bưng bát cơm đầy, dẻo thơm một hạt, đắng cay muôn phần.', 'ca dao'],
  ['Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.', 'ca dao'],
  ['Cá không ăn muối cá ươn, con cưỡng cha mẹ trăm đường con hư.', 'ca dao'],
  ['Dù ai nói ngả nói nghiêng, lòng ta vẫn vững như kiềng ba chân.', 'ca dao'],
  ['Con cò mà đi ăn đêm, đậu phải cành mềm lộn cổ xuống ao.', 'ca dao'],
  ['Gió mùa thu mẹ ru con ngủ, năm canh chày thức đủ vừa năm.', 'ca dao'],
];
const wordCount = (s) => SPLIT(s).length;

function rng(seed) {   // mulberry32
  let a = (seed >>> 0) || 1;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const pick = (arr, n, seed, shuffle) => {
  const a = arr.slice();
  if (shuffle) { const r = rng(seed); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }
  return a.slice(0, n);
};

/** Topics [id, name, grades, kind]. kind: 'unit' = a letter / word repeated along the row; 'sentence' = a phrase written once per row. */
export const TOPICS = [
  ['big-letters', 'Tô chữ cái cỡ lớn (làm quen)', [0], 'big'],
  ['big-digits', 'Tô chữ số cỡ lớn (làm quen)', [0], 'big'],
  ['letters-easy', 'Chữ cái dễ viết trước', [0, 1], 'unit'],
  ['letters-vowel', 'Nguyên âm', [1, 2], 'unit'],
  ['letters-cons', 'Phụ âm', [1, 2], 'unit'],
  ['digits', 'Chữ số 0 – 9', [0, 1], 'unit'],
  ['name', 'Tô tên của bé', [0, 1, 2], 'name'],
  ['van', 'Vần', [1], 'unit'],
  ['words', 'Từ ngữ theo chủ đề', [1, 2], 'unit'],
  ['phrases', 'Câu ngắn', [1, 2], 'sentence'],
  ['saying-copy', 'Chính tả tập chép: tục ngữ, ca dao', [1, 2], 'sentence'],
  ['saying-dictate', 'Chính tả nghe – viết: tục ngữ, ca dao', [2], 'dictate'],
];
export const topicsFor = (grade) => TOPICS.filter((t) => t[2].includes(grade));
export const defaultTopics = (grade) => (grade === 0 ? ['big-letters', 'big-digits', 'name'] : grade === 1 ? ['letters-vowel', 'van', 'words', 'saying-copy'] : ['words', 'phrases', 'saying-copy', 'saying-dictate']);

const letterUnit = (c) => `${up(c)} ${c}`;
/** Items of one topic: {title, rows: [{unit?, text?}]} */
export function topicItems(id, o) {
  const n = o.count, seed = o.seed;
  switch (id) {
    case 'big-letters': return { title: 'Làm quen và tô chữ cái', items: pick(EASY, n, seed, false).map((c) => ({ units: [up(c), c] })) };
    case 'big-digits': return { title: 'Làm quen và tô chữ số', items: pick(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], n, seed, false).map((c) => ({ units: [c] })) };
    case 'letters-easy': return { title: 'Tô và viết các chữ cái', items: pick(EASY, n, seed, false).map((c) => ({ unit: letterUnit(c) })) };
    case 'letters-vowel': return { title: 'Tô và viết các nguyên âm', items: pick(VOWELS, n, seed, false).map((c) => ({ unit: letterUnit(c) })) };
    case 'letters-cons': return { title: 'Tô và viết các phụ âm', items: pick(CONS, n, seed, false).map((c) => ({ unit: letterUnit(c) })) };
    case 'digits': return { title: 'Tô và viết các chữ số', items: pick(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], n, seed, false).map((c) => ({ unit: c })) };
    case 'name': return { title: 'Tô tên của bé', items: [{ unit: (o.name || 'Bé Na').trim() || 'Bé Na', wide: true }] };
    case 'van': return { title: 'Tô và viết các vần', items: pick(VAN, n, seed, true).map((v) => ({ unit: v })) };
    case 'words': {
      const all = Object.entries(WORDS).flatMap(([topic, ws]) => ws.map((w) => ({ unit: w, topic })));
      const items = pick(all, n, seed, true);
      return { title: 'Tô và viết các từ', items };
    }
    case 'phrases': return { title: 'Tô và chép các câu', items: pick(PHRASES, Math.max(2, Math.ceil(n / 2)), seed, true).map((t) => ({ text: t })) };
    case 'saying-copy': case 'saying-dictate': {
      const pool = SAYINGS.filter(([t]) => o.grade >= 2 || wordCount(t) <= 8);
      const items = pick(pool, Math.max(2, Math.ceil(n / 2)), seed, true).map(([text, kind]) => ({ text, kind }));
      return { title: id === 'saying-copy' ? 'Chính tả: tập chép tục ngữ, ca dao' : 'Chính tả: nghe – viết tục ngữ, ca dao', items };
    }
    default: return { title: '', items: [] };
  }
}

/** A text line broken at its commas into lines that fit one row (sayings of 6-8 style break into two rows). */
export const breakLines = (text, maxChars) => {
  if (text.length <= maxChars) return [text];
  const parts = text.split(/(?<=,)\s+/);
  const lines = [];
  for (const p of parts) { if (lines.length && (lines[lines.length - 1] + ' ' + p).length <= maxChars) lines[lines.length - 1] += ' ' + p; else lines.push(p); }
  return lines;
};

const CM_PT = 482;   // text width of an A4 page with 2 cm margins, in points
const run = (text, font, pt, o = {}) => `<w:r><w:rPr><w:rFonts w:ascii="${esc(font)}" w:hAnsi="${esc(font)}" w:cs="${esc(font)}" w:eastAsia="${esc(font)}"/>${o.bold ? '<w:b/>' : ''}${o.color ? `<w:color w:val="${o.color}"/>` : ''}<w:sz w:val="${Math.round(pt * 2)}"/><w:szCs w:val="${Math.round(pt * 2)}"/></w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
const row = (text, font, pt, o = {}) => {
  const pic = o.image && o.image(text, font, pt, o);   // rendered as a picture: no font needs to be installed
  return para(pic || run(text, font, pt, o), { after: 0, keepNext: o.keepNext, jc: o.jc });
};
/** Inline picture run: img {rid, wPt, hPt}, id = unique drawing id. */
export const pictureRun = (img, id, alt = '') => { const cx = Math.round(img.wPt * 12700), cy = Math.round(img.hPt * 12700); return `<w:r><w:rPr><w:noProof/></w:rPr><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${id}" name="Dòng tập viết ${id}" descr="${esc(alt)}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${id}" name="${img.rid}.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${img.rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`; };
const plain = (text, o = {}) => `<w:r><w:rPr>${o.b ? '<w:b/>' : ''}${o.i ? '<w:i/>' : ''}${o.color ? `<w:color w:val="${o.color}"/>` : ''}<w:sz w:val="${o.sz || 26}"/></w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
const heading = (n, text, acc) => para(plain(`Bài ${n}. `, { b: true, color: acc, sz: 28 }) + plain(text, { b: true, sz: 28 }), { before: 200, after: 80, keepNext: true });

/**
 * options: grade (0|1|2), topics [ids], count (items per topic), seed, name, model (MODEL_FONTS id), trace (TRACE_FONTS id),
 * traceRows, blankRows, noModel (no solid model row: trace only), light (grey dots), imageRow(text, font, pt, o) -> {rid, wPt, hPt} (rows as pictures), fontPt (0 = by grade), accent ('RRGGBB'), school, title, answers (page with the dictation texts).
 * Returns {body, count, rows}.
 */
export function handwritingBody(options = {}) {
  const { grade = 1, topics = defaultTopics(grade), count = 4, seed = 1, name = '', traceRows = 2, blankRows = 1, noModel = false, light = false, imageRow = null, accent = '1D6FB8', school = '', answers = true } = options;
  const model = MODEL_FONTS.find((m) => m[0] === options.model) || MODEL_FONTS[0], trace = TRACE_FONTS.find((t) => t[0] === options.trace) || TRACE_FONTS[0];
  const basePt = options.fontPt || BASE_PT[grade] || 28;
  const fitPt = (chars, pt = basePt) => Math.max(14, Math.min(pt, Math.floor(1150 / Math.max(chars, 1))));   // a cursive character is ~0.42 em wide
  const capacity = (pt) => Math.floor(CM_PT / (pt * 0.43));
  let body = '', count_ = 0, rows = 0, n = 0;
  const dictations = [];
  const title = options.title || (grade === 0 ? 'PHIẾU TẬP TÔ – TẬP VIẾT' : 'PHIẾU TẬP VIẾT');
  if (school) body += para(plain(school, { b: true }), { after: 40 });
  body += para(plain(title, { b: true, color: accent, sz: 40 }), { jc: 'center', after: 60, pbdr: `<w:bottom w:val="single" w:sz="12" w:space="4" w:color="${accent}"/>` });
  body += para(plain(`Họ và tên: ${'.'.repeat(36)}   Lớp: ${'.'.repeat(10)}   Ngày: ${'.'.repeat(12)}`, { b: true }), { before: 100, after: 120, line: 360 });
  let drawId = 100;
  const image = imageRow ? (text, font, pt, o) => { const im = imageRow(text, font, pt, o); return im ? pictureRun(im, ++drawId, text.trim()) : null; } : null;
  const mrow = (text, pt) => row(text, model[2], pt, { bold: model[3], image });
  const trow = (text, pt) => row(text, trace[2], pt, { color: light ? '9A9A9A' : '', image });
  const blank = (pt) => row(' '.repeat(Math.max(4, capacity(pt) - 4)), trace[2], pt, { color: '9A9A9A', image });
  const traceN = (text, pt) => { const out = []; if (!noModel) out.push(mrow(text, pt)); for (let k = 0; k < traceRows + (noModel ? 1 : 0); k++) out.push(trow(text, pt)); return out; };
  const group = (rowsXml) => rowsXml.map((x, i) => (i < rowsXml.length - 1 ? x.replace('<w:pPr>', '<w:pPr><w:keepNext/>') : x)).join('');
  for (const id of topics) {
    const kind = (TOPICS.find((t) => t[0] === id) || [])[3];
    if (!kind) continue;
    const { title: ttl, items } = topicItems(id, { count, seed, name, grade });
    if (!items.length) continue;
    n++;
    body += heading(n, ttl, accent);
    if (kind === 'dictate') {
      items.forEach((it, k) => {
        const lines = breakLines(it.text, 34), pt = fitPt(Math.max(...lines.map((l) => l.length)) * 0.6);
        dictations.push(it);
        body += para(plain(`Câu ${k + 1}. `, { b: true, color: accent }) + plain(`(${it.kind}) Nghe cô đọc và viết vào các dòng kẻ.`, { i: true, color: '555555' }), { before: 80, after: 20, keepNext: true });
        body += group(Array.from({ length: lines.length + 1 }, () => blank(pt)));
        count_++; rows += lines.length + 1;
      });
      continue;
    }
    for (const it of items) {
      const out = [];
      if (kind === 'sentence') {
        const probe = fitPt(it.text.length), lines = breakLines(it.text, Math.floor(capacity(probe)));
        const pt = fitPt(Math.max(...lines.map((l) => l.length)));
        for (const l of lines) {
          out.push(...traceN(l, pt));
        }
        for (let k = 0; k < Math.max(blankRows, 1) * lines.length; k++) out.push(blank(pt));
      } else if (kind === 'big') {
        for (const unit of it.units) {
          const pt = options.fontPt || BIG_PT, reps = Math.max(1, Math.floor(capacity(pt) / (unit.length + 2)));
          const text = Array.from({ length: reps }, () => unit).join('  ');
          out.push(...traceN(text, pt));
          for (let k = 0; k < blankRows; k++) out.push(blank(pt));
        }
      } else {
        const unit = it.unit, pt = fitPt(unit.length + 1), cap = capacity(pt), reps = it.wide ? 1 : Math.max(1, Math.floor(cap / (unit.length + 2)));
        const text = Array.from({ length: reps }, () => unit).join('  ');
        out.push(...traceN(text, pt));
        for (let k = 0; k < blankRows; k++) out.push(blank(pt));
      }
      body += group(out);
      count_++; rows += out.length;
    }
  }
  body += para(`<w:r><w:rPr><w:i/><w:color w:val="666666"/><w:sz w:val="18"/></w:rPr><w:t xml:space="preserve">Gia sư AI • https://giasu.ai.vn • Phông chữ: HP001, UNI Tap Viet</w:t></w:r>`, { jc: 'right', before: 240, after: 0 });
  if (answers && dictations.length) {
    body += para(plain('BÀI ĐỌC CHO HỌC SINH VIẾT (dành cho giáo viên, phụ huynh)', { b: true, color: accent, sz: 30 }), { jc: 'center', pageBreakBefore: true, after: 120 });
    dictations.forEach((d, k) => { body += para(plain(`Câu ${k + 1}. `, { b: true }) + plain(d.text, { sz: 28 }) + plain(`  (${d.kind})`, { i: true, color: '666666' }), { after: 100, line: 360 }); });
  }
  return { body, count: count_, rows };
}
