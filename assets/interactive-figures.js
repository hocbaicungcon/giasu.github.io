/* credit: giasu.ai.vn */
// Enhances geometric SVG diagrams across lessons into interactive draggable figures.
export function initInteractiveDiagrams(){
 const prose=document.querySelector('.lesson-course .prose, article.prose');
 if(!prose||document.querySelector('.exam-paper, [data-exam-page]'))return;

 const svgs=prose.querySelectorAll('svg');
 svgs.forEach((svg,svgIndex)=>{
  if(svg.closest('.quiz')||svg.closest('.lesson-practice')||svg.dataset.geometry||svg.classList.contains('ui-symbol')||svg.dataset.interactiveDone)return;
  const vb=svg.viewBox?.baseVal;
  if(vb&&(vb.width<120||vb.height<80))return;

  // Extract circles that represent geometric vertices (radius 2.5px to 8px)
  const circles=[...svg.querySelectorAll('circle')].filter(c=>{
   const r=+c.getAttribute('r');
   return Number.isFinite(r)&&r>=2.5&&r<=8&&!c.classList.contains('diagram-drag-handle');
  });

  // Also collect polygon and line elements
  const polygons=[...svg.querySelectorAll('polygon')].map(p=>({
   el:p,
   points:(p.getAttribute('points')||'').trim().split(/\s+/).map(pair=>{
    const [x,y]=pair.split(',').map(Number);
    return [x,y];
   })
  })).filter(p=>p.points.length>=3&&p.points.every(([x,y])=>Number.isFinite(x)&&Number.isFinite(y)));

  const lines=[...svg.querySelectorAll('line')].map(l=>({
   el:l,
   x1:+l.getAttribute('x1'),
   y1:+l.getAttribute('y1'),
   x2:+l.getAttribute('x2'),
   y2:+l.getAttribute('y2')
  })).filter(l=>Number.isFinite(l.x1)&&Number.isFinite(l.y1)&&Number.isFinite(l.x2)&&Number.isFinite(l.y2));

  // Text labels
  const texts=[...svg.querySelectorAll('text')].map(t=>({
   el:t,
   x:+t.getAttribute('x'),
   y:+t.getAttribute('y'),
   text:t.textContent.trim()
  })).filter(t=>Number.isFinite(t.x)&&Number.isFinite(t.y));

  // Determine vertex points
  let vertexCoords=[];
  if(circles.length>=2){
   vertexCoords=circles.map(c=>({
    circleEl:c,
    x:+c.getAttribute('cx'),
    y:+c.getAttribute('cy'),
    r:+c.getAttribute('r')
   }));
  }else if(polygons.length>=1){
   // If no explicit circles, use polygon vertices
   polygons.forEach(p=>{
    p.points.forEach(([x,y])=>{
     if(!vertexCoords.some(v=>Math.hypot(v.x-x,v.y-y)<4)){
      vertexCoords.push({circleEl:null,x,y,r:4});
     }
    });
   });
  }

  if(vertexCoords.length<2)return;
  svg.dataset.interactiveDone='true';
  const initialMarkup=svg.innerHTML;

  // Build vertex binding map
  const bindings=vertexCoords.map((v,idx)=>{
   const matchedPoly=[];
   polygons.forEach((poly,polyIdx)=>{
    poly.points.forEach((pt,ptIdx)=>{
     if(Math.hypot(pt[0]-v.x,pt[1]-v.y)<=4){
      matchedPoly.push({polyIdx,ptIdx});
     }
    });
   });

   const matchedLines=[];
   lines.forEach((l,lineIdx)=>{
    if(Math.hypot(l.x1-v.x,l.y1-v.y)<=4)matchedLines.push({lineIdx,end:1});
    if(Math.hypot(l.x2-v.x,l.y2-v.y)<=4)matchedLines.push({lineIdx,end:2});
   });

   // Match closest label within 50px
   let matchedText=null,dx=0,dy=0;
   const candidates=texts.filter(t=>Math.hypot(t.x-v.x,t.y-v.y)<=50)
    .sort((a,b)=>Math.hypot(a.x-v.x,a.y-v.y)-Math.hypot(b.x-v.x,b.y-v.y));
   if(candidates.length){
    matchedText=candidates[0].el;
    dx=candidates[0].x-v.x;
    dy=candidates[0].y-v.y;
   }

   return {
    id:`v_${svgIndex}_${idx}`,
    currentX:v.x,
    currentY:v.y,
    circleEl:v.circleEl,
    matchedPoly,
    matchedLines,
    matchedText,
    dx,
    dy
   };
  });

  // Toolbar setup
  const parent=svg.parentElement;
  let toolbar=parent.querySelector('.diagram-interactive-toolbar');
  if(!toolbar){
   toolbar=document.createElement('div');
   toolbar.className='diagram-interactive-toolbar';
   toolbar.style.cssText='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:0.83em;color:var(--diagram-outline,#64748b);margin:6px auto 14px;max-width:620px;padding:4px 10px;background:var(--diagram-wash,rgba(8,120,88,0.04));border-radius:8px;border:1px dashed var(--border-color,#e2e8f0);';
   toolbar.innerHTML='<span style="display:inline-flex;align-items:center;gap:5px;font-weight:500;">✦ Kéo thả các đỉnh để thay đổi vị trí, kích thước</span><button type="button" class="diagram-reset-btn" hidden style="background:var(--paper,#ffffff);border:1px solid var(--diagram-outline,#cbd5e1);color:var(--ink,#1e293b);border-radius:6px;padding:2px 8px;font-size:0.85em;cursor:pointer;">↺ Đặt lại hình</button>';
   if(svg.nextSibling)parent.insertBefore(toolbar,svg.nextSibling);
   else parent.appendChild(toolbar);
  }
  const resetBtn=toolbar.querySelector('.diagram-reset-btn');

  // Handle layer inside SVG
  let handlesGroup=svg.querySelector('.diagram-handles-group');
  if(handlesGroup)handlesGroup.remove();
  handlesGroup=document.createElementNS('http://www.w3.org/2000/svg','g');
  handlesGroup.className.baseVal='diagram-handles-group';

  function attachHandles(){
   handlesGroup.replaceChildren();
   bindings.forEach(b=>{
    const handle=document.createElementNS('http://www.w3.org/2000/svg','circle');
    handle.setAttribute('cx',b.currentX);
    handle.setAttribute('cy',b.currentY);
    handle.setAttribute('r',14);
    handle.setAttribute('fill','transparent');
    handle.setAttribute('stroke','var(--diagram-ink,#087858)');
    handle.setAttribute('stroke-width','2');
    handle.setAttribute('stroke-dasharray','3 3');
    handle.setAttribute('opacity','0');
    handle.style.cssText='cursor:grab;touch-action:none;';
    handle.setAttribute('tabindex','0');
    handle.setAttribute('role','slider');
    handle.setAttribute('aria-label',`Kéo đỉnh để thay đổi kích thước`);

    handle.addEventListener('mouseenter',()=>{handle.setAttribute('opacity','0.85');});
    handle.addEventListener('mouseleave',()=>{if(activeHandle!==handle)handle.setAttribute('opacity','0');});
    handle.addEventListener('focus',()=>{handle.setAttribute('opacity','0.85');});
    handle.addEventListener('blur',()=>{if(activeHandle!==handle)handle.setAttribute('opacity','0');});

    handle.addEventListener('pointerdown',e=>{
     activeHandle=handle;
     activeBinding=b;
     handle.setPointerCapture(e.pointerId);
     handle.style.cursor='grabbing';
     handle.setAttribute('opacity','0.9');
     e.preventDefault();
     e.stopPropagation();
    });

    handle.addEventListener('pointerup',e=>{
     if(activeHandle===handle){
      try{handle.releasePointerCapture(e.pointerId);}catch{}
      activeHandle=null;
      activeBinding=null;
      handle.style.cursor='grab';
      handle.setAttribute('opacity','0');
     }
    });

    handle.addEventListener('pointercancel',e=>{
     if(activeHandle===handle){
      try{handle.releasePointerCapture(e.pointerId);}catch{}
      activeHandle=null;
      activeBinding=null;
      handle.style.cursor='grab';
      handle.setAttribute('opacity','0');
     }
    });

    handle.addEventListener('keydown',e=>{
     const step=5;
     let dx=0,dy=0;
     if(e.key==='ArrowUp')dy=-step;
     else if(e.key==='ArrowDown')dy=step;
     else if(e.key==='ArrowLeft')dx=-step;
     else if(e.key==='ArrowRight')dx=step;
     else return;
     e.preventDefault();
     moveVertex(b,handle,b.currentX+dx,b.currentY+dy);
    });

    handlesGroup.appendChild(handle);
   });
   svg.appendChild(handlesGroup);
  }

  let activeHandle=null,activeBinding=null;

  function moveVertex(b,handle,nx,ny){
   const vbx=vb?.x||0,vby=vb?.y||0,vbw=vb?.width||600,vbh=vb?.height||340;
   const clampedX=Math.max(vbx+8,Math.min(vbx+vbw-8,nx));
   const clampedY=Math.max(vby+8,Math.min(vby+vbh-8,ny));

   b.currentX=clampedX;
   b.currentY=clampedY;
   handle.setAttribute('cx',clampedX);
   handle.setAttribute('cy',clampedY);

   if(b.circleEl){
    b.circleEl.setAttribute('cx',clampedX);
    b.circleEl.setAttribute('cy',clampedY);
   }

   // Update polygons
   b.matchedPoly.forEach(({polyIdx,ptIdx})=>{
    const poly=polygons[polyIdx];
    if(poly){
     poly.points[ptIdx]=[clampedX,clampedY];
     poly.el.setAttribute('points',poly.points.map(pt=>pt.join(',')).join(' '));
    }
   });

   // Update lines
   b.matchedLines.forEach(({lineIdx,end})=>{
    const l=lines[lineIdx];
    if(l){
     if(end===1){l.x1=clampedX;l.y1=clampedY;l.el.setAttribute('x1',clampedX);l.el.setAttribute('y1',clampedY);}
     else{l.x2=clampedX;l.y2=clampedY;l.el.setAttribute('x2',clampedX);l.el.setAttribute('y2',clampedY);}
    }
   });

   // Update text
   if(b.matchedText){
    b.matchedText.setAttribute('x',clampedX+b.dx);
    b.matchedText.setAttribute('y',clampedY+b.dy);
   }

   if(resetBtn)resetBtn.hidden=false;
  }

  svg.addEventListener('pointermove',e=>{
   if(!activeHandle||!activeBinding)return;
   const ctm=svg.getScreenCTM();
   if(!ctm)return;
   const pt=new DOMPoint(e.clientX,e.clientY).matrixTransform(ctm.inverse());
   moveVertex(activeBinding,activeHandle,pt.x,pt.y);
  });

  if(resetBtn){
   resetBtn.addEventListener('click',()=>{
    svg.innerHTML=initialMarkup;
    delete svg.dataset.interactiveDone;
    resetBtn.hidden=true;
    initInteractiveDiagrams();
   });
  }

  attachHandles();
 });
}

if(typeof document!=='undefined'){
 if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initInteractiveDiagrams);
 }else{
  initInteractiveDiagrams();
 }
}
