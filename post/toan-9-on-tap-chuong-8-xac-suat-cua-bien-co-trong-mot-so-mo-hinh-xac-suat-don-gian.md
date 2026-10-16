---
title: 'Ôn tập Chương 8: Xác suất của biến cố trong một số mô hình xác suất đơn giản - Ma trận Đề thi, Tổng ôn Toàn diện & Đề kiểm tra 45 phút'
description: 'Tổng ôn toàn diện Chương 8 Toán 9: Phép thử ngẫu nhiên, không gian mẫu, biến cố, công thức xác suất cổ điển, bảng hai chiều, sơ đồ hình cây, ma trận đề thi 45 phút chuẩn Bộ GD&ĐT, 12 câu trắc nghiệm tương tác và tự luận có barem điểm chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Xác suất 9
  - Phép thử ngẫu nhiên
  - Không gian mẫu
  - Xác suất cổ điển
  - Sơ đồ hình cây
  - Bảng hai chiều
  - Ôn tập chương 8
  - Kết nối tri thức
grade: 9
---

# Ôn tập Chương 8. Xác suất của biến cố trong một số mô hình xác suất đơn giản

Chào mừng các em học sinh lớp 9 đến với bài tổng ôn tập **Chương 8: Xác suất của biến cố trong một số mô hình xác suất đơn giản**!

Nếu như ở lớp 7 và lớp 8, các em chỉ mới tiếp cận xác suất thực nghiệm thông qua kiểm đếm số lần lặp lại, thì bước sang lớp 9, các em đã bước lên tầm cao mới của **Lý thuyết Xác suất Cổ điển**:
1. **Bài 25 (Phép thử ngẫu nhiên và không gian mẫu):** Xác lập nền tảng toán học chuẩn mực: định nghĩa phép thử ngẫu nhiên, mô tả không gian mẫu $\Omega$ dưới dạng tập hợp toán học, phân loại biến cố chắc chắn, biến cố không thể và biến cố ngẫu nhiên, kiểm đếm các kết quả thuận lợi.
2. **Bài 26 (Xác suất của biến cố liên quan tới phép thử):** Làm chủ công thức tính xác suất cổ điển $P(A) = \frac{n(A)}{n(\Omega)}$, định lý biến cố đối $P(\bar{A}) = 1 - P(A)$, kết hợp hai vũ khí đếm quyền năng: **Bảng hai chiều (Two-way table)** và **Sơ đồ hình cây (Tree diagram)** để giải quyết trọn vẹn các bài toán xác suất thực tiễn.

Bài tổng ôn tập này sẽ giúp các em hệ thống hóa toàn bộ kiến thức, nhận diện các bẫy thường gặp trong đề thi và thử sức với **Đề kiểm tra 45 phút chuẩn định dạng ma trận kiểm tra đánh giá của Bộ GD&ĐT** kèm barem điểm chi tiết đến từng $0,25$ điểm.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ HỆ THỐNG KIẾN THỨC CHƯƠNG 8 (TOÁN 9)</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Không gian mẫu ($\Omega$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tập hợp tất cả các kết quả có thể của phép thử.<br>• Số phần tử ký hiệu là $n(\Omega)$.<br>• Đồng xu: $n(\Omega)=2$. Xúc xắc: $n(\Omega)=6$.<br>• Gieo 2 đồng xu: $4$. Gieo 2 xúc xắc: $36$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Biến cố & Kết quả thuận lợi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biến cố $A$ là tập con của $\Omega$ ($A \subseteq \Omega$).<br>• Kết quả thuận lợi: Các phần tử thuộc $A$.<br>• Biến cố chắc chắn: $A = \Omega \implies n(A) = n(\Omega)$.<br>• Biến cố không thể: $A = \emptyset \implies n(A) = 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Công thức Xác suất Cổ điển</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi các kết quả là đồng khả năng:<br>$$P(A) = \frac{n(A)}{n(\Omega)}$$
      • Luôn có $0 \le P(A) \le 1$.<br>• Biến cố đối: $P(A) = 1 - P(\bar{A})$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật Đếm nâng cao</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bảng hai chiều:</strong> Phép thử 2 giai đoạn (tổng/hiệu/tích xúc xắc).<br>• <strong>Sơ đồ hình cây:</strong> Phép thử nối tiếp nhiều bước (gieo đồng xu 3 lần, bốc thăm liên tiếp).</p>
    </div>
  </div>
</div>

---

## Ma trận Đề kiểm tra 45 phút Chương 8 (Chuẩn Bộ GD&ĐT)

| Chủ đề / Mạch kiến thức | Nhận biết (TNKQ) | Thông hiểu (TNKQ + TL) | Vận dụng (TL) | Vận dụng cao (TL) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Phép thử & Không gian mẫu** | 3 câu TN (0,75đ) | 2 câu TN (0,5đ) + 1,0đ TL | 0,5đ TL | — | **2,75đ** |
| **2. Xác suất cổ điển trong phép thử 1 giai đoạn** | 2 câu TN (0,5đ) | 2 câu TN (0,5đ) + 1,0đ TL | 1,0đ TL | — | **3,00đ** |
| **3. Bảng hai chiều & Sơ đồ hình cây** | 1 câu TN (0,25đ) | 2 câu TN (0,5đ) + 1,5đ TL | 1,0đ TL | 1,0đ TL | **4,25đ** |
| **Tổng số câu / điểm** | **6 câu (1,5đ)** | **6 câu TN (1,5đ) + 3,5đ TL** | **2,5đ TL** | **1,0đ TL** | **10,0 điểm** |
| **Tỉ lệ phần trăm** | **15%** | **50%** | **25%** | **10%** | **100%** |

---

## Đề kiểm tra 45 phút: Chương 8 - Toán 9

### Phần I. Trắc nghiệm khách quan (3,0 điểm — 12 câu, mỗi câu 0,25đ)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Một hành động hay thực nghiệm có kết quả không thể đoán trước, nhưng biết trước tập hợp tất cả các kết quả có thể được gọi là:",
  "options": [
    "A. Phép tính xác suất",
    "B. Phép thử ngẫu nhiên",
    "C. Biến cố chắc chắn",
    "D. Tần số tương đối"
  ],
  "answer": "B. Phép thử ngẫu nhiên",
  "explanation": "Đó là định nghĩa cơ bản của phép thử ngẫu nhiên."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Ký hiệu tập hợp không gian mẫu của phép thử ngẫu nhiên là:",
  "options": [
    "A. Δ",
    "B. Σ",
    "C. Ω",
    "D. Φ"
  ],
  "answer": "C. Ω",
  "explanation": "Không gian mẫu thường được ký hiệu bằng chữ cái Hy Lạp Omega hoa (Ω)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Gieo một con xúc xắc 6 mặt đồng chất một lần. Biến cố nào dưới đây là biến cố không thể?",
  "options": [
    "A. Xuất hiện mặt 1 chấm",
    "B. Xuất hiện mặt 6 chấm",
    "C. Xuất hiện mặt 0 chấm",
    "D. Xuất hiện mặt có số chấm lẻ"
  ],
  "answer": "C. Xuất hiện mặt 0 chấm",
  "explanation": "Các mặt xúc xắc được đánh số từ 1 đến 6, không có mặt 0 chấm. Do đó biến cố này không bao giờ xảy ra (biến cố không thể)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Xác suất của biến cố chắc chắn luôn bằng:",
  "options": [
    "A. 0",
    "B. 0,5",
    "C. 1",
    "D. 100"
  ],
  "answer": "C. 1",
  "explanation": "Biến cố chắc chắn luôn xảy ra trong mọi lần thử, do đó P(Ω) = n(Ω) / n(Ω) = 1 (tương ứng 100%)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Gieo một con xúc xắc 6 mặt cân đối. Xác suất xuất hiện mặt có số chấm là số nguyên tố là:",
  "options": [
    "A. 1/6",
    "B. 1/3",
    "C. 1/2",
    "D. 2/3"
  ],
  "answer": "C. 1/2",
  "explanation": "Các số nguyên tố từ 1 đến 6 là {2, 3, 5} (3 số). Xác suất P = 3/6 = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo đồng thời hai đồng xu cân đối. Số kết quả thuận lợi cho biến cố \"Có ít nhất một đồng xu xuất hiện mặt Sấp\" là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  "answer": "C. 3",
  "explanation": "Không gian mẫu là {SS, SN, NS, NN}. Các kết quả có ít nhất một mặt Sấp là {SS, SN, NS} (3 kết quả)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một hộp có 6 quả bóng màu vàng và 4 quả bóng màu xanh. Lấy ngẫu nhiên một quả bóng. Xác suất lấy được quả bóng màu vàng là:",
  "options": [
    "A. 0,4",
    "B. 0,6",
    "C. 0,5",
    "D. 0,25"
  ],
  "answer": "B. 0,6",
  "explanation": "Tổng số bóng là 6 + 4 = 10 quả. Xác suất lấy bóng vàng là P = 6/10 = 0,6 = 60%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho biến cố A có xác suất P(A) = 3/8. Xác suất của biến cố đối A_ngang là:",
  "options": [
    "A. 3/8",
    "B. 5/8",
    "C. 1/8",
    "D. 8/3"
  ],
  "answer": "B. 5/8",
  "explanation": "P(A_ngang) = 1 - P(A) = 1 - 3/8 = 5/8."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Gieo đồng thời hai con xúc xắc 6 mặt đồng chất. Số phần tử của không gian mẫu n(Ω) là:",
  "options": [
    "A. 12",
    "B. 36",
    "C. 18",
    "D. 24"
  ],
  "answer": "B. 36",
  "explanation": "Mỗi con xúc xắc có 6 kết quả. Số phần tử khi gieo 2 con xúc xắc là n(Ω) = 6 * 6 = 36."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Rút ngẫu nhiên một tấm thẻ từ hộp đựng 20 tấm thẻ đánh số từ 1 đến 20. Xác suất rút được thẻ ghi số chia hết cho 5 là:",
  "options": [
    "A. 1/5",
    "B. 1/4",
    "C. 1/10",
    "D. 4/5"
  ],
  "answer": "A. 1/5",
  "explanation": "Các số chia hết cho 5 từ 1 đến 20 là {5, 10, 15, 20} (4 số). Xác suất P = 4 / 20 = 1/5 = 20%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Một gia đình có 2 người con. Giả sử xác suất sinh con trai và con gái ở mỗi lần sinh là như nhau. Xác suất để gia đình có một trai và một gái là:",
  "options": [
    "A. 1/4",
    "B. 1/2",
    "C. 3/4",
    "D. 1/3"
  ],
  "answer": "B. 1/2",
  "explanation": "Không gian mẫu theo thứ tự sinh là {TT, TG, GT, GG} (4 kết quả). Các kết quả có 1 trai 1 gái là {TG, GT} (2 kết quả). Xác suất P = 2/4 = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Gieo hai con xúc xắc 6 mặt. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 8 là:",
  "options": [
    "A. 5/36",
    "B. 1/6",
    "C. 7/36",
    "D. 4/36"
  ],
  "answer": "A. 5/36",
  "explanation": "Các cặp có tổng bằng 8 là: (2; 6), (3; 5), (4; 4), (5; 3), (6; 2) (5 cặp). Xác suất P = 5/36."
}'></div>

---

### Phần II. Tự luận (7,0 điểm — 4 bài toán)

#### Bài 1 (1,5 điểm): Phép thử rút thẻ & Đếm kết quả thuận lợi
Một hộp kín chứa $16$ tấm thẻ cùng loại được đánh số thứ tự từ $1$ đến $16$. Rút ngẫu nhiên một tấm thẻ trong hộp.
a) Xác định không gian mẫu $\Omega$ và tính $n(\Omega)$.  
b) Liệt kê các kết quả thuận lợi và tính xác suất của biến cố $A$: *"Số ghi trên thẻ là số chính phương"*.  
c) Liệt kê các kết quả thuận lợi và tính xác suất của biến cố $B$: *"Số ghi trên thẻ là ước của 24"*.

---

#### Bài 2 (2,0 điểm): Bảng hai chiều với Phép thử gieo xúc xắc
Gieo đồng thời hai con xúc xắc 6 mặt cân đối và đồng chất.
a) Lập bảng hai chiều biểu diễn tổng số chấm xuất hiện trên hai con xúc xắc.  
b) Tính xác suất của biến cố $E$: *"Tổng số chấm trên hai con xúc xắc là số chia hết cho 4"*.  
c) Tính xác suất của biến cố $F$: *"Tích số chấm xuất hiện trên hai con xúc xắc là một số chẵn"*.

---

#### Bài 3 (2,0 điểm): Sơ đồ hình cây & Rút thăm không hoàn lại
Một túi quà có $3$ món đồ chơi gồm: $1$ chiếc ô tô ($O$), $1$ chú gấu bông ($G$) và $1$ bộ xếp hình ($X$). Hai bạn An và Bình lần lượt rút ngẫu nhiên mỗi người một món đồ chơi (An rút trước, Bình rút sau và không hoàn lại).
a) Vẽ sơ đồ hình cây biểu diễn tất cả các kết quả có thể của phép thử.  
b) Viết không gian mẫu $\Omega$ và tính $n(\Omega)$.  
c) Tính xác suất để bạn An rút được chiếc ô tô.  
d) Tính xác suất để bạn Bình rút được chú gấu bông.

---

#### Bài 4 (1,5 điểm - Vận dụng cao): Mô hình Xác suất Thực tế & Biến cố đối
Một tổ học sinh gồm $6$ bạn nam và $4$ bạn nữ. Thầy giáo cần chọn ngẫu nhiên một nhóm gồm $3$ bạn đại diện cho lớp tham gia cuộc thi Hùng biện Tiếng Anh cấp trường.
a) Có bao nhiêu cách chọn một nhóm $3$ học sinh bất kỳ từ tổ này (tính $n(\Omega)$)?  
b) Tính xác suất để nhóm được chọn chỉ toàn là học sinh nam.  
c) Tính xác suất để nhóm $3$ học sinh được chọn có **ít nhất một bạn nữ**.

---

## Đáp án chi tiết & Barem chấm điểm Phần Tự luận

### Bài 1 (1,5 điểm)

**a) (0,5 điểm)**
- Không gian mẫu: $\Omega = \{1; 2; 3; \dots; 16\}$. *(0,25đ)*
- Số phần tử của không gian mẫu: $n(\Omega) = 16$. *(0,25đ)*

**b) (0,5 điểm)**
- Các số chính phương từ $1$ đến $16$ là: $A = \{1; 4; 9; 16\}$. *(0,25đ)*
- Số kết quả thuận lợi $n(A) = 4$.
- Xác suất của biến cố $A$ là:
  $$P(A) = \frac{n(A)}{n(\Omega)} = \frac{4}{16} = \frac{1}{4} = 0,25 = 25\%$$ *(0,25đ)*

**c) (0,5 điểm)**
- Các số từ $1$ đến $16$ là ước của $24$ gồm: $B = \{1; 2; 3; 4; 6; 8; 12\}$. *(0,25đ)*
- Số kết quả thuận lợi $n(B) = 7$.
- Xác suất của biến cố $B$ là:
  $$P(B) = \frac{n(B)}{n(\Omega)} = \frac{7}{16} = 0,4375 = 43,75\%$$ *(0,25đ)*

---

### Bài 2 (2,0 điểm)

**a) (0,75 điểm)**
- Bảng hai chiều biểu diễn tổng số chấm $i + j$ ($1 \le i, j \le 6$): *(0,5đ)*

| $i \backslash j$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 2 | 3 | **4** | 5 | 6 | 7 |
| **2** | 3 | **4** | 5 | 6 | 7 | **8** |
| **3** | **4** | 5 | 6 | 7 | **8** | 9 |
| **4** | 5 | 6 | 7 | **8** | 9 | 10 |
| **5** | 6 | 7 | **8** | 9 | 10 | 11 |
| **6** | 7 | **8** | 9 | 10 | 11 | **12** |

- Số phần tử của không gian mẫu là $n(\Omega) = 6 \times 6 = 36$. *(0,25đ)*

**b) (0,75 điểm)**
- Tổng chia hết cho $4$ gồm các tổng bằng $4, 8$ hoặc $12$:
  + Tổng bằng 4: $(1; 3), (2; 2), (3; 1)$ (3 cặp).
  + Tổng bằng 8: $(2; 6), (3; 5), (4; 4), (5; 3), (6; 2)$ (5 cặp).
  + Tổng bằng 12: $(6; 6)$ (1 cặp). *(0,25đ)*
- Số kết quả thuận lợi cho biến cố $E$:
  $$n(E) = 3 + 5 + 1 = 9$$ *(0,25đ)*
- Xác suất của biến cố $E$ là:
  $$P(E) = \frac{9}{36} = \frac{1}{4} = 0,25 = 25\%$$ *(0,25đ)*

**c) (0,5 điểm)**
- Tích $i \times j$ là số chẵn khi có ít nhất một số chẵn.
- Xét biến cố đối $\bar{F}$: *"Tích $i \times j$ là số lẻ"* $\iff$ Cả hai số $i$ và $j$ đều lẻ.
  Các số lẻ là $\{1; 3; 5\}$, do đó số kết quả thuận lợi cho $\bar{F}$ là:
  $$n(\bar{F}) = 3 \times 3 = 9$$ *(0,25đ)*
- Xác suất của biến cố đối: $P(\bar{F}) = \frac{9}{36} = \frac{1}{4}$.
- Áp dụng công thức biến cố đối:
  $$P(F) = 1 - P(\bar{F}) = 1 - \frac{1}{4} = \frac{3}{4} = 0,75 = 75\%$$ *(0,25đ)*

---

### Bài 3 (2,0 điểm)

**a) (0,75 điểm)**
- Sơ đồ hình cây:
  + Bạn An có 3 khả năng rút: Ô tô ($O$), Gấu bông ($G$), Xếp hình ($X$). *(0,25đ)*
  + Nhánh $O$: Bình có thể rút $G$ hoặc $X \implies (O; G), (O; X)$.
  + Nhánh $G$: Bình có thể rút $O$ hoặc $X \implies (G; O), (G; X)$.
  + Nhánh $X$: Bình có thể rút $O$ hoặc $G \implies (X; O), (X; G)$. *(0,5đ)*

**b) (0,5 điểm)**
- Không gian mẫu:
  $$\Omega = \{(O; G), (O; X), (G; O), (G; X), (X; O), (X; G)\}$$ *(0,25đ)*
- Số phần tử không gian mẫu: $n(\Omega) = 6$. *(0,25đ)*

**c) (0,375 điểm)**
- An rút được Ô tô tương ứng với các cặp có $O$ đứng đầu: $\{(O; G), (O; X)\} \implies 2$ kết quả.
- Xác suất là: $P = \frac{2}{6} = \frac{1}{3}$. *(0,375đ)*

**d) (0,375 điểm)**
- Bình rút được Gấu bông tương ứng với các cặp có $G$ đứng sau: $\{(O; G), (X; G)\} \implies 2$ kết quả.
- Xác suất là: $P = \frac{2}{6} = \frac{1}{3}$. *(0,375đ)*

---

### Bài 4 (1,5 điểm)

**a) (0,5 điểm)**
- Tổng số học sinh trong tổ: $6 + 4 = 10$ học sinh.
- Số cách chọn ngẫu nhiên $3$ bạn từ $10$ bạn là:
  $$n(\Omega) = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120 \text{ (cách)}$$ *(0,5đ)*

**b) (0,5 điểm)**
- Gọi $K$ là biến cố: *"Nhóm 3 bạn được chọn chỉ toàn là học sinh nam"*.
- Số cách chọn $3$ bạn nam từ $6$ bạn nam là:
  $$n(K) = \frac{6 \times 5 \times 4}{3 \times 2 \times 1} = 20 \text{ (cách)}$$ *(0,25đ)*
- Xác suất của biến cố $K$ là:
  $$P(K) = \frac{n(K)}{n(\Omega)} = \frac{20}{120} = \frac{1}{6} \approx 16,67\%$$ *(0,25đ)*

**c) (0,5 điểm)**
- Gọi $H$ là biến cố: *"Nhóm 3 bạn được chọn có ít nhất một bạn nữ"*.
- Biến cố đối của $H$ là $\bar{H}$: *"Nhóm 3 bạn được chọn không có bạn nữ nào"* (tức là nhóm chỉ toàn học sinh nam).
- Như vậy $\bar{H}$ chính là biến cố $K$ ở câu b!
  Ta có $P(\bar{H}) = P(K) = \frac{1}{6}$. *(0,25đ)*
- Áp dụng công thức tính xác suất theo biến cố đối:
  $$P(H) = 1 - P(\bar{H}) = 1 - \frac{1}{6} = \frac{5}{6} \approx 83,33\%$$ *(0,25đ)*
- Vậy xác suất để nhóm được chọn có ít nhất một bạn nữ là $\frac{5}{6}$.
