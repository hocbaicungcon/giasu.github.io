import katex from 'katex';
const escapeText=source=>source.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'}[c]));
// Unicode prose labels use the site's font; mathematical accents retain KaTeX metrics.
export function renderMath(tex,options={}){
 const source=String(tex).replace(/&lt;/g,'<').replace(/&gt;/g,'>'),labels=[];
 const prepared=source.replace(/\\(?:text|textsf|textrm|textnormal|mathrm)\{([^{}\\$]*)\}/g,(match,label)=>{
  if(!/[\u00c0-\u024f\u1ea0-\u1ef9]/i.test(label))return match;
  const plain=label.normalize('NFC'),ascii=plain.normalize('NFD').replace(/\p{M}/gu,'').replace(/đ/g,'d').replace(/Đ/g,'D');
  labels.push({plain,ascii});return `\\htmlClass{math-vietnamese vtext-${labels.length-1}}{\\textsf{${ascii}}}`;
 });
 const macros={...options.macros,'\\mathrm':'\\mathsf','\\textrm':'\\textsf','\\textnormal':'\\textsf','\\text':'\\textsf'};
 const strict=(code,message,token)=>code==='htmlExtension'&&labels.length?'ignore':typeof options.strict==='function'?options.strict(code,message,token):options.strict??'warn';
 let html=katex.renderToString(`\\mathsf{${prepared}\n}`,{...options,strict,trust:context=>context.command==='\\htmlClass'&&/^math-vietnamese vtext-\d+$/.test(context.class||''),macros});
 for(const [index,{plain,ascii}] of labels.entries()){
  const opening=new RegExp(`<span class="[^"]*\\bvtext-${index}\\b[^"]*">`).exec(html);
  if(opening){const start=opening.index+opening[0].length;let depth=1,end=start;const tags=/<\/?span\b[^>]*>/g;tags.lastIndex=start;let tag;
   while((tag=tags.exec(html))){depth+=tag[0].startsWith('</')?-1:1;if(depth===0){end=tag.index;break;}}
   html=html.slice(0,start)+escapeText(plain)+html.slice(end);
  }

 }
 if(labels.length){
  const semantic=katex.renderToString(`\\mathsf{${source}\n}`,{...options,macros,strict:(code,message,token)=>code==='unknownSymbol'?'ignore':strict(code,message,token),output:'mathml',trust:false}).replace(/^<span class="katex">|<\/span>$/g,'');
  html=html.replace(/<span class="katex-mathml">[\s\S]*?<\/math><\/span>/,()=>`<span class="katex-mathml">${semantic}</span>`);
 }
 return html.replace(/(<annotation encoding="application\/x-tex">)[\s\S]*?(<\/annotation>)/,(_,start,end)=>start+escapeText(source)+end);
}
