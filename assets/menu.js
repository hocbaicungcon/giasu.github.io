/* credit: giasu.ai.vn */
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-menu');
if(toggle&&menu){
 const background=[...document.querySelectorAll('main,footer,.go-top,.site-share,.study-help')];
 const syncOverlay=()=>{const opened=document.body.classList.contains('menu-open')&&matchMedia('(max-width:950px)').matches;background.forEach(el=>el.inert=opened);};
 const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.querySelector('b').textContent='Mở menu';document.body.classList.remove('menu-open');menu.querySelectorAll('details').forEach(d=>d.open=false);syncOverlay();};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.querySelector('b').textContent=open?'Mở menu':'Đóng menu';document.documentElement.style.setProperty('--mobile-nav-height',document.querySelector('header').getBoundingClientRect().height+'px');document.body.classList.toggle('menu-open',!open);syncOverlay();});
 matchMedia('(max-width:950px)').addEventListener('change',close);
 new ResizeObserver(()=>{document.documentElement.style.setProperty('--mobile-nav-height',document.querySelector('header').getBoundingClientRect().height+'px');}).observe(document.querySelector('header'));
 document.addEventListener('keydown',event=>{if(event.key!=='Tab'||!document.body.classList.contains('menu-open'))return;const controls=[...document.querySelectorAll('header a,header button,header summary')].filter(el=>el.getClientRects().length&&!el.disabled);const first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
 menu.addEventListener('click',event=>{if(event.target.closest('a'))close();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'){const active=menu.querySelector('details[open] summary');close();if(matchMedia('(min-width:951px)').matches)active?.focus();else toggle.focus();}});
 document.addEventListener('click',event=>{if(!menu.contains(event.target)&&!toggle.contains(event.target))close();});
}
if(menu){
 const groups=[...menu.querySelectorAll('.nav-exams')],desktop=matchMedia('(min-width:951px) and (hover:hover) and (pointer:fine)');
 for(const group of groups){
  let timer;
  const open=()=>{clearTimeout(timer);groups.forEach(other=>{if(other!==group)other.open=false;});group.open=true;};
  group.addEventListener('pointerenter',event=>{if(desktop.matches&&event.pointerType!=='touch')open();});
  group.addEventListener('pointerleave',()=>{if(desktop.matches)timer=setTimeout(()=>{if(!group.querySelector(':focus-visible'))group.open=false;},180);});
  group.addEventListener('focusout',()=>{setTimeout(()=>{if(!group.contains(document.activeElement)&&!group.matches(':hover'))group.open=false;},0);});
  group.addEventListener('toggle',()=>{if(group.open)groups.forEach(other=>{if(other!==group)other.open=false;});});
  desktop.addEventListener('change',()=>{clearTimeout(timer);group.open=false;});
 }
}

// Focus the library search for both navigation and repeated clicks on this page.
const focusSearch=()=>{
 if(location.hash!=='#search')return;
 const search=document.querySelector('input#search');
 if(search){if(document.body.classList.contains('menu-open'))toggle?.click();search.focus({preventScroll:true});search.scrollIntoView({block:'center'});}
};
window.addEventListener('hashchange',focusSearch);
window.addEventListener('pageshow',focusSearch);
document.querySelectorAll('a.nav-search').forEach(link=>link.addEventListener('click',()=>{
 const target=new URL(link.href,location.href);
 if(target.pathname===location.pathname&&target.hash==='#search')focusSearch();
}));

// Match complete destinations so class and subject selections remain distinct.
if(menu){
 const current=new URL(location.href);
 const normalize=path=>path.replace(/index\.html$/, '');
 menu.querySelectorAll('a[href]').forEach(link=>{
  const target=new URL(link.href,location.href);
  if(target.origin!==current.origin||target.hash||normalize(target.pathname)!==normalize(current.pathname)||target.search!==current.search)return;
  link.setAttribute('aria-current','page');
  link.closest('details')?.classList.add('nav-current');
 });
}
const studyHelp=document.querySelector('.study-help');
if(studyHelp){
 document.addEventListener('click',event=>{if(!studyHelp.contains(event.target))studyHelp.open=false;});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&studyHelp.open){studyHelp.open=false;studyHelp.querySelector('summary').focus();}});
}
