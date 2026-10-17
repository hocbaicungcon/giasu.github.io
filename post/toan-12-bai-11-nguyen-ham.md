---
title: 'Toán 12 Bài 11: Nguyên hàm'
description: 'Lý thuyết trọng tâm Bài 11 Toán 12 Kết nối tri thức: Định nghĩa nguyên hàm, tính chất, bảng nguyên hàm cơ bản và mở rộng, phương pháp đổi biến số, nguyên hàm từng phần kèm mô phỏng trực quan họ đường cong và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Giải tích
  - Nguyên hàm
  - Tích phân
  - Đổi biến số
  - Từng phần
  - Kết nối tri thức
grade: 12
---

# Bài 11. Nguyên hàm

Ở học kỳ 1 và lớp 11, chúng ta đã thành thạo phép tính **đạo hàm**: Cho một hàm số $F(x)$, hãy tìm tốc độ biến thiên $f(x) = F'(x)$ của nó. Trong thực tế đời sống và khoa học kỹ thuật, bài toán ngược lại còn xuất hiện thường xuyên và mang tính quyết định hơn:
- Biết vận tốc biến thiên $v(t)$ của một tên lửa tại mỗi thời điểm, làm sao tính được quãng đường $s(t)$ mà nó đã bay?
- Biết tốc độ sinh trưởng của một quần thể vi khuẩn theo thời gian, làm sao xác định được tổng số cá thể sau $t$ giờ?
- Biết cường độ dòng điện tức thời $i(t) = q'(t)$, làm sao tính được điện tích $q(t)$ dịch chuyển qua tiết diện dây dẫn?

Phép toán "ngược" của đạo hàm chính là **phép tính nguyên hàm** (tìm lại hàm số gốc ban đầu khi biết đạo hàm của nó). Đây là nền tảng cốt lõi mở đường cho toàn bộ giải tích tích phân hiện đại.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY: KIẾN THỨC NGUYÊN HÀM</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Định nghĩa & Họ nguyên hàm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $F(x)$ là nguyên hàm của $f(x) \iff F'(x) = f(x)$.<br>
• Họ nguyên hàm: $\mathbf{\int f(x)dx = F(x) + C}$.<br>
• Hai nguyên hàm bất kì chỉ sai khác nhau một hằng số $C$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Tính chất cơ bản</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\left(\int f(x)dx\right)' = f(x)$ và $\int f'(x)dx = f(x) + C$.<br>
• $\int k \cdot f(x)dx = k\int f(x)dx$ ($k \neq 0$).<br>
• $\int [f(x) \pm g(x)]dx = \int f(x)dx \pm \int g(x)dx$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương pháp đổi biến số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Đặt $u = u(x) \implies du = u'(x)dx$.<br>
• $\mathbf{\int f(u(x))u'(x)dx = \int f(u)du = F(u) + C}$.<br>
• Trả về biến ban đầu $x$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Nguyên hàm từng phần</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Công thức: $\mathbf{\int u \, dv = u \cdot v - \int v \, du}$.<br>
• Thứ tự ưu tiên chọn $u$:<br>
<strong>"Nhất log, nhì đa, tam lượng, tứ mũ"</strong>.
</p>
</div>
</div>
</div>

---

## 1. Khái niệm nguyên hàm

::: tip Định nghĩa nguyên hàm
Cho hàm số $f(x)$ xác định trên một khoảng $K$ (hoặc một đoạn, nửa khoảng).  
Hàm số $F(x)$ được gọi là một **nguyên hàm** của hàm số $f(x)$ trên $K$ nếu:
$$F'(x) = f(x) \quad \forall x \in K$$
:::

### Định lý về họ nguyên hàm

1. Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên $K$ thì với mỗi hằng số $C$, hàm số $F(x) + C$ cũng là một nguyên hàm của $f(x)$ trên $K$.
2. Ngược lại, nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ trên $K$ đều có dạng $F(x) + C$, với $C$ là một hằng số thực.

::: tip Kí hiệu họ nguyên hàm
Biểu thức $\mathbf{F(x) + C}$ được gọi là **họ tất cả các nguyên hàm** (hay tích phân bất định) của hàm số $f(x)$ trên khoảng $K$, kí hiệu là:
$$\int f(x) \, dx = F(x) + C$$
- $\int$: Dấu tích phân (nguyên hàm).
- $f(x)$: Hàm số dưới dấu tích phân.
- $f(x)\,dx$: Biểu thức dưới dấu tích phân.
- $x$: Biến lấy tích phân.
- $C$: Hằng số tích phân tùy ý.
:::

---

## 2. Ý nghĩa hình học & Mô phỏng họ đường cong nguyên hàm

Về mặt hình học, đồ thị của các hàm số trong họ nguyên hàm $y = F(x) + C$ là một **họ các đường cong đồng dạng**, nhận được từ đồ thị $y = F(x)$ bằng các phép **tịnh tiến dọc theo trục tung $Oy$**.

Tại mọi điểm có cùng hoành độ $x_0$, tiếp tuyến của các đường cong này đều có cùng hệ số góc:
$$k = F'(x_0) = f(x_0)$$
Nghĩa là: **Các tiếp tuyến tại cùng một hoành độ $x_0$ luôn song song với nhau!**

Dưới đây là mô phỏng trực quan họ nguyên hàm $F(x) = \frac{x^3}{3} - x + C$ (tương ứng với đạo hàm $f(x) = x^2 - 1$). Hãy kéo thanh trượt để di chuyển điểm $x_0$ và thay đổi hằng số $C$:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Hoành độ tiếp điểm $x_0$: <span id="val-x0" style="color: #2563eb; font-weight: bold;">1.00</span></label><br>
      <input type="range" id="slider-x0" min="-2.0" max="2.0" value="1.0" step="0.05" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Đạo hàm tại $x_0$:</strong> $f(x_0) = x_0^2 - 1 = $ <span id="val-slope" style="color: #dc2626; font-weight: bold;">0.00</span> (Hệ số góc chung)
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 350px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="curves-svg" data-interactive-done="true" viewBox="0 0 700 350" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 12px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Mỗi đường cong màu sắc ứng với một hằng số $C \in \{-2, -1, 0, 1, 2\}$. Quan sát các đường tiếp tuyến đứt nét tại cùng hoành độ $x_0$ luôn song song với nhau!
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('curves-svg');
  const slider = document.getElementById('slider-x0');
  const valX0 = document.getElementById('val-x0');
  const valSlope = document.getElementById('val-slope');

  if (!svg || !slider) return;

  const W = 700, H = 350;
  const originX = W / 2, originY = H / 2;
  const scaleX = 90, scaleY = 45;

  function toScreenX(x) { return originX + x * scaleX; }
  function toScreenY(y) { return originY - y * scaleY; }

  function F(x, C) {
    return (Math.pow(x, 3) / 3) - x + C;
  }

  function f(x) {
    return Math.pow(x, 2) - 1;
  }

  const C_values = [-2, -1, 0, 1, 2];
  const colors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];

  function render() {
    const x0 = parseFloat(slider.value);
    const slope = f(x0);

    valX0.textContent = x0.toFixed(2);
    valSlope.textContent = slope.toFixed(2);

    let html = `
      <!-- Trục toạ độ -->
      <line x1="20" y1="${originY}" x2="${W - 20}" y2="${originY}" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="${W-15},${originY} ${W-25},${originY-4} ${W-25},${originY+4}" fill="#94a3b8" />
      <text x="${W-20}" y="${originY + 20}" font-size="12" fill="#64748b" font-weight="bold">x</text>

      <line x1="${originX}" y1="${H - 15}" x2="${originX}" y2="15" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="${originX},10 ${originX-4},20 ${originX+4},20" fill="#94a3b8" />
      <text x="${originX + 10}" y="20" font-size="12" fill="#64748b" font-weight="bold">y</text>

      <!-- Đường dóng thẳng đứng tại x0 -->
      <line x1="${toScreenX(x0)}" y1="10" x2="${toScreenX(x0)}" y2="${H-10}" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4" />
      <text x="${toScreenX(x0)}" y="${originY + 16}" font-size="11" fill="#2563eb" font-weight="bold" text-anchor="middle">x₀</text>
    `;

    // Vẽ từng đường cong F(x) + C
    C_values.forEach((C, idx) => {
      let d = '';
      const color = colors[idx];
      const startX = -2.8, endX = 2.8, step = 0.04;
      for (let x = startX; x <= endX; x += step) {
        const sx = toScreenX(x);
        const sy = toScreenY(F(x, C));
        d += (x === startX) ? `M ${sx.toFixed(1)} ${sy.toFixed(1)}` : ` L ${sx.toFixed(1)} ${sy.toFixed(1)}`;
      }
      html += `<path d="${d}" fill="none" stroke="${color}" stroke-width="2.2" opacity="0.85" />`;

      // Điểm tiếp xúc và tiếp tuyến tại x0
      const y0 = F(x0, C);
      const ptSx = toScreenX(x0);
      const ptSy = toScreenY(y0);

      // Đoạn tiếp tuyến cục bộ từ x0 - 0.7 đến x0 + 0.7
      const tLen = 0.6;
      const tanX1 = x0 - tLen, tanY1 = y0 - slope * tLen;
      const tanX2 = x0 + tLen, tanY2 = y0 + slope * tLen;

      // Label the curve where it is still inside the drawing area (the upper curves leave through the top).
      let labelX = 2.5;
      while (labelX > -2.5 && (toScreenY(F(labelX, C)) < 18 || toScreenY(F(labelX, C)) > H - 8)) labelX -= 0.1;

      html += `
        <line x1="${toScreenX(tanX1)}" y1="${toScreenY(tanY1)}" x2="${toScreenX(tanX2)}" y2="${toScreenY(tanY2)}" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3 3" />
        <circle cx="${ptSx}" cy="${ptSy}" r="4" fill="${color}" stroke="#ffffff" stroke-width="1.5" />
        <text x="${toScreenX(labelX)}" y="${toScreenY(F(labelX, C)) - 4}" font-size="10" fill="${color}" font-weight="bold">C = ${C}</text>
      `;
    });

    svg.innerHTML = html;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## 3. Các tính chất cơ bản của nguyên hàm

Với $f(x), g(x)$ là các hàm số có nguyên hàm trên khoảng $K$ và $k$ là số thực khác 0:

::: tip Tính chất 1: Đạo hàm của nguyên hàm
$$\left( \int f(x) \, dx \right)' = f(x)$$
$$\int f'(x) \, dx = f(x) + C$$
:::

::: tip Tính chất 2: Đưa thừa số không đổi ra ngoài
$$\int k \cdot f(x) \, dx = k \int f(x) \, dx \quad (k \neq 0)$$
:::

::: tip Tính chất 3: Nguyên hàm của tổng và hiệu
$$\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$
:::

---

## 4. Bảng nguyên hàm của các hàm số thường gặp

Dưới đây là bảng nguyên hàm cơ bản và mở rộng tương ứng với hàm hợp dạng bậc nhất $u = ax + b$ ($a \neq 0$):

| Hàm số cơ bản | Nguyên hàm cơ bản $\int f(x)dx$ | Nguyên hàm mở rộng $\int f(ax+b)dx$ ($a \neq 0$) |
| :--- | :--- | :--- |
| $f(x) = 0$ | $\int 0 \, dx = C$ | — |
| $f(x) = 1$ | $\int 1 \, dx = x + C$ | $\int k \, dx = kx + C$ |
| $f(x) = x^\alpha$ ($\alpha \neq -1$) | $\int x^\alpha \, dx = \frac{x^{\alpha+1}}{\alpha+1} + C$ | $\int (ax+b)^\alpha \, dx = \frac{1}{a} \cdot \frac{(ax+b)^{\alpha+1}}{\alpha+1} + C$ |
| $f(x) = \frac{1}{x}$ | $\int \frac{1}{x} \, dx = \ln|x| + C$ | $\int \frac{1}{ax+b} \, dx = \frac{1}{a} \ln|ax+b| + C$ |
| $f(x) = e^x$ | $\int e^x \, dx = e^x + C$ | $\int e^{ax+b} \, dx = \frac{1}{a} e^{ax+b} + C$ |
| $f(x) = a^x$ ($0 < a \neq 1$) | $\int a^x \, dx = \frac{a^x}{\ln a} + C$ | $\int a^{kx} \, dx = \frac{1}{k} \cdot \frac{a^{kx}}{\ln a} + C$ |
| $f(x) = \cos x$ | $\int \cos x \, dx = \sin x + C$ | $\int \cos(ax+b) \, dx = \frac{1}{a} \sin(ax+b) + C$ |
| $f(x) = \sin x$ | $\int \sin x \, dx = -\cos x + C$ | $\int \sin(ax+b) \, dx = -\frac{1}{a} \cos(ax+b) + C$ |
| $f(x) = \frac{1}{\cos^2 x} = 1 + \tan^2 x$ | $\int \frac{1}{\cos^2 x} \, dx = \tan x + C$ | $\int \frac{1}{\cos^2(ax+b)} \, dx = \frac{1}{a} \tan(ax+b) + C$ |
| $f(x) = \frac{1}{\sin^2 x} = 1 + \cot^2 x$ | $\int \frac{1}{\sin^2 x} \, dx = -\cot x + C$ | $\int \frac{1}{\sin^2(ax+b)} \, dx = -\frac{1}{a} \cot(ax+b) + C$ |

---

## 5. Hai phương pháp tính nguyên hàm căn bản

### 5.1. Phương pháp đổi biến số

::: tip Định lý đổi biến số
Cho hàm số $u = u(x)$ có đạo hàm liên tục trên khoảng $K$ và hàm số $y = f(u)$ liên tục trên miền giá trị của $u(x)$. Khi đó:
$$\int f(u(x)) \cdot u'(x) \, dx = \int f(u) \, du = F(u) + C = F(u(x)) + C$$
:::

**Quy trình 3 bước:**
1. **Bước 1:** Chọn biểu thức thích hợp để đặt ẩn phụ $u = u(x)$.
2. **Bước 2:** Tính vi phân $du = u'(x) \, dx$, biến đổi toàn bộ biểu thức dưới dấu tích phân theo $u$ và $du$.
3. **Bước 3:** Tính nguyên hàm theo biến $u$, sau đó thay ngược lại $u = u(x)$ để được kết quả theo biến $x$.

### 5.2. Phương pháp nguyên hàm từng phần

::: tip Công thức nguyên hàm từng phần
Nếu hai hàm số $u(x)$ và $v(x)$ có đạo hàm liên tục trên khoảng $K$ thì:
$$\int u \, dv = u \cdot v - \int v \, du$$
*(trong đó $du = u'(x)dx$ và $dv = v'(x)dx$)*
:::

**Khẩu quyết chọn $u$ và $dv$:**  
Khi gặp tích của hai hàm số khác loại trong các nhóm sau:
$$\text{Lôgarit} \longrightarrow \text{Đa thức} \longrightarrow \text{Lượng giác} \longrightarrow \text{Mũ}$$
**(Nhất log - Nhì đa - Tam lượng - Tứ mũ)**
- Hàm nào xuất hiện trước trong chuỗi ưu tiên trên thì **đặt làm $u$**.
- Phần còn lại kèm $dx$ sẽ được **đặt làm $dv$**.

---

## 6. Các ví dụ áp dụng chi tiết

### Ví dụ 1: Tính nguyên hàm bằng bảng công thức và phân tích

Tìm các họ nguyên hàm sau:
a) $I_1 = \int (3x^2 - 4x + 5) \, dx$  
b) $I_2 = \int \left( e^{3x} + \frac{2}{2x+1} \right) \, dx$  
c) $I_3 = \int \cos^2 x \, dx$

#### Lời giải:
a) Áp dụng tính chất tuyến tính và bảng nguyên hàm cơ bản:
$$I_1 = 3 \int x^2 dx - 4 \int x dx + 5 \int dx = 3 \cdot \frac{x^3}{3} - 4 \cdot \frac{x^2}{2} + 5x + C = x^3 - 2x^2 + 5x + C$$

b) Áp dụng công thức mở rộng cho hàm bậc nhất $ax + b$:
$$I_2 = \int e^{3x} dx + 2 \int \frac{1}{2x+1} dx = \frac{1}{3} e^{3x} + 2 \cdot \frac{1}{2} \ln|2x+1| + C = \frac{1}{3} e^{3x} + \ln|2x+1| + C$$

c) Dùng công thức hạ bậc $\cos^2 x = \frac{1 + \cos 2x}{2}$:
$$I_3 = \int \frac{1 + \cos 2x}{2} dx = \frac{1}{2} \int dx + \frac{1}{2} \int \cos 2x dx = \frac{1}{2} x + \frac{1}{4} \sin 2x + C$$

---

### Ví dụ 2: Phương pháp đổi biến số

Tính nguyên hàm $I = \int 2x \sqrt{x^2 + 1} \, dx$.

#### Lời giải:
- **Cách 1: Đặt $u = x^2 + 1$**  
  $\implies du = 2x \, dx$.  
  Khi đó:
  $$I = \int \sqrt{u} \, du = \int u^{\frac{1}{2}} \, du = \frac{u^{\frac{3}{2}}}{\frac{3}{2}} + C = \frac{2}{3} \sqrt{u^3} + C = \frac{2}{3} \sqrt{(x^2+1)^3} + C$$

- **Cách 2: Đặt căn làm ẩn phụ: $t = \sqrt{x^2 + 1}$**  
  $\implies t^2 = x^2 + 1 \implies 2t \, dt = 2x \, dx \implies x \, dx = t \, dt$.  
  Thay vào:
  $$I = \int t \cdot (2t \, dt) = 2 \int t^2 dt = \frac{2}{3} t^3 + C = \frac{2}{3} \sqrt{(x^2+1)^3} + C$$

---

### Ví dụ 3: Phương pháp nguyên hàm từng phần

Tính nguyên hàm $I = \int (2x + 1) e^x \, dx$.

#### Lời giải:
Biểu thức là tích của hàm đa thức $(2x+1)$ và hàm mũ $e^x$. Theo quy tắc "nhì đa, tứ mũ", ta đặt:
$$\begin{cases} u = 2x + 1 \\ dv = e^x dx \end{cases} \implies \begin{cases} du = 2 dx \\ v = e^x \end{cases}$$

Áp dụng công thức $\int u \, dv = u v - \int v \, du$:
$$I = (2x + 1) e^x - \int e^x \cdot 2 dx = (2x + 1) e^x - 2 e^x + C = (2x - 1) e^x + C$$

---

### Ví dụ 4: Ứng dụng chuyển động trong Vật lý

Một ô tô đang chạy với vận tốc $20\text{ m/s}$ thì người lái đạp phanh. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với gia tốc $a(t) = -4\text{ m/s}^2$.  
a) Tìm công thức vận tốc $v(t)$ của ô tô kể từ lúc đạp phanh ($t \ge 0$).  
b) Sau bao lâu thì ô tô dừng hẳn? Tính quãng đường ô tô đi được từ lúc phanh đến khi dừng hẳn.

#### Lời giải:
a) Ta biết gia tốc là đạo hàm của vận tốc: $a(t) = v'(t)$. Do đó $v(t)$ là một nguyên hàm của $a(t)$:
$$v(t) = \int a(t) dt = \int (-4) dt = -4t + C$$
Tại thời điểm đạp phanh $t = 0$, vận tốc ban đầu là $v(0) = 20\text{ m/s} \implies -4(0) + C = 20 \implies C = 20$.  
Vậy phương trình vận tốc là:
$$v(t) = -4t + 20 \text{ (m/s)}$$

b) Ô tô dừng hẳn khi $v(t) = 0 \iff -4t + 20 = 0 \iff t = 5\text{ giây}$.  
Quãng đường đi được $s(t)$ là nguyên hàm của hàm vận tốc $v(t)$:
$$s(t) = \int v(t) dt = \int (-4t + 20) dt = -2t^2 + 20t + C_1$$
Tại $t = 0$ xe bắt đầu tính quãng đường nên $s(0) = 0 \implies C_1 = 0$.  
Do đó $s(t) = -2t^2 + 20t$.  
Tại thời điểm dừng hẳn $t = 5\text{ s}$, quãng đường phanh là:
$$s(5) = -2(5)^2 + 20(5) = -50 + 100 = 50\text{ mét}$$

---

## 7. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Cho hàm số $f(x)$ xác định trên $K$. Hàm số $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $K$ nếu:",
  "options": [
    "A. $f'(x) = F(x)$ với mọi $x \\in K$",
    "B. $F'(x) = f(x)$ với mọi $x \\in K$",
    "C. $F(x) = f(x) + C$",
    "D. $F'(x) = f'(x)$ với mọi $x \\in K$"
  ],
  "answer": "B. $F'(x) = f(x)$ với mọi $x \\in K$",
  "explanation": "Theo định nghĩa SGK, $F(x)$ là nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 - 2x + 1$ là:",
  "options": [
    "A. $x^3 - x^2 + x + C$",
    "B. $6x - 2 + C$",
    "C. $3x^3 - 2x^2 + x + C$",
    "D. $x^3 - 2x^2 + x + C$"
  ],
  "answer": "A. $x^3 - x^2 + x + C$",
  "explanation": "Ta có $\\int (3x^2 - 2x + 1) dx = 3 \\cdot \\frac{x^3}{3} - 2 \\cdot \\frac{x^2}{2} + x + C = x^3 - x^2 + x + C$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Họ tất cả các nguyên hàm của hàm số $f(x) = \\cos 3x$ là:",
  "options": [
    "A. $\\sin 3x + C$",
    "B. $-\\frac{1}{3} \\sin 3x + C$",
    "C. $\\frac{1}{3} \\sin 3x + C$",
    "D. $3\\sin 3x + C$"
  ],
  "answer": "C. $\\frac{1}{3} \\sin 3x + C$",
  "explanation": "Theo công thức mở rộng $\\int \\cos(ax+b)dx = \\frac{1}{a} \\sin(ax+b) + C$, với $a = 3$ ta được $\\frac{1}{3} \\sin 3x + C$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tìm nguyên hàm $F(x)$ của hàm số $f(x) = e^{2x}$ thỏa mãn điều kiện $F(0) = 1$.",
  "options": [
    "A. $F(x) = \\frac{1}{2} e^{2x} + \\frac{1}{2}$",
    "B. $F(x) = 2e^{2x} - 1$",
    "C. $F(x) = \\frac{1}{2} e^{2x} + 1$",
    "D. $F(x) = e^{2x}$"
  ],
  "answer": "A. $F(x) = \\frac{1}{2} e^{2x} + \\frac{1}{2}$",
  "explanation": "Họ nguyên hàm là $F(x) = \\int e^{2x} dx = \\frac{1}{2} e^{2x} + C$. Vì $F(0) = 1 \\implies \\frac{1}{2} e^0 + C = 1 \\implies \\frac{1}{2} + C = 1 \\implies C = \\frac{1}{2}$. Vậy $F(x) = \\frac{1}{2} e^{2x} + \\frac{1}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nguyên hàm $\\int \\frac{1}{2x - 3} dx$ bằng:",
  "options": [
    "A. $\\ln|2x - 3| + C$",
    "B. $\\frac{1}{2} \\ln|2x - 3| + C$",
    "C. $-\\frac{2}{(2x-3)^2} + C$",
    "D. $2\\ln|2x - 3| + C$"
  ],
  "answer": "B. $\\frac{1}{2} \\ln|2x - 3| + C$",
  "explanation": "Áp dụng công thức $\\int \\frac{1}{ax+b} dx = \\frac{1}{a} \\ln|ax+b| + C$ với $a = 2, b = -3$ ta có kết quả là $\\frac{1}{2} \\ln|2x-3| + C$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biết $\\int f(x) dx = F(x) + C$. Khi đó $\\int f(5x - 2) dx$ bằng:",
  "options": [
    "A. $F(5x - 2) + C$",
    "B. $5 F(5x - 2) + C$",
    "C. $\\frac{1}{5} F(5x - 2) + C$",
    "D. $\\frac{1}{5} F(x) + C$"
  ],
  "answer": "C. $\\frac{1}{5} F(5x - 2) + C$",
  "explanation": "Đặt $u = 5x - 2 \\implies du = 5 dx \\implies dx = \\frac{1}{5} du$. Khi đó $\\int f(5x-2)dx = \\frac{1}{5} \\int f(u)du = \\frac{1}{5} F(u) + C = \\frac{1}{5} F(5x-2) + C$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính nguyên hàm $I = \\int x \\cos x \\, dx$.",
  "options": [
    "A. $x \\sin x - \\cos x + C$",
    "B. $x \\sin x + \\cos x + C$",
    "C. $-x \\sin x + \\cos x + C$",
    "D. $x \\cos x - \\sin x + C$"
  ],
  "answer": "B. $x \\sin x + \\cos x + C$",
  "explanation": "Dùng từng phần: Đặt $u = x \\implies du = dx$; $dv = \\cos x dx \\implies v = \\sin x$. Khi đó $I = x \\sin x - \\int \\sin x dx = x \\sin x - (-\\cos x) + C = x \\sin x + \\cos x + C$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Để tính nguyên hàm $I = \\int x \\ln x \\, dx$ bằng phương pháp từng phần $\\int u \\, dv$, ta nên chọn:",
  "options": [
    "A. $u = x$ và $dv = \\ln x dx$",
    "B. $u = \\ln x$ và $dv = x dx$",
    "C. $u = x \\ln x$ và $dv = dx$",
    "D. $u = 1$ và $dv = x \\ln x dx$"
  ],
  "answer": "B. $u = \\ln x$ và $dv = x dx$",
  "explanation": "Theo quy tắc ưu tiên \"Nhất log, nhì đa\", hàm lôgarit $\\ln x$ phải được ưu tiên đặt làm $u$, phần đa thức $x dx$ đặt làm $dv$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Họ tất cả các nguyên hàm của hàm số $f(x) = \\frac{2x}{x^2 + 1}$ là:",
  "options": [
    "A. $\\ln(x^2 + 1) + C$",
    "B. $\\frac{1}{x^2 + 1} + C$",
    "C. $2\\ln(x^2 + 1) + C$",
    "D. $\\sqrt{x^2 + 1} + C$"
  ],
  "answer": "A. $\\ln(x^2 + 1) + C$",
  "explanation": "Nhận thấy $(x^2 + 1)' = 2x$. Đặt $u = x^2 + 1 \\implies du = 2x dx$. Ta có $\\int \\frac{2x}{x^2+1} dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2+1) + C$ (vì $x^2 + 1 > 0$ với mọi $x$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Một chất điểm chuyển động với vận tốc $v(t) = 3t^2 + 2t$ (m/s). Quãng đường chất điểm đi được từ thời điểm $t = 0$ đến $t = 3$ giây là:",
  "options": [
    "A. 36 m",
    "B. 33 m",
    "C. 27 m",
    "D. 18 m"
  ],
  "answer": "A. 36 m",
  "explanation": "Hàm quãng đường là $s(t) = \\int v(t)dt = \\int (3t^2 + 2t)dt = t^3 + t^2 + C$. Với $s(0) = 0 \\implies C = 0$. Tại $t = 3$: $s(3) = 3^3 + 3^2 = 27 + 9 = 36$ m."
}'></div>
