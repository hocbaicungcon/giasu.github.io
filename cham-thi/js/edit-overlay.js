(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ChamTNEditOverlay=api;})(globalThis,function(){
'use strict';
const ALPHA_KEY='chamtn:editAlpha',MIN_ALPHA=50,MAX_ALPHA=95,DEFAULT_ALPHA=75,MIN_SCALE=.5,MAX_SCALE=8;
const clone=value=>JSON.parse(JSON.stringify(value));
const clamp=(v,lo,hi)=>Math.min(hi,Math.max(lo,v));
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;}
function storedAlpha(){try{const v=Number(localStorage.getItem(ALPHA_KEY));return v>=MIN_ALPHA&&v<=MAX_ALPHA?v:DEFAULT_ALPHA;}catch(_){return DEFAULT_ALPHA;}}
function saveAlpha(v){try{localStorage.setItem(ALPHA_KEY,String(v));}catch(_){}}

// Chỉnh sửa trên bản nháp: assess/grade dùng lại logic chấm của trang, không chạy lại OMR.
function create({G,getRecord,assess,format,counts,examCodes,onCommit}){
  let dialog=null,draft=null,original=null,controller=null,dirty=false,cells=[],refs={},view={s:1,x:0,y:0,base:1},returnFocus=null;

  function build(){
    dialog=el('dialog','ed-overlay');dialog.setAttribute('aria-label','Chỉnh sửa bài đã chấm');
    const stage=el('div','ed-stage'),canvas=el('canvas','ed-image');stage.append(canvas);
    const top=el('header','ed-top'),cancel=el('button','ed-btn','✕ Hủy'),title=el('b','ed-title','Chỉnh sửa bài đã chấm'),save=el('button','ed-btn ed-primary','Lưu');
    cancel.type=save.type='button';top.append(cancel,title,save);
    const panel=el('section','ed-panel');
    const head=el('div','ed-head'),sbdLabel=el('label','ed-field','Số báo danh'),sbd=el('input');sbd.type='text';sbd.inputMode='numeric';sbd.maxLength=8;sbd.placeholder='Chưa đọc';sbdLabel.append(sbd);
    const codeLabel=el('label','ed-field','Mã đề'),code=el('select');codeLabel.append(code);
    const paper=el('div','ed-field'),paperName=el('b','ed-name');paper.append(el('small','','Bài / trang'),paperName);
    const detected=el('div','ed-field'),detectedCode=el('b','','—');detected.append(el('small','','Mã đề trên phiếu'),detectedCode);
    const score=el('div','ed-score'),total=el('strong','','—'),totalLabel=el('small','','TỔNG ĐIỂM'),parts=el('span','ed-partscores');score.append(totalLabel,total,parts);
    head.append(paper,sbdLabel,detected,codeLabel,score);
    const note=el('div','ed-note');note.setAttribute('role','status');
    const body=el('div','ed-body');
    panel.append(head,note,body);
    const showBtn=el('button','ed-btn ed-show','Hiện bảng');showBtn.type='button';showBtn.hidden=true;
    const bar=el('footer','ed-bar');
    const alphaWrap=el('label','ed-alpha','Độ đục'),alpha=el('input');alpha.type='range';alpha.min=MIN_ALPHA;alpha.max=MAX_ALPHA;alpha.step=1;alpha.setAttribute('aria-label','Độ đục của bảng');
    const alphaValue=el('output','','75%');alphaWrap.append(alpha,alphaValue);
    const mk=(text,label)=>{const b=el('button','ed-btn ed-tool',text);b.type='button';b.setAttribute('aria-label',label);b.title=label;return b;};
    const zoomOut=mk('−','Thu nhỏ ảnh'),zoomIn=mk('+','Phóng to ảnh'),reset=mk('⟲','Đặt lại vị trí và tỷ lệ ảnh'),toggle=mk('Ẩn bảng','Ẩn hoặc hiện bảng chỉnh sửa');
    toggle.classList.add('ed-wide');
    bar.append(alphaWrap,zoomOut,zoomIn,reset,toggle);
    dialog.append(stage,top,panel,showBtn,bar);
    document.body.append(dialog);
    refs={stage,canvas,cancel,save,panel,sbd,code,codeLabel,paperName,detectedCode,total,totalLabel,parts,note,body,showBtn,alpha,alphaValue,zoomOut,zoomIn,reset,toggle};
  }

  // ---- ảnh nền: zoom / pan ----
  function applyView(){refs.canvas.style.transform=`translate(${view.x}px,${view.y}px) scale(${view.s})`;}
  function fit(){
    const {stage,canvas}=refs,w=stage.clientWidth,h=stage.clientHeight;if(!w||!h||!canvas.width)return;
    view.base=Math.min(w/canvas.width,h/canvas.height);
    canvas.style.width=canvas.width*view.base+'px';canvas.style.height=canvas.height*view.base+'px';
    view.s=1;view.x=(w-canvas.width*view.base)/2;view.y=(h-canvas.height*view.base)/2;applyView();
  }
  function zoomAt(factor,cx,cy){
    const next=clamp(view.s*factor,MIN_SCALE,MAX_SCALE),k=next/view.s;
    view.x=cx-(cx-view.x)*k;view.y=cy-(cy-view.y)*k;view.s=next;applyView();
  }
  function stageCenter(){const r=refs.stage.getBoundingClientRect();return [r.width/2,r.height/2];}
  function bindGestures(signal){
    const {stage}=refs,pointers=new Map();let lastDist=0;
    const local=e=>{const r=stage.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];};
    stage.addEventListener('pointerdown',e=>{stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,local(e));lastDist=0;},{signal});
    stage.addEventListener('pointermove',e=>{
      if(!pointers.has(e.pointerId))return;
      const prev=pointers.get(e.pointerId),now=local(e);pointers.set(e.pointerId,now);
      if(pointers.size===1){view.x+=now[0]-prev[0];view.y+=now[1]-prev[1];applyView();}
      else if(pointers.size===2){
        const [a,b]=[...pointers.values()],dist=Math.hypot(a[0]-b[0],a[1]-b[1]);
        if(lastDist)zoomAt(dist/lastDist,(a[0]+b[0])/2,(a[1]+b[1])/2);
        lastDist=dist;
      }
    },{signal});
    const end=e=>{pointers.delete(e.pointerId);lastDist=0;};
    stage.addEventListener('pointerup',end,{signal});stage.addEventListener('pointercancel',end,{signal});
    stage.addEventListener('wheel',e=>{e.preventDefault();const [x,y]=local(e);zoomAt(e.deltaY<0?1.15:1/1.15,x,y);},{passive:false,signal});
    stage.addEventListener('dblclick',()=>fit(),{signal});
  }

  // ---- điểm và trạng thái từng ô ----
  const assessDraft=()=>assess(draft);
  function setCls(node,cls,on){node.classList.toggle(cls,!!on);}
  function optionState(part,value,key,option){
    // trả về {sel, ok, bad, hint}
    const sel=value===option,validKey=G.validKey(part,key)&&!G.ignored(part,key);
    const ok=sel&&validKey&&G.isCorrect(part,value,key),bad=sel&&validKey&&!ok;
    let hint=false;
    if(validKey&&!G.isCorrect(part,value,key)){
      if(part==='p1')hint=G.acceptedChoices(key).includes(option)&&key!=='O';
      else if(part==='p2')hint=key===option;
    }
    return {sel,ok,bad,hint};
  }
  function paintCell(cell,keys){
    const {part,i,j}=cell,p2=part==='p2',key=p2?keys.p2[i]?.[j]:keys[part][i];
    const value=p2?draft.answers.p2[i][j]:draft.answers[part][i],flag=p2?draft.flags.p2[i]?.[j]:draft.flags[part][i];
    if(part==='p3'){
      const validKey=G.validKey('p3',key)&&!G.ignored('p3',key),ok=validKey&&value!==''&&G.isCorrect('p3',value,key);
      setCls(cell.node,'ed-ok',ok);setCls(cell.node,'ed-bad',validKey&&value!==''&&!ok);
      setCls(cell.row,'ed-warn',value===''||flag);cell.hintNode.textContent=validKey&&!ok&&key!=='O'?`Đáp án: ${key}`:'';
      return;
    }
    for(const {btn,option} of cell.buttons){
      const s=optionState(part,value,key,option);
      setCls(btn,'ed-ok',s.ok);setCls(btn,'ed-bad',s.bad);setCls(btn,'ed-hint',s.hint);setCls(btn,'ed-sel',s.sel);
      btn.setAttribute('aria-pressed',s.sel?'true':'false');
    }
    setCls(cell.row,'ed-warn',!value||flag);
    cell.row.title=flag||'';
  }
  function refreshAll(onlyIndex){
    const item=assessDraft();
    const result=item.result;
    if(result?.scores){
      refs.total.textContent=format(result.total);refs.totalLabel.textContent=result.warnings.length?'ĐIỂM TẠM TÍNH':'TỔNG ĐIỂM';
      refs.parts.textContent=result.scores.map((v,i)=>`${['I','II','III'][i]}: ${format(v)}/${format(result.maxima[i])}`).join(' · ');
      refs.note.textContent=result.warnings.length?`${result.warnings.length} câu thiếu đáp án hợp lệ.`:'';
    }else{
      refs.total.textContent='—';refs.parts.textContent='';refs.note.textContent=result?.configErrors?.join(' ')||item.status;
    }
    for(const cell of cells)if(onlyIndex===undefined||(cell.part===onlyIndex.part&&cell.i===onlyIndex.i))paintCell(cell,item.keys);
  }
  function touch(index){dirty=true;refreshAll(index);}

  // ---- dựng bảng đáp án (một lần, sau đó chỉ cập nhật lớp CSS) ----
  function renderBody(){
    refs.body.replaceChildren();cells=[];
    const n=counts(),titles=['Phần I · Chọn đáp án','Phần II · Đúng / Sai','Phần III · Trả lời ngắn'];
    n.forEach((count,part)=>{
      if(!count)return;
      const p='p'+(part+1),section=el('section','ed-section');section.append(el('h3','',`${titles[part]} (${count} câu)`));
      const grid=el('div','ed-grid'+(part===2?' ed-grid3':''));
      for(let i=0;i<count;i++){
        const row=el('div','ed-q'),num=el('span','ed-num',String(i+1));row.append(num);
        if(part===0)row.append(choiceGroup(p,i,undefined,['A','B','C','D'],row));
        else if(part===1){
          const box=el('div','ed-sub');
          for(let j=0;j<4;j++){const line=el('div','ed-subline');line.append(el('span','ed-letter','abcd'[j]),choiceGroup(p,i,j,['Đ','S'],row));box.append(line);}
          row.append(box);
        }else row.append(shortAnswer(p,i,row));
        grid.append(row);
      }
      section.append(grid);refs.body.append(section);
    });
  }
  function choiceGroup(part,i,j,options,row){
    const group=el('div','ed-choices'),cell={part,i,j,row,buttons:[]};
    const get=()=>j===undefined?draft.answers[part][i]:draft.answers[part][i][j];
    const set=v=>{if(j===undefined){draft.answers[part][i]=v;draft.flags[part][i]='';}else{draft.answers[part][i][j]=v;draft.flags[part][i][j]='';}};
    for(const option of options){
      const btn=el('button','ed-opt',option);btn.type='button';
      btn.setAttribute('aria-label',`Câu ${i+1}${j===undefined?'':' ý '+'abcd'[j]}: ${option}`);
      btn.onclick=()=>{set(get()===option?'':option);touch({part,i});};
      cell.buttons.push({btn,option});group.append(btn);
    }
    cells.push(cell);return group;
  }
  function shortAnswer(part,i,row){
    const wrap=el('div','ed-short'),input=el('input','ed-input');input.type='text';input.inputMode='decimal';input.autocomplete='off';input.placeholder='—';input.maxLength=8;
    input.setAttribute('aria-label',`Câu ${i+1} trả lời ngắn`);input.value=draft.answers.p3[i]??'';
    const hintNode=el('small','ed-keyhint');
    input.oninput=()=>{const clean=input.value.replace(/[^0-9,.\-]/g,'');if(clean!==input.value)input.value=clean;draft.answers.p3[i]=clean;draft.flags.p3[i]='';touch({part,i});};
    wrap.append(input,hintNode);row.append(wrap);cells.push({part,i,row,node:input,hintNode});return wrap;
  }

  // ---- mở / đóng ----
  function setPanelHidden(hidden){refs.panel.hidden=hidden;refs.showBtn.hidden=!hidden;refs.toggle.textContent=hidden?'Hiện bảng':'Ẩn bảng';}
  function setAlpha(v){dialog.style.setProperty('--panel-alpha',String(v/100));refs.alphaValue.textContent=v+'%';refs.alpha.value=v;}
  function close(){
    if(!dialog?.open)return;
    controller?.abort();controller=null;dialog.close();document.body.classList.remove('ed-open');
    refs.canvas.width=refs.canvas.height=0;refs.body.replaceChildren();cells=[];draft=original=null;
    returnFocus?.focus?.();returnFocus=null;
  }
  function requestClose(){if(!dirty||confirm('Bỏ các thay đổi chưa lưu?'))close();}
  function open(){
    const record=getRecord();if(!record?.answers||!record.source)return;
    if(!dialog)build();
    returnFocus=document.activeElement;
    original=record;
    draft={...record,answers:clone(record.answers),flags:clone(record.flags)};dirty=false;
    refs.canvas.width=record.source.width;refs.canvas.height=record.source.height;
    refs.canvas.getContext('2d').drawImage(record.source,0,0);
    refs.paperName.textContent=record.label;refs.detectedCode.textContent=record.examCode||'Chưa đọc được';
    refs.sbd.value=record.studentId||'';
    const codes=examCodes();refs.codeLabel.hidden=!codes.length;refs.code.replaceChildren();
    if(!codes.length){}
    else{
      if(!record.keyCode||!codes.includes(record.keyCode)){const o=el('option','','Chọn mã đề');o.value='';refs.code.append(o);}
      for(const c of codes){const o=el('option','',`Mã đề ${c}`);o.value=c;refs.code.append(o);}
      refs.code.value=record.keyCode||'';
    }
    renderBody();setAlpha(storedAlpha());setPanelHidden(false);
    controller=new AbortController();const {signal}=controller;
    refs.sbd.addEventListener('input',()=>{draft.studentId=refs.sbd.value;dirty=true;},{signal});
    refs.code.addEventListener('change',()=>{
      if(!codes.includes(refs.code.value)){refs.code.value=draft.keyCode||'';return;}
      draft.keyCode=refs.code.value;draft.codeIssue='';dirty=true;refreshAll();
    },{signal});
    refs.alpha.addEventListener('input',()=>{const v=Number(refs.alpha.value);setAlpha(v);saveAlpha(v);},{signal});
    refs.zoomIn.addEventListener('click',()=>zoomAt(1.3,...stageCenter()),{signal});
    refs.zoomOut.addEventListener('click',()=>zoomAt(1/1.3,...stageCenter()),{signal});
    refs.reset.addEventListener('click',fit,{signal});
    refs.toggle.addEventListener('click',()=>setPanelHidden(!refs.panel.hidden),{signal});
    refs.showBtn.addEventListener('click',()=>setPanelHidden(false),{signal});
    refs.cancel.addEventListener('click',requestClose,{signal});
    refs.save.addEventListener('click',()=>{const target=original,data=draft;close();onCommit(target,data);},{signal});
    dialog.addEventListener('cancel',e=>{e.preventDefault();requestClose();},{signal});
    window.addEventListener('resize',fit,{signal});window.addEventListener('orientationchange',fit,{signal});
    bindGestures(signal);
    document.body.classList.add('ed-open');dialog.showModal();fit();refreshAll();
  }
  return {open,close,isOpen:()=>!!dialog?.open};
}
return {create,MIN_ALPHA,MAX_ALPHA,DEFAULT_ALPHA};
});
