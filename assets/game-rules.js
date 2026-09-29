/* credit: giasu.ai.vn */
export function moveBoard(board,direction,size=4){
 const result=[...board];let score=0;
 for(let line=0;line<size;line++){
  const indices=Array.from({length:size},(_,i)=>direction==='left'?line*size+i:direction==='right'?line*size+size-1-i:direction==='up'?i*size+line:(size-1-i)*size+line);
  const values=indices.map(i=>board[i]).filter(Boolean),merged=[];
  for(let i=0;i<values.length;i++){if(values[i]===values[i+1]){const n=values[i]*2;merged.push(n);score+=n;i++;}else merged.push(values[i]);}
  indices.forEach((index,i)=>result[index]=merged[i]||0);
 }
 return {board:result,score,changed:result.some((v,i)=>v!==board[i])};
}

const crazyNumber=v=>typeof v==='number'&&v>0;
const crazySpecial=v=>typeof v==='string'&&/^(mul|div|bomb|mystery|wild|swap)/.test(v);
const parseCrazy=v=>{
 if(!crazySpecial(v))return null;
 const clean=v.replace(/:life\d+$/,'');
 if(clean.startsWith('bomb'))return {kind:'bomb',power:0,wide:false,timer:Number(clean.split(':')[1])||5};
 if(clean==='mystery'||clean==='wild'||clean==='swap')return {kind:clean,power:0,wide:false};
 const [kind,power,wide]=clean.split(':');
 return {kind,power:Number(power)||2,wide:wide==='wide'};
};
const makeCrazy=(kind,power=2,wide=false)=>kind==='bomb'?'bomb:5':['mystery','wild','swap'].includes(kind)?kind:`${kind}:${power}${wide?':wide':''}`;

function crazyIndices(direction,line,size){
 return Array.from({length:size},(_,i)=>direction==='left'?line*size+i:direction==='right'?line*size+size-1-i:direction==='up'?i*size+line:(size-1-i)*size+line);
}
function crazyNeighbors(index,size){
 const r=Math.floor(index/size),c=index%size,out=[];
 for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){
  if(!dr&&!dc)continue;
  const rr=r+dr,cc=c+dc;
  if(rr>=0&&rr<size&&cc>=0&&cc<size)out.push(rr*size+cc);
 }
 return out;
}
function crazySides(index,direction,size){
 const r=Math.floor(index/size),c=index%size;
 const cells=(direction==='left'||direction==='right')?[[r-1,c],[r+1,c]]:[[r,c-1],[r,c+1]];
 return cells.filter(([rr,cc])=>rr>=0&&rr<size&&cc>=0&&cc<size).map(([rr,cc])=>rr*size+cc);
}
function applyCrazy(board,index,special){
 const v=board[index];
 if(!crazyNumber(v))return 0;
 if(special.kind==='mul'){board[index]=v*special.power;return board[index];}
 if(special.kind==='div'){
  const n=v/special.power;
  board[index]=n<2?0:n;
 }
 return 0;
}
function sameSpecial(a,b){
 const x=parseCrazy(a),y=parseCrazy(b);
 return x&&y&&x.kind===y.kind&&x.power===y.power&&x.wide===y.wide;
}

export function moveCrazyBoard(input,direction,size=4){
 const board=[...input],before=[...input];
 let score=0,crazyTriggered=false,effects=[],crazyEvents=[];
 const opposite=(a,b)=>a&&b&&((a.kind==='mul'&&b.kind==='div')||(a.kind==='div'&&b.kind==='mul'));
 const reduceOpposite=(a,b)=>{
  const ma=a.kind==='mul'?a.power:b.power,di=a.kind==='div'?a.power:b.power;
  if(ma===di)return 0;
  if(ma>di)return makeCrazy('mul',ma/di,Boolean(a.wide||b.wide));
  return makeCrazy('div',di/ma,Boolean(a.wide||b.wide));
 };
 const resolveMystery=()=>{const r=Math.random();return r<.4?makeCrazy('mul',2):r<.8?makeCrazy('div',2):makeCrazy('bomb');};

 for(let line=0;line<size;line++){
  const idx=crazyIndices(direction,line,size);
  let vals=idx.map(i=>board[i]).filter(Boolean);
  const out=[];
  for(let i=0;i<vals.length;i++){
   let a=vals[i],b=vals[i+1];

   if(a==='mystery'){const reveal=resolveMystery();crazyEvents.push({kind:'mystery',cell:idx[Math.min(out.length,idx.length-1)],label:reveal});a=reveal;}
   if(b==='mystery'){const reveal=resolveMystery();crazyEvents.push({kind:'mystery',cell:idx[Math.min(out.length+1,idx.length-1)],label:reveal});b=reveal;}

   // Bomb destroys any occupied tile it collides with. Bomb + bomb = 3x3 explosion.
   if(a?.startsWith?.('bomb')&&b!==undefined){
    if(b?.startsWith?.('bomb')){out.push('bombpair');crazyEvents.push({kind:'bombpair',cell:idx[Math.min(out.length,idx.length-1)]});}
    else crazyEvents.push({kind:'bomb',cell:idx[Math.min(out.length,idx.length-1)]});
    crazyTriggered=true;i++;continue;
   }
   if(b?.startsWith?.('bomb')&&a!==undefined){
    if(a?.startsWith?.('bomb')){out.push('bombpair');crazyEvents.push({kind:'bombpair',cell:idx[Math.min(out.length,idx.length-1)]});}
    else crazyEvents.push({kind:'bomb',cell:idx[Math.min(out.length,idx.length-1)]});
    crazyTriggered=true;i++;continue;
   }

   // Wild copies an adjacent number. It becomes that number; no instant double.
   if(a==='wild'&&crazyNumber(b)){out.push(b);crazyEvents.push({kind:'wild',cell:idx[Math.min(out.length-1,idx.length-1)],value:b});crazyTriggered=true;i++;continue;}
   if(b==='wild'&&crazyNumber(a)){out.push(a);crazyEvents.push({kind:'wild',cell:idx[Math.min(out.length-1,idx.length-1)],value:a});crazyTriggered=true;i++;continue;}

   // Swap reverses itself with the impacted numeric tile.
   if(a==='swap'&&crazyNumber(b)){out.push(b,'swap');crazyEvents.push({kind:'swap',cell:idx[Math.min(out.length-1,idx.length-1)]});crazyTriggered=true;i++;continue;}
   if(b==='swap'&&crazyNumber(a)){out.push('swap',a);crazyEvents.push({kind:'swap',cell:idx[Math.min(out.length-2,idx.length-1)]});crazyTriggered=true;i++;continue;}

   if(b!==undefined&&crazyNumber(a)&&crazyNumber(b)&&a===b){
    const n=a*2;out.push(n);score+=n;i++;continue;
   }

   if(b!==undefined&&crazySpecial(a)&&crazySpecial(b)){
    const sa=parseCrazy(a),sb=parseCrazy(b);
    // Opposing multiplier/divider powers cancel or reduce.
    if(opposite(sa,sb)){
     const reduced=reduceOpposite(sa,sb);if(reduced)out.push(reduced);
     crazyEvents.push({kind:'cancel',cell:idx[Math.min(out.length-1,idx.length-1)],label:reduced||'0'});crazyTriggered=true;i++;continue;
    }
    // Same ×/÷ family upgrades only when same width; cap at 8.
    if(sa.kind===sb.kind&&['mul','div'].includes(sa.kind)&&sa.power===sb.power&&sa.wide===sb.wide){
     const upgraded=makeCrazy(sa.kind,Math.min(8,sa.power*2),sa.wide);out.push(upgraded);crazyEvents.push({kind:'upgrade',cell:idx[Math.min(out.length-1,idx.length-1)],label:upgraded});crazyTriggered=true;i++;continue;
    }
   }
   out.push(a);
  }
  idx.forEach((cell,p)=>board[cell]=out[p]||0);
 }

 for(let i=0;i<board.length;i++)if(board[i]==='bombpair'){
  board[i]=0;for(const n of crazyNeighbors(i,size))board[n]=0;crazyEvents.push({kind:'bombpair',cell:i});crazyTriggered=true;
 }

 // × / ÷ contacts.
 for(let line=0;line<size;line++){
  const idx=crazyIndices(direction,line,size);
  for(let p=0;p<idx.length-1;p++){
   const front=idx[p],back=idx[p+1],a=board[front],b=board[back];
   if(!a||!b)continue;
   if(crazyNumber(a)&&crazySpecial(b)&&['mul','div'].includes(parseCrazy(b)?.kind)){
    const s=parseCrazy(b),beforeValue=board[front];board[back]=0;score+=applyCrazy(board,front,s);effects.push({cell:front,kind:s.kind,power:s.power,before:beforeValue,after:board[front]});
    effects[effects.length-1].after=board[front];if(s.wide)for(const side of crazySides(front,direction,size))applyCrazy(board,side,s);
    crazyTriggered=true;
   }else if(crazySpecial(a)&&['mul','div'].includes(parseCrazy(a)?.kind)&&crazyNumber(b)){
    const s=parseCrazy(a),beforeValue=b;board[front]=b;board[back]=0;score+=applyCrazy(board,front,s);effects.push({cell:front,kind:s.kind,power:s.power,before:beforeValue,after:null});
    if(s.wide)for(const side of crazySides(front,direction,size))applyCrazy(board,side,s);
    crazyTriggered=true;
   }
  }
 }

 // Pack.
 for(let line=0;line<size;line++){
  const idx=crazyIndices(direction,line,size),vals=idx.map(i=>board[i]).filter(Boolean);
  idx.forEach((cell,p)=>board[cell]=vals[p]||0);
 }

 // Bomb reaching the wall in the swipe direction self-destructs.
 for(let line=0;line<size;line++){
  const wall=crazyIndices(direction,line,size)[0];
  if(board[wall]?.startsWith?.('bomb')){board[wall]=0;crazyEvents.push({kind:'bomb',cell:wall});crazyTriggered=true;}
 }

 // Countdown/lifetime: bomb 5→1 then explodes; other Crazy tiles expire after 5 idle moves.
 for(let i=0;i<board.length;i++){
  const v=board[i];if(!crazySpecial(v))continue;
  if(v.startsWith('bomb:')){
   const t=(Number(v.split(':')[1])||5)-1;
   if(t<=0){board[i]=0;for(const n of crazyNeighbors(i,size))board[n]=0;crazyEvents.push({kind:'bombpair',cell:i});crazyTriggered=true;}
   else board[i]=`bomb:${t}`;
  }else if(!/:(life\d+)$/.test(v)){
   if(['mystery','wild','swap'].includes(v))board[i]=`${v}:life4`;
   else board[i]=`${v}:life4`;
  }else{
   const life=Number(v.match(/:life(\d+)$/)?.[1]||4)-1;
   const base=v.replace(/:life\d+$/,'');
   if(life<=0){board[i]=0;crazyEvents.push({kind:'expire',cell:i});}else board[i]=`${base}:life${life}`;
  }
 }
 return {board,score,changed:board.some((v,i)=>v!==before[i]),crazyTriggered,effects,crazyEvents};
}
export function canMoveCrazy(board,size=4){
 if(board.some(v=>!v))return true;
 for(let r=0;r<size;r++)for(let c=0;c<size;c++){
  const a=board[r*size+c];
  for(const [rr,cc] of [[r,c+1],[r+1,c]]){
   if(rr>=size||cc>=size)continue;
   const b=board[rr*size+cc];
   if(crazyNumber(a)&&crazyNumber(b)&&a===b)return true;
   if(crazySpecial(a)||crazySpecial(b))return true;
  }
 }
 return false;
}
export function makeCrazyTile(){
 const r=Math.random();
 if(r<.22)return makeCrazy('mul',2);
 if(r<.32)return makeCrazy('mul',2,true);
 if(r<.54)return makeCrazy('div',2);
 if(r<.64)return makeCrazy('div',2,true);
 if(r<.78)return makeCrazy('bomb');
 if(r<.86)return 'mystery';
 if(r<.93)return 'swap';
 return 'wild';
}

export const canMove=(board,size=4)=>['left','right','up','down'].some(d=>moveBoard(board,d,size).changed);
export function crossRiver(state,passenger){
 const next={...state};if(passenger&&state[passenger]!==state.person)return {state,error:'Hành khách không ở cùng bờ với bạn.'};
 next.person=1-next.person;if(passenger)next[passenger]=next.person;
 const danger=next.goat!==next.person&&(next.wolf===next.goat||next.cabbage===next.goat);
 return {state:next,lost:danger,won:!danger&&Object.values(next).every(v=>v===1)};
}
export function scoreWord(answer,guess){
 const result=Array(5).fill('absent'),remaining={};
 for(let i=0;i<5;i++){if(answer[i]===guess[i])result[i]='correct';else remaining[answer[i]]=(remaining[answer[i]]||0)+1;}
 for(let i=0;i<5;i++)if(result[i]!=='correct'&&remaining[guess[i]]>0){result[i]='present';remaining[guess[i]]--;}
 return result;
}
export const words='APPLE BEACH BRAIN BREAD BRICK BRING BROWN BRUSH CHAIR CHARM CHASE CHEER CHESS CHEST CHILD CLEAN CLEAR CLIMB CLOCK CLOUD COAST COUNT CRANE CREAM DANCE DREAM DRINK DRIVE EARTH ENJOY EQUAL EVERY FAITH FIELD FIRST FLAME FLOAT FLOOR FLOWER FOCUS FORCE FRAME FRESH FRUIT FUNNY GHOST GIANT GLASS GLOBE GRACE GRAPE GRASS GREAT GREEN GROUP HAPPY HEART HONEY HORSE HOUSE HUMAN IDEAL IMAGE JUICE KNIFE LAUGH LEARN LEMON LIGHT LUNCH MAGIC MANGO MARCH MATCH METAL MIGHT MONEY MONTH MOTOR MOUSE MOUTH MUSIC NIGHT NURSE OCEAN OFFER ORDER OTHER PAINT PAPER PARTY PEACE PHONE PIANO PILOT PLACE PLANE PLANT PLATE POINT POWER PRICE PRIDE PRIME PRINT PROUD QUEEN QUICK QUIET RADIO RAISE REACH READY RIGHT RIVER ROBOT ROUND ROYAL SCALE SCORE SENSE SEVEN SHADE SHAPE SHARE SHARK SHEEP SHEET SHELF SHELL SHINE SHIRT SHOES SHORT SIGHT SKILL SLEEP SMALL SMART SMILE SNAKE SOLAR SOLID SOUND SOUTH SPACE SPEAK SPEED SPELL SPICE SPORT STAGE STAND STARS START STEAM STEEL STILL STONE STORE STORM STORY STUDY SUGAR SWEET TABLE TEACH THANK THEIR THERE THESE THING THINK THREE TIGER TODAY TOOTH TOUCH TOWER TRACK TRAIN TREAT TREES TRICK TRUCK TRUST TWICE UNDER UNITY UNTIL UPPER VALUE VIDEO VISIT VOICE WATCH WATER WHEEL WHERE WHICH WHITE WHOLE WOMAN WORLD WRITE WRONG YOUNG'.split(' ').filter(w=>w.length===5);
