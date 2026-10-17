---
title: 'Toán 10 Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách'
description: 'Làm chủ lý thuyết Vị trí tương đối, Góc và Khoảng cách Toán 10: Hai đường thẳng cắt nhau, song song, trùng nhau, công thức tính góc giữa hai đường thẳng, khoảng cách từ một điểm đến đường thẳng, widget tương tác động và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Vị trí tương đối
  - Góc giữa hai đường thẳng
  - Khoảng cách từ điểm đến đường thẳng
  - Kết nối tri thức
grade: 10
---

# Bài 20. Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách

Khi hai con tàu di chuyển trên biển hay hai tuyến đường sắt giao nhau trên đất liền, các kỹ sư cần xác định chính xác: Hai quỹ đạo có cắt nhau hay không? Nếu cắt thì giao điểm ở đâu và tạo với nhau một góc bao nhiêu độ? Nếu song song thì khoảng cách an toàn là bao nhiêu? Toàn bộ các câu hỏi thực tiễn đó được giải quyết triệt để thông qua các công thức về **vị trí tương đối, góc và khoảng cách** trong mặt phẳng tọa độ $Oxy$.

---

## 1. Sơ đồ tư duy (Mindmap) Vị trí tương đối, Góc & Khoảng cách

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Vị trí tương đối</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      Xét hệ phương trình giao điểm của $\Delta_1$ và $\Delta_2$:<br>
      • <strong>Cắt nhau:</strong> Hệ có 1 nghiệm duy nhất.<br>
      • <strong>Song song:</strong> Hệ vô nghiệm.<br>
      • <strong>Trùng nhau:</strong> Hệ có vô số nghiệm.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Điều kiện vuông góc</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $\Delta_1 \perp \Delta_2 \iff \vec{n}_1 \cdot \vec{n}_2 = 0 \iff a_1 a_2 + b_1 b_2 = 0$.<br>
      • Nếu dùng hệ số góc: $k_1 \cdot k_2 = -1$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Góc giữa hai đường thẳng</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Luôn là góc nhọn hoặc góc vuông ($0^\circ \le \varphi \le 90^\circ$):<br>
      $$\cos\varphi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| \cdot |\vec{n}_2|} = \frac{|a_1 a_2 + b_1 b_2|}{\sqrt{a_1^2 + b_1^2}\sqrt{a_2^2 + b_2^2}}$$
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Khoảng cách</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Từ $M_0(x_0; y_0)$ đến $\Delta: ax + by + c = 0$:<br>
      $$d(M_0, \Delta) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$
      • Giữa 2 đường thẳng song song: Lấy 1 điểm thuộc đường này rồi tính khoảng cách đến đường kia.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo tính nhẩm

1. **Hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: x + 2y - 5 = 0$ có vuông góc với nhau không?**  
   *Mẹo:* Tính tích vô hướng hai VTPT: $a_1 a_2 + b_1 b_2 = 2(1) + (-1)(2) = 0 \implies d_1 \perp d_2$.
2. **Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $3x + 4y - 10 = 0$ bằng bao nhiêu?**  
   *Mẹo:* $d(O, \Delta) = \frac{|-10|}{\sqrt{3^2 + 4^2}} = \frac{10}{5} = 2$.
3. **Góc giữa hai đường thẳng song song hoặc trùng nhau bằng bao nhiêu độ?**  
   *Đáp án:* Bằng $0^\circ$.
4. **Góc giữa hai đường thẳng có thể là góc tù ($> 90^\circ$) không?**  
   *Đáp án:* Không bao giờ. Theo quy ước toán học, góc giữa hai đường thẳng luôn nằm trong đoạn $[0^\circ; 90^\circ]$ (vì luôn lấy góc không tù).
5. **Đường thẳng $\Delta_1: x - 2y + 3 = 0$ và $\Delta_2: 2x - 4y + 6 = 0$ có vị trí tương đối thế nào?**  
   *Đáp án:* Trùng nhau (vì $\frac{1}{2} = \frac{-2}{-4} = \frac{3}{6}$).

---

## 3. Lý thuyết trọng tâm

### 3.1. Vị trí tương đối giữa hai đường thẳng

Trong mặt phẳng tọa độ $Oxy$, cho hai đường thẳng:
$$\Delta_1: a_1 x + b_1 y + c_1 = 0 \quad (\text{VTPT } \vec{n}_1 = (a_1; b_1))$$
$$\Delta_2: a_2 x + b_2 y + c_2 = 0 \quad (\text{VTPT } \vec{n}_2 = (a_2; b_2))$$

> [!NOTE]
> Tọa độ giao điểm của $\Delta_1$ và $\Delta_2$ là nghiệm của hệ phương trình:
> $$\begin{cases} a_1 x + b_1 y = -c_1 \\ a_2 x + b_2 y = -c_2 \end{cases} \quad (*)$$
> 1. Hệ $(*)$ có **nghiệm duy nhất** $(x_0; y_0) \iff \Delta_1$ **cắt** $\Delta_2$ tại điểm $M_0(x_0; y_0)$.
> 2. Hệ $(*)$ **vô nghiệm** $\iff \Delta_1$ **song song** với $\Delta_2$ ($\Delta_1 \parallel \Delta_2$).
> 3. Hệ $(*)$ có **vô số nghiệm** $\iff \Delta_1$ **trùng** với $\Delta_2$ ($\Delta_1 \equiv \Delta_2$).

> [!TIP]
> **Xét tỉ số (khi các hệ số $a_2, b_2, c_2 \ne 0$):**
> - $\frac{a_1}{a_2} \ne \frac{b_1}{b_2} \iff \Delta_1$ cắt $\Delta_2$.
> - $\frac{a_1}{a_2} = \frac{b_1}{b_2} \ne \frac{c_1}{c_2} \iff \Delta_1 \parallel \Delta_2$.
> - $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} \iff \Delta_1 \equiv \Delta_2$.

### 3.2. Góc giữa hai đường thẳng

> [!NOTE]
> Gọi $\varphi$ là góc giữa hai đường thẳng $\Delta_1$ và $\Delta_2$ ($0^\circ \le \varphi \le 90^\circ$).
> Khi đó $\cos\varphi$ bằng giá trị tuyệt đối của côsin góc giữa hai VTPT $\vec{n}_1$ và $\vec{n}_2$ (hoặc hai VTCP $\vec{u}_1, \vec{u}_2$):
> $$\cos\varphi = |\cos(\vec{n}_1, \vec{n}_2)| = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| \cdot |\vec{n}_2|} = \frac{|a_1 a_2 + b_1 b_2|}{\sqrt{a_1^2 + b_1^2}\sqrt{a_2^2 + b_2^2}}$$

> [!IMPORTANT]
> **Điều kiện vuông góc:**
> $$\Delta_1 \perp \Delta_2 \iff \vec{n}_1 \cdot \vec{n}_2 = 0 \iff a_1 a_2 + b_1 b_2 = 0$$

### 3.3. Khoảng cách từ một điểm đến một đường thẳng

> [!NOTE]
> Trong mặt phẳng $Oxy$, khoảng cách từ điểm $M_0(x_0; y_0)$ đến đường thẳng $\Delta: ax + by + c = 0$ được tính bằng công thức:
> $$d(M_0, \Delta) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

### 3.4. Khoảng cách giữa hai đường thẳng song song

> [!TIP]
> Cho hai đường thẳng song song $\Delta_1: ax + by + c_1 = 0$ và $\Delta_2: ax + by + c_2 = 0$ ($c_1 \ne c_2$):
> $$d(\Delta_1, \Delta_2) = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$$
> Hoặc lấy một điểm $M \in \Delta_1$ bất kì rồi tính $d(M, \Delta_2)$.

---

## 4. Widget tương tác: Máy Tính Góc & Khoảng Cách Động

Di chuyển điểm $M_0$ và xoay đường thẳng $\Delta$ để quan sát hình chiếu vuông góc $H$, độ dài khoảng cách $d(M_0, \Delta)$ và góc tạo bởi đường thẳng với trục hoành biến thiên trực quan:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">⚡ Thí Nghiệm Khoảng Cách & Góc Hình Học Giải Tích</h3>
    <span style="font-size: 0.85rem; background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Hình chiếu vuông góc</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 240px; gap: 16px;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center;">
      <svg data-interactive-done="true" id="distSvg" viewBox="0 0 360 280" style="width: 100%; max-width: 400px; height: auto;">
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
        <!-- Line Delta -->
        <line id="svgLine" x1="0" y1="0" x2="360" y2="280" stroke="#2563eb" stroke-width="2.2" />
        <!-- Perpendicular segment M0 -> H -->
        <line id="svgPerp" x1="0" y1="0" x2="0" y2="0" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3" />
        <!-- Projected point H -->
        <circle id="svgPtH" cx="0" cy="0" r="4" fill="#d97706" />
        <!-- Point M0 -->
        <circle id="svgPtM0" cx="0" cy="0" r="6" fill="#dc2626" />
        <text id="lblM0" x="0" y="0" font-size="11" fill="#dc2626" font-weight="bold">M₀</text>
        <text id="lblH" x="0" y="0" font-size="10" fill="#d97706" font-weight="bold">H</text>
      </svg>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 0.88rem;">
      <div style="margin-bottom: 10px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">Điểm $M_0(x_0; y_0)$:</label>
        <div style="display: flex; gap: 8px;">
          <input type="number" id="inMx" value="2" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
          <input type="number" id="inMy" value="3" step="1" style="width: 50%; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
        </div>
      </div>
      <div style="margin-bottom: 12px;">
        <label style="display: block; font-weight: 600; color: #475569; margin-bottom: 4px;">Đường thẳng $\Delta: ax + by + c = 0$:</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px;">
          <input type="number" id="inLa" value="3" step="1" title="a" style="padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
          <input type="number" id="inLb" value="4" step="1" title="b" style="padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
          <input type="number" id="inLc" value="-5" step="1" title="c" style="padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px;" />
        </div>
      </div>

      <div style="background: #f8fafc; border-radius: 6px; padding: 10px; border: 1px solid #e2e8f0;">
        <div style="font-weight: 700; color: #1e293b; margin-bottom: 4px;">Khoảng cách $d(M_0, \Delta)$:</div>
        <div id="statDist" style="color: #dc2626; font-size: 1.25rem; font-weight: 800; margin-bottom: 6px;">2.60</div>
        <div style="font-size: 0.8rem; color: #64748b;" id="statFormula">|3(2) + 4(3) - 5| / √(3² + 4²)</div>
      </div>
    </div>
  </div>
</div>

<script>
(() => {
  const inMx = document.getElementById('inMx');
  const inMy = document.getElementById('inMy');
  const inLa = document.getElementById('inLa');
  const inLb = document.getElementById('inLb');
  const inLc = document.getElementById('inLc');
  const svgLine = document.getElementById('svgLine');
  const svgPerp = document.getElementById('svgPerp');
  const svgPtM0 = document.getElementById('svgPtM0');
  const svgPtH = document.getElementById('svgPtH');
  const lblM0 = document.getElementById('lblM0');
  const lblH = document.getElementById('lblH');
  const statDist = document.getElementById('statDist');
  const statFormula = document.getElementById('statFormula');

  const ox = 180, oy = 140, scale = 25;

  function toScreen(x, y) {
    return [ox + x * scale, oy - y * scale];
  }

  function update() {
    const x0 = parseFloat(inMx.value) || 0;
    const y0 = parseFloat(inMy.value) || 0;
    let a = parseFloat(inLa.value);
    let b = parseFloat(inLb.value);
    const c = parseFloat(inLc.value) || 0;

    if (isNaN(a)) a = 1;
    if (isNaN(b)) b = 0;
    if (a === 0 && b === 0) { a = 1; inLa.value = 1; }

    // Distance calculation
    const num = Math.abs(a * x0 + b * y0 + c);
    const den = Math.sqrt(a * a + b * b);
    const d = num / den;
    statDist.textContent = d.toFixed(2);
    statFormula.textContent = '|' + a + '(' + x0 + ') + ' + b + '(' + y0 + ') + ' + c + '| / √(' + a + '² + ' + b + '²)';

    // Projection H of M0 onto Delta
    // H = M0 - t * n where t = (a*x0 + b*y0 + c)/(a^2 + b^2)
    const t = (a * x0 + b * y0 + c) / (a * a + b * b);
    const hx = x0 - t * a;
    const hy = y0 - t * b;

    const [smx, smy] = toScreen(x0, y0);
    const [shx, shy] = toScreen(hx, hy);

    svgPtM0.setAttribute('cx', smx);
    svgPtM0.setAttribute('cy', smy);
    lblM0.setAttribute('x', smx + 8);
    lblM0.setAttribute('y', smy - 6);
    lblM0.textContent = 'M₀(' + x0 + ';' + y0 + ')';

    svgPtH.setAttribute('cx', shx);
    svgPtH.setAttribute('cy', shy);
    lblH.setAttribute('x', shx + 8);
    lblH.setAttribute('y', shy + 12);

    svgPerp.setAttribute('x1', smx);
    svgPerp.setAttribute('y1', smy);
    svgPerp.setAttribute('x2', shx);
    svgPerp.setAttribute('y2', shy);

    // Draw line Delta through H with direction (-b, a)
    const ux = -b, uy = a;
    const [lx1, ly1] = toScreen(hx - 15 * ux, hy - 15 * uy);
    const [lx2, ly2] = toScreen(hx + 15 * ux, hy + 15 * uy);
    svgLine.setAttribute('x1', lx1);
    svgLine.setAttribute('y1', ly1);
    svgLine.setAttribute('x2', lx2);
    svgLine.setAttribute('y2', ly2);
  }

  [inMx, inMy, inLa, inLb, inLc].forEach(inp => inp.addEventListener('input', update));
  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Xét vị trí tương đối và tìm giao điểm của hai đường thẳng

#### Phương pháp giải:
Giải hệ phương trình tọa độ giao điểm gồm phương trình của $\Delta_1$ và $\Delta_2$:
- Nếu hệ có nghiệm duy nhất $(x_0; y_0) \implies$ Cắt nhau tại $M(x_0; y_0)$.
- Nếu hệ vô nghiệm $\implies$ Song song.
- Nếu hệ vô số nghiệm $\implies$ Trùng nhau.

#### Bài toán 1
Xét vị trí tương đối và tìm giao điểm (nếu có) của các cặp đường thẳng sau:
1. $\Delta_1: 2x - 3y + 5 = 0$ và $\Delta_2: 4x + y - 11 = 0$.
2. $d_1: x - 2y + 4 = 0$ và $d_2: 2x - 4y - 3 = 0$.

#### Lời giải:
1. Xét hệ phương trình giao điểm của $\Delta_1$ và $\Delta_2$:
   $$\begin{cases} 2x - 3y = -5 \\ 4x + y = 11 \end{cases} \iff \begin{cases} 2x - 3y = -5 \\ 12x + 3y = 33 \end{cases} \iff \begin{cases} 14x = 28 \implies x = 2 \\ y = 11 - 4(2) = 3 \end{cases}$$
   Hệ có nghiệm duy nhất $(2; 3)$.
   **Kết luận:** $\Delta_1$ cắt $\Delta_2$ tại điểm $M(2; 3)$.

2. Xét tỉ số các hệ số của $d_1$ và $d_2$:
   $$\frac{a_1}{a_2} = \frac{1}{2}; \quad \frac{b_1}{b_2} = \frac{-2}{-4} = \frac{1}{2}; \quad \frac{c_1}{c_2} = \frac{4}{-3} = -\frac{4}{3}$$
   Vì $\frac{1}{2} = \frac{1}{2} \ne -\frac{4}{3}$, hệ phương trình tọa độ giao điểm vô nghiệm.
   **Kết luận:** Hai đường thẳng $d_1$ và $d_2$ song song với nhau ($d_1 \parallel d_2$).

---

### Dạng 2: Tính góc giữa hai đường thẳng

#### Phương pháp giải:
Xác định hai VTPT $\vec{n}_1 = (a_1; b_1)$ và $\vec{n}_2 = (a_2; b_2)$. Áp dụng công thức:
$$\cos\varphi = \frac{|a_1 a_2 + b_1 b_2|}{\sqrt{a_1^2 + b_1^2}\sqrt{a_2^2 + b_2^2}}$$
Tra bảng lượng giác hoặc bấm máy tính $\arccos$ để suy ra số đo góc $\varphi \in [0^\circ; 90^\circ]$.

#### Bài toán 2
Tính số đo góc giữa hai đường thẳng:
$$\Delta_1: x - 3y + 2 = 0 \quad \text{và} \quad \Delta_2: 2x - y - 7 = 0$$

#### Lời giải:
- $\Delta_1$ có VTPT $\vec{n}_1 = (1; -3)$. Độ dài $|\vec{n}_1| = \sqrt{1^2 + (-3)^2} = \sqrt{10}$.
- $\Delta_2$ có VTPT $\vec{n}_2 = (2; -1)$. Độ dài $|\vec{n}_2| = \sqrt{2^2 + (-1)^2} = \sqrt{5}$.
- Gọi $\varphi$ là góc giữa $\Delta_1$ và $\Delta_2$:
  $$\cos\varphi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1||\vec{n}_2|} = \frac{|1(2) + (-3)(-1)|}{\sqrt{10} \cdot \sqrt{5}} = \frac{|2 + 3|}{\sqrt{50}} = \frac{5}{5\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$
- Suy ra $\varphi = 45^\circ$.

**Kết luận:** Góc giữa hai đường thẳng bằng $45^\circ$.

---

### Dạng 3: Tính khoảng cách từ điểm đến đường thẳng và giữa hai đường thẳng song song

#### Phương pháp giải:
- $d(M_0, \Delta) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$.
- Khoảng cách giữa 2 đường thẳng song song: $d(\Delta_1, \Delta_2) = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$.

#### Bài toán 3
1. Tính khoảng cách từ điểm $A(1; -2)$ đến đường thẳng $\Delta: 5x - 12y + 7 = 0$.
2. Tính khoảng cách giữa hai đường thẳng song song:
   $$d_1: 3x - 4y + 8 = 0 \quad \text{và} \quad d_2: 3x - 4y - 12 = 0$$

#### Lời giải:
1. Áp dụng công thức khoảng cách:
   $$d(A, \Delta) = \frac{|5(1) - 12(-2) + 7|}{\sqrt{5^2 + (-12)^2}} = \frac{|5 + 24 + 7|}{\sqrt{25 + 144}} = \frac{36}{\sqrt{169}} = \frac{36}{13}$$
2. Hai đường thẳng $d_1$ và $d_2$ song song nhau (cùng có $a = 3, b = -4$):
   $$d(d_1, d_2) = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}} = \frac{|8 - (-12)|}{\sqrt{3^2 + (-4)^2}} = \frac{20}{5} = 4$$

---

### Dạng 4: Lập phương trình đường thẳng thỏa mãn điều kiện góc hoặc khoảng cách

#### Phương pháp giải:
Gọi phương trình đường thẳng cần tìm theo dạng chùm đường thẳng đi qua điểm $M(x_0; y_0)$ có VTPT $\vec{n} = (a; b)$ ($a^2 + b^2 > 0$):
$$a(x - x_0) + b(y - y_0) = 0$$
Dùng điều kiện góc $\cos\varphi$ hoặc khoảng cách $d$ để thiết lập phương trình liên hệ giữa $a$ và $b$, từ đó chọn tỉ lệ $(a; b)$ thích hợp.

#### Bài toán 4
Viết phương trình đường thẳng $d$ đi qua điểm $P(2; 5)$ và cách điểm $Q(5; 1)$ một khoảng bằng 3.

#### Lời giải:
1. Đường thẳng $d$ đi qua $P(2; 5)$ có VTPT $\vec{n} = (a; b)$ ($a^2 + b^2 > 0$):
   $$a(x - 2) + b(y - 5) = 0 \iff ax + by - 2a - 5b = 0$$
2. Khoảng cách từ $Q(5; 1)$ đến $d$ bằng 3:
   $$d(Q, d) = \frac{|a(5) + b(1) - 2a - 5b|}{\sqrt{a^2 + b^2}} = 3 \iff \frac{|3a - 4b|}{\sqrt{a^2 + b^2}} = 3$$
3. Quy đồng và bình phương hai vế:
   $$|3a - 4b| = 3\sqrt{a^2 + b^2} \iff (3a - 4b)^2 = 9(a^2 + b^2)$$
   $$9a^2 - 24ab + 16b^2 = 9a^2 + 9b^2 \iff 7b^2 - 24ab = 0 \iff b(7b - 24a) = 0$$
   - **Trường hợp 1:** $b = 0$. Vì $a^2 + b^2 > 0$, ta chọn $a = 1$.
     Phương trình đường thẳng: $1(x - 2) + 0(y - 5) = 0 \iff x - 2 = 0$.
   - **Trường hợp 2:** $7b - 24a = 0 \iff 7b = 24a$. Chọn $a = 7 \implies b = 24$.
     Phương trình đường thẳng: $7(x - 2) + 24(y - 5) = 0 \iff 7x + 24y - 134 = 0$.

**Kết luận:** Có hai đường thẳng thỏa mãn yêu cầu bài toán là $d_1: x - 2 = 0$ và $d_2: 7x + 24y - 134 = 0$.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Hệ thống dẫn đường hàng hải & Tránh va chạm trên biển (COLREGS):** Hệ thống nhận dạng tự động AIS tính toán khoảng cách tiếp cận gần nhất (CPA - Closest Point of Approach) giữa hai tàu bằng công thức khoảng cách đường thẳng, kịp thời điều chỉnh góc bánh lái để tránh đâm va.
2. **Khai khoáng & Thiết kế hầm lò mỏ than:** Kỹ sư trắc địa dùng công thức góc giữa hai đường thẳng để xác định góc xiên khoan nổ mìn, đảm bảo hai nhánh đường hầm đào từ hai sườn núi gặp nhau chính xác tuyệt đối tại tâm điểm lòng đất.
3. **Mạng lưới cáp viễn thông & Vành đai bảo vệ hành lang an toàn:** Quy chuẩn quốc gia yêu cầu khoảng cách $d$ từ đường dây điện cao thế $500\text{ kV}$ đến mép công trình nhà ở phải lớn hơn khoảng cách phóng điện an toàn ($d \ge 6\text{ m}$).
4. **Thuật toán thị giác máy tính & Phân làn đường ô tô tự lái:** Camera trên xe Tesla nhận diện hai vạch sơn kẻ đường và tính khoảng cách từ tâm xe đến mép làn đường bằng công thức $d(M, \Delta)$, kích hoạt hệ thống giữ làn tự động (Lane Keeping Assist).
5. **Định vị nguồn phát tín hiệu vô tuyến (Triangulation):** Ba trạm thu sóng radar xác định góc phương vị của máy bay địch. Giao điểm của ba đường thẳng định vị vị trí tọa độ của mục tiêu trên bản đồ tác chiến.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q1",
  "question": "Hai đường thẳng $\\Delta_1: 3x - 2y + 1 = 0$ và $\\Delta_2: 2x + 3y - 7 = 0$ có vị trí tương đối là:",
  "options": [
    "Vuông góc với nhau",
    "Song song với nhau",
    "Trùng nhau",
    "Cắt nhau nhưng không vuông góc"
  ],
  "answer": 0,
  "explanation": "Ta có $a_1 a_2 + b_1 b_2 = 3(2) + (-2)(3) = 6 - 6 = 0$. Vậy hai đường thẳng vuông góc với nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q2",
  "question": "Khoảng cách từ điểm $M(1; 2)$ đến đường thẳng $\\Delta: 3x - 4y + 15 = 0$ bằng:",
  "options": [
    "2",
    "10",
    "4",
    "5"
  ],
  "answer": 0,
  "explanation": "$d(M, \\Delta) = \\frac{|3(1) - 4(2) + 15|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 - 8 + 15|}{5} = \\frac{10}{5} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q3",
  "question": "Tọa độ giao điểm của hai đường thẳng $d_1: x - y - 1 = 0$ và $d_2: 2x + y - 5 = 0$ là:",
  "options": [
    "(2; 1)",
    "(1; 2)",
    "(3; 2)",
    "(-1; -2)"
  ],
  "answer": 0,
  "explanation": "Giải hệ: $x - y = 1$ và $2x + y = 5$. Cộng hai vế: $3x = 6 \\implies x = 2 \\implies y = 2 - 1 = 1$. Giao điểm là $(2; 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q4",
  "question": "Góc giữa hai đường thẳng $\\Delta_1: x + \\sqrt{3}y = 0$ và $\\Delta_2: x - \\sqrt{3}y + 2 = 0$ bằng:",
  "options": [
    "60°",
    "30°",
    "45°",
    "90°"
  ],
  "answer": 0,
  "explanation": "$\\cos\\varphi = \\frac{|1(1) + \\sqrt{3}(-\\sqrt{3})|}{\\sqrt{1+3}\\sqrt{1+3}} = \\frac{|1 - 3|}{2 \\times 2} = \\frac{2}{4} = \\frac{1}{2} \\implies \\varphi = 60°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q5",
  "question": "Khoảng cách giữa hai đường thẳng song song $\\Delta_1: 6x + 8y - 11 = 0$ và $\\Delta_2: 6x + 8y + 9 = 0$ là:",
  "options": [
    "2",
    "1",
    "20",
    "4"
  ],
  "answer": 0,
  "explanation": "$d(\\Delta_1, \\Delta_2) = \\frac{|-11 - 9|}{\\sqrt{6^2 + 8^2}} = \\frac{20}{10} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q6",
  "question": "Tìm tham số $m$ để hai đường thẳng $\\Delta_1: mx + y - 2 = 0$ và $\\Delta_2: 4x + 2y + 5 = 0$ song song với nhau:",
  "options": [
    "m = 2",
    "m = -2",
    "m = 4",
    "Không tồn tại m"
  ],
  "answer": 0,
  "explanation": "Hai đường thẳng song song $\\iff \\frac{m}{4} = \\frac{1}{2} \\ne \\frac{-2}{5} \\implies m = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q7",
  "question": "Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $\\Delta: 5x - 12y + 26 = 0$ bằng:",
  "options": [
    "2",
    "13",
    "26",
    "1"
  ],
  "answer": 0,
  "explanation": "$d(O, \\Delta) = \\frac{|26|}{\\sqrt{5^2 + (-12)^2}} = \\frac{26}{13} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q8",
  "question": "Góc giữa hai đường thẳng $d_1: y = 2x + 1$ và $d_2: y = -\\frac{1}{2}x + 3$ bằng:",
  "options": [
    "90°",
    "45°",
    "0°",
    "60°"
  ],
  "answer": 0,
  "explanation": "Tích hai hệ số góc: $k_1 \\cdot k_2 = 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$. Do đó hai đường thẳng vuông góc với nhau, góc bằng 90°."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q9",
  "question": "Bán kính của đường tròn tâm $I(2; 1)$ tiếp xúc với đường thẳng $\\Delta: 3x - 4y + 8 = 0$ bằng:",
  "options": [
    "2",
    "10",
    "5",
    "1"
  ],
  "answer": 0,
  "explanation": "Đường tròn tiếp xúc với đường thẳng nên bán kính $R = d(I, \\Delta) = \\frac{|3(2) - 4(1) + 8|}{\\sqrt{3^2 + 4^2}} = \\frac{|6 - 4 + 8|}{5} = \\frac{10}{5} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b20_q10",
  "question": "Cho tam giác $ABC$ có $A(2; 3)$ và cạnh đối diện $BC$ nằm trên đường thẳng $4x + 3y - 2 = 0$. Độ dài đường cao $AH$ của tam giác $ABC$ bằng:",
  "options": [
    "3",
    "15",
    "5",
    "2"
  ],
  "answer": 0,
  "explanation": "Độ dài đường cao $AH = d(A, BC) = \\frac{|4(2) + 3(3) - 2|}{\\sqrt{4^2 + 3^2}} = \\frac{|8 + 9 - 2|}{5} = \\frac{15}{5} = 3$."
}'></div>

---

## 8. Thử thách thực tế: Dự án Thiết kế Nút giao thông khác mức

Tại một ngã tư lớn ở cửa ngõ thành phố, hai tuyến đường giao nhau có phương trình:
$$\text{Tuyến 1: } 3x - 4y + 12 = 0 \quad \text{và} \quad \text{Tuyến 2: } 4x + 3y - 24 = 0$$
(đơn vị tọa độ tính bằng mét).
1. Chứng minh rằng hai tuyến đường này vuông góc với nhau và tìm tọa độ giao lộ ngã tư $M$.
2. Để giảm ùn tắc, thành phố muốn mở một đường nhánh rẽ nối từ điểm $A(8; 4)$ trên Tuyến 2 đến Tuyến 1 sao cho chiều dài đoạn đường rẽ là ngắn nhất. Tính chiều dài ngắn nhất đó.
