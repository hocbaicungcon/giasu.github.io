---
title: 'Toán 12 Bài 17: Xác suất có điều kiện'
description: 'Lý thuyết trọng tâm Bài 17 Toán 12 Kết nối tri thức: Định nghĩa xác suất có điều kiện, công thức nhân xác suất, sơ đồ hình cây, bảng ngẫu nhiên kèm mô phỏng Venn tương tác thu hẹp không gian mẫu và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Xác suất
  - Xác suất có điều kiện
  - Sơ đồ hình cây
  - Công thức nhân
  - Kết nối tri thức
grade: 12
---

# Bài 17. Xác suất có điều kiện

Trong cuộc sống hàng ngày, chúng ta liên tục cập nhật xác suất khi có thêm thông tin mới:
- Xác suất một người bị cảm cúm bình thường là $5\%$. Nhưng **nếu biết người đó vừa tiếp xúc gần với một bệnh nhân F0**, xác suất mắc bệnh có còn là $5\%$ không? Chắc chắn phải cao hơn rất nhiều!
- Xác suất một học sinh được điểm 10 môn Toán có thể chỉ là $10\%$. Nhưng **nếu biết học sinh đó là thành viên đội tuyển Toán Quốc gia**, xác suất đó có thể lên tới $90\%$!

Khi biết một biến cố $B$ **đã xảy ra**, không gian mẫu của phép thử không còn là toàn bộ $\Omega$ nữa, mà bị thu hẹp lại chỉ còn tập hợp $B$. Xác suất của biến cố $A$ tính trên không gian mẫu thu hẹp $B$ đó được gọi là **Xác suất có điều kiện**, kí hiệu là $P(A|B)$.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: XÁC SUẤT CÓ ĐIỀU KIỆN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Định nghĩa cốt lõi</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Biến cố $B$ đã xảy ra ($P(B) > 0$):<br>
$\mathbf{P(A|B) = \frac{P(A \cap B)}{P(B)}}$.<br>
• Đồng khả năng: $P(A|B) = \frac{n(A \cap B)}{n(B)}$.<br>
• Không gian mẫu bị thu hẹp từ $\Omega$ về $B$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Công thức nhân xác suất</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\mathbf{P(A \cap B) = P(B) \cdot P(A|B)}$.<br>
• $\mathbf{P(A \cap B) = P(A) \cdot P(B|A)}$.<br>
• Nếu $A, B$ độc lập: $P(A|B) = P(A) \implies P(A \cap B) = P(A)P(B)$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Sơ đồ hình cây</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Gốc $\to$ Nhánh giai đoạn 1 ($B$ hoặc $\bar{B}$).<br>
• Nhánh tiếp theo giai đoạn 2 ($A|B$ hoặc $A|\bar{B}$).<br>
• Xác suất mỗi con đường bằng tích các xác suất trên nhánh.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bảng chéo 2 chiều</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Phân tích dữ liệu theo 2 tiêu chí $(A, \bar{A})$ và $(B, \bar{B})$.<br>
• Dễ dàng đọc trực tiếp số phần tử giao nhau và tổng từng dòng, từng cột.
</p>
</div>
</div>
</div>

---

## 1. Định nghĩa xác suất có điều kiện

::: tip Định nghĩa xác suất có điều kiện
Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được gọi là **xác suất của $A$ với điều kiện $B$**, kí hiệu là $P(A|B)$.

Nếu $P(B) > 0$ thì:
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$
:::

Trong đó:
- $A \cap B$ (hoặc viết tắt là $AB$) là biến cố giao: cả $A$ và $B$ cùng xảy ra.
- $P(B)$ là xác suất của biến cố điều kiện $B$.

### Công thức tính khi các kết quả đồng khả năng
Nếu không gian mẫu $\Omega$ gồm hữu hạn kết quả đồng khả năng xuất hiện thì:
$$P(A|B) = \frac{n(A \cap B)}{n(B)}$$
*(trong đó $n(A \cap B)$ là số kết quả thuận lợi cho $A \cap B$, còn $n(B)$ là số kết quả thuận lợi cho $B$)*.

---

## 2. Công thức nhân xác suất

Từ định nghĩa xác suất có điều kiện, nhân chéo mẫu số ta thu được **Công thức nhân xác suất**:

::: tip Công thức nhân xác suất
Với hai biến cố bất kì $A$ và $B$:
$$P(A \cap B) = P(B) \cdot P(A|B) \quad (\text{nếu } P(B) > 0)$$
$$P(A \cap B) = P(A) \cdot P(B|A) \quad (\text{nếu } P(A) > 0)$$
:::

> **Liên hệ với tính độc lập:**  
> Nếu hai biến cố $A$ và $B$ **độc lập** với nhau (việc xảy ra hay không xảy ra của biến cố này hoàn toàn không ảnh hưởng đến xác suất của biến cố kia) thì:
> $$P(A|B) = P(A) \quad \text{và} \quad P(B|A) = P(B)$$
> Khi đó công thức nhân trở về dạng quen thuộc đã học ở lớp 11:
> $$P(A \cap B) = P(A) \cdot P(B)$$

---

## 3. Mô phỏng trực quan: Sự thu hẹp không gian mẫu (Biểu đồ Venn)

Bản chất của xác suất có điều kiện $P(A|B)$ là: **Toàn bộ không gian mẫu $\Omega$ bị thu nhỏ lại thành tập hợp $B$!** Khi đó, phần diện tích của $A$ có thể xảy ra chỉ còn là phần giao nhau $A \cap B$.

Hãy kéo thanh trượt để thay đổi **xác suất $P(B)$** và **phần giao $P(A \cap B)$** dưới đây để quan sát $P(A|B)$ thay đổi tức thì:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Xác suất điều kiện $P(B)$: <span id="val-pb" style="color: #2563eb; font-weight: bold;">0.50</span></label><br>
      <input type="range" id="slider-pb" min="0.2" max="0.8" value="0.5" step="0.05" style="width: 200px; accent-color: #2563eb;">
    </div>
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Phần giao $P(A \cap B)$: <span id="val-pab" style="color: #10b981; font-weight: bold;">0.20</span></label><br>
      <input type="range" id="slider-pab" min="0.05" max="0.4" value="0.2" step="0.05" style="width: 200px; accent-color: #10b981;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Xác suất có điều kiện:</strong><br>
      $P(A|B) = \frac{P(A \cap B)}{P(B)} = $ <span id="val-cond" style="color: #dc2626; font-weight: bold; font-size: 1.1em;">0.40</span>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 320px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="venn-cond-svg" data-interactive-done="true" viewBox="0 0 700 320" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    Khi $B$ đã xảy ra, chỉ vùng màu xanh dương $B$ là có nghĩa. Tỷ lệ phần màu xanh lá $A \cap B$ chiếm trong $B$ chính là xác suất $P(A|B)$.
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('venn-cond-svg');
  const sliderPb = document.getElementById('slider-pb');
  const sliderPab = document.getElementById('slider-pab');
  const valPb = document.getElementById('val-pb');
  const valPab = document.getElementById('val-pab');
  const valCond = document.getElementById('val-cond');

  if (!svg || !sliderPb || !sliderPab) return;

  function render() {
    let pB = parseFloat(sliderPb.value);
    let pAB = parseFloat(sliderPab.value);

    // Đảm bảo P(A cap B) <= P(B)
    if (pAB > pB) {
      pAB = pB;
      sliderPab.value = pAB;
    }

    const cond = pAB / pB;

    valPb.textContent = pB.toFixed(2);
    valPab.textContent = pAB.toFixed(2);
    valCond.textContent = cond.toFixed(2);

    const rB = 70 + pB * 60;
    const rA = 90;
    const cBx = 410, cBy = 160;
    const cAx = 270, cAy = 160;

    let html = `
      <!-- Khung không gian mẫu Omega -->
      <rect x="50" y="30" width="600" height="260" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.8" />
      <text x="75" y="60" font-size="16" fill="#64748b" font-weight="bold">Không gian mẫu Ω</text>

      <!-- Vòng tròn tập A -->
      <circle cx="${cAx}" cy="${cAy}" r="${rA}" fill="rgba(245, 158, 11, 0.22)" stroke="#f59e0b" stroke-width="2" />
      <text x="${cAx - 45}" y="${cAy}" font-size="15" fill="#d97706" font-weight="bold">Tập A</text>

      <!-- Vòng tròn tập B (Không gian mẫu thu hẹp) -->
      <circle cx="${cBx}" cy="${cBy}" r="${rB}" fill="rgba(37, 99, 235, 0.25)" stroke="#2563eb" stroke-width="2.5" />
      <text x="${cBx + 35}" y="${cBy}" font-size="15" fill="#2563eb" font-weight="bold">Tập B</text>

      <!-- Phần giao A cap B -->
      <!-- Điểm tâm phần giao -->
      <text x="${(cAx + cBx) / 2}" y="${cAy - 10}" font-size="13" fill="#047857" font-weight="bold" text-anchor="middle">A ∩ B</text>
      <text x="${(cAx + cBx) / 2}" y="${cAy + 12}" font-size="11" fill="#047857" text-anchor="middle">P(A∩B) = ${pAB.toFixed(2)}</text>
      <text x="${cBx}" y="${cBy + rB - 20}" font-size="12" fill="#1d4ed8" text-anchor="middle">P(B) = ${pB.toFixed(2)}</text>

      <!-- Tỉ lệ điều kiện -->
      <rect x="250" y="245" width="200" height="32" rx="6" fill="#ffffff" stroke="#cbd5e1" />
      <text x="350" y="266" font-size="13" fill="#dc2626" font-weight="bold" text-anchor="middle">P(A|B) = ${pAB.toFixed(2)} / ${pB.toFixed(2)} = ${(pAB/pB).toFixed(2)}</text>
    `;

    svg.innerHTML = html;
  }

  sliderPb.addEventListener('input', render);
  sliderPab.addEventListener('input', render);
  render();
})();
</script>

---

## 4. Các phương pháp biểu diễn trực quan: Sơ đồ hình cây & Bảng chéo 2 chiều

### 4.1. Sơ đồ hình cây (Tree Diagram)
Sơ đồ hình cây là công cụ hữu hiệu nhất để giải các bài toán xác suất gồm nhiều bước hoặc nhiều giai đoạn liên tiếp:
1. Từ gốc rẽ ra các nhánh của giai đoạn 1 ứng với các biến cố $B$ và biến cố đối $\bar{B}$.
2. Từ mỗi nhánh giai đoạn 1, tiếp tục rẽ ra các nhánh giai đoạn 2 ứng với $A$ và $\bar{A}$ kèm các xác suất có điều kiện tương ứng $P(A|B), P(\bar{A}|B), P(A|\bar{B}), P(\bar{A}|\bar{B})$.
3. **Quy tắc tính:** Xác suất của một kết cục ở cuối mỗi cành cây bằng **tích của tất cả các xác suất** ghi trên các nhánh dẫn đến cành cây đó.

### 4.2. Bảng ngẫu nhiên 2 chiều (Contingency Table)
Khi dữ liệu thống kê được phân loại đồng thời theo hai tiêu chí (ví dụ: Giới tính nam/nữ và Tình trạng hút thuốc/không hút thuốc):

| | Biến cố $B$ | Biến cố $\bar{B}$ | **Tổng cộng** |
| :--- | :---: | :---: | :---: |
| **Biến cố $A$** | $n(A \cap B)$ | $n(A \cap \bar{B})$ | $n(A)$ |
| **Biến cố $\bar{A}$** | $n(\bar{A} \cap B)$ | $n(\bar{A} \cap \bar{B})$ | $n(\bar{A})$ |
| **Tổng cộng** | $n(B)$ | $n(\bar{B})$ | $n(\Omega)$ |

Từ bảng này:
$$P(A|B) = \frac{n(A \cap B)}{n(B)}, \quad P(B|A) = \frac{n(A \cap B)}{n(A)}$$

---

## 5. Các ví dụ minh họa áp dụng chi tiết

### Ví dụ 1: Gieo súc sắc cân đối

Gieo một con súc sắc cân đối và đồng chất một lần.  
a) Tính xác suất để xuất hiện mặt có số chấm là số nguyên tố.  
b) Biết rằng mặt xuất hiện có số chấm là số lẻ, tính xác suất để số chấm xuất hiện là số nguyên tố.

#### Lời giải:
Không gian mẫu là $\Omega = \{1, 2, 3, 4, 5, 6\} \implies n(\Omega) = 6$.
- Gọi $A$ là biến cố: "Số chấm là số nguyên tố". Các kết quả thuận lợi: $A = \{2, 3, 5\} \implies n(A) = 3$.  
  Vậy $P(A) = \frac{3}{6} = \frac{1}{2} = 0.5$.
- Gọi $B$ là biến cố: "Số chấm là số lẻ". Các kết quả thuận lợi: $B = \{1, 3, 5\} \implies n(B) = 3$.  
  Biến cố $A \cap B$: "Số chấm vừa là số lẻ vừa là số nguyên tố": $A \cap B = \{3, 5\} \implies n(A \cap B) = 2$.
- Khi biết $B$ đã xảy ra, không gian mẫu thu hẹp chỉ còn 3 kết quả lẻ $\{1, 3, 5\}$. Xác suất có điều kiện là:
  $$P(A|B) = \frac{n(A \cap B)}{n(B)} = \frac{2}{3} \approx 0.67$$
> *Nhận xét:* $P(A|B) = \frac{2}{3} \neq P(A) = \frac{1}{2}$. Thông tin "số chấm là lẻ" đã làm tăng xác suất số chấm là số nguyên tố từ $50\%$ lên $66.7\%$!

---

### Ví dụ 2: Lấy mẫu không hoàn lại (Áp dụng công thức nhân)

Một hộp có 10 viên bi gồm 6 viên bi xanh và 4 viên bi đỏ. Lấy ngẫu nhiên lần lượt 2 viên bi (không hoàn lại).  
a) Tính xác suất để viên bi thứ hai lấy được là màu đỏ, biết rằng viên bi thứ nhất lấy được là màu xanh.  
b) Tính xác suất để cả 2 viên bi lấy ra đều có màu xanh.

#### Lời giải:
Gọi $A$ là biến cố "Viên thứ nhất màu xanh", $B$ là biến cố "Viên thứ hai màu đỏ", $C$ là biến cố "Viên thứ hai màu xanh".
- a) Khi viên thứ nhất lấy ra là màu xanh, trong hộp còn lại tổng cộng $9$ viên bi (gồm $5$ xanh và $4$ đỏ).  
  Do đó xác suất để viên thứ hai lấy được là màu đỏ với điều kiện viên thứ nhất màu xanh là:
  $$P(B|A) = \frac{4}{9}$$
- b) Biến cố "Cả hai viên đều màu xanh" chính là $A \cap C$.  
  Xác suất viên thứ nhất màu xanh là $P(A) = \frac{6}{10} = \frac{3}{5}$.  
  Sau khi lấy 1 viên xanh, xác suất viên thứ hai cũng màu xanh là $P(C|A) = \frac{5}{9}$.  
  Áp dụng công thức nhân xác suất:
  $$P(A \cap C) = P(A) \cdot P(C|A) = \frac{6}{10} \cdot \frac{5}{9} = \frac{30}{90} = \frac{1}{3}$$

---

## 6. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Công thức tính xác suất có điều kiện của biến cố $A$ khi biết biến cố $B$ đã xảy ra là:",
  "options": [
    "A. $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$",
    "B. $P(A|B) = \\frac{P(A \\cap B)}{P(A)}$",
    "C. $P(A|B) = \\frac{P(B)}{P(A \\cap B)}$",
    "D. $P(A|B) = P(A) \\cdot P(B)$"
  ],
  "answer": "A. $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$",
  "explanation": "Theo định nghĩa, xác suất của $A$ với điều kiện $B$ là tỷ số giữa xác suất phần giao $A \\cap B$ và xác suất của biến cố điều kiện $B$: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4$, $P(B) = 0.5$ và $P(A \\cap B) = 0.2$. Giá trị của $P(A|B)$ là:",
  "options": [
    "A. 0.4",
    "B. 0.5",
    "C. 0.2",
    "D. 0.8"
  ],
  "answer": "A. 0.4",
  "explanation": "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Với giả thiết ở câu trên ($P(A) = 0.4, P(B) = 0.5, P(A \\cap B) = 0.2$), hai biến cố $A$ và $B$ có quan hệ gì?",
  "options": [
    "A. $A$ và $B$ xung khắc",
    "B. $A$ và $B$ độc lập",
    "C. $A$ kéo theo $B$",
    "D. $A$ và $B$ đối nhau"
  ],
  "answer": "B. $A$ và $B$ độc lập",
  "explanation": "Ta thấy $P(A) \\cdot P(B) = 0.4 \\cdot 0.5 = 0.2 = P(A \\cap B)$. Do đó $A$ và $B$ là hai biến cố độc lập."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Một hộp có 5 quả cầu trắng và 3 quả cầu đen. Lấy ngẫu nhiên lần lượt 2 quả không hoàn lại. Xác suất để quả thứ hai màu trắng biết quả thứ nhất màu đen là:",
  "options": [
    "A. $\\frac{5}{7}$",
    "B. $\\frac{5}{8}$",
    "C. $\\frac{2}{7}$",
    "D. $\\frac{3}{8}$"
  ],
  "answer": "A. $\\frac{5}{7}$",
  "explanation": "Sau khi lấy quả thứ nhất màu đen, trong hộp còn 7 quả (gồm 5 trắng và 2 đen). Xác suất lấy được quả trắng là $\\frac{5}{7}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khảo sát 100 học sinh: 60 bạn thích môn Toán, 40 bạn thích môn Văn, trong đó có 25 bạn thích cả hai môn. Chọn ngẫu nhiên một bạn thích môn Văn, xác suất bạn đó cũng thích môn Toán là:",
  "options": [
    "A. $\\frac{25}{40} = 0.625$",
    "B. $\\frac{25}{60} \\approx 0.417$",
    "C. $\\frac{25}{100} = 0.25$",
    "D. $\\frac{40}{60} \\approx 0.667$"
  ],
  "answer": "A. $\\frac{25}{40} = 0.625$",
  "explanation": "Điều kiện là bạn đó thích môn Văn ($n(V) = 40$). Số bạn vừa thích Văn vừa thích Toán là $n(T \\cap V) = 25$. Vậy $P(T|V) = \\frac{25}{40} = 0.625$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Gieo hai con súc sắc cân đối. Biết tổng số chấm xuất hiện bằng 8. Xác suất để có ít nhất một con súc sắc xuất hiện mặt 5 chấm là:",
  "options": [
    "A. $\\frac{2}{5}$",
    "B. $\\frac{1}{5}$",
    "C. $\\frac{2}{36}$",
    "D. $\\frac{1}{6}$"
  ],
  "answer": "A. $\\frac{2}{5}$",
  "explanation": "Các cặp có tổng bằng 8 là: $B = \\{(2;6), (3;5), (4;4), (5;3), (6;2)\\} \\implies n(B) = 5$. Trong đó có 2 cặp chứa mặt 5 chấm là $(3;5)$ và $(5;3)$. Vậy xác suất là $\\frac{2}{5}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nếu hai biến cố $A$ và $B$ xung khắc ($A \\cap B = \\emptyset$) và $P(B) > 0$ thì $P(A|B)$ bằng:",
  "options": [
    "A. 0",
    "B. 1",
    "C. $P(A)$",
    "D. Không xác định"
  ],
  "answer": "A. 0",
  "explanation": "Vì $A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$. Do đó $P(A|B) = \\frac{0}{P(B)} = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $P(A) = 0.6$, $P(B|A) = 0.7$. Xác suất của biến cố giao $A \\cap B$ là:",
  "options": [
    "A. 0.42",
    "B. 0.13",
    "C. 0.85",
    "D. 0.10"
  ],
  "answer": "A. 0.42",
  "explanation": "Theo công thức nhân xác suất: $P(A \\cap B) = P(A) \\cdot P(B|A) = 0.6 \\cdot 0.7 = 0.42$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Công thức nào sau đây ĐÚNG với hai biến cố $A$ và $B$ bất kì có $P(A) > 0, P(B) > 0$?",
  "options": [
    "A. $P(A|B) \\cdot P(B) = P(B|A) \\cdot P(A)$",
    "B. $P(A|B) = P(B|A)$",
    "C. $P(A|B) + P(B|A) = 1$",
    "D. $P(A|B) \\cdot P(B|A) = P(A \\cap B)$"
  ],
  "answer": "A. $P(A|B) \\cdot P(B) = P(B|A) \\cdot P(A)$",
  "explanation": "Cả hai vế đều cùng bằng $P(A \\cap B)$ theo công thức nhân xác suất."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho biến cố $A$ và biến cố đối $\\bar{A}$. Với biến cố điều kiện $B$ ($P(B) > 0$), đẳng thức nào sau đây luôn đúng?",
  "options": [
    "A. $P(A|B) + P(\\bar{A}|B) = 1$",
    "B. $P(A|B) + P(A|\\bar{B}) = 1$",
    "C. $P(A|B) = 1 - P(B|A)$",
    "D. $P(A|B) = P(\\bar{A}|\\bar{B})$"
  ],
  "answer": "A. $P(A|B) + P(\\bar{A}|B) = 1$",
  "explanation": "Trên không gian mẫu thu hẹp $B$, hai biến cố $A$ và $\\bar{A}$ vẫn là hai biến cố đối lập và vét cạn, do đó tổng xác suất của chúng luôn bằng 1."
}'></div>
