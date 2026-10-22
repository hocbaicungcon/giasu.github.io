// Fit oversized display formulas to their available width without splitting them.
const formulae=[...document.querySelectorAll('.katex-display > .katex')];
function fitMath(){
 for(const formula of formulae){
  formula.style.removeProperty('font-size');
  const display=formula.parentElement,visual=formula.querySelector('.katex-html');
  if(!display?.clientWidth||!visual)continue;
  const width=visual.scrollWidth,available=display.clientWidth;
  if(width>available+2){
   const size=parseFloat(getComputedStyle(formula).fontSize);
   formula.style.fontSize=`${Math.max(8,size*available/width)}px`;
  }
 }
}
let frame;
const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(fitMath);};
const observer=new ResizeObserver(schedule);
new Set(formulae.map(el=>el.closest('.prose,.exam-question,.quiz-explanation')||el.parentElement)).forEach(el=>observer.observe(el));
document.fonts?.ready.then(schedule);window.addEventListener('resize',schedule);schedule();
