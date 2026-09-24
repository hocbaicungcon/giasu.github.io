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
