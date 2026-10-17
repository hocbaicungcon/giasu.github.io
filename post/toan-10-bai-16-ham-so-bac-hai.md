---
title: 'Toán 10 Bài 16: Hàm số bậc hai - Lý thuyết, Đồ thị Parabol, Widget tương tác & Bài tập'
description: 'Làm chủ lý thuyết Hàm số bậc hai Toán 10: Tọa độ đỉnh, trục đối xứng, bảng biến thiên, cách vẽ parabol, bài toán tìm cực trị tối ưu hóa thực tế, widget tương tác parabol động và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hàm số 10
  - Hàm số bậc hai
  - Parabol
  - Tọa độ đỉnh
  - Cực trị hàm số
  - Kết nối tri thức
grade: 10
---

# Bài 16. Hàm số bậc hai

Hình dáng của những chiếc cầu treo dây võng kì vĩ, vòi phun nước tại các quảng trường, chảo thu sóng vệ tinh viễn thông hay đường bay của một quả bóng rổ chuẩn xác đều mang chung một đường cong toán học tuyệt mỹ: **Parabol** — đồ thị của **hàm số bậc hai**. Trong bài học này, chúng ta sẽ khám phá toàn diện từ cấu trúc đại số đến các bài toán tối ưu hóa doanh thu và cực trị thực tế.

---

## 1. Sơ đồ tư duy (Mindmap) Hàm số bậc hai

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Dạng tổng quát & Đỉnh</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $y = ax^2 + bx + c$ ($a \ne 0$).<br>
      • Đỉnh $I\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$.<br>
      • Trục đối xứng: đường thẳng $x = -\frac{b}{2a}$.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Chiều bề lõm ($a$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>$a > 0$:</strong> Bề lõm quay lên trên $\cup$; đỉnh $I$ là điểm <em>thấp nhất</em> (giá trị nhỏ nhất).<br>
      • <strong>$a < 0$:</strong> Bề lõm quay xuống dưới $\cap$; đỉnh $I$ là điểm <em>cao nhất</em> (giá trị lớn nhất).
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Sự biến thiên</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Nếu $a > 0$: nghịch biến trên $\left(-\infty; -\frac{b}{2a}\right)$, đồng biến trên $\left(-\frac{b}{2a}; +\infty\right)$.<br>
      • Nếu $a < 0$: đồng biến trên $\left(-\infty; -\frac{b}{2a}\right)$, nghịch biến trên $\left(-\frac{b}{2a}; +\infty\right)$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Ứng dụng tối ưu hóa</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Tìm diện tích lớn nhất khi giới hạn chu vi.<br>
      • Tìm mức giá bán tối ưu để đạt lợi nhuận cực đại.<br>
      • Xác định tầm cao và tầm xa của vật ném trong vật lí.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo tính nhẩm đỉnh

1. **Hàm số $y = 2x^2 - 4x + 5$ có hoành độ đỉnh bằng bao nhiêu?**  
   *Mẹo:* $x_I = -\frac{b}{2a} = -\frac{-4}{2(2)} = 1$.
2. **Khi đã biết $x_I = 1$, cách nhanh nhất để tìm tung độ đỉnh $y_I$ là gì?**  
   *Mẹo:* Thay trực tiếp $x = 1$ vào hàm số: $y_I = 2(1)^2 - 4(1) + 5 = 3 \implies I(1; 3)$ (nhanh hơn nhiều so với tính $-\frac{\Delta}{4a}$).
3. **Đồ thị hàm số $y = -x^2 + 6x$ có bề lõm quay lên hay quay xuống?**  
   *Đáp án:* Vì $a = -1 < 0$ nên bề lõm quay xuống dưới.
4. **Hàm số $y = x^2 - 6x + 8$ cắt trục tung $Oy$ tại điểm nào?**  
   *Đáp án:* Cho $x = 0 \implies y = c = 8$, điểm cắt là $(0; 8)$.
5. **Đồ thị của hàm số $y = ax^2 + bx + c$ luôn có trục đối xứng là đường thẳng nào?**  
   *Đáp án:* Đường thẳng đứng $x = -\frac{b}{2a}$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Định nghĩa hàm số bậc hai

> [!NOTE]
> **Hàm số bậc hai** là hàm số được cho bởi công thức:
> $$y = ax^2 + bx + c$$
> Trong đó $x$ là biến số; $a, b, c$ là các hằng số thực và **$a \ne 0$**.
> - Tập xác định của hàm số bậc hai luôn là **$D = \mathbb{R}$**.

### 3.2. Đồ thị hàm số bậc hai (Đường Parabol)

Đồ thị hàm số $y = ax^2 + bx + c$ ($a \ne 0$) là một đường cong gọi là **parabol** ($P$) có các đặc trưng cơ bản:

> [!IMPORTANT]
> 1. **Đỉnh của parabol:** Là điểm $I\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$ với $\Delta = b^2 - 4ac$.
> 2. **Trục đối xứng:** Là đường thẳng $x = -\frac{b}{2a}$ (đi qua đỉnh $I$ và song song hoặc trùng với trục $Oy$).
> 3. **Hướng bề lõm:**
>    - Nếu $a > 0$: Bề lõm quay lên trên $\cup$.
>    - Nếu $a < 0$: Bề lõm quay xuống dưới $\cap$.
> 4. **Giao điểm với các trục tọa độ:**
>    - Cắt trục tung $Oy$ tại điểm $(0; c)$.
>    - Cắt trục hoành $Ox$: Số giao điểm bằng số nghiệm của phương trình $ax^2 + bx + c = 0$ (2 nghiệm phân biệt $\iff \Delta > 0$; tiếp xúc $\iff \Delta = 0$; không giao nhau $\iff \Delta < 0$).

### 3.3. Bảng biến thiên và sự biến thiên

> [!NOTE]
> - **Trường hợp $a > 0$:**
>   - Hàm số nghịch biến trên khoảng $\left(-\infty; -\frac{b}{2a}\right)$.
>   - Hàm số đồng biến trên khoảng $\left(-\frac{b}{2a}; +\infty\right)$.
>   - Giá trị nhỏ nhất của hàm số là $y_{min} = -\frac{\Delta}{4a}$, đạt được tại $x = -\frac{b}{2a}$.
>
> - **Trường hợp $a < 0$:**
>   - Hàm số đồng biến trên khoảng $\left(-\infty; -\frac{b}{2a}\right)$.
>   - Hàm số nghịch biến trên khoảng $\left(-\frac{b}{2a}; +\infty\right)$.
>   - Giá trị lớn nhất của hàm số là $y_{max} = -\frac{\Delta}{4a}$, đạt được tại $x = -\frac{b}{2a}$.

---

## 4. Widget tương tác: Phòng Thí Nghiệm Đồ Thị Parabol

Kéo các thanh trượt $a, b, c$ để quan sát đồ thị Parabol biến đổi hình dạng tức thì, cùng sự dịch chuyển của đỉnh $I$ và trục đối xứng:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">⚡ Thí Nghiệm Parabol Biến Thiên $y = ax^2 + bx + c$</h3>
    <span style="font-size: 0.85rem; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Mô phỏng thời gian thực</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 220px; gap: 16px;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center;">
      <svg data-interactive-done="true" id="parabolSvg" viewBox="0 0 360 280" style="width: 100%; max-width: 400px; height: auto;">
        <!-- Grid -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="20" y1="40" x2="340" y2="40" /><line x1="20" y1="90" x2="340" y2="90" />
          <line x1="20" y1="140" x2="340" y2="140" /><line x1="20" y1="190" x2="340" y2="190" />
          <line x1="20" y1="240" x2="340" y2="240" />
          <line x1="60" y1="20" x2="60" y2="260" /><line x1="120" y1="20" x2="120" y2="260" />
          <line x1="180" y1="20" x2="180" y2="260" /><line x1="240" y1="20" x2="240" y2="260" />
          <line x1="300" y1="20" x2="300" y2="260" />
        </g>
        <!-- Axes -->
        <line x1="10" y1="140" x2="350" y2="140" stroke="#94a3b8" stroke-width="1.8" />
        <line x1="180" y1="270" x2="180" y2="10" stroke="#94a3b8" stroke-width="1.8" />
        <text x="345" y="135" font-size="12" fill="#64748b" font-weight="bold">x</text>
        <text x="185" y="18" font-size="12" fill="#64748b" font-weight="bold">y</text>
        <!-- Symmetry axis line -->
        <line id="symAxis" x1="180" y1="10" x2="180" y2="270" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" />
        <!-- Parabol path -->
        <path id="pPath" d="" fill="none" stroke="#2563eb" stroke-width="2.5" />
        <!-- Vertex Point -->
        <circle id="vPoint" cx="180" cy="140" r="5" fill="#dc2626" />
        <text id="vLabel" x="188" y="135" font-size="11" fill="#dc2626" font-weight="bold">I</text>
      </svg>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 0.88rem;">
      <div style="margin-bottom: 12px;">
        <label style="display: flex; justify-content: space-between; font-weight: 600; color: #334155;">
          <span>Hệ số a:</span><span id="lblA">1.0</span>
        </label>
        <input type="range" id="rngA" min="-2.5" max="2.5" step="0.2" value="1.0" style="width: 100%;" />
      </div>
      <div style="margin-bottom: 12px;">
        <label style="display: flex; justify-content: space-between; font-weight: 600; color: #334155;">
          <span>Hệ số b:</span><span id="lblB">-2.0</span>
        </label>
        <input type="range" id="rngB" min="-6" max="6" step="0.5" value="-2.0" style="width: 100%;" />
      </div>
      <div style="margin-bottom: 16px;">
        <label style="display: flex; justify-content: space-between; font-weight: 600; color: #334155;">
          <span>Hệ số c:</span><span id="lblC">0.0</span>
        </label>
        <input type="range" id="rngC" min="-5" max="5" step="0.5" value="0.0" style="width: 100%;" />
      </div>

      <div style="background: #f8fafc; border-radius: 6px; padding: 10px; border: 1px solid #e2e8f0;">
        <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;" id="statEq">y = 1x² - 2x</div>
        <div style="color: #dc2626; font-weight: 600;" id="statVertex">Đỉnh I(1.0; -1.0)</div>
        <div style="color: #d97706;" id="statAxis">Trục đ/x: x = 1.0</div>
      </div>
    </div>
  </div>
</div>

<script>
(() => {
  const rngA = document.getElementById('rngA');
  const rngB = document.getElementById('rngB');
  const rngC = document.getElementById('rngC');
  const lblA = document.getElementById('lblA');
  const lblB = document.getElementById('lblB');
  const lblC = document.getElementById('lblC');
  const pPath = document.getElementById('pPath');
  const vPoint = document.getElementById('vPoint');
  const vLabel = document.getElementById('vLabel');
  const symAxis = document.getElementById('symAxis');
  const statEq = document.getElementById('statEq');
  const statVertex = document.getElementById('statVertex');
  const statAxis = document.getElementById('statAxis');

  const ox = 180, oy = 140, scale = 22;

  function toScreen(x, y) {
    return [ox + x * scale, oy - y * scale];
  }

  function update() {
    let a = parseFloat(rngA.value);
    if (a === 0) a = 0.1; // avoid zero
    const b = parseFloat(rngB.value);
    const c = parseFloat(rngC.value);

    lblA.textContent = a.toFixed(1);
    lblB.textContent = b.toFixed(1);
    lblC.textContent = c.toFixed(1);

    // Vertex
    const xv = -b / (2 * a);
    const yv = a * xv * xv + b * xv + c;
    const [svx, svy] = toScreen(xv, yv);

    vPoint.setAttribute('cx', svx);
    vPoint.setAttribute('cy', svy);
    vLabel.setAttribute('x', svx + 8);
    vLabel.setAttribute('y', svy - 6);

    symAxis.setAttribute('x1', svx);
    symAxis.setAttribute('x2', svx);

    // Draw curve
    const pts = [];
    for (let x = -8; x <= 8; x += 0.1) {
      const y = a * x * x + b * x + c;
      if (y >= -7 && y <= 7) {
        const [sx, sy] = toScreen(x, y);
        pts.push(sx.toFixed(1) + ',' + sy.toFixed(1));
      }
    }
    if (pts.length > 1) {
      pPath.setAttribute('d', 'M ' + pts.join(' L '));
    }

    statEq.textContent = 'y = ' + a.toFixed(1) + 'x² ' + (b >= 0 ? '+ ' : '- ') + Math.abs(b).toFixed(1) + 'x ' + (c >= 0 ? '+ ' : '- ') + Math.abs(c).toFixed(1);
    statVertex.textContent = 'Đỉnh I(' + xv.toFixed(2) + '; ' + yv.toFixed(2) + ')';
    statAxis.textContent = 'Trục đ/x: x = ' + xv.toFixed(2);
  }

  rngA.addEventListener('input', update);
  rngB.addEventListener('input', update);
  rngC.addEventListener('input', update);
  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Xác định tọa độ đỉnh, trục đối xứng và vẽ parabol

#### Phương pháp giải:
Cho parabol $(P): y = ax^2 + bx + c$:
1. Tọa độ đỉnh $I(x_I; y_I)$ với $x_I = -\frac{b}{2a}$, $y_I = f(x_I)$.
2. Trục đối xứng: $x = -\frac{b}{2a}$.
3. Lập bảng 5 điểm đặc trưng (đỉnh $I$ và 2 cặp điểm đối xứng qua trục) để vẽ chính xác.

#### Bài toán 1
Cho hàm số $y = -x^2 + 4x - 3$.
1. Tìm tọa độ đỉnh và phương trình trục đối xứng của đồ thị hàm số.
2. Lập bảng biến thiên và chỉ ra các khoảng đồng biến, nghịch biến của hàm số.

#### Lời giải:
1. Các hệ số: $a = -1, b = 4, c = -3$.
   - Hoành độ đỉnh: $x_I = -\frac{b}{2a} = -\frac{4}{2(-1)} = 2$.
   - Tung độ đỉnh: $y_I = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1$.
   Vậy tọa độ đỉnh là $I(2; 1)$.
   - Trục đối xứng là đường thẳng $x = 2$.
2. Vì $a = -1 < 0$, parabol quay bề lõm xuống dưới.
   - Hàm số **đồng biến** trên khoảng $(-\infty; 2)$.
   - Hàm số **nghịch biến** trên khoảng $(2; +\infty)$.
   - Giá trị lớn nhất của hàm số là $y_{max} = 1$ khi $x = 2$.

---

### Dạng 2: Xác định hàm số bậc hai khi biết các yếu tố hình học

#### Phương pháp giải:
Gọi $(P): y = ax^2 + bx + c$ ($a \ne 0$). Thiết lập hệ phương trình gồm 3 ẩn số $a, b, c$ dựa trên các giả thiết:
- Đi qua điểm $M(x_0; y_0) \implies ax_0^2 + bx_0 + c = y_0$.
- Có đỉnh $I(x_I; y_I) \implies -\frac{b}{2a} = x_I$ và $ax_I^2 + bx_I + c = y_I$.
- Có trục đối xứng $x = x_0 \implies -\frac{b}{2a} = x_0$.

#### Bài toán 2
Xác định hàm số bậc hai $y = ax^2 + bx + c$ biết rằng đồ thị của nó đi qua điểm $A(0; -1)$ và có đỉnh $I(1; -3)$.

#### Lời giải:
1. Đồ thị đi qua điểm $A(0; -1) \implies a(0)^2 + b(0) + c = -1 \implies c = -1$.
2. Đỉnh $I(1; -3)$ có hoành độ $x_I = 1$:
   $$-\frac{b}{2a} = 1 \iff b = -2a \iff 2a + b = 0 \quad (1)$$
3. Đồ thị đi qua đỉnh $I(1; -3)$:
   $$a(1)^2 + b(1) + c = -3 \iff a + b - 1 = -3 \iff a + b = -2 \quad (2)$$
4. Thay $b = -2a$ vào (2):
   $$a + (-2a) = -2 \iff -a = -2 \iff a = 2 \quad (\text{thỏa mãn } a \ne 0)$$
   Suy ra $b = -2(2) = -4$.

**Kết luận:** Hàm số bậc hai cần tìm là $y = 2x^2 - 4x - 1$.

---

### Dạng 3: Tìm giá trị lớn nhất, giá trị nhỏ nhất trên một đoạn $[p; q]$

#### Phương pháp giải:
Để tìm GTLN, GTNN của $y = f(x) = ax^2 + bx + c$ trên đoạn $[p; q]$:
1. Tính hoành độ đỉnh $x_I = -\frac{b}{2a}$.
2. Nếu $x_I \in [p; q]$, tính 3 giá trị: $f(p), f(q)$ và $f(x_I)$.
3. Nếu $x_I \notin [p; q]$, chỉ cần tính 2 giá trị tại hai đầu mút: $f(p)$ và $f(q)$.
4. Kết luận $\max$ và $\min$ trong các giá trị vừa tính.

#### Bài toán 3
Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^2 - 4x + 5$ trên đoạn $[0; 3]$.

#### Lời giải:
1. Hoành độ đỉnh: $x_I = -\frac{-4}{2(1)} = 2$.
2. Nhận thấy $x_I = 2 \in [0; 3]$.
3. Ta tính các giá trị:
   - $f(0) = 0^2 - 4(0) + 5 = 5$.
   - $f(3) = 3^2 - 4(3) + 5 = 9 - 12 + 5 = 2$.
   - $f(x_I) = f(2) = 2^2 - 4(2) + 5 = 4 - 8 + 5 = 1$.
4. So sánh các giá trị:
   - $\min_{[0; 3]} f(x) = f(2) = 1$.
   - $\max_{[0; 3]} f(x) = f(0) = 5$.

---

### Dạng 4: Bài toán tối ưu hóa thực tế

#### Phương pháp giải:
1. Thiết lập biểu thức đại lượng cần tối ưu (diện tích, doanh thu, lợi nhuận) thành một hàm số bậc hai theo biến $x$.
2. Tìm đỉnh của parabol để kết luận giá trị tối ưu.

#### Bài toán 4
Một người nông dân có $60\text{ m}$ lưới rào muốn rào một khu đất hình chữ nhật giáp với một bờ tường thẳng (bờ tường không cần rào lưới). Hỏi người đó phải chọn kích thước các cạnh như thế nào để khu đất có diện tích lớn nhất? Tính diện tích lớn nhất đó.

#### Lời giải:
1. Gọi chiều rộng của khu đất (cạnh vuông góc với bờ tường) là $x$ ($\text{m}$, điều kiện: $0 < x < 30$).
   - Vì khu đất có 2 cạnh chiều rộng và 1 cạnh chiều dài giáp lưới rào:
     $$\text{Chiều dài} = 60 - 2x \quad (\text{m})$$
2. Diện tích khu đất rào được là hàm số theo $x$:
   $$S(x) = x(60 - 2x) = -2x^2 + 60x \quad (\text{m}^2)$$
3. Hàm số $S(x)$ là hàm số bậc hai có các hệ số $a = -2 < 0, b = 60, c = 0$.
   Đồ thị là parabol có bề lõm quay xuống dưới, đạt giá trị lớn nhất tại đỉnh:
   $$x = -\frac{b}{2a} = -\frac{60}{2(-2)} = 15\text{ m} \quad (\text{thỏa mãn } 0 < x < 30)$$
   Khi đó chiều dài khu đất là $60 - 2(15) = 30\text{ m}$.
4. Diện tích lớn nhất đạt được là:
   $$S_{max} = -2(15)^2 + 60(15) = -450 + 900 = 450\text{ m}^2$$

**Kết luận:** Để diện tích lớn nhất, cần rào khu đất có chiều rộng $15\text{ m}$ và chiều dài $30\text{ m}$. Diện tích cực đại là $450\text{ m}^2$.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Cầu treo dây võng & Cầu vòm Parabol:** Cáp chủ của cầu treo (như cầu Cổng Vàng San Francisco hay cầu Thuận Phước Đà Nẵng) khi chịu tải phân bố đều uốn thành đường parabol hoàn hảo, giúp phân tán lực căng về hai trụ tháp chính.
2. **Chảo anten vệ tinh & Kính thiên văn phản xạ:** Gương phản xạ hình paraboloid có đặc tính quang học kì diệu: Mọi tia sóng song song chiếu tới đều hội tụ chính xác tại tiêu điểm $F$, giúp khuếch đại tín hiệu thu được từ các thiên hà xa xôi lên hàng triệu lần.
3. **Quỹ đạo đạn đạo & Thể thao đỉnh cao:** Trong cơ học cổ điển, quỹ đạo bay của quả bóng đá, bóng rổ hoặc viên đạn pháo (bỏ qua sức cản không khí) là đường parabol $y = -\frac{g}{2v_0^2\cos^2\alpha}x^2 + (\tan\alpha)x$.
4. **Kinh tế học & Tối ưu hóa doanh thu:** Khi giá bán sản phẩm tăng thì lượng tiêu thụ giảm theo quy luật hàm bậc nhất $Q(p) = -kp + m$. Doanh thu $R(p) = p \cdot Q(p) = -kp^2 + mp$ là hàm số bậc hai, giúp doanh nghiệp định giá tối ưu tại đỉnh parabol.
5. **Gương đèn pha ô tô & Đèn pin LED:** Đặt bóng đèn tại tiêu điểm của chảo parabol, chùm sáng phát ra sẽ phản xạ thành chùm tia song song thẳng tắp chiếu xa hàng trăm mét trong đêm tối.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q1",
  "question": "Tọa độ đỉnh $I$ của parabol $y = x^2 - 6x + 5$ là:",
  "options": [
    "I(3; -4)",
    "I(-3; 32)",
    "I(3; 4)",
    "I(6; 5)"
  ],
  "answer": 0,
  "explanation": "$x_I = -\\frac{-6}{2(1)} = 3$. Tung độ $y_I = 3^2 - 6(3) + 5 = 9 - 18 + 5 = -4$. Vậy $I(3; -4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q2",
  "question": "Trục đối xứng của parabol $y = -2x^2 + 8x - 1$ là đường thẳng:",
  "options": [
    "x = 2",
    "x = -2",
    "x = 4",
    "y = 7"
  ],
  "answer": 0,
  "explanation": "Trục đối xứng là $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q3",
  "question": "Hàm số nào sau đây ĐỒNG BIẾN trên khoảng $(2; +\\infty)$?",
  "options": [
    "$y = x^2 - 4x + 1$",
    "$y = -x^2 + 4x + 1$",
    "$y = -2x^2 + 8x$",
    "$y = x^2 - 6x + 2$"
  ],
  "answer": 0,
  "explanation": "Hàm $y = x^2 - 4x + 1$ có $a = 1 > 0$ và hoành độ đỉnh $x_I = -\\frac{-4}{2} = 2$, do đó đồng biến trên $(2; +\\infty)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q4",
  "question": "Giá trị nhỏ nhất của hàm số $y = 2x^2 - 8x + 11$ bằng:",
  "options": [
    "3",
    "11",
    "-3",
    "2"
  ],
  "answer": 0,
  "explanation": "Vì $a = 2 > 0$, hàm số đạt giá trị nhỏ nhất tại đỉnh $x = -\\frac{-8}{2(2)} = 2$. $y_{min} = 2(2^2) - 8(2) + 11 = 8 - 16 + 11 = 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q5",
  "question": "Giá trị lớn nhất của hàm số $y = -x^2 + 2x + 7$ bằng:",
  "options": [
    "8",
    "7",
    "1",
    "9"
  ],
  "answer": 0,
  "explanation": "Vì $a = -1 < 0$, hàm số đạt cực đại tại $x = -\\frac{2}{2(-1)} = 1$. $y_{max} = -(1)^2 + 2(1) + 7 = 8$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q6",
  "question": "Cho parabol $(P): y = ax^2 + bx + 2$ đi qua điểm $M(1; 5)$ và có trục đối xứng $x = -1$. Giá trị của $a + b$ bằng:",
  "options": [
    "3",
    "-1",
    "5",
    "1"
  ],
  "answer": 0,
  "explanation": "Vì $(P)$ đi qua $M(1; 5) \\implies a(1)^2 + b(1) + 2 = 5 \\implies a + b = 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q7",
  "question": "Parabol $y = x^2 - 4x + 3$ cắt trục hoành tại hai điểm phân biệt có hoành độ là:",
  "options": [
    "x = 1 và x = 3",
    "x = -1 và x = -3",
    "x = 2 và x = 3",
    "x = 0 và x = 3"
  ],
  "answer": 0,
  "explanation": "Giải phương trình $x^2 - 4x + 3 = 0 \\iff (x - 1)(x - 3) = 0 \\iff x = 1$ hoặc $x = 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q8",
  "question": "Cho hàm số $y = x^2 - 2x + 3$. Giá trị lớn nhất của hàm số trên đoạn $[0; 3]$ bằng:",
  "options": [
    "6",
    "3",
    "2",
    "11"
  ],
  "answer": 0,
  "explanation": "Đỉnh $x_I = 1 \\in [0; 3]$. Ta có $f(0) = 3, f(1) = 2, f(3) = 3^2 - 2(3) + 3 = 6$. Vậy giá trị lớn nhất là 6 (tại $x = 3$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q9",
  "question": "Đồ thị hàm số $y = ax^2 + bx + c$ có hình dạng bề lõm quay xuống và đỉnh nằm ở góc phần tư thứ nhất của hệ tọa độ $Oxy$. Dấu của $a$ và tung độ đỉnh $y_I$ là:",
  "options": [
    "a < 0 và y_I > 0",
    "a > 0 và y_I > 0",
    "a < 0 và y_I < 0",
    "a > 0 và y_I < 0"
  ],
  "answer": 0,
  "explanation": "Bề lõm quay xuống $\\implies a < 0$. Đỉnh ở góc phần tư thứ nhất $\\implies x_I > 0$ và $y_I > 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b16_q10",
  "question": "Một vật được bắn lên cao từ mặt đất theo phương thẳng đứng với vận tốc đầu $v_0 = 20\\text{ m/s}$. Bỏ qua sức cản không khí, độ cao $h$ (mét) theo thời gian $t$ (giây) là $h(t) = 20t - 5t^2$. Độ cao cực đại mà vật đạt được là:",
  "options": [
    "20 m",
    "25 m",
    "15 m",
    "10 m"
  ],
  "answer": 0,
  "explanation": "Hàm số bậc hai $h(t) = -5t^2 + 20t$ đạt giá trị lớn nhất tại $t = -\\frac{20}{2(-5)} = 2\\text{ s}$. Độ cao cực đại là $h(2) = 20(2) - 5(2^2) = 40 - 20 = 20\\text{ m}$."
}'></div>

---

## 8. Thử thách thực tế: Dự án Cổng vòm Parabol

Cổng trường đại học bách khoa được thiết kế hình parabol có chiều rộng mặt đất $AB = 8\text{ m}$ và chiều cao đỉnh $h = 6\text{ m}$.
1. Chọn hệ trục tọa độ $Oxy$ với gốc $O$ tại trung điểm $AB$ và trục tung $Oy$ đi qua đỉnh vòm. Viết phương trình parabol của cổng vòm.
2. Một chiếc xe tải chở hàng có chiều rộng $3\text{ m}$ và chiều cao $4,5\text{ m}$ có thể đi lọt qua cổng vòm mà không chạm vào thành cổng hay không?
