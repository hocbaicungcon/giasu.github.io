import {triangleAngles} from './triangle-angles-model.js';
document.querySelectorAll('[data-exploration="triangle-angles"]').forEach(root=>{
 const stage=root.querySelector('[data-exploration-stage]');
 stage.innerHTML='<svg viewBox="0 0 560 320" class="triangle-angle-canvas" role="img" aria-label="Tam giác ABC, kéo đỉnh A để thay đổi hình dạng"><title>Tổng ba góc trong tam giác</title><polygon fill="var(--diagram-wash)" stroke="var(--diagram-ink)" stroke-width="3"/><g data-labels fill="var(--diagram-label)"></g><circle data-vertex r="12" fill="var(--diagram-coral)"/></svg><div class="exploration-controls"><label>Vị trí ngang của A<input type="range" min="40" max="520" value="230" data-coordinate="x"></label><label>Độ cao của A<input type="range" min="40" max="230" value="80" data-coordinate="y"></label><label>Dự đoán tổng ba góc (độ)<input type="number" min="0" max="540" data-prediction></label><button type="button" data-check>Kiểm tra</button><button type="button" data-reset>Đặt lại</button></div><p data-feedback role="status"></p>';
 const svg=stage.querySelector('svg'),x=stage.querySelector('[data-coordinate="x"]'),y=stage.querySelector('[data-coordinate="y"]'),feedback=stage.querySelector('[data-feedback]'),prediction=stage.querySelector('[data-prediction]');let revealed=false;
 const render=()=>{
  const X=+x.value,Y=+y.value,angles=triangleAngles(X,Y);
  svg.querySelector('polygon').setAttribute('points',`${X},${Y} 80,270 480,270`);
  const vertex=svg.querySelector('[data-vertex]');vertex.setAttribute('cx',X);vertex.setAttribute('cy',Y);
  svg.querySelector('[data-labels]').innerHTML=[[X,Y-18,'A',angles[0]],[80,300,'B',angles[1]],[480,300,'C',angles[2]]].map(([a,b,n,v])=>`<text x="${a}" y="${b}" text-anchor="middle">${n}: ${v.toFixed(1)}°</text>`).join('');
  if(revealed)feedback.textContent=`Tổng ba góc luôn bằng 180°. Các số đo hiển thị được làm tròn đến 0,1°.`;
 };
 [x,y].forEach(input=>input.addEventListener('input',render));
 let dragging=false;
 svg.querySelector('[data-vertex]').addEventListener('pointerdown',event=>{dragging=true;svg.setPointerCapture(event.pointerId);event.preventDefault();});
 svg.addEventListener('pointermove',event=>{if(!dragging)return;const matrix=svg.getScreenCTM();if(!matrix)return;const point=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());x.value=Math.max(40,Math.min(520,point.x));y.value=Math.max(40,Math.min(230,point.y));render();});
 for(const name of ['pointerup','pointercancel','lostpointercapture'])svg.addEventListener(name,()=>dragging=false);
 stage.querySelector('[data-check]').addEventListener('click',()=>{if(prediction.value===''){feedback.textContent='Em hãy nhập dự đoán trước.';return;}revealed=true;render();feedback.textContent=(+prediction.value===180?'Chính xác! ':'Em thử quan sát lại: ')+feedback.textContent;});
 stage.querySelector('[data-reset]').addEventListener('click',()=>{x.value=230;y.value=80;prediction.value='';revealed=false;feedback.textContent='';render();});render();
});
