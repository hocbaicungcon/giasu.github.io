// Enhance static lesson figures without changing their mathematical geometry.
document.querySelectorAll('.prose svg.lesson-diagram').forEach(svg=>{
 if(svg.closest('.geometry-lab,.lesson-exploration,.diagram-viewport')||svg.classList.contains('geometry-canvas'))return;
 const viewport=document.createElement('div');viewport.className='diagram-viewport';svg.before(viewport);viewport.append(svg);
 const tools=document.createElement('div');tools.className='diagram-tools';tools.setAttribute('role','group');tools.setAttribute('aria-label','Điều khiển hình vẽ');viewport.after(tools);
 const originalWidth=svg.style.width,originalMax=svg.style.maxWidth;let zoom=1;
 const button=(name,action)=>{const b=document.createElement('button');b.type='button';b.textContent=name;b.addEventListener('click',action);tools.append(b);return b;};
 const render=()=>{if(zoom===1){svg.style.width=originalWidth;svg.style.maxWidth=originalMax;}else{svg.style.width=`${viewport.clientWidth*zoom}px`;svg.style.maxWidth='none';}minus.disabled=zoom<=1;plus.disabled=zoom>=3;};
 const minus=button('Thu nhỏ',()=>{zoom=Math.max(1,zoom-.5);render();});
 const plus=button('Phóng to',()=>{zoom=Math.min(3,zoom+.5);render();});
 let labels;
 if(svg.querySelector('text')){labels=button('Ẩn nhãn',()=>{const hidden=svg.classList.toggle('diagram-hide-labels');labels.textContent=hidden?'Hiện nhãn':'Ẩn nhãn';labels.setAttribute('aria-pressed',String(hidden));});labels.setAttribute('aria-pressed','false');}
 button('Đặt lại',()=>{zoom=1;svg.classList.remove('diagram-hide-labels');if(labels){labels.textContent='Ẩn nhãn';labels.setAttribute('aria-pressed','false');}render();viewport.scrollLeft=0;});render();
});
