import {stripComments,convertLatex} from './latex.mjs';

// Answers are explicit metadata, never inferred by solving the explanation.
export function extractExam(source,options={}){
 const clean=stripComments(source);const questions=[];let previousSection='',number=0;
 for(const match of clean.matchAll(/\\begin\{baitap\}([\s\S]*?)\\end\{baitap\}/g)){
  try{
  const before=clean.slice(0,match.index);
  const sections=[...before.matchAll(/\\(?:subsubsection|subsection|section)\*?\{([^{}]*)\}/g)];
  const section=sections.at(-1)?.[1]||'Bài tập';if(section!==previousSection){number=0;previousSection=section;}
  const lineAt=offset=>clean.slice(0,offset).split('\n').length;
  const questionOptions={...options,sourceLine:lineAt(match.index)};
  let text=match[1];const solutions=[...text.matchAll(/\\begin\{traloi\}([\s\S]*?)\\end\{traloi\}/g)];
  if(solutions.length>1)throw Error('Mỗi câu chỉ được có một môi trường traloi');
  let solution=solutions[0]?.[1]||'';
  text=text.replace(/\\begin\{traloi\}[\s\S]*?\\end\{traloi\}/g,m=>m.replace(/[^\n]/g,' '));
  const lists=[...text.matchAll(/\\begin\{enumerate\}(?:\[([^\]]*)\])?([\s\S]*?)\\end\{enumerate\}/g)];
  if(lists.length>1)throw Error('Mỗi câu thi chỉ hỗ trợ một danh sách phương án');
  const list=lists[0];const choices=[];
  if(list){
   const contentStart=match.index+'\\begin{baitap}'.length+text.indexOf(list[0])+list[0].indexOf(list[2]);
   const entries=[...list[2].matchAll(/\\item\s*/g)];
   for(let i=0;i<entries.length;i++){
    const start=entries[i].index+entries[i][0].length,end=entries[i+1]?.index??list[2].length;
    choices.push(convertLatex(list[2].slice(start,end),{...options,sourceLine:lineAt(contentStart+start)}).body);
   }
  }
  const kind=/tự\s*luận|trình bày lời giải|Phần\s+(?:IV|4)[.\s]/i.test(section)?'proof':list?(list[1]?.includes('a)')||/Phần\s+II[.\s]/i.test(section)?'truefalse':'choice'):'short';
  if(list)text=text.replace(list[0],m=>m.replace(/[^\n]/g,' '));
  const explicit=[...solution.matchAll(/\\dapan\{((?:[^{}]|\{[^{}]*\})*)\}/g)];
  if(explicit.length>1)throw Error('Mỗi traloi chỉ được có một lệnh dapan');
  let answer=explicit[0]?.[1]?.trim();
  if(answer!==undefined){
  // Cho phép \dapan{$-1,2$} và \dapan{$-1{,}2$}
    answer=answer
      .replace(/^\$(.*)\$$/s,'$1')
      .replace(/\{,\}/g,',')
      .trim();
  }
  // const explicit=[...solution.matchAll(/\\dapan\{([^{}]*)\}/g)];
  // if(explicit.length>1)throw Error('Mỗi traloi chỉ được có một lệnh dapan');
  // let answer=explicit[0]?.[1]?.trim();


  // Also accept the unambiguous, common single-choice sentence “Chọn A.”.
  if(answer===undefined&&kind==='choice'){
   const stated=[...solution.matchAll(/(?:Chọn|Đáp án\s*:)\s*([A-D])(?:[.\s]|$)/gi)];
   const unique=[...new Set(stated.map(m=>m[1].toUpperCase()))];if(unique.length===1)answer=unique[0];
  }
  solution=solution.replace(/\\dapan\{((?:[^{}]|\{[^{}]*\})*)\}/g,'');
  let key=null;
  if(answer!==undefined){
   if(kind==='choice'){
    const idx=answer.toUpperCase().charCodeAt(0)-65;
    if(!/^[A-Z]$/i.test(answer)||idx<0||idx>=choices.length)throw Error(`Câu ${number+1}: dapan phải là chữ cái phương án hợp lệ`);
    key=String(idx);
   }else if(kind==='truefalse'){
    key=answer.split(/[,;]+|\s*--+\s*|\s*[–—]\s*/).map(x=>x.trim().toLowerCase());
    const bool={đ:true,đúng:true,d:true,true:true,s:false,sai:false,false:false};
    if(key.length!==choices.length||key.some(x=>!Object.hasOwn(bool,x)))throw Error(`Câu ${number+1}: dapan đúng/sai phải đủ ${choices.length} ý, ví dụ Đ,S,Đ,S`);
    key=key.map(x=>bool[x]);
   }else{
    key=answer.split('|').map(x=>x.trim());if(key.some(x=>!x))throw Error('dapan trả lời ngắn không được rỗng');
   }
  }
  questions.push({id:`q${questions.length+1}`,label:`Câu ${++number}`,section,kind,question:convertLatex(text,questionOptions).body,options:choices,answer:key,solution:convertLatex(solution,{...options,lowerLists:kind==='truefalse',sourceLine:lineAt(match.index+match[0].indexOf('\\begin{traloi}')+14)}).body});
  }catch(error){if(error.sourceLocated)throw error;const line=clean.slice(0,match.index).split('\n').length;const wrapped=Error(`${options.filename||'LaTeX'}:${line}: ${error.message}`);wrapped.sourceLocated=true;throw wrapped;}
 }
 return questions;
}
