---
title: 'Toán 10 Bài 19: Phương trình đường thẳng - VTCP, VTPT, Tham số & Tổng quát'
description: 'Làm chủ lý thuyết Phương trình đường thẳng Toán 10: Vectơ chỉ phương, vectơ pháp tuyến, phương trình tham số, phương trình tổng quát, phương trình đoạn chắn, widget vẽ đường thẳng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Phương pháp tọa độ
  - Phương trình đường thẳng
  - Vectơ pháp tuyến
  - Vectơ chỉ phương
  - Kết nối tri thức
grade: 10
---

# Bài 19. Phương trình đường thẳng

Tia laser định hướng thi công nhà chọc trời, đường bay thẳng của máy bay thương mại hay quỹ đạo của một con tàu chở hàng trên đại dương đều được số hóa trên hệ tọa độ $Oxy$ thông qua **phương trình đường thẳng**. Trong chương này, chúng ta chính thức bước vào thế giới của **Hình học giải tích Descartes** — nơi hình học thuần túy được chuyển hóa thành các phương trình đại số tinh gọn và mạnh mẽ.

---

## 1. Sơ đồ tư duy (Mindmap) Phương trình đường thẳng

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Vectơ chỉ phương & Pháp tuyến</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>VTCP $\vec{u} \ne \vec{0}$:</strong> có giá song song hoặc trùng $\Delta$.<br>
      • <strong>VTPT $\vec{n} \ne \vec{0}$:</strong> có giá vuông góc với $\Delta$.<br>
      • Mối liên hệ: $\vec{u} \cdot \vec{n} = 0$. Nếu $\vec{u} = (a; b) \implies \vec{n} = (-b; a)$ hoặc $(b; -a)$.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Phương trình tham số</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Đi qua $M_0(x_0; y_0)$ và có VTCP $\vec{u} = (u_1; u_2)$:<br>
      $$\begin{cases} x = x_0 + u_1 t \\ y = y_0 + u_2 t \end{cases} \quad (t \in \mathbb{R})$$
      • Tham số $t$ đóng vai trò như thời gian trong chuyển động thẳng đều.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Phương trình tổng quát</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Đi qua $M_0(x_0; y_0)$ và có VTPT $\vec{n} = (a; b)$:<br>
      $$a(x - x_0) + b(y - y_0) = 0 \iff ax + by + c = 0$$
      • Hệ số $a, b$ không đồng thời bằng 0 ($a^2 + b^2 > 0$).
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Các dạng đặc biệt</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>Đoạn chắn:</strong> $\frac{x}{a} + \frac{y}{b} = 1$ (cắt trục tại $(a; 0)$ và $(0; b)$).<br>
      • <strong>Hệ số góc:</strong> $y = kx + m$ với $k = \frac{u_2}{u_1} = -\frac{a}{b} = \tan\alpha$.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo chuyển đổi siêu tốc

1. **Đường thẳng có VTPT $\vec{n} = (2; -3)$ thì một VTCP của nó là bao nhiêu?**  
   *Mẹo:* Đảo vị trí và đổi dấu một tọa độ $\implies \vec{u} = (3; 2)$.
2. **Đường thẳng $\Delta: 4x - 5y + 1 = 0$ có một VTPT và một VTCP lần lượt là:**  
   *Đáp án:* VTPT $\vec{n} = (4; -5)$ và VTCP $\vec{u} = (5; 4)$.
3. **Đường thẳng đi qua $A(3; 0)$ và $B(0; -2)$ có phương trình đoạn chắn là:**  
   *Đáp án:* $\frac{x}{3} + \frac{y}{-2} = 1 \iff 2x - 3y - 6 = 0$.
4. **Một đường thẳng có bao nhiêu vectơ chỉ phương và vectơ pháp tuyến?**  
   *Đáp án:* Vô số. Mọi vectơ $k\vec{u}$ ($k \ne 0$) đều là VTCP và $m\vec{n}$ ($m \ne 0$) đều là VTPT.
5. **Điểm $M(1; 2)$ có thuộc đường thẳng $\Delta: 3x - y - 1 = 0$ không?**  
   *Đáp án:* Thay tọa độ: $3(1) - 2 - 1 = 0 \implies M$ thuộc $\Delta$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Vectơ chỉ phương và Vectơ pháp tuyến

> [!NOTE]
> Cho đường thẳng $\Delta$ trong mặt phẳng tọa độ $Oxy$:
> 1. Vectơ $\vec{u} \ne \vec{0}$ được gọi là **vectơ chỉ phương (VTCP)** của $\Delta$ nếu giá của $\vec{u}$ song song hoặc trùng với $\Delta$.
> 2. Vectơ $\vec{n} \ne \vec{0}$ được gọi là **vectơ pháp tuyến (VTPT)** của $\Delta$ nếu giá của $\vec{n}$ vuông góc với $\Delta$.

> [!TIP]
> **Quy tắc chuyển đổi qua lại giữa VTCP và VTPT:**
> Vì $\vec{u} \perp \vec{n} \iff \vec{u} \cdot \vec{n} = 0$:
> $$\vec{u} = (a; b) \iff \vec{n} = (-b; a) \quad \text{hoặc} \quad \vec{n} = (b; -a)$$

### 3.2. Phương trình tham số của đường thẳng

> [!NOTE]
> Đường thẳng $\Delta$ đi qua điểm $M_0(x_0; y_0)$ và nhận $\vec{u} = (u_1; u_2)$ ($u_1^2 + u_2^2 > 0$) làm VTCP có **phương trình tham số**:
> $$\begin{cases} x = x_0 + u_1 t \\ y = y_0 + u_2 t \end{cases} \quad (t \in \mathbb{R})$$
> - Mỗi giá trị cụ thể của tham số $t$ cho ta tọa độ của một điểm $M(x; y)$ nằm trên $\Delta$.
> - Ngược lại, mỗi điểm $M \in \Delta$ tương ứng với duy nhất một giá trị tham số $t$.

### 3.3. Phương trình tổng quát của đường thẳng

> [!NOTE]
> Đường thẳng $\Delta$ đi qua điểm $M_0(x_0; y_0)$ và nhận $\vec{n} = (a; b)$ ($a^2 + b^2 > 0$) làm VTPT có phương trình:
> $$a(x - x_0) + b(y - y_0) = 0$$
> Khai triển và đặt $c = -ax_0 - by_0$, ta được **phương trình tổng quát**:
> $$ax + by + c = 0$$

### 3.4. Các dạng phương trình đường thẳng đặc biệt

> [!NOTE]
> 1. **Phương trình theo hệ số góc:** Nếu $b \ne 0$, phương trình tổng quát có thể viết thành $y = kx + m$ với $k = -\frac{a}{b} = \tan\alpha$ ($\alpha$ là góc tạo bởi tia Ox và đường thẳng).
> 2. **Phương trình đoạn chắn:** Nếu đường thẳng cắt trục $Ox$ tại $A(a; 0)$ và cắt $Oy$ tại $B(0; b)$ ($a, b \ne 0$):
>    $$\frac{x}{a} + \frac{y}{b} = 1$$
> 3. Các đường thẳng song song trục tọa độ:
>    - Song song hoặc trùng với $Ox$: $y = y_0$ (VTPT $\vec{n} = (0; 1)$).
>    - Song song hoặc trùng với $Oy$: $x = x_0$ (VTPT $\vec{n} = (1; 0)$).

---

## 4. Widget tương tác: Phòng Thí Nghiệm Phương Trình Đường Thẳng

Di chuyển điểm đi qua $M_0(x_0; y_0)$ và vectơ pháp tuyến $\vec{n} = (a; b)$ để quan sát đường thẳng xoay chuyển động, tự động cập nhật cả hai dạng phương trình tham số và tổng quát:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">📐 Studio Hình Học Giải Tích: Đường Thẳng Trong Oxy</h3>
    <span style="font-size: 0.85rem; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Tự động đồng bộ</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 240px; gap: 16px;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center;">
      <svg data-interactive-done="true" id="lineSvg" viewBox="0 0 360 280" style="width: 100%; max-width: 400px; height: auto;">
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
        <text x="168" y="155" font-size="11" fill="#94a3b8">O</text>
        <!-- The line -->
        <line id="dynLine" x1="0" y1="0" x2="360" y2="280" stroke="#2563eb" stroke-width="2.5" />
        <!-- Normal vector -->
        <line id="nVec" x1="180" y1="140" x2="180" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arrR)" />
        <!-- Point M0 -->
        <circle id="ptM0" cx="180" cy="140" r="5" fill="#16a34a" />
        <text id="lblM0" x="188" y="135" font-size="11" fill="#16a34a" font-weight="bold">M₀</text>

        <defs>
          <marker id="arrR" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#dc2626" />
          </marker>
        </defs>
      </svg>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 0.88rem;">
      <div style="margin-bottom: 10px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">Điểm $M_0(x_0; y_0)$:</label>
        <div style="display: flex; gap: 8px;">
          <input type="number" id="inX0" value="1" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
          <input type="number" id="inY0" value="2" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
        </div>
      </div>
      <div style="margin-bottom: 14px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">VTPT $\vec{n} = (a; b)$:</label>
        <div style="display: flex; gap: 8px;">
          <input type="number" id="inA" value="2" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
          <input type="number" id="inB" value="-3" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
        </div>
      </div>

      <div style="background: #f8fafc; border-radius: 6px; padding: 10px; border: 1px solid #e2e8f0; font-size: 0.85rem;">
        <div style="font-weight: 700; color: #1e293b; margin-bottom: 4px;">Phương trình tổng quát:</div>
        <div id="statGeneral" style="color: #2563eb; font-family: monospace; font-weight: bold; margin-bottom: 8px;">2x - 3y + 4 = 0</div>
        <div style="font-weight: 700; color: #1e293b; margin-bottom: 4px;">VTCP tương ứng:</div>
        <div id="statVtcp" style="color: #16a34a; font-family: monospace; font-weight: bold;">u = (3; 2)</div>
      </div>
    </div>
  </div>
</div>

<script>
(() => {
  const inX0 = document.getElementById('inX0');
  const inY0 = document.getElementById('inY0');
  const inA = document.getElementById('inA');
  const inB = document.getElementById('inB');
  const dynLine = document.getElementById('dynLine');
  const nVec = document.getElementById('nVec');
  const ptM0 = document.getElementById('ptM0');
  const lblM0 = document.getElementById('lblM0');
  const statGeneral = document.getElementById('statGeneral');
  const statVtcp = document.getElementById('statVtcp');

  const ox = 180, oy = 140, scale = 25;

  function toScreen(x, y) {
    return [ox + x * scale, oy - y * scale];
  }

  function update() {
    const x0 = parseFloat(inX0.value) || 0;
    const y0 = parseFloat(inY0.value) || 0;
    let a = parseFloat(inA.value);
    let b = parseFloat(inB.value);
    if (isNaN(a)) a = 1;
    if (isNaN(b)) b = 0;
    if (a === 0 && b === 0) { a = 1; inA.value = 1; }

    const c = -(a * x0 + b * y0);
    const [smx, smy] = toScreen(x0, y0);

    ptM0.setAttribute('cx', smx);
    ptM0.setAttribute('cy', smy);
    lblM0.setAttribute('x', smx + 8);
    lblM0.setAttribute('y', smy - 6);
    lblM0.textContent = 'M₀(' + x0 + ';' + y0 + ')';

    // Normal vector from M0
    const [snx, sny] = toScreen(x0 + a, y0 + b);
    nVec.setAttribute('x1', smx);
    nVec.setAttribute('y1', smy);
    nVec.setAttribute('x2', snx);
    nVec.setAttribute('y2', sny);

    // VTCP = (-b, a)
    const ux = -b, uy = a;
    const [sx1, sy1] = toScreen(x0 - 15 * ux, y0 - 15 * uy);
    const [sx2, sy2] = toScreen(x0 + 15 * ux, y0 + 15 * uy);
    dynLine.setAttribute('x1', sx1);
    dynLine.setAttribute('y1', sy1);
    dynLine.setAttribute('x2', sx2);
    dynLine.setAttribute('y2', sy2);

    // Equations
    const aStr = a === 1 ? 'x' : (a === -1 ? '-x' : a + 'x');
    const bStr = b >= 0 ? '+ ' + (b === 1 ? 'y' : b + 'y') : '- ' + (b === -1 ? 'y' : Math.abs(b) + 'y');
    const cStr = c >= 0 ? '+ ' + c : '- ' + Math.abs(c);
    statGeneral.textContent = aStr + ' ' + bStr + ' ' + cStr + ' = 0';
    statVtcp.textContent = 'u = (' + ux + '; ' + uy + ')';
  }

  [inX0, inY0, inA, inB].forEach(inp => inp.addEventListener('input', update));
  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Lập phương trình tham số và tổng quát khi biết 1 điểm và VTCP / VTPT

#### Phương pháp giải:
- Biết $M_0(x_0; y_0)$ và VTCP $\vec{u} = (u_1; u_2)$:
  $$\text{PT tham số: } \begin{cases} x = x_0 + u_1 t \\ y = y_0 + u_2 t \end{cases}$$
- Biết $M_0(x_0; y_0)$ và VTPT $\vec{n} = (a; b)$:
  $$\text{PT tổng quát: } a(x - x_0) + b(y - y_0) = 0 \iff ax + by + c = 0$$

#### Bài toán 1
Viết phương trình tham số và phương trình tổng quát của đường thẳng $\Delta$ trong các trường hợp sau:
1. $\Delta$ đi qua điểm $A(2; -3)$ và có VTCP $\vec{u} = (4; -1)$.
2. $\Delta$ đi qua điểm $B(-1; 5)$ và có VTPT $\vec{n} = (3; 2)$.

#### Lời giải:
1. Trường hợp 1: Đi qua $A(2; -3)$ và có VTCP $\vec{u} = (4; -1)$:
   - Phương trình tham số của $\Delta$:
     $$\begin{cases} x = 2 + 4t \\ y = -3 - t \end{cases} \quad (t \in \mathbb{R})$$
   - Từ VTCP $\vec{u} = (4; -1)$, ta chọn VTPT là $\vec{n} = (1; 4)$.
   - Phương trình tổng quát:
     $$1(x - 2) + 4(y - (-3)) = 0 \iff x - 2 + 4y + 12 = 0 \iff x + 4y + 10 = 0$$

2. Trường hợp 2: Đi qua $B(-1; 5)$ và có VTPT $\vec{n} = (3; 2)$:
   - Phương trình tổng quát của $\Delta$:
     $$3(x - (-1)) + 2(y - 5) = 0 \iff 3(x + 1) + 2y - 10 = 0 \iff 3x + 2y - 7 = 0$$
   - Từ VTPT $\vec{n} = (3; 2)$, ta chọn VTCP là $\vec{u} = (-2; 3)$.
   - Phương trình tham số:
     $$\begin{cases} x = -1 - 2t \\ y = 5 + 3t \end{cases} \quad (t \in \mathbb{R})$$

---

### Dạng 2: Lập phương trình đường thẳng đi qua hai điểm và các đường đặc biệt trong tam giác

#### Phương pháp giải:
- Đường thẳng đi qua hai điểm $A, B$ có một VTCP là $\vec{AB} = (x_B - x_A; y_B - y_A)$.
- **Đường trung trực** của đoạn thẳng $AB$: Đi qua trung điểm $M$ của $AB$ và nhận $\vec{AB}$ làm VTPT.
- **Đường cao $AH$** của tam giác $ABC$: Đi qua đỉnh $A$ và nhận $\vec{BC}$ làm VTPT.
- **Đường trung tuyến $AM$**: Đi qua đỉnh $A$ và trung điểm $M$ của cạnh đối diện $BC$.

#### Bài toán 2
Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có $A(1; 4), B(-2; 1), C(4; -1)$.
1. Viết phương trình tổng quát của đường thẳng chứa cạnh $BC$.
2. Viết phương trình tổng quát của đường cao $AH$ kẻ từ đỉnh $A$.
3. Viết phương trình đường trung trực của đoạn thẳng $BC$.

#### Lời giải:
1. **Phương trình cạnh $BC$:**
   - Vectơ $\vec{BC} = (4 - (-2); -1 - 1) = (6; -2) = 2(3; -1)$.
   - Chọn VTCP $\vec{u}_{BC} = (3; -1) \implies$ VTPT $\vec{n}_{BC} = (1; 3)$.
   - Đường thẳng $BC$ đi qua $B(-2; 1)$ và có VTPT $\vec{n} = (1; 3)$:
     $$1(x + 2) + 3(y - 1) = 0 \iff x + 3y - 1 = 0$$

2. **Phương trình đường cao $AH$:**
   - Vì $AH \perp BC$ nên đường cao $AH$ nhận $\vec{BC} = (6; -2)$, hay vectơ cùng phương $\vec{n}_{AH} = (3; -1)$ làm VTPT.
   - $AH$ đi qua đỉnh $A(1; 4)$:
     $$3(x - 1) - 1(y - 4) = 0 \iff 3x - 3 - y + 4 = 0 \iff 3x - y + 1 = 0$$

3. **Phương trình đường trung trực $d$ của đoạn $BC$:**
   - Gọi $M$ là trung điểm của $BC$:
     $$x_M = \frac{-2 + 4}{2} = 1, \quad y_M = \frac{1 + (-1)}{2} = 0 \implies M(1; 0)$$
   - Đường trung trực $d$ đi qua $M(1; 0)$ và vuông góc với $BC$, nên nhận $\vec{n}_d = (3; -1)$ làm VTPT:
     $$3(x - 1) - 1(y - 0) = 0 \iff 3x - y - 3 = 0$$

---

### Dạng 3: Chuyển đổi qua lại giữa các dạng phương trình đường thẳng

#### Phương pháp giải:
- **Từ tham số sang tổng quát:** Khử tham số $t$ từ hệ hai phương trình, hoặc lấy VTCP $\vec{u} = (u_1; u_2) \implies$ VTPT $\vec{n} = (-u_2; u_1)$.
- **Từ tổng quát sang tham số:** Tìm 1 điểm thuộc đường thẳng (cho $x = 0$ tìm $y$) và lấy VTCP từ VTPT.

#### Bài toán 3
1. Cho đường thẳng $\Delta$ có phương trình tham số:
   $$\begin{cases} x = 3 - 2t \\ y = -1 + 5t \end{cases}$$
   Hãy viết phương trình tổng quát của $\Delta$.
2. Cho đường thẳng $d: 2x - 3y + 6 = 0$. Hãy viết phương trình tham số và phương trình đoạn chắn của $d$.

#### Lời giải:
1. **Chuyển tham số sang tổng quát:**
   - $\Delta$ đi qua $M_0(3; -1)$ và có VTCP $\vec{u} = (-2; 5)$.
   - Suy ra VTPT $\vec{n} = (5; 2)$.
   - Phương trình tổng quát:
     $$5(x - 3) + 2(y - (-1)) = 0 \iff 5x - 15 + 2y + 2 = 0 \iff 5x + 2y - 13 = 0$$
   *(Cách khác: Từ $x = 3 - 2t \implies t = \frac{3 - x}{2}$. Thay vào $y = -1 + 5\left(\frac{3 - x}{2}\right) \iff 2y = -2 + 15 - 5x \iff 5x + 2y - 13 = 0$).*

2. **Chuyển tổng quát sang tham số và đoạn chắn:**
   - $d: 2x - 3y + 6 = 0$ có VTPT $\vec{n} = (2; -3) \implies$ VTCP $\vec{u} = (3; 2)$.
   - Chọn điểm $M \in d$: Cho $x = 0 \implies -3y + 6 = 0 \implies y = 2 \implies M(0; 2)$.
   - Phương trình tham số:
     $$\begin{cases} x = 3t \\ y = 2 + 2t \end{cases} \quad (t \in \mathbb{R})$$
   - Phương trình đoạn chắn:
     $$2x - 3y = -6 \iff \frac{2x}{-6} - \frac{3y}{-6} = 1 \iff \frac{x}{-3} + \frac{y}{2} = 1$$

---

### Dạng 4: Ứng dụng chuyển động thẳng đều trong thực tế

#### Phương pháp giải:
Vật chuyển động thẳng đều xuất phát từ điểm $A(x_0; y_0)$ với vận tốc vectơ $\vec{v} = (v_x; v_y)$ có phương trình chuyển động chính là phương trình tham số của đường thẳng:
$$\begin{cases} x(t) = x_0 + v_x t \\ y(t) = y_0 + v_y t \end{cases}$$
với $t$ là thời gian chuyển động.

#### Bài toán 4
Trên màn hình radar kiểm soát không lưu, một chiếc máy bay dân dụng bay thẳng đều từ vị trí $A(100; 200)$ theo hướng vectơ vận tốc $\vec{v} = (400; 300)$ (đơn vị tọa độ tính bằng kilômét, thời gian $t$ tính bằng giờ).
1. Viết phương trình quỹ đạo chuyển động của máy bay dưới dạng tham số.
2. Xác định vị trí của máy bay sau khi bay được 30 phút ($0,5\text{ giờ}$).
3. Một trạm phát sóng định vị đặt tại $B(500; 500)$. Hỏi máy bay có bay qua trạm phát sóng $B$ hay không?

#### Lời giải:
1. Phương trình quỹ đạo chuyển động tham số:
   $$\begin{cases} x(t) = 100 + 400t \\ y(t) = 200 + 300t \end{cases} \quad (t \ge 0)$$
2. Sau thời gian $t = 0,5\text{ giờ}$:
   $$x(0,5) = 100 + 400(0,5) = 100 + 200 = 300\text{ km}$$
   $$y(0,5) = 200 + 300(0,5) = 200 + 150 = 350\text{ km}$$
   Vậy sau 30 phút, máy bay ở vị trí có tọa độ $(300; 350)$.
3. Để kiểm tra máy bay có bay qua trạm $B(500; 500)$ không, ta giải hệ:
   $$\begin{cases} 100 + 400t = 500 \\ 200 + 300t = 500 \end{cases} \iff \begin{cases} 400t = 400 \implies t = 1 \\ 300t = 300 \implies t = 1 \end{cases}$$
   Cả hai phương trình đều cho cùng một giá trị $t = 1\text{ giờ} > 0$.

**Kết luận:** Máy bay có bay qua trạm phát sóng $B$, đúng sau $1\text{ giờ}$ kể từ khi bắt đầu quan sát.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Kiểm soát không lưu hàng không (ATC):** Radar giám sát đường bay dân dụng mô hình hóa đường bay bằng phương trình tham số theo thời gian $t$. Thuật toán máy tính tự động so sánh các phương trình tham số để cảnh báo nguy cơ va chạm trước hàng chục phút.
2. **Kỹ thuật trắc địa & Laser định vị công trình:** Máy đo toàn đạc điện tử phát chùm tia laser song song mặt phẳng thiết kế. Phương trình tổng quát $ax + by + c = 0$ đảm bảo các dầm sàn của tòa tháp cao hàng trăm mét không bị lệch tâm quá $2\text{ mm}$.
3. **Đồ họa máy tính & Thuật toán Dò tia (Ray Tracing):** Trong lập trình game 3D, mắt người quan sát phóng các tia nhìn (Rays) là các đường thẳng tham số $P(t) = O + t\vec{D}$. Giao điểm của tia với các vật thể xác định điểm ảnh màu sắc và hiệu ứng ánh sáng chân thực.
4. **Quy hoạch mạng lưới cấp thoát nước ngầm:** Kỹ sư đô thị biểu diễn tuyến ống nước chính bằng phương trình đường thẳng để tính toán điểm đấu nối tối ưu đến các khu dân cư với chi phí đào đường thấp nhất.
5. **Hệ thống dẫn đường tự hành cho Robot kho hàng (AGV):** Xe tự hành trong kho Amazon di chuyển dọc theo các đường ray từ tính được lập trình bằng phương trình đường thẳng, giúp robot vận chuyển hàng nghìn kiện hàng mỗi giờ mà không bao giờ va chạm nhau.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q1",
  "question": "Vectơ nào sau đây là một VTCP của đường thẳng $\\Delta: 2x - 5y + 3 = 0$?",
  "options": [
    "u = (5; 2)",
    "u = (2; -5)",
    "u = (-5; 2)",
    "u = (2; 5)"
  ],
  "answer": 0,
  "explanation": "Đường thẳng có VTPT $\\vec{n} = (2; -5) \\implies$ VTCP là $\\vec{u} = (5; 2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q2",
  "question": "Đường thẳng đi qua điểm $M(1; -2)$ và có VTPT $\\vec{n} = (3; 1)$ có phương trình tổng quát là:",
  "options": [
    "3x + y - 1 = 0",
    "3x + y + 1 = 0",
    "x - 2y - 1 = 0",
    "3x - y - 5 = 0"
  ],
  "answer": 0,
  "explanation": "$3(x - 1) + 1(y - (-2)) = 0 \\iff 3x - 3 + y + 2 = 0 \\iff 3x + y - 1 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q3",
  "question": "Phương trình tham số của đường thẳng đi qua $A(2; 1)$ và $B(4; -3)$ là:",
  "options": [
    "x = 2 + t, y = 1 - 2t",
    "x = 2 + 2t, y = 1 + 4t",
    "x = 4 + t, y = -3 - t",
    "x = 1 + 2t, y = -2 + t"
  ],
  "answer": 0,
  "explanation": "$\\vec{AB} = (2; -4) = 2(1; -2)$. Chọn VTCP $\\vec{u} = (1; -2)$. Đi qua $A(2; 1) \\implies x = 2 + t, y = 1 - 2t$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q4",
  "question": "Cho đường thẳng $d: \\begin{cases} x = 1 - 3t \\\\ y = 2 + 4t \\end{cases}$. Điểm nào sau đây KHÔNG THUỘC đường thẳng $d$?",
  "options": [
    "M(1; 2)",
    "N(-2; 6)",
    "P(4; -2)",
    "Q(2; 3)"
  ],
  "answer": 3,
  "explanation": "Với $t = 0 \\implies M(1; 2) \\in d$. Với $t = 1 \\implies N(-2; 6) \\in d$. Với $t = -1 \\implies P(4; -2) \\in d$. Điểm $Q(2; 3)$ cho $t = -1/3$ ở hoành độ nhưng $y = 2 + 4(-1/3) = 2/3 \\ne 3$ nên $Q \\notin d$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q5",
  "question": "Phương trình tổng quát của đường thẳng đi qua hai điểm $A(3; 0)$ và $B(0; -4)$ là:",
  "options": [
    "4x - 3y - 12 = 0",
    "4x + 3y - 12 = 0",
    "3x - 4y - 12 = 0",
    "4x - 3y + 12 = 0"
  ],
  "answer": 0,
  "explanation": "Áp dụng phương trình đoạn chắn: $\\frac{x}{3} + \\frac{y}{-4} = 1 \\iff 4x - 3y = 12 \\iff 4x - 3y - 12 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q6",
  "question": "Hệ số góc $k$ của đường thẳng $\\Delta: 2x - 6y + 5 = 0$ bằng:",
  "options": [
    "1/3",
    "-1/3",
    "2",
    "3"
  ],
  "answer": 0,
  "explanation": "Viết lại phương trình: $6y = 2x + 5 \\implies y = \\frac{1}{3}x + \\frac{5}{6}$. Do đó hệ số góc $k = 1/3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q7",
  "question": "Đường thẳng đi qua $M(3; 4)$ và song song với trục hoành $Ox$ có phương trình là:",
  "options": [
    "y = 4",
    "x = 3",
    "y = 3",
    "x = 4"
  ],
  "answer": 0,
  "explanation": "Song song trục hoành nên mọi điểm đều có cùng tung độ $y = y_M = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q8",
  "question": "Đường trung trực của đoạn thẳng $AB$ với $A(1; 2)$ và $B(3; 6)$ có phương trình tổng quát là:",
  "options": [
    "x + 2y - 10 = 0",
    "x + 2y - 8 = 0",
    "2x - y = 0",
    "x - 2y + 6 = 0"
  ],
  "answer": 0,
  "explanation": "Trung điểm $I(2; 4)$. Vectơ $\\vec{AB} = (2; 4) = 2(1; 2)$. VTPT là $\\vec{n} = (1; 2)$. Phương trình: $1(x - 2) + 2(y - 4) = 0 \\iff x + 2y - 10 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q9",
  "question": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ với $B(1; 3)$ và $C(-3; 5)$. Một VTCP của đường trung bình ứng với cạnh đáy $BC$ là:",
  "options": [
    "u = (-2; 1)",
    "u = (2; 1)",
    "u = (1; 2)",
    "u = (-1; 2)"
  ],
  "answer": 0,
  "explanation": "Đường trung bình song song với cạnh đáy $BC$ nên nhận $\\vec{BC} = (-4; 2) = 2(-2; 1)$ làm VTCP. Ta chọn $\\vec{u} = (-2; 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b19_q10",
  "question": "Một chất điểm chuyển động theo phương trình tham số $x = 2 + 3t, y = -1 + 4t$ ($t$ tính bằng giây, tọa độ tính bằng mét). Tốc độ chuyển động của chất điểm bằng:",
  "options": [
    "5 m/s",
    "7 m/s",
    "25 m/s",
    "3 m/s"
  ],
  "answer": 0,
  "explanation": "Vectơ vận tốc $\\vec{v} = (3; 4)$. Tốc độ là độ dài của vectơ vận tốc: $v = |\\vec{v}| = \\sqrt{3^2 + 4^2} = 5\\text{ m/s}$."
}'></div>

---

## 8. Thử thách thực tế: Dự án Thiết kế Tuyến Cáp Treo Ngắm Cảnh

Ban quản lý khu du lịch muốn xây dựng tuyến cáp treo nối từ chân đồi $A(1; 2)$ lên đỉnh núi $B(7; 10)$ (đơn vị: trăm mét).
1. Lập phương trình tham số và phương trình tổng quát của tuyến cáp treo $AB$.
2. Để đảm bảo an toàn, cần đặt một cột trụ trung gian $M$ tại điểm chia đoạn $AB$ theo tỉ lệ $AM = 2MB$. Tìm tọa độ của trụ cáp $M$.
3. Một flycam bay tuần tra bay dọc theo đường thẳng $d: x - 2y + 8 = 0$. Hỏi đường bay của flycam có cắt ngang đường cáp treo $AB$ hay không?
