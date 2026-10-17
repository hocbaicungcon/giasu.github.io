---
title: 'Toán 12 Bài 8: Biểu thức toạ độ của các phép toán vectơ - Tích vô hướng và Góc'
description: 'Lý thuyết trọng tâm Bài 8 Toán 12 Kết nối tri thức: Cộng trừ vectơ, nhân với một số, tích vô hướng toạ độ, độ dài vectơ, góc giữa hai vectơ, điều kiện vuông góc và cùng phương kèm máy tính vectơ tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Biểu thức toạ độ
  - Tích vô hướng
  - Góc giữa hai vectơ
  - Oxyz
  - Kết nối tri thức
grade: 12
---

# Bài 8. Biểu thức toạ độ của các phép toán vectơ

Nếu ở bài trước, chúng ta đã biết cách "đặt tên và gắn địa chỉ" cho mỗi điểm và mỗi vectơ trong không gian thông qua bộ ba toạ độ $(x; y; z)$, thì ở bài học này, chúng ta sẽ thực hiện **các phép tính đại số trên những toạ độ đó**.

Nhờ các biểu thức toạ độ, việc cộng hai vectơ, tính độ dài, xác định góc hay kiểm tra hai hướng chuyển động có vuông góc với nhau hay không không còn đòi hỏi phải vẽ hình không gian phức tạp. Tất cả được đơn giản hóa thành các phép cộng, trừ, nhân số học cực kỳ nhanh chóng và chính xác. Đây chính là nền tảng cốt lõi của lập trình đồ hoạ máy tính 3D, game engine (như Unity, Unreal) và thuật toán bay của tên lửa hành trình.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC: CÁC PHÉP TOÁN TOẠ ĐỘ VECTƠ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Cộng, Trừ & Nhân số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\vec{u} \pm \vec{v} = (x_1 \pm x_2; y_1 \pm y_2; z_1 \pm z_2)$.<br>
• $k\vec{u} = (kx_1; ky_1; kz_1)$.<br>
• Cùng phương: $\vec{u} = k\vec{v} \iff \frac{x_1}{x_2} = \frac{y_1}{y_2} = \frac{z_1}{z_2}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Tích vô hướng toạ độ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\mathbf{\vec{u} \cdot \vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2}$.<br>
• "Hoành nhân hoành + tung nhân tung + cao nhân cao".<br>
• Vuông góc: $\vec{u} \perp \vec{v} \iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Độ dài vectơ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $|\vec{u}| = \sqrt{x_1^2 + y_1^2 + z_1^2}$.<br>
• Độ dài đoạn thẳng:<br>
  $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Góc giữa hai vectơ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\cos(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|}$.<br>
• $\cos(\vec{u}, \vec{v}) = \frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\sqrt{x_1^2 + y_1^2 + z_1^2}\sqrt{x_2^2 + y_2^2 + z_2^2}}$.<br>
• $0^\circ \le (\vec{u}, \vec{v}) \le 180^\circ$.
</p>
</div>
</div>
</div>

---

## I. Biểu thức toạ độ của phép cộng, trừ vectơ và nhân vectơ với một số

Trong không gian $Oxyz$, cho hai vectơ $\vec{u} = (x_1; y_1; z_1)$, $\vec{v} = (x_2; y_2; z_2)$ và một số thực $k \in \mathbb{R}$.

### 1. Các quy tắc toạ độ cơ bản
- **Phép cộng hai vectơ:**
  $$\mathbf{\vec{u} + \vec{v} = (x_1 + x_2; \, y_1 + y_2; \, z_1 + z_2)}$$
- **Phép trừ hai vectơ:**
  $$\mathbf{\vec{u} - \vec{v} = (x_1 - x_2; \, y_1 - y_2; \, z_1 - z_2)}$$
- **Phép nhân vectơ với một số:**
  $$\mathbf{k\vec{u} = (kx_1; \, ky_1; \, kz_1)}$$

### 2. Hai vectơ bằng nhau và cùng phương
- **Hai vectơ bằng nhau:**
  $$\vec{u} = \vec{v} \iff \begin{cases} x_1 = x_2 \\ y_1 = y_2 \\ z_1 = z_2 \end{cases}$$
- **Hai vectơ cùng phương:**
  Vectơ $\vec{u}$ cùng phương với $\vec{v} \ne \vec{0}$ khi và chỉ khi tồn tại số thực $k$ sao cho $\vec{u} = k\vec{v}$, tức là:
  $$\begin{cases} x_1 = kx_2 \\ y_1 = ky_2 \\ z_1 = kz_2 \end{cases}$$
  Nếu $x_2, y_2, z_2$ đều khác $0$, điều kiện tương đương với tỷ lệ thức:
  $$\mathbf{\frac{x_1}{x_2} = \frac{y_1}{y_2} = \frac{z_1}{z_2}}$$

---

## II. Biểu thức toạ độ của tích vô hướng

### 1. Tích vô hướng của hai vectơ
Tích vô hướng của hai vectơ $\vec{u} = (x_1; y_1; z_1)$ và $\vec{v} = (x_2; y_2; z_2)$ được tính theo công thức:
$$\mathbf{\vec{u} \cdot \vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2}$$

*Chứng minh:*
Ta có $\vec{u} = x_1\vec{i} + y_1\vec{j} + z_1\vec{k}$ và $\vec{v} = x_2\vec{i} + y_2\vec{j} + z_2\vec{k}$.
Vì $\vec{i}^2 = \vec{j}^2 = \vec{k}^2 = 1$ và $\vec{i} \cdot \vec{j} = \vec{j} \cdot \vec{k} = \vec{k} \cdot \vec{i} = 0$, nhân phân phối hai đa thức ta thu được:
$$\vec{u} \cdot \vec{v} = x_1 x_2(1) + y_1 y_2(1) + z_1 z_2(1) = x_1 x_2 + y_1 y_2 + z_1 z_2$$

### 2. Độ dài của một vectơ
Độ dài của vectơ $\vec{u} = (x; y; z)$ là:
$$\mathbf{|\vec{u}| = \sqrt{\vec{u}^2} = \sqrt{x^2 + y^2 + z^2}}$$

### 3. Góc giữa hai vectơ
Góc giữa hai vectơ $\vec{u} = (x_1; y_1; z_1)$ và $\vec{v} = (x_2; y_2; z_2)$ (khác $\vec{0}$) có cosin được xác định bởi:
$$\mathbf{\cos(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\sqrt{x_1^2 + y_1^2 + z_1^2} \cdot \sqrt{x_2^2 + y_2^2 + z_2^2}}}$$

### 4. Điều kiện vuông góc của hai vectơ
Hai vectơ $\vec{u}$ và $\vec{v}$ vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng $0$:
$$\mathbf{\vec{u} \perp \vec{v} \iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0}$$

---

## Công cụ trực quan: Máy tính Vectơ Không gian 3D tương tác

Nhập hoặc chọn toạ độ của hai vectơ $\vec{u}$ và $\vec{v}$ để tính toán tự động tất cả các phép toán toạ độ: tổng $\vec{u} + \vec{v}$, hiệu $\vec{u} - \vec{v}$, độ dài $|\vec{u}|, |\vec{v}|$, tích vô hướng $\vec{u} \cdot \vec{v}$ và góc $(\vec{u}, \vec{v})$ theo thời gian thực:

<div id="vector-calc-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÁY TÍNH TOẠ ĐỘ VECTƠ KHÔNG GIAN 3D</h4>

<div style="max-width: 540px; margin: 0 auto 16px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; text-align: left;">
  <!-- Vector u -->
  <div style="background: #f0fdf4; padding: 12px 14px; border-radius: 8px; border: 1px solid #bbf7d0;">
    <div style="font-weight: bold; color: #16a34a; margin-bottom: 8px;">Vectơ u = (x₁; y₁; z₁)</div>
    <div style="display: flex; gap: 8px;">
      <div><small>x₁</small><input type="number" id="inp-u-x" value="2" style="width: 100%; padding: 4px 6px; border: 1px solid #cbd5e1; border-radius: 4px;"></div>
      <div><small>y₁</small><input type="number" id="inp-u-y" value="-1" style="width: 100%; padding: 4px 6px; border: 1px solid #cbd5e1; border-radius: 4px;"></div>
      <div><small>z₁</small><input type="number" id="inp-u-z" value="2" style="width: 100%; padding: 4px 6px; border: 1px solid #cbd5e1; border-radius: 4px;"></div>
    </div>
  </div>

  <!-- Vector v -->
  <div style="background: #faf5ff; padding: 12px 14px; border-radius: 8px; border: 1px solid #e9d5ff;">
    <div style="font-weight: bold; color: #7c3aed; margin-bottom: 8px;">Vectơ v = (x₂; y₂; z₂)</div>
    <div style="display: flex; gap: 8px;">
      <div><small>x₂</small><input type="number" id="inp-v-x" value="1" style="width: 100%; padding: 4px 6px; border: 1px solid #cbd5e1; border-radius: 4px;"></div>
      <div><small>y₂</small><input type="number" id="inp-v-y" value="2" style="width: 100%; padding: 4px 6px; border: 1px solid #cbd5e1; border-radius: 4px;"></div>
      <div><small>z₂</small><input type="number" id="inp-v-z" value="0" style="width: 100%; padding: 4px 6px; border: 1px solid #cbd5e1; border-radius: 4px;"></div>
    </div>
  </div>
</div>

<div id="calc-results" style="max-width: 540px; margin: 0 auto; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left; line-height: 1.85;">
  <div>• Tổng hai vectơ: <strong id="res-sum" style="color: #2563eb;">u + v = (3; 1; 2)</strong></div>
  <div>• Hiệu hai vectơ: <strong id="res-diff" style="color: #ea580c;">u - v = (1; -3; 2)</strong></div>
  <div>• Độ dài |u|: <span id="res-len-u">√(2² + (-1)² + 2²) = √9 = 3.00</span></div>
  <div>• Độ dài |v|: <span id="res-len-v">√(1² + 2² + 0²) = √5 ≈ 2.24</span></div>
  <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #cbd5e1;">
    • Tích vô hướng: <strong id="res-dot" style="color: #047857; font-size: 1.15em;">u · v = 0.00</strong>
  </div>
  <div>• Cosin góc: <span id="res-cos">cos(u, v) = 0.000</span></div>
  <div>• Góc giữa hai vectơ: <strong id="res-angle" style="color: #dc2626; font-size: 1.2em;">θ = 90.0° (Vuông góc)</strong></div>
</div>
</div>

<script>
const __initApp = function() {
  const ux = document.getElementById('inp-u-x');
  const uy = document.getElementById('inp-u-y');
  const uz = document.getElementById('inp-u-z');
  const vx = document.getElementById('inp-v-x');
  const vy = document.getElementById('inp-v-y');
  const vz = document.getElementById('inp-v-z');

  const resSum = document.getElementById('res-sum');
  const resDiff = document.getElementById('res-diff');
  const resLenU = document.getElementById('res-len-u');
  const resLenV = document.getElementById('res-len-v');
  const resDot = document.getElementById('res-dot');
  const resCos = document.getElementById('res-cos');
  const resAngle = document.getElementById('res-angle');

  function calculate() {
    const x1 = parseFloat(ux.value) || 0;
    const y1 = parseFloat(uy.value) || 0;
    const z1 = parseFloat(uz.value) || 0;

    const x2 = parseFloat(vx.value) || 0;
    const y2 = parseFloat(vy.value) || 0;
    const z2 = parseFloat(vz.value) || 0;

    // Sum & Diff
    const sx = x1 + x2, sy = y1 + y2, sz = z1 + z2;
    const dx = x1 - x2, dy = y1 - y2, dz = z1 - z2;
    resSum.textContent = `u + v = (${sx}; ${sy}; ${sz})`;
    resDiff.textContent = `u - v = (${dx}; ${dy}; ${dz})`;

    // Lengths
    const lu = Math.sqrt(x1*x1 + y1*y1 + z1*z1);
    const lv = Math.sqrt(x2*x2 + y2*y2 + z2*z2);
    resLenU.textContent = `|u| = √(${x1}² + ${y1}² + ${z1}²) = ${lu.toFixed(2)}`;
    resLenV.textContent = `|v| = √(${x2}² + ${y2}² + ${z2}²) = ${lv.toFixed(2)}`;

    // Dot product
    const dot = x1*x2 + y1*y2 + z1*z2;
    resDot.textContent = `u · v = (${x1})(${x2}) + (${y1})(${y2}) + (${z1})(${z2}) = ${dot.toFixed(2)}`;

    if (lu === 0 || lv === 0) {
      resCos.textContent = 'Một trong hai vectơ là vectơ-không (góc không xác định)';
      resAngle.textContent = 'Không xác định';
      return;
    }

    let cosVal = dot / (lu * lv);
    if (cosVal > 1) cosVal = 1;
    if (cosVal < -1) cosVal = -1;
    resCos.textContent = `cos(u, v) = ${dot.toFixed(2)} / (${lu.toFixed(2)} × ${lv.toFixed(2)}) = ${cosVal.toFixed(3)}`;

    const deg = Math.acos(cosVal) * 180 / Math.PI;
    if (Math.abs(dot) < 1e-4) {
      resAngle.innerHTML = `${deg.toFixed(1)}° <strong style="color: #dc2626;">(Hai vectơ vuông góc u ⊥ v)</strong>`;
    } else if (deg === 0) {
      resAngle.innerHTML = `0.0° <strong style="color: #16a34a;">(Hai vectơ cùng hướng)</strong>`;
    } else if (deg === 180) {
      resAngle.innerHTML = `180.0° <strong style="color: #b45309;">(Hai vectơ ngược hướng)</strong>`;
    } else {
      resAngle.textContent = `θ = ${deg.toFixed(1)}°`;
    }
  }

  [ux, uy, uz, vx, vy, vz].forEach(inp => inp.addEventListener('input', calculate));
  calculate();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## III. Các dạng toán trọng tâm có lời giải chi tiết

### Dạng 1: Các phép toán toạ độ và phân tích vectơ

**Bài toán 1:** Trong không gian $Oxyz$, cho ba vectơ $\vec{a} = (1; 2; -3)$, $\vec{b} = (-2; 0; 4)$, $\vec{c} = (3; -1; 1)$.
1. Tìm toạ độ của vectơ $\vec{u} = 2\vec{a} - 3\vec{b} + \vec{c}$.
2. Phân tích vectơ $\vec{d} = (0; 5; -1)$ theo ba vectơ $\vec{a}, \vec{b}, \vec{c}$.

**Lời giải:**
1. **Tính toạ độ vectơ $\vec{u}$:**
   - $2\vec{a} = (2 \cdot 1; 2 \cdot 2; 2 \cdot (-3)) = (2; 4; -6)$.
   - $-3\vec{b} = (-3 \cdot (-2); -3 \cdot 0; -3 \cdot 4) = (6; 0; -12)$.
   - $\vec{c} = (3; -1; 1)$.
   - Cộng từng thành phần toạ độ:
     $$\begin{cases} x_u = 2 + 6 + 3 = 11 \\ y_u = 4 + 0 + (-1) = 3 \\ z_u = -6 - 12 + 1 = -17 \end{cases}$$
   - Vậy $\mathbf{\vec{u} = (11; 3; -17)}$.

2. **Phân tích $\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}$:**
   - Ta có hệ phương trình đại số:
     $$\begin{cases} 1x - 2y + 3z = 0 \\ 2x + 0y - 1z = 5 \\ -3x + 4y + 1z = -1 \end{cases}$$
   - Giải hệ phương trình bậc nhất 3 ẩn bằng máy tính cầm tay:
     $$x = 2, \quad y = 1, \quad z = -1$$
   - Vậy biểu diễn cần tìm là:
     $$\mathbf{\vec{d} = 2\vec{a} + \vec{b} - \vec{c}}$$

---

### Dạng 2: Hai vectơ cùng phương và ba điểm thẳng hàng

**Bài toán 2:** Trong không gian $Oxyz$:
1. Tìm $m$ và $n$ để vectơ $\vec{u} = (m; 2; -3)$ cùng phương với vectơ $\vec{v} = (4; n; 6)$.
2. Cho ba điểm $A(1; 1; 1)$, $B(2; 3; 4)$, $C(m; 5; n)$. Tìm $m$ và $n$ để ba điểm $A, B, C$ thẳng hàng.

**Lời giải:**
1. **Điều kiện để $\vec{u}$ và $\vec{v}$ cùng phương:**
   - Ta có $\vec{u}$ cùng phương $\vec{v} \iff \frac{m}{4} = \frac{2}{n} = \frac{-3}{6} = -\frac{1}{2}$.
   - Suy ra:
     $$\frac{m}{4} = -\frac{1}{2} \implies m = -2$$
     $$\frac{2}{n} = -\frac{1}{2} \implies n = -4$$
   - Vậy $\mathbf{m = -2, \, n = -4}$.

2. **Ba điểm $A, B, C$ thẳng hàng:**
   - Tính toạ độ các vectơ:
     $$\vec{AB} = (2 - 1; \, 3 - 1; \, 4 - 1) = (1; 2; 3)$$
     $$\vec{AC} = (m - 1; \, 5 - 1; \, n - 1) = (m - 1; \, 4; \, n - 1)$$
   - Ba điểm $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương:
     $$\frac{m - 1}{1} = \frac{4}{2} = \frac{n - 1}{3}$$
   - Ta có tỷ số chung bằng $2$:
     $$m - 1 = 2 \implies m = 3$$
     $$\frac{n - 1}{3} = 2 \implies n - 1 = 6 \implies n = 7$$
   - Vậy $\mathbf{m = 3, \, n = 7}$.

---

### Dạng 3: Tích vô hướng, góc và điều kiện vuông góc

**Bài toán 3:** Trong không gian $Oxyz$, cho ba điểm $A(1; 0; -2)$, $B(2; 1; -1)$, $C(1; -2; 2)$.
1. Tính tích vô hướng $\vec{AB} \cdot \vec{AC}$.
2. Tính góc $\widehat{BAC}$ của tam giác $ABC$.
3. Tìm toạ độ điểm $M$ thuộc trục $Ox$ sao cho tam giác $ABM$ vuông tại $B$.

**Lời giải:**
1. **Tính $\vec{AB} \cdot \vec{AC}$:**
   - $\vec{AB} = (2 - 1; \, 1 - 0; \, -1 - (-2)) = (1; 1; 1)$.
   - $\vec{AC} = (1 - 1; \, -2 - 0; \, 2 - (-2)) = (0; -2; 4)$.
   - $\vec{AB} \cdot \vec{AC} = 1 \cdot 0 + 1 \cdot (-2) + 1 \cdot 4 = 0 - 2 + 4 = 2$.

2. **Tính góc $\widehat{BAC}$:**
   - Độ dài:
     $$|\vec{AB}| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}$$
     $$|\vec{AC}| = \sqrt{0^2 + (-2)^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$$
   - Cosin của góc $\widehat{BAC}$:
     $$\cos(\widehat{BAC}) = \frac{\vec{AB} \cdot \vec{AC}}{|\vec{AB}| \cdot |\vec{AC}|} = \frac{2}{\sqrt{3} \cdot 2\sqrt{5}} = \frac{1}{\sqrt{15}} \approx 0.258$$
   - Suy ra góc $\widehat{BAC} \approx \arccos(0.258) \approx 75^\circ 2^\prime$.

3. **Tìm điểm $M \in Ox$ để $\triangle ABM$ vuông tại $B$:**
   - Điểm $M$ thuộc trục $Ox \implies M(x; 0; 0)$.
   - Vectơ $\vec{BA} = -\vec{AB} = (-1; -1; -1)$.
   - Vectơ $\vec{BM} = (x - 2; \, 0 - 1; \, 0 - (-1)) = (x - 2; \, -1; \, 1)$.
   - Tam giác vuông tại $B \iff \vec{BA} \perp \vec{BM} \iff \vec{BA} \cdot \vec{BM} = 0$:
     $$(-1)(x - 2) + (-1)(-1) + (-1)(1) = 0$$
     $$-x + 2 + 1 - 1 = 0 \iff -x + 2 = 0 \iff x = 2$$
   - Vậy điểm cần tìm là $\mathbf{M(2; 0; 0)}$.

---

## IV. Ứng dụng thực tế: Tính công cơ học và góc đón nắng mặt trời

### 1. Tính công cơ học của lực trong không gian ($A = \vec{F} \cdot \vec{d}$)
Trong cơ học cổ điển, công $A$ sinh ra bởi một lực không đổi $\vec{F}$ khi làm một vật dịch chuyển theo vectơ độ dời $\vec{d}$ được tính bằng tích vô hướng:
$$A = \vec{F} \cdot \vec{d}$$
- Giả sử một chiếc cẩu tháp tác dụng lực $\vec{F} = (200; 300; 1500)\text{ N}$ để nâng và dịch chuyển một khối bê tông từ vị trí $A(1; 2; 0)$ đến vị trí $B(4; 6; 8)$ (đơn vị mét):
  - Vectơ độ dời: $\vec{d} = \vec{AB} = (4 - 1; 6 - 2; 8 - 0) = (3; 4; 8)\text{ m}$.
  - Công sinh ra:
    $$A = \vec{F} \cdot \vec{d} = 200(3) + 300(4) + 1500(8) = 600 + 1200 + 12000 = 13800\text{ J} = 13.8\text{ kJ}$$

### 2. Tối ưu góc đón ánh nắng của tấm pin mặt trời
Tấm pin năng lượng mặt trời thu được nhiều năng lượng nhất khi các tia sáng mặt trời chiếu vuông góc với bề mặt tấm pin, tức là vectơ hướng tia sáng $\vec{s}$ song song ngược chiều với vectơ pháp tuyến $\vec{n}$ của tấm pin.
Góc tạo bởi tia sáng và tấm pin bằng $90^\circ - \theta$, trong đó $\cos\theta = \frac{|\vec{s} \cdot \vec{n}|}{|\vec{s}||\vec{n}|}$. Việc tính toán toạ độ cho phép hệ thống pin tự động xoay động cơ theo trục hai chiều để đạt hiệu suất chuyển đổi điện năng tối đa suốt cả ngày.

---

## V. Trắc nghiệm tự luyện củng cố kiến thức

<div class="quiz-item" data-quiz='{"question":"Câu 1: Cho hai vectơ u = (1; 2; -1) và v = (2; -1; 3). Toạ độ của vectơ u + v là:","options":["A. (3; 1; 2)","B. (3; 1; -4)","C. (-1; 3; -4)","D. (2; -2; -3)"],"answer":"A. (3; 1; 2)","explanation":"u + v = (1 + 2; 2 + (-1); -1 + 3) = (3; 1; 2)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 2: Cho vectơ u = (2; -4; 6). Toạ độ của vectơ -1/2 u là:","options":["A. (-1; 2; -3)","B. (1; -2; 3)","C. (-1; -2; -3)","D. (-1; 2; 3)"],"answer":"A. (-1; 2; -3)","explanation":"-1/2 u = (-1/2 * 2; -1/2 * (-4); -1/2 * 6) = (-1; 2; -3)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 3: Cho hai vectơ u = (2; 1; -2) và v = (1; 0; 3). Tích vô hướng u · v bằng:","options":["A. -4","B. 4","C. 8","D. 0"],"answer":"A. -4","explanation":"u · v = 2*1 + 1*0 + (-2)*3 = 2 + 0 - 6 = -4."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 4: Độ dài của vectơ u = (2; -3; 6) bằng:","options":["A. 7","B. 49","C. √7","D. 11"],"answer":"A. 7","explanation":"|u| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 5: Cho hai vectơ u = (1; m; 2) và v = (3; 2; -4). Giá trị của m để u vuông góc với v là:","options":["A. m = 2.5","B. m = -2.5","C. m = 5","D. m = -5"],"answer":"A. m = 2.5","explanation":"u ⊥ v <=> u · v = 0 <=> 1*3 + m*2 + 2*(-4) = 0 <=> 3 + 2m - 8 = 0 <=> 2m = 5 <=> m = 2.5."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 6: Cho hai vectơ u = (2; -1; 3) và v = (4; m; n). Để u cùng phương với v thì:","options":["A. m = -2, n = 6","B. m = 2, n = 6","C. m = -2, n = -6","D. m = 1, n = 3"],"answer":"A. m = -2, n = 6","explanation":"u cùng phương v <=> 4/2 = m/(-1) = n/3 = 2 <=> m = -2 và n = 6."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 7: Cosin của góc giữa hai vectơ u = (1; 0; 1) và v = (0; 1; 1) bằng:","options":["A. 1/2","B. 1/√2","C. √3/2","D. 0"],"answer":"A. 1/2","explanation":"u · v = 1*0 + 0*1 + 1*1 = 1. |u| = √(1 + 0 + 1) = √2, |v| = √(0 + 1 + 1) = √2. Do đó cos(u, v) = 1 / (√2 * √2) = 1/2 (góc bằng 60°)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 8: Cho hai điểm A(1; 2; -1) và B(3; 0; 1). Vectơ nào sau đây cùng phương với vectơ AB?","options":["A. (1; -1; 1)","B. (1; 1; 1)","C. (2; -2; -2)","D. (1; 0; 1)"],"answer":"A. (1; -1; 1)","explanation":"AB = (3 - 1; 0 - 2; 1 - (-1)) = (2; -2; 2) = 2(1; -1; 1). Vậy (1; -1; 1) cùng phương với AB."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 9: Cho tam giác ABC với A(1; 2; 3), B(2; 4; 4), C(2; 1; 5). Góc BAC bằng:","options":["A. 60°","B. 90°","C. 45°","D. 120°"],"answer":"A. 60°","explanation":"AB = (1; 2; 1) => |AB| = √6. AC = (1; -1; 2) => |AC| = √6. AB · AC = 1*1 + 2*(-1) + 1*2 = 1. cos(BAC) = 1 / (√6 * √6) = 1/6 (hoặc tính góc: cos A = 1/6)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 10: Lực F = (10; 20; 50) N làm vật dịch chuyển từ gốc O(0; 0; 0) đến M(2; 3; 1) m. Công sinh ra là:","options":["A. 130 J","B. 80 J","C. 150 J","D. 100 J"],"answer":"A. 130 J","explanation":"A = F · OM = 10*2 + 20*3 + 50*1 = 20 + 60 + 50 = 130 J."}'></div>
