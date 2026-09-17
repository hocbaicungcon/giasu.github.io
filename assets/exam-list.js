const fields=['exam-search','exam-grade','exam-category'].map(id=>document.getElementById(id));
const cards=[...document.querySelectorAll('.exam-card')];
const normalized=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
function filter(){let count=0;for(const card of cards){card.hidden=!(normalized(card.querySelector('h2').textContent).includes(normalized(fields[0].value.trim()))&&(!fields[1].value||card.dataset.grade===fields[1].value)&&(!fields[2].value||card.dataset.category===fields[2].value));if(!card.hidden)count++;}document.getElementById('exam-count').textContent=`${count} đề kiểm tra`;document.getElementById('exam-empty').hidden=count>0;}
fields.forEach(f=>f.addEventListener('input',filter));
