---
title: 'Toán 9 Bài 32: Hình nón - Đường sinh, Diện tích xung quanh, Thể tích & Chiếc Nón lá Việt Nam'
description: 'Lý thuyết chuẩn mực Bài 32 Toán 9: Định nghĩa hình nón, hệ thức l² = h² + R², công thức diện tích xung quanh Sxq = πRl, thể tích V = (1/3)πR²h, hình nón cụt, widget trải hình quạt tròn SVG và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Hình nón
  - Đường sinh
  - Diện tích xung quanh
  - Thể tích khối nón
  - Nón cụt
  - Kết nối tri thức
grade: 9
---

# Bài 32. Hình nón

Từ chiếc **nón lá bài thơ** duyên dáng đậm đà bản sắc văn hóa Việt Nam, chiếc que kem ốc quế ngọt ngào của tuổi thơ, cho đến chiếc chụp đèn bàn học và phần chóp nhọn xé gió của các tên lửa vũ trụ:
- Tất cả đều mang chung một kiểu dáng hình học vô cùng độc đáo: **Hình nón**.

*Vì sao chiếc nón lá lại che mưa nắng tốt nhất, nước mưa trút xuống không thể đọng lại mà trôi tuột ngay ra mép?*
*Vì sao các kỹ sư khí động học tại NASA luôn chọn phần đầu tên lửa có dạng hình nón nhọn khi bay vượt tốc độ âm thanh (Supersonic Mach 3)?*

Tất cả là nhờ đặc tính hội tụ tuyệt đối về một đỉnh duy nhất và mặt xung quanh uốn cong mượt mà của hình nón tròn xoay! Trong bài học này, chúng ta sẽ cùng khám phá sự hình thành, làm chủ tam giác vuông Pythagore giữa **chiều cao - bán kính - đường sinh**, cùng các công thức tính diện tích và thể tích của khối nón.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HÌNH NÓN & HÌNH NÓN CỤT</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Sự hình thành & Yếu tố</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quay tam giác vuông $AOC$ quanh cạnh góc vuông $OA$.<br>• $A$: Đỉnh nón. $OA$: Trục và chiều cao ($h$).<br>• $OC$: Bán kính đáy ($R$).<br>• $AC$: <strong>Đường sinh</strong> ($l$). Hệ thức: $$l = \sqrt{h^2 + R^2}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Diện tích Xung quanh ($S_{xq}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi trải mặt nón ra mặt phẳng, ta được một <strong>hình quạt tròn</strong> bán kính $l$, độ dài cung $2\pi R$:<br>$$S_{xq} = \pi R l$$
      • Diện tích toàn phần: $S_{tp} = \pi R l + \pi R^2 = \pi R(l + R)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Thể tích Khối nón ($V$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bằng một phần ba diện tích đáy nhân chiều cao:<br>$$V = \frac{1}{3} S_{\text{đáy}} \cdot h = \frac{1}{3}\pi R^2 h$$
      • Bằng $\frac{1}{3}$ thể tích khối trụ có cùng đáy và chiều cao.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hình nón cụt</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Cắt hình nón bởi mặt phẳng song song với đáy.<br>• Hai đáy bán kính $R_1, R_2$, đường sinh $l$, chiều cao $h$:<br>$$S_{xq} = \pi(R_1 + R_2)l$$
      $$V = \frac{1}{3}\pi h(R_1^2 + R_2^2 + R_1 R_2)$$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Khi quay một tam giác vuông một vòng quanh một cạnh góc vuông cố định, ta thu được hình khối nào?
2. **Quan hệ ba cạnh:** Một hình nón có bán kính đáy $R = 3\text{ cm}$ và chiều cao $h = 4\text{ cm}$. Độ dài đường sinh $l$ bằng bao nhiêu?
3. **Diện tích xung quanh:** Hình nón có $R = 5\text{ cm}$ và đường sinh $l = 10\text{ cm}$. Diện tích xung quanh bằng bao nhiêu $\text{cm}^2$ (theo $\pi$)?
4. **Tỉ số thể tích:** Một hình nón và một hình trụ có cùng bán kính đáy và cùng chiều cao. Thể tích hình nón bằng bao nhiêu phần thể tích hình trụ?
5. **Trải mặt xung quanh:** Khi mở trải mặt xung quanh của một hình nón, ta nhận được hình gì?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: Thu được **Hình nón tròn xoay**.
> - Câu 2: Áp dụng Pythagore: $l = \sqrt{3^2 + 4^2} = 5\text{ cm}$.
> - Câu 3: $S_{xq} = \pi R l = \pi \times 5 \times 10 = 50\pi\text{ cm}^2$.
> - Câu 4: Đúng bằng **$\frac{1}{3}$** thể tích hình trụ.
> - Câu 5: Ta nhận được một **hình quạt tròn** có bán kính bằng đường sinh $l$.

---

## Lý thuyết trọng tâm

### 1. Sự hình thành và Các yếu tố của Hình nón

> [!NOTE]
> **Định nghĩa Hình nón tròn xoay:**
> Khi quay một tam giác vuông $AOC$ một vòng xung quanh cạnh góc vuông $OA$ cố định, ta thu được một **hình nón**.
> - Điểm $A$ là **đỉnh** của hình nón.
> - Cạnh $OA$ nằm trên trục quay là **trục** và độ dài $OA$ là **chiều cao** $h$.
> - Cạnh góc vuông $OC$ quét nên một hình tròn, gọi là **đáy** của hình nón; độ dài $OC = R$ là **bán kính đáy**.
> - Cạnh huyền $AC$ quét nên **mặt xung quanh** của hình nón; mỗi vị trí của cạnh $AC$ được gọi là một **đường sinh**, ký hiệu là $l$.

> [!IMPORTANT]
> **Hệ thức Pythagore nền tảng trong hình nón:**
> Vì tam giác $AOC$ vuông tại $O$ nên giữa chiều cao $h$, bán kính đáy $R$ và đường sinh $l$ luôn có mối quan hệ:
> $$l^2 = h^2 + R^2 \implies l = \sqrt{h^2 + R^2}$$

---

### 2. Diện tích Xung quanh và Toàn phần của Hình nón

Khi cắt dọc theo một đường sinh và trải phẳng mặt xung quanh của hình nón ra mặt giấy, ta thu được:
- Một **hình quạt tròn** có tâm là đỉnh $A$, bán kính bằng đường sinh $l$, và độ dài cung tròn bằng đúng chu vi đáy $C = 2\pi R$.

> [!NOTE]
> **Công thức Diện tích Xung quanh:**
> $$S_{xq} = \pi R l$$

> [!NOTE]
> **Công thức Diện tích Toàn phần:**
> $$S_{tp} = S_{xq} + S_{\text{đáy}} = \pi R l + \pi R^2 = \pi R(l + R)$$

**Số đo góc ở tâm $\theta$ của hình quạt tròn khi trải phẳng mặt nón:**
Vì độ dài cung của hình quạt bằng chu vi đáy $2\pi R$ và chu vi của hình tròn bán kính $l$ là $2\pi l$:
$$\frac{\theta}{360^\circ} = \frac{2\pi R}{2\pi l} \implies \theta = \frac{R}{l} \times 360^\circ$$

---

### 3. Thể tích Khối nón

> [!NOTE]
> **Công thức Thể tích Khối nón:**
> $$V = \frac{1}{3} S_{\text{đáy}} \cdot h = \frac{1}{3}\pi R^2 h$$

*Thí nghiệm kinh điển:* Lấy một bình hình nón và một bình hình trụ có cùng bán kính đáy $R$ và cùng chiều cao $h$. Khi múc đầy nước vào bình hình nón rồi đổ sang bình hình trụ, ta phải đổ đúng **$3$ lần** thì bình hình trụ mới vừa đầy tràn! Điều này chứng minh $V_{\text{nón}} = \frac{1}{3}V_{\text{trụ}}$.

---

### 4. Hình nón cụt

Khi cắt một hình nón bởi một mặt phẳng song song với đáy, ta được:
- Phần đỉnh là một hình nón nhỏ.
- Phần nằm giữa mặt phẳng cắt và đáy gọi là **hình nón cụt**.

Gọi $R_1$ và $R_2$ lần lượt là bán kính của hai đáy ($R_1 < R_2$), $h$ là chiều cao, $l$ là độ dài đường sinh của hình nón cụt:
- **Diện tích xung quanh hình nón cụt:**
  $$S_{xq} = \pi (R_1 + R_2) l$$
- **Thể tích khối nón cụt:**
  $$V = \frac{1}{3}\pi h (R_1^2 + R_2^2 + R_1 R_2)$$

---

## Phòng thí nghiệm Tương tác: Khám phá Hình Nón 3D & Trải Mặt Quạt Tròn

Hãy điều chỉnh bán kính đáy $R$ và chiều cao $h$ để kiểm chứng hệ thức Pythagore $l = \sqrt{h^2+R^2}$, và bấm nút **"Trải mặt quạt tròn"** để thấy mặt nón mở phẳng thành hình quạt với góc ở tâm $\theta = 360^\circ \times \frac{R}{l}$!

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: HÌNH NÓN 3D & TRẢI MẶT XUNG QUANH THÀNH HÌNH QUẠT TRÒN</h3>

  <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 16px; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: bold; color: #334155; font-size: 0.9em;">Bán kính R:</label>
      <input type="range" id="slConeR" min="20" max="60" value="40" oninput="renderConeDemo()">
      <span id="txtConeR" style="font-weight: bold; color: #2563eb; min-width: 35px;">40</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: bold; color: #334155; font-size: 0.9em;">Chiều cao h:</label>
      <input type="range" id="slConeH" min="40" max="120" value="80" oninput="renderConeDemo()">
      <span id="txtConeH" style="font-weight: bold; color: #059669; min-width: 35px;">80</span>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
    <button onclick="toggleConeUnfold()" id="btnConeUnfold" style="padding: 6px 16px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 500;">Mở trải mặt xung quanh</button>
    <button onclick="presetHat()" style="padding: 6px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em;">Chiếc nón lá (R=50, h=60)</button>
  </div>

  <div style="display: flex; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <svg id="svgCone" width="460" height="280" viewBox="0 0 460 280" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div id="coneCalcStats" style="margin-top: 14px; padding: 12px; background: #eff6ff; border-radius: 8px; text-align: center; font-size: 0.9em; border: 1px solid #bfdbfe;"></div>
</div>

<script>
let isConeUnfolded = false;

function toggleConeUnfold() {
  isConeUnfolded = !isConeUnfolded;
  document.getElementById('btnConeUnfold').textContent = isConeUnfolded ? 'Thu lại thành hình nón' : 'Mở trải mặt xung quanh';
  document.getElementById('btnConeUnfold').style.background = isConeUnfolded ? '#059669' : '#2563eb';
  renderConeDemo();
}

function presetHat() {
  document.getElementById('slConeR').value = 50;
  document.getElementById('slConeH').value = 60;
  renderConeDemo();
}

function renderConeDemo() {
  const R = parseInt(document.getElementById('slConeR').value);
  const H = parseInt(document.getElementById('slConeH').value);
  document.getElementById('txtConeR').textContent = R;
  document.getElementById('txtConeH').textContent = H;

  const svg = document.getElementById('svgCone');
  svg.innerHTML = '';

  const cx = 130;
  const apexY = 140 - H / 2;
  const baseCenterY = 140 + H / 2;
  const ry = R * 0.35;
  const L = Math.hypot(R, H);

  // Left Side: 3D Cone
  // Base ellipse background dashed
  const baseBack = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  baseBack.setAttribute('d', `M ${cx - R} ${baseCenterY} A ${R} ${ry} 0 0 1 ${cx + R} ${baseCenterY}`);
  baseBack.setAttribute('fill', 'none');
  baseBack.setAttribute('stroke', '#94a3b8');
  baseBack.setAttribute('stroke-dasharray', '3,3');
  svg.appendChild(baseBack);

  // Base ellipse front
  const baseFront = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  baseFront.setAttribute('d', `M ${cx - R} ${baseCenterY} A ${R} ${ry} 0 0 0 ${cx + R} ${baseCenterY}`);
  baseFront.setAttribute('fill', 'rgba(59, 130, 246, 0.2)');
  baseFront.setAttribute('stroke', '#2563eb');
  baseFront.setAttribute('stroke-width', '2');
  svg.appendChild(baseFront);

  // Cone Body
  const coneBody = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  coneBody.setAttribute('d', `M ${cx} ${apexY} L ${cx - R} ${baseCenterY} A ${R} ${ry} 0 0 0 ${cx + R} ${baseCenterY} Z`);
  coneBody.setAttribute('fill', 'rgba(37, 99, 235, 0.12)');
  svg.appendChild(coneBody);

  // Generator lines
  const lineL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineL.setAttribute('x1', cx); lineL.setAttribute('y1', apexY);
  lineL.setAttribute('x2', cx - R); lineL.setAttribute('y2', baseCenterY);
  lineL.setAttribute('stroke', '#2563eb'); lineL.setAttribute('stroke-width', '2');
  svg.appendChild(lineL);

  const lineR = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineR.setAttribute('x1', cx); lineR.setAttribute('y1', apexY);
  lineR.setAttribute('x2', cx + R); lineR.setAttribute('y2', baseCenterY);
  lineR.setAttribute('stroke', '#2563eb'); lineR.setAttribute('stroke-width', '2');
  svg.appendChild(lineR);

  // Altitude line (h)
  const lineH = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineH.setAttribute('x1', cx); lineH.setAttribute('y1', apexY);
  lineH.setAttribute('x2', cx); lineH.setAttribute('y2', baseCenterY);
  lineH.setAttribute('stroke', '#059669'); lineH.setAttribute('stroke-dasharray', '3,3');
  lineH.setAttribute('stroke-width', '1.5');
  svg.appendChild(lineH);

  // Base radius line (R)
  const lineBaseR = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineBaseR.setAttribute('x1', cx); lineBaseR.setAttribute('y1', baseCenterY);
  lineBaseR.setAttribute('x2', cx + R); lineBaseR.setAttribute('y2', baseCenterY);
  lineBaseR.setAttribute('stroke', '#dc2626'); lineBaseR.setAttribute('stroke-dasharray', '3,3');
  lineBaseR.setAttribute('stroke-width', '1.5');
  svg.appendChild(lineBaseR);

  // Labels
  const drawTxt = (x, y, txt, col) => {
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', x); t.setAttribute('y', y);
    t.setAttribute('font-size', '11'); t.setAttribute('fill', col || '#1e293b');
    t.setAttribute('text-anchor', 'middle'); t.setAttribute('font-weight', 'bold');
    t.textContent = txt;
    svg.appendChild(t);
  };
  drawTxt(cx - 12, 140, `h=${H}`, '#059669');
  drawTxt(cx + R / 2, baseCenterY + 14, `R=${R}`, '#dc2626');
  drawTxt(cx + R / 2 + 16, 140 - H / 4, `l=${L.toFixed(1)}`, '#2563eb');

  // Right Side: Unfolded Sector
  if (isConeUnfolded) {
    const secX = 330;
    const secY = 140;
    const secR = Math.min(100, L * 0.9);
    const thetaDeg = Math.min(360, (R / L) * 360);
    const rad = (thetaDeg * Math.PI) / 180;

    const x1 = secX;
    const y1 = secY;
    const x2 = secX + secR * Math.cos(-rad / 2);
    const y2 = secY + secR * Math.sin(-rad / 2);
    const x3 = secX + secR * Math.cos(rad / 2);
    const y3 = secY + secR * Math.sin(rad / 2);

    const largeArc = thetaDeg > 180 ? 1 : 0;
    const d = `M ${x1} ${y1} L ${x2} ${y2} A ${secR} ${secR} 0 ${largeArc} 1 ${x3} ${y3} Z`;

    const sector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    sector.setAttribute('d', d);
    sector.setAttribute('fill', 'rgba(16, 185, 129, 0.15)');
    sector.setAttribute('stroke', '#059669');
    sector.setAttribute('stroke-width', '2');
    svg.appendChild(sector);

    drawTxt(secX, secY - 10, 'Đỉnh A', '#059669');
    drawTxt(secX + secR * 0.6, secY + 4, `l=${L.toFixed(0)}`, '#059669');
    drawTxt(secX + secR + 10, secY, `θ=${thetaDeg.toFixed(0)}°`, '#d97706');
  }

  const sxq = (Math.PI * R * L).toFixed(0);
  const stp = (Math.PI * R * (L + R)).toFixed(0);
  const v = ((1 / 3) * Math.PI * R * R * H).toFixed(0);
  const theta = ((R / L) * 360).toFixed(1);

  document.getElementById('coneCalcStats').innerHTML = `
    Đường sinh: <strong>l = √(h² + R²) = ${L.toFixed(1)}</strong> | Góc hình quạt trải phẳng: <strong>θ = ${theta}°</strong><br>
    Diện tích xung quanh: <strong>S_xq = πRl ≈ ${sxq}</strong> | Toàn phần: <strong>S_tp ≈ ${stp}</strong> | Thể tích: <strong>V = (1/3)πR²h ≈ ${v}</strong>
  `;
}

window.addEventListener('DOMContentLoaded', renderConeDemo);
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính Diện tích Xung quanh, Toàn phần và Thể tích cơ bản

**Phương pháp giải:**
1. Áp dụng hệ thức Pythagore để tìm đại lượng còn thiếu trong bộ ba $(R, h, l)$:
   $$l = \sqrt{h^2 + R^2}, \quad h = \sqrt{l^2 - R^2}, \quad R = \sqrt{l^2 - h^2}$$
2. Áp dụng các công thức chuẩn:
   $$S_{xq} = \pi R l$$
   $$S_{tp} = \pi R(l + R)$$
   $$V = \frac{1}{3}\pi R^2 h$$

---

#### Ví dụ 1
Một chiếc mũ sinh nhật bằng giấy có dạng hình nón có bán kính đáy $R = 9\text{ cm}$ và chiều cao $h = 12\text{ cm}$. Lấy $\pi \approx 3,14$.
a) Tính độ dài đường sinh $l$ của chiếc mũ.  
b) Tính diện tích giấy bìa cần dùng để làm chiếc mũ (không nắp đáy, bỏ qua mép dán).  
c) Tính thể tích khoảng không gian bên trong chiếc mũ.

**Lời giải chi tiết:**
a) Áp dụng định lý Pythagore trong tam giác vuông:
$$l = \sqrt{h^2 + R^2} = \sqrt{12^2 + 9^2} = \sqrt{144 + 81} = \sqrt{225} = 15\text{ (cm)}$$

b) Vì chiếc mũ đội đầu không có mặt đáy nên diện tích giấy bìa cần dùng chính là diện tích xung quanh của hình nón:
$$S_{xq} = \pi R l \approx 3,14 \times 9 \times 15 = 423,9\text{ (cm}^2\text{)}$$

c) Thể tích không gian bên trong chiếc mũ là:
$$V = \frac{1}{3}\pi R^2 h \approx \frac{1}{3} \times 3,14 \times 9^2 \times 12 = 3,14 \times 81 \times 4 = 1\,017,36\text{ (cm}^3\text{)}$$

---

### Dạng 2: Bài toán Hình Quạt Tròn và Góc mở Mặt Nón

**Phương pháp giải:**
Khi mở trải mặt xung quanh của hình nón:
- Bán kính hình quạt tròn bằng đường sinh: $R_{\text{quạt}} = l$.
- Góc ở tâm $\theta$ của hình quạt tròn tính theo công thức:
  $$\theta = \frac{R}{l} \times 360^\circ \implies \frac{R}{l} = \frac{\theta}{360^\circ}$$
- Từ đó tìm mối liên hệ giữa bán kính đáy $R$ và đường sinh $l$.

---

#### Ví dụ 2
Từ một tấm bìa hình quạt tròn có bán kính $R_{\text{quạt}} = 20\text{ cm}$ và góc ở tâm $\theta = 216^\circ$, người ta cuộn lại ghép hai mép bán kính trùng khít nhau để tạo thành mặt xung quanh của một hình nón.
a) Tính bán kính đáy $R$ của hình nón tạo thành.  
b) Tính chiều cao $h$ và thể tích của khối nón tương ứng.

**Lời giải chi tiết:**
a) Bán kính của hình quạt tròn chính là đường sinh của hình nón: $l = 20\text{ cm}$.
Độ dài cung của hình quạt tròn là:
$$C_{\text{cung}} = \frac{2\pi \cdot l \cdot \theta}{360^\circ} = \frac{2\pi \times 20 \times 216^\circ}{360^\circ} = 24\pi\text{ (cm)}$$
Độ dài cung này chính bằng chu vi đáy hình nón: $2\pi R = 24\pi \implies R = 12\text{ (cm)}$.

b) Áp dụng định lý Pythagore tính chiều cao của hình nón:
$$h = \sqrt{l^2 - R^2} = \sqrt{20^2 - 12^2} = \sqrt{400 - 144} = \sqrt{256} = 16\text{ (cm)}$$
Thể tích của khối nón tạo thành:
$$V = \frac{1}{3}\pi R^2 h = \frac{1}{3}\pi \times 12^2 \times 16 = \frac{1}{3}\pi \times 144 \times 16 = 768\pi \approx 2\,412,74\text{ (cm}^3\text{)}$$

---

### Dạng 3: Bài toán Thực tế Chiếc Nón Lá Việt Nam

**Phương pháp giải:**
Chiếc nón lá truyền thống là mô hình hình nón không đáy:
- Đo đường kính vành nón đáy $\implies R = d/2$.
- Đo chiều cao nón $h \implies l = \sqrt{h^2 + R^2}$.
- Diện tích lá cọ lợp nón: $S = \pi R l$. Nếu lợp $2$ lớp lá thì diện tích nhân đôi.

---

#### Ví dụ 3
Một người thợ làm nón tại làng Chuông (Hà Nội) làm một chiếc nón lá truyền thống có đường kính vành nón đáy là $40\text{ cm}$ và chiều cao từ đỉnh đến tâm đáy là $15\text{ cm}$.
a) Tính độ dài đường sinh của chiếc nón lá.  
b) Biết chiếc nón được lợp bằng $2$ lớp lá nón, tính diện tích lá nón tối thiểu cần dùng để làm chiếc nón (lấy $\pi \approx 3,14$, làm tròn đến hàng đơn vị).

**Lời giải chi tiết:**
a) Bán kính đáy của chiếc nón lá là:
$$R = \frac{40}{2} = 20\text{ (cm)}$$
Độ dài đường sinh của chiếc nón:
$$l = \sqrt{h^2 + R^2} = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25\text{ (cm)}$$

b) Diện tích xung quanh một lớp của chiếc nón:
$$S_1 = \pi R l \approx 3,14 \times 20 \times 25 = 1\,570\text{ (cm}^2\text{)}$$
Vì nón được lợp bằng $2$ lớp lá nên diện tích lá nón tối thiểu cần dùng là:
$$S_{\text{lá}} = 2 \times S_1 = 2 \times 1\,570 = 3\,140\text{ (cm}^2\text{)}$$

---

### Dạng 4: Bài toán Hình Nón Cụt

**Phương pháp giải:**
1. Áp dụng định lý Pythagore trong hình thang vuông tạo bởi trục và đường sinh:
   $$l = \sqrt{h^2 + (R_2 - R_1)^2}$$
2. Diện tích xung quanh nón cụt: $S_{xq} = \pi(R_1 + R_2)l$.
3. Thể tích nón cụt: $V = \frac{1}{3}\pi h(R_1^2 + R_2^2 + R_1 R_2)$.

---

#### Ví dụ 4
Một chiếc xô đựng nước bằng tôn có dạng hình nón cụt với bán kính miệng xô là $R_2 = 15\text{ cm}$, bán kính đáy xô là $R_1 = 9\text{ cm}$ và chiều cao là $h = 24\text{ cm}$.
a) Tính độ dài đường sinh của chiếc xô.  
b) Chiếc xô có thể chứa được tối đa bao nhiêu lít nước? (Lấy $\pi \approx 3,14$).

**Lời giải chi tiết:**
a) Độ dài đường sinh của hình nón cụt:
$$l = \sqrt{h^2 + (R_2 - R_1)^2} = \sqrt{24^2 + (15 - 9)^2} = \sqrt{576 + 36} = \sqrt{612} \approx 24,74\text{ (cm)}$$

b) Dung tích tối đa của chiếc xô chính là thể tích của khối nón cụt:
$$V = \frac{1}{3}\pi h (R_1^2 + R_2^2 + R_1 R_2)$$
Thay số:
$$V = \frac{1}{3} \times 3,14 \times 24 \times \left( 9^2 + 15^2 + 9 \times 15 \right)$$
$$V = 3,14 \times 8 \times (81 + 225 + 135) = 25,12 \times 441 = 11\,077,92\text{ (cm}^3\text{)}$$
Đổi sang đơn vị lít ($1\text{ lít} = 1\,000\text{ cm}^3$):
$$V \approx 11,08\text{ lít}$$
Vậy chiếc xô chứa được tối đa khoảng $11$ lít nước.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Khí Động Học Mũi Tên Lửa (Nose Cone Aerodynamics):** Mũi các tên lửa Falcon 9 hay tàu con thoi vũ trụ đều có dạng hình nón nhọn (von Kármán ogive cone). Khi bay ở tốc độ siêu thanh, chóp nón tạo ra sóng xung kích hình nón (Mach cone), giúp luồng không khí trượt mượt mà sang hai bên mà không làm nung chảy thân tên lửa.
2. **Còi Ăng-ten Loa Phóng Thanh (Horn Antenna):** Trong kỹ thuật truyền thông vi ba vô tuyến và loa phát thanh công cộng, kết cấu hình nón mở rộng giúp biến đổi trở kháng sóng âm thanh từ nguồn phát nhỏ tỏa đều ra không gian với hiệu suất âm lượng cực đại.
3. **Phễu Lọc Bụi Ly Tâm (Cyclone Dust Separator):** Trong các máy hút bụi gia đình Dyson và nhà máy xi măng, buồng xoáy hình nón cụt khiến luồng khí quay với tốc độ cao; lực ly tâm ném các hạt bụi nặng văng vào thành nón và trượt rơi xuống đáy phễu.
4. **Địa chất Núi Lửa & Góc Nghỉ của Đất Cát (Angle of Repose):** Khi cát hay hạt ngũ cốc đổ tự do từ trên cao xuống, chúng luôn tự động tạo thành một đống cát hình nón có góc nghiêng sườn nón đúng bằng "góc nghỉ tự nhiên" của vật liệu ($\approx 30^\circ - 35^\circ$).
5. **Nón Ánh Sáng trong Thuyết Tương Đối (Light Cone):** Trong vật lý thiên văn hiện đại của Albert Einstein, lịch sử tiến hóa của vũ trụ và vùng không thời gian nhân quả mà ánh sáng có thể tiếp cận được biểu diễn toán học dưới dạng một chiếc nón ánh sáng 4 chiều (Minkowski Light Cone).

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hình nón tròn xoay được tạo thành khi quay hình nào sau đây một vòng quanh một cạnh góc vuông cố định?",
  "options": [
    "A. Tam giác đều",
    "B. Tam giác cân",
    "C. Tam giác vuông",
    "D. Hình chữ nhật"
  ],
  "answer": "C. Tam giác vuông",
  "explanation": "Quay một tam giác vuông một vòng quanh một cạnh góc vuông cố định sẽ tạo thành hình nón tròn xoay."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Mối quan hệ giữa bán kính đáy R, chiều cao h và đường sinh l của hình nón là:",
  "options": [
    "A. l = h + R",
    "B. l² = h² + R²",
    "C. h² = l² + R²",
    "D. R² = l² + h²"
  ],
  "answer": "B. l² = h² + R²",
  "explanation": "Định lý Pythagore trong tam giác vuông tạo bởi trục, bán kính đáy và đường sinh: l² = h² + R²."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Công thức tính diện tích xung quanh của hình nón có bán kính đáy R và đường sinh l là:",
  "options": [
    "A. S_xq = 2πRl",
    "B. S_xq = πRl",
    "C. S_xq = πR²l",
    "D. S_xq = (1/3)πRl"
  ],
  "answer": "B. S_xq = πRl",
  "explanation": "Diện tích xung quanh của hình nón là S_xq = πRl."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Công thức tính thể tích của khối nón có bán kính đáy R và chiều cao h là:",
  "options": [
    "A. V = πR²h",
    "B. V = (1/3)πR²h",
    "C. V = (4/3)πR²h",
    "D. V = 2πRh"
  ],
  "answer": "B. V = (1/3)πR²h",
  "explanation": "Thể tích hình nón bằng một phần ba diện tích đáy nhân với chiều cao: V = (1/3)πR²h."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một hình nón có bán kính đáy R = 6 cm và chiều cao h = 8 cm. Độ dài đường sinh l của hình nón bằng:",
  "options": [
    "A. 14 cm",
    "B. 10 cm",
    "C. 12 cm",
    "D. 7 cm"
  ],
  "answer": "B. 10 cm",
  "explanation": "l = căn(6² + 8²) = căn(36 + 64) = căn(100) = 10 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một hình nón có bán kính đáy R = 5 cm và đường sinh l = 13 cm. Thể tích của hình nón đó bằng:",
  "options": [
    "A. 100π cm³",
    "B. 300π cm³",
    "C. 65π cm³",
    "D. 120π cm³"
  ],
  "answer": "A. 100π cm³",
  "explanation": "Chiều cao h = căn(l² - R²) = căn(13² - 5²) = 12 cm. Thể tích V = (1/3) * π * R² * h = (1/3) * π * 5² * 12 = 100π cm³."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khi mở trải mặt xung quanh của một hình nón có bán kính đáy R = 3 cm và đường sinh l = 6 cm, ta được một hình quạt tròn có góc ở tâm bằng:",
  "options": [
    "A. 90°",
    "B. 120°",
    "C. 180°",
    "D. 240°"
  ],
  "answer": "C. 180°",
  "explanation": "theta = (R / l) * 360° = (3 / 6) * 360° = 180° (nửa hình tròn)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một hình nón có thể tích V = 12π cm³ và chiều cao h = 4 cm. Bán kính đáy R của hình nón bằng:",
  "options": [
    "A. 3 cm",
    "B. 9 cm",
    "C. 2 cm",
    "D. 6 cm"
  ],
  "answer": "A. 3 cm",
  "explanation": "V = (1/3)πR²h => 12π = (1/3)πR² * 4 => R² = 9 => R = 3 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hình nón cụt có hai bán kính đáy là R1 = 2 cm, R2 = 5 cm và đường sinh l = 5 cm. Diện tích xung quanh của hình nón cụt bằng:",
  "options": [
    "A. 35π cm²",
    "B. 70π cm²",
    "C. 25π cm²",
    "D. 50π cm²"
  ],
  "answer": "A. 35π cm²",
  "explanation": "S_xq = π(R1 + R2)l = π(2 + 5) * 5 = 35π cm²."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Thiết diện qua trục của một hình nón là một tam giác đều có cạnh bằng 2a. Thể tích của hình nón đó bằng:",
  "options": [
    "A. (π * a³ * căn(3)) / 3",
    "B. π * a³ * căn(3)",
    "C. (2/3) * π * a³",
    "D. (π * a³ * căn(2)) / 3"
  ],
  "answer": "A. (π * a³ * căn(3)) / 3",
  "explanation": "Đáy là 2R = 2a => R = a. Chiều cao h là đường cao tam giác đều cạnh 2a => h = (2a * căn(3)) / 2 = a*căn(3). Thể tích V = (1/3)πR²h = (1/3)π * a² * a*căn(3) = (π * a³ * căn(3)) / 3."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tính toán cơ bản:** Một hình nón có diện tích toàn phần là $90\pi\text{ cm}^2$ và bán kính đáy là $R = 5\text{ cm}$.
   a) Tính độ dài đường sinh $l$ và diện tích xung quanh của hình nón.  
   b) Tính chiều cao $h$ và thể tích của khối nón tương ứng.

2. **Bài toán phễu cát:** Một đống cát mịn có dạng hình nón cao $1,8\text{ m}$ và chu vi đáy đo được là $9,42\text{ m}$.
   a) Tính bán kính đáy của đống cát (lấy $\pi \approx 3,14$).  
   b) Tính thể tích cát của đống cát đó.  
   c) Biết mỗi mét khối cát nặng $1,5\text{ tấn}$, hỏi đống cát đó nặng bao nhiêu tấn?

---

### Thử thách Thực tế: Thiết Kế Lều Cắm Trại Tròn Xoay (Glamping Tipi Tent)

**Bối cảnh:** Một khu nghỉ dưỡng sinh thái cần dựng $20$ chiếc lều cắm trại kiểu dáng nón tròn xoay (Tipi Tent):
- Bán kính mặt sàn lều: $R = 2,4\text{ m}$.
- Chiều cao cọc chống trung tâm: $h = 3,2\text{ m}$.

**Yêu cầu:**
1. Tính độ dài thanh khung sườn (đường sinh $l$) chống từ đỉnh nón xuống mép sàn lều.
2. Tính diện tích vải bạt chống thấm nước cần dùng để phủ kín xung quanh mỗi chiếc lều (không phủ sàn, coi mép nối tốn thêm $10\%$ diện tích).
3. Tính tổng thể tích không gian thoáng khí bên trong cả $20$ chiếc lều để lắp đặt hệ thống quạt thông gió.
