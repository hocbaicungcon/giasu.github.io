---
title: 'Toán 10 Bài 15: Hàm số và đồ thị - Lý thuyết, Tính đơn điệu, Widget tương tác & Bài tập'
description: 'Làm chủ lý thuyết Hàm số và đồ thị Toán 10: Tập xác định, tập giá trị, tính đồng biến nghịch biến, đồ thị hàm số phân nhánh, widget vẽ đồ thị hàm số động và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hàm số 10
  - Hàm số và đồ thị
  - Tập xác định
  - Tính đơn điệu
  - Kết nối tri thức
grade: 10
---

# Bài 15. Hàm số và đồ thị

Hàm số là một trong những khái niệm vĩ đại và nền tảng nhất của toán học hiện đại. Từ quy luật rơi tự do của Galilei, quỹ đạo bay của tàu vũ trụ, biến động tỉ giá ngoại tệ đến biểu giá tính tiền điện nước sinh hoạt, tất cả đều được biểu diễn dưới dạng các mối liên hệ hàm số. Bài học mở đầu của Toán 10 Tập 2 sẽ giúp bạn trang bị đầy đủ công cụ phân tích hàm số: tập xác định, tập giá trị, tính đồng biến, nghịch biến và kỹ năng đọc đồ thị chuẩn xác.

---

## 1. Sơ đồ tư duy (Mindmap) Hàm số & Đồ thị

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Khái niệm hàm số</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $y = f(x)$: Mỗi giá trị $x \in D$ tương ứng với <em>duy nhất một</em> giá trị $y \in \mathbb{R}$.<br>
      • $D$: Tập xác định (miền xác định).<br>
      • $T = \{f(x) \mid x \in D\}$: Tập giá trị.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Sự biến thiên (Đơn điệu)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>Đồng biến (tăng) trên $K$:</strong> $x_1 < x_2 \implies f(x_1) < f(x_2)$ (đồ thị đi lên từ trái sang phải).<br>
      • <strong>Nghịch biến (giảm) trên $K$:</strong> $x_1 < x_2 \implies f(x_1) > f(x_2)$ (đồ thị đi xuống từ trái sang phải).
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Đồ thị hàm số</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Tập hợp tất cả các điểm $M(x; f(x))$ trên mặt phẳng tọa độ $Oxy$.<br>
      • Phép thử đường thẳng đứng: Mọi đường thẳng đứng $x = x_0$ ($x_0 \in D$) cắt đồ thị tại đúng 1 điểm duy nhất.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Hàm số phân nhánh</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Hàm số cho bởi nhiều công thức khác nhau trên từng khoảng của tập xác định.<br>
      • Mô hình hóa tính cước taxi, thuế thu nhập cá nhân, cước điện bậc thang.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Nhận diện hàm số

1. **Cho tương ứng mỗi học sinh trong lớp với ngày sinh của bạn đó. Tương ứng này có phải là một hàm số không?**  
   *Đáp án:* Có, vì mỗi học sinh chỉ có duy nhất một ngày sinh nhật.
2. **Ngược lại, tương ứng mỗi ngày trong năm với học sinh sinh ngày đó có phải là hàm số không?**  
   *Đáp án:* Không nhất thiết, vì một ngày có thể có 2, 3 bạn cùng sinh nhật (1 ngày tương ứng với nhiều người) hoặc không có bạn nào sinh ngày đó.
3. **Tập xác định của hàm số $y = \frac{1}{x - 3}$ là gì?**  
   *Đáp án:* Điều kiện mẫu khác 0: $x - 3 \ne 0 \iff x \ne 3 \implies D = \mathbb{R} \setminus \{3\}$.
4. **Hàm số $y = \sqrt{x - 1}$ xác định khi nào?**  
   *Đáp án:* Điều kiện biểu thức dưới căn bậc hai không âm: $x - 1 \ge 0 \iff x \ge 1 \implies D = [1; +\infty)$.
5. **Đồ thị của một hàm số đi lên từ trái sang phải trên khoảng $(1; 5)$. Hàm số đồng biến hay nghịch biến trên khoảng đó?**  
   *Đáp án:* Đồng biến (tăng).

---

## 3. Lý thuyết trọng tâm

### 3.1. Khái niệm hàm số, tập xác định và tập giá trị

> [!NOTE]
> Giả sử $D$ là một tập con khác rỗng của $\mathbb{R}$.
> - Một **hàm số** $f$ xác định trên $D$ là một quy tắc cho tương ứng mỗi số $x \in D$ với **một và chỉ một** số $y \in \mathbb{R}$.
> - Kí hiệu: $y = f(x), \quad x \in D$.
> - $x$ gọi là **biến số** (biến độc lập), $y$ gọi là **hàm số** (biến phụ thuộc).
> - Tập hợp $D$ gọi là **tập xác định** (hay miền xác định) của hàm số.
> - Tập hợp $T = \{y \in \mathbb{R} \mid \exists x \in D: y = f(x)\}$ gọi là **tập giá trị** của hàm số.

> [!TIP]
> **Quy ước tìm tập xác định của hàm số cho bởi công thức $y = f(x)$:**
> Khi hàm số được cho bằng công thức mà không chỉ rõ tập xác định, ta quy ước tập xác định $D$ là tập hợp tất cả các giá trị thực của $x$ sao cho biểu thức $f(x)$ **có nghĩa**:
> 1. Phân thức $\frac{P(x)}{Q(x)}$ có nghĩa $\iff Q(x) \ne 0$.
> 2. Căn thức bậc hai $\sqrt{P(x)}$ có nghĩa $\iff P(x) \ge 0$.
> 3. Căn thức ở mẫu $\frac{1}{\sqrt{P(x)}}$ có nghĩa $\iff P(x) > 0$.

### 3.2. Đồ thị của hàm số

> [!NOTE]
> Đồ thị của hàm số $y = f(x)$ xác định trên $D$ là tập hợp tất cả các điểm $M(x; f(x))$ trên mặt phẳng tọa độ $Oxy$ với mọi $x \in D$:
> $$\mathcal{G} = \{M(x; f(x)) \mid x \in D\}$$
> - Điểm $M(x_0; y_0)$ thuộc đồ thị hàm số $\iff x_0 \in D$ và $y_0 = f(x_0)$.

### 3.3. Sự biến thiên của hàm số (Tính đồng biến, nghịch biến)

Cho hàm số $y = f(x)$ xác định trên khoảng $K \subseteq \mathbb{R}$:

> [!NOTE]
> 1. Hàm số $y = f(x)$ gọi là **đồng biến (tăng)** trên khoảng $K$ nếu:
>    $$\forall x_1, x_2 \in K: x_1 < x_2 \implies f(x_1) < f(x_2)$$
>    *(Đồ thị có hướng đi lên từ trái qua phải).*
> 2. Hàm số $y = f(x)$ gọi là **nghịch biến (giảm)** trên khoảng $K$ nếu:
>    $$\forall x_1, x_2 \in K: x_1 < x_2 \implies f(x_1) > f(x_2)$$
>    *(Đồ thị có hướng đi xuống từ trái qua phải).*

> [!TIP]
> **Xét tỉ số biến thiên:** Với hai điểm phân biệt $x_1 \ne x_2 \in K$:
> $$T = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$$
> - Nếu $T > 0$ với mọi $x_1 \ne x_2 \in K \implies$ Hàm số **đồng biến** trên $K$.
> - Nếu $T < 0$ với mọi $x_1 \ne x_2 \in K \implies$ Hàm số **nghịch biến** trên $K$.

---

## 4. Widget tương tác: Khám Phá Đồ Thị Hàm Số & Tính Đơn Điệu

Bạn hãy chọn các dạng hàm số khác nhau để quan sát trực quan đồ thị, bảng giá trị và các khoảng đồng biến, nghịch biến:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">📈 Trực Quan Hóa Đồ Thị & Tính Đơn Điệu</h3>
    <span style="font-size: 0.85rem; background: #dbeafe; color: #1d4ed8; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Mô phỏng động</span>
  </div>

  <div style="display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap;">
    <button class="fn-btn" data-fn="linear" style="padding: 8px 14px; border: 1px solid #3b82f6; background: #3b82f6; color: white; border-radius: 6px; font-weight: 600; cursor: pointer;">Hàm bậc nhất: $y = 2x - 1$</button>
    <button class="fn-btn" data-fn="quad" style="padding: 8px 14px; border: 1px solid #cbd5e1; background: white; color: #334155; border-radius: 6px; font-weight: 600; cursor: pointer;">Hàm bậc hai: $y = x^2 - 2x$</button>
    <button class="fn-btn" data-fn="hyper" style="padding: 8px 14px; border: 1px solid #cbd5e1; background: white; color: #334155; border-radius: 6px; font-weight: 600; cursor: pointer;">Hàm phân thức: $y = \frac{2}{x}$</button>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 240px; gap: 16px; align-items: center;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="fnSvg" viewBox="0 0 360 260" style="width: 100%; max-width: 380px; height: auto;">
        <!-- Grid -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="30" y1="30" x2="330" y2="30" /><line x1="30" y1="80" x2="330" y2="80" />
          <line x1="30" y1="130" x2="330" y2="130" /><line x1="30" y1="180" x2="330" y2="180" />
          <line x1="30" y1="230" x2="330" y2="230" />
          <line x1="80" y1="20" x2="80" y2="240" /><line x1="130" y1="20" x2="130" y2="240" />
          <line x1="180" y1="20" x2="180" y2="240" /><line x1="230" y1="20" x2="230" y2="240" />
          <line x1="280" y1="20" x2="280" y2="240" />
        </g>
        <!-- Axes -->
        <line x1="20" y1="130" x2="340" y2="130" stroke="#94a3b8" stroke-width="1.8" />
        <line x1="180" y1="240" x2="180" y2="20" stroke="#94a3b8" stroke-width="1.8" />
        <text x="335" y="125" font-size="12" fill="#64748b" font-weight="bold">x</text>
        <text x="185" y="25" font-size="12" fill="#64748b" font-weight="bold">y</text>
        <text x="168" y="145" font-size="11" fill="#94a3b8">O</text>
        <!-- Curve -->
        <path id="curvePath" d="" fill="none" stroke="#2563eb" stroke-width="2.5" />
      </svg>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 0.88rem;">
      <h4 style="margin: 0 0 8px 0; color: #1e293b; font-size: 0.95rem;">Đặc tính hàm số</h4>
      <div style="margin-bottom: 8px;">
        <span style="color: #64748b;">Tập xác định:</span><br>
        <strong id="descDomain" style="color: #0f172a;">D = ℝ</strong>
      </div>
      <div style="margin-bottom: 8px;">
        <span style="color: #64748b;">Đồng biến:</span><br>
        <strong id="descInc" style="color: #16a34a;">Trên (-∞; +∞)</strong>
      </div>
      <div>
        <span style="color: #64748b;">Nghịch biến:</span><br>
        <strong id="descDec" style="color: #dc2626;">Không có</strong>
      </div>
    </div>
  </div>
</div>

<script>
(() => {
  const curvePath = document.getElementById('curvePath');
  const descDomain = document.getElementById('descDomain');
  const descInc = document.getElementById('descInc');
  const descDec = document.getElementById('descDec');
  const btns = document.querySelectorAll('.fn-btn');

  // Origin at (180, 130), 1 unit = 25px
  const ox = 180, oy = 130, scale = 25;

  function toScreen(x, y) {
    return [ox + x * scale, oy - y * scale];
  }

  function draw(fnType) {
    let d = '';
    if (fnType === 'linear') {
      // y = 2x - 1
      const [x1, y1] = toScreen(-5, 2 * (-5) - 1);
      const [x2, y2] = toScreen(5, 2 * 5 - 1);
      d = `M ${x1} ${y1} L ${x2} ${y2}`;
      descDomain.textContent = 'D = ℝ';
      descInc.textContent = 'Đồng biến trên ℝ';
      descDec.textContent = 'Không có';
    } else if (fnType === 'quad') {
      // y = x^2 - 2x
      const pts = [];
      for (let x = -3.5; x <= 5.5; x += 0.1) {
        const y = x * x - 2 * x;
        const [sx, sy] = toScreen(x, y);
        pts.push(`${sx},${sy}`);
      }
      d = 'M ' + pts.join(' L ');
      descDomain.textContent = 'D = ℝ';
      descInc.textContent = 'Đồng biến trên (1; +∞)';
      descDec.textContent = 'Nghịch biến trên (-∞; 1)';
    } else if (fnType === 'hyper') {
      // y = 2/x
      const pts1 = [], pts2 = [];
      for (let x = -6; x <= -0.3; x += 0.1) {
        const y = 2 / x;
        const [sx, sy] = toScreen(x, y);
        pts1.push(`${sx},${sy}`);
      }
      for (let x = 0.3; x <= 6; x += 0.1) {
        const y = 2 / x;
        const [sx, sy] = toScreen(x, y);
        pts2.push(`${sx},${sy}`);
      }
      d = 'M ' + pts1.join(' L ') + ' M ' + pts2.join(' L ');
      descDomain.textContent = 'D = ℝ \\ {0}';
      descInc.textContent = 'Không có';
      descDec.textContent = 'Nghịch biến trên (-∞; 0) và (0; +∞)';
    }
    curvePath.setAttribute('d', d);
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => {
        b.style.background = 'white';
        b.style.color = '#334155';
        b.style.borderColor = '#cbd5e1';
      });
      btn.style.background = '#3b82f6';
      btn.style.color = 'white';
      btn.style.borderColor = '#3b82f6';
      draw(btn.dataset.fn);
    });
  });

  draw('linear');
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Tìm tập xác định của hàm số

#### Phương pháp giải:
Tìm điều kiện để mọi biểu thức thành phần có nghĩa:
- Phân thức $\frac{A(x)}{B(x)}$ xác định khi $B(x) \ne 0$.
- Căn thức $\sqrt{A(x)}$ xác định khi $A(x) \ge 0$.
- Phân thức chứa căn dưới mẫu $\frac{A(x)}{\sqrt{B(x)}}$ xác định khi $B(x) > 0$.

#### Bài toán 1
Tìm tập xác định của các hàm số sau:
1. $y = \frac{2x - 3}{x^2 - 4}$
2. $y = \sqrt{2x - 6} + \frac{1}{\sqrt{7 - x}}$

#### Lời giải:
1. Hàm số $y = \frac{2x - 3}{x^2 - 4}$ xác định khi và chỉ khi:
   $$x^2 - 4 \ne 0 \iff x^2 \ne 4 \iff x \ne 2 \quad \text{và} \quad x \ne -2$$
   Vậy tập xác định của hàm số là $D = \mathbb{R} \setminus \{-2; 2\}$.

2. Hàm số $y = \sqrt{2x - 6} + \frac{1}{\sqrt{7 - x}}$ xác định khi và chỉ khi:
   $$\begin{cases} 2x - 6 \ge 0 \\ 7 - x > 0 \end{cases} \iff \begin{cases} 2x \ge 6 \\ x < 7 \end{cases} \iff \begin{cases} x \ge 3 \\ x < 7 \end{cases} \iff 3 \le x < 7$$
   Vậy tập xác định của hàm số là $D = [3; 7)$.

---

### Dạng 2: Xét tính đồng biến, nghịch biến của hàm số

#### Phương pháp giải:
Lấy tùy ý $x_1, x_2 \in K$ với $x_1 \ne x_2$. Lập tỉ số:
$$T = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$$
- Nếu $T > 0 \implies$ Hàm số đồng biến trên $K$.
- Nếu $T < 0 \implies$ Hàm số nghịch biến trên $K$.

#### Bài toán 2
Chứng minh rằng hàm số $f(x) = x^2 - 4x + 3$ nghịch biến trên khoảng $(-\infty; 2)$ và đồng biến trên khoảng $(2; +\infty)$.

#### Lời giải:
Lấy tùy ý $x_1 \ne x_2$:
$$f(x_2) - f(x_1) = (x_2^2 - 4x_2 + 3) - (x_1^2 - 4x_1 + 3) = (x_2^2 - x_1^2) - 4(x_2 - x_1)$$
$$= (x_2 - x_1)(x_2 + x_1 - 4)$$
Lập tỉ số biến thiên:
$$T = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = x_1 + x_2 - 4$$
1. **Trên khoảng $(-\infty; 2)$:**
   Với mọi $x_1, x_2 < 2$, ta có $x_1 + x_2 < 4 \implies T = x_1 + x_2 - 4 < 0$.
   Do đó, hàm số **nghịch biến trên khoảng $(-\infty; 2)$**.
2. **Trên khoảng $(2; +\infty)$:**
   Với mọi $x_1, x_2 > 2$, ta có $x_1 + x_2 > 4 \implies T = x_1 + x_2 - 4 > 0$.
   Do đó, hàm số **đồng biến trên khoảng $(2; +\infty)$**.

---

### Dạng 3: Điểm thuộc đồ thị và đồ thị hàm số phân nhánh

#### Phương pháp giải:
- Điểm $M(x_0; y_0) \in \mathcal{G} \iff y_0 = f(x_0)$.
- Đối với hàm phân nhánh: Để tính $f(x_0)$, kiểm tra $x_0$ thuộc miền con nào thì dùng công thức tương ứng của miền con đó.

#### Bài toán 3
Cho hàm số phân nhánh:
$$f(x) = \begin{cases} 2x + 1 & \text{khi } x \ge 1 \\ x^2 - 3 & \text{khi } x < 1 \end{cases}$$
1. Tính giá trị của $f(3), f(1)$ và $f(-2)$.
2. Trong hai điểm $A(2; 5)$ và $B(-1; 2)$, điểm nào thuộc đồ thị hàm số?

#### Lời giải:
1. Tính các giá trị:
   - Vì $3 \ge 1$, ta dùng nhánh trên: $f(3) = 2(3) + 1 = 7$.
   - Vì $1 \ge 1$, ta dùng nhánh trên: $f(1) = 2(1) + 1 = 3$.
   - Vì $-2 < 1$, ta dùng nhánh dưới: $f(-2) = (-2)^2 - 3 = 4 - 3 = 1$.
2. Xét hai điểm:
   - Xét điểm $A(2; 5)$: Có hoành độ $x = 2 \ge 1 \implies f(2) = 2(2) + 1 = 5 = y_A$. Vậy điểm $A(2; 5)$ thuộc đồ thị hàm số.
   - Xét điểm $B(-1; 2)$: Có hoành độ $x = -1 < 1 \implies f(-1) = (-1)^2 - 3 = -2 \ne 2 = y_B$. Vậy điểm $B(-1; 2)$ không thuộc đồ thị.

---

### Dạng 4: Ứng dụng thực tế: Thiết lập mô hình hàm số

#### Phương pháp giải:
Gọi biến độc lập $x$, xác định đơn vị đo và điều kiện thực tế của $x$. Thiết lập công thức biểu diễn đại lượng cần tính theo $x$.

#### Bài toán 4
Giá cước của một hãng taxi công nghệ được tính như sau:
- Giá mở cửa: $10\,000\text{ đồng}$ cho $0,5\text{ km}$ đầu tiên.
- Từ trên $0,5\text{ km}$ đến $10\text{ km}$: Giá $14\,000\text{ đồng/km}$.
- Từ trên $10\text{ km}$ trở đi: Giá $11\,000\text{ đồng/km}$.
1. Viết công thức hàm số $T(x)$ tính số tiền cước (nghìn đồng) theo quãng đường di chuyển $x$ ($\text{km}$).
2. Tính số tiền một khách hàng phải trả khi đi quãng đường $18\text{ km}$.

#### Lời giải:
1. Phân tích từng chặng di chuyển:
   - Nếu $0 < x \le 0,5$: $T(x) = 10$.
   - Nếu $0,5 < x \le 10$: $T(x) = 10 + 14(x - 0,5) = 14x + 3$.
   - Nếu $x > 10$: Quãng đường từ $0$ đến $10\text{ km}$ hết $T(10) = 14(10) + 3 = 143\text{ nghìn đồng}$.
     Đoạn đường trên $10\text{ km}$ có độ dài $x - 10$ tính với giá $11\text{ nghìn/km}$.
     $T(x) = 143 + 11(x - 10) = 11x + 33$.
   
   Công thức hàm số phân nhánh:
   $$T(x) = \begin{cases} 10 & \text{khi } 0 < x \le 0,5 \\ 14x + 3 & \text{khi } 0,5 < x \le 10 \\ 11x + 33 & \text{khi } x > 10 \end{cases}$$
2. Với quãng đường $x = 18\text{ km} > 10$:
   $$T(18) = 11(18) + 33 = 198 + 33 = 231\text{ nghìn đồng} = 231\,000\text{ VNĐ}$$

---

## 6. Năm ứng dụng thực tế khoa học & đời sống

1. **Biểu giá điện sinh hoạt bậc thang:** Tập đoàn Điện lực EVN áp dụng hàm số phân nhánh theo 6 bậc tiêu thụ: Càng dùng nhiều điện, đơn giá mỗi kWh càng cao nhằm khuyến khích tiết kiệm năng lượng.
2. **Kỹ thuật xử lí tín hiệu âm thanh & DSP:** Sóng âm phát ra từ loa điện thoại là một hàm số liên tục của áp suất không khí theo thời gian $P = f(t)$. Bộ lọc số (Equalizer) can thiệp vào các khoảng đồng biến nghịch biến của hàm sóng để khuếch đại dải trầm (Bass) hay dải bổng (Treble).
3. **Quỹ đạo bay & Định vị tên lửa:** Độ cao của tên lửa đẩy vệ tinh theo thời gian $h = f(t)$ là một hàm số phụ thuộc vào khối lượng nhiên liệu tiêu hao và lực cản khí quyển.
4. **Mô hình tăng trưởng kinh tế & Doanh thu:** Doanh thu của một doanh nghiệp $R(p) = p \cdot Q(p)$ là một hàm số theo giá bán $p$. Phân tích khoảng đồng biến giúp nhà quản trị tìm mức giá tối ưu để doanh thu đạt đỉnh.
5. **Dược động học & Nồng độ thuốc trong máu:** Sau khi uống thuốc, nồng độ hoạt chất trong huyết tương $C(t)$ đồng biến tăng nhanh đến nồng độ đỉnh $C_{max}$, sau đó nghịch biến giảm dần do quá trình đào thải của gan và thận.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q1",
  "question": "Tập xác định của hàm số $y = \\frac{x + 2}{x - 5}$ là:",
  "options": [
    "D = R \\ {5}",
    "D = R \\ {-2}",
    "D = (5; +∞)",
    "D = R \\ {-2; 5}"
  ],
  "answer": 0,
  "explanation": "Điều kiện xác định: $x - 5 \\ne 0 \\iff x \\ne 5$. Vậy $D = \\mathbb{R} \\setminus \\{5\\}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q2",
  "question": "Tập xác định của hàm số $y = \\sqrt{6 - 3x}$ là:",
  "options": [
    "D = (-∞; 2]",
    "D = [2; +∞)",
    "D = (-∞; 2)",
    "D = R \\ {2}"
  ],
  "answer": 0,
  "explanation": "Điều kiện: $6 - 3x \\ge 0 \\iff 3x \\le 6 \\iff x \\le 2$. Vậy $D = (-\\infty; 2]$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q3",
  "question": "Tập xác định của hàm số $y = \\frac{1}{\\sqrt{x + 4}}$ là:",
  "options": [
    "D = (-4; +∞)",
    "D = [-4; +∞)",
    "D = R \\ {-4}",
    "D = (4; +∞)"
  ],
  "answer": 0,
  "explanation": "Căn thức ở mẫu số nên biểu thức phải dương nghiêm ngặt: $x + 4 > 0 \\iff x > -4$. Vậy $D = (-4; +\\infty)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q4",
  "question": "Hàm số nào sau đây ĐỒNG BIẾN trên toàn trục số thực $\\mathbb{R}$?",
  "options": [
    "$y = 3x - 5$",
    "$y = -2x + 1$",
    "$y = x^2$",
    "$y = -x^3$"
  ],
  "answer": 0,
  "explanation": "Hàm bậc nhất $y = ax + b$ với hệ số góc $a = 3 > 0$ đồng biến trên toàn bộ $\\mathbb{R}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q5",
  "question": "Điểm nào sau đây THUỘC đồ thị của hàm số $y = 2x^2 - 3x + 1$?",
  "options": [
    "$M(2; 3)$",
    "$N(1; 1)$",
    "$P(0; -1)$",
    "$Q(-1; 0)$"
  ],
  "answer": 0,
  "explanation": "Với $x = 2 \\implies y = 2(2^2) - 3(2) + 1 = 8 - 6 + 1 = 3$. Vậy điểm $M(2; 3)$ thuộc đồ thị."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q6",
  "question": "Cho hàm số $y = f(x)$ nghịch biến trên khoảng $(1; 4)$. So sánh nào sau đây đúng?",
  "options": [
    "$f(2) > f(3)$",
    "$f(2) < f(3)$",
    "$f(2) = f(3)$",
    "Không so sánh được"
  ],
  "answer": 0,
  "explanation": "Vì hàm số nghịch biến trên khoảng $(1; 4)$, do $2 < 3$ nên $f(2) > f(3)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q7",
  "question": "Cho hàm số $f(x) = x^2 + 1$ (khi $x > 2$) và $f(x) = 3x - 1$ (khi $x \\le 2$). Giá trị của $f(0)$ bằng:",
  "options": [
    "-1",
    "1",
    "0",
    "5"
  ],
  "answer": 0,
  "explanation": "Vì $0 \\le 2$, ta dùng công thức nhánh dưới: $f(0) = 3(0) - 1 = -1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q8",
  "question": "Tập xác định của hàm số $y = \\sqrt{x - 1} + \\sqrt{5 - x}$ là:",
  "options": [
    "D = [1; 5]",
    "D = (1; 5)",
    "D = [1; +∞)",
    "D = (-∞; 5]"
  ],
  "answer": 0,
  "explanation": "Điều kiện: $x - 1 \\ge 0$ và $5 - x \\ge 0 \\iff 1 \\le x \\le 5$. Vậy $D = [1; 5]$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q9",
  "question": "Hình vẽ nào không thể là đồ thị của một hàm số $y = f(x)$?",
  "options": [
    "Đường tròn tâm O bán kính R",
    "Đường thẳng d có độ dốc dương",
    "Đường cong parabol đỉnh quay lên",
    "Đoạn thẳng nằm ngang song song trục Ox"
  ],
  "answer": 0,
  "explanation": "Đường tròn có những đường thẳng đứng cắt tại 2 điểm phân biệt, nghĩa là một giá trị x tương ứng với 2 giá trị y khác nhau, vi phạm định nghĩa hàm số (phép thử đường thẳng đứng)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b15_q10",
  "question": "Cho hàm số $y = \\frac{1}{x}$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "Hàm số nghịch biến trên từng khoảng (-∞; 0) và (0; +∞)",
    "Hàm số nghịch biến trên toàn bộ tập xác định D = R \\ {0}",
    "Hàm số đồng biến trên (0; +∞)",
    "Hàm số đồng biến trên (-∞; 0)"
  ],
  "answer": 0,
  "explanation": "Tính đơn điệu chỉ được kết luận trên từng khoảng riêng biệt, không được kết luận trên tập hợp hợp của hai khoảng (như $\\mathbb{R} \\setminus \\{0\\}$) vì $f(-1) = -1 < f(1) = 1$ dù $-1 < 1$."
}'></div>

---

## 8. Thử thách thực tế: Dự án phân tích hóa đơn tiền nước

Quan sát hóa đơn tiền nước sinh hoạt của gia đình em:
1. Tìm hiểu các bậc thang giá nước sinh hoạt (Ví dụ: 10 mét khối đầu tiên, từ trên 10 đến 20 mét khối, trên 20 mét khối).
2. Thiết lập công thức hàm số phân nhánh $T(x)$ biểu diễn số tiền phải trả theo số mét khối nước $x$ tiêu thụ.
3. Vẽ đồ thị hàm số $T(x)$ và dự báo số tiền nước cần trả nếu gia đình dùng $28\text{ m}^3$ nước trong tháng tới.
