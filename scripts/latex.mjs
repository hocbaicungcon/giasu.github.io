import fs from 'node:fs';
import katex from 'katex';
import {normalizeCategory} from '../assets/subject-groups.js';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import YAML from 'yaml';
import {extractExam} from './exams.mjs';
import {examMetadata} from './exam-metadata.mjs';

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
function convertUnits(text){
 const symbols={
  meter:'m',
  metre:'m',
  second:'s',
  gram:'g',
  liter:'L',
  litre:'L',
  centi:'c',
  milli:'m',
  kilo:'k',
  hour:'h',
  minute:'min'
 };

 const unitPart=part=>{
  const power=
   /\\(?:cubic|cubed)\b/.test(part)?'³':
   /\\(?:square|squared)\b/.test(part)?'²':'';

  part=part.replace(/\\(?:cubic|cubed|square|squared)\b/g,'');

  part=part.replace(/\\([a-zA-Z]+)/g,(command,name)=>{
   if(name==='cdot')return '·';
   if(!(name in symbols))
    throw Error(`Đơn vị LaTeX chưa hỗ trợ: ${command}`);
   return symbols[name];
  });

  return part+power;
 };

 const unitText=unit=>
  unit.split(/\\per\b/).map(unitPart).join('/');

 text=text.replace(
  /\\num\{([+-]?[\d.,]+)\}/g,
  '$1'
 );

 text=text.replace(
  /\\(?:SI|qty)\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g,
  (_,value,unit)=>`${value.replace(/\{,\}/g,',')} ${unitText(unit)}`
 );

 text=text.replace(
  /\\(?:si|unit)\{((?:[^{}]|\{[^{}]*\})*)\}/g,
  (_,unit)=>unitText(unit)
 );

 return text;
}
function convertMathUnits(math){
 const units=[];

 // Lưu phần văn bản cần đưa ra ngoài môi trường toán.
 const holdText=text=>{
  const key=`UNITTEXT${units.length}END`;
  units.push(text);
  return key;
 };

 // Dùng convertUnits() cho các lệnh siunitx.
 const holdUnit=text=>holdText(convertUnits(text));

 // ============================================================
 // 1. siunitx
 // ============================================================

 // \SI{5}{\meter}
 // \qty{5{,}9}{\centi\meter\cubic}
 math=math.replace(
  /\\(?:SI|qty){((?:[^{}]|{[^{}]*})*)}{((?:[^{}]|{[^{}]*})*)}/g,
  holdUnit
 );

 // \si{\meter}
 // \unit{\meter\squared}
 math=math.replace(
  /\\(?:si|unit){((?:[^{}]|{[^{}]*})*)}/g,
  holdUnit
 );

 // \num{5,9}
 math=math.replace(
  /\\num{([+-]?[\d.,]+)}/g,
  (_,value)=>value
 );

 // ============================================================
 // 2. Các đơn vị cho phép
 // ============================================================

 const allowedUnits=new Set([
  // Độ dài
  'mm','cm','dm','m','dam','hm','km',

  // Diện tích
  'mm²','cm²','dm²','m²','dam²','hm²','km²',

  // Thể tích
  'mm³','cm³','dm³','m³','dam³','hm³','km³',

  // Khối lượng
  'mg','g','kg','t',

  // Dung tích
  'mL','ml','cL','dL','L',

  // Thời gian
  'ms','s','min','h',

  // Vận tốc, gia tốc
  'm/s','m/s²','km/h',

  // Tiền tệ
  'USD','VND','EUR','GBP'
 ]);

 const normalizeUnit=unit=>unit
  .replace(/\^\{?2\}?/g,'²')
  .replace(/\^\{?3\}?/g,'³')
  .replace(/\\cdot/g,'·')
  .replace(/\s+/g,'')
  .trim();

 // ============================================================
 // 3. Đơn vị viết bằng \mathrm{...}
 // ============================================================

 /*
   $25 \mathrm{USD}$     -> 25 USD
   $20\,\mathrm{cm}$     -> 20 cm
   $5\,\mathrm{m/s}$     -> 5 m/s
   $20\,\mathrm{cm^2}$   -> 20 cm²

   Chỉ xử lý khi:
   - phía trước là một chữ số;
   - nội dung \mathrm thuộc whitelist.

   Nhờ vậy không ảnh hưởng:
   $\mathrm{e}^x$
   $\mathrm{rank}(A)$
 */

 math=math.replace(
  /(\d)(?:\\,|\\;|\\:|\\quad|\\qquad|\\ )?\s*\\mathrm{([^{}]+)}/g,
  (whole,digit,rawUnit)=>{
   const unit=normalizeUnit(rawUnit);

   if(!allowedUnits.has(unit))
    return whole;

   return digit+holdText(unit);
  }
 );

 // ============================================================
 // 4. Đơn vị viết trực tiếp sau số
 // ============================================================

 /*
   $25\,dm$       -> 25 dm
   $100\,USD$     -> 100 USD
   $20\,cm^2$     -> 20 cm²
   $5\,m^3$       -> 5 m³
   $72\,km/h$     -> 72 km/h
   $10\,m/s^2$    -> 10 m/s²

   Bắt buộc đơn vị phải đứng sau chữ số.
   Vì vậy không quét nhầm chữ trong \frac, \lim, \sin...
 */

 const directUnitPattern=[
  'km/h',
  'm/s',

  'USD','VND','EUR','GBP',

  'dam','min',

  'mm','cm','dm','hm','km',
  'mg','kg',
  'mL','ml','cL','dL',
  'ms',

  'm','g','t','L','s','h'
 ]
 .sort((a,b)=>b.length-a.length)
 .map(unit=>unit.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'))
 .join('|');

 math=math.replace(
  new RegExp(
   `(\\d)` +
   String.raw`(?:\\,|\\;|\\:|\\quad|\\qquad|\\ )?\s*` +
   `(${directUnitPattern})` +
   String.raw`(?:\^\{?([23])\}?)?`,
   'g'
  ),
  (whole,digit,rawUnit,power)=>{
   let unit=rawUnit;

   if(power==='2')
    unit+='²';
   else if(power==='3')
    unit+='³';

   if(!allowedUnits.has(unit))
    return whole;

   return digit+holdText(unit);
  }
 );

 // ============================================================
 // 5. Không tìm thấy đơn vị
 // ============================================================

 if(!units.length)
  return `$${math}$`;

 // ============================================================
 // 6. Tách toán và văn bản
 // ============================================================

 /*
   Ví dụ:

   x=25\,dm

   sau bước trên:
   x=25UNITTEXT0END

   kết quả:
   $x=25$ dm
 */

 const parts=math.split(/(UNITTEXT\d+END)/);

 return parts
  .map(part=>{
   const match=part.match(/^UNITTEXT(\d+)END$/);

   if(match)
    return units[Number(match[1])];

   // Xóa khoảng cách LaTeX thừa sát đơn vị.
   part=part.replace(
    /(?:\\,|\\;|\\:|\\quad|\\qquad|\\ )+\s*$/g,
    ''
   );

   part=part.replace(
    /^\s*(?:\\,|\\;|\\:|\\quad|\\qquad|\\ )+/g,
    ''
   );

   part=part.trim();

   return part ? `$${part}$` : '';
  })
  .filter(Boolean)
  .join(' ');
}
// function convertUnits(text){
//  text=text.replace(/\\num\{([+-]?[\d.,]+)\}/g,'$1');
//  const unitMath=unit=>unit.split(/\\per\b/).map(part=>{
//   let power=part.includes('\\cubic')?3:part.includes('\\square')?2:null;
//   part=part.replace(/\\(?:cubic|square)\b/g,'');
//   const symbols={meter:'m',metre:'m',second:'s',gram:'g',liter:'L',litre:'L',centi:'c',milli:'m',kilo:'k',hour:'h',minute:'min'};
//   part=part.replace(/\\([a-zA-Z]+)/g,(command,name)=>{if(name==='cdot')return '\\cdot ';if(!(name in symbols))throw Error(`Đơn vị LaTeX chưa hỗ trợ: ${command}`);return symbols[name];});
//   return `\\mathrm{${part}}${power?`^{${power}}`:''}`;
//  }).join('/');
//  return text.replace(/\\SI\{([^{}]*)\}\{([^{}]*)\}/g,(_,value,unit)=>`${value}\\,${unitMath(unit)}`).replace(/\\si\{([^{}]*)\}/g,(_,unit)=>unitMath(unit));
// }
export function convertLatex(source,options={}){
 try{
  const stack=[];
  for(const m of stripComments(source).matchAll(/\\(begin|end)\{([^}]+)\}/g)){
   if(m[1]==='begin')stack.push(m);
   else if(stack.at(-1)?.[2]===m[2])stack.pop();
   else throw Object.assign(Error(`Môi trường ${m[2]} đóng không khớp`),{sourceIndex:m.index});
  }
  if(stack.length)throw Object.assign(Error(`Thiếu \\end{${stack.at(-1)[2]}}`),{sourceIndex:stack.at(-1).index});
  return convertLatexBody(source,options);
 }catch(error){
  if(error.sourceLocated)throw error;
  const command=error.message.match(/(?:Undefined control sequence:|ngoài công thức:|chưa hỗ trợ:)\s*(\\[a-zA-Z]+)/)?.[1];
  let index=error.sourceIndex??(command?stripComments(source).indexOf(command):-1);
  if(index<0)index=source.search(/\\begin\{(?:align|array|cases|enumerate|tabular)/);
  const line=(options.sourceLine||1)+source.slice(0,Math.max(0,index)).split('\n').length-1;
  const wrapped=Error(`${options.filename||'LaTeX'}:${line}: ${error.message}`);wrapped.sourceLocated=true;throw wrapped;
 }
}
function convertLatexBody(source,{lowerLists=false,sourceLine:baseLine=1,renderTikz=()=>{throw Error('Cần bộ biên dịch TikZ');}}={}){
 let s=stripComments(source.replace(/\r\n/g,'\n'));
 // Xóa tiêu đề ĐỀ 001, ĐỀ 002, ...
s=s.replace(
 /\\begin\{center\}\s*\\textbf\{\{\\Huge\s+ĐỀ\s+\d+\}\}\s*\\end\{center\}/giu,
 ''
);
 s=commands(s,'enlargethispage',()=> '');
 // // siunitx v3 quantity syntax, including decimal commas written as {,}.
 // s=s.replace(/\\qty\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{([^{}]*)\}/g,(_,value,unit)=>`\\SI{${value.replace(/\{,\}/g,',')}}{${unit}}`);
 s=s.replace(/\\begin\{traloi\}[\s\S]*?\\end\{traloi\}/g,m=>m.replace(/[^\n]/g,' '));
 if(s.includes('\\begin{document}'))s=s.split('\\begin{document}')[1].split('\\end{document}')[0];
 const stored=[];const hold=v=>{const k=`LATEXPLACEHOLDER${stored.length}END`;stored.push(v);return k;};
 // s=s.replace(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g,t=>hold(`\n\n![Hình minh họa hoặc bảng biến thiên](${renderTikz(t)})\n\n`));
 s=s.replace(
 /\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g,
 (tikz,offset)=>{
  const sourceLine=baseLine+s.slice(0,offset).split('\n').length-1;
  try{return hold(`\n\n![Hình minh họa hoặc bảng biến thiên](${renderTikz(tikz,sourceLine)})\n\n`);}catch(error){error.sourceIndex=source.indexOf(tikz);throw error;}
 }
);
 s=s.replace(/\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\$(?:\\.|[^$\n])+\$|\\begin\{(align\*?|aligned|alignat\*?|gather\*?|gathered|equation\*?|cases|array|matrix|pmatrix|bmatrix|vmatrix|Vmatrix|split)\}[\s\S]*?\\end\{\1\}/g,m=>{
  const inline=m.startsWith('$')&&!m.startsWith('$$')||m.startsWith('\\(');
  let math=m.startsWith('$$')?m.slice(2,-2):m.startsWith('$')?m.slice(1,-1):m.startsWith('\\[')||m.startsWith('\\(')?m.slice(2,-2):m;
  math=math.replace(/\\(?:begin|end)\{(align|gather|equation|alignat)\*\}/g,(command,env)=>command.replace(env+'*',env));
  if(/\\(?:SI|si|qty|unit|num)\b/.test(math))return hold(convertMathUnits(math));
  try{katex.renderToString(math,{displayMode:!inline,throwOnError:true,strict:false});}catch(error){
   const start=stripComments(source).indexOf(m);
   const delimiter=m.startsWith('$$')||m.startsWith('\\[')||m.startsWith('\\(')?2:m.startsWith('$')?1:0;
   error.sourceIndex=Math.max(0,start)+delimiter+(Number.isInteger(error.position)?error.position:0);throw error;
  }
  return hold(inline?'$'+math+'$':'\n\n$$\n'+math+'\n$$\n\n');
 });
 s=s.replace(/\\num\{([+-]?[\d.,]+)\}/g,'$1');
 // s=s.replace(/\\SI\{[^{}]*\}\{[^{}]*\}|\\si\{[^{}]*\}/g,m=>hold(`$${convertUnits(m)}$`));
 s=s.replace(
 /\\(?:SI|qty)\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}|\\(?:si|unit)\{((?:[^{}]|\{[^{}]*\})*)\}/g,
 m=>hold(convertUnits(m))
);
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
  const lower=lowerLists||style?.includes('a)')||style?.includes('alph');let n=0;return '\n\n'+body.split(/\\item\s*/).filter(x=>x.trim()).map(item=>`- **${String.fromCharCode((lower?97:65)+n++)}${lower?')':'.'}** ${item.trim()}`).join('\n\n')+'\n\n';
 });
 s=s.replace(/\\begin\{itemize\}([\s\S]*?)\\end\{itemize\}/g,(_,body)=>{
  if(body.includes('\\begin{itemize}'))throw Error('Danh sách LaTeX lồng nhau chưa hỗ trợ');
  return '\n\n'+body.split(/\\item\s*/).filter(x=>x.trim()).map(x=>`- ${x.trim()}`).join('\n\n')+'\n\n';
 });
 s=s.replace(/\\begin\{tabular\}\{([|lcr\s]+)\}([\s\S]*?)\\end\{tabular\}/g,(_,spec,body)=>{
  const align=[...spec].filter(c=>/[lcr]/.test(c)).map(c=>c==='c'?':---:':c==='r'?'---:':':---');
  const rows=body.replace(/\\hline\b/g,'').split(/\\\\/).map(r=>r.trim()).filter(Boolean).map(r=>r.split(/(?<!\\)&/).map(c=>c.trim().replace(/\\&/g,'&').replace(/\|/g,'&#124;')));
  if(!rows.length||rows.some(r=>r.length!==align.length))throw Error('Bảng tabular có số ô không khớp số cột');
  const row=r=>`| ${r.join(' | ')} |`;
  return '\n\n'+[row(rows[0]),row(align),...rows.slice(1).map(row)].join('\n')+'\n\n';
 });
 s=s.replace(/\\(?:vspace|hspace)\*?\{[^}]*\}/g,'').replace(/\\(?:quad|qquad|noindent)\b/g,' ').replace(/\\%/g,'%');
 const unsupported=s.match(/\\[a-zA-Z]+/g);if(unsupported)throw Error(`Lệnh LaTeX chưa hỗ trợ ngoài công thức: ${[...new Set(unsupported)].join(', ')}`);
 s=s.replace(/[{}]/g,'');
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
  // TikZ nằm trong khung bài viết màu trắng, nên dùng đúng màu nền của khung
  // thay vì màu nền tổng thể của trang (--paper hơi ngả xanh).
  const css=fs.readFileSync(path.join(root,'assets/style.css'),'utf8');
  const background=/\.article-wrap\{[^}]*background:#([0-9a-f]{6})\b/i.exec(css)?.[1]||'ffffff';
  const source=fs.readFileSync(path.join(dir,file),'utf8');
  const conversionOptions={filename:file,renderTikz(tikz,sourceLine=1){
   if(/\\(?:input|include|write|openout|read|catcode|csname|usepackage|documentclass)\b/.test(tikz))throw Error(`${file}: lệnh không được phép trong hình TikZ`);
   // 14 TeX pt ≈ 18.6 CSS px. Normalize legacy size commands too.
   tikz=tikz.replace(/\\(?:tiny|scriptsize|footnotesize|small|normalsize|large|Large|LARGE|huge|Huge)\b/g, String.raw`\fontsize{14pt}{17pt}\selectfont`);
   const hash=createHash('sha256').update('article-background-v4-normalized-14pt:'+background+':'+tikz).digest('hex').slice(0,20),cache=path.join(generated,'tikz',hash);fs.mkdirSync(cache,{recursive:true});
   const svg=path.join(cache,'figure.svg');
   // Reject old raster wrappers: their square viewBox loses the physical size.
   if(!fs.existsSync(svg)||/data:image\/png/.test(fs.readFileSync(svg,'utf8'))){
    fs.writeFileSync(path.join(cache,'figure.tex'),'\\documentclass[tikz,border=6pt]{standalone}\n\\usepackage{fix-cm}\n\\usepackage[utf8]{vietnam}\n\\usepackage{amsmath,amssymb,tkz-tab,fontawesome5,tkz-euclide}\n\\usetikzlibrary{arrows,arrows.meta,calc,patterns}\n\\definecolor{sitebackground}{HTML}{'+background+'}\n\\begin{document}\n\\pagecolor{sitebackground}\n\\fontsize{14pt}{17pt}\\selectfont\n'+tikz+'\n\\end{document}');
    try{run('pdflatex',['-no-shell-escape','-file-line-error','-interaction=nonstopmode','-halt-on-error','figure.tex'],cache);}catch(error){
     const reported=Number(error.message.match(/figure\.tex:(\d+):/)?.[1]||error.message.match(/\bl\.(\d+)/)?.[1]);
     // The generated preamble contains nine lines before the source TikZ.
     const line=reported>9?sourceLine+reported-10:sourceLine;
     const located=Error(`${file}:${line}: ${error.message}`);located.sourceLocated=true;throw located;
    }
    if(process.platform==='darwin' && spawnSync('dvisvgm',['--version'],{encoding:'utf8'}).status===0)run('dvisvgm',['--pdf','--no-fonts','-o','figure.svg','figure.pdf'],cache);
    else if(spawnSync('pdftocairo',['-v'],{encoding:'utf8',stdio:'ignore'}).status===0)run('pdftocairo',['-svg','figure.pdf','figure.svg'],cache);
    else if(spawnSync('dvisvgm',['--version'],{encoding:'utf8'}).status===0)run('dvisvgm',['--pdf','--no-fonts','-o','figure.svg','figure.pdf'],cache);
    else throw Error(`${file}: cần dvisvgm hoặc pdftocairo để tạo SVG vector đúng kích thước; không dùng PNG bọc trong SVG`);
   }
   if(!images.some(image=>image.name===`${hash}.svg`))images.push({source:svg,name:`${hash}.svg`});return `../assets/latex/${hash}.svg`;
  }};
  const result=convertLatex(source,conversionOptions);
  let examQuestions;try{examQuestions=extractExam(source,conversionOptions);}catch(error){throw Error(`${file}: ${error.message}`);}
  const metadataPath=path.join(dir,stem+'.yml');const custom=fs.existsSync(metadataPath)?YAML.parse(fs.readFileSync(metadataPath,'utf8')):{};
  const git=spawnSync('git',['log','-1','--format=%cs','--',`post/${file}`],{cwd:root,encoding:'utf8'});
  const date=git.stdout?.trim()||fs.statSync(path.join(dir,file)).mtime.toISOString().slice(0,10);
  const meta={title:result.title||stem,description:`Bài tập chuyển từ LaTeX, gồm ${result.questions} câu hỏi.`,category:'Toán học',type:'Bài tập',date,tags:['toán học','đề luyện tập'],...custom};
  meta.category=normalizeCategory(meta.category);
  const markdown='---\n'+YAML.stringify(meta)+'---\n\n'+result.body+'\n';
  fs.writeFileSync(path.join(generated,slug+'.md'),markdown);
  const duration=custom?.exam?.duration??90;
  if(!Number.isInteger(duration)||duration<1||duration>600)throw Error(`${file}: exam.duration phải từ 1 đến 600 phút`);
  const examInfo=examMetadata(meta,file);
  if(examInfo.mode==='self-review')examQuestions=examQuestions.map(q=>({...q,kind:'proof',answer:null}));
  results.push({filename:slug+'.md',markdown,images,exam:{slug,date:meta.date,title:meta.title,category:meta.category,grade:meta.grade,duration,...examInfo,questions:examQuestions}});
  console.log(`LaTeX: ${file} → ${slug}.md (${result.questions} câu, ${images.length} hình)`);
 }
 return results;
}
