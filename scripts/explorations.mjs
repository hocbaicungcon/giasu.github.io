import {escapeHTML} from './interactive.mjs';
export function explorationKind(post){
 if(post.type!=='Bài học'||post.category!=='Toán học')return null;
 const title=post.title.toLocaleLowerCase('vi');
 if(/tổng các góc trong một tam giác/.test(title)&&!post.html?.includes('data-geometry="triangle-angles"'))return 'triangle-angles';
 if(/ước chung|ưcln/.test(title))return 'gcd';
 if(/xác suất thực nghiệm|xác suất tung đồng xu|dữ liệu và xác suất/.test(title))return 'probability';
 if(/hàm số bậc hai|tam thức bậc hai|phương trình bậc hai/.test(title)&&!/căn bậc hai/.test(title))return 'quadratic';
 return null;
}
export function renderExploration(post){
 const kind=explorationKind(post);if(!kind)return '';
 const info={'triangle-angles':['Kéo đỉnh, kiểm chứng tổng ba góc','Kéo đỉnh A hoặc đổi hai thanh tọa độ. Dự đoán tổng ba góc trước khi bấm kiểm tra; thử tạo tam giác nhọn, vuông và tù.'],gcd:['Tìm ƯCLN bằng quan sát','Đổi hai số, chọn số lớn nhất mà cả hai số cùng chia hết rồi kiểm tra các ước chung.'],probability:['Khám phá khả năng xảy ra của sự kiện','Sắp xếp các sự kiện, rồi tung đồng xu để quan sát tần suất qua nhiều lần thử.'],quadratic:['Tự khám phá đồ thị bậc hai','Thay đổi a, b, c và quan sát đồ thị y = ax² + bx + c. Thử đoán hướng mở trước khi xem kết quả.']}[kind];
 return `<section class="lesson-exploration" id="lesson-exploration" data-exploration="${kind}" aria-labelledby="exploration-heading"><span class="practice-kicker">THỬ · DỰ ĐOÁN · KHÁM PHÁ</span><h2 id="exploration-heading">${escapeHTML(info[0])}</h2><p>${escapeHTML(info[1])}</p>${kind==='probability'?renderProbabilitySort()+'<h3>Tung đồng xu và quan sát tần suất</h3><p>So sánh tần suất mặt ngửa với xác suất lý thuyết 1/2. Thử nhiều lần để quan sát sự dao động.</p>':''}<div data-exploration-stage></div><noscript>Bật JavaScript để thay đổi số liệu và thực hiện thí nghiệm.</noscript></section>`;
}

export function renderProbabilitySort(){return `<section class="probability-sort" data-probability-sort aria-labelledby="probability-sort-heading"><h3 id="probability-sort-heading">Từ dễ xảy ra đến khó xảy ra</h3><p>Kéo tay cầm để sắp xếp các sự kiện theo khả năng xảy ra giảm dần. Có thể bấm mũi tên lên/xuống, hoặc dùng phím ↑ và ↓ khi chọn tay cầm.</p><div class="sort-scale" aria-hidden="true"><span>Dễ xảy ra nhất</span><span>Khó xảy ra nhất</span></div><ol class="sort-events" aria-label="Sự kiện theo khả năng xảy ra"></ol><div class="sort-actions"><button type="button" data-sort-check>Kiểm tra thứ tự</button><button type="button" data-sort-reset>Làm lại</button></div><p class="sort-feedback" role="status" aria-live="polite"></p><div class="sort-explanation" data-sort-explanation hidden><strong>Vì sao có thứ tự này?</strong></div><noscript>Với xúc xắc và đồng xu cân đối, so sánh các xác suất: 1; 5/6; 1/2; 1/6; 1/36; 0.</noscript></section>`;}
