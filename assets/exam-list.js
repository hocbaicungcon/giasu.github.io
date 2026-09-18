const fields=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('.exam-card')];
const exams=JSON.parse(document.getElementById('exam-catalog-data').textContent);
const bySlug=new Map(exams.map(e=>[e.slug,e]));
const search=document.getElementById('exam-search');
const groups=[...document.querySelectorAll('[data-group]')];
const normalized=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
let group='';
function filter(){
 let count=0;
 for(const card of cards){
  const e=bySlug.get(card.dataset.slug);
  card.hidden=!((!group||e.exam_group===group)&&fields.every(f=>!f.value||(f.dataset.filter==='tag'?e.tags.includes(f.value):String(e[f.dataset.filter]??'')===f.value))&&normalized([e.title,e.competition,e.level,...e.tags].join(' ')).includes(normalized(search.value.trim())));
  if(!card.hidden)count++;
 }
 document.getElementById('exam-count').textContent=count+' đề kiểm tra';
 document.getElementById('exam-empty').hidden=count>0;
 groups.forEach(b=>{const active=b.dataset.group===group;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 const url=new URL(location.href);url.search='';
 if(group)url.searchParams.set('group',group);
 if(search.value.trim())url.searchParams.set('q',search.value.trim());
 fields.forEach(f=>{if(f.value)url.searchParams.set(f.dataset.filter,f.value);});
 history.replaceState(null,'',url);
}
function readUrl(){const params=new URLSearchParams(location.search);group=['việt nam','quốc tế'].includes(params.get('group'))?params.get('group'):'';search.value=params.get('q')||'';fields.forEach(f=>f.value=params.get(f.dataset.filter)||'');filter();}
groups.forEach(b=>b.onclick=()=>{group=b.dataset.group;fields.forEach(f=>f.value='');search.value='';filter();});
fields.forEach(f=>f.addEventListener('change',filter));search.addEventListener('input',filter);
document.getElementById('exam-reset').onclick=()=>{group='';fields.forEach(f=>f.value='');search.value='';filter();};
addEventListener('popstate',readUrl);readUrl();
