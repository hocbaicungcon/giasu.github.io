// A tactical recommendation, shared by the computer player and hint button.
export function suggestCaroMove(cells,size,player){
 const opponent=player==='X'?'O':'X',occupied=cells.flatMap((value,i)=>value?[i]:[]);
 if(!occupied.length)return Math.floor(size/2)*size+Math.floor(size/2);
 const candidates=new Set();
 for(const index of occupied)for(let dr=-2;dr<=2;dr++)for(let dc=-2;dc<=2;dc++){
  const r=Math.floor(index/size)+dr,c=index%size+dc;
  if(r>=0&&r<size&&c>=0&&c<size&&!cells[r*size+c])candidates.add(r*size+c);
 }
 function evaluate(index,mark){
  let total=0,win=false,threats=0;
  for(const [dr,dc] of [[1,0],[0,1],[1,1],[1,-1]]){
   let length=1,open=0;
   for(const sign of [-1,1]){
    let r=Math.floor(index/size)+dr*sign,c=index%size+dc*sign;
    while(r>=0&&r<size&&c>=0&&c<size&&cells[r*size+c]===mark){length++;r+=dr*sign;c+=dc*sign;}
    if(r>=0&&r<size&&c>=0&&c<size&&!cells[r*size+c])open++;
   }
   if(length>=5)win=true;
   if(length===4&&open)threats++;
   total+=!open?0:length===4?(open===2?50000:12000):length===3?(open===2?3000:180):length===2?(open===2?120:20):open;
  }
  return {win,score:total+(threats>1?60000:0)};
 }
 let best=-Infinity,choice=null;
 for(const index of candidates){
  const own=evaluate(index,player),enemy=evaluate(index,opponent);
  const centre=(size-1)/2,distance=Math.abs(Math.floor(index/size)-centre)+Math.abs(index%size-centre);
  const score=own.win?1e9:enemy.win?8e8:own.score+enemy.score*.95-distance*.01;
  if(score>best){best=score;choice=index;}
 }
 return choice;
}
