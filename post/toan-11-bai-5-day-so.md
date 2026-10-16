---
title: 'Toán 11 Bài 5: Dãy số - Khái niệm, cách xác định, tính tăng giảm và bị chặn'
description: 'Lý thuyết trọng tâm Bài 5 Toán 11 Kết nối tri thức: Định nghĩa dãy số vô hạn và hữu hạn, các cách cho dãy số (công thức tổng quát, hệ thức truy hồi, dãy Fibonacci), phương pháp xét tính đơn điệu (tăng, giảm) và tính bị chặn kèm 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Dãy số 11
  - Dãy số tăng giảm
  - Dãy số bị chặn
  - Dãy Fibonacci
  - Kết nối tri thức
grade: 11
---

# Bài 5. Dãy số

Chào mừng các em bước vào **Chương II: Dãy số. Cấp số cộng và cấp số nhân**!

Trong cuộc sống và tự nhiên, các sự vật và hiện tượng thường không đứng yên riêng lẻ mà sắp xếp nối tiếp nhau theo những quy luật thứ tự kỳ diệu:
- Dãy số đo chiều cao của một mầm cây sau mỗi ngày chăm sóc.
- Sự sinh sôi nảy nở của bầy thỏ qua từng thế hệ (dãy số Fibonacci trứ danh).
- Số tiền cả gốc lẫn lãi tích lũy theo từng tháng khi gửi tiết kiệm ngân hàng.
- Số hạt thóc gấp đôi trên 64 ô của bàn cờ vua trong truyền thuyết Ba Tư cổ đại.

Mô hình toán học phản ánh những chuỗi giá trị có thứ tự đó chính là **Dãy số**. Đây là bước khởi đầu thiết yếu để các em tiến vào giải tích hiện đại, lý thuyết giới hạn, đạo hàm và chuỗi số vô hạn!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG KIẾN THỨC VỀ DÃY SỐ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Dãy số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là hàm số $u: \mathbb{N}^* \to \mathbb{R}$.<br>• Ký hiệu: $(u_n)$ hay $u_1, u_2, \dots, u_n, \dots$<br>• $u_1$ là số hạng đầu, $u_n$ là số hạng tổng quát thứ $n$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Cách cho một Dãy số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Công thức số hạng tổng quát:</strong> $u_n = f(n)$.<br>• <strong>Hệ thức truy hồi:</strong> Cho $u_1$ và công thức liên hệ giữa $u_n$ với $u_{n-1}$.<br>• <strong>Mô tả bằng lời</strong> hoặc diễn giải quy luật.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dãy số Tăng - Giảm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tăng:</strong> $u_{n+1} > u_n, \forall n \in \mathbb{N}^*$.<br>• <strong>Giảm:</strong> $u_{n+1} < u_n, \forall n \in \mathbb{N}^*$.<br>• Phương pháp: Xét hiệu $u_{n+1} - u_n$ hoặc xét thương $\frac{u_{n+1}}{u_n}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Dãy số Bị chặn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bị chặn trên:</strong> $u_n \le M, \forall n$.<br>• <strong>Bị chặn dưới:</strong> $u_n \ge m, \forall n$.<br>• <strong>Bị chặn:</strong> Vừa bị chặn trên vừa bị chặn dưới ($m \le u_n \le M$).</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tìm số hạng tiếp theo:** Cho dãy số $1, 4, 9, 16, 25, \dots$ Số hạng thứ 6 là bao nhiêu?
2. **Ký hiệu chỉ số:** Trong dãy số $(u_n)$, $u_{10}$ biểu thị đại lượng gì?
3. **Tính số hạng đầu:** Cho dãy số có $u_n = \frac{n}{n + 1}$. Giá trị của $u_1$ và $u_2$ bằng bao nhiêu?
4. **Phân biệt tính tăng giảm:** Dãy số các số tự nhiên chẵn $2, 4, 6, 8, \dots$ là dãy số tăng hay giảm?
5. **Dãy hữu hạn:** Một tuần có 7 ngày, dãy số ghi nhiệt độ đo vào buổi trưa mỗi ngày từ Thứ Hai đến Chủ Nhật là dãy số hữu hạn hay vô hạn?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Số hạng tiếp theo là $36$ (quy luật $u_n = n^2 \Rightarrow u_6 = 6^2 = 36$).
> 2. $u_{10}$ là số hạng đứng ở vị trí thứ $10$ của dãy số.
> 3. $u_1 = \frac{1}{1 + 1} = \frac{1}{2}$ và $u_2 = \frac{2}{2 + 1} = \frac{2}{3}$.
> 4. Là dãy số tăng vì mỗi số hạng sau đều lớn hơn số hạng liền trước nó ($u_{n+1} > u_n$).
> 5. Là dãy số hữu hạn vì chỉ gồm đúng 7 số hạng ($m = 7$).

---

## I. Khái niệm về Dãy số

### 1. Dãy số vô hạn

Mỗi hàm số $u$ xác định trên tập hợp các số nguyên dương $\mathbb{N}^* = \{1, 2, 3, \dots, n, \dots\}$ được gọi là một **dãy số vô hạn** (gọi tắt là **dãy số**).
$$\begin{aligned}
u: \mathbb{N}^* &\to \mathbb{R} \\
n &\mapsto u_n = u(n)
\end{aligned}$$

- Ký hiệu dãy số là $(u_n)$.
- $u_1 = u(1)$ gọi là **số hạng đầu**.
- $u_n = u(n)$ gọi là **số hạng thứ $n$** (hoặc **số hạng tổng quát**).
- Ta thường viết dãy số dưới dạng khai triển theo thứ tự:
  $$u_1, u_2, u_3, \dots, u_n, \dots$$

### 2. Dãy số hữu hạn

Mỗi hàm số $u$ xác định trên tập hợp $M = \{1, 2, 3, \dots, m\}$ với $m \in \mathbb{N}^*$ được gọi là một **dãy số hữu hạn**.
- Dãy số hữu hạn được viết dưới dạng:
  $$u_1, u_2, u_3, \dots, u_m$$
- $u_1$ là số hạng đầu, $u_m$ là số hạng cuối, và $m$ là số lượng phần tử của dãy.

---

## II. Các cách xác định một Dãy số

Một dãy số có thể được cho bằng các phương pháp sau:

### 1. Cho bằng công thức số hạng tổng quát $u_n = f(n)$

Đây là cách thuận tiện nhất giúp ta tính ngay lập tức bất kỳ số hạng $u_n$ nào mà không cần biết các số hạng đứng trước nó.

*Ví dụ:* 
- Dãy số $u_n = 2n - 1$ cho ta các số tự nhiên lẻ: $1, 3, 5, 7, 9, \dots$
- Dãy số $u_n = (-1)^n \cdot \frac{1}{n}$ cho ta dãy đan dấu: $-1, \frac{1}{2}, -\frac{1}{3}, \frac{1}{4}, \dots$

### 2. Cho bằng hệ thức truy hồi (Phương pháp quy nạp)

Một dãy số được xác định bằng phương pháp truy hồi khi:
1. Cho biết **số hạng đầu** $u_1$ (hoặc vài số hạng đầu tiên như $u_1, u_2$).
2. Cho hệ thức tính $u_n$ thông qua các số hạng đứng trước nó như $u_{n-1}, u_{n-2}$.

> [!NOTE]
> **Ví dụ kinh điển: Dãy số Fibonacci $(F_n)$**  
> Dãy số được nhà toán học Leonardo Fibonacci (người Ý) phát hiện vào thế kỷ XIII khi nghiên cứu bài toán sinh sản của bầy thỏ:
> $$\begin{cases} F_1 = 1, \; F_2 = 1 \\ F_n = F_{n-1} + F_{n-2} \quad (n \ge 3) \end{cases}$$
> Khai triển dãy Fibonacci:
> $$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \dots$$
> Quy luật: Kể từ số hạng thứ 3 trở đi, mỗi số hạng bằng tổng của hai số hạng đứng liền trước nó!

### 3. Cho bằng phương pháp mô tả hoặc diễn giải quy luật

Cho dãy số bằng một mô tả cụ thể về tính chất của các phần tử.  
*Ví dụ:* Dãy số $(p_n)$ gồm các số nguyên tố theo thứ tự tăng dần: $2, 3, 5, 7, 11, 13, 17, \dots$

---

## III. Dãy số Tăng, Dãy số Giảm (Tính đơn điệu)

### 1. Định nghĩa

- Dãy số $(u_n)$ được gọi là **dãy số tăng** nếu với mọi $n \in \mathbb{N}^*$, ta có:
  $$u_{n+1} > u_n$$
  *(Nghĩa là số hạng sau luôn nghiêm ngặt lớn hơn số hạng đứng liền trước nó)*.
- Dãy số $(u_n)$ được gọi là **dãy số giảm** nếu với mọi $n \in \mathbb{N}^*$, ta có:
  $$u_{n+1} < u_n$$
  *(Nghĩa là số hạng sau luôn nghiêm ngặt nhỏ hơn số hạng đứng liền trước nó)*.

> [!WARNING]
> Có những dãy số **không tăng cũng không giảm**, chẳng hạn như các dãy đan dấu:
> $$u_n = (-1)^n \Rightarrow -1, 1, -1, 1, -1, \dots$$
> hoặc dãy số hằng: $3, 3, 3, 3, \dots$

### 2. Phương pháp xét tính tăng, giảm của dãy số

Có hai phương pháp cơ bản:

#### Cách 1: Xét dấu của hiệu số $H = u_{n+1} - u_n$
- Nếu $u_{n+1} - u_n > 0$ với mọi $n \in \mathbb{N}^* \Rightarrow (u_n)$ là **dãy số tăng**.
- Nếu $u_{n+1} - u_n < 0$ với mọi $n \in \mathbb{N}^* \Rightarrow (u_n)$ là **dãy số giảm**.

#### Cách 2: So sánh thương số $K = \frac{u_{n+1}}{u_n}$ với số $1$ (Chỉ áp dụng khi $u_n > 0, \forall n$)
- Nếu $\frac{u_{n+1}}{u_n} > 1$ với mọi $n \in \mathbb{N}^* \Rightarrow (u_n)$ là **dãy số tăng**.
- Nếu $\frac{u_{n+1}}{u_n} < 1$ với mọi $n \in \mathbb{N}^* \Rightarrow (u_n)$ là **dãy số giảm**.

---

## IV. Dãy số Bị chặn

### 1. Định nghĩa

- Dãy số $(u_n)$ được gọi là **bị chặn trên** nếu tồn tại một số thực $M$ sao cho:
  $$u_n \le M, \quad \forall n \in \mathbb{N}^*$$
- Dãy số $(u_n)$ được gọi là **bị chặn dưới** nếu tồn tại một số thực $m$ sao cho:
  $$u_n \ge m, \quad \forall n \in \mathbb{N}^*$$
- Dãy số $(u_n)$ được gọi là **bị chặn** nếu nó vừa bị chặn trên vừa bị chặn dưới, tức là tồn tại hai số $m, M$ sao cho:
  $$m \le u_n \le M, \quad \forall n \in \mathbb{N}^*$$

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Viết các số hạng đầu và dự đoán công thức số hạng tổng quát

> [!NOTE]
> **Phương pháp:**
> 1. Cho công thức truy hồi: Tính liên tiếp $u_2, u_3, u_4, u_5$.
> 2. Quan sát quy luật phân số, lũy thừa, giai thừa để dự đoán công thức $u_n$.
> 3. Dùng phương pháp quy nạp toán học để chứng minh công thức dự đoán là đúng.

#### Ví dụ 1:
Cho dãy số $(u_n)$ xác định bởi:
$$\begin{cases} u_1 = 2 \\ u_{n+1} = u_n + 3 \quad (n \ge 1) \end{cases}$$
a) Viết 4 số hạng đầu tiên của dãy số.  
b) Dự đoán công thức số hạng tổng quát $u_n$ và chứng minh bằng phương pháp quy nạp.

#### Lời giải chi tiết:
**a)** Tính 4 số hạng đầu tiên:
- $u_1 = 2$.
- $u_2 = u_1 + 3 = 2 + 3 = 5$.
- $u_3 = u_2 + 3 = 5 + 3 = 8$.
- $u_4 = u_3 + 3 = 8 + 3 = 11$.

**b)** Quan sát các số hạng:
$$\begin{aligned}
u_1 &= 2 = 3 \times 1 - 1 \\
u_2 &= 5 = 3 \times 2 - 1 \\
u_3 &= 8 = 3 \times 3 - 1 \\
u_4 &= 11 = 3 \times 4 - 1
\end{aligned}$$
Ta dự đoán công thức số hạng tổng quát là: $u_n = 3n - 1$ với mọi $n \in \mathbb{N}^*$.

*Chứng minh bằng quy nạp:*
1. Với $n = 1$, ta có $u_1 = 3(1) - 1 = 2$ (đúng).
2. Giả sử mệnh đề đúng với $n = k \ge 1$, tức là $u_k = 3k - 1$.
3. Ta cần chứng minh mệnh đề đúng với $n = k + 1$, tức là $u_{k+1} = 3(k+1) - 1 = 3k + 2$.  
   Theo hệ thức truy hồi của bài ra:
   $$u_{k+1} = u_k + 3 = (3k - 1) + 3 = 3k + 2$$
   Vậy công thức đúng với $n = k + 1$.
Theo nguyên lý quy nạp toán học, công thức $u_n = 3n - 1$ đúng với mọi $n \in \mathbb{N}^*$.

---

### Dạng 2: Xét tính tăng, giảm của dãy số

#### Ví dụ 2:
Xét tính tăng, giảm của các dãy số sau:
a) $u_n = \frac{2n - 1}{n + 1}$  
b) $v_n = \frac{3^n}{n!}$  
c) $w_n = n^2 - 6n + 10$

#### Lời giải chi tiết:
**a)** Dùng phương pháp xét hiệu $u_{n+1} - u_n$:
Ta có: $u_{n+1} = \frac{2(n+1) - 1}{(n+1) + 1} = \frac{2n + 1}{n + 2}$.  
Xét hiệu:
$$u_{n+1} - u_n = \frac{2n + 1}{n + 2} - \frac{2n - 1}{n + 1} = \frac{(2n + 1)(n + 1) - (2n - 1)(n + 2)}{(n + 2)(n + 1)}$$
Khai triển tử số:
$$(2n^2 + 3n + 1) - (2n^2 + 3n - 2) = 3$$
Do đó:
$$u_{n+1} - u_n = \frac{3}{(n + 2)(n + 1)} > 0, \quad \forall n \in \mathbb{N}^*$$
Vì hiệu số luôn dương nên dãy số $(u_n)$ là **dãy số tăng**.

**b)** Nhận thấy $v_n = \frac{3^n}{n!} > 0$ với mọi $n \in \mathbb{N}^*$, ta dùng phương pháp xét thương $\frac{v_{n+1}}{v_n}$:
$$\frac{v_{n+1}}{v_n} = \frac{3^{n+1}}{(n+1)!} : \frac{3^n}{n!} = \frac{3^{n+1}}{3^n} \cdot \frac{n!}{(n+1)!} = 3 \cdot \frac{1}{n+1} = \frac{3}{n+1}$$
- Với $n = 1$: $\frac{v_2}{v_1} = \frac{3}{2} > 1$ ($v_2 > v_1$).
- Với $n = 2$: $\frac{v_3}{v_2} = \frac{3}{3} = 1$ ($v_3 = v_2$).
- Với mọi $n \ge 3$: $n + 1 \ge 4 \Rightarrow \frac{v_{n+1}}{v_n} = \frac{3}{n+1} < 1 \Rightarrow v_{n+1} < v_n$.  
Vậy dãy số $(v_n)$ không tăng và cũng không giảm trên toàn bộ $\mathbb{N}^*$ (dãy chỉ bắt đầu giảm kể từ số hạng thứ 3 trở đi).

**c)** Khai triển vài số hạng đầu của $w_n = n^2 - 6n + 10$:
- $w_1 = 1 - 6 + 10 = 5$
- $w_2 = 4 - 12 + 10 = 2$ (giảm vì $w_2 < w_1$)
- $w_3 = 9 - 18 + 10 = 1$ (giảm vì $w_3 < w_2$)
- $w_4 = 16 - 24 + 10 = 2$ (tăng vì $w_4 > w_3$)  
Vì dãy số vừa có bước giảm vừa có bước tăng nên dãy số $(w_n)$ **không tăng, không giảm**.

---

### Dạng 3: Xét tính bị chặn của dãy số

#### Ví dụ 3:
Chứng minh các dãy số sau bị chặn:
a) $u_n = \frac{2n + 1}{n + 2}$  
b) $v_n = \frac{\sin(n) + \cos(n)}{n^2 + 1}$

#### Lời giải chi tiết:
**a)** Biến đổi phân thức:
$$u_n = \frac{2(n + 2) - 3}{n + 2} = 2 - \frac{3}{n + 2}$$
- Vì $n \ge 1 \Rightarrow n + 2 \ge 3 \Rightarrow \frac{3}{n + 2} > 0 \Rightarrow u_n = 2 - \frac{3}{n + 2} < 2$ với mọi $n \in \mathbb{N}^*$.  
  Do đó dãy số bị chặn trên bởi $M = 2$.
- Mặt khác, vì $n \ge 1 \Rightarrow n + 2 \ge 3 \Rightarrow \frac{3}{n + 2} \le \frac{3}{3} = 1 \Rightarrow u_n = 2 - \frac{3}{n + 2} \ge 2 - 1 = 1$.  
  Do đó dãy số bị chặn dưới bởi $m = 1$.  
Kết luận: Với mọi $n \in \mathbb{N}^*$, ta có $1 \le u_n < 2$. Vậy dãy số $(u_n)$ là **dãy số bị chặn**.

**b)** Đánh giá tử số: Áp dụng bất đẳng thức lượng giác ở Chương I:
$$-\sqrt{2} \le \sin n + \cos n \le \sqrt{2} \Rightarrow |\sin n + \cos n| \le \sqrt{2}$$
Đánh giá mẫu số: Vì $n \ge 1 \Rightarrow n^2 + 1 \ge 1^2 + 1 = 2$.  
Do đó:
$$|v_n| = \frac{|\sin n + \cos n|}{n^2 + 1} \le \frac{\sqrt{2}}{2} \Leftrightarrow -\frac{\sqrt{2}}{2} \le v_n \le \frac{\sqrt{2}}{2}$$
Vậy dãy số $(v_n)$ là **dãy số bị chặn**.

---

### Dạng 4: Ứng dụng thực tế của Dãy số

#### Bài toán thực tế: Sự sinh sản của bầy thỏ Fibonacci
Giả sử có một đôi thỏ sơ sinh (1 đực, 1 cái) được thả vào một hòn đảo hoang. Quy luật sinh sản như sau:
1. Mỗi đôi thỏ mất đúng 1 tháng để trưởng thành.
2. Từ tháng thứ hai trở đi, mỗi đôi thỏ trưởng thành sinh ra đúng một đôi thỏ con (1 đực, 1 cái) mỗi tháng.
3. Không có con thỏ nào bị chết trong năm đầu tiên.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Lập bảng theo dõi số cặp thỏ ở cuối các tháng 1, 2, 3, 4, 5, 6.<br>
2. Sau 1 năm (12 tháng), trên đảo có tất cả bao nhiêu đôi thỏ?
</div>

#### Lời giải chi tiết:
Gọi $F_n$ là tổng số đôi thỏ có trên đảo vào cuối tháng thứ $n$:
- Cuối tháng 1: Vẫn là 1 đôi thỏ ban đầu (vừa bước vào giai đoạn trưởng thành) $\Rightarrow F_1 = 1$.
- Cuối tháng 2: Đôi thỏ đẻ thêm 1 đôi thỏ con $\Rightarrow$ tổng cộng có $1 + 1 = 2$ đôi thỏ $\Rightarrow F_2 = 2$.
- Cuối tháng 3: Đôi thỏ bố mẹ tiếp tục đẻ thêm 1 đôi con mới, đôi thỏ con tháng trước bây giờ trưởng thành $\Rightarrow$ tổng cộng $2 + 1 = 3$ đôi thỏ $\Rightarrow F_3 = 3$.
- Cuối tháng 4: 2 đôi thỏ trưởng thành đẻ thêm 2 đôi con mới $\Rightarrow$ tổng cộng $3 + 2 = 5$ đôi $\Rightarrow F_4 = 5$.

Quy luật tổng quát: Số đôi thỏ ở cuối tháng thứ $n$ bằng số đôi thỏ đã có ở tháng trước ($F_{n-1}$) cộng thêm số đôi thỏ mới sinh ra (chính bằng số đôi thỏ đã trưởng thành từ tháng thứ $n-2$, tức $F_{n-2}$):
$$F_n = F_{n-1} + F_{n-2} \quad (n \ge 3)$$
Tính tiếp tục đến tháng thứ 12:
- $F_5 = 5 + 3 = 8$
- $F_6 = 8 + 5 = 13$
- $F_7 = 13 + 8 = 21$
- $F_8 = 21 + 13 = 34$
- $F_9 = 34 + 21 = 55$
- $F_{10} = 55 + 34 = 89$
- $F_{11} = 89 + 55 = 144$
- $F_{12} = 144 + 89 = 233$

Vậy sau đúng 1 năm, từ 1 đôi thỏ ban đầu đã phát triển thành **233 đôi thỏ** (tổng cộng 466 con thỏ)!

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho dãy số (u_n) với u_n = (2n - 1) / (n + 3). Số hạng thứ tư u_4 bằng:",
  "options": [
    "A. 1",
    "B. 7/7 = 1",
    "C. 7/7",
    "D. 7/7 = 1"
  ],
  "answer": "A. 1",
  "explanation": "Thay n = 4 vào công thức: u_4 = (2*4 - 1)/(4 + 3) = 7/7 = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Dãy số nào sau đây là dãy số tăng?",
  "options": [
    "A. u_n = 1/n",
    "B. u_n = 3n + 2",
    "C. u_n = (-2)^n",
    "D. u_n = 5 - 2n"
  ],
  "answer": "B. u_n = 3n + 2",
  "explanation": "Xét hiệu u_{n+1} - u_n = [3(n+1) + 2] - [3n + 2] = 3 > 0 nên (u_n) là dãy số tăng. Đáp án A và D là dãy giảm, C là dãy đan dấu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho dãy số xác định bởi u_1 = 3 và u_{n+1} = 2u_n - 1. Số hạng thứ ba u_3 bằng:",
  "options": [
    "A. 5",
    "B. 9",
    "C. 7",
    "D. 11"
  ],
  "answer": "B. 9",
  "explanation": "u_1 = 3. u_2 = 2*u_1 - 1 = 2*3 - 1 = 5. u_3 = 2*u_2 - 1 = 2*5 - 1 = 9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Dãy số u_n = (-1)^n có tính chất nào sau đây?",
  "options": [
    "A. Là dãy số tăng",
    "B. Là dãy số giảm",
    "C. Không tăng cũng không giảm nhưng bị chặn",
    "D. Không bị chặn"
  ],
  "answer": "C. Không tăng cũng không giảm nhưng bị chặn",
  "explanation": "Các số hạng là -1, 1, -1, 1,... đan dấu nên không tăng không giảm. Tuy nhiên -1 ≤ u_n ≤ 1 với mọi n nên dãy số này bị chặn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong các dãy số sau, dãy số nào BỊ CHẶN TRÊN bởi số 1?",
  "options": [
    "A. u_n = n / (n + 1)",
    "B. u_n = 2n",
    "C. u_n = n^2",
    "D. u_n = (n + 2) / (n + 1)"
  ],
  "answer": "A. u_n = n / (n + 1)",
  "explanation": "Vì n < n + 1 với mọi n ∈ N* nên u_n = n/(n + 1) < 1. Do đó dãy số bị chặn trên bởi 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho dãy số (u_n) có u_n = (3n + 1) / (n + 2). Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "A. Dãy số tăng và bị chặn",
    "B. Dãy số giảm và bị chặn",
    "C. Dãy số tăng và không bị chặn",
    "D. Dãy số giảm và không bị chặn"
  ],
  "answer": "A. Dãy số tăng và bị chặn",
  "explanation": "u_n = 3 - 5/(n + 2). Khi n tăng thì 5/(n + 2) giảm, do đó 3 - 5/(n + 2) tăng (dãy số tăng). Mặt khác, 4/3 ≤ u_n < 3 nên dãy số bị chặn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Số hạng thứ mấy của dãy số u_n = 2n^2 - 1 bằng 71?",
  "options": [
    "A. n = 5",
    "B. n = 6",
    "C. n = 7",
    "D. n = 8"
  ],
  "answer": "B. n = 6",
  "explanation": "Cho 2n^2 - 1 = 71 ⇔ 2n^2 = 72 ⇔ n^2 = 36 ⇒ n = 6 (vì n ∈ N*)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho dãy số Fibonacci F_1 = 1, F_2 = 1, F_n = F_{n-1} + F_{n-2} (n ≥ 3). Giá trị F_6 bằng:",
  "options": [
    "A. 5",
    "B. 8",
    "C. 13",
    "D. 21"
  ],
  "answer": "B. 8",
  "explanation": "Các số hạng: F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, F_5 = 5, F_6 = 8."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khẳng định nào sau đây SAI?",
  "options": [
    "A. Dãy số hữu hạn luôn có số hạng cuối cùng",
    "B. Dãy số tăng luôn bị chặn dưới bởi số hạng đầu u_1",
    "C. Dãy số giảm luôn bị chặn trên bởi số hạng đầu u_1",
    "D. Dãy số bị chặn dưới thì luôn là dãy số tăng"
  ],
  "answer": "D. Dãy số bị chặn dưới thì luôn là dãy số tăng",
  "explanation": "Mệnh đề D sai. Ví dụ dãy số u_n = 1/n bị chặn dưới bởi 0 nhưng là dãy số giảm, không phải dãy tăng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Dãy số u_n = cos(nπ) có các số hạng bằng:",
  "options": [
    "A. 1, 1, 1, 1, ...",
    "B. -1, 1, -1, 1, ...",
    "C. 0, 1, 0, 1, ...",
    "D. 1, -1, 1, -1, ..."
  ],
  "answer": "B. -1, 1, -1, 1, ...",
  "explanation": "u_1 = cos π = -1; u_2 = cos 2π = 1; u_3 = cos 3π = -1; u_4 = cos 4π = 1;... Dãy số nhận các giá trị luân phiên -1, 1, -1, 1,..."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Tìm 5 số hạng đầu tiên của các dãy số sau:**
   a) $u_n = \frac{n^2 - 1}{n^2 + 1}$  
   b) $u_1 = 1, u_{n+1} = 2u_n + 3$  
   c) $u_n = \frac{1}{n(n + 1)}$

2. **Xét tính tăng, giảm của các dãy số sau:**
   a) $u_n = \frac{3n - 2}{n + 1}$  
   b) $v_n = \frac{n}{2^n}$  
   c) $w_n = \sqrt{n + 1} - \sqrt{n}$

3. **Xét tính bị chặn của các dãy số sau:**
   a) $u_n = \frac{n^2 + 1}{2n^2 + 3}$  
   b) $v_n = (-1)^n \cdot \frac{n}{n + 1}$

---

### Thử thách Thực tế: Bài toán Tháp Hà Nội (Tower of Hanoi)
Một trò chơi cổ điển gồm 3 cọc kim loại và $n$ chiếc đĩa có bán kính khác nhau xếp chồng lên cọc thứ nhất theo thứ tự từ lớn ở dưới đến nhỏ ở trên.

Quy tắc di chuyển:
- Mỗi lần chỉ được chuyển 1 đĩa từ cọc này sang cọc khác.
- Không bao giờ được đặt đĩa lớn hơn lên trên đĩa nhỏ hơn.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ:</strong><br>
1. Gọi $H_n$ là số bước di chuyển tối thiểu để chuyển toàn bộ $n$ chiếc đĩa từ cọc 1 sang cọc 3. Thiết lập hệ thức truy hồi cho dãy số $(H_n)$.<br>
2. Tìm công thức số hạng tổng quát $H_n$.<br>
3. Nếu các nhà sư huyền thoại có $n = 64$ đĩa vàng nguyên chất và mỗi giây di chuyển được 1 bước không nghỉ ngơi, họ cần bao nhiêu năm để hoàn thành trò chơi?
</div>

> [!TIP]
> **Hướng dẫn giải:**
> 1. Để chuyển $n$ đĩa:
>    - Bước 1: Chuyển $n - 1$ đĩa nhỏ phía trên sang cọc trung gian (cần $H_{n-1}$ bước).
>    - Bước 2: Chuyển đĩa lớn nhất thứ $n$ sang cọc đích (cần đúng $1$ bước).
>    - Bước 3: Chuyển $n - 1$ đĩa từ cọc trung gian sang đè lên đĩa lớn nhất ở cọc đích (cần $H_{n-1}$ bước).  
>    Hệ thức truy hồi: $H_1 = 1$ và $H_n = 2H_{n-1} + 1$.
> 2. Công thức tổng quát:
>    $H_1 = 1 = 2^1 - 1$, $H_2 = 2(1) + 1 = 3 = 2^2 - 1$, $H_3 = 2(3) + 1 = 7 = 2^3 - 1 \dots \Rightarrow H_n = 2^n - 1$.
> 3. Với $n = 64$ đĩa:
>    $$H_{64} = 2^{64} - 1 \approx 1.844 \times 10^{19}\text{ giây}$$
>    Chia cho số giây trong một năm ($365.25 \times 24 \times 3600 \approx 3.156 \times 10^7\text{ giây}$):
>    $$T \approx \frac{1.844 \times 10^{19}}{3.156 \times 10^7} \approx 584.9\text{ tỷ năm!}$$
>    (Con số này gấp hơn 40 lần tuổi thọ ước tính của toàn bộ vũ trụ chúng ta: ~13.8 tỷ năm!).
