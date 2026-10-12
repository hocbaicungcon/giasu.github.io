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
