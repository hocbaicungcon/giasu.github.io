// Fit indivisible expressions only after ordinary operator wrapping has been tried.
const formulae=[...document.querySelectorAll('.katex')].filter(el=>!el.closest('.katex-mathml')&&!el.parentElement.closest('.katex'));
function fitMath(){
 for(const formula of formulae){
  formula.style.removeProperty('font-size');
  const parent=formula.closest('.katex-display')||formula.parentElement;
  const available=parent.clientWidth;if(!available)continue;
  const visual=formula.querySelector('.katex-html');if(!visual)continue;
  const width=Math.max(visual.scrollWidth,visual.getBoundingClientRect().width);
  if(width>available+1){const size=parseFloat(getComputedStyle(formula).fontSize);formula.style.fontSize=`${size*available/width}px`;}
 }
}
let frame;
const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(fitMath);};
const observer=new ResizeObserver(schedule);
new Set(formulae.map(el=>el.closest('.prose,.exam-question,.quiz-explanation')||el.parentElement)).forEach(el=>observer.observe(el));
document.fonts?.ready.then(schedule);window.addEventListener('resize',schedule);schedule();
