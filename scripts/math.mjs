import katex from 'katex';
const escapeText=source=>source.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'}[c]));
// Unicode prose labels use the site's font; mathematical accents retain KaTeX metrics.
export function renderMath(tex,options={}){
 const original=String(tex).replace(/&lt;/g,'<').replace(/&gt;/g,'>');
 const source=wrapLongDisplayFormula(original,56,68);
 const displayMode=!!options.displayMode||source!==original,labels=[];
 const prepared=source.replace(/\\(?:text|textsf|textrm|textnormal|mathrm)\{([^{}\\$]*)\}/g,(match,label)=>{
  if(!/[\u00c0-\u024f\u1ea0-\u1ef9]/i.test(label))return match;
  const plain=label.normalize('NFC'),ascii=plain.normalize('NFD').replace(/\p{M}/gu,'').replace(/đ/g,'d').replace(/Đ/g,'D');
  labels.push({plain,ascii});return `\\htmlClass{math-vietnamese vtext-${labels.length-1}}{\\textsf{${ascii}}}`;
 });
 const macros={...options.macros,'\\mathrm':'\\mathsf','\\textrm':'\\textsf','\\textnormal':'\\textsf','\\text':'\\textsf'};
 const strict=(code,message,token)=>code==='htmlExtension'&&labels.length?'ignore':typeof options.strict==='function'?options.strict(code,message,token):options.strict??'warn';
 let html=katex.renderToString(`\\mathsf{${prepared}\n}`,{...options,displayMode,strict,trust:context=>context.command==='\\htmlClass'&&/^math-vietnamese vtext-\d+$/.test(context.class||''),macros});
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
 if(source!==original)html=html.replace('class="katex-display"','class="katex-display katex-auto-wrap"');
 return html.replace(/(<annotation encoding="application\/x-tex">)[\s\S]*?(<\/annotation>)/,(_,start,end)=>start+escapeText(original)+end);
}


// Break only long equation chains at top-level relations. Inline fragments and
// short formulas keep their authored layout; implications stay attached to conclusions.
export function wrapLongDisplayFormula(source,maxLine=56,minLength=68){
 if(source.length<minLength||/\\begin\s*\{/.test(source))return source;
 const breaks=[];let depth=0;
 for(let i=0;i<source.length;i++){
  if(source[i]==='\\'){
   const command=source.slice(i).match(/^\\[A-Za-z]+/)?.[0];
   if(command){
    if(command==='\\left')depth++;
    if(command==='\\right')depth=Math.max(0,depth-1);
    if(depth===0&&(command==='\\implies'||command==='\\iff'))breaks.push({at:i,kind:'implies',command});
    i+=command.length-1;continue;
   }
   i++;continue;
  }
  if(source[i]==='{'){depth++;continue;}if(source[i]==='}'){depth=Math.max(0,depth-1);continue;}
  if(depth===0){
   if(source[i]===';')breaks.push({at:i+1,kind:'semicolon'});
   else if(source[i]==='=')breaks.push({at:i,kind:'relation'});
  }
 }
 const hasSemicolon=breaks.some(b=>b.kind==='semicolon');
 if(hasSemicolon){
  const semiBreaks=breaks.filter(b=>b.kind==='semicolon');
  const rows=[];let start=0,idx=0;
  while(source.length-start>maxLine){let cand=-1;
   while(idx<semiBreaks.length&&semiBreaks[idx].at<start+maxLine){if(semiBreaks[idx].at>start+12)cand=idx;idx++;}
   if(cand<0)break;
   const pt=semiBreaks[cand],row=source.slice(start,pt.at).trim();if(!row)break;rows.push(row);start=pt.at;
  }
  const last=source.slice(start).trim();if(rows.length&&last)rows.push(last);
  return rows.length>1?`\\begin{array}{l}${rows.join('\\\\')}\\end{array}`:source;
 }
 const implication=breaks.find(point=>point.kind==='implies');
 if(implication){
  const cmd=implication.command||'\\implies';
  const before=source.slice(0,implication.at).trim(),after=source.slice(implication.at).trim();
  const tail=after.slice(cmd.length).trim();
  const hasBeforeRelation=breaks.some(point=>point.kind==='relation'&&point.at<implication.at);
  const tailEquals=breaks.filter(point=>point.kind==='relation'&&point.at>implication.at);
  if(!hasBeforeRelation||source.length<75)return source;
  if(tail.length>maxLine&&tailEquals.length>2){
   const cut=tailEquals[1].at,conclusion=source.slice(implication.at+cmd.length,cut).trim(),result=source.slice(cut).trim();
   return `\\begin{array}{ll} & ${before}\\\\${cmd} & ${conclusion}\\\\& ${result}\\end{array}`;
  }
  return `\\begin{array}{ll} & ${before}\\\\${cmd} & ${tail}\\end{array}`;
 }
 if(breaks.length<2)return source;
 const rows=[];let start=0,index=0;
 while(source.length-start>maxLine){let candidate=-1;
  while(index<breaks.length&&breaks[index].at<start+maxLine){
   if(breaks[index].at>start+12){
    const remaining=source.length-breaks[index].at;
    if(remaining>18||index===0)candidate=index;
   }
   index++;
  }
  if(candidate<0)break;
  const point=breaks[candidate],row=source.slice(start,point.at).trim();if(!row)break;rows.push(row);start=point.at;
 }
 const last=source.slice(start).trim();if(rows.length&&last)rows.push(last);
 return rows.length>1?`\\begin{array}{l}${rows.join('\\\\')}\\end{array}`:source;
}
