import './probability-sort.js?v=8cf16fbfba6c';
import './triangle-angles.js?v=8cf16fbfba6c';
import {gcd,divisors,quadratic,tossCoins,rationalNumber,linearFunction,equationBalance,derivativeTangent,pieChartModel,sampleDataItems,lineChartModel,movingAverage} from './exploration-models.js?v=8cf16fbfba6c';
const fmt=n=>Number(n.toFixed(2)).toLocaleString('vi');
const svg=content=>`<svg viewBox="0 0 580 320" role="img" aria-label="Đồ thị thí nghiệm">${content}</svg>`;
const button=(label,action)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',action);return b;};
document.querySelectorAll('[data-exploration]').forEach(root=>{
 const stage=root.querySelector('[data-exploration-stage]');
 const feedback=document.createElement('p');feedback.className='exploration-feedback';feedback.setAttribute('role','status');
 if(root.dataset.exploration==='gcd'){
  const controls=document.createElement('div');controls.className='exploration-controls';const numbers=[];
  for(const [name,value] of [['Số thứ nhất',18],['Số thứ hai',24]]){const label=document.createElement('label');label.textContent=name;const input=document.createElement('input');input.type='number';input.min=1;input.max=120;input.step=1;input.value=value;input.setAttribute('aria-label',name);label.append(input);controls.append(label);numbers.push(input);}
  const prompt=document.createElement('p');prompt.textContent='Chọn ước chung lớn nhất của hai số:';
  const choices=document.createElement('div');choices.className='exploration-choices';
  const explanation=document.createElement('p');explanation.hidden=true;
  const reveal=button('Xem các ước chung',()=>{explanation.hidden=false;});
  const update=()=>{
   choices.replaceChildren();feedback.textContent='';explanation.hidden=true;
   const [a,b]=numbers.map(input=>Number(input.value));
   if(!numbers.every(input=>input.value&&input.checkValidity())){feedback.textContent='Chọn hai số nguyên từ 1 đến 120.';return;}
   const common=divisors(gcd(a,b));explanation.textContent=`Ước chung: ${common.join(', ')}. ƯCLN(${a}, ${b}) = ${common.at(-1)}.`;
   for(const d of [...new Set([...divisors(a),...divisors(b)])].sort((x,y)=>x-y)){
    const choice=button(String(d),()=>{choices.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===choice)));feedback.textContent=d===gcd(a,b)?`Đúng! ${d} là ước chung lớn nhất của ${a} và ${b}.`:common.includes(d)?`${d} là ước chung, nhưng còn một ước chung lớn hơn.`:`Cả hai số chưa cùng chia hết cho ${d}. Em thử lại nhé.`;if(d===gcd(a,b))explanation.hidden=false;});choice.setAttribute('aria-pressed','false');choices.append(choice);
   }
  };
  stage.append(controls,prompt,choices,reveal,feedback,explanation);numbers.forEach(input=>input.addEventListener('input',update));update();
 }else if(root.dataset.exploration==='probability'){
  let heads=0,tails=0;const chart=document.createElement('div');chart.className='exploration-chart';const controls=document.createElement('div');controls.className='exploration-controls';
  const update=()=>{const total=heads+tails,ratio=total?heads/total:0;chart.innerHTML=svg(`<path class="chart-guide" d="M60 150H510"/><text x="510" y="140" text-anchor="end">Lý thuyết 50%</text>${[[heads,'Ngửa',150],[tails,'Sấp',350]].map(([n,label,x])=>{const h=total?n/total*240:0;return `<rect class="chart-bar" x="${x}" y="${270-h}" width="80" height="${h}"/><text x="${x+40}" y="295" text-anchor="middle">${label}</text><text x="${x+40}" y="${Math.max(20,260-h)}" text-anchor="middle">${n}</text>`;}).join('')}`);feedback.textContent=total?`${total} lần tung · ${heads} lần ngửa · Tần suất ngửa: ${fmt(ratio*100)}%. Tần suất có thể dao động, không nhất thiết đúng 50%.`:'Chưa tung đồng xu. Em thử 1 lần, rồi tăng lên 100 hoặc 1000 lần.';};
  for(const n of [1,100,1000])controls.append(button(`Tung ${n} lần`,()=>{const result=tossCoins(n);heads+=result.heads;tails+=result.tails;update();}));controls.append(button('Làm lại',()=>{heads=tails=0;update();}));stage.append(chart,controls,feedback);update();
 }else if(root.dataset.exploration==='quadratic'){
  const chart=document.createElement('div');chart.className='exploration-chart';const controls=document.createElement('div');controls.className='exploration-controls';const values=[];
  for(const [name,value,min,max] of [['a',1,-3,3],['b',0,-6,6],['c',0,-4,8]]){const label=document.createElement('label');label.textContent=name+' = ';const out=document.createElement('output');out.textContent=value;const input=document.createElement('input');input.type='range';input.min=min;input.max=max;input.step=.5;input.value=value;input.setAttribute('aria-label','Hệ số '+name);label.append(out,input);controls.append(label);values.push({input,out});}
  const prediction=document.createElement('select');prediction.setAttribute('aria-label','Dự đoán hướng mở đồ thị');for(const [value,text] of [['','Chọn hướng đồ thị…'],['up','Parabol mở lên'],['down','Parabol mở xuống'],['line','Đường thẳng']]){const o=document.createElement('option');o.value=value;o.textContent=text;prediction.append(o);}
  const check=button('Kiểm tra dự đoán',()=>{const a=+values[0].input.value;if(!prediction.value){feedback.textContent='Em hãy chọn một dự đoán.';return;}feedback.textContent=prediction.value===(a>0?'up':a<0?'down':'line')?`Đúng! ${a===0?'Khi a = 0, đồ thị là đường thẳng.':a>0?'a > 0: parabol mở lên.':'a < 0: parabol mở xuống.'}`:'Chưa đúng. Em quan sát dấu của hệ số a và thử lại.';});
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{const [a,b,c]=values.map(({input,out})=>{out.textContent=fmt(+input.value);return +input.value;});feedback.textContent='';prediction.value='';
   const map=(x,y)=>[280+x*48,160-y*16],points=[];for(let x=-5;x<=5.001;x+=.05){const [px,py]=map(x,a*x*x+b*x+c);points.push(`${points.length?'L':'M'}${px.toFixed(2)} ${py.toFixed(2)}`);}
   chart.innerHTML=svg(`<defs><clipPath id="quadratic-plot"><rect x="40" y="20" width="480" height="270"/></clipPath></defs><path class="chart-axis" d="M40 160H530M280 20V290"/><text x="530" y="150">x</text><text x="290" y="25">y</text>${[-4,-2,2,4].map(x=>`<text x="${map(x,0)[0]}" y="180" text-anchor="middle">${x}</text>`).join('')}<g clip-path="url(#quadratic-plot)"><path class="chart-curve" d="${points.join(' ')}"/></g>`);
   const model=quadratic(a,b,c);result.textContent=`y = ${fmt(a)}x² ${b<0?'−':'+'} ${fmt(Math.abs(b))}x ${c<0?'−':'+'} ${fmt(Math.abs(c))}. `+(model.vertex?`Đỉnh (${fmt(model.vertex[0])}; ${fmt(model.vertex[1])}). `:'a = 0: không còn là hàm bậc hai. ')+(model.roots===null?'Mọi x đều là nghiệm.':model.roots.length?`Nghiệm: ${model.roots.map(fmt).join('; ')}.`:'Không có nghiệm thực.');
  };stage.append(chart,controls,prediction,check,feedback,result);values.forEach(({input})=>input.addEventListener('input',update));update();
 }else if(root.dataset.exploration==='rational-numberline'){
  const chart=document.createElement('div');chart.className='exploration-chart';
  const controls=document.createElement('div');controls.className='exploration-controls';
  const inputs=[];
  for(const [name,value,min,max] of [['Tử số a',-3,-8,8],['Mẫu số b',4,1,8]]){
   const label=document.createElement('label');label.textContent=name+': ';
   const out=document.createElement('output');out.textContent=value;
   const input=document.createElement('input');input.type='range';input.min=min;input.max=max;input.step=1;input.value=value;
   input.setAttribute('aria-label',name);label.append(out,input);controls.append(label);inputs.push({input,out});
  }
  const presets=document.createElement('div');presets.className='exploration-choices';
  for(const [label,a,b] of [['-3/4',-3,4],['5/2',5,2],['-2',-2,1],['0',0,3],['7/4',7,4]]){
   presets.append(button(label,()=>{inputs[0].input.value=a;inputs[1].input.value=b;update();}));
  }
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const [a,b]=inputs.map(({input,out})=>{out.textContent=input.value;return +input.value;});
   const model=rationalNumber(a,b);if(!model)return;
   const scale=55,originX=280;
   const mx=originX+model.value*scale;
   const oppX=originX+model.opposite*scale;
   const ticks=[];
   for(let i=-4;i<=4;i++){
    const tx=originX+i*scale;
    ticks.push(`<line class="chart-axis" x1="${tx}" y1="150" x2="${tx}" y2="170"/><text x="${tx}" y="190" text-anchor="middle" font-size="13">${i}</text>`);
    if(i<4&&b>1){
     for(let k=1;k<b;k++){
      const subX=tx+k*(scale/b);
      ticks.push(`<line class="chart-guide" x1="${subX.toFixed(1)}" y1="154" x2="${subX.toFixed(1)}" y2="166"/>`);
     }
    }
   }
   chart.innerHTML=svg(`<path class="chart-axis" d="M30 160H530"/><polygon points="535,160 525,155 525,165" fill="#8c9e8e"/>${ticks.join('')}<path class="chart-guide" stroke-dasharray="4 4" d="M${mx.toFixed(1)} 120 Q 280 60 ${oppX.toFixed(1)} 120"/><circle cx="${mx.toFixed(1)}" cy="160" r="7" fill="#087858"/><text x="${mx.toFixed(1)}" y="115" text-anchor="middle" font-weight="700" fill="#087858">M (${a}/${b})</text><circle cx="${oppX.toFixed(1)}" cy="160" r="6" fill="#d94e48" stroke-dasharray="2 2"/><text x="${oppX.toFixed(1)}" y="115" text-anchor="middle" font-weight="600" fill="#d94e48">Số đối M' (${-a}/${b})</text><circle cx="280" cy="160" r="4" fill="#23332e"/><text x="280" y="142" text-anchor="middle" font-weight="700">0</text>`);
   const [p,q]=model.simplified;
   const simpStr=(p===a&&q===b)?'':' (rút gọn: '+(q===1?`${p}`:`${p}/${q}`)+')';
   result.textContent=`Số hữu tỉ x = ${a}/${b}${simpStr} ≈ ${fmt(model.value)}. Số đối là -(${a}/${b}) = ${-a}/${b} ≈ ${fmt(model.opposite)}. Khoảng cách từ M và M' đến gốc 0 bằng nhau: |x| = ${fmt(Math.abs(model.value))}.`;
  };
  stage.append(chart,controls,presets,feedback,result);
  inputs.forEach(({input})=>input.addEventListener('input',update));update();
 }else if(root.dataset.exploration==='linear-function'){
  const chart=document.createElement('div');chart.className='exploration-chart';
  const controls=document.createElement('div');controls.className='exploration-controls';
  const inputs=[];
  for(const [name,value,min,max] of [['Hệ số góc a',1,-3,3],['Tung độ gốc b',-1,-4,4]]){
   const label=document.createElement('label');label.textContent=name+': ';
   const out=document.createElement('output');out.textContent=value;
   const input=document.createElement('input');input.type='range';input.min=min;input.max=max;input.step=.5;input.value=value;
   input.setAttribute('aria-label',name);label.append(out,input);controls.append(label);inputs.push({input,out});
  }
  const prediction=document.createElement('select');prediction.setAttribute('aria-label','Dự đoán tính đơn điệu');
  for(const [value,text] of [['','Dự đoán tính đơn điệu…'],['increasing','Hàm số đồng biến trên ℝ (đồ thị đi lên)'],['decreasing','Hàm số nghịch biến trên ℝ (đồ thị đi xuống)'],['constant','Hàm hằng (đường nằm ngang)']]){
   const o=document.createElement('option');o.value=value;o.textContent=text;prediction.append(o);
  }
  const check=button('Kiểm tra dự đoán',()=>{
   const a=+inputs[0].input.value;if(!prediction.value){feedback.textContent='Em hãy chọn một dự đoán.';return;}
   const expected=a>0?'increasing':a<0?'decreasing':'constant';
   feedback.textContent=prediction.value===expected?`Chính xác! ${a>0?'Vì a > 0 nên hàm số luôn đồng biến trên ℝ (góc nghiêng nhọn, đồ thị dốc lên).':a<0?'Vì a < 0 nên hàm số luôn nghịch biến trên ℝ (góc nghiêng tù, đồ thị dốc xuống).':'Khi a = 0, đồ thị là đường nằm ngang y = b.'}`:'Chưa đúng. Em hãy quan sát dấu của hệ số góc a và thử lại nhé.';
  });
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const [a,b]=inputs.map(({input,out})=>{out.textContent=fmt(+input.value);return +input.value;});
   feedback.textContent='';prediction.value='';
   const originX=280,originY=160,scale=32;
   const map=(x,y)=>[originX+x*scale,originY-y*scale];
   const [x1,y1]=map(-7,a*(-7)+b);
   const [x2,y2]=map(7,a*7+b);
   const model=linearFunction(a,b);
   const yInt=map(0,b);
   const xInt=model.root!==null?map(model.root,0):null;
   chart.innerHTML=svg(`<defs><clipPath id="linear-clip"><rect x="40" y="20" width="480" height="280"/></clipPath></defs><path class="chart-axis" d="M40 160H520M280 20V300"/><polygon points="525,160 515,155 515,165" fill="#8c9e8e"/><polygon points="280,15 275,25 285,25" fill="#8c9e8e"/><text x="525" y="152">x</text><text x="292" y="25">y</text><text x="270" y="175">O</text>${[-6,-4,-2,2,4,6].map(x=>`<text x="${map(x,0)[0]}" y="175" text-anchor="middle" font-size="12">${x}</text>`).join('')}${[-4,-2,2,4].map(y=>`<text x="268" y="${map(0,y)[1]+4}" text-anchor="end" font-size="12">${y}</text>`).join('')}<g clip-path="url(#linear-clip)"><line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="chart-curve"/></g><circle cx="${yInt[0]}" cy="${yInt[1]}" r="5" fill="#087858"/><text x="${yInt[0]+8}" y="${yInt[1]-6}" font-size="12" fill="#087858" font-weight="700">A(0; ${fmt(b)})</text>${xInt?`<circle cx="${xInt[0]}" cy="${xInt[1]}" r="5" fill="#d94e48"/><text x="${xInt[0]-8}" y="${xInt[1]+18}" font-size="12" fill="#d94e48" font-weight="700">B(${fmt(model.root)}; 0)</text>`:''}`);
   const signStr=b<0?`− ${fmt(Math.abs(b))}`:`+ ${fmt(b)}`;
   result.textContent=`Phương trình: y = ${fmt(a)}x ${signStr}. Hệ số góc a = ${fmt(a)} ${a>0?'> 0 (đồng biến, đồ thị dốc lên)':a<0?'< 0 (nghịch biến, đồ thị dốc xuống)':'= 0 (hàm hằng)'}. Cắt Oy tại A(0; ${fmt(b)})${model.root!==null?`, cắt Ox tại B(${fmt(model.root)}; 0)`:''}.`;
  };
  stage.append(chart,controls,prediction,check,feedback,result);
  inputs.forEach(({input})=>input.addEventListener('input',update));update();
 }else if(root.dataset.exploration==='equation-balance'){
  const chart=document.createElement('div');chart.className='exploration-chart';
  const choices=document.createElement('div');choices.className='exploration-choices';
  let currentEq={a:2,b:3,c:11};let currentStep=0;
  const equations=[
   {a:2,b:3,c:11,label:'2x + 3 = 11'},
   {a:3,b:-6,c:12,label:'3x − 6 = 12'},
   {a:4,b:8,c:24,label:'4x + 8 = 24'},
   {a:1,b:-7,c:5,label:'x − 7 = 5'}
  ];
  for(const eq of equations){
   choices.append(button(eq.label,()=>{currentEq=eq;currentStep=0;update();}));
  }
  const actions=document.createElement('div');actions.className='exploration-choices';
  actions.append(
   button('1. Chuyển vế & đổi dấu',()=>{currentStep=1;update();}),
   button('2. Chia cả 2 vế để tìm x',()=>{currentStep=2;update();}),
   button('↺ Đặt lại',()=>{currentStep=0;update();})
  );
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const {a,b,c}=currentEq;
   const model=equationBalance(a,b,c);
   const leftItems=currentStep===0?`${a}x  ${b>=0?'+ '+b:'− '+Math.abs(b)}`:`${a}x`;
   const rightItems=currentStep===0?`${c}`:currentStep===1?`${c} ${b>=0?'− '+b:'+ '+Math.abs(b)} = ${model.transferred}`:`x = ${model.solution}`;
   chart.innerHTML=svg(`<path class="chart-axis" d="M120 190H440M280 190V255M230 255H330" stroke-width="4"/><polygon points="280,190 274,140 286,140" fill="#087858"/><rect x="80" y="170" width="120" height="20" rx="6" fill="#ee786a"/><line x1="140" y1="170" x2="140" y2="190" class="chart-axis"/><rect x="360" y="170" width="120" height="20" rx="6" fill="#087858"/><line x1="420" y1="170" x2="420" y2="190" class="chart-axis"/><rect x="90" y="115" width="100" height="50" rx="8" fill="#fdf0ed" stroke="#ee786a" stroke-width="2"/><text x="140" y="146" text-anchor="middle" font-size="16" font-weight="700" fill="#d94e48">${leftItems}</text><rect x="370" y="115" width="100" height="50" rx="8" fill="#edf9f4" stroke="#087858" stroke-width="2"/><text x="420" y="146" text-anchor="middle" font-size="16" font-weight="700" fill="#087858">${rightItems}</text><text x="280" y="75" text-anchor="middle" font-size="20" font-weight="700">${currentStep===0?`${a}x ${b>=0?'+ '+b:'− '+Math.abs(b)} = ${c}`:currentStep===1?`${a}x = ${c} ${b>=0?'− '+b:'+ '+Math.abs(b)}  ( = ${model.transferred} )`:`x = ${model.solution}`}</text>`);
   if(currentStep===0){
    feedback.textContent='Hai vế đang thăng bằng. Bấm nút 1 để chuyển hạng tử tự do sang vế phải.';
    result.textContent=`Phương trình ban đầu: ${a}x ${b>=0?'+ '+b:'− '+Math.abs(b)} = ${c}. Mục tiêu là đưa các số hạng chứa ẩn x sang vế trái, hằng số sang vế phải.`;
   }else if(currentStep===1){
    feedback.textContent=`Quy tắc chuyển vế: Số hạng ${b>=0?'+'+b:b} chuyển từ vế trái sang vế phải đổi dấu thành ${b>=0?'-'+b:'+'+Math.abs(b)}.`;
    result.textContent=`Ta được: ${a}x = ${model.transferred}. Vế trái chỉ còn chứa ẩn x. Bấm nút 2 để tìm x.`;
   }else{
    feedback.textContent=`Hoàn tất: Chia cả hai vế cho hệ số ${a}, ta được nghiệm x = ${model.solution}.`;
    result.textContent=`Nghiệm của phương trình là x = ${model.solution}. Thử lại: ${a}·(${model.solution}) ${b>=0?'+ '+b:'− '+Math.abs(b)} = ${c} (chính xác!).`;
   }
  };
  stage.append(chart,choices,actions,feedback,result);update();
 }else if(root.dataset.exploration==='derivative-tangent'){
  const chart=document.createElement('div');chart.className='exploration-chart';
  const controls=document.createElement('div');controls.className='exploration-controls';
  const label=document.createElement('label');label.textContent='Tiếp điểm x₀ = ';
  const out=document.createElement('output');out.textContent='-1.5';
  const input=document.createElement('input');input.type='range';input.min=-2.2;input.max=2.2;input.step=0.05;input.value=-1.5;
  input.setAttribute('aria-label','Hoành độ tiếp điểm x0');label.append(out,input);controls.append(label);
  const presets=document.createElement('div');presets.className='exploration-choices';
  for(const [labelTxt,val] of [['Cực đại (x = -1)',-1],['Cực tiểu (x = 1)',1],['Uốn (x = 0)',0],['Đồng biến (x = 1.6)',1.6],['Nghịch biến (x = 0.5)',0.5]]){
   presets.append(button(labelTxt,()=>{input.value=val;update();}));
  }
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const x0=+input.value;out.textContent=fmt(x0);
   const a=1,b=0,c=-3,d=0;
   const model=derivativeTangent(a,b,c,d,x0);
   const originX=280,originY=160,scaleX=80,scaleY=35;
   const map=(x,y)=>[originX+x*scaleX,originY-y*scaleY];
   const curvePoints=[];
   for(let x=-2.4;x<=2.401;x+=.04){
    const [px,py]=map(x,x*x*x-3*x);
    curvePoints.push(`${curvePoints.length?'L':'M'}${px.toFixed(1)} ${py.toFixed(1)}`);
   }
   const [mx,my]=map(x0,model.y0);
   const [tx1,ty1]=map(x0-1.5,model.y0-model.slope*1.5);
   const [tx2,ty2]=map(x0+1.5,model.y0+model.slope*1.5);
   const [cdX,cdY]=map(-1,2);
   const [ctX,ctY]=map(1,-2);
   chart.innerHTML=svg(`<defs><clipPath id="cubic-clip"><rect x="30" y="20" width="500" height="280"/></clipPath></defs><path class="chart-axis" d="M30 160H530M280 20V300"/><polygon points="535,160 525,155 525,165" fill="#8c9e8e"/><polygon points="280,15 275,25 285,25" fill="#8c9e8e"/><text x="535" y="152">x</text><text x="292" y="25">y</text><text x="268" y="175">O</text>${[-2,-1,1,2].map(x=>`<text x="${map(x,0)[0]}" y="178" text-anchor="middle" font-size="12">${x}</text>`).join('')}<g clip-path="url(#cubic-clip)"><path class="chart-curve" d="${curvePoints.join(' ')}"/><line x1="${tx1.toFixed(1)}" y1="${ty1.toFixed(1)}" x2="${tx2.toFixed(1)}" y2="${ty2.toFixed(1)}" stroke="#e06c1b" stroke-width="3"/></g><circle cx="${cdX}" cy="${cdY}" r="4" fill="#087858"/><text x="${cdX-8}" y="${cdY-8}" font-size="11" fill="#087858" font-weight="700">Cực đại (-1; 2)</text><circle cx="${ctX}" cy="${ctY}" r="4" fill="#087858"/><text x="${ctX+8}" y="${ctY+16}" font-size="11" fill="#087858" font-weight="700">Cực tiểu (1; -2)</text><circle cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" r="6" fill="#e06c1b"/><text x="${mx.toFixed(1)}" y="${my>originY?my+20:my-12}" text-anchor="middle" font-size="12" font-weight="700" fill="#e06c1b">M(${fmt(x0)}; ${fmt(model.y0)})</text>`);
   const slopeStr=fmt(model.slope);
   const signDesc=model.sign>0?'Hệ số góc k > 0: Tiếp tuyến dốc lên ⇒ Hàm số ĐỒNG BIẾN trên khoảng này':model.sign<0?'Hệ số góc k < 0: Tiếp tuyến dốc xuống ⇒ Hàm số NGHỊCH BIẾN trên khoảng này':'Hệ số góc k = 0: Tiếp tuyến nằm ngang ⇒ Điểm cực trị / điểm dừng của đồ thị';
   feedback.textContent=signDesc;
   result.textContent=`Khảo sát f(x) = x³ − 3x. Tại x₀ = ${fmt(x0)}: y₀ = ${fmt(model.y0)}, đạo hàm f'(x₀) = 3(${fmt(x0)})² − 3 = ${slopeStr}. Phương trình tiếp tuyến: y = ${slopeStr}x ${model.intercept<0?'− '+fmt(Math.abs(model.intercept)):'+ '+fmt(model.intercept)}.`;
  };
  stage.append(chart,controls,presets,feedback,result);
  input.addEventListener('input',update);update();
 }else if(root.dataset.exploration==='pie-chart'){
  const chart=document.createElement('div');chart.className='exploration-chart';
  const colors=['#3b82f6','#10b981','#f59e0b','#8b5cf6'];
  const labels=['Nhóm A','Nhóm B','Nhóm C','Nhóm D'];
  let values=[40,25,20,15];
  const controls=document.createElement('div');controls.className='exploration-controls';
  const inputs=values.map((v,i)=>{
   const label=document.createElement('label');label.textContent=`${labels[i]}: `;
   const out=document.createElement('output');out.textContent=v;
   const inp=document.createElement('input');inp.type='range';inp.min=5;inp.max=100;inp.step=5;inp.value=v;
   inp.setAttribute('aria-label',labels[i]);
   label.append(out,inp);controls.append(label);
   inp.addEventListener('input',()=>{values[i]=+inp.value;out.textContent=inp.value;update();});
   return {inp,out};
  });
  const presets=document.createElement('div');presets.className='exploration-choices';
  for(const [pName,vals] of [
   ['Cơ cấu năng lượng',[45,25,20,10]],
   ['Chi tiêu gia đình',[40,30,15,15]],
   ['Sách thư viện',[35,25,25,15]],
   ['Thị phần di động',[50,25,15,10]]
  ]){
   presets.append(button(pName,()=>{
    values=[...vals];
    values.forEach((v,i)=>{inputs[i].inp.value=v;inputs[i].out.textContent=v;});
    update();
   }));
  }
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const slicesData=values.map((val,i)=>({label:labels[i],value:val,color:colors[i]}));
   const model=pieChartModel(slicesData);
   const total=values.reduce((s,v)=>s+v,0);
   const cx=180,cy=160,r=110;
   const rad=deg=>deg*Math.PI/180;
   const paths=model.map(s=>{
    if(s.angleDeg<=0)return '';
    if(s.angleDeg>=359.9)return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${s.color}"/>`;
    const x1=cx+r*Math.sin(rad(s.startAngle));
    const y1=cy-r*Math.cos(rad(s.startAngle));
    const x2=cx+r*Math.sin(rad(s.endAngle));
    const y2=cy-r*Math.cos(rad(s.endAngle));
    const large=s.angleDeg>180?1:0;
    return `<path d="M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z" fill="${s.color}" stroke="#fff" stroke-width="2"/>`;
   }).join('');
   const legends=model.map((s,i)=>`
    <g transform="translate(340, ${50+i*55})">
     <rect x="0" y="0" width="18" height="18" rx="4" fill="${s.color}"/>
     <text x="26" y="14" font-size="14" font-weight="700">${s.label}: ${s.percent}%</text>
     <text x="26" y="32" font-size="12" fill="#64748b">Góc: ${s.angleDeg}° | Giá trị: ${s.value}</text>
    </g>
   `).join('');
   chart.innerHTML=svg(`
    <g>${paths}</g>
    <circle cx="${cx}" cy="${cy}" r="38" fill="#fff" stroke="#e2e8f0" stroke-width="2"/>
    <text x="${cx}" y="${cy-4}" text-anchor="middle" font-size="12" fill="#64748b">TỔNG</text>
    <text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="16" font-weight="700">${total}</text>
    <g>${legends}</g>
   `);
   feedback.textContent=`Công thức chuyển đổi: Góc ở tâm α = (p / 100) × 360° = p × 3.6°. Tổng số đo 4 góc luôn bằng đúng 360°.`;
   result.textContent=model.map(s=>`• ${s.label}: Chiếm ${s.percent}% tổng thể (tương ứng góc ở tâm ${s.angleDeg}°)`).join(' | ');
  };
  stage.append(chart,presets,controls,feedback,result);update();
 }else if(root.dataset.exploration==='data-classification'){
  let currentIndex=0;
  const card=document.createElement('div');card.className='exploration-chart';
  const choices=document.createElement('div');choices.className='exploration-choices';
  const actions=document.createElement('div');actions.className='exploration-choices';
  actions.append(button('Bài tập tiếp theo ➡',()=>{currentIndex=(currentIndex+1)%sampleDataItems.length;update();}));
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const item=sampleDataItems[currentIndex];
   card.innerHTML=`
    <div style="background:var(--bg-secondary,#f8fafc);border:2px solid var(--border-color,#e2e8f0);border-radius:12px;padding:24px;text-align:center;max-width:500px;margin:0 auto;">
     <span style="font-size:12px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:1px;">Thử thách phân loại (${currentIndex+1}/${sampleDataItems.length})</span>
     <h3 style="margin:12px 0;font-size:20px;color:var(--text-primary,#0f172a);">${item.name}</h3>
     <p style="margin:0 0 16px;color:#64748b;font-size:14px;">Ví dụ thực tế: <em>${item.example}</em></p>
     <div style="font-size:13px;color:#475569;">Hãy chọn xem dữ liệu trên thuộc loại nào dưới đây:</div>
    </div>
   `;
   choices.innerHTML='';
   const options=[
    {label:'Định tính - Không thứ tự (Nominal)',k:'qualitative',s:'nominal'},
    {label:'Định tính - Có thứ tự (Ordinal)',k:'qualitative',s:'ordinal'},
    {label:'Định lượng - Rời rạc (Discrete)',k:'quantitative',s:'discrete'},
    {label:'Định lượng - Liên tục (Continuous)',k:'quantitative',s:'continuous'}
   ];
   options.forEach(opt=>{
    choices.append(button(opt.label,()=>{
     if(opt.k===item.kind&&opt.s===item.subtype){
      feedback.style.color='#047857';
      feedback.textContent=`🎉 Chính xác! "${item.name}" là dữ liệu ${opt.k==='quantitative'?'ĐỊNH LƯỢNG (số)':'ĐỊNH TÍNH (chữ)'} dạng ${opt.s}.`;
      result.textContent=opt.k==='quantitative'?(opt.s==='discrete'?'Dữ liệu nhận giá trị là các số nguyên/đếm được riêng biệt.':'Dữ liệu nhận giá trị trong một khoảng số thực đo lường liên tục.'):(opt.s==='ordinal'?'Dữ liệu bằng chữ nhưng có thể so sánh thứ bậc cao thấp.':'Dữ liệu bằng chữ, chỉ dùng định danh phân loại không có thứ tự hơn kém.');
     }else{
      feedback.style.color='#b91c1c';
      feedback.textContent=`Chưa chính xác. Hãy suy nghĩ: Dữ liệu này ghi bằng số hay bằng chữ? Có đo lường hay đếm được không? Thử chọn lại nhé!`;
      result.textContent='';
     }
    }));
   });
   feedback.textContent='Chọn 1 trong 4 loại trên để kiểm tra câu trả lời.';feedback.style.color='';
   result.textContent='';
  };
  stage.append(card,choices,actions,feedback,result);update();
 }else if(root.dataset.exploration==='line-chart'){
  const chart=document.createElement('div');chart.className='exploration-chart';
  const months=['T1','T2','T3','T4','T5','T6'];
  let values=[20,35,30,55,70,65];
  let showMA=false;
  const controls=document.createElement('div');controls.className='exploration-controls';
  const inputs=values.map((v,i)=>{
   const label=document.createElement('label');label.textContent=`${months[i]}: `;
   const out=document.createElement('output');out.textContent=v;
   const inp=document.createElement('input');inp.type='range';inp.min=0;inp.max=100;inp.step=5;inp.value=v;
   inp.setAttribute('aria-label',months[i]);label.append(out,inp);controls.append(label);
   inp.addEventListener('input',()=>{values[i]=+inp.value;out.textContent=inp.value;update();});
   return {inp,out};
  });
  const presets=document.createElement('div');presets.className='exploration-choices';
  for(const [pName,vals] of [
   ['Tăng trưởng đều',[15,28,45,60,75,90]],
   ['Biến động theo mùa',[25,60,85,90,50,30]],
   ['Khủng hoảng & Hồi phục',[70,40,15,25,55,80]],
   ['Đi ngang ổn định',[50,52,48,51,49,50]]
  ]){
   presets.append(button(pName,()=>{
    values=[...vals];
    values.forEach((v,i)=>{inputs[i].inp.value=v;inputs[i].out.textContent=v;});
    update();
   }));
  }
  const maBtn=button('Hiện đường trung bình động (MA3)',()=>{
   showMA=!showMA;
   maBtn.textContent=showMA?'Ẩn đường trung bình động (MA3)':'Hiện đường trung bình động (MA3)';
   update();
  });
  presets.append(maBtn);
  const result=document.createElement('p');result.className='exploration-result';
  const update=()=>{
   const pts=values.map((val,i)=>({time:months[i],value:val}));
   const model=lineChartModel(pts);
   const ma=movingAverage(values,3);
   const originX=70,originY=250,plotW=430,plotH=200;
   const stepX=plotW/(months.length-1);
   const map=(idx,val)=>[originX+idx*stepX,originY-(val/100)*plotH];
   const coords=values.map((val,i)=>map(i,val));
   const linePath=coords.map((c,i)=>`${i===0?'M':'L'}${c[0].toFixed(1)} ${c[1].toFixed(1)}`).join(' ');
   const gridLines=[0,25,50,75,100].map(yVal=>{
    const y=originY-(yVal/100)*plotH;
    return `<line x1="${originX}" y1="${y}" x2="${originX+plotW}" y2="${y}" stroke="#e2e8f0" stroke-dasharray="3,3"/><text x="${originX-12}" y="${y+4}" font-size="11" fill="#64748b" text-anchor="end">${yVal}</text>`;
   }).join('');
   const xLabels=months.map((m,i)=>{
    const x=originX+i*stepX;
    return `<text x="${x}" y="${originY+22}" font-size="12" fill="#475569" text-anchor="middle" font-weight="600">${m}</text>`;
   }).join('');
   const dots=coords.map((c,i)=>`
    <circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="5" fill="#2563eb" stroke="#fff" stroke-width="2"/>
    <text x="${c[0].toFixed(1)}" y="${(c[1]-10).toFixed(1)}" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">${values[i]}</text>
   `).join('');
   let maPathSvg='';
   if(showMA){
    const maCoords=[];
    ma.forEach((v,i)=>{if(v!==null)maCoords.push(map(i,v));});
    if(maCoords.length>1){
     const maPath=maCoords.map((c,i)=>`${i===0?'M':'L'}${c[0].toFixed(1)} ${c[1].toFixed(1)}`).join(' ');
     maPathSvg=`<path d="${maPath}" fill="none" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="6,4"/><text x="490" y="45" font-size="12" fill="#e11d48" font-weight="700">MA(3)</text>`;
    }
   }
   chart.innerHTML=svg(`
    ${gridLines}
    <line x1="${originX}" y1="${originY}" x2="${originX+plotW+15}" y2="${originY}" stroke="#475569" stroke-width="2"/>
    <line x1="${originX}" y1="${originY}" x2="${originX}" y2="${originY-plotH-15}" stroke="#475569" stroke-width="2"/>
    <polygon points="${originX+plotW+20},${originY} ${originX+plotW+12},${originY-4} ${originX+plotW+12},${originY+4}" fill="#475569"/>
    <polygon points="${originX},${originY-plotH-20} ${originX-4},${originY-plotH-12} ${originX+4},${originY-plotH-12}" fill="#475569"/>
    <text x="${originX+plotW+22}" y="${originY+4}" font-size="11" fill="#475569">Thời gian</text>
    <text x="${originX}" y="${originY-plotH-25}" font-size="11" fill="#475569" text-anchor="middle">Giá trị</text>
    ${xLabels}
    <path d="${linePath}" fill="none" stroke="#2563eb" stroke-width="3"/>
    ${dots}
    ${maPathSvg}
   `);
   const incText=model.steepestInc?`Tăng nhanh nhất từ ${model.steepestInc.from} đến ${model.steepestInc.to} (+${model.steepestInc.diff})`:'Không có giai đoạn tăng';
   const decText=model.steepestDec?`Giảm mạnh nhất từ ${model.steepestDec.from} đến ${model.steepestDec.to} (${model.steepestDec.diff})`:'Không có giai đoạn giảm';
   feedback.textContent=`Phân tích xu hướng: Giá trị cao nhất = ${model.max}, thấp nhất = ${model.min}, trung bình = ${model.avg}. ${incText}. ${decText}.`;
   result.textContent=model.deltas.map(d=>`${d.from}→${d.to}: ${d.trend} (${d.diff>=0?'+'+d.diff:d.diff}${d.pct!==null?' | '+d.pct+'%':''})`).join('  •  ');
  };
  stage.append(chart,presets,controls,feedback,result);update();
 }
});

