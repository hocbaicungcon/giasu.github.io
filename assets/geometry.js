/* credit: giasu.ai.vn */
import {trianglePoints} from './geometry-math.js';
const colors=['#bf645a','#438557','#c79536'];
const line=(p,q,color,dashed=false)=>`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${color}" stroke-width="3" ${dashed?'stroke-dasharray="7 4"':''}/>`;
const labels=(points,names)=>points.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="currentColor"/><text x="${p[0]}" y="${p[1]+(i===0?-15:24)}" text-anchor="middle">${names[i]}</text>`).join('');
document.querySelectorAll('[data-geometry="triangle-sss"]').forEach(lab=>{
 const narrow=matchMedia('(max-width:620px)');
 const svg=lab.querySelector('svg'),inputs=[...lab.querySelectorAll('[data-side]')],rotation=lab.querySelector('[data-rotation]'),overlay=lab.querySelector('[data-overlay]'),match=lab.querySelector('[data-match]');
 const render=()=>{
  const mobile=narrow.matches;svg.setAttribute('viewBox',mobile?'0 0 360 520':'0 0 680 340');
  const lengths=inputs.map(i=>+i.value),points=trianglePoints(...lengths),p=+overlay.value/100,theta=+rotation.value*Math.PI/180;
  inputs.forEach((input,i)=>lab.querySelector(`[data-length="${input.dataset.side}"]`).textContent=lengths[i].toFixed(1));
  match.disabled=!points;overlay.disabled=!points;rotation.disabled=!points;
  if(!points){svg.innerHTML=`<title>Ba độ dài chưa tạo thành tam giác</title><text x="${mobile?180:340}" y="160" text-anchor="middle">Chưa tạo được tam giác</text>`;lab.querySelector('.geometry-observation').textContent='Tổng hai cạnh phải lớn hơn cạnh còn lại. Hãy điều chỉnh độ dài để tạo một tam giác.';return;}
  const minX=Math.min(...points.map(p=>p[0])),maxX=Math.max(...points.map(p=>p[0])),height=-points[0][1];
  const scale=Math.min(mobile?22:28,(mobile?200:220)/(maxX-minX),(mobile?140:190)/height),cx=(minX+maxX)/2,cy=-height/2;
  const local=points.map(([x,y])=>[(x-cx)*scale,(y-cy)*scale]);
  const baseX=mobile?180:170,baseY=mobile?125:155;
  const first=local.map(([x,y])=>[baseX+x,baseY+y]);
  const second=local.map(([x,y])=>[baseX+(mobile?0:340*(1-p))+x*Math.cos(theta)-y*Math.sin(theta),baseY+(mobile?240*(1-p):0)+x*Math.sin(theta)+y*Math.cos(theta)]);
  const triangle=(ps,dashed)=>{
   let html=`<polygon points="${ps.map(p=>p.join(',')).join(' ')}" fill="${dashed?'#438557':'#bf645a'}" fill-opacity=".05"/>`;
   [[0,1],[1,2],[2,0]].forEach(([a,b],i)=>{
    html+=line(ps[a],ps[b],colors[i],dashed);
    const dx=ps[b][0]-ps[a][0],dy=ps[b][1]-ps[a][1],len=Math.hypot(dx,dy),ux=dx/len,uy=dy/len;
    for(let k=0;k<=i;k++){
     const offset=(k-i/2)*7,mx=(ps[a][0]+ps[b][0])/2+ux*offset,my=(ps[a][1]+ps[b][1])/2+uy*offset;
     html+=line([mx-uy*5,my+ux*5],[mx+uy*5,my-ux*5],colors[i]);
    }
   });return html;
  };
  const matched=p===1&&+rotation.value===0;
  svg.innerHTML='<title>Hai tam giác có cùng độ dài ba cạnh</title>'+triangle(first,false)+triangle(second,true)+labels(first,matched?['A / D','B / E','C / F']:['A','B','C'])+(matched?'':labels(second,['D','E','F']));
  lab.querySelector('.geometry-observation').textContent=matched?'Hai tam giác chồng khít: A ↔ D, B ↔ E, C ↔ F. Ba cặp cạnh bằng nhau xác định cùng một hình dạng và kích thước (c.c.c).':'AB = DE, BC = EF, CA = FD. Xoay và di chuyển không làm đổi các cạnh; thử chồng hai hình để kiểm chứng.';
 };
 narrow.addEventListener('change',render);
 [...inputs,rotation,overlay].forEach(input=>input.addEventListener('input',render));
 match.addEventListener('click',()=>{rotation.value=0;overlay.value=100;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{inputs.forEach((input,i)=>input.value=[6,7,5][i]);rotation.value=45;overlay.value=0;render();});
 render();
});
const sector=(center,start,end,color)=>{
 const r=28,p=[center[0]+r*Math.cos(start),center[1]+r*Math.sin(start)],q=[center[0]+r*Math.cos(end),center[1]+r*Math.sin(end)];
 return `<path d="M${center} L${p} A${r} ${r} 0 0 1 ${q} Z" fill="${color}" fill-opacity=".23" stroke="${color}" stroke-width="2"/>`;
};
document.querySelectorAll('[data-geometry="angle-pairs"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),input=lab.querySelector('[data-angle-input]'),parallel=lab.dataset.mode==='parallel',buttons=[...lab.querySelectorAll('[data-pair]')];let selected=buttons[0].dataset.pair;
 const render=()=>{
  const alpha=+input.value,beta=180-alpha,t=alpha*Math.PI/180;
  lab.querySelector('[data-angle-value]').textContent=alpha+'°';
  const centre=[300,parallel?115:170],lower=[300+100/Math.tan(t),215];
  let drawing=parallel?line([45,115],[555,115],'#72898c')+line([45,215],[555,215],'#72898c'):line([55,170],[545,170],'#72898c');
  const yTop=parallel?50:70,yBottom=parallel?285:270;
  drawing+=line([300+(yTop-centre[1])/Math.tan(t),yTop],[300+(yBottom-centre[1])/Math.tan(t),yBottom],'#284b52');
  if(parallel){
   drawing+='<text x="52" y="99">a</text><text x="52" y="199">b</text><text x="455" y="310">a ∥ b</text>';
   if(selected==='corresponding')drawing+=sector(centre,0,t,colors[1])+sector(lower,0,t,colors[1]);
   if(selected==='alternate')drawing+=sector(centre,0,t,colors[1])+sector(lower,Math.PI,Math.PI+t,colors[1]);
   if(selected==='same-side')drawing+=sector(centre,0,t,colors[1])+sector(lower,Math.PI+t,2*Math.PI,colors[0]);
  }else{
   drawing+=sector(centre,0,t,colors[1]);
   drawing+=selected==='opposite'?sector(centre,Math.PI,Math.PI+t,colors[1]):sector(centre,t,Math.PI,colors[0]);
  }
  drawing+=`<circle cx="${centre[0]}" cy="${centre[1]}" r="3" fill="currentColor"/><text x="${centre[0]+35}" y="${centre[1]+45}" fill="${colors[1]}">α = ${alpha}°</text>`;
  if(parallel)drawing+=`<text x="${lower[0]+(selected==='alternate'?-135:38)}" y="${lower[1]+(selected==='corresponding'?45:-35)}" fill="${selected==='same-side'?colors[0]:colors[1]}">${selected==='same-side'?beta:alpha}°</text>`;
  else drawing+=`<text x="${centre[0]-130}" y="${centre[1]+(selected==='opposite'?-38:45)}" fill="${selected==='opposite'?colors[1]:colors[0]}">${selected==='opposite'?alpha:beta}°</text>`;
  svg.innerHTML='<title>Các góc thay đổi theo độ nghiêng đường cắt</title>'+drawing;
  const notes={opposite:`Hai góc đối đỉnh cùng bằng ${alpha}°.`,adjacent:`Hai góc kề bù: ${alpha}° + ${beta}° = 180°.`,corresponding:`Vì a ∥ b, hai góc đồng vị cùng bằng ${alpha}°.`,alternate:`Vì a ∥ b, hai góc so le trong cùng bằng ${alpha}°.`,'same-side':`Vì a ∥ b, hai góc trong cùng phía: ${alpha}° + ${beta}° = 180°.`};
  lab.querySelector('.geometry-observation').textContent=notes[selected];
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.pair===selected)));
 };
 input.addEventListener('input',render);buttons.forEach(button=>button.addEventListener('click',()=>{selected=button.dataset.pair;render();}));
 lab.querySelector('[data-reset]').addEventListener('click',()=>{input.value=60;selected=buttons[0].dataset.pair;render();});render();
});
// Progress reflects checked answers; all lesson content remains available.
document.querySelectorAll('.prose').forEach(article=>{
 const quizzes=[...article.querySelectorAll('form.quiz')];if(!quizzes.length)return;
 const panel=document.createElement('div');panel.className='lesson-progress';
 panel.innerHTML='<div><strong>Luyện tập theo nhịp của em</strong><span data-progress-text></span></div><progress value="0" aria-label="Số câu trả lời đúng"></progress>';
 const progress=panel.querySelector('progress');progress.max=quizzes.length;
 const update=()=>{const count=quizzes.filter(q=>q.dataset.result==='correct').length;progress.value=count;panel.querySelector('[data-progress-text]').textContent=`${count}/${quizzes.length} câu đúng · Có thể thử lại bất cứ lúc nào`;};
 article.prepend(panel);article.addEventListener('quiz-result',update);update();
});
