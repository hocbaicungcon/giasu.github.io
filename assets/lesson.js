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

// Consistent angle colours link the diagram, measurements and proof.
document.querySelectorAll('[data-geometry="triangle-angles"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),x=lab.querySelector('[data-coordinate="x"]'),y=lab.querySelector('[data-coordinate="y"]');
 const colors=['#bf645a','#13839a','#c79536'];
 let step=-1,dragging=false;
 const point=(p,r,t)=>[p[0]+r*Math.cos(t),p[1]+r*Math.sin(t)];
 const sector=(p,start,end,color)=>{
  while(end<start)end+=2*Math.PI;
  const a=point(p,32,start),b=point(p,32,end);
  return `<path d="M ${p} L ${a} A 32 32 0 ${end-start>Math.PI?1:0} 1 ${b} Z" fill="${color}" fill-opacity=".2" stroke="${color}" stroke-width="2"/>`;
 };
 const render=()=>{
  const A=[+x.value,+y.value],B=[100,280],C=[470,280];
  const b=Math.atan2(280-A[1],A[0]-100),c=Math.atan2(280-A[1],470-A[0]),a=Math.PI-b-c;
  const angles=[a,b,c].map(v=>v*180/Math.PI);
  lab.querySelectorAll('[data-angle]').forEach((o,i)=>o.textContent=angles[i].toFixed(1)+'°');
  const max=Math.max(...angles),kind=Math.abs(max-90)<.05?'vuông':max>90?'tù':'nhọn';
  lab.querySelector('.geometry-observation').textContent=`Tam giác ${kind}. Mỗi góc có thể thay đổi, nhưng A + B + C luôn bằng 180° (số đo hiển thị được làm tròn).`;
  let drawing=`<polygon points="${A} ${B} ${C}" fill="#2563eb" fill-opacity=".035" stroke="currentColor" stroke-width="2.5"/>`;
  drawing+=sector(A,c,Math.PI-b,colors[0])+sector(B,-b,0,colors[1])+sector(C,Math.PI,Math.PI+c,colors[2]);
  if(step>=0)drawing+=`<path d="M 35 ${A[1]} H 560" stroke="#64748b" stroke-width="2" stroke-dasharray="7 5"/><text x="40" y="${A[1]-12}">x</text><text x="550" y="${A[1]-12}">y</text>`;
  if(step>=1)drawing+=sector(A,Math.PI-b,Math.PI,colors[1]);
  if(step>=2)drawing+=sector(A,0,c,colors[2]);
  drawing+=`<circle cx="${A[0]}" cy="${A[1]}" r="18" fill="transparent" data-drag/><circle cx="${A[0]}" cy="${A[1]}" r="7" fill="${colors[0]}" pointer-events="none"/>`;
  [A,B,C].forEach((p,i)=>{drawing+=`<text x="${p[0]}" y="${p[1]+(i?26:-24)}" text-anchor="middle" font-weight="700" fill="${colors[i]}">${'ABC'[i]}</text>`;});
  svg.innerHTML='<title>Tam giác ABC với đỉnh A có thể kéo</title>'+drawing;
  lab.querySelector('[data-proof-text]').textContent=[
   'Bước 1/4 · Qua A, kẻ đường thẳng xy song song với BC.',
   'Bước 2/4 · Góc xanh ngọc tại A bằng góc B: hai góc so le trong.',
   'Bước 3/4 · Góc vàng tại A bằng góc C: hai góc so le trong.',
   'Bước 4/4 · Ba góc san hô, xanh ngọc và vàng tại A ghép thành góc bẹt. Vì vậy A + B + C = 180°.'
  ][Math.max(step,0)];
  lab.querySelector('[data-next]').disabled=step===3;
 };
 [x,y].forEach(input=>input.addEventListener('input',render));
 lab.querySelector('[data-proof]').addEventListener('click',event=>{
  step=step<0?0:-1;event.currentTarget.setAttribute('aria-pressed',String(step>=0));
  lab.querySelector('.geometry-proof').hidden=step<0;render();
 });
 lab.querySelector('[data-next]').addEventListener('click',()=>{step=Math.min(3,step+1);render();});
 lab.querySelectorAll('[data-shape]').forEach(button=>button.addEventListener('click',()=>{
  const presets={acute:[280,95],right:[100,95],obtuse:[280,220]};
  [x.value,y.value]=presets[button.dataset.shape];render();
 }));
 lab.querySelector('[data-reset]').addEventListener('click',()=>{
  x.value=280;y.value=95;step=-1;lab.querySelector('.geometry-proof').hidden=true;
  lab.querySelector('[data-proof]').setAttribute('aria-pressed','false');render();
 });
 svg.addEventListener('pointerdown',event=>{
  if(!event.target.closest('[data-drag]'))return;
  dragging=true;svg.setPointerCapture(event.pointerId);event.preventDefault();
 });
 svg.addEventListener('pointermove',event=>{
  if(!dragging)return;
  const matrix=svg.getScreenCTM();if(!matrix)return;
  const p=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());
  x.value=Math.max(100,Math.min(470,p.x));y.value=Math.max(65,Math.min(220,p.y));render();
 });
 const stop=()=>{dragging=false;};
 svg.addEventListener('pointerup',stop);svg.addEventListener('pointercancel',stop);svg.addEventListener('lostpointercapture',stop);
 render();
});
