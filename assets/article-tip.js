import {loadData,choose} from './fun-data.js';
const target=document.querySelector('[data-study-tip]');
if(target)try{
 const {count,chunkSize}=await loadData('tips-meta');let previous=-1;
 try{previous=Number(sessionStorage.getItem('article-tip')??-1);}catch{}
 const picked=choose(Array.from({length:count},(_,i)=>i),previous);
 const tip=(await loadData(`tips-${Math.floor(picked/chunkSize)}`))[picked%chunkSize];
 target.textContent=tip.body;target.lang='en';
 try{sessionStorage.setItem('article-tip',String(picked));}catch{}
}catch{/* Keep a readable tip if the connection fails. */}
