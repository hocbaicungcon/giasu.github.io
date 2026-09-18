(()=>{
 const root=document.documentElement,key='giasu-display';
 let prefs={size:100,theme:null};
 try{const saved=JSON.parse(localStorage.getItem(key));if(saved){prefs.size=[90,100,110,120,130].includes(saved.size)?saved.size:100;prefs.theme=['light','dark'].includes(saved.theme)?saved.theme:null;}}catch{}
 const system=matchMedia('(prefers-color-scheme: dark)');
 function apply(){root.style.fontSize=`${16*prefs.size/100}px`;root.dataset.theme=prefs.theme||(system.matches?'dark':'light');}
 function save(){try{localStorage.setItem(key,JSON.stringify(prefs));}catch{}apply();update();}
 let panel;
 function update(){if(!panel)return;panel.querySelector('[data-size]').textContent=prefs.size+'%';panel.querySelector('[data-action="less"]').disabled=prefs.size===90;panel.querySelector('[data-action="more"]').disabled=prefs.size===130;const button=panel.querySelector('[data-action="theme"]');const dark=root.dataset.theme==='dark';button.textContent=dark?'☀ Sáng':'☾ Tối';button.setAttribute('aria-label',dark?'Chuyển sang giao diện sáng':'Chuyển sang giao diện tối');button.setAttribute('aria-pressed',String(dark));}
 apply();system.addEventListener('change',()=>{apply();update();});
 document.addEventListener('DOMContentLoaded',()=>{
  panel=document.querySelector('.display-controls');if(!panel)return;update();
  panel.addEventListener('click',event=>{const action=event.target.closest('[data-action]')?.dataset.action;if(!action)return;if(action==='less')prefs.size=Math.max(90,prefs.size-10);if(action==='more')prefs.size=Math.min(130,prefs.size+10);if(action==='reset')prefs.size=100;if(action==='theme')prefs.theme=root.dataset.theme==='dark'?'light':'dark';save();});
 });
})();
