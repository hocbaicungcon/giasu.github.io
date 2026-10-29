(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ChamTNEditOverlay=api;})(globalThis,function(){
'use strict';
const ALPHA_KEY='chamtn:editAlpha',MIN_ALPHA=50,MAX_ALPHA=95,DEFAULT_ALPHA=75,MIN_SCALE=.5,MAX_SCALE=8;
const clone=value=>JSON.parse(JSON.stringify(value));
const clamp=(v,lo,hi)=>Math.min(hi,Math.max(lo,v));
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;}
function storedAlpha(){try{const v=Number(localStorage.getItem(ALPHA_KEY));return v>=MIN_ALPHA&&v<=MAX_ALPHA?v:DEFAULT_ALPHA;}catch(_){return DEFAULT_ALPHA;}}
function saveAlpha(v){try{localStorage.setItem(ALPHA_KEY,String(v));}catch(_){}}

// Chỉnh sửa trên bản nháp: assess/grade dùng lại logic chấm của trang, không chạy lại OMR.
function create({G,OMR,getRecord,getIds,select,assess,format,counts,examCodes,onCommit}){
  let codes=[],dialog=null,draft=null,original=null,controller=null,dirty=false,cells=[],refs={},view={s:1,x:0,y:0,base:1,box:null},returnFocus=null;

  function build(){
    dialog=el('dialog','ed-overlay');dialog.setAttribute('aria-label','Chỉnh sửa bài đã chấm');dialog.setAttribute('aria-modal','true');
    const stage=el('div','ed-stage'),world=el('div','ed-world'),canvas=el('canvas','ed-image'),layer=el('div','ed-layer');world.append(canvas,layer);stage.append(world);
    const top=el('div','ed-top'),cancel=el('button','ed-btn','✕ Hủy'),title=el('b','ed-title','Chỉnh sửa bài đã chấm'),save=el('button','ed-btn ed-primary','Lưu');
    const prev=el('button','ed-btn ed-tool','‹'),next=el('button','ed-btn ed-tool','›'),mid=el('div','ed-mid');
    prev.setAttribute('aria-label','Bài trước');next.setAttribute('aria-label','Bài tiếp');
    cancel.type=save.type=prev.type=next.type='button';mid.append(prev,title,next);top.append(cancel,mid,save);
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
    const popup=el('div','ed-popup'),pop=el('div','ed-pop'),popHead=el('div','ed-pophead'),popTitle=el('b'),popClose=el('button','ed-btn ed-tool','✕'),popBody=el('div','ed-popcontent');
    popClose.type='button';popClose.setAttribute('aria-label','Đóng');popHead.append(popTitle,popClose);pop.append(popHead,popBody);popup.append(pop);popup.hidden=true;
    popClose.onclick=()=>closeQuestion();popup.addEventListener('click',e=>{if(e.target===popup)closeQuestion();});
    const bar=el('div','ed-bar');
    const alphaWrap=el('label','ed-alpha','Độ đục'),alpha=el('input');alpha.type='range';alpha.min=MIN_ALPHA;alpha.max=MAX_ALPHA;alpha.step=1;alpha.setAttribute('aria-label','Độ đục của bảng');
    const alphaValue=el('output','','75%');alphaWrap.append(alpha,alphaValue);
    const mk=(text,label)=>{const b=el('button','ed-btn ed-tool',text);b.type='button';b.setAttribute('aria-label',label);b.title=label;return b;};
    const zoomOut=mk('−','Thu nhỏ ảnh'),zoomIn=mk('+','Phóng to ảnh'),reset=mk('⟲','Đặt lại vị trí và tỷ lệ ảnh'),toggle=mk('Ẩn bảng','Ẩn hoặc hiện bảng chỉnh sửa');
    toggle.classList.add('ed-wide');
    bar.append(alphaWrap,zoomOut,zoomIn,reset,toggle);
    dialog.append(stage,top,panel,bar,popup);
    document.body.append(dialog);
    refs={prev,next,title,popup,popTitle,popBody,stage,world,layer,canvas,cancel,save,panel,sbd,code,codeLabel,paperName,detectedCode,total,totalLabel,parts,note,body,alpha,alphaValue,zoomOut,zoomIn,reset,toggle};
  }

  // ---- ảnh nền: zoom / pan ----
  function applyView(){refs.world.style.transform=`translate(${view.x}px,${view.y}px) scale(${view.base*view.s})`;}
  // Căn vừa khít phần có nội dung của phiếu (bỏ lề trắng), tránh thanh trên/dưới.
  function fit(){
    const {stage,canvas}=refs,w=stage.clientWidth,H=stage.clientHeight;if(!w||!H||!canvas.width)return;
    const top=dialog.querySelector('.ed-top').offsetHeight,bottom=dialog.querySelector('.ed-bar').offsetHeight,h=Math.max(100,H-top-bottom);
    const box=view.box||{x:0,y:0,w:canvas.width,h:canvas.height};
    view.base=Math.min(w/box.w,h/box.h);view.s=1;
    view.x=(w-box.w*view.base)/2-box.x*view.base;view.y=top+(h-box.h*view.base)/2-box.y*view.base;applyView();
  }
  function contentBox(data,width,height){
    let x0=width,y0=height,x1=0,y1=0;
    for(let y=0;y<height;y+=2)for(let x=0;x<width;x+=2){const i=(y*width+x)*4;if(data[i]+data[i+1]+data[i+2]<600){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}}
    if(x1<=x0||y1<=y0)return null;const pad=6;x0=Math.max(0,x0-pad);y0=Math.max(0,y0-pad);x1=Math.min(width,x1+pad);y1=Math.min(height,y1+pad);
    return {x:x0,y:y0,w:x1-x0,h:y1-y0};
  }
  function zoomAt(factor,cx,cy){
    const next=clamp(view.s*factor,MIN_SCALE,MAX_SCALE),k=next/view.s;
    view.x=cx-(cx-view.x)*k;view.y=cy-(cy-view.y)*k;view.s=next;applyView();
  }
  function stageCenter(){const r=refs.stage.getBoundingClientRect();return [r.width/2,r.height/2];}
  function bindGestures(signal){
    const {stage}=refs,pointers=new Map();let lastDist=0,moved=false,multi=false,start=null;
    const local=e=>{const r=stage.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];};
    stage.addEventListener('pointerdown',e=>{
      pointers.set(e.pointerId,local(e));lastDist=0;
      if(pointers.size===1){moved=false;multi=false;start={p:local(e),t:performance.now()};}
      else{multi=true;moved=true;for(const id of pointers.keys())try{stage.setPointerCapture(id);}catch(_){}}
    },{signal});
    stage.addEventListener('pointermove',e=>{
      if(!pointers.has(e.pointerId))return;
      const prev=pointers.get(e.pointerId),now=local(e);pointers.set(e.pointerId,now);
      if(pointers.size===1){
        if(!moved){if(Math.hypot(now[0]-start.p[0],now[1]-start.p[1])<6)return;moved=true;try{stage.setPointerCapture(e.pointerId);}catch(_){}}
        view.x+=now[0]-prev[0];view.y+=now[1]-prev[1];applyView();
      }else if(pointers.size===2){
        const [a,b]=[...pointers.values()],dist=Math.hypot(a[0]-b[0],a[1]-b[1]);
        if(lastDist)zoomAt(dist/lastDist,(a[0]+b[0])/2,(a[1]+b[1])/2);
        lastDist=dist;
      }
    },{signal});
    const end=e=>{
      const had=pointers.delete(e.pointerId);lastDist=0;
      if(!had||pointers.size||multi||!moved||!start)return;
      // Vuốt khi ảnh chưa phóng to: chuyển bài; nếu đã phóng to thì chỉ kéo ảnh.
      if(Math.abs(view.s-1)>.02)return;
      const [x,y]=local(e),dx=x-start.p[0],dy=y-start.p[1],dt=performance.now()-start.t;start=null;
      if(dt<1600&&Math.max(Math.abs(dx),Math.abs(dy))>=45)navigate(Math.abs(dx)>Math.abs(dy)?(dx>0?1:-1):(dy<0?1:-1));
      else fit();
    };
    stage.addEventListener('pointerup',end,{signal});stage.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);},{signal});
    stage.addEventListener('wheel',e=>{e.preventDefault();const [x,y]=local(e);zoomAt(e.deltaY<0?1.15:1/1.15,x,y);},{passive:false,signal});
    stage.addEventListener('dblclick',()=>fit(),{signal});
  }
  // Chuyển sang bài kế/trước; hỏi lưu nếu bản nháp đã sửa.
  let navigating=false;
  async function navigate(dir){
    if(navigating||!original)return;
    const ids=getIds(),index=ids.indexOf(original.id),target=ids[index+dir];
    if(!target){fit();return;}
    navigating=true;
    try{
      if(dirty){
        const answer=await ask('Bài này có thay đổi chưa lưu',[['Lưu và chuyển bài','save',true],['Bỏ thay đổi','discard'],['Ở lại','cancel']]);
        if(answer==='cancel'||!original){fit();return;}
        if(answer==='save')onCommit(original,draft);
      }
      closeQuestion();select(target);const next=getRecord();if(next?.answers&&next.source){load(next);fit();refreshAll();}
    }finally{navigating=false;}
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
      if(cell.node.value!==String(value??'')&&document.activeElement!==cell.node)cell.node.value=value??'';
      setCls(cell.node,'ed-ok',ok);setCls(cell.node,'ed-bad',validKey&&value!==''&&!ok);
      setCls(cell.row,'ed-warn',value===''||flag);if(cell.region)setCls(cell.region,'ed-warn',value===''||flag);cell.hintNode.textContent=validKey&&!ok&&key!=='O'?`Đáp án: ${key}`:'';
      return;
    }
    for(const {btn,option} of cell.buttons){
      const s=optionState(part,value,key,option);
      setCls(btn,'ed-ok',s.ok);setCls(btn,'ed-bad',s.bad);setCls(btn,'ed-hint',s.hint);setCls(btn,'ed-sel',s.sel);
      btn.setAttribute('aria-pressed',s.sel?'true':'false');
    }
    setCls(cell.row,'ed-warn',!value||flag);
    if(cell.region)setCls(cell.region,'ed-warn',part==='p1'?(!value||flag):draft.answers.p2[i].some((v,k)=>!v||draft.flags.p2[i]?.[k]));
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
  let sheetProfile='';
  // Vùng bấm của một câu trên phiếu (toạ độ phiếu đã căn thẳng).
  function region(part,i){
    const at=(q,j,v)=>OMR.choicePosition(q,i,j,v,sheetProfile);
    if(part==='p1'){const a=at('p1',undefined,'A'),d=at('p1',undefined,'D');return {x:a.x-22,y:a.y-14,w:d.x-a.x+44,h:28};}
    if(part==='p2'){const a=at('p2',0,'Đ'),d=at('p2',3,'S');return {x:a.x-22,y:a.y-14,w:d.x-a.x+44,h:d.y-a.y+28};}
    const c=at('p3');return {x:c.x-35,y:c.y-35,w:160,h:410};
  }
  // Trên phiếu chỉ hiện vòng khoanh đáp án; mỗi câu có một vùng trong suốt để bấm mở popup.
  function buildSheetMarks(profile){
    sheetProfile=profile;refs.layer.replaceChildren();const seen=new Set();
    for(const cell of cells){
      const key=cell.part+cell.i;
      if(!seen.has(key)){
        seen.add(key);const r=region(cell.part,cell.i),btn=el('button','ed-region');btn.type='button';
        Object.assign(btn.style,{left:r.x+'px',top:r.y+'px',width:r.w+'px',height:r.h+'px'});
        btn.setAttribute('aria-label',`Phiếu: sửa câu ${cell.i+1} phần ${cell.part.slice(1)}`);
        btn.onclick=()=>openQuestion(cell.part,cell.i);cell.region=btn;refs.layer.append(btn);
      }
      if(!cell.pick)continue;
      for(const option of cell.part==='p1'?['A','B','C','D']:['Đ','S']){
        const pos=OMR.choicePosition(cell.part,cell.i,cell.j,option,profile),btn=el('div','ed-mk');
        btn.style.left=pos.x+'px';btn.style.top=pos.y+'px';cell.buttons.push({btn,option});refs.layer.append(btn);
      }
    }
  }
  let popupStart=-1;
  let pendingAsk=null;
  // Hộp hỏi ngay trong lớp phủ (thay confirm của trình duyệt): trả về giá trị nút bấm hoặc 'cancel'.
  function ask(text,buttons){
    closeQuestion();
    return new Promise(resolve=>{
      pendingAsk=resolve;refs.popTitle.textContent=text;const box=el('div','ed-ask');
      for(const [label,value,primary] of buttons){
        const b=el('button','ed-btn'+(primary?' ed-primary':''),label);b.type='button';
        b.onclick=()=>{const done=pendingAsk;pendingAsk=null;closeQuestion();done?.(value);};box.append(b);
      }
      refs.popBody.append(box);refs.popup.hidden=false;box.querySelector('button')?.focus();
    });
  }
  function closeQuestion(){
    const done=pendingAsk;pendingAsk=null;done?.('cancel');
    if(popupStart>=0){cells.splice(popupStart);popupStart=-1;}
    refs.popup.hidden=true;refs.popBody.replaceChildren();
  }
  // Popup phóng to riêng một câu: dùng lại choiceGroup nên cùng trạng thái nháp, cùng màu và vòng vàng đáp án đúng.
  function openQuestion(part,i){
    closeQuestion();popupStart=cells.length;
    const p=part,row=el('div','ed-q ed-popq'),box=el('div','ed-popbox');
    refs.popTitle.textContent=`Câu ${i+1} · Phần ${p==='p1'?'I':p==='p2'?'II':'III'}`;
    if(p==='p3'){
      const wrap=shortAnswer(p,i,row),input=wrap.querySelector('input'),pad=el('div','ed-pad');
      wrap.classList.add('ed-bigshort');cells[cells.length-1].popup=true;input.inputMode='none';
      const type=fn=>{input.value=fn(input.value).slice(0,8);input.dispatchEvent(new Event('input'));};
      for(const k of ['7','8','9','4','5','6','1','2','3','-','0',',','⌫','Xóa']){
        const b=el('button','ed-btn ed-key',k);b.type='button';b.setAttribute('aria-label',k==='⌫'?'Xóa một ký tự':k==='Xóa'?'Xóa hết':k);
        b.onclick=()=>type(v=>k==='⌫'?v.slice(0,-1):k==='Xóa'?'':v+k);pad.append(b);
      }
      if(sheetProfile){const r=region('p3',i),crop=el('div','ed-crop ed-crop3'),cv=el('canvas');cv.width=r.w;cv.height=r.h;cv.getContext('2d').drawImage(refs.canvas,r.x,r.y,r.w,r.h,0,0,r.w,r.h);crop.append(cv);box.append(crop);}
      box.append(wrap,pad);box.classList.add('ed-pop3');
    }
    else if(sheetProfile){
      // Ảnh phiếu của riêng câu này phóng to; bấm thẳng vào ô tô trên ảnh để chọn lại.
      const r=region(p,i),pad=p==='p1'?{l:60,r:30,t:30,b:30}:{l:60,r:30,t:26,b:26},x=r.x-pad.l,y=r.y-pad.t,w=r.w+pad.l+pad.r,h=r.h+pad.t+pad.b;
      const crop=el('div','ed-crop'),cv=el('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(refs.canvas,x,y,w,h,0,0,w,h);crop.append(cv);
      const groups=p==='p1'?[[undefined,['A','B','C','D']]]:[0,1,2,3].map(j=>[j,['Đ','S']]);
      for(const [j,options] of groups){
        const group=choiceGroup(p,i,j,options,row),cell=cells[cells.length-1];
        for(const {btn,option} of cell.buttons){
          const pos=OMR.choicePosition(p,i,j,option,sheetProfile);btn.className='ed-mk ed-pk';
          Object.assign(btn.style,{left:(pos.x-x)/w*100+'%',top:(pos.y-y)/h*100+'%',width:26/w*100+'%',height:26/h*100+'%'});
          btn.textContent='';btn.title=option;crop.append(btn);
        }
      }
      box.append(crop);box.classList.add('ed-pop1');
    }
    else if(p==='p1')box.append(choiceGroup(p,i,undefined,['A','B','C','D'],row));
    else for(let j=0;j<4;j++){const line=el('div','ed-subline'),group=choiceGroup(p,i,j,['Đ','S'],row);line.append(el('span','ed-letter','abcd'[j]),group);box.append(line);}
    if(p!=='p3'&&!sheetProfile)box.classList.add(p==='p1'?'ed-pop1':'ed-pop2');
    refs.popBody.append(box);refs.popup.hidden=false;paintNew(popupStart);
    if(!sheetProfile||p==='p3')refs.popBody.querySelector('button,input')?.focus();
  }
  function paintNew(from){const item=assessDraft();for(let k=from;k<cells.length;k++)paintCell(cells[k],item.keys);}
  function choiceGroup(part,i,j,options,row){
    const group=el('div','ed-choices'),cell={part,i,j,row,buttons:[]};
    const get=()=>j===undefined?draft.answers[part][i]:draft.answers[part][i][j];
    cell.pick=option=>{set(get()===option?'':option);touch({part,i});};
    const set=v=>{if(j===undefined){draft.answers[part][i]=v;draft.flags[part][i]='';}else{draft.answers[part][i][j]=v;draft.flags[part][i][j]='';}};
    for(const option of options){
      const btn=el('button','ed-opt',option);btn.type='button';
      btn.setAttribute('aria-label',`Câu ${i+1}${j===undefined?'':' ý '+'abcd'[j]}: ${option}`);
      btn.onclick=()=>cell.pick(option);
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
  function setPanelHidden(hidden){refs.panel.hidden=hidden;refs.toggle.textContent=hidden?'Hiện bảng':'Ẩn bảng';}
  function setAlpha(v){dialog.style.setProperty('--panel-alpha',String(v/100));refs.alphaValue.textContent=v+'%';refs.alpha.value=v;}
  function close(){
    if(!dialog?.open)return;
    closeQuestion();sheetProfile='';controller?.abort();controller=null;dialog.close();document.body.classList.remove('ed-open');
    refs.canvas.width=refs.canvas.height=0;refs.layer.replaceChildren();refs.body.replaceChildren();cells=[];draft=original=null;
    returnFocus?.focus?.();returnFocus=null;
  }
  async function requestClose(){
    if(dirty&&await ask('Bỏ các thay đổi chưa lưu?',[['Bỏ thay đổi','discard',true],['Ở lại','cancel']])!=='discard')return;
    close();
  }
  function load(record){
    original=record;
    draft={...record,answers:clone(record.answers),flags:clone(record.flags)};dirty=false;
    const aligned=record.points?.length===4&&OMR&&record.profile;let rectified=null;
    if(aligned){try{rectified=OMR.rectify(record.source.getContext('2d').getImageData(0,0,record.source.width,record.source.height),record.points);}catch(_){rectified=null;}}
    if(rectified){refs.canvas.width=rectified.width;refs.canvas.height=rectified.height;refs.canvas.getContext('2d').putImageData(new ImageData(rectified.data,rectified.width,rectified.height),0,0);view.box=contentBox(rectified.data,rectified.width,rectified.height);}
    else{refs.canvas.width=record.source.width;refs.canvas.height=record.source.height;refs.canvas.getContext('2d').drawImage(record.source,0,0);view.box=null;}
    refs.world.style.width=refs.canvas.width+'px';refs.world.style.height=refs.canvas.height+'px';
    refs.paperName.textContent=record.label;refs.detectedCode.textContent=record.examCode||'Chưa đọc được';
    refs.sbd.value=record.studentId||'';
    codes=examCodes();refs.codeLabel.hidden=!codes.length;refs.code.replaceChildren();
    if(codes.length){
      if(!record.keyCode||!codes.includes(record.keyCode)){const o=el('option','','Chọn mã đề');o.value='';refs.code.append(o);}
      for(const c of codes){const o=el('option','',`Mã đề ${c}`);o.value=c;refs.code.append(o);}
      refs.code.value=record.keyCode||'';
    }
    const ids=getIds(),index=ids.indexOf(record.id);
    refs.title.textContent=`${record.label} · ${index+1}/${ids.length}`;refs.prev.disabled=index<=0;refs.next.disabled=index<0||index>=ids.length-1;
    renderBody();if(rectified)buildSheetMarks(record.profile);else{sheetProfile='';refs.layer.replaceChildren();}
  }
  function open(){
    const record=getRecord();if(!record?.answers||!record.source)return;
    if(!dialog)build();
    returnFocus=document.activeElement;
    load(record);setAlpha(storedAlpha());setPanelHidden(false);
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
    refs.cancel.addEventListener('click',requestClose,{signal});
    refs.prev.addEventListener('click',()=>navigate(-1),{signal});refs.next.addEventListener('click',()=>navigate(1),{signal});
    dialog.addEventListener('keydown',e=>{if(!refs.popup.hidden||/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName))return;if(e.key==='ArrowLeft')navigate(-1);else if(e.key==='ArrowRight')navigate(1);},{signal});
    refs.save.addEventListener('click',()=>{const target=original,data=draft,changed=dirty;close();if(changed)onCommit(target,data);},{signal});
    dialog.addEventListener('cancel',e=>{e.preventDefault();if(!refs.popup.hidden)closeQuestion();else requestClose();},{signal});
    const refit=()=>{if(Math.abs(view.s-1)<.02)fit();};window.addEventListener('resize',refit,{signal});window.addEventListener('orientationchange',()=>setTimeout(fit,250),{signal});
    bindGestures(signal);
    document.body.classList.add('ed-open');dialog.showModal();fit();refreshAll();
  }
  return {open,close,isOpen:()=>!!dialog?.open};
}
return {create,MIN_ALPHA,MAX_ALPHA,DEFAULT_ALPHA};
});
