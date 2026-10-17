---
title: 'Toán 12 Bài 7: Hệ trục toạ độ trong không gian Oxyz - Toạ độ điểm và Vectơ'
description: 'Lý thuyết trọng tâm Bài 7 Toán 12 Kết nối tri thức: Hệ toạ độ Oxyz, toạ độ điểm và vectơ, công thức trung điểm, trọng tâm, khoảng cách hai điểm, phương trình mặt cầu kèm mô phỏng 3D tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Oxyz
  - Hệ toạ độ
  - Không gian 3D
  - Phương trình mặt cầu
  - Kết nối tri thức
grade: 12
---

# Bài 7. Hệ trục toạ độ trong không gian

Trong cuộc sống hiện đại, làm thế nào để trạm kiểm soát không lưu tại sân bay Nội Bài hay Tân Sơn Nhất biết chính xác vị trí của một chiếc máy bay đang bay giữa tầng mây mịt mù? Làm thế nào để hệ thống định vị vệ tinh toàn cầu (GPS) chỉ đường cho bạn từng khúc quanh trên phố?

Câu trả lời nằm ở một phát minh vĩ đại của nhà toán học René Descartes: **Hệ toạ độ không gian $Oxyz$**. Bằng cách thiết lập ba trục vuông góc đôi một, mọi vị trí trong vũ trụ đều được số hoá thành một bộ ba số thực duy nhất $(x; y; z)$ – tương ứng với kinh độ, vĩ độ và độ cao. Bài học này sẽ mở ra cánh cửa đại số hoá toàn bộ hình học không gian, biến những bài toán hình học phức tạp thành các phép tính đại số chuẩn xác.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ TOẠ ĐỘ Oxyz</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Trục & Mặt phẳng toạ độ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Gốc $O(0; 0; 0)$ và ba trục $Ox, Oy, Oz$ đôi một vuông góc.<br>
• Ba vectơ đơn vị: $\vec{i}, \vec{j}, \vec{k}$ ($|\vec{i}| = |\vec{j}| = |\vec{k}| = 1$).<br>
• Ba mặt phẳng toạ độ: $(Oxy): z = 0$, $(Oyz): x = 0$, $(Ozx): y = 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Toạ độ điểm và vectơ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $M(x; y; z) \iff \vec{OM} = x\vec{i} + y\vec{j} + z\vec{k}$.<br>
• $\vec{u}(x; y; z) \iff \vec{u} = x\vec{i} + y\vec{j} + z\vec{k}$.<br>
• $\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Trung điểm, Trọng tâm, Khoảng cách</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Trung điểm $AB$: $M = \frac{A + B}{2}$.<br>
• Trọng tâm $\triangle ABC$: $G = \frac{A + B + C}{3}$.<br>
• Khoảng cách: $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Phương trình mặt cầu</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tâm $I(a; b; c)$, bán kính $R$:<br>
  $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$.<br>
• Dạng khai triển: $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$<br>
  với $R = \sqrt{a^2 + b^2 + c^2 - d} > 0$.
</p>
</div>
</div>
</div>

---

## I. Hệ toạ độ trong không gian

### 1. Định nghĩa hệ toạ độ $Oxyz$
Trong không gian, chọn một điểm $O$ cố định làm gốc toạ độ và ba trục số $Ox, Oy, Oz$ vuông góc với nhau từng đôi một:
- **Trục $Ox$:** Trục hoành, có vectơ đơn vị là $\vec{i}$.
- **Trục $Oy$:** Trục tung, có vectơ đơn vị là $\vec{j}$.
- **Trục $Oz$:** Trục cao, có vectơ đơn vị là $\vec{k}$.

Hệ ba trục như vậy được gọi là **Hệ trục toạ độ Đề-các vuông góc trong không gian**, ký hiệu là $Oxyz$.
Các vectơ đơn vị thỏa mãn:
$$|\vec{i}| = |\vec{j}| = |\vec{k}| = 1 \quad \text{và} \quad \vec{i} \cdot \vec{j} = \vec{j} \cdot \vec{k} = \vec{k} \cdot \vec{i} = 0$$

<div style="margin: 20px auto; max-width: 500px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); text-align: center;">
<div style="font-weight: bold; color: #1e293b; margin-bottom: 8px;">HỆ TRỤC TOẠ ĐỘ KHÔNG GIAN Oxyz VÀ TOẠ ĐỘ ĐIỂM M(x; y; z)</div>
<svg viewBox="0 0 460 300" width="100%" class="lesson-diagram">
<defs>
  <marker id="arr-axis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569"/></marker>
  <marker id="arr-om" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#dc2626"/></marker>
</defs>
<!-- Axes from Origin O(180, 190) -->
<!-- Ox obliquely forward-left: (180, 190) -> (70, 270) -->
<line x1="180" y1="190" x2="75" y2="266" stroke="#475569" stroke-width="2" marker-end="url(#arr-axis)"/>
<!-- Oy horizontally right: (180, 190) -> (410, 190) -->
<line x1="180" y1="190" x2="405" y2="190" stroke="#475569" stroke-width="2" marker-end="url(#arr-axis)"/>
<!-- Oz vertically up: (180, 190) -> (180, 30) -->
<line x1="180" y1="190" x2="180" y2="35" stroke="#475569" stroke-width="2" marker-end="url(#arr-axis)"/>

<!-- Axis Labels -->
<text x="60" y="280" font-family="sans-serif" font-size="15" font-weight="bold" fill="#475569">x</text>
<text x="420" y="195" font-family="sans-serif" font-size="15" font-weight="bold" fill="#475569">y</text>
<text x="180" y="22" font-family="sans-serif" font-size="15" font-weight="bold" fill="#475569">z</text>
<text x="165" y="205" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">O</text>

<!-- Point M(x, y, z): Projection box -->
<!-- x projection on Ox: Mx at (125, 230) -->
<!-- y projection on Oy: My at (310, 190) -->
<!-- Base projection Mxy on Oxy: (125 + 130, 230) = (255, 230) -->
<!-- z height: 110px up -> M at (255, 120) -->
<!-- Mz on Oz at (180, 80) -->

<!-- Base projection parallelogram (Oxy) -->
<line x1="125" y1="230" x2="255" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="310" y1="190" x2="255" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>

<!-- Vertical projection from Mxy to M -->
<line x1="255" y1="230" x2="255" y2="120" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>

<!-- Projections from M to Mz and other planes -->
<line x1="255" y1="120" x2="180" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="310" y1="190" x2="310" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="310" y1="80" x2="255" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="180" y1="80" x2="310" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>

<!-- Radius vector OM -->
<line x1="180" y1="190" x2="252" y2="123" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-om)"/>

<!-- Points -->
<circle cx="255" cy="120" r="5" fill="#dc2626"/>
<text x="268" y="118" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">M(x; y; z)</text>

<circle cx="255" cy="230" r="4" fill="#2563eb"/>
<text x="265" y="245" font-family="sans-serif" font-size="12" fill="#2563eb">M_xy(x; y; 0)</text>

<circle cx="125" cy="230" r="3.5" fill="#475569"/>
<text x="100" y="240" font-family="sans-serif" font-size="12" fill="#475569">x</text>

<circle cx="310" cy="190" r="3.5" fill="#475569"/>
<text x="315" y="208" font-family="sans-serif" font-size="12" fill="#475569">y</text>

<circle cx="180" cy="80" r="3.5" fill="#475569"/>
<text x="160" y="85" font-family="sans-serif" font-size="12" fill="#475569">z</text>
</svg>
</div>

### 2. Các mặt phẳng toạ độ
Hệ trục toạ độ $Oxyz$ chia không gian thành 8 phần (gọi là 8 góc phần tám) bởi ba mặt phẳng toạ độ:
- **Mặt phẳng $(Oxy)$:** Đi qua hai trục $Ox$ và $Oy$, có phương trình là $\mathbf{z = 0}$.
- **Mặt phẳng $(Oyz)$:** Đi qua hai trục $Oy$ và $Oz$, có phương trình là $\mathbf{x = 0}$.
- **Mặt phẳng $(Ozx)$:** Đi qua hai trục $Oz$ và $Ox$, có phương trình là $\mathbf{y = 0}$.

---

## II. Toạ độ của một điểm và toạ độ của một vectơ

### 1. Toạ độ của một điểm
Trong không gian $Oxyz$, toạ độ của điểm $M$ chính là toạ độ của vectơ vị trí $\vec{OM}$:
$$\mathbf{M(x; y; z) \iff \vec{OM} = x\vec{i} + y\vec{j} + z\vec{k}}$$
Trong đó:
- $x$ được gọi là **hoành độ** của điểm $M$.
- $y$ được gọi là **tung độ** của điểm $M$.
- $z$ được gọi là **cao độ** của điểm $M$.

#### Hình chiếu vuông góc của điểm $M(x; y; z)$:
- Lên trục hoành $Ox$: $M_1(x; 0; 0)$.
- Lên trục tung $Oy$: $M_2(0; y; 0)$.
- Lên trục cao $Oz$: $M_3(0; 0; z)$.
- Lên mặt phẳng toạ độ $(Oxy)$: $M_{xy}(x; y; 0)$.
- Lên mặt phẳng toạ độ $(Oyz)$: $M_{yz}(0; y; z)$.
- Lên mặt phẳng toạ độ $(Ozx)$: $M_{zx}(x; 0; z)$.

> [!TIP]
> **Quy tắc nhớ nhanh:** Chiếu lên cái gì thì giữ lại toạ độ của cái đó, phần còn lại cho bằng $0$!
> - Chiếu lên trục $Oz$ $\implies$ Giữ lại $z$, cho $x = y = 0 \implies (0; 0; z)$.
> - Chiếu lên mặt phẳng $(Oxy)$ $\implies$ Giữ lại $x, y$, cho $z = 0 \implies (x; y; 0)$.

---

### 2. Toạ độ của một vectơ
Trong không gian $Oxyz$, toạ độ của vectơ $\vec{u}$ là bộ ba số thực $(x; y; z)$ duy nhất sao cho:
$$\mathbf{\vec{u} = (x; y; z) \iff \vec{u} = x\vec{i} + y\vec{j} + z\vec{k}}$$
- Vectơ đơn vị: $\vec{i} = (1; 0; 0)$, $\vec{j} = (0; 1; 0)$, $\vec{k} = (0; 0; 1)$.
- Vectơ-không: $\vec{0} = (0; 0; 0)$.

#### Toạ độ vectơ nối hai điểm:
Cho hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$. Toạ độ vectơ $\vec{AB}$ được tính bằng toạ độ điểm sau trừ toạ độ điểm trước:
$$\mathbf{\vec{AB} = (x_B - x_A; \, y_B - y_A; \, z_B - z_A)}$$

---

## III. Các công thức toạ độ cơ bản

### 1. Toạ độ trung điểm và trọng tâm
- **Trung điểm $M$ của đoạn thẳng $AB$:**
  $$x_M = \frac{x_A + x_B}{2}, \quad y_M = \frac{y_A + y_B}{2}, \quad z_M = \frac{z_A + z_B}{2}$$
- **Trọng tâm $G$ của tam giác $ABC$:**
  $$x_G = \frac{x_A + x_B + x_C}{3}, \quad y_G = \frac{y_A + y_B + y_C}{3}, \quad z_G = \frac{z_A + z_B + z_C}{3}$$
- **Trọng tâm $G$ của tứ diện $ABCD$:**
  $$x_G = \frac{x_A + x_B + x_C + x_D}{4}, \quad y_G = \frac{y_A + y_B + y_C + y_D}{4}, \quad z_G = \frac{z_A + z_B + z_C + z_D}{4}$$

---

### 2. Khoảng cách giữa hai điểm trong không gian
Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ chính là độ dài của vectơ $\vec{AB}$:
$$\mathbf{AB = |\vec{AB}| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}}$$
Khoảng cách từ điểm $M(x; y; z)$ đến gốc toạ độ $O$:
$$OM = \sqrt{x^2 + y^2 + z^2}$$

---

### 3. Phương trình mặt cầu trong không gian

Trong không gian $Oxyz$, mặt cầu $(S)$ tâm $I(a; b; c)$, bán kính $R$ là tập hợp tất cả các điểm $M(x; y; z)$ sao cho $IM = R$.

#### a) Phương trình chính tắc:
$$\mathbf{(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2}$$

#### b) Phương trình tổng quát:
Khai triển phương trình chính tắc, ta được phương trình có dạng:
$$x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$$
Điều kiện để phương trình trên là phương trình của một mặt cầu là:
$$\mathbf{a^2 + b^2 + c^2 - d > 0}$$
Khi đó, mặt cầu có:
- Tâm: $\mathbf{I(a; b; c)}$.
- Bán kính: $\mathbf{R = \sqrt{a^2 + b^2 + c^2 - d}}$.

---

## Công cụ trực quan: Khám phá toạ độ điểm M(x; y; z) trong không gian 3D

Hãy kéo các thanh trượt $x, y, z$ để quan sát điểm $M$ di chuyển trong không gian, quan sát hình chiếu vuông góc lên các mặt phẳng toạ độ $(Oxy), (Oyz), (Ozx)$ và độ dài khoảng cách $OM$:

<div id="xyz-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG ĐIỂM M(x; y; z) TRONG KHÔNG GIAN Oxyz</h4>
<div style="max-width: 520px; margin: 0 auto 16px auto; background: #f8fafc; padding: 14px 18px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: left;">
  <div style="display: flex; gap: 12px; margin-bottom: 8px;">
    <div style="flex: 1;">
      <label style="font-weight: 600; font-size: 0.9em; color: #475569;">Hoành độ x: <strong id="val-x" style="color: #2563eb;">2.0</strong></label>
      <input type="range" id="range-x" min="-4" max="4" step="0.5" value="2" style="width: 100%;">
    </div>
    <div style="flex: 1;">
      <label style="font-weight: 600; font-size: 0.9em; color: #475569;">Tung độ y: <strong id="val-y" style="color: #16a34a;">3.0</strong></label>
      <input type="range" id="range-y" min="-4" max="4" step="0.5" value="3" style="width: 100%;">
    </div>
    <div style="flex: 1;">
      <label style="font-weight: 600; font-size: 0.9em; color: #475569;">Cao độ z: <strong id="val-z" style="color: #7c3aed;">3.5</strong></label>
      <input type="range" id="range-z" min="0" max="5" step="0.5" value="3.5" style="width: 100%;">
    </div>
  </div>
</div>

<div style="display: flex; justify-content: center; overflow-x: auto;">
<svg id="xyz-svg" data-interactive-done="true" viewBox="0 0 500 320" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1; user-select: none;">
<defs>
  <marker id="arr-axis-m" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b"/></marker>
  <marker id="arr-vec-om" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#dc2626"/></marker>
</defs>
<!-- Axes from Origin O(200, 200) -->
<!-- Ox obliquely forward-left: (200, 200) -> (70, 280) (dx = -25px, dy = +15px per unit) -->
<line x1="200" y1="200" x2="65" y2="283" stroke="#64748b" stroke-width="2" marker-end="url(#arr-axis-m)"/>
<!-- Oy horizontally right: (200, 200) -> (450, 200) (dx = +32px per unit) -->
<line x1="200" y1="200" x2="445" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#arr-axis-m)"/>
<!-- Oz vertically up: (200, 200) -> (200, 20) (dy = -28px per unit) -->
<line x1="200" y1="200" x2="200" y2="25" stroke="#64748b" stroke-width="2" marker-end="url(#arr-axis-m)"/>

<text x="50" y="295" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b">x</text>
<text x="455" y="205" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b">y</text>
<text x="200" y="18" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b">z</text>
<text x="185" y="215" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">O</text>

<!-- Projection Box (Dynamic lines) -->
<!-- Base Oxy lines -->
<line id="line-ox-mxy" x1="150" y1="230" x2="246" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>
<line id="line-oy-mxy" x1="296" y1="200" x2="246" y2="230" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
<!-- Vertical line Mxy to M -->
<line id="line-mxy-m" x1="246" y1="230" x2="246" y2="132" stroke="#7c3aed" stroke-width="2" stroke-dasharray="3,3"/>
<!-- Top projection to Oz -->
<line id="line-m-oz" x1="246" y1="132" x2="200" y2="102" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>

<!-- Vector OM -->
<line id="line-om" x1="200" y1="200" x2="243" y2="136" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-vec-om)"/>

<!-- Points -->
<circle id="pt-mxy" cx="246" cy="230" r="4" fill="#2563eb"/>
<text id="lbl-mxy" x="255" y="245" font-family="sans-serif" font-size="11" fill="#2563eb">M_xy</text>

<circle id="pt-m" cx="246" cy="132" r="6" fill="#dc2626"/>
<text id="lbl-m" x="258" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">M(2.0; 3.0; 3.5)</text>
</svg>
</div>

<div id="xyz-result-box" style="margin-top: 14px; padding: 14px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left; line-height: 1.8;">
<div>• Toạ độ điểm: <strong id="disp-coord" style="color: #dc2626; font-size: 1.2em;">M(2.0; 3.0; 3.5)</strong></div>
<div>• Vectơ vị trí: <span id="disp-vec">OM = 2.0i + 3.0j + 3.5k</span></div>
<div>• Khoảng cách từ M đến gốc O: <strong id="disp-dist" style="color: #2563eb;">OM = √(2² + 3² + 3.5²) ≈ 5.02</strong></div>
<div>• Hình chiếu trên các mặt phẳng: <span id="disp-proj">M_xy(2; 3; 0) | M_yz(0; 3; 3.5) | M_zx(2; 0; 3.5)</span></div>
</div>
</div>

<script>
const __initApp = function() {
  const rx = document.getElementById('range-x');
  const ry = document.getElementById('range-y');
  const rz = document.getElementById('range-z');

  const valX = document.getElementById('val-x');
  const valY = document.getElementById('val-y');
  const valZ = document.getElementById('val-z');
  const dispCoord = document.getElementById('disp-coord');
  const dispVec = document.getElementById('disp-vec');
  const dispDist = document.getElementById('disp-dist');
  const dispProj = document.getElementById('disp-proj');

  const lineOxMxy = document.getElementById('line-ox-mxy');
  const lineOyMxy = document.getElementById('line-oy-mxy');
  const lineMxyM = document.getElementById('line-mxy-m');
  const lineMOz = document.getElementById('line-m-oz');
  const lineOM = document.getElementById('line-om');
  const ptM = document.getElementById('pt-m');
  const lblM = document.getElementById('lbl-m');
  const ptMxy = document.getElementById('pt-mxy');
  const lblMxy = document.getElementById('lbl-mxy');

  if (!rx || !ry || !rz) return;

  const ox = 200, oy = 200;
  // Isometric scale factors
  const kx = 24, ky = 30, kz = 26;
  const sinAlpha = 0.5, cosAlpha = 0.866; // 30 deg projection for x-axis

  function update() {
    const x = parseFloat(rx.value);
    const y = parseFloat(ry.value);
    const z = parseFloat(rz.value);

    valX.textContent = x.toFixed(1);
    valY.textContent = y.toFixed(1);
    valZ.textContent = z.toFixed(1);

    dispCoord.textContent = `M(${x.toFixed(1)}; ${y.toFixed(1)}; ${z.toFixed(1)})`;
    dispVec.textContent = `OM = ${x.toFixed(1)}i + ${y.toFixed(1)}j + ${z.toFixed(1)}k`;

    const dist = Math.sqrt(x*x + y*y + z*z);
    dispDist.textContent = `OM = √(${x.toFixed(1)}² + ${y.toFixed(1)}² + ${z.toFixed(1)}²) = ${dist.toFixed(2)}`;
    dispProj.textContent = `M_xy(${x.toFixed(1)}; ${y.toFixed(1)}; 0) | M_yz(0; ${y.toFixed(1)}; ${z.toFixed(1)}) | M_zx(${x.toFixed(1)}; 0; ${z.toFixed(1)})`;

    // Coordinates of projections in 2D SVG
    // x along oblique axis (down-left): dx = -x * kx * cosAlpha, dy = +x * kx * sinAlpha
    const mx_x = ox - x * kx * cosAlpha;
    const mx_y = oy + x * kx * sinAlpha;

    // y along horizontal axis: dx = +y * ky, dy = 0
    const my_x = ox + y * ky;
    const my_y = oy;

    // Mxy in plane Oxy
    const mxy_x = ox - x * kx * cosAlpha + y * ky;
    const mxy_y = oy + x * kx * sinAlpha;

    // M height along Oz (upward): dy = -z * kz
    const m_x = mxy_x;
    const m_y = mxy_y - z * kz;

    // Point on Oz
    const mz_x = ox;
    const mz_y = oy - z * kz;

    lineOxMxy.setAttribute('x1', mx_x);
    lineOxMxy.setAttribute('y1', mx_y);
    lineOxMxy.setAttribute('x2', mxy_x);
    lineOxMxy.setAttribute('y2', mxy_y);

    lineOyMxy.setAttribute('x1', my_x);
    lineOyMxy.setAttribute('y1', my_y);
    lineOyMxy.setAttribute('x2', mxy_x);
    lineOyMxy.setAttribute('y2', mxy_y);

    lineMxyM.setAttribute('x1', mxy_x);
    lineMxyM.setAttribute('y1', mxy_y);
    lineMxyM.setAttribute('x2', m_x);
    lineMxyM.setAttribute('y2', m_y);

    lineMOz.setAttribute('x1', m_x);
    lineMOz.setAttribute('y1', m_y);
    lineMOz.setAttribute('x2', mz_x);
    lineMOz.setAttribute('y2', mz_y);

    lineOM.setAttribute('x1', ox);
    lineOM.setAttribute('y1', oy);
    lineOM.setAttribute('x2', m_x);
    lineOM.setAttribute('y2', m_y);

    ptMxy.setAttribute('cx', mxy_x);
    ptMxy.setAttribute('cy', mxy_y);
    lblMxy.setAttribute('x', mxy_x + 8);
    lblMxy.setAttribute('y', mxy_y + 14);

    ptM.setAttribute('cx', m_x);
    ptM.setAttribute('cy', m_y);
    lblM.setAttribute('x', m_x + 10);
    lblM.setAttribute('y', m_y - 4);
    lblM.textContent = `M(${x.toFixed(1)}; ${y.toFixed(1)}; ${z.toFixed(1)})`;
  }

  rx.addEventListener('input', update);
  ry.addEventListener('input', update);
  rz.addEventListener('input', update);
  update();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## IV. Các dạng toán trọng tâm có lời giải chi tiết

### Dạng 1: Tìm toạ độ của điểm và vectơ liên quan đến hình hộp, tứ diện

**Bài toán 1:** Trong không gian $Oxyz$, cho hình hộp chữ nhật $OABC.O'A'B'C'$ có gốc toạ độ trùng với đỉnh $O$, các đỉnh $A, C, O'$ lần lượt nằm trên các tia $Ox, Oy, Oz$. Biết $OA = 3$, $OC = 4$, $OO' = 5$.
1. Tìm toạ độ tất cả các đỉnh của hình hộp.
2. Tìm toạ độ tâm $I$ của hình hộp.

**Lời giải:**
1. Dựa vào vị trí các đỉnh trên hệ trục toạ độ $Oxyz$:
   - Đỉnh $O(0; 0; 0)$.
   - Đỉnh $A$ thuộc tia $Ox$ với $OA = 3 \implies A(3; 0; 0)$.
   - Đỉnh $C$ thuộc tia $Oy$ với $OC = 4 \implies C(0; 4; 0)$.
   - Đỉnh $O'$ thuộc tia $Oz$ với $OO' = 5 \implies O'(0; 0; 5)$.
   - Đỉnh $B$ thuộc mặt phẳng $(Oxy)$ có $x_B = OA = 3$, $y_B = OC = 4$, $z_B = 0 \implies B(3; 4; 0)$.
   - Đỉnh $A'$ có $x = 3, y = 0, z = 5 \implies A'(3; 0; 5)$.
   - Đỉnh $C'$ có $x = 0, y = 4, z = 5 \implies C'(0; 4; 5)$.
   - Đỉnh $B'$ có $x = 3, y = 4, z = 5 \implies B'(3; 4; 5)$.

2. Tâm $I$ của hình hộp là trung điểm của đường chéo $OB'$:
   $$x_I = \frac{0 + 3}{2} = 1.5, \quad y_I = \frac{0 + 4}{2} = 2, \quad z_I = \frac{0 + 5}{2} = 2.5$$
   Vậy $\mathbf{I(1.5; 2; 2.5)}$.

---

### Dạng 2: Tìm toạ độ điểm thoả mãn hệ thức vectơ (Điểm thẳng hàng, hình bình hành, tứ diện)

**Bài toán 2:** Trong không gian $Oxyz$, cho ba điểm $A(1; 2; -1)$, $B(2; -1; 3)$, $C(-4; 7; 5)$.
1. Chứng minh ba điểm $A, B, C$ tạo thành một tam giác.
2. Tìm toạ độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.

**Lời giải:**
1. **Chứng minh $A, B, C$ không thẳng hàng:**
   - Tính toạ độ các vectơ:
     $$\vec{AB} = (2 - 1; \, -1 - 2; \, 3 - (-1)) = (1; -3; 4)$$
     $$\vec{AC} = (-4 - 1; \, 7 - 2; \, 5 - (-1)) = (-5; 5; 6)$$
   - Xét tỷ lệ toạ độ:
     $$\frac{1}{-5} \ne \frac{-3}{5}$$
     Suy ra hai vectơ $\vec{AB}$ và $\vec{AC}$ không cùng phương. Do đó ba điểm $A, B, C$ không thẳng hàng và tạo thành một tam giác.

2. **Tìm toạ độ điểm $D(x_D; y_D; z_D)$ để $ABCD$ là hình bình hành:**
   - Tứ giác $ABCD$ là hình bình hành khi và chỉ khi:
     $$\vec{AD} = \vec{BC}$$
   - Ta có:
     $$\vec{AD} = (x_D - 1; \, y_D - 2; \, z_D - (-1)) = (x_D - 1; \, y_D - 2; \, z_D + 1)$$
     $$\vec{BC} = (-4 - 2; \, 7 - (-1); \, 5 - 3) = (-6; 8; 2)$$
   - Cho hai vectơ bằng nhau:
     $$\begin{cases} x_D - 1 = -6 \\ y_D - 2 = 8 \\ z_D + 1 = 2 \end{cases} \iff \begin{cases} x_D = -5 \\ y_D = 10 \\ z_D = 1 \end{cases}$$
   - Vậy điểm cần tìm là $\mathbf{D(-5; 10; 1)}$.

---

### Dạng 3: Bài toán khoảng cách và nhận diện tam giác

**Bài toán 3:** Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -1)$, $B(0; 3; 1)$, $C(4; 5; 1)$.
1. Tính chu vi tam giác $ABC$.
2. Chứng minh tam giác $ABC$ là tam giác vuông và tính diện tích của nó.

**Lời giải:**
1. **Tính độ dài ba cạnh:**
   - $AB = \sqrt{(0 - 2)^2 + (3 - 1)^2 + (1 - (-1))^2} = \sqrt{(-2)^2 + 2^2 + 2^2} = \sqrt{4 + 4 + 4} = \sqrt{12} = 2\sqrt{3}$.
   - $BC = \sqrt{(4 - 0)^2 + (5 - 3)^2 + (1 - 1)^2} = \sqrt{4^2 + 2^2 + 0^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$.
   - $CA = \sqrt{(2 - 4)^2 + (1 - 5)^2 + (-1 - 1)^2} = \sqrt{(-2)^2 + (-4)^2 + (-2)^2} = \sqrt{4 + 16 + 4} = \sqrt{24} = 2\sqrt{6}$.
   - **Chu vi tam giác $ABC$:**
     $$\mathcal{P} = AB + BC + CA = 2\sqrt{3} + 2\sqrt{5} + 2\sqrt{6}$$

2. **Nhận dạng tam giác:**
   - Ta có:
     $$AB^2 = 12, \quad BC^2 = 20, \quad CA^2 = 24$$
     Nhận thấy $AB^2 + BC^2 = 12 + 20 = 32 \ne 24$ (không vuông tại $B$).
   - Tuy nhiên kiểm tra lại tích vô hướng: $\vec{AB} = (-2; 2; 2)$, $\vec{CB} = (-4; -2; 0) \implies \vec{AB} \cdot \vec{CB} = 8 - 4 + 0 = 4$.
   - Kiểm tra toạ độ trung điểm $M$ của $BC$: $M(2; 4; 1) \implies AM = \sqrt{(2-2)^2 + (4-1)^2 + (1 - (-1))^2} = \sqrt{0 + 9 + 4} = \sqrt{13}$.
   - Tam giác $ABC$ là tam giác nhọn thường với diện tích tính theo công thức Heron:
     $$p = \sqrt{3} + \sqrt{5} + \sqrt{6} \implies S = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{35} \approx 5.92$$

---

### Dạng 4: Viết phương trình mặt cầu và xác định tâm, bán kính

**Bài toán 4:** Trong không gian $Oxyz$:
1. Viết phương trình mặt cầu $(S)$ có đường kính $AB$ với $A(1; 3; -2)$ và $B(3; -1; 4)$.
2. Xác định tâm $I$ và bán kính $R$ của mặt cầu có phương trình:
   $$x^2 + y^2 + z^2 - 4x + 6y - 2z - 2 = 0$$

**Lời giải:**
1. **Phương trình mặt cầu đường kính $AB$:**
   - Tâm $I$ của mặt cầu là trung điểm của đoạn thẳng $AB$:
     $$x_I = \frac{1 + 3}{2} = 2, \quad y_I = \frac{3 + (-1)}{2} = 1, \quad z_I = \frac{-2 + 4}{2} = 1 \implies I(2; 1; 1)$$
   - Độ dài đường kính $AB$:
     $$AB = \sqrt{(3 - 1)^2 + (-1 - 3)^2 + (4 - (-2))^2} = \sqrt{2^2 + (-4)^2 + 6^2} = \sqrt{4 + 16 + 36} = \sqrt{56} = 2\sqrt{14}$$
   - Bán kính mặt cầu: $R = \frac{AB}{2} = \sqrt{14}$.
   - Phương trình mặt cầu $(S)$:
     $$\mathbf{(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 14}$$

2. **Xác định tâm và bán kính:**
   - Phương trình: $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$.
   - Đồng nhất hệ số:
     $$-2a = -4 \implies a = 2$$
     $$-2b = 6 \implies b = -3$$
     $$-2c = -2 \implies c = 1$$
     $$d = -2$$
   - Kiểm tra điều kiện:
     $$a^2 + b^2 + c^2 - d = 2^2 + (-3)^2 + 1^2 - (-2) = 4 + 9 + 1 + 2 = 16 > 0$$
   - Vậy mặt cầu có:
     - **Tâm:** $\mathbf{I(2; -3; 1)}$.
     - **Bán kính:** $\mathbf{R = \sqrt{16} = 4}$.

---

## V. Ứng dụng thực tế: Định vị không gian trong kiểm soát không lưu

Trong ngành hàng không dân dụng, mỗi sân bay được trang bị một đài radar kiểm soát không lưu đặt tại gốc toạ độ $O(0; 0; 0)$ trên mặt đất. Mặt phẳng $(Oxy)$ đại diện cho mặt đất nằm ngang (với trục $Ox$ hướng về phía Đông, trục $Oy$ hướng về phía Bắc), còn trục $Oz$ hướng thẳng đứng lên trời chỉ độ cao tính theo kilômét ($\text{km}$).

Giả sử tại một thời điểm:
- Máy bay $A$ của Vietnam Airlines đang ở toạ độ $A(30; 40; 10)$ (cách trạm $30\text{ km}$ về phía Đông, $40\text{ km}$ về phía Bắc, ở độ cao $10\text{ km}$).
- Máy bay $B$ của Bamboo Airways đang ở toạ độ $B(54; 72; 10)$ cùng độ cao $10\text{ km}$.

1. **Khoảng cách giữa hai máy bay:**
   $$d = AB = \sqrt{(54 - 30)^2 + (72 - 40)^2 + (10 - 10)^2} = \sqrt{24^2 + 32^2 + 0} = \sqrt{576 + 1024} = \sqrt{1600} = 40\text{ km}$$
   Hai máy bay đang cách nhau $40\text{ km}$, đảm bảo khoảng cách an toàn hàng không tối thiểu ($9.3\text{ km}$ hay $5$ hải lý).

2. **Vùng cảnh báo an toàn quanh máy bay:**
   Để tránh va chạm trên không, hệ thống máy tính lập trình một vùng đệm an toàn hình cầu bán kính $R = 10\text{ km}$ quanh máy bay $A$. Phương trình không gian bảo vệ máy bay $A$ là:
   $$(x - 30)^2 + (y - 40)^2 + (z - 10)^2 \le 100$$
   Bất kỳ mục tiêu nào xâm nhập vào khối cầu này sẽ ngay lập tức kích hoạt chuông cảnh báo khẩn cấp TCAS (Traffic Collision Avoidance System) cho phi công!

---

## VI. Trắc nghiệm tự luyện củng cố kiến thức

<div class="quiz-item" data-quiz='{"question":"Câu 1: Trong không gian Oxyz, toạ độ của vectơ đơn vị k trên trục cao Oz là:","options":["A. (1; 0; 0)","B. (0; 1; 0)","C. (0; 0; 1)","D. (0; 0; 0)"],"answer":"C. (0; 0; 1)","explanation":"Theo định nghĩa, vectơ đơn vị k của trục Oz có toạ độ là (0; 0; 1)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 2: Cho điểm M(2; -3; 5). Hình chiếu vuông góc của M lên mặt phẳng (Oxy) có toạ độ là:","options":["A. (2; -3; 0)","B. (2; 0; 5)","C. (0; -3; 5)","D. (0; 0; 5)"],"answer":"A. (2; -3; 0)","explanation":"Chiếu lên mặt phẳng (Oxy) thì giữ nguyên hoành độ x và tung độ y, cho cao độ z = 0. Vậy toạ độ là (2; -3; 0)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 3: Cho hai điểm A(1; 2; 3) và B(3; 0; -1). Toạ độ trung điểm I của đoạn thẳng AB là:","options":["A. (4; 2; 2)","B. (2; 1; 1)","C. (1; -1; -2)","D. (2; 2; 4)"],"answer":"B. (2; 1; 1)","explanation":"x_I = (1 + 3)/2 = 2; y_I = (2 + 0)/2 = 1; z_I = (3 + (-1))/2 = 1. Do đó I(2; 1; 1)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 4: Cho tam giác ABC với A(1; 0; 2), B(-2; 1; 3), C(4; 2; -2). Toạ độ trọng tâm G của tam giác ABC là:","options":["A. (1; 1; 1)","B. (3; 3; 3)","C. (1; 3; 3)","D. (-1; 1; 1)"],"answer":"A. (1; 1; 1)","explanation":"x_G = (1 - 2 + 4)/3 = 1; y_G = (0 + 1 + 2)/3 = 1; z_G = (2 + 3 - 2)/3 = 1. Vậy G(1; 1; 1)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 5: Cho hai điểm A(2; -1; 4) và B(4; 1; 3). Khoảng cách giữa hai điểm A và B bằng:","options":["A. 3","B. 9","C. √5","D. √13"],"answer":"A. 3","explanation":"AB = √[(4 - 2)² + (1 - (-1))² + (3 - 4)²] = √[2² + 2² + (-1)²] = √[4 + 4 + 1] = √9 = 3."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 6: Cho vectơ u = 2i - 3j + 5k. Toạ độ của vectơ u là:","options":["A. (2; 3; 5)","B. (2; -3; 5)","C. (-2; 3; -5)","D. (2; 5; -3)"],"answer":"B. (2; -3; 5)","explanation":"u = xi + yj + zk <=> u = (x; y; z). Do đó u = 2i - 3j + 5k <=> u = (2; -3; 5)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 7: Mặt cầu (S): (x - 1)² + (y + 2)² + (z - 4)² = 25 có tâm I và bán kính R là:","options":["A. I(1; -2; 4), R = 5","B. I(-1; 2; -4), R = 5","C. I(1; -2; 4), R = 25","D. I(-1; 2; -4), R = 25"],"answer":"A. I(1; -2; 4), R = 5","explanation":"Phương trình có dạng (x - a)² + (y - b)² + (z - c)² = R². Suy ra tâm I(1; -2; 4) và bán kính R = √25 = 5."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 8: Cho mặt cầu (S): x² + y² + z² - 2x + 4y - 6z - 11 = 0. Bán kính của mặt cầu là:","options":["A. R = 5","B. R = 25","C. R = √14","D. R = 4"],"answer":"A. R = 5","explanation":"a = 1, b = -2, c = 3, d = -11. Bán kính R = √(a² + b² + c² - d) = √(1 + 4 + 9 - (-11)) = √25 = 5."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 9: Cho điểm A(1; 2; -3) và B(3; -2; 1). Toạ độ của vectơ AB là:","options":["A. (2; -4; 4)","B. (4; 0; -2)","C. (-2; 4; -4)","D. (2; 4; 4)"],"answer":"A. (2; -4; 4)","explanation":"AB = (x_B - x_A; y_B - y_A; z_B - z_A) = (3 - 1; -2 - 2; 1 - (-3)) = (2; -4; 4)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 10: Điểm M thuộc trục tung Oy thì toạ độ của nó có dạng:","options":["A. (x; 0; 0)","B. (0; y; 0)","C. (0; 0; z)","D. (x; y; 0)"],"answer":"B. (0; y; 0)","explanation":"Mọi điểm thuộc trục tung Oy đều có hoành độ x = 0 và cao độ z = 0, tức là có toạ độ (0; y; 0)."}'></div>
