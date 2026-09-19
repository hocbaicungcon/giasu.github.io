let muted=false,active=new Set();
try{muted=localStorage.getItem('puzzle-muted')==='true';}catch{}
export function stopSounds(){for(const audio of active){audio.pause();audio.currentTime=0;}active.clear();}
export function sound(name,options={}){
 if(muted||document.hidden)return ()=>{};
 const audio=new Audio(new URL('./audio/'+name+'.mp3',import.meta.url));audio.volume=options.volume??(name==='munch'?.22:.3);audio.playbackRate=options.rate??1;audio.loop=options.loop??false;active.add(audio);
 const stop=()=>{active.delete(audio);audio.pause();audio.currentTime=0;};
 audio.addEventListener('ended',()=>active.delete(audio),{once:true});
 audio.play().then(()=>{if(!active.has(audio))audio.pause();}).catch(()=>active.delete(audio));
 return stop;
}
const speaker='<path d="M11 5 6 9H3v6h3l5 4V5Z"/>';
function updateSoundButton(button){
 button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+speaker+(muted?'<path d="m16 9 5 6m0-6-5 6"/>':'<path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>')+'</svg>';
 button.setAttribute('aria-label',muted?'Bật âm thanh':'Tắt âm thanh');button.setAttribute('title',muted?'Bật âm thanh':'Tắt âm thanh');button.setAttribute('aria-pressed',String(!muted));
}
export function mountSoundControls(){document.querySelectorAll('[data-puzzle-sound]').forEach(button=>{updateSoundButton(button);button.addEventListener('click',()=>{muted=!muted;try{localStorage.setItem('puzzle-muted',String(muted));}catch{}if(muted)stopSounds();document.querySelectorAll('[data-puzzle-sound]').forEach(updateSoundButton);});});}
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopSounds();});
document.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',stopSounds));
mountSoundControls();
