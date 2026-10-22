import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createPostLinker} from './post-links.mjs';

const post = (slug, overrides = {}) => ({slug, title: slug + ' ' + (overrides.tags || []).join(' '), category: 'Toán học', grade: 7, type: 'Bài học', date: '2026-10-01', tags: ['Toán 7'], ...overrides});
test('same grade and type cannot recommend another subject', () => {
 const source = post('tam-giac', {tags: ['Tam giác']});
 const select = createPostLinker([source, post('vat-ly', {category: 'Vật lý', tags: ['Tam giác']}), post('cung-lop')]);
 assert.deepEqual(select(source), {reading: [], related: [post('cung-lop')]});
});
test('specific topics outrank generic grade tags, normalize casing and connect lessons to exercises', () => {
 const source = post('source', {tags: ['Toán 7', '  TAM GIÁC  ']});
 const exercise = post('exercise', {type: 'Bài tập', tags: ['tam giác']});
 const lesson = post('lesson', {tags: ['Tam giác']});
 const generic = post('generic');
 const select = createPostLinker([source, generic, lesson, exercise]);
 assert.deepEqual(select(source).reading.map(p => p.slug), ['exercise', 'lesson']);
 assert.deepEqual(select(source).related, []);
});
test('topic tags can match a title even when target tags differ', () => {
 const source = post('source', {tags: ['Phương trình']});
 const target = post('target', {title: 'Bài tập phương trình bậc nhất', tags: ['Đại số']});
 assert.deepEqual(createPostLinker([source, target])(source).reading, [target]);
});
test('generic tags alone do not connect distant grades', () => {
 const source = post('source', {tags: ['Học sinh giỏi', 'Toán 7']});
 assert.deepEqual(createPostLinker([source, post('grade12', {grade: 12, tags: ['Học sinh giỏi', 'Toán 12']})])(source), {reading: [], related: []});
});
test('links are bounded, unique, exclude the current post and remain deterministic', () => {
 const source = post('source', {tags: ['Tam giác']});
 const candidates = Array.from({length: 15}, (_, i) => post(`target-${i}`, {tags: ['Tam giác']}));
 const select = createPostLinker([source, ...candidates, candidates[0]]);
 const result = select(source);
 assert.equal(result.reading.length, 3);
 assert.equal(result.related.length, 6);
 const slugs = [...result.reading, ...result.related].map(p => p.slug);
 assert.equal(new Set(slugs).size, 9);
 assert.ok(!slugs.includes(source.slug));
 assert.deepEqual(createPostLinker([source, ...candidates].reverse())(source), result);
});
test('ungraded articles only fall back to the same subject and subtype', () => {
 const source = post('poem', {category: 'Giải trí', grade: undefined, type: 'Giai thoại', tags: []});
 const related = post('story', {category: 'Giải trí', grade: undefined, type: 'Giai thoại', tags: []});
 const puzzle = post('puzzle', {category: 'Giải trí', grade: undefined, type: 'Câu đố', tags: []});
 assert.deepEqual(createPostLinker([source, related, puzzle])(source), {reading: [], related: [related]});
});
