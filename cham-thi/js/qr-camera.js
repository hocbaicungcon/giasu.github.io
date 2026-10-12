(function(root){
'use strict';
function create({dialog,video,status,onImport}){
 let stream=null,timer=null,version=0,busy=false;
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});
 function stop(){version++;clearTimeout(timer);timer=null;stream?.getTracks().forEach(track=>track.stop());stream=null;video.srcObject=null;busy=false;if(dialog.open)dialog.close();}
 async function start(){
  stop();const token=version;dialog.showModal();status.textContent='Đang mở camera…';
  try{
   if(!navigator.mediaDevices?.getUserMedia)throw new Error('Camera không khả dụng. Hãy chọn ảnh QR từ thư viện hoặc chụp ảnh.');
   const next=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:720}}});
   if(token!==version){next.getTracks().forEach(track=>track.stop());return;}
   stream=next;video.srcObject=stream;await video.play();if(token!==version)return;
   status.textContent='Đưa toàn bộ QR vào khung. Đáp án sẽ tự nhập khi nhận diện được.';
   const scan=async()=>{
    if(token!==version)return;
    if(video.readyState>=2&&!busy){
     const scale=Math.min(1,960/video.videoWidth);canvas.width=Math.round(video.videoWidth*scale);canvas.height=Math.round(video.videoHeight*scale);
     if(canvas.width&&canvas.height){ctx.drawImage(video,0,0,canvas.width,canvas.height);const pixels=ctx.getImageData(0,0,canvas.width,canvas.height),qr=root.jsQR(pixels.data,canvas.width,canvas.height,{inversionAttempts:'attemptBoth'});
      if(qr){busy=true;try{const bank=root.ChamTNInputs.parseQrPayload(qr.data);if(token!==version)return;onImport(bank);stop();return;}catch(error){status.textContent=error.message+' Hãy quét QR đáp án theo mẫu.';}finally{busy=false;}}
     }
    }
    if(token===version)timer=setTimeout(scan,180);
   };scan();
  }catch(error){if(token!==version)return;stream?.getTracks().forEach(track=>track.stop());stream=null;video.srcObject=null;status.textContent=error.name==='NotAllowedError'?'Chưa được phép dùng camera. Cho phép camera hoặc chọn ảnh QR từ thư viện.':error.message;}
 }
 dialog.addEventListener('cancel',event=>{event.preventDefault();stop();});dialog.addEventListener('close',()=>{if(stream||timer)stop();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});root.addEventListener('pagehide',stop);
 return {start,stop};
}
root.ChamTNQrCamera={create};
})(window);
