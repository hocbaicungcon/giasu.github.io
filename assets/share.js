/* credit: giasu.ai.vn */
document.querySelectorAll('[data-share-url]').forEach(bar=>{
 const title=bar.dataset.shareTitle,status=bar.querySelector('[data-share-status]');
 const url=bar.hasAttribute('data-share-auto')?(document.querySelector('link[rel="canonical"]')?.href||new URL(location.pathname,'https://giasu.ai.vn').href):bar.dataset.shareUrl;
 if(bar.hasAttribute('data-share-auto')){
  const anchors=bar.querySelectorAll('.share-actions a');
  for(const anchor of anchors){const link=new URL(anchor.href);link.searchParams.set(link.hostname.includes('facebook')?'u':'url',url);anchor.href=link.href;}
 }
 const toggle=bar.querySelector('[data-share-toggle]'),panel=bar.querySelector('.share-panel');
 const close=()=>{panel.hidden=true;toggle.setAttribute('aria-expanded','false');};
 toggle.addEventListener('click',()=>{
  const opened=toggle.getAttribute('aria-expanded')==='true';
  panel.hidden=opened;toggle.setAttribute('aria-expanded',String(!opened));
  if(!opened)panel.querySelector('a,button')?.focus();
 });
 document.addEventListener('click',event=>{if(!bar.contains(event.target))close();});
 bar.addEventListener('keydown',event=>{if(event.key==='Escape'){event.stopPropagation();close();toggle.focus();}});
 const copy=async()=>{
  try{await navigator.clipboard.writeText(url);return true;}catch{
   // Older browsers retain a manual selection fallback.
   let input=bar.querySelector('.share-copy-input');
   if(!input){input=document.createElement('input');input.className='share-copy-input';input.readOnly=true;input.setAttribute('aria-label','Liên kết để sao chép');panel.append(input);}
   input.value=url;input.hidden=false;input.focus();input.select();
   status.textContent='Chọn và sao chép liên kết bên dưới.';return false;
  }
 };
 bar.querySelector('[data-share-copy]').addEventListener('click',async()=>{
  if(await copy())status.textContent='Đã sao chép liên kết.';
 });
 const native=bar.querySelector('[data-share-native]');
 if(navigator.share){
  native.hidden=false;
  native.addEventListener('click',async()=>{
   try{await navigator.share({title,url});status.textContent='Đã mở chia sẻ qua ứng dụng.';}
   catch(error){if(error.name!=='AbortError')status.textContent='Chưa mở được ứng dụng. Em có thể sao chép liên kết để chia sẻ.';}
  });
 }
 bar.querySelector('[data-share-zalo]').addEventListener('click',async()=>{
  if(navigator.share){
   try{await navigator.share({title,url});status.textContent='Chọn Zalo trong danh sách ứng dụng nếu đã cài đặt.';}
   catch(error){if(error.name!=='AbortError')status.textContent='Em có thể dùng nút Sao chép liên kết để gửi qua Zalo.';}
   return;
  }
  // Zalo's old share-plugin documentation redirects to its index.
  // Use a stable copy-and-open flow rather than an undocumented share endpoint.
  const copied=await copy();
  let link=bar.querySelector('[data-open-zalo]');
  if(!link){link=document.createElement('a');link.dataset.openZalo='';link.href='https://chat.zalo.me/';link.target='_blank';link.rel='noopener noreferrer';link.className='share-icon share-zalo';link.setAttribute('aria-label','Mở Zalo');link.title='Mở Zalo';link.append(bar.querySelector('.share-zalo svg').cloneNode(true));bar.querySelector('.share-actions').append(link);}
  status.textContent=copied?'Đã sao chép liên kết. Mở Zalo và dán vào cuộc trò chuyện để chia sẻ.':'Sao chép liên kết bên dưới, rồi mở Zalo để gửi.';
 });
});
