import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const files=fs.readdirSync(root,{recursive:true}).filter(f=>f.endsWith('.html')&&f!=='404.html'&&!f.startsWith('o2edu/'));
const urls=new Set();
for(const file of files){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 const head=html.match(/<head>[\s\S]*?<\/head>/)?.[0]||'';
 const canonicals=[...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
 assert.equal(canonicals.length,1,`${file}: one canonical required`);
 const canonical=canonicals[0][1];assert.ok(canonical.startsWith('https://giasu.ai.vn/'),file);assert.ok(!urls.has(canonical),`${file}: duplicate canonical`);urls.add(canonical);
 assert.match(head,/<title>[^<]+<\/title>/,file);assert.match(head,/<meta name="description" content="[^"]+"/,file);
 assert.match(html,/<h1\b/,file);
 for(const match of head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
 const image=head.match(/property="og:image" content="([^"]+)"/)?.[1];assert.ok(image,`${file}: missing social image`);
 const imageUrl=new URL(image);if(imageUrl.origin==='https://giasu.ai.vn')assert.ok(fs.existsSync(path.join(root,decodeURIComponent(imageUrl.pathname))),`${file}: missing OG file ${image}`);
}
const grader=fs.readFileSync(path.join(root,'cham-thi/index.html'),'utf8');
assert.match(grader,/<h1>Chấm thi trắc nghiệm/);
assert.equal((grader.match(/<h1\b/g)||[]).length,1);
assert.match(grader,/'?WebApplication'?/);assert.match(grader,/id="huong-dan"/);
assert.doesNotMatch(grader,/aggregateRating|ratingValue/);
assert.match(fs.readFileSync(path.join(root,'404.html'),'utf8'),/noindex,follow/);
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');assert.ok(!sitemap.includes('404.html'));assert.ok(sitemap.includes('https://giasu.ai.vn/cham-thi/'));
for(const url of urls)assert.ok(sitemap.includes(`<loc>${url}</loc>`),`URL absent from sitemap: ${url}`);
console.log(`SEO audit passed: ${files.length} HTML pages, canonical URLs, headings, descriptions, JSON-LD, social images and sitemap.`);
