/* credit: giasu.ai.vn */
/* A single vector icon system for game navigation, independent of text fonts. */
const paths = {
  board4: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 3v18M12 3v18M16.5 3v18M3 7.5h18M3 12h18M3 16.5h18"/>',
  board5: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M6.6 3v18M10.2 3v18M13.8 3v18M17.4 3v18M3 6.6h18M3 10.2h18M3 13.8h18M3 17.4h18"/>',
  first: '<circle cx="12" cy="12" r="9"/><path d="m9 9 3-2v10m-3 0h6"/>',
  second: '<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 0 1 6 0c0 2-6 4-6 8h6"/>',
  robot: '<path d="M12 3v3M8 3h8M5 8h14v12H5ZM2 12v4m20-4v4M9 16h6"/><circle cx="9" cy="12" r=".6"/><circle cx="15" cy="12" r=".6"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m1-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"/>',
  previous: '<path d="M15 5 8 12l7 7"/>',
  next: '<path d="m9 5 7 7-7 7"/>',
  replay: '<path d="M4 10a8 8 0 1 1 2 8M4 4v6h6"/>',
  new: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
  undo: '<path d="m9 5-5 5 5 5M4 10h9a6 6 0 0 1 6 6v3"/>',
  redo: '<path d="m15 5 5 5-5 5m5-5h-9a6 6 0 0 0-6 6v3"/>',
  pin: '<path d="m9 3 6 0-1 6 4 4v2H6v-2l4-4-1-6ZM12 15v6"/>',
  erase: '<path d="m4 14 9-10 7 7-8 9H9l-5-4Zm4-5 7 7M12 20h9"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  notes: '<path d="m4 16-1 5 5-1L20 8l-4-4ZM14 6l4 4"/>',
  hint: '<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0l-1 2H9Z"/>',
  flag: '<path d="M5 21V3h13l-3 5 3 5H5"/>',
  fullscreen: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  rotate: '<path d="M20 10a8 8 0 1 0-2 8m2-14v6h-6"/>',
  flip: '<path d="M12 3v18M9 6 3 18h6Zm6 0 6 12h-6Z"/>',
};

export function setGameControlLabel(button, label) {
  button.setAttribute('aria-label', label);
  button.title = label;
  if (!button.dataset.controlIcon) button.textContent = label;

}

export function setGameControlIcon(button, icon, label) {
  if (!paths[icon]) return;
  button.classList.remove('primary');
  button.classList.add('game-control');
  button.dataset.controlIcon = icon;
  button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[icon]}</svg>`;
  setGameControlLabel(button, label);
}

export function mountGameNavigation(nav) {
  const buttons=[...nav.querySelectorAll('button')];
  const previous=buttons.find(button=>/-prev$/.test(button.id));
  const next=buttons.find(button=>/-next$/.test(button.id));
  const reset=buttons.find(button=>/-reset$/.test(button.id)||button.hasAttribute('data-restart')&&button.dataset.restart!=='words');
  const sound=nav.querySelector('[data-puzzle-sound]');
  const select=nav.querySelector('select');
  const picker=select?.closest('label')||select||nav.querySelector('.caro-modes');
  const ordered=[previous,picker,next,reset,sound].filter(Boolean);
  nav.prepend(...ordered);
  nav.querySelectorAll('.restart-sound').forEach(holder=>{if(!holder.children.length)holder.remove();});


  nav.querySelectorAll('button').forEach(button => {
    const label = button.getAttribute('aria-label') || button.title || button.textContent.trim();
    button.classList.remove('primary');
  button.classList.add('game-control');
    if (button.hasAttribute('data-puzzle-sound')) return;
    const id = button.id;
    const text = button.textContent.trim();
    const icon = (id==='tangram-left'||id==='pent-left') ? 'undo'
      : (id==='tangram-right'||id==='pent-rotate') ? 'redo'
      : /-prev$/.test(id) ? 'previous'
      : /-next$/.test(id) ? 'next'
      : /-new$/.test(id) || button.matches('[data-restart="words"]') ? 'new'
      : /-reset$/.test(id) || button.hasAttribute('data-restart') ? 'replay'
      : /-undo$/.test(id) ? 'undo'
      : /-redo$/.test(id) ? 'redo'
      : /-reveal$/.test(id) ? 'eye'
      : /-notes$/.test(id) ? 'notes'
      : /-hint$/.test(id) ? 'hint'
      : /-check$/.test(id) || /Chốt/.test(label) ? 'check'
      : /give-up|Loại trừ/.test(id + label) ? 'close'
      : /flag/.test(id) || text === '⚑' ? 'flag'
      : /rotate/.test(id) ? 'rotate'
      : /flip/.test(id) ? 'flip'
      : ({'←':'previous','→':'next','↻':'replay','↶':'undo','↷':'redo','✓':'check','×':'close','◉':'eye','✦':'new'})[text];
    if (icon) setGameControlIcon(button, icon, label);
  });
}

// One consecutive-click gate for every solution control. Hints remain immediate.
let pendingSolution=null,solutionTimer;
function clearSolutionProgress(){
  clearTimeout(solutionTimer);
  if(pendingSolution){pendingSolution.style.removeProperty('--solution-fill');delete pendingSolution.dataset.solutionProgress;}
  pendingSolution=null;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('.game-panel button[id$="-reveal"]');
  if(!button||button.disabled||button.getAttribute('aria-pressed')==='true'){clearSolutionProgress();return;}
  if(button.dataset.solutionProgress==='10'){clearSolutionProgress();return;}
  if(pendingSolution!==button){clearSolutionProgress();pendingSolution=button;}
  const count=Number(button.dataset.solutionProgress||0)+1;
  button.dataset.solutionProgress=String(count);
  button.style.setProperty('--solution-fill',`${count*10}%`);
  button.title=`Hiện lời giải (${count}/10)`;button.setAttribute('aria-label',button.title);
  clearTimeout(solutionTimer);
  if(count<10){event.stopImmediatePropagation();solutionTimer=setTimeout(clearSolutionProgress,2000);}
  else pendingSolution=null;
},true);
