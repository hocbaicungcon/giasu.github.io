---
title: 'Toán 12 Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số - Ba dạng đồ thị chuẩn mực GDPT 2018'
description: 'Lý thuyết trọng tâm Bài 4 Toán 12 Kết nối tri thức: Sơ đồ khảo sát hàm số chuẩn, chi tiết 3 dạng hàm số (bậc ba, phân thức bậc nhất/bậc nhất, phân thức bậc hai/bậc nhất), tâm đối xứng, mô phỏng đồ thị tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Khảo sát hàm số
  - Hàm bậc ba
  - Hàm phân thức
  - Bảng biến thiên
  - Tâm đối xứng
  - Kết nối tri thức
grade: 12
---

# Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số

Trong ba bài học trước, chúng ta đã lần lượt trang bị từng mảnh ghép quan trọng của giải tích:
- **Bài 1:** Tính đơn điệu (đồng biến, nghịch biến) và các điểm cực trị.
- **Bài 2:** Giá trị lớn nhất và giá trị nhỏ nhất (Max/Min).
- **Bài 3:** Các đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên.

Bây giờ là lúc chúng ta **tập hợp toàn bộ các công cụ đó** thành một quy trình hoàn chỉnh mang tên: **Khảo sát sự biến thiên và vẽ đồ thị của hàm số**.

Khảo sát hàm số là kỹ năng toàn diện nhất của người học toán, giúp chuyển hóa một công thức đại số khô khan thành một **bức tranh trực quan sống động**, từ đó giải quyết dễ dàng các bài toán thực tiễn phức tạp, biện luận nghiệm phương trình và dự báo xu hướng biến thiên.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">QUY TRÌNH 3 BƯỚC KHẢO SÁT HÀM SỐ CHUẨN MỰC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">Bước 1: Tìm Tập xác định</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tìm điều kiện để hàm số có nghĩa.<br>
• Xét tính chẵn, lẻ hoặc tính tuần hoàn (nếu có để thu hẹp miền vẽ).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">Bước 2: Khảo sát Biến thiên</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tính $y'$, giải $y' = 0$ tìm nghiệm.<br>
• Tìm cực trị, tính giới hạn tại vô cực/gián đoạn.<br>
• Tìm các đường tiệm cận (nếu có).<br>
• <strong>Lập Bảng biến thiên (BBT)</strong>.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">Bước 3: Vẽ Đồ thị</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Xác định giao điểm với $Ox$ ($y=0$) và $Oy$ ($x=0$).<br>
• Vẽ khung tiệm cận và chấm các điểm cực trị.<br>
• Vẽ các nhánh đường cong uốn lượn mượt mà theo đúng mũi tên trên BBT.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \ne 0$) có thể có tối đa bao nhiêu điểm cực trị?
2. Tâm đối xứng của đồ thị hàm số bậc ba là điểm nào?
3. Đồ thị hàm phân thức $y = \frac{ax+b}{cx+d}$ nhận điểm nào làm tâm đối xứng?
4. Đồ thị hàm số phân thức bậc hai trên bậc nhất $y = \frac{ax^2+bx+c}{px+q}$ có những loại đường tiệm cận nào?
5. Phương trình $f(x) = m$ có số nghiệm thực bằng số lượng gì trên mặt phẳng tọa độ?

> [!TIP]
> **Đáp án nhanh:**
> 1. Tối đa 2 điểm cực trị (khi phương trình đạo hàm bậc hai $y' = 0$ có 2 nghiệm phân biệt).
> 2. Là điểm uốn $I$ (nghiệm của phương trình đạo hàm cấp hai $y'' = 0$).
> 3. Là giao điểm $I$ của hai đường tiệm cận đứng và tiệm cận ngang: $I\left(-\frac{d}{c}; \frac{a}{c}\right)$.
> 4. Gồm 1 tiệm cận đứng và 1 tiệm cận xiên (giao nhau tại tâm đối xứng $I$).
> 5. Bằng số giao điểm giữa đồ thị $y = f(x)$ và đường thẳng nằm ngang $y = m$.

---

## I. Khảo sát Hàm số bậc ba: $y = ax^3 + bx^2 + cx + d$ ($a \ne 0$)

### 1. Đặc trưng hình học
- Đạo hàm: $y' = 3ax^2 + 2bx + c$ (tam thức bậc hai).
- Đồ thị luôn nhận điểm uốn $I\left(-\frac{b}{3a}; y\left(-\frac{b}{3a}\right)\right)$ (nghiệm của $y'' = 6ax + 2b = 0$) làm **tâm đối xứng**.
- Đồ thị không có tiệm cận.

### 2. Các dạng đồ thị tùy theo dấu của $a$ và $\Delta'_{y'}$

| Điều kiện | Hệ số $a > 0$ | Hệ số $a < 0$ |
| :--- | :--- | :--- |
| **$\Delta'_{y'} > 0$** (có 2 cực trị) | Đồ thị hình chữ **N**: Đồng biến $\to$ CĐ $\to$ Nghịch biến $\to$ CT $\to$ Đồng biến. | Đồ thị hình chữ **N ngược**: Nghịch biến $\to$ CT $\to$ Đồng biến $\to$ CĐ $\to$ Nghịch biến. |
| **$\Delta'_{y'} \le 0$** (không có cực trị) | Đồ thị luôn đi lên (đồng biến trên toàn bộ $\mathbb{R}$), uốn nhẹ qua điểm uốn $I$. | Đồ thị luôn đi xuống (nghịch biến trên toàn bộ $\mathbb{R}$), uốn nhẹ qua điểm uốn $I$. |

---

## II. Khảo sát Hàm phân thức bậc nhất trên bậc nhất: $y = \frac{ax+b}{cx+d}$ ($c \ne 0, ad - bc \ne 0$)

### 1. Đặc trưng hình học
- Tập xác định: $D = \mathbb{R} \setminus \left\{-\frac{d}{c}\right\}$.
- Đạo hàm: $y' = \frac{ad - bc}{(cx + d)^2}$.
  + Nếu $ad - bc > 0$: Hàm số đồng biến trên từng khoảng xác định.
  + Nếu $ad - bc < 0$: Hàm số nghịch biến trên từng khoảng xác định.
  + Hàm số **không có cực trị**.
- Tiệm cận:
  + Tiệm cận đứng: $x = -\frac{d}{c}$.
  + Tiệm cận ngang: $y = \frac{a}{c}$.
- Tâm đối xứng: Giao điểm hai đường tiệm cận $\mathbf{I\left(-\frac{d}{c}; \frac{a}{c}\right)}$.
- Đồ thị: Gồm hai nhánh đường cong hyperbol đối xứng nhau qua tâm $I$.

---

## III. Khảo sát Hàm phân thức bậc hai trên bậc nhất: $y = \frac{ax^2+bx+c}{px+q}$ ($a \ne 0, p \ne 0$)

Đây là dạng hàm số **mới và rất quan trọng** trong Chương trình GDPT 2018 (sách Kết nối tri thức).

### 1. Đặc trưng hình học
- Chia đa thức: $y = mx + n + \frac{r}{px + q}$ (với $r \ne 0$).
- Tiệm cận:
  + Tiệm cận đứng: $x = -\frac{q}{p}$.
  + Tiệm cận xiên: $y = mx + n$.
- Tâm đối xứng: Giao điểm $\mathbf{I}$ của tiệm cận đứng và tiệm cận xiên.
- Đồ thị gồm 2 nhánh đường cong kẹp trong 4 góc phần tư tạo bởi hai đường tiệm cận chéo nhau. Nếu có 2 cực trị thì điểm cực đại và điểm cực tiểu nằm ở hai nhánh khác nhau!

---

## Công cụ trực quan: Bộ Khám phá Hình dáng 3 Đồ thị Chuẩn mực

Hãy bấm chọn chuyển đổi giữa 3 dạng hàm số bên dưới để quan sát đồ thị trực quan, các điểm cực trị và các đường tiệm cận:

<div id="graph-explorer-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG 3 DẠNG ĐỒ THỊ CHUẨN MỰC TOÁN 12</h4>
  
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 16px;">
    <button type="button" class="btn-graph active" data-type="cubic" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: 600; cursor: pointer;">
      1. Bậc ba: y = x³ - 3x + 1
    </button>
    <button type="button" class="btn-graph" data-type="frac1" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: 600; cursor: pointer;">
      2. Phân thức 1/1: y = (x + 1)/(x - 1)
    </button>
    <button type="button" class="btn-graph" data-type="frac2" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #f59e0b; background: #fef3c7; color: #b45309; font-weight: 600; cursor: pointer;">
      3. Phân thức 2/1: y = (x² - 2x + 2)/(x - 1)
    </button>
  </div>

  <div style="display: flex; justify-content: center;">
    <svg id="canvas-graph" viewBox="0 0 500 320" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
      <!-- Trục tọa độ: Gốc (240, 160). Scale 30px per unit -->
      <line x1="20" y1="160" x2="480" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="240" y1="20" x2="240" y2="300" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="470" y="150" font-family="sans-serif" font-size="11" fill="#64748b">x</text>
      <text x="250" y="30" font-family="sans-serif" font-size="11" fill="#64748b">y</text>
      
      <!-- Curves -->
      <path id="graph-path1" d="" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <path id="graph-path2" d="" fill="none" stroke="#2563eb" stroke-width="2.5"/>

      <!-- Asymptotes (hidden by default in cubic) -->
      <line id="asymp-v" x1="0" y1="0" x2="0" y2="0" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="5,4"/>
      <line id="asymp-h" x1="0" y1="0" x2="0" y2="0" stroke="#059669" stroke-width="1.8" stroke-dasharray="5,4"/>

      <!-- Points (Extrema or Symmetry) -->
      <circle id="pt-special1" cx="0" cy="0" r="4.5" fill="#ef4444"/>
      <circle id="pt-special2" cx="0" cy="0" r="4.5" fill="#10b981"/>
    </svg>
  </div>

  <div id="graph-details" style="margin-top: 14px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left;">
    <strong>Hàm bậc ba y = x³ - 3x + 1:</strong><br>
    • Cực đại: CĐ(-1; 3). Cực tiểu: CT(1; -1).<br>
    • Tâm đối xứng: Điểm uốn I(0; 1). Đồ thị hình chữ N kinh điển!
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.btn-graph');
  const p1 = document.getElementById('graph-path1');
  const p2 = document.getElementById('graph-path2');
  const asympV = document.getElementById('asymp-v');
  const asympH = document.getElementById('asymp-h');
  const pt1 = document.getElementById('pt-special1');
  const pt2 = document.getElementById('pt-special2');
  const details = document.getElementById('graph-details');

  if (!btns.length || !p1) return;

  const originX = 240, originY = 160;
  const scale = 30;

  function draw(type) {
    if (type === 'cubic') {
      // y = x^3 - 3x + 1
      let d = '';
      for (let x = -2.6; x <= 2.6; x += 0.05) {
        const y = x*x*x - 3*x + 1;
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (d === '') d += `M ${sx} ${sy}`;
        else d += ` L ${sx} ${sy}`;
      }
      p1.setAttribute('d', d);
      p2.setAttribute('d', '');

      // Hide asymptotes
      asympV.style.display = 'none';
      asympH.style.display = 'none';

      // CĐ(-1, 3) => (240 - 30, 160 - 90) = (210, 70)
      pt1.style.display = 'block';
      pt1.setAttribute('cx', 210);
      pt1.setAttribute('cy', 70);

      // CT(1, -1) => (240 + 30, 160 + 30) = (270, 190)
      pt2.style.display = 'block';
      pt2.setAttribute('cx', 270);
      pt2.setAttribute('cy', 190);

      details.innerHTML = '<strong>Hàm bậc ba y = x³ - 3x + 1:</strong><br>• Cực đại: CĐ(-1; 3) (màu đỏ). Cực tiểu: CT(1; -1) (màu xanh).<br>• Tâm đối xứng: Điểm uốn I(0; 1). Đồ thị hình chữ N kinh điển!';
    } else if (type === 'frac1') {
      // y = (x + 1)/(x - 1) = 1 + 2/(x - 1)
      let dL = '', dR = '';
      for (let x = -6; x <= 0.85; x += 0.05) {
        const y = (x + 1)/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dL === '') dL += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dL += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      for (let x = 1.15; x <= 8; x += 0.05) {
        const y = (x + 1)/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dR === '') dR += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dR += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      p1.setAttribute('d', dL);
      p2.setAttribute('d', dR);

      // Asymptotes: TCĐ x = 1, TCN y = 1
      asympV.style.display = 'block';
      asympV.setAttribute('x1', originX + 1 * scale);
      asympV.setAttribute('y1', 20);
      asympV.setAttribute('x2', originX + 1 * scale);
      asympV.setAttribute('y2', 300);

      asympH.style.display = 'block';
      asympH.setAttribute('x1', 20);
      asympH.setAttribute('y1', originY - 1 * scale);
      asympH.setAttribute('x2', 480);
      asympH.setAttribute('y2', originY - 1 * scale);

      // Center I(1; 1)
      pt1.style.display = 'block';
      pt1.setAttribute('cx', originX + 1 * scale);
      pt1.setAttribute('cy', originY - 1 * scale);
      pt2.style.display = 'none';

      details.innerHTML = '<strong>Hàm phân thức bậc 1/1 y = (x + 1)/(x - 1):</strong><br>• Tiệm cận đứng: x = 1. Tiệm cận ngang: y = 1.<br>• Tâm đối xứng: Giao điểm I(1; 1). Đồ thị hyperbol nghịch biến trên từng khoảng!';
    } else {
      // y = (x^2 - 2x + 2)/(x - 1) = x - 1 + 1/(x - 1)
      let dL = '', dR = '';
      for (let x = -6; x <= 0.85; x += 0.05) {
        const y = x - 1 + 1/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dL === '') dL += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dL += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      for (let x = 1.15; x <= 8; x += 0.05) {
        const y = x - 1 + 1/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dR === '') dR += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dR += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      p1.setAttribute('d', dL);
      p2.setAttribute('d', dR);

      // TCĐ: x = 1. TCX: y = x - 1
      asympV.style.display = 'block';
      asympV.setAttribute('x1', originX + 1 * scale);
      asympV.setAttribute('y1', 20);
      asympV.setAttribute('x2', originX + 1 * scale);
      asympV.setAttribute('y2', 300);

      asympH.style.display = 'block';
      // line y = x - 1 passes through (1, 0)->(270, 160) and (0, -1)->(240, 190)
      asympH.setAttribute('x1', 60);
      asympH.setAttribute('y1', 370);
      asympH.setAttribute('x2', 460);
      asympH.setAttribute('y2', -30);

      // CĐ(0; -2), CT(2; 2)
      pt1.style.display = 'block';
      pt1.setAttribute('cx', originX + 0 * scale);
      pt1.setAttribute('cy', originY - (-2) * scale); // (240, 220)
      pt2.style.display = 'block';
      pt2.setAttribute('cx', originX + 2 * scale);
      pt2.setAttribute('cy', originY - 2 * scale); // (300, 100)

      details.innerHTML = '<strong>Hàm phân thức bậc 2/1 y = x - 1 + 1/(x - 1):</strong><br>• Tiệm cận đứng: x = 1. Tiệm cận xiên: y = x - 1.<br>• Cực đại CĐ(0; -2) và Cực tiểu CT(2; 2) nằm ở hai nhánh đối diện qua tâm I(1; 0)!';
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btns.forEach(b => {
        b.style.background = '';
        b.style.color = '';
      });
      this.style.background = '#2563eb';
      this.style.color = '#fff';
      draw(this.dataset.type);
    });
  });

  draw('cubic');
});
</script>

---

## IV. Bài toán Tương giao: Biện luận số nghiệm của phương trình

Một trong những ứng dụng phổ biến nhất của đồ thị hàm số là **biện luận số nghiệm của phương trình** $f(x) = m$:
- Số nghiệm của phương trình $f(x) = m$ chính là **số giao điểm** của đồ thị hàm số $y = f(x)$ và đường thẳng nằm ngang $d: y = m$ (song song hoặc trùng với trục hoành).
- Căn cứ vào các giá trị cực trị $y_{CT}$ và $y_{CĐ}$ trên bảng biến thiên:
  + Nếu $m > y_{CĐ}$ hoặc $m < y_{CT}$: Đường thẳng $y = m$ chỉ cắt đồ thị tại 1 điểm $\implies$ Phương trình có đúng 1 nghiệm.
  + Nếu $m = y_{CĐ}$ hoặc $m = y_{CT}$: Đường thẳng tiếp xúc với đồ thị tại điểm cực trị $\implies$ Phương trình có 2 nghiệm (1 nghiệm kép, 1 nghiệm đơn).
  + Nếu $y_{CT} < m < y_{CĐ}$: Đường thẳng cắt đồ thị tại 3 điểm phân biệt $\implies$ Phương trình có 3 nghiệm phân biệt.

---

## V. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Đồ thị hàm số y = ax^3 + bx^2 + cx + d (a ≠ 0) luôn nhận điểm nào sau đây làm tâm đối xứng?",
  "options": [
    "A. Điểm uốn I (nghiệm của phương trình y\u0027\u0027 = 0)",
    "B. Điểm cực đại",
    "C. Điểm cực tiểu",
    "D. Gốc tọa độ O(0; 0)"
  ],
  "answer": "A. Điểm uốn I (nghiệm của phương trình y\u0027\u0027 = 0)",
  "explanation": "Đồ thị hàm số bậc ba luôn nhận điểm uốn I(-b/(3a); y(-b/(3a))) làm tâm đối xứng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Đồ thị hàm số y = (2x + 1) / (x - 1) nhận điểm nào sau đây làm tâm đối xứng?",
  "options": [
    "A. I(1; 2)",
    "B. I(-1; 2)",
    "C. I(2; 1)",
    "D. I(1; -1)"
  ],
  "answer": "A. I(1; 2)",
  "explanation": "Tâm đối xứng của hàm nhất biến là giao điểm của tiệm cận đứng x = 1 và tiệm cận ngang y = 2, tọa độ là I(1; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đồ thị hàm số y = (x^2 - 3x + 1) / (x - 2) có tiệm cận xiên là đường thẳng:",
  "options": [
    "A. y = x - 1",
    "B. y = x + 1",
    "C. y = x - 2",
    "D. y = 2x - 1"
  ],
  "answer": "A. y = x - 1",
  "explanation": "Chia đa thức: (x^2 - 3x + 1) = (x - 1)(x - 2) - 1 => y = x - 1 - 1/(x - 2). Tiệm cận xiên là y = x - 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho hàm số y = f(x) có bảng biến thiên: Cực đại tại x = -1 (y_CĐ = 4) và Cực tiểu tại x = 2 (y_CT = -2). Số nghiệm thực của phương trình f(x) = 1 là:",
  "options": [
    "A. 3",
    "B. 1",
    "C. 2",
    "D. 0"
  ],
  "answer": "A. 3",
  "explanation": "Vì y_CT = -2 < 1 < y_CĐ = 4 nên đường thẳng y = 1 cắt đồ thị tại 3 điểm phân biệt, phương trình có 3 nghiệm thực."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số f(x) có bảng biến thiên như Câu 4. Để phương trình f(x) = m có ĐÚNG 2 NGHIỆM thực phân biệt thì m phải nhận giá trị là:",
  "options": [
    "A. m = 4 hoặc m = -2",
    "B. -2 < m < 4",
    "C. m > 4",
    "D. m < -2"
  ],
  "answer": "A. m = 4 hoặc m = -2",
  "explanation": "Đường thẳng y = m cắt đồ thị tại đúng 2 điểm khi và chỉ khi nó đi qua một điểm cực trị (tiếp xúc), tức m = y_CĐ = 4 hoặc m = y_CT = -2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đồ thị hàm số bậc ba y = ax^3 + bx^2 + cx + d có hai nhánh vươn lên trên khi x → +∞ và đi xuống dưới khi x → -∞. Dấu của hệ số a là:",
  "options": [
    "A. a > 0",
    "B. a < 0",
    "C. a = 0",
    "D. Chưa đủ dữ kiện"
  ],
  "answer": "A. a > 0",
  "explanation": "lim (x → +∞) y = +∞ khi và chỉ khi hệ số cao nhất a > 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giao điểm của đồ thị hàm số y = x^3 - 3x^2 + 2 với trục tung Oy có tọa độ là:",
  "options": [
    "A. (0; 2)",
    "B. (2; 0)",
    "C. (1; 0)",
    "D. (0; -2)"
  ],
  "answer": "A. (0; 2)",
  "explanation": "Giao với Oy thì x = 0 => y = 0^3 - 3(0)^2 + 2 = 2. Tọa độ là (0; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hàm số y = (ax + b) / (cx + d) có đồ thị đi qua A(0; -1), tiệm cận đứng x = 1, tiệm cận ngang y = 2. Công thức của hàm số là:",
  "options": [
    "A. y = (2x - 1) / (x - 1)",
    "B. y = (2x + 1) / (x - 1)",
    "C. y = (x - 1) / (x + 1)",
    "D. y = (2x - 2) / (x - 1)"
  ],
  "answer": "B. y = (2x + 1) / (x - 1)",
  "explanation": "Tiệm cận đứng x = 1 => mẫu có dạng x - 1. Tiệm cận ngang y = 2 => tử có dạng 2x + b. Đồ thị đi qua (0; -1) => b/(-1) = -1 => b = 1. Vậy y = (2x + 1)/(x - 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Điểm nào sau đây KHÔNG THUỘC đồ thị hàm số y = x^3 - 2x + 1?",
  "options": [
    "A. M(1; 1)",
    "B. N(0; 1)",
    "C. P(-1; 2)",
    "D. Q(2; 5)"
  ],
  "answer": "A. M(1; 1)",
  "explanation": "Thay x = 1 vào hàm số: y = 1^3 - 2(1) + 1 = 0 ≠ 1. Vậy M(1; 1) không thuộc đồ thị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hàm số y = (x^2 - x + 1) / (x + 1). Tâm đối xứng của đồ thị là giao điểm của:",
  "options": [
    "A. Tiệm cận đứng x = -1 và tiệm cận xiên y = x - 2",
    "B. Tiệm cận đứng x = 1 và tiệm cận ngang y = 1",
    "C. Tiệm cận đứng x = -1 và tiệm cận ngang y = 0",
    "D. Hai trục tọa độ Ox và Oy"
  ],
  "answer": "A. Tiệm cận đứng x = -1 và tiệm cận xiên y = x - 2",
  "explanation": "y = (x^2 - x + 1)/(x + 1) = x - 2 + 3/(x + 1). Tiệm cận đứng là x = -1, tiệm cận xiên là y = x - 2. Tâm đối xứng là giao điểm của hai tiệm cận này."
}'></div>
