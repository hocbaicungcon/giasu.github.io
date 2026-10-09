/* credit: giasu.ai.vn */
import {sorting,compareItems} from './sort.js';
import {matchesSubject} from './subject-groups.js';
(async()=>{
 const $=s=>document.querySelector(s), cards=[...document.querySelectorAll('.card')];
 let posts;try{const r=await fetch('./assets/posts.json');if(!r.ok)throw Error(r.status);posts=await r.json();}catch{ $('#result-count').textContent='Không tải được bộ lọc. Bạn vẫn có thể mở các bài bên dưới.';return;}
 const cleanTag=s=>{if(!s)return '';try{s=decodeURIComponent(s);}catch{}return s.replace(/^#+/,'').replace(/\+/g,' ').replace(/\s+/g,' ').trim();};
 const getCanonicalTag=t=>{const c=cleanTag(t);if(!c)return '';const lower=c.toLowerCase();for(const p of posts){const found=(p.tags||[]).find(x=>cleanTag(x).toLowerCase()===lower);if(found)return cleanTag(found);}return c;};
 const params=new URLSearchParams(location.search);let category=params.get('category')||'',tag=getCanonicalTag(params.get('tag'));
 $('#search').value=params.get('q')||'';$('#grade').value=params.get('grade')||'';$('#type').value=params.get('type')||'';const sortControl=sorting(apply);
 const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
 function apply(){const q=normalize($('#search').value.trim()),grade=$('#grade').value,type=$('#type').value,sort=sortControl.value,tagNorm=cleanTag(tag).toLowerCase();
 const list=posts.filter(p=>matchesSubject(p.category,category)&&(!tagNorm||p.tags.some(t=>cleanTag(t).toLowerCase()===tagNorm))&&(!grade||String(p.grade)===grade)&&(!type||p.type===type)&&(!q||normalize([p.title,p.description,p.category,...p.tags].join(' ')).includes(q))).sort((a,b)=>compareItems(a,b,sort));
 const ids=new Set(list.map(p=>p.slug));cards.forEach(c=>c.hidden=!ids.has(c.dataset.slug));list.forEach(p=>$('#cards').append(cards.find(c=>c.dataset.slug===p.slug)));
 $('#result-count').textContent=`${list.length} bài viết để khám phá`;$('#empty').hidden=list.length>0;
 document.querySelectorAll('[data-category]').forEach(b=>{const active=b.dataset.category===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
 $('#active-filters').replaceChildren();for(const [label,clear] of [[category,()=>category=''],[tag?'#'+tag:'',()=>tag='']])if(label){const b=document.createElement('button');b.textContent=label+' ×';b.setAttribute('aria-label','Bỏ lọc '+label);b.onclick=()=>{clear();apply();};$('#active-filters').append(b);}
 const url=new URL(location.href);url.search='';for(const [key,value]of Object.entries({category,tag,q:$('#search').value.trim(),grade,type,sort:sort==='new'?'':sort}))if(value)url.searchParams.set(key,value);history.replaceState(null,'',url);
 }
 document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{category=b.dataset.category;tag='';apply();});
 document.querySelectorAll('[data-subject]').forEach(b=>b.onclick=()=>{category=b.dataset.subject;tag='';apply();$('#thu-vien').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
 document.querySelectorAll('[data-tag]').forEach(b=>b.onclick=()=>{tag=getCanonicalTag(b.dataset.tag);apply();});
 $('#search').addEventListener('input',apply);for(const id of ['grade','type'])$('#'+id).addEventListener('change',apply);
 $('#reset').onclick=()=>{category='';tag='';$('#search').value='';$('#grade').value='';$('#type').value='';sortControl.reset();apply();};apply();
})();
