---
title: 'Toán 12 Bài 3: Đường tiệm cận của đồ thị hàm số - Tiệm cận đứng, ngang và xiên'
description: 'Lý thuyết trọng tâm Bài 3 Toán 12 Kết nối tri thức: Định nghĩa và phương pháp tìm tiệm cận đứng, tiệm cận ngang và tiệm cận xiên (mới GDPT 2018); mô phỏng đường tiệm cận tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Tiệm cận đứng
  - Tiệm cận ngang
  - Tiệm cận xiên
  - Giới hạn vô cực
  - Đồ thị hàm số
  - Kết nối tri thức
grade: 12
---

# Bài 3. Đường tiệm cận của đồ thị hàm số

Khi nghiên cứu các hiện tượng trong tự nhiên, kỹ thuật và đời sống, chúng ta thường quan tâm đến trạng thái của hệ thống trong **dài hạn** (khi thời gian $t \to +\infty$) hoặc khi đối số tiếp cận những **ngưỡng nhạy cảm nguy hiểm** (như áp suất tăng vô hạn khi thể tích co về $0$).

Trong hình học giải tích, các hành vi đó thể hiện qua hình ảnh đồ thị hàm số vươn ra xa vô tận nhưng lại ngày càng **áp sát đến mức gần như trùng khít vào một đường thẳng cố định**. Đường thẳng đặc biệt đó được gọi là **Đường tiệm cận (Asymptote)**.

Chương trình Toán 12 (Bộ sách Kết nối tri thức với cuộc sống) trang bị cho các em đầy đủ 3 loại tiệm cận chuẩn mực: **Tiệm cận đứng, Tiệm cận ngang và Tiệm cận xiên**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KHÁI NIỆM: BA LOẠI ĐƯỜNG TIỆM CẬN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="margin: 0 0 8px 0; color: #b91c1c;">1. Tiệm cận Đứng: x = x₀</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• Đường thẳng <strong>thẳng đứng</strong>.<br>
• Điều kiện: Ít nhất 1 trong 4 giới hạn:<br>
$$\lim_{x \to x_0^\pm} f(x) = \pm\infty$$<br>
• Thường là nghiệm mẫu không triệt tiêu tử.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Tiệm cận Ngang: y = y₀</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• Đường thẳng <strong>nằm ngang</strong>.<br>
• Điều kiện: Giới hạn khi ra xa vô cực:<br>
$$\lim_{x \to +\infty} f(x) = y_0 \text{ hoặc } \lim_{x \to -\infty} f(x) = y_0$$<br>
• Phân thức có bậc tử $\le$ bậc mẫu.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">3. Tiệm cận Xiên: y = ax + b (a ≠ 0)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• Đường thẳng <strong>nghiêng</strong>.<br>
• Điều kiện:<br>
$$\lim_{x \to \pm\infty} [f(x) - (ax + b)] = 0$$<br>
• Phân thức có bậc tử = bậc mẫu + 1 (chia đa thức để tìm nhanh).
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Tính giới hạn sau: $\lim_{x \to +\infty} \frac{2x + 1}{x - 3}$.
2. Khi $x$ tiến dần về $3$ từ bên phải ($x \to 3^+$), giá trị của phân thức $\frac{2x + 1}{x - 3}$ tiến về đâu?
3. Đường thẳng có phương trình $x = 2$ có song song với trục $Oy$ không?
4. Đường thẳng có phương trình $y = -1$ có song song với trục $Ox$ không?
5. Chia đa thức sau: $(x^2 + 2x - 1) : (x + 1)$. Thương số và phần dư là bao nhiêu?

> [!TIP]
> **Đáp án nhanh:**
> 1. Chia cả tử và mẫu cho $x$: $\lim_{x \to +\infty} \frac{2 + 1/x}{1 - 3/x} = 2$.
> 2. Mẫu tiến về $0^+$ (dương), tử tiến về $7 > 0 \implies \lim = +\infty$.
> 3. Có, $x = 2$ là đường thẳng thẳng đứng song song với trục $Oy$.
> 4. Có, $y = -1$ là đường thẳng nằm ngang song song với trục $Ox$.
> 5. $\frac{x^2 + 2x - 1}{x + 1} = x + 1 - \frac{2}{x + 1}$. Thương là $x + 1$, dư $-2$.

---

## I. Đường Tiệm cận đứng

### 1. Định nghĩa
Cho hàm số $y = f(x)$ xác định trên một khoảng có đầu mút là $x_0$.

> [!IMPORTANT]
> **Định nghĩa Đường tiệm cận đứng:**
> Đường thẳng $x = x_0$ được gọi là **đường tiệm cận đứng** (hay tiệm cận đứng) của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau đây được thỏa mãn:
> 1. $\lim_{x \to x_0^+} f(x) = +\infty$
> 2. $\lim_{x \to x_0^+} f(x) = -\infty$
> 3. $\lim_{x \to x_0^-} f(x) = +\infty$
> 4. $\lim_{x \to x_0^-} f(x) = -\infty$

### 2. Dấu hiệu nhận biết nhanh cho hàm phân thức
Với hàm phân thức hữu tỉ $y = \frac{P(x)}{Q(x)}$:
- Các đường tiệm cận đứng thường xuất phát từ các nghiệm $x_0$ của mẫu số $Q(x) = 0$.
- Nếu $x_0$ là nghiệm của mẫu nhưng **không phải** là nghiệm của tử số ($P(x_0) \ne 0$), thì đường thẳng $x = x_0$ **chắc chắn là tiệm cận đứng**.
- Nếu $x_0$ vừa là nghiệm của mẫu vừa là nghiệm của tử, ta phải rút gọn phân thức triệt tiêu nhân tử $(x - x_0)$ trước khi kết luận!

*Ví dụ:* Hàm số $y = \frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x - 1} = x + 1$ (với $x \ne 1$). Khi $x \to 1$, $y \to 2$ (hữu hạn), nên đồ thị **không có tiệm cận đứng** mà chỉ bị "thủng một lỗ" tại điểm $(1; 2)$.

---

## II. Đường Tiệm cận ngang

### 1. Định nghĩa
Cho hàm số $y = f(x)$ xác định trên khoảng $(a; +\infty)$ hoặc $(-\infty; b)$.

> [!IMPORTANT]
> **Định nghĩa Đường tiệm cận ngang:**
> Đường thẳng $y = y_0$ được gọi là **đường tiệm cận ngang** (hay tiệm cận ngang) của đồ thị hàm số $y = f(x)$ nếu:
> $$\lim_{x \to +\infty} f(x) = y_0 \quad \text{hoặc} \quad \lim_{x \to -\infty} f(x) = y_0$$

> [!NOTE]
> **Số lượng tiệm cận ngang:**
> Một đồ thị hàm số có thể có **tối đa 2 đường tiệm cận ngang** (khi $\lim_{x \to +\infty} f(x)$ và $\lim_{x \to -\infty} f(x)$ cho ra 2 giá trị hữu hạn khác nhau). Điều này thường xảy ra ở các hàm số chứa căn thức bậc hai $\sqrt{x^2} = |x|$.

### 2. Dấu hiệu đối với phân thức hữu tỉ
Đối với hàm phân thức hữu tỉ $y = \frac{P(x)}{Q(x)}$ (trong đó $P(x)$ có bậc $m$, $Q(x)$ có bậc $n$):
- **Nếu $m < n$ (bậc tử nhỏ hơn bậc mẫu):** Đồ thị luôn có tiệm cận ngang là trục hoành: $y = 0$.
- **Nếu $m = n$ (bậc tử bằng bậc mẫu):** Đồ thị có tiệm cận ngang là $y = \frac{a_m}{b_n}$ (tỉ số hai hệ số của lũy thừa cao nhất).
- **Nếu $m > n$ (bậc tử lớn hơn bậc mẫu):** Đồ thị **không có tiệm cận ngang**.

---

## III. Đường Tiệm cận xiên (Trọng tâm mới trong GDPT 2018)

Khi bậc của tử số lớn hơn bậc của mẫu số đúng 1 bậc, đồ thị không tiến về một đường nằm ngang mà sẽ tiến sát về một **đường thẳng nghiêng**.

### 1. Định nghĩa
Cho hàm số $y = f(x)$ xác định trên khoảng $(a; +\infty)$ hoặc $(-\infty; b)$.

> [!IMPORTANT]
> **Định nghĩa Đường tiệm cận xiên:**
> Đường thẳng $y = ax + b$ ($a \ne 0$) được gọi là **đường tiệm cận xiên** (hay tiệm cận xiên) của đồ thị hàm số $y = f(x)$ nếu:
> $$\lim_{x \to +\infty} [f(x) - (ax + b)] = 0 \quad \text{hoặc} \quad \lim_{x \to -\infty} [f(x) - (ax + b)] = 0$$

### 2. Phương pháp tìm tiệm cận xiên
#### Cách 1: Chia đa thức (áp dụng cho hàm phân thức bậc 2 trên bậc 1)
Cho hàm số:
$$y = f(x) = \frac{Ax^2 + Bx + C}{px + q} \quad (A \ne 0, p \ne 0)$$
Bằng phép chia đa thức tử cho mẫu, ta luôn biểu diễn được:
$$f(x) = (ax + b) + \frac{r}{px + q}$$
Vì $\lim_{x \to \pm\infty} \frac{r}{px + q} = 0$, nên đường thẳng:
$$\mathbf{y = ax + b}$$
chính là **đường tiệm cận xiên** của đồ thị hàm số!

#### Cách 2: Công thức giới hạn tổng quát
Nếu không chia đa thức được trực tiếp, ta tính hệ số $a$ và $b$ bằng giới hạn:
$$a = \lim_{x \to \pm\infty} \frac{f(x)}{x} \quad (a \ne 0)$$
$$b = \lim_{x \to \pm\infty} [f(x) - ax]$$

---

## Công cụ trực quan: Bộ Mô phỏng Tiệm cận Đứng, Ngang và Xiên

Hãy bấm chọn chuyển đổi giữa hai hàm số mẫu kinh điển bên dưới để quan sát cách các đường tiệm cận (nét đứt màu đỏ/xanh) định hình khung xương của đồ thị:

<div id="asymptote-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG HÌNH HỌC: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ</h4>
  
  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 16px;">
    <button type="button" class="btn-asymp active" data-mode="nhan" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: 600; cursor: pointer;">
      Hàm Bậc 1/1: y = (2x - 1)/(x - 1)
    </button>
    <button type="button" class="btn-asymp" data-mode="xien" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: 600; cursor: pointer;">
      Hàm Bậc 2/1: y = (x² - x + 1)/(x - 1)
    </button>
  </div>

  <div style="display: flex; justify-content: center;">
    <svg id="asymp-svg" viewBox="0 0 500 320" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
      <!-- Trục tọa độ: Gốc (220, 160). Scale 30px per unit -->
      <line x1="20" y1="160" x2="480" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="220" y1="20" x2="220" y2="300" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="470" y="150" font-family="sans-serif" font-size="11" fill="#64748b">x</text>
      <text x="230" y="30" font-family="sans-serif" font-size="11" fill="#64748b">y</text>
      
      <!-- Curves: Left branch & Right branch -->
      <path id="curve-left" d="" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <path id="curve-right" d="" fill="none" stroke="#2563eb" stroke-width="2.5"/>

      <!-- Asymptotes -->
      <!-- Vertical Asymptote x = 1 (at 220 + 30 = 250) -->
      <line id="asymp-vert" x1="250" y1="15" x2="250" y2="305" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4"/>
      <text id="lbl-vert" x="255" y="40" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">TCĐ: x = 1</text>

      <!-- Horizontal or Slant Asymptote -->
      <line id="asymp-other" x1="20" y1="100" x2="480" y2="100" stroke="#059669" stroke-width="2" stroke-dasharray="6,4"/>
      <text id="lbl-other" x="380" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">TCN: y = 2</text>
    </svg>
  </div>

  <div id="asymp-desc" style="margin-top: 14px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left;">
    <strong>Phân tích hàm y = (2x - 1)/(x - 1):</strong><br>
    • Tiệm cận đứng: <strong>x = 1</strong> (mẫu bằng 0).<br>
    • Tiệm cận ngang: <strong>y = 2</strong> (tỉ số 2/1 khi x → ±∞).<br>
    • Giao điểm 2 tiệm cận I(1; 2) chính là tâm đối xứng của đồ thị hyperbol!
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.btn-asymp');
  const pathL = document.getElementById('curve-left');
  const pathR = document.getElementById('curve-right');
  const lineOther = document.getElementById('asymp-other');
  const lblOther = document.getElementById('lbl-other');
  const desc = document.getElementById('asymp-desc');

  if (!btns.length || !pathL) return;

  const originX = 220, originY = 160;
  const scale = 30; // 30px per unit

  function render(mode) {
    let dL = '', dR = '';
    if (mode === 'nhan') {
      // y = (2x - 1)/(x - 1) = 2 + 1/(x - 1)
      // Left branch: x from -6 to 0.8
      for (let x = -6; x <= 0.85; x += 0.05) {
        const y = (2*x - 1)/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dL === '') dL += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dL += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      // Right branch: x from 1.15 to 8
      for (let x = 1.15; x <= 8; x += 0.05) {
        const y = (2*x - 1)/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dR === '') dR += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dR += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      pathL.setAttribute('d', dL);
      pathR.setAttribute('d', dR);

      // Horizontal Asymptote y = 2 => sy = 160 - 2*30 = 100
      lineOther.setAttribute('x1', '20');
      lineOther.setAttribute('y1', '100');
      lineOther.setAttribute('x2', '480');
      lineOther.setAttribute('y2', '100');
      lblOther.setAttribute('x', '380');
      lblOther.setAttribute('y', '90');
      lblOther.textContent = 'TCN: y = 2';

      desc.innerHTML = '<strong>Phân tích hàm y = (2x - 1)/(x - 1):</strong><br>• Tiệm cận đứng: <strong>x = 1</strong> (mẫu số bằng 0).<br>• Tiệm cận ngang: <strong>y = 2</strong> (tỉ số 2/1 khi x → ±∞).<br>• Giao điểm 2 tiệm cận I(1; 2) chính là tâm đối xứng của hyperbol!';
    } else {
      // y = (x^2 - x + 1)/(x - 1) = x + 1/(x - 1)
      // Slant asymptote y = x
      // Left branch: x from -6 to 0.8
      for (let x = -6; x <= 0.85; x += 0.05) {
        const y = x + 1/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dL === '') dL += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dL += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      // Right branch: x from 1.15 to 8
      for (let x = 1.15; x <= 8; x += 0.05) {
        const y = x + 1/(x - 1);
        const sx = originX + x * scale;
        const sy = originY - y * scale;
        if (dR === '') dR += `M ${sx} ${Math.max(-20, Math.min(340, sy))}`;
        else dR += ` L ${sx} ${Math.max(-20, Math.min(340, sy))}`;
      }
      pathL.setAttribute('d', dL);
      pathR.setAttribute('d', dR);

      // Slant asymptote y = x: through (0,0)->(220,160)
      // x1 = -6 => sx = 220 - 180 = 40, sy = 160 - (-6)*30 = 340
      // x2 = 8 => sx = 220 + 240 = 460, sy = 160 - 8*30 = -80
      lineOther.setAttribute('x1', '40');
      lineOther.setAttribute('y1', '340');
      lineOther.setAttribute('x2', '460');
      lineOther.setAttribute('y2', '-80');
      lblOther.setAttribute('x', '350');
      lblOther.setAttribute('y', '50');
      lblOther.textContent = 'TCX: y = x';

      desc.innerHTML = '<strong>Phân tích hàm y = (x² - x + 1)/(x - 1) = x + 1/(x - 1):</strong><br>• Tiệm cận đứng: <strong>x = 1</strong>.<br>• Tiệm cận xiên: <strong>y = x</strong> (được xác định bằng phần thương khi chia đa thức).<br>• Giao điểm 2 tiệm cận I(1; 1) là tâm đối xứng của đồ thị!';
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btns.forEach(b => {
        b.style.background = '';
        b.style.color = '';
      });
      this.style.background = this.dataset.mode === 'nhan' ? '#2563eb' : '#10b981';
      this.style.color = '#fff';
      render(this.dataset.mode);
    });
  });

  render('nhan');
});
</script>

---

## IV. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Tìm tiệm cận của hàm phân thức bậc nhất trên bậc nhất

**Bài toán 1:** Tìm các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số:
$$y = f(x) = \frac{3x + 1}{2 - x}$$

**Lời giải:**
Tập xác định: $D = \mathbb{R} \setminus \{2\}$.

1. **Tìm tiệm cận đứng:**
   Xét tại điểm kỳ dị $x = 2$:
   $$\lim_{x \to 2^+} \frac{3x + 1}{2 - x} = -\infty \quad (\text{vì tử } \to 7 > 0 \text{ và mẫu } 2 - x \to 0^- < 0)$$
   $$\lim_{x \to 2^-} \frac{3x + 1}{2 - x} = +\infty \quad (\text{vì tử } \to 7 > 0 \text{ và mẫu } 2 - x \to 0^+ > 0)$$
   Vậy đường thẳng $\mathbf{x = 2}$ là đường tiệm cận đứng của đồ thị hàm số.

2. **Tìm tiệm cận ngang:**
   Xét giới hạn tại vô cực:
   $$\lim_{x \to +\infty} \frac{3x + 1}{2 - x} = \lim_{x \to +\infty} \frac{3 + \frac{1}{x}}{\frac{2}{x} - 1} = \frac{3}{-1} = -3$$
   $$\lim_{x \to -\infty} \frac{3x + 1}{2 - x} = -3$$
   Vậy đường thẳng $\mathbf{y = -3}$ là đường tiệm cận ngang của đồ thị hàm số.

---

### Dạng 2: Tìm tiệm cận xiên của hàm phân thức bậc hai trên bậc nhất

**Bài toán 2:** Tìm các đường tiệm cận đứng và tiệm cận xiên của đồ thị hàm số:
$$y = f(x) = \frac{2x^2 - 3x + 2}{x - 1}$$

**Lời giải:**
Tập xác định: $D = \mathbb{R} \setminus \{1\}$.

1. **Tiệm cận đứng:**
   Nghiệm của mẫu là $x = 1$. Thay $x = 1$ vào tử: $2(1)^2 - 3(1) + 2 = 1 \ne 0$.
   $$\lim_{x \to 1^+} \frac{2x^2 - 3x + 2}{x - 1} = +\infty; \quad \lim_{x \to 1^-} \frac{2x^2 - 3x + 2}{x - 1} = -\infty$$
   Do đó đường thẳng $\mathbf{x = 1}$ là tiệm cận đứng.

2. **Tiệm cận xiên:**
   Thực hiện phép chia đa thức tử cho mẫu:
   $$2x^2 - 3x + 2 = 2x(x - 1) - (x - 1) + 1 = (2x - 1)(x - 1) + 1$$
   Suy ra:
   $$f(x) = 2x - 1 + \frac{1}{x - 1}$$
   Xét hiệu:
   $$\lim_{x \to \pm\infty} [f(x) - (2x - 1)] = \lim_{x \to \pm\infty} \frac{1}{x - 1} = 0$$
   Vậy đường thẳng $\mathbf{y = 2x - 1}$ là đường tiệm cận xiên của đồ thị hàm số.

---

### Dạng 3: Tìm tiệm cận của hàm số chứa căn thức

**Bài toán 3:** Tìm tất cả các đường tiệm cận ngang của đồ thị hàm số:
$$y = f(x) = \frac{\sqrt{x^2 + 1} - 2x}{x + 1}$$

**Lời giải:**
Tập xác định: $D = \mathbb{R} \setminus \{-1\}$.
Xét các giới hạn khi $x \to +\infty$ và $x \to -\infty$:

1. Khi $x \to +\infty$ ($x > 0 \implies \sqrt{x^2 + 1} = x\sqrt{1 + \frac{1}{x^2}}$):
   $$\lim_{x \to +\infty} \frac{x\sqrt{1 + \frac{1}{x^2}} - 2x}{x(1 + \frac{1}{x})} = \lim_{x \to +\infty} \frac{\sqrt{1 + \frac{1}{x^2}} - 2}{1 + \frac{1}{x}} = \frac{1 - 2}{1} = -1$$
   Vậy đường thẳng $\mathbf{y = -1}$ là một tiệm cận ngang.

2. Khi $x \to -\infty$ ($x < 0 \implies \sqrt{x^2 + 1} = |x|\sqrt{1 + \frac{1}{x^2}} = -x\sqrt{1 + \frac{1}{x^2}}$):
   $$\lim_{x \to -\infty} \frac{-x\sqrt{1 + \frac{1}{x^2}} - 2x}{x(1 + \frac{1}{x})} = \lim_{x \to -\infty} \frac{-\sqrt{1 + \frac{1}{x^2}} - 2}{1 + \frac{1}{x}} = \frac{-1 - 2}{1} = -3$$
   Vậy đường thẳng $\mathbf{y = -3}$ là một tiệm cận ngang thứ hai.

**Kết luận:** Đồ thị hàm số có đúng 2 đường tiệm cận ngang phân biệt là $\mathbf{y = -1}$ và $\mathbf{y = -3}$.

---

## V. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Tiệm cận đứng của đồ thị hàm số y = (2x - 3) / (x + 1) là đường thẳng:",
  "options": [
    "A. x = -1",
    "B. x = 2",
    "C. y = 2",
    "D. y = -1"
  ],
  "answer": "A. x = -1",
  "explanation": "Mẫu số x + 1 = 0 <=> x = -1. Tại x = -1 tử số bằng -5 ≠ 0 nên x = -1 là tiệm cận đứng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tiệm cận ngang của đồ thị hàm số y = (4x + 1) / (2x - 3) là đường thẳng:",
  "options": [
    "A. y = 2",
    "B. x = 3/2",
    "C. y = 4",
    "D. y = -1/3"
  ],
  "answer": "A. y = 2",
  "explanation": "lim (x → ±∞) (4x + 1)/(2x - 3) = 4/2 = 2. Vậy tiệm cận ngang là y = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tiệm cận xiên của đồ thị hàm số y = (x^2 + 3x - 1) / (x + 2) là đường thẳng:",
  "options": [
    "A. y = x + 1",
    "B. y = x - 1",
    "C. y = x + 2",
    "D. y = 2x + 1"
  ],
  "answer": "A. y = x + 1",
  "explanation": "Chia đa thức: (x^2 + 3x - 1) = (x + 1)(x + 2) - 3 => y = x + 1 - 3/(x + 2). Vậy tiệm cận xiên là y = x + 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Số đường tiệm cận (đứng và ngang) của đồ thị hàm số y = (x - 2) / (x^2 - 4) là:",
  "options": [
    "A. 2 (1 đứng, 1 ngang)",
    "B. 3 (2 đứng, 1 ngang)",
    "C. 1",
    "D. 0"
  ],
  "answer": "A. 2 (1 đứng, 1 ngang)",
  "explanation": "y = (x - 2) / [(x - 2)(x + 2)] = 1 / (x + 2) (với x ≠ 2). Tiệm cận đứng duy nhất là x = -2 (tại x = 2 đồ thị bị thủng điểm, không phải TCĐ). Bậc tử < bậc mẫu nên có 1 TCN y = 0. Tổng cộng có 2 đường tiệm cận."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Đồ thị hàm số nào sau đây KHÔNG có tiệm cận đứng?",
  "options": [
    "A. y = (x^2 + 1) / (x^2 + 4)",
    "B. y = 1 / (x - 1)",
    "C. y = (2x + 3) / x",
    "D. y = (x^2 - 1) / (x + 2)"
  ],
  "answer": "A. y = (x^2 + 1) / (x^2 + 4)",
  "explanation": "Mẫu số x^2 + 4 > 0 với mọi x ∈ ℝ, do đó hàm số xác định trên ℝ và không có tiệm cận đứng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hàm số y = f(x) có lim (x → +∞) f(x) = 3 và lim (x → -∞) f(x) = -3. Đồ thị hàm số có bao nhiêu tiệm cận ngang?",
  "options": [
    "A. 2",
    "B. 1",
    "C. 0",
    "D. Vô số"
  ],
  "answer": "A. 2",
  "explanation": "Có 2 đường tiệm cận ngang phân biệt là y = 3 và y = -3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giao điểm hai đường tiệm cận của đồ thị hàm số y = (2x - 5) / (x - 3) có tọa độ là:",
  "options": [
    "A. I(3; 2)",
    "B. I(2; 3)",
    "C. I(-3; 2)",
    "D. I(3; -5)"
  ],
  "answer": "A. I(3; 2)",
  "explanation": "Tiệm cận đứng x = 3, tiệm cận ngang y = 2. Giao điểm là I(3; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tiệm cận xiên của đồ thị hàm số y = 3x - 1 + 2/(x - 4) là đường thẳng:",
  "options": [
    "A. y = 3x - 1",
    "B. y = 3x + 1",
    "C. y = 3x",
    "D. y = 3x - 5"
  ],
  "answer": "A. y = 3x - 1",
  "explanation": "Vì lim (x → ±∞) 2/(x - 4) = 0 nên đường thẳng y = 3x - 1 là tiệm cận xiên."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Đồ thị hàm số y = x^4 - 2x^2 + 1 có bao nhiêu đường tiệm cận?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. 4"
  ],
  "answer": "A. 0",
  "explanation": "Đồ thị các hàm đa thức (bậc 2, bậc 3, bậc 4) không bao giờ có tiệm cận."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tìm m để đồ thị hàm số y = (mx + 1) / (x - 2) có tiệm cận ngang y = 3:",
  "options": [
    "A. m = 3",
    "B. m = 2",
    "C. m = 6",
    "D. m = -3"
  ],
  "answer": "A. m = 3",
  "explanation": "Tiệm cận ngang là y = m/1 = m. Để tiệm cận ngang là y = 3 thì m = 3."
}'></div>

---

## VI. Ứng dụng Thực tế: Nồng độ Thuốc Dược phẩm và Đường cong Học tập

Khái niệm đường tiệm cận xuất hiện tự nhiên trong y dược học và tâm lý học nhận thức:

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #10b981;">
<strong>Bài toán Dược động học Thực tế:</strong><br>
Sau khi một bệnh nhân được tiêm một liều kháng sinh qua đường truyền tĩnh mạch liên tục, nồng độ thuốc $C(t)$ (tính bằng $\text{mg/L}$) trong máu của bệnh nhân sau $t$ giờ được mô hình hóa bởi hàm số:<br>
$$C(t) = \frac{15t + 2}{3t + 4} \quad (t \ge 0)$$
1. Nồng độ thuốc trong máu ngay tại thời điểm ban đầu $t = 0$ bằng bao nhiêu?<br>
2. Khi thời gian truyền thuốc kéo dài vô hạn ($t \to +\infty$), nồng độ thuốc trong máu bệnh nhân sẽ tiến dần đến ngưỡng bão hòa ổn định là bao nhiêu? Hãy liên hệ kết quả này với khái niệm đường tiệm cận ngang.
</div>

> [!TIP]
> **Giải pháp phân tích y khoa:**
> 1. Tại thời điểm $t = 0$:
>    $$C(0) = \frac{15(0) + 2}{3(0) + 4} = \frac{2}{4} = 0.5\text{ mg/L}$$
> 2. Khi $t \to +\infty$:
>    $$\lim_{t \to +\infty} C(t) = \lim_{t \to +\infty} \frac{15t + 2}{3t + 4} = \frac{15}{3} = 5\text{ mg/L}$$
>    Đường thẳng $C = 5$ chính là **đường tiệm cận ngang** của đồ thị nồng độ thuốc.  
>    **Ý nghĩa lâm sàng:** Dù truyền thuốc trong bao lâu, nồng độ thuốc trong máu của bệnh nhân cũng sẽ không bao giờ vượt quá ngưỡng an toàn $5\text{ mg/L}$, bảo vệ bệnh nhân khỏi nguy cơ ngộ độc kháng sinh!
