/* Transparent figures and theme-aware inks; math and UI icons are untouched. */
const voidTags=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const addClass=(tag,name)=>tag.match(/class=(["'])(.*?)\1/)?.[2].split(/\s+/).includes(name)?tag:tag.includes('class=')?tag.replace(/class=(["'])(.*?)\1/,(_,q,c)=>`class=${q}${c} ${name}${q}`):tag.replace(/>$/,` class="${name}">`);
function removeFrame(tag){return tag.replace(/style=(["'])(.*?)\1/g,(_,q,style)=>`style=${q}${style.split(';').filter(p=>!/^\s*(?:background(?:-color)?|border(?:-[\w-]+)?|box-shadow)\s*:/i.test(p)).join(';')}${q}`);}
const red=new Set(['#dc2626','#ef4444','#d94e48','#bf645a','#f43f5e','#be185d','#ec4899']);
const gold=new Set(['#d97706','#f59e0b','#b45309','#c79536','#ca8a04','#eab308','#f97316']);
const blue=new Set(['#2563eb','#3b82f6','#1d4ed8','#1e40af','#0ea5e9','#0284c7','#06b6d4','#0891b2','#438557','#10b981','#047857','#16a34a','#22c55e','#15803d','#087858']);
function ink(value,label=false){const v=value.toLowerCase();if(red.has(v))return 'var(--diagram-coral)';if(gold.has(v))return 'var(--diagram-gold)';if(blue.has(v))return 'var(--diagram-ink)';if(['#8b5cf6','#6d28d9','#a855f7','#7c3aed'].includes(v))return 'var(--diagram-coral)';if(['#fff','#ffffff','white'].includes(v))return label?'var(--diagram-label)':'none';if(!label&&/^#[0-9a-f]{6}$/.test(v)){const rgb=[1,3,5].map(i=>parseInt(v.slice(i,i+2),16));if(Math.min(...rgb)>170&&Math.max(...rgb)>220)return 'var(--diagram-wash)';}if(/^#[0-9a-f]{3,6}$/.test(v))return label?'var(--diagram-label)':'var(--diagram-outline)';if(/^rgba?\(/.test(v)){const numbers=v.match(/[\d.]+/g)?.map(Number)||[];if(!label&&numbers.length===4&&numbers[3]<.3)return 'var(--diagram-wash)';const [r=0,g=0,b=0]=numbers;if(label)return 'var(--diagram-label)';if(r>g*1.3&&r>b*1.3)return 'var(--diagram-coral)';if(r>150&&g>100&&b<100)return 'var(--diagram-gold)';return 'var(--diagram-ink)';}return value;}
export function renderLessonFigures(html){
 const stack=[];return html.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>|<\/?[a-z][^>]*>/gi,token=>{
  if(/^<svg\b/i.test(token)){
   if(stack.some(t=>/\bkatex\b|^<math\b/i.test(t)))return token;
   const first=token.slice(0,token.indexOf('>')+1),view=first.match(/viewBox=["']([^"']+)["']/i)?.[1].trim().split(/[ ,]+/).map(Number);
   if(/aria-hidden=["']true|\bui-icon\b/.test(first)||!view||view[2]>3000||view[3]<60)return token;
   token=token.replace(first,addClass(removeFrame(first),'lesson-diagram'));
   return token.replace(/<[a-z][^>]*>/gi,tag=>{
    const label=/^<text\b/i.test(tag);
    return tag.replace(/\b(stroke|fill)=(["'])([^"']+)\2/gi,(_,prop,q,value)=>`${prop}=${q}${ink(value,label)}${q}`).replace(/style=(["'])(.*?)\1/g,(_,q,style)=>`style=${q}${style.replace(/\b(fill|stroke)\s*:\s*([^;]+)/gi,(_,prop,value)=>`${prop}:${ink(value.trim(),label)}`)}${q}`);
   });
  }
  const tag=token.match(/^<\/?([a-z][\w-]*)/i)?.[1].toLowerCase();if(!tag)return token;
  if(token.startsWith('</')){const i=stack.map(t=>t.match(/^<([\w-]+)/)[1].toLowerCase()).lastIndexOf(tag);if(i>=0)stack.length=i;return token;}
  if(!voidTags.has(tag)&&!token.endsWith('/>'))stack.push(token);
  return token;
 });
}
