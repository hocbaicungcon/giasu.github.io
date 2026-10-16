---
title: 'Toán 11 Bài 29: Công thức cộng xác suất - Quy tắc tính và ứng dụng thực tế'
description: 'Lý thuyết trọng tâm Bài 29 Toán 11 Kết nối tri thức: Công thức cộng xác suất cho biến cố xung khắc, công thức cộng tổng quát, công thức biến cố đối, công cụ tính xác suất Venn tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Xác suất
  - Công thức cộng xác suất
  - Biến cố xung khắc
  - Biến cố đối
  - Bao hàm loại trừ
  - Kết nối tri thức
grade: 11
---

# Bài 29. Công thức cộng xác suất

Trong bài học trước, chúng ta đã nắm vững các khái niệm biến cố hợp $A \cup B$, biến cố giao $AB$, biến cố đối $\overline{A}$ và biến cố xung khắc. Câu hỏi cốt lõi được đặt ra tiếp theo là: **Nếu đã biết xác suất $P(A)$ và $P(B)$, làm thế nào để tính được xác suất của biến cố hợp $P(A \cup B)$?**

Quy tắc giải quyết vấn đề này được gọi là **Công thức cộng xác suất**. Đây là công cụ toán học tối quan trọng giúp:
- **Ngành y tế dự phòng:** Tính tỉ lệ dân số được bảo vệ khi tiêm chủng vắc-xin phòng ngừa bệnh A hoặc bệnh B.
- **Bảo hiểm rủi ro:** Tính xác suất xảy ra ít nhất một sự cố đối với một công trình trong năm để định giá phí bảo hiểm.
- **Kiểm soát chất lượng công nghiệp:** Xác định tỉ lệ linh kiện điện tử mắc lỗi kích thước hoặc lỗi bề mặt trong dây chuyền sản xuất hàng loạt.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC: QUY TẮC CỘNG XÁC SUẤT</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Hai biến cố xung khắc</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: $A \cap B = \emptyset$.<br>• Công thức:<br>$$\mathbf{P(A \cup B) = P(A) + P(B)}$$</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Hai biến cố bất kỳ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Có thể cùng xảy ra ($P(AB) \ge 0$).<br>• Công thức tổng quát:<br>$$\mathbf{P(A \cup B) = P(A) + P(B) - P(AB)}$$</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biến cố đối</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vì $A$ và $\overline{A}$ xung khắc và $A \cup \overline{A} = \Omega$:<br>$$\mathbf{P(\overline{A}) = 1 - P(A)}$$<br>• Rất hiệu quả khi gặp cụm từ <em>"ít nhất một"</em>.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Mở rộng cho k biến cố xung khắc</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $A_1, A_2, \dots, A_k$ đôi một xung khắc:<br>$$P\left(\bigcup_{i=1}^k A_i\right) = \sum_{i=1}^k P(A_i)$$</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Rút 1 lá bài từ bộ 52 lá. Gọi $A$ là "rút được lá Át", $B$ là "rút được lá K". Hỏi $P(A)$, $P(B)$ bằng bao nhiêu? $A$ và $B$ có xung khắc không?
2. Từ câu 1, tính xác suất để rút được lá Át *hoặc* lá K.
3. Nếu một biến cố $E$ có xác suất $P(E) = 0.25$, thì xác suất để $E$ *không xảy ra* bằng bao nhiêu?
4. Một lớp học có $60\%$ học sinh thích môn Toán ($P(A) = 0.6$) và $50\%$ thích môn Văn ($P(B) = 0.5$). Liệu xác suất học sinh thích môn Toán hoặc Văn có thể bằng $0.6 + 0.5 = 1.1$ không? Tại sao?
5. Nếu trong lớp đó có $30\%$ học sinh thích *cả hai môn* Toán và Văn ($P(AB) = 0.3$), hãy tính tỉ lệ học sinh thích ít nhất một trong hai môn.

> [!TIP]
> **Đáp án nhanh:**
> 1. $P(A) = \frac{4}{52} = \frac{1}{13}$, $P(B) = \frac{4}{52} = \frac{1}{13}$. $A$ và $B$ xung khắc ($A \cap B = \emptyset$).
> 2. $P(A \cup B) = P(A) + P(B) = \frac{1}{13} + \frac{1}{13} = \frac{2}{13}$.
> 3. $P(\overline{E}) = 1 - 0.25 = 0.75$.
> 4. Không thể! Xác suất không bao giờ vượt quá $1$. Sai lầm là vì hai biến cố này không xung khắc (có học sinh thích cả hai môn).
> 5. $P(A \cup B) = P(A) + P(B) - P(AB) = 0.6 + 0.5 - 0.3 = 0.8$ ($80\%$).

---

## I. Công thức cộng cho các biến cố xung khắc

### 1. Định lý cho hai biến cố xung khắc
> [!IMPORTANT]
> **Định lý 1 (Công thức cộng hai biến cố xung khắc):**
> Nếu hai biến cố $A$ và $B$ xung khắc với nhau ($A \cap B = \emptyset$), thì:
> $$P(A \cup B) = P(A) + P(B)$$

**Chứng minh ngắn gọn theo định nghĩa cổ điển:**
Giả sử không gian mẫu $\Omega$ có $n$ phần tử đồng khả năng.
Vì $A \cap B = \emptyset$ nên số phần tử thuận lợi cho $A \cup B$ là $n(A \cup B) = n(A) + n(B)$.
Do đó:
$$P(A \cup B) = \frac{n(A \cup B)}{n(\Omega)} = \frac{n(A) + n(B)}{n(\Omega)} = \frac{n(A)}{n(\Omega)} + \frac{n(B)}{n(\Omega)} = P(A) + P(B)$$

### 2. Định lý cho nhiều biến cố đôi một xung khắc
Nếu các biến cố $A_1, A_2, \dots, A_k$ **đôi một xung khắc** (nghĩa là $A_i \cap A_j = \emptyset$ với mọi $i \ne j$), thì:
$$P(A_1 \cup A_2 \cup \dots \cup A_k) = P(A_1) + P(A_2) + \dots + P(A_k)$$

### 3. Hệ quả: Xác suất của biến cố đối
Vì biến cố $A$ và biến cố đối $\overline{A}$ xung khắc và $A \cup \overline{A} = \Omega$, ta có:
$$P(A \cup \overline{A}) = P(A) + P(\overline{A}) \implies P(\Omega) = P(A) + P(\overline{A})$$
Vì $P(\Omega) = 1$, suy ra công thức biến cố đối:
$$P(\overline{A}) = 1 - P(A)$$

> [!TIP]
> **Kinh nghiệm vàng khi làm bài tập:**
> Khi đề bài yêu cầu tính xác suất của biến cố *"Có ít nhất một..."*, việc tính trực tiếp thường phải chia rất nhiều trường hợp. Hãy nghĩ ngay đến việc tính xác suất của biến cố đối: *"Không có cái nào..."*, sau đó lấy $1$ trừ đi!
> $$P(\text{Ít nhất một}) = 1 - P(\text{Không có cái nào})$$

---

## II. Công thức cộng xác suất tổng quát (áp dụng cho 2 biến cố bất kỳ)

Trong thực tế, hai biến cố $A$ và $B$ thường có thể cùng xảy ra ($A \cap B \ne \emptyset$).

> [!IMPORTANT]
> **Định lý 2 (Công thức cộng tổng quát):**
> Với hai biến cố $A$ và $B$ bất kỳ cùng liên quan đến một phép thử, ta luôn có:
> $$P(A \cup B) = P(A) + P(B) - P(AB)$$

### Giải thích trực quan qua Nguyên lý Bao hàm - Loại trừ (Inclusion-Exclusion)
Khi quan sát biểu đồ Venn:
- Tập $A$ gồm phần riêng của $A$ và phần giao $AB$.
- Tập $B$ gồm phần riêng của $B$ và phần giao $AB$.
Khi ta cộng $P(A) + P(B)$, phần giao $AB$ đã bị **tính hai lần**!
Do đó, để nhận được diện tích chính xác của toàn bộ hợp $A \cup B$, ta phải **trừ bớt đi một lần phần giao $P(AB)$**.

*Lưu ý:* Khi $A$ và $B$ xung khắc, $P(AB) = 0$, công thức tổng quát trở về đúng công thức xung khắc $P(A \cup B) = P(A) + P(B)$.

### Mở rộng: Công thức cộng cho ba biến cố bất kỳ
Với ba biến cố $A, B, C$ bất kỳ:
$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - [P(AB) + P(BC) + P(CA)] + P(ABC)$$

---

## Công cụ trực quan: Bộ tính xác suất Venn tương tác

Hãy điều chỉnh các thanh trượt $P(A)$, $P(B)$ và $P(AB)$ bên dưới để thấy ngay giá trị của $P(A \cup B)$ và kiểm tra các giới hạn xác suất:

<div id="prob-calc-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">BỘ TÍNH CÔNG THỨC CỘNG XÁC SUẤT TỰ ĐỘNG</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 18px 0;">
<div style="background: #f0fdf4; padding: 12px; border-radius: 8px; border: 1px solid #bbf7d0;">
<label style="font-weight: 600; color: #166534; display: block; margin-bottom: 6px;">Xác suất P(A): <span id="val-pa" style="font-size: 1.1em; color: #15803d;">0.60</span></label>
<input type="range" id="range-pa" min="0" max="1" step="0.05" value="0.60" style="width: 100%;">
</div>
<div style="background: #eff6ff; padding: 12px; border-radius: 8px; border: 1px solid #bfdbfe;">
<label style="font-weight: 600; color: #1e40af; display: block; margin-bottom: 6px;">Xác suất P(B): <span id="val-pb" style="font-size: 1.1em; color: #1d4ed8;">0.50</span></label>
<input type="range" id="range-pb" min="0" max="1" step="0.05" value="0.50" style="width: 100%;">
</div>
<div style="background: #fefce8; padding: 12px; border-radius: 8px; border: 1px solid #fef08a;">
<label style="font-weight: 600; color: #854d0e; display: block; margin-bottom: 6px;">Phần giao P(AB): <span id="val-pab" style="font-size: 1.1em; color: #a16207;">0.25</span></label>
<input type="range" id="range-pab" min="0" max="0.50" step="0.05" value="0.25" style="width: 100%;">
</div>
</div>
<div style="background: #f8fafc; border-radius: 8px; padding: 16px; border: 1px solid #e2e8f0; font-family: monospace; font-size: 1.05em; line-height: 1.8;">
<div style="color: #334155;"><strong>Công thức tính:</strong> P(A ∪ B) = P(A) + P(B) - P(AB)</div>
<div id="calc-step" style="color: #2563eb; font-weight: bold; font-size: 1.15em; margin: 6px 0;">P(A ∪ B) = 0.60 + 0.50 - 0.25 = 0.85</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-top: 10px; font-size: 0.9em; font-family: sans-serif;">
<span style="background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">P(chỉ A): <strong id="val-only-a">0.35</strong></span>
<span style="background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">P(chỉ B): <strong id="val-only-b">0.25</strong></span>
<span style="background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">P(cả hai không xảy ra): <strong id="val-neither">0.15</strong></span>
</div>
</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rangeA = document.getElementById('range-pa');
  const rangeB = document.getElementById('range-pb');
  const rangeAB = document.getElementById('range-pab');

  const valA = document.getElementById('val-pa');
  const valB = document.getElementById('val-pb');
  const valAB = document.getElementById('val-pab');

  const calcStep = document.getElementById('calc-step');
  const valOnlyA = document.getElementById('val-only-a');
  const valOnlyB = document.getElementById('val-only-b');
  const valNeither = document.getElementById('val-neither');

  if (!rangeA || !rangeB || !rangeAB) return;

  function update() {
    let pa = parseFloat(rangeA.value);
    let pb = parseFloat(rangeB.value);
    
    // P(AB) cannot exceed min(pa, pb) and cannot be less than max(0, pa + pb - 1)
    let maxAB = Math.min(pa, pb);
    let minAB = Math.max(0, Math.round((pa + pb - 1) * 100) / 100);
    
    rangeAB.max = maxAB;
    rangeAB.min = minAB;
    if (parseFloat(rangeAB.value) > maxAB) rangeAB.value = maxAB;
    if (parseFloat(rangeAB.value) < minAB) rangeAB.value = minAB;

    let pab = parseFloat(rangeAB.value);

    valA.textContent = pa.toFixed(2);
    valB.textContent = pb.toFixed(2);
    valAB.textContent = pab.toFixed(2);

    let pub = Math.round((pa + pb - pab) * 100) / 100;
    calcStep.textContent = `P(A ∪ B) = ${pa.toFixed(2)} + ${pb.toFixed(2)} - ${pab.toFixed(2)} = ${pub.toFixed(2)}`;

    let onlyA = Math.round((pa - pab) * 100) / 100;
    let onlyB = Math.round((pb - pab) * 100) / 100;
    let neither = Math.round((1 - pub) * 100) / 100;

    valOnlyA.textContent = onlyA.toFixed(2);
    valOnlyB.textContent = onlyB.toFixed(2);
    valNeither.textContent = neither.toFixed(2);
  }

  rangeA.addEventListener('input', update);
  rangeB.addEventListener('input', update);
  rangeAB.addEventListener('input', update);
  update();
});
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Áp dụng công thức cộng cho các biến cố xung khắc

**Bài toán 1:** Một hộp chứa 8 quả cầu đỏ, 7 quả cầu xanh và 5 quả cầu vàng (kích thước và khối lượng như nhau). Lấy ngẫu nhiên ra 1 quả cầu. Tính xác suất để:
a) Lấy được quả cầu màu đỏ hoặc màu vàng.  
b) Lấy được quả cầu không phải màu xanh.

**Lời giải:**
Tổng số quả cầu trong hộp là: $n(\Omega) = 8 + 7 + 5 = 20$.
Gọi $A$: "Lấy được quả cầu đỏ", $B$: "Lấy được quả cầu vàng", $C$: "Lấy được quả cầu xanh".
Ta có:
$$P(A) = \frac{8}{20} = \frac{2}{5}; \quad P(B) = \frac{5}{20} = \frac{1}{4}; \quad P(C) = \frac{7}{20}$$

a) Một quả cầu không thể vừa có màu đỏ vừa có màu vàng, do đó $A$ và $B$ là hai biến cố xung khắc ($A \cap B = \emptyset$).
Theo công thức cộng xác suất cho biến cố xung khắc:
$$P(A \cup B) = P(A) + P(B) = \frac{8}{20} + \frac{5}{20} = \frac{13}{20} = 0.65$$

b) Biến cố "Lấy được quả cầu không phải màu xanh" chính là biến cố đối của $C$, kí hiệu là $\overline{C}$.
Áp dụng công thức biến cố đối:
$$P(\overline{C}) = 1 - P(C) = 1 - \frac{7}{20} = \frac{13}{20} = 0.65$$
*(Nhận xét: Lấy không phải xanh tức là lấy được đỏ hoặc vàng, kết quả hoàn toàn trùng khớp với câu a).*

---

### Dạng 2: Áp dụng công thức cộng tổng quát (biến cố không xung khắc)

**Bài toán 2:** Một lớp học có 40 học sinh. Trong đó có 25 bạn tham gia câu lạc bộ Bóng rổ, 20 bạn tham gia câu lạc bộ Cầu lông và 10 bạn tham gia cả hai câu lạc bộ. Chọn ngẫu nhiên một bạn trong lớp. Tính xác suất để bạn được chọn:
a) Tham gia ít nhất một trong hai câu lạc bộ.  
b) Không tham gia câu lạc bộ nào trong hai câu lạc bộ trên.  
c) Chỉ tham gia đúng một câu lạc bộ Bóng rổ.

**Lời giải:**
Gọi $A$ là biến cố: "Bạn được chọn tham gia CLB Bóng rổ".  
Gọi $B$ là biến cố: "Bạn được chọn tham gia CLB Cầu lông".  
Theo giả thiết:
$$P(A) = \frac{25}{40} = 0.625; \quad P(B) = \frac{20}{40} = 0.5; \quad P(AB) = \frac{10}{40} = 0.25$$

a) Biến cố bạn được chọn tham gia ít nhất một trong hai CLB là biến cố hợp $A \cup B$.
Áp dụng công thức cộng xác suất tổng quát:
$$P(A \cup B) = P(A) + P(B) - P(AB) = 0.625 + 0.5 - 0.25 = 0.875 = \frac{35}{40} = \frac{7}{8}$$

b) Biến cố "Không tham gia câu lạc bộ nào" là biến cố đối của biến cố "Tham gia ít nhất một câu lạc bộ", tức là $\overline{A \cup B}$.
Ta có:
$$P(\overline{A \cup B}) = 1 - P(A \cup B) = 1 - 0.875 = 0.125 = \frac{5}{40} = \frac{1}{8}$$

c) Biến cố "Chỉ tham gia CLB Bóng rổ" tương ứng với số học sinh thích Bóng rổ nhưng không thích Cầu lông:
$$n(A \setminus B) = n(A) - n(AB) = 25 - 10 = 15$$
Xác suất là:
$$P(A \setminus B) = P(A) - P(AB) = \frac{25}{40} - \frac{10}{40} = \frac{15}{40} = \frac{3}{8} = 0.375$$

---

### Dạng 3: Sử dụng biến cố đối để giải bài toán "Có ít nhất một"

**Bài toán 3:** Một tổ học sinh gồm 6 nam và 4 nữ. Chọn ngẫu nhiên 3 học sinh để tham gia đội tình nguyện. Tính xác suất để trong 3 học sinh được chọn có ít nhất 1 học sinh nữ.

**Lời giải:**
Số cách chọn ngẫu nhiên 3 bạn từ 10 bạn là:
$$n(\Omega) = C_{10}^3 = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$

Gọi $E$ là biến cố: "Trong 3 bạn được chọn có ít nhất 1 bạn nữ".
Biến cố đối $\overline{E}$ là: "Trong 3 bạn được chọn không có bạn nữ nào" (tức là cả 3 bạn đều là nam).
Số cách chọn 3 bạn nam từ 6 bạn nam là:
$$n(\overline{E}) = C_6^3 = \frac{6 \times 5 \times 4}{3 \times 2 \times 1} = 20$$
Xác suất của biến cố đối là:
$$P(\overline{E}) = \frac{n(\overline{E})}{n(\Omega)} = \frac{20}{120} = \frac{1}{6}$$
Vậy xác suất của biến cố $E$ cần tìm là:
$$P(E) = 1 - P(\overline{E}) = 1 - \frac{1}{6} = \frac{5}{6} \approx 0.833$$

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Nếu hai biến cố A và B xung khắc với nhau thì công thức nào sau đây đúng?",
  "options": [
    "A. P(A ∪ B) = P(A) + P(B)",
    "B. P(A ∪ B) = P(A) + P(B) - P(AB)",
    "C. P(A ∪ B) = P(A) · P(B)",
    "D. P(A ∪ B) = 1 - P(A)P(B)"
  ],
  "answer": "A. P(A ∪ B) = P(A) + P(B)",
  "explanation": "Khi A và B xung khắc thì A ∩ B = ∅ nên P(AB) = 0. Do đó công thức rút gọn thành P(A ∪ B) = P(A) + P(B)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho P(A) = 0.3 và P(B) = 0.4. Nếu A và B là hai biến cố xung khắc thì P(A ∪ B) bằng:",
  "options": [
    "A. 0.7",
    "B. 0.12",
    "C. 0.1",
    "D. 0.58"
  ],
  "answer": "A. 0.7",
  "explanation": "P(A ∪ B) = P(A) + P(B) = 0.3 + 0.4 = 0.7."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hai biến cố bất kỳ A và B thỏa mãn P(A) = 0.5, P(B) = 0.6 và P(AB) = 0.2. Khi đó P(A ∪ B) bằng:",
  "options": [
    "A. 0.9",
    "B. 1.1",
    "C. 0.7",
    "D. 0.3"
  ],
  "answer": "A. 0.9",
  "explanation": "Áp dụng công thức cộng tổng quát: P(A ∪ B) = P(A) + P(B) - P(AB) = 0.5 + 0.6 - 0.2 = 0.9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Biết P(A ∪ B) = 0.8, P(A) = 0.5 và P(B) = 0.4. Xác suất biến cố giao P(AB) là:",
  "options": [
    "A. 0.1",
    "B. 0.2",
    "C. 0.3",
    "D. 0.9"
  ],
  "answer": "A. 0.1",
  "explanation": "Từ P(A ∪ B) = P(A) + P(B) - P(AB) => P(AB) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.8 = 0.1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho biến cố A có xác suất P(A) = 0.35. Xác suất của biến cố đối A̅ là:",
  "options": [
    "A. 0.65",
    "B. 0.75",
    "C. -0.35",
    "D. 0.35"
  ],
  "answer": "A. 0.65",
  "explanation": "P(A̅) = 1 - P(A) = 1 - 0.35 = 0.65."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo một con xúc xắc 6 mặt đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số chẵn hoặc chia hết cho 3 là:",
  "options": [
    "A. 2/3",
    "B. 1/2",
    "C. 5/6",
    "D. 1/3"
  ],
  "answer": "A. 2/3",
  "explanation": "Gọi A: chẵn {2, 4, 6} => P(A) = 3/6 = 1/2. Gọi B: chia hết cho 3 {3, 6} => P(B) = 2/6 = 1/3. AB: {6} => P(AB) = 1/6. P(A ∪ B) = 1/2 + 1/3 - 1/6 = 4/6 = 2/3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Gieo 3 đồng xu cân đối đồng chất. Xác suất để có ít nhất 1 đồng xu xuất hiện mặt Ngửa là:",
  "options": [
    "A. 7/8",
    "B. 1/8",
    "C. 3/8",
    "D. 1/2"
  ],
  "answer": "A. 7/8",
  "explanation": "Không gian mẫu n(Ω) = 2^3 = 8. Biến cố đối: \"Cả 3 đồng đều Sấp\" chỉ có 1 khả năng (S, S, S). Xác suất biến cố đối = 1/8. Do đó xác suất có ít nhất 1 Ngửa là 1 - 1/8 = 7/8."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Khảo sát thị trường cho thấy 70% người dùng thích tính năng chụp đêm, 60% thích pin trâu và 45% thích cả hai. Tỉ lệ người dùng KHÔNG thích tính năng nào trong hai tính năng trên là:",
  "options": [
    "A. 15%",
    "B. 25%",
    "C. 30%",
    "D. 10%"
  ],
  "answer": "A. 15%",
  "explanation": "P(thích ít nhất một tính năng) = 70% + 60% - 45% = 85%. Tỉ lệ không thích tính năng nào là biến cố đối: 100% - 85% = 15%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hai biến cố A và B. Khẳng định nào sau đây LUÔN ĐÚNG?",
  "options": [
    "A. P(A ∪ B) ≤ P(A) + P(B)",
    "B. P(A ∪ B) = P(A) + P(B)",
    "C. P(A ∪ B) ≥ P(A) + P(B)",
    "D. P(A ∪ B) = 1 - P(AB)"
  ],
  "answer": "A. P(A ∪ B) ≤ P(A) + P(B)",
  "explanation": "Vì P(A ∪ B) = P(A) + P(B) - P(AB) và P(AB) ≥ 0, nên P(A ∪ B) ≤ P(A) + P(B). Dấu bằng xảy ra khi P(AB) = 0 (tức hai biến cố xung khắc)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Một hộp có 5 bi xanh và 4 bi đỏ. Rút ngẫu nhiên đồng thời 2 viên bi. Xác suất để rút được 2 viên bi cùng màu là:",
  "options": [
    "A. 4/9",
    "B. 5/9",
    "C. 10/36",
    "D. 1/2"
  ],
  "answer": "A. 4/9",
  "explanation": "n(Ω) = C_9^2 = 36. Gọi A: 2 bi xanh => n(A) = C_5^2 = 10. B: 2 bi đỏ => n(B) = C_4^2 = 6. Vì A và B xung khắc nên P(cùng màu) = P(A) + P(B) = (10 + 6)/36 = 16/36 = 4/9."
}'></div>

---

## V. Ứng dụng Thực tế: Đánh giá Hiệu quả Xét nghiệm Y khoa

Trong xét nghiệm chẩn đoán y học lâm sàng, công thức cộng xác suất được áp dụng để xác định tỉ lệ kết quả xét nghiệm chính xác hoặc dương tính giả / âm tính giả.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #10b981;">
<strong>Tình huống Thực tế:</strong><br>
Một bệnh viện triển khai đợt khám sức khỏe định kỳ cho cán bộ công nhân viên. Qua thống kê dịch tễ:<br>
- Tỉ lệ người có kháng thể phòng bệnh viêm gan A là $P(A) = 0.70$.<br>
- Tỉ lệ người có kháng thể phòng bệnh viêm gan B là $P(B) = 0.65$.<br>
- Tỉ lệ người có kháng thể phòng cả hai bệnh A và B là $P(AB) = 0.50$.<br><br>
1. Tính tỉ lệ người lao động đã có kháng thể với ít nhất một trong hai bệnh.<br>
2. Để đảm bảo an toàn dịch bệnh, bệnh viện chỉ định tiêm mũi vắc-xin nhắc lại cho những người <em>chưa có kháng thể của bất kỳ bệnh nào</em>. Hỏi có bao nhiêu phần trăm cán bộ cần được tiêm nhắc lại?<br>
3. Có bao nhiêu phần trăm cán bộ chỉ có kháng thể của duy nhất một bệnh?
</div>

> [!TIP]
> **Lời giải bài toán Y học:**
> 1. Tỉ lệ người có ít nhất một loại kháng thể:
>    $$P(A \cup B) = P(A) + P(B) - P(AB) = 0.70 + 0.65 - 0.50 = 0.85 = 85\%$$
> 2. Tỉ lệ người chưa có bất kỳ loại kháng thể nào là biến cố đối của việc có ít nhất một loại:
>    $$P(\overline{A \cup B}) = 1 - P(A \cup B) = 1 - 0.85 = 0.15 = 15\%$$
>    Như vậy có $15\%$ nhân sự cần được tiêm phòng mũi nhắc lại.
> 3. Tỉ lệ người chỉ có duy nhất một loại kháng thể:
>    - Chỉ có A: $P(A) - P(AB) = 0.70 - 0.50 = 0.20$ ($20\%$).
>    - Chỉ có B: $P(B) - P(AB) = 0.65 - 0.50 = 0.15$ ($15\%$).
>    - Vì hai trường hợp này xung khắc nên tỉ lệ cần tìm là: $20\% + 15\% = 35\%$.
