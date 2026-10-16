---
title: 'Toán 8 Bài 9: Phân tích đa thức thành nhân tử'
description: 'Làm chủ kỹ thuật phân tích đa thức thành nhân tử Toán 8 Bài 9: Phương pháp đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử, tách hạng tử tam thức bậc hai, giải phương trình tích, tính nhanh và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Phân tích đa thức thành nhân tử
  - Nhân tử chung
  - Nhóm hạng tử
  - Tam thức bậc hai
  - Kết nối tri thức
grade: 8
---

# Bài 9. Phân tích đa thức thành nhân tử

Nếu như các bài học trước dạy chúng ta cách "mở bung" các biểu thức bằng phép nhân $(a + b)(c + d) \to ac + ad + bc + bd$, thì **Bài 9** đưa chúng ta đến một kỹ năng mang tính nghệ thuật đỉnh cao của đại số học: **Phân tích đa thức thành nhân tử** (Factoring Polynomials) — quá trình "đóng gói" một tổng các hạng tử thành tích của các đa thức đơn giản hơn.

Tại sao phải phân tích thành nhân tử?
- Để giải phương trình $A \cdot B = 0 \iff A = 0$ hoặc $B = 0$.
- Để rút gọn các phân thức cồng kềnh bằng cách triệt tiêu các nhân tử chung ở tử và mẫu.
- Để tính nhẩm nhanh và chứng minh các tính chất chia hết trong số học.

Giống như việc phân tích một hợp số thành tích các thừa số nguyên tố ($60 = 2^2 \times 3 \times 5$), phân tích đa thức thành nhân tử giúp ta nhìn thấu "bộ gene" cấu tạo nên mọi biểu thức đại số.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 9: CÁC PHƯƠNG PHÁP PHÂN TÍCH THÀNH NHÂN TỬ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đặt nhân tử chung</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$A \cdot B + A \cdot C = A(B + C)$$<br>• Tìm ƯCLN của các hệ số số học.<br>• Chọn biến chung với <strong>số mũ nhỏ nhất</strong>.<br>• Luôn ưu tiên áp dụng phương pháp này đầu tiên!</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Dùng hằng đẳng thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đưa về 7 hằng đẳng thức đáng nhớ:<br>  $A^2 - B^2 = (A - B)(A + B)$<br>  $A^2 \pm 2AB + B^2 = (A \pm B)^2$<br>  $A^3 \pm B^3 = (A \pm B)(A^2 \mp AB + B^2)$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Nhóm hạng tử</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhóm các hạng tử thích hợp để:<br>  - Xuất hiện nhân tử chung mới.<br>  - Tạo thành một hằng đẳng thức quen thuộc.<br>• Chú ý đổi dấu khi đặt dấu trừ đằng trước ngoặc.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Phối hợp nhiều phương pháp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đặt nhân tử chung $\to$ Dùng HĐT $\to$ Nhóm.<br>• Tách hạng tử tam thức bậc hai $ax^2 + bx + c$.<br>• Thêm bớt hạng tử để tạo hiệu hai bình phương.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phân tích số học:** Viết số $84$ dưới dạng tích các thừa số nguyên tố.
2. **Tìm nhân tử chung:** Hai đơn thức $6x^3y$ và $9x^2y^2$ có nhân tử chung lớn nhất là gì?
3. **Đổi dấu:** Biểu thức $y - x$ có thể viết thành $-(\dots)$ như thế nào?
4. **Nhận dạng nhanh:** Đa thức $x^2 - 16$ có thể viết thành tích của hai nhị thức nào?
5. **Ứng dụng tìm x:** Tìm $x$ nếu biết $x(x - 5) = 0$. Có mấy giá trị của $x$?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $84 = 2^2 \times 3 \times 7$.
> 2. $\text{ƯCLN}(6, 9) = 3$; biến $x$ lấy số mũ nhỏ nhất là $x^2$; biến $y$ lấy số mũ nhỏ nhất là $y$. Vậy nhân tử chung là $3x^2y$.
> 3. $y - x = -(x - y)$. Quy tắc đổi dấu này cực kỳ quan trọng khi tìm nhân tử chung!
> 4. $x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$.
> 5. Một tích bằng $0$ khi ít nhất một thừa số bằng $0$: $x = 0$ hoặc $x - 5 = 0 \iff x = 5$. Có 2 giá trị.

---

## I. Lý thuyết trọng tâm & Các phương pháp phân tích cơ bản

### 1. Phân tích đa thức thành nhân tử là gì?
- **Định nghĩa:** Phân tích đa thức thành nhân tử (hay thừa số) là biến đổi đa thức đó thành một **tích** của những đa thức.
- Ví dụ:
  - $2x^2 + 4x = 2x(x + 2)$ (đã phân tích thành nhân tử).
  - $x^2 - 9 = (x - 3)(x + 3)$ (đã phân tích thành nhân tử).
  - $x(x + 1) + 2$ **chưa phải** là phân tích thành nhân tử vì phép tính ngoài cùng vẫn là phép cộng ($+ 2$).

---

### 2. Phương pháp 1: Đặt nhân tử chung

Nếu tất cả các hạng tử của đa thức đều chứa một thừa số chung, ta áp dụng tính chất phân phối của phép nhân đối với phép cộng:

$$A \cdot B + A \cdot C - A \cdot D = A(B + C - D)$$

#### Quy trình tìm nhân tử chung:
1. **Phần hệ số:** Tìm ƯCLN của các hệ số nguyên dương của các hạng tử.
2. **Phần biến:** Chọn các biến có mặt trong **tất cả** các hạng tử, mỗi biến lấy với **số mũ nhỏ nhất** của nó.
3. **Nhân tử chung:** Là tích của hệ số tìm được ở bước 1 với các lũy thừa của biến ở bước 2.

> [!WARNING]
> **Quy tắc đổi dấu:**
> Nhiều khi nhân tử chung bị ẩn đi do ngược dấu:
> $$B - A = -(A - B)$$
> Ví dụ: $x(x - 3) + 5(3 - x) = x(x - 3) - 5(x - 3) = (x - 3)(x - 5)$.

---

### 3. Phương pháp 2: Dùng hằng đẳng thức

Nếu đa thức có dạng một vế của một trong 7 hằng đẳng thức đáng nhớ, ta áp dụng hằng đẳng thức đó để viết nó thành tích hoặc lũy thừa:
1. $A^2 + 2AB + B^2 = (A + B)^2$
2. $A^2 - 2AB + B^2 = (A - B)^2$
3. $A^2 - B^2 = (A - B)(A + B)$
4. $A^3 + 3A^2B + 3AB^2 + B^3 = (A + B)^3$
5. $A^3 - 3A^2B + 3AB^2 - B^3 = (A - B)^3$
6. $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$
7. $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$

---

### 4. Phương pháp 3: Nhóm hạng tử

Khi đa thức không có nhân tử chung cho tất cả các hạng tử và cũng không có dạng hằng đẳng thức ngay từ đầu, ta có thể **nhóm hai hoặc nhiều hạng tử** với nhau một cách thích hợp:
- **Cách nhóm 1:** Nhóm để xuất hiện nhân tử chung ở các nhóm.
- **Cách nhóm 2:** Nhóm để tạo thành hằng đẳng thức (thường là nhóm 3 hạng tử thành một bình phương rồi trừ cho một bình phương khác: $A^2 - B^2$).

---

### 5. Phương pháp 4: Tách hạng tử tam thức bậc hai $ax^2 + bx + c$

Để phân tích tam thức bậc hai $ax^2 + bx + c$ thành nhân tử:
1. Tìm hai số $m$ và $n$ sao cho:
   - Tổng: $m + n = b$
   - Tích: $m \cdot n = a \cdot c$
2. Tách hạng tử giữa $bx = mx + nx$.
3. Nhóm hạng tử:
   $$ax^2 + mx + nx + c = (ax^2 + mx) + (nx + c)$$
4. Đặt nhân tử chung để hoàn tất.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Phân tích bằng đặt nhân tử chung và dùng hằng đẳng thức

**Phương pháp giải:**
Luôn kiểm tra và đặt nhân tử chung ra ngoài trước (nếu có), sau đó quan sát biểu thức trong ngoặc xem có khớp với hằng đẳng thức nào không.

---

#### Bài toán 1:
Phân tích các đa thức sau thành nhân tử:
a) $14x^3y^2 - 21x^2y^3 + 7x^2y^2$
b) $5x(x - 2y) + 15y(2y - x)$
c) $4x^2 - 12xy + 9y^2$
d) $8x^3 - \frac{1}{27}$

**Lời giải:**

a) Hệ số: $\text{ƯCLN}(14, 21, 7) = 7$.
Biến chung: $x$ có số mũ nhỏ nhất là $x^2$; $y$ có số mũ nhỏ nhất là $y^2$.
Nhân tử chung là $7x^2y^2$:
$$14x^3y^2 - 21x^2y^3 + 7x^2y^2 = 7x^2y^2(2x - 3y + 1)$$

b) Nhận xét: $2y - x = -(x - 2y)$. Đổi dấu hạng tử thứ hai:
$$5x(x - 2y) + 15y(2y - x) = 5x(x - 2y) - 15y(x - 2y)$$
Đặt nhân tử chung $5(x - 2y)$:
$$= 5(x - 2y)(x - 3y)$$

c) Ta có:
$$4x^2 - 12xy + 9y^2 = (2x)^2 - 2 \cdot (2x) \cdot (3y) + (3y)^2 = (2x - 3y)^2$$

d) Hiệu hai lập phương:
$$8x^3 - \frac{1}{27} = (2x)^3 - \left(\frac{1}{3}\right)^3 = \left(2x - \frac{1}{3}\right)\left(4x^2 + \frac{2}{3}x + \frac{1}{9}\right)$$

---

### Dạng 2: Phân tích bằng phương pháp nhóm hạng tử

**Phương pháp giải:**
- Với đa thức 4 hạng tử: thử nhóm đôi một (2-2) để tìm nhân tử chung, hoặc nhóm 3-1 để tạo hiệu hai bình phương $A^2 - B^2$.
- Với đa thức 6 hạng tử: thử nhóm 3-3 hoặc 2-2-2.

---

#### Bài toán 2:
Phân tích các đa thức sau thành nhân tử:
a) $x^2 - xy + 5x - 5y$
b) $x^2 - y^2 + 10x + 25$
c) $x^3 - 4x^2 - x + 4$

**Lời giải:**

a) Nhóm đôi một:
$$x^2 - xy + 5x - 5y = (x^2 - xy) + (5x - 5y)$$
Đặt nhân tử chung ở từng nhóm:
$$= x(x - y) + 5(x - y)$$
Xuất hiện nhân tử chung $(x - y)$:
$$= (x - y)(x + 5)$$

b) Quan sát: $x^2 + 10x + 25 = (x + 5)^2$. Nhóm 3-1:
$$x^2 - y^2 + 10x + 25 = (x^2 + 10x + 25) - y^2$$
$$= (x + 5)^2 - y^2$$
Áp dụng hằng đẳng thức hiệu hai bình phương $A^2 - B^2$:
$$= (x + 5 - y)(x + 5 + y)$$

c) Nhóm đôi một:
$$x^3 - 4x^2 - x + 4 = (x^3 - 4x^2) - (x - 4)$$
$$= x^2(x - 4) - (x - 4)$$
$$= (x - 4)(x^2 - 1)$$
Tiếp tục phân tích $x^2 - 1 = (x - 1)(x + 1)$:
$$= (x - 4)(x - 1)(x + 1)$$
*(Nhớ luôn phân tích triệt để cho đến khi các nhân tử không thể phân tích được nữa!)*

---

### Dạng 3: Phương pháp tách hạng tử tam thức bậc hai $ax^2 + bx + c$

**Phương pháp giải:**
Tìm $m, n$ thỏa mãn: $m + n = b$ và $m \cdot n = a \cdot c$. Sau đó tách $bx = mx + nx$ rồi nhóm.

---

#### Bài toán 3:
Phân tích các đa thức sau thành nhân tử:
a) $A = x^2 - 7x + 12$
b) $B = 2x^2 + 5x - 3$
c) $C = 3x^2 - 8x + 4$

**Lời giải:**

a) Tam thức $x^2 - 7x + 12$ có $a = 1, b = -7, c = 12$:
- Tích $a \cdot c = 12$.
- Cần tìm hai số có tích bằng $12$ và tổng bằng $-7$: đó là $-3$ và $-4$ (vì $(-3) \cdot (-4) = 12$ và $(-3) + (-4) = -7$).
Tách $-7x = -3x - 4x$:
$$A = x^2 - 3x - 4x + 12 = (x^2 - 3x) - (4x - 12)$$
$$= x(x - 3) - 4(x - 3) = (x - 3)(x - 4)$$

b) Tam thức $2x^2 + 5x - 3$ có $a = 2, b = 5, c = -3$:
- Tích $a \cdot c = 2 \cdot (-3) = -6$.
- Cần tìm hai số có tích bằng $-6$ và tổng bằng $5$: đó là $6$ và $-1$ (vì $6 \cdot (-1) = -6$ và $6 + (-1) = 5$).
Tách $5x = 6x - x$:
$$B = 2x^2 + 6x - x - 3 = (2x^2 + 6x) - (x + 3)$$
$$= 2x(x + 3) - (x + 3) = (x + 3)(2x - 1)$$

c) Tam thức $3x^2 - 8x + 4$ có $a = 3, b = -8, c = 4$:
- Tích $a \cdot c = 3 \cdot 4 = 12$.
- Hai số có tích bằng $12$ và tổng bằng $-8$ là $-2$ và $-6$.
Tách $-8x = -2x - 6x$:
$$C = 3x^2 - 6x - 2x + 4 = 3x(x - 2) - 2(x - 2) = (x - 2)(3x - 2)$$

---

### Dạng 4: Ứng dụng: Tìm $x$, tính nhanh và chứng minh chia hết

**Phương pháp giải:**
- Tìm $x$: Đưa về dạng tích $A(x) \cdot B(x) = 0 \iff A(x) = 0$ hoặc $B(x) = 0$.
- Tính nhanh: Phân tích thành tích chứa các số tròn chục, tròn trăm.
- Chia hết: Phân tích biểu thức thành tích chứa thừa số chia hết cho số cần chứng minh.

---

#### Bài toán 4:
a) Tìm $x$, biết: $x^2(x - 3) - 4(x - 3) = 0$.
b) Tính nhanh giá trị biểu thức: $S = 78 \cdot 31 + 78 \cdot 24 + 78 \cdot 45$.
c) Chứng minh rằng với mọi số nguyên $n$, biểu thức $P = n^3 - n$ luôn chia hết cho $6$.

**Lời giải:**

a) Đặt nhân tử chung $(x - 3)$:
$$x^2(x - 3) - 4(x - 3) = 0$$
$$\iff (x - 3)(x^2 - 4) = 0$$
$$\iff (x - 3)(x - 2)(x + 2) = 0$$
Tích bằng $0$ khi một trong ba thừa số bằng $0$:
- $x - 3 = 0 \iff x = 3$
- $x - 2 = 0 \iff x = 2$
- $x + 2 = 0 \iff x = -2$
Vậy phương trình có 3 nghiệm: $x \in \{-2; 2; 3\}$.

b) Đặt $78$ làm nhân tử chung:
$$S = 78(31 + 24 + 45) = 78 \cdot 100 = 7800$$

c) Phân tích $P = n^3 - n$ thành nhân tử:
$$P = n(n^2 - 1) = n(n - 1)(n + 1) = (n - 1)n(n + 1)$$
Nhận xét: $(n - 1), n, (n + 1)$ là **ba số nguyên liên tiếp**.
- Trong ba số nguyên liên tiếp luôn có ít nhất một số chia hết cho $2$ $\implies P \;\vdots\; 2$.
- Trong ba số nguyên liên tiếp luôn có đúng một số chia hết cho $3$ $\implies P \;\vdots\; 3$.
Vì $\text{ƯCLN}(2, 3) = 1$, nên $P$ chia hết cho $2 \times 3 = 6$.
Vậy $n^3 - n$ luôn chia hết cho $6$ với mọi số nguyên $n$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Kỹ thuật số hóa hình ảnh & Nén dữ liệu (JPEG Compression)
Trong các giải thuật nén ảnh, ma trận điểm ảnh $f(x, y)$ thường được biểu diễn dưới dạng đa thức 2 biến. Để lưu trữ dung lượng nhẹ nhất, thuật toán tìm cách phân tích đa thức thành tích các hàm độc lập:
$$f(x, y) = g(x) \cdot h(y)$$
Khi phân tích được thành nhân tử, máy tính chỉ cần lưu trữ $2N$ giá trị của $g(x)$ và $h(y)$ thay vì lưu trữ toàn bộ $N^2$ giá trị của lưới điểm ảnh, giúp nén dung lượng ảnh giảm đến $90\%$!

### 2. Thiết kế trò chơi 3D & Kiểm tra va chạm (Hitbox Collision)
Trong lập trình game (Unity/Unreal Engine), việc kiểm tra xem nhân vật có chạm vào chướng ngại vật hay không dựa vào việc giải phương trình khoảng cách $D(t) = 0$. Bằng cách phân tích đa thức khoảng cách thành nhân tử:
$$D(t) = (t - t_1)(t - t_2) = 0$$
Hệ thống xác định ngay thời điểm va chạm chính xác $t_1$ và $t_2$ để kích hoạt hiệu ứng nổ hoặc trừ máu nhân vật mà không bị giật lag khung hình.

### 3. Kinh tế học: Điểm hòa vốn sản xuất (Break-even Analysis)
Một xí nghiệp may mặc có hàm lợi nhuận theo sản lượng $x$ (nghìn áo) là:
$$L(x) = -2x^2 + 18x - 28$$
Để tìm các mức sản lượng hòa vốn ($L(x) = 0$), kế toán trưởng phân tích đa thức thành nhân tử:
$$L(x) = -2(x^2 - 9x + 14) = -2(x - 2)(x - 7)$$
Phương trình $L(x) = 0 \iff x = 2$ hoặc $x = 7$.
Xí nghiệp bắt đầu có lãi khi sản xuất từ $2000$ đến $7000$ chiếc áo!

### 4. Thuật toán mật mã RSA & Thách thức phân tích thừa số
Hệ thống ngân hàng toàn cầu được bảo vệ bởi thuật toán RSA. Độ bảo mật của hệ thống dựa trên một nguyên lý đơn giản nhưng bất khả thi: Nhân hai số nguyên tố lớn $p \times q = N$ thì máy tính làm trong 1 mili-giây, nhưng từ số $N$ có 600 chữ số phân tích ngược lại thành $p \times q$ thì siêu máy tính mạnh nhất thế giới cũng phải mất hàng triệu năm. Phân tích thành nhân tử chính là "chén thánh" của an ninh mạng!

### 5. Phương pháp thêm bớt cùng một hạng tử (Nâng cao cho học sinh giỏi)
Phân tích đa thức $x^4 + 4$ thành nhân tử (Bài toán nổi tiếng của Sophie Germain):
Ta thêm và bớt $4x^2$:
$$x^4 + 4 = (x^4 + 4x^2 + 4) - 4x^2$$
$$= (x^2 + 2)^2 - (2x)^2$$
$$= (x^2 + 2 - 2x)(x^2 + 2 + 2x) = (x^2 - 2x + 2)(x^2 + 2x + 2)$$
Một đa thức tưởng chừng không thể phân tích, nhưng nhờ nghệ thuật thêm bớt đã biến thành tích của hai tam thức bậc hai tuyệt đẹp!

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Phân tích đa thức 6x^2y - 9xy^2 thành nhân tử ta được:",
  "options": [
    "3xy(2x - 3y)",
    "3xy(2x + 3y)",
    "xy(6x - 9y)",
    "3x(2xy - 3y^2)"
  ],
  "correct": 0,
  "hint": "ƯCLN(6, 9) = 3, nhân tử chung phần biến là xy.",
  "explanation": "$6x^2y - 9xy^2 = 3xy(2x - 3y)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phân tích đa thức x^2 - 25 thành nhân tử ta được:",
  "options": [
    "(x - 5)^2",
    "(x - 5)(x + 5)",
    "(x - 25)(x + 1)",
    "(x + 5)^2"
  ],
  "correct": 1,
  "hint": "Áp dụng hằng đẳng thức hiệu hai bình phương A^2 - B^2 với B = 5.",
  "explanation": "$x^2 - 25 = x^2 - 5^2 = (x - 5)(x + 5)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Kết quả phân tích đa thức x^2 - 4xy + 4y^2 thành nhân tử là:",
  "options": [
    "(x + 2y)^2",
    "(x - 2y)^2",
    "(x - 4y)^2",
    "(x - 2y)(x + 2y)"
  ],
  "correct": 1,
  "hint": "Dạng bình phương của một hiệu: A^2 - 2AB + B^2.",
  "explanation": "$x^2 - 4xy + 4y^2 = x^2 - 2 \\cdot x \\cdot (2y) + (2y)^2 = (x - 2y)^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phân tích đa thức x^2 + 5x + 6 thành nhân tử:",
  "options": [
    "(x + 1)(x + 6)",
    "(x + 2)(x + 3)",
    "(x - 2)(x - 3)",
    "(x + 5)(x + 1)"
  ],
  "correct": 1,
  "hint": "Tìm hai số có tích bằng 6 và tổng bằng 5: đó là 2 và 3.",
  "explanation": "$x^2 + 5x + 6 = x^2 + 2x + 3x + 6 = x(x + 2) + 3(x + 2) = (x + 2)(x + 3)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tìm x biết 2x(x - 4) - (x - 4) = 0:",
  "options": [
    "x = 4 hoặc x = 1/2",
    "x = 4 hoặc x = -1/2",
    "x = 4 hoặc x = 2",
    "x = -4 hoặc x = 1/2"
  ],
  "correct": 0,
  "hint": "Đặt nhân tử chung (x - 4): (x - 4)(2x - 1) = 0.",
  "explanation": "$(x - 4)(2x - 1) = 0 \\iff x = 4$ hoặc $x = 1/2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phân tích đa thức x^2 - y^2 + 2y - 1 thành nhân tử:",
  "options": [
    "(x - y + 1)(x + y - 1)",
    "(x - y - 1)(x + y + 1)",
    "(x - y + 1)(x - y - 1)",
    "(x + y - 1)^2"
  ],
  "correct": 0,
  "hint": "Nhóm x^2 - (y^2 - 2y + 1) = x^2 - (y - 1)^2.",
  "explanation": "$x^2 - (y^2 - 2y + 1) = x^2 - (y - 1)^2 = [x - (y - 1)][x + (y - 1)] = (x - y + 1)(x + y - 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính nhanh giá trị của 87^2 + 26 \\cdot 87 + 13^2:",
  "options": [
    "1000",
    "10000",
    "100000",
    "8700"
  ],
  "correct": 1,
  "hint": "Nhận xét 26 = 2 \\cdot 13. Biểu thức là (87 + 13)^2.",
  "explanation": "$87^2 + 2 \\cdot 87 \\cdot 13 + 13^2 = (87 + 13)^2 = 100^2 = 10000$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đa thức x^3 - 8y^3 được phân tích thành:",
  "options": [
    "(x - 2y)(x^2 + 2xy + 4y^2)",
    "(x - 2y)(x^2 - 2xy + 4y^2)",
    "(x - 2y)^3",
    "(x - 8y)(x^2 + xy + y^2)"
  ],
  "correct": 0,
  "hint": "Hiệu hai lập phương với A = x, B = 2y.",
  "explanation": "$x^3 - (2y)^3 = (x - 2y)[x^2 + x(2y) + (2y)^2] = (x - 2y)(x^2 + 2xy + 4y^2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biểu thức 3x(x - y) + 6(y - x) được phân tích thành:",
  "options": [
    "3(x - y)(x - 2)",
    "3(x - y)(x + 2)",
    "(x - y)(3x + 6)",
    "3(x + y)(x - 2)"
  ],
  "correct": 0,
  "hint": "Đổi dấu 6(y - x) = -6(x - y) rồi đặt 3(x - y) làm nhân tử chung.",
  "explanation": "$3x(x - y) - 6(x - y) = 3(x - y)(x - 2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Số giá trị của x thỏa mãn x^3 - 9x = 0 là:",
  "options": [
    "1",
    "2",
    "3",
    "0"
  ],
  "correct": 2,
  "hint": "x(x^2 - 9) = x(x - 3)(x + 3) = 0.",
  "explanation": "$x(x - 3)(x + 3) = 0 \\iff x = 0, x = 3, x = -3$. Có 3 giá trị thỏa mãn."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### Ma trận đề kiểm tra 45 phút

| Cấp độ nhận thức | Trắc nghiệm (3 điểm) | Tự luận (7 điểm) | Tổng điểm |
| :--- | :--- | :--- | :--- |
| **Nhận biết** | 2 câu (0.6 đ): Nhân tử chung cơ bản, hằng đẳng thức | Bài 1a, b (1.5 đ): Đặt nhân tử chung, áp dụng HĐT | **2.1 điểm** |
| **Thông hiểu** | 4 câu (1.2 đ): Nhóm hạng tử, đổi dấu | Bài 1c, Bài 2a (2.0 đ): Nhóm đôi một, nhóm 3-1 | **3.2 điểm** |
| **Vận dụng** | 3 câu (0.9 đ): Tách hạng tử, tìm x | Bài 2b, Bài 3 (2.5 đ): Tách tam thức bậc hai, tìm x | **3.4 điểm** |
| **Vận dụng cao** | 1 câu (0.3 đ): Phân tích đa thức bậc cao, chia hết | Bài 4 (1.0 đ): Chứng minh chia hết và thêm bớt hạng tử | **1.3 điểm** |
| **Tổng cộng** | **10 câu (3.0 đ)** | **4 bài (7.0 đ)** | **10.0 điểm** |

---

### Đề bài tự luận (7.0 điểm)

**Bài 1 (2.5 điểm):**
Phân tích các đa thức sau thành nhân tử:
a) $15x^2y - 20xy^2 + 5xy$ (0.75 điểm)
b) $x^2 - 16y^2$ (0.75 điểm)
c) $3x(x - y) + 9(y - x)$ (1.0 điểm)

**Bài 2 (2.0 điểm):**
Phân tích các đa thức sau thành nhân tử:
a) $x^2 - y^2 - 6x + 9$ (1.0 điểm)
b) $2x^2 - 7x + 3$ (1.0 điểm)

**Bài 3 (1.5 điểm):**
Tìm $x$, biết:
a) $x^2 - 6x = 0$ (0.75 điểm)
b) $(2x - 1)^2 - (x + 3)^2 = 0$ (0.75 điểm)

**Bài 4 (1.0 điểm):**
a) Chứng minh rằng biểu thức $A = n^3 + 3n^2 + 2n$ luôn chia hết cho $6$ với mọi số nguyên $n$. (0.5 điểm)
b) Tìm giá trị nhỏ nhất của biểu thức $M = x^2 - 4xy + 5y^2 - 6y + 11$. (0.5 điểm)

---

### Barem điểm chi tiết & Hướng dẫn chấm tự luận

| Bài | Ý | Nội dung giải | Điểm |
| :--- | :--- | :--- | :--- |
| **Bài 1** | a | $15x^2y - 20xy^2 + 5xy = 5xy(3x - 4y + 1)$ | 0.75 đ |
| | b | $x^2 - 16y^2 = x^2 - (4y)^2 = (x - 4y)(x + 4y)$ | 0.75 đ |
| | c | $3x(x - y) + 9(y - x) = 3x(x - y) - 9(x - y) = 3(x - y)(x - 3)$ | 1.0 đ |
| **Bài 2** | a | Nhóm 3-1: $(x^2 - 6x + 9) - y^2 = (x - 3)^2 - y^2$<br>$= (x - 3 - y)(x - 3 + y)$ | 1.0 đ |
| | b | Tách $-7x = -6x - x$:<br>$2x^2 - 6x - x + 3 = 2x(x - 3) - (x - 3) = (x - 3)(2x - 1)$ | 1.0 đ |
| **Bài 3** | a | $x(x - 6) = 0 \iff x = 0$ hoặc $x = 6$. Kết luận $x \in \{0; 6\}$. | 0.75 đ |
| | b | Áp dụng $A^2 - B^2 = 0 \iff (A - B)(A + B) = 0$:<br>$[(2x - 1) - (x + 3)][(2x - 1) + (x + 3)] = 0$<br>$\iff (x - 4)(3x + 2) = 0 \iff x = 4$ hoặc $x = -\frac{2}{3}$. | 0.75 đ |
| **Bài 4** | a | Phân tích: $A = n(n^2 + 3n + 2) = n(n^2 + n + 2n + 2)$<br>$= n[n(n + 1) + 2(n + 1)] = n(n + 1)(n + 2)$<br>Vì $n(n + 1)(n + 2)$ là tích của 3 số nguyên liên tiếp nên chia hết cho $2$ và $3$, do đó chia hết cho $6$. | 0.5 đ |
| | b | Biến đổi nhóm bình phương:<br>$M = (x^2 - 4xy + 4y^2) + (y^2 - 6y + 9) + 2$<br>$M = (x - 2y)^2 + (y - 3)^2 + 2$<br>Vì $(x - 2y)^2 \ge 0$ và $(y - 3)^2 \ge 0 \implies M \ge 2$.<br>Đẳng thức xảy ra khi $y = 3$ và $x = 2y = 6$. Vậy $\min M = 2$. | 0.5 đ |
