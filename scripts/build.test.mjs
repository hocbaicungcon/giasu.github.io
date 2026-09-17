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

import {extractExam} from './exams.mjs';
import {gradeQuestion,gradeExam} from '../assets/exam-core.js';
import fs from 'node:fs';
test('exam extracts solutions and three answer types without leaking solutions into prompt',()=>{
 const source=fs.readFileSync(new URL('../post/de-mau-tuong-tac.tex',import.meta.url),'utf8');const qs=extractExam(source);
 assert.equal(qs.length,3);assert.deepEqual(qs.map(q=>q.kind),['choice','truefalse','short']);
 assert.equal(qs[0].answer,'1');assert.deepEqual(qs[1].answer,[true,false,true,false]);assert.deepEqual(qs[2].answer,['2,5']);
 assert.doesNotMatch(qs[0].question,/suy ra|dapan/);assert.match(qs[0].solution,/suy ra/);
 assert.doesNotMatch(convertLatex(source).body,/dapan|suy ra/);
 assert.equal(gradeExam(qs,{q1:'1',q2:['true','false','true','false'],q3:'2.5'}).score,10);
 assert.equal(gradeQuestion(qs[1],['true','','','']),.25);
 assert.equal(gradeExam(qs,{}).score,0);
});
test('missing or ambiguous answers never receive an invented key',()=>{
 const wrap=s=>String.raw`\begin{baitap}Test\begin{enumerate}[A.]\item A\item B\end{enumerate}\begin{traloi}${s}\end{traloi}\end{baitap}`;
 assert.equal(extractExam(wrap('Chọn A.'))[0].answer,'0');
 assert.equal(extractExam(wrap('Chọn A. Chọn B.'))[0].answer,null);
 assert.equal(extractExam(wrap('Giải thích chưa có kết luận.'))[0].answer,null);
 assert.equal(gradeExam(extractExam(wrap('')),{}).score,null);
 assert.throws(()=>extractExam(wrap(String.raw`\dapan{D}`)),/hợp lệ/);
});

test('siunitx units render inside and outside math for imported exams',()=>{
 const result=convertLatex(String.raw`Quãng đường \SI{50}{\meter}; tốc độ \si{\meter\per\second}; thể tích \SI{144}{\cubic\centi\meter}; $\SI{10}{\centi\meter}\times\SI{16}{\centi\meter}$.`);
 assert.match(result.body,/\$50\\,\\mathrm\{m\}\$/);
 assert.ok(result.body.includes(String.raw`$\mathrm{m}/\mathrm{s}$`));
 assert.ok(result.body.includes(String.raw`$144\,\mathrm{cm}^{3}$`));
 assert.ok(result.body.includes(String.raw`$10\,\mathrm{cm}\times16\,\mathrm{cm}$`));
 const post=parsePost(source+'\n\n'+result.body,'units.md');
 assert.ok(!post.html.includes('katex-error'));
 assert.throws(()=>convertLatex(String.raw`\SI{1}{\unknownunit}`),/Đơn vị LaTeX chưa hỗ trợ/);
});
