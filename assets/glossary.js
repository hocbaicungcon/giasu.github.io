/* credit: giasu.ai.vn */
(async()=>{
 const articles=[...document.querySelectorAll('[data-math-glossary]')];
 if(!articles.length)return;
 const script=document.currentScript;
 try{
  const response=await fetch(new URL('data/math-glossary.json',script.src));
  if(!response.ok)throw Error('Không tải được thuật ngữ');
  const {terms}=await response.json(),byId=new Map(terms.map(t=>[t.id,t]));
  const aliases=new Map();
  for(const term of terms)for(const alias of term.aliases){
   // Avoid highlighting ordinary uses such as 'đặc điểm' or examination scores.
   if(['điểm','đỉnh','cạnh','đoạn'].includes(alias))continue;
   if(!aliases.has(alias))aliases.set(alias,term.id);
  }
  const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const phrases=[...aliases.keys()].sort((a,b)=>b.length-a.length);
  const pattern=new RegExp(`(?<![\\p{L}\\p{N}_])(?:${phrases.map(escapeRegex).join('|')})(?![\\p{L}\\p{N}_])`,'giu');
  const normalize=s=>s.normalize('NFC').toLocaleLowerCase('vi').replace(/\s+/g,' ').trim();
  const searchKey=s=>normalize(s).normalize('NFD').replace(/\p{M}/gu,'').replace(/đ/g,'d');
  const seen=new Map(),present=new Set();
  for(const article of articles){
   const walker=document.createTreeWalker(article,NodeFilter.SHOW_TEXT,{acceptNode(node){
    return node.parentElement.closest('a,button,input,textarea,select,form,h1,h2,h3,h4,h5,h6,summary,pre,code,svg,math,.katex,script,style,.geometry-lab,[data-no-glossary]')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;
   }}),nodes=[];
   while(walker.nextNode())nodes.push(walker.currentNode);
   for(const node of nodes){
    pattern.lastIndex=0;
    const matches=[...node.data.matchAll(pattern)];if(!matches.length)continue;
    const fragment=document.createDocumentFragment();let offset=0,changed=false;
    for(const match of matches){
     const id=aliases.get(normalize(match[0]));if(!id)continue;
     present.add(id);
     if((seen.get(id)||0)>=2)continue;
     fragment.append(document.createTextNode(node.data.slice(offset,match.index)));
     const button=document.createElement('button');button.type='button';button.className='glossary-term';
     button.dataset.term=id;button.textContent=match[0];button.setAttribute('aria-haspopup','dialog');
     button.setAttribute('aria-label',`Tra cứu: ${match[0]}`);
     fragment.append(button);offset=match.index+match[0].length;changed=true;seen.set(id,(seen.get(id)||0)+1);
    }
    if(changed){fragment.append(document.createTextNode(node.data.slice(offset)));node.replaceWith(fragment);}
   }
  }
  const dialog=document.createElement('dialog');dialog.className='glossary-dialog';dialog.setAttribute('aria-labelledby','glossary-title');
  dialog.innerHTML='<div class="glossary-dialog-heading"><h2 id="glossary-title">Tra cứu thuật ngữ Toán</h2><button type="button" data-close aria-label="Đóng tra cứu">✕</button></div><div class="glossary-search"><label for="glossary-search">Tìm thuật ngữ</label><input id="glossary-search" type="search" placeholder="Ví dụ: góc, hàm số, xác suất…" autocomplete="off"><label class="glossary-filter"><input type="checkbox" data-in-lesson> Chỉ thuật ngữ trong bài này</label></div><p class="glossary-count" role="status"></p><div class="glossary-results"></div><div class="glossary-detail" hidden></div>';
  document.body.append(dialog);
  const search=dialog.querySelector('input[type="search"]'),filter=dialog.querySelector('[data-in-lesson]'),results=dialog.querySelector('.glossary-results'),detail=dialog.querySelector('.glossary-detail'),count=dialog.querySelector('.glossary-count');
  let opener;
  const showList=()=>{
   detail.hidden=true;results.hidden=false;dialog.querySelector('.glossary-search').hidden=false;count.hidden=false;
   const query=searchKey(search.value);
   const queryPattern=new RegExp(`(?<![a-z0-9])${escapeRegex(query)}`,'u');
   const found=terms.filter(t=>(!filter.checked||present.has(t.id))&&queryPattern.test(searchKey([t.term,...t.aliases].join(' ')))).sort((a,b)=>a.term.localeCompare(b.term,'vi'));
   count.textContent=`${found.length} thuật ngữ${found.length>60?' · Hiển thị 60 kết quả đầu; nhập thêm để thu hẹp.':''}`;
   results.replaceChildren();
   for(const term of found.slice(0,60)){
    const button=document.createElement('button');button.type='button';button.dataset.term=term.id;
    button.innerHTML=term.termHtml;results.append(button);
   }
   if(!found.length)results.textContent='Chưa tìm thấy. Thử một từ khóa ngắn hơn hoặc bỏ bộ lọc bài học.';
  };
  const showTerm=id=>{
   const term=byId.get(id);if(!term)return;
   results.hidden=true;count.hidden=true;dialog.querySelector('.glossary-search').hidden=true;detail.hidden=false;
   detail.replaceChildren();
   const back=document.createElement('button');back.type='button';back.className='glossary-back';back.textContent='← Tất cả thuật ngữ';
   back.addEventListener('click',()=>{showList();search.focus();});
   const title=document.createElement('h3');title.innerHTML=term.termHtml;
   const definition=document.createElement('div');definition.className='glossary-definition';
   if(term.html)definition.innerHTML=term.html;
   else definition.textContent='Danh sách nguồn chưa có giải nghĩa cho thuật ngữ này. Em có thể xem tài liệu và trang tra cứu bên dưới.';
   const source=document.createElement('p');source.className='glossary-source';source.textContent=[term.definitionSource,term.source,term.pages].filter(Boolean).join(' · ');
   detail.append(back,title,definition,source);
  };
  const open=(target,id)=>{
   opener=target;
   if(id)showTerm(id);else showList();
   if(!dialog.open)dialog.showModal();
   if(id)dialog.querySelector('[data-close]').focus();else search.focus();
  };
  document.addEventListener('click',event=>{
   const button=event.target.closest('button[data-term]');if(!button)return;
   if(dialog.contains(button)){showTerm(button.dataset.term);dialog.querySelector('[data-close]').focus();}else open(button,button.dataset.term);
  });
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>opener?.focus());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  search.addEventListener('input',showList);filter.addEventListener('change',showList);
  const toolbar=document.createElement('div');toolbar.className='glossary-toolbar';
  const lookup=document.createElement('button');lookup.type='button';lookup.textContent='Tra cứu thuật ngữ Toán';lookup.setAttribute('aria-haspopup','dialog');lookup.addEventListener('click',()=>open(lookup));
  const note=document.createElement('span');note.textContent='Bấm vào từ có gạch chân để xem giải nghĩa.';
  toolbar.append(lookup,note);articles[0].prepend(toolbar);
  // Definitions may contain KaTeX even on lessons with no original formula.
  if(!document.querySelector('link[href*="katex.min.css"]')){
   const link=document.createElement('link');link.rel='stylesheet';link.href=new URL('katex/katex.min.css',script.src);document.head.append(link);
  }
 }catch(error){console.warn('Tra cứu thuật ngữ chưa sẵn sàng:',error.message);}
})();
