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

import {convertLatex,stripComments} from './latex.mjs';
test('LaTeX converts exercises, sections, lists, figures and preserves math',()=>{
 const source=String.raw`\begin{center}\textbf{{\Huge ĐỀ 001}}\end{center}
\subsubsection*{Phần I}
\setcounter{bt}{0}
\begin{baitap}Tính $\frac{1}{2}$ và $\{x\}$. \textbf{Đúng}?
\begin{enumerate}[A.]\item $1$\item $2$\end{enumerate}
\begin{tikzpicture}\draw (0,0)--(1,1);\end{tikzpicture}
\end{baitap}
%\begin{baitap}Không hiện\end{baitap}
\subsubsection*{Phần II}\setcounter{bt}{0}
\begin{baitap}Vận tốc $\si{m/s}$.\end{baitap}`;
 const p=convertLatex(source,{renderTikz:()=> '../assets/latex/test.png'});
 assert.equal(p.title,'ĐỀ 001');assert.equal(p.questions,2);
 assert.equal((p.body.match(/### Câu 1/g)||[]).length,2);
 assert.match(p.body,/\*\*A\.\*\*/);assert.match(p.body,/\\frac\{1\}\{2\}/);
 assert.match(p.body,/\\\{x\\\}/);assert.match(p.body,/\\mathrm\{m\/s\}/);
 assert.match(p.body,/test.png/);assert.doesNotMatch(p.body,/Không hiện|begin\{baitap/);
});
test('LaTeX comments, nested formatting and unsupported commands',()=>{
 assert.equal(stripComments(String.raw`10\% % hidden`),'10\\% ');
 assert.match(convertLatex(String.raw`\textbf{Đậm \emph{nghiêng}}`).body,/Đậm/);
 assert.throws(()=>convertLatex(String.raw`\include{secret}`),/chưa hỗ trợ/);
 assert.throws(()=>convertLatex(String.raw`\textbf{chưa đóng`),/chưa đóng/);
});
test('LaTeX indentation does not become Markdown code blocks',()=>{
 const converted=convertLatex(String.raw`\begin{baitap}
    Cho $x^2=1$.
\end{baitap}`);
 const post=parsePost(source.split('---\n')[0]+'---\n'+source.split('---\n')[1]+'---\n'+converted.body,'indent.md');
 assert.doesNotMatch(post.html,/<pre>/);assert.match(post.html,/katex/);
});
