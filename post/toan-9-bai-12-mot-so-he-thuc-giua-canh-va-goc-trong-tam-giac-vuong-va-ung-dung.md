---
title: 'Toán 9 Bài 12: Một số hệ thức giữa cạnh và góc trong tam giác vuông và ứng dụng - Giải tam giác vuông & Đo đạc thực tế'
description: 'Lý thuyết toàn diện và bài tập Bài 12 Toán 9: Hệ thức giữa cạnh góc vuông với cạnh huyền và góc nhọn, quy trình 4 trường hợp giải tam giác vuông, bài toán đo chiều cao khoảng cách thực tế, widget giải tam giác vuông và 10 quiz có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Hệ thức lượng
  - Giải tam giác vuông
  - Đo đạc thực tế
  - Góc nâng góc hạ
  - Kết nối tri thức
grade: 9
---

# Bài 12. Một số hệ thức giữa cạnh và góc trong tam giác vuông và ứng dụng

Ở bài trước, các em đã biết rằng tỉ số lượng giác của một góc nhọn ($\sin, \cos, \tan, \cot$) thiết lập một cây cầu nối toán học chặt chẽ giữa số đo góc và tỉ số độ dài các cạnh trong tam giác vuông. 

Nếu như trong tam giác vuông, định lý Pythagoras $a^2 = b^2 + c^2$ chỉ liên kết **ba cạnh** với nhau, thì trong bài học này, chúng ta sẽ mở khóa một bộ công cụ mạnh mẽ hơn gấp bội: **Các hệ thức liên kết trực tiếp giữa CẠNH và GÓC**.

Nhờ các hệ thức này, chỉ cần biết **$2$ yếu tố** của một tam giác vuông (trong đó có ít nhất $1$ cạnh), chúng ta có thể tính toán chính xác tất cả các cạnh và góc còn lại của tam giác đó — một quá trình được gọi là **"Giải tam giác vuông"**. Đây chính là nền tảng của toàn bộ ngành trắc địa, dẫn đường hàng không, hải quân và định vị vệ tinh toàn cầu!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC: CẠNH VÀ GÓC TRONG TAM GIÁC VUÔNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Cạnh góc vuông & Cạnh huyền</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>$b = a \cdot \sin B = a \cdot \cos C$</strong><br>• <strong>$c = a \cdot \sin C = a \cdot \cos B$</strong><br>• Cạnh góc vuông = Cạnh huyền &times; Sin góc đối (hoặc Cos góc kề).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Cạnh góc vuông & Cạnh góc vuông</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>$b = c \cdot \tan B = c \cdot \cot C$</strong><br>• <strong>$c = b \cdot \tan C = b \cdot \cot B$</strong><br>• Cạnh góc vuông = Cạnh kia &times; Tang góc đối (hoặc Côtang góc kề).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Giải tam giác vuông</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tìm đủ 3 cạnh và 2 góc nhọn.<br>• Biết 1 cạnh & 1 góc nhọn.<br>• Biết 2 cạnh (huyền-vuông hoặc 2 góc vuông).<br>• Dùng Pythagoras và tỉ số lượng giác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Đo đạc thực tế gián tiếp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Góc nâng:</strong> Nhìn ngước lên đỉnh vật thể.<br>• <strong>Góc hạ:</strong> Nhìn cúi xuống chân vật thể.<br>• Đo chiều cao cây/tháp: $h = d \cdot \tan \alpha + h_0$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Hệ thức:** Trong tam giác $ABC$ vuông tại $A$ có cạnh huyền $a$, cạnh góc vuông $b$ được tính theo cạnh huyền $a$ và góc đối $B$ như thế nào?
2. **Hệ thức tang:** Cạnh góc vuông $b$ được tính theo cạnh góc vuông $c$ và góc đối $B$ như thế nào?
3. **Tính nhanh:** Tam giác vuông có cạnh huyền bằng $10\text{ cm}$ và một góc nhọn bằng $30^\circ$. Cạnh góc vuông đối diện góc $30^\circ$ dài bao nhiêu?
4. **Hai góc nhọn:** Trong tam giác vuông, nếu biết một góc nhọn bằng $42^\circ$ thì góc nhọn còn lại bằng bao nhiêu độ?
5. **Đo đạc:** Đứng cách chân một cột cờ $15\text{ m}$, nhìn lên đỉnh cột cờ dưới góc nâng $45^\circ$. Cột cờ cao bao nhiêu mét (bỏ qua chiều cao người đo)?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $b = a \cdot \sin B$.
> 2. $b = c \cdot \tan B$.
> 3. $b = 10 \cdot \sin 30^\circ = 10 \cdot \frac{1}{2} = 5\text{ cm}$.
> 4. $90^\circ - 42^\circ = 48^\circ$.
> 5. $h = 15 \cdot \tan 45^\circ = 15 \cdot 1 = 15\text{ m}$.

---

## I. Lý thuyết Trọng tâm

### 1. Các Hệ thức giữa Cạnh và Góc trong Tam giác vuông

Cho tam giác $ABC$ vuông tại $A$, có:
- $BC = a$ (cạnh huyền).
- $AC = b$ và $AB = c$ (hai cạnh góc vuông).
- $\widehat{B}, \widehat{C}$ là hai góc nhọn.

> [!IMPORTANT]
> **Định lý:**
> Trong một tam giác vuông, mỗi cạnh góc vuông bằng:
> 1. Cạnh huyền nhân với sin của góc đối, hoặc nhân với côsin của góc kề:
>    $$b = a \cdot \sin B = a \cdot \cos C$$
>    $$c = a \cdot \sin C = a \cdot \cos B$$
> 2. Cạnh góc vuông kia nhân với tang của góc đối, hoặc nhân với côtang của góc kề:
>    $$b = c \cdot \tan B = c \cdot \cot C$$
>    $$c = b \cdot \tan C = b \cdot \cot B$$

---

### 2. Thuật ngữ & Kỹ thuật "Giải Tam Giác Vuông"

> [!NOTE]
> **Định nghĩa:**
> **Giải tam giác vuông** là tìm tất cả các cạnh và các góc chưa biết của một tam giác vuông khi đã biết trước hai yếu tố (trong đó phải có ít nhất một cạnh).

#### Bốn trường hợp giải tam giác vuông cơ bản:

| Trường hợp | Yếu tố đã biết | Cách tính góc còn lại | Cách tính các cạnh còn lại |
| :--- | :--- | :--- | :--- |
| **1. Cạnh huyền & 1 góc nhọn** | Cạnh huyền $a$, góc $\widehat{B}$ | $\widehat{C} = 90^\circ - \widehat{B}$ | $b = a \cdot \sin B$ <br> $c = a \cdot \cos B$ |
| **2. Cạnh góc vuông & 1 góc nhọn** | Cạnh $b$, góc $\widehat{B}$ | $\widehat{C} = 90^\circ - \widehat{B}$ | $c = b \cdot \cot B$ <br> $a = \frac{b}{\sin B}$ |
| **3. Cạnh huyền & 1 cạnh góc vuông**| Cạnh $a$, cạnh $b$ | $\sin B = \frac{b}{a} \implies \widehat{B}$ <br> $\widehat{C} = 90^\circ - \widehat{B}$ | $c = \sqrt{a^2 - b^2}$ |
| **4. Hai cạnh góc vuông** | Cạnh $b$, cạnh $c$ | $\tan B = \frac{b}{c} \implies \widehat{B}$ <br> $\widehat{C} = 90^\circ - \widehat{B}$ | $a = \sqrt{b^2 + c^2}$ |

---

### 3. Khái niệm Góc Nâng và Góc Hạ trong Đo đạc Thực tế

Khi quan sát một mục tiêu từ vị trí của mắt người quan sát:
- Kẻ một đường nằm ngang song song với mặt đất (**Đường ngắm ngang**).
- Đường nối từ mắt đến mục tiêu gọi là **Đường ngắm nghiêng**.
- **Góc nâng (Angle of Elevation):** Là góc tạo bởi đường ngắm nghiêng và đường ngắm ngang khi mắt nhìn **hướng lên trên** (ví dụ nhìn lên đỉnh tòa tháp, đỉnh núi, máy bay).
- **Góc hạ (Angle of Depression):** Là góc tạo bởi đường ngắm nghiêng và đường ngắm ngang khi mắt nhìn **hướng xuống dưới** (ví dụ từ ngọn hải đăng nhìn xuống con thuyền trên biển).

---

## II. Widget Tương tác: Giải Tam Giác Vuông & Đo Đạc Trực Quan

Nhập số đo các cạnh và góc của tam giác vuông để máy tính tự động giải toàn bộ các yếu tố còn lại kèm hình vẽ minh họa động:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">CÔNG CỤ GIẢI TAM GIÁC VUÔNG TỰ ĐỘNG</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
    <label><strong>Cạnh huyền a:</strong> <input type="number" id="sol-a" value="12" min="1" max="100" style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid #cbd5e1; font-weight: bold; text-align: center;"></label>
    <label><strong>Góc B (&deg;):</strong> <input type="number" id="sol-B" value="30" min="5" max="85" style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid #cbd5e1; font-weight: bold; text-align: center;"></label>
    <button id="btn-calc-triangle" style="background: #2563eb; color: white; border: none; padding: 6px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Giải tam giác</button>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; align-items: center;">
    <div style="display: flex; justify-content: center;">
      <svg id="solve-svg" width="280" height="180" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
        <!-- SVG dynamic triangle -->
      </svg>
    </div>
    
    <div id="solve-details" style="background: #eff6ff; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 1.05em; line-height: 1.8; border-left: 4px solid #2563eb;">
      <!-- Solution steps -->
    </div>
  </div>
</div>

<script>
(function() {
  function solveRightTriangle() {
    let a = parseFloat(document.getElementById('sol-a').value) || 0;
    let B_deg = parseFloat(document.getElementById('sol-B').value) || 0;

    const details = document.getElementById('solve-details');
    const svg = document.getElementById('solve-svg');

    if (a <= 0 || B_deg <= 0 || B_deg >= 90) {
      details.innerHTML = `<span style="color: #dc2626;">Lỗi: Cạnh huyền a > 0 và góc B phải nằm trong khoảng (0&deg;; 90&deg;)!</span>`;
      svg.innerHTML = '';
      return;
    }

    let C_deg = 90 - B_deg;
    let radB = (B_deg * Math.PI) / 180;
    let b = a * Math.sin(radB);
    let c = a * Math.cos(radB);

    details.innerHTML = `
      <strong style="color: #1e40af;">KẾT QUẢ GIẢI TAM GIÁC VUÔNG ABC (A = 90&deg;):</strong><br>
      • <strong>Góc C:</strong> 90&deg; - ${B_deg}&deg; = <span style="color: #b91c1c; font-weight: bold;">${C_deg}&deg;</span><br>
      • <strong>Cạnh AC (b):</strong> a &times; sin B = ${a} &times; sin(${B_deg}&deg;) = <span style="color: #047857; font-weight: bold;">${b.toFixed(3)}</span><br>
      • <strong>Cạnh AB (c):</strong> a &times; cos B = ${a} &times; cos(${B_deg}&deg;) = <span style="color: #2563eb; font-weight: bold;">${c.toFixed(3)}</span><br>
      • <strong>Diện tích:</strong> S = &frac12; &times; b &times; c = <span style="color: #7c3aed; font-weight: bold;">${(0.5 * b * c).toFixed(3)}</span>
    `;

    // Draw SVG
    const width = 280;
    const height = 180;
    const scale = 130 / a;

    let bX = 30;
    let bY = 150;
    let aX = bX + c * scale;
    let aY = bY;
    let cX = aX;
    let cY = bY - b * scale;

    let svgHtml = `
      <polygon points="${bX},${bY} ${aX},${aY} ${cX},${cY}" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
      <path d="M ${aX - 10} ${aY} L ${aX - 10} ${aY - 10} L ${aX} ${aY - 10}" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="${bX - 15}" y="${bY + 5}" font-size="12" font-weight="bold" fill="#1e293b">B</text>
      <text x="${aX + 5}" y="${aY + 12}" font-size="12" font-weight="bold" fill="#1e293b">A</text>
      <text x="${cX + 5}" y="${cY - 5}" font-size="12" font-weight="bold" fill="#1e293b">C</text>
      
      <text x="${(bX + aX)/2}" y="${bY + 15}" font-size="10" fill="#475569" text-anchor="middle">c = ${c.toFixed(1)}</text>
      <text x="${aX + 8}" y="${(aY + cY)/2}" font-size="10" fill="#047857">b = ${b.toFixed(1)}</text>
      <text x="${(bX + cX)/2 - 12}" y="${(bY + cY)/2 - 6}" font-size="10" fill="#1d4ed8">a = ${a}</text>
    `;

    svg.innerHTML = svgHtml;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-calc-triangle');
    if (btn) btn.addEventListener('click', solveRightTriangle);
    solveRightTriangle();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Tính độ dài các cạnh của tam giác vuông bằng hệ thức cạnh và góc

**Phương pháp giải:**
- Lựa chọn hệ thức phù hợp tùy theo yếu tố đã biết:
  - Nếu biết cạnh huyền: Dùng $\sin$ (góc đối) hoặc $\cos$ (góc kề).
  - Nếu biết cạnh góc vuông: Dùng $\tan$ (góc đối) hoặc $\cot$ (góc kề).

---

#### Bài toán 1:
Cho tam giác $ABC$ vuông tại $A$, biết $BC = 12\text{ cm}$ và $\widehat{B} = 40^\circ$. Tính độ dài các cạnh $AC$ và $AB$ (làm tròn kết quả đến hàng phần mười). Biết $\sin 40^\circ \approx 0,6428$; $\cos 40^\circ \approx 0,7660$.

**Lời giải:**

Áp dụng hệ thức giữa cạnh và góc trong tam giác $ABC$ vuông tại $A$:
- Cạnh đối diện góc $B$ là $AC$:
  $$AC = BC \cdot \sin B = 12 \cdot \sin 40^\circ \approx 12 \cdot 0,6428 \approx 7,7\text{ cm}$$
- Cạnh kề với góc $B$ là $AB$:
  $$AB = BC \cdot \cos B = 12 \cdot \cos 40^\circ \approx 12 \cdot 0,7660 \approx 9,2\text{ cm}$$

---

### Dạng 2: Giải tam giác vuông hoàn chỉnh

#### Bài toán 2:
Giải tam giác $ABC$ vuông tại $A$ trong mỗi trường hợp sau:
a) Biết $b = AC = 10\text{ cm}$ và $\widehat{C} = 30^\circ$.
b) Biết $b = AC = 5\text{ cm}$ và $c = AB = 12\text{ cm}$.

**Lời giải:**

a) Ta có:
- Tính góc $\widehat{B}$:
  $$\widehat{B} = 90^\circ - \widehat{C} = 90^\circ - 30^\circ = 60^\circ$$
- Tính cạnh $c = AB$:
  $$c = b \cdot \cot B = 10 \cdot \tan C = 10 \cdot \tan 30^\circ = 10 \cdot \frac{\sqrt{3}}{3} = \frac{10\sqrt{3}}{3}\text{ cm}$$
- Tính cạnh huyền $a = BC$:
  $$a = \frac{b}{\cos C} = \frac{10}{\cos 30^\circ} = \frac{10}{\frac{\sqrt{3}}{2}} = \frac{20}{\sqrt{3}} = \frac{20\sqrt{3}}{3}\text{ cm}$$

b) Ta có:
- Tính cạnh huyền $BC$ theo định lý Pythagoras:
  $$BC = \sqrt{AB^2 + AC^2} = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13\text{ cm}$$
- Tính góc $\widehat{B}$:
  $$\tan B = \frac{AC}{AB} = \frac{5}{12} \approx 0,4167 \implies \widehat{B} \approx 22^\circ 37'$$
- Tính góc $\widehat{C}$:
  $$\widehat{C} = 90^\circ - \widehat{B} \approx 90^\circ - 22^\circ 37' = 67^\circ 23'$$

---

### Dạng 3: Bài toán tính toán trong tam giác thường (Kẻ thêm đường cao)

**Phương pháp giải:**
Khi gặp tam giác nhọn hoặc tam giác tù không phải là tam giác vuông, ta **kẻ thêm một đường cao** từ một đỉnh thích hợp để chia tam giác đó thành hai tam giác vuông nhỏ, sau đó áp dụng hệ thức lượng cho từng tam giác vuông.

---

#### Bài toán 3:
Cho tam giác $ABC$ có $AB = 10\text{ cm}$, $\widehat{B} = 45^\circ$ và $\widehat{C} = 30^\circ$. Kẻ đường cao $AH$ vuông góc với $BC$ ($H \in BC$).
a) Tính độ dài đường cao $AH$.
b) Tính độ dài các cạnh $AC$ và $BC$.

**Lời giải:**

a) Xét tam giác $ABH$ vuông tại $H$:
$$AH = AB \cdot \sin B = 10 \cdot \sin 45^\circ = 10 \cdot \frac{\sqrt{2}}{2} = 5\sqrt{2}\text{ cm}$$

b) Tính cạnh $AC$:
Xét tam giác $ACH$ vuông tại $H$:
$$AC = \frac{AH}{\sin C} = \frac{5\sqrt{2}}{\sin 30^\circ} = \frac{5\sqrt{2}}{\frac{1}{2}} = 10\sqrt{2}\text{ cm}$$

Tính cạnh $BC$:
Ta có $BC = BH + HC$.
- Trong tam giác vuông $ABH$ vuông cân tại $H$ (vì $\widehat{B} = 45^\circ$):
  $$BH = AH = 5\sqrt{2}\text{ cm}$$
- Trong tam giác vuông $ACH$:
  $$HC = AH \cdot \cot C = 5\sqrt{2} \cdot \cot 30^\circ = 5\sqrt{2} \cdot \sqrt{3} = 5\sqrt{6}\text{ cm}$$
Vậy độ dài cạnh $BC$ là:
$$BC = BH + HC = 5\sqrt{2} + 5\sqrt{6} = 5(\sqrt{2} + \sqrt{6})\text{ cm}$$

---

### Dạng 4: Ứng dụng thực tế xác định chiều cao và khoảng cách gián tiếp

#### Bài toán 4:
Để đo chiều cao của một tòa tháp Landmark mà không thể tiếp cận trực tiếp chân tháp, hai kỹ sư trắc địa đặt máy ngắm tại hai điểm $A$ và $B$ thẳng hàng với chân tháp $C$ trên mặt đất, cách nhau một khoảng $AB = 40\text{ m}$.
- Tại điểm $A$, góc nâng nhìn lên đỉnh tháp $D$ là $\alpha = 35^\circ$.
- Tại điểm $B$ (tiến gần chân tháp hơn), góc nâng nhìn lên đỉnh tháp $D$ là $\beta = 50^\circ$.
Biết máy ngắm đặt cách mặt đất $1,5\text{ m}$. Tính chiều cao của tòa tháp đó (làm tròn đến hàng phần mười).

**Lời giải:**

Gọi $h$ là khoảng cách từ đỉnh tháp đến đường ngắm ngang của máy đo ($CD = h + 1,5\text{ m}$).
Gọi khoảng cách từ điểm $B$ đến chân tháp (theo phương ngang) là $x = BC\text{ (m)}$.
Khi đó khoảng cách từ $A$ đến chân tháp là $AC = x + 40\text{ (m)}$.

Trong tam giác vuông tại chân tháp:
- Từ điểm $B$: $\tan 50^\circ = \frac{h}{x} \implies x = \frac{h}{\tan 50^\circ}$.
- Từ điểm $A$: $\tan 35^\circ = \frac{h}{x + 40} \implies x + 40 = \frac{h}{\tan 35^\circ}$.

Trừ hai hệ thức cho nhau:
$$(x + 40) - x = \frac{h}{\tan 35^\circ} - \frac{h}{\tan 50^\circ}$$
$$40 = h\left(\frac{1}{\tan 35^\circ} - \frac{1}{\tan 50^\circ}\right)$$
Tính các giá trị:
$\frac{1}{\tan 35^\circ} \approx \frac{1}{0,7002} \approx 1,4281$
$\frac{1}{\tan 50^\circ} \approx \frac{1}{1,1918} \approx 0,8391$
$$40 = h(1,4281 - 0,8391) = h(0,5890) \implies h = \frac{40}{0,5890} \approx 67,9\text{ m}$$

Chiều cao thực tế của tòa tháp tính từ mặt đất:
$$H = h + 1,5 \approx 67,9 + 1,5 = 69,4\text{ m}$$

**Kết luận:** Tòa tháp cao khoảng $69,4\text{ mét}$.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Hệ Thống Tiếp Cận Hạ Cánh Dẫn Đường Máy Bay (ILS Glide Slope)
Mọi chuyến bay thương mại (Boeing 787, Airbus A350) khi hạ cánh trong sương mù dày đặc đều bám theo đường tiếp cận Glide Slope có góc nghiêng chính xác $\theta = 3^\circ$.
Nếu máy bay cách ngưỡng đường băng khoảng cách nằm ngang $d = 5\text{ hải lý}\ (\approx 9\ 260\text{ m})$, độ cao chuẩn mà máy bay cần đạt được là:
$$h = d \cdot \tan 3^\circ \approx 9\ 260 \cdot 0,0524 \approx 485\text{ m}$$
Máy tính trên buồng lái tự động giải hệ thức tam giác vuông này từng giây để điều khiển càng đáp tiếp đất êm ái.

---

### Chuyên đề 2: Tầm Nhìn Radar Quân Sự Vượt Đường Chân Trời (Horizon Distance)
Do Trái Đất có dạng hình cầu bán kính $R \approx 6\ 371\text{ km}$, tầm xa tối đa $d$ của một radar đặt ở độ cao $h$ trên đài kiểm soát không lưu được tính bằng tam giác vuông với tâm Trái Đất:
$$d = \sqrt{(R + h)^2 - R^2} \approx \sqrt{2Rh} = R \cdot \tan \theta$$
Hệ thức lượng này giúp hải quân bố trí các đài radar cảnh giới sớm trên các đỉnh núi cao để phát hiện mục tiêu từ xa hàng trăm kilômét.

---

### Chuyên đề 3: Kỹ Thuật Kéo Cáp Treo Kỷ Lục Fansipan
Tuyến cáp treo Fansipan vượt thung lũng Mường Hoa có góc nghiêng dây cáp lên tới hơn $35^\circ$. Khi một cabin chở $30$ hành khách có tổng trọng lượng $P = 3\ 000\text{ kg}$, thành phần trọng lực kéo tụt cabin dọc theo dây cáp là:
$$F_{\text{keo}} = P \cdot \sin 35^\circ \approx 3000 \cdot 0,5736 \approx 1\ 720\text{ kg}$$
Các kỹ sư tính toán lực căng cáp và hệ thống phanh hãm dựa trên hệ thức lượng giác để bảo đảm an toàn tuyệt đối.

---

### Chuyên đề 4: Góc Nghiêng Tối Ưu Của Tấm Pin Mặt Trời (Solar Panel Tilt)
Để thu được năng lượng quang điện cực đại, bề mặt tấm pin mặt trời phải vuông góc với tia nắng Mặt Trời. Tại Hà Nội (vĩ độ $21^\circ\text{ Bắc}$), góc nghiêng tối ưu của giàn pin mặt trời được lắp đặt bằng đúng vĩ độ địa lý:
$$\theta \approx 21^\circ$$
Vào mùa đông khi Mặt Trời ở góc chiếu thấp, hệ thống xoay tự động bám góc hạ lượng giác giúp tăng sản lượng điện sạch lên $25\%$.

---

### Chuyên đề 5: Khảo Sát Đáy Biển Bằng Sóng Siêu Âm Sonar
Tàu ngầm và tàu thăm dò đại dương phát các chùm sóng âm sonar xuống đáy biển dưới một góc quét $\alpha$. Bằng cách đo thời gian phản xạ của sóng âm ($t$) và vận tốc truyền âm trong nước biển ($v \approx 1\ 500\text{ m/s}$), quãng đường truyền sóng là $s = v \cdot t$. Độ sâu đáy biển được tính bằng hệ thức:
$$h = s \cdot \cos \alpha$$
Nhờ hệ thức lượng trong tam giác vuông, bản đồ 3D đáy biển chi tiết được dựng lên hoàn hảo.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Hệ thức giữa cạnh và góc trong tam giác vuông (Toán 9 Bài 12)",
  "questions": [
    {
      "question": "Trong tam giác ABC vuông tại A có cạnh huyền a và góc nhọn B. Cạnh góc vuông b bằng:",
      "options": [
        "a * sin B",
        "a * cos B",
        "a * tan B",
        "a / sin B"
      ],
      "answer": 0,
      "hint": "Cạnh góc vuông = Cạnh huyền * Sin góc đối.",
      "explanation": "Theo hệ thức: Cạnh góc vuông bằng cạnh huyền nhân với sin của góc đối: $b = a \\cdot \\sin B$."
    },
    {
      "question": "Trong tam giác ABC vuông tại A có AC = b, AB = c. Hệ thức nào sau đây ĐÚNG?",
      "options": [
        "b = c * tan B",
        "b = c * cot B",
        "b = c * sin B",
        "b = c * cos B"
      ],
      "answer": 0,
      "hint": "Cạnh góc vuông = Cạnh góc vuông kia * Tang góc đối.",
      "explanation": "Theo định lý: Cạnh góc vuông bằng cạnh góc vuông kia nhân với tang của góc đối: $b = c \\cdot \\tan B$."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có BC = 10 cm, góc B = 30°. Độ dài cạnh AC là:",
      "options": [
        "5 cm",
        "5*căn(3) cm",
        "10*căn(3) cm",
        "20 cm"
      ],
      "answer": 0,
      "hint": "AC = BC * sin B = 10 * sin 30° = 10 * 0,5 = 5 cm.",
      "explanation": "Ta có $AC = BC \\cdot \\sin B = 10 \\cdot \\sin 30^\\circ = 10 \\cdot \\frac{1}{2} = 5\\text{ cm}$."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có AB = 6 cm, góc C = 45°. Độ dài cạnh AC là:",
      "options": [
        "6 cm",
        "6*căn(2) cm",
        "3 cm",
        "3*căn(2) cm"
      ],
      "answer": 0,
      "hint": "Tam giác vuông có một góc 45° là tam giác vuông cân => AC = AB = 6 cm.",
      "explanation": "Tam giác $ABC$ vuông tại $A$ có $\\widehat{C} = 45^\\circ$ nên là tam giác vuông cân tại $A$. Do đó $AC = AB = 6\\text{ cm}$."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có AB = 5 cm, AC = 5*căn(3) cm. Số đo góc B là:",
      "options": [
        "60°",
        "30°",
        "45°",
        "75°"
      ],
      "answer": 0,
      "hint": "tan B = AC / AB = 5*sqrt(3) / 5 = sqrt(3) => B = 60°.",
      "explanation": "Ta có $\\tan B = \\frac{AC}{AB} = \\frac{5\\sqrt{3}}{5} = \\sqrt{3}$. Suy ra $\\widehat{B} = 60^\\circ$."
    },
    {
      "question": "Một chiếc thang dài 4 m tựa vào tường tạo với mặt đất một góc 65°. Chiều cao chân tường đến đầu thang là:",
      "options": [
        "4 * sin 65° m",
        "4 * cos 65° m",
        "4 * tan 65° m",
        "4 / sin 65° m"
      ],
      "answer": 0,
      "hint": "Chiều cao là cạnh đối diện góc 65° => h = cạnh huyền * sin 65°.",
      "explanation": "Chiều cao của đầu thang là cạnh góc vuông đối diện góc $65^\\circ$. Do đó $h = 4 \\cdot \\sin 65^\\circ\\text{ m}$."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có BC = 8 cm, góc B = 60°. Độ dài cạnh kề AB là:",
      "options": [
        "4 cm",
        "4*căn(3) cm",
        "8*căn(3) cm",
        "2 cm"
      ],
      "answer": 0,
      "hint": "AB = BC * cos B = 8 * cos 60° = 8 * 0,5 = 4 cm.",
      "explanation": "Ta có $AB = BC \\cdot \\cos B = 8 \\cdot \\cos 60^\\circ = 8 \\cdot \\frac{1}{2} = 4\\text{ cm}$."
    },
    {
      "question": "Một người đứng cách chân một ngọn hải đăng 50 m nhìn lên ngọn đèn với góc nâng 30°. Chiều cao của ngọn hải đăng (bỏ qua chiều cao người) là:",
      "options": [
        "50*căn(3)/3 m (khoảng 28,9 m)",
        "50*căn(3) m",
        "25 m",
        "100 m"
      ],
      "answer": 0,
      "hint": "h = d * tan 30° = 50 * (sqrt(3)/3) m.",
      "explanation": "Chiều cao ngọn hải đăng là: $h = 50 \\cdot \\tan 30^\\circ = 50 \\cdot \\frac{\\sqrt{3}}{3} \\approx 28,9\\text{ m}$."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có b = 8 cm, c = 6 cm. Cạnh huyền a và góc B xấp xỉ bằng:",
      "options": [
        "a = 10 cm; B ≈ 53°8'",
        "a = 10 cm; B ≈ 36°52'",
        "a = 14 cm; B ≈ 45°",
        "a = 10 cm; B = 60°"
      ],
      "answer": 0,
      "hint": "a = sqrt(8^2 + 6^2) = 10 cm; tan B = 8/6 = 4/3 => B ≈ 53°8'.",
      "explanation": "Cạnh huyền $a = \\sqrt{8^2 + 6^2} = 10\\text{ cm}$. Ta có $\\tan B = \\frac{b}{c} = \\frac{8}{6} = \\frac{4}{3} \\implies \\widehat{B} \\approx 53^\\circ 8'$."
    },
    {
      "question": "Khẳng định nào sau đây là ĐÚNG về việc giải tam giác vuông?",
      "options": [
        "Cần biết ít nhất 1 yếu tố về cạnh trong 2 yếu tố đã cho",
        "Chỉ cần biết 2 góc nhọn là giải được tam giác vuông",
        "Luôn phải kẻ thêm đường cao",
        "Chỉ giải được khi tam giác vuông cân"
      ],
      "answer": 0,
      "hint": "Nếu chỉ biết 2 góc thì các tam giác đồng dạng với nhau, không tính được độ dài cạnh.",
      "explanation": "Để giải tam giác vuông, bắt buộc phải biết ít nhất 1 yếu tố về độ dài cạnh (nếu chỉ biết 2 góc nhọn thì có vô số tam giác đồng dạng với các kích thước khác nhau)."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Giải các tam giác vuông sau
a) Tam giác $ABC$ vuông tại $A$ có $a = 15\text{ cm}$ và $\widehat{B} = 55^\circ$.
b) Tam giác $ABC$ vuông tại $A$ có $b = 7\text{ cm}$ và $c = 9\text{ cm}$.
c) Tam giác $ABC$ vuông tại $A$ có $c = 8\text{ cm}$ và $\widehat{C} = 35^\circ$.

### Bài 2: Kẻ đường cao tính toán tam giác thường
Cho tam giác $ABC$ có $\widehat{B} = 60^\circ, \widehat{C} = 45^\circ$ và cạnh $BC = 12\text{ cm}$. Kẻ đường cao $AH$ ($H \in BC$).
a) Đặt $AH = x$. Biểu diễn $BH$ và $CH$ theo $x$.
b) Tính độ dài đường cao $AH$ và các cạnh $AB, AC$.

### Bài 3: Bài toán khoảng cách qua sông
Hai bạn học sinh đứng ở hai điểm $A$ và $B$ trên cùng một bờ sông, cách nhau $60\text{ m}$. Cả hai bạn cùng nhìn sang một cây cổ thụ $C$ ở bờ sông bên kia.
- Bạn ở điểm $A$ đo được góc $\widehat{CAB} = 50^\circ$.
- Bạn ở điểm $B$ đo được góc $\widehat{CBA} = 65^\circ$.
Tính khoảng cách ngắn nhất từ cây $C$ sang bờ sông bên này (chiều rộng khúc sông).

### Bài 4 (Thử thách thực tế):
Một con đường dốc lên đỉnh núi có độ dốc $8\%$ (nghĩa là cứ đi $100\text{ m}$ theo phương ngang thì độ cao tăng thêm $8\text{ m}$).
a) Tính góc nghiêng $\alpha$ của con dốc so với phương nằm ngang.
b) Một người đi xe đạp leo hết con dốc dài $3\text{ km}$ theo phương nghiêng. Hỏi người đó đã lên cao được bao nhiêu mét so với chân dốc?
