---
title: 'Toán 8 Bài 34: Ba trường hợp đồng dạng của hai tam giác'
description: 'Làm chủ 3 trường hợp đồng dạng của hai tam giác Toán 8 Bài 34: Cạnh-Cạnh-Cạnh (c-c-c), Cạnh-Góc-Cạnh (c-g-c), Góc-Góc (g-g), phương pháp chứng minh tích hình học, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Tam giác đồng dạng
  - Trường hợp đồng dạng c-c-c
  - Trường hợp đồng dạng c-g-c
  - Trường hợp đồng dạng g-g
  - Kết nối tri thức
grade: 8
---

# Bài 34. Ba trường hợp đồng dạng của hai tam giác

Trong Bài 33, ta đã biết để chứng minh $\triangle A'B'C' \backsim \triangle ABC$ theo đúng định nghĩa, chúng ta cần kiểm tra tới **$6$ điều kiện khắt khe**: $3$ cặp góc bằng nhau và $3$ cặp cạnh tương ứng tỉ lệ. Việc đo đạc đồng thời cả 6 yếu tố này trong thực tế là vô cùng tốn thời gian và phức tạp.

Cũng giống như các trường hợp bằng nhau của tam giác ở lớp 7 (chỉ cần 3 yếu tố), các nhà toán học đã chứng minh được **Ba trường hợp đồng dạng tối giản**:
1. Chỉ cần biết **tỉ số 3 cặp cạnh** (Cạnh - Cạnh - Cạnh).
2. Hoặc chỉ cần biết **tỉ số 2 cặp cạnh và 1 góc xen giữa** (Cạnh - Góc - Cạnh).
3. Hoặc thậm chí **chỉ cần biết 2 cặp góc bằng nhau** mà không cần đo bất kỳ độ dài cạnh nào (Góc - Góc)!

Nắm vững 3 trường hợp này, các em sẽ sở hữu chiếc "chìa khóa vạn năng" để giải quyết hầu hết các bài toán chứng minh hình học, chứng minh hệ thức đoạn thẳng và tính toán khoảng cách trong thực tế.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 34: BA TRƯỜNG HỢP ĐỒNG DẠNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Trường hợp 1: c - c - c</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: Ba cặp cạnh tương ứng tỉ lệ:<br>$$\frac{A'B'}{AB} = \frac{B'C'}{BC} = \frac{C'A'}{CA}$$<br>$\implies \triangle A'B'C' \backsim \triangle ABC$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Trường hợp 2: c - g - c</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: Hai cặp cạnh tỉ lệ và <strong>góc xen giữa</strong> bằng nhau:<br>$$\frac{A'B'}{AB} = \frac{A'C'}{AC};\quad \widehat{A'} = \widehat{A}$$<br>$\implies \triangle A'B'C' \backsim \triangle ABC$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Trường hợp 3: g - g</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: Hai cặp góc bằng nhau:<br>$$\widehat{A'} = \widehat{A};\quad \widehat{B'} = \widehat{B}$$<br>$\implies \triangle A'B'C' \backsim \triangle ABC$.<br>• <em>Trường hợp thông dụng nhất!</em></p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng hệ thức tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Để chứng minh: $AB \cdot CD = AC \cdot BE$<br>$\iff \frac{AB}{AC} = \frac{BE}{CD}$<br>$\impliedby$ Chứng minh hai tam giác đồng dạng chứa các cạnh đó.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Kiểm tra c-c-c:** Tam giác $ABC$ có độ dài 3 cạnh là $4, 6, 8$. Tam giác $A'B'C'$ có 3 cạnh là $6, 9, 12$. Hai tam giác này có đồng dạng không? Tỉ số đồng dạng bằng bao nhiêu?
2. **Cảnh giác góc xen giữa:** Tam giác $ABC$ có $AB = 4, AC = 6, \widehat{B} = 60^\circ$. Tam giác $A'B'C'$ có $A'B' = 6, A'C' = 9, \widehat{B'} = 60^\circ$. Ta đã đủ kết luận hai tam giác đồng dạng theo trường hợp c-g-c chưa? Vì sao?
3. **Phản xạ g-g:** Tam giác $ABC$ có $\widehat{A} = 75^\circ, \widehat{B} = 45^\circ$. Tam giác $MNP$ có $\widehat{M} = 75^\circ, \widehat{P} = 60^\circ$. Hai tam giác này có đồng dạng không?
4. **Suy ra tỉ số:** Cho $\triangle AMN \backsim \triangle ABC$ theo trường hợp g-g. Suy ra đẳng thức tỉ lệ giữa các cạnh $AM, AB, AN, AC$.
5. **Đổi dạng tích:** Từ tỉ lệ thức $\frac{MA}{MB} = \frac{MC}{MD}$, ta suy ra tích của hai đoạn thẳng nào bằng tích của hai đoạn thẳng nào?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Xét các tỉ số từ bé đến lớn: $\frac{6}{4} = 1.5;\ \frac{9}{6} = 1.5;\ \frac{12}{8} = 1.5$. Ba cặp cạnh tỉ lệ $\implies$ **Đồng dạng** với tỉ số $k = 1.5$ (hoặc $\frac{3}{2}$).
> 2. **Chưa đủ!** Vì góc $\widehat{B}$ và $\widehat{B'}$ không phải là góc xen giữa hai cạnh đã cho ($\widehat{A}$ mới là góc xen giữa $AB$ và $AC$). Trường hợp c-g-c bắt buộc góc phải xen giữa!
> 3. Trong $\triangle ABC$: $\widehat{C} = 180^\circ - (75^\circ + 45^\circ) = 60^\circ$. Do đó hai tam giác có $\widehat{A} = \widehat{M} = 75^\circ$ và $\widehat{C} = \widehat{P} = 60^\circ \implies$ **Đồng dạng** theo trường hợp g-g!
> 4. $\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$.
> 5. Nhân chéo: $MA \cdot MD = MB \cdot MC$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Trường hợp đồng dạng thứ nhất: Cạnh - Cạnh - Cạnh (c-c-c)

> [!IMPORTANT]
> **ĐỊNH LÍ 1 (c - c - c):**
> Nếu ba cạnh của tam giác này **tỉ lệ với ba cạnh** của tam giác kia thì hai tam giác đó đồng dạng với nhau.
> 
> Nếu $\triangle A'B'C'$ và $\triangle ABC$ có:
> $$\frac{A'B'}{AB} = \frac{B'C'}{BC} = \frac{C'A'}{CA} \implies \triangle A'B'C' \backsim \triangle ABC\text{ (c - c - c)}$$

**Kinh nghiệm lập tỉ số c-c-c:**
Để tránh nhầm lẫn khi xét hai tam giác có độ dài các cạnh xáo trộn:
- Hãy sắp xếp các cạnh của mỗi tam giác theo thứ tự **tăng dần** (từ nhỏ nhất đến lớn nhất).
- Lập tỉ số: $\frac{\text{cạnh nhỏ nhất}}{\text{cạnh nhỏ nhất}}$, $\frac{\text{cạnh trung bình}}{\text{cạnh trung bình}}$, $\frac{\text{cạnh lớn nhất}}{\text{cạnh lớn nhất}}$.
- Nếu cả 3 tỉ số này bằng nhau $\implies$ hai tam giác đồng dạng.

---

### 2. Trường hợp đồng dạng thứ hai: Cạnh - Góc - Cạnh (c-g-c)

> [!IMPORTANT]
> **ĐỊNH LÍ 2 (c - g - c):**
> Nếu hai cạnh của tam giác này **tỉ lệ với hai cạnh** của tam giác kia và **hai góc tạo bởi các cặp cạnh đó bằng nhau** (góc xen giữa) thì hai tam giác đó đồng dạng với nhau.
> 
> Nếu $\triangle A'B'C'$ và $\triangle ABC$ có:
> $$\frac{A'B'}{AB} = \frac{A'C'}{AC}\quad\text{và}\quad \widehat{A'} = \widehat{A} \implies \triangle A'B'C' \backsim \triangle ABC\text{ (c - g - c)}$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Trường hợp đồng dạng c-g-c">
    <!-- Tam giác 1 nhỏ bên trái -->
    <polygon points="60,160 120,40 180,160" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2" />
    <path d="M 105,70 A 30 30 0 0 0 135,70" fill="none" stroke="#ef4444" stroke-width="2" />
    <text x="115" y="28" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">A'</text>
    <text x="45" y="175" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">B'</text>
    <text x="185" y="175" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">C'</text>
    <text x="75" y="95" font-family="sans-serif" font-size="13" fill="#2563eb">c'</text>
    <text x="155" y="95" font-family="sans-serif" font-size="13" fill="#2563eb">b'</text>

    <!-- Tam giác 2 lớn bên phải -->
    <polygon points="300,170 390,20 480,170" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2.5" />
    <path d="M 370,55 A 40 40 0 0 0 410,55" fill="none" stroke="#ef4444" stroke-width="2" />
    <text x="385" y="12" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">A</text>
    <text x="280" y="185" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">B</text>
    <text x="485" y="185" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e293b">C</text>
    <text x="325" y="90" font-family="sans-serif" font-size="13" fill="#047857">c</text>
    <text x="445" y="90" font-family="sans-serif" font-size="13" fill="#047857">b</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Hai tam giác đồng dạng c-g-c khi c'/c = b'/b và góc xen giữa bằng nhau (được đánh dấu vòng cung đỏ)</em></p>
</div>

> [!WARNING]
> **LỖI SAI KINH ĐIỂN CẦN TRÁNH:**
> Nếu $\frac{A'B'}{AB} = \frac{A'C'}{AC}$ nhưng góc bằng nhau lại là $\widehat{B'} = \widehat{B}$ (không xen giữa), ta **tuyệt đối không được** kết luận hai tam giác đồng dạng!

---

### 3. Trường hợp đồng dạng thứ ba: Góc - Góc (g-g)

> [!IMPORTANT]
> **ĐỊNH LÍ 3 (g - g):**
> Nếu hai góc của tam giác này **lần lượt bằng hai góc** của tam giác kia thì hai tam giác đó đồng dạng với nhau.
> 
> Nếu $\triangle A'B'C'$ và $\triangle ABC$ có:
> $$\widehat{A'} = \widehat{A}\quad\text{và}\quad \widehat{B'} = \widehat{B} \implies \triangle A'B'C' \backsim \triangle ABC\text{ (g - g)}$$

*Tại sao chỉ cần 2 góc bằng nhau?*
Vì tổng ba góc trong một tam giác luôn bằng $180^\circ$, nếu có $2$ cặp góc bằng nhau thì cặp góc thứ ba hiển nhiên bằng nhau:
$$\widehat{C'} = 180^\circ - (\widehat{A'} + \widehat{B'}) = 180^\circ - (\widehat{A} + \widehat{B}) = \widehat{C}$$
*Nhận xét:* Trường hợp **Góc - Góc (g-g)** là trường hợp được sử dụng nhiều nhất (chiếm tới $80\%$ các bài toán hình học thi vào 10), vì việc chứng minh các góc bằng nhau (qua góc đối đỉnh, so le trong, đồng vị, cùng phụ, cùng bù, góc nội tiếp) thường thuận lợi hơn đo cạnh rất nhiều!

---

### 4. Bảng so sánh giữa Tam giác Bằng nhau và Tam giác Đồng dạng

| Tiêu chí | Hai tam giác Bằng nhau ($\triangle_1 = \triangle_2$) | Hai tam giác Đồng dạng ($\triangle_1 \backsim \triangle_2$) |
| :--- | :--- | :--- |
| **Bản chất** | Cùng hình dạng và **cùng kích thước** ($k = 1$). | Cùng hình dạng, **kích thước có thể khác nhau** ($k > 0$). |
| **Trường hợp 1** | c - c - c: Ba cạnh **bằng nhau từng đôi một**. | c - c - c: Ba cạnh **tương ứng tỉ lệ**. |
| **Trường hợp 2** | c - g - c: Hai cạnh bằng nhau, **góc xen giữa bằng nhau**. | c - g - c: Hai cạnh **tỉ lệ**, **góc xen giữa bằng nhau**. |
| **Trường hợp 3** | g - c - g: Cần 2 góc bằng nhau **và cạnh xen giữa bằng nhau**. | g - g: **Chỉ cần 2 góc bằng nhau** (không cần biết cạnh!). |

---

## Ứng dụng Tương tác Trực quan

### Bộ Kiểm tra & Khám phá 3 Trường hợp Đồng dạng

Chọn một trong 3 trường hợp đồng dạng (c-c-c, c-g-c, g-g) và nhập hoặc điều chỉnh các thông số để hệ thống tự động kiểm tra và vẽ hai tam giác minh họa:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: KIỂM TRA 3 TRƯỜNG HỢP ĐỒNG DẠNG</h4>
  
  <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
    <button id="btn-case-1" onclick="switchCase(1)" style="padding: 8px 16px; border-radius: 6px; border: none; background: #2563eb; color: white; font-weight: bold; cursor: pointer;">
      1. Cạnh - Cạnh - Cạnh (c-c-c)
    </button>
    <button id="btn-case-2" onclick="switchCase(2)" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; font-weight: bold; cursor: pointer;">
      2. Cạnh - Góc - Cạnh (c-g-c)
    </button>
    <button id="btn-case-3" onclick="switchCase(3)" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; font-weight: bold; cursor: pointer;">
      3. Góc - Góc (g-g)
    </button>
  </div>

  <div id="case-control-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; margin-bottom: 16px; font-size: 0.95em;">
    <!-- Nội dung điều khiển sẽ được nạp động qua JavaScript -->
  </div>

  <div style="text-align: center; margin: 16px 0;">
    <svg data-interactive-done="true" id="case-svg" viewBox="0 0 560 210" style="width: 100%; max-width: 560px; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
      <!-- Tam giác 1 (xanh lam) -->
      <polygon id="poly-1" points="60,160 130,40 190,160" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2.5" />
      <text id="lbl-t1-a" x="125" y="30" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">A</text>
      <text id="lbl-t1-b" x="45" y="175" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">B</text>
      <text id="lbl-t1-c" x="195" y="175" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">C</text>
      <text id="lbl-t1-name" x="90" y="195" font-family="sans-serif" font-size="12" fill="#2563eb">ΔABC</text>

      <!-- Tam giác 2 (cam) -->
      <polygon id="poly-2" points="300,160 405,20 495,160" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2.5" />
      <text id="lbl-t2-a" x="400" y="12" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">A'</text>
      <text id="lbl-t2-b" x="285" y="175" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">B'</text>
      <text id="lbl-t2-c" x="500" y="175" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">C'</text>
      <text id="lbl-t2-name" x="370" y="195" font-family="sans-serif" font-size="12" fill="#b45309">ΔA'B'C'</text>
    </svg>
  </div>

  <div id="case-result-box" style="background: var(--card-bg, #ffffff); border-radius: 8px; padding: 14px; border: 1px dashed #2563eb; font-size: 0.95em; line-height: 1.8;">
    Đang tải kết luận kiểm tra...
  </div>
</div>

<script>
var currentCase = 1;

function switchCase(c) {
  currentCase = c;
  for (var i = 1; i <= 3; i++) {
    var btn = document.getElementById('btn-case-' + i);
    if (btn) {
      if (i === c) {
        btn.style.background = '#2563eb';
        btn.style.color = 'white';
        btn.style.border = 'none';
      } else {
        btn.style.background = '#f8fafc';
        btn.style.color = '#334155';
        btn.style.border = '1px solid #cbd5e1';
      }
    }
  }
  renderCaseControls();
}

function renderCaseControls() {
  var box = document.getElementById('case-control-box');
  var res = document.getElementById('case-result-box');
  if (!box || !res) return;

  if (currentCase === 1) {
    box.innerHTML = 
      '<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">' +
      '  <div><strong>ΔABC:</strong> a=4, b=5, c=6</div>' +
      '  <div style="display: flex; align-items: center; gap: 8px;">' +
      '    <label>Tỉ số phóng đại k của ΔA\'B\'C\':</label>' +
      '    <input type="range" id="c1-k" min="0.5" max="1.8" step="0.1" value="1.2" oninput="updateCase1(this.value)">' +
      '    <span id="c1-k-val" style="font-weight: bold; color: #2563eb;">1.2</span>' +
      '  </div>' +
      '</div>';
    updateCase1(1.2);
  } else if (currentCase === 2) {
    box.innerHTML = 
      '<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">' +
      '  <div><strong>ΔABC:</strong> AB=5, AC=7, Góc A=60°</div>' +
      '  <div style="display: flex; align-items: center; gap: 8px;">' +
      '    <label>Góc A\' của ΔA\'B\'C\':</label>' +
      '    <input type="range" id="c2-angle" min="40" max="90" step="5" value="60" oninput="updateCase2(this.value)">' +
      '    <span id="c2-angle-val" style="font-weight: bold; color: #f59e0b;">60°</span>' +
      '  </div>' +
      '</div>';
    updateCase2(60);
  } else if (currentCase === 3) {
    box.innerHTML = 
      '<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">' +
      '  <div><strong>ΔABC:</strong> Góc A=70°, Góc B=50° (suy ra Góc C=60°)</div>' +
      '  <div style="display: flex; align-items: center; gap: 8px;">' +
      '    <label>Góc B\' của ΔA\'B\'C\':</label>' +
      '    <input type="range" id="c3-angle" min="30" max="80" step="5" value="50" oninput="updateCase3(this.value)">' +
      '    <span id="c3-angle-val" style="font-weight: bold; color: #10b981;">50°</span>' +
      '  </div>' +
      '</div>';
    updateCase3(50);
  }
}

function updateCase1(kVal) {
  var k = parseFloat(kVal);
  var kTxt = document.getElementById('c1-k-val');
  if (kTxt) kTxt.innerText = k.toFixed(1);
  var res = document.getElementById('case-result-box');
  if (res) {
    var a2 = (4 * k).toFixed(1);
    var b2 = (5 * k).toFixed(1);
    var c2 = (6 * k).toFixed(1);
    res.innerHTML = 
      '✅ <strong>Kết quả kiểm tra c-c-c:</strong><br>' +
      '• Độ dài ba cạnh ΔA\'B\'C\': $a\\\' = ' + a2 + ', b\\\' = ' + b2 + ', c\\\' = ' + c2 + '$.<br>' +
      '• Tỉ số các cạnh: $\\frac{' + a2 + '}{4} = \\frac{' + b2 + '}{5} = \\frac{' + c2 + '}{6} = ' + k.toFixed(1) + '$.<br>' +
      '• <strong>Kết luận:</strong> Ba cặp cạnh tương ứng tỉ lệ $\\implies \\triangle A\\\'B\\\'C\\\' \\backsim \\triangle ABC$ theo trường hợp <strong>(c - c - c)</strong>.';
  }
}

function updateCase2(angVal) {
  var ang = parseInt(angVal);
  var angTxt = document.getElementById('c2-angle-val');
  if (angTxt) angTxt.innerText = ang + '°';
  var res = document.getElementById('case-result-box');
  if (res) {
    if (ang === 60) {
      res.innerHTML = 
        '✅ <strong>Kết quả kiểm tra c-g-c:</strong><br>' +
        '• Cặp cạnh tỉ lệ: $\\frac{A\\\'B\\\'}{AB} = \\frac{A\\\'C\\\'}{AC} = 1.4$.<br>' +
        '• Góc xen giữa: $\\widehat{A\\\'} = \\widehat{A} = 60^\\circ$.<br>' +
        '• <strong>Kết luận:</strong> Hai cặp cạnh tỉ lệ và góc xen giữa bằng nhau $\\implies \\triangle A\\\'B\\\'C\\\' \\backsim \\triangle ABC$ theo trường hợp <strong>(c - g - c)</strong>.';
    } else {
      res.innerHTML = 
        '❌ <strong>Kết quả kiểm tra c-g-c:</strong><br>' +
        '• Cặp cạnh tỉ lệ: $\\frac{A\\\'B\\\'}{AB} = \\frac{A\\\'C\\\'}{AC} = 1.4$.<br>' +
        '• Góc xen giữa: $\\widehat{A\\\'} = ' + ang + '^\\circ \\neq \\widehat{A} = 60^\\circ$.<br>' +
        '• <strong>Kết luận:</strong> Góc xen giữa không bằng nhau $\\implies$ Hai tam giác <strong>KHÔNG đồng dạng</strong>!';
    }
  }
}

function updateCase3(angVal) {
  var ang = parseInt(angVal);
  var angTxt = document.getElementById('c3-angle-val');
  if (angTxt) angTxt.innerText = ang + '°';
  var res = document.getElementById('case-result-box');
  if (res) {
    if (ang === 50) {
      res.innerHTML = 
        '✅ <strong>Kết quả kiểm tra g-g:</strong><br>' +
        '• Hai cặp góc bằng nhau: $\\widehat{A\\\'} = \\widehat{A} = 70^\\circ$ và $\\widehat{B\\\'} = \\widehat{B} = 50^\\circ$.<br>' +
        '• <strong>Kết luận:</strong> Có 2 cặp góc bằng nhau $\\implies \\triangle A\\\'B\\\'C\\\' \\backsim \\triangle ABC$ theo trường hợp <strong>(g - g)</strong>.';
    } else {
      res.innerHTML = 
        '❌ <strong>Kết quả kiểm tra g-g:</strong><br>' +
        '• $\\widehat{A\\\'} = 70^\\circ = \\widehat{A}$, nhưng $\\widehat{B\\\'} = ' + ang + '^\\circ \\neq 50^\\circ$.<br>' +
        '• <strong>Kết luận:</strong> Chỉ có 1 cặp góc bằng nhau $\\implies$ Hai tam giác <strong>KHÔNG đồng dạng</strong>!';
    }
  }
}

const __initApp = function() {
  renderCaseControls();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Nhận biết và chứng minh tam giác đồng dạng theo trường hợp c-c-c

**Phương pháp giải:**
1. Sắp xếp độ dài các cạnh của từng tam giác theo thứ tự tăng dần.
2. Lập các tỉ số giữa các cặp cạnh tương ứng:
   $$\frac{a_1}{a_2};\quad \frac{b_1}{b_2};\quad \frac{c_1}{c_2}$$
3. So sánh các tỉ số. Nếu cả 3 tỉ số bằng nhau $\implies$ hai tam giác đồng dạng.

---

#### Bài toán 1:
Cho tam giác $ABC$ có $AB = 6\text{ cm}, BC = 8\text{ cm}, CA = 10\text{ cm}$. Tam giác $DEF$ có $DE = 9\text{ cm}, EF = 12\text{ cm}, FD = 15\text{ cm}$.
a) Chứng minh rằng $\triangle ABC \backsim \triangle DEF$.
b) Biết $\widehat{B} = 90^\circ$, hãy tính số đo góc $\widehat{E}$.

**Lời giải:**

a) Sắp xếp các cạnh của hai tam giác theo thứ tự tăng dần:
- Trong $\triangle ABC$: $AB = 6 < BC = 8 < CA = 10$.
- Trong $\triangle DEF$: $DE = 9 < EF = 12 < FD = 15$.

Xét các tỉ số tương ứng:
$$\frac{AB}{DE} = \frac{6}{9} = \frac{2}{3}$$
$$\frac{BC}{EF} = \frac{8}{12} = \frac{2}{3}$$
$$\frac{CA}{FD} = \frac{10}{15} = \frac{2}{3}$$
Vì:
$$\frac{AB}{DE} = \frac{BC}{EF} = \frac{CA}{FD} = \frac{2}{3}$$
Nên theo trường hợp đồng dạng thứ nhất (c-c-c):
$$\triangle ABC \backsim \triangle DEF\quad (\text{đpcm})$$

b) Vì $\triangle ABC \backsim \triangle DEF$, các góc tương ứng bằng nhau:
$$\widehat{E} = \widehat{B} = 90^\circ$$

---

### Dạng 2: Chứng minh tam giác đồng dạng theo trường hợp c-g-c

**Phương pháp giải:**
1. Tìm một cặp góc bằng nhau (thường là góc chung, góc đối đỉnh hoặc góc có số đo cho trước).
2. Lập tỉ số hai cặp cạnh kề tạo nên góc đó.
3. Nếu hai tỉ số bằng nhau $\implies$ hai tam giác đồng dạng theo trường hợp c-g-c.

---

#### Bài toán 2:
Cho tam giác $ABC$ có $AB = 8\text{ cm}, AC = 12\text{ cm}$. Trên cạnh $AB$ lấy điểm $D$ sao cho $AD = 3\text{ cm}$, trên cạnh $AC$ lấy điểm $E$ sao cho $AE = 2\text{ cm}$.
a) Chứng minh rằng $\triangle ADE \backsim \triangle ACB$.
b) Biết $BC = 16\text{ cm}$, tính độ dài đoạn thẳng $DE$.
c) Chứng minh $\widehat{ADE} = \widehat{C}$.

**Lời giải:**

a) Xét hai tam giác $\triangle ADE$ và $\triangle ACB$:
- Góc $\widehat{A}$ là góc chung của cả hai tam giác.
- Xét tỉ số các cạnh kề góc $\widehat{A}$:
  $$\frac{AD}{AC} = \frac{3}{12} = \frac{1}{4}$$
  $$\frac{AE}{AB} = \frac{2}{8} = \frac{1}{4}$$
Vì $\frac{AD}{AC} = \frac{AE}{AB} = \frac{1}{4}$ và $\widehat{A}$ chung, nên:
$$\triangle ADE \backsim \triangle ACB\text{ (c - g - c)}\quad (\text{đpcm})$$

*(Lưu ý đỉnh tương ứng: $A \leftrightarrow A,\ D \leftrightarrow C,\ E \leftrightarrow B$)*.

b) Vì $\triangle ADE \backsim \triangle ACB$ theo tỉ số $k = \frac{1}{4}$:
$$\frac{DE}{CB} = \frac{1}{4} \implies DE = \frac{1}{4} \cdot BC = \frac{1}{4} \cdot 16 = 4\text{ cm}$$

c) Vì $\triangle ADE \backsim \triangle ACB$, các góc tương ứng bằng nhau:
$$\widehat{ADE} = \widehat{ACB} = \widehat{C}\quad (\text{đpcm})$$

---

### Dạng 3: Chứng minh tam giác đồng dạng theo trường hợp g-g

**Phương pháp giải:**
1. Khai thác các yếu tố góc:
   - Góc chung.
   - Góc đối đỉnh.
   - Các cặp góc tạo bởi các đường thẳng song song (so le trong, đồng vị).
   - Hai góc cùng phụ với một góc thứ ba (rất hay gặp trong tam giác vuông).
2. Khi chỉ ra đủ $2$ cặp góc bằng nhau $\implies$ kết luận đồng dạng theo trường hợp g-g.

---

#### Bài toán 3:
Cho tam giác nhọn $ABC$, hai đường cao $BD$ và $CE$ cắt nhau tại trực tâm $H$ ($D \in AC, E \in AB$).
a) Chứng minh rằng $\triangle ABD \backsim \triangle ACE$.
b) Chứng minh rằng $\triangle HBE \backsim \triangle HCD$.
c) Chứng minh hệ thức: $HB \cdot HD = HC \cdot HE$.

**Lời giải:**

a) Xét $\triangle ABD$ và $\triangle ACE$:
- $\widehat{ADB} = \widehat{AEC} = 90^\circ$ (do $BD \perp AC, CE \perp AB$).
- Góc $\widehat{A}$ là góc chung.
Suy ra:
$$\triangle ABD \backsim \triangle ACE\text{ (g - g)}\quad (\text{đpcm})$$

b) Xét $\triangle HBE$ và $\triangle HCD$:
- $\widehat{HEB} = \widehat{HDC} = 90^\circ$.
- $\widehat{BHE} = \widehat{CHD}$ (hai góc đối đỉnh).
Suy ra:
$$\triangle HBE \backsim \triangle HCD\text{ (g - g)}\quad (\text{đpcm})$$

c) Vì $\triangle HBE \backsim \triangle HCD$, lập tỉ số giữa các cạnh tương ứng:
$$\frac{HB}{HC} = \frac{HE}{HD}$$
Nhân chéo hai vế, ta được:
$$HB \cdot HD = HC \cdot HE\quad (\text{đpcm})$$

---

### Dạng 4: Chứng minh hệ thức đoạn thẳng dạng tích $AB \cdot CD = AC \cdot BD$

**Phương pháp giải sơ đồ tư duy ngược:**
$$\text{Cần chứng minh: } AB \cdot CD = AC \cdot BD$$
$$\Updownarrow$$
$$\text{Lập tỉ lệ thức: } \frac{AB}{AC} = \frac{BD}{CD}$$
$$\Updownarrow$$
$$\text{Tìm hai tam giác đồng dạng chứa các cạnh trên: } \triangle ABD \backsim \triangle ACD\text{ (hoặc cặp tam giác khác)}$$

---

#### Bài toán 4:
Cho hình thang $ABCD$ ($AB \parallel CD$, $AB < CD$). Hai đường chéo $AC$ và $BD$ cắt nhau tại điểm $O$.
a) Chứng minh rằng $\triangle OAB \backsim \triangle OCD$.
b) Chứng minh hệ thức: $OA \cdot OD = OB \cdot OC$.
c) Đường thẳng qua $O$ song song với hai đáy cắt $AD$ tại $M$, cắt $BC$ tại $N$. Chứng minh: $OM \cdot CD = OA \cdot CD - OM \cdot AB$.

**Lời giải:**

a) Vì $AB \parallel CD$:
- $\widehat{OAB} = \widehat{OCD}$ (hai góc so le trong).
- $\widehat{OBA} = \widehat{ODC}$ (hai góc so le trong).
Suy ra:
$$\triangle OAB \backsim \triangle OCD\text{ (g - g)}\quad (\text{đpcm})$$

b) Vì $\triangle OAB \backsim \triangle OCD$, ta có tỉ số các cạnh tương ứng:
$$\frac{OA}{OC} = \frac{OB}{OD}$$
Nhân chéo hai tỉ số:
$$OA \cdot OD = OB \cdot OC\quad (\text{đpcm})$$

c) Trong $\triangle ADC$, vì $OM \parallel CD$ nên theo hệ quả định lí Thalès:
$$\frac{OM}{CD} = \frac{AO}{AC} = \frac{AO}{AO + OC}$$
Nghịch đảo:
$$\frac{CD}{OM} = \frac{AO + OC}{AO} = 1 + \frac{OC}{AO}$$
Mà từ câu a ta có $\frac{OC}{AO} = \frac{CD}{AB}$, do đó:
$$\frac{CD}{OM} = 1 + \frac{CD}{AB} = \frac{AB + CD}{AB} \implies \frac{1}{OM} = \frac{1}{AB} + \frac{1}{CD}$$
Nhân cả hai vế với $OM \cdot CD \cdot AB$ và biến đổi tương đương, ta thu được hệ thức cần chứng minh.

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Định vị GPS & Phép giao hội góc trong Đo đạc Vệ tinh (Triangulation)
Hệ thống vệ tinh định vị toàn cầu GPS (Mỹ) và Galileo (Châu Âu) liên tục phát tín hiệu vô tuyến về Trái Đất:
- Máy thu GPS trên điện thoại đo góc và độ lệch thời gian từ ít nhất 3 vệ tinh, tạo nên các tam giác đồng dạng với mô hình không gian quỹ đạo.
- Áp dụng trường hợp đồng dạng Góc - Góc (g-g), chip xử lý tính ra tọa độ kinh độ, vĩ độ và độ cao của người dùng với độ sai lệch dưới $1\text{ mét}$!

### 2. Camera Đo khoảng cách Face ID trên Smartphone
Hệ thống camera TrueDepth trên iPhone chiếu một mạng lưới gồm $30\,000$ điểm chấm hồng ngoại vô hình lên khuôn mặt bạn:
- Cảm biến hồng ngoại thu lại mạng lưới điểm biến dạng.
- Mỗi chùm tia tạo với cảm biến một tam giác đồng dạng (g-g) so với mô hình mặt người $3D$ đã lưu trong chip bảo mật.
- Nhờ so sánh tỉ lệ tam giác đồng dạng trong thời gian thực (dưới $0.1$ giây), điện thoại mở khóa chuẩn xác ngay cả trong bóng tối hoàn toàn.

### 3. Kỹ thuật Render Đa giác $3D$ trong Ngành Làm phim Hoạt hình (Pixar, Disney)
Trong các bộ phim hoạt hình như Frozen hay Toy Story:
- Mọi nhân vật đều được ghép bởi hàng triệu mảnh tam giác nhỏ (gọi là lưới tam giác Mesh).
- Khi ánh sáng từ ngọn nến chiếu vào da nhân vật, thuật toán Ray Tracing tính toán các tia phản xạ qua các tam giác đồng dạng c-g-c để tạo nên bóng đổ mềm mại, chân thực như phim quay người thật.

### 4. Thiết bị Đo khoảng cách Laser trong Xây dựng (Laser Rangefinder)
Các kỹ sư xây dựng không còn dùng thước dây dài ngoằng để đo chiều cao tòa nhà hay bề rộng hố móng:
- Máy phát tia laser ngắm vào điểm trên đỉnh tường, tạo nên tam giác vuông đồng dạng với tam giác quang học bên trong thân máy.
- Bằng trường hợp đồng dạng Góc - Góc, màn hình máy hiển thị ngay lập tức độ dài khoảng cách chính xác đến từng milimét trong nháy mắt.

### 5. Y học Hiện đại: Phẫu thuật Nội soi Robot (Da Vinci Surgical System)
Trong các ca phẫu thuật tim mạch hay não bộ phức tạp:
- Tay gắp của robot phẫu thuật di chuyển tí hon bên trong cơ thể bệnh nhân mô phỏng chính xác từng milimét chuyển động của bàn tay bác sĩ bên ngoài bàn điều khiển.
- Mối liên hệ tỷ lệ giữa tay robot và tay người được điều khiển bởi hệ thống cơ điện tử dựa trên tam giác đồng dạng, giúp bác sĩ mổ chuẩn xác tuyệt đối mà không gây tổn thương các mô lành xung quanh.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hai tam giác đồng dạng theo trường hợp Cạnh - Cạnh - Cạnh (c-c-c) khi:",
  "options": [
    "Ba cạnh của tam giác này bằng ba cạnh của tam giác kia",
    "Ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia",
    "Hai cạnh tỉ lệ và một cạnh bằng nhau",
    "Ba góc của tam giác này tỉ lệ với ba góc của tam giác kia"
  ],
  "answer": 1,
  "explanation": "Định lí 1: Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đó đồng dạng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tam giác ABC có ba cạnh là 3 cm, 5 cm, 7 cm. Tam giác A prime B prime C prime đồng dạng với tam giác ABC có cạnh nhỏ nhất bằng 6 cm. Cạnh lớn nhất của tam giác A prime B prime C prime là:",
  "options": [
    "10 cm",
    "12 cm",
    "14 cm",
    "16 cm"
  ],
  "answer": 2,
  "explanation": "Cạnh nhỏ nhất của tam giác ABC là 3 cm. Tỉ số k = 6 / 3 = 2. Cạnh lớn nhất của tam giác ABC là 7 cm nên cạnh lớn nhất tương ứng là 7 * 2 = 14 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tam giác ABC và tam giác DEF có góc A = góc D. Cần thêm điều kiện nào sau đây để hai tam giác đồng dạng theo trường hợp c-g-c?",
  "options": [
    "AB / DE = BC / EF",
    "AB / DE = AC / DF",
    "AC / DF = BC / EF",
    "BC = EF"
  ],
  "answer": 1,
  "explanation": "Góc A được tạo bởi hai cạnh AB và AC; góc D được tạo bởi hai cạnh DE và DF. Để đồng dạng theo c-g-c thì hai cạnh tạo nên góc bằng nhau phải tỉ lệ: AB / DE = AC / DF."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho tam giác ABC có góc A = 50°, góc B = 70°. Tam giác MNP có góc M = 50°, góc P = 60°. Hai tam giác ABC và MNP có đồng dạng không?",
  "options": [
    "Có, theo trường hợp g-g",
    "Không đồng dạng vì góc B khác góc P",
    "Chưa đủ dữ kiện về cạnh",
    "Chỉ đồng dạng khi có thêm cạnh bằng nhau"
  ],
  "answer": 0,
  "explanation": "Trong tam giác ABC: góc C = 180° - (50° + 70°) = 60°. Vậy hai tam giác có góc A = góc M = 50° và góc C = góc P = 60°, suy ra đồng dạng theo trường hợp g-g."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác nhọn ABC có hai đường cao AD và BE cắt nhau tại H. Cặp tam giác nào sau đây ĐỒNG DẠNG với nhau?",
  "options": [
    "Tam giác HBD và tam giác HAE",
    "Tam giác ABD và tam giác EBD",
    "Tam giác AHE và tam giác ACD",
    "Tam giác HBE và tam giác HAD"
  ],
  "answer": 0,
  "explanation": "Xét tam giác HBD và tam giác HAE có: góc HDB = góc HEA = 90° và góc BHD = góc AHE (đối đỉnh). Do đó tam giác HBD đồng dạng tam giác HAE (g-g)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hình thang ABCD (AB ∥ CD). Hai đường chéo AC và BD cắt nhau tại O. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "OA · OB = OC · OD",
    "OA · OD = OB · OC",
    "OA · OC = OB · OD",
    "OA + OD = OB + OC"
  ],
  "answer": 1,
  "explanation": "Vì AB ∥ CD nên tam giác OAB đồng dạng tam giác OCD (g-g) ⇒ OA / OC = OB / OD ⇒ OA · OD = OB · OC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tam giác ABC vuông tại A có đường cao AH. Có bao nhiêu cặp tam giác đồng dạng với nhau trong hình vẽ?",
  "options": [
    "1 cặp",
    "2 cặp",
    "3 cặp",
    "4 cặp"
  ],
  "answer": 2,
  "explanation": "Có 3 cặp tam giác đồng dạng: tam giác HBA đồng dạng tam giác ABC, tam giác HAC đồng dạng tam giác ABC, và tam giác HBA đồng dạng tam giác HAC (tất cả đều theo g-g)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác ABC có AB = 4 cm, AC = 6 cm. Lấy D trên AB sao cho AD = 2 cm, lấy E trên AC sao cho AE = 3 cm. Tỉ số diện tích của tam giác ADE so với diện tích tam giác ABC là:",
  "options": [
    "1/2",
    "1/4",
    "1/3",
    "1/6"
  ],
  "answer": 1,
  "explanation": "Ta có AD / AB = 2 / 4 = 1/2 và AE / AC = 3 / 6 = 1/2. Góc A chung ⇒ tam giác ADE đồng dạng tam giác ABC (c-g-c) theo tỉ số k = 1/2. Tỉ số diện tích là k^2 = (1/2)^2 = 1/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho tam giác ABC vuông tại A, đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài đường cao AH là:",
  "options": [
    "6 cm",
    "6.5 cm",
    "5 cm",
    "36 cm"
  ],
  "answer": 0,
  "explanation": "Tam giác HBA đồng dạng tam giác HAC (g-g) ⇒ AH / CH = BH / AH ⇒ AH^2 = BH · CH = 4 · 9 = 36 ⇒ AH = 6 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khẳng định nào sau đây là SAI?",
  "options": [
    "Hai tam giác đều bất kì luôn đồng dạng với nhau",
    "Hai tam giác vuông cân bất kì luôn đồng dạng với nhau",
    "Hai tam giác cân bất kì luôn đồng dạng với nhau",
    "Hai tam giác vuông có một góc nhọn bằng nhau thì đồng dạng với nhau"
  ],
  "answer": 2,
  "explanation": "Hai tam giác cân bất kì không nhất thiết đồng dạng vì góc ở đỉnh hoặc các góc ở đáy của chúng có thể khác nhau (ví dụ: một tam giác cân có góc ở đỉnh 40°, tam giác cân khác có góc ở đỉnh 100°)."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Cho $\triangle ABC$ có $AB = 9\text{ cm}, AC = 12\text{ cm}, BC = 15\text{ cm}$. Tam giác $A'B'C'$ có $A'B' = 6\text{ cm}, A'C' = 8\text{ cm}, B'C' = 10\text{ cm}$.
   a) Chứng minh rằng $\triangle ABC \backsim \triangle A'B'C'$.
   b) Tam giác $ABC$ là tam giác gì? Vì sao?
2. Cho góc nhọn $xOy$. Trên tia $Ox$ lấy hai điểm $A, B$ sao cho $OA = 4\text{ cm}, OB = 12\text{ cm}$. Trên tia $Oy$ lấy hai điểm $C, D$ sao cho $OC = 6\text{ cm}, OD = 8\text{ cm}$.
   a) Chứng minh rằng $\triangle OAD \backsim \triangle OCB$.
   b) Gọi $I$ là giao điểm của $AD$ và $BC$. Chứng minh rằng $\triangle IAB \backsim \triangle ICD$.

### Bài tập nâng cao & Vận dụng thực tế
3. Cho tam giác $ABC$ có ba góc nhọn, các đường cao $AD, BE, CF$ cắt nhau tại trực tâm $H$.
   a) Chứng minh rằng $AF \cdot AB = AE \cdot AC$.
   b) Chứng minh rằng $\triangle AEF \backsim \triangle ABC$.
   c) Chứng minh rằng $H$ là tâm đường tròn nội tiếp tam giác $DEF$ (giao điểm ba đường phân giác).
4. **Thử thách đo chiều cao cây bằng bóng:** Một học sinh muốn đo chiều cao của một cây bàng trong sân trường. Bạn cắm một chiếc cọc tiêu dài $1.6\text{ m}$ vuông góc với mặt đất, cọc đổ bóng dài $1.2\text{ m}$. Cùng thời điểm đó, bóng của cây bàng trên sân trường dài $9\text{ m}$.
   a) Hãy vẽ hình minh họa và chỉ ra hai tam giác đồng dạng.
   b) Tính chiều cao thực tế của cây bàng.
