---
title: 'Toán 10 Bài 7: Các khái niệm mở đầu về vectơ - Hướng, Độ dài & Bằng nhau'
description: 'Lý thuyết toàn diện Toán 10 Bài 7: Đoạn thẳng có hướng, khái niệm vectơ, phương, hướng, độ dài, hai vectơ cùng phương, cùng hướng, hai vectơ bằng nhau, vectơ không, widget tương tác vectơ và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Vectơ
  - Khái niệm mở đầu
  - Độ dài vectơ
  - Vectơ cùng phương
  - Kết nối tri thức
grade: 10
---

# Bài 7. Các khái niệm mở đầu về vectơ

Trong đời sống và khoa học tự nhiên, có những đại lượng ta chỉ cần dùng một con số kèm theo đơn vị đo là có thể mô tả trọn vẹn: nhiệt độ phòng là $28^\circ\text{C}$, khối lượng quả cân là $5\text{ kg}$, diện tích căn phòng là $30\text{ m}^2$. Các đại lượng này được gọi là **đại lượng vô hướng (scalar)**.

Tuy nhiên, có vô vàn đại lượng vật lý quan trọng khác mà một con số đơn thuần là không đủ:
- Một chiếc máy bay bay với tốc độ $800\text{ km/h}$, nhưng bay về hướng bắc hay hướng nam?
- Bạn đẩy một chiếc hộp với lực $50\text{ N}$, nhưng đẩy sang trái hay sang phải, nâng lên hay ấn xuống?
- Cơn gió mạnh cấp 7 thổi dạt những con thuyền về phía bờ hay ra xa biển khơi?

Để mô tả đầy đủ những đại lượng vừa có độ lớn vừa có hướng xác định trong không gian, các nhà toán học và vật lý học đã khai sinh ra một khái niệm mang tính cách mạng: **Vectơ (Vector)**.

---

## 1. Sơ đồ tư duy: Các khái niệm mở đầu về vectơ

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Định nghĩa Vectơ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Là một đoạn thẳng có hướng (phân biệt điểm đầu và điểm cuối).<br>
      • Ký hiệu: $\vec{AB}$ (điểm đầu $A$, điểm cuối $B$) hoặc $\vec{a}, \vec{b}, \vec{u}, \vec{v}$.<br>
      • Độ dài: khoảng cách giữa điểm đầu và điểm cuối, ký hiệu $|\vec{AB}| = AB$.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Phương & Hướng</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • <strong>Giá của vectơ:</strong> đường thẳng đi qua điểm đầu và điểm cuối.<br>
      • <strong>Cùng phương:</strong> giá của chúng song song hoặc trùng nhau.<br>
      • Hai vectơ cùng phương thì có thể <strong>cùng hướng</strong> hoặc <strong>ngược hướng</strong>.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Hai vectơ bằng nhau</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • $\vec{a} = \vec{b} \iff$ Chúng <strong>cùng hướng</strong> và <strong>cùng độ dài</strong> ($|\vec{a}| = |\vec{b}|$).<br>
      • Cho trước điểm $A$ và vectơ $\vec{a}$, luôn dựng được <strong>duy nhất</strong> điểm $B$ sao cho $\vec{AB} = \vec{a}$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Vectơ - không ($\vec{0}$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • Điểm đầu trùng điểm cuối: $\vec{AA} = \vec{BB} = \vec{0}$.<br>
      • Độ dài $|\vec{0}| = 0$.<br>
      • Quy ước: Vectơ-không cùng phương, cùng hướng với mọi vectơ.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Hai vectơ $\vec{AB}$ và $\vec{BA}$ có bằng nhau không?**  
   *Đáp án:* Không! Chúng có cùng độ dài $|\vec{AB}| = |\vec{BA}| = AB$, nhưng ngược hướng nhau (chúng là hai vectơ đối nhau).
2. **Nếu hai vectơ có giá cắt nhau thì chúng có cùng phương không?**  
   *Đáp án:* Không, hai vectơ chỉ cùng phương khi giá của chúng song song hoặc trùng nhau.
3. **Hình bình hành $ABCD$ có những cặp vectơ nào bằng nhau tạo bởi các cạnh?**  
   *Đáp án:* $\vec{AB} = \vec{DC}$ và $\vec{AD} = \vec{BC}$ (cùng hướng và cùng độ dài).
4. **Vectơ-không có phương và hướng như thế nào?**  
   *Đáp án:* Theo quy ước, vectơ $\vec{0}$ cùng phương và cùng hướng với mọi vectơ.
5. **Cho 3 điểm phân biệt $A, B, C$. Điều kiện cần và đủ để hai vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương là gì?**  
   *Đáp án:* Ba điểm $A, B, C$ thẳng hàng (vì hai đường thẳng $AB$ và $AC$ cùng đi qua điểm $A$ nên phải trùng nhau).

---

## 3. Lý thuyết trọng tâm

### 3.1. Khái niệm vectơ

- **Định nghĩa:** Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng, đã chỉ rõ điểm nào là **điểm đầu** (gốc) và điểm nào là **điểm cuối** (ngọn).
- **Ký hiệu:**  
  - Vectơ có điểm đầu $A$, điểm cuối $B$ được ký hiệu là $\vec{AB}$, vẽ bằng đoạn thẳng nối từ $A$ đến $B$ và có mũi tên ở đầu mút $B$.
  - Khi không cần chỉ rõ điểm đầu và điểm cuối, vectơ còn được ký hiệu bằng các chữ cái in thường có mũi tên: $\vec{a}, \vec{b}, \vec{u}, \vec{v}, \dots$
- **Độ dài của vectơ:**  
  Độ dài của vectơ $\vec{AB}$ là khoảng cách giữa điểm đầu $A$ và điểm cuối $B$, ký hiệu là $|\vec{AB}|$.  
  Như vậy: $|\vec{AB}| = AB$. Độ dài của vectơ luôn là một số thực không âm.

---

### 3.2. Phương và hướng của vectơ

- **Giá của vectơ:** Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là **giá** của vectơ đó.  
  *(Ví dụ: Đường thẳng $AB$ là giá của vectơ $\vec{AB}$).*
- **Hai vectơ cùng phương:** Hai vectơ được gọi là **cùng phương** nếu giá của chúng song song hoặc trùng nhau.
- **Hướng của vectơ:** Đối với hai vectơ cùng phương, chúng chỉ có thể:
  - Hoặc **cùng hướng** (mũi tên chỉ về cùng một phía).
  - Hoặc **ngược hướng** (mũi tên chỉ về hai phía trái ngược nhau).

> [!WARNING]
> Hai vectơ chỉ có thể so sánh về hướng (cùng hướng hay ngược hướng) khi chúng **đã cùng phương**. Nếu hai vectơ không cùng phương thì ta không xét hướng của chúng.

---

### 3.3. Hai vectơ bằng nhau & Hai vectơ đối nhau

- **Hai vectơ bằng nhau:** Hai vectơ $\vec{a}$ và $\vec{b}$ được gọi là bằng nhau nếu chúng **cùng hướng** và có **cùng độ dài**.
  $$\vec{a} = \vec{b} \iff \left\{\begin{array}{l} \vec{a} \text{ cung huong voi } \vec{b} \\ |\vec{a}| = |\vec{b}| \end{array}\right.$$
- **Đặc trưng hình bình hành:**  
  Tứ giác $ABCD$ là hình bình hành khi và chỉ khi:
  $$\vec{AB} = \vec{DC} \quad (\text{hoac } \vec{AD} = \vec{BC})$$

> [!NOTE]
> **Tính chất dời vectơ tự do:**  
> Cho trước một vectơ $\vec{a}$ và một điểm $O$ bất kỳ trong mặt phẳng, luôn luôn tìm được **duy nhất** một điểm $M$ sao cho $\vec{OM} = \vec{a}$.

- **Vectơ-không ($\vec{0}$):**  
  Là vectơ có điểm đầu và điểm cuối trùng nhau, ví dụ: $\vec{AA}, \vec{BB}$.
  - Ký hiệu: $\vec{0}$.
  - Độ dài: $|\vec{0}| = 0$.
  - Quy ước: Vectơ $\vec{0}$ cùng phương, cùng hướng với mọi vectơ.

---

## 4. Widget tương tác: Khám phá Phương, Hướng & Bằng nhau của Vectơ

Kéo điểm đầu $A$ hoặc điểm cuối $B$ của vectơ $\vec{u} = \vec{AB}$ và quan sát độ dài, phương, hướng cùng các vectơ đối chứng:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🏹 Phòng Thí Nghiệm Động Học Vectơ</h3>
    <span style="font-size: 0.85rem; color: #475569; background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">Kéo điểm đầu A hoặc điểm cuối B</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Vector SVG Canvas -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="vecSvg" viewBox="0 0 320 220" style="width: 100%; max-width: 340px; height: auto; touch-action: none; cursor: crosshair; background: #ffffff;">
        <defs>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
          </marker>
          <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
          </marker>
          <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
          </marker>
        </defs>

        <!-- Grid lines -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="20" y1="0" x2="20" y2="220" /><line x1="60" y1="0" x2="60" y2="220" /><line x1="100" y1="0" x2="100" y2="220" />
          <line x1="140" y1="0" x2="140" y2="220" /><line x1="180" y1="0" x2="180" y2="220" /><line x1="220" y1="0" x2="220" y2="220" />
          <line x1="260" y1="0" x2="260" y2="220" /><line x1="300" y1="0" x2="300" y2="220" />
          <line x1="0" y1="30" x2="320" y2="30" /><line x1="0" y1="70" x2="320" y2="70" /><line x1="0" y1="110" x2="320" y2="110" />
          <line x1="0" y1="150" x2="320" y2="150" /><line x1="0" y1="190" x2="320" y2="190" />
        </g>

        <!-- Line of action (Giá của vectơ AB) -->
        <line id="lineAction" x1="0" y1="0" x2="320" y2="220" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4" />

        <!-- Reference equal vector CD (cùng hướng, cùng độ dài) -->
        <line id="vecCD" x1="60" y1="160" x2="180" y2="160" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrowGreen)" stroke-dasharray="2,2" />
        <text id="txtCD" x="120" y="180" font-size="10" font-weight="bold" fill="#16a34a">Vectơ bằng: v = u</text>

        <!-- Main vector AB -->
        <line id="vecAB" x1="60" y1="80" x2="180" y2="80" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowBlue)" />

        <!-- Handles A and B -->
        <circle id="hA" cx="60" cy="80" r="7" fill="#1e40af" style="cursor: move;" />
        <circle id="hB" cx="180" cy="80" r="7" fill="#dc2626" style="cursor: move;" />

        <text id="lblA" x="48" y="75" font-size="12" font-weight="bold" fill="#1e40af">A</text>
        <text id="lblB" x="190" y="75" font-size="12" font-weight="bold" fill="#dc2626">B</text>
      </svg>
    </div>

    <!-- Live Inspector -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 8px;">Thông số hình học của vectơ:</div>
      <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Điểm đầu A:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statA">(60; 80)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Điểm cuối B:</td>
          <td style="padding: 4px 0; font-weight: bold; text-align: right;" id="statB">(180; 80)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Độ dài |AB|:</td>
          <td style="padding: 4px 0; font-weight: bold; color: #2563eb; text-align: right;" id="statLen">120 px</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 4px 0; color: #64748b;">Góc nghiêng (Phương):</td>
          <td style="padding: 4px 0; font-weight: bold; color: #475569; text-align: right;" id="statAngle">0° (Nằm ngang)</td>
        </tr>
      </table>

      <div id="inspectorNotice" style="margin-top: 10px; background: #eff6ff; border-left: 3px solid #3b82f6; padding: 8px; border-radius: 4px; font-size: 0.8rem; color: #1e40af; line-height: 1.4;">
        • Đường đứt đoạn màu xám thể hiện <strong>Giá của vectơ</strong>.<br>
        • Vectơ màu xanh lá cây $\vec{v}$ được tạo ra bằng cách tịnh tiến $\vec{u}$ $\Rightarrow \vec{v} = \vec{u}$ vì cùng hướng và cùng độ dài.
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('vecSvg');
  let ptA = { x: 70, y: 70 };
  let ptB = { x: 210, y: 70 };
  let activePoint = null;

  function update() {
    const dx = ptB.x - ptA.x;
    const dy = ptB.y - ptA.y;
    const len = Math.hypot(dx, dy);
    let ang = Math.atan2(dy, dx) * 180 / Math.PI;

    // Line of action extends across svg
    const lineAct = document.getElementById('lineAction');
    if (len > 2) {
      const udx = dx / len;
      const udy = dy / len;
      lineAct.setAttribute('x1', ptA.x - udx * 200);
      lineAct.setAttribute('y1', ptA.y - udy * 200);
      lineAct.setAttribute('x2', ptB.x + udx * 200);
      lineAct.setAttribute('y2', ptB.y + udy * 200);
    }

    // Main vector AB
    const vecAB = document.getElementById('vecAB');
    vecAB.setAttribute('x1', ptA.x);
    vecAB.setAttribute('y1', ptA.y);
    vecAB.setAttribute('x2', ptB.x);
    vecAB.setAttribute('y2', ptB.y);

    document.getElementById('hA').setAttribute('cx', ptA.x);
    document.getElementById('hA').setAttribute('cy', ptA.y);
    document.getElementById('lblA').setAttribute('x', ptA.x - 12);
    document.getElementById('lblA').setAttribute('y', ptA.y - 10);

    document.getElementById('hB').setAttribute('cx', ptB.x);
    document.getElementById('hB').setAttribute('cy', ptB.y);
    document.getElementById('lblB').setAttribute('x', ptB.x + 12);
    document.getElementById('lblB').setAttribute('y', ptB.y - 10);

    // Parallel equal vector CD: placed lower
    const cX = 60, cY = 160;
    const vecCD = document.getElementById('vecCD');
    vecCD.setAttribute('x1', cX);
    vecCD.setAttribute('y1', cY);
    vecCD.setAttribute('x2', cX + dx);
    vecCD.setAttribute('y2', cY + dy);
    document.getElementById('txtCD').setAttribute('x', cX + dx/2);
    document.getElementById('txtCD').setAttribute('y', cY + dy/2 + 16);

    // Inspector texts
    document.getElementById('statA').textContent = `(${Math.round(ptA.x)}; ${Math.round(ptA.y)})`;
    document.getElementById('statB').textContent = `(${Math.round(ptB.x)}; ${Math.round(ptB.y)})`;
    document.getElementById('statLen').textContent = `${len.toFixed(1)} px`;
    document.getElementById('statAngle').textContent = `${Math.round(ang)}°`;
  }

  function getCoords(e) {
    const rect = svg.getBoundingClientRect();
    const cx = e.clientX || (e.touches && e.touches[0].clientX);
    const cy = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: Math.max(8, Math.min(312, (cx - rect.left) * (320 / rect.width))),
      y: Math.max(8, Math.min(212, (cy - rect.top) * (220 / rect.height)))
    };
  }

  document.getElementById('hA').addEventListener('mousedown', () => { activePoint = 'A'; });
  document.getElementById('hA').addEventListener('touchstart', (e) => { e.preventDefault(); activePoint = 'A'; }, { passive: false });
  document.getElementById('hB').addEventListener('mousedown', () => { activePoint = 'B'; });
  document.getElementById('hB').addEventListener('touchstart', (e) => { e.preventDefault(); activePoint = 'B'; }, { passive: false });

  window.addEventListener('mousemove', (e) => {
    if (!activePoint) return;
    const p = getCoords(e);
    if (activePoint === 'A') { ptA.x = p.x; ptA.y = p.y; }
    else { ptB.x = p.x; ptB.y = p.y; }
    update();
  });
  window.addEventListener('touchmove', (e) => {
    if (!activePoint) return;
    e.preventDefault();
    const p = getCoords(e);
    if (activePoint === 'A') { ptA.x = p.x; ptA.y = p.y; }
    else { ptB.x = p.x; ptB.y = p.y; }
    update();
  }, { passive: false });

  const endDrag = () => { activePoint = null; };
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);

  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Xác định điểm đầu, điểm cuối và đếm số lượng vectơ tạo thành

#### Phương pháp:
- Cho $n$ điểm phân biệt ($n \ge 2$). Số đoạn thẳng tạo thành là $C_n^2 = \frac{n(n - 1)}{2}$.
- Với mỗi đoạn thẳng $AB$, ta có đúng 2 vectơ khác vectơ-không có hướng ngược nhau là $\vec{AB}$ và $\vec{BA}$.
- Do đó số vectơ khác vectơ-không tạo thành từ $n$ điểm phân biệt là:
  $$A_n^2 = n(n - 1)$$
- Nếu tính cả các vectơ-không thì có thêm $n$ vectơ dạng $\vec{AA}_i$.

---

#### Bài toán 1
Cho 5 điểm phân biệt $A, B, C, D, E$ trong đó không có 3 điểm nào thẳng hàng.
1. Có bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối lấy từ 5 điểm trên?
2. Có bao nhiêu vectơ có điểm đầu là điểm $A$?

**Lời giải chi tiết:**

1. Số cách chọn điểm đầu từ 5 điểm là $5$ cách.  
   Sau khi đã chọn điểm đầu, số cách chọn điểm cuối khác với điểm đầu là $4$ cách.  
   Số vectơ khác vectơ-không tạo thành là:
   $$5 \times 4 = 20 \text{ (vectơ)}$$

2. Để vectơ có điểm đầu là $A$ và khác vectơ-không, điểm cuối chỉ có thể là một trong 4 điểm $B, C, D, E$.  
   Vậy có tất cả 4 vectơ thỏa mãn: $\vec{AB}, \vec{AC}, \vec{AD}, \vec{AE}$.

---

### Dạng 2: Chứng minh hai vectơ cùng phương, cùng hướng, ngược hướng

#### Phương pháp:
- Hai vectơ cùng phương $\iff$ Giá của chúng song song hoặc trùng nhau.
- Hai vectơ cùng hướng $\iff$ Chúng cùng phương và mũi tên chỉ cùng chiều.
- Để chứng minh 3 điểm phân biệt $A, B, C$ thẳng hàng: Chứng minh hai vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương.

---

#### Bài toán 2
Cho hình thang $ABCD$ có hai đáy là $AB$ và $CD$ thỏa mãn $CD = 2AB$. Gọi $M$ và $N$ lần lượt là trung điểm của $AD$ và $BC$.
1. Chỉ ra các cặp vectơ cùng hướng với vectơ $\vec{AB}$.
2. Chỉ ra các cặp vectơ ngược hướng với vectơ $\vec{AB}$.

**Lời giải chi tiết:**

Vì $ABCD$ là hình thang có đáy $AB$ và $CD$, và $MN$ là đường trung bình của hình thang nên:
$$AB \parallel MN \parallel CD$$
Do đó tất cả các vectơ có giá nằm trên các đường thẳng $AB, MN, CD$ đều cùng phương với nhau.

1. **Các vectơ cùng hướng với $\vec{AB}$:**
   - Vectơ $\vec{DC}$ (có chiều từ trái sang phải giống $\vec{AB}$).
   - Vectơ $\vec{MN}$ (có chiều từ trái sang phải giống $\vec{AB}$).

2. **Các vectơ ngược hướng với $\vec{AB}$:**
   - Vectơ $\vec{BA}$ (ngược chiều từ phải sang trái).
   - Vectơ $\vec{CD}$ (ngược chiều từ phải sang trái).
   - Vectơ $\vec{NM}$ (ngược chiều từ phải sang trái).

---

### Dạng 3: Tìm các vectơ bằng nhau trong hình học phẳng

#### Phương pháp:
- Hai vectơ bằng nhau khi và chỉ khi chúng cùng hướng và cùng độ dài.
- Thường khai thác các tính chất của hình bình hành, hình chữ nhật, hình thoi, hình vuông hoặc tính chất trung điểm, đoạn thẳng nối tâm đối xứng.

---

#### Bài toán 3
Cho hình bình hành $ABCD$ có tâm $O$ (giao điểm của hai đường chéo).
1. Tìm các vectơ bằng với vectơ $\vec{AB}$.
2. Tìm các vectơ bằng với vectơ $\vec{OA}$.

**Lời giải chi tiết:**

1. **Tìm các vectơ bằng $\vec{AB}$:**  
   Trong hình bình hành $ABCD$, cạnh $AB$ song song và bằng cạnh $DC$.  
   Vectơ $\vec{DC}$ có cùng hướng với $\vec{AB}$ và có độ dài $|\vec{DC}| = DC = AB = |\vec{AB}|$.  
   Do đó:
   $$\vec{AB} = \vec{DC}$$

2. **Tìm các vectơ bằng $\vec{OA}$:**  
   Vì $O$ là trung điểm của đường chéo $AC$, nên đoạn $CO = OA$.  
   Hướng của vectơ $\vec{OA}$ là hướng từ $O$ đến $A$.  
   Vectơ $\vec{CO}$ cũng có hướng từ $C$ đến $O$ (trùng hướng với từ $O$ đến $A$) và có độ dài $|\vec{CO}| = CO = OA = |\vec{OA}|$.  
   Do đó:
   $$\vec{OA} = \vec{CO}$$

---

### Dạng 4: Tính độ dài của vectơ

#### Phương pháp:
- Độ dài của vectơ $\vec{AB}$ chính là độ dài hình học của đoạn thẳng $AB$: $|\vec{AB}| = AB$.
- Sử dụng các định lí hình học quen thuộc: Định lí Pythagore, hệ thức lượng trong tam giác, tỉ số lượng giác, định lí sin, côsin để tính độ dài đoạn thẳng.

---

#### Bài toán 4
Cho hình vuông $ABCD$ có cạnh bằng $a$. Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$, $M$ là trung điểm của cạnh $CD$.
Tính độ dài của các vectơ sau: $\vec{AC}, \vec{OB}, \vec{AM}$.

**Lời giải chi tiết:**

1. **Độ dài vectơ $\vec{AC}$:**  
   Trong hình vuông $ABCD$, tam giác $ABC$ vuông cân tại $B$. Theo định lí Pythagore:
   $$AC = \sqrt{AB^2 + BC^2} = \sqrt{a^2 + a^2} = a\sqrt{2}$$
   Vậy $|\vec{AC}| = a\sqrt{2}$.

2. **Độ dài vectơ $\vec{OB}$:**  
   Đoạn $OB$ là một nửa đường chéo $BD$. Vì $BD = AC = a\sqrt{2}$ nên:
   $$OB = \frac{BD}{2} = \frac{a\sqrt{2}}{2}$$
   Vậy $|\vec{OB}| = \frac{a\sqrt{2}}{2}$.

3. **Độ dài vectơ $\vec{AM}$:**  
   Tam giác $ADM$ vuông tại $D$ có $AD = a$ và $DM = \frac{a}{2}$ (vì $M$ là trung điểm của $CD$).  
   Theo định lí Pythagore:
   $$AM = \sqrt{AD^2 + DM^2} = \sqrt{a^2 + \left(\frac{a}{2}\right)^2} = \sqrt{a^2 + \frac{a^2}{4}} = \sqrt{\frac{5a^2}{4}} = \frac{a\sqrt{5}}{2}$$
   Vậy $|\vec{AM}| = \frac{a\sqrt{5}}{2}$.

---

## 6. Ứng dụng thực tế & Khoa học máy tính

| Lĩnh vực | Ứng dụng thực tế của Vectơ |
| :--- | :--- |
| **Vật lý cổ điển (Cơ học Newton)** | Các đại lượng vector kinh điển: Vận tốc $\vec{v}$, gia tốc $\vec{a}$, lực $\vec{F}$, động lượng $\vec{p} = m\vec{v}$. Lực tác dụng quyết định hướng gia tốc theo định luật II Newton $\vec{F} = m\vec{a}$. |
| **Lập trình Game & Đồ họa 3D** | Mọi chuyển động của nhân vật trong game (Unreal Engine / Unity) đều là các vector vị trí, vector vận tốc và vector pháp tuyến ánh sáng (Surface Normal). |
| **Trí tuệ nhân tạo (AI & Machine Learning)** | Vector Embeddings: Mỗi từ ngữ hoặc bức ảnh được mã hóa thành một vectơ toán học gồm hàng nghìn chiều. Khoảng cách và hướng giữa các vectơ phản ánh mức độ tương đồng về ngữ nghĩa. |
| **Khí tượng thủy văn & Dự báo thời tiết** | Bản đồ gió: Vector gió biểu thị vận tốc và hướng di chuyển của các khối không khí và tâm bão. |
| **Hàng hải & Hàng không** | Tính toán vector vận tốc trôi: Vận tốc thực tế của máy bay đối với mặt đất là tổng vector giữa vận tốc cánh quạt và vector gió thổi ngang. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q1",
  "question": "Khẳng định nào sau đây định nghĩa chính xác nhất về vectơ?",
  "options": [
    "Vectơ là một đường thẳng có độ dài vô hạn.",
    "Vectơ là một đoạn thẳng có hướng.",
    "Vectơ là một số thực dương.",
    "Vectơ là một tia trong mặt phẳng."
  ],
  "answer": 1,
  "explanation": "Định nghĩa chuẩn: Vectơ là một đoạn thẳng có hướng, nghĩa là đã chỉ rõ điểm đầu và điểm cuối."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q2",
  "question": "Cho hai điểm phân biệt $A$ và $B$. Ký hiệu độ dài của vectơ $\\vec{AB}$ là:",
  "options": [
    "$\\vec{AB}$",
    "$|\\vec{AB}|$",
    "$(AB)$",
    "$[AB]$"
  ],
  "answer": 1,
  "explanation": "Độ dài của vectơ $\\vec{AB}$ được ký hiệu là $|\\vec{AB}|$, chính bằng khoảng cách hình học $AB$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q3",
  "question": "Hai vectơ được gọi là cùng phương khi và chỉ khi:",
  "options": [
    "Chúng có cùng độ dài.",
    "Giá của chúng song song hoặc trùng nhau.",
    "Chúng có cùng điểm đầu.",
    "Giá của chúng cắt nhau."
  ],
  "answer": 1,
  "explanation": "Hai vectơ cùng phương khi và chỉ khi giá của chúng song song hoặc trùng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q4",
  "question": "Hai vectơ bằng nhau là hai vectơ:",
  "options": [
    "Có cùng phương và cùng độ dài.",
    "Có cùng hướng và cùng độ dài.",
    "Có cùng điểm đầu và cùng điểm cuối.",
    "Song song với nhau."
  ],
  "answer": 1,
  "explanation": "Định nghĩa hai vectơ bằng nhau: Phải thỏa mãn đồng thời hai yếu tố là CÙNG HƯỚNG và CÙNG ĐỘ DÀI."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q5",
  "question": "Cho hình bình hành $ABCD$. Vectơ nào sau đây BẰNG vectơ $\\vec{AB}$?",
  "options": [
    "$\\vec{CD}$",
    "$\\vec{DC}$",
    "$\\vec{BA}$",
    "$\\vec{BC}$"
  ],
  "answer": 1,
  "explanation": "Trong hình bình hành $ABCD$, cạnh $AB$ song song và bằng $DC$. Vectơ $\\vec{DC}$ có cùng hướng và cùng độ dài với $\\vec{AB}$, do đó $\\vec{AB} = \\vec{DC}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q6",
  "question": "Vectơ-không có tính chất nào sau đây?",
  "options": [
    "Có điểm đầu trùng với điểm cuối.",
    "Có độ dài bằng 0.",
    "Cùng phương, cùng hướng với mọi vectơ.",
    "Cả ba khẳng định trên đều đúng."
  ],
  "answer": 3,
  "explanation": "Tất cả các khẳng định trên đều là tính chất và quy ước chuẩn mực của vectơ-không $\\vec{0}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q7",
  "question": "Cho tam giác đều $ABC$ cạnh $a$. Độ dài của vectơ $\\vec{BC}$ là:",
  "options": [
    "$a$",
    "$\\frac{a\\sqrt{3}}{2}$",
    "$2a$",
    "$a\\sqrt{3}$"
  ],
  "answer": 0,
  "explanation": "Độ dài của vectơ $|\\vec{BC}| = BC = a$ (độ dài cạnh của tam giác đều)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q8",
  "question": "Cho 4 điểm phân biệt $A, B, C, D$. Có tất cả bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối lấy từ 4 điểm đã cho?",
  "options": [
    "6",
    "8",
    "12",
    "16"
  ],
  "answer": 2,
  "explanation": "Số vectơ khác $\\vec{0}$ là $A_4^2 = 4 \\times 3 = 12$ vectơ."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q9",
  "question": "Cho đoạn thẳng $AB$ có trung điểm $I$. Khẳng định nào sau đây là SAI?",
  "options": [
    "$|\\vec{IA}| = |\\vec{IB}|$",
    "$\\vec{IA} = \\vec{IB}$",
    "$\\vec{IA}$ và $\\vec{IB}$ ngược hướng",
    "$\\vec{AI} = \\vec{IB}$"
  ],
  "answer": 1,
  "explanation": "Vì $I$ nằm giữa $A$ và $B$, vectơ $\\vec{IA}$ hướng sang trái còn $\\vec{IB}$ hướng sang phải (ngược hướng nhau). Do đó khẳng định $\\vec{IA} = \\vec{IB}$ là SAI."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b7_q10",
  "question": "Cho tam giác $ABC$. Có bao nhiêu vectơ khác $\\vec{0}$ cùng phương với vectơ $\\vec{AB}$ và có điểm đầu, điểm cuối lấy từ 3 đỉnh $A, B, C$?",
  "options": [
    "1",
    "2",
    "4",
    "6"
  ],
  "answer": 1,
  "explanation": "Các điểm $A, B, C$ không thẳng hàng, do đó chỉ có các vectơ nằm trên đường thẳng $AB$ mới cùng phương với $\\vec{AB}$. Đó là $\\vec{AB}$ và $\\vec{BA}$ (gồm 2 vectơ)."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Chứng minh tứ giác là hình bình hành)
Cho tam giác $ABC$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$.
1. Chứng minh rằng $\vec{MN} = \frac{1}{2}\vec{BC}$ (về hướng và tỉ lệ độ dài).
2. Lấy điểm $P$ đối xứng với $M$ qua $N$. Chứng minh rằng $\vec{AP} = \vec{MB}$ và tứ giác $BMC P$ là hình bình hành.

*Hướng dẫn giải:*
1. Vì $MN$ là đường trung bình của tam giác $ABC$, nên $MN \parallel BC$ và $MN = \frac{1}{2}BC$. Vì hai vectơ $\vec{MN}$ và $\vec{BC}$ cùng hướng từ trái sang phải, nên chúng cùng hướng và $|\vec{MN}| = \frac{1}{2}|\vec{BC}|$.
2. Vì $P$ đối xứng với $M$ qua $N$ nên $N$ là trung điểm của $MP \Rightarrow MN = NP \Rightarrow MP = 2MN = BC$.
   Lại có $MP \parallel BC$ nên tứ giác $BCPM$ là hình bình hành $\Rightarrow \vec{MC} = \vec{BP}$.
   Mặt khác, trong tam giác $AMP$: $N$ là trung điểm $MP$ và $N$ là trung điểm $AC \Rightarrow$ tứ giác $AMCP$ là hình bình hành $\Rightarrow \vec{AP} = \vec{MC}$.
   Mà $M$ là trung điểm $AB \Rightarrow \vec{AM} = \vec{MB}$. Suy ra $\vec{AP} = \vec{MB}$.

---

### Bài tập 2 (Vật lý - Hai lực cân bằng)
Một chiếc đèn trần trang trí có khối lượng $m = 4$ kg được treo đứng yên nhờ hai sợi dây cáp đối xứng $OA$ và $OB$ gắn vào trần nhà. Trọng lực tác dụng lên chiếc đèn được mô tả bởi vectơ $\vec{P}$ hướng thẳng đứng xuống dưới với độ lớn $P = mg = 4 \times 9,8 = 39,2$ N.  
Hai lực căng dây được biểu diễn bởi hai vectơ $\vec{T}_1$ và $\vec{T}_2$.
1. Hãy giải thích tại sao tổng lực tác dụng lên chiếc đèn phải bằng vectơ-không $\vec{0}$.
2. Nếu hai dây cáp tạo với trần nhà một góc $\alpha = 45^\circ$, hãy tính độ lớn lực căng của mỗi sợi dây cáp.

*Hướng dẫn giải:*
1. Theo định luật I Newton, một vật ở trạng thái đứng yên cân bằng khi và chỉ khi hợp lực của tất cả các lực tác dụng lên vật bằng vectơ-không:
   $$\vec{T}_1 + \vec{T}_2 + \vec{P} = \vec{0}$$
2. Do tính chất đối xứng, độ lớn hai lực căng dây bằng nhau: $T_1 = T_2 = T$.  
   Hợp lực của hai lực căng dây là $\vec{T}_{12} = \vec{T}_1 + \vec{T}_2$ phải là một vectơ hướng thẳng đứng lên trên để triệt tiêu trọng lực $\vec{P}$, tức $|\vec{T}_{12}| = P = 39,2$ N.  
   Chiếu lên phương thẳng đứng:
   $$2 \cdot T \cdot \sin 45^\circ = P \iff 2 \cdot T \cdot \frac{\sqrt{2}}{2} = 39,2 \iff T\sqrt{2} = 39,2$$
   Suy ra:
   $$T = \frac{39,2}{\sqrt{2}} \approx 27,72 \text{ (N)}$$
   Lực căng mỗi sợi dây xấp xỉ **27,72 N**.
