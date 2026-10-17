---
title: 'Toán 9 Bài 11: Tỉ số lượng giác của góc nhọn - Sin, Cos, Tan, Cot & Công thức Lượng giác Cơ bản'
description: 'Lý thuyết toàn diện và bài tập Bài 11 Toán 9: Định nghĩa sin, cos, tan, cot, tỉ số lượng giác của hai góc phụ nhau, các hằng đẳng thức lượng giác cơ bản, widget tam giác vuông tương tác và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Lượng giác
  - Tỉ số lượng giác
  - Sin Cos Tan Cot
  - Góc phụ nhau
  - Kết nối tri thức
grade: 9
---

# Bài 11. Tỉ số lượng giác của góc nhọn

Từ hàng nghìn năm trước, nhà toán học Thales xứ Miletus đã làm kinh ngạc các vị vua Ai Cập khi đo được chính xác chiều cao của Kim tự tháp Giza vĩ đại chỉ bằng cách cắm một chiếc cọc thẳng đứng xuống cát và so sánh bóng của nó với bóng của kim tự tháp dưới ánh nắng Mặt Trời.

Bí mật nằm đằng sau kỳ tích đo đạc gián tiếp đó chính là mối quan hệ kỳ diệu giữa **góc** và **tỉ số độ dài các cạnh** trong một tam giác vuông. Dù tam giác vuông có kích thước lớn như một ngọn núi hay nhỏ bé như một vi mạch điện tử, chỉ cần một góc nhọn không đổi thì tỉ số giữa cạnh đối, cạnh kề và cạnh huyền luôn luôn là một hằng số bất biến!

Những tỉ số thiêng liêng đó được gọi là **Tỉ số lượng giác của góc nhọn** ($\sin, \cos, \tan, \cot$). Đây là cánh cửa đưa các em bước vào thế giới lượng giác học vô cùng rực rỡ của toán học và kỹ thuật hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY: TỈ SỐ LƯỢNG GIÁC CỦA GÓC NHỌN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa 4 tỉ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sin \alpha = \frac{\text{đối}}{\text{huyền}}$ ("Sao Đi Học")<br>• $\cos \alpha = \frac{\text{kề}}{\text{huyền}}$ ("Cứ Khóc Hoài")<br>• $\tan \alpha = \frac{\text{đối}}{\text{kề}}$ ("Thôi Đừng Khóc")<br>• $\cot \alpha = \frac{\text{kề}}{\text{đối}}$ ("Có Kẹo Đây")</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính chất cơ bản</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với góc nhọn $\alpha$: $0 < \sin \alpha < 1$ và $0 < \cos \alpha < 1$.<br>• $\tan \alpha > 0$ và $\cot \alpha > 0$.<br>• Góc $\alpha$ tăng thì $\sin \alpha, \tan \alpha$ tăng; $\cos \alpha, \cot \alpha$ giảm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hai góc phụ nhau ($\alpha + \beta = 90^\circ$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sin \alpha = \cos \beta$<br>• $\cos \alpha = \sin \beta$<br>• $\tan \alpha = \cot \beta$<br>• $\cot \alpha = \tan \beta$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hằng đẳng thức lượng giác</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sin^2 \alpha + \cos^2 \alpha = 1$<br>• $\tan \alpha = \frac{\sin \alpha}{\cos \alpha}; \ \cot \alpha = \frac{\cos \alpha}{\sin \alpha}$<br>• $\tan \alpha \cdot \cot \alpha = 1$<br>• $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Công thức:** Trong tam giác vuông, tỉ số giữa cạnh đối và cạnh huyền của góc nhọn $\alpha$ được gọi là gì?
2. **Giá trị đặc biệt:** Giá trị của $\sin 30^\circ$ bằng bao nhiêu?
3. **Hai góc phụ nhau:** Cho $\sin 25^\circ \approx 0,4226$. Hãy suy ra giá trị của $\cos 65^\circ$.
4. **Hằng đẳng thức:** Tính giá trị của biểu thức $P = \sin^2 42^\circ + \cos^2 42^\circ$.
5. **Tích nghịch đảo:** Giá trị của tích $\tan 35^\circ \cdot \cot 35^\circ$ bằng bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $\sin \alpha$.
> 2. $\sin 30^\circ = \frac{1}{2} = 0,5$.
> 3. Vì $25^\circ + 65^\circ = 90^\circ$ nên $\cos 65^\circ = \sin 25^\circ \approx 0,4226$.
> 4. $P = 1$ (theo hệ thức $\sin^2 \alpha + \cos^2 \alpha = 1$).
> 5. Bằng $1$ (vì $\tan \alpha \cdot \cot \alpha = 1$).

---

## I. Lý thuyết Trọng tâm

### 1. Định nghĩa Tỉ số Lượng giác của Góc Nhọn

Cho tam giác $ABC$ vuông tại $A$. Xét góc nhọn $B = \alpha$:
- Cạnh $AC$ đối diện với góc $B$, gọi là **cạnh đối**.
- Cạnh $AB$ kề với góc $B$, gọi là **cạnh kề**.
- Cạnh $BC$ đối diện góc vuông $A$, gọi là **cạnh huyền**.

> [!NOTE]
> **Định nghĩa 4 tỉ số lượng giác:**
> - **Sin** của góc $\alpha$ (ký hiệu $\sin \alpha$): $\sin \alpha = \frac{\text{Cạnh đối}}{\text{Cạnh huyền}} = \frac{AC}{BC}$
> - **Côsin** của góc $\alpha$ (ký hiệu $\cos \alpha$): $\cos \alpha = \frac{\text{Cạnh kề}}{\text{Cạnh huyền}} = \frac{AB}{BC}$
> - **Tang** của góc $\alpha$ (ký hiệu $\tan \alpha$): $\tan \alpha = \frac{\text{Cạnh đối}}{\text{Cạnh kề}} = \frac{AC}{AB}$
> - **Côtang** của góc $\alpha$ (ký hiệu $\cot \alpha$): $\cot \alpha = \frac{\text{Cạnh kề}}{\text{Cạnh đối}} = \frac{AB}{AC}$

> [!TIP]
> **Bài thơ mẹo nhớ siêu tốc:**
> - **Sao Đi Học** ($\sin = \text{Đối} / \text{Huyền}$)
> - **Cứ Khóc Hoài** ($\cos = \text{Kề} / \text{Huyền}$)
> - **Thôi Đừng Khóc** ($\tan = \text{Đối} / \text{Kề}$)
> - **Có Kẹo Đây** ($\cot = \text{Kề} / \text{Đối}$)

---

### 2. Tính chất của Tỉ số Lượng giác

1. Vì cạnh đối và cạnh kề luôn nhỏ hơn cạnh huyền nên với mọi góc nhọn $\alpha$, ta luôn có:
   $$0 < \sin \alpha < 1 \quad \text{và} \quad 0 < \cos \alpha < 1$$
   $$\tan \alpha > 0 \quad \text{và} \quad \cot \alpha > 0$$
2. Khi góc nhọn $\alpha$ tăng từ $0^\circ$ đến $90^\circ$:
   - $\sin \alpha$ và $\tan \alpha$ tăng.
   - $\cos \alpha$ và $\cot \alpha$ giảm.

---

### 3. Tỉ số Lượng giác của Hai Góc Phụ Nhau

> [!IMPORTANT]
> **Định lý (Hai góc phụ nhau):**
> Nếu hai góc nhọn $\alpha$ và $\beta$ phụ nhau ($\alpha + \beta = 90^\circ$) thì sin góc này bằng côsin góc kia, tang góc này bằng côtang góc kia:
> $$\sin \alpha = \cos \beta$$
> $$\cos \alpha = \sin \beta$$
> $$\tan \alpha = \cot \beta$$
> $$\cot \alpha = \tan \beta$$

*Ví dụ:*
- $\sin 20^\circ = \cos 70^\circ$ (vì $20^\circ + 70^\circ = 90^\circ$).
- $\tan 15^\circ = \cot 75^\circ$.
- $\frac{\sin 50^\circ}{\cos 40^\circ} = \frac{\sin 50^\circ}{\sin 50^\circ} = 1$.

---

### 4. Bảng Tỉ số Lượng giác của các Góc Đặc biệt ($30^\circ, 45^\circ, 60^\circ$)

| Tỉ số lượng giác | $\alpha = 30^\circ$ | $\alpha = 45^\circ$ | $\alpha = 60^\circ$ |
| :---: | :---: | :---: | :---: |
| $\sin \alpha$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
| $\cos \alpha$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ |
| $\tan \alpha$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |
| $\cot \alpha$ | $\sqrt{3}$ | $1$ | $\frac{\sqrt{3}}{3}$ |

---

### 5. Các Hệ thức Lượng giác Cơ bản

Với mọi góc nhọn $\alpha$, ta có:
1. $\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$
2. $\cot \alpha = \frac{\cos \alpha}{\sin \alpha}$
3. $\tan \alpha \cdot \cot \alpha = 1$
4. $\sin^2 \alpha + \cos^2 \alpha = 1$
5. $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$
6. $1 + \cot^2 \alpha = \frac{1}{\sin^2 \alpha}$

*(Chứng minh nhanh công thức $\sin^2 \alpha + \cos^2 \alpha = 1$: Ta có $\sin \alpha = \frac{b}{a}$, $\cos \alpha = \frac{c}{a}$. Suy ra $\sin^2 \alpha + \cos^2 \alpha = \frac{b^2 + c^2}{a^2}$. Theo định lý Pythagoras trong tam giác vuông: $b^2 + c^2 = a^2 \implies \frac{a^2}{a^2} = 1$).*

---

## II. Widget Tương tác: Khám phá Trực quan Tam Giác Vuông & Giá trị Lượng Giác

Hãy kéo thanh trượt góc $\alpha$ (từ $15^\circ$ đến $75^\circ$) để quan sát hình dạng tam giác vuông thay đổi trực tiếp trên hệ trục, tỉ lệ cạnh đối/cạnh kề và sự biến thiên của $\sin, \cos, \tan, \cot$:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG TAM GIÁC VUÔNG & BIẾN THIÊN TỈ SỐ LƯỢNG GIÁC</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
    <label><strong>Góc nhọn &alpha;:</strong> <input type="range" id="angle-slider" min="15" max="75" value="35" style="width: 200px;"></label>
    <span id="angle-val" style="font-weight: bold; color: #1e3a8a; min-width: 60px;">&alpha; = 35&deg;</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; align-items: center;">
    <div style="display: flex; justify-content: center;">
      <svg data-interactive-done="true" id="triangle-svg" width="280" height="200" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
        <!-- Right Triangle SVG -->
      </svg>
    </div>
    
    <div id="trig-values" style="background: #eff6ff; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 1.05em; line-height: 1.8; border-left: 4px solid #2563eb;">
      <!-- Dynamic trig values -->
    </div>
  </div>
</div>

<script>
(function() {
  function updateTrig() {
    let deg = parseFloat(document.getElementById('angle-slider').value);
    document.getElementById('angle-val').innerHTML = `&alpha; = ${deg}&deg;`;

    let rad = (deg * Math.PI) / 180;
    let s = Math.sin(rad);
    let c = Math.cos(rad);
    let t = Math.tan(rad);
    let cot = 1 / t;

    // Draw SVG Triangle with fixed hypotenuse = 150 px
    const svg = document.getElementById('triangle-svg');
    const width = 280;
    const height = 200;
    const hyp = 150;

    let bX = 40;
    let bY = 160; // vertex B (angle alpha)
    let aX = bX + hyp * c;
    let aY = bY; // vertex A (right angle)
    let cX = aX;
    let cY = bY - hyp * s; // vertex C

    let svgHtml = `
      <!-- Triangle ABC -->
      <polygon points="${bX},${bY} ${aX},${aY} ${cX},${cY}" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
      
      <!-- Right angle marker at A -->
      <path d="M ${aX - 12} ${aY} L ${aX - 12} ${aY - 12} L ${aX} ${aY - 12}" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      
      <!-- Angle arc at B -->
      <path d="M ${bX + 25} ${bY} A 25 25 0 0 0 ${bX + 25 * c} ${bY - 25 * s}" fill="none" stroke="#2563eb" stroke-width="2"/>
      <text x="${bX + 32}" y="${bY - 8}" font-size="11" font-weight="bold" fill="#1e40af">&alpha;</text>

      <!-- Labels -->
      <text x="${bX - 15}" y="${bY + 5}" font-size="13" font-weight="bold" fill="#1e293b">B</text>
      <text x="${aX + 5}" y="${aY + 15}" font-size="13" font-weight="bold" fill="#1e293b">A</text>
      <text x="${cX + 5}" y="${cY - 5}" font-size="13" font-weight="bold" fill="#1e293b">C</text>

      <!-- Side labels -->
      <text x="${(bX + aX) / 2}" y="${bY + 16}" font-size="11" fill="#475569" text-anchor="middle">Kề: c</text>
      <text x="${aX + 8}" y="${(aY + cY) / 2}" font-size="11" fill="#b91c1c">Đối: b</text>
      <text x="${(bX + cX) / 2 - 12}" y="${(bY + cY) / 2 - 8}" font-size="11" fill="#047857">Huyền: a</text>
    `;

    svg.innerHTML = svgHtml;

    // Values panel
    const valDiv = document.getElementById('trig-values');
    valDiv.innerHTML = `
      <strong style="color: #1e40af;">BẢNG GIÁ TRỊ LƯỢNG GIÁC (&alpha; = ${deg}&deg;):</strong><br>
      • <strong>sin &alpha;</strong> = Đối / Huyền = <span style="color: #b91c1c; font-weight: bold;">${s.toFixed(4)}</span><br>
      • <strong>cos &alpha;</strong> = Kề / Huyền = <span style="color: #047857; font-weight: bold;">${c.toFixed(4)}</span><br>
      • <strong>tan &alpha;</strong> = Đối / Kề = <span style="color: #d97706; font-weight: bold;">${t.toFixed(4)}</span><br>
      • <strong>cot &alpha;</strong> = Kề / Đối = <span style="color: #7c3aed; font-weight: bold;">${cot.toFixed(4)}</span><br>
      <span style="font-size: 0.9em; color: #475569;">Kiểm tra: sin&sup2;&alpha; + cos&sup2;&alpha; = (${s.toFixed(3)})&sup2; + (${c.toFixed(3)})&sup2; = ${(s*s + c*c).toFixed(4)} = 1</span>
    `;
  }

  const __initApp = function() {
    document.getElementById('angle-slider').addEventListener('input', updateTrig);
    updateTrig();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __initApp);
  } else {
    __initApp();
  }
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Tính tỉ số lượng giác khi biết độ dài các cạnh của tam giác vuông

**Phương pháp giải:**
1. Áp dụng định lý Pythagoras $a^2 = b^2 + c^2$ để tìm cạnh còn lại của tam giác vuông.
2. Xác định chính xác đâu là cạnh đối, cạnh kề của góc nhọn đang xét.
3. Lập các tỉ số $\sin, \cos, \tan, \cot$ theo định nghĩa.

---

#### Bài toán 1:
Cho tam giác $ABC$ vuông tại $A$, có $AB = 6\text{ cm}$ và $BC = 10\text{ cm}$.
a) Tính độ dài cạnh $AC$.
b) Tính các tỉ số lượng giác của góc $B$ và suy ra các tỉ số lượng giác của góc $C$.

**Lời giải:**

a) Áp dụng định lý Pythagoras trong tam giác $ABC$ vuông tại $A$:
$$BC^2 = AB^2 + AC^2 \implies AC^2 = BC^2 - AB^2 = 10^2 - 6^2 = 100 - 36 = 64$$
$$\implies AC = \sqrt{64} = 8\text{ cm}$$

b) Xét góc nhọn $B$:
- Cạnh đối là $AC = 8\text{ cm}$.
- Cạnh kề là $AB = 6\text{ cm}$.
- Cạnh huyền là $BC = 10\text{ cm}$.
Ta có các tỉ số lượng giác của góc $B$:
$$\sin B = \frac{AC}{BC} = \frac{8}{10} = \frac{4}{5}$$
$$\cos B = \frac{AB}{BC} = \frac{6}{10} = \frac{3}{5}$$
$$\tan B = \frac{AC}{AB} = \frac{8}{6} = \frac{4}{3}$$
$$\cot B = \frac{AB}{AC} = \frac{6}{8} = \frac{3}{4}$$

Vì $\widehat{B} + \widehat{C} = 90^\circ$ (hai góc phụ nhau), theo định lý hai góc phụ nhau ta suy ra:
$$\sin C = \cos B = \frac{3}{5}$$
$$\cos C = \sin B = \frac{4}{5}$$
$$\tan C = \cot B = \frac{3}{4}$$
$$\cot C = \tan B = \frac{4}{3}$$

---

### Dạng 2: Cho một tỉ số lượng giác, tính các tỉ số lượng giác còn lại

**Phương pháp giải:**
- Sử dụng các hằng đẳng thức cơ bản:
  - $\sin^2 \alpha + \cos^2 \alpha = 1 \implies \cos \alpha = \sqrt{1 - \sin^2 \alpha}$ (vì $\cos \alpha > 0$).
  - $\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$ và $\cot \alpha = \frac{1}{\tan \alpha}$.
  - Hoặc vẽ một tam giác vuông dựng hình minh họa với độ dài cạnh tương ứng.

---

#### Bài toán 2:
Cho góc nhọn $\alpha$ có $\sin \alpha = \frac{5}{13}$. Không dùng máy tính cầm tay, hãy tính các tỉ số lượng giác $\cos \alpha, \tan \alpha, \cot \alpha$.

**Lời giải:**

- Áp dụng hệ thức $\sin^2 \alpha + \cos^2 \alpha = 1$:
$$\cos^2 \alpha = 1 - \sin^2 \alpha = 1 - \left(\frac{5}{13}\right)^2 = 1 - \frac{25}{169} = \frac{144}{169}$$
Vì $\alpha$ là góc nhọn nên $\cos \alpha > 0$:
$$\cos \alpha = \sqrt{\frac{144}{169}} = \frac{12}{13}$$

- Tính $\tan \alpha$:
$$\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{5}{13} : \frac{12}{13} = \frac{5}{12}$$

- Tính $\cot \alpha$:
$$\cot \alpha = \frac{1}{\tan \alpha} = \frac{12}{5}$$

---

### Dạng 3: Rút gọn và tính giá trị biểu thức lượng giác bằng tính chất hai góc phụ nhau

**Phương pháp giải:**
- Nhận diện các cặp góc có tổng bằng $90^\circ$ (ví dụ: $10^\circ$ và $80^\circ$, $20^\circ$ và $70^\circ$, $35^\circ$ và $55^\circ$...).
- Biến đổi $\sin \to \cos$ hoặc $\cos \to \sin$ để triệt tiêu hoặc nhóm thành $\sin^2 x + \cos^2 x = 1$.
- Ghép cặp $\tan x \cdot \tan(90^\circ - x) = \tan x \cdot \cot x = 1$.

---

#### Bài toán 3:
Tính giá trị các biểu thức sau:
a) $A = \sin^2 15^\circ + \sin^2 75^\circ - \frac{\cos 20^\circ}{\sin 70^\circ}$.
b) $B = \tan 10^\circ \cdot \tan 20^\circ \cdot \tan 30^\circ \cdot \tan 70^\circ \cdot \tan 80^\circ$.
c) $C = \cos^2 10^\circ + \cos^2 20^\circ + \dots + \cos^2 80^\circ$.

**Lời giải:**

a) Ta thấy $15^\circ + 75^\circ = 90^\circ \implies \sin 75^\circ = \cos 15^\circ$.
Lại có $20^\circ + 70^\circ = 90^\circ \implies \sin 70^\circ = \cos 20^\circ$.
Thay vào biểu thức $A$:
$$A = \sin^2 15^\circ + \cos^2 15^\circ - \frac{\cos 20^\circ}{\cos 20^\circ} = 1 - 1 = 0$$

b) Nhóm các góc phụ nhau:
- $\tan 80^\circ = \cot 10^\circ \implies \tan 10^\circ \cdot \tan 80^\circ = \tan 10^\circ \cdot \cot 10^\circ = 1$.
- $\tan 70^\circ = \cot 20^\circ \implies \tan 20^\circ \cdot \tan 70^\circ = \tan 20^\circ \cdot \cot 20^\circ = 1$.
- $\tan 30^\circ = \frac{\sqrt{3}}{3}$.
Khi đó:
$$B = (\tan 10^\circ \cdot \tan 80^\circ) \cdot (\tan 20^\circ \cdot \tan 70^\circ) \cdot \tan 30^\circ = 1 \cdot 1 \cdot \frac{\sqrt{3}}{3} = \frac{\sqrt{3}}{3}$$

c) Biểu thức gồm 8 số hạng:
Nhóm từng cặp có tổng số đo bằng $90^\circ$:
$$\cos 80^\circ = \sin 10^\circ \implies \cos^2 10^\circ + \cos^2 80^\circ = \cos^2 10^\circ + \sin^2 10^\circ = 1$$
$$\cos 70^\circ = \sin 20^\circ \implies \cos^2 20^\circ + \cos^2 70^\circ = 1$$
$$\cos 60^\circ = \sin 30^\circ \implies \cos^2 30^\circ + \cos^2 60^\circ = 1$$
$$\cos 50^\circ = \sin 40^\circ \implies \cos^2 40^\circ + \cos^2 50^\circ = 1$$
Tổng cộng có $4$ cặp, mỗi cặp có giá trị bằng $1$:
$$C = 1 + 1 + 1 + 1 = 4$$

---

### Dạng 4: Chứng minh các đẳng thức lượng giác không phụ thuộc vào góc $\alpha$

#### Bài toán 4:
Chứng minh rằng giá trị của các biểu thức sau không phụ thuộc vào góc nhọn $\alpha$:
a) $P = (\sin \alpha + \cos \alpha)^2 + (\sin \alpha - \cos \alpha)^2$.
b) $Q = \frac{\sin^4 \alpha - \cos^4 \alpha}{\sin^2 \alpha - \cos^2 \alpha}$.

**Lời giải:**

a) Khai triển hai bình phương:
$$P = (\sin^2 \alpha + 2\sin \alpha \cos \alpha + \cos^2 \alpha) + (\sin^2 \alpha - 2\sin \alpha \cos \alpha + \cos^2 \alpha)$$
$$P = 2(\sin^2 \alpha + \cos^2 \alpha) = 2(1) = 2$$
Biểu thức luôn bằng $2$, không phụ thuộc vào góc $\alpha$.

b) Áp dụng hằng đẳng thức hiệu hai bình phương cho tử số:
$$\sin^4 \alpha - \cos^4 \alpha = (\sin^2 \alpha)^2 - (\cos^2 \alpha)^2 = (\sin^2 \alpha - \cos^2 \alpha)(\sin^2 \alpha + \cos^2 \alpha)$$
Thay vào $Q$:
$$Q = \frac{(\sin^2 \alpha - \cos^2 \alpha)(\sin^2 \alpha + \cos^2 \alpha)}{\sin^2 \alpha - \cos^2 \alpha} = \sin^2 \alpha + \cos^2 \alpha = 1$$
Biểu thức luôn bằng $1$, không phụ thuộc vào góc $\alpha$.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Trắc Địa Bản Đồ & Đo Độ Cao Đỉnh Everest Bằng Phương Pháp Tam Giác Đạc
Vào năm 1852, nhà toán học Radhanath Sikdar đã lần đầu tiên đo được độ cao chính xác của đỉnh núi Everest ($8\ 848\text{ m}$) mà không cần đặt chân lên đỉnh núi. Bằng cách đặt máy kinh vĩ tại chân núi cách xa hàng chục kilômét, đo khoảng cách nằm ngang $d$ và góc nâng $\alpha$, chiều cao ngọn núi được tính chính xác bằng công thức:
$$h = d \cdot \tan \alpha$$
Phương pháp tam giác đạc lượng giác này là nền tảng bản đồ học quân sự và vệ tinh ngày nay.

---

### Chuyên đề 2: Góc Nghiêng An Toàn Của Thang Cứu Hỏa
Các hiệp hội cứu hộ quốc tế quy định góc nghiêng an toàn giữa thang cứu hỏa và mặt đất phải xấp xỉ $\alpha \approx 75^\circ$:
- Nếu $\alpha > 75^\circ$, thang quá dốc dẫn đến nguy cơ lật ngược về phía sau.
- Nếu $\alpha < 75^\circ$, áp lực uốn ở giữa thân thang tăng vọt theo $\cos \alpha$, dễ làm gãy thang.
Tỉ số lượng giác giúp lính cứu hộ tính toán chính xác khoảng cách đặt chân thang để chạm đúng tầng nhà cần sơ tán người.

---

### Chuyên đề 3: Phân Tích Lực Trượt Dốc Nghiêng Trong Thiết Kế Đường Đua F1
Tại các khúc cua tốc độ cao của đường đua F1, mặt đường luôn được thiết kế nghiêng vào trong một góc $\theta$. Lực pháp tuyến của mặt đường phân tích thành hai thành phần: $N \cos \theta$ cân bằng trọng lực và $N \sin \theta$ đóng vai trò làm lực hướng tâm.
Góc nghiêng tối ưu thỏa mãn:
$$\tan \theta = \frac{v^2}{g \cdot R}$$
Công thức này cho phép xe đua ôm cua ở tốc độ trên $250\text{ km/h}$ mà không bị văng khỏi đường đua.

---

### Chuyên đề 4: Định Luật Khúc Xạ Ánh Sáng Snell & Cáp Quang Internet Xuyên Đại Dương
Mọi luồng dữ liệu Internet xuyên đại dương chạy qua các sợi cáp quang thủy tinh nhờ hiện tượng phản xạ toàn phần. Định luật khúc xạ Snell phát biểu:
$$n_1 \sin \theta_1 = n_2 \sin \theta_2$$
Khi góc tới $\theta_1$ lớn hơn góc giới hạn phản xạ toàn phần ($\sin \theta_{\text{gh}} = \frac{n_2}{n_1}$), toàn bộ photon ánh sáng laser bị giam hãm bên trong lõi cáp quang và truyền đi hàng nghìn kilômét mà không bị suy hao năng lượng.

---

### Chuyên đề 5: Thuật Toán Dò Tia Ánh Sáng (Ray Tracing) Trong Game 3D
Trong các card đồ họa hiện đại (NVIDIA GeForce RTX), hiệu ứng phản xạ ánh sáng chân thực được tính toán bằng cách bắn hàng triệu tia sáng ảo từ camera vào cảnh vật. Góc phản xạ của tia sáng đối với vector pháp tuyến mặt phẳng tuân theo tỉ số $\cos \theta = \mathbf{L} \cdot \mathbf{N}$. Phép tính lượng giác này tạo nên đồ họa game chân thực như phim điện ảnh Hollywood.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Tỉ số lượng giác của góc nhọn (Toán 9 Bài 11)",
  "questions": [
    {
      "question": "Trong tam giác vuông, sin của một góc nhọn bằng tỉ số giữa:",
      "options": [
        "Cạnh đối và cạnh huyền",
        "Cạnh kề và cạnh huyền",
        "Cạnh đối và cạnh kề",
        "Cạnh kề và cạnh đối"
      ],
      "answer": 0,
      "hint": "Sao Đi Học: Sin = Đối / Huyền.",
      "explanation": "Theo định nghĩa: Sin của góc nhọn bằng tỉ số giữa cạnh đối và cạnh huyền."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có AB = 3 cm, AC = 4 cm. Giá trị của sin B là:",
      "options": [
        "4/5",
        "3/5",
        "4/3",
        "3/4"
      ],
      "answer": 0,
      "hint": "Cạnh huyền BC = sqrt(3^2 + 4^2) = 5 cm. Cạnh đối của góc B là AC = 4 cm => sin B = 4/5.",
      "explanation": "Cạnh huyền $BC = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$. Khi đó $\\sin B = \\frac{AC}{BC} = \\frac{4}{5}$."
    },
    {
      "question": "Cho góc nhọn alpha. Khẳng định nào sau đây là SAI?",
      "options": [
        "sin alpha > 1",
        "0 < cos alpha < 1",
        "tan alpha > 0",
        "sin^2 alpha + cos^2 alpha = 1"
      ],
      "answer": 0,
      "hint": "Cạnh đối luôn nhỏ hơn cạnh huyền nên sin alpha < 1. Khẳng định sin alpha > 1 là sai.",
      "explanation": "Vì cạnh đối nhỏ hơn cạnh huyền nên với mọi góc nhọn $\\alpha$, ta luôn có $0 < \\sin \\alpha < 1$. Do đó $\\sin \\alpha > 1$ là SAI."
    },
    {
      "question": "Giá trị của cos 60° bằng:",
      "options": [
        "1/2",
        "căn(3)/2",
        "căn(2)/2",
        "1"
      ],
      "answer": 0,
      "hint": "cos 60° = sin 30° = 1/2.",
      "explanation": "Theo bảng tỉ số lượng giác góc đặc biệt: $\\cos 60^\\circ = \\frac{1}{2}$."
    },
    {
      "question": "Cho hai góc nhọn alpha và beta phụ nhau (alpha + beta = 90°). Đẳng thức nào sau đây ĐÚNG?",
      "options": [
        "sin alpha = cos beta",
        "sin alpha = sin beta",
        "tan alpha = tan beta",
        "cos alpha = cos beta"
      ],
      "answer": 0,
      "hint": "Hai góc phụ nhau: sin góc này bằng cos góc kia.",
      "explanation": "Theo định lý hai góc phụ nhau: $\\sin \\alpha = \\cos \\beta$."
    },
    {
      "question": "Tính giá trị của biểu thức P = sin^2 35° + sin^2 55°:",
      "options": [
        "1",
        "0",
        "2",
        "căn(2)"
      ],
      "answer": 0,
      "hint": "35° + 55° = 90° => sin 55° = cos 35°. Khi đó sin^2 35° + cos^2 35° = 1.",
      "explanation": "Vì $35^\\circ + 55^\\circ = 90^\\circ \\implies \\sin 55^\\circ = \\cos 35^\\circ$. Do đó $P = \\sin^2 35^\\circ + \\cos^2 35^\\circ = 1$."
    },
    {
      "question": "Cho góc nhọn alpha có cos alpha = 0,8. Giá trị của sin alpha bằng:",
      "options": [
        "0,6",
        "0,2",
        "0,64",
        "0,36"
      ],
      "answer": 0,
      "hint": "sin^2 alpha = 1 - cos^2 alpha = 1 - 0,64 = 0,36 => sin alpha = 0,6.",
      "explanation": "Ta có $\\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\sqrt{1 - 0,8^2} = \\sqrt{0,36} = 0,6$."
    },
    {
      "question": "Biết tan alpha = 2. Giá trị của cot alpha bằng:",
      "options": [
        "1/2",
        "-2",
        "căn(2)",
        "1"
      ],
      "answer": 0,
      "hint": "cot alpha = 1 / tan alpha = 1/2.",
      "explanation": "Vì $\\tan \\alpha \\cdot \\cot \\alpha = 1 \\implies \\cot \\alpha = \\frac{1}{\\tan \\alpha} = \\frac{1}{2}$."
    },
    {
      "question": "Tính giá trị của tích M = tan 25° * tan 65°:",
      "options": [
        "1",
        "0",
        "2",
        "căn(3)"
      ],
      "answer": 0,
      "hint": "25° + 65° = 90° => tan 65° = cot 25° => tan 25° * cot 25° = 1.",
      "explanation": "Vì $25^\\circ + 65^\\circ = 90^\\circ \\implies \\tan 65^\\circ = \\cot 25^\\circ$. Do đó $M = \\tan 25^\\circ \\cdot \\cot 25^\\circ = 1$."
    },
    {
      "question": "Một cột cờ cao 7 m đổ bóng trên mặt đất dài 7 m dưới ánh nắng mặt trời. Góc tạo bởi tia nắng mặt trời và mặt đất là:",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "answer": 0,
      "hint": "tan alpha = đối / kề = 7 / 7 = 1 => alpha = 45°.",
      "explanation": "Gọi $\\alpha$ là góc tạo bởi tia nắng và mặt đất. Ta có $\\tan \\alpha = \\frac{\\text{chiều cao}}{\\text{chiều dài bóng}} = \\frac{7}{7} = 1$. Suy ra $\\alpha = 45^\\circ$."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Tính tỉ số lượng giác
Cho tam giác $MNP$ vuông tại $M$, biết $MN = 5\text{ cm}$ và $NP = 13\text{ cm}$.
a) Tính độ dài cạnh $MP$.
b) Tính các tỉ số lượng giác của góc $N$ và góc $P$.

### Bài 2: Sử dụng các hệ thức cơ bản
a) Cho $\cos \alpha = \frac{4}{5}$. Tính $\sin \alpha, \tan \alpha, \cot \alpha$.
b) Cho $\tan \alpha = \frac{3}{4}$. Tính $\sin \alpha, \cos \alpha$.
*(Gợi ý: Áp dụng công thức $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$).*

### Bài 3: Rút gọn các biểu thức
a) $A = \frac{\sin 32^\circ}{\cos 58^\circ} + \tan 40^\circ \cdot \tan 50^\circ$.
b) $B = \sin^2 20^\circ + \sin^2 40^\circ + \sin^2 50^\circ + \sin^2 70^\circ$.
c) $C = (1 + \tan^2 \alpha)\cos^2 \alpha - (1 + \cot^2 \alpha)\sin^2 \alpha$.

### Bài 4 (Thử thách thực tế):
Một chiếc máy bay cất cánh từ sân bay Nội Bài với góc bay lên so với phương nằm ngang là $18^\circ$. Sau khi bay được quãng đường theo phương nghiêng là $8\text{ km}$, hỏi máy bay đang ở độ cao bao nhiêu kilômét so với mặt đất (làm tròn đến hàng phần trăm)?
*(Biết $\sin 18^\circ \approx 0,3090$).*
