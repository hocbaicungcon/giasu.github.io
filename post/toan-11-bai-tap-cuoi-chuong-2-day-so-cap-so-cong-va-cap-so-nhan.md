---
title: 'Toán 11: Bài tập cuối chương 2 - Dãy số. Cấp số cộng và Cấp số nhân'
description: 'Tổng ôn toàn diện Chương 2 Toán 11 Kết nối tri thức: Bản đồ tư duy hệ thống dãy số, bảng so sánh đối chiếu Cấp số cộng và Cấp số nhân, 6 dạng toán trọng tâm nâng cao, bài toán tài chính mua nhà trả góp và 12 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Dãy số 11
  - Cấp số cộng
  - Cấp số nhân
  - Ôn tập chương 2
  - Kết nối tri thức
grade: 11
---

# Bài tập cuối chương II. Dãy số. Cấp số cộng và Cấp số nhân

Chúc mừng các em đã hoàn thành toàn bộ nội dung của **Chương II: Dãy số. Cấp số cộng và cấp số nhân** trong chương trình Toán 11 (Bộ sách Kết nối tri thức với cuộc sống)!

Nếu như Chương I mang đến thế giới lượn sóng tuần hoàn của lượng giác, thì Chương II mở ra cánh cửa giải tích rời rạc với các mô hình tăng trưởng tuyến tính và hàm mũ. Bài tổng kết này sẽ giúp các em đối chiếu, khắc sâu sự tương đồng và khác biệt cốt lõi giữa hai cấp số, đồng thời làm chủ các bài toán kết hợp hay xuất hiện trong các kỳ thi học sinh giỏi và thi tốt nghiệp THPT.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG II: DÃY SỐ - CSC - CSN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đại cương về Dãy số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hàm số $u: \mathbb{N}^* \to \mathbb{R}$.<br>• Cách cho: Công thức tổng quát $u_n$, hệ thức truy hồi.<br>• Tính tăng: $u_{n+1} - u_n > 0$.<br>• Tính bị chặn: $m \le u_n \le M$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Cấp số cộng (Tuyến tính)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_{n+1} = u_n + d$ (công sai $d$).<br>• $u_n = u_1 + (n - 1)d$.<br>• Tính chất: $a + c = 2b$.<br>• Tổng: $S_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n-1)d]}{2}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Cấp số nhân (Hàm mũ)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $u_{n+1} = u_n \cdot q$ (công bội $q$).<br>• $u_n = u_1 \cdot q^{n - 1}$.<br>• Tính chất: $ac = b^2$.<br>• Tổng: $S_n = \frac{u_1(1 - q^n)}{1 - q}$. Lùi vô hạn: $S = \frac{u_1}{1 - q}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng Thực tế</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Lãi kép ngân hàng $A = P(1 + r)^n$.<br>• Mua nhà / mua xe trả góp (Niên kim).<br>• Tăng trưởng dân số, phân rã phóng xạ.<br>• Tháp Hà Nội, số hạt thóc trên bàn cờ vua.</p>
</div>
</div>
</div>

---

## I. Bảng So sánh Đối chiếu Toàn diện: Cấp số cộng & Cấp số nhân

| Tiêu chí | Cấp số cộng (AP) | Cấp số nhân (GP) |
| :--- | :---: | :---: |
| **Đặc trưng quy luật** | Phép **CỘNG** một hằng số $d$ | Phép **NHÂN** một hằng số $q$ |
| **Định nghĩa** | $u_{n+1} - u_n = d$ | $\frac{u_{n+1}}{u_n} = q \; (u_n \neq 0)$ |
| **Tên gọi thông số** | **Công sai** ($d$) | **Công bội** ($q$) |
| **Số hạng tổng quát ($u_n$)** | $u_n = u_1 + (n - 1)d$ | $u_n = u_1 \cdot q^{n - 1}$ |
| **Tính chất 3 số liên tiếp** | $u_{k-1} + u_{k+1} = 2u_k$ *(Trung bình cộng)* | $u_{k-1} \cdot u_{k+1} = u_k^2$ *(Trung bình nhân)* |
| **Ba số $a, b, c$ lập thành** | $a + c = 2b$ | $ac = b^2$ |
| **Tổng $n$ số hạng đầu ($S_n$)** | $S_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n - 1)d]}{2}$ | $S_n = \frac{u_1(1 - q^n)}{1 - q} \; (q \neq 1)$ |
| **Dạng tăng trưởng** | Tăng trưởng **tuyến tính** (bậc 1) | Tăng trưởng **hàm mũ** (bùng nổ) |
| **Hiện tượng mở rộng** | Không có tổng vô hạn | **Tổng lùi vô hạn** $S = \frac{u_1}{1 - q}$ ($|q| < 1$) |

---

## II. Phân loại và Phương pháp giải 6 Dạng toán trọng tâm

### Dạng 1: Xét tính tăng/giảm và bị chặn của dãy số

#### Bài toán 1:
Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \frac{3n - 1}{n + 2}$.  
a) Chứng minh rằng dãy số $(u_n)$ là một dãy số tăng.  
b) Chứng minh rằng dãy số $(u_n)$ bị chặn.

#### Lời giải chi tiết:
**a)** Ta có $u_{n+1} = \frac{3(n + 1) - 1}{(n + 1) + 2} = \frac{3n + 2}{n + 3}$.  
Xét hiệu số:
$$u_{n+1} - u_n = \frac{3n + 2}{n + 3} - \frac{3n - 1}{n + 2} = \frac{(3n + 2)(n + 2) - (3n - 1)(n + 3)}{(n + 3)(n + 2)}$$
Khai triển tử số:
$$(3n^2 + 8n + 4) - (3n^2 + 8n - 3) = 7$$
Do đó:
$$u_{n+1} - u_n = \frac{7}{(n + 3)(n + 2)} > 0, \quad \forall n \in \mathbb{N}^*$$
Vì hiệu số luôn dương nên $(u_n)$ là một **dãy số tăng**.

**b)** Tách phân thức:
$$u_n = \frac{3(n + 2) - 7}{n + 2} = 3 - \frac{7}{n + 2}$$
- Vì $n \ge 1 \Rightarrow n + 2 \ge 3 > 0 \Rightarrow \frac{7}{n + 2} > 0 \Rightarrow u_n = 3 - \frac{7}{n + 2} < 3$ với mọi $n \in \mathbb{N}^*$.  
  Dãy số bị chặn trên bởi $M = 3$.
- Mặt khác, vì $(u_n)$ là dãy số tăng nên số hạng đầu tiên $u_1$ là số hạng nhỏ nhất:
  $$u_n \ge u_1 = \frac{3(1) - 1}{1 + 2} = \frac{2}{3}$$
  Dãy số bị chặn dưới bởi $m = \frac{2}{3}$.  
Vậy $\frac{2}{3} \le u_n < 3$ với mọi $n \in \mathbb{N}^*$, suy ra dãy số $(u_n)$ **bị chặn**.

---

### Dạng 2: Cấp số cộng - Giải hệ điều kiện và Tính tổng

#### Bài toán 2:
Cho cấp số cộng $(u_n)$ thỏa mãn:
$$\begin{cases} u_1 + u_5 - u_3 = 10 \\ u_1 + u_6 = 17 \end{cases}$$
a) Tìm số hạng đầu $u_1$ và công sai $d$.  
b) Tính tổng của $30$ số hạng đầu tiên $S_{30}$.  
c) Biết tổng của $n$ số hạng đầu $S_n = 590$. Tìm $n$.

#### Lời giải chi tiết:
**a)** Biểu diễn các số hạng theo $u_1$ và $d$:
$$\begin{cases} u_1 + (u_1 + 4d) - (u_1 + 2d) = 10 \\ u_1 + (u_1 + 5d) = 17 \end{cases} \Leftrightarrow \begin{cases} u_1 + 2d = 10 \\ 2u_1 + 5d = 17 \end{cases}$$
Từ phương trình đầu: $u_1 = 10 - 2d$. Thay vào phương trình sau:
$$2(10 - 2d) + 5d = 17 \Leftrightarrow 20 - 4d + 5d = 17 \Rightarrow d = -3$$
Suy ra:
$$u_1 = 10 - 2(-3) = 16$$
Vậy cấp số cộng có số hạng đầu $u_1 = 16$ và công sai $d = -3$.

**b)** Tính tổng $S_{30}$:
$$S_{30} = \frac{30 \times [2(16) + (30 - 1) \times (-3)]}{2} = 15 \times [32 - 87] = 15 \times (-55) = -825$$

**c)** Theo công thức $S_n$:
$$S_n = \frac{n[2(16) + (n - 1)(-3)]}{2} = \frac{n(35 - 3n)}{2}$$
Theo giả thiết:
$$\frac{n(35 - 3n)}{2} = 590 \Leftrightarrow 35n - 3n^2 = 1180 \Leftrightarrow 3n^2 - 35n + 1180 = 0$$
Biệt thức $\Delta = (-35)^2 - 4(3)(1180) = 1225 - 14160 = -12935 < 0$.  
Phương trình vô nghiệm, do đó không tồn tại số nguyên dương $n$ để $S_n = 590$.  
*(Nếu đề cho $S_n = -825$ thì $n = 30$ như đã tính ở câu b)*.

---

### Dạng 3: Cấp số nhân - Tìm các yếu tố và Tổng lùi vô hạn

#### Bài toán 3:
a) Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $u_4 = 54$. Tìm công bội $q$ và tính tổng $S_7$.  
b) Tính tổng vô hạn:
$$S = 1 - \frac{1}{3} + \frac{1}{9} - \frac{1}{27} + \dots + \left(-\frac{1}{3}\right)^n + \dots$$

#### Lời giải chi tiết:
**a)** Ta có: $u_4 = u_1 \cdot q^3 \Leftrightarrow 54 = 2 \cdot q^3 \Leftrightarrow q^3 = 27 \Rightarrow q = 3$.  
Tổng 7 số hạng đầu tiên:
$$S_7 = \frac{u_1(q^7 - 1)}{q - 1} = \frac{2(3^7 - 1)}{3 - 1} = 3^7 - 1 = 2187 - 1 = 2186$$

**b)** Biểu thức $S$ là tổng của một cấp số nhân lùi vô hạn với:
- Số hạng đầu: $u_1 = 1$.
- Công bội: $q = -\frac{1}{3}$. Vì $|q| = \frac{1}{3} < 1$, cấp số nhân lùi vô hạn hội tụ.  
Áp dụng công thức tổng lùi vô hạn:
$$S = \frac{u_1}{1 - q} = \frac{1}{1 - \left(-\frac{1}{3}\right)} = \frac{1}{\frac{4}{3}} = \frac{3}{4}$$

---

### Dạng 4: Bài toán kết hợp Cấp số cộng và Cấp số nhân

> [!NOTE]
> Đây là dạng toán kinh điển phân loại học sinh trong đề thi:  
> Cho ba số lập thành CSC (hoặc CSN), sau khi thêm bớt các lượng nhất định thì chúng chuyển thành CSN (hoặc CSC).

#### Bài toán 4:
Tìm ba số thực $a, b, c$ biết rằng:
1. Ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng và có tổng bằng $21$.
2. Nếu lần lượt cộng thêm $2, 3, 9$ vào ba số đó thì ba số mới $(a + 2), (b + 3), (c + 9)$ theo thứ tự lập thành một cấp số nhân.

#### Lời giải chi tiết:
Vì ba số $a, b, c$ lập thành cấp số cộng với công sai $d$, ta có thể gọi:
$$a = b - d, \quad c = b + d$$
Tổng của ba số:
$$a + b + c = 21 \Leftrightarrow (b - d) + b + (b + d) = 21 \Leftrightarrow 3b = 21 \Rightarrow b = 7$$
Khi đó ba số ban đầu là: $a = 7 - d$, $b = 7$, $c = 7 + d$.

Ba số mới sau khi cộng thêm $2, 3, 9$:
$$\begin{aligned}
A &= a + 2 = (7 - d) + 2 = 9 - d \\
B &= b + 3 = 7 + 3 = 10 \\
C &= c + 9 = (7 + d) + 9 = 16 + d
\end{aligned}$$
Ba số $A, B, C$ lập thành cấp số nhân $\Leftrightarrow B^2 = A \cdot C$:
$$10^2 = (9 - d)(16 + d) \Leftrightarrow 100 = 144 + 9d - 16d - d^2 \Leftrightarrow 100 = 144 - 7d - d^2$$
Chuyển vế đưa về phương trình bậc hai:
$$d^2 + 7d - 44 = 0$$
Phân tích: $(d - 4)(d + 11) = 0 \Rightarrow \left[\begin{matrix} d = 4 \\ d = -11 \end{matrix}\right.$.

- Với $d = 4$:
  $$a = 7 - 4 = 3, \quad b = 7, \quad c = 7 + 4 = 11$$
  *(Kiểm tra 3 số mới: $5, 10, 20$ đúng là CSN với $q = 2$)*.
- Với $d = -11$:
  $$a = 7 - (-11) = 18, \quad b = 7, \quad c = 7 - 11 = -4$$
  *(Kiểm tra 3 số mới: $20, 10, 5$ đúng là CSN với $q = \frac{1}{2}$)*.

Vậy có hai bộ ba số thỏa mãn: **$(3; 7; 11)$** hoặc **$(18; 7; -4)$**.

---

### Dạng 5: Phương pháp sai phân tính tổng dãy số có quy luật

#### Bài toán 5:
Tính tổng $n$ số hạng đầu của dãy số:
$$S_n = \frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \dots + \frac{1}{n(n + 1)}$$

#### Lời giải chi tiết:
Sử dụng hằng đẳng thức phân tách phân số:
$$\frac{1}{k(k + 1)} = \frac{(k + 1) - k}{k(k + 1)} = \frac{1}{k} - \frac{1}{k + 1}$$
Áp dụng cho từng số hạng:
$$\begin{aligned}
u_1 &= 1 - \frac{1}{2} \\
u_2 &= \frac{1}{2} - \frac{1}{3} \\
u_3 &= \frac{1}{3} - \frac{1}{4} \\
&\dots \\
u_n &= \frac{1}{n} - \frac{1}{n + 1}
\end{aligned}$$
Cộng tất cả lại, các số hạng trung gian triệt tiêu đôi một:
$$S_n = 1 - \frac{1}{n + 1} = \frac{n}{n + 1}$$
*(Khi $n \to \infty$, tổng vô hạn này tiến dần về đúng số $1$)*.

---

### Dạng 6: Ứng dụng Thực tế: Bài toán Vay mua nhà trả góp (Niên kim Annuity)

#### Bài toán thực tế:
Anh Nam vay ngân hàng số tiền $V = 1\text{ tỷ đồng}$ để mua một căn hộ chung cư với lãi suất cố định $r = 0.8\%/\text{tháng}$. Ngân hàng thỏa thuận anh Nam sẽ trả nợ theo phương thức niên kim: cuối mỗi tháng anh Nam thanh toán một số tiền cố định là $m$ đồng (bao gồm cả gốc và lãi) liên tục trong thời hạn $5\text{ năm}$ ($60\text{ tháng}$).

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Thiết lập công thức số dư nợ $D_n$ sau $n$ tháng thanh toán theo $V, r, m$.<br>
2. Tính số tiền $m$ mà anh Nam phải trả đều đặn mỗi tháng để sau đúng 60 tháng thì trả hết sạch nợ ngân hàng ($D_{60} = 0$).<br>
3. Tổng số tiền lãi mà anh Nam đã phải trả cho ngân hàng trong suốt 5 năm là bao nhiêu?
</div>

#### Lời giải chi tiết:
1. Theo dõi số nợ còn lại sau từng tháng:
   - Hết tháng 1: Số tiền nợ sinh lãi thành $V(1 + r)$, sau khi trả $m$ đồng thì dư nợ còn lại:
     $$D_1 = V(1 + r) - m$$
   - Hết tháng 2: Số dư $D_1$ tiếp tục sinh lãi và trả thêm $m$:
     $$D_2 = D_1(1 + r) - m = [V(1 + r) - m](1 + r) - m = V(1 + r)^2 - m(1 + r) - m$$
   - Quy nạp sau $n$ tháng:
     $$D_n = V(1 + r)^n - m[(1 + r)^{n-1} + (1 + r)^{n-2} + \dots + 1]$$
   Biểu thức trong ngoặc vuông chính là tổng của một cấp số nhân có số hạng đầu là $1$, công bội là $q = 1 + r$:
   $$1 + (1 + r) + \dots + (1 + r)^{n-1} = \frac{(1 + r)^n - 1}{(1 + r) - 1} = \frac{(1 + r)^n - 1}{r}$$
   Do đó công thức dư nợ chuẩn xác là:
   $$D_n = V(1 + r)^n - m \cdot \frac{(1 + r)^n - 1}{r}$$

2. Để sau $N = 60\text{ tháng}$ hết nợ ($D_{60} = 0$):
   $$V(1 + r)^{60} = m \cdot \frac{(1 + r)^{60} - 1}{r} \Rightarrow m = \frac{V \cdot r \cdot (1 + r)^{60}}{(1 + r)^{60} - 1}$$
   Thay số: $V = 10^9\text{ đồng}$, $r = 0.008$, $N = 60$:
   $$(1 + 0.008)^{60} = (1.008)^{60} \approx 1.613503$$
   $$m = \frac{10^9 \times 0.008 \times 1.613503}{1.613503 - 1} = \frac{12\,908\,024}{0.613503} \approx 21\,039\,871\text{ (đồng/tháng)}$$
   Như vậy, mỗi tháng anh Nam cần trích khoảng **$21.04\text{ triệu đồng}$** để thanh toán.

3. Tổng số tiền anh Nam thực tế đã trả sau 60 tháng:
   $$T = 60 \times 21\,039\,871 \approx 1\,262\,392\,260\text{ đồng}$$
   Tổng tiền lãi trả cho ngân hàng:
   $$\text{Tiền lãi} = T - V = 1\,262\,392\,260 - 1\,000\,000\,000 = 262\,392\,260\text{ đồng (khoảng 262.4 triệu đồng)}.$$

---

## III. Đề Trắc nghiệm Tổng ôn Toàn bộ Chương II (12 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho dãy số (u_n) có u_n = (-1)^n * n. Ba số hạng đầu tiên của dãy số là:",
  "options": [
    "A. -1, 2, -3",
    "B. 1, -2, 3",
    "C. -1, -2, -3",
    "D. 1, 2, 3"
  ],
  "answer": "A. -1, 2, -3",
  "explanation": "u_1 = (-1)^1 * 1 = -1; u_2 = (-1)^2 * 2 = 2; u_3 = (-1)^3 * 3 = -3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Dãy số nào sau đây là cấp số cộng?",
  "options": [
    "A. 1, 3, 6, 10, ...",
    "B. 2, 5, 8, 11, ...",
    "C. 1, 2, 4, 8, ...",
    "D. 1, 4, 9, 16, ..."
  ],
  "answer": "B. 2, 5, 8, 11, ...",
  "explanation": "Dãy số 2, 5, 8, 11,... có hiệu số liên tiếp luôn bằng d = 3 nên là cấp số cộng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho cấp số cộng có u_1 = -2 và d = 4. Số hạng thứ 10 u_{10} bằng:",
  "options": [
    "A. 34",
    "B. 38",
    "C. 42",
    "D. 36"
  ],
  "answer": "A. 34",
  "explanation": "u_{10} = u_1 + 9d = -2 + 9 * 4 = -2 + 36 = 34."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Ba số x, 8, 14 theo thứ tự lập thành một cấp số cộng. Giá trị của x là:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 6",
    "D. 11"
  ],
  "answer": "A. 2",
  "explanation": "Theo tính chất trung bình cộng: x + 14 = 2 * 8 = 16 ⇔ x = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho cấp số cộng có u_1 = 3 và u_2 = 7. Tổng 15 số hạng đầu S_{15} bằng:",
  "options": [
    "A. 465",
    "B. 475",
    "C. 480",
    "D. 930"
  ],
  "answer": "A. 465",
  "explanation": "d = 7 - 3 = 4. S_{15} = 15 * [2*3 + 14*4] / 2 = 15 * [6 + 56] / 2 = 15 * 31 = 465."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho cấp số nhân (u_n) có u_1 = 5 và công bội q = -2. Số hạng thứ tư u_4 bằng:",
  "options": [
    "A. -40",
    "B. 40",
    "C. -80",
    "D. 80"
  ],
  "answer": "A. -40",
  "explanation": "u_4 = u_1 * q^3 = 5 * (-2)^3 = 5 * (-8) = -40."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho cấp số nhân có u_1 = 2 và u_4 = 54. Công bội q của cấp số nhân là:",
  "options": [
    "A. 2",
    "B. 3",
    "C. 4",
    "D. 27"
  ],
  "answer": "B. 3",
  "explanation": "u_4 = u_1 * q^3 ⇔ 54 = 2 * q^3 ⇔ q^3 = 27 ⇒ q = 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Ba số dương 4, x, 36 theo thứ tự lập thành cấp số nhân. Giá trị của x là:",
  "options": [
    "A. 12",
    "B. 16",
    "C. 20",
    "D. 144"
  ],
  "answer": "A. 12",
  "explanation": "x^2 = 4 * 36 = 144 ⇒ x = 12 (do x > 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tổng của cấp số nhân lùi vô hạn S = 6 + 2 + 2/3 + 2/9 + ... bằng:",
  "options": [
    "A. 8",
    "B. 9",
    "C. 12",
    "D. 18"
  ],
  "answer": "B. 9",
  "explanation": "u_1 = 6, q = 2/6 = 1/3. S = u_1 / (1 - q) = 6 / (1 - 1/3) = 6 / (2/3) = 9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho dãy số (u_n) có u_n = 2n / (n + 1). Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. (u_n) là dãy số giảm và bị chặn",
    "B. (u_n) là dãy số tăng và bị chặn",
    "C. (u_n) không bị chặn trên",
    "D. (u_n) là dãy số không tăng không giảm"
  ],
  "answer": "B. (u_n) là dãy số tăng và bị chặn",
  "explanation": "u_n = 2 - 2/(n + 1). Khi n tăng thì 2/(n + 1) giảm nên u_n tăng (dãy tăng). Ta có 1 ≤ u_n < 2 với mọi n nên dãy số bị chặn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Cho tam giác có ba góc lập thành một cấp số nhân với công bội q = 2. Góc nhỏ nhất của tam giác bằng:",
  "options": [
    "A. π/7",
    "B. π/6",
    "C. 2π/7",
    "D. π/3"
  ],
  "answer": "A. π/7",
  "explanation": "Gọi 3 góc là a, 2a, 4a. Tổng 3 góc = a + 2a + 4a = 7a = 180° = π rad ⇒ a = π/7."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Một người gửi 50 triệu đồng vào ngân hàng với lãi kép 7%/năm. Số tiền cả gốc lẫn lãi sau 3 năm nhận được là:",
  "options": [
    "A. 60.5 triệu",
    "B. 61.252 triệu",
    "C. 61.5 triệu",
    "D. 62 triệu"
  ],
  "answer": "B. 61.252 triệu",
  "explanation": "A_3 = 50 * (1 + 0.07)^3 = 50 * (1.07)^3 = 50 * 1.225043 = 61.25215 triệu đồng."
}'></div>

---

## IV. Lời kết và Hướng dẫn học tiếp

Xuất sắc! Các em đã hoàn thành toàn bộ **Chương II: Dãy số. Cấp số cộng và cấp số nhân**.

Kiến thức của chương này sẽ là nền móng trực tiếp cho:
- **Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm** (Thống kê 11).
- **Chương IX: Giới hạn. Hàm số liên tục** — Tìm giới hạn của dãy số $\lim u_n$ khi $n \to \infty$.
- Ứng dụng trong các bài toán tài chính, tăng trưởng dân số, phân rã hạt nhân trong môn Vật lý và Hóa học.
