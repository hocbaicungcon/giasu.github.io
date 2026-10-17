---
title: 'Toán 10 Bài 8: Tổng và hiệu của hai vectơ - Quy tắc tam giác & Hình bình hành'
description: 'Lý thuyết chuẩn Toán 10 Bài 8: Quy tắc ba điểm (tam giác), quy tắc hình bình hành, vectơ đối, phép trừ hai vectơ, tính chất trung điểm và trọng tâm, ứng dụng hợp lực vật lý, widget cộng vectơ tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Vectơ
  - Tổng hai vectơ
  - Hiệu hai vectơ
  - Quy tắc hình bình hành
  - Quy tắc ba điểm
  - Kết nối tri thức
grade: 10
---

# Bài 8. Tổng và hiệu của hai vectơ

Hãy tưởng tượng một chiếc thuyền đang nỗ lực chèo thẳng sang bờ bên kia của một con sông với vận tốc $4\text{ m/s}$, trong khi dòng nước chảy xiết cuốn ngang chiếc thuyền với vận tốc $3\text{ m/s}$.  
Chiếc thuyền sẽ di chuyển theo hướng nào và với tốc độ thực tế là bao nhiêu?
- Nếu cộng đại số thông thường: $4 + 3 = 7\text{ m/s}$? Sai hoàn toàn!
- Thực tế, chiếc thuyền bị đẩy trôi theo đường chéo với vận tốc $\sqrt{4^2 + 3^2} = 5\text{ m/s}$!

Phép cộng trong thế giới vectơ không đơn thuần là phép cộng hai con số vô hướng. Nó là sự phối hợp đồng thời của cả **độ lớn** và **phương hướng** trong không gian.

Trong bài học này, chúng ta sẽ khám phá hai quy tắc hình học bất hủ: **Quy tắc ba điểm (Tam giác)** và **Quy tắc hình bình hành**, cùng kỹ thuật tính hiệu hai vectơ và các tính chất tuyệt đẹp về trung điểm và trọng tâm!

---

## 1. Sơ đồ tư duy toàn diện: Tổng và hiệu của hai vectơ

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Phép cộng vectơ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • <strong>Quy tắc tam giác (nối đuôi):</strong><br>
      &nbsp;&nbsp;$\vec{AB} + \vec{BC} = \vec{AC}$<br>
      • <strong>Quy tắc hình bình hành (chung gốc):</strong><br>
      &nbsp;&nbsp;Nếu $ABCD$ là HBH thì $\vec{AB} + \vec{AD} = \vec{AC}$<br>
      • Giao hoán: $\vec{a} + \vec{b} = \vec{b} + \vec{a}$<br>
      • Kết hợp: $(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$<br>
      • Cộng với $\vec{0}$: $\vec{a} + \vec{0} = \vec{a}$.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Phép trừ vectơ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • <strong>Vectơ đối:</strong> $-\vec{a}$ có cùng độ lớn, ngược hướng với $\vec{a}$.<br>
      &nbsp;&nbsp;$\vec{a} + (-\vec{a}) = \vec{0}$ và $-\vec{AB} = \vec{BA}$<br>
      • <strong>Quy tắc trừ (chung gốc):</strong><br>
      &nbsp;&nbsp;$\vec{OB} - \vec{OA} = \vec{AB}$<br>
      &nbsp;&nbsp;$\vec{AB} - \vec{AC} = \vec{CB}$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Hai tính chất vàng</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • <strong>Trung điểm $I$ của $AB$:</strong><br>
      &nbsp;&nbsp;$\vec{IA} + \vec{IB} = \vec{0}$<br>
      &nbsp;&nbsp;$\vec{MA} + \vec{MB} = 2\vec{MI}$ (với mọi điểm $M$)<br>
      • <strong>Trọng tâm $G$ của $\triangle ABC$:</strong><br>
      &nbsp;&nbsp;$\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$<br>
      &nbsp;&nbsp;$\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Bất đẳng thức tam giác</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • Với mọi vectơ $\vec{a}, \vec{b}$:<br>
      &nbsp;&nbsp;$\big| |\vec{a}| - |\vec{b}| \big| \le |\vec{a} + \vec{b}| \le |\vec{a}| + |\vec{b}|$<br>
      • Dấu "$=$" xảy ra bên phải khi $\vec{a}, \vec{b}$ cùng hướng.<br>
      • Dấu "$=$" xảy ra bên trái khi $\vec{a}, \vec{b}$ ngược hướng.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Tổng $\vec{MN} + \vec{NP}$ bằng vectơ nào?**  
   *Đáp án:* Bằng $\vec{MP}$ (theo quy tắc ba điểm).
2. **Hiệu $\vec{AB} - \vec{AC}$ bằng vectơ nào?**  
   *Đáp án:* Bằng $\vec{CB}$ (quy tắc trừ chung gốc $A$).
3. **Vectơ đối của vectơ $\vec{EF}$ là gì?**  
   *Đáp án:* Là vectơ $-\vec{EF} = \vec{FE}$.
4. **Hai lực $\vec{F}_1$ và $\vec{F}_2$ cùng có độ lớn 10 N tác dụng vào một chất điểm theo hai hướng vuông góc nhau. Hợp lực có độ lớn bằng bao nhiêu?**  
   *Đáp án:* Theo quy tắc hình bình hành (ở đây là hình vuông): $F = \sqrt{10^2 + 10^2} = 10\sqrt{2} \approx 14,14$ N.
5. **Cho tam giác $ABC$ có trọng tâm $G$. Tổng $\vec{GA} + \vec{GB} + \vec{GC}$ bằng bao nhiêu?**  
   *Đáp án:* Bằng vectơ-không $\vec{0}$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Tổng của hai vectơ & Quy tắc cộng

Cho hai vectơ $\vec{a}$ và $\vec{b}$. Lấy một điểm $A$ tùy ý, vẽ $\vec{AB} = \vec{a}$ và từ điểm $B$ vẽ $\vec{BC} = \vec{b}$.  
Vectơ $\vec{AC}$ được gọi là **tổng của hai vectơ $\vec{a}$ và $\vec{b}$**, ký hiệu là $\vec{a} + \vec{b}$.
$$\vec{a} + \vec{b} = \vec{AB} + \vec{BC} = \vec{AC}$$

#### Quy tắc 1: Quy tắc ba điểm (Quy tắc tam giác)
Với ba điểm bất kỳ $A, B, C$, ta luôn có:
$$\vec{AB} + \vec{BC} = \vec{AC}$$

*(Mẹo nhớ: Điểm cuối của vectơ thứ nhất trùng với điểm đầu của vectơ thứ hai, kết quả nối từ đầu mút đầu tiên đến đầu mút cuối cùng).*

#### Quy tắc 2: Quy tắc hình bình hành
Nếu tứ giác $ABCD$ là hình bình hành thì:
$$\vec{AB} + \vec{AD} = \vec{AC}$$

*(Mẹo nhớ: Tổng của hai vectơ chung gốc nằm trên hai cạnh kề của hình bình hành bằng vectơ đường chéo xuất phát từ gốc đó).*

#### Các tính chất của phép cộng vectơ:
1. **Tính chất giao hoán:** $\vec{a} + \vec{b} = \vec{b} + \vec{a}$
2. **Tính chất kết hợp:** $(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$
3. **Tính chất cộng với vectơ-không:** $\vec{a} + \vec{0} = \vec{0} + \vec{a} = \vec{a}$

---

### 3.2. Hiệu của hai vectơ & Quy tắc trừ

#### Vectơ đối:
- Vectơ có cùng độ dài nhưng ngược hướng với vectơ $\vec{a}$ được gọi là **vectơ đối** của $\vec{a}$, ký hiệu là $-\vec{a}$.
- Tổng của hai vectơ đối nhau luôn bằng vectơ-không:
  $$\vec{a} + (-\vec{a}) = \vec{0}$$
- Đặc biệt: $-\vec{AB} = \vec{BA}$ và $-\vec{0} = \vec{0}$.

#### Hiệu của hai vectơ:
- Hiệu của vectơ $\vec{a}$ và vectơ $\vec{b}$ là tổng của $\vec{a}$ với vectơ đối của $\vec{b}$:
  $$\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$$

#### Quy tắc trừ (Quy tắc chung gốc):
Với ba điểm bất kỳ $O, A, B$, ta luôn có:
$$\vec{OB} - \vec{OA} = \vec{AB}$$
hoặc:
$$\vec{AB} - \vec{AC} = \vec{CB}$$

*(Mẹo nhớ: Hai vectơ chung gốc trừ nhau sẽ bằng vectơ nối từ ngọn của vectơ trừ sang ngọn của vectơ bị trừ).*

---

### 3.3. Tính chất trung điểm và trọng tâm

> [!NOTE]
> **TÍNH CHẤT TRUNG ĐIỂM:**  
> Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi:
> $$\vec{IA} + \vec{IB} = \vec{0}$$
> Với mọi điểm $M$ tùy ý trong mặt phẳng, ta luôn có:
> $$\vec{MA} + \vec{MB} = 2\vec{MI}$$

> [!NOTE]
> **TÍNH CHẤT TRỌNG TÂM:**  
> Điểm $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi:
> $$\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$$
> Với mọi điểm $M$ tùy ý trong mặt phẳng, ta luôn có:
> $$\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$$

---

## 4. Widget tương tác: Mô phỏng Cộng Vectơ & Hình Bình Hành Hợp Lực

Kéo các điểm ngọn của hai vectơ $\vec{u}$ và $\vec{v}$ để quan sát vectơ tổng $\vec{w} = \vec{u} + \vec{v}$ tự động cập nhật theo quy tắc hình bình hành:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">⚡ Mô Phỏng Hợp Lực Hình Bình Hành</h3>
    <span style="font-size: 0.85rem; color: #475569; background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">Kéo đầu mút của vectơ u (xanh) hoặc v (đỏ)</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Canvas SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="addVecSvg" viewBox="0 0 320 240" style="width: 100%; max-width: 340px; height: auto; touch-action: none; cursor: crosshair;">
        <defs>
          <marker id="arrU" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
          </marker>
          <marker id="arrV" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
          </marker>
          <marker id="arrW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
          </marker>
        </defs>

        <!-- Parallelogram dotted edges -->
        <polygon id="paraPoly" points="50,190 170,190 250,70 130,70" fill="#f0fdf4" fill-opacity="0.4" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />

        <!-- Vector u (from O to U) -->
        <line id="lineU" x1="50" y1="190" x2="170" y2="190" stroke="#2563eb" stroke-width="3" marker-end="url(#arrU)" />
        <!-- Vector v (from O to V) -->
        <line id="lineV" x1="50" y1="190" x2="130" y2="70" stroke="#dc2626" stroke-width="3" marker-end="url(#arrV)" />
        <!-- Sum Vector w = u + v (diagonal) -->
        <line id="lineW" x1="50" y1="190" x2="250" y2="70" stroke="#16a34a" stroke-width="3.5" marker-end="url(#arrW)" />

        <!-- Origin O -->
        <circle cx="50" cy="190" r="5" fill="#0f172a" />
        <text x="36" y="205" font-size="12" font-weight="bold" fill="#0f172a">O</text>

        <!-- Handle U -->
        <circle id="hU" cx="170" cy="190" r="7" fill="#2563eb" style="cursor: move;" />
        <text id="lblU" x="175" y="205" font-size="12" font-weight="bold" fill="#2563eb">u</text>

        <!-- Handle V -->
        <circle id="hV" cx="130" cy="70" r="7" fill="#dc2626" style="cursor: move;" />
        <text id="lblV" x="120" y="60" font-size="12" font-weight="bold" fill="#dc2626">v</text>

        <!-- Handle W (Sum) -->
        <circle id="hW" cx="250" cy="70" r="5" fill="#16a34a" />
        <text id="lblW" x="255" y="65" font-size="13" font-weight="bold" fill="#16a34a">w = u + v</text>
      </svg>
    </div>

    <!-- Live Metrics Table -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 8px;">Thông số đo đạc lực tổng hợp:</div>
      <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #2563eb; font-weight: 600;">Độ lớn lực |u|:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="valLenU">120.0 N</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #dc2626; font-weight: 600;">Độ lớn lực |v|:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="valLenV">144.2 N</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #475569;">Góc giữa hai lực (u, v):</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="valAngUV">56°</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #16a34a; font-weight: 700; font-size: 0.95rem;">Hợp lực |u + v|:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #16a34a; font-size: 1.05rem; text-align: right;" id="valLenW">233.2 N</td>
        </tr>
      </table>

      <div style="margin-top: 10px; background: #f0fdf4; border-left: 3px solid #16a34a; padding: 8px; border-radius: 4px; font-size: 0.8rem; color: #166534; line-height: 1.4;">
        • <strong>Định luật hình bình hành:</strong> Đường chéo màu xanh lá thể hiện hợp lực tổng hợp $\vec{w} = \vec{u} + \vec{v}$.<br>
        • Công thức độ lớn: $|\vec{w}|^2 = |\vec{u}|^2 + |\vec{v}|^2 + 2|\vec{u}||\vec{v}|\cos(\vec{u}, \vec{v})$.
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('addVecSvg');
  const O = { x: 50, y: 190 };
  let ptU = { x: 170, y: 190 };
  let ptV = { x: 130, y: 70 };
  let activeHandle = null;

  function update() {
    const ux = ptU.x - O.x, uy = ptU.y - O.y;
    const vx = ptV.x - O.x, vy = ptV.y - O.y;
    const wx = ux + vx, wy = uy + vy;
    const ptW = { x: O.x + wx, y: O.y + wy };

    const lenU = Math.hypot(ux, uy);
    const lenV = Math.hypot(vx, vy);
    const lenW = Math.hypot(wx, wy);

    // Angle between u and v
    let dot = ux * vx + uy * vy;
    let cosAng = (lenU * lenV > 0) ? (dot / (lenU * lenV)) : 1;
    cosAng = Math.max(-1, Math.min(1, cosAng));
    const angDeg = Math.round(Math.acos(cosAng) * 180 / Math.PI);

    // SVG elements update
    document.getElementById('paraPoly').setAttribute('points', `${O.x},${O.y} ${ptU.x},${ptU.y} ${ptW.x},${ptW.y} ${ptV.x},${ptV.y}`);

    document.getElementById('lineU').setAttribute('x2', ptU.x);
    document.getElementById('lineU').setAttribute('y2', ptU.y);
    document.getElementById('hU').setAttribute('cx', ptU.x);
    document.getElementById('hU').setAttribute('cy', ptU.y);
    document.getElementById('lblU').setAttribute('x', ptU.x + 8);
    document.getElementById('lblU').setAttribute('y', ptU.y + 15);

    document.getElementById('lineV').setAttribute('x2', ptV.x);
    document.getElementById('lineV').setAttribute('y2', ptV.y);
    document.getElementById('hV').setAttribute('cx', ptV.x);
    document.getElementById('hV').setAttribute('cy', ptV.y);
    document.getElementById('lblV').setAttribute('x', ptV.x - 14);
    document.getElementById('lblV').setAttribute('y', ptV.y - 8);

    document.getElementById('lineW').setAttribute('x2', ptW.x);
    document.getElementById('lineW').setAttribute('y2', ptW.y);
    document.getElementById('hW').setAttribute('cx', ptW.x);
    document.getElementById('hW').setAttribute('cy', ptW.y);
    document.getElementById('lblW').setAttribute('x', ptW.x + 8);
    document.getElementById('lblW').setAttribute('y', ptW.y - 6);

    // Metrics text
    document.getElementById('valLenU').textContent = `${lenU.toFixed(1)} N`;
    document.getElementById('valLenV').textContent = `${lenV.toFixed(1)} N`;
    document.getElementById('valAngUV').textContent = `${angDeg}°`;
    document.getElementById('valLenW').textContent = `${lenW.toFixed(1)} N`;
  }

  function getCoords(e) {
    const rect = svg.getBoundingClientRect();
    const cx = e.clientX || (e.touches && e.touches[0].clientX);
    const cy = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: Math.max(8, Math.min(312, (cx - rect.left) * (320 / rect.width))),
      y: Math.max(8, Math.min(232, (cy - rect.top) * (240 / rect.height)))
    };
  }

  document.getElementById('hU').addEventListener('mousedown', () => { activeHandle = 'U'; });
  document.getElementById('hU').addEventListener('touchstart', (e) => { e.preventDefault(); activeHandle = 'U'; }, { passive: false });
  document.getElementById('hV').addEventListener('mousedown', () => { activeHandle = 'V'; });
  document.getElementById('hV').addEventListener('touchstart', (e) => { e.preventDefault(); activeHandle = 'V'; }, { passive: false });

  window.addEventListener('mousemove', (e) => {
    if (!activeHandle) return;
    const p = getCoords(e);
    if (activeHandle === 'U') { ptU.x = Math.max(10, Math.min(310, p.x)); ptU.y = Math.max(10, Math.min(230, p.y)); }
    else { ptV.x = Math.max(10, Math.min(310, p.x)); ptV.y = Math.max(10, Math.min(230, p.y)); }
    update();
  });
  window.addEventListener('touchmove', (e) => {
    if (!activeHandle) return;
    e.preventDefault();
    const p = getCoords(e);
    if (activeHandle === 'U') { ptU.x = Math.max(10, Math.min(310, p.x)); ptU.y = Math.max(10, Math.min(230, p.y)); }
    else { ptV.x = Math.max(10, Math.min(310, p.x)); ptV.y = Math.max(10, Math.min(230, p.y)); }
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

### Dạng 1: Rút gọn biểu thức vectơ bằng quy tắc ba điểm và quy tắc hình bình hành

#### Phương pháp:
- Nhóm các vectơ "nối đuôi" nhau: $\vec{AB} + \vec{BC} = \vec{AC}$.
- Đổi dấu trừ thành cộng với vectơ đối: $-\vec{XY} = \vec{YX}$.
- Nhóm các vectơ chung gốc tạo thành đường chéo hình bình hành: $\vec{AB} + \vec{AD} = \vec{AC}$.
- Sử dụng tính chất triệt tiêu của vectơ đối: $\vec{AB} + \vec{BA} = \vec{AA} = \vec{0}$.

---

#### Bài toán 1
Rút gọn các biểu thức vectơ sau:
1. $\vec{u} = \vec{AB} + \vec{CD} + \vec{BC} + \vec{DA}$
2. Cho 4 điểm tùy ý $A, B, C, D$. Rút gọn biểu thức $\vec{v} = \vec{AB} - \vec{AD} + \vec{CD} - \vec{CB}$.

**Lời giải chi tiết:**

1. Áp dụng tính chất giao hoán và kết hợp của phép cộng vectơ:
   $$\vec{u} = (\vec{AB} + \vec{BC}) + (\vec{CD} + \vec{DA})$$
   Áp dụng quy tắc ba điểm:
   $$\vec{u} = \vec{AC} + \vec{CA} = \vec{AA} = \vec{0}$$
   Vậy $\vec{u} = \vec{0}$.

2. Biến đổi biểu thức $\vec{v}$:
   - Áp dụng quy tắc trừ chung gốc: $\vec{AB} - \vec{AD} = \vec{DB}$.
   - Áp dụng quy tắc trừ chung gốc: $\vec{CD} - \vec{CB} = \vec{BD}$.
   - Do đó:
     $$\vec{v} = \vec{DB} + \vec{BD} = \vec{DD} = \vec{0}$$
   Vậy $\vec{v} = \vec{0}$.

---

### Dạng 2: Tính độ dài của vectơ tổng và vectơ hiệu

#### Phương pháp:
1. **Bước 1:** Dựng và rút gọn vectơ tổng hoặc hiệu thành **một vectơ duy nhất**, ví dụ: $\vec{u} = \vec{AB} + \vec{AD} = \vec{AC}$ (với $ABCD$ là hình bình hành).
2. **Bước 2:** Tính độ dài đoạn thẳng tương ứng bằng các định lí hình học (Pythagore, lượng giác, định lí côsin).

---

#### Bài toán 2
Cho hình thoi $ABCD$ có tâm $O$, cạnh $a$ và góc $\widehat{BAD} = 60^\circ$. Tính độ dài của các vectơ sau:
1. $\vec{u} = \vec{AB} + \vec{AD}$
2. $\vec{v} = \vec{AB} - \vec{AD}$

**Lời giải chi tiết:**

1. **Tính độ dài $|\vec{u}| = |\vec{AB} + \vec{AD}|$:**  
   Vì $ABCD$ là hình thoi (cũng là hình bình hành) nên theo quy tắc hình bình hành:
   $$\vec{AB} + \vec{AD} = \vec{AC}$$
   Suy ra $|\vec{u}| = |\vec{AC}| = AC$.  
   Vì hình thoi có cạnh $a$ và $\widehat{BAD} = 60^\circ$, tam giác $ABD$ là tam giác đều cạnh $a \Rightarrow BD = a$.  
   Đoạn $OB = \frac{BD}{2} = \frac{a}{2}$.  
   Tam giác $OAB$ vuông tại $O$, theo định lí Pythagore:
   $$OA = \sqrt{AB^2 - OB^2} = \sqrt{a^2 - \left(\frac{a}{2}\right)^2} = \frac{a\sqrt{3}}{2}$$
   Độ dài đường chéo $AC = 2 \cdot OA = a\sqrt{3}$.  
   Vậy $|\vec{u}| = a\sqrt{3}$.

2. **Tính độ dài $|\vec{v}| = |\vec{AB} - \vec{AD}|$:**  
   Theo quy tắc trừ chung gốc:
   $$\vec{AB} - \vec{AD} = \vec{DB}$$
   Suy ra $|\vec{v}| = |\vec{DB}| = DB = a$.  
   Vậy $|\vec{v}| = a$.

---

### Dạng 3: Chứng minh đẳng thức vectơ

#### Phương pháp:
- **Biến đổi vế này thành vế kia:** Chèn điểm thích hợp vào giữa bằng quy tắc ba điểm ($\vec{XY} = \vec{XO} + \vec{OY}$ hoặc $\vec{XY} = \vec{AY} - \vec{AX}$).
- **Quy về tính chất trung điểm và trọng tâm:**
  - $I$ là trung điểm $AB \iff \vec{IA} + \vec{IB} = \vec{0}$.
  - $G$ là trọng tâm $\triangle ABC \iff \vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$.

---

#### Bài toán 3
Cho bốn điểm bất kỳ $A, B, C, D$. Gọi $I$ và $K$ lần lượt là trung điểm của hai đoạn thẳng $AB$ và $CD$.
1. Chứng minh rằng $\vec{AC} + \vec{BD} = 2\vec{IK}$.
2. Gọi $G$ là trung điểm của đoạn thẳng $IK$. Chứng minh rằng $\vec{GA} + \vec{GB} + \vec{GC} + \vec{GD} = \vec{0}$.

**Lời giải chi tiết:**

1. **Chứng minh $\vec{AC} + \vec{BD} = 2\vec{IK}$:**  
   Chèn các điểm $I$ và $K$ vào các vectơ ở vế trái bằng quy tắc ba điểm:
   $$\vec{AC} = \vec{AI} + \vec{IK} + \vec{KC}$$
   $$\vec{BD} = \vec{BI} + \vec{IK} + \vec{KD}$$
   Cộng hai đẳng thức vế theo vế:
   $$\vec{AC} + \vec{BD} = (\vec{AI} + \vec{BI}) + 2\vec{IK} + (\vec{KC} + \vec{KD})$$
   Vì $I$ là trung điểm của $AB$ nên $\vec{AI} + \vec{BI} = -(\vec{IA} + \vec{IB}) = \vec{0}$.  
   Vì $K$ là trung điểm của $CD$ nên $\vec{KC} + \vec{KD} = \vec{0}$.  
   Do đó:
   $$\vec{AC} + \vec{BD} = \vec{0} + 2\vec{IK} + \vec{0} = 2\vec{IK} \text{ (đpcm)}$$

2. **Chứng minh $\vec{GA} + \vec{GB} + \vec{GC} + \vec{GD} = \vec{0}$:**  
   - Vì $I$ là trung điểm của $AB$, theo tính chất trung điểm với điểm $G$:
     $$\vec{GA} + \vec{GB} = 2\vec{GI}$$
   - Vì $K$ là trung điểm của $CD$, theo tính chất trung điểm với điểm $G$:
     $$\vec{GC} + \vec{GD} = 2\vec{GK}$$
   Cộng lại ta được:
   $$\vec{GA} + \vec{GB} + \vec{GC} + \vec{GD} = 2(\vec{GI} + \vec{GK})$$
   Vì $G$ là trung điểm của $IK$ nên $\vec{GI} + \vec{GK} = \vec{0}$.  
   Suy ra:
   $$\vec{GA} + \vec{GB} + \vec{GC} + \vec{GD} = 2 \cdot \vec{0} = \vec{0} \text{ (đpcm)}$$

---

### Dạng 4: Bài toán hợp lực & Vận tốc trong thực tế

#### Phương pháp:
- Hợp lực của hai lực $\vec{F}_1, \vec{F}_2$ cùng tác dụng lên một vật là $\vec{F} = \vec{F}_1 + \vec{F}_2$.
- Dựng hình bình hành với hai cạnh là $\vec{F}_1, \vec{F}_2$. Độ lớn hợp lực:
  $$F = \sqrt{F_1^2 + F_2^2 + 2F_1F_2\cos\alpha}$$
  trong đó $\alpha$ là góc hợp bởi hai lực.

---

#### Bài toán 4
Hai con thuyền kéo một xà lan chở hàng trên sông bằng hai sợi dây cáp. Lực kéo của con thuyền thứ nhất có độ lớn $F_1 = 3000$ N, lực kéo của con thuyền thứ hai có độ lớn $F_2 = 4000$ N. Góc hợp bởi hai sợi dây cáp kéo là $\alpha = 60^\circ$.
1. Tính độ lớn của hợp lực $\vec{F} = \vec{F}_1 + \vec{F}_2$ tác dụng lên xà lan.
2. Nếu xà lan di chuyển đều theo phương của hợp lực $\vec{F}$ thì lực cản của nước tác dụng lên xà lan có độ lớn và hướng như thế nào?

**Lời giải chi tiết:**

1. Áp dụng công thức hợp lực hình bình hành:
   $$F^2 = F_1^2 + F_2^2 + 2F_1F_2\cos 60^\circ$$
   $$F^2 = 3000^2 + 4000^2 + 2(3000)(4000) \cdot \frac{1}{2}$$
   $$F^2 = 9\,000\,000 + 16\,000\,000 + 12\,000\,000 = 37\,000\,000$$
   Suy ra:
   $$F = \sqrt{37\,000\,000} = 1000\sqrt{37} \approx 6082,76 \text{ (N)}$$

2. Khi xà lan chuyển động thẳng đều, theo định luật I Newton, tổng các lực tác dụng lên xà lan phải triệt tiêu lẫn nhau:
   $$\vec{F} + \vec{F}_{\text{cản}} = \vec{0} \iff \vec{F}_{\text{cản}} = -\vec{F}$$
   Vậy lực cản của nước có **độ lớn bằng đúng 6082,76 N** và **ngược hướng** hoàn toàn với hợp lực kéo $\vec{F}$.

---

## 6. Ứng dụng thực tế & Kỹ thuật hàng không - hàng hải

| Lĩnh vực | Ứng dụng cụ thể của Phép cộng và trừ Vectơ |
| :--- | :--- |
| **Hàng không dân dụng (Flight Navigation)** | Vận tốc máy bay đối với mặt đất $\vec{v}_{\text{đất}} = \vec{v}_{\text{khí}} + \vec{v}_{\text{gió}}$. Phi công phải bù góc gió (Wind Correction Angle) để giữ đúng lộ trình bay thẳng. |
| **Hàng hải (Dòng chảy & Hoa tiêu)** | Thuyền vượt sông: Vận tốc thực tế của thuyền $\vec{v} = \vec{v}_{\text{chèo}} + \vec{v}_{\text{nước}}$. Để thuyền cập bến đúng vị trí đối diện bờ bên kia, mũi thuyền phải hướng ngược dòng nước một góc thích hợp. |
| **Kỹ thuật kết cấu cầu treo** | Các dây văng chịu lực: Tổng hợp các vectơ lực căng dây $\vec{T}_1 + \vec{T}_2 + \dots$ truyền tải trọng lượng cây cầu dồn về hai trụ tháp chính. |
| **Cơ học lượng tử & Điện trường** | Nguyên lí chồng chất (Superposition Principle): Cường độ điện trường tổng hợp tại một điểm là tổng vectơ các điện trường thành phần: $\vec{E} = \vec{E}_1 + \vec{E}_2 + \dots$ |
| **Đồ họa mô phỏng vật lý (Game Physics Engine)** | Thuật toán Ragdoll: Mỗi khớp nối nhân vật bị chi phối bởi tổng hợp lực ma sát, trọng lực và lực phản chấn của môi trường. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q1",
  "question": "Cho ba điểm bất kỳ $A, B, C$. Đẳng thức nào sau đây diễn đạt ĐÚNG quy tắc tam giác?",
  "options": [
    "$\\vec{AB} + \vec{AC} = \vec{BC}$",
    "$\\vec{AB} + \vec{BC} = \vec{AC}$",
    "$\\vec{AB} + \vec{BC} = \vec{CA}$",
    "$\\vec{BA} + \vec{BC} = \vec{AC}$"
  ],
  "answer": 1,
  "explanation": "Quy tắc ba điểm (quy tắc tam giác): $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q2",
  "question": "Cho hình bình hành $ABCD$. Vectơ tổng $\\vec{AB} + \\vec{AD}$ bằng:",
  "options": [
    "$\\vec{BD}$",
    "$\\vec{DB}$",
    "$\\vec{AC}$",
    "$\\vec{CA}$"
  ],
  "answer": 2,
  "explanation": "Theo quy tắc hình bình hành, tổng của hai vectơ chung gốc $A$ nằm trên hai cạnh kề là $\\vec{AB} + \\vec{AD} = \\vec{AC}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q3",
  "question": "Cho ba điểm phân biệt $O, A, B$. Vectơ hiệu $\\vec{OB} - \\vec{OA}$ bằng:",
  "options": [
    "$\\vec{AB}$",
    "$\\vec{BA}$",
    "$\\vec{AO}$",
    "$\\vec{BO}$"
  ],
  "answer": 0,
  "explanation": "Quy tắc trừ chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q4",
  "question": "Cho $I$ là trung điểm của đoạn thẳng $AB$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "$\\vec{IA} + \\vec{IB} = \\vec{AB}$",
    "$\\vec{IA} + \\vec{IB} = \\vec{0}$",
    "$\\vec{IA} - \\vec{IB} = \\vec{0}$",
    "$\\vec{AI} + \\vec{BI} = \\vec{AB}$"
  ],
  "answer": 1,
  "explanation": "Vì $I$ là trung điểm của $AB$, hai vectơ $\\vec{IA}$ và $\\vec{IB}$ có cùng độ dài nhưng ngược hướng nhau (hai vectơ đối nhau) nên $\\vec{IA} + \\vec{IB} = \\vec{0}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q5",
  "question": "Cho tam giác đều $ABC$ có cạnh bằng $a$. Độ dài của vectơ tổng $|\\vec{AB} + \\vec{AC}|$ bằng:",
  "options": [
    "$a$",
    "$2a$",
    "$a\\sqrt{3}$",
    "$\\frac{a\\sqrt{3}}{2}$"
  ],
  "answer": 2,
  "explanation": "Dựng hình thoi $ABDC$. Khi đó $\\vec{AB} + \\vec{AC} = \\vec{AD}$. Tam giác đều cạnh $a$ có đường cao $AH = \\frac{a\\sqrt{3}}{2}$, suy ra đường chéo $AD = 2AH = a\\sqrt{3}$. Vậy $|\\vec{AB} + \\vec{AC}| = a\\sqrt{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q6",
  "question": "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ hiệu $|\\vec{AB} - \\vec{AD}|$ bằng:",
  "options": [
    "$a$",
    "$a\\sqrt{2}$",
    "$2a$",
    "$0$"
  ],
  "answer": 1,
  "explanation": "Ta có $\\vec{AB} - \\vec{AD} = \\vec{DB}$. Độ dài của vectơ này là đường chéo hình vuông: $DB = a\\sqrt{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q7",
  "question": "Cho tam giác $ABC$ có trọng tâm $G$. Với điểm $M$ tùy ý, khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "$\\vec{MA} + \\vec{MB} + \\vec{MC} = \\vec{MG}$",
    "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 2\\vec{MG}$",
    "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$",
    "$\\vec{MA} + \\vec{MB} + \\vec{MC} = \\vec{0}$"
  ],
  "answer": 2,
  "explanation": "Tính chất trọng tâm với điểm $M$ tùy ý: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q8",
  "question": "Cho 4 điểm $A, B, C, D$. Tổng $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA}$ bằng:",
  "options": [
    "$\\vec{AC}$",
    "$\\vec{BD}$",
    "$\\vec{0}$",
    "$2\\vec{AB}$"
  ],
  "answer": 2,
  "explanation": "Cộng liên tiếp theo quy tắc ba điểm: $(\\vec{AB} + \\vec{BC}) + (\\vec{CD} + \\vec{DA}) = \\vec{AC} + \\vec{CA} = \\vec{AA} = \\vec{0}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q9",
  "question": "Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng tác dụng vào một vật, có độ lớn lần lượt là 6 N và 8 N. Nếu hai lực này vuông góc với nhau thì hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ có độ lớn bằng:",
  "options": [
    "14 N",
    "2 N",
    "10 N",
    "100 N"
  ],
  "answer": 2,
  "explanation": "Khi hai lực vuông góc nhau, theo quy tắc hình chữ nhật (định lí Pythagore): $F = \\sqrt{F_1^2 + F_2^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10$ N."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b8_q10",
  "question": "Cho đoạn thẳng $AB$ có độ dài bằng 6. Điểm $M$ thỏa mãn $|\\vec{MA} + \\vec{MB}| = 6$. Tập hợp điểm $M$ là:",
  "options": [
    "Đoạn thẳng $AB$.",
    "Đường tròn đường kính $AB$.",
    "Đường trung trực của đoạn thẳng $AB$.",
    "Điểm trung điểm của $AB$."
  ],
  "answer": 1,
  "explanation": "Gọi $I$ là trung điểm của $AB$. Ta có $\\vec{MA} + \\vec{MB} = 2\\vec{MI}$. Giả thiết $|\\vec{MA} + \\vec{MB}| = 6 \\iff |2\\vec{MI}| = 6 \\iff MI = 3$. Vì $AB = 6 \\Rightarrow IA = IB = 3$. Điểm $M$ cách trung điểm $I$ một khoảng cố định bằng 3, do đó tập hợp điểm $M$ là đường tròn tâm $I$ bán kính $R = 3$, tức đường tròn đường kính $AB$."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Xác định điểm thỏa mãn đẳng thức vectơ)
Cho tam giác $ABC$. Hãy tìm điểm $K$ trong mặt phẳng thỏa mãn đẳng thức:
$$\vec{KA} + 2\vec{KB} + \vec{KC} = \vec{0}$$

*Hướng dẫn giải:*
- Nhóm $\vec{KA} + \vec{KC}$: Gọi $M$ là trung điểm của cạnh $AC$. Theo tính chất trung điểm, ta có:
  $$\vec{KA} + \vec{KC} = 2\vec{KM}$$
- Thay vào đẳng thức đã cho:
  $$2\vec{KM} + 2\vec{KB} = \vec{0} \iff 2(\vec{KM} + \vec{KB}) = \vec{0} \iff \vec{KM} + \vec{KB} = \vec{0}$$
- Đẳng thức này chứng tỏ điểm $K$ chính là **trung điểm của đoạn thẳng $BM$** (trong đó $M$ là trung điểm của $AC$).

---

### Bài tập 2 (Vận tốc thuyền vượt sông thực tế)
Một ca nô vượt qua một khúc sông rộng 400 m. Mũi ca nô luôn hướng vuông góc với bờ sông và động cơ tạo ra vận tốc $v_{\text{cn}} = 12$ km/h so với dòng nước. Dòng nước chảy xuôi dòng với vận tốc $v_{\text{n}} = 5$ km/h.
1. Tính vận tốc thực tế của ca nô đối với hai bờ sông.
2. Hỏi sau bao lâu ca nô sang được bờ bên kia và điểm cập bến bị dòng nước cuốn trôi dạt xuôi dòng một khoảng bằng bao nhiêu mét so với điểm đối diện điểm xuất phát?

*Hướng dẫn giải:*
1. Vận tốc thực tế của ca nô là tổng vectơ: $\vec{v} = \vec{v}_{\text{cn}} + \vec{v}_{\text{n}}$.  
   Vì mũi ca nô hướng vuông góc với bờ sông nên $\vec{v}_{\text{cn}} \perp \vec{v}_{\text{n}}$.  
   Độ lớn vận tốc thực tế:
   $$v = \sqrt{v_{\text{cn}}^2 + v_{\text{n}}^2} = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13 \text{ (km/h)}$$
2. Thời gian sang sông chỉ phụ thuộc vào thành phần vận tốc vuông góc với bờ ($v_{\text{cn}} = 12$ km/h $= \frac{12}{3,6} = \frac{10}{3}$ m/s):
   $$t = \frac{d}{v_{\text{cn}}} = \frac{400}{\frac{10}{3}} = 120 \text{ (giây)} = 2 \text{ phút}$$
   Quãng đường ca nô bị dạt xuôi dòng trong 120 giây với vận tốc dòng nước $v_{\text{n}} = 5$ km/h $= \frac{5}{3,6}$ m/s:
   $$s_{\text{dạt}} = v_{\text{n}} \cdot t = \frac{5}{3,6} \cdot 120 \approx 166,7 \text{ (m)}$$
   Điểm cập bến bị dạt khoảng **166,7 mét**.
