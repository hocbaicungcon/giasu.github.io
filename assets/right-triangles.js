import {rightTriangle} from './right-triangles-model.js?v=8cf16fbfba6c';
import {GeometryScene} from './geometry-interaction.js?v=8cf16fbfba6c';
document.querySelectorAll('[data-geometry="right-triangles"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),a=lab.querySelector('[data-leg="a"]'),b=lab.querySelector('[data-leg="b"]'),overlay=lab.querySelector('[data-overlay]'),criterion=lab.querySelector('[data-criterion]'),status=lab.querySelector('[role="status"]'),narrow=matchMedia('(max-width:620px)');
 let origin=[65,260];
 const scale=26;
 const scene=new GeometryScene(svg,{onChange:points=>{
  if(!points.B||!points.C||!lab.dataset.dragReady)return;
  const nextA=(points.B.x-origin[0])/scale,nextB=(origin[1]-points.C.y)/scale;
  const changed=Math.abs(+a.value-nextA)>.01||Math.abs(+b.value-nextB)>.01;
  if(Math.abs(+a.value-nextA)>.01)a.value=Math.max(2,Math.min(8,Math.round(nextA*4)/4));
  if(Math.abs(+b.value-nextB)>.01)b.value=Math.max(2,Math.min(8,Math.round(nextB*4)/4));
  if(changed)render();
 }});
 function render(){
  const mobile=narrow.matches,model=rightTriangle(+a.value,+b.value),p=+overlay.value/100;
  origin=mobile?[65,225]:[65,260];svg.setAttribute('viewBox',mobile?'0 0 360 560':'0 0 680 340');
  const offset=mobile?[0,260*(1-p)]:[350*(1-p),0];
  const selected={legs:[0,2],'leg-angle':[0],'hyp-angle':[1],'hyp-leg':[1,2]}[criterion.value];
  const triangle=(offset,second)=>{
   const ps=model.points.map(([x,y])=>[origin[0]+offset[0]+x*scale,origin[1]+offset[1]+y*scale]);
   let html='';
   [[0,1],[1,2],[2,0]].forEach(([i,j],k)=>{
    const color=selected.includes(k)?'var(--diagram-ink)':'var(--diagram-outline)';
    html+=`<line x1="${ps[i][0]}" y1="${ps[i][1]}" x2="${ps[j][0]}" y2="${ps[j][1]}" stroke="${color}" stroke-width="${selected.includes(k)?4:2}" ${second?'stroke-dasharray="6 4"':''}/>`;
   });
   const [x,y]=ps[0];html+=`<path d="M${x+14} ${y}v-14h-14" fill="none" stroke="var(--diagram-gold)" stroke-width="2"/>`;
   if(criterion.value.includes('angle')){
    const [bx,by]=ps[1],r=24,rad=model.angleB*Math.PI/180;
    html+=`<path d="M${bx-r} ${by} A${r} ${r} 0 0 1 ${bx-r*Math.cos(rad)} ${by-r*Math.sin(rad)}" fill="none" stroke="var(--diagram-coral)" stroke-width="3"/>`;
   }
   return html;
  };
  svg.innerHTML='<title>Kéo B hoặc C; góc A và D luôn bằng 90 độ</title>'+triangle([0,0],false)+triangle(offset,true);
  const leftB=[origin[0]+model.points[1][0]*scale,origin[1]+model.points[1][1]*scale],leftC=[origin[0]+model.points[2][0]*scale,origin[1]+model.points[2][1]*scale],rightOffset=origin.map((v,i)=>v+offset[i]);
  const rightB=[rightOffset[0]+model.points[1][0]*scale,rightOffset[1]+model.points[1][1]*scale],rightC=[rightOffset[0]+model.points[2][0]*scale,rightOffset[1]+model.points[2][1]*scale];
  scene.point('A',origin[0],origin[1],{label:'A',color:'var(--diagram-ink)',draggable:false,radius:5})
   .point('B',...leftB,{label:p===1?'B ≡ E':'B',color:'var(--diagram-ink)',radius:5,minX:origin[0]+2*scale,maxX:origin[0]+8*scale,minY:origin[1],maxY:origin[1],step:scale/4,constrain:([x])=>[x,origin[1]]})
   .point('C',...leftC,{label:p===1?'C ≡ F':'C',color:'var(--diagram-ink)',radius:5,minX:origin[0],maxX:origin[0],minY:origin[1]-8*scale,maxY:origin[1]-2*scale,step:scale/4,constrain:([,y])=>[origin[0],y]})
   .point('D',...rightOffset,{label:'D',color:'var(--diagram-ink)',draggable:false,radius:5})
   .point('E',...rightB,{label:'E',color:'var(--diagram-ink)',draggable:false,radius:5})
   .point('F',...rightC,{label:'F',color:'var(--diagram-ink)',draggable:false,radius:5})
   .polygon('triangle-left',['A','B','C'],{fill:'var(--diagram-wash)',fillOpacity:.05})
   .polygon('triangle-right',['D','E','F'],{fill:'var(--diagram-wash)',fillOpacity:.025,dash:'6 4'});
  lab.dataset.dragReady='true';
  if(!svg.contains(scene.root))svg.append(scene.root);
  scene.render();
  lab.querySelector('[data-leg-value="a"]').textContent=(+a.value).toLocaleString('vi');lab.querySelector('[data-leg-value="b"]').textContent=(+b.value).toLocaleString('vi');
  status.textContent=`Góc A = góc D = 90°. Góc B = góc E ≈ ${model.angleB.toFixed(1)}°. Cạnh huyền BC = EF ≈ ${model.hypotenuse.toFixed(2)}. ${p===1?'Hai hình chồng khít: ABC = DEF.':'Thử đổi cạnh rồi chồng khít hai hình.'}`;
 }
 lab.querySelectorAll('input,select').forEach(input=>input.addEventListener('input',render));
 lab.querySelector('[data-match]').addEventListener('click',()=>{overlay.value=100;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{a.value=6;b.value=4;overlay.value=0;criterion.value='legs';render();});
 // GeometryScene handles point dragging; slider input rebuilds the linked triangle.
 narrow.addEventListener('change',render);render();
});
