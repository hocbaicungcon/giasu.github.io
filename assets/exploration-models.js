export function gcd(a,b){while(b)[a,b]=[b,a%b];return a;}
export function divisors(n){return Array.from({length:n},(_,i)=>i+1).filter(d=>n%d===0);}
export function quadratic(a,b,c){
 if(a===0)return {degree:b===0?0:1,roots:b===0?(c===0?null:[]):[-c/b],vertex:null};
 const delta=b*b-4*a*c,x=-b/(2*a);
 return {degree:2,delta,vertex:[x,a*x*x+b*x+c],roots:delta<0?[]:delta===0?[x]:[(-b-Math.sqrt(delta))/(2*a),(-b+Math.sqrt(delta))/(2*a)]};
}
export function tossCoins(count,random=Math.random){let heads=0;for(let i=0;i<count;i++)if(random()<.5)heads++;return {heads,tails:count-heads};}

export const probabilityEvents=[
 {id:'certain',text:'Gieo xúc xắc cân đối: số chấm từ 1 đến 6.',probability:1,icon:'die',reason:'Mọi mặt đều có từ 1 đến 6 chấm: xác suất bằng 1.'},
 {id:'five',text:'Gieo xúc xắc cân đối: số chấm không quá 5.',probability:5/6,icon:'die',reason:'Có 5 mặt phù hợp trong 6 mặt: xác suất bằng 5/6.'},
 {id:'coin',text:'Tung đồng xu cân đối: xuất hiện mặt ngửa.',probability:1/2,icon:'coin',reason:'Hai mặt đồng khả năng: xác suất bằng 1/2.'},
 {id:'six',text:'Gieo xúc xắc cân đối: xuất hiện mặt 6 chấm.',probability:1/6,icon:'die',reason:'Chỉ có 1 mặt phù hợp trong 6 mặt: xác suất bằng 1/6.'},
 {id:'double',text:'Gieo hai xúc xắc cân đối, độc lập: tổng số chấm bằng 2.',probability:1/36,icon:'die',reason:'Chỉ có cặp (1, 1) trong 36 kết quả đồng khả năng: xác suất bằng 1/36.'},
 {id:'impossible',text:'Gieo xúc xắc sáu mặt: xuất hiện mặt 7 chấm.',probability:0,icon:'die',reason:'Xúc xắc sáu mặt không có mặt 7 chấm: xác suất bằng 0.'}
];
export function moveEvent(order,from,to){if(!Number.isInteger(from)||!Number.isInteger(to)||from<0||to<0||from>=order.length||to>=order.length)return [...order];const result=[...order];result.splice(to,0,result.splice(from,1)[0]);return result;}
export function isProbabilityOrder(order){const byId=new Map(probabilityEvents.map(e=>[e.id,e.probability]));return order.length===byId.size&&new Set(order).size===byId.size&&order.every((id,i)=>byId.has(id)&&(i===0||byId.get(order[i-1])>=byId.get(id)));}
