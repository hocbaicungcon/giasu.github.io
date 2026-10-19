// Sinh 33 trò chơi PowerPoint (giasu.ai.vn) bằng pptxgenjs.
// Tương tác bằng liên kết nhảy slide (chạy ở chế độ Trình chiếu / F5).
const pptxgen = require('pptxgenjs');
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const OUT = process.argv[2] || path.join(__dirname, 'out');
fs.mkdirSync(OUT, { recursive: true });

const FONT = 'Arial';
const INK = '1F2937';
const W = 13.333;

// ---------- Ngân hàng câu hỏi mẫu (đáp án đúng ghi đầu tiên) ----------
const BANK = [
  ['Thủ đô của Việt Nam là gì?', 'Hà Nội', 'Huế', 'Đà Nẵng', 'TP. Hồ Chí Minh'],
  ['7 × 8 = ?', '56', '54', '48', '64'],
  ['Hành tinh nào gần Mặt Trời nhất?', 'Sao Thủy', 'Sao Kim', 'Trái Đất', 'Sao Hỏa'],
  ['Từ trái nghĩa với "chăm chỉ" là?', 'Lười biếng', 'Siêng năng', 'Cần cù', 'Chịu khó'],
  ['Nước sôi ở bao nhiêu độ C (điều kiện thường)?', '100°C', '90°C', '50°C', '0°C'],
  ['Con vật nào có chiếc vòi dài?', 'Voi', 'Hươu', 'Gấu', 'Khỉ'],
  ['Có 3 hộp, mỗi hộp 12 cái kẹo. Tất cả có bao nhiêu cái kẹo?', '36', '15', '24', '48'],
  ['Giữa quốc kỳ Việt Nam có hình gì?', 'Ngôi sao vàng năm cánh', 'Mặt trăng', 'Búa liềm', 'Bông hoa'],
  ['Một năm có mấy tháng?', '12', '10', '11', '13'],
  ['Con vật nào KHÔNG phải là loài chim?', 'Dơi', 'Én', 'Chim sẻ', 'Bồ câu'],
  ['Tìm x: x + 15 = 40. Vậy x = ?', '25', '55', '30', '35'],
  ['Từ nào viết đúng chính tả?', 'Chăm chỉ', 'Trăm chỉ', 'Chăm chĩ', 'Chăm trỉ'],
  ['Trái Đất quay quanh vật thể nào?', 'Mặt Trời', 'Mặt Trăng', 'Sao Hỏa', 'Sao Thổ'],
  ['Hình vuông có mấy cạnh bằng nhau?', '4', '2', '3', '5'],
  ['25 + 38 = ?', '63', '53', '62', '73'],
  ['Quả nào có màu da cam và chứa nhiều vitamin C?', 'Cam', 'Chuối', 'Nho', 'Dưa hấu'],
  ['Một tuần có mấy ngày?', '7', '5', '6', '8'],
  ['Vịnh Hạ Long thuộc tỉnh nào?', 'Quảng Ninh', 'Thanh Hóa', 'Nghệ An', 'Khánh Hòa'],
  ['Loài vật nào sống dưới nước?', 'Cá', 'Mèo', 'Gà', 'Bò'],
  ['100 − 37 = ?', '63', '73', '67', '57'],
  ['Từ nào là danh từ?', 'Cái bàn', 'Chạy', 'Đẹp', 'Nhanh'],
  ['Chủ tịch Hồ Chí Minh sinh năm nào?', '1890', '1911', '1945', '1900'],
  ['Chu vi hình vuông có cạnh 5 cm là?', '20 cm', '25 cm', '10 cm', '15 cm'],
  ['Ban ngày, ngôi sao nào chiếu sáng cho Trái Đất?', 'Mặt Trời', 'Sao Hôm', 'Sao Bắc Đẩu', 'Sao Hỏa'],
  ['Âm thanh KHÔNG thể truyền qua môi trường nào?', 'Chân không', 'Không khí', 'Nước', 'Gỗ'],
  ['9 × 6 = ?', '54', '56', '45', '63'],
  ['Tết Trung thu vào ngày nào của âm lịch?', '15 tháng 8', '15 tháng Giêng', '5 tháng 5', 'Mùng 1 tháng Giêng'],
  ['Từ đồng nghĩa với "to lớn" là?', 'Khổng lồ', 'Nhỏ bé', 'Tí hon', 'Bé xíu'],
  ['Một giờ có bao nhiêu phút?', '60', '100', '30', '24'],
  ['Cơ quan nào giúp ta hít thở?', 'Phổi', 'Tim', 'Dạ dày', 'Gan'],
  ['Số lớn nhất có hai chữ số là?', '99', '100', '90', '98'],
  ['Hình tam giác có mấy góc?', '3', '4', '2', '5'],
  ['Bài thơ "Tre Việt Nam" là của nhà thơ nào?', 'Nguyễn Duy', 'Tố Hữu', 'Xuân Quỳnh', 'Huy Cận'],
  ['1 km bằng bao nhiêu mét?', '1000 m', '100 m', '10 m', '10 000 m'],
  ['Động vật nào là loài ăn cỏ?', 'Trâu', 'Hổ', 'Sói', 'Cá sấu'],
  ['Thủ đô của Trung Quốc là thành phố nào?', 'Bắc Kinh', 'Thượng Hải', 'Hồng Kông', 'Quảng Châu'],
  ['Quả địa cầu có hình gì?', 'Hình cầu', 'Hình vuông', 'Hình tam giác', 'Hình trụ'],
  ['Số La Mã X bằng số nào?', '10', '5', '50', '100'],
  ['Mùa nào hoa mai, hoa đào nở rộ ở nước ta?', 'Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'],
  ['Có 45 quyển vở chia đều cho 5 bạn. Mỗi bạn được mấy quyển?', '9', '8', '10', '7'],
];

// n-ra câu hỏi thứ n; đáp án đúng đặt ở vị trí xoay vòng để không lộ quy luật
function getQ(n) {
  const b = BANK[((n % BANK.length) + BANK.length) % BANK.length];
  const correct = (n * 5 + 1) % 4;
  const wrong = b.slice(2);
  const opts = [];
  let wi = 0;
  for (let i = 0; i < 4; i++) opts.push(i === correct ? b[1] : wrong[wi++]);
  return { q: b[0], opts, correct };
}

const CROSS = [
  ['TRĂNG', 'Vật sáng tròn trên bầu trời đêm, gắn với Tết Trung thu.'],
  ['VOI', 'Con vật trên cạn to nhất, có vòi dài và đôi ngà.'],
  ['HÀNỘI', 'Thủ đô của nước Việt Nam.'],
  ['NƯỚC', 'Chất lỏng trong suốt, con người và cây cối đều cần để sống.'],
  ['BÚTCHÌ', 'Dụng cụ học sinh dùng để viết, có thể tẩy được bằng cục gôm.'],
  ['SÁCH', 'Người bạn của học sinh, có nhiều trang chữ và tranh vẽ.'],
  ['CẦUVỒNG', 'Dải bảy sắc màu xuất hiện trên trời sau cơn mưa.'],
];

// ---------- Bảng màu ----------
const PAL = {
  sea: { bg: '0B3C5D', c1: '1C7293', ac: 'FFC145' },
  forest: { bg: '1B4332', c1: '2D6A4F', ac: 'FFD166' },
  sunset: { bg: '7A1F3D', c1: 'B5446E', ac: 'FFB703' },
  night: { bg: '1B1B3A', c1: '3F3D8F', ac: 'F9C74F' },
  gold: { bg: '5C3D00', c1: '9A6700', ac: 'FFD23F' },
  candy: { bg: '4A148C', c1: '8E24AA', ac: 'FFEB3B' },
  ice: { bg: '12394D', c1: '2E86AB', ac: 'E0FBFC' },
  red: { bg: '8E0E00', c1: 'C62828', ac: 'FFD54F' },
  spooky: { bg: '1A1A1A', c1: 'D9560B', ac: 'FFB300' },
  sky: { bg: '0D47A1', c1: '1976D2', ac: 'FFEE58' },
  teal: { bg: '004D40', c1: '00796B', ac: 'FFCA28' },
};

// ---------- Danh sách 33 trò chơi ----------
// mech: grid | peek | wheel | ladder | cross | timer
const GAMES = [
  { f: 'lat-manh-ghep', t: 'Lật mảnh ghép', e: '🧩', cell: '🧩', mech: 'peek', pal: 'sea', peek: '🐘', peekName: 'Con voi', how: 'Chọn một mảnh ghép và trả lời câu hỏi. Đúng thì mảnh ghép mở ra. Đoán được bức tranh sớm nhất sẽ thắng.' },
  { f: 'o-cua-bi-mat', t: 'Ô cửa bí mật', e: '🚪', cell: '🚪', mech: 'grid', pal: 'night', how: 'Chọn một cánh cửa, trả lời đúng để mở cánh cửa nhận điểm thưởng.' },
  { f: 'vong-quay-may-man', t: 'Vòng quay may mắn', e: '🎡', cell: '🎡', mech: 'wheel', pal: 'candy', how: 'Bấm vào một ô trên vòng quay (nhắm mắt chọn hoặc dừng vòng quay), trả lời đúng để nhận điểm của ô đó.' },
  { f: 'nhanh-nhu-chop', t: 'Nhanh như chớp', e: '⚡', mech: 'ladder', L: 10, mode: 'over', pal: 'sky', lab: 'Bậc', how: 'Trả lời đúng liên tiếp để leo lên bậc cao nhất. Sai một câu là dừng cuộc chơi.' },
  { f: 'bat-buom', t: 'Bắt bướm', e: '🦋', cell: '🦋', mech: 'grid', pal: 'forest', how: 'Chọn chú bướm muốn bắt, trả lời đúng để đưa bướm về vợt của mình.' },
  { f: 'ai-len-cao-hon', t: 'Ai lên cao hơn', e: '🏔️', mech: 'ladder', L: 10, mode: 'retry', pal: 'ice', lab: 'Độ cao', how: 'Mỗi câu đúng đưa đội tiến thêm một nấc lên đỉnh núi. Sai thì thử lại.' },
  { f: 'dao-vang', t: 'Đào vàng', e: '⛏️', cell: '🪙', mech: 'grid', pal: 'gold', how: 'Chọn cục vàng để đào, trả lời đúng để kéo vàng về nhận điểm.' },
  { f: 'cau-ca', t: 'Câu cá', e: '🎣', cell: '🐟', mech: 'grid', pal: 'sea', how: 'Chọn chú cá muốn câu, trả lời đúng để bắt được cá.' },
  { f: 'co-ca-ngua', t: 'Cờ cá ngựa', e: '🐴', mech: 'ladder', L: 10, mode: 'retry', pal: 'forest', lab: 'Ô cờ', how: 'Trả lời đúng để tiến thêm một ô cờ về chuồng. Sai thì giữ nguyên chỗ và thử lại.' },
  { f: 'con-bo-tim-thuc-an', t: 'Con bọ tìm thức ăn', e: '🐞', cell: '🍃', mech: 'grid', pal: 'teal', how: 'Chọn chiếc lá, trả lời đúng để con bọ tìm được thức ăn.' },
  { f: 'doan-bong-con-vat', t: 'Đoán bóng con vật', e: '🦁', cell: '❓', mech: 'grid', pal: 'night', how: 'Chọn một ô bí ẩn, trả lời đúng để biết con vật đang ẩn mình.', reveal: ['🦁', '🐘', '🐒', '🐼', '🦒', '🐯', '🦊', '🐰', '🐸', '🐻', '🦓', '🐧'] },
  { f: 'dong-ho-bao-thuc', t: 'Đồng hồ báo thức', e: '⏰', mech: 'timer', T: 10, pal: 'red', how: 'Đọc câu hỏi rồi bấm đếm giờ. Hết 10 giây, đồng hồ báo thức reo và hiện đáp án.' },
  { f: 'dong-ho-cat', t: 'Đồng hồ cát', e: '⏳', mech: 'timer', T: 15, pal: 'gold', how: 'Đọc câu hỏi rồi bấm đếm giờ. Cát chảy hết (15 giây) là hết thời gian trả lời.' },
  { f: 'du-lich-cung-doraemon', t: 'Du lịch cùng chú mèo máy', e: '🚀', mech: 'ladder', L: 10, mode: 'retry', pal: 'sky', lab: 'Điểm đến', how: 'Trả lời đúng để chú mèo máy bay đến điểm đến tiếp theo trên hành trình khám phá thế giới.' },
  { f: 'giai-cuu-dai-duong', t: 'Giải cứu đại dương', e: '🐳', cell: '🐙', mech: 'grid', pal: 'sea', how: 'Mỗi sinh vật biển đang gặp nguy. Trả lời đúng để giải cứu chúng.' },
  { f: 'giup-qua-uong-nuoc', t: 'Giúp quạ uống nước', e: '🐦‍⬛', mech: 'ladder', L: 8, mode: 'retry', pal: 'teal', lab: 'Mực nước', how: 'Mỗi câu đúng quạ thả thêm một viên sỏi, nước dâng lên. Đủ cao thì quạ uống được nước.' },
  { f: 'hai-dua-hai-tao', t: 'Hái dừa – Hái táo', e: '🥥', cell: '🍎', mech: 'grid', pal: 'forest', how: 'Chọn một trái trên cây, trả lời đúng để hái trái về giỏ.' },
  { f: 'hai-loc-dau-xuan', t: 'Hái lộc đầu xuân', e: '🌸', cell: '🧧', mech: 'grid', pal: 'red', how: 'Chọn bao lì xì trên cành đào, trả lời đúng để nhận lộc đầu xuân.' },
  { f: 'hop-qua-bi-mat', t: 'Hộp quà bí mật', e: '🎁', cell: '🎁', mech: 'grid', pal: 'candy', how: 'Chọn hộp quà, trả lời đúng để mở quà bất ngờ bên trong.' },
  { f: 'hugo-giai-cuu-ban', t: 'Hugo giải cứu bạn', e: '🧗', mech: 'ladder', L: 10, mode: 'slip', pal: 'forest', lab: 'Chặng', how: 'Trả lời đúng để vượt qua từng chặng. Sai thì bị tụt lại chặng trước.' },
  { f: 'ngo-khong-that-gia', t: 'Ngộ Không thật giả', e: '🐒', cell: '🐒', mech: 'grid', pal: 'sunset', how: 'Chọn một chú khỉ, trả lời đúng để nhận ra Ngộ Không thật.' },
  { f: 'ngoi-sao-may-man', t: 'Ngôi sao may mắn', e: '⭐', cell: '⭐', mech: 'grid', pal: 'night', how: 'Chọn một ngôi sao, trả lời đúng để nhận điểm thưởng ẩn trong sao.' },
  { f: 'nho-cu-cai-nho-ca-rot', t: 'Nhổ củ cải – Nhổ cà rốt', e: '🥕', cell: '🥕', mech: 'grid', pal: 'sunset', how: 'Chọn một củ cà rốt, trả lời đúng để nhổ củ lên khỏi mặt đất.' },
  { f: 'ong-non-hoc-viec', t: 'Ong non học việc', e: '🐝', mech: 'ladder', L: 10, mode: 'retry', pal: 'gold', lab: 'Mật hoa', how: 'Mỗi câu đúng ong non thu thêm mật hoa về tổ. Đủ mười câu là ong thợ giỏi.' },
  { f: 'pacman-an-diem', t: 'Pacman ăn điểm', e: '👾', mech: 'ladder', L: 10, mode: 'retry', pal: 'night', lab: 'Điểm', how: 'Trả lời đúng để Pacman ăn thêm điểm trên đường đi.' },
  { f: 'qua-tao-doc-cua-phu-thuy', t: 'Quả táo độc của phù thủy', e: '🧙', cell: '🍎', mech: 'grid', pal: 'candy', how: 'Chọn một quả táo, trả lời đúng để tránh quả táo độc của phù thủy.' },
  { f: 'tang-bang-troi', t: 'Tảng băng trôi', e: '🧊', mech: 'ladder', L: 10, mode: 'slip', pal: 'ice', lab: 'Tảng băng', how: 'Nhảy qua từng tảng băng bằng câu trả lời đúng. Sai thì tụt về tảng băng trước.' },
  { f: 'thu-tai-hieu-biet', t: 'Thử tài hiểu biết', e: '🧠', mech: 'ladder', L: 10, mode: 'over', pal: 'night', lab: 'Câu', how: 'Trả lời liên tiếp 10 câu đố kiến thức tổng hợp. Sai là dừng cuộc chơi.' },
  { f: 'truy-tim-mat-ma', t: 'Truy tìm mật mã', e: '🕵️', mech: 'cross', rot: 3, pal: 'night', how: 'Giải từng gợi ý để tìm ra các từ khóa của mật mã. Bấm số để xem gợi ý.' },
  { f: 'ai-la-trieu-phu', t: 'Ai là triệu phú', e: '💰', mech: 'ladder', L: 15, mode: 'over', money: true, pal: 'night', how: 'Trả lời đúng 15 câu hỏi liên tiếp để trở thành triệu phú.' },
  { f: 'trick-or-treat', t: 'Trick or Treat', e: '🎃', cell: '🎃', mech: 'grid', pal: 'spooky', how: 'Chọn quả bí ngô: trả lời đúng thì được kẹo (Treat), sai thì bị trêu (Trick).' },
  { f: 'tro-choi-o-chu', t: 'Trò chơi ô chữ', e: '🔤', mech: 'cross', rot: 0, pal: 'sky', how: 'Bấm vào số của hàng ngang để xem gợi ý, đoán từ rồi bấm xem đáp án.' },
  { f: 'vuot-chuong-ngai-vat', t: 'Vượt chướng ngại vật', e: '🏃', mech: 'ladder', L: 10, mode: 'slip', pal: 'sunset', lab: 'Chướng ngại', how: 'Vượt qua từng chướng ngại vật bằng câu trả lời đúng. Sai thì lùi lại một chướng ngại.' },
];

const MONEY = ['200 nghìn', '400 nghìn', '600 nghìn', '1 triệu', '2 triệu', '3 triệu', '6 triệu', '10 triệu', '14 triệu', '22 triệu', '30 triệu', '40 triệu', '60 triệu', '85 triệu', '150 triệu'];

// ---------- Hàm dựng chung ----------
function btn(p, s, o) {
  s.addText(o.t, {
    x: o.x, y: o.y, w: o.w, h: o.h,
    shape: o.shape || p.ShapeType.roundRect, rectRadius: o.r == null ? 0.18 : o.r,
    fill: { color: o.fill }, color: o.color || 'FFFFFF', fontFace: FONT, fontSize: o.fs || 24,
    bold: o.bold !== false, align: o.align || 'center', valign: 'middle', margin: o.margin == null ? 0.1 : o.margin,
    hyperlink: o.to ? { slide: o.to, tooltip: o.tip || 'Bấm để chọn' } : undefined,
    isTextBox: true, line: o.line,
  });
}

function mk(p, th) {
  const s = p.addSlide();
  s.background = { color: th.bg };
  return s;
}

function titleSlide(p, g, th, startTo) {
  const s = mk(p, th);
  s.addText(g.e, { x: 0, y: 0.6, w: W, h: 1.9, fontSize: 110, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  s.addText(g.t.toUpperCase(), { x: 0.6, y: 2.5, w: W - 1.2, h: 1.1, fontSize: 48, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  s.addText('Cách chơi: ' + g.how, { x: 1.6, y: 3.7, w: W - 3.2, h: 1.1, fontSize: 18, color: 'E5E7EB', align: 'center', valign: 'top', fontFace: FONT, isTextBox: true });
  btn(p, s, { t: '▶  BẮT ĐẦU', x: (W - 3.6) / 2, y: 5.2, w: 3.6, h: 1.0, fill: th.ac, color: INK, fs: 30, to: startTo, tip: 'Bắt đầu chơi' });
  s.addText('Trình chiếu (F5) để chơi · Sửa câu hỏi trực tiếp trên các slide · giasu.ai.vn', { x: 0.6, y: 6.7, w: W - 1.2, h: 0.4, fontSize: 12, color: 'CBD5E1', align: 'center', fontFace: FONT, isTextBox: true });
  s.addNotes('Trình chiếu ở chế độ Slide Show (F5). Các nút bấm hoạt động bằng liên kết nhảy slide. Thầy cô sửa nội dung câu hỏi và đáp án trực tiếp trên từng slide câu hỏi; muốn đổi đáp án đúng thì đổi lại liên kết của nút (Chèn > Liên kết > Đặt trong tài liệu này).');
  return s;
}

// Slide câu hỏi 4 đáp án; area.qw = chiều rộng vùng câu hỏi (ladder hẹp hơn)
function qSlide(p, th, o) {
  const s = mk(p, th);
  const x0 = o.x0 == null ? 0.7 : o.x0, qw = o.qw || W - 1.4;
  if (o.tag) s.addText(o.tag, { x: x0, y: 0.25, w: qw, h: 0.5, fontSize: 18, bold: true, color: th.ac, fontFace: FONT, margin: 0, isTextBox: true });
  s.addText(o.q, { x: x0, y: 0.85, w: qw, h: 2.3, shape: p.ShapeType.roundRect, rectRadius: 0.2, fill: { color: 'FFFFFF' }, color: INK, fontSize: o.qfs || 30, bold: true, align: 'center', valign: 'middle', fontFace: FONT, margin: 0.25, isTextBox: true });
  const gap = 0.3, bw = (qw - gap) / 2, bh = 1.45, y0 = 3.5;
  o.opts.forEach((t, i) => {
    const x = x0 + (i % 2) * (bw + gap), y = y0 + Math.floor(i / 2) * (bh + gap);
    btn(p, s, { t: 'ABCD'[i] + '.  ' + t, x, y, w: bw, h: bh, fill: th.c1, fs: o.ofs || 26, align: 'left', margin: 0.3, to: i === o.correct ? o.toOk : o.toBad(i), tip: 'Chọn đáp án ' + 'ABCD'[i], line: { color: 'FFFFFF', width: 1.5 } });
  });
  return s;
}

function resSlide(p, th, o) {
  const s = mk(p, th);
  s.addText(o.emoji, { x: 0, y: 0.6, w: W, h: 1.9, fontSize: 100, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  s.addText(o.title, { x: 0.6, y: 2.5, w: W - 1.2, h: 1.0, fontSize: 44, bold: true, color: o.ok ? th.ac : 'FFFFFF', align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  if (o.sub) s.addText(o.sub, { x: 1.2, y: 3.6, w: W - 2.4, h: 1.2, fontSize: 24, color: 'FFFFFF', align: 'center', valign: 'top', fontFace: FONT, isTextBox: true });
  const n = o.buttons.length, bw = 3.8, gap = 0.4, tot = n * bw + (n - 1) * gap;
  o.buttons.forEach((b, i) => btn(p, s, { t: b.t, x: (W - tot) / 2 + i * (bw + gap), y: 5.3, w: bw, h: 1.0, fill: b.primary ? th.ac : th.c1, color: b.primary ? INK : 'FFFFFF', fs: 24, to: b.to, line: b.primary ? undefined : { color: 'FFFFFF', width: 1.5 } }));
  return s;
}

function check(p, expected) {
  const got = p.slides.length;
  if (got !== expected) throw new Error(`Số slide lệch: đang ${got}, kỳ vọng ${expected}`);
}

// ---------- Cơ chế 1: lưới ô (grid / peek / wheel) ----------
const PTS = [10, 10, 20, 10, 20, 10, 30, 10, 20, 10, 30, 20];
function buildGrid(p, g, th, qoff) {
  const n = g.mech === 'wheel' ? 8 : 12;
  const wheelPts = [10, 20, 30, 10, 50, 20, 40, 10];
  const pts = (i) => (g.mech === 'wheel' ? wheelPts[i] : PTS[i]);
  const qS = (i) => 3 + 3 * i, okS = (i) => 4 + 3 * i, badS = (i) => 5 + 3 * i;
  const revealS = 3 + 3 * n;
  titleSlide(p, g, th, 2);

  // Bảng chọn ô
  const b = mk(p, th);
  b.addText(g.t.toUpperCase(), { x: 0.6, y: 0.25, w: W - 1.2, h: 0.8, fontSize: 32, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  const PK = { x: 3.87, y: 1.5, w: 5.6, h: 4.2 };
  if (g.mech === 'peek') {
    drawPeekArea(p, b, th, g, PK, null, n);
    btn(p, b, { t: '🔍  Đoán tranh', x: (W - 3.6) / 2, y: 6.1, w: 3.6, h: 0.95, fill: th.ac, color: INK, fs: 26, to: revealS });
  } else if (g.mech === 'wheel') {
    drawWheel(p, b, th, wheelPts, (i) => qS(i));
  } else {
    const cols = 4, cw = 2.6, ch = 1.55, gap = 0.25;
    const x0 = (W - (cols * cw + (cols - 1) * gap)) / 2, y0 = 1.4;
    for (let i = 0; i < n; i++) {
      const x = x0 + (i % cols) * (cw + gap), y = y0 + Math.floor(i / cols) * (ch + gap);
      btn(p, b, {
        t: [{ text: g.cell, options: { fontSize: 40, breakLine: true } }, { text: String(i + 1), options: { fontSize: 24, bold: true } }],
        x, y, w: cw, h: ch, fill: th.c1, fs: 24, to: qS(i), tip: 'Chọn ô ' + (i + 1), line: { color: 'FFFFFF', width: 1.5 },
      });
    }
  }

  for (let i = 0; i < n; i++) {
    const { q, opts, correct } = getQ(qoff + i);
    const tag = (g.mech === 'wheel' ? `Ô ${pts(i)} điểm` : `Ô số ${i + 1}`) + (g.mech === 'wheel' ? '' : ` · ${pts(i)} điểm`);
    qSlide(p, th, { tag, q, opts, correct, toOk: okS(i), toBad: () => badS(i) });
    const okBtns = [{ t: 'Chọn ô khác', to: 2, primary: true }];
    let sub = `+${pts(i)} điểm cho đội của em`, emoji = '🎉', title = 'Chính xác!';
    if (g.mech === 'peek') {
      const s = mk(p, th);
      s.addText(`Chính xác! Mảnh ghép số ${i + 1} đã mở. Đoán xem đây là gì?`, { x: 0.6, y: 0.3, w: W - 1.2, h: 0.9, fontSize: 28, bold: true, color: th.ac, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
      drawPeekArea(p, s, th, g, PK, i, n);
      btn(p, s, { t: 'Chọn ô khác', x: 2.3, y: 6.1, w: 3.8, h: 0.95, fill: th.ac, color: INK, fs: 24, to: 2 });
      btn(p, s, { t: '🔍  Đoán tranh', x: 7.2, y: 6.1, w: 3.8, h: 0.95, fill: th.c1, fs: 24, to: revealS, line: { color: 'FFFFFF', width: 1.5 } });
    } else {
      if (g.reveal) { emoji = g.reveal[i % g.reveal.length]; title = 'Chính xác! Đó là ' + animalName(emoji); }
      resSlide(p, th, { ok: true, emoji, title, sub, buttons: okBtns });
    }
    resSlide(p, th, { ok: false, emoji: '❌', title: 'Chưa đúng rồi!', sub: `Đáp án đúng: ${'ABCD'[correct]}. ${opts[correct]}`, buttons: [{ t: 'Chọn ô khác', to: 2, primary: true }] });
  }
  if (g.mech === 'peek') {
    const s = mk(p, th);
    s.addText(g.peek, { x: 0, y: 0.5, w: W, h: 4.6, fontSize: 260, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
    s.addText('Đáp án: ' + g.peekName, { x: 0.6, y: 5.0, w: W - 1.2, h: 0.9, fontSize: 40, bold: true, color: th.ac, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
    btn(p, s, { t: 'Chơi lại', x: (W - 3.6) / 2, y: 6.1, w: 3.6, h: 0.95, fill: th.c1, fs: 26, to: 2, line: { color: 'FFFFFF', width: 1.5 } });
  }
  check(p, g.mech === 'peek' ? revealS : 2 + 3 * n);
}

function animalName(e) {
  return { '🦁': 'sư tử', '🐘': 'con voi', '🐒': 'con khỉ', '🐼': 'gấu trúc', '🦒': 'hươu cao cổ', '🐯': 'con hổ', '🦊': 'con cáo', '🐰': 'con thỏ', '🐸': 'con ếch', '🐻': 'con gấu', '🦓': 'ngựa vằn', '🐧': 'chim cánh cụt' }[e] || '';
}

function drawPeekArea(p, s, th, g, A, openIdx, n) {
  s.addShape(p.ShapeType.roundRect, { x: A.x, y: A.y, w: A.w, h: A.h, fill: { color: 'FFFFFF' }, rectRadius: 0.1 });
  s.addText(g.peek, { x: A.x, y: A.y, w: A.w, h: A.h, fontSize: 250, align: 'center', valign: 'middle', fontFace: FONT, margin: 0, isTextBox: true });
  const cols = 4, rows = 3, gap = 0.04, tw = (A.w - gap * (cols - 1)) / cols, tH = (A.h - gap * (rows - 1)) / rows;
  for (let i = 0; i < n; i++) {
    if (i === openIdx) continue;
    const x = A.x + (i % cols) * (tw + gap), y = A.y + Math.floor(i / cols) * (tH + gap);
    if (openIdx == null) btn(p, s, { t: String(i + 1), x, y, w: tw, h: tH, fill: th.c1, fs: 30, r: 0.05, to: 3 + 3 * i, line: { color: 'FFFFFF', width: 1 } });
    else btn(p, s, { t: String(i + 1), x, y, w: tw, h: tH, fill: th.c1, fs: 30, r: 0.05, line: { color: 'FFFFFF', width: 1 } });
  }
}

function drawWheel(p, s, th, pts, qSlideOf) {
  const cx = W / 2, cy = 4.4, R = 2.7, n = pts.length, step = 360 / n;
  const cols = [th.c1, 'F9C74F', 'EF476F', '06D6A0', '118AB2', 'FF9F1C', '9B5DE5', '43AA8B'];
  for (let i = 0; i < n; i++) {
    // đoạn thứ i có tâm ở góc (i*step) tính từ đỉnh, theo chiều kim đồng hồ
    const a1 = (((i * step - 90 - step / 2) % 360) + 360) % 360, a2 = (a1 + step) % 360;
    s.addShape(p.ShapeType.pie, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, angleRange: [a1, a2], fill: { color: cols[i % cols.length] }, line: { color: 'FFFFFF', width: 2 }, hyperlink: { slide: qSlideOf(i), tooltip: `Ô ${pts[i]} điểm` } });
    const mid = ((i * step - 90) * Math.PI) / 180, rr = R * 0.68;
    s.addText(String(pts[i]), { x: cx + rr * Math.cos(mid) - 0.5, y: cy + rr * Math.sin(mid) - 0.3, w: 1.0, h: 0.6, fontSize: 26, bold: true, color: i % 8 === 1 ? INK : 'FFFFFF', align: 'center', valign: 'middle', fontFace: FONT, margin: 0, isTextBox: true, hyperlink: { slide: qSlideOf(i), tooltip: `Ô ${pts[i]} điểm` } });
  }
  s.addShape(p.ShapeType.ellipse, { x: cx - 0.55, y: cy - 0.55, w: 1.1, h: 1.1, fill: { color: 'FFFFFF' }, line: { color: th.ac, width: 4 } });
  s.addText('▼', { x: cx - 0.5, y: cy - R - 0.72, w: 1.0, h: 0.7, fontSize: 36, color: th.ac, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  s.addText('Bấm vào một ô trên vòng quay', { x: 0.4, y: 1.5, w: 3.4, h: 1.2, fontSize: 18, color: 'E5E7EB', fontFace: FONT, valign: 'top', isTextBox: true });
}

// ---------- Cơ chế 2: bậc thang (ladder) ----------
function buildLadder(p, g, th, qoff) {
  const L = g.L, QS = (k) => 2 + k, WIN = 2 + L, FAIL = (k) => 3 + L + k, OKS = (k) => 3 + 2 * L + k;
  titleSlide(p, g, th, QS(0));
  const label = (k) => (g.money ? MONEY[k] : `${g.lab} ${k + 1}`);
  for (let k = 0; k < L; k++) {
    const { q, opts, correct } = getQ(qoff + k);
    const s = qSlide(p, th, { tag: `Câu ${k + 1}/${L}` + (g.money ? ` · ${MONEY[k]}` : ''), q, opts, correct, x0: 0.5, qw: 9.4, qfs: 28, ofs: 24, toOk: OKS(k), toBad: () => FAIL(k) });
    // thanh bậc thang bên phải
    const top = 0.4, avail = 6.7, rh = avail / L, bx = 10.2, bw = 2.6;
    for (let j = L - 1; j >= 0; j--) {
      const y = top + (L - 1 - j) * rh;
      const cur = j === k, done = j < k;
      s.addText(`${j + 1}   ${label(j)}${cur ? '  ' + (g.money ? '' : g.e) : ''}`, {
        x: bx, y: y + 0.03, w: bw, h: rh - 0.06, shape: p.ShapeType.roundRect, rectRadius: 0.08,
        fill: cur ? { color: th.ac } : done ? { color: th.c1 } : { color: 'FFFFFF', transparency: 88 },
        color: cur ? INK : 'FFFFFF', bold: cur, fontSize: L > 10 ? 13 : 16, align: 'left', valign: 'middle', margin: 0.12, fontFace: FONT, isTextBox: true,
      });
    }
  }
  resSlide(p, th, { ok: true, emoji: '🏆', title: 'Chiến thắng!', sub: g.money ? 'Chúc mừng! Em đã trở thành triệu phú!' : `Em đã hoàn thành cả ${L} bậc!`, buttons: [{ t: 'Chơi lại', to: 2, primary: true }] });
  for (let k = 0; k < L; k++) {
    const { opts, correct } = getQ(qoff + k);
    const ans = `Đáp án đúng: ${'ABCD'[correct]}. ${opts[correct]}`;
    if (g.mode === 'over') resSlide(p, th, { ok: false, emoji: '😢', title: g.money ? `Rất tiếc! Em dừng ở câu ${k + 1}` : `Dừng lại ở bậc ${k}`, sub: ans, buttons: [{ t: 'Chơi lại', to: 2, primary: true }] });
    else if (g.mode === 'retry') resSlide(p, th, { ok: false, emoji: '🙈', title: 'Chưa đúng, thử lại nhé!', sub: 'Đội khác có thể gợi ý. Bấm để trả lời lại.', buttons: [{ t: 'Trả lời lại', to: QS(k), primary: true }] });
    else resSlide(p, th, { ok: false, emoji: '💦', title: 'Ôi, bị tụt lại rồi!', sub: ans, buttons: [{ t: k === 0 ? 'Làm lại câu 1' : 'Về bậc trước', to: QS(Math.max(k - 1, 0)), primary: true }] });
  }
  for (let k = 0; k < L; k++) {
    const last = k === L - 1;
    resSlide(p, th, { ok: true, emoji: '🎉', title: 'Chính xác!', sub: g.money ? `Em có ${MONEY[k]} đồng` : `Em đã lên ${label(k).toLowerCase()} (${k + 1}/${L})`, buttons: [{ t: last ? 'Nhận chiến thắng' : 'Câu tiếp theo', to: last ? WIN : QS(k + 1), primary: true }] });
  }
  check(p, 3 * L + 2);
}

// ---------- Cơ chế 3: ô chữ ----------
function boxes(p, s, th, word, x, y, size, filled) {
  const chars = Array.from(word.normalize('NFC'));
  chars.forEach((c, i) => s.addText(filled ? c : '', { x: x + i * (size + 0.06), y, w: size, h: size, shape: p.ShapeType.roundRect, rectRadius: 0.06, fill: { color: 'FFFFFF' }, color: INK, fontSize: size > 0.8 ? 36 : 26, bold: true, align: 'center', valign: 'middle', margin: 0, fontFace: FONT, isTextBox: true, line: { color: th.ac, width: 2 } }));
}
function buildCross(p, g, th) {
  const words = CROSS.map((_, i) => CROSS[(i + (g.rot || 0)) % CROSS.length]);
  const N = words.length, CL = (i) => 3 + 2 * i, AN = (i) => 4 + 2 * i;
  titleSlide(p, g, th, 2);
  const b = mk(p, th);
  b.addText(g.t.toUpperCase(), { x: 0.6, y: 0.25, w: W - 1.2, h: 0.8, fontSize: 32, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
  const rh = 0.74, y0 = 1.3, size = 0.64;
  words.forEach(([w], i) => {
    const y = y0 + i * rh;
    btn(p, b, { t: String(i + 1), x: 2.9, y, w: size, h: size, fill: th.ac, color: INK, fs: 24, to: CL(i), tip: 'Xem gợi ý hàng ' + (i + 1), r: 0.32 });
    boxes(p, b, th, w, 3.76, y, size, false);
    b.addText(`${Array.from(w).length} chữ cái`, { x: 3.76 + 8 * (size + 0.06), y, w: 2.0, h: size, fontSize: 14, color: 'CBD5E1', valign: 'middle', fontFace: FONT, margin: 0, isTextBox: true });
  });
  words.forEach(([w, clue], i) => {
    const c = mk(p, th);
    c.addText(`Hàng ngang số ${i + 1} · ${Array.from(w).length} chữ cái`, { x: 0.7, y: 0.4, w: W - 1.4, h: 0.6, fontSize: 22, bold: true, color: th.ac, fontFace: FONT, margin: 0, isTextBox: true });
    c.addText(clue, { x: 0.7, y: 1.2, w: W - 1.4, h: 2.4, shape: p.ShapeType.roundRect, rectRadius: 0.2, fill: { color: 'FFFFFF' }, color: INK, fontSize: 32, bold: true, align: 'center', valign: 'middle', fontFace: FONT, margin: 0.3, isTextBox: true });
    boxes(p, c, th, w, (W - Array.from(w).length * 0.96) / 2, 4.0, 0.9, false);
    btn(p, c, { t: 'Xem đáp án', x: 2.3, y: 5.7, w: 3.8, h: 0.95, fill: th.ac, color: INK, fs: 24, to: AN(i) });
    btn(p, c, { t: 'Về ô chữ', x: 7.2, y: 5.7, w: 3.8, h: 0.95, fill: th.c1, fs: 24, to: 2, line: { color: 'FFFFFF', width: 1.5 } });
    const a = mk(p, th);
    a.addText(`Hàng ngang số ${i + 1}: đáp án`, { x: 0.7, y: 0.4, w: W - 1.4, h: 0.6, fontSize: 22, bold: true, color: th.ac, fontFace: FONT, margin: 0, isTextBox: true });
    a.addText('🎉', { x: 0, y: 1.0, w: W, h: 1.9, fontSize: 90, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
    boxes(p, a, th, w, (W - Array.from(w).length * 0.96) / 2, 3.2, 0.9, true);
    btn(p, a, { t: 'Về ô chữ', x: (W - 3.8) / 2, y: 5.2, w: 3.8, h: 0.95, fill: th.ac, color: INK, fs: 24, to: 2 });
  });
  check(p, 2 + 2 * N);
}

// ---------- Cơ chế 4: đếm giờ tự động ----------
function buildTimer(p, g, th, qoff, timers) {
  const T = g.T, Qn = 5, B = 2 + T;
  const qS = (j) => 2 + B * j, cd = (j, t) => 3 + B * j + t, up = (j) => 3 + B * j + T, END = 2 + B * Qn;
  titleSlide(p, g, th, 2);
  for (let j = 0; j < Qn; j++) {
    const { q, opts, correct } = getQ(qoff + j);
    const s = mk(p, th);
    s.addText(`Câu ${j + 1}/${Qn}`, { x: 0.7, y: 0.25, w: 6, h: 0.5, fontSize: 18, bold: true, color: th.ac, fontFace: FONT, margin: 0, isTextBox: true });
    s.addText(q, { x: 0.7, y: 0.85, w: W - 1.4, h: 2.3, shape: p.ShapeType.roundRect, rectRadius: 0.2, fill: { color: 'FFFFFF' }, color: INK, fontSize: 32, bold: true, align: 'center', valign: 'middle', fontFace: FONT, margin: 0.25, isTextBox: true });
    opts.forEach((t, i) => s.addText('ABCD'[i] + '.  ' + t, { x: 0.7 + (i % 2) * 6.1, y: 3.45 + Math.floor(i / 2) * 1.0, w: 5.8, h: 0.85, shape: p.ShapeType.roundRect, rectRadius: 0.15, fill: { color: th.c1 }, color: 'FFFFFF', fontSize: 24, bold: true, align: 'left', valign: 'middle', margin: 0.25, fontFace: FONT, line: { color: 'FFFFFF', width: 1.5 }, isTextBox: true }));
    btn(p, s, { t: `${g.e}  Bắt đầu đếm giờ (${T} giây)`, x: (W - 6.4) / 2, y: 5.8, w: 6.4, h: 1.0, fill: th.ac, color: INK, fs: 26, to: cd(j, 0) });
    for (let t = 0; t < T; t++) {
      const c = mk(p, th);
      c.addText(q, { x: 0.7, y: 0.3, w: W - 1.4, h: 1.4, fontSize: 22, color: 'E5E7EB', align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
      c.addShape(p.ShapeType.ellipse, { x: (W - 3.6) / 2, y: 2.0, w: 3.6, h: 3.6, fill: { color: t >= T - 3 ? 'C62828' : th.c1 }, line: { color: th.ac, width: 6 } });
      c.addText(String(T - t), { x: (W - 3.6) / 2, y: 2.0, w: 3.6, h: 3.6, fontSize: 130, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: FONT, margin: 0, isTextBox: true });
      c.addText(g.e, { x: 1.2, y: 3.2, w: 1.8, h: 1.4, fontSize: 70, align: 'center', valign: 'middle', fontFace: FONT, isTextBox: true });
      c.addText('Slide tự chuyển sau 1 giây khi đang trình chiếu', { x: 0.7, y: 6.6, w: W - 1.4, h: 0.4, fontSize: 12, color: 'CBD5E1', align: 'center', fontFace: FONT, isTextBox: true });
      timers.push(cd(j, t));
    }
    resSlide(p, th, { ok: true, emoji: g.e, title: 'Hết giờ!', sub: `Đáp án đúng: ${'ABCD'[correct]}. ${opts[correct]}`, buttons: [{ t: j === Qn - 1 ? 'Kết thúc' : 'Câu tiếp theo', to: j === Qn - 1 ? END : qS(j + 1), primary: true }] });
  }
  resSlide(p, th, { ok: true, emoji: '🏆', title: 'Hoàn thành tất cả các câu hỏi!', buttons: [{ t: 'Chơi lại', to: 2, primary: true }] });
  check(p, END);
}

// ---------- Chạy ----------
// Hậu xử lý: bỏ liên kết cấp chữ (làm chữ bị gạch chân/đổi màu), giữ liên kết cấp hình; thêm chuyển slide tự động cho slide đếm giờ
async function postProcess(file, nums) {
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  const names = Object.keys(zip.files).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n));
  for (const f of names) {
    let x = await zip.file(f).async('string');
    x = x.replace(/<a:hlinkClick(?![^>]*\/>)[^>]*>[\s\S]*?<\/a:hlinkClick>/g, '');
    const n = Number(f.match(/slide(\d+)\.xml/)[1]);
    if (nums.includes(n)) {
      if (!x.includes('</p:clrMapOvr>')) throw new Error('Không tìm thấy clrMapOvr ở ' + f);
      x = x.replace('</p:clrMapOvr>', '</p:clrMapOvr><p:transition spd="fast" advClick="0" advTm="1000"/>');
    }
    zip.file(f, x);
  }
  fs.writeFileSync(file, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
}

(async () => {
  const only = process.argv[3];
  for (let gi = 0; gi < GAMES.length; gi++) {
    const g = GAMES[gi];
    if (only && g.f !== only) continue;
    const th = PAL[g.pal];
    const p = new pptxgen();
    p.layout = 'LAYOUT_WIDE';
    p.title = g.t; p.author = 'giasu.ai.vn'; p.subject = 'Trò chơi PowerPoint học tập';
    const timers = [];
    const qoff = gi * 7;
    if (g.mech === 'grid' || g.mech === 'peek' || g.mech === 'wheel') buildGrid(p, g, th, qoff);
    else if (g.mech === 'ladder') buildLadder(p, g, th, qoff);
    else if (g.mech === 'cross') buildCross(p, g, th);
    else if (g.mech === 'timer') buildTimer(p, g, th, qoff, timers);
    const file = path.join(OUT, `${g.f}-giasu.ai.vn.pptx`);
    await p.writeFile({ fileName: file });
    await postProcess(file, timers);
    console.log('OK', path.basename(file), p.slides.length, 'slide');
  }
  fs.writeFileSync(path.join(OUT, 'games.json'), JSON.stringify(GAMES.map((g) => ({ f: g.f, t: g.t, how: g.how, e: g.e, mech: g.mech })), null, 1));
})().catch((e) => { console.error(e); process.exit(1); });
