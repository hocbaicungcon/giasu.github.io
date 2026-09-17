const topButton=document.querySelector('.go-top');
if(topButton){
 const update=()=>topButton.classList.toggle('is-visible',window.scrollY>420);
 addEventListener('scroll',update,{passive:true});update();
 topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
}
