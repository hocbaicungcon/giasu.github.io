---
title: 'Toán 12 Bài 13: Ứng dụng hình học của tích phân'
description: 'Lý thuyết trọng tâm Bài 13 Toán 12 Kết nối tri thức: Tính diện tích hình phẳng, thể tích vật thể và khối tròn xoay quay quanh trục Ox kèm mô phỏng 3D quét khối tròn xoay tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Giải tích
  - Tích phân
  - Diện tích hình phẳng
  - Khối tròn xoay
  - Thể tích
  - Kết nối tri thức
grade: 12
---

# Bài 13. Ứng dụng hình học của tích phân

Một trong những lý do khiến giải tích tích phân trở thành công cụ không thể thiếu của kỹ sư, kiến trúc sư và nhà thiết kế là khả năng tính toán chuẩn xác đến từng milimét:
- Diện tích của những mặt sàn kiến trúc uốn lượn mềm mại hay những khu vườn cảnh quan có đường biên tự nhiên.
- Dung tích bình chứa nhiên liệu của tàu vũ trụ, bồn chở dầu hình ellip hay thùng gỗ sồi ủ rượu vang truyền thống.

Tất cả những hình dạng phức tạp đó đều được giải quyết nhẹ nhàng thông qua hai ứng dụng hình học kinh điển của tích phân: **Tính diện tích hình phẳng** và **Tính thể tích khối tròn xoay**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC ỨNG DỤNG HÌNH HỌC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Diện tích 1 đường với Ox</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Giới hạn bởi $y = f(x)$, $Ox$, $x = a, x = b$:<br>
$\mathbf{S = \int_a^b |f(x)| dx}$.<br>
• Phá trị tuyệt đối bằng cách xét dấu $f(x)$ trên $[a; b]$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Diện tích giữa 2 đường cong</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Giới hạn bởi $y = f(x), y = g(x)$, $x = a, b$:<br>
$\mathbf{S = \int_a^b |f(x) - g(x)| dx}$.<br>
• Nếu chưa có cận: giải PT hoành độ giao điểm $f(x) = g(x)$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Thể tích vật thể bất kì</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Mặt cắt vuông góc trục $Ox$ có diện tích $S(x)$:<br>
$\mathbf{V = \int_a^b S(x) dx}$.<br>
• Là sự tích lũy diện tích của các lát cắt mỏng.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thể tích khối tròn xoay</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Quay $y = f(x)$ quanh $Ox$ trên $[a; b]$:<br>
$\mathbf{V = \pi \int_a^b [f(x)]^2 dx}$.<br>
• Chú ý có <strong>thừa số $\pi$</strong> và <strong>bình phương $[f(x)]^2$</strong>!
</p>
</div>
</div>
</div>

---

## 1. Tính diện tích hình phẳng

### 1.1. Hình phẳng giới hạn bởi một đường cong và trục hoành

::: tip Diện tích hình phẳng giới hạn bởi $y = f(x)$, $Ox$, $x = a$, $x = b$
Diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$, trục hoành $Ox$ ($y = 0$) và hai đường thẳng $x = a$, $x = b$ được tính theo công thức:
$$S = \int_a^b |f(x)| \, dx$$
:::

**Phương pháp khử dấu giá trị tuyệt đối:**
- Giải phương trình $f(x) = 0$ trên đoạn $[a; b]$ để tìm các nghiệm $c_1 < c_2 < \dots < c_k$.
- Chia tích phân thành từng đoạn con:
  $$S = \int_a^{c_1} |f(x)| dx + \int_{c_1}^{c_2} |f(x)| dx + \dots + \int_{c_k}^b |f(x)| dx = \left| \int_a^{c_1} f(x)dx \right| + \left| \int_{c_1}^{c_2} f(x)dx \right| + \dots$$

### 1.2. Hình phẳng giới hạn bởi hai đường cong

::: tip Diện tích hình phẳng giới hạn bởi hai đường cong
Diện tích $S$ của hình phẳng giới hạn bởi hai đồ thị hàm số liên tục $y = f(x)$, $y = g(x)$ và hai đường thẳng $x = a$, $x = b$ là:
$$S = \int_a^b |f(x) - g(x)| \, dx$$
:::

> [!NOTE]
> **Trường hợp không cho trước hai cận $x = a, x = b$:**  
> Ta giải phương trình hoành độ giao điểm: $f(x) = g(x) \iff f(x) - g(x) = 0$.
> Nếu phương trình có các nghiệm, ta lấy cận nhỏ nhất làm cận dưới $a$ và cận lớn nhất làm cận trên $b$.

---

## 2. Tính thể tích vật thể

### 2.1. Thể tích của vật thể bất kì (Nguyên lý Cavalieri)

Cắt một vật thể bởi hai mặt phẳng vuông góc với trục $Ox$ tại các điểm có hoành độ $x = a$ và $x = b$ ($a < b$).  
Giả sử một mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ ($a \le x \le b$) cắt vật thể theo một thiết diện có diện tích là $S(x)$. Nếu $S(x)$ là hàm số liên tục trên $[a; b]$ thì thể tích $V$ của vật thể được tính bởi:
$$V = \int_a^b S(x) \, dx$$

---

## 3. Thể tích khối tròn xoay

### 3.1. Khối tròn xoay quay xung quanh trục hoành $Ox$

Cho hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên $[a; b]$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$. Khi quay hình phẳng này xung quanh trục $Ox$, ta được một **khối tròn xoay**.

Khi cắt khối tròn xoay này bởi một mặt phẳng vuông góc với trục $Ox$ tại điểm $x$, mặt cắt thu được là một **hình tròn** có bán kính $r = |f(x)|$.  
Do đó, diện tích mặt cắt là:
$$S(x) = \pi r^2 = \pi [f(x)]^2$$

::: tip Thể tích khối tròn xoay quay quanh Ox
Thể tích $V$ của khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = f(x)$, trục $Ox$, $x = a$, $x = b$ xung quanh trục hoành $Ox$ là:
$$V = \pi \int_a^b [f(x)]^2 \, dx$$
:::

> [!WARNING]
> Hai lỗi sai học sinh hay mắc phải nhất:
> 1. Quên nhân hằng số $\pi$ phía trước tích phân!
> 2. Quên bình phương hàm số $[f(x)]^2$ bên trong dấu tích phân!

---

## 4. Mô phỏng trực quan: Khối tròn xoay tạo thành từ phép quay

Dưới đây là mô phỏng đường cong parabol $y = \sqrt{x}$ trên đoạn $[0; 4]$. Khi quay quanh trục hoành $Ox$, hình phẳng quét qua không gian tạo nên một **khối tròn xoay hình paraboloid** (tương tự như chóa đèn pin hoặc mũi tên lửa). Kéo thanh trượt để quan sát các lát cắt tròn bán kính $r = f(x)$:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Vị trí mặt cắt lát đĩa $x_0$: <span id="val-slice" style="color: #2563eb; font-weight: bold;">2.50</span></label><br>
      <input type="range" id="slider-slice" min="0.5" max="3.8" value="2.5" step="0.1" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <div style="background: var(--card-bg, #ffffff); padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
        <strong>Bán kính lát cắt:</strong> $r = \sqrt{x_0} = $ <span id="val-radius" style="color: #047857; font-weight: bold;">1.58</span>
      </div>
      <div style="background: var(--card-bg, #ffffff); padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
        <strong>Diện tích đĩa:</strong> $S(x_0) = \pi r^2 = $ <span id="val-area-slice" style="color: #dc2626; font-weight: bold;">7.85</span>
      </div>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 340px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="solid-revolution-svg" data-interactive-done="true" viewBox="0 0 700 340" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Thể tích toàn khối: $V = \pi \int_0^4 (\sqrt{x})^2 dx = \pi \int_0^4 x dx = \pi \left. \frac{x^2}{2} \right|_0^4 = \pi \cdot \frac{16}{2} = 8\pi \approx 25.13$.
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('solid-revolution-svg');
  const slider = document.getElementById('slider-slice');
  const valSlice = document.getElementById('val-slice');
  const valRadius = document.getElementById('val-radius');
  const valAreaSlice = document.getElementById('val-area-slice');

  if (!svg || !slider) return;

  const W = 700, H = 340;
  const originX = 100, originY = H / 2;
  const scaleX = 120, scaleY = 55;

  function toScreenX(x) { return originX + x * scaleX; }
  function toScreenY(y) { return originY - y * scaleY; }

  function f(x) { return Math.sqrt(Math.max(0, x)); }

  function render() {
    const x0 = parseFloat(slider.value);
    const r0 = f(x0);
    const s0 = Math.PI * r0 * r0;

    valSlice.textContent = x0.toFixed(2);
    valRadius.textContent = r0.toFixed(2);
    valAreaSlice.textContent = s0.toFixed(2);

    // Đường biên trên: y = +sqrt(x), biên dưới: y = -sqrt(x)
    let topPath = `M ${toScreenX(0)} ${toScreenY(0)}`;
    let botPath = `M ${toScreenX(0)} ${toScreenY(0)}`;
    for (let x = 0; x <= 4.0; x += 0.05) {
      topPath += ` L ${toScreenX(x).toFixed(1)} ${toScreenY(f(x)).toFixed(1)}`;
      botPath += ` L ${toScreenX(x).toFixed(1)} ${toScreenY(-f(x)).toFixed(1)}`;
    }

    // Đáy tròn elip tại x = 4
    const xEnd = 4;
    const rEnd = f(xEnd);
    const endSx = toScreenX(xEnd);
    const endRy = rEnd * scaleY;
    const endRx = 20;

    // Mặt cắt đĩa tại x0
    const sliceSx = toScreenX(x0);
    const sliceRy = r0 * scaleY;
    const sliceRx = 16 * (r0 / rEnd);

    let html = `
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
          <stop offset="50%" stop-color="#60a5fa" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.25"/>
        </linearGradient>
      </defs>

      <!-- Trục quay Ox -->
      <line x1="50" y1="${originY}" x2="${W - 40}" y2="${originY}" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 3" />
      <polygon points="${W-35},${originY} ${W-45},${originY-4} ${W-45},${originY+4}" fill="#64748b" />
      <text x="${W-40}" y="${originY + 20}" font-size="12" fill="#64748b" font-weight="bold">x (Trục quay Ox)</text>

      <!-- Khối tròn xoay -->
      <path d="${topPath} L ${toScreenX(4)} ${toScreenY(0)} ${botPath.replace('M', 'L')} Z" fill="url(#bodyGrad)" />
      <path d="${topPath}" fill="none" stroke="#2563eb" stroke-width="2.5" />
      <path d="${botPath}" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 2" />

      <!-- Elip đáy x = 4 -->
      <ellipse cx="${endSx}" cy="${originY}" rx="${endRx}" ry="${endRy}" fill="rgba(37, 99, 235, 0.2)" stroke="#2563eb" stroke-width="1.8" />

      <!-- Lát cắt đĩa tròn elip tại x0 -->
      <ellipse cx="${sliceSx}" cy="${originY}" rx="${sliceRx}" ry="${sliceRy}" fill="rgba(239, 68, 68, 0.45)" stroke="#dc2626" stroke-width="2" />
      <!-- Bán kính r0 -->
      <line x1="${sliceSx}" y1="${originY}" x2="${sliceSx}" y2="${toScreenY(r0)}" stroke="#b91c1c" stroke-width="2" />
      <circle cx="${sliceSx}" cy="${toScreenY(r0)}" r="4" fill="#dc2626" />
      <text x="${sliceSx + 6}" y="${originY - sliceRy / 2}" font-size="11" fill="#dc2626" font-weight="bold">r = √x₀</text>

      <!-- Dóng toạ độ x0 -->
      <line x1="${sliceSx}" y1="${originY}" x2="${sliceSx}" y2="${originY + endRy + 15}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3" />
      <text x="${sliceSx}" y="${originY + endRy + 30}" font-size="12" fill="#2563eb" font-weight="bold" text-anchor="middle">x₀ = ${x0.toFixed(1)}</text>
      <text x="${toScreenX(0)}" y="${originY + 18}" font-size="12" fill="#64748b" font-weight="bold" text-anchor="middle">O(0)</text>
      <text x="${toScreenX(4)}" y="${originY + 18}" font-size="12" fill="#64748b" font-weight="bold" text-anchor="middle">x = 4</text>
    `;

    svg.innerHTML = html;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## 5. Các ví dụ minh họa áp dụng chi tiết

### Ví dụ 1: Diện tích hình phẳng giữa Parabol và đường thẳng

Tính diện tích $S$ của hình phẳng giới hạn bởi parabol $(P): y = x^2 - 2x$ và đường thẳng $(d): y = x$.

#### Lời giải:
1. **Tìm hoành độ giao điểm:**
   $$x^2 - 2x = x \iff x^2 - 3x = 0 \iff \left[\begin{aligned} x &= 0 \\ x &= 3 \end{aligned}\right.$$
   Vậy hai cận tích phân là $a = 0$ và $b = 3$.

2. **Tính diện tích:**
   $$S = \int_0^3 |(x^2 - 2x) - x| \, dx = \int_0^3 |x^2 - 3x| \, dx$$
   Với mọi $x \in [0; 3]$, ta có $x^2 - 3x \le 0 \implies |x^2 - 3x| = 3x - x^2$.  
   Do đó:
   $$S = \int_0^3 (3x - x^2) \, dx = \left. \left( \frac{3x^2}{2} - \frac{x^3}{3} \right) \right|_0^3 = \left( \frac{3 \cdot 9}{2} - \frac{27}{3} \right) - 0 = \frac{27}{2} - 9 = \frac{9}{2} = 4.5\text{ (đvdt)}$$

---

### Ví dụ 2: Thể tích khối tròn xoay

Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đường cong $y = \sin x$, trục hoành $Ox$ trên đoạn $[0; \pi]$ xung quanh trục $Ox$.

#### Lời giải:
Áp dụng công thức thể tích khối tròn xoay:
$$V = \pi \int_0^\pi (\sin x)^2 \, dx = \pi \int_0^\pi \sin^2 x \, dx$$
Dùng công thức hạ bậc $\sin^2 x = \frac{1 - \cos 2x}{2}$:
$$V = \pi \int_0^\pi \frac{1 - \cos 2x}{2} \, dx = \frac{\pi}{2} \left. \left( x - \frac{\sin 2x}{2} \right) \right|_0^\pi = \frac{\pi}{2} \left[ (\pi - 0) - (0 - 0) \right] = \frac{\pi^2}{2} \approx 4.935\text{ (đvtt)}$$

---

### Ví dụ 3: Bài toán ứng dụng thực tế - Dung tích thùng gỗ ủ rượu vang

Một thùng gỗ ủ rượu vang có dạng một khối tròn xoay. Đường sinh bên ngoài của thùng là một cung parabol $y = -\frac{1}{100}x^2 + 40$ (với đơn vị là xentimét), giới hạn bởi $-30 \le x \le 30$. Khi quay cung parabol này quanh trục $Ox$, ta được thân thùng gỗ.  
Hãy tính dung tích của thùng gỗ đó (làm tròn đến hàng đơn vị theo lít, biết $1\text{ lít} = 1000\text{ cm}^3$).

#### Lời giải:
Thể tích của thùng gỗ là:
$$V = \pi \int_{-30}^{30} [y(x)]^2 \, dx = \pi \int_{-30}^{30} \left( -\frac{1}{100}x^2 + 40 \right)^2 \, dx$$
Vì hàm số dưới dấu tích phân là hàm chẵn, ta có:
$$V = 2\pi \int_0^{30} \left( \frac{1}{10000}x^4 - \frac{80}{100}x^2 + 1600 \right) \, dx = 2\pi \left. \left( \frac{x^5}{50000} - \frac{4x^3}{15} + 1600x \right) \right|_0^{30}$$
Thay $x = 30$:
$$\frac{30^5}{50000} = \frac{24300000}{50000} = 486$$
$$\frac{4 \cdot 30^3}{15} = \frac{4 \cdot 27000}{15} = 7200$$
$$1600 \cdot 30 = 48000$$
$$\implies V = 2\pi (486 - 7200 + 48000) = 2\pi (41286) = 82572\pi \approx 259407\text{ cm}^3$$
Đổi ra lít:
$$V \approx \frac{259407}{1000} \approx 259\text{ lít}$$

---

## 6. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$, trục hoành và hai đường thẳng $x = a, x = b$ được tính theo công thức nào?",
  "options": [
    "A. $S = \\int_a^b f(x) dx$",
    "B. $S = \\pi \\int_a^b [f(x)]^2 dx$",
    "C. $S = \\int_a^b |f(x)| dx$",
    "D. $S = \\left| \\int_a^b f(x) dx \\right|$"
  ],
  "answer": "C. $S = \\int_a^b |f(x)| dx$",
  "explanation": "Theo lý thuyết, dấu giá trị tuyệt đối nằm bên TRONG dấu tích phân để đảm bảo diện tích luôn dương trên từng phân đoạn: $S = \\int_a^b |f(x)| dx$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Thể tích $V$ của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = f(x)$, trục $Ox$, $x = a, x = b$ xung quanh trục hoành là:",
  "options": [
    "A. $V = \\int_a^b [f(x)]^2 dx$",
    "B. $V = \\pi \\int_a^b [f(x)]^2 dx$",
    "C. $V = \\pi \\int_a^b |f(x)| dx$",
    "D. $V = \\pi^2 \\int_a^b f(x) dx$"
  ],
  "answer": "B. $V = \\pi \\int_a^b [f(x)]^2 dx$",
  "explanation": "Công thức chuẩn tính thể tích khối tròn xoay quay quanh $Ox$ là $V = \\pi \\int_a^b [f(x)]^2 dx$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Diện tích hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành và hai đường thẳng $x = -1, x = 1$ bằng:",
  "options": [
    "A. 0",
    "B. 1",
    "C. 0.5",
    "D. 2"
  ],
  "answer": "C. 0.5",
  "explanation": "$S = \\int_{-1}^1 |x^3| dx = 2 \\int_0^1 x^3 dx = 2 \\left. \\frac{x^4}{4} \\right|_0^1 = 2 \\cdot \\frac{1}{4} = 0.5$. (Nếu quên trị tuyệt đối thì $\\int_{-1}^1 x^3 dx = 0$ là sai)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính diện tích hình phẳng giới hạn bởi hai parabol $y = x^2$ và $y = 2x - x^2$.",
  "options": [
    "A. $\\frac{1}{3}$",
    "B. $\\frac{2}{3}$",
    "C. $1$",
    "D. $\\frac{4}{3}$"
  ],
  "answer": "A. $\\frac{1}{3}$",
  "explanation": "Hoành độ giao điểm: $x^2 = 2x - x^2 \\iff 2x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 1$. Khi đó $S = \\int_0^1 (2x - 2x^2) dx = \\left.(x^2 - \\frac{2x^3}{3})\\right|_0^1 = 1 - \\frac{2}{3} = \\frac{1}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hình phẳng giới hạn bởi đường cong $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 1$ quay quanh trục $Ox$. Thể tích khối tròn xoay thu được là:",
  "options": [
    "A. $\\pi (e - 1)$",
    "B. $\\frac{\\pi(e^2 - 1)}{2}$",
    "C. $\\pi(e^2 - 1)$",
    "D. $\\frac{e^2 - 1}{2}$"
  ],
  "answer": "B. $\\frac{\\pi(e^2 - 1)}{2}$",
  "explanation": "$V = \\pi \\int_0^1 (e^x)^2 dx = \\pi \\int_0^1 e^{2x} dx = \\pi \\left. \\frac{e^{2x}}{2} \\right|_0^1 = \\frac{\\pi(e^2 - 1)}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Một vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 2$. Thiết diện của vật thể cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ là một hình vuông có cạnh bằng $\\sqrt{x + 1}$. Thể tích của vật thể này là:",
  "options": [
    "A. 4",
    "B. $4\\pi$",
    "C. 3",
    "D. $3\\pi$"
  ],
  "answer": "A. 4",
  "explanation": "Diện tích thiết diện hình vuông là $S(x) = (\\sqrt{x+1})^2 = x + 1$. Thể tích vật thể là $V = \\int_0^2 S(x) dx = \\int_0^2 (x + 1) dx = \\left. (\\frac{x^2}{2} + x) \\right|_0^2 = 2 + 2 = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Diện tích hình phẳng giới hạn bởi đồ thị $y = \\cos x$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = \\pi$ bằng:",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. 4"
  ],
  "answer": "C. 2",
  "explanation": "Đồ thị $\\cos x$ đổi dấu tại $\\frac{\\pi}{2}$. $S = \\int_0^{\\pi/2} \\cos x dx + \\int_{\\pi/2}^{\\pi} (-\\cos x) dx = [\\sin(\\pi/2) - \\sin 0] - [\\sin\\pi - \\sin(\\pi/2)] = 1 - (0 - 1) = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hình phẳng giới hạn bởi $y = \\sqrt{4 - x^2}$ và trục $Ox$ quay quanh trục hoành. Khối tròn xoay tạo thành là hình gì và có thể tích bao nhiêu?",
  "options": [
    "A. Khối cầu tâm $O$ bán kính $R = 2$, thể tích $V = \\frac{32\\pi}{3}$",
    "B. Khối trụ bán kính đáy $R = 2$, thể tích $V = 16\\pi$",
    "C. Khối nón bán kính đáy $R = 2$, thể tích $V = 8\\pi$",
    "D. Khối cầu tâm $O$ bán kính $R = 4$, thể tích $V = \\frac{64\\pi}{3}$"
  ],
  "answer": "A. Khối cầu tâm $O$ bán kính $R = 2$, thể tích $V = \\frac{32\\pi}{3}$",
  "explanation": "Nửa đường tròn $y = \\sqrt{4 - x^2}$ trên $[-2; 2]$ khi quay quanh $Ox$ sẽ tạo thành khối cầu bán kính $R = 2$. Thể tích $V = \\pi \\int_{-2}^2 (4 - x^2) dx = \\pi \\left.(4x - \\frac{x^3}{3})\\right|_{-2}^2 = \\frac{32\\pi}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Diện tích của hình phẳng giới hạn bởi đồ thị hàm số $y = \\frac{1}{x}$, trục hoành và hai đường thẳng $x = 1, x = k$ ($k > 1$) bằng 2. Giá trị của $k$ là:",
  "options": [
    "A. $e$",
    "B. $e^2$",
    "C. $2e$",
    "D. 4"
  ],
  "answer": "B. $e^2$",
  "explanation": "$S = \\int_1^k \\frac{1}{x} dx = \\ln k - \\ln 1 = \\ln k$. Theo đề bài $S = 2 \\implies \\ln k = 2 \\implies k = e^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hình thang vuông $OABC$ với $O(0;0), A(0;2), B(3;5), C(3;0)$. Khi quay hình thang này quanh trục hoành $Ox$, khối tròn xoay thu được là:",
  "options": [
    "A. Khối trụ",
    "B. Khối nón cụt",
    "C. Khối nón tròn xoay",
    "D. Khối cầu"
  ],
  "answer": "B. Khối nón cụt",
  "explanation": "Cạnh $AB$ nối từ $(0;2)$ đến $(3;5)$ là đường thẳng nghiêng $y = x + 2$. Khi quay hình thang vuông có đáy tựa trên trục quay thì quét ra một khối nón cụt."
}'></div>
