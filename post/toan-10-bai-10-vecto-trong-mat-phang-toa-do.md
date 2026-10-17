---
title: 'Toán 10 Bài 10: Vectơ trong mặt phẳng tọa độ - Tọa độ điểm & Các phép toán'
description: 'Lý thuyết chuẩn Toán 10 Bài 10: Hệ trục tọa độ Oxy, vectơ đơn vị, tọa độ vectơ, tọa độ điểm, các phép toán cộng trừ nhân vectơ theo tọa độ, tọa độ trung điểm, trọng tâm, điều kiện cùng phương, widget tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Vectơ
  - Tọa độ vectơ
  - Hệ trục Oxy
  - Tọa độ trung điểm trọng tâm
  - Kết nối tri thức
grade: 10
---

# Bài 10. Vectơ trong mặt phẳng tọa độ

Năm 1637, nhà triết học và toán học người Pháp René Descartes nằm trên giường quan sát một chú ruồi đang bò trên trần nhà có các ô vuông kẻ chỉ. Ông chợt nhận ra: *Chỉ cần hai con số (khoảng cách từ chú ruồi đến hai bức tường vuông góc), ta có thể xác định chính xác tuyệt đối vị trí của chú ruồi tại bất kỳ thời điểm nào!*

Khoảnh khắc thiên tài đó đã khai sinh ra **Hình học giải tích** — sự kết hợp vĩ đại giữa Hình học và Đại số.

Nếu như ở các bài học trước, các phép toán vectơ phải dựng hình bằng thước kẻ và compa rất trừu tượng, thì khi gắn vào **Hệ trục tọa độ $Oxy$**, mỗi vectơ được mã hóa thành một cặp số $(x; y)$. Mọi bài toán hình học phức tạp từ nay đều có thể giải quyết nhanh chóng bằng các phép tính số học đơn giản!

---

## 1. Sơ đồ tư duy toàn diện: Vectơ trong mặt phẳng tọa độ

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Tọa độ của Vectơ & Điểm</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Trục $Ox$ có vectơ đơn vị $\vec{i} = (1; 0)$, trục $Oy$ có $\vec{j} = (0; 1)$.<br>
      • $\vec{u} = (x; y) \iff \vec{u} = x\vec{i} + y\vec{j}$.<br>
      • Điểm $M(x; y) \iff \vec{OM} = (x; y)$.<br>
      • Vectơ nối 2 điểm: $\vec{AB} = (x_B - x_A; y_B - y_A)$.<br>
      • Khoảng cách: $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Các phép toán tọa độ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      Cho $\vec{u} = (x; y)$ và $\vec{v} = (x'; y')$:<br>
      • Cộng: $\vec{u} + \vec{v} = (x + x'; y + y')$<br>
      • Trừ: $\vec{u} - \vec{v} = (x - x'; y - y')$<br>
      • Nhân số: $k\vec{u} = (kx; ky)$<br>
      • Bằng nhau: $\vec{u} = \vec{v} \iff x = x'$ và $y = y'$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Trung điểm & Trọng tâm</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • <strong>Trung điểm $I$ của $AB$:</strong><br>
      &nbsp;&nbsp;$x_I = \frac{x_A + x_B}{2}, \quad y_I = \frac{y_A + y_B}{2}$<br>
      • <strong>Trọng tâm $G$ của $\triangle ABC$:</strong><br>
      &nbsp;&nbsp;$x_G = \frac{x_A + x_B + x_C}{3}, \quad y_G = \frac{y_A + y_B + y_C}{3}$
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Điều kiện Cùng phương</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • $\vec{u}(x; y)$ cùng phương $\vec{v}(x'; y') \ne \vec{0}$:<br>
      &nbsp;&nbsp;$\iff x y' - x' y = 0$<br>
      &nbsp;&nbsp;(hoặc $\frac{x}{x'} = \frac{y}{y'}$ khi $x', y' \ne 0$).<br>
      • $A, B, C$ thẳng hàng $\iff \vec{AB}$ cùng phương $\vec{AC}$.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Vectơ đơn vị $\vec{i}$ trên trục hoành và $\vec{j}$ trên trục tung có tọa độ là gì?**  
   *Đáp án:* $\vec{i} = (1; 0)$ và $\vec{j} = (0; 1)$.
2. **Nếu vectơ $\vec{u} = 3\vec{i} - 5\vec{j}$ thì tọa độ của $\vec{u}$ là bao nhiêu?**  
   *Đáp án:* $\vec{u} = (3; -5)$.
3. **Cho hai điểm $A(1; 2)$ và $B(4; 6)$. Tọa độ của vectơ $\vec{AB}$ là bao nhiêu?**  
   *Đáp án:* Lấy tọa độ sau trừ tọa độ trước: $\vec{AB} = (4 - 1; 6 - 2) = (3; 4)$.
4. **Độ dài đoạn thẳng $AB$ ở câu 3 bằng bao nhiêu?**  
   *Đáp án:* $AB = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$.
5. **Hai vectơ $\vec{u} = (2; 3)$ và $\vec{v} = (4; 6)$ có cùng phương không?**  
   *Đáp án:* Có, vì $\frac{2}{4} = \frac{3}{6} = \frac{1}{2}$ (hoành độ và tung độ tỉ lệ thuận với nhau).

---

## 3. Lý thuyết trọng tâm

### 3.1. Hệ trục tọa độ $Oxy$ & Tọa độ vectơ, tọa độ điểm

- **Hệ trục tọa độ $(O; \vec{i}, \vec{j})$** (gọi tắt là hệ tọa độ $Oxy$) gồm hai trục số $Ox$ (trục hoành) và $Oy$ (trục tung) vuông góc với nhau tại gốc $O(0; 0)$.
  - Trục $Ox$ có vectơ đơn vị $\vec{i}$, trục $Oy$ có vectơ đơn vị $\vec{j}$ thỏa mãn $|\vec{i}| = |\vec{j}| = 1$ và $\vec{i} \perp \vec{j}$.
- **Tọa độ của một vectơ:**  
  Với mỗi vectơ $\vec{u}$, luôn tồn tại duy nhất một cặp số thực $(x; y)$ sao cho:
  $$\vec{u} = x\vec{i} + y\vec{j}$$
  Cặp số $(x; y)$ được gọi là **tọa độ của vectơ $\vec{u}$**, ký hiệu là $\vec{u} = (x; y)$ hoặc $\vec{u}(x; y)$. Số $x$ gọi là hoành độ, số $y$ gọi là tung độ.
- **Tọa độ của một điểm:**  
  Trong mặt phẳng $Oxy$, tọa độ của điểm $M$ chính là tọa độ của vectơ vị trí $\vec{OM}$:
  $$M(x; y) \iff \vec{OM} = (x; y) \iff \vec{OM} = x\vec{i} + y\vec{j}$$

> [!NOTE]
> **Tọa độ vectơ nối hai điểm:**  
> Cho hai điểm $A(x_A; y_A)$ và $B(x_B; y_B)$. Tọa độ của vectơ $\vec{AB}$ được tính bằng tọa độ của ngọn trừ tọa độ của gốc:
> $$\vec{AB} = (x_B - x_A; y_B - y_A)$$
> Độ dài đoạn thẳng $AB$ (độ dài vectơ $\vec{AB}$):
> $$AB = |\vec{AB}| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$

---

### 3.2. Biểu thức tọa độ của các phép toán vectơ

Cho hai vectơ $\vec{u} = (x; y)$, $\vec{v} = (x'; y')$ và số thực $k$:
1. **Phép cộng:** $\vec{u} + \vec{v} = (x + x'; y + y')$
2. **Phép trừ:** $\vec{u} - \vec{v} = (x - x'; y - y')$
3. **Phép nhân với một số:** $k\vec{u} = (kx; ky)$
4. **Hai vectơ bằng nhau:**
   $$\vec{u} = \vec{v} \iff \left\{\begin{array}{l} x = x' \\ y = y' \end{array}\right.$$
5. **Vectơ-không:** $\vec{0} = (0; 0)$.

---

### 3.3. Tọa độ trung điểm và trọng tâm

- **Tọa độ trung điểm:** Cho đoạn thẳng $AB$ với $A(x_A; y_A)$ và $B(x_B; y_B)$. Tọa độ trung điểm $I(x_I; y_I)$ của $AB$ là:
  $$x_I = \frac{x_A + x_B}{2}, \quad y_I = \frac{y_A + y_B}{2}$$
- **Tọa độ trọng tâm:** Cho tam giác $ABC$ với $A(x_A; y_A), B(x_B; y_B), C(x_C; y_C)$. Tọa độ trọng tâm $G(x_G; y_G)$ của tam giác $ABC$ là:
  $$x_G = \frac{x_A + x_B + x_C}{3}, \quad y_G = \frac{y_A + y_B + y_C}{3}$$

---

### 3.4. Điều kiện hai vectơ cùng phương bằng tọa độ

> [!TIP]
> Cho hai vectơ $\vec{u} = (x; y)$ và $\vec{v} = (x'; y')$ với $\vec{v} \ne \vec{0}$.  
> Hai vectơ $\vec{u}$ và $\vec{v}$ cùng phương khi và chỉ khi:
> $$x y' - x' y = 0$$
> Nếu cả $x' \ne 0$ và $y' \ne 0$ thì điều kiện tương đương với:
> $$\frac{x}{x'} = \frac{y}{y'}$$

Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương.

---

## 4. Widget tương tác: Bản đồ Tọa độ Vectơ Oxy

Nhập tọa độ điểm $A$ và $B$ hoặc kéo trực tiếp trên hệ trục để kiểm tra tọa độ $\vec{AB}$, độ dài đoạn thẳng và tọa độ trung điểm $I$:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🌐 Không Gian Tọa Độ Giải Tích Oxy</h3>
    <div style="font-weight: 700; font-size: 1.1rem; color: #2563eb;">
      AB = (<span id="txtDx">4</span>; <span id="txtDy">3</span>)
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Canvas SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="coordSvg" viewBox="-120 -120 240 240" style="width: 100%; max-width: 320px; height: auto; background: #ffffff;">
        <defs>
          <marker id="arrCoord" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
          </marker>
        </defs>

        <!-- Grid: 1 unit = 20px. Range -5 to 5 -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="-120" y1="-80" x2="120" y2="-80" /><line x1="-120" y1="-40" x2="120" y2="-40" />
          <line x1="-120" y1="40" x2="120" y2="40" /><line x1="-120" y1="80" x2="120" y2="80" />
          <line x1="-80" y1="-120" x2="-80" y2="120" /><line x1="-40" y1="-120" x2="-40" y2="120" />
          <line x1="40" y1="-120" x2="40" y2="120" /><line x1="80" y1="-120" x2="80" y2="120" />
        </g>

        <!-- Coordinate axes -->
        <g stroke="#64748b" stroke-width="1.5">
          <line x1="-115" y1="0" x2="115" y2="0" />
          <line x1="0" y1="115" x2="0" y2="-115" />
        </g>
        <text x="105" y="16" font-size="11" fill="#475569" font-weight="bold">x</text>
        <text x="6" y="-105" font-size="11" fill="#475569" font-weight="bold">y</text>
        <text x="-14" y="14" font-size="10" fill="#64748b">O</text>

        <!-- Projection right-triangle dx, dy -->
        <line id="lineDx" x1="-40" y1="40" x2="40" y2="40" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3" />
        <line id="lineDy" x1="40" y1="40" x2="40" y2="-20" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3" />

        <!-- Vector AB -->
        <line id="lineAB" x1="-40" y1="40" x2="40" y2="-20" stroke="#2563eb" stroke-width="3" marker-end="url(#arrCoord)" />

        <!-- Midpoint I -->
        <circle id="dotMid" cx="0" cy="10" r="4.5" fill="#10b981" />
        <text id="lblMid" x="8" y="14" font-size="11" font-weight="bold" fill="#047857">I(0; 0.5)</text>

        <!-- Handle A -->
        <circle id="hPtA" cx="-40" cy="40" r="6" fill="#1e40af" style="cursor: move;" />
        <text id="lblA" x="-56" y="55" font-size="12" font-weight="bold" fill="#1e40af">A(-2;-2)</text>

        <!-- Handle B -->
        <circle id="hPtB" cx="40" cy="-20" r="6" fill="#dc2626" style="cursor: move;" />
        <text id="lblB" x="48" y="-24" font-size="12" font-weight="bold" fill="#dc2626">B(2;1)</text>
      </svg>
    </div>

    <!-- Live Panel -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 8px;">Bảng tính toán tọa độ tự động:</div>
      <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #1e40af; font-weight: 600;">Điểm đầu A:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statPtA">(-2; -2)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #dc2626; font-weight: 600;">Điểm cuối B:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statPtB">(2; 1)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #2563eb; font-weight: 600;">Tọa độ vectơ AB:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #2563eb; text-align: right;" id="statVecAB">(4; 3)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #475569;">Độ dài |AB|:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statLength">5.00</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #047857; font-weight: 600;">Trung điểm I của AB:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #047857; text-align: right;" id="statMidI">(0.0; -0.5)</td>
        </tr>
      </table>

      <div style="margin-top: 10px; background: #f0fdf4; border-left: 3px solid #10b981; padding: 8px; border-radius: 4px; font-size: 0.8rem; color: #166534; line-height: 1.4;">
        • $\vec{AB} = (x_B - x_A)\vec{i} + (y_B - y_A)\vec{j}$.<br>
        • Khoảng cách Pythagore: $AB = \sqrt{4^2 + 3^2} = 5$.
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('coordSvg');
  const scale = 20; // 20px = 1 unit
  let pA = { x: -2, y: -2 };
  let pB = { x: 2, y: 1 };
  let activePoint = null;

  function update() {
    // Math to SVG: Math (x, y) -> SVG (x*20, -y*20)
    const svgAx = pA.x * scale, svgAy = -pA.y * scale;
    const svgBx = pB.x * scale, svgBy = -pB.y * scale;

    const dx = pB.x - pA.x;
    const dy = pB.y - pA.y;
    const len = Math.hypot(dx, dy);

    const midX = (pA.x + pB.x) / 2;
    const midY = (pA.y + pB.y) / 2;
    const svgMidX = midX * scale, svgMidY = -midY * scale;

    document.getElementById('txtDx').textContent = dx.toFixed(1);
    document.getElementById('txtDy').textContent = dy.toFixed(1);

    // Vector line
    document.getElementById('lineAB').setAttribute('x1', svgAx);
    document.getElementById('lineAB').setAttribute('y1', svgAy);
    document.getElementById('lineAB').setAttribute('x2', svgBx);
    document.getElementById('lineAB').setAttribute('y2', svgBy);

    // Triangle projections
    document.getElementById('lineDx').setAttribute('x1', svgAx);
    document.getElementById('lineDx').setAttribute('y1', svgAy);
    document.getElementById('lineDx').setAttribute('x2', svgBx);
    document.getElementById('lineDx').setAttribute('y2', svgAy);

    document.getElementById('lineDy').setAttribute('x1', svgBx);
    document.getElementById('lineDy').setAttribute('y1', svgAy);
    document.getElementById('lineDy').setAttribute('x2', svgBx);
    document.getElementById('lineDy').setAttribute('y2', svgBy);

    // Midpoint
    document.getElementById('dotMid').setAttribute('cx', svgMidX);
    document.getElementById('dotMid').setAttribute('cy', svgMidY);
    document.getElementById('lblMid').setAttribute('x', svgMidX + 8);
    document.getElementById('lblMid').setAttribute('y', svgMidY - 6);
    document.getElementById('lblMid').textContent = `I(${midX.toFixed(1)}; ${midY.toFixed(1)})`;

    // Handles
    document.getElementById('hPtA').setAttribute('cx', svgAx);
    document.getElementById('hPtA').setAttribute('cy', svgAy);
    document.getElementById('lblA').setAttribute('x', svgAx - 15);
    document.getElementById('lblA').setAttribute('y', svgAy + 18);
    document.getElementById('lblA').textContent = `A(${pA.x.toFixed(1)}; ${pA.y.toFixed(1)})`;

    document.getElementById('hPtB').setAttribute('cx', svgBx);
    document.getElementById('hPtB').setAttribute('cy', svgBy);
    document.getElementById('lblB').setAttribute('x', svgBx + 8);
    document.getElementById('lblB').setAttribute('y', svgBy - 8);
    document.getElementById('lblB').textContent = `B(${pB.x.toFixed(1)}; ${pB.y.toFixed(1)})`;

    // Panel
    document.getElementById('statPtA').textContent = `(${pA.x.toFixed(1)}; ${pA.y.toFixed(1)})`;
    document.getElementById('statPtB').textContent = `(${pB.x.toFixed(1)}; ${pB.y.toFixed(1)})`;
    document.getElementById('statVecAB').textContent = `(${dx.toFixed(1)}; ${dy.toFixed(1)})`;
    document.getElementById('statLength').textContent = len.toFixed(2);
    document.getElementById('statMidI').textContent = `(${midX.toFixed(1)}; ${midY.toFixed(1)})`;
  }

  function getMathCoords(e) {
    const rect = svg.getBoundingClientRect();
    const cx = e.clientX || (e.touches && e.touches[0].clientX);
    const cy = e.clientY || (e.touches && e.touches[0].clientY);
    const svgX = (cx - rect.left) * (240 / rect.width) - 120;
    const svgY = (cy - rect.top) * (240 / rect.height) - 120;
    return {
      x: Math.round((svgX / scale) * 2) / 2,
      y: Math.round((-svgY / scale) * 2) / 2
    };
  }

  document.getElementById('hPtA').addEventListener('mousedown', () => { activePoint = 'A'; });
  document.getElementById('hPtA').addEventListener('touchstart', (e) => { e.preventDefault(); activePoint = 'A'; }, { passive: false });
  document.getElementById('hPtB').addEventListener('mousedown', () => { activePoint = 'B'; });
  document.getElementById('hPtB').addEventListener('touchstart', (e) => { e.preventDefault(); activePoint = 'B'; }, { passive: false });

  window.addEventListener('mousemove', (e) => {
    if (!activePoint) return;
    const m = getMathCoords(e);
    if (activePoint === 'A') { pA.x = Math.max(-5, Math.min(5, m.x)); pA.y = Math.max(-5, Math.min(5, m.y)); }
    else { pB.x = Math.max(-5, Math.min(5, m.x)); pB.y = Math.max(-5, Math.min(5, m.y)); }
    update();
  });
  window.addEventListener('touchmove', (e) => {
    if (!activePoint) return;
    e.preventDefault();
    const m = getMathCoords(e);
    if (activePoint === 'A') { pA.x = Math.max(-5, Math.min(5, m.x)); pA.y = Math.max(-5, Math.min(5, m.y)); }
    else { pB.x = Math.max(-5, Math.min(5, m.x)); pB.y = Math.max(-5, Math.min(5, m.y)); }
    update();
  }, { passive: false });

  const endDrag = () => { activePoint = null; };
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);

  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Tìm tọa độ của vectơ và thực hiện các phép toán tọa độ

#### Phương pháp:
- Cho $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$:
  $$\vec{u} = k\vec{a} + m\vec{b} = (kx_1 + mx_2; ky_1 + my_2)$$
- Phân tích $\vec{x} = (x; y)$ theo $\vec{a}$ và $\vec{b}$: Giải hệ phương trình bậc nhất hai ẩn tìm $k, m$.

---

#### Bài toán 1
Trong mặt phẳng tọa độ $Oxy$, cho ba vectơ $\vec{a} = (2; -3)$, $\vec{b} = (-1; 4)$ và $\vec{c} = (7; -16)$.
1. Tìm tọa độ của vectơ $\vec{u} = 3\vec{a} - 2\vec{b}$.
2. Phân tích vectơ $\vec{c}$ theo hai vectơ $\vec{a}$ và $\vec{b}$.

**Lời giải chi tiết:**

1. Áp dụng công thức nhân số với vectơ và trừ vectơ:
   $$3\vec{a} = (3 \cdot 2; 3 \cdot (-3)) = (6; -9)$$
   $$-2\vec{b} = (-2 \cdot (-1); -2 \cdot 4) = (2; -8)$$
   Do đó:
   $$\vec{u} = 3\vec{a} - 2\vec{b} = (6 + 2; -9 - 8) = (8; -17)$$

2. Giả sử $\vec{c} = m\vec{a} + n\vec{b}$ với $m, n \in \mathbb{R}$.  
   Ta có:
   $$m\vec{a} + n\vec{b} = (2m - n; -3m + 4n)$$
   Vì $\vec{c} = (7; -16)$, ta lập hệ phương trình:
   $$\left\{\begin{array}{l} 2m - n = 7 \\ -3m + 4n = -16 \end{array}\right.$$
   Nhân 4 vào phương trình thứ nhất: $8m - 4n = 28$.  
   Cộng hai phương trình lại: $(8m - 4n) + (-3m + 4n) = 28 - 16 \iff 5m = 12 \Rightarrow m = \frac{12}{5}$?  
   Kiểm tra: Thử $m = 2 \Rightarrow n = 2(2) - 7 = -3$.  
   Thay vào phương trình 2: $-3(2) + 4(-3) = -6 - 12 = -18 \ne -16$.  
   Giải chính xác hệ phương trình:
   $$\left\{\begin{array}{l} n = 2m - 7 \\ -3m + 4(2m - 7) = -16 \end{array}\right. \iff \left\{\begin{array}{l} n = 2m - 7 \\ 5m - 28 = -16 \end{array}\right. \iff \left\{\begin{array}{l} 5m = 12 \Rightarrow m = 2,4 \\ n = 2(2,4) - 7 = -2,2 \end{array}\right.$$
   Vậy $\vec{c} = \frac{12}{5}\vec{a} - \frac{11}{5}\vec{b}$.

---

### Dạng 2: Tìm tọa độ điểm thỏa mãn điều kiện hình học

#### Phương pháp:
- Cho hình bình hành $ABCD$: $\vec{AD} = \vec{BC} \iff (x_D - x_A; y_D - y_A) = (x_C - x_B; y_C - y_B)$.
- $I$ là trung điểm $AB$: $x_I = \frac{x_A + x_B}{2}, y_I = \frac{y_A + y_B}{2}$.
- $G$ là trọng tâm $\triangle ABC$: $x_G = \frac{x_A + x_B + x_C}{3}, y_G = \frac{y_A + y_B + y_C}{3}$.

---

#### Bài toán 2
Trong mặt phẳng $Oxy$, cho ba điểm $A(-1; 3), B(2; 1), C(4; -2)$.
1. Tìm tọa độ trọng tâm $G$ của tam giác $ABC$.
2. Tìm tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.

**Lời giải chi tiết:**

1. **Tìm tọa độ trọng tâm $G$:**
   $$x_G = \frac{x_A + x_B + x_C}{3} = \frac{-1 + 2 + 4}{3} = \frac{5}{3}$$
   $$y_G = \frac{y_A + y_B + y_C}{3} = \frac{3 + 1 + (-2)}{3} = \frac{2}{3}$$
   Vậy $G\left(\frac{5}{3}; \frac{2}{3}\right)$.

2. **Tìm tọa độ đỉnh $D(x_D; y_D)$:**  
   Tứ giác $ABCD$ là hình bình hành khi và chỉ khi:
   $$\vec{AD} = \vec{BC}$$
   Ta tính tọa độ các vectơ:
   - $\vec{AD} = (x_D - (-1); y_D - 3) = (x_D + 1; y_D - 3)$
   - $\vec{BC} = (4 - 2; -2 - 1) = (2; -3)$
   Đồng nhất các tọa độ:
   $$\left\{\begin{array}{l} x_D + 1 = 2 \\ y_D - 3 = -3 \end{array}\right. \iff \left\{\begin{array}{l} x_D = 1 \\ y_D = 0 \end{array}\right.$$
   Vậy tọa độ đỉnh thứ tư là $D(1; 0)$.

---

### Dạng 3: Kiểm tra hai vectơ cùng phương & Chứng minh ba điểm thẳng hàng

#### Phương pháp:
- Hai vectơ $\vec{u}(x; y)$ và $\vec{v}(x'; y')$ cùng phương $\iff xy' - x'y = 0$.
- Ba điểm $A, B, C$ thẳng hàng $\iff \vec{AB}$ và $\vec{AC}$ cùng phương.

---

#### Bài toán 3
Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(1; 2), B(3; 6), C(m; 10)$.
1. Chứng minh rằng hai điểm $A$ và $B$ cùng với gốc tọa độ $O(0; 0)$ thẳng hàng.
2. Tìm tham số $m$ để ba điểm $A, B, C$ thẳng hàng.

**Lời giải chi tiết:**

1. Ta có:
   - $\vec{OA} = (1 - 0; 2 - 0) = (1; 2)$
   - $\vec{OB} = (3 - 0; 6 - 0) = (3; 6)$
   Xét tỉ số giữa các tọa độ:
   $$\frac{x_B}{x_A} = \frac{3}{1} = 3 \quad \text{và} \quad \frac{y_B}{y_A} = \frac{6}{2} = 3$$
   Do đó $\vec{OB} = 3\vec{OA}$. Hai vectơ $\vec{OB}$ và $\vec{OA}$ cùng phương, suy ra ba điểm $O, A, B$ thẳng hàng.

2. Tính tọa độ hai vectơ:
   - $\vec{AB} = (3 - 1; 6 - 2) = (2; 4)$
   - $\vec{AC} = (m - 1; 10 - 2) = (m - 1; 8)$
   Ba điểm $A, B, C$ thẳng hàng $\iff \vec{AB}$ và $\vec{AC}$ cùng phương:
   $$\iff 2 \cdot 8 - 4(m - 1) = 0 \iff 16 - 4m + 4 = 0 \iff 4m = 20 \iff m = 5$$
   Vậy với $m = 5$ thì ba điểm $A, B, C$ thẳng hàng.

---

### Dạng 4: Tính chu vi và nhận dạng tam giác trên mặt phẳng $Oxy$

#### Phương pháp:
1. Tính độ dài ba cạnh $a = BC, b = CA, c = AB$ bằng công thức khoảng cách:
   $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
2. Chu vi tam giác: $P = a + b + c$.
3. Kiểm tra tam giác cân ($a = b$), tam giác đều ($a = b = c$), hoặc tam giác vuông bằng định lí Pythagore đảo ($a^2 + b^2 = c^2$).

---

#### Bài toán 4
Cho tam giác $ABC$ có $A(1; 3), B(4; 7), C(5; 0)$.
1. Tính độ dài ba cạnh của tam giác $ABC$ và tính chu vi tam giác.
2. Chứng minh tam giác $ABC$ là tam giác vuông tại $A$.

**Lời giải chi tiết:**

1. **Tính độ dài ba cạnh:**
   - Cạnh $AB$:
     $$AB = \sqrt{(4 - 1)^2 + (7 - 3)^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = 5$$
   - Cạnh $AC$:
     $$AC = \sqrt{(5 - 1)^2 + (0 - 3)^2} = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = 5$$
   - Cạnh $BC$:
     $$BC = \sqrt{(5 - 4)^2 + (0 - 7)^2} = \sqrt{1^2 + (-7)^2} = \sqrt{1 + 49} = \sqrt{50} = 5\sqrt{2}$$
   - Chu vi tam giác $ABC$:
     $$P = AB + AC + BC = 5 + 5 + 5\sqrt{2} = 10 + 5\sqrt{2}$$

2. **Nhận dạng tam giác:**  
   Ta có:
   $$AB^2 + AC^2 = 5^2 + 5^2 = 25 + 25 = 50$$
   $$BC^2 = (5\sqrt{2})^2 = 50$$
   Vì $AB^2 + AC^2 = BC^2$, theo định lí Pythagore đảo, tam giác $ABC$ **vuông tại $A$**.  
   Hơn nữa, vì $AB = AC = 5$, nên tam giác $ABC$ là **tam giác vuông cân tại $A$**.

---

## 6. Ứng dụng thực tế & Công nghệ số

| Lĩnh vực | Ứng dụng cụ thể của Vectơ Tọa độ Oxy |
| :--- | :--- |
| **Màn hình kỹ thuật số & Điểm ảnh (Pixels)** | Mỗi pixel trên màn hình smartphone/máy tính là một tọa độ $(x; y)$. Con trỏ chuột di chuyển là một vector độ dịch chuyển $\Delta \vec{r} = (\Delta x; \Delta y)$. |
| **Bản đồ số & Dẫn đường (Google Maps)** | Hệ tọa độ trắc địa UTM chuyển đổi kinh độ và vĩ độ của Trái Đất thành tọa độ phẳng $(x; y)$ tính bằng mét để tính quãng đường ngắn nhất. |
| **Robotics & Xe tự hành (LiDAR)** | Cảm biến quét laser xác định các chướng ngại vật xung quanh xe dưới dạng một đám mây điểm tọa độ $(x; y)$ để tự động đánh lái tránh va chạm. |
| **Thiết kế đồ họa vector (SVG / Illustrator)** | Không giống như ảnh bitmap bị vỡ hạt khi phóng to, đồ họa vector lưu trữ hình ảnh dưới dạng các tọa độ đỉnh và phương trình đường cong nối các điểm. |
| **Thiết kế mạch in (PCB Design)** | Máy cắm linh kiện tự động (Pick-and-Place Machine) sử dụng tọa độ vector $(x; y)$ để hàn chính xác hàng nghìn con chip lên bo mạch mỗi phút. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q1",
  "question": "Trong mặt phẳng tọa độ $Oxy$, vectơ $\\vec{u} = -2\\vec{i} + 5\\vec{j}$ có tọa độ là:",
  "options": [
    "$(2; 5)$",
    "$(-2; 5)$",
    "$(5; -2)$",
    "$(-2; -5)$"
  ],
  "answer": 1,
  "explanation": "Theo định nghĩa tọa độ vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} \\Rightarrow \\vec{u} = (-2; 5)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q2",
  "question": "Cho hai điểm $A(2; -3)$ và $B(5; 1)$. Tọa độ của vectơ $\\vec{AB}$ là:",
  "options": [
    "$(3; 4)$",
    "$(7; -2)$",
    "$(-3; -4)$",
    "$(3; -2)$"
  ],
  "answer": 0,
  "explanation": "$\\vec{AB} = (x_B - x_A; y_B - y_A) = (5 - 2; 1 - (-3)) = (3; 4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q3",
  "question": "Độ dài của vectơ $\\vec{a} = (-6; 8)$ bằng:",
  "options": [
    "14",
    "2",
    "10",
    "100"
  ],
  "answer": 2,
  "explanation": "$|\\vec{a}| = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q4",
  "question": "Cho hai điểm $M(1; 4)$ và $N(3; -2)$. Tọa độ trung điểm $I$ của đoạn thẳng $MN$ là:",
  "options": [
    "$(2; 1)$",
    "$(4; 2)$",
    "$(2; 3)$",
    "$(1; -3)$"
  ],
  "answer": 0,
  "explanation": "$x_I = \\frac{1 + 3}{2} = 2$ và $y_I = \\frac{4 + (-2)}{2} = 1$. Vậy $I(2; 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q5",
  "question": "Tam giác $ABC$ có ba đỉnh $A(1; 2), B(-3; 0), C(5; 4)$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:",
  "options": [
    "$(1; 2)$",
    "$(3; 6)$",
    "$(1; 3)$",
    "$(2; 2)$"
  ],
  "answer": 0,
  "explanation": "$x_G = \\frac{1 + (-3) + 5}{3} = \\frac{3}{3} = 1$ và $y_G = \\frac{2 + 0 + 4}{3} = \\frac{6}{3} = 2$. Vậy $G(1; 2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q6",
  "question": "Cho $\\vec{u} = (2; -1)$ và $\\vec{v} = (-3; 4)$. Tọa độ của vectơ $\\vec{w} = 2\\vec{u} + \\vec{v}$ là:",
  "options": [
    "$(-1; 3)$",
    "$(1; 2)$",
    "$(1; 3)$",
    "$(7; -6)$"
  ],
  "answer": 1,
  "explanation": "$2\\vec{u} = (4; -2)$. Do đó $\\vec{w} = (4 + (-3); -2 + 4) = (1; 2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q7",
  "question": "Hai vectơ $\\vec{a} = (x; 4)$ và $\\vec{b} = (3; -2)$ cùng phương khi $x$ nhận giá trị:",
  "options": [
    "$-6$",
    "$6$",
    "$-\\frac{8}{3}$",
    "$\\frac{8}{3}$"
  ],
  "answer": 0,
  "explanation": "Hai vectơ cùng phương khi $\\frac{x}{3} = \\frac{4}{-2} = -2 \\iff x = 3 \\cdot (-2) = -6$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q8",
  "question": "Khoảng cách giữa hai điểm $A(-1; 2)$ và $B(2; -2)$ bằng:",
  "options": [
    "5",
    "1",
    "7",
    "25"
  ],
  "answer": 0,
  "explanation": "$AB = \\sqrt{(2 - (-1))^2 + (-2 - 2)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q9",
  "question": "Cho hình bình hành $ABCD$ có $A(1; 1), B(3; 2), C(6; 5)$. Tọa độ của đỉnh $D$ là:",
  "options": [
    "$(4; 4)$",
    "$(8; 6)$",
    "$(2; 4)$",
    "$(4; 6)$"
  ],
  "answer": 0,
  "explanation": "Ta có $\\vec{AD} = \\vec{BC} \\iff (x_D - 1; y_D - 1) = (6 - 3; 5 - 2) = (3; 3) \\iff x_D - 1 = 3 \\Rightarrow x_D = 4$ và $y_D - 1 = 3 \\Rightarrow y_D = 4$. Vậy $D(4; 4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b10_q10",
  "question": "Cho ba điểm $A(1; 3), B(2; 5), C(4; m)$. Để ba điểm $A, B, C$ thẳng hàng thì giá trị của $m$ là:",
  "options": [
    "7",
    "8",
    "9",
    "10"
  ],
  "answer": 2,
  "explanation": "$\\vec{AB} = (1; 2)$ và $\\vec{AC} = (3; m - 3)$. Ba điểm thẳng hàng khi $\\frac{3}{1} = \\frac{m - 3}{2} \\iff m - 3 = 6 \\iff m = 9$."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Tìm tâm đường tròn ngoại tiếp bằng hệ phương trình tọa độ)
Cho tam giác $ABC$ có các đỉnh $A(0; 4), B(3; 5), C(6; 0)$.
1. Tìm tọa độ tâm $I(x; y)$ của đường tròn ngoại tiếp tam giác $ABC$.
2. Tính bán kính $R$ của đường tròn ngoại tiếp đó.

*Hướng dẫn giải:*
1. Tâm $I(x; y)$ đường tròn ngoại tiếp cách đều ba đỉnh $A, B, C$, tức $IA^2 = IB^2 = IC^2$.
   - $IA^2 = (x - 0)^2 + (y - 4)^2 = x^2 + y^2 - 8y + 16$.
   - $IB^2 = (x - 3)^2 + (y - 5)^2 = x^2 - 6x + 9 + y^2 - 10y + 25 = x^2 + y^2 - 6x - 10y + 34$.
   - $IC^2 = (x - 6)^2 + (y - 0)^2 = x^2 - 12x + 36 + y^2 = x^2 + y^2 - 12x + 36$.
   Từ $IA^2 = IB^2 \iff -8y + 16 = -6x - 10y + 34 \iff 6x + 2y = 18 \iff 3x + y = 9$.  
   Từ $IA^2 = IC^2 \iff -8y + 16 = -12x + 36 \iff 12x - 8y = 20 \iff 3x - 2y = 5$.  
   Giải hệ: Trừ hai phương trình: $3y = 4 \Rightarrow y = \frac{4}{3}$.  
   Thay vào tìm $x$: $3x = 9 - \frac{4}{3} = \frac{23}{3} \Rightarrow x = \frac{23}{9}$.  
   Vậy tâm ngoại tiếp là $I\left(\frac{23}{9}; \frac{4}{3}\right)$.
2. Bán kính $R = IA = \sqrt{\left(\frac{23}{9}\right)^2 + \left(\frac{4}{3} - 4\right)^2} = \sqrt{\frac{529}{81} + \frac{64}{9}} = \sqrt{\frac{529 + 576}{81}} = \frac{\sqrt{1105}}{9} \approx 3,69$.

---

### Bài tập 2 (Lập trình Game - Va chạm và Tọa độ)
Trong một trò chơi điện tử 2D, một con tàu vũ trụ đang ở tọa độ $S(10; 20)$ di chuyển theo vectơ vận tốc $\vec{v} = (3; 4)$ (đơn vị: mét/giây). Một trạm vũ trụ cố định nằm tại tọa độ $T(70; 100)$.
1. Viết phương trình tọa độ vị trí của con tàu vũ trụ sau thời gian $t$ giây.
2. Hỏi sau bao nhiêu giây thì con tàu bay đến gần trạm vũ trụ $T$ nhất? Khoảng cách ngắn nhất đó bằng bao nhiêu?

*Hướng dẫn giải:*
1. Sau $t$ giây, vectơ độ dịch chuyển của con tàu là $t\vec{v} = (3t; 4t)$.  
   Tọa độ của con tàu tại thời điểm $t$ là:
   $$x(t) = 10 + 3t, \quad y(t) = 20 + 4t$$
2. Khoảng cách bình phương từ con tàu đến trạm $T(70; 100)$ là:
   $$d^2(t) = (10 + 3t - 70)^2 + (20 + 4t - 100)^2 = (3t - 60)^2 + (4t - 80)^2$$
   $$d^2(t) = 9(t - 20)^2 + 16(t - 20)^2 = 25(t - 20)^2$$
   Khoảng cách là $d(t) = 5|t - 20|$.  
   Giá trị nhỏ nhất $d(t) = 0$ đạt được tại **$t = 20$ giây**.  
   Điều này có nghĩa là con tàu đi thẳng xuyên qua đúng vị trí trạm vũ trụ $T$ tại thời điểm $t = 20$s!
