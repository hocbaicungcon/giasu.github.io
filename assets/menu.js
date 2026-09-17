const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-menu');
if(toggle&&menu){
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.querySelector('b').textContent=open?'Mở menu':'Đóng menu';document.body.classList.toggle('menu-open',!open);});
 menu.addEventListener('click',event=>{if(event.target.closest('a')){toggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');}});
}
