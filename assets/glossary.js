/* credit: giasu.ai.vn */
(async()=>{
 const articles=[...document.querySelectorAll('[data-math-glossary]')];
 if(!articles.length)return;
 const script=document.currentScript;
 try{
  const response=await fetch(new URL('data/math-glossary.json',script.src));
  if(!response.ok)throw Error('Không tải được thuật ngữ');
  const {terms}=await response.json(),byId=new Map(terms.map(t=>[t.id,t]));
  const {createGlossaryMatcher,normalizeGlossaryText}=await import(new URL('glossary-matcher.js'+new URL(script.src).search,script.src));
  const findMatches=createGlossaryMatcher(terms);
  const normalize=normalizeGlossaryText;
  const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const searchKey=s=>normalize(s).normalize('NFD').replace(/\p{M}/gu,'').replace(/đ/g,'d');
  const seen=new Map(),present=new Set();
  for(const article of articles){
   const walker=document.createTreeWalker(article,NodeFilter.SHOW_TEXT,{acceptNode(node){
    return node.parentElement.closest('a,button,input,textarea,select,form,h1,h2,h3,h4,h5,h6,summary,pre,code,svg,math,.katex,script,style,.geometry-lab,.lesson-practice,[data-no-glossary],.prose>div[style*="border"]:has(svg,input,button)')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;
   }}),nodes=[];
   while(walker.nextNode())nodes.push(walker.currentNode);
   for(const node of nodes){
    const matches=findMatches(node.data);if(!matches.length)continue;
    const fragment=document.createDocumentFragment();let offset=0,changed=false;
    for(const match of matches){
     const id=match.id;if(!id)continue;
     present.add(id);
     if((seen.get(id)||0)>=2)continue;
     fragment.append(document.createTextNode(node.data.slice(offset,match.index)));
     const button=document.createElement('button');button.type='button';button.className='glossary-term';
     button.dataset.term=id;button.textContent=match.text;button.setAttribute('aria-haspopup','dialog');
     button.setAttribute('aria-label',`Tra cứu: ${match.text}`);
     fragment.append(button);offset=match.index+match.text.length;changed=true;seen.set(id,(seen.get(id)||0)+1);
    }
    if(changed){fragment.append(document.createTextNode(node.data.slice(offset)));node.replaceWith(fragment);}
   }
  }
  const dialog=document.createElement('dialog');dialog.className='glossary-dialog';dialog.setAttribute('aria-labelledby','glossary-title');
  dialog.innerHTML='<div class="glossary-dialog-heading"><h2 id="glossary-title">Tra cứu thuật ngữ Toán</h2><button type="button" data-close aria-label="Đóng tra cứu">✕</button></div><div class="glossary-search"><label for="glossary-search">Tìm thuật ngữ</label><input id="glossary-search" type="search" placeholder="Ví dụ: góc, hàm số, xác suất…" autocomplete="off"><label class="glossary-filter"><input type="checkbox" data-in-lesson> Chỉ thuật ngữ trong bài này</label></div><p class="glossary-count" role="status"></p><div class="glossary-results"></div><div class="glossary-detail" hidden></div>';
  document.body.append(dialog);
  const search=dialog.querySelector('input[type="search"]'),filter=dialog.querySelector('[data-in-lesson]'),results=dialog.querySelector('.glossary-results'),detail=dialog.querySelector('.glossary-detail'),count=dialog.querySelector('.glossary-count');
  const popup=document.createElement('dialog');popup.className='glossary-popup';popup.setAttribute('aria-labelledby','glossary-popup-title');
  popup.innerHTML='<button type="button" data-popup-close aria-label="Đóng giải nghĩa">×</button><h3 id="glossary-popup-title"></h3><div class="glossary-definition"></div><details class="glossary-popup-source"><summary>Nguồn tham khảo</summary><p></p></details>';
  document.body.append(popup);
  let popupOpener;
  const closePopup=restore=>{if(!popup.open)return;popup.close();popupOpener?.setAttribute('aria-expanded','false');if(restore)popupOpener?.focus();};
  const openPopup=(target,id)=>{
   const term=byId.get(id);if(!term)return;
   closePopup(false);popupOpener=target;
   popup.querySelector('h3').innerHTML=term.termHtml;popup.querySelector('.glossary-definition').innerHTML=term.html||'Chưa có giải nghĩa.';
   const source=popup.querySelector('details');source.open=false;source.querySelector('p').textContent=[term.definitionSource,term.source,term.pages].filter(Boolean).join(' · ');source.hidden=!source.querySelector('p').textContent;
   popup.show();target.setAttribute('aria-expanded','true');
   const anchor=target.getBoundingClientRect(),box=popup.getBoundingClientRect(),gap=10,margin=12;
   const left=Math.max(margin,Math.min(anchor.left+anchor.width/2-box.width/2,window.innerWidth-box.width-margin));
   const below=anchor.bottom+gap,above=anchor.top-box.height-gap;
   popup.style.left=left+'px';popup.style.top=Math.max(margin,below+box.height<window.innerHeight-margin?below:above>=margin?above:Math.min(below,window.innerHeight-box.height-margin))+'px';
  };
  popup.querySelector('[data-popup-close]').addEventListener('click',()=>closePopup(true));
  document.addEventListener('pointerdown',event=>{if(popup.open&&!popup.contains(event.target)&&!event.target.closest('.glossary-term'))closePopup(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&popup.open){event.preventDefault();closePopup(true);}});
  window.addEventListener('resize',()=>closePopup(false));
  window.addEventListener('scroll',event=>{if(!popup.contains(event.target))closePopup(false);},true);
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
   closePopup(false);opener=target;
   if(id)showTerm(id);else showList();
   if(!dialog.open)dialog.showModal();
   if(id)dialog.querySelector('[data-close]').focus();else search.focus();
  };
  document.addEventListener('click',event=>{
   const button=event.target.closest('button[data-term]');if(!button)return;
   if(dialog.contains(button)){showTerm(button.dataset.term);dialog.querySelector('[data-close]').focus();}else openPopup(button,button.dataset.term);
  });
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>opener?.focus());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  search.addEventListener('input',showList);filter.addEventListener('change',showList);
  // Definitions may contain KaTeX even on lessons with no original formula.
  if(!document.querySelector('link[href*="katex.min.css"]')){
   const link=document.createElement('link');link.rel='stylesheet';link.href=new URL('katex/katex.min.css',script.src);document.head.append(link);
  }
 }catch(error){console.warn('Tra cứu thuật ngữ chưa sẵn sàng:',error.message);}
})();
