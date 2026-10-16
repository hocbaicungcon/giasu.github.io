---
title: 'Toán 11 Bài 6: Cấp số cộng - Định nghĩa, số hạng tổng quát, tính chất và tổng n số hạng đầu'
description: 'Lý thuyết toàn diện Bài 6 Toán 11 Kết nối tri thức: Định nghĩa cấp số cộng, công sai d, công thức số hạng tổng quát u_n, tính chất trung bình cộng, công thức tính nhanh tổng S_n (câu chuyện thần đồng Gauss) và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Cấp số cộng
  - Công sai
  - Tổng cấp số cộng
  - Gauss
  - Kết nối tri thức
grade: 11
---

# Bài 6. Cấp số cộng

Chào mừng các em đến với một trong những mô hình dãy số phổ biến và ứng dụng rộng rãi nhất trong tự nhiên và đời sống: **Cấp số cộng**!

Hãy quan sát những hiện tượng quen thuộc sau:
- Các bậc thang của một tòa nhà cao tầng: cứ bước lên một bậc thì độ cao tăng thêm đúng $18\text{ cm}$.
- Một vận động viên chạy bộ: ngày đầu chạy $2\text{ km}$, mỗi ngày sau tăng thêm đều đặn $0.5\text{ km}$.
- Số tiền trả góp một món hàng: mỗi tháng người mua thanh toán một số tiền gốc cố định.
- Hàng ghế trong rạp hát: hàng sau luôn nhiều hơn hàng liền trước đúng $2$ chiếc ghế.

Tất cả các dãy số có đặc điểm *"số sau bằng số trước cộng với một hằng số không đổi"* được gọi là **Cấp số cộng**. Hãy cùng tìm hiểu quy luật toán học tuyệt đẹp này!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG CẤP SỐ CỘNG (CSC)</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa & Công sai</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_{n+1} = u_n + d, \quad \forall n \in \mathbb{N}^*$.<br>• $d = u_{n+1} - u_n$ gọi là <strong>công sai</strong>.<br>• Khi $d = 0$: CSC là dãy số hằng.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Số hạng tổng quát $u_n$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_n = u_1 + (n - 1)d$.<br>• Cho phép tính trực tiếp bất kỳ số hạng nào mà không cần tính tuần tự.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất Trung bình cộng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_k = \frac{u_{k-1} + u_{k+1}}{2} \quad (k \ge 2)$.<br>• Ba số $a, b, c$ lập thành CSC $\Leftrightarrow a + c = 2b$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tổng $n$ số hạng đầu $S_n$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $S_n = \frac{n(u_1 + u_n)}{2}$.<br>• Hoặc: $S_n = \frac{n[2u_1 + (n - 1)d]}{2}$.<br>• Công thức huyền thoại của Gauss.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Kiểm tra công sai:** Dãy số $3, 7, 11, 15, \dots$ có phải là cấp số cộng không? Công sai $d$ bằng bao nhiêu?
2. **Số hạng âm:** Cho cấp số cộng có $u_1 = 10, d = -3$. Số hạng thứ hai $u_2$ bằng bao nhiêu?
3. **Trung bình cộng:** Nếu ba số $2, x, 14$ lập thành một cấp số cộng theo thứ tự đó, thì $x$ bằng bao nhiêu?
4. **Câu chuyện Gauss:** Tổng các số tự nhiên từ $1$ đến $10$ ($1 + 2 + \dots + 10$) bằng bao nhiêu?
5. **Dãy hằng:** Dãy số $5, 5, 5, 5, \dots$ có phải là cấp số cộng không? Công sai $d$ bằng bao nhiêu?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Là cấp số cộng với công sai $d = 7 - 3 = 4$.
> 2. $u_2 = u_1 + d = 10 + (-3) = 7$.
> 3. Áp dụng tính chất trung bình cộng: $x = \frac{2 + 14}{2} = 8$.
> 4. $S_{10} = \frac{10 \times (1 + 10)}{2} = 55$.
> 5. Đúng là một cấp số cộng đặc biệt với công sai $d = 0$.

---

## I. Định nghĩa Cấp số cộng

### 1. Định nghĩa

**Cấp số cộng** là một dãy số (hữu hạn hoặc vô hạn), trong đó kể từ số hạng thứ hai trở đi, mỗi số hạng đều bằng số hạng đứng liền trước nó cộng với một số không đổi $d$.
$$u_{n+1} = u_n + d \quad \text{với mọi } n \in \mathbb{N}^*$$

- Số không đổi $d$ được gọi là **công sai** của cấp số cộng:
  $$d = u_{n+1} - u_n$$
- Khi $d = 0$, cấp số cộng có dạng $u_1, u_1, u_1, \dots$ (gọi là cấp số cộng không đổi hay dãy số hằng).
- Khi $d > 0$, cấp số cộng là một **dãy số tăng**.
- Khi $d < 0$, cấp số cộng là một **dãy số giảm**.

---

## II. Số hạng tổng quát của Cấp số cộng

> [!IMPORTANT]
> **Định lý 1:**  
> Nếu cấp số cộng $(u_n)$ có số hạng đầu là $u_1$ và công sai là $d$, thì số hạng tổng quát $u_n$ (với $n \ge 2$) được tính theo công thức:
> $$u_n = u_1 + (n - 1)d$$

*Chứng minh trực quan:*
$$\begin{aligned}
u_2 &= u_1 + d \\
u_3 &= u_2 + d = u_1 + 2d \\
u_4 &= u_3 + d = u_1 + 3d \\
&\dots \\
u_n &= u_1 + (n - 1)d
\end{aligned}$$

---

## III. Tính chất các số hạng của Cấp số cộng

> [!IMPORTANT]
> **Định lý 2:**  
> Trong một cấp số cộng, mỗi số hạng (trừ số hạng đầu và số hạng cuối đối với cấp số cộng hữu hạn) đều là **trung bình cộng** của hai số hạng đứng kề nó:
> $$u_k = \frac{u_{k-1} + u_{k+1}}{2} \quad (k \ge 2)$$
> hay:
> $$u_{k-1} + u_{k+1} = 2u_k$$

**Hệ quả mở rộng:**  
Ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng khi và chỉ khi:
$$a + c = 2b$$

---

## IV. Tổng $n$ số hạng đầu tiên của Cấp số cộng

### 1. Câu chuyện thần đồng Carl Friedrich Gauss

Năm 1787, khi cậu bé Gauss mới 10 tuổi, thầy giáo tiểu học Buttner muốn cả lớp im lặng làm bài tập trong thời gian dài nên đã giao đề toán: *"Hãy tính tổng của tất cả các số tự nhiên từ 1 đến 100!"*.  
Thầy vừa đọc xong đề, Gauss đã đặt ngay chiếc bảng con lên bàn với đáp số chính xác: **$5050$**.

Gauss đã nhận ra quy luật ghép đôi đối xứng kỳ diệu:
$$\begin{aligned}
S &= 1 + 2 + 3 + \dots + 98 + 99 + 100 \\
S &= 100 + 99 + 98 + \dots + 3 + 2 + 1
\end{aligned}$$
Cộng từng cặp thẳng cột:
$$2S = (1 + 100) + (2 + 99) + \dots + (100 + 1) = 101 + 101 + \dots + 101 \quad (100 \text{ cặp})$$
$$2S = 100 \times 101 \Rightarrow S = \frac{100 \times 101}{2} = 5050$$

### 2. Công thức tổng quát tính $S_n$

> [!IMPORTANT]
> **Định lý 3:**  
> Cho cấp số cộng $(u_n)$. Đặt $S_n = u_1 + u_2 + \dots + u_n$. Khi đó:
> $$S_n = \frac{n(u_1 + u_n)}{2}$$
> Thay $u_n = u_1 + (n - 1)d$ vào, ta được công thức thứ hai rất tiện lợi khi biết $u_1$ và $d$:
> $$S_n = \frac{n[2u_1 + (n - 1)d]}{2} = n u_1 + \frac{n(n - 1)}{2}d$$

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết Cấp số cộng, tìm số hạng đầu và công sai

> [!NOTE]
> **Phương pháp:**
> - Để chứng minh một dãy số $(u_n)$ là cấp số cộng, ta xét hiệu $u_{n+1} - u_n$. Nếu hiệu này bằng một hằng số $d$ độc lập với $n$, thì $(u_n)$ là cấp số cộng với công sai $d$.
> - Nếu dãy số cho dưới dạng bậc nhất đối với $n$: $u_n = an + b$, thì $(u_n)$ luôn là cấp số cộng với số hạng đầu $u_1 = a + b$ và công sai $d = a$.

#### Ví dụ 1:
a) Chứng minh rằng dãy số $u_n = 4n - 3$ là một cấp số cộng. Xác định $u_1$ và $d$.  
b) Dãy số $v_n = n^2 + 1$ có phải là cấp số cộng không? Vì sao?

#### Lời giải chi tiết:
**a)** Ta có $u_{n+1} = 4(n + 1) - 3 = 4n + 1$.  
Xét hiệu số:
$$u_{n+1} - u_n = (4n + 1) - (4n - 3) = 4$$
Vì hiệu số $u_{n+1} - u_n = 4$ là một hằng số không phụ thuộc vào $n$, nên $(u_n)$ là một cấp số cộng với:
- Số hạng đầu: $u_1 = 4(1) - 3 = 1$.
- Công sai: $d = 4$.

**b)** Khai triển 3 số hạng đầu tiên của $(v_n)$:
- $v_1 = 1^2 + 1 = 2$
- $v_2 = 2^2 + 1 = 5 \Rightarrow v_2 - v_1 = 5 - 2 = 3$.
- $v_3 = 3^2 + 1 = 10 \Rightarrow v_3 - v_2 = 10 - 5 = 5$.  
Vì $v_3 - v_2 \neq v_2 - v_1$ ($5 \neq 3$) nên dãy số $(v_n)$ **không phải là cấp số cộng**.

---

### Dạng 2: Tìm các yếu tố của Cấp số cộng từ hệ điều kiện

> [!NOTE]
> **Phương pháp giải chuẩn bằng phương pháp đại số:**
> Mọi đại lượng trong cấp số cộng ($u_k, S_n$) đều biểu diễn được qua hai ẩn số cơ bản: **$u_1$** (số hạng đầu) và **$d$** (công sai).
> Thiết lập hệ phương trình hai ẩn $u_1$ và $d$, giải hệ tìm $u_1, d$, từ đó suy ra mọi đại lượng theo yêu cầu.

#### Ví dụ 2:
Tìm số hạng đầu $u_1$ và công sai $d$ của cấp số cộng $(u_n)$, biết:
$$\begin{cases} u_2 + u_5 - u_3 = 10 \\ u_4 + u_6 = 26 \end{cases}$$

#### Lời giải chi tiết:
Biểu diễn tất cả các số hạng theo $u_1$ và $d$:
$$\begin{aligned}
u_2 &= u_1 + d \\
u_3 &= u_1 + 2d \\
u_4 &= u_1 + 3d \\
u_5 &= u_1 + 4d \\
u_6 &= u_1 + 5d
\end{aligned}$$
Thay vào hệ phương trình:
$$\begin{cases} (u_1 + d) + (u_1 + 4d) - (u_1 + 2d) = 10 \\ (u_1 + 3d) + (u_1 + 5d) = 26 \end{cases} \Leftrightarrow \begin{cases} u_1 + 3d = 10 \\ 2u_1 + 8d = 26 \end{cases} \Leftrightarrow \begin{cases} u_1 + 3d = 10 \\ u_1 + 4d = 13 \end{cases}$$
Lấy phương trình dưới trừ phương trình trên:
$$d = 13 - 10 = 3$$
Thay $d = 3$ vào phương trình đầu:
$$u_1 + 3(3) = 10 \Rightarrow u_1 = 1$$
Vậy cấp số cộng có số hạng đầu $u_1 = 1$ và công sai $d = 3$.

---

### Dạng 3: Tính tổng $n$ số hạng đầu $S_n$ và tìm $n$ khi biết $S_n$

#### Ví dụ 3:
Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 5$.
a) Tính tổng $S_{20}$ của 20 số hạng đầu tiên.  
b) Biết tổng của $n$ số hạng đầu tiên bằng $1020$. Tìm $n$.

#### Lời giải chi tiết:
**a)** Áp dụng công thức tính tổng $S_n = \frac{n[2u_1 + (n - 1)d]}{2}$:
$$S_{20} = \frac{20 \times [2(3) + (20 - 1) \times 5]}{2} = 10 \times [6 + 95] = 10 \times 101 = 1010$$

**b)** Theo công thức tính tổng $S_n$:
$$S_n = \frac{n[2(3) + (n - 1) \times 5]}{2} = \frac{n(5n + 1)}{2}$$
Theo giả thiết:
$$\frac{n(5n + 1)}{2} = 1020 \Leftrightarrow 5n^2 + n - 2040 = 0$$
Giải phương trình bậc hai:
$$\Delta = 1^2 - 4(5)(-2040) = 1 + 40800 = 40801 = 201^2$$
$$n = \frac{-1 + 201}{10} = \frac{200}{10} = 20 \quad \text{hoặc} \quad n = \frac{-1 - 201}{10} = -20.2 \; (\text{loại vì } n \in \mathbb{N}^*)$$
Vậy $n = 20$.

---

### Dạng 4: Ứng dụng thực tế của Cấp số cộng

#### Bài toán thực tế 1: Thiết kế hàng ghế khán đài Nhà hát Lớn
Một nhà hát có 25 hàng ghế được sắp xếp theo hình vòng cung bậc thang. Hàng ghế đầu tiên gần sân khấu nhất có $20$ chỗ ngồi. Do độ mở rộng về phía sau, mỗi hàng ghế tiếp theo đều được bố trí nhiều hơn hàng liền trước đúng $3$ chỗ ngồi.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ:</strong><br>
1. Hàng ghế thứ 25 (hàng ghế cuối cùng) có bao nhiêu chỗ ngồi?<br>
2. Toàn bộ khán phòng nhà hát có sức chứa tối đa bao nhiêu khán giả?
</div>

#### Lời giải chi tiết:
Số ghế của các hàng ghế từ hàng 1 đến hàng 25 lập thành một cấp số cộng $(u_n)$ hữu hạn với:
- Số hạng đầu: $u_1 = 20$ (số ghế hàng 1).
- Công sai: $d = 3$ (mỗi hàng tăng thêm 3 ghế).
- Số lượng số hạng: $n = 25$.

1. Số chỗ ngồi ở hàng ghế cuối cùng ($u_{25}$):
   $$u_{25} = u_1 + (25 - 1)d = 20 + 24 \times 3 = 20 + 72 = 92\text{ (chỗ ngồi)}$$

2. Tổng sức chứa của cả nhà hát chính là tổng $S_{25}$:
   $$S_{25} = \frac{25 \times (u_1 + u_{25})}{2} = \frac{25 \times (20 + 92)}{2} = \frac{25 \times 112}{2} = 25 \times 56 = 1400\text{ (chỗ ngồi)}$$
Vậy nhà hát có sức chứa tối đa đúng **$1400$ khán giả**.

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho cấp số cộng (u_n) có u_1 = -3 và công sai d = 5. Số hạng thứ hai u_2 bằng:",
  "options": [
    "A. -8",
    "B. 2",
    "C. 8",
    "D. -15"
  ],
  "answer": "B. 2",
  "explanation": "u_2 = u_1 + d = -3 + 5 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Công sai d của cấp số cộng 2, 5, 8, 11, ... là:",
  "options": [
    "A. 3",
    "B. -3",
    "C. 2",
    "D. 5/2"
  ],
  "answer": "A. 3",
  "explanation": "d = u_2 - u_1 = 5 - 2 = 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho cấp số cộng (u_n) có u_1 = 4, d = -2. Số hạng thứ mười u_{10} bằng:",
  "options": [
    "A. -14",
    "B. -16",
    "C. 22",
    "D. -20"
  ],
  "answer": "A. -14",
  "explanation": "u_{10} = u_1 + 9d = 4 + 9*(-2) = 4 - 18 = -14."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Ba số x, 5, 11 theo thứ tự lập thành một cấp số cộng. Giá trị của x là:",
  "options": [
    "A. -1",
    "B. 1",
    "C. 2",
    "D. 3"
  ],
  "answer": "A. -1",
  "explanation": "Áp dụng tính chất trung bình cộng: x + 11 = 2 * 5 = 10 ⇔ x = 10 - 11 = -1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho cấp số cộng (u_n) có u_1 = 2 và u_2 = 8. Tổng 10 số hạng đầu tiên S_{10} bằng:",
  "options": [
    "A. 290",
    "B. 300",
    "C. 260",
    "D. 580"
  ],
  "answer": "A. 290",
  "explanation": "d = 8 - 2 = 6. S_{10} = 10*[2*2 + 9*6] / 2 = 5 * [4 + 54] = 5 * 58 = 290."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho cấp số cộng (u_n) với u_n = 3n - 5. Công sai d của cấp số cộng bằng:",
  "options": [
    "A. -5",
    "B. 3",
    "C. -2",
    "D. 5"
  ],
  "answer": "B. 3",
  "explanation": "Công sai chính là hệ số của n trong công thức bậc nhất, d = 3 (hoặc tính u_2 - u_1 = 1 - (-2) = 3)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Số 100 là số hạng thứ mấy của cấp số cộng có u_1 = 4 và d = 3?",
  "options": [
    "A. 31",
    "B. 32",
    "C. 33",
    "D. 34"
  ],
  "answer": "C. 33",
  "explanation": "u_n = 4 + (n - 1)*3 = 100 ⇔ 3(n - 1) = 96 ⇔ n - 1 = 32 ⇒ n = 33."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho cấp số cộng thỏa mãn u_1 + u_5 = 18. Số hạng thứ ba u_3 bằng:",
  "options": [
    "A. 6",
    "B. 9",
    "C. 12",
    "D. Không xác định được"
  ],
  "answer": "B. 9",
  "explanation": "Do tính chất đối xứng của cấp số cộng: u_1 + u_5 = 2u_3 ⇔ 2u_3 = 18 ⇒ u_3 = 9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tổng các số tự nhiên lẻ có hai chữ số (11 + 13 + ... + 99) bằng:",
  "options": [
    "A. 2475",
    "B. 2480",
    "C. 2500",
    "D. 4950"
  ],
  "answer": "A. 2475",
  "explanation": "Dãy số lập thành CSC với u_1 = 11, u_n = 99, d = 2. Số các số hạng n = (99 - 11)/2 + 1 = 45. Tổng S = 45 * (11 + 99)/2 = 45 * 55 = 2475."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho tam giác ABC có ba góc lập thành một cấp số cộng và góc nhỏ nhất bằng 20°. Góc lớn nhất của tam giác bằng:",
  "options": [
    "A. 60°",
    "B. 80°",
    "C. 100°",
    "D. 120°"
  ],
  "answer": "C. 100°",
  "explanation": "Gọi 3 góc là A, B, C theo thứ tự lập thành CSC: A + C = 2B. Tổng ba góc A + B + C = 180° ⇒ 3B = 180° ⇒ B = 60°. Góc nhỏ nhất A = 20° ⇒ công sai d = 60° - 20° = 40°. Góc lớn nhất C = 60° + 40° = 100°."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Tìm số hạng đầu $u_1$ và công sai $d$ của cấp số cộng $(u_n)$ biết:**
   a) $u_7 = 27$ và $u_{15} = 59$.  
   b) $\begin{cases} u_3 + u_7 = 30 \\ u_4 + u_{10} = 42 \end{cases}$  
   c) $\begin{cases} S_5 = 25 \\ S_{10} = 100 \end{cases}$

2. **Tìm $x$ để 3 số sau lập thành một cấp số cộng:**
   a) $1 - x, \; x^2, \; 1 + 3x$  
   b) $\sin x, \; \sin 2x, \; \sin 3x$

3. **Tính tổng:**
   $$S = 100^2 - 99^2 + 98^2 - 97^2 + \dots + 2^2 - 1^2$$

---

### Thử thách Thực tế: Kim tự tháp Kheops và Các tầng đá khổng lồ
Đại kim tự tháp Giza (Kheops) tại Ai Cập có cấu trúc gồm các khối đá xếp chồng lên nhau thành các tầng từ dưới đất lên đến đỉnh nhọn.

Giả sử một mô hình kim tự tháp thu nhỏ gồm $50$ tầng đá xếp theo quy luật cấp số cộng:
- Tầng trên cùng (tầng 1) chỉ có $1$ khối đá vuông.
- Mỗi tầng thấp hơn đều có nhiều hơn tầng ngay phía trên nó đúng $4$ khối đá (tầng 2 có 5 khối, tầng 3 có 9 khối,...).

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Tầng đáy cùng (tầng thứ 50) có bao nhiêu khối đá?<br>
2. Cần tổng cộng bao nhiêu khối đá để hoàn thành toàn bộ kim tự tháp 50 tầng này?<br>
3. Nếu mỗi khối đá nặng trung bình 2.5 tấn, tổng khối lượng của kim tự tháp là bao nhiêu tấn?
</div>

> [!TIP]
> **Hướng dẫn:**
> 1. $u_1 = 1, d = 4$. Tầng thứ 50 có:
>    $$u_{50} = u_1 + 49d = 1 + 49 \times 4 = 1 + 196 = 197\text{ (khối đá)}$$
> 2. Tổng số khối đá:
>    $$S_{50} = \frac{50 \times (u_1 + u_{50})}{2} = 25 \times (1 + 197) = 25 \times 198 = 4950\text{ (khối đá)}$$
> 3. Tổng khối lượng:
>    $$M = 4950 \times 2.5 = 12\,375\text{ tấn}!$$
