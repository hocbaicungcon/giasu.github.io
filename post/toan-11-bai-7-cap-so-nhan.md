---
title: 'Toán 11 Bài 7: Cấp số nhân - Định nghĩa, số hạng tổng quát, tính chất và tổng n số hạng đầu'
description: 'Lý thuyết toàn diện Bài 7 Toán 11 Kết nối tri thức: Định nghĩa cấp số nhân, công bội q, số hạng tổng quát u_n = u_1 * q^(n-1), tính chất trung bình nhân, tổng n số hạng đầu S_n, tổng cấp số nhân lùi vô hạn và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Cấp số nhân
  - Công bội
  - Tổng cấp số nhân
  - Lãi kép
  - Kết nối tri thức
grade: 11
---

# Bài 7. Cấp số nhân

Chào mừng các em đến với mô hình tăng trưởng bùng nổ mạnh mẽ nhất trong đại số: **Cấp số nhân**!

Nếu như ở [Bài 6: Cấp số cộng](toan-11-bai-6-cap-so-cong.html), các đại lượng tăng lên theo từng bước cộng đều đặn tuyến tính, thì trong Cấp số nhân, sự thay đổi diễn ra theo cấp số mũ với tốc độ đáng kinh ngạc:
- Một tế bào vi khuẩn E. coli cứ sau 20 phút lại phân đôi thành 2 tế bào mới: từ $1 \to 2 \to 4 \to 8 \to 16 \to 32 \dots$
- Một thông tin lan truyền trên mạng xã hội: mỗi người chia sẻ cho 3 người bạn thân, chỉ sau vài lượt chia sẻ đã tiếp cận hàng triệu người.
- Bài toán lãi kép ngân hàng: tiền lãi của kỳ này được cộng dồn vào gốc để sinh lãi cho kỳ tiếp theo ("lãi mẹ đẻ lãi con").
- Truyền thuyết nhà thông thái Sissa và bàn cờ vua 64 ô của vị vua Ấn Độ.

Tất cả các dãy số có quy luật *"số sau bằng số trước nhân với một số không đổi"* được gọi là **Cấp số nhân**. Hãy cùng khám phá sức mạnh to lớn của quy luật này!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG CẤP SỐ NHÂN (CSN)</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa & Công bội</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_{n+1} = u_n \cdot q, \quad \forall n \in \mathbb{N}^*$.<br>• $q = \frac{u_{n+1}}{u_n}$ gọi là <strong>công bội</strong> ($u_n \neq 0$).<br>• $q > 1$: Tăng nhanh; $0 < q < 1$: Giảm dần; $q < 0$: Đan dấu.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Số hạng tổng quát $u_n$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_n = u_1 \cdot q^{n-1} \quad (n \ge 2)$.<br>• Cho phép tính trực tiếp bất kỳ số hạng nào bằng phép lũy thừa.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất Trung bình nhân</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_k^2 = u_{k-1} \cdot u_{k+1} \quad (k \ge 2)$.<br>• Hay $|u_k| = \sqrt{u_{k-1} \cdot u_{k+1}}$.<br>• Ba số $a, b, c$ lập thành CSN $\Leftrightarrow b^2 = ac$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tổng $n$ số hạng đầu $S_n$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $q = 1$: $S_n = n \cdot u_1$.<br>• Nếu $q \neq 1$: $S_n = \frac{u_1(1 - q^n)}{1 - q} = \frac{u_1(q^n - 1)}{q - 1}$.<br>• Khi $|q| < 1$: Tổng lùi vô hạn $S = \frac{u_1}{1 - q}$.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhận biết công bội:** Dãy số $2, 6, 18, 54, \dots$ có phải là cấp số nhân không? Công bội $q$ bằng bao nhiêu?
2. **Dãy đan dấu:** Cho cấp số nhân có $u_1 = 5, q = -2$. Số hạng $u_2$ và $u_3$ bằng bao nhiêu?
3. **Trung bình nhân:** Ba số dương $3, x, 27$ theo thứ tự lập thành cấp số nhân. Tìm $x$.
4. **Lũy thừa:** Nếu $u_1 = 1$ và $q = 2$, thì số hạng thứ mười $u_{10}$ bằng bao nhiêu?
5. **Tổng 3 số đầu:** Tổng của $1 + 2 + 4$ bằng bao nhiêu và tính nhanh bằng công thức như thế nào?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Là cấp số nhân với công bội $q = \frac{6}{2} = 3$.
> 2. $u_2 = 5 \times (-2) = -10$; $u_3 = -10 \times (-2) = 20$.
> 3. $x^2 = 3 \times 27 = 81 \Rightarrow x = 9$ (do các số dương).
> 4. $u_{10} = 1 \times 2^{10-1} = 2^9 = 512$.
> 5. $1 + 2 + 4 = 7$. Tính bằng công thức: $S_3 = \frac{1(2^3 - 1)}{2 - 1} = \frac{8 - 1}{1} = 7$.

---

## I. Định nghĩa Cấp số nhân

### 1. Định nghĩa

**Cấp số nhân** là một dãy số (hữu hạn hoặc vô hạn), trong đó kể từ số hạng thứ hai trở đi, mỗi số hạng đều bằng số hạng đứng liền trước nó nhân với một số không đổi $q$.
$$u_{n+1} = u_n \cdot q \quad \text{với mọi } n \in \mathbb{N}^*$$

- Số không đổi $q$ được gọi là **công bội** của cấp số nhân.
- Khi $u_n \neq 0$:
  $$q = \frac{u_{n+1}}{u_n}$$

### 2. Các trường hợp đặc biệt của công bội $q$

- Khi $q = 1$: Cấp số nhân có dạng $u_1, u_1, u_1, \dots$ (dãy số hằng).
- Khi $q = 0$: Dãy số có dạng $u_1, 0, 0, 0, \dots$
- Khi $u_1 > 0$ và $q > 1$: Dãy số tăng với tốc độ hàm mũ.
- Khi $u_1 > 0$ và $0 < q < 1$: Dãy số giảm dần về $0$.
- Khi $q < 0$: Cấp số nhân là một **dãy số đan dấu** (các số hạng luân phiên mang dấu dương và âm).

---

## II. Số hạng tổng quát của Cấp số nhân

> [!IMPORTANT]
> **Định lý 1:**  
> Nếu cấp số nhân $(u_n)$ có số hạng đầu là $u_1$ và công bội là $q$, thì số hạng tổng quát $u_n$ (với $n \ge 2$) được tính theo công thức:
> $$u_n = u_1 \cdot q^{n - 1}$$

*Chứng minh bằng quy nạp trực quan:*
$$\begin{aligned}
u_2 &= u_1 \cdot q \\
u_3 &= u_2 \cdot q = u_1 \cdot q^2 \\
u_4 &= u_3 \cdot q = u_1 \cdot q^3 \\
&\dots \\
u_n &= u_1 \cdot q^{n - 1}
\end{aligned}$$

---

## III. Tính chất các số hạng của Cấp số nhân

> [!IMPORTANT]
> **Định lý 2:**  
> Trong một cấp số nhân, bình phương của mỗi số hạng (trừ số hạng đầu và số hạng cuối đối với cấp số nhân hữu hạn) bằng tích của hai số hạng đứng kề nó:
> $$u_k^2 = u_{k-1} \cdot u_{k+1} \quad (k \ge 2)$$
> hay:
> $$|u_k| = \sqrt{u_{k-1} \cdot u_{k+1}}$$

**Hệ quả:**  
Ba số khác 0 là $a, b, c$ theo thứ tự lập thành một cấp số nhân khi và chỉ khi:
$$b^2 = a \cdot c$$

---

## IV. Tổng $n$ số hạng đầu tiên của Cấp số nhân

> [!IMPORTANT]
> **Định lý 3:**  
> Cho cấp số nhân $(u_n)$ với công bội $q$. Đặt $S_n = u_1 + u_2 + \dots + u_n$.
> - Nếu $q = 1$:
>   $$S_n = n \cdot u_1$$
> - Nếu $q \neq 1$:
>   $$S_n = \frac{u_1(1 - q^n)}{1 - q} = \frac{u_1(q^n - 1)}{q - 1}$$

*Chứng minh đẳng thức:*
$$\begin{aligned}
S_n &= u_1 + u_1 q + u_1 q^2 + \dots + u_1 q^{n-1} \\
q \cdot S_n &= u_1 q + u_1 q^2 + \dots + u_1 q^{n-1} + u_1 q^n
\end{aligned}$$
Lấy dòng trên trừ dòng dưới:
$$S_n - q \cdot S_n = u_1 - u_1 q^n \Leftrightarrow S_n(1 - q) = u_1(1 - q^n) \Rightarrow S_n = \frac{u_1(1 - q^n)}{1 - q}$$

> [!NOTE]
> **Mở rộng: Tổng của Cấp số nhân lùi vô hạn**  
> Cấp số nhân vô hạn có công bội thỏa mãn $|q| < 1$ được gọi là **cấp số nhân lùi vô hạn**.  
> Khi $n \to \infty$, lũy thừa $q^n \to 0$. Khi đó tổng vô hạn của tất cả các số hạng là:
> $$S = u_1 + u_2 + u_3 + \dots = \frac{u_1}{1 - q}$$
> *Ứng dụng:* Đổi số thập phân vô hạn tuần hoàn sang phân số tối giản.  
> Ví dụ: $0.333\dots = \frac{3}{10} + \frac{3}{100} + \dots = \frac{3/10}{1 - 1/10} = \frac{3/10}{9/10} = \frac{1}{3}$.

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết Cấp số nhân, tìm số hạng đầu và công bội

> [!NOTE]
> **Phương pháp:**
> - Để kiểm tra $(u_n)$ có là cấp số nhân hay không: lập tỉ số $\frac{u_{n+1}}{u_n}$. Nếu tỉ số này là một hằng số $q$ không phụ thuộc vào $n$, thì $(u_n)$ là cấp số nhân với công bội $q$.
> - Dạng số hạng tổng quát hàm mũ: $u_n = c \cdot a^n$ luôn là cấp số nhân với $u_1 = c \cdot a$ và công bội $q = a$.

#### Ví dụ 1:
a) Chứng minh dãy số $u_n = 3 \cdot 2^{n+1}$ là một cấp số nhân. Xác định $u_1$ và $q$.  
b) Dãy số $v_n = 2^n + 1$ có phải là cấp số nhân không?

#### Lời giải chi tiết:
**a)** Ta có $u_{n+1} = 3 \cdot 2^{(n+1)+1} = 3 \cdot 2^{n+2}$.  
Xét tỉ số:
$$\frac{u_{n+1}}{u_n} = \frac{3 \cdot 2^{n+2}}{3 \cdot 2^{n+1}} = 2$$
Vì tỉ số $\frac{u_{n+1}}{u_n} = 2$ là hằng số với mọi $n \in \mathbb{N}^*$, nên $(u_n)$ là một cấp số nhân với:
- Số hạng đầu: $u_1 = 3 \cdot 2^{1+1} = 3 \cdot 4 = 12$.
- Công bội: $q = 2$.

**b)** Tính 3 số hạng đầu tiên của $(v_n)$:
- $v_1 = 2^1 + 1 = 3$
- $v_2 = 2^2 + 1 = 5 \Rightarrow \frac{v_2}{v_1} = \frac{5}{3}$
- $v_3 = 2^3 + 1 = 9 \Rightarrow \frac{v_3}{v_2} = \frac{9}{5}$  
Vì $\frac{v_3}{v_2} \neq \frac{v_2}{v_1}$ ($\frac{9}{5} \neq \frac{5}{3}$) nên dãy số $(v_n)$ **không phải là cấp số nhân**.

---

### Dạng 2: Giải hệ phương trình tìm $u_1$ và $q$

> [!NOTE]
> **Phương pháp:**
> Biểu diễn toàn bộ các số hạng trong hệ theo $u_1$ và $q$ ($u_k = u_1 q^{k-1}$).  
> Đặt nhân tử chung đưa về dạng tích rồi chia vế theo vế để triệt tiêu $u_1$, tìm ra $q$, sau đó thế ngược lại tìm $u_1$.

#### Ví dụ 2:
Tìm số hạng đầu $u_1$ và công bội $q$ của cấp số nhân $(u_n)$ biết:
$$\begin{cases} u_4 - u_2 = 72 \\ u_5 - u_3 = 144 \end{cases}$$

#### Lời giải chi tiết:
Biểu diễn theo $u_1$ và $q$:
$$\begin{cases} u_1 q^3 - u_1 q = 72 \\ u_1 q^4 - u_1 q^2 = 144 \end{cases} \Leftrightarrow \begin{cases} u_1 q(q^2 - 1) = 72 \quad (1) \\ u_1 q^2(q^2 - 1) = 144 \quad (2) \end{cases}$$
Chia phương trình $(2)$ cho phương trình $(1)$ vế theo vế:
$$\frac{u_1 q^2(q^2 - 1)}{u_1 q(q^2 - 1)} = \frac{144}{72} \Rightarrow q = 2$$
Thay $q = 2$ vào phương trình $(1)$:
$$u_1 \cdot 2 \cdot (2^2 - 1) = 72 \Leftrightarrow u_1 \cdot 2 \cdot 3 = 72 \Leftrightarrow 6u_1 = 72 \Rightarrow u_1 = 12$$
Vậy cấp số nhân có $u_1 = 12$ và $q = 2$.

---

### Dạng 3: Tính tổng $n$ số hạng đầu $S_n$

#### Ví dụ 3:
Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $q = -2$.
a) Tính tổng 8 số hạng đầu tiên $S_8$.  
b) Biết tổng $S_n = -2049$. Tìm $n$.

#### Lời giải chi tiết:
**a)** Áp dụng công thức $S_n = \frac{u_1(1 - q^n)}{1 - q}$:
$$S_8 = \frac{3 \times [1 - (-2)^8]}{1 - (-2)} = \frac{3 \times (1 - 256)}{3} = 1 - 256 = -255$$

**b)** Theo công thức:
$$S_n = \frac{3 \times [1 - (-2)^n]}{1 - (-2)} = 1 - (-2)^n$$
Theo bài ra:
$$1 - (-2)^n = -2049 \Leftrightarrow (-2)^n = 2050$$
Nhận xét: Lũy thừa của $2$ gồm $2^{10} = 1024, 2^{11} = 2048 \neq 2050$. Do đó không tồn tại số nguyên dương $n$ thỏa mãn.  
*(Nếu giả thiết $S_n = -2047 \Rightarrow 1 - (-2)^n = -2047 \Leftrightarrow (-2)^n = 2048 = (-2)^{11} \Rightarrow n = 11$)*.

---

### Dạng 4: Ứng dụng thực tế của Cấp số nhân

#### Bài toán thực tế 1: Bài toán Lãi kép ngân hàng
Một gia đình gửi tiết kiệm số tiền gốc $A_0 = 100\text{ triệu đồng}$ vào ngân hàng với lãi suất $r = 6\%/\text{năm}$ theo hình thức lãi kép (tiền lãi sau mỗi năm được nhập vào vốn gốc để tính lãi cho năm tiếp theo).

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Thiết lập công thức tính tổng số tiền $A_n$ gia đình nhận được sau $n$ năm gửi.<br>
2. Sau 5 năm, số tiền cả gốc lẫn lãi gia đình thu về là bao nhiêu?<br>
3. Sau tối thiểu bao nhiêu năm thì số tiền tích lũy tăng gấp đôi số vốn ban đầu (đạt trên 200 triệu đồng)?
</div>

#### Lời giải chi tiết:
1. Cuối năm thứ 1: $A_1 = A_0 + A_0 \cdot r = A_0(1 + r)$.  
   Cuối năm thứ 2: $A_2 = A_1(1 + r) = A_0(1 + r)^2$.  
   Dãy số $(A_n)$ là một cấp số nhân với số hạng đầu là số tiền sau năm 1 ($A_1$) và công bội $q = 1 + r$.  
   Công thức số tiền sau $n$ năm:
   $$A_n = A_0(1 + r)^n = 100 \times (1 + 0.06)^n = 100 \times (1.06)^n \quad (\text{triệu đồng})$$

2. Sau $n = 5$ năm:
   $$A_5 = 100 \times (1.06)^5 \approx 100 \times 1.338226 = 133.82\text{ (triệu đồng)}$$

3. Để số tiền tăng gấp đôi ($A_n \ge 200$):
   $$100 \times (1.06)^n \ge 200 \Leftrightarrow (1.06)^n \ge 2$$
   Lấy logarit cơ số tự nhiên hai vế:
   $$n \ge \frac{\ln 2}{\ln 1.06} \approx \frac{0.69315}{0.05827} \approx 11.9\text{ (năm)}$$
   Vì $n \in \mathbb{N}^*$ nên $n = 12$ năm. Sau đúng **$12$ năm**, số tiền gửi sẽ tăng gấp đôi!

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho cấp số nhân (u_n) có u_1 = 3 và công bội q = 2. Số hạng thứ hai u_2 bằng:",
  "options": [
    "A. 5",
    "B. 6",
    "C. 9",
    "D. 12"
  ],
  "answer": "B. 6",
  "explanation": "u_2 = u_1 * q = 3 * 2 = 6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Công bội q của cấp số nhân 3, -6, 12, -24, ... là:",
  "options": [
    "A. 2",
    "B. -2",
    "C. -3",
    "D. -9"
  ],
  "answer": "B. -2",
  "explanation": "q = u_2 / u_1 = -6 / 3 = -2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho cấp số nhân (u_n) có u_1 = 2, q = 3. Số hạng thứ năm u_5 bằng:",
  "options": [
    "A. 162",
    "B. 486",
    "C. 54",
    "D. 30"
  ],
  "answer": "A. 162",
  "explanation": "u_5 = u_1 * q^4 = 2 * 3^4 = 2 * 81 = 162."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Ba số dương x, 6, 18 theo thứ tự lập thành cấp số nhân. Giá trị của x là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  "answer": "B. 2",
  "explanation": "Áp dụng tính chất trung bình nhân: 6^2 = x * 18 ⇔ 36 = 18x ⇒ x = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho cấp số nhân (u_n) có u_1 = 1, q = 2. Tổng 6 số hạng đầu tiên S_6 bằng:",
  "options": [
    "A. 31",
    "B. 63",
    "C. 64",
    "D. 127"
  ],
  "answer": "B. 63",
  "explanation": "S_6 = u_1 * (q^6 - 1) / (q - 1) = 1 * (2^6 - 1) / (2 - 1) = 64 - 1 = 63."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Dãy số nào sau đây KHÔNG PHẢI là cấp số nhân?",
  "options": [
    "A. 1, -1, 1, -1, ...",
    "B. 2, 4, 8, 16, ...",
    "C. 1, 2, 3, 4, ...",
    "D. 5, 5, 5, 5, ..."
  ],
  "answer": "C. 1, 2, 3, 4, ...",
  "explanation": "Dãy 1, 2, 3, 4,... là cấp số cộng với công sai d = 1, tỉ số giữa các số hạng không cố định (2/1 ≠ 3/2) nên không phải CSN."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tổng của cấp số nhân lùi vô hạn 1 + 1/2 + 1/4 + 1/8 + ... bằng:",
  "options": [
    "A. 1",
    "B. 3/2",
    "C. 2",
    "D. Vô cực"
  ],
  "answer": "C. 2",
  "explanation": "Cấp số nhân lùi vô hạn có u_1 = 1 và q = 1/2 (|q| < 1). Tổng S = u_1 / (1 - q) = 1 / (1 - 1/2) = 1 / (1/2) = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho cấp số nhân (u_n) thỏa mãn u_1 = 3 và u_4 = 24. Công bội q bằng:",
  "options": [
    "A. 2",
    "B. -2",
    "C. 8",
    "D. 4"
  ],
  "answer": "A. 2",
  "explanation": "u_4 = u_1 * q^3 ⇔ 24 = 3 * q^3 ⇔ q^3 = 8 ⇒ q = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho cấp số nhân có u_2 = 4 và u_4 = 16. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. q = 2",
    "B. q = -2",
    "C. q = 2 hoặc q = -2",
    "D. q = 4"
  ],
  "answer": "C. q = 2 hoặc q = -2",
  "explanation": "Ta có u_4 / u_2 = q^2 = 16 / 4 = 4 ⇒ q = ±2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Số 192 là số hạng thứ mấy của cấp số nhân có u_1 = 3 và q = 2?",
  "options": [
    "A. n = 6",
    "B. n = 7",
    "C. n = 8",
    "D. n = 9"
  ],
  "answer": "B. n = 7",
  "explanation": "u_n = 3 * 2^(n-1) = 192 ⇔ 2^(n-1) = 64 = 2^6 ⇒ n - 1 = 6 ⇒ n = 7."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Tìm $u_1$ và $q$ của cấp số nhân $(u_n)$ biết:**
   a) $\begin{cases} u_3 = 12 \\ u_6 = 96 \end{cases}$  
   b) $\begin{cases} u_1 + u_2 + u_3 = 13 \\ u_4 + u_5 + u_6 = 351 \end{cases}$  
   c) $\begin{cases} u_1 - u_3 + u_5 = 65 \\ u_1 + u_7 = 325 \end{cases}$

2. **Tìm $x$ để 3 số sau lập thành cấp số nhân:**
   a) $x - 1, \; x + 2, \; x + 8$  
   b) $2, \; x, \; 8$

3. **Tính tổng:**
   $$S = 1 + \frac{1}{3} + \frac{1}{9} + \dots + \frac{1}{3^n}$$

---

### Thử thách Thực tế: Gấp đôi tờ giấy 42 lần chạm tới Mặt Trăng!

Lấy một tờ giấy A4 thông thường có độ dày chuẩn khoảng $0.1\text{ mm} = 10^{-4}\text{ m}$. Giả sử có một cỗ máy thần kỳ có thể gấp đôi tờ giấy này liên tục nhiều lần.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ:</strong><br>
1. Thiết lập công thức dãy số $d_n$ tính độ dày của tập giấy sau $n$ lần gấp đôi.<br>
2. Sau 14 lần gấp, độ dày của tập giấy tương đương chiều cao của vật gì?<br>
3. Biết khoảng cách trung bình từ Trái Đất đến Mặt Trăng là khoảng $384\,400\text{ km}$. Hỏi cần gấp đôi tờ giấy tối thiểu bao nhiêu lần để độ dày của nó vươn tới tận Mặt Trăng?
</div>

> [!TIP]
> **Hướng dẫn giải:**
> 1. Mỗi lần gấp, độ dày tăng gấp đôi. Dãy số $(d_n)$ là cấp số nhân với $d_0 = 0.1\text{ mm}$ và công bội $q = 2$:
>    $$d_n = 0.1 \times 2^n\text{ (mm)}$$
> 2. Sau 14 lần gấp:
>    $$d_{14} = 0.1 \times 2^{14} = 0.1 \times 16\,384 = 1638.4\text{ mm} \approx 1.64\text{ m}$$
>    (Bằng chiều cao của một người trưởng thành!).
> 3. Khoảng cách đến Mặt Trăng: $384\,400\text{ km} = 384\,400 \times 10^6\text{ mm} = 3.844 \times 10^{11}\text{ mm}$.  
>    Ta cần:
>    $$0.1 \times 2^n \ge 3.844 \times 10^{11} \Leftrightarrow 2^n \ge 3.844 \times 10^{12}$$
>    Lấy logarit:
>    $$n \ge \frac{\ln(3.844 \times 10^{12})}{\ln 2} \approx \frac{28.979}{0.693} \approx 41.8$$
>    Vì $n$ nguyên nên $n = 42$ lần!  
>    Chỉ cần **42 lần gấp đôi**, một tờ giấy mỏng manh $0.1\text{ mm}$ sẽ dày hơn $439\,804\text{ km}$ — vượt xa khoảng cách từ Trái Đất lên đến tận Mặt Trăng! Đó chính là sức mạnh kỳ vĩ của Cấp số nhân!
