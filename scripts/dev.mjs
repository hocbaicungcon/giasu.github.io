import {watch} from 'node:fs';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let running=false,pending=false,timer,server;
function rebuild(){
 if(running){pending=true;return;}
 running=true;
 const child=spawn(process.execPath,['scripts/build.mjs'],{cwd:root,stdio:'inherit'});
 child.on('exit',code=>{
  running=false;
  if(code===0){console.log('Đã cập nhật website. Tải lại trình duyệt để xem.');if(!server){server=spawn('python3',['-m','http.server','4173','--directory','dist'],{cwd:root,stdio:'inherit'});server.on('error',e=>console.error(e.message));}}
  else console.error('Build chưa thành công. Sửa file theo thông báo trên rồi lưu lại.');
  if(pending){pending=false;rebuild();}
 });
}
for(const dir of ['post','assets','scripts'])watch(path.join(root,dir),{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(rebuild,500);});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>{server?.kill();process.exit();});
rebuild();
