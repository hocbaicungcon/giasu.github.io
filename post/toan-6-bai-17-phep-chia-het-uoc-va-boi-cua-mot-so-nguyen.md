---
title: 'Toán 6 Bài 17: Phép chia hết. Ước và bội của một số nguyên - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 17 Phép chia hết, ước và bội của một số nguyên: quy tắc dấu của thương, cách tìm tập hợp ước và bội, tính chất chia hết của tổng hiệu tích, dạng toán tìm x, bài toán thực tế và nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số nguyên
  - Phép chia hết
  - Ước và bội của số nguyên
  - Tính chất chia hết
  - Kết nối tri thức
grade: 6
---

# Bài 17. Phép chia hết. Ước và bội của một số nguyên

Ở các bài học trước, chúng ta đã nắm vững các phép cộng, trừ, nhân số nguyên và quy tắc dấu ngoặc. Hôm nay, chúng ta sẽ hoàn thiện mảnh ghép cuối cùng trong bốn phép tính số học trên tập số nguyên $\mathbb{Z}$: **Phép chia hết, cùng khái niệm ước và bội mở rộng cho số nguyên**.

Nếu như ở tập số tự nhiên $\mathbb{N}$, ước của một số chỉ gồm các số tự nhiên dương, thì khi bước vào thế giới số nguyên $\mathbb{Z}$, ước và bội có gì khác biệt? Làm thế nào để xác định dấu của một thương nguyên? Khi tìm ước của một số nguyên âm thì làm ra sao? Bài học này sẽ giúp các em giải quyết toàn bộ những câu hỏi trên với phương pháp giải trực quan, bài tập độc bản $100\%$ và lời giải chi tiết từng bước.

---

## 0. Khởi động — Thử tài phản xạ phép chia và ước số nguyên (5–7 phút)

Hãy khởi động tư duy cùng 3 câu hỏi trắc nghiệm tương tác dưới đây:

```quiz
type: choice
question: 'Kết quả của phép chia hai số nguyên khác dấu (-72) : 8 là:'
options:
  - '-9'
  - '9'
  - '-8'
  - '8'
answer: 1
explanation: 'Thương của hai số nguyên khác dấu là một số nguyên âm: (-72) : 8 = -(72 : 8) = -9.'
```

```quiz
type: choice
question: 'Tập hợp tất cả các ước của số nguyên 6 trong Z là:'
options:
  - '{1; 2; 3; 6}'
  - '{-6; -3; -2; -1}'
  - '{±1; ±2; ±3; ±6}'
  - '{0; ±1; ±2; ±3; ±6}'
answer: 3
explanation: 'Trong tập số nguyên Z, ước của 6 gồm cả các ước dương và các ước âm đối xứng: {±1; ±2; ±3; ±6}. Số 0 không phải là ước của bất kỳ số nào.'
```

```quiz
type: choice
question: 'Cho số nguyên x thỏa mãn (-7) · x = 56. Giá trị của x là:'
options:
  - '8'
  - '-8'
  - '-49'
  - '49'
answer: 2
explanation: 'Ta có x = 56 : (-7). Vì 56 và -7 khác dấu nên thương mang dấu âm: x = -8.'
```

---

## A. Lý thuyết trọng tâm

### 1. Phép chia hết trong tập hợp các số nguyên

> [!NOTE]
> **Định nghĩa quan hệ chia hết trong $\mathbb{Z}$:**
> Cho hai số nguyên $a$ và $b$ với $b \neq 0$. Nếu tồn tại một số nguyên $q$ sao cho:
> $$a = b \cdot q$$
> thì ta nói **$a$ chia hết cho $b$**, kí hiệu là $a \ \vdots \ b$.
> Khi đó, phép chia $a : b$ là phép chia hết và thương là $q$, viết là:
> $$a : b = q.$$

#### Quy tắc dấu của thương
Phép chia là phép toán ngược của phép nhân ($a : b = q \iff a = b \cdot q$), do đó **quy tắc dấu của thương hoàn toàn tương tự quy tắc dấu của tích**:

| Dấu của số bị chia ($a$) | Dấu của số chia ($b$) | Dấu của thương ($a : b$) | Ví dụ cụ thể |
| :---: | :---: | :---: | :---: |
| **Dương (+)** | **Dương (+)** | **Dương (+)** | $48 : 6 = 8.$ |
| **Âm (-)** | **Âm (-)** | **Dương (+)** | $(-48) : (-6) = 8.$ |
| **Âm (-)** | **Dương (+)** | **Âm (-)** | $(-48) : 6 = -8.$ |
| **Dương (+)** | **Âm (-)** | **Âm (-)** | $48 : (-6) = -8.$ |

> [!TIP]
> **Khẩu quyết nhớ dấu thương:**
> - **Cùng dấu** thì kết quả **Dương** $(+)$.
> - **Khác dấu** thì kết quả **Âm** $(-)$.
> - Số $0$ chia cho bất kỳ số nguyên khác $0$ nào đều bằng $0$: $0 : b = 0$ (với $b \neq 0$). Không có phép chia cho số $0$.

**Ví dụ 1.** Thực hiện các phép chia sau:
1. $63 : 9;$
2. $(-63) : (-9);$
3. $(-80) : 10;$
4. $54 : (-6);$
5. $0 : (-17).$

**Lời giải:**
1. Hai số cùng dấu dương: $63 : 9 = 7.$
2. Hai số cùng dấu âm nên thương mang dấu dương: $(-63) : (-9) = 63 : 9 = 7.$
3. Hai số khác dấu nên thương mang dấu âm: $(-80) : 10 = -(80 : 10) = -8.$
4. Hai số khác dấu nên thương mang dấu âm: $54 : (-6) = -(54 : 6) = -9.$
5. Số $0$ chia cho số nguyên âm khác $0$: $0 : (-17) = 0.$

---

### 2. Ước và bội của một số nguyên

> [!NOTE]
> **Định nghĩa ước và bội:**
> Khi $a \ \vdots \ b$ (với $b \neq 0$), ta nói:
> - $a$ là một **bội** của $b$.
> - $b$ là một **ước** của $a$.

#### Tính chất đối xứng dấu của ước và bội
1. Nếu $a$ là một bội của $b$ thì $-a$ cũng là một bội của $b$.
2. Nếu $b$ là một ước của $a$ thì $-b$ cũng là một ước của $a$.

Do đó, các ước của một số nguyên khác $0$ luôn xuất hiện theo từng **cặp số đối nhau** $d$ và $-d$.
Để viết gọn, ta sử dụng kí hiệu $\pm d$ (đọc là "cộng trừ $d$", nghĩa là gồm cả $d$ và $-d$).

> [!IMPORTANT]
> **Quy tắc tìm tập hợp ước của số nguyên $a \neq 0$:**
> 1. Bước 1: Tìm tất cả các ước nguyên dương của $|a|$ (chia $|a|$ lần lượt cho $1; 2; 3; \dots$).
> 2. Bước 2: Thêm các số đối của các ước vừa tìm được vào tập hợp.
>
> Kí hiệu tập hợp các ước của $a$ là $\text{Ư}(a)$.

**Ví dụ 2.**
1. Viết tập hợp tất cả các ước của $15$ và tập hợp các ước của $-18$.
2. Tìm $5$ số nguyên là bội của $-6$.

**Lời giải:**
1. 
- Giá trị tuyệt đối $|15| = 15$. Các ước dương của $15$ là $1; 3; 5; 15$.
  Thêm các số đối, ta có:
  $$\text{Ư}(15) = \{\pm 1; \pm 3; \pm 5; \pm 15\} = \{-15; -5; -3; -1; 1; 3; 5; 15\}.$$
- Giá trị tuyệt đối $|-18| = 18$. Các ước dương của $18$ là $1; 2; 3; 6; 9; 18$.
  Thêm các số đối, ta có:
  $$\text{Ư}(-18) = \{\pm 1; \pm 2; \pm 3; \pm 6; \pm 9; \pm 18\}.$$

2. Để tìm bội của $-6$, ta nhân $-6$ lần lượt với các số nguyên $\dots; -2; -1; 0; 1; 2; \dots$:
   - $(-6) \cdot 0 = 0;$
   - $(-6) \cdot 1 = -6;$
   - $(-6) \cdot (-1) = 6;$
   - $(-6) \cdot 2 = -12;$
   - $(-6) \cdot (-2) = 12.$
   
   Năm bội nguyên của $-6$ có thể chọn là: $-12; -6; 0; 6; 12.$

---

### 3. Tính chất chia hết trong tập hợp các số nguyên

Cho các số nguyên $a, b, c$ với $c \neq 0$:

1. **Tính chất chia hết của một tổng và hiệu:**
   - Nếu $a \ \vdots \ c$ và $b \ \vdots \ c$ thì $(a + b) \ \vdots \ c$ và $(a - b) \ \vdots \ c$.
   - Nếu $a \ \vdots \ c$ và $b \ \not\vdots \ c$ thì $(a + b) \ \not\vdots \ c$ và $(a - b) \ \not\vdots \ c$.
2. **Tính chất chia hết của một tích:**
   - Nếu $a \ \vdots \ b$ thì $(a \cdot m) \ \vdots \ b$ với mọi số nguyên $m$.
   - Nghĩa là: Trong một tích các số nguyên, chỉ cần có ít nhất một thừa số chia hết cho $b$ thì cả tích đó chia hết cho $b$.
3. **Tính chất bắc cầu:**
   - Nếu $a \ \vdots \ b$ và $b \ \vdots \ c$ thì $a \ \vdots \ c$.

> [!WARNING]
> **5 Cạm bẫy học sinh rất hay mắc phải:**
> 1. **Quên ước âm:** Rất nhiều bạn chỉ viết các ước dương như hồi Tiểu học. Luôn nhớ rằng trong $\mathbb{Z}$, ước luôn đi kèm số âm đối xứng!
> 2. **Số 0 không thể là ước:** Số $0$ là bội của mọi số nguyên khác $0$ ($0 = b \cdot 0$), nhưng $0$ không thể là ước của bất kỳ số nào (vì không có phép chia cho $0$).
> 3. **Số 1 và -1:** Hai số $1$ và $-1$ là ước của mọi số nguyên.
> 4. **Tập bội là vô hạn:** Tập hợp các bội của một số nguyên khác $0$ kéo dài vô tận về cả chiều dương và chiều âm.
> 5. **Nhầm chiều kí hiệu:** Kí hiệu $a \ \vdots \ b$ đọc là "$a$ chia hết cho $b$" ($a$ là số bị chia). Khác với $b \mid a$ ("$b$ là ước của $a$").

---

## B. Bảng so sánh và sơ đồ kiến thức trọng tâm

Bảng tóm tắt mối quan hệ giữa phép nhân và phép chia trên tập hợp số nguyên $\mathbb{Z}$:

| Đặc điểm | Phép nhân số nguyên | Phép chia hết số nguyên |
| :--- | :--- | :--- |
| **Quy tắc dấu** | Cùng dấu ra Dương $(+)$<br>Khác dấu ra Âm $(-)$ | Cùng dấu ra Dương $(+)$<br>Khác dấu ra Âm $(-)$ |
| **Vai trò số 0** | $a \cdot 0 = 0$ với mọi $a$ | $0 : b = 0$ ($b \neq 0$); **Không chia cho 0** |
| **Tính chất đặc trưng** | Đổi dấu chẵn lần âm $\to$ Dương<br>Đổi dấu lẻ lần âm $\to$ Âm | $\text{Ư}(a) = \text{Ư}(-a)$<br>Bội của $a$ cũng là bội của $-a$ |
| **Tập hợp nghiệm** | $a \cdot x = b \implies x$ duy nhất nếu $a \neq 0$ và $b \ \vdots \ a$ | Nếu $b \ \not\vdots \ a$ thì phương trình vô nghiệm trong $\mathbb{Z}$ |

---

## C. Các dạng toán thường gặp và phương pháp giải chi tiết

### Dạng 1. Thực hiện phép chia hết — Xét quan hệ chia hết

**Phương pháp giải:**
- **Bước 1:** Xác định dấu của thương bằng quy tắc dấu (cùng dấu $\to +$, khác dấu $\to -$).
- **Bước 2:** Lấy phần tự nhiên của số bị chia chia cho phần tự nhiên của số chia: $|a| : |b|$.
- Để kiểm tra $a$ có chia hết cho $b$ hay không, ta kiểm tra xem phép chia $|a| : |b|$ có phải là phép chia hết hay không.

#### Bài toán 1.1 (Thực hiện phép tính)
Tính giá trị các biểu thức sau:
1. $A = (-84) : 7;$
2. $B = (-96) : (-8);$
3. $C = 105 : (-15);$
4. $D = [(-45) + (-27)] : (-9);$
5. $E = (-120) : (-4) : (-5).$

**Lời giải:**
1. Khác dấu nên thương mang dấu âm:
   $$A = -(84 : 7) = -12.$$
2. Cùng dấu âm nên thương mang dấu dương:
   $$B = 96 : 8 = 12.$$
3. Khác dấu nên thương mang dấu âm:
   $$C = -(105 : 15) = -7.$$
4. Thực hiện phép tính trong ngoặc vuông trước:
   $$(-45) + (-27) = -72.$$
   Sau đó thực hiện phép chia cùng dấu:
   $$D = (-72) : (-9) = 72 : 9 = 8.$$
5. Thực hiện từ trái sang phải:
   $$(-120) : (-4) = 30.$$
   Tiếp tục lấy $30 : (-5) = -6.$
   Vậy $E = -6.$

#### Bài toán 1.2 (Xét tính chia hết)
Trong các số $-28; 0; 14; -35; 42$:
1. Những số nào chia hết cho $7$?
2. Những số nào chia hết cho $-4$?

**Lời giải:**
1. Ta xét từng số với $7$:
   - $(-28) = 7 \cdot (-4) \implies -28 \ \vdots \ 7.$
   - $0 = 7 \cdot 0 \implies 0 \ \vdots \ 7.$
   - $14 = 7 \cdot 2 \implies 14 \ \vdots \ 7.$
   - $(-35) = 7 \cdot (-5) \implies -35 \ \vdots \ 7.$
   - $42 = 7 \cdot 6 \implies 42 \ \vdots \ 7.$
   
   Vậy tất cả các số đã cho $\{-28; 0; 14; -35; 42\}$ đều chia hết cho $7$.

2. Ta xét từng số với $-4$:
   - $(-28) = (-4) \cdot 7 \implies -28 \ \vdots \ (-4).$
   - $0 = (-4) \cdot 0 \implies 0 \ \vdots \ (-4).$
   - $14$ không chia hết cho $4$ (vì $14 = 4 \cdot 3 + 2$) nên $14 \ \not\vdots \ (-4).$
   - $-35$ không chia hết cho $4$ nên $-35 \ \not\vdots \ (-4).$
   - $42$ không chia hết cho $4$ (vì $42 = 4 \cdot 10 + 2$) nên $42 \ \not\vdots \ (-4).$
   
   Vậy các số chia hết cho $-4$ là: $-28$ và $0$.

---

### Dạng 2. Tìm tập hợp các ước và bội của một số nguyên

**Phương pháp giải:**
- **Tìm tập ước:** Tìm tất cả ước dương của $|a|$, sau đó lấy thêm số đối của chúng.
  $$\text{Ư}(a) = \{\pm d_1; \pm d_2; \dots\}.$$
- **Tìm tập bội:** Nhân số đó với $k \in \mathbb{Z}$ ($\dots; -2; -1; 0; 1; 2; \dots$). Chú ý điều kiện chặn khoảng hoặc bất đẳng thức của đề bài.

#### Bài toán 2.1
1. Tìm tất cả các ước của các số nguyên sau: $11; -14; 24; -36$.
2. Viết tập hợp các bội của $-8$ nằm trong khoảng từ $-30$ đến $30$.

**Lời giải:**
1. 
- Với số $11$: Ước dương là $1; 11$. Do đó:
  $$\text{Ư}(11) = \{\pm 1; \pm 11\}.$$
- Với số $-14$: $|-14| = 14$. Ước dương của $14$ là $1; 2; 7; 14$. Do đó:
  $$\text{Ư}(-14) = \{\pm 1; \pm 2; \pm 7; \pm 14\}.$$
- Với số $24$: Ước dương là $1; 2; 3; 4; 6; 8; 12; 24$. Do đó:
  $$\text{Ư}(24) = \{\pm 1; \pm 2; \pm 3; \pm 4; \pm 6; \pm 8; \pm 12; \pm 24\}.$$
- Với số $-36$: $|-36| = 36$. Ước dương là $1; 2; 3; 4; 6; 9; 12; 18; 36$. Do đó:
  $$\text{Ư}(-36) = \{\pm 1; \pm 2; \pm 3; \pm 4; \pm 6; \pm 9; \pm 12; \pm 18; \pm 36\}.$$

2. Bội của $-8$ có dạng $-8k$ với $k \in \mathbb{Z}$:
   Lần lượt nhân $-8$ với $\dots; -3; -2; -1; 0; 1; 2; 3; \dots$, ta thu được các bội:
   $$\dots; 24; 16; 8; 0; -8; -16; -24; -32; \dots$$
   Điều kiện đề bài yêu cầu: $-30 < x < 30$.
   Vậy các bội thỏa mãn là:
   $$\{-24; -16; -8; 0; 8; 16; 24\}.$$

---

### Dạng 3. Tìm số nguyên $x$ trong đẳng thức (áp dụng phép chia)

**Phương pháp giải:**
- Biến đổi đưa đẳng thức về dạng cơ bản $a \cdot x = b$ (với $a \neq 0$).
- Nếu $b \ \vdots \ a$ thì $x = b : a$. Chú ý xác định đúng dấu của thương.
- Nếu $b \ \not\vdots \ a$ thì không có số nguyên $x$ thỏa mãn bài toán.

#### Bài toán 3.1
Tìm số nguyên $x$, biết:
1. $(-7) \cdot x = 63;$
2. $x \cdot (-9) = -108;$
3. $15x + 135 = 45;$
4. $(-8)x - 25 = (-3) \cdot (-7) + 10.$

**Lời giải:**
1. $(-7) \cdot x = 63$
   $$x = 63 : (-7)$$
   $$x = -9.$$
   Vậy $x = -9.$

2. $x \cdot (-9) = -108$
   $$x = (-108) : (-9)$$
   $$x = 12.$$
   Vậy $x = 12.$

3. $15x + 135 = 45$
   $$15x = 45 - 135$$
   $$15x = -90$$
   $$x = (-90) : 15$$
   $$x = -6.$$
   Vậy $x = -6.$

4. $(-8)x - 25 = (-3) \cdot (-7) + 10$
   $$(-8)x - 25 = 21 + 10$$
   $$(-8)x - 25 = 31$$
   $$(-8)x = 31 + 25$$
   $$(-8)x = 56$$
   $$x = 56 : (-8)$$
   $$x = -7.$$
   Vậy $x = -7.$

---

### Dạng 4. Tìm cặp số nguyên $(x; y)$ khi biết tích

**Phương pháp giải:**
- Đưa phương trình về dạng tích: $X \cdot Y = k$ (với $k \in \mathbb{Z}$ là hằng số đã biết).
- Suy ra $X$ và $Y$ phải là các ước nguyên của $k$: $X \in \text{Ư}(k)$ và $Y = k : X$.
- Lập bảng liệt kê tất cả các khả năng của $X$, từ đó tìm ra $Y$, rồi giải tìm $x$ và $y$.
- Kiểm tra các điều kiện phụ của đề bài (ví dụ: $x < y$, hoặc $x, y > 0$).

#### Bài toán 4.1
Tìm các cặp số nguyên $(x; y)$ thỏa mãn:
1. $x \cdot y = -10;$
2. $(x - 1)(y + 2) = 7;$
3. $(2x + 1)(y - 3) = -12.$

**Lời giải:**
1. Vì $x \cdot y = -10$ nên $x \in \text{Ư}(-10) = \{\pm 1; \pm 2; \pm 5; \pm 10\}$.
   Ta có bảng giá trị tương ứng:

| $x$ | $1$ | $-1$ | $2$ | $-2$ | $5$ | $-5$ | $10$ | $-10$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y = -10 : x$ | $-10$ | $10$ | $-5$ | $5$ | $-2$ | $2$ | $-1$ | $1$ |

Vậy các cặp số nguyên $(x; y)$ thỏa mãn là:
$$(x; y) \in \{(1; -10); (-1; 10); (2; -5); (-2; 5); (5; -2); (-5; 2); (10; -1); (-10; 1)\}.$$

2. Vì $(x - 1)(y + 2) = 7$ nên $x - 1$ và $y + 2$ là các ước của $7$.
   Tập hợp các ước của $7$ là $\text{Ư}(7) = \{1; -1; 7; -7\}$.
   Ta lập bảng:

| $x - 1$ | $1$ | $-1$ | $7$ | $-7$ |
| :---: | :---: | :---: | :---: | :---: |
| $y + 2$ | $7$ | $-7$ | $1$ | $-1$ |
| $x = (x-1) + 1$ | $2$ | $0$ | $8$ | $-6$ |
| $y = (y+2) - 2$ | $5$ | $-9$ | $-1$ | $-3$ |

Vậy các cặp $(x; y)$ thỏa mãn là:
$$(x; y) \in \{(2; 5); (0; -9); (8; -1); (-6; -3)\}.$$

3. Vì $(2x + 1)(y - 3) = -12$ nên $2x + 1$ là ước của $-12$.
   Đặc biệt, $2x + 1$ là một số nguyên lẻ (vì $2x$ chẵn $\implies 2x + 1$ lẻ).
   Các ước lẻ của $-12$ chỉ gồm: $\{1; -1; 3; -3\}$.
   Nhờ nhận xét này, ta rút ngắn bảng xét trường hợp:

| $2x + 1$ | $1$ | $-1$ | $3$ | $-3$ |
| :---: | :---: | :---: | :---: | :---: |
| $y - 3 = -12 : (2x+1)$ | $-12$ | $12$ | $-4$ | $4$ |
| $2x$ | $0$ | $-2$ | $2$ | $-4$ |
| $x$ | $0$ | $-1$ | $1$ | $-2$ |
| $y$ | $-9$ | $15$ | $-1$ | $7$ |

Vậy có $4$ cặp số nguyên thỏa mãn:
$$(x; y) \in \{(0; -9); (-1; 15); (1; -1); (-2; 7)\}.$$

---

### Dạng 5. Xét tính chia hết của tổng, hiệu, tích không qua tính toán

**Phương pháp giải:**
- Dùng tính chất chia hết của tổng: Nếu tất cả các số hạng của tổng (hiệu) đều chia hết cho $m$ thì tổng (hiệu) chia hết cho $m$.
- Nếu có đúng một số hạng không chia hết cho $m$, các số hạng còn lại đều chia hết cho $m$ thì tổng (hiệu) không chia hết cho $m$.
- Dùng tính chất chia hết của tích: Chỉ cần một thừa số chia hết cho $m$ thì cả tích chia hết cho $m$.

#### Bài toán 5.1
Không thực hiện tính giá trị biểu thức, hãy giải thích vì sao:
1. Tổng $A = (-36) + 48 + (-84)$ chia hết cho $12$;
2. Hiệu $B = (-50) - 17$ không chia hết cho $5$;
3. Tích $C = (-14) \cdot 25 \cdot (-33)$ chia hết cho $7$ và chia hết cho $11$.

**Lời giải:**
1. Ta xét từng số hạng của tổng $A$:
   - $(-36) = 12 \cdot (-3) \implies -36 \ \vdots \ 12;$
   - $48 = 12 \cdot 4 \implies 48 \ \vdots \ 12;$
   - $(-84) = 12 \cdot (-7) \implies -84 \ \vdots \ 12.$
   
   Vì cả ba số hạng đều chia hết cho $12$ nên tổng $A \ \vdots \ 12.$

2. Ta xét từng số hạng của hiệu $B$:
   - $(-50) = 5 \cdot (-10) \implies -50 \ \vdots \ 5;$
   - $17$ không chia hết cho $5$ ($17 \ \not\vdots \ 5$).
   
   Một số hạng chia hết cho $5$, số hạng còn lại không chia hết cho $5$ nên hiệu $B \ \not\vdots \ 5.$

3. Trong tích $C$:
   - Có thừa số $-14$ chia hết cho $7$ (vì $-14 = 7 \cdot (-2)$) nên tích $C \ \vdots \ 7.$
   - Có thừa số $-33$ chia hết cho $11$ (vì $-33 = 11 \cdot (-3)$) nên tích $C \ \vdots \ 11.$

---

### Dạng 6. Ứng dụng thực tế của phép chia và ước bội số nguyên

#### Bài toán 6.1 (Thâm hụt ngân sách cửa hàng)
Một cửa hàng kinh doanh hoa tươi trong quý I bị thua lỗ tổng cộng $36$ triệu đồng. Biết rằng số tiền lỗ được chia đều cho cả $3$ tháng trong quý.
1. Hãy dùng số nguyên để biểu diễn mức biến động lợi nhuận bình quân của cửa hàng trong mỗi tháng.
2. Sang quý II, cửa hàng đề ra mục tiêu: tổng lợi nhuận cả quý phải đạt $+45$ triệu đồng chia đều cho $3$ tháng. Hỏi mỗi tháng quý II cửa hàng phải tạo ra mức chênh lệch lợi nhuận bao nhiêu so với mỗi tháng của quý I?

**Lời giải:**
1. Cửa hàng thua lỗ $36$ triệu đồng, nghĩa là biến động lợi nhuận cả quý I là $-36$ triệu đồng.
   Mức biến động lợi nhuận bình quân mỗi tháng trong quý I là:
   $$(-36) : 3 = -12\text{ (triệu đồng)}.$$
   Mỗi tháng trong quý I cửa hàng bị lỗ $12$ triệu đồng.

2. Mục tiêu bình quân mỗi tháng trong quý II là:
   $$45 : 3 = 15\text{ (triệu đồng)}.$$
   Mức chênh lệch lợi nhuận mỗi tháng của quý II so với quý I là:
   $$15 - (-12) = 15 + 12 = 27\text{ (triệu đồng)}.$$
   Vậy mỗi tháng quý II cửa hàng phải tăng thêm $27$ triệu đồng lợi nhuận so với quý I.

---

## D. Phiếu bài tập tự luyện (10 bài độc bản kèm lời giải)

### Đề bài phiếu tự luyện

**Bài 1.** Thực hiện các phép chia sau:
1. $(-91) : 7;$
2. $(-144) : (-12);$
3. $85 : (-17);$
4. $0 : (-29).$

**Bài 2.** Viết tập hợp tất cả các ước của các số nguyên sau:
1. $-16;$
2. $27;$
3. $-45.$

**Bài 3.** Điền số nguyên thích hợp vào các ô trống trong bảng sau:

| $a$ | $-24$ | $\dots$ | $-90$ | $0$ |
| :---: | :---: | :---: | :---: | :---: |
| $b$ | $-6$ | $-8$ | $15$ | $-19$ |
| $a : b$ | $\dots$ | $12$ | $\dots$ | $\dots$ |

**Bài 4.** Tìm tất cả các số nguyên $x$ là bội của $-7$ sao cho $-25 < x \le 28$.

**Bài 5.** Trong các số $-42; -18; 0; 15; 36; -77$:
1. Những số nào chia hết cho $-6$?
2. Những số nào chia hết cho $9$?

**Bài 6.** Tìm số nguyên $x$, biết:
1. $(-9) \cdot x = 72;$
2. $6x - 14 = -50;$
3. $(-5)x + 23 = (-4) \cdot (-8) + 11.$

**Bài 7.** Bạn Minh khẳng định: *"Vì $12$ chia hết cho $4$ nên mọi ước của $12$ cũng đều chia hết cho $4$."* Theo em, bạn Minh khẳng định đúng hay sai? Hãy lấy ví dụ minh họa để giải thích.

**Bài 8.** Không làm phép tính cụ thể, hãy xét xem:
1. $M = (-35) + 70 - 105$ có chia hết cho $7$ không?
2. $N = 4 \cdot (-9) \cdot 13 + 28$ có chia hết cho $4$ không? Có chia hết cho $9$ không?

**Bài 9.** Tìm tất cả các cặp số nguyên $(x; y)$ thỏa mãn:
$$x \cdot y = -14.$$

**Bài 10.** Tìm các số nguyên $x, y$ sao cho:
$$(x + 2)(y - 5) = 8.$$

---

### Lời giải chi tiết phiếu tự luyện

**Bài 1.**
1. $(-91) : 7 = -(91 : 7) = -13.$
2. $(-144) : (-12) = 144 : 12 = 12.$
3. $85 : (-17) = -(85 : 17) = -5.$
4. $0 : (-29) = 0.$

**Bài 2.**
1. $|-16| = 16$. Các ước dương của $16$ là $1; 2; 4; 8; 16$.
   $$\text{Ư}(-16) = \{\pm 1; \pm 2; \pm 4; \pm 8; \pm 16\}.$$
2. Các ước dương của $27$ là $1; 3; 9; 27$.
   $$\text{Ư}(27) = \{\pm 1; \pm 3; \pm 9; \pm 27\}.$$
3. $|-45| = 45$. Các ước dương của $45$ là $1; 3; 5; 9; 15; 45$.
   $$\text{Ư}(-45) = \{\pm 1; \pm 3; \pm 5; \pm 9; \pm 15; \pm 45\}.$$

**Bài 3.**
- Cột 1: $a : b = (-24) : (-6) = 4.$
- Cột 2: Ta có $a : (-8) = 12 \implies a = 12 \cdot (-8) = -96.$
- Cột 3: $a : b = (-90) : 15 = -6.$
- Cột 4: $a : b = 0 : (-19) = 0.$

Bảng kết quả hoàn chỉnh:

| $a$ | $-24$ | **$-96$** | $-90$ | $0$ |
| :---: | :---: | :---: | :---: | :---: |
| $b$ | $-6$ | $-8$ | $15$ | $-19$ |
| $a : b$ | **$4$** | $12$ | **$-6$** | **$0$** |

**Bài 4.**
Bội của $-7$ có dạng $-7k$ ($k \in \mathbb{Z}$).
Ta tìm các bội nguyên trong khoảng $(-25; 28]$:
$$\dots; -7 \cdot 3 = -21; -7 \cdot 2 = -14; -7 \cdot 1 = -7; -7 \cdot 0 = 0; -7 \cdot (-1) = 7; -7 \cdot (-2) = 14; -7 \cdot (-3) = 21; -7 \cdot (-4) = 28.$$
Các giá trị này đều thỏa mãn $-25 < x \le 28$.
Vậy $x \in \{-21; -14; -7; 0; 7; 14; 21; 28\}$.

**Bài 5.**
1. Các số chia hết cho $-6$ (chia hết cho cả $2$ và $3$):
   - $-42 = (-6) \cdot 7 \implies$ thỏa mãn;
   - $-18 = (-6) \cdot 3 \implies$ thỏa mãn;
   - $0 = (-6) \cdot 0 \implies$ thỏa mãn;
   - $15$ không chia hết cho $6$;
   - $36 = (-6) \cdot (-6) \implies$ thỏa mãn;
   - $-77$ không chia hết cho $6$.
   
   Vậy các số chia hết cho $-6$ là: $-42; -18; 0; 36.$

2. Các số chia hết cho $9$:
   - $-18 = 9 \cdot (-2) \implies$ thỏa mãn;
   - $0 = 9 \cdot 0 \implies$ thỏa mãn;
   - $36 = 9 \cdot 4 \implies$ thỏa mãn.
   
   Vậy các số chia hết cho $9$ là: $-18; 0; 36.$

**Bài 6.**
1. $(-9) \cdot x = 72$
   $$x = 72 : (-9) = -8.$$

2. $6x - 14 = -50$
   $$6x = -50 + 14$$
   $$6x = -36$$
   $$x = (-36) : 6 = -6.$$

3. $(-5)x + 23 = (-4) \cdot (-8) + 11$
   $$(-5)x + 23 = 32 + 11$$
   $$(-5)x + 23 = 43$$
   $$(-5)x = 43 - 23$$
   $$(-5)x = 20$$
   $$x = 20 : (-5) = -4.$$

**Bài 7.**
Bạn Minh khẳng định **sai**.
*Giải thích và phản ví dụ:*
Số $6$ là một ước của $12$ (vì $12 \ \vdots \ 6$), nhưng $6$ không hề chia hết cho $4$ ($6 : 4 = 1$ dư $2$). Tương tự, các ước khác như $1; 2; 3; -1; -2; -3; -6$ của $12$ đều không chia hết cho $4$.
*(Lưu ý: Mọi bội của $12$ mới chia hết cho $4$, chứ ước của $12$ thì không nhất thiết chia hết cho $4$).*

**Bài 8.**
1. Ta có:
   $-35 = 7 \cdot (-5) \ \vdots \ 7;$
   $70 = 7 \cdot 10 \ \vdots \ 7;$
   $105 = 7 \cdot 15 \ \vdots \ 7.$
   Do cả ba số hạng đều chia hết cho $7$ nên $M \ \vdots \ 7.$

2. Xét biểu thức $N = 4 \cdot (-9) \cdot 13 + 28$:
   - Tích $4 \cdot (-9) \cdot 13$ có thừa số $4$ nên chia hết cho $4$; số hạng $28 = 4 \cdot 7$ cũng chia hết cho $4$. Do đó $N \ \vdots \ 4.$
   - Tích $4 \cdot (-9) \cdot 13$ có thừa số $-9$ nên chia hết cho $9$; tuy nhiên số hạng $28$ không chia hết cho $9$ ($28 = 9 \cdot 3 + 1$). Một số hạng chia hết cho $9$, số hạng còn lại không chia hết nên $N \ \not\vdots \ 9.$

**Bài 9.**
Vì $x, y$ là các số nguyên và $x \cdot y = -14$ nên $x$ là ước của $-14$.
Ta có $\text{Ư}(-14) = \{\pm 1; \pm 2; \pm 7; \pm 14\}$.
Vì tích âm nên $x$ và $y$ trái dấu. Ta lập danh sách các cặp $(x; y)$:
$$(x; y) \in \{(1; -14); (-1; 14); (2; -7); (-2; 7); (7; -2); (-7; 2); (14; -1); (-14; 1)\}.$$
Có tất cả $8$ cặp số nguyên thỏa mãn.

**Bài 10.**
Vì $(x + 2)(y - 5) = 8$ nên $x + 2$ và $y - 5$ là các ước nguyên của $8$.
Ta có $\text{Ư}(8) = \{\pm 1; \pm 2; \pm 4; \pm 8\}$.
Lập bảng tính giá trị của $x$ và $y$:

| $x + 2$ | $1$ | $-1$ | $2$ | $-2$ | $4$ | $-4$ | $8$ | $-8$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y - 5 = 8 : (x+2)$ | $8$ | $-8$ | $4$ | $-4$ | $2$ | $-2$ | $1$ | $-1$ |
| $x = (x+2) - 2$ | $-1$ | $-3$ | $0$ | $-4$ | $2$ | $-6$ | $6$ | $-10$ |
| $y = (y-5) + 5$ | $13$ | $-3$ | $9$ | $1$ | $7$ | $3$ | $6$ | $4$ |

Vậy có $8$ cặp số nguyên $(x; y)$ thỏa mãn:
$$(x; y) \in \{(-1; 13); (-3; -3); (0; 9); (-4; 1); (2; 7); (-6; 3); (6; 6); (-10; 4)\}.$$

---

## E. Đề kiểm tra 15 phút — Đánh giá năng lực chuẩn

### Đề bài

**Phần I. Trắc nghiệm (4 câu — 4 điểm)**

```quiz
type: choice
question: 'Kết quả của phép tính (-108) : (-9) là:'
options:
  - '-12'
  - '12'
  - '-11'
  - '11'
answer: 2
explanation: 'Hai số cùng dấu âm nên thương là số dương: (-108) : (-9) = 108 : 9 = 12.'
```

```quiz
type: choice
question: 'Số nào sau đây KHÔNG PHẢI là ước của -15?'
options:
  - '-5'
  - '3'
  - '-15'
  - '0'
answer: 4
explanation: 'Số 0 không thể là ước của bất kỳ số nguyên nào vì phép chia cho 0 không xác định.'
```

```quiz
type: choice
question: 'Tất cả các số nguyên x thỏa mãn 18 chia hết cho x và x < 0 là:'
options:
  - '{-1; -2; -3; -6; -9; -18}'
  - '{-1; -2; -3; -6}'
  - '{-2; -3; -6; -9; -18}'
  - '{1; 2; 3; 6; 9; 18}'
answer: 1
explanation: 'Các ước âm của 18 gồm đầy đủ: {-1; -2; -3; -6; -9; -18}.'
```

```quiz
type: choice
question: 'Biết (-4) · (x - 3) = -32. Giá trị của x là:'
options:
  - '5'
  - '11'
  - '-5'
  - '-11'
answer: 2
explanation: 'x - 3 = (-32) : (-4) = 8. Suy ra x = 8 + 3 = 11.'
```

**Phần II. Tự luận (3 câu — 6 điểm)**

**Câu 1 (2 điểm).** Tìm tất cả các ước của số nguyên $-20$.

**Câu 2 (2 điểm).** Tìm số nguyên $x$, biết:
$$7x + 45 = 17.$$

**Câu 3 (2 điểm).** Tìm hai số nguyên $x$ và $y$ biết $x > y$ và $(x - 1)(y + 2) = 5$.

---

### Đáp án và thang điểm phần tự luận

**Câu 1 (2 điểm):**
- Giá trị tuyệt đối $|-20| = 20$. Các ước dương của $20$ là $1; 2; 4; 5; 10; 20$ *(1.0 điểm)*.
- Lấy thêm các số đối, tập hợp tất cả các ước của $-20$ là:
  $$\text{Ư}(-20) = \{\pm 1; \pm 2; \pm 4; \pm 5; \pm 10; \pm 20\}\text{ (1.0 điểm)}.$$

**Câu 2 (2 điểm):**
- Chuyển vế: $7x = 17 - 45$ *(0.5 điểm)*.
- Thực hiện trừ hai số nguyên: $7x = -28$ *(0.5 điểm)*.
- Tìm $x$: $x = (-28) : 7$ *(0.5 điểm)*.
- Kết luận: $x = -4$ *(0.5 điểm)*.

**Câu 3 (2 điểm):**
- Vì $(x - 1)(y + 2) = 5$ nên $x - 1$ và $y + 2$ là các ước của $5$: $\{\pm 1; \pm 5\}$ *(0.5 điểm)*.
- Lập bảng các trường hợp:

| $x - 1$ | $1$ | $5$ | $-1$ | $-5$ |
| :---: | :---: | :---: | :---: | :---: |
| $y + 2$ | $5$ | $1$ | $-5$ | $-1$ |
| $x$ | $2$ | $6$ | $0$ | $-4$ |
| $y$ | $3$ | $-1$ | $-7$ | $-3$ |

*(0.75 điểm)*
- Đối chiếu điều kiện $x > y$:
  - Cặp $(2; 3)$: loại vì $2 < 3$.
  - Cặp $(6; -1)$: nhận vì $6 > -1$.
  - Cặp $(0; -7)$: nhận vì $0 > -7$.
  - Cặp $(-4; -3)$: loại vì $-4 < -3$.
*(0.5 điểm)*
- Kết luận: Có $2$ cặp thỏa mãn là $(x; y) \in \{(6; -1); (0; -7)\}$ *(0.25 điểm)*.

---

## F. Bài toán bồi dưỡng học sinh giỏi & Nâng cao

Các bài toán liên quan đến tính chia hết trong tập số nguyên $\mathbb{Z}$ là trọng tâm thường xuyên xuất hiện trong các đề thi học sinh giỏi cấp trường và quận/huyện. Dưới đây là 5 bài toán tinh hoa kèm phương pháp giải tổng quát:

### Bài toán nâng cao 1 (Bất biến chẵn lẻ trong trò chơi đổi dấu)
Cho dãy gồm $500$ số chẵn dương đầu tiên:
$$S = 2 + 4 + 6 + 8 + \dots + 1000.$$
Người ta tùy ý thay đổi một số dấu "$+$" trong tổng trên thành dấu "$-$".
Hai bạn An và Bình sau khi đổi dấu thì tính ra kết quả lần lượt là $42$ và $-26$.
Hỏi có bạn nào tính đúng không? Vì sao?

**Lời giải:**
Tổng ban đầu gồm $500$ số hạng:
$$S = \frac{(2 + 1000) \cdot 500}{2} = 1002 \cdot 250 = 250\ 500.$$
Nhận xét: $250\ 500 = 4 \cdot 62\ 625$, do đó $S \ \vdots \ 4.$

Khi thay dấu "$+$" trước một số hạng chẵn $2k$ ($k \in \mathbb{N}^*$) thành dấu "$-$", giá trị của tổng sẽ giảm đi một lượng đúng bằng:
$$2 \cdot (2k) = 4k.$$
Vì $4k$ luôn chia hết cho $4$, nên mỗi lần đổi dấu một số hạng bất kỳ, giá trị của tổng mới chỉ thay đổi một bội số của $4$.
Do đó, dù ta có đổi bao nhiêu dấu cộng thành dấu trừ tùy ý thì **kết quả cuối cùng luôn luôn chia hết cho $4$** (bất biến chia hết cho $4$).

Mặt khác, xét kết quả của hai bạn:
- $42 : 4 = 10$ dư $2 \implies 42 \ \not\vdots \ 4.$
- $(-26) : 4 = -6$ dư $-2 \implies -26 \ \not\vdots \ 4.$

Cả hai số $42$ và $-26$ đều không chia hết cho $4$.
**Kết luận:** Cả hai bạn An và Bình đều tính sai!

---

### Bài toán nâng cao 2 (Tính tổng dãy số có dấu chu kỳ và xét tính chia hết)
Cho biểu thức:
$$P = (1 + 2 - 3 - 4) + (5 + 6 - 7 - 8) + (9 + 10 - 11 - 12) + \dots + (397 + 398 - 399 - 400).$$
1. Tính giá trị của biểu thức $P$.
2. Trong các số $2; 3; 4; 5; 9$, số $P$ chia hết cho những số nào?

**Lời giải:**
1. Quan sát quy luật trong mỗi nhóm gồm $4$ số hạng liên tiếp:
   $$1 + 2 - 3 - 4 = 3 - 7 = -4;$$
   $$5 + 6 - 7 - 8 = 11 - 15 = -4;$$
   $$9 + 10 - 11 - 12 = 19 - 23 = -4;$$
   $$\dots$$
   $$397 + 398 - 399 - 400 = 795 - 799 = -4.$$

Tổng cộng có $400$ số hạng, được chia thành:
$$400 : 4 = 100\text{ (nhóm)}.$$
Do đó giá trị của $P$ là:
$$P = (-4) \cdot 100 = -400.$$

2. Phân tích số $-400$ ra thừa số:
   $$|-400| = 400 = 2^4 \cdot 5^2.$$
   - Vì $400$ chia hết cho $2; 4; 5$ nên $P = -400$ **chia hết cho $2; 4$ và $5$**.
   - Tổng các chữ số của $400$ là $4 + 0 + 0 = 4$, không chia hết cho $3$ và không chia hết cho $9$.
   Do đó $P$ **không chia hết cho $3$ và không chia hết cho $9$**.

---

### Bài toán nâng cao 3 (Tìm số nguyên $n$ để phân thức có giá trị nguyên)
Tìm tất cả các số nguyên $n$ để:
1. $(n + 7) \ \vdots \ (n - 2);$
2. $(2n + 9) \ \vdots \ (n + 1).$

**Phương pháp tổng quát:**
Tách tử số theo mẫu số sao cho phần biến $n$ bị triệt tiêu, đưa về dạng:
$$A(n) = Q + \frac{k}{B(n)}$$
Để biểu thức chia hết thì $k \ \vdots \ B(n)$, nghĩa là $B(n) \in \text{Ư}(k)$.

**Lời giải:**
1. Ta biến đổi tử số xuất hiện nhân tử $n - 2$:
   $$n + 7 = (n - 2) + 9.$$
   Vì $(n - 2) \ \vdots \ (n - 2)$ nên để $(n + 7) \ \vdots \ (n - 2)$ thì:
   $$9 \ \vdots \ (n - 2) \implies (n - 2) \in \text{Ư}(9).$$
   Ta có $\text{Ư}(9) = \{\pm 1; \pm 3; \pm 9\}$.
   Lập bảng tìm $n$:

| $n - 2$ | $1$ | $-1$ | $3$ | $-3$ | $9$ | $-9$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $n = (n-2) + 2$ | $3$ | $1$ | $5$ | $-1$ | $11$ | $-7$ |

Vậy các giá trị $n$ thỏa mãn là:
$$n \in \{-7; -1; 1; 3; 5; 11\}.$$

2. Ta biến đổi $(2n + 9)$ theo $(n + 1)$:
   $$2n + 9 = 2(n + 1) + 7.$$
   Vì $2(n + 1) \ \vdots \ (n + 1)$ nên để $(2n + 9) \ \vdots \ (n + 1)$ thì:
   $$7 \ \vdots \ (n + 1) \implies (n + 1) \in \text{Ư}(7) = \{\pm 1; \pm 7\}.$$
   Lập bảng:

| $n + 1$ | $1$ | $-1$ | $7$ | $-7$ |
| :---: | :---: | :---: | :---: | :---: |
| $n = (n+1) - 1$ | $0$ | $-2$ | $6$ | $-8$ |

Vậy $n \in \{-8; -2; 0; 6\}$.

---

### Bài toán nâng cao 4 (Dạng nâng cao: Hệ số của mẫu lớn hơn 1)
Tìm tất cả các số nguyên $n$ sao cho:
$$(n + 4) \ \vdots \ (2n - 1).$$

**Phương pháp:**
Vì hệ số trước $n$ ở số chia là $2$, ta nhân số bị chia với $2$:
Nếu $(n + 4) \ \vdots \ (2n - 1) \implies 2(n + 4) \ \vdots \ (2n - 1)$.
Sau đó tách $2n + 8 = (2n - 1) + 9$.

> [!CAUTION]
> **Lưu ý sống còn:** Khi nhân thêm hệ số $2$, ta chỉ có chiều suy ra $(\implies)$, không phải tương đương. Do đó sau khi tìm được $n$, **bắt buộc phải thử lại vào biểu thức ban đầu** để loại nghiệm ngoại lai!

**Lời giải:**
Giả sử $(n + 4) \ \vdots \ (2n - 1)$.
Khi đó:
$$2(n + 4) \ \vdots \ (2n - 1)$$
$$(2n + 8) \ \vdots \ (2n - 1)$$
$$[(2n - 1) + 9] \ \vdots \ (2n - 1).$$
Vì $(2n - 1) \ \vdots \ (2n - 1)$ nên suy ra:
$$9 \ \vdots \ (2n - 1) \implies (2n - 1) \in \text{Ư}(9) = \{\pm 1; \pm 3; \pm 9\}.$$

Lập bảng tính giá trị của $2n$ và $n$:

| $2n - 1$ | $1$ | $-1$ | $3$ | $-3$ | $9$ | $-9$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $2n$ | $2$ | $0$ | $4$ | $-2$ | $10$ | $-8$ |
| $n$ | $1$ | $0$ | $2$ | $-1$ | $5$ | $-4$ |

**Thử lại vào quan hệ ban đầu $(n + 4) \ \vdots \ (2n - 1)$:**
- Với $n = 1$: $1 + 4 = 5$; $2(1) - 1 = 1$. Ta có $5 \ \vdots \ 1$ (thỏa mãn).
- Với $n = 0$: $0 + 4 = 4$; $2(0) - 1 = -1$. Ta có $4 \ \vdots \ (-1)$ (thỏa mãn).
- Với $n = 2$: $2 + 4 = 6$; $2(2) - 1 = 3$. Ta có $6 \ \vdots \ 3$ (thỏa mãn).
- Với $n = -1$: $-1 + 4 = 3$; $2(-1) - 1 = -3$. Ta có $3 \ \vdots \ (-3)$ (thỏa mãn).
- Với $n = 5$: $5 + 4 = 9$; $2(5) - 1 = 9$. Ta có $9 \ \vdots \ 9$ (thỏa mãn).
- Với $n = -4$: $-4 + 4 = 0$; $2(-4) - 1 = -9$. Ta có $0 \ \vdots \ (-9)$ (thỏa mãn).

Vậy cả $6$ giá trị đều thỏa mãn:
$$n \in \{-4; -1; 0; 1; 2; 5\}.$$

---

### Bài toán nâng cao 5 (Chứng minh đẳng thức chia hết tổng quát)
Cho bốn số nguyên $a, b, c, d$ thỏa mãn:
$$(ab + cd) \ \vdots \ (a - c).$$
Chứng minh rằng $(ad + bc)$ cũng chia hết cho $(a - c)$.

**Lời giải:**
Xét hiệu giữa hai biểu thức:
$$H = (ab + cd) - (ad + bc).$$
Ta nhóm các hạng tử một cách khéo léo để làm xuất hiện nhân tử chung $(a - c)$:
$$H = (ab - ad) - (bc - cd)$$
$$H = a(b - d) - c(b - d)$$
$$H = (a - c)(b - d).$$

Quan sát vế phải, ta thấy rõ ràng tích $(a - c)(b - d)$ luôn chia hết cho $(a - c)$ với mọi số nguyên $b, d$:
$$[(a - c)(b - d)] \ \vdots \ (a - c) \implies H \ \vdots \ (a - c).$$

Mặt khác, theo giả thiết đề bài:
$$(ab + cd) \ \vdots \ (a - c).$$
Mà ta biết rằng: Nếu một số bị trừ chia hết cho $(a - c)$ và hiệu chia hết cho $(a - c)$ thì số trừ cũng phải chia hết cho $(a - c)$:
$$ad + bc = (ab + cd) - H.$$
Vì cả $(ab + cd)$ và $H$ đều chia hết cho $(a - c)$ nên hiệu của chúng cũng chia hết cho $(a - c)$:
$$(ad + bc) \ \vdots \ (a - c).$$
Điều phải chứng minh. $\blacksquare$

---

## G. Lời kết và tóm tắt bài học

Qua Bài 17, chúng ta đã chinh phục hoàn chỉnh bức tranh số học về số nguyên $\mathbb{Z}$. Hãy ghi nhớ những điểm cốt lõi sau:
1. **Dấu của thương:** Hoàn toàn giống dấu của tích (cùng dấu ra dương, khác dấu ra âm).
2. **Ước của số nguyên:** Luôn có cả phần âm và phần dương đối xứng nhau ($\pm$).
3. **Số 0 và số 1:** Số $0$ là bội của mọi số nguyên khác $0$; $1$ và $-1$ là ước của mọi số nguyên.
4. **Phương pháp tìm $n$ nguyên:** Luôn đưa về bài toán tìm ước của một số nguyên không đổi, và nhớ thử lại khi có biến đổi nhân thêm hệ số!
