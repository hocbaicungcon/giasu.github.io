---
title: 'Toán 12 Bài 15: Phương trình đường thẳng trong không gian'
description: 'Lý thuyết trọng tâm Bài 15 Toán 12 Kết nối tri thức: Vectơ chỉ phương, phương trình tham số, phương trình chính tắc, vị trí tương đối giữa 2 đường thẳng, giữa đường thẳng và mặt phẳng kèm mô phỏng 3D tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Oxyz
  - Phương trình đường thẳng
  - Vectơ chỉ phương
  - Phương trình tham số
  - Phương trình chính tắc
  - Kết nối tri thức
grade: 12
---

# Bài 15. Phương trình đường thẳng trong không gian

Trong không gian 3 chiều, quỹ đạo chuyển động của một tia laser, đường bay của một chiếc máy bay dân dụng hay một sợi dây cáp treo cầu văng đều là những hình ảnh trực quan của **đường thẳng trong không gian**.

Khác với trong mặt phẳng $Oxy$ (nơi một đường thẳng được biểu diễn bởi một phương trình tổng quát duy nhất $Ax + By + C = 0$), trong không gian $Oxyz$, một đường thẳng được xác định bằng quỹ đạo chuyển động của một điểm qua thời gian theo một phương cho trước. Điều này dẫn đến hai dạng biểu diễn toán học đặc sắc: **Phương trình tham số** và **Phương trình chính tắc**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐƯỜNG THẲNG TRONG KHÔNG GIAN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Vectơ chỉ phương (VTCP)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\vec{u} \neq \vec{0}$ có giá song song hoặc trùng với đường thẳng $\Delta$.<br>
• Đi qua $A, B \implies \mathbf{\vec{u} = \vec{AB}}$.<br>
• Giao tuyến 2 mặt phẳng $\implies \mathbf{\vec{u} = [\vec{n}_1, \vec{n}_2]}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Phương trình tham số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Qua $M_0(x_0; y_0; z_0)$, VTCP $\vec{u}(a; b; c)$:<br>
$\begin{cases} \mathbf{x = x_0 + at} \\ \mathbf{y = y_0 + bt} \\ \mathbf{z = z_0 + ct} \end{cases} \quad (t \in \mathbb{R})$.<br>
• Mỗi giá trị $t$ cho ta đúng 1 điểm trên đường thẳng.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương trình chính tắc</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Khi cả ba toạ độ $a, b, c \neq 0$:<br>
$\mathbf{\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}}$.<br>
• Khử tham số $t$ từ phương trình tham số.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Vị trí tương đối</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• 2 đường thẳng: Trùng, Song song, Cắt nhau, **Chéo nhau**.<br>
• Đường và mặt phẳng: Song song, Nằm trong, Cắt nhau, Vuông góc ($\vec{u} \parallel \vec{n}$).
</p>
</div>
</div>
</div>

---

## 1. Vectơ chỉ phương của đường thẳng

::: tip Định nghĩa Vectơ chỉ phương
Vectơ $\vec{u} \neq \vec{0}$ được gọi là **vectơ chỉ phương** (VTCP) của đường thẳng $\Delta$ nếu giá của nó song song hoặc trùng với $\Delta$.
:::

**Nhận xét:**
- Nếu $\vec{u}$ là một VTCP của $\Delta$ thì $k\vec{u}$ ($k \neq 0$) cũng là một VTCP của $\Delta$.
- Một đường thẳng hoàn toàn được xác định nếu biết **một điểm nó đi qua** và **một vectơ chỉ phương** của nó.
- Nếu đường thẳng đi qua hai điểm phân biệt $A, B$ thì nhận vectơ $\vec{AB}$ làm một VTCP.

---

## 2. Phương trình tham số của đường thẳng

::: tip Phương trình tham số
Trong không gian $Oxyz$, đường thẳng $\Delta$ đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận vectơ $\vec{u} = (a; b; c) \neq \vec{0}$ làm vectơ chỉ phương có **phương trình tham số** là:
$$\begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases} \quad (t \in \mathbb{R})$$
:::

- $t$ được gọi là **tham số**.
- Khi $t$ thay đổi trong $\mathbb{R}$, điểm $M(x_0 + at; \, y_0 + bt; \, z_0 + ct)$ vạch nên toàn bộ đường thẳng $\Delta$.
- Ý nghĩa vật lý: Nếu một hạt chuyển động thẳng đều qua điểm $M_0$ với vận tốc $\vec{v} = (a; b; c)$ thì sau thời gian $t$, vị trí của hạt chính là điểm $M(x; y; z)$ trên.

---

## 3. Phương trình chính tắc của đường thẳng

Nếu cả ba thành phần $a, b, c$ của vectơ chỉ phương $\vec{u}$ đều khác 0 ($a \cdot b \cdot c \neq 0$), ta có thể rút tham số $t$ từ từng phương trình:
$$t = \frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$$

::: tip Phương trình chính tắc
Phương trình:
$$\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$$
được gọi là **phương trình chính tắc** của đường thẳng $\Delta$ đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\vec{u} = (a; b; c)$ với $a, b, c \neq 0$.
:::

> [!NOTE]
> Nếu trong các số $a, b, c$ có một hoặc hai số bằng 0 thì đường thẳng **không có phương trình chính tắc**, mà chỉ có phương trình tham số.  
> *Ví dụ:* Nếu $a = 0, b \neq 0, c \neq 0$ thì phương trình tham số là $\begin{cases} x = x_0 \\ y = y_0 + bt \\ z = z_0 + ct \end{cases}$.

---

## 4. Vị trí tương đối của hai đường thẳng trong không gian

Cho hai đường thẳng:
- $d_1$ đi qua $M_1(x_1; y_1; z_1)$ có VTCP $\vec{u}_1 = (a_1; b_1; c_1)$.
- $d_2$ đi qua $M_2(x_2; y_2; z_2)$ có VTCP $\vec{u}_2 = (a_2; b_2; c_2)$.

| Vị trí tương đối | Điều kiện vectơ | Số điểm chung |
| :--- | :--- | :---: |
| **Trùng nhau** ($d_1 \equiv d_2$) | $\vec{u}_1$ cùng phương $\vec{u}_2$ và $M_1 \in d_2$ | Vô số điểm chung |
| **Song song** ($d_1 \parallel d_2$) | $\vec{u}_1$ cùng phương $\vec{u}_2$ và $M_1 \notin d_2$ | Không có điểm chung |
| **Cắt nhau** ($d_1 \cap d_2 = \{I\}$) | $\vec{u}_1, \vec{u}_2$ không cùng phương và $[\vec{u}_1, \vec{u}_2] \cdot \vec{M_1 M_2} = 0$ | Đúng 1 điểm chung |
| **Chéo nhau** | $[\vec{u}_1, \vec{u}_2] \cdot \vec{M_1 M_2} \neq 0$ (ba vectơ không đồng phẳng) | Không có điểm chung, không cùng nằm trong một mặt phẳng |

---

## 5. Vị trí tương đối của đường thẳng và mặt phẳng

Cho đường thẳng $d$ đi qua $M_0$ có VTCP $\vec{u}$ và mặt phẳng $(\alpha)$ có VTPT $\vec{n}$:
1. **$d \parallel (\alpha)$:** $\vec{u} \cdot \vec{n} = 0$ và $M_0 \notin (\alpha)$.
2. **$d \subset (\alpha)$ (nằm trong):** $\vec{u} \cdot \vec{n} = 0$ và $M_0 \in (\alpha)$.
3. **$d$ cắt $(\alpha)$:** $\vec{u} \cdot \vec{n} \neq 0$.
4. **$d \perp (\alpha)$ (vuông góc):** $\vec{u}$ cùng phương $\vec{n} \iff \frac{a}{A} = \frac{b}{B} = \frac{c}{C}$.

---

## 6. Mô phỏng 3D tương tác: Điểm chuyển động trên đường thẳng

Dưới đây là mô phỏng đường thẳng $\Delta$ trong không gian $Oxyz$. Hãy kéo thanh trượt tham số $t$ để quan sát điểm $M(t)$ trượt dọc theo phương của vectơ chỉ phương $\vec{u}$:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Tham số $t$: <span id="val-t" style="color: #2563eb; font-weight: bold;">1.00</span></label><br>
      <input type="range" id="slider-t" min="-2.0" max="2.5" value="1.0" step="0.1" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Toạ độ điểm $M(t)$:</strong> <span id="val-pt" style="color: #dc2626; font-weight: bold;">M(2.00; 3.00; 4.00)</span>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 340px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="line-3d-svg" data-interactive-done="true" viewBox="0 0 700 340" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Đường thẳng $\Delta$ đi qua điểm cố định $M_0(1; 1; 2)$ và có VTCP $\vec{u} = (1; 2; 2)$. Khi $t$ thay đổi, điểm $M$ di chuyển: $\vec{OM} = \vec{OM_0} + t\vec{u}$.
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('line-3d-svg');
  const slider = document.getElementById('slider-t');
  const valT = document.getElementById('val-t');
  const valPt = document.getElementById('val-pt');

  if (!svg || !slider) return;

  const cx = 350, cy = 180;

  // Điểm gốc M0 toạ độ chiếu
  const m0x = 300, m0y = 190;
  // Hướng vectơ chỉ phương u trên màn hình
  const ux = 80, uy = -45;

  function render() {
    const t = parseFloat(slider.value);
    valT.textContent = t.toFixed(2);

    const xM = 1 + 1 * t;
    const yM = 1 + 2 * t;
    const zM = 2 + 2 * t;
    valPt.textContent = `M(${xM.toFixed(2)}; ${yM.toFixed(2)}; ${zM.toFixed(2)})`;

    // Toạ độ màn hình của M
    const mx = m0x + t * ux;
    const my = m0y + t * uy;

    // Hai đầu của đường thẳng Delta
    const lineX1 = m0x - 2.5 * ux;
    const lineY1 = m0y - 2.5 * uy;
    const lineX2 = m0x + 3.0 * ux;
    const lineY2 = m0y + 3.0 * uy;

    let html = `
      <defs>
        <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M 0 1 L 7 4 L 0 7 Z" fill="#2563eb" />
        </marker>
      </defs>

      <!-- Trục toạ độ Oxyz tham chiếu -->
      <line x1="80" y1="260" x2="80" y2="60" stroke="#94a3b8" stroke-width="1.5" />
      <text x="70" y="55" font-size="12" fill="#64748b" font-weight="bold">z</text>
      <line x1="80" y1="260" x2="30" y2="300" stroke="#94a3b8" stroke-width="1.5" />
      <text x="20" y="310" font-size="12" fill="#64748b" font-weight="bold">x</text>
      <line x1="80" y1="260" x2="220" y2="260" stroke="#94a3b8" stroke-width="1.5" />
      <text x="225" y="265" font-size="12" fill="#64748b" font-weight="bold">y</text>

      <!-- Đường thẳng Delta -->
      <line x1="${lineX1}" y1="${lineY1}" x2="${lineX2}" y2="${lineY2}" stroke="#64748b" stroke-width="2.5" />
      <text x="${lineX2 + 8}" y="${lineY2}" font-size="14" fill="#334155" font-weight="bold">Δ</text>

      <!-- Vectơ chỉ phương u tại M0 -->
      <line x1="${m0x}" y1="${m0y}" x2="${m0x + ux}" y2="${m0y + uy}" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowBlue)" />
      <text x="${m0x + ux / 2 - 10}" y="${m0y + uy / 2 - 12}" font-size="12" fill="#2563eb" font-weight="bold">u⃗ (VTCP)</text>

      <!-- Điểm M0 -->
      <circle cx="${m0x}" cy="${m0y}" r="5" fill="#047857" />
      <text x="${m0x - 12}" y="${m0y + 18}" font-size="12" fill="#047857" font-weight="bold">M₀(1; 1; 2)</text>

      <!-- Đoạn nối từ M0 đến M (vectơ t*u) -->
      <line x1="${m0x}" y1="${m0y}" x2="${mx}" y2="${my}" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 3" />

      <!-- Điểm chuyển động M -->
      <circle cx="${mx}" cy="${my}" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
      <text x="${mx + 10}" y="${my - 8}" font-size="13" fill="#dc2626" font-weight="bold">M(t)</text>
    `;

    svg.innerHTML = html;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## 7. Các ví dụ áp dụng chi tiết

### Ví dụ 1: Viết phương trình tham số và chính tắc của đường thẳng

Trong không gian $Oxyz$, cho hai điểm $A(1; -2; 3)$ và $B(3; 0; -1)$.  
a) Viết phương trình tham số của đường thẳng $AB$.  
b) Viết phương trình chính tắc của đường thẳng $AB$.

#### Lời giải:
a) Đường thẳng $AB$ nhận vectơ $\vec{AB}$ làm vectơ chỉ phương:
$$\vec{AB} = (3 - 1; \, 0 - (-2); \, -1 - 3) = (2; 2; -4)$$
Rút gọn VTCP: chọn $\vec{u} = \frac{1}{2}\vec{AB} = (1; 1; -2)$.  
Đường thẳng $AB$ đi qua $A(1; -2; 3)$ có phương trình tham số là:
$$\begin{cases} x = 1 + t \\ y = -2 + t \\ z = 3 - 2t \end{cases} \quad (t \in \mathbb{R})$$

b) Vì các thành phần của $\vec{u}$ đều khác 0 ($1, 1, -2 \neq 0$), phương trình chính tắc của $AB$ là:
$$\frac{x - 1}{1} = \frac{y + 2}{1} = \frac{z - 3}{-2}$$

---

### Ví dụ 2: Lập phương trình đường thẳng vuông góc với mặt phẳng

Viết phương trình đường thẳng $d$ đi qua điểm $M(2; -1; 1)$ và vuông góc với mặt phẳng $(P): 2x - 3y + z - 5 = 0$.

#### Lời giải:
Mặt phẳng $(P)$ có VTPT $\vec{n}_P = (2; -3; 1)$.  
Vì đường thẳng $d \perp (P)$ nên vectơ chỉ phương $\vec{u}_d$ của đường thẳng $d$ cùng phương với $\vec{n}_P$.  
Chọn $\vec{u}_d = \vec{n}_P = (2; -3; 1)$.  
Đường thẳng $d$ đi qua $M(2; -1; 1)$ có phương trình chính tắc là:
$$\frac{x - 2}{2} = \frac{y + 1}{-3} = \frac{z - 1}{1}$$

---

### Ví dụ 3: Xét vị trí tương đối giữa hai đường thẳng

Xét vị trí tương đối giữa hai đường thẳng:
$$d_1: \frac{x - 1}{2} = \frac{y - 2}{-1} = \frac{z + 1}{1} \quad \text{và} \quad d_2: \begin{cases} x = 1 + t \\ y = -1 + 2t \\ z = 2 - t \end{cases}$$

#### Lời giải:
- $d_1$ đi qua $M_1(1; 2; -1)$ có VTCP $\vec{u}_1 = (2; -1; 1)$.
- $d_2$ đi qua $M_2(1; -1; 2)$ có VTCP $\vec{u}_2 = (1; 2; -1)$.
- Xét tỉ số: $\frac{2}{1} \neq \frac{-1}{2} \implies \vec{u}_1$ và $\vec{u}_2$ không cùng phương (loại trường hợp song song và trùng nhau).
- Tính tích có hướng:
  $$[\vec{u}_1, \vec{u}_2] = ((-1)(-1) - 1(2); \, 1(1) - 2(-1); \, 2(2) - (-1)(1)) = (-1; 3; 5)$$
- Ta có $\vec{M_1 M_2} = (1 - 1; \, -1 - 2; \, 2 - (-1)) = (0; -3; 3)$.
- Tích hỗn tạp:
  $$[\vec{u}_1, \vec{u}_2] \cdot \vec{M_1 M_2} = (-1)(0) + 3(-3) + 5(3) = 0 - 9 + 15 = 6 \neq 0$$
- Vì $[\vec{u}_1, \vec{u}_2] \cdot \vec{M_1 M_2} \neq 0$, ba vectơ không đồng phẳng.  
  **Kết luận:** Hai đường thẳng $d_1$ và $d_2$ **chéo nhau**.

---

## 8. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Trong không gian $Oxyz$, đường thẳng $d: \\begin{cases} x = 1 - 2t \\\\ y = 3 + t \\\\ z = -1 + 4t \\end{cases}$ có một vectơ chỉ phương là:",
  "options": [
    "A. $\\vec{u} = (1; 3; -1)$",
    "B. $\\vec{u} = (-2; 1; 4)$",
    "C. $\\vec{u} = (2; 1; 4)$",
    "D. $\\vec{u} = (-2; 3; 4)$"
  ],
  "answer": "B. $\\vec{u} = (-2; 1; 4)$",
  "explanation": "Toạ độ VTCP là các hệ số đứng trước tham số $t$: $\\vec{u} = (-2; 1; 4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Điểm nào sau đây thuộc đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{-2} = \\frac{z}{3}$?",
  "options": [
    "A. $M(2; -1; 0)$",
    "B. $N(-2; 1; 0)$",
    "C. $P(1; -2; 3)$",
    "D. $Q(3; 1; 3)$"
  ],
  "answer": "A. $M(2; -1; 0)$",
  "explanation": "Thay toạ độ $M(2; -1; 0)$ vào phương trình: $\\frac{2 - 2}{1} = \\frac{-1 + 1}{-2} = \\frac{0}{3} = 0$ (thỏa mãn)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phương trình chính tắc của đường thẳng đi qua $M(1; -3; 2)$ và có VTCP $\\vec{u} = (2; 5; -1)$ là:",
  "options": [
    "A. $\\frac{x - 1}{2} = \\frac{y + 3}{5} = \\frac{z - 2}{-1}$",
    "B. $\\frac{x + 1}{2} = \\frac{y - 3}{5} = \\frac{z + 2}{-1}$",
    "C. $\\frac{x - 2}{1} = \\frac{y - 5}{-3} = \\frac{z + 1}{2}$",
    "D. $\\frac{x - 1}{2} = \\frac{y - 3}{5} = \\frac{z - 2}{-1}$"
  ],
  "answer": "A. $\\frac{x - 1}{2} = \\frac{y + 3}{5} = \\frac{z - 2}{-1}$",
  "explanation": "Công thức chính tắc: $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\implies \\frac{x - 1}{2} = \\frac{y + 3}{5} = \\frac{z - 2}{-1}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đường thẳng đi qua hai điểm $A(1; 2; 3)$ và $B(2; 4; 1)$ có một vectơ chỉ phương là:",
  "options": [
    "A. $\\vec{u} = (1; 2; -2)$",
    "B. $\\vec{u} = (3; 6; 4)$",
    "C. $\\vec{u} = (-1; 2; 2)$",
    "D. $\\vec{u} = (1; 2; 2)$"
  ],
  "answer": "A. $\\vec{u} = (1; 2; -2)$",
  "explanation": "$\\vec{AB} = (2 - 1; 4 - 2; 1 - 3) = (1; 2; -2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Trục cao độ $Oz$ có phương trình tham số là:",
  "options": [
    "A. $\\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$",
    "B. $\\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}$",
    "C. $\\begin{cases} x = 0 \\\\ y = t \\\\ z = 0 \\end{cases}$",
    "D. $\\begin{cases} x = t \\\\ y = t \\\\ z = 0 \\end{cases}$"
  ],
  "answer": "A. $\\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$",
  "explanation": "Trục $Oz$ đi qua gốc $O(0; 0; 0)$ và nhận vectơ đơn vị $\\vec{k} = (0; 0; 1)$ làm VTCP, nên phương trình là $x = 0, y = 0, z = t$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = -1 + 2t \\\\ z = 3 - t \\end{cases}$ và mặt phẳng $(P): 2x - y + 3z - 5 = 0$ có vị trí tương đối là:",
  "options": [
    "A. $d$ song song với $(P)$",
    "B. $d$ nằm trong $(P)$",
    "C. $d$ vuông góc với $(P)$",
    "D. $d$ cắt $(P)$ tại một điểm duy nhất"
  ],
  "answer": "D. $d$ cắt $(P)$ tại một điểm duy nhất",
  "explanation": "Ta có $\\vec{u}_d = (1; 2; -1)$ và $\\vec{n}_P = (2; -1; 3)$. Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 1(2) + 2(-1) + (-1)(3) = 2 - 2 - 3 = -3 \\neq 0$. Vì tích vô hướng khác 0 nên $d$ cắt $(P)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Giá trị của tham số $m$ để đường thẳng $d: \\frac{x - 1}{m} = \\frac{y + 2}{2} = \\frac{z - 3}{-1}$ vuông góc với mặt phẳng $(P): 2x + 4y - 2z + 1 = 0$ là:",
  "options": [
    "A. $m = 1$",
    "B. $m = 2$",
    "C. $m = 4$",
    "D. $m = -1$"
  ],
  "answer": "A. $m = 1$",
  "explanation": "$d \\perp (P) \\iff \\vec{u}_d$ cùng phương $\\vec{n}_P \\iff \\frac{m}{2} = \\frac{2}{4} = \\frac{-1}{-2} = \\frac{1}{2} \\implies m = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Giao điểm của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{1}$ với mặt phẳng $(Oxy)$ có toạ độ là:",
  "options": [
    "A. $(1; -1; 0)$",
    "B. $(3; -2; 0)$",
    "C. $(-1; 0; 0)$",
    "D. $(0; 0; 0)$"
  ],
  "answer": "A. $(1; -1; 0)$",
  "explanation": "Mặt phẳng $(Oxy)$ có phương trình $z = 0$. Thay $z = 0$ vào phương trình $d$: $\\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{0}{1} = 0 \\implies x - 1 = 0 \\implies x = 1$ và $y + 1 = 0 \\implies y = -1$. Vậy giao điểm là $(1; -1; 0)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{3}$ và $d_2: \\frac{x - 2}{2} = \\frac{y - 4}{4} = \\frac{z - 6}{6}$. Khẳng định nào sau đây đúng?",
  "options": [
    "A. $d_1 \\parallel d_2$",
    "B. $d_1 \\equiv d_2$",
    "C. $d_1$ cắt $d_2$",
    "D. $d_1, d_2$ chéo nhau"
  ],
  "answer": "B. $d_1 \\equiv d_2$",
  "explanation": "VTCP $\\vec{u}_2 = (2; 4; 6) = 2(1; 2; 3) = 2\\vec{u}_1$. Điểm $M_1(1; 2; 3) \\in d_1$, thay vào $d_2$: $\\frac{1 - 2}{2} = \\frac{2 - 4}{4} = \\frac{3 - 6}{6} = -\\frac{1}{2}$ (thỏa mãn $\\implies M_1 \\in d_2$). Do đó hai đường thẳng trùng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Hình chiếu vuông góc của điểm $A(1; 2; 3)$ lên mặt phẳng toạ độ $(Oxy)$ có toạ độ là:",
  "options": [
    "A. $(1; 2; 0)$",
    "B. $(1; 0; 3)$",
    "C. $(0; 2; 3)$",
    "D. $(0; 0; 3)$"
  ],
  "answer": "A. $(1; 2; 0)$",
  "explanation": "Chiếu điểm $A(x_0; y_0; z_0)$ lên mặt phẳng toạ độ $(Oxy)$ thì giữ nguyên $x, y$ và cho cao độ $z = 0$, được điểm $(1; 2; 0)$."
}'></div>
