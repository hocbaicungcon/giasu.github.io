import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=new URL('../cham-thi/',import.meta.url);
test('integrated grader ships every offline runtime asset locally',()=>{
 for(const asset of JSON.parse(fs.readFileSync(new URL('offline-assets.json',root),'utf8'))){
  const clean=asset.split('?')[0];
  assert.ok(fs.existsSync(new URL(clean,root)),`Missing offline asset: ${asset}`);
 }
 const html=fs.readFileSync(new URL('index.html',root),'utf8');
 for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(/^(?:https?:|\.\.\/)/.test(match[1]))continue;
  assert.ok(fs.existsSync(new URL(decodeURIComponent(match[1].split('?')[0]),root)),match[1]);
 }
 // The build may have local samples available for regression checks.
 const build=fs.readFileSync(new URL('build.mjs',import.meta.url),'utf8');
 assert.match(build,/filter:source=>!\['data','tests'\]/,'The publication filter must exclude private samples');
 assert.match(html,/https:\/\/giasu.ai.vn\/cham-thi\//);
});

test('grader exposes useful static SEO content and truthful application schema',()=>{
 const html=fs.readFileSync(new URL('index.html',root),'utf8');
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
 const app=graph.find(node=>node['@type']==='WebApplication');
 assert.equal(app.offers.price,0);assert.equal(app.applicationCategory,'EducationalApplication');
 assert.ok(!app.aggregateRating&&!app.review);
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 assert.match(html,/id="huong-dan"/);assert.match(html,/<noscript>/);
 for(const match of html.matchAll(/<script([^>]+)src="/g))assert.match(match[1],/defer/);
});

test('examSelect inspects answer keys without modifying active student sheet',()=>{
 const app=fs.readFileSync(new URL('app.js',root),'utf8');
 const examSelectBlock=app.match(/\$\('examSelect'\)\.addEventListener\('change'[\s\S]*?\}\);/)?.[0]||'';
 assert.ok(examSelectBlock,'examSelect listener must exist');
 assert.ok(!examSelectBlock.includes('current()'),'examSelect must not mutate the current student record');
 assert.ok(!examSelectBlock.includes('keyCode'),'examSelect must not mutate record keyCode');

 const gradedSelectBlock=app.match(/\$\('gradedExamSelect'\)\.addEventListener\('change'[\s\S]*?\}\);/)?.[0]||'';
 assert.ok(gradedSelectBlock,'gradedExamSelect listener must exist');
 assert.ok(gradedSelectBlock.includes('current()'),'gradedExamSelect must access current record');
 assert.ok(gradedSelectBlock.includes('record.keyCode = code'),'gradedExamSelect must assign record.keyCode');
});

test('grader page loads heavy vendor libraries on demand from local files',()=>{
 const html=fs.readFileSync(new URL('index.html',root),'utf8');
 assert.doesNotMatch(html,/<script[^>]+src="vendor\//,'Vendor libraries must not block the first render');
 const loader=fs.readFileSync(new URL('js/vendor-loader.js',root),'utf8');
 for(const [,src] of loader.matchAll(/\['(vendor\/[^'?]+)/g))assert.ok(fs.existsSync(new URL(src,root)),src);
 const offline=JSON.parse(fs.readFileSync(new URL('offline-assets.json',root),'utf8'));
 assert.ok(offline.includes('vendor/pdfjs/pdf.min.js?v=1')&&offline.includes('vendor/pdfjs/pdf.worker.min.js'));
 assert.ok(!offline.some(asset=>asset.endsWith('.mjs')),'Unused ES module builds must not be precached');
});
