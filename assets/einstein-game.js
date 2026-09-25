import {createGameResult} from './game-result.js';
import {sound} from './puzzle-audio.js';
import {einsteinGroups as groups,einsteinLevels,matchesEinsteinClue} from './einstein-levels.js';

const board=document.getElementById('einstein-board');
if(board){
 let level=0,solution=einsteinLevels[0].solution,given=einsteinLevels[0].given,fixed=new Set();
 const houseColors={'Vàng':'#f2c332','Xanh dương':'#3988d1','Đỏ':'#d94e51','Xanh lá':'#38a570','Trắng':'#ffffff'};
 const svg=body=>`<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">${body}</svg>`;
 const houseIcon=color=>svg(`<path d="M5 22 24 7l19 15-4 5-15-12L9 27Z" fill="${houseColors[color]||'#a9c9be'}" stroke="#53736c" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 24 24 13l14 11v19H10Z" fill="${houseColors[color]||'#e4ede7'}" stroke="#53736c" stroke-width="1.6"/><path d="M20 43V30h8v13" fill="#d4e4d6" stroke="#789b90" stroke-width="1.5"/><path d="M13 27h5v7h-5Zm17 0h5v7h-5Z" fill="#c7e2e4" stroke="#789b90" stroke-width="1.2"/>`);
 const flag=(base,mark)=>svg(`<circle cx="24" cy="24" r="20" fill="${base}" stroke="#b9c7bd" stroke-width="1.3"/><clipPath id="flag-circle"><circle cx="24" cy="24" r="20"/></clipPath><g clip-path="url(#flag-circle)">${mark}</g>`);
 const flags={
  'Na Uy':flag('#c7525c','<path d="M19 3v42M3 23h42" stroke="#fff" stroke-width="9"/><path d="M19 3v42M3 23h42" stroke="#2c5d8d" stroke-width="5"/>'),
  'Đan Mạch':flag('#c74d54','<path d="M19 3v42M3 24h42" stroke="#fff" stroke-width="7"/>'),
  'Anh':flag('#f9f7ee','<path d="M3 24h42M24 3v42" stroke="#bf4a50" stroke-width="8"/>'),
  'Đức':flag('#22282b','<path d="M3 17h42v14H3Z" fill="#bf454b"/><path d="M3 31h42v14H3Z" fill="#e9bd54"/>'),
  'Thụy Điển':flag('#4d85ac','<path d="M19 3v42M3 24h42" stroke="#edcf68" stroke-width="8"/>')
 };
 const drinks={'Nước lọc':'#8bc8de','Trà':'#bb895c','Sữa':'#fffaf0','Cacao':'#754f42','Nước cam':'#e9a75b'};
 const petPaths={
  'Mèo':'<path d="M10 19 9 8l10 6a18 18 0 0 1 10 0l10-6-1 11a16 16 0 1 1-28 0Z"/><path d="M18 26h1m10 0h1M23 31l1 2 1-2M13 31l7 1m15-1-7 1"/>',
  'Ngựa':'<path d="M13 40 9 25l7-16 8 6 8-4 5 8-6 8-2 13Z"/><path d="M16 23h1m-7 4 9 2m10-17 5-5"/>',
  'Chim':'<path d="M8 30c2-12 17-18 27-11 5 4 5 12-1 17-8 6-22 4-26-6Z"/><path d="m33 24 10 3-10 4M18 23c4 7 10 8 16 7m-16 9-2 5m11-5 2 5"/>',
  'Cá':'<path d="M8 24 3 14v20l5-10c9-11 23-12 34 0-11 12-25 11-34 0Z"/><circle cx="32" cy="21" r="1.5" fill="currentColor" stroke="none"/><path d="m17 20 5-7 5 5"/>',
  'Chó':'<path d="M12 18 5 12l-2 16 9-2a14 14 0 0 0 24 0l9 2-2-16-7 6a14 14 0 0 0-24 0Z"/><path d="M17 25h1m12 0h1m-10 7 3 2 3-2"/>'
 };
 const hobbyPaths={
  'Chơi đàn':'<path d="M22 10v24a6 6 0 1 1-4-6V14l19-5v20a6 6 0 1 1-4-6V10Z"/>',
  'Đọc sách':'<path d="M5 11c8-3 15-2 19 2 4-4 11-5 19-2v26c-8-3-15-2-19 2-4-4-11-5-19-2Z"/><path d="M24 13v26"/>',
  'Vẽ tranh':'<path d="M8 37 34 11l5 5-26 26-7 1Z"/><path d="m31 14 5 5M16 10l-2-5m-5 12-5-1m32 17 6 2"/>',
  'Đi bộ':'<circle cx="27" cy="8" r="4"/><path d="m23 17-8 8 8 5 4-10 7 7m-11 3-7 13m11-13 8 13M21 17l-7 1"/>',
  'Cắm trại':'<path d="M5 39 24 10l19 29ZM24 10v29M16 39l8-12 8 12"/>'
 };
 function icon(group,value){
  if(group==='color')return houseIcon(value);
  if(group==='nation')return flags[value];
  if(group==='drink'){const mark={'Nước lọc':'N','Trà':'T','Sữa':'S','Cacao':'C','Nước cam':'O'}[value]||'?';return svg(`<path d="M9 15h27l-3 25H12Z" fill="${drinks[value]}" stroke="#536f72" stroke-width="2"/><path d="M7 15h31M14 8h18" fill="none" stroke="#536f72" stroke-width="2.3" stroke-linecap="round"/><text x="24" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#536f72">${mark}</text>`);}
  const path=group==='pet'?petPaths[value]:hobbyPaths[value];
  return svg(`<g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${path}</g>`);
 }
 const numberIcon=n=>`<span class="einstein-number">${n}</span>`;
 let activeClue=-1,loading=false;
 let values,excluded={},mode='pick',done=false,clueNodes=[],currentClues=[],history=[],future=[];
 const scene=document.getElementById('einstein-scene'),status=document.getElementById('einstein-status');
 const result=createGameResult(scene,{restart:()=>start(level,true),next:()=>start(level+1)});
 const at=(group,value)=>values[group].indexOf(value);
 const picture=entry=>typeof entry==='number'?numberIcon(entry):icon(...entry);
 const matches=clue=>matchesEinsteinClue(values,clue);
 const levelSelect=document.getElementById('einstein-jump');
 levelSelect.replaceChildren(...einsteinLevels.map((entry,i)=>{const option=document.createElement('option');option.value=i;option.textContent=`${i+1} ${'★'.repeat(['Dễ','Vừa','Khó','Chuyên gia'].indexOf(entry.difficulty)+1)}`;option.title=entry.difficulty;return option;}));
 const headers=[],slots=[],tokens=[],bankRows={};
 const corner=document.createElement('div');corner.className='einstein-corner';corner.innerHTML=svg('<path d="M8 7h32M8 24h32M8 41h32M8 7v34m16-34v34m16-34v34" fill="none" stroke="currentColor" stroke-width="2.5"/>');corner.setAttribute('aria-label','Danh mục');board.append(corner);
 for(let house=0;house<5;house++){const header=document.createElement('div');header.className='einstein-house';header.innerHTML=`<strong>${house+1}</strong>`;header.setAttribute('aria-label',`Nhà ${house+1}`);headers.push(header);board.append(header);}
 const rowIcons={color:houseIcon(),nation:flags['Đức'],drink:icon('drink','Sữa'),pet:icon('pet','Cá'),hobby:icon('hobby','Đọc sách')};
 for(const [group,data] of Object.entries(groups)){
  const heading=document.createElement('div');heading.className='einstein-bank-cell';heading.innerHTML=`<span class="einstein-bank-icon">${rowIcons[group]}</span>`;heading.setAttribute('role','group');heading.setAttribute('aria-label',data.label);heading.title=data.label;bankRows[group]=heading;board.append(heading);
  for(let house=0;house<5;house++){const slot=document.createElement('div');slot.className='einstein-slot';slot.dataset.group=group;slot.dataset.house=house;slot.setAttribute('role','group');slots.push(slot);board.append(slot);}
 }
 const modes=document.createElement('div');modes.className='einstein-modes';modes.setAttribute('role','group');modes.setAttribute('aria-label','Chế độ chọn hoặc loại trừ');
 const modeButtons=['pick','exclude'].map((value,i)=>{const button=document.createElement('button');button.type='button';button.innerHTML=i?svg('<path d="m12 12 24 24m0-24L12 36" fill="none" stroke="currentColor" stroke-width="4"/>'):svg('<path d="m9 24 10 10 21-22" fill="none" stroke="currentColor" stroke-width="4"/>');button.title=i?'Loại trừ / khôi phục khả năng':'Chốt đáp án';button.setAttribute('aria-label',button.title);button.addEventListener('click',()=>{mode=value;refresh();});modes.append(button);return button;});document.querySelector('.einstein-toolbar').prepend(modes);
 const snapshot=()=>({values:structuredClone(values),excluded:structuredClone(excluded)});
 const saveKey=()=>`einstein-progress-v2-${level}`;
 const signature=()=>JSON.stringify([solution,given,currentClues]);
 const candidates=(group,house)=>groups[group].options.filter(v=>!(excluded[`${group}:${house}`]||[]).includes(v)&&!values[group].includes(v));
 function settle(){let changed=true;while(changed){changed=false;for(const group of Object.keys(groups))for(let house=0;house<5;house++){if(values[group][house])continue;const options=candidates(group,house);if(options.length===1){values[group][house]=options[0];changed=true;}}}}
 function save(){if(loading)return;try{localStorage.setItem(saveKey(),JSON.stringify({signature:signature(),...snapshot(),history,future,mode}));localStorage.setItem('einstein-last-level-v2',String(level));}catch{}}
 function validState(state){if(!state||!state.values||!state.excluded)return false;for(const [group,data] of Object.entries(groups)){const row=state.values[group];if(!Array.isArray(row)||row.length!==5||row.some(v=>v!==''&&!data.options.includes(v))||new Set(row.filter(Boolean)).size!==row.filter(Boolean).length)return false;}if(!given.every(([g,h,v])=>state.values[g][h]===v))return false;return Object.entries(state.excluded).every(([key,list])=>{const [g,h]=key.split(':');return groups[g]&&/^[0-4]$/.test(h)&&Array.isArray(list)&&list.every(v=>groups[g].options.includes(v));});}
 function resume(){try{const state=JSON.parse(localStorage.getItem(saveKey()));if(state?.signature!==signature()||!validState(state))return;values=state.values;excluded=state.excluded;history=Array.isArray(state.history)?state.history.filter(validState).slice(-100):[];future=Array.isArray(state.future)?state.future.filter(validState).slice(-100):[];mode=state.mode==='exclude'?'exclude':'pick';}catch{}}
 function remember(){history.push(snapshot());if(history.length>100)history.shift();future=[];}
 function restore(state){values=structuredClone(state.values);excluded=structuredClone(state.excluded);clueNodes.forEach(node=>node.classList.remove('wrong'));refresh();}
 function place(group,value,house){if(done||fixed.has(`${group}:${house}`))return;const other=values[group].indexOf(value);if(other>=0&&fixed.has(`${group}:${other}`)){sound('error');return;}remember();if(other>=0)values[group][other]='';values[group][house]=value;excluded[`${group}:${house}`]=[];clueNodes.forEach(node=>node.classList.remove('wrong'));sound('move');settle();refresh();status.textContent=`Đã đặt ${value} vào nhà ${house+1}.`;}
 function refresh(){
  const clue=activeClue>=0?currentClues[activeClue].picture:null,related=clue?[clue[0],clue[2],clue[3]].filter(x=>x!==undefined):[];
  clueNodes.forEach((node,i)=>{const clue=currentClues[i]?.picture||[],refs=[clue[0],clue[2],clue[3]].filter(Boolean);const ready=refs.every(entry=>typeof entry==='number'||values[entry[0]]?.includes(entry[1]));node.classList.toggle('processed',ready&&matches(clue));node.classList.toggle('active-clue',i===activeClue);node.setAttribute('aria-pressed',String(i===activeClue));});
  headers.forEach((header,i)=>header.classList.toggle('clue-related',related.includes(i+1)));
  let conflicts=0;
  modeButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(mode===(i?'exclude':'pick'))));
  for(const slot of slots){const {group}=slot.dataset,house=Number(slot.dataset.house),key=`${group}:${house}`,value=values[group][house],locked=fixed.has(key);slot.replaceChildren();slot.classList.toggle('filled',Boolean(value));slot.classList.toggle('given',locked);slot.setAttribute('aria-label',`${groups[group].label}, nhà ${house+1}`);
   const options=value?[value]:groups[group].options;
   for(const candidate of options){const button=document.createElement('button'),removed=(excluded[key]||[]).includes(candidate),elsewhere=values[group].some((v,i)=>i!==house&&v===candidate);button.type='button';button.dataset.group=group;button.dataset.value=candidate;button.className='einstein-candidate';button.innerHTML=icon(group,candidate);button.classList.toggle('clue-related',related.some(entry=>Array.isArray(entry)&&entry[0]===group&&entry[1]===candidate));button.classList.toggle('excluded',removed);button.classList.toggle('elsewhere',elsewhere);button.disabled=done||locked||elsewhere;button.title=`${candidate} · ${groups[group].label} · nhà ${house+1}`;button.setAttribute('aria-label',`${button.title}. ${value?'Bỏ chốt':mode==='exclude'?(removed?'Khôi phục':'Loại trừ'):'Chọn'}`);let held=false,timer;button.addEventListener('pointerdown',()=>{held=false;timer=setTimeout(()=>{if(!value&&!button.disabled){held=true;place(group,candidate,house);}},450);});button.addEventListener('pointerup',()=>clearTimeout(timer));button.addEventListener('pointerleave',()=>clearTimeout(timer));button.addEventListener('click',()=>{if(held){held=false;return;}
    if(value){remember();values[group][house]='';}
    else if(mode==='exclude'){remember();excluded[key]=removed?(excluded[key]||[]).filter(v=>v!==candidate):[...(excluded[key]||[]),candidate];}
    else{place(group,candidate,house);return;}
    if(!value&&mode==='exclude'&&!removed)settle();
    sound('move');clueNodes.forEach(node=>node.classList.remove('wrong'));refresh();
   });slot.append(button);}
   const remaining=groups[group].options.filter(v=>!(excluded[key]||[]).includes(v)&&!values[group].some((placed,i)=>i!==house&&placed===v));slot.classList.toggle('empty-candidates',!value&&!remaining.length);if(!value&&!remaining.length){conflicts++;const warning=document.createElement('span');warning.className='einstein-conflict';warning.textContent='!';warning.title='Không còn khả năng. Hãy khôi phục biểu tượng hoặc hoàn tác.';warning.setAttribute('role','img');warning.setAttribute('aria-label',warning.title);slot.append(warning);}
  }
  if(conflicts){status.textContent=`Có ${conflicts} ô không còn khả năng. Hãy khôi phục biểu tượng hoặc hoàn tác.`;}
  save();
  document.getElementById('einstein-undo').disabled=!history.length||done;document.getElementById('einstein-redo').disabled=!future.length||done;
 }
 function resetBoard(){result.clear();values=Object.fromEntries(Object.keys(groups).map(group=>[group,Array(5).fill('')]));given.forEach(([group,house,value])=>values[group][house]=value);excluded={};done=false;history=[];future=[];clueNodes.forEach(node=>node.classList.remove('wrong'));refresh();status.textContent='✓ Chốt đáp án · × Loại trừ. Bấm lại đáp án để bỏ chốt.';}
 function start(next=level,fresh=false){loading=true;activeClue=-1;level=Math.max(0,Math.min(einsteinLevels.length-1,next));const entry=einsteinLevels[level];solution=entry.solution;given=entry.given;fixed=new Set(given.map(([group,house])=>`${group}:${house}`));currentClues=entry.clues;clueNodes=currentClues.map(({picture:clue,text},index)=>{const [a,relation,b,c]=clue,li=document.createElement('li');li.className='einstein-clue';li.title=text;li.dataset.tip=text;li.setAttribute('aria-label',text);li.setAttribute('role','button');li.tabIndex=0;const toggle=()=>{activeClue=activeClue===index?-1:index;refresh();};li.addEventListener('click',toggle);li.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();}});li.classList.toggle('between',(relation==='between'||relation==='sandwich'));const visual=entry=>`<span class="einstein-clue-image">${picture(entry)}</span>`;li.innerHTML=(relation==='between'||relation==='sandwich')?`${visual(b)}<b>${relation==='sandwich'?'⇥':'‹'}</b>${visual(a)}<b>${relation==='sandwich'?'⇥':'‹'}</b>${visual(c)}`:`${visual(a)}<b>${{'<':'‹ ···','>':'··· ›','→':'⇥','←':'⇤','↔':'↔','=':'=','≠':'≠','notAdjacent':'↮','distance2':'↔₂','distance3':'↔₃','edge':'|↔|'}[relation]}</b>${visual(b)}`;return li;});const clueList=document.getElementById('einstein-clue-list');clueList.replaceChildren(...clueNodes);clueList.scrollTop=0;document.getElementById('einstein-level').textContent=`${level+1} / ${einsteinLevels.length}`;levelSelect.value=String(level);document.getElementById('einstein-prev').disabled=level===0;document.getElementById('einstein-next').disabled=level===einsteinLevels.length-1;resetBoard();if(!fresh)resume();loading=false;refresh();}
 document.getElementById('einstein-prev').addEventListener('click',()=>start(level-1));
 document.getElementById('einstein-next').addEventListener('click',()=>start(level+1));
 levelSelect.addEventListener('change',()=>start(Number(levelSelect.value)));
 levelSelect.addEventListener('wheel',event=>{event.preventDefault();document.scrollingElement?.scrollBy(0,event.deltaY);},{passive:false});
 document.getElementById('einstein-reset').addEventListener('click',()=>start(level,true));
 document.getElementById('einstein-undo').addEventListener('click',()=>{if(!history.length||done)return;future.push(snapshot());restore(history.pop());sound('move');});
 document.getElementById('einstein-redo').addEventListener('click',()=>{if(!future.length||done)return;history.push(snapshot());restore(future.pop());sound('move');});
 document.getElementById('einstein-hint').addEventListener('click',()=>{if(done)return;for(const [group,answer] of Object.entries(solution))for(let house=0;house<5;house++){if(values[group][house]===answer[house]||fixed.has(`${group}:${house}`))continue;place(group,answer[house],house);status.textContent=`Gợi ý: ${groups[group].label.toLowerCase()} của nhà ${house+1} là ${answer[house]}.`;return;}status.textContent='Bảng đã điền đủ. Hãy bấm Kiểm tra.';});
 document.getElementById('einstein-check').addEventListener('click',()=>{if(done)return;const filled=Object.values(values).flat().filter(Boolean).length;if(filled<25){status.textContent=`Bạn đã xếp ${filled}/25 biểu tượng. Hãy điền hết lưới trước khi kiểm tra.`;return;}const failed=currentClues.findIndex(({picture})=>!matches(picture));if(failed>=0){clueNodes.forEach((node,i)=>node.classList.toggle('wrong',i===failed));clueNodes[failed].scrollIntoView({block:'nearest',behavior:'smooth'});status.textContent=`Chưa đúng với manh mối ${failed+1}: ${currentClues[failed].text}`;sound('error');return;}done=true;const fish=at('pet','Cá');refresh();status.textContent=`Chính xác! Người ${values.nation[fish]} ở nhà ${fish+1} nuôi cá.`;result.show({won:true,description:`Người ${values.nation[fish]} là người nuôi cá.`,hasNext:level<einsteinLevels.length-1});});
 let last=0;try{const saved=Number(localStorage.getItem('einstein-last-level-v2'));if(Number.isInteger(saved)&&saved>=0&&saved<einsteinLevels.length)last=saved;}catch{}
 start(last);
}
