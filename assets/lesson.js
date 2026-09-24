// Adjust visual digits only; leave KaTeX's layout and accessible MathML intact.
function balanceMathDigits(root){
 const formulas=[...(root.matches?.('.katex-html')?[root]:[]),...root.querySelectorAll('.katex-html')];
 for(const formula of formulas){
  if(formula.dataset.digitsBalanced)continue;
  formula.dataset.digitsBalanced='true';
  const walker=document.createTreeWalker(formula,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode()){
   const node=walker.currentNode;
   if(/[0-9]/.test(node.data)&&!node.parentElement.closest('svg,.math-digits'))nodes.push(node);
  }
  for(const node of nodes){
   const fragment=document.createDocumentFragment();
   for(const part of node.data.split(/([0-9]+)/)){
    if(/^[0-9]+$/.test(part)){
     const span=document.createElement('span');
     span.className='math-digits';span.textContent=part;fragment.append(span);
    }else fragment.append(document.createTextNode(part));
   }
   node.replaceWith(fragment);
  }
 }
}
balanceMathDigits(document);
new MutationObserver(records=>{
 for(const record of records)for(const node of record.addedNodes){
  if(node.nodeType===Node.ELEMENT_NODE&&!node.closest('.katex-html'))balanceMathDigits(node);
  else if(node.nodeType===Node.ELEMENT_NODE&&node.matches('.katex-html'))balanceMathDigits(node);
 }
}).observe(document.body,{childList:true,subtree:true});

const normalizeAnswer=value=>value.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('vi');
document.querySelectorAll('form.quiz[data-answers]').forEach(form=>{
 const feedback=form.querySelector('.quiz-feedback'), explanation=form.querySelector('.quiz-explanation');
 const clear=()=>{feedback.textContent='';delete form.dataset.result;explanation.hidden=true;};
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const value=new FormData(form).get('answer');
  if(!value||!value.trim()){clear();feedback.textContent='Bạn hãy chọn hoặc nhập đáp án trước nhé.';return;}
  const correct=JSON.parse(form.dataset.answers).some(answer=>normalizeAnswer(answer)===normalizeAnswer(value));
  form.dataset.result=correct?'correct':'incorrect';
  feedback.textContent=correct?'Chính xác! Bạn làm tốt lắm.':'Chưa đúng. Xem giải thích rồi thử lại nhé.';
  explanation.hidden=false;
 });
 form.addEventListener('input',clear);
 form.addEventListener('reset',clear);
});
