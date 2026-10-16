---
title: 'Toán 9 Bài 16: Vị trí tương đối của đường thẳng và đường tròn - Tiếp tuyến & Tính chất hai tiếp tuyến cắt nhau'
description: 'Lý thuyết trọn vẹn Bài 16 Toán 9: Ba vị trí tương đối giữa đường thẳng và đường tròn (d < R, d = R, d > R), dấu hiệu nhận biết tiếp tuyến, tính chất 2 tiếp tuyến cắt nhau, đường tròn nội tiếp tam giác, mô phỏng động SVG và 10 câu trắc nghiệm có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Vị trí tương đối
  - Tiếp tuyến
  - Hai tiếp tuyến cắt nhau
  - Đường tròn nội tiếp
  - Kết nối tri thức
grade: 9
---

# Bài 16. Vị trí tương đối của đường thẳng và đường tròn

Hãy tưởng tượng ánh Mặt Trời lúc bình minh đang dần nhô lên từ đường chân trời trên mặt biển bao la:
- Khi vầng thái dương còn nằm lơ lửng phía trên: đường chân trời và Mặt Trời **không giao nhau**.
- Đúng khoảnh khắc vầng sáng vừa chạm khẽ vào mép nước biển: đường chân trời trở thành **tiếp tuyến** duy nhất của đĩa Mặt Trời.
- Và khi bình minh ló rạng, mặt trời chìm một phần xuống biển: đường chân trời **cắt** đĩa tròn tại hai điểm mút sóng bạc.

Hình ảnh thi vị đó chính là mô hình trực quan hoàn hảo cho **ba vị trí tương đối của đường thẳng và đường tròn** trong hình học. Trong đó, khái niệm **tiếp tuyến** và **tính chất hai tiếp tuyến cắt nhau** là một trong những viên ngọc quý giá nhất của hình học phẳng, xuất hiện trong hầu hết các bài toán hình học ôn thi vào lớp 10 THPT trên cả nước!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐƯỜNG THẲNG VÀ ĐƯỜNG TRÒN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Ba vị trí tương đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $d < R$: Cắt nhau (2 điểm chung).<br>• $d = R$: Tiếp xúc nhau (1 điểm chung duy nhất — <strong>tiếp tuyến</strong>).<br>• $d > R$: Không giao nhau (0 điểm chung).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Dấu hiệu Nhận biết Tiếp tuyến</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường thẳng đi qua 1 điểm trên $(O)$ và $\perp$ với bán kính tại điểm đó.<br>• Hoặc chứng minh khoảng cách từ tâm $O$ đến đường thẳng bằng đúng $R$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hai Tiếp tuyến Cắt nhau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Từ điểm $M$ ngoài $(O)$ kẻ 2 tiếp tuyến $MA, MB$:<br>• $MA = MB$ (cách đều 2 tiếp điểm).<br>• $MO$ là phân giác $\widehat{AMB}$; $OM$ là phân giác $\widehat{AOB}$.<br>• $OM$ là đường trung trực của đoạn dây $AB$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Đường tròn Nội tiếp $\triangle$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tiếp xúc với 3 cạnh của tam giác.<br>• Tâm $I$ là giao điểm của 3 đường phân giác trong.<br>• Bán kính $r = \frac{S}{p}$ ($p$ là nửa chu vi).<br>• Với $\triangle$ vuông: $r = \frac{a + b - c}{2}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **So sánh khoảng cách:** Cho đường tròn $(O; 5\text{ cm})$. Đường thẳng $\Delta$ cách tâm $O$ một khoảng $d = 4\text{ cm}$. Hỏi $\Delta$ và đường tròn có bao nhiêu điểm chung?
2. **Tiếp tuyến:** Cho điểm $A$ thuộc đường tròn $(O; R)$. Để đường thẳng $d$ đi qua $A$ là tiếp tuyến của $(O)$, đường thẳng $d$ phải vuông góc với đoạn thẳng nào?
3. **Tiếp tuyến cắt nhau:** Từ điểm $M$ ở ngoài $(O; 3\text{ cm})$, kẻ hai tiếp tuyến $MA$ và $MB$ ($A, B$ là tiếp điểm). Biết $MA = 4\text{ cm}$, độ dài $MB$ bằng bao nhiêu?
4. **Góc tiếp tuyến:** Từ $M$ ngoài $(O)$, kẻ hai tiếp tuyến $MA, MB$. Biết $\widehat{AMB} = 70^\circ$, số đo của góc ở tâm $\widehat{AOB}$ bằng bao nhiêu độ?
5. **Đường tròn nội tiếp:** Tâm đường tròn nội tiếp một tam giác là giao điểm của ba đường gì trong tam giác đó?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Có **2 điểm chung** (vì $d = 4 < R = 5 \implies$ đường thẳng cắt đường tròn).
> 2. Vuông góc với bán kính $OA$ tại tiếp điểm $A$.
> 3. $MB = MA = 4\text{ cm}$ (theo tính chất hai tiếp tuyến cắt nhau).
> 4. $\widehat{AOB} = 180^\circ - 70^\circ = 110^\circ$ (vì tứ giác $MAOB$ có 2 góc vuông tại $A$ và $B$).
> 5. Là giao điểm của **ba đường phân giác trong** của tam giác.

---

## I. Lý thuyết Trọng tâm

### 1. Ba Vị trí Tương đối của Đường thẳng và Đường tròn

Gọi khoảng cách từ tâm $O$ của đường tròn $(O; R)$ đến đường thẳng $\Delta$ là $d = OH$ ($H$ là hình chiếu vuông góc của $O$ lên $\Delta$).

| Vị trí tương đối | Số điểm chung | Hệ thức giữa $d$ và $R$ | Hình minh họa vắn tắt |
| :--- | :---: | :---: | :--- |
| **Đường thẳng cắt đường tròn** | $2$ | $d < R$ | Đoạn thẳng nối 2 điểm chung là một dây $AB$. Khi đó $HA = HB = \sqrt{R^2 - d^2}$. |
| **Đường thẳng tiếp xúc đường tròn** | $1$ | $d = R$ | $\Delta$ gọi là **tiếp tuyến**, điểm chung $H$ gọi là **tiếp điểm**. Khi đó $\Delta \perp OH$ tại $H$. |
| **Đường thẳng không giao nhau** | $0$ | $d > R$ | Đường thẳng $\Delta$ hoàn toàn ở phía ngoài đường tròn. |

> [!NOTE]
> **Định lý về tiếp tuyến:**
> Nếu một đường thẳng là tiếp tuyến của một đường tròn thì nó **vuông góc với bán kính đi qua tiếp điểm**.
> $$\Delta \text{ tiếp xúc } (O) \text{ tại } A \implies \Delta \perp OA \text{ tại } A$$

---

### 2. Dấu hiệu Nhận biết Tiếp tuyến của Đường tròn

Làm thế nào để chứng minh một đường thẳng $\Delta$ là tiếp tuyến của đường tròn $(O)$? Có 2 dấu hiệu căn bản:

> [!NOTE]
> **Dấu hiệu 1 (Phương pháp góc vuông - Phổ biến nhất):**
> Nếu một đường thẳng đi qua một điểm của đường tròn và **vuông góc với bán kính** đi qua điểm đó thì đường thẳng ấy là tiếp tuyến của đường tròn.
> $$\left. \begin{array}{l} A \in (O) \\ \Delta \perp OA \text{ tại } A \end{array} \right\} \implies \Delta \text{ là tiếp tuyến của } (O) \text{ tại } A$$
> 
> **Dấu hiệu 2 (Phương pháp khoảng cách):**
> Nếu khoảng cách từ tâm của một đường tròn đến đường thẳng bằng bán kính của đường tròn thì đường thẳng ấy là tiếp tuyến của đường tròn.
> $$d(O, \Delta) = R \implies \Delta \text{ là tiếp tuyến của } (O)$$

---

### 3. Tính chất của Hai Tiếp tuyến Cắt nhau

Từ một điểm $M$ nằm bên ngoài đường tròn $(O; R)$, ta luôn vẽ được **hai tiếp tuyến** $MA$ và $MB$ đến đường tròn ($A, B$ là hai tiếp điểm).

```
              A
             /|
            / |
           M--+--O
            \ |
             \|
              B
```

Xét hai tam giác vuông $\triangle OAM$ (vuông tại $A$) và $\triangle OBM$ (vuông tại $B$):
- Cạnh huyền $OM$ chung.
- Cạnh góc vuông $OA = OB = R$.
Do đó $\triangle OAM = \triangle OBM$ (cạnh huyền - cạnh góc vuông).

Từ sự bằng nhau của hai tam giác vuông này, ta suy ra:

> [!NOTE]
> **Định lý về hai tiếp tuyến cắt nhau:**
> Nếu hai tiếp tuyến của một đường tròn cắt nhau tại một điểm thì:
> 1. Điểm đó cách đều hai tiếp điểm:
> $$MA = MB$$
> 2. Tia kẻ từ điểm đó đi qua tâm là tia phân giác của góc tạo bởi hai tiếp tuyến:
> $$\widehat{AMO} = \widehat{BMO} = \frac{1}{2} \widehat{AMB}$$
> 3. Tia kẻ từ tâm đi qua điểm đó là tia phân giác của góc tạo bởi hai bán kính đi qua các tiếp điểm:
> $$\widehat{AOM} = \widehat{BOM} = \frac{1}{2} \widehat{AOB}$$
> 4. Đường thẳng $OM$ là **đường trung trực** của đoạn thẳng nối hai tiếp điểm $AB$:
> $$OM \perp AB \quad \text{tại } H \quad \text{và} \quad HA = HB$$
> 5. Hệ thức lượng quen thuộc trong tam giác vuông $OAM$ (đường cao $AH$):
> $$MA^2 = MH \cdot MO \quad \text{và} \quad OA^2 = OH \cdot MO = R^2$$

---

### 4. Đường tròn Nội tiếp Tam giác

> [!NOTE]
> **Định nghĩa:**
> - Đường tròn tiếp xúc với cả ba cạnh của một tam giác gọi là **đường tròn nội tiếp** tam giác, và tam giác đó gọi là *tam giác ngoại tiếp đường tròn*.
> - **Tâm của đường tròn nội tiếp** tam giác là giao điểm của **ba đường phân giác trong** của tam giác đó (vì tâm cách đều ba cạnh).
> 
> **Công thức tính bán kính $r$ của đường tròn nội tiếp:**
> Gọi $a, b, c$ là độ dài ba cạnh của $\triangle ABC$, $p = \frac{a + b + c}{2}$ là nửa chu vi, $S$ là diện tích tam giác:
> $$S = S_{\triangle IBC} + S_{\triangle ICA} + S_{\triangle IAB} = \frac{1}{2}ar + \frac{1}{2}br + \frac{1}{2}cr = p \cdot r \implies r = \frac{S}{p}$$
> 
> **Trường hợp đặc biệt - Tam giác vuông tại $A$:**
> Tứ giác tạo bởi đỉnh góc vuông $A$ và tâm $I$ là một **hình vuông cạnh $r$**. Do đó:
> $$r = \frac{a + b - c}{2} = \frac{AB + AC - BC}{2}$$

---

## II. Mô phỏng Tương tác: Hai Tiếp Tuyến Cắt Nhau

Dưới đây là mô hình tương tác động thể hiện điểm $M$ bên ngoài đường tròn $(O)$. Các em có thể kéo vị trí điểm $M$ tiến lại gần hoặc ra xa tâm $O$ để quan sát góc mở tiếp tuyến, sự đối xứng hoàn hảo của $MA = MB$, và kiểm chứng $OM \perp AB$!

<div class="interactive-tangents-sim" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: HAI TIẾP TUYẾN CẮT NHAU TỪ ĐIỂM $M$</h4>
  <p style="font-size: 0.9em; text-align: center; color: var(--text-secondary, #64748b);">Kéo thanh trượt khoảng cách $OM$ để quan sát sự thay đổi góc tiếp tuyến, độ dài $MA$ và dây $AB$.</p>

  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: center; margin-top: 16px;">
    <!-- SVG Canvas -->
    <div style="flex: 1 1 320px; max-width: 400px; text-align: center;">
      <svg id="tangentSvg" viewBox="0 0 380 280" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Circle (O) -->
        <circle cx="250" cy="140" r="70" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
        <!-- Line OM -->
        <line id="svgLineOM" x1="40" y1="140" x2="250" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4" />
        <!-- Tangents MA, MB -->
        <line id="svgLineMA" x1="40" y1="140" x2="200" y2="80" stroke="#2563eb" stroke-width="2.5" />
        <line id="svgLineMB" x1="40" y1="140" x2="200" y2="200" stroke="#2563eb" stroke-width="2.5" />
        <!-- Radii OA, OB -->
        <line id="svgLineOA" x1="250" y1="140" x2="200" y2="80" stroke="#dc2626" stroke-width="2" />
        <line id="svgLineOB" x1="250" y1="140" x2="200" y2="200" stroke="#dc2626" stroke-width="2" />
        <!-- Chord AB -->
        <line id="svgLineAB" x1="200" y1="80" x2="200" y2="200" stroke="#9333ea" stroke-width="2" stroke-dasharray="3" />
        <!-- Right angle at A -->
        <path id="svgRtA" d="" fill="none" stroke="#dc2626" stroke-width="1.5" />
        <path id="svgRtB" d="" fill="none" stroke="#dc2626" stroke-width="1.5" />
        <!-- Right angle at H (intersection of OM and AB) -->
        <path id="svgRtH" d="" fill="none" stroke="#9333ea" stroke-width="1.5" />
        <!-- Points O, M, A, B, H -->
        <circle cx="250" cy="140" r="4.5" fill="#1e293b" />
        <text x="256" y="145" font-size="13" font-weight="bold" fill="#1e293b">O</text>
        <circle id="svgPtM" cx="40" cy="140" r="5" fill="#2563eb" />
        <text id="svgLblM" x="25" y="145" font-size="14" font-weight="bold" fill="#2563eb">M</text>
        <circle id="svgPtA" cx="200" cy="80" r="4.5" fill="#dc2626" />
        <text id="svgLblA" x="195" y="72" font-size="13" font-weight="bold" fill="#dc2626">A</text>
        <circle id="svgPtB" cx="200" cy="200" r="4.5" fill="#dc2626" />
        <text id="svgLblB" x="195" y="218" font-size="13" font-weight="bold" fill="#dc2626">B</text>
        <circle id="svgPtH" cx="200" cy="140" r="3.5" fill="#9333ea" />
        <text id="svgLblH" x="204" y="135" font-size="12" font-weight="bold" fill="#9333ea">H</text>
      </svg>
    </div>

    <!-- Controls & Info -->
    <div style="flex: 1 1 280px; max-width: 360px;">
      <div style="margin-bottom: 16px;">
        <label style="font-weight: 600; font-size: 0.95em; display: block; margin-bottom: 6px;">
          Độ dài đoạn $OM$: <span id="txtOM" style="color: #2563eb; font-weight: bold;">15.0</span> cm
        </label>
        <input type="range" id="rangeOM" min="10.5" max="22" step="0.5" value="15" style="width: 100%; cursor: pointer;" />
        <div style="display: flex; justify-content: space-between; font-size: 0.8em; color: #64748b;">
          <span>Gần sát đường tròn ($R = 7\text{ cm}$)</span>
          <span>Ở rất xa</span>
        </div>
      </div>

      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 0.88em; line-height: 1.8;">
        <div>• Bán kính $R = OA = OB = 7.0\text{ cm}$</div>
        <div>• Tiếp tuyến $MA = MB = \sqrt{OM^2 - R^2} = $ <strong id="valMA" style="color: #2563eb;">13.27</strong> cm</div>
        <div>• Dây tiếp điểm $AB = \frac{2 \cdot MA \cdot R}{OM} = $ <strong id="valAB" style="color: #9333ea;">12.38</strong> cm</div>
        <div>• Góc tạo bởi 2 tiếp tuyến $\widehat{AMB} = $ <strong id="valAngleM" style="color: #047857;">55.8°</strong></div>
        <div>• Góc ở tâm $\widehat{AOB} = 180^\circ - \widehat{AMB} = $ <strong id="valAngleO" style="color: #dc2626;">124.2°</strong></div>
        <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #e2e8f0; font-style: italic; color: #475569;">
          $\implies OM$ luôn là trung trực của dây $AB$ ($OM \perp AB$ tại $H$).
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const slider = document.getElementById('rangeOM');
  if (!slider) return;

  const txtOM = document.getElementById('txtOM');
  const valMA = document.getElementById('valMA');
  const valAB = document.getElementById('valAB');
  const valAngleM = document.getElementById('valAngleM');
  const valAngleO = document.getElementById('valAngleO');

  const lineOM = document.getElementById('svgLineOM');
  const lineMA = document.getElementById('svgLineMA');
  const lineMB = document.getElementById('svgLineMB');
  const lineOA = document.getElementById('svgLineOA');
  const lineOB = document.getElementById('svgLineOB');
  const lineAB = document.getElementById('svgLineAB');
  const ptM = document.getElementById('svgPtM');
  const ptA = document.getElementById('svgPtA');
  const ptB = document.getElementById('svgPtB');
  const ptH = document.getElementById('svgPtH');
  const lblM = document.getElementById('svgLblM');
  const lblA = document.getElementById('svgLblA');
  const lblB = document.getElementById('svgLblB');
  const lblH = document.getElementById('svgLblH');
  const rtA = document.getElementById('svgRtA');
  const rtB = document.getElementById('svgRtB');
  const rtH = document.getElementById('svgRtH');

  const ox = 260, oy = 140, rPx = 70; // R = 7cm (scale 1cm = 10px)

  function update() {
    const omCm = parseFloat(slider.value);
    txtOM.textContent = omCm.toFixed(1);

    const R = 7;
    const maCm = Math.sqrt(omCm * omCm - R * R);
    const abCm = (2 * maCm * R) / omCm;
    const angleMRad = 2 * Math.asin(R / omCm);
    const angleMDeg = (angleMRad * 180) / Math.PI;
    const angleODeg = 180 - angleMDeg;

    valMA.textContent = maCm.toFixed(2);
    valAB.textContent = abCm.toFixed(2);
    valAngleM.textContent = angleMDeg.toFixed(1) + '°';
    valAngleO.textContent = angleODeg.toFixed(1) + '°';

    // SVG coordinates
    const omPx = omCm * 10;
    const mx = ox - omPx;
    const my = oy;

    // Contact points A and B
    // In right triangle OAM: cos(AOM) = R / OM
    const cosAOM = R / omCm;
    const sinAOM = Math.sqrt(1 - cosAOM * cosAOM);

    // Vector from O to M is (-omPx, 0)
    // Angle of OM is 180 deg (Math.PI)
    // Angle of OA is PI - acos(R/OM) or PI + acos
    const alpha = Math.acos(cosAOM);
    const ax = ox - rPx * Math.cos(alpha);
    const ay = oy - rPx * Math.sin(alpha);
    const bx = ax;
    const by = oy + rPx * Math.sin(alpha);

    // Foot H is at (ax, oy)
    const hx = ax;
    const hy = oy;

    ptM.setAttribute('cx', mx);
    ptM.setAttribute('cy', my);
    lblM.setAttribute('x', mx - 18);
    lblM.setAttribute('y', my + 5);

    lineOM.setAttribute('x1', mx);
    lineOM.setAttribute('x2', ox);

    ptA.setAttribute('cx', ax);
    ptA.setAttribute('cy', ay);
    lblA.setAttribute('x', ax - 8);
    lblA.setAttribute('y', ay - 8);

    ptB.setAttribute('cx', bx);
    ptB.setAttribute('cy', by);
    lblB.setAttribute('x', bx - 8);
    lblB.setAttribute('y', by + 18);

    ptH.setAttribute('cx', hx);
    ptH.setAttribute('cy', hy);
    lblH.setAttribute('x', hx + 6);
    lblH.setAttribute('y', hy - 6);

    lineMA.setAttribute('x1', mx);
    lineMA.setAttribute('y1', my);
    lineMA.setAttribute('x2', ax);
    lineMA.setAttribute('y2', ay);

    lineMB.setAttribute('x1', mx);
    lineMB.setAttribute('y1', my);
    lineMB.setAttribute('x2', bx);
    lineMB.setAttribute('y2', by);

    lineOA.setAttribute('x2', ax);
    lineOA.setAttribute('y2', ay);

    lineOB.setAttribute('x2', bx);
    lineOB.setAttribute('y2', by);

    lineAB.setAttribute('x1', ax);
    lineAB.setAttribute('y1', ay);
    lineAB.setAttribute('x2', bx);
    lineAB.setAttribute('y2', by);

    // Right angle mark at H
    rtH.setAttribute('d', `M ${hx - 8} ${hy} L ${hx - 8} ${hy - 8} L ${hx} ${hy - 8}`);
  }

  slider.addEventListener('input', update);
  update();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Xác định Vị trí Tương đối Dựa vào Khoảng cách $d$ và Bán kính $R$

> [!TIP]
> **Phương pháp cốt lõi:**
> So sánh độ dài khoảng cách $d$ từ tâm đến đường thẳng với bán kính $R$:
> - $d < R \iff$ Cắt nhau ($2$ điểm chung).
> - $d = R \iff$ Tiếp xúc nhau ($1$ điểm chung duy nhất).
> - $d > R \iff$ Không giao nhau ($0$ điểm chung).

#### Bài toán mẫu 1.1:
Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\text{ cm}$, $AC = 8\text{ cm}$. Vẽ đường tròn $(B; 6\text{ cm})$.
Xác định vị trí tương đối của đường thẳng $AC$ và đường thẳng $BC$ đối với đường tròn $(B)$.

**Lời giải chi tiết:**
1. Đối với đường thẳng $AC$:
Vì $\triangle ABC$ vuông tại $A \implies BA \perp AC$ tại $A$.
Do đó khoảng cách từ tâm $B$ đến đường thẳng $AC$ chính là đoạn $BA$:
$$d(B, AC) = BA = 6\text{ cm}$$
Mặt khác bán kính đường tròn tâm $B$ là $R = 6\text{ cm}$.
Nhận thấy $d(B, AC) = R = 6\text{ cm}$, suy ra **đường thẳng $AC$ tiếp xúc với đường tròn $(B)$ tại tiếp điểm $A$** (tức $AC$ là tiếp tuyến của $(B)$).

2. Đối với đường thẳng $BC$:
Áp dụng định lý Pythagore trong tam giác vuông $ABC$:
$$BC = \sqrt{AB^2 + AC^2} = \sqrt{6^2 + 8^2} = 10\text{ cm}$$
Kẻ $AH \perp BC$ tại $H$. Áp dụng hệ thức lượng trong tam giác vuông $ABC$:
$$BA \cdot AC = AH \cdot BC \implies AH = \frac{BA \cdot AC}{BC} = \frac{6 \times 8}{10} = 4{,}8\text{ cm}$$
Kẻ đường cao $BK$ từ $B$ xuống $BC$, khoảng cách từ $B$ đến $BC$ bằng $0$ (vì $B \in BC$).
Nhận thấy $d(B, BC) = 0 < R = 6\text{ cm}$.
Do đó **đường thẳng $BC$ cắt đường tròn $(B)$ tại hai điểm phân biệt**.

---

### Dạng 2: Chứng minh một Đường thẳng là Tiếp tuyến của Đường tròn

> [!TIP]
> **Phương pháp cốt lõi (Phổ biến 90% các đề thi):**
> Để chứng minh đường thẳng $d$ là tiếp tuyến của đường tròn $(O)$ tại điểm $A$:
> 1. Chỉ ra điểm $A$ thuộc đường tròn $(O)$ ($OA = R$).
> 2. Chứng minh góc $\widehat{OAd} = 90^\circ$ ($OA \perp d$).
> Các kỹ thuật thường dùng để chứng minh góc vuông: tổng các góc phụ nhau, tam giác bằng nhau, định lý Pythagore đảo, hoặc sử dụng tính chất hình chữ nhật/hình vuông.

#### Bài toán mẫu 2.1:
Cho tam giác $ABC$ cân tại $A$. Đường cao $AH$ và $BK$ cắt nhau tại $I$. Vẽ đường tròn $(O)$ có đường kính là $AI$.
Chứng minh rằng $BK$ là tiếp tuyến của đường tròn $(O)$.

**Lời giải chi tiết:**

```
          A
         /|\
        / | \
       K--I--\
      /   |   \
     B----+----C
          H
```

1. Vì đường tròn $(O)$ có đường kính là $AI$ nên tâm $O$ là trung điểm của $AI$.
Tam giác $AKI$ vuông tại $K$ (do $BK \perp AC$) có $KO$ là đường trung tuyến ứng với cạnh huyền $AI$:
$$KO = \frac{1}{2} AI = OI = OA$$
Suy ra điểm $K$ thuộc đường tròn $(O)$.

2. Ta cần chứng minh $BK \perp OK$ tại $K$, tức là chứng minh $\widehat{OKB} = 90^\circ$:
Ta có: $\widehat{OKB} = \widehat{OKI} + \widehat{IKB}$.
- Vì $\triangle OKI$ có $OK = OI$ nên $\triangle OKI$ cân tại $O \implies \widehat{OKI} = \widehat{OIK}$.
- Lại có $\widehat{OIK} = \widehat{BIH}$ (hai góc đối đỉnh).
- Trong tam giác vuông $BHI$ (vuông tại $H$): $\widehat{BIH} + \widehat{IBH} = 90^\circ$.
Suy ra: $\widehat{OKI} + \widehat{IBH} = 90^\circ$.

Mặt khác, trong tam giác cân $ABC$ ($AB = AC$), đường cao $AH$ đồng thời là đường phân giác $\implies \widehat{BAH} = \widehat{CAH}$.
Xét hai tam giác vuông $\triangle ABH$ và $\triangle ACK$:
$$\widehat{ABH} = 90^\circ - \widehat{BAH} = 90^\circ - \widehat{CAH} = \widehat{ACK}$$
Hơn nữa trong $\triangle BCK$ vuông tại $K$: $\widehat{KBC} + \widehat{KCB} = 90^\circ \implies \widehat{IBH} + \widehat{C} = 90^\circ$.
Kết hợp lại ta được: $\widehat{OKI} + \widehat{IKB} = 90^\circ \implies \widehat{OKB} = 90^\circ$.
Do đó $BK \perp OK$ tại điểm $K \in (O)$.
Vậy **$BK$ là tiếp tuyến của đường tròn $(O)$**.

---

### Dạng 3: Vận dụng Tính chất Hai Tiếp tuyến Cắt nhau

> [!TIP]
> **Phương pháp cốt lõi:**
> Khi bài toán có hai tiếp tuyến cắt nhau tại $M$ ($MA, MB$ là tiếp tuyến):
> - Luôn tận dụng: $MA = MB$, $OM$ là đường trung trực của $AB$.
> - Áp dụng các hệ thức lượng: $MA^2 = MH \cdot MO$, $OA^2 = OH \cdot MO = R^2$, $MA \cdot OA = AH \cdot MO$.
> - Khi kẻ thêm một tiếp tuyến thứ ba cắt $MA, MB$ tại $C, D$, áp dụng tính chất cộng đoạn thẳng tiếp tuyến: Chu vi $\triangle MCD = MC + MD + CD = MC + MD + CA' + DA' = MA + MB = 2MA$ (đại lượng bất biến không đổi!).

#### Bài toán mẫu 3.1:
Từ điểm $M$ ở ngoài đường tròn $(O; R)$, kẻ hai tiếp tuyến $MA, MB$ với đường tròn ($A, B$ là tiếp điểm). Kẻ đường kính $AC$.
a) Chứng minh $OM \perp AB$ và $BC \parallel OM$.
b) Biết $R = 6\text{ cm}$, $OM = 10\text{ cm}$. Tính độ dài các đoạn thẳng $MA$ và $AB$.

**Lời giải chi tiết:**
a) Chứng minh $OM \perp AB$ và $BC \parallel OM$:
- Theo tính chất hai tiếp tuyến cắt nhau: $MA = MB$ và $OA = OB = R$.
Do đó $OM$ là đường trung trực của đoạn thẳng $AB \implies OM \perp AB$ tại $H$.
- Tam giác $ABC$ nội tiếp đường tròn $(O)$ có cạnh $AC$ là đường kính nên $\triangle ABC$ vuông tại $B \implies AB \perp BC$.
- Ta có: $\left. \begin{array}{l} OM \perp AB \\ BC \perp AB \end{array} \right\} \implies BC \parallel OM$ (cùng vuông góc với $AB$).

b) Tính $MA$ và $AB$:
- Áp dụng định lý Pythagore trong tam giác vuông $OAM$ (vuông tại $A$ do $MA$ là tiếp tuyến):
$$MA = \sqrt{OM^2 - OA^2} = \sqrt{10^2 - 6^2} = \sqrt{100 - 36} = 8\text{ cm}$$
- Áp dụng hệ thức lượng trong tam giác vuông $OAM$ với đường cao $AH$:
$$AH \cdot OM = OA \cdot MA \implies AH = \frac{OA \cdot MA}{OM} = \frac{6 \times 8}{10} = 4{,}8\text{ cm}$$
Vì $H$ là trung điểm của $AB$ nên:
$$AB = 2AH = 2 \times 4{,}8 = 9{,}6\text{ cm}$$

---

### Dạng 4: Bán kính Đường tròn Nội tiếp Tam giác

> [!TIP]
> **Phương pháp cốt lõi:**
> - Tam giác bất kỳ: $r = \frac{S}{p}$ với $p = \frac{a+b+c}{2}$.
> - Tam giác vuông tại $A$: $r = \frac{a + b - c}{2} = \frac{AB + AC - BC}{2}$.
> - Tam giác đều cạnh $a$: $r = \frac{a\sqrt{3}}{6}$.

#### Bài toán mẫu 4.1:
Cho tam giác $ABC$ vuông tại $A$ có các cạnh góc vuông $AB = 9\text{ cm}$, $AC = 12\text{ cm}$.
a) Tính bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.
b) Tính bán kính $r$ của đường tròn nội tiếp tam giác $ABC$.

**Lời giải chi tiết:**
Áp dụng định lý Pythagore trong $\triangle ABC$ vuông tại $A$:
$$BC = \sqrt{AB^2 + AC^2} = \sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15\text{ cm}$$

a) Bán kính đường tròn ngoại tiếp $\triangle ABC$:
Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm của cạnh huyền $BC$:
$$R = \frac{BC}{2} = \frac{15}{2} = 7{,}5\text{ cm}$$

b) Bán kính đường tròn nội tiếp $\triangle ABC$:
*Cách 1 (Công thức đặc biệt cho tam giác vuông):*
$$r = \frac{AB + AC - BC}{2} = \frac{9 + 12 - 15}{2} = \frac{6}{2} = 3\text{ cm}$$

*Cách 2 (Dùng diện tích và nửa chu vi):*
- Nửa chu vi: $p = \frac{AB + AC + BC}{2} = \frac{9 + 12 + 15}{2} = 18\text{ cm}$.
- Diện tích tam giác vuông: $S = \frac{1}{2} AB \cdot AC = \frac{1}{2} \times 9 \times 12 = 54\text{ cm}^2$.
- Bán kính đường tròn nội tiếp:
$$r = \frac{S}{p} = \frac{54}{18} = 3\text{ cm}$$

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG TIẾP TUYẾN ĐƯỜNG TRÒN TRONG ĐỜI SỐNG
 ┌────────────────────────────────────────────────────────┐
 │ 1. Cơ cấu dây đai truyền động Pulley & Dây cu-roa      │
 │ 2. Thiết kế nút giao thông đảo xuyến (Roundabout)      │
 │ 3. Quang học: Sự hình thành bóng nửa tối khi nhật thực │
 │ 4. Đạn đạo hàng không vũ trụ: Tách tầng theo tiếp tuyến│
 │ 5. Gia công cơ khí chính xác: Lập trình dao tiện CNC   │
 └────────────────────────────────────────────────────────┘
```

### 1. Dây cu-roa truyền động cơ học (Belt and Pulley System)
Trong động cơ ô tô, xe máy và máy giặt, các bánh đà (pulley) truyền chuyển động cho nhau thông qua dây cu-roa.
Hai nhánh của sợi dây căng nối giữa hai bánh đà chính là **tiếp tuyến chung ngoài** hoặc **tiếp tuyến chung trong** của hai đường tròn. Các kỹ sư cơ khí sử dụng tính chất tiếp tuyến để tính toán chính xác góc ôm tiếp xúc và chiều dài tổng thể của dây curoa, bảo đảm lực ma sát truyền tải công suất tối đa mà không bị trượt.

### 2. Thiết kế Nút giao thông Đảo xuyến (Vòng xoay Roundabout)
Để giảm thiểu tai nạn tại các ngã tư đông đúc, các kỹ sư cầu đường xây dựng đảo xuyến hình tròn ở giữa.
Các luồng phương tiện từ các nhánh đường đi vào vòng xoay không đâm vuông góc vào nhau, mà hòa dòng nhẹ nhàng theo hướng **tiếp tuyến** với vòng xuyến trung tâm. Thiết kế tiếp tuyến này triệt tiêu hoàn toàn góc xung đột trực diện, giảm thiểu đến $90\%$ nguy cơ va chạm nghiêm trọng!

### 3. Vùng bóng tối và bóng nửa tối (Umbra and Penumbra)
Trong hiện tượng Nhật thực:
- Mặt Trời là nguồn sáng hình cầu lớn, Mặt Trăng là vật chắn hình cầu nhỏ hơn.
- Các tia sáng đi qua mép ngoài của cả hai thiên thể tạo thành các **tiếp tuyến chung ngoài**, giới hạn vùng bóng nửa tối (Penumbra).
- Các tia sáng chéo nhau đi qua mép đối diện tạo thành các **tiếp tuyến chung trong**, hội tụ lại tạo thành đỉnh nón của vùng bóng tối hoàn toàn (Umbra). Người đứng trong vùng tiếp tuyến bóng tối này sẽ quan sát được Nhật thực toàn phần tuyệt đẹp!

### 4. Tách tầng tên lửa đẩy và Đưa vệ tinh vào quỹ đạo
Khi tên lửa đẩy đưa vệ tinh vào quỹ đạo quanh Trái Đất, để chuyển đổi từ quỹ đạo tròn sang quỹ đạo elip chuyển tiếp (quỹ đạo Hohmann), động cơ phản lực sẽ khai hỏa theo phương **tiếp tuyến với quỹ đạo tròn hiện tại**. Lực đẩy tiếp tuyến này làm tăng tốc độ góc mà không làm lãng phí nhiên liệu do lực cản hướng tâm, giúp tàu vũ trụ đạt vận tốc vũ trụ cấp một và cấp hai tối ưu nhất.

### 5. Lập trình tiện phay CNC trong gia công cơ khí
Máy cắt kim loại bằng tia laser hoặc dao tiện CNC khi cắt gọt bề mặt cong tròn phải luôn điều khiển đầu mũi dao di chuyển theo vectơ vận tốc trùng với **tiếp tuyến tức thời** của đường biên dạng chi tiết. Nếu đầu dao đi lệch khỏi tiếp tuyến dù chỉ $0{,}01\text{ mm}$, chi tiết cơ khí sẽ bị lẹm hoặc sinh bavia, làm hỏng toàn bộ sản phẩm gia công chính xác.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho đường tròn $(O; R)$ và đường thẳng $\\Delta$. Gọi $d$ là khoảng cách từ $O$ đến $\\Delta$. Đường thẳng $\\Delta$ tiếp xúc với đường tròn khi và chỉ khi:",
  "options": [
    "A. $d < R$",
    "B. $d = R$",
    "C. $d > R$",
    "D. $d \\le R$"
  ],
  "correct": 1,
  "explanation": "Đường thẳng tiếp xúc với đường tròn khi và chỉ khi khoảng cách từ tâm đến đường thẳng bằng đúng bán kính: $d = R$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nếu một đường thẳng là tiếp tuyến của một đường tròn thì nó:",
  "options": [
    "A. Đi qua tâm của đường tròn",
    "B. Song song với bán kính đi qua tiếp điểm",
    "C. Vuông góc với bán kính đi qua tiếp điểm",
    "D. Cắt đường tròn tại hai điểm phân biệt"
  ],
  "correct": 2,
  "explanation": "Theo định lý về tính chất tiếp tuyến, tiếp tuyến luôn vuông góc với bán kính đi qua tiếp điểm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho đường tròn $(O; 8\\text{ cm})$ và điểm $M$ sao cho $OM = 10\\text{ cm}$. Kẻ tiếp tuyến $MA$ với $(O)$ ($A$ là tiếp điểm). Độ dài đoạn thẳng $MA$ là:",
  "options": [
    "A. 6 cm",
    "B. 8 cm",
    "C. $\\sqrt{164}$ cm",
    "D. 2 cm"
  ],
  "correct": 0,
  "explanation": "Vì $MA$ là tiếp tuyến nên $\\triangle OAM$ vuông tại $A$. Theo định lý Pythagore: $MA = \\sqrt{OM^2 - OA^2} = \\sqrt{10^2 - 8^2} = 6\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Từ một điểm $M$ ở ngoài đường tròn $(O)$, kẻ hai tiếp tuyến $MA$ và $MB$ ($A, B$ là tiếp điểm). Khẳng định nào sau đây là SAI?",
  "options": [
    "A. $MA = MB$",
    "B. $OM$ là đường trung trực của đoạn thẳng $AB$",
    "C. $\\widehat{AMO} = \\widehat{BMO}$",
    "D. $AB$ là đường kính của đường tròn $(O)$"
  ],
  "correct": 3,
  "explanation": "Khẳng định D sai. $AB$ là một dây cung của đường tròn chứ không phải là đường kính ($AB$ chỉ là đường kính khi $\\widehat{AOB} = 180°$, điều này không thể xảy ra khi hai tiếp tuyến cắt nhau tại $M$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Từ điểm $M$ ở ngoài $(O)$, kẻ hai tiếp tuyến $MA, MB$ với $(O)$. Biết $\\widehat{AMB} = 50°$. Số đo của góc ở tâm $\\widehat{AOB}$ là:",
  "options": [
    "A. 50°",
    "B. 100°",
    "C. 130°",
    "D. 140°"
  ],
  "correct": 2,
  "explanation": "Tứ giác $MAOB$ có $\\widehat{MAO} = \\widehat{MBO} = 90°$. Tổng các góc trong tứ giác bằng $360° \\implies \\widehat{AOB} = 180° - \\widehat{AMB} = 180° - 50° = 130°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Tâm của đường tròn nội tiếp tam giác là giao điểm của ba đường gì trong tam giác?",
  "options": [
    "A. Ba đường trung trực",
    "B. Ba đường cao",
    "C. Ba đường trung tuyến",
    "D. Ba đường phân giác trong"
  ],
  "correct": 3,
  "explanation": "Tâm đường tròn nội tiếp tam giác cách đều 3 cạnh nên là giao điểm của 3 đường phân giác trong của tam giác."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tam giác $ABC$ vuông tại $A$ có $AB = 3\\text{ cm}$, $AC = 4\\text{ cm}$, $BC = 5\\text{ cm}$. Bán kính đường tròn nội tiếp tam giác đó bằng:",
  "options": [
    "A. 1 cm",
    "B. 1,5 cm",
    "C. 2 cm",
    "D. 2,5 cm"
  ],
  "correct": 0,
  "explanation": "Với tam giác vuông: $r = \\frac{AB + AC - BC}{2} = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác đều $ABC$ cạnh $a = 6\\text{ cm}$. Bán kính của đường tròn nội tiếp tam giác đều này bằng:",
  "options": [
    "A. $\\sqrt{3}\\text{ cm}$",
    "B. $2\\sqrt{3}\\text{ cm}$",
    "C. $3\\text{ cm}$",
    "D. $3\\sqrt{3}\\text{ cm}$"
  ],
  "correct": 0,
  "explanation": "Đường cao của tam giác đều cạnh $a$ là $h = \\frac{a\\sqrt{3}}{2} = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}\\text{ cm}$. Tâm đường tròn nội tiếp trùng trọng tâm nên $r = \\frac{1}{3} h = \\frac{1}{3} \\times 3\\sqrt{3} = \\sqrt{3}\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho đường tròn $(O; R)$. Từ điểm $M$ sao cho $OM = 2R$, kẻ hai tiếp tuyến $MA, MB$. Tam giác $MAB$ là tam giác gì?",
  "options": [
    "A. Tam giác vuông cân",
    "B. Tam giác đều",
    "C. Tam giác vuông có một góc 30°",
    "D. Tam giác tù"
  ],
  "correct": 1,
  "explanation": "Trong $\\triangle OAM$ vuông tại $A$: $\\sin \\widehat{AMO} = \\frac{OA}{OM} = \\frac{R}{2R} = \\frac{1}{2} \\implies \\widehat{AMO} = 30°$. Do $MO$ là phân giác nên $\\widehat{AMB} = 2 \\times 30° = 60°$. Tam giác $MAB$ cân tại $M$ (do $MA = MB$) có một góc bằng 60° nên là tam giác đều."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Từ điểm $M$ ngoài $(O)$, kẻ 2 tiếp tuyến $MA, MB$. Qua điểm $E$ trên cung nhỏ $AB$, kẻ tiếp tuyến thứ ba cắt $MA, MB$ lần lượt tại $C$ và $D$. Biết $MA = 12\\text{ cm}$. Chu vi tam giác $MCD$ bằng:",
  "options": [
    "A. 12 cm",
    "B. 18 cm",
    "C. 24 cm",
    "D. 36 cm"
  ],
  "correct": 2,
  "explanation": "Theo tính chất tiếp tuyến cắt nhau: $CA = CE$ và $DB = DE$. Do đó chu vi $\\triangle MCD = MC + MD + CD = MC + MD + CE + ED = (MC + CA) + (MD + DB) = MA + MB = 2MA = 2 \\times 12 = 24\\text{ cm}$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Đo Bán kính Bồn chứa Xăng dầu ngầm
Một trạm xăng dầu có một bồn chứa kim loại ngầm hình trụ tròn. Vì bồn đã được chôn dưới đất, các kỹ sư không thể đào lên để đo trực tiếp đường kính.
Họ tiến hành đặt hai thanh gióng thẳng tạo thành một góc vuông $\widehat{xMy} = 90^\circ$ tiếp xúc ngoài với thân bồn chứa tại hai điểm $A$ và $B$.
Bằng máy đo laser, khoảng cách từ đỉnh góc vuông $M$ đến điểm gần nhất $P$ trên mặt cong của bồn đo được là $MP = 29{,}3\text{ cm}$.
Hãy tính bán kính $R$ của bồn chứa xăng dầu đó.

> [!TIP]
> **Hướng dẫn giải thử thách:**
> Vì hai thanh gióng tiếp xúc với bồn chứa tại $A$ và $B$, nên $MA, MB$ là hai tiếp tuyến của đường tròn tiết diện bồn chứa $(O; R)$.
> Theo tính chất hai tiếp tuyến cắt nhau:
> - $MA \perp OA$ và $MB \perp OB$.
> - Góc $\widehat{AMB} = 90^\circ$.
> Tứ giác $MAOB$ có 3 góc vuông tại $M, A, B$ và hai cạnh kề $OA = OB = R$, nên $MAOB$ là **hình vuông** cạnh $R$!
> Đoạn chéo $MO$ của hình vuông là:
> $$MO = R\sqrt{2}$$
> Điểm $P$ là giao điểm của đoạn $MO$ với đường tròn $(O)$, do đó $OP = R$.
> Suy ra:
> $$MP = MO - OP = R\sqrt{2} - R = R(\sqrt{2} - 1)$$
> Thay số $MP = 29{,}3\text{ cm}$:
> $$R = \frac{MP}{\sqrt{2} - 1} = \frac{29{,}3}{1{,}4142 - 1} = \frac{29{,}3}{0{,}4142} \approx 70{,}7\text{ cm}$$
> Vậy bán kính bồn chứa khoảng $70{,}7\text{ cm}$ (đường kính khoảng $1{,}41\text{ m}$).

---

### Bài tập Tự luyện

**Bài 1:** Cho đường tròn $(O; 5\text{ cm})$ và điểm $M$ cách $O$ một khoảng $13\text{ cm}$. Kẻ hai tiếp tuyến $MA, MB$ với $(O)$ ($A, B$ là tiếp điểm).
a) Tính độ dài các tiếp tuyến $MA, MB$.
b) Kẻ đường cao $AH$ của $\triangle OAM$. Tính $AH$ và độ dài dây tiếp điểm $AB$.
c) Tính diện tích tứ giác $MAOB$.

**Bài 2:** Cho nửa đường tròn tâm $O$ đường kính $AB$. Gọi $Ax, By$ là các tia vuông góc với $AB$ ($Ax, By$ và nửa đường tròn cùng thuộc một nửa mặt phẳng bờ $AB$). Qua điểm $M$ trên nửa đường tròn ($M \ne A, B$), kẻ tiếp tuyến thứ ba cắt $Ax$ tại $C$ và $By$ tại $D$.
a) Chứng minh $\widehat{COD} = 90^\circ$.
b) Chứng minh $CD = AC + BD$.
c) Chứng minh tích $AC \cdot BD$ không đổi khi $M$ di chuyển trên nửa đường tròn.

**Bài 3:** Cho tam giác $ABC$ có chu vi $24\text{ cm}$ và diện tích $24\text{ cm}^2$.
a) Tính bán kính đường tròn nội tiếp tam giác $ABC$.
b) Giả sử tam giác $ABC$ là tam giác cân tại $A$ có cạnh đáy $BC = 6\text{ cm}$. Hãy tính độ dài các cạnh bên $AB, AC$ và bán kính đường tròn ngoại tiếp của nó.
