import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
assert.ok(!fs.existsSync(path.join(root,'cham-thi/data')),'Private student samples must not be published');
const files=fs.readdirSync(root,{recursive:true}).filter(f=>f.endsWith('.html')&&f!=='404.html'&&!f.startsWith('o2edu/')&&!f.replace(/\\/g,'/').startsWith('word-addin/'));
const urls=new Set(),titles=new Map();
const posts=new Map(JSON.parse(fs.readFileSync(path.join(root,'assets/posts.json'),'utf8')).map(p=>[p.slug,p]));
let articleLinks=0,linkedArticles=0;
for(const file of files){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 const head=html.match(/<head>[\s\S]*?<\/head>/)?.[0]||'';
 const canonicals=[...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
 assert.equal(canonicals.length,1,`${file}: one canonical required`);
 const canonical=canonicals[0][1];assert.ok(canonical.startsWith('https://giasu.ai.vn/'),file);assert.ok(!urls.has(canonical),`${file}: duplicate canonical`);urls.add(canonical);
 assert.match(head,/<title>[^<]+<\/title>/,file);assert.match(head,/<meta name="description" content="[^"]+"/,file);
 assert.match(html,/<h1\b/,file);
 const title=head.match(/<title>([^<]+)<\/title>/)?.[1];assert.ok(!titles.has(title),`${file}: title duplicates ${titles.get(title)}`);titles.set(title,file);
 const description=head.match(/<meta name="description" content="([^"]+)"/)?.[1]||'';assert.ok(description.replace(/&[^;]+;/g,'x').length<=160,`${file}: description longer than 160 characters`);
 for(const match of head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
 const image=head.match(/property="og:image" content="([^"]+)"/)?.[1];assert.ok(image,`${file}: missing social image`);
 const imageUrl=new URL(image);if(imageUrl.origin==='https://giasu.ai.vn')assert.ok(fs.existsSync(path.join(root,decodeURIComponent(imageUrl.pathname))),`${file}: missing OG file ${image}`);
 if(file.startsWith('bai-viet/')){
  const source=posts.get(path.basename(file,'.html')),seen=new Set();
  const sections=html.match(/<nav class="post-reading-links"[\s\S]*?<\/nav>|<section class="related related-posts"[\s\S]*?<\/section>/g)||[];
  for(const section of sections)for(const match of section.matchAll(/href="\.\/([^"/]+)\.html"/g)){
   const target=posts.get(match[1]);
   assert.ok(source&&target,`${file}: unknown related article ${match[1]}`);
   assert.notEqual(target.slug,source.slug,`${file}: self-referencing article link`);
   assert.equal(target.category,source.category,`${file}: unrelated subject ${target.slug}`);
   assert.ok(!seen.has(target.slug),`${file}: repeated recommendation ${target.slug}`);
   assert.ok(fs.existsSync(path.join(root,'bai-viet',target.slug+'.html')),`${file}: missing linked page ${target.slug}`);
   seen.add(target.slug);
  }
  articleLinks+=seen.size;if(seen.size)linkedArticles++;
 }
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
console.log(`Internal links: ${articleLinks} recommendations across ${linkedArticles}/${posts.size} articles; targets exist, no duplicates or self-links, same subject.`);
