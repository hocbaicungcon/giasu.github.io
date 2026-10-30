import {GeometryScene,measureAngle} from './geometry-interaction.js?v=81974b4a2997';
for(const root of document.querySelectorAll('[data-exploration="triangle-angles"]')){
 const stage=root.querySelector('[data-exploration-stage]');
 stage.innerHTML='<svg viewBox="0 0 560 320" class="triangle-angle-canvas" role="img" aria-label="Tam giác ABC; kéo đỉnh A để thay đổi hình"><title>Tổng ba góc trong tam giác</title></svg><div class="exploration-controls"><label>Vị trí ngang của A<input type="range" min="40" max="520" value="230" data-coordinate="x"></label><label>Độ cao của A<input type="range" min="40" max="230" value="80" data-coordinate="y"></label><label>Dự đoán tổng ba góc (độ)<input type="number" min="0" max="540" data-prediction></label><button type="button" data-check>Kiểm tra</button><button type="button" data-reset>Đặt lại</button></div><p data-feedback role="status"></p>';
 const svg=stage.querySelector('svg'),x=stage.querySelector('[data-coordinate="x"]'),y=stage.querySelector('[data-coordinate="y"]'),feedback=stage.querySelector('[data-feedback]'),prediction=stage.querySelector('[data-prediction]');let revealed=false,anglesNow=[];
 const scene=new GeometryScene(svg,{onChange:points=>{
  const A=[points.A.x,points.A.y],B=[80,270],C=[480,270],angles=[measureAngle(A,C,B).degrees,measureAngle(B,A,C).degrees,measureAngle(C,B,A).degrees];anglesNow=angles;
  x.value=points.A.x;y.value=points.A.y;
  feedback.textContent=revealed?`Tổng ba góc bằng 180°. Số đo hiện tại: ${angles.map(a=>a.toFixed(1)+'°').join(' + ')}.`:'';
 }});
 scene.point('A',230,80,{label:'A',color:'var(--diagram-coral)',minX:40,maxX:520,minY:40,maxY:230,step:5})
  .point('B',80,270,{label:'B',color:'var(--diagram-ink)',draggable:false,radius:3})
  .point('C',480,270,{label:'C',color:'var(--diagram-gold)',draggable:false,radius:3})
  .polygon('triangle',['A','B','C'],{fill:'var(--diagram-wash)',stroke:'var(--diagram-ink)'})
  .angle('angle-a','A','C','B',{color:'var(--diagram-coral)',label:d=>d.toFixed(1)+'°'})
  .angle('angle-b','B','C','A',{color:'var(--diagram-ink)',label:d=>d.toFixed(1)+'°'})
  .angle('angle-c','C','A','B',{color:'var(--diagram-gold)',label:d=>d.toFixed(1)+'°'})
  .render();
 const sync=()=>{scene.setPoint('A',+x.value,+y.value);};
 [x,y].forEach(input=>input.addEventListener('input',sync));
 stage.querySelector('[data-check]').addEventListener('click',()=>{if(prediction.value===''){feedback.textContent='Em hãy nhập dự đoán trước.';return;}revealed=true;const sum=anglesNow.reduce((total,angle)=>total+angle,0);feedback.textContent=(+prediction.value===180?'Chính xác! ':'Em hãy quan sát các số đo trên hình. ')+`Tổng hiện tại là ${sum.toFixed(1)}°.`;});
 stage.querySelector('[data-reset]').addEventListener('click',()=>{x.value=230;y.value=80;prediction.value='';revealed=false;sync();feedback.textContent='';});
}
