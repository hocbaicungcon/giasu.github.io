export function triangleAngles(x,y){
 const angle=(a,b)=>Math.acos(Math.max(-1,Math.min(1,(a[0]*b[0]+a[1]*b[1])/(Math.hypot(...a)*Math.hypot(...b)))))*180/Math.PI;
 const B=angle([x-80,y-270],[400,0]),C=angle([x-480,y-270],[-400,0]);
 return [180-B-C,B,C];
}
