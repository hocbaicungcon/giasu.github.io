/* credit: giasu.ai.vn */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Read text nodes without joining across elements or treating operators inside
// code, formulas, diagrams, comments and HTML attributes as Markdown errors.
export function articleTextNodes(html) {
 const nodes=[];
 const prose=[...html.matchAll(/<article\b[^>]*class="[^"]*\bprose\b[^"]*"[^>]*>([\s\S]*?)<\/article>/gi)].map(m=>m[1]);
 for(const body of prose){
  const stack=[];
  let cursor=0;
  for(const match of body.matchAll(/<!--[\s\S]*?-->|<(\/?)([a-z][\w:-]*)\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)){
   if(!stack.at(-1)?.skip&&match.index>cursor)nodes.push(body.slice(cursor,match.index));
   cursor=match.index+match[0].length;
   if(match[0].startsWith('<!--'))continue;
   const name=match[2].toLowerCase();
   if(match[1]){
    const index=stack.findLastIndex(element=>element.name===name);
    if(index!==-1)stack.length=index;
   } else if(!/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(name)&&!match[0].endsWith('/>')){
    const skip=stack.at(-1)?.skip||/^(?:pre|code|script|style|textarea|svg|math)$/.test(name)||/\bclass\s*=\s*["'][^"']*\bkatex\b/.test(match[0]);
    stack.push({name,skip});
   }
  }
  if(!stack.at(-1)?.skip&&cursor<body.length)nodes.push(body.slice(cursor));
 }
 return nodes;
}
export function findMarkdownLeaks(html) {
 return articleTextNodes(html).flatMap(text=>[...text.matchAll(/.{0,50}\*{2,}.{0,90}/g)].map(hit=>hit[0].trim()));
}

export function auditMarkdown(directory) {
 const files=fs.readdirSync(directory).filter(file=>file.endsWith('.html')).sort();
 const issues=[];
 for(const file of files){
  const leaks=findMarkdownLeaks(fs.readFileSync(path.join(directory,file),'utf8'));
  if(leaks.length)issues.push({file,leaks});
 }
 return {checked:files.length,issues};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const result=auditMarkdown(process.argv[2] || fileURLToPath(new URL('../dist/bai-viet/',import.meta.url)));
 for(const {file,leaks} of result.issues)console.error(`${file}\n${leaks.map(text=>'  '+text).join('\n')}`);
 console.log(`Markdown audit: ${result.checked} bài, ${result.issues.length} bài còn dấu định dạng bị lộ.`);
 process.exitCode=result.issues.length?1:0;
}
