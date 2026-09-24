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
 return text.replace(
  /(?:\/Users\/[^/\s]+\/[^)\s"'<>]*\/)?(assets\/[^)\s"'<>]+)/g,
  '/$1'
 );
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
export const subjects = ['Toán học','Ngữ văn','Ngoại ngữ','Khoa học tự nhiên','Vật lí','Hóa học','Sinh học','Lịch sử','Địa lí','Giáo dục KTPL','CNTT','Công nghệ','Hoạt động trải nghiệm','Các môn khác'];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mathMacros={'\\ge':'\\geqslant','\\le':'\\leqslant'};
marked.use({extensions:[{name:'mathBlock',level:'block',start:s=>s.indexOf('$$'),tokenizer(s){const m=/^\$\$\s*\n?([\s\S]+?)\$\$(?:\n|$)/.exec(s);if(m)return {type:'mathBlock',raw:m[0],text:m[1]};},renderer:t=>katex.renderToString(t.text,{displayMode:true,throwOnError:true,macros:{...mathMacros}})},{name:'mathInline',level:'inline',start:s=>s.indexOf('$'),tokenizer(s){const m=/^\$(?!\$)((?:\\.|[^$\n])+?)\$/.exec(s);if(m)return {type:'mathInline',raw:m[0],text:m[1]};},renderer:t=>katex.renderToString(t.text,{throwOnError:true,macros:{...mathMacros}})}]});
marked.use({renderer:{code(token){
 if(token.lang==='youtube')return renderVideo(token.text);
 if(token.lang==='quiz')return renderQuiz(token.text,text=>marked.parseInline(text));
 return false;
}}});
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
 if(data.grade!==undefined&&(!Number.isInteger(data.grade)||data.grade<1||data.grade>12))throw Error(`${filename}: lớp phải từ 1 đến 12`);
 if(!['Bài học','Bài tập','Giai thoại','Câu đố','Khám phá','Thí nghiệm vui','Lịch sử khoa học','Mẹo học tập'].includes(data.type))throw Error(`${filename}: type bài viết không được hỗ trợ`);
 const slug=path.basename(filename,'.md');
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))throw Error(`${filename}: tên file dùng chữ thường không dấu, số và dấu gạch ngang`);
 const body=normalizeLocalAssetPaths(match[2]);
 // return {...data,slug,minutes:Math.max(2,Math.ceil(match[2].split(/\s+/).length/200)),html:(()=>{try{return marked.parse(match[2]).replace(/<ul>(?=\s*<li>\s*(?:<p>)?\s*<strong>[A-Da-d][.)]<\/strong>)/g,'<ul class="answer-options">');}catch(error){throw Error(`${filename}: ${error.message}`);}})()};
 return {...data,slug,minutes:Math.max(2,Math.ceil(body.split(/\s+/).length/200)),html:(()=>{try{return marked.parse(body).replace(/<ul>(?=\s*<li>\s*(?:<p>)?\s*<strong>[A-Da-d][.)]<\/strong>)/g,'<ul class="answer-options">');}catch(error){throw Error(`${filename}: ${error.message}`);}})()};
}
const gradeLabel=p=>p.grade===undefined?'Mọi lớp':`Lớp ${p.grade}`;
const icons={'Toán học':'∑','Ngữ văn':'Aa','Tiếng Việt':'Ă','Tiếng Anh':'En','Vật lí':'↗','Hóa học':'⚗','Sinh học':'♧','Tin học':'</>','CNTT':'</>'};
const date=s=>new Date(s+'T00:00:00Z').toLocaleDateString('vi-VN',{timeZone:'UTC'});
function shell(title,description,body,prefix='./') {return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · gia sư thông minh</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#42caea"><link rel="icon" type="image/svg+xml" sizes="any" href="${prefix}favicon.svg"><link rel="stylesheet" href="${prefix}assets/style.css"><link rel="stylesheet" href="${prefix}assets/katex/katex.min.css"></head><body><a class="skip" href="#main">Đến nội dung</a><header><div class="nav wrap"><a class="brand" href="${prefix}"><img src="${prefix}hocbaicungcon_round.svg" alt="" width="46" height="46"><span><strong class="brand-name">gia sư</strong> <b>thông minh<span class="dot">.</span></b></span></a><nav aria-label="Điều hướng chính"><details class="nav-exams nav-library"><summary>Thư viện bài học</summary><div class="nav-submenu">${subjectGroups.map(g=>`<a href="${prefix}?category=${encodeURIComponent(g.label)}#thu-vien">${esc(g.subjects[0]||g.label)}</a>`).join('')}</div></details><details class="nav-exams"><summary>Đề kiểm tra</summary><div class="nav-submenu"><a href="${prefix}de-kiem-tra/">Tất cả đề</a><a href="${prefix}de-kiem-tra/?group=vi%E1%BB%87t+nam">Đề Việt Nam</a><a href="${prefix}de-kiem-tra/?group=qu%E1%BB%91c+t%E1%BA%BF">Toán quốc tế</a></div></details>${funMenu(prefix)}<a class="nav-pill" href="${prefix}#gioi-thieu">Cùng con học tốt <span>↗</span></a></nav></div></header>${body}<script src="${prefix}assets/lesson.js" defer></script><footer class="wrap"><a class="brand small" href="${prefix}">gia sư thông minh<span class="dot">.</span></a><p>✦ Mỗi bài học, một bước tiến!</p><a class="footer-link" href="https://amthanhnhapkhau.com.vn/danh-muc/phong-hop/thiet-bi-may-tro-giang/">loa - micro trợ giảng</a></footer></body></html>`;}
function card(p,i){return `<article class="card" data-slug="${p.slug}"><a class="card-link" href="./bai-viet/${p.slug}.html"><div class="card-art tone-${i%4}" aria-hidden="true"><span class="art-label">${esc(p.category)}</span><span class="art-symbol">${icons[p.category]||'✧'}</span><span class="art-grade">${p.grade===undefined?'✦':String(p.grade).padStart(2,'0')}<small>${p.grade===undefined?'MỌI LỚP':'LỚP'}</small></span></div><div class="card-content"><div class="eyebrow"><span>${esc(p.type)}</span><span>•</span><span>${gradeLabel(p)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p></div></a><div class="card-bottom"><div class="tags">${p.tags.slice(0,2).map(t=>`<button class="tag" data-tag="${esc(t)}">#${esc(t)}</button>`).join('')}</div></div></article>`;}
function withLessonSolutions(html,exam){
 if(!exam)return html;
 let index=0;
 return html.replace(/(<h3[^>]*>Câu \d+<\/h3>[\s\S]*?)(?=<h[23]\b|$)/g,(block)=>{
  const q=exam.questions[index++];if(!q?.solution)return block;
  const solution=marked.parse(q.solution).replace(/<ul>(?=\s*<li>\s*(?:<p>)?\s*<strong>[a-d]\)<\/strong>)/g,'<ul class="answer-options">');
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
 const body=`<main id="main"><section class="hero wrap"><div><div class="kicker"><span></span> GÓC HỌC TẬP NHỎ, KHÁM PHÁ THẬT TO</div><h1>Học <span class="hero-accent">dễ hiểu.</span><br>Luyện <span>vững vàng.</span><svg viewBox="0 0 310 16" aria-hidden="true"><path d="M3 11 Q140 -3 305 8"/></svg></h1><p>Bài học gần gũi, bài tập vừa sức.<br>Cùng con khám phá kiến thức và tiến bộ mỗi ngày.</p><a class="primary" href="#thu-vien">Khám phá bài học <span>↗</span></a><div class="hero-note"><span>✦</span> Từ lớp 1 đến lớp 12 <i>·</i> Học theo nhịp của con</div></div><div class="hero-visual" aria-label="Bạn đồng hành học tập"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="float float-math">x² + y²</span><span class="float float-book">Aa <small>Học thêm điều hay</small></span><span class="spark spark-one">✳</span><span class="spark spark-two">✦</span><div class="mascot"><img src="./hocbaicungcon_round.svg" alt="Bạn robot đồng hành học tập" width="260" height="260"></div><span class="float float-note">✓ <span>Mỗi ngày một chút,<br><b>hiểu biết thêm nhiều!</b></span></span></div></section><section id="mon-hoc" class="subject-section"><div class="wrap subject-row"><div><span class="overline">BẮT ĐẦU TỪ ĐIỀU CON THÍCH</span><h2>Hôm nay, học gì nhỉ?</h2></div><div class="subject-picks">${popularSubjects.map(s=>`<button class="subject-pick" data-subject="${s}"><span>${esc(icons[s]||'✦')}</span>${esc(s)}</button>`).join('')}</div></div></section><section id="thu-vien" class="wrap library"><div class="section-heading"><div><span class="overline">HỌC MỘT ĐIỀU MỚI MỖI NGÀY</span><h2>Thư viện kiến thức<span class="dot">.</span></h2></div><p>Một nơi nhỏ, thật nhiều điều để học.</p></div><nav class="library-sections" aria-label="Nhóm nội dung"><a class="active" aria-current="page" href="#thu-vien">Các môn học</a><a href="./giai-tri/">Giải trí</a></nav><div class="library-layout"><aside><h3>Môn học</h3><div class="category-list"><button class="category active" data-category="" aria-pressed="true"><span>Tất cả</span><small>${posts.length}</small></button>${counts.map(([s,n])=>`<button class="category" data-category="${s}" aria-pressed="false"><span>${s}</span><small>${n}</small></button>`).join('')}</div><div class="aside-note"><span>✳</span><h3>Chậm một chút,<br>chắc hơn một chút.</h3><p>Hiểu bài hôm nay là nền tảng cho ngày mai.</p></div></aside><div class="results"><div class="filter-bar"><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="Tìm bài học, chủ đề…" aria-label="Tìm bài học"></label><select id="grade" aria-label="Lọc theo lớp"><option value="">Tất cả lớp</option>${Array.from({length:12},(_,i)=>`<option value="${i+1}">Lớp ${i+1}</option>`).join('')}</select><select id="type" aria-label="Loại bài"><option value="">Tất cả loại bài</option><option>Bài học</option><option>Bài tập</option><option>Giai thoại</option><option>Câu đố</option></select></div><div class="result-meta"><span id="result-count" role="status">${posts.length} bài viết để khám phá</span><div class="sort-controls" aria-label="Sắp xếp"><button type="button" data-sort="name" aria-label="Sắp xếp tên A đến Z" title="Tên A → Z">A↓Z</button><button type="button" data-sort="date" aria-label="Sắp xếp mới đến cũ" title="Mới → cũ">◷↓</button></div></div><div id="active-filters"></div><div class="cards" id="cards">${posts.map(card).join('')}</div><div id="empty" hidden><span>⌕</span><h3>Chưa tìm thấy bài phù hợp</h3><p>Thử một từ khóa khác hoặc bỏ bớt bộ lọc nhé.</p><button id="reset" class="primary">Xóa bộ lọc</button></div><noscript><p>Bật JavaScript để tìm kiếm và lọc bài viết. Bạn vẫn có thể đọc tất cả các bài bên trên.</p></noscript></div></div></section><section id="gioi-thieu" class="wrap about"><span class="about-icon">✦</span><div><span class="overline">CÙNG CON TRÊN HÀNH TRÌNH HỌC TẬP</span><h2>Nuôi sự tò mò. Bồi đắp tự tin.</h2><p><strong class="about-brand">gia sư thông minh</strong> chia sẻ bài học và bài tập từ tiểu học đến THPT.<br>Để mỗi lần ngồi vào bàn học là một cơ hội khám phá điều mới.</p><p class="about-contact">Cần hỗ trợ? <a href="tel:0375839806">0375 839 806</a></p></div><a href="#thu-vien" aria-label="Quay lại thư viện">↗</a></section></main><script type="module" src="./assets/app.js"></script>`;
 fs.writeFileSync(path.join(out,'index.html'),shell('Học dễ hiểu, luyện vững vàng','Bài học và bài tập từ lớp 1 đến lớp 12. Khám phá theo môn học, lớp và chủ đề.',body));
 fs.writeFileSync(path.join(out,'assets/posts.json'),JSON.stringify(posts.map(({html,...p})=>p)));
 for(const p of posts){const related=posts.filter(q=>q.slug!==p.slug&&q.category===p.category).slice(0,3);const content=`<main id="main" class="article-wrap wrap"><a class="back" href="../#thu-vien">← Trở về thư viện</a><div class="article-heading"><nav class="eyebrow breadcrumb" aria-label="Đường dẫn bài viết"><a href="../?category=${encodeURIComponent(p.category)}#thu-vien">${esc(p.category)}</a><span aria-hidden="true">/</span><a href="../${p.grade===undefined?'':'?grade='+p.grade}#thu-vien">${gradeLabel(p)}</a><span aria-hidden="true">/</span><a href="../?type=${encodeURIComponent(p.type)}#thu-vien">${esc(p.type)}</a></nav><h1>${esc(p.title)}</h1><p>${esc(p.description)}</p><div class="article-meta"><time datetime="${p.date}">${date(p.date)}</time><div class="tags">${p.tags.map(t=>`<a class="tag" href="../?tag=${encodeURIComponent(t)}#thu-vien">#${esc(t)}</a>`).join('')}</div></div></div>${imported.some(item=>item.exam.slug===p.slug&&item.exam.questions.length)?`<p><a class="primary" href="../de-kiem-tra/${p.slug}.html">Làm đề trực tuyến →</a></p>`:''}<article class="prose">${withLessonSolutions(p.html,imported.find(item=>item.exam.slug===p.slug)?.exam)}</article><div class="article-end"><a href="../giai-tri/meo-hoc-tap.html">✦ Mẹo học tập</a><p data-study-tip>Học từng chút một, nghỉ ngơi đều đặn.</p></div><script type="module" src="../assets/article-tip.js"></script>${related.length?`<section class="related"><h2>Khám phá thêm</h2>${related.map(q=>`<a href="./${q.slug}.html">${esc(q.title)} <span>↗</span></a>`).join('')}</section>`:''}</main>`;fs.writeFileSync(path.join(out,'bai-viet',p.slug+'.html'),shell(p.title,p.description,content,'../'));}
 buildEntertainment(root,out,shell,posts,card);
 buildExams(imported,out,shell,text=>marked.parse(text));
 const clientFiles=fs.readdirSync(path.join(out,'assets')).filter(f=>/\.(js|css)$/.test(f)).sort();
 const assetVersion=createHash('sha256').update(clientFiles.map(f=>fs.readFileSync(path.join(out,'assets',f),'utf8')).join('\n')).digest('hex').slice(0,12);
 for(const file of clientFiles.filter(f=>f.endsWith('.js'))){const target=path.join(out,'assets',file);fs.writeFileSync(target,fs.readFileSync(target,'utf8').replace(/(from\s*|import\s*)(['"])(\.\/[^'"?]+\.js)\2/g,(_,lead,quote,url)=>`${lead}${quote}${url}?v=${assetVersion}${quote}`));}
 for(const file of fs.readdirSync(out,{recursive:true}).filter(file=>file.endsWith('.html'))){
  const htmlPath=path.join(out,file);let html=fs.readFileSync(htmlPath,'utf8');
  html=html.replace('<nav aria-label="Điều hướng chính">','<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><b class="sr-only">Mở menu</b></button><nav id="site-menu" aria-label="Điều hướng chính">');
  const assetPrefix=file.includes('/')?'../':'./';
  html=html.replace('</head>',`<script src="${assetPrefix}assets/preferences.js"></script></head>`);
  html=html.replace('</nav></div></header>',`<div class="display-controls" role="group" aria-label="Tùy chỉnh hiển thị"><button type="button" data-action="less" aria-label="Giảm cỡ chữ" title="Giảm cỡ chữ">A−</button><button type="button" data-action="more" aria-label="Tăng cỡ chữ" title="Tăng cỡ chữ">A+</button><button type="button" data-action="font" aria-label="Chuyển sang chữ có chân" title="Chuyển sang chữ có chân" aria-pressed="false">𝑨</button><button type="button" data-action="theme" aria-label="Đổi giao diện" title="Đổi giao diện" aria-pressed="false"><span class="ui-symbol ui-symbol-moon" aria-hidden="true"></span></button></div></nav></div></header>`);
  html=html.replace('</body>','<button class="go-top" type="button" aria-label="Lên đầu trang" title="Lên đầu trang">↑</button><script src="'+assetPrefix+'assets/menu.js" defer></script><script src="'+assetPrefix+'assets/top.js" defer></script></body>');
  html=html.replace(/<span(?: aria-hidden="true")?>↗<\/span>/g,'<span class="ui-symbol ui-symbol-arrow" aria-hidden="true"></span>');
  const canonicalPath=file==='index.html'?'':file.replace(/\\/g,'/');
  const canonical='https://giasu.ai.vn/'+canonicalPath;
  const seoTitle=html.match(/<title>([^<]*)<\/title>/)?.[1]||'gia sư thông minh';
  const seoDescription=html.match(/<meta name="description" content="([^"]*)">/)?.[1]||'Bài học và bài tập dành cho học sinh lớp 1 đến lớp 12.';
  const schema=file.startsWith('bai-viet/')?{ '@context':'https://schema.org','@type':'Article',headline:seoTitle.replace(/ · gia sư thông minh$/,''),description:seoDescription,url:canonical,publisher:{'@type':'Organization',name:'gia sư thông minh',logo:{'@type':'ImageObject',url:'https://giasu.ai.vn/hocbaicungcon_round.svg'}}}:{'@context':'https://schema.org','@type':'WebSite',name:'gia sư thông minh',url:'https://giasu.ai.vn/'};
  const seo=`<link rel="canonical" href="${canonical}"><meta property="og:type" content="${file.startsWith('bai-viet/')?'article':'website'}"><meta property="og:title" content="${seoTitle}"><meta property="og:description" content="${seoDescription}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="gia sư thông minh"><meta property="og:image" content="https://giasu.ai.vn/hocbaicungcon_round.svg"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${seoTitle}"><meta name="twitter:description" content="${seoDescription}"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>`;
  html=html.replace('</head>',`${seo}</head>`);
  html=html.replace(/((?:src|href)="[^"?]*assets\/[^"?]+\.(?:js|css))"/g,`$1?v=${assetVersion}"`);
  fs.writeFileSync(htmlPath,html);
 }
 const pages=fs.readdirSync(out,{recursive:true}).filter(file=>file.endsWith('.html')).map(file=>'https://giasu.ai.vn/'+file.replace(/\\/g,'/')).concat('https://giasu.ai.vn/');
 fs.writeFileSync(path.join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...new Set(pages)].map(url=>`<url><loc>${url}</loc></url>`).join('')}</urlset>`);
 fs.writeFileSync(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://giasu.ai.vn/sitemap.xml\n');
 console.log(`Built ${posts.length} posts into dist/`);return posts;
}
if(process.argv[1]===fileURLToPath(import.meta.url))build();
