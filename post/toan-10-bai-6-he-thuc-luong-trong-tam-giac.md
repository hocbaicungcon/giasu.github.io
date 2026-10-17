---
title: 'Toán 10 Bài 6: Hệ thức lượng trong tam giác - Định lí Cosin, Sin & Diện tích'
description: 'Lý thuyết chuẩn Toán 10 Bài 6: Định lí côsin, định lí sin, công thức độ dài đường trung tuyến, các công thức tính diện tích tam giác, công thức Heron, giải tam giác thực tế, widget tương tác tam giác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Hệ thức lượng trong tam giác
  - Định lí cosin
  - Định lí sin
  - Công thức Heron
  - Giải tam giác
  - Kết nối tri thức
grade: 10
---

# Bài 6. Hệ thức lượng trong tam giác

Từ hàng nghìn năm trước, các nhà thiên văn học cổ đại đã đo được khoảng cách từ Trái Đất đến Mặt Trăng, các nhà hàng hải vượt đại dương mênh mông mà không bị lạc lối, và ngày nay các vệ tinh GPS định vị chính xác vị trí chiếc điện thoại của bạn đến từng mét.

Bí mật đằng sau những kỳ tích khoa học vĩ đại ấy nằm ở một kỹ thuật hình học mang tên **Tam giác đạc (Triangulation)**. Khi biết một số cạnh và góc của một tam giác, ta hoàn toàn có thể tính toán chính xác tất cả các yếu tố còn lại — từ cạnh, góc, đường cao, trung tuyến cho đến bán kính đường tròn ngoại tiếp và nội tiếp.

Bài học này sẽ trang bị cho các em bộ vũ khí mạnh mẽ nhất của hình học phẳng: **Định lí côsin**, **Định lí sin** và các công thức tính diện tích tam giác kinh điển (đặc biệt là công thức Heron)!

---

## 1. Sơ đồ tư duy toàn diện: Hệ thức lượng trong tam giác

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Định lí Côsin & Trung tuyến</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • $a^2 = b^2 + c^2 - 2bc\cos A$<br>
      • $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$<br>
      • Đường trung tuyến $m_a$:<br>
      &nbsp;&nbsp;$m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}$<br>
      • Dùng khi biết 2 cạnh + góc kẹp giữa (c-g-c) hoặc biết cả 3 cạnh (c-c-c).
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Định lí Sin & Bán kính R</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$<br>
      • Bán kính ngoại tiếp: $R = \frac{a}{2\sin A}$<br>
      • Cạnh qua góc: $a = 2R\sin A$<br>
      • Dùng khi biết 1 cạnh + 2 góc hoặc biết 2 cạnh + 1 góc đối diện.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. 5 công thức Diện tích S</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      1. $S = \frac{1}{2}ah_a$<br>
      2. $S = \frac{1}{2}ab\sin C$<br>
      3. $S = \frac{abc}{4R} \Rightarrow R = \frac{abc}{4S}$<br>
      4. $S = pr \Rightarrow r = \frac{S}{p}$ ($p = \frac{a+b+c}{2}$)<br>
      5. Heron: $S = \sqrt{p(p-a)(p-b)(p-c)}$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Kỹ năng Giải tam giác</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • "Giải tam giác": Tìm tất cả các cạnh và các góc chưa biết.<br>
      • Tổng 3 góc: $\widehat{A} + \widehat{B} + \widehat{C} = 180^\circ$<br>
      • Ứng dụng đo đạc thực tế: chiều cao tháp, khoảng cách vượt sông, định vị tọa độ.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Khi góc $A = 90^\circ$, định lí côsin trở thành định lí quen thuộc nào?**  
   *Đáp án:* Định lí Pythagore: $a^2 = b^2 + c^2$ (vì $\cos 90^\circ = 0$).
2. **Trong tam giác $ABC$, nếu $\cos A < 0$ thì tam giác $ABC$ là tam giác gì?**  
   *Đáp án:* Tam giác tù tại đỉnh $A$ (vì $\cos A < 0 \iff 90^\circ < A < 180^\circ$).
3. **Nếu một tam giác có cạnh $a = 6$ và góc đối diện $\widehat{A} = 30^\circ$, thì bán kính đường tròn ngoại tiếp $R$ bằng bao nhiêu?**  
   *Đáp án:* Theo định lí sin: $2R = \frac{a}{\sin A} = \frac{6}{\sin 30^\circ} = \frac{6}{0,5} = 12 \Rightarrow R = 6$.
4. **Để tính diện tích tam giác khi biết độ dài cả 3 cạnh $a, b, c$, công thức nào là tối ưu nhất?**  
   *Đáp án:* Công thức Heron: $S = \sqrt{p(p-a)(p-b)(p-c)}$.
5. **Bán kính đường tròn nội tiếp $r$ được tính theo diện tích $S$ và nửa chu vi $p$ bằng công thức nào?**  
   *Đáp án:* $r = \frac{S}{p}$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Định lí Côsin

> [!NOTE]
> **ĐỊNH LÍ CÔSIN:**  
> Trong tam giác $ABC$ bất kỳ, với $BC = a, CA = b, AB = c$:
> $$a^2 = b^2 + c^2 - 2bc\cos A$$
> $$b^2 = a^2 + c^2 - 2ac\cos B$$
> $$c^2 = a^2 + b^2 - 2ab\cos C$$

#### Hệ quả tính góc:
Khi biết độ dài cả 3 cạnh của tam giác, ta tính được góc bằng hệ thức:
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$
$$\cos B = \frac{a^2 + c^2 - b^2}{2ac}$$
$$\cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

#### Công thức tính độ dài đường trung tuyến:
Gọi $m_a, m_b, m_c$ lần lượt là độ dài các đường trung tuyến kẻ từ đỉnh $A, B, C$:
$$m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}$$
$$m_b^2 = \frac{2(a^2 + c^2) - b^2}{4}$$
$$m_c^2 = \frac{2(a^2 + b^2) - c^2}{4}$$

---

### 3.2. Định lí Sin

> [!NOTE]
> **ĐỊNH LÍ SIN:**  
> Trong tam giác $ABC$ bất kỳ, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng đường kính của đường tròn ngoại tiếp tam giác:
> $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$
> (trong đó $R$ là bán kính đường tròn ngoại tiếp tam giác).

#### Hệ quả rút ra:
- Tính độ dài cạnh: $a = 2R\sin A, \quad b = 2R\sin B, \quad c = 2R\sin C$.
- Tính sin của góc: $\sin A = \frac{a}{2R}, \quad \sin B = \frac{b}{2R}, \quad \sin C = \frac{c}{2R}$.
- Tỉ lệ giữa các cạnh chính là tỉ lệ giữa các sin: $a : b : c = \sin A : \sin B : \sin C$.

---

### 3.3. Các công thức tính diện tích tam giác

Cho tam giác $ABC$ có độ dài ba cạnh $a, b, c$, chiều cao $h_a, h_b, h_c$, nửa chu vi $p = \frac{a+b+c}{2}$, bán kính ngoại tiếp $R$ và bán kính nội tiếp $r$. Diện tích $S$ được tính bởi một trong 5 công thức sau:

1. **Công thức cổ điển:**
   $$S = \frac{1}{2}ah_a = \frac{1}{2}bh_b = \frac{1}{2}ch_c$$
2. **Công thức qua góc và hai cạnh kề:**
   $$S = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ca\sin B$$
3. **Công thức qua bán kính đường tròn ngoại tiếp $R$:**
   $$S = \frac{abc}{4R} \iff R = \frac{abc}{4S}$$
4. **Công thức qua bán kính đường tròn nội tiếp $r$:**
   $$S = pr \iff r = \frac{S}{p}$$
5. **Công thức Heron (tính khi biết 3 cạnh):**
   $$S = \sqrt{p(p - a)(p - b)(p - c)}$$

---

## 4. Widget tương tác: Bộ giải Tam giác & Hệ thức lượng Trực quan

Kéo 3 đỉnh $A, B, C$ trên khung vẽ bên dưới để quan sát hệ thống tự động giải tam giác, kiểm chứng Định lí Sin, Định lí Cosin và công thức Heron trong thời gian thực:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">📐 Phòng Khám Phá Hệ Thức Lượng Tam Giác</h3>
    <span style="font-size: 0.85rem; color: #64748b; background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">Kéo các đỉnh A, B, C</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Triangle Canvas SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="triSvg" viewBox="0 0 320 240" style="width: 100%; max-width: 330px; height: auto; touch-action: none; cursor: crosshair;">
        <!-- Circumcircle -->
        <circle id="cCircle" cx="160" cy="130" r="80" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4" />
        <!-- Inscribed Circle -->
        <circle id="inCircle" cx="160" cy="130" r="30" fill="#fdf4ff" fill-opacity="0.5" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="2,2" />

        <!-- Triangle fill & edges -->
        <polygon id="triPoly" points="160,30 50,190 270,190" fill="#38bdf8" fill-opacity="0.25" stroke="#0284c7" stroke-width="2.5" />

        <!-- Side labels -->
        <text id="lblSideA" x="160" y="210" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">a = 11.0</text>
        <text id="lblSideB" x="225" y="105" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">b = 9.7</text>
        <text id="lblSideC" x="95" y="105" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">c = 9.7</text>

        <!-- Vertices -->
        <circle id="vA" cx="160" cy="30" r="7" fill="#dc2626" style="cursor: move;" />
        <circle id="vB" cx="50" cy="190" r="7" fill="#16a34a" style="cursor: move;" />
        <circle id="vC" cx="270" cy="190" r="7" fill="#d97706" style="cursor: move;" />

        <text id="txtA" x="160" y="22" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">A</text>
        <text id="txtB" x="36" y="195" font-size="13" font-weight="bold" fill="#16a34a" text-anchor="middle">B</text>
        <text id="txtC" x="285" y="195" font-size="13" font-weight="bold" fill="#d97706" text-anchor="middle">C</text>
      </svg>
    </div>

    <!-- Live Metrics Table -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 8px;">Thông số đo đạc thời gian thực:</div>
      <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Ba cạnh (cm):</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statSides">a=11.0, b=9.7, c=9.7</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Ba góc:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statAngles">A=69°, B=55°, C=55°</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Diện tích S (Heron):</td>
          <td style="padding: 4px 0; font-weight: bold; color: #0284c7; text-align: right;" id="statArea">44.0 cm²</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Bán kính ngoại tiếp R:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #475569; text-align: right;" id="statR">5.9 cm</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #64748b;">Bán kính nội tiếp r:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #ec4899; text-align: right;" id="statr">2.9 cm</td>
        </tr>
      </table>

      <div id="checkLawInfo" style="margin-top: 10px; background: #f0fdf4; border-left: 3px solid #22c55e; padding: 8px; border-radius: 4px; font-size: 0.8rem; color: #166534; line-height: 1.4;">
        • <strong>Định lí Sin:</strong> a/sin A = b/sin B = c/sin C = 2R = 11.8 cm.<br>
        • <strong>Định lí Cosin:</strong> a² = b² + c² - 2bc cos A được nghiệm đúng!
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('triSvg');
  let pts = {
    A: { x: 160, y: 40 },
    B: { x: 60, y: 190 },
    C: { x: 260, y: 190 }
  };
  let activeVertex = null;

  function dist(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  function update() {
    const scale = 20; // 20px = 1cm
    const a = dist(pts.B, pts.C) / scale;
    const b = dist(pts.A, pts.C) / scale;
    const c = dist(pts.A, pts.B) / scale;

    // Angles by Law of Cosines
    let cosA = (b*b + c*c - a*a) / (2*b*c);
    let cosB = (a*a + c*c - b*b) / (2*a*c);
    let cosC = (a*a + b*b - c*c) / (2*a*b);

    cosA = Math.max(-1, Math.min(1, cosA));
    cosB = Math.max(-1, Math.min(1, cosB));
    cosC = Math.max(-1, Math.min(1, cosC));

    const angA = Math.acos(cosA) * 180 / Math.PI;
    const angB = Math.acos(cosB) * 180 / Math.PI;
    const angC = Math.acos(cosC) * 180 / Math.PI;

    // Area by Heron
    const p = (a + b + c) / 2;
    const area = Math.sqrt(Math.max(0, p * (p - a) * (p - b) * (p - c)));
    const R = area > 0 ? (a * b * c) / (4 * area) : 0;
    const r = area > 0 ? area / p : 0;

    // Update DOM
    document.getElementById('triPoly').setAttribute('points', `${pts.A.x},${pts.A.y} ${pts.B.x},${pts.B.y} ${pts.C.x},${pts.C.y}`);
    ['A', 'B', 'C'].forEach(v => {
      document.getElementById('v' + v).setAttribute('cx', pts[v].x);
      document.getElementById('v' + v).setAttribute('cy', pts[v].y);
      document.getElementById('txt' + v).setAttribute('x', pts[v].x);
      document.getElementById('txt' + v).setAttribute('y', pts[v].y < 60 ? pts[v].y - 12 : pts[v].y + 16);
    });

    document.getElementById('lblSideA').setAttribute('x', (pts.B.x + pts.C.x) / 2);
    document.getElementById('lblSideA').setAttribute('y', (pts.B.y + pts.C.y) / 2 + 16);
    document.getElementById('lblSideA').textContent = `a = ${a.toFixed(1)}`;

    document.getElementById('lblSideB').setAttribute('x', (pts.A.x + pts.C.x) / 2 + 16);
    document.getElementById('lblSideB').setAttribute('y', (pts.A.y + pts.C.y) / 2);
    document.getElementById('lblSideB').textContent = `b = ${b.toFixed(1)}`;

    document.getElementById('lblSideC').setAttribute('x', (pts.A.x + pts.B.x) / 2 - 16);
    document.getElementById('lblSideC').setAttribute('y', (pts.A.y + pts.B.y) / 2);
    document.getElementById('lblSideC').textContent = `c = ${c.toFixed(1)}`;

    // Inscribed circle center
    const inX = (a * pts.A.x + b * pts.B.x + c * pts.C.x) / (a + b + c);
    const inY = (a * pts.A.y + b * pts.B.y + c * pts.C.y) / (a + b + c);
    document.getElementById('inCircle').setAttribute('cx', inX);
    document.getElementById('inCircle').setAttribute('cy', inY);
    document.getElementById('inCircle').setAttribute('r', r * scale);

    // Update texts
    document.getElementById('statSides').textContent = `a=${a.toFixed(1)}, b=${b.toFixed(1)}, c=${c.toFixed(1)}`;
    document.getElementById('statAngles').textContent = `A=${Math.round(angA)}°, B=${Math.round(angB)}°, C=${Math.round(angC)}°`;
    document.getElementById('statArea').textContent = `${area.toFixed(1)} cm²`;
    document.getElementById('statR').textContent = `${R.toFixed(1)} cm`;
    document.getElementById('statr').textContent = `${r.toFixed(1)} cm`;

    document.getElementById('checkLawInfo').innerHTML = `
      • <strong>Định lí Sin:</strong> a/sin A ≈ ${(a/Math.sin(angA*Math.PI/180)).toFixed(1)} | 2R ≈ ${(2*R).toFixed(1)}.<br>
      • <strong>Định lí Cosin:</strong> b² + c² - 2bc cos A ≈ ${(b*b + c*c - 2*b*c*cosA).toFixed(1)} | a² ≈ ${(a*a).toFixed(1)}.
    `;
  }

  function getSvgCoords(e) {
    const rect = svg.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: (clientX - rect.left) * (320 / rect.width),
      y: (clientY - rect.top) * (240 / rect.height)
    };
  }

  ['vA', 'vB', 'vC'].forEach((id, idx) => {
    const vName = ['A', 'B', 'C'][idx];
    const el = document.getElementById(id);
    const startDrag = (e) => {
      e.preventDefault();
      activeVertex = vName;
    };
    el.addEventListener('mousedown', startDrag);
    el.addEventListener('touchstart', startDrag, { passive: false });
  });

  const moveDrag = (e) => {
    if (!activeVertex) return;
    e.preventDefault();
    const p = getSvgCoords(e);
    pts[activeVertex].x = Math.max(20, Math.min(300, p.x));
    pts[activeVertex].y = Math.max(20, Math.min(220, p.y));
    update();
  };

  const endDrag = () => { activeVertex = null; };

  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('touchmove', moveDrag, { passive: false });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);

  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Áp dụng định lí Côsin tính cạnh, góc và độ dài đường trung tuyến

#### Phương pháp:
- Biết hai cạnh và góc kẹp giữa ($b, c, \widehat{A}$): Áp dụng công thức $a^2 = b^2 + c^2 - 2bc\cos A \Rightarrow a = \sqrt{b^2 + c^2 - 2bc\cos A}$.
- Biết ba cạnh ($a, b, c$): Tính góc qua $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$.
- Tính trung tuyến kẻ từ $A$: Dùng $m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}$.

---

#### Bài toán 1
Cho tam giác $ABC$ có $AB = 5$, $AC = 8$ và góc $\widehat{A} = 60^\circ$.
1. Tính độ dài cạnh $BC$.
2. Tính góc $\widehat{B}$ và độ dài đường trung tuyến $AM$ kẻ từ đỉnh $A$.

**Lời giải chi tiết:**

1. **Tính độ dài cạnh $BC$:**  
   Đặt $a = BC, b = AC = 8, c = AB = 5$. Theo định lí côsin:
   $$a^2 = b^2 + c^2 - 2bc\cos A = 8^2 + 5^2 - 2(8)(5)\cos 60^\circ$$
   $$a^2 = 64 + 25 - 80 \cdot \frac{1}{2} = 89 - 40 = 49$$
   Suy ra $a = BC = \sqrt{49} = 7$.

2. **Tính góc $\widehat{B}$ và trung tuyến $AM$:**  
   - Theo hệ quả định lí côsin:
     $$\cos B = \frac{a^2 + c^2 - b^2}{2ac} = \frac{7^2 + 5^2 - 8^2}{2(7)(5)} = \frac{49 + 25 - 64}{70} = \frac{10}{70} = \frac{1}{7} \approx 0,1429$$
     Suy ra $\widehat{B} \approx 81^\circ 47'$.
   - Độ dài đường trung tuyến $AM = m_a$:
     $$m_a^2 = \frac{2(b^2 + c^2) - a^2}{4} = \frac{2(8^2 + 5^2) - 7^2}{4} = \frac{2(64 + 25) - 49}{4} = \frac{2(89) - 49}{4} = \frac{129}{4}$$
     Suy ra $AM = \frac{\sqrt{129}}{2} \approx 5,68$.

---

### Dạng 2: Áp dụng định lí Sin tính cạnh, góc và bán kính đường tròn ngoại tiếp $R$

#### Phương pháp:
- Cho tam giác biết 1 cạnh và 2 góc: Tính góc còn lại bằng $180^\circ - (\widehat{A} + \widehat{B})$, sau đó dùng $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ để tính các cạnh còn lại.
- Bán kính đường tròn ngoại tiếp: $R = \frac{a}{2\sin A}$.

---

#### Bài toán 2
Cho tam giác $ABC$ có cạnh $b = 10$, góc $\widehat{B} = 45^\circ$ và góc $\widehat{C} = 60^\circ$.
1. Tính bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.
2. Tính độ dài cạnh $c$ và cạnh $a$.

**Lời giải chi tiết:**

1. **Tính bán kính $R$:**  
   Theo định lí sin:
   $$\frac{b}{\sin B} = 2R \iff 2R = \frac{10}{\sin 45^\circ} = \frac{10}{\frac{\sqrt{2}}{2}} = \frac{20}{\sqrt{2}} = 10\sqrt{2}$$
   Suy ra:
   $$R = 5\sqrt{2} \approx 7,07$$

2. **Tính cạnh $c$ và cạnh $a$:**  
   - Tính cạnh $c$:
     $$\frac{c}{\sin C} = 2R \Rightarrow c = 2R \sin C = 10\sqrt{2} \cdot \sin 60^\circ = 10\sqrt{2} \cdot \frac{\sqrt{3}}{2} = 5\sqrt{6} \approx 12,25$$
   - Tính cạnh $a$:
     Góc $\widehat{A} = 180^\circ - (45^\circ + 60^\circ) = 75^\circ$.  
     Ta có $\sin 75^\circ = \frac{\sqrt{6} + \sqrt{2}}{4}$.  
     $$a = 2R \sin A = 10\sqrt{2} \cdot \left(\frac{\sqrt{6} + \sqrt{2}}{4}\right) = \frac{10(\sqrt{12} + 2)}{4} = \frac{10(2\sqrt{3} + 2)}{4} = 5(\sqrt{3} + 1) \approx 13,66$$

---

### Dạng 3: Tính diện tích tam giác, bán kính nội tiếp $r$ và ngoại tiếp $R$

#### Phương pháp:
- Nếu biết 3 cạnh: Dùng công thức Heron $S = \sqrt{p(p-a)(p-b)(p-c)}$.
- Sau khi có $S$:
  - Tính bán kính nội tiếp: $r = \frac{S}{p}$.
  - Tính bán kính ngoại tiếp: $R = \frac{abc}{4S}$.
  - Tính chiều cao: $h_a = \frac{2S}{a}$.

---

#### Bài toán 3
Cho tam giác $ABC$ có ba cạnh $a = 13, b = 14, c = 15$.
1. Tính diện tích $S$ của tam giác $ABC$.
2. Tính bán kính đường tròn ngoại tiếp $R$, bán kính đường tròn nội tiếp $r$ và đường cao $h_a$ hạ từ đỉnh $A$.

**Lời giải chi tiết:**

1. **Tính diện tích tam giác theo công thức Heron:**  
   Nửa chu vi tam giác:
   $$p = \frac{a + b + c}{2} = \frac{13 + 14 + 15}{2} = \frac{42}{2} = 21$$
   Các hiệu số:
   $$p - a = 21 - 13 = 8$$
   $$p - b = 21 - 14 = 7$$
   $$p - c = 21 - 15 = 6$$
   Diện tích tam giác:
   $$S = \sqrt{p(p - a)(p - b)(p - c)} = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{(3 \cdot 7) \cdot (8) \cdot (7) \cdot (2 \cdot 3)}$$
   $$S = \sqrt{7^2 \cdot 3^2 \cdot 16} = 7 \cdot 3 \cdot 4 = 84$$

2. **Tính $R, r$ và $h_a$:**  
   - Bán kính đường tròn ngoại tiếp $R$:
     $$R = \frac{abc}{4S} = \frac{13 \cdot 14 \cdot 15}{4 \cdot 84} = \frac{2730}{336} = \frac{65}{8} = 8,125$$
   - Bán kính đường tròn nội tiếp $r$:
     $$r = \frac{S}{p} = \frac{84}{21} = 4$$
   - Đường cao $h_a$:
     $$h_a = \frac{2S}{a} = \frac{2 \cdot 84}{13} = \frac{168}{13} \approx 12,92$$

---

### Dạng 4: Giải tam giác trong bài toán đo đạc thực tế (Trắc địa)

#### Phương pháp:
1. Mô hình hóa bài toán thực tế thành hình tam giác.
2. Xác định các yếu tố đã đo được (các cạnh đo được trên mặt đất, các góc đo bằng giác kế / kinh vĩ nghiêng).
3. Sử dụng định lí sin hoặc định lí côsin để tính cạnh cần tìm.

---

#### Bài toán 4
Để đo chiều cao $CD$ của một tòa tháp cao tầng bên bờ sông mà không thể đến chân tháp, hai kỹ sư đứng tại hai điểm $A$ và $B$ trên mặt đất cùng một bờ sông, cách nhau một khoảng $AB = 40$ m.  
Họ dùng giác kế đo được:
- Từ điểm $A$: góc nhìn đỉnh tháp là $\widehat{CAD} = 35^\circ$ và góc nhìn chân tháp hướng sang $B$ là $\widehat{CAB} = 65^\circ$.
- Từ điểm $B$: góc nhìn chân tháp hướng sang $A$ là $\widehat{CBA} = 70^\circ$.
Biết rằng tháp $CD$ vuông góc với mặt đất tại $C$. Hãy tính chiều cao của tháp $CD$ (làm tròn đến hàng phần mười).

**Lời giải chi tiết:**

- Xét tam giác $ABC$ trên mặt đất:
  Góc $\widehat{ACB} = 180^\circ - (\widehat{CAB} + \widehat{CBA}) = 180^\circ - (65^\circ + 70^\circ) = 180^\circ - 135^\circ = 45^\circ$.
- Áp dụng định lí sin trong tam giác $ABC$ để tính khoảng cách $AC$ từ điểm đo $A$ đến chân tháp $C$:
  $$\frac{AC}{\sin \widehat{CBA}} = \frac{AB}{\sin \widehat{ACB}} \iff \frac{AC}{\sin 70^\circ} = \frac{40}{\sin 45^\circ}$$
  $$AC = \frac{40 \cdot \sin 70^\circ}{\sin 45^\circ} = \frac{40 \cdot 0,9397}{0,7071} \approx 53,16 \text{ (m)}$$
- Xét tam giác vuông $ACD$ vuông tại chân tháp $C$:
  Góc nâng nhìn đỉnh tháp là $\widehat{CAD} = 35^\circ$.
  $$CD = AC \cdot \tan \widehat{CAD} \approx 53,16 \cdot \tan 35^\circ \approx 53,16 \cdot 0,7002 \approx 37,2 \text{ (m)}$$
- **Kết luận:** Chiều cao của tháp $CD$ xấp xỉ **37,2 mét**.

---

## 6. Ứng dụng thực tế & Khoa học hiện đại

| Lĩnh vực ứng dụng | Ứng dụng cụ thể của Hệ thức lượng trong tam giác |
| :--- | :--- |
| **Định vị toàn cầu (GPS & Galileo)** | Các vệ tinh thu phát tín hiệu đến máy bay/điện thoại: Khoảng cách giữa máy thu và 3 vệ tinh tạo thành mạng lưới tam giác không gian, định lí côsin giải ra tọa độ kinh độ và vĩ độ chính xác. |
| **Trắc địa & Đo vẽ bản đồ địa hình** | Mạng lưới tam giác đạc quốc gia (Geodetic Triangulation): Các mốc trắc địa trên các đỉnh núi được liên kết thành chuỗi tam giác để lập bản đồ số độ cao. |
| **Hàng không & Quản lý không lưu (ATC)** | Khi hai máy bay bay cùng độ cao theo hai hướng tạo góc $\alpha$, đài kiểm soát không lưu áp dụng định lí côsin: $d = \sqrt{s_1^2 + s_2^2 - 2s_1s_2\cos\alpha}$ để cảnh báo nguy cơ va chạm. |
| **Kỹ thuật cơ khí & Robot học** | Tính toán hành trình của piston trong động cơ đốt trong: Cơ cấu thanh truyền - tay quay tạo thành tam giác biến thiên liên tục góc $\theta$. |
| **Thiết kế mái vòm & Kiến trúc cầu treo** | Giàn không gian tam giác (Truss structure): Định lí sin và côsin giúp kỹ sư tính lực căng trên các dây cáp cầu treo và thanh dầm chịu lực. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q1",
  "question": "Trong tam giác $ABC$, đẳng thức nào sau đây là định lí côsin chính xác?",
  "options": [
    "$a^2 = b^2 + c^2 + 2bc\\cos A$",
    "$a^2 = b^2 + c^2 - 2bc\\cos A$",
    "$a^2 = b^2 + c^2 - 2bc\\sin A$",
    "$a^2 = b^2 + c^2 - bc\\cos A$"
  ],
  "answer": 1,
  "explanation": "Định lí côsin chuẩn: $a^2 = b^2 + c^2 - 2bc\\cos A$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q2",
  "question": "Cho tam giác $ABC$ có $b = 6, c = 8$ và $\\widehat{A} = 60°$. Độ dài cạnh $a$ bằng:",
  "options": [
    "$2\\sqrt{13}$",
    "$10$",
    "$2\\sqrt{37}$",
    "$7$"
  ],
  "answer": 0,
  "explanation": "Theo định lí côsin: $a^2 = 6^2 + 8^2 - 2(6)(8)\\cos 60° = 36 + 64 - 96 \\cdot 0,5 = 100 - 48 = 52 \\Rightarrow a = \\sqrt{52} = 2\\sqrt{13}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q3",
  "question": "Tam giác $ABC$ có $a = 5, b = 7, c = 8$. Số đo góc $\\widehat{B}$ là:",
  "options": [
    "30°",
    "45°",
    "60°",
    "90°"
  ],
  "answer": 2,
  "explanation": "Ta có $\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$. Suy ra $\\widehat{B} = 60°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q4",
  "question": "Cho tam giác $ABC$ có cạnh $a = 10$ và góc đối diện $\\widehat{A} = 45°$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ là:",
  "options": [
    "$5$",
    "$5\\sqrt{2}$",
    "$10\\sqrt{2}$",
    "$10$"
  ],
  "answer": 1,
  "explanation": "Theo định lí sin: $2R = \\frac{a}{\\sin A} = \\frac{10}{\\sin 45°} = \\frac{10}{\\frac{\\sqrt{2}}{2}} = 10\\sqrt{2} \\Rightarrow R = 5\\sqrt{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q5",
  "question": "Công thức nào sau đây KHÔNG PHẢI là công thức tính diện tích tam giác $ABC$?",
  "options": [
    "$S = \\frac{1}{2}ab\\sin C$",
    "$S = \\frac{abc}{4R}$",
    "$S = pr$",
    "$S = \\frac{abc}{4r}$"
  ],
  "answer": 3,
  "explanation": "Công thức đúng qua bán kính ngoại tiếp là $S = \\frac{abc}{4R}$ (không phải chia cho $4r$). Qua bán kính nội tiếp là $S = pr$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q6",
  "question": "Diện tích của tam giác $ABC$ có hai cạnh $b = 4, c = 5$ và góc $\\widehat{A} = 30°$ là:",
  "options": [
    "5",
    "10",
    "$5\\sqrt{3}$",
    "20"
  ],
  "answer": 0,
  "explanation": "Diện tích tam giác: $S = \\frac{1}{2}bc\\sin A = \\frac{1}{2} \\cdot 4 \\cdot 5 \\cdot \\sin 30° = 10 \\cdot \\frac{1}{2} = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q7",
  "question": "Tam giác $ABC$ có 3 cạnh $a = 3, b = 4, c = 5$. Bán kính đường tròn nội tiếp $r$ bằng:",
  "options": [
    "1",
    "2",
    "0,5",
    "1,5"
  ],
  "answer": 0,
  "explanation": "Đây là tam giác vuông tại $A$ ($3^2 + 4^2 = 5^2$). Diện tích $S = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$. Nửa chu vi $p = \\frac{3 + 4 + 5}{2} = 6$. Bán kính nội tiếp $r = \\frac{S}{p} = \\frac{6}{6} = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q8",
  "question": "Tam giác $ABC$ có $b = 8, c = 6$ và $a = 10$. Độ dài đường trung tuyến $m_a$ kẻ từ $A$ bằng:",
  "options": [
    "5",
    "7",
    "4",
    "6"
  ],
  "answer": 0,
  "explanation": "Vì $a^2 = b^2 + c^2$ ($100 = 64 + 36$) nên tam giác vuông tại $A$, cạnh huyền là $a = 10$. Đường trung tuyến ứng với cạnh huyền bằng một nửa cạnh huyền: $m_a = \\frac{a}{2} = 5$. Hoặc dùng công thức: $m_a^2 = \\frac{2(64 + 36) - 100}{4} = \\frac{200 - 100}{4} = 25 \\Rightarrow m_a = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q9",
  "question": "Trong tam giác $ABC$, khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "$\\sin A = \\frac{a}{R}$",
    "$a = R\\sin A$",
    "$a = 2R\\sin A$",
    "$\\frac{a}{\\sin A} = R$"
  ],
  "answer": 2,
  "explanation": "Từ định lí sin $\\frac{a}{\\sin A} = 2R$, ta rút ra được $a = 2R\\sin A$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b6_q10",
  "question": "Một khu đất hình tam giác có 3 cạnh đo được lần lượt là 20 m, 30 m và 40 m. Nửa chu vi $p$ của khu đất là:",
  "options": [
    "90 m",
    "45 m",
    "60 m",
    "30 m"
  ],
  "answer": 1,
  "explanation": "Nửa chu vi $p = \\frac{a + b + c}{2} = \\frac{20 + 30 + 40}{2} = \\frac{90}{2} = 45$ m."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Chứng minh hệ thức lượng trong tam giác)
Chứng minh rằng trong mọi tam giác $ABC$, ta luôn có hệ thức:
$$a = b \cdot \cos C + c \cdot \cos B$$

*Hướng dẫn giải:*
- Theo định lí côsin:
  $$\cos C = \frac{a^2 + b^2 - c^2}{2ab} \quad \text{và} \quad \cos B = \frac{a^2 + c^2 - b^2}{2ac}$$
- Thay vào vế phải:
  $$\text{VP} = b \cdot \left(\frac{a^2 + b^2 - c^2}{2ab}\right) + c \cdot \left(\frac{a^2 + c^2 - b^2}{2ac}\right)$$
  $$\text{VP} = \frac{a^2 + b^2 - c^2}{2a} + \frac{a^2 + c^2 - b^2}{2a} = \frac{2a^2}{2a} = a = \text{VT (đpcm)}$$
*(Ý nghĩa hình học: Đây chính là phép chiếu vuông góc hai cạnh $AC$ và $AB$ lên đường thẳng chứa cạnh $BC$).*

---

### Bài tập 2 (Định vị tàu biển ngoài khơi)
Một trạm hải đăng đặt tại vị trí $A$ quan sát thấy hai tàu đánh cá $B$ và $C$.  
Từ ngọn hải đăng, khoảng cách đến tàu $B$ là $AB = 8$ hải lý, khoảng cách đến tàu $C$ là $AC = 12$ hải lý, và góc nhìn giữa hai tàu là $\widehat{BAC} = 120^\circ$.
1. Tính khoảng cách giữa hai tàu đánh cá $B$ và $C$.
2. Nếu tàu $B$ phát tín hiệu cấp cứu và tàu $C$ lập tức chạy thẳng đến ứng cứu với vận tốc 15 hải lý/giờ thì sau bao lâu (tính theo phút) tàu $C$ sẽ tiếp cận được tàu $B$?

*Hướng dẫn giải:*
1. Khoảng cách giữa hai tàu là độ dài đoạn $BC$. Theo định lí côsin:
   $$BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cdot \cos \widehat{BAC}$$
   $$BC^2 = 8^2 + 12^2 - 2(8)(12)\cos 120^\circ = 64 + 144 - 192 \cdot \left(-\frac{1}{2}\right)$$
   $$BC^2 = 208 + 96 = 304$$
   Suy ra:
   $$BC = \sqrt{304} = 4\sqrt{19} \approx 17,44 \text{ (hải lý)}$$
2. Thời gian để tàu $C$ di chuyển đến vị trí tàu $B$:
   $$t = \frac{s}{v} = \frac{17,44}{15} \approx 1,1624 \text{ (giờ)}$$
   Đổi sang phút: $1,1624 \times 60 \approx 69,7$ phút (tức khoảng 1 giờ 10 phút).
