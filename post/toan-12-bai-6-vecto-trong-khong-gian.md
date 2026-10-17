---
title: 'Toán 12 Bài 6: Vectơ trong không gian - Quy tắc hình hộp và Tích vô hướng'
description: 'Lý thuyết trọng tâm Bài 6 Toán 12 Kết nối tri thức: Khái niệm vectơ trong không gian, quy tắc hình hộp, ba vectơ đồng phẳng, góc giữa hai vectơ, tích vô hướng và bài toán hợp lực thực tế kèm trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Vectơ
  - Hình học không gian
  - Quy tắc hình hộp
  - Tích vô hướng
  - Kết nối tri thức
grade: 12
---

# Bài 6. Vectơ trong không gian

Nếu như ở lớp 10, chúng ta đã làm quen với vectơ trên mặt phẳng phẳng hai chiều ($2\text{D}$), thì trong thế giới thực, mọi vật thể – từ máy bay đang bay lượn trên bầu trời, chiếc drone tự hành, cho đến cấu trúc vòm thép của các sân vận động hiện đại – đều chuyển động và chịu lực trong **không gian ba chiều ($3\text{D}$)**.

Để mô tả chính xác hướng bay, lực cản của gió, hay lực căng của các sợi cáp treo cầu, các nhà toán học và kỹ sư sử dụng công cụ mạnh mẽ: **Vectơ trong không gian**. Mọi quy tắc quen thuộc ở hình học phẳng (như quy tắc 3 điểm, quy tắc hình bình hành) đều được kế thừa hoàn hảo và mở rộng lên một tầm cao mới với **Quy tắc hình hộp** và **Tính chất đồng phẳng**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: VECTƠ TRONG KHÔNG GIAN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Khái niệm & Quy tắc cộng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Định nghĩa vectơ, độ dài, hướng.<br>
• Quy tắc 3 điểm: $\vec{AB} + \vec{BC} = \vec{AC}$.<br>
• Quy tắc hình hộp: $\vec{AB} + \vec{AD} + \vec{AA'} = \vec{AC'}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Ba vectơ đồng phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Giá của ba vectơ song song với cùng một mặt phẳng.<br>
• Điều kiện: $\vec{c} = m\vec{a} + n\vec{b}$ ($\vec{a}, \vec{b}$ không cùng phương).<br>
• Phân tích duy nhất một vectơ theo ba vectơ không đồng phẳng.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tích vô hướng & Góc</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Góc giữa hai vectơ: $0^\circ \le (\vec{u}, \vec{v}) \le 180^\circ$.<br>
• $\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\vec{u}, \vec{v})$.<br>
• Hai vectơ vuông góc: $\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng thực tế</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tổng hợp lực: Vật cân bằng khi $\sum \vec{F} = \vec{0}$.<br>
• Tính lực căng dây treo trong không gian 3D.<br>
• Phân tích công cơ học: $A = \vec{F} \cdot \vec{d}$.
</p>
</div>
</div>
</div>

---

## I. Định nghĩa và các phép toán vectơ trong không gian

### 1. Định nghĩa vectơ trong không gian
- **Vectơ trong không gian** là một đoạn thẳng có hướng.
- Ký hiệu: $\vec{a}, \vec{b}$ hoặc $\vec{AB}$ (điểm $A$ là điểm đầu, điểm $B$ là điểm cuối).
- **Giá của vectơ** là đường thẳng đi qua điểm đầu và điểm cuối của vectơ đó.
- **Độ dài của vectơ** là khoảng cách giữa điểm đầu và điểm cuối, ký hiệu là $|\vec{a}|$ hoặc $|\vec{AB}| = AB$.
- **Vectơ-không** (ký hiệu $\vec{0}$) là vectơ có điểm đầu và điểm cuối trùng nhau (ví dụ: $\vec{AA} = \vec{0}$). Độ dài bằng $0$, hướng tuỳ ý.
- Hai vectơ được gọi là **cùng phương** nếu giá của chúng song song hoặc trùng nhau.
- Hai vectơ cùng phương có thể **cùng hướng** hoặc **ngược hướng**.
- Hai vectơ $\vec{a}$ và $\vec{b}$ được gọi là **bằng nhau** (ký hiệu $\vec{a} = \vec{b}$) nếu chúng có **cùng hướng** và **cùng độ dài**.

> [!NOTE]
> Cho trước một điểm $O$ và một vectơ $\vec{a}$. Luôn tồn tại **duy nhất** một điểm $A$ trong không gian sao cho $\vec{OA} = \vec{a}$.

---

### 2. Phép cộng và phép trừ vectơ trong không gian

Các phép toán vectơ trong không gian hoàn toàn tương tự như trong mặt phẳng:

#### a) Quy tắc ba điểm (Quy tắc tam giác)
Với ba điểm bất kỳ $A, B, C$ trong không gian, ta luôn có:
$$\vec{AB} + \vec{BC} = \vec{AC}$$
Quy tắc trừ:
$$\vec{AB} - \vec{AC} = \vec{CB}$$

#### b) Quy tắc hình bình hành
Nếu $ABCD$ là hình bình hành thì:
$$\vec{AB} + \vec{AD} = \vec{AC}$$

#### c) Quy tắc hình hộp (Đặc trưng cốt lõi của không gian $3\text{D}$)
Cho hình hộp $ABCD.A'B'C'D'$. Khi đó, vectơ đường chéo xuất phát từ đỉnh $A$ bằng tổng ba vectơ xuất phát từ $A$ nằm trên ba cạnh của hình hộp:
$$\mathbf{\vec{AC'} = \vec{AB} + \vec{AD} + \vec{AA'}}$$

<div style="margin: 20px auto; max-width: 560px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); text-align: center;">
<div style="font-weight: bold; color: #1e293b; margin-bottom: 8px;">MINH HỌA QUY TẮC HÌNH HỘP: AC' = AB + AD + AA'</div>
<svg viewBox="0 0 460 280" width="100%" class="lesson-diagram">
<defs>
  <marker id="arr-box-b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/></marker>
  <marker id="arr-box-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#16a34a"/></marker>
  <marker id="arr-box-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7c3aed"/></marker>
  <marker id="arr-box-r" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#dc2626"/></marker>
</defs>
<!-- Background box edges (dashed for hidden) -->
<line x1="80" y1="210" x2="220" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="80" y1="210" x2="80" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="80" y1="210" x2="160" y2="250" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
<!-- Visible base edges -->
<line x1="160" y1="250" x2="300" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="220" y1="210" x2="300" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
<!-- Top face edges -->
<line x1="80" y1="70" x2="220" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="80" y1="70" x2="160" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="160" y1="110" x2="300" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="220" y1="70" x2="300" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
<!-- Vertical edges -->
<line x1="160" y1="250" x2="160" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="220" y1="210" x2="220" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="300" y1="250" x2="300" y2="110" stroke="#94a3b8" stroke-width="1.5"/>

<!-- Three Component Vectors originating from A(160, 250) -->
<!-- AB along base right: A(160, 250) -> B(300, 250) -->
<line x1="160" y1="250" x2="295" y2="250" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-box-b)"/>
<!-- AD along base back: A(160, 250) -> D(80, 210) -->
<line x1="160" y1="250" x2="85" y2="212" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#arr-box-g)"/>
<!-- AA' vertically up: A(160, 250) -> A'(160, 110) -->
<line x1="160" y1="250" x2="160" y2="115" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arr-box-p)"/>

<!-- Diagonal Vector AC': A(160, 250) -> C'(220, 70) -->
<line x1="160" y1="250" x2="218" y2="74" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-box-r)"/>

<!-- Labels -->
<text x="155" y="270" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">A</text>
<text x="310" y="260" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2563eb">B</text>
<text x="65" y="215" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16a34a">D</text>
<text x="230" y="215" font-family="sans-serif" font-size="13" fill="#64748b">C</text>
<text x="145" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#7c3aed">A'</text>
<text x="310" y="105" font-family="sans-serif" font-size="13" fill="#64748b">B'</text>
<text x="65" y="65" font-family="sans-serif" font-size="13" fill="#64748b">D'</text>
<text x="225" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">C'</text>
<text x="240" y="240" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">AB</text>
<text x="105" y="240" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a">AD</text>
<text x="135" y="180" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7c3aed">AA'</text>
<text x="200" y="150" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">AC'</text>
</svg>
</div>

*Chứng minh nhanh quy tắc hình hộp:*
$$\vec{AB} + \vec{AD} + \vec{AA'} = (\vec{AB} + \vec{AD}) + \vec{AA'} = \vec{AC} + \vec{CC'} = \vec{AC'}$$
(Vì $ABCD$ là hình bình hành nên $\vec{AB} + \vec{AD} = \vec{AC}$, và $AA'C'C$ là hình bình hành nên $\vec{AA'} = \vec{CC'}$).

---

### 3. Phép nhân vectơ với một số

Cho số thực $k \ne 0$ và vectơ $\vec{a} \ne \vec{0}$. Tích của số $k$ với vectơ $\vec{a}$ là một vectơ, ký hiệu là $k\vec{a}$, có:
- Độ dài: $|k\vec{a}| = |k| \cdot |\vec{a}|$.
- Hướng: **Cùng hướng** với $\vec{a}$ nếu $k > 0$, **ngược hướng** với $\vec{a}$ nếu $k < 0$.
- Quy ước: $0\vec{a} = \vec{0}$ và $k\vec{0} = \vec{0}$.

#### Các hệ thức trung điểm và trọng tâm trong không gian:
- **Trung điểm đoạn thẳng:** $I$ là trung điểm của $AB$ khi và chỉ khi:
  $$\vec{IA} + \vec{IB} = \vec{0} \iff \vec{OA} + \vec{OB} = 2\vec{OI} \quad (\forall O)$$
- **Trọng tâm tam giác:** $G$ là trọng tâm $\triangle ABC$ khi và chỉ khi:
  $$\vec{GA} + \vec{GB} + \vec{GC} = \vec{0} \iff \vec{OA} + \vec{OB} + \vec{OC} = 3\vec{OG} \quad (\forall O)$$
- **Trọng tâm tứ diện:** $G$ là trọng tâm tứ diện $ABCD$ khi và chỉ khi:
  $$\mathbf{\vec{GA} + \vec{GB} + \vec{GC} + \vec{GD} = \vec{0} \iff \vec{OA} + \vec{OB} + \vec{OC} + \vec{OD} = 4\vec{OG}} \quad (\forall O)$$

---

## II. Điều kiện đồng phẳng của ba vectơ trong không gian

### 1. Định nghĩa ba vectơ đồng phẳng
Trong không gian, ba vectơ $\vec{a}, \vec{b}, \vec{c}$ được gọi là **đồng phẳng** nếu các giá của chúng cùng song song với một mặt phẳng.

> [!WARNING]
> Lưu ý: Ba vectơ có giá cùng đi qua một điểm luôn luôn đồng phẳng nếu chúng cùng nằm trên một mặt phẳng. Nếu các giá chéo nhau nhưng đều song song với cùng một mặt phẳng $(\alpha)$ thì ba vectơ đó vẫn đồng phẳng!

### 2. Định lý về điều kiện đồng phẳng
Cho hai vectơ không cùng phương $\vec{a}$ và $\vec{b}$. Khi đó, ba vectơ $\vec{a}, \vec{b}, \vec{c}$ đồng phẳng khi và chỉ khi tồn tại duy nhất cặp số thực $(m; n)$ sao cho:
$$\mathbf{\vec{c} = m\vec{a} + n\vec{b}}$$

### 3. Phân tích một vectơ theo ba vectơ không đồng phẳng
Nếu ba vectơ $\vec{a}, \vec{b}, \vec{c}$ **không đồng phẳng**, thì với mọi vectơ $\vec{x}$ bất kỳ trong không gian, luôn tồn tại **duy nhất** bộ ba số thực $(m; n; p)$ sao cho:
$$\mathbf{\vec{x} = m\vec{a} + n\vec{b} + p\vec{c}}$$
Đây chính là cơ sở toán học để xây dựng **Hệ toạ độ không gian $Oxyz$** ở bài sau!

---

## III. Tích vô hướng của hai vectơ trong không gian

### 1. Góc giữa hai vectơ trong không gian
Cho hai vectơ $\vec{u}$ và $\vec{v}$ khác $\vec{0}$. Từ một điểm $A$ bất kỳ, dựng $\vec{AB} = \vec{u}$ và $\vec{AC} = \vec{v}$. Khi đó:
$$\mathbf{(\vec{u}, \vec{v}) = \widehat{BAC}} \quad (0^\circ \le (\vec{u}, \vec{v}) \le 180^\circ)$$
- Nếu $(\vec{u}, \vec{v}) = 90^\circ$, ta nói $\vec{u}$ và $\vec{v}$ **vuông góc** với nhau, ký hiệu $\vec{u} \perp \vec{v}$.
- Nếu $\vec{u}$ cùng hướng với $\vec{v}$ thì $(\vec{u}, \vec{v}) = 0^\circ$.
- Nếu $\vec{u}$ ngược hướng với $\vec{v}$ thì $(\vec{u}, \vec{v}) = 180^\circ$.

### 2. Tích vô hướng
Tích vô hướng của hai vectơ $\vec{u}$ và $\vec{v}$ trong không gian là một **số thực**, được xác định bởi công thức:
$$\mathbf{\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\vec{u}, \vec{v})}$$
- **Bình phương vô hướng:** $\vec{u}^2 = |\vec{u}|^2 \implies |\vec{u}| = \sqrt{\vec{u}^2}$.
- **Tính góc:**
  $$\cos(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|}$$
- **Điều kiện vuông góc:**
  $$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$$

---

## Công cụ trực quan: Mô phỏng góc giữa hai vectơ và Tích vô hướng

Dưới đây là mô phỏng góc $\theta = (\vec{u}, \vec{v})$ và tích vô hướng $\vec{u} \cdot \vec{v}$.
Hãy kéo thanh trượt góc $\theta$ hoặc điều chỉnh độ dài $|\vec{u}|, |\vec{v}|$ để quan sát giá trị đại số của tích vô hướng:

<div id="dotproduct-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">KHÁM PHÁ GÓC VÀ TÍCH VÔ HƯỚNG CỦA HAI VECTƠ</h4>
<div style="max-width: 520px; margin: 0 auto 16px auto; background: #f8fafc; padding: 14px 18px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: left;">
  <div style="margin-bottom: 10px;">
    <label style="font-weight: 600; color: #1e293b; display: flex; justify-content: space-between;">
      <span>Góc giữa 2 vectơ: <strong id="val-angle-deg" style="color: #2563eb; font-size: 1.15em;">60°</strong></span>
      <span id="val-cos" style="color: #64748b;">cos(θ) = 0.500</span>
    </label>
    <input type="range" id="range-angle" min="0" max="180" step="1" value="60" style="width: 100%;">
  </div>
  <div style="display: flex; gap: 16px;">
    <div style="flex: 1;">
      <label style="font-size: 0.9em; font-weight: 600; color: #1e293b;">Độ dài |u|: <strong id="val-len-u" style="color: #16a34a;">4.0</strong></label>
      <input type="range" id="range-u" min="1" max="6" step="0.5" value="4" style="width: 100%;">
    </div>
    <div style="flex: 1;">
      <label style="font-size: 0.9em; font-weight: 600; color: #1e293b;">Độ dài |v|: <strong id="val-len-v" style="color: #7c3aed;">5.0</strong></label>
      <input type="range" id="range-v" min="1" max="6" step="0.5" value="5" style="width: 100%;">
    </div>
  </div>
</div>

<div style="display: flex; justify-content: center; overflow-x: auto;">
<svg id="dot-svg" data-interactive-done="true" viewBox="0 0 480 260" width="100%" style="max-width: 480px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1; user-select: none;">
<defs>
  <marker id="arr-dp-u" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#16a34a"/></marker>
  <marker id="arr-dp-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7c3aed"/></marker>
</defs>
<!-- Common Origin A at (200, 180) -->
<circle cx="200" cy="180" r="4" fill="#1e293b"/>
<text x="185" y="195" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">A</text>

<!-- Vector u (fixed along horizontal right) -->
<line id="vec-u-line" x1="200" y1="180" x2="340" y2="180" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-dp-u)"/>
<text id="vec-u-label" x="350" y="185" font-family="sans-serif" font-size="13" font-weight="bold" fill="#16a34a">u</text>

<!-- Vector v (rotates by angle theta) -->
<line id="vec-v-line" x1="200" y1="180" x2="287" y2="29" stroke="#7c3aed" stroke-width="3" marker-end="url(#arr-dp-v)"/>
<text id="vec-v-label" x="295" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#7c3aed">v</text>

<!-- Angle Arc -->
<path id="angle-arc" d="M 240 180 A 40 40 0 0 0 220 145" fill="none" stroke="#2563eb" stroke-width="2"/>
<text id="angle-text" x="235" y="160" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">60°</text>

<!-- Dashed baseline -->
<line x1="60" y1="180" x2="420" y2="180" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
</svg>
</div>

<div id="dot-result-box" style="margin-top: 14px; padding: 14px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left; line-height: 1.8;">
<div>• Tích vô hướng: <strong id="val-dot-prod" style="color: #2563eb; font-size: 1.25em;">u · v = 10.00</strong></div>
<div>• Công thức chi tiết: <span id="val-dot-formula">4.0 × 5.0 × cos(60°) = 20 × 0.500 = 10.00</span></div>
<div>• Tính chất góc: <strong id="val-dot-nature" style="color: #16a34a;">Góc nhọn (u · v &gt; 0)</strong></div>
</div>
</div>

<script>
const __initApp = function() {
  const rAngle = document.getElementById('range-angle');
  const rU = document.getElementById('range-u');
  const rV = document.getElementById('range-v');

  const valAngle = document.getElementById('val-angle-deg');
  const valCos = document.getElementById('val-cos');
  const valLenU = document.getElementById('val-len-u');
  const valLenV = document.getElementById('val-len-v');
  const valDot = document.getElementById('val-dot-prod');
  const valFormula = document.getElementById('val-dot-formula');
  const valNature = document.getElementById('val-dot-nature');

  const lineU = document.getElementById('vec-u-line');
  const lineV = document.getElementById('vec-v-line');
  const lblU = document.getElementById('vec-u-label');
  const lblV = document.getElementById('vec-v-label');
  const arc = document.getElementById('angle-arc');
  const txtAngle = document.getElementById('angle-text');

  if (!rAngle || !rU || !rV) return;

  const ax = 200, ay = 180;
  const pxPerUnit = 32;

  function update() {
    const deg = parseFloat(rAngle.value);
    const lu = parseFloat(rU.value);
    const lv = parseFloat(rV.value);

    valAngle.textContent = deg + '°';
    valLenU.textContent = lu.toFixed(1);
    valLenV.textContent = lv.toFixed(1);

    const rad = deg * Math.PI / 180;
    const cosVal = Math.cos(rad);
    valCos.textContent = 'cos(θ) = ' + cosVal.toFixed(3);

    const dot = lu * lv * cosVal;
    valDot.textContent = 'u · v = ' + dot.toFixed(2);
    valFormula.textContent = `${lu.toFixed(1)} × ${lv.toFixed(1)} × ${cosVal.toFixed(3)} = ${dot.toFixed(2)}`;

    if (Math.abs(dot) < 0.05) {
      valNature.innerHTML = '<strong style="color: #dc2626;">Hai vectơ VUÔNG GÓC (u ⊥ v, u · v = 0)</strong>';
    } else if (dot > 0) {
      valNature.innerHTML = '<strong style="color: #16a34a;">Góc NHỌN (0° ≤ θ < 90°, tích vô hướng DƯƠNG)</strong>';
    } else {
      valNature.innerHTML = '<strong style="color: #b45309;">Góc TÙ (90° < θ ≤ 180°, tích vô hướng ÂM)</strong>';
    }

    // Coordinates for u (along horizontal right)
    const ux = ax + lu * pxPerUnit;
    const uy = ay;
    lineU.setAttribute('x2', ux);
    lblU.setAttribute('x', ux + 10);

    // Coordinates for v (rotated counter-clockwise: in SVG y is down, so subtract sin)
    const vx = ax + lv * pxPerUnit * Math.cos(rad);
    const vy = ay - lv * pxPerUnit * Math.sin(rad);
    lineV.setAttribute('x2', vx);
    lineV.setAttribute('y2', vy);
    lblV.setAttribute('x', vx + (Math.cos(rad) < 0 ? -20 : 10));
    lblV.setAttribute('y', vy + (Math.sin(rad) > 0 ? -10 : 15));

    // Arc
    const arcR = 36;
    const arcX = ax + arcR * Math.cos(rad);
    const arcY = ay - arcR * Math.sin(rad);
    const largeArc = deg > 180 ? 1 : 0;
    arc.setAttribute('d', `M ${ax + arcR} ${ay} A ${arcR} ${arcR} 0 ${largeArc} 0 ${arcX} ${arcY}`);

    const midRad = rad / 2;
    txtAngle.textContent = deg + '°';
    txtAngle.setAttribute('x', ax + (arcR + 16) * Math.cos(midRad));
    txtAngle.setAttribute('y', ay - (arcR + 16) * Math.sin(midRad));
  }

  rAngle.addEventListener('input', update);
  rU.addEventListener('input', update);
  rV.addEventListener('input', update);
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

### Dạng 1: Rút gọn đẳng thức vectơ và vận dụng quy tắc hình hộp

**Bài toán 1:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Gọi $M$ là trung điểm của $B'C'$, $N$ là trung điểm của $DD'$. Chứng minh rằng:
$$\vec{MN} = \frac{1}{2}\vec{BA} + \frac{1}{2}\vec{DA} + \frac{1}{2}\vec{AA'}$$

**Lời giải:**
Ta chèn điểm $C'$ và $D'$ vào vectơ $\vec{MN}$:
$$\vec{MN} = \vec{MC'} + \vec{C'D'} + \vec{D'N}$$
- Do $M$ là trung điểm của $B'C'$ nên $\vec{MC'} = \frac{1}{2}\vec{B'C'} = \frac{1}{2}\vec{AD} = -\frac{1}{2}\vec{DA}$.
- Ta có $\vec{C'D'} = \vec{BA} = -\vec{AB}$.
- Do $N$ là trung điểm của $DD'$ nên $\vec{D'N} = \frac{1}{2}\vec{D'D} = -\frac{1}{2}\vec{DD'} = -\frac{1}{2}\vec{AA'}$.

Suy ra:
$$\vec{MN} = \frac{1}{2}\vec{AD} + \vec{BA} - \frac{1}{2}\vec{AA'}$$
Đẳng thức được phân tích thành công biểu diễn $\vec{MN}$ theo ba vectơ xuất phát từ đỉnh hình hộp.

---

### Dạng 2: Chứng minh ba vectơ đồng phẳng

**Bài toán 2:** Cho tứ diện $ABCD$. Lấy các điểm $M, N$ lần lượt trên các cạnh $AB$ và $CD$ sao cho $\vec{AM} = \frac{1}{3}\vec{AB}$ và $\vec{DN} = \frac{1}{3}\vec{DC}$. Chứng minh rằng ba vectơ $\vec{MN}, \vec{AC}, \vec{BD}$ đồng phẳng.

**Lời giải:**
Ta phân tích $\vec{MN}$ theo hai con đường:
- Đường 1: $\vec{MN} = \vec{MA} + \vec{AC} + \vec{CN} = -\frac{1}{3}\vec{AB} + \vec{AC} - \frac{2}{3}\vec{CD}$.
- Đường 2: $\vec{MN} = \vec{MB} + \vec{BD} + \vec{DN} = \frac{2}{3}\vec{AB} + \vec{BD} + \frac{1}{3}\vec{DC}$.

Nhân (Đường 1) với $2$ rồi cộng với (Đường 2):
$$2\vec{MN} + \vec{MN} = \left(-\frac{2}{3}\vec{AB} + \frac{2}{3}\vec{AB}\right) + 2\vec{AC} + \vec{BD} + \left(-\frac{4}{3}\vec{CD} + \frac{1}{3}\vec{DC}\right)$$
$$3\vec{MN} = 2\vec{AC} + \vec{BD} + \vec{0} \implies \mathbf{\vec{MN} = \frac{2}{3}\vec{AC} + \frac{1}{3}\vec{BD}}$$
Vì $\vec{MN}$ biểu diễn được thành tổ hợp tuyến tính của $\vec{AC}$ và $\vec{BD}$, nên theo định lý về điều kiện đồng phẳng, ba vectơ $\vec{MN}, \vec{AC}, \vec{BD}$ **đồng phẳng**.

---

### Dạng 3: Tính góc và tích vô hướng của hai vectơ trong không gian

**Bài toán 3:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $a$.
1. Tính tích vô hướng $\vec{AB} \cdot \vec{A'C'}$.
2. Tính góc giữa hai vectơ $\vec{AC'}$ và $\vec{BD}$.

**Lời giải:**
1. **Tính $\vec{AB} \cdot \vec{A'C'}$:**
   - Vì $A'B'C'D'$ là hình vuông cạnh $a$ và $\vec{A'C'} = \vec{AC}$, ta có:
     $$\vec{AB} \cdot \vec{A'C'} = \vec{AB} \cdot \vec{AC} = |\vec{AB}| \cdot |\vec{AC}| \cdot \cos(\widehat{BAC})$$
   - Ta có $|\vec{AB}| = a$, $|\vec{AC}| = a\sqrt{2}$, và tam giác $ABC$ vuông cân tại $B$ nên $\widehat{BAC} = 45^\circ$.
   - Suy ra:
     $$\vec{AB} \cdot \vec{A'C'} = a \cdot a\sqrt{2} \cdot \cos(45^\circ) = a \cdot a\sqrt{2} \cdot \frac{\sqrt{2}}{2} = a^2$$

2. **Tính góc giữa $\vec{AC'}$ và $\vec{BD}$:**
   - Theo quy tắc hình hộp: $\vec{AC'} = \vec{AB} + \vec{AD} + \vec{AA'}$.
   - Ta có $\vec{BD} = \vec{AD} - \vec{AB}$.
   - Nhân vô hướng:
     $$\vec{AC'} \cdot \vec{BD} = (\vec{AB} + \vec{AD} + \vec{AA'}) \cdot (\vec{AD} - \vec{AB})$$
     $$= (\vec{AD} + \vec{AB}) \cdot (\vec{AD} - \vec{AB}) + \vec{AA'} \cdot \vec{BD}$$
     $$= (\vec{AD}^2 - \vec{AB}^2) + \vec{AA'} \cdot \vec{BD}$$
   - Vì $ABCD$ là hình vuông nên $AD = AB = a \implies \vec{AD}^2 - \vec{AB}^2 = a^2 - a^2 = 0$.
   - Vì $AA' \perp (ABCD)$ nên $AA' \perp BD \implies \vec{AA'} \cdot \vec{BD} = 0$.
   - Do đó:
     $$\vec{AC'} \cdot \vec{BD} = 0 + 0 = 0 \implies \mathbf{(\vec{AC'}, \vec{BD}) = 90^\circ}$$
   - Hai vectơ $\vec{AC'}$ và $\vec{BD}$ vuông góc với nhau!

---

## V. Ứng dụng thực tế: Cân bằng lực của chùm đèn ba dây cáp

Trong kỹ thuật xây dựng và nội thất, một chiếc đèn chùm nặng khối lượng $m = 12\text{ kg}$ (chịu trọng lực $\vec{P}$ có độ lớn $P = mg \approx 12 \times 9.8 = 117.6\text{ N}$) được treo cân bằng dưới trần nhà bằng ba sợi dây cáp $OA, OB, OC$ có chiều dài bằng nhau và cùng tạo với phương thẳng đứng một góc $\alpha = 30^\circ$. Ba điểm treo $A, B, C$ tạo thành tam giác đều trên trần nhà.

Theo định luật I Newton, điều kiện cân bằng của chiếc đèn là tổng hợp lực tác dụng lên điểm $O$ bằng vectơ-không:
$$\vec{T}_A + \vec{T}_B + \vec{T}_C + \vec{P} = \vec{0} \iff \vec{T}_A + \vec{T}_B + \vec{T}_C = -\vec{P}$$

Do tính đối xứng của hệ thống ba dây cáp:
- Độ lớn lực căng trên ba sợi dây bằng nhau: $T_A = T_B = T_C = T$.
- Thành phần nằm ngang của ba lực căng triệt tiêu nhau hoàn toàn: $\sum \vec{T}_{\text{ngang}} = \vec{0}$.
- Tổng thành phần hướng thẳng đứng của ba lực cân bằng với trọng lực $\vec{P}$:
  $$3 \cdot T \cdot \cos(30^\circ) = P \implies T = \frac{P}{3 \cos(30^\circ)} = \frac{117.6}{3 \cdot \frac{\sqrt{3}}{2}} \approx 45.26\text{ N}$$
Mỗi sợi dây chịu lực căng xấp xỉ $45.3\text{ N}$, cho phép kỹ sư lựa chọn đúng loại cáp có tải trọng an toàn tương ứng!

---

## VI. Trắc nghiệm tự luyện củng cố kiến thức

<div class="quiz-item" data-quiz='{"question":"Câu 1: Cho hình hộp chữ nhật ABCD.A\u0027B\u0027C\u0027D\u0027. Vectơ nào sau đây bằng vectơ AB + AD + AA\u0027?","options":["A. Vectơ AC","B. Vectơ AC\u0027","C. Vectơ CA\u0027","D. Vectơ BD\u0027"],"answer":"B. Vectơ AC\u0027","explanation":"Theo quy tắc hình hộp: AB + AD + AA\u0027 = (AB + AD) + AA\u0027 = AC + CC\u0027 = AC\u0027."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 2: Cho tứ diện ABCD. Gọi G là trọng tâm tứ diện ABCD. Đẳng thức nào sau đây đúng với mọi điểm O?","options":["A. OA + OB + OC + OD = 4 OG","B. OA + OB + OC + OD = 2 OG","C. OA + OB + OC + OD = 3 OG","D. OA + OB + OC + OD = OG"],"answer":"A. OA + OB + OC + OD = 4 OG","explanation":"Trọng tâm tứ diện G thỏa mãn GA + GB + GC + GD = 0. Chèn điểm O ta được: (OA - OG) + (OB - OG) + (OC - OG) + (OD - OG) = 0 <=> OA + OB + OC + OD = 4 OG."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 3: Cho hai vectơ u và v khác vectơ-không. Khẳng định nào sau đây là điều kiện cần và đủ để u và v vuông góc với nhau?","options":["A. u · v = 1","B. u · v = 0","C. |u| = |v|","D. u + v = 0"],"answer":"B. u · v = 0","explanation":"u · v = |u| · |v| · cos(u, v). Hai vectơ vuông góc khi và chỉ khi góc giữa chúng bằng 90°, tương đương cos(90°) = 0 <=> u · v = 0."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 4: Cho hình lập phương ABCD.A\u0027B\u0027C\u0027D\u0027 cạnh a. Tích vô hướng AB · AD bằng bao nhiêu?","options":["A. a²","B. a²√2","C. 0","D. -a²"],"answer":"C. 0","explanation":"Vì đáy ABCD là hình vuông nên AB vuông góc với AD, do đó AB · AD = 0."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 5: Cho hình lập phương ABCD.A\u0027B\u0027C\u0027D\u0027 cạnh a. Tính tích vô hướng AB · AC.","options":["A. a²","B. a²√2","C. 0","D. 2a²"],"answer":"A. a²","explanation":"AB = a, AC = a√2, góc BAC = 45°. Do đó AB · AC = a · a√2 · cos(45°) = a · a√2 · (√2 / 2) = a²."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 6: Ba vectơ a, b, c được gọi là đồng phẳng khi và chỉ khi:","options":["A. Chúng có cùng độ dài","B. Giá của chúng cùng song song với một mặt phẳng","C. Chúng đôi một vuông góc","D. Điểm đầu của chúng trùng nhau"],"answer":"B. Giá của chúng cùng song song với một mặt phẳng","explanation":"Theo định nghĩa, ba vectơ đồng phẳng khi các giá của chúng cùng song song hoặc nằm trên cùng một mặt phẳng."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 7: Nếu hai vectơ a và b không cùng phương, điều kiện cần và đủ để vectơ c đồng phẳng với a và b là:","options":["A. Tồn tại cặp số thực (m; n) duy nhất sao cho c = m a + n b","B. a · c = b · c","C. c vuông góc với cả a và b","D. |c| = |a| + |b|"],"answer":"A. Tồn tại cặp số thực (m; n) duy nhất sao cho c = m a + n b","explanation":"Theo định lý đồng phẳng: c đồng phẳng với a, b (không cùng phương) khi và chỉ khi c phân tích được duy nhất dưới dạng c = m a + n b."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 8: Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và CD. Biểu diễn vectơ MN theo AC và BD:","options":["A. MN = 1/2 (AC + BD)","B. MN = 1/2 (AC - BD)","C. MN = AC + BD","D. MN = 1/2 (AD + BC)"],"answer":"A. MN = 1/2 (AC + BD)","explanation":"MN = MA + AC + CN = -1/2 AB + AC + 1/2 CD. Lại có MN = MB + BD + DN = 1/2 AB + BD - 1/2 CD. Cộng vế với vế: 2 MN = AC + BD <=> MN = 1/2 (AC + BD)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 9: Cho hình chóp S.ABCD có đáy là hình bình hành tâm O. Đẳng thức nào sau đây đúng?","options":["A. SA + SC = SB + SD = 2 SO","B. SA + SB = SC + SD","C. SA + SC = SB - SD","D. SA + SB + SC + SD = SO"],"answer":"A. SA + SC = SB + SD = 2 SO","explanation":"Vì O là trung điểm của AC và BD nên SA + SC = 2 SO và SB + SD = 2 SO. Suy ra SA + SC = SB + SD = 2 SO."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 10: Cho hình lập phương ABCD.A\u0027B\u0027C\u0027D\u0027. Góc giữa hai vectơ AC và A\u0027C\u0027 bằng:","options":["A. 0°","B. 45°","C. 90°","D. 180°"],"answer":"A. 0°","explanation":"Vì ACC\u0027A\u0027 là hình chữ nhật nên AC song song và cùng hướng với A\u0027C\u0027, do đó AC = A\u0027C\u0027. Góc giữa hai vectơ bằng 0°."}'></div>
