const NS='http://www.w3.org/2000/svg';
const el=(name,attrs={})=>{const node=document.createElementNS(NS,name);for(const [key,value] of Object.entries(attrs))if(value!==undefined&&value!==null)node.setAttribute(key,String(value));return node;};
export function measureAngle(vertex,first,second){
 const a=Math.atan2(first[1]-vertex[1],first[0]-vertex[0]),b=Math.atan2(second[1]-vertex[1],second[0]-vertex[0]);
 let delta=b-a;while(delta>Math.PI)delta-=2*Math.PI;while(delta< -Math.PI)delta+=2*Math.PI;
 return {start:a,delta,degrees:Math.abs(delta)*180/Math.PI};
}
export class GeometryScene{
 constructor(svg,{onChange=()=>{}}={}){
 this.svg=svg;this.onChange=onChange;this.points=new Map();this.objects=[];this.dragging=null;
  this.root=el('g',{'data-geometry-scene':''});svg.append(this.root);
  svg.addEventListener('pointerdown',event=>this.#start(event));svg.addEventListener('pointermove',event=>this.#move(event));
  for(const type of ['pointerup','pointercancel','lostpointercapture'])svg.addEventListener(type,()=>{this.dragging=null;});
 }
 point(id,x,y,{label=id,color='currentColor',radius=6,draggable=true,minX=-Infinity,maxX=Infinity,minY=-Infinity,maxY=Infinity,step=5,constrain}={}){
  const point={id,x,y,label,color,radius,draggable,minX,maxX,minY,maxY,step,constrain};this.points.set(id,point);this.objects.push({type:'point',point});return this;
 }
 setPoint(id,x,y){const p=this.points.get(id);if(!p)throw Error(`Unknown geometry point: ${id}`);x=Math.max(p.minX,Math.min(p.maxX,x));y=Math.max(p.minY,Math.min(p.maxY,y));const constrained=p.constrain?.([x,y],this.snapshot());[p.x,p.y]=constrained||[x,y];this.render();return this;}
 circle(id,center,radius,{fill='none',fillOpacity=1,stroke='currentColor',strokeWidth=2,visible=true}={}){this.objects.push({type:'circle',id,center,radius,fill,fillOpacity,stroke,strokeWidth,visible});return this;}
 polygon(id,pointIds,{fill='none',fillOpacity=1,stroke='currentColor',strokeWidth=2.5,dash}={}){this.objects.push({type:'polygon',id,pointIds,fill,fillOpacity,stroke,strokeWidth,dash});return this;}
 segment(id,from,to,{stroke='currentColor',strokeWidth=2,dash,visible=true}={}){this.objects.push({type:'segment',id,from,to,stroke,strokeWidth,dash,visible});return this;}
 angle(id,vertex,first,second,{radius=28,color='currentColor',fillOpacity=.2,label,visible=true}={}){this.objects.push({type:'angle',id,vertex,first,second,radius,color,fillOpacity,label,visible});return this;}
 text(id,pointId,text,{dx=0,dy=-12,color='currentColor',anchor='middle',fontSize=16,visible=true}={}){this.objects.push({type:'text',id,pointId,text,dx,dy,color,anchor,fontSize,visible});return this;}
 setVisible(id,visible){const object=this.objects.find(item=>item.id===id);if(!object)throw Error(`Unknown geometry object: ${id}`);object.visible=visible;this.render();return this;}
 render(){
  const focused=this.root.contains(document.activeElement)?document.activeElement.dataset.geometryPoint:null;
  this.root.replaceChildren();
  for(const item of this.objects){if(item.visible===false)continue;
   if(item.type==='circle'){const center=Array.isArray(item.center)?item.center:this.#xy(item.center);this.root.append(el('circle',{cx:center[0],cy:center[1],r:typeof item.radius==='function'?item.radius(this):item.radius,fill:item.fill,'fill-opacity':item.fillOpacity,stroke:item.stroke,'stroke-width':item.strokeWidth,'data-geometry-object':item.id}));}
   if(item.type==='polygon'){const shape=el('polygon',{points:item.pointIds.map(id=>this.#xy(id).join(',')).join(' '),fill:item.fill,'fill-opacity':item.fillOpacity,stroke:item.stroke,'stroke-width':item.strokeWidth,'stroke-dasharray':item.dash,'data-geometry-object':item.id});this.root.append(shape);}
   if(item.type==='segment'){const a=this.#xy(item.from),b=this.#xy(item.to);this.root.append(el('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:item.stroke,'stroke-width':item.strokeWidth,'stroke-dasharray':item.dash,'data-geometry-object':item.id}));}
   if(item.type==='angle')this.#drawAngle(item);
   if(item.type==='text'){const p=this.points.get(item.pointId),text=el('text',{x:p.x+item.dx,y:p.y+item.dy,fill:item.color,'text-anchor':item.anchor,'font-size':item.fontSize});text.textContent=typeof item.text==='function'?item.text(this):item.text;this.root.append(text);}
   if(item.type==='point')this.#drawPoint(item.point);
  }
  if(focused)this.root.querySelector(`[data-geometry-point="${CSS.escape(focused)}"]`)?.focus({preventScroll:true});
  this.onChange(this.snapshot(),this);
 }
 snapshot(){return Object.fromEntries([...this.points].map(([id,p])=>[id,{x:p.x,y:p.y}]));}
 #xy(id){const p=this.points.get(id);if(!p)throw Error(`Unknown geometry point: ${id}`);return [p.x,p.y];}
 #drawPoint(p){
  const target=el('circle',{cx:p.x,cy:p.y,r:p.draggable?p.radius+10:p.radius,fill:p.draggable?'transparent':p.color,'data-geometry-point':p.id,tabindex:p.draggable?0:undefined,role:p.draggable?'slider':undefined,'aria-label':p.draggable?`Đỉnh ${p.label}`:undefined,'aria-valuemin':p.draggable?p.minY:undefined,'aria-valuemax':p.draggable?p.maxY:undefined,'aria-valuenow':p.y,'aria-valuetext':p.draggable?`x ${Math.round(p.x)}, y ${Math.round(p.y)}`:undefined,style:p.draggable?'cursor:grab;touch-action:none':''});
  if(p.draggable)target.addEventListener('keydown',event=>{const moves={ArrowUp:[0,-p.step],ArrowDown:[0,p.step],ArrowLeft:[-p.step,0],ArrowRight:[p.step,0]},move=moves[event.key];if(!move)return;event.preventDefault();this.setPoint(p.id,p.x+move[0],p.y+move[1]);});
  this.root.append(target);this.root.append(el('circle',{cx:p.x,cy:p.y,r:p.radius,fill:p.color,'pointer-events':'none'}));
  const label=el('text',{x:p.x,y:p.y+(p.y>250?26:-18),fill:p.color,'text-anchor':'middle','font-weight':700,'pointer-events':'none'});label.textContent=p.label;this.root.append(label);
 }
 #drawAngle(item){
  const v=this.#xy(item.vertex),a=this.#xy(item.first),b=this.#xy(item.second),{start,delta,degrees}=measureAngle(v,a,b),end=start+delta;
  const polar=t=>[v[0]+item.radius*Math.cos(t),v[1]+item.radius*Math.sin(t)],p=polar(start),q=polar(end),large=Math.abs(delta)>Math.PI?1:0,sweep=delta>=0?1:0;
  this.root.append(el('path',{d:`M ${v[0]} ${v[1]} L ${p[0]} ${p[1]} A ${item.radius} ${item.radius} 0 ${large} ${sweep} ${q[0]} ${q[1]} Z`,fill:item.color,'fill-opacity':item.fillOpacity,stroke:item.color,'stroke-width':1.5,'data-geometry-object':item.id}));
  if(item.label){const mid=start+delta/2,pos=polar(mid),text=el('text',{x:pos[0],y:pos[1]-5,fill:item.color,'text-anchor':'middle','font-size':13});text.textContent=typeof item.label==='function'?item.label(degrees,this):item.label;this.root.append(text);}
 }
 #start(event){const target=event.target.closest?.('[data-geometry-point]'),matrix=this.svg.getScreenCTM();let point=target?this.points.get(target.dataset.geometryPoint):null;if(!point&&matrix){const p=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());point=[...this.points.values()].filter(item=>item.draggable).map(item=>({item,distance:Math.hypot(item.x-p.x,item.y-p.y)})).sort((a,b)=>a.distance-b.distance).find(entry=>entry.distance<=entry.item.radius+12)?.item;}if(!point?.draggable)return;this.dragging=point.id;try{this.svg.setPointerCapture(event.pointerId);}catch{}(target||this.root.querySelector(`[data-geometry-point="${CSS.escape(point.id)}"]`))?.focus({preventScroll:true});event.preventDefault();}
 #move(event){if(!this.dragging)return;const matrix=this.svg.getScreenCTM();if(!matrix)return;const p=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse()),point=this.points.get(this.dragging);this.setPoint(point.id,p.x,p.y);}
}
