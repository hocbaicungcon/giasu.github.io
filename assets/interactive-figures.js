/* credit: giasu.ai.vn */
// Enhances geometric SVG diagrams across lessons into interactive draggable figures.
// Synchronizes vertices, line segments, tick marks (equal-length markers), angle arcs, right-angle marks, and text labels.

function shiftPathD(d,dx,dy){
 if(Math.abs(dx)<1e-3&&Math.abs(dy)<1e-3)return d;
 return d.replace(/([MLTCSQAZmltcsqaz])([^MLTCSQAZmltcsqaz]*)/g,(match,cmd,params)=>{
  const nums=params.trim().split(/[\s,]+/).map(Number).filter(n=>Number.isFinite(n));
  if(cmd==='M'||cmd==='L'||cmd==='T'){
   const res=[];
   for(let i=0;i<nums.length;i+=2)res.push(`${(nums[i]+dx).toFixed(1)},${(nums[i+1]+dy).toFixed(1)}`);
   return `${cmd} ${res.join(' ')} `;
  }
  if(cmd==='A'){
   const res=[];
   for(let i=0;i<nums.length;i+=7){
    res.push(`${nums[i]} ${nums[i+1]} ${nums[i+2]} ${nums[i+3]} ${nums[i+4]} ${(nums[i+5]+dx).toFixed(1)},${(nums[i+6]+dy).toFixed(1)}`);
   }
   return `${cmd} ${res.join(' ')} `;
  }
  if(cmd==='C'){
   const res=[];
   for(let i=0;i<nums.length;i+=6){
    res.push(`${(nums[i]+dx).toFixed(1)},${(nums[i+1]+dy).toFixed(1)} ${(nums[i+2]+dx).toFixed(1)},${(nums[i+3]+dy).toFixed(1)} ${(nums[i+4]+dx).toFixed(1)},${(nums[i+5]+dy).toFixed(1)}`);
   }
   return `${cmd} ${res.join(' ')} `;
  }
  if(cmd==='S'||cmd==='Q'){
   const res=[];
   for(let i=0;i<nums.length;i+=4){
    res.push(`${(nums[i]+dx).toFixed(1)},${(nums[i+1]+dy).toFixed(1)} ${(nums[i+2]+dx).toFixed(1)},${(nums[i+3]+dy).toFixed(1)}`);
   }
   return `${cmd} ${res.join(' ')} `;
  }
  return match;
 });
}

function angleMarkerPath(vertex,first,second,size,kind){
 const u=Math.hypot(first[0]-vertex[0],first[1]-vertex[1]),v=Math.hypot(second[0]-vertex[0],second[1]-vertex[1]);
 if(u<1e-6||v<1e-6)return '';
 const a=[(first[0]-vertex[0])/u,(first[1]-vertex[1])/u],b=[(second[0]-vertex[0])/v,(second[1]-vertex[1])/v],r=Math.min(size,u*.35,v*.35),p=[vertex[0]+a[0]*r,vertex[1]+a[1]*r],q=[vertex[0]+b[0]*r,vertex[1]+b[1]*r];
 if(kind==='right'){
  if(Math.abs(a[0]*b[0]+a[1]*b[1])>0.035)return '';
  const corner=[p[0]+q[0]-vertex[0],p[1]+q[1]-vertex[1]];
  return `M ${p[0].toFixed(1)},${p[1].toFixed(1)} L ${corner[0].toFixed(1)},${corner[1].toFixed(1)} L ${q[0].toFixed(1)},${q[1].toFixed(1)}`;
 }
 let delta=Math.atan2(b[1],b[0])-Math.atan2(a[1],a[0]);while(delta>Math.PI)delta-=Math.PI*2;while(delta< -Math.PI)delta+=Math.PI*2;
 const arcR=Math.min(r*1.25,Math.max(8,+size));
 const start=[vertex[0]+Math.cos(Math.atan2(a[1],a[0]))*arcR,vertex[1]+Math.sin(Math.atan2(a[1],a[0]))*arcR],end=[vertex[0]+Math.cos(Math.atan2(a[1],a[0])+delta)*arcR,vertex[1]+Math.sin(Math.atan2(a[1],a[0])+delta)*arcR];
 return `M ${start[0].toFixed(1)},${start[1].toFixed(1)} A ${arcR.toFixed(1)} ${arcR.toFixed(1)} 0 ${Math.abs(delta)>Math.PI?1:0} ${delta>=0?1:0} ${end[0].toFixed(1)},${end[1].toFixed(1)}`;
}

export function initInteractiveDiagrams(){
 const prose=document.querySelector('.lesson-course .prose, article.prose');
 if(!prose||document.querySelector('.exam-paper, [data-exam-page]'))return;

 const svgs=prose.querySelectorAll('svg');
 svgs.forEach((svg,svgIndex)=>{
  if(svg.closest('.quiz')||svg.closest('.lesson-practice')||svg.dataset.geometry||svg.classList.contains('ui-symbol')||svg.dataset.interactiveDone)return;
  const vb=svg.viewBox?.baseVal;
  if(vb&&(vb.width<120||vb.height<80))return;

  // Extract circles that represent geometric vertices (radius 2.5px to 8px)
  // Extract circles that represent geometric vertices (radius 2.5px to 8px)
  const circles=[...svg.querySelectorAll('circle')].filter(c=>{
   const r=+c.getAttribute('r');
   return Number.isFinite(r)&&r>=2.5&&r<=8&&!c.classList.contains('diagram-drag-handle');
  });

  // Also collect polygon elements
  const polygons=[...svg.querySelectorAll('polygon')].map(p=>{
   const nums=(p.getAttribute('points')||'').trim().split(/[\s,]+/).map(Number).filter(Number.isFinite);
   const pts=[];
   for(let i=0;i<nums.length;i+=2)pts.push([nums[i],nums[i+1]]);
   return {el:p,origPts:pts,vertexIndices:[]};
  }).filter(p=>p.origPts.length>=3);

  // Determine vertex points from circles AND polygons
  const vertexCoords=[];
  circles.forEach(c=>{
   const x=+c.getAttribute('cx'),y=+c.getAttribute('cy'),r=+c.getAttribute('r');
   vertexCoords.push({circleEl:c,x,y,r,idx:vertexCoords.length});
  });
  polygons.forEach(p=>{
   p.origPts.forEach(([x,y])=>{
    if(!vertexCoords.some(v=>Math.hypot(v.x-x,v.y-y)<6)){
     vertexCoords.push({circleEl:null,x,y,r:4,idx:vertexCoords.length});
    }
   });
  });

  if(vertexCoords.length<2)return;
  svg.dataset.interactiveDone='true';
  const initialMarkup=svg.innerHTML;

  // Check for dependent midpoints among vertices
  const vertices=vertexCoords.map((v,i)=>({
   idx:i,
   origX:v.x,
   origY:v.y,
   currentX:v.x,
   currentY:v.y,
   circleEl:v.circleEl,
   handle:null,
   midpointOf:null
  }));

  // Bind polygon points to vertices permanently
  polygons.forEach(p=>{
   p.vertexIndices=p.origPts.map(([x,y])=>{
    const v=vertices.find(vert=>Math.hypot(x-vert.origX,y-vert.origY)<=8);
    return v?v.idx:null;
   });
  });

  vertices.forEach(vk=>{
   vertices.forEach(vi=>{
    vertices.forEach(vj=>{
     if(vi.idx<vj.idx&&vk.idx!==vi.idx&&vk.idx!==vj.idx){
      const mx=(vi.origX+vj.origX)/2,my=(vi.origY+vj.origY)/2;
      if(Math.hypot(vk.origX-mx,vk.origY-my)<=3){
       vk.midpointOf=[vi.idx,vj.idx];
      }
     }
    });
   });
  });

  // Classify lines: Main segment lines vs Tick marks (length <= 25px)
  const allLines=[...svg.querySelectorAll('line')].map(l=>({
   el:l,
   x1:+l.getAttribute('x1'),
   y1:+l.getAttribute('y1'),
   x2:+l.getAttribute('x2'),
   y2:+l.getAttribute('y2')
  })).filter(l=>Number.isFinite(l.x1)&&Number.isFinite(l.y1)&&Number.isFinite(l.x2)&&Number.isFinite(l.y2));

  const mainLines=[];
  const tickMarks=[];

  allLines.forEach(l=>{
   const len=Math.hypot(l.x2-l.x1,l.y2-l.y1);
   if(len>25){
    // Main segment line: bind endpoints to vertices within 8px
    const ends=[];
    vertices.forEach(v=>{
     if(Math.hypot(l.x1-v.origX,l.y1-v.origY)<=8)ends.push({end:1,vIdx:v.idx});
     if(Math.hypot(l.x2-v.origX,l.y2-v.origY)<=8)ends.push({end:2,vIdx:v.idx});
    });
    mainLines.push({el:l.el,ends});
   }else{
    // Tick mark: bind to nearest segment between two vertices
    const mx=(l.x1+l.x2)/2,my=(l.y1+l.y2)/2;
    let bestSeg=null,minDist=Infinity;
    vertices.forEach(v1=>{
     vertices.forEach(v2=>{
      if(v1.idx<v2.idx){
       const ux=v2.origX-v1.origX,uy=v2.origY-v1.origY,segLen2=ux*ux+uy*uy;
       if(segLen2>100){
        const t=((mx-v1.origX)*ux+(my-v1.origY)*uy)/segLen2;
        if(t>=-0.1&&t<=1.1){
         const tClamp=Math.max(0,Math.min(1,t));
         const px=v1.origX+tClamp*ux,py=v1.origY+tClamp*uy;
         const d=Math.hypot(mx-px,my-py);
         if(d<minDist&&d<=30){minDist=d;bestSeg={v1:v1.idx,v2:v2.idx,t:tClamp,px,py};}
        }
       }
      }
     });
    });

    if(bestSeg){
     const v1=vertices[bestSeg.v1],v2=vertices[bestSeg.v2];
     const ux=v2.origX-v1.origX,uy=v2.origY-v1.origY,segLen=Math.hypot(ux,uy);
     const eParX=ux/segLen,eParY=uy/segLen;
     const ePerpX=-eParY,ePerpY=eParX;
     const deltaX=mx-bestSeg.px,deltaY=my-bestSeg.py;
     const deltaPar=deltaX*eParX+deltaY*eParY;
     const deltaPerp=deltaX*ePerpX+deltaY*ePerpY;
     const hx=(l.x2-l.x1)/2,hy=(l.y2-l.y1)/2;
     const hPar=hx*eParX+hy*eParY;
     const hPerp=hx*ePerpX+hy*ePerpY;
     tickMarks.push({el:l.el,v1:bestSeg.v1,v2:bestSeg.v2,t:bestSeg.t,deltaPar,deltaPerp,hPar,hPerp});
    }
   }
  });

  // Angle arcs (<path>)
  const anglePaths=[...svg.querySelectorAll('path')].map(p=>{
   const d=p.getAttribute('d')||'';
   const kind=p.getAttribute('data-angle-kind'),rayAttr=p.getAttribute('data-angle-rays'),vertexAttr=p.getAttribute('data-angle-vertex');
   if(kind&&rayAttr&&vertexAttr){
    const nums=rayAttr.split(/[ ,]+/).map(Number),vxvy=vertexAttr.split(/[ ,]+/).map(Number),rays=[];
    for(let i=0;i+1<nums.length;i+=2){const point=vertices.find(v=>Math.hypot(v.origX-nums[i],v.origY-nums[i+1])<=8);rays.push(point?point.idx:null);}
    const vertex=vertices.find(v=>Math.hypot(v.origX-vxvy[0],v.origY-vxvy[1])<=8)?.idx??null;
    if(vertex!==null&&rays.length>=2)return {el:p,vIdx:vertex,rayIndices:rays.slice(0,2),size:+p.getAttribute('data-angle-size')||20,kind};
   }
   const angleVertexAttr=p.getAttribute('data-angle-vertex');
   let closestV=null;
   if(angleVertexAttr){
    const [vx,vy]=angleVertexAttr.split(',').map(Number);
    closestV=vertices.find(v=>Math.hypot(vx-v.origX,vy-v.origY)<=8)?.idx??null;
   }
   if(closestV===null){
    const nums=d.match(/-?\d+(?:\.\d+)?/g)?.map(Number)||[];
    if(!nums.length)return null;
    const startX=nums[0],startY=nums[1];
    let minD=Infinity;
    vertices.forEach(v=>{
     const dist=Math.hypot(startX-v.origX,startY-v.origY);
     if(dist<minD&&dist<=60){minD=dist;closestV=v.idx;}
    });
   }
    return closestV!==null?{el:p,vIdx:closestV,origD:d}:null;
  }).filter(Boolean);

  // Right-angle marker (<rect>)
  const rectMarks=[...svg.querySelectorAll('rect')].map(r=>{
   const rx=+r.getAttribute('x'),ry=+r.getAttribute('y');
   const rw=+r.getAttribute('width'),rh=+r.getAttribute('height');
   if(rw>30||rh>30)return null; // Ignore backgrounds
   let closestV=null,minD=Infinity;
   vertices.forEach(v=>{
    const dist=Math.hypot((rx+rw/2)-v.origX,(ry+rh/2)-v.origY);
    if(dist<minD&&dist<=35){minD=dist;closestV=v.idx;}
   });
    return closestV!==null?{el:r,vIdx:closestV,dx:rx-vertices[closestV].origX,dy:ry-vertices[closestV].origY}:null;
  }).filter(Boolean);

  // Text labels (<text>)
  const textBindings=[...svg.querySelectorAll('text')].map(t=>{
   const tx=+t.getAttribute('x'),ty=+t.getAttribute('y');
   if(!Number.isFinite(tx)||!Number.isFinite(ty))return null;
   // 1. Check if it's close to a vertex (vertex name label or angle label)
   let closestV=null,minVDist=Infinity;
   vertices.forEach(v=>{
    const d=Math.hypot(tx-v.origX,ty-v.origY);
    if(d<minVDist){minVDist=d;closestV=v.idx;}
   });
   if(minVDist<=55){
    return {el:t,type:'vertex',vIdx:closestV,dx:tx-vertices[closestV].origX,dy:ty-vertices[closestV].origY};
   }
   // 2. Otherwise it's an edge label (e.g. "Cạnh bên AB", "Cạnh đáy BC")
   let bestSeg=null,minSegDist=Infinity;
   vertices.forEach(v1=>{
    vertices.forEach(v2=>{
     if(v1.idx<v2.idx){
      const ux=v2.origX-v1.origX,uy=v2.origY-v1.origY,segLen2=ux*ux+uy*uy;
      if(segLen2>100){
       const tParam=((tx-v1.origX)*ux+(ty-v1.origY)*uy)/segLen2;
       const tClamp=Math.max(0,Math.min(1,tParam));
       const px=v1.origX+tClamp*ux,py=v1.origY+tClamp*uy;
       const d=Math.hypot(tx-px,ty-py);
       if(d<minSegDist){minSegDist=d;bestSeg={v1:v1.idx,v2:v2.idx,t:tClamp,dx:tx-px,dy:ty-py};}
      }
     }
    });
   });
   if(bestSeg){
    return {el:t,type:'edge',v1:bestSeg.v1,v2:bestSeg.v2,t:bestSeg.t,dx:bestSeg.dx,dy:bestSeg.dy};
   }
   return null;
  }).filter(Boolean);

  // Ensure every vertex has a visible dot
  vertices.forEach(v=>{
   if(!v.circleEl){
    const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('cx',v.origX.toFixed(1));
    dot.setAttribute('cy',v.origY.toFixed(1));
    dot.setAttribute('r','4');
    dot.setAttribute('fill','var(--diagram-label,#1e293b)');
    dot.className.baseVal='diagram-vertex-dot';
    svg.appendChild(dot);
    v.circleEl=dot;
   }
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
   vertices.forEach(v=>{
    const handle=document.createElementNS('http://www.w3.org/2000/svg','circle');
    handle.setAttribute('cx',v.currentX.toFixed(1));
    handle.setAttribute('cy',v.currentY.toFixed(1));
    handle.setAttribute('r','16');
    handle.setAttribute('fill','rgba(8,120,88,0.12)');
    handle.setAttribute('stroke','var(--diagram-ink,#087858)');
    handle.setAttribute('stroke-width','2');
    handle.setAttribute('stroke-dasharray','3 3');
    handle.setAttribute('opacity','0.35');
    handle.style.cssText='cursor:grab;touch-action:none;';
    handle.setAttribute('tabindex','0');
    handle.setAttribute('role','slider');
    handle.setAttribute('aria-label',`Kéo đỉnh để thay đổi kích thước`);

    handle.addEventListener('mouseenter',()=>{if(activeHandle!==handle)handle.setAttribute('opacity','0.85');});
    handle.addEventListener('mouseleave',()=>{if(activeHandle!==handle)handle.setAttribute('opacity','0.35');});
    handle.addEventListener('focus',()=>{handle.setAttribute('opacity','0.85');});
    handle.addEventListener('blur',()=>{if(activeHandle!==handle)handle.setAttribute('opacity','0.35');});

    handle.addEventListener('pointerdown',e=>{
     activeHandle=handle;
     activeVertex=v;
     try{handle.setPointerCapture(e.pointerId);}catch{}
     handle.style.cursor='grabbing';
     handle.setAttribute('opacity','1');
     e.preventDefault();
     e.stopPropagation();
    });

    const endDrag=e=>{
     if(activeHandle===handle){
      try{handle.releasePointerCapture(e.pointerId);}catch{}
      activeHandle=null;
      activeVertex=null;
      handle.style.cursor='grab';
      handle.setAttribute('opacity','0.35');
     }
    };
    handle.addEventListener('pointerup',endDrag);
    handle.addEventListener('pointercancel',endDrag);

    handle.addEventListener('keydown',e=>{
     const step=5;
     let dx=0,dy=0;
     if(e.key==='ArrowUp')dy=-step;
     else if(e.key==='ArrowDown')dy=step;
     else if(e.key==='ArrowLeft')dx=-step;
     else if(e.key==='ArrowRight')dx=step;
     else return;
     e.preventDefault();
     moveVertex(v,v.currentX+dx,v.currentY+dy);
    });

    v.handle=handle;
    handlesGroup.appendChild(handle);
   });
   svg.appendChild(handlesGroup);
  }

  let activeHandle=null,activeVertex=null;

  function moveVertex(v,nx,ny){
   const vbx=vb?.x||0,vby=vb?.y||0,vbw=vb?.width||600,vbh=vb?.height||340;
   const clampedX=Math.max(vbx+8,Math.min(vbx+vbw-8,nx));
   const clampedY=Math.max(vby+8,Math.min(vby+vbh-8,ny));

   v.currentX=clampedX;
   v.currentY=clampedY;

   // Update dependent midpoints (do not overwrite if the midpoint itself is being dragged)
   vertices.forEach(vk=>{
    if(vk.midpointOf&&vk!==v){
     const [i,j]=vk.midpointOf;
     vk.currentX=(vertices[i].currentX+vertices[j].currentX)/2;
     vk.currentY=(vertices[i].currentY+vertices[j].currentY)/2;
    }
   });

   // 1. Update vertex circle elements and handles
   vertices.forEach(vert=>{
    if(vert.circleEl){
     vert.circleEl.setAttribute('cx',vert.currentX.toFixed(1));
     vert.circleEl.setAttribute('cy',vert.currentY.toFixed(1));
    }
    if(vert.handle){
     vert.handle.setAttribute('cx',vert.currentX.toFixed(1));
     vert.handle.setAttribute('cy',vert.currentY.toFixed(1));
    }
   });

   // 2. Update polygons reliably using bound vertex indices
   polygons.forEach(poly=>{
    const newCoords=poly.origPts.map(([ox,oy],ptIdx)=>{
     const vIdx=poly.vertexIndices[ptIdx];
     if(vIdx!==null&&vertices[vIdx]){
      return `${vertices[vIdx].currentX.toFixed(1)},${vertices[vIdx].currentY.toFixed(1)}`;
     }
     return `${ox.toFixed(1)},${oy.toFixed(1)}`;
    });
    poly.el.setAttribute('points',newCoords.join(' '));
   });

   // 3. Update main lines
   mainLines.forEach(l=>{
    l.ends.forEach(({end,vIdx})=>{
     const vert=vertices[vIdx];
     if(end===1){l.el.setAttribute('x1',vert.currentX.toFixed(1));l.el.setAttribute('y1',vert.currentY.toFixed(1));}
     else{l.el.setAttribute('x2',vert.currentX.toFixed(1));l.el.setAttribute('y2',vert.currentY.toFixed(1));}
    });
   });

   // 4. Update tick marks (equal-length markers)
   tickMarks.forEach(tick=>{
    const p1=vertices[tick.v1],p2=vertices[tick.v2];
    const ux=p2.currentX-p1.currentX,uy=p2.currentY-p1.currentY,len=Math.hypot(ux,uy);
    if(len<1e-3)return;
    const eParX=ux/len,eParY=uy/len;
    const ePerpX=-eParY,ePerpY=eParX;
    const projX=p1.currentX+tick.t*ux,projY=p1.currentY+tick.t*uy;
    const mx=projX+tick.deltaPar*eParX+tick.deltaPerp*ePerpX;
    const my=projY+tick.deltaPar*eParY+tick.deltaPerp*ePerpY;
    const hx=tick.hPar*eParX+tick.hPerp*ePerpX;
    const hy=tick.hPar*eParY+tick.hPerp*ePerpY;
    tick.el.setAttribute('x1',(mx-hx).toFixed(1));
    tick.el.setAttribute('y1',(my-hy).toFixed(1));
    tick.el.setAttribute('x2',(mx+hx).toFixed(1));
    tick.el.setAttribute('y2',(my+hy).toFixed(1));
   });

   // 5. Update angle arcs (<path>)
   anglePaths.forEach(ap=>{
    const vert=vertices[ap.vIdx];
    if(ap.rayIndices){const [a,b]=ap.rayIndices.map(i=>i===null?null:vertices[i]);if(!a||!b){ap.el.setAttribute('d','');return;}ap.el.setAttribute('d',angleMarkerPath([vert.currentX,vert.currentY],[a.currentX,a.currentY],[b.currentX,b.currentY],ap.size,ap.kind));}
    else{const dx=vert.currentX-vert.origX,dy=vert.currentY-vert.origY;ap.el.setAttribute('d',shiftPathD(ap.origD,dx,dy));}
   });

   // 6. Update right-angle markers (<rect>)
   rectMarks.forEach(rm=>{
    const vert=vertices[rm.vIdx];
    rm.el.setAttribute('x',(vert.currentX+rm.dx).toFixed(1));
    rm.el.setAttribute('y',(vert.currentY+rm.dy).toFixed(1));
   });

   // 7. Update text labels (<text>)
   textBindings.forEach(tb=>{
    if(tb.type==='vertex'){
     const vert=vertices[tb.vIdx];
     tb.el.setAttribute('x',(vert.currentX+tb.dx).toFixed(1));
     tb.el.setAttribute('y',(vert.currentY+tb.dy).toFixed(1));
    }else if(tb.type==='edge'){
     const p1=vertices[tb.v1],p2=vertices[tb.v2];
     const mx=p1.currentX+tb.t*(p2.currentX-p1.currentX);
     const my=p1.currentY+tb.t*(p2.currentY-p1.currentY);
     tb.el.setAttribute('x',(mx+tb.dx).toFixed(1));
     tb.el.setAttribute('y',(my+tb.dy).toFixed(1));
    }
   });

   if(resetBtn)resetBtn.hidden=false;
  }

  function handlePointerMove(e){
   if(!activeHandle||!activeVertex)return;
   const ctm=svg.getScreenCTM();
   if(!ctm)return;
   const pt=new DOMPoint(e.clientX,e.clientY).matrixTransform(ctm.inverse());
   moveVertex(activeVertex,pt.x,pt.y);
  }

  svg.addEventListener('pointermove',handlePointerMove);

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

