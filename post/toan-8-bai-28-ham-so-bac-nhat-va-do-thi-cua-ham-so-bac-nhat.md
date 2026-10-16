---
title: 'Toán 8 Bài 28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất'
description: 'Làm chủ lý thuyết Hàm số bậc nhất Toán 8 Bài 28: Định nghĩa y = ax + b (a ≠ 0), tính đồng biến nghịch biến, cách vẽ đường thẳng đi qua hai điểm, tìm giao điểm đại số kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Hàm số bậc nhất
  - Đồ thị đường thẳng
  - Đồng biến nghịch biến
  - Tung độ gốc
  - Kết nối tri thức
grade: 8
---

# Bài 28. Hàm số bậc nhất và đồ thị của hàm số bậc nhất

Nếu như trong hình học, đường thẳng là hình dạng cơ bản và hoàn hảo nhất, thì trong giải tích đại số, **Hàm số bậc nhất $y = ax + b$** chính là hiện thân toán học của đường thẳng đó!

Mọi mối quan hệ tuyến tính trong thế giới thực đều vận hành theo hàm số bậc nhất: từ công thức chuyển đổi nhiệt độ giữa thang độ C (Celsius) và thang độ F (Fahrenheit) $F = 1{,}8C + 32$, định luật biến dạng đàn hồi lò xo của Robert Hooke $F = k \cdot x$, cho đến thuật toán hồi quy tuyến tính (Linear Regression) — nền tảng dự báo giá nhà và xu hướng thị trường trong Trí tuệ nhân tạo (AI & Machine Learning).

Bài học hôm nay sẽ giúp các em nắm vững định nghĩa hàm số bậc nhất, giải mã tính chất đồng biến/nghịch biến theo dấu của hệ số $a$, và thành thạo kỹ năng vẽ đường thẳng đồ thị chỉ bằng hai điểm mấu chốt!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 28: HÀM SỐ BẬC NHẤT y = ax + b</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dạng chuẩn: $y = ax + b$ với $a \neq 0$.<br>• $a$ gọi là <strong>hệ số góc</strong>, $b$ là <strong>tung độ gốc</strong>.<br>• Khi $b = 0 \implies y = ax$ (đi qua gốc tọa độ $O$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Chiều Biến thiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Xác định với mọi $x \in \mathbb{R}$:<br>• <strong>Đồng biến</strong> khi $a > 0$ ($x$ tăng thì $y$ tăng, đồ thị đi lên).<br>• <strong>Nghịch biến</strong> khi $a < 0$ ($x$ tăng thì $y$ giảm, đồ thị đi xuống).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hình dạng Đồ thị</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đồ thị là một <strong>đường thẳng</strong> (d).<br>• Cắt trục tung $Oy$ tại $A(0; b)$.<br>• Cắt trục hoành $Ox$ tại $B(-\frac{b}{a}; 0)$.<br>• Song song với $y = ax$ nếu $b \neq 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật Vẽ Đồ thị</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bước 1: Cho $x = 0 \implies y = b \implies A(0; b)$.<br>• Bước 2: Cho $y = 0 \implies x = -\frac{b}{a} \implies B(-\frac{b}{a}; 0)$.<br>• Bước 3: Đặt thước kẻ đường thẳng đi qua $A$ và $B$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhận dạng nhanh:** Trong các hàm số sau, hàm số nào là hàm số bậc nhất: $y = 2x - 3$, $y = x^2 + 1$, $y = 0x + 5$?
2. **Hệ số số học:** Xác định hệ số $a$ và $b$ của hàm số $y = 5 - 2x$.
3. **Chiều đồ thị:** Đồ thị hàm số $y = 3x - 1$ dốc lên hay dốc xuống từ trái sang phải? Vì sao?
4. **Tung độ gốc:** Đồ thị của hàm số $y = -4x + 7$ cắt trục tung $Oy$ tại điểm có tọa độ nào?
5. **Giao điểm trục hoành:** Để tìm giao điểm của đồ thị hàm số với trục hoành $Ox$, ta cho $x = 0$ hay cho $y = 0$?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Hàm số $y = 2x - 3$ (có dạng $y = ax + b$ với $a = 2 \neq 0$).
> 2. Viết lại $y = -2x + 5 \implies a = -2$ và $b = 5$.
> 3. Dốc lên từ trái sang phải vì hệ số $a = 3 > 0$ (hàm số đồng biến).
> 4. Cắt trục tung $Oy$ tại điểm $A(0; 7)$ (thay $x = 0 \implies y = 7$).
> 5. Cho $y = 0$ rồi giải phương trình tìm hoành độ $x$.

---

## I. Lý thuyết Trọng tâm

### 1. Định nghĩa Hàm số bậc nhất

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Hàm số bậc nhất** là hàm số được cho bởi công thức:
> $$y = ax + b$$
> trong đó $a$ và $b$ là các số thực cho trước và $a \neq 0$.

*Chú ý đặc biệt:*
- $a$ gọi là **hệ số của $x$** (sau này gọi là **hệ số góc**). Điều kiện bắt buộc là $a \neq 0$.
- $b$ gọi là **hệ số tự do** (hoặc **tung độ gốc**).
- Khi $b = 0$, hàm số trở thành $y = ax$ — hàm số biểu thị hai đại lượng tỉ lệ thuận đã học ở lớp 7.

---

### 2. Tính chất biến thiên của hàm số bậc nhất

Hàm số bậc nhất $y = ax + b$ xác định với mọi giá trị của $x \in \mathbb{R}$ và có tính chất:

> [!IMPORTANT]
> **TÍNH CHẤT ĐỒNG BIẾN / NGHỊCH BIẾN:**
> 1. Hàm số **đồng biến** trên $\mathbb{R}$ khi $a > 0$:
>    $$x_1 < x_2 \implies f(x_1) < f(x_2)$$
>    *(Đồ thị có hướng đi lên từ trái sang phải)*
> 2. Hàm số **nghịch biến** trên $\mathbb{R}$ khi $a < 0$:
>    $$x_1 < x_2 \implies f(x_1) > f(x_2)$$
>    *(Đồ thị có hướng đi xuống từ trái sang phải)*

*Ví dụ:*
- Hàm số $y = 4x - 5$ có $a = 4 > 0 \implies$ Đồng biến trên $\mathbb{R}$.
- Hàm số $y = -3x + 1$ có $a = -3 < 0 \implies$ Nghịch biến trên $\mathbb{R}$.
- Hàm số $y = (m - 1)x + 2$ đồng biến khi $m - 1 > 0 \iff m > 1$.

---

### 3. Đồ thị của hàm số bậc nhất $y = ax + b$ ($a \neq 0$)

Đồ thị của hàm số $y = ax + b$ ($a \neq 0$) là một **đường thẳng**:
- Cắt trục tung $Oy$ tại điểm $A(0; b)$.
- Cắt trục hoành $Ox$ tại điểm $B\left(-\frac{b}{a}; 0\right)$.
- Song song với đường thẳng $y = ax$ nếu $b \neq 0$; trùng với đường thẳng $y = ax$ nếu $b = 0$.

> [!NOTE]
> **QUY TRÌNH 3 BƯỚC VẼ ĐỒ THỊ ĐƯỜNG THẲNG:**
> - **Bước 1:** Cho $x = 0 \implies y = b$, ta được giao điểm với trục tung $A(0; b)$.
> - **Bước 2:** Cho $y = 0 \implies x = -\frac{b}{a}$, ta được giao điểm với trục hoành $B\left(-\frac{b}{a}; 0\right)$.
> - **Bước 3:** Biểu diễn hai điểm $A$ và $B$ trên mặt phẳng tọa độ $Oxy$, dùng thước kẻ vẽ đường thẳng đi qua $A$ và $B$.

---

## Ứng dụng Tương tác Trực quan

Dưới đây là mô phỏng động đồ thị hàm số bậc nhất $y = ax + b$. Các em có thể kéo thanh trượt để thay đổi hệ số $a$ (độ dốc) và hệ số $b$ (tung độ gốc) để quan sát chuyển động của đường thẳng:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: ĐỒ THỊ ĐƯỜNG THẲNG y = ax + b</h4>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 12px; width: 100%; max-width: 440px;">
      <label for="slider-a" style="font-weight: bold; min-width: 140px;">Hệ số góc a:</label>
      <input type="range" id="slider-a" min="-3" max="3" step="0.5" value="1" style="flex: 1;" oninput="updateLinePlot()">
      <span id="disp-a" style="font-weight: bold; color: #2563eb; min-width: 40px;">1</span>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; width: 100%; max-width: 440px;">
      <label for="slider-b" style="font-weight: bold; min-width: 140px;">Tung độ gốc b:</label>
      <input type="range" id="slider-b" min="-4" max="4" step="1" value="1" style="flex: 1;" oninput="updateLinePlot()">
      <span id="disp-b" style="font-weight: bold; color: #047857; min-width: 40px;">1</span>
    </div>
  </div>
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg id="interactive-line-svg" width="320" height="320" viewBox="-160 -160 320 320" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
      <!-- Lưới trục -->
      <g stroke="#e2e8f0" stroke-width="1">
        <line x1="-150" y1="-120" x2="150" y2="-120" />
        <line x1="-150" y1="-80" x2="150" y2="-80" />
        <line x1="-150" y1="-40" x2="150" y2="-40" />
        <line x1="-150" y1="40" x2="150" y2="40" />
        <line x1="-150" y1="80" x2="150" y2="80" />
        <line x1="-150" y1="120" x2="150" y2="120" />
        <line x1="-120" y1="-150" x2="-120" y2="150" />
        <line x1="-80" y1="-150" x2="-80" y2="150" />
        <line x1="-40" y1="-150" x2="-40" y2="150" />
        <line x1="40" y1="-150" x2="40" y2="150" />
        <line x1="80" y1="-150" x2="80" y2="150" />
        <line x1="120" y1="-150" x2="120" y2="150" />
      </g>
      <!-- Trục Ox và Oy -->
      <line x1="-150" y1="0" x2="150" y2="0" stroke="#334155" stroke-width="2" />
      <polygon points="150,0 142,-4 142,4" fill="#334155" />
      <text x="140" y="-8" font-size="12" font-weight="bold" fill="#334155">x</text>
      <line x1="0" y1="150" x2="0" y2="-150" stroke="#334155" stroke-width="2" />
      <polygon points="0,-150 -4,-142 4,-142" fill="#334155" />
      <text x="8" y="-140" font-size="12" font-weight="bold" fill="#334155">y</text>
      <text x="-12" y="14" font-size="12" font-weight="bold" fill="#334155">O</text>
      <!-- Đường thẳng hàm số (vẽ động) -->
      <line id="dyn-line" x1="-140" y1="0" x2="140" y2="0" stroke="#ef4444" stroke-width="3" />
      <!-- Giao điểm A(0, b) -->
      <circle id="dyn-pt-a" cx="0" cy="0" r="5" fill="#2563eb" />
      <!-- Giao điểm B(-b/a, 0) -->
      <circle id="dyn-pt-b" cx="0" cy="0" r="5" fill="#10b981" />
    </svg>
  </div>
  <div id="line-desc-box" style="text-align: center; font-size: 1.0em; line-height: 1.7; color: var(--text-primary, #1e293b);">
    Đang tải phương trình...
  </div>
</div>

<script>
function updateLinePlot() {
  var a = parseFloat(document.getElementById('slider-a').value);
  var b = parseFloat(document.getElementById('slider-b').value);
  document.getElementById('disp-a').innerText = a;
  document.getElementById('disp-b').innerText = b;

  var line = document.getElementById('dyn-line');
  var ptA = document.getElementById('dyn-pt-a');
  var ptB = document.getElementById('dyn-pt-b');
  var desc = document.getElementById('line-desc-box');

  var scale = 30; // 30px = 1 unit

  // Tọa độ hai đầu đường thẳng tại x = -4.5 và x = 4.5
  var x1 = -4.5, y1 = a * x1 + b;
  var x2 = 4.5, y2 = a * x2 + b;
  line.setAttribute('x1', x1 * scale);
  line.setAttribute('y1', -y1 * scale);
  line.setAttribute('x2', x2 * scale);
  line.setAttribute('y2', -y2 * scale);

  // Giao điểm A(0, b)
  ptA.setAttribute('cx', 0);
  ptA.setAttribute('cy', -b * scale);

  // Giao điểm B(-b/a, 0) nếu a != 0
  if (a !== 0) {
    var xRoot = -b / a;
    ptB.setAttribute('cx', xRoot * scale);
    ptB.setAttribute('cy', 0);
    ptB.style.display = 'inline';
  } else {
    ptB.style.display = 'none';
  }

  var signB = b >= 0 ? '+ ' + b : '- ' + Math.abs(b);
  var eqStr = 'y = ' + a + 'x ' + signB;
  var statusStr = a > 0 ? '<span style="color:#15803d; font-weight:bold;">ĐỒNG BIẾN (a > 0)</span>' : (a < 0 ? '<span style="color:#b91c1c; font-weight:bold;">NGHỊCH BIẾN (a < 0)</span>' : '<span style="color:#d97706; font-weight:bold;">HÀM HẰNG (a = 0)</span>');

  desc.innerHTML = 'Phương trình đường thẳng: <strong style="color:#ef4444; font-size:1.15em;">' + eqStr + '</strong><br>' +
    '• Tính chất: ' + statusStr + '<br>' +
    '• Giao trục tung Oy: <strong style="color:#2563eb;">A(0; ' + b + ')</strong> | Giao trục hoành Ox: <strong style="color:#10b981;">B(' + (a !== 0 ? (-b/a).toFixed(2) : 'vô cực') + '; 0)</strong>';
}
setTimeout(function() { updateLinePlot(); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Nhận diện hàm số bậc nhất và xét tính biến thiên

**Phương pháp giải:**
1. Hàm số bậc nhất phải có dạng $y = ax + b$ với hệ số của $x$ khác $0$ ($a \neq 0$).
2. Xác định dấu của hệ số $a$:
   - $a > 0 \implies$ Hàm số đồng biến trên $\mathbb{R}$.
   - $a < 0 \implies$ Hàm số nghịch biến trên $\mathbb{R}$.

---

#### Bài toán 1:
Cho các hàm số sau:
$$y = 3 - 4x; \quad y = \frac{2x - 1}{3}; \quad y = 2x^2 + 1; \quad y = \sqrt{2}(x - 1) + 3; \quad y = \frac{5}{x} - 2$$
a) Trong các hàm số trên, hàm số nào là hàm số bậc nhất? Chỉ rõ các hệ số $a$ và $b$.
b) Trong các hàm số bậc nhất tìm được, hàm số nào đồng biến, hàm số nào nghịch biến trên $\mathbb{R}$? Vì sao?

**Lời giải:**

a) Nhận diện hàm số bậc nhất:
- $y = 3 - 4x = -4x + 3$: Là hàm số bậc nhất với $a = -4, b = 3$.
- $y = \frac{2x - 1}{3} = \frac{2}{3}x - \frac{1}{3}$: Là hàm số bậc nhất với $a = \frac{2}{3}, b = -\frac{1}{3}$.
- $y = 2x^2 + 1$: **Không phải** là hàm số bậc nhất vì chứa $x^2$.
- $y = \sqrt{2}(x - 1) + 3 = \sqrt{2}x - \sqrt{2} + 3$: Là hàm số bậc nhất với $a = \sqrt{2}, b = 3 - \sqrt{2}$.
- $y = \frac{5}{x} - 2$: **Không phải** là hàm số bậc nhất vì $x$ ở mẫu số.

b) Xét tính biến thiên:
- Hàm số $y = -4x + 3$ có $a = -4 < 0$ nên **nghịch biến** trên $\mathbb{R}$.
- Hàm số $y = \frac{2}{3}x - \frac{1}{3}$ có $a = \frac{2}{3} > 0$ nên **đồng biến** trên $\mathbb{R}$.
- Hàm số $y = \sqrt{2}x + 3 - \sqrt{2}$ có $a = \sqrt{2} > 0$ nên **đồng biến** trên $\mathbb{R}$.

---

### Dạng 2: Vẽ đồ thị hàm số bậc nhất

**Phương pháp giải:**
1. Tìm giao điểm của đồ thị với trục tung $Oy$: Cho $x = 0 \implies y = b \implies A(0; b)$.
2. Tìm giao điểm của đồ thị với trục hoành $Ox$: Cho $y = 0 \implies x = -\frac{b}{a} \implies B\left(-\frac{b}{a}; 0\right)$.
3. Vẽ đường thẳng đi qua $A$ và $B$.

---

#### Bài toán 2:
Vẽ đồ thị của hai hàm số sau trên cùng một mặt phẳng tọa độ $Oxy$:
a) $(d_1): y = 2x - 4$
b) $(d_2): y = -x + 2$

**Lời giải:**

a) Vẽ đồ thị $(d_1): y = 2x - 4$:
- Cho $x = 0 \implies y = -4$, ta được điểm $A(0; -4) \in Oy$.
- Cho $y = 0 \implies 2x - 4 = 0 \iff x = 2$, ta được điểm $B(2; 0) \in Ox$.
Đồ thị $(d_1)$ là đường thẳng đi qua hai điểm $A(0; -4)$ và $B(2; 0)$.

b) Vẽ đồ thị $(d_2): y = -x + 2$:
- Cho $x = 0 \implies y = 2$, ta được điểm $C(0; 2) \in Oy$.
- Cho $y = 0 \implies -x + 2 = 0 \iff x = 2$, ta được điểm $B(2; 0) \in Ox$.
Đồ thị $(d_2)$ là đường thẳng đi qua hai điểm $C(0; 2)$ và $B(2; 0)$.

*Nhận xét:* Hai đường thẳng $(d_1)$ và $(d_2)$ cùng đi qua điểm $B(2; 0)$ trên trục hoành. Điểm $B(2; 0)$ chính là giao điểm của hai đường thẳng đó!

---

### Dạng 3: Tìm tọa độ giao điểm của hai đường thẳng bằng phương pháp đại số

**Phương pháp giải:**
Cho hai đường thẳng $(d_1): y = a_1 x + b_1$ và $(d_2): y = a_2 x + b_2$ ($a_1 \neq a_2$).
1. Lập **phương trình hoành độ giao điểm**:
   $$a_1 x + b_1 = a_2 x + b_2$$
2. Giải phương trình bậc nhất trên để tìm nghiệm $x_0$.
3. Thay $x_0$ vào công thức của $(d_1)$ hoặc $(d_2)$ để tìm tung độ tương ứng $y_0$.
4. Kết luận tọa độ giao điểm $M(x_0; y_0)$.

---

#### Bài toán 3:
Cho hai hàm số bậc nhất: $(d_1): y = 2x + 1$ và $(d_2): y = -x + 4$.
a) Tìm tọa độ giao điểm $M$ của hai đường thẳng $(d_1)$ và $(d_2)$ bằng phép tính.
b) Tìm giá trị của tham số $m$ để đường thẳng $(d_3): y = (m - 1)x + 2m - 5$ cũng đi qua giao điểm $M$ trên (ba đường thẳng đồng quy).

**Lời giải:**

a) Phương trình hoành độ giao điểm của $(d_1)$ và $(d_2)$ là:
$$2x + 1 = -x + 4 \iff 2x + x = 4 - 1 \iff 3x = 3 \iff x = 1$$
Thay $x = 1$ vào phương trình $(d_1)$:
$$y = 2(1) + 1 = 3$$
Vậy tọa độ giao điểm của $(d_1)$ và $(d_2)$ là $M(1; 3)$.

b) Để ba đường thẳng $(d_1), (d_2), (d_3)$ đồng quy thì đường thẳng $(d_3)$ phải đi qua điểm $M(1; 3)$.
Thay tọa độ $x = 1, y = 3$ vào phương trình $(d_3)$:
$$3 = (m - 1) \cdot 1 + 2m - 5 \iff 3 = m - 1 + 2m - 5 \iff 3 = 3m - 6 \iff 3m = 9 \iff m = 3$$
Với $m = 3$, hệ số của $x$ trong $(d_3)$ là $m - 1 = 2 \neq 0$ (thỏa mãn là hàm số bậc nhất).
Vậy $m = 3$.

---

### Dạng 4: Xác định hàm số bậc nhất $y = ax + b$ & Bài toán thực tế

**Phương pháp giải:**
1. Dựa vào các giả thiết đề bài:
   - Đi qua điểm $M(x_0; y_0) \implies y_0 = a x_0 + b$.
   - Song song với đường thẳng $y = a'x + b' \implies a = a'$.
   - Cắt trục tung tại điểm có tung độ bằng $b$.
2. Giải hệ phương trình tìm ra các hệ số $a$ và $b$.

---

#### Bài toán 4 (Toán thực tế chuyển đổi nhiệt độ):
Mối liên hệ giữa nhiệt độ theo thang Fahrenheit ($^\circ\text{F}$) và nhiệt độ theo thang Celsius ($^\circ\text{C}$) là một hàm số bậc nhất: $F = a \cdot C + b$.
Biết rằng:
- Nước đóng băng ở $0^\circ\text{C}$ tương ứng với $32^\circ\text{F}$.
- Nước sôi ở $100^\circ\text{C}$ tương ứng với $212^\circ\text{F}$.
a) Xác định các hệ số $a$ và $b$ để tìm công thức hàm số đổi từ $^\circ\text{C}$ sang $^\circ\text{F}$.
b) Thân nhiệt bình thường của con người là $37^\circ\text{C}$. Hãy đổi sang độ Fahrenheit.
c) Có nhiệt độ nào mà số đo trên thang độ C và thang độ F bằng nhau không?

**Lời giải:**

a) Dựa vào giả thiết:
- Tại $C = 0 \implies F = 32$:
  $$32 = a(0) + b \implies b = 32$$
- Tại $C = 100 \implies F = 212$:
  $$212 = a(100) + 32 \iff 100a = 180 \iff a = \frac{180}{100} = 1{,}8 = \frac{9}{5}$$
Vậy công thức hàm số là:
$$F = 1{,}8C + 32 \quad\text{hay}\quad F = \frac{9}{5}C + 32$$

b) Khi $C = 37^\circ\text{C}$:
$$F = 1{,}8 \cdot 37 + 32 = 66{,}6 + 32 = 98{,}6^\circ\text{F}$$
Vậy thân nhiệt bình thường của con người là $98{,}6^\circ\text{F}$.

c) Giả sử tại mức nhiệt độ $x$ thì số đo trên hai thang bằng nhau ($F = C = x$):
$$x = 1{,}8x + 32 \iff x - 1{,}8x = 32 \iff -0{,}8x = 32 \iff x = \frac{32}{-0{,}8} = -40$$
Vậy tại nhiệt độ âm $40$ độ ($-40^\circ\text{C} = -40^\circ\text{F}$), hai thang đo nhiệt độ chỉ cùng một con số!

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Thuật toán Hồi quy Tuyến tính (Linear Regression) trong AI

Trong học máy (Machine Learning), khi dự báo giá nhà dựa trên diện tích $x$, máy tính tìm hàm số bậc nhất tối ưu:
$$\hat{y} = ax + b$$
Bằng thuật toán Hạ độ dốc (Gradient Descent), máy tính liên tục điều chỉnh hệ số $a$ và $b$ để tối thiểu hóa sai số toàn phương trung bình (MSE). Đây là mô hình AI đầu tiên mà mọi kỹ sư dữ liệu tại Google, OpenAI hay Stanford đều phải làm chủ!

---

### Chuyên đề 2: Định luật Đàn hồi Robert Hooke (1678)

Nhà bác học Robert Hooke phát hiện ra định luật lực đàn hồi của lò xo:
$$F = k \cdot \Delta l$$
Trong đó $k$ là độ cứng của lò xo, $\Delta l$ là độ dãn. Đây là một hàm số bậc nhất đi qua gốc tọa độ ($b = 0$). Nhờ hàm số này, các kỹ sư chế tạo ra hệ thống giảm xóc cho xe ô tô, cân điện tử lò xo và cơ chế chống rung địa chấn cho các tòa tháp chọc trời ở Tokyo.

---

### Chuyên đề 3: Phân tích Điểm Hòa vốn (Break-even Point) trong Kinh doanh

Một doanh nghiệp sản xuất bánh trung thu có:
- Định phí thuê mặt bằng cố định: $50$ triệu đồng/tháng ($b = 50$).
- Biến phí sản xuất mỗi chiếc bánh: $20\,000$ đồng/chiếc ($a = 0{,}02$ triệu).
Hàm tổng chi phí là hàm số bậc nhất: $C(x) = 0{,}02x + 50$.
Nếu bán với giá $45\,000$ đồng/chiếc, hàm doanh thu là $R(x) = 0{,}045x$.
Giao điểm của hai đường thẳng $C(x) = R(x)$ cho biết điểm hòa vốn:
$$0{,}045x = 0{,}02x + 50 \iff 0{,}025x = 50 \iff x = 2\,000\text{ chiếc bánh}$$
Vượt qua ngưỡng $2\,000$ chiếc, công ty bắt đầu có lãi ròng!

---

### Chuyên đề 4: Thuật toán Vẽ Đường thẳng Bresenham trong GPU

Trên màn hình máy tính gồm hàng triệu điểm ảnh (pixel) rời rạc, làm thế nào card đồ họa vẽ được một đoạn thẳng $y = ax + b$ siêu mượt mà không bị răng cưa?
Năm 1962, Jack Bresenham tại tập đoàn IBM đã phát minh ra **Thuật toán Bresenham**:
Chỉ dùng các phép cộng và trừ số nguyên đơn giản để xác định pixel tiếp theo cần bật sáng, giúp card đồ họa vẽ hàng tỷ đoạn thẳng mỗi giây trong game 3D!

---

### Chuyên đề 5: Định luật Ohm cho Đoạn mạch Toàn phần

Trong vật lý điện học lớp 9, hiệu điện thế giữa hai cực của một nguồn điện (pin) có suất điện động $\mathcal{E}$ và điện trở trong $r$ tuân theo hàm số bậc nhất theo cường độ dòng điện $I$:
$$U = \mathcal{E} - r \cdot I$$
Đồ thị $U = f(I)$ là một đường thẳng nghịch biến ($a = -r < 0$). Tung độ gốc cho biết chính xác suất điện động của pin khi hở mạch ($I = 0 \implies U = \mathcal{E}$), nguyên lý cơ bản để kiểm tra dung lượng pin xe điện Tesla.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hàm số nào sau đây là hàm số bậc nhất?",
  "options": [
    "y = 2 - 3x",
    "y = 1/x + 2",
    "y = x^2 - 4",
    "y = 0x + 3"
  ],
  "answer": 0,
  "explanation": "Hàm số bậc nhất có dạng y = ax + b với a ≠ 0. Hàm số y = 2 - 3x = -3x + 2 có a = -3 ≠ 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hàm số bậc nhất y = (m - 3)x + 2 đồng biến trên R khi và chỉ khi:",
  "options": [
    "m > 3",
    "m < 3",
    "m ≠ 3",
    "m ≥ 3"
  ],
  "answer": 0,
  "explanation": "Hàm số bậc nhất đồng biến trên R khi hệ số góc a > 0 <=> m - 3 > 0 <=> m > 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đồ thị hàm số y = 3x - 6 cắt trục tung Oy tại điểm nào?",
  "options": [
    "(0; -6)",
    "(2; 0)",
    "(0; 6)",
    "(-6; 0)"
  ],
  "answer": 0,
  "explanation": "Cắt trục Oy thì x = 0 => y = 3(0) - 6 = -6. Tọa độ giao điểm là (0; -6)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Đồ thị hàm số y = -2x + 4 cắt trục hoành Ox tại điểm nào?",
  "options": [
    "(2; 0)",
    "(0; 4)",
    "(-2; 0)",
    "(4; 0)"
  ],
  "answer": 0,
  "explanation": "Cắt trục Ox thì y = 0 => -2x + 4 = 0 <=> x = 2. Tọa độ giao điểm là (2; 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Đồ thị hàm số y = ax + 3 đi qua điểm M(1; 5). Giá trị của a là:",
  "options": [
    "2",
    "8",
    "-2",
    "5"
  ],
  "answer": 0,
  "explanation": "Thay x = 1, y = 5: 5 = a(1) + 3 <=> a = 5 - 3 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hàm số y = -3x + 5. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "Hàm số nghịch biến trên R vì a = -3 < 0",
    "Hàm số đồng biến trên R vì b = 5 > 0",
    "Đồ thị hàm số đi qua gốc tọa độ O",
    "Hàm số đồng biến trên R vì a = -3"
  ],
  "answer": 0,
  "explanation": "Hệ số a = -3 < 0 nên hàm số nghịch biến trên R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Hoành độ giao điểm của hai đường thẳng y = 2x - 3 và y = x + 1 là:",
  "options": [
    "x = 4",
    "x = -4",
    "x = 2",
    "x = -2"
  ],
  "answer": 0,
  "explanation": "Phương trình hoành độ giao điểm: 2x - 3 = x + 1 <=> 2x - x = 1 + 3 <=> x = 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Đường thẳng y = 2x - 1 song song với đường thẳng nào sau đây?",
  "options": [
    "y = 2x + 5",
    "y = -2x - 1",
    "y = x - 1",
    "y = 3x - 1"
  ],
  "answer": 0,
  "explanation": "Hai đường thẳng song song khi có cùng hệ số góc a = 2 và tung độ gốc khác nhau (b ≠ b')."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Góc tạo bởi đường thẳng y = x + 2 với chiều dương của trục Ox là một góc:",
  "options": [
    "Nhọn (bé hơn 90°)",
    "Tù (lớn hơn 90°)",
    "Vuông (bằng 90°)",
    "Bẹt (180°)"
  ],
  "answer": 0,
  "explanation": "Vì hệ số a = 1 > 0 nên góc tạo bởi đường thẳng với chiều dương trục Ox là góc nhọn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Diện tích tam giác tạo bởi đường thẳng y = -2x + 4 với hai trục tọa độ Ox và Oy là:",
  "options": [
    "4 (đvdt)",
    "8 (đvdt)",
    "2 (đvdt)",
    "16 (đvdt)"
  ],
  "answer": 0,
  "explanation": "Giao Ox là A(2; 0) => OA = 2. Giao Oy là B(0; 4) => OB = 4. Diện tích tam giác vuông OAB: S = 1/2 · OA · OB = 1/2 · 2 · 4 = 4."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho hàm số bậc nhất $y = (2m + 4)x - 3$.
a) Tìm $m$ để hàm số là hàm số bậc nhất.
b) Tìm $m$ để hàm số đồng biến trên $\mathbb{R}$; nghịch biến trên $\mathbb{R}$.
c) Tìm $m$ biết đồ thị hàm số đi qua điểm $A(1; 3)$.

### Bài tập 2:
Vẽ đồ thị của các hàm số sau trên cùng một mặt phẳng tọa độ $Oxy$:
$$(d_1): y = x + 3; \quad (d_2): y = -2x + 3$$
a) Tìm tọa độ giao điểm $A$ của hai đường thẳng $(d_1)$ và $(d_2)$.
b) Gọi giao điểm của $(d_1)$ và $(d_2)$ với trục hoành lần lượt là $B$ và $C$. Tính diện tích tam giác $ABC$.

### Bài tập 3:
Xác định hàm số bậc nhất $y = ax + b$ trong mỗi trường hợp sau:
a) Đồ thị hàm số song song với đường thẳng $y = 3x + 1$ và đi qua điểm $M(2; 5)$.
b) Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $-2$ và cắt trục hoành tại điểm có hoành độ bằng $3$.
c) Đồ thị hàm số đi qua hai điểm $P(1; 3)$ và $Q(-2; -3)$.

### Bài tập 4 (Toán thực tế):
Một xí nghiệp may gia công áo sơ mi có chi phí vận hành máy móc cố định là $12\,000\,000$ đồng mỗi ngày. Chi phí nguyên vật liệu và nhân công để may mỗi chiếc áo là $80\,000$ đồng.
a) Viết công thức hàm số bậc nhất biểu thị tổng chi phí sản xuất $y\text{ (đồng)}$ trong một ngày theo số lượng $x\text{ (chiếc áo)}$ may được.
b) Nếu trong một ngày xí nghiệp may được $300$ chiếc áo thì tổng chi phí là bao nhiêu?
c) Nếu ngân sách chi phí sản xuất trong ngày của xí nghiệp là $32\,000\,000$ đồng thì xí nghiệp may được bao nhiêu chiếc áo?
