---
title: 'Toán 9 Bài 19: Phương trình bậc hai một ẩn - Công thức nghiệm tổng quát Δ, Công thức thu gọn Δ′ & Biện luận tham số'
description: 'Lý thuyết trọn vẹn Bài 19 Toán 9: Định nghĩa phương trình bậc hai một ẩn ax² + bx + c = 0, giải phương trình khuyết, công thức nghiệm Δ và Δ′, biện luận tham số m, widget tương tác giải đồ thị và 10 câu trắc nghiệm có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Phương trình bậc hai
  - Công thức nghiệm
  - Biệt thức Delta
  - Phương trình trùng phương
  - Kết nối tri thức
grade: 9
---

# Bài 19. Phương trình bậc hai một ẩn

Nếu phương trình bậc nhất một ẩn $ax + b = 0$ mô tả thế giới của những chuyển động thẳng đều và tỉ lệ thuận tuyến tính, thì **phương trình bậc hai một ẩn $ax^2 + bx + c = 0$ ($a \ne 0$)** chính là chiếc chìa khóa vạn năng mở ra thế giới thực đầy biến hóa:
- Từ bài toán tìm thời điểm một viên đạn pháo rơi chạm đất sau khi bay vút lên bầu trời,
- Tính toán mức giá bán tối ưu để một công ty khởi nghiệp đạt lợi nhuận cực đại,
- Cho đến việc các công cụ đồ họa 3D tính toán chính xác khoảnh khắc hai nhân vật trong trò chơi điện tử va chạm vào nhau.

Từ hơn $4.000$ năm trước, các nhà toán học Babylon cổ đại đã tìm ra cách giải phương trình bậc hai bằng phương pháp hình học "bổ sung hình vuông" (completing the square). Đến thế kỷ thứ IX, nhà toán học Ba Tư lỗi lạc Al-Khwarizmi đã chuẩn hóa phương pháp đại số mà ngày nay chúng ta kế thừa dưới dạng **công thức nghiệm tổng quát với biệt thức Delta ($\Delta$)**.

Trong bài học này, chúng ta sẽ làm chủ toàn bộ kỹ năng nhận dạng, giải phương trình bậc hai khuyết, áp dụng công thức nghiệm $\Delta$ và $\Delta'$, cũng như kỹ thuật biện luận số nghiệm theo tham số $m$!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: PHƯƠNG TRÌNH BẬC HAI MỘT ẨN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Dạng tổng quát & Khuyết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $ax^2 + bx + c = 0$ ($a \ne 0$).<br>• <strong>Khuyết $c$ ($c = 0$):</strong> $x(ax + b) = 0 \iff x = 0$ hoặc $x = -\frac{b}{a}$.<br>• <strong>Khuyết $b$ ($b = 0$):</strong> $x^2 = -\frac{c}{a}$ ($-\frac{c}{a} \ge 0 \implies x = \pm\sqrt{-\frac{c}{a}}$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Công thức nghiệm $\Delta$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biệt thức $\Delta = b^2 - 4ac$.<br>• $\Delta > 0$: 2 nghiệm $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$.<br>• $\Delta = 0$: Nghiệm kép $x_1 = x_2 = -\frac{b}{2a}$.<br>• $\Delta < 0$: Phương trình vô nghiệm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Công thức thu gọn $\Delta'$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dùng khi $b = 2b'$ (chẵn): $\Delta' = (b')^2 - ac$.<br>• $\Delta' > 0$: 2 nghiệm $x_{1,2} = \frac{-b' \pm \sqrt{\Delta'}}{a}$.<br>• $\Delta' = 0$: Nghiệm kép $x_1 = x_2 = -\frac{b'}{a}$.<br>• $\Delta' < 0$: Vô nghiệm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Mẹo & Trường hợp đặc biệt</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $a$ và $c$ trái dấu ($ac < 0$) $\implies \Delta > 0$, PT luôn có 2 nghiệm phân biệt.<br>• Biện luận số nghiệm theo tham số $m$ bằng dấu của $\Delta$ (hoặc $\Delta'$).<br>• PT trùng phương: đặt $t = x^2 \ge 0$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhận dạng:** Phương trình $0x^2 + 3x - 5 = 0$ có phải là phương trình bậc hai một ẩn không?
2. **Hệ số:** Xác định các hệ số $a, b, c$ của phương trình $2x^2 - 5x + 3 = 0$.
3. **Nghiệm nhẩm khuyết:** Tìm tập nghiệm của phương trình $3x^2 - 12 = 0$.
4. **Biệt thức Delta:** Tính giá trị của $\Delta$ đối với phương trình $x^2 - 4x + 4 = 0$.
5. **Dấu hệ số $ac$:** Phương trình $-3x^2 + 2026x + 7 = 0$ có bao nhiêu nghiệm?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. **Không phải** (vì hệ số $a = 0$, đây là phương trình bậc nhất).
> 2. $a = 2, b = -5, c = 3$.
> 3. $3x^2 = 12 \iff x^2 = 4 \implies x = \pm 2$. Tập nghiệm $S = \{-2; 2\}$.
> 4. $\Delta = (-4)^2 - 4 \times 1 \times 4 = 16 - 16 = 0$ (phương trình có nghiệm kép $x = 2$).
> 5. Có **2 nghiệm phân biệt** vì $a = -3$ và $c = 7$ trái dấu ($ac = -21 < 0$).

---

## I. Lý thuyết Trọng tâm

### 1. Định nghĩa Phương trình Bậc hai Một ẩn

> [!NOTE]
> **Định nghĩa:**
> Phương trình bậc hai một ẩn (nói gọn là phương trình bậc hai) là phương trình có dạng:
> $$ax^2 + bx + c = 0$$
> trong đó:
> - $x$ là ẩn số;
> - $a, b, c$ là những số cho trước gọi là các **hệ số** và **điều kiện bắt buộc: $a \ne 0$**.

**Ví dụ:**
- $x^2 - 7x + 10 = 0$ là phương trình bậc hai đầy đủ ($a = 1, b = -7, c = 10$).
- $2x^2 - 8x = 0$ là phương trình bậc hai khuyết hệ số tự do $c$ ($a = 2, b = -8, c = 0$).
- $5x^2 - 20 = 0$ là phương trình bậc hai khuyết hệ số bậc nhất $b$ ($a = 5, b = 0, c = -20$).

---

### 2. Cách giải các Phương trình Bậc hai Khuyết

Với các phương trình khuyết, ta không cần dùng đến công thức nghiệm phức tạp mà giải trực tiếp bằng phương pháp biến đổi cơ bản:

#### a) Phương trình khuyết $c$ ($ax^2 + bx = 0$ với $a \ne 0$)
Đặt nhân tử chung $x$:
$$ax^2 + bx = 0 \iff x(ax + b) = 0 \iff \left[ \begin{array}{l} x = 0 \\ ax + b = 0 \end{array} \right. \iff \left[ \begin{array}{l} x = 0 \\ x = -\frac{b}{a} \end{array} \right.$$
$\implies$ Phương trình khuyết $c$ luôn có hai nghiệm, trong đó một nghiệm luôn bằng $0$.

#### b) Phương trình khuyết $b$ ($ax^2 + c = 0$ với $a \ne 0$)
Chuyển vế hệ số $c$:
$$ax^2 + c = 0 \iff ax^2 = -c \iff x^2 = -\frac{c}{a}$$
- Nếu $-\frac{c}{a} > 0$ (tức $a$ và $c$ trái dấu): Phương trình có hai nghiệm đối nhau $x = \pm \sqrt{-\frac{c}{a}}$.
- Nếu $-\frac{c}{a} < 0$ (tức $a$ và $c$ cùng dấu): Phương trình vô nghiệm vì $x^2 \ge 0 > -\frac{c}{a}$.
- Nếu $c = 0$: Phương trình trở thành $ax^2 = 0 \iff x = 0$.

---

### 3. Công thức Nghiệm Tổng quát của Phương trình Bậc hai

Xét phương trình tổng quát: $ax^2 + bx + c = 0$ ($a \ne 0$).

Biến đổi đưa về dạng bình phương một tổng:
$$ax^2 + bx = -c \iff x^2 + \frac{b}{a}x = -\frac{c}{a}$$
$$x^2 + 2 \cdot x \cdot \frac{b}{2a} + \left(\frac{b}{2a}\right)^2 = \left(\frac{b}{2a}\right)^2 - \frac{c}{a} \iff \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$

Đặt **biệt thức** $\Delta = b^2 - 4ac$ ($\Delta$ đọc là "Đen-ta"):
$$\left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}$$

Vì $4a^2 > 0$ với mọi $a \ne 0$, nên dấu của vế phải phụ thuộc hoàn toàn vào dấu của $\Delta$:

> [!NOTE]
> **Định lý (Công thức nghiệm tổng quát):**
> Đối với phương trình $ax^2 + bx + c = 0$ ($a \ne 0$) và biệt thức $\Delta = b^2 - 4ac$:
> 
> 1. Nếu $\Delta > 0$, phương trình có **$2$ nghiệm phân biệt**:
>    $$x_1 = \frac{-b + \sqrt{\Delta}}{2a}; \quad x_2 = \frac{-b - \sqrt{\Delta}}{2a}$$
> 2. Nếu $\Delta = 0$, phương trình có **nghiệm kép**:
>    $$x_1 = x_2 = -\frac{b}{2a}$$
> 3. Nếu $\Delta < 0$, phương trình **vô nghiệm**.

> [!TIP]
> **Nhận xét quan trọng:**
> Nếu phương trình $ax^2 + bx + c = 0$ có hai hệ số $a$ và $c$ trái dấu ($ac < 0$):
> Khi đó $-4ac > 0$, mà $b^2 \ge 0$, suy ra:
> $$\Delta = b^2 - 4ac > 0$$
> **Kết luận:** Nếu $a$ và $c$ trái dấu ($ac < 0$) thì phương trình bậc hai **luôn luôn có hai nghiệm phân biệt**.

---

### 4. Công thức Nghiệm Thu gọn (Khi hệ số $b$ chẵn)

Khi phương trình $ax^2 + bx + c = 0$ có hệ số $b$ là một số chẵn (hoặc chia hết cho $2$), ta đặt:
$$b = 2b' \quad \left(\text{với } b' = \frac{b}{2}\right)$$

Ta tính **biệt thức thu gọn** $\Delta'$ ($\Delta'$ đọc là "Đen-ta phẩy"):
$$\Delta = (2b')^2 - 4ac = 4(b')^2 - 4ac = 4\left[(b')^2 - ac\right] \implies \Delta' = (b')^2 - ac$$

Nhận thấy $\Delta$ và $\Delta'$ luôn cùng dấu ($\Delta = 4\Delta'$):

> [!NOTE]
> **Định lý (Công thức nghiệm thu gọn):**
> Đối với phương trình $ax^2 + bx + c = 0$ ($a \ne 0$) có $b = 2b'$ và $\Delta' = (b')^2 - ac$:
> 
> 1. Nếu $\Delta' > 0$, phương trình có **$2$ nghiệm phân biệt**:
>    $$x_1 = \frac{-b' + \sqrt{\Delta'}}{a}; \quad x_2 = \frac{-b' - \sqrt{\Delta'}}{a}$$
> 2. Nếu $\Delta' = 0$, phương trình có **nghiệm kép**:
>    $$x_1 = x_2 = -\frac{b'}{a}$$
> 3. Nếu $\Delta' < 0$, phương trình **vô nghiệm**.

*Lợi ích:* Sử dụng $\Delta'$ giúp con số tính toán nhỏ hơn $4$ lần và mẫu số chỉ còn là $a$ (thay vì $2a$), hạn chế tối đa việc rút gọn phân số cồng kềnh và tránh nhầm lẫn!

---

## II. Mô phỏng Tương tác: Giải & Biện luận Phương trình Bậc hai

Bộ công cụ dưới đây cho phép các em tự do thay đổi ba hệ số $a, b, c$. Hệ thống sẽ tính toán ngay biệt thức $\Delta$, hiển thị số nghiệm, các bước biến đổi chi tiết và biểu diễn giao điểm của Parabol $y = ax^2 + bx + c$ với trục hoành $Ox$!

<div class="interactive-quadratic-solver" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #10b981; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #047857; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: GIẢI PHƯƠNG TRÌNH $ax^2 + bx + c = 0$</h4>
  
  <div style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; align-items: center; margin-top: 16px;">
    <!-- Graphical Canvas -->
    <div style="flex: 1 1 300px; max-width: 380px; text-align: center;">
      <svg data-interactive-done="true" id="quadSvg" viewBox="-150 -120 300 240" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Axes -->
        <line x1="-140" y1="0" x2="140" y2="0" stroke="#64748b" stroke-width="1.8" />
        <line x1="0" y1="110" x2="0" y2="-110" stroke="#64748b" stroke-width="1.8" />
        <text x="130" y="-6" font-size="12" font-weight="bold" fill="#64748b">x</text>
        <text x="6" y="-95" font-size="12" font-weight="bold" fill="#64748b">y</text>
        <!-- Curve -->
        <path id="svgQuadCurve" fill="none" stroke="#2563eb" stroke-width="2.5" />
        <!-- Roots points on x axis -->
        <circle id="svgRoot1" cx="0" cy="0" r="4.5" fill="#ef4444" style="display: none;" />
        <circle id="svgRoot2" cx="0" cy="0" r="4.5" fill="#ef4444" style="display: none;" />
        <text id="lblRoot1" x="0" y="16" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle" style="display: none;">x₁</text>
        <text id="lblRoot2" x="0" y="16" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle" style="display: none;">x₂</text>
      </svg>
    </div>

    <!-- Inputs & Step-by-Step Box -->
    <div style="flex: 1 1 320px; max-width: 420px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 14px;">
        <div>
          <label style="font-size: 0.85em; font-weight: bold; display: block; color: #1e293b;">Hệ số a:</label>
          <input type="number" id="inA" value="1" step="0.5" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; text-align: center;" />
        </div>
        <div>
          <label style="font-size: 0.85em; font-weight: bold; display: block; color: #1e293b;">Hệ số b:</label>
          <input type="number" id="inB" value="-4" step="0.5" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; text-align: center;" />
        </div>
        <div>
          <label style="font-size: 0.85em; font-weight: bold; display: block; color: #1e293b;">Hệ số c:</label>
          <input type="number" id="inC" value="3" step="0.5" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; text-align: center;" />
        </div>
      </div>

      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 0.88em; line-height: 1.8;">
        <div>• Phương trình: <strong id="eqStr" style="color: #2563eb;">x² - 4x + 3 = 0</strong></div>
        <div>• Biệt thức: <span id="deltaStr">$\Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4 > 0$</span></div>
        <div>• Kết luận nghiệm: <strong id="resStr" style="color: #10b981;">Phương trình có 2 nghiệm phân biệt: x₁ = 3, x₂ = 1</strong></div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const inA = document.getElementById('inA');
  const inB = document.getElementById('inB');
  const inC = document.getElementById('inC');
  if (!inA || !inB || !inC) return;

  const eqStr = document.getElementById('eqStr');
  const deltaStr = document.getElementById('deltaStr');
  const resStr = document.getElementById('resStr');
  const svgCurve = document.getElementById('svgQuadCurve');
  const r1 = document.getElementById('svgRoot1');
  const r2 = document.getElementById('svgRoot2');
  const lblR1 = document.getElementById('lblRoot1');
  const lblR2 = document.getElementById('lblRoot2');

  const scaleX = 25; // 25px = 1 unit
  const scaleY = 12; // 12px = 1 unit

  function solve() {
    let a = parseFloat(inA.value);
    let b = parseFloat(inB.value);
    let c = parseFloat(inC.value);

    if (isNaN(a) || a === 0) {
      eqStr.textContent = 'Hệ số a phải khác 0!';
      deltaStr.textContent = '';
      resStr.textContent = 'Đây không phải phương trình bậc hai.';
      svgCurve.setAttribute('d', '');
      r1.style.display = 'none';
      r2.style.display = 'none';
      lblR1.style.display = 'none';
      lblR2.style.display = 'none';
      return;
    }

    // Format equation string
    let s = (a === 1 ? '' : a === -1 ? '-' : a) + 'x²';
    if (b > 0) s += ' + ' + (b === 1 ? '' : b) + 'x';
    else if (b < 0) s += ' - ' + (b === -1 ? '' : Math.abs(b)) + 'x';
    if (c > 0) s += ' + ' + c;
    else if (c < 0) s += ' - ' + Math.abs(c);
    s += ' = 0';
    eqStr.textContent = s;

    const delta = b * b - 4 * a * c;
    deltaStr.innerHTML = 'Δ = (' + b + ')² - 4(' + a + ')(' + c + ') = ' + delta.toFixed(2);

    r1.style.display = 'none';
    r2.style.display = 'none';
    lblR1.style.display = 'none';
    lblR2.style.display = 'none';

    if (delta > 0) {
      const sqrtD = Math.sqrt(delta);
      const x1 = (-b + sqrtD) / (2 * a);
      const x2 = (-b - sqrtD) / (2 * a);
      resStr.innerHTML = '<span style="color: #047857;">Có 2 nghiệm phân biệt:</span> x₁ = ' + x1.toFixed(2) + '; x₂ = ' + x2.toFixed(2);

      // Root dots
      r1.style.display = 'inline';
      r1.setAttribute('cx', x1 * scaleX);
      r1.setAttribute('cy', 0);
      lblR1.style.display = 'inline';
      lblR1.setAttribute('x', x1 * scaleX);
      lblR1.textContent = x1.toFixed(1);

      r2.style.display = 'inline';
      r2.setAttribute('cx', x2 * scaleX);
      r2.setAttribute('cy', 0);
      lblR2.style.display = 'inline';
      lblR2.setAttribute('x', x2 * scaleX);
      lblR2.textContent = x2.toFixed(1);
    } else if (Math.abs(delta) < 1e-6) {
      const x0 = -b / (2 * a);
      resStr.innerHTML = '<span style="color: #b45309;">Có nghiệm kép:</span> x₁ = x₂ = ' + x0.toFixed(2);
      r1.style.display = 'inline';
      r1.setAttribute('cx', x0 * scaleX);
      r1.setAttribute('cy', 0);
      lblR1.style.display = 'inline';
      lblR1.setAttribute('x', x0 * scaleX);
      lblR1.textContent = x0.toFixed(1);
    } else {
      resStr.innerHTML = '<span style="color: #dc2626;">Vô nghiệm</span> (Δ < 0, đồ thị không cắt trục hoành).';
    }

    // Draw curve
    let d = '';
    let first = true;
    for (let x = -5.5; x <= 5.501; x += 0.1) {
      const y = a * x * x + b * x + c;
      const px = x * scaleX;
      const py = -y * scaleY;
      if (py >= -115 && py <= 115) {
        if (first) {
          d += `M ${px} ${py} `;
          first = false;
        } else {
          d += `L ${px} ${py} `;
        }
      }
    }
    svgCurve.setAttribute('d', d);
  }

  inA.addEventListener('input', solve);
  inB.addEventListener('input', solve);
  inC.addEventListener('input', solve);
  solve();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Giải Phương trình bằng Công thức nghiệm $\Delta$ và $\Delta'$

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Đưa phương trình về dạng chính tắc: $ax^2 + bx + c = 0$.
> 2. Xác định các hệ số $a, b, c$.
> 3. Nếu $b$ là số chẵn $\implies$ tính $b' = \frac{b}{2}$ và $\Delta' = (b')^2 - ac$.
>    Nếu $b$ là số lẻ $\implies$ tính $\Delta = b^2 - 4ac$.
> 4. Căn cứ vào dấu của $\Delta$ (hoặc $\Delta'$) để kết luận số nghiệm và tính giá trị chính xác.

#### Bài toán mẫu 1.1:
Giải các phương trình bậc hai sau:
a) $3x^2 - 5x + 2 = 0$
b) $x^2 - 6x + 7 = 0$
c) $4x^2 - 12x + 9 = 0$

**Lời giải chi tiết:**
a) Xét phương trình $3x^2 - 5x + 2 = 0$:
Hệ số: $a = 3, b = -5, c = 2$.
Biệt thức:
$$\Delta = b^2 - 4ac = (-5)^2 - 4 \times 3 \times 2 = 25 - 24 = 1 > 0$$
Vì $\Delta > 0$ nên phương trình có hai nghiệm phân biệt:
$$x_1 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{-(-5) + \sqrt{1}}{2 \times 3} = \frac{5 + 1}{6} = 1$$
$$x_2 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{-(-5) - \sqrt{1}}{2 \times 3} = \frac{5 - 1}{6} = \frac{4}{6} = \frac{2}{3}$$
Vậy tập nghiệm của phương trình là $S = \left\{1; \frac{2}{3}\right\}$.

b) Xét phương trình $x^2 - 6x + 7 = 0$:
Hệ số: $a = 1, b = -6 \implies b' = -3, c = 7$.
Biệt thức thu gọn:
$$\Delta' = (b')^2 - ac = (-3)^2 - 1 \times 7 = 9 - 7 = 2 > 0$$
Vì $\Delta' > 0$ nên phương trình có hai nghiệm phân biệt:
$$x_1 = \frac{-b' + \sqrt{\Delta'}}{a} = \frac{-(-3) + \sqrt{2}}{1} = 3 + \sqrt{2}$$
$$x_2 = \frac{-b' - \sqrt{\Delta'}}{a} = \frac{-(-3) - \sqrt{2}}{1} = 3 - \sqrt{2}$$
Vậy tập nghiệm của phương trình là $S = \{3 - \sqrt{2}; 3 + \sqrt{2}\}$.

c) Xét phương trình $4x^2 - 12x + 9 = 0$:
Hệ số: $a = 4, b = -12 \implies b' = -6, c = 9$.
Biệt thức thu gọn:
$$\Delta' = (b')^2 - ac = (-6)^2 - 4 \times 9 = 36 - 36 = 0$$
Vì $\Delta' = 0$ nên phương trình có nghiệm kép:
$$x_1 = x_2 = -\frac{b'}{a} = -\frac{-6}{4} = \frac{3}{2}$$
Vậy tập nghiệm của phương trình là $S = \left\{\frac{3}{2}\right\}$.

---

### Dạng 2: Biện luận Số nghiệm theo Tham số $m$

> [!TIP]
> **Phương pháp cốt lõi:**
> Cho phương trình $ax^2 + bx + c = 0$ chứa tham số $m$:
> - **Trường hợp hệ số $a$ chứa tham số:** Bắt buộc phải xét hai trường hợp:
>   + TH1: $a = 0$ (phương trình suy biến thành bậc nhất).
>   + TH2: $a \ne 0$ (tính $\Delta$ hoặc $\Delta'$ theo $m$).
> - **Biện luận theo $\Delta$:**
>   + Phương trình vô nghiệm $\iff \Delta < 0$.
>   + Phương trình có nghiệm kép $\iff \Delta = 0$.
>   + Phương trình có hai nghiệm phân biệt $\iff \Delta > 0$.
>   + Phương trình có nghiệm $\iff \Delta \ge 0$.

#### Bài toán mẫu 2.1:
Cho phương trình: $x^2 - 2(m - 1)x + m^2 - 3 = 0$ (với $m$ là tham số).
a) Tìm $m$ để phương trình có nghiệm kép. Tìm nghiệm kép đó.
b) Tìm $m$ để phương trình có hai nghiệm phân biệt.

**Lời giải chi tiết:**
Phương trình có các hệ số: $a = 1 \ne 0$, $b = -2(m - 1) \implies b' = -(m - 1)$, $c = m^2 - 3$.
Biệt thức thu gọn:
$$\Delta' = (b')^2 - ac = [-(m - 1)]^2 - 1 \cdot (m^2 - 3)$$
$$\Delta' = (m^2 - 2m + 1) - (m^2 - 3) = -2m + 4$$

a) Phương trình có nghiệm kép khi và chỉ khi:
$$\Delta' = 0 \iff -2m + 4 = 0 \iff 2m = 4 \iff m = 2$$
Khi $m = 2$, nghiệm kép của phương trình là:
$$x_1 = x_2 = -\frac{b'}{a} = -\frac{-(2 - 1)}{1} = 1$$

b) Phương trình có hai nghiệm phân biệt khi và chỉ khi:
$$\Delta' > 0 \iff -2m + 4 > 0 \iff -2m > -4 \iff m < 2$$
Vậy với $m < 2$, phương trình luôn có hai nghiệm phân biệt.

---

### Dạng 3: Phương trình Quy về Phương trình Bậc hai

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. **Phương trình trùng phương:** $ax^4 + bx^2 + c = 0$ ($a \ne 0$).
>    - Đặt $t = x^2$ với điều kiện $t \ge 0$.
>    - Phương trình trở thành: $at^2 + bt + c = 0$.
>    - Giải tìm $t$, đối chiếu điều kiện $t \ge 0$, sau đó giải $x = \pm\sqrt{t}$.
> 2. **Phương trình chứa ẩn ở mẫu:**
>    - Tìm điều kiện xác định (ĐKXĐ).
>    - Quy đồng mẫu thức hai vế và khử mẫu để đưa về phương trình bậc hai.
>    - Giải phương trình và **đối chiếu ĐKXĐ** để loại nghiệm ngoại lai.

#### Bài toán mẫu 3.1:
Giải các phương trình sau:
a) $x^4 - 5x^2 + 4 = 0$ (phương trình trùng phương)
b) $\frac{x + 2}{x - 2} - \frac{1}{x} = \frac{2}{x(x - 2)}$

**Lời giải chi tiết:**
a) Xét phương trình $x^4 - 5x^2 + 4 = 0$:
Đặt $t = x^2$ với điều kiện $t \ge 0$.
Phương trình trở thành:
$$t^2 - 5t + 4 = 0$$
Nhận thấy $a + b + c = 1 + (-5) + 4 = 0$, do đó phương trình có hai nghiệm:
$$t_1 = 1 \quad (\text{thỏa mãn } t \ge 0)$$
$$t_2 = 4 \quad (\text{thỏa mãn } t \ge 0)$$
- Với $t_1 = 1 \implies x^2 = 1 \iff x = \pm 1$.
- Với $t_2 = 4 \implies x^2 = 4 \iff x = \pm 2$.
Vậy tập nghiệm của phương trình là $S = \{-2; -1; 1; 2\}$.

b) Xét phương trình: $\frac{x + 2}{x - 2} - \frac{1}{x} = \frac{2}{x(x - 2)}$:
- Điều kiện xác định: $x \ne 0$ và $x \ne 2$.
- Quy đồng mẫu thức chung là $x(x - 2)$ và khử mẫu:
  $$x(x + 2) - (x - 2) = 2$$
  $$\iff x^2 + 2x - x + 2 = 2 \iff x^2 + x = 0 \iff x(x + 1) = 0$$
  $$\iff \left[ \begin{array}{l} x = 0 \\ x = -1 \end{array} \right.$$
- Đối chiếu ĐKXĐ:
  + $x = 0$ (Loại vì không thỏa mãn ĐKXĐ).
  + $x = -1$ (Thỏa mãn ĐKXĐ).
Vậy tập nghiệm của phương trình là $S = \{-1\}$.

---

### Dạng 4: Ứng dụng Thực tế Đưa về Phương trình Bậc hai

> [!TIP]
> **Phương pháp cốt lõi:**
> - Gọi ẩn số phù hợp và đặt điều kiện thích hợp (độ dài, thời gian phải dương).
> - Biểu diễn các đại lượng chưa biết theo ẩn và lập phương trình bậc hai.
> - Giải phương trình bằng $\Delta$, loại nghiệm không thỏa mãn điều kiện thực tế.

#### Bài toán mẫu 4.1:
Một mảnh đất hình chữ nhật có chiều dài lớn hơn chiều rộng $5\text{ m}$. Biết diện tích mảnh đất là $150\text{ m}^2$. Hãy tính chu vi của mảnh đất đó.

**Lời giải chi tiết:**
Gọi chiều rộng của mảnh đất là $x$ (mét, điều kiện: $x > 0$).
Chiều dài của mảnh đất là: $x + 5$ (mét).
Vì diện tích mảnh đất bằng $150\text{ m}^2$, ta có phương trình:
$$x(x + 5) = 150 \iff x^2 + 5x - 150 = 0$$
Tính biệt thức:
$$\Delta = 5^2 - 4 \times 1 \times (-150) = 25 + 600 = 625 = 25^2 > 0$$
Phương trình có hai nghiệm:
$$x_1 = \frac{-5 + 25}{2} = \frac{20}{2} = 10 \quad (\text{thỏa mãn } x > 0)$$
$$x_2 = \frac{-5 - 25}{2} = \frac{-30}{2} = -15 \quad (\text{loại vì } x > 0)$$
Như vậy:
- Chiều rộng mảnh đất là $10\text{ m}$.
- Chiều dài mảnh đất là $10 + 5 = 15\text{ m}$.
Chu vi mảnh đất hình chữ nhật là:
$$P = 2 \times (15 + 10) = 2 \times 25 = 50\text{ m}$$

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG CỦA PHƯƠNG TRÌNH BẬC HAI TRONG KỸ THUẬT
 ┌────────────────────────────────────────────────────────┐
 │ 1. Vật lý học: Chuyển động ném vật & Thời gian chạm đất│
 │ 2. Kinh tế học: Tối ưu giá bán & Phân tích điểm hòa vốn│
 │ 3. Đồ họa Game 3D: Tính va chạm Hitbox (Ray Tracing)   │
 │ 4. Kỹ thuật điện tử: Tính trở kháng mạch xoay chiều RLC│
 │ 5. Y học: Dược động học nồng độ thuốc trong máu        │
 └────────────────────────────────────────────────────────┘
```

### 1. Vật lý: Thời gian chạm đất của Vật thể Chuyển động
Khi một quả đạn cứu hộ được bắn thẳng đứng lên từ mặt đất với vận tốc ban đầu $v_0 = 40\text{ m/s}$, độ cao của vật theo thời gian $t$ (giây) được cho bởi công thức:
$$h(t) = v_0 t - \frac{1}{2}gt^2 \approx 40t - 5t^2$$
Để tìm thời điểm vật rơi trở lại mặt đất ($h = 0$):
$$-5t^2 + 40t = 0 \iff -5t(t - 8) = 0 \implies t = 0\text{ (lúc bắn)} \quad \text{hoặc} \quad t = 8\text{ giây}$$
Phương trình bậc hai cho biết chính xác sau đúng $8$ giây vật sẽ chạm đất!

### 2. Kinh tế học: Điểm hòa vốn và Tối ưu hóa Doanh thu
Một doanh nghiệp sản xuất tai nghe không dây xác định hàm doanh thu theo giá bán $p$ là $R(p) = -2p^2 + 120p$ (triệu đồng), và chi phí sản xuất cố định là $1000$ triệu đồng.
Để xác định mức giá bán đạt **điểm hòa vốn** (Doanh thu = Chi phí), các chuyên gia tài chính giải phương trình bậc hai:
$$-2p^2 + 120p = 1000 \iff 2p^2 - 120p + 1000 = 0 \iff p^2 - 60p + 500 = 0$$
$$\Delta' = (-30)^2 - 500 = 400 \implies p_1 = 30 - 20 = 10\text{ USD}, \quad p_2 = 30 + 20 = 50\text{ USD}$$
Mức giá bán nằm giữa $10$ và $50$ USD sẽ đảm bảo doanh nghiệp luôn có lãi.

### 3. Đồ họa Game 3D và Công nghệ Dò tia (Ray Tracing)
Trong các tựa game đồ họa chân thực, để xác định tia sáng (đường thẳng $P = O + tD$) có va chạm vào một quả cầu (hình cầu tâm $C$, bán kính $r$: $|P - C|^2 = r^2$) hay không:
Hệ thống thay phương trình đường thẳng vào hình cầu, tạo ra một **phương trình bậc hai ẩn $t$**:
$$At^2 + Bt + C = 0$$
- Nếu $\Delta < 0$: Tia sáng bắn trượt quả cầu.
- Nếu $\Delta \ge 0$: Nghiệm $t$ nhỏ nhất cho biết chính xác vị trí pixel bề mặt quả cầu mà tia sáng chạm vào, giúp card đồ họa GPU dựng bóng đổ chuẩn xác theo thời gian thực!

### 4. Kỹ thuật Điện xoay chiều: Mạch cộng hưởng RLC
Trong mạch điện xoay chiều chứa điện trở $R$, cuộn cảm $L$ và tụ điện $C$, phương trình vi phân mô tả sự phóng nạp điện tích có phương trình đặc trưng là phương trình bậc hai:
$$L s^2 + R s + \frac{1}{C} = 0$$
Tùy thuộc vào dấu của biệt thức $\Delta = R^2 - \frac{4L}{C}$, mạch điện sẽ hoạt động ở chế độ: dao động tắt dần ($\Delta < 0$), tắt dần tới hạn ($\Delta = 0$), hay không dao động quá độ ($\Delta > 0$).

### 5. Y học: Dược động học nồng độ thuốc trong máu
Khi bệnh nhân uống thuốc giảm đau, nồng độ hoạt chất trong huyết tương biến thiên theo thời gian. Các bác sĩ sử dụng mô hình bậc hai để tính toán khoảng thời gian $t_1 \le t \le t_2$ mà nồng độ thuốc duy trì trên ngưỡng điều trị hiệu quả nhưng không vượt quá ngưỡng độc tính, từ đó đưa ra đơn thuốc chuẩn xác (ví dụ cách mỗi $6$ tiếng uống một lần).

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phương trình nào sau đây là phương trình bậc hai một ẩn?",
  "options": [
    "A. $2x^2 - 3x + 1 = 0$",
    "B. $0x^2 + 4x - 1 = 0$",
    "C. $x^3 - 2x = 0$",
    "D. $\\frac{1}{x^2} + x - 2 = 0$"
  ],
  "correct": 0,
  "explanation": "Phương trình $2x^2 - 3x + 1 = 0$ có đúng dạng $ax^2 + bx + c = 0$ với hệ số $a = 2 \\ne 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tập nghiệm của phương trình $2x^2 - 8 = 0$ là:",
  "options": [
    "A. $S = \\{2\\}$",
    "B. $S = \\{-2\\}$",
    "C. $S = \\{-2; 2\\}$",
    "D. $S = \\{4\\}$"
  ],
  "correct": 2,
  "explanation": "$2x^2 = 8 \\iff x^2 = 4 \\implies x = \\pm 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Biệt thức $\\Delta$ của phương trình $x^2 - 6x + 5 = 0$ bằng:",
  "options": [
    "A. 16",
    "B. -16",
    "C. 56",
    "D. 4"
  ],
  "correct": 0,
  "explanation": "$\\Delta = b^2 - 4ac = (-6)^2 - 4(1)(5) = 36 - 20 = 16$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Phương trình $ax^2 + bx + c = 0$ ($a \\ne 0$) có nghiệm kép khi và chỉ khi:",
  "options": [
    "A. $\\Delta > 0$",
    "B. $\\Delta = 0$",
    "C. $\\Delta < 0$",
    "D. $\\Delta \\ge 0$"
  ],
  "correct": 1,
  "explanation": "Phương trình bậc hai có nghiệm kép khi và chỉ khi $\\Delta = 0$ (hoặc $\\Delta\\prime = 0$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nghiệm kép của phương trình $x^2 - 10x + 25 = 0$ là:",
  "options": [
    "A. $x_1 = x_2 = -5$",
    "B. $x_1 = x_2 = 5$",
    "C. $x_1 = x_2 = 25$",
    "D. $x_1 = x_2 = 10$"
  ],
  "correct": 1,
  "explanation": "Phương trình $(x - 5)^2 = 0 \\implies x_1 = x_2 = -\\frac{b}{2a} = -\\frac{-10}{2} = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Phương trình nào sau đây CHẮC CHẮN có 2 nghiệm phân biệt mà không cần tính $\\Delta$?",
  "options": [
    "A. $2x^2 + 5x + 3 = 0$",
    "B. $-3x^2 + 7x - 4 = 0$",
    "C. $-5x^2 + 11x + 2 = 0$",
    "D. $x^2 - 4x + 9 = 0$"
  ],
  "correct": 2,
  "explanation": "Phương trình $-5x^2 + 11x + 2 = 0$ có hệ số $a = -5$ và $c = 2$ trái dấu ($ac = -10 < 0$), nên $\\Delta$ luôn dương, phương trình chắc chắn có 2 nghiệm phân biệt."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Đối với phương trình $x^2 - 8x + 12 = 0$, giá trị của biệt thức thu gọn $\\Delta\\prime$ bằng:",
  "options": [
    "A. 4",
    "B. 16",
    "C. 28",
    "D. 52"
  ],
  "correct": 0,
  "explanation": "Ta có $b = -8 \\implies b\\prime = -4$. $\\Delta\\prime = (b\\prime)^2 - ac = (-4)^2 - 1 \\times 12 = 16 - 12 = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Giá trị của tham số $m$ để phương trình $x^2 - 2x + m = 0$ vô nghiệm là:",
  "options": [
    "A. $m < 1$",
    "B. $m = 1$",
    "C. $m > 1$",
    "D. $m \\ge 1$"
  ],
  "correct": 2,
  "explanation": "Ta có $\\Delta\\prime = (-1)^2 - m = 1 - m$. Phương trình vô nghiệm khi $\\Delta\\prime < 0 \\iff 1 - m < 0 \\iff m > 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Phương trình trùng phương $x^4 - 13x^2 + 36 = 0$ có tất cả bao nhiêu nghiệm thực?",
  "options": [
    "A. 1 nghiệm",
    "B. 2 nghiệm",
    "C. 3 nghiệm",
    "D. 4 nghiệm"
  ],
  "correct": 3,
  "explanation": "Đặt $t = x^2 \\ge 0 \\implies t^2 - 13t + 36 = 0 \\iff (t - 4)(t - 9) = 0 \\implies t = 4$ hoặc $t = 9$. Với $t = 4 \\implies x = \\pm 2$; với $t = 9 \\implies x = \\pm 3$. Tổng cộng có 4 nghiệm phân biệt."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tích các nghiệm của phương trình $(2x - 3)(x + 4) = 0$ là:",
  "options": [
    "A. -6",
    "B. 6",
    "C. -12",
    "D. 12"
  ],
  "correct": 0,
  "explanation": "Phương trình tích: $2x - 3 = 0 \\implies x_1 = 1{,}5$; $x + 4 = 0 \\implies x_2 = -4$. Tích hai nghiệm: $x_1 \\cdot x_2 = 1{,}5 \\times (-4) = -6$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Thiết kế Lối Đi Quanh Hồ Bơi
Một khu nghỉ dưỡng cao cấp có một hồ bơi hình chữ nhật kích thước chiều dài $20\text{ m}$ và chiều rộng $10\text{ m}$.
Ban quản lý dự định lát gạch chống trượt làm một lối đi bao quanh hồ bơi với bề rộng đồng đều là $x$ (mét).
Biết tổng diện tích của cả hồ bơi và lối đi bao quanh là $416\text{ m}^2$.
1. Hãy thiết lập phương trình bậc hai đối với bề rộng lối đi $x$.
2. Hãy giải phương trình để tìm bề rộng $x$ của lối đi bao quanh hồ bơi.

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Thiết lập phương trình:
> - Hồ bơi có chiều dài $20\text{ m}$, chiều rộng $10\text{ m}$.
> - Lối đi có bề rộng đồng đều $x$ ở cả hai phía:
>   + Chiều dài tổng thể bao gồm lối đi là: $20 + 2x$ (mét).
>   + Chiều rộng tổng thể bao gồm lối đi là: $10 + 2x$ (mét).
> - Tổng diện tích là $416\text{ m}^2$, ta có phương trình:
>   $$(20 + 2x)(10 + 2x) = 416$$
>   $$\iff 4x^2 + 60x + 200 = 416 \iff 4x^2 + 60x - 216 = 0$$
>   Chia cả hai vế cho $4$:
>   $$x^2 + 15x - 54 = 0$$
> 
> 2. Giải phương trình tìm $x$:
> - Tính $\Delta = 15^2 - 4 \times 1 \times (-54) = 225 + 216 = 441 = 21^2 > 0$.
> - Nghiệm của phương trình:
>   $$x_1 = \frac{-15 + 21}{2} = \frac{6}{2} = 3 \quad (\text{thỏa mãn } x > 0)$$
>   $$x_2 = \frac{-15 - 21}{2} = \frac{-36}{2} = -18 \quad (\text{loại vì } x > 0)$$
> Vậy bề rộng của lối đi bao quanh hồ bơi là đúng $3\text{ m}$.

---

### Bài tập Tự luyện

**Bài 1:** Giải các phương trình bậc hai sau bằng công thức nghiệm thích hợp:
a) $2x^2 - 7x + 3 = 0$
b) $5x^2 - 2\sqrt{5}x + 1 = 0$
c) $3x^2 - 8x + 4 = 0$ (sử dụng công thức thu gọn $\Delta'$)

**Bài 2:** Cho phương trình $x^2 - 2(m + 1)x + 2m = 0$ ($m$ là tham số).
a) Tính $\Delta'$ theo $m$.
b) Chứng minh rằng phương trình luôn có hai nghiệm phân biệt với mọi giá trị của $m \ne 1$.
c) Tìm $m$ để phương trình có nghiệm bằng $3$.

**Bài 3:** Giải các phương trình sau bằng cách quy về phương trình bậc hai:
a) $x^4 - 10x^2 + 9 = 0$
b) $\frac{x^2 - 3x + 5}{x - 1} = 3$
c) $(x^2 - 2x)^2 - 2(x^2 - 2x) - 3 = 0$ (gợi ý: đặt ẩn phụ $t = x^2 - 2x$)
