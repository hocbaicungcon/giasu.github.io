/* credit: giasu.ai.vn */
export function futoshikiConflicts(values,n,relations){
 const bad=new Set();
 for(let a=0;a<values.length;a++)if(values[a])for(let b=a+1;b<values.length;b++)if(values[a]===values[b]&&(Math.floor(a/n)===Math.floor(b/n)||a%n===b%n)){bad.add(a);bad.add(b);}
 for(const {a,b,sign} of relations)if(values[a]&&values[b]&&!(sign==='<'?values[a]<values[b]:values[a]>values[b])){bad.add(a);bad.add(b);}
 return bad;
}
export function solveFutoshiki(input,n,relations){
 const values=[...input];if(futoshikiConflicts(values,n,relations).size)return null;
 const allowed=(cell,value)=>{
  for(let k=0;k<n;k++)if(values[Math.floor(cell/n)*n+k]===value||values[k*n+cell%n]===value)return false;
  for(const {a,b,sign} of relations){const left=a===cell?value:values[a],right=b===cell?value:values[b];if((a===cell||b===cell)&&left&&right&&!(sign==='<'?left<right:left>right))return false;}
  return true;
 };
 const search=()=>{let cell=-1,options;
  for(let i=0;i<values.length;i++)if(!values[i]){const choices=Array.from({length:n},(_,k)=>k+1).filter(v=>allowed(i,v));if(!choices.length)return false;if(!options||choices.length<options.length){cell=i;options=choices;if(choices.length===1)break;}}
  if(cell<0)return true;
  for(const value of options){values[cell]=value;if(search())return true;}values[cell]=0;return false;
 };
 return search()?values:null;
}
