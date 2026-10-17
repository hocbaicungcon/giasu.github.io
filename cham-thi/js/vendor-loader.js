(function(root){
'use strict';
// Heavy libraries load on first use so the page renders without ~2.3 MB of blocking JS.
const base=new URL('../',document.currentScript.src);
const libs={pdf:['vendor/pdfjs/pdf.min.js?v=1','pdfjsLib'],xlsx:['vendor/xlsx/xlsx.full.min.js','XLSX'],jsqr:['vendor/jsqr/jsQR.js','jsQR'],qrcode:['vendor/qrcode-generator/qrcode.js','qrcode'],pdflib:['vendor/pdf-lib/pdf-lib.min.js','PDFLib']};
const pending=Object.create(null);
function load(name){
 const [src,global]=libs[name];
 if(root[global])return Promise.resolve(root[global]);
 return pending[name]||=new Promise((resolve,reject)=>{
  const script=document.createElement('script');script.src=new URL(src,base).href;
  script.onload=()=>root[global]?resolve(root[global]):fail();
  script.onerror=fail;document.head.appendChild(script);
  function fail(){script.remove();delete pending[name];reject(new Error('Chưa tải được thư viện cục bộ. Tải lại trang khi có mạng một lần rồi thử lại.'));}
 });
}
root.ChamTNVendor={load};
})(window);
