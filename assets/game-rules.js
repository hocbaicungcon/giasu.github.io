export function moveBoard(board,direction){
 const result=[...board];let score=0;
 for(let line=0;line<4;line++){
  const indices=Array.from({length:4},(_,i)=>direction==='left'?line*4+i:direction==='right'?line*4+3-i:direction==='up'?i*4+line:(3-i)*4+line);
  const values=indices.map(i=>board[i]).filter(Boolean),merged=[];
  for(let i=0;i<values.length;i++){if(values[i]===values[i+1]){const n=values[i]*2;merged.push(n);score+=n;i++;}else merged.push(values[i]);}
  indices.forEach((index,i)=>result[index]=merged[i]||0);
 }
 return {board:result,score,changed:result.some((v,i)=>v!==board[i])};
}
export const canMove=board=>['left','right','up','down'].some(d=>moveBoard(board,d).changed);
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
