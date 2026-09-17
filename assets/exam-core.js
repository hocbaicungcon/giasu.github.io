export function normalize(value){return String(value??'').normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('vi').replace(/^(\-?\d+),(\d+)$/,'$1.$2');}
export function gradeQuestion(q,value){
 if(q.answer===null)return null;
 if(q.kind==='choice')return String(value??'')===q.answer?1:0;
 if(q.kind==='short')return q.answer.some(a=>normalize(a)===normalize(value))?1:0;
 return q.answer.reduce((score,a,i)=>score+(value?.[i]===String(a)?1:0),0)/q.answer.length;
}
export function gradeExam(questions,answers){
 const scores=questions.map(q=>gradeQuestion(q,answers[q.id]));
 const complete=scores.every(x=>x!==null);
 return {scores,complete,score:complete?Math.round(scores.reduce((s,n)=>s+n,0)/questions.length*100)/10:null};
}
