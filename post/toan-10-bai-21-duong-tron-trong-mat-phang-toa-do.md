---
title: 'Toán 10 Bài 21: Đường tròn trong mặt phẳng tọa độ - Phương trình, Tiếp tuyến & Bài tập'
description: 'Làm chủ lý thuyết Đường tròn trong mặt phẳng tọa độ Toán 10: Phương trình chính tắc, dạng khai triển, điều kiện là phương trình đường tròn, viết phương trình tiếp tuyến, widget tương tác động và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Phương pháp tọa độ
  - Đường tròn trong Oxy
  - Phương trình tiếp tuyến
  - Kết nối tri thức
grade: 10
---

# Bài 21. Đường tròn trong mặt phẳng tọa độ

Bánh răng cơ khí, vòng xuyến giao thông thông minh, bán kính quét của tháp radar sân bay hay quỹ đạo chuyển động của vệ tinh địa tĩnh quanh Trái Đất đều mang dạng hình học hoàn hảo nhất của tự nhiên: **Đường tròn**. Trong mặt phẳng tọa độ $Oxy$, làm thế nào để số hóa đường tròn thành phương trình đại số và xác định các đường tiếp tuyến tiếp xúc với nó? Bài học này sẽ cung cấp trọn bộ công cụ toán học giải quyết bài toán đó.

---

## 1. Sơ đồ tư duy (Mindmap) Đường tròn trong Oxy

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Dạng chính tắc</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Tâm $I(a; b)$, bán kính $R > 0$:<br>
      $$(x - a)^2 + (y - b)^2 = R^2$$
      • Đặc biệt tâm tại gốc $O(0; 0)$: $x^2 + y^2 = R^2$.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Dạng khai triển</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $x^2 + y^2 - 2ax - 2by + c = 0$.<br>
      • Điều kiện là đường tròn: <strong>$a^2 + b^2 - c > 0$</strong>.<br>
      • Khi đó tâm $I(a; b)$ và bán kính $R = \sqrt{a^2 + b^2 - c}$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Tiếp tuyến tại $M_0 \in (C)$</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Đi qua điểm tiếp xúc $M_0(x_0; y_0)$ và nhận $\vec{IM_0}$ làm VTPT:<br>
      $$(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$$
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Điều kiện tiếp xúc</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Đường thẳng $\Delta$ tiếp xúc với đường tròn $(C)$ khi và chỉ khi:<br>
      $$d(I, \Delta) = R$$
      • Áp dụng khi viết tiếp tuyến đi qua điểm ngoài hoặc song song/vuông góc.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo tìm tâm và bán kính

1. **Phương trình $(x - 3)^2 + (y + 1)^2 = 25$ có tâm và bán kính bằng bao nhiêu?**  
   *Mẹo:* Đổi dấu số trong ngoặc: $x - 3 \implies a = 3$; $y + 1 \implies b = -1$. Bán kính $R = \sqrt{25} = 5$. Vậy tâm $I(3; -1), R = 5$.
2. **Phương trình $x^2 + y^2 - 4x + 6y - 12 = 0$ có tâm và bán kính bằng bao nhiêu?**  
   *Mẹo:* Lấy hệ số của $x$ và $y$ chia cho $-2$: $a = \frac{-4}{-2} = 2, b = \frac{6}{-2} = -3 \implies$ Tâm $I(2; -3)$.
   Bán kính $R = \sqrt{a^2 + b^2 - c} = \sqrt{2^2 + (-3)^2 - (-12)} = \sqrt{4 + 9 + 12} = \sqrt{25} = 5$.
3. **Phương trình $x^2 + y^2 + 2x - 4y + 10 = 0$ có phải là phương trình đường tròn không?**  
   *Đáp án:* Không, vì $a = -1, b = 2, c = 10 \implies a^2 + b^2 - c = (-1)^2 + 2^2 - 10 = -5 < 0$.
4. **Vị trí của điểm $M(0; 0)$ đối với đường tròn $(x - 1)^2 + (y - 2)^2 = 9$:**  
   *Đáp án:* Thay $x=0, y=0 \implies (0-1)^2 + (0-2)^2 = 1 + 4 = 5 < 9 \implies M$ nằm **bên trong** đường tròn.
5. **Tiếp tuyến của đường tròn luôn vuông góc với bán kính tại điểm nào?**  
   *Đáp án:* Tại tiếp điểm (điểm tiếp xúc).

---

## 3. Lý thuyết trọng tâm

### 3.1. Phương trình chính tắc của đường tròn

> [!NOTE]
> Đường tròn $(C)$ có tâm $I(a; b)$ và bán kính $R > 0$ là tập hợp tất cả các điểm $M(x; y)$ thỏa mãn $IM = R$.
> Bình phương hai vế khoảng cách $IM^2 = R^2$, ta được **phương trình chính tắc**:
> $$(x - a)^2 + (y - b)^2 = R^2$$

### 3.2. Phương trình tổng quát (dạng khai triển)

> [!NOTE]
> Khai triển phương trình chính tắc:
> $$x^2 - 2ax + a^2 + y^2 - 2by + b^2 - R^2 = 0 \iff x^2 + y^2 - 2ax - 2by + c = 0$$
> với $c = a^2 + b^2 - R^2 \implies R^2 = a^2 + b^2 - c$.
>
> **Điều kiện:** Phương trình $x^2 + y^2 - 2ax - 2by + c = 0$ là phương trình của một đường tròn khi và chỉ khi:
> $$a^2 + b^2 - c > 0$$
> Khi đó đường tròn có:
> - Tâm: $I(a; b)$
> - Bán kính: $R = \sqrt{a^2 + b^2 - c}$

### 3.3. Phương trình tiếp tuyến của đường tròn

> [!NOTE]
> 1. **Tiếp tuyến tại điểm $M_0(x_0; y_0)$ thuộc đường tròn $(C)$ tâm $I(a; b)$:**
>    Tiếp tuyến $\Delta$ đi qua $M_0$ và nhận vectơ $\vec{IM_0} = (x_0 - a; y_0 - b)$ làm VTPT:
>    $$(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$$
> 2. **Tiếp tuyến đi qua điểm $A(x_A; y_A)$ nằm ngoài đường tròn:**
>    - Gọi $\Delta$ là đường thẳng đi qua $A$ có VTPT $\vec{n} = (A; B)$ ($A^2 + B^2 > 0$): $A(x - x_A) + B(y - y_A) = 0$.
>    - Sử dụng điều kiện tiếp xúc:
>      $$d(I, \Delta) = R \iff \frac{|A(a - x_A) + B(b - y_A)|}{\sqrt{A^2 + B^2}} = R$$
>      Từ đó giải tìm tỉ số giữa $A$ và $B$ (luôn có 2 tiếp tuyến kẻ từ một điểm ngoài đường tròn).

---

## 4. Widget tương tác: Phòng Thí Nghiệm Đường Tròn & Tiếp Tuyến

Thay đổi tọa độ tâm $I(a; b)$ và bán kính $R$ để quan sát đường tròn co giãn, cùng đường tiếp tuyến xoay quanh tiếp điểm $M_0$:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🎯 Thí Nghiệm Đường Tròn & Tiếp Tuyến Oxy</h3>
    <span style="font-size: 0.85rem; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Tương tác trực quan</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 240px; gap: 16px;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center;">
      <svg data-interactive-done="true" id="circleSvg" viewBox="0 0 360 280" style="width: 100%; max-width: 400px; height: auto;">
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
        <!-- Circle -->
        <circle id="dynCircle" cx="180" cy="140" r="60" fill="#eff6ff" fill-opacity="0.5" stroke="#2563eb" stroke-width="2.5" />
        <!-- Center I -->
        <circle id="ptI" cx="180" cy="140" r="5" fill="#2563eb" />
        <text id="lblI" x="188" y="135" font-size="11" fill="#2563eb" font-weight="bold">I</text>
        <!-- Radius line -->
        <line id="radLine" x1="180" y1="140" x2="225" y2="100" stroke="#d97706" stroke-width="1.8" stroke-dasharray="3,3" />
        <!-- Tangent line -->
        <line id="tanLine" x1="0" y1="0" x2="360" y2="280" stroke="#dc2626" stroke-width="2.2" />
        <!-- Point M0 on circle -->
        <circle id="ptM0" cx="225" cy="100" r="5" fill="#dc2626" />
        <text id="lblM0" x="233" y="95" font-size="11" fill="#dc2626" font-weight="bold">M₀</text>
      </svg>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 0.88rem;">
      <div style="margin-bottom: 10px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">Tâm $I(a; b)$:</label>
        <div style="display: flex; gap: 8px;">
          <input type="number" id="inIa" value="1" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
          <input type="number" id="inIb" value="1" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
        </div>
      </div>
      <div style="margin-bottom: 12px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">Bán kính $R$:</label>
        <input type="range" id="rngR" min="1" max="5" step="0.5" value="3" style="width: 100%;" />
        <div style="text-align: right; font-weight: bold; color: #2563eb;" id="lblR">R = 3.0</div>
      </div>
      <div style="margin-bottom: 14px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">Góc tiếp điểm $\alpha$:</label>
        <input type="range" id="rngAng" min="0" max="360" step="5" value="45" style="width: 100%;" />
        <div style="text-align: right; font-weight: bold; color: #dc2626;" id="lblAng">45°</div>
      </div>

      <div style="background: #f8fafc; border-radius: 6px; padding: 10px; border: 1px solid #e2e8f0; font-size: 0.85rem;">
        <div style="font-weight: 700; color: #1e293b; margin-bottom: 4px;">Phương trình chính tắc:</div>
        <div id="statCircleEq" style="color: #2563eb; font-family: monospace; font-weight: bold; margin-bottom: 6px;">(x - 1)² + (y - 1)² = 9</div>
        <div style="font-weight: 700; color: #1e293b; margin-bottom: 4px;">Tiếp tuyến tại $M_0$:</div>
        <div id="statTanEq" style="color: #dc2626; font-family: monospace; font-weight: bold;">0.71x + 0.71y - 3.41 = 0</div>
      </div>
    </div>
  </div>
</div>

<script>
(() => {
  const inIa = document.getElementById('inIa');
  const inIb = document.getElementById('inIb');
  const rngR = document.getElementById('rngR');
  const rngAng = document.getElementById('rngAng');
  const lblR = document.getElementById('lblR');
  const lblAng = document.getElementById('lblAng');
  const dynCircle = document.getElementById('dynCircle');
  const ptI = document.getElementById('ptI');
  const lblI = document.getElementById('lblI');
  const radLine = document.getElementById('radLine');
  const tanLine = document.getElementById('tanLine');
  const ptM0 = document.getElementById('ptM0');
  const lblM0 = document.getElementById('lblM0');
  const statCircleEq = document.getElementById('statCircleEq');
  const statTanEq = document.getElementById('statTanEq');

  const ox = 180, oy = 140, scale = 25;

  function toScreen(x, y) {
    return [ox + x * scale, oy - y * scale];
  }

  function update() {
    const a = parseFloat(inIa.value) || 0;
    const b = parseFloat(inIb.value) || 0;
    const r = parseFloat(rngR.value) || 3;
    const angDeg = parseFloat(rngAng.value) || 45;
    const angRad = angDeg * Math.PI / 180;

    lblR.textContent = 'R = ' + r.toFixed(1);
    lblAng.textContent = angDeg + '°';

    // Center screen pos
    const [six, siy] = toScreen(a, b);
    ptI.setAttribute('cx', six);
    ptI.setAttribute('cy', siy);
    lblI.setAttribute('x', six + 8);
    lblI.setAttribute('y', siy - 6);
    lblI.textContent = 'I(' + a + ';' + b + ')';

    // Circle SVG
    dynCircle.setAttribute('cx', six);
    dynCircle.setAttribute('cy', siy);
    dynCircle.setAttribute('r', r * scale);

    // M0 coordinates
    const mx = a + r * Math.cos(angRad);
    const my = b + r * Math.sin(angRad);
    const [smx, smy] = toScreen(mx, my);

    ptM0.setAttribute('cx', smx);
    ptM0.setAttribute('cy', smy);
    lblM0.setAttribute('x', smx + 8);
    lblM0.setAttribute('y', smy - 6);

    // Radius segment
    radLine.setAttribute('x1', six);
    radLine.setAttribute('y1', siy);
    radLine.setAttribute('x2', smx);
    radLine.setAttribute('y2', smy);

    // Tangent line through M0 with normal vector (cos(ang), sin(ang))
    // Direction vector is (-sin(ang), cos(ang))
    const dirX = -Math.sin(angRad);
    const dirY = Math.cos(angRad);
    const [lx1, ly1] = toScreen(mx - 15 * dirX, my - 15 * dirY);
    const [lx2, ly2] = toScreen(mx + 15 * dirX, my + 15 * dirY);
    tanLine.setAttribute('x1', lx1);
    tanLine.setAttribute('y1', ly1);
    tanLine.setAttribute('x2', lx2);
    tanLine.setAttribute('y2', ly2);

    // Equation strings
    const aPart = a === 0 ? 'x²' : (a > 0 ? '(x - ' + a + ')²' : '(x + ' + Math.abs(a) + ')²');
    const bPart = b === 0 ? 'y²' : (b > 0 ? '(y - ' + b + ')²' : '(y + ' + Math.abs(b) + ')²');
    statCircleEq.textContent = aPart + ' + ' + bPart + ' = ' + (r * r).toFixed(1);

    // Tangent equation: nx*(x - mx) + ny*(y - my) = 0
    const nx = Math.cos(angRad);
    const ny = Math.sin(angRad);
    const cVal = -(nx * mx + ny * my);
    statTanEq.textContent = nx.toFixed(2) + 'x ' + (ny >= 0 ? '+ ' : '- ') + Math.abs(ny).toFixed(2) + 'y ' + (cVal >= 0 ? '+ ' : '- ') + Math.abs(cVal).toFixed(2) + ' = 0';
  }

  [inIa, inIb, rngR, rngAng].forEach(ctrl => ctrl.addEventListener('input', update));
  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Nhận dạng phương trình đường tròn, tìm tâm và bán kính

#### Phương pháp giải:
Cho phương trình $x^2 + y^2 - 2ax - 2by + c = 0$:
1. Tìm $a$ (hệ số của $x$ chia cho $-2$), $b$ (hệ số của $y$ chia cho $-2$) và $c$.
2. Tính $T = a^2 + b^2 - c$.
   - Nếu $T \le 0 \implies$ Không phải phương trình đường tròn.
   - Nếu $T > 0 \implies$ Là đường tròn có tâm $I(a; b)$ và bán kính $R = \sqrt{T}$.

#### Bài toán 1
Trong các phương trình sau, phương trình nào là phương trình đường tròn? Nếu có, hãy tìm tọa độ tâm và bán kính:
1. $(C_1): x^2 + y^2 - 6x + 4y - 12 = 0$
2. $(C_2): x^2 + y^2 + 4x - 2y + 10 = 0$

#### Lời giải:
1. Xét $(C_1): x^2 + y^2 - 6x + 4y - 12 = 0$:
   - Ta có: $a = \frac{-6}{-2} = 3; \quad b = \frac{4}{-2} = -2; \quad c = -12$.
   - Tính: $a^2 + b^2 - c = 3^2 + (-2)^2 - (-12) = 9 + 4 + 12 = 25 > 0$.
   - **Kết luận:** $(C_1)$ là phương trình đường tròn có tâm $I(3; -2)$ và bán kính $R = \sqrt{25} = 5$.

2. Xét $(C_2): x^2 + y^2 + 4x - 2y + 10 = 0$:
   - Ta có: $a = \frac{4}{-2} = -2; \quad b = \frac{-2}{-2} = 1; \quad c = 10$.
   - Tính: $a^2 + b^2 - c = (-2)^2 + 1^2 - 10 = 4 + 1 - 10 = -5 < 0$.
   - **Kết luận:** Phương trình $(C_2)$ không phải là phương trình đường tròn.

---

### Dạng 2: Viết phương trình đường tròn đi qua 3 điểm (Đường tròn ngoại tiếp)

#### Phương pháp giải:
- Giả sử phương trình đường tròn có dạng: $x^2 + y^2 - 2ax - 2by + c = 0$.
- Vì 3 điểm $A, B, C$ thuộc đường tròn, thay tọa độ của từng điểm vào phương trình để lập hệ 3 phương trình bậc nhất 3 ẩn $a, b, c$.
- Bấm máy tính giải hệ tìm $a, b, c$ và kết luận.

#### Bài toán 2
Viết phương trình đường tròn ngoại tiếp tam giác $ABC$ biết tọa độ ba đỉnh là $A(1; 2), B(5; 2), C(1; -4)$.

#### Lời giải:
Gọi phương trình đường tròn có dạng $(C): x^2 + y^2 - 2ax - 2by + c = 0$.
Thay tọa độ $A, B, C$ vào phương trình:
- $A(1; 2) \in (C) \implies 1^2 + 2^2 - 2a(1) - 2b(2) + c = 0 \iff -2a - 4b + c = -5 \quad (1)$
- $B(5; 2) \in (C) \implies 5^2 + 2^2 - 2a(5) - 2b(2) + c = 0 \iff -10a - 4b + c = -29 \quad (2)$
- $C(1; -4) \in (C) \implies 1^2 + (-4)^2 - 2a(1) - 2b(-4) + c = 0 \iff -2a + 8b + c = -17 \quad (3)$

Lấy $(1) - (2)$:
$$8a = 24 \implies a = 3$$
Lấy $(3) - (1)$:
$$12b = -12 \implies b = -1$$
Thay $a = 3, b = -1$ vào (1):
$$-2(3) - 4(-1) + c = -5 \iff -6 + 4 + c = -5 \iff c = -3$$
Kiểm tra: $a^2 + b^2 - c = 3^2 + (-1)^2 - (-3) = 9 + 1 + 3 = 13 > 0$.

**Kết luận:** Phương trình đường tròn là $x^2 + y^2 - 6x + 2y - 3 = 0$, hoặc viết dưới dạng chính tắc là $(x - 3)^2 + (y + 1)^2 = 13$.

---

### Dạng 3: Viết phương trình tiếp tuyến của đường tròn tại một điểm

#### Phương pháp giải:
Đường tròn $(C)$ có tâm $I(a; b)$.
Tiếp tuyến tại điểm $M_0(x_0; y_0) \in (C)$ có VTPT là $\vec{n} = \vec{IM_0} = (x_0 - a; y_0 - b)$:
$$(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$$

#### Bài toán 3
Cho đường tròn $(C): (x - 2)^2 + (y + 1)^2 = 25$.
1. Chứng minh rằng điểm $M_0(5; 3)$ thuộc đường tròn $(C)$.
2. Viết phương trình tiếp tuyến của đường tròn $(C)$ tại điểm $M_0$.

#### Lời giải:
1. Thay tọa độ $M_0(5; 3)$ vào vế trái phương trình $(C)$:
   $$(5 - 2)^2 + (3 + 1)^2 = 3^2 + 4^2 = 9 + 16 = 25$$
   Giá trị đúng bằng vế phải, do đó điểm $M_0(5; 3)$ thuộc đường tròn $(C)$.
2. Đường tròn $(C)$ có tâm $I(2; -1)$.
   - Vectơ $\vec{IM_0} = (5 - 2; 3 - (-1)) = (3; 4)$.
   - Tiếp tuyến $\Delta$ của $(C)$ tại $M_0$ đi qua $M_0(5; 3)$ và nhận $\vec{IM_0} = (3; 4)$ làm VTPT:
     $$3(x - 5) + 4(y - 3) = 0 \iff 3x - 15 + 4y - 12 = 0 \iff 3x + 4y - 27 = 0$$

**Kết luận:** Phương trình tiếp tuyến là $3x + 4y - 27 = 0$.

---

### Dạng 4: Viết phương trình tiếp tuyến đi qua một điểm nằm ngoài đường tròn

#### Phương pháp giải:
1. Đường thẳng $\Delta$ đi qua điểm $A(x_A; y_A)$ có VTPT $\vec{n} = (A; B)$ ($A^2 + B^2 > 0$):
   $$\Delta: A(x - x_A) + B(y - y_A) = 0 \iff Ax + By - Ax_A - By_A = 0$$
2. Sử dụng điều kiện tiếp xúc: $d(I, \Delta) = R$.
3. Giải phương trình tìm quan hệ giữa $A$ và $B$, chọn giá trị cụ thể để suy ra 2 tiếp tuyến.

#### Bài toán 4
Cho đường tròn $(C): (x - 1)^2 + (y - 2)^2 = 4$. Viết phương trình các tiếp tuyến của $(C)$ đi qua điểm $A(4; 2)$.

#### Lời giải:
1. Đường tròn $(C)$ có tâm $I(1; 2)$ và bán kính $R = 2$.
   Khoảng cách $IA = \sqrt{(4 - 1)^2 + (2 - 2)^2} = 3 > R = 2 \implies A$ nằm ngoài đường tròn.
2. Gọi $\Delta$ là đường thẳng đi qua $A(4; 2)$ với VTPT $\vec{n} = (A; B)$ ($A^2 + B^2 > 0$):
   $$A(x - 4) + B(y - 2) = 0 \iff Ax + By - 4A - 2B = 0$$
3. $\Delta$ tiếp xúc với $(C) \iff d(I, \Delta) = R$:
   $$\frac{|A(1) + B(2) - 4A - 2B|}{\sqrt{A^2 + B^2}} = 2 \iff \frac{|-3A|}{\sqrt{A^2 + B^2}} = 2 \iff 3|A| = 2\sqrt{A^2 + B^2}$$
4. Bình phương hai vế:
   $$9A^2 = 4(A^2 + B^2) \iff 5A^2 = 4B^2 \iff B^2 = \frac{5}{4}A^2 \iff B = \pm \frac{\sqrt{5}}{2}A$$
   - Chọn $A = 2 \implies B = \sqrt{5}$ hoặc $B = -\sqrt{5}$.
   - Với $A = 2, B = \sqrt{5}$:
     $$\Delta_1: 2(x - 4) + \sqrt{5}(y - 2) = 0 \iff 2x + \sqrt{5}y - 8 - 2\sqrt{5} = 0$$
   - Với $A = 2, B = -\sqrt{5}$:
     $$\Delta_2: 2(x - 4) - \sqrt{5}(y - 2) = 0 \iff 2x - \sqrt{5}y - 8 + 2\sqrt{5} = 0$$

**Kết luận:** Có hai tiếp tuyến thỏa mãn là $\Delta_1: 2x + \sqrt{5}y - 8 - 2\sqrt{5} = 0$ và $\Delta_2: 2x - \sqrt{5}y - 8 + 2\sqrt{5} = 0$.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Vùng quét Radar hàng không & Khí tượng:** Trạm radar thời tiết đặt tại sân bay có bán kính quét $R = 150\text{ km}$. Phương trình $(x - a)^2 + (y - b)^2 \le 150^2$ xác định toàn bộ vùng không phận được bảo vệ an toàn trước các cơn bão mạnh.
2. **Quy hoạch phủ sóng trạm gốc viễn thông 5G:** Kỹ sư mạng viễn thông mô hình hóa vùng phát sóng của trạm BTS bằng hình tròn bán kính $R$. Giao của các đường tròn tối ưu hóa diện tích phủ sóng không có "vùng lõm mất sóng".
3. **Kỹ thuật cơ khí chính xác & Bánh răng ăn khớp:** Vòng tròn chia (Pitch circle) của cặp bánh răng ăn khớp là hai đường tròn tiếp xúc ngoài nhau: Khoảng cách tâm $I_1 I_2 = R_1 + R_2$, đảm bảo tỉ số truyền động mượt mà và không gây kẹt răng.
4. **Hệ thống phun nước tưới nông nghiệp tự động (Center Pivot Irrigation):** Các cánh đồng tròn khổng lồ nhìn từ vệ tinh tại Mỹ và Trung Đông là kết quả của giàn phun nước tự quay quanh tâm cố định theo bán kính $R = 400\text{ m}$.
5. **Định vị chấn tâm động đất (Seismology):** Khi động đất xảy ra, ba trạm đo địa chấn ghi nhận thời gian sóng $P$ truyền tới và xác định được khoảng cách $R_1, R_2, R_3$ đến tâm chấn. Giao điểm duy nhất của 3 đường tròn $(C_1), (C_2), (C_3)$ xác định chính xác tọa độ chấn tâm động đất.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q1",
  "question": "Đường tròn $(x + 2)^2 + (y - 5)^2 = 16$ có tọa độ tâm $I$ và bán kính $R$ là:",
  "options": [
    "I(-2; 5), R = 4",
    "I(2; -5), R = 4",
    "I(-2; 5), R = 16",
    "I(2; -5), R = 16"
  ],
  "answer": 0,
  "explanation": "Tâm $I(-2; 5)$ và bán kính $R = \\sqrt{16} = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q2",
  "question": "Tọa độ tâm $I$ và bán kính $R$ của đường tròn $x^2 + y^2 - 4x + 2y - 4 = 0$ là:",
  "options": [
    "I(2; -1), R = 3",
    "I(-2; 1), R = 3",
    "I(2; -1), R = 9",
    "I(-4; 2), R = 4"
  ],
  "answer": 0,
  "explanation": "$a = \\frac{-4}{-2} = 2, b = \\frac{2}{-2} = -1, c = -4$. Bán kính $R = \\sqrt{2^2 + (-1)^2 - (-4)} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$. Tâm $I(2; -1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q3",
  "question": "Phương trình nào sau đây là phương trình của một đường tròn?",
  "options": [
    "$x^2 + y^2 - 2x + 4y - 1 = 0$",
    "$x^2 + y^2 - 2x + 4y + 10 = 0$",
    "$x^2 + 2y^2 - 4x + 6y - 1 = 0$",
    "$x^2 + y^2 - 2xy + 3 = 0$"
  ],
  "answer": 0,
  "explanation": "Phương trình $x^2 + y^2 - 2x + 4y - 1 = 0$ có $a = 1, b = -2, c = -1 \\implies a^2 + b^2 - c = 1 + 4 - (-1) = 6 > 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q4",
  "question": "Phương trình đường tròn có đường kính $AB$ với $A(1; 3)$ và $B(5; -1)$ là:",
  "options": [
    "$(x - 3)^2 + (y - 1)^2 = 8$",
    "$(x - 3)^2 + (y - 1)^2 = 32$",
    "$(x + 3)^2 + (y + 1)^2 = 8$",
    "$(x - 2)^2 + (y - 2)^2 = 8$"
  ],
  "answer": 0,
  "explanation": "Tâm $I$ là trung điểm $AB$: $I(3; 1)$. Đường kính $AB = \\sqrt{(5-1)^2 + (-1-3)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2} \\implies R = 2\\sqrt{2} \\implies R^2 = 8$. Phương trình: $(x - 3)^2 + (y - 1)^2 = 8$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q5",
  "question": "Phương trình tiếp tuyến của đường tròn $(C): x^2 + y^2 = 25$ tại điểm $M(3; 4)$ là:",
  "options": [
    "3x + 4y - 25 = 0",
    "3x - 4y + 7 = 0",
    "4x + 3y - 25 = 0",
    "3x + 4y + 25 = 0"
  ],
  "answer": 0,
  "explanation": "Đường tròn có tâm $O(0; 0)$. Vectơ pháp tuyến của tiếp tuyến tại $M$ là $\\vec{OM} = (3; 4)$. Phương trình: $3(x - 3) + 4(y - 4) = 0 \\iff 3x + 4y - 25 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q6",
  "question": "Tìm tất cả các giá trị của $m$ để phương trình $x^2 + y^2 - 2mx + 4y + 8 = 0$ là phương trình đường tròn:",
  "options": [
    "|m| > 2",
    "|m| < 2",
    "m > 2",
    "m < -2"
  ],
  "answer": 0,
  "explanation": "Ta có $a = m, b = -2, c = 8$. Điều kiện: $a^2 + b^2 - c > 0 \\iff m^2 + (-2)^2 - 8 > 0 \\iff m^2 - 4 > 0 \\iff |m| > 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q7",
  "question": "Vị trí tương đối của đường thẳng $\\Delta: 3x - 4y + 15 = 0$ và đường tròn $(C): x^2 + y^2 = 9$ là:",
  "options": [
    "Tiếp xúc nhau",
    "Cắt nhau tại 2 điểm",
    "Không giao nhau",
    "Đi qua tâm đường tròn"
  ],
  "answer": 0,
  "explanation": "Tâm $O(0; 0)$, bán kính $R = 3$. Khoảng cách $d(O, \\Delta) = \\frac{|15|}{\\sqrt{3^2 + 4^2}} = \\frac{15}{5} = 3 = R$. Do đó đường thẳng tiếp xúc với đường tròn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q8",
  "question": "Phương trình đường tròn có tâm $I(-1; 2)$ và tiếp xúc với đường thẳng $\\Delta: x - 2y + 10 = 0$ là:",
  "options": [
    "$(x + 1)^2 + (y - 2)^2 = 5$",
    "$(x + 1)^2 + (y - 2)^2 = 25$",
    "$(x - 1)^2 + (y + 2)^2 = 5$",
    "$(x + 1)^2 + (y - 2)^2 = \\sqrt{5}$"
  ],
  "answer": 0,
  "explanation": "Bán kính $R = d(I, \\Delta) = \\frac{|-1 - 2(2) + 10|}{\\sqrt{1^2 + (-2)^2}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5} \\implies R^2 = 5$. Phương trình: $(x + 1)^2 + (y - 2)^2 = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q9",
  "question": "Điểm nào sau đây nằm BÊN TRONG đường tròn $(C): (x - 2)^2 + (y + 3)^2 = 16$?",
  "options": [
    "M(2; -1)",
    "N(6; -3)",
    "P(2; 2)",
    "Q(0; 2)"
  ],
  "answer": 0,
  "explanation": "Thay tọa độ $M(2; -1)$: $(2 - 2)^2 + (-1 + 3)^2 = 0 + 4 = 4 < 16 \\implies M$ nằm bên trong đường tròn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b21_q10",
  "question": "Có bao nhiêu tiếp tuyến kẻ từ điểm $A(0; 5)$ đến đường tròn $(C): x^2 + y^2 = 9$?",
  "options": [
    "2",
    "1",
    "0",
    "Vô số"
  ],
  "answer": 0,
  "explanation": "Khoảng cách từ gốc tọa độ đến $A$ là $OA = 5 > R = 3$, do đó $A$ nằm ngoài đường tròn. Kẻ từ một điểm nằm ngoài đường tròn luôn có đúng 2 tiếp tuyến."
}'></div>

---

## 8. Thử thách thực tế: Dự án Thiết kế Vòng xuyến Giao thông

Sở Giao thông Vận tải muốn thiết kế một bùng binh (vòng xuyến) tròn trên nút giao hai tuyến đường đại lộ $d_1: 3x - 4y = 0$ và $d_2: 4x + 3y - 25 = 0$:
1. Xác định tọa độ tâm nút giao $I$ của hai đại lộ.
2. Vòng xuyến có tâm tại $I$ và tiếp xúc với một tuyến đường nhánh $d_3: x + y - 8 = 0$. Viết phương trình của vòng xuyến tròn này.
