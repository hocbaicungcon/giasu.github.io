// credit: giasu.ai.vn
// Dựng dữ liệu cho trang Luyện viết chữ Hán / chữ Nhật (assets/writing) từ kho "Kanji-HSK Database".
//   node scripts/import-writing-data.mjs "/đường/dẫn/Kanji-HSK Database"
// Nguồn: AnimCJK (nét chữ + từ điển, Arphic Public License; dẫn xuất từ Make Me a Hanzi), danh sách HSK 2012,
// kanji-data (cấp lớp, âm on/kun), chinese-vocabulary-audio (âm thanh các chữ/từ HSK 1–3).
// Kết quả được commit; chỉ chạy lại khi muốn cập nhật dữ liệu.
import fs from 'node:fs';
import path from 'node:path';

const DB = process.argv[2] || '/Users/phuongphan/Documents/Kanji-HSK Database';
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'assets', 'writing');
const read = file => fs.readFileSync(path.join(DB, file), 'utf8');
const lines = file => read(file).split('\n').filter(Boolean).map(line => JSON.parse(line));
const byChar = list => new Map(list.map(d => [d.character, d]));

const zhGraphics = byChar(lines('animCJK-master/graphicsZhHans.txt'));
const jaGraphics = byChar(lines('animCJK-master/graphicsJa.txt'));
const kanaGraphics = byChar(lines('animCJK-master/graphicsKana.txt'));
const zhDict = byChar(lines('animCJK-master/dictionaryZhHans.txt'));
const jaDict = byChar(lines('animCJK-master/dictionaryJa.txt'));
const kyouiku = JSON.parse(read('Kanji/kanji-data/kanji-kyouiku.json'));
const hwDir = path.join(DB, 'hanzi-writer/hanzi-writer-data/data');

// ---------- tiện ích ----------
const hex = text => Array.from(text).map(c => c.codePointAt(0).toString(16)).join('-');
const stripFreq = value => String(value).replace(/\(\d+\)$/, '');
const freqOf = value => Number(/\((\d+)\)$/.exec(String(value))?.[1] || 0);
const short = (text, n = 70) => { const t = String(text || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1).replace(/[;,\s]+\S*$/, '') + '…' : t; };

function strokeData(graphics, char) {
  const g = graphics.get(char);
  if (g) return { s: g.strokes, m: g.medians };
  const file = path.join(hwDir, char + '.json');                     // bộ phận không có trong AnimCJK (ví dụ 纟)
  if (fs.existsSync(file)) { const d = JSON.parse(fs.readFileSync(file, 'utf8')); return { s: d.strokes, m: d.medians }; }
  return null;
}

// Hiragana -> romaji (Hepburn) cho cách đọc kanji
const KANA = { あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o', か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko', さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so', た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to', な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no', は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho', ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo', や: 'ya', ゆ: 'yu', よ: 'yo', ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro', わ: 'wa', ゐ: 'i', ゑ: 'e', を: 'o', ん: 'n', が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go', ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo', だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do', ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo', ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po', ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o', ゃ: 'ya', ゅ: 'yu', ょ: 'yo', ゎ: 'wa', っ: '' };
const COMBO = { き: 'k', ぎ: 'g', し: 'sh', じ: 'j', ち: 'ch', ぢ: 'j', に: 'n', ひ: 'h', び: 'b', ぴ: 'p', み: 'm', り: 'r' };
const toHiragana = text => text.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
function romaji(text) {
  const t = toHiragana(text);
  let out = '';
  for (let i = 0; i < t.length; i++) {
    const c = t[i], next = t[i + 1];
    if (c === 'っ') { const r = KANA[next] || ''; out += r[0] === 'c' ? 't' : (r[0] || ''); continue; }
    if (c === 'ー') { out += out.slice(-1); continue; }
    if (next && 'ゃゅょ'.includes(next) && COMBO[c]) {
      const y = { ゃ: 'a', ゅ: 'u', ょ: 'o' }[next], base = COMBO[c];
      out += (['sh', 'ch', 'j'].includes(base) ? base : base + 'y') + y; i++; continue;
    }
    out += KANA[c] ?? c;
  }
  return out;
}
const readings = list => (list || []).map(r => r.replace(/^-|-$/g, '')).map(r => {
  const [stem, okuri] = r.split('.');
  const kana = okuri ? `${stem}(${okuri})` : stem;
  return { k: kana, r: okuri ? `${romaji(stem)}(${romaji(okuri)})` : romaji(stem) };
});

// ---------- nội dung tự biên soạn bằng tiếng Việt ----------
const STROKES = [
  { c: '一', name: 'Nét ngang (横 héng)', tip: 'Viết từ trái sang phải, hơi chếch lên một chút.' },
  { c: '丨', name: 'Nét sổ (竖 shù)', tip: 'Viết từ trên xuống dưới, thẳng.' },
  { c: '丿', name: 'Nét phẩy (撇 piě)', tip: 'Kéo từ phải trên xuống trái dưới, thon dần về cuối.' },
  { c: '丶', name: 'Nét chấm (点 diǎn)', tip: 'Chấm ngắn, ấn nhẹ rồi hơi lướt xuống phải.' },
  { c: '乀', name: 'Nét mác (捺 nà)', tip: 'Kéo từ trái trên xuống phải dưới, cuối nét bè ra.' },
  { c: '冫', name: 'Nét hất (提 tí)', tip: 'Nét hất đi lên về bên phải, nhấc bút nhẹ. Chữ này gồm một chấm và một hất.' },
  { c: '亅', name: 'Nét sổ móc (竖钩 shù gōu)', tip: 'Viết nét sổ rồi hất nhẹ sang trái ở cuối.' },
  { c: '乚', name: 'Nét sổ cong móc (竖弯钩 shù wān gōu)', tip: 'Sổ xuống, uốn sang phải rồi hất lên.' },
  { c: '𠃍', name: 'Nét ngang gập (横折 héng zhé)', tip: 'Viết ngang rồi gập xuống: nét hay gặp trong chữ 口, 日.' },
  { c: '十', name: 'Ngang và sổ giao nhau', tip: 'Viết ngang trước, sổ sau. Quy tắc: ngang trước sổ sau.' },
  { c: '人', name: 'Phẩy và mác', tip: 'Phẩy trước, mác sau. Quy tắc: phẩy trước mác sau.' },
  { c: '八', name: 'Phẩy và chấm mác', tip: 'Hai nét tách ra như hai chân, trái trước phải sau.' },
  { c: '大', name: 'Ngang, phẩy, mác', tip: 'Ngang trước, rồi phẩy, rồi mác. Trái trước phải sau, trên trước dưới sau.' },
  { c: '小', name: 'Sổ móc và hai chấm', tip: 'Sổ móc ở giữa trước, hai chấm hai bên sau.' },
  { c: '口', name: 'Khung vuông: sổ, ngang gập, ngang', tip: 'Ngoài trước trong sau, đóng khung sau cùng.' },
  { c: '山', name: 'Ba nét sổ trên một nét ngang', tip: 'Sổ giữa trước, rồi hai bên, ngang đáy cuối cùng.' }
];

// [chữ, Hán Việt, pinyin, nghĩa tiếng Việt, ghi chú]
const RADICALS = [
  ['一', 'nhất', 'yī', 'một', ''], ['丨', 'cổn', 'gǔn', 'nét sổ', ''], ['丶', 'chủ', 'zhǔ', 'chấm', ''], ['丿', 'phiệt', 'piě', 'nét phẩy', ''],
  ['人', 'nhân', 'rén', 'người', 'dạng đứng bên trái là 亻 (như 你, 他)'], ['亻', 'nhân đứng', 'dānrénpáng', 'người (dạng bên trái)', 'như 你 nǐ, 他 tā, 们 men'],
  ['儿', 'nhân', 'ér', 'người đi', 'như 先, 兄'], ['入', 'nhập', 'rù', 'vào', ''], ['八', 'bát', 'bā', 'tám, chia ra', 'như 分 fēn, 公 gōng'],
  ['冫', 'băng', 'bīng', 'băng, lạnh', 'như 冷 lěng, 冰 bīng'], ['刀', 'đao', 'dāo', 'dao', 'dạng bên phải là 刂 (如 到, 别)'], ['力', 'lực', 'lì', 'sức mạnh', 'như 男 nán, 动 dòng'],
  ['十', 'thập', 'shí', 'mười', ''], ['又', 'hựu', 'yòu', 'lại, tay phải', 'như 友 yǒu, 双 shuāng'], ['口', 'khẩu', 'kǒu', 'miệng', 'như 吃 chī, 喝 hē, 问 wèn'],
  ['囗', 'vi', 'wéi', 'vây quanh', 'như 国 guó, 四 sì'], ['土', 'thổ', 'tǔ', 'đất', 'như 地 dì, 坐 zuò'], ['士', 'sĩ', 'shì', 'học trò, binh sĩ', ''],
  ['大', 'đại', 'dà', 'to lớn', 'như 天 tiān, 太 tài'], ['女', 'nữ', 'nǚ', 'phụ nữ', 'như 妈 mā, 好 hǎo'], ['子', 'tử', 'zǐ', 'con', 'như 学 xué, 孩 hái'],
  ['宀', 'miên', 'mián', 'mái nhà', 'như 家 jiā, 室 shì'], ['寸', 'thốn', 'cùn', 'tấc, tay', 'như 对 duì, 寺 sì'], ['小', 'tiểu', 'xiǎo', 'nhỏ', 'như 少 shǎo, 尖 jiān'],
  ['尸', 'thi', 'shī', 'xác, thân người', 'như 屋 wū, 局 jú'], ['山', 'sơn', 'shān', 'núi', 'như 岁 suì, 岛 dǎo'], ['巾', 'cân', 'jīn', 'khăn', 'như 帽 mào, 常 cháng'],
  ['广', 'nghiễm', 'guǎng', 'mái nhà rộng', 'như 店 diàn, 床 chuáng'], ['彳', 'xích', 'chì', 'bước chân trái', 'như 很 hěn, 行 xíng'], ['心', 'tâm', 'xīn', 'tim, tâm', 'dạng bên trái là 忄 (như 快, 情)'],
  ['忄', 'tâm đứng', 'shùxīnpáng', 'tim (dạng bên trái)', 'như 快 kuài, 怕 pà'], ['戈', 'qua', 'gē', 'cây giáo', 'như 我 wǒ, 成 chéng'], ['手', 'thủ', 'shǒu', 'tay', 'dạng bên trái là 扌 (như 打, 找)'],
  ['扌', 'thủ (tài gảy)', 'tíshǒupáng', 'tay (dạng bên trái)', 'như 打 dǎ, 找 zhǎo'], ['攵', 'phộc', 'pū', 'đánh nhẹ', 'như 教 jiào, 放 fàng'], ['日', 'nhật', 'rì', 'mặt trời, ngày', 'như 明 míng, 时 shí'],
  ['月', 'nguyệt', 'yuè', 'mặt trăng, tháng', 'như 朋 péng, 有 yǒu'], ['木', 'mộc', 'mù', 'cây, gỗ', 'như 树 shù, 林 lín'], ['欠', 'khiếm', 'qiàn', 'thiếu, ngáp', 'như 歌 gē, 欢 huān'],
  ['止', 'chỉ', 'zhǐ', 'dừng lại', 'như 正 zhèng, 步 bù'], ['水', 'thủy', 'shuǐ', 'nước', 'dạng bên trái là 氵 (như 河, 酒)'], ['氵', 'thủy (ba chấm)', 'sāndiǎnshuǐ', 'nước (dạng bên trái)', 'như 河 hé, 酒 jiǔ, 洗 xǐ'],
  ['火', 'hỏa', 'huǒ', 'lửa', 'dạng bên dưới là 灬 (như 热, 点)'], ['灬', 'hỏa (bốn chấm)', 'sìdiǎnhuǒ', 'lửa (dạng bên dưới)', 'như 热 rè, 点 diǎn'], ['牛', 'ngưu', 'niú', 'con trâu, bò', 'như 物 wù'],
  ['犬', 'khuyển', 'quǎn', 'con chó', 'dạng bên trái là 犭 (như 猫, 狗)'], ['犭', 'khuyển (con chó)', 'fǎntiāofǎn', 'thú (dạng bên trái)', 'như 狗 gǒu, 猫 māo'], ['玉', 'ngọc', 'yù', 'ngọc', 'như 王, 现 xiàn'],
  ['田', 'điền', 'tián', 'ruộng', 'như 男 nán, 画 huà'], ['目', 'mục', 'mù', 'mắt', 'như 看 kàn, 睡 shuì'], ['石', 'thạch', 'shí', 'đá', 'như 碗 wǎn, 破 pò'],
  ['示', 'thị', 'shì', 'bày tỏ, thần linh', 'dạng bên trái là 礻 (như 礼, 福)'], ['禾', 'hòa', 'hé', 'cây lúa', 'như 秋 qiū, 种 zhòng'], ['穴', 'huyệt', 'xué', 'hang, lỗ', 'như 空 kōng, 穿 chuān'],
  ['竹', 'trúc', 'zhú', 'tre', 'như 笔 bǐ, 第 dì'], ['米', 'mễ', 'mǐ', 'gạo', 'như 粉 fěn'], ['纟', 'mịch (tơ)', 'jiǎosīpáng', 'sợi tơ (dạng bên trái)', 'như 红 hóng, 给 gěi, 经 jīng'],
  ['肉', 'nhục', 'ròu', 'thịt', 'dạng bên trái là 月 (như 脸, 脚)'], ['艹', 'thảo (đầu cỏ)', 'cǎozìtóu', 'cỏ, cây', 'như 花 huā, 茶 chá, 菜 cài'], ['虫', 'trùng', 'chóng', 'côn trùng', 'như 蛋 dàn'],
  ['衣', 'y', 'yī', 'áo', 'dạng bên trái là 衤 (như 裤, 衬)'], ['讠', 'ngôn (lời nói)', 'yánzìpáng', 'lời nói (dạng bên trái)', 'như 说 shuō, 请 qǐng, 谢 xiè'], ['贝', 'bối', 'bèi', 'vỏ sò, tiền của', 'như 买 mǎi, 货 huò'],
  ['足', 'túc', 'zú', 'chân', 'như 跑 pǎo, 跳 tiào'], ['车', 'xa', 'chē', 'xe', 'như 轮 lún, 转 zhuǎn'], ['辶', 'sước (đi)', 'zǒuzhīpáng', 'đi, di chuyển', 'như 这 zhè, 过 guò, 还 hái'],
  ['门', 'môn', 'mén', 'cửa', 'như 问 wèn, 间 jiān'], ['金', 'kim', 'jīn', 'vàng, kim loại', 'như 钱 qián, 银 yín'], ['雨', 'vũ', 'yǔ', 'mưa', 'như 雪 xuě, 云 yún'],
  ['食', 'thực', 'shí', 'ăn', 'như 饭 fàn, 饿 è'], ['马', 'mã', 'mǎ', 'con ngựa', 'như 骑 qí, 妈 mā'], ['鱼', 'ngư', 'yú', 'con cá', 'như 鲜 xiān'], ['鸟', 'điểu', 'niǎo', 'con chim', 'như 鸡 jī, 鸭 yā']
].map(([c, hv, py, vi, note]) => ({ c, hv, py, vi, note }));

const HIRAGANA_ROWS = ['あいうえお', 'かきくけこ', 'さしすせそ', 'たちつてと', 'なにぬねの', 'はひふへほ', 'まみむめも', 'やゆよ', 'らりるれろ', 'わをん'];
const HIRAGANA_EXTRA = ['がぎぐげご', 'ざじずぜぞ', 'だぢづでど', 'ばびぶべぼ', 'ぱぴぷぺぽ', 'ぁぃぅぇぉ', 'ゃゅょっゎ'];
const toKatakana = text => text.replace(/[ぁ-ゖ]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));

// ---------- âm thanh tiếng Trung (chữ và từ HSK 1–3) ----------
const AUDIO_DIR = path.join(DB, 'chinese-vocabulary-audio/audio_data');
const audioStats = { files: 0, bytes: 0 };
function copyAudio(text) {
  const src = path.join(AUDIO_DIR, `cmn-${text}.mp3`);
  if (!fs.existsSync(src)) return null;
  const id = hex(text);
  const dest = path.join(OUT, 'audio', 'zh', id + '.mp3');
  if (!fs.existsSync(dest)) { fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.copyFileSync(src, dest); audioStats.files++; audioStats.bytes += fs.statSync(dest).size; }
  return id;
}

// ---------- từ ví dụ HSK ----------
const wordsByLevel = {};
for (let level = 1; level <= 6; level++) {
  const file = `HSK-1-6/HSK 1-6 2012 Wordlist/HSK Official With Definitions 2012 L${level}.txt`;
  wordsByLevel[level] = read(file).replace(/^﻿/, '').split(/\r?\n/).filter(Boolean).map(line => {
    const [h, , , pinyin, meaning] = line.split('\t');
    return { h, p: pinyin, m: short(meaning, 50), lv: level };
  });
}
const wordsWith = new Map();
for (let level = 1; level <= 6; level++) for (const w of wordsByLevel[level]) for (const c of new Set(Array.from(w.h))) {
  if (!wordsWith.has(c)) wordsWith.set(c, []);
  wordsWith.get(c).push(w);
}

// ---------- dựng các cấp độ ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const index = { zh: [], ja: [] };
const missing = [];
function writeLevel(level, items, graphics, extraData = {}) {
  const data = {};
  const kept = [];
  for (const item of items) {
    const sd = strokeData(graphics, item.c);
    if (!sd) { missing.push(`${level.id}:${item.c}`); continue; }
    data[item.c] = sd;
    item.n = sd.s.length;
    kept.push(item);
  }
  const file = { ...level, items: kept, data, ...extraData };
  fs.writeFileSync(path.join(OUT, level.id + '.json'), JSON.stringify(file));
  index[level.lang].push({ id: level.id, title: level.title, desc: level.desc, kind: level.kind, count: kept.length, preview: kept.slice(0, 4).map(i => i.c) });
}

// --- tiếng Trung ---
writeLevel({ id: 'zh-basic', lang: 'zh', kind: 'strokes', title: 'Nét cơ bản', desc: 'Làm quen các nét ngang, sổ, phẩy, chấm, mác, hất, móc và quy tắc thứ tự nét.' },
  STROKES.map(s => ({ c: s.c, m: s.name, tip: s.tip })), zhGraphics);
writeLevel({ id: 'zh-radical', lang: 'zh', kind: 'radicals', title: 'Bộ thủ thường gặp', desc: 'Những bộ thủ xuất hiện nhiều nhất, kèm âm Hán Việt, pinyin và ví dụ.' },
  RADICALS.map(r => ({ c: r.c, hv: r.hv, p: r.py, m: r.vi, tip: r.note, a: copyAudio(r.c) })), zhGraphics);
for (let level = 1; level <= 6; level++) {
  const chars = [...zhDict.values()].filter(d => d.set?.includes('hsk' + level) && !d.set.some(s => /^hsk[1-6]$/.test(s) && s < 'hsk' + level))
    .map(d => ({ d, f: freqOf(d.pinyin?.[0]) })).sort((a, b) => b.f - a.f);
  const items = chars.map(({ d }) => {
    const examples = (wordsWith.get(d.character) || []).filter(w => w.h !== d.character).sort((a, b) => a.lv - b.lv || a.h.length - b.h.length).slice(0, 2);
    const item = { c: d.character, p: stripFreq(d.pinyin?.[0] || ''), m: short(d.definition), r: d.radical, w: examples.map(w => ({ h: w.h, p: w.p, m: w.m, a: level <= 3 ? copyAudio(w.h) : null })) };
    if (level <= 3) item.a = copyAudio(d.character);
    return item;
  });
  writeLevel({ id: 'zh-hsk' + level, lang: 'zh', kind: 'hanzi', title: 'HSK ' + level, desc: ['Những chữ đầu tiên và thông dụng nhất.', 'Chữ thường dùng trong giao tiếp hằng ngày.', 'Chữ cho giao tiếp tự tin hơn.', 'Chữ cho bài đọc và hội thoại dài.', 'Chữ cho văn bản phổ thông.', 'Chữ nâng cao, ít gặp hơn.'][level - 1] }, items, zhGraphics);
}

// --- tiếng Nhật ---
writeLevel({ id: 'ja-basic', lang: 'ja', kind: 'strokes', title: 'Nét cơ bản', desc: 'Các nét cơ bản và quy tắc thứ tự nét dùng chung cho kanji.' },
  STROKES.map(s => ({ c: s.c, m: s.name, tip: s.tip })), jaGraphics);
const kanaItem = (c, base) => ({ c, p: romaji(base), m: '' });
writeLevel({ id: 'ja-hiragana', lang: 'ja', kind: 'kana', title: 'Hiragana (46 chữ)', desc: 'Bảng chữ mềm: nền tảng đầu tiên của tiếng Nhật.' },
  HIRAGANA_ROWS.flatMap(r => Array.from(r)).map(c => kanaItem(c, c)), kanaGraphics);
writeLevel({ id: 'ja-katakana', lang: 'ja', kind: 'kana', title: 'Katakana (46 chữ)', desc: 'Bảng chữ cứng dùng cho từ mượn và tên nước ngoài.' },
  HIRAGANA_ROWS.flatMap(r => Array.from(r)).map(c => toKatakana(c)).map(c => kanaItem(c, c)), kanaGraphics);
writeLevel({ id: 'ja-kana-extra', lang: 'ja', kind: 'kana', title: 'Âm đục, bán đục, chữ nhỏ', desc: 'Hiragana có dấu (が, ぱ), chữ nhỏ (ゃ, っ) và katakana tương ứng.' },
  [...HIRAGANA_EXTRA.flatMap(r => Array.from(r)), ...HIRAGANA_EXTRA.flatMap(r => Array.from(r)).map(toKatakana)].map(c => kanaItem(c, c)), kanaGraphics);
writeLevel({ id: 'ja-radical', lang: 'ja', kind: 'radicals', title: 'Bộ thủ thường gặp', desc: 'Các bộ thủ giúp đoán nghĩa và nhớ kanji.' },
  RADICALS.filter(r => jaGraphics.has(r.c)).map(r => ({ c: r.c, hv: r.hv, p: r.py, m: r.vi, tip: r.note })), jaGraphics);
for (let grade = 1; grade <= 6; grade++) {
  const chars = Object.entries(kyouiku).filter(([, d]) => d.grade === grade).sort((a, b) => (a[1].freq || 9999) - (b[1].freq || 9999));
  const items = chars.map(([c, d]) => {
    const dict = jaDict.get(c);
    const on = readings(d.readings_on), kun = readings(d.readings_kun);
    return { c, m: short((d.meanings || []).filter(x => !/Radical \(no/.test(x)).slice(0, 2).join('; ') || dict?.definition), on, kun, r: dict?.radical, j: d.jlpt_new || null };
  });
  writeLevel({ id: 'ja-g' + grade, lang: 'ja', kind: 'kanji', title: 'Kanji lớp ' + grade, desc: ['80 kanji đầu tiên: số, thiên nhiên, cơ thể.', '160 kanji thông dụng của học sinh lớp 2.', '200 kanji lớp 3.', '200 kanji lớp 4.', '185 kanji lớp 5.', '181 kanji lớp 6.'][grade - 1] }, items, jaGraphics);
}

fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index));
const aplDir = path.join(DB, 'animCJK-master/licenses/APL/english');
fs.copyFileSync(fs.statSync(aplDir).isDirectory() ? path.join(aplDir, fs.readdirSync(aplDir)[0]) : aplDir, path.join(OUT, 'LICENSE-APL.txt'));
for (const level of [...index.zh, ...index.ja]) console.log(level.id.padEnd(14), String(level.count).padStart(5), (fs.statSync(path.join(OUT, level.id + '.json')).size / 1024).toFixed(0) + ' KB');
console.log('âm thanh:', audioStats.files, 'tệp', (audioStats.bytes / 1048576).toFixed(1) + ' MB');
if (missing.length) console.log('thiếu nét chữ:', missing.join(' '));
