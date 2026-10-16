---
title: 'Toán 8 Bài 4: Phép nhân đa thức'
description: 'Làm chủ kỹ thuật nhân đơn thức với đa thức, đa thức với đa thức Toán 8 Bài 4: Quy tắc nhân phân phối, rút gọn biểu thức, tính diện tích hình học, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Phép nhân đa thức
  - Nhân đơn thức với đa thức
  - Nhân đa thức với đa thức
  - Quy tắc phân phối
  - Kết nối tri thức
grade: 8
---

# Bài 4. Phép nhân đa thức

Khi một kiến trúc sư thiết kế một căn biệt thự hay một kỹ sư quy hoạch một công viên, nếu họ mở rộng chiều dài thêm $a$ mét và chiều rộng thêm $b$ mét thì diện tích đất thay đổi như thế nào? Biểu thức diện tích mới chính là tích của hai đa thức: $(x + a)(y + b) = xy + bx + ay + ab$.

Trong đại số học, phép nhân là chiếc đòn bẩy biến đổi những biểu thức tuyến tính bậc thấp thành những đa thức bậc cao giàu sức mạnh mô hình hóa. Nếu phép cộng và phép trừ (Bài 3) giữ nguyên bậc của các hạng tử thì **Phép nhân đa thức** sẽ nâng bậc của biểu thức lên, mở đường cho việc khám phá các hằng đẳng thức đáng nhớ ở các bài học tiếp theo.

Bài 4 sẽ giúp các em làm chủ hai quy tắc cốt lõi:
1. **Nhân đơn thức với đa thức:** Quy tắc phân phối kinh điển $A(B + C) = AB + AC$.
2. **Nhân đa thức với đa thức:** Nhân từng hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả lại.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 4: PHÉP NHÂN ĐA THỨC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đơn thức $\times$ Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhân đơn thức với <strong>từng hạng tử</strong> của đa thức:<br>  $$A(B + C - D) = AB + AC - AD$$<br>• Cộng các tích lại với nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đa thức $\times$ Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhân <strong>mỗi hạng tử</strong> của đa thức này với <strong>từng hạng tử</strong> của đa thức kia:<br>  $$(A + B)(C + D) = AC + AD + BC + BD$$<br>• Thu gọn các hạng tử đồng dạng sau khi nhân.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Quy tắc Lũy thừa cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhân hai lũy thừa cùng cơ số:<br>  $$x^m \cdot x^n = x^{m + n}$$<br>• Nhân hệ số với hệ số, biến với biến tương ứng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bậc của Đa thức tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bậc của đa thức tích bằng <strong>tổng bậc</strong> của hai đa thức nhân:<br>  $$\text{bậc}(A \cdot B) = \text{bậc}(A) + \text{bậc}(B)$$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Quy tắc phân phối số học:** Tính nhanh: $25 \cdot (40 + 4) = ?$
2. **Nhân đơn thức:** Tính kết quả: $(2x^2) \cdot (-3x^3) = ?$
3. **Nhân hai biến:** Kết quả của $(3xy) \cdot (4x^2 y^3)$ bằng bao nhiêu?
4. **Quy tắc dấu:** Dấu của tích $(-a) \cdot (-b)$ là dấu gì? Dấu của tích $(-a) \cdot b$ là dấu gì?
5. **Hình chữ nhật:** Một hình chữ nhật có chiều dài $x + 3$ và chiều rộng $x$. Biểu thức diện tích của nó là gì?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $25 \cdot 40 + 25 \cdot 4 = 1000 + 100 = 1100$.
> 2. $[2 \cdot (-3)] \cdot x^{2 + 3} = -6x^5$.
> 3. $(3 \cdot 4) \cdot (x \cdot x^2) \cdot (y \cdot y^3) = 12x^3 y^4$.
> 4. Tích hai số âm là số dương ($+ab$); tích số âm với số dương là số âm ($-ab$).
> 5. $S = x(x + 3) = x^2 + 3x$.

---

## I. Lý thuyết Trọng tâm

### 1. Phép nhân đơn thức với đa thức

> [!IMPORTANT]
> **QUY TẮC:**
> Muốn nhân một đơn thức với một đa thức, ta **nhân đơn thức với từng hạng tử của đa thức** rồi **cộng các tích với nhau**.
> 
> $$A(B + C - D) = A \cdot B + A \cdot C - A \cdot D$$

*Ví dụ:* Thực hiện phép nhân đơn thức $2xy$ với đa thức $(3x^2 - 4xy + y^2)$:
$$\begin{aligned}
2xy \cdot (3x^2 - 4xy + y^2) &= (2xy) \cdot (3x^2) + (2xy) \cdot (-4xy) + (2xy) \cdot (y^2) \\
&= 6x^3 y - 8x^2 y^2 + 2xy^3
\end{aligned}$$

---

### 2. Phép nhân đa thức với đa thức

> [!IMPORTANT]
> **QUY TẮC:**
> Muốn nhân một đa thức với một đa thức, ta **nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia**, rồi **cộng các tích với nhau**.
> 
> $$(A + B)(C + D) = A \cdot C + A \cdot D + B \cdot C + B \cdot D$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình diện tích hình học minh họa phép nhân (A + B)(C + D)">
    <rect x="60" y="30" width="400" height="160" fill="#f8fafc" stroke="#334155" stroke-width="2" />
    
    <!-- Đường chia dọc và ngang -->
    <line x1="260" y1="30" x2="260" y2="190" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="60" y1="120" x2="460" y2="120" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />

    <!-- 4 hình chữ nhật nhỏ -->
    <rect x="60" y="30" width="200" height="90" fill="#eff6ff" />
    <text x="160" y="80" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">A · C</text>

    <rect x="260" y="30" width="200" height="90" fill="#f0fdf4" />
    <text x="360" y="80" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">A · D</text>

    <rect x="60" y="120" width="200" height="70" fill="#fefce8" />
    <text x="160" y="160" text-anchor="middle" font-size="18" font-weight="700" fill="#ca8a04">B · C</text>

    <rect x="260" y="120" width="200" height="70" fill="#fdf2f8" />
    <text x="360" y="160" text-anchor="middle" font-size="18" font-weight="700" fill="#db2777">B · D</text>

    <!-- Nhãn kích thước ngoài -->
    <text x="40" y="75" font-size="16" font-weight="700" fill="#1e293b">A</text>
    <text x="40" y="160" font-size="16" font-weight="700" fill="#1e293b">B</text>
    <text x="160" y="20" font-size="16" font-weight="700" fill="#1e293b">C</text>
    <text x="360" y="20" font-size="16" font-weight="700" fill="#1e293b">D</text>
  </svg>
</div>

*Lưu ý quan trọng:*
Sau khi thực hiện xong phép nhân phân phối, nếu kết quả xuất hiện các hạng tử đồng dạng thì ta **bắt buộc phải thu gọn** đa thức đó!

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhân đơn thức với đa thức

**Phương pháp giải:**
Nhân hệ số với hệ số, nhân các biến cùng loại bằng cách cộng các số mũ ($x^m \cdot x^n = x^{m+n}$). Chú ý dấu của các đơn thức.

---

#### Bài toán 1:
Thực hiện các phép tính sau:
a) $2x^2 \cdot (3x^3 - 5x + 1)$
b) $-\frac{1}{3}xy \cdot (6x^2 y - 3xy^2 + 9y)$
c) $4x^2 y^3 \cdot \left(\frac{1}{2}x^2 - \frac{3}{4}xy + \frac{5}{2}y^2\right)$

**Lời giải:**

a) Ta có:
$$2x^2 \cdot (3x^3 - 5x + 1) = (2x^2)(3x^3) + (2x^2)(-5x) + (2x^2)(1)$$
$$= 6x^{2+3} - 10x^{2+1} + 2x^2 = 6x^5 - 10x^3 + 2x^2$$

b) Ta có:
$$-\frac{1}{3}xy \cdot (6x^2 y - 3xy^2 + 9y) = \left(-\frac{1}{3}xy\right)(6x^2 y) + \left(-\frac{1}{3}xy\right)(-3xy^2) + \left(-\frac{1}{3}xy\right)(9y)$$
$$= -2x^3 y^2 + x^2 y^3 - 3xy^2$$

c) Ta có:
$$4x^2 y^3 \cdot \left(\frac{1}{2}x^2 - \frac{3}{4}xy + \frac{5}{2}y^2\right) = \left(4 \cdot \frac{1}{2}\right)x^4 y^3 - \left(4 \cdot \frac{3}{4}\right)x^3 y^4 + \left(4 \cdot \frac{5}{2}\right)x^2 y^5$$
$$= 2x^4 y^3 - 3x^3 y^4 + 10x^2 y^5$$

---

### Dạng 2: Nhân đa thức với đa thức và thu gọn

**Phương pháp giải:**
1. Lấy từng hạng tử của đa thức thứ nhất nhân lần lượt với từng hạng tử của đa thức thứ hai.
2. Tìm và nhóm các đơn thức đồng dạng lại với nhau.
3. Cộng trừ hệ số để đưa đa thức về dạng thu gọn.

---

#### Bài toán 2:
Thực hiện các phép nhân đa thức sau rồi thu gọn kết quả:
a) $(2x - 3)(x^2 + 4x - 5)$
b) $(x - 2y)(x^2 + 2xy + 4y^2)$
c) $(3x^2 - 2xy + y^2)(2x - 3y)$

**Lời giải:**

a) Nhân từng hạng tử:
$$(2x - 3)(x^2 + 4x - 5) = 2x(x^2 + 4x - 5) - 3(x^2 + 4x - 5)$$
$$= (2x^3 + 8x^2 - 10x) - (3x^2 + 12x - 15)$$
$$= 2x^3 + 8x^2 - 10x - 3x^2 - 12x + 15$$
Thu gọn các hạng tử đồng dạng:
$$= 2x^3 + (8x^2 - 3x^2) + (-10x - 12x) + 15$$
$$= 2x^3 + 5x^2 - 22x + 15$$

b) Nhân từng hạng tử:
$$(x - 2y)(x^2 + 2xy + 4y^2) = x(x^2 + 2xy + 4y^2) - 2y(x^2 + 2xy + 4y^2)$$
$$= (x^3 + 2x^2 y + 4xy^2) - (2x^2 y + 4xy^2 + 8y^3)$$
$$= x^3 + 2x^2 y + 4xy^2 - 2x^2 y - 4xy^2 - 8y^3$$
$$= x^3 + (2x^2 y - 2x^2 y) + (4xy^2 - 4xy^2) - 8y^3$$
$$= x^3 - 8y^3$$
*(Nhận xét: Đây chính là hằng đẳng thức hiệu hai lập phương $A^3 - B^3$ mà các em sẽ học ở Bài 6!)*

c) Nhân từng hạng tử:
$$(3x^2 - 2xy + y^2)(2x - 3y) = 2x(3x^2 - 2xy + y^2) - 3y(3x^2 - 2xy + y^2)$$
$$= (6x^3 - 4x^2 y + 2xy^2) - (9x^2 y - 6xy^2 + 3y^3)$$
$$= 6x^3 - 4x^2 y + 2xy^2 - 9x^2 y + 6xy^2 - 3y^3$$
$$= 6x^3 + (-4x^2 y - 9x^2 y) + (2xy^2 + 6xy^2) - 3y^3$$
$$= 6x^3 - 13x^2 y + 8xy^2 - 3y^3$$

---

### Dạng 3: Rút gọn biểu thức và chứng minh giá trị không phụ thuộc vào biến

**Phương pháp giải:**
1. Khai triển tất cả các tích bằng phép nhân đa thức.
2. Bỏ ngoặc, đổi dấu cẩn thận.
3. Thu gọn toàn bộ biểu thức. Nếu kết quả là một số cụ thể (không còn chứa biến) $\implies$ Đã chứng minh xong!

---

#### Bài toán 3:
Chứng minh rằng giá trị của các biểu thức sau không phụ thuộc vào giá trị của biến $x$:
a) $A = (2x + 3)(x - 4) - 2x(x - 2) + x + 20$
b) $B = (x - 5)(2x + 3) - 2x(x - 3) + x + 7$

**Lời giải:**

a) Khai triển từng cụm biểu thức trong $A$:
- $(2x + 3)(x - 4) = 2x(x - 4) + 3(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.
- $-2x(x - 2) = -2x^2 + 4x$.

Thay vào biểu thức $A$:
$$A = (2x^2 - 5x - 12) - 2x^2 + 4x + x + 20$$
$$A = (2x^2 - 2x^2) + (-5x + 4x + x) + (-12 + 20)$$
$$A = 0 + 0 + 8 = 8$$
Giá trị của $A$ luôn bằng $8$ với mọi $x$. Vậy giá trị của $A$ không phụ thuộc vào $x$.

b) Khai triển biểu thức $B$:
- $(x - 5)(2x + 3) = 2x^2 + 3x - 10x - 15 = 2x^2 - 7x - 15$.
- $-2x(x - 3) = -2x^2 + 6x$.
Thay vào $B$:
$$B = 2x^2 - 7x - 15 - 2x^2 + 6x + x + 7$$
$$B = (2x^2 - 2x^2) + (-7x + 6x + x) + (-15 + 7)$$
$$B = 0 \cdot x^2 + 0 \cdot x - 8 = -8$$
Giá trị của $B$ luôn luôn bằng $-8$ với mọi giá trị của $x$.
Vậy giá trị của biểu thức $B$ không phụ thuộc vào biến $x$.

---

### Dạng 4: Bài toán hình học và thực tế tính diện tích

**Phương pháp giải:**
Biểu diễn các kích thước của hình theo các biến số, sau đó áp dụng công thức diện tích (hình chữ nhật: $S = a \cdot b$) và nhân các đa thức.

---

#### Bài toán 4:
Một hồ bơi hình chữ nhật có chiều dài ban đầu là $2x\text{ (m)}$ và chiều rộng ban đầu là $x\text{ (m)}$. Người ta xây một lối đi bộ bằng gạch chống trượt có chiều rộng $2\text{ m}$ bao quanh toàn bộ hồ bơi đó.
a) Viết biểu thức biểu thị chiều dài và chiều rộng của toàn bộ khu vực bao gồm cả hồ bơi và lối đi bộ.
b) Viết đa thức biểu thị diện tích của lối đi bộ bao quanh hồ bơi theo biến $x$.
c) Nếu $x = 12\text{ m}$ và chi phí lát gạch lối đi là $180\,000$ đồng/$\text{m}^2$, hãy tính tổng chi phí lát gạch lối đi bộ.

**Lời giải:**

a) Lối đi bộ rộng $2\text{ m}$ mở rộng đều về cả hai phía của chiều dài và chiều rộng:
- Chiều dài toàn bộ khu vực: $L = 2x + 2 + 2 = 2x + 4\text{ (m)}$.
- Chiều rộng toàn bộ khu vực: $W = x + 2 + 2 = x + 4\text{ (m)}$.

b) Diện tích của toàn bộ khu vực là:
$$S_{\text{tổng}} = L \cdot W = (2x + 4)(x + 4) = 2x(x + 4) + 4(x + 4) = 2x^2 + 8x + 4x + 16 = 2x^2 + 12x + 16\text{ (m}^2\text{)}$$
Diện tích mặt nước của hồ bơi là:
$$S_{\text{hồ}} = (2x) \cdot x = 2x^2\text{ (m}^2\text{)}$$
Diện tích của lối đi bộ là hiệu giữa diện tích toàn bộ khu vực và diện tích hồ bơi:
$$S_{\text{lối đi}} = S_{\text{tổng}} - S_{\text{hồ}} = (2x^2 + 12x + 16) - 2x^2 = 12x + 16\text{ (m}^2\text{)}$$
*(Biểu thức diện tích lối đi bộ là một đa thức bậc nhất rất thanh nhã: $12x + 16$).*

c) Khi $x = 12\text{ m}$, diện tích lối đi bộ là:
$$S_{\text{lối đi}} = 12(12) + 16 = 144 + 16 = 160\text{ (m}^2\text{)}$$
Tổng chi phí lát gạch lối đi bộ là:
$$T = 160 \cdot 180\,000 = 28\,800\,000\text{ (đồng)}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Thuật toán Nhân nhanh Karatsuba trong Siêu máy tính (1960)

Khi nhân hai số nguyên khổng lồ có hàng triệu chữ số (như trong giải mã mật mã ngân hàng):
- Phép nhân truyền thống học ở trường tiểu học đòi hỏi $O(n^2)$ phép tính nhân từng chữ số.
- Năm 1960, chàng sinh viên 23 tuổi người Nga Anatoly Karatsuba đã phát minh ra thuật toán chia để trị dựa trên phép nhân đa thức:
  $$(ax + b)(cx + d) = ac \cdot x^2 + [(a+b)(c+d) - ac - bd] \cdot x + bd$$
Thay vì phải thực hiện 4 phép nhân ($ac, ad, bc, bd$), Karatsuba chỉ cần đúng **3 phép nhân**! Thuật toán này giảm độ phức tạp xuống $O(n^{1{,}585})$, giúp máy tính tăng tốc độ tính toán gấp hàng triệu lần.

---

### Chuyên đề 2: Tích chập Đa thức (Polynomial Convolution) và Mạng nơ-ron CNN

Làm thế nào tính năng Face ID nhận diện khuôn mặt của bạn hay xe tự hành Tesla nhận diện biển báo giao thông?
Mạng nơ-ron tích chập (Convolutional Neural Network - CNN) thực hiện phép nhân tích chập giữa ma trận ảnh và bộ lọc:
- Về mặt toán học, phép tích chập (convolution) hai dãy số chính là **phép nhân hai đa thức**: Các hệ số của đa thức tích chính là kết quả của phép lọc tín hiệu!
- Bằng thuật toán Biến đổi Fourier Nhanh (FFT), phép nhân đa thức đưa độ phức tạp từ $O(n^2)$ xuống $O(n \log n)$, giúp xử lý hình ảnh video 4K trong thời gian thực.

---

### Chuyên đề 3: Phép Nhân Đa thức trong Mã sửa sai Reed - Solomon

Khi bạn quét mã QR thanh toán trên hóa đơn bị rách một góc, hoặc đĩa CD/Blu-ray bị xước nhẹ, làm thế nào máy đọc vẫn khôi phục lại $100\%$ dữ liệu gốc?
Dữ liệu số được mã hóa bằng **Mã Reed - Solomon**:
- Tin nhắn số được coi là các hệ số của một đa thức $P(x)$.
- Bên gửi nhân đa thức này với một đa thức sinh $G(x)$ để tạo ra các bit dự phòng kiểm tra.
- Khi tín hiệu bị nhiễu làm mất mát một số bit, thuật toán chia đa thức giải mã tìm ra chính xác vị trí lỗi và sửa lại nguyên vẹn không sai một bit nào!

---

### Chuyên đề 4: Mô hình Hóa Động lực học Tên lửa Đẩy Đa tầng

Khi phóng tên lửa Falcon 9 của SpaceX vào không gian:
- Khối lượng của tên lửa liên tục giảm do đốt nhiên liệu: $m(t) = m_0 - kt$.
- Vận tốc phụ thuộc vào thời gian và lực đẩy: $v(t) = v_0 + at$.
- Động lượng của tên lửa là tích của hai đa thức:
  $$p(t) = m(t) \cdot v(t) = (m_0 - kt)(v_0 + at) = m_0 v_0 + (m_0 a - kv_0)t - kat^2$$
Nhờ phân tích đa thức động lượng bậc hai này, máy tính điều khiển lực đẩy của động cơ Merlin để tên lửa hạ cánh thẳng đứng ngược lại bệ phóng tự động!

---

### Chuyên đề 5: Cấu trúc Đại số Đại số Tích phân Tensor

Trong vật lý lý thuyết và cơ học lượng tử, tích của hai hàm sóng hoặc hai ten-xơ được xây dựng trực tiếp từ phép nhân đa thức phân phối:
$$(A \otimes B)_{ij} = A_i \cdot B_j$$
Phép nhân này bảo toàn tính chất tuyến tính và định hình nên toàn bộ không gian Hilbert mô tả sự vướng víu lượng tử (Quantum Entanglement) — hiện tượng mà Einstein gọi là *"tác động ma quái từ xa"*.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 4: Phép nhân đa thức (Toán 8)",
  "questions": [
    {
      "question": "Kết quả của phép nhân 3x^2 * (2x^3 - 5x + 1) là:",
      "options": [
        "6x^5 - 15x^3 + 3x^2",
        "6x^6 - 15x^2 + 3x^2",
        "6x^5 - 15x^2 + 1",
        "5x^5 - 2x^3 + 4x^2"
      ],
      "answer": 0,
      "hint": "Nhân phân phối: (3x^2)(2x^3) + (3x^2)(-5x) + (3x^2)(1). Cộng các số mũ.",
      "explanation": "$3x^2(2x^3 - 5x + 1) = 6x^{2+3} - 15x^{2+1} + 3x^2 = 6x^5 - 15x^3 + 3x^2$."
    },
    {
      "question": "Kết quả của phép nhân (x - 3)(x + 5) sau khi thu gọn là:",
      "options": [
        "x^2 - 15",
        "x^2 + 2x - 15",
        "x^2 - 2x - 15",
        "x^2 + 8x - 15"
      ],
      "answer": 1,
      "hint": "(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15.",
      "explanation": "$(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15$."
    },
    {
      "question": "Bậc của đa thức tích P = (2x^3 - 5x + 1)(3x^2 - 4) bằng:",
      "options": [
        "6",
        "5",
        "4",
        "3"
      ],
      "answer": 1,
      "hint": "Bậc của tích bằng tổng bậc của hai đa thức: 3 + 2 = 5.",
      "explanation": "Đa thức thứ nhất có bậc 3, đa thức thứ hai có bậc 2. Bậc của đa thức tích là $3 + 2 = 5$."
    },
    {
      "question": "Khai triển và thu gọn (2x - y)(x + 2y) ta được:",
      "options": [
        "2x^2 - 2y^2",
        "2x^2 + 3xy - 2y^2",
        "2x^2 - 3xy - 2y^2",
        "2x^2 + 5xy - 2y^2"
      ],
      "answer": 1,
      "hint": "2x(x + 2y) - y(x + 2y) = 2x^2 + 4xy - xy - 2y^2.",
      "explanation": "$(2x - y)(x + 2y) = 2x^2 + 4xy - xy - 2y^2 = 2x^2 + 3xy - 2y^2$."
    },
    {
      "question": "Giá trị của biểu thức A = (x - 2)(x^2 + 2x + 4) tại x = 3 bằng:",
      "options": [
        "19",
        "27",
        "1",
        "35"
      ],
      "answer": 0,
      "hint": "Thu gọn tích: (x - 2)(x^2 + 2x + 4) = x^3 - 8. Thay x = 3: 3^3 - 8 = 27 - 8 = 19.",
      "explanation": "Ta có $(x - 2)(x^2 + 2x + 4) = x^3 - 8$. Với $x = 3$, giá trị là $3^3 - 8 = 27 - 8 = 19$."
    },
    {
      "question": "Rút gọn biểu thức B = x(x - y) + y(x + y) ta được:",
      "options": [
        "x^2 + y^2",
        "x^2 - y^2",
        "x^2 + 2xy + y^2",
        "x^2 - 2xy + y^2"
      ],
      "answer": 0,
      "hint": "x^2 - xy + xy + y^2 = x^2 + y^2.",
      "explanation": "$B = x^2 - xy + xy + y^2 = x^2 + y^2$."
    },
    {
      "question": "Biểu thức C = (x - 1)(x + 2) - x(x + 1) có giá trị bằng:",
      "options": [
        "2",
        "-2",
        "2x - 2",
        "0"
      ],
      "answer": 1,
      "hint": "(x^2 + x - 2) - (x^2 + x) = -2.",
      "explanation": "$C = (x^2 + 2x - x - 2) - (x^2 + x) = x^2 + x - 2 - x^2 - x = -2$."
    },
    {
      "question": "Cho (x + a)(x + 3) = x^2 + 5x + 6 với mọi x. Giá trị của hằng số a là:",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "hint": "(x + a)(x + 3) = x^2 + (a + 3)x + 3a. So sánh hệ số: 3a = 6 => a = 2.",
      "explanation": "Khai triển vế trái: $x^2 + (a + 3)x + 3a = x^2 + 5x + 6$. Đồng nhất hệ số: $3a = 6 \\implies a = 2$ và $a + 3 = 5 \\implies a = 2$."
    },
    {
      "question": "Một hình hộp chữ nhật có ba kích thước là x, x + 1, x + 2. Đa thức biểu thị thể tích của khối hộp là:",
      "options": [
        "x^3 + 3x^2 + 2x",
        "x^3 + 2x",
        "3x + 3",
        "x^3 + 3x + 2"
      ],
      "answer": 0,
      "hint": "V = x(x + 1)(x + 2) = (x^2 + x)(x + 2) = x^3 + 2x^2 + x^2 + 2x.",
      "explanation": "$V = x(x + 1)(x + 2) = (x^2 + x)(x + 2) = x^3 + 2x^2 + x^2 + 2x = x^3 + 3x^2 + 2x$."
    },
    {
      "question": "Rút gọn biểu thức (a + b)(a - b) ta được:",
      "options": [
        "a^2 + b^2",
        "a^2 - b^2",
        "a^2 - 2ab + b^2",
        "a^2 + 2ab + b^2"
      ],
      "answer": 1,
      "hint": "a(a - b) + b(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2.",
      "explanation": "$(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Thực hiện các phép nhân sau rồi thu gọn kết quả:
a) $3x^2 y \cdot (2x^3 - xy + 4y^2)$
b) $(2x - 5)(3x^2 + x - 2)$
c) $(x^2 - 3xy + 2y^2)(x + 2y)$

### Bài tập 2:
Rút gọn các biểu thức sau:
a) $A = (x - 2)(x + 3) - (x + 1)(x - 4)$
b) $B = 2x(x - y) + y(2x - y) - (2x^2 - y^2)$
c) Chứng minh rằng giá trị của biểu thức $C = (x - 3)(x^2 + 3x + 9) - x^3 + 20$ không phụ thuộc vào giá trị của biến $x$.

### Bài tập 3 (Toán thực tế):
Một mảnh đất hình chữ nhật có chiều dài là $3x + 5\text{ (m)}$ và chiều rộng là $2x + 3\text{ (m)}$. Người ta bớt mỗi chiều $2\text{ m}$ để làm sân vườn và trồng cỏ.
a) Viết đa thức biểu thị diện tích mảnh đất ban đầu.
b) Viết đa thức biểu thị diện tích mảnh đất còn lại sau khi bớt.
c) Viết đa thức biểu thị diện tích phần đất dùng để làm sân vườn và trồng cỏ.
