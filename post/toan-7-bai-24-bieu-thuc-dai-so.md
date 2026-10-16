---
title: 'Bài 24: Biểu thức đại số - Lý thuyết, Tính giá trị, Viết công thức và 5 Chuyên đề Thực tế'
description: 'Làm chủ Biểu thức đại số (Algebraic Expression), quy tắc viết biến số, phương pháp tính giá trị biểu thức, giải bài toán cực trị sơ khai và 5 chuyên đề kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Biểu thức đại số
  - Giá trị biểu thức
  - Biến số
  - Kết nối tri thức
grade: 7
---

# Bài 24. Biểu thức đại số

Từ những năm tiểu học và đầu lớp 6, các em đã quen thuộc với những biểu thức số học như $3 \times 5 + 4$ hay $12^2 - 7$. Tuy nhiên, trong cuộc sống thực tế, các đại lượng không phải lúc nào cũng là một con số cố định. Giá cước taxi thay đổi theo số kilômét đi được, diện tích mảnh đất thay đổi theo kích thước xây dựng, và số tiền điện hàng tháng biến động theo lượng điện tiêu thụ trong gia đình.

Để mô tả những quy luật tổng quát cho mọi tình huống mà không cần viết lại phép tính cho từng con số riêng lẻ, các nhà toán học đã đưa vào các chữ cái đại diện: $x, y, z, a, b\dots$ Những biểu thức kết hợp giữa các con số, các chữ cái đại diện cho biến và các phép toán được gọi là **Biểu thức đại số (Algebraic Expression)**. Biểu thức đại số chính là chiếc chìa khóa vạn năng mở ra cánh cửa của toàn bộ môn Đại số học và Khoa học máy tính hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 24: BIỂU THỨC ĐẠI SỐ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu thức chứa số, chữ và các phép toán ($+, -, \times, :,$ lũy thừa).<br>• Chữ đại diện cho số gọi là <strong>biến số</strong> (hay biến).<br>• Chữ đại diện cho số cố định gọi là <strong>hằng số</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Quy tắc viết gọn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bỏ dấu nhân giữa số và chữ: $4 \times x = 4x$.<br>• Bỏ dấu nhân giữa các chữ: $x \times y = xy$.<br>• Viết $1x = x$; $(-1)x = -x$.<br>• Số viết trước chữ: $5a^2b$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính giá trị biểu thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• B1: Thay giá trị của biến vào biểu thức.<br>• B2: Thực hiện phép tính theo thứ tự ưu tiên (lũy thừa $\to$ nhân chia $\to$ cộng trừ).<br>• B3: Kết luận giá trị tìm được.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng thực tế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mô hình hóa tiền cước taxi, tiền điện bậc thang.<br>• Công thức diện tích, chu vi hình học.<br>• Chỉ số sức khỏe BMI, chuyển đổi nhiệt độ $^\circ\text{C} \leftrightarrow ^\circ\text{F}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Chu vi và Diện tích hình vuông:** Viết công thức tính chu vi $P$ và diện tích $S$ của một hình vuông có cạnh bằng $a$.
2. **Diện tích hình chữ nhật:** Một hình chữ nhật có chiều dài là $a$ và chiều rộng là $b$. Viết công thức tính diện tích $S$ của hình chữ nhật đó.
3. **Thay số tính nhẩm:** Cho biểu thức $A = 3x + 5$. Hãy tính giá trị của $A$ khi $x = 2$; $x = 0$; $x = -1$.
4. **Viết gọn:** Viết gọn các tích sau theo quy ước toán học: $a \times a \times a$; $4 \times x \times y$; $1 \times m$.
5. **Dịch từ lời sang công thức:** Hãy viết biểu thức diễn đạt: "Tổng của số $x$ và bình phương của số $y$".

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Chu vi $P = 4a$; Diện tích $S = a^2$.
2. **Trả lời:** Diện tích $S = a \cdot b$ (hoặc $ab$).
3. **Trả lời:**
   - Khi $x = 2 \implies A = 3(2) + 5 = 6 + 5 = 11$.
   - Khi $x = 0 \implies A = 3(0) + 5 = 0 + 5 = 5$.
   - Khi $x = -1 \implies A = 3(-1) + 5 = -3 + 5 = 2$.
4. **Trả lời:**
   - $a \times a \times a = a^3$.
   - $4 \times x \times y = 4xy$.
   - $1 \times m = m$.
5. **Trả lời:** Biểu thức là: $x + y^2$.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Khái niệm Biểu thức đại số

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Biểu thức đại số** là biểu thức gồm các số, các chữ cái (đại diện cho các số) và các dấu phép toán (cộng $+$, trừ $-$, nhân $\times$, chia $:$, nâng lên lũy thừa) nối các số và chữ đó lại với nhau.
>
> - Các chữ cái trong biểu thức đại số dùng để đại diện cho những số tùy ý được gọi là **biến số** (gọi tắt là **biến**).
> - Những chữ cái đại diện cho các số xác định cố định được gọi là **hằng số** (gọi tắt là **hằng**).

*Ví dụ:*
- $4x + 7$ là biểu thức đại số của biến $x$.
- $3a^2 - 2ab + 5b^2$ là biểu thức đại số của hai biến $a$ và $b$.
- $\frac{x + 1}{x - 2}$ là biểu thức đại số của biến $x$ (với điều kiện $x \neq 2$).
- Một biểu thức số (như $3^2 + 5$) cũng được coi là một biểu thức đại số đặc biệt (không chứa biến).

---

### 2. Quy ước viết biểu thức đại số gọn gàng

Để biểu thức đại số rõ ràng và thuận tiện trong tính toán, các nhà toán học đã thống nhất các quy ước sau:

1. **Bỏ dấu nhân ($\times$ hoặc $\cdot$):**
   - Giữa các biến: Viết $xy$ thay vì $x \times y$.
   - Giữa số và biến: Viết $5x$ thay vì $5 \times x$.
   - Giữa số (hoặc biến) với dấu ngoặc: Viết $3(x + y)$ thay vì $3 \times (x + y)$.
2. **Quy tắc về hệ số:**
   - Trong một tích, **số viết trước, chữ viết sau** theo thứ tự bảng chữ cái: Viết $6x^2y$ chứ không viết $x^2 6 y$.
   - Khi hệ số là $1$, ta không viết số $1$: Viết $x$ thay vì $1x$.
   - Khi hệ số là $-1$, ta viết dấu trừ: Viết $-xy$ thay vì $(-1)xy$.
3. **Phép chia:** Phép chia thường được viết dưới dạng phân thức: Viết $\frac{x + 2}{y}$ thay vì $(x + 2) : y$.
4. **Lũy thừa:** Viết gọn các tích của nhiều biến giống nhau bằng lũy thừa: $x \cdot x \cdot x = x^3$.

---

### 3. Giá trị của một Biểu thức đại số

> [!IMPORTANT]
> **QUY TRÌNH TÍNH GIÁ TRỊ BIỂU THỨC:**
> Để tính **giá trị của một biểu thức đại số** tại những giá trị cho trước của các biến, ta thực hiện theo $3$ bước:
> - **Bước 1:** Thay các giá trị cho trước của biến vào vị trí tương ứng trong biểu thức. *(Lưu ý: Nếu giá trị thay vào là số âm hoặc phân số, cần đặt trong dấu ngoặc đơn).*
> - **Bước 2:** Thực hiện các phép tính theo thứ tự ưu tiên:
>   + Lũy thừa $\to$ Nhân và chia $\to$ Cộng và trừ.
>   + Trong ngoặc trước, ngoài ngoặc sau.
> - **Bước 3:** Kết luận giá trị của biểu thức tại các giá trị tương ứng của biến.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Viết biểu thức đại số từ lời văn mô tả

**Phương pháp giải:**
1. Đọc kỹ đề bài, xác định các đại lượng tham gia và các biến số được gọi tên.
2. Xác định các phép toán tương ứng với từ khóa trong lời văn:
   - "Tổng", "tăng thêm", "nhiều hơn" $\to$ Phép cộng ($+$).
   - "Hiệu", "giảm đi", "ít hơn" $\to$ Phép trừ ($-$).
   - "Tích", "gấp $k$ lần" $\to$ Phép nhân ($\times$).
   - "Thương", "giảm đi $k$ lần", "chia đều" $\to$ Phép chia ($:$ hoặc phân số).
   - "Bình phương", "lập phương" $\to$ Lũy thừa bậc 2, bậc 3 ($x^2, x^3$).

---

#### Bài toán 1:
Hãy viết biểu thức đại số biểu thị:
a) Hiệu của $a$ và bình phương của $b$.
b) Bình phương của hiệu giữa $a$ và $b$.
c) Tích của tổng hai số $x, y$ với hiệu của hai số đó.
d) Quãng đường đi được (km) của một ô tô chuyển động trong $t$ giờ với vận tốc $55\text{ km/h}$.
e) Tổng số tiền (nghìn đồng) phải trả khi mua $x$ quyển vở giá $12$ nghìn đồng/quyển và $y$ chiếc bút bi giá $6$ nghìn đồng/chiếc.

**Lời giải:**

a) "Bình phương của $b$" là $b^2$. Vậy hiệu của $a$ và bình phương của $b$ là:
$$a - b^2$$

b) "Hiệu giữa $a$ và $b$" là $(a - b)$. Vậy bình phương của hiệu là:
$$(a - b)^2$$
*(Lưu ý: Phân biệt rõ $a - b^2$ và $(a - b)^2$ để không bị nhầm lẫn!)*

c) "Tổng hai số" là $(x + y)$, "hiệu hai số" là $(x - y)$. Tích của chúng là:
$$(x + y)(x - y)$$

d) Áp dụng công thức quãng đường $s = v \cdot t$:
$$55t\text{ (km)}$$

e) Số tiền mua vở là $12x$, số tiền mua bút là $6y$. Tổng số tiền phải trả là:
$$12x + 6y\text{ (nghìn đồng)}$$

---

### Dạng 2: Tính giá trị của biểu thức đại số

**Phương pháp giải:**
Thay số cẩn thận, đặc biệt lưu ý quy tắc dấu khi thay số âm vào lũy thừa:
- $(-a)^2 = a^2$ (lũy thừa bậc chẵn của số âm là số dương).
- $(-a)^3 = -a^3$ (lũy thừa bậc lẻ của số âm là số âm).
- $-a^2 = -(a^2)$ (dấu trừ ở ngoài lũy thừa).

---

#### Bài toán 2:
Tính giá trị của các biểu thức sau:
a) $A = 2x^2 - 5x + 3$ tại $x = 3$ và tại $x = -2$.
b) $B = 3x^2y - 2xy^2 + 1$ tại $x = -1$ và $y = 2$.
c) $C = \frac{2x - y}{x + 3y}$ tại $x = 5$ và $y = -1$.

**Lời giải:**

a) Xét biểu thức $A = 2x^2 - 5x + 3$:
- Thay $x = 3$ vào $A$:
$$A = 2 \cdot (3)^2 - 5 \cdot (3) + 3 = 2 \cdot 9 - 15 + 3 = 18 - 15 + 3 = 6$$
Vậy giá trị của $A$ tại $x = 3$ là $6$.

- Thay $x = -2$ vào $A$:
$$A = 2 \cdot (-2)^2 - 5 \cdot (-2) + 3 = 2 \cdot 4 + 10 + 3 = 8 + 10 + 3 = 21$$
Vậy giá trị của $A$ tại $x = -2$ là $21$.

b) Xét biểu thức $B = 3x^2y - 2xy^2 + 1$:
- Thay $x = -1$ và $y = 2$ vào $B$:
$$B = 3 \cdot (-1)^2 \cdot (2) - 2 \cdot (-1) \cdot (2)^2 + 1$$
$$B = 3 \cdot 1 \cdot 2 - 2 \cdot (-1) \cdot 4 + 1 = 6 - (-8) + 1 = 6 + 8 + 1 = 15$$
Vậy giá trị của $B$ tại $x = -1; y = 2$ là $15$.

c) Xét biểu thức $C = \frac{2x - y}{x + 3y}$:
- Điều kiện mẫu số: $x + 3y = 5 + 3(-1) = 2 \neq 0$ (thỏa mãn).
- Thay $x = 5$ và $y = -1$ vào $C$:
$$C = \frac{2 \cdot (5) - (-1)}{5 + 3 \cdot (-1)} = \frac{10 + 1}{5 - 3} = \frac{11}{2} = 5.5$$
Vậy giá trị của $C$ tại $x = 5; y = -1$ là $\frac{11}{2}$.

---

### Dạng 3: Tìm giá trị của biến để biểu thức nhận giá trị cho trước

**Phương pháp giải:**
1. Cho biểu thức bằng giá trị đề bài yêu cầu: $A(x) = k$.
2. Áp dụng quy tắc chuyển vế và tìm $x$ cơ bản để giải phương trình.
3. Đối chiếu với điều kiện xác định (nếu có) và kết luận.

---

#### Bài toán 3:
a) Tìm $x$ để biểu thức $M = 4x - 7$ nhận giá trị bằng $17$.
b) Tìm $x$ để biểu thức $N = x^2 - 9$ nhận giá trị bằng $0$.
c) Tìm $x$ để phân thức $P = \frac{3x - 6}{x + 4}$ có giá trị bằng $0$.

**Lời giải:**

a) Để $M = 17$, ta có:
$$4x - 7 = 17 \implies 4x = 17 + 7 \implies 4x = 24 \implies x = 6$$
Vậy khi $x = 6$ thì biểu thức $M$ nhận giá trị bằng $17$.

b) Để $N = 0$, ta có:
$$x^2 - 9 = 0 \implies x^2 = 9 \implies x = 3\quad \text{hoặc}\quad x = -3$$
Vậy khi $x = 3$ hoặc $x = -3$ thì biểu thức $N$ nhận giá trị bằng $0$.

c) Xét $P = \frac{3x - 6}{x + 4}$:
- Điều kiện xác định: $x + 4 \neq 0 \implies x \neq -4$.
- Một phân thức bằng $0$ khi tử số bằng $0$ và mẫu số khác $0$:
$$3x - 6 = 0 \implies 3x = 6 \implies x = 2$$
- Giá trị $x = 2$ thỏa mãn điều kiện $x \neq -4$.
Vậy khi $x = 2$ thì biểu thức $P$ nhận giá trị bằng $0$.

---

### Dạng 4: Tìm giá trị nhỏ nhất (GTNN) hoặc lớn nhất (GTLN) sơ khai

**Phương pháp giải:**
Sử dụng tính chất bất đẳng thức không âm cơ bản:
$$A^2 \ge 0\quad \text{với mọi } A$$
- **Dạng GTNN:** $P(x) = (x - a)^2 + m \ge m$. Giá trị nhỏ nhất là $m$, đạt được khi $x = a$.
- **Dạng GTLN:** $Q(x) = M - (x - b)^2 \le M$. Giá trị lớn nhất là $M$, đạt được khi $x = b$.

---

#### Bài toán 4:
a) Tìm giá trị nhỏ nhất của biểu thức $A = (x - 3)^2 + 7$.
b) Tìm giá trị lớn nhất của biểu thức $B = 15 - (2x + 4)^2$.

**Lời giải:**

a) Ta có $(x - 3)^2 \ge 0$ với mọi $x \in \mathbb{R}$.
Cộng cả hai vế với $7$:
$$(x - 3)^2 + 7 \ge 0 + 7 = 7\quad \text{với mọi } x$$
Dấu "$=$" xảy ra khi và chỉ khi:
$$x - 3 = 0 \implies x = 3$$
**Kết luận:** Giá trị nhỏ nhất của $A$ là $7$, đạt được khi $x = 3$.

b) Ta có $(2x + 4)^2 \ge 0 \implies -(2x + 4)^2 \le 0$ với mọi $x$.
Cộng cả hai vế với $15$:
$$15 - (2x + 4)^2 \le 15 + 0 = 15\quad \text{với mọi } x$$
Dấu "$=$" xảy ra khi và chỉ khi:
$$2x + 4 = 0 \implies 2x = -4 \implies x = -2$$
**Kết luận:** Giá trị lớn nhất của $B$ là $15$, đạt được khi $x = -2$.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Lịch sử Đại số học — Từ Al-Khwarizmi đến François Viète

Từ "Đại số" trong tiếng Anh là **Algebra**, bắt nguồn từ tiếng Ả Rập *al-jabr* trong cuốn sách nổi tiếng *Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wal-muqābala* (năm 820) của nhà bác học Muhammad ibn Musa al-Khwarizmi. Từ này có nghĩa là "sự khôi phục, đưa các số âm sang vế đối diện" (chính là quy tắc chuyển vế đổi dấu!).

Vào thời cổ đại, người ta phải diễn đạt toán học hoàn toàn bằng lời văn dài dòng: *"Một đống và một phần bảy của nó bằng mười chín"*. Đến thế kỷ 16, nhà toán học Pháp **François Viète (1540 - 1603)** đã tạo nên một cuộc cách mạng vĩ đại khi lần đầu tiên dùng các chữ cái nguyên âm ($A, E, I, O, U$) làm ẩn số và các phụ âm ($B, C, D\dots$) làm tham số. Nhờ biểu thức đại số, những bài toán từng mất hàng trang giấy mô tả đã được cô đọng lại chỉ trong một dòng công thức tinh tế!

---

### Chuyên đề 2: Chỉ số Khối Cơ thể (BMI) và Biểu thức Sức khỏe Học đường

Tổ chức Y tế Thế giới (WHO) sử dụng một biểu thức đại số nổi tiếng để đánh giá thể trạng dinh dưỡng của con người — đó là **Chỉ số BMI (Body Mass Index)**:
$$\text{BMI} = \frac{m}{h^2}$$
Trong đó:
- $m$ là khối lượng cơ thể (tính bằng kilôgam, $\text{kg}$).
- $h$ là chiều cao (tính bằng mét, $\text{m}$).

Ví dụ, một bạn học sinh lớp 7 có cân nặng $m = 48\text{ kg}$ và chiều cao $h = 1.6\text{ m}$.
Giá trị BMI của bạn là:
$$\text{BMI} = \frac{48}{1.6^2} = \frac{48}{2.56} = 18.75$$
Với kết quả $18.75$ (nằm trong khoảng $18.5 - 24.9$), bạn có thân hình cân đối và sức khỏe tốt!

---

### Chuyên đề 3: Biến số và Biểu thức trong Ngôn ngữ Lập trình

Nếu các em từng học lập trình Python, JavaScript hay Scratch, các em sẽ thấy biểu thức đại số chính là linh hồn của phần mềm:
```python
# Tính tổng tiền thanh toán giỏ hàng thương mại điện tử
don_gia = 150000  # Hằng số
so_luong = 3  # Biến số x
phi_ship = 30000  # Hằng số
thue_vat = 0.08  # 8%

# Biểu thức đại số tính tổng tiền
tong_tien = (don_gia * so_luong) * (1 + thue_vat) + phi_ship
print("Tổng thanh toán:", tong_tien)
```
Mỗi khi người dùng đổi số lượng sản phẩm trên website, máy tính sẽ lập tức gán giá trị mới vào biến số và tính lại giá trị của biểu thức trong vòng vài phần triệu giây!

---

### Chuyên đề 4: Chuyển đổi Thang đo Nhiệt độ Celsius và Fahrenheit

Khi xem dự báo thời tiết tại Mỹ hoặc đọc sách nước ngoài, nhiệt độ thường đo bằng độ Fahrenheit ($^\circ\text{F}$). Công thức chuyển đổi giữa độ Celsius ($C$) và độ Fahrenheit ($F$) là một biểu thức bậc nhất kinh điển:
$$F = \frac{9}{5}C + 32$$
Ngược lại:
$$C = \frac{5}{9}(F - 32)$$

Ví dụ, khi nhiệt kế chỉ $100^\circ\text{C}$ (nước sôi), nhiệt độ Fahrenheit tương ứng là:
$$F = \frac{9}{5} \times 100 + 32 = 180 + 32 = 212^\circ\text{F}$$
Khi nhiệt độ phòng là $68^\circ\text{F}$, nhiệt độ Celsius là:
$$C = \frac{5}{9}(68 - 32) = \frac{5}{9} \times 36 = 20^\circ\text{C}$$

---

### Chuyên đề 5: Bài toán Tối ưu hóa Diện tích Hàng rào (Isoperimetric Problem)

Một bác nông dân có một cuộn lưới thép dài $40\text{ m}$ và muốn rào một khu đất hình chữ nhật cạnh bờ tường đá có sẵn (chỉ cần rào $3$ cạnh: một cạnh chiều dài $x$ và hai cạnh chiều rộng).
Biểu thức chiều rộng là $\frac{40 - x}{2}$.
Diện tích khu đất được rào là:
$$S(x) = x \cdot \frac{40 - x}{2} = 20x - \frac{1}{2}x^2 = 200 - \frac{1}{2}(x - 20)^2$$

Vì $\frac{1}{2}(x - 20)^2 \ge 0$ nên $S(x) \le 200\text{ m}^2$.
Giá trị lớn nhất của diện tích là $200\text{ m}^2$, đạt được khi $x = 20\text{ m}$ (chiều rộng $= 10\text{ m}$).
Biểu thức đại số giúp người nông dân rào được diện tích chăn nuôi rộng lớn nhất chỉ với một lượng lưới thép hữu hạn!

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy rèn luyện phản xạ biểu thức đại số qua $10$ câu hỏi trắc nghiệm sau:

````quiz
title: Kiểm tra Biểu thức đại số (Toán 7 - Bài 24)
questions:
  - question: Biểu thức nào sau đây là một biểu thức đại số?
    options:
      - 3x^2 - 5x + 1
      - 2 + 5 = 7
      - x > 4
      - 5x - 2 < 8
    answer: 0
    hint: Biểu thức đại số gồm số, biến và các phép toán; không chứa dấu so sánh (=, <, >).
    explanation: 3x^2 - 5x + 1 là biểu thức đại số. Các phương án còn lại là đẳng thức hoặc bất đẳng thức.

  - question: Trong biểu thức đại số 4a^2 - 7b + 9, các chữ a và b được gọi là gì?
    options:
      - Hằng số
      - Biến số
      - Phép toán
      - Tỉ số
    answer: 1
    hint: Chữ cái đại diện cho các giá trị số tùy ý trong biểu thức.
    explanation: a và b là các biến số (hay biến).

  - question: Biểu thức đại số biểu thị "Hiệu của hai lần số x và ba lần số y" là:
    options:
      - 2x + 3y
      - 2x - 3y
      - 3y - 2x
      - (2x)(3y)
    answer: 1
    hint: Hai lần x là 2x, ba lần y là 3y. Hiệu lấy 2x trừ 3y.
    explanation: Hai lần số x là 2x, ba lần số y là 3y. Hiệu của chúng là 2x - 3y.

  - question: Giá trị của biểu thức P = 3x - 4 tại x = -2 là:
    options:
      - 2
      - -2
      - -10
      - 10
    answer: 2
    hint: Thay x = -2: P = 3*(-2) - 4.
    explanation: P = 3*(-2) - 4 = -6 - 4 = -10.

  - question: Giá trị của biểu thức Q = x^2 - 2xy + y^2 tại x = 3 và y = -1 là:
    options:
      - 4
      - 8
      - 16
      - 20
    answer: 2
    hint: Q = (x - y)^2 = (3 - (-1))^2 = 4^2 = 16.
    explanation: Q = 3^2 - 2*(3)*(-1) + (-1)^2 = 9 + 6 + 1 = 16. Hoặc nhận dạng Q = (x - y)^2 = (3 - (-1))^2 = 4^2 = 16.

  - question: Quy ước viết nào sau đây là KHÔNG ĐÚNG trong biểu thức đại số?
    options:
      - Viết xy thay cho x * y
      - Viết 5x thay cho 5 * x
      - Viết x5 thay cho 5 * x
      - Viết -x thay cho (-1) * x
    answer: 2
    hint: Trong tích giữa số và chữ, số phải được viết trước chữ.
    explanation: Quy ước chuẩn là số viết trước chữ (5x), không viết x5.

  - question: Giá trị của x để biểu thức 5x - 15 nhận giá trị bằng 0 là:
    options:
      - x = 0
      - x = 3
      - x = -3
      - x = 5
    answer: 1
    hint: Giải phương trình 5x - 15 = 0.
    explanation: 5x - 15 = 0 suy ra 5x = 15 suy ra x = 3.

  - question: Một hình tam giác có độ dài đáy là a (cm) và chiều cao tương ứng là h (cm). Biểu thức biểu thị diện tích hình tam giác đó là:
    options:
      - a * h
      - (1/2) * a * h
      - 2 * a * h
      - a + h
    answer: 1
    hint: Diện tích tam giác bằng một nửa tích đáy nhân chiều cao.
    explanation: Diện tích hình tam giác là S = (1/2)ah.

  - question: Giá trị nhỏ nhất của biểu thức A = (x + 2)^2 - 5 là:
    options:
      - -5
      - 5
      - 0
      - -2
    answer: 0
    hint: (x + 2)^2 >= 0 với mọi x.
    explanation: Vì (x + 2)^2 >= 0 nên A = (x + 2)^2 - 5 >= -5. Giá trị nhỏ nhất là -5 khi x = -2.

  - question: Một người đi xe máy với vận tốc x (km/h) trong 2 giờ, sau đó đi tiếp bằng ô tô với vận tốc y (km/h) trong 3 giờ. Tổng quãng đường người đó đã đi là:
    options:
      - 5(x + y)
      - 2x + 3y
      - 3x + 2y
      - 6xy
    answer: 1
    hint: Quãng đường xe máy là 2x, quãng đường ô tô là 3y.
    explanation: Tổng quãng đường là 2x + 3y (km).
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Khái niệm & Quy tắc viết** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Tính giá trị biểu thức** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | | **$3.0$ điểm** |
| **Toán thực tế & Cực trị sơ khai** | | | TL3 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$3.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Biểu thức nào sau đây KHÔNG PHẢI là biểu thức đại số?
- A. $2x - 3$
- B. $\frac{x + 1}{y}$
- C. $4x + 1 = 9$
- D. $a^2 + b^2$

**Câu 2:** Biểu thức đại số biểu thị "Tổng bình phương của hai số $a$ và $b$" là:
- A. $(a + b)^2$
- B. $a^2 + b^2$
- C. $2(a + b)$
- D. $a^2 - b^2$

**Câu 3:** Giá trị của biểu thức $M = 2x^2 - 1$ tại $x = -3$ là:
- A. $-19$
- B. $17$
- C. $-13$
- D. $11$

**Câu 4:** Cho biểu thức $N = 3x - 2y$. Khi $x = 4$ và $y = 5$, giá trị của $N$ là:
- A. $2$
- B. $-2$
- C. $22$
- D. $10$

**Câu 5:** Tìm $x$ để biểu thức $A = 3x - 9$ có giá trị bằng $12$:
- A. $x = 1$
- B. $x = 3$
- C. $x = 7$
- D. $x = 21$

**Câu 6:** Một hình chữ nhật có chu vi bằng $30\text{ cm}$. Nếu gọi chiều rộng là $x$ ($\text{cm}$) thì biểu thức biểu thị diện tích hình chữ nhật đó là:
- A. $x(30 - x)$
- B. $x(15 - x)$
- C. $15x$
- D. $30x$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):**
Hãy viết biểu thức đại số biểu thị:
a) ($0.5$ điểm) Tích của tổng hai số $x, y$ với bình phương của số $x$.
b) ($0.5$ điểm) Quãng đường đi được của một xe đạp điện trong $t$ giờ với vận tốc $25\text{ km/h}$.
c) ($1.0$ điểm) Số tiền cước taxi (đồng) khi đi $x$ kilômét, biết giá mở cửa cho $1\text{ km}$ đầu tiên là $14\,000$ đồng, và mỗi kilômét tiếp theo có giá $12\,000$ đồng (với $x > 1$).

**Bài 2 ($2.0$ điểm):**
Tính giá trị của các biểu thức sau:
a) ($1.0$ điểm) $A = 3x^2 - 4x + 1$ tại $x = 2$ và tại $x = -\frac{1}{3}$.
b) ($1.0$ điểm) $B = 2x^2y - 3xy + y^2$ tại $x = -2$ và $y = 3$.

**Bài 3 ($2.0$ điểm):**
Một rạp chiếu phim bán hai loại vé xem phim: vé người lớn giá $90$ nghìn đồng/vé và vé học sinh giá $60$ nghìn đồng/vé.
a) ($1.0$ điểm) Hãy viết biểu thức đại số biểu thị tổng số tiền bán vé thu được khi bán được $x$ vé người lớn và $y$ vé học sinh.
b) ($1.0$ điểm) Trong một buổi chiếu tối thứ Bảy, rạp đã bán được $150$ vé người lớn và $240$ vé học sinh. Hãy tính tổng số tiền rạp thu được trong buổi chiếu đó.

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
a) ($0.5$ điểm) Tìm giá trị nhỏ nhất của biểu thức $P = (x - 4)^2 + 2026$.
b) ($0.5$ điểm) Tìm giá trị lớn nhất của biểu thức $Q = 100 - (3x + 6)^2 - (y - 1)^2$.

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. C \| 2. B \| 3. B \| 4. A \| 5. C \| 6. B** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | Biểu thức là: $(x + y)x^2$ hoặc $x^2(x + y)$. | $0.5$ đ |
| **Bài 1b** | Biểu thức quãng đường: $25t$ (km). | $0.5$ đ |
| **Bài 1c** | - Giá cước gồm $14\,000$ đồng cho km đầu và $12\,000$ đồng cho $(x - 1)$ km tiếp theo.<br>- Biểu thức: $14\,000 + 12\,000(x - 1)$ (đồng) (hoặc rút gọn: $12\,000x + 2\,000$). | $0.5$ đ<br>$0.5$ đ |
| **Bài 2a** | - Tại $x = 2$: $A = 3(2)^2 - 4(2) + 1 = 3 \cdot 4 - 8 + 1 = 12 - 8 + 1 = 5$.<br>- Tại $x = -\frac{1}{3}$: $A = 3(-\frac{1}{3})^2 - 4(-\frac{1}{3}) + 1 = 3 \cdot \frac{1}{9} + \frac{4}{3} + 1 = \frac{1}{3} + \frac{4}{3} + 1 = \frac{5}{3} + \frac{3}{3} = \frac{8}{3}$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 2b** | Thay $x = -2; y = 3$ vào $B$:<br>$B = 2(-2)^2(3) - 3(-2)(3) + (3)^2 = 2 \cdot 4 \cdot 3 - (-18) + 9 = 24 + 18 + 9 = 51$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 3a** | Biểu thức tổng số tiền là: $90x + 60y$ (nghìn đồng) hoặc $90\,000x + 60\,000y$ (đồng). | $1.0$ đ |
| **Bài 3b** | Thay $x = 150$ và $y = 240$ vào biểu thức:<br>$T = 90 \times 150 + 60 \times 240 = 13\,500 + 14\,400 = 27\,900$ (nghìn đồng) = $27\,900\,000$ (đồng).<br>Kết luận: Rạp thu được $27.9$ triệu đồng. | $0.5$ đ<br>$0.5$ đ |
| **Bài 4a** | Ta có $(x - 4)^2 \ge 0 \implies P = (x - 4)^2 + 2026 \ge 2026$.<br>Dấu "$=$" xảy ra khi $x - 4 = 0 \implies x = 4$. Vậy GTNN của $P$ là $2026$. | $0.25$ đ<br>$0.25$ đ |
| **Bài 4b** | Ta có $(3x + 6)^2 \ge 0$ và $(y - 1)^2 \ge 0$ với mọi $x, y$.<br>$\implies Q = 100 - (3x + 6)^2 - (y - 1)^2 \le 100$.<br>Dấu "$=$" xảy ra khi $3x + 6 = 0 \implies x = -2$ và $y - 1 = 0 \implies y = 1$.<br>Vậy GTLN của $Q$ là $100$ khi $(x; y) = (-2; 1)$. | $0.25$ đ<br><br>$0.25$ đ |
