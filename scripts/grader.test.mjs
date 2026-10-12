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
 assert.ok(!fs.existsSync(new URL('data/',root)),'Private student samples must not be published');
 assert.match(html,/https:\/\/giasu.ai.vn\/cham-thi\//);
});
