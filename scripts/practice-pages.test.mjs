// credit: giasu.ai.vn
import test from 'node:test';
import assert from 'node:assert/strict';
import {practicePages, seoSection, pageSchema, pageCrumbs, isChinesePost, renderWritingBanner} from './practice-pages.mjs';

test('mỗi trang luyện tập có tiêu đề, mô tả và địa chỉ riêng', () => {
  const dirs = new Set(), titles = new Set();
  for (const [key, page] of Object.entries(practicePages)) {
    assert.ok(page.title.length >= 30 && page.title.length <= 65, `${key}: độ dài tiêu đề`);
    assert.ok(page.description.length >= 90 && page.description.length <= 160, `${key}: độ dài mô tả (${page.description.length})`);
    assert.ok(!dirs.has(page.dir) && !titles.has(page.title), `${key}: trùng`);
    dirs.add(page.dir); titles.add(page.title);
    assert.ok(page.faq.length >= 3, `${key}: cần hỏi đáp`);
  }
});

test('JSON-LD: ứng dụng có WebApplication, mọi trang có FAQPage, trang gốc có ItemList', () => {
  const nodes = key => pageSchema(key, `https://giasu.ai.vn/${practicePages[key].dir}/`).map(n => n['@type']);
  for (const key of ['sheet', 'game', 'writing']) assert.deepEqual(nodes(key), ['WebApplication', 'FAQPage']);
  assert.deepEqual(nodes('hub'), ['ItemList', 'FAQPage']);
  assert.deepEqual(pageCrumbs('hub'), []);
  assert.equal(pageCrumbs('game')[0][0], 'Luyện tập');
});

test('đoạn giới thiệu hiển thị cả câu hỏi và đáp án, thoát ký tự HTML', () => {
  const html = seoSection({faq: [['A <b>?', 'B & C']]}, ['Cấp 1: 10 chữ']);
  assert.match(html, /<dt>A &lt;b&gt;\?<\/dt><dd>B &amp; C<\/dd>/);
  assert.match(html, /Cấp 1: 10 chữ/);
});

test('isChinesePost nhận diện chính xác các bài viết tiếng Trung và loại trừ môn khác', () => {
  assert.equal(isChinesePost(null), false);
  assert.equal(isChinesePost({ category: 'Toán học', title: 'Toán 10 Bài 13: Các số đặc trưng đo xu thế trung tâm', tags: ['Toán 10', 'Thống kê'] }), false);
  assert.equal(isChinesePost({ category: 'Ngoại ngữ', title: '2000 chữ Kanji thông dụng nhất', tags: ['Tiếng Nhật', 'Kanji'] }), false);
  assert.equal(isChinesePost({ category: 'Hóa học', title: 'Phương pháp trung bình', tags: ['Hóa học 12'] }), false);

  assert.equal(isChinesePost({ category: 'Ngoại ngữ', title: '100+ câu tiếng Trung thông dụng', tags: ['Tiếng Trung', 'Giao tiếp tiếng Trung'] }), true);
  assert.equal(isChinesePost({ category: 'Ngoại ngữ', title: '214 BỘ THỦ HÁN NGỮ', tags: ['Bộ thủ', 'Chữ Hán', 'Tiếng Trung'] }), true);
  assert.equal(isChinesePost({ category: 'Ngoại ngữ', title: 'Danh sách 300 từ vựng HSK 1 phiên bản mới', tags: ['Tiếng Trung', 'HSK', 'HSK 1'] }), true);
  assert.equal(isChinesePost({ category: 'Các môn khác', title: '50 bộ thủ thường dùng PDF', tags: ['Các môn khác'] }), true);
});

test('renderWritingBanner tạo banner luyện viết với đường dẫn, huy hiệu và trợ năng', () => {
  const banner = renderWritingBanner('../');
  assert.match(banner, /<aside class="writing-banner" aria-label="[^"]*">/);
  assert.match(banner, /href="\.\.\/luyen-viet\/"/);
  assert.match(banner, /Luyện viết chữ Hán &amp; Tiếng Trung trực tuyến/);
  assert.match(banner, /wb-grid-char/);
  assert.match(banner, /16 nét cơ bản/);
  assert.match(banner, /214 bộ thủ/);
  assert.match(banner, /HSK 1–6/);
  assert.match(banner, /Luyện viết ngay/);
});
