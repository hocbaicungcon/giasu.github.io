const cards=[...document.querySelectorAll('.exam-card')];
const exams=JSON.parse(document.getElementById('exam-catalog-data').textContent);
const bySlug=new Map(exams.map(e=>[e.slug,e]));
const search=document.getElementById('exam-search');
const normalized=s=>String(s).toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/đ/g,'d');
function filter(){
 const query=normalized(search.value.trim());let count=0;
 for(const card of cards){const e=bySlug.get(card.dataset.slug);const haystack=normalized([e.title,e.exam_group,e.competition,e.level,e.year,e.language,e.category,...e.tags].join(' '));card.hidden=Boolean(query&&!haystack.includes(query));if(!card.hidden)count++;}
 document.getElementById('exam-count').textContent=count+' đề kiểm tra';
 document.getElementById('exam-empty').hidden=count>0;
 const url=new URL(location.href);url.search='';if(search.value.trim())url.searchParams.set('q',search.value.trim());history.replaceState(null,'',url);
}
search.value=new URLSearchParams(location.search).get('q')||'';
search.addEventListener('input',filter);filter();
