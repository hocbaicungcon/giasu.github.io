import fs from 'node:fs';
import path from 'node:path';
export const activities = [
 ['cau-do-iq','Câu đố IQ','Câu đố'],
 ['do-vui-tieng-anh','Đố vui tiếng Anh','riddles'],
 ['chuyen-vui','Chuyện vui','Giai thoại'],
 ['danh-ngon','Danh ngôn','quotes'],
 ['meo-hoc-tap','Study tips','tips'],
 ['truyen-cuoi-tieng-anh','Truyện cười tiếng Anh','jokes']
];
export const funMenu = prefix => `<details class="nav-exams"><summary>Giải trí</summary><div class="nav-submenu"><a href="${prefix}giai-tri/">Tất cả nội dung</a>${activities.map(([slug,label])=>`<a href="${prefix}giai-tri/${slug}.html">${label}</a>`).join('')}</div></details>`;
export function parseCSV(source) {
 const rows=[]; let row=[], field='', quoted=false;
 source=source.replace(/^\uFEFF/,'');
 for(let i=0;i<source.length;i++) {const c=source[i];
  if(c==='"'){if(quoted && source[i+1]==='"'){field+='"';i++;}else quoted=!quoted;}
  else if(!quoted && (c===',' || c==='\n')) {row.push(field);field='';if(c==='\n'){if(row.some(x=>x.trim()))rows.push(row);row=[];}}
  else if(c!=='\r'||quoted)field+=c;
 }
 if(quoted)throw Error('riddles.csv: dấu ngoặc kép chưa đóng');
 row.push(field);if(row.some(x=>x.trim()))rows.push(row);
 if(rows.some(r=>r.length!==2))throw Error('riddles.csv: mỗi dòng cần đúng 2 cột câu hỏi và đáp án');
 return rows;
}
export function buildEntertainment(root,out,shell,posts,card) {
 const read = name => JSON.parse(fs.readFileSync(path.join(root,'assets',name+'.json'),'utf8'));
 const names = (rows,id,key) => Object.fromEntries(rows.map(x=>[x[id],x[key]]));
 const authors=names(read('quote_authors'),'_id','name'), categories=names(read('quote_categories'),'_id','name'), tipCategories=names(read('study_tips_categories'),'id','category_name');
 const data={
  riddles:parseCSV(fs.readFileSync(path.join(root,'assets/riddles.csv'),'utf8')).map(([body,answer],id)=>({id,body,answer})),
  quotes:read('quotes').map(x=>({id:x._id,body:x.body,author:authors[x.author_id]||'Khuyết danh',category:categories[x.category_id]||'Khác'})),
  tips:read('study_tips').map(x=>({id:x.id,body:x.content,category:tipCategories[x.category_id]||'Khác'})),
  jokes:read('jokes').map(x=>({id:x.id,title:x.title,body:x.joke,category:x.cat}))
 };
 const dir=path.join(out,'assets/fun');fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(path.join(dir,'quotes-meta.json'),JSON.stringify({count:data.quotes.length,chunkSize:50}));
 for(const [kind,items] of Object.entries(data)) {
  const index=items.map((x,i)=>({chunk:Math.floor(i/50),offset:i%50,...(x.author?{author:x.author}:{}),...(x.category?{category:x.category}:{})}));
  fs.writeFileSync(path.join(dir,kind+'-index.json'),JSON.stringify(index));
  for(let i=0;i<items.length;i+=50)fs.writeFileSync(path.join(dir,`${kind}-${i/50}.json`),JSON.stringify(items.slice(i,i+50)));
 }
 const links=activities.map(([slug,label])=>`<a class="fun-tile" href="./${slug}.html">${label}<span aria-hidden="true">↗</span></a>`).join('');
 const renderCards = list => list.map((p,i)=>card(p,i).replaceAll('./bai-viet/','../bai-viet/').replace(/<button class="tag" data-tag="([^"]*)">([\s\S]*?)<\/button>/g,(_,tag,label)=>`<a class="tag" href="../?tag=${encodeURIComponent(tag)}#thu-vien">${label}</a>`)).join('');
 const fun=posts.filter(p=>p.category==='Giải trí');
 fs.mkdirSync(path.join(out,'giai-tri'),{recursive:true});
 const write=(slug,title,content)=>fs.writeFileSync(path.join(out,'giai-tri',slug+'.html'),shell(title,`${title}: khám phá và học điều mới cùng gia sư thông minh.`,`<main id="main" class="wrap fun-page fun-${slug}"><nav class="breadcrumb" aria-label="Đường dẫn"><a href="../">Trang chủ</a> / <a href="./">Giải trí</a>${slug==='index'?'':` / <span>${title}</span>`}</nav><h1>${title}</h1>${content}</main>`,'../'));
 write('index','Giải trí',`<p>Một khoảng nghỉ nhỏ, thêm nhiều điều thú vị.</p><div class="fun-tiles">${links}</div><h2>Bài viết để khám phá</h2><div class="cards">${renderCards(fun)}</div>`);
 for(const [slug,label,kind] of activities){
  if(!data[kind]){const list=fun.filter(p=>p.type===kind);write(slug,label,`<div class="cards">${renderCards(list)}</div>${list.length?'':'<p>Chưa có bài viết. Hãy quay lại sau nhé.</p>'}`);continue;}
  const title=kind==='tips'?'Mẹo học tập':label;
  write(slug,title,`<p class="fun-intro">${kind==='riddles'?'Đọc câu đố, nhập đáp án tiếng Anh rồi kiểm tra.':'Khám phá từng câu chuyện và ý tưởng mới.'} Nội dung giữ nguyên tiếng Anh từ bộ dữ liệu.</p><section class="fun-player ${kind}" data-kind="${kind}"><div class="fun-filters">${kind==='quotes'?'<label>Tác giả<select data-filter="author"><option value="">Tất cả tác giả</option></select></label>':''}${kind!=='riddles'?`<label>${kind==='jokes'?'Thẻ truyện':'Danh mục'}<select data-filter="category"><option value="">Tất cả</option></select></label>`:''}</div><p class="fun-count" role="status"></p><article class="fun-content" aria-busy="true"><p>Đang tải nội dung…</p></article>${kind==='riddles'?'<form class="riddle-form"><label for="riddle-answer">Đáp án của bạn</label><input id="riddle-answer" autocomplete="off" required maxlength="1000" placeholder="Nhập đáp án tiếng Anh…"><button class="primary" type="submit">Kiểm tra đáp án</button></form><div class="riddle-result" role="status" hidden></div><p class="fun-help">So khớp chữ, bỏ qua viết hoa, khoảng trắng và dấu câu. Cách diễn đạt khác có thể chưa được nhận diện.</p>':''}<button class="primary fun-next" type="button">${kind==='tips'?'Mẹo tiếp theo':kind==='jokes'?'Truyện tiếp theo':'Câu tiếp theo'} →</button><p class="fun-error" role="alert" hidden></p><noscript>Bật JavaScript để xem và tương tác với nội dung.</noscript></section><a class="back" href="./">← Khám phá thêm trong Giải trí</a><script type="module" src="../assets/fun.js"></script>`);
 }
}
