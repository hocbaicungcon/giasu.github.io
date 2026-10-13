/* credit: giasu.ai.vn */
document.querySelectorAll('[data-lesson-practice]').forEach(root=>{
 const {slug,cards}=JSON.parse(root.querySelector('[data-practice-config]').textContent),key='giasu-practice:'+slug,knownIds=new Set(cards.map(c=>c.id));
 let position=0,states={};
 try{const saved=JSON.parse(localStorage.getItem(key)||'{}');for(const [id,state] of Object.entries(saved))if(knownIds.has(id)&&['remembered','review'].includes(state))states[id]=state;}catch{}
 const body=root.querySelector('.practice-card'),counter=root.querySelector('.practice-position'),progress=root.querySelector('.practice-progress'),prev=root.querySelector('[data-practice-prev]'),next=root.querySelector('[data-practice-next]');
 const save=()=>{try{localStorage.setItem(key,JSON.stringify(states));}catch{}updateProgress();};
 const updateProgress=()=>{const count=cards.filter(c=>states[c.id]==='remembered').length;progress.textContent=`${count}/${cards.length} thẻ đã nắm · ${cards.filter(c=>states[c.id]==='review').length} thẻ cần ôn`;};
 const normalize=s=>s.normalize('NFC').trim().toLocaleLowerCase('vi').replace(/\s+/g,' ').replace(/[.!?,;:]+$/,'');
 const render=()=>{
  const card=cards[position];counter.textContent=`Thẻ ${position+1}/${cards.length}`;prev.disabled=position===0;next.disabled=position===cards.length-1;
  body.replaceChildren();
  const title=document.createElement('h3');title.textContent=card.title;
  const prompt=document.createElement('p');prompt.textContent=card.kind==='resource'?'Mở tài liệu của bài, chọn một mục để học rồi ghi lại các ý chính em nhớ được.':card.kind==='cloze'?'Cụm từ nào được nhấn mạnh trong đoạn trích này?':'Em hãy giải thích ý chính của mục này bằng lời của mình, rồi đối chiếu với đoạn trích.';
  const excerpt=document.createElement('div');excerpt.className='practice-excerpt';excerpt.innerHTML=['cloze','resource'].includes(card.kind)?card.masked:'';
  const answer=document.createElement('div');answer.className='practice-answer';answer.hidden=true;answer.innerHTML=card.html;
  const feedback=document.createElement('p');feedback.className='practice-feedback';feedback.setAttribute('role','status');
  const actions=document.createElement('div');actions.className='practice-actions';
  const reveal=document.createElement('button');reveal.type='button';reveal.textContent=card.kind==='cloze'?'Xem đoạn trích đầy đủ':'Đối chiếu với bài học';
  const self=document.createElement('div');self.className='practice-assessment';self.hidden=true;
  for(const [value,label] of [['remembered','Đã nhớ rõ'],['review','Cần ôn lại']]){
   const button=document.createElement('button');button.type='button';button.textContent=label;button.setAttribute('aria-pressed',String(states[card.id]===value));
   button.addEventListener('click',()=>{states[card.id]=value;save();self.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));});self.append(button);
  }
  const show=()=>{answer.hidden=false;self.hidden=false;reveal.hidden=true;};reveal.addEventListener('click',show);
  body.append(title,prompt,excerpt);
  if(card.kind==='cloze'){
   const form=document.createElement('form');form.className='practice-cloze';
   const label=document.createElement('label');label.textContent='Cụm từ còn thiếu';
   const input=document.createElement('input');input.type='text';input.name='answer';input.autocomplete='off';label.append(input);
   const check=document.createElement('button');check.type='submit';check.textContent='Kiểm tra';form.append(label,check);
   form.addEventListener('submit',event=>{event.preventDefault();if(!input.value.trim()){feedback.textContent='Em hãy nhập cụm từ trước.';return;}
    const correct=normalize(input.value)===normalize(card.target);feedback.textContent=correct?'Khớp với cụm từ trong bài. Em hãy đọc lại cả đoạn để ghi nhớ.':'Chưa khớp cụm từ gốc. Thử lại hoặc xem đoạn trích đầy đủ.';
    if(correct){states[card.id]='remembered';save();show();self.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===0)));}
   });body.append(form);
  }else{
   const label=document.createElement('label');label.textContent='Ý chính em nhớ được';label.className='practice-notes';
   const notes=document.createElement('textarea');notes.rows=3;notes.placeholder='Viết ngắn gọn bằng lời của em…';label.append(notes);body.append(label);
  }
  actions.append(reveal);body.append(actions,feedback,answer,self);
  if(card.anchor){const link=document.createElement('a');link.href='#'+card.anchor;link.className='practice-source';link.textContent='Đọc lại mục trong bài →';body.append(link);}
  updateProgress();
 };
 prev.addEventListener('click',()=>{position=Math.max(0,position-1);render();});next.addEventListener('click',()=>{position=Math.min(cards.length-1,position+1);render();});
 root.querySelector('[data-practice-reset]').addEventListener('click',()=>{states={};position=0;save();render();});render();
});
