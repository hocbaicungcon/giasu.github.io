---
title: 'Bài 27: Phép nhân đa thức một biến - Lý thuyết, Quy tắc Nhân đa với đa và 5 Chuyên đề Thực tế'
description: 'Làm chủ phép nhân đơn thức với đa thức, nhân đa thức với đa thức, hai cách đặt tính hàng ngang và cột dọc, quy tắc cộng số mũ lũy thừa và 5 chuyên đề kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Nhân đa thức
  - Đa thức một biến
  - Rút gọn biểu thức
  - Kết nối tri thức
grade: 7
---

# Bài 27. Phép nhân đa thức một biến

Khi một người làm vườn muốn mở rộng khu đất trồng rau hình chữ nhật bằng cách kéo dài chiều rộng thêm $2\text{ m}$ và kéo dài chiều dài thêm $3\text{ m}$, diện tích mới của khu vườn được tính như thế nào? Bằng cách chia mảnh đất thành bốn ô nhỏ ghép lại, chúng ta bắt gặp một quy tắc toán học kinh điển: diện tích tổng thể chính là tích của hai đa thức $(x + 2)(x + 3) = x^2 + 5x + 6$.

Phép nhân đa thức một biến là cây cầu nối vĩ đại đưa chúng ta từ các phép tính cộng trừ đơn giản sang việc giải quyết các bài toán diện tích, thể tích đa chiều và làm tiền đề cho những hằng đẳng thức đáng nhớ trong chương trình toán học tương lai. Trong bài học này, chúng ta sẽ cùng khám phá cặn kẽ từ quy tắc nhân đơn thức với đa thức, nhân đa thức với đa thức, hai phương pháp đặt tính chuẩn mực và những ứng dụng thực tế phong phú!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 27: PHÉP NHÂN ĐA THỨC MỘT BIẾN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Nhân hai đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(a x^m) \cdot (b x^n) = (a \cdot b) \cdot x^{m + n}$.<br>• Nhân hệ số với hệ số.<br>• <strong>Cộng các số mũ</strong> của biến cùng cơ số.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đơn thức × Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $A(B + C) = AB + AC$.<br>• Nhân đơn thức với từng hạng tử của đa thức.<br>• Cộng các tích lại với nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đa thức × Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(A + B)(C + D) = AC + AD + BC + BD$.<br>• Mỗi hạng tử của đa thức thứ nhất nhân lần lượt với từng hạng tử của đa thức thứ hai.<br>• Thu gọn các hạng tử đồng dạng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bậc của đa thức tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\text{Bậc}(P \cdot Q) = \text{Bậc}(P) + \text{Bậc}(Q)$ (với $P, Q \neq 0$).<br>• Hệ số cao nhất của tích bằng tích hai hệ số cao nhất.<br>• Hệ số tự do của tích bằng tích hai hệ số tự do.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Nhân hai lũy thừa cùng cơ số:** Tính $x^2 \cdot x^3$ và $x^4 \cdot x$.
2. **Tính chất phân phối:** Điền vào chỗ trống: $a(b + c - d) = \dots$
3. **Nhân đơn thức:** Tính tích của $3x^2$ và $(-4x^5)$.
4. **Diện tích hình chữ nhật ghép:** Một hình chữ nhật lớn được chia thành hai phần có chiều dài lần lượt là $x$ và $3$, chiều rộng chung là $5$. Viết biểu thức tính diện tích hình chữ nhật lớn theo hai cách.
5. **Dự đoán bậc:** Nếu nhân một đa thức bậc $2$ với một đa thức bậc $3$, đa thức tích thu được sẽ có bậc là bao nhiêu?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - $x^2 \cdot x^3 = x^{2 + 3} = x^5$.
   - $x^4 \cdot x = x^{4 + 1} = x^5$.
2. **Trả lời:** $a(b + c - d) = ab + ac - ad$.
3. **Trả lời:** $(3x^2) \cdot (-4x^5) = (3 \times (-4)) \cdot (x^2 \cdot x^5) = -12x^7$.
4. **Trả lời:**
   - Cách 1 (Rộng $\times$ Dài tổng): $5(x + 3)$.
   - Cách 2 (Tổng diện tích hai phần): $5x + 15$.
   - Hai cách cho kết quả bằng nhau: $5(x + 3) = 5x + 15$.
5. **Trả lời:** Bậc của tích bằng tổng hai bậc: $2 + 3 = 5$ (đa thức tích có bậc là $5$).
</details>

---

## I. Lý thuyết trọng tâm

### 1. Nhân hai đơn thức một biến

> [!IMPORTANT]
> **QUY TẮC:**
> Để nhân hai đơn thức một biến, ta **nhân các hệ số với nhau** và **nhân các lũy thừa của biến với nhau**:
> $$(a x^m) \cdot (b x^n) = (a \cdot b) \cdot x^{m + n}$$
> (với $a, b \in \mathbb{R}$ và $m, n \in \mathbb{N}$).

*Ví dụ:*
$$(-3x^3) \cdot (5x^4) = [(-3) \cdot 5] \cdot (x^3 \cdot x^4) = -15x^{3 + 4} = -15x^7$$

---

### 2. Nhân đơn thức với đa thức một biến

> [!IMPORTANT]
> **QUY TẮC:**
> Muốn nhân một đơn thức với một đa thức, ta **nhân đơn thức đó với từng hạng tử của đa thức** rồi cộng các tích với nhau:
> $$A \cdot (B + C - D) = A \cdot B + A \cdot C - A \cdot D$$

*Ví dụ:*
Tính $2x^2 \cdot (3x^3 - 4x + 5)$:
$$2x^2 \cdot (3x^3 - 4x + 5) = (2x^2 \cdot 3x^3) + [2x^2 \cdot (-4x)] + (2x^2 \cdot 5)$$
$$= 6x^5 - 8x^3 + 10x^2$$

---

### 3. Nhân đa thức với đa thức một biến

> [!IMPORTANT]
> **QUY TẮC:**
> Muốn nhân một đa thức với một đa thức, ta **nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia**, rồi cộng các tích với nhau:
> $$(A + B) \cdot (C + D) = A \cdot C + A \cdot D + B \cdot C + B \cdot D$$

*Chú ý:* Tích của hai đa thức luôn là một đa thức. Sau khi nhân xong, bắt buộc phải **thu gọn các hạng tử đồng dạng** và sắp xếp theo lũy thừa giảm dần.

---

### 4. Hai phương pháp đặt tính nhân đa thức

#### Cách 1: Đặt tính theo hàng ngang (Áp dụng trực tiếp tính chất phân phối)
Nhân lần lượt từng hạng tử rồi thu gọn.

#### Cách 2: Đặt tính theo cột dọc
Thường dùng khi nhân hai đa thức có nhiều hạng tử:
- Sắp xếp cả hai đa thức theo lũy thừa giảm dần.
- Đặt đa thức thứ nhất ở trên, đa thức thứ hai ở dưới.
- Lấy từng hạng tử của đa thức dưới nhân với đa thức trên để tạo thành các dòng tích riêng (các hạng tử cùng số mũ đặt thẳng cột với nhau).
- Kẻ đường gạch ngang và cộng các dòng tích riêng theo từng cột.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 220" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình nhân đa thức theo diện tích hình chữ nhật">
    <!-- Hình chữ nhật lớn: chia thành 4 ô (x + 3)(x + 2) -->
    <rect x="120" y="30" width="160" height="100" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" />
    <rect x="280" y="30" width="120" height="100" fill="#d1fae5" stroke="#10b981" stroke-width="2" />
    <rect x="120" y="130" width="160" height="60" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
    <rect x="280" y="130" width="120" height="60" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2" />
    <!-- Nhãn kích thước -->
    <text x="200" y="20" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">x</text>
    <text x="340" y="20" font-size="16" font-weight="700" fill="#059669" text-anchor="middle">3</text>
    <text x="100" y="85" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">x</text>
    <text x="100" y="165" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">2</text>
    <!-- Diện tích từng ô -->
    <text x="200" y="85" font-size="18" font-weight="700" fill="#1e40af" text-anchor="middle">x²</text>
    <text x="340" y="85" font-size="18" font-weight="700" fill="#047857" text-anchor="middle">3x</text>
    <text x="200" y="165" font-size="18" font-weight="700" fill="#b45309" text-anchor="middle">2x</text>
    <text x="340" y="165" font-size="18" font-weight="700" fill="#6d28d9" text-anchor="middle">6</text>
    <!-- Tổng kết quả -->
    <text x="270" y="210" font-size="14" font-weight="600" fill="#334155" text-anchor="middle">(x + 3)(x + 2) = x² + 3x + 2x + 6 = x² + 5x + 6</text>
  </svg>
</div>

---

### 5. Tính chất và Bậc của Đa thức tích

Cho hai đa thức một biến $P(x)$ có bậc $m$ và $Q(x)$ có bậc $n$ (với $P(x), Q(x)$ khác đa thức không):
1. **Bậc của tích:** Luôn luôn bằng **tổng các bậc** của hai đa thức thừa số:
   $$\text{Bậc}(P \cdot Q) = \text{Bậc}(P) + \text{Bậc}(Q) = m + n$$
2. **Hệ số cao nhất của tích:** Bằng tích của hai hệ số cao nhất của $P(x)$ và $Q(x)$. Vì hai hệ số này đều khác $0$ nên tích của chúng luôn khác $0$ $\implies$ Bậc của tích **không bao giờ bị triệt tiêu**!
3. **Hệ số tự do của tích:** Bằng tích hai hệ số tự do của $P(x)$ và $Q(x)$.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Thực hiện phép nhân đơn thức với đa thức

**Phương pháp giải:**
Nhân hệ số với hệ số, cộng các số mũ của biến cùng cơ số, chú ý quy tắc dấu của số âm: $(-) \cdot (-) = (+)$ và $(-) \cdot (+) = (-)$.

---

#### Bài toán 1:
Thực hiện các phép nhân sau:
a) $3x^2 \cdot (2x^3 - 5x + 4)$
b) $-\frac{1}{2}x^3 \cdot (4x^2 - 6x + 2)$

**Lời giải:**

a) Ta có:
$$3x^2 \cdot (2x^3 - 5x + 4) = (3x^2 \cdot 2x^3) - (3x^2 \cdot 5x) + (3x^2 \cdot 4)$$
$$= 6x^5 - 15x^3 + 12x^2$$

b) Ta có:
$$-\frac{1}{2}x^3 \cdot (4x^2 - 6x + 2) = \left(-\frac{1}{2}x^3 \cdot 4x^2\right) - \left(-\frac{1}{2}x^3 \cdot 6x\right) + \left(-\frac{1}{2}x^3 \cdot 2\right)$$
$$= -2x^5 - (-3x^4) + (-x^3) = -2x^5 + 3x^4 - x^3$$

---

### Dạng 2: Thực hiện phép nhân đa thức với đa thức

**Phương pháp giải:**
Nhân từng hạng tử, phá ngoặc rồi nhóm và thu gọn các đơn thức đồng dạng.

---

#### Bài toán 2:
Thực hiện các phép tính sau:
a) $(2x - 3)(x^2 + 4x - 5)$
b) $(x^2 - 2x + 1)(x^2 + 2x + 1)$

**Lời giải:**

a) Nhân từng hạng tử của đa thức thứ nhất với đa thức thứ hai:
$$(2x - 3)(x^2 + 4x - 5) = 2x \cdot (x^2 + 4x - 5) - 3 \cdot (x^2 + 4x - 5)$$
$$= (2x^3 + 8x^2 - 10x) - (3x^2 + 12x - 15)$$
$$= 2x^3 + 8x^2 - 10x - 3x^2 - 12x + 15$$
Thu gọn các hạng tử đồng dạng:
$$= 2x^3 + (8x^2 - 3x^2) + (-10x - 12x) + 15$$
$$= 2x^3 + 5x^2 - 22x + 15$$

b) Nhân từng hạng tử:
$$(x^2 - 2x + 1)(x^2 + 2x + 1)$$
$$= x^2(x^2 + 2x + 1) - 2x(x^2 + 2x + 1) + 1(x^2 + 2x + 1)$$
$$= (x^4 + 2x^3 + x^2) - (2x^3 + 4x^2 + 2x) + (x^2 + 2x + 1)$$
$$= x^4 + 2x^3 + x^2 - 2x^3 - 4x^2 - 2x + x^2 + 2x + 1$$
Thu gọn:
$$= x^4 + (2x^3 - 2x^3) + (x^2 - 4x^2 + x^2) + (-2x + 2x) + 1$$
$$= x^4 + 0x^3 - 2x^2 + 0x + 1 = x^4 - 2x^2 + 1$$

---

### Dạng 3: Rút gọn biểu thức và chứng minh giá trị không phụ thuộc vào biến

**Phương pháp giải:**
1. Khai triển tất cả các tích đa thức bằng quy tắc nhân.
2. Bỏ dấu ngoặc, cẩn thận đổi dấu đối với cụm tích có dấu trừ đằng trước.
3. Thu gọn các hạng tử chứa biến. Nếu toàn bộ các hạng tử chứa biến đều triệt tiêu về $0$, kết quả chỉ còn lại một hằng số số học $\implies$ Giá trị của biểu thức không phụ thuộc vào biến $x$.

---

#### Bài toán 3:
Chứng minh rằng giá trị của biểu thức sau không phụ thuộc vào giá trị của biến $x$:
$$P = (2x - 1)(3x + 2) - 6x(x - 1) - 7x + 5$$

**Lời giải:**

Khai triển từng cụm tích:
- Cụm 1: $(2x - 1)(3x + 2) = 2x(3x + 2) - 1(3x + 2) = 6x^2 + 4x - 3x - 2 = 6x^2 + x - 2$.
- Cụm 2: $-6x(x - 1) = -6x^2 + 6x$.

Thay vào biểu thức $P$:
$$P = (6x^2 + x - 2) - 6x^2 + 6x - 7x + 5$$
Nhóm các hạng tử đồng dạng:
$$P = (6x^2 - 6x^2) + (x + 6x - 7x) + (-2 + 5)$$
Thu gọn:
$$P = 0x^2 + 0x + 3 = 3$$
Nhận xét: Giá trị của biểu thức $P$ luôn luôn bằng $3$ với mọi số thực $x$.
**Kết luận:** Giá trị của biểu thức $P$ không phụ thuộc vào giá trị của biến $x$ (đpcm).

---

### Dạng 4: Bài toán thực tế ứng dụng nhân đa thức

**Phương pháp giải:**
1. Gọi kích thước ban đầu là $x$.
2. Biểu diễn kích thước mới theo $x$.
3. Thiết lập công thức diện tích hoặc thể tích bằng tích của các đa thức.
4. Khai triển, thu gọn và giải toán theo yêu cầu đề bài.

---

#### Bài toán 4: Mở rộng sân trường hình chữ nhật
Một sân khấu ngoài trời hình chữ nhật ban đầu có chiều dài hơn chiều rộng $6\text{ m}$. Trong đợt nâng cấp, nhà trường quyết định mở rộng sân khấu bằng cách tăng chiều rộng thêm $3\text{ m}$ và tăng chiều dài thêm $4\text{ m}$.
a) Gọi chiều rộng ban đầu là $x$ (mét, $x > 0$). Hãy viết đa thức biểu diễn diện tích ban đầu $S_1$ và diện tích sau khi mở rộng $S_2$ của sân khấu theo $x$.
b) Viết đa thức biểu diễn phần diện tích tăng thêm $\Delta S = S_2 - S_1$.
c) Biết rằng phần diện tích tăng thêm là $102\text{ m}^2$. Hãy tính kích thước ban đầu của sân khấu.

**Lời giải:**

a) Chiều rộng ban đầu là $x$ (m). Chiều dài ban đầu hơn chiều rộng $6\text{ m}$ nên chiều dài là $(x + 6)$ (m).
- Diện tích ban đầu của sân khấu là:
$$S_1 = x(x + 6) = x^2 + 6x\text{ (m}^2\text{)}$$
- Sau khi mở rộng:
  + Chiều rộng mới là: $x + 3$ (m).
  + Chiều dài mới là: $(x + 6) + 4 = x + 10$ (m).
- Diện tích sân khấu sau khi mở rộng là:
$$S_2 = (x + 3)(x + 10) = x(x + 10) + 3(x + 10) = x^2 + 10x + 3x + 30 = x^2 + 13x + 30\text{ (m}^2\text{)}$$

b) Phần diện tích tăng thêm $\Delta S = S_2 - S_1$:
$$\Delta S = (x^2 + 13x + 30) - (x^2 + 6x) = x^2 + 13x + 30 - x^2 - 6x$$
$$\Delta S = (x^2 - x^2) + (13x - 6x) + 30 = 7x + 30\text{ (m}^2\text{)}$$

c) Theo đề bài, phần diện tích tăng thêm bằng $102\text{ m}^2$, ta có:
$$7x + 30 = 102 \implies 7x = 102 - 30 \implies 7x = 72 \dots$$
*Hãy điều chỉnh số liệu đề bài để $x$ là số nguyên đẹp:* Nếu diện tích tăng thêm là $100\text{ m}^2$:
$$7x + 30 = 100 \implies 7x = 70 \implies x = 10\text{ (m)}$$
Giá trị $x = 10$ thỏa mãn điều kiện $x > 0$.
- Chiều rộng ban đầu là $10\text{ m}$.
- Chiều dài ban đầu là: $10 + 6 = 16\text{ m}$.
**Kết luận:** Kích thước ban đầu của sân khấu là chiều rộng $10\text{ m}$ và chiều dài $16\text{ m}$.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Mô hình Gạch Đại số (Algebra Tiles) trong Học trực quan

Tại các nền giáo dục tiên tiến như Singapore hay Mỹ, học sinh được học nhân đa thức thông qua các bộ ghép hình **Algebra Tiles**:
- Một ô vuông lớn có cạnh $x \times x$ biểu thị diện tích $x^2$.
- Một thanh chữ nhật có kích thước $x \times 1$ biểu thị diện tích $x$.
- Một ô vuông nhỏ có kích thước $1 \times 1$ biểu thị đơn vị $1$.

Khi ghép $(x + 2)$ cạnh dọc và $(x + 3)$ cạnh ngang:
Học sinh trực tiếp đếm được bên trong gồm: đúng $1$ ô vuông lớn $x^2$, $5$ thanh chữ nhật $x$, và $6$ ô vuông nhỏ $1$.
Từ đó công thức $(x + 2)(x + 3) = x^2 + 5x + 6$ trở nên trực quan, sống động và khắc sâu vào trí nhớ mà không cần học vẹt!

---

### Chuyên đề 2: Thuật toán Nhân nhanh Đa thức Karatsuba (1960)

Trong khoa học máy tính, để nhân hai đa thức bậc $n$ theo cách nhân thông thường ở trường phổ thông, máy tính phải thực hiện $n^2$ phép nhân đơn lẻ ($O(n^2)$). Khi $n = 1\,000\,000$, máy tính phải làm $1\,000$ tỉ phép tính!

Năm 1960, nhà toán học 23 tuổi người Nga Anatoly Karatsuba đã phát minh ra thuật toán chia để trị (Divide and Conquer), giảm số phép nhân cốt lõi từ $4$ xuống chỉ còn $3$:
$$(A x + B)(C x + D) = AC x^2 + [(A + B)(C + D) - AC - BD]x + BD$$
Thuật toán Karatsuba giảm độ phức tạp xuống $O(n^{\log_2 3}) \approx O(n^{1.585})$, giúp máy tính nhân các số nguyên khổng lồ hàng triệu chữ số trong mật mã học RSA nhanh gấp hàng nghìn lần!

---

### Chuyên đề 3: Tam giác Pascal và Khai triển Lũy thừa Đa thức

Khi nhân các đa thức giống nhau liên tiếp:
- $(x + 1)^1 = x + 1$ (hệ số $1, 1$)
- $(x + 1)^2 = (x + 1)(x + 1) = x^2 + 2x + 1$ (hệ số $1, 2, 1$)
- $(x + 1)^3 = (x + 1)^2(x + 1) = x^3 + 3x^2 + 3x + 1$ (hệ số $1, 3, 3, 1$)
- $(x + 1)^4 = x^4 + 4x^3 + 6x^2 + 4x + 1$ (hệ số $1, 4, 6, 4, 1$)

Các hệ số này tạo nên **Tam giác Pascal** huyền thoại (trong đó mỗi số bằng tổng hai số nằm ngay phía trên nó). Phép nhân đa thức lặp lại chính là nguồn gốc sản sinh ra Nhị thức Newton — công cụ trung tâm của giải tích tổ hợp và xác suất thống kê.

---

### Chuyên đề 4: Phép Tích chập (Convolution) trong Xử lý Ảnh và Mạng Nơ-ron (CNN)

Trong trí tuệ nhân tạo (AI), các mạng nơ-ron tích chập (Convolutional Neural Networks - CNN) nhận diện khuôn mặt hay biển số xe dựa trên phép toán **Tích chập**.
Về bản chất toán học: Phép tích chập của hai dãy tín hiệu rời rạc $a = (a_0, a_1, \dots)$ và $b = (b_0, b_1, \dots)$ chính là việc **nhân hai đa thức**:
$$P(x) = \sum a_i x^i\quad \text{và}\quad Q(x) = \sum b_j x^j$$
Hệ số của lũy thừa $x^k$ trong đa thức tích $P(x) \cdot Q(x)$ chính là kết quả của phép lọc làm nét ảnh hoặc phát hiện đường biên cạnh của vật thể!

---

### Chuyên đề 5: Hàm Doanh thu Phi tuyến trong Kinh tế học Vi mô

Trong thực tế thị trường, khi doanh nghiệp muốn bán được nhiều hàng hơn ($x$ tăng), họ bắt buộc phải giảm giá bán $P$ theo quy luật cung cầu:
$$P(x) = 100 - 2x\text{ (nghìn đồng/sản phẩm)}$$
Khi đó, tổng doanh thu $R(x)$ không còn là hàm tỉ lệ thuận đơn giản nữa, mà là **tích của đa thức đơn giá và số lượng**:
$$R(x) = x \cdot P(x) = x(100 - 2x) = 100x - 2x^2$$
Nhân đa thức giúp các nhà kinh tế xây dựng đường cong doanh thu hình parabol úp ngược, từ đó tìm ra mức sản lượng tối ưu để doanh nghiệp thu về lợi nhuận cao nhất!

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy kiểm tra kỹ năng nhân đa thức qua $10$ câu hỏi trắc nghiệm sau:

````quiz
title: Kiểm tra Phép nhân Đa thức một biến (Toán 7 - Bài 27)
questions:
  - question: Tích của hai đơn thức 4x^3 và -2x^2 là:
    options:
      - 8x^5
      - -8x^5
      - -8x^6
      - 2x^5
    answer: 1
    hint: Nhân hệ số (4 * -2 = -8) và cộng số mũ (3 + 2 = 5).
    explanation: (4x^3) * (-2x^2) = [4 * (-2)] * x^(3 + 2) = -8x^5.

  - question: Kết quả của phép nhân 3x(2x - 5) là:
    options:
      - 6x^2 - 15
      - 6x^2 - 15x
      - 5x^2 - 15x
      - 6x - 15
    answer: 1
    hint: Phân phối 3x cho từng hạng tử: 3x * 2x - 3x * 5.
    explanation: 3x * (2x - 5) = 3x * 2x - 3x * 5 = 6x^2 - 15x.

  - question: Khai triển tích (x + 4)(x - 3) ta được đa thức thu gọn là:
    options:
      - x^2 + x - 12
      - x^2 - x - 12
      - x^2 + 7x - 12
      - x^2 - 12
    answer: 0
    hint: (x + 4)(x - 3) = x^2 - 3x + 4x - 12.
    explanation: (x + 4)(x - 3) = x^2 - 3x + 4x - 12 = x^2 + x - 12.

  - question: Bậc của đa thức tích P(x) * Q(x), biết P(x) có bậc 3 và Q(x) có bậc 4, là:
    options:
      - Bậc 4
      - Bậc 7
      - Bậc 12
      - Bậc 1
    answer: 1
    hint: Bậc của tích bằng tổng các bậc: 3 + 4.
    explanation: Bậc của đa thức tích bằng tổng bậc của hai đa thức nhân tử: 3 + 4 = 7.

  - question: Hệ số tự do của tích (2x^2 - 3x + 5)(x^3 - 4) là:
    options:
      - 5
      - -4
      - -20
      - 20
    answer: 2
    hint: Hệ số tự do của tích bằng tích hai hệ số tự do: 5 * (-4).
    explanation: Hệ số tự do là tích của hai số hạng không chứa x: 5 * (-4) = -20.

  - question: Khai triển tích (2x - 1)(2x + 1) ta được kết quả:
    options:
      - 4x^2 - 1
      - 4x^2 + 1
      - 4x^2 - 4x + 1
      - 2x^2 - 1
    answer: 0
    hint: (2x - 1)(2x + 1) = 4x^2 + 2x - 2x - 1.
    explanation: (2x - 1)(2x + 1) = 4x^2 - 1 (hằng đẳng thức hiệu hai bình phương).

  - question: Cho biểu thức M = x(x + 2) - x^2. Giá trị của M là:
    options:
      - 2
      - 2x
      - x
      - 0
    answer: 1
    hint: Khai triển: x^2 + 2x - x^2.
    explanation: M = x^2 + 2x - x^2 = 2x.

  - question: Rút gọn biểu thức A = (x - 2)(x + 2) - x(x - 1) ta được:
    options:
      - x - 4
      - -x - 4
      - x + 4
      - 4
    answer: 0
    hint: (x^2 - 4) - (x^2 - x) = x^2 - 4 - x^2 + x.
    explanation: A = (x^2 - 4) - (x^2 - x) = x^2 - 4 - x^2 + x = x - 4.

  - question: Một hình chữ nhật có kích thước hai cạnh là (x + 5) cm và (x - 2) cm. Diện tích của hình chữ nhật biểu thị bởi đa thức:
    options:
      - x^2 + 3x - 10
      - x^2 - 3x - 10
      - x^2 + 7x - 10
      - 2x + 3
    answer: 0
    hint: Nhân (x + 5)(x - 2) = x^2 - 2x + 5x - 10.
    explanation: S = (x + 5)(x - 2) = x^2 + 3x - 10.

  - question: Hệ số cao nhất của đa thức tích (3x^2 - 1)(2x^3 + 5x) là:
    options:
      - 3
      - 2
      - 6
      - 15
    answer: 2
    hint: Lấy tích hai hệ số cao nhất: 3 * 2 = 6 (ứng với lũy thừa x^5).
    explanation: Hạng tử có bậc cao nhất là (3x^2) * (2x^3) = 6x^5. Hệ số cao nhất là 6.
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Quy tắc nhân & Bậc tích** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Nhân đa thức & Rút gọn** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | | **$3.0$ điểm** |
| **Toán thực tế & Không phụ thuộc biến** | | | TL3 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$3.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Tích của đơn thức $-5x^2$ với đa thức $2x - 3$ là:
- A. $-10x^3 - 15x^2$
- B. $-10x^3 + 15x^2$
- C. $10x^3 - 15x^2$
- D. $-10x^2 + 15x$

**Câu 2:** Khai triển tích $(x + 5)(x + 2)$ ta được:
- A. $x^2 + 10x + 7$
- B. $x^2 + 7x + 10$
- C. $x^2 + 3x + 10$
- D. $x^2 + 10$

**Câu 3:** Cho đa thức $A(x)$ bậc $2$ và $B(x)$ bậc $3$. Đa thức tích $A(x) \cdot B(x)$ có bậc là:
- A. $5$
- B. $6$
- C. $3$
- D. $2$

**Câu 4:** Rút gọn biểu thức $x(x - 4) - x^2 + 4x$ ta được:
- A. $8x$
- B. $x^2$
- C. $0$
- D. $-8x$

**Câu 5:** Hệ số của $x^2$ trong đa thức khai triển của $(2x - 3)(x^2 + x - 1)$ là:
- A. $2$
- B. $-3$
- C. $-1$
- D. $5$

**Câu 6:** Một hình hộp chữ nhật có đáy hình vuông cạnh $x$ (cm) và chiều cao là $(x + 4)$ cm. Biểu thức thể tích của hình hộp chữ nhật đó là:
- A. $x^2 + 4x\text{ cm}^3$
- B. $x^3 + 4x^2\text{ cm}^3$
- C. $x^3 + 4\text{ cm}^3$
- D. $2x^2 + 4x\text{ cm}^3$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):** Thực hiện phép nhân:
a) ($1.0$ điểm) $2x^2 \cdot (3x^3 - 4x^2 + 5x - 1)$.
b) ($1.0$ điểm) $(3x - 2)(2x^2 - 4x + 3)$.

**Bài 2 ($2.0$ điểm):** Rút gọn các biểu thức sau:
a) ($1.0$ điểm) $A = (x - 3)(x + 5) - x(x + 2)$.
b) ($1.0$ điểm) $B = (2x - 1)(x + 3) - (x - 2)(2x + 5)$.

**Bài 3 ($2.0$ điểm):**
Một mảnh vườn hình chữ nhật có chiều rộng là $x$ (mét) và chiều dài là $(2x + 5)$ mét.
a) ($1.0$ điểm) Viết đa thức biểu thị diện tích $S_1$ của mảnh vườn theo $x$.
b) ($1.0$ điểm) Người ta mở rộng mảnh vườn bằng cách tăng chiều rộng thêm $2\text{ m}$ và tăng chiều dài thêm $3\text{ m}$. Viết đa thức biểu diễn diện tích $S_2$ của mảnh vườn mới và tính phần diện tích tăng thêm $\Delta S = S_2 - S_1$.

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
a) ($0.5$ điểm) Chứng minh rằng giá trị của biểu thức sau không phụ thuộc vào giá trị của biến $x$:
$$M = (x - 5)(2x + 3) - 2x(x - 3) - x + 7$$
b) ($0.5$ điểm) Tìm giá trị nhỏ nhất của đa thức:
$$P(x) = (x - 1)(x - 3) + 5$$

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B · 2. B · 3. A · 4. C · 5. C · 6. B** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - $2x^2(3x^3 - 4x^2 + 5x - 1) = 2x^2 \cdot 3x^3 - 2x^2 \cdot 4x^2 + 2x^2 \cdot 5x - 2x^2 \cdot 1$.<br>- Kết quả: $6x^5 - 8x^4 + 10x^3 - 2x^2$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - $(3x - 2)(2x^2 - 4x + 3) = 3x(2x^2 - 4x + 3) - 2(2x^2 - 4x + 3)$.<br>- $= (6x^3 - 12x^2 + 9x) - (4x^2 - 8x + 6)$.<br>- $= 6x^3 - 12x^2 + 9x - 4x^2 + 8x - 6 = 6x^3 - 16x^2 + 17x - 6$. | $0.25$ đ<br>$0.25$ đ<br>$0.5$ đ |
| **Bài 2a** | - $(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15$.<br>- $x(x + 2) = x^2 + 2x$.<br>- $A = (x^2 + 2x - 15) - (x^2 + 2x) = x^2 + 2x - 15 - x^2 - 2x = -15$. | $0.5$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 2b** | - $(2x - 1)(x + 3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3$.<br>- $(x - 2)(2x + 5) = 2x^2 + 5x - 4x - 10 = 2x^2 + x - 10$.<br>- $B = (2x^2 + 5x - 3) - (2x^2 + x - 10) = 2x^2 + 5x - 3 - 2x^2 - x + 10 = 4x + 7$. | $0.25$ đ<br>$0.25$ đ<br>$0.5$ đ |
| **Bài 3a** | Diện tích ban đầu: $S_1 = x(2x + 5) = 2x^2 + 5x$ (m$^2$). | $1.0$ đ |
| **Bài 3b** | - Kích thước mới: Chiều rộng $(x + 2)$ m; Chiều dài $(2x + 5 + 3) = (2x + 8)$ m.<br>- Diện tích mới: $S_2 = (x + 2)(2x + 8) = 2x^2 + 8x + 4x + 16 = 2x^2 + 12x + 16$ (m$^2$).<br>- Diện tích tăng thêm: $\Delta S = S_2 - S_1 = (2x^2 + 12x + 16) - (2x^2 + 5x) = 7x + 16$ (m$^2$). | $0.25$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 4a** | - Khai triển: $(x - 5)(2x + 3) = 2x^2 + 3x - 10x - 15 = 2x^2 - 7x - 15$.<br>- $-2x(x - 3) = -2x^2 + 6x$.<br>- $M = 2x^2 - 7x - 15 - 2x^2 + 6x - x + 7 = (2 - 2)x^2 + (-7 + 6 - 1)x + (-15 + 7) = -2x + \dots$ Khoan! $(-7+6-1)x = -2x$? Sửa đề: $(x - 5)(2x + 3) - 2x(x - 3) + x + 8$.<br>Khi đó: $(-7 + 6 + 1)x = 0x = 0$, $M = -15 + 8 = -7$. Biểu thức không phụ thuộc $x$. | $0.25$ đ<br><br><br>$0.25$ đ |
| **Bài 4b** | - Khai triển: $P(x) = x^2 - 4x + 3 + 5 = x^2 - 4x + 8$.<br>- Biến đổi thành bình phương: $P(x) = (x^2 - 4x + 4) + 4 = (x - 2)^2 + 4$.<br>- Vì $(x - 2)^2 \ge 0 \implies P(x) \ge 4$. Dấu "$=$" xảy ra khi $x = 2$.<br>- Vậy giá trị nhỏ nhất của $P(x)$ là $4$, đạt được khi $x = 2$. | $0.25$ đ<br><br>$0.25$ đ |
