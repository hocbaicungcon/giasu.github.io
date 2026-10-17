---
title: 'Toán 12 Bài 18: Công thức xác suất toàn phần và công thức Bayes'
description: 'Lý thuyết trọng tâm Bài 18 Toán 12 Kết nối tri thức: Hệ đầy đủ các biến cố, công thức xác suất toàn phần, công thức Bayes, ứng dụng chẩn đoán y khoa và AI kèm mô phỏng tương tác nghịch lý xét nghiệm và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Xác suất
  - Xác suất toàn phần
  - Công thức Bayes
  - Nghịch lý xét nghiệm
  - Kết nối tri thức
grade: 12
---

# Bài 18. Công thức xác suất toàn phần và công thức Bayes

Trong khoa học dữ liệu, trí tuệ nhân tạo (Machine Learning) và y học hiện đại, có hai công cụ xác suất được coi là "kinh điển" và có tầm ảnh hưởng sâu rộng nhất: **Công thức xác suất toàn phần** và **Công thức Bayes**.

Giả sử một bệnh viện sử dụng một bộ kít xét nghiệm có độ chính xác lên đến $99\%$. Một người đi xét nghiệm và nhận kết quả **Dương tính (+)**. Liệu có phải người đó chắc chắn $99\%$ đã mắc bệnh hiểm nghèo? **Hoàn toàn không!** Nếu căn bệnh đó rất hiếm trong cộng đồng (chỉ $1$ trên $1000$ người mắc), thì xác suất thực sự người đó bị bệnh có khi chỉ chưa đầy $9\%$! Nghịch lý kinh điển này sẽ được giải thích sáng tỏ và toán học hóa một cách chính xác tuyệt đối thông qua bài học hôm nay.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: XÁC SUẤT TOÀN PHẦN & BAYES</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Nhóm biến cố đầy đủ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $A_1, A_2, \dots, A_n$ đôi một xung khắc ($A_i \cap A_j = \emptyset$).<br>
• Hợp phủ kín không gian mẫu: $\bigcup A_i = \Omega$.<br>
• Trường hợp phổ biến nhất: cặp biến cố đối $A$ và $\bar{A}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Xác suất toàn phần</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tính xác suất kết quả $B$ qua mọi nguyên nhân:<br>
$\mathbf{P(B) = \sum_{i=1}^n P(A_i)P(B|A_i)}$.<br>
• Với 2 nhánh: $\mathbf{P(B) = P(A)P(B|A) + P(\bar{A})P(B|\bar{A})}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Công thức Bayes</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• <strong>Đảo ngược điều kiện</strong>: Tính xác suất nguyên nhân khi biết kết quả $B$ đã xảy ra:<br>
$\mathbf{P(A_k|B) = \frac{P(A_k)P(B|A_k)}{P(B)}}$.<br>
• Nền tảng của bộ lọc thư rác, thuật toán AI Naive Bayes.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Xác suất tiền nghiệm & Hậu nghiệm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $P(A_k)$: Xác suất ban đầu (tiền nghiệm / Prior).<br>
• Nhận bằng chứng mới $B$.<br>
• $P(A_k|B)$: Xác suất cập nhật sau bằng chứng (hậu nghiệm / Posterior).
</p>
</div>
</div>
</div>

---

## 1. Nhóm biến cố đầy đủ (Hệ đầy đủ các biến cố)

::: tip Định nghĩa nhóm biến cố đầy đủ
Các biến cố $A_1, A_2, \dots, A_n$ được gọi là một **nhóm biến cố đầy đủ** (hay hệ đầy đủ) nếu chúng thỏa mãn hai điều kiện:
1. Đôi một xung khắc: $A_i \cap A_j = \emptyset$ với mọi $i \neq j$.
2. Hợp của chúng là không gian mẫu: $A_1 \cup A_2 \cup \dots \cup A_n = \Omega$.
:::

> **Hệ quả quan trọng:** Khi tiến hành phép thử, **chắc chắn có một và chỉ một** biến cố trong nhóm $A_1, A_2, \dots, A_n$ xảy ra.  
> Do đó:
> $$P(A_1) + P(A_2) + \dots + P(A_n) = 1$$

Trường hợp đặc biệt thường gặp nhất là $n = 2$: Với mọi biến cố $A$, hai biến cố **$A$ và biến cố đối $\bar{A}$** luôn tạo thành một nhóm biến cố đầy đủ vì $A \cap \bar{A} = \emptyset$ và $A \cup \bar{A} = \Omega$.

---

## 2. Công thức xác suất toàn phần

Giả sử biến cố $B$ có thể xảy ra cùng với một trong các biến cố của nhóm đầy đủ $A_1, A_2, \dots, A_n$. Vì các biến cố $A_i$ phủ kín $\Omega$, ta có thể phân tích $B$ thành các mảnh rời nhau:
$$B = B \cap \Omega = B \cap (A_1 \cup A_2 \cup \dots \cup A_n) = (B \cap A_1) \cup (B \cap A_2) \cup \dots \cup (B \cap A_n)$$

Vì các $A_i$ đôi một xung khắc nên các giao $(B \cap A_i)$ cũng đôi một xung khắc. Lấy xác suất và áp dụng công thức nhân:

::: tip Công thức xác suất toàn phần
Cho $A_1, A_2, \dots, A_n$ là một nhóm biến cố đầy đủ với $P(A_i) > 0$. Với một biến cố $B$ bất kì, ta có:
$$P(B) = \sum_{i=1}^n P(A_i) \cdot P(B|A_i) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) + \dots + P(A_n)P(B|A_n)$$
:::

::: tip Dạng 2 biến cố đối nhau (phổ biến nhất)
Nếu $A$ và $\bar{A}$ là hai biến cố đối nhau thì với biến cố $B$ bất kì:
$$P(B) = P(A) \cdot P(B|A) + P(\bar{A}) \cdot P(B|\bar{A})$$
:::

---

## 3. Công thức Bayes

Nhà toán học kiêm mục sư người Anh **Thomas Bayes (1701 – 1761)** đã đặt câu hỏi ngược lại:  
*Nếu biến cố $B$ đã xảy ra, xác suất để nó bắt nguồn từ nguyên nhân cụ thể $A_k$ là bao nhiêu?*

Theo định nghĩa xác suất có điều kiện:
$$P(A_k|B) = \frac{P(A_k \cap B)}{P(B)}$$
Thay $P(A_k \cap B) = P(A_k) \cdot P(B|A_k)$ ở tử số, và thay $P(B)$ bằng công thức xác suất toàn phần ở mẫu số, ta thu được:

::: tip Công thức Bayes
Cho $A_1, A_2, \dots, A_n$ là một nhóm biến cố đầy đủ và $B$ là biến cố có $P(B) > 0$. Khi đó với mỗi $k \in \{1, 2, \dots, n\}$:
$$P(A_k|B) = \frac{P(A_k) \cdot P(B|A_k)}{\sum_{i=1}^n P(A_i) \cdot P(B|A_i)} = \frac{P(A_k) \cdot P(B|A_k)}{P(B)}$$
:::

::: tip Dạng hai biến cố đối nhau
$$P(A|B) = \frac{P(A) \cdot P(B|A)}{P(A) \cdot P(B|A) + P(\bar{A}) \cdot P(B|\bar{A})}$$
:::

---

## 4. Mô phỏng tương tác: Nghịch lý xét nghiệm y tế và Định lý Bayes

Xét một căn bệnh có tỷ lệ mắc trong cộng đồng là $P(\text{Bệnh})$ (tiền nghiệm).  
Một xét nghiệm có độ nhạy $P(+|\text{Bệnh}) = 99\%$ (người bệnh xét nghiệm đúng dương tính) và độ đặc hiệu $P(-|\text{Khỏe}) = 98\%$ (người khỏe cho âm tính, tức có $2\%$ dương tính giả).

Hãy kéo thanh trượt **tỷ lệ người mắc bệnh trong cộng đồng** để quan sát xác suất thực sự một người bị bệnh khi đã nhận kết quả Dương tính $P(\text{Bệnh}|+)$:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Tỷ lệ mắc bệnh trong dân số: <span id="val-prev" style="color: #2563eb; font-weight: bold;">0.2%</span></label><br>
      <input type="range" id="slider-prev" min="0.05" max="5.0" value="0.2" step="0.05" style="width: 220px; accent-color: #2563eb;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Xác suất thực sự bị bệnh khi test (+):</strong><br>
      $P(\text{Bệnh}|+) = $ <span id="val-bayes-res" style="color: #dc2626; font-weight: bold; font-size: 1.15em;">9.0%</span>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 330px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="bayes-tree-svg" data-interactive-done="true" viewBox="0 0 700 330" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 10px; font-size: 0.85em; color: var(--text-muted, #64748b); text-align: center;">
    <strong>Nghịch lý Bayes:</strong> Dù kít xét nghiệm chính xác 99%, nhưng vì bệnh quá hiếm (0.2%), số người khỏe bị dương tính giả (2% của 99.8%) vẫn nhiều gấp 10 lần số người thực sự mắc bệnh!
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('bayes-tree-svg');
  const slider = document.getElementById('slider-prev');
  const valPrev = document.getElementById('val-prev');
  const valBayesRes = document.getElementById('val-bayes-res');

  if (!svg || !slider) return;

  function render() {
    const prevPct = parseFloat(slider.value);
    valPrev.textContent = `${prevPct.toFixed(2)}%`;

    const P_D = prevPct / 100; // P(Bệnh)
    const P_notD = 1 - P_D;    // P(Khỏe)

    const P_pos_given_D = 0.99;     // Độ nhạy
    const P_pos_given_notD = 0.02;  // Dương tính giả (1 - 0.98)

    // Xác suất toàn phần có kết quả dương tính
    const truePos = P_D * P_pos_given_D;
    const falsePos = P_notD * P_pos_given_notD;
    const P_pos = truePos + falsePos;

    // Bayes: P(Bệnh | +)
    const P_D_given_pos = (truePos / P_pos) * 100;
    valBayesRes.textContent = `${P_D_given_pos.toFixed(1)}%`;

    // Toạ độ các nút cây
    const rootX = 60, rootY = 165;
    const n1X = 260, n1Y = 85;   // Nhánh Bệnh
    const n2X = 260, n2Y = 245;  // Nhánh Khỏe

    const leafX = 500;
    const l1Y = 55, l2Y = 115, l3Y = 215, l4Y = 275;

    let html = `
      <!-- Gốc cây -->
      <circle cx="${rootX}" cy="${rootY}" r="6" fill="#1e293b" />
      <text x="${rootX - 10}" y="${rootY - 14}" font-size="12" fill="#1e293b" font-weight="bold" text-anchor="middle">Dân số</text>

      <!-- Nhánh 1: Mắc bệnh -->
      <line x1="${rootX}" y1="${rootY}" x2="${n1X}" y2="${n1Y}" stroke="#dc2626" stroke-width="2" />
      <circle cx="${n1X}" cy="${n1Y}" r="5" fill="#dc2626" />
      <text x="${(rootX + n1X) / 2}" y="${(rootY + n1Y) / 2 - 8}" font-size="11" fill="#dc2626" font-weight="bold">Bệnh (${prevPct.toFixed(2)}%)</text>

      <!-- Nhánh 2: Khỏe mạnh -->
      <line x1="${rootX}" y1="${rootY}" x2="${n2X}" y2="${n2Y}" stroke="#047857" stroke-width="2" />
      <circle cx="${n2X}" cy="${n2Y}" r="5" fill="#047857" />
      <text x="${(rootX + n2X) / 2}" y="${(rootY + n2Y) / 2 + 18}" font-size="11" fill="#047857" font-weight="bold">Khỏe (${(100 - prevPct).toFixed(2)}%)</text>

      <!-- Nhánh con từ Bệnh: Dương tính thật -->
      <line x1="${n1X}" y1="${n1Y}" x2="${leafX}" y2="${l1Y}" stroke="#dc2626" stroke-width="2" />
      <circle cx="${leafX}" cy="${l1Y}" r="4" fill="#dc2626" />
      <text x="${leafX + 10}" y="${l1Y + 4}" font-size="12" fill="#dc2626" font-weight="bold">Dương tính (+) thật: ${(truePos * 100).toFixed(3)}%</text>

      <!-- Nhánh con từ Bệnh: Âm tính giả -->
      <line x1="${n1X}" y1="${n1Y}" x2="${leafX}" y2="${l2Y}" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 3" />
      <circle cx="${leafX}" cy="${l2Y}" r="4" fill="#94a3b8" />
      <text x="${leafX + 10}" y="${l2Y + 4}" font-size="11" fill="#64748b">Âm tính (-) giả: ${(P_D * 0.01 * 100).toFixed(3)}%</text>

      <!-- Nhánh con từ Khỏe: Dương tính giả -->
      <line x1="${n2X}" y1="${n2Y}" x2="${leafX}" y2="${l3Y}" stroke="#f59e0b" stroke-width="2" />
      <circle cx="${leafX}" cy="${l3Y}" r="4" fill="#f59e0b" />
      <text x="${leafX + 10}" y="${l3Y + 4}" font-size="12" fill="#d97706" font-weight="bold">Dương tính (+) GIẢ: ${(falsePos * 100).toFixed(3)}%</text>

      <!-- Nhánh con từ Khỏe: Âm tính thật -->
      <line x1="${n2X}" y1="${n2Y}" x2="${leafX}" y2="${l4Y}" stroke="#047857" stroke-width="1.5" />
      <circle cx="${leafX}" cy="${l4Y}" r="4" fill="#047857" />
      <text x="${leafX + 10}" y="${l4Y + 4}" font-size="11" fill="#047857">Âm tính (-) thật: ${(P_notD * 0.98 * 100).toFixed(1)}%</text>
    `;

    svg.innerHTML = html;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## 5. Các ví dụ minh họa áp dụng chi tiết

### Ví dụ 1: Quản lý chất lượng sản phẩm từ nhiều phân xưởng (Xác suất toàn phần)

Một công ty may mặc nhập sản phẩm áo sơ mi từ hai phân xưởng I và II.  
- Phân xưởng I cung cấp $60\%$ tổng số áo của công ty, tỷ lệ phế phẩm là $3\%$.  
- Phân xưởng II cung cấp $40\%$ tổng số áo của công ty, tỷ lệ phế phẩm là $5\%$.  
Chọn ngẫu nhiên một chiếc áo từ kho của công ty. Tính xác suất để chiếc áo được chọn là phế phẩm.

#### Lời giải:
- Gọi $A_1$ là biến cố: "Áo do phân xưởng I sản xuất" $\implies P(A_1) = 0.6$.
- Gọi $A_2$ là biến cố: "Áo do phân xưởng II sản xuất" $\implies P(A_2) = 0.4$.  
  Rõ ràng $\{A_1, A_2\}$ là một nhóm biến cố đầy đủ ($0.6 + 0.4 = 1$).
- Gọi $B$ là biến cố: "Chiếc áo được chọn là phế phẩm".  
  Theo đề bài:
  - Tỷ lệ phế phẩm của xưởng I: $P(B|A_1) = 0.03$.
  - Tỷ lệ phế phẩm của xưởng II: $P(B|A_2) = 0.05$.
- Áp dụng **công thức xác suất toàn phần**:
  $$P(B) = P(A_1) \cdot P(B|A_1) + P(A_2) \cdot P(B|A_2) = 0.6 \cdot 0.03 + 0.4 \cdot 0.05 = 0.018 + 0.020 = 0.038 = 3.8\%$$

---

### Ví dụ 2: Truy tìm nguồn gốc phế phẩm (Áp dụng công thức Bayes)

Vẫn với công ty may mặc ở Ví dụ 1, giả sử nhân viên kiểm tra chọn ngẫu nhiên một chiếc áo và phát hiện nó **bị lỗi (phế phẩm)**.  
Hỏi khả năng chiếc áo lỗi này do phân xưởng I sản xuất là bao nhiêu?

#### Lời giải:
Yêu cầu tính xác suất chiếc áo do xưởng I sản xuất khi biết nó là phế phẩm, tức là $P(A_1|B)$.  
Áp dụng **công thức Bayes**:
$$P(A_1|B) = \frac{P(A_1) \cdot P(B|A_1)}{P(B)} = \frac{0.6 \cdot 0.03}{0.038} = \frac{0.018}{0.038} = \frac{18}{38} = \frac{9}{19} \approx 0.4737 \approx 47.37\%$$

*(Tương tự, xác suất nó thuộc về xưởng II là $P(A_2|B) = \frac{0.020}{0.038} = \frac{10}{19} \approx 52.63\%$)*.

---

## 6. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Điều kiện để các biến cố $A_1, A_2, \\dots, A_n$ tạo thành một nhóm biến cố đầy đủ là:",
  "options": [
    "A. Đôi một xung khắc và hợp của chúng bằng không gian mẫu $\\Omega$",
    "B. Độc lập với nhau và tổng xác suất bằng 1",
    "C. Có cùng xác suất xuất hiện",
    "D. Có giao của tất cả các biến cố bằng tập rỗng"
  ],
  "answer": "A. Đôi một xung khắc và hợp của chúng bằng không gian mẫu $\\Omega$",
  "explanation": "Theo định nghĩa SGK, nhóm biến cố đầy đủ phải thỏa mãn: các biến cố đôi một xung khắc ($A_i \\cap A_j = \\emptyset, \\forall i \\neq j$) và hợp của chúng phủ kín không gian mẫu ($\\bigcup A_i = \\Omega$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hai biến cố đối nhau $A$ và $\\bar{A}$. Với biến cố $B$ bất kì, công thức xác suất toàn phần là:",
  "options": [
    "A. $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$",
    "B. $P(B) = P(A)P(A|B) + P(\\bar{A})P(\\bar{A}|B)$",
    "C. $P(B) = P(B|A) + P(B|\\bar{A})$",
    "D. $P(B) = P(A) \\cdot P(\\bar{A})$"
  ],
  "answer": "A. $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$",
  "explanation": "Công thức xác suất toàn phần cơ bản cho hệ gồm hai biến cố đối: $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Công thức Bayes dùng để giải quyết bài toán nào sau đây?",
  "options": [
    "A. Tính xác suất một nguyên nhân khi biết kết quả đã xảy ra",
    "B. Tính xác suất hợp của hai biến cố bất kì",
    "C. Kiểm tra xem hai biến cố có độc lập hay không",
    "D. Tính số phần tử của không gian mẫu"
  ],
  "answer": "A. Tính xác suất một nguyên nhân khi biết kết quả đã xảy ra",
  "explanation": "Công thức Bayes là công thức đảo ngược điều kiện, giúp cập nhật xác suất của nguyên nhân $A_k$ khi đã quan sát thấy kết quả $B$ (xác suất hậu nghiệm)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $P(A) = 0.7$, $P(B|A) = 0.2$ và $P(B|\\bar{A}) = 0.5$. Xác suất của biến cố $B$ là:",
  "options": [
    "A. 0.29",
    "B. 0.35",
    "C. 0.14",
    "D. 0.50"
  ],
  "answer": "A. 0.29",
  "explanation": "Ta có $P(\\bar{A}) = 1 - 0.7 = 0.3$. Theo công thức xác suất toàn phần: $P(B) = 0.7(0.2) + 0.3(0.5) = 0.14 + 0.15 = 0.29$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Với dữ liệu ở câu trên ($P(A) = 0.7, P(B|A) = 0.2, P(B) = 0.29$), giá trị của $P(A|B)$ bằng:",
  "options": [
    "A. $\\frac{14}{29}$",
    "B. $\\frac{15}{29}$",
    "C. $\\frac{2}{7}$",
    "D. 0.7"
  ],
  "answer": "A. $\\frac{14}{29}$",
  "explanation": "Theo công thức Bayes: $P(A|B) = \\frac{P(A) \\cdot P(B|A)}{P(B)} = \\frac{0.7 \\cdot 0.2}{0.29} = \\frac{0.14}{0.29} = \\frac{14}{29}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Một người bắn súng: nếu trời không mưa (xác suất 0.8) thì bắn trúng với xác suất 0.9; nếu trời mưa (xác suất 0.2) thì bắn trúng với xác suất 0.6. Xác suất để người đó bắn trúng là:",
  "options": [
    "A. 0.84",
    "B. 0.75",
    "C. 0.80",
    "D. 0.72"
  ],
  "answer": "A. 0.84",
  "explanation": "$P(\\text{Trúng}) = 0.8(0.9) + 0.2(0.6) = 0.72 + 0.12 = 0.84$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nếu biết người bắn súng ở câu trên ĐÃ BẮN TRÚNG, xác suất để hôm đó trời mưa là:",
  "options": [
    "A. $\\frac{1}{7}$",
    "B. $\\frac{6}{7}$",
    "C. 0.2",
    "D. 0.12"
  ],
  "answer": "A. $\\frac{1}{7}$",
  "explanation": "$P(\\text{Mưa}|\\text{Trúng}) = \\frac{0.2 \\cdot 0.6}{0.84} = \\frac{0.12}{0.84} = \\frac{12}{84} = \\frac{1}{7}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Trong thuật toán phân loại email rác (Spam Filter) của Google Mail, công thức toán học cốt lõi nào được sử dụng?",
  "options": [
    "A. Công thức Bayes",
    "B. Công thức Newton-Leibniz",
    "C. Công thức nhân đôi",
    "D. Bất đẳng thức Cauchy"
  ],
  "answer": "A. Công thức Bayes",
  "explanation": "Thuật toán lọc thư rác cổ điển và hiệu quả bậc nhất là Naive Bayes Classifier (bộ phân loại Bayes ngây thơ), tính xác suất một email là Spam khi xuất hiện các từ khóa nghi vấn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Ba máy A, B, C sản xuất tương ứng 50%, 30% và 20% tổng số sản phẩm của nhà máy. Tỷ lệ phế phẩm của từng máy lần lượt là 2%, 3% và 4%. Xác suất một sản phẩm lấy ngẫu nhiên bị phế phẩm là:",
  "options": [
    "A. 2.7%",
    "B. 3.0%",
    "C. 2.5%",
    "D. 3.2%"
  ],
  "answer": "A. 2.7%",
  "explanation": "$P(B) = 0.5(0.02) + 0.3(0.03) + 0.2(0.04) = 0.010 + 0.009 + 0.008 = 0.027 = 2.7\%$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biết sản phẩm ở câu trên là phế phẩm, xác suất để nó do máy A sản xuất là:",
  "options": [
    "A. $\\frac{10}{27}$",
    "B. $\\frac{9}{27}$",
    "C. $\\frac{8}{27}$",
    "D. $\\frac{1}{2}$"
  ],
  "answer": "A. $\\frac{10}{27}$",
  "explanation": "$P(A|B) = \\frac{0.5 \\cdot 0.02}{0.027} = \\frac{0.010}{0.027} = \\frac{10}{27}$."
}'></div>
