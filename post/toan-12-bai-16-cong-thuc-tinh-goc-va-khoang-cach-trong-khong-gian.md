---
title: 'Toán 12 Bài 16: Công thức tính góc và khoảng cách trong không gian'
description: 'Lý thuyết trọng tâm Bài 16 Toán 12 Kết nối tri thức: Góc giữa 2 đường thẳng, giữa đường thẳng và mặt phẳng, giữa 2 mặt phẳng; Khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa 2 đường thẳng chéo nhau kèm mô phỏng 3D tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Oxyz
  - Góc trong không gian
  - Khoảng cách
  - Điểm đến mặt phẳng
  - Hai đường thẳng chéo nhau
  - Kết nối tri thức
grade: 12
---

# Bài 16. Công thức tính góc và khoảng cách trong không gian

Trong hình học không gian cổ điển, việc tính góc giữa hai mặt phẳng hay khoảng cách giữa hai đường thẳng chéo nhau thường là "nỗi ám ảnh" của học sinh vì phải dựng các mặt phẳng phụ, kẻ thêm đường vuông góc và chứng minh hình học thuần túy phức tạp.

Tuy nhiên, với phương pháp toạ độ $Oxyz$, mọi bài toán góc và khoảng cách đều được quy đổi thành **các phép toán đại số thuần túy giữa các vectơ**: tích vô hướng, tích có hướng và công thức toạ độ! Bạn chỉ cần lắp số vào công thức là có ngay kết quả chính xác tuyệt đối mà không cần phải đau đầu tưởng tượng dựng hình.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC GÓC & KHOẢNG CÁCH OXYZ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Góc giữa 2 đường thẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Hai VTCP $\vec{u}_1, \vec{u}_2$:<br>
$\mathbf{\cos \varphi = \frac{|\vec{u}_1 \cdot \vec{u}_2|}{|\vec{u}_1| \cdot |\vec{u}_2|}}$.<br>
• Góc $0^\circ \le \varphi \le 90^\circ$ (có trị tuyệt đối ở tử).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Góc giữa đường và mặt</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• VTCP $\vec{u}$ và VTPT $\vec{n}$:<br>
$\mathbf{\sin \varphi = \frac{|\vec{u} \cdot \vec{n}|}{|\vec{u}| \cdot |\vec{n}|}}$.<br>
• <strong>Chú ý dùng hàm SIN</strong> (vì góc phụ với góc của $\vec{n}$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Góc giữa 2 mặt phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Hai VTPT $\vec{n}_1, \vec{n}_2$:<br>
$\mathbf{\cos \varphi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| \cdot |\vec{n}_2|}}$.<br>
• Vuông góc $\iff \vec{n}_1 \cdot \vec{n}_2 = 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Khoảng cách điểm đến mặt</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Từ $M_0(x_0; y_0; z_0)$ đến $(P): Ax+By+Cz+D=0$:<br>
$\mathbf{d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}}$.<br>
• Thay toạ độ điểm vào vế trái rồi chia độ dài VTPT.
</p>
</div>
</div>
</div>

---

## 1. Công thức tính góc trong không gian

> [!IMPORTANT]
> Góc giữa hai đường thẳng, góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng luôn là góc không tù:
> $$0^\circ \le \varphi \le 90^\circ \implies \cos \varphi \ge 0, \quad \sin \varphi \ge 0$$
> Do đó trên tử số của mọi công thức tính góc luôn có **dấu giá trị tuyệt đối**!

### 1.1. Góc giữa hai đường thẳng
Cho đường thẳng $\Delta_1$ có VTCP $\vec{u}_1 = (a_1; b_1; c_1)$ và $\Delta_2$ có VTCP $\vec{u}_2 = (a_2; b_2; c_2)$.  
Gọi $\varphi$ là góc giữa $\Delta_1$ và $\Delta_2$:
$$\cos \varphi = \frac{|\vec{u}_1 \cdot \vec{u}_2|}{|\vec{u}_1| \cdot |\vec{u}_2|} = \frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\sqrt{a_1^2 + b_1^2 + c_1^2} \cdot \sqrt{a_2^2 + b_2^2 + c_2^2}}$$

### 1.2. Góc giữa đường thẳng và mặt phẳng
Cho đường thẳng $\Delta$ có VTCP $\vec{u} = (a; b; c)$ và mặt phẳng $(\alpha)$ có VTPT $\vec{n} = (A; B; C)$.  
Gọi $\varphi$ là góc giữa đường thẳng $\Delta$ và mặt phẳng $(\alpha)$ ($0^\circ \le \varphi \le 90^\circ$):
$$\sin \varphi = \frac{|\vec{u} \cdot \vec{n}|}{|\vec{u}| \cdot |\vec{n}|} = \frac{|Aa + Bb + Cc|}{\sqrt{a^2 + b^2 + c^2} \cdot \sqrt{A^2 + B^2 + C^2}}$$

> **Mẹo ghi nhớ:** Khi hai đối tượng **cùng loại** (đường – đường, hoặc mặt – mặt), ta dùng hàm $\mathbf{\cos}$. Khi hai đối tượng **khác loại** (đường – mặt), ta dùng hàm $\mathbf{\sin}$!

### 1.3. Góc giữa hai mặt phẳng
Cho hai mặt phẳng $(\alpha_1)$ có VTPT $\vec{n}_1 = (A_1; B_1; C_1)$ và $(\alpha_2)$ có VTPT $\vec{n}_2 = (A_2; B_2; C_2)$.  
Gọi $\varphi$ là góc giữa $(\alpha_1)$ và $(\alpha_2)$:
$$\cos \varphi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| \cdot |\vec{n}_2|} = \frac{|A_1 A_2 + B_1 B_2 + C_1 C_2|}{\sqrt{A_1^2 + B_1^2 + C_1^2} \cdot \sqrt{A_2^2 + B_2^2 + C_2^2}}$$

---

## 2. Công thức tính khoảng cách

### 2.1. Khoảng cách từ một điểm đến một mặt phẳng

::: tip Khoảng cách từ điểm đến mặt phẳng
Trong không gian $Oxyz$, khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\alpha): Ax + By + Cz + D = 0$ được tính bằng:
$$d(M_0, (\alpha)) = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$$
:::

### 2.2. Khoảng cách giữa hai mặt phẳng song song

Cho hai mặt phẳng song song:
$$(\alpha): Ax + By + Cz + D_1 = 0 \quad \text{và} \quad (\beta): Ax + By + Cz + D_2 = 0$$
Khoảng cách giữa $(\alpha)$ và $(\beta)$ bằng khoảng cách từ một điểm bất kỳ $M_0 \in (\alpha)$ đến $(\beta)$:
$$d((\alpha), (\beta)) = \frac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}$$

### 2.3. Khoảng cách từ một điểm đến một đường thẳng

Khoảng cách từ điểm $M_0$ đến đường thẳng $\Delta$ đi qua điểm $A$ và có VTCP $\vec{u}$:
$$d(M_0, \Delta) = \frac{|[\vec{AM_0}, \vec{u}]|}{|\vec{u}|}$$

### 2.4. Khoảng cách giữa hai đường thẳng chéo nhau

Cho hai đường thẳng chéo nhau:
- $\Delta_1$ đi qua $M_1$ có VTCP $\vec{u}_1$.
- $\Delta_2$ đi qua $M_2$ có VTCP $\vec{u}_2$.

Khoảng cách giữa hai đường thẳng chéo nhau $\Delta_1$ và $\Delta_2$ là:
$$d(\Delta_1, \Delta_2) = \frac{|[\vec{u}_1, \vec{u}_2] \cdot \vec{M_1 M_2}|}{|[\vec{u}_1, \vec{u}_2]|}$$

---

## 3. Mô phỏng 3D tương tác: Khoảng cách từ điểm đến mặt phẳng

Dưới đây là mô phỏng điểm $M_0$ hạ đường vuông góc xuống mặt phẳng $(\alpha)$ tại hình chiếu $H$. Hãy kéo thanh trượt để thay đổi **cao độ của điểm $M_0$** và quan sát khoảng cách $d(M_0, (\alpha))$ thay đổi tương ứng:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Cao độ của điểm $M_0$: <span id="val-z0" style="color: #2563eb; font-weight: bold;">4.00</span></label><br>
      <input type="range" id="slider-z0" min="1.0" max="6.0" value="4.0" step="0.2" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Đoạn vuông góc $M_0H$:</strong> $d = $ <span id="val-dist" style="color: #dc2626; font-weight: bold;">4.00 đơn vị</span>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 350px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="dist-3d-svg" data-interactive-done="true" viewBox="0 0 700 350" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Đoạn thẳng vuông góc $M_0H$ chính là khoảng cách ngắn nhất từ điểm $M_0$ đến mọi điểm bất kì nằm trên mặt phẳng $(\alpha)$.
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('dist-3d-svg');
  const slider = document.getElementById('slider-z0');
  const valZ0 = document.getElementById('val-z0');
  const valDist = document.getElementById('val-dist');

  if (!svg || !slider) return;

  const hx = 350, hy = 230; // Toạ độ hình chiếu H trên màn hình

  function render() {
    const z = parseFloat(slider.value);
    valZ0.textContent = z.toFixed(2);
    valDist.textContent = `${z.toFixed(2)} đơn vị`;

    // Toạ độ điểm M0 dóng thẳng đứng lên trên
    const my = hy - z * 32;

    // Mặt phẳng (alpha) góc chiếu
    const p1 = { x: 160, y: 250 };
    const p2 = { x: 260, y: 170 };
    const p3 = { x: 540, y: 170 };
    const p4 = { x: 440, y: 250 };

    let html = `
      <defs>
        <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.10"/>
        </linearGradient>
      </defs>

      <!-- Mặt phẳng (alpha) -->
      <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}" fill="url(#pGrad)" stroke="#2563eb" stroke-width="2" />
      <text x="${p3.x - 40}" y="${p3.y + 25}" font-size="14" fill="#2563eb" font-weight="bold">(α)</text>

      <!-- Đoạn khoảng cách vuông góc M0H -->
      <line x1="${hx}" y1="${my}" x2="${hx}" y2="${hy}" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 3" />

      <!-- Kí hiệu góc vuông tại H -->
      <rect x="${hx - 12}" y="${hy - 12}" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5" />

      <!-- Điểm hình chiếu H -->
      <circle cx="${hx}" cy="${hy}" r="4" fill="#dc2626" />
      <text x="${hx + 10}" y="${hy + 16}" font-size="12" fill="#dc2626" font-weight="bold">H (Hình chiếu)</text>

      <!-- Điểm M0 -->
      <circle cx="${hx}" cy="${my}" r="6" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
      <text x="${hx + 12}" y="${my + 4}" font-size="13" fill="#2563eb" font-weight="bold">M₀</text>

      <!-- Nhãn khoảng cách d -->
      <text x="${hx - 35}" y="${(my + hy) / 2}" font-size="12" fill="#dc2626" font-weight="bold">d(M₀, α)</text>
    `;

    svg.innerHTML = html;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## 4. Các ví dụ áp dụng chi tiết

### Ví dụ 1: Tính góc giữa hai đường thẳng

Trong không gian $Oxyz$, tính góc giữa hai đường thẳng:
$$d_1: \frac{x - 1}{1} = \frac{y + 2}{-2} = \frac{z}{1} \quad \text{và} \quad d_2: \frac{x}{2} = \frac{y - 1}{1} = \frac{z + 3}{2}$$

#### Lời giải:
- VTCP của $d_1$ là $\vec{u}_1 = (1; -2; 1) \implies |\vec{u}_1| = \sqrt{1^2 + (-2)^2 + 1^2} = \sqrt{6}$.
- VTCP của $d_2$ là $\vec{u}_2 = (2; 1; 2) \implies |\vec{u}_2| = \sqrt{2^2 + 1^2 + 2^2} = \sqrt{9} = 3$.
- Tích vô hướng:
  $$\vec{u}_1 \cdot \vec{u}_2 = 1(2) + (-2)(1) + 1(2) = 2 - 2 + 2 = 2$$
- Áp dụng công thức:
  $$\cos(d_1, d_2) = \frac{|\vec{u}_1 \cdot \vec{u}_2|}{|\vec{u}_1| \cdot |\vec{u}_2|} = \frac{|2|}{\sqrt{6} \cdot 3} = \frac{2}{3\sqrt{6}} = \frac{\sqrt{6}}{9}$$
  Do đó góc giữa hai đường thẳng là $\varphi = \arccos\left(\frac{\sqrt{6}}{9}\right) \approx 74.2^\circ$.

---

### Ví dụ 2: Tính khoảng cách từ điểm đến mặt phẳng

Tính khoảng cách từ điểm $A(2; -1; 3)$ đến mặt phẳng $(P): 2x - 2y + z - 5 = 0$.

#### Lời giải:
Áp dụng trực tiếp công thức khoảng cách:
$$d(A, (P)) = \frac{|2(2) - 2(-1) + 1(3) - 5|}{\sqrt{2^2 + (-2)^2 + 1^2}} = \frac{|4 + 2 + 3 - 5|}{\sqrt{4 + 4 + 1}} = \frac{|4|}{\sqrt{9}} = \frac{4}{3}$$

---

### Ví dụ 3: Viết phương trình mặt cầu có tâm và tiếp xúc với mặt phẳng

Viết phương trình mặt cầu $(S)$ có tâm $I(1; 2; -1)$ và tiếp xúc với mặt phẳng $(P): 2x - y + 2z - 5 = 0$.

#### Lời giải:
Mặt cầu $(S)$ tiếp xúc với mặt phẳng $(P)$ khi và chỉ khi bán kính $R$ bằng khoảng cách từ tâm $I$ đến mặt phẳng $(P)$:
$$R = d(I, (P)) = \frac{|2(1) - 1(2) + 2(-1) - 5|}{\sqrt{2^2 + (-1)^2 + 2^2}} = \frac{|2 - 2 - 2 - 5|}{\sqrt{9}} = \frac{|-7|}{3} = \frac{7}{3}$$
Phương trình mặt cầu $(S)$ tâm $I(1; 2; -1)$ bán kính $R = \frac{7}{3}$ là:
$$(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = \left(\frac{7}{3}\right)^2 = \frac{49}{9}$$

---

## 5. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách từ điểm $M(1; 2; -3)$ đến mặt phẳng $(P): x + 2y - 2z + 2 = 0$ bằng:",
  "options": [
    "A. 3",
    "B. $\\frac{13}{3}$",
    "C. $\\frac{11}{3}$",
    "D. 1"
  ],
  "answer": "B. $\\frac{13}{3}$",
  "explanation": "$d(M, (P)) = \\frac{|1(1) + 2(2) - 2(-3) + 2|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\frac{|1 + 4 + 6 + 2|}{\\sqrt{9}} = \\frac{13}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Góc giữa hai mặt phẳng $(P): x - y + 2 = 0$ và $(Q): y + z - 1 = 0$ bằng:",
  "options": [
    "A. 30°",
    "B. 45°",
    "C. 60°",
    "D. 90°"
  ],
  "answer": "C. 60°",
  "explanation": "$\\vec{n}_P = (1; -1; 0)$, $\\vec{n}_Q = (0; 1; 1)$. $\\cos\\varphi = \\frac{|1(0) + (-1)(1) + 0(1)|}{\\sqrt{1^2 + (-1)^2 + 0} \\cdot \\sqrt{0 + 1^2 + 1^2}} = \\frac{|-1|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 \\end{cases}$ và mặt phẳng $(P): x + y + z - 1 = 0$.",
  "options": [
    "A. 0°",
    "B. 30°",
    "C. 45°",
    "D. 90°"
  ],
  "answer": "A. 0°",
  "explanation": "$\\vec{u} = (1; -1; 0)$, $\\vec{n} = (1; 1; 1)$. Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 1(1) + (-1)(1) + 0(1) = 0$. Do đó $\\sin\\varphi = 0 \\implies \\varphi = 0°$ (đường thẳng song song hoặc nằm trong mặt phẳng)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách từ gốc toạ độ $O(0; 0; 0)$ đến mặt phẳng $(P): 2x - y + 2z - 6 = 0$ là:",
  "options": [
    "A. 2",
    "B. 3",
    "C. 6",
    "D. 1"
  ],
  "answer": "A. 2",
  "explanation": "$d(O, (P)) = \\frac{|-6|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{3} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z + 1 = 0$ và $(Q): 2x - y + 2z - 5 = 0$ là:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 6",
    "D. $\\frac{4}{3}$"
  ],
  "answer": "A. 2",
  "explanation": "$d = \\frac{|1 - (-5)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{3} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Hai đường thẳng $d_1$ và $d_2$ có vectơ chỉ phương lần lượt là $\\vec{u}_1 = (1; 0; 2)$ và $\\vec{u}_2 = (-2; 3; 1)$. Góc giữa $d_1$ và $d_2$ bằng:",
  "options": [
    "A. 90°",
    "B. 60°",
    "C. 45°",
    "D. 0°"
  ],
  "answer": "A. 90°",
  "explanation": "Ta có $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(-2) + 0(3) + 2(1) = -2 + 0 + 2 = 0$. Hai VTCP vuông góc nhau nên góc giữa hai đường thẳng là 90°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Bán kính của mặt cầu tâm $I(2; -1; 1)$ tiếp xúc với mặt phẳng $(Oyz)$ là:",
  "options": [
    "A. 2",
    "B. 1",
    "C. $\\sqrt{2}$",
    "D. $\\sqrt{6}$"
  ],
  "answer": "A. 2",
  "explanation": "Mặt phẳng $(Oyz)$ có phương trình $x = 0$. Khoảng cách từ $I(2; -1; 1)$ đến $(Oyz)$ là $d = |x_I| = |2| = 2$. Do đó bán kính $R = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho điểm $A(1; 0; 0)$ và mặt phẳng $(P): x + 2y - 2z + 5 = 0$. Toạ độ hình chiếu vuông góc $H$ của $A$ lên mặt phẳng $(P)$ là:",
  "options": [
    "A. $(-1; -4; 4)$",
    "B. $(0; -2; 2)$",
    "C. $(-1; 2; 2)$",
    "D. $(1; 2; -2)$"
  ],
  "answer": "A. $(-1; -4; 4)$",
  "explanation": "Đường thẳng qua $A$ vuông góc $(P)$ có PT tham số: $x = 1 + t, y = 2t, z = -2t$. Thay vào $(P)$: $(1 + t) + 2(2t) - 2(-2t) + 5 = 0 \\iff 1 + t + 4t + 4t + 5 = 0 \\iff 9t + 6 = 0 \\iff t = -\\frac{2}{3}$. Vậy $x = 1 - 2/3 = 1/3, y = -4/3, z = 4/3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Trong các công thức tính góc sau, công thức nào sử dụng hàm $\\sin$ thay vì hàm $\\cos$?",
  "options": [
    "A. Góc giữa hai đường thẳng",
    "B. Góc giữa đường thẳng và mặt phẳng",
    "C. Góc giữa hai mặt phẳng",
    "D. Góc giữa hai vectơ"
  ],
  "answer": "B. Góc giữa đường thẳng và mặt phẳng",
  "explanation": "Khi tính góc giữa đường thẳng (có VTCP) và mặt phẳng (có VTPT), do VTPT vuông góc với mặt phẳng nên góc cần tìm phụ với góc giữa hai vectơ, dẫn đến công thức dùng hàm $\\sin$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách từ điểm $M(1; 1; 1)$ đến trục hoành $Ox$ là:",
  "options": [
    "A. 1",
    "B. $\\sqrt{2}$",
    "C. $\\sqrt{3}$",
    "D. 2"
  ],
  "answer": "B. $\\sqrt{2}$",
  "explanation": "Hình chiếu của $M(1; 1; 1)$ lên trục $Ox$ là $H(1; 0; 0)$. Khoảng cách là $MH = \\sqrt{(1 - 1)^2 + (1 - 0)^2 + (1 - 0)^2} = \\sqrt{0 + 1 + 1} = \\sqrt{2}$."
}'></div>
