---
title: 'Toán 10 Bài 11: Tích vô hướng của hai vectơ - Góc & Biểu thức tọa độ'
description: 'Lý thuyết chuẩn Toán 10 Bài 11: Góc giữa hai vectơ, định nghĩa tích vô hướng, bình phương vô hướng, biểu thức tọa độ của tích vô hướng, công thức góc và điều kiện vuông góc, widget tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Vectơ
  - Tích vô hướng
  - Góc giữa hai vectơ
  - Biểu thức tọa độ
  - Kết nối tri thức
grade: 10
---

# Bài 11. Tích vô hướng của hai vectơ

Trong cơ học, khi bạn kéo một chiếc hòm trượt trên mặt sàn bằng một sợi dây hợp với mặt sàn một góc $\alpha$, lực kéo $\vec{F}$ sinh ra một công cơ học $A$. Công này chỉ phụ thuộc vào thành phần lực chiếu theo phương dịch chuyển $\vec{s}$, và được tính bằng công thức nổi tiếng:
$$A = |\vec{F}| \cdot |\vec{s}| \cdot \cos\alpha$$

Để toán học hóa hiện tượng vật lý quan trọng này, các nhà toán học đã xây dựng nên phép toán nhân hai vectơ cho ra kết quả là một số thực: **Tích vô hướng (Dot Product / Scalar Product)**.

Tích vô hướng là một trong những công cụ toán học quyền năng nhất của đại số tuyến tính:
- Là thước đo góc chính xác giữa hai đối tượng trong không gian.
- Kiểm tra tính vuông góc tức thì: $\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$.
- Là linh hồn của công nghệ Trí tuệ nhân tạo hiện đại (thuật toán đo độ tương đồng Cosine Similarity trong các mô hình ngôn ngữ lớn LLM như ChatGPT hay Gemini)!

---

## 1. Sơ đồ tư duy: Tích vô hướng của hai vectơ

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Góc giữa hai vectơ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Ký hiệu: $(\vec{a}, \vec{b})$ với $0^\circ \le (\vec{a}, \vec{b}) \le 180^\circ$.<br>
      • Dựng từ chung một gốc $O$: $\vec{OA} = \vec{a}, \vec{OB} = \vec{b} \Rightarrow (\vec{a}, \vec{b}) = \widehat{AOB}$.<br>
      • Hai vectơ cùng hướng: góc bằng $0^\circ$.<br>
      • Hai vectơ ngược hướng: góc bằng $180^\circ$.<br>
      • Hai vectơ vuông góc: góc bằng $90^\circ$ ($\vec{a} \perp \vec{b}$).
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Định nghĩa Tích vô hướng</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$<br>
      • Kết quả là một <strong>số thực</strong>.<br>
      • <strong>Bình phương vô hướng:</strong> $\vec{a}^2 = |\vec{a}|^2$.<br>
      • <strong>Điều kiện vuông góc:</strong><br>
      &nbsp;&nbsp;$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Biểu thức Tọa độ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      Cho $\vec{u}(x; y)$ và $\vec{v}(x'; y')$:<br>
      • <strong>Tích vô hướng:</strong> $\vec{u} \cdot \vec{v} = x x' + y y'$<br>
      • <strong>Độ dài:</strong> $|\vec{u}| = \sqrt{x^2 + y^2}$<br>
      • <strong>Góc:</strong> $\cos(\vec{u}, \vec{v}) = \frac{x x' + y y'}{\sqrt{x^2 + y^2}\sqrt{x'^2 + y'^2}}$<br>
      • <strong>Vuông góc:</strong> $\vec{u} \perp \vec{v} \iff x x' + y y' = 0$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Hằng đẳng thức vectơ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • $(\vec{a} + \vec{b})^2 = \vec{a}^2 + 2\vec{a}\vec{b} + \vec{b}^2$<br>
      • $(\vec{a} - \vec{b})^2 = \vec{a}^2 - 2\vec{a}\vec{b} + \vec{b}^2$<br>
      • $(\vec{a} + \vec{b})(\vec{a} - \vec{b}) = \vec{a}^2 - \vec{b}^2$<br>
      • Chứng minh vuông góc, tính khoảng cách cực nhanh.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Tích vô hướng của hai vectơ là một vectơ hay một số thực?**  
   *Đáp án:* Là một số thực (đại lượng vô hướng), không có mũi tên hay hướng.
2. **Nếu góc giữa hai vectơ là góc nhọn thì tích vô hướng mang dấu gì?**  
   *Đáp án:* Dấu dương ($> 0$), vì khi góc nhọn thì $\cos\alpha > 0$.
3. **Khi nào thì tích vô hướng $\vec{a} \cdot \vec{b} = 0$ (với $\vec{a}, \vec{b} \ne \vec{0}$)?**  
   *Đáp án:* Khi hai vectơ vuông góc với nhau ($\cos 90^\circ = 0$).
4. **Bình phương vô hướng $\vec{a}^2$ bằng gì?**  
   *Đáp án:* Bằng bình phương độ dài của nó: $\vec{a}^2 = |\vec{a}|^2$.
5. **Cho $\vec{u} = (1; 2)$ và $\vec{v} = (4; -2)$. Tính nhanh tích vô hướng $\vec{u} \cdot \vec{v}$?**  
   *Đáp án:* Hoành nhân hoành cộng tung nhân tung: $1(4) + 2(-2) = 4 - 4 = 0$ (hai vectơ này vuông góc nhau!).

---

## 3. Lý thuyết trọng tâm

### 3.1. Góc giữa hai vectơ

Cho hai vectơ $\vec{a}$ và $\vec{b}$ đều khác vectơ-không $\vec{0}$.  
Từ một điểm $O$ bất kỳ, dựng $\vec{OA} = \vec{a}$ và $\vec{OB} = \vec{b}$.  
Góc $\widehat{AOB}$ với số đo từ $0^\circ$ đến $180^\circ$ được gọi là **góc giữa hai vectơ $\vec{a}$ và $\vec{b}$**, ký hiệu là $(\vec{a}, \vec{b})$.

- Quy ước: Nếu $\vec{a} = \vec{0}$ hoặc $\vec{b} = \vec{0}$ thì góc giữa chúng có thể nhận số đo tùy ý từ $0^\circ$ đến $180^\circ$.
- Khi $(\vec{a}, \vec{b}) = 90^\circ$, ta nói $\vec{a}$ và $\vec{b}$ **vuông góc** với nhau, ký hiệu là $\vec{a} \perp \vec{b}$.
- Hai vectơ cùng hướng có góc bằng $0^\circ$, hai vectơ ngược hướng có góc bằng $180^\circ$.

---

### 3.2. Định nghĩa tích vô hướng của hai vectơ

> [!NOTE]
> **ĐỊNH NGHĨA TÍCH VÔ HƯỚNG:**  
> Tích vô hướng của hai vectơ $\vec{a}$ và $\vec{b}$ là một số thực, ký hiệu là $\vec{a} \cdot \vec{b}$ (hoặc $\vec{a}\vec{b}$), được xác định bởi công thức:
> $$\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$$
> Nếu ít nhất một trong hai vectơ là $\vec{0}$ thì $\vec{a} \cdot \vec{b} = 0$.

#### Các trường hợp đặc biệt:
1. **Bình phương vô hướng:** Tích vô hướng của vectơ $\vec{a}$ với chính nó được gọi là bình phương vô hướng của $\vec{a}$, ký hiệu $\vec{a}^2$:
   $$\vec{a}^2 = |\vec{a}| \cdot |\vec{a}| \cdot \cos 0^\circ = |\vec{a}|^2$$
   *(Bình phương vô hướng của một vectơ luôn bằng bình phương độ dài của vectơ đó).*
2. **Dấu của tích vô hướng:**
   - $\vec{a} \cdot \vec{b} > 0 \iff (\vec{a}, \vec{b})$ là góc nhọn ($< 90^\circ$).
   - $\vec{a} \cdot \vec{b} < 0 \iff (\vec{a}, \vec{b})$ là góc tù ($> 90^\circ$).
   - $\vec{a} \cdot \vec{b} = 0 \iff \vec{a} \perp \vec{b}$ (hoặc một trong hai vectơ bằng $\vec{0}$).

#### Các tính chất của tích vô hướng:
Với ba vectơ $\vec{a}, \vec{b}, \vec{c}$ và số thực $k$:
- Giao hoán: $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$
- Phân phối: $\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$
- Kết hợp với số: $(k\vec{a}) \cdot \vec{b} = k(\vec{a} \cdot \vec{b}) = \vec{a} \cdot (k\vec{b})$
- Hằng đẳng thức:
  $$(\vec{a} + \vec{b})^2 = \vec{a}^2 + 2\vec{a}\vec{b} + \vec{b}^2$$
  $$(\vec{a} - \vec{b})^2 = \vec{a}^2 - 2\vec{a}\vec{b} + \vec{b}^2$$
  $$(\vec{a} + \vec{b})(\vec{a} - \vec{b}) = \vec{a}^2 - \vec{b}^2$$

---

### 3.3. Biểu thức tọa độ của tích vô hướng

> [!NOTE]
> Trong mặt phẳng tọa độ $Oxy$, cho $\vec{u} = (x; y)$ và $\vec{v} = (x'; y')$:
> 1. **Tích vô hướng:**
>    $$\vec{u} \cdot \vec{v} = x x' + y y'$$
> 2. **Độ dài vectơ:**
>    $$|\vec{u}| = \sqrt{x^2 + y^2}$$
> 3. **Côsin của góc giữa hai vectơ:**
>    $$\cos(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{x x' + y y'}{\sqrt{x^2 + y^2} \cdot \sqrt{x'^2 + y'^2}}$$
> 4. **Điều kiện vuông góc:**
>    $$\vec{u} \perp \vec{v} \iff x x' + y y' = 0$$

---

## 4. Widget tương tác: Phòng Thí Nghiệm Tích Vô Hướng Động

Kéo đầu mút của hai vectơ $\vec{u}$ và $\vec{v}$ để quan sát góc $\theta$, giá trị $\cos\theta$ và tích vô hướng $x x' + y y'$ biến thiên theo thời gian thực:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">⚡ Máy Tính Tích Vô Hướng Trực Quan</h3>
    <div style="font-weight: 700; font-size: 1.1rem; color: #0284c7;">
      u · v = <span id="dotDisplay">24.00</span>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Canvas SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="dotSvg" viewBox="-120 -120 240 240" style="width: 100%; max-width: 320px; height: auto; touch-action: none; cursor: crosshair;">
        <defs>
          <marker id="arrUdot" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
          </marker>
          <marker id="arrVdot" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
          </marker>
        </defs>

        <!-- Coordinate axes -->
        <g stroke="#cbd5e1" stroke-width="1.2">
          <line x1="-110" y1="0" x2="110" y2="0" />
          <line x1="0" y1="110" x2="0" y2="-110" />
        </g>
        <text x="100" y="15" font-size="10" fill="#64748b">x</text>
        <text x="6" y="-100" font-size="10" fill="#64748b">y</text>

        <!-- Angle Arc Sector -->
        <path id="arcSector" d="M 0,0" fill="#fef08a" fill-opacity="0.5" stroke="#ca8a04" stroke-width="1.5" />

        <!-- Vector u -->
        <line id="lineUdot" x1="0" y1="0" x2="80" y2="0" stroke="#2563eb" stroke-width="3" marker-end="url(#arrUdot)" />
        <!-- Vector v -->
        <line id="lineVdot" x1="0" y1="0" x2="50" y2="-70" stroke="#dc2626" stroke-width="3" marker-end="url(#arrVdot)" />

        <!-- Origin O -->
        <circle cx="0" cy="0" r="4.5" fill="#0f172a" />
        <text x="-12" y="14" font-size="10" fill="#0f172a">O</text>

        <!-- Handle U -->
        <circle id="hUdot" cx="80" cy="0" r="6" fill="#2563eb" style="cursor: move;" />
        <text id="lblUdot" x="85" y="16" font-size="12" font-weight="bold" fill="#2563eb">u(4;0)</text>

        <!-- Handle V -->
        <circle id="hVdot" cx="50" cy="-70" r="6" fill="#dc2626" style="cursor: move;" />
        <text id="lblVdot" x="55" y="-75" font-size="12" font-weight="bold" fill="#dc2626">v(2.5;3.5)</text>

        <!-- Angle Text -->
        <text id="lblAng" x="15" y="-15" font-size="10" font-weight="bold" fill="#854d0e">54°</text>
      </svg>
    </div>

    <!-- Live Metrics Table -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 8px;">Thông số tích vô hướng:</div>
      <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #2563eb; font-weight: 600;">Vectơ u = (x; y):</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statUVal">(4.0; 0.0)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #dc2626; font-weight: 600;">Vectơ v = (x'; y'):</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statVVal">(2.5; 3.5)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #475569;">Góc θ = (u, v):</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statTheta">54°</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #475569;">cos θ:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statCos">0.5878</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #0284c7; font-weight: 700; font-size: 0.95rem;">Tích vô hướng u · v:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #0284c7; font-size: 1.05rem; text-align: right;" id="statDot">10.00</td>
        </tr>
      </table>

      <div id="dotStatusMsg" style="margin-top: 10px; background: #eff6ff; border-left: 3px solid #3b82f6; padding: 8px; border-radius: 4px; font-size: 0.8rem; color: #1e40af; line-height: 1.4;">
        • Góc nhọn ($θ < 90^\circ$): Tích vô hướng mang dấu DƯƠNG (+).<br>
        • Công thức: $\vec{u} \cdot \vec{v} = xx' + yy' = |\vec{u}||\vec{v}|\cos\theta$.
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('dotSvg');
  const scale = 20; // 20px = 1 unit
  let u = { x: 4, y: 0 };
  let v = { x: 2.5, y: 3.5 };
  let activeHandle = null;

  // Keep a vector label inside the drawing area: flip it to the left of the tip near the right edge.
  function placeLabel(id, sx, sy, dy) {
    const el = document.getElementById(id), flip = sx > 35;
    el.setAttribute('x', flip ? sx - 8 : sx + 8);
    el.setAttribute('y', Math.max(-104, Math.min(112, sy + dy)));
    el.setAttribute('text-anchor', flip ? 'end' : 'start');
  }

  function update() {
    const sxU = u.x * scale, syU = -u.y * scale;
    const sxV = v.x * scale, syV = -v.y * scale;

    const lenU = Math.hypot(u.x, u.y);
    const lenV = Math.hypot(v.x, v.y);
    const dot = u.x * v.x + u.y * v.y;

    let cosTheta = (lenU * lenV > 0) ? (dot / (lenU * lenV)) : 1;
    cosTheta = Math.max(-1, Math.min(1, cosTheta));
    const angDeg = Math.round(Math.acos(cosTheta) * 180 / Math.PI);

    // Update lines and handles
    document.getElementById('lineUdot').setAttribute('x2', sxU);
    document.getElementById('lineUdot').setAttribute('y2', syU);
    document.getElementById('hUdot').setAttribute('cx', sxU);
    document.getElementById('hUdot').setAttribute('cy', syU);
    placeLabel('lblUdot', sxU, syU, 14);
    document.getElementById('lblUdot').textContent = `u(${u.x.toFixed(1)}; ${u.y.toFixed(1)})`;

    document.getElementById('lineVdot').setAttribute('x2', sxV);
    document.getElementById('lineVdot').setAttribute('y2', syV);
    document.getElementById('hVdot').setAttribute('cx', sxV);
    document.getElementById('hVdot').setAttribute('cy', syV);
    placeLabel('lblVdot', sxV, syV, -6);
    document.getElementById('lblVdot').textContent = `v(${v.x.toFixed(1)}; ${v.y.toFixed(1)})`;

    // Angle text and arc
    document.getElementById('lblAng').textContent = `${angDeg}°`;
    const arcR = 30;
    const a1 = Math.atan2(syU, sxU);
    const a2 = Math.atan2(syV, sxV);
    const p1x = arcR * Math.cos(a1), p1y = arcR * Math.sin(a1);
    const p2x = arcR * Math.cos(a2), p2y = arcR * Math.sin(a2);
    document.getElementById('arcSector').setAttribute('d', `M 0,0 L ${p1x},${p1y} A ${arcR},${arcR} 0 0,${a2 < a1 ? 0 : 1} ${p2x},${p2y} Z`);

    // Metrics table
    document.getElementById('dotDisplay').textContent = dot.toFixed(2);
    document.getElementById('statUVal').textContent = `(${u.x.toFixed(1)}; ${u.y.toFixed(1)})`;
    document.getElementById('statVVal').textContent = `(${v.x.toFixed(1)}; ${v.y.toFixed(1)})`;
    document.getElementById('statTheta').textContent = `${angDeg}°`;
    document.getElementById('statCos').textContent = cosTheta.toFixed(4);
    document.getElementById('statDot').textContent = dot.toFixed(2);

    const msg = document.getElementById('dotStatusMsg');
    if (Math.abs(dot) < 0.05) {
      msg.style.background = '#f0fdf4';
      msg.style.borderLeftColor = '#22c55e';
      msg.style.color = '#166534';
      msg.innerHTML = '★ <strong>VUÔNG GÓC (u ⊥ v):</strong> Tích vô hướng bằng 0!';
    } else if (dot > 0) {
      msg.style.background = '#eff6ff';
      msg.style.borderLeftColor = '#3b82f6';
      msg.style.color = '#1e40af';
      msg.innerHTML = '• Góc nhọn ($θ < 90^\circ$): Tích vô hướng mang dấu DƯƠNG (+).';
    } else {
      msg.style.background = '#fef2f2';
      msg.style.borderLeftColor = '#ef4444';
      msg.style.color = '#991b1b';
      msg.innerHTML = '• Góc tù ($θ > 90^\circ$): Tích vô hướng mang dấu ÂM (-).';
    }
  }

  function getMathCoords(e) {
    const rect = svg.getBoundingClientRect();
    const cx = e.clientX || (e.touches && e.touches[0].clientX);
    const cy = e.clientY || (e.touches && e.touches[0].clientY);
    const svgX = Math.max(-112, Math.min(112, (cx - rect.left) * (240 / rect.width) - 120));
    const svgY = Math.max(-112, Math.min(112, (cy - rect.top) * (240 / rect.height) - 120));
    return {
      x: Math.round((svgX / scale) * 2) / 2,
      y: Math.round((-svgY / scale) * 2) / 2
    };
  }

  document.getElementById('hUdot').addEventListener('mousedown', () => { activeHandle = 'U'; });
  document.getElementById('hUdot').addEventListener('touchstart', (e) => { e.preventDefault(); activeHandle = 'U'; }, { passive: false });
  document.getElementById('hVdot').addEventListener('mousedown', () => { activeHandle = 'V'; });
  document.getElementById('hVdot').addEventListener('touchstart', (e) => { e.preventDefault(); activeHandle = 'V'; }, { passive: false });

  window.addEventListener('mousemove', (e) => {
    if (!activeHandle) return;
    const m = getMathCoords(e);
    if (activeHandle === 'U') { u.x = m.x; u.y = m.y; }
    else { v.x = m.x; v.y = m.y; }
    update();
  });
  window.addEventListener('touchmove', (e) => {
    if (!activeHandle) return;
    e.preventDefault();
    const m = getMathCoords(e);
    if (activeHandle === 'U') { u.x = m.x; u.y = m.y; }
    else { v.x = m.x; v.y = m.y; }
    update();
  }, { passive: false });

  const endDrag = () => { activeHandle = null; };
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);

  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Tính tích vô hướng của hai vectơ bằng định nghĩa

#### Phương pháp:
1. Xác định độ dài hai vectơ: $|\vec{a}|$ và $|\vec{b}|$.
2. Xác định góc giữa hai vectơ bằng cách đưa về chung gốc $O$: $(\vec{a}, \vec{b})$.
3. Áp dụng công thức: $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$.

---

#### Bài toán 1
Cho tam giác đều $ABC$ cạnh $a$, có chiều cao $AH$ hạ từ đỉnh $A$. Tính các tích vô hướng sau:
1. $\vec{AB} \cdot \vec{AC}$
2. $\vec{AC} \cdot \vec{CB}$
3. $\vec{AH} \cdot \vec{BC}$

**Lời giải chi tiết:**

1. **Tính $\vec{AB} \cdot \vec{AC}$:**  
   Hai vectơ chung gốc $A$, góc $(\vec{AB}, \vec{AC}) = \widehat{BAC} = 60^\circ$.  
   Độ dài: $|\vec{AB}| = |\vec{AC}| = a$.  
   $$\vec{AB} \cdot \vec{AC} = |\vec{AB}| \cdot |\vec{AC}| \cdot \cos 60^\circ = a \cdot a \cdot \frac{1}{2} = \frac{a^2}{2}$$

2. **Tính $\vec{AC} \cdot \vec{CB}$:**  
   Đưa về chung gốc $C$: $\vec{AC} = -\vec{CA}$.  
   $$\vec{AC} \cdot \vec{CB} = (-\vec{CA}) \cdot \vec{CB} = -(\vec{CA} \cdot \vec{CB})$$
   Góc $(\vec{CA}, \vec{CB}) = \widehat{BCA} = 60^\circ$.  
   Do đó:
   $$\vec{AC} \cdot \vec{CB} = -(a \cdot a \cdot \cos 60^\circ) = -\frac{a^2}{2}$$

3. **Tính $\vec{AH} \cdot \vec{BC}$:**  
   Vì tam giác $ABC$ đều nên đường cao $AH$ vuông góc với cạnh đáy $BC$:
   $$AH \perp BC \iff \vec{AH} \perp \vec{BC}$$
   Theo tính chất vuông góc của tích vô hướng:
   $$\vec{AH} \cdot \vec{BC} = 0$$

---

### Dạng 2: Tính tích vô hướng và góc bằng biểu thức tọa độ

#### Phương pháp:
Cho $\vec{u} = (x; y)$ và $\vec{v} = (x'; y')$:
- $\vec{u} \cdot \vec{v} = x x' + y y'$.
- $\cos(\vec{u}, \vec{v}) = \frac{x x' + y y'}{\sqrt{x^2 + y^2}\sqrt{x'^2 + y'^2}}$.

---

#### Bài toán 2
Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(1; 2), B(-2; 6), C(9; 8)$.
1. Tính tích vô hướng $\vec{AB} \cdot \vec{AC}$.
2. Tính góc $\widehat{BAC}$ của tam giác $ABC$.

**Lời giải chi tiết:**

1. **Tính tọa độ hai vectơ:**
   - $\vec{AB} = (-2 - 1; 6 - 2) = (-3; 4)$
   - $\vec{AC} = (9 - 1; 8 - 2) = (8; 6)$
   Tích vô hướng:
   $$\vec{AB} \cdot \vec{AC} = (-3)(8) + 4(6) = -24 + 24 = 0$$

2. **Tính góc $\widehat{BAC}$:**  
   Vì $\vec{AB} \cdot \vec{AC} = 0$, hai vectơ $\vec{AB}$ và $\vec{AC}$ vuông góc với nhau.  
   Suy ra tam giác $ABC$ vuông tại đỉnh $A$, tức:
   $$\widehat{BAC} = 90^\circ$$

---

### Dạng 3: Chứng minh hai đường thẳng vuông góc hoặc tìm tham số $m$

#### Phương pháp:
- Hai đường thẳng $AB \perp CD \iff \vec{AB} \cdot \vec{CD} = 0 \iff x_{AB} x_{CD} + y_{AB} y_{CD} = 0$.
- Thiết lập phương trình theo tham số $m$ và giải tìm $m$.

---

#### Bài toán 3
Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\vec{u} = (m - 1; 2)$ và $\vec{v} = (3; m + 4)$.
1. Tìm $m$ để hai vectơ $\vec{u}$ và $\vec{v}$ vuông góc với nhau.
2. Với $m = 2$, hãy tính độ dài của vectơ $\vec{w} = \vec{u} - 2\vec{v}$.

**Lời giải chi tiết:**

1. **Tìm $m$ để $\vec{u} \perp \vec{v}$:**
   $$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$$
   $$\iff (m - 1)(3) + 2(m + 4) = 0$$
   $$\iff 3m - 3 + 2m + 8 = 0 \iff 5m + 5 = 0 \iff 5m = -5 \iff m = -1$$
   Vậy với $m = -1$ thì $\vec{u} \perp \vec{v}$.

2. **Với $m = 2$:**
   - $\vec{u} = (2 - 1; 2) = (1; 2)$
   - $\vec{v} = (3; 2 + 4) = (3; 6)$
   - Vectơ $\vec{w} = \vec{u} - 2\vec{v} = (1 - 2(3); 2 - 2(6)) = (1 - 6; 2 - 12) = (-5; -10)$
   Độ dài của vectơ $\vec{w}$:
   $$|\vec{w}| = \sqrt{(-5)^2 + (-10)^2} = \sqrt{25 + 100} = \sqrt{125} = 5\sqrt{5}$$

---

### Dạng 4: Ứng dụng tích vô hướng chứng minh đẳng thức hình học

#### Phương pháp:
- Sử dụng công thức phân tích vectơ và biến đổi bằng bình phương vô hướng.
- Nhớ: $AB^2 = \vec{AB}^2 = (\vec{AC} - \vec{BC})^2$.

---

#### Bài toán 4
Cho tam giác $ABC$. Gọi $M$ là trung điểm của cạnh $BC$.
Bằng phương pháp vectơ, hãy chứng minh công thức độ dài đường trung tuyến:
$$AM^2 = \frac{2(AB^2 + AC^2) - BC^2}{4}$$

**Lời giải chi tiết:**

- Vì $M$ là trung điểm của $BC$, theo tính chất trung điểm:
  $$\vec{AM} = \frac{1}{2}(\vec{AB} + \vec{AC})$$
- Bình phương vô hướng hai vế:
  $$AM^2 = \vec{AM}^2 = \left[\frac{1}{2}(\vec{AB} + \vec{AC})\right]^2 = \frac{1}{4}(\vec{AB}^2 + 2\vec{AB}\vec{AC} + \vec{AC}^2)$$
  $$AM^2 = \frac{1}{4}(AB^2 + AC^2 + 2\vec{AB}\vec{AC}) \quad (1)$$
- Mặt khác, xét vectơ $\vec{BC} = \vec{AC} - \vec{AB}$. Bình phương vô hướng:
  $$BC^2 = \vec{BC}^2 = (\vec{AC} - \vec{AB})^2 = AC^2 + AB^2 - 2\vec{AB}\vec{AC}$$
  Suy ra:
  $$2\vec{AB}\vec{AC} = AB^2 + AC^2 - BC^2 \quad (2)$$
- Thay $(2)$ vào $(1)$:
  $$AM^2 = \frac{1}{4}\left[AB^2 + AC^2 + (AB^2 + AC^2 - BC^2)\right] = \frac{2(AB^2 + AC^2) - BC^2}{4} \text{ (đpcm)}$$

---

## 6. Ứng dụng khoa học & Trí tuệ nhân tạo (AI)

| Lĩnh vực ứng dụng | Sức mạnh phi thường của Tích vô hướng (Dot Product) |
| :--- | :--- |
| **Trí tuệ nhân tạo (Cosine Similarity)** | Các hệ thống tìm kiếm thông minh và LLM đo mức độ tương đồng giữa câu hỏi và tài liệu: $\cos\theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \|\vec{v}\|}$. Giá trị $\cos\theta \approx 1$ nghĩa là hai văn bản có cùng ý nghĩa. |
| **Đồ họa máy tính & Game 3D (Backface Culling)** | Loại bỏ mặt khuất: Nhân tích vô hướng giữa vector pháp tuyến bề mặt $\vec{n}$ và vector hướng nhìn $\vec{v}$. Nếu $\vec{n} \cdot \vec{v} > 0$, mặt phẳng quay lưng về phía camera và không cần vẽ (tiết kiệm GPU). |
| **Vật lý cơ học (Công & Công suất)** | Công cơ học $A = \vec{F} \cdot \vec{s}$. Công suất tức thời $P = \vec{F} \cdot \vec{v}$ (tích vô hướng của lực kéo và vận tốc). |
| **Xử lý tín hiệu & Âm thanh (Audio Convolution)** | Lọc tiếng ồn và nhận diện giọng nói: Tích vô hướng của chuỗi sóng âm với bộ lọc số học (Dot product matching). |
| **Mạng nơ-ron nhân tạo (Neural Network Layer)** | Phép toán cốt lõi của mọi tế bào nơ-ron nhân tạo: $y = \sigma(\vec{W} \cdot \vec{X} + b)$ (tích vô hướng giữa ma trận trọng số $\vec{W}$ và dữ liệu đầu vào $\vec{X}$). |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q1",
  "question": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ khác $\\vec{0}$. Công thức nào sau đây diễn đạt ĐÚNG định nghĩa tích vô hướng?",
  "options": [
    "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\vec{a}, \\vec{b})$",
    "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$",
    "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}|$",
    "$\\vec{a} \\cdot \\vec{b} = |\\vec{a} + \\vec{b}|$"
  ],
  "answer": 1,
  "explanation": "Định nghĩa chuẩn: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q2",
  "question": "Cho tam giác đều $ABC$ có cạnh bằng $a$. Giá trị của tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
  "options": [
    "$a^2$",
    "$\\frac{a^2}{2}$",
    "$-\\frac{a^2}{2}$",
    "$\\frac{a^2\\sqrt{3}}{2}$"
  ],
  "answer": 1,
  "explanation": "Góc $(\\vec{AB}, \\vec{AC}) = 60°$. Do đó $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60° = \\frac{a^2}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q3",
  "question": "Cho hình vuông $ABCD$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AD}$ bằng:",
  "options": [
    "$a^2$",
    "$0$",
    "$a^2\\sqrt{2}$",
    "$-a^2$"
  ],
  "answer": 1,
  "explanation": "Vì $ABCD$ là hình vuông nên $AB \\perp AD \\iff (\\vec{AB}, \\vec{AD}) = 90°$. Vì $\\cos 90° = 0$ nên tích vô hướng bằng 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q4",
  "question": "Trong mặt phẳng tọa độ $Oxy$, cho $\\vec{u} = (2; -3)$ và $\\vec{v} = (5; 4)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
  "options": [
    "$-2$",
    "$22$",
    "$2$",
    "$-22$"
  ],
  "answer": 0,
  "explanation": "$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 2(5) + (-3)(4) = 10 - 12 = -2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q5",
  "question": "Cho hai vectơ $\\vec{a} = (1; 3)$ và $\\vec{b} = (-6; 2)$. Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng:",
  "options": [
    "0°",
    "45°",
    "90°",
    "180°"
  ],
  "answer": 2,
  "explanation": "Tính tích vô hướng: $\\vec{a} \\cdot \\vec{b} = 1(-6) + 3(2) = -6 + 6 = 0$. Vì tích vô hướng bằng 0 nên hai vectơ vuông góc nhau, góc bằng 90°."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q6",
  "question": "Tìm $m$ để hai vectơ $\\vec{u} = (m; 2)$ và $\\vec{v} = (3; -6)$ vuông góc với nhau:",
  "options": [
    "$m = 4$",
    "$m = -4$",
    "$m = 1$",
    "$m = 9$"
  ],
  "answer": 0,
  "explanation": "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff 3m + 2(-6) = 0 \\iff 3m = 12 \\iff m = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q7",
  "question": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ thỏa mãn $|\\vec{a}| = 3, |\\vec{b}| = 4$ và góc giữa chúng bằng 60°. Độ dài của vectơ $|\\vec{a} + \\vec{b}|$ bằng:",
  "options": [
    "5",
    "7",
    "$\\sqrt{37}$",
    "$\\sqrt{13}$"
  ],
  "answer": 2,
  "explanation": "$|\\vec{a} + \\vec{b}|^2 = \\vec{a}^2 + 2\\vec{a}\\vec{b} + \\vec{b}^2 = 3^2 + 2(3)(4)\\cos 60° + 4^2 = 9 + 12 + 16 = 37 \\Rightarrow |\\vec{a} + \\vec{b}| = \\sqrt{37}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q8",
  "question": "Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 1), B(4; 1), C(1; 5)$. Tam giác $ABC$ là tam giác gì?",
  "options": [
    "Tam giác đều",
    "Tam giác cân tại B",
    "Tam giác vuông tại A",
    "Tam giác tù"
  ],
  "answer": 2,
  "explanation": "$\\vec{AB} = (3; 0)$ và $\\vec{AC} = (0; 4)$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 3(0) + 0(4) = 0$. Do đó tam giác vuông tại A."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q9",
  "question": "Một vật chịu tác dụng của một lực kéo $F = 50$ N dịch chuyển một quãng đường $s = 10$ m theo phương hợp với hướng của lực một góc 60°. Công cơ học thực hiện được là:",
  "options": [
    "500 J",
    "250 J",
    "$250\\sqrt{3}$ J",
    "100 J"
  ],
  "answer": 1,
  "explanation": "Công $A = F \\cdot s \\cdot \\cos 60° = 50 \\times 10 \\times 0,5 = 250$ J."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b11_q10",
  "question": "Khẳng định nào sau đây luôn ĐÚNG với mọi cặp vectơ $\\vec{a}, \\vec{b}$?",
  "options": [
    "$(\\vec{a} \\cdot \\vec{b})^2 = \\vec{a}^2 \\cdot \\vec{b}^2$",
    "$|\\vec{a} \\cdot \\vec{b}| \\le |\\vec{a}| \\cdot |\\vec{b}|$",
    "$\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c} \\implies \\vec{b} = \\vec{c}$",
    "$\\vec{a}^2 = \\vec{a}$"
  ],
  "answer": 1,
  "explanation": "Bất đẳng thức Cauchy-Schwarz cho tích vô hướng: $|\\vec{a} \\cdot \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot |\\cos\\theta| \\le |\\vec{a}| \\cdot |\\vec{b}|$ (vì $|\\cos\\theta| \\le 1$)."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Tìm trực tâm tam giác bằng tích vô hướng)
Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có các đỉnh $A(1; 3), B(-2; 1), C(4; -1)$.
1. Tìm tọa độ trực tâm $H(x; y)$ của tam giác $ABC$.
2. Kiểm tra xem điểm $H$ có trùng với điểm nào trong ba đỉnh không.

*Hướng dẫn giải:*
1. Trực tâm $H$ là giao điểm của ba đường cao, tức $AH \perp BC$ và $BH \perp AC$:
   - $\vec{AH} = (x - 1; y - 3)$ và $\vec{BC} = (4 - (-2); -1 - 1) = (6; -2)$.
   - $\vec{BH} = (x + 2; y - 1)$ và $\vec{AC} = (4 - 1; -1 - 3) = (3; -4)$.
   Hệ phương trình vuông góc:
   $$\left\{\begin{array}{l} \vec{AH} \cdot \vec{BC} = 0 \\ \vec{BH} \cdot \vec{AC} = 0 \end{array}\right. \iff \left\{\begin{array}{l} 6(x - 1) - 2(y - 3) = 0 \\ 3(x + 2) - 4(y - 1) = 0 \end{array}\right.$$
   $$\iff \left\{\begin{array}{l} 6x - 6 - 2y + 6 = 0 \\ 3x + 6 - 4y + 4 = 0 \end{array}\right. \iff \left\{\begin{array}{l} 6x - 2y = 0 \Rightarrow y = 3x \\ 3x - 4(3x) + 10 = 0 \end{array}\right.$$
   $$-9x + 10 = 0 \iff x = \frac{10}{9} \Rightarrow y = 3\left(\frac{10}{9}\right) = \frac{10}{3}$$
   Vậy trực tâm là $H\left(\frac{10}{9}; \frac{10}{3}\right)$.
2. Tọa độ $H$ hoàn toàn khác với $A(1; 3), B(-2; 1), C(4; -1)$, tam giác $ABC$ là tam giác nhọn (hoặc tù không vuông).

---

### Bài tập 2 (Khoa học máy tính - Cosine Similarity)
Trong một hệ thống gợi ý bài viết AI, nội dung của hai bài viết được biểu diễn bởi hai vectơ đặc trưng:
$$\vec{d}_1 = (3; 2; 0; 5) \quad \text{và} \quad \vec{d}_2 = (1; 0; 2; 4)$$
1. Hãy tính tích vô hướng $\vec{d}_1 \cdot \vec{d}_2$ và độ dài của mỗi vectơ.
2. Tính độ tương đồng cosin (Cosine Similarity) giữa hai bài viết:
   $$\text{Sim}(\vec{d}_1, \vec{d}_2) = \frac{\vec{d}_1 \cdot \vec{d}_2}{|\vec{d}_1| \cdot |\vec{d}_2|}$$
   Nếu hệ thống quy định hai bài viết có liên quan chặt chẽ khi $\text{Sim} \ge 0,8$, hãy cho biết hai bài viết trên có được xếp vào cùng một chủ đề không?

*Hướng dẫn giải:*
1. Tính toán tích vô hướng mở rộng trong không gian 4 chiều:
   $$\vec{d}_1 \cdot \vec{d}_2 = 3(1) + 2(0) + 0(2) + 5(4) = 3 + 0 + 0 + 20 = 23$$
   Độ dài:
   $$|\vec{d}_1| = \sqrt{3^2 + 2^2 + 0^2 + 5^2} = \sqrt{9 + 4 + 0 + 25} = \sqrt{38} \approx 6,1644$$
   $$|\vec{d}_2| = \sqrt{1^2 + 0^2 + 2^2 + 4^2} = \sqrt{1 + 0 + 4 + 16} = \sqrt{21} \approx 4,5826$$
2. Độ tương đồng Cosine:
   $$\text{Sim}(\vec{d}_1, \vec{d}_2) = \frac{23}{\sqrt{38} \cdot \sqrt{21}} = \frac{23}{\sqrt{798}} \approx \frac{23}{28,2489} \approx 0,8142$$
   Vì $0,8142 > 0,8$, hệ thống kết luận hai bài viết này **có liên quan chặt chẽ** và sẽ được xếp vào cùng một chủ đề gợi ý cho người đọc!
