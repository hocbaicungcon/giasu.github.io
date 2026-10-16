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

export function rationalNumber(a,b=1){
 if(b===0)return null;
 const s=(a*b<0)?-1:(a===0?0:1);
 const absA=Math.abs(a),absB=Math.abs(b);
 const g=gcd(absA,absB);
 const p=absA/g,q=absB/g;
 return {
  numerator:a,
  denominator:b,
  simplified:[s*p,q],
  value:a/b,
  opposite:-(a/b),
  isInteger:q===1
 };
}

export function linearFunction(a,b){
 const root=a===0?null:-b/a;
 const slopeAngleDeg=Math.round(Math.atan(a)*180/Math.PI*10)/10;
 return {
  a,
  b,
  root,
  yIntercept:[0,b],
  xIntercept:a===0?null:[root,0],
  slopeAngleDeg,
  monotonicity:a>0?'increasing':a<0?'decreasing':'constant'
 };
}

export function equationBalance(a=2,b=3,c=11){
 return {
  a,
  b,
  c,
  transferred:c-b,
  solution:a===0?null:(c-b)/a
 };
}

export function derivativeTangent(a,b,c,d,x0){
 const y0=a*x0*x0*x0+b*x0*x0+c*x0+d;
 const slope=3*a*x0*x0+2*b*x0+c;
 const intercept=y0-slope*x0;
 const isStationary=Math.abs(slope)<1e-5;
 const sign=isStationary?0:(slope>0?1:-1);
 return {
  x0,
  y0,
  slope,
  intercept,
  sign,
  behavior:sign>0?'đồng biến':(sign<0?'nghịch biến':'tiếp tuyến nằm ngang (cực trị/điểm dừng)')
 };
}

export function pieChartModel(slices){
 const total=slices.reduce((sum,s)=>sum+Math.max(0,Number(s.value)||0),0);
 let currentAngle=0;
 return slices.map(s=>{
  const val=Math.max(0,Number(s.value)||0);
  const percent=total>0?(val/total*100):0;
  const angleDeg=total>0?(val/total*360):0;
  const startAngle=currentAngle;
  const endAngle=currentAngle+angleDeg;
  currentAngle=endAngle;
  return {
   label:s.label,
   value:val,
   percent:Math.round(percent*10)/10,
   angleDeg:Math.round(angleDeg*10)/10,
   startAngle,
   endAngle,
   color:s.color
  };
 });
}

export const sampleDataItems=[
 {id:'height',name:'Chiều cao học sinh (cm)',kind:'quantitative',subtype:'continuous',example:'152.5 cm, 160.2 cm'},
 {id:'sibling',name:'Số anh chị em trong gia đình',kind:'quantitative',subtype:'discrete',example:'0, 1, 2, 3 người'},
 {id:'grade',name:'Xếp loại học lực',kind:'qualitative',subtype:'ordinal',example:'Xuất sắc, Giỏi, Khá, Đạt'},
 {id:'sport',name:'Môn thể thao yêu thích',kind:'qualitative',subtype:'nominal',example:'Bóng đá, Cầu lông, Bơi lội'},
 {id:'score',name:'Điểm bài kiểm tra 15 phút',kind:'quantitative',subtype:'discrete',example:'8.5, 9.0, 10'},
 {id:'shirt',name:'Kích cỡ áo đồng phục',kind:'qualitative',subtype:'ordinal',example:'S, M, L, XL'}
];

export function lineChartModel(points){
 if(!points||!points.length)return {points:[],min:0,max:0,avg:0,deltas:[],steepestInc:null,steepestDec:null};
 const values=points.map(p=>Number(p.value)||0);
 const min=Math.min(...values);
 const max=Math.max(...values);
 const total=values.reduce((s,v)=>s+v,0);
 const avg=Math.round((total/values.length)*10)/10;
 const deltas=[];
 let maxInc=0,steepestInc=null;
 let maxDec=0,steepestDec=null;
 for(let i=1;i<points.length;i++){
  const diff=values[i]-values[i-1];
  const pct=values[i-1]!==0?Math.round((diff/Math.abs(values[i-1]))*1000)/10:null;
  const trend=diff>0?'tăng':diff<0?'giảm':'không đổi';
  deltas.push({from:points[i-1].time,to:points[i].time,diff,pct,trend});
  if(diff>maxInc){maxInc=diff;steepestInc={from:points[i-1].time,to:points[i].time,diff};}
  if(diff<maxDec){maxDec=diff;steepestDec={from:points[i-1].time,to:points[i].time,diff};}
 }
 return {points,min,max,avg,deltas,steepestInc,steepestDec};
}

export function movingAverage(values,windowSize=3){
 const res=[];
 for(let i=0;i<values.length;i++){
  if(i<windowSize-1){
   res.push(null);
  }else{
   let sum=0;
   for(let j=0;j<windowSize;j++)sum+=values[i-j];
   res.push(Math.round((sum/windowSize)*10)/10);
  }
 }
 return res;
}

