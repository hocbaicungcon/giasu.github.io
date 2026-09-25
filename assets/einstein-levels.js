export const einsteinGroups={
 color:{label:'Màu nhà',options:['Vàng','Xanh dương','Đỏ','Xanh lá','Trắng']},
 nation:{label:'Quốc tịch',options:['Na Uy','Đan Mạch','Anh','Đức','Thụy Điển']},
 drink:{label:'Đồ uống',options:['Nước lọc','Trà','Sữa','Cacao','Nước cam']},
 pet:{label:'Thú cưng',options:['Mèo','Ngựa','Chim','Cá','Chó']},
 hobby:{label:'Sở thích',options:['Chơi đàn','Đọc sách','Vẽ tranh','Đi bộ','Cắm trại']}
};
const baseSolution=Object.fromEntries(Object.entries(einsteinGroups).map(([group,{options}])=>[group,[...options]]));
const basePictures=[
 [['nation','Anh'],'=',['color','Đỏ']],
 [['nation','Thụy Điển'],'=',['pet','Chó']],
 [['nation','Đan Mạch'],'=',['drink','Trà']],
 [['color','Xanh lá'],'→',['color','Trắng']],
 [['color','Xanh lá'],'=',['drink','Cacao']],
 [['hobby','Vẽ tranh'],'=',['pet','Chim']],
 [['color','Vàng'],'=',['hobby','Chơi đàn']],
 [3,'=',['drink','Sữa']],
 [1,'=',['nation','Na Uy']],
 [['hobby','Đọc sách'],'↔',['pet','Mèo']],
 [['pet','Ngựa'],'↔',['hobby','Chơi đàn']],
 [['hobby','Cắm trại'],'=',['drink','Nước cam']],
 [['nation','Đức'],'=',['hobby','Đi bộ']],
 [['nation','Na Uy'],'↔',['color','Xanh dương']],
 [['hobby','Đọc sách'],'↔',['drink','Nước lọc']]
];
const randomFrom=seed=>()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
function shuffled(items,random){const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
const subject=([group,value])=>({color:`Nhà màu ${value.toLowerCase()}`,nation:`Người ${value}`,drink:`Người uống ${value.toLowerCase()}`,pet:`Người nuôi ${value.toLowerCase()}`,hobby:`Người thích ${value.toLowerCase()}`})[group];
function clueText(index,[a,relation,b]){
 const A=typeof a==='number'?a:a[1],B=b[1];
 switch(index){
  case 0:return `Người ${A} sống trong ngôi nhà màu ${B.toLowerCase()}.`;
  case 1:return `Người ${A} nuôi ${B.toLowerCase()}.`;
  case 2:return `Người ${A} uống ${B.toLowerCase()}.`;
  case 3:return `Nhà màu ${A.toLowerCase()} nằm ngay bên ${relation==='→'?'trái':'phải'} nhà màu ${B.toLowerCase()}.`;
  case 4:return `Người ở nhà màu ${A.toLowerCase()} uống ${B.toLowerCase()}.`;
  case 5:return `Người thích ${A.toLowerCase()} nuôi ${B.toLowerCase()}.`;
  case 6:return `Người ở nhà màu ${A.toLowerCase()} thích ${B.toLowerCase()}.`;
  case 7:return `Ngôi nhà thứ ${A} uống ${B.toLowerCase()}.`;
  case 8:return `Người ${B} sống ở ngôi nhà thứ ${A}.`;
  case 9:return `Người thích ${A.toLowerCase()} sống cạnh người nuôi ${B.toLowerCase()}.`;
  case 10:return `Người nuôi ${A.toLowerCase()} sống cạnh người thích ${B.toLowerCase()}.`;
  case 11:return `Người thích ${A.toLowerCase()} uống ${B.toLowerCase()}.`;
  case 12:return `Người ${A} thích ${B.toLowerCase()}.`;
  case 13:return `Người ${A} sống cạnh ngôi nhà màu ${B.toLowerCase()}.`;
  case 14:return `Người thích ${A.toLowerCase()} sống cạnh người uống ${B.toLowerCase()}.`;
  default:return `${subject(a)} ở cùng nhà với ${subject(b).toLowerCase()}.`;
 }
}
function makeLevel(index){
 const random=randomFrom(index*7919+407);
 const mirror=index>0&&index%2===0;
 const cache={};
 const mapping=Object.fromEntries(Object.entries(einsteinGroups).map(([group,{options}])=>[group,new Map(options.map((old,i)=>[old,index===0?old:shuffledOptions(group)[i]]))]));
 function shuffledOptions(group){if(!cache[group])cache[group]=shuffled(einsteinGroups[group].options,random);return cache[group];}
 function mapEntry(entry){return typeof entry==='number'?(mirror?6-entry:entry):[entry[0],mapping[entry[0]].get(entry[1])];}
 const solution=Object.fromEntries(Object.entries(baseSolution).map(([group,items])=>[group,(mirror?[...items].reverse():items).map(value=>mapping[group].get(value))]));
 const clues=basePictures.map((picture,i)=>{const mapped=[mapEntry(picture[0]),mirror&&picture[1]==='→'?'←':picture[1],mapEntry(picture[2])];return {picture:mapped,text:clueText(i,mapped)};});
 // Retain the original constraints; add varied spatial clues derived from the answer.
 const categories=Object.keys(einsteinGroups);
 const entryAt=house=>{const group=categories[Math.floor(random()*categories.length)];return [group,solution[group][house]];};
 for(const relation of ['<','>','→','←','↔','between']){
  let left=Math.floor(random()*4),right=left+1;
  if(relation==='<'||relation==='>'){left=Math.floor(random()*3);right=left+2+Math.floor(random()*(3-left));}
  let a=entryAt(left),b=entryAt(right),picture,text;
  if(relation==='>'||relation==='←')[a,b]=[b,a];
  if(relation==='between'){
   const middle=1+Math.floor(random()*3);a=entryAt(middle);b=entryAt(Math.floor(random()*middle));const c=entryAt(middle+1+Math.floor(random()*(4-middle)));
   picture=[a,relation,b,c];text=`${subject(a)} ở giữa ${subject(b).toLowerCase()} và ${subject(c).toLowerCase()} (không nhất thiết liền kề).`;
  }else{
   picture=[a,relation,b];const label={'<':'ở bên trái (không nhất thiết liền kề)','>':'ở bên phải (không nhất thiết liền kề)','→':'ở ngay bên trái','←':'ở ngay bên phải','↔':'ở ngay cạnh'}[relation];
   text=`${subject(a)} ${label} ${subject(b).toLowerCase()}.`;
  }
  clues.push({picture,text});
 }
 const count=index<30?4:index<70?3:2;
 const positions=shuffled(categories.flatMap(group=>Array.from({length:5},(_,house)=>[group,house])),random);
 const given=index===0?[['nation',0,solution.nation[0]],['color',1,solution.color[1]],['drink',2,solution.drink[2]],['pet',4,solution.pet[4]]]:positions.slice(0,count).map(([group,house])=>[group,house,solution[group][house]]);
 return {solution,clues:index===0?clues:shuffled(clues,random),given,difficulty:index<30?'Dễ':index<70?'Vừa':'Khó'};
}
function makeExtraLevel(index){
 const random=randomFrom(index*13007+991),tier=Math.min(3,Math.floor(((index-100)%100)/25)),base=makeLevel(index);
 const categories=Object.keys(einsteinGroups),destinations=shuffled(categories,random);
 const translate=Object.fromEntries(categories.map((group,i)=>[group,destinations[i]]));
 const mapEntry=entry=>typeof entry==='number'?entry:[translate[entry[0]],einsteinGroups[translate[entry[0]]].options[einsteinGroups[entry[0]].options.indexOf(entry[1])]];
 const solution=Object.fromEntries(categories.map(group=>[translate[group],base.solution[group].map(value=>mapEntry([group,value])[1])]));
 const labels={'=':'ở cùng nhà với','<':'ở bên trái','>':'ở bên phải','→':'ở ngay bên trái','←':'ở ngay bên phải','↔':'ở ngay cạnh','≠':'không ở cùng nhà với','notAdjacent':'không ở cạnh','distance2':'cách đúng hai vị trí (có một nhà ở giữa) so với','distance3':'cách đúng ba vị trí (có hai nhà ở giữa) so với','edge':'ở hai đầu dãy cùng với'};
 const describe=([a,relation,b,c])=>relation==='between'||relation==='sandwich'?`${subject(a)} ở giữa ${subject(b).toLowerCase()} và ${subject(c).toLowerCase()}${relation==='sandwich'?' và sát cả hai':''}.`:typeof a==='number'?`${subject(b)} ở nhà số ${a}.`:`${subject(a)} ${labels[relation]} ${subject(b).toLowerCase()}.`;
 // Keep the complete original clue chain; change category roles as well as symbols.
 const clues=[];
 const mirror=index%2===0;
 const mappedBase=entry=>typeof entry==='number'?(mirror?6-entry:entry):mapEntry([entry[0],base.solution[entry[0]][mirror?4-baseSolution[entry[0]].indexOf(entry[1]):baseSolution[entry[0]].indexOf(entry[1])]]);
 for(const [a,relation,b] of basePictures){const picture=[mappedBase(a),mirror&&relation==='→'?'←':relation,mappedBase(b)];clues.push({picture,text:describe(picture)});}
 const entryAt=position=>{const group=categories[Math.floor(random()*5)];return [group,solution[group][position]];};
 const pool=tier===0?['distance2','↔','→','<','between','=']:tier===1?['distance2','≠','notAdjacent','between','>']:tier===2?['distance3','notAdjacent','sandwich','≠']:['edge','distance3','sandwich','notAdjacent'];
 for(const relation of pool){let left=Math.floor(random()*4),right=left+1,c;
  if(relation==='distance2'||relation==='notAdjacent'){left=Math.floor(random()*3);right=left+2;}
  if(relation==='distance3'){left=Math.floor(random()*2);right=left+3;}
  if(relation==='edge'){left=0;right=4;}
  if(relation==='=')right=left;
  if(relation==='>')[left,right]=[right,left];
  if(relation==='between'||relation==='sandwich'){left=1+Math.floor(random()*3);right=left-1;c=entryAt(left+1);}
  const picture=[entryAt(left),relation,entryAt(right)];if(c)picture.push(c);
  // A same-house clue must connect different categories.
  if(relation==='='&&picture[0][0]===picture[2][0]){const group=categories[(categories.indexOf(picture[0][0])+1)%5];picture[2]=[group,solution[group][right]];}
  clues.push({picture,text:describe(picture)});
 }
 const given=shuffled(categories.flatMap(group=>solution[group].map((value,house)=>[group,house,value])),random).slice(0,[6,4,2,0][tier]);
 return {solution,clues:shuffled(clues,random),given,difficulty:['Dễ','Vừa','Khó','Chuyên gia'][tier]};
}
export const einsteinLevels=Array.from({length:1001},(_,index)=>index<100?makeLevel(index):makeExtraLevel(index));

export function matchesEinsteinClue(values,[a,relation,b,c]){
 const position=entry=>typeof entry==='number'?entry-1:values[entry[0]].indexOf(entry[1]);
 const A=position(a),B=position(b),C=c?position(c):-1;
 if(A<0||B<0)return false;
 switch(relation){
  case '=':return A===B;
  case '<':return A<B;
  case '>':return A>B;
  case '→':return A+1===B;
  case '←':return A-1===B;
  case '↔':return Math.abs(A-B)===1;
  case '≠':return A!==B;
  case 'notAdjacent':return A!==B&&Math.abs(A-B)!==1;
  case 'distance2':return Math.abs(A-B)===2;
  case 'distance3':return Math.abs(A-B)===3;
  case 'edge':return Math.min(A,B)===0&&Math.max(A,B)===4;
  case 'sandwich':return C>=0&&Math.abs(A-B)===1&&Math.abs(A-C)===1&&B!==C;
  case 'between':return C>=0&&((B<A&&A<C)||(C<A&&A<B));
  default:return false;
 }
}
