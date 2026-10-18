// Lists YouTube videos referenced by posts that YouTube reports as missing or not embeddable.
// Needs network access; run on demand: npm run check:videos [-- --fix-report]
import fs from 'node:fs';
import path from 'node:path';
const dir=path.resolve('post');
const pattern=/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/g;
const usage=new Map();
for(const file of fs.readdirSync(dir).filter(name=>name.endsWith('.md'))){
 for(const match of fs.readFileSync(path.join(dir,file),'utf8').matchAll(pattern)){
  if(!usage.has(match[1]))usage.set(match[1],new Set());
  usage.get(match[1]).add(file);
 }
}
let problems=0;
for(const [id,files] of usage){
 let status;
 try{status=(await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,{signal:AbortSignal.timeout(15000)})).status;}
 catch(error){status=`error: ${error.message}`;}
 if(status!==200){problems++;console.log(`${id}\t${status===404?'missing or private':status===401||status===403?'embedding disabled':status}\t${[...files].join(', ')}`);}
}
console.log(`${usage.size} videos checked, ${problems} with problems`);
process.exitCode=problems?1:0;
