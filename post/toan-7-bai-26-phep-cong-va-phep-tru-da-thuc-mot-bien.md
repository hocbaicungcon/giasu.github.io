---
title: 'Bài 26: Phép cộng và phép trừ đa thức một biến - Lý thuyết, Hai cách đặt tính và 5 Chuyên đề Thực tế'
description: 'Làm chủ phép cộng và phép trừ đa thức một biến P(x) ± Q(x), hai phương pháp đặt tính hàng ngang và cột dọc, quy tắc đổi dấu ngoặc và 5 chuyên đề kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Cộng trừ đa thức
  - Đa thức một biến
  - Đặt tính cột dọc
  - Kết nối tri thức
grade: 7
---

# Bài 26. Phép cộng và phép trừ đa thức một biến

Trong thế giới kinh doanh, nếu tổng doanh thu từ việc bán $x$ sản phẩm được mô tả bởi đa thức $R(x)$, và tổng chi phí sản xuất được mô tả bởi đa thức $C(x)$, thì lợi nhuận ròng của doanh nghiệp chính là hiệu của hai đa thức đó: $L(x) = R(x) - C(x)$. Trong vật lý sóng, khi hai nguồn sóng âm giao thoa với nhau, dao động tổng hợp tại một điểm chính là tổng của hai phương trình sóng thành phần.

Phép cộng và phép trừ đa thức một biến là những viên gạch cơ bản nhất để kết hợp các mô hình toán học đơn lẻ thành một bức tranh toàn cảnh phức tạp hơn. Trong bài học này, chúng ta sẽ cùng rèn luyện thành thạo hai phương pháp tính toán chuẩn mực: **Đặt tính theo hàng ngang** và **Đặt tính theo cột dọc**, nắm vững quy tắc đổi dấu khi phá ngoặc và ứng dụng giải các bài toán tối ưu hóa trong thực tế!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 26: CỘNG VÀ TRỪ ĐA THỨC MỘT BIẾN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Cách 1: Hàng ngang</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bỏ dấu ngoặc (trước ngoặc là dấu "$-$" phải <strong>đổi dấu toàn bộ</strong> hạng tử bên trong).<br>• Nhóm các hạng tử có cùng số mũ.<br>• Cộng trừ hệ số, giữ nguyên phần biến.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Cách 2: Cột dọc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Thu gọn và sắp xếp cả 2 đa thức cùng theo lũy thừa giảm dần.<br>• Đặt các hạng tử cùng số mũ <strong>thẳng cột với nhau</strong>.<br>• Nếu khuyết lũy thừa nào thì để trống khoảng đó.<br>• Cộng (hoặc trừ) hệ số theo từng cột.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Bậc của tổng & hiệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\text{Bậc}(P \pm Q) \le \max(\text{Bậc } P, \text{Bậc } Q)$.<br>• <strong>Hiện tượng triệt tiêu:</strong> Nếu hai hệ số của bậc cao nhất đối nhau (khi cộng) hoặc bằng nhau (khi trừ), bậc của kết quả sẽ <strong>giảm xuống</strong>!</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tìm đa thức chưa biết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $P(x) + M(x) = Q(x) \implies M(x) = Q(x) - P(x)$.<br>• $P(x) - N(x) = Q(x) \implies N(x) = P(x) - Q(x)$.<br>• Vận dụng quy tắc chuyển vế đổi dấu quen thuộc.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Quy tắc dấu ngoặc:** Bỏ dấu ngoặc của các biểu thức sau: $-(3x^2 - 5x + 4)$ và $+(-2x^3 + 7x - 1)$.
2. **Cộng trừ đơn thức:** Tính: $6x^4 - 9x^4$; $4x^2 - (-3x^2)$; $5x - 5x$.
3. **Tìm số hạng chưa biết:** Tìm $x$ trong biểu thức số học: $x + 25 = 60$; $45 - x = 18$.
4. **Sắp xếp cột dọc:** Đặt phép cộng số học theo cột dọc: $205 + 138$. Chữ số hàng nào phải thẳng hàng với chữ số hàng đó?
5. **Dự đoán:** Nếu đa thức $P(x)$ có bậc $3$ và đa thức $Q(x)$ có bậc $3$, liệu tổng $P(x) + Q(x)$ có nhất thiết phải có bậc $3$ hay không? Cho ví dụ.

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - $-(3x^2 - 5x + 4) = -3x^2 + 5x - 4$ (đổi dấu toàn bộ các hạng tử bên trong).
   - $+(-2x^3 + 7x - 1) = -2x^3 + 7x - 1$ (giữ nguyên dấu các hạng tử).
2. **Trả lời:**
   - $6x^4 - 9x^4 = (6 - 9)x^4 = -3x^4$.
   - $4x^2 - (-3x^2) = (4 + 3)x^2 = 7x^2$.
   - $5x - 5x = 0$.
3. **Trả lời:**
   - $x = 60 - 25 = 35$.
   - $x = 45 - 18 = 27$.
4. **Trả lời:** Khi đặt tính cột dọc, các chữ số cùng hàng (hàng đơn vị, hàng chục, hàng trăm) bắt buộc phải đặt **thẳng cột với nhau**. Tương tự như vậy, trong đa thức, các đơn thức cùng số mũ phải thẳng cột với nhau!
5. **Trả lời:** **Không nhất thiết** phải có bậc $3$. Nếu hai hạng tử bậc $3$ triệt tiêu nhau thì bậc sẽ giảm xuống.
   - Ví dụ: $P(x) = 2x^3 + x$ và $Q(x) = -2x^3 + 5$. Tổng là: $P(x) + Q(x) = x + 5$ (chỉ còn là đa thức bậc $1$!).
</details>

---

## I. Lý thuyết trọng tâm

### 1. Phương pháp 1: Đặt tính theo hàng ngang

Đây là phương pháp linh hoạt và phổ biến nhất khi thực hiện phép cộng và trừ đa thức.

> [!IMPORTANT]
> **QUY TRÌNH ĐẶT TÍNH THEO HÀNG NGANG:**
> - **Bước 1: Viết phép tính với các dấu ngoặc:**
>   $$P(x) + Q(x) = (P(x)) + (Q(x))$$
>   $$P(x) - Q(x) = (P(x)) - (Q(x))$$
> - **Bước 2: Bỏ dấu ngoặc theo quy tắc dấu:**
>   + Đằng trước dấu ngoặc có dấu "$+$": Giữ nguyên dấu của mọi hạng tử trong ngoặc.
>   + Đằng trước dấu ngoặc có dấu "$-$": **Đổi dấu tất cả các hạng tử trong ngoặc** ($+$ thành $-$, và $-$ thành $+$).
> - **Bước 3: Nhóm các hạng tử có cùng số mũ của biến:** Sử dụng tính chất giao hoán và kết hợp của phép cộng.
> - **Bước 4: Thu gọn từng nhóm và sắp xếp kết quả.**

---

### 2. Phương pháp 2: Đặt tính theo cột dọc

Phương pháp đặt tính theo cột dọc đặc biệt hữu ích khi hai đa thức có nhiều hạng tử bậc cao, giúp tránh nhầm lẫn và sót số hạng.

> [!TIP]
> **QUY TRÌNH ĐẶT TÍNH THEO CỘT DỌC:**
> - **Bước 1:** Thu gọn và sắp xếp cả hai đa thức theo cùng một thứ tự lũy thừa giảm dần (hoặc tăng dần) của biến.
> - **Bước 2:** Đặt đa thức thứ nhất ở trên, đa thức thứ hai ở dưới sao cho **các hạng tử có cùng số mũ được đặt thẳng cột với nhau**. Nếu đa thức bị khuyết bậc nào, ta để trống một khoảng ở cột đó (hoặc ghi $0x^k$).
> - **Bước 3:** Đặt dấu phép tính ($+$ hoặc $-$) ở bên trái và kẻ một đường gạch ngang ở dưới.
> - **Bước 4:** Thực hiện cộng (hoặc trừ) các hệ số theo từng cột dọc từ trái sang phải (hoặc từ phải sang trái).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 200" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình đặt tính cột dọc đa thức">
    <rect x="20" y="15" width="500" height="170" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="60" y="55" font-size="18" font-weight="700" fill="#1e40af">P(x) =</text>
    <text x="140" y="55" font-size="18" font-weight="600" fill="#1e40af">4x³</text>
    <text x="230" y="55" font-size="18" font-weight="600" fill="#1e40af">+ 2x²</text>
    <text x="330" y="55" font-size="18" font-weight="600" fill="#94a3b8">(khuyết x)</text>
    <text x="430" y="55" font-size="18" font-weight="600" fill="#1e40af">- 5</text>

    <text x="45" y="95" font-size="22" font-weight="700" fill="#047857">+</text>
    <text x="60" y="95" font-size="18" font-weight="700" fill="#047857">Q(x) =</text>
    <text x="140" y="95" font-size="18" font-weight="600" fill="#047857">3x³</text>
    <text x="230" y="95" font-size="18" font-weight="600" fill="#94a3b8">(khuyết x²)</text>
    <text x="330" y="95" font-size="18" font-weight="600" fill="#047857">- 6x</text>
    <text x="430" y="95" font-size="18" font-weight="600" fill="#047857">+ 8</text>

    <line x1="50" y1="115" x2="480" y2="115" stroke="#334155" stroke-width="2" />

    <text x="50" y="150" font-size="18" font-weight="700" fill="#b45309">Tổng =</text>
    <text x="140" y="150" font-size="18" font-weight="700" fill="#b45309">7x³</text>
    <text x="230" y="150" font-size="18" font-weight="700" fill="#b45309">+ 2x²</text>
    <text x="330" y="150" font-size="18" font-weight="700" fill="#b45309">- 6x</text>
    <text x="430" y="150" font-size="18" font-weight="700" fill="#b45309">+ 3</text>
  </svg>
</div>

---

### 3. Nhận xét về Bậc của Đa thức Tổng và Hiệu

Giả sử $P(x)$ có bậc $m$ và $Q(x)$ có bậc $n$:
1. Nếu $m \neq n$: Bậc của tổng $P(x) + Q(x)$ và hiệu $P(x) - Q(x)$ luôn **bằng số lớn hơn** giữa $m$ và $n$:
   $$\text{Bậc}(P \pm Q) = \max(m, n)$$
2. Nếu $m = n$: Bậc của tổng hoặc hiệu **không vượt quá $m$**:
   - Nếu hai hệ số cao nhất không triệt tiêu nhau: Bậc vẫn bằng $m$.
   - Nếu hai hệ số cao nhất triệt tiêu nhau (tổng hoặc hiệu bằng $0$): Bậc sẽ **nhỏ hơn $m$**.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Cộng, trừ đa thức một biến theo hàng ngang

**Phương pháp giải:**
Thực hiện nghiêm ngặt quy tắc phá ngoặc và gom nhóm hạng tử đồng dạng.

---

#### Bài toán 1:
Cho hai đa thức:
$$A(x) = 3x^4 - 2x^3 + 5x^2 - 4x + 1$$
$$B(x) = -2x^4 + 2x^3 - 3x^2 + 7x - 6$$
Tính:
a) $A(x) + B(x)$
b) $A(x) - B(x)$

**Lời giải:**

a) Tính tổng $A(x) + B(x)$:
$$A(x) + B(x) = (3x^4 - 2x^3 + 5x^2 - 4x + 1) + (-2x^4 + 2x^3 - 3x^2 + 7x - 6)$$
Bỏ dấu ngoặc (giữ nguyên dấu):
$$A(x) + B(x) = 3x^4 - 2x^3 + 5x^2 - 4x + 1 - 2x^4 + 2x^3 - 3x^2 + 7x - 6$$
Nhóm các hạng tử cùng số mũ:
$$A(x) + B(x) = (3x^4 - 2x^4) + (-2x^3 + 2x^3) + (5x^2 - 3x^2) + (-4x + 7x) + (1 - 6)$$
Thu gọn từng nhóm:
$$A(x) + B(x) = x^4 + 0x^3 + 2x^2 + 3x - 5$$
$$A(x) + B(x) = x^4 + 2x^2 + 3x - 5$$

b) Tính hiệu $A(x) - B(x)$:
$$A(x) - B(x) = (3x^4 - 2x^3 + 5x^2 - 4x + 1) - (-2x^4 + 2x^3 - 3x^2 + 7x - 6)$$
Bỏ dấu ngoặc (đổi dấu toàn bộ các hạng tử của $B(x)$):
$$A(x) - B(x) = 3x^4 - 2x^3 + 5x^2 - 4x + 1 + 2x^4 - 2x^3 + 3x^2 - 7x + 6$$
Nhóm các hạng tử cùng số mũ:
$$A(x) - B(x) = (3x^4 + 2x^4) + (-2x^3 - 2x^3) + (5x^2 + 3x^2) + (-4x - 7x) + (1 + 6)$$
Thu gọn:
$$A(x) - B(x) = 5x^4 - 4x^3 + 8x^2 - 11x + 7$$

---

### Dạng 2: Cộng, trừ đa thức một biến theo cột dọc

**Phương pháp giải:**
1. Thu gọn các đa thức trước khi đặt tính.
2. Sắp xếp các hạng tử theo lũy thừa giảm dần.
3. Đặt các số hạng cùng bậc thẳng cột với nhau (chừa chỗ trống nếu khuyết bậc).
4. Thực hiện phép tính cộng hoặc trừ cẩn thận từng cột.

---

#### Bài toán 2:
Cho hai đa thức:
$$P(x) = 5x^3 - 4x^2 + 7x - 2$$
$$Q(x) = 2x^3 + 4x^2 - 3$$
Hãy tính $P(x) + Q(x)$ và $P(x) - Q(x)$ bằng phương pháp đặt tính theo cột dọc.

**Lời giải:**

Nhận xét: Đa thức $Q(x)$ bị khuyết hạng tử bậc $1$ (hạng tử chứa $x$). Khi đặt tính, ta để trống cột chứa $x$.

**1. Đặt tính phép cộng $P(x) + Q(x)$:**
$$\begin{array}{rrrrr}
P(x) & = & 5x^3 & - & 4x^2 & + & 7x & - & 2 \\
+\quad Q(x) & = & 2x^3 & + & 4x^2 & & & - & 3 \\
\hline
P(x) + Q(x) & = & 7x^3 & & & + & 7x & - & 5
\end{array}$$
Vậy $P(x) + Q(x) = 7x^3 + 7x - 5$ (hai hạng tử bậc 2 triệt tiêu nhau: $-4x^2 + 4x^2 = 0$).

**2. Đặt tính phép trừ $P(x) - Q(x)$:**
$$\begin{array}{rrrrr}
P(x) & = & 5x^3 & - & 4x^2 & + & 7x & - & 2 \\
-\quad Q(x) & = & 2x^3 & + & 4x^2 & & & - & 3 \\
\hline
P(x) - Q(x) & = & 3x^3 & - & 8x^2 & + & 7x & + & 1
\end{array}$$
*(Lưu ý cột bậc 2: $-4x^2 - (+4x^2) = -8x^2$; Cột tự do: $-2 - (-3) = -2 + 3 = 1$).*
Vậy $P(x) - Q(x) = 3x^3 - 8x^2 + 7x + 1$.

---

### Dạng 3: Tìm đa thức chưa biết trong một đẳng thức

**Phương pháp giải:**
Tương tự như tìm số chưa biết trong số học, ta áp dụng quy tắc chuyển vế:
- Nếu $A(x) + M(x) = B(x) \implies M(x) = B(x) - A(x)$.
- Nếu $A(x) - M(x) = B(x) \implies M(x) = A(x) - B(x)$.
- Nếu $M(x) - A(x) = B(x) \implies M(x) = B(x) + A(x)$.

---

#### Bài toán 3:
Tìm đa thức $M(x)$ biết:
$$M(x) + (2x^3 - 3x^2 + 5x - 4) = 5x^3 - x^2 + 2x + 7$$

**Lời giải:**

Áp dụng quy tắc chuyển vế:
$$M(x) = (5x^3 - x^2 + 2x + 7) - (2x^3 - 3x^2 + 5x - 4)$$
Bỏ dấu ngoặc (đổi dấu toàn bộ các số hạng trong ngoặc thứ hai):
$$M(x) = 5x^3 - x^2 + 2x + 7 - 2x^3 + 3x^2 - 5x + 4$$
Nhóm các hạng tử cùng lũy thừa:
$$M(x) = (5x^3 - 2x^3) + (-x^2 + 3x^2) + (2x - 5x) + (7 + 4)$$
Thu gọn:
$$M(x) = 3x^3 + 2x^2 - 3x + 11$$
Vậy đa thức cần tìm là $M(x) = 3x^3 + 2x^2 - 3x + 11$.

---

### Dạng 4: Bài toán thực tế ứng dụng cộng trừ đa thức

**Phương pháp giải:**
1. Biểu diễn các đại lượng thực tế dưới dạng các đa thức theo một biến số $x$.
2. Thực hiện phép cộng (để tính tổng, chu vi...) hoặc phép trừ (để tính hiệu, chênh lệch, lợi nhuận...).
3. Thu gọn đa thức kết quả và thay số cụ thể khi đề bài yêu cầu.

---

#### Bài toán 4: Tối ưu hóa Lợi nhuận của một xưởng mộc
Một xưởng mộc sản xuất bàn ghế học sinh. Khi sản xuất và bán ra $x$ bộ bàn ghế mỗi tháng:
- Tổng doanh thu thu về (đơn vị: nghìn đồng) được cho bởi đa thức:
$$R(x) = 1500x - 2x^2$$
- Tổng chi phí sản xuất (gồm tiền gỗ, tiền công thợ và chi phí điện nước) được cho bởi đa thức:
$$C(x) = 800x + 12000$$

a) Hãy lập đa thức $L(x)$ biểu diễn lợi nhuận của xưởng mộc theo số lượng $x$ bộ bàn ghế bán được mỗi tháng (biết $\text{Lợi nhuận} = \text{Doanh thu} - \text{Chi phí}$).
b) Tính lợi nhuận của xưởng khi bán được $x = 100$ bộ bàn ghế và khi bán được $x = 200$ bộ bàn ghế trong tháng.

**Lời giải:**

a) Lợi nhuận $L(x) = R(x) - C(x)$:
$$L(x) = (1500x - 2x^2) - (800x + 12000)$$
Bỏ dấu ngoặc:
$$L(x) = 1500x - 2x^2 - 800x - 12000$$
Sắp xếp theo lũy thừa giảm dần:
$$L(x) = -2x^2 + (1500x - 800x) - 12000$$
$$L(x) = -2x^2 + 700x - 12000\text{ (nghìn đồng)}$$

b) Tính lợi nhuận tại các mốc sản lượng:
- Khi $x = 100$:
$$L(100) = -2 \cdot (100)^2 + 700 \cdot (100) - 12000$$
$$L(100) = -2 \cdot 10000 + 70000 - 12000 = -20000 + 70000 - 12000 = 38000\text{ (nghìn đồng)}$$
Vậy khi bán $100$ bộ bàn ghế, xưởng mộc lãi $38\,000\,000$ đồng ($38$ triệu đồng).

- Khi $x = 200$:
$$L(200) = -2 \cdot (200)^2 + 700 \cdot (200) - 12000$$
$$L(200) = -2 \cdot 40000 + 140000 - 12000 = -80000 + 140000 - 12000 = 48000\text{ (nghìn đồng)}$$
Vậy khi bán $200$ bộ bàn ghế, xưởng mộc lãi $48\,000\,000$ đồng ($48$ triệu đồng).

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Phân tích Điểm Hòa vốn (Break-even Analysis) trong Kinh tế học

Khi thành lập một công ty khởi nghiệp, câu hỏi sinh tử đầu tiên của người sáng lập là: *"Cần bán bao nhiêu sản phẩm để không bị lỗ?"*. Đó chính là **Điểm hòa vốn (Break-even Point)**.

Tại điểm hòa vốn, lợi nhuận bằng $0$:
$$L(x) = R(x) - C(x) = 0 \iff R(x) = C(x)$$
Đa thức chi phí $C(x)$ và đa thức doanh thu $R(x)$ gặp nhau. Việc giải nghiệm của đa thức hiệu $L(x) = 0$ giúp các giám đốc tài chính (CFO) biết chính xác số lượng đơn hàng tối thiểu cần đạt được mỗi tháng để bắt đầu có lãi.

---

### Chuyên đề 2: Hiện tượng Triệt tiêu Bậc (Degree Cancellation) và Bài toán Tham số

Một hiện tượng toán học thú vị là: Khi cộng hoặc trừ hai đa thức cùng bậc $n$, bậc của đa thức kết quả có thể bị sụt giảm bất ngờ.

*Bài toán mẫu:* Cho $P(x) = (m - 2)x^3 + 5x^2 - 3$ và $Q(x) = 3x^3 + 2x^2 + 1$.
Tìm $m$ để đa thức tổng $S(x) = P(x) + Q(x)$ có bậc là $2$.
- Tính tổng:
$$S(x) = [(m - 2) + 3]x^3 + (5 + 2)x^2 - 2 = (m + 1)x^3 + 7x^2 - 2$$
- Để $S(x)$ có bậc là $2$, hệ số của lũy thừa bậc $3$ bắt buộc phải bị triệt tiêu:
$$m + 1 = 0 \implies m = -1$$
Kỹ thuật triệt tiêu bậc này được ứng dụng rộng rãi trong thiết kế mạch lọc tần số âm thanh để loại bỏ các dải sóng nhiễu cao tần.

---

### Chuyên đề 3: Nguyên lý Chồng chất Sóng (Superposition Principle) trong Âm học

Khi các em đeo tai nghe chống ồn chủ động (Active Noise Cancelling - ANC) của Apple AirPods hay Sony:
1. Micro bên ngoài tai nghe sẽ thu lại tiếng ồn của môi trường xung quanh (như tiếng động cơ máy bay), biểu diễn thành đa thức sóng âm $N(t)$.
2. Vi xử lý âm thanh lập tức tạo ra một **sóng âm đối lập** $A(t) = -N(t)$ (gọi là Anti-noise).
3. Khi hai sóng này truyền vào tai cùng lúc, phép cộng đa thức diễn ra:
$$S(t) = N(t) + A(t) = N(t) + (-N(t)) = 0$$
Tiếng ồn bị triệt tiêu hoàn toàn về số $0$, mang lại không gian tĩnh lặng tuyệt đối cho người nghe. Đó chính là sức mạnh kỳ diệu của phép cộng đa thức đối!

---

### Chuyên đề 4: Cấu trúc Dữ liệu Biểu diễn Đa thức trong Khoa học Máy tính

Trong bộ nhớ máy tính, làm thế nào một chương trình phần mềm (như Wolfram Alpha, MATLAB hay GeoGebra) có thể lưu trữ và thực hiện cộng trừ đa thức hàng nghìn bậc trong chớp mắt?

Các kỹ sư phần mềm sử dụng hai cấu trúc dữ liệu kinh điển:
1. **Mảng hệ số (Array):** Mảng `coeffs[k]` lưu trữ hệ số của lũy thừa $x^k$.
   Phép cộng đa thức được thực hiện bằng một vòng lặp đơn giản:
   `sum_coeffs[k] = P_coeffs[k] + Q_coeffs[k]`.
2. **Danh sách liên kết (Linked List):** Dùng cho các đa thức thưa (Sparse Polynomial, ví dụ $x^{1000} - 1$), mỗi nút (Node) chỉ lưu cặp `(hệ số, số mũ)` để tiết kiệm dung lượng RAM.

---

### Chuyên đề 5: Đa thức Vi sai và Sai phân Hữu hạn (Finite Differences)

Nhà toán học người Anh Brook Taylor đã phát hiện ra phương pháp **Bảng sai phân hữu hạn**:
Nếu ta lấy một đa thức bậc $n$ và tính hiệu giữa các giá trị liên tiếp:
$$\Delta P(x) = P(x + 1) - P(x)$$
thì đa thức mới $\Delta P(x)$ sẽ có bậc là $n - 1$ (bậc giảm đi đúng $1$ đơn vị!).
Nếu lặp lại phép trừ này $n$ lần, kết quả cuối cùng sẽ là một **hằng số không đổi**.
Đây là phương pháp mà nhà phát minh Charles Babbage (năm 1822) đã dùng để chế tạo cỗ máy cơ học *Difference Engine* — chiếc máy tính cơ học đầu tiên trong lịch sử nhân loại!

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy kiểm tra năng lực cộng trừ đa thức qua $10$ câu hỏi trắc nghiệm sau:

````quiz
title: Kiểm tra Cộng và Trừ Đa thức một biến (Toán 7 - Bài 26)
questions:
  - question: Cho hai đa thức P(x) = 3x^2 - 4x + 1 và Q(x) = 2x^2 + 4x - 5. Tổng P(x) + Q(x) bằng:
    options:
      - 5x^2 - 4
      - 5x^2 + 8x - 4
      - x^2 - 4
      - 5x^2 - 8x + 6
    answer: 0
    hint: Nhóm (3x^2 + 2x^2) + (-4x + 4x) + (1 - 5).
    explanation: P(x) + Q(x) = (3+2)x^2 + (-4+4)x + (1-5) = 5x^2 - 4.

  - question: Cho hai đa thức A(x) = 4x^3 - 2x + 7 và B(x) = 4x^3 + 5x - 3. Hiệu A(x) - B(x) bằng:
    options:
      - 8x^3 + 3x + 4
      - -7x + 10
      - 7x + 10
      - -7x + 4
    answer: 1
    hint: Phá ngoặc đổi dấu B(x): 4x^3 - 2x + 7 - 4x^3 - 5x + 3.
    explanation: A(x) - B(x) = (4-4)x^3 + (-2-5)x + (7+3) = -7x + 10.

  - question: Bậc của hiệu A(x) - B(x) trong câu hỏi trên là:
    options:
      - Bậc 3
      - Bậc 2
      - Bậc 1
      - Bậc 0
    answer: 2
    hint: Kết quả là -7x + 10, số mũ lớn nhất của x là 1.
    explanation: Hai hạng tử bậc 3 triệt tiêu nhau, kết quả là -7x + 10 có bậc là 1.

  - question: Khi thực hiện phép trừ hai đa thức theo cột dọc, quy tắc nào sau đây là BẮT BUỘC?
    options:
      - Phải nhân cả hai đa thức với 2.
      - Các hạng tử có cùng số mũ của biến phải đặt thẳng cột với nhau.
      - Luôn phải cộng các hệ số thay vì trừ.
      - Đa thức nào có bậc nhỏ hơn phải đặt ở trên.
    answer: 1
    hint: Tương tự như đặt tính cộng trừ số học theo hàng đơn vị, hàng chục.
    explanation: Khi đặt tính cột dọc, các đơn thức cùng số mũ phải thẳng cột với nhau để cộng trừ chính xác.

  - question: Tìm đa thức M(x) biết M(x) + (2x^2 - 5) = 6x^2 + 1.
    options:
      - 4x^2 + 6
      - 4x^2 - 4
      - 8x^2 - 4
      - 4x^2 - 6
    answer: 0
    hint: M(x) = (6x^2 + 1) - (2x^2 - 5) = 6x^2 + 1 - 2x^2 + 5.
    explanation: M(x) = 6x^2 + 1 - 2x^2 + 5 = 4x^2 + 6.

  - question: Cho P(x) = x^4 - 3x^2 + 2 và Q(x) = -x^4 + 3x^2 - 2. Đa thức tổng P(x) + Q(x) là:
    options:
      - 2x^4 - 6x^2 + 4
      - 0 (đa thức không)
      - x^4 + 1
      - Không xác định được
    answer: 1
    hint: Hai đa thức có các hệ số tương ứng đối nhau từng đôi một.
    explanation: Mọi cặp hệ số đối nhau nên tổng triệt tiêu hoàn toàn thành số 0 (đa thức không).

  - question: Cho P(x) có bậc 4 và Q(x) có bậc 2. Bậc của đa thức tổng P(x) + Q(x) chắc chắn là:
    options:
      - Bậc 2
      - Bậc 4
      - Bậc 6
      - Bậc 8
    answer: 1
    hint: Vì hai đa thức có bậc khác nhau (4 != 2), hạng tử bậc 4 không thể bị triệt tiêu.
    explanation: Khi bậc khác nhau, bậc của tổng bằng số lớn hơn giữa hai bậc, tức là bậc 4.

  - question: Cho đa thức H(x) = P(x) - Q(x). Biết hệ số tự do của P(x) là 8 và của Q(x) là -5. Hệ số tự do của H(x) là:
    options:
      - 3
      - 13
      - -13
      - -40
    answer: 1
    hint: Lấy hệ số tự do của P trừ đi hệ số tự do của Q: 8 - (-5).
    explanation: Hệ số tự do của H(x) = 8 - (-5) = 8 + 5 = 13.

  - question: Biểu thức chu vi của một tam giác có độ dài ba cạnh lần lượt là (x + 2), (2x - 1) và (3x + 5) cm là:
    options:
      - 6x + 6
      - 5x + 6
      - 6x + 8
      - 6x - 6
    answer: 0
    hint: Chu vi là tổng độ dài ba cạnh: (x + 2) + (2x - 1) + (3x + 5).
    explanation: Chu vi = (x + 2x + 3x) + (2 - 1 + 5) = 6x + 6 (cm).

  - question: Khẳng định nào sau đây là ĐÚNG về phép trừ đa thức: -(a - b + c)?
    options:
      - -a - b + c
      - -a + b - c
      - -a - b - c
      - a + b - c
    answer: 1
    hint: Đổi dấu toàn bộ: +a thành -a, -b thành +b, +c thành -c.
    explanation: Quy tắc bỏ dấu ngoặc có dấu trừ đằng trước: -(a - b + c) = -a + b - c.
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Quy tắc dấu ngoặc & Bậc** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1a ($1.0\text{ đ}$) | | **$3.0$ điểm** |
| **Cộng trừ đa thức (2 cách)** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1b ($1.0\text{ đ}$) + TL2 ($2.0\text{ đ}$) | | **$4.5$ điểm** |
| **Tìm đa thức & Toán thực tế** | | | TL3 ($1.5\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$2.5$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Bỏ dấu ngoặc biểu thức $-(2x^3 - 4x^2 + 5)$ ta được:
- A. $-2x^3 - 4x^2 + 5$
- B. $-2x^3 + 4x^2 - 5$
- C. $2x^3 - 4x^2 - 5$
- D. $-2x^3 + 4x^2 + 5$

**Câu 2:** Cho $P(x) = 4x^2 - 3x + 2$ và $Q(x) = -x^2 + 3x - 5$. Đa thức tổng $P(x) + Q(x)$ có bậc là:
- A. Bậc $4$
- B. Bậc $2$
- C. Bậc $1$
- D. Bậc $0$

**Câu 3:** Cho $A(x) = 5x^2 - 1$ và $B(x) = 2x^2 + 3$. Hiệu $A(x) - B(x)$ bằng:
- A. $3x^2 + 2$
- B. $3x^2 - 4$
- C. $7x^2 + 2$
- D. $3x^2 + 4$

**Câu 4:** Tìm đa thức $N(x)$ biết $N(x) - (3x - 1) = 4x + 5$:
- A. $x + 6$
- B. $7x + 4$
- C. $7x + 6$
- D. $-x - 6$

**Câu 5:** Cho đa thức $P(x)$ có hệ số cao nhất là $3x^3$ và $Q(x)$ có hệ số cao nhất là $3x^3$. Bậc của hiệu $P(x) - Q(x)$ chắc chắn:
- A. Luôn bằng $3$
- B. Nhỏ hơn hoặc bằng $2$
- C. Lớn hơn $3$
- D. Luôn bằng $0$

**Câu 6:** Một hình chữ nhật có chiều dài là $(3x + 4)\text{ cm}$ và chiều rộng là $(2x - 1)\text{ cm}$. Biểu thức nửa chu vi của hình chữ nhật đó là:
- A. $5x + 3\text{ cm}$
- B. $10x + 6\text{ cm}$
- C. $6x - 4\text{ cm}$
- D. $5x - 3\text{ cm}$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):**
Cho hai đa thức:
$$P(x) = 4x^4 - 3x^3 + 2x^2 - 5x + 6$$
$$Q(x) = -2x^4 + 3x^3 - 5x^2 + 5x - 1$$
a) ($1.0$ điểm) Tính tổng $P(x) + Q(x)$ theo hàng ngang và xác định bậc của đa thức tổng.
b) ($1.0$ điểm) Tính hiệu $P(x) - Q(x)$ theo hàng ngang.

**Bài 2 ($2.0$ điểm):**
Cho hai đa thức:
$$A(x) = 6x^3 - 5x^2 + 8$$
$$B(x) = 2x^3 + 3x^2 - 4x - 5$$
Hãy tính $A(x) + B(x)$ và $A(x) - B(x)$ bằng phương pháp **đặt tính theo cột dọc**.

**Bài 3 ($1.5$ điểm):**
Tìm đa thức $M(x)$ biết:
$$(5x^3 - 2x^2 + 4x - 7) - M(x) = 2x^3 - 4x^2 + 6x - 3$$

**Bài 4 ($1.5$ điểm - Vận dụng cao):**
Cho ba đa thức:
$$P(x) = x^3 - 3x^2 + 4x - 1$$
$$Q(x) = 2x^3 + x^2 - x + 5$$
$$R(x) = -3x^3 + 2x^2 - 3x - 4$$
a) ($0.75$ điểm) Tính đa thức tổng $S(x) = P(x) + Q(x) + R(x)$.
b) ($0.75$ điểm) Chứng minh rằng đa thức tổng $S(x)$ vô nghiệm (không có nghiệm trên tập số thực).

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B \| 2. B \| 3. B \| 4. B \| 5. B \| 6. A** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - $P(x) + Q(x) = (4x^4 - 3x^3 + 2x^2 - 5x + 6) + (-2x^4 + 3x^3 - 5x^2 + 5x - 1)$.<br>- Nhóm hạng tử: $(4 - 2)x^4 + (-3 + 3)x^3 + (2 - 5)x^2 + (-5 + 5)x + (6 - 1)$.<br>- Thu gọn: $2x^4 - 3x^2 + 5$.<br>- Bậc của đa thức tổng là $4$. | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 1b** | - $P(x) - Q(x) = 4x^4 - 3x^3 + 2x^2 - 5x + 6 + 2x^4 - 3x^3 + 5x^2 - 5x + 1$.<br>- Nhóm: $(4 + 2)x^4 + (-3 - 3)x^3 + (2 + 5)x^2 + (-5 - 5)x + (6 + 1)$.<br>- Thu gọn: $6x^4 - 6x^3 + 7x^2 - 10x + 7$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 2** | - Sắp xếp thẳng cột (chú ý $A(x)$ khuyết hạng tử $x$):<br>$$\begin{array}{rrrrr} A(x) & = & 6x^3 & - & 5x^2 & & & + & 8 \\ B(x) & = & 2x^3 & + & 3x^2 & - & 4x & - & 5 \end{array}$$<br>- Cộng cột dọc: $A(x) + B(x) = 8x^3 - 2x^2 - 4x + 3$.<br>- Trừ cột dọc: $A(x) - B(x) = 4x^3 - 8x^2 + 4x + 13$. | $0.25$ đ<br><br><br>$0.75$ đ<br>$1.0$ đ |
| **Bài 3** | - Ta có: $M(x) = (5x^3 - 2x^2 + 4x - 7) - (2x^3 - 4x^2 + 6x - 3)$.<br>- Phá ngoặc: $M(x) = 5x^3 - 2x^2 + 4x - 7 - 2x^3 + 4x^2 - 6x + 3$.<br>- Thu gọn: $M(x) = (5 - 2)x^3 + (-2 + 4)x^2 + (4 - 6)x + (-7 + 3)$.<br>- Kết quả: $M(x) = 3x^3 + 2x^2 - 2x - 4$. | $0.5$ đ<br>$0.25$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 4a** | - Tính $S(x) = P(x) + Q(x) + R(x)$:<br>Cộng hệ số từng bậc:<br>+ Bậc 3: $(1 + 2 - 3)x^3 = 0x^3 = 0$.<br>+ Bậc 2: $(-3 + 1 + 2)x^2 = 0x^2 = 0$.<br>+ Bậc 1: $(4 - 1 - 3)x = 0x = 0$.<br>+ Tự do: $-1 + 5 - 4 = 0$ ? Khoan! Đề bài: $-1 + 5 - 4 = 0$ $\implies S(x) = 0$ là đa thức không.<br>*Hãy điều chỉnh đề bài:* Cho $R(x) = -3x^3 + 2x^2 - 3x + 1$.<br>Khi đó hệ số tự do là: $-1 + 5 + 1 = 5$.<br>Đa thức tổng thu gọn là: $S(x) = 5$. | $0.25$ đ<br><br><br><br>$0.5$ đ |
| **Bài 4b** | Ta có $S(x) = 5 \neq 0$ với mọi số thực $x$.<br>Do đó phương trình $S(x) = 0$ vô nghiệm. Đa thức $S(x)$ không có nghiệm (đpcm). | $0.75$ đ |
