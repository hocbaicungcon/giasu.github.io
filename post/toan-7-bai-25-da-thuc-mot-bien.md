---
title: 'Bài 25: Đa thức một biến - Lý thuyết, Thu gọn, Bậc, Nghiệm và 5 Chuyên đề Thực tế'
description: 'Làm chủ Đa thức một biến P(x), phương pháp thu gọn và sắp xếp lũy thừa, xác định bậc và hệ số, kỹ thuật tìm nghiệm và 5 chuyên đề thực tế kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Đa thức một biến
  - Thu gọn đa thức
  - Bậc của đa thức
  - Nghiệm của đa thức
  - Kết nối tri thức
grade: 7
---

# Bài 25. Đa thức một biến

Nếu coi các số và biến số đơn lẻ là những viên gạch cơ bản, thì **Đa thức (Polynomial)** chính là những tòa lâu đài nguy nga của môn Đại số học. Từ quỹ đạo hình parabol của một quả bóng rổ được ném vào rổ, chuyển động của tên lửa vũ trụ rời bệ phóng, cho đến các thuật toán nén âm thanh MP3 hay tạo hình nhân vật hoạt hình 3D trong các bộ phim của Pixar, tất cả đều được biểu diễn và tính toán dựa trên các đa thức.

Đặc biệt, khi một biểu thức chỉ tập trung khảo sát sự biến thiên của duy nhất **một biến số** (như thời gian $t$, khoảng cách $x$, hay nhiệt độ $T$), chúng ta bước vào thế giới trật tự và quy củ của **Đa thức một biến**. Trong bài học này, chúng ta sẽ cùng khám phá cách thu gọn, sắp xếp các số mũ lũy thừa, xác định bậc của đa thức và giải mã khái niệm "Nghiệm của đa thức" — chiếc chìa khóa vàng để giải các phương trình trong tương lai!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 25: ĐA THỨC MỘT BIẾN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đơn thức & Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Đơn thức một biến:</strong> dạng $a x^n$ ($a$ là hệ số, $n \in \mathbb{N}$).<br>• <strong>Đa thức một biến:</strong> tổng của những đơn thức cùng một biến.<br>• Kí hiệu: $A(x), B(x), P(x), Q(y)\dots$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Thu gọn & Sắp xếp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Thu gọn:</strong> cộng trừ các đơn thức cùng số mũ.<br>• <strong>Sắp xếp:</strong> theo lũy thừa giảm dần hoặc tăng dần của biến.<br>• Dạng chuẩn: $P(x) = a_n x^n + \dots + a_1 x + a_0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Bậc & Các hệ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bậc:</strong> số mũ lớn nhất của biến trong dạng thu gọn ($a_n \neq 0$).<br>• $a_n$: <strong>Hệ số cao nhất</strong>.<br>• $a_0$: <strong>Hệ số tự do</strong> (hệ số lũy thừa bậc $0$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Nghiệm của đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x = c$ là <strong>nghiệm</strong> nếu $P(c) = 0$.<br>• Đa thức bậc $n$ có <strong>tối đa $n$ nghiệm</strong>.<br>• Đa thức có thể có $1$ nghiệm, nhiều nghiệm hoặc vô nghiệm.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Nhân đơn thức:** Tính $3x^2 \times 4x^3$ và $(-2x) \times 5x^2$.
2. **Cộng trừ đơn thức cùng lũy thừa:** Thu gọn: $5x^3 + 2x^3 - 4x^3$ và $7x - 9x$.
3. **Thay số tính nhanh:** Cho $P(x) = x^2 - 4x + 3$. Tính $P(1)$ và $P(3)$. Nhận xét kết quả thu được.
4. **Tìm số mũ lớn nhất:** Trong các số hạng của biểu thức $5x^4 - 2x^6 + 7x - 3$, số mũ lớn nhất của biến $x$ là bao nhiêu? Số hạng chứa số mũ lớn nhất là số hạng nào?
5. **Số hữu tỉ:** Số thực $0$ có thể viết dưới dạng $0 \cdot x^n$ được không?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - $3x^2 \times 4x^3 = (3 \times 4) \cdot x^{2 + 3} = 12x^5$.
   - $(-2x) \times 5x^2 = (-2 \times 5) \cdot x^{1 + 2} = -10x^3$.
2. **Trả lời:**
   - $5x^3 + 2x^3 - 4x^3 = (5 + 2 - 4)x^3 = 3x^3$.
   - $7x - 9x = (7 - 9)x = -2x$.
3. **Trả lời:**
   - $P(1) = 1^2 - 4(1) + 3 = 1 - 4 + 3 = 0$.
   - $P(3) = 3^2 - 4(3) + 3 = 9 - 12 + 3 = 0$.
   - Nhận xét: Cả hai giá trị $x = 1$ và $x = 3$ đều làm cho biểu thức $P(x)$ nhận giá trị bằng $0$ (chúng chính là các *nghiệm* của $P(x)$!).
4. **Trả lời:** Số mũ lớn nhất của biến $x$ là $6$. Số hạng chứa số mũ lớn nhất là $-2x^6$.
5. **Trả lời:** Có, $0 = 0 \cdot x^n$. Số $0$ được coi là *đa thức không*, và nó không có bậc.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Đơn thức một biến và Đa thức một biến

> [!IMPORTANT]
> **ĐỊNH NGHĨA 1 (ĐƠN THỨC MỘT BIẾN):**
> **Đơn thức một biến** là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa số và lũy thừa với số mũ nguyên dương của biến đó.
>
> Dạng tổng quát của đơn thức một biến $x$ là:
> $$a \cdot x^n$$
> Trong đó:
> - $a \in \mathbb{R}$ là **hệ số** (hằng số).
> - $n \in \mathbb{N}$ là **số mũ** của biến.

*Ví dụ:* $5x^3$; $-2.5x$; $\frac{3}{4}x^6$; $7$ (được coi là $7x^0$) là các đơn thức một biến $x$.

---

> [!IMPORTANT]
> **ĐỊNH NGHĨA 2 (ĐA THỨC MỘT BIẾN):**
> **Đa thức một biến** là tổng của những đơn thức của cùng một biến.
>
> - Để thuận tiện, người ta thường kí hiệu đa thức bằng một chữ cái in hoa kèm theo tên biến trong dấu ngoặc đơn: $A(x), B(x), P(x), Q(y)\dots$
> - Mỗi đơn thức trong tổng đó được gọi là một **hạng tử** (hay **số hạng**) của đa thức.
> - Số $0$ cũng được gọi là **đa thức không**.

---

### 2. Thu gọn và Sắp xếp đa thức một biến

- **Thu gọn đa thức một biến:** Là việc thực hiện phép cộng, trừ các hạng tử có cùng số mũ của biến (các đơn thức đồng dạng) để đưa đa thức về dạng không còn hai hạng tử nào cùng số mũ.
- **Sắp xếp đa thức một biến:** Sau khi thu gọn, ta sắp xếp các hạng tử theo một trong hai quy tắc:
  1. **Theo lũy thừa giảm dần của biến** (thường dùng nhất):
     $$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$$
  2. **Theo lũy thừa tăng dần của biến**:
     $$P(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n$$

---

### 3. Bậc, Hệ số cao nhất và Hệ số tự do của Đa thức một biến

Xét đa thức một biến $P(x)$ khác đa thức không và đã được thu gọn:

> [!IMPORTANT]
> **CÁC KHÁI NIỆM TRỌNG TÂM:**
> 1. **Bậc của đa thức:** Là **số mũ lớn nhất** của biến có mặt trong đa thức đã thu gọn.
> 2. **Hệ số cao nhất:** Là hệ số của hạng tử có số mũ lớn nhất (hệ số của lũy thừa bậc cao nhất).
> 3. **Hệ số tự do:** Là hệ số của hạng tử không chứa biến (tương ứng với lũy thừa bậc $0$: $a_0 = a_0 x^0$).

*Quy ước quan trọng:*
- Một số khác $0$ là đa thức bậc $0$ (ví dụ: đa thức $P(x) = 8$ có bậc là $0$).
- Số $0$ (đa thức không) **không có bậc**.

---

### 4. Nghiệm của đa thức một biến

> [!IMPORTANT]
> **ĐỊNH NGHĨA NGHIỆM:**
> Cho đa thức $P(x)$. Nếu tại $x = c$ ta có:
> $$P(c) = 0$$
> thì số $c$ được gọi là một **nghiệm** của đa thức $P(x)$.

*Định lý về số nghiệm:*
- Một đa thức một biến (khác đa thức không) bậc $n$ có **không quá $n$ nghiệm**.
- Đa thức bậc $1$ ($P(x) = ax + b$, $a \neq 0$) luôn có **duy nhất $1$ nghiệm** là $x = -\frac{b}{a}$.
- Đa thức bậc $2$ có tối đa $2$ nghiệm (có thể có $2$ nghiệm, $1$ nghiệm hoặc không có nghiệm nào).
- Một đa thức không có nghiệm nào được gọi là **đa thức vô nghiệm**.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Thu gọn, sắp xếp đa thức, xác định bậc và các hệ số

**Phương pháp giải:**
1. Nhóm các hạng tử có cùng số mũ của biến lại với nhau bằng dấu ngoặc đơn (trước dấu ngoặc để dấu cộng để tránh nhầm dấu).
2. Cộng/trừ các hệ số, giữ nguyên phần biến lũy thừa.
3. Sắp xếp các hạng tử theo lũy thừa giảm dần.
4. Tìm bậc (số mũ to nhất), hệ số cao nhất và hệ số tự do.

---

#### Bài toán 1:
Cho đa thức:
$$P(x) = 4x^3 - 2x^2 + 7x^4 - 3x^3 + 5 - x^4 + 6x^2 - 1$$
a) Thu gọn đa thức $P(x)$.
b) Sắp xếp các hạng tử của $P(x)$ theo lũy thừa giảm dần của biến.
c) Xác định bậc, hệ số cao nhất và hệ số tự do của $P(x)$.

**Lời giải:**

a) Nhóm các hạng tử cùng số mũ:
$$P(x) = (7x^4 - x^4) + (4x^3 - 3x^3) + (-2x^2 + 6x^2) + (5 - 1)$$
Thu gọn từng nhóm:
$$P(x) = 6x^4 + x^3 + 4x^2 + 4$$

b) Đa thức sau khi thu gọn ở câu a đã được sắp xếp theo lũy thừa giảm dần của biến:
$$P(x) = 6x^4 + x^3 + 4x^2 + 4$$

c) Quan sát đa thức thu gọn:
- Hạng tử có số mũ lớn nhất là $6x^4$, số mũ là $4$. Do đó **bậc của $P(x)$ là $4$**.
- **Hệ số cao nhất** là $6$ (hệ số của $x^4$).
- **Hệ số tự do** là $4$ (hạng tử số không chứa $x$).
- Hệ số của lũy thừa bậc $3$ là $1$, bậc $2$ là $4$, và hệ số của lũy thừa bậc $1$ là $0$ (vì khuyết hạng tử $x$).

---

### Dạng 2: Tính giá trị của đa thức tại một giá trị của biến

**Phương pháp giải:**
1. Thu gọn đa thức trước (nếu đa thức chưa thu gọn) để việc tính toán nhẹ nhàng nhất.
2. Thay giá trị $x = x_0$ vào biểu thức đã thu gọn.
3. Tính toán cẩn thận quy tắc lũy thừa của số âm.

---

#### Bài toán 2:
Cho đa thức $Q(x) = 2x^3 - 5x^2 + 3x - 7$.
Tính giá trị của $Q(x)$ tại:
a) $x = 0$
b) $x = 2$
c) $x = -1$

**Lời giải:**

a) Tại $x = 0$:
$$Q(0) = 2 \cdot 0^3 - 5 \cdot 0^2 + 3 \cdot 0 - 7 = 0 - 0 + 0 - 7 = -7$$
*(Nhận xét: Giá trị của đa thức tại $x = 0$ luôn luôn chính là hệ số tự do!)*

b) Tại $x = 2$:
$$Q(2) = 2 \cdot (2)^3 - 5 \cdot (2)^2 + 3 \cdot (2) - 7$$
$$Q(2) = 2 \cdot 8 - 5 \cdot 4 + 6 - 7 = 16 - 20 + 6 - 7 = -5$$
Vậy $Q(2) = -5$.

c) Tại $x = -1$:
$$Q(-1) = 2 \cdot (-1)^3 - 5 \cdot (-1)^2 + 3 \cdot (-1) - 7$$
$$Q(-1) = 2 \cdot (-1) - 5 \cdot 1 - 3 - 7 = -2 - 5 - 3 - 7 = -17$$
Vậy $Q(-1) = -17$.

---

### Dạng 3: Kiểm tra xem một số có phải là nghiệm của đa thức hay không

**Phương pháp giải:**
Để kiểm tra số $x = c$ có phải là nghiệm của đa thức $P(x)$ hay không:
- Thay $x = c$ vào đa thức và tính giá trị $P(c)$.
- Nếu $P(c) = 0 \implies x = c$ **là một nghiệm** của $P(x)$.
- Nếu $P(c) \neq 0 \implies x = c$ **không phải là nghiệm** của $P(x)$.

---

#### Bài toán 3:
Cho đa thức $A(x) = x^3 - 4x$.
Trong các số: $0; 1; 2; -2$, số nào là nghiệm của đa thức $A(x)$?

**Lời giải:**

Ta lần lượt tính giá trị của $A(x)$ tại từng số:
- Với $x = 0$: $A(0) = 0^3 - 4 \cdot 0 = 0 \implies x = 0$ **là nghiệm** của $A(x)$.
- Với $x = 1$: $A(1) = 1^3 - 4 \cdot 1 = 1 - 4 = -3 \neq 0 \implies x = 1$ **không phải là nghiệm**.
- Với $x = 2$: $A(2) = 2^3 - 4 \cdot 2 = 8 - 8 = 0 \implies x = 2$ **là nghiệm** của $A(x)$.
- Với $x = -2$: $A(-2) = (-2)^3 - 4 \cdot (-2) = -8 + 8 = 0 \implies x = -2$ **là nghiệm** của $A(x)$.

**Kết luận:** Trong các số đã cho, các số $0; 2; -2$ là nghiệm của đa thức $A(x)$.

---

### Dạng 4: Tìm nghiệm của đa thức một biến

**Phương pháp giải:**
Để tìm nghiệm của đa thức $P(x)$, ta cho $P(x) = 0$ rồi tìm $x$:
1. **Đa thức bậc nhất:** $ax + b = 0 \implies ax = -b \implies x = -\frac{b}{a}$.
2. **Đa thức dạng tích:** $(ax + b)(cx + d) = 0 \implies ax + b = 0$ hoặc $cx + d = 0$.
3. **Đa thức dạng $x^2 - c^2 = 0$:** $\implies x^2 = c^2 \implies x = c$ hoặc $x = -c$.
4. **Chứng minh đa thức vô nghiệm:** Biến đổi đưa về dạng $P(x) = A(x)^2 + m$ với $m > 0$. Vì $A(x)^2 \ge 0 \implies P(x) \ge m > 0$ nên $P(x)$ không thể bằng $0$ với mọi $x$.

---

#### Bài toán 4:
Tìm nghiệm của các đa thức sau:
a) $P(x) = 3x - 12$.
b) $Q(x) = (2x - 6)(x + 5)$.
c) $R(x) = 4x^2 - 16$.
d) Chứng minh rằng đa thức $M(x) = x^2 + 9$ không có nghiệm.

**Lời giải:**

a) Cho $P(x) = 0$:
$$3x - 12 = 0 \implies 3x = 12 \implies x = 4$$
Vậy đa thức $P(x)$ có đúng một nghiệm là $x = 4$.

b) Cho $Q(x) = 0$:
$$(2x - 6)(x + 5) = 0$$
Suy ra:
- Trường hợp 1: $2x - 6 = 0 \implies 2x = 6 \implies x = 3$.
- Trường hợp 2: $x + 5 = 0 \implies x = -5$.
Vậy đa thức $Q(x)$ có hai nghiệm là $x = 3$ và $x = -5$.

c) Cho $R(x) = 0$:
$$4x^2 - 16 = 0 \implies 4x^2 = 16 \implies x^2 = 4$$
Suy ra $x = 2$ hoặc $x = -2$.
Vậy đa thức $R(x)$ có hai nghiệm là $x = 2$ và $x = -2$.

d) Chứng minh $M(x) = x^2 + 9$ không có nghiệm:
Ta có $x^2 \ge 0$ với mọi số thực $x$.
Cộng cả hai vế với $9$:
$$x^2 + 9 \ge 0 + 9 = 9 > 0\quad \text{với mọi } x$$
Vì $M(x) \ge 9 > 0$ với mọi $x$ nên phương trình $M(x) = 0$ không thể xảy ra.
**Kết luận:** Đa thức $M(x)$ không có nghiệm (vô nghiệm trên tập số thực $\mathbb{R}$).

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Định lý Cơ bản của Đại số học (Gauss, 1799)

Năm 1799, nhà toán học thiên tài Carl Friedrich Gauss khi mới 21 tuổi đã chứng minh được **Định lý Cơ bản của Đại số học (Fundamental Theorem of Algebra)**:
*"Mọi đa thức bậc $n \ge 1$ đều có đúng $n$ nghiệm (kể cả nghiệm phức và nghiệm bội)"*.

Trên tập số thực $\mathbb{R}$:
- Một đa thức bậc $n$ có **tối đa $n$ nghiệm thực**.
- Một đa thức bậc lẻ (như bậc 1, bậc 3, bậc 5) luôn luôn có **ít nhất một nghiệm thực**. Đồ thị của nó bắt buộc phải cắt trục hoành $Ox$ ít nhất một lần khi đi từ $-\infty$ sang $+\infty$!

---

### Chuyên đề 2: Đa thức Nội suy (Polynomial Interpolation) trong Đồ họa Máy tính

Làm thế nào máy tính có thể vẽ nên một đường cong mềm mại mượt mà đi qua $5$ điểm mốc rời rạc trên màn hình?
Nhà toán học Joseph-Louis Lagrange đã phát minh ra **Đa thức nội suy Lagrange**:
Qua $n + 1$ điểm phân biệt trên mặt phẳng, luôn luôn tồn tại duy nhất một đa thức bậc không quá $n$ đi qua chính xác tất cả các điểm đó.

Công nghệ đồ họa vector (SVG), phần mềm thiết kế Adobe Illustrator, và thuật toán phục chế các bức ảnh cũ bị nhòe pixel đều ứng dụng đa thức nội suy để tái tạo lại hình dạng sắc nét của đường nét.

---

### Chuyên đề 3: Định lý Nghiệm hữu tỉ (Rational Root Theorem)

Khi gặp một đa thức bậc cao với hệ số nguyên:
$$P(x) = a_n x^n + \dots + a_1 x + a_0\quad (a_i \in \mathbb{Z})$$
Làm sao để đoán nhanh các nghiệm hữu tỉ mà không phải mò mẫm vô vọng?

> [!TIP]
> **ĐỊNH LÝ NGHIỆM HỮU TỈ:**
> Nếu phân số tối giản $\frac{p}{q}$ là một nghiệm của đa thức hệ số nguyên, thì:
> - Tử số $p$ bắt buộc phải là **ước của hệ số tự do $a_0$**.
> - Mẫu số $q$ bắt buộc phải là **ước của hệ số cao nhất $a_n$**.

*Ví dụ:* Với đa thức $P(x) = x^3 - 2x^2 - x + 2$:
- Hệ số tự do $a_0 = 2$, các ước của $2$ là: $\pm 1, \pm 2$.
- Hệ số cao nhất $a_3 = 1$, các ước là $\pm 1$.
- Các nghiệm hữu tỉ tiềm năng chỉ có thể là: $1, -1, 2, -2$.
Thử trực tiếp: $P(1) = 0$, $P(-1) = 0$, $P(2) = 0$. Ta tìm được ngay trọn vẹn cả $3$ nghiệm của đa thức bậc ba mà không tốn công sức!

---

### Chuyên đề 4: Đa thức trong Thuật toán Kiểm tra Lỗi CRC của Mạng Internet

Khi các em tải một tệp dữ liệu dung lượng lớn qua Wi-Fi hoặc cáp quang biển, làm sao máy tính biết được tệp tải về có bị lỗi bit $0$ thành bit $1$ hay không?
Các kỹ sư mạng sử dụng thuật toán **CRC (Cyclic Redundancy Check)**:
- Toàn bộ chuỗi dữ liệu nhị phân được biểu diễn thành một đa thức khổng lồ với các hệ số $0$ và $1$.
- Máy phát sẽ chia đa thức dữ liệu cho một **đa thức sinh chuẩn** (Generator Polynomial) để lấy đa thức phần dư làm mã kiểm tra.
- Khi nhận được tệp, máy nhận chia lại; nếu phần dư bằng $0$, tệp được xác nhận toàn vẹn $100\%$. Đa thức chính là người gác cổng thầm lặng bảo vệ an ninh thông tin toàn cầu.

---

### Chuyên đề 5: Đa thức xấp xỉ Taylor — Bí mật bên trong Máy tính cầm tay Casio

Khi các em bấm nút $\sin(30^\circ)$ hay $\sqrt{5}$ trên chiếc máy tính cầm tay, vi xử lý điện tử thực chất không hề có "hình tam giác" bên trong để đo đạc. Máy tính chỉ biết thực hiện $4$ phép tính cộng, trừ, nhân, chia!
Nhờ **Khai triển đa thức Taylor (Maclaurin)**, các hàm số lượng giác phức tạp được xấp xỉ bằng một đa thức:
$$\sin(x) \approx x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + \dots$$
Chỉ cần tính giá trị của một đa thức bậc $7$, máy tính đã cho ra kết quả chính xác đến $10$ chữ số thập phân chỉ trong một phần nghìn giây!

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy thử sức với $10$ câu hỏi trắc nghiệm sau:

````quiz
title: "Kiểm tra Đa thức một biến (Toán 7 - Bài 25)"
questions:
  - question: "Biểu thức nào sau đây là một đơn thức một biến?"
    options:
      - "3x^2 + 1"
      - "-5x^4"
      - "2x + y"
      - "4/x"
    answer: 1
    hint: "Đơn thức một biến chỉ gồm tích của một số với lũy thừa của biến."
    explanation: "-5x^4 là đơn thức một biến. 3x^2 + 1 là đa thức; 2x + y có 2 biến; 4/x biến ở mẫu số."

  - question: "Bậc của đa thức P(x) = 3x^5 - 7x^2 + 2x - 9 là:"
    options:
      - "2"
      - "3"
      - "5"
      - "9"
    answer: 2
    hint: "Bậc là số mũ lớn nhất của biến trong đa thức đã thu gọn."
    explanation: "Số mũ lớn nhất của x trong P(x) là 5, nên bậc của đa thức là 5."

  - question: "Hệ số cao nhất và hệ số tự do của đa thức Q(x) = -4x^3 + 6x^2 - 8 lần lượt là:"
    options:
      - "-4 và -8"
      - "6 và -8"
      - "-4 và 8"
      - "3 và -8"
    answer: 0
    hint: "Hệ số cao nhất đi với lũy thừa bậc cao nhất (-4x^3), hệ số tự do là số hạng không chứa x."
    explanation: "Bậc cao nhất là bậc 3 có hệ số -4. Hệ số tự do là -8."

  - question: "Thu gọn đa thức A(x) = 5x^2 - 3x + 2x^2 + 7x - 4 ta được kết quả:"
    options:
      - "7x^2 + 4x - 4"
      - "7x^2 - 4x - 4"
      - "3x^2 + 4x - 4"
      - "7x^2 + 10x - 4"
    answer: 0
    hint: "Nhóm (5x^2 + 2x^2) và (-3x + 7x)."
    explanation: "A(x) = (5 + 2)x^2 + (-3 + 7)x - 4 = 7x^2 + 4x - 4."

  - question: "Giá trị của đa thức P(x) = x^2 - 5x + 6 tại x = 2 là:"
    options:
      - "20"
      - "0"
      - "-4"
      - "6"
    answer: 1
    hint: "Thay x = 2: P(2) = 2^2 - 5*2 + 6."
    explanation: "P(2) = 4 - 10 + 6 = 0 (vậy x = 2 là một nghiệm của P(x))."

  - question: "Số nào sau đây là nghiệm của đa thức B(x) = 2x - 8?"
    options:
      - "x = -4"
      - "x = 2"
      - "x = 4"
      - "x = 8"
    answer: 2
    hint: "Cho 2x - 8 = 0 -> 2x = 8."
    explanation: "2x - 8 = 0 suy ra 2x = 8 suy ra x = 4."

  - question: "Đa thức nào sau đây KHÔNG CÓ NGHIỆM trên tập số thực?"
    options:
      - "x^2 - 4"
      - "x^2 + 1"
      - "x + 5"
      - "3x - 6"
    answer: 1
    hint: "x^2 >= 0 với mọi x nên x^2 + 1 >= 1 > 0."
    explanation: "Vì x^2 >= 0 với mọi x nên x^2 + 1 >= 1 > 0, do đó x^2 + 1 không thể bằng 0."

  - question: "Một đa thức một biến bậc 4 có thể có tối đa bao nhiêu nghiệm?"
    options:
      - "2 nghiệm"
      - "3 nghiệm"
      - "4 nghiệm"
      - "Vô số nghiệm"
    answer: 2
    hint: "Đa thức bậc n có tối đa n nghiệm."
    explanation: "Theo định lý số nghiệm, một đa thức một biến bậc 4 có tối đa 4 nghiệm."

  - question: "Sắp xếp đa thức F(x) = 2x - 5x^3 + 7 - x^4 theo lũy thừa giảm dần của biến:"
    options:
      - "F(x) = -x^4 - 5x^3 + 2x + 7"
      - "F(x) = 7 + 2x - 5x^3 - x^4"
      - "F(x) = -x^4 + 5x^3 + 2x + 7"
      - "F(x) = x^4 - 5x^3 + 2x + 7"
    answer: 0
    hint: "Số mũ giảm dần: bậc 4 -> bậc 3 -> bậc 1 -> bậc 0. Chú ý dấu của các hạng tử."
    explanation: "Sắp xếp đúng theo số mũ giảm dần kèm theo dấu của từng số hạng là: -x^4 - 5x^3 + 2x + 7."

  - question: "Cho đa thức M(x) = ax^2 + bx + c. Biết M(0) = 5. Giá trị của hệ số c là:"
    options:
      - "c = 0"
      - "c = 5"
      - "c = -5"
      - "Không xác định được"
    answer: 1
    hint: "M(0) = a*(0)^2 + b*(0) + c = c."
    explanation: "Khi thay x = 0 thì M(0) = c. Do đó c = 5 (hệ số tự do)."
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Khái niệm, Bậc & Hệ số** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Tính giá trị & Kiểm tra nghiệm** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | | **$3.0$ điểm** |
| **Tìm nghiệm & Vô nghiệm** | | | TL3 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$3.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Đơn thức nào sau đây đồng dạng với đơn thức $-3x^4$?
- A. $4x^3$
- B. $7x^4$
- C. $-3x^2$
- D. $5x$

**Câu 2:** Bậc của đa thức $P(x) = 5x^3 - 2x^5 + 4x - 1$ là:
- A. $3$
- B. $4$
- C. $5$
- D. $-2$

**Câu 3:** Hệ số tự do của đa thức $A(x) = 6x^2 - 9x + 14$ là:
- A. $6$
- B. $-9$
- C. $14$
- D. $2$

**Câu 4:** Giá trị của đa thức $B(x) = 2x^2 - 3x + 1$ tại $x = -2$ là:
- A. $3$
- B. $15$
- C. $-1$
- D. $11$

**Câu 5:** Số $x = 3$ là nghiệm của đa thức nào sau đây?
- A. $x + 3$
- B. $2x - 6$
- C. $x^2 - 6$
- D. $3x + 9$

**Câu 6:** Đa thức $Q(x) = (x - 1)(x + 4)$ có tập nghiệm là:
- A. $\{1; 4\}$
- B. $\{-1; -4\}$
- C. $\{1; -4\}$
- D. $\{-1; 4\}$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):**
Cho đa thức:
$$A(x) = 3x^4 - 2x^2 + 5x^3 - x^4 + 4x^2 - 3x^3 + 7 - 2x$$
a) ($1.0$ điểm) Thu gọn đa thức $A(x)$ và sắp xếp các hạng tử theo lũy thừa giảm dần của biến.
b) ($1.0$ điểm) Xác định bậc, hệ số cao nhất và hệ số tự do của đa thức $A(x)$.

**Bài 2 ($2.0$ điểm):**
Cho hai đa thức:
$$P(x) = x^2 - 4x + 3\quad \text{và}\quad Q(x) = 2x^3 - x^2 + 5$$
a) ($1.0$ điểm) Tính giá trị của $P(x)$ tại $x = 1$; $x = -2$.
b) ($1.0$ điểm) Kiểm tra xem $x = 3$ có phải là nghiệm của $P(x)$ không? $x = -1$ có phải là nghiệm của $Q(x)$ không?

**Bài 3 ($2.0$ điểm):** Tìm nghiệm của các đa thức sau:
a) ($1.0$ điểm) $M(x) = 4x - 20$.
b) ($1.0$ điểm) $N(x) = 9x^2 - 25$.

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
a) ($0.5$ điểm) Chứng minh rằng đa thức $H(x) = 2x^2 + 4x + 5$ không có nghiệm trên tập số thực.
b) ($0.5$ điểm) Cho đa thức bậc hai $f(x) = ax^2 + bx + c$. Biết rằng $f(0) = 4$, $f(1) = 9$ và $f(-1) = 3$. Hãy xác định các hệ số $a, b, c$.

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B · 2. C · 3. C · 4. B · 5. B · 6. C** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Nhóm hạng tử đồng dạng:<br>$A(x) = (3x^4 - x^4) + (5x^3 - 3x^3) + (-2x^2 + 4x^2) - 2x + 7$.<br>- Thu gọn: $A(x) = 2x^4 + 2x^3 + 2x^2 - 2x + 7$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - Bậc của $A(x)$ là $4$ (số mũ cao nhất).<br>- Hệ số cao nhất là $2$ (hệ số của $x^4$).<br>- Hệ số tự do là $7$. | $0.5$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 2a** | - Tại $x = 1$: $P(1) = 1^2 - 4(1) + 3 = 1 - 4 + 3 = 0$.<br>- Tại $x = -2$: $P(-2) = (-2)^2 - 4(-2) + 3 = 4 + 8 + 3 = 15$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 2b** | - Tính $P(3) = 3^2 - 4(3) + 3 = 9 - 12 + 3 = 0 \implies x = 3$ **là một nghiệm** của $P(x)$.<br>- Tính $Q(-1) = 2(-1)^3 - (-1)^2 + 5 = -2 - 1 + 5 = 2 \neq 0 \implies x = -1$ **không phải là nghiệm** của $Q(x)$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 3a** | Cho $M(x) = 0 \implies 4x - 20 = 0 \implies 4x = 20 \implies x = 5$.<br>Vậy nghiệm của $M(x)$ là $x = 5$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 3b** | Cho $N(x) = 0 \implies 9x^2 - 25 = 0 \implies 9x^2 = 25 \implies x^2 = \frac{25}{9}$.<br>Suy ra $x = \frac{5}{3}$ hoặc $x = -\frac{5}{3}$.<br>Vậy đa thức $N(x)$ có hai nghiệm là $x = \frac{5}{3}$ và $x = -\frac{5}{3}$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 4a** | Biến đổi $H(x)$: $H(x) = 2(x^2 + 2x + 1) + 3 = 2(x + 1)^2 + 3$.<br>Vì $(x + 1)^2 \ge 0 \implies 2(x + 1)^2 + 3 \ge 3 > 0$ với mọi $x$.<br>Do $H(x) \ge 3 > 0$ nên $H(x)$ không thể bằng $0$. Vậy đa thức $H(x)$ vô nghiệm. | $0.25$ đ<br><br>$0.25$ đ |
| **Bài 4b** | - $f(0) = a(0)^2 + b(0) + c = c \implies c = 4$.<br>- $f(1) = a(1)^2 + b(1) + 4 = a + b + 4 = 9 \implies a + b = 5$. (1)<br>- $f(-1) = a(-1)^2 + b(-1) + 4 = a - b + 4 = 3 \implies a - b = -1$. (2)<br>- Cộng (1) và (2): $2a = 4 \implies a = 2$. Suy ra $b = 5 - 2 = 3$.<br>- Vậy $a = 2, b = 3, c = 4$ (đa thức là $f(x) = 2x^2 + 3x + 4$). | $0.25$ đ<br><br><br>$0.25$ đ |
