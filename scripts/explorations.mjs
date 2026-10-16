import {escapeHTML} from './interactive.mjs';
export function explorationKind(post){
 if(post.type!=='Bài học'||post.category!=='Toán học')return null;
 const title=post.title.toLocaleLowerCase('vi');
 if(/tổng các góc trong một tam giác/.test(title)&&!post.html?.includes('data-geometry="triangle-angles"'))return 'triangle-angles';
 if(/ước chung|ưcln/.test(title))return 'gcd';
 if(/xác suất thực nghiệm|xác suất tung đồng xu|dữ liệu và xác suất/.test(title))return 'probability';
 if(/ứng dụng đạo hàm|khảo sát hàm số|khảo sát và vẽ đồ thị|tính đơn điệu|đồng biến/.test(title))return 'derivative-tangent';
 if(/hàm số bậc nhất|nhị thức bậc nhất|phương trình đường thẳng/.test(title))return 'linear-function';
 if(/quy tắc chuyển vế|chuyển vế/.test(title))return 'equation-balance';
 if(/tập hợp các số hữu tỉ|số hữu tỉ|tập hợp các số thực/.test(title))return 'rational-numberline';
 if(/hàm số bậc hai|tam thức bậc hai|phương trình bậc hai/.test(title)&&!/căn bậc hai/.test(title))return 'quadratic';
 if(/biểu đồ hình quạt tròn|hình quạt tròn/.test(title))return 'pie-chart';
 if(/biểu đồ đoạn thẳng/.test(title))return 'line-chart';
 if(/thu thập và phân loại dữ liệu|phân loại dữ liệu/.test(title))return 'data-classification';
 return null;
}
export function renderExploration(post){
 const kind=explorationKind(post);if(!kind)return '';
 const info={
  'triangle-angles':['Kéo đỉnh, kiểm chứng tổng ba góc','Kéo đỉnh A hoặc đổi hai thanh tọa độ. Dự đoán tổng ba góc trước khi bấm kiểm tra; thử tạo tam giác nhọn, vuông và tù.'],
  gcd:['Tìm ƯCLN bằng quan sát','Đổi hai số, chọn số lớn nhất mà cả hai số cùng chia hết rồi kiểm tra các ước chung.'],
  probability:['Khám phá khả năng xảy ra của sự kiện','Sắp xếp các sự kiện, rồi tung đồng xu để quan sát tần suất qua nhiều lần thử.'],
  quadratic:['Tự khám phá đồ thị bậc hai','Thay đổi a, b, c và quan sát đồ thị y = ax² + bx + c. Thử đoán hướng mở trước khi xem kết quả.'],
  'rational-numberline':['Trục số và biểu diễn số hữu tỉ','Thay đổi tử số và mẫu số để quan sát vị trí của số hữu tỉ a/b trên trục số, số đối và biểu diễn số thập phân.'],
  'linear-function':['Khám phá hàm số bậc nhất y = ax + b','Kéo thanh trượt hệ số góc a và tung độ gốc b để quan sát độ dốc, góc tạo với tia Ox và tính đồng biến, nghịch biến.'],
  'equation-balance':['Cân bằng phương trình & quy tắc chuyển vế','Khám phá quy tắc chuyển vế đổi dấu qua mô hình cân đĩa đại số trực quan.'],
  'derivative-tangent':['Đạo hàm và tiếp tuyến đồ thị (Giải tích)','Trượt tiếp điểm x₀ trên đồ thị để quan sát tiếp tuyến động, liên hệ dấu của f\'(x₀) với tính đồng biến, nghịch biến và cực trị.'],
  'pie-chart':['Khám phá biểu đồ hình quạt tròn tương tác','Điều chỉnh số liệu các nhóm để quan sát tỉ lệ phần trăm, số đo góc ở tâm α = (p/100) × 360° và sự thay đổi diện tích hình quạt.'],
  'line-chart':['Khám phá biểu đồ đoạn thẳng & Phân tích xu hướng','Điều chỉnh số liệu các mốc thời gian để quan sát đường gấp khúc, tính biến thiên (tăng/giảm), độ dốc thay đổi và xu hướng phát triển.'],
  'data-classification':['Phân loại dữ liệu thống kê trực quan','Phân biệt dữ liệu định tính (chữ, xếp thứ tự / không xếp thứ tự) và dữ liệu định lượng (số, rời rạc / liên tục) qua các ví dụ thực tiễn sinh động.']
 }[kind];
 return `<section class="lesson-exploration" id="lesson-exploration" data-exploration="${kind}" aria-labelledby="exploration-heading"><span class="practice-kicker">THỬ · DỰ ĐOÁN · KHÁM PHÁ</span><h2 id="exploration-heading">${escapeHTML(info[0])}</h2><p>${escapeHTML(info[1])}</p>${kind==='probability'?renderProbabilitySort()+'<h3>Tung đồng xu và quan sát tần suất</h3><p>So sánh tần suất mặt ngửa với xác suất lý thuyết 1/2. Thử nhiều lần để quan sát sự dao động.</p>':''}<div data-exploration-stage></div><noscript>Bật JavaScript để thay đổi số liệu và thực hiện thí nghiệm.</noscript></section>`;
}

export function renderProbabilitySort(){return `<section class="probability-sort" data-probability-sort aria-labelledby="probability-sort-heading"><h3 id="probability-sort-heading">Từ dễ xảy ra đến khó xảy ra</h3><p>Kéo tay cầm để sắp xếp các sự kiện theo khả năng xảy ra giảm dần. Có thể bấm mũi tên lên/xuống, hoặc dùng phím ↑ và ↓ khi chọn tay cầm.</p><div class="sort-scale" aria-hidden="true"><span>Dễ xảy ra nhất</span><span>Khó xảy ra nhất</span></div><ol class="sort-events" aria-label="Sự kiện theo khả năng xảy ra"></ol><div class="sort-actions"><button type="button" data-sort-check>Kiểm tra thứ tự</button><button type="button" data-sort-reset>Làm lại</button></div><p class="sort-feedback" role="status" aria-live="polite"></p><div class="sort-explanation" data-sort-explanation hidden><strong>Vì sao có thứ tự này?</strong></div><noscript>Với xúc xắc và đồng xu cân đối, so sánh các xác suất: 1; 5/6; 1/2; 1/6; 1/36; 0.</noscript></section>`;}
