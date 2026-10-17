---
title: 'Toán 8 Bài 35: Định lí Pythagore và ứng dụng'
description: 'Làm chủ Định lí Pythagore Toán 8 Bài 35: Định lí thuận tính cạnh huyền, định lí đảo kiểm tra góc vuông, các bộ ba số Pythagore nguyên, ứng dụng đo đạc thực tế, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Định lí Pythagore
  - Tam giác vuông
  - Bộ ba Pythagore
  - Định lí Pythagore đảo
  - Kết nối tri thức
grade: 8
---

# Bài 35. Định lí Pythagore và ứng dụng

Khoảng năm 530 trước Công nguyên, nhà triết học và toán học vĩ đại người Hy Lạp **Pythagore** (Pi-ta-go) đã khám phá ra một trong những định luật bất hủ và nổi tiếng nhất trong lịch sử nhân loại: **Định lí Pythagore**.

Tương truyền, khi chứng minh được rằng trong mọi tam giác vuông, diện tích hình vuông dựng trên cạnh huyền luôn bằng chính xác tổng diện tích hai hình vuông dựng trên hai cạnh góc vuông, Pythagore đã xúc động đến mức dâng tế một trăm con bò để tạ ơn các vị thần!

Hơn $2500$ năm trôi qua, định lí Pythagore không chỉ là kiến thức toán học đẹp đẽ mà còn là chiếc chìa khóa nền tảng trong cuộc sống hiện đại:
- Các bác thợ xây dùng "quy tắc 3 - 4 - 5" để gióng móng nhà vuông góc chuẩn xác từng milimét.
- Kích thước màn hình tivi, máy tính, smartphone được tính theo độ dài đường chéo Pythagore (tính bằng inch).
- Hệ thống định vị vệ tinh GPS, bản đồ Google Maps, công nghệ đo trắc địa hàng không đều dựa trên công thức khoảng cách Pythagore để dẫn đường cho hàng triệu chuyến bay mỗi ngày.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 35: ĐỊNH LÍ PYTHAGORE</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định lí thuận</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\triangle ABC$ vuông tại $A$:<br>$$BC^2 = AB^2 + AC^2$$<br>hay $a^2 + b^2 = c^2$.<br>• Dùng để <strong>tính độ dài một cạnh</strong> khi biết 2 cạnh kia.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lí đảo</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $\triangle ABC$ có:<br>$$BC^2 = AB^2 + AC^2$$<br>$\implies \triangle ABC$ <strong>vuông tại $A$</strong>.<br>• Công cụ nhận biết <strong>góc vuông</strong> không cần ê-ke.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Bộ ba số Pythagore</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bộ ba số nguyên dương $(a, b, c)$ thỏa mãn $a^2 + b^2 = c^2$.<br>• Kinh điển: $(3, 4, 5)$, $(5, 12, 13)$, $(6, 8, 10)$, $(7, 24, 25)$, $(8, 15, 17)$, $(9, 40, 41)$, $(20, 21, 29)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng thực tiễn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đo gián tiếp khoảng cách thực tế.<br>• Tính đường chéo hình chữ nhật, hình vuông ($d = a\sqrt{2}$).<br>• Công thức khoảng cách phẳng: $d = \sqrt{\Delta x^2 + \Delta y^2}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tính cạnh huyền:** Tam giác vuông có hai cạnh góc vuông là $3\text{ cm}$ và $4\text{ cm}$. Độ dài cạnh huyền bằng bao nhiêu?
2. **Tính cạnh góc vuông:** Tam giác vuông có cạnh huyền $13\text{ cm}$ và một cạnh góc vuông $12\text{ cm}$. Cạnh góc vuông còn lại dài bao nhiêu?
3. **Phản xạ đảo:** Tam giác có ba cạnh dài $6\text{ cm}, 8\text{ cm}, 10\text{ cm}$ có phải là tam giác vuông không? Góc vuông nằm đối diện cạnh nào?
4. **Đường chéo hình vuông:** Một hình vuông có cạnh bằng $5\text{ cm}$. Độ dài đường chéo của hình vuông đó bằng bao nhiêu?
5. **Đường chéo màn hình:** Một màn hình máy tính có chiều rộng $16\text{ inch}$ và chiều cao $12\text{ inch}$. Đường chéo của màn hình đó dài bao nhiêu inch?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $c = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5\text{ cm}$.
> 2. $b = \sqrt{13^2 - 12^2} = \sqrt{169 - 144} = \sqrt{25} = 5\text{ cm}$.
> 3. Ta có $6^2 + 8^2 = 36 + 64 = 100 = 10^2 \implies$ **Là tam giác vuông** theo định lí Pythagore đảo. Góc vuông đối diện với cạnh huyền dài nhất ($10\text{ cm}$).
> 4. Đường chéo $d = \sqrt{5^2 + 5^2} = \sqrt{50} = 5\sqrt{2}\text{ cm}$.
> 5. $d = \sqrt{16^2 + 12^2} = \sqrt{256 + 144} = \sqrt{400} = 20\text{ inch}$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Định lí Pythagore thuận

> [!IMPORTANT]
> **ĐỊNH LÍ PYTHAGORE:**
> Trong một tam giác vuông, bình phương của cạnh huyền bằng tổng các bình phương của hai cạnh góc vuông.
> 
> Trong tam giác $ABC$ vuông tại $A$:
> $$BC^2 = AB^2 + AC^2$$
> Kí hiệu độ dài các cạnh đối diện các đỉnh tương ứng là $a, b, c$:
> $$a^2 = b^2 + c^2$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Minh họa Định lí Pythagore">
    <!-- Tam giác vuông ABC -->
    <polygon points="180,180 180,60 340,180" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2.5" />
    <!-- Kí hiệu góc vuông tại A (180,180) -->
    <rect x="180" y="162" width="18" height="18" fill="none" stroke="#ef4444" stroke-width="2" />
    <!-- Đỉnh A -->
    <circle cx="180" cy="180" r="4" fill="#1e293b" />
    <text x="160" y="195" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">A</text>
    <!-- Đỉnh B -->
    <circle cx="180" cy="60" r="4" fill="#1e293b" />
    <text x="165" y="55" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">B</text>
    <!-- Đỉnh C -->
    <circle cx="340" cy="180" r="4" fill="#1e293b" />
    <text x="350" y="195" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">C</text>
    <!-- Nhãn các cạnh -->
    <text x="150" y="125" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563eb">c</text>
    <text x="250" y="200" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563eb">b</text>
    <text x="270" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ef4444">a (cạnh huyền)</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Trong tam giác vuông ABC, cạnh huyền a thỏa mãn: a² = b² + c²</em></p>
</div>

**Công thức suy ra để tính các cạnh:**
- Tính cạnh huyền: $a = \sqrt{b^2 + c^2}$
- Tính cạnh góc vuông: $b = \sqrt{a^2 - c^2}$ và $c = \sqrt{a^2 - b^2}$

---

### 2. Định lí Pythagore đảo

> [!IMPORTANT]
> **ĐỊNH LÍ PYTHAGORE ĐẢO:**
> Nếu một tam giác có bình phương của một cạnh bằng tổng các bình phương của hai cạnh kia thì tam giác đó là **tam giác vuông**.
> 
> Trong tam giác $ABC$, nếu:
> $$BC^2 = AB^2 + AC^2 \implies \widehat{BAC} = 90^\circ\quad (\triangle ABC\text{ vuông tại } A)$$

**Quy trình kiểm tra một tam giác có vuông hay không:**
1. Xác định cạnh có độ dài lớn nhất (gọi là $c$).
2. Tính bình phương cạnh lớn nhất: $c^2$.
3. Tính tổng bình phương hai cạnh còn lại: $a^2 + b^2$.
4. So sánh:
   - Nếu $c^2 = a^2 + b^2 \implies$ Tam giác vuông tại đỉnh đối diện với cạnh $c$.
   - Nếu $c^2 \neq a^2 + b^2 \implies$ Tam giác **không vuông** (nếu $c^2 > a^2 + b^2$ thì tam giác tù; nếu $c^2 < a^2 + b^2$ thì tam giác nhọn).

---

### 3. Các bộ ba số Pythagore nguyên (Pythagorean Triples)

Một bộ ba số nguyên dương $(a, b, c)$ thỏa mãn $a^2 + b^2 = c^2$ được gọi là một **bộ ba số Pythagore**:

| Bộ ba cơ sở | Bộ ba nhân lên gấp $2, 3, \dots$ | Kiểm tra bình phương |
| :--- | :--- | :--- |
| **$(3, 4, 5)$** | $(6, 8, 10),\ (9, 12, 15),\ (12, 16, 20)$ | $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ |
| **$(5, 12, 13)$** | $(10, 24, 26),\ (15, 36, 39)$ | $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ |
| **$(7, 24, 25)$** | $(14, 48, 50)$ | $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ |
| **$(8, 15, 17)$** | $(16, 30, 34)$ | $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ |
| **$(9, 40, 41)$** | $(18, 80, 82)$ | $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ |
| **$(20, 21, 29)$** | $(40, 42, 58)$ | $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ |

*Ghi nhớ các bộ ba này giúp các em giải trắc nghiệm chỉ trong 3 giây mà không cần bấm máy tính!*

---

## Ứng dụng Tương tác Trực quan

### Khám phá Hình học: Cân bằng Diện tích $a^2 + b^2 = c^2$

Kéo thanh trượt để thay đổi hai cạnh góc vuông $a$ và $b$. Hệ thống sẽ tự động vẽ tam giác vuông, tính toán diện tích 3 hình vuông dựng trên 3 cạnh và kiểm tra bộ ba số Pythagore:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: ĐỊNH LÍ PYTHAGORE HÌNH HỌC</h4>

  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 500px; margin: 0 auto 16px auto;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <label for="slider-a" style="font-weight: bold; min-width: 130px; font-size: 0.95em;">Cạnh góc vuông a:</label>
      <input type="range" id="slider-a" min="3" max="12" step="1" value="6" style="flex: 1;" oninput="updatePythagoras()">
      <span id="val-a" style="font-weight: bold; color: #2563eb; width: 35px; text-align: right;">6</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <label for="slider-b" style="font-weight: bold; min-width: 130px; font-size: 0.95em;">Cạnh góc vuông b:</label>
      <input type="range" id="slider-b" min="3" max="12" step="1" value="8" style="flex: 1;" oninput="updatePythagoras()">
      <span id="val-b" style="font-weight: bold; color: #10b981; width: 35px; text-align: right;">8</span>
    </div>
  </div>

  <div style="text-align: center; margin: 16px 0;">
    <svg data-interactive-done="true" id="pyth-svg" viewBox="0 0 540 230" style="width: 100%; max-width: 540px; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
      <!-- Tam giác vuông trung tâm -->
      <polygon id="pyth-tri" points="160,170 160,60 300,170" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2.5" />
      <rect x="160" y="152" width="18" height="18" fill="none" stroke="#ef4444" stroke-width="2" />
      
      <!-- Đỉnh -->
      <text x="140" y="185" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">A</text>
      <text id="pt-b-lbl" x="140" y="55" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">B</text>
      <text id="pt-c-lbl" x="310" y="185" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">C</text>

      <!-- Nhãn số đo -->
      <text id="lbl-side-a" x="120" y="115" font-family="sans-serif" font-weight="bold" font-size="13" fill="#2563eb">a = 6</text>
      <text id="lbl-side-b" x="220" y="195" font-family="sans-serif" font-weight="bold" font-size="13" fill="#10b981">b = 8</text>
      <text id="lbl-side-c" x="245" y="105" font-family="sans-serif" font-weight="bold" font-size="13" fill="#ef4444">c = 10</text>
    </svg>
  </div>

  <div id="pyth-calc-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 0.95em; line-height: 1.8;">
    Đang tính toán...
  </div>
</div>

<script>
function updatePythagoras() {
  var a = parseInt(document.getElementById('slider-a').value);
  var b = parseInt(document.getElementById('slider-b').value);
  document.getElementById('val-a').innerText = a;
  document.getElementById('val-b').innerText = b;

  var a2 = a * a;
  var b2 = b * b;
  var c2 = a2 + b2;
  var c = Math.sqrt(c2);
  var isInteger = Number.isInteger(c);

  // Vẽ hình tam giác với tỉ lệ hiển thị
  var scale = 11;
  var ox = 160, oy = 170;
  var bx = ox, by = oy - (a * scale);
  var cx = ox + (b * scale), cy = oy;

  var tri = document.getElementById('pyth-tri');
  if (tri) {
    tri.setAttribute('points', ox + ',' + oy + ' ' + bx + ',' + by + ' ' + cx + ',' + cy);
  }

  var bLbl = document.getElementById('pt-b-lbl');
  if (bLbl) { bLbl.setAttribute('y', (by - 8)); }
  var cLbl = document.getElementById('pt-c-lbl');
  if (cLbl) { cLbl.setAttribute('x', (cx + 8)); }

  var sideA = document.getElementById('lbl-side-a');
  if (sideA) { sideA.setAttribute('y', ((oy + by)/2)); sideA.textContent = "a = " + a; }
  var sideB = document.getElementById('lbl-side-b');
  if (sideB) { sideB.setAttribute('x', ((ox + cx)/2 - 15)); sideB.textContent = "b = " + b; }
  var sideC = document.getElementById('lbl-side-c');
  if (sideC) {
    sideC.setAttribute('x', ((bx + cx)/2 + 10));
    sideC.setAttribute('y', ((by + cy)/2 - 10));
    sideC.textContent = "c = " + (isInteger ? c : c.toFixed(2));
  }

  var calcBox = document.getElementById('pyth-calc-box');
  if (calcBox) {
    calcBox.innerHTML = 
      '<strong>Kết quả tính toán theo Định lí Pythagore:</strong><br>' +
      '• Bình phương các cạnh: $a^2 = ' + a + '^2 = ' + a2 + '$, $b^2 = ' + b + '^2 = ' + b2 + '$.<br>' +
      '• Tổng diện tích hai hình vuông góc: $a^2 + b^2 = ' + a2 + ' + ' + b2 + ' = ' + c2 + '$.<br>' +
      '• Cạnh huyền: $c = \\sqrt{' + c2 + '} ' + (isInteger ? '= ' + c : '\\approx ' + c.toFixed(2)) + '$.<br>' +
      (isInteger ? '🎉 <strong>Tuyệt vời!</strong> $(' + a + ', ' + b + ', ' + c + ')$ là một <strong>bộ ba số Pythagore nguyên</strong>!' : '<em>($' + c2 + '$ không phải số chính phương, cạnh huyền là số vô tỉ $\\sqrt{' + c2 + '}$)</em>');
  }
}
const __initApp = function() {
  updatePythagoras();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính độ dài cạnh của tam giác vuông

**Phương pháp giải:**
- Xác định rõ cạnh nào là cạnh huyền (đối diện góc $90^\circ$), cạnh nào là hai cạnh góc vuông.
- Nếu tính cạnh huyền: $c = \sqrt{a^2 + b^2}$.
- Nếu tính cạnh góc vuông: $a = \sqrt{c^2 - b^2}$.

---

#### Bài toán 1:
Cho tam giác $ABC$ vuông tại $A$.
a) Cho biết $AB = 9\text{ cm}, AC = 12\text{ cm}$. Tính độ dài cạnh huyền $BC$.
b) Cho biết $BC = 25\text{ cm}, AB = 7\text{ cm}$. Tính độ dài cạnh góc vuông $AC$.
c) Kẻ đường cao $AH$ vuông góc với $BC$ ($H \in BC$). Cho biết $AB = 15\text{ cm}, BH = 9\text{ cm}$. Tính độ dài $AH$ và $HC$.

**Lời giải:**

a) Áp dụng định lí Pythagore trong $\triangle ABC$ vuông tại $A$:
$$BC^2 = AB^2 + AC^2 = 9^2 + 12^2 = 81 + 144 = 225$$
Suy ra:
$$BC = \sqrt{225} = 15\text{ cm}$$

b) Áp dụng định lí Pythagore trong $\triangle ABC$ vuông tại $A$:
$$BC^2 = AB^2 + AC^2 \implies AC^2 = BC^2 - AB^2 = 25^2 - 7^2 = 625 - 49 = 576$$
Suy ra:
$$AC = \sqrt{576} = 24\text{ cm}$$

c)
- Xét $\triangle ABH$ vuông tại $H$:
  Áp dụng định lí Pythagore:
  $$AB^2 = AH^2 + BH^2 \implies AH^2 = AB^2 - BH^2 = 15^2 - 9^2 = 225 - 81 = 144$$
  Suy ra:
  $$AH = \sqrt{144} = 12\text{ cm}$$
- Áp dụng hệ thức lượng hoặc tam giác đồng dạng $\triangle ABH \backsim \triangle CAH$ (g-g):
  $$\frac{AH}{CH} = \frac{BH}{AH} \implies AH^2 = BH \cdot CH \implies 144 = 9 \cdot CH \implies CH = \frac{144}{9} = 16\text{ cm}$$

---

### Dạng 2: Kiểm tra tam giác có vuông hay không (Định lí đảo)

**Phương pháp giải:**
1. Lấy độ dài lớn nhất bình phương lên.
2. Lấy hai độ dài nhỏ hơn bình phương rồi cộng lại.
3. So sánh hai kết quả:
   - Bằng nhau $\implies$ Tam giác vuông.
   - Khác nhau $\implies$ Tam giác không vuông.

---

#### Bài toán 2:
Trong các tam giác có kích thước ba cạnh dưới đây, tam giác nào là tam giác vuông? Nếu vuông, hãy chỉ rõ vuông tại đỉnh nào:
a) $MNP$ có $MN = 11\text{ cm}, NP = 60\text{ cm}, PM = 61\text{ cm}$.
b) $DEF$ có $DE = 8\text{ cm}, EF = 10\text{ cm}, FD = 13\text{ cm}$.
c) $XYZ$ có $XY = 20\text{ cm}, YZ = 21\text{ cm}, ZX = 29\text{ cm}$.

**Lời giải:**

a) Cạnh lớn nhất là $PM = 61\text{ cm}$.
- Bình phương cạnh lớn nhất: $PM^2 = 61^2 = 3721$.
- Tổng bình phương hai cạnh còn lại:
  $$MN^2 + NP^2 = 11^2 + 60^2 = 121 + 3600 = 3721$$
Vì $PM^2 = MN^2 + NP^2 = 3721$, theo định lí Pythagore đảo:
$\triangle MNP$ là **tam giác vuông tại $N$** (đỉnh đối diện cạnh huyền $PM$).

b) Cạnh lớn nhất là $FD = 13\text{ cm}$.
- Bình phương cạnh lớn nhất: $FD^2 = 13^2 = 169$.
- Tổng bình phương hai cạnh còn lại:
  $$DE^2 + EF^2 = 8^2 + 10^2 = 64 + 100 = 164$$
Vì $FD^2 \neq DE^2 + EF^2$ ($169 \neq 164$), nên:
$\triangle DEF$ **không phải là tam giác vuông** (vì $FD^2 > DE^2 + EF^2$ nên đây là tam giác tù).

c) Cạnh lớn nhất là $ZX = 29\text{ cm}$.
- Bình phương cạnh lớn nhất: $ZX^2 = 29^2 = 841$.
- Tổng bình phương hai cạnh còn lại:
  $$XY^2 + YZ^2 = 20^2 + 21^2 = 400 + 441 = 841$$
Vì $ZX^2 = XY^2 + YZ^2 = 841$, theo định lí Pythagore đảo:
$\triangle XYZ$ là **tam giác vuông tại $Y$** (đỉnh đối diện cạnh huyền $ZX$).

---

### Dạng 3: Tính đường chéo và các yếu tố trong hình chữ nhật, hình thoi, hình thang cân

**Phương pháp giải:**
Chia hình phẳng thành các tam giác vuông bằng cách kẻ đường chéo hoặc đường cao, sau đó áp dụng định lí Pythagore.

---

#### Bài toán 3:
a) Một hình chữ nhật có chu vi bằng $28\text{ cm}$ và chiều dài hơn chiều rộng $2\text{ cm}$. Tính độ dài đường chéo của hình chữ nhật đó.
b) Cho hình thoi $ABCD$ có hai đường chéo $AC = 16\text{ cm}$ và $BD = 12\text{ cm}$. Tính chu vi của hình thoi.
c) Cho hình thang cân $ABCD$ ($AB \parallel CD$) có $AB = 10\text{ cm}, CD = 26\text{ cm}$ và cạnh bên $AD = 17\text{ cm}$. Tính diện tích hình thang cân đó.

**Lời giải:**

a) Nửa chu vi hình chữ nhật là:
$$28 : 2 = 14\text{ cm}$$
Chiều dài hình chữ nhật là:
$$(14 + 2) : 2 = 8\text{ cm}$$
Chiều rộng hình chữ nhật là:
$$14 - 8 = 6\text{ cm}$$
Áp dụng định lí Pythagore cho tam giác vuông tạo bởi chiều dài, chiều rộng và đường chéo $d$:
$$d^2 = 8^2 + 6^2 = 64 + 36 = 100 \implies d = \sqrt{100} = 10\text{ cm}$$

b) Gọi $O$ là giao điểm hai đường chéo của hình thoi $ABCD$.
Vì hai đường chéo của hình thoi vuông góc với nhau tại trung điểm của mỗi đường nên:
- $AC \perp BD$ tại $O$.
- $OA = \frac{AC}{2} = \frac{16}{2} = 8\text{ cm}$.
- $OB = \frac{BD}{2} = \frac{12}{2} = 6\text{ cm}$.
Áp dụng định lí Pythagore trong $\triangle OAB$ vuông tại $O$:
$$AB^2 = OA^2 + OB^2 = 8^2 + 6^2 = 64 + 36 = 100 \implies AB = 10\text{ cm}$$
Chu vi hình thoi $ABCD$ là:
$$P = 4 \cdot AB = 4 \cdot 10 = 40\text{ cm}$$

c) Kẻ hai đường cao $AH \perp CD$ và $BK \perp CD$ ($H, K \in CD$).
Vì $ABCD$ là hình thang cân nên:
$$DH = KC = \frac{CD - AB}{2} = \frac{26 - 10}{2} = \frac{16}{2} = 8\text{ cm}$$
Xét tam giác vuông $ADH$ vuông tại $H$:
$$AH^2 = AD^2 - DH^2 = 17^2 - 8^2 = 289 - 64 = 225 \implies AH = \sqrt{225} = 15\text{ cm}$$
Diện tích hình thang cân $ABCD$ là:
$$S = \frac{(AB + CD) \cdot AH}{2} = \frac{(10 + 26) \cdot 15}{2} = \frac{36 \cdot 15}{2} = 270\text{ cm}^2$$

---

### Dạng 4: Bài toán thực tế ứng dụng định lí Pythagore

**Phương pháp giải:**
1. Mô hình hóa bài toán thực tế thành một tam giác vuông trong hình học phẳng.
2. Gán các số đo thực tế vào các cạnh của tam giác vuông.
3. Vận dụng định lí Pythagore để tìm cạnh chưa biết và trả lời đúng đơn vị của đề bài.

---

#### Bài toán 4:
Một chiếc thang dài $5\text{ m}$ được đặt dựa vào bức tường thẳng đứng. Chân thang cách chân tường $1.4\text{ m}$.
a) Đầu trên của chiếc thang chạm vào bức tường ở độ cao bao nhiêu mét so với mặt đất?
b) Để đảm bảo an toàn lao động, người ta kéo chân thang ra xa chân tường thêm $1.6\text{ m}$ nữa (tổng khoảng cách thành $3\text{ m}$). Hỏi khi đó đầu trên của thang đã bị tụt xuống bao nhiêu mét?

**Lời giải:**

a) Gọi chiếc thang là cạnh huyền $BC = 5\text{ m}$.
Khoảng cách từ chân thang đến chân tường là cạnh góc vuông $AB = 1.4\text{ m}$.
Độ cao đầu thang chạm tường là cạnh góc vuông $AC$.
Áp dụng định lí Pythagore trong tam giác vuông $ABC$:
$$AC^2 = BC^2 - AB^2 = 5^2 - (1.4)^2 = 25 - 1.96 = 23.04$$
Suy ra:
$$AC = \sqrt{23.04} = 4.8\text{ m}$$
Vậy đầu trên chiếc thang cách mặt đất $4.8\text{ m}$.

b) Khi kéo chân thang ra xa thêm $1.6\text{ m}$, khoảng cách mới từ chân thang đến chân tường là:
$$AB' = 1.4 + 1.6 = 3\text{ m}$$
Vì chiều dài chiếc thang không đổi nên cạnh huyền $B'C' = 5\text{ m}$.
Độ cao mới của đầu thang là $AC'$:
$$AC'^2 = B'C'^2 - AB'^2 = 5^2 - 3^2 = 25 - 9 = 16 \implies AC' = \sqrt{16} = 4\text{ m}$$
Độ cao đầu trên của thang bị tụt xuống là:
$$AC - AC' = 4.8 - 4 = 0.8\text{ m}$$
Vậy đầu trên của chiếc thang đã bị tụt xuống $0.8\text{ m}$ (hay $80\text{ cm}$).

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Quy tắc "3 - 4 - 5" trong Kỹ thuật Xây dựng Nhà ở
Từ thời Ai Cập cổ đại cho đến các công trường xây dựng hiện đại ngày nay:
- Để đảm bảo góc tường phòng khách hoặc móng nhà vuông vắn $90^\circ$, thợ xây dùng một sợi dây chia thành $12$ đoạn bằng nhau.
- Căng sợi dây thành tam giác có các cạnh lần lượt là $3$ mét, $4$ mét và $5$ mét. Theo định lí Pythagore đảo ($3^2 + 4^2 = 5^2$), góc kẹp giữa hai cạnh $3\text{ m}$ và $4\text{ m}$ chắc chắn là góc vuông hoàn hảo!

### 2. Định dạng Tỉ lệ Màn hình Tivi & Smartphone (Kích thước Inch)
Khi một hãng quảng cáo tivi $55\text{ inch}$ hay điện thoại $6.7\text{ inch}$:
- Con số đó chính là độ dài **đường chéo màn hình** $d$, được tính bằng định lí Pythagore từ chiều rộng $w$ và chiều cao $h$:
  $$d = \sqrt{w^2 + h^2}$$
- Đối với màn hình tỉ lệ chuẩn điện ảnh $16:9$, nhà sản xuất áp dụng tỉ lệ Pythagore để thiết kế viền máy vừa vặn với tầm tay người dùng.

### 3. Công thức Khoảng cách Euclidean trong Trí tuệ Nhân tạo (Machine Learning)
Trong các thuật toán trí tuệ nhân tạo như phân cụm K-Means hay phân loại ảnh khuôn mặt:
- Máy tính so sánh sự giống nhau giữa hai bức ảnh bằng cách tính **khoảng cách Euclid** giữa hai điểm dữ liệu trong không gian $n$ chiều:
  $$d(P, Q) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + \dots + (z_2 - z_1)^2}$$
- Đây chính là sự mở rộng trực tiếp của Định lí Pythagore phẳng lên không gian đa chiều!

### 4. Dây Néo Cột Phát sóng Viễn thông $5G$
Các tháp truyền hình và cột thu phát sóng $5G$ cao hàng trăm mét cần các dây cáp thép néo giữ để không bị quật đổ trong bão cấp 12:
- Chiều dài của dây néo cáp thép $c$ được các kỹ sư tính toán dựa trên chiều cao tháp $h$ và khoảng cách từ gốc tháp đến điểm chôn cọc neo $d$:
  $$c = \sqrt{h^2 + d^2}$$
- Nhờ công thức này, độ căng dây và tải trọng chịu gió được tối ưu hóa, đảm bảo an toàn tuyệt đối cho người dân xung quanh.

### 5. Định vị Tọa độ Tàu thuyền & Hàng hải Hiện đại
Khi một chiếc tàu cứu nạn xuất phát từ hải cảng chạy về hướng Đông $30\text{ hải lý}$, sau đó chuyển hướng chạy thẳng về hướng Bắc $40\text{ hải lý}$:
- Thuyền trưởng không cần đi ngược lại đường cũ mà cho tàu chạy thẳng về cảng theo đường chéo cạnh huyền:
  $$d = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = 50\text{ hải lý}$$
- Nhờ định lí Pythagore, hải trình được rút ngắn $20\text{ hải lý}$, tiết kiệm hàng ngàn lít dầu và hàng giờ cứu hộ quý báu!

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Định lí Pythagore áp dụng cho loại tam giác nào sau đây?",
  "options": [
    "Tam giác nhọn",
    "Tam giác tù",
    "Tam giác vuông",
    "Mọi loại tam giác bất kì"
  ],
  "answer": 2,
  "explanation": "Định lí Pythagore chỉ áp dụng cho tam giác vuông: bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho tam giác ABC vuông tại A có AB = 5 cm, AC = 12 cm. Độ dài cạnh huyền BC là:",
  "options": [
    "13 cm",
    "17 cm",
    "7 cm",
    "169 cm"
  ],
  "answer": 0,
  "explanation": "Theo định lí Pythagore: BC^2 = AB^2 + AC^2 = 5^2 + 12^2 = 25 + 144 = 169 ⇒ BC = 13 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tam giác DEF vuông tại D có EF = 10 cm, DE = 6 cm. Độ dài cạnh DF là:",
  "options": [
    "16 cm",
    "8 cm",
    "4 cm",
    "64 cm"
  ],
  "answer": 1,
  "explanation": "DF^2 = EF^2 - DE^2 = 10^2 - 6^2 = 100 - 36 = 64 ⇒ DF = 8 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Bộ ba số nào sau đây KHÔNG PHẢI là một bộ ba số Pythagore?",
  "options": [
    "3, 4, 5",
    "5, 12, 13",
    "6, 8, 11",
    "7, 24, 25"
  ],
  "answer": 2,
  "explanation": "Kiểm tra 6^2 + 8^2 = 36 + 64 = 100 ≠ 11^2 (121). Do đó bộ ba (6, 8, 11) không phải là bộ ba Pythagore."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác MNP có MN = 9 cm, NP = 12 cm, PM = 15 cm. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "Tam giác MNP vuông tại M",
    "Tam giác MNP vuông tại N",
    "Tam giác MNP vuông tại P",
    "Tam giác MNP không vuông"
  ],
  "answer": 1,
  "explanation": "Ta có 9^2 + 12^2 = 81 + 144 = 225 = 15^2. Cạnh huyền là PM = 15 cm nên góc vuông đối diện là góc N."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một hình vuông có cạnh dài 6 cm. Độ dài đường chéo của hình vuông đó là:",
  "options": [
    "12 cm",
    "6√2 cm",
    "36 cm",
    "72 cm"
  ],
  "answer": 1,
  "explanation": "Đường chéo d = √(6^2 + 6^2) = √72 = 6√2 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một hình chữ nhật có chiều dài 8 cm và đường chéo dài 17 cm. Diện tích của hình chữ nhật đó là:",
  "options": [
    "120 cm^2",
    "136 cm^2",
    "68 cm^2",
    "240 cm^2"
  ],
  "answer": 0,
  "explanation": "Chiều rộng hình chữ nhật là √(17^2 - 8^2) = √(289 - 64) = √225 = 15 cm. Diện tích S = 8 * 15 = 120 cm^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một chiếc thang dài 10 m tựa vào bức tường thẳng đứng. Chân thang cách chân tường 6 m. Chiều cao đầu thang chạm vào tường là:",
  "options": [
    "4 m",
    "8 m",
    "16 m",
    "7 m"
  ],
  "answer": 1,
  "explanation": "Chiều cao h = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 m."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho tam giác đều ABC có cạnh bằng 10 cm. Độ dài đường cao AH của tam giác đều đó là:",
  "options": [
    "5 cm",
    "5√3 cm",
    "10√3 cm",
    "7.5 cm"
  ],
  "answer": 1,
  "explanation": "Đường cao tam giác đều chia đáy thành hai đoạn bằng nhau: BH = 5 cm. AH = √(10^2 - 5^2) = √(100 - 25) = √75 = 5√3 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hình thoi có cạnh bằng 13 cm và một đường chéo dài 24 cm. Độ dài đường chéo còn lại là:",
  "options": [
    "10 cm",
    "5 cm",
    "12 cm",
    "20 cm"
  ],
  "answer": 0,
  "explanation": "Nửa đường chéo đã biết là 24 / 2 = 12 cm. Nửa đường chéo còn lại là √(13^2 - 12^2) = √(169 - 144) = 5 cm. Độ dài đường chéo còn lại là 5 * 2 = 10 cm."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Cho tam giác $ABC$ vuông tại $A$.
   a) Tính $BC$ biết $AB = 20\text{ cm}, AC = 21\text{ cm}$.
   b) Tính $AB$ biết $BC = 41\text{ cm}, AC = 40\text{ cm}$.
2. Tam giác có ba cạnh sau có phải là tam giác vuông không:
   a) $7\text{ cm}, 24\text{ cm}, 25\text{ cm}$.
   b) $8\text{ cm}, 15\text{ cm}, 18\text{ cm}$.
   c) $12\text{ cm}, 35\text{ cm}, 37\text{ cm}$.
3. Cho hình vuông $ABCD$ có đường chéo $AC = 8\text{ cm}$. Tính độ dài cạnh của hình vuông đó.

### Bài tập nâng cao & Vận dụng thực tế
4. **Bài toán gãy cây kinh điển:** Một cây cau thẳng đứng cao $9\text{ m}$. Trong cơn bão lớn, thân cây bị gãy gập tại một điểm (chưa đứt rời). Ngọn cây chạm đất cách gốc cau đúng $3\text{ m}$. Hỏi điểm gãy cách gốc cây bao nhiêu mét?
5. Cho tam giác nhọn $ABC$, kẻ đường cao $AH$. Biết $AB = 13\text{ cm}, AH = 12\text{ cm}, HC = 16\text{ cm}$.
   a) Tính độ dài đoạn thẳng $BH$ và cạnh $BC$.
   b) Tính độ dài cạnh $AC$.
   c) Tam giác $ABC$ có phải là tam giác vuông tại $A$ không? Vì sao?
