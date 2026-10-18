// credit: giasu.ai.vn
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import katex from 'katex';
import {parseTex, expectedValues, sameAnswer, buildExercises, countItems, makeChoices} from '../assets/practice-core.js';

// worksheet.js là script thường (window.Worksheet / globalThis), nên nạp bằng vm
const context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(new URL('../assets/worksheet/worksheet.js', import.meta.url), 'utf8'), context);
const W = context.Worksheet;
const silent = (fn) => { const warn = console.warn; console.warn = () => {}; try { return fn(); } finally { console.warn = warn; } };

test('parseTex tách chỗ trống trong công thức và giữ phần còn lại', () => {
  const r = silent(() => parseTex('$7 \\times 6 = \\ldots$', {katex}));
  assert.equal(r.ok, true);
  assert.equal(r.parts.filter(p => p.blank).length, 1);
  assert.match(r.parts[0].html, /katex/);
});

test('parseTex nhận các kiểu ô trống và ô chọn', () => {
  const choice = parseTex('$5\\ \\boxed{\\phantom{>}}\\ 4$', {katex});
  assert.deepEqual(choice.parts.find(p => p.blank).blank.options, ['>', '<', '=']);
  const line = parseTex('Con \\underline{\\hspace{1.8cm}} bay', {katex});
  assert.equal(line.parts.filter(p => p.blank).length, 1);
  assert.match(line.parts[0].html, /Con/);
});

test('parseTex báo ok=false với lệnh chưa hỗ trợ (hình TikZ, đồng hồ)', () => {
  assert.equal(parseTex('\\wsclock{60}{90}\\\\ \\ldots\\ giờ', {katex}).ok, false);
  assert.equal(parseTex('\\begin{tikzpicture}\\end{tikzpicture}', {katex}).ok, false);
});

test('parseTex đổi hình emoji thành thẻ img an toàn', () => {
  const r = parseTex('\\wspic[1cm]{ws-1f34e} Có \\ldots\\ quả', {katex, picUrl: id => `/e/${id}.svg`});
  assert.match(r.parts[0].html, /<img class="pg-pic" src="\/e\/1f34e\.svg"/);
  assert.equal(parseTex('\\wspic{ws-"><script>}', {katex}).ok, false);
});

test('expectedValues lấy đáp án từng ô từ đáp án mẫu', () => {
  assert.deepEqual(expectedValues('$7 \\times 6 = \\ldots$', '$7 \\times 6 = 42$', 1).values, ['42']);
  assert.deepEqual(expectedValues('$1197 = \\ldots + \\ldots + \\ldots + \\ldots$', '$1197 = 1000 + 100 + 90 + 7$', 4).values, ['1000', '100', '90', '7']);
  assert.deepEqual(expectedValues('$20\\ \\text{km} = \\ldots\\ \\text{m}$', '$20\\ \\text{km} = 20\\,000\\ \\text{m}$', 1).values, ['20000']);
  assert.deepEqual(expectedValues('$26 + 391\\ \\boxed{\\phantom{>}}\\ 419$', '$26 + 391 < 419$', 1).values, ['<']);
  assert.deepEqual(expectedValues('$3,\\ 2,\\ \\ldots,\\ \\ldots$', '$5;\\ 7$', 2).values, ['5', '7']);
  assert.deepEqual(expectedValues('Số khác loại: \\ldots', '$459$ (một số lẻ)', 1).values, ['459']);
});

test('expectedValues với câu không có ô trống', () => {
  assert.deepEqual(expectedValues('$x \\times 6 = 246$', '$x = 41$', 0), {prefix: 'x =', values: ['41']});
  assert.deepEqual(expectedValues('Hà $6$ tuổi, anh hơn $4$ tuổi. Hỏi anh bao nhiêu tuổi?', '$10$ tuổi', 0).values, ['10']);
  assert.equal(expectedValues('Bài dài', '$8 \\times 6 = 48$. Đáp số: $48$ bông hoa.', 0), null);
});

test('sameAnswer so số theo giá trị, chữ phân biệt dấu tiếng Việt', () => {
  assert.ok(sameAnswer('20000', ' 20 000 '));
  assert.ok(sameAnswer('2,5', '2.5'));
  assert.ok(sameAnswer('thứ Hai', 'Thứ hai'));
  assert.ok(!sameAnswer('chó', 'cho'));
  assert.ok(!sameAnswer('42', ''));
  assert.ok(!sameAnswer('42', '24'));
});

test('buildExercises dựng bài từ thư viện cho Toán, Tiếng Việt, Tiếng Anh', () => {
  for (const [subject, grade, min] of [['math', 3, 5], ['math', 1, 3], ['vi', 2, 2], ['en', 3, 2]]) {
    const topics = W.topicsFor(subject, grade, 'color').map(t => t.id);
    const result = W.generate({subject, grade, topics, seed: 7, answers: false});
    assert.ok(result.sheets?.[0]?.blocks?.length, `${subject}${grade}: thiếu result.sheets`);
    const {exercises} = silent(() => buildExercises(result.sheets[0], {katex}));
    assert.ok(exercises.length >= min, `${subject}${grade}: chỉ có ${exercises.length} dạng bài`);
    for (const ex of exercises) for (const item of ex.items) {
      assert.ok(item.blanks >= 1 || item.mode === 'self', `${subject}${grade}/${ex.id}: câu không có ô trả lời`);
      if (item.mode === 'auto') assert.equal(item.expected.length, item.blanks, `${subject}${grade}/${ex.id}: số đáp án khác số ô`);
    }
  }
});

test('mọi câu tự chấm nhận đúng đáp án mẫu của chính nó', () => {
  const topics = W.topicsFor('math', 4, 'color').map(t => t.id);
  const result = W.generate({subject: 'math', grade: 4, topics, seed: 21, answers: false});
  const {exercises} = silent(() => buildExercises(result.sheets[0], {katex}));
  assert.ok(countItems(exercises) > 20);
  for (const ex of exercises) for (const item of ex.items) if (item.mode === 'auto') for (const v of item.expected) assert.ok(sameAnswer(v, v));
});

test('cùng seed ra cùng bài', () => {
  const make = () => W.generate({subject: 'math', grade: 2, topics: ['calc'], seed: 99, answers: false}).sheets[0].blocks[0].items.map(i => i.q).join('|');
  assert.equal(make(), make());
});

test('expectedValues bỏ gợi ý cuối câu và phần mở đầu thừa', () => {
  assert.deepEqual(expectedValues('\\underline{\\hspace{0.8cm}}ẻng\\ \\textit{(s / x)}', 'xẻng', 1).values, ['x']);
  assert.deepEqual(expectedValues('Có \\ldots\\ con voi.', '5 con voi', 1).values, ['5']);
});

test('makeChoices tạo đáp án nhiễu khác đáp án đúng', () => {
  const rand = (() => { let x = 7; return () => (x = (x * 16807) % 2147483647) / 2147483647; })();
  const num = makeChoices(['42'], [], rand);
  assert.equal(num.options.length, 4);
  assert.equal(num.options[num.correct][0], '42');
  assert.equal(new Set(num.options.map(o => o.join('|'))).size, 4);
  const sym = makeChoices(['<'], [], rand);
  assert.deepEqual([...sym.options.map(o => o[0])].sort(), ['<', '=', '>']);
  const order = makeChoices(['bơi, bút, nhanh, nhỏ, sông'], [], rand);
  assert.equal(order.options.length, 4);
  assert.equal(makeChoices(['5', '7'], [], rand), null);
  assert.equal(makeChoices(['x'], [], rand), null);
});

test('đáp án nhiễu số gần đáp án đúng', () => {
  const r = makeChoices(['81220'], [], () => 0.5);
  for (const o of r.options) assert.ok(Math.abs(Number(o[0]) - 81220) <= 100000);
  assert.ok(r.options.filter(o => o[0] !== '81220').every(o => Math.abs(Number(o[0]) - 81220) <= 100));
  assert.deepEqual(expectedValues('Tìm số hạng kia.', 'số hạng bằng $2$', 0).values, ['2']);
});

test('phân số có ô trống ở tử hoặc mẫu vẫn dựng được', () => {
  const r = silent(() => parseTex('$\\dfrac{1}{2} = \\dfrac{\\ldots}{6}$', {katex}));
  assert.equal(r.ok, true);
  assert.equal(r.parts.filter(p => p.blank).length, 1);
  assert.match(r.parts.map(p => p.html || '').join(''), /pg-fr-n/);
  assert.deepEqual(expectedValues('$\\dfrac{1}{2} = \\dfrac{\\ldots}{6}$', '$\\dfrac{1}{2} = \\dfrac{3}{6}$', 1).values, ['3']);
});

test('chữ Hán, pinyin có dấu và câu khoanh chữ đúng', () => {
  const hz = parseTex('\\wshz[1.2cm]{cjk-zh-4eba-f}', {katex});
  assert.match(hz.parts[0].html, /lang="zh">人</);
  const py = parseTex("r\\'{e}n sh\\v{o}u zhu\\={o}", {katex});
  assert.equal(py.ok, true);
  assert.match(py.parts.map(p => p.html).join(''), /rén shǒu zhuō/);
  assert.equal(expectedValues('\\wshz{cjk-zh-4eba-f}\\\\ \\underline{\\hspace{2cm}}', "r\\'{e}n", 1).values[0], 'rén');
  const out = buildExercises({ blocks: [{ id: 'choose', name: 'x', instr: 'Khoanh', cols: 1, body: false, items: [{ q: 'bàn tay\\\\ \\textbf{A.} \\wshz{cjk-zh-53e3-f}\\qquad \\textbf{B.} \\wshz{cjk-zh-624b-f}', a: 'B (sh\\v{o}u)' }] }] }, { katex, alts: true });
  const it = out.exercises[0].items[0];
  assert.equal(it.mode, 'choice');
  assert.equal(it.correct, 1);
  assert.equal(it.options.length, 2);
});

test('sameLoose bỏ dấu thanh và nhận nhiều cách đọc', async () => {
  const { sameLoose } = await import('../assets/practice-core.js');
  assert.ok(sameLoose('rén', 'ren'));
  assert.ok(sameLoose('ji, mimi', 'mimi'));
  assert.ok(sameLoose('ha(reru), ha(re)', 'hareru'));
  assert.ok(!sameLoose('ren', 'shou'));
});
