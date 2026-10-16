---
title: 'Toán 9 Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác - Tâm, Bán kính & Hệ thức Vàng'
description: 'Lý thuyết chuẩn mực Bài 28 Toán 9: Định nghĩa đường tròn ngoại tiếp, đường tròn nội tiếp tam giác, vị trí tâm O (trung trực), tâm I (phân giác), công thức tính R và r cho tam giác đều, tam giác vuông, widget tương tác hình học và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Đường tròn ngoại tiếp
  - Đường tròn nội tiếp
  - Bán kính R và r
  - Tam giác
  - Kết nối tri thức
grade: 9
---

# Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác

Trong tự nhiên và kỹ thuật, tam giác là hình học cứng vững nhất (không bị biến dạng dưới tải trọng), trong khi đường tròn lại là hình học hoàn hảo nhất về tính đối xứng và tối ưu hóa diện tích.

Khi hai hình học hoàn mỹ này kết hợp với nhau, chúng tạo nên hai khái niệm trụ cột của Hình học phẳng:
- **Đường tròn ngoại tiếp:** Bao bọc trọn vẹn bên ngoài, đi qua cả $3$ đỉnh của tam giác — ứng dụng cốt lõi trong thuật toán tam giác đạc định vị GPS và phân hoạch không gian đồ họa máy tính (Delaunay Triangulation).
- **Đường tròn nội tiếp:** Nằm khít khao bên trong, tiếp xúc với cả $3$ cạnh của tam giác — nền tảng thiết kế bánh răng hành tinh cơ khí và kết cấu chịu lực vòm đá kiến trúc.

Bài học này sẽ giúp các em nắm vững phương pháp xác định tâm, công thức tính nhanh bán kính $R$ và $r$ trong các trường hợp đặc biệt (tam giác vuông, tam giác đều, tam giác cân) và làm chủ các kỹ thuật giải toán hình học lớp 9 thường gặp trong đề thi tuyển sinh vào lớp 10!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐƯỜNG TRÒN NGOẠI TIẾP & NỘI TIẾP TAM GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đường tròn Ngoại tiếp $(O; R)$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đi qua cả 3 đỉnh $A, B, C$ của tam giác.<br>• Tâm $O$: Giao điểm của <strong>3 đường trung trực</strong>.<br>• Bán kính $R = OA = OB = OC$.<br>• Tam giác vuông: $O$ là trung điểm cạnh huyền, $R = \frac{\text{cạnh huyền}}{2}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đường tròn Nội tiếp $(I; r)$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tiếp xúc với cả 3 cạnh của tam giác.<br>• Tâm $I$: Giao điểm của <strong>3 đường phân giác trong</strong>.<br>• Bán kính $r$: Khoảng cách từ $I$ đến các cạnh.<br>• Công thức diện tích: $S = p \cdot r \implies r = \frac{S}{p}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tam giác Đều cạnh $a$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tâm ngoại tiếp và tâm nội tiếp <strong>trùng nhau</strong> ($O \equiv I$).<br>• Chiều cao: $h = \frac{a\sqrt{3}}{2}$.<br>• $R = \frac{2}{3}h = \frac{a\sqrt{3}}{3}$.<br>• $r = \frac{1}{3}h = \frac{a\sqrt{3}}{6}$. Luôn có: $R = 2r$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tam giác Vuông</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vuông tại $A$, cạnh huyền $a$, hai cạnh góc vuông $b, c$.<br>• $R = \frac{a}{2}$.<br>• Bán kính nội tiếp tính nhanh:<br>$$r = \frac{b + c - a}{2} = p - a$$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Giao điểm:** Tâm của đường tròn ngoại tiếp tam giác là giao điểm của 3 đường nào?
2. **Giao điểm:** Tâm của đường tròn nội tiếp tam giác là giao điểm của 3 đường nào?
3. **Tam giác vuông:** Tâm đường tròn ngoại tiếp tam giác vuông nằm ở vị trí nào?
4. **Tỉ số trong tam giác đều:** Trong một tam giác đều, tỉ số giữa bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$ bằng bao nhiêu?
5. **Tính nhanh $R$:** Cho tam giác vuông có hai cạnh góc vuông là $6\text{ cm}$ và $8\text{ cm}$. Bán kính đường tròn ngoại tiếp tam giác này bằng bao nhiêu?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: Giao điểm của **3 đường trung trực**.
> - Câu 2: Giao điểm của **3 đường phân giác trong**.
> - Câu 3: Nằm tại **trung điểm của cạnh huyền**.
> - Câu 4: $R = 2r \implies \frac{R}{r} = 2$.
> - Câu 5: Cạnh huyền $a = \sqrt{6^2 + 8^2} = 10\text{ cm} \implies R = \frac{10}{2} = 5\text{ cm}$.

---

## Lý thuyết trọng tâm

### 1. Đường tròn ngoại tiếp tam giác

> [!NOTE]
> **Định nghĩa Đường tròn ngoại tiếp tam giác:**
> Đường tròn đi qua cả ba đỉnh của một tam giác được gọi là **đường tròn ngoại tiếp** tam giác đó. Khi đó, tam giác được gọi là **nội tiếp** đường tròn.

**Đặc điểm và cách dựng tâm:**
- Qua ba điểm không thẳng hàng luôn luôn vẽ được một và chỉ một đường tròn.
- **Tâm $O$:** Là giao điểm của các đường trung trực của tam giác (vì $OA = OB = OC = R$).
- **Bán kính $R$:** Khoảng cách từ $O$ đến bất kỳ đỉnh nào của tam giác:
  $$R = OA = OB = OC$$

**Vị trí của tâm $O$ đối với tam giác:**
- **Tam giác nhọn:** Tâm $O$ nằm **bên trong** tam giác.
- **Tam giác vuông:** Tâm $O$ là **trung điểm cạnh huyền** (nằm trên cạnh của tam giác).
  $$R = \frac{\text{cạnh huyền}}{2}$$
- **Tam giác tù:** Tâm $O$ nằm **bên ngoài** tam giác.

---

### 2. Đường tròn nội tiếp tam giác

> [!NOTE]
> **Định nghĩa Đường tròn nội tiếp tam giác:**
> Đường tròn tiếp xúc với cả ba cạnh của một tam giác được gọi là **đường tròn nội tiếp** tam giác đó. Khi đó, tam giác được gọi là **ngoại tiếp** đường tròn.

**Đặc điểm và cách dựng tâm:**
- **Tâm $I$:** Là giao điểm của ba đường phân giác trong của tam giác (vì điểm cách đều ba cạnh của tam giác).
- **Bán kính $r$:** Là khoảng cách vuông góc từ $I$ đến một cạnh bất kỳ của tam giác:
  $$r = d(I; AB) = d(I; BC) = d(I; CA)$$

> [!IMPORTANT]
> **Hệ thức diện tích và bán kính nội tiếp:**
> Gọi $a, b, c$ là độ dài ba cạnh của $\Delta ABC$, nửa chu vi là $p = \frac{a+b+c}{2}$, diện tích là $S$.
> Vì tam giác $ABC$ được chia thành 3 tam giác nhỏ $IBC, ICA, IAB$ có chung đỉnh $I$ và đường cao bằng $r$:
> $$S = S_{IBC} + S_{ICA} + S_{IAB} = \frac{1}{2}ar + \frac{1}{2}br + \frac{1}{2}cr = \left(\frac{a+b+c}{2}\right)r = p \cdot r$$
> Suy ra công thức tính bán kính đường tròn nội tiếp:
> $$r = \frac{S}{p}$$

---

### 3. Các trường hợp đặc biệt quan trọng

#### a) Tam giác đều cạnh $a$
Trong tam giác đều, các đường trung trực, phân giác, trung tuyến và đường cao đều **trùng nhau**.
- Tâm ngoại tiếp $O$ và tâm nội tiếp $I$ **trùng nhau**: $O \equiv I$ (gọi là tâm của tam giác đều).
- Chiều cao tam giác đều: $h = \frac{a\sqrt{3}}{2}$.
- Bán kính ngoại tiếp:
  $$R = \frac{2}{3}h = \frac{a\sqrt{3}}{3}$$
- Bán kính nội tiếp:
  $$r = \frac{1}{3}h = \frac{a\sqrt{3}}{6}$$
- **Mối liên hệ vĩnh cửu:** $R = 2r$.

#### b) Tam giác vuông (vuông tại $A$, cạnh huyền $a$, hai cạnh góc vuông $b, c$)
- Bán kính ngoại tiếp:
  $$R = \frac{a}{2}$$
- Bán kính nội tiếp:
  $$r = \frac{b + c - a}{2} = p - a$$
  *(Chứng minh: Tứ giác tạo bởi đỉnh góc vuông $A$ và hai tiếp điểm là hình vuông cạnh $r$, do đó $r = p - a$).*

---

## Phòng thí nghiệm Tương tác: Khám phá Tâm O và Tâm I của Tam giác

Trải nghiệm trực quan sự khác biệt giữa **Đường tròn ngoại tiếp $(O; R)$** (màu xanh lam) và **Đường tròn nội tiếp $(I; r)$** (màu đỏ ngọc). Bạn có thể bấm chọn các tam giác mẫu để quan sát sự di chuyển kỳ diệu của hai tâm!

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: ĐƯỜNG TRÒN NGOẠI TIẾP & NỘI TIẾP TAM GIÁC</h3>
  <p style="text-align: center; color: #64748b; font-size: 0.95em;">Chọn cấu hình tam giác để đối chiếu tâm ngoại tiếp O (giao trung trực) và tâm nội tiếp I (giao phân giác):</p>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
    <button onclick="setTriMode('equilateral')" id="btnEqui" style="padding: 8px 16px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.85em;">Tam giác Đều (O trùng I, R = 2r)</button>
    <button onclick="setTriMode('right')" id="btnRight" style="padding: 8px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.85em;">Tam giác Vuông (O là trung điểm huyền)</button>
    <button onclick="setTriMode('isosceles')" id="btnIso" style="padding: 8px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.85em;">Tam giác Cân</button>
  </div>

  <div style="display: flex; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <svg id="svgTriCircles" width="380" height="340" viewBox="-190 -160 380 340" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div id="triCircleStats" style="margin-top: 16px; padding: 12px; background: #f1f5f9; border-radius: 8px; text-align: center; font-size: 0.9em;"></div>
</div>

<script>
let curTriMode = 'equilateral';

function setTriMode(mode) {
  curTriMode = mode;
  document.getElementById('btnEqui').style.background = mode === 'equilateral' ? '#2563eb' : '#e2e8f0';
  document.getElementById('btnEqui').style.color = mode === 'equilateral' ? '#fff' : '#1e293b';
  document.getElementById('btnRight').style.background = mode === 'right' ? '#2563eb' : '#e2e8f0';
  document.getElementById('btnRight').style.color = mode === 'right' ? '#fff' : '#1e293b';
  document.getElementById('btnIso').style.background = mode === 'isosceles' ? '#2563eb' : '#e2e8f0';
  document.getElementById('btnIso').style.color = mode === 'isosceles' ? '#fff' : '#1e293b';
  drawTriCircles();
}

function drawTriCircles() {
  const svg = document.getElementById('svgTriCircles');
  svg.innerHTML = '';

  let A, B, C;
  if (curTriMode === 'equilateral') {
    const R = 110;
    A = { x: 0, y: -R };
    B = { x: R * Math.cos((210 * Math.PI) / 180), y: -R * Math.sin((210 * Math.PI) / 180) };
    C = { x: R * Math.cos((330 * Math.PI) / 180), y: -R * Math.sin((330 * Math.PI) / 180) };
  } else if (curTriMode === 'right') {
    // Right triangle at A
    A = { x: -80, y: 80 };
    B = { x: -80, y: -100 };
    C = { x: 120, y: 80 };
  } else {
    // Isosceles
    A = { x: 0, y: -120 };
    B = { x: -100, y: 90 };
    C = { x: 100, y: 90 };
  }

  // Lengths of sides: a=BC, b=CA, c=AB
  const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
  const a = dist(B, C);
  const b = dist(C, A);
  const c = dist(A, B);
  const p = (a + b + c) / 2;
  const area = Math.abs((A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y)) / 2);

  // Circumcircle: center O, radius R
  const dDenom = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
  const ox = ((A.x*A.x + A.y*A.y)*(B.y - C.y) + (B.x*B.x + B.y*B.y)*(C.y - A.y) + (C.x*C.x + C.y*C.y)*(A.y - B.y)) / dDenom;
  const oy = ((A.x*A.x + A.y*A.y)*(C.x - B.x) + (B.x*B.x + B.y*B.y)*(A.x - C.x) + (C.x*C.x + C.y*C.y)*(B.x - A.x)) / dDenom;
  const R = Math.hypot(A.x - ox, A.y - oy);

  // Incircle: center I, radius r
  const ix = (a * A.x + b * B.x + c * C.x) / (a + b + c);
  const iy = (a * A.y + b * B.y + c * C.y) / (a + b + c);
  const r = area / p;

  // Draw Circumcircle (Blue)
  const circum = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circum.setAttribute('cx', ox); circum.setAttribute('cy', oy); circum.setAttribute('r', R);
  circum.setAttribute('fill', 'none'); circum.setAttribute('stroke', '#3b82f6');
  circum.setAttribute('stroke-width', '2'); circum.setAttribute('stroke-dasharray', '5,5');
  svg.appendChild(circum);

  // Draw Incircle (Red)
  const incircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  incircle.setAttribute('cx', ix); incircle.setAttribute('cy', iy); incircle.setAttribute('r', r);
  incircle.setAttribute('fill', '#fef2f2'); incircle.setAttribute('stroke', '#ef4444');
  incircle.setAttribute('stroke-width', '2');
  svg.appendChild(incircle);

  // Draw Triangle sides
  const triPath = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  triPath.setAttribute('points', `${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`);
  triPath.setAttribute('fill', 'none'); triPath.setAttribute('stroke', '#0f172a');
  triPath.setAttribute('stroke-width', '2.5');
  svg.appendChild(triPath);

  // Draw Points
  const drawPt = (x, y, col, label, lx, ly) => {
    const pt = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pt.setAttribute('cx', x); pt.setAttribute('cy', y); pt.setAttribute('r', '4');
    pt.setAttribute('fill', col);
    svg.appendChild(pt);

    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', x + lx); txt.setAttribute('y', y + ly);
    txt.setAttribute('font-size', '12'); txt.setAttribute('font-weight', 'bold');
    txt.setAttribute('fill', col);
    txt.textContent = label;
    svg.appendChild(txt);
  };

  drawPt(A.x, A.y, '#0f172a', 'A', -4, -8);
  drawPt(B.x, B.y, '#0f172a', 'B', -14, 12);
  drawPt(C.x, C.y, '#0f172a', 'C', 8, 12);

  if (curTriMode === 'equilateral') {
    drawPt(ox, oy, '#8b5cf6', 'O ≡ I', 8, 4);
    document.getElementById('triCircleStats').innerHTML = `Tam giác Đều: Tâm ngoại tiếp và nội tiếp <strong>trùng nhau (O ≡ I)</strong>.<br>Bán kính ngoại tiếp: <strong>R = ${R.toFixed(1)} px</strong> | Bán kính nội tiếp: <strong>r = ${r.toFixed(1)} px</strong> | Tỉ lệ chuẩn: <strong>R = 2r</strong>`;
  } else {
    drawPt(ox, oy, '#3b82f6', 'O', 6, -4);
    drawPt(ix, iy, '#ef4444', 'I', 6, 4);
    document.getElementById('triCircleStats').innerHTML = `Bán kính ngoại tiếp (xanh): <strong>R = ${R.toFixed(1)} px</strong> (Tâm O: giao trung trực)<br>Bán kính nội tiếp (đỏ): <strong>r = ${r.toFixed(1)} px</strong> (Tâm I: giao phân giác)`;
  }
}

window.addEventListener('DOMContentLoaded', () => setTriMode('equilateral'));
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính bán kính đường tròn ngoại tiếp $R$ và nội tiếp $r$ của tam giác vuông

**Phương pháp giải:**
Cho tam giác $ABC$ vuông tại $A$ với hai cạnh góc vuông $b = AC, c = AB$, cạnh huyền $a = BC$:
1. Tính cạnh huyền bằng định lý Pythagore: $a = \sqrt{b^2 + c^2}$.
2. Bán kính đường tròn ngoại tiếp:
   $$R = \frac{a}{2}$$
3. Bán kính đường tròn nội tiếp:
   $$r = \frac{b + c - a}{2}$$

---

#### Ví dụ 1
Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\text{ cm}$ và $AC = 12\text{ cm}$.
a) Tính bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.  
b) Tính bán kính $r$ của đường tròn nội tiếp tam giác $ABC$.  
c) Tính khoảng cách giữa tâm $O$ của đường tròn ngoại tiếp và tâm $I$ của đường tròn nội tiếp.

**Lời giải chi tiết:**
a) Áp dụng định lý Pythagore trong tam giác vuông $ABC$:
$$BC = \sqrt{AB^2 + AC^2} = \sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15\text{ (cm)}$$
Tâm $O$ của đường tròn ngoại tiếp là trung điểm của cạnh huyền $BC$.
Bán kính đường tròn ngoại tiếp là:
$$R = \frac{BC}{2} = \frac{15}{2} = 7,5\text{ (cm)}$$

b) Bán kính đường tròn nội tiếp tam giác vuông $ABC$ là:
$$r = \frac{AB + AC - BC}{2} = \frac{9 + 12 - 15}{2} = \frac{6}{2} = 3\text{ (cm)}$$

c) Áp dụng hệ thức Euler về khoảng cách giữa tâm ngoại tiếp $O$ và tâm nội tiếp $I$:
$$OI^2 = R^2 - 2Rr$$
Thay số:
$$OI^2 = (7,5)^2 - 2 \times 7,5 \times 3 = 56,25 - 45 = 11,25$$
$$\implies OI = \sqrt{11,25} = \frac{3\sqrt{5}}{2} \approx 3,35\text{ (cm)}$$

---

### Dạng 2: Tính $R$ và $r$ của tam giác đều cạnh $a$

**Phương pháp giải:**
Tam giác đều cạnh $a$ có chiều cao $h = \frac{a\sqrt{3}}{2}$:
- Bán kính ngoại tiếp: $R = \frac{a\sqrt{3}}{3}$.
- Bán kính nội tiếp: $r = \frac{a\sqrt{3}}{6}$.
- Diện tích hình vành khăn nằm giữa hai đường tròn:
  $$S_{\text{vành khăn}} = \pi(R^2 - r^2) = \pi \left[ \left(\frac{a\sqrt{3}}{3}\right)^2 - \left(\frac{a\sqrt{3}}{6}\right)^2 \right] = \frac{\pi a^2}{4}$$

---

#### Ví dụ 2
Cho tam giác đều $ABC$ có cạnh $a = 6\text{ cm}$.
a) Tính bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$ của tam giác $ABC$.  
b) Tính diện tích phần mặt phẳng nằm giữa đường tròn ngoại tiếp và đường tròn nội tiếp tam giác $ABC$.

**Lời giải chi tiết:**
a) Áp dụng công thức tam giác đều:
- Bán kính đường tròn ngoại tiếp:
  $$R = \frac{a\sqrt{3}}{3} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}\text{ (cm)}$$
- Bán kính đường tròn nội tiếp:
  $$r = \frac{a\sqrt{3}}{6} = \frac{6\sqrt{3}}{6} = \sqrt{3}\text{ (cm)}$$

b) Phần mặt phẳng nằm giữa hai đường tròn chính là hình vành khăn giới hạn bởi $(O; R)$ và $(O; r)$:
$$S = \pi R^2 - \pi r^2 = \pi \left[(2\sqrt{3})^2 - (\sqrt{3})^2\right] = \pi (12 - 3) = 9\pi \approx 28,27\text{ (cm}^2\text{)}$$

---

### Dạng 3: Tính bán kính nội tiếp $r$ bằng công thức $r = \frac{S}{p}$ cho tam giác bất kỳ

**Phương pháp giải:**
1. Tính ba cạnh $a, b, c$ và nửa chu vi $p = \frac{a+b+c}{2}$.
2. Tính diện tích tam giác $S$ (bằng công thức $\frac{1}{2}\text{đáy} \times \text{cao}$ hoặc công thức Heron $S = \sqrt{p(p-a)(p-b)(p-c)}$).
3. Suy ra bán kính nội tiếp: $r = \frac{S}{p}$.

---

#### Ví dụ 3
Cho tam giác $ABC$ cân tại $A$ có $AB = AC = 10\text{ cm}$ và cạnh đáy $BC = 12\text{ cm}$.
a) Tính chiều cao $AH$ ứng với cạnh đáy $BC$ và diện tích tam giác $ABC$.  
b) Tính bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.  
c) Tính bán kính $r$ của đường tròn nội tiếp tam giác $ABC$.

**Lời giải chi tiết:**
a) Vì $\Delta ABC$ cân tại $A$ nên đường cao $AH$ đồng thời là trung tuyến:
$$BH = CH = \frac{BC}{2} = \frac{12}{2} = 6\text{ (cm)}$$
Áp dụng định lý Pythagore trong tam giác vuông $ABH$:
$$AH = \sqrt{AB^2 - BH^2} = \sqrt{10^2 - 6^2} = 8\text{ (cm)}$$
Diện tích tam giác $ABC$ là:
$$S = \frac{1}{2} BC \cdot AH = \frac{1}{2} \times 12 \times 8 = 48\text{ (cm}^2\text{)}$$

b) Gọi $O$ là tâm đường tròn ngoại tiếp tam giác $ABC$. Vì $\Delta ABC$ cân tại $A$ nên $O$ nằm trên đường cao $AH$.
Đặt $OA = OB = R \implies OH = |AH - R| = |8 - R|$.
Áp dụng định lý Pythagore trong tam giác vuông $OBH$:
$$OB^2 = OH^2 + BH^2 \implies R^2 = (8 - R)^2 + 6^2$$
$$R^2 = 64 - 16R + R^2 + 36 \implies 16R = 100 \implies R = \frac{100}{16} = 6,25\text{ (cm)}$$

c) Nửa chu vi tam giác $ABC$:
$$p = \frac{10 + 10 + 12}{2} = 16\text{ (cm)}$$
Bán kính đường tròn nội tiếp tam giác $ABC$:
$$r = \frac{S}{p} = \frac{48}{16} = 3\text{ (cm)}$$

---

### Dạng 4: Tính chất tiếp điểm của đường tròn nội tiếp

**Phương pháp giải:**
Gọi $D, E, F$ lần lượt là tiếp điểm của đường tròn nội tiếp $(I; r)$ trên các cạnh $BC, CA, AB$:
1. Theo tính chất hai tiếp tuyến cắt nhau xuất phát từ cùng một đỉnh:
   $$AF = AE = x; \quad BD = BF = y; \quad CD = CE = z$$
2. Ta có hệ phương trình:
   $$x + y = c; \quad y + z = a; \quad z + x = b$$
3. Suy ra công thức độ dài tiếp tuyến:
   $$AF = AE = p - a; \quad BD = BF = p - b; \quad CD = CE = p - c$$
   *(với $p = \frac{a+b+c}{2}$ là nửa chu vi).*

---

#### Ví dụ 4
Đường tròn nội tiếp $(I)$ tiếp xúc với ba cạnh $BC, CA, AB$ của tam giác $ABC$ lần lượt tại $D, E, F$. Biết $AB = 7\text{ cm}, BC = 8\text{ cm}, CA = 9\text{ cm}$.
Tính độ dài các đoạn thẳng $AF, BD, CE$.

**Lời giải chi tiết:**
- Nửa chu vi tam giác $ABC$:
  $$p = \frac{AB + BC + CA}{2} = \frac{7 + 8 + 9}{2} = 12\text{ (cm)}$$
- Áp dụng tính chất các đoạn tiếp tuyến cắt nhau:
  + $AF = AE = p - BC = 12 - 8 = 4\text{ (cm)}$
  + $BD = BF = p - CA = 12 - 9 = 3\text{ (cm)}$
  + $CE = CD = p - AB = 12 - 7 = 5\text{ (cm)}$

Kiểm tra lại:
- $AB = AF + BF = 4 + 3 = 7\text{ cm}$ (đúng).
- $BC = BD + CD = 3 + 5 = 8\text{ cm}$ (đúng).
- $CA = CE + AE = 5 + 4 = 9\text{ cm}$ (đúng).

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Thuật toán Tam giác đạc & Định vị Toàn cầu (Trilateration / GPS):** Máy thu GPS trên điện thoại bắt tín hiệu từ ít nhất 3 vệ tinh. Vị trí người dùng chính là giao điểm của các đường tròn ngoại tiếp xác định bởi các khoảng cách đo đạc được.
2. **Thuật toán Lưới Delaunay & Phân hoạch Voronoi trong AI:** Trong thiết kế game 3D và thị giác máy tính, thuật toán Delaunay Triangulation chia bề mặt vật thể thành các tam giác sao cho không có đỉnh nào nằm bên trong đường tròn ngoại tiếp của tam giác khác, giúp hình ảnh mượt mà và không bị méo đa giác.
3. **Quy hoạch Vị trí Trạm Phát Sóng BTS:** Các kỹ sư viễn thông tìm vị trí tối ưu để đặt trạm ăng-ten phát sóng phục vụ 3 khu dân cư chính bằng cách xác định tâm đường tròn ngoại tiếp của tam giác nối 3 khu dân cư đó, đảm bảo bán kính phủ sóng nhỏ nhất.
4. **Kiến trúc Vòm Đá & Cửa sổ Hoa Hồng Nhà thờ:** Trong kiến trúc Gothic, các họa tiết hoa hồng kinh điển được tạo nên bởi các vòng tròn nội tiếp nằm trong các cung nhọn tam giác, tối ưu hóa khả năng truyền sáng và phân tán ứng suất nén của đá.
5. **Thiết kế Cơ khí Bánh răng Trục cam:** Bán kính đường tròn nội tiếp quy định kích thước trục cam tối đa có thể lọt vào khoảng hở piston mà không gây ma sát va đập khi động cơ vận hành ở vận tốc 6000 vòng/phút.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Tâm của đường tròn ngoại tiếp tam giác là giao điểm của ba đường nào?",
  "options": [
    "A. Ba đường trung tuyến",
    "B. Ba đường trung trực",
    "C. Ba đường phân giác trong",
    "D. Ba đường cao"
  ],
  "answer": "B. Ba đường trung trực",
  "explanation": "Tâm đường tròn ngoại tiếp tam giác là giao điểm của ba đường trung trực của tam giác đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tâm của đường tròn nội tiếp tam giác là giao điểm của ba đường nào?",
  "options": [
    "A. Ba đường phân giác trong",
    "B. Ba đường trung trực",
    "C. Ba đường cao",
    "D. Ba đường trung tuyến"
  ],
  "answer": "A. Ba đường phân giác trong",
  "explanation": "Tâm đường tròn nội tiếp tam giác là giao điểm của ba đường phân giác trong của tam giác đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tâm đường tròn ngoại tiếp tam giác vuông nằm ở:",
  "options": [
    "A. Đỉnh góc vuông",
    "B. Trọng tâm tam giác",
    "C. Trung điểm của cạnh huyền",
    "D. Nằm bên ngoài tam giác"
  ],
  "answer": "C. Trung điểm của cạnh huyền",
  "explanation": "Trong tam giác vuông, tâm đường tròn ngoại tiếp chính là trung điểm cạnh huyền và bán kính R = cạnh huyền / 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho tam giác đều cạnh a. Bán kính đường tròn ngoại tiếp R của tam giác đều này bằng:",
  "options": [
    "A. a * căn(3) / 2",
    "B. a * căn(3) / 3",
    "C. a * căn(3) / 6",
    "D. a / 2"
  ],
  "answer": "B. a * căn(3) / 3",
  "explanation": "R = (2/3) * h = (2/3) * (a * căn(3) / 2) = a * căn(3) / 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác đều cạnh a. Tỉ số giữa bán kính ngoại tiếp R và bán kính nội tiếp r của tam giác này là:",
  "options": [
    "A. R / r = căn(3)",
    "B. R / r = 2",
    "C. R / r = 3",
    "D. R / r = 4"
  ],
  "answer": "B. R / r = 2",
  "explanation": "Trong tam giác đều, R = a*căn(3)/3 và r = a*căn(3)/6 => R = 2r => R/r = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tam giác ABC vuông tại A có AB = 5 cm, AC = 12 cm. Bán kính đường tròn ngoại tiếp R của tam giác bằng:",
  "options": [
    "A. 13 cm",
    "B. 6,5 cm",
    "C. 6 cm",
    "D. 8,5 cm"
  ],
  "answer": "B. 6,5 cm",
  "explanation": "Cạnh huyền BC = căn(5^2 + 12^2) = căn(169) = 13 cm. Do đó R = BC / 2 = 13 / 2 = 6,5 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm (BC = 10 cm). Bán kính đường tròn nội tiếp r của tam giác là:",
  "options": [
    "A. 2 cm",
    "B. 3 cm",
    "C. 4 cm",
    "D. 1,5 cm"
  ],
  "answer": "A. 2 cm",
  "explanation": "Với tam giác vuông: r = (b + c - a) / 2 = (6 + 8 - 10) / 2 = 4 / 2 = 2 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác có diện tích S = 84 cm² và nửa chu vi p = 21 cm. Bán kính đường tròn nội tiếp r của tam giác bằng:",
  "options": [
    "A. 2 cm",
    "B. 4 cm",
    "C. 6 cm",
    "D. 8 cm"
  ],
  "answer": "B. 4 cm",
  "explanation": "r = S / p = 84 / 21 = 4 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tam giác nào sau đây có tâm đường tròn ngoại tiếp nằm BÊN NGOÀI tam giác?",
  "options": [
    "A. Tam giác nhọn",
    "B. Tam giác vuông",
    "C. Tam giác tù",
    "D. Tam giác đều"
  ],
  "answer": "C. Tam giác tù",
  "explanation": "Tam giác tù có góc lớn hơn 90°, do đó tâm đường tròn ngoại tiếp (giao điểm 3 trung trực) luôn nằm bên ngoài tam giác."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho tam giác ABC cân tại A. Mối quan hệ về vị trí giữa tâm đường tròn ngoại tiếp O và tâm đường tròn nội tiếp I là:",
  "options": [
    "A. O và I luôn trùng nhau",
    "B. Cả O và I cùng nằm trên đường trung trực của cạnh đáy BC",
    "C. Đoạn thẳng OI vuông góc với đường cao AH",
    "D. O và I không có mối quan hệ cố định nào"
  ],
  "answer": "B. Cả O và I cùng nằm trên đường trung trực của cạnh đáy BC",
  "explanation": "Trong tam giác cân tại A, đường phân giác của góc A đồng thời là đường trung trực của cạnh đáy BC. Do đó cả tâm O và tâm I đều nằm trên đường này."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tam giác vuông:** Cho tam giác $MNP$ vuông tại $M$ có $MN = 15\text{ cm}$ và $MP = 20\text{ cm}$.
   a) Tính bán kính đường tròn ngoại tiếp $R$ của tam giác $MNP$.  
   b) Tính bán kính đường tròn nội tiếp $r$ của tam giác $MNP$.  
   c) Tính diện tích hình tròn nội tiếp tam giác.

2. **Tam giác đều:** Một tam giác đều $ABC$ có bán kính đường tròn nội tiếp $r = 4\text{ cm}$.
   a) Tính bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$.  
   b) Tính độ dài cạnh $a$ và diện tích của tam giác $ABC$.

---

### Thử thách Thực tế: Lập Trình Thuật Toán Phủ Sóng Trạm Viễn Thông 5G

**Bối cảnh:** Một nhà mạng viễn thông cần đặt một trạm phát sóng 5G để phục vụ đồng thời $3$ cụm dân cư lớn $A, B, C$. Trên bản đồ số tọa độ:
- Cụm $A$ có tọa độ $(0; 0)$
- Cụm $B$ có tọa độ $(6; 0)$ (đơn vị: km)
- Cụm $C$ có tọa độ $(0; 8)$ (đơn vị: km)

**Yêu cầu:**
1. Chứng minh tam giác $ABC$ là tam giác vuông.
2. Tìm tọa độ vị trí đặt trạm phát sóng sao cho trạm cách đều cả $3$ cụm dân cư $A, B, C$.
3. Tính bán kính phủ sóng tối thiểu $R$ của trạm để tín hiệu truyền đến cả $3$ cụm dân cư.
