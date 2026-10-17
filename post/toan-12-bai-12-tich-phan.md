---
title: 'Toán 12 Bài 12: Tích phân'
description: 'Lý thuyết trọng tâm Bài 12 Toán 12 Kết nối tri thức: Định nghĩa tích phân, công thức Newton-Leibniz, ý nghĩa hình học, tính chất, phương pháp đổi biến số, tích phân từng phần kèm mô phỏng trực quan xấp xỉ Riemann và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Giải tích
  - Tích phân
  - Định lý Newton-Leibniz
  - Riemann Sum
  - Đổi biến số
  - Kết nối tri thức
grade: 12
---

# Bài 12. Tích phân

Từ thời cổ đại, loài người đã biết cách tính diện tích của những hình có cạnh thẳng như tam giác, hình vuông hay tứ giác. Nhưng làm thế nào để tính chính xác diện tích của một hình phẳng có biên là đường cong bất kỳ (như đường cong parabol, đường cong của bờ sông, hay mặt cắt của cánh máy bay)?

Vào thế kỷ 17, hai nhà bác học vĩ đại **Isaac Newton** và **Gottfried Wilhelm Leibniz** đã độc lập tìm ra mối liên hệ kỳ diệu giữa bài toán diện tích hình thang cong và bài toán tìm nguyên hàm. Phát kiến thiên tài này được đúc kết thành **Công thức Newton – Leibniz**, khai sinh ra phép tính **Tích phân** – một trong những thành tựu vĩ đại nhất của lịch sử tư duy toán học nhân loại.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: TÍCH PHÂN XÁC ĐỊNH</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Định nghĩa Newton-Leibniz</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\mathbf{\int_a^b f(x)dx = \left. F(x) \right|_a^b = F(b) - F(a)}$.<br>
• $a$: cận dưới, $b$: cận trên.<br>
• Giá trị tích phân là một <strong>con số cụ thể</strong> (không phụ thuộc vào biến $x, t, u$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Ý nghĩa hình học</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Nếu $f(x) \ge 0$ trên $[a; b]$:<br>
$\mathbf{S = \int_a^b f(x)dx}$.<br>
• Diện tích của hình thang cong giới hạn bởi đồ thị $y = f(x)$, $Ox$, $x = a$, $x = b$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất quan trọng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\int_a^a f(x)dx = 0$; $\int_b^a = -\int_a^b$.<br>
• Tuyến tính: tích phân của tổng/hiệu và nhân hệ số.<br>
• Chèn cận: $\mathbf{\int_a^b = \int_a^c + \int_c^b}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Phương pháp tính</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Đổi biến: <strong>Bắt buộc đổi cận</strong> tương ứng.<br>
• Từng phần:<br>
$\mathbf{\int_a^b u \, dv = \left. (u \cdot v) \right|_a^b - \int_a^b v \, du}$.
</p>
</div>
</div>
</div>

---

## 1. Định nghĩa tích phân

::: tip Định nghĩa tích phân (Công thức Newton – Leibniz)
Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Giả sử $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên $[a; b]$.  
Hiệu số $F(b) - F(a)$ được gọi là **tích phân** của hàm số $f(x)$ từ $a$ đến $b$, kí hiệu là:
$$\int_a^b f(x) \, dx$$
Ta viết:
$$\int_a^b f(x) \, dx = \left. F(x) \right|_a^b = F(b) - F(a)$$
:::

Trong đó:
- $a$ là **cận dưới**, $b$ là **cận trên**.
- $f(x)$ là hàm số dưới dấu tích phân, $f(x)dx$ là biểu thức vi phân dưới dấu tích phân.

### Các quy ước quan trọng:
1. Khi cận dưới bằng cận trên: $\int_a^a f(x) \, dx = 0$.
2. Đổi chỗ hai cận thì tích phân đổi dấu: $\int_a^b f(x) \, dx = - \int_b^a f(x) \, dx$.
3. **Tính độc lập đối với kí hiệu biến số:** Giá trị của tích phân xác định chỉ phụ thuộc vào hàm số $f$ và hai cận $a, b$, hoàn toàn không phụ thuộc vào tên gọi của biến số:
   $$\int_a^b f(x) \, dx = \int_a^b f(t) \, dt = \int_a^b f(u) \, du = \dots$$

---

## 2. Ý nghĩa hình học của tích phân & Mô phỏng tổng Riemann

Nếu hàm số $y = f(x)$ liên tục và **không âm** ($f(x) \ge 0$) trên đoạn $[a; b]$ thì tích phân $\int_a^b f(x) \, dx$ chính là **diện tích $S$** của hình thang cong giới hạn bởi:
- Đồ thị hàm số $y = f(x)$;
- Trục hoành $Ox$ ($y = 0$);
- Hai đường thẳng biên $x = a$ và $x = b$.

$$S = \int_a^b f(x) \, dx$$

### Mô phỏng xấp xỉ tổng Riemann (Riemann Sum)
Để tính diện tích hình cong, nhà toán học Bernhard Riemann chia đoạn $[a; b]$ thành $N$ hình chữ nhật hẹp. Khi số hình chữ nhật $N \to +\infty$, tổng diện tích của các hình chữ nhật này sẽ hội tụ chính xác về diện tích hình thang cong $\int_a^b f(x)dx$.

Dưới đây là mô phỏng trực quan hàm số $f(x) = 0.3x^2 + 1$ trên đoạn $[0; 4]$. Hãy kéo thanh trượt để thay đổi **số phân hoạch $N$** từ 4 đến 50 và quan sát sự tiệm cận của tổng diện tích:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Số dải phân hoạch $N$: <span id="val-n" style="color: #2563eb; font-weight: bold;">8</span></label><br>
      <input type="range" id="slider-n" min="4" max="50" value="8" step="1" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <div style="background: var(--card-bg, #ffffff); padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
        <strong>Tổng Riemann $S_N$:</strong> <span id="val-approx" style="color: #047857; font-weight: bold;">10.40</span>
      </div>
      <div style="background: var(--card-bg, #ffffff); padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
        <strong>Tích phân chuẩn $S$:</strong> <span style="color: #dc2626; font-weight: bold;">10.40</span>
      </div>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 320px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="riemann-svg" data-interactive-done="true" viewBox="0 0 700 320" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Tích phân thực sự: $\int_0^4 (0.3x^2 + 1)dx = \left.\left(0.1x^3 + x\right)\right|_0^4 = 0.1(64) + 4 = 10.40$. Khi $N$ càng lớn, phần dư giữa hình chữ nhật và đường cong biến mất!
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('riemann-svg');
  const sliderN = document.getElementById('slider-n');
  const valN = document.getElementById('val-n');
  const valApprox = document.getElementById('val-approx');

  if (!svg || !sliderN) return;

  const a = 0, b = 4;
  function f(x) { return 0.3 * x * x + 1; }

  const W = 700, H = 320;
  const padL = 70, padR = 40, padT = 30, padB = 40;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxY = 6.5;

  function toScreenX(x) { return padL + (x / 4.5) * plotW; }
  function toScreenY(y) { return (H - padB) - (y / maxY) * plotH; }

  function render() {
    const N = parseInt(sliderN.value, 10);
    valN.textContent = N;

    const dx = (b - a) / N;
    let sumArea = 0;
    let rectsHtml = '';

    for (let i = 0; i < N; i++) {
      const xi = a + i * dx;
      const xMid = xi + dx / 2; // Trung điểm Riemann
      const yi = f(xMid);
      sumArea += yi * dx;

      const rx = toScreenX(xi);
      const rw = toScreenX(xi + dx) - rx;
      const ry = toScreenY(yi);
      const rh = toScreenY(0) - ry;

      rectsHtml += `<rect x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" width="${rw.toFixed(1)}" height="${rh.toFixed(1)}" fill="rgba(37, 99, 235, 0.28)" stroke="#2563eb" stroke-width="1" />`;
    }

    valApprox.textContent = sumArea.toFixed(2);

    // Đường cong f(x)
    let curvePath = `M ${toScreenX(0)} ${toScreenY(f(0))}`;
    for (let x = 0; x <= 4.2; x += 0.05) {
      curvePath += ` L ${toScreenX(x).toFixed(1)} ${toScreenY(f(x)).toFixed(1)}`;
    }

    const baseY = toScreenY(0);

    let html = `
      <!-- Trục toạ độ -->
      <line x1="${padL - 20}" y1="${baseY}" x2="${W - 20}" y2="${baseY}" stroke="#64748b" stroke-width="1.5" />
      <polygon points="${W-15},${baseY} ${W-25},${baseY-4} ${W-25},${baseY+4}" fill="#64748b" />
      <text x="${W-25}" y="${baseY + 22}" font-size="12" fill="#64748b" font-weight="bold">x</text>

      <line x1="${toScreenX(0)}" y1="${H - 20}" x2="${toScreenX(0)}" y2="15" stroke="#64748b" stroke-width="1.5" />
      <polygon points="${toScreenX(0)},10 ${toScreenX(0)-4},20 ${toScreenX(0)+4},20" fill="#64748b" />
      <text x="${toScreenX(0) - 18}" y="20" font-size="12" fill="#64748b" font-weight="bold">y</text>

      <!-- Vạch số x = 0..4 -->
    `;

    for (let x = 1; x <= 4; x++) {
      const sx = toScreenX(x);
      html += `
        <line x1="${sx}" y1="${baseY}" x2="${sx}" y2="${baseY + 5}" stroke="#94a3b8" />
        <text x="${sx}" y="${baseY + 18}" font-size="11" fill="#64748b" text-anchor="middle">${x}</text>
      `;
    }

    for (let y = 1; y <= 6; y++) {
      const sy = toScreenY(y);
      html += `
        <line x1="${toScreenX(0) - 5}" y1="${sy}" x2="${toScreenX(0)}" y2="${sy}" stroke="#94a3b8" />
        <text x="${toScreenX(0) - 10}" y="${sy + 4}" font-size="11" fill="#64748b" text-anchor="end">${y}</text>
      `;
    }

    html += `
      <!-- Các hình chữ nhật Riemann -->
      ${rectsHtml}
      <!-- Đường cong y = f(x) -->
      <path d="${curvePath}" fill="none" stroke="#dc2626" stroke-width="2.5" />
      <text x="${toScreenX(3.5)}" y="${toScreenY(f(3.5)) - 10}" font-size="12" fill="#dc2626" font-weight="bold">y = 0.3x² + 1</text>
    `;

    svg.innerHTML = html;
  }

  sliderN.addEventListener('input', render);
  render();
})();
</script>

---

## 3. Các tính chất quan trọng của tích phân

Giả sử $f(x), g(x)$ liên tục trên đoạn $[a; b]$ và $k, c \in \mathbb{R}$:

::: tip Tính chất 1: Đưa hằng số ra ngoài dấu tích phân
$$\int_a^b k \cdot f(x) \, dx = k \int_a^b f(x) \, dx$$
:::

::: tip Tính chất 2: Tích phân của tổng và hiệu
$$\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$$
:::

::: tip Tính chất 3: Chèn cận (Tính chất cộng đoạn)
Với ba số bất kì $a, b, c$:
$$\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$$
*(Tính chất này đặc biệt hữu ích khi tính tích phân của hàm số cho bởi nhiều công thức khác nhau trên các khoảng, hoặc hàm số chứa dấu giá trị tuyệt đối $|f(x)|$)*.
:::

::: tip Tính chất 4: So sánh độ lớn
Nếu $f(x) \ge 0$ với mọi $x \in [a; b]$ ($a \le b$) thì:
$$\int_a^b f(x) \, dx \ge 0$$
Đặc biệt, nếu $f(x) \ge g(x)$ trên $[a; b]$ thì $\int_a^b f(x) \, dx \ge \int_a^b g(x) \, dx$.
:::

---

## 4. Các phương pháp tính tích phân

### 4.1. Phương pháp đổi biến số

::: tip Công thức đổi biến số
Cho hàm số $u = u(x)$ có đạo hàm liên tục trên $[a; b]$ và $y = f(u)$ liên tục trên đoạn giá trị của $u(x)$. Khi đó:
$$\int_a^b f(u(x)) \cdot u'(x) \, dx = \int_{u(a)}^{u(b)} f(u) \, du$$
:::

> [!IMPORTANT]
> **BƯỚC BẮT BUỘC KHI TÍNH TÍCH PHÂN BẰNG PHƯƠNG PHÁP ĐỔI BIẾN: ĐỔI CẬN!**  
> Khi đổi biến $x \to u$, phải lập tức tìm cận mới:
> - $x = a \implies u = u(a)$ (cận dưới mới).
> - $x = b \implies u = u(b)$ (cận trên mới).  
> **Sau khi tính xong theo biến $u$, ta thay trực tiếp cận mới vào mà KHÔNG CẦN chuyển ngược về biến $x$ như ở bài toán nguyên hàm!**

### 4.2. Phương pháp tích phân từng phần

::: tip Công thức tích phân từng phần
Nếu $u(x)$ và $v(x)$ có đạo hàm liên tục trên đoạn $[a; b]$ thì:
$$\int_a^b u \, dv = \left. (u \cdot v) \right|_a^b - \int_a^b v \, du$$
:::

Cách chọn $u$ và $dv$ tuân theo đúng thứ tự ưu tiên: **"Nhất log, nhì đa, tam lượng, tứ mũ"**.

---

## 5. Các ví dụ minh họa có lời giải chi tiết

### Ví dụ 1: Tính tích phân cơ bản bằng định lý Newton – Leibniz

Tính các tích phân sau:  
a) $I_1 = \int_1^2 (3x^2 - 2x + 1) \, dx$  
b) $I_2 = \int_0^{\pi/2} \cos x \, dx$  
c) $I_3 = \int_1^e \frac{1}{x} \, dx$

#### Lời giải:
a) Nguyên hàm của $3x^2 - 2x + 1$ là $F(x) = x^3 - x^2 + x$:
$$I_1 = \left. (x^3 - x^2 + x) \right|_1^2 = (2^3 - 2^2 + 2) - (1^3 - 1^2 + 1) = (8 - 4 + 2) - 1 = 6 - 1 = 5$$

b) Nguyên hàm của $\cos x$ là $\sin x$:
$$I_2 = \left. \sin x \right|_0^{\pi/2} = \sin\left(\frac{\pi}{2}\right) - \sin(0) = 1 - 0 = 1$$

c) Nguyên hàm của $\frac{1}{x}$ trên $[1; e]$ là $\ln x$:
$$I_3 = \left. \ln x \right|_1^e = \ln e - \ln 1 = 1 - 0 = 1$$

---

### Ví dụ 2: Phương pháp đổi biến số

Tính tích phân $I = \int_0^1 2x(x^2 + 1)^3 \, dx$.

#### Lời giải:
- Đặt $u = x^2 + 1 \implies du = 2x \, dx$.
- **Đổi cận:**
  - Khi $x = 0 \implies u = 0^2 + 1 = 1$.
  - Khi $x = 1 \implies u = 1^2 + 1 = 2$.
- Thay vào tích phân theo biến $u$:
  $$I = \int_1^2 u^3 \, du = \left. \frac{u^4}{4} \right|_1^2 = \frac{2^4}{4} - \frac{1^4}{4} = \frac{16}{4} - \frac{1}{4} = \frac{15}{4} = 3.75$$

---

### Ví dụ 3: Phương pháp tích phân từng phần

Tính tích phân $I = \int_0^1 x e^x \, dx$.

#### Lời giải:
Áp dụng phương pháp từng phần:
$$\begin{cases} u = x \\ dv = e^x dx \end{cases} \implies \begin{cases} du = dx \\ v = e^x \end{cases}$$

Áp dụng công thức $\int_a^b u \, dv = \left. uv \right|_a^b - \int_a^b v \, du$:
$$I = \left. (x e^x) \right|_0^1 - \int_0^1 e^x \, dx = (1 \cdot e^1 - 0 \cdot e^0) - \left. e^x \right|_0^1 = e - (e^1 - e^0) = e - e + 1 = 1$$

---

### Ví dụ 4: Tính tích phân có chứa dấu giá trị tuyệt đối

Tính tích phân $I = \int_0^3 |x - 1| \, dx$.

#### Lời giải:
Xét dấu của biểu thức $x - 1$ trên đoạn $[0; 3]$:
- Với $x \in [0; 1]$ thì $x - 1 \le 0 \implies |x - 1| = -(x - 1) = 1 - x$.
- Với $x \in [1; 3]$ thì $x - 1 \ge 0 \implies |x - 1| = x - 1$.

Chèn điểm $c = 1$ vào tích phân:
$$I = \int_0^1 |x - 1| \, dx + \int_1^3 |x - 1| \, dx = \int_0^1 (1 - x) \, dx + \int_1^3 (x - 1) \, dx$$
- Tích phân thứ nhất: $\left.\left(x - \frac{x^2}{2}\right)\right|_0^1 = 1 - \frac{1}{2} = \frac{1}{2}$.
- Tích phân thứ hai: $\left.\left(\frac{x^2}{2} - x\right)\right|_1^3 = \left(\frac{9}{2} - 3\right) - \left(\frac{1}{2} - 1\right) = \frac{3}{2} - \left(-\frac{1}{2}\right) = 2$.

Vậy:
$$I = \frac{1}{2} + 2 = \frac{5}{2} = 2.5$$

---

## 6. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Cho $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên đoạn $[a; b]$. Công thức Newton-Leibniz khẳng định rằng:",
  "options": [
    "A. $\\int_a^b f(x)dx = F(a) - F(b)$",
    "B. $\\int_a^b f(x)dx = F(b) - F(a)$",
    "C. $\\int_a^b f(x)dx = F'(b) - F'(a)$",
    "D. $\\int_a^b f(x)dx = F(b) + F(a)$"
  ],
  "answer": "B. $\\int_a^b f(x)dx = F(b) - F(a)$",
  "explanation": "Theo định lý cơ bản của giải tích (công thức Newton-Leibniz): $\\int_a^b f(x)dx = F(b) - F(a)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biết $\\int_1^3 f(x)dx = 6$ và $\\int_3^5 f(x)dx = -2$. Giá trị của $\\int_1^5 f(x)dx$ bằng:",
  "options": [
    "A. 8",
    "B. -12",
    "C. 4",
    "D. -8"
  ],
  "answer": "C. 4",
  "explanation": "Theo tính chất chèn cận: $\\int_1^5 f(x)dx = \\int_1^3 f(x)dx + \\int_3^5 f(x)dx = 6 + (-2) = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tích phân $I = \\int_0^2 (2x - 3) dx$ có giá trị bằng:",
  "options": [
    "A. -2",
    "B. 2",
    "C. -4",
    "D. 0"
  ],
  "answer": "A. -2",
  "explanation": "Nguyên hàm là $x^2 - 3x$. Thay cận: $(2^2 - 3 \\cdot 2) - (0) = 4 - 6 = -2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biết $\\int_0^1 f(x)dx = 3$. Giá trị của $\\int_0^1 4f(x)dx$ bằng:",
  "options": [
    "A. 7",
    "B. 12",
    "C. $\\frac{3}{4}$",
    "D. 1"
  ],
  "answer": "B. 12",
  "explanation": "$\\int_0^1 4f(x)dx = 4 \\int_0^1 f(x)dx = 4 \\cdot 3 = 12$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $\\int_0^2 f(x)dx = 5$. Giá trị của $\\int_2^0 f(x)dx$ là:",
  "options": [
    "A. 5",
    "B. -5",
    "C. 0",
    "D. $\\frac{1}{5}$"
  ],
  "answer": "B. -5",
  "explanation": "Đổi vị trí hai cận làm đổi dấu tích phân: $\\int_2^0 f(x)dx = -\\int_0^2 f(x)dx = -5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính tích phân $I = \\int_0^1 e^{3x} dx$.",
  "options": [
    "A. $e^3 - 1$",
    "B. $\\frac{e^3 - 1}{3}$",
    "C. $\\frac{e^3}{3}$",
    "D. $3(e^3 - 1)$"
  ],
  "answer": "B. $\\frac{e^3 - 1}{3}$",
  "explanation": "Nguyên hàm của $e^{3x}$ là $\\frac{1}{3} e^{3x}$. Thay cận: $\\left.\\left(\\frac{1}{3}e^{3x}\\right)\\right|_0^1 = \\frac{1}{3}(e^3 - e^0) = \\frac{e^3 - 1}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khi đổi biến $u = 2x + 1$ để tính tích phân $I = \\int_0^2 f(2x+1)dx$, tích phân $I$ trở thành:",
  "options": [
    "A. $\\int_1^5 f(u)du$",
    "B. $2 \\int_1^5 f(u)du$",
    "C. $\\frac{1}{2} \\int_1^5 f(u)du$",
    "D. $\\frac{1}{2} \\int_0^2 f(u)du$"
  ],
  "answer": "C. $\\frac{1}{2} \\int_1^5 f(u)du$",
  "explanation": "Ta có $du = 2dx \\implies dx = \\frac{1}{2}du$. Cận: $x = 0 \\implies u = 1$; $x = 2 \\implies u = 5$. Vậy $I = \\frac{1}{2} \\int_1^5 f(u)du$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính tích phân $I = \\int_1^e \\ln x \\, dx$.",
  "options": [
    "A. 1",
    "B. $e - 1$",
    "C. $e$",
    "D. 0"
  ],
  "answer": "A. 1",
  "explanation": "Từng phần: Đặt $u = \\ln x \\implies du = \\frac{dx}{x}$; $dv = dx \\implies v = x$. Khi đó $I = \\left.(x\\ln x)\\right|_1^e - \\int_1^e x \\cdot \\frac{dx}{x} = (e \\ln e - 1 \\ln 1) - \\left.x\\right|_1^e = e - (e - 1) = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $f(x)$ là hàm số lẻ và liên tục trên đoạn $[-a; a]$. Giá trị của $\\int_{-a}^a f(x)dx$ luôn bằng:",
  "options": [
    "A. $2\\int_0^a f(x)dx$",
    "B. 0",
    "C. $a$",
    "D. Không xác định được"
  ],
  "answer": "B. 0",
  "explanation": "Với hàm lẻ $f(-x) = -f(x)$, đồ thị nhận gốc toạ độ $O$ làm tâm đối xứng. Phần diện tích phía trên và phía dưới trục hoành triệt tiêu nhau, do đó $\\int_{-a}^a f(x)dx = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nếu $\\int_0^m (2x - 4) dx = 0$ với $m > 0$ thì giá trị của $m$ là:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 8",
    "D. 1"
  ],
  "answer": "B. 4",
  "explanation": "Ta có $\\int_0^m (2x - 4)dx = \\left.(x^2 - 4x)\\right|_0^m = m^2 - 4m$. Phương trình $m^2 - 4m = 0 \\iff m(m - 4) = 0$. Vì $m > 0$ nên $m = 4$."
}'></div>
