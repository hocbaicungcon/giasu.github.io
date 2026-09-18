const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-menu');
if(toggle&&menu){
 const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.querySelector('b').textContent='Mở menu';document.body.classList.remove('menu-open');menu.querySelectorAll('details').forEach(d=>d.open=false);};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.querySelector('b').textContent=open?'Mở menu':'Đóng menu';document.body.classList.toggle('menu-open',!open);});
 menu.addEventListener('click',event=>{if(event.target.closest('a'))close();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'){close();toggle.focus();}});
 document.addEventListener('click',event=>{if(!menu.contains(event.target)&&!toggle.contains(event.target))close();});
}
