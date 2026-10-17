---
title: 'Toán 12 Bài 14: Phương trình mặt phẳng'
description: 'Lý thuyết trọng tâm Bài 14 Toán 12 Kết nối tri thức: Vectơ pháp tuyến, tích có hướng của 2 vectơ, phương trình tổng quát mặt phẳng, phương trình đoạn chắn, vị trí tương đối kèm mô phỏng 3D mặt phẳng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Oxyz
  - Phương trình mặt phẳng
  - Vectơ pháp tuyến
  - Tích có hướng
  - Kết nối tri thức
grade: 12
---

# Bài 14. Phương trình mặt phẳng

Nếu như trong hình học phẳng hai chiều ($Oxy$), đối tượng cơ bản nhất là **đường thẳng** với phương trình bậc nhất $Ax + By + C = 0$, thì khi bước lên không gian ba chiều ($Oxyz$), phương trình bậc nhất ba ẩn:
$$Ax + By + Cz + D = 0$$
lại đại diện cho một đối tượng nền tảng mới: **Mặt phẳng**!

Mặt phẳng xuất hiện khắp nơi trong đời sống và kỹ nghệ: từ mặt bàn, sàn nhà, các bức tường phòng thí nghiệm đến bề mặt phẳng của cánh quạt tua-bin gió hay tấm pin năng lượng mặt trời. Để lập được phương trình toán học của một mặt phẳng trong không gian, ta chỉ cần hai yếu tố cốt lõi: **một điểm mà nó đi qua** và **một vectơ định hướng vuông góc** với nó – gọi là **Vectơ pháp tuyến**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: PHƯƠNG TRÌNH MẶT PHẲNG</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Vectơ pháp tuyến & Tích có hướng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\vec{n} \neq \vec{0}$ vuông góc với mọi đường thẳng nằm trong $(\alpha)$.<br>
• Cặp VTCP $\vec{a}, \vec{b} \implies \mathbf{\vec{n} = [\vec{a}, \vec{b}]}$.<br>
• $[\vec{a}, \vec{b}] = (a_2 b_3 - a_3 b_2; \, a_3 b_1 - a_1 b_3; \, a_1 b_2 - a_2 b_1)$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Phương trình tổng quát</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Qua $M_0(x_0; y_0; z_0)$ có VTPT $\vec{n}(A; B; C)$:<br>
$\mathbf{A(x - x_0) + B(y - y_0) + C(z - z_0) = 0}$.<br>
$\iff \mathbf{Ax + By + Cz + D = 0}$ ($A^2+B^2+C^2 > 0$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương trình đoạn chắn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Cắt 3 trục tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ ($abc \neq 0$):<br>
$\mathbf{\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1}$.<br>
• Cực kì tiện lợi khi biết giao điểm với các trục toạ độ.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Vị trí tương đối 2 mặt phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Song song: VTPT cùng phương, $D_1 \neq D_2$.<br>
• Trùng nhau: Các tỉ số bằng nhau cả $D$.<br>
• Vuông góc: $\mathbf{A_1 A_2 + B_1 B_2 + C_1 C_2 = 0}$.
</p>
</div>
</div>
</div>

---

## 1. Vectơ pháp tuyến và Tích có hướng của hai vectơ

### 1.1. Vectơ pháp tuyến (VTPT) của mặt phẳng

::: tip Định nghĩa VTPT
Cho mặt phẳng $(\alpha)$. Vectơ $\vec{n} \neq \vec{0}$ được gọi là **vectơ pháp tuyến** của $(\alpha)$ nếu giá của nó vuông góc với mặt phẳng $(\alpha)$.
:::

**Các tính chất cơ bản:**
- Nếu $\vec{n}$ là một VTPT của $(\alpha)$ thì $k\vec{n}$ ($k \neq 0$) cũng là một VTPT của $(\alpha)$. Một mặt phẳng có vô số VTPT cùng phương.
- Nếu hai vectơ $\vec{a}, \vec{b}$ không cùng phương có giá song song hoặc nằm trong mặt phẳng $(\alpha)$ (gọi là cặp vectơ chỉ phương của $(\alpha)$) thì một VTPT của $(\alpha)$ là:
  $$\vec{n} = [\vec{a}, \vec{b}]$$

### 1.2. Công thức tọa độ của tích có hướng

Cho hai vectơ $\vec{a} = (a_1; a_2; a_3)$ và $\vec{b} = (b_1; b_2; b_3)$.  
**Tích có hướng** của $\vec{a}$ và $\vec{b}$, kí hiệu là $[\vec{a}, \vec{b}]$ (hoặc $\vec{a} \times \vec{b}$), là một vectơ vuông góc với cả $\vec{a}$ và $\vec{b}$, có toạ độ xác định bởi:
$$[\vec{a}, \vec{b}] = \left( \begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix}; \, \begin{vmatrix} a_3 & a_1 \\ b_3 & b_1 \end{vmatrix}; \, \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} \right) = (a_2 b_3 - a_3 b_2; \, a_3 b_1 - a_1 b_3; \, a_1 b_2 - a_2 b_1)$$

> **Khẩu quyết tính toạ độ tích có hướng:** "Nhị-tam, tam-nhất, nhất-nhị" (23 - 31 - 12).

---

## 2. Phương trình tổng quát của mặt phẳng

::: tip Phương trình mặt phẳng đi qua một điểm và có VTPT cho trước
Trong không gian $Oxyz$, mặt phẳng $(\alpha)$ đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận vectơ $\vec{n} = (A; B; C) \neq \vec{0}$ làm vectơ pháp tuyến có phương trình là:
$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$
:::

Khai triển và rút gọn, ta được phương trình dạng:
$$Ax + By + Cz + D = 0 \quad (\text{với } D = -Ax_0 - By_0 - Cz_0)$$

::: tip Định lý về phương trình tổng quát
- Mọi mặt phẳng trong không gian $Oxyz$ đều có phương trình dạng:
  $$Ax + By + Cz + D = 0$$
  với các hệ số $A, B, C$ không đồng thời bằng 0 ($A^2 + B^2 + C^2 > 0$).
- Ngược lại, mọi phương trình bậc nhất ba ẩn $Ax + By + Cz + D = 0$ đều xác định một mặt phẳng nhận $\vec{n} = (A; B; C)$ làm một vectơ pháp tuyến.
:::

---

## 3. Các trường hợp riêng & Phương trình mặt phẳng theo đoạn chắn

### 3.1. Các trường hợp đặc biệt của $Ax + By + Cz + D = 0$

| Hệ số bằng 0 | Vị trí hình học tương ứng | Phương trình minh họa |
| :--- | :--- | :--- |
| $D = 0$ | Mặt phẳng **đi qua gốc toạ độ $O(0; 0; 0)$** | $Ax + By + Cz = 0$ |
| $A = 0$ | Mặt phẳng **song song hoặc chứa trục $Ox$** | $By + Cz + D = 0$ |
| $B = 0$ | Mặt phẳng **song song hoặc chứa trục $Oy$** | $Ax + Cz + D = 0$ |
| $C = 0$ | Mặt phẳng **song song hoặc chứa trục $Oz$** | $Ax + By + D = 0$ |
| $A = B = 0$ | Mặt phẳng **song song hoặc trùng với mặt phẳng $(Oxy)$** | $Cz + D = 0 \iff z = z_0$ |
| $B = C = 0$ | Mặt phẳng **song song hoặc trùng với mặt phẳng $(Oyz)$** | $Ax + D = 0 \iff x = x_0$ |
| $A = C = 0$ | Mặt phẳng **song song hoặc trùng với mặt phẳng $(Oxz)$** | $By + D = 0 \iff y = y_0$ |

- Ba mặt phẳng toạ độ có phương trình cực kì đơn giản:
  - Mặt phẳng $(Oxy)$ có phương trình: $\mathbf{z = 0}$.
  - Mặt phẳng $(Oyz)$ có phương trình: $\mathbf{x = 0}$.
  - Mặt phẳng $(Oxz)$ có phương trình: $\mathbf{y = 0}$.

### 3.2. Phương trình mặt phẳng theo đoạn chắn

::: tip Phương trình theo đoạn chắn
Nếu mặt phẳng $(\alpha)$ cắt ba trục toạ độ $Ox, Oy, Oz$ lần lượt tại ba điểm $A(a; 0; 0)$, $B(0; b; 0)$, $C(0; 0; c)$ với $a, b, c \neq 0$ thì phương trình của $(\alpha)$ là:
$$\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$$
:::

---

## 4. Vị trí tương đối của hai mặt phẳng

Cho hai mặt phẳng $(\alpha_1)$ và $(\alpha_2)$ có phương trình:
$$(\alpha_1): A_1 x + B_1 y + C_1 z + D_1 = 0 \quad (\text{VTPT } \vec{n}_1 = (A_1; B_1; C_1))$$
$$(\alpha_2): A_2 x + B_2 y + C_2 z + D_2 = 0 \quad (\text{VTPT } \vec{n}_2 = (A_2; B_2; C_2))$$

1. **$(\alpha_1) \parallel (\alpha_2)$ (song song):**
   $$\vec{n}_1 \text{ cùng phương } \vec{n}_2 \text{ và } D_1 \neq k D_2 \iff \frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2} \neq \frac{D_1}{D_2}$$
2. **$(\alpha_1) \equiv (\alpha_2)$ (trùng nhau):**
   $$\frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2} = \frac{D_1}{D_2}$$
3. **$(\alpha_1)$ cắt $(\alpha_2)$:**
   $$\vec{n}_1 \text{ không cùng phương } \vec{n}_2 \iff \frac{A_1}{A_2} \neq \frac{B_1}{B_2} \text{ hoặc } \frac{B_1}{B_2} \neq \frac{C_1}{C_2}$$
4. **$(\alpha_1) \perp (\alpha_2)$ (vuông góc nhau):**
   $$\vec{n}_1 \cdot \vec{n}_2 = 0 \iff A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$$

---

## 5. Mô phỏng 3D tương tác: Mặt phẳng và Vectơ pháp tuyến

Dưới đây là mô phỏng 3D không gian $Oxyz$ hiển thị mặt phẳng $(\alpha)$ cùng vectơ pháp tuyến $\vec{n}$. Hãy kéo thanh trượt để thay đổi **độ nghiêng** và **độ cao** của mặt phẳng để quan sát hướng của vectơ pháp tuyến:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Góc nghiêng mặt phẳng: <span id="val-tilt" style="color: #2563eb; font-weight: bold;">25°</span></label><br>
      <input type="range" id="slider-tilt" min="-45" max="45" value="25" step="1" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Vectơ pháp tuyến:</strong> <span id="val-norm" style="color: #dc2626; font-weight: bold;">n⃗ = (0.42; 0.00; 0.91)</span>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 350px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="plane-3d-svg" data-interactive-done="true" viewBox="0 0 700 350" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Vectơ pháp tuyến $\vec{n}$ (mũi tên đỏ) luôn giữ góc $90^\circ$ hoàn hảo với mọi đường thẳng trên bề mặt phẳng $(\alpha)$ (vùng màu xanh).
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('plane-3d-svg');
  const slider = document.getElementById('slider-tilt');
  const valTilt = document.getElementById('val-tilt');
  const valNorm = document.getElementById('val-norm');

  if (!svg || !slider) return;

  const cx = 350, cy = 200;

  function render() {
    const deg = parseFloat(slider.value);
    const rad = (deg * Math.PI) / 180;
    valTilt.textContent = `${deg}°`;

    const nx = Math.sin(rad);
    const nz = Math.cos(rad);
    valNorm.textContent = `n⃗ = (${nx.toFixed(2)}; 0.00; ${nz.toFixed(2)})`;

    // 4 góc của mặt phẳng hình bình hành trong toạ độ chiếu
    const pw = 180, ph = 100;
    const dy = Math.tan(rad) * 60;

    const p1 = { x: cx - pw, y: cy + ph / 2 + dy };
    const p2 = { x: cx - pw + 80, y: cy - ph / 2 + dy };
    const p3 = { x: cx + pw, y: cy - ph / 2 - dy };
    const p4 = { x: cx + pw - 80, y: cy + ph / 2 - dy };

    // Điểm tâm mặt phẳng
    const mcx = (p1.x + p2.x + p3.x + p4.x) / 4;
    const mcy = (p1.y + p2.y + p3.y + p4.y) / 4;

    // Vectơ pháp tuyến vuông góc với mặt phẳng
    const nLen = 110;
    // Góc vuông với đường dốc dy
    const nAngle = -Math.PI / 2 + rad;
    const nTipX = mcx + nLen * Math.sin(rad);
    const nTipY = mcy - nLen * Math.cos(rad);

    let html = `
      <defs>
        <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M 0 1 L 7 4 L 0 7 Z" fill="#dc2626" />
        </marker>
        <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.15"/>
        </linearGradient>
      </defs>

      <!-- Trục toạ độ Oxyz -->
      <!-- Trục Oz -->
      <line x1="${cx - 160}" y1="${cy + 70}" x2="${cx - 160}" y2="30" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="${cx - 160},25 ${cx - 164},35 ${cx - 156},35" fill="#94a3b8" />
      <text x="${cx - 175}" y="35" font-size="12" fill="#64748b" font-weight="bold">z</text>

      <!-- Trục Ox -->
      <line x1="${cx - 160}" y1="${cy + 70}" x2="${cx - 240}" y2="${cy + 130}" stroke="#94a3b8" stroke-width="1.5" />
      <text x="${cx - 255}" y="${cy + 140}" font-size="12" fill="#64748b" font-weight="bold">x</text>

      <!-- Trục Oy -->
      <line x1="${cx - 160}" y1="${cy + 70}" x2="${cx + 260}" y2="${cy + 70}" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="${cx + 265},${cy + 70} ${cx + 255},${cy + 66} ${cx + 255},${cy + 74}" fill="#94a3b8" />
      <text x="${cx + 265}" y="${cy + 90}" font-size="12" fill="#64748b" font-weight="bold">y</text>

      <!-- Mặt phẳng (alpha) -->
      <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}" fill="url(#planeGrad)" stroke="#2563eb" stroke-width="2.2" />
      <text x="${p3.x - 30}" y="${p3.y - 10}" font-size="14" fill="#2563eb" font-weight="bold">(α)</text>

      <!-- Điểm M0 tâm mặt phẳng -->
      <circle cx="${mcx}" cy="${mcy}" r="4" fill="#1e293b" />
      <text x="${mcx - 22}" y="${mcy + 16}" font-size="11" fill="#1e293b" font-weight="bold">M₀</text>

      <!-- Vectơ pháp tuyến n -->
      <line x1="${mcx}" y1="${mcy}" x2="${nTipX}" y2="${nTipY}" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowRed)" />
      <text x="${nTipX + 8}" y="${nTipY}" font-size="13" fill="#dc2626" font-weight="bold">n⃗ (VTPT)</text>

      <!-- Kí hiệu góc vuông -->
      <circle cx="${mcx}" cy="${mcy}" r="14" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="2 2" />
    `;

    svg.innerHTML = html;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## 6. Các ví dụ áp dụng chi tiết

### Ví dụ 1: Lập phương trình mặt phẳng đi qua 1 điểm và biết VTPT

Trong không gian $Oxyz$, lập phương trình tổng quát của mặt phẳng $(\alpha)$ đi qua điểm $A(1; -2; 3)$ và nhận vectơ $\vec{n} = (2; -1; 4)$ làm vectơ pháp tuyến.

#### Lời giải:
Mặt phẳng $(\alpha)$ có VTPT $\vec{n} = (2; -1; 4)$ và đi qua $A(1; -2; 3)$ có phương trình là:
$$2(x - 1) - 1(y - (-2)) + 4(z - 3) = 0$$
$$\iff 2(x - 1) - (y + 2) + 4(z - 3) = 0$$
$$\iff 2x - 2 - y - 2 + 4z - 12 = 0$$
$$\iff 2x - y + 4z - 16 = 0$$

---

### Ví dụ 2: Lập phương trình mặt phẳng đi qua ba điểm không thẳng hàng

Cho ba điểm $A(2; 0; 0)$, $B(0; -1; 0)$, $C(0; 0; 3)$.  
a) Viết phương trình mặt phẳng $(ABC)$ theo đoạn chắn.  
b) Đưa phương trình mặt phẳng $(ABC)$ về dạng tổng quát.

#### Lời giải:
a) Ba điểm $A, B, C$ nằm lần lượt trên 3 trục toạ độ $Ox, Oy, Oz$. Áp dụng phương trình mặt phẳng theo đoạn chắn:
$$\frac{x}{2} + \frac{y}{-1} + \frac{z}{3} = 1$$

b) Quy đồng mẫu số chung là $6$:
$$3x - 6y + 2z = 6 \iff 3x - 6y + 2z - 6 = 0$$

---

### Ví dụ 3: Lập phương trình mặt phẳng trung trực của đoạn thẳng

Cho hai điểm $A(1; 3; -2)$ và $B(3; -1; 4)$. Viết phương trình mặt phẳng trung trực $(\beta)$ của đoạn thẳng $AB$.

#### Lời giải:
Mặt phẳng trung trực $(\beta)$ của đoạn thẳng $AB$ là mặt phẳng đi qua trung điểm $I$ của $AB$ và vuông góc với đường thẳng $AB$.
- **Toạ độ trung điểm $I$ của $AB$:**
  $$x_I = \frac{1 + 3}{2} = 2, \quad y_I = \frac{3 + (-1)}{2} = 1, \quad z_I = \frac{-2 + 4}{2} = 1 \implies I(2; 1; 1)$$
- **Vectơ pháp tuyến của $(\beta)$:**
  Vì $(\beta) \perp AB$ nên nhận vectơ $\vec{AB}$ làm VTPT:
  $$\vec{AB} = (3 - 1; \, -1 - 3; \, 4 - (-2)) = (2; -4; 6)$$
  Rút gọn VTPT: chọn $\vec{n} = \frac{1}{2}\vec{AB} = (1; -2; 3)$.
- **Phương trình mặt phẳng $(\beta)$:**
  $$1(x - 2) - 2(y - 1) + 3(z - 1) = 0 \iff x - 2y + 3z - 3 = 0$$

---

## 7. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là:",
  "options": [
    "A. $\\vec{n} = (2; 3; 1)$",
    "B. $\\vec{n} = (2; -3; 1)$",
    "C. $\\vec{n} = (2; -3; -5)$",
    "D. $\\vec{n} = (-3; 1; -5)$"
  ],
  "answer": "B. $\\vec{n} = (2; -3; 1)$",
  "explanation": "Từ phương trình tổng quát $Ax + By + Cz + D = 0$, toạ độ một VTPT chính là hệ số của $x, y, z$: $\\vec{n} = (A; B; C) = (2; -3; 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Mặt phẳng toạ độ $(Oxy)$ có phương trình là:",
  "options": [
    "A. $x = 0$",
    "B. $y = 0$",
    "C. $z = 0$",
    "D. $x + y = 0$"
  ],
  "answer": "C. $z = 0$",
  "explanation": "Mọi điểm thuộc mặt phẳng $(Oxy)$ đều có cao độ bằng 0, do đó phương trình là $z = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phương trình mặt phẳng đi qua $M(1; 2; -3)$ và nhận $\\vec{n} = (1; 0; 2)$ làm VTPT là:",
  "options": [
    "A. $x + 2z + 5 = 0$",
    "B. $x + 2z - 5 = 0$",
    "C. $x + 2y - 3z = 0$",
    "D. $x + 2z + 7 = 0$"
  ],
  "answer": "A. $x + 2z + 5 = 0$",
  "explanation": "$1(x - 1) + 0(y - 2) + 2(z - (-3)) = 0 \\iff x - 1 + 2z + 6 = 0 \\iff x + 2z + 5 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (2; 0; -1)$. Tích có hướng $[\\vec{a}, \\vec{b}]$ có toạ độ là:",
  "options": [
    "A. $(-2; 7; -4)$",
    "B. $(-2; -7; -4)$",
    "C. $(2; 7; 4)$",
    "D. $(-2; 7; 4)$"
  ],
  "answer": "A. $(-2; 7; -4)$",
  "explanation": "$x = 2(-1) - 3(0) = -2$; $y = 3(2) - 1(-1) = 7$; $z = 1(0) - 2(2) = -4$. Vậy $[\\vec{a}, \\vec{b}] = (-2; 7; -4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Mặt phẳng cắt ba trục toạ độ tại $A(3; 0; 0), B(0; -2; 0), C(0; 0; 4)$ có phương trình là:",
  "options": [
    "A. $\\frac{x}{3} + \\frac{y}{2} + \\frac{z}{4} = 1$",
    "B. $\\frac{x}{3} - \\frac{y}{2} + \\frac{z}{4} = 1$",
    "C. $\\frac{x}{3} - \\frac{y}{2} + \\frac{z}{4} = 0$",
    "D. $3x - 2y + 4z = 1$"
  ],
  "answer": "B. $\\frac{x}{3} - \\frac{y}{2} + \\frac{z}{4} = 1$",
  "explanation": "Phương trình đoạn chắn: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1 \\implies \\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 1 \\iff \\frac{x}{3} - \\frac{y}{2} + \\frac{z}{4} = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Hai mặt phẳng $(P): 2x - y + 3z - 1 = 0$ và $(Q): 4x - 2y + 6z + 5 = 0$ có vị trí tương đối là:",
  "options": [
    "A. Trùng nhau",
    "B. Cắt nhau nhưng không vuông góc",
    "C. Song song",
    "D. Vuông góc"
  ],
  "answer": "C. Song song",
  "explanation": "Ta có $\\frac{2}{4} = \\frac{-1}{-2} = \\frac{3}{6} = \\frac{1}{2} \\neq \\frac{-1}{5}$. VTPT cùng phương nhưng hệ số tự do tỉ lệ khác, nên $(P) \\parallel (Q)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Giá trị của tham số $m$ để hai mặt phẳng $(P): mx + 2y - z + 3 = 0$ và $(Q): 2x - 3y + 4z - 1 = 0$ vuông góc với nhau là:",
  "options": [
    "A. $m = 5$",
    "B. $m = -5$",
    "C. $m = 10$",
    "D. $m = 1$"
  ],
  "answer": "A. $m = 5$",
  "explanation": "$(P) \\perp (Q) \\iff \\vec{n}_P \\cdot \\vec{n}_Q = 0 \\iff m(2) + 2(-3) + (-1)(4) = 0 \\iff 2m - 6 - 4 = 0 \\iff 2m = 10 \\iff m = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phương trình mặt phẳng đi qua $A(2; 1; -1)$ và song song với mặt phẳng $(P): 3x - 2y + z + 7 = 0$ là:",
  "options": [
    "A. $3x - 2y + z - 3 = 0$",
    "B. $3x - 2y + z + 3 = 0$",
    "C. $3x - 2y + z - 7 = 0$",
    "D. $2x + y - z - 3 = 0$"
  ],
  "answer": "A. $3x - 2y + z - 3 = 0$",
  "explanation": "Mặt phẳng song song với $(P)$ có dạng $3x - 2y + z + D = 0$. Thay điểm $A(2; 1; -1)$: $3(2) - 2(1) + (-1) + D = 0 \\iff 6 - 2 - 1 + D = 0 \\iff D = -3$. Vậy phương trình là $3x - 2y + z - 3 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Mặt phẳng $(P): 2x - 3z + 4 = 0$ có tính chất hình học nào sau đây?",
  "options": [
    "A. Song song với trục $Oy$",
    "B. Vuông góc với trục $Oy$",
    "C. Đi qua gốc toạ độ $O$",
    "D. Song song với mặt phẳng $(Oxy)$"
  ],
  "answer": "A. Song song với trục $Oy$",
  "explanation": "Phương trình khuyết $y$ ($B = 0$) và $D = 4 \\neq 0$, do đó mặt phẳng $(P)$ song song với trục tung $Oy$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Trong không gian $Oxyz$, cho điểm $H(1; 2; 3)$. Mặt phẳng đi qua $H$ và vuông góc với đoạn thẳng $OH$ có phương trình là:",
  "options": [
    "A. $x + 2y + 3z - 14 = 0$",
    "B. $x + 2y + 3z + 14 = 0$",
    "C. $x + 2y + 3z = 0$",
    "D. $x + 2y + 3z - 6 = 0$"
  ],
  "answer": "A. $x + 2y + 3z - 14 = 0$",
  "explanation": "Mặt phẳng vuông góc với $OH$ tại $H$ nên nhận $\\vec{OH} = (1; 2; 3)$ làm VTPT và đi qua $H(1; 2; 3)$: $1(x - 1) + 2(y - 2) + 3(z - 3) = 0 \\iff x + 2y + 3z - (1 + 4 + 9) = 0 \\iff x + 2y + 3z - 14 = 0$."
}'></div>
