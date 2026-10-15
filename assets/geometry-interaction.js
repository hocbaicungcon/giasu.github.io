const NS='http://www.w3.org/2000/svg';
const el=(name,attrs={})=>{const node=document.createElementNS(NS,name);for(const [key,value] of Object.entries(attrs))if(value!==undefined&&value!==null)node.setAttribute(key,String(value));return node;};
export function measureAngle(vertex,first,second){
 for(const point of [vertex,first,second])if(!Array.isArray(point)||point.length!==2||!point.every(Number.isFinite))throw new TypeError('Mỗi điểm góc cần có hai tọa độ hữu hạn.');
 if(Math.hypot(first[0]-vertex[0],first[1]-vertex[1])===0||Math.hypot(second[0]-vertex[0],second[1]-vertex[1])===0)throw new RangeError('Không thể đo góc với một tia có độ dài bằng 0.');
 const a=Math.atan2(first[1]-vertex[1],first[0]-vertex[0]),b=Math.atan2(second[1]-vertex[1],second[0]-vertex[0]);
 let delta=b-a;while(delta>Math.PI)delta-=2*Math.PI;while(delta< -Math.PI)delta+=2*Math.PI;
 return {start:a,delta,degrees:Math.abs(delta)*180/Math.PI};
}
export class GeometryScene{
 constructor(svg,{onChange=()=>{}}={}){
 if(!svg?.addEventListener||!svg?.append)throw new TypeError('GeometryScene cần một phần tử SVG.');
 this.svg=svg;this.onChange=onChange;this.points=new Map();this.objects=[];this.dragging=null;this.destroyed=false;this.batchDepth=0;
  this.root=el('g',{'data-geometry-scene':''});svg.append(this.root);
  this.handlers={pointerdown:event=>this.#start(event),pointermove:event=>this.#move(event),pointerup:()=>{this.dragging=null;this.pointerId=null;},pointercancel:()=>{this.dragging=null;this.pointerId=null;},lostpointercapture:()=>{this.dragging=null;this.pointerId=null;}};
  for(const [type,handler] of Object.entries(this.handlers))svg.addEventListener(type,handler);
 }
 point(id,x,y,{label=id,color='currentColor',radius=6,draggable=true,minX=-Infinity,maxX=Infinity,minY=-Infinity,maxY=Infinity,step=5,constrain}={}){
  this.#assertId(id);this.#assertCoordinate(x,'x');this.#assertCoordinate(y,'y');if(radius<0||step<=0)throw new RangeError('Bán kính phải không âm và bước di chuyển phải dương.');
  const point={id,x,y,label,color,radius,draggable,minX,maxX,minY,maxY,step,constrain};this.points.set(id,point);this.objects=this.objects.filter(item=>!(item.type==='point'&&item.point.id===id));this.objects.push({type:'point',point});return this;
 }
 setPoint(id,x,y,{render=true}={}){return this.setPoints({[id]:[x,y]},{render});}
 setPoints(changes,{render=true}={}){const staged=new Map(),state=this.snapshot();for(const [id,coordinates] of Object.entries(changes)){const p=this.points.get(id);if(!p)throw Error(`Unknown geometry point: ${id}`);if(!Array.isArray(coordinates)||coordinates.length!==2)throw new TypeError(`Point ${id} needs [x, y] coordinates.`);let [x,y]=coordinates;this.#assertCoordinate(x,'x');this.#assertCoordinate(y,'y');let next=[this.#clamp(x,p.minX,p.maxX),this.#clamp(y,p.minY,p.maxY)];next=p.constrain?.(next,state)||next;if(!Array.isArray(next)||next.length!==2||!next.every(Number.isFinite))throw new TypeError(`Constraint for ${id} must return two finite coordinates.`);next=[this.#clamp(next[0],p.minX,p.maxX),this.#clamp(next[1],p.minY,p.maxY)];staged.set(id,next);state[id]={x:next[0],y:next[1]};}for(const [id,[x,y]] of staged){this.points.get(id).x=x;this.points.get(id).y=y;}if(render)this.render();return this;}
 circle(id,center,radius,{fill='none',fillOpacity=1,stroke='currentColor',strokeWidth=2,visible=true}={}){this.#assertId(id);if(typeof radius!=='function'&&(!Number.isFinite(radius)||radius<0))throw new RangeError('Bán kính đường tròn không hợp lệ.');return this.#upsert({type:'circle',id,center,radius,fill,fillOpacity,stroke,strokeWidth,visible});}
 polygon(id,pointIds,{fill='none',fillOpacity=1,stroke='currentColor',strokeWidth=2.5,dash,visible=true}={}){this.#assertId(id);if(pointIds.length<3)throw new RangeError('Đa giác cần ít nhất ba điểm.');return this.#upsert({type:'polygon',id,pointIds:[...pointIds],fill,fillOpacity,stroke,strokeWidth,dash,visible});}
 segment(id,from,to,{stroke='currentColor',strokeWidth=2,dash,visible=true}={}){this.#assertId(id);return this.#upsert({type:'segment',id,from,to,stroke,strokeWidth,dash,visible});}
 angle(id,vertex,first,second,{radius=28,color='currentColor',fillOpacity=.2,label,visible=true}={}){this.#assertId(id);if(radius<=0)throw new RangeError('Bán kính cung góc phải dương.');return this.#upsert({type:'angle',id,vertex,first,second,radius,color,fillOpacity,label,visible});}
 text(id,pointId,text,{dx=0,dy=-12,color='currentColor',anchor='middle',fontSize=16,visible=true}={}){this.#assertId(id);return this.#upsert({type:'text',id,pointId,text,dx,dy,color,anchor,fontSize,visible});}
 setVisible(id,visible,{render=true}={}){const object=this.objects.find(item=>item.id===id);if(!object)throw Error(`Unknown geometry object: ${id}`);object.visible=!!visible;if(render)this.render();return this;}
 transaction(update){const previousPoints=new Map(this.points),positions=new Map([...this.points].map(([id,point])=>[id,{...point}])),objects=this.objects.map(item=>({...item}));this.batchDepth++;try{update(this);}catch(error){for(const [id,point] of previousPoints)Object.assign(point,positions.get(id));this.points=previousPoints;this.objects=objects;this.batchDepth--;throw error;}this.batchDepth--;if(!this.batchDepth)this.render();return this;}
 destroy(){if(this.destroyed)return;for(const [type,handler] of Object.entries(this.handlers))this.svg.removeEventListener(type,handler);if(this.pointerId!==null&&this.pointerId!==undefined&&this.svg.hasPointerCapture?.(this.pointerId))this.svg.releasePointerCapture(this.pointerId);this.root.remove();this.points.clear();this.objects=[];this.dragging=null;this.pointerId=null;this.destroyed=true;}
 render(){
  if(this.destroyed||this.batchDepth)return this;
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
  this.onChange(this.snapshot(),this);return this;
 }
 snapshot(){return Object.fromEntries([...this.points].map(([id,p])=>[id,{x:p.x,y:p.y}]));}
 #xy(id){const p=this.points.get(id);if(!p)throw Error(`Unknown geometry point: ${id}`);return [p.x,p.y];}
 #assertId(id){if(typeof id!=='string'||!id.trim()||/["'\\]/.test(id))throw new TypeError('ID hình học cần là chuỗi đơn giản, duy nhất.');}
 #assertCoordinate(value,name){if(!Number.isFinite(value))throw new TypeError(`Tọa độ ${name} phải là số hữu hạn.`);}
 #clamp(value,min,max){return Math.max(min,Math.min(max,value));}
 #upsert(item){const old=this.objects.findIndex(object=>object.id===item.id);if(old>=0)this.objects.splice(old,1);this.objects.push(item);return this;}
 #drawPoint(p){
  const target=el('circle',{cx:p.x,cy:p.y,r:p.draggable?p.radius+10:p.radius,fill:p.draggable?'transparent':p.color,'data-geometry-point':p.id,tabindex:p.draggable?0:undefined,role:p.draggable?'button':undefined,'aria-label':p.draggable?`Điểm ${p.label}; kéo hoặc dùng phím mũi tên để di chuyển`:undefined,'aria-keyshortcuts':p.draggable?'ArrowUp ArrowDown ArrowLeft ArrowRight':undefined,style:p.draggable?'cursor:grab;touch-action:none':''});
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
 #start(event){const target=event.target.closest?.('[data-geometry-point]'),matrix=this.svg.getScreenCTM();let point=target?this.points.get(target.dataset.geometryPoint):null;if(!point&&matrix){const p=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());point=[...this.points.values()].filter(item=>item.draggable).map(item=>({item,distance:Math.hypot(item.x-p.x,item.y-p.y)})).sort((a,b)=>a.distance-b.distance).find(entry=>entry.distance<=entry.item.radius+12)?.item;}if(!point?.draggable)return;this.dragging=point.id;this.pointerId=event.pointerId;try{this.svg.setPointerCapture(event.pointerId);}catch{}(target||this.root.querySelector(`[data-geometry-point="${CSS.escape(point.id)}"]`))?.focus({preventScroll:true});event.preventDefault();}
 #move(event){if(!this.dragging)return;const matrix=this.svg.getScreenCTM();if(!matrix)return;const p=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse()),point=this.points.get(this.dragging);this.setPoint(point.id,p.x,p.y);}
}
