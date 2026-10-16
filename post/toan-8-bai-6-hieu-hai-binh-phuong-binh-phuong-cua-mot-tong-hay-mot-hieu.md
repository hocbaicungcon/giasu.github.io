---
title: 'Toán 8 Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu'
description: 'Làm chủ ba hằng đẳng thức đáng nhớ đầu tiên: Bình phương của một tổng, Bình phương của một hiệu và Hiệu hai bình phương. Ý nghĩa hình học, tính nhẩm thần tốc, 4 dạng toán cốt lõi, 5 ứng dụng thực tế và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Hằng đẳng thức
  - Bình phương của một tổng
  - Bình phương của một hiệu
  - Hiệu hai bình phương
  - Kết nối tri thức
grade: 8
---

# Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu

Bạn có bao giờ tự hỏi làm thế nào một nhà ảo thuật toán học có thể tính nhẩm $101^2$ hoặc $99 \times 101$ chỉ trong 1 giây mà không cần bấm máy tính? Bí mật không nằm ở việc ghi nhớ từng con số, mà nằm ở các **Hằng đẳng thức đáng nhớ** (Special Algebraic Identities) — những công thức đại số luôn đúng với mọi giá trị của biến.

Trong Chương 2, chúng ta sẽ khám phá 7 hằng đẳng thức kinh điển của nhân loại. Bài học đầu tiên này sẽ mở cánh cửa với 3 hằng đẳng thức cơ bản và phổ biến nhất:
1. **Bình phương của một tổng:** $(a + b)^2 = a^2 + 2ab + b^2$
2. **Bình phương của một hiệu:** $(a - b)^2 = a^2 - 2ab + b^2$
3. **Hiệu hai bình phương:** $a^2 - b^2 = (a - b)(a + b)$

Chúng không chỉ giúp ta rút gọn các biểu thức cồng kềnh, phân tích thành nhân tử mà còn ẩn chứa những bức tranh hình học tuyệt đẹp về sự phân chia diện tích từ thời Hy Lạp cổ đại.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 6: BA HẰNG ĐẲNG THỨC ĐẦU TIÊN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Bình phương của một tổng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$(a + b)^2 = a^2 + 2ab + b^2$$<br>• Bằng bình phương số thứ nhất cộng <strong>hai lần tích</strong> hai số cộng bình phương số thứ hai.<br>• Mô hình diện tích hình vuông cạnh $(a+b)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Bình phương của một hiệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$(a - b)^2 = a^2 - 2ab + b^2$$<br>• Bằng bình phương số thứ nhất <strong>trừ hai lần tích</strong> hai số cộng bình phương số thứ hai.<br>• Lưu ý tính đối xứng: $(a - b)^2 = (b - a)^2$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hiệu hai bình phương</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$a^2 - b^2 = (a - b)(a + b)$$<br>• Hiệu hai bình phương bằng <strong>hiệu nhân với tổng</strong>.<br>• Ứng dụng thần tốc để tính nhẩm: $99 \times 101 = 100^2 - 1^2 = 9999$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật áp dụng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chiều thuận: Khai triển đa thức.<br>• Chiều nghịch: Thu gọn về bình phương một tổng/hiệu hoặc tích hai nhị thức.<br>• $A$ và $B$ có thể là số, biến hoặc một biểu thức bất kỳ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhân đa thức:** Khai triển biểu thức $(x + 3)(x + 3)$ theo quy tắc nhân đa thức đã học ở Bài 4.
2. **Quy tắc dấu:** Cho biết $(-y)^2$ bằng bao nhiêu? Kết quả của $(y - 5)^2$ có bằng $(5 - y)^2$ không?
3. **Tính nhẩm:** Bạn có nhận xét gì về tích $(50 - 1)(50 + 1)$ với $50^2 - 1$?
4. **Phát hiện lỗi sai:** Học sinh Nam viết $(x + 4)^2 = x^2 + 16$. Bạn Nam đã quên điều gì?
5. **Khai triển nhanh:** Tính kết quả của biểu thức $(2x)^2$. Đáp án là $2x^2$ hay $4x^2$?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $(x + 3)(x + 3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$.
> 2. $(-y)^2 = y^2$. Có, $(y - 5)^2 = (5 - y)^2$ vì $(-(5 - y))^2 = (5 - y)^2$.
> 3. $(50 - 1)(50 + 1) = 49 \times 51 = 2499$, đúng bằng $50^2 - 1 = 2500 - 1 = 2499$.
> 4. Nam quên hạng tử hai lần tích: $2 \cdot x \cdot 4 = 8x$. Kết quả đúng là $x^2 + 8x + 16$.
> 5. Lũy thừa của một tích: $(2x)^2 = 2^2 \cdot x^2 = 4x^2$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Hằng đẳng thức là gì?
- **Đẳng thức** là hai biểu thức được nối với nhau bởi dấu bằng "$=$".
- **Hằng đẳng thức** là đẳng thức luôn luôn đúng với **mọi giá trị** của các biến xuất hiện trong đẳng thức đó.
- Ví dụ:
  - $x + y = y + x$ là một hằng đẳng thức (tính chất giao hoán).
  - $2x = 6$ chỉ là một phương trình (chỉ đúng khi $x = 3$, không đúng với mọi $x$).
  - $(a + b)^2 = a^2 + 2ab + b^2$ là một hằng đẳng thức.

---

### 2. Bình phương của một tổng

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$(A + B)^2 = A^2 + 2AB + B^2$$

- **Quy tắc bằng lời:** Bình phương của một tổng hai biểu thức bằng bình phương biểu thức thứ nhất, cộng với hai lần tích của biểu thức thứ nhất với biểu thức thứ hai, cộng với bình phương biểu thức thứ hai.

#### Chứng minh bằng đại số:
$$(A + B)^2 = (A + B)(A + B) = A \cdot A + A \cdot B + B \cdot A + B \cdot B = A^2 + AB + AB + B^2 = A^2 + 2AB + B^2$$

#### Minh họa hình học trực quan:
Xét hình vuông lớn có cạnh dài $a + b$. Diện tích hình vuông này là $(a + b)^2$. Ta chia hình vuông lớn thành 4 phần nhỏ:
- Một hình vuông diện tích $a^2$.
- Một hình vuông diện tích $b^2$.
- Hai hình chữ nhật, mỗi hình có diện tích là $a \cdot b$.
Tổng diện tích 4 phần là $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$.

---

### 3. Bình phương của một hiệu

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$(A - B)^2 = A^2 - 2AB + B^2$$

- **Quy tắc bằng lời:** Bình phương của một hiệu hai biểu thức bằng bình phương biểu thức thứ nhất, trừ đi hai lần tích của biểu thức thứ nhất với biểu thức thứ hai, cộng với bình phương biểu thức thứ hai.

#### Nhận xét quan trọng:
- Ta có thể coi $(A - B)^2 = [A + (-B)]^2 = A^2 + 2A(-B) + (-B)^2 = A^2 - 2AB + B^2$.
- Do $(A - B) = -(B - A)$, mà bình phương của hai số đối nhau luôn bằng nhau nên:
$$(A - B)^2 = (B - A)^2$$
Ví dụ: $(x - 3)^2 = (3 - x)^2$.

---

### 4. Hiệu hai bình phương

Với hai biểu thức tùy ý $A$ và $B$, ta luôn có:

$$A^2 - B^2 = (A - B)(A + B)$$

- **Quy tắc bằng lời:** Hiệu hai bình phương của hai biểu thức bằng tích của hiệu hai biểu thức với tổng của chúng.

#### Chứng minh bằng đại số:
$$(A - B)(A + B) = A(A + B) - B(A + B) = A^2 + AB - BA - B^2 = A^2 - B^2$$

#### Cảnh báo sai lầm thường gặp:
- **Tuyệt đối không nhầm lẫn** giữa **Hiệu hai bình phương** ($A^2 - B^2$) và **Bình phương của một hiệu** ($(A - B)^2$):
$$A^2 - B^2 \neq (A - B)^2$$
Ví dụ: $5^2 - 3^2 = 25 - 9 = 16$. Trong khi $(5 - 3)^2 = 2^2 = 4$. Rõ ràng $16 \neq 4$.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Khai triển biểu thức theo hằng đẳng thức

**Phương pháp giải:**
1. Xác định rõ biểu thức thứ nhất $A$ và biểu thức thứ hai $B$.
2. Nếu $A$ hoặc $B$ là một đơn thức có hệ số hoặc nhiều biến (ví dụ $3x$, $2xy$), luôn đặt trong dấu ngoặc đơn: $(3x)^2 = 9x^2$, tránh viết $3x^2$.
3. Áp dụng đúng công thức: chú ý dấu của hạng tử hai lần tích ($+2AB$ hay $-2AB$).

---

#### Bài toán 1:
Khai triển các biểu thức sau:
a) $(2x + 3y)^2$
b) $\left(3x - \frac{1}{2}\right)^2$
c) $(4x^2 - 5y)(4x^2 + 5y)$

**Lời giải:**

a) Ta có $A = 2x$ và $B = 3y$:
$$(2x + 3y)^2 = (2x)^2 + 2 \cdot (2x) \cdot (3y) + (3y)^2$$
$$= 4x^2 + 12xy + 9y^2$$

b) Ta có $A = 3x$ và $B = \frac{1}{2}$:
$$\left(3x - \frac{1}{2}\right)^2 = (3x)^2 - 2 \cdot (3x) \cdot \frac{1}{2} + \left(\frac{1}{2}\right)^2$$
$$= 9x^2 - 3x + \frac{1}{4}$$

c) Biểu thức có dạng $(A - B)(A + B)$ với $A = 4x^2$ và $B = 5y$:
$$(4x^2 - 5y)(4x^2 + 5y) = (4x^2)^2 - (5y)^2$$
$$= 16x^4 - 25y^2$$

---

### Dạng 2: Viết một đa thức dưới dạng bình phương của một tổng hoặc một hiệu

**Phương pháp giải:**
1. Đưa đa thức về dạng có 3 hạng tử: trong đó có 2 hạng tử là bình phương của hai biểu thức ($A^2$ và $B^2$).
2. Kiểm tra xem hạng tử còn lại có đúng bằng $2AB$ hoặc $-2AB$ hay không.
3. Nếu thỏa mãn, gom về dạng $(A + B)^2$ hoặc $(A - B)^2$.

---

#### Bài toán 2:
Viết các đa thức sau dưới dạng bình phương của một tổng hoặc hiệu:
a) $x^2 + 10x + 25$
b) $4x^2 - 12xy + 9y^2$
c) $25x^2 - 20x + 4$

**Lời giải:**

a) Ta nhận thấy:
- $x^2 = (x)^2 \implies A = x$.
- $25 = 5^2 \implies B = 5$.
- Hạng tử giữa: $10x = 2 \cdot x \cdot 5 = 2AB$.
Vậy:
$$x^2 + 10x + 25 = (x + 5)^2$$

b) Ta có:
- $4x^2 = (2x)^2 \implies A = 2x$.
- $9y^2 = (3y)^2 \implies B = 3y$.
- Hạng tử giữa: $-12xy = -2 \cdot (2x) \cdot (3y) = -2AB$.
Vậy:
$$4x^2 - 12xy + 9y^2 = (2x - 3y)^2$$
*(hoặc viết là $(3y - 2x)^2$ đều chính xác).*

c) Ta có:
- $25x^2 = (5x)^2 \implies A = 5x$.
- $4 = 2^2 \implies B = 2$.
- Hạng tử giữa: $-20x = -2 \cdot (5x) \cdot 2 = -2AB$.
Vậy:
$$25x^2 - 20x + 4 = (5x - 2)^2$$

---

### Dạng 3: Rút gọn biểu thức và chứng minh đẳng thức

**Phương pháp giải:**
Khai triển các hằng đẳng thức rồi tiến hành thu gọn các hạng tử đồng dạng. Chú ý đổi dấu toàn bộ các hạng tử bên trong khi đằng trước ngoặc là dấu trừ "$-$".

---

#### Bài toán 3:
Rút gọn các biểu thức sau:
a) $P = (x + 4)^2 - (x - 3)(x + 3) - 8x$
b) $Q = (2x + 1)^2 + (2x - 1)^2 - 2(2x + 1)(2x - 1)$

**Lời giải:**

a) Khai triển từng phần:
- $(x + 4)^2 = x^2 + 8x + 16$
- $(x - 3)(x + 3) = x^2 - 9 \implies -(x - 3)(x + 3) = -(x^2 - 9) = -x^2 + 9$
Thay vào $P$:
$$P = (x^2 + 8x + 16) - x^2 + 9 - 8x$$
$$P = (x^2 - x^2) + (8x - 8x) + (16 + 9)$$
$$P = 25$$
*(Giá trị của biểu thức $P$ không phụ thuộc vào giá trị của biến $x$ và luôn bằng $25$!)*

b) **Cách 1 (Khai triển thông thường):**
- $(2x + 1)^2 = 4x^2 + 4x + 1$
- $(2x - 1)^2 = 4x^2 - 4x + 1$
- $2(2x + 1)(2x - 1) = 2(4x^2 - 1) = 8x^2 - 2$
Thay vào $Q$:
$$Q = (4x^2 + 4x + 1) + (4x^2 - 4x + 1) - (8x^2 - 2)$$
$$Q = 8x^2 + 2 - 8x^2 + 2 = 4$$

**Cách 2 (Nhìn nhanh cấu trúc hằng đẳng thức):**
Đặt $A = 2x + 1$ và $B = 2x - 1$.
Biểu thức $Q$ có dạng: $A^2 + B^2 - 2AB = (A - B)^2$.
Do đó:
$$Q = [(2x + 1) - (2x - 1)]^2 = (2x + 1 - 2x + 1)^2 = 2^2 = 4$$
*(Cách 2 cực kỳ ngắn gọn và thể hiện tư duy đại số sắc bén!)*

---

### Dạng 4: Tính nhanh giá trị số học và tìm giá trị lớn nhất / nhỏ nhất

**Phương pháp giải:**
- Tách một số thành tổng hoặc hiệu của số tròn chục/trăm: $101 = 100 + 1$, $99 = 100 - 1$, $48 \times 52 = (50 - 2)(50 + 2)$.
- Đưa tam thức bậc hai về dạng $a(x - x_0)^2 + m$ để tìm giá trị lớn nhất (GTLN) hoặc giá trị nhỏ nhất (GTNN). Vì $(x - x_0)^2 \ge 0$ với mọi $x$.

---

#### Bài toán 4:
a) Tính nhanh: $103^2$; $98^2$; $67 \times 73$.
b) Tìm giá trị nhỏ nhất của biểu thức $M = x^2 - 6x + 15$.
c) Tìm giá trị lớn nhất của biểu thức $N = 7 - 4x - x^2$.

**Lời giải:**

a) Tính nhanh:
- $103^2 = (100 + 3)^2 = 100^2 + 2 \cdot 100 \cdot 3 + 3^2 = 10000 + 600 + 9 = 10609$.
- $98^2 = (100 - 2)^2 = 100^2 - 2 \cdot 100 \cdot 2 + 2^2 = 10000 - 400 + 4 = 9604$.
- $67 \times 73 = (70 - 3)(70 + 3) = 70^2 - 3^2 = 4900 - 9 = 4891$.

b) Biến đổi $M$ bằng cách thêm bớt hạng tử để tạo thành bình phương một hiệu:
$$M = x^2 - 2 \cdot x \cdot 3 + 3^2 + 6 = (x - 3)^2 + 6$$
Vì $(x - 3)^2 \ge 0$ với mọi số thực $x$, nên:
$$(x - 3)^2 + 6 \ge 0 + 6 = 6$$
Đẳng thức xảy ra khi và chỉ khi $x - 3 = 0 \iff x = 3$.
Vậy giá trị nhỏ nhất của $M$ là $6$, đạt được khi $x = 3$.

c) Đặt dấu trừ ra ngoài để đưa về bình phương:
$$N = -(x^2 + 4x) + 7 = -(x^2 + 2 \cdot x \cdot 2 + 2^2) + 4 + 7$$
$$N = -(x + 2)^2 + 11$$
Vì $(x + 2)^2 \ge 0 \implies -(x + 2)^2 \le 0$ với mọi $x$. Do đó:
$$-(x + 2)^2 + 11 \le 0 + 11 = 11$$
Đẳng thức xảy ra khi $x + 2 = 0 \iff x = -2$.
Vậy giá trị lớn nhất của $N$ là $11$, đạt được khi $x = -2$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Kiến trúc & Xây dựng: Thiết kế giếng trời cho nhà phố
Một ngôi nhà vuông có kích thước nền đất $x \times x$ mét. Để ngôi nhà thông thoáng và lấy ánh sáng tự nhiên, kiến trúc sư chừa một khoảng sân giếng trời hình vuông ở giữa nhà có cạnh $y$ mét ($y < x$).
- Diện tích mặt sàn xây dựng còn lại chính là hiệu hai bình phương:
$$S = x^2 - y^2 = (x - y)(x + y)$$
Biểu thức này cho phép kỹ sư xây dựng nhanh chóng ước lượng vật tư lát sàn bằng cách nhân hiệu kích thước với tổng kích thước.

### 2. Kinh tế vi mô: Bài toán phân bổ lợi nhuận
Một xưởng sản xuất bán sản phẩm với giá $p = (100 - x)$ nghìn đồng khi sản xuất $x$ nghìn sản phẩm. Doanh thu của xưởng là:
$$R(x) = x(100 - x) = 100x - x^2$$
Bằng cách dùng hằng đẳng thức:
$$R(x) = -(x^2 - 100x + 2500) + 2500 = 2500 - (x - 50)^2$$
Vì $(x - 50)^2 \ge 0$ nên $R(x) \le 2500$.
Doanh thu cực đại là $2500$ triệu đồng đạt được khi sản xuất đúng $x = 50$ nghìn sản phẩm. Đây là ứng dụng tìm cực trị kinh tế bằng hằng đẳng thức!

### 3. Mật mã học & Giải thuật phân tích số Fermat (Fermat Factorization)
Nhà toán học Pierre de Fermat đã phát minh ra thuật toán phân tích một số nguyên lẻ $N$ thành tích hai thừa số bằng cách biểu diễn $N$ dưới dạng hiệu của hai số chính phương:
$$N = a^2 - b^2 = (a - b)(a + b)$$
Ví dụ, để phân tích số $N = 2021$, ta nhận thấy $45^2 = 2025$:
$$2021 = 2025 - 4 = 45^2 - 2^2 = (45 - 2)(45 + 2) = 43 \times 47$$
Chỉ trong vài giây nhờ hiệu hai bình phương, ta tìm ra ngay hai ước nguyên tố của $2021$ là $43$ và $47$!

### 4. Vật lý & Động năng: Va chạm và bảo toàn cơ năng
Trong cơ học cổ điển, độ biến thiên động năng của một vật khối lượng $m$ khi vận tốc thay đổi từ $v_1$ lên $v_2$ được tính bởi:
$$\Delta W_d = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2 = \frac{1}{2}m (v_2^2 - v_1^2) = \frac{1}{2}m (v_2 - v_1)(v_2 + v_1)$$
Công thức này liên hệ trực tiếp giữa gia tốc vận tốc $(v_2 - v_1)$ và vận tốc trung bình $\frac{v_2 + v_1}{2}$.

### 5. Thuật toán nhân nhanh Schönhage–Strassen trong khoa học máy tính
Khi máy tính cần nhân hai số cực lớn có hàng triệu chữ số (trong các hệ thống bảo mật RSA), máy tính biến đổi phép nhân $A \times B$ thành:
$$A \times B = \frac{(A + B)^2 - (A - B)^2}{4}$$
Thuật toán này chỉ cần thực hiện phép bình phương thay vì phép nhân hai số khác nhau, giúp giảm thiểu đáng kể số chu kỳ xử lý của CPU.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Biểu thức $(x + 5)^2$ được khai triển thành đa thức nào sau đây?",
  "options": [
    "x^2 + 25",
    "x^2 + 10x + 25",
    "x^2 + 5x + 25",
    "x^2 + 10x + 10"
  ],
  "correct": 1,
  "hint": "Áp dụng $(A + B)^2 = A^2 + 2AB + B^2$ với A = x, B = 5.",
  "explanation": "$(x + 5)^2 = x^2 + 2 \\cdot x \\cdot 5 + 5^2 = x^2 + 10x + 25$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khai triển biểu thức $(2x - 3)^2$, ta được kết quả là:",
  "options": [
    "4x^2 - 9",
    "2x^2 - 12x + 9",
    "4x^2 - 12x + 9",
    "4x^2 - 6x + 9"
  ],
  "correct": 2,
  "hint": "Chú ý (2x)^2 = 4x^2 và hạng tử giữa là -2 \\cdot (2x) \\cdot 3.",
  "explanation": "$(2x - 3)^2 = (2x)^2 - 2 \\cdot (2x) \\cdot 3 + 3^2 = 4x^2 - 12x + 9$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đa thức 9x^2 - 16 được viết dưới dạng tích là:",
  "options": [
    "(3x - 4)^2",
    "(3x - 4)(3x + 4)",
    "(9x - 16)(9x + 16)",
    "(3x - 8)(3x + 8)"
  ],
  "correct": 1,
  "hint": "Dạng A^2 - B^2 = (A - B)(A + B) với A = 3x và B = 4.",
  "explanation": "$9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính nhanh giá trị của biểu thức 102^2 - 4:",
  "options": [
    "10000",
    "10400",
    "10404",
    "10396"
  ],
  "correct": 1,
  "hint": "Viết 4 = 2^2 rồi dùng hằng đẳng thức hiệu hai bình phương.",
  "explanation": "$102^2 - 4 = 102^2 - 2^2 = (102 - 2)(102 + 2) = 100 \\times 104 = 10400$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Điền vào dấu * để đa thức x^2 - 8x + * trở thành bình phương của một hiệu:",
  "options": [
    "4",
    "8",
    "16",
    "64"
  ],
  "correct": 2,
  "hint": "Hạng tử giữa là -2 \\cdot x \\cdot B = -8x => B = 4. Vậy dấu * là B^2.",
  "explanation": "Ta có $2 \\cdot x \\cdot B = 8x \\implies B = 4$. Do đó $* = B^2 = 4^2 = 16$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Rút gọn biểu thức (x - y)^2 + 2xy ta được kết quả là:",
  "options": [
    "x^2 - y^2",
    "x^2 + y^2",
    "x^2 + 4xy + y^2",
    "(x + y)^2"
  ],
  "correct": 1,
  "hint": "Khai triển (x - y)^2 rồi triệt tiêu hạng tử -2xy với +2xy.",
  "explanation": "$(x - y)^2 + 2xy = x^2 - 2xy + y^2 + 2xy = x^2 + y^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Giá trị nhỏ nhất của biểu thức P = x^2 - 4x + 9 là:",
  "options": [
    "5",
    "9",
    "4",
    "2"
  ],
  "correct": 0,
  "hint": "Viết P = (x - 2)^2 + 5.",
  "explanation": "$P = x^2 - 4x + 4 + 5 = (x - 2)^2 + 5$. Vì $(x - 2)^2 \\ge 0$ nên $P \\ge 5$. Dấu bằng đạt khi $x = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biểu thức nào sau đây đồng nhất bằng biểu thức (3 - x)^2?",
  "options": [
    "(x - 3)^2",
    "-(x - 3)^2",
    "x^2 - 9",
    "9 - x^2"
  ],
  "correct": 0,
  "hint": "Tính chất đối xứng: (A - B)^2 = (B - A)^2.",
  "explanation": "Vì $(3 - x) = -(x - 3)$, nên $[-(x - 3)]^2 = (x - 3)^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tích (2x + 5y)(2x - 5y) bằng:",
  "options": [
    "4x^2 - 25y^2",
    "2x^2 - 5y^2",
    "4x^2 - 20xy + 25y^2",
    "4x^2 + 25y^2"
  ],
  "correct": 0,
  "hint": "(A + B)(A - B) = A^2 - B^2 với A = 2x, B = 5y.",
  "explanation": "$(2x + 5y)(2x - 5y) = (2x)^2 - (5y)^2 = 4x^2 - 25y^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tìm x biết x^2 - 49 = 0:",
  "options": [
    "x = 7",
    "x = -7",
    "x = 7 hoặc x = -7",
    "x = 49"
  ],
  "correct": 2,
  "hint": "Dùng hằng đẳng thức: (x - 7)(x + 7) = 0.",
  "explanation": "$x^2 - 49 = 0 \\iff (x - 7)(x + 7) = 0 \\iff x = 7$ hoặc $x = -7$."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### Ma trận đề kiểm tra 45 phút

| Cấp độ nhận thức | Trắc nghiệm (3 điểm) | Tự luận (7 điểm) | Tổng điểm |
| :--- | :--- | :--- | :--- |
| **Nhận biết** | 2 câu (0.6 đ): Nhận diện 3 hằng đẳng thức | Bài 1a (1.5 đ): Khai triển trực tiếp | **2.1 điểm** |
| **Thông hiểu** | 4 câu (1.2 đ): Áp dụng công thức, tính nhẩm | Bài 1b, Bài 2 (2.5 đ): Viết dạng bình phương, rút gọn | **3.7 điểm** |
| **Vận dụng** | 3 câu (0.9 đ): Tìm x, tính GT biểu thức | Bài 3 (2.0 đ): Rút gọn biểu thức phức tạp, tìm x | **2.9 điểm** |
| **Vận dụng cao** | 1 câu (0.3 đ): Tìm cực trị | Bài 4 (1.0 đ): Tìm GTLN / GTNN, toán thực tế | **1.3 điểm** |
| **Tổng cộng** | **10 câu (3.0 đ)** | **4 bài (7.0 đ)** | **10.0 điểm** |

---

### Đề bài tự luận (7.0 điểm)

**Bài 1 (2.5 điểm):**
Khai triển các biểu thức sau:
a) $(3x + 2)^2$ (1.0 điểm)
b) $\left(2x - \frac{1}{3}y\right)^2$ (1.0 điểm)
c) $(5x - 4)(5x + 4)$ (0.5 điểm)

**Bài 2 (1.5 điểm):**
Viết các đa thức sau dưới dạng bình phương của một tổng hoặc hiệu:
a) $x^2 + 12x + 36$ (0.75 điểm)
b) $16x^2 - 24xy + 9y^2$ (0.75 điểm)

**Bài 3 (2.0 điểm):**
a) Rút gọn biểu thức: $A = (2x + 3)^2 - (2x - 3)^2 - 20x$ (1.0 điểm)
b) Tìm $x$, biết: $(x + 5)^2 - x(x - 2) = 49$ (1.0 điểm)

**Bài 4 (1.0 điểm):**
Cho biểu thức $K = x^2 - 8x + y^2 + 4y + 25$.
a) Chứng minh rằng giá trị của $K$ luôn dương với mọi giá trị của $x$ và $y$.
b) Tìm giá trị nhỏ nhất của biểu thức $K$ và các giá trị tương ứng của $x, y$.

---

### Barem điểm chi tiết & Hướng dẫn chấm tự luận

| Bài | Ý | Nội dung giải | Điểm |
| :--- | :--- | :--- | :--- |
| **Bài 1** | a | $(3x + 2)^2 = (3x)^2 + 2 \cdot 3x \cdot 2 + 2^2 = 9x^2 + 12x + 4$ | 1.0 đ |
| | b | $\left(2x - \frac{1}{3}y\right)^2 = (2x)^2 - 2 \cdot 2x \cdot \frac{1}{3}y + \left(\frac{1}{3}y\right)^2 = 4x^2 - \frac{4}{3}xy + \frac{1}{9}y^2$ | 1.0 đ |
| | c | $(5x - 4)(5x + 4) = (5x)^2 - 4^2 = 25x^2 - 16$ | 0.5 đ |
| **Bài 2** | a | $x^2 + 12x + 36 = x^2 + 2 \cdot x \cdot 6 + 6^2 = (x + 6)^2$ | 0.75 đ |
| | b | $16x^2 - 24xy + 9y^2 = (4x)^2 - 2 \cdot 4x \cdot 3y + (3y)^2 = (4x - 3y)^2$ | 0.75 đ |
| **Bài 3** | a | Khai triển: $(2x + 3)^2 = 4x^2 + 12x + 9$<br>$(2x - 3)^2 = 4x^2 - 12x + 9$<br>Trừ hai vế: $(4x^2 + 12x + 9) - (4x^2 - 12x + 9) = 24x$<br>Vậy $A = 24x - 20x = 4x$. *(hoặc dùng $A^2 - B^2$)* | 1.0 đ |
| | b | $(x + 5)^2 - x(x - 2) = 49$<br>$\iff x^2 + 10x + 25 - (x^2 - 2x) = 49$<br>$\iff x^2 + 10x + 25 - x^2 + 2x = 49$<br>$\iff 12x + 25 = 49 \iff 12x = 24 \iff x = 2$. Kết luận $x = 2$. | 1.0 đ |
| **Bài 4** | a | Nhóm các hạng tử tạo bình phương:<br>$K = (x^2 - 8x + 16) + (y^2 + 4y + 4) + 5$<br>$K = (x - 4)^2 + (y + 2)^2 + 5$<br>Vì $(x - 4)^2 \ge 0$ và $(y + 2)^2 \ge 0$ với mọi $x, y$<br>$\implies K \ge 0 + 0 + 5 = 5 > 0$ với mọi $x, y$. | 0.5 đ |
| | b | Do $K \ge 5$, giá trị nhỏ nhất của $K$ là $5$.<br>Đạt được khi $x - 4 = 0 \iff x = 4$ và $y + 2 = 0 \iff y = -2$. | 0.5 đ |
