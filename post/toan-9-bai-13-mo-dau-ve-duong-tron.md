---
title: 'Toán 9 Bài 13: Mở đầu về đường tròn - Định nghĩa, Tính đối xứng & Đường tròn ngoại tiếp tam giác'
description: 'Lý thuyết toàn diện và bài tập Bài 13 Toán 9: Định nghĩa đường tròn, vị trí tương đối của điểm và đường tròn, tâm và trục đối xứng, đường tròn ngoại tiếp tam giác vuông, widget Thales tương tác và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Đường tròn
  - Tâm đối xứng
  - Trục đối xứng
  - Tam giác nội tiếp
  - Định lý Thales
  - Kết nối tri thức
grade: 9
---

# Bài 13. Mở đầu về đường tròn

Trong tất cả các hình học phẳng, **đường tròn** được mệnh danh là hình dạng hoàn hảo và cân xứng tuyệt mỹ nhất của vũ trụ:
- Từ quỹ đạo quay của các hành tinh quanh Mặt Trời, giọt nước loang trên mặt hồ phẳng lặng, chiếc compa quay tròn trên trang giấy vẽ, cho đến bánh xe quay tròn đưa nền văn minh nhân loại tiến lên phía trước.
- Nhà triết học Hy Lạp cổ đại Plato từng khẳng định: *"Đường tròn là hình thể đầu tiên, đơn giản nhất và hoàn hảo nhất mà Thượng đế đã sáng tạo nên"*.

Bước sang **Chương V: Đường tròn**, các em sẽ chính thức bước vào một trong những chuyên đề hình học quan trọng và hấp dẫn nhất của toàn bộ chương trình THCS, chiếm vị trí chủ chốt trong câu hỏi hình học của mọi đề thi tuyển sinh vào lớp 10 THPT!

Trong bài học mở đầu này, chúng ta sẽ cùng khám phá bản chất toán học của đường tròn, tính đối xứng vô tận của nó, điều kiện để ba điểm cùng thuộc một đường tròn và định lý Thales kinh điển về tam giác vuông nội tiếp nửa đường tròn!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: MỞ ĐẦU VỀ ĐƯỜNG TRÒN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa & Vị trí điểm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(O; R)$: Tập hợp các điểm cách $O$ đúng bằng $R$.<br>• $OM < R$: Điểm $M$ <strong>ở trong</strong> đường tròn.<br>• $OM = R$: Điểm $M$ <strong>nằm trên</strong> đường tròn.<br>• $OM > R$: Điểm $M$ <strong>ở ngoài</strong> đường tròn.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính đối xứng tuyệt đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tâm đối xứng:</strong> Tâm $O$ là tâm đối xứng duy nhất.<br>• <strong>Trục đối xứng:</strong> <em>Mọi đường thẳng đi qua tâm $O$</em> đều là trục đối xứng (có vô số trục đối xứng).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Sự xác định đường tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Qua <strong>3 điểm không thẳng hàng</strong>, luôn vẽ được <em>duy nhất 1 đường tròn</em>.<br>• Tâm là giao điểm của 3 đường trung trực tam giác.<br>• Qua 3 điểm thẳng hàng: <strong>Không thể</strong> vẽ được đường tròn.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. $\triangle$ Vuông & Định lý Thales</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tam giác vuông nội tiếp có <strong>tâm là trung điểm cạnh huyền</strong>.<br>• Bán kính $R = \frac{\text{cạnh huyền}}{2}$.<br>• Góc nội tiếp chắn nửa đường tròn luôn bằng $90^\circ$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Cho đường tròn $(O; 5\text{ cm})$. Điểm $A$ có khoảng cách $OA = 4\text{ cm}$ nằm ở đâu so với đường tròn?
2. **Trục đối xứng:** Đường tròn có bao nhiêu trục đối xứng?
3. **Qua 3 điểm:** Có thể vẽ được bao nhiêu đường tròn đi qua 3 đỉnh của một tam giác?
4. **Tam giác vuông:** Tâm đường tròn ngoại tiếp tam giác vuông nằm ở vị trí nào?
5. **Góc chắn nửa đường tròn:** Nếu điểm $M$ nằm trên đường tròn đường kính $AB$ ($M \ne A, B$) thì tam giác $MAB$ là tam giác gì?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Điểm $A$ nằm **bên trong** đường tròn (vì $OA = 4 < R = 5$).
> 2. Có **vô số trục đối xứng** (bất kỳ đường kính nào cũng là trục đối xứng).
> 3. Vẽ được **duy nhất 1 đường tròn**.
> 4. Là **trung điểm của cạnh huyền**.
> 5. Là **tam giác vuông tại $M$** ($\widehat{AMB} = 90^\circ$).

---

## I. Lý thuyết Trọng tâm

### 1. Định nghĩa Đường tròn và Hình tròn

> [!NOTE]
> **Định nghĩa đường tròn:**
> Đường tròn tâm $O$ bán kính $R$ ($R > 0$) là hình gồm các điểm cách điểm $O$ một khoảng bằng $R$, ký hiệu là $(O; R)$ hoặc $(O)$.
> $$(O; R) = \{M \mid OM = R\}$$
> 
> **Phân biệt Đường tròn và Hình tròn:**
> - **Đường tròn:** Chỉ bao gồm "đường viền" bao quanh (các điểm có $OM = R$).
> - **Hình tròn:** Bao gồm cả đường viền và toàn bộ các điểm nằm bên trong đường tròn (các điểm có $OM \le R$).

---

### 2. Vị trí tương đối của một Điểm đối với Đường tròn

Cho đường tròn $(O; R)$ và một điểm $M$ bất kỳ trong mặt phẳng:
- **Điểm $M$ nằm bên trong (phía trong) đường tròn:** $\iff OM < R$.
- **Điểm $M$ nằm trên (thuộc) đường tròn:** $\iff OM = R$.
- **Điểm $M$ nằm bên ngoài (phía ngoài) đường tròn:** $\iff OM > R$.

---

### 3. Tính đối xứng của Đường tròn

Đường tròn là hình có tính đối xứng cao nhất trong hình học phẳng:
1. **Tâm đối xứng:** Tâm $O$ là tâm đối xứng của đường tròn $(O)$. Bất kỳ điểm $A$ nào thuộc $(O)$ thì điểm đối xứng $A'$ của nó qua $O$ cũng thuộc $(O)$.
2. **Trục đối xứng:** Bất kỳ đường thẳng nào đi qua tâm $O$ đều là trục đối xứng của đường tròn $(O)$. Do đó, đường tròn có **vô số trục đối xứng**.

---

### 4. Cách xác định một Đường tròn

- Một đường tròn hoàn toàn được xác định khi biết:
  1. Tâm và bán kính của nó.
  2. Một đoạn thẳng là đường kính của nó.
  3. Ba điểm không thẳng hàng mà đường tròn đi qua.

> [!IMPORTANT]
> **Định lý về 3 điểm:**
> - Qua ba điểm không thẳng hàng, ta luôn vẽ được **một và chỉ một** đường tròn.
> - Tâm của đường tròn này là giao điểm của ba đường trung trực của tam giác tạo bởi ba điểm đó.
> - **Chú ý:** *Không vẽ được đường tròn nào đi qua ba điểm thẳng hàng.*

---

### 5. Đường tròn ngoại tiếp tam giác vuông & Định lý Thales

> [!IMPORTANT]
> **Định lý thuận và đảo:**
> 1. **Thuận:** Trong tam giác vuông, tâm của đường tròn ngoại tiếp là **trung điểm của cạnh huyền**. Bán kính bằng nửa cạnh huyền:
>    $$R = \frac{BC}{2}$$
> 2. **Đảo (Định lý Thales):** Nếu một tam giác có một cạnh là đường kính của đường tròn ngoại tiếp thì tam giác đó là **tam giác vuông** (cạnh đó là cạnh huyền).

*Hệ quả quan trọng:* Mọi điểm $M$ nằm trên đường tròn đường kính $AB$ (với $M \ne A, B$) luôn nhìn đoạn thẳng $AB$ dưới một góc vuông:
$$\widehat{AMB} = 90^\circ$$

---

## II. Widget Tương tác: Khám phá Định Lý Thales & Vị Trí Điểm Trên Nửa Đường Tròn

Kéo điểm $M$ chạy dọc theo nửa đường tròn đường kính $AB = 10\text{ cm}$. Hãy quan sát xem góc $\widehat{AMB}$ và độ dài các đoạn thẳng thay đổi như thế nào:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG ĐỊNH LÝ THALES: GÓC NHÌN ĐƯỜNG KÍNH LUÔN BẰNG 90&deg;</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
    <label><strong>Góc quay điểm M (&theta;):</strong> <input type="range" id="thales-slider" min="15" max="165" value="60" style="width: 220px;"></label>
    <span id="thales-angle" style="font-weight: bold; color: #1e3a8a; min-width: 60px;">&theta; = 60&deg;</span>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center;">
    <svg id="thales-svg" width="320" height="180" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
      <!-- Thales semi-circle SVG -->
    </svg>
    <div id="thales-info" style="margin-top: 12px; font-weight: bold; font-size: 1.1em; color: #047857; text-align: center;">
      <!-- Dynamic angle & distance readout -->
    </div>
  </div>
</div>

<script>
(function() {
  function updateThales() {
    let thetaDeg = parseFloat(document.getElementById('thales-slider').value);
    document.getElementById('thales-angle').innerHTML = `&theta; = ${thetaDeg}&deg;`;

    const svg = document.getElementById('thales-svg');
    const info = document.getElementById('thales-info');

    const width = 320;
    const height = 180;
    const ox = 160;
    const oy = 140;
    const R = 110;

    // A is (-R, 0), B is (R, 0)
    let ax = ox - R;
    let ay = oy;
    let bx = ox + R;
    let by = oy;

    // M position on semi-circle
    let rad = (thetaDeg * Math.PI) / 180;
    let mx = ox - R * Math.cos(rad);
    let my = oy - R * Math.sin(rad);

    let svgHtml = `
      <!-- Semicircle arc -->
      <path d="M ${ax} ${ay} A ${R} ${R} 0 0 1 ${bx} ${by}" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      
      <!-- Diameter AB -->
      <line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="#1e293b" stroke-width="2.5"/>
      
      <!-- Center O -->
      <circle cx="${ox}" cy="${oy}" r="4" fill="#1e293b"/>
      <text x="${ox}" y="${oy + 16}" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">O</text>
      
      <!-- Triangle MAB lines -->
      <line x1="${ax}" y1="${ay}" x2="${mx}" y2="${my}" stroke="#dc2626" stroke-width="2"/>
      <line x1="${bx}" y1="${by}" x2="${mx}" y2="${my}" stroke="#047857" stroke-width="2"/>
      
      <!-- Radius OM -->
      <line x1="${ox}" y1="${oy}" x2="${mx}" y2="${my}" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5"/>

      <!-- Point markers -->
      <circle cx="${ax}" cy="${ay}" r="4" fill="#1e293b"/>
      <circle cx="${bx}" cy="${by}" r="4" fill="#1e293b"/>
      <circle cx="${mx}" cy="${my}" r="6" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>

      <!-- Labels -->
      <text x="${ax - 12}" y="${ay + 5}" font-size="13" font-weight="bold" fill="#1e293b">A</text>
      <text x="${bx + 8}" y="${by + 5}" font-size="13" font-weight="bold" fill="#1e293b">B</text>
      <text x="${mx}" y="${my - 10}" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">M</text>
    `;

    svg.innerHTML = svgHtml;
    info.innerHTML = `Góc &ang;AMB = <span style="color: #dc2626; font-size: 1.2em;">90&deg;</span> (Luôn vuông tại mọi vị trí M trên đường tròn!) &bull; OM = R = ${(R/11).toFixed(1)} cm`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('thales-slider').addEventListener('input', updateThales);
    updateThales();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Xác định vị trí tương đối của một điểm đối với đường tròn

**Phương pháp giải:**
1. Tính khoảng cách $d = OM$ từ tâm $O$ đến điểm $M$ (thường dùng định lý Pythagoras trong hệ tọa độ hoặc tam giác vuông).
2. So sánh $d$ với bán kính $R$:
   - $d < R \implies M$ nằm trong đường tròn.
   - $d = R \implies M$ nằm trên đường tròn.
   - $d > R \implies M$ nằm ngoài đường tròn.

---

#### Bài toán 1:
Trên mặt phẳng tọa độ $Oxy$, cho đường tròn $(O; 5)$ có tâm là gốc tọa độ $O(0; 0)$ và bán kính $R = 5$. Xác định vị trí tương đối của các điểm sau đối với đường tròn $(O)$:
a) $A(3; 4)$.
b) $B(-2; 3)$.
c) $C(4; -4)$.

**Lời giải:**

Áp dụng công thức khoảng cách từ gốc tọa độ $O(0; 0)$ đến điểm $M(x; y)$: $OM = \sqrt{x^2 + y^2}$.

a) Khoảng cách $OA$:
$$OA = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$
Vì $OA = R = 5$, nên **điểm $A$ nằm trên đường tròn $(O)$**.

b) Khoảng cách $OB$:
$$OB = \sqrt{(-2)^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13}$$
Vì $13 < 25 \implies \sqrt{13} < 5 \implies OB < R$.
Vậy **điểm $B$ nằm bên trong đường tròn $(O)$**.

c) Khoảng cách $OC$:
$$OC = \sqrt{4^2 + (-4)^2} = \sqrt{16 + 16} = \sqrt{32}$$
Vì $32 > 25 \implies \sqrt{32} > 5 \implies OC > R$.
Vậy **điểm $C$ nằm bên ngoài đường tròn $(O)$**.

---

### Dạng 2: Chứng minh nhiều điểm cùng thuộc một đường tròn

**Phương pháp giải:**
Có hai cách tiếp cận chính:
- **Cách 1 (Theo định nghĩa):** Chỉ ra một điểm $O$ cố định cách đều tất cả các điểm đó ($OA = OB = OC = OD = \dots$).
- **Cách 2 (Theo định lý tam giác vuông):** Chứng minh các tam giác có chung cạnh huyền và cùng vuông tại các đỉnh đó (cùng nhìn một đoạn thẳng dưới góc $90^\circ$). Khi đó các đỉnh cùng thuộc đường tròn đường kính là cạnh huyền chung.

---

#### Bài toán 2:
Cho hình chữ nhật $ABCD$ có $AB = 8\text{ cm}$ và $BC = 6\text{ cm}$.
a) Chứng minh rằng bốn điểm $A, B, C, D$ cùng thuộc một đường tròn.
b) Xác định tâm và tính bán kính của đường tròn đó.

**Lời giải:**

a) Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$.
Theo tính chất của hình chữ nhật:
- Hai đường chéo bằng nhau: $AC = BD$.
- Hai đường chéo cắt nhau tại trung điểm của mỗi đường:
  $$OA = OC = \frac{AC}{2} \quad \text{và} \quad OB = OD = \frac{BD}{2}$$
Suy ra:
$$OA = OB = OC = OD = \frac{AC}{2}$$
Vì cả bốn điểm $A, B, C, D$ đều cách đều điểm $O$ một khoảng bằng nhau, nên bốn điểm $A, B, C, D$ **cùng thuộc một đường tròn tâm $O$**.

b) Xét tam giác $ABC$ vuông tại $B$. Áp dụng định lý Pythagoras:
$$AC = \sqrt{AB^2 + BC^2} = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = 10\text{ cm}$$
- **Tâm của đường tròn:** Là giao điểm $O$ của hai đường chéo $AC$ và $BD$.
- **Bán kính của đường tròn:**
  $$R = OA = \frac{AC}{2} = \frac{10}{2} = 5\text{ cm}$$

---

#### Bài toán 3 (Dạng góc vuông cùng nhìn một cạnh):
Cho tam giác nhọn $ABC$, các đường cao $BD$ và $CE$ cắt nhau tại $H$ ($D \in AC, E \in AB$). Chứng minh rằng:
a) Bốn điểm $B, E, D, C$ cùng thuộc một đường tròn. Xác định tâm của đường tròn đó.
b) Bốn điểm $A, E, H, D$ cùng thuộc một đường tròn.

**Lời giải:**

a) Ta có:
- $BD \perp AC \implies \widehat{BDC} = 90^\circ \implies \triangle BDC$ vuông tại $D$.
  Do đó $\triangle BDC$ nội tiếp đường tròn đường kính $BC$.
- $CE \perp AB \implies \widehat{BEC} = 90^\circ \implies \triangle BEC$ vuông tại $E$.
  Do đó $\triangle BEC$ nội tiếp đường tròn đường kính $BC$.
Từ đó suy ra bốn điểm $B, E, D, C$ cùng nằm trên đường tròn có **đường kính là $BC$** (tâm là trung điểm của cạnh $BC$).

b) Ta có:
- $\widehat{AEH} = 90^\circ$ (vì $CE \perp AB$) $\implies \triangle AEH$ vuông tại $E$, nội tiếp đường tròn đường kính $AH$.
- $\widehat{ADH} = 90^\circ$ (vì $BD \perp AC$) $\implies \triangle ADH$ vuông tại $D$, nội tiếp đường tròn đường kính $AH$.
Suy ra bốn điểm $A, E, H, D$ cùng thuộc đường tròn có **đường kính là $AH$** (tâm là trung điểm của đoạn thẳng $AH$).

---

### Dạng 3: Đường tròn ngoại tiếp tam giác đều và tam giác vuông

#### Bài toán 4:
a) Tính bán kính đường tròn ngoại tiếp một tam giác vuông có hai cạnh góc vuông dài $9\text{ cm}$ và $12\text{ cm}$.
b) Cho tam giác đều $ABC$ có cạnh bằng $a = 6\text{ cm}$. Tính bán kính đường tròn ngoại tiếp tam giác $ABC$.

**Lời giải:**

a) Gọi độ dài cạnh huyền của tam giác vuông là $c$. Áp dụng định lý Pythagoras:
$$c = \sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15\text{ cm}$$
Bán kính đường tròn ngoại tiếp tam giác vuông bằng nửa cạnh huyền:
$$R = \frac{c}{2} = \frac{15}{2} = 7,5\text{ cm}$$

b) Trong tam giác đều $ABC$, tâm đường tròn ngoại tiếp $O$ trùng với trọng tâm của tam giác.
Gọi $M$ là trung điểm cạnh $BC$. Chiều cao $AM$ là:
$$AM = AB \cdot \sin 60^\circ = 6 \cdot \frac{\sqrt{3}}{2} = 3\sqrt{3}\text{ cm}$$
Theo tính chất trọng tâm: Bán kính $R = OA = \frac{2}{3}AM$:
$$R = \frac{2}{3} \cdot 3\sqrt{3} = 2\sqrt{3}\text{ cm}$$

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Tầm Phủ Sóng Trạm Phát Di Động BTS (Cellular Coverage)
Các cột phát sóng di động 4G/5G phát sóng vô tuyến đẳng hướng ra xung quanh tạo thành một vùng phủ sóng hình tròn tâm $O$ (vị trí cột) bán kính $R \approx 1 - 3\text{ km}$. Điện thoại của bạn nhận được tín hiệu sóng khi và chỉ khi vị trí $M$ của bạn thỏa mãn bất đẳng thức $OM \le R$. Bằng cách giao thoa 3 vòng tròn trạm phát, điện thoại xác định được vị trí của bạn ngay cả khi mất sóng GPS.

---

### Chuyên đề 2: Tầm Chiếu Sáng Đèn Hải Đăng & Vùng Nguy Hiểm Đá Ngầm
Các ngọn hải đăng biển (như hải đăng Kê Gà, Vũng Tàu) có tầm chiếu sáng xa $R = 22\text{ hải lý}\ (\approx 40\text{ km})$. Vùng biển nguy hiểm có đá ngầm được đánh dấu trên hải đồ hàng hải bằng một đường tròn an toàn. Mọi thuyền trưởng phải lái tàu ở ngoài đường tròn bán kính an toàn ($d > R$) để không bị đâm vào bãi đá ngầm.

---

### Chuyên đề 3: Thiết Kế Bánh Răng Khớp Nối Truyền Động (Pitch Circle)
Trong hộp số ô tô và đồng hồ cơ: Hai bánh răng truyền lực cho nhau ăn khớp dọc theo một đường tròn lý tưởng gọi là **Đường tròn lăn cơ sở** (Pitch Circle). Bán kính của hai đường tròn này quyết định chính xác tỷ số truyền mô-men xoắn và tốc độ quay của bánh xe.

---

### Chuyên đề 4: Máy Gia Tốc Hạt Lớn LHC Tại CERN
Cỗ máy khoa học lớn nhất lịch sử loài người là Máy gia tốc hạt lớn LHC tại Thụy Sĩ, có cấu tạo là một đường hầm hình tròn chu vi $27\text{ km}$ ($R \approx 4,3\text{ km}$). Nhờ quỹ đạo tròn hoàn hảo được giữ bằng hàng nghìn nam châm siêu dẫn, các hạt proton được tăng tốc đạt $99,9999991\%$ tốc độ ánh sáng trước khi va chạm vào nhau để khám phá hạt Higgs bí ẩn.

---

### Chuyên đề 5: Vòng Tròn Sao Quanh Sao Bắc Cực Trong Thiên Văn Định Vị
Khi chụp ảnh bầu trời đêm với thời gian phơi sáng dài (Star Trails), ta thấy toàn bộ các vì sao trên bầu trời đều vạch nên những cung tròn đồng tâm hoàn hảo quay quanh Sao Bắc Cực (Polaris). Hiện tượng này chứng minh Trái Đất tự quay quanh trục Bắc - Nam, cung cấp chiếc compa định vị thiên văn tự nhiên dẫn đường cho các thủy thủ viễn dương suốt hàng nghìn năm.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Mở đầu về đường tròn (Toán 9 Bài 13)",
  "questions": [
    {
      "question": "Cho đường tròn (O; 4 cm). Điểm A cách O một khoảng OA = 5 cm. Vị trí của điểm A là:",
      "options": [
        "Nằm bên ngoài đường tròn",
        "Nằm bên trong đường tròn",
        "Nằm trên đường tròn",
        "Trùng với tâm O"
      ],
      "answer": 0,
      "hint": "So sánh OA với R: OA = 5 > R = 4.",
      "explanation": "Vì $OA = 5\\text{ cm} > R = 4\\text{ cm}$, nên điểm $A$ nằm bên ngoài đường tròn $(O)$."
    },
    {
      "question": "Khẳng định nào sau đây là ĐÚNG về tính đối xứng của đường tròn?",
      "options": [
        "Đường tròn có 1 tâm đối xứng và vô số trục đối xứng",
        "Đường tròn có vô số tâm đối xứng và 1 trục đối xứng",
        "Đường tròn chỉ có 2 trục đối xứng vuông góc",
        "Đường tròn không có tâm đối xứng"
      ],
      "answer": 0,
      "hint": "Tâm O là tâm đối xứng duy nhất; mọi đường thẳng qua tâm đều là trục đối xứng.",
      "explanation": "Đường tròn có đúng một tâm đối xứng (chính là tâm $O$) và có vô số trục đối xứng (bất kỳ đường thẳng nào đi qua tâm)."
    },
    {
      "question": "Qua 3 điểm không thẳng hàng, vẽ được bao nhiêu đường tròn?",
      "options": [
        "Duy nhất 1 đường tròn",
        "Vô số đường tròn",
        "2 đường tròn",
        "Không vẽ được đường tròn nào"
      ],
      "answer": 0,
      "hint": "Định lý: Qua 3 điểm không thẳng hàng vẽ được một và chỉ một đường tròn.",
      "explanation": "Theo định lý: Qua 3 điểm không thẳng hàng luôn vẽ được duy nhất 1 đường tròn (tâm là giao điểm 3 đường trung trực)."
    },
    {
      "question": "Tâm đường tròn ngoại tiếp tam giác vuông là:",
      "options": [
        "Trung điểm cạnh huyền",
        "Trọng tâm tam giác",
        "Trực tâm tam giác",
        "Điểm nằm ngoài tam giác"
      ],
      "answer": 0,
      "hint": "Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền, bán kính R = cạnh huyền / 2.",
      "explanation": "Trong tam giác vuông, tâm của đường tròn ngoại tiếp luôn là trung điểm của cạnh huyền."
    },
    {
      "question": "Cho tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Bán kính đường tròn ngoại tiếp tam giác ABC là:",
      "options": [
        "5 cm",
        "10 cm",
        "7 cm",
        "4 cm"
      ],
      "answer": 0,
      "hint": "Cạnh huyền BC = sqrt(6^2 + 8^2) = 10 cm => R = BC / 2 = 5 cm.",
      "explanation": "Cạnh huyền $BC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Bán kính đường tròn ngoại tiếp là $R = \\frac{BC}{2} = 5\\text{ cm}$."
    },
    {
      "question": "Cho đoạn thẳng AB dài 8 cm. Tập hợp các điểm M nhìn đoạn thẳng AB dưới một góc 90° là:",
      "options": [
        "Đường tròn đường kính AB (trừ hai điểm A và B)",
        "Đoạn thẳng trung trực của AB",
        "Đường tròn tâm A bán kính 8 cm",
        "Toàn bộ mặt phẳng"
      ],
      "answer": 0,
      "hint": "Theo định lý Thales, góc nội tiếp nhìn đường kính AB luôn bằng 90°.",
      "explanation": "Tập hợp các điểm $M$ nhìn đoạn thẳng $AB$ dưới góc $90^\\circ$ là đường tròn có đường kính là $AB$ (bỏ đi hai điểm mút $A$ và $B$)."
    },
    {
      "question": "Cho hình vuông ABCD cạnh a. Bán kính đường tròn ngoại tiếp hình vuông ABCD bằng:",
      "options": [
        "a*căn(2)/2",
        "a*căn(2)",
        "a/2",
        "a"
      ],
      "answer": 0,
      "hint": "Đường chéo d = a*sqrt(2). Bán kính R = d / 2 = a*sqrt(2)/2.",
      "explanation": "Đường chéo hình vuông là $AC = a\\sqrt{2}$. Tâm đường tròn là giao điểm hai đường chéo, bán kính $R = \\frac{AC}{2} = \\frac{a\\sqrt{2}}{2}$."
    },
    {
      "question": "Cho tam giác đều ABC cạnh 3 cm. Bán kính đường tròn ngoại tiếp tam giác ABC là:",
      "options": [
        "căn(3) cm",
        "2*căn(3) cm",
        "1,5 cm",
        "3*căn(3) cm"
      ],
      "answer": 0,
      "hint": "Chiều cao h = 3*sqrt(3)/2. R = (2/3)h = (2/3) * (3*sqrt(3)/2) = sqrt(3) cm.",
      "explanation": "Chiều cao $h = \\frac{3\\sqrt{3}}{2}\\text{ cm}$. Bán kính đường tròn ngoại tiếp là $R = \\frac{2}{3}h = \\sqrt{3}\\text{ cm}$."
    },
    {
      "question": "Cho đường tròn (O; R). Một dây cung MN có độ dài lớn nhất khi:",
      "options": [
        "Dây MN đi qua tâm O (là đường kính)",
        "Dây MN vuông góc với bán kính",
        "Dây MN bằng R",
        "Dây MN cách tâm O một khoảng bằng R/2"
      ],
      "answer": 0,
      "hint": "Đường kính là dây lớn nhất của đường tròn: MN <= 2R.",
      "explanation": "Trong một đường tròn, đường kính là dây lớn nhất. Độ dài lớn nhất của dây cung là $2R$ khi dây cung đi qua tâm $O$."
    },
    {
      "question": "Một trạm radar kiểm soát không lưu có tầm quét 150 km. Một máy bay cách trạm radar 120 km. Máy bay đó nằm ở đâu so với vùng quét radar?",
      "options": [
        "Nằm bên trong vùng quét của radar",
        "Nằm trên ranh giới vùng quét",
        "Nằm bên ngoài vùng quét",
        "Không thể xác định"
      ],
      "answer": 0,
      "hint": "Khoảng cách d = 120 km < R = 150 km => Nằm bên trong.",
      "explanation": "Vì khoảng cách từ máy bay đến trạm radar là $120\\text{ km} < 150\\text{ km}$ (bán kính vùng quét), nên máy bay nằm bên trong vùng phát hiện của radar."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Vị trí của điểm đối với đường tròn
Trong mặt phẳng tọa độ $Oxy$, cho đường tròn $(O; \sqrt{13})$ với tâm $O(0; 0)$. Xác định vị trí của các điểm sau đối với đường tròn:
$M(2; 3), \quad N(1; -3), \quad P(-3; -2), \quad Q(4; 0)$.

### Bài 2: Chứng minh bốn điểm cùng thuộc một đường tròn
Cho hình thang cân $ABCD$ ($AB \parallel CD$) có hai đường chéo vuông góc với nhau tại $I$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$.
a) Chứng minh rằng tứ giác $MNPQ$ là hình vuông.
b) Chứng minh bốn điểm $M, N, P, Q$ cùng thuộc một đường tròn.

### Bài 3: Đường tròn ngoại tiếp tam giác
Cho tam giác $ABC$ cân tại $A$, có $BC = 12\text{ cm}$ và chiều cao $AH = 8\text{ cm}$.
a) Tính độ dài cạnh bên $AB$.
b) Tính bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.
*(Gợi ý: Gọi $O$ là tâm đường tròn ngoại tiếp nằm trên đường thẳng $AH$. Đặt $OA = OB = R$, xét tam giác vuông $OBH$).*

### Bài 4 (Thử thách thực tế):
Một nhóm khảo sát muốn xây dựng một trạm cứu hỏa trung tâm để phục vụ cứu nạn cho ba ngôi làng $A, B, C$. Trên bản đồ, ba ngôi làng tạo thành một tam giác có $AB = 6\text{ km}, AC = 8\text{ km}$ và $BC = 10\text{ km}$.
a) Vị trí đặt trạm cứu hỏa ở đâu để khoảng cách từ trạm cứu hỏa đến ba ngôi làng là bằng nhau?
b) Khoảng cách từ trạm cứu hỏa đến mỗi ngôi làng là bao nhiêu kilômét?
