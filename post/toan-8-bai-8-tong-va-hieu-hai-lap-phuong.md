---
title: 'Toán 8 Bài 8: Tổng và hiệu hai lập phương'
description: 'Làm chủ hai hằng đẳng thức bậc 3 cốt lõi: Tổng hai lập phương và Hiệu hai lập phương. Khái niệm bình phương thiếu, kỹ thuật phân tích thành nhân tử, 4 dạng toán trọng tâm, 5 ứng dụng thực tế và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Hằng đẳng thức
  - Tổng hai lập phương
  - Hiệu hai lập phương
  - Bình phương thiếu
  - Kết nối tri thức
grade: 8
---

# Bài 8. Tổng và hiệu hai lập phương

Nếu ở Bài 7, chúng ta đã biến đổi **lập phương của một tổng** $(a + b)^3$ thành một đa thức 4 hạng tử, thì trong Bài 8, chúng ta sẽ làm quen với một cấu trúc đối xứng hoàn mỹ khác: phân tích **tổng hai lập phương** $a^3 + b^3$ và **hiệu hai lập phương** $a^3 - b^3$ thành tích của hai nhân tử.

Đây là hai hằng đẳng thức có vai trò then chốt nhất trong toàn bộ đại số phổ thông khi chuyển đổi giữa phép cộng và phép nhân. Chúng xuất hiện dày đặc trong các bài toán rút gọn phân thức đại số (Chương 6), giải phương trình quy về bậc nhất (Chương 7) và các bài thi học sinh giỏi về chia hết số học:
1. **Tổng hai lập phương:** $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
2. **Hiệu hai lập phương:** $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$

Trong bài học này, các em sẽ giải mã khái niệm độc đáo **"bình phương thiếu"**, làm chủ quy tắc ghi nhớ dấu thần tốc và ứng dụng chúng vào các bài toán thực tế thú vị.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 8: TỔNG VÀ HIỆU HAI LẬP PHƯƠNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tổng hai lập phương</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$<br>• Bằng <strong>tổng</strong> nhân với <strong>bình phương thiếu của hiệu</strong>.<br>• Dấu nhân tử đầu cùng dấu (+), hạng tử giữa đổi dấu (-).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">2. Hiệu hai lập phương</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$<br>• Bằng <strong>hiệu</strong> nhân với <strong>bình phương thiếu của tổng</strong>.<br>• Dấu nhân tử đầu cùng dấu (-), hạng tử giữa đổi dấu (+).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Khái niệm Bình phương thiếu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $a^2 - ab + b^2$: bình phương thiếu của hiệu (thiếu số 2 ở hạng tử giữa).<br>• $a^2 + ab + b^2$: bình phương thiếu của tổng (thiếu số 2 ở hạng tử giữa).<br>• Luôn dương hoặc cùng dấu với $a, b \neq 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">4. Phân biệt cẩn thận</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $a^3 + b^3 \neq (a + b)^3$.<br>• $a^3 - b^3 \neq (a - b)^3$.<br>• Phân tích thành nhân tử: từ trái sang phải.<br>• Khai triển rút gọn: từ phải sang trái.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phép nhân phân phối:** Nhân hai đa thức $(x + 2)(x^2 - 2x + 4)$. Kết quả bằng bao nhiêu?
2. **Khái niệm mới:** Biểu thức $x^2 - xy + y^2$ khác biểu thức $(x - y)^2$ ở điểm nào?
3. **Phát hiện lỗi sai:** Một học sinh viết $x^3 + 8 = (x + 2)(x^2 - 4x + 4)$. Lỗi sai ở đâu?
4. **Tính nhẩm:** Giá trị của $10^3 + 1^3$ bằng bao nhiêu? Viết nó dưới dạng tích của $11$ với một số.
5. **So sánh giá trị:** Với $a = 3$ và $b = 1$, hãy tính $a^3 - b^3$ và $(a - b)^3$. Hai kết quả này có bằng nhau không?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $(x + 2)(x^2 - 2x + 4) = x(x^2 - 2x + 4) + 2(x^2 - 2x + 4) = x^3 - 2x^2 + 4x + 2x^2 - 4x + 8 = x^3 + 8$.
> 2. $x^2 - xy + y^2$ thiếu số $2$ ở hạng tử giữa so với $(x - y)^2 = x^2 - 2xy + y^2$, nên gọi là **bình phương thiếu của một hiệu**.
> 3. Bạn đã nhầm hạng tử giữa thành $-4x$ (đúng phải là $-x \cdot 2 = -2x$).
> 4. $10^3 + 1^3 = 1001 = 11 \times (10^2 - 10 \cdot 1 + 1^2) = 11 \times 91$.
> 5. $a^3 - b^3 = 27 - 1 = 26$, trong khi $(a - b)^3 = 2^3 = 8$. Rõ ràng $26 \neq 8$.

---

## I. Lý thuyết trọng tâm & Bản chất toán học

### 1. Tổng hai lập phương

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$A^3 + B^3 = (A + B)(A^2 - AB + B^2)$$

- **Quy tắc bằng lời:** Tổng hai lập phương của hai biểu thức bằng tích của **tổng hai biểu thức** đó với **bình phương thiếu của hiệu** hai biểu thức đó.

#### Chứng minh bằng đại số:
Thực hiện phép nhân ở vế phải:
$$(A + B)(A^2 - AB + B^2) = A(A^2 - AB + B^2) + B(A^2 - AB + B^2)$$
$$= A^3 - A^2B + AB^2 + A^2B - AB^2 + B^3$$
$$= A^3 + (-A^2B + A^2B) + (AB^2 - AB^2) + B^3 = A^3 + B^3$$
Các hạng tử trung gian triệt tiêu lẫn nhau từng đôi một, chỉ còn lại hai lũy thừa bậc ba!

---

### 2. Hiệu hai lập phương

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$A^3 - B^3 = (A - B)(A^2 + AB + B^2)$$

- **Quy tắc bằng lời:** Hiệu hai lập phương của hai biểu thức bằng tích của **hiệu hai biểu thức** đó với **bình phương thiếu của tổng** hai biểu thức đó.

#### Chứng minh bằng đại số:
$$(A - B)(A^2 + AB + B^2) = A(A^2 + AB + B^2) - B(A^2 + AB + B^2)$$
$$= A^3 + A^2B + AB^2 - A^2B - AB^2 - B^3 = A^3 - B^3$$

---

### 3. Bí quyết ghi nhớ dấu thần tốc (Quy tắc "Cùng - Khác - Luôn dương")

Để không bao giờ nhầm lẫn dấu giữa hai công thức:
| Hằng đẳng thức | Nhân tử thứ nhất (Nhị thức) | Hạng tử giữa của tam thức | Hạng tử cuối |
| :--- | :---: | :---: | :---: |
| $A^3 \mathbf{+} B^3$ | $A \mathbf{+} B$ *(Cùng dấu)* | $\mathbf{-} AB$ *(Trái dấu)* | $\mathbf{+} B^2$ *(Luôn dương)* |
| $A^3 \mathbf{-} B^3$ | $A \mathbf{-} B$ *(Cùng dấu)* | $\mathbf{+} AB$ *(Trái dấu)* | $\mathbf{+} B^2$ *(Luôn dương)* |

#### Tính chất đặc biệt của bình phương thiếu:
Biểu thức bình phương thiếu $A^2 \pm AB + B^2$ không bao giờ đổi dấu khi $A, B$ không đồng thời bằng $0$:
$$A^2 + AB + B^2 = \left(A + \frac{B}{2}\right)^2 + \frac{3B^2}{4} \ge 0$$
Đẳng thức xảy ra khi và chỉ khi $A = B = 0$.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Viết đa thức dưới dạng tích (Phân tích thành nhân tử)

**Phương pháp giải:**
1. Đưa các số hạng về dạng lập phương: $8x^3 = (2x)^3$, $27y^3 = (3y)^3$, $1 = 1^3$, $\frac{1}{64} = \left(\frac{1}{4}\right)^3$.
2. Xác định biểu thức $A$ và $B$.
3. Áp dụng công thức: chú ý tính đúng bình phương thiếu ($A^2$, $AB$, $B^2$).

---

#### Bài toán 1:
Viết các đa thức sau dưới dạng tích:
a) $x^3 + 64$
b) $27x^3 - 8y^3$
c) $125a^3 + \frac{1}{8}$

**Lời giải:**

a) Ta có $64 = 4^3 \implies A = x, B = 4$:
$$x^3 + 64 = x^3 + 4^3$$
$$= (x + 4)(x^2 - x \cdot 4 + 4^2)$$
$$= (x + 4)(x^2 - 4x + 16)$$

b) Ta có $27x^3 = (3x)^3$ và $8y^3 = (2y)^3 \implies A = 3x, B = 2y$:
$$27x^3 - 8y^3 = (3x)^3 - (2y)^3$$
$$= (3x - 2y)[(3x)^2 + (3x)(2y) + (2y)^2]$$
$$= (3x - 2y)(9x^2 + 6xy + 4y^2)$$

c) Ta có $125a^3 = (5a)^3$ và $\frac{1}{8} = \left(\frac{1}{2}\right)^3$:
$$125a^3 + \frac{1}{8} = (5a)^3 + \left(\frac{1}{2}\right)^3$$
$$= \left(5a + \frac{1}{2}\right)\left[(5a)^2 - (5a)\cdot \frac{1}{2} + \left(\frac{1}{2}\right)^2\right]$$
$$= \left(5a + \frac{1}{2}\right)\left(25a^2 - \frac{5}{2}a + \frac{1}{4}\right)$$

---

### Dạng 2: Viết tích dưới dạng tổng hoặc hiệu hai lập phương

**Phương pháp giải:**
1. Kiểm tra xem biểu thức có đúng cấu trúc $(A \pm B)(A^2 \mp AB + B^2)$ hay không.
2. Nếu đúng, viết ngay kết quả thành $A^3 \pm B^3$ mà không cần nhân phân phối dài dòng!

---

#### Bài toán 2:
Tính nhanh các tích sau:
a) $(x - 3)(x^2 + 3x + 9)$
b) $(2x + 1)(4x^2 - 2x + 1)$
c) $(3x - 5y)(9x^2 + 15xy + 25y^2)$

**Lời giải:**

a) Xét tích: $(x - 3)(x^2 + 3x + 9)$:
- Biểu thức thứ nhất: $A - B$ với $A = x, B = 3$.
- Biểu thức thứ hai: $x^2 + x \cdot 3 + 3^2 = A^2 + AB + B^2$.
Đúng dạng hiệu hai lập phương:
$$(x - 3)(x^2 + 3x + 9) = x^3 - 3^3 = x^3 - 27$$

b) Xét tích: $(2x + 1)(4x^2 - 2x + 1)$:
- Ta có: $(2x)^2 - (2x) \cdot 1 + 1^2 = 4x^2 - 2x + 1$.
Đúng dạng tổng hai lập phương với $A = 2x, B = 1$:
$$(2x + 1)(4x^2 - 2x + 1) = (2x)^3 + 1^3 = 8x^3 + 1$$

c) Xét tích: $(3x - 5y)(9x^2 + 15xy + 25y^2)$:
- Ta có $A = 3x, B = 5y$.
- $A^2 + AB + B^2 = (3x)^2 + (3x)(5y) + (5y)^2 = 9x^2 + 15xy + 25y^2$.
Do đó:
$$(3x - 5y)(9x^2 + 15xy + 25y^2) = (3x)^3 - (5y)^3 = 27x^3 - 125y^3$$

---

### Dạng 3: Rút gọn biểu thức và tính giá trị nhanh

**Phương pháp giải:**
Áp dụng hằng đẳng thức để thu gọn các cụm tích thành tổng/hiệu lập phương rồi thực hiện phép cộng trừ đa thức.

---

#### Bài toán 3:
a) Rút gọn biểu thức: $M = (x - 2)(x^2 + 2x + 4) - (x + 1)(x^2 - x + 1)$
b) Rút gọn biểu thức: $N = (2x - 3)(4x^2 + 6x + 9) - 8(x - 1)^3 - 24x^2$
c) Tính giá trị của biểu thức $P = (x + 3)(x^2 - 3x + 9) - x(x - 2)(x + 2)$ tại $x = 5$.

**Lời giải:**

a) Áp dụng hằng đẳng thức cho từng cụm tích:
- $(x - 2)(x^2 + 2x + 4) = x^3 - 2^3 = x^3 - 8$.
- $(x + 1)(x^2 - x + 1) = x^3 + 1^3 = x^3 + 1$.
Thay vào $M$:
$$M = (x^3 - 8) - (x^3 + 1) = x^3 - 8 - x^3 - 1 = -9$$
*(Giá trị của biểu thức $M$ không phụ thuộc vào giá trị của biến $x$!)*

b) Khai triển từng phần:
- $(2x - 3)(4x^2 + 6x + 9) = (2x)^3 - 3^3 = 8x^3 - 27$.
- $(x - 1)^3 = x^3 - 3x^2 + 3x - 1 \implies 8(x - 1)^3 = 8x^3 - 24x^2 + 24x - 8$.
Thay vào $N$:
$$N = (8x^3 - 27) - (8x^3 - 24x^2 + 24x - 8) - 24x^2$$
$$N = 8x^3 - 27 - 8x^3 + 24x^2 - 24x + 8 - 24x^2$$
$$N = (8x^3 - 8x^3) + (24x^2 - 24x^2) - 24x + (-27 + 8)$$
$$N = -24x - 19$$

c) Thu gọn biểu thức $P$:
- $(x + 3)(x^2 - 3x + 9) = x^3 + 3^3 = x^3 + 27$.
- $(x - 2)(x + 2) = x^2 - 4 \implies x(x - 2)(x + 2) = x(x^2 - 4) = x^3 - 4x$.
Thay vào $P$:
$$P = (x^3 + 27) - (x^3 - 4x) = x^3 + 27 - x^3 + 4x = 4x + 27$$
Tại $x = 5$:
$$P = 4 \cdot 5 + 27 = 20 + 27 = 47$$

---

### Dạng 4: Chứng minh chia hết và tìm số dư trong số học

**Phương pháp giải:**
Sử dụng tính chất chia hết từ hằng đẳng thức:
- $a^3 + b^3 = (a + b)(a^2 - ab + b^2) \implies (a^3 + b^3) \;\vdots\; (a + b)$ với mọi số nguyên $a, b$.
- $a^3 - b^3 = (a - b)(a^2 + ab + b^2) \implies (a^3 - b^3) \;\vdots\; (a - b)$ với mọi số nguyên $a \neq b$.

---

#### Bài toán 4:
a) Chứng minh rằng $73^3 - 13^3$ chia hết cho $60$.
b) Chứng minh rằng $85^3 + 15^3$ chia hết cho $100$.
c) Tìm $x$, biết: $(x - 3)(x^2 + 3x + 9) - x(x - 2)(x + 2) = 13$.

**Lời giải:**

a) Áp dụng hằng đẳng thức hiệu hai lập phương:
$$73^3 - 13^3 = (73 - 13)(73^2 + 73 \cdot 13 + 13^2)$$
$$= 60 \cdot (73^2 + 73 \cdot 13 + 13^2)$$
Vì $60 \;\vdots\; 60$ và biểu thức trong ngoặc là một số nguyên, nên:
$$(73^3 - 13^3) \;\vdots\; 60$$

b) Áp dụng hằng đẳng thức tổng hai lập phương:
$$85^3 + 15^3 = (85 + 15)(85^2 - 85 \cdot 15 + 15^2)$$
$$= 100 \cdot (85^2 - 85 \cdot 15 + 15^2)$$
Vì thừa số đầu tiên bằng $100$ nên tích luôn chia hết cho $100$.

c) Thu gọn phương trình:
- $(x - 3)(x^2 + 3x + 9) = x^3 - 27$.
- $x(x - 2)(x + 2) = x(x^2 - 4) = x^3 - 4x$.
Phương trình trở thành:
$$(x^3 - 27) - (x^3 - 4x) = 13$$
$$\iff 4x - 27 = 13$$
$$\iff 4x = 40 \iff x = 10$$
Vậy $x = 10$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Hóa thạch số học: Những con số kỳ diệu của Ramanujan (Số Taxi-cab)
Nhà toán học thiên tài Srinivasa Ramanujan từng phát hiện ra một con số huyền thoại: $1729$. Đây là số nguyên dương nhỏ nhất có thể biểu diễn thành tổng của hai lập phương theo hai cách khác nhau:
$$1729 = 1^3 + 12^3 = 1 + 1728$$
$$1729 = 9^3 + 10^3 = 729 + 1000$$
Áp dụng hằng đẳng thức tổng hai lập phương:
$$1729 = (1 + 12)(1^2 - 1 \cdot 12 + 12^2) = 13 \times 133 = 13 \times 7 \times 19$$
Hằng đẳng thức giúp ta phân tích số Taxicab ra các thừa số nguyên tố cực kỳ nhanh chóng.

### 2. Thiết kế thủy lợi & Lưu lượng dòng chảy qua đập tràn
Khi xây dựng đập thủy điện có cửa xả sâu hình lập phương, lưu lượng dòng nước chảy qua tiết diện thay đổi khi mực nước dâng từ độ cao $h_1$ lên $h_2$. Năng lượng động học cuốn trôi tỉ lệ với:
$$\Delta E \sim h_2^3 - h_1^3 = (h_2 - h_1)(h_2^2 + h_2h_1 + h_1^2)$$
Kỹ sư thủy lợi dựa vào nhân tử $(h_2 - h_1)$ để ước lượng độ dốc dòng chảy và nhân tử bình phương thiếu để thiết kế vách bê tông chịu lực xói mòn.

### 3. Thiên văn học: Định luật III Kepler về chu kỳ quay của các hành tinh
Định luật III của Johannes Kepler phát biểu: Bình phương chu kỳ quỹ đạo $T^2$ tỉ lệ với lập phương bán trục lớn $a^3$ ($T^2 = k \cdot a^3$).
Khi so sánh hai hành tinh có bán kính quỹ đạo $R_1$ và $R_2$, độ chênh lệch năng lượng quỹ đạo tỉ lệ với hiệu hai lập phương:
$$\Delta \mathcal{E} \sim R_2^3 - R_1^3 = (R_2 - R_1)(R_2^2 + R_2 R_1 + R_1^2)$$
Công thức này là nền tảng để tính toán lực đẩy tên lửa cần thiết cho các tàu thăm dò không gian chuyển đổi quỹ đạo (Hohmann Transfer Orbit).

### 4. Thuật toán nhân nhanh phân nhánh (Karatsuba bậc 3)
Trong lập trình tính toán số lớn trên siêu máy tính, để nhân hai đa thức bậc cao mà giảm thiểu số lượng phép nhân số học của chip CPU, các nhà khoa học máy tính sử dụng phép phân rã hằng đẳng thức:
$$(A + B)(A^2 - AB + B^2) = A^3 + B^3$$
Bằng cách tính trước $A^3$ và $B^3$ qua các bảng nhớ đệm (Lookup table), CPU tiết kiệm được hàng triệu chu kỳ tính toán so với việc nhân phân phối từng số hạng.

### 5. Định lý lớn Fermat với số mũ $n = 3$
Nhà toán học lừng danh Leonhard Euler đã chứng minh phương trình:
$$x^3 + y^3 = z^3$$
**không có nghiệm nguyên dương** khác không bằng phương pháp lùi vô hạn (Infinite Descent) kết hợp với hằng đẳng thức tổng hai lập phương: $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$. Đây là một trong những cột mốc vĩ đại nhất trong lịch sử lý thuyết số thế giới.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Biểu thức x^3 + 27 được phân tích thành tích là:",
  "options": [
    "(x + 3)(x^2 - 3x + 9)",
    "(x + 3)(x^2 + 3x + 9)",
    "(x + 3)(x^2 - 6x + 9)",
    "(x - 3)(x^2 + 3x + 9)"
  ],
  "correct": 0,
  "hint": "27 = 3^3. A^3 + B^3 = (A + B)(A^2 - AB + B^2).",
  "explanation": "$x^3 + 27 = x^3 + 3^3 = (x + 3)(x^2 - 3x + 9)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khai triển tích (x - 4)(x^2 + 4x + 16) ta được kết quả là:",
  "options": [
    "x^3 - 16",
    "x^3 - 64",
    "x^3 + 64",
    "(x - 4)^3"
  ],
  "correct": 1,
  "hint": "Đây là dạng hiệu hai lập phương: (A - B)(A^2 + AB + B^2) = A^3 - B^3 với B = 4.",
  "explanation": "$(x - 4)(x^2 + 4x + 16) = x^3 - 4^3 = x^3 - 64$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biểu thức 8x^3 - 1 được viết dưới dạng tích là:",
  "options": [
    "(2x - 1)(4x^2 + 2x + 1)",
    "(2x - 1)(4x^2 - 2x + 1)",
    "(2x - 1)(2x^2 + 2x + 1)",
    "(8x - 1)(x^2 + x + 1)"
  ],
  "correct": 0,
  "hint": "8x^3 = (2x)^3. Hạng tử bình phương là (2x)^2 = 4x^2.",
  "explanation": "$8x^3 - 1 = (2x)^3 - 1^3 = (2x - 1)[(2x)^2 + (2x)\\cdot 1 + 1^2] = (2x - 1)(4x^2 + 2x + 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biểu thức nào sau đây được gọi là bình phương thiếu của một hiệu của hai số x và y?",
  "options": [
    "x^2 - 2xy + y^2",
    "x^2 - xy + y^2",
    "x^2 + xy + y^2",
    "x^2 + 2xy + y^2"
  ],
  "correct": 1,
  "hint": "Bình phương thiếu của một hiệu mang dấu trừ ở giữa nhưng không có hệ số 2.",
  "explanation": "$x^2 - xy + y^2$ là bình phương thiếu của hiệu $(x - y)$ vì nó thiếu hệ số 2 ở hạng tử giữa."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính giá trị của biểu thức P = (x - 1)(x^2 + x + 1) tại x = 11:",
  "options": [
    "1330",
    "1331",
    "1332",
    "1000"
  ],
  "correct": 0,
  "hint": "P = x^3 - 1. Thay x = 11: 11^3 - 1 = 1331 - 1.",
  "explanation": "$P = x^3 - 1 = 11^3 - 1 = 1331 - 1 = 1330$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Rút gọn biểu thức (x + 2)(x^2 - 2x + 4) - x^3 ta được:",
  "options": [
    "-8",
    "8",
    "16",
    "0"
  ],
  "correct": 1,
  "hint": "(x + 2)(x^2 - 2x + 4) = x^3 + 8.",
  "explanation": "$(x + 2)(x^2 - 2x + 4) - x^3 = (x^3 + 8) - x^3 = 8$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Điền vào dấu * để được đẳng thức đúng: (3x + *)(9x^2 - 6x + 4) = 27x^3 + 8",
  "options": [
    "2",
    "4",
    "8",
    "1"
  ],
  "correct": 0,
  "hint": "8 = 2^3, vậy B = 2.",
  "explanation": "Ta có $27x^3 + 8 = (3x)^3 + 2^3 = (3x + 2)(9x^2 - 6x + 4)$. Do đó $* = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Giá trị của 55^3 + 45^3 chia hết cho số nào sau đây?",
  "options": [
    "50",
    "100",
    "90",
    "1000"
  ],
  "correct": 1,
  "hint": "55^3 + 45^3 = (55 + 45)(55^2 - 55 \\cdot 45 + 45^2) = 100 \\cdot M.",
  "explanation": "Vì $55 + 45 = 100$, nên $(55^3 + 45^3)$ chia hết cho $100$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tìm x biết (x + 1)(x^2 - x + 1) - x(x^2 - 3) = 10:",
  "options": [
    "x = 3",
    "x = 9",
    "x = -3",
    "x = 1"
  ],
  "correct": 0,
  "hint": "Khai triển: (x^3 + 1) - (x^3 - 3x) = 10 <=> 3x + 1 = 10.",
  "explanation": "$(x^3 + 1) - (x^3 - 3x) = 10 \\iff 3x + 1 = 10 \\iff 3x = 9 \\iff x = 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đa thức x^6 - y^6 có thể viết thành tích chứa thừa số nào sau đây?",
  "options": [
    "(x^3 - y^3)(x^3 + y^3)",
    "(x - y)(x^2 + xy + y^2)(x + y)(x^2 - xy + y^2)",
    "Cả hai câu trên đều đúng",
    "Chỉ có câu đầu đúng"
  ],
  "correct": 2,
  "hint": "x^6 - y^6 = (x^3)^2 - (y^3)^2, sau đó phân tích tiếp hai lập phương.",
  "explanation": "Ta có $x^6 - y^6 = (x^3 - y^3)(x^3 + y^3) = (x - y)(x^2 + xy + y^2)(x + y)(x^2 - xy + y^2)$. Cả hai dạng đều đúng!"
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### Ma trận đề kiểm tra 45 phút

| Cấp độ nhận thức | Trắc nghiệm (3 điểm) | Tự luận (7 điểm) | Tổng điểm |
| :--- | :--- | :--- | :--- |
| **Nhận biết** | 2 câu (0.6 đ): Nhận dạng hai hằng đẳng thức | Bài 1a (1.5 đ): Viết thành tích và khai triển trực tiếp | **2.1 điểm** |
| **Thông hiểu** | 4 câu (1.2 đ): Bình phương thiếu, tính nhanh | Bài 1b, Bài 2 (2.5 đ): Phân tích nhân tử, rút gọn | **3.7 điểm** |
| **Vận dụng** | 3 câu (0.9 đ): Tìm x, tính giá trị biểu thức | Bài 3 (2.0 đ): Rút gọn biểu thức nâng cao, tìm x | **2.9 điểm** |
| **Vận dụng cao** | 1 câu (0.3 đ): Phân tích đa tầng, chia hết | Bài 4 (1.0 đ): Chứng minh chia hết và bất đẳng thức | **1.3 điểm** |
| **Tổng cộng** | **10 câu (3.0 đ)** | **4 bài (7.0 đ)** | **10.0 điểm** |

---

### Đề bài tự luận (7.0 điểm)

**Bài 1 (2.5 điểm):**
a) Viết các đa thức sau dưới dạng tích:
- $A = x^3 + 125$ (0.75 điểm)
- $B = 8x^3 - 27y^3$ (0.75 điểm)
b) Tính nhanh tích sau: $C = (2x - 3)(4x^2 + 6x + 9)$ (1.0 điểm)

**Bài 2 (1.5 điểm):**
Rút gọn các biểu thức sau:
a) $M = (x - 1)(x^2 + x + 1) - (x + 2)(x^2 - 2x + 4)$ (0.75 điểm)
b) $N = (x + y)(x^2 - xy + y^2) + (x - y)(x^2 + xy + y^2) - 2x^3$ (0.75 điểm)

**Bài 3 (2.0 điểm):**
a) Tính giá trị của biểu thức $P = (2x - 1)(4x^2 + 2x + 1) - 4x(2x^2 - 1)$ tại $x = 15$. (1.0 điểm)
b) Tìm $x$, biết: $(x + 2)(x^2 - 2x + 4) - x(x - 3)(x + 3) = 26$. (1.0 điểm)

**Bài 4 (1.0 điểm):**
a) Chứng minh rằng với mọi số tự nhiên $n$, biểu thức $S = (n + 6)^3 - n^3$ luôn chia hết cho $6$. (0.5 điểm)
b) Cho $a + b + c = 0$. Chứng minh đẳng thức đẹp: $a^3 + b^3 + c^3 = 3abc$. (0.5 điểm)

---

### Barem điểm chi tiết & Hướng dẫn chấm tự luận

| Bài | Ý | Nội dung giải | Điểm |
| :--- | :--- | :--- | :--- |
| **Bài 1** | a | $A = x^3 + 5^3 = (x + 5)(x^2 - 5x + 25)$ | 0.75 đ |
| | | $B = (2x)^3 - (3y)^3 = (2x - 3y)(4x^2 + 6xy + 9y^2)$ | 0.75 đ |
| | b | $C = (2x - 3)[(2x)^2 + (2x)\cdot 3 + 3^2] = (2x)^3 - 3^3 = 8x^3 - 27$ | 1.0 đ |
| **Bài 2** | a | $(x - 1)(x^2 + x + 1) = x^3 - 1$<br>$(x + 2)(x^2 - 2x + 4) = x^3 + 8$<br>$M = (x^3 - 1) - (x^3 + 8) = x^3 - 1 - x^3 - 8 = -9$ | 0.75 đ |
| | b | $(x + y)(x^2 - xy + y^2) = x^3 + y^3$<br>$(x - y)(x^2 + xy + y^2) = x^3 - y^3$<br>$N = (x^3 + y^3) + (x^3 - y^3) - 2x^3 = 2x^3 - 2x^3 = 0$ | 0.75 đ |
| **Bài 3** | a | $(2x - 1)(4x^2 + 2x + 1) = 8x^3 - 1$<br>$4x(2x^2 - 1) = 8x^3 - 4x$<br>$P = (8x^3 - 1) - (8x^3 - 4x) = 4x - 1$<br>Tại $x = 15$: $P = 4 \cdot 15 - 1 = 60 - 1 = 59$ | 1.0 đ |
| | b | $(x + 2)(x^2 - 2x + 4) = x^3 + 8$<br>$x(x - 3)(x + 3) = x(x^2 - 9) = x^3 - 9x$<br>Phương trình trở thành: $(x^3 + 8) - (x^3 - 9x) = 26$<br>$\iff 9x + 8 = 26 \iff 9x = 18 \iff x = 2$. Kết luận $x = 2$. | 1.0 đ |
| **Bài 4** | a | Áp dụng hiệu hai lập phương:<br>$S = [(n + 6) - n][(n + 6)^2 + (n + 6)n + n^2]$<br>$S = 6 \cdot [(n + 6)^2 + n(n + 6) + n^2]$<br>Vì thừa số $6 \;\vdots\; 6$ và biểu thức trong ngoặc là số nguyên với mọi $n \in \mathbb{N}$, nên $S \;\vdots\; 6$. | 0.5 đ |
| | b | Vì $a + b + c = 0 \implies a + b = -c$.<br>Lập phương hai vế: $(a + b)^3 = (-c)^3 = -c^3$<br>$\iff a^3 + b^3 + 3ab(a + b) = -c^3$<br>Thay $a + b = -c$ vào: $a^3 + b^3 + 3ab(-c) = -c^3$<br>$\iff a^3 + b^3 - 3abc = -c^3 \iff a^3 + b^3 + c^3 = 3abc$ (đpcm). | 0.5 đ |
