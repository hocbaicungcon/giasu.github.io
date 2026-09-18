export function compareItems(a,b,sort){
 const title=a.title.localeCompare(b.title,'vi',{numeric:true});
 if(sort==='title')return title;if(sort==='title-desc')return -title;
 const dates=String(a.date||'').localeCompare(String(b.date||''));
 return (sort==='old'?dates:-dates)||title;
}
export function sorting(onChange){
 const allowed=['new','old','title','title-desc'];
 let value=new URLSearchParams(location.search).get('sort');if(!allowed.includes(value))value='new';
 const buttons=[...document.querySelectorAll('[data-sort]')];
 function paint(){buttons.forEach(b=>{const name=b.dataset.sort==='name',active=name?value.startsWith('title'):!value.startsWith('title');const reverse=name?value==='title-desc':value==='old';b.textContent=name?(reverse?'Z↓A':'A↓Z'):(reverse?'◷↑':'◷↓');b.title=name?(reverse?'Tên Z → A':'Tên A → Z'):(reverse?'Cũ → mới':'Mới → cũ');b.setAttribute('aria-label','Sắp xếp: '+b.title);b.setAttribute('aria-pressed',String(active));});}
 buttons.forEach(b=>b.addEventListener('click',()=>{value=b.dataset.sort==='name'?(value==='title'?'title-desc':'title'):(value==='new'?'old':'new');paint();onChange();}));paint();
 return {get value(){return value;},reset(){value='new';paint();}};
}
