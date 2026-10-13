import test from 'node:test';
import assert from 'node:assert/strict';
import {lessonActivities,renderLessonPractice} from './lesson-activities.mjs';
const post=html=>({type:'Bài học',slug:'thu-nghiem',title:'Thử nghiệm',category:'Toán học',description:'Ôn tập nội dung của bài học.',html});
test('recall cards retain their source and mask only the chosen phrase',()=>{
 const p=post('<h2 id="dinh-nghia">Định nghĩa</h2><p>Một <strong>tam giác nhọn</strong> là tam giác có cả ba góc đều nhỏ hơn một góc vuông. Hãy quan sát từng góc.</p>');
 const [card]=lessonActivities(p);assert.equal(card.target,'tam giác nhọn');assert.equal(card.anchor,'dinh-nghia');assert.match(card.html,/tam giác nhọn/);assert.doesNotMatch(card.masked,/tam giác nhọn/);assert.match(card.masked,/recall-gap/);
 assert.equal(lessonActivities({...p,type:'Đề thi'}).length,0);
});
test('existing quiz solutions are excluded from new review cards',()=>{
 const p=post('<form class="quiz"><p>Đây là đáp án bí mật không được dùng làm một thẻ nhớ lại trong bài học này.</p></form><h2 id="dap-an">Đáp án</h2><p>Đoạn giải thích dài trong phần đáp án sẽ không được chọn làm thẻ nhớ lại để tránh lặp nội dung kiểm tra.</p>');
 assert.equal(lessonActivities(p)[0].sourceKind,'description');
});
test('table lessons and resource lessons receive grounded activities',()=>{
 const [table]=lessonActivities(post('<table><tr><td>SUM</td><td>Tính tổng các giá trị số trong một vùng dữ liệu.</td></tr></table>'));assert.equal(table.title,'SUM');assert.match(table.html,/Tính tổng/);
 const [resource]=lessonActivities(post('<a href="https://example.org/file?a=1&amp;b=2">Tài liệu ôn tập</a>'));assert.equal(resource.kind,'resource');assert.match(resource.html,/a=1&amp;b=2/);assert.doesNotMatch(resource.html,/amp;amp/);
});
test('embedded review JSON cannot terminate its script element',()=>{
 const p=post('');const cards=[{id:'test',html:'</script><script>alert(1)</script>'}];const html=renderLessonPractice(p,cards);assert.doesNotMatch(html,/<script>alert/);const data=html.match(/data-practice-config>(.*?)<\/script>/s)[1];assert.deepEqual(JSON.parse(data).cards,cards);
});
