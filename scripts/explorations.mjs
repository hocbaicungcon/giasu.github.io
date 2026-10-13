import {escapeHTML} from './interactive.mjs';
export function explorationKind(post){
 if(post.type!=='Bài học'||post.category!=='Toán học')return null;
 const title=post.title.toLocaleLowerCase('vi');
 if(/ước chung|ưcln/.test(title))return 'gcd';
 if(/xác suất thực nghiệm|xác suất tung đồng xu|dữ liệu và xác suất/.test(title))return 'probability';
 if(/hàm số bậc hai|tam thức bậc hai|phương trình bậc hai/.test(title)&&!/căn bậc hai/.test(title))return 'quadratic';
 return null;
}
export function renderExploration(post){
 const kind=explorationKind(post);if(!kind)return '';
 const info={gcd:['Tìm ƯCLN bằng quan sát','Đổi hai số, chọn số lớn nhất mà cả hai số cùng chia hết rồi kiểm tra các ước chung.'],probability:['Tung đồng xu và quan sát tần suất','Lặp lại thí nghiệm với đồng xu cân đối. So sánh tần suất mặt ngửa với xác suất lý thuyết 1/2.'],quadratic:['Tự khám phá đồ thị bậc hai','Thay đổi a, b, c và quan sát đồ thị y = ax² + bx + c. Thử đoán hướng mở trước khi xem kết quả.']}[kind];
 return `<section class="lesson-exploration" id="lesson-exploration" data-exploration="${kind}" aria-labelledby="exploration-heading"><span class="practice-kicker">THỬ · DỰ ĐOÁN · KHÁM PHÁ</span><h2 id="exploration-heading">${escapeHTML(info[0])}</h2><p>${escapeHTML(info[1])}</p><div data-exploration-stage></div><noscript>Bật JavaScript để thay đổi số liệu và thực hiện thí nghiệm.</noscript></section>`;
}
