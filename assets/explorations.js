import {gcd,divisors,quadratic,tossCoins} from './exploration-models.js';
const fmt=n=>Number(n.toFixed(2)).toLocaleString('vi');
const svg=content=>`<svg viewBox="0 0 560 320" role="img" aria-label="Đồ thị thí nghiệm">${content}</svg>`;
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
 }else{
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
 }
});
