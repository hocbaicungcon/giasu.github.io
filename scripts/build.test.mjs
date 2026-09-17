import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parsePost,build} from './build.mjs';
const source='---\ntitle: Thử nghiệm\ndescription: Kiểm tra toán\ncategory: Toán học\ngrade: 10\ntype: Bài học\ndate: "2026-09-17"\ntags: [toán 10]\n---\nCông thức $x_1 + x_2$.\n\n$$\n\\frac{a}{b} = x^2\n$$\n\n```js\nconst cost = "$5";\n```';
test('render inline, display math and preserve code',()=>{const p=parsePost(source,'thu-nghiem.md');assert.match(p.html,/katex-display/);assert.match(p.html,/mathml/);assert.match(p.html,/const cost = &quot;\$5&quot;/);});
test('reject incorrect metadata and malformed mathematics',()=>{assert.throws(()=>parsePost(source.replace('grade: 10','grade: 13'),'thu.md'),/lớp/);assert.throws(()=>parsePost(source.replace('2026-09-17','2026-02-31'),'thu.md'),/ngày/);assert.throws(()=>parsePost(source.replace('Toán học','Không có'),'thu.md'),/môn học/);assert.throws(()=>parsePost(source.replace('x_1 + x_2','\\invalidcommand'),'thu.md'));});
test('all published posts build',()=>assert.ok(build().every(p => p.slug && p.html)));

test('render interactive blocks and preserve ordinary code',()=>{
 const p=parsePost(source+'\n\n```youtube\nurl: https://youtu.be/M7lc1UVf-VE\ntitle: Video mẫu\n```\n\n```quiz\ntype: choice\nquestion: Tính $1+1$\noptions: ["1", "2"]\nanswer: 2\nexplanation: Hai đơn vị.\n```\n\n```quiz\ntype: text\nquestion: Nhập hai\nanswers: ["2"]\nexplanation: Đáp án 2.\n```','tuong-tac.md');
 assert.match(p.html,/youtube-nocookie.com\/embed\/M7lc1UVf-VE/);
 assert.equal((p.html.match(/class="quiz"/g)||[]).length,2);
 assert.match(p.html,/type="radio"/);assert.match(p.html,/type="text"/);
 assert.match(p.html,/katex/);
});
test('invalid interactive blocks report filename',()=>{
 for(const block of ['youtube\nurl: https://evil.example/video\ntitle: Test','quiz\ntype: choice\nquestion: Test\noptions: [a,b]\nanswer: 3\nexplanation: Test','quiz\ntype: text\nquestion: Test\nanswers: [1]\nexplanation: Test']){
  assert.throws(()=>parsePost(source+'\n\n```'+block+'\n```','loi.md'),/loi.md/);
 }
});

test('general posts allow omitted grade and normalize category case',()=>{
 const post=parsePost(source.replace('grade: 10\n','').replace('category: Toán học','category: " TOÁN HỌC "'),'kien-thuc-chung.md');
 assert.equal(post.grade,undefined);
 assert.equal(post.category,'Toán học');
 assert.throws(()=>parsePost(source.replace('grade: 10','grade: null'),'loi-lop.md'),/lớp/);
});
