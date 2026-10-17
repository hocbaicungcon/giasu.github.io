---
title: 'Toán 9 Bài 30: Đa giác đều - Cấu trúc Đối xứng, Góc ở tâm, Bán kính & Ứng dụng Tự nhiên'
description: 'Lý thuyết toàn diện Bài 30 Toán 9: Định nghĩa đa giác đều, tâm, góc ở tâm, góc ở đỉnh, bán kính ngoại tiếp R, bán kính nội tiếp r, tam giác đều, hình vuông, lục giác đều, widget tương tác đa giác đều n cạnh và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Đa giác đều
  - Lục giác đều
  - Góc ở tâm
  - Bán kính ngoại tiếp
  - Kết nối tri thức
grade: 9
---

# Bài 30. Đa giác đều

Trong thế giới tự nhiên và các kiệt tác kiến trúc nhân loại, hình ảnh các **đa giác đều** luôn toát lên vẻ đẹp cân xứng, hài hòa và chuẩn mực tuyệt đối:
- Những tổ ong mật với hàng nghìn lỗ hình **lục giác đều** hoàn hảo đến kinh ngạc — cấu trúc được toán học chứng minh là tiết kiệm sáp ong nhất nhưng lại chịu lực tốt nhất trong không gian.
- Những bông tuyết mùa đông rơi xuống với cấu trúc đối xứng $6$ cánh tinh xảo.
- Các đầu bu-lông, đai ốc cơ khí luôn được gia công dạng lục giác đều để cờ-lê có thể truyền lực vặn tối đa mà không làm toét ốc.

Về bản chất toán học, đa giác đều chính là "cầu nối" trung gian giữa các hình đa giác góc cạnh và **đường tròn hoàn mỹ**: Khi số cạnh $n$ của đa giác đều tăng dần lên vô cùng ($n \to \infty$), đa giác đều sẽ tiệm cận khít khao đến hình tròn — chính là phương pháp thấu triệt mà nhà bác học cổ đại Archimedes đã dùng để tính xấp xỉ số $\pi$ lừng danh!

Cùng khám phá công thức, tính chất và các phép biến đổi hình học của **Đa giác đều** trong bài học hôm nay nhé!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐA GIÁC ĐỀU & ĐƯỜNG TRÒN ĐỒNG TÂM</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Đa giác đều</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đa giác có <strong>tất cả các cạnh bằng nhau</strong> và <strong>tất cả các góc bằng nhau</strong>.<br>• Số cạnh: $n \ge 3$.<br>• Tam giác đều ($n=3$), hình vuông ($n=4$), ngũ giác đều ($n=5$), lục giác đều ($n=6$)...</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hai đường tròn đồng tâm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bất kỳ đa giác đều nào cũng có 1 đường tròn ngoại tiếp $(O; R)$ và 1 đường tròn nội tiếp $(O; r)$.<br>• Hai đường tròn này có <strong>cùng tâm $O$</strong> (gọi là tâm của đa giác đều).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Công thức Góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Góc ở tâm:</strong> $\beta = \frac{360^\circ}{n}$.<br>• <strong>Góc ở đỉnh:</strong> $\alpha = \frac{(n-2) \times 180^\circ}{n}$.<br>• Tổng tất cả các góc trong: $S = (n-2) \times 180^\circ$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Lục giác đều ($n=6$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Góc ở tâm: $60^\circ$. Góc ở đỉnh: $120^\circ$.<br>• <strong>Cạnh bằng bán kính ngoại tiếp:</strong> $a = R$.<br>• Tạo bởi 6 tam giác đều bằng nhau ghép lại.<br>• Bán kính nội tiếp: $r = \frac{R\sqrt{3}}{2}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Góc lục giác:** Mỗi góc ở đỉnh của một lục giác đều có số đo bằng bao nhiêu độ?
2. **Góc ở tâm:** Góc ở tâm chắn một cạnh của hình vuông bằng bao nhiêu độ?
3. **Cạnh lục giác đều:** Nếu đường tròn ngoại tiếp một lục giác đều có bán kính $R = 5\text{ cm}$, thì độ dài mỗi cạnh của lục giác đều đó bằng bao nhiêu?
4. **Phân biệt:** Hình thoi có 4 cạnh bằng nhau có phải luôn là đa giác đều không?
5. **Tổng các góc:** Tổng số đo các góc trong của một ngũ giác đều bằng bao nhiêu độ?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: $\frac{(6-2) \times 180^\circ}{6} = \frac{720^\circ}{6} = 120^\circ$.
> - Câu 2: $\frac{360^\circ}{4} = 90^\circ$.
> - Câu 3: Lục giác đều có cạnh bằng đúng bán kính ngoại tiếp $\implies a = R = 5\text{ cm}$.
> - Câu 4: **Không**, vì các góc của hình thoi chưa chắc bằng nhau (chỉ khi là hình vuông mới là đa giác đều).
> - Câu 5: $(5-2) \times 180^\circ = 3 \times 180^\circ = 540^\circ$.

---

## Lý thuyết trọng tâm

### 1. Khái niệm Đa giác đều

> [!NOTE]
> **Định nghĩa Đa giác đều:**
> **Đa giác đều** là đa giác có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.

*Ví dụ điển hình:*
- Tam giác đều (đa giác đều 3 cạnh, mỗi góc $60^\circ$).
- Hình vuông (đa giác đều 4 cạnh, mỗi góc $90^\circ$).
- Ngũ giác đều (đa giác đều 5 cạnh, mỗi góc $108^\circ$).
- Lục giác đều (đa giác đều 6 cạnh, mỗi góc $120^\circ$).
- Bát giác đều (đa giác đều 8 cạnh, mỗi góc $135^\circ$).

---

### 2. Đường tròn ngoại tiếp và Đường tròn nội tiếp đa giác đều

> [!NOTE]
> **Định lý về hai đường tròn đồng tâm:**
> Bất kỳ đa giác đều nào cũng có một và chỉ một đường tròn ngoại tiếp, một và chỉ một đường tròn nội tiếp.
> Tâm của hai đường tròn này trùng nhau và được gọi là **tâm của đa giác đều**.

- **Tâm $O$:** Giao điểm của các đường trung trực của các cạnh (đồng thời là giao điểm các đường phân giác của các góc).
- **Bán kính ngoại tiếp $R$:** Khoảng cách từ tâm $O$ đến các đỉnh của đa giác đều.
- **Bán kính nội tiếp $r$ (còn gọi là trung đoạn):** Khoảng cách từ tâm $O$ đến trung điểm của mỗi cạnh.

---

### 3. Hệ thống Công thức Toàn diện cho Đa giác đều $n$ cạnh

Giả sử đa giác đều có $n$ cạnh ($n \ge 3$), cạnh có độ dài là $a$, bán kính ngoại tiếp là $R$, bán kính nội tiếp là $r$:

1. **Tổng số đo các góc trong:**
   $$S_n = (n - 2) \times 180^\circ$$
2. **Số đo mỗi góc ở đỉnh:**
   $$\alpha_n = \frac{(n - 2) \times 180^\circ}{n}$$
3. **Số đo góc ở tâm chắn một cạnh:**
   $$\beta_n = \frac{360^\circ}{n}$$
4. **Mối liên hệ giữa cạnh $a$, bán kính $R$ và $r$:**
   Tam giác $OAB$ cân tại $O$ với $OA = OB = R$, góc $\widehat{AOB} = \frac{360^\circ}{n}$. Gọi $H$ là trung điểm $AB \implies OH = r$ và $\widehat{AOH} = \frac{180^\circ}{n}$.
   $$a = 2 R \sin\left(\frac{180^\circ}{n}\right)$$
   $$r = R \cos\left(\frac{180^\circ}{n}\right) = \frac{a}{2 \tan\left(\frac{180^\circ}{n}\right)}$$
5. **Chu vi và Diện tích:**
   - Chu vi: $C = n \cdot a$
   - Diện tích: $S = \frac{1}{2} C \cdot r = \frac{n \cdot a \cdot r}{2} = \frac{n}{2} R^2 \sin\left(\frac{360^\circ}{n}\right)$

---

### 4. Bảng Tra cứu Nhanh các Đa giác đều Quen thuộc

| Đa giác đều | Số cạnh $n$ | Góc ở tâm $\beta$ | Góc ở đỉnh $\alpha$ | Cạnh $a$ theo $R$ | Bán kính nội tiếp $r$ theo $R$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tam giác đều** | $3$ | $120^\circ$ | $60^\circ$ | $a = R\sqrt{3}$ | $r = \frac{R}{2}$ |
| **Hình vuông** | $4$ | $90^\circ$ | $90^\circ$ | $a = R\sqrt{2}$ | $r = \frac{R\sqrt{2}}{2}$ |
| **Lục giác đều** | $6$ | $60^\circ$ | $120^\circ$ | **$a = R$** | $r = \frac{R\sqrt{3}}{2}$ |
| **Bát giác đều** | $8$ | $45^\circ$ | $135^\circ$ | $a = R\sqrt{2 - \sqrt{2}}$ | $r = \frac{R\sqrt{2 + \sqrt{2}}}{2}$ |

---

## Phòng thí nghiệm Tương tác: Trình Biến hình Đa giác đều $n$ cạnh

Hãy di chuyển thanh trượt số cạnh từ $n = 3$ đến $n = 12$ để quan sát đa giác đều tự động vẽ, hai đường tròn ngoại tiếp $(O; R)$ và nội tiếp $(O; r)$ co giãn, và thấy tỉ số $r/R$ tiệm cận dần về $1$ khi $n$ tăng lên!

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: ĐA GIÁC ĐỀU N CẠNH VÀ SỰ TIỆM CẬN ĐƯỜNG TRÒN</h3>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-bottom: 20px;">
    <label style="font-weight: bold; color: #334155;">Số cạnh ($n$):</label>
    <input type="range" id="slPolyN" min="3" max="12" value="6" step="1" style="width: 180px;" oninput="renderRegularPoly()">
    <span id="txtPolyN" style="font-size: 1.2em; font-weight: bold; color: #2563eb; min-width: 30px;">6</span>
  </div>

  <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap;">
    <button onclick="setN(3)" style="padding: 4px 12px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85em;">n = 3 (Tam giác đều)</button>
    <button onclick="setN(4)" style="padding: 4px 12px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85em;">n = 4 (Hình vuông)</button>
    <button onclick="setN(6)" style="padding: 4px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85em;" id="btnN6">n = 6 (Lục giác đều)</button>
    <button onclick="setN(8)" style="padding: 4px 12px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85em;">n = 8 (Bát giác đều)</button>
  </div>

  <div style="display: flex; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <svg data-interactive-done="true" id="svgPoly" width="340" height="340" viewBox="-170 -170 340 340" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div id="polyCalcStats" style="margin-top: 14px; padding: 12px; background: #eff6ff; border-radius: 8px; text-align: center; font-size: 0.9em; border: 1px solid #bfdbfe;"></div>
</div>

<script>
function setN(val) {
  document.getElementById('slPolyN').value = val;
  renderRegularPoly();
}

function renderRegularPoly() {
  const n = parseInt(document.getElementById('slPolyN').value);
  document.getElementById('txtPolyN').textContent = n;

  const svg = document.getElementById('svgPoly');
  svg.innerHTML = '';
  const R = 120;

  // Outer circle (circumcircle)
  const outerCirc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  outerCirc.setAttribute('cx', 0); outerCirc.setAttribute('cy', 0); outerCirc.setAttribute('r', R);
  outerCirc.setAttribute('fill', 'none'); outerCirc.setAttribute('stroke', '#3b82f6');
  outerCirc.setAttribute('stroke-width', '2'); outerCirc.setAttribute('stroke-dasharray', '4,4');
  svg.appendChild(outerCirc);

  // Inscribed circle radius r = R * cos(pi/n)
  const r = R * Math.cos(Math.PI / n);
  const innerCirc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  innerCirc.setAttribute('cx', 0); innerCirc.setAttribute('cy', 0); innerCirc.setAttribute('r', r);
  innerCirc.setAttribute('fill', 'rgba(239, 68, 68, 0.05)'); innerCirc.setAttribute('stroke', '#ef4444');
  innerCirc.setAttribute('stroke-width', '1.5');
  svg.appendChild(innerCirc);

  // Vertices of regular polygon
  const pts = [];
  const startAngle = -Math.PI / 2; // start at top
  for (let i = 0; i < n; i++) {
    const theta = startAngle + (i * 2 * Math.PI) / n;
    pts.push({ x: R * Math.cos(theta), y: R * Math.sin(theta) });
  }

  // Draw Polygon
  const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  poly.setAttribute('points', pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '));
  poly.setAttribute('fill', 'rgba(37, 99, 235, 0.1)');
  poly.setAttribute('stroke', '#1d4ed8');
  poly.setAttribute('stroke-width', '2.5');
  svg.appendChild(poly);

  // Center point
  const centerPt = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  centerPt.setAttribute('cx', 0); centerPt.setAttribute('cy', 0); centerPt.setAttribute('r', '4');
  centerPt.setAttribute('fill', '#0f172a');
  svg.appendChild(centerPt);

  // Draw radii to first two vertices to show central angle
  const rLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  rLine1.setAttribute('x1', 0); rLine1.setAttribute('y1', 0);
  rLine1.setAttribute('x2', pts[0].x); rLine1.setAttribute('y2', pts[0].y);
  rLine1.setAttribute('stroke', '#0f172a'); rLine1.setAttribute('stroke-dasharray', '2,2');
  svg.appendChild(rLine1);

  const rLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  rLine2.setAttribute('x1', 0); rLine2.setAttribute('y1', 0);
  rLine2.setAttribute('x2', pts[1].x); rLine2.setAttribute('y2', pts[1].y);
  rLine2.setAttribute('stroke', '#0f172a'); rLine2.setAttribute('stroke-dasharray', '2,2');
  svg.appendChild(rLine2);

  // Vertices circles
  pts.forEach(p => {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', '4');
    c.setAttribute('fill', '#1d4ed8');
    svg.appendChild(c);
  });

  const centerAng = (360 / n).toFixed(1);
  const vertexAng = (((n - 2) * 180) / n).toFixed(1);
  const ratio = (r / R).toFixed(3);

  document.getElementById('polyCalcStats').innerHTML = `
    Đa giác đều <strong>n = ${n} cạnh</strong> | Góc ở tâm: <strong>${centerAng}°</strong> | Góc ở đỉnh: <strong>${vertexAng}°</strong><br>
    Bán kính ngoại tiếp R (xanh) & Bán kính nội tiếp r (đỏ) ⟹ Tỉ số <strong>r / R = ${ratio}</strong> (Tiệm cận 1.000 khi n lớn)
  `;
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', renderRegularPoly); } else { renderRegularPoly(); }
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính số đo các góc của Đa giác đều

**Phương pháp giải:**
1. Góc ở tâm chắn một cạnh: $\beta = \frac{360^\circ}{n}$.
2. Số đo mỗi góc ở đỉnh: $\alpha = \frac{(n-2) \times 180^\circ}{n}$.
3. Số đường chéo của đa giác $n$ cạnh: $d = \frac{n(n-3)}{2}$.

---

#### Ví dụ 1
Một đa giác đều có số đo mỗi góc ở đỉnh bằng $144^\circ$.
a) Hỏi đa giác đều đó có bao nhiêu cạnh?  
b) Tính số đo góc ở tâm và số đường chéo của đa giác đều này.

**Lời giải chi tiết:**
a) Gọi $n$ là số cạnh của đa giác đều ($n \in \mathbb{N}, n \ge 3$).
Theo công thức góc ở đỉnh của đa giác đều:
$$\frac{(n - 2) \times 180^\circ}{n} = 144^\circ$$
$$180^\circ n - 360^\circ = 144^\circ n \implies 36^\circ n = 360^\circ \implies n = 10$$
Vậy đa giác đều này có **$10$ cạnh** (thập giác đều).

b) Số đo góc ở tâm chắn một cạnh là:
$$\beta = \frac{360^\circ}{10} = 36^\circ$$
Số đường chéo của đa giác đều 10 cạnh là:
$$d = \frac{10 \times (10 - 3)}{2} = \frac{10 \times 7}{2} = 35 \text{ (đường chéo)}$$

---

### Dạng 2: Tính cạnh, bán kính và diện tích Lục giác đều

**Phương pháp giải:**
Lục giác đều là đa giác đều quan trọng bậc nhất trong chương trình:
1. Độ dài cạnh bằng đúng bán kính ngoại tiếp: $a = R$.
2. Bán kính nội tiếp: $r = \frac{R\sqrt{3}}{2} = \frac{a\sqrt{3}}{2}$.
3. Diện tích lục giác đều gồm $6$ tam giác đều cạnh $a$ ghép lại:
   $$S = 6 \times \left(\frac{a^2\sqrt{3}}{4}\right) = \frac{3a^2\sqrt{3}}{2}$$

---

#### Ví dụ 2
Cho lục giác đều $ABCDEF$ nội tiếp đường tròn $(O; 4\text{ cm})$.
a) Tính độ dài cạnh và bán kính đường tròn nội tiếp của lục giác đều.  
b) Tính chu vi và diện tích của lục giác đều $ABCDEF$.  
c) Tính diện tích phần hình tròn nằm bên ngoài lục giác đều.

**Lời giải chi tiết:**
a) Lục giác đều nội tiếp đường tròn $(O; R)$ có bán kính $R = 4\text{ cm}$:
- Độ dài mỗi cạnh của lục giác đều bằng bán kính ngoại tiếp:
  $$a = R = 4\text{ cm}$$
- Bán kính đường tròn nội tiếp (trung đoạn):
  $$r = \frac{R\sqrt{3}}{2} = \frac{4\sqrt{3}}{2} = 2\sqrt{3}\text{ (cm)}$$

b) Chu vi của lục giác đều:
$$C = 6 \times a = 6 \times 4 = 24\text{ (cm)}$$
Diện tích lục giác đều:
$$S_{\text{lục giác}} = \frac{3a^2\sqrt{3}}{2} = \frac{3 \times 4^2 \times \sqrt{3}}{2} = 24\sqrt{3} \approx 41,57\text{ (cm}^2\text{)}$$

c) Diện tích hình tròn ngoại tiếp $(O; R)$:
$$S_{\text{tròn}} = \pi R^2 = \pi \times 4^2 = 16\pi \approx 50,27\text{ (cm}^2\text{)}$$
Diện tích phần hình tròn nằm ngoài lục giác đều:
$$S_{\text{ngoài}} = S_{\text{tròn}} - S_{\text{lục giác}} = 16\pi - 24\sqrt{3} \approx 50,27 - 41,57 = 8,70\text{ (cm}^2\text{)}$$

---

### Dạng 3: Dựng Đa giác đều bằng Thước và Compa

**Phương pháp giải:**
1. **Dựng Tam giác đều:** Vẽ $(O; R)$, kẻ đường kính $AB$. Dựng đường trung trực của $OA$ cắt đường tròn tại $C$ và $D$. Khi đó $\Delta BCD$ là tam giác đều.
2. **Dựng Hình vuông:** Vẽ hai đường kính $AB \perp CD$ vuông góc với nhau. Nối lần lượt $A, C, B, D$ ta được hình vuông.
3. **Dựng Lục giác đều:** Vẽ $(O; R)$. Từ một điểm $A$ bất kỳ trên đường tròn, dùng compa giữ nguyên khẩu độ bằng bán kính $R$, vạch liên tiếp các cung có bán kính bằng $R$ cắt đường tròn tại $B, C, D, E, F$. Nối các điểm liên tiếp ta được lục giác đều $ABCDEF$.

---

#### Ví dụ 3
Nêu các bước dựng một hình vuông nội tiếp đường tròn $(O; R)$ chỉ bằng thước thẳng và compa.

**Lời giải chi tiết:**
- **Bước 1:** Vẽ đường tròn tâm $O$ bán kính $R$.
- **Bước 2:** Dùng thước vẽ một đường kính $AB$ bất kỳ của đường tròn.
- **Bước 3:** Dùng compa dựng đường trung trực của đoạn thẳng $AB$. Đường trung trực này đi qua tâm $O$ và cắt đường tròn tại hai điểm phân biệt $C$ và $D$. Khi đó $CD$ là đường kính thứ hai và $CD \perp AB$.
- **Bước 4:** Dùng thước nối lần lượt các đoạn thẳng $AC, CB, BD, DA$. Ta thu được tứ giác $ACBD$ chính là hình vuông nội tiếp đường tròn $(O; R)$.

---

### Dạng 4: Bài toán Lát phẳng (Tessellation) bằng Đa giác đều

**Phương pháp giải:**
Để các đa giác đều cùng loại có thể ghép khít nhau lát kín mặt phẳng mà không có khe hở hay chồng chéo:
- Tổng các góc gặp nhau tại mỗi đỉnh chung phải đúng bằng $360^\circ$.
- Tức là số đo góc ở đỉnh $\alpha$ phải là ước của $360^\circ$:
  $$\frac{360^\circ}{\alpha} = k \quad (k \in \mathbb{N}, k \ge 3)$$
- Thử lại các đa giác đều:
  + Tam giác đều: $\alpha = 60^\circ \implies \frac{360^\circ}{60^\circ} = 6$ (ghép 6 tam giác).
  + Hình vuông: $\alpha = 90^\circ \implies \frac{360^\circ}{90^\circ} = 4$ (ghép 4 hình vuông).
  + Ngũ giác đều: $\alpha = 108^\circ \implies \frac{360^\circ}{108^\circ} = 3,33$ (không chia hết $\implies$ không lát được).
  + Lục giác đều: $\alpha = 120^\circ \implies \frac{360^\circ}{120^\circ} = 3$ (ghép 3 lục giác).
- **Kết luận lịch sử:** Chỉ có đúng **3 loại đa giác đều** có thể lát kín mặt phẳng: Tam giác đều, Hình vuông và Lục giác đều!

---

#### Ví dụ 4
Chứng minh rằng không thể dùng các viên gạch hình ngũ giác đều để lát kín một mặt sàn nhà phẳng.

**Lời giải chi tiết:**
- Mỗi góc ở đỉnh của ngũ giác đều có số đo là:
  $$\alpha_5 = \frac{(5 - 2) \times 180^\circ}{5} = \frac{540^\circ}{5} = 108^\circ$$
- Để các viên gạch ngũ giác đều ghép khít nhau quanh một đỉnh chung mà không có khe hở, tổng số đo các góc gặp nhau tại đỉnh đó phải bằng $360^\circ$.
- Ta xét phép chia:
  $$\frac{360^\circ}{108^\circ} = \frac{10}{3} = 3\frac{1}{3} \notin \mathbb{N}$$
- Nếu ghép $3$ viên gạch ngũ giác đều tại một đỉnh, tổng góc là $3 \times 108^\circ = 324^\circ < 360^\circ$ (bị hở một khe $36^\circ$).
- Nếu ghép $4$ viên gạch, tổng góc là $4 \times 108^\circ = 432^\circ > 360^\circ$ (bị chồng đè lên nhau).
Vậy không thể dùng các viên gạch hình ngũ giác đều để lát kín mặt sàn nhà phẳng.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Vật liệu Siêu Nhẹ & Tổ Ong Hàng Không (Honeycomb Sandwich Core):** Cánh máy bay Boeing 787 và vỏ tàu vũ trụ NASA sử dụng lõi kết cấu tổ ong lục giác đều kẹp giữa hai tấm sợi carbon. Cấu trúc này giảm $60\%$ trọng lượng nhưng tăng độ cứng uốn gấp $8$ lần so với thép đặc.
2. **Vật liệu Kỳ Diệu Graphene:** Graphene — vật liệu mỏng nhất và bền nhất thế giới từng đoạt giải Nobel Vật lý — được cấu tạo từ một lớp đơn nguyên tử carbon sắp xếp theo mạng lưới tinh thể lục giác đều.
3. **Tiêu chuẩn Bu-lông Đai ốc Công nghiệp:** Đầu bu-lông dạng lục giác đều cho phép người thợ máy chỉ cần xoay cờ-lê một góc $60^\circ$ là có thể tiếp tục bắt vào cạnh tiếp theo, cực kỳ thuận tiện trong không gian hẹp của khoang máy ô tô.
4. **Đồ họa Game Low-Poly & Mạng Lưới Đa giác:** Trong lập trình game và đồ họa 3D, các bề mặt địa hình được chia nhỏ thành các lưới đa giác đều (tam giác và lục giác) giúp card đồ họa GPU tính toán đổ bóng ánh sáng với tốc độ 120 FPS.
5. **Kính Viễn vọng Không gian James Webb (JWST):** Gương sơ cấp khổng lồ đường kính $6,5\text{ m}$ của kính thiên văn James Webb được ghép từ $18$ tấm gương nhỏ hình lục giác đều mạ vàng, cho phép gấp gọn trong tên lửa đẩy Ariane 5 và mở ra tự động giữa không gian.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Một đa giác được gọi là đa giác đều nếu thỏa mãn điều kiện nào sau đây?",
  "options": [
    "A. Tất cả các cạnh bằng nhau",
    "B. Tất cả các góc bằng nhau",
    "C. Tất cả các cạnh bằng nhau và tất cả các góc bằng nhau",
    "D. Có số cạnh bằng số đường chéo"
  ],
  "answer": "C. Tất cả các cạnh bằng nhau và tất cả các góc bằng nhau",
  "explanation": "Định nghĩa: Đa giác đều là đa giác có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Số đo mỗi góc ở đỉnh của một bát giác đều (8 cạnh) bằng:",
  "options": [
    "A. 120°",
    "B. 135°",
    "C. 144°",
    "D. 150°"
  ],
  "answer": "B. 135°",
  "explanation": "alpha = (8 - 2) * 180° / 8 = 6 * 180° / 8 = 1080° / 8 = 135°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Góc ở tâm chắn một cạnh của một ngũ giác đều (5 cạnh) có số đo bằng:",
  "options": [
    "A. 60°",
    "B. 72°",
    "C. 108°",
    "D. 90°"
  ],
  "answer": "B. 72°",
  "explanation": "beta = 360° / 5 = 72°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Mối quan hệ giữa độ dài cạnh a và bán kính đường tròn ngoại tiếp R của một lục giác đều là:",
  "options": [
    "A. a = R * căn(3)",
    "B. a = R * căn(2)",
    "C. a = R",
    "D. a = R / 2"
  ],
  "answer": "C. a = R",
  "explanation": "Lục giác đều gồm 6 tam giác đều cạnh a ghép lại, khoảng cách từ tâm đến các đỉnh chính là bán kính ngoại tiếp R, do đó a = R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hình vuông có cạnh a = 6 cm. Bán kính đường tròn nội tiếp r của hình vuông này bằng:",
  "options": [
    "A. 6 cm",
    "B. 3 cm",
    "C. 3 * căn(2) cm",
    "D. 4 cm"
  ],
  "answer": "B. 3 cm",
  "explanation": "Bán kính đường tròn nội tiếp hình vuông bằng một nửa cạnh: r = a / 2 = 6 / 2 = 3 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đa giác đều có 20 đường chéo là đa giác đều có bao nhiêu cạnh?",
  "options": [
    "A. 6 cạnh",
    "B. 8 cạnh",
    "C. 10 cạnh",
    "D. 7 cạnh"
  ],
  "answer": "B. 8 cạnh",
  "explanation": "Công thức số đường chéo: n*(n-3)/2 = 20 => n*(n-3) = 40 => n^2 - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8 (bát giác)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Diện tích của một lục giác đều có cạnh bằng 2 cm là:",
  "options": [
    "A. 6 * căn(3) cm²",
    "B. 12 * căn(3) cm²",
    "C. 8 * căn(3) cm²",
    "D. 4 * căn(3) cm²"
  ],
  "answer": "A. 6 * căn(3) cm²",
  "explanation": "S = 6 * (a^2 * căn(3) / 4) = 6 * (4 * căn(3) / 4) = 6 * căn(3) cm²."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Khẳng định nào sau đây là SAI?",
  "options": [
    "A. Bất kỳ đa giác đều nào cũng có tâm đường tròn ngoại tiếp trùng với tâm đường tròn nội tiếp",
    "B. Mọi tam giác đều đều là đa giác đều",
    "C. Mọi hình thoi đều là đa giác đều",
    "D. Mọi hình vuông đều là đa giác đều"
  ],
  "answer": "C. Mọi hình thoi đều là đa giác đều",
  "explanation": "Hình thoi chỉ có các cạnh bằng nhau, nhưng các góc chưa chắc bằng nhau nên hình thoi nói chung không phải đa giác đều."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Bán kính đường tròn nội tiếp r của một tam giác đều cạnh a bằng:",
  "options": [
    "A. a * căn(3) / 6",
    "B. a * căn(3) / 3",
    "C. a * căn(3) / 2",
    "D. a / 3"
  ],
  "answer": "A. a * căn(3) / 6",
  "explanation": "r = (1/3) * h = (1/3) * (a * căn(3) / 2) = a * căn(3) / 6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Có bao nhiêu loại đa giác đều có thể lát kín mặt phẳng chỉ bằng các viên gạch cùng một loại?",
  "options": [
    "A. 2 loại (Tam giác đều, Hình vuông)",
    "B. 3 loại (Tam giác đều, Hình vuông, Lục giác đều)",
    "C. 4 loại (thêm Ngũ giác đều)",
    "D. Vô số loại"
  ],
  "answer": "B. 3 loại (Tam giác đều, Hình vuông, Lục giác đều)",
  "explanation": "Chỉ có 3 loại đa giác đều có số đo góc ở đỉnh là ước của 360° (60°, 90°, 120°), do đó chỉ có đúng 3 loại có thể lát phẳng."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tính góc và số cạnh:** Một đa giác đều có tổng số đo tất cả các góc trong bằng $1\,440^\circ$.
   a) Hỏi đa giác đều đó có bao nhiêu cạnh?  
   b) Tính số đo mỗi góc ở đỉnh và số đo góc ở tâm chắn một cạnh của đa giác này.

2. **Lục giác đều nâng cao:** Cho lục giác đều $ABCDEF$ có cạnh bằng $6\text{ cm}$.
   a) Tính bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$.  
   b) Tính độ dài đường chéo ngắn $AC$ và đường chéo dài $AD$.  
   c) Tính diện tích tam giác $ACD$.

---

### Thử thách Thực tế: Tối Ưu Hóa Kết Cấu Tổ Ong Trong Chế Tạo Vỏ Vệ Tinh (Aerospace Honeycomb Core)

**Bối cảnh:** Một nhóm kỹ sư hàng không vũ trụ cần thiết kế tấm pin mặt trời cho vệ tinh nhân tạo. Tấm pin được cấu tạo từ các cell pin hình lục giác đều ghép khít nhau:
- Mỗi cell pin có cạnh $a = 5\text{ cm}$.
- Khung tấm pin hình chữ nhật có kích thước $1\text{ m} \times 1,5\text{ m}$.

**Yêu cầu:**
1. Tính diện tích của một cell pin hình lục giác đều.
2. So sánh diện tích của cell pin lục giác đều với một cell pin hình vuông có cùng chu vi. Hình nào có diện tích lớn hơn?
3. Giải thích tại sao cấu trúc tổ ong lục giác đều lại được chọn làm tiêu chuẩn vàng cho các tấm vật liệu hàng không vũ trụ.
