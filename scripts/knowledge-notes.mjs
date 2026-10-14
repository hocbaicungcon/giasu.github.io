/* Give legacy knowledge maps shared note styles without changing their content. */
const addClass=(tag,name)=>tag.includes('class=')?tag.replace(/class=(["'])(.*?)\1/,(_,q,c)=>`class=${q}${c} ${name}${q}`):tag.replace(/>$/,` class="${name}">`);
const stripStyle=tag=>tag.replace(/\s+style=(["'])[\s\S]*?\1/g,'');
export function renderKnowledgeNotes(html){
 const starts=/<div\b[^>]*class=["'][^"']*\bflowchart-container\b[^"']*["'][^>]*>/g;let result='',offset=0,match;
 while((match=starts.exec(html))){
  const tags=/<\/?div\b[^>]*>/g;tags.lastIndex=match.index;let depth=0,end=-1,token;
  while((token=tags.exec(html))){depth+=token[0].startsWith('</')?-1:1;if(depth===0){end=tags.lastIndex;break;}}
  if(end<0)break;
  const block=html.slice(match.index,end);if(!/BẢN ĐỒ KIẾN THỨC|SƠ ĐỒ KIẾN THỨC/u.test(block)){starts.lastIndex=end;continue;}
  depth=0;
  const updated=block.replace(/<\/?(?:div|h3|h4|p)\b[^>]*>/g,tag=>{
   if(tag.startsWith('</div')){depth--;return tag;}
   if(tag.startsWith('<div')){depth++;if(depth<=3)return addClass(stripStyle(tag),depth===1?'knowledge-notes':depth===2?'knowledge-note-grid':'knowledge-note');}
   if(depth&&/^<(?:h3|h4|p)\b/.test(tag))return stripStyle(tag);
   return tag;
  });
  result+=html.slice(offset,match.index)+updated;offset=end;starts.lastIndex=end;
 }
 return result+html.slice(offset);
}
