---
title: 'Toán 9 Bài 18: Hàm số y = ax² (a ≠ 0) - Tính chất biến thiên, Đồ thị Parabol & Tương giao đường thẳng'
description: 'Lý thuyết toàn diện Bài 18 Toán 9: Tập xác định, tính đồng biến nghịch biến của hàm số y = ax², đồ thị Parabol đối xứng qua Oy, tương giao Parabol và đường thẳng, widget đồ thị tương tác và 10 câu trắc nghiệm chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Hàm số bậc hai
  - Đồ thị Parabol
  - Biến thiên
  - Tương giao đồ thị
  - Kết nối tri thức
grade: 9
---

# Bài 18. Hàm số $y = ax^2$ ($a \ne 0$)

Khi một cầu thủ sút một quả bóng bổng qua đầu thủ môn vào lưới, khi tia nước từ vòi phun nước công viên bắn lên không trung rồi uốn cong rơi xuống mặt hồ, hay hình ảnh dây cáp chịu lực nâng đỡ mặt cầu treo Cổng Vàng (Golden Gate) kỳ vĩ — tất cả những đường cong mềm mại và chuẩn xác tuyệt đối ấy đều tuân theo cùng một quy luật toán học duy nhất: **Đường cong Parabol** của hàm số $y = ax^2$.

Nếu ở lớp 8 và đầu năm lớp 9, các em đã làm quen với hàm số bậc nhất $y = ax + b$ có đồ thị là một đường thẳng đơn giản, thì bước sang **Toán 9 Tập 2 - Chương VI**, chúng ta sẽ chính thức khám phá một nấc thang mới của Đại số: **Hàm số phi tuyến bậc hai $y = ax^2$ ($a \ne 0$)**.

Đường cong Parabol không chỉ là biểu tượng của vẻ đẹp hình học đối xứng hoàn mỹ, mà còn là trái tim của hàng loạt phát minh công nghệ đỉnh cao: từ chảo thu sóng vệ tinh viễn thông, kính viễn vọng không gian, chóa đèn pha ô tô đến quỹ đạo của vệ tinh nhân tạo!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HÀM SỐ $y = ax^2$ ($a \ne 0$)</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tập xác định & Bản chất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tập xác định: $D = \mathbb{R}$ (xác định với mọi số thực $x$).<br>• $f(-x) = a(-x)^2 = ax^2 = f(x)$ $\implies$ là <strong>hàm số chẵn</strong>.<br>• Nhận trục tung $Oy$ làm trục đối xứng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính chất Biến thiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Nếu $a > 0$:</strong> Nghịch biến khi $x < 0$, đồng biến khi $x > 0$. Đạt <em>GTNN</em> $y = 0$ tại $x = 0$.<br>• <strong>Nếu $a < 0$:</strong> Đồng biến khi $x < 0$, nghịch biến khi $x > 0$. Đạt <em>GTLN</em> $y = 0$ tại $x = 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đồ thị Parabol $(P)$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đỉnh tại gốc tọa độ $O(0; 0)$.<br>• $a > 0$: Bề lõm quay lên trên, $O$ là điểm thấp nhất.<br>• $a < 0$: Bề lõm quay xuống dưới, $O$ là điểm cao nhất.<br>• $|a|$ càng lớn thì parabol càng hẹp (dốc lên nhanh).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tương giao Parabol & Đường thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Xét PT hoành độ: $ax^2 = mx + n \iff ax^2 - mx - n = 0$.<br>• $\Delta > 0$: Cắt nhau tại 2 điểm phân biệt.<br>• $\Delta = 0$: Tiếp xúc nhau tại 1 tiếp điểm duy nhất.<br>• $\Delta < 0$: Không giao nhau.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tập xác định:** Hàm số $y = 3x^2$ xác định với những giá trị nào của $x$?
2. **Điểm thuộc đồ thị:** Điểm $M(2; 12)$ có thuộc đồ thị hàm số $y = 3x^2$ không?
3. **Tính đồng biến:** Với giá trị $x > 0$, hàm số $y = -2x^2$ đồng biến hay nghịch biến?
4. **Giá trị lớn nhất:** Giá trị lớn nhất của hàm số $y = -5x^2$ bằng bao nhiêu và đạt được khi $x$ bằng bao nhiêu?
5. **Điểm đối xứng:** Nếu điểm $A(-3; 9)$ thuộc đồ thị hàm số $y = x^2$ thì điểm đối xứng với $A$ qua trục tung $Oy$ có tọa độ là bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Xác định với **mọi $x \in \mathbb{R}$**.
> 2. Có thuộc (vì thay $x = 2$ vào thì $y = 3 \times 2^2 = 3 \times 4 = 12$).
> 3. Hàm số **nghịch biến** (vì $a = -2 < 0$ và $x > 0$).
> 4. $\text{GTLN} = 0$ khi $x = 0$ (vì với $a = -5 < 0$, $y \le 0$ với mọi $x$).
> 5. Điểm đối xứng qua trục $Oy$ là $A'(3; 9)$.

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm và Tập xác định của Hàm số $y = ax^2$ ($a \ne 0$)

Hàm số $y = ax^2$ (với $a$ là hằng số khác $0$) là dạng đơn giản nhất của hàm số bậc hai.

> [!NOTE]
> **Tính chất đại số căn bản:**
> 1. **Tập xác định:** Hàm số $y = ax^2$ xác định với mọi giá trị $x \in \mathbb{R}$.
> 2. **Tính chất chẵn - lẻ:** 
> Với mọi $x \in \mathbb{R}$, ta có $-x \in \mathbb{R}$ và:
> $$f(-x) = a(-x)^2 = ax^2 = f(x)$$
> Do đó, $y = ax^2$ là một **hàm số chẵn**.
> Đồ thị của hàm số chẵn luôn nhận **trục tung $Oy$ làm trục đối xứng**.

---

### 2. Tính chất Biến thiên của Hàm số $y = ax^2$ ($a \ne 0$)

Sự thay đổi giá trị của $y$ khi $x$ tăng lên phụ thuộc hoàn toàn vào dấu của hệ số $a$:

#### Trường hợp 1: $a > 0$
- Khi $x < 0$: Nếu $x$ tăng thì $x^2$ giảm, do đó $y = ax^2$ giảm $\implies$ Hàm số **nghịch biến**.
- Khi $x > 0$: Nếu $x$ tăng thì $x^2$ tăng, do đó $y = ax^2$ tăng $\implies$ Hàm số **đồng biến**.
- Tại $x = 0$: $y = 0$.
- Vì với mọi $x \ne 0$, ta có $x^2 > 0 \implies y = ax^2 > 0$.
$\implies$ Khi $a > 0$, hàm số đạt **giá trị nhỏ nhất bằng $0$ khi $x = 0$**.

#### Trường hợp 2: $a < 0$
- Khi $x < 0$: Nếu $x$ tăng thì $x^2$ giảm, vì $a < 0$ nên $y = ax^2$ tăng $\implies$ Hàm số **đồng biến**.
- Khi $x > 0$: Nếu $x$ tăng thì $x^2$ tăng, vì $a < 0$ nên $y = ax^2$ giảm $\implies$ Hàm số **nghịch biến**.
- Tại $x = 0$: $y = 0$.
- Vì với mọi $x \ne 0$, ta có $x^2 > 0 \implies y = ax^2 < 0$.
$\implies$ Khi $a < 0$, hàm số đạt **giá trị lớn nhất bằng $0$ khi $x = 0$**.

#### Bảng biến thiên tóm tắt:

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **$y = ax^2$ ($a > 0$)** | $+\infty$ | $\searrow$ (Nghịch biến) | $0$ (Cực tiểu) | $\nearrow$ (Đồng biến) | $+\infty$ |
| **$y = ax^2$ ($a < 0$)** | $-\infty$ | $\nearrow$ (Đồng biến) | $0$ (Cực đại) | $\searrow$ (Nghịch biến) | $-\infty$ |

---

### 3. Đồ thị của Hàm số $y = ax^2$ ($a \ne 0$)

Đồ thị của hàm số $y = ax^2$ ($a \ne 0$) là một đường cong mang tên **Parabol**, ký hiệu là $(P)$.

> [!NOTE]
> **Đặc điểm hình học của Parabol $(P): y = ax^2$:**
> 1. Đi qua gốc tọa độ $O(0; 0)$. Điểm $O$ gọi là **đỉnh** của parabol.
> 2. Nhận trục tung $Oy$ (đường thẳng $x = 0$) làm **trục đối xứng**.
> 3. Hình dáng theo dấu của $a$:
>    - Nếu $a > 0$: Đồ thị nằm hoàn toàn phía trên trục hoành (trừ gốc $O$), bề lõm quay lên phía trên. Điểm $O(0; 0)$ là điểm thấp nhất của đồ thị.
>    - Nếu $a < 0$: Đồ thị nằm hoàn toàn phía dưới trục hoành (trừ gốc $O$), bề lõm quay xuống phía dưới. Điểm $O(0; 0)$ là điểm cao nhất của đồ thị.
> 4. Ảnh hưởng của độ lớn $|a|$: Giá trị $|a|$ càng lớn thì hai nhánh của parabol càng co cụm sát vào trục $Oy$ (parabol càng dốc đứng, "hẹp" lại); giá trị $|a|$ càng nhỏ thì parabol càng mở rộng sang hai bên.

#### Quy trình 3 bước vẽ đồ thị Parabol chuẩn xác:
- **Bước 1 (Lập bảng giá trị):** Chọn ít nhất 5 giá trị của $x$ đối xứng nhau qua số $0$, thông thường là: $x \in \{-2; -1; 0; 1; 2\}$ (hoặc chọn các giá trị chia hết cho mẫu số nếu $a$ là phân số).
- **Bước 2 (Xác định các điểm trên mặt phẳng $Oxy$):** Chấm 5 điểm tương ứng: $A(-2; y_2), B(-1; y_1), O(0; 0), B'(1; y_1), A'(2; y_2)$.
- **Bước 3 (Vẽ đường cong Parabol):** Dùng thước cong (hoặc vẽ tay uốn lượn mềm mại) nối các điểm lại thành một đường cong trơn tru, không gấp khúc tại gốc tọa độ $O$.

---

## II. Mô phỏng Tương tác: Khám phá Đường cong Parabol $y = ax^2$

Hãy trực tiếp kéo thanh trượt hệ số $a$ dưới đây từ số âm sang số dương để tận mắt quan sát sự biến đổi kỳ diệu của Parabol: khi $a$ đổi dấu, đồ thị lật ngược bề lõm; khi $|a|$ tăng giảm, parabol co lại hoặc xòe rộng!

<div class="interactive-parabola-sim" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TRỰC QUAN: ĐỒ THỊ PARABOL $y = ax^2$</h4>
  
  <div style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; align-items: center; margin-top: 16px;">
    <!-- SVG Graph -->
    <div style="flex: 1 1 320px; max-width: 400px; text-align: center;">
      <svg data-interactive-done="true" id="parabolaSvg" viewBox="-200 -200 400 400" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Grid lines -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="-180" y1="-150" x2="180" y2="-150" />
          <line x1="-180" y1="-100" x2="180" y2="-100" />
          <line x1="-180" y1="-50" x2="180" y2="-50" />
          <line x1="-180" y1="50" x2="180" y2="50" />
          <line x1="-180" y1="100" x2="180" y2="100" />
          <line x1="-180" y1="150" x2="180" y2="150" />
          <line x1="-150" y1="-180" x2="-150" y2="180" />
          <line x1="-100" y1="-180" x2="-100" y2="180" />
          <line x1="-50" y1="-180" x2="-50" y2="180" />
          <line x1="50" y1="-180" x2="50" y2="180" />
          <line x1="100" y1="-180" x2="100" y2="180" />
          <line x1="150" y1="-180" x2="150" y2="180" />
        </g>
        <!-- Axes -->
        <line x1="-190" y1="0" x2="190" y2="0" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
        <line x1="0" y1="190" x2="0" y2="-190" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
        <!-- Axis labels -->
        <text x="175" y="-8" font-size="13" font-weight="bold" fill="#475569">x</text>
        <text x="8" y="-175" font-size="13" font-weight="bold" fill="#475569">y</text>
        <text x="-12" y="15" font-size="12" font-weight="bold" fill="#475569">O</text>
        <!-- Dynamic Parabola Curve -->
        <path id="parabolaPath" fill="none" stroke="#2563eb" stroke-width="3" />
        <!-- 5 key points -->
        <circle id="p0" cx="0" cy="0" r="4.5" fill="#dc2626" />
        <circle id="p1" cx="0" cy="0" r="4" fill="#10b981" />
        <circle id="p_1" cx="0" cy="0" r="4" fill="#10b981" />
        <circle id="p2" cx="0" cy="0" r="4" fill="#f59e0b" />
        <circle id="p_2" cx="0" cy="0" r="4" fill="#f59e0b" />
      </svg>
    </div>

    <!-- Controls & Value Table -->
    <div style="flex: 1 1 280px; max-width: 360px;">
      <div style="margin-bottom: 16px;">
        <label style="font-weight: 600; font-size: 0.95em; display: flex; justify-content: space-between;">
          <span>Hệ số $a$:</span>
          <span id="txtA" style="color: #2563eb; font-weight: bold; font-size: 1.1em;">a = 1.0</span>
        </label>
        <input type="range" id="sliderA" min="-2.5" max="2.5" step="0.25" value="1.0" style="width: 100%; cursor: pointer;" />
        <div style="display: flex; justify-content: space-between; font-size: 0.78em; color: #64748b;">
          <span>-2.5 (úp ngược)</span>
          <span>0</span>
          <span>+2.5 (ngửa lên)</span>
        </div>
      </div>

      <!-- Live properties -->
      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 0.88em; line-height: 1.8;">
        <div>• Phương trình: <strong id="txtEq" style="color: #2563eb;">y = 1.0x²</strong></div>
        <div>• Bề lõm: <strong id="txtConcave" style="color: #10b981;">Quay lên trên (a > 0)</strong></div>
        <div>• Điểm cực trị: <strong id="txtExtremum" style="color: #dc2626;">GTNN y = 0 tại x = 0</strong></div>
        <div>• Trục đối xứng: <strong>Trục tung Oy (x = 0)</strong></div>
      </div>

      <!-- 5-Point Table -->
      <table style="width: 100%; margin-top: 14px; border-collapse: collapse; font-size: 0.85em; text-align: center; background: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155;">
            <th style="padding: 6px; border: 1px solid #e2e8f0;">$x$</th>
            <th style="padding: 6px; border: 1px solid #e2e8f0;">-2</th>
            <th style="padding: 6px; border: 1px solid #e2e8f0;">-1</th>
            <th style="padding: 6px; border: 1px solid #e2e8f0;">0</th>
            <th style="padding: 6px; border: 1px solid #e2e8f0;">1</th>
            <th style="padding: 6px; border: 1px solid #e2e8f0;">2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 6px; font-weight: bold; border: 1px solid #e2e8f0;">$y$</td>
            <td id="t_2" style="padding: 6px; border: 1px solid #e2e8f0;">4.0</td>
            <td id="t_1" style="padding: 6px; border: 1px solid #e2e8f0;">1.0</td>
            <td id="t0" style="padding: 6px; border: 1px solid #e2e8f0; font-weight: bold; color: #dc2626;">0</td>
            <td id="t1" style="padding: 6px; border: 1px solid #e2e8f0;">1.0</td>
            <td id="t2" style="padding: 6px; border: 1px solid #e2e8f0;">4.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<script>
(function() {
  const slider = document.getElementById('sliderA');
  if (!slider) return;

  const txtA = document.getElementById('txtA');
  const txtEq = document.getElementById('txtEq');
  const txtConcave = document.getElementById('txtConcave');
  const txtExtremum = document.getElementById('txtExtremum');
  const path = document.getElementById('parabolaPath');

  const p0 = document.getElementById('p0');
  const p1 = document.getElementById('p1');
  const p_1 = document.getElementById('p_1');
  const p2 = document.getElementById('p2');
  const p_2 = document.getElementById('p_2');

  const t_2 = document.getElementById('t_2');
  const t_1 = document.getElementById('t_1');
  const t0 = document.getElementById('t0');
  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');

  const unitX = 50; // 50px = 1 unit on x
  const unitY = 30; // 30px = 1 unit on y

  function update() {
    let a = parseFloat(slider.value);
    if (a === 0) {
      a = 0.25; // avoid a = 0
      slider.value = 0.25;
    }

    txtA.textContent = 'a = ' + a.toFixed(2);
    txtEq.textContent = 'y = ' + (a === 1 ? '' : a === -1 ? '-' : a.toFixed(2)) + 'x²';

    if (a > 0) {
      txtConcave.textContent = 'Quay lên trên (a > 0)';
      txtConcave.style.color = '#10b981';
      txtExtremum.textContent = 'GTNN y = 0 tại x = 0';
      txtExtremum.style.color = '#dc2626';
    } else {
      txtConcave.textContent = 'Quay xuống dưới (a < 0)';
      txtConcave.style.color = '#b45309';
      txtExtremum.textContent = 'GTLN y = 0 tại x = 0';
      txtExtremum.style.color = '#dc2626';
    }

    // Table values
    const y1 = (a * 1).toFixed(2);
    const y2 = (a * 4).toFixed(2);
    t_2.textContent = y2;
    t_1.textContent = y1;
    t1.textContent = y1;
    t2.textContent = y2;

    // SVG path: generate curve from x = -3.5 to 3.5
    let d = '';
    const step = 0.1;
    let first = true;
    for (let x = -3.5; x <= 3.501; x += step) {
      const y = a * x * x;
      const px = x * unitX;
      const py = -y * unitY; // invert y for SVG coordinate system

      if (py >= -195 && py <= 195) {
        if (first) {
          d += `M ${px} ${py} `;
          first = false;
        } else {
          d += `L ${px} ${py} `;
        }
      }
    }
    path.setAttribute('d', d);

    // Update 5 key points
    p0.setAttribute('cx', 0);
    p0.setAttribute('cy', 0);

    p1.setAttribute('cx', 1 * unitX);
    p1.setAttribute('cy', -(a * 1) * unitY);

    p_1.setAttribute('cx', -1 * unitX);
    p_1.setAttribute('cy', -(a * 1) * unitY);

    p2.setAttribute('cx', 2 * unitX);
    p2.setAttribute('cy', -(a * 4) * unitY);

    p_2.setAttribute('cx', -2 * unitX);
    p_2.setAttribute('cy', -(a * 4) * unitY);
  }

  slider.addEventListener('input', update);
  update();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Xét Tính Đồng biến, Nghịch biến & Tìm Cực trị

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Xác định dấu của hệ số $a$:
>    - $a > 0$: Nghịch biến khi $x < 0$, đồng biến khi $x > 0$. GTNN bằng $0$ khi $x = 0$.
>    - $a < 0$: Đồng biến khi $x < 0$, nghịch biến khi $x > 0$. GTLN bằng $0$ khi $x = 0$.
> 2. Đề bài yêu cầu tìm điều kiện của tham số $m$ để hàm số đồng biến/nghịch biến trên một khoảng:
>    - Đồng biến khi $x > 0 \iff a > 0$.
>    - Đồng biến khi $x < 0 \iff a < 0$.
>    - Nghịch biến khi $x > 0 \iff a < 0$.
>    - Nghịch biến khi $x < 0 \iff a > 0$.

#### Bài toán mẫu 1.1:
Cho hàm số $y = (2m - 4)x^2$.
a) Tìm các giá trị của $m$ để hàm số đồng biến khi $x > 0$.
b) Tìm các giá trị của $m$ để hàm số đạt giá trị lớn nhất bằng $0$ tại $x = 0$.

**Lời giải chi tiết:**
Hàm số có hệ số $a = 2m - 4$. Để đây là hàm số bậc hai thì $a \ne 0 \iff 2m - 4 \ne 0 \iff m \ne 2$.

a) Hàm số $y = ax^2$ đồng biến khi $x > 0$ khi và chỉ khi:
$$a > 0 \iff 2m - 4 > 0 \iff 2m > 4 \iff m > 2$$
Vậy với $m > 2$, hàm số đồng biến khi $x > 0$.

b) Hàm số đạt giá trị lớn nhất bằng $0$ tại $x = 0$ khi và chỉ khi đồ thị có bề lõm quay xuống dưới, tức là:
$$a < 0 \iff 2m - 4 < 0 \iff 2m < 4 \iff m < 2$$
Vậy với $m < 2$, hàm số đạt giá trị lớn nhất bằng $0$ tại $x = 0$.

---

### Dạng 2: Điểm Thuộc Đồ thị & Tìm Hệ số $a$

> [!TIP]
> **Phương pháp cốt lõi:**
> - Điểm $M(x_0; y_0)$ thuộc đồ thị $(P): y = ax^2 \iff y_0 = a x_0^2$.
> - Nếu biết điểm $M(x_0; y_0) \in (P)$ ($x_0 \ne 0$), ta tìm được hệ số $a$:
>   $$a = \frac{y_0}{x_0^2}$$
> - Hai điểm đối xứng nhau qua trục $Oy$ có tọa độ dạng $(x_0; y_0)$ và $(-x_0; y_0)$. Nếu một điểm thuộc $(P)$ thì điểm đối xứng cũng luôn thuộc $(P)$.

#### Bài toán mẫu 2.1:
a) Xác định hệ số $a$ biết đồ thị hàm số $y = ax^2$ đi qua điểm $A(-2; 8)$.
b) Với giá trị $a$ vừa tìm được, kiểm tra xem các điểm $B(3; 18)$ và $C(-\frac{1}{2}; 1)$ có thuộc đồ thị hàm số không?

**Lời giải chi tiết:**
a) Vì đồ thị hàm số $y = ax^2$ đi qua điểm $A(-2; 8)$, thay $x = -2$ và $y = 8$ vào công thức:
$$8 = a \cdot (-2)^2 \iff 8 = 4a \implies a = \frac{8}{4} = 2$$
Vậy hàm số có công thức là $y = 2x^2$.

b) Kiểm tra các điểm đối với $(P): y = 2x^2$:
- Với điểm $B(3; 18)$: Thay $x = 3$ vào hàm số:
  $$y = 2 \times 3^2 = 2 \times 9 = 18 = y_B$$
  Suy ra điểm $B(3; 18)$ **thuộc** đồ thị hàm số $y = 2x^2$.
- Với điểm $C(-\frac{1}{2}; 1)$: Thay $x = -\frac{1}{2}$ vào hàm số:
  $$y = 2 \times \left(-\frac{1}{2}\right)^2 = 2 \times \frac{1}{4} = \frac{1}{2} \ne 1 = y_C$$
  Suy ra điểm $C(-\frac{1}{2}; 1)$ **không thuộc** đồ thị hàm số $y = 2x^2$.

---

### Dạng 3: Tương giao giữa Parabol $(P)$ và Đường thẳng $(d)$

> [!TIP]
> **Phương pháp cốt lõi (Trọng tâm tuyệt đối của đề thi vào 10):**
> Cho Parabol $(P): y = ax^2$ ($a \ne 0$) và đường thẳng $(d): y = mx + n$.
> **Bước 1:** Lập phương trình hoành độ giao điểm của $(P)$ và $(d)$:
> $$ax^2 = mx + n \iff ax^2 - mx - n = 0 \quad (*)$$
> **Bước 2:** Tính biệt thức $\Delta = (-m)^2 - 4a(-n) = m^2 + 4an$.
> Số nghiệm của phương trình $(*)$ chính là số giao điểm của $(P)$ và $(d)$:
> - $\Delta > 0 \iff$ Phương trình có 2 nghiệm phân biệt $\iff (d)$ cắt $(P)$ tại **2 điểm phân biệt**.
> - $\Delta = 0 \iff$ Phương trình có nghiệm kép $\iff (d)$ **tiếp xúc** với $(P)$ (đường thẳng $(d)$ là tiếp tuyến của Parabol).
> - $\Delta < 0 \iff$ Phương trình vô nghiệm $\iff (d)$ và $(P)$ **không giao nhau**.
> **Bước 3:** Với mỗi nghiệm $x_i$, tính tung độ tương ứng $y_i = a x_i^2$ để suy ra tọa độ giao điểm $M(x_i; y_i)$.

#### Bài toán mẫu 3.1:
Cho Parabol $(P): y = x^2$ và đường thẳng $(d): y = 2x + 3$.
a) Tìm tọa độ các giao điểm của $(P)$ và $(d)$.
b) Viết phương trình đường thẳng $(d')$ song song với $(d)$ và tiếp xúc với $(P)$.

**Lời giải chi tiết:**
a) Phương trình hoành độ giao điểm của $(P)$ và $(d)$ là:
$$x^2 = 2x + 3 \iff x^2 - 2x - 3 = 0$$
Nhận thấy phương trình có dạng $a - b + c = 1 - (-2) + (-3) = 0$, nên phương trình có hai nghiệm:
$$x_1 = -1 \quad \text{và} \quad x_2 = -\frac{c}{a} = 3$$
- Với $x_1 = -1 \implies y_1 = (-1)^2 = 1 \implies A(-1; 1)$.
- Với $x_2 = 3 \implies y_2 = 3^2 = 9 \implies B(3; 9)$.
Vậy $(d)$ cắt $(P)$ tại hai điểm phân biệt $A(-1; 1)$ và $B(3; 9)$.

b) Vì $(d') \parallel (d)$ nên $(d')$ có phương trình dạng:
$$y = 2x + n \quad (n \ne 3)$$
Phương trình hoành độ giao điểm của $(P)$ và $(d')$ là:
$$x^2 = 2x + n \iff x^2 - 2x - n = 0 \quad (**)$$
Tính $\Delta' = (-1)^2 - 1 \cdot (-n) = 1 + n$.
Để $(d')$ tiếp xúc với $(P)$ thì phương trình $(**)$ phải có nghiệm kép:
$$\Delta' = 0 \iff 1 + n = 0 \iff n = -1 \quad (\text{thỏa mãn } n \ne 3)$$
Khi đó hoành độ tiếp điểm là $x = -\frac{b'}{a} = 1 \implies y = 1^2 = 1$.
Vậy phương trình đường thẳng cần tìm là $(d'): y = 2x - 1$, tiếp xúc với $(P)$ tại điểm $M(1; 1)$.

---

### Dạng 4: Bài toán Thực tế & Cực trị Ứng dụng Parabol

> [!TIP]
> **Phương pháp cốt lõi:**
> Gắn hệ trục tọa độ $Oxy$ thích hợp vào mô hình thực tế:
> - Chọn gốc $O$ tại điểm thấp nhất (hoặc cao nhất) của vòm cầu, cổng vòm, đáy thung lũng để phương trình có dạng chuẩn $y = ax^2$.
> - Tìm tọa độ một điểm biên đã biết kích thước để xác định hệ số $a$.
> - Dùng phương trình parabol để tính các kích thước còn lại (chiều cao, bề rộng).

#### Bài toán mẫu 4.1:
Cổng vòm Trường Đại học Bách khoa Hà Nội có dạng một đường cong Parabol. Biết bề rộng chân cổng tiếp giáp mặt đất là $AB = 8\text{ m}$ và chiều cao từ đỉnh cổng xuống mặt đất là $h = 8\text{ m}$.
Một xe tải chở container hình hộp chữ nhật có bề rộng xe là $3\text{ m}$ muốn đi qua cổng chính giữa. Hỏi chiều cao tối đa của xe container là bao nhiêu mét để có thể lọt qua cổng an toàn?

**Lời giải chi tiết:**

```
           y
           |  Đỉnh O(0; 8)
       ----+----
      /    |    \
     /     |     \
    A------0------B  --> x
   -4             4
```

*Cách chọn hệ trục thuận tiện:*
Chọn gốc tọa độ $O$ tại điểm chính giữa chân cổng trên mặt đất:
- Trục $Ox$ nằm dọc theo mặt đất.
- Trục $Oy$ đi qua đỉnh cao nhất của cổng.
Khi đó đỉnh cổng có tọa độ $(0; 8)$.
Chân cổng có bề rộng $AB = 8\text{ m} \implies$ tọa độ hai chân cổng là $A(-4; 0)$ và $B(4; 0)$.
Parabol có phương trình dạng $y = ax^2 + 8$.
Vì cổng đi qua điểm $B(4; 0)$:
$$0 = a \cdot 4^2 + 8 \iff 16a = -8 \implies a = -\frac{1}{2}$$
Vậy phương trình vòm cổng là:
$$y = -\frac{1}{2}x^2 + 8$$

Xe container rộng $3\text{ m}$ đi chính giữa cổng thì hai mép xe tương ứng với:
$$x = -\frac{3}{2} = -1{,}5\text{ m} \quad \text{và} \quad x = 1{,}5\text{ m}$$
Chiều cao của vòm cổng tại vị trí mép xe ($x = 1{,}5$) là:
$$y = -\frac{1}{2} \times (1{,}5)^2 + 8 = -\frac{1}{2} \times 2{,}25 + 8 = -1{,}125 + 8 = 6{,}875\text{ m}$$
Vậy để xe container đi qua được thì chiều cao của xe phải nhỏ hơn $6{,}875\text{ m}$.

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG ĐƯỜNG CONG PARABOL TRONG ĐỜI SỐNG
 ┌────────────────────────────────────────────────────────┐
 │ 1. Chảo thu sóng vệ tinh viễn thông (Satellite Dish)   │
 │ 2. Cầu treo dây võng hiện đại (Suspension Bridge)      │
 │ 3. Đèn pha ô tô & Đèn pin chiếu xa chùm tia song song  │
 │ 4. Quỹ đạo ném xiên trong Thể thao & Đạn đạo pháo binh │
 │ 5. Bếp năng lượng mặt trời hội tụ nhiệt độ cao         │
 └────────────────────────────────────────────────────────┘
```

### 1. Chảo thu sóng Vệ tinh viễn thông & Kính thiên văn vô tuyến
Đặc tính quang học và hình học kỳ diệu nhất của Parabol là: **Mọi tia sóng song song với trục đối xứng khi chiếu vào mặt gương parabol đều phản xạ hội tụ chính xác tại đúng một điểm duy nhất gọi là TIÊU ĐIỂM (Focus)**.
Nhờ nguyên lý này, các chảo vệ tinh truyền hình K+ hay kính thiên văn vô tuyến FAST khổng lồ (đường kính $500\text{ m}$) chỉ cần đặt đầu thu tín hiệu (LNB) tại đúng tiêu điểm của parabol là gom trọn vẹn toàn bộ năng lượng sóng vô cực kỳ yếu ớt từ vũ trụ sâu thẳm!

### 2. Cáp chịu lực của Cầu treo dây võng (Suspension Bridges)
Trên các cây cầu treo nổi tiếng thế giới như cầu Cổng Vàng (San Francisco), cầu Akashi Kaikyo (Nhật Bản) hay cầu Thuận Phước (Đà Nẵng), hai sợi cáp thép chính khổng lồ treo võng giữa hai trụ tháp không phải là cung tròn mà có dạng chính xác là một **đường Parabol**.
Khi mặt cầu chịu tải trọng phân bố đều theo phương ngang, hình dạng parabol triệt tiêu hoàn toàn ứng suất uốn, biến toàn bộ lực kéo dọc theo sợi cáp truyền thẳng xuống các khối mố neo bê tông khổng lồ ở hai đầu cầu.

### 3. Chóa đèn pha Ô tô và Đèn pin hội tụ siêu sáng
Nếu đảo ngược đường đi của tia sáng: Đặt một bóng đèn LED siêu sáng tại đúng **tiêu điểm của chóa gương phản xạ parabol**, thì toàn bộ các tia sáng phát ra từ bóng đèn sau khi chạm vào mặt gương cong sẽ lập tức biến thành **một chùm tia sáng song song cực mạnh phóng thẳng về phía trước**.
Đó là lý do đèn pha ô tô có thể chiếu xa hàng trăm mét trong đêm tối mà ánh sáng không bị phân tán lãng phí lên bầu trời.

### 4. Quỹ đạo Ném xiên trong Thể thao & Đạn đạo học
Dưới tác dụng của trọng lực Trái Đất (bỏ qua sức cản không khí):
- Phương ngang chuyển động thẳng đều: $x = (v_0 \cos \alpha) t \implies t = \frac{x}{v_0 \cos \alpha}$.
- Phương thẳng đứng rơi tự do: $y = (v_0 \sin \alpha) t - \frac{1}{2}gt^2$.
Kết hợp lại ta được phương trình quỹ đạo:
$$y = (\tan \alpha) x - \frac{g}{2v_0^2 \cos^2 \alpha} x^2$$
Đây chính xác là một hàm số bậc hai có dạng $y = ax^2 + bx$ (Parabol úp ngược). Các cầu thủ bóng rổ, vận động viên ném lao và xạ thủ bắn pháo binh đều vô thức tính toán quỹ đạo parabol này để đưa vật thể chạm đích chính xác từng centimet!

### 5. Bếp năng lượng mặt trời sạch tại vùng cao
Ở các vùng cao thiếu điện và củi đun, người dân sử dụng bếp năng lượng mặt trời hình lòng chảo parabol tráng gương nhôm. Nồi nấu được đặt tại tiêu điểm của parabol. Ánh sáng Mặt Trời chiếu vào lòng chảo hội tụ tại đáy nồi có thể sinh ra nhiệt độ lên tới hơn $300^\circ\text{C}$, đun sôi nước và nấu chín thức ăn trong vòng vài phút mà không thải ra bất kỳ hạt khói bụi độc hại nào.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hàm số nào sau đây là hàm số bậc hai có dạng $y = ax^2$ ($a \\ne 0$)?",
  "options": [
    "A. $y = 2x + 1$",
    "B. $y = -3x^2$",
    "C. $y = \\frac{2}{x^2}$",
    "D. $y = x^3 - 2$"
  ],
  "correct": 1,
  "explanation": "Hàm số $y = -3x^2$ có đúng dạng $y = ax^2$ với hệ số $a = -3 \\ne 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho hàm số $y = -2x^2$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "A. Hàm số đồng biến khi $x > 0$, nghịch biến khi $x < 0$",
    "B. Hàm số đồng biến khi $x < 0$, nghịch biến khi $x > 0$",
    "C. Hàm số luôn đồng biến trên $\\mathbb{R}$",
    "D. Hàm số luôn nghịch biến trên $\\mathbb{R}$"
  ],
  "correct": 1,
  "explanation": "Vì hệ số $a = -2 < 0$ nên hàm số đồng biến khi $x < 0$ và nghịch biến khi $x > 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đồ thị hàm số $y = ax^2$ ($a \\ne 0$) luôn có trục đối xứng là:",
  "options": [
    "A. Trục hoành $Ox$",
    "B. Đường thẳng $y = x$",
    "C. Trục tung $Oy$",
    "D. Gốc tọa độ $O$"
  ],
  "correct": 2,
  "explanation": "Đồ thị Parabol $y = ax^2$ là hàm số chẵn nên luôn nhận trục tung $Oy$ (đường thẳng $x = 0$) làm trục đối xứng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Đồ thị của hàm số $y = 4x^2$ đi qua điểm nào sau đây?",
  "options": [
    "A. $M(1; 2)$",
    "B. $N(-1; -4)$",
    "C. $P(-2; 16)$",
    "D. $Q(2; 8)$"
  ],
  "correct": 2,
  "explanation": "Thay tọa độ điểm $P(-2; 16)$ vào hàm số: $y = 4 \\times (-2)^2 = 4 \\times 4 = 16 = y_P$. Vậy đồ thị đi qua điểm $P$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Biết đồ thị hàm số $y = ax^2$ đi qua điểm $A(-3; 18)$. Hệ số $a$ bằng:",
  "options": [
    "A. 2",
    "B. -2",
    "C. 6",
    "D. -6"
  ],
  "correct": 0,
  "explanation": "Thay $x = -3$ và $y = 18$ vào: $18 = a \\cdot (-3)^2 \\iff 18 = 9a \\implies a = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Hàm số $y = (m - 3)x^2$ đồng biến khi $x > 0$ khi và chỉ khi:",
  "options": [
    "A. $m < 3$",
    "B. $m > 3$",
    "C. $m \\ge 3$",
    "D. $m \\ne 3$"
  ],
  "correct": 1,
  "explanation": "Hàm số đồng biến khi $x > 0$ khi và chỉ khi hệ số $a > 0 \\iff m - 3 > 0 \\iff m > 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giá trị nhỏ nhất của hàm số $y = 5x^2$ là:",
  "options": [
    "A. Không có giá trị nhỏ nhất",
    "B. 5",
    "C. 0",
    "D. -5"
  ],
  "correct": 2,
  "explanation": "Vì $a = 5 > 0$ nên $y = 5x^2 \\ge 0$ với mọi $x$. Do đó giá trị nhỏ nhất của hàm số bằng $0$ đạt được tại $x = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Số giao điểm của Parabol $(P): y = 2x^2$ và đường thẳng $(d): y = -3$ là:",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "correct": 0,
  "explanation": "Phương trình hoành độ giao điểm: $2x^2 = -3 \\iff x^2 = -1{,}5$ (vô nghiệm). Vậy $(P)$ và $(d)$ không có giao điểm nào (0 giao điểm)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tọa độ giao điểm của Parabol $(P): y = x^2$ và đường thẳng $(d): y = x + 2$ là:",
  "options": [
    "A. $(1; 1)$ và $(2; 4)$",
    "B. $(-1; 1)$ và $(2; 4)$",
    "C. $(-1; 1)$ và $(-2; 4)$",
    "D. $(2; 4)$ và $(0; 2)$"
  ],
  "correct": 1,
  "explanation": "Phương trình hoành độ: $x^2 = x + 2 \\iff x^2 - x - 2 = 0 \\iff (x + 1)(x - 2) = 0 \\implies x_1 = -1 (y_1 = 1)$ và $x_2 = 2 (y_2 = 4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho Parabol $(P): y = ax^2$ ($a \\ne 0$). Nếu điểm $M(x_0; y_0)$ thuộc $(P)$ thì điểm nào sau đây cũng chắc chắn thuộc $(P)$?",
  "options": [
    "A. $(-x_0; -y_0)$",
    "B. $(x_0; -y_0)$",
    "C. $(-x_0; y_0)$",
    "D. $(y_0; x_0)$"
  ],
  "correct": 2,
  "explanation": "Vì Parabol nhận trục $Oy$ làm trục đối xứng nên điểm đối xứng của $M(x_0; y_0)$ qua $Oy$ là $(-x_0; y_0)$ cũng luôn thuộc đồ thị."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Thiết kế Chảo Vệ Tinh Parabol Thu Sóng
Một kỹ sư viễn thông cần thiết kế mặt cắt parabol của một chảo thu sóng vệ tinh.
Miệng chảo có đường kính là $AB = 120\text{ cm}$ và độ sâu lòng chảo từ tâm đáy đến mặt phẳng miệng chảo là $h = 30\text{ cm}$.
1. Chọn hệ trục tọa độ $Oxy$ với gốc $O$ tại đáy chảo, trục $Oy$ là trục đối xứng của chảo. Hãy viết phương trình Parabol của mặt cắt chảo thu sóng.
2. Tiêu điểm của parabol $y = ax^2$ nằm tại tọa độ $F\left(0; \frac{1}{4a}\right)$. Hãy tính khoảng cách từ đáy chảo $O$ đến bộ thu sóng LNB (đặt tại tiêu điểm $F$) để chảo thu được tín hiệu mạnh nhất.

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Chọn hệ trục tọa độ $Oxy$ với đỉnh parabol tại gốc $O(0; 0)$.
> Miệng chảo có đường kính $AB = 120\text{ cm} \implies$ mép chảo có hoành độ $x_B = \frac{120}{2} = 60\text{ cm}$.
> Chiều sâu $h = 30\text{ cm} \implies$ tung độ mép chảo là $y_B = 30\text{ cm}$.
> Điểm $B(60; 30)$ thuộc parabol $(P): y = ax^2$:
> $$30 = a \cdot 60^2 = 3600a \implies a = \frac{30}{3600} = \frac{1}{120}$$
> Phương trình parabol của mặt cắt chảo là:
> $$y = \frac{1}{120}x^2$$
> 
> 2. Vị trí đặt bộ thu sóng LNB tại tiêu điểm $F\left(0; \frac{1}{4a}\right)$:
> Khoảng cách từ đáy chảo đến tiêu điểm là:
> $$OF = \frac{1}{4a} = \frac{1}{4 \times \frac{1}{120}} = \frac{1}{\frac{1}{30}} = 30\text{ cm}$$
> Như vậy, bộ thu sóng LNB phải được đặt cách đáy chảo đúng $30\text{ cm}$ (nằm ngay trên mặt phẳng miệng chảo)!

---

### Bài tập Tự luyện

**Bài 1:** Cho hàm số $y = -\frac{1}{2}x^2$.
a) Lập bảng giá trị của hàm số với $x \in \{-4; -2; 0; 2; 4\}$ và vẽ đồ thị Parabol $(P)$.
b) Các điểm sau có thuộc $(P)$ không: $A(2; -2)$, $B(-6; -18)$, $C(3; -\frac{9}{4})$?
c) Tìm các điểm trên $(P)$ có tung độ bằng $-8$.

**Bài 2:** Cho Parabol $(P): y = ax^2$.
a) Tìm $a$ biết $(P)$ đi qua điểm $M(\sqrt{2}; 4)$.
b) Tìm tọa độ các giao điểm của $(P)$ vừa tìm được với đường thẳng $(d): y = 2x + 4$.

**Bài 3:** Cho Parabol $(P): y = \frac{1}{2}x^2$ và đường thẳng $(d): y = mx - m + 2$.
a) Chứng minh rằng với mọi giá trị của $m$, đường thẳng $(d)$ luôn đi qua một điểm cố định $I$. Điểm $I$ có thuộc $(P)$ không?
b) Tìm $m$ để $(d)$ tiếp xúc với $(P)$. Tìm tọa độ tiếp điểm tương ứng.
