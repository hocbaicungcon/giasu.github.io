/* credit: giasu.ai.vn */
import {test} from 'node:test';
import assert from 'node:assert/strict';
test('entertainment posts accept story or puzzle types without a grade',()=>{
 for(const type of ['Giai thoại','Câu đố']){
  const p=parsePost(source.replace('Toán học','giải trí').replace('type: Bài học',`type: ${type}`).replace('grade: 10\n',''),'giai-tri.md');
  assert.equal(p.category,'Giải trí');assert.equal(p.type,type);assert.equal(p.grade,undefined);
 }
});
test('new exam LaTeX constructs render as numbers, lists, tables and display math',()=>{
 const input=String.raw`In \num{8000} tờ, $\num{3600}$ mỗi giờ.
\begin{itemize}\item Một $x$.\item Hai.\end{itemize}
\begin{tabular}{|c|r|}\hline Khối lượng & $[150;155)$ \\\hline Số quả & 2 \\\hline\end{tabular}
Đơn vị $\si{\milli\gram/(\liter\cdot\hour)}$.
Trước $$f(v)=\frac{8}{v}$$ Sau.`;
 const converted=convertLatex(input).body;
 assert.ok(converted.includes('8000'));
 assert.ok(converted.includes('$3600$'));
 assert.match(converted,/Trước\n\n\$\$\nf\(v\)/);
 const html=parsePost(source+'\n\n'+converted,'new-exam.md').html;
 assert.match(html,/<ul>/);assert.match(html,/<table>/);assert.match(html,/<td[^>]*>2<\/td>/);
 assert.match(html,/katex-display/);assert.match(html,/Sau\./);
 assert.doesNotMatch(html,/katex-error/);
 assert.throws(()=>convertLatex(String.raw`\begin{tabular}{cc}A & B & C\end{tabular}`),/số ô/);
});
import {parsePost,build,normalizeMarkdownFormatting,renderCallouts,renderMathInHtml,searchTitle,searchDescription,lazyImages,renderLessonMarkdown} from './build.mjs';
import {compareItems} from '../assets/sort.js';
const source='---\ntitle: Thử nghiệm\ndescription: Kiểm tra toán\ncategory: Toán học\ngrade: 10\ntype: Bài học\ndate: "2026-09-17"\ntags: [toán 10]\n---\nCông thức $x_1 + x_2$.\n\n$$\n\\frac{a}{b} = x^2\n$$\n\n```js\nconst cost = "$5";\n```';
test('render inline, display math and preserve code',()=>{const p=parsePost(source,'thu-nghiem.md');assert.match(p.html,/katex-display/);assert.match(p.html,/mathml/);assert.match(p.html,/const cost = &quot;\$5&quot;/);});
test('reject incorrect metadata and malformed mathematics',()=>{assert.throws(()=>parsePost(source.replace('grade: 10','grade: 13'),'thu.md'),/lớp/);assert.throws(()=>parsePost(source.replace('2026-09-17','2026-02-31'),'thu.md'),/ngày/);assert.throws(()=>parsePost(source.replace('Toán học','Không có'),'thu.md'),/môn học/);assert.throws(()=>parsePost(source.replace('x_1 + x_2','\\invalidcommand'),'thu.md'));});
test('all published posts build with menu controls, compact metadata and games',()=>{
 const published=build();assert.ok(published.every(p=>p.slug&&p.html));
 const lessons=published.filter(p=>p.type==='Bài học');
 const audit=JSON.parse(fs.readFileSync(new URL('../dist/assets/data/lesson-interactivity-audit.json',import.meta.url),'utf8'));
 assert.equal(audit.covered,lessons.length);assert.equal(audit.totalLessons,lessons.length);
 for(const lesson of lessons){const page=fs.readFileSync(new URL('../dist/bai-viet/'+lesson.slug+'.html',import.meta.url),'utf8');assert.match(page,/data-lesson-practice/);assert.match(page,/lesson-course/);}

 const read=file=>fs.readFileSync(new URL('../dist/'+file,import.meta.url),'utf8');
 for(const post of published){
  const page=read('bai-viet/'+post.slug+'.html');
  assert.match(page,/class="article-wrap wrap[^"]* lesson-course"/,post.slug);
  assert.match(page,/class="course-sidebar-heading"/,post.slug);
  const ids=new Set([...page.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
  for(const nav of page.matchAll(/<nav class="toc-nav"[^>]*>([\s\S]*?)<\/nav>/g)){
   for(const link of nav[1].matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(link[1]),post.slug+': '+link[1]);
  }
 }
 const exercise=read('bai-viet/100-bai-toan-co-loi-van-lop-2.html');
 assert.match(exercise,/class="toc-box"/);
 assert.match(exercise,/class="article-toc"/);

 const grader=read('cham-thi/index.html');
 const sharedCss=grader.match(/href="(\.\.\/assets\/style\.css\?v=[^"]+)"/)[1];
 assert.ok(JSON.parse(read('cham-thi/offline-assets.json')).includes(sharedCss),'The shared grading CSS must be available offline');
 assert.doesNotMatch(grader,/href="style\.css/);
 assert.match(read('assets/style.css'),/\.grading-page/);
 const home=read('index.html');assert.match(home,/<nav id="site-menu"[\s\S]*class="display-controls"[\s\S]*<\/nav>/);assert.doesNotMatch(home,/class="display-bar"|phút đọc/);
 assert.match(home,/<a[^>]*class="[^"]*see-more-btn[^"]*"[^>]*href="\.\/thu-vien\.html"[^>]*>Xem tiếp/);
 const homeCards=home.match(/<article class="card"/g)||[];assert.equal(homeCards.length,9);
 const about=read('gioi-thieu.html');assert.match(about,/Miễn trừ trách nhiệm/);assert.match(about,/tính chất tham khảo/);assert.match(about,/thận trọng khi sử dụng/);
 const library=read('thu-vien.html');
 assert.equal((library.match(/data-sort=/g)||[]).length,2);
 assert.match(library,/<div class="cards" id="cards">/);
 assert.match(library,/<select id="category-select"/);
 assert.match(library,/<button[^>]*id="search-clear"/);
 assert.match(library,/<nav class="pagination" id="pagination"/);
 assert.match(library,/<button[^>]*id="load-more"/);
 const articleFile=fs.readdirSync(new URL('../dist/bai-viet/',import.meta.url)).find(f=>f.endsWith('.html'));
 const article=read('bai-viet/'+articleFile);assert.match(article,/class="article-meta"><time/);assert.match(article,/data-study-tip/);assert.doesNotMatch(article,/data-footer-quote|phút đọc/);assert.match(article,/✦ Mỗi bài học, một bước tiến!/);
 const poemArticle=read('bai-viet/bai-tho-doc-nguoc-doc-xuoi.html');
 assert.match(poemArticle,/<strong>Bài thơ gốc:<\/strong>/);
 assert.match(poemArticle,/<strong>Đọc ngược:<\/strong>/);
 assert.match(poemArticle,/class="article-toc"/);
 assert.match(poemArticle,/class="toc-box"/);
 assert.match(poemArticle,/related-posts/);
 assert.match(poemArticle,/Bài viết cùng chủ đề/);
 const examFile=fs.readdirSync(new URL('../dist/de-kiem-tra/',import.meta.url)).find(f=>f.endsWith('.html')&&f!=='index.html');
 const exam=read('de-kiem-tra/'+examFile);assert.match(exam,/class="exam-meta"/);assert.doesNotMatch(exam.match(/class="exam-meta">([^<]*)/)[1],/Tiếng Việt|Tiếng Anh/);
 assert.match(read('giai-tri/games.html'),/logicholic\.com/);assert.match(home,/href="http:\/\/logicholic\.com\/"/);assert.match(read('giai-tri/index.html'),/English Riddles/);
 for(let g=1; g<=12; g++){
  assert.ok(fs.existsSync(new URL(`../dist/lop-${g}.html`,import.meta.url)));
 }
 const grade7=read('lop-7.html');
 assert.match(grade7,/data-default-grade="7"/);
 assert.match(grade7,/Bài học &amp; Bài tập Lớp 7/);
 assert.match(grade7,/<div class="cards" id="cards">/);
 assert.match(grade7,/class="grade-nav-item active"[^>]*href="\.\/lop-7\.html"/);
 const math7=read('bai-viet/toan-7-bai-13-hai-tam-giac-bang-nhau-truong-hop-canh-canh-canh.html');
 assert.match(math7,/href="\.\.\/lop-7\.html">Lớp 7<\/a>/);
 const sitemap=read('sitemap.xml');
 assert.match(sitemap,/https:\/\/giasu\.ai\.vn\/lop-7\.html/);
});

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

test('render callout blocks for warnings, notes and important notices',()=>{
 const p=parsePost(source+'\n\n> [!WARNING] Hãy ghi nhớ các sai lầm sau:\n> 1. Điểm cần tránh.\n\n> [!IMPORTANT]\n> Nội dung quan trọng.','callouts.md');
 assert.match(p.html,/class="callout callout-warning"/);
 assert.match(p.html,/class="callout-title">[\s\S]*?<svg[\s\S]*?Lưu ý \/ Cảnh báo/);
 assert.match(p.html,/class="callout callout-important"/);
 assert.doesNotMatch(p.html,/\[!WARNING\]/);
 assert.doesNotMatch(p.html,/\[!IMPORTANT\]/);
});

test('render math inside HTML blocks such as flowcharts and containers',()=>{
 const p=parsePost(source+'\n\n<div class="flowchart-node"><strong>Bài 3: Thứ tự trong $\\mathbb{N}$</strong><small>$\\in, \\notin$</small></div>','flowchart-math.md');
 assert.match(p.html,/class="katex"/);
 assert.match(p.html,/mathbb/);
 assert.doesNotMatch(p.html,/\$\\mathbb\{N\}\$/);
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
 assert.match(p.body,/\\\{x\\\}/);assert.match(p.body,/Vận tốc m\/s\./);
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

test('siunitx units convert to plain text for imported exams',()=>{
 const result=convertLatex(String.raw`Quãng đường \SI{50}{\meter}; tốc độ \si{\meter\per\second}; thể tích \SI{144}{\cubic\centi\meter}; $\SI{10}{\centi\meter}\times\SI{16}{\centi\meter}$.`);

 assert.match(result.body,/50 m/);
 assert.match(result.body,/m\/s/);
 assert.match(result.body,/144 cm³/);
 assert.match(result.body,/10 cm/);
 assert.match(result.body,/16 cm/);

 assert.doesNotMatch(result.body,/\\(?:SI|si|qty|unit)\b/);

 const post=parsePost(source+'\n\n'+result.body,'units.md');
 assert.ok(!post.html.includes('katex-error'));

 assert.throws(
  ()=>convertLatex(String.raw`\SI{1}{\unknownunit}`),
  /Đơn vị LaTeX chưa hỗ trợ/
 );
});

test('parsePost canonicalizes common tag casing and trims whitespace',()=>{
 const p=parsePost(source.replace('tags: [toán 10]','tags: [" tiếng trung ", "bộ thủ", "kanji", "hóa 12"]'),'tags.md');
 assert.deepEqual(p.tags,['Tiếng Trung','Bộ thủ','Kanji','Hóa 12']);
});

test('normalizeMarkdownFormatting normalizes bold, italic and preserves code/math',()=>{
 const input = [
  '- **TV màn hình phẳng:\u00a0**TV',
  '- **Máy giặt cửa trước:**Công suất 1.240W',
  '- **Bàn là:**Bàn là',
  '**A.**29,4 gam',
  '**Ví dụ 1.**Giải phương trình',
  '```python\ndef foo(*args, **kwargs):\n    return 2 ** 3\n```',
  '`**inline**`',
  '$$A^* B^*$$ and $x^* + y^*$',
  '[Tài liệu](/assets/docs/file.docx)[Download](/assets/docs/file.docx)',
  '[Google Drive](https://drive.google.com/file/d/123/view)'
 ].join('\n\n');
 const norm = normalizeMarkdownFormatting(input);
 const p = parsePost(source + '\n\n' + norm, 'markdown-formatting.md');
 assert.match(p.html, /<strong>TV màn hình phẳng:<\/strong> TV/);
 assert.match(p.html, /<strong>Máy giặt cửa trước:<\/strong> Công suất 1.240W/);
 assert.match(p.html, /<strong>Bàn là:<\/strong> Bàn là/);
 assert.match(p.html, /<strong>A.<\/strong> 29,4 gam/);
 assert.match(p.html, /<strong>Ví dụ 1.<\/strong> Giải phương trình/);
 assert.match(p.html, /class="language-python"/);
 assert.match(p.html, /def foo\(\*args, \*\*kwargs\):/);
 assert.match(p.html, /<li>(?:\s*<p>)?\s*<a href="\/assets\/docs\/file\.docx">Tài liệu<\/a>/);
 assert.match(p.html, /<li>(?:\s*<p>)?\s*<a href="https:\/\/drive\.google\.com\/file\/d\/123\/view">Google Drive<\/a>/);
 assert.doesNotMatch(p.html, /Download/);
});



test('SVG diagrams retain all shapes across blank lines without becoming code',()=>{
 const svg='<div>\n  <svg viewBox="0 0 100 100">\n    <line x1="0" y1="0" x2="100" y2="100"/>\n\n    <!-- second shape -->\n    <polygon points="0,0 50,0 50,50"/>\n\n    <text x="20" y="20">A</text>\n  </svg>\n</div>';
 const html=parsePost(source+'\n\n'+svg,'svg-test.md').html;
 assert.match(html,/<svg[^>]*>[\s\S]*<polygon[\s\S]*<text[\s\S]*<\/svg>/);
 assert.doesNotMatch(html,/&lt;polygon|&lt;!-- second shape/);
});
test('triangle lesson provides a reusable geometry activity and complete diagrams',()=>{
 const lesson=fs.readFileSync(new URL('../post/toan-7-bai-12-tong-cac-goc-trong-mot-tam-giac.md',import.meta.url),'utf8');
 const html=parsePost(lesson,'toan-7-bai-12.md').html;
 assert.match(html,/data-geometry="triangle-angles"/);
 assert.match(html,/data-coordinate="x"/);
 assert.doesNotMatch(html,/&lt;polygon|&lt;circle|&lt;!-- Tam giác/);
});

test('all triangle quiz angle measurements render with KaTeX',()=>{
 const lesson=fs.readFileSync(new URL('../post/toan-7-bai-12-tong-cac-goc-trong-mot-tam-giac.md',import.meta.url),'utf8');
 const html=parsePost(lesson,'toan-7-bai-12.md').html;
 const forms=[...html.matchAll(/<form class="quiz"[\s\S]*?<\/form>/g)].map(m=>m[0]);
 assert.equal(forms.length,10);
 assert.ok(forms[3].includes('katex'));assert.match(forms[3],/<legend>[\s\S]*class="katex"/);
 const visibleText=forms.join('').replace(/<annotation[\s\S]*?<\/annotation>/g,'').replace(/<[^>]+>/g,'');
 assert.doesNotMatch(visibleText,/\^\\circ/);
});

test('valid bold question labels stay valid after repeated normalization',()=>{
 const input='**Câu 1:** Chọn đáp án đúng.';
 const normalized=normalizeMarkdownFormatting(input);
 assert.equal(normalized,input);
 assert.equal(normalizeMarkdownFormatting(normalized),input);
 assert.match(parsePost(source+'\n\n'+input,'bold-label.md').html,/<strong>Câu 1:<\/strong> Chọn đáp án đúng/);
});

test('bold across paragraphs and comparisons in callouts retain their formatting',()=>{
 const p=parsePost(source+'\n\n> [!IMPORTANT]\n> Nếu $a < b$ thì $b$ **lớn hơn** số $a$.\n\nThứ tự: **Cường < Bình < An < Dũng.**\n\n**Vị trí điểm:**\nNội dung khác.','emphasis.md');
 assert.match(p.html,/<strong>lớn hơn<\/strong>/);assert.match(p.html,/<strong>Vị trí điểm:<\/strong>/);assert.doesNotMatch(p.html,/\*\*/);
 const code=parsePost(source+'\n\n`$a < b$ **nguyên văn**`','literal-code.md');assert.match(code.html,/<code>\$a &lt; b\$ \*\*nguyên văn\*\*<\/code>/);
});

test('trailing punctuation after inline math does not wrap or orphan onto separate line',()=>{
 const input = [
   '1. $P(A) = \\frac{4}{52} = \\frac{1}{13}$, $P(B) = \\frac{4}{52} = \\frac{1}{13}$. $A$ và $B$ ($A \\cap B = \\emptyset$).',
   '2. $P(A \\cup B) = P(A) + P(B) = \\frac{1}{13} + \\frac{1}{13} = \\frac{2}{13}$.',
   '3. $P(\\overline{E}) = 1 - 0.25 = 0.75$.'
 ].join('\n\n');
 const post = parsePost(source + '\n\n' + input, 'math-punct-test.md');
 // Formula with trailing comma wrapped in katex-punct
 assert.match(post.html, /<span class="katex-punct">[\s\S]*?class="katex"[\s\S]*?,<\/span>/);
 // Formula with trailing period wrapped in katex-punct
 assert.match(post.html, /<span class="katex-punct">[\s\S]*?class="katex"[\s\S]*?\.<\/span>/);
 // Formula with closing paren dot wrapped in katex-punct
 assert.match(post.html, /<span class="katex-punct">[\s\S]*?class="katex"[\s\S]*?\)\.<\/span>/);
 // Long formula promoted to display mode includes period inside equation and has no orphaned period after block
 assert.match(post.html, /<annotation encoding="application\/x-tex">P\(A \\cup B\) = P\(A\) \+ P\(B\) = \\frac\{1\}\{13\} \+ \\frac\{1\}\{13\} = \\frac\{2\}\{13\}\.<\/annotation>/);
 assert.doesNotMatch(post.html, /<\/span>\.<\/li>|<\/span>\.<\/p>/);
});

test('both sorting directions use names and publication dates',()=>{
 const a={title:'Đề 2',date:'2026-01-01'},b={title:'Đề 10',date:'2026-02-01'};
 assert.ok(compareItems(a,b,'title')<0);assert.ok(compareItems(a,b,'title-desc')>0);assert.ok(compareItems(a,b,'new')>0);assert.ok(compareItems(a,b,'old')<0);
});

test('search titles and descriptions stay unique, informative and within snippet length',()=>{
 assert.equal(searchTitle('Hàm số bậc hai'),'Hàm số bậc hai · gia sư thông minh');
 const long='Đề thi thử tốt nghiệp THPT môn Toán năm 2026 trường chuyên có lời giải chi tiết';
 assert.equal(searchTitle(long),long);
 const post={type:'Bài tập',category:'Hóa học',grade:11};
 assert.equal(searchDescription('Đề hóa 11','Đề hóa 11',post),'Đề hóa 11. Bài tập Hóa học lớp 11 miễn phí trên gia sư thông minh.');
 assert.match(searchDescription('Ngắn gọn','Tiêu đề riêng',null),/^Tiêu đề riêng: Ngắn gọn$/);
 const clipped=searchDescription('từ '.repeat(100),'Tiêu đề',null);
 assert.ok(clipped.length<=160&&clipped.endsWith('…'));
});

test('only images after the first one are lazy loaded and the logo stays eager',()=>{
 const html=lazyImages('<img src="hocbaicungcon_round.svg"><img src="a.png"><img src="b.png"><img loading="eager" src="c.png">');
 assert.equal(html,'<img src="hocbaicungcon_round.svg"><img src="a.png"><img loading="lazy" decoding="async" src="b.png"><img loading="eager" src="c.png">');
});

test('four-backtick quiz sets render every question and never leak protection tokens',()=>{
 const set='{"title":"Bộ thử","questions":[{"question":"Q1 $a$","options":["a","b","c","d"],"answer":0,"explanation":"e1"},{"question":"Q2","options":["x","Cả hai"],"answer":1,"hint":"h","explanation":"e2"}]}';
 const html=normalizeAndRender('Trước\n\n````quiz\n'+set+'\n````\n\nSau');
 assert.equal((html.match(/<form class="quiz"/g)||[]).length,2);
 assert.ok(!/PROTECTED_TOKEN|MATH_BLOCK/.test(html));
 assert.match(html,/Câu 2\/2/);
 // "Cả hai" is positional: it keeps its place and its answer index stays 2
 assert.match(html,/data-answers="\[&quot;2&quot;\]"/);
 const answers=[...html.matchAll(/data-answers="\[&quot;(\d)&quot;\]"/g)].map(m=>Number(m[1]));
 const options=[...html.matchAll(/<form class="quiz"[\s\S]*?<\/fieldset>/g)][0][0].match(/<span>([^<]*)<\/span>/g).map(x=>x.replace(/<\/?span>/g,''));
 assert.equal(options[answers[0]-1],'a','shuffled answer index must still point at the right option');
});
test('invalid quiz set fails with the question number',()=>{
 assert.throws(()=>renderLessonMarkdown('````quiz\n{"questions":[{"question":"Q","options":["a","b"],"answer":5,"explanation":"e"}]}\n````'),/câu 1\/1/);
});
test('widget fences emit raw HTML while html fences stay code',()=>{
 const html=renderLessonMarkdown('```widget\n<div id="w">\n\n<button>Go</button>\n</div>\n```\n\n```html\n<div>mã</div>\n```');
 assert.match(html,/<div id="w">[\s\S]*<button>Go<\/button>/);
 assert.match(html,/<pre><code class="language-html">&lt;div&gt;mã&lt;\/div&gt;/);
});
function normalizeAndRender(md){return renderLessonMarkdown(normalizeMarkdownFormatting(md));}

test('an unclosed code fence does not leak internal placeholders into the page',()=>{
 // build.mjs also throws if a placeholder ever reaches the output; this guards the common authoring slip.
 const broken=source+'\n\n```widget\n<div>không đóng</div>\n\n## Bài tập\n\nNội dung bị nuốt';
 const html=parsePost(broken,'unclosed.md').html;
 assert.ok(!/@@(?:PROTECTED_TOKEN|MATH_BLOCK)/.test(html));
});
