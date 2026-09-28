/* credit: giasu.ai.vn */
// Compare the union of the seven pieces with the silhouette, independent of piece order.
const signedArea=poly=>poly.reduce((sum,[x,y],i)=>{const [u,v]=poly[(i+1)%poly.length];return sum+x*v-u*y;},0)/2;
const area=poly=>Math.abs(signedArea(poly));
const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);

function pointInside(point,poly){
 let inside=false;
 for(let i=0,j=poly.length-1;i<poly.length;j=i++){
  const a=poly[i],b=poly[j];
  if((a[1]>point[1])!==(b[1]>point[1])&&point[0]<(b[0]-a[0])*(point[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside;
 }
 return inside;
}
function diagonallyInside(a,c,poly,indices){
 if(!pointInside([(a[0]+c[0])/2,(a[1]+c[1])/2],indices.map(i=>poly[i])))return false;
 for(let i=0;i<indices.length;i++){
  const u=poly[indices[i]],v=poly[indices[(i+1)%indices.length]];
  if(u===a||u===c||v===a||v===c)continue;
  const d1=cross(a,c,u),d2=cross(a,c,v),d3=cross(u,v,a),d4=cross(u,v,c);
  if(d1*d2< -1e-8&&d3*d4< -1e-8)return false;
 }
 return true;
}
function triangulate(poly){
 const orientation=Math.sign(signedArea(poly));if(!orientation)return [];
 // Silhouettes contain straight runs of vertices. Remove these before ear clipping.
 const indices=poly.map((_,i)=>i).filter(i=>Math.abs(cross(poly[(i-1+poly.length)%poly.length],poly[i],poly[(i+1)%poly.length]))>1e-6);
 const triangles=[];
 for(let guard=0;indices.length>3&&guard<poly.length*poly.length;guard++){
  let found=false;
  for(let k=0;k<indices.length;k++){
   const a=poly[indices[(k-1+indices.length)%indices.length]],b=poly[indices[k]],c=poly[indices[(k+1)%indices.length]];
   if(cross(a,b,c)*orientation<1e-7||!diagonallyInside(a,c,poly,indices))continue;
   const inside=indices.some((id,j)=>j!==k&&j!==(k-1+indices.length)%indices.length&&j!==(k+1)%indices.length&&
    cross(a,b,poly[id])*orientation>=-1e-7&&cross(b,c,poly[id])*orientation>=-1e-7&&cross(c,a,poly[id])*orientation>=-1e-7);
   if(inside)continue;
   triangles.push([a,b,c]);indices.splice(k,1);found=true;break;
  }
  if(!found)return [];
 }
 if(indices.length===3)triangles.push(indices.map(i=>poly[i]));
 return triangles;
}

function intersection(subject,clip){
 let result=subject,orientation=Math.sign(signedArea(clip));
 for(let i=0;i<clip.length&&result.length;i++){
  const a=clip[i],b=clip[(i+1)%clip.length],input=result;result=[];
  for(let j=0;j<input.length;j++){
   const p=input[j],q=input[(j+1)%input.length],dp=cross(a,b,p)*orientation,dq=cross(a,b,q)*orientation;
   if(dp>=-1e-8)result.push(p);
   if((dp>1e-8&&dq< -1e-8)||(dp< -1e-8&&dq>1e-8)){
    const t=dp/(dp-dq);result.push([p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])]);
   }
  }
 }
 return result;
}

export function formsSilhouette(outline,pieces){
 if(pieces.length!==7)return false;
 const targetArea=area(outline),pieceAreas=pieces.map(area),total=pieceAreas.reduce((a,b)=>a+b,0);
 if(Math.abs(total-targetArea)>targetArea*.01)return false;
 const triangles=triangulate(outline);
 if(!triangles.length||Math.abs(triangles.reduce((sum,t)=>sum+area(t),0)-targetArea)>targetArea*.001)return false;
 // A tiny tolerance absorbs floating-point coordinates and the game's magnetic snap.
 for(let i=0;i<pieces.length;i++){
  const inside=triangles.reduce((sum,t)=>sum+area(intersection(pieces[i],t)),0);
  if(pieceAreas[i]-inside>pieceAreas[i]*.015)return false;
  for(let j=0;j<i;j++)if(area(intersection(pieces[i],pieces[j]))>Math.min(pieceAreas[i],pieceAreas[j])*.015)return false;
 }
 return true;
}
