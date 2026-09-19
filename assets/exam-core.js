export function normalize(value){return String(value??'').normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('vi').replace(/^(\-?\d+),(\d+)$/,'$1.$2');}
export function gradeQuestion(q,value){
 if(q.kind==='proof'||q.answer===null)return null;
 if(q.kind==='choice')return String(value??'')===q.answer?1:0;
 if(q.kind==='short')return q.answer.some(a=>normalize(a)===normalize(value))?1:0;
 return q.answer.reduce((score,a,i)=>score+(value?.[i]===String(a)?1:0),0)/q.answer.length;
}
export function uses90MinuteScoring(exam){
 const qs=exam.questions;
 return Number(exam.duration)===90&&exam.mode!=='self-review'&&qs.length===22&&
  qs.slice(0,12).every(q=>q.kind==='choice')&&
  qs.slice(12,16).every(q=>q.kind==='truefalse'&&q.options.length===4)&&
  qs.slice(16).every(q=>q.kind==='short');
}
export function gradeExam(questions,answers,exam={}){
 const scores=questions.map(q=>gradeQuestion(q,answers[q.id]));
 const complete=scores.every(x=>x!==null);
 const weighted=uses90MinuteScoring({...exam,questions});
 const points=scores.map((score,i)=>score===null?null:weighted?
  questions[i].kind==='choice'?score*.25:questions[i].kind==='short'?score*.5:[0,.1,.25,.5,1][Math.round(score*4)]:score*10/questions.length);
 const total=points.reduce((sum,n)=>sum+(n??0),0);
 return {scores,points,complete,weighted,score:complete?(weighted?Math.round(total*100)/100:Math.round(total*10)/10):null};
}
