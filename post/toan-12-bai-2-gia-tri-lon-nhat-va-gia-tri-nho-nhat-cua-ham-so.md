---
title: 'Toán 12 Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số - Phương pháp và bài toán tối ưu'
description: 'Lý thuyết trọng tâm Bài 2 Toán 12 Kết nối tri thức: Định nghĩa Max/Min, quy tắc tìm GTLN-GTNN trên đoạn và trên khoảng, mô phỏng bài toán tối ưu thể tích hộp cắt góc tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Giá trị lớn nhất
  - Giá trị nhỏ nhất
  - Max Min
  - Tối ưu hóa
  - Kết nối tri thức
grade: 12
---

# Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số

Trong cuộc sống hàng ngày và mọi lĩnh vực sản xuất kỹ thuật, con người luôn khao khát đạt được sự **hoàn hảo và hiệu quả cao nhất**:
- Một doanh nghiệp muốn sản xuất sao cho **lợi nhuận là lớn nhất** nhưng **chi phí là nhỏ nhất**.
- Một kiến trúc sư muốn thiết kế một tòa nhà hay bể chứa nước sao cho **dung tích chứa là lớn nhất** với **diện tích vật liệu xây dựng ít tốn kém nhất**.
- Một kỹ sư giao thông muốn chọn tuyến đường nối hai thành phố sao cho **thời gian di chuyển là ngắn nhất**.

Về mặt toán học, tất cả những bài toán tối ưu hóa vĩ đại đó đều quy về bài toán tìm **Giá trị lớn nhất (GTLN - Max)** và **Giá trị nhỏ nhất (GTNN - Min)** của một hàm số. Đạo hàm chính là chiếc la bàn dẫn đường chuẩn xác nhất để tìm ra các giá trị tối ưu này.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ PHƯƠNG PHÁP: TÌM GTLN VÀ GTNN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Tìm trên Đoạn $[a; b]$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tính $f'(x)$, giải $f'(x) = 0$ tìm $x_i \in (a; b)$.<br>
• Tính $f(a), f(b)$ và các $f(x_i)$.<br>
• <strong>Số lớn nhất là Max, số nhỏ nhất là Min</strong> (không cần lập bảng biến thiên!).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Tìm trên Khoảng $(a; b)$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• <strong>Bắt buộc lập Bảng biến thiên</strong>.<br>
• Tính các giới hạn tại hai đầu mút $\lim_{x \to a^+} f(x)$ và $\lim_{x \to b^-} f(x)$.<br>
• Dựa vào mũi tên biến thiên để kết luận Max/Min.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phân biệt Cực trị vs Max/Min</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• <strong>Cực trị:</strong> Tính chất cục bộ quanh một lân cận hẹp.<br>
• <strong>Max/Min:</strong> Tính chất toàn cục trên toàn bộ tập $D$.<br>
• Giá trị cực đại có thể nhỏ hơn giá trị cực tiểu!
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bài toán Thực tế - Tối ưu</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Chọn ẩn số biến thiên $x$ và tìm điều kiện xác định.<br>
• Lập hàm mục tiêu $f(x)$ cần tối ưu (thể tích, chi phí, lợi nhuận).<br>
• Tìm Max/Min của $f(x)$ trên miền điều kiện.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Xét hàm số $f(x) = \sin x$ trên toàn trục số $\mathbb{R}$. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng bao nhiêu? Đạt được tại những điểm nào?
2. Cho hàm số $f(x) = x^2$ trên đoạn $[-2; 3]$. Giá trị nhỏ nhất của hàm số là bao nhiêu? Giá trị lớn nhất là bao nhiêu?
3. Nếu hàm số $y = f(x)$ đồng biến trên đoạn $[1; 5]$, thì giá trị lớn nhất và giá trị nhỏ nhất nằm ở đâu?
4. Liệu một hàm số có thể có cực đại nhưng KHÔNG có giá trị lớn nhất trên tập xác định không?
5. Một hình chữ nhật có chu vi cố định là $20\text{ m}$. Diện tích của nó lớn nhất khi hình chữ nhật đó là hình gì?

> [!TIP]
> **Đáp án nhanh:**
> 1. $\max = 1$ (tại $x = \frac{\pi}{2} + k2\pi$), $\min = -1$ (tại $x = -\frac{\pi}{2} + k2\pi$).
> 2. Đỉnh parabol tại $x = 0 \in [-2; 3] \implies \min = f(0) = 0$. Tại hai mút: $f(-2) = 4, f(3) = 9 \implies \max = 9$.
> 3. Vì hàm đồng biến nên $\min = f(1)$ và $\max = f(5)$.
> 4. Hoàn toàn có thể! Ví dụ $y = x^3 - 3x$ có cực đại tại $x = -1$ ($y_{CĐ} = 2$), nhưng khi $x \to +\infty$ thì $y \to +\infty$ nên không có GTLN trên $\mathbb{R}$.
> 5. Là hình vuông cạnh $5\text{ m}$ (diện tích cực đại $25\text{ m}^2$).

---

## I. Định nghĩa Giá trị lớn nhất và Giá trị nhỏ nhất

Cho hàm số $y = f(x)$ xác định trên tập hợp $D \subset \mathbb{R}$.

> [!IMPORTANT]
> **Định nghĩa Giá trị lớn nhất (GTLN):**
> Số $M$ được gọi là **giá trị lớn nhất** của hàm số $y = f(x)$ trên tập $D$ nếu:
> 1. $f(x) \le M$ với mọi $x \in D$.
> 2. Tồn tại ít nhất một điểm $x_0 \in D$ sao cho $f(x_0) = M$.
>
> Kí hiệu: $M = \max_{x \in D} f(x)$ hoặc $\max_D f(x)$.

> [!IMPORTANT]
> **Định nghĩa Giá trị nhỏ nhất (GTNN):**
> Số $m$ được gọi là **giá trị nhỏ nhất** của hàm số $y = f(x)$ trên tập $D$ nếu:
> 1. $f(x) \ge m$ với mọi $x \in D$.
> 2. Tồn tại ít nhất một điểm $x_0 \in D$ sao cho $f(x_0) = m$.
>
> Kí hiệu: $m = \min_{x \in D} f(x)$ hoặc $\min_D f(x)$.

> [!WARNING]
> **Điểm mấu chốt bắt buộc:**
> Bắt buộc phải có điểm $x_0 \in D$ để dấu bằng xảy ra ($f(x_0) = M$ hoặc $f(x_0) = m$).
> *Ví dụ:* Hàm số $y = \frac{1}{x}$ trên khoảng $(0; +\infty)$ luôn dương ($y > 0$), nhưng **không có GTNN** vì không tồn tại bất kỳ số $x > 0$ nào để $\frac{1}{x} = 0$!

---

## II. Phương pháp tìm GTLN và GTNN

### 1. Quy tắc tìm GTLN và GTNN trên một đoạn $[a; b]$ (Quy tắc 3 bước nhanh)
Mọi hàm số liên tục trên đoạn $[a; b]$ luôn luôn đạt GTLN và GTNN trên đoạn đó (Định lý Weierstrass). Ta tìm được mà **không cần lập bảng biến thiên**:

> [!TIP]
> **Quy trình 3 bước tính nhanh trên $[a; b]$:**
> - **Bước 1:** Tính đạo hàm $f'(x)$. Tìm tất cả các điểm $x_1, x_2, \dots, x_k$ thuộc khoảng $(a; b)$ mà tại đó $f'(x) = 0$ hoặc $f'(x)$ không xác định.
> - **Bước 2:** Tính giá trị của hàm số tại hai đầu mút và tại các điểm vừa tìm được:
>   $$f(a), \quad f(b), \quad f(x_1), \quad f(x_2), \quad \dots, \quad f(x_k)$$
> - **Bước 3:** So sánh các số tìm được:
>   $$\max_{[a; b]} f(x) = \max\{f(a), f(b), f(x_1), \dots, f(x_k)\}$$
>   $$\min_{[a; b]} f(x) = \min\{f(a), f(b), f(x_1), \dots, f(x_k)\}$$

### 2. Tìm GTLN và GTNN trên một khoảng $(a; b)$ hoặc nửa khoảng
Đối với khoảng $(a; b)$, hàm số có thể không đạt GTLN hoặc GTNN (ví dụ khi đồ thị tiến ra vô cực tại đầu mút).
**Phương pháp giải:**
1. Tính $f'(x)$ và tìm nghiệm thuộc khoảng $(a; b)$.
2. **Lập bảng biến thiên** của hàm số trên khoảng $(a; b)$.
3. Tính các giới hạn tại hai đầu mút: $\lim_{x \to a^+} f(x)$ và $\lim_{x \to b^-} f(x)$.
4. Căn cứ vào bảng biến thiên để kết luận hàm số có đạt GTLN, GTNN hay không và chỉ ra giá trị đó.

---

## Công cụ trực quan: Bài toán Tối ưu Thể tích Hộp Cắt Góc

Từ một tấm bìa hình vuông cạnh $12\text{ cm}$, người ta cắt bỏ 4 hình vuông nhỏ cạnh $x\text{ (cm)}$ ở 4 góc, sau đó gập các mép lại để tạo thành một chiếc hộp chữ nhật không nắp có thể tích:
$$V(x) = x(12 - 2x)^2 = 4x(6 - x)^2 \quad (0 < x < 6)$$

Hãy kéo thanh trượt cạnh cắt $x$ để quan sát đồ thị thể tích $V(x)$ và tìm kích thước cắt tạo ra chiếc hộp có dung tích chứa lớn nhất:

<div id="box-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">BÀI TOÁN TỐI ƯU THỂ TÍCH HỘP CẮT GÓC (KÍCH THƯỚC 12x12 cm)</h4>
  
  <div style="max-width: 460px; margin: 0 auto 16px auto; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <label style="font-weight: 600; color: #1e293b; display: block; margin-bottom: 6px;">
      Độ dài cạnh cắt x: <span id="val-box-x" style="font-size: 1.15em; color: #2563eb;">2.00</span> cm
    </label>
    <input type="range" id="range-box-x" min="0.2" max="5.8" step="0.1" value="2.00" style="width: 100%;">
  </div>

  <div style="display: flex; justify-content: center;">
    <svg id="box-svg" viewBox="0 0 480 260" width="100%" style="max-width: 480px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
      <!-- Trục tọa độ: Gốc (50, 220). Scale x: 60px per unit (0 to 6 cm). Scale V: 1.2px per cm^3 (0 to 150) -->
      <line x1="40" y1="220" x2="450" y2="220" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="50" y1="20" x2="50" y2="230" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="440" y="210" font-family="sans-serif" font-size="11" fill="#64748b">x (cm)</text>
      <text x="55" y="30" font-family="sans-serif" font-size="11" fill="#64748b">V (cm³)</text>
      
      <!-- Static Curve V(x) = x*(12 - 2x)^2 for x in [0, 6] -->
      <path id="curve-vol" d="" fill="none" stroke="#3b82f6" stroke-width="3"/>
      
      <!-- Max Point at (2, 128) -->
      <!-- sx = 50 + 2*60 = 170. sy = 220 - 128*1.2 = 220 - 153.6 = 66.4 -->
      <circle cx="170" cy="66.4" r="5" fill="#10b981"/>
      <text x="180" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">V_max = 128 cm³ (x = 2)</text>

      <!-- Dynamic Point on Curve -->
      <circle id="box-pt" cx="170" cy="66.4" r="6" fill="#ef4444"/>
    </svg>
  </div>

  <div id="box-stats" style="margin-top: 14px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left;">
    <div>• Kích thước đáy hộp: <strong id="val-bottom">8.00 cm × 8.00 cm</strong></div>
    <div>• Chiều cao hộp: <strong id="val-height">2.00 cm</strong></div>
    <div>• Thể tích hộp: <strong id="val-vol" style="color: #047857; font-size: 1.15em;">V = 128.00 cm³ (CỰC ĐẠI - MAX)</strong></div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rX = document.getElementById('range-box-x');
  const valX = document.getElementById('val-box-x');
  const ptBox = document.getElementById('box-pt');
  const valBottom = document.getElementById('val-bottom');
  const valHeight = document.getElementById('val-height');
  const valVol = document.getElementById('val-vol');
  const pathVol = document.getElementById('curve-vol');

  if (!rX || !pathVol) return;

  const originX = 50, originY = 220;
  const scaleX = 60, scaleV = 1.2;

  function V(x) { return x * Math.pow(12 - 2 * x, 2); }

  // Draw static volume curve
  let dCurve = '';
  for (let x = 0; x <= 6; x += 0.05) {
    const v = V(x);
    const sx = originX + x * scaleX;
    const sy = originY - v * scaleV;
    if (dCurve === '') dCurve += `M ${sx} ${sy}`;
    else dCurve += ` L ${sx} ${sy}`;
  }
  pathVol.setAttribute('d', dCurve);

  function update() {
    const x = parseFloat(rX.value);
    const v = V(x);
    const bottom = 12 - 2 * x;

    valX.textContent = x.toFixed(2);
    valHeight.textContent = `${x.toFixed(2)} cm`;
    valBottom.textContent = `${bottom.toFixed(2)} cm × ${bottom.toFixed(2)} cm`;

    const sx = originX + x * scaleX;
    const sy = originY - v * scaleV;
    ptBox.setAttribute('cx', sx);
    ptBox.setAttribute('cy', sy);

    if (Math.abs(x - 2.0) < 0.05) {
      valVol.innerHTML = `V = ${v.toFixed(2)} cm³ <span style="color: #047857; font-weight: bold;">(GIÁ TRỊ LỚN NHẤT - MAX!)</span>`;
    } else {
      valVol.innerHTML = `V = ${v.toFixed(2)} cm³`;
    }
  }

  rX.addEventListener('input', update);
  update();
});
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Tìm GTLN và GTNN trên một đoạn $[a; b]$

**Bài toán 1:** Tìm giá trị lớn nhất và giá trị nhỏ nhất của các hàm số sau:
a) $f(x) = x^3 - 3x^2 - 9x + 35$ trên đoạn $[-4; 4]$.  
b) $f(x) = \frac{x - 1}{x + 2}$ trên đoạn $[0; 4]$.  
c) $f(x) = x + \sqrt{4 - x^2}$ trên tập xác định của nó.

**Lời giải:**
a) $f(x) = x^3 - 3x^2 - 9x + 35$ trên $[-4; 4]$:
- Đạo hàm: $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)$.
- Nghiệm: $f'(x) = 0 \iff x = -1$ hoặc $x = 3$ (cả hai nghiệm đều thuộc $(-4; 4)$).
- Tính giá trị tại các điểm nghi ngờ và hai đầu mút:
  + $f(-4) = (-4)^3 - 3(-4)^2 - 9(-4) + 35 = -64 - 48 + 36 + 35 = -41$.
  + $f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 35 = -1 - 3 + 9 + 35 = 40$.
  + $f(3) = (3)^3 - 3(3)^2 - 9(3) + 35 = 27 - 27 - 27 + 35 = 8$.
  + $f(4) = (4)^3 - 3(4)^2 - 9(4) + 35 = 64 - 48 - 36 + 35 = 15$.
- So sánh các kết quả:
  $$\max_{[-4; 4]} f(x) = f(-1) = 40$$
  $$\min_{[-4; 4]} f(x) = f(-4) = -41$$

b) $f(x) = \frac{x - 1}{x + 2}$ trên $[0; 4]$:
- Đạo hàm: $f'(x) = \frac{1(2) - (-1)(1)}{(x + 2)^2} = \frac{3}{(x + 2)^2} > 0, \forall x \in [0; 4]$.
- Vì hàm số đồng biến liên tục trên $[0; 4]$ nên:
  $$\min_{[0; 4]} f(x) = f(0) = \frac{0 - 1}{0 + 2} = -\frac{1}{2}$$
  $$\max_{[0; 4]} f(x) = f(4) = \frac{4 - 1}{4 + 2} = \frac{3}{6} = \frac{1}{2}$$

c) $f(x) = x + \sqrt{4 - x^2}$:
- Tập xác định: $4 - x^2 \ge 0 \iff x \in [-2; 2]$.
- Đạo hàm trên $(-2; 2)$:
  $$f'(x) = 1 - \frac{2x}{2\sqrt{4 - x^2}} = 1 - \frac{x}{\sqrt{4 - x^2}} = \frac{\sqrt{4 - x^2} - x}{\sqrt{4 - x^2}}$$
- $f'(x) = 0 \iff \sqrt{4 - x^2} = x \iff \left\{\begin{array}{l} x \ge 0 \\ 4 - x^2 = x^2 \end{array}\right. \iff 2x^2 = 4 \iff x = \sqrt{2} \in (-2; 2)$.
- Tính các giá trị:
  + $f(-2) = -2 + \sqrt{0} = -2$.
  + $f(2) = 2 + \sqrt{0} = 2$.
  + $f(\sqrt{2}) = \sqrt{2} + \sqrt{4 - 2} = 2\sqrt{2}$.
- So sánh:
  $$\max_{[-2; 2]} f(x) = f(\sqrt{2}) = 2\sqrt{2} \approx 2.828$$
  $$\min_{[-2; 2]} f(x) = f(-2) = -2$$

---

### Dạng 2: Tìm GTLN và GTNN trên một khoảng (dùng Bảng biến thiên)

**Bài toán 2:** Tìm giá trị nhỏ nhất của hàm số $f(x) = x + \frac{4}{x}$ trên khoảng $(0; +\infty)$.

**Lời giải:**
- Tập xác định đang xét: $D = (0; +\infty)$.
- Đạo hàm:
  $$f'(x) = 1 - \frac{4}{x^2} = \frac{x^2 - 4}{x^2}$$
- Nghiệm trên $(0; +\infty)$:
  $$f'(x) = 0 \iff x^2 - 4 = 0 \iff x = 2 \quad (\text{loại } x = -2)$$
- Bảng biến thiên trên $(0; +\infty)$:

| $x$ | $0$ | | $2$ | | $+\infty$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $f'(x)$ | $\|$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | $\searrow$ | $4$ | $\nearrow$ | $+\infty$ |

*(Giải thích giới hạn: Khi $x \to 0^+ \implies \frac{4}{x} \to +\infty \implies f(x) \to +\infty$; khi $x \to +\infty \implies f(x) \to +\infty$).*
- Dựa vào bảng biến thiên:
  $$\min_{(0; +\infty)} f(x) = f(2) = 2 + \frac{4}{2} = 4$$
  Hàm số không có giá trị lớn nhất trên $(0; +\infty)$.  
*(Cách khác: Dùng bất đẳng thức Cauchy cho 2 số dương $x + \frac{4}{x} \ge 2\sqrt{x \cdot \frac{4}{x}} = 4$, dấu bằng khi $x = 2$).*

---

### Dạng 3: Bài toán tối ưu hóa hình học trong thực tế

**Bài toán 3:** Một bác nông dân có một cuộn lưới thép dài $60\text{ m}$ muốn rào một mảnh vườn hình chữ nhật sát một bờ tường thẳng có sẵn (bờ tường không cần rào). Hỏi kích thước các cạnh của mảnh vườn là bao nhiêu để diện tích được rào là lớn nhất? Diện tích lớn nhất đó bằng bao nhiêu?

**Lời giải:**
Gọi $x$ (mét) là chiều rộng của mảnh vườn vuông góc với bờ tường ($0 < x < 30$).
Vì một cạnh dài đã có bờ tường chắn nên bác nông dân chỉ cần rào 2 cạnh chiều rộng và 1 cạnh chiều dài song song với tường.
Độ dài cạnh chiều dài song song với tường là:
$$y = 60 - 2x \quad (\text{mét})$$
Diện tích mảnh vườn là một hàm số theo $x$:
$$S(x) = x(60 - 2x) = 60x - 2x^2 \quad (0 < x < 30)$$
Đạo hàm:
$$S'(x) = 60 - 4x$$
$$S'(x) = 0 \iff 60 - 4x = 0 \iff x = 15\text{ m}$$
Vì $S''(x) = -4 < 0$ nên $x = 15$ là điểm cực đại và cũng là điểm đạt GTLN trên khoảng $(0; 30)$.
- Chiều rộng: $x = 15\text{ m}$.
- Chiều dài: $y = 60 - 2(15) = 30\text{ m}$.
- Diện tích lớn nhất của mảnh vườn là:
  $$S_{max} = 15 \times 30 = 450\text{ m}^2$$

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị lớn nhất của hàm số f(x) = x^3 - 3x trên đoạn [0; 2] bằng:",
  "options": [
    "A. 2",
    "B. 0",
    "C. -2",
    "D. 1"
  ],
  "answer": "A. 2",
  "explanation": "f\u0027(x) = 3x^2 - 3 = 0 <=> x = 1 ∈ (0; 2). f(0) = 0, f(1) = -2, f(2) = 2. Giá trị lớn nhất là f(2) = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Giá trị nhỏ nhất của hàm số f(x) = (x - 3) / (x + 1) trên đoạn [0; 3] bằng:",
  "options": [
    "A. -3",
    "B. 0",
    "C. -1",
    "D. 3"
  ],
  "answer": "A. -3",
  "explanation": "f\u0027(x) = 4 / (x + 1)^2 > 0 với mọi x ∈ [0; 3]. Hàm đồng biến nên GTNN đạt tại mút trái: f(0) = -3 / 1 = -3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hàm số y = f(x) liên tục trên [-1; 3] và có bảng biến thiên: f(-1) = 2, f(1) = 5 (cực đại), f(2) = -1 (cực tiểu), f(3) = 4. Mệnh đề nào sau đây đúng?",
  "options": [
    "A. max_[-1; 3] f(x) = 5 và min_[-1; 3] f(x) = -1",
    "B. max_[-1; 3] f(x) = 4 và min_[-1; 3] f(x) = 2",
    "C. max_[-1; 3] f(x) = 5 và min_[-1; 3] f(x) = 2",
    "D. Không tồn tại min"
  ],
  "answer": "A. max_[-1; 3] f(x) = 5 và min_[-1; 3] f(x) = -1",
  "explanation": "So sánh các giá trị {2, 5, -1, 4}, số lớn nhất là 5 (tại x = 1) và số nhỏ nhất là -1 (tại x = 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Giá trị nhỏ nhất của hàm số y = x + 9/x trên khoảng (0; +∞) bằng:",
  "options": [
    "A. 6",
    "B. 9",
    "C. 3",
    "D. 10"
  ],
  "answer": "A. 6",
  "explanation": "y\u0027 = 1 - 9/x^2 = 0 <=> x = 3 (với x > 0). Tại x = 3: y = 3 + 9/3 = 6. Bảng biến thiên cho thấy GTNN = 6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Giá trị lớn nhất của hàm số y = √(9 - x^2) bằng:",
  "options": [
    "A. 3",
    "B. 9",
    "C. 0",
    "D. 81"
  ],
  "answer": "A. 3",
  "explanation": "Vì x^2 ≥ 0 nên 9 - x^2 ≤ 9 => √(9 - x^2) ≤ 3. Dấu bằng đạt tại x = 0. Vậy GTLN bằng 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Hàm số y = x^4 - 2x^2 + 1 trên đoạn [-2; 1] có tổng giá trị lớn nhất và giá trị nhỏ nhất bằng:",
  "options": [
    "A. 9",
    "B. 8",
    "C. 1",
    "D. 0"
  ],
  "answer": "A. 9",
  "explanation": "y\u0027 = 4x^3 - 4x = 0 <=> x = 0, x = ±1 (đều thuộc [-2; 1]). y(-2) = 9; y(-1) = 0; y(0) = 1; y(1) = 0. Max = 9, Min = 0. Tổng = 9 + 0 = 9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tìm m để giá trị nhỏ nhất của hàm số f(x) = x^2 - 4x + m trên đoạn [0; 3] bằng 5:",
  "options": [
    "A. m = 9",
    "B. m = 5",
    "C. m = 1",
    "D. m = 4"
  ],
  "answer": "A. m = 9",
  "explanation": "f\u0027(x) = 2x - 4 = 0 <=> x = 2 ∈ (0; 3). f(0) = m; f(2) = m - 4; f(3) = m - 3. GTNN là f(2) = m - 4. Theo đề bài m - 4 = 5 <=> m = 9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Giá trị lớn nhất của hàm số y = sin x + cos x bằng:",
  "options": [
    "A. √2",
    "B. 2",
    "C. 1",
    "D. √3"
  ],
  "answer": "A. √2",
  "explanation": "sin x + cos x = √2 sin(x + π/4) ≤ √2. Dấu bằng khi x = π/4 + k2π. Vậy GTLN bằng √2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Hàm số nào sau đây KHÔNG có giá trị nhỏ nhất trên ℝ?",
  "options": [
    "A. y = x^3 - 3x",
    "B. y = x^2 - 4x + 1",
    "C. y = x^4 - 2x^2",
    "D. y = e^x + e^(-x)"
  ],
  "answer": "A. y = x^3 - 3x",
  "explanation": "Hàm bậc ba y = x^3 - 3x có lim (x → -∞) = -∞ nên không bị chặn dưới, do đó không có GTNN trên ℝ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Một sợi dây thép dài 40 cm được uốn thành một hình chữ nhật. Diện tích lớn nhất của hình chữ nhật đó là:",
  "options": [
    "A. 100 cm^2",
    "B. 400 cm^2",
    "C. 50 cm^2",
    "D. 200 cm^2"
  ],
  "answer": "A. 100 cm^2",
  "explanation": "Nửa chu vi a + b = 20 cm. Diện tích S = a(20 - a) = -a^2 + 20a = -(a - 10)^2 + 100 ≤ 100 cm^2. Dấu bằng khi a = b = 10 cm (hình vuông)."
}'></div>

---

## V. Ứng dụng Thực tế: Thiết kế Lon Nước Ngọt Tiết kiệm Chi phí Kim loại

Một bài toán tối ưu kinh điển của các tập đoàn nước giải khát toàn cầu (như Coca-Cola hay Pepsi):

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Bài toán Kỹ thuật Bao bì Công nghiệp:</strong><br>
Công ty cần thiết kế một lon nước ngọt hình trụ bằng nhôm có thể tích dung tích tiêu chuẩn là $V = 330\text{ ml} = 330\text{ cm}^3$.<br>
Hãy tìm tỉ lệ giữa chiều cao $h$ và bán kính đáy $r$ của lon nước ngọt sao cho <strong>diện tích toàn phần $S_{tp}$ của vỏ nhôm là nhỏ nhất</strong> (để tiết kiệm tối đa nguyên vật liệu và chi phí dập vỏ lon khi sản xuất hàng tỷ lon mỗi năm).
</div>

> [!TIP]
> **Giải bài toán tối ưu bằng đạo hàm:**
> 1. Thể tích hình trụ: $V = \pi r^2 h = 330 \implies h = \frac{330}{\pi r^2}$.
> 2. Diện tích toàn phần của lon (gồm 2 đáy và diện tích xung quanh):
>    $$S_{tp}(r) = 2\pi r^2 + 2\pi r h = 2\pi r^2 + 2\pi r \left(\frac{330}{\pi r^2}\right) = 2\pi r^2 + \frac{660}{r} \quad (r > 0)$$
> 3. Lấy đạo hàm tìm điểm cực tiểu:
>    $$S'_{tp}(r) = 4\pi r - \frac{660}{r^2} = \frac{4\pi r^3 - 660}{r^2}$$
>    $$S'_{tp}(r) = 0 \iff 4\pi r^3 = 660 \iff 2\pi r^3 = 330$$
> 4. So sánh với công thức thể tích ban đầu $330 = \pi r^2 h$:
>    $$2\pi r^3 = \pi r^2 h \iff h = 2r = d$$
>    **Kết luận ngoạn mục:** Vỏ lon sẽ tốn ít nhôm nhất khi **chiều cao lon bằng đúng đường kính đáy** ($h = 2r$)!
