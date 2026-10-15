/* credit: giasu.ai.vn */
// Adjust visual digits only; leave KaTeX's layout and accessible MathML intact.
function balanceMathDigits(root){
 const formulas=[...(root.matches?.('.katex-html')?[root]:[]),...root.querySelectorAll('.katex-html')];
 for(const formula of formulas){
  if(formula.dataset.digitsBalanced)continue;
  formula.dataset.digitsBalanced='true';
  const walker=document.createTreeWalker(formula,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode()){
   const node=walker.currentNode;
   if(/[0-9]/.test(node.data)&&!node.parentElement.closest('svg,.math-digits'))nodes.push(node);
  }
  for(const node of nodes){
   const fragment=document.createDocumentFragment();
   for(const part of node.data.split(/([0-9]+)/)){
    if(/^[0-9]+$/.test(part)){
     const span=document.createElement('span');
     span.className='math-digits';span.textContent=part;fragment.append(span);
    }else fragment.append(document.createTextNode(part));
   }
   node.replaceWith(fragment);
  }
 }
}
balanceMathDigits(document);
new MutationObserver(records=>{
 for(const record of records)for(const node of record.addedNodes){
  if(node.nodeType===Node.ELEMENT_NODE&&!node.closest('.katex-html'))balanceMathDigits(node);
  else if(node.nodeType===Node.ELEMENT_NODE&&node.matches('.katex-html'))balanceMathDigits(node);
 }
}).observe(document.body,{childList:true,subtree:true});

const normalizeAnswer=value=>value.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('vi');
document.querySelectorAll('form.quiz[data-answers]').forEach(form=>{
 const feedback=form.querySelector('.quiz-feedback'), explanation=form.querySelector('.quiz-explanation'),solutionButton=form.querySelector('.quiz-show-solution');
 const changed=()=>form.dispatchEvent(new CustomEvent('quiz-result',{bubbles:true}));
 solutionButton?.addEventListener('click',()=>{explanation.hidden=false;solutionButton.hidden=true;});
 const clear=()=>{feedback.textContent='';delete form.dataset.result;explanation.hidden=true;if(solutionButton)solutionButton.hidden=true;form.querySelector('.quiz-hint')?.removeAttribute('open');changed();};
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const value=new FormData(form).get('answer');
  if(!value||!value.trim()){clear();feedback.textContent='Bạn hãy chọn hoặc nhập đáp án trước nhé.';return;}
  const correct=JSON.parse(form.dataset.answers).some(answer=>normalizeAnswer(answer)===normalizeAnswer(value));
  form.dataset.result=correct?'correct':'incorrect';
  feedback.textContent=correct?'Chính xác! Bạn làm tốt lắm.':'Chưa đúng. Em hãy thử lại hoặc bấm Xem lời giải.';
  explanation.hidden=!correct;if(solutionButton)solutionButton.hidden=correct;changed();
 });
 form.addEventListener('input',clear);
 form.addEventListener('reset',clear);
});

// Table of Contents (TOC) ScrollSpy and navigation
(()=>{
  const sidebar=document.querySelector('.lesson-course .article-toc');
  if(sidebar){
    const mobile=document.createElement('dialog');mobile.className='course-toc-dialog';mobile.setAttribute('aria-label','Mục lục bài học');
    const close=document.createElement('button');close.type='button';close.className='course-toc-close';close.setAttribute('aria-label','Đóng mục lục');close.textContent='×';
    mobile.innerHTML=sidebar.innerHTML;mobile.prepend(close);document.body.append(mobile);
    const toggle=document.createElement('button');toggle.type='button';toggle.className='course-toc-toggle';toggle.setAttribute('aria-label','Mở mục lục bài học');toggle.setAttribute('aria-haspopup','dialog');toggle.setAttribute('aria-expanded','false');
    toggle.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>';
    document.body.append(toggle);document.body.classList.add('course-toc-ready');
    toggle.addEventListener('click',()=>{mobile.showModal();toggle.setAttribute('aria-expanded','true');});
    close.addEventListener('click',()=>mobile.close());
    mobile.addEventListener('close',()=>{toggle.setAttribute('aria-expanded','false');toggle.focus({preventScroll:true});});
    mobile.addEventListener('click',event=>{if(event.target===mobile){const r=mobile.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)mobile.close();}});
    mobile.querySelectorAll('.toc-nav a,.toc-top-btn').forEach(link=>link.addEventListener('click',()=>mobile.close()));
    const viewport=matchMedia('(max-width:1000px)');viewport.addEventListener('change',event=>{if(!event.matches&&mobile.open)mobile.close();});
  }
  const tocLinks = document.querySelectorAll('.toc-nav a');
  if (!tocLinks.length) return;

  const headings = [];
  tocLinks.forEach(link => {
    const id = link.getAttribute('href')?.replace('#', '');
    if (id) {
      const el = document.getElementById(id);
      if (el && !headings.some(h => h.id === id)) {
        headings.push({ id, el });
      }
    }
  });

  if (!headings.length) return;

  // Smooth scroll
  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href')?.replace('#', '');
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start'
        });
        history.replaceState(null, '', '#' + id);
      }
    });
  });

  // ScrollSpy
  let ticking = false;
  const updateActiveToc = () => {
    const scrollPos = window.scrollY + 100;
    let currentId = '';
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].el.offsetTop <= scrollPos) {
        currentId = headings[i].id;
      } else {
        break;
      }
    }
    if (!currentId && headings.length) currentId = headings[0].id;
    tocLinks.forEach(link => {
      const match = link.getAttribute('href') === '#' + currentId;
      link.classList.toggle('active', match);
      link.setAttribute('aria-current', match ? 'true' : 'false');
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveToc);
      ticking = true;
    }
  }, { passive: true });
  updateActiveToc();

  // Top button
  document.querySelectorAll('.toc-top-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      });
    });
  });
})();
