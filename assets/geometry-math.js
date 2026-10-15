/* credit: giasu.ai.vn */
export function trianglePoints(ab,bc,ca){
 if(![ab,bc,ca].every(x=>Number.isFinite(x)&&x>0)||ab+bc<=ca||ab+ca<=bc||bc+ca<=ab)return null;
 const x=(ab*ab+bc*bc-ca*ca)/(2*bc),height=Math.sqrt(Math.max(0,ab*ab-x*x));
 return [[x,-height],[0,0],[bc,0]];
}
export function triangleSasPoints(ab,angleA,ac){
 if(![ab,ac,angleA].every(x=>Number.isFinite(x))||ab<=0||ac<=0||angleA<=0||angleA>=180)return null;
 const rad=angleA*Math.PI/180,A=[0,0],B=[ab,0],C=[ac*Math.cos(rad),-ac*Math.sin(rad)];
 const bc=Math.hypot(C[0]-B[0],C[1]-B[1]);
 return {points:[A,B,C],bc};
}
export function triangleAsaPoints(angleB,bc,angleC){
 if(![bc,angleB,angleC].every(x=>Number.isFinite(x))||bc<=0||angleB<=0||angleC<=0||angleB+angleC>=180)return null;
 const bRad=angleB*Math.PI/180,cRad=angleC*Math.PI/180,tanB=Math.tan(bRad),tanC=Math.tan(cRad);
 const x=(bc*tanC)/(tanB+tanC),y=-x*tanB,B=[0,0],C=[bc,0],A=[x,y];
 const ab=Math.hypot(A[0]-B[0],A[1]-B[1]),ac=Math.hypot(A[0]-C[0],A[1]-C[1]);
 return {points:[A,B,C],ab,ac,angleA:180-angleB-angleC};
}
