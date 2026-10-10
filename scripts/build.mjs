/* credit: giasu.ai.vn */
import {bundleStylesheet} from './styles.mjs';
import fs from 'node:fs';
import {normalizeCategory} from '../assets/subject-groups.js';
import {createHash} from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import katex from 'katex';
import YAML from 'yaml';
import {importLatex} from './latex.mjs';
import {buildExams} from './exam-pages.mjs';
import {subjectGroups} from '../assets/subject-groups.js';
import {buildEntertainment,funMenu} from './entertainment.mjs';
import {renderVideo,renderQuiz} from './interactive.mjs';
function normalizeLocalAssetPaths(text){
 return text
  .replace(/(?:\/Users\/[^\/\s]+\/[^)\s"'<>]*\/)assets\/([^)\s"'<>]+)/g, '/assets/$1')
  .replace(/(?<!\/)\bassets\/([^)\s"'<>]+)/g, '/assets/$1')
  .replace(/\/{2,}assets\//g, '/assets/');
}
export function normalizeMarkdownFormatting(text) {
  if (!text) return text;
  const tokens = [];
  const protect = (pattern) => {
    text = text.replace(pattern, (match) => {
      tokens.push(match);
      return `@@PROTECTED_TOKEN_${tokens.length - 1}@@`;
    });
  };

  protect(/(?:```|~~~)[a-zA-Z0-9_-]*\r?\n[\s\S]*?\r?\n(?:```|~~~)/g);
  protect(/`[^`\r\n]+`/g);
  protect(/\$\$[\s\S]+?\$\$/g);
  protect(/(?<!\$)\$(?!\$)((?:\\.|[^$\r\n])+?)\$(?!\$)/g);

  // Clean malformed question numbers and options from bad bold tags
  text = text.replace(/\*+Câu[\s*]*(\d+)[\s*]*:[\s*]*/g, '**Câu $1:** ');
  text = text.replace(/\*\*([A-Da-d])\s*\*+\.\s*\*+/g, '**$1.** ');

  // Remove trailing runaway asterisks at end of lines (only when preceded by whitespace)
  text = text.replace(/(?<=\s)\*+\s*$/gm, '');

  // Remove empty bold/italic tokens: ****, ******, ** **, * *
  text = text.replace(/\*{4,}/g, '');
  text = text.replace(/\*\*\s+\*\*/g, ' ');
  text = text.replace(/(?<!\*)\*\s+\*(?!\*)/g, ' ');

  // Triple bold-italic with missing space
  text = text.replace(/(\*\*\*[^*\r\n]+?\*\*\*)([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9*])/g, '$1 $2');

  // Bold with leading/trailing spaces inside markers
  text = text.replace(/\*\*([\t\u00a0 ]*)([^*\r\n]+?)([\t\u00a0 ]*)\*\*/g, (m, lead, body, trail) => {
    return (lead ? ' ' : '') + '**' + body.trim() + '**' + (trail ? ' ' : '');
  });

  // Italic with leading/trailing spaces inside markers
  text = text.replace(/(?<!\*)\*([\t\u00a0 ]*)([^*\r\n]+?)([\t\u00a0 ]*)\*(?!\*)/g, (m, lead, body, trail) => {
    return (lead ? ' ' : '') + '*' + body.trim() + '*' + (trail ? ' ' : '');
  });

  // Missing space after closing ** or * when followed by a word character
  text = text.replace(/(\*\*(?!\s)[^*\r\n]+?(?<!\s)\*\*)([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9])/g, '$1 $2');
  text = text.replace(/(\*\*(?!\s)[^*\r\n]+?[:.?!](?<!\s)\*\*)([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9(\[])/g, '$1 $2');
  text = text.replace(/((?<!\*)\*(?!\s)[^*\r\n]+?(?<!\s)\*(?!\*))([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9])/g, '$1 $2');

  // Remove redundant download button artifacts: [Label](url)[Download](url)
  text = text.replace(/(\[[^\]\r\n]+\]\(([^)\r\n]+)\))[ \t]*\[(?:Download|Tải về)\]\(\2\)/gi, '$1');

  // Ensure standalone download link lines are formatted as bullet list items
  text = text.replace(/^([ \t]*)\[([^\]\r\n]+)\]\(((?:\/assets\/docs\/|https?:\/\/drive\.google\.com\/)[^)\r\n]+)\)[ \t]*$/gm, '$1- [$2]($3)');

  // Restore protected tokens
  text = text.replace(/@@PROTECTED_TOKEN_(\d+)@@/g, (_, idx) => tokens[Number(idx)]);
  return text;
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
export const subjects = ['Toán học','Ngữ văn','Ngoại ngữ','Khoa học tự nhiên','Vật lí','Hóa học','Sinh học','Lịch sử','Địa lí','Giáo dục KTPL','CNTT','Công nghệ','Hoạt động trải nghiệm','Các môn khác'];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mathMacros={'\\ge':'\\geqslant','\\le':'\\leqslant'};
marked.use({extensions:[
 {name:'mathBlock',level:'block',start:s=>s.indexOf('$$'),tokenizer(s){const m=/^(?:[ \t]*\n)?\$\$\s*\n?([\s\S]+?)\$\$(?:\n|$)/.exec(s);if(m)return {type:'mathBlock',raw:m[0],text:m[1]};},renderer:t=>katex.renderToString(t.text,{displayMode:true,throwOnError:true,macros:{...mathMacros}})},
 {name:'mathDisplayInline',level:'inline',start:s=>s.indexOf('$$'),tokenizer(s){const m=/^\$\$([\s\S]+?)\$\$/.exec(s);if(m)return {type:'mathDisplayInline',raw:m[0],text:m[1]};},renderer:t=>katex.renderToString(t.text,{displayMode:true,throwOnError:true,macros:{...mathMacros}})},
 {name:'mathInline',level:'inline',start:s=>s.indexOf('$'),tokenizer(s){const m=/^\$(?!\$)((?:\\.|[^$\n])+?)\$/.exec(s);if(m)return {type:'mathInline',raw:m[0],text:m[1]};},renderer:t=>katex.renderToString(t.text,{throwOnError:true,macros:{...mathMacros}})}
]});
marked.use({renderer:{code(token){
 if(token.lang==='youtube')return renderVideo(token.text);
 if(token.lang==='quiz')return renderQuiz(token.text,text=>marked.parseInline(text));
 return false;
}}});
const canonicalTags = new Map([
 ['tiếng trung', 'Tiếng Trung'],
 ['bộ thủ', 'Bộ thủ'],
 ['chữ hán', 'Chữ Hán'],
 ['kanji', 'Kanji'],
 ['hóa 12', 'Hóa 12'],
 ['este', 'Este'],
 ['điện phân', 'Điện phân'],
 ['lập trình', 'Lập trình'],
 ['tiếng nhật', 'Tiếng Nhật'],
 ['bài tập tin học', 'Bài tập tin học']
]);
export function parsePost(source, filename) {
 const match=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(source);
 if(!match)throw Error(`${filename}: thiếu thông tin đầu bài (front matter)`);
 const data=YAML.parse(match[1]);
 for(const key of ['title','description','category','date'])if(typeof data[key]!=='string'||!data[key].trim())throw Error(`${filename}: ${key} phải là chuỗi không rỗng`);
 data.category=normalizeCategory(data.category);
 const category=[...subjects,'Giải trí'].find(s=>s.toLocaleLowerCase('vi')===data.category.trim().normalize('NFC').toLocaleLowerCase('vi'));
 if(!category)throw Error(`${filename}: môn học không hợp lệ: ${data.category}`);
 data.category=category;
 if(!/^\d{4}-\d{2}-\d{2}$/.test(data.date)||Number.isNaN(Date.parse(data.date))||new Date(data.date).toISOString().slice(0,10)!==data.date)throw Error(`${filename}: ngày không hợp lệ`);
 if(!Array.isArray(data.tags)||!data.tags.length||data.tags.some(t=>typeof t!=='string'||!t.trim()))throw Error(`${filename}: tags phải là danh sách chuỗi`);
 data.tags = data.tags.map(t => { const clean = t.trim(); return canonicalTags.get(clean.toLowerCase()) || clean; });
 if(data.grade!==undefined&&(!Number.isInteger(data.grade)||data.grade<1||data.grade>12))throw Error(`${filename}: lớp phải từ 1 đến 12`);
 if(!['Bài học','Bài tập','Giai thoại','Câu đố','Khám phá','Thí nghiệm vui','Lịch sử khoa học','Mẹo học tập'].includes(data.type))throw Error(`${filename}: type bài viết không được hỗ trợ`);
 const slug=path.basename(filename,'.md');
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))throw Error(`${filename}: tên file dùng chữ thường không dấu, số và dấu gạch ngang`);
 const body=normalizeLocalAssetPaths(match[2]);
 const formattedBody=normalizeMarkdownFormatting(body);
 return {...data,slug,minutes:Math.max(2,Math.ceil(body.split(/\s+/).length/200)),html:(()=>{try{return marked.parse(formattedBody).replace(/<ul>(?=\s*<li>\s*(?:<p>)?\s*<strong>[A-Da-d][.)]<\/strong>)/g,'<ul class="answer-options">');}catch(error){throw Error(`${filename}: ${error.message}`);}})()};
}
const gradeLabel=p=>p.grade===undefined?'Mọi lớp':`Lớp ${p.grade}`;
const icons={'Toán học':'∑','Ngữ văn':'Aa','Tiếng Việt':'Ă','Tiếng Anh':'En','Vật lí':'↗','Hóa học':'⚗','Sinh học':'♧','Tin học':'</>','CNTT':'</>'};
const date=s=>new Date(s+'T00:00:00Z').toLocaleDateString('vi-VN',{timeZone:'UTC'});
function slugifyHeading(text) {
 return text.toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '') || 'muc';
}

function processArticleHeadings(html) {
 const headings = [];
 const usedSlugs = new Set();
 const processedHtml = html.replace(/<(h[23])(\b[^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, content) => {
  const level = Number(tag[1]);
  const cleanText = content.replace(/<[^>]+>/g, '').trim();
  if (!cleanText) return match;
  let slug = attrs.match(/\bid="([^"]*)"/i)?.[1];
  let newAttrs = attrs;
  if (!slug) {
   const baseSlug = slugifyHeading(cleanText);
   slug = baseSlug;
   let counter = 1;
   while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter++}`;
   }
   usedSlugs.add(slug);
   newAttrs = `${attrs} id="${slug}"`;
  } else {
   usedSlugs.add(slug);
  }
  headings.push({ level, text: cleanText, id: slug });
  return `<${tag}${newAttrs}>${content}</${tag}>`;
 });
 return { html: processedHtml, headings };
}

function getRelatedPosts(p, allPosts, limit = 4) {
 const pTags = new Set((p.tags || []).map(t => t.toLowerCase()));
 return allPosts
  .filter(q => q.slug !== p.slug)
  .map(q => {
   let score = 0;
   if (q.category === p.category) score += 6;
   if (p.grade !== undefined && q.grade === p.grade) score += 4;
   if (q.type === p.type) score += 2;
   for (const t of (q.tags || [])) {
    if (pTags.has(t.toLowerCase())) score += 5;
   }
   return { post: q, score };
  })
  .filter(item => item.score > 0)
  .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date) || a.post.title.localeCompare(b.post.title, 'vi'))
  .slice(0, limit)
  .map(item => item.post);
}
function shell(title,description,body,prefix='./') {return `<!doctype html><!-- credit: giasu.ai.vn --><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · gia sư thông minh</title><meta name="description" content="${esc(description)}"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;500;600;700&amp;display=swap"><meta name="theme-color" content="#42caea"><link rel="icon" type="image/svg+xml" sizes="any" href="${prefix}favicon.svg"><link rel="apple-touch-icon" href="${prefix}assets/og-cover.png"><link rel="stylesheet" href="${prefix}assets/style.css"><link rel="stylesheet" href="${prefix}assets/katex/katex.min.css"></head><body><a class="skip" href="#main">Đến nội dung</a><header><div class="nav wrap"><a class="brand" href="${prefix}"><img src="${prefix}hocbaicungcon_round.svg" alt="" width="46" height="46"><span><strong class="brand-name">gia sư</strong> <b>thông minh<span class="dot">.</span></b></span></a><nav aria-label="Điều hướng chính"><details class="nav-exams nav-library"><summary>Thư viện bài học</summary><div class="nav-submenu"><a href="${prefix}thu-vien.html">Tất cả bài học</a>${subjectGroups.map(g=>`<a href="${prefix}thu-vien.html?category=${encodeURIComponent(g.label)}">${esc(g.subjects[0]||g.label)}</a>`).join('')}</div></details><details class="nav-exams"><summary>Đề kiểm tra</summary><div class="nav-submenu"><a href="${prefix}de-kiem-tra/">Tất cả đề</a><a href="${prefix}de-kiem-tra/?group=vi%E1%BB%87t+nam">Đề Việt Nam</a><a href="${prefix}de-kiem-tra/?group=qu%E1%BB%91c+t%E1%BA%BF">Toán quốc tế</a></div></details>${funMenu(prefix)}<a class="nav-pill" href="${prefix}gioi-thieu.html">Giới thiệu <span>↗</span></a></nav></div></header>${body}<script src="${prefix}assets/lesson.js" defer></script><footer class="wrap"><a class="brand small" href="${prefix}"><span class="footer-brand-first">gia sư</span><span class="footer-brand-second">thông minh</span><span class="dot">.</span></a><p>✦ Mỗi bài học, một bước tiến!</p><a class="footer-link" href="${prefix}gioi-thieu.html">Giới thiệu &amp; Miễn trừ trách nhiệm</a><a class="footer-link" href="https://amthanhnhapkhau.com.vn/danh-muc/phong-hop/thiet-bi-may-tro-giang/">loa - micro trợ giảng</a></footer></body></html>`;}
function card(p,i){return `<article class="card" data-slug="${p.slug}"><a class="card-link" href="./bai-viet/${p.slug}.html"><div class="card-art tone-${i%4}" aria-hidden="true"><span class="art-label">${esc(p.category)}</span><span class="art-symbol">${icons[p.category]||'✧'}</span><span class="art-grade">${p.grade===undefined?'✦':String(p.grade).padStart(2,'0')}<small>${p.grade===undefined?'MỌI LỚP':'LỚP'}</small></span></div><div class="card-content"><div class="eyebrow"><span>${esc(p.type)}</span><span>•</span><span>${gradeLabel(p)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p></div></a><div class="card-bottom"><div class="tags">${p.tags.slice(0,2).map(t=>`<button class="tag" data-tag="${esc(t)}">#${esc(t)}</button>`).join('')}</div></div></article>`;}
function withLessonSolutions(html,exam){
 if(!exam)return html;
 let index=0;
 return html.replace(/(<h3[^>]*>Câu \d+<\/h3>[\s\S]*?)(?=<h[23]\b|$)/g,(block)=>{
  const q=exam.questions[index++];if(!q?.solution)return block;
  const solution=marked.parse(normalizeMarkdownFormatting(q.solution)).replace(/<ul>(?=\s*<li>\s*(?:<p>)?\s*<strong>[a-d]\)<\/strong>)/g,'<ul class="answer-options">');
  return block+`<details class="lesson-solution"><summary>Hiện/ẩn lời giải — ${esc(q.label)}</summary><div>${solution}</div></details>`;
 });
}
export function build(){
 const imported=importLatex(root);
 const posts=fs.readdirSync(path.join(root,'post')).filter(f=>f.endsWith('.md')).map(f=>parsePost(fs.readFileSync(path.join(root,'post',f),'utf8'),f)).concat(imported.map(p=>parsePost(p.markdown,p.filename))).sort((a,b)=>b.date.localeCompare(a.date)||a.title.localeCompare(b.title,'vi'));
 fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(path.join(out,'bai-viet'),{recursive:true});fs.cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});fs.cpSync(path.join(root,'node_modules/katex/dist'),path.join(out,'assets/katex'),{recursive:true});fs.copyFileSync(path.join(root,'hocbaicungcon_round.svg'),path.join(out,'hocbaicungcon_round.svg'));fs.copyFileSync(path.join(root,'hocbaicungcon_round.svg'),path.join(out,'favicon.svg'));fs.writeFileSync(path.join(out,'.nojekyll'),'');
 fs.copyFileSync(path.join(root,'CNAME'),path.join(out,'CNAME'));
 fs.mkdirSync(path.join(out,'assets/latex'),{recursive:true});
 fs.mkdirSync(path.join(out,'markdown'),{recursive:true});
 for(const p of imported){fs.writeFileSync(path.join(out,'markdown',p.filename),p.markdown);for(const img of p.images)fs.copyFileSync(img.source,path.join(out,'assets/latex',img.name));}
 const counts=subjects.map(s=>[s,posts.filter(p=>p.category===s).length]);
 // Imported exams are already represented in posts; count each published item once.
 const popularSubjects=counts.filter(([,n])=>n>0).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'vi')).slice(0,6).map(([s])=>s);
  const homeBody=`<main id="main"><section class="hero wrap"><div><div class="kicker"><span></span> GÓC HỌC TẬP NHỎ, KHÁM PHÁ THẬT TO</div><h1>Học <span class="hero-accent">dễ hiểu.</span><br>Luyện <span class="hero-highlight">vững vàng.<svg viewBox="0 0 310 16" aria-hidden="true"><path d="M3 11 Q140 -3 305 8"/></svg></span></h1><p>Bài học gần gũi, bài tập vừa sức.<br>Cùng con khám phá kiến thức và tiến bộ mỗi ngày.</p><a class="primary" href="./thu-vien.html">Khám phá bài học <span>↗</span></a><div class="hero-note"><span>✦</span> Từ lớp 1 đến lớp 12 <i>·</i> Học theo nhịp của con</div></div><div class="hero-visual" aria-label="Bạn đồng hành học tập"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="float float-math">x² + y²</span><span class="float float-book">Aa <small>Học thêm điều hay</small></span><span class="spark spark-one">✳</span><span class="spark spark-two">✦</span><div class="mascot"><img src="./hocbaicungcon_round.svg" alt="Bạn robot đồng hành học tập" width="260" height="260"></div><span class="float float-note">✓ <span>Mỗi ngày một chút,<br><b>hiểu biết thêm nhiều!</b></span></span></div></section><section id="mon-hoc" class="subject-section"><div class="wrap subject-row"><div><span class="overline">BẮT ĐẦU TỪ ĐIỀU CON THÍCH</span><h2>Hôm nay, học gì nhỉ?</h2></div><div class="subject-picks">${popularSubjects.map(s=>`<a class="subject-pick" href="./thu-vien.html?category=${encodeURIComponent(s)}"><span>${esc(icons[s]||'✦')}</span>${esc(s)}</a>`).join('')}</div></div></section><section id="thu-vien" class="wrap library library-home"><div class="section-heading"><div><span class="overline">HỌC MỘT ĐIỀU MỚI MỖI NGÀY</span><h2>Bài học mới nhất<span class="dot">.</span></h2></div><p>Một nơi nhỏ, thật nhiều điều để học. Khám phá các bài học mới cập nhật hôm nay.</p></div><div class="cards" id="cards">${posts.slice(0,9).map(card).join('')}</div><div class="library-more wrap"><a class="primary see-more-btn" href="./thu-vien.html">Xem tiếp <span>↗</span></a></div></section><section id="gioi-thieu" class="wrap about"><span class="about-icon">✦</span><div><span class="overline">CÙNG CON TRÊN HÀNH TRÌNH HỌC TẬP</span><h2>Nuôi sự tò mò. Bồi đắp tự tin.</h2><p><strong class="about-brand">gia sư thông minh</strong> chia sẻ bài học và bài tập từ tiểu học đến THPT.<br>Để mỗi lần ngồi vào bàn học là một cơ hội khám phá điều mới.</p><p class="about-contact">Cần hỗ trợ? <a href="tel:0375839806">0375 839 806</a> · <a href="./gioi-thieu.html">Giới thiệu &amp; Miễn trừ trách nhiệm →</a></p></div><a href="./gioi-thieu.html" aria-label="Xem trang giới thiệu và miễn trừ trách nhiệm">↗</a></section></main><script>if(location.hash==='#thu-vien'||location.search){const p=new URLSearchParams(location.search);if(p.has('category')||p.has('tag')||p.has('grade')||p.has('type')||p.has('q')){location.replace('./thu-vien.html'+location.search);}}</script>`;
  fs.writeFileSync(path.join(out,'index.html'),shell('Học dễ hiểu, luyện vững vàng','Bài học và bài tập từ lớp 1 đến lớp 12. Khám phá theo môn học, lớp và chủ đề.',homeBody));
  const libraryBody=`<main id="main"><section class="wrap library-page-header"><nav class="eyebrow breadcrumb" aria-label="Đường dẫn bài viết"><a href="./">Trang chủ</a><span aria-hidden="true">/</span><span>Thư viện bài học</span></nav><div class="section-heading"><div><span class="overline">TỔNG HỢP KIẾN THỨC TỪ LỚP 1 ĐẾN LỚP 12</span><h1>Thư viện bài học<span class="dot">.</span></h1></div><p>Một nơi nhỏ, thật nhiều điều để học. Khám phá bài học và bài tập theo từng môn học và cấp lớp.</p></div></section><section id="thu-vien" class="wrap library"><nav class="library-sections" aria-label="Nhóm nội dung"><a class="active" aria-current="page" href="./thu-vien.html">Các môn học</a><a href="./giai-tri/">Giải trí</a></nav><div class="library-layout"><aside><h3>Môn học</h3><div class="category-list"><button class="category active" data-category="" aria-pressed="true"><span>Tất cả</span><small>${posts.length}</small></button>${counts.map(([s,n])=>`<button class="category" data-category="${s}" aria-pressed="false"><span>${s}</span><small>${n}</small></button>`).join('')}</div><div class="aside-note"><span>✳</span><h3>Chậm một chút,<br>chắc hơn một chút.</h3><p>Hiểu bài hôm nay là nền tảng cho ngày mai.</p></div></aside><div class="results"><div class="filter-bar"><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="Tìm bài học, chủ đề…" aria-label="Tìm bài học"><button type="button" id="search-clear" class="search-clear" aria-label="Xóa tìm kiếm" hidden>×</button></label><select id="category-select" aria-label="Lọc theo môn học"><option value="">Tất cả môn học</option>${counts.map(([s,n])=>`<option value="${esc(s)}">${esc(s)} (${n})</option>`).join('')}</select><select id="grade" aria-label="Lọc theo lớp"><option value="">Tất cả lớp</option>${Array.from({length:12},(_,i)=>`<option value="${i+1}">Lớp ${i+1}</option>`).join('')}</select><select id="type" aria-label="Loại bài"><option value="">Tất cả loại bài</option><option>Bài học</option><option>Bài tập</option><option>Giai thoại</option><option>Câu đố</option></select></div><div class="result-meta"><span id="result-count" role="status">${posts.length} bài viết để khám phá</span><div class="sort-controls" aria-label="Sắp xếp"><button type="button" data-sort="name" aria-label="Sắp xếp tên A đến Z" title="Tên A → Z">A↓Z</button><button type="button" data-sort="date" aria-label="Sắp xếp mới đến cũ" title="Mới → cũ">◷↓</button></div></div><div id="active-filters"></div><div class="cards" id="cards">${posts.map(card).join('')}</div><div class="pagination-wrap" id="pagination-wrap"><button type="button" id="load-more" class="load-more-btn" hidden>Xem thêm bài viết ↓</button><nav class="pagination" id="pagination" aria-label="Phân trang bài viết"></nav></div><div id="empty" hidden><span>⌕</span><h3>Chưa tìm thấy bài phù hợp</h3><p>Thử một từ khóa khác hoặc bỏ bớt bộ lọc nhé.</p><button id="reset" class="primary">Xóa bộ lọc</button></div><noscript><p>Bật JavaScript để tìm kiếm và lọc bài viết. Bạn vẫn có thể đọc tất cả các bài bên trên.</p></noscript></div></div></section></main><script type="module" src="./assets/app.js"></script>`;
  fs.writeFileSync(path.join(out,'thu-vien.html'),shell('Thư viện bài học và bài tập','Thư viện tổng hợp bài học, bài tập từ lớp 1 đến lớp 12 các môn Toán học, Ngữ văn, Ngoại ngữ, Vật lí, Hóa học, Sinh học, Lịch sử, Địa lí, CNTT... Khám phá theo môn học, lớp và chủ đề.',libraryBody));
  const aboutBody=`<main id="main" class="article-wrap wrap about-page"><nav class="eyebrow breadcrumb" aria-label="Đường dẫn bài viết"><a href="./">Trang chủ</a><span aria-hidden="true">/</span><span>Giới thiệu</span></nav><div class="article-heading"><h1>Giới thiệu &amp; Miễn trừ trách nhiệm</h1><p>Thông tin về nền tảng học tập Gia Sư Thông Minh và các điều khoản sử dụng, tuyên bố miễn trừ trách nhiệm pháp lý.</p></div><article class="prose"><h2>1. Về chúng tôi – Gia Sư Thông Minh</h2><p><strong>Gia Sư Thông Minh</strong> (<a href="https://giasu.ai.vn">giasu.ai.vn</a>) là nền tảng chia sẻ bài giảng, bài tập và tài liệu học tập trực tuyến hoàn toàn <strong>miễn phí</strong>, đồng hành cùng học sinh từ lớp 1 đến lớp 12, phụ huynh và quý thầy cô giáo trên cả nước.</p><p>Với phương châm <em>"Học dễ hiểu, luyện vững vàng"</em>, chúng tôi mong muốn mang đến một không gian tự học gần gũi, giúp các em củng cố bài học trên lớp, bồi đắp sự tự tin và nuôi dưỡng niềm say mê khám phá tri thức mỗi ngày.</p><h2>2. Nội dung và tiện ích trên hệ thống</h2><ul><li><strong>Thư viện bài học đa dạng:</strong> Hơn 770 bài học thuộc các môn Toán học, Ngữ văn, Ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nga), Khoa học tự nhiên, Vật lí, Hóa học, Sinh học, Lịch sử, Địa lí, Giáo dục KTPL, Công nghệ, Tin học/CNTT... được sắp xếp khoa học theo môn học và từng khối lớp.</li><li><strong>Đề kiểm tra &amp; Bài tập tự luyện:</strong> Hệ thống đề thi học kì, đề thi học sinh giỏi, đề tuyển sinh vào lớp 10, đề thi tốt nghiệp THPT kèm hướng dẫn giải chi tiết và bài kiểm tra trắc nghiệm tương tác chấm điểm trực tiếp.</li><li><strong>Góc giải trí phát triển tư duy:</strong> Các trò chơi rèn luyện trí tuệ (2048, Sudoku, Tháp Hà Nội, Qua sông), câu đố IQ, English Riddles, danh ngôn truyền cảm hứng và mẹo học tập thông minh.</li><li><strong>Trải nghiệm học tập hiện đại:</strong> Tối ưu hóa hiển thị công thức Toán học chuẩn KaTeX, giao diện thân thiện với mọi thiết bị di động, hỗ trợ tùy chỉnh cỡ chữ và chế độ ban đêm (Dark Mode) bảo vệ mắt.</li></ul><div class="disclaimer-card"><h3>⚠️ Tuyên bố Miễn trừ trách nhiệm (Disclaimer)</h3><p><strong>Khẳng định tính chất tham khảo:</strong> Toàn bộ thông tin, bài giảng, bài tập, lời giải gợi ý, đề thi và tài liệu học tập được chia sẻ trên website <strong>giasu.ai.vn</strong> chỉ mang <strong>tính chất tham khảo</strong>, phục vụ nhu cầu tự học, ôn tập và nghiên cứu cá nhân của người đọc.</p><p><strong>Khuyến cáo người đọc thận trọng khi sử dụng:</strong></p><ul><li>Mặc dù ban biên tập luôn nỗ lực kiểm duyệt, tổng hợp và biên soạn cẩn trọng từ các nguồn giáo dục uy tín, chúng tôi <strong>không cam kết hay bảo đảm tuyệt đối</strong> rằng toàn bộ nội dung đều hoàn toàn không có sai sót, nhầm lẫn hoặc phù hợp tuyệt đối với mọi yêu cầu đánh giá riêng biệt tại từng trường lớp cụ thể.</li><li>Người đọc (bao gồm học sinh, phụ huynh và giáo viên) <strong>hãy luôn thận trọng khi sử dụng</strong>, chủ động kiểm chứng, so sánh và đối chiếu nội dung với sách giáo khoa chính thống của Bộ Giáo dục và Đào tạo, phân phối chương trình của nhà trường và hướng dẫn trực tiếp từ thầy cô giáo bộ môn.</li><li>Nội dung trên website <strong>không thay thế</strong> cho chương trình giảng dạy chính khóa tại trường học, quyết định của các hội đồng chuyên môn hoặc tư vấn sư phạm chính thức.</li><li>Người đọc tự chịu hoàn toàn trách nhiệm khi áp dụng bất kỳ thông tin, kiến thức hay tài liệu tải về từ website vào các bài kiểm tra, kỳ thi, nghiên cứu hoặc công việc thực tế. Ban quản trị website miễn trừ mọi trách nhiệm pháp lý đối với bất kỳ khiếu nại, tổn thất hay rủi ro nào phát sinh từ việc sử dụng các thông tin này.</li></ul></div><h2>3. Bản quyền và Tài liệu liên kết</h2><p>Gia Sư Thông Minh luôn tôn trọng quyền tác giả và quyền sở hữu trí tuệ. Các tài liệu giáo dục và đề thi được sưu tầm, chia sẻ nhằm mục đích hỗ trợ cộng đồng học tập phi thương mại.</p><p>Website có thể dẫn link đến các trang web, video hoặc dịch vụ lưu trữ của bên thứ ba (như Google Drive, YouTube...). Chúng tôi không sở hữu, quản lý và không chịu trách nhiệm về nội dung, tính sẵn sàng hay chính sách bảo mật của các trang web bên ngoài này.</p><p>Nếu bạn là chủ sở hữu bản quyền của bất kỳ tài liệu nào xuất hiện trên trang web và muốn yêu cầu đính chính, chỉnh sửa hoặc gỡ bỏ, xin vui lòng liên hệ ngay với chúng tôi để được giải quyết kịp thời.</p><h2>4. Thông tin liên hệ &amp; Đóng góp ý kiến</h2><p>Mọi ý kiến đóng góp, phản hồi về nội dung hoặc yêu cầu hỗ trợ xin vui lòng liên hệ:</p><ul><li><strong>Hotline / Zalo hỗ trợ:</strong> <a href="tel:0375839806">0375 839 806</a></li><li><strong>Website chính thức:</strong> <a href="https://giasu.ai.vn/">https://giasu.ai.vn</a></li><li><strong>Trang giới thiệu:</strong> <a href="https://giasu.ai.vn/gioi-thieu.html">https://giasu.ai.vn/gioi-thieu.html</a></li></ul><p>Chúng tôi luôn lắng nghe và trân trọng mọi ý kiến đóng góp quý báu từ quý độc giả để ngày càng hoàn thiện nền tảng!</p></article></main>`;
  fs.writeFileSync(path.join(out,'gioi-thieu.html'),shell('Giới thiệu & Miễn trừ trách nhiệm','Giới thiệu về Gia Sư Thông Minh (giasu.ai.vn) – Nền tảng học tập trực tuyến, kho bài học, bài tập giáo dục miễn phí từ lớp 1 đến lớp 12 và tuyên bố miễn trừ trách nhiệm.',aboutBody));
  fs.writeFileSync(path.join(out,'assets/posts.json'),JSON.stringify(posts.map(({html,...p})=>p)));
  for(const p of posts){
   const related=getRelatedPosts(p,posts,4);
   const solvedHtml = withLessonSolutions(p.html,imported.find(item=>item.exam.slug===p.slug)?.exam);
   const {html: processedHtml, headings} = processArticleHeadings(solvedHtml);
   const hasToc = headings.length >= 2;
   const mobileToc = hasToc ? `<details class="toc-box" open><summary><span class="toc-box-title"><span class="toc-icon" aria-hidden="true">📑</span> Mục lục bài viết</span><span class="toc-count">${headings.length} mục</span></summary><nav class="toc-nav" aria-label="Mục lục bài viết"><ol class="toc-list">${headings.map(h=>`<li class="toc-item toc-level-${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></nav></details>` : '';
   const desktopToc = hasToc ? `<aside class="article-toc" aria-label="Mục lục bài viết"><div class="toc-sticky"><div class="toc-title"><span class="toc-icon" aria-hidden="true">📑</span> Mục lục bài viết</div><nav class="toc-nav" aria-label="Mục lục bài viết"><ol class="toc-list">${headings.map(h=>`<li class="toc-item toc-level-${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></nav><button type="button" class="toc-top-btn" aria-label="Cuộn lên đầu trang">↑ Đầu trang</button></div></aside>` : '';
   const articleBodyContent = hasToc ? `<div class="article-layout"><div class="article-main">${mobileToc}<article class="prose">${processedHtml}</article></div>${desktopToc}</div>` : `<article class="prose">${processedHtml}</article>`;
   const content=`<main id="main" class="article-wrap wrap${hasToc?' has-toc':''}"><a class="back" href="../thu-vien.html">← Trở về thư viện</a><div class="article-heading"><nav class="eyebrow breadcrumb" aria-label="Đường dẫn bài viết"><a href="../thu-vien.html?category=${encodeURIComponent(p.category)}">${esc(p.category)}</a><span aria-hidden="true">/</span><a href="../thu-vien.html${p.grade===undefined?'':'?grade='+p.grade}">${gradeLabel(p)}</a><span aria-hidden="true">/</span><a href="../thu-vien.html?type=${encodeURIComponent(p.type)}">${esc(p.type)}</a></nav><h1>${esc(p.title)}</h1><p>${esc(p.description)}</p><div class="article-meta"><time datetime="${p.date}">${date(p.date)}</time><div class="tags">${p.tags.map(t=>`<a class="tag" href="../thu-vien.html?tag=${encodeURIComponent(t)}">#${esc(t)}</a>`).join('')}</div></div></div>${imported.some(item=>item.exam.slug===p.slug&&item.exam.questions.length)?`<p><a class="primary" href="../de-kiem-tra/${p.slug}.html">Làm đề trực tuyến →</a></p>`:''}${articleBodyContent}<div class="article-end"><a href="../giai-tri/meo-hoc-tap.html">✦ Mẹo học tập</a><p data-study-tip>Học từng chút một, nghỉ ngơi đều đặn.</p></div><script type="module" src="../assets/article-tip.js"></script>${related.length?`<section class="related related-posts" aria-label="Bài viết cùng chủ đề"><div class="related-header"><span class="overline">✦ KIẾN THỨC CÙNG CHUYÊN MỤC</span><h2>Bài viết cùng chủ đề</h2><p>Khám phá thêm các bài học và bài tập liên quan để ôn luyện vững vàng hơn.</p></div><div class="related-grid">${related.map((q,idx)=>`<article class="related-card tone-${idx%4}"><a class="related-card-link" href="./${q.slug}.html"><div class="related-card-art" aria-hidden="true"><span class="related-symbol">${esc(icons[q.category]||'✧')}</span><span class="related-grade-pill">${gradeLabel(q)}</span></div><div class="related-card-body"><div class="related-card-eyebrow"><span class="related-category">${esc(q.category)}</span><span class="related-type">${esc(q.type)}</span></div><h3 class="related-title">${esc(q.title)}</h3><p class="related-desc">${esc(q.description)}</p><div class="related-card-footer"><span class="related-action">Đọc bài học <span class="ui-symbol ui-symbol-arrow" aria-hidden="true"></span></span></div></div></a></article>`).join('')}</div></section>`:''}</main>`;
   fs.writeFileSync(path.join(out,'bai-viet',p.slug+'.html'),shell(p.title,p.description,content,'../'));
  }
 buildEntertainment(root,out,shell,posts,card);
 buildExams(imported,out,shell,text=>marked.parse(normalizeMarkdownFormatting(text)));
 fs.writeFileSync(path.join(out,'assets/style.css'),bundleStylesheet(path.join(root,'assets/style.css')));
 const clientFiles=fs.readdirSync(path.join(out,'assets')).filter(f=>/\.(js|css)$/.test(f)).sort();
 const assetVersion=createHash('sha256').update(clientFiles.map(f=>fs.readFileSync(path.join(out,'assets',f),'utf8')).join('\n')).digest('hex').slice(0,12);
 for(const file of clientFiles.filter(f=>f.endsWith('.js'))){const target=path.join(out,'assets',file);fs.writeFileSync(target,fs.readFileSync(target,'utf8').replace(/(from\s*|import\s*)(['"])(\.\/[^'"?]+\.js)\2/g,(_,lead,quote,url)=>`${lead}${quote}${url}?v=${assetVersion}${quote}`));}
 const postMap=new Map(posts.map(p=>[p.slug,p]));
 for(const file of fs.readdirSync(out,{recursive:true}).filter(file=>file.endsWith('.html'))){
  const htmlPath=path.join(out,file);let html=fs.readFileSync(htmlPath,'utf8');
  html=html.replace('<nav aria-label="Điều hướng chính">','<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><b class="sr-only">Mở menu</b></button><nav id="site-menu" aria-label="Điều hướng chính">');
  const assetPrefix=file.includes('/')?'../':'./';
  html=html.replace('</head>',`<script src="${assetPrefix}assets/preferences.js"></script></head>`);
  html=html.replace('</nav></div></header>',`<div class="display-controls" role="group" aria-label="Tùy chỉnh hiển thị"><button type="button" data-action="less" aria-label="Giảm cỡ chữ" title="Giảm cỡ chữ">A−</button><button type="button" data-action="more" aria-label="Tăng cỡ chữ" title="Tăng cỡ chữ">A+</button><button type="button" data-action="font" aria-label="Chuyển font chữ" title="Chuyển font chữ" aria-pressed="false">𝑨</button><button type="button" data-action="theme" aria-label="Đổi giao diện" title="Đổi giao diện" aria-pressed="false"><span class="ui-symbol ui-symbol-moon" aria-hidden="true"></span></button></div></nav></div></header>`);
  html=html.replace('</body>','<button class="go-top" type="button" aria-label="Lên đầu trang" title="Lên đầu trang">↑</button><script src="'+assetPrefix+'assets/menu.js" defer></script><script src="'+assetPrefix+'assets/top.js" defer></script></body>');
  html=html.replace(/<span(?: aria-hidden="true")?>↗<\/span>/g,'<span class="ui-symbol ui-symbol-arrow" aria-hidden="true"></span>');
  const normFile=file.replace(/\\/g,'/');
  let canonicalPath=normFile==='index.html'?'':normFile;
  if(canonicalPath.endsWith('/index.html'))canonicalPath=canonicalPath.slice(0,-10);
  const canonical='https://giasu.ai.vn/'+canonicalPath;
  const seoTitle=html.match(/<title>([^<]*)<\/title>/)?.[1]||'gia sư thông minh';
  const cleanTitle=seoTitle.replace(/ · gia sư thông minh$/,'');
  const seoDescription=html.match(/<meta name="description" content="([^"]*)">/)?.[1]||'Bài học và bài tập dành cho học sinh lớp 1 đến lớp 12.';
  const slug=normFile.startsWith('bai-viet/')?path.basename(normFile,'.html'):null;
  const post=slug?postMap.get(slug):null;
  const imgMatch=html.match(/<article[\s\S]*?<img[^>]+src="([^">]+)"/);
  let ogImage='https://giasu.ai.vn/assets/og-cover.png';
  if(imgMatch){
   let src=imgMatch[1].replace(/^\.\.\//,'/').replace(/^\.\//,'/');
   if(!src.startsWith('/'))src='/'+src;
   ogImage='https://giasu.ai.vn'+src;
  }
  const twitterCard=(imgMatch||normFile==='index.html')?'summary_large_image':'summary';
  let schema;
  if(post){
   schema={'@context':'https://schema.org','@graph':[
    {
     '@type':'Article',
     '@id':`${canonical}#article`,
     isPartOf:{'@id':canonical},
     headline:cleanTitle,
     description:seoDescription,
     url:canonical,
     datePublished:`${post.date}T00:00:00+07:00`,
     dateModified:`${post.date}T00:00:00+07:00`,
     inLanguage:'vi',
     image:ogImage,
     publisher:{
      '@type':'Organization',
      '@id':'https://giasu.ai.vn/#organization',
      name:'gia sư thông minh',
      url:'https://giasu.ai.vn/',
      logo:{'@type':'ImageObject',url:'https://giasu.ai.vn/assets/og-cover.png'}
     },
     author:{'@type':'Organization',name:'gia sư thông minh',url:'https://giasu.ai.vn/'},
     articleSection:post.category,
     keywords:post.tags?.join(', ')
    },
    {
     '@type':'BreadcrumbList',
     '@id':`${canonical}#breadcrumb`,
     itemListElement:[
      {'@type':'ListItem',position:1,name:'Trang chủ',item:'https://giasu.ai.vn/'},
      {'@type':'ListItem',position:2,name:post.category,item:`https://giasu.ai.vn/?category=${encodeURIComponent(post.category)}#thu-vien`},
      {'@type':'ListItem',position:3,name:post.title,item:canonical}
     ]
    }
   ]};
  }else if(normFile==='thu-vien.html'){
   schema={'@context':'https://schema.org','@graph':[
    {
     '@type':'CollectionPage',
     '@id':'https://giasu.ai.vn/thu-vien.html#collection',
     name:'Thư viện bài học và bài tập',
     url:'https://giasu.ai.vn/thu-vien.html',
     description:seoDescription,
     inLanguage:'vi',
     isPartOf:{'@id':'https://giasu.ai.vn/#website'}
    },
    {
     '@type':'BreadcrumbList',
     '@id':'https://giasu.ai.vn/thu-vien.html#breadcrumb',
     itemListElement:[
      {'@type':'ListItem',position:1,name:'Trang chủ',item:'https://giasu.ai.vn/'},
      {'@type':'ListItem',position:2,name:'Thư viện bài học',item:'https://giasu.ai.vn/thu-vien.html'}
     ]
    }
   ]};
  }else if(normFile==='gioi-thieu.html'){
   schema={'@context':'https://schema.org','@graph':[
    {
     '@type':'AboutPage',
     '@id':'https://giasu.ai.vn/gioi-thieu.html#about',
     name:'Giới thiệu & Miễn trừ trách nhiệm',
     url:'https://giasu.ai.vn/gioi-thieu.html',
     description:seoDescription,
     inLanguage:'vi',
     isPartOf:{'@id':'https://giasu.ai.vn/#website'},
     about:{'@id':'https://giasu.ai.vn/#organization'}
    },
    {
     '@type':'BreadcrumbList',
     '@id':'https://giasu.ai.vn/gioi-thieu.html#breadcrumb',
     itemListElement:[
      {'@type':'ListItem',position:1,name:'Trang chủ',item:'https://giasu.ai.vn/'},
      {'@type':'ListItem',position:2,name:'Giới thiệu',item:'https://giasu.ai.vn/gioi-thieu.html'}
     ]
    }
   ]};
  }else if(normFile==='index.html'){
   schema={'@context':'https://schema.org','@graph':[
    {
     '@type':'WebSite',
     '@id':'https://giasu.ai.vn/#website',
     name:'gia sư thông minh',
     url:'https://giasu.ai.vn/',
     description:seoDescription,
     inLanguage:'vi',
     publisher:{'@id':'https://giasu.ai.vn/#organization'}
    },
    {
     '@type':'Organization',
     '@id':'https://giasu.ai.vn/#organization',
     name:'gia sư thông minh',
     url:'https://giasu.ai.vn/',
     logo:'https://giasu.ai.vn/assets/og-cover.png',
     telephone:'0375839806'
    }
   ]};
  }else{
   schema={'@context':'https://schema.org','@graph':[
    {
     '@type':'WebPage',
     name:cleanTitle,
     description:seoDescription,
     url:canonical,
     inLanguage:'vi'
    },
    {
     '@type':'BreadcrumbList',
     itemListElement:[
      {'@type':'ListItem',position:1,name:'Trang chủ',item:'https://giasu.ai.vn/'},
      {'@type':'ListItem',position:2,name:cleanTitle,item:canonical}
     ]
    }
   ]};
  }
  let articleMeta='';
  if(post){
   articleMeta=`<meta property="article:published_time" content="${post.date}T00:00:00+07:00"><meta property="article:section" content="${esc(post.category)}">`+(post.tags||[]).map(t=>`<meta property="article:tag" content="${esc(t)}">`).join('');
  }
  const seo=`<link rel="canonical" href="${canonical}"><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta property="og:locale" content="vi_VN"><meta property="og:type" content="${post?'article':'website'}"><meta property="og:title" content="${seoTitle}"><meta property="og:description" content="${seoDescription}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="gia sư thông minh"><meta property="og:image" content="${ogImage}"><meta name="twitter:card" content="${twitterCard}"><meta name="twitter:title" content="${seoTitle}"><meta name="twitter:description" content="${seoDescription}"><meta name="twitter:image" content="${ogImage}">${articleMeta}<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>`;
  html=html.replace('</head>',`${seo}</head>`);
  html=html.replace(/((?:src|href)="[^"?]*assets\/[^"?]+\.(?:js|css))"/g,`$1?v=${assetVersion}"`);
  fs.writeFileSync(htmlPath,html);
 }
 const today=new Date().toISOString().slice(0,10);
 const allHtml=fs.readdirSync(out,{recursive:true}).filter(file=>file.endsWith('.html'));
 const sitemapItems=[];
 for(const file of allHtml){
  const norm=file.replace(/\\/g,'/');
  let urlPath=norm==='index.html'?'':norm;
  if(urlPath.endsWith('/index.html'))urlPath=urlPath.slice(0,-10);
  const loc='https://giasu.ai.vn/'+urlPath;
  let priority='0.7';let changefreq='monthly';let lastmod=today;
  if(norm==='index.html'){priority='1.0';changefreq='daily';}
  else if(norm==='thu-vien.html'){priority='0.9';changefreq='daily';}
  else if(norm==='gioi-thieu.html'){priority='0.8';changefreq='monthly';}
  else if(norm.startsWith('bai-viet/')){
   const slug=path.basename(norm,'.html');
   const p=postMap.get(slug);
   if(p?.date)lastmod=p.date;
   priority='0.7';changefreq='monthly';
  }else if(norm.endsWith('/index.html')||norm.startsWith('de-kiem-tra/')||norm.startsWith('giai-tri/')){
   priority='0.8';changefreq='weekly';
  }
  sitemapItems.push({loc,priority,changefreq,lastmod});
 }
 const uniqueUrls=Array.from(new Map(sitemapItems.map(item=>[item.loc,item])).values())
  .sort((a,b)=>(Number(b.priority)-Number(a.priority))||a.loc.localeCompare(b.loc));
 const sitemapXml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls.map(u=>`  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}\n</urlset>\n`;
 fs.writeFileSync(path.join(out,'sitemap.xml'),sitemapXml);
 fs.writeFileSync(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://giasu.ai.vn/sitemap.xml\n');
 console.log(`Built ${posts.length} posts into dist/`);return posts;
}
if(process.argv[1]===fileURLToPath(import.meta.url))build();
