import {GeometryScene, measureAngle} from './geometry-interaction.js?v=ae37b7d5d47b';
import './right-triangles.js?v=ae37b7d5d47b';
import './interactive-figures.js?v=ae37b7d5d47b';
/* credit: giasu.ai.vn */
import {trianglePoints, triangleSasPoints, triangleAsaPoints} from './geometry-math.js?v=ae37b7d5d47b';
const colors=['var(--diagram-coral)','var(--diagram-ink)','var(--diagram-gold)'];
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
   let html=`<polygon points="${ps.map(p=>p.join(',')).join(' ')}" fill="${dashed?'var(--diagram-ink)':'var(--diagram-coral)'}" fill-opacity=".05"/>`;
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
document.querySelectorAll('[data-geometry="triangle-sas"]').forEach(lab=>{
 const narrow=matchMedia('(max-width:620px)');
 const svg=lab.querySelector('svg'),abInput=lab.querySelector('[data-side="ab"]'),aInput=lab.querySelector('[data-angle-sas]'),acInput=lab.querySelector('[data-side="ac"]'),rotation=lab.querySelector('[data-rotation]'),overlay=lab.querySelector('[data-overlay]'),match=lab.querySelector('[data-match]');
 const render=()=>{
  const mobile=narrow.matches;svg.setAttribute('viewBox',mobile?'0 0 360 520':'0 0 680 340');
  const ab=+abInput.value,angleA=+aInput.value,ac=+acInput.value,model=triangleSasPoints(ab,angleA,ac),p=+overlay.value/100,theta=+rotation.value*Math.PI/180;
  lab.querySelector('[data-length="ab"]').textContent=ab.toFixed(1);lab.querySelector('[data-angle-val="a"]').textContent=angleA+'°';lab.querySelector('[data-length="ac"]').textContent=ac.toFixed(1);
  if(!model)return;
  const points=model.points,minX=Math.min(...points.map(pt=>pt[0])),maxX=Math.max(...points.map(pt=>pt[0])),height=Math.abs(points[2][1]);
  const scale=Math.min(mobile?22:28,(mobile?200:220)/(maxX-minX||1),(mobile?140:190)/(height||1)),cx=(minX+maxX)/2,cy=-height/2;
  const local=points.map(([x,y])=>[(x-cx)*scale,(y-cy)*scale]);
  const baseX=mobile?180:170,baseY=mobile?125:155;
  const first=local.map(([x,y])=>[baseX+x,baseY+y]);
  const second=local.map(([x,y])=>[baseX+(mobile?0:340*(1-p))+x*Math.cos(theta)-y*Math.sin(theta),baseY+(mobile?240*(1-p):0)+x*Math.sin(theta)+y*Math.cos(theta)]);
  const triangle=(ps,dashed)=>{
   let html=`<polygon points="${ps.map(pt=>pt.join(',')).join(' ')}" fill="${dashed?'var(--diagram-ink)':'var(--diagram-coral)'}" fill-opacity=".06"/>`;
   html+=line(ps[0],ps[1],colors[0],dashed)+line(ps[1],ps[2],colors[1],dashed)+line(ps[2],ps[0],colors[2],dashed);
   return html;
  };
  const matched=p===1&&+rotation.value===0;
  svg.innerHTML='<title>Trường hợp c.g.c: hai cạnh và góc xen giữa</title>'+triangle(first,false)+triangle(second,true)+labels(first,matched?['A ≡ D','B ≡ E','C ≡ F']:['A','B','C'])+(matched?'':labels(second,['D','E','F']));
  lab.querySelector('.geometry-observation').textContent=matched?`Hai tam giác chồng khít: A ↔ D, B ↔ E, C ↔ F. Cạnh thứ ba BC = EF = ${model.bc.toFixed(2)}. Hai cặp cạnh và góc xen giữa bằng nhau xác định cùng một hình dạng và kích thước (c.g.c).`:`AB = DE = ${ab.toFixed(1)}, AC = DF = ${ac.toFixed(1)}, góc A = góc D = ${angleA}°. Xoay và chồng hai hình để kiểm chứng cạnh thứ ba BC = EF = ${model.bc.toFixed(2)}.`;
 };
 narrow.addEventListener('change',render);
 [abInput,aInput,acInput,rotation,overlay].forEach(input=>input.addEventListener('input',render));
 match.addEventListener('click',()=>{rotation.value=0;overlay.value=100;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{abInput.value=5;aInput.value=60;acInput.value=6;rotation.value=45;overlay.value=0;render();});
 render();
});
document.querySelectorAll('[data-geometry="triangle-asa"]').forEach(lab=>{
 const narrow=matchMedia('(max-width:620px)');
 const svg=lab.querySelector('svg'),bInput=lab.querySelector('[data-angle-b]'),bcInput=lab.querySelector('[data-side="bc"]'),cInput=lab.querySelector('[data-angle-c]'),rotation=lab.querySelector('[data-rotation]'),overlay=lab.querySelector('[data-overlay]'),match=lab.querySelector('[data-match]');
 const render=()=>{
  const mobile=narrow.matches;svg.setAttribute('viewBox',mobile?'0 0 360 520':'0 0 680 340');
  const angleB=+bInput.value,bc=+bcInput.value,angleC=+cInput.value,model=triangleAsaPoints(angleB,bc,angleC),p=+overlay.value/100,theta=+rotation.value*Math.PI/180;
  lab.querySelector('[data-angle-val="b"]').textContent=angleB+'°';lab.querySelector('[data-length="bc"]').textContent=bc.toFixed(1);lab.querySelector('[data-angle-val="c"]').textContent=angleC+'°';
  if(!model)return;
  const points=model.points,minX=Math.min(...points.map(pt=>pt[0])),maxX=Math.max(...points.map(pt=>pt[0])),height=Math.abs(points[0][1]);
  const scale=Math.min(mobile?22:28,(mobile?200:220)/(maxX-minX||1),(mobile?140:190)/(height||1)),cx=(minX+maxX)/2,cy=-height/2;
  const local=points.map(([x,y])=>[(x-cx)*scale,(y-cy)*scale]);
  const baseX=mobile?180:170,baseY=mobile?125:155;
  const first=local.map(([x,y])=>[baseX+x,baseY+y]);
  const second=local.map(([x,y])=>[baseX+(mobile?0:340*(1-p))+x*Math.cos(theta)-y*Math.sin(theta),baseY+(mobile?240*(1-p):0)+x*Math.sin(theta)+y*Math.cos(theta)]);
  const triangle=(ps,dashed)=>{
   let html=`<polygon points="${ps.map(pt=>pt.join(',')).join(' ')}" fill="${dashed?'var(--diagram-ink)':'var(--diagram-gold)'}" fill-opacity=".06"/>`;
   html+=line(ps[1],ps[2],colors[1],dashed)+line(ps[0],ps[1],colors[0],dashed)+line(ps[2],ps[0],colors[2],dashed);
   return html;
  };
  const matched=p===1&&+rotation.value===0;
  svg.innerHTML='<title>Trường hợp g.c.g: một cạnh và hai góc kề</title>'+triangle(first,false)+triangle(second,true)+labels(first,matched?['A ≡ D','B ≡ E','C ≡ F']:['A','B','C'])+(matched?'':labels(second,['D','E','F']));
  lab.querySelector('.geometry-observation').textContent=matched?`Hai tam giác chồng khít: A ↔ D, B ↔ E, C ↔ F. Góc A = góc D = ${model.angleA}°. Một cạnh và hai góc kề bằng nhau xác định duy nhất một hình tam giác (g.c.g).`:`BC = EF = ${bc.toFixed(1)}, góc B = góc E = ${angleB}°, góc C = góc F = ${angleC}°. Góc thứ ba A = D = ${model.angleA}°. Xoay và chồng hai hình để kiểm chứng.`;
 };
 narrow.addEventListener('change',render);
 [bInput,bcInput,cInput,rotation,overlay].forEach(input=>input.addEventListener('input',render));
 match.addEventListener('click',()=>{rotation.value=0;overlay.value=100;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{bInput.value=50;bcInput.value=7;cInput.value=60;rotation.value=45;overlay.value=0;render();});
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
document.querySelectorAll('[data-geometry="angle-bisector"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),xoyInput=lab.querySelector('[data-angle-xoy]'),mInput=lab.querySelector('[data-dist-m]'),valXoy=lab.querySelector('[data-angle-val="xoy"]'),valM=lab.querySelector('[data-dist-val="m"]');
 const render=()=>{
  const theta=+xoyInput.value,dist=+mInput.value;
  valXoy.textContent=theta+'°';valM.textContent=dist;
  const half=theta/2,O=[230,240],lenRay=210,radX=0,X=[O[0]+lenRay*Math.cos(radX),O[1]-lenRay*Math.sin(radX)];
  const radY=theta*Math.PI/180,Y=[O[0]+lenRay*Math.cos(radY),O[1]-lenRay*Math.sin(radY)];
  const radT=half*Math.PI/180,T=[O[0]+(lenRay+30)*Math.cos(radT),O[1]-(lenRay+30)*Math.sin(radT)];
  const M=[O[0]+dist*Math.cos(radT),O[1]-dist*Math.sin(radT)],H1=[M[0],O[1]],dH=dist*Math.sin(radT),H2=[M[0]-dH*Math.sin(radY),M[1]-dH*Math.cos(radY)];
  let html=`<title>Tia phân giác Ot chia đôi góc xOy</title>`;
  html+=line(O,X,'#64748b',false)+line(O,Y,'#64748b',false)+line(O,T,'var(--diagram-coral, #d94e48)',false);
  html+=sector(O,-radT,0,'var(--diagram-ink)')+sector(O,-radY,-radT,'var(--diagram-gold)');
  html+=line(M,H1,'#94a3b8',true)+line(M,H2,'#94a3b8',true);
  html+=`<circle cx="${O[0]}" cy="${O[1]}" r="4" fill="currentColor"/><text x="${O[0]-16}" y="${O[1]+18}">O</text>`;
  html+=`<text x="${X[0]+10}" y="${X[1]+5}">x</text><text x="${Y[0]+5}" y="${Y[1]-8}">y</text><text x="${T[0]+8}" y="${T[1]-5}" fill="var(--diagram-coral, #d94e48)" font-weight="bold">t</text>`;
  html+=`<circle cx="${M[0]}" cy="${M[1]}" r="5" fill="var(--diagram-coral, #d94e48)"/><text x="${M[0]+12}" y="${M[1]-8}" font-weight="bold">M</text>`;
  html+=`<circle cx="${H1[0]}" cy="${H1[1]}" r="3" fill="#64748b"/><text x="${H1[0]}" y="${H1[1]+16}">H₁</text><circle cx="${H2[0]}" cy="${H2[1]}" r="3" fill="#64748b"/><text x="${H2[0]-14}" y="${H2[1]-8}">H₂</text>`;
  svg.innerHTML=html;
  lab.querySelector('.geometry-observation').textContent=`Góc xOy = ${theta}°. Tia phân giác Ot chia góc thành hai góc bằng nhau: góc xOt = góc tOy = ${half.toFixed(1)}°. Điểm M trên tia phân giác cách đều hai cạnh: MH₁ = MH₂ ≈ ${(dist*Math.sin(radT)).toFixed(1)} px.`;
 };
 [xoyInput,mInput].forEach(inp=>inp.addEventListener('input',render));
 lab.querySelector('[data-reset]').addEventListener('click',()=>{xoyInput.value=70;mInput.value=130;render();});
 render();
});
document.querySelectorAll('[data-geometry="euclid-parallel"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),coordM=lab.querySelector('[data-coord-m]'),slopeInput=lab.querySelector('[data-angle-slope]'),posVal=lab.querySelector('[data-pos-m]'),slopeVal=lab.querySelector('[data-slope-b]'),snapBtn=lab.querySelector('[data-snap-parallel]');
 const render=()=>{
  const ym=+coordM.value,slope=+slopeInput.value;
  posVal.textContent=ym;slopeVal.textContent=slope+'°';
  const M=[300,ym],aY=240,isParallel=slope===0;
  let html=`<title>Tiên đề Euclid về đường thẳng song song</title>`;
  html+=line([40,aY],[560,aY],'#64748b')+`<text x="50" y="${aY-10}" fill="#64748b" font-weight="bold">a</text>`;
  const rad=slope*Math.PI/180,len=260,b1=[M[0]-len*Math.cos(rad),M[1]+len*Math.sin(rad)],b2=[M[0]+len*Math.cos(rad),M[1]-len*Math.sin(rad)];
  html+=line(b1,b2,isParallel?'var(--diagram-ink, #087858)':'var(--diagram-coral, #d94e48)',!isParallel);
  html+=`<text x="${b1[0]-14}" y="${b1[1]+5}" fill="${isParallel?'var(--diagram-ink)':'var(--diagram-coral)'}" font-weight="bold">b</text>`;
  html+=`<circle cx="${M[0]}" cy="${M[1]}" r="5" fill="var(--diagram-ink, #087858)"/><text x="${M[0]}" y="${M[1]-12}" text-anchor="middle" font-weight="bold">M</text>`;
  if(isParallel){html+=line([M[0],M[1]],[M[0],aY],'#94a3b8',true)+`<text x="${M[0]+12}" y="${(M[1]+aY)/2}" fill="#64748b" font-size="13">d = ${aY-ym} px</text>`;}
  svg.innerHTML=html;
  lab.querySelector('.geometry-observation').textContent=isParallel?`Đường thẳng b song song với a (độ lệch 0°). Tiên đề Euclid: Qua điểm M nằm ngoài đường thẳng a, chỉ có DUY NHẤT một đường thẳng song song với a!`:`Đường thẳng b lệch ${slope>0?'+':''}${slope}° so với phương song song. Khi kéo dài, b chắc chắn cắt a tại một điểm. Bấm "Chỉnh song song" để thấy vị trí duy nhất song song với a.`;
 };
 [coordM,slopeInput].forEach(inp=>inp.addEventListener('input',render));
 snapBtn.addEventListener('click',()=>{slopeInput.value=0;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{coordM.value=110;slopeInput.value=15;render();});
 render();
});
document.querySelectorAll('[data-geometry="isosceles-triangle"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),hInput=lab.querySelector('[data-param="h"]'),bcInput=lab.querySelector('[data-param="bc"]'),axisBox=lab.querySelector('[data-toggle-axis]');
 const valH=lab.querySelector('[data-val="h"]'),valBc=lab.querySelector('[data-val="bc"]');
 const render=()=>{
  const h=+hInput.value,bc=+bcInput.value,showAxis=axisBox.checked;
  valH.textContent=h.toFixed(1);valBc.textContent=bc.toFixed(1);
  const scale=24,H=[300,270],A=[H[0],H[1]-h*scale],B=[H[0]-(bc/2)*scale,H[1]],C=[H[0]+(bc/2)*scale,H[1]];
  const side=Math.hypot(h*scale,(bc/2)*scale)/scale;
  const radB=Math.atan2(h,bc/2),degB=radB*180/Math.PI,degA=180-2*degB;
  const isEquil=Math.abs(degB-60)<1.5,isRight=Math.abs(degA-90)<1.5;
  let html=`<title>Tam giác cân ABC có AB = AC</title>`;
  html+=`<polygon points="${A.join(',')} ${B.join(',')} ${C.join(',')}" fill="var(--diagram-wash, rgba(8,120,88,0.06))" stroke="var(--diagram-ink, #087858)" stroke-width="2.5"/>`;
  const midAB=[(A[0]+B[0])/2,(A[1]+B[1])/2],midAC=[(A[0]+C[0])/2,(A[1]+C[1])/2];
  html+=line([midAB[0]-6,midAB[1]-4],[midAB[0]+6,midAB[1]+4],'var(--diagram-coral, #d94e48)',false);
  html+=line([midAC[0]-6,midAC[1]+4],[midAC[0]+6,midAC[1]-4],'var(--diagram-coral, #d94e48)',false);
  html+=sector(B,-radB,0,'var(--diagram-gold, #c79536)');
  html+=sector(C,Math.PI,Math.PI+radB,'var(--diagram-gold, #c79536)');
  if(showAxis){
   html+=line(A,H,'#64748b',true);
   html+=`<rect x="${H[0]-12}" y="${H[1]-12}" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>`;
   html+=`<circle cx="${H[0]}" cy="${H[1]}" r="3" fill="#64748b"/><text x="${H[0]}" y="${H[1]+18}" text-anchor="middle" font-size="13">H</text>`;
  }
  html+=labels([A,B,C],['A','B','C']);
  html+=`<text x="${H[0]+(bc/4)*scale}" y="${H[1]+18}" text-anchor="middle" fill="#64748b" font-size="12">${(bc/2).toFixed(1)}</text>`;
  html+=`<text x="${H[0]-(bc/4)*scale}" y="${H[1]+18}" text-anchor="middle" fill="#64748b" font-size="12">${(bc/2).toFixed(1)}</text>`;
  svg.innerHTML=html;
  lab.querySelector('.geometry-observation').textContent=`Tam giác ABC cân tại A: Cạnh bên AB = AC = ${side.toFixed(2)}. Hai góc ở đáy: B = C = ${degB.toFixed(1)}°. Góc ở đỉnh A = ${degA.toFixed(1)}°. ${isEquil?'✦ TAM GIÁC ĐỀU: Ba cạnh bằng nhau, ba góc đều bằng 60°.':isRight?'✦ TAM GIÁC VUÔNG CÂN: Góc A = 90°, hai góc đáy bằng 45°.':''}`;
 };
 [hInput,bcInput].forEach(inp=>inp.addEventListener('input',render));
 axisBox.addEventListener('change',render);
 lab.querySelector('[data-equilateral]').addEventListener('click',()=>{bcInput.value=7;hInput.value=(7/2*Math.sqrt(3)).toFixed(1);render();});
 lab.querySelector('[data-right-isosceles]').addEventListener('click',()=>{bcInput.value=8;hInput.value=4;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{hInput.value=6;bcInput.value=7;axisBox.checked=true;render();});
 render();
});
document.querySelectorAll('[data-geometry="perpendicular-bisector"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),posMInput=lab.querySelector('[data-pos-m]'),lenAbInput=lab.querySelector('[data-len-ab]');
 const posMVal=lab.querySelector('[data-pos-val="m"]'),lenAbVal=lab.querySelector('[data-val="ab"]');
 const render=()=>{
  const ym=+posMInput.value,len=+lenAbInput.value;
  posMVal.textContent=ym;lenAbVal.textContent=len;
  const I=[300,220],A=[300-len/2,220],B=[300+len/2,220],M=[300,ym];
  const dist=Math.hypot(M[0]-A[0],M[1]-A[1]);
  let html=`<title>Đường trung trực d của đoạn thẳng AB</title>`;
  html+=line(A,B,'var(--diagram-ink, #087858)',false);
  html+=line([300,30],[300,310],'#3b82f6',false);
  html+=`<text x="312" y="45" fill="#3b82f6" font-weight="bold">d</text>`;
  html+=`<rect x="300" y="206" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5"/>`;
  const midIA=[(A[0]+300)/2,220],midIB=[(B[0]+300)/2,220];
  html+=line([midIA[0],214],[midIA[0],226],'#64748b');
  html+=line([midIB[0],214],[midIB[0],226],'#64748b');
  html+=line(M,A,'var(--diagram-coral, #d94e48)',true);
  html+=line(M,B,'var(--diagram-coral, #d94e48)',true);
  html+=`<circle cx="${A[0]}" cy="${A[1]}" r="4" fill="currentColor"/><text x="${A[0]-16}" y="${A[1]+18}">A</text>`;
  html+=`<circle cx="${B[0]}" cy="${B[1]}" r="4" fill="currentColor"/><text x="${B[0]+16}" y="${B[1]+18}">B</text>`;
  html+=`<circle cx="${I[0]}" cy="${I[1]}" r="3.5" fill="#64748b"/><text x="${I[0]+12}" y="${I[1]+18}">I</text>`;
  html+=`<circle cx="${M[0]}" cy="${M[1]}" r="5.5" fill="var(--diagram-coral, #d94e48)"/><text x="${M[0]+14}" y="${M[1]-6}" font-weight="bold" fill="var(--diagram-coral, #d94e48)">M</text>`;
  const midMA=[(M[0]+A[0])/2,(M[1]+A[1])/2],midMB=[(M[0]+B[0])/2,(M[1]+B[1])/2];
  html+=`<text x="${midMA[0]-12}" y="${midMA[1]-8}" fill="var(--diagram-coral, #d94e48)" font-size="12">${dist.toFixed(1)}</text>`;
  html+=`<text x="${midMB[0]+12}" y="${midMB[1]-8}" fill="var(--diagram-coral, #d94e48)" font-size="12">${dist.toFixed(1)}</text>`;
  svg.innerHTML=html;
  lab.querySelector('.geometry-observation').textContent=`Điểm M nằm trên đường trung trực d của đoạn thẳng AB: MA = MB = ${dist.toFixed(1)} px. Mọi điểm nằm trên đường trung trực của đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó!`;
 };
 [posMInput,lenAbInput].forEach(inp=>inp.addEventListener('input',render));
 lab.querySelector('[data-midpoint]').addEventListener('click',()=>{posMInput.value=220;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{posMInput.value=100;lenAbInput.value=260;render();});
 render();
});
// The reusable geometry scene drives a draggable triangle and its measured angles.
document.querySelectorAll('[data-geometry="triangle-angles"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),x=lab.querySelector('[data-coordinate="x"]'),y=lab.querySelector('[data-coordinate="y"]'),colors=['#bf645a','#13839a','#c79536'];let step=-1;
 const scene=new GeometryScene(svg,{onChange:points=>{
  const A=[points.A.x,points.A.y],B=[100,280],C=[470,280],angles=[measureAngle(A,C,B).degrees,measureAngle(B,A,C).degrees,measureAngle(C,B,A).degrees];
  lab.querySelectorAll('[data-angle]').forEach((out,i)=>out.textContent=angles[i].toFixed(1)+'°');
  const max=Math.max(...angles),kind=Math.abs(max-90)<.1?'vuông':max>90?'tù':'nhọn';
  lab.querySelector('.geometry-observation').textContent=`Tam giác ${kind}. Mỗi góc có thể thay đổi, nhưng A + B + C luôn bằng 180° (số đo hiển thị được làm tròn).`;
  lab.querySelector('[data-proof-text]').textContent=['Bước 1/4 · Qua A, kẻ đường thẳng xy song song với BC.','Bước 2/4 · Góc xanh ngọc tại A bằng góc B: hai góc so le trong.','Bước 3/4 · Góc vàng tại A bằng góc C: hai góc so le trong.','Bước 4/4 · Ba góc san hô, xanh ngọc và vàng tại A ghép thành góc bẹt. Vì vậy A + B + C = 180°.'][Math.max(step,0)];
  lab.querySelector('[data-next]').disabled=step===3;
 }});
 scene.point('A',+x.value,+y.value,{label:'A',color:colors[0],radius:7,minX:100,maxX:470,minY:65,maxY:220,step:5})
  .point('B',100,280,{label:'B',color:colors[1],draggable:false,radius:3})
  .point('C',470,280,{label:'C',color:colors[2],draggable:false,radius:3})
  .point('X',560,95,{label:'',draggable:false,radius:0})
  .point('Y',35,95,{label:'',draggable:false,radius:0})
  .polygon('triangle',['A','B','C'],{fill:'#2563eb',fillOpacity:.035})
  .angle('angle-a','A','C','B',{radius:32,color:colors[0]})
  .angle('angle-b','B','C','A',{radius:32,color:colors[1]})
  .angle('angle-c','C','A','B',{radius:32,color:colors[2]})
  .segment('proof-line','Y','X',{stroke:'#64748b',strokeWidth:2,dash:'7 5',visible:false})
  .text('proof-x','Y','x',{dx:5,dy:-12,color:'#64748b',visible:false})
  .text('proof-y','X','y',{dx:-5,dy:-12,color:'#64748b',visible:false})
  .angle('proof-b','A','Y','B',{radius:44,color:colors[1],visible:false})
  .angle('proof-c','A','C','X',{radius:44,color:colors[2],visible:false})
  .render();
 const sync=()=>scene.setPoints({A:[+x.value,+y.value],X:[560,+y.value],Y:[35,+y.value]});
 [x,y].forEach(input=>input.addEventListener('input',sync));
 lab.querySelector('[data-proof]').addEventListener('click',event=>{step=step<0?0:-1;event.currentTarget.setAttribute('aria-pressed',String(step>=0));lab.querySelector('.geometry-proof').hidden=step<0;scene.transaction(current=>{for(const id of ['proof-line','proof-x','proof-y','proof-b','proof-c'])current.setVisible(id,step>=0,{render:false});});});
 lab.querySelector('[data-next]').addEventListener('click',()=>{step=Math.min(3,step+1);scene.render();});
 lab.querySelectorAll('[data-shape]').forEach(button=>button.addEventListener('click',()=>{const presets={acute:[280,95],right:[100,95],obtuse:[280,220]};[x.value,y.value]=presets[button.dataset.shape];sync();}));
 lab.querySelector('[data-reset]').addEventListener('click',()=>{x.value=280;y.value=95;step=-1;lab.querySelector('.geometry-proof').hidden=true;lab.querySelector('[data-proof]').setAttribute('aria-pressed','false');scene.transaction(current=>{for(const id of ['proof-line','proof-x','proof-y','proof-b','proof-c'])current.setVisible(id,false,{render:false});current.setPoints({A:[+x.value,+y.value],X:[560,+y.value],Y:[35,+y.value]},{render:false});});});
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
