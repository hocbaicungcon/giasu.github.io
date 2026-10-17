/* credit: giasu.ai.vn */
import test from 'node:test';
import assert from 'node:assert/strict';
import {convertLatex} from './latex.mjs';
import {extractExam} from './exams.mjs';
import {normalizeCategory} from '../assets/subject-groups.js';
import fs from 'node:fs';
import vm from 'node:vm';

test('standalone and nested math environments work in questions and solutions',()=>{
 const math=String.raw`\begin{align*}x&=1\\y&=\begin{cases}2&x>0\\0&x=0\end{cases}\end{align*}`;
 assert.match(convertLatex(math).body,/\$\$/);
 assert.match(convertLatex(String.raw`\begin{array}{cc}1&2\\3&4\end{array}`).body,/array/);
 assert.equal(convertLatex(String.raw`A\enlargethispage{\baselineskip}B`).body,'AB');
 const q=extractExam(`\\begin{baitap}${math}\\begin{traloi}${math}\\end{traloi}\\end{baitap}`)[0];
 assert.match(q.question,/cases/);assert.match(q.solution,/cases/);
});

test('errors report filename and exact offending source line',()=>{
 assert.throws(()=>convertLatex('Dòng một\nDòng hai\n\\unknownthing{a}',{filename:'de.tex'}),/de.tex:3:/);
 assert.throws(()=>convertLatex('Dòng một\n\\begin{align}\nx&=1',{filename:'de.tex'}),/de.tex:2:.*Thiếu/);
 assert.throws(()=>convertLatex('Dòng một\n\\[x=1\n+\\unknownthing\n\\]',{filename:'de.tex'}),/de.tex:3:/);
 assert.throws(()=>extractExam('Header\n\\begin{baitap}\nQuestion\n\\begin{traloi}\nline\n\\unknownthing{x}\n\\end{traloi}\n\\end{baitap}',{filename:'de.tex'}),/de.tex:6:/);
});

test('truefalse solutions use lowercase labels',()=>{
 const source=String.raw`\subsection*{Phần II. Đúng sai}\begin{baitap}X\begin{enumerate}\item A\item B\end{enumerate}\begin{traloi}\dapan{Đ,S}\begin{enumerate}\item giải A\item giải B\end{enumerate}\end{traloi}\end{baitap}`;
 assert.match(extractExam(source)[0].solution,/\*\*a\)\*\*/);
});

test('legacy subjects migrate without editing source posts',()=>{assert.equal(normalizeCategory('Tiếng Anh'),'Ngoại ngữ');assert.equal(normalizeCategory('Tin học'),'Các môn khác');assert.equal(normalizeCategory('Khoa học tự nhiên'),'Khoa học tự nhiên');});

test('display defaults to light and respects saved manual font and theme choices',()=>{
 const script=fs.readFileSync(new URL('../assets/preferences.js',import.meta.url),'utf8');
 for(const [saved,expectedFont] of [[null,'sans'],[{theme:'dark',font:'serif',size:110},'cmu'],[{theme:'dark',font:'cmu',size:110},'cmu'],[{theme:'light',font:'stix',size:90},'stix']]){
  const root={style:{},dataset:{}};
  vm.runInNewContext(script,{document:{documentElement:root,addEventListener(){}},localStorage:{getItem:()=>JSON.stringify(saved)},matchMedia:()=>{throw Error('Must not consult system colour scheme');}});
  assert.equal(root.dataset.theme,saved?.theme||'light');assert.equal(root.dataset.font,expectedFont);
 }
});
