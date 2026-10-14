import {rightTriangle} from './right-triangles-model.js';
document.querySelectorAll('[data-geometry="right-triangles"]').forEach(lab=>{
 const svg=lab.querySelector('svg'),a=lab.querySelector('[data-leg="a"]'),b=lab.querySelector('[data-leg="b"]'),overlay=lab.querySelector('[data-overlay]'),criterion=lab.querySelector('[data-criterion]'),status=lab.querySelector('[role="status"]'),narrow=matchMedia('(max-width:620px)');
 let origin=[65,260],drag=null;
 const scale=26;
 function render(){
  const mobile=narrow.matches,model=rightTriangle(+a.value,+b.value),p=+overlay.value/100;
  origin=mobile?[65,225]:[65,260];svg.setAttribute('viewBox',mobile?'0 0 360 560':'0 0 680 340');
  const offset=mobile?[0,260*(1-p)]:[350*(1-p),0];
  const selected={legs:[0,2],'leg-angle':[0],'hyp-angle':[1],'hyp-leg':[1,2]}[criterion.value];
  const triangle=(offset,names,second)=>{
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
   html+=(second&&p===1?'':ps.map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="5" fill="var(--diagram-ink)"/><text x="${x+(i===1?16:-16)}" y="${y+(i===2?-12:22)}" text-anchor="middle">${names[i]}</text>${!second&&i?`<circle data-drag="${i===1?'a':'b'}" cx="${x}" cy="${y}" r="18" fill="transparent" style="cursor:grab"/>`:''}`).join(''));
   return html;
  };
  svg.innerHTML='<title>Kéo B hoặc C; góc A và D luôn bằng 90 độ</title>'+triangle([0,0],p===1?['A ≡ D','B ≡ E','C ≡ F']:'ABC',false)+triangle(offset,'DEF',true);
  svg.querySelectorAll('[data-drag]').forEach(handle=>svg.append(handle));
  lab.querySelector('[data-leg-value="a"]').textContent=(+a.value).toLocaleString('vi');lab.querySelector('[data-leg-value="b"]').textContent=(+b.value).toLocaleString('vi');
  status.textContent=`Góc A = góc D = 90°. Góc B = góc E ≈ ${model.angleB.toFixed(1)}°. Cạnh huyền BC = EF ≈ ${model.hypotenuse.toFixed(2)}. ${p===1?'Hai hình chồng khít: ABC = DEF.':'Thử đổi cạnh rồi chồng khít hai hình.'}`;
 }
 lab.querySelectorAll('input,select').forEach(input=>input.addEventListener('input',render));
 lab.querySelector('[data-match]').addEventListener('click',()=>{overlay.value=100;render();});
 lab.querySelector('[data-reset]').addEventListener('click',()=>{a.value=6;b.value=4;overlay.value=0;criterion.value='legs';render();});
 svg.addEventListener('pointerdown',e=>{const handle=e.target.closest('[data-drag]');if(!handle)return;drag=handle.dataset.drag;svg.setPointerCapture(e.pointerId);e.preventDefault();});
 svg.addEventListener('pointermove',e=>{if(!drag)return;const matrix=svg.getScreenCTM();if(!matrix)return;const point=new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());const value=drag==='a'?(point.x-origin[0])/scale:(origin[1]-point.y)/scale;(drag==='a'?a:b).value=Math.max(2,Math.min(8,Math.round(value*4)/4));render();});
 ['pointerup','pointercancel','lostpointercapture'].forEach(event=>svg.addEventListener(event,()=>{drag=null;}));
 narrow.addEventListener('change',render);render();
});
