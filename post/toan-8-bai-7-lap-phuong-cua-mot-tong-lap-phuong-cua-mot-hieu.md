---
title: 'Toán 8 Bài 7: Lập phương của một tổng. Lập phương của một hiệu'
description: 'Khám phá hai hằng đẳng thức bậc 3 kinh điển: Lập phương của một tổng và Lập phương của một hiệu. Bản chất thể tích hình học không gian, công thức biến thể Cauchy, 4 dạng toán thực tế và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Hằng đẳng thức
  - Lập phương của một tổng
  - Lập phương của một hiệu
  - Khối lập phương
  - Kết nối tri thức
grade: 8
---

# Bài 7. Lập phương của một tổng. Lập phương của một hiệu

Nếu như Bài 6 đưa chúng ta vào thế giới phẳng 2 chiều của diện tích với **bình phương** $(a + b)^2$, thì Bài 7 sẽ nâng tầm tư duy đại số lên **không gian 3 chiều** với phép tính **lập phương** $(a + b)^3$ và $(a - b)^3$.

Hãy tưởng tượng bạn có một khối lập phương Rubik lớn có cạnh bằng $a + b$. Thể tích toàn phần của khối Rubik này là $(a + b)^3$. Khi tháo rời từng khối nhỏ cấu thành, bạn sẽ nhận được bao nhiêu khối lập phương con và bao nhiêu khối hộp chữ nhật? Câu trả lời đại số kỳ diệu:
$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

Bài học này sẽ trang bị cho các em:
1. **Lập phương của một tổng:** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$.
2. **Lập phương của một hiệu:** $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$.
3. **Các công thức biến thể thu gọn:** $(a \pm b)^3 = a^3 \pm b^3 \pm 3ab(a \pm b)$ — công cụ vàng để giải các bài toán tính giá trị biểu thức đối xứng.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 7: LẬP PHƯƠNG CỦA MỘT TỔNG & MỘT HIỆU</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Lập phương của một tổng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$<br>• Tất cả các dấu đều là dấu <strong>cộng (+)</strong>.<br>• Biến thể: $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">2. Lập phương của một hiệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$<br>• Dấu đan xen nhịp nhàng: <strong>(+) $\to$ (-) $\to$ (+) $\to$ (-)</strong>.<br>• Biến thể: $(a - b)^3 = a^3 - b^3 - 3ab(a - b)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">3. Quy tắc bậc lũy thừa</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Số mũ của $a$ giảm dần: $3 \to 2 \to 1 \to 0$.<br>• Số mũ của $b$ tăng dần: $0 \to 1 \to 2 \to 3$.<br>• Tổng số mũ của mỗi hạng tử luôn bằng $3$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tính chất dấu đối xứng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với lũy thừa bậc lẻ: $(a - b)^3 = -(b - a)^3$.<br>• Khác với lũy thừa bậc chẵn: $(a - b)^2 = (b - a)^2$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Lũy thừa:** Tính kết quả của $(2x)^3$. Đáp án là $2x^3$, $6x^3$ hay $8x^3$?
2. **Khai triển tích:** Bằng cách viết $(a + b)^3 = (a + b)^2(a + b)$, hãy nhân đa thức để tìm kết quả.
3. **Quy tắc dấu:** Cho biết $(-1)^3$ bằng bao nhiêu? Từ đó nhận xét dấu của $(-b)^3$.
4. **Phát hiện lỗi sai:** Học sinh An viết $(x - 2)^3 = x^3 - 8$. Bạn An đã bỏ quên những hạng tử nào?
5. **Tính nhẩm:** Bạn có nhận xét gì về $11^3$? Gợi ý: viết $11 = 10 + 1$.

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $(2x)^3 = 2^3 \cdot x^3 = 8x^3$.
> 2. $(a^2 + 2ab + b^2)(a + b) = a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3 = a^3 + 3a^2b + 3ab^2 + b^3$.
> 3. $(-1)^3 = -1$. Do đó $(-b)^3 = -b^3$.
> 4. An đã quên hai hạng tử chứa tích chéo ở giữa: $-3x^2(2) = -6x^2$ và $+3x(2^2) = +12x$.
> 5. $11^3 = (10 + 1)^3 = 1000 + 3(100) + 3(10) + 1 = 1331$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học không gian

### 1. Lập phương của một tổng

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$$

- **Quy tắc bằng lời:** Lập phương của một tổng hai biểu thức bằng:
  - Lập phương biểu thức thứ nhất ($A^3$)
  - Cộng ba lần tích của bình phương biểu thức thứ nhất với biểu thức thứ hai ($+3A^2B$)
  - Cộng ba lần tích của biểu thức thứ nhất với bình phương biểu thức thứ hai ($+3AB^2$)
  - Cộng lập phương biểu thức thứ hai ($+B^3$).

#### Công thức biến thể Cauchy hữu ích:
Nhóm hai hạng tử giữa lại: $3A^2B + 3AB^2 = 3AB(A + B)$.
Ta được:
$$(A + B)^3 = A^3 + B^3 + 3AB(A + B)$$
$$\iff A^3 + B^3 = (A + B)^3 - 3AB(A + B)$$
*Công thức này cực kỳ lợi hại khi biết tổng $A + B$ và tích $A \cdot B$ mà cần tính tổng hai lập phương!*

#### Ý nghĩa hình học không gian (Thể tích):
Xét một khối lập phương lớn có cạnh dài $a + b$. Thể tích của nó là $V = (a + b)^3$.
Khi cắt khối lập phương lớn dọc theo các mặt phẳng song song với các mặt, khối lớn được phân rã thành $8$ khối con gồm:
- $1$ khối lập phương nhỏ cạnh $a$, thể tích $a^3$.
- $1$ khối lập phương nhỏ cạnh $b$, thể tích $b^3$.
- $3$ khối hộp chữ nhật có đáy hình vuông cạnh $a$ và chiều cao $b$, thể tích mỗi khối là $a^2b$.
- $3$ khối hộp chữ nhật có đáy hình vuông cạnh $b$ và chiều cao $a$, thể tích mỗi khối là $ab^2$.
Tổng thể tích $8$ khối con: $a^3 + 3a^2b + 3ab^2 + b^3 = (a + b)^3$.

---

### 2. Lập phương của một hiệu

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$$

- **Quy tắc bằng lời:** Lập phương của một hiệu hai biểu thức bằng:
  - Lập phương biểu thức thứ nhất ($A^3$)
  - Trừ ba lần tích của bình phương biểu thức thứ nhất với biểu thức thứ hai ($-3A^2B$)
  - Cộng ba lần tích của biểu thức thứ nhất với bình phương biểu thức thứ hai ($+3AB^2$)
  - Trừ lập phương biểu thức thứ hai ($-B^3$).

#### Mẹo ghi nhớ quy tắc dấu:
Các dấu trong khai triển lập phương của một hiệu luôn **đan xen**:
$$+A^3 \quad -3A^2B \quad +3AB^2 \quad -B^3$$
Hạng tử nào chứa lũy thừa lẻ của $B$ ($B^1$ và $B^3$) mang dấu trừ "$-$"; hạng tử chứa lũy thừa chẵn của $B$ ($B^0$ và $B^2$) mang dấu cộng "$+$".

#### Công thức biến thể Cauchy cho hiệu:
$$(A - B)^3 = A^3 - B^3 - 3AB(A - B)$$
$$\iff A^3 - B^3 = (A - B)^3 + 3AB(A - B)$$

#### So sánh quan trọng về dấu đối xứng:
- Bình phương (mũ chẵn): $(A - B)^2 = (B - A)^2$.
- Lập phương (mũ lẻ):
$$(A - B)^3 = -(B - A)^3$$
Ví dụ: $(x - 4)^3 = -(4 - x)^3$.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Khai triển biểu thức theo hằng đẳng thức

**Phương pháp giải:**
1. Xác định rõ biểu thức $A$ và $B$.
2. Đặt các đơn thức phức tạp vào dấu ngoặc: $(2x)^3 = 8x^3$, $3(2x)^2(3y) = 3(4x^2)(3y) = 36x^2y$.
3. Cẩn thận tính toán từng hệ số số học trước khi ghép với phần biến.

---

#### Bài toán 1:
Khai triển các biểu thức sau:
a) $(x + 2y)^3$
b) $\left(2x - \frac{1}{3}\right)^3$
c) $(3x^2 - y)^3$

**Lời giải:**

a) Ta có $A = x$ và $B = 2y$:
$$(x + 2y)^3 = x^3 + 3 \cdot x^2 \cdot (2y) + 3 \cdot x \cdot (2y)^2 + (2y)^3$$
$$= x^3 + 6x^2y + 3x \cdot (4y^2) + 8y^3$$
$$= x^3 + 6x^2y + 12xy^2 + 8y^3$$

b) Ta có $A = 2x$ và $B = \frac{1}{3}$:
$$\left(2x - \frac{1}{3}\right)^3 = (2x)^3 - 3 \cdot (2x)^2 \cdot \frac{1}{3} + 3 \cdot (2x) \cdot \left(\frac{1}{3}\right)^2 - \left(\frac{1}{3}\right)^3$$
$$= 8x^3 - 3 \cdot (4x^2) \cdot \frac{1}{3} + 6x \cdot \frac{1}{9} - \frac{1}{27}$$
$$= 8x^3 - 4x^2 + \frac{2}{3}x - \frac{1}{27}$$

c) Ta có $A = 3x^2$ và $B = y$:
$$(3x^2 - y)^3 = (3x^2)^3 - 3 \cdot (3x^2)^2 \cdot y + 3 \cdot (3x^2) \cdot y^2 - y^3$$
$$= 27x^6 - 3 \cdot (9x^4) \cdot y + 9x^2y^2 - y^3$$
$$= 27x^6 - 27x^4y + 9x^2y^2 - y^3$$

---

### Dạng 2: Thu gọn đa thức về dạng lập phương của một tổng hoặc hiệu

**Phương pháp giải:**
1. Đa thức phải có 4 hạng tử.
2. Tìm hai hạng tử đầu và cuối là lập phương của hai biểu thức ($A^3$ và $B^3$).
3. Kiểm tra hai hạng tử ở giữa xem có khớp với $3A^2B$ và $3AB^2$ (hoặc dấu đối với hiệu) hay không.
4. Thu gọn về $(A + B)^3$ hoặc $(A - B)^3$.

---

#### Bài toán 2:
Viết các đa thức sau dưới dạng lập phương của một tổng hoặc một hiệu:
a) $x^3 + 9x^2 + 27x + 27$
b) $8x^3 - 36x^2y + 54xy^2 - 27y^3$
c) $x^3 - 3x^2 + 3x - 1$

**Lời giải:**

a) Ta nhận thấy:
- Hạng tử đầu: $x^3 = (x)^3 \implies A = x$.
- Hạng tử cuối: $27 = 3^3 \implies B = 3$.
- Kiểm tra các hạng tử giữa:
  - $3A^2B = 3 \cdot x^2 \cdot 3 = 9x^2$ (khớp).
  - $3AB^2 = 3 \cdot x \cdot 3^2 = 27x$ (khớp).
Vậy:
$$x^3 + 9x^2 + 27x + 27 = (x + 3)^3$$

b) Ta có:
- $8x^3 = (2x)^3 \implies A = 2x$.
- $27y^3 = (3y)^3 \implies B = 3y$.
- Dấu các hạng tử đan xen: $+ \quad - \quad + \quad -$.
- Kiểm tra:
  - $3A^2B = 3 \cdot (2x)^2 \cdot (3y) = 3 \cdot 4x^2 \cdot 3y = 36x^2y$ (khớp).
  - $3AB^2 = 3 \cdot (2x) \cdot (3y)^2 = 6x \cdot 9y^2 = 54xy^2$ (khớp).
Vậy:
$$8x^3 - 36x^2y + 54xy^2 - 27y^3 = (2x - 3y)^3$$

c) Nhận dạng nhanh:
$$x^3 - 3x^2 + 3x - 1 = x^3 - 3 \cdot x^2 \cdot 1 + 3 \cdot x \cdot 1^2 - 1^3 = (x - 1)^3$$

---

### Dạng 3: Rút gọn biểu thức và tính giá trị nhanh

**Phương pháp giải:**
Khai triển hằng đẳng thức rồi triệt tiêu các hạng tử đồng dạng, hoặc thu gọn biểu thức thành $(x \pm a)^3$ trước rồi mới thay giá trị $x$ vào để tính toán cực nhanh.

---

#### Bài toán 3:
a) Rút gọn biểu thức: $M = (x + 2)^3 - (x - 2)^3 - 12x^2$
b) Tính giá trị của biểu thức $P = x^3 - 6x^2 + 12x - 8$ tại $x = 102$.
c) Cho $a + b = 5$ và $ab = 6$. Tính giá trị của biểu thức $S = a^3 + b^3$.

**Lời giải:**

a) Khai triển hai lập phương:
- $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$
- $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$
Trừ hai đa thức:
$$(x + 2)^3 - (x - 2)^3 = (x^3 - x^3) + (6x^2 - (-6x^2)) + (12x - 12x) + (8 - (-8))$$
$$= 12x^2 + 16$$
Thay vào biểu thức $M$:
$$M = (12x^2 + 16) - 12x^2 = 16$$
*(Giá trị của biểu thức $M$ không phụ thuộc vào biến $x$ và luôn bằng $16$!)*

b) Ta nhận thấy biểu thức $P$ có dạng lập phương của một hiệu:
$$P = x^3 - 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 - 2^3 = (x - 2)^3$$
Thay $x = 102$ vào $P$:
$$P = (102 - 2)^3 = 100^3 = 1\,000\,000$$
*(Tính nhẩm siêu tốc chỉ trong 3 giây nhờ đưa về hằng đẳng thức!)*

c) Sử dụng công thức biến thể Cauchy:
$$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$$
Thay $a + b = 5$ và $ab = 6$ vào:
$$S = 5^3 - 3 \cdot 6 \cdot 5 = 125 - 90 = 35$$

---

### Dạng 4: Tìm $x$ và chứng minh bất đẳng thức

**Phương pháp giải:**
Đưa phương trình về dạng $(x + a)^3 = k$ hoặc rút gọn hai vế để triệt tiêu các bậc cao $x^3$, $x^2$, đưa về phương trình bậc nhất tìm $x$.

---

#### Bài toán 4:
Tìm $x$, biết:
a) $(x - 1)^3 + 3(x - 1)^2 + 3(x - 1) + 1 = 64$
b) $(x + 1)^3 - (x - 1)^3 - 6(x - 2)^2 = 32$

**Lời giải:**

a) Đặt $u = x - 1$. Vế trái trở thành:
$$u^3 + 3u^2 + 3u + 1 = (u + 1)^3$$
Thay lại $u = x - 1$:
$$[(x - 1) + 1]^3 = x^3$$
Do đó phương trình tương đương:
$$x^3 = 64$$
Vì $64 = 4^3$, nên $x = 4$.
Vậy nghiệm của phương trình là $x = 4$.

b) Khai triển từng cụm:
- $(x + 1)^3 - (x - 1)^3 = (x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1) = 6x^2 + 2$.
- $6(x - 2)^2 = 6(x^2 - 4x + 4) = 6x^2 - 24x + 24$.
Thay vào phương trình ban đầu:
$$(6x^2 + 2) - (6x^2 - 24x + 24) = 32$$
$$\iff 6x^2 + 2 - 6x^2 + 24x - 24 = 32$$
$$\iff 24x - 22 = 32$$
$$\iff 24x = 54 \iff x = \frac{54}{24} = \frac{9}{4}$$
Vậy $x = \frac{9}{4}$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Kỹ thuật chế tạo cơ khí: Sai số thể tích do giãn nở nhiệt
Khi nhiệt độ tăng, cạnh của một khối hợp kim lập phương dãn nở thêm một lượng nhỏ $\Delta a = \epsilon$. Thể tích mới của khối hợp kim là:
$$V' = (a + \epsilon)^3 = a^3 + 3a^2\epsilon + 3a\epsilon^2 + \epsilon^3$$
Vì $\epsilon$ rất nhỏ so với $a$, các kỹ sư cơ khí chính xác bỏ qua các số hạng bậc cao $\epsilon^2$ và $\epsilon^3$, thu được công thức gần đúng tuyến tính:
$$\Delta V \approx 3a^2\epsilon$$
Đây chính là lý do vì sao hệ số nở khối xấp xỉ bằng $3$ lần hệ số nở dài trong vật lý nhiệt học!

### 2. Thiết kế bao bì & Tối ưu hóa đóng gói kho vận
Một công ty bao bì sản xuất thùng carton hình lập phương có cạnh $x$ dm. Khi khách hàng yêu cầu tăng chiều dài mỗi cạnh thêm $1$ dm ($x + 1$) để chứa thêm lớp mút chống sốc, thể tích thùng tăng thêm bao nhiêu?
$$\Delta V = (x + 1)^3 - x^3 = (x^3 + 3x^2 + 3x + 1) - x^3 = 3x^2 + 3x + 1\text{ (dm}^3\text{)}$$
Biểu thức này cho phép phần mềm quản lý kho tự động tính toán dung tích bổ sung cần chuẩn bị trên xe tải.

### 3. Công nghệ chip bán dẫn: Định luật Moore trong không gian 3D (3D NAND Flash)
Trong bộ nhớ flash của điện thoại thông minh hiện đại, các bóng bán dẫn được xếp chồng lên nhau theo cả 3 chiều không gian (3D NAND). Khi kích thước một khối nhớ lập phương mở rộng từ $n$ lên $n + 1$ đơn vị vi mô, số lượng ô nhớ tăng thêm một lượng bằng $3n^2 + 3n + 1$, giúp dung lượng thẻ nhớ tăng vọt từ gigabyte lên terabyte mà diện tích chip không đổi.

### 4. Hóa học & Khí động học: Tốc độ hòa tan của tinh thể
Tốc độ tan của một tinh thể muối hình lập phương phụ thuộc vào diện tích bề mặt $S = 6a^2$, trong khi khối lượng phụ thuộc vào thể tích $V = a^3$. Tỉ số diện tích trên thể tích:
$$\frac{S}{V} = \frac{6a^2}{a^3} = \frac{6}{a}$$
Khi hạt muối bị nghiền nhỏ (cạnh $a$ giảm), tỉ số $\frac{S}{V}$ tăng vọt, giải thích vì sao đường cát tan nhanh hơn rất nhiều so với đường phèn nguyên khối!

### 5. Tam giác Pascal & Nhị thức Newton
Các hệ số của lập phương:
$$(a + b)^0 = 1$$
$$(a + b)^1 = 1a + 1b$$
$$(a + b)^2 = 1a^2 + 2ab + 1b^2$$
$$(a + b)^3 = 1a^3 + 3a^2b + 3ab^2 + 1b^3$$
Dãy số hệ số $1 - 3 - 3 - 1$ chính là hàng thứ 3 của **Tam giác Pascal** huyền thoại. Hiểu được quy luật này, các em có thể dễ dàng khai triển các lũy thừa bậc cao hơn như $(a + b)^4$ hay $(a + b)^5$ trong tương lai!

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Khai triển của hằng đẳng thức $(x + 1)^3$ là:",
  "options": [
    "x^3 + 1",
    "x^3 + 3x^2 + 3x + 1",
    "x^3 + x^2 + x + 1",
    "x^3 + 3x + 1"
  ],
  "correct": 1,
  "hint": "Áp dụng công thức (A + B)^3 với A = x và B = 1.",
  "explanation": "$(x + 1)^3 = x^3 + 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 + 1^3 = x^3 + 3x^2 + 3x + 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Kết quả khai triển biểu thức $(2x - 1)^3$ là:",
  "options": [
    "8x^3 - 1",
    "8x^3 - 12x^2 + 6x - 1",
    "8x^3 + 12x^2 - 6x + 1",
    "6x^3 - 12x^2 + 6x - 1"
  ],
  "correct": 1,
  "hint": "Chú ý (2x)^3 = 8x^3 và 3(2x)^2(1) = 12x^2.",
  "explanation": "$(2x - 1)^3 = (2x)^3 - 3 \\cdot (2x)^2 \\cdot 1 + 3 \\cdot (2x) \\cdot 1^2 - 1^3 = 8x^3 - 12x^2 + 6x - 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đa thức x^3 - 6x^2y + 12xy^2 - 8y^3 được thu gọn thành:",
  "options": [
    "(x - 2y)^3",
    "(x + 2y)^3",
    "(x - 8y)^3",
    "(x - 4y)^3"
  ],
  "correct": 0,
  "hint": "Hạng tử đầu là x^3, hạng tử cuối là (2y)^3 với các dấu đan xen (+, -, +, -).",
  "explanation": "Ta có $A = x, B = 2y$. Kiểm tra $3A^2B = 6x^2y$ và $3AB^2 = 12xy^2$. Vậy đa thức bằng $(x - 2y)^3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính giá trị của biểu thức A = x^3 + 3x^2 + 3x + 1 tại x = 99:",
  "options": [
    "10000",
    "100000",
    "1000000",
    "999999"
  ],
  "correct": 2,
  "hint": "Thu gọn A = (x + 1)^3 rồi thay x = 99.",
  "explanation": "$A = (x + 1)^3 = (99 + 1)^3 = 100^3 = 1\\,000\\,000$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khẳng định nào sau đây là ĐÚNG với mọi x và y?",
  "options": [
    "(x - y)^3 = (y - x)^3",
    "(x - y)^3 = -(y - x)^3",
    "(x + y)^3 = x^3 + y^3",
    "(x - y)^3 = x^3 - y^3"
  ],
  "correct": 1,
  "hint": "Lũy thừa bậc lẻ đổi dấu khi đổi thứ tự phép trừ: (A - B)^3 = -(B - A)^3.",
  "explanation": "Vì $(x - y) = -(y - x)$, khi nâng lên lũy thừa bậc ba ta có $[-(y - x)]^3 = -(y - x)^3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho x + y = 3 và xy = 2. Giá trị của biểu thức x^3 + y^3 là:",
  "options": [
    "9",
    "27",
    "15",
    "18"
  ],
  "correct": 0,
  "hint": "Sử dụng x^3 + y^3 = (x + y)^3 - 3xy(x + y).",
  "explanation": "$x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 3^3 - 3 \\cdot 2 \\cdot 3 = 27 - 18 = 9$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Hệ số của x^2y trong khai triển của (2x + 3y)^3 là:",
  "options": [
    "18",
    "36",
    "54",
    "24"
  ],
  "correct": 1,
  "hint": "Hạng tử chứa x^2y là 3 \\cdot (2x)^2 \\cdot (3y) = 3 \\cdot 4 \\cdot 3 \\cdot x^2y.",
  "explanation": "$3 \\cdot (2x)^2 \\cdot (3y) = 3 \\cdot 4x^2 \\cdot 3y = 36x^2y$. Hệ số là 36."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Rút gọn biểu thức Q = (x + 1)^3 - (x - 1)^3 - 6x^2 ta được:",
  "options": [
    "0",
    "2",
    "6",
    "8"
  ],
  "correct": 1,
  "hint": "Khai triển hai lập phương rồi trừ nhau: (x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1) = 6x^2 + 2.",
  "explanation": "$(x + 1)^3 - (x - 1)^3 = 6x^2 + 2$. Khi đó $Q = (6x^2 + 2) - 6x^2 = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Điền biểu thức thích hợp vào dấu * để được hằng đẳng thức: 27x^3 - * + 9x - 1 = (3x - 1)^3",
  "options": [
    "27x^2",
    "18x^2",
    "9x^2",
    "3x^2"
  ],
  "correct": 0,
  "hint": "Hạng tử thứ hai là 3A^2B = 3 \\cdot (3x)^2 \\cdot 1 = 3 \\cdot 9x^2 = 27x^2.",
  "explanation": "Hạng tử mang dấu trừ thứ hai là $3 \\cdot (3x)^2 \\cdot 1 = 27x^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tìm x biết (x - 2)^3 = -27:",
  "options": [
    "x = 5",
    "x = 1",
    "x = -1",
    "x = -5"
  ],
  "correct": 2,
  "hint": "Vì (-3)^3 = -27 nên x - 2 = -3.",
  "explanation": "$(x - 2)^3 = (-3)^3 \\iff x - 2 = -3 \\iff x = -1$."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### Ma trận đề kiểm tra 45 phút

| Cấp độ nhận thức | Trắc nghiệm (3 điểm) | Tự luận (7 điểm) | Tổng điểm |
| :--- | :--- | :--- | :--- |
| **Nhận biết** | 2 câu (0.6 đ): Nhận dạng công thức lập phương | Bài 1a (1.5 đ): Khai triển trực tiếp | **2.1 điểm** |
| **Thông hiểu** | 4 câu (1.2 đ): Đan xen dấu, thu gọn đa thức | Bài 1b, Bài 2 (2.5 đ): Viết dạng lập phương, tính nhanh | **3.7 điểm** |
| **Vận dụng** | 3 câu (0.9 đ): Tìm x, rút gọn biểu thức | Bài 3 (2.0 đ): Rút gọn và tìm x phức tạp | **2.9 điểm** |
| **Vận dụng cao** | 1 câu (0.3 đ): Biểu thức đối xứng Cauchy | Bài 4 (1.0 đ): Tính giá trị cực trị, Cauchy mở rộng | **1.3 điểm** |
| **Tổng cộng** | **10 câu (3.0 đ)** | **4 bài (7.0 đ)** | **10.0 điểm** |

---

### Đề bài tự luận (7.0 điểm)

**Bài 1 (2.5 điểm):**
Khai triển các biểu thức sau thành đa thức:
a) $(x + 3y)^3$ (1.0 điểm)
b) $\left(2x - \frac{1}{2}\right)^3$ (1.0 điểm)
c) $(-x - 2)^3$ (0.5 điểm)

**Bài 2 (1.5 điểm):**
a) Viết đa thức sau dưới dạng lập phương của một tổng hoặc hiệu:
$$E = x^3 - 12x^2 + 48x - 64$$ (0.75 điểm)
b) Tính nhanh giá trị của biểu thức $F = 8x^3 + 12x^2 + 6x + 1$ tại $x = 49.5$. (0.75 điểm)

**Bài 3 (2.0 điểm):**
a) Chứng minh rằng giá trị của biểu thức sau không phụ thuộc vào giá trị của biến $x$:
$$A = (x + 2)^3 - (x - 2)^3 - 12(x^2 + 1)$$ (1.0 điểm)
b) Tìm $x$, biết:
$$(x - 2)^3 - x(x + 1)(x - 1) + 6x^2 = 16$$ (1.0 điểm)

**Bài 4 (1.0 điểm):**
Cho hai số $x, y$ thỏa mãn $x - y = 4$ và $x \cdot y = 5$.
a) Tính giá trị của biểu thức $K = x^3 - y^3$. (0.5 điểm)
b) Tính giá trị của biểu thức $H = x^4 + y^4$. (0.5 điểm)

---

### Barem điểm chi tiết & Hướng dẫn chấm tự luận

| Bài | Ý | Nội dung giải | Điểm |
| :--- | :--- | :--- | :--- |
| **Bài 1** | a | $(x + 3y)^3 = x^3 + 3 \cdot x^2 \cdot (3y) + 3 \cdot x \cdot (3y)^2 + (3y)^3$<br>$= x^3 + 9x^2y + 27xy^2 + 27y^3$ | 1.0 đ |
| | b | $\left(2x - \frac{1}{2}\right)^3 = (2x)^3 - 3 \cdot (2x)^2 \cdot \frac{1}{2} + 3 \cdot (2x) \cdot \left(\frac{1}{2}\right)^2 - \left(\frac{1}{2}\right)^3$<br>$= 8x^3 - 6x^2 + \frac{3}{2}x - \frac{1}{8}$ | 1.0 đ |
| | c | $(-x - 2)^3 = [-(x + 2)]^3 = -(x + 2)^3$<br>$= -(x^3 + 6x^2 + 12x + 8) = -x^3 - 6x^2 - 12x - 8$ | 0.5 đ |
| **Bài 2** | a | $E = x^3 - 3 \cdot x^2 \cdot 4 + 3 \cdot x \cdot 4^2 - 4^3 = (x - 4)^3$ | 0.75 đ |
| | b | $F = (2x)^3 + 3 \cdot (2x)^2 \cdot 1 + 3 \cdot (2x) \cdot 1^2 + 1^3 = (2x + 1)^3$<br>Tại $x = 49.5$: $F = (2 \cdot 49.5 + 1)^3 = (99 + 1)^3 = 100^3 = 1\,000\,000$ | 0.75 đ |
| **Bài 3** | a | Khai triển: $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$<br>$(x - 2)^3 = x^3 - 6x^2 + 12x - 8$<br>Trừ nhau: $(x + 2)^3 - (x - 2)^3 = 12x^2 + 16$<br>Do đó $A = (12x^2 + 16) - 12x^2 - 12 = 16 - 12 = 4$.<br>Giá trị của $A$ luôn bằng $4$, không phụ thuộc vào $x$. | 1.0 đ |
| | b | $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$<br>$x(x + 1)(x - 1) = x(x^2 - 1) = x^3 - x$<br>Thay vào: $(x^3 - 6x^2 + 12x - 8) - (x^3 - x) + 6x^2 = 16$<br>$\iff x^3 - 6x^2 + 12x - 8 - x^3 + x + 6x^2 = 16$<br>$\iff 13x - 8 = 16 \iff 13x = 24 \iff x = \frac{24}{13}$. Kết luận $x = \frac{24}{13}$. | 1.0 đ |
| **Bài 4** | a | Áp dụng hằng đẳng thức biến thể Cauchy cho hiệu:<br>$x^3 - y^3 = (x - y)^3 + 3xy(x - y)$<br>Thay $x - y = 4$ và $xy = 5$:<br>$K = 4^3 + 3 \cdot 5 \cdot 4 = 64 + 60 = 124$ | 0.5 đ |
| | b | Ta có $x^2 + y^2 = (x - y)^2 + 2xy = 4^2 + 2 \cdot 5 = 16 + 10 = 26$<br>Khi đó: $x^4 + y^4 = (x^2 + y^2)^2 - 2(xy)^2$<br>$H = 26^2 - 2 \cdot (5)^2 = 676 - 50 = 626$ | 0.5 đ |
