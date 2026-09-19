import {riverLevels,waterLevels} from './puzzle-data.js';
export {riverLevels,waterLevels};
export function waterMove(state,action,index,caps=[5,3],destination=1-index){
 const next=[...state];
 if(!Number.isInteger(index)||index<0||index>=caps.length||state.length!==caps.length)return {state:next,changed:false};
 if(action==='fill')next[index]=caps[index];
 else if(action==='empty')next[index]=0;
 else if(action==='pour'&&destination!==index&&Number.isInteger(destination)&&destination>=0&&destination<caps.length){const amount=Math.min(next[index],caps[destination]-next[destination]);next[index]-=amount;next[destination]+=amount;}
 return {state:next,changed:next.some((n,i)=>n!==state[i])};
}
export const waterWon=(state,level)=>level.mode==='total'?state.reduce((a,b)=>a+b,0)===level.target:state.includes(level.target);
export function riverDanger(state,level){
 const unattended=1-state.person,indices=state.positions.map((side,i)=>side===unattended?i:-1).filter(i=>i>=0);
 const find=kind=>indices.find(i=>level.items[i]===kind),goat=find('goat'),wolf=find('wolf'),cabbage=find('cabbage');
 if(goat!==undefined&&wolf!==undefined)return {predator:wolf,prey:goat};
 if(goat!==undefined&&cabbage!==undefined)return {predator:goat,prey:cabbage};
 return null;
}
export function riverMove(state,cargo,level){
 if(new Set(cargo).size!==cargo.length||cargo.length>level.capacity||cargo.some(i=>!Number.isInteger(i)||i<0||i>=state.positions.length||state.positions[i]!==state.person))return {state,error:true};
 const next={person:1-state.person,positions:state.positions.map((side,i)=>cargo.includes(i)?1-side:side)},danger=riverDanger(next,level);
 return {state:next,danger,lost:Boolean(danger),won:!danger&&next.person===1&&next.positions.every(n=>n===1)};
}
export function riverCargoOptions(state,level){
 const available=state.positions.map((s,i)=>s===state.person?i:-1).filter(i=>i>=0),options=[[]];
 for(const i of available)for(const group of [...options])if(group.length<level.capacity)options.push([...group,i]);
 return options;
}
