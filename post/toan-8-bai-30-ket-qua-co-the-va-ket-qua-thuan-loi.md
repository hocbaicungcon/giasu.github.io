---
title: 'Toán 8 Bài 30: Kết quả có thể và kết quả thuận lợi'
description: 'Làm chủ lý thuyết Xác suất Toán 8 Bài 30: Phép thử ngẫu nhiên, không gian kết quả có thể, biến cố ngẫu nhiên, xác định kết quả thuận lợi kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Xác suất
  - Kết quả có thể
  - Kết quả thuận lợi
  - Biến cố
  - Kết nối tri thức
grade: 8
---

# Bài 30. Kết quả có thể và kết quả thuận lợi

Mỗi ngày, chúng ta liên tục đưa ra những quyết định dựa trên sự phán đoán về những điều không chắc chắn: Liệu chiều nay trời có mưa không? Đội tuyển bóng đá mà em yêu thích có khả năng chiến thắng trận chung kết tối nay không? Khi tung một đồng xu để phân định sân bóng, mặt nào sẽ xuất hiện?

Để đo lường và lượng hóa sự bất định đó của cuộc sống, một ngành toán học rực rỡ đã ra đời từ thế kỷ XVII: **Lý thuyết Xác suất (Probability Theory)**. Khởi nguồn từ những bức thư trao đổi giữa hai thiên tài Blaise Pascal và Pierre de Fermat về các trò chơi gieo xúc xắc may rủi, xác suất ngày nay đã trở thành công cụ tối thượng của trí tuệ nhân tạo, dự báo thời tiết khí tượng thủy văn, mật mã bảo mật ngân hàng và công nghệ sinh học di truyền.

Viên gạch nền móng đầu tiên của lý thuyết xác suất chính là việc phân tích: Trong một phép thử ngẫu nhiên, có tất cả bao nhiêu **kết quả có thể xảy ra**? Và trong số đó, có bao nhiêu **kết quả thuận lợi** làm cho sự kiện mà chúng ta quan tâm xuất hiện? Hãy cùng bắt đầu hành trình khám phá thế giới xác suất đầy kỳ thú này!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 30: KẾT QUẢ CÓ THỂ & KẾT QUẢ THUẬN LỢI</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phép thử ngẫu nhiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là hành động hay thí nghiệm mà kết quả <strong>không thể biết trước</strong> chắc chắn.<br>• Tuy nhiên, ta biết trước tập hợp <strong>tất cả các kết quả có thể xảy ra</strong> của nó.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Kết quả có thể</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là từng khả năng cụ thể có thể xuất hiện sau khi thực hiện phép thử.<br>• Ví dụ gieo xúc xắc 6 mặt: Có 6 kết quả có thể là các mặt $\{1; 2; 3; 4; 5; 6\}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biến cố & Phân loại</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Biến cố chắc chắn:</strong> Luôn luôn xảy ra.<br>• <strong>Biến cố không thể:</strong> Không bao giờ xảy ra.<br>• <strong>Biến cố ngẫu nhiên:</strong> Có thể xảy ra hoặc không xảy ra tùy thuộc vào kết quả của phép thử.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kết quả thuận lợi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là những kết quả có thể làm cho <strong>biến cố xảy ra</strong>.<br>• Số kết quả thuận lợi ký hiệu là $n(E)$ hoặc $k$.<br>• Luôn thỏa mãn: $0 \le k \le n$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tung đồng xu:** Khi tung một đồng xu cân đối một lần, có mấy kết quả có thể xảy ra? Đó là những kết quả nào?
2. **Gieo xúc xắc:** Khi gieo một con xúc xắc 6 mặt, số chấm xuất hiện có thể là số nào?
3. **Phân biệt tính chắc chắn:** Sự kiện "Mặt Trời mọc ở hướng Đông vào buổi sáng" là biến cố chắc chắn hay biến cố ngẫu nhiên?
4. **Biến cố không thể:** Sự kiện "Gieo con xúc xắc 6 mặt xuất hiện mặt 7 chấm" là loại biến cố nào?
5. **Chọn ngẫu nhiên:** Trong hộp có 3 viên bi đỏ và 2 viên bi xanh. Lấy ngẫu nhiên 1 viên bi, có mấy kết quả có thể về màu sắc của viên bi?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Có $2$ kết quả có thể: Mặt Sấp ($S$) hoặc Mặt Ngửa ($N$).
> 2. Có $6$ kết quả có thể: Mặt $1, 2, 3, 4, 5, 6$ chấm.
> 3. Biến cố chắc chắn (luôn luôn xảy ra theo quy luật tự nhiên).
> 4. Biến cố không thể (vì xúc xắc thông thường chỉ có từ 1 đến 6 chấm).
> 5. Có $2$ kết quả có thể về màu sắc: Bi đỏ hoặc Bi xanh.

---

## I. Lý thuyết Trọng tâm

### 1. Phép thử ngẫu nhiên và Các kết quả có thể

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> - **Phép thử ngẫu nhiên** (gọi tắt là **phép thử**) là một hành động hoặc thí nghiệm mà ta không thể đoán trước kết quả của nó, mặc dù biết trước tập hợp tất cả các kết quả có thể xảy ra.
> - Tập hợp tất cả các trường hợp có thể xuất hiện sau phép thử được gọi là **tập hợp các kết quả có thể** (trong toán học nâng cao gọi là *không gian mẫu* $\Omega$).

*Ví dụ:*
- **Phép thử 1:** Tung một đồng xu một lần.
  Tập hợp các kết quả có thể là: $\{Sấp; Ngửa\}$. Tổng số kết quả có thể là $n = 2$.
- **Phép thử 2:** Gieo một con xúc xắc 6 mặt cân đối.
  Tập hợp các kết quả có thể là: $\{1; 2; 3; 4; 5; 6\}$. Tổng số kết quả có thể là $n = 6$.
- **Phép thử 3:** Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá.
  Có tất cả $52$ kết quả có thể xảy ra.

---

### 2. Biến cố ngẫu nhiên và Phân loại biến cố

Một **biến cố** (thường ký hiệu bằng các chữ cái in hoa $A, B, C, E\dots$) là một sự kiện gắn liền với một phép thử ngẫu nhiên.
Dựa vào khả năng xảy ra, các biến cố được phân thành 3 loại:

1. **Biến cố chắc chắn:** Là biến cố **luôn xảy ra** trong mỗi lần thực hiện phép thử.
   *Ví dụ:* Khi gieo xúc xắc 6 mặt, biến cố $U$: "Số chấm xuất hiện nhỏ hơn 7" là biến cố chắc chắn.
2. **Biến cố không thể:** Là biến cố **không bao giờ xảy ra** trong mỗi lần thực hiện phép thử.
   *Ví dụ:* Khi gieo xúc xắc 6 mặt, biến cố $V$: "Số chấm xuất hiện là số 0" là biến cố không thể.
3. **Biến cố ngẫu nhiên:** Là biến cố **có thể xảy ra hoặc không xảy ra**, tùy thuộc vào kết quả của phép thử.
   *Ví dụ:* Biến cố $E$: "Số chấm xuất hiện là số chẵn" là một biến cố ngẫu nhiên.

---

### 3. Kết quả thuận lợi cho một biến cố

Khi thực hiện phép thử, nếu kết quả xuất hiện làm cho biến cố $E$ xảy ra thì ta nói kết quả đó là **thuận lợi** cho biến cố $E$.

> [!IMPORTANT]
> **ĐỊNH NGHĨA KẾT QUẢ THUẬN LỢI:**
> - Một kết quả có thể được gọi là **kết quả thuận lợi** cho biến cố $E$ nếu khi kết quả đó xảy ra thì biến cố $E$ xảy ra.
> - Số lượng các kết quả thuận lợi cho biến cố $E$ thường được ký hiệu là $n(E)$ hoặc $k$.
> - Mối quan hệ số lượng: Nếu phép thử có tổng cộng $n$ kết quả có thể thì:
>   $$0 \le n(E) \le n$$
>   + Nếu $n(E) = n \implies E$ là biến cố chắc chắn.
>   + Nếu $n(E) = 0 \implies E$ là biến cố không thể.

*Ví dụ:* Phép thử gieo một con xúc xắc 6 mặt.
Tất cả các kết quả có thể là: $\{1; 2; 3; 4; 5; 6\}$ ($n = 6$).
- Xét biến cố $A$: "Xuất hiện mặt có số chấm là số nguyên tố".
  Các số nguyên tố trong tập hợp trên là $2, 3, 5$.
  Do đó, các kết quả thuận lợi cho biến cố $A$ là: mặt $2$, mặt $3$ và mặt $5$.
  Số kết quả thuận lợi là $n(A) = 3$.
- Xét biến cố $B$: "Xuất hiện mặt có số chấm chia hết cho 3".
  Các số chia hết cho 3 là $3, 6$.
  Các kết quả thuận lợi cho $B$ là: mặt $3$ và mặt $6$. Số kết quả thuận lợi là $n(B) = 2$.

---

## Ứng dụng Tương tác Trực quan

### 1. Mô phỏng Phép thử Gieo Xúc xắc 6 mặt & Kiểm tra Kết quả Thuận lợi

Dưới đây là công cụ mô phỏng phép thử gieo một con xúc xắc 6 mặt. Khi gieo, xúc xắc hiển thị mặt chấm trực quan bằng SVG, đồng thời hệ thống tự động kiểm tra xem kết quả xuất hiện có phải là **kết quả thuận lợi** cho 4 biến cố khác nhau hay không:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC 1: GIEO XÚC XẮC 6 MẶT</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Tập hợp tất cả các kết quả có thể: $\{1; 2; 3; 4; 5; 6\}$ ($n = 6$).
  </p>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; margin: 16px 0;">
    <!-- Khối SVG Xúc xắc 6 mặt -->
    <div id="dice-visual" style="display: flex; justify-content: center; align-items: center; width: 90px; height: 90px; background: white; border: 3px solid #1e293b; border-radius: 16px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);">
      <svg id="dice-svg" width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="7" fill="#dc2626" />
      </svg>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
      <button onclick="rollInteractiveDice()" style="padding: 10px 22px; font-size: 1.05em; font-weight: bold; border-radius: 8px; border: none; background: #2563eb; color: white; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(37,99,235,0.4);">
        🎲 GIEO XÚC XẮC
      </button>
      <button onclick="rollDice10Times()" style="padding: 10px 16px; font-size: 1.0em; font-weight: bold; border-radius: 8px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">
        ⚡ Gieo 10 lần liên tiếp
      </button>
    </div>
  </div>
  <div id="dice-result-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 16px; border: 1px dashed #cbd5e1; font-size: 1.0em; line-height: 1.8;">
    Đang tải kết quả xúc xắc...
  </div>
</div>

### 2. Mô phỏng Phép thử Tung Đồng xu 2 lần liên tiếp

Khi tung đồng xu 2 lần, có $4$ kết quả có thể: $(S; S), (S; N), (N; S), (N; N)$. Hãy bấm nút để quan sát kết quả của từng lần tung:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #10b981; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #047857; text-align: center;">MÔ PHỎNG TƯƠNG TÁC 2: TUNG ĐỒNG XU 2 LẦN</h4>
  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin: 16px 0;">
    <div id="coin-1" style="width: 70px; height: 70px; border-radius: 50%; background: #f59e0b; border: 3px solid #d97706; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.4em; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.15);">S</div>
    <div id="coin-2" style="width: 70px; height: 70px; border-radius: 50%; background: #3b82f6; border: 3px solid #2563eb; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.4em; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.15);">N</div>
  </div>
  <div style="text-align: center; margin-bottom: 12px;">
    <button onclick="flipTwoCoins()" style="padding: 10px 22px; font-size: 1.05em; font-weight: bold; border-radius: 8px; border: none; background: #10b981; color: white; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(16,185,129,0.4);">
      🪙 TUNG 2 ĐỒNG XU
    </button>
  </div>
  <div id="coins-result-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 1.0em; line-height: 1.8; text-align: center;">
    Nhấn "Tung 2 đồng xu" để quan sát các biến cố xuất hiện!
  </div>
</div>

<script>
var diceDots = {
  1: '<circle cx="35" cy="35" r="7" fill="#dc2626" />',
  2: '<circle cx="20" cy="20" r="5" fill="#1e293b" /><circle cx="50" cy="50" r="5" fill="#1e293b" />',
  3: '<circle cx="18" cy="18" r="5" fill="#1e293b" /><circle cx="35" cy="35" r="5" fill="#dc2626" /><circle cx="52" cy="52" r="5" fill="#1e293b" />',
  4: '<circle cx="20" cy="20" r="5" fill="#1e293b" /><circle cx="50" cy="20" r="5" fill="#1e293b" /><circle cx="20" cy="50" r="5" fill="#1e293b" /><circle cx="50" cy="50" r="5" fill="#1e293b" />',
  5: '<circle cx="18" cy="18" r="5" fill="#1e293b" /><circle cx="52" cy="18" r="5" fill="#1e293b" /><circle cx="35" cy="35" r="5" fill="#dc2626" /><circle cx="18" cy="52" r="5" fill="#1e293b" /><circle cx="52" cy="52" r="5" fill="#1e293b" />',
  6: '<circle cx="20" cy="16" r="5" fill="#1e293b" /><circle cx="50" cy="16" r="5" fill="#1e293b" /><circle cx="20" cy="35" r="5" fill="#1e293b" /><circle cx="50" cy="35" r="5" fill="#1e293b" /><circle cx="20" cy="54" r="5" fill="#1e293b" /><circle cx="50" cy="54" r="5" fill="#1e293b" />'
};

function rollInteractiveDice() {
  var val = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-svg').innerHTML = diceDots[val];
  var isEven = (val % 2 === 0);
  var isPrime = (val === 2 || val === 3 || val === 5);
  var isDiv3 = (val % 3 === 0);
  var isGt4 = (val > 4);

  var html = '<div style="font-weight:bold; font-size:1.2em; color:#1d4ed8; text-align:center; margin-bottom:8px;">🎲 Mặt xuất hiện: ' + val + ' chấm</div>' +
    '• <strong>Biến cố A: "Mặt có số chấm chẵn" (2, 4, 6):</strong> ' + (isEven ? '<span style="color:#15803d; font-weight:bold;">✅ THUẬN LỢI</span>' : '<span style="color:#dc2626; font-weight:bold;">❌ Không thuận lợi</span>') + '<br>' +
    '• <strong>Biến cố B: "Mặt có số chấm là số nguyên tố" (2, 3, 5):</strong> ' + (isPrime ? '<span style="color:#15803d; font-weight:bold;">✅ THUẬN LỢI</span>' : '<span style="color:#dc2626; font-weight:bold;">❌ Không thuận lợi</span>') + '<br>' +
    '• <strong>Biến cố C: "Mặt có số chấm chia hết cho 3" (3, 6):</strong> ' + (isDiv3 ? '<span style="color:#15803d; font-weight:bold;">✅ THUẬN LỢI</span>' : '<span style="color:#dc2626; font-weight:bold;">❌ Không thuận lợi</span>') + '<br>' +
    '• <strong>Biến cố D: "Mặt có số chấm lớn hơn 4" (5, 6):</strong> ' + (isGt4 ? '<span style="color:#15803d; font-weight:bold;">✅ THUẬN LỢI</span>' : '<span style="color:#dc2626; font-weight:bold;">❌ Không thuận lợi</span>');
  document.getElementById('dice-result-box').innerHTML = html;
}

function rollDice10Times() {
  var counts = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 10; i++) {
    var r = Math.floor(Math.random() * 6) + 1;
    counts[r - 1]++;
  }
  var html = '<div style="font-weight:bold; color:#047857; margin-bottom:6px;">⚡ KẾT QUẢ THỐNG KÊ SAU 10 LẦN GIEO LIÊN TIẾP:</div>';
  for (var k = 1; k <= 6; k++) {
    html += 'Mặt ' + k + ' chấm: <strong>' + counts[k-1] + ' lần</strong> | ';
  }
  html += '<br><span style="font-size:0.9em; color:#64748b;">(Mỗi lần gieo đều độc lập và các kết quả có thể đều có cơ hội xuất hiện như nhau!)</span>';
  document.getElementById('dice-result-box').innerHTML = html;
}

function flipTwoCoins() {
  var sides = ['S', 'N'];
  var c1 = sides[Math.floor(Math.random() * 2)];
  var c2 = sides[Math.floor(Math.random() * 2)];

  var coinEl1 = document.getElementById('coin-1');
  var coinEl2 = document.getElementById('coin-2');
  coinEl1.innerText = c1;
  coinEl2.innerText = c2;
  coinEl1.style.background = c1 === 'S' ? '#f59e0b' : '#3b82f6';
  coinEl2.style.background = c2 === 'S' ? '#f59e0b' : '#3b82f6';

  var isBothS = (c1 === 'S' && c2 === 'S');
  var hasAtLeastOneN = (c1 === 'N' || c2 === 'N');
  var isSame = (c1 === c2);

  var html = '<div style="font-weight:bold; font-size:1.15em; color:#047857; margin-bottom:6px;">Kết quả cặp nhận được: (' + (c1==='S'?'Sấp':'Ngửa') + '; ' + (c2==='S'?'Sấp':'Ngửa') + ')</div>' +
    '• Biến cố "Cả hai lần đều xuất hiện mặt Sấp": ' + (isBothS ? '<span style="color:#15803d; font-weight:bold;">✅ XẢY RA</span>' : '<span style="color:#dc2626;">❌ Không xảy ra</span>') + '<br>' +
    '• Biến cố "Có ít nhất một lần xuất hiện mặt Ngửa": ' + (hasAtLeastOneN ? '<span style="color:#15803d; font-weight:bold;">✅ XẢY RA</span>' : '<span style="color:#dc2626;">❌ Không xảy ra</span>') + '<br>' +
    '• Biến cố "Hai lần xuất hiện mặt giống nhau": ' + (isSame ? '<span style="color:#15803d; font-weight:bold;">✅ XẢY RA</span>' : '<span style="color:#dc2626;">❌ Không xảy ra</span>');
  document.getElementById('coins-result-box').innerHTML = html;
}
setTimeout(function() { rollInteractiveDice(); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Liệt kê tất cả các kết quả có thể của phép thử

**Phương pháp giải:**
1. Đọc kỹ hành động của phép thử và đối tượng tham gia.
2. Liệt kê đầy đủ các khả năng không trùng lặp theo một thứ tự logic (tăng dần, theo màu sắc, theo chữ cái).
3. Đếm tổng số kết quả có thể $n$.

---

#### Bài toán 1:
Hãy liệt kê tất cả các kết quả có thể xảy ra và đếm tổng số kết quả của mỗi phép thử sau:
a) Tung một đồng xu hai lần liên tiếp.
b) Gieo đồng thời hai con xúc xắc 6 mặt khác màu (một con màu trắng, một con màu đỏ).
c) Chọn ngẫu nhiên một chữ cái trong từ tiếng Anh: `"MATHEMATICS"`.

**Lời giải:**

a) Khi tung một đồng xu hai lần liên tiếp, mỗi lần tung có thể xuất hiện mặt Sấp ($S$) hoặc Ngửa ($N$).
Các kết quả có thể được viết dưới dạng cặp $(Lần\ 1, Lần\ 2)$:
$$\{ (S; S), \ (S; N), \ (N; S), \ (N; N) \}$$
Tổng số kết quả có thể là $n = 2 \times 2 = 4$ kết quả.

b) Khi gieo hai con xúc xắc màu trắng và màu đỏ:
- Mỗi con xúc xắc có 6 kết quả có thể (từ 1 đến 6).
- Kết quả được biểu diễn bằng cặp số $(t; d)$, trong đó $t$ là số chấm con xúc xắc trắng, $d$ là số chấm con xúc xắc đỏ ($1 \le t, d \le 6$).
Tổng số kết quả có thể xảy ra là:
$$n = 6 \times 6 = 36\text{ kết quả}$$

c) Từ `"MATHEMATICS"` có $11$ chữ cái:
Các chữ cái riêng biệt là: $\{M; A; T; H; E; I; C; S\}$.
- Nếu tính theo vị trí các con chữ xuất hiện (mỗi con chữ được ghi trên một thẻ): có tất cả $11$ kết quả có thể.
- Nếu tính theo chữ cái khác nhau nhận được: có $8$ kết quả có thể.

---

### Dạng 2: Xác định và đếm số kết quả thuận lợi cho một biến cố

**Phương pháp giải:**
1. Liệt kê tập hợp tất cả các kết quả có thể của phép thử.
2. Kiểm tra từng kết quả xem có làm cho biến cố xảy ra hay không.
3. Liệt kê các kết quả thỏa mãn và đếm số lượng $n(E)$.

---

#### Bài toán 2:
Gieo một con xúc xắc 6 mặt một lần. Hãy liệt kê các kết quả thuận lợi và đếm số kết quả thuận lợi cho mỗi biến cố sau:
a) $A$: "Số chấm xuất hiện là số lẻ".
b) $B$: "Số chấm xuất hiện là ước của 6".
c) $C$: "Số chấm xuất hiện lớn hơn 4".
d) $D$: "Số chấm xuất hiện chia hết cho 5".

**Lời giải:**

Tập hợp tất cả các kết quả có thể của phép thử là: $\{1; 2; 3; 4; 5; 6\}$.

a) Biến cố $A$: Các số chấm là số lẻ gồm: $1, 3, 5$.
- Các kết quả thuận lợi cho $A$ là: mặt $1$, mặt $3$, mặt $5$.
- Số kết quả thuận lợi: $n(A) = 3$.

b) Biến cố $B$: Các ước số nguyên dương của 6 gồm: $1, 2, 3, 6$.
- Các kết quả thuận lợi cho $B$ là: mặt $1$, mặt $2$, mặt $3$, mặt $6$.
- Số kết quả thuận lợi: $n(B) = 4$.

c) Biến cố $C$: Các số lớn hơn 4 gồm: $5, 6$.
- Các kết quả thuận lợi cho $C$ là: mặt $5$ và mặt $6$.
- Số kết quả thuận lợi: $n(C) = 2$.

d) Biến cố $D$: Số chia hết cho 5 trong tập hợp chỉ có: $5$.
- Kết quả thuận lợi cho $D$ là: mặt $5$.
- Số kết quả thuận lợi: $n(D) = 1$.

---

### Dạng 3: Sử dụng Sơ đồ cây và Bảng hai chiều để đếm kết quả

**Phương pháp giải:**
Khi phép thử gồm hai hành động liên tiếp hoặc gieo hai vật cùng lúc:
1. **Bảng hai chiều (Grid Table):** Dòng thể hiện đối tượng 1, cột thể hiện đối tượng 2. Mỗi ô trong bảng là một kết quả có thể.
2. **Sơ đồ cây (Tree Diagram):** Nhánh cấp 1 thể hiện các khả năng của hành động 1; từ mỗi nhánh cấp 1 mọc ra các nhánh cấp 2 thể hiện các khả năng của hành động 2.

---

#### Bài toán 3:
Gieo đồng thời hai con xúc xắc 6 mặt cân đối.
a) Có tất cả bao nhiêu kết quả có thể xảy ra?
b) Liệt kê các kết quả thuận lợi cho biến cố $E$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng 7".
c) Có bao nhiêu kết quả thuận lợi cho biến cố $F$: "Hai con xúc xắc xuất hiện số chấm giống nhau"?

**Lời giải:**

a) Tổng số kết quả có thể xảy ra:
Mỗi con xúc xắc có 6 khả năng, do đó khi gieo hai con xúc xắc:
$$n = 6 \times 6 = 36\text{ kết quả có thể}$$

b) Biến cố $E$: Tổng số chấm bằng 7:
Ta tìm các cặp số $(a; b)$ sao cho $a + b = 7$ với $1 \le a, b \le 6$:
- $1 + 6 = 7 \implies (1; 6)$
- $2 + 5 = 7 \implies (2; 5)$
- $3 + 4 = 7 \implies (3; 4)$
- $4 + 3 = 7 \implies (4; 3)$
- $5 + 2 = 7 \implies (5; 2)$
- $6 + 1 = 7 \implies (6; 1)$
Các kết quả thuận lợi cho $E$ là: $\{(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)\}$.
Số kết quả thuận lợi là $n(E) = 6$.

c) Biến cố $F$: Số chấm giống nhau (các cặp số kép):
Các kết quả thuận lợi là: $\{(1; 1), (2; 2), (3; 3), (4; 4), (5; 5), (6; 6)\}$.
Số kết quả thuận lợi là $n(F) = 6$.

---

### Dạng 4: Phân biệt biến cố chắc chắn, không thể và ngẫu nhiên

**Phương pháp giải:**
1. Biến cố chắc chắn có số kết quả thuận lợi bằng đúng tổng số kết quả có thể: $n(E) = n$.
2. Biến cố không thể không có kết quả thuận lợi nào: $n(E) = 0$.
3. Biến cố ngẫu nhiên có số kết quả thuận lợi: $1 \le n(E) \le n - 1$.

---

#### Bài toán 4:
Trong một hộp kín có $4$ quả bóng màu vàng, $3$ quả bóng màu xanh và $2$ quả bóng màu đỏ (các quả bóng có cùng kích thước và khối lượng). Lấy ngẫu nhiên ra cùng một lúc $3$ quả bóng từ hộp.
Trong các biến cố sau, biến cố nào là biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên?
- $A$: "Trong 3 quả bóng lấy ra có ít nhất một quả bóng màu vàng".
- $B$: "Cả 3 quả bóng lấy ra đều có màu tím".
- $C$: "Trong 3 quả bóng lấy ra có không quá 3 quả bóng màu đỏ".
- $D$: "Cả 3 quả bóng lấy ra có màu khác nhau đôi một (1 vàng, 1 xanh, 1 đỏ)".

**Lời giải:**

Tổng số bóng trong hộp là: $4 + 3 + 2 = 9$ quả.

- Xét biến cố $A$: Ta hoàn toàn có thể lấy ra 3 quả bóng chỉ gồm toàn bóng xanh và bóng đỏ (ví dụ 2 xanh, 1 đỏ), khi đó không có bóng vàng nào. Do đó biến cố $A$ **có thể xảy ra hoặc không xảy ra** $\implies A$ là **biến cố ngẫu nhiên**.
- Xét biến cố $B$: Trong hộp hoàn toàn không có quả bóng màu tím nào, nên không thể lấy ra bóng màu tím $\implies B$ là **biến cố không thể**.
- Xét biến cố $C$: Vì ta chỉ lấy ra tổng cộng đúng 3 quả bóng, nên số bóng đỏ lấy ra tối đa chỉ có thể là 2 (vì trong hộp chỉ có 2 bóng đỏ). Do đó số bóng đỏ luôn luôn nhỏ hơn hoặc bằng 2 (tức không vượt quá 3) $\implies C$ là **biến cố chắc chắn**.
- Xét biến cố $D$: Ta có thể lấy được 1 vàng, 1 xanh, 1 đỏ, nhưng cũng có thể lấy được 3 quả bóng cùng màu vàng $\implies D$ là **biến cố ngẫu nhiên**.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Thí nghiệm Lai giống Đậu Hà Lan của Gregor Mendel (1865)

Khi Gregor Mendel cho lai các cây đậu Hà Lan hạt vàng dị hợp tử $(Aa \times Aa)$:
- Các kết quả tổ hợp gen có thể xảy ra ở đời con là: $\{AA; Aa; aA; aa\}$ ($n = 4$ kết quả).
- Biến cố $E$: "Hạt có kiểu hình màu vàng" (chứa alen trội $A$).
- Các kết quả thuận lợi cho $E$ là: $\{AA; Aa; aA\}$ ($3$ kết quả thuận lợi).
Tỉ số giữa kết quả thuận lợi và kết quả có thể chính là tỉ lệ vàng di truyền $3:1$ nổi tiếng — khai sinh ra toàn bộ ngành Di truyền học hiện đại và công nghệ giải mã bản đồ gen người!

---

### Chuyên đề 2: Phương pháp Mô phỏng Monte Carlo trong Dự án Hạt nhân Manhattan

Năm 1946 tại phòng thí nghiệm Los Alamos, các nhà toán học John von Neumann và Stanislaw Ulam phải tính toán xác suất các hạt neutron va chạm gây phản ứng phân hạch dây chuyền.
Do phương trình vi phân quá phức tạp, họ đã phát minh ra **Thuật toán Monte Carlo**:
Dùng máy tính tạo ra hàng triệu kết quả ngẫu nhiên có thể, sau đó đếm số kết quả thuận lợi mà hạt neutron kích nổ hạt nhân uranium. Ngày nay, phương pháp này được dùng để mô phỏng sự biến đổi khí hậu Trái Đất và dự báo tâm bão siêu cấp.

---

### Chuyên đề 3: Bit Kiểm tra Chẵn - Lẻ (Parity Bit) trong Bảo mật Mạng Internet

Khi truyền các gói tin nhị phân (gồm các bit 0 và 1) qua dây cáp quang ngầm dưới đáy biển, nhiễu điện từ có thể làm sai lệch dữ liệu:
- Người ta thêm vào cuối mỗi byte dữ liệu một **Parity Bit** sao cho tổng số bit 1 luôn là số chẵn.
- Phép thử ngẫu nhiên là việc nhận một byte dữ liệu. Nếu máy chủ phát hiện tổng các bit 1 là số lẻ (kết quả không thuận lợi cho tính toàn vẹn), máy chủ lập tức yêu cầu bên gửi truyền lại gói tin. Kỹ thuật này giữ cho hàng tỷ bức ảnh và video gửi qua Zalo hay Messenger không bị biến dạng mờ nhiễu.

---

### Chuyên đề 4: Đột biến Gen Ngẫu nhiên và Chọn lọc Tự nhiên của Charles Darwin

Trong sinh học tiến hóa, mỗi khi một sinh vật sao chép DNA, các đột biến điểm ngẫu nhiên xảy ra tại các cặp base nucleotide:
- Đại đa số các đột biến là trung tính hoặc có hại.
- Tuy nhiên, khi môi trường sống thay đổi (ví dụ vi khuẩn đối mặt với thuốc kháng sinh), một đột biến ngẫu nhiên tạo ra enzyme phân hủy kháng sinh sẽ trở thành **kết quả thuận lợi** giúp cá thể vi khuẩn đó sống sót và sinh sôi. Hiểu rõ điều này giúp các bác sĩ sử dụng kháng sinh đúng phác đồ để ngăn chặn hiện tượng vi khuẩn kháng thuốc.

---

### Chuyên đề 5: Đánh giá Rủi ro và An toàn Hàng không Dân dụng (Boeing & Airbus)

Trước khi một chiếc máy bay dân dụng như Boeing 787 hay Airbus A350 được cất cánh chở hành khách, các kỹ sư phải phân tích cây sự cố (Fault Tree Analysis):
- Liệt kê tất cả các kết quả hỏng hóc có thể xảy ra đối với 2 động cơ phản lực độc lập.
- Biến cố $E$: "Cả hai động cơ phản lực cùng ngừng hoạt động giữa chuyến bay".
Hệ thống thiết kế đảm bảo số kết quả thuận lợi dẫn đến thảm họa này phải nhỏ hơn $1$ trên $1$ tỷ giờ bay ($10^{-9}$), biến máy bay thương mại thành phương tiện di chuyển an toàn nhất lịch sử loài người.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Khi gieo một con xúc xắc 6 mặt cân đối, số kết quả có thể xảy ra là:",
  "options": [
    "6",
    "12",
    "1",
    "36"
  ],
  "answer": 0,
  "explanation": "Có 6 kết quả có thể là các mặt 1, 2, 3, 4, 5, 6 chấm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Biến cố nào sau đây là BIẾN CỐ CHẮC CHẮN khi gieo một con xúc xắc 6 mặt?",
  "options": [
    "Số chấm xuất hiện nhỏ hơn 7",
    "Số chấm xuất hiện là số chẵn",
    "Số chấm xuất hiện bằng 6",
    "Số chấm xuất hiện lớn hơn 3"
  ],
  "answer": 0,
  "explanation": "Vì các mặt của xúc xắc là 1, 2, 3, 4, 5, 6 đều nhỏ hơn 7, nên biến cố \"Số chấm xuất hiện nhỏ hơn 7\" luôn luôn xảy ra."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Gieo một con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố \"Xuất hiện mặt có số chấm chia hết cho 2\" là:",
  "options": [
    "3",
    "2",
    "4",
    "1"
  ],
  "answer": 0,
  "explanation": "Các mặt có số chấm chia hết cho 2 là các mặt 2, 4, 6 chấm. Có 3 kết quả thuận lợi."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tung một đồng xu 2 lần liên tiếp. Số kết quả có thể của phép thử là:",
  "options": [
    "4",
    "2",
    "8",
    "6"
  ],
  "answer": 0,
  "explanation": "Có 4 kết quả: {SS, SN, NS, NN}."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong hộp có 5 viên bi xanh và 4 viên bi đỏ có kích thước như nhau. Lấy ngẫu nhiên 1 viên bi. Biến cố nào sau đây là BIẾN CỐ KHÔNG THỂ?",
  "options": [
    "Lấy được viên bi màu vàng",
    "Lấy được viên bi màu xanh",
    "Lấy được viên bi màu đỏ",
    "Lấy được 1 viên bi"
  ],
  "answer": 0,
  "explanation": "Vì trong hộp chỉ có bi xanh và bi đỏ, không có bi vàng nên không thể lấy được bi vàng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo một con xúc xắc 6 mặt. Biến cố nào sau đây có số kết quả thuận lợi là 2?",
  "options": [
    "Số chấm xuất hiện là bội của 3",
    "Số chấm xuất hiện là số nguyên tố",
    "Số chấm xuất hiện nhỏ hơn 3",
    "Cả A và C đều đúng"
  ],
  "answer": 3,
  "explanation": "Bội của 3 gồm {3; 6} (2 kết quả). Nhỏ hơn 3 gồm {1; 2} (2 kết quả). Do đó cả A và C đều có 2 kết quả thuận lợi."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một hộp đựng 20 tấm thẻ được đánh số từ 1 đến 20. Rút ngẫu nhiên một tấm thẻ. Số kết quả thuận lợi cho biến cố \"Rút được tấm thẻ ghi số chia hết cho 5\" là:",
  "options": [
    "4",
    "5",
    "3",
    "2"
  ],
  "answer": 0,
  "explanation": "Các số từ 1 đến 20 chia hết cho 5 là: {5; 10; 15; 20}. Có đúng 4 kết quả thuận lợi."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Gieo đồng thời hai con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố \"Tổng số chấm bằng 12\" là:",
  "options": [
    "1",
    "2",
    "0",
    "6"
  ],
  "answer": 0,
  "explanation": "Chỉ có duy nhất một kết quả có tổng bằng 12 là cặp (6; 6)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một lớp có 24 học sinh nam và 16 học sinh nữ. Chọn ngẫu nhiên một bạn làm lớp trưởng. Số kết quả có thể của phép thử là:",
  "options": [
    "40",
    "24",
    "16",
    "2"
  ],
  "answer": 0,
  "explanation": "Tổng số học sinh trong lớp là 24 + 16 = 40 bạn, nên có 40 kết quả có thể chọn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Nếu một biến cố ngẫu nhiên E trong phép thử có 10 kết quả có thể xảy ra, thì số kết quả thuận lợi k của E phải thỏa mãn:",
  "options": [
    "1 ≤ k ≤ 9",
    "0 ≤ k ≤ 10",
    "k = 10",
    "k = 0"
  ],
  "answer": 0,
  "explanation": "Vì E là biến cố ngẫu nhiên (không phải biến cố chắc chắn k = 10 và không phải biến cố không thể k = 0), nên số kết quả thuận lợi phải thỏa mãn 1 ≤ k ≤ 9."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Một tổ học sinh gồm $5$ bạn nam (An, Bình, Cường, Dũng, Giang) và $4$ bạn nữ (Hoa, Lan, Mai, Nga). Giáo viên chọn ngẫu nhiên một bạn lên bảng kiểm tra bài cũ.
a) Liệt kê tất cả các kết quả có thể xảy ra của phép thử. Có bao nhiêu kết quả có thể?
b) Liệt kê các kết quả thuận lợi cho biến cố $A$: "Bạn được chọn là một bạn nữ".
c) Liệt kê các kết quả thuận lợi cho biến cố $B$: "Bạn được chọn có tên bắt đầu bằng chữ cái hoa M hoặc N".

### Bài tập 2:
Gieo một con xúc xắc 6 mặt cân đối hai lần liên tiếp.
a) Có tất cả bao nhiêu kết quả có thể xảy ra?
b) Liệt kê các kết quả thuận lợi cho biến cố $E$: "Hiệu số chấm giữa lần gieo thứ nhất và lần gieo thứ hai bằng 3".
c) Có bao nhiêu kết quả thuận lợi cho biến cố $F$: "Tích số chấm của hai lần gieo là một số lẻ"?

### Bài tập 3:
Một hộp chứa $12$ tấm thẻ cùng kích thước được đánh số từ $1$ đến $12$. Rút ngẫu nhiên một tấm thẻ. Hãy chỉ ra số kết quả thuận lợi cho mỗi biến cố sau:
a) $M$: "Số ghi trên thẻ là số chính phương".
b) $N$: "Số ghi trên thẻ là số chia hết cho cả 2 và 3".
c) $P$: "Số ghi trên thẻ là số có hai chữ số".

### Bài tập 4 (Toán thực tế):
Một gia đình dự định sinh $2$ người con. Giả sử xác suất sinh con trai và con gái là như nhau.
a) Hãy dùng sơ đồ cây để liệt kê tất cả các kết quả có thể về giới tính của 2 người con theo thứ tự sinh (con thứ nhất, con thứ hai).
b) Liệt kê các kết quả thuận lợi cho biến cố "Gia đình có ít nhất một người con gái".
