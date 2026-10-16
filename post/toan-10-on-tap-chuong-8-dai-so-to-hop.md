---
title: 'Toán 10 Ôn tập Chương 8: Đại số tổ hợp - Tổng hợp & Đề kiểm tra'
description: 'Tổng ôn tập toàn diện Chương 8 Toán 10: Quy tắc cộng, quy tắc nhân, sơ đồ cây, hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton bậc 4 và bậc 5. Ma trận đề kiểm tra 45 phút chuẩn Bộ GD&ĐT, 12 câu trắc nghiệm tự chấm và 4 câu tự luận có barem điểm 0.25đ.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Đại số tổ hợp
  - Ôn tập chương 8
  - Quy tắc đếm
  - Hoán vị chỉnh hợp tổ hợp
  - Nhị thức Newton
  - Đề kiểm tra 45 phút
  - Kết nối tri thức
---

# Ôn tập Chương 8. Đại số tổ hợp

Đại số tổ hợp (Combinatorics) là nghệ thuật đếm tinh vi của toán học hiện đại, làm nền móng cho lý thuyết xác suất, mật mã học, khoa học dữ liệu và thuật toán máy tính. Chương 8 trang bị toàn bộ bộ công cụ giải tích tổ hợp nền tảng: từ quy tắc cộng, quy tắc nhân đến ba công cụ hoán vị ($P_n$), chỉnh hợp ($A_n^k$), tổ hợp ($C_n^k$) và công thức khai triển nhị thức Newton. Bài ôn tập tổng hợp này giúp các em làm chủ các phương pháp tư duy và đạt điểm tối đa trong bài kiểm tra định kỳ 45 phút.

---

## 1. Bảng tra cứu toàn diện công thức Chương 8

| Mạch kiến thức | Công thức chuẩn toán học | Lưu ý & Dấu hiệu nhận biết |
| :--- | :--- | :--- |
| **Quy tắc cộng** | $N = n_1 + n_2 + \dots + n_k$ | Các phương án độc lập, loại trừ nhau (từ khóa: <em>"hoặc", "trường hợp"</em>) |
| **Quy tắc nhân** | $N = m_1 \times m_2 \times \dots \times m_k$ | Các công đoạn nối tiếp nhau bắt buộc (từ khóa: <em>"và", "tiếp theo", "đồng thời"</em>) |
| **Hoán vị ($P_n$)** | $P_n = n! = n(n-1)\dots 1$<br>Quy ước: $0! = 1$ | Sắp xếp thứ tự **toàn bộ** $n$ phần tử khác nhau |
| **Chỉnh hợp ($A_n^k$)** | $A_n^k = \frac{n!}{(n - k)!} = n(n-1)\dots(n-k+1)$ | Chọn $k$ từ $n$ và **CÓ sắp xếp thứ tự** ($1 \le k \le n$) |
| **Tổ hợp ($C_n^k$)** | $C_n^k = \frac{n!}{k!(n - k)!} = \frac{A_n^k}{k!}$ | Chọn $k$ từ $n$ **KHÔNG phân biệt thứ tự** ($0 \le k \le n$) |
| **Tính chất Tổ hợp** | • $C_n^k = C_n^{n - k}$<br>• $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$ (Hệ thức Pascal) | Giúp tính nhanh tổ hợp và rút gọn hệ số nhị thức |
| **Nhị thức Newton bậc 4** | $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$ | Dãy hệ số: $1 - 4 - 6 - 4 - 1$ (gồm 5 số hạng) |
| **Nhị thức Newton bậc 5** | $(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$ | Dãy hệ số: $1 - 5 - 10 - 10 - 5 - 1$ (gồm 6 số hạng) |
| **Tổng các hệ số** | $C_n^0 + C_n^1 + \dots + C_n^n = 2^n$ | Thu được khi thay $a = 1, b = 1$ vào khai triển |

---

## 2. Ma trận đề kiểm tra 45 phút Chương 8 (Chuẩn Bộ GD&ĐT)

Tỉ lệ chuẩn cấu trúc: **30% Trắc nghiệm khách quan (3,0 điểm)** và **70% Tự luận phân hóa (7,0 điểm)**.

| Chủ đề / Mạch kiến thức | Nhận biết | Thông hiểu | Vận dụng | Vận dụng cao | Tổng câu / Điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Quy tắc cộng, quy tắc nhân & Sơ đồ cây** | 2 TN (0,5đ) | 1 TN (0,25đ) | 1 TL (1,5đ) | - | **3 TN + 1 TL** (2,25đ) |
| **2. Hoán vị, phương pháp buộc & Xếp chỗ** | 2 TN (0,5đ) | 1 TN (0,25đ) | 1 TL (1,5đ) | - | **3 TN + 1 TL** (2,25đ) |
| **3. Chỉnh hợp, tổ hợp trong chọn đội & Hình học** | 2 TN (0,5đ) | 1 TN (0,25đ) | 1 TL (2,0đ) | - | **3 TN + 1 TL** (2,75đ) |
| **4. Khai triển Nhị thức Newton & Ứng dụng** | 2 TN (0,5đ) | 1 TN (0,25đ) | - | 1 TL (2,0đ) | **3 TN + 1 TL** (2,75đ) |
| **Tổng điểm** | **1,75đ (17,5%)** | **1,25đ (12,5%)** | **5,0đ (50,0%)** | **2,0đ (20,0%)** | **10,0 điểm (100%)** |

---

## 3. Phần I: Trắc nghiệm khách quan (3,0 điểm - 12 câu, mỗi câu 0,25 điểm)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q1",
  "question": "Có bao nhiêu cách chọn một chiếc bút từ hộp gồm 5 chiếc bút bi xanh và 4 chiếc bút bi đỏ?",
  "options": [
    "9",
    "20",
    "1",
    "5"
  ],
  "answer": 0,
  "explanation": "Chọn 1 bút từ 2 nhóm rời nhau, theo quy tắc cộng: $5 + 4 = 9$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q2",
  "question": "Một thực đơn trưa gồm 3 món mặn và 2 món canh. Có bao nhiêu cách chọn một bữa ăn gồm 1 món mặn và 1 món canh?",
  "options": [
    "6",
    "5",
    "1",
    "9"
  ],
  "answer": 0,
  "explanation": "Hai công đoạn nối tiếp nhau, theo quy tắc nhân: $3 \\times 2 = 6$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q3",
  "question": "Số cách sắp xếp 5 học sinh vào một hàng dọc là:",
  "options": [
    "120",
    "24",
    "25",
    "720"
  ],
  "answer": 0,
  "explanation": "Số hoán vị của 5 phần tử: $P_5 = 5! = 120$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q4",
  "question": "Số chỉnh hợp chập 3 của 7 phần tử $A_7^3$ bằng:",
  "options": [
    "210",
    "35",
    "5040",
    "21"
  ],
  "answer": 0,
  "explanation": "$A_7^3 = 7 \\times 6 \\times 5 = 210$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q5",
  "question": "Số tổ hợp chập 2 của 10 phần tử $C_{10}^2$ bằng:",
  "options": [
    "45",
    "90",
    "20",
    "100"
  ],
  "answer": 0,
  "explanation": "$C_{10}^2 = \\frac{10 \\times 9}{2} = 45$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q6",
  "question": "Một lớp có 32 học sinh. Có bao nhiêu cách chọn ra 2 bạn làm tổ trưởng và tổ phó?",
  "options": [
    "992",
    "496",
    "64",
    "32"
  ],
  "answer": 0,
  "explanation": "Có phân biệt chức vụ (thứ tự), nên dùng chỉnh hợp: $A_{32}^2 = 32 \\times 31 = 992$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q7",
  "question": "Cho 8 điểm phân biệt trong mặt phẳng, không có 3 điểm nào thẳng hàng. Số đoạn thẳng nối 2 điểm bất kỳ là:",
  "options": [
    "28",
    "56",
    "16",
    "64"
  ],
  "answer": 0,
  "explanation": "Mỗi đoạn thẳng là một tổ hợp chập 2 của 8 điểm: $C_8^2 = \\frac{8 \\times 7}{2} = 28$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q8",
  "question": "Khai triển $(a + b)^5$ có tất cả bao nhiêu số hạng?",
  "options": [
    "6",
    "5",
    "10",
    "32"
  ],
  "answer": 0,
  "explanation": "Khai triển $(a + b)^n$ có $n + 1$ số hạng. Với $n = 5$ có $5 + 1 = 6$ số hạng."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q9",
  "question": "Hệ số của $x^3$ trong khai triển $(x + 2)^4$ là:",
  "options": [
    "8",
    "4",
    "24",
    "16"
  ],
  "answer": 0,
  "explanation": "Số hạng chứa $x^3$ là $C_4^1 x^3 (2) = 4 \\times 2 x^3 = 8x^3$. Hệ số là 8."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q10",
  "question": "Tổng các hệ số trong khai triển $(3x - 1)^4$ bằng:",
  "options": [
    "16",
    "81",
    "1",
    "64"
  ],
  "answer": 0,
  "explanation": "Thay $x = 1$ vào khai triển: $(3(1) - 1)^4 = 2^4 = 16$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q11",
  "question": "Hệ thức Pascal nào sau đây là ĐÚNG?",
  "options": [
    "C_n^k + C_n^{k+1} = C_{n+1}^{k+1}",
    "C_n^k + C_n^{k+1} = C_{n+1}^k",
    "C_n^k = C_{n-1}^k + C_{n-1}^{k+1}",
    "A_n^k + A_n^{k+1} = A_{n+1}^{k+1}"
  ],
  "answer": 0,
  "explanation": "Hệ thức Pascal: $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_ontap_q12",
  "question": "Nghiệm của phương trình $P_n = 24$ là:",
  "options": [
    "n = 4",
    "n = 3",
    "n = 5",
    "n = 6"
  ],
  "answer": 0,
  "explanation": "$P_n = n! = 24 \\implies n = 4$ (vì $4! = 4 \\times 3 \\times 2 \\times 1 = 24$)."
}'></div>

---

## 4. Phần II: Tự luận phân hóa (7,0 điểm - 4 câu)

### Đề bài tự luận

#### Câu 1 (1,5 điểm - Vận dụng thấp)
Từ các chữ số thuộc tập hợp $A = \{0; 1; 2; 3; 4; 5; 6\}$:
1. Có thể lập được bao nhiêu số tự nhiên gồm $4$ chữ số đôi một khác nhau?
2. Có bao nhiêu số tự nhiên lẻ gồm $3$ chữ số đôi một khác nhau?

#### Câu 2 (1,5 điểm - Vận dụng trung bình)
Một nhóm gồm $4$ học sinh nam và $3$ học sinh nữ xếp thành một hàng ngang để chụp ảnh kỷ niệm.
1. Có bao nhiêu cách sắp xếp tùy ý cả $7$ học sinh?
2. Có bao nhiêu cách sắp xếp sao cho các học sinh cùng giới tính luôn đứng cạnh nhau?
3. Có bao nhiêu cách sắp xếp sao cho không có hai bạn nữ nào đứng cạnh nhau?

#### Câu 3 (2,0 điểm - Vận dụng)
Một hộp chứa $6$ quả cầu xanh, $5$ quả cầu đỏ và $4$ quả cầu vàng (các quả cầu đôi một khác nhau). Người ta lấy ngẫu nhiên $4$ quả cầu từ hộp.
1. Có bao nhiêu cách lấy được đúng $2$ quả cầu màu đỏ?
2. Có bao nhiêu cách lấy được $4$ quả cầu có đủ cả ba màu?

#### Câu 4 (2,0 điểm - Vận dụng cao)
1. Khai triển biểu thức $P(x) = (2x - 3)^5$ thành đa thức. Tìm hệ số của số hạng chứa $x^3$.
2. Cho khai triển $(1 + 2x)^n = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n$ với $n \in \{4; 5\}$. Tìm số tự nhiên $n$ biết rằng:
   $$a_0 + a_1 + a_2 + \dots + a_n = 243$$
   Với giá trị $n$ vừa tìm được, hãy xác định hệ số lớn nhất trong các hệ số $a_0, a_1, \dots, a_n$.

---

### Hướng dẫn chấm & Thang điểm chi tiết (Barem 0,25đ)

#### Lời giải Câu 1 (1,5 điểm)
- **Ý 1 (0,75 điểm):**
  - Gọi số tự nhiên có 4 chữ số khác nhau là $\overline{abcd}$ với $a, b, c, d \in A$ và $a \ne 0$ *(0,25đ)*.
  - Chọn $a \in A \setminus \{0\}$: có $6$ cách chọn (từ 1 đến 6).
    Sau đó chọn 3 chữ số $b, c, d$ từ $6$ chữ số còn lại của tập $A$: có $A_6^3 = 6 \times 5 \times 4 = 120$ cách *(0,25đ)*.
  - Theo quy tắc nhân, số các số tự nhiên thỏa mãn là:
    $$6 \times A_6^3 = 6 \times 120 = 720 \quad \text{số}$$
    *(0,25đ)*
- **Ý 2 (0,75 điểm):**
  - Gọi số tự nhiên lẻ có 3 chữ số khác nhau là $\overline{abc}$ ($a \ne 0$).
    Vì số lẻ nên chữ số tận cùng $c \in \{1; 3; 5\} \implies$ có $3$ cách chọn cho $c$ *(0,25đ)*.
  - Chọn $a \in A \setminus \{0; c\}$: tập $A$ có 7 phần tử, bỏ đi số 0 và số $c$, còn lại $5$ cách chọn cho $a$ *(0,25đ)*.
  - Chọn $b \in A \setminus \{a; c\}$: còn lại $5$ cách chọn cho $b$ (kể cả số 0).
    Theo quy tắc nhân, số các số tự nhiên lẻ là:
    $$3 \times 5 \times 5 = 75 \quad \text{số}$$
    *(0,25đ)*

---

#### Lời giải Câu 2 (1,5 điểm)
- **Ý 1 (0,5 điểm):**
  - Xếp tùy ý $7$ học sinh vào $7$ vị trí trên một hàng ngang là số hoán vị của $7$ phần tử:
    $$P_7 = 7! = 5.040 \quad \text{cách}$$
    *(0,5đ)*
- **Ý 2 (0,5 điểm):**
  - Áp dụng phương pháp buộc phần tử:
    Buộc $4$ bạn nam thành khối $N$, buộc $3$ bạn nữ thành khối $U$ *(0,25đ)*.
  - Có $2! = 2$ cách xếp thứ tự 2 khối (Nam trước hoặc Nữ trước).
    Số cách hoán vị 4 bạn nam bên trong khối là $4! = 24$.
    Số cách hoán vị 3 bạn nữ bên trong khối là $3! = 6$.
    Theo quy tắc nhân, tổng số cách xếp là:
    $$2! \times 4! \times 3! = 2 \times 24 \times 6 = 288 \quad \text{cách}$$
    *(0,25đ)*
- **Ý 3 (0,5 điểm):**
  - Phương pháp vách ngăn:
    Đầu tiên, xếp $4$ bạn nam thành một hàng ngang, có $4! = 24$ cách.
    Bốn bạn nam tạo ra $5$ vị trí trống (vách ngăn) gồm 2 đầu và 3 khoảng giữa:
    $$\_ \ \text{Nam}_1 \ \_ \ \text{Nam}_2 \ \_ \ \text{Nam}_3 \ \_ \ \text{Nam}_4 \ \_$$
    *(0,25đ)*
  - Để không có 2 bạn nữ nào đứng cạnh nhau, ta xếp $3$ bạn nữ vào $3$ trong $5$ vị trí trống này.
    Số cách xếp 3 bạn nữ là:
    $$A_5^3 = 5 \times 4 \times 3 = 60 \quad \text{cách}$$
    Theo quy tắc nhân, số cách sắp xếp là:
    $$24 \times 60 = 1.440 \quad \text{cách}$$
    *(0,25đ)*

---

#### Lời giải Câu 3 (2,0 điểm)
- **Ý 1 (1,0 điểm):**
  - Tổng số quả cầu trong hộp là $6 + 5 + 4 = 15$ quả cầu.
    Số quả cầu không phải màu đỏ là $6 + 4 = 10$ quả (xanh và vàng) *(0,25đ)*.
  - Để lấy được đúng $2$ quả cầu màu đỏ trong tổng số $4$ quả cầu lấy ra:
    - Chọn $2$ quả cầu đỏ từ $5$ quả cầu đỏ có $C_5^2 = 10$ cách *(0,25đ)*.
    - Chọn $2$ quả cầu còn lại từ $10$ quả không phải màu đỏ có $C_{10}^2 = 45$ cách *(0,25đ)*.
  - Theo quy tắc nhân, số cách lấy là:
    $$C_5^2 \times C_{10}^2 = 10 \times 45 = 450 \quad \text{cách}$$
    *(0,25đ)*
- **Ý 2 (1,0 điểm):**
  - Lấy $4$ quả cầu có đủ cả ba màu (xanh, đỏ, vàng), ta phân tích thành $3$ trường hợp:
    - **Trường hợp 1:** $2$ quả xanh, $1$ quả đỏ, $1$ quả vàng.
      Số cách: $C_6^2 \times C_5^1 \times C_4^1 = 15 \times 5 \times 4 = 300$ cách *(0,25đ)*.
    - **Trường hợp 2:** $1$ quả xanh, $2$ quả đỏ, $1$ quả vàng.
      Số cách: $C_6^1 \times C_5^2 \times C_4^1 = 6 \times 10 \times 4 = 240$ cách *(0,25đ)*.
    - **Trường hợp 3:** $1$ quả xanh, $1$ quả đỏ, $2$ quả vàng.
      Số cách: $C_6^1 \times C_5^1 \times C_4^2 = 6 \times 5 \times 6 = 180$ cách *(0,25đ)*.
  - Ba trường hợp trên là rời nhau, theo quy tắc cộng:
    $$300 + 240 + 180 = 720 \quad \text{cách}$$
    *(0,25đ)*

---

#### Lời giải Câu 4 (2,0 điểm)
- **Ý 1 (1,0 điểm):**
  - Áp dụng công thức khai triển nhị thức Newton bậc 5 cho $(a - b)^5$ với $a = 2x, b = 3$:
    $$(2x - 3)^5 = (2x)^5 - 5(2x)^4(3) + 10(2x)^3(3^2) - 10(2x)^2(3^3) + 5(2x)(3^4) - 3^5$$
    *(0,25đ)*
  - Tính cụ thể các đơn thức:
    $$= 32x^5 - 5(16x^4)(3) + 10(8x^3)(9) - 10(4x^2)(27) + 10x(81) - 243$$
    $$= 32x^5 - 240x^4 + 720x^3 - 1080x^2 + 810x - 243$$
    *(0,5đ)*
  - Số hạng chứa $x^3$ là $720x^3$.
    Vậy hệ số của số hạng chứa $x^3$ là $720$ *(0,25đ)*.
- **Ý 2 (1,0 điểm):**
  - Cho $x = 1$ vào khai triển $(1 + 2x)^n$, ta được:
    $$a_0 + a_1 + a_2 + \dots + a_n = (1 + 2 \cdot 1)^n = 3^n$$
    Theo đề bài: $3^n = 243 = 3^5 \implies n = 5$ *(0,25đ)*.
  - Với $n = 5$, khai triển có dạng:
    $$(1 + 2x)^5 = \sum_{k=0}^5 C_5^k (2x)^k = \sum_{k=0}^5 C_5^k 2^k x^k$$
    Do đó hệ số tổng quát là $a_k = C_5^k 2^k$ với $k \in \{0; 1; 2; 3; 4; 5\}$ *(0,25đ)*.
  - Tính các hệ số:
    - $a_0 = C_5^0 2^0 = 1$
    - $a_1 = C_5^1 2^1 = 5 \times 2 = 10$
    - $a_2 = C_5^2 2^2 = 10 \times 4 = 40$
    - $a_3 = C_5^3 2^3 = 10 \times 8 = 80$
    - $a_4 = C_5^4 2^4 = 5 \times 16 = 80$
    - $a_5 = C_5^5 2^5 = 1 \times 32 = 32$
    *(0,25đ)*
  - So sánh các giá trị, hệ số lớn nhất là $a_3 = a_4 = 80$ *(0,25đ)*.
