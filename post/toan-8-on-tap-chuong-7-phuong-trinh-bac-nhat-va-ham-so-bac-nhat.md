---
title: 'Toán 8 Ôn tập Chương 7: Phương trình bậc nhất và hàm số bậc nhất'
description: 'Tổng kết toàn diện Chương 7 Toán 8: Phương trình bậc nhất một ẩn, giải bài toán bằng cách lập phương trình, hàm số y = ax + b, hệ số góc, vị trí tương đối, 4 dạng toán thực tế, 10 quiz tương tác và đề kiểm tra 45 phút chuẩn ma trận kèm barem điểm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Ôn tập chương 7
  - Phương trình bậc nhất
  - Hàm số bậc nhất
  - Hệ số góc
  - Đề kiểm tra toán 8
  - Kết nối tri thức
grade: 8
---

# Ôn tập Chương 7: Phương trình bậc nhất và hàm số bậc nhất

Chương 7 là bước ngoặt vĩ đại của chương trình Đại số 8. Tại đây, tư duy toán học của các em đã có sự nhảy vọt từ việc biến đổi các biểu thức tĩnh sang việc mô hình hóa các mối quan hệ vận động: từ **Phương trình bậc nhất** $ax + b = 0$ để giải các bài toán thực tế, đến **Hàm số bậc nhất** $y = ax + b$ và **Hệ số góc** để nghiên cứu các đường thẳng trên mặt phẳng tọa độ $Oxy$.

Sự kết hợp hoàn hảo giữa phương trình đại số và hình học giải tích này chính là trục xương sống xuyên suốt các kỳ thi vào lớp 10 THPT trên toàn quốc: bài toán lập phương trình chuyển động, năng suất chiếm $2{,}0$ điểm và bài toán đường thẳng, tương giao đồ thị chiếm từ $1{,}0$ đến $1{,}5$ điểm.

Bài viết này hệ thống hóa trọn vẹn toàn bộ lý thuyết, cung cấp bảng tra cứu trực quan, các dạng bài toán kinh điển và một đề kiểm tra 45 phút chuẩn ma trận kèm barem chấm điểm chi tiết!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TỔNG KẾT TOÀN DIỆN CHƯƠNG 7</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương trình Bậc nhất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dạng chuẩn: $ax + b = 0$ ($a \neq 0$).<br>• Nghiệm duy nhất: $x = -\frac{b}{a}$.<br>• Hai quy tắc vàng: <strong>Chuyển vế</strong> (đổi dấu) & <strong>Nhân chia</strong> (cùng một số khác 0).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Giải Toán Lập PT</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bước 1: Chọn ẩn, đặt điều kiện, lập bảng phân tích đại lượng.<br>• Bước 2: Lập và giải phương trình.<br>• Bước 3: Đối chiếu điều kiện và kết luận bài toán.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hàm số Bậc nhất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Công thức: $y = ax + b$ ($a \neq 0$).<br>• $a > 0$: Đồng biến trên $\mathbb{R}$ (đồ thị đi lên).<br>• $a < 0$: Nghịch biến trên $\mathbb{R}$ (đồ thị đi xuống).<br>• Đồ thị là đường thẳng qua $A(0; b)$ và $B(-\frac{b}{a}; 0)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hệ số góc & Tương giao</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hệ số góc $a$: quyết định góc nghiêng với trục $Ox$.<br>• $(d) \parallel (d') \iff a = a'$ và $b \neq b'$.<br>• $(d) \text{ cắt } (d') \iff a \neq a'$.<br>• $(d) \perp (d') \iff a \cdot a' = -1$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tìm nghiệm phương trình:** Phương trình $2x - 8 = 0$ có nghiệm là bao nhiêu?
2. **Xét tính đồng biến:** Hàm số $y = (3 - 5)x + 7 = -2x + 7$ đồng biến hay nghịch biến? Vì sao?
3. **Tung độ gốc:** Đường thẳng $y = 4x - 6$ cắt trục tung $Oy$ tại điểm nào?
4. **Vị trí song song:** Đường thẳng nào sau đây song song với $y = 3x + 1$: $y = 3x - 4$ hay $y = -3x + 1$?
5. **Đổi đơn vị thực tế:** $15\text{ phút}$ bằng bao nhiêu phần của một giờ?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $2x = 8 \implies x = 4$.
> 2. Nghịch biến, vì hệ số góc $a = -2 < 0$.
> 3. Cắt trục tung tại điểm $(0; -6)$ (cho $x = 0$).
> 4. Đường thẳng $y = 3x - 4$ (vì cùng có $a = 3$ và $b \neq b'$).
> 5. $15\text{ phút} = \frac{15}{60} = \frac{1}{4}\text{ giờ} = 0{,}25\text{ giờ}$.

---

## I. Bảng Tổng hợp Toàn diện Quy tắc và Công thức Chương 7

| Chủ đề kiến thức | Dạng tổng quát | Công thức / Điều kiện cốt lõi | Lưu ý đặc biệt |
| :--- | :--- | :--- | :--- |
| **Phương trình bậc nhất** | $ax + b = 0$ ($a \neq 0$) | $x = -\frac{b}{a}$, tập nghiệm $S = \{-\frac{b}{a}\}$ | Chuyển vế phải đổi dấu; chia cả hai vế cho $a \neq 0$ |
| **Biện luận phương trình** | $ax = c$ | • $a \neq 0$: nghiệm duy nhất $x = \frac{c}{a}$<br>• $a = 0, c \neq 0$: Vô nghiệm ($S = \emptyset$)<br>• $a = 0, c = 0$: Vô số nghiệm ($S = \mathbb{R}$) | Biện luận theo tham số $m$ |
| **Bài toán chuyển động** | $s = v \cdot t$ | • Xuôi dòng: $v_x = v_{thực} + v_{nước}$<br>• Ngược dòng: $v_{ng} = v_{thực} - v_{nước}$ | Đổi thống nhất đơn vị km, giờ |
| **Hàm số bậc nhất** | $y = ax + b$ ($a \neq 0$) | • $a > 0$: Đồng biến trên $\mathbb{R}$<br>• $a < 0$: Nghịch biến trên $\mathbb{R}$ | Điểm $M(x_0; y_0) \in (d) \iff y_0 = ax_0 + b$ |
| **Đồ thị đường thẳng** | $(d): y = ax + b$ | • Giao $Oy$: $A(0; b)$<br>• Giao $Ox$: $B(-\frac{b}{a}; 0)$ | $b$ là tung độ gốc |
| **Hai đường thẳng song song** | $(d) \parallel (d')$ | $a = a'$ và $b \neq b'$ | Trùng nhau khi $a = a'$ và $b = b'$ |
| **Hai đường thẳng cắt nhau** | $(d) \text{ cắt } (d')$ | $a \neq a'$ | Cắt trên $Oy \iff a \neq a'$ và $b = b'$ |
| **Hai đường thẳng vuông góc** | $(d) \perp (d')$ | $a \cdot a' = -1$ | $a' = -\frac{1}{a}$ |

---

## Ứng dụng Tương tác Trực quan

Dưới đây là công cụ tương tác giải bài toán tìm tọa độ giao điểm của hai đường thẳng:
$$(d_1): y = 2x - 1 \quad\text{và}\quad (d_2): y = -x + 5$$

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: TÌM GIAO ĐIỂM CỦA HAI ĐƯỜNG THẲNG</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Nhấn vào từng bước để quan sát quá trình giải phương trình hoành độ giao điểm:
  </p>
  <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
    <button onclick="setInterStep(1)" id="istep-btn-1" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: white; cursor: pointer; font-weight: bold;">Bước 1: Lập PT hoành độ</button>
    <button onclick="setInterStep(2)" id="istep-btn-2" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Bước 2: Tìm hoành độ x</button>
    <button onclick="setInterStep(3)" id="istep-btn-3" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Bước 3: Tìm tung độ y</button>
    <button onclick="setInterStep(4)" id="istep-btn-4" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Bước 4: Kết luận tọa độ</button>
  </div>
  <div id="inter-display-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 16px; border: 1px dashed #cbd5e1; font-size: 1.05em; line-height: 1.8; text-align: center;">
    Đang tải mô phỏng...
  </div>
</div>

<script>
function setInterStep(st) {
  var box = document.getElementById('inter-display-box');
  for (var i = 1; i <= 4; i++) {
    var b = document.getElementById('istep-btn-' + i);
    if (i === st) {
      b.style.background = '#2563eb';
      b.style.color = '#ffffff';
      b.style.borderColor = '#2563eb';
      b.style.fontWeight = 'bold';
    } else {
      b.style.background = '#f8fafc';
      b.style.color = '#334155';
      b.style.borderColor = '#cbd5e1';
      b.style.fontWeight = 'normal';
    }
  }
  if (st === 1) {
    box.innerHTML = '<strong style="color:#1d4ed8;">Bước 1: Thiết lập phương trình hoành độ giao điểm:</strong><br>' +
      'Cho hai vế phải của (d₁) và (d₂) bằng nhau:<br>' +
      '<span style="font-family:monospace; font-size:1.2em; color:#b91c1c; font-weight:bold;">2x - 1 = -x + 5</span>';
  } else if (st === 2) {
    box.innerHTML = '<strong style="color:#1d4ed8;">Bước 2: Giải phương trình tìm hoành độ x:</strong><br>' +
      '• Chuyển các hạng tử chứa x sang vế trái: 2x + x = 5 + 1<br>' +
      '• Thu gọn: 3x = 6<br>' +
      '⇒ <span style="color:#15803d; font-weight:bold; font-size:1.2em;">x = 2</span>';
  } else if (st === 3) {
    box.innerHTML = '<strong style="color:#1d4ed8;">Bước 3: Thay hoành độ x = 2 để tìm tung độ y:</strong><br>' +
      '• Thay x = 2 vào phương trình đường thẳng (d₁):<br>' +
      '  y = 2(2) - 1 = 4 - 1 = <strong>3</strong><br>' +
      '• (Kiểm tra lại với d₂: y = -(2) + 5 = 3 - hoàn toàn chính xác!)<br>' +
      '⇒ <span style="color:#15803d; font-weight:bold; font-size:1.2em;">y = 3</span>';
  } else if (st === 4) {
    box.innerHTML = '<strong style="color:#1d4ed8;">Bước 4: Kết luận tọa độ giao điểm:</strong><br>' +
      'Hai đường thẳng (d₁) và (d₂) cắt nhau tại điểm duy nhất có tọa độ là:<br>' +
      '<span style="color:#2563eb; font-weight:bold; font-size:1.35em;">M(2; 3)</span>';
  }
}
setTimeout(function() { setInterStep(1); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Giải phương trình và Biện luận phương trình bậc nhất một ẩn

**Phương pháp giải:**
1. Khai triển dấu ngoặc và quy đồng khử mẫu số học.
2. Đưa về dạng tổng quát: $A(m) \cdot x = B(m)$.
3. Biện luận số nghiệm:
   - Nghiệm duy nhất $\iff A(m) \neq 0$.
   - Vô nghiệm $\iff A(m) = 0$ và $B(m) \neq 0$.
   - Vô số nghiệm $\iff A(m) = 0$ và $B(m) = 0$.

---

#### Bài toán 1:
Cho phương trình ẩn $x$:
$$(m^2 - 1)x = m - 1$$
a) Giải phương trình khi $m = 2$.
b) Tìm giá trị của $m$ để phương trình có nghiệm duy nhất.
c) Tìm giá trị của $m$ để phương trình vô nghiệm; vô số nghiệm.

**Lời giải:**

a) Khi $m = 2$:
$$(2^2 - 1)x = 2 - 1 \iff 3x = 1 \iff x = \frac{1}{3}$$
Vậy với $m = 2$, phương trình có tập nghiệm $S = \left\{\frac{1}{3}\right\}$.

b) Phương trình có nghiệm duy nhất khi và chỉ khi hệ số của $x$ khác $0$:
$$m^2 - 1 \neq 0 \iff (m - 1)(m + 1) \neq 0 \iff m \neq 1 \quad\text{và}\quad m \neq -1$$
Khi đó nghiệm duy nhất là:
$$x = \frac{m - 1}{m^2 - 1} = \frac{m - 1}{(m - 1)(m + 1)} = \frac{1}{m + 1}$$

c) Ta xét hai trường hợp làm cho hệ số $m^2 - 1 = 0$:
- **Trường hợp 1:** Khi $m = 1$:
  Phương trình trở thành $0x = 1 - 1 \iff 0x = 0$.
  Phương trình này có **vô số nghiệm** ($S = \mathbb{R}$).
- **Trường hợp 2:** Khi $m = -1$:
  Phương trình trở thành $0x = -1 - 1 \iff 0x = -2$.
  Không có số thực nào nhân với 0 bằng $-2$. Do đó phương trình **vô nghiệm** ($S = \emptyset$).

---

### Dạng 2: Giải bài toán bằng cách lập phương trình

**Phương pháp giải:**
1. Chọn ẩn số, đặt điều kiện và đơn vị thích hợp.
2. Lập bảng phân tích các đại lượng (vận tốc - thời gian - quãng đường, hoặc năng suất - thời gian - tổng khối lượng).
3. Thiết lập phương trình, giải phương trình và đối chiếu điều kiện để kết luận.

---

#### Bài toán 2 (Toán chuyển động ngược chiều):
Hai người đi xe đạp cùng xuất phát một lúc từ hai địa điểm A và B cách nhau $78\text{ km}$, đi ngược chiều nhau và gặp nhau sau $2$ giờ. Tính vận tốc của mỗi người, biết rằng người đi từ A có vận tốc lớn hơn người đi từ B là $3\text{ km/h}$.

**Lời giải:**

- Gọi vận tốc của người đi xe đạp từ B là $x\text{ (km/h)}$.
- Điều kiện: $x > 0$.
- Vận tốc của người đi xe đạp từ A là:
  $$x + 3\text{ (km/h)}$$
- Trong $2$ giờ:
  + Người đi từ B đi được quãng đường là:
    $$s_B = 2 \cdot x = 2x\text{ (km)}$$
  + Người đi từ A đi được quãng đường là:
    $$s_A = 2 \cdot (x + 3) = 2x + 6\text{ (km)}$$

Vì hai người đi ngược chiều từ A và B để gặp nhau nên tổng quãng đường hai người đi được đúng bằng khoảng cách $AB = 78\text{ km}$. Ta có phương trình:
$$(2x + 6) + 2x = 78$$
Giải phương trình:
$$4x + 6 = 78 \iff 4x = 78 - 6 \iff 4x = 72 \iff x = 18$$
Đối chiếu điều kiện: $x = 18 > 0$ (thỏa mãn điều kiện).
- Vận tốc người đi từ B là $18\text{ km/h}$.
- Vận tốc người đi từ A là: $18 + 3 = 21\text{ km/h}$.
Vậy vận tốc của người đi từ A là $21\text{ km/h}$ và người đi từ B là $18\text{ km/h}$.

---

### Dạng 3: Vẽ đồ thị, Tìm giao điểm và Tính diện tích tam giác tạo bởi hai đường thẳng

**Phương pháp giải:**
1. Xác định tọa độ giao điểm của các đường thẳng với hai trục tọa độ $Ox$ và $Oy$.
2. Tìm tọa độ giao điểm của hai đường thẳng bằng phương trình hoành độ giao điểm.
3. Diện tích tam giác thường tính bằng: $S = \frac{1}{2} \cdot \text{đáy} \times \text{chiều cao}$ (với chiều cao là trị tuyệt đối tung độ đỉnh, đáy là khoảng cách giữa hai giao điểm trên trục hoành).

---

#### Bài toán 3:
Cho hai hàm số bậc nhất: $(d_1): y = x + 2$ và $(d_2): y = -x + 4$.
a) Vẽ đồ thị của hai hàm số trên cùng một mặt phẳng tọa độ $Oxy$.
b) Tìm tọa độ giao điểm $C$ của $(d_1)$ và $(d_2)$ bằng phép tính.
c) Gọi $A$ và $B$ lần lượt là giao điểm của $(d_1)$ và $(d_2)$ với trục hoành $Ox$. Tính diện tích tam giác $ABC$.

**Lời giải:**

a) Tìm các điểm để vẽ đồ thị:
- Đường thẳng $(d_1): y = x + 2$:
  + Cho $x = 0 \implies y = 2 \implies (0; 2)$.
  + Cho $y = 0 \implies x = -2 \implies A(-2; 0) \in Ox$.
- Đường thẳng $(d_2): y = -x + 4$:
  + Cho $x = 0 \implies y = 4 \implies (0; 4)$.
  + Cho $y = 0 \implies x = 4 \implies B(4; 0) \in Ox$.

b) Phương trình hoành độ giao điểm của $(d_1)$ và $(d_2)$ là:
$$x + 2 = -x + 4 \iff 2x = 2 \iff x = 1$$
Thay $x = 1$ vào phương trình $(d_1)$:
$$y = 1 + 2 = 3$$
Vậy tọa độ giao điểm là $C(1; 3)$.

c) Tính diện tích tam giác $ABC$:
- Điểm $A(-2; 0)$ và $B(4; 0)$ cùng nằm trên trục hoành $Ox$. Độ dài cạnh đáy $AB$ là:
  $$AB = |x_B - x_A| = |4 - (-2)| = 6\text{ (đơn vị độ dài)}$$
- Chiều cao hạ từ đỉnh $C(1; 3)$ xuống đáy $AB$ (trục hoành $Ox$) chính là tung độ của điểm $C$:
  $$h = |y_C| = |3| = 3\text{ (đơn vị độ dài)}$$
- Diện tích tam giác $ABC$ là:
  $$S_{ABC} = \frac{1}{2} \cdot AB \cdot h = \frac{1}{2} \cdot 6 \cdot 3 = 9\text{ (đơn vị diện tích)}$$

---

### Dạng 4: Viết phương trình đường thẳng và Điểm cố định

**Phương pháp giải:**
1. Vận dụng quan hệ song song ($a = a', b \neq b'$) hoặc vuông góc ($a \cdot a' = -1$).
2. Tìm điểm cố định của họ đường thẳng $(d): y = (m - a)x + b(m)$:
   - Đưa về dạng phương trình bậc nhất theo ẩn $m$: $m \cdot A(x, y) + B(x, y) = 0$.
   - Phương trình nghiệm đúng với mọi $m$ khi và chỉ khi: $A(x, y) = 0$ và $B(x, y) = 0$.

---

#### Bài toán 4:
Cho đường thẳng $(d): y = (2m - 1)x + m + 2$ ($m \neq \frac{1}{2}$).
a) Tìm $m$ để $(d)$ song song với đường thẳng $y = 3x - 1$.
b) Tìm $m$ để $(d)$ vuông góc với đường thẳng $y = -x + 2$.
c) Chứng minh rằng khi $m$ thay đổi, đường thẳng $(d)$ luôn đi qua một điểm cố định $I$. Tìm tọa độ điểm $I$.

**Lời giải:**

a) Để $(d) \parallel (y = 3x - 1)$:
$$\begin{cases} 2m - 1 = 3 \\ m + 2 \neq -1 \end{cases} \iff \begin{cases} 2m = 4 \\ m \neq -3 \end{cases} \iff m = 2\text{ (thỏa mãn } m \neq 0{,}5)$$
Vậy $m = 2$.

b) Để $(d) \perp (y = -x + 2)$:
$$(2m - 1) \cdot (-1) = -1 \iff 2m - 1 = 1 \iff 2m = 2 \iff m = 1\text{ (thỏa mãn } m \neq 0{,}5)$$
Vậy $m = 1$.

c) Gọi $I(x_0; y_0)$ là điểm cố định mà $(d)$ luôn đi qua với mọi $m$.
Tọa độ điểm $I$ phải thỏa mãn phương trình $(d)$ với mọi $m$:
$$y_0 = (2m - 1)x_0 + m + 2 \quad (\forall m)$$
$$y_0 = 2mx_0 - x_0 + m + 2 \iff m(2x_0 + 1) + (-x_0 - y_0 + 2) = 0 \quad (\forall m)$$
Phương trình này đúng với mọi $m$ khi và chỉ khi:
$$\begin{cases} 2x_0 + 1 = 0 \\ -x_0 - y_0 + 2 = 0 \end{cases} \iff \begin{cases} x_0 = -\frac{1}{2} \\ y_0 = 2 - x_0 = 2 - \left(-\frac{1}{2}\right) = \frac{5}{2} \end{cases}$$
Vậy đường thẳng $(d)$ luôn đi qua điểm cố định $I\left(-\frac{1}{2}; \frac{5}{2}\right)$ với mọi $m$.

---

## III. 10 Câu hỏi Trắc nghiệm Tương tác Kiểm tra Năng lực

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phương trình 3x - 6 = 0 có tập nghiệm là:",
  "options": [
    "S = {2}",
    "S = {-2}",
    "S = {3}",
    "S = ∅"
  ],
  "answer": 0,
  "explanation": "3x = 6 <=> x = 2. Tập nghiệm S = {2}."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hàm số nào sau đây NGHỊCH BIẾN trên R?",
  "options": [
    "y = -2x + 5",
    "y = 3x - 1",
    "y = 0.5x + 2",
    "y = x"
  ],
  "answer": 0,
  "explanation": "Hàm số y = ax + b nghịch biến khi a < 0. Ở đây hàm số y = -2x + 5 có a = -2 < 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đồ thị hàm số y = 2x - 4 cắt trục hoành Ox tại điểm:",
  "options": [
    "(2; 0)",
    "(0; -4)",
    "(-2; 0)",
    "(0; 2)"
  ],
  "answer": 0,
  "explanation": "Cho y = 0 <=> 2x - 4 = 0 <=> x = 2. Điểm giao là (2; 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hai đường thẳng y = 2x + 3 và y = (m - 1)x - 2 song song với nhau khi:",
  "options": [
    "m = 3",
    "m = 2",
    "m = -1",
    "m ≠ 3"
  ],
  "answer": 0,
  "explanation": "Hai đường thẳng song song khi a = a\' <=> m - 1 = 2 <=> m = 3 (và 3 ≠ -2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Tọa độ giao điểm của hai đường thẳng y = x + 1 và y = 2x - 1 là:",
  "options": [
    "(2; 3)",
    "(1; 2)",
    "(3; 4)",
    "(-2; -1)"
  ],
  "answer": 0,
  "explanation": "Phương trình hoành độ: x + 1 = 2x - 1 <=> x = 2 => y = 2 + 1 = 3. Giao điểm là (2; 3)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đường thẳng y = ax + b vuông góc với đường thẳng y = 3x - 2 thì hệ số góc a bằng:",
  "options": [
    "-1/3",
    "3",
    "-3",
    "1/3"
  ],
  "answer": 0,
  "explanation": "Hai đường thẳng vuông góc khi a · a\' = -1 <=> a · 3 = -1 <=> a = -1/3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một xe máy đi quãng đường 90 km với vận tốc v (km/h). Thời gian xe máy đi hết quãng đường là:",
  "options": [
    "90 / v (giờ)",
    "90 * v (giờ)",
    "v / 90 (giờ)",
    "90 + v (giờ)"
  ],
  "answer": 0,
  "explanation": "Thời gian t = s / v = 90 / v (giờ)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Hệ số góc của đường thẳng 2x - y = 5 là:",
  "options": [
    "2",
    "-2",
    "5",
    "-5"
  ],
  "answer": 0,
  "explanation": "Chuyển vế: y = 2x - 5. Hệ số góc đứng trước x là a = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Góc tạo bởi đường thẳng y = x + 4 với chiều dương trục Ox có số đo bằng:",
  "options": [
    "45°",
    "30°",
    "60°",
    "135°"
  ],
  "answer": 0,
  "explanation": "Hệ số góc a = 1 => tan(α) = 1 => α = 45°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tìm m để phương trình (m - 2)x = 0 có vô số nghiệm:",
  "options": [
    "m = 2",
    "m ≠ 2",
    "m = 0",
    "Không có m"
  ],
  "answer": 0,
  "explanation": "Phương trình 0x = 0 luôn có vô số nghiệm với mọi x. Do đó m - 2 = 0 <=> m = 2."
}'></div>

---

## IV. Đề kiểm tra 45 phút Tổng kết Chương 7 Chuẩn Ma trận & Barem điểm

### Ma trận đề kiểm tra 45 phút

| Cấp độ tư duy | Nhận biết (30%) | Thông hiểu (40%) | Vận dụng (20%) | Vận dụng cao (10%) | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Phương trình bậc nhất** | 1 TN (0,5đ) | 1 TL (1,0đ) | — | — | **1,5 điểm** |
| **2. Giải toán lập phương trình** | — | — | 1 TL (2,0đ) | — | **2,0 điểm** |
| **3. Hàm số bậc nhất & Đồ thị** | 1 TN (0,5đ) | 1 TL (1,5đ) | — | — | **2,0 điểm** |
| **4. Hệ số góc & Vị trí tương đối** | 1 TN (0,5đ) | 1 TN (0,5đ) | 1 TL (1,5đ) | — | **2,5 điểm** |
| **5. Điểm cố định / Cực trị hình học** | — | — | — | 1 TL (1,0đ) | **1,0 điểm** |
| **6. Câu hỏi trắc nghiệm thực tế** | 1 TN (0,5đ) | 1 TN (0,5đ) | — | — | **1,0 điểm** |
| **Tổng điểm** | **3,0 điểm** | **4,0 điểm** | **2,0 điểm** | **1,0 điểm** | **10,0 điểm** |

---

### Đề bài Kiểm tra 45 phút

#### Phần I: Trắc nghiệm khách quan (3,0 điểm — mỗi câu 0,5 điểm)
**Câu 1:** Nghiệm của phương trình $4x - 12 = 0$ là:
A. $x = 3$
B. $x = -3$
C. $x = 4$
D. $x = 48$

**Câu 2:** Hàm số bậc nhất nào sau đây đồng biến trên $\mathbb{R}$?
A. $y = 3x - 2$
B. $y = -2x + 1$
C. $y = 5 - x$
D. $y = -4x$

**Câu 3:** Đồ thị hàm số $y = -3x + 6$ cắt trục tung $Oy$ tại điểm có tọa độ là:
A. $(0; 6)$
B. $(2; 0)$
C. $(0; -3)$
D. $(6; 0)$

**Câu 4:** Hệ số góc của đường thẳng $y = -2x + 7$ là:
A. $-2$
B. $7$
C. $2$
D. $-7$

**Câu 5:** Hai đường thẳng $y = 4x + 1$ và $y = 4x - 3$ có vị trí tương đối là:
A. Song song
B. Cắt nhau
C. Trùng nhau
D. Vuông góc

**Câu 6:** Một ô tô đi quãng đường $150\text{ km}$ hết $2{,}5\text{ giờ}$. Vận tốc của ô tô là:
A. $60\text{ km/h}$
B. $50\text{ km/h}$
C. $75\text{ km/h}$
D. $65\text{ km/h}$

---

#### Phần II: Tự luận (7,0 điểm)

**Bài 1 (1,0 điểm):** Giải phương trình sau:
$$\frac{x - 1}{2} - \frac{x + 1}{3} = \frac{x - 5}{6}$$

**Bài 2 (2,0 điểm):**
Một người đi xe máy từ thành phố A đến thành phố B với vận tốc trung bình $35\text{ km/h}$. Lúc về, người đó tăng vận tốc thêm $5\text{ km/h}$ nên thời gian về ít hơn thời gian đi là $30\text{ phút}$. Tính chiều dài quãng đường $AB$.

**Bài 3 (3,0 điểm):**
Cho hai hàm số bậc nhất: $(d_1): y = 2x - 2$ và $(d_2): y = -x + 4$.
a) Vẽ đồ thị của hai hàm số trên cùng một mặt phẳng tọa độ $Oxy$.
b) Tìm tọa độ giao điểm $A$ của hai đường thẳng $(d_1)$ và $(d_2)$ bằng phép tính.
c) Tìm giá trị của tham số $m$ để đường thẳng $(d_3): y = (m - 1)x + 2$ song song với đường thẳng $(d_1)$.

**Bài 4 (1,0 điểm - Vận dụng cao):**
Cho đường thẳng $(d): y = (m + 2)x + 2m - 1$ (với $m$ là tham số, $m \neq -2$).
Chứng minh rằng đường thẳng $(d)$ luôn đi qua một điểm cố định khi $m$ thay đổi. Tìm tọa độ điểm cố định đó.

---

### Đáp án Chi tiết & Barem Điểm Chuẩn

#### Phần I: Trắc nghiệm (3,0 điểm)
| Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5 | Câu 6 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | **A** | **A** | **A** | **A** | **A** |

*(Mỗi câu trả lời đúng được 0,5 điểm)*

---

#### Phần II: Tự luận (7,0 điểm)

**Bài 1 (1,0 điểm):**
$$\frac{x - 1}{2} - \frac{x + 1}{3} = \frac{x - 5}{6}$$
- Nhân cả hai vế với BCNN là $6$:
  $$3(x - 1) - 2(x + 1) = x - 5$$ *(0,25 điểm)*
- Khai triển phá ngoặc:
  $$3x - 3 - 2x - 2 = x - 5 \iff x - 5 = x - 5$$ *(0,50 điểm)*
- Chuyển vế:
  $$x - x = -5 + 5 \iff 0x = 0$$ *(0,25 điểm)*
- Kết luận: Phương trình nghiệm đúng với mọi số thực $x$. Tập nghiệm $S = \mathbb{R}$. *(0,25 điểm)*

---

**Bài 2 (2,0 điểm):**
- Đổi đơn vị: $30\text{ phút} = 0{,}5\text{ giờ} = \frac{1}{2}\text{ giờ}$. *(0,25 điểm)*
- Gọi chiều dài quãng đường $AB$ là $x\text{ (km)}$. Điều kiện: $x > 0$. *(0,25 điểm)*
- Vận tốc lúc đi là $35\text{ km/h} \implies$ Thời gian đi là: $\frac{x}{35}\text{ (giờ)}$. *(0,25 điểm)*
- Vận tốc lúc về là: $35 + 5 = 40\text{ km/h} \implies$ Thời gian về là: $\frac{x}{40}\text{ (giờ)}$. *(0,25 điểm)*
- Vì thời gian về ít hơn thời gian đi là $0{,}5$ giờ nên ta có phương trình:
  $$\frac{x}{35} - \frac{x}{40} = \frac{1}{2}$$ *(0,25 điểm)*
- Quy đồng với $\text{MTC} = 280$:
  $$8x - 7x = 140 \iff x = 140$$ *(0,50 điểm)*
- Đối chiếu điều kiện: $x = 140 > 0$ (thỏa mãn điều kiện).
- Kết luận: Chiều dài quãng đường $AB$ là $140\text{ km}$. *(0,25 điểm)*

---

**Bài 3 (3,0 điểm):**
a) (1,0 điểm)
- Vẽ $(d_1): y = 2x - 2$: Cho $x = 0 \implies y = -2 \implies (0; -2)$; Cho $y = 0 \implies x = 1 \implies (1; 0)$. Vẽ đường thẳng qua hai điểm. *(0,50 điểm)*
- Vẽ $(d_2): y = -x + 4$: Cho $x = 0 \implies y = 4 \implies (0; 4)$; Cho $y = 0 \implies x = 4 \implies (4; 0)$. Vẽ đường thẳng qua hai điểm. *(0,50 điểm)*

b) (1,0 điểm)
- Phương trình hoành độ giao điểm của $(d_1)$ và $(d_2)$ là:
  $$2x - 2 = -x + 4 \iff 3x = 6 \iff x = 2$$ *(0,50 điểm)*
- Thay $x = 2$ vào phương trình $(d_1)$:
  $$y = 2(2) - 2 = 2$$ *(0,25 điểm)*
- Vậy tọa độ giao điểm là $A(2; 2)$. *(0,25 điểm)*

c) (1,0 điểm)
- Để $(d_3) \parallel (d_1)$ thì:
  $$\begin{cases} a_3 = a_1 \\ b_3 \neq b_1 \end{cases} \iff \begin{cases} m - 1 = 2 \\ 2 \neq -2\text{ (luôn đúng)} \end{cases}$$ *(0,50 điểm)*
- Giải ra $m = 3$.
- Với $m = 3$ thì hệ số của $x$ là $m - 1 = 2 \neq 0$ (thỏa mãn điều kiện hàm số bậc nhất).
- Vậy $m = 3$. *(0,50 điểm)*

---

**Bài 4 (1,0 điểm):**
- Gọi tọa độ điểm cố định mà đường thẳng $(d)$ luôn đi qua là $M(x_0; y_0)$.
- Tọa độ điểm $M$ thỏa mãn phương trình $(d)$ với mọi $m$:
  $$y_0 = (m + 2)x_0 + 2m - 1 \quad (\forall m)$$ *(0,25 điểm)*
- Khai triển và nhóm theo biến $m$:
  $$y_0 = mx_0 + 2x_0 + 2m - 1 \iff m(x_0 + 2) + (2x_0 - y_0 - 1) = 0 \quad (\forall m)$$ *(0,25 điểm)*
- Đẳng thức đúng với mọi $m$ khi và chỉ khi:
  $$\begin{cases} x_0 + 2 = 0 \\ 2x_0 - y_0 - 1 = 0 \end{cases} \iff \begin{cases} x_0 = -2 \\ y_0 = 2x_0 - 1 = 2(-2) - 1 = -5 \end{cases}$$ *(0,25 điểm)*
- Kết luận: Đường thẳng $(d)$ luôn đi qua điểm cố định $M(-2; -5)$ với mọi giá trị của tham số $m$. *(0,25 điểm)*
