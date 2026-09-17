import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import YAML from 'yaml';

function group(s,start){
 if(s[start]!=='{')throw Error('Thiếu dấu { trong LaTeX');
 let depth=1;
 for(let i=start+1;i<s.length;i++){
  if(s[i]==='\\'){i++;continue;}
  if(s[i]==='{')depth++;
  if(s[i]==='}'&&!--depth)return {text:s.slice(start+1,i),end:i+1};
 }
 throw Error('Ngoặc nhọn LaTeX chưa đóng');
}
function commands(s,name,transform){
 const re=new RegExp('\\\\(?:'+name+')\\*?\\s*\\{','g');let out='',last=0,m;
 while((m=re.exec(s))){const g=group(s,re.lastIndex-1);out+=s.slice(last,m.index)+transform(g.text,m[0]);last=g.end;re.lastIndex=g.end;}
 return out+s.slice(last);
}
export function stripComments(s){return s.split('\n').map(line=>{for(let i=0;i<line.length;i++){if(line[i]==='\\'){i++;continue;}if(line[i]==='%')return line.slice(0,i);}return line;}).join('\n');}
export function convertLatex(source,{renderTikz=()=>{throw Error('Cần bộ biên dịch TikZ');}}={}){
 let s=stripComments(source.replace(/\r\n/g,'\n'));
 if(s.includes('\\begin{document}'))s=s.split('\\begin{document}')[1].split('\\end{document}')[0];
 const stored=[];const hold=v=>{const k=`LATEXPLACEHOLDER${stored.length}END`;stored.push(v);return k;};
 s=s.replace(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g,t=>hold(`\n\n![Hình minh họa hoặc bảng biến thiên](${renderTikz(t)})\n\n`));
 s=s.replace(/\\\[([\s\S]*?)\\\]/g,(_,m)=>`$$\n${m}\n$$`).replace(/\\\(([\s\S]*?)\\\)/g,(_,m)=>`$${m}$`);
 s=s.replace(/\$\$[\s\S]*?\$\$|\$(?:\\.|[^$\n])+\$/g,m=>hold(m.replace(/\\SI\{([^{}]*)\}\{([^{}]*)\}/g,'$1\\,\\mathrm{$2}').replace(/\\si\{([^{}]*)\}/g,'\\mathrm{$1}')));
 s=s.replace(/\\setcounter\{bt\}\{0\}/g,'LATEXRESETCOUNTER');
 s=s.replace(/\\setlist(?:\[[^\]]*\])?\{[^\n]*\}/g,'');
 s=s.replace(/\\begin\{(?:minipage|multicols)\}(?:\[[^\]]*\])?\{[^}]*\}/g,'').replace(/\\end\{(?:minipage|multicols)\}/g,'');
 s=commands(s,'section|subsection|subsubsection',t=>`\n\n## ${t}\n\n`);
 s=commands(s,'textbf',t=>`**${t}**`);s=commands(s,'textit|emph',t=>`*${t}*`);
 s=s.replace(/\\(?:Huge|huge|Large|large|bfseries|centering)\b\s*/g,'');
 let title=s.match(/\\begin\{center\}\s*\*\*\{?([^*{}]+)\}?\*\*/)?.[1]?.trim();
 s=s.replace(/\\(?:begin|end)\{center\}/g,'');
 let counter=0,questions=0;
 s=s.replace(/LATEXRESETCOUNTER|\\begin\{baitap\}|\\end\{baitap\}/g,m=>{if(m==='LATEXRESETCOUNTER'){counter=0;return '';}if(m==='\\begin{baitap}'){questions++;return `\n\n### Câu ${++counter}\n\n`;}return '\n\n';});
 s=s.replace(/\\begin\{enumerate\}(?:\[([^\]]*)\])?([\s\S]*?)\\end\{enumerate\}/g,(_,style,body)=>{
  if(body.includes('\\begin{enumerate}'))throw Error('Danh sách LaTeX lồng nhau chưa hỗ trợ');
  const lower=style?.includes('a)');let n=0;return '\n\n'+body.split(/\\item\s*/).filter(x=>x.trim()).map(item=>`- **${String.fromCharCode((lower?97:65)+n++)}${lower?')':'.'}** ${item.trim()}`).join('\n\n')+'\n\n';
 });
 s=s.replace(/\\(?:vspace|hspace)\*?\{[^}]*\}/g,'').replace(/\\(?:quad|qquad|noindent)\b/g,' ').replace(/\\%/g,'%');
 s=s.replace(/[{}]/g,'');
 const unsupported=s.match(/\\[a-zA-Z]+/g);if(unsupported)throw Error(`Lệnh LaTeX chưa hỗ trợ ngoài công thức: ${[...new Set(unsupported)].join(', ')}`);
 s=s.replace(/^[ \t]+/gm,'');
 s=s.replace(/LATEXPLACEHOLDER(\d+)END/g,(_,n)=>stored[Number(n)]).replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
 return {body:s,title,questions};
}
function run(command,args,cwd){const result=spawnSync(command,args,{cwd,encoding:'utf8',timeout:60000,maxBuffer:8*1024*1024});if(result.error||result.status!==0)throw Error(`${command} thất bại: ${result.error?.message||((result.stdout||'')+(result.stderr||'')).slice(-2200)}`);}
export function importLatex(root){
 const dir=path.join(root,'post');const files=fs.readdirSync(dir).filter(f=>/\.tex$/i.test(f));
 const generated=path.join(root,'.generated');fs.mkdirSync(generated,{recursive:true});
 const results=[];const slugs=new Set(fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>f.slice(0,-3)));
 for(const file of files){
  const stem=file.replace(/\.tex$/i,'');const slug=stem.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[đĐ]/g,'d').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  if(!slug||slugs.has(slug))throw Error(`${file}: tên bài trùng hoặc không hợp lệ: ${slug}`);slugs.add(slug);
  const images=[];
  const background=/--paper:\s*#([0-9a-f]{6})\b/i.exec(fs.readFileSync(path.join(root,'assets/style.css'),'utf8'))?.[1];
  if(!background)throw Error('Không tìm thấy màu nền --paper dạng HEX trong style.css');
  const result=convertLatex(fs.readFileSync(path.join(dir,file),'utf8'),{renderTikz(tikz){
   if(/\\(?:input|include|write|openout|read|catcode|csname|usepackage|documentclass)\b/.test(tikz))throw Error(`${file}: lệnh không được phép trong hình TikZ`);
   const hash=createHash('sha256').update('paper-background-v1:'+background+':'+tikz).digest('hex').slice(0,20),cache=path.join(generated,'tikz',hash);fs.mkdirSync(cache,{recursive:true});
   const png=path.join(cache,'figure.png');
   if(!fs.existsSync(png)){
    fs.writeFileSync(path.join(cache,'figure.tex'),'\\documentclass[tikz,border=6pt]{standalone}\n\\usepackage{amsmath,amssymb,tkz-tab}\n\\usetikzlibrary{arrows,arrows.meta,calc,patterns}\n\\definecolor{sitebackground}{HTML}{'+background+'}\n\\begin{document}\n\\pagecolor{sitebackground}\n'+tikz+'\n\\end{document}');
    run('pdflatex',['-no-shell-escape','-interaction=nonstopmode','-halt-on-error','figure.tex'],cache);
    run('pdftoppm',['-png','-singlefile','-scale-to','1600','figure.pdf','figure'],cache);
   }
   images.push({source:png,name:`${hash}.png`});return `../assets/latex/${hash}.png`;
  }});
  const metadataPath=path.join(dir,stem+'.yml');const custom=fs.existsSync(metadataPath)?YAML.parse(fs.readFileSync(metadataPath,'utf8')):{};
  const git=spawnSync('git',['log','-1','--format=%cs','--',`post/${file}`],{cwd:root,encoding:'utf8'});
  const date=git.stdout?.trim()||fs.statSync(path.join(dir,file)).mtime.toISOString().slice(0,10);
  const meta={title:result.title||stem,description:`Bài tập chuyển từ LaTeX, gồm ${result.questions} câu hỏi.`,category:'Toán học',type:'Bài tập',date,tags:['toán học','đề luyện tập'],...custom};
  const markdown='---\n'+YAML.stringify(meta)+'---\n\n'+result.body+'\n';
  fs.writeFileSync(path.join(generated,slug+'.md'),markdown);
  results.push({filename:slug+'.md',markdown,images});
  console.log(`LaTeX: ${file} → ${slug}.md (${result.questions} câu, ${images.length} hình)`);
 }
 return results;
}
