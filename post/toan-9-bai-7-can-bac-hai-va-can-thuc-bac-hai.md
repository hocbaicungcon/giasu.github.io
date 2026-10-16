---
title: 'Toán 9 Bài 7: Căn bậc hai và Căn thức bậc hai - Hằng đẳng thức căn bậc hai và Điều kiện xác định'
description: 'Lý thuyết toàn diện và bài tập Bài 7 Toán 9: Căn bậc hai số học, điều kiện xác định căn thức bậc hai, hằng đẳng thức sqrt(A^2) = |A|, widget tương tác diện tích hình vuông và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Căn bậc hai
  - Căn thức bậc hai
  - Hằng đẳng thức căn bậc hai
  - Điều kiện xác định
  - Kết nối tri thức
grade: 9
---

# Bài 7. Căn bậc hai và Căn thức bậc hai

Từ thời cổ đại, khi các nhà toán học Hy Lạp thuộc trường phái Pythagoras dựng một tam giác vuông cân có hai cạnh góc vuông bằng $1$, họ đã phát hiện ra độ dài cạnh huyền là một con số kỳ lạ không thể biểu diễn dưới dạng phân số thông thường: $\sqrt{2} \approx 1,41421356...$ Đó chính là thời khắc khai sinh ra **Căn bậc hai** và tập hợp các số vô tỉ!

Ngày nay, căn bậc hai xuất hiện ở khắp mọi nơi xung quanh chúng ta:
- Kích thước chuẩn của các tờ giấy in văn phòng $A_3, A_4, A_5$ được thiết kế theo tỉ lệ vàng $1 : \sqrt{2}$.
- Công thức tính khoảng cách định vị GPS giữa hai điểm trên bản đồ vệ tinh.
- Vận tốc rơi tự do của một vật thể từ độ cao $h$: $v = \sqrt{2gh}$.

Trong bài học mở đầu Chương 3 này, các em sẽ nắm vững khái niệm căn bậc hai số học, điều kiện để một căn thức bậc hai có nghĩa, và làm chủ hằng đẳng thức nền tảng $\sqrt{A^2} = |A|$ để rút gọn biểu thức đại số chuẩn xác tuyệt đối!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY: CĂN BẬC HAI VÀ CĂN THỨC BẬC HAI</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Căn bậc hai số học</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $a > 0$: Có hai căn bậc hai là $\sqrt{a}$ và $-\sqrt{a}$.<br>• $\sqrt{a} \ge 0$ gọi là <strong>căn bậc hai số học</strong>.<br>• $x = \sqrt{a} \iff x \ge 0$ và $x^2 = a$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Căn thức bậc hai</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu thức $\sqrt{A}$ với $A$ là biểu thức đại số.<br>• <strong>Điều kiện xác định:</strong> $A \ge 0$.<br>• Biểu thức dưới dấu căn không bao giờ được âm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hằng đẳng thức $\sqrt{A^2} = |A|$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sqrt{A^2} = |A|$.<br>• Nếu $A \ge 0$ thì $\sqrt{A^2} = A$.<br>• Nếu $A < 0$ thì $\sqrt{A^2} = -A$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. So sánh căn bậc hai</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $a, b \ge 0$:<br>• $a < b \iff \sqrt{a} < \sqrt{b}$.<br>• Ứng dụng giải bất phương trình $\sqrt{x} < c \iff 0 \le x < c^2$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Số học:** Căn bậc hai số học của $49$ bằng bao nhiêu?
2. **Số căn:** Số thực $25$ có bao nhiêu căn bậc hai?
3. **Số âm:** Số $-16$ có căn bậc hai không?
4. **Hằng đẳng thức:** Tính giá trị của biểu thức $\sqrt{(-7)^2}$.
5. **Điều kiện xác định:** Căn thức $\sqrt{x - 3}$ có nghĩa khi nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $\sqrt{49} = 7$ (chỉ lấy giá trị không âm).
> 2. Có đúng hai căn bậc hai đối nhau là $5$ và $-5$.
> 3. Không có, vì bình phương của mọi số thực đều $\ge 0$.
> 4. $\sqrt{(-7)^2} = |-7| = 7$.
> 5. Biểu thức dưới căn $\ge 0 \implies x - 3 \ge 0 \iff x \ge 3$.

---

## I. Lý thuyết Trọng tâm

### 1. Căn bậc hai số học

> [!NOTE]
> **Định nghĩa:**
> - Căn bậc hai của một số $a$ không âm là một số $x$ sao cho $x^2 = a$.
> - Số dương $a$ có đúng hai căn bậc hai đối nhau: số dương ký hiệu là $\sqrt{a}$ (gọi là **căn bậc hai số học**) và số âm ký hiệu là $-\sqrt{a}$.
> - Số $0$ có đúng một căn bậc hai là chính nó: $\sqrt{0} = 0$.
> - Số âm **không có căn bậc hai** trong tập số thực $\mathbb{R}$.

**Tính chất then chốt:**
$$x = \sqrt{a} \iff \begin{cases} x \ge 0 \\ x^2 = a \end{cases}$$

---

### 2. So sánh các căn bậc hai số học

> [!IMPORTANT]
> **Định lý:**
> Với hai số $a$ và $b$ không âm, ta có:
> $$a < b \iff \sqrt{a} < \sqrt{b}$$

*Ứng dụng so sánh:*
- So sánh $3$ và $\sqrt{8}$: Ta có $3 = \sqrt{9}$. Vì $9 > 8 \implies \sqrt{9} > \sqrt{8} \implies 3 > \sqrt{8}$.
- Tìm $x$ thỏa mãn $\sqrt{x} > 4$: Ta có $\sqrt{x} > 4 \iff \sqrt{x} > \sqrt{16} \iff x > 16$.

---

### 3. Căn thức bậc hai và Điều kiện xác định

> [!NOTE]
> **Định nghĩa:**
> Với $A$ là một biểu thức đại số, người ta gọi $\sqrt{A}$ là **căn thức bậc hai** của $A$, còn $A$ được gọi là **biểu thức dưới dấu căn** (hoặc biểu thức lấy căn).

**Quy tắc tìm Điều kiện xác định (ĐKXĐ):**
$$\sqrt{A} \text{ xác định (có nghĩa)} \iff A \ge 0$$

*Ví dụ:*
- $\sqrt{2x - 6}$ xác định khi $2x - 6 \ge 0 \iff 2x \ge 6 \iff x \ge 3$.
- $\sqrt{\frac{1}{x - 2}}$ xác định khi $\begin{cases} \frac{1}{x - 2} \ge 0 \\ x - 2 \ne 0 \end{cases} \iff x - 2 > 0 \iff x > 2$.

---

### 4. Hằng đẳng thức $\sqrt{A^2} = |A|$

> [!IMPORTANT]
> **Định lý (Hằng đẳng thức cốt lõi):**
> Với mọi biểu thức đại số $A$, ta luôn có:
> $$\sqrt{A^2} = |A|$$
> Cụ thể:
> $$\sqrt{A^2} = \begin{cases} A & \text{khi } A \ge 0 \\ -A & \text{khi } A < 0 \end{cases}$$

> [!CAUTION]
> Sai lầm rất phổ biến của học sinh là viết ngay $\sqrt{A^2} = A$. 
> Điều này chỉ đúng khi $A \ge 0$! Nếu $A < 0$, viết như vậy là hoàn toàn sai.
> Ví dụ: $\sqrt{(1 - \sqrt{2})^2} = |1 - \sqrt{2}|$. Vì $1 < \sqrt{2} \implies 1 - \sqrt{2} < 0$, nên ta phải đổi dấu:
> $$|1 - \sqrt{2}| = -(1 - \sqrt{2}) = \sqrt{2} - 1$$

---

## II. Widget Tương tác: Ý nghĩa Hình học của Căn Bậc Hai (Diện tích Hình vuông)

Về mặt hình học, căn bậc hai số học $\sqrt{S}$ chính là **độ dài cạnh của một hình vuông** có diện tích bằng $S$. Hãy kéo thanh trượt diện tích để quan sát trực tiếp cạnh hình vuông và giá trị căn bậc hai tương ứng:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG HÌNH HỌC: DIỆN TÍCH HÌNH VUÔNG & CẠNH &radic;S</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
    <label><strong>Diện tích S:</strong> <input type="range" id="slider-area" min="1" max="100" value="36" style="width: 180px;"></label>
    <span id="label-area" style="font-weight: bold; color: #1e3a8a; min-width: 60px;">S = 36</span>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center;">
    <svg id="square-svg" width="280" height="200" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
      <!-- Dynamic Square SVG -->
    </svg>
    <div id="sqrt-calc" style="margin-top: 12px; font-weight: bold; font-size: 1.1em; color: #047857; text-align: center;">
      <!-- Sqrt result -->
    </div>
  </div>
</div>

<script>
(function() {
  function drawSquare() {
    let S = parseFloat(document.getElementById('slider-area').value);
    document.getElementById('label-area').innerText = 'S = ' + S;
    
    let side = Math.sqrt(S);
    const svg = document.getElementById('square-svg');
    const calc = document.getElementById('sqrt-calc');

    // Scale to fit inside 280x200
    // Max side is sqrt(100) = 10 -> scale = 14 px per unit
    let pxSide = side * 15;
    let cx = 140;
    let cy = 100;
    let x0 = cx - pxSide / 2;
    let y0 = cy - pxSide / 2;

    let svgHtml = `
      <rect x="${x0}" y="${y0}" width="${pxSide}" height="${pxSide}" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <text x="${cx}" y="${cy + 5}" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Diện tích S = ${S}</text>
      <!-- Bottom side label -->
      <line x1="${x0}" y1="${y0 + pxSide + 10}" x2="${x0 + pxSide}" y2="${y0 + pxSide + 10}" stroke="#475569" stroke-width="1.5"/>
      <text x="${cx}" y="${y0 + pxSide + 25}" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Cạnh = &radic;${S} &approx; ${side.toFixed(3)}</text>
    `;

    svg.innerHTML = svgHtml;
    calc.innerHTML = `Căn bậc hai số học: &radic;${S} = <span style="color: #b91c1c;">${side.toFixed(4)}</span> &hArr; (${side.toFixed(4)})&sup2; = ${S}`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slider-area').addEventListener('input', drawSquare);
    drawSquare();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Tìm căn bậc hai số học và so sánh hai số

**Phương pháp giải:**
- Để so sánh hai số dương $a$ và $\sqrt{b}$, ta viết $a = \sqrt{a^2}$ rồi so sánh $a^2$ với $b$.
- Nếu $a^2 > b \implies \sqrt{a^2} > \sqrt{b} \implies a > \sqrt{b}$.

---

#### Bài toán 1:
So sánh các cặp số sau (không dùng máy tính cầm tay):
a) $4$ và $\sqrt{15}$.
b) $2\sqrt{3}$ và $3\sqrt{2}$.
c) $\sqrt{26} - 1$ và $4$.

**Lời giải:**

a) Ta có: $4 = \sqrt{16}$.
Vì $16 > 15 \implies \sqrt{16} > \sqrt{15}$.
Vậy $4 > \sqrt{15}$.

b) Ta đưa thừa số vào trong dấu căn:
$$2\sqrt{3} = \sqrt{2^2 \cdot 3} = \sqrt{4 \cdot 3} = \sqrt{12}$$
$$3\sqrt{2} = \sqrt{3^2 \cdot 2} = \sqrt{9 \cdot 2} = \sqrt{18}$$
Vì $12 < 18 \implies \sqrt{12} < \sqrt{18}$.
Vậy $2\sqrt{3} < 3\sqrt{2}$.

c) Ta có: $\sqrt{26} - 1$ và $4$.
Cộng $1$ vào cả hai số: Ta cần so sánh $\sqrt{26}$ và $4 + 1 = 5$.
Vì $5 = \sqrt{25}$ và $26 > 25 \implies \sqrt{26} > \sqrt{25} = 5$.
Trừ $1$ vào cả hai vế:
$$\sqrt{26} - 1 > 5 - 1 = 4$$
Vậy $\sqrt{26} - 1 > 4$.

---

### Dạng 2: Tìm điều kiện xác định của căn thức bậc hai

**Phương pháp giải:**
- Biểu thức $\sqrt{A}$ có nghĩa khi và chỉ khi $A \ge 0$.
- Nếu biểu thức dưới căn là phân thức $\sqrt{\frac{A}{B}}$, chú ý điều kiện mẫu thức $B \ne 0$.

---

#### Bài toán 2:
Tìm điều kiện xác định của $x$ để mỗi căn thức sau có nghĩa:
a) $\sqrt{3x - 12}$.
b) $\sqrt{5 - 2x}$.
c) $\sqrt{\frac{4}{x - 3}}$.
d) $\sqrt{x^2 + 4}$.

**Lời giải:**

a) $\sqrt{3x - 12}$ có nghĩa khi:
$$3x - 12 \ge 0 \iff 3x \ge 12 \iff x \ge 4$$

b) $\sqrt{5 - 2x}$ có nghĩa khi:
$$5 - 2x \ge 0 \iff -2x \ge -5 \iff x \le \frac{-5}{-2} \iff x \le \frac{5}{2}$$

c) $\sqrt{\frac{4}{x - 3}}$ có nghĩa khi:
$$\frac{4}{x - 3} \ge 0$$
Vì tử số là $4 > 0$ nên phân thức $\ge 0$ khi và chỉ khi mẫu số dương:
$$x - 3 > 0 \iff x > 3$$

d) $\sqrt{x^2 + 4}$ có nghĩa khi:
$$x^2 + 4 \ge 0$$
Vì $x^2 \ge 0$ với mọi số thực $x$, nên $x^2 + 4 \ge 4 > 0$ với mọi $x \in \mathbb{R}$.
Vậy căn thức luôn có nghĩa với mọi $x \in \mathbb{R}$.

---

### Dạng 3: Rút gọn biểu thức sử dụng hằng đẳng thức $\sqrt{A^2} = |A|$

**Phương pháp giải:**
1. Đưa biểu thức dưới căn về dạng bình phương một tổng hoặc một hiệu: $A^2 \pm 2AB + B^2 = (A \pm B)^2$.
2. Áp dụng công thức $\sqrt{(A \pm B)^2} = |A \pm B|$.
3. Xét dấu của $A \pm B$ để phá dấu giá trị tuyệt đối:
   - Nếu $A \ge B \implies |A - B| = A - B$.
   - Nếu $A < B \implies |A - B| = B - A$.

---

#### Bài toán 3:
Rút gọn các biểu thức sau:
a) $A = \sqrt{(2 - \sqrt{5})^2} + \sqrt{5}$.
b) $B = \sqrt{7 + 4\sqrt{3}} - \sqrt{7 - 4\sqrt{3}}$.
c) $C = \sqrt{x^2 - 6x + 9} + 2x - 1$ với $x < 3$.

**Lời giải:**

a) Ta có:
$$A = |2 - \sqrt{5}| + \sqrt{5}$$
Vì $2 = \sqrt{4} < \sqrt{5} \implies 2 - \sqrt{5} < 0$, do đó $|2 - \sqrt{5}| = \sqrt{5} - 2$.
Suy ra:
$$A = (\sqrt{5} - 2) + \sqrt{5} = 2\sqrt{5} - 2$$

b) Phân tích các biểu thức dưới dấu căn thành bình phương:
$$7 + 4\sqrt{3} = 4 + 2 \cdot 2 \cdot \sqrt{3} + 3 = 2^2 + 2 \cdot 2 \cdot \sqrt{3} + (\sqrt{3})^2 = (2 + \sqrt{3})^2$$
$$7 - 4\sqrt{3} = 4 - 2 \cdot 2 \cdot \sqrt{3} + 3 = (2 - \sqrt{3})^2$$
Khi đó:
$$B = \sqrt{(2 + \sqrt{3})^2} - \sqrt{(2 - \sqrt{3})^2} = |2 + \sqrt{3}| - |2 - \sqrt{3}|$$
Vì $2 > \sqrt{3} \implies 2 - \sqrt{3} > 0$, nên $|2 - \sqrt{3}| = 2 - \sqrt{3}$.
$$B = (2 + \sqrt{3}) - (2 - \sqrt{3}) = 2 + \sqrt{3} - 2 + \sqrt{3} = 2\sqrt{3}$$

c) Ta có:
$$C = \sqrt{(x - 3)^2} + 2x - 1 = |x - 3| + 2x - 1$$
Vì giả thiết cho $x < 3 \implies x - 3 < 0$, nên $|x - 3| = -(x - 3) = 3 - x$.
Thay vào:
$$C = (3 - x) + 2x - 1 = x + 2$$

---

### Dạng 4: Giải phương trình chứa căn bậc hai cơ bản

#### Bài toán 4:
Giải các phương trình sau:
a) $\sqrt{2x - 3} = 5$.
b) $\sqrt{4x^2 - 4x + 1} = 3$.

**Lời giải:**

a) Điều kiện xác định: $2x - 3 \ge 0 \iff x \ge \frac{3}{2}$.
Bình phương hai vế (vì cả hai vế đều không âm):
$$2x - 3 = 5^2 \iff 2x - 3 = 25 \iff 2x = 28 \implies x = 14$$
Đối chiếu điều kiện: $x = 14 \ge \frac{3}{2}$ (thỏa mãn).
Vậy nghiệm của phương trình là $x = 14$.

b) Biến đổi vế trái:
$$\sqrt{(2x - 1)^2} = 3 \iff |2x - 1| = 3$$
$$\iff \left[\begin{array}{l} 2x - 1 = 3 \\ 2x - 1 = -3 \end{array}\right. \iff \left[\begin{array}{l} 2x = 4 \\ 2x = -2 \end{array}\right. \iff \left[\begin{array}{l} x = 2 \\ x = -1 \end{array}\right.$$
Vậy tập nghiệm của phương trình là $S = \{-1; 2\}$.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Khoảng Cách Điểm Euclide trong Đồ Họa 3D và Game Engine
Trong mọi tựa game thế giới mở (như Minecraft, Genshin Impact), khoảng cách giữa nhân vật và một mục tiêu trên bản đồ tọa độ phẳng $Oxy$ được GPU máy tính tính toán liên tục bằng căn bậc hai:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
Mỗi giây, card đồ họa máy tính phải tính hàng tỷ phép khai căn bậc hai như vậy để quyết định hiệu ứng đổ bóng và tầm nhìn của nhân vật.

---

### Chuyên đề 2: Chu Kỳ Dao Động Con Lắc Đơn & Đo Gia Tốc Trọng Trường
Nhà bác học Christian Huygens đã tìm ra công thức chu kỳ dao động của con lắc đơn:
$$T = 2\pi\sqrt{\frac{l}{g}}$$
Bằng cách đo chính xác chiều dài dây treo $l$ và thời gian dao động $T$, các nhà địa chất dùng căn bậc hai để đo gia tốc trọng trường $g$, từ đó phát hiện các mỏ khoáng sản quý và túi dầu khí nằm sâu hàng nghìn mét dưới lòng đất.

---

### Chuyên đề 3: Vận Tốc Vũ Trụ Cấp 1 Phóng Vệ Tinh (Orbital Velocity)
Để một vệ tinh nhân tạo (như VINASAT-1) có thể bay quanh Trái Đất mà không bị rơi xuống hay bay mất vào không gian, lực hấp dẫn phải cân bằng với lực hướng tâm:
$$v_1 = \sqrt{\frac{G \cdot M}{R}} \approx 7,9\text{ km/s}$$
Công thức căn bậc hai này là chìa khóa mở cánh cửa du hành vũ trụ của toàn nhân loại.

---

### Chuyên đề 4: Tốc Độ Lan Truyền Sóng Thần Biển Sâu (Tsunami Velocity)
Trong hải dương học, khi một trận động đất đáy biển xảy ra, sóng thần di chuyển qua vùng nước sâu $h$ với tốc độ đáng kinh ngạc được tính theo căn bậc hai:
$$v = \sqrt{g \cdot h}$$
Ở độ sâu $h = 4\ 000\text{ m}$, tốc độ sóng thần lên tới $v \approx \sqrt{9,8 \cdot 4000} \approx 200\text{ m/s} = 720\text{ km/h}$ (tương đương tốc độ máy bay phản lực)! Nhờ công thức này, các trung tâm dự báo có thể cảnh báo sơ tán người dân ven biển trước hàng giờ đồng hồ.

---

### Chuyên đề 5: Điện Áp Hiệu Dụng RMS trong Lưới Điện Quốc Gia (Root Mean Square)
Dòng điện xoay chiều trong ổ cắm gia đình có hiệu điện thế tức thời biến thiên hình sin với biên độ đỉnh $U_0 \approx 311\text{ V}$. Để có tác dụng nhiệt tương đương dòng điện một chiều, các kỹ sư điện sử dụng công thức căn bậc hai của trung bình bình phương (RMS):
$$U_{\text{hieu dung}} = \frac{U_0}{\sqrt{2}} \approx \frac{311}{1,414} \approx 220\text{ V}$$
Con số $220\text{ V}$ quen thuộc ghi trên mọi thiết bị điện tử chính là giá trị căn bậc hai số học này!

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Căn bậc hai và Căn thức bậc hai (Toán 9 Bài 7)",
  "questions": [
    {
      "question": "Căn bậc hai số học của 64 là:",
      "options": [
        "8",
        "-8",
        "8 và -8",
        "16"
      ],
      "answer": 0,
      "hint": "Căn bậc hai số học luôn là số không âm: sqrt(64) = 8.",
      "explanation": "Theo định nghĩa, căn bậc hai số học của $a \\ge 0$ là số không âm $\\sqrt{a}$. Vậy căn bậc hai số học của 64 là 8."
    },
    {
      "question": "Tất cả các căn bậc hai của số thực 36 là:",
      "options": [
        "6 và -6",
        "6",
        "-6",
        "18 và -18"
      ],
      "answer": 0,
      "hint": "Số dương có đúng 2 căn bậc hai đối nhau.",
      "explanation": "Số dương 36 có đúng hai căn bậc hai đối nhau là $\\sqrt{36} = 6$ và $-\\sqrt{36} = -6$."
    },
    {
      "question": "Biểu thức căn(3x - 6) xác định khi và chỉ khi:",
      "options": [
        "x >= 2",
        "x <= 2",
        "x > 2",
        "x khác 2"
      ],
      "answer": 0,
      "hint": "Biểu thức dưới dấu căn phải >= 0: 3x - 6 >= 0.",
      "explanation": "Căn thức $\\sqrt{3x - 6}$ có nghĩa $\\iff 3x - 6 \\ge 0 \\iff 3x \\ge 6 \\iff x \\ge 2$."
    },
    {
      "question": "Giá trị của biểu thức căn((-5)^2) bằng:",
      "options": [
        "5",
        "-5",
        "25",
        "-25"
      ],
      "answer": 0,
      "hint": "sqrt(A^2) = |A| => |-5| = 5.",
      "explanation": "Ta có $\\sqrt{(-5)^2} = |-5| = 5$."
    },
    {
      "question": "Rút gọn biểu thức P = căn((sqrt(3) - 2)^2) ta được kết quả là:",
      "options": [
        "2 - sqrt(3)",
        "sqrt(3) - 2",
        "sqrt(3) + 2",
        "-2 - sqrt(3)"
      ],
      "answer": 0,
      "hint": "Vì sqrt(3) < 2 nên sqrt(3) - 2 < 0 => |sqrt(3) - 2| = -(sqrt(3) - 2) = 2 - sqrt(3).",
      "explanation": "Ta có $P = |\\sqrt{3} - 2|$. Do $\\sqrt{3} < \\sqrt{4} = 2 \\implies \\sqrt{3} - 2 < 0$. Do đó $P = 2 - \\sqrt{3}$."
    },
    {
      "question": "So sánh 5 và căn(26):",
      "options": [
        "5 < căn(26)",
        "5 > căn(26)",
        "5 = căn(26)",
        "Không thể so sánh"
      ],
      "answer": 0,
      "hint": "5 = sqrt(25) < sqrt(26).",
      "explanation": "Vì $5 = \\sqrt{25}$ và $25 < 26 \\implies \\sqrt{25} < \\sqrt{26} \\implies 5 < \\sqrt{26}$."
    },
    {
      "question": "Tìm x không âm biết căn(x) < 3:",
      "options": [
        "0 <= x < 9",
        "x < 9",
        "x < 3",
        "0 <= x < 3"
      ],
      "answer": 0,
      "hint": "Điều kiện x >= 0. Căn(x) < 3 <=> 0 <= x < 3^2 = 9.",
      "explanation": "Với $x \\ge 0$, $\\sqrt{x} < 3 \\iff \\sqrt{x} < \\sqrt{9} \\iff 0 \\le x < 9$."
    },
    {
      "question": "Căn thức căn(1 / (5 - x)) có nghĩa khi:",
      "options": [
        "x < 5",
        "x <= 5",
        "x > 5",
        "x khác 5"
      ],
      "answer": 0,
      "hint": "1/(5 - x) >= 0 và mẫu khác 0 => 5 - x > 0 => x < 5.",
      "explanation": "Phân thức có tử dương $1 > 0$ nên phân thức $> 0 \\iff 5 - x > 0 \\iff x < 5$."
    },
    {
      "question": "Giá trị của biểu thức căn(9 + 4*căn(5)) bằng:",
      "options": [
        "2 + căn(5)",
        "căn(5) - 2",
        "3 + 2*căn(5)",
        "5"
      ],
      "answer": 0,
      "hint": "9 + 4*sqrt(5) = 4 + 4*sqrt(5) + 5 = (2 + sqrt(5))^2.",
      "explanation": "Ta có $9 + 4\\sqrt{5} = 2^2 + 2 \\cdot 2 \\cdot \\sqrt{5} + (\\sqrt{5})^2 = (2 + \\sqrt{5})^2$. Khi đó $\\sqrt{(2 + \\sqrt{5})^2} = |2 + \\sqrt{5}| = 2 + \\sqrt{5}$."
    },
    {
      "question": "Số nghiệm của phương trình căn(x^2 - 4x + 4) = 5 là:",
      "options": [
        "2 nghiệm",
        "1 nghiệm",
        "0 nghiệm",
        "Vô số nghiệm"
      ],
      "answer": 0,
      "hint": "sqrt((x - 2)^2) = 5 <=> |x - 2| = 5 <=> x - 2 = 5 hoặc x - 2 = -5.",
      "explanation": "Phương trình tương đương $|x - 2| = 5 \\iff x - 2 = 5$ hoặc $x - 2 = -5 \\iff x = 7$ hoặc $x = -3$. Phương trình có đúng 2 nghiệm."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Tìm điều kiện xác định của các căn thức sau
a) $\sqrt{2x + 8}$.
b) $\sqrt{12 - 4x}$.
c) $\sqrt{\frac{5}{2x - 6}}$.
d) $\sqrt{x^2 - 4x + 5}$.

### Bài 2: Rút gọn các biểu thức sau
a) $A = \sqrt{(3 - 2\sqrt{2})^2} - \sqrt{2}$.
b) $B = \sqrt{11 - 6\sqrt{2}} + \sqrt{11 + 6\sqrt{2}}$.
c) $C = \sqrt{x^2 + 8x + 16} - 3x$ với $x \ge -4$.
d) $D = \frac{\sqrt{x^2 - 10x + 25}}{x - 5}$ với $x < 5$.

### Bài 3: Giải các phương trình
a) $\sqrt{3x - 5} = 4$.
b) $\sqrt{9(x - 1)^2} = 12$.
c) $\sqrt{x^2 - 6x + 9} = x - 3$.

### Bài 4 (Thử thách thực tế):
Một khung tranh bằng gỗ hình vuông có diện tích $S = 0,72\text{ m}^2$. Người ta muốn viền một sợi dây ruy băng vàng xung quanh $4$ cạnh của khung tranh đó. Hỏi người thợ cần chuẩn bị sợi dây ruy băng có chiều dài tối thiểu bao nhiêu mét (làm tròn đến hàng phần mười)?
