/* credit: giasu.ai.vn */
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import {escapeHTML} from './interactive.mjs';
export const normalizeTerm = value => value.normalize('NFC').toLocaleLowerCase('vi').replace(/\s+/g,' ').trim();
export function prepareGlossary(master,supplement=[],definitions={}){
 const used=new Set();
 return [...master.terms,...supplement.map(t=>({...t,origin:'editorial',source:'Gia Sư Thông Minh · giải nghĩa bổ sung',pages:''}))].map(term=>{
  if(!term.id||used.has(term.id))throw Error('glossary: ID trùng hoặc thiếu');used.add(term.id);
  const aliases=[term.term,...(term.aliases||[])];
  // Parentheses in the workbook describe context, not part of the phrase pupils read.
  if(/\s+\([^)]*\)$/.test(term.term)){
   const short=term.term.replace(/\s+\([^)]*\)$/,'');
   if(short.includes(' '))aliases.push(short);
  }
  const variants=aliases.flatMap(s=>[s,s.replace(/lí(?=\s|$)/g,'lý'),s.replace(/toạ(?=\s|$)/g,'tọa')]);
  const definition=term.definition||definitions[term.id]||'';
  const definitionSource=term.origin==='editorial'||(!term.definition&&definitions[term.id])?'Gia Sư Thông Minh · giải nghĩa tự biên soạn':'Giải nghĩa trong danh sách Excel';
  const renderText=text=>text.split(/(\$[^$]+\$)/g).map(part=>{
   if(!part.startsWith('$')||!part.endsWith('$'))return escapeHTML(part);
   const tex=part.slice(1,-1).replace(/\\\\(?=[A-Za-z])/g,'\\');
   try{return katex.renderToString(tex,{throwOnError:true,strict:false});}catch{return escapeHTML(part);}
  }).join('');
  const html=renderText(definition),termHtml=renderText(term.term);
  return {...term,aliases:[...new Set(variants.map(normalizeTerm))].filter(s=>s.length>=4&&!s.includes('$')),definition,definitionSource,html,termHtml};
 });
}
export function buildGlossary(root,out){
 const master=JSON.parse(fs.readFileSync(path.join(root,'assets/data/math-glossary.json'),'utf8'));
 const extra=JSON.parse(fs.readFileSync(path.join(root,'assets/data/math-glossary-supplement.json'),'utf8'));
 const definitions=JSON.parse(fs.readFileSync(path.join(root,'assets/data/math-glossary-definitions.json'),'utf8'));
 const terms=prepareGlossary(master,extra,definitions);
 if(terms.some(t=>!t.definition.trim()))throw Error('glossary: còn thuật ngữ thiếu giải nghĩa');
 fs.writeFileSync(path.join(out,'assets/data/math-glossary.json'),JSON.stringify({source:master.source,terms}));
 return terms;
}
