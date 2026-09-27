import {levels} from './tangram-levels.js';
import {createGameResult} from './game-result.js';
import {sound} from './puzzle-audio.js';
const svg=document.querySelector('#tangram-board');
const scene=document.querySelector('#tangram-scene');
const status=document.querySelector('#tangram-status');
const NS='http://www.w3.org/2000/svg';
// These seven polygons exactly partition a 200 × 200 square (no gaps or overlaps).
const source=[
 [[0,0],[100,100],[0,200]],[[0,0],[200,0],[100,100]],
 [[50,150],[100,100],[150,150]],[[200,100],[150,50],[200,0]],
 [[200,100],[200,200],[100,200]],
 [[100,100],[150,50],[200,100],[150,150]],
 [[0,200],[50,150],[150,150],[100,200]]
];
const colors=['#d97866','#e8a95e','#89a56d','#b890a8','#7597b4','#ddc16f','#75b5a2'];
const centers=source.map(poly=>[poly.reduce((n,p)=>n+p[0],0)/poly.length,poly.reduce((n,p)=>n+p[1],0)/poly.length]);
const local=source.map((poly,i)=>poly.map(([x,y])=>[x-centers[i][0],y-centers[i][1]]));
const groups=[[0,1],[0,1],[2,3],[2,3],[4],[5],[6]];
const result=createGameResult(scene,{restart:reset,next:()=>{if(level<levels.length-1){level++;hint=false;reset();}}});
const make=(tag,attrs={})=>{const node=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))node.setAttribute(k,v);return node;};
const pointsString=points=>points.map(([x,y])=>`${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
const shape=(i,x,y,a,flip,scale)=>{const r=a*Math.PI/180,c=Math.cos(r),s=Math.sin(r);return local[i].map(([px,py])=>{const u=flip?-px:px;return [x+scale*(u*c-py*s),y+scale*(u*s+py*c)];});};
const center=points=>[points.reduce((n,p)=>n+p[0],0)/points.length,points.reduce((n,p)=>n+p[1],0)/points.length];
let level=0,targets=[],targetOutline=[],pieces=[],selected=-1,drag=null,hint=false,pieceScale=1;
function point(event){const p=svg.createSVGPoint();p.x=event.clientX;p.y=event.clientY;return p.matrixTransform(svg.getScreenCTM().inverse());}
function setupTargets(){
 const raw=levels[level].poses.map(([x,y,a,flip],i)=>shape(i,x,y,a,flip,1));
 const xs=raw.flat().map(p=>p[0]),ys=raw.flat().map(p=>p[1]);
 const box=[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)];
 pieceScale=Math.min(1.22,390/(box[2]-box[0]),285/(box[3]-box[1]));
 const mx=(box[0]+box[2])/2,my=(box[1]+box[3])/2;
 targetOutline=levels[level].outline.map(([x,y])=>[350+(x-mx)*pieceScale,235+(y-my)*pieceScale]);
 targets=levels[level].poses.map(([x,y,a,flip])=>[350+(x-mx)*pieceScale,235+(y-my)*pieceScale,a,flip]);
}
function matched(piece,targetIndex){
 const target=targets[targetIndex],a=shape(piece.type,target[0],target[1],piece.a,piece.flip,pieceScale),b=shape(targetIndex,target[0],target[1],target[2],target[3],pieceScale);
 return a.every(([x,y])=>b.some(([u,v])=>Math.hypot(x-u,y-v)<pieceScale*9));
}
function render(){
 svg.replaceChildren(make('rect',{width:620,height:560,class:'tangram-bg'}),make('path',{d:'M20 415H600',class:'tangram-divider'}));
 // A small assembled square shows where the seven pieces originally come from.
 source.forEach((poly,i)=>svg.append(make('polygon',{points:pointsString(poly.map(([x,y])=>[30+x*.38,115+y*.38])),fill:colors[i],class:'tangram-origin-piece'})));
 const caption=make('text',{x:68,y:218,'text-anchor':'middle',class:'tangram-origin-caption'});caption.textContent='HÌNH VUÔNG GỐC';svg.append(caption);
 svg.append(make('polygon',{points:pointsString(targetOutline),class:'tangram-silhouette'}));
 if(hint)targets.forEach((t,i)=>svg.append(make('polygon',{points:pointsString(shape(i,t[0],t[1],t[2],t[3],pieceScale)),class:'tangram-seam-guide'})));
 const drawPiece=i=>{const p=pieces[i],polygon=make('polygon',{points:pointsString(shape(i,p.x,p.y,p.a,p.flip,pieceScale)),fill:colors[i]});const g=make('g',{class:'tangram-piece'+(selected===i?' selected':'')+(p.lockedTarget>=0?' locked':''),'data-piece':i,tabindex:p.lockedTarget>=0?-1:0,role:'button','aria-label':`Mảnh ghép ${i+1}${p.lockedTarget>=0?', đã đặt đúng':''}`});g.append(polygon);svg.append(g);};
 pieces.forEach((_,i)=>{if(i!==selected)drawPiece(i);});if(selected>=0)drawPiece(selected);
 for(const id of ['tangram-left','tangram-right','tangram-flip'])document.querySelector('#'+id).disabled=selected<0||pieces[selected].lockedTarget>=0;
 document.querySelector('#tangram-prev').disabled=level===0;document.querySelector('#tangram-next').disabled=level===levels.length-1;
 document.querySelector('#tangram-level-label').textContent=`${level+1}/${levels.length} · ${levels[level].name}`;
 document.querySelector('#tangram-hint').setAttribute('aria-pressed',String(hint));
 document.querySelector('#tangram-hint').textContent=hint?'Ẩn đường ghép':'Hiện đường ghép';
}
function snap(i){const p=pieces[i];let nearby=false;
 for(const j of groups[i]){if(pieces.some(q=>q.lockedTarget===j))continue;const t=targets[j];if(Math.hypot(p.x-t[0],p.y-t[1])>pieceScale*35)continue;nearby=true;if(!matched(p,j))continue;p.x=t[0];p.y=t[1];p.lockedTarget=j;selected=-1;sound('merge');const count=pieces.filter(q=>q.lockedTarget>=0).length;status.textContent=`Đã ghép ${count}/7 mảnh.`;if(count===7){sound('win');result.show({won:true,description:`Bạn đã ghép được ${levels[level].name.toLowerCase()} từ 7 mảnh Tangram!`,hasNext:level<levels.length-1});}return true;}
 if(nearby)status.textContent='Đã gần đúng vị trí. Thử xoay hoặc lật mảnh nhé.';
 return false;
}
function reset(){result.clear();setupTargets();pieces=source.map((_,i)=>({type:i,x:55+i*85,y:490,a:0,flip:0,lockedTarget:-1}));selected=-1;drag=null;status.textContent='Kéo mảnh vào hình bóng. Chạm lần nữa để xoay; dùng nút Lật mảnh khi cần.';render();}
function turn(delta){if(selected<0||pieces[selected].lockedTarget>=0)return;const p=pieces[selected];p.a=(p.a+delta+360)%360;snap(selected);render();}
function flip(){if(selected<0||pieces[selected].lockedTarget>=0)return;pieces[selected].flip^=1;snap(selected);render();}
svg.addEventListener('pointerdown',event=>{const el=event.target.closest('[data-piece]');if(!el)return;const i=Number(el.dataset.piece);if(pieces[i].lockedTarget>=0)return;const pos=point(event);drag={i,dx:pos.x-pieces[i].x,dy:pos.y-pieces[i].y,start:pos,moved:false,wasSelected:selected===i};selected=i;svg.setPointerCapture(event.pointerId);render();});
svg.addEventListener('pointermove',event=>{if(!drag)return;const pos=point(event);if(Math.hypot(pos.x-drag.start.x,pos.y-drag.start.y)>5)drag.moved=true;if(!drag.moved)return;const p=pieces[drag.i];p.x=Math.max(30,Math.min(590,pos.x-drag.dx));p.y=Math.max(65,Math.min(505,pos.y-drag.dy));render();});
svg.addEventListener('pointerup',event=>{if(!drag)return;const {i,moved,wasSelected}=drag;drag=null;if(svg.hasPointerCapture(event.pointerId))svg.releasePointerCapture(event.pointerId);if(moved){snap(i);render();}else if(wasSelected)turn(45);else{status.textContent='Mảnh đã được chọn. Chạm lần nữa để xoay hoặc kéo vào hình bóng.';render();}});
svg.addEventListener('pointercancel',()=>{drag=null;render();});
svg.addEventListener('keydown',event=>{const el=event.target.closest('[data-piece]');if(!el)return;const i=Number(el.dataset.piece);if(pieces[i].lockedTarget>=0)return;selected=i;const offsets={ArrowLeft:[-8,0],ArrowRight:[8,0],ArrowUp:[0,-8],ArrowDown:[0,8]};if(offsets[event.key]){event.preventDefault();pieces[i].x+=offsets[event.key][0];pieces[i].y+=offsets[event.key][1];snap(i);render();svg.querySelector(`[data-piece="${i}"]`)?.focus();}else if(event.key.toLowerCase()==='r'){event.preventDefault();turn(event.shiftKey?-45:45);}else if(event.key.toLowerCase()==='f'){event.preventDefault();flip();}});
document.querySelector('#tangram-left').addEventListener('click',()=>turn(-45));
document.querySelector('#tangram-right').addEventListener('click',()=>turn(45));
document.querySelector('#tangram-flip').addEventListener('click',flip);
document.querySelector('#tangram-reset').addEventListener('click',reset);
document.querySelector('#tangram-hint').addEventListener('click',()=>{hint=!hint;render();});
for(const [id,delta] of [['tangram-prev',-1],['tangram-next',1]])document.querySelector('#'+id).addEventListener('click',()=>{level=Math.max(0,Math.min(levels.length-1,level+delta));hint=false;reset();});
reset();
