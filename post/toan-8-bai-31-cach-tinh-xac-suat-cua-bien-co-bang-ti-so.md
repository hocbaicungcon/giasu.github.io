---
title: 'Toán 8 Bài 31: Cách tính xác suất của biến cố bằng tỉ số'
description: 'Làm chủ lý thuyết Tính xác suất của biến cố bằng tỉ số Toán 8 Bài 31: Giả thiết đồng khả năng, công thức cổ điển P(E) = k / n, tính chất xác suất 0 ≤ P ≤ 1, biến cố đối kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Xác suất biến cố
  - Công thức xác suất
  - Đồng khả năng
  - Biến cố đối
  - Kết nối tri thức
grade: 8
---

# Bài 31. Cách tính xác suất của biến cố bằng tỉ số

Trong cuộc sống hàng ngày, chúng ta thường nghe thấy những câu nói quen thuộc: *"Khả năng mưa hôm nay là $50\%$"*, *"Cơ hội quay trúng thưởng là $1$ trên $100$"*, hay *"Xác suất để rút được con Át bích là $\frac{1}{52}$"*. Vậy con số phần trăm hay phân số ấy được tính toán chính xác bằng công thức toán học nào?

Ở Bài 30, chúng ta đã biết cách đếm tổng số kết quả có thể $n$ và số kết quả thuận lợi $k$ của một biến cố. Khi các kết quả có thể có khả năng xuất hiện ngang nhau (đồng khả năng), nhà toán học vĩ đại Pierre-Simon Laplace đã đúc kết nên một công thức bất hủ: **Xác suất của một biến cố bằng tỉ số giữa số kết quả thuận lợi cho biến cố đó và tổng số kết quả có thể**.

Công thức tỉ số thanh lịch $P(E) = \frac{k}{n}$ này chính là nền tảng của toàn bộ ngành quản trị rủi ro tài chính, định phí bảo hiểm nhân thọ, thuật toán tìm kiếm ngẫu nhiên trong khoa học máy tính và các chiến lược trò chơi trí tuệ đỉnh cao. Hãy cùng khám phá công thức kỳ diệu này!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 31: TÍNH XÁC SUẤT BẰNG TỈ SỐ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Giả thiết Đồng khả năng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tất cả các kết quả có thể của phép thử đều có <strong>khả năng xuất hiện như nhau</strong>.<br>• Thường gặp: đồng xu cân đối, xúc xắc đồng chất, bốc thăm ngẫu nhiên.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Công thức Xác suất Cổ điển</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$P(E) = \frac{k}{n} = \frac{\text{Số kết quả thuận lợi}}{\text{Tổng số kết quả có thể}}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất Cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Luôn có: $0 \le P(E) \le 1$.<br>• Biến cố không thể: $P(\emptyset) = 0$.<br>• Biến cố chắc chắn: $P(\Omega) = 1$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biến cố Đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biến cố "Không xảy ra $E$" gọi là biến cố đối $\overline{E}$.<br>• Tổng xác suất luôn bằng 1:<br>  $$P(\overline{E}) = 1 - P(E)$$<br>• Dùng giải bài toán "Ít nhất một..."</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tung đồng xu:** Xác suất xuất hiện mặt Ngửa khi tung một đồng xu cân đối một lần bằng bao nhiêu?
2. **Xác suất số chẵn:** Khi gieo một con xúc xắc 6 mặt, có mấy kết quả thuận lợi cho biến cố "xuất hiện mặt chẵn"? Xác suất của biến cố đó là bao nhiêu?
3. **Giá trị xác suất:** Có bao giờ xác suất của một biến cố bằng $1{,}5$ hay $-0{,}2$ không? Vì sao?
4. **Biến cố đối:** Nếu xác suất ngày mai có mưa là $0{,}3$, thì xác suất ngày mai không mưa là bao nhiêu?
5. **Rút thăm may mắn:** Trong hộp có 10 lá phiếu, trong đó có 2 lá phiếu trúng thưởng. Xác suất rút trúng lá phiếu thưởng là bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $P = \frac{1}{2} = 0{,}5$ (hoặc $50\%$).
> 2. Có $3$ kết quả thuận lợi ($2, 4, 6$). Xác suất $P = \frac{3}{6} = \frac{1}{2}$.
> 3. Không bao giờ, vì xác suất luôn nằm trong đoạn $[0; 1]$ ($0 \le P \le 1$).
> 4. $P(\text{Không mưa}) = 1 - 0{,}3 = 0{,}7$ (tức $70\%$).
> 5. $P = \frac{2}{10} = \frac{1}{5} = 0{,}2$ (tức $20\%$).

---

## I. Lý thuyết Trọng tâm

### 1. Giả thiết các kết quả có thể là đồng khả năng

> [!IMPORTANT]
> **ĐỊNH NGHĨA ĐỒNG KHẢ NĂNG:**
> Một phép thử ngẫu nhiên được gọi là có **các kết quả có thể đồng khả năng** nếu không có bất kỳ kết quả nào có cơ hội xảy ra nhiều hơn các kết quả khác.

*Ví dụ điển hình:*
- Tung một đồng xu **cân đối và đồng chất**: cơ hội xuất hiện mặt Sấp và mặt Ngửa là hoàn toàn như nhau.
- Gieo một con xúc xắc **cân đối và đồng chất**: mỗi mặt từ 1 đến 6 chấm đều có cơ hội xuất hiện ngang nhau.
- Rút ngẫu nhiên một lá thăm từ hộp kín có các lá thăm có cùng kích thước và khối lượng.

---

### 2. Công thức tính xác suất của biến cố bằng tỉ số

Giả sử một phép thử có $n$ kết quả có thể xảy ra và các kết quả này là đồng khả năng. Nếu có $k$ kết quả thuận lợi cho biến cố $E$, thì:

> [!IMPORTANT]
> **CÔNG THỨC XÁC SUẤT CỔ ĐIỂN:**
> Xác suất của biến cố $E$, ký hiệu là $P(E)$, được tính bởi công thức:
> $$P(E) = \frac{k}{n} = \frac{n(E)}{n}$$
> trong đó:
> - $k$ (hay $n(E)$) là số kết quả thuận lợi cho biến cố $E$.
> - $n$ là tổng số kết quả có thể xảy ra của phép thử.

*Ví dụ:* Gieo một con xúc xắc 6 mặt cân đối.
- Tổng số kết quả có thể: $n = 6$.
- Biến cố $A$: "Xuất hiện mặt có số chấm là số nguyên tố".
  Các kết quả thuận lợi là $2, 3, 5 \implies k = 3$.
  Xác suất của biến cố $A$ là:
  $$P(A) = \frac{k}{n} = \frac{3}{6} = \frac{1}{2} = 0{,}5$$

---

### 3. Các tính chất quan trọng của xác suất

1. **Miền giá trị:** Với mọi biến cố $E$, xác suất luôn thỏa mãn:
   $$0 \le P(E) \le 1$$
   *(Xác suất có thể viết dưới dạng phân số tối giản, số thập phân hoặc tỉ số phần trăm)*
2. **Biến cố không thể:** Nếu biến cố $E$ không thể xảy ra thì số kết quả thuận lợi là $k = 0$:
   $$P(E) = \frac{0}{n} = 0$$
3. **Biến cố chắc chắn:** Nếu biến cố $E$ luôn xảy ra thì số kết quả thuận lợi $k = n$:
   $$P(E) = \frac{n}{n} = 1$$
4. **Biến cố đối:** Biến cố "Biến cố $E$ không xảy ra" được gọi là **biến cố đối** của $E$, ký hiệu là $\overline{E}$. Ta luôn có:
   $$P(\overline{E}) = 1 - P(E) \iff P(E) + P(\overline{E}) = 1$$

---

## Ứng dụng Tương tác Trực quan

Dưới đây là bộ mô phỏng phép thử **Rút bóng màu từ hộp kín**. Trong hộp chứa các quả bóng có màu khác nhau. Các em có thể tùy chỉnh số lượng bóng đỏ, xanh, vàng để quan sát xác suất lý thuyết thay đổi theo thời gian thực và thực hiện rút ngẫu nhiên:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: HỘP BÓNG MA THUẬT & TÍNH XÁC SUẤT BẰNG TỈ SỐ</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Tùy chỉnh số lượng bóng trong hộp kín để xem xác suất lý thuyết $P = \frac{k}{n}$:
  </p>
  <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin: 16px 0;">
    <div style="background:#fee2e2; border:1px solid #f87171; padding:8px 14px; border-radius:8px; text-align:center;">
      <span style="color:#b91c1c; font-weight:bold;">🔴 Bóng Đỏ:</span>
      <input type="number" id="ball-red" min="1" max="10" value="4" style="width:50px; text-align:center; margin-left:6px;" onchange="updateBoxProb()">
    </div>
    <div style="background:#dbeafe; border:1px solid #60a5fa; padding:8px 14px; border-radius:8px; text-align:center;">
      <span style="color:#1d4ed8; font-weight:bold;">🔵 Bóng Xanh:</span>
      <input type="number" id="ball-blue" min="1" max="10" value="3" style="width:50px; text-align:center; margin-left:6px;" onchange="updateBoxProb()">
    </div>
    <div style="background:#fef3c7; border:1px solid #fcd34d; padding:8px 14px; border-radius:8px; text-align:center;">
      <span style="color:#b45309; font-weight:bold;">🟡 Bóng Vàng:</span>
      <input type="number" id="ball-yellow" min="1" max="10" value="3" style="width:50px; text-align:center; margin-left:6px;" onchange="updateBoxProb()">
    </div>
  </div>
  <div id="prob-calc-display" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 1.0em; line-height: 1.8; text-align: center; margin-bottom: 14px;">
    Đang tải xác suất...
  </div>
  <div style="text-align: center;">
    <button onclick="drawRandomBall()" style="padding: 10px 24px; font-size: 1.05em; font-weight: bold; border-radius: 8px; border: none; background: #2563eb; color: white; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(37,99,235,0.4);">
      🎱 RÚT THỬ 1 VIÊN BI NGẪU NHIÊN
    </button>
  </div>
  <div id="draw-ball-result" style="margin-top: 12px; text-align: center; font-size: 1.1em; font-weight: bold; min-height: 28px;"></div>
</div>

<script>
function updateBoxProb() {
  var r = parseInt(document.getElementById('ball-red').value, 10) || 0;
  var b = parseInt(document.getElementById('ball-blue').value, 10) || 0;
  var y = parseInt(document.getElementById('ball-yellow').value, 10) || 0;
  var n = r + b + y;

  var prR = (r / n * 100).toFixed(1);
  var prB = (b / n * 100).toFixed(1);
  var prY = (y / n * 100).toFixed(1);

  var html = '<strong>Tổng số bóng trong hộp (kết quả có thể):</strong> n = ' + r + ' + ' + b + ' + ' + y + ' = <span style="color:#2563eb; font-size:1.15em;">' + n + '</span> quả.<br>' +
    '• Xác suất rút được bóng Đỏ: P(Đỏ) = ' + r + '/' + n + ' ≈ <strong>' + prR + '%</strong><br>' +
    '• Xác suất rút được bóng Xanh: P(Xanh) = ' + b + '/' + n + ' ≈ <strong>' + prB + '%</strong><br>' +
    '• Xác suất rút được bóng Vàng: P(Vàng) = ' + y + '/' + n + ' ≈ <strong>' + prY + '%</strong><br>' +
    '• Tổng 3 xác suất: ' + prR + '% + ' + prB + '% + ' + prY + '% = <strong>100%</strong> (chuẩn tắc)';
  document.getElementById('prob-calc-display').innerHTML = html;
}

function drawRandomBall() {
  var r = parseInt(document.getElementById('ball-red').value, 10) || 0;
  var b = parseInt(document.getElementById('ball-blue').value, 10) || 0;
  var y = parseInt(document.getElementById('ball-yellow').value, 10) || 0;
  var n = r + b + y;
  if (n <= 0) return;

  var rand = Math.random() * n;
  var resColor = '', resHex = '';
  if (rand < r) {
    resColor = 'BÓNG ĐỎ'; resHex = '#dc2626';
  } else if (rand < r + b) {
    resColor = 'BÓNG XANH'; resHex = '#2563eb';
  } else {
    resColor = 'BÓNG VÀNG'; resHex = '#d97706';
  }

  document.getElementById('draw-ball-result').innerHTML = 'Bạn vừa rút được: <span style="color:' + resHex + ';">' + resColor + '</span>!';
}
setTimeout(function() { updateBoxProb(); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính xác suất trong các phép thử xúc xắc và đồng xu

**Phương pháp giải:**
1. Xác định tổng số kết quả có thể $n$ (ví dụ: gieo xúc xắc 1 lần thì $n = 6$).
2. Liệt kê các kết quả thuận lợi cho biến cố $E$ và đếm số lượng $k$.
3. Áp dụng công thức: $P(E) = \frac{k}{n}$ và rút gọn phân số.

---

#### Bài toán 1:
Gieo một con xúc xắc 6 mặt cân đối một lần. Tính xác suất của các biến cố sau:
a) $A$: "Xuất hiện mặt có số chấm là số lẻ".
b) $B$: "Xuất hiện mặt có số chấm chia hết cho 3".
c) $C$: "Xuất hiện mặt có số chấm là ước của 12".
d) $D$: "Xuất hiện mặt có số chấm lớn hơn 6".

**Lời giải:**

Số kết quả có thể của phép thử là: $n = 6$.

a) Biến cố $A$: Các mặt lẻ là $\{1; 3; 5\} \implies k = 3$.
Xác suất của biến cố $A$ là:
$$P(A) = \frac{3}{6} = \frac{1}{2} = 0{,}5$$

b) Biến cố $B$: Các mặt chia hết cho 3 là $\{3; 6\} \implies k = 2$.
Xác suất của biến cố $B$ là:
$$P(B) = \frac{2}{6} = \frac{1}{3}$$

c) Biến cố $C$: Các ước số nguyên dương của 12 từ 1 đến 6 là $\{1; 2; 3; 4; 6\} \implies k = 5$.
Xác suất của biến cố $C$ là:
$$P(C) = \frac{5}{6}$$

d) Biến cố $D$: Không có mặt nào có số chấm lớn hơn 6 nên $k = 0$.
Đây là biến cố không thể, xác suất là:
$$P(D) = \frac{0}{6} = 0$$

---

### Dạng 2: Tính xác suất trong phép thử rút thẻ hoặc rút vật từ hộp

**Phương pháp giải:**
1. Tổng số vật trong hộp là $n$.
2. Đếm số vật thỏa mãn tính chất của biến cố $E$ là $k$.
3. Xác suất $P(E) = \frac{k}{n}$.

---

#### Bài toán 2:
Một hộp chứa $25$ tấm thẻ cùng kích thước được đánh số từ $1$ đến $25$. Rút ngẫu nhiên một tấm thẻ trong hộp. Tính xác suất để:
a) Tấm thẻ rút được ghi số chẵn.
b) Tấm thẻ rút được ghi số là số nguyên tố.
c) Tấm thẻ rút được ghi số chia hết cho 4.
d) Tấm thẻ rút được ghi số có hai chữ số và tổng các chữ số bằng 5.

**Lời giải:**

Tổng số kết quả có thể khi rút 1 tấm thẻ từ 25 tấm là: $n = 25$.

a) Gọi $E_1$ là biến cố "Rút được thẻ ghi số chẵn".
Các số chẵn từ 1 đến 25 gồm: $2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24$ (có 12 số).
$$k = 12 \implies P(E_1) = \frac{12}{25} = 0{,}48$$

b) Gọi $E_2$ là biến cố "Rút được thẻ ghi số nguyên tố".
Các số nguyên tố từ 1 đến 25 gồm: $2, 3, 5, 7, 11, 13, 17, 19, 23$ (có 9 số).
$$k = 9 \implies P(E_2) = \frac{9}{25} = 0{,}36$$

c) Gọi $E_3$ là biến cố "Rút được thẻ ghi số chia hết cho 4".
Các số chia hết cho 4 gồm: $4, 8, 12, 16, 20, 24$ (có 6 số).
$$k = 6 \implies P(E_3) = \frac{6}{25} = 0{,}24$$

d) Gọi $E_4$ là biến cố "Rút được thẻ có 2 chữ số mà tổng hai chữ số bằng 5".
Các số có 2 chữ số từ 10 đến 25 có tổng chữ số bằng 5 gồm: $14$ ($1+4=5$) và $23$ ($2+3=5$) (có 2 số).
$$k = 2 \implies P(E_4) = \frac{2}{25} = 0{,}08$$

---

### Dạng 3: Tính xác suất trong phép thử hai bước (Bảng hai chiều)

**Phương pháp giải:**
1. Lập bảng hai chiều hoặc dùng sơ đồ cây để xác định toàn bộ $n$ kết quả có thể.
2. Đếm số ô trong bảng thỏa mãn điều kiện biến cố để tìm $k$.
3. Tính xác suất $P = \frac{k}{n}$.

---

#### Bài toán 3:
Gieo đồng thời hai con xúc xắc 6 mặt cân đối. Tính xác suất của các biến cố sau:
a) $A$: "Hai con xúc xắc cùng xuất hiện mặt có số chấm bằng nhau".
b) $B$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng 8".
c) $C$: "Tích số chấm xuất hiện trên hai con xúc xắc là một số lẻ".

**Lời giải:**

Tổng số kết quả có thể khi gieo 2 con xúc xắc là:
$$n = 6 \times 6 = 36$$

a) Biến cố $A$: Hai số chấm bằng nhau:
Các kết quả thuận lợi là: $\{(1; 1), (2; 2), (3; 3), (4; 4), (5; 5), (6; 6)\} \implies k = 6$.
$$P(A) = \frac{6}{36} = \frac{1}{6}$$

b) Biến cố $B$: Tổng số chấm $a + b = 8$:
Các cặp số có tổng bằng 8 là: $(2; 6), (3; 5), (4; 4), (5; 3), (6; 2) \implies k = 5$.
$$P(B) = \frac{5}{36}$$

c) Biến cố $C$: Tích hai số chấm là số lẻ:
Tích hai số là số lẻ khi và chỉ khi **cả hai con xúc xắc đều ra số lẻ** ($1, 3, 5$).
Con xúc xắc thứ nhất có 3 khả năng ra số lẻ, con xúc xắc thứ hai có 3 khả năng ra số lẻ:
$$k = 3 \times 3 = 9\text{ kết quả thuận lợi}$$
Xác suất của biến cố $C$ là:
$$P(C) = \frac{9}{36} = \frac{1}{4} = 0{,}25$$

---

### Dạng 4: Sử dụng biến cố đối để giải bài toán xác suất

**Phương pháp giải:**
Khi bài toán yêu cầu tính xác suất của biến cố $E$ chứa cụm từ *"có ít nhất một..."*:
1. Xác định biến cố đối $\overline{E}$: Thường là biến cố *"không có... nào"* hoặc *"tất cả đều..."*.
2. Tính xác suất của biến cố đối: $P(\overline{E}) = \frac{k_{\overline{E}}}{n}$.
3. Suy ra xác suất của $E$: $P(E) = 1 - P(\overline{E})$.

---

#### Bài toán 4:
Tung một đồng xu cân đối $3$ lần liên tiếp.
a) Có tất cả bao nhiêu kết quả có thể xảy ra?
b) Tính xác suất để cả 3 lần tung đều xuất hiện mặt Sấp.
c) Tính xác suất để trong 3 lần tung có ít nhất một lần xuất hiện mặt Ngửa.

**Lời giải:**

a) Mỗi lần tung có 2 khả năng ($S$ hoặc $N$).
Tổng số kết quả có thể khi tung 3 lần liên tiếp là:
$$n = 2 \times 2 \times 2 = 8$$
Tập hợp các kết quả: $\{SSS, SSN, SNS, SNN, NSS, NSN, NNS, NNN\}$.

b) Gọi $A$ là biến cố "Cả 3 lần tung đều xuất hiện mặt Sấp".
Chỉ có duy nhất $1$ kết quả thuận lợi là $SSS \implies k = 1$.
$$P(A) = \frac{1}{8} = 0{,}125$$

c) Gọi $B$ là biến cố "Có ít nhất một lần xuất hiện mặt Ngửa".
Biến cố đối của $B$ là $\overline{B}$: "Không có lần nào xuất hiện mặt Ngửa" (tức cả 3 lần đều xuất hiện mặt Sấp — chính là biến cố $A$ ở câu b).
Do đó:
$$P(\overline{B}) = P(A) = \frac{1}{8}$$
Áp dụng công thức biến cố đối:
$$P(B) = 1 - P(\overline{B}) = 1 - \frac{1}{8} = \frac{7}{8} = 0{,}875$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Thư từ Pascal - Fermat (1654) và Bài toán Chia tiền Cược

Năm 1654, một nhà quý tộc mê cờ bạc tên là Chevalier de Méré hỏi Blaise Pascal:
*Hai người chơi tung đồng xu đặt cược 64 đồng vàng, ai thắng 3 ván trước thì ăn toàn bộ tiền cược. Nếu trận đấu phải dừng lại khi người A đã thắng 2 ván, người B mới thắng 1 ván thì chia tiền thưởng thế nào cho công bằng?*
Pascal gửi thư cho Pierre de Fermat. Hai ông đã liệt kê không gian các kết quả có thể của 2 ván đấu tiếp theo: $\{AA, AB, BA, BB\}$ ($4$ kết quả).
Người B chỉ thắng tiền cược khi kết quả là $BB$ (1 kết quả). Người A thắng trong 3 kết quả còn lại: $\{AA, AB, BA\}$.
Do đó xác suất A thắng là $\frac{3}{4}$, B thắng là $\frac{1}{4}$. Tiền cược phải chia: A nhận $48$ đồng, B nhận $16$ đồng. Bức thư đó đánh dấu ngày sinh của Lý thuyết Xác suất hiện đại!

---

### Chuyên đề 2: Xác suất Trò chơi Poker và Cân bằng Nash trong Trí tuệ Nhân tạo

Trong bộ bài Tây 52 lá, xác suất để được chia một bộ bài sảnh chúa (Royal Flush) là:
$$P = \frac{4}{2\,598\,960} \approx 0{,}000001539\text{ (1 trên 649 740 ván)}$$
Dựa vào việc tính toán xác suất các quân bài chưa mở, siêu AI *Libratus* của Đại học Carnegie Mellon đã đánh bại các nhà vô địch poker thế giới nhờ áp dụng lý thuyết cân bằng Nash — nguyên lý tính toán xác suất đối thủ đang "nói dối" (bluff) trong điều kiện thông tin bất đối xứng.

---

### Chuyên đề 3: Kiểm thử Phần mềm Tự động Fuzzing trong An ninh mạng

Khi kiểm tra độ an toàn của hệ điều hành Windows hay iOS trước tin tặc:
- Các chuyên gia an ninh mạng dùng kỹ thuật **Fuzz Testing**: Bơm hàng triệu gói tin nhị phân ngẫu nhiên vào hệ thống.
- Biến cố $E$: "Bộ nhớ bị tràn đệm (Buffer Overflow) khiến ứng dụng bị sập".
Tỉ số giữa số lần sập và tổng số phép thử giúp các kỹ sư vá các lỗ hổng bảo mật zero-day trước khi bị tội phạm mạng khai thác tống tiền.

---

### Chuyên đề 4: Ảo giác Nhận thức và Xác suất Trúng số Vietlott Power 6/55

Trong trò chơi xổ số Vietlott Power 6/55:
- Chọn 6 số từ 55 số. Tổng số kết quả có thể là: $n = 28\,989\,675$ vé.
- Xác suất trúng giải Jackpot 1 là: $P = \frac{1}{28\,989\,675} \approx 0{,}0000000345$.
Con số này nhỏ hơn xác suất một người bị sét đánh trúng trong đời ($1$ trên $1$ triệu). Tuy nhiên, do hiệu ứng tâm lý "Ảo giác kiểm soát", người chơi vẫn bị thu hút bởi số tiền thưởng hàng trăm tỷ đồng mà không nhận ra tỉ số xác suất toán học là cực kỳ nhỏ bé!

---

### Chuyên đề 5: Độ Nhạy (Sensitivity) và Độ Đặc hiệu (Specificity) trong AI Y tế

Khi đánh giá một thuật toán AI chẩn đoán ung thư phổi từ ảnh chụp CT:
- Xác suất phát hiện đúng người có bệnh (True Positive Rate): $P(\text{Dương tính} | \text{Có bệnh}) = \frac{k}{n}$.
- Xác suất dương tính giả (False Positive Rate): Tỉ số những người hoàn toàn khỏe mạnh nhưng bị AI chẩn đoán nhầm là có bệnh.
Việc cân bằng hai tỉ số xác suất này giúp tránh cho bệnh nhân phải chịu đựng những ca phẫu thuật sinh thiết đau đớn không cần thiết.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Công thức tính xác suất cổ điển của biến cố E là:",
  "options": [
    "P(E) = k / n",
    "P(E) = n / k",
    "P(E) = k * n",
    "P(E) = n - k"
  ],
  "answer": 0,
  "explanation": "Xác suất của biến cố E bằng tỉ số giữa số kết quả thuận lợi k và tổng số kết quả có thể n: P(E) = k/n."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Gieo một con xúc xắc 6 mặt cân đối. Xác suất xuất hiện mặt 5 chấm là:",
  "options": [
    "1/6",
    "5/6",
    "1/5",
    "1/2"
  ],
  "answer": 0,
  "explanation": "Chỉ có 1 kết quả thuận lợi là mặt 5 chấm trên tổng số 6 kết quả: P = 1/6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tung một đồng xu cân đối một lần. Xác suất xuất hiện mặt Sấp là:",
  "options": [
    "0.5 (1/2)",
    "1",
    "0",
    "0.25"
  ],
  "answer": 0,
  "explanation": "Tổng số kết quả n = 2, số kết quả thuận lợi k = 1 => P = 1/2 = 0.5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một túi có 6 viên bi đỏ và 4 viên bi xanh cùng kích thước. Rút ngẫu nhiên 1 viên bi. Xác suất rút được viên bi đỏ là:",
  "options": [
    "6/10 = 3/5",
    "4/10 = 2/5",
    "1/6",
    "6/4"
  ],
  "answer": 0,
  "explanation": "Tổng số bóng n = 6 + 4 = 10. Số bóng đỏ k = 6 => P = 6/10 = 3/5 = 0.6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nếu biến cố E có xác suất P(E) = 0.35 thì xác suất của biến cố đối P(E ngang) là:",
  "options": [
    "0.65",
    "0.35",
    "1.35",
    "0.5"
  ],
  "answer": 0,
  "explanation": "P(E ngang) = 1 - P(E) = 1 - 0.35 = 0.65."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo một con xúc xắc 6 mặt. Xác suất xuất hiện mặt có số chấm chia hết cho 2 là:",
  "options": [
    "1/2",
    "1/3",
    "2/3",
    "1/6"
  ],
  "answer": 0,
  "explanation": "Các mặt chia hết cho 2 là {2, 4, 6} (3 mặt). Xác suất P = 3/6 = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Xác suất của một biến cố KHÔNG THỂ bằng:",
  "options": [
    "0",
    "1",
    "0.5",
    "-1"
  ],
  "answer": 0,
  "explanation": "Biến cố không thể có số kết quả thuận lợi k = 0 => P = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một hộp có 20 thẻ đánh số từ 1 đến 20. Rút ngẫu nhiên 1 thẻ. Xác suất rút được thẻ ghi số nguyên tố là:",
  "options": [
    "8/20 = 2/5",
    "9/20",
    "7/20",
    "1/2"
  ],
  "answer": 0,
  "explanation": "Các số nguyên tố từ 1 đến 20 là: {2, 3, 5, 7, 11, 13, 17, 19} (gồm 8 số). P = 8/20 = 2/5 = 0.4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tung một đồng xu cân đối 2 lần liên tiếp. Xác suất để cả hai lần đều xuất hiện mặt Ngửa là:",
  "options": [
    "1/4",
    "1/2",
    "3/4",
    "1/8"
  ],
  "answer": 0,
  "explanation": "Có 4 kết quả có thể {SS, SN, NS, NN}. Kết quả thuận lợi {NN} là 1 => P = 1/4 = 0.25."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khẳng định nào sau đây là SAI về xác suất của một biến cố E?",
  "options": [
    "Xác suất của biến cố có thể lớn hơn 1",
    "0 ≤ P(E) ≤ 1",
    "Xác suất của biến cố chắc chắn bằng 1",
    "P(E) = 0 khi E là biến cố không thể"
  ],
  "answer": 0,
  "explanation": "Xác suất không bao giờ lớn hơn 1. Do đó khẳng định A sai."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Một tổ học sinh gồm $4$ bạn nam và $6$ bạn nữ. Giáo viên gọi ngẫu nhiên một bạn lên bảng làm bài tập. Tính xác suất để:
a) Bạn được gọi là học sinh nữ.
b) Bạn được gọi là học sinh nam.

### Bài tập 2:
Gieo một con xúc xắc 6 mặt cân đối một lần. Tính xác suất của các biến cố sau:
a) $M$: "Số chấm xuất hiện là số nguyên tố chẵn".
b) $N$: "Số chấm xuất hiện lớn hơn 2".
c) $P$: "Số chấm xuất hiện không chia hết cho 3".

### Bài tập 3:
Một hộp chứa $30$ quả bóng được đánh số từ $1$ đến $30$. Rút ngẫu nhiên một quả bóng trong hộp. Tính xác suất để:
a) Quả bóng rút được ghi số là bội của 6.
b) Quả bóng rút được ghi số là số có hai chữ số giống nhau (như 11, 22...).
c) Quả bóng rút được ghi số là số chính phương.

### Bài tập 4 (Toán thực tế):
Trong một đợt bốc thăm trúng thưởng của siêu thị nhân dịp khai trương, ban tổ chức chuẩn bị một thùng phiếu chứa $200$ lá thăm cùng kích thước, trong đó gồm:
- $1$ lá thăm giải Đặc biệt (xe máy điện).
- $5$ lá thăm giải Nhất (tủ lạnh).
- $20$ lá thăm giải Nhì (nồi chiên không dầu).
- $50$ lá thăm giải Khuyến khích (voucher $100\,000$ đồng).
- Các lá thăm còn lại ghi chữ: "Chúc bạn may mắn lần sau".
Bạn Mai là khách hàng đầu tiên được quyền rút ngẫu nhiên một lá thăm.
a) Tính xác suất để bạn Mai rút trúng giải Đặc biệt.
b) Tính xác suất để bạn Mai rút được một giải thưởng bất kỳ (từ Khuyến khích trở lên).
c) Tính xác suất để bạn Mai rút phải lá thăm "Chúc bạn may mắn lần sau".
