import test from 'node:test';
import assert from 'node:assert/strict';
import {convertLatex} from './latex.mjs';
import {extractExam} from './exams.mjs';
import {gradeExam} from '../assets/exam-core.js';
test('qty supports decimal braces in prose and math',()=>{
 const result=convertLatex(String.raw`Sau \qty{3}{\hour}, chiều cao $h=\qty{60{,}5}{\meter}$.`).body;
 assert.match(result,/3\\,\\mathrm\{h\}/);
 assert.match(result,/60,5\\,\\mathrm\{m\}/);
 assert.doesNotMatch(result,/\\qty/);
});
test('mixed paper preserves short answers and treats part IV as manual review',()=>{
 const qs=extractExam(String.raw`\subsubsection*{Phần II. Đúng sai}
 \begin{baitap}Kiểm tra\begin{enumerate}\item a\item b\item c\item d\end{enumerate}\begin{traloi}\dapan{Đúng -- Sai -- Sai -- Đúng}Giải thích\end{traloi}\end{baitap}
 \subsubsection*{Phần III. Trả lời ngắn}
 \begin{baitap}Tính\begin{traloi}\dapan{2,5}Giải\end{traloi}\end{baitap}
 \subsubsection*{Phần IV. Thí sinh trình bày lời giải chi tiết}
 \begin{baitap}Tính và giải thích\begin{traloi}\dapan{3}Lời giải chi tiết\end{traloi}\end{baitap}`);
 assert.deepEqual(qs.map(q=>q.kind),['truefalse','short','proof']);
 assert.deepEqual(qs[0].answer,[true,false,false,true]);
 assert.deepEqual(qs[1].answer,['2,5']);
 assert.match(qs[2].solution,/Lời giải chi tiết/);
 const result=gradeExam(qs,{q1:['true','false','false','true'],q2:'2.5',q3:'3'});
 assert.deepEqual(result.scores,[1,1,null]);assert.equal(result.score,null);
});
