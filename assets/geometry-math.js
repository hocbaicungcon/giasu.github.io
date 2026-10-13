/* credit: giasu.ai.vn */
export function trianglePoints(ab,bc,ca){
 if(![ab,bc,ca].every(x=>Number.isFinite(x)&&x>0)||ab+bc<=ca||ab+ca<=bc||bc+ca<=ab)return null;
 const x=(ab*ab+bc*bc-ca*ca)/(2*bc),height=Math.sqrt(Math.max(0,ab*ab-x*x));
 return [[x,-height],[0,0],[bc,0]];
}
