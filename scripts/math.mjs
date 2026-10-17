import katex from 'katex';
const escapeText=source=>source.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'}[c]));
// Unicode prose labels use the site's font; mathematical accents retain KaTeX metrics.
export function renderMath(tex,options={}){
 const original=String(tex).replace(/&lt;/g,'<').replace(/&gt;/g,'>');
 // Inline formulas are only promoted to a block when long in the source, so sentences are not split needlessly.
 const source=options.displayMode?wrapLongDisplayFormula(original):original.length>=68?wrapLongDisplayFormula(original,28,30):original;
 // An inline formula far wider than a line is shown as its own block instead of a scrolling box inside the paragraph.
 const tooWide=!options.displayMode&&visualWidth(original)>=44;
 const displayMode=!!options.displayMode||source!==original||tooWide,labels=[];
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
 if(source!==original||tooWide)html=html.replace('class="katex-display"','class="katex-display katex-auto-wrap"');
 return html.replace(/(<annotation encoding="application\/x-tex">)[\s\S]*?(<\/annotation>)/,(_,start,end)=>start+escapeText(original)+end);
}


// Break only long equation chains at top-level relations. Inline fragments and
// short formulas keep their authored layout; implications stay attached to conclusions.
// `aligned` keeps display style, so fractions, sums and limits stay full size (`array` shrinks them).
const stackRows=rows=>`\\begin{aligned}${rows.map(row=>`& ${row}`).join('\\\\')}\\end{aligned}`;
// Estimated rendered width in "characters": a fraction is as wide as its wider part, not its source length.
export function visualWidth(tex){
 let t=String(tex).replace(/\\(?:left|right|bigg?|Bigg?|quad|qquad)(?![A-Za-z])|\\[,;:!]/g,' ').replace(/\\text(?:sf|rm|normal)?\{([^{}]*)\}/g,(_,x)=>'x'.repeat(x.length));
 const fill=n=>'x'.repeat(Math.max(1,Math.ceil(n)));
 for(let guard=0;guard<40&&/[{^_]/.test(t.replace(/^x+$/,''));guard++){
  const before=t;
  t=t.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g,(_,a,b)=>fill(Math.max(rawWidth(a),rawWidth(b))+.6))
   .replace(/\\sqrt(?:\[[^\]]*\])?\{([^{}]*)\}/g,(_,a)=>fill(rawWidth(a)+1.2))
   .replace(/[\^_]\{([^{}]*)\}/g,(_,a)=>fill(rawWidth(a)*.6))
   .replace(/[\^_]([A-Za-z0-9])/g,()=>'x')
   .replace(/\{([^{}]*)\}/g,'$1');
  if(t===before)break;
 }
 return rawWidth(t);
}
function rawWidth(t){
 let width=0;
 for(const token of t.matchAll(/\\(implies|iff|Rightarrow|Leftrightarrow|to|rightarrow)\b|\\(le|ge|leq|geq|neq|ne|approx|equiv|in|notin|subset|cap|cup)\b|\\(sin|cos|tan|cot|log|ln|lim|max|min)\b|\\(cdot|times|pm|mp|div)\b|\\[A-Za-z]+|[=<>]|[+\-*\/]|\s+|./g)){
  const m=token[0];
  if(token[1]||/^[=<>]$/.test(m)||token[2])width+=2;else if(token[3])width+=2.4;else if(token[4]||/^[+\-*\/]$/.test(m))width+=1.5;else if(/^\s+$/.test(m))continue;else width+=1;
 }
 return width;
}
// Top-level relation / implication / semicolon positions, ignoring anything inside braces or \left...\right.
function breakPoints(source){
 const points=[];let depth=0;
 for(let i=0;i<source.length;i++){
  if(source[i]==='\\'){
   const command=source.slice(i).match(/^\\[A-Za-z]+/)?.[0];
   if(command){
    if(command==='\\left')depth++;
    if(command==='\\right')depth=Math.max(0,depth-1);
    if(depth===0&&(command==='\\implies'||command==='\\iff'))points.push({at:i,kind:'implies',command});
    i+=command.length-1;continue;
   }
   i++;continue;
  }
  if(source[i]==='{'){depth++;continue;}if(source[i]==='}'){depth=Math.max(0,depth-1);continue;}
  if(depth===0){
   if(source[i]===';')points.push({at:i+1,kind:'semicolon'});
   else if('⇔⟺⇒⟹'.includes(source[i]))points.push({at:i,kind:'implies',command:source[i]});
   else if('=≥≤≈≠'.includes(source[i]))points.push({at:i,kind:'relation'});
  }
 }
 return points;
}
// Choose row breaks that minimise raggedness (squared slack per row) so no row is left as a short orphan.
function balancedRows(pieces,maxLine){
 const n=pieces.length,width=(a,b)=>visualWidth(pieces.slice(a,b).join(''));
 const cost=w=>w>maxLine?10000+(w-maxLine)**2:(maxLine-w)**2;
 const best=Array(n+1).fill(Infinity),from=Array(n+1).fill(0);best[0]=0;
 for(let end=1;end<=n;end++)for(let start=0;start<end;start++){
  const total=best[start]+cost(width(start,end))+30;
  if(total<best[end]){best[end]=total;from[end]=start;}
 }
 const rows=[];for(let end=n;end>0;end=from[end])rows.unshift(pieces.slice(from[end],end).join('').trim());
 return rows;
}
const cutAt=(source,positions)=>{const pieces=[];let last=0;for(const at of positions){pieces.push(source.slice(last,at));last=at;}pieces.push(source.slice(last));return pieces.filter(x=>x.trim());};
// Lay a chain `lhs = a = b = c` out with the equals signs aligned: `lhs &= a \\ &= b`.
function chainRows(source,maxLine,leading=''){
 const equals=breakPoints(source).filter(point=>point.kind==='relation');
 if(equals.length<2)return null;
 // The left-hand side stays with the first relation so a row never starts with a bare symbol.
 const pieces=cutAt(source,equals.slice(1).map(point=>point.at));
 const rows=balancedRows(pieces,maxLine);
 if(rows.length<2)return null;
 return rows;
}
export function wrapLongDisplayFormula(source,maxLine=28,minLength=30,implicationLength=24){
 const total=visualWidth(source);
 if(total<implicationLength||/\\begin\s*\{/.test(source))return source;
 const points=breakPoints(source),implication=points.find(point=>point.kind==='implies');
 const firstEquals=points.find(point=>point.kind==='relation')?.at??-1;
 const stack=rows=>{
  if(firstEquals>0&&visualWidth(rows[0].slice(0,firstEquals))<=14)return `\\begin{aligned}${rows.map((row,index)=>index?`&${row}`:`${row.slice(0,firstEquals).trim()} &${row.slice(firstEquals)}`).join('\\\\')}\\end{aligned}`;
  return stackRows(rows);
 };
 if(points.some(point=>point.kind==='semicolon')){
  if(total<minLength)return source;
  const rows=balancedRows(cutAt(source,points.filter(point=>point.kind==='semicolon').map(point=>point.at)),maxLine);
  return rows.length>1?stackRows(rows):source;
 }
 if(implication){
  // Every implication starts its own row; long parts are chain-split with their equals signs aligned.
  const parts=[];let last=0,command='';
  for(const point of points.filter(item=>item.kind==='implies')){parts.push({command,text:source.slice(last,point.at).trim()});command=point.command;last=point.at+command.length;}
  parts.push({command,text:source.slice(last).trim()});
  if(!points.some(point=>point.kind==='relation'&&point.at<implication.at)||parts.some(part=>!part.text&&part.command===''))return source;
  const rows=parts.filter(part=>part.text).flatMap(({command:lead,text})=>(visualWidth(text)>maxLine&&chainRows(text,maxLine)||[text]).map((row,index)=>index||!lead?`& ${row}`:`${lead} & ${row}`));
  return `\\begin{aligned}${rows.join('\\\\')}\\end{aligned}`;
 }
 if(total<minLength)return source;
 const rows=chainRows(source,maxLine);
 return rows?stack(rows):source;
}
