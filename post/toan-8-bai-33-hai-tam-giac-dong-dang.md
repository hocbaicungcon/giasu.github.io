---
title: 'Toán 8 Bài 33: Hai tam giác đồng dạng'
description: 'Làm chủ kiến thức Hai tam giác đồng dạng Toán 8 Bài 33: Khái niệm, kí hiệu, tỉ số đồng dạng k, tính chất bắc cầu, định lí tạo tam giác đồng dạng, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Tam giác đồng dạng
  - Tỉ số đồng dạng
  - Định lí đồng dạng
  - Kết nối tri thức
grade: 8
---

# Bài 33. Hai tam giác đồng dạng

Trong cuộc sống hàng ngày, chúng ta thường xuyên bắt gặp những hình ảnh có **hình dạng hoàn toàn giống hệt nhau nhưng kích thước lại to nhỏ khác nhau**:
- Một bức ảnh thẻ được phóng to thành ảnh kỷ niệm treo tường.
- Một mô hình thu nhỏ của tòa nhà Landmark 81 so với công trình thực tế.
- Một bản đồ địa lý Việt Nam thu nhỏ hàng triệu lần so với lãnh thổ địa lý ngoài đời thực.

Trong hình học, khái niệm hai hình "có cùng hình dạng nhưng kích thước có thể khác nhau" được gọi là **hình đồng dạng**. Bài học mở đầu Chương 9 sẽ đưa các em vào thế giới của **Hai tam giác đồng dạng** — nền tảng cốt lõi của toàn bộ phân môn hình học lớp 8 và là chìa khóa vàng dẫn đến lượng giác lớp 9!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 33: HAI TAM GIÁC ĐỒNG DẠNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa & Kí hiệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\triangle A'B'C' \backsim \triangle ABC$ khi:<br>$\widehat{A'} = \widehat{A},\ \widehat{B'} = \widehat{B},\ \widehat{C'} = \widehat{C}$<br>và $\frac{A'B'}{AB} = \frac{B'C'}{BC} = \frac{C'A'}{CA} = k$.<br>• $k$ gọi là <strong>tỉ số đồng dạng</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Ba tính chất cơ bản</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <em>Phản xạ:</em> Mỗi tam giác đồng dạng với chính nó ($k = 1$).<br>• <em>Đối xứng:</em> Nếu $\triangle A'B'C' \backsim \triangle ABC$ tỉ số $k$ thì $\triangle ABC \backsim \triangle A'B'C'$ tỉ số $\frac{1}{k}$.<br>• <em>Bắc cầu:</em> Nếu $\triangle 1 \backsim \triangle 2$ ($k_1$) và $\triangle 2 \backsim \triangle 3$ ($k_2$) thì $\triangle 1 \backsim \triangle 3$ ($k = k_1 \cdot k_2$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Định lí tạo tam giác đồng dạng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu một đường thẳng cắt hai cạnh của tam giác và <strong>song song với cạnh còn lại</strong> thì nó tạo thành tam giác mới <strong>đồng dạng</strong> với tam giác đã cho.<br>• Đúng cả khi cắt phần kéo dài!</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tỉ số các yếu tố</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tỉ số hai chu vi: $\frac{P'}{P} = k$.<br>• Tỉ số hai đường cao tương ứng: $\frac{h'}{h} = k$.<br>• Tỉ số hai diện tích: $\frac{S'}{S} = k^2$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Góc tương ứng:** Cho $\triangle ABC \backsim \triangle DEF$. Biết $\widehat{A} = 70^\circ, \widehat{B} = 60^\circ$. Số đo của $\widehat{F}$ bằng bao nhiêu?
2. **Tỉ số cạnh:** Cho $\triangle A'B'C' \backsim \triangle ABC$ với tỉ số đồng dạng $k = \frac{2}{3}$. Biết $AB = 12\text{ cm}$. Độ dài cạnh $A'B'$ bằng bao nhiêu?
3. **Nghịch đảo tỉ số:** Nếu $\triangle MNP \backsim \triangle XYZ$ với tỉ số đồng dạng $k = 4$, thì $\triangle XYZ \backsim \triangle MNP$ với tỉ số đồng dạng bằng bao nhiêu?
4. **Tỉ số diện tích:** Hai tam giác đồng dạng có tỉ số đồng dạng $k = \frac{1}{3}$. Nếu diện tích tam giác lớn là $90\text{ cm}^2$ thì diện tích tam giác nhỏ bằng bao nhiêu?
5. **Quan hệ với bằng nhau:** Hai tam giác bằng nhau thì có đồng dạng với nhau không? Tỉ số đồng dạng bằng mấy?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Trong $\triangle ABC$: $\widehat{C} = 180^\circ - (70^\circ + 60^\circ) = 50^\circ$. Vì $\triangle ABC \backsim \triangle DEF$ nên $\widehat{F} = \widehat{C} = 50^\circ$.
> 2. $\frac{A'B'}{AB} = k = \frac{2}{3} \implies A'B' = \frac{2}{3} \cdot 12 = 8\text{ cm}$.
> 3. Tỉ số đồng dạng của phép ngược lại là $\frac{1}{k} = \frac{1}{4}$.
> 4. Tỉ số diện tích bằng $k^2 = \left(\frac{1}{3}\right)^2 = \frac{1}{9}$. Do đó $S_{\text{nho}} = \frac{1}{9} \cdot 90 = 10\text{ cm}^2$.
> 5. **Có!** Hai tam giác bằng nhau luôn đồng dạng với nhau theo tỉ số đồng dạng $k = 1$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Định nghĩa hai tam giác đồng dạng

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Tam giác $A'B'C'$ gọi là **đồng dạng** với tam giác $ABC$ nếu:
> 1. Các góc tương ứng bằng nhau:
>    $$\widehat{A'} = \widehat{A};\quad \widehat{B'} = \widehat{B};\quad \widehat{C'} = \widehat{C}$$
> 2. Các cạnh tương ứng tỉ lệ:
>    $$\frac{A'B'}{AB} = \frac{B'C'}{BC} = \frac{C'A'}{CA} = k$$
> Kí hiệu: $\triangle A'B'C' \backsim \triangle ABC$.
> Số $k$ gọi là **tỉ số đồng dạng**.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 220" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hai tam giác đồng dạng A prime B prime C prime và ABC">
    <!-- Tam giác A'B'C' nhỏ bên trái -->
    <polygon points="120,40 50,170 190,170" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2" />
    <circle cx="120" cy="40" r="3.5" fill="#1e293b" />
    <text x="115" y="30" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="14" fill="#1e293b">A'</text>
    <circle cx="50" cy="170" r="3.5" fill="#1e293b" />
    <text x="35" y="185" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="14" fill="#1e293b">B'</text>
    <circle cx="190" cy="170" r="3.5" fill="#1e293b" />
    <text x="195" y="185" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="14" fill="#1e293b">C'</text>
    <text x="110" y="120" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-size="13" fill="#2563eb">k = 0.6</text>

    <!-- Tam giác ABC lớn bên phải -->
    <polygon points="390,20 280,190 500,190" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2.5" />
    <circle cx="390" cy="20" r="4" fill="#1e293b" />
    <text x="385" y="16" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" fill="#1e293b">A</text>
    <circle cx="280" cy="190" r="4" fill="#1e293b" />
    <text x="260" y="205" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" fill="#1e293b">B</text>
    <circle cx="500" cy="190" r="4" fill="#1e293b" />
    <text x="505" y="205" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" fill="#1e293b">C</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Hai tam giác đồng dạng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ</em></p>
</div>

> [!WARNING]
> **QUY TẮC VIẾT ĐỈNH TƯƠNG ỨNG:**
> Khi viết kí hiệu hai tam giác đồng dạng, ta **bắt buộc phải viết các đỉnh tương ứng theo cùng thứ tự**:
> Đỉnh $A'$ tương ứng với $A$, đỉnh $B'$ tương ứng với $B$, đỉnh $C'$ tương ứng với $C$.
> Viết $\triangle A'B'C' \backsim \triangle BAC$ là **hoàn toàn sai** nếu $\widehat{A'} = \widehat{A} \neq \widehat{B}$!

---

### 2. Các tính chất quan trọng

1. **Tính chất phản xạ:** Mỗi tam giác đồng dạng với chính nó theo tỉ số $k = 1$:
   $$\triangle ABC \backsim \triangle ABC$$
2. **Tính chất đối xứng:** Nếu $\triangle A'B'C' \backsim \triangle ABC$ theo tỉ số $k$, thì:
   $$\triangle ABC \backsim \triangle A'B'C'\quad\text{theo tỉ số}\quad \frac{1}{k}$$
3. **Tính chất bắc cầu:** Nếu $\triangle A'B'C' \backsim \triangle A''B''C''$ theo tỉ số $k_1$, và $\triangle A''B''C'' \backsim \triangle ABC$ theo tỉ số $k_2$, thì:
   $$\triangle A'B'C' \backsim \triangle ABC\quad\text{theo tỉ số}\quad k = k_1 \cdot k_2$$

---

### 3. Định lí tạo tam giác đồng dạng

> [!IMPORTANT]
> **ĐỊNH LÍ:**
> Nếu một đường thẳng cắt hai cạnh của một tam giác và **song song với cạnh còn lại** thì nó tạo thành một tam giác mới **đồng dạng với tam giác đã cho**.

**Giả thiết:** Cho $\triangle ABC$. Đường thẳng $d \parallel BC$ cắt $AB$ tại $M$, cắt $AC$ tại $N$.
**Kết luận:** $\triangle AMN \backsim \triangle ABC$.

*Chứng minh vắn tắt:*
- Hai tam giác $\triangle AMN$ và $\triangle ABC$ có:
  + $\widehat{A}$ là góc chung.
  + $\widehat{AMN} = \widehat{B}$ (hai góc đồng vị do $MN \parallel BC$).
  + $\widehat{ANM} = \widehat{C}$ (hai góc đồng vị do $MN \parallel BC$).
- Theo hệ quả của định lí Thalès, vì $MN \parallel BC$ nên:
  $$\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$$
- Vậy $\triangle AMN$ và $\triangle ABC$ có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ, suy ra $\triangle AMN \backsim \triangle ABC$ (đpcm).

**Chú ý:** Định lí vẫn đúng trong trường hợp đường thẳng $d$ cắt phần kéo dài của hai cạnh $AB, AC$ (tạo thành hai tam giác đối đỉnh qua $A$).

---

### 4. Tỉ số chu vi, đường cao và diện tích

Nếu $\triangle A'B'C' \backsim \triangle ABC$ với tỉ số đồng dạng $k$:
1. **Tỉ số hai chu vi:**
   $$\frac{P_{A'B'C'}}{P_{ABC}} = \frac{A'B' + B'C' + C'A'}{AB + BC + CA} = k$$
   *(Tỉ số hai chu vi bằng chính tỉ số đồng dạng $k$)*
2. **Tỉ số hai đường cao tương ứng:**
   $$\frac{h'}{h} = k$$
   *(Tương tự, tỉ số hai đường trung tuyến tương ứng và hai đường phân giác tương ứng cũng bằng $k$)*
3. **Tỉ số hai diện tích:**
   $$\frac{S_{A'B'C'}}{S_{ABC}} = \frac{\frac{1}{2}a'h'}{\frac{1}{2}ah} = \left(\frac{a'}{a}\right) \cdot \left(\frac{h'}{h}\right) = k \cdot k = k^2$$
   *(Tỉ số diện tích của hai tam giác đồng dạng bằng **bình phương tỉ số đồng dạng**)*

---

## Ứng dụng Tương tác Trực quan

### Khám phá Tỉ số Đồng dạng $k$ của Hai Tam giác

Kéo thanh trượt để thay đổi tỉ số đồng dạng $k$. Quan sát trực quan kích thước tam giác thay đổi, độ dài các cạnh, tỉ số chu vi và tỉ số diện tích tự động cập nhật theo thời gian thực:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: PHÓNG TO / THU NHỎ TAM GIÁC ĐỒNG DẠNG</h4>
  
  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 12px; width: 100%; max-width: 480px;">
      <label for="k-slider" style="font-weight: bold; min-width: 140px; font-size: 0.95em;">Tỉ số đồng dạng k:</label>
      <input type="range" id="k-slider" min="0.4" max="2.0" step="0.1" value="1.5" style="flex: 1;" oninput="updateSimilarTriangles(this.value)">
      <span id="k-val" style="font-weight: bold; color: #2563eb; width: 45px; text-align: right;">1.5</span>
    </div>
  </div>

  <div style="text-align: center; margin: 16px 0;">
    <svg data-interactive-done="true" id="sim-svg" viewBox="0 0 600 240" style="width: 100%; max-width: 600px; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
      <!-- Tam giác gốc ABC cố định (màu xanh lá) -->
      <polygon id="orig-tri" points="60,190 140,50 200,190" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2.5" />
      <text x="50" y="205" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">B</text>
      <text x="135" y="40" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">A</text>
      <text x="205" y="205" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">C</text>
      <text x="90" y="225" font-family="sans-serif" font-weight="bold" font-size="12" fill="#047857">ΔABC (Chuẩn: AB=6, BC=7, CA=5)</text>

      <!-- Tam giác biến thiên A'B'C' (màu xanh dương) -->
      <polygon id="scaled-tri" points="280,190 380,50 470,190" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2.5" />
      <text id="b-prime-txt" x="270" y="205" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">B'</text>
      <text id="a-prime-txt" x="375" y="40" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">A'</text>
      <text id="c-prime-txt" x="475" y="205" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">C'</text>
      <text id="scaled-label" x="320" y="225" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1d4ed8">ΔA'B'C' (k = 1.5)</text>
    </svg>
  </div>

  <div id="sim-stats" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 0.95em; line-height: 1.8;">
    Đang tải thông số tỉ lệ...
  </div>
</div>

<script>
function updateSimilarTriangles(kVal) {
  var k = parseFloat(kVal);
  document.getElementById('k-val').innerText = k.toFixed(1);
  
  // Tam giác gốc: B=(60,190), A=(140,50), C=(200,190)
  // Chiều rộng đáy = 140, chiều cao = 140
  // Tam giác scale: gốc B' tại x=280, y=190
  var baseWidth = 140 * (k / 1.5) * 0.9;
  var height = 140 * (k / 1.5) * 0.9;
  
  var bx = 280;
  var by = 190;
  var cx = bx + baseWidth;
  var cy = by;
  var ax = bx + (80 * (k / 1.5) * 0.9);
  var ay = by - height;
  
  var scaledTri = document.getElementById('scaled-tri');
  if (scaledTri) {
    scaledTri.setAttribute('points', bx + ',' + by + ' ' + ax + ',' + ay + ' ' + cx + ',' + cy);
  }
  
  var bTxt = document.getElementById('b-prime-txt');
  if (bTxt) { bTxt.setAttribute('x', (bx - 10)); bTxt.setAttribute('y', (by + 15)); }
  
  var aTxt = document.getElementById('a-prime-txt');
  if (aTxt) { aTxt.setAttribute('x', (ax - 5)); aTxt.setAttribute('y', (ay - 10)); }
  
  var cTxt = document.getElementById('c-prime-txt');
  if (cTxt) { cTxt.setAttribute('x', (cx + 5)); cTxt.setAttribute('y', (cy + 15)); }
  
  var label = document.getElementById('scaled-label');
  if (label) {
    label.textContent = "ΔA'B'C' (k = " + k.toFixed(1) + ")";
  }
  
  // Cập nhật bảng thông số
  var ab = 6, bc = 7, ca = 5;
  var pOrig = ab + bc + ca;
  var pScaled = pOrig * k;
  var kSquare = (k * k).toFixed(2);
  
  var statsBox = document.getElementById('sim-stats');
  if (statsBox) {
    statsBox.innerHTML = 
      '<strong>So sánh các yếu tố hình học:</strong><br>' +
      '• Độ dài các cạnh tương ứng: $A\\\'B\\\' = ' + (ab*k).toFixed(1) + '\\text{ cm}$, $B\\\'C\\\' = ' + (bc*k).toFixed(1) + '\\text{ cm}$, $C\\\'A\\\' = ' + (ca*k).toFixed(1) + '\\text{ cm}$.<br>' +
      '• Tỉ số chu vi: $\\frac{P\\\'}{P} = \\frac{' + pScaled.toFixed(1) + '}{' + pOrig + '} = ' + k.toFixed(1) + ' = k$.<br>' +
      '• Tỉ số diện tích: $\\frac{S\\\'}{S} = k^2 = (' + k.toFixed(1) + ')^2 = ' + kSquare + '$.<br>' +
      '<em>Nhận xét: Khi phóng to cạnh gấp ' + k.toFixed(1) + ' lần thì diện tích tăng vọt gấp ' + kSquare + ' lần!</em>';
  }
}
const __initApp = function() {
  updateSimilarTriangles(1.5);
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Viết đúng các cặp đỉnh tương ứng và thiết lập tỉ lệ thức

**Phương pháp giải:**
1. Đọc kĩ tên hai tam giác đồng dạng: $\triangle ABC \backsim \triangle MNP$.
2. Viết các cặp góc bằng nhau tương ứng: $\widehat{A} = \widehat{M}, \widehat{B} = \widehat{N}, \widehat{C} = \widehat{P}$.
3. Lập dãy tỉ số bằng nhau của các cạnh tương ứng:
   $$\frac{AB}{MN} = \frac{BC}{NP} = \frac{CA}{PM} = k$$

---

#### Bài toán 1:
Cho $\triangle ABC \backsim \triangle DEF$. Biết $AB = 6\text{ cm}, BC = 9\text{ cm}, CA = 12\text{ cm}$ và cạnh $DE = 4\text{ cm}$.
a) Tìm tỉ số đồng dạng $k$ của $\triangle DEF$ đối với $\triangle ABC$.
b) Tính độ dài các cạnh còn lại của tam giác $DEF$.
c) Tính tỉ số chu vi của hai tam giác trên.

**Lời giải:**

a) Vì $\triangle DEF \backsim \triangle ABC$ nên tỉ số đồng dạng $k$ là:
$$k = \frac{DE}{AB} = \frac{4}{6} = \frac{2}{3}$$

b) Vì $\triangle DEF \backsim \triangle ABC$ với $k = \frac{2}{3}$, ta có dãy tỉ số:
$$\frac{DE}{AB} = \frac{EF}{BC} = \frac{FD}{CA} = \frac{2}{3}$$
- Tính $EF$:
  $$\frac{EF}{9} = \frac{2}{3} \implies EF = \frac{9 \cdot 2}{3} = 6\text{ cm}$$
- Tính $FD$:
  $$\frac{FD}{12} = \frac{2}{3} \implies FD = \frac{12 \cdot 2}{3} = 8\text{ cm}$$

c) Chu vi của tam giác $ABC$ là:
$$P_{ABC} = AB + BC + CA = 6 + 9 + 12 = 27\text{ cm}$$
Chu vi của tam giác $DEF$ là:
$$P_{DEF} = DE + EF + FD = 4 + 6 + 8 = 18\text{ cm}$$
Tỉ số chu vi là:
$$\frac{P_{DEF}}{P_{ABC}} = \frac{18}{27} = \frac{2}{3} = k$$
*(Đúng bằng tỉ số đồng dạng $k$)*.

---

### Dạng 2: Sử dụng định lí đường thẳng song song để tính độ dài

**Phương pháp giải:**
1. Chứng minh hoặc nhận biết hai đường thẳng song song trong tam giác.
2. Áp dụng định lí: đường thẳng song song cắt hai cạnh tạo thành tam giác mới đồng dạng với tam giác ban đầu.
3. Thiết lập tỉ số cạnh để tính độ dài đoạn thẳng cần tìm.

---

#### Bài toán 2:
Cho tam giác $ABC$ có $AB = 15\text{ cm}, AC = 20\text{ cm}, BC = 25\text{ cm}$. Trên cạnh $AB$ lấy điểm $M$ sao cho $AM = 6\text{ cm}$. Qua $M$ kẻ đường thẳng song song với $BC$, cắt $AC$ tại $N$.
a) Chứng minh rằng $\triangle AMN \backsim \triangle ABC$ và tìm tỉ số đồng dạng.
b) Tính độ dài các đoạn thẳng $AN, NC$ và $MN$.
c) Kẻ đường cao $AH$ của $\triangle ABC$, $AH$ cắt $MN$ tại $K$. Biết $AH = 12\text{ cm}$, tính độ dài đoạn thẳng $AK$.

**Lời giải:**

a) Vì $MN \parallel BC$ ($M \in AB, N \in AC$), theo định lí về tam giác đồng dạng ta có:
$$\triangle AMN \backsim \triangle ABC$$
Tỉ số đồng dạng là:
$$k = \frac{AM}{AB} = \frac{6}{15} = \frac{2}{5}$$

b) Vì $\triangle AMN \backsim \triangle ABC$ theo tỉ số $k = \frac{2}{5}$:
$$\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC} = \frac{2}{5}$$
- Độ dài $AN$:
  $$\frac{AN}{20} = \frac{2}{5} \implies AN = \frac{20 \cdot 2}{5} = 8\text{ cm}$$
- Độ dài $NC$:
  $$NC = AC - AN = 20 - 8 = 12\text{ cm}$$
- Độ dài $MN$:
  $$\frac{MN}{25} = \frac{2}{5} \implies MN = \frac{25 \cdot 2}{5} = 10\text{ cm}$$

c) Vì $MN \parallel BC$ và $AH \perp BC$ nên $AK \perp MN$.
Khi đó $AK$ là đường cao tương ứng của $\triangle AMN$ hạ từ đỉnh $A$.
Tỉ số hai đường cao bằng tỉ số đồng dạng:
$$\frac{AK}{AH} = k = \frac{2}{5} \implies AK = \frac{2}{5} \cdot 12 = 4.8\text{ cm}$$

---

### Dạng 3: Tính diện tích và chu vi tam giác thông qua tỉ số đồng dạng

**Phương pháp giải:**
- Nếu $\triangle A'B'C' \backsim \triangle ABC$ theo tỉ số $k$:
  + $P' = k \cdot P$
  + $S' = k^2 \cdot S$

---

#### Bài toán 3:
Cho hai tam giác đồng dạng $\triangle ABC$ và $\triangle A'B'C'$ có tỉ số đồng dạng $k = \frac{3}{4}$.
a) Biết hiệu chu vi của hai tam giác là $15\text{ cm}$. Tính chu vi của mỗi tam giác.
b) Biết diện tích tam giác $ABC$ là $64\text{ cm}^2$. Tính diện tích tam giác $A'B'C'$.

**Lời giải:**

a) Gọi chu vi của $\triangle A'B'C'$ là $P'$ và chu vi của $\triangle ABC$ là $P$ ($P, P' > 0$).
Vì $\triangle A'B'C' \backsim \triangle ABC$ theo tỉ số $k = \frac{3}{4} < 1$, nên $P' < P$, do đó:
$$P - P' = 15\text{ cm}$$
Mặt khác:
$$\frac{P'}{P} = \frac{3}{4} \implies \frac{P}{4} = \frac{P'}{3}$$
Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{P}{4} = \frac{P'}{3} = \frac{P - P'}{4 - 3} = \frac{15}{1} = 15$$
Suy ra:
$$P = 15 \cdot 4 = 60\text{ cm}$$
$$P' = 15 \cdot 3 = 45\text{ cm}$$
Vậy chu vi $\triangle ABC$ là $60\text{ cm}$, chu vi $\triangle A'B'C'$ là $45\text{ cm}$.

b) Tỉ số diện tích của hai tam giác là:
$$\frac{S_{A'B'C'}}{S_{ABC}} = k^2 = \left(\frac{3}{4}\right)^2 = \frac{9}{16}$$
Suy ra diện tích của $\triangle A'B'C'$ là:
$$S_{A'B'C'} = \frac{9}{16} \cdot S_{ABC} = \frac{9}{16} \cdot 64 = 36\text{ cm}^2$$

---

### Dạng 4: Chứng minh tam giác đồng dạng gián tiếp qua tính chất bắc cầu

**Phương pháp giải:**
Để chứng minh $\triangle 1 \backsim \triangle 3$, ta tìm một tam giác trung gian $\triangle 2$ sao cho $\triangle 1 \backsim \triangle 2$ và $\triangle 2 \backsim \triangle 3$.

---

#### Bài toán 4:
Cho hình thang $ABCD$ ($AB \parallel CD$). Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Qua $O$ kẻ đường thẳng song song với hai đáy, cắt $AD$ tại $E$ và cắt $BC$ tại $F$.
a) Chứng minh rằng $\triangle AOB \backsim \triangle COD$.
b) Chứng minh rằng $\triangle AEO \backsim \triangle ADC$ và $\triangle BFO \backsim \triangle BCD$.
c) Chứng minh rằng $OE = OF$.

**Lời giải:**

a) Vì $AB \parallel CD$:
- $\widehat{OAB} = \widehat{OCD}$ (hai góc so le trong).
- $\widehat{OBA} = \widehat{ODC}$ (hai góc so le trong).
- $\widehat{AOB} = \widehat{COD}$ (hai góc đối đỉnh).
Suy ra $\triangle AOB \backsim \triangle COD$ (vì các góc tương ứng bằng nhau).

b)
- Xét $\triangle ADC$ có $EO \parallel CD$ ($E \in AD, O \in AC$).
  Theo định lí tạo tam giác đồng dạng:
  $$\triangle AEO \backsim \triangle ADC$$
- Xét $\triangle BCD$ có $OF \parallel CD$ ($O \in BD, F \in BC$).
  Theo định lí tạo tam giác đồng dạng:
  $$\triangle BFO \backsim \triangle BCD$$

c)
- Từ $\triangle AEO \backsim \triangle ADC \implies \frac{OE}{CD} = \frac{AO}{AC}$.
- Từ $\triangle BFO \backsim \triangle BCD \implies \frac{OF}{CD} = \frac{BF}{BC}$.
- Theo định lí Thalès trong hình thang $ABCD$ có $EF \parallel AB \parallel CD$:
  $$\frac{AO}{AC} = \frac{BF}{BC}$$
Do đó:
$$\frac{OE}{CD} = \frac{OF}{CD} \implies OE = OF\quad (\text{đpcm})$$

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Phép đồng dạng trong Kỹ thuật Đồ họa Máy tính (Computer Graphics)
Trong các trò chơi điện tử $3D$ như Minecraft hay Liên Quân:
- Khi một nhân vật hoặc vật thể di chuyển ra xa camera, card đồ họa GPU không vẽ lại hình dạng mới mà thực hiện **phép phóng thu đồng dạng (Scaling Transformation)**:
  $$\begin{pmatrix} x' \\ y' \end{pmatrix} = k \cdot \begin{pmatrix} x \\ y \end{pmatrix}$$
- Mọi đa giác tam giác cấu tạo nên mô hình nhân vật được thu nhỏ đồng dạng với tỉ số $k < 1$, giữ nguyên tỷ lệ thẩm mỹ mà tiết kiệm hàng triệu phép tính đồ họa mỗi giây!

### 2. Thiết kế Bản đồ Địa lý & Tỉ lệ xích (Cartography Scale)
Bản đồ Google Maps hiển thị góc dưới cùng thanh tỉ lệ (ví dụ $1 : 50\,000$):
- Mỗi tam giác địa hình trên thực địa (ba đỉnh nối Hà Nội – Hải Phòng – Nam Định) đều đồng dạng với tam giác biểu diễn trên màn hình điện thoại theo đúng tỉ số $k = \frac{1}{50\,000}$.
- Nhờ tính chất tam giác đồng dạng, mọi góc rẽ, hướng đi và tỉ lệ khoảng cách giữa các địa danh đều được bảo toàn nguyên vẹn $100\%$.

### 3. Kính viễn vọng Galileo & Ống nhòm hai mắt
Trong quang học thiên văn, thấu kính hội tụ tạo ra ảnh thật của các vì sao xa xôi:
- Chùm tia sáng đi qua quang tâm thấu kính tạo nên hai tam giác đồng dạng đối đỉnh.
- Tỉ số đồng dạng $k = \frac{d'}{d}$ cho phép các nhà thiên văn học xác định độ phóng đại của kính viễn vọng và tính toán kích thước khổng lồ của Mặt Trăng, Sao Mộc dù chỉ quan sát qua kính ngắm nhỏ bé.

### 4. Thiết kế Khung giàn Cầu thép Trục chịu lực
Các cây cầu thép nổi tiếng như Cầu Long Biên (Hà Nội) hay Cầu Cổng Vàng (San Francisco) được cấu tạo từ các thanh thép ghép thành hàng trăm tam giác đồng dạng:
- Khi có tải trọng xe lửa chạy qua, áp lực truyền đều qua các đỉnh theo tỉ lệ cạnh của tam giác đồng dạng.
- Điều này giúp triệt tiêu hoàn toàn lực xoắn nguy hiểm, giúp kết cấu cầu đứng vững hàng trăm năm trước bão gió.

### 5. Khí động học Hàng không: Thử nghiệm Mô hình Thu nhỏ trong Hầm gió
Trước khi sản xuất một chiếc máy bay Boeing hay Airbus thực thụ trị giá hàng trăm triệu USD:
- Các kỹ sư chế tạo một mô hình máy bay thu nhỏ bằng tam giác đồng dạng chính xác với tỉ số $k = \frac{1}{50}$.
- Đặt mô hình vào hầm gió siêu thanh để đo hệ số cản không khí. Nhờ định luật đồng dạng Reynolds, các thông số khí động học đo được trên mô hình thu nhỏ phản ánh chính xác hiệu suất bay của chiếc phi cơ khổng lồ ngoài đời thực!

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho tam giác ABC đồng dạng với tam giác DEF. Khẳng định nào sau đây là SAI?",
  "options": [
    "Góc A = Góc D",
    "AB / DE = BC / EF = CA / FD",
    "Góc B = Góc F",
    "Góc C = Góc F"
  ],
  "answer": 2,
  "explanation": "Vì tam giác ABC đồng dạng với tam giác DEF theo đúng thứ tự đỉnh nên góc B phải bằng góc E. Khẳng định Góc B = Góc F là sai."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nếu tam giác A B C đồng dạng với tam giác A prime B prime C prime theo tỉ số k = 3 thì tam giác A prime B prime C prime đồng dạng với tam giác A B C theo tỉ số bằng bao nhiêu?",
  "options": [
    "3",
    "1/3",
    "9",
    "1/9"
  ],
  "answer": 1,
  "explanation": "Theo tính chất đối xứng của tam giác đồng dạng, tỉ số đồng dạng của phép biến đổi ngược lại là 1/k = 1/3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tam giác MNP đồng dạng với tam giác XYZ có tỉ số đồng dạng k = 2/5. Biết chu vi tam giác XYZ là 40 cm. Chu vi tam giác MNP là:",
  "options": [
    "16 cm",
    "100 cm",
    "20 cm",
    "6.4 cm"
  ],
  "answer": 0,
  "explanation": "Tỉ số hai chu vi bằng tỉ số đồng dạng: P(MNP) / P(XYZ) = 2/5 ⇒ P(MNP) = (2/5) * 40 = 16 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hai tam giác đồng dạng có tỉ số đồng dạng k = 1/2. Tỉ số diện tích của tam giác thứ nhất so với tam giác thứ hai là:",
  "options": [
    "1/2",
    "1/4",
    "1",
    "2"
  ],
  "answer": 1,
  "explanation": "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: k^2 = (1/2)^2 = 1/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác ABC, đường thẳng d song song với BC cắt AB tại D và cắt AC tại E. Kết luận nào sau đây đúng?",
  "options": [
    "Tam giác ADE đồng dạng với tam giác ABC",
    "Tam giác ADE bằng tam giác ABC",
    "Tam giác ABC đồng dạng với tam giác AED",
    "Tam giác ADE đồng dạng với tam giác ACB"
  ],
  "answer": 0,
  "explanation": "Theo định lí tạo tam giác đồng dạng: đường thẳng song song với một cạnh của tam giác cắt hai cạnh còn lại tạo thành tam giác mới đồng dạng với tam giác đã cho theo đúng thứ tự đỉnh: tam giác ADE đồng dạng với tam giác ABC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tam giác ABC đồng dạng với tam giác MNP. Biết góc A = 65°, góc B = 45°. Số đo của góc P là:",
  "options": [
    "65°",
    "45°",
    "70°",
    "80°"
  ],
  "answer": 2,
  "explanation": "Trong tam giác ABC: góc C = 180° - (65° + 45°) = 70°. Vì tam giác ABC đồng dạng với tam giác MNP nên góc P = góc C = 70°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho tam giác ABC đồng dạng với tam giác DEF theo tỉ số k1 = 2/3, tam giác DEF đồng dạng với tam giác MNP theo tỉ số k2 = 3/5. Tam giác ABC đồng dạng với tam giác MNP theo tỉ số nào?",
  "options": [
    "5/2",
    "2/5",
    "1/5",
    "9/10"
  ],
  "answer": 1,
  "explanation": "Theo tính chất bắc cầu: k = k1 * k2 = (2/3) * (3/5) = 2/5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác ABC có độ dài 3 cạnh là 6 cm, 8 cm, 10 cm. Tam giác A prime B prime C prime đồng dạng với tam giác ABC và có cạnh nhỏ nhất bằng 9 cm. Độ dài cạnh lớn nhất của tam giác A prime B prime C prime là:",
  "options": [
    "12 cm",
    "15 cm",
    "16 cm",
    "18 cm"
  ],
  "answer": 1,
  "explanation": "Cạnh nhỏ nhất của tam giác ABC là 6 cm. Cạnh nhỏ nhất tương ứng của tam giác mới là 9 cm, suy ra k = 9/6 = 1.5. Cạnh lớn nhất của tam giác mới là 10 * 1.5 = 15 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho tam giác ABC có diện tích 54 cm^2. Lấy M trên AB sao cho AM = (1/3)AB. Kẻ MN song song với BC (N trên AC). Diện tích tam giác AMN là:",
  "options": [
    "18 cm^2",
    "6 cm^2",
    "9 cm^2",
    "27 cm^2"
  ],
  "answer": 1,
  "explanation": "Vì MN // BC nên tam giác AMN đồng dạng với tam giác ABC với k = AM / AB = 1/3. Tỉ số diện tích là k^2 = 1/9. Diện tích tam giác AMN là (1/9) * 54 = 6 cm^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "Hai tam giác bằng nhau thì không đồng dạng với nhau",
    "Hai tam giác đồng dạng với nhau thì nhất định phải bằng nhau",
    "Hai tam giác bằng nhau thì đồng dạng với nhau theo tỉ số k = 1",
    "Tỉ số chu vi của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng"
  ],
  "answer": 2,
  "explanation": "Hai tam giác bằng nhau có các cạnh tương ứng bằng nhau (tỉ số bằng 1) và các góc tương ứng bằng nhau nên luôn đồng dạng với nhau với k = 1."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Cho $\triangle ABC \backsim \triangle MNP$ có $\frac{AB}{MN} = \frac{3}{5}$ và chu vi $\triangle MNP$ là $45\text{ cm}$. Tính chu vi của $\triangle ABC$.
2. Cho $\triangle A'B'C' \backsim \triangle ABC$ theo tỉ số $k = \frac{4}{5}$. Biết $S_{A'B'C'} = 48\text{ cm}^2$. Tính diện tích tam giác $ABC$.
3. Cho tam giác $ABC$ có cạnh $BC = 18\text{ cm}$. Trên đường cao $AH$ lấy điểm $I$ sao cho $AI = \frac{1}{3}AH$. Qua $I$ kẻ đường thẳng song song với $BC$ cắt $AB, AC$ lần lượt tại $D, E$. Tính độ dài đoạn thẳng $DE$.

### Bài tập nâng cao & Vận dụng thực tế
4. **Đo chiều cao kim tự tháp qua mô hình bóng:** Một chiếc cọc cao $2\text{ m}$ cắm vuông góc với mặt đất có bóng dài $1.5\text{ m}$. Cùng thời điểm đó, bóng của một tòa tháp cao tầng dài $45\text{ m}$. Hỏi tòa tháp cao bao nhiêu mét?
5. Cho hình bình hành $ABCD$. Một đường thẳng đi qua $D$ cắt đường chéo $AC$ tại $I$, cắt cạnh $BC$ tại $P$ và cắt tia đối của tia $AB$ tại $Q$.
   a) Chứng minh rằng $\triangle IAD \backsim \triangle ICP$.
   b) Chứng minh rằng $\triangle IDC \backsim \triangle IQA$.
   c) Chứng minh hệ thức: $ID^2 = IP \cdot IQ$.
