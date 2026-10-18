// credit: giasu.ai.vn
import test from 'node:test';
import assert from 'node:assert/strict';
import {practicePages, seoSection, pageSchema, pageCrumbs} from './practice-pages.mjs';

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
