---
title: 'Toán 12 Bài 1: Tính đơn điệu và cực trị của hàm số - Bản chất và phương pháp giải'
description: 'Lý thuyết trọng tâm Bài 1 Toán 12 Kết nối tri thức: Điều kiện đồng biến nghịch biến của hàm số, định lý dấu đạo hàm f''(x), điều kiện cực đại cực tiểu (dấu hiệu 1 và dấu hiệu 2), mô phỏng đồ thị hàm bậc ba tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Đơn điệu
  - Đồng biến nghịch biến
  - Cực trị
  - Cực đại cực tiểu
  - Bảng biến thiên
  - Kết nối tri thức
grade: 12
---

# Bài 1. Tính đơn điệu và cực trị của hàm số

Chào mừng các em bước vào chương trình **Toán học lớp 12** — năm học then chốt hướng tới Kỳ thi Tốt nghiệp THPT và Tuyển sinh Đại học! 

Mở đầu chương trình lớp 12 là **Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số**. Nếu ở lớp 11, chúng ta đã học cách tính đạo hàm $f'(x)$ và hiểu ý nghĩa của nó là tiếp tuyến và vận tốc, thì ở lớp 12, đạo hàm sẽ trở thành "chiếc kính hiển vi" thần kỳ giúp chúng ta nhìn thấu mọi ngóc ngách của đồ thị hàm số:
- Khi nào hàm số **tăng lên (đồng biến)**?
- Khi nào hàm số **giảm xuống (nghịch biến)**?
- Đâu là những đỉnh cao nhất cục bộ (**Cực đại**) và đáy sâu nhất cục bộ (**Cực tiểu**)?

Những khái niệm này không chỉ phục vụ các bài toán hình học phẳng, mà còn là trái tim của mọi mô hình tối ưu hóa trong đời sống: từ việc tìm thời điểm bán cổ phiếu đạt đỉnh, tối ưu hóa lợi nhuận của doanh nghiệp, cho đến việc dự đoán đỉnh dịch bệnh trong y tế cộng đồng.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY: MỐI LIÊN HỆ GIỮA ĐẠO HÀM, ĐƠN ĐIỆU VÀ CỰC TRỊ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Hàm số Đồng biến ($\nearrow$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $x$ tăng thì $y$ tăng.<br>
• Dấu đạo hàm: $\mathbf{f'(x) \ge 0}$ trên khoảng $K$ (dấu bằng chỉ tại hữu hạn điểm).<br>
• Tiếp tuyến có hệ số góc dương ($k > 0$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="margin: 0 0 8px 0; color: #b91c1c;">2. Hàm số Nghịch biến ($\searrow$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $x$ tăng thì $y$ giảm.<br>
• Dấu đạo hàm: $\mathbf{f'(x) \le 0}$ trên khoảng $K$ (dấu bằng chỉ tại hữu hạn điểm).<br>
• Tiếp tuyến có hệ số góc âm ($k < 0$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">3. Điểm Cực đại (Đỉnh)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $f'(x)$ đổi dấu từ <strong>dương (+) sang âm (-)</strong> khi qua $x_0$.<br>
• Đồ thị chuyển từ đi lên sang đi xuống.<br>
• Dấu hiệu 2: $f'(x_0) = 0$ và $f''(x_0) < 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">4. Điểm Cực tiểu (Đáy)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $f'(x)$ đổi dấu từ <strong>âm (-) sang dương (+)</strong> khi qua $x_0$.<br>
• Đồ thị chuyển từ đi xuống sang đi lên.<br>
• Dấu hiệu 2: $f'(x_0) = 0$ và $f''(x_0) > 0$.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Xét parabol $y = x^2$. Khi $x$ tăng từ $-2$ đến $0$, giá trị của $y$ tăng hay giảm? Khoảng $(-\infty; 0)$ là khoảng đồng biến hay nghịch biến?
2. Tiếp tục với $y = x^2$, khi $x$ tăng từ $0$ đến $3$, giá trị của $y$ tăng hay giảm? Đỉnh $(0; 0)$ là cực đại hay cực tiểu?
3. Tính đạo hàm của $y = x^2$. Khi $x > 0$ thì $y'$ mang dấu gì? Khi $x < 0$ thì $y'$ mang dấu gì?
4. Nếu một đường thẳng có hệ số góc $k = f'(x_0) = 0$, tiếp tuyến đó có vị trí tương đối thế nào với trục hoành?
5. Một hàm số có đồ thị đi lên rồi đi xuống qua điểm $x = 1$. Tại điểm $x = 1$, hàm số đạt cực đại hay cực tiểu?

> [!TIP]
> **Đáp án nhanh:**
> 1. $y$ giảm từ $4$ về $0$ $\implies$ Nghịch biến trên $(-\infty; 0)$.
> 2. $y$ tăng từ $0$ lên $9$ $\implies$ Đồng biến trên $(0; +\infty)$. Điểm $(0; 0)$ là điểm cực tiểu (đáy).
> 3. $y' = 2x$. Khi $x > 0 \implies y' > 0$ (đồng biến); khi $x < 0 \implies y' < 0$ (nghịch biến).
> 4. Tiếp tuyến nằm ngang (song song hoặc trùng với trục hoành $Ox$).
> 5. Hàm số đạt cực đại tại $x = 1$.

---

## I. Tính đơn điệu của hàm số

### 1. Nhắc lại định nghĩa
Cho hàm số $y = f(x)$ xác định trên một khoảng, đoạn hoặc nửa khoảng (gọi chung là tập $K \subset \mathbb{R}$).
- Hàm số $y = f(x)$ được gọi là **đồng biến (tăng)** trên $K$ nếu:
  $$\forall x_1, x_2 \in K: x_1 < x_2 \implies f(x_1) < f(x_2)$$
- Hàm số $y = f(x)$ được gọi là **nghịch biến (giảm)** trên $K$ nếu:
  $$\forall x_1, x_2 \in K: x_1 < x_2 \implies f(x_1) > f(x_2)$$
- Hàm số đồng biến hoặc nghịch biến trên $K$ được gọi chung là **đơn điệu** trên $K$.

### 2. Định lý về mối liên hệ giữa Đạo hàm và Tính đơn điệu
Giả sử hàm số $y = f(x)$ có đạo hàm trên khoảng $K$.

> [!IMPORTANT]
> **Định lý 1 (Điều kiện đủ của tính đơn điệu):**
> 1. Nếu $\mathbf{f'(x) > 0}$ với mọi $x \in K$ thì hàm số $f(x)$ **đồng biến** trên khoảng $K$.
> 2. Nếu $\mathbf{f'(x) < 0}$ với mọi $x \in K$ thì hàm số $f(x)$ **nghịch biến** trên khoảng $K$.
> 3. Nếu $\mathbf{f'(x) = 0}$ với mọi $x \in K$ thì hàm số $f(x)$ là **hàm hằng** (không đổi) trên khoảng $K$.

### 3. Định lý mở rộng (Trường hợp $f'(x) = 0$ tại hữu hạn điểm)
> [!NOTE]
> **Định lý mở rộng:**
> Nếu hàm số $y = f(x)$ liên tục trên khoảng $K$ và có đạo hàm:
> - $f'(x) \ge 0, \forall x \in K$ và $f'(x) = 0$ chỉ tại một số **hữu hạn điểm** thì hàm số **đồng biến** trên $K$.
> - $f'(x) \le 0, \forall x \in K$ và $f'(x) = 0$ chỉ tại một số **hữu hạn điểm** thì hàm số **nghịch biến** trên $K$.

*Ví dụ:* Hàm số $y = x^3$ có $y' = 3x^2 \ge 0, \forall x \in \mathbb{R}$. Đạo hàm triệt tiêu tại đúng 1 điểm duy nhất $x = 0$. Vì thế, hàm số $y = x^3$ đồng biến trên toàn bộ trục số $(-\infty; +\infty)$.

---

## II. Cực trị của hàm số

### 1. Định nghĩa Cực đại và Cực tiểu
Cho hàm số $y = f(x)$ xác định trên tập $D$ và $x_0 \in D$.

> [!IMPORTANT]
> **Định nghĩa Cực trị:**
> 1. Điểm $x_0$ được gọi là **điểm cực đại** của hàm số $f(x)$ nếu tồn tại một khoảng $(a; b)$ chứa $x_0$ sao cho:
>    $$f(x) < f(x_0), \quad \forall x \in (a; b) \setminus \{x_0\}$$
>    Khi đó, $f(x_0)$ được gọi là **giá trị cực đại** (hay cực đại) của hàm số, kí hiệu là $y_{CĐ}$. Điểm $M_0(x_0; f(x_0))$ trên mặt phẳng tọa độ gọi là **điểm cực đại của đồ thị hàm số**.
>
> 2. Điểm $x_0$ được gọi là **điểm cực tiểu** của hàm số $f(x)$ nếu tồn tại một khoảng $(a; b)$ chứa $x_0$ sao cho:
>    $$f(x) > f(x_0), \quad \forall x \in (a; b) \setminus \{x_0\}$$
>    Khi đó, $f(x_0)$ được gọi là **giá trị cực tiểu** (hay cực tiểu) của hàm số, kí hiệu là $y_{CT}$. Điểm $M_0(x_0; f(x_0))$ gọi là **điểm cực tiểu của đồ thị hàm số**.

> [!WARNING]
> **Phân biệt thuật ngữ để tránh mất điểm:**
> - **Điểm cực trị của hàm số:** Là giá trị của biến số $x$ (ví dụ: $x = 2$).
> - **Cực trị (hoặc giá trị cực trị) của hàm số:** Là giá trị của $y$ (ví dụ: $y_{CĐ} = 5$).
> - **Điểm cực trị của đồ thị hàm số:** Là một cặp tọa độ $(x; y)$ trên mặt phẳng (ví dụ: $M(2; 5)$).

### 2. Điều kiện cần để hàm số đạt cực trị (Định lý Fermat)
Nếu hàm số $y = f(x)$ đạt cực trị tại điểm $x_0$ và nếu hàm số có đạo hàm tại $x_0$ thì:
$$\mathbf{f'(x_0) = 0}$$

*Lưu ý:* Những điểm mà tại đó $f'(x) = 0$ hoặc $f'(x)$ không xác định được gọi là các **điểm tới hạn (critical points)** của hàm số.

### 3. Điều kiện đủ để hàm số đạt cực trị

#### Dấu hiệu 1 (Dựa vào sự đổi dấu của đạo hàm $f'(x)$)
Giả sử hàm số $y = f(x)$ liên tục trên khoảng $(a; b)$ chứa $x_0$ và có đạo hàm trên $(a; b) \setminus \{x_0\}$:
- Nếu $f'(x)$ **đổi dấu từ dương (+) sang âm (-)** khi $x$ đi qua $x_0$ (từ trái sang phải) thì $x_0$ là **điểm cực đại**.
- Nếu $f'(x)$ **đổi dấu từ âm (-) sang dương (+)** khi $x$ đi qua $x_0$ (từ trái sang phải) thì $x_0$ là **điểm cực tiểu**.
- Nếu $f'(x)$ **không đổi dấu** khi $x$ đi qua $x_0$ thì điểm $x_0$ **không phải là điểm cực trị**.

#### Dấu hiệu 2 (Dựa vào đạo hàm cấp hai $f''(x)$)
Giả sử hàm số $y = f(x)$ có đạo hàm cấp một và cấp hai trên khoảng $(a; b)$ chứa $x_0$, và $f'(x_0) = 0$:
- Nếu $\mathbf{f''(x_0) < 0}$ thì hàm số đạt **cực đại** tại điểm $x_0$.
- Nếu $\mathbf{f''(x_0) > 0}$ thì hàm số đạt **cực tiểu** tại điểm $x_0$.

---

## Công cụ trực quan: Mô phỏng Đơn điệu & Cực trị Hàm số bậc ba

Dưới đây là đồ thị hàm số bậc ba chuẩn mực $y = \frac{1}{3}x^3 - x^2 - 3x + 2$.
Hãy kéo thanh trượt để di chuyển tiếp điểm $x$ trên đồ thị, quan sát tiếp tuyến (màu cam), dấu của đạo hàm $y' = x^2 - 2x - 3$ và vị trí hai điểm cực trị:

<div id="cubic-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG ĐỒ THỊ BẬC BA: y = ⅓x³ - x² - 3x + 2</h4>
  
  <div style="max-width: 460px; margin: 0 auto 16px auto; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <label style="font-weight: 600; color: #1e293b; display: block; margin-bottom: 6px;">
      Hoành độ tiếp điểm x: <span id="val-probe-x" style="font-size: 1.15em; color: #2563eb;">-1.00</span>
    </label>
    <input type="range" id="range-probe-x" min="-3" max="5" step="0.1" value="-1.00" style="width: 100%;">
  </div>

  <div style="display: flex; justify-content: center;">
    <svg id="cubic-svg" viewBox="0 0 500 320" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
      <!-- Grid & Axes -->
      <!-- Origin at (220, 160). Scale: 35px per unit x, 12px per unit y -->
      <line x1="30" y1="160" x2="470" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="220" y1="20" x2="220" y2="300" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="460" y="150" font-family="sans-serif" font-size="12" fill="#64748b">x</text>
      <text x="230" y="30" font-family="sans-serif" font-size="12" fill="#64748b">y</text>
      
      <!-- Curve y = x^3/3 - x^2 - 3x + 2 -->
      <path id="curve-cubic" d="" fill="none" stroke="#2563eb" stroke-width="3"/>
      
      <!-- Cực đại (-1, 3.67) & Cực tiểu (3, -7) -->
      <!-- At x=-1: px = 220 - 35 = 185; py = 160 - 3.67*12 = 160 - 44 = 116 -->
      <circle cx="185" cy="116" r="5" fill="#10b981"/>
      <text x="145" y="105" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">CĐ (-1; 3.67)</text>

      <!-- At x=3: px = 220 + 3*35 = 325; py = 160 - (-7)*12 = 160 + 84 = 244 -->
      <circle cx="325" cy="244" r="5" fill="#f59e0b"/>
      <text x="315" y="265" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">CT (3; -7)</text>

      <!-- Tangent line dynamic -->
      <line id="probe-tangent" x1="0" y1="0" x2="0" y2="0" stroke="#ea580c" stroke-width="2"/>

      <!-- Probe Point -->
      <circle id="probe-pt" cx="0" cy="0" r="6" fill="#ea580c"/>
    </svg>
  </div>

  <div id="probe-status" style="margin-top: 14px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left;">
    <div>• Đạo hàm tại x: <strong id="val-deriv" style="color: #ea580c;">y' = 0.00</strong></div>
    <div>• Trạng thái hàm số: <strong id="val-state" style="color: #047857;">Điểm Cực Đại (tiếp tuyến nằm ngang)</strong></div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rX = document.getElementById('range-probe-x');
  const valX = document.getElementById('val-probe-x');
  const valDeriv = document.getElementById('val-deriv');
  const valState = document.getElementById('val-state');
  const pathCubic = document.getElementById('curve-cubic');
  const lineTan = document.getElementById('probe-tangent');
  const ptProbe = document.getElementById('probe-pt');

  if (!rX || !pathCubic) return;

  const originX = 220, originY = 160;
  const scaleX = 35, scaleY = 12;

  function f(x) { return (x*x*x)/3 - x*x - 3*x + 2; }
  function df(x) { return x*x - 2*x - 3; }

  // Draw static cubic curve
  let dCurve = '';
  for (let px = -3.2; px <= 5.2; px += 0.05) {
    const py = f(px);
    const sx = originX + px * scaleX;
    const sy = originY - py * scaleY;
    if (dCurve === '') dCurve += `M ${sx} ${sy}`;
    else dCurve += ` L ${sx} ${sy}`;
  }
  pathCubic.setAttribute('d', dCurve);

  function update() {
    const x = parseFloat(rX.value);
    const y = f(x);
    const slope = df(x);

    valX.textContent = x.toFixed(2);
    valDeriv.textContent = `y' = ${slope.toFixed(2)}`;

    const sx = originX + x * scaleX;
    const sy = originY - y * scaleY;

    ptProbe.setAttribute('cx', sx);
    ptProbe.setAttribute('cy', sy);

    // Tangent endpoints in screen pixels
    // Math slope k = dy/dx. In screen: dy_screen = -k * (scaleY/scaleX) * dx_screen
    const kScreen = -slope * (scaleY / scaleX);
    const len = 50;
    const dxScreen = len / Math.sqrt(1 + kScreen * kScreen);
    const dyScreen = kScreen * dxScreen;

    lineTan.setAttribute('x1', sx - dxScreen);
    lineTan.setAttribute('y1', sy - dyScreen);
    lineTan.setAttribute('x2', sx + dxScreen);
    lineTan.setAttribute('y2', sy + dyScreen);

    if (Math.abs(x - (-1)) < 0.15) {
      valState.innerHTML = '<span style="color: #047857; font-weight: bold;">Điểm Cực Đại (y\' = 0, đồ thị chuyển từ đồng biến sang nghịch biến)</span>';
    } else if (Math.abs(x - 3) < 0.15) {
      valState.innerHTML = '<span style="color: #b45309; font-weight: bold;">Điểm Cực Tiểu (y\' = 0, đồ thị chuyển từ nghịch biến sang đồng biến)</span>';
    } else if (slope > 0) {
      valState.innerHTML = '<span style="color: #2563eb; font-weight: bold;">Hàm số ĐỒNG BIẾN (y\' > 0, đồ thị đang đi lên)</span>';
    } else {
      valState.innerHTML = '<span style="color: #dc2626; font-weight: bold;">Hàm số NGHỊCH BIẾN (y\' < 0, đồ thị đang đi xuống)</span>';
    }
  }

  rX.addEventListener('input', update);
  update();
});
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Xét tính đơn điệu và tìm cực trị của hàm đa thức

**Bài toán 1:** Xét tính đơn điệu và tìm các điểm cực trị của hàm số:
$$y = f(x) = 2x^3 - 3x^2 - 12x + 1$$

**Lời giải:**
- **Tập xác định:** $D = \mathbb{R}$.
- **Đạo hàm:**
  $$y' = 6x^2 - 6x - 12 = 6(x^2 - x - 2)$$
- **Nghiệm đạo hàm:**
  $$y' = 0 \iff x^2 - x - 2 = 0 \iff \left[\begin{array}{l} x = -1 \\ x = 2 \end{array}\right.$$
- **Tính các giá trị tương ứng:**
  $$f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 1 = -2 - 3 + 12 + 1 = 8$$
  $$f(2) = 2(2)^3 - 3(2)^2 - 12(2) + 1 = 16 - 12 - 24 + 1 = -19$$
- **Bảng biến thiên:**

| $x$ | $-\infty$ | | $-1$ | | $2$ | | $+\infty$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $8$ | $\searrow$ | $-19$ | $\nearrow$ | $+\infty$ |

- **Kết luận:**
  + Hàm số **đồng biến** trên các khoảng $(-\infty; -1)$ và $(2; +\infty)$.
  + Hàm số **nghịch biến** trên khoảng $(-1; 2)$.
  + Hàm số đạt **cực đại** tại điểm $x = -1$, giá trị cực đại là $y_{CĐ} = 8$. Điểm cực đại của đồ thị là $M(-1; 8)$.
  + Hàm số đạt **cực tiểu** tại điểm $x = 2$, giá trị cực tiểu là $y_{CT} = -19$. Điểm cực tiểu của đồ thị là $N(2; -19)$.

---

### Dạng 2: Tính đơn điệu của hàm phân thức hữu tỉ

**Bài toán 2:** Xét tính đơn điệu của các hàm số sau:
a) $y = \frac{2x - 1}{x + 1}$  
b) $y = \frac{x^2 - 3x + 3}{x - 1}$

**Lời giải:**
a) $y = \frac{2x - 1}{x + 1}$
- Tập xác định: $D = \mathbb{R} \setminus \{-1\}$.
- Đạo hàm:
  $$y' = \frac{2(1) - (-1)(1)}{(x + 1)^2} = \frac{3}{(x + 1)^2} > 0, \quad \forall x \ne -1$$
- Kết luận: Hàm số **đồng biến** trên từng khoảng xác định $(-\infty; -1)$ và $(-1; +\infty)$.  
  *(Lưu ý: Tuyệt đối không kết luận hàm số đồng biến trên $\mathbb{R} \setminus \{-1\}$ hoặc $(-\infty; -1) \cup (-1; +\infty)$ vì định nghĩa đơn điệu chỉ xét trên từng khoảng!).* Hàm số này không có cực trị.

b) $y = \frac{x^2 - 3x + 3}{x - 1}$
- Tập xác định: $D = \mathbb{R} \setminus \{1\}$.
- Biến đổi: $y = x - 2 + \frac{1}{x - 1}$.
- Đạo hàm:
  $$y' = 1 - \frac{1}{(x - 1)^2} = \frac{(x - 1)^2 - 1}{(x - 1)^2} = \frac{x^2 - 2x}{(x - 1)^2}$$
- Cho $y' = 0 \iff x(x - 2) = 0 \iff x = 0$ hoặc $x = 2$.
  + Với $x = 0 \implies y = -3$.
  + Với $x = 2 \implies y = 1$.
- Bảng biến thiên:

| $x$ | $-\infty$ | | $0$ | | $1$ | | $2$ | | $+\infty$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y'$ | | $+$ | $0$ | $-$ | $\|$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $-3$ | $\searrow$ | $-\infty \,\|\, +\infty$ | $\searrow$ | $1$ | $\nearrow$ | $+\infty$ |

- Kết luận:
  + Hàm số đồng biến trên các khoảng $(-\infty; 0)$ và $(2; +\infty)$.
  + Hàm số nghịch biến trên các khoảng $(0; 1)$ và $(1; 2)$.
  + Điểm cực đại là $x = 0$ ($y_{CĐ} = -3$), điểm cực tiểu là $x = 2$ ($y_{CT} = 1$).  
  *(Chú ý: Giá trị cực đại $y_{CĐ} = -3$ có thể nhỏ hơn giá trị cực tiểu $y_{CT} = 1$ vì cực trị chỉ có tính chất cục bộ!).*

---

### Dạng 3: Tìm tham số $m$ để hàm số đơn điệu trên $\mathbb{R}$

**Bài toán 3:** Tìm tất cả các giá trị thực của tham số $m$ để hàm số:
$$y = \frac{1}{3}x^3 - m x^2 + (2m + 3)x - 5$$
đồng biến trên toàn bộ trục số $\mathbb{R}$.

**Lời giải:**
Tập xác định: $D = \mathbb{R}$.
Đạo hàm:
$$y' = x^2 - 2mx + (2m + 3)$$
Hàm số đã cho đồng biến trên $\mathbb{R}$ khi và chỉ khi:
$$y' \ge 0, \quad \forall x \in \mathbb{R}$$
(và dấu bằng chỉ xảy ra tại hữu hạn điểm).

Vì $y'$ là tam thức bậc hai có hệ số $a = 1 > 0$, điều kiện để $y' \ge 0, \forall x \in \mathbb{R}$ là:
$$\Delta' \le 0$$
Trong đó:
$$\Delta' = (-m)^2 - 1 \cdot (2m + 3) = m^2 - 2m - 3$$
Ta có:
$$m^2 - 2m - 3 \le 0 \iff -1 \le m \le 3$$
Vậy các giá trị $m$ cần tìm là $m \in [-1; 3]$.

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hàm số y = f(x) có đạo hàm f\u0027(x) = x^2(x - 1)(x + 2). Số điểm cực trị của hàm số là:",
  "options": [
    "A. 2",
    "B. 3",
    "C. 1",
    "D. 0"
  ],
  "answer": "A. 2",
  "explanation": "f\u0027(x) = 0 có các nghiệm x = 0 (bội 2), x = 1 (bội 1), x = -2 (bội 1). Vì x = 0 là nghiệm bội chẵn nên f\u0027(x) không đổi dấu khi qua 0. f\u0027(x) chỉ đổi dấu khi qua x = 1 và x = -2. Vậy hàm số có đúng 2 điểm cực trị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hàm số y = x^3 - 3x^2 + 2 đồng biến trên khoảng nào sau đây?",
  "options": [
    "A. (2; +∞)",
    "B. (0; 2)",
    "C. (-∞; 2)",
    "D. (0; +∞)"
  ],
  "answer": "A. (2; +∞)",
  "explanation": "y\u0027 = 3x^2 - 6x = 3x(x - 2). y\u0027 > 0 <=> x < 0 hoặc x > 2. Do đó hàm số đồng biến trên (-∞; 0) và (2; +∞)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hàm số y = f(x) có bảng biến thiên: x chạy từ -∞ qua 1 rồi đến +∞; y\u0027 đổi dấu từ dương (+) sang âm (-) qua điểm x = 1, giá trị f(1) = 4. Mệnh đề nào sau đây đúng?",
  "options": [
    "A. Hàm số đạt cực đại tại x = 1",
    "B. Hàm số đạt cực tiểu tại x = 1",
    "C. Điểm cực đại của đồ thị là (4; 1)",
    "D. Giá trị cực tiểu của hàm số bằng 4"
  ],
  "answer": "A. Hàm số đạt cực đại tại x = 1",
  "explanation": "y\u0027 đổi dấu từ dương sang âm khi qua x = 1 nên x = 1 là điểm cực đại của hàm số, giá trị cực đại là 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hàm số y = (x - 2) / (x + 1) có bao nhiêu điểm cực trị?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "answer": "A. 0",
  "explanation": "y\u0027 = [1(1) - (-2)(1)] / (x + 1)^2 = 3 / (x + 1)^2 > 0 với mọi x ≠ -1. Đạo hàm không triệt tiêu và không đổi dấu, do đó hàm phân thức bậc nhất trên bậc nhất không có cực trị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số f(x) có f\u0027(x_0) = 0 và f\u0027\u0027(x_0) = -5. Kết luận nào sau đây đúng?",
  "options": [
    "A. x_0 là điểm cực đại của hàm số",
    "B. x_0 là điểm cực tiểu của hàm số",
    "C. x_0 không phải là cực trị",
    "D. Hàm số nghịch biến trên toàn trục số"
  ],
  "answer": "A. x_0 là điểm cực đại của hàm số",
  "explanation": "Theo dấu hiệu 2: Nếu f\u0027(x_0) = 0 và f\u0027\u0027(x_0) < 0 thì hàm số đạt cực đại tại x_0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Điểm cực tiểu của đồ thị hàm số y = x^4 - 2x^2 + 3 là:",
  "options": [
    "A. (1; 2) và (-1; 2)",
    "B. (0; 3)",
    "C. x = ±1",
    "D. y = 2"
  ],
  "answer": "A. (1; 2) và (-1; 2)",
  "explanation": "y\u0027 = 4x^3 - 4x = 4x(x^2 - 1) = 0 <=> x = 0 hoặc x = ±1. Bảng biến thiên cho thấy cực tiểu tại x = ±1, y = (±1)^4 - 2(±1)^2 + 3 = 2. Điểm cực tiểu của đồ thị là (1; 2) và (-1; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tìm tất cả giá trị thực của tham số m để hàm số y = x^3 - 3mx^2 + 3(m^2 - 1)x đồng biến trên ℝ:",
  "options": [
    "A. Không tồn tại m",
    "B. m ∈ (-1; 1)",
    "C. m = 0",
    "D. m ∈ ℝ"
  ],
  "answer": "A. Không tồn tại m",
  "explanation": "y\u0027 = 3x^2 - 6mx + 3(m^2 - 1). Để y\u0027 ≥ 0 với mọi x thì Δ\u0027 ≤ 0 <=> (3m)^2 - 3 · 3(m^2 - 1) ≤ 0 <=> 9m^2 - 9m^2 + 9 ≤ 0 <=> 9 ≤ 0 (vô lý). Vậy không tồn tại m."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hàm số y = f(x) có đồ thị đạo hàm f\u0027(x) cắt trục hoành tại 3 điểm phân biệt có hoành độ -2, 0, 3. Đồ thị f\u0027(x) đi từ phía dưới lên phía trên qua x = -2. Khẳng định nào sau đây đúng?",
  "options": [
    "A. x = -2 là điểm cực tiểu của hàm số f(x)",
    "B. x = -2 là điểm cực đại của hàm số f(x)",
    "C. f(-2) = 0",
    "D. f(x) đồng biến trên khoảng (-2; 0)"
  ],
  "answer": "A. x = -2 là điểm cực tiểu của hàm số f(x)",
  "explanation": "Đồ thị f\u0027(x) đi từ dưới lên trên qua x = -2 nghĩa là f\u0027(x) đổi dấu từ âm sang dương, suy ra x = -2 là điểm cực tiểu của f(x)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Hàm số y = -x^3 + 3x - 1 có giá trị cực đại bằng:",
  "options": [
    "A. 1",
    "B. -3",
    "C. -1",
    "D. 2"
  ],
  "answer": "A. 1",
  "explanation": "y\u0027 = -3x^2 + 3 = 0 <=> x = ±1. y\u0027 đổi dấu từ dương sang âm khi qua x = 1. Giá trị cực đại là y(1) = -(1)^3 + 3(1) - 1 = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khoảng nghịch biến của hàm số y = √(4 - x^2) là:",
  "options": [
    "A. (0; 2)",
    "B. (-2; 0)",
    "C. (-2; 2)",
    "D. [0; 2]"
  ],
  "answer": "A. (0; 2)",
  "explanation": "Tập xác định [-2; 2]. y\u0027 = -2x / [2√(4 - x^2)] = -x / √(4 - x^2). y\u0027 < 0 <=> x > 0. Kết hợp tập xác định suy ra hàm số nghịch biến trên khoảng (0; 2)."
}'></div>

---

## V. Ứng dụng Thực tế: Quy luật Lợi nhuận Giảm dần trong Kinh doanh

Trong kinh tế học vi mô, hàm doanh thu và lợi nhuận của doanh nghiệp thường tuân theo quy luật điểm cực trị:

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #10b981;">
<strong>Bài toán Tối ưu hóa Doanh thu:</strong><br>
Một công ty du lịch tổ chức tour khám phá vịnh Hạ Long. Giá vé trọn gói là $2.000.000$ VNĐ/người cho nhóm $30$ khách. Nếu số lượng khách đăng ký vượt quá $30$ người, để khuyến khích số đông, công ty giảm $40.000$ VNĐ/vé cho toàn bộ khách trong đoàn ứng với mỗi khách tăng thêm.<br>
1. Gọi $x$ là số lượng khách tăng thêm ($x \ge 0$). Lập hàm số biểu diễn tổng doanh thu $R(x)$ của công ty theo $x$.<br>
2. Sử dụng đạo hàm để tìm số lượng khách của đoàn tour sao cho doanh thu của công ty du lịch đạt mức <strong>cực đại</strong>.<br>
3. Tính doanh thu cực đại đó.
</div>

> [!TIP]
> **Giải bài toán kinh doanh bằng đạo hàm:**
> 1. Tổng số khách trong đoàn là $30 + x$.  
>    Giá vé của mỗi người lúc này là: $2.000.000 - 40.000x$ (đồng).  
>    Hàm tổng doanh thu (tính bằng triệu đồng):
>    $$R(x) = (30 + x)(2 - 0.04x) = 60 - 1.2x + 2x - 0.04x^2 = -0.04x^2 + 0.8x + 60$$
> 2. Tìm điểm cực đại bằng đạo hàm:
>    $$R'(x) = -0.08x + 0.8$$
>    $$R'(x) = 0 \iff -0.08x + 0.8 = 0 \iff x = 10$$
>    Vì $R''(x) = -0.08 < 0$ nên $x = 10$ chắc chắn là điểm cực đại của hàm doanh thu!
> 3. Đoàn tour tối ưu nhất là có:
>    $$30 + 10 = 40\text{ khách}$$
>    Doanh thu cực đại thu về là:
>    $$R(10) = -0.04(10)^2 + 0.8(10) + 60 = -4 + 8 + 60 = 64\text{ triệu đồng}$$
>    *(Nếu nhận thêm khách quá mốc 40 người, tiền giảm giá sẽ làm doanh thu sụt giảm trở lại!).*
