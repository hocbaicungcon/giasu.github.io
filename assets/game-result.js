import {sound} from './puzzle-audio.js';
export function createGameResult(host,{restart,next}){
 const panel=host.closest('.game-panel'),overlay=document.createElement('div');overlay.className='game-result';overlay.hidden=true;
 overlay.innerHTML='<div class="result-confetti" aria-hidden="true">'+Array.from({length:20},(_,i)=>'<i style="--i:'+i+'"></i>').join('')+'</div><div class="result-card"><div class="result-art" aria-hidden="true"></div><h3></h3><p></p><div class="result-actions"><button type="button" data-result-retry>Chơi lại</button><button type="button" data-result-next>Màn tiếp theo →</button><button type="button" data-result-dismiss>Xem lại màn chơi</button></div></div>';
 overlay.setAttribute('role','region');overlay.setAttribute('aria-label','Kết quả trò chơi');host.append(overlay);
 let timer,previousFocus;
 const clear=()=>{clearTimeout(timer);overlay.hidden=true;for(const el of host.children)if(el!==overlay)el.inert=false;};
 overlay.querySelector('[data-result-retry]').addEventListener('click',()=>{clear();restart();});
 overlay.querySelector('[data-result-next]').addEventListener('click',()=>{clear();next?.();});
 overlay.querySelector('[data-result-dismiss]').addEventListener('click',()=>{clear();const focus=previousFocus?.isConnected&&!previousFocus.disabled?previousFocus:panel.querySelector('[data-restart]');focus?.focus();});
 return {clear,show({won,description,hasNext=false,delay=0}){
  clear();timer=setTimeout(()=>{
   previousFocus=document.activeElement;overlay.dataset.outcome=won?'won':'lost';
   overlay.querySelector('h3').textContent=won?'Chiến thắng!':'Chưa thành công!';
   overlay.querySelector('p').textContent=description;
   overlay.querySelector('.result-art').innerHTML=won?'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#f7df9c"/><path d="M30 23h40v21c0 28-40 28-40 0V23Zm0 6H18v10q0 15 18 15m34-25h12v10q0 15-18 15M50 65v14m-15 4h30" fill="#e9ac35" stroke="#a96c21" stroke-width="4" stroke-linejoin="round"/><path d="m50 31 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z" fill="#fff8da"/></svg>':'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#f6dfcf"/><path d="M28 67h45a15 15 0 0 0 1-30 24 24 0 0 0-46-1 16 16 0 0 0 0 31Z" fill="#fff7ef" stroke="#bb8165" stroke-width="3"/><path d="M40 46v4m20-4v4m-18 10q8-7 16 0" fill="none" stroke="#a46e56" stroke-width="3" stroke-linecap="round"/></svg>';
   const nextButton=overlay.querySelector('[data-result-next]');nextButton.hidden=!(won&&hasNext&&next);
   overlay.hidden=false;for(const el of host.children)if(el!==overlay)el.inert=true;
   if(!panel.hidden){sound(won?'win':'lose');(nextButton.hidden?overlay.querySelector('[data-result-retry]'):nextButton).focus({preventScroll:true});overlay.scrollIntoView({block:'nearest',behavior:'instant'});}
  },matchMedia('(prefers-reduced-motion: reduce)').matches?0:delay);
 }};
}
