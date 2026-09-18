import {loadData,choose} from './fun-data.js';
const target=document.querySelector('[data-footer-quote]');
try{
 const {count,chunkSize}=await loadData('quotes-meta');let previous=-1;
 try{previous=Number(sessionStorage.getItem('footer-quote')??-1);}catch{}
 const picked=choose(Array.from({length:count},(_,i)=>i),previous), entry={chunk:Math.floor(picked/chunkSize),offset:picked%chunkSize};
 const quote=(await loadData(`quotes-${entry.chunk}`))[entry.offset];
 target.textContent=`“${quote.body.trim()}” — ${quote.author}`;target.lang='en';
 try{sessionStorage.setItem('footer-quote',String(picked));}catch{}
}catch{/* Keep the readable fallback when offline. */}
