---
title: 'Bài 28: Phép chia đa thức một biến - Lý thuyết, Thuật toán Đặt tính chia, Phép chia có dư và 5 Chuyên đề Thực tế'
description: 'Làm chủ phép chia đa thức một biến, thuật toán đặt tính chia A(x) = B(x)*Q(x) + R(x), định lý Bézout về số dư, tìm tham số chia hết và 5 chuyên đề kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Chia đa thức
  - Đa thức một biến
  - Đặt tính chia
  - Phép chia có dư
  - Kết nối tri thức
grade: 7
---

# Bài 28. Phép chia đa thức một biến

Từ lớp 3, các em đã học phép chia số tự nhiên với thuật toán đặt tính chia kinh điển: lấy từng chữ số chia, nhân ngược lại, trừ đi để tìm số dư và hạ chữ số tiếp theo. Khi bước vào thế giới đại số lớp 7, một sự tương đồng kỳ diệu xuất hiện: **Đa thức một biến cũng có thể thực hiện phép chia y hệt như các số tự nhiên!**

Phép chia đa thức không chỉ giúp chúng ta phân tích đa thức thành nhân tử để giải phương trình, mà còn là công nghệ lõi ẩn sau mã vạch QR mà chúng ta quét mỗi ngày, thuật toán tự động sửa lỗi dữ liệu khi truyền ảnh từ tàu thám hiểm sao Hỏa về Trái Đất (mã Reed-Solomon), và phương pháp giải tích phân cao cấp. Trong bài học này, chúng ta sẽ cùng giải mã toàn bộ thuật toán đặt tính chia đa thức, phân biệt phép chia hết và chia có dư, làm chủ định lý Bézout và ứng dụng giải các bài toán chia hết nâng cao!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 28: PHÉP CHIA ĐA THỨC MỘT BIẾN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Chia hai đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(a x^m) : (b x^n) = (a : b) \cdot x^{m - n}$.<br>• Điều kiện chia hết: $m \ge n$ ($a, b \neq 0$).<br>• Chia hệ số, <strong>trừ các số mũ</strong> của biến.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đa thức : Đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(A + B - C) : D = A:D + B:D - C:D$.<br>• Chia từng hạng tử của đa thức cho đơn thức.<br>• Mọi hạng tử phải chia hết cho đơn thức chia.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đặt tính chia đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Sắp xếp giảm dần, đặt cột chia.<br>• Lấy bậc cao nhất chia bậc cao nhất $\to$ thương.<br>• Nhân ngược, trừ tìm dư $\to$ lặp lại đến khi $\text{Bậc}(R) < \text{Bậc}(B)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Chia hết & Chia có dư</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $A(x) = B(x) \cdot Q(x) + R(x)$.<br>• $R(x) = 0$: Phép chia hết ($A \ \vdots \ B$).<br>• $R(x) \neq 0$: Phép chia có dư ($\text{Bậc } R < \text{Bậc } B$).</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Chia hai lũy thừa cùng cơ số:** Tính $x^5 : x^2$ và $x^4 : x^4$ (với $x \neq 0$).
2. **Chia đơn thức:** Tính $(12x^6) : (3x^2)$ và $(-15x^3) : (5x)$.
3. **Phân phối phép chia:** Thực hiện phép tính: $(8x^3 - 6x^2 + 4x) : (2x)$.
4. **Đẳng thức chia có dư số học:** Viết số $29$ dưới dạng $29 = 6 \times q + r$. Tìm thương $q$ và số dư $r$. Số dư $r$ phải thỏa mãn điều kiện gì so với số chia $6$?
5. **Dự đoán bậc của thương:** Nếu lấy một đa thức bậc $4$ chia cho một đa thức bậc $1$, đa thức thương sẽ có bậc là bao nhiêu?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - $x^5 : x^2 = x^{5 - 2} = x^3$.
   - $x^4 : x^4 = x^{4 - 4} = x^0 = 1$.
2. **Trả lời:**
   - $(12x^6) : (3x^2) = (12 : 3) \cdot x^{6 - 2} = 4x^4$.
   - $(-15x^3) : (5x) = (-15 : 5) \cdot x^{3 - 1} = -3x^2$.
3. **Trả lời:**
   $$(8x^3 - 6x^2 + 4x) : (2x) = (8x^3 : 2x) - (6x^2 : 2x) + (4x : 2x) = 4x^2 - 3x + 2$$
4. **Trả lời:** $29 = 6 \times 4 + 5$. Thương $q = 4$ và số dư $r = 5$. Điều kiện: $0 \le r < 6$.
5. **Trả lời:** Bậc của thương bằng hiệu hai bậc: $4 - 1 = 3$ (đa thức thương có bậc là $3$).
</details>

---

## I. Lý thuyết trọng tâm

### 1. Chia hai đơn thức một biến

> [!IMPORTANT]
> **QUY TẮC:**
> Đơn thức $a x^m$ chia hết cho đơn thức $b x^n$ ($a, b \neq 0$) khi và chỉ khi số mũ của biến bị chia lớn hơn hoặc bằng số mũ của biến chia:
> $$m \ge n$$
> Khi đó:
> $$(a x^m) : (b x^n) = (a : b) \cdot x^{m - n}$$

*Ví dụ:*
$$(18x^5) : (-6x^2) = [18 : (-6)] \cdot x^{5 - 2} = -3x^3$$

---

### 2. Chia đa thức cho đơn thức một biến

> [!IMPORTANT]
> **QUY TẮC:**
> Đa thức $A$ chia hết cho đơn thức $B$ nếu mọi hạng tử của $A$ đều chia hết cho $B$.
> Muốn chia đa thức $A$ cho đơn thức $B$, ta **chia từng hạng tử của $A$ cho $B$**, rồi cộng các kết quả với nhau:
> $$(A_1 + A_2 - A_3) : B = (A_1 : B) + (A_2 : B) - (A_3 : B)$$

*Ví dụ:*
$$(15x^4 - 20x^3 + 5x^2) : (5x^2) = (15x^4 : 5x^2) - (20x^3 : 5x^2) + (5x^2 : 5x^2)$$
$$= 3x^2 - 4x + 1$$

---

### 3. Thuật toán Đặt tính chia hai đa thức một biến

Cho hai đa thức một biến $A(x)$ (đa thức bị chia) và $B(x)$ (đa thức chia, với $B(x) \neq 0$). Để thực hiện phép chia, ta đặt tính tương tự như chia số tự nhiên:

> [!TIP]
> **CÁC BƯỚC ĐẶT TÍNH CHIA:**
> - **Bước 1 (Chuẩn bị):** Thu gọn và sắp xếp cả hai đa thức $A(x)$ và $B(x)$ theo lũy thừa giảm dần của biến. Nếu $A(x)$ khuyết bậc nào, ta để trống một khoảng tương ứng.
> - **Bước 2 (Tìm hạng tử của thương):** Chia hạng tử có bậc cao nhất của đa thức bị chia cho hạng tử có bậc cao nhất của đa thức chia $\to$ Được hạng tử đầu tiên của đa thức thương $Q(x)$.
> - **Bước 3 (Nhân ngược và trừ tìm dư):** Lấy hạng tử vừa tìm được nhân với toàn bộ đa thức chia $B(x)$, rồi lấy đa thức bị chia trừ đi tích vừa nhận được $\to$ Được **đa thức dư thứ nhất**.
> - **Bước 4 (Lặp lại quy trình):** Coi đa thức dư thứ nhất là đa thức bị chia mới và lặp lại bước 2, bước 3.
> - **Bước 5 (Dừng thuật toán):** Quá trình dừng lại khi đa thức dư cuối cùng $R(x)$ bằng $0$ (phép chia hết) hoặc có **bậc nhỏ hơn bậc của đa thức chia $B(x)$** (phép chia có dư).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" style="width: 100%; max-width: 560px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình đặt tính chia đa thức chuẩn">
    <rect x="20" y="15" width="520" height="190" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <!-- Đa thức bị chia: 2x^2 + 5x + 3 chia cho x + 1 -->
    <text x="60" y="55" font-size="18" font-weight="700" fill="#1e40af">2x² + 5x + 3</text>
    <line x1="220" y1="30" x2="220" y2="70" stroke="#334155" stroke-width="2" />
    <line x1="220" y1="70" x2="380" y2="70" stroke="#334155" stroke-width="2" />
    <text x="240" y="55" font-size="18" font-weight="700" fill="#047857">x + 1</text>
    <text x="240" y="105" font-size="18" font-weight="700" fill="#b45309">2x + 3  (Thương Q)</text>

    <!-- Dòng trừ 1 -->
    <text x="45" y="85" font-size="16" fill="#64748b">-</text>
    <text x="60" y="85" font-size="16" fill="#64748b">2x² + 2x</text>
    <line x1="60" y1="95" x2="200" y2="95" stroke="#94a3b8" stroke-width="1" />

    <!-- Dư thứ nhất -->
    <text x="115" y="120" font-size="16" font-weight="600" fill="#1e40af">3x + 3</text>
    <text x="100" y="145" font-size="16" fill="#64748b">-</text>
    <text x="115" y="145" font-size="16" fill="#64748b">3x + 3</text>
    <line x1="115" y1="155" x2="200" y2="155" stroke="#94a3b8" stroke-width="1" />

    <!-- Dư cuối cùng -->
    <text x="180" y="180" font-size="18" font-weight="700" fill="#059669">0  (Dư R = 0: Chia hết)</text>
  </svg>
</div>

---

### 4. Đẳng thức Phép chia có dư và Bậc của các đa thức

> [!IMPORTANT]
> **ĐỊNH LÍ VỀ PHÉP CHIA CÓ DƯ:**
> Với hai đa thức một biến tùy ý $A(x)$ và $B(x)$ ($B(x) \neq 0$), luôn tồn tại **duy nhất** một cặp đa thức $Q(x)$ (thương) và $R(x)$ (dư) sao cho:
> $$A(x) = B(x) \cdot Q(x) + R(x)$$
> Trong đó:
> - Đa thức dư $R(x)$ hoặc bằng $0$, hoặc có bậc **nhỏ hơn** bậc của $B(x)$:
>   $$\text{Bậc}(R) < \text{Bậc}(B)\quad \text{hoặc}\quad R(x) = 0$$
> - Bậc của đa thức thương: $\text{Bậc}(Q) = \text{Bậc}(A) - \text{Bậc}(B)$.
> - Khi $R(x) = 0$, ta nói $A(x)$ **chia hết** cho $B(x)$ (kí hiệu: $A(x) \ \vdots \ B(x)$).

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Chia đơn thức cho đơn thức, chia đa thức cho đơn thức

**Phương pháp giải:**
Áp dụng công thức trừ số mũ $(a x^m) : (b x^n) = (a : b) x^{m - n}$ cho từng hạng tử.

---

#### Bài toán 1:
Thực hiện các phép chia sau:
a) $(-24x^6) : (8x^2)$
b) $(12x^5 - 18x^4 + 6x^3) : (-3x^2)$
c) $(x^4 + 2x^3 - 5x^2) : (2x^2)$

**Lời giải:**

a) Ta có:
$$(-24x^6) : (8x^2) = (-24 : 8) \cdot x^{6 - 2} = -3x^4$$

b) Chia từng hạng tử cho đơn thức $(-3x^2)$:
$$(12x^5 - 18x^4 + 6x^3) : (-3x^2) = [12x^5 : (-3x^2)] - [18x^4 : (-3x^2)] + [6x^3 : (-3x^2)]$$
$$= -4x^3 - (-6x^2) + (-2x) = -4x^3 + 6x^2 - 2x$$

c) Ta có:
$$(x^4 + 2x^3 - 5x^2) : (2x^2) = (x^4 : 2x^2) + (2x^3 : 2x^2) - (5x^2 : 2x^2)$$
$$= \frac{1}{2}x^2 + x - \frac{5}{2}$$

---

### Dạng 2: Đặt tính chia hai đa thức một biến (Phép chia hết)

**Phương pháp giải:**
Thực hiện đặt tính chia theo quy trình 5 bước. Kiểm tra số dư cuối cùng bằng $0$.

---

#### Bài toán 2:
Thực hiện phép chia đa thức:
$$(2x^3 - 5x^2 + 8x - 3) : (2x - 1)$$

**Lời giải:**

Đặt tính chia theo cột dọc:
$$\begin{array}{r|l}
2x^3 - 5x^2 + 8x - 3 & 2x - 1 \\
\hline
-(2x^3 - x^2) \phantom{- 3} & x^2 - 2x + 3 \\
\hline
-4x^2 + 8x - 3 & \\
-(-4x^2 + 2x) \phantom{- 3} & \\
\hline
6x - 3 & \\
-(6x - 3) & \\
\hline
0 &
\end{array}$$

*Giải thích chi tiết từng bước:*
- Lấy $2x^3 : 2x = x^2$ (hạng tử đầu của thương). Nhân ngược: $x^2(2x - 1) = 2x^3 - x^2$. Lấy $(2x^3 - 5x^2) - (2x^3 - x^2) = -4x^2$. Hạ $+8x - 3$.
- Lấy $-4x^2 : 2x = -2x$ (hạng tử thứ hai của thương). Nhân ngược: $-2x(2x - 1) = -4x^2 + 2x$. Trừ: $(-4x^2 + 8x) - (-4x^2 + 2x) = 6x$. Hạ $-3$.
- Lấy $6x : 2x = 3$ (hạng tử thứ ba của thương). Nhân ngược: $3(2x - 1) = 6x - 3$. Trừ: $(6x - 3) - (6x - 3) = 0$.
- Số dư bằng $0 \implies$ Phép chia hết.

**Kết luận:** $(2x^3 - 5x^2 + 8x - 3) : (2x - 1) = x^2 - 2x + 3$.

---

### Dạng 3: Đặt tính chia hai đa thức một biến (Phép chia có dư)

**Phương pháp giải:**
Khi bậc của đa thức dư nhỏ hơn bậc của đa thức chia, ta dừng phép chia và viết kết quả dưới dạng:
$$A(x) = B(x) \cdot Q(x) + R(x)$$

---

#### Bài toán 3:
Thực hiện phép chia đa thức:
$$(3x^3 + x^2 - 4x + 5) : (x^2 + 1)$$
Tìm đa thức thương $Q(x)$ và đa thức dư $R(x)$.

**Lời giải:**

Đặt tính chia:
$$\begin{array}{r|l}
3x^3 + x^2 - 4x + 5 & x^2 + 1 \\
\hline
-(3x^3 + 3x) \phantom{+ 5} & 3x + 1 \\
\hline
x^2 - 7x + 5 & \\
-(x^2 + 1) & \\
\hline
-7x + 4 &
\end{array}$$

*Giải thích:*
- Lấy $3x^3 : x^2 = 3x$. Nhân ngược: $3x(x^2 + 1) = 3x^3 + 3x$.
  Trừ: $(3x^3 + x^2 - 4x + 5) - (3x^3 + 3x) = x^2 - 7x + 5$.
- Lấy $x^2 : x^2 = 1$. Nhân ngược: $1(x^2 + 1) = x^2 + 1$.
  Trừ: $(x^2 - 7x + 5) - (x^2 + 1) = -7x + 4$.
- Đa thức dư $-7x + 4$ có bậc là $1$, nhỏ hơn bậc của đa thức chia $x^2 + 1$ (bậc $2$). Quá trình chia dừng lại.

**Kết luận:**
- Đa thức thương: $Q(x) = 3x + 1$.
- Đa thức dư: $R(x) = -7x + 4$.
- Đẳng thức biểu diễn:
$$3x^3 + x^2 - 4x + 5 = (x^2 + 1)(3x + 1) + (-7x + 4)$$

---

### Dạng 4: Tìm tham số $m$ để đa thức chia hết hoặc tìm $x$ nguyên

**Phương pháp giải:**
1. Đặt tính chia đa thức chứa tham số $m$ cho đa thức chia để tìm phần dư $R(x)$ (phần dư này sẽ chứa tham số $m$).
2. Để phép chia là phép chia hết: cho đa thức dư bằng $0$ ($R(x) = 0$), từ đó giải phương trình tìm $m$.
3. Với bài toán tìm $x \in \mathbb{Z}$ để phân thức nhận giá trị nguyên:
   $$\frac{A(x)}{B(x)} = Q(x) + \frac{R}{B(x)}$$
   Để biểu thức nhận giá trị nguyên thì hằng số $R$ phải chia hết cho $B(x)$ $\implies B(x)$ phải là **ước nguyên** của $R$.

---

#### Bài toán 4:
a) Tìm hằng số $m$ để đa thức $A(x) = x^3 - 3x^2 + 5x + m$ chia hết cho đa thức $B(x) = x - 2$.
b) Tìm các số nguyên $x$ để biểu thức $P = \frac{2x^2 + 3x + 5}{x + 1}$ nhận giá trị là một số nguyên.

**Lời giải:**

a) Đặt tính chia $A(x)$ cho $B(x)$:
- $x^3 : x = x^2 \implies x^2(x - 2) = x^3 - 2x^2 \implies A(x) - (x^3 - 2x^2) = -x^2 + 5x + m$.
- $-x^2 : x = -x \implies -x(x - 2) = -x^2 + 2x \implies (-x^2 + 5x + m) - (-x^2 + 2x) = 3x + m$.
- $3x : x = 3 \implies 3(x - 2) = 3x - 6 \implies (3x + m) - (3x - 6) = m + 6$.
- Đa thức dư là: $R = m + 6$.
Để $A(x)$ chia hết cho $B(x)$, số dư phải bằng $0$:
$$m + 6 = 0 \implies m = -6$$
Vậy $m = -6$ thì $A(x)$ chia hết cho $B(x)$.

b) Thực hiện phép chia đa thức tử cho mẫu:
$$\frac{2x^2 + 3x + 5}{x + 1} = 2x + 1 + \frac{4}{x + 1}$$
Vì $x \in \mathbb{Z}$ nên $2x + 1$ luôn là một số nguyên.
Để phân thức có giá trị nguyên, bắt buộc $\frac{4}{x + 1} \in \mathbb{Z} \implies (x + 1)$ phải là ước của $4$.
Các ước nguyên của $4$ là: $\text{Ư}(4) = \{\pm 1; \pm 2; \pm 4\}$.

Ta có bảng giá trị tương ứng:

| $x + 1$ | $-4$ | $-2$ | $-1$ | $1$ | $2$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | $-5$ | $-3$ | $-2$ | $0$ | $1$ | $3$ |

**Kết luận:** Các giá trị nguyên cần tìm của $x$ là $x \in \{-5; -3; -2; 0; 1; 3\}$.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Định lý Bézout (Étienne Bézout, 1779)

Nhà toán học Pháp Étienne Bézout đã phát hiện ra một định lý thanh nhã phi thường về phép chia đa thức cho nhị thức bậc nhất $(x - a)$:

> [!NOTE]
> **ĐỊNH LÝ BÉZOUT:**
> Số dư trong phép chia đa thức $P(x)$ cho nhị thức $(x - a)$ đúng bằng giá trị của đa thức tại $x = a$:
> $$R = P(a)$$
>
> *Hệ quả vàng:* Đa thức $P(x)$ **chia hết cho $(x - a)$ khi và chỉ khi $x = a$ là một nghiệm của $P(x)$** ($P(a) = 0$).

*Áp dụng lại Bài toán 4a:* Muốn $A(x) = x^3 - 3x^2 + 5x + m$ chia hết cho $(x - 2)$, theo định lý Bézout chỉ cần số dư bằng $0$:
$$R = A(2) = 2^3 - 3(2)^2 + 5(2) + m = 8 - 12 + 10 + m = m + 6 = 0 \implies m = -6$$
Chỉ với một phép tính nhẩm $5$ giây, ta tìm ra ngay kết quả mà không cần phải đặt bút chia cột dọc dài dòng!

---

### Chuyên đề 2: Thuật toán Euclid tìm Ước chung lớn nhất của hai đa thức

Làm thế nào để rút gọn phân thức đại số $\frac{A(x)}{B(x)}$ khi cả hai đa thức đều có bậc cao?
Tương tự như thuật toán Euclid tìm $\text{ƯCLN}$ của hai số tự nhiên, ta áp dụng liên tiếp phép chia có dư:
- $A(x) = B(x) \cdot Q_1(x) + R_1(x)$
- $B(x) = R_1(x) \cdot Q_2(x) + R_2(x)$
- $R_1(x) = R_2(x) \cdot Q_3(x) + R_3(x) \dots$
Đa thức dư khác $0$ cuối cùng chính là **Ước chung lớn nhất (GCD)** của hai đa thức! Đây là thuật toán cốt lõi bên trong các phần mềm tính toán đại số máy tính (Computer Algebra Systems - CAS).

---

### Chuyên đề 3: Lược đồ Horner (Horner's Scheme) — Chia nhẩm siêu tốc

Nhà toán học Anh William George Horner (1819) đã phát minh ra một bảng tính dạng lưới gọi là **Lược đồ Horner** để chia đa thức $P(x) = a_n x^n + \dots + a_0$ cho $(x - c)$:
- Hàng 1: Viết các hệ số $a_n, a_{n-1}, \dots, a_0$.
- Cột đầu: Viết nghiệm $c$.
- Quy tắc đường chéo: *"Đầu rơi, nhân ngang cộng chéo"*:
  Hệ số mới = $c \times (\text{hệ số trước}) + (\text{hệ số trên đầu})$.

Lược đồ Horner cho phép học sinh và máy tính tìm ra toàn bộ các hệ số của đa thức thương và số dư chỉ với phép nhân cộng số học thẳng hàng, nhanh gấp $5$ lần đặt tính chia truyền thống.

---

### Chuyên đề 4: Mã Sửa lỗi Reed-Solomon trong Đĩa quang và Mã vạch QR

Khi một chiếc đĩa CD/DVD bị xước một vệt dài, hoặc một góc của mã vạch QR trên bao bì sản phẩm bị rách nát, làm sao điện thoại vẫn quét và giải mã chính xác thông tin?
Đó là nhờ **Mã sửa lỗi Reed-Solomon (RS Code)**:
- Dữ liệu được mã hóa thành các hệ số của đa thức $D(x)$.
- Người ta chia đa thức này cho một đa thức sinh $G(x)$ để thu được các mã bảo vệ kiểm tra phần dư (Parity).
- Nhờ cấu trúc nghiệm của phép chia đa thức, máy quét có thể định vị chính xác vị trí các bit bị hỏng và khôi phục lại nguyên vẹn $100\%$ dữ liệu gốc mà không cần đọc lại!

---

### Chuyên đề 5: Phân tích Phân thức Hữu tỉ (Partial Fractions) trong Giải tích

Trong toán học cao cấp, việc tính nguyên hàm và tích phân của một hàm phân thức phức tạp $\frac{P(x)}{Q(x)}$ là vô cùng khó khăn.
Bước đầu tiên mà các nhà toán học luôn thực hiện là:
1. Nếu bậc của tử $\ge$ bậc của mẫu: Dùng **phép chia đa thức** để tách thành phần nguyên đa thức và phần dư phân thức thực sự:
   $$\frac{P(x)}{Q(x)} = S(x) + \frac{R(x)}{Q(x)}\quad (\text{với Bậc } R < \text{Bậc } Q)$$
2. Tách $\frac{R(x)}{Q(x)}$ thành tổng các phân thức đơn giản có mẫu số bậc nhất.
Phép chia đa thức lớp 7 chính là bước dọn đường then chốt cho toàn bộ phân môn Giải tích vi tích phân ở bậc đại học!

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy rèn luyện phản xạ phép chia đa thức qua $10$ câu hỏi trắc nghiệm sau:

````quiz
title: Kiểm tra Phép chia Đa thức một biến (Toán 7 - Bài 28)
questions:
  - question: Kết quả của phép chia đơn thức (15x^5) : (3x^2) là:
    options:
      - 5x^3
      - 5x^7
      - 12x^3
      - 5x^2.5
    answer: 0
    hint: Chia hệ số (15 : 3 = 5) và trừ số mũ (5 - 2 = 3).
    explanation: (15x^5) : (3x^2) = (15 : 3) * x^(5 - 2) = 5x^3.

  - question: Kết quả của phép chia đa thức (6x^3 - 9x^2 + 3x) : (3x) là:
    options:
      - 2x^2 - 3x + 1
      - 2x^2 - 3x
      - 2x^2 - 3x + 3
      - 2x^3 - 3x^2 + 1
    answer: 0
    hint: Chia từng hạng tử cho 3x: (6x^3:3x) - (9x^2:3x) + (3x:3x).
    explanation: (6x^3 - 9x^2 + 3x) : (3x) = 2x^2 - 3x + 1.

  - question: Điều kiện để đơn thức a*x^m chia hết cho đơn thức b*x^n (với a, b khác 0) là:
    options:
      - m < n
      - m >= n
      - m = n
      - m + n >= 0
    answer: 1
    hint: Số mũ của biến bị chia phải lớn hơn hoặc bằng số mũ của biến chia.
    explanation: Đơn thức chia hết khi và chỉ khi số mũ m >= n.

  - question: Cho phép chia đa thức A(x) = B(x) * Q(x) + R(x). Điều kiện của đa thức dư R(x) là gì?
    options:
      - Bậc của R(x) phải lớn hơn bậc của B(x).
      - Bậc của R(x) phải nhỏ hơn bậc của B(x) hoặc R(x) = 0.
      - Bậc của R(x) bằng bậc của B(x).
      - R(x) luôn phải bằng 0.
    answer: 1
    hint: Phép chia dừng lại khi đa thức dư có bậc nhỏ hơn đa thức chia hoặc bằng 0.
    explanation: Theo định nghĩa phép chia có dư, bậc của R(x) nhỏ hơn bậc của B(x) hoặc R(x) = 0.

  - question: Thương của phép chia (x^2 - 4) : (x - 2) là:
    options:
      - x - 2
      - x + 2
      - x + 4
      - 2
    answer: 1
    hint: Phân tích x^2 - 4 = (x - 2)(x + 2).
    explanation: (x^2 - 4) : (x - 2) = (x - 2)(x + 2) : (x - 2) = x + 2.

  - question: Thực hiện phép chia (x^2 + 5x + 6) : (x + 2) ta được thương là:
    options:
      - x + 1
      - x + 2
      - x + 3
      - x + 4
    answer: 2
    hint: x^2 + 5x + 6 = (x + 2)(x + 3).
    explanation: (x^2 + 5x + 6) : (x + 2) = x + 3 (phép chia hết).

  - question: Số dư trong phép chia đa thức P(x) = x^3 + 2 cho nhị thức (x - 1) là:
    options:
      - 1
      - 2
      - 3
      - 0
    answer: 2
    hint: Áp dụng định lý Bézout: Số dư R = P(1) = 1^3 + 2.
    explanation: Theo định lý Bézout, R = P(1) = 1^3 + 2 = 3.

  - question: Đa thức A(x) bậc 5 chia cho đa thức B(x) bậc 2 thì đa thức thương Q(x) có bậc là:
    options:
      - Bậc 2
      - Bậc 3
      - Bậc 5
      - Bậc 7
    answer: 1
    hint: Bậc của thương bằng hiệu hai bậc: 5 - 2 = 3.
    explanation: Bậc(Q) = Bậc(A) - Bậc(B) = 5 - 2 = 3.

  - question: Cho phép chia (2x^2 + x + 3) : (x + 1). Đa thức dư của phép chia này là:
    options:
      - 1
      - 2
      - 3
      - 4
    answer: 3
    hint: Đặt tính chia hoặc dùng Bézout với x = -1: 2(-1)^2 + (-1) + 3 = 2 - 1 + 3 = 4.
    explanation: Số dư R = P(-1) = 2(-1)^2 + (-1) + 3 = 2 - 1 + 3 = 4.

  - question: Giá trị của m để đa thức x^2 - 5x + m chia hết cho (x - 2) là:
    options:
      - m = 6
      - m = -6
      - m = 10
      - m = -10
    answer: 0
    hint: Để chia hết thì P(2) = 0: 2^2 - 5*2 + m = 0 -> 4 - 10 + m = 0.
    explanation: P(2) = 4 - 10 + m = -6 + m = 0 suy ra m = 6.
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Chia đơn thức & Phân tích cơ bản** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Đặt tính chia (hết & có dư)** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | | **$3.0$ điểm** |
| **Tìm tham số chia hết & Toán nguyên** | | | TL3 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$3.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Đơn thức $18x^4$ chia hết cho đơn thức nào sau đây?
- A. $3x^5$
- B. $-6x^3$
- C. $2x^6$
- D. $9x^4y$

**Câu 2:** Kết quả của phép chia $(10x^3 - 15x^2) : (5x^2)$ là:
- A. $2x - 3$
- B. $2x^2 - 3x$
- C. $2x + 3$
- D. $5x - 3$

**Câu 3:** Cho đa thức $P(x)$ bậc $4$ chia cho đa thức $Q(x)$ bậc $2$ có dư. Bậc lớn nhất mà đa thức dư $R(x)$ có thể nhận là:
- A. Bậc $2$
- B. Bậc $1$
- C. Bậc $3$
- D. Bậc $0$

**Câu 4:** Thương của phép chia $(x^3 - 8) : (x - 2)$ là:
- A. $x^2 + 4$
- B. $x^2 - 2x + 4$
- C. $x^2 + 2x + 4$
- D. $x^2 - 4$

**Câu 5:** Thực hiện phép chia $(3x^2 - 2x + 5) : (x - 1)$, số dư của phép chia là:
- A. $4$
- B. $5$
- C. $6$
- D. $0$

**Câu 6:** Tìm $a$ để đa thức $x^2 - 4x + a$ chia hết cho $x - 3$:
- A. $a = 3$
- B. $a = -3$
- C. $a = 7$
- D. $a = -7$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):** Thực hiện các phép chia sau:
a) ($1.0$ điểm) $(16x^5 - 12x^4 + 8x^3 - 4x^2) : (-4x^2)$.
b) ($1.0$ điểm) $(2x^4 + 5x^3 - 3x^2) : (x^2)$.

**Bài 2 ($2.0$ điểm):** Đặt tính chia để tìm thương và dư:
a) ($1.0$ điểm) $(2x^3 - 3x^2 + 4x - 3) : (x - 1)$.
b) ($1.0$ điểm) $(3x^3 - 2x^2 + 5x - 4) : (x^2 + 2)$.

**Bài 3 ($2.0$ điểm):**
a) ($1.0$ điểm) Tìm hằng số $a$ để đa thức $A(x) = 2x^3 - 5x^2 + x + a$ chia hết cho đa thức $B(x) = 2x - 1$.
b) ($1.0$ điểm) Tìm số nguyên $x$ để phân thức $M = \frac{3x + 7}{x + 2}$ có giá trị là một số nguyên.

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
Cho đa thức $P(x)$ thỏa mãn: Khi chia $P(x)$ cho $(x - 2)$ thì dư $5$, khi chia $P(x)$ cho $(x - 3)$ thì dư $7$.
Hãy tìm đa thức dư $R(x)$ trong phép chia đa thức $P(x)$ cho tích $(x - 2)(x - 3)$.

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B · 2. A · 3. B · 4. C · 5. C · 6. A** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Chia từng hạng tử cho $-4x^2$:<br>$[16x^5 : (-4x^2)] - [12x^4 : (-4x^2)] + [8x^3 : (-4x^2)] - [4x^2 : (-4x^2)]$.<br>- Kết quả: $-4x^3 + 3x^2 - 2x + 1$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 1b** | - $(2x^4 + 5x^3 - 3x^2) : x^2 = (2x^4 : x^2) + (5x^3 : x^2) - (3x^2 : x^2)$.<br>- Kết quả: $2x^2 + 5x - 3$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 2a** | - Đặt tính chia cột dọc đúng chuẩn:<br>$2x^3 : x = 2x^2 \to 2x^2(x - 1) = 2x^3 - 2x^2 \to$ Dư 1: $-x^2 + 4x - 3$.<br>$-x^2 : x = -x \to -x(x - 1) = -x^2 + x \to$ Dư 2: $3x - 3$.<br>$3x : x = 3 \to 3(x - 1) = 3x - 3 \to$ Dư cuối: $0$.<br>- Kết luận: Thương $Q(x) = 2x^2 - x + 3$, số dư $R = 0$ (phép chia hết). | $0.5$ đ<br><br>$0.25$ đ<br>$0.25$ đ |
| **Bài 2b** | - Đặt tính chia:<br>$3x^3 : x^2 = 3x \to 3x(x^2 + 2) = 3x^3 + 6x \to$ Dư 1: $-2x^2 - x - 4$.<br>$-2x^2 : x^2 = -2 \to -2(x^2 + 2) = -2x^2 - 4 \to$ Dư cuối: $-x$.<br>- Kết luận: Thương $Q(x) = 3x - 2$, đa thức dư $R(x) = -x$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 3a** | - Áp dụng định lý Bézout hoặc đặt tính chia:<br>Nghiệm của $B(x) = 2x - 1$ là $x = \frac{1}{2}$.<br>Để $A(x) \ \vdots \ B(x)$ thì $A(\frac{1}{2}) = 0$.<br>$A(\frac{1}{2}) = 2(\frac{1}{2})^3 - 5(\frac{1}{2})^2 + \frac{1}{2} + a = 2 \cdot \frac{1}{8} - 5 \cdot \frac{1}{4} + \frac{1}{2} + a = \frac{1}{4} - \frac{5}{4} + \frac{2}{4} + a = -\frac{2}{4} + a = -\frac{1}{2} + a$.<br>- Để chia hết: $-\frac{1}{2} + a = 0 \implies a = \frac{1}{2}$. | $0.25$ đ<br><br>$0.5$ đ<br><br>$0.25$ đ |
| **Bài 3b** | - Tách phân thức: $M = \frac{3(x + 2) + 1}{x + 2} = 3 + \frac{1}{x + 2}$.<br>- Để $M \in \mathbb{Z}$ thì $\frac{1}{x + 2} \in \mathbb{Z} \implies (x + 2) \in \text{Ư}(1) = \{\pm 1\}$.<br>+ Nếu $x + 2 = 1 \implies x = -1$.<br>+ Nếu $x + 2 = -1 \implies x = -3$.<br>- Kết luận: $x \in \{-1; -3\}$. | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 4** | - Vì đa thức chia $(x - 2)(x - 3)$ có bậc $2$, nên đa thức dư $R(x)$ có bậc không quá $1$.<br>Đặt $R(x) = ax + b$.<br>- Khi đó: $P(x) = (x - 2)(x - 3) \cdot Q(x) + (ax + b)$.<br>- Theo đề bài và định lý Bézout:<br>+ $P(2) = 5 \implies a(2) + b = 2a + b = 5$. (1)<br>+ $P(3) = 7 \implies a(3) + b = 3a + b = 7$. (2)<br>- Lấy (2) trừ (1): $a = 7 - 5 = 2 \implies b = 5 - 2(2) = 1$.<br>- Vậy đa thức dư là: $R(x) = 2x + 1$. | $0.25$ đ<br><br>$0.25$ đ<br><br>$0.25$ đ<br>$0.25$ đ |
