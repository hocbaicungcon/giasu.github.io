import {createGameResult} from './game-result.js';
import {sound} from './puzzle-audio.js';
const svg=document.querySelector('#tangram-board');
const scene=document.querySelector('#tangram-scene');
const status=document.querySelector('#tangram-status');
const NS='http://www.w3.org/2000/svg';
const shapes=[
 '0,-56 56,56 -56,56','0,-56 56,56 -56,56',
 '0,-40 40,40 -40,40','0,-29 29,29 -29,29','0,-29 29,29 -29,29',
 '-29,-29 29,-29 29,29 -29,29','-40,-22 17,-22 40,22 -17,22'
];
const colors=['#d96f5f','#e3a259','#768faf','#8baa70','#bb85a3','#d1b465','#6bafa0'];
// Each layout uses the same seven classic Tangram pieces in a new composition.
const levels=[
 [[290,105,315],[385,105,45],[338,205,0],[230,260,270],[445,260,90],[338,292,0],[385,235,0]],
 [[275,175,225],[365,175,135],[320,260,45],[210,260,0],[435,260,0],[350,325,45],[440,325,0]],
 [[315,125,0],[315,245,180],[315,330,45],[215,315,270],[415,315,90],[315,390,45],[385,365,90]],
 [[280,110,45],[390,110,315],[335,205,0],[230,280,135],[440,280,225],[335,310,45],[390,370,0]],
 [[300,155,45],[395,155,315],[350,250,90],[220,270,0],[470,270,180],[370,335,45],[450,335,0]]
];
const trayX=[55,140,225,310,395,480,565];
const result=createGameResult(scene,{restart:reset});
let level=0,pieces=[],selected=-1,drag=null;
const make=(tag,attrs={})=>{const node=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))node.setAttribute(k,v);return node;};
function point(event){const p=svg.createSVGPoint();p.x=event.clientX;p.y=event.clientY;return p.matrixTransform(svg.getScreenCTM().inverse());}
function render(){
 svg.replaceChildren();
 const bg=make('rect',{x:0,y:0,width:620,height:520,class:'tangram-bg'});
 const divider=make('path',{d:'M20 385H600',class:'tangram-divider'});
 svg.append(bg,divider);
 levels[level].forEach(([x,y,a],i)=>{const g=make('g',{transform:`translate(${x} ${y}) rotate(${a})`,class:'tangram-target'});g.append(make('polygon',{points:shapes[i],stroke:colors[i]}));svg.append(g);});
 pieces.forEach((piece,i)=>{const g=make('g',{transform:`translate(${piece.x} ${piece.y}) rotate(${piece.a})`,class:'tangram-piece'+(selected===i?' selected':'')+(piece.locked?' locked':''),'data-piece':i,tabindex:piece.locked?-1:0,role:'button','aria-label':`Mảnh ghép ${i+1}${piece.locked?', đã đặt đúng':''}`});g.append(make('polygon',{points:shapes[i],fill:colors[i]}));svg.append(g);});
 document.querySelector('#tangram-left').disabled=selected<0||pieces[selected].locked;
 document.querySelector('#tangram-right').disabled=selected<0||pieces[selected].locked;
}
function snap(i){const p=pieces[i],t=levels[level][i];const distance=Math.hypot(p.x-t[0],p.y-t[1]);const angle=((p.a-t[2])%360+360)%360;if(distance<32&&(angle<20||angle>340)){p.x=t[0];p.y=t[1];p.a=t[2];p.locked=true;selected=-1;sound('merge');status.textContent=`Đúng rồi! Đã ghép ${pieces.filter(q=>q.locked).length}/7 mảnh.`;if(pieces.every(q=>q.locked)){sound('win');result.show({won:true,description:'Bạn đã hoàn thành mẫu ghép Tangram!'});}return true;}return false;}
function reset(){result.clear();pieces=trayX.map((x)=>({x,y:450,a:0,locked:false}));selected=-1;drag=null;status.textContent='Chọn một mảnh, kéo vào bóng cùng màu rồi xoay cho khớp.';render();}
function rotate(delta){if(selected<0||pieces[selected].locked)return;pieces[selected].a=(pieces[selected].a+delta+360)%360;snap(selected);render();}
svg.addEventListener('pointerdown',event=>{const el=event.target.closest('[data-piece]');if(!el)return;const i=Number(el.dataset.piece);if(pieces[i].locked)return;selected=i;const pos=point(event);drag={i,dx:pos.x-pieces[i].x,dy:pos.y-pieces[i].y};svg.setPointerCapture(event.pointerId);render();});
svg.addEventListener('pointermove',event=>{if(!drag)return;const p=point(event),piece=pieces[drag.i];piece.x=Math.max(45,Math.min(575,p.x-drag.dx));piece.y=Math.max(50,Math.min(470,p.y-drag.dy));render();});
svg.addEventListener('pointerup',event=>{if(!drag)return;const i=drag.i;drag=null;if(svg.hasPointerCapture(event.pointerId))svg.releasePointerCapture(event.pointerId);snap(i);render();});
svg.addEventListener('pointercancel',()=>{drag=null;render();});
svg.addEventListener('keydown',event=>{const el=event.target.closest('[data-piece]');if(!el)return;const i=Number(el.dataset.piece);if(pieces[i].locked)return;selected=i;const offsets={ArrowLeft:[-8,0],ArrowRight:[8,0],ArrowUp:[0,-8],ArrowDown:[0,8]};if(offsets[event.key]){event.preventDefault();pieces[i].x+=offsets[event.key][0];pieces[i].y+=offsets[event.key][1];snap(i);render();svg.querySelector(`[data-piece="${i}"]`)?.focus();}else if(event.key.toLowerCase()==='r'){event.preventDefault();rotate(event.shiftKey?-45:45);}});
document.querySelector('#tangram-left').addEventListener('click',()=>rotate(-45));
document.querySelector('#tangram-right').addEventListener('click',()=>rotate(45));
document.querySelector('#tangram-reset').addEventListener('click',reset);
document.querySelector('#tangram-level').addEventListener('change',event=>{level=Number(event.target.value);reset();});
reset();
