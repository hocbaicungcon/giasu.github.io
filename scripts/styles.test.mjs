import test from 'node:test';
import assert from 'node:assert/strict';
import {minifyCss,scopeCss} from './styles.mjs';
test('CSS minification preserves descendants that begin with a pseudo-class',()=>{
 const result=minifyCss('body :is(.quiz, .card) { border: 0; } .parent :not(.skip) { color: green; }');
 assert.match(result,/body :is\(.quiz,.card\)/);assert.match(result,/\.parent :not\(.skip\)/);assert.doesNotMatch(result,/body:is/);
});
test('grading selectors stay scoped across media queries and functional selectors',()=>{
 const result=scopeCss(':root{color:red}body[data-mobile-view="scan"] .panel{display:block}.panel:is(.a,.b),header{margin:0}@media(max-width:600px){.panel{padding:0}}@keyframes fade{from{opacity:0}to{opacity:1}}');
 assert.match(result,/\.grading-page\[data-mobile-view="scan"\] \.panel/);
 assert.match(result,/:where\(\.grading-page\) \.panel:is\(.a,.b\),:where\(\.grading-page\) header/);
 assert.match(result,/@media\(max-width:600px\)\{:where\(\.grading-page\) \.panel/);
 assert.match(result,/@keyframes fade\{from\{opacity:0\}to\{opacity:1\}\}/);
});
