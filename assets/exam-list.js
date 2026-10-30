/* credit: giasu.ai.vn */
import {sorting,compareItems} from './sort.js?v=81974b4a2997';
const cards=[...document.querySelectorAll('.exam-card')];
const exams=JSON.parse(document.getElementById('exam-catalog-data').textContent);
const bySlug=new Map(exams.map(e=>[e.slug,e]));
const search=document.getElementById('exam-search');
const groups=[...document.querySelectorAll('[data-group]')];
const sort=sorting(filter);
const normalized=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');

function parseGroup(val){
 const norm=String(val||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[+\-\s]+/g,' ').trim();
 if(norm==='viet nam')return 'việt nam';
 if(norm==='quoc te')return 'quốc tế';
 return '';
}

let group='';

function filter(){
 const query=normalized(search.value.trim());let count=0;
 for(const card of cards.sort((a,b)=>compareItems(bySlug.get(a.dataset.slug),bySlug.get(b.dataset.slug),sort.value))){
  const e=bySlug.get(card.dataset.slug);
  const matchesGroup=!group||e.exam_group===group;
  const haystack=normalized([e.title,e.exam_group,e.competition,e.level,e.year,e.language,e.category,...e.tags].join(' '));
  const matchesQuery=!query||haystack.includes(query);
  card.hidden=!(matchesGroup&&matchesQuery);
  if(!card.hidden)count++;
  card.parentElement.append(card);
 }
 document.getElementById('exam-count').textContent=count+' đề kiểm tra';
 document.getElementById('exam-empty').hidden=count>0;
 groups.forEach(b=>{
  const active=b.dataset.group===group;
  b.classList.toggle('active',active);
  b.setAttribute('aria-pressed',String(active));
 });
 const url=new URL(location.href);
 url.search='';
 if(group)url.searchParams.set('group',group==='việt nam'?'viet-nam':'quoc-te');
 if(search.value.trim())url.searchParams.set('q',search.value.trim());
 if(sort.value!=='new')url.searchParams.set('sort',sort.value);
 history.replaceState(null,'',url);
}

function readUrl(){
 const params=new URLSearchParams(location.search);
 group=parseGroup(params.get('group'));
 search.value=params.get('q')||'';
 filter();
}

groups.forEach(b=>b.addEventListener('click',()=>{
 group=b.dataset.group;
 filter();
}));

const resetBtn=document.getElementById('exam-reset');
if(resetBtn){
 resetBtn.addEventListener('click',()=>{
  group='';
  search.value='';
  filter();
 });
}

document.querySelectorAll('header nav a[href*="de-kiem-tra"]').forEach(a=>{
 a.addEventListener('click',e=>{
  const targetUrl=new URL(a.href,location.href);
  if(targetUrl.pathname.replace(/\/+$/,'')===location.pathname.replace(/\/+$/,'')){
   e.preventDefault();
   group=parseGroup(targetUrl.searchParams.get('group'));
   search.value='';
   filter();
   window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
 });
});

search.addEventListener('input',filter);
window.addEventListener('popstate',readUrl);
readUrl();

