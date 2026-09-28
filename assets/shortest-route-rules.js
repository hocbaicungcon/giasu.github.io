/* credit: giasu.ai.vn */
// The route state records visited roads, not just visited vertices.
export const roadMap={nodes:{A:[48,200],B:[148,56],F:[148,344],G:[345,220],C:[455,56],E:[455,344],D:[610,145]},edges:[['A','B',4],['A','F',5],['A','G',17],['B','F',3],['B','C',8],['B','G',8],['F','G',7],['F','E',10],['G','C',9],['G','E',6],['G','D',18],['C','E',6],['C','D',10],['E','D',12]],start:'A'};
export const towerMap={nodes:{A:[300,45],B:[95,345],C:[515,345],D:[355,250]},edges:[['A','B',10],['A','D',9],['A','C',11],['B','D',11],['B','C',12],['C','D',14]],start:'A'};
export function routeLevel(mode,index){
 if(mode==='dots'){
  const count=Math.min(15,5+Math.floor(index/70));
  const letters='ABCDEFGHIJKLMNO',nodes={};
  for(let i=0;i<count;i++){
   const angle=2*Math.PI*i/count-Math.PI/2;
   const wobble=((index*17+i*31)%9-4)*5;
   nodes[letters[i]]=[Math.round(340+(205+wobble)*Math.cos(angle)),Math.round(200+(140+wobble)*Math.sin(angle))];
  }
  const names=Object.keys(nodes),edges=[];
  for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){
   const [x,y]=nodes[names[i]],[u,v]=nodes[names[j]];
   edges.push([names[i],names[j],Math.max(1,Math.round(Math.hypot(x-u,y-v)/20))]);
  }
  return {nodes,edges,start:names[index%count]};
 }
 const count=Math.min(9,4+Math.floor(index/100)),names='ABCDEFGHI'.slice(0,count).split(''),nodes={};
 for(let i=0;i<count;i++){const angle=2*Math.PI*i/count-Math.PI/2;nodes[names[i]]=[Math.round(340+235*Math.cos(angle)),Math.round(200+150*Math.sin(angle))];}
 const edges=[];
 const add=(i,j)=>{const a=names[i],b=names[j],weight=2+((index*7+i*11+j*17)%15);if(!edges.some(([u,v])=>u===a&&v===b||u===b&&v===a))edges.push([a,b,weight]);};
 for(let i=0;i<count;i++)add(i,(i+1)%count);
 if(mode==='roads'||mode==='limits')for(let i=0;i<Math.min(count-2,6);i++)add((i*3+index)%count,(i*3+index+2)%count);
 if(mode==='towers')for(let i=0;i<count;i++)add(i,(i+2)%count);
 const full=false;
 const start=full?base.start:names[index%names.length];
 if(mode!=='limits')return {nodes,edges,start};
 const goal=names[(index+2)%names.length];
 if(index%2===0)return {nodes,edges,start,goal,via:names[(index+1)%names.length]};
 // Pick a road to close while keeping the destination reachable.
 for(let offset=0;offset<edges.length;offset++){
  const [a,b]=edges[(index+offset)%edges.length],candidate={nodes,edges,start,goal,blocked:[a,b]};
  if(shortestLimitedRoute(candidate))return candidate;
 }
 return {nodes,edges,start,goal,blocked:null};
}
export function routeStep(map,mode,route,next){
 const current=route.at(-1),edge=map.edges.findIndex(([a,b])=>a===current&&b===next||a===next&&b===current);
 if(edge<0)return {error:'Chỉ được đi theo đường nối hai điểm.'};
 if(mode==='dots'&&route.includes(next))return {error:'Mỗi điểm chỉ được nối một lần.'};
 if(mode==='limits'){
  if(map.blocked&&[current,next].every(name=>map.blocked.includes(name)))return {error:'Con đường này đang bị chặn.'};
  if(next===map.goal&&map.via&&!route.includes(map.via))return {error:`Cần ghé ${map.via} trước khi đến ${map.goal}.`};
 }
 if(mode==='towers'){
  if(next===route[0]&&route.length!==Object.keys(map.nodes).length)return {error:'Hãy qua đủ các trụ trước khi trở về.'};
  if(next!==route[0]&&route.includes(next))return {error:'Trụ đã đi qua không thể ghé lại.'};
 }
 const nextRoute=[...route,next],covered=new Set();let cost=0;
 for(let i=1;i<nextRoute.length;i++){
  const id=map.edges.findIndex(([a,b])=>a===nextRoute[i-1]&&b===nextRoute[i]||b===nextRoute[i-1]&&a===nextRoute[i]);
  covered.add(id);cost+=map.edges[id][2];
 }
 const done=mode==='dots'?nextRoute.length===Object.keys(map.nodes).length:mode==='limits'?next===map.goal:next===route[0]&&(mode==='roads'?covered.size===map.edges.length:route.length===Object.keys(map.nodes).length);
 return {route:nextRoute,cost,covered,done};
}
// Dijkstra over (covered-road mask, current vertex) allows repeated roads.
export function shortestRoadRoute(map){
 const names=Object.keys(map.nodes),n=names.length,m=map.edges.length,limit=1<<m,start=names.indexOf(map.start),total=limit*n;
 const dist=new Float64Array(total).fill(Infinity),prev=new Int32Array(total).fill(-1),heap=[];
 const push=(cost,state)=>{heap.push([cost,state]);let i=heap.length-1;while(i){const p=(i-1)>>1;if(heap[p][0]<=cost)break;heap[i]=heap[p];i=p;}heap[i]=[cost,state];};
 const pop=()=>{const head=heap[0],last=heap.pop();if(heap.length){let i=0;while(i*2+1<heap.length){let child=i*2+1;if(child+1<heap.length&&heap[child+1][0]<heap[child][0])child++;if(heap[child][0]>=last[0])break;heap[i]=heap[child];i=child;}heap[i]=last;}return head;};
 dist[start]=0;push(0,start);const goal=(limit-1)*n+start;
 while(heap.length){const [cost,state]=pop();if(cost!==dist[state])continue;if(state===goal)break;const mask=Math.floor(state/n),node=state%n;
  for(let edge=0;edge<m;edge++){const [a,b,w]=map.edges[edge],from=names[node];if(a!==from&&b!==from)continue;const next=(mask|1<<edge)*n+names.indexOf(a===from?b:a),value=cost+w;if(value<dist[next]){dist[next]=value;prev[next]=state;push(value,next);}}
 }
 if(!Number.isFinite(dist[goal]))return null;
 const route=[];for(let state=goal;state>=0;state=prev[state])route.push(names[state%n]);route.reverse();return {cost:dist[goal],route};
}
export function shortestTowerRoute(map){
 const names=Object.keys(map.nodes),start=names.indexOf(map.start),others=names.filter(name=>name!==map.start);let best=null;
 const visit=(route,left,cost)=>{if(!left.length){const edge=map.edges.find(([a,b])=>a===route.at(-1)&&b===map.start||b===route.at(-1)&&a===map.start);if(!edge)return;const total=cost+edge[2];if(!best||total<best.cost)best={cost:total,route:[...route,map.start]};return;}
  for(const next of left){const edge=map.edges.find(([a,b])=>a===route.at(-1)&&b===next||b===route.at(-1)&&a===next);if(edge)visit([...route,next],left.filter(v=>v!==next),cost+edge[2]);}
 };visit([names[start]],others,0);return best;
}

// Dijkstra on (vertex, visited-required-point), respecting any closed road.
export function shortestLimitedRoute(map,from=map.start,viaSeen=false){
 const names=Object.keys(map.nodes),n=names.length,dist=Array(n*2).fill(Infinity),prev=Array(n*2).fill(-1),used=Array(n*2).fill(false);
 const first=names.indexOf(from)+(viaSeen||!map.via||from===map.via?n:0);dist[first]=0;
 for(let turn=0;turn<n*2;turn++){
  let state=-1;for(let i=0;i<n*2;i++)if(!used[i]&&(state<0||dist[i]<dist[state]))state=i;
  if(state<0||!Number.isFinite(dist[state]))break;
  if(names[state%n]===map.goal&&state>=n){const route=[];for(let i=state;i>=0;i=prev[i])route.push(names[i%n]);route.reverse();return {cost:dist[state],route};}
  used[state]=true;const here=names[state%n];
  for(const [a,b,w] of map.edges){if(a!==here&&b!==here||map.blocked&&map.blocked.includes(a)&&map.blocked.includes(b))continue;
   const next=a===here?b:a,flag=state>=n||next===map.via||!map.via;if(next===map.goal&&!flag)continue;const at=names.indexOf(next)+(flag?n:0),cost=dist[state]+w;
   if(cost<dist[at]){dist[at]=cost;prev[at]=state;}
  }
 }
 return null;
}

// Shortest open route from a fixed first point, visiting every dot once.
export function shortestDotRoute(map,from=map.start,visited=[from]){
 const names=Object.keys(map.nodes),weights=Object.fromEntries(map.edges.flatMap(([a,b,w])=>[[`${a}:${b}`,w],[`${b}:${a}`,w]]));
 const remaining=names.filter(name=>!visited.includes(name)),memo=new Map();
 const solve=(at,mask)=>{
  if(!mask)return {cost:0,route:[at]};
  const key=`${at}:${mask}`;if(memo.has(key))return memo.get(key);
  let best=null;
  for(let i=0;i<remaining.length;i++)if(mask&(1<<i)){
   const next=remaining[i],tail=solve(next,mask^(1<<i)),cost=weights[`${at}:${next}`]+tail.cost;
   if(!best||cost<best.cost)best={cost,route:[at,...tail.route]};
  }
  memo.set(key,best);return best;
 };
 return solve(from,(1<<remaining.length)-1);
}
