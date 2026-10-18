// credit: giasu.ai.vn
// Nội dung và dữ liệu SEO của nhóm trang Luyện tập: trang tổng quan, phiếu bài tập, game, luyện viết chữ Hán/Nhật.
// Mỗi trang có địa chỉ riêng (không dựa vào #hash) để công cụ tìm kiếm lập chỉ mục, kèm đoạn giới thiệu và hỏi đáp hiển thị thật.
const SITE = 'https://giasu.ai.vn/';

export const practicePages = {
  hub: {
    dir: 'luyen-tap', name: 'Luyện tập',
    title: 'Luyện tập trực tuyến miễn phí cho học sinh tiểu học',
    description: 'Phiếu bài tập tự động, game luyện tập tốc độ, luyện viết chữ Hán chữ Nhật và đề thi miễn phí. Toán, Tiếng Việt, Tiếng Anh, Tiếng Trung, Tiếng Nhật lớp 1–5.',
    h1: 'Luyện tập trực tuyến miễn phí',
    lead: 'Chọn cách luyện tập phù hợp: làm phiếu bài tập, chơi game tốc độ, tập viết chữ Hán và chữ Nhật hoặc làm đề thi thử. Mọi bài đều miễn phí, dùng được trên điện thoại.',
    faq: [
      ['Luyện tập trên gia sư thông minh gồm những gì?', 'Gồm phiếu bài tập sinh tự động có chấm bài và in PDF, game luyện tập có đồng hồ đếm ngược, trang luyện viết chữ Hán và chữ Nhật có hoạt ảnh thứ tự nét, cùng kho đề thi Việt Nam và quốc tế.'],
      ['Bài tập dành cho lớp nào, môn nào?', 'Phiếu bài tập và game dành cho học sinh lớp 1 đến lớp 5, các môn Toán, Tiếng Việt, Tiếng Anh, Tiếng Trung và Tiếng Nhật. Trang luyện viết dành cho người mới học chữ Hán và chữ Nhật ở mọi lứa tuổi.'],
      ['Có cần tạo tài khoản không?', 'Không. Mọi tính năng dùng trực tiếp trên trình duyệt, tiến độ và điểm cao nhất chỉ lưu trên thiết bị của bạn.']
    ]
  },
  sheet: {
    dir: 'phieu-bai-tap', name: 'Phiếu bài tập',
    title: 'Phiếu bài tập tự động Toán, Tiếng Việt, Tiếng Anh lớp 1–5',
    description: 'Tạo phiếu bài tập lớp 1–5 theo dạng bài bạn chọn: làm và chấm ngay trên web, in hoặc lưu PDF kèm đáp án. Toán, Tiếng Việt, Anh, Trung, Nhật.',
    h1: 'Phiếu bài tập tự động',
    kicker: 'BÀI TẬP SINH TỰ ĐỘNG',
    lead: 'Chọn môn, lớp và dạng bài. Mỗi lần bấm <strong>Đề mới</strong> là một bộ số liệu khác. Làm ngay trên trang, nhận kết quả tức thì, hoặc in thành phiếu bài tập.',
    mode: 'sheet', app: true,
    intro: [
      'Phiếu bài tập được sinh tự động từ thư viện dạng bài của gia sư thông minh: mọi số liệu và đáp án đều được tính sẵn nên không bao giờ sai đáp án. Cùng một đường dẫn luôn cho đúng một đề, nên có thể gửi cho học sinh hoặc đồng nghiệp.',
      'Chọn từng dạng bài như tính nhẩm, đặt tính, tìm x, so sánh, đổi đơn vị, chính tả, điền từ tiếng Anh hay đọc chữ Hán. Bấm "Chấm bài" để xem kết quả, hoặc "In / Lưu PDF" để có phiếu sạch có sẵn chỗ ghi tên, kèm trang đáp án cho giáo viên và phụ huynh.'
    ],
    faq: [
      ['Làm thế nào để tải phiếu bài tập dạng PDF?', 'Bấm "In / Lưu PDF" rồi chọn "Lưu dưới dạng PDF" trong hộp thoại in của trình duyệt. Chọn "In / Lưu PDF kèm đáp án" để thêm trang đáp án.'],
      ['Mỗi lần tạo có ra bài khác nhau không?', 'Có. Bấm "Đề mới" để có bộ số liệu mới; đường dẫn của đề đang xem luôn tái hiện đúng đề đó.'],
      ['Phiếu bài tập có miễn phí không?', 'Miễn phí hoàn toàn, không cần đăng ký. Bạn có thể in và sử dụng cho lớp học hoặc ôn tập tại nhà.']
    ]
  },
  game: {
    dir: 'game-luyen-tap', name: 'Game luyện tập',
    title: 'Game luyện tập tốc độ: Toán, Tiếng Việt, Tiếng Anh, Trung, Nhật',
    description: 'Chơi game luyện tập có đồng hồ đếm ngược: điền đáp án, trắc nghiệm, xếp thẻ, nối cặp. Chọn lớp, môn và độ khó, nhận sao và điểm thưởng.',
    h1: 'Game luyện tập tốc độ',
    kicker: 'HỌC MÀ CHƠI, CHƠI MÀ HỌC',
    lead: 'Trả lời thật nhanh trước khi tên lửa bay đi! Chọn môn, lớp, độ khó và kiểu câu hỏi, mỗi câu có đồng hồ đếm ngược, đúng liên tiếp được thưởng thêm điểm.',
    mode: 'game', app: true,
    intro: [
      'Game luyện tập chia mỗi lượt chơi thành 10 câu hỏi hiện lần lượt. Có bốn kiểu câu hỏi giống các ứng dụng học ngoại ngữ: điền đáp án, trắc nghiệm, xếp thẻ để ghép câu và nối cặp hình với đáp án.',
      'Độ khó quyết định thời gian cho mỗi câu: Dễ 40 giây, Vừa 25 giây, Khó 12 giây. Trả lời càng nhanh điểm càng cao, kỷ lục của từng mức được lưu trên thiết bị. Có hiệu ứng âm thanh và nút tắt tiếng.'
    ],
    faq: [
      ['Game luyện tập có những môn nào?', 'Toán, Tiếng Việt, Tiếng Anh, Tiếng Trung và Tiếng Nhật cho học sinh lớp 1 đến lớp 5.'],
      ['Có thể chỉ chơi một kiểu câu hỏi không?', 'Có. Ở màn chọn, bạn có thể chơi trộn lẫn hoặc chỉ điền đáp án, trắc nghiệm, nối cặp hay xếp thẻ.'],
      ['Điểm số được tính như thế nào?', 'Mỗi câu đúng được 100 điểm, cộng thêm điểm thưởng theo tốc độ và theo chuỗi câu đúng liên tiếp.']
    ]
  },
  writing: {
    dir: 'luyen-viet', name: 'Luyện viết chữ Hán, Nhật',
    title: 'Luyện viết chữ Hán và chữ Nhật: nét, bộ thủ, HSK, kanji',
    description: 'Luyện viết tiếng Trung và tiếng Nhật từ nét cơ bản, bộ thủ, HSK 1–6, hiragana, katakana đến kanji: xem hoạt ảnh thứ tự nét, tô theo nét, nghe phát âm.',
    h1: 'Luyện viết chữ Hán & chữ Nhật',
    kicker: 'NGOẠI NGỮ · TIẾNG TRUNG & TIẾNG NHẬT',
    lead: 'Đi từ nét cơ bản, bộ thủ đến chữ HSK và kanji theo lớp. Xem hoạt ảnh thứ tự nét, tô theo nét, tự viết và nghe phát âm.',
    app: true,
    faq: [
      ['Luyện viết chữ Hán bắt đầu từ đâu?', 'Bắt đầu với 16 nét cơ bản và quy tắc thứ tự nét, sau đó học các bộ thủ thông dụng rồi luyện chữ theo cấp HSK 1 đến HSK 6.'],
      ['Tiếng Nhật học theo thứ tự nào?', 'Nên đi từ nét cơ bản, Hiragana, Katakana, âm đục và chữ nhỏ, bộ thủ, rồi kanji theo lớp 1 đến lớp 6 của chương trình Nhật Bản.'],
      ['Ba chế độ luyện viết khác nhau thế nào?', '"Xem mẫu" chạy hoạt ảnh thứ tự nét. "Tô theo nét" cho viết theo nét mờ. "Tự viết" ẩn nét mờ, chỉ gợi ý khi viết sai nhiều lần; viết đúng được tối đa 3 sao.'],
      ['Có nghe được phát âm không?', 'Có. Tiếng Trung có âm thanh cho chữ và từ HSK 1–3, các cấp khác dùng giọng đọc của thiết bị. Tiếng Nhật dùng giọng đọc tiếng Nhật của thiết bị cho kana và cách đọc kanji.']
    ]
  }
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '');

export function seoSection(page, levelLines = []) {
  const intro = (page.intro || []).map(p => `<p>${p}</p>`).join('');
  const levels = levelLines.length ? `<h2>Lộ trình luyện viết</h2><ul class="seo-levels">${levelLines.map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : '';
  const faq = page.faq?.length ? `<h2>Câu hỏi thường gặp</h2><dl class="seo-faq">${page.faq.map(([q, a]) => `<dt>${esc(q)}</dt><dd>${esc(a)}</dd>`).join('')}</dl>` : '';
  return `<section class="seo-copy" aria-label="Giới thiệu và hỏi đáp">${intro ? `<h2>Giới thiệu</h2>${intro}` : ''}${levels}${faq}</section>`;
}

// Các nút JSON-LD thêm cho trang (build.mjs ghép vào @graph cùng WebPage và BreadcrumbList).
export function pageSchema(key, canonical) {
  const page = practicePages[key];
  const nodes = [];
  if (page.app) nodes.push({
    '@type': 'WebApplication', '@id': `${canonical}#app`, name: page.h1.replace(/&amp;/g, '&'), url: canonical,
    applicationCategory: 'EducationalApplication', operatingSystem: 'Any', browserRequirements: 'Cần trình duyệt có bật JavaScript',
    inLanguage: 'vi', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND' },
    audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, educationalLevel: 'Tiểu học (lớp 1–5)', description: page.description
  });
  if (key === 'hub') nodes.push({
    '@type': 'ItemList', name: 'Các hình thức luyện tập', itemListElement: ['sheet', 'game', 'writing'].map((k, i) => ({ '@type': 'ListItem', position: i + 1, name: practicePages[k].name, url: `${SITE}${practicePages[k].dir}/` }))
      .concat([{ '@type': 'ListItem', position: 4, name: 'Đề thi', url: `${SITE}de-kiem-tra/` }])
  });
  if (page.faq?.length) nodes.push({ '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: page.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  return nodes;
}

export const pageCrumbs = key => key === 'hub' ? [] : [['Luyện tập', `${SITE}luyen-tap/`]];
export const plain = strip;
