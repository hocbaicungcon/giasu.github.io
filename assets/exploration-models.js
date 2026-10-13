export function gcd(a,b){while(b)[a,b]=[b,a%b];return a;}
export function divisors(n){return Array.from({length:n},(_,i)=>i+1).filter(d=>n%d===0);}
export function quadratic(a,b,c){
 if(a===0)return {degree:b===0?0:1,roots:b===0?(c===0?null:[]):[-c/b],vertex:null};
 const delta=b*b-4*a*c,x=-b/(2*a);
 return {degree:2,delta,vertex:[x,a*x*x+b*x+c],roots:delta<0?[]:delta===0?[x]:[(-b-Math.sqrt(delta))/(2*a),(-b+Math.sqrt(delta))/(2*a)]};
}
export function tossCoins(count,random=Math.random){let heads=0;for(let i=0;i<count;i++)if(random()<.5)heads++;return {heads,tails:count-heads};}
