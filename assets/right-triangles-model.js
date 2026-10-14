/** Positive legs determine a right triangle; angle sum stays 180 degrees. */
export function rightTriangle(a,b){
 if(![a,b].every(x=>Number.isFinite(x)&&x>0))throw new RangeError('Hai cạnh góc vuông phải dương.');
 const angleB=Math.atan2(b,a)*180/Math.PI;
 return {points:[[0,0],[a,0],[0,-b]],hypotenuse:Math.hypot(a,b),angleB,angleC:90-angleB};
}
