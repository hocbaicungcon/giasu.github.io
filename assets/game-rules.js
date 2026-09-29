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
const crazySpecial=v=>typeof v==='string'&&/^(mul|div|bomb)/.test(v);
const parseCrazy=v=>{
 if(!crazySpecial(v))return null;
 if(v==='bomb')return {kind:'bomb',power:0,wide:false};
 const [kind,power,wide]=v.split(':');
 return {kind,power:Number(power)||2,wide:wide==='wide'};
};
const makeCrazy=(kind,power=2,wide=false)=>kind==='bomb'?'bomb':`${kind}:${power}${wide?':wide':''}`;

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
 let score=0;
 for(let line=0;line<size;line++){
  const idx=crazyIndices(direction,line,size);
  let vals=idx.map(i=>board[i]).filter(Boolean);
  const out=[];
  for(let i=0;i<vals.length;i++){
   const a=vals[i],b=vals[i+1];

   // Bomb hits ANY occupied tile in front: number or Crazy tile.
   // Two bombs keep the special 3x3 explosion rule.
   if(a==='bomb'&&b!==undefined){
    if(b==='bomb')out.push('bombpair');
    // Otherwise both bomb and the impacted tile are destroyed.
    i++;
    continue;
   }
   if(b==='bomb'&&a!==undefined){
    if(a==='bomb')out.push('bombpair');
    // Otherwise both impacted tile and bomb are destroyed.
    i++;
    continue;
   }

   if(b!==undefined&&crazyNumber(a)&&crazyNumber(b)&&a===b){
    const n=a*2;out.push(n);score+=n;i++;continue;
   }
   if(b!==undefined&&sameSpecial(a,b)){
    const s=parseCrazy(a);
    out.push(makeCrazy(s.kind,s.power*2,s.wide));
    i++;continue;
   }
   out.push(a);
  }
  idx.forEach((cell,p)=>board[cell]=out[p]||0);
 }

 // Two bombs: destroy center and all 8 surrounding cells.
 for(let i=0;i<board.length;i++)if(board[i]==='bombpair'){
  board[i]=0;
  for(const n of crazyNeighbors(i,size))board[n]=0;
 }

 // Resolve multiplier/divider contacts.
 for(let line=0;line<size;line++){
  const idx=crazyIndices(direction,line,size);
  for(let p=0;p<idx.length-1;p++){
   const front=idx[p],back=idx[p+1],a=board[front],b=board[back];
   if(!a||!b)continue;
   if(crazyNumber(a)&&crazySpecial(b)&&b!=='bomb'){
    const s=parseCrazy(b);board[back]=0;
    score+=applyCrazy(board,front,s);
    if(s.wide)for(const side of crazySides(front,direction,size))applyCrazy(board,side,s);
   }else if(crazySpecial(a)&&a!=='bomb'&&crazyNumber(b)){
    const s=parseCrazy(a);board[front]=b;board[back]=0;
    score+=applyCrazy(board,front,s);
    if(s.wide)for(const side of crazySides(front,direction,size))applyCrazy(board,side,s);
   }
  }
 }

 // Final pack.
 for(let line=0;line<size;line++){
  const idx=crazyIndices(direction,line,size),vals=idx.map(i=>board[i]).filter(Boolean);
  idx.forEach((cell,p)=>board[cell]=vals[p]||0);
 }

 // Bomb touching the wall in the swipe direction self-destructs.
 // idx[0] is always the wall/front cell for the current swipe.
 for(let line=0;line<size;line++){
  const wall=crazyIndices(direction,line,size)[0];
  if(board[wall]==='bomb')board[wall]=0;
 }

 return {board,score,changed:board.some((v,i)=>v!==before[i])};
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
 const roll=Math.random();
 if(roll<.24)return makeCrazy('mul',2);
 if(roll<.36)return makeCrazy('mul',2,true);
 if(roll<.60)return makeCrazy('div',2);
 if(roll<.72)return makeCrazy('div',2,true);
 return 'bomb';
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
