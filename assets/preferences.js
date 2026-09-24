(()=>{
 const root=document.documentElement,key='giasu-display';
 let prefs={size:100,theme:'light',font:'sans'};
 try{const saved=JSON.parse(localStorage.getItem(key));if(saved){prefs.size=[80,90,100,110,120,130].includes(saved.size)?saved.size:100;prefs.theme=['light','dark'].includes(saved.theme)?saved.theme:'light';prefs.font=['sans','cmu','stix'].includes(saved.font)?saved.font:(saved.font==='serif'?'cmu':'sans');}}catch{}

 function apply(){root.style.fontSize=`${16*prefs.size/100}px`;root.dataset.theme=prefs.theme;root.dataset.font=prefs.font;}
 function save(){try{localStorage.setItem(key,JSON.stringify(prefs));}catch{}apply();update();}
 let panel;
 function update(){if(!panel)return;panel.querySelector('[data-action="less"]').disabled=prefs.size===80;panel.querySelector('[data-action="more"]').disabled=prefs.size===130;const button=panel.querySelector('[data-action="theme"]');const dark=root.dataset.theme==='dark';button.innerHTML='<span class="ui-symbol ui-symbol-'+(dark?'sun':'moon')+'" aria-hidden="true"></span>';button.setAttribute('aria-label',dark?'Chuyển sang giao diện sáng':'Chuyển sang giao diện tối');button.setAttribute('aria-pressed',String(dark));button.title=button.getAttribute('aria-label');const font=panel.querySelector('[data-action=font]');const names={sans:'không chân',cmu:'CMU Serif',stix:'STIX Two Text'};const next={sans:'cmu',cmu:'stix',stix:'sans'}[prefs.font];font.setAttribute('aria-pressed',String(prefs.font!=='sans'));font.title=font.ariaLabel=`Font hiện tại: ${names[prefs.font]}. Chuyển sang ${names[next]}`;}
 apply();
 document.addEventListener('DOMContentLoaded',()=>{
  panel=document.querySelector('.display-controls');if(!panel)return;update();
  panel.addEventListener('click',event=>{const action=event.target.closest('[data-action]')?.dataset.action;if(!action)return;if(action==='less')prefs.size=Math.max(80,prefs.size-10);if(action==='more')prefs.size=Math.min(130,prefs.size+10);if(action==='font')prefs.font={sans:'cmu',cmu:'stix',stix:'sans'}[prefs.font];if(action==='theme')prefs.theme=root.dataset.theme==='dark'?'light':'dark';save();});
 });
})();
