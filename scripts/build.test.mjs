import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parsePost,build} from './build.mjs';
const source='---\ntitle: Thử nghiệm\ndescription: Kiểm tra toán\ncategory: Toán học\ngrade: 10\ntype: Bài học\ndate: "2026-09-17"\ntags: [toán 10]\n---\nCông thức $x_1 + x_2$.\n\n$$\n\\frac{a}{b} = x^2\n$$\n\n```js\nconst cost = "$5";\n```';
test('render inline, display math and preserve code',()=>{const p=parsePost(source,'thu-nghiem.md');assert.match(p.html,/katex-display/);assert.match(p.html,/mathml/);assert.match(p.html,/const cost = &quot;\$5&quot;/);});
test('reject incorrect metadata and malformed mathematics',()=>{assert.throws(()=>parsePost(source.replace('grade: 10','grade: 13'),'thu.md'),/lớp/);assert.throws(()=>parsePost(source.replace('2026-09-17','2026-02-31'),'thu.md'),/ngày/);assert.throws(()=>parsePost(source.replace('Toán học','Không có'),'thu.md'),/môn học/);assert.throws(()=>parsePost(source.replace('x_1 + x_2','\\invalidcommand'),'thu.md'));});
test('all published posts build',()=>assert.ok(build().every(p => p.slug && p.html)));
