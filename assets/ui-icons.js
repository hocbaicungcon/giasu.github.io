/* Shared vector icons for interface and lesson annotations. */
const paths={
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
 bulb:'<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0l-1 3H9z"/>',
 pin:'<path d="m8 3 8 0-1 6 3 3H6l3-3zM12 12v9"/>',
 warning:'<path d="m12 3 10 18H2zM12 9v5m0 3v1"/>',
 stop:'<path d="m8 3 8 0 5 5v8l-5 5H8l-5-5V8zM12 7v7m0 3v1"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h1m-1 6h1m-1 6h1"/>',
 flask:'<path d="M9 3h6m-5 0v7L4 20h16l-6-10V3M7 15h10"/>',
 leaf:'<path d="M4 20C0 9 10 3 21 3c0 11-5 18-15 15M4 20 16 8"/>',
 bomb:'<circle cx="11" cy="14" r="7"/><path d="m15 8 3-3 3 1m-2-5v2m3 0-1 1"/>',
 burst:'<path d="m12 2 2 6 6-4-3 7 5 3-7 1 1 7-5-5-5 4 1-7-6-2 7-2z"/>',
 sparkle:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>',
 flag:'<path d="M5 22V3h14l-3 4 3 4H5"/>'
};
export function uiIcon(name){return `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.sparkle}</svg>`;}
const names={'ℹ':'info','💡':'bulb','📌':'pin','⚠':'warning','🛑':'stop','📑':'list','⚗':'flask','♧':'leaf','☀':'bulb','💣':'bomb','💥':'burst','⚑':'flag'};
const emoji=/[\u{1F300}-\u{1FAFF}\u2139\u2697\u26A0\u2600\u2691\u2667]\uFE0F?/gu;
export function vectorizeInterface(html){
 const protectedBlocks=[];
 html=html.replace(/<(script|style|pre|code|textarea|math|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,block=>{protectedBlocks.push(block);return `<!--VECTOR_PROTECTED_${protectedBlocks.length-1}-->`;});
 let plain=false;
 html=html.split(/(<[^>]*>)/g).map(part=>{
  if(part.startsWith('<')){if(/^<(?:title|option)\b/i.test(part))plain=true;if(/^<\/(?:title|option)>/i.test(part))plain=false;return part;}
  return part.replace(emoji,character=>plain?'':uiIcon(names[character.replace(/\uFE0F/g,'')]||'sparkle'));
 }).join('');
 return html.replace(/<!--VECTOR_PROTECTED_(\d+)-->/g,(_,index)=>protectedBlocks[Number(index)]);
}
