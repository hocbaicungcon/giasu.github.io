---
title: 'Toán 6 Bài 8: Quan hệ chia hết và tính chất - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 8 Quan hệ chia hết và tính chất: khái niệm ước và bội, tính chất chia hết của tổng, hiệu, tích, các bài toán thực tế và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Tính chia hết
  - Quan hệ chia hết
  - Ước và bội
  - Kết nối tri thức
grade: 6
---

# Bài 8. Quan hệ chia hết và tính chất

Chào mừng các em bước sang **Chương II: Tính chia hết trong tập hợp các số tự nhiên**. Khái niệm chia hết là một trong những viên gạch nền móng quan trọng nhất của Số học. Bài học này sẽ giúp các em làm quen với khái niệm ước, bội, các tính chất chia hết của tổng, hiệu, tích và phương pháp giải quyết các bài toán chia nhóm thực tế.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy hoàn thành các câu hỏi khởi động sau để gợi nhớ lại bản chất của phép chia hết và phép chia có dư:

```quiz
type: choice
question: 'Trong các phép chia sau, phép chia nào là phép chia hết?'
options:
  - '$60 : 7$'
  - '$54 : 6$'
  - '$38 : 5$'
  - '$45 : 8$'
answer: 2
explanation: 'Ta có $54 : 6 = 9$ (số dư bằng 0) nên đây là phép chia hết. Còn $60 : 7 = 8$ dư 4; $38 : 5 = 7$ dư 3; $45 : 8 = 5$ dư 5.'
```

```quiz
type: choice
question: 'Số nào sau đây vừa là số tự nhiên nhỏ hơn 35 vừa chia hết cho 6?'
options:
  - '20'
  - '24'
  - '28'
  - '32'
answer: 2
explanation: 'Ta có $24 < 35$ và $24 : 6 = 4$ (chia hết). Các số khác không chia hết cho 6.'
```

```quiz
type: choice
question: 'Tìm số tự nhiên thích hợp điền vào ô vuông: $72 = 9 \cdot \square$?'
options:
  - '6'
  - '7'
  - '8'
  - '9'
answer: 3
explanation: 'Vì $72 : 9 = 8$ nên số cần điền là 8.'
```

```quiz
type: choice
question: 'Thầy giáo có 35 quyển vở. Nếu chia đều cho 7 bạn thì mỗi bạn được bao nhiêu quyển vở?'
options:
  - '4 quyển'
  - '5 quyển'
  - '6 quyển'
  - 'Không chia đều được'
answer: 2
explanation: 'Vì $35 : 7 = 5$ (không dư) nên mỗi bạn nhận được đúng 5 quyển vở.'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Đặt tính rồi cho biết:
a) $54 : 6 = 9$ (phép chia hết).
b) $60 : 7 = 8$ dư $4$ (vì $7 \cdot 8 = 56$, dư $4$).
c) $96 : 12 = 8$ (phép chia hết).

**Câu 2.** Năm số tự nhiên nhỏ hơn $35$ mà mỗi số đều chia hết cho $6$ có thể chọn là: $0; 6; 12; 18; 24$ (hoặc $30$).

**Câu 3.**
a) $72 = 9 \cdot 8.$
b) $115 = 8 \cdot 14 + 3$ (thương là $14$, số dư $3 < 8$).

**Câu 4.**
- $81$ chia hết cho $9$ vì $81 : 9 = 9$ (số dư bằng $0$).
- $81$ không chia hết cho $5$ vì $81 : 5 = 16$ dư $1.$

**Câu 5.**
- Nếu chia cho $7$ bạn: Mỗi bạn được $35 : 7 = 5$ quyển vở.
- Nếu chia cho $6$ bạn: Ta có $35 : 6 = 5$ dư $5$ nên không chia đều được (còn thừa $5$ quyển vở).

</details>

---

## A. Lý thuyết trọng tâm

### 1. Quan hệ chia hết. Ước và bội

> **Định nghĩa:** Cho hai số tự nhiên $a$ và $b$ với $b \neq 0.$
> - Nếu có số tự nhiên $k$ sao cho $a = k \cdot b,$ thì ta nói **$a$ chia hết cho $b$**, kí hiệu là:
>   $$a\ \vdots\ b.$$
> - Nếu $a$ không chia hết cho $b,$ ta kí hiệu là:
>   $$a \not\vdots\ b.$$
>
> Khi $a\ \vdots\ b,$ ta nói **$b$ là ước của $a$**, còn **$a$ là bội của $b$**.

**Kí hiệu tập hợp:**
- $\text{Ư}(a)$ là tập hợp các ước của $a.$
- $\text{B}(b)$ là tập hợp các bội của $b.$

**Cách tìm ước và bội:**
- **Tìm ước của $a$ ($a > 1$):** Lần lượt chia $a$ cho các số tự nhiên từ $1$ đến $a.$ Phép chia nào hết thì số chia đó chính là một ước của $a.$
- **Tìm bội của $b$ ($b \neq 0$):** Lần lượt nhân $b$ với $0; 1; 2; 3; 4; \dots$ Kết quả nhận được chính là các bội của $b$:
  $$\text{B}(b) = \{0; b; 2b; 3b; 4b; \dots\}.$$

**Ví dụ 1:**
a) Tìm tập hợp $\text{Ư}(18).$
b) Tìm các bội của $5$ nhỏ hơn $35.$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

a) Lần lượt chia $18$ cho các số từ $1$ đến $18,$ các số chia hết là: $1; 2; 3; 6; 9; 18.$
Do đó:
$$\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}.$$

b) Nhân $5$ với $0; 1; 2; 3; 4; 5; 6; 7; \dots$ ta được: $0; 5; 10; 15; 20; 25; 30; 35; \dots$
Các bội của $5$ nhỏ hơn $35$ là:
$$\{0; 5; 10; 15; 20; 25; 30\}.$$

</details>

---

### 2. Tính chất chia hết của một tổng (hiệu)

Cho các số tự nhiên $a, b, m$ với $m \neq 0$:

> **Tính chất 1 (Tất cả số hạng cùng chia hết):**
> Nếu tất cả các số hạng của tổng đều chia hết cho cùng một số thì tổng đó chia hết cho số đó:
> $$a\ \vdots\ m \text{ và } b\ \vdots\ m \implies (a + b)\ \vdots\ m.$$
> *Mở rộng cho phép trừ ($a \ge b$):*
> $$a\ \vdots\ m \text{ và } b\ \vdots\ m \implies (a - b)\ \vdots\ m.$$

> **Tính chất 2 (Chỉ có một số hạng không chia hết):**
> Nếu chỉ có duy nhất một số hạng của tổng không chia hết cho $m$, còn các số hạng khác đều chia hết cho $m$, thì tổng đó không chia hết cho $m$:
> $$a\ \vdots\ m \text{ và } b \not\vdots\ m \implies (a + b) \not\vdots\ m.$$
> *Mở rộng cho phép trừ ($a \ge b$):*
> $$a\ \vdots\ m \text{ và } b \not\vdots\ m \implies (a - b) \not\vdots\ m.$$

**Ví dụ 2:** Không làm phép tính, hãy xét xem các biểu thức sau có chia hết cho $8$ không:
a) $32 + 48;$
b) $80 - 27.$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

a) Ta có $32\ \vdots\ 8$ (vì $32 = 8 \cdot 4$) và $48\ \vdots\ 8$ (vì $48 = 8 \cdot 6$).
Cả hai số hạng đều chia hết cho $8$ nên theo Tính chất 1:
$$(32 + 48)\ \vdots\ 8.$$

b) Ta có $80\ \vdots\ 8,$ nhưng $27 \not\vdots\ 8$ (vì $27 = 8 \cdot 3 + 3$).
Một số chia hết cho $8$, số còn lại không chia hết cho $8$ nên theo Tính chất 2:
$$(80 - 27) \not\vdots\ 8.$$

</details>

---

### 3. Tính chất chia hết của một tích

> **Tính chất chia hết của một tích:**
> Trong một tích các số tự nhiên, nếu có **ít nhất một thừa số chia hết cho $m$** thì **cả tích đó chia hết cho $m$**:
> $$a\ \vdots\ m \implies (a \cdot b)\ \vdots\ m.$$

**Ví dụ 3:** Xét xem các tích sau có chia hết cho $6$ không:
a) $14 \cdot 18 \cdot 5;$
b) $7 \cdot 25 \cdot 11.$

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

a) Trong tích $14 \cdot 18 \cdot 5$ có thừa số $18\ \vdots\ 6$ nên cả tích:
$$(14 \cdot 18 \cdot 5)\ \vdots\ 6.$$

b) Cả ba thừa số $7; 25; 11$ đều là các số lẻ và không chia hết cho $3,$ không có thừa số nào chia hết cho $6.$ Tích của chúng không chia hết cho $6$:
$$(7 \cdot 25 \cdot 11) \not\vdots\ 6.$$

</details>

---

### 4. Những điều rất dễ nhầm lẫn

> [!WARNING] Các điểm dễ nhầm cần đặc biệt chú ý:
> 1. **Chiều suy luận của tổng chia hết:** Từ $(a + b)\ \vdots\ m$ **KHÔNG suy ra được** $a\ \vdots\ m$ và $b\ \vdots\ m.$
>    *Ví dụ:* $14 \not\vdots\ 5$ và $16 \not\vdots\ 5,$ nhưng tổng $14 + 16 = 30\ \vdots\ 5.$ Từng số hạng không chia hết nhưng tổng vẫn có thể chia hết!
> 2. **Phân biệt ước và bội:** Trong quan hệ $a\ \vdots\ b$, thì $b$ là ước (số nhỏ hơn hoặc bằng), còn $a$ là bội (số lớn hơn hoặc bằng).
>    - Tập hợp các ước $\text{Ư}(a)$ luôn là tập hợp hữu hạn (có số phần tử đếm được).
>    - Tập hợp các bội $\text{B}(b)$ ($b \neq 0$) luôn là tập hợp vô hạn.
> 3. **Số $0$ và số $1$:**
>    - Số $0$ chia hết cho mọi số tự nhiên khác $0$ ($0\ \vdots\ b$ với mọi $b \neq 0$). Do đó $0$ là bội của mọi số tự nhiên khác $0.$
>    - Số $0$ không thể là ước của bất kì số nào (vì không có phép chia cho $0$).
>    - Số $1$ là ước của mọi số tự nhiên.
> 4. **Kí hiệu $\vdots$:** Chú ý đặt đúng chiều: $a\ \vdots\ b$ đọc là "$a$ chia hết cho $b$" (số bị chia đứng trước, số chia đứng sau dấu ba chấm).

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Tìm ước và bội thoả mãn điều kiện cho trước

**Phương pháp giải:**
- **Tìm ước:** Chia lần lượt số đã cho cho $1; 2; 3; \dots$ để liệt kê toàn bộ tập hợp $\text{Ư}(a).$ Sau đó chọn các số thoả mãn điều kiện (lớn hơn, nhỏ hơn,...).
- **Tìm bội:** Nhân số đã cho lần lượt với $0; 1; 2; 3; \dots$ Sau đó chặn khoảng theo điều kiện của đề bài.

#### Luyện tập 1.1
Tìm các số tự nhiên $a, b$ sao cho:
a) $a \in \text{Ư}(24)$ và $a > 6;$
b) $b \in \text{B}(5)$ và $b \le 30.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) Ta có $\text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}.$
Vì $a > 6$ nên $a \in \{8; 12; 24\}.$

b) Ta có $\text{B}(5) = \{0; 5; 10; 15; 20; 25; 30; 35; \dots\}$
Vì $b \le 30$ nên $b \in \{0; 5; 10; 15; 20; 25; 30\}.$

</details>

#### Luyện tập 1.2
Tìm các số tự nhiên $a, b$ sao cho:
a) $a \in \text{Ư}(60)$ và $a < 10;$
b) $b \in \text{B}(8)$ và $15 < b \le 50.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) Ta có $\text{Ư}(60) = \{1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60\}.$
Vì $a < 10$ nên $a \in \{1; 2; 3; 4; 5; 6\}.$

b) Ta có $\text{B}(8) = \{0; 8; 16; 24; 32; 40; 48; 56; \dots\}$
Vì $15 < b \le 50$ nên $b \in \{16; 24; 32; 40; 48\}.$

</details>

#### Luyện tập 1.3
a) Viết tập hợp $\text{Ư}(45).$
b) Viết tập hợp các bội của $7$ nhỏ hơn $55.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) $\text{Ư}(45) = \{1; 3; 5; 9; 15; 45\}.$
b) Các bội của $7$ nhỏ hơn $55$ là: $\{0; 7; 14; 21; 28; 35; 42; 49\}.$

</details>

---

### Dạng 2. Xét tính chia hết của một tổng, một hiệu

**Phương pháp giải:**
- Xét xem từng số hạng có chia hết cho $m$ hay không.
- Nếu tất cả cùng chia hết $\implies$ tổng/hiệu chia hết.
- Nếu chỉ có đúng một số hạng không chia hết $\implies$ tổng/hiệu không chia hết.
- *Lưu ý:* Nếu có từ hai số hạng không chia hết trở lên, hãy thử nhóm chúng lại để kiểm tra tổng riêng của chúng có chia hết hay không.

#### Luyện tập 2.1
Xét xem mỗi tổng (hiệu) sau có chia hết cho $9$ không:
a) $900 + 27;\quad 36 + 1800;\quad 50 + 4 + 450;$
b) $90 - 32;\quad 360 - 72;\quad 265 + 5 - 19.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) 
- $900 + 27$: Vì $900\ \vdots\ 9$ và $27\ \vdots\ 9$ nên $(900 + 27)\ \vdots\ 9.$
- $36 + 1800$: Vì $36\ \vdots\ 9$ và $1800\ \vdots\ 9$ nên $(36 + 1800)\ \vdots\ 9.$
- $50 + 4 + 450$: Nhóm $50 + 4 = 54\ \vdots\ 9$ và $450\ \vdots\ 9$ nên $(50 + 4 + 450)\ \vdots\ 9.$

b) 
- $90 - 32$: Vì $90\ \vdots\ 9$ nhưng $32 \not\vdots\ 9$ nên $(90 - 32) \not\vdots\ 9.$
- $360 - 72$: Vì $360\ \vdots\ 9$ và $72\ \vdots\ 9$ nên $(360 - 72)\ \vdots\ 9.$
- $265 + 5 - 19$: Nhóm $265 + 5 = 270\ \vdots\ 9,$ nhưng $19 \not\vdots\ 9$ nên $(265 + 5 - 19) \not\vdots\ 9.$

</details>

#### Luyện tập 2.2
Xét xem mỗi tổng (hiệu) sau có chia hết cho $6$ không:
a) $600 + 30;\quad 25 + 1200;\quad 38 + 4 + 240;$
b) $60 - 17;\quad 300 - 48;\quad 172 + 8 - 14.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) 
- $600 + 30$: Cả $600$ và $30$ đều chia hết cho $6$ nên $(600 + 30)\ \vdots\ 6.$
- $25 + 1200$: Vì $1200\ \vdots\ 6$ nhưng $25 \not\vdots\ 6$ nên $(25 + 1200) \not\vdots\ 6.$
- $38 + 4 + 240$: Nhóm $38 + 4 = 42\ \vdots\ 6$ và $240\ \vdots\ 6$ nên $(38 + 4 + 240)\ \vdots\ 6.$

b) 
- $60 - 17$: Vì $60\ \vdots\ 6$ nhưng $17 \not\vdots\ 6$ nên $(60 - 17) \not\vdots\ 6.$
- $300 - 48$: Cả $300$ và $48$ đều chia hết cho $6$ nên $(300 - 48)\ \vdots\ 6.$
- $172 + 8 - 14$: Nhóm $172 + 8 = 180\ \vdots\ 6,$ nhưng $14 \not\vdots\ 6$ nên biểu thức không chia hết cho $6.$

</details>

#### Luyện tập 2.3
Cho biểu thức $A = 28 + 49 + x$ với $x \in \mathbb{N}.$ Tìm $x \in \{21; 35; 40; 14; 52\}$ để:
a) $A$ chia hết cho $7;$
b) $A$ không chia hết cho $7.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

Ta có $28\ \vdots\ 7$ và $49\ \vdots\ 7$ nên $28 + 49 = 77\ \vdots\ 7.$
Do đó, tính chia hết cho $7$ của $A$ phụ thuộc hoàn toàn vào $x$:
- $A\ \vdots\ 7 \iff x\ \vdots\ 7.$
- $A \not\vdots\ 7 \iff x \not\vdots\ 7.$

a) Các số chia hết cho $7$ trong tập hợp đã cho là: $x \in \{21; 35; 14\}.$
b) Các số không chia hết cho $7$ trong tập hợp đã cho là: $x \in \{40; 52\}.$

</details>

---

### Dạng 3. Xét tính chia hết của một tích

**Phương pháp giải:**
- Nếu trong tích có ít nhất một thừa số chia hết cho $m$ thì kết luận ngay tích chia hết cho $m.$
- Nếu không có thừa số nào chia hết cho $m,$ thử ghép tích của hai hay nhiều thừa số lại với nhau xem kết quả có chia hết cho $m$ hay không.

#### Luyện tập 3.1
Các tích sau có chia hết cho $8$ không? Vì sao?
a) $16 \cdot 19 \cdot 7;$
b) $40 \cdot 17 \cdot 13;$
c) $88 \cdot 35 \cdot 23;$
d) $4 \cdot 29 \cdot 6 \cdot 5.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Trong tích có thừa số $16\ \vdots\ 8$ nên $(16 \cdot 19 \cdot 7)\ \vdots\ 8.$
b) Trong tích có thừa số $40\ \vdots\ 8$ nên $(40 \cdot 17 \cdot 13)\ \vdots\ 8.$
c) Trong tích có thừa số $88\ \vdots\ 8$ nên $(88 \cdot 35 \cdot 23)\ \vdots\ 8.$
d) Không thừa số nào chia hết cho $8,$ nhưng ghép $4 \cdot 6 = 24\ \vdots\ 8$ nên $(4 \cdot 29 \cdot 6 \cdot 5)\ \vdots\ 8.$

</details>

#### Luyện tập 3.2
Các tích sau có chia hết cho $6$ không? Vì sao?
a) $24 \cdot 31 \cdot 17;$
b) $18 \cdot 53 \cdot 47;$
c) $132 \cdot 25 \cdot 19;$
d) $15 \cdot 77 \cdot 2 \cdot 11.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) Vì $24\ \vdots\ 6$ nên $(24 \cdot 31 \cdot 17)\ \vdots\ 6.$
b) Vì $18\ \vdots\ 6$ nên $(18 \cdot 53 \cdot 47)\ \vdots\ 6.$
c) Vì $132 = 6 \cdot 22\ \vdots\ 6$ nên tích chia hết cho $6.$
d) Ghép $15 \cdot 2 = 30\ \vdots\ 6$ nên $(15 \cdot 77 \cdot 2 \cdot 11)\ \vdots\ 6.$

</details>

#### Luyện tập 3.3
Tích $A = 2 \cdot 3 \cdot 4 \cdots 12 \cdot 13$ (tích các số tự nhiên liên tiếp từ $2$ đến $13$) có chia hết cho $100$ không?

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

Ta có $100 = 4 \cdot 25.$
- Trong tích $A$ có thừa số $4\ \vdots\ 4.$
- Trong tích $A$ có hai thừa số $5$ và $10,$ mà $5 \cdot 10 = 50 = 25 \cdot 2\ \vdots\ 25.$
Do đó, tích $A$ chứa cả thừa số chia hết cho $4$ và tích chia hết cho $25.$
Vì vậy $A\ \vdots\ 100.$

</details>

---

### Dạng 4. Xét tính chia hết của tổng (hiệu) chứa tích

**Phương pháp giải:**
- Xét tính chia hết của từng cụm tích và từng số hạng riêng lẻ.
- Sử dụng Tính chất 1 và Tính chất 2 để kết luận.

#### Luyện tập 4.1
Các biểu thức sau có chia hết cho $8$ không? Vì sao?
a) $1 \cdot 3 \cdot 5 \cdot 8 \cdot 11 + 320;$
b) $14 \cdot 16 \cdot 18 + 40 + 80;$
c) $21 \cdot 24 \cdot 27 + 45.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

a) Tích $1 \cdot 3 \cdot 5 \cdot 8 \cdot 11$ có thừa số $8\ \vdots\ 8$ và $320\ \vdots\ 8$ nên cả tổng chia hết cho $8.$
b) Tích $14 \cdot 16 \cdot 18$ có $16\ \vdots\ 8;$ $40\ \vdots\ 8;$ $80\ \vdots\ 8$ nên cả tổng chia hết cho $8.$
c) Tích $21 \cdot 24 \cdot 27$ có $24\ \vdots\ 8,$ nhưng $45 \not\vdots\ 8$ nên tổng không chia hết cho $8.$

</details>

#### Luyện tập 4.2
Các biểu thức sau có chia hết cho $7$ không? Vì sao?
a) $2 \cdot 4 \cdot 6 \cdot 7 \cdot 10 + 280;$
b) $2 \cdot 7 \cdot 39 + 70 + 63;$
c) $14 \cdot 5 \cdot 33 + 52.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

a) Tích đầu có $7\ \vdots\ 7$ và $280\ \vdots\ 7$ nên tổng chia hết cho $7.$
b) Tích đầu có $7\ \vdots\ 7;$ $70\ \vdots\ 7;$ $63\ \vdots\ 7$ nên cả tổng chia hết cho $7.$
c) Tích đầu có $14\ \vdots\ 7,$ nhưng $52 \not\vdots\ 7$ nên tổng không chia hết cho $7.$

</details>

#### Luyện tập 4.3
Số $A = 18 \cdot 25 \cdot 7 + 54 - 36$ có chia hết cho $9$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

Xét tích $18 \cdot 25 \cdot 7$: có thừa số $18\ \vdots\ 9$ nên $18 \cdot 25 \cdot 7\ \vdots\ 9.$
Mặt khác, $54\ \vdots\ 9$ và $36\ \vdots\ 9.$
Tất cả các số hạng trong biểu thức đều chia hết cho $9$ nên:
$$A\ \vdots\ 9.$$

</details>

---

### Dạng 5. Bài toán thực tế về chia hết

**Phương pháp giải:**
- Nhận biết các từ khóa: *"chia đều", "xếp thành các phần/nhóm bằng nhau", "không thừa bạn/vật nào"* $\implies$ Số lượng mỗi nhóm hoặc số nhóm phải là **ước** của tổng số đối tượng ban đầu.
- Liệt kê tập hợp ước rồi dùng điều kiện của bài toán để chọn các giá trị thích hợp.

#### Luyện tập 5.1
Một đội tình nguyện viên gồm $72$ người tham gia chiến dịch mùa hè xanh. Ban chỉ huy muốn chia $72$ người thành các nhóm có số thành viên bằng nhau, mỗi nhóm từ $6$ đến $12$ người. Hỏi có bao nhiêu cách chia nhóm?

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Số người trong mỗi nhóm phải là ước của $72.$
Ta có:
$$\text{Ư}(72) = \{1; 2; 3; 4; 6; 8; 9; 12; 18; 24; 36; 72\}.$$
Vì mỗi nhóm có từ $6$ đến $12$ người nên số người mỗi nhóm có thể là: $6; 8; 9; 12.$
Vậy có **$4$ cách chia nhóm**:
1. Mỗi nhóm $6$ người ($12$ nhóm).
2. Mỗi nhóm $8$ người ($9$ nhóm).
3. Mỗi nhóm $9$ người ($8$ nhóm).
4. Mỗi nhóm $12$ người ($6$ nhóm).

</details>

#### Luyện tập 5.2
Có $54$ học sinh tham gia sinh hoạt câu lạc bộ Toán học. Thầy phụ trách muốn chia đều các bạn thành các tổ, mỗi tổ có từ $5$ đến $10$ học sinh. Hỏi có bao nhiêu cách chia tổ?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Số học sinh trong mỗi tổ phải là ước của $54.$
Ta có:
$$\text{Ư}(54) = \{1; 2; 3; 6; 9; 18; 27; 54\}.$$
Các ước nằm trong khoảng từ $5$ đến $10$ là: $6; 9.$
Vậy có **$2$ cách chia tổ**: tổ $6$ bạn ($9$ tổ) hoặc tổ $9$ bạn ($6$ tổ).

</details>

#### Luyện tập 5.3
Cô giáo chuẩn bị $48$ chiếc bút chì màu để làm phần thưởng, muốn chia đều vào các túi quà sao cho mỗi túi có từ $5$ đến $15$ chiếc bút. Hỏi có bao nhiêu cách chia?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

Số bút trong mỗi túi quà là ước của $48.$
Ta có:
$$\text{Ư}(48) = \{1; 2; 3; 4; 6; 8; 12; 16; 24; 48\}.$$
Các ước nằm trong khoảng từ $5$ đến $15$ là: $6; 8; 12.$
Vậy có **$3$ cách chia**: mỗi túi $6$ chiếc, $8$ chiếc hoặc $12$ chiếc bút.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Tìm các số tự nhiên $a, b$ sao cho:
a) $a \in \text{Ư}(30)$ và $a > 5;$
b) $b \in \text{B}(6)$ và $b \le 42.$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) $\text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}.$ Vì $a > 5$ nên $a \in \{6; 10; 15; 30\}.$
b) $\text{B}(6) = \{0; 6; 12; 18; 24; 30; 36; 42; 48; \dots\}$ Vì $b \le 42$ nên $b \in \{0; 6; 12; 18; 24; 30; 36; 42\}.$

</details>

### Bài 2
a) Viết tập hợp $\text{Ư}(42).$
b) Viết tập hợp các bội của $7$ nhỏ hơn $50.$

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

a) $\text{Ư}(42) = \{1; 2; 3; 6; 7; 14; 21; 42\}.$
b) Các bội của $7$ nhỏ hơn $50$ là: $\{0; 7; 14; 21; 28; 35; 42; 49\}.$

</details>

### Bài 3
Xét xem mỗi tổng (hiệu) sau có chia hết cho $12$ không:
a) $24 + 36;\quad 120 + 48;\quad 30 + 6 + 240;$
b) $1200 - 25;\quad 360 - 19;\quad 115 + 5 - 14.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) 
- $24 + 36$: Cả $24$ và $36$ đều chia hết cho $12$ nên tổng chia hết cho $12.$
- $120 + 48$: Cả hai số đều chia hết cho $12$ nên tổng chia hết cho $12.$
- $30 + 6 + 240$: Nhóm $30 + 6 = 36\ \vdots\ 12$ và $240\ \vdots\ 12$ nên tổng chia hết cho $12.$

b) 
- $1200 - 25$: Vì $1200\ \vdots\ 12$ nhưng $25 \not\vdots\ 12$ nên hiệu không chia hết cho $12.$
- $360 - 19$: Vì $360\ \vdots\ 12$ nhưng $19 \not\vdots\ 12$ nên hiệu không chia hết cho $12.$
- $115 + 5 - 14$: Nhóm $115 + 5 = 120\ \vdots\ 12,$ còn $14 \not\vdots\ 12$ nên không chia hết cho $12.$

</details>

### Bài 4
Cho biểu thức $A = 35 + 56 + x$ với $x \in \mathbb{N}.$ Tìm điều kiện của $x$ để:
a) $A$ chia hết cho $7;$
b) $A$ không chia hết cho $7.$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

Ta có $35\ \vdots\ 7$ và $56\ \vdots\ 7$ nên $35 + 56 = 91\ \vdots\ 7.$
a) Để $A\ \vdots\ 7$ thì $x$ phải chia hết cho $7,$ tức là $x$ là bội của $7$: $x \in \{0; 7; 14; 21; \dots\}$
b) Để $A \not\vdots\ 7$ thì $x$ không chia hết cho $7,$ tức là $x$ không phải là bội của $7.$

</details>

### Bài 5
Các tích sau có chia hết cho $9$ không? Vì sao?
a) $45 \cdot 8 \cdot 17;$
b) $27 \cdot 14 \cdot 31;$
c) $3 \cdot 25 \cdot 3 \cdot 41;$
d) $18 \cdot 23 \cdot 5 \cdot 11.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) Vì $45\ \vdots\ 9$ nên cả tích chia hết cho $9.$
b) Vì $27\ \vdots\ 9$ nên cả tích chia hết cho $9.$
c) Ghép $3 \cdot 3 = 9\ \vdots\ 9$ nên cả tích chia hết cho $9.$
d) Vì $18\ \vdots\ 9$ nên cả tích chia hết cho $9.$

</details>

### Bài 6
Các tổng sau có chia hết cho $10$ không? Vì sao?
a) $3 \cdot 5 \cdot 7 \cdot 9 \cdot 10 + 420;$
b) $1 \cdot 3 \cdot 4 \cdot 5 \cdot 6 + 180;$
c) $2 \cdot 5 \cdot 7 \cdot 11 + 35 + 45.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

a) Tích đầu có $10\ \vdots\ 10$ và $420\ \vdots\ 10$ nên cả tổng chia hết cho $10.$
b) Tích đầu có $4 \cdot 5 = 20\ \vdots\ 10$ và $180\ \vdots\ 10$ nên cả tổng chia hết cho $10.$
c) Tích đầu có $2 \cdot 5 = 10\ \vdots\ 10;$ nhóm $35 + 45 = 80\ \vdots\ 10$ nên cả tổng chia hết cho $10.$

</details>

### Bài 7
Bạn Nam nói: *"Nếu một tổng $(a + b)$ chia hết cho $m$ thì mỗi số hạng $a$ và $b$ đều phải chia hết cho $m$."* Theo em, bạn Nam nói đúng hay sai? Hãy nêu một ví dụ để giải thích.

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

Bạn Nam nói **sai**.
Từ $(a + b)\ \vdots\ m$ không suy ra được từng số hạng phải chia hết cho $m.$
*Ví dụ:* Với $m = 10,$ ta lấy $a = 14$ và $b = 16.$
Cả hai số $14 \not\vdots\ 10$ và $16 \not\vdots\ 10,$ nhưng tổng $14 + 16 = 30\ \vdots\ 10.$

</details>

### Bài 8
Tích $B = 3 \cdot 6 \cdot 9 \cdot 12 \cdot 15 \cdot 18$ có chia hết cho $81$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

Ta có $81 = 3^4.$
Đếm các thừa số $3$ trong tích $B$:
- $3 = 3^1$
- $6 = 2 \cdot 3$ (chứa 1 thừa số 3)
- $9 = 3^2$ (chứa 2 thừa số 3)
- $12 = 4 \cdot 3$ (chứa 1 thừa số 3)
- $15 = 5 \cdot 3$ (chứa 1 thừa số 3)
- $18 = 2 \cdot 3^2$ (chứa 2 thừa số 3)
Tổng số thừa số $3$ có trong tích $B$ là: $1 + 1 + 2 + 1 + 1 + 2 = 8 \ge 4.$
Do đó tích $B$ chia hết cho $3^4 = 81.$

</details>

### Bài 9
Có bao nhiêu cách chia đều $42$ học sinh thành các nhóm sao cho mỗi nhóm có từ $5$ đến $8$ học sinh?

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

Số học sinh trong mỗi nhóm phải là ước của $42.$
Ta có: $\text{Ư}(42) = \{1; 2; 3; 6; 7; 14; 21; 42\}.$
Các ước thỏa mãn từ $5$ đến $8$ là: $6$ và $7.$
Vậy có **$2$ cách chia**:
- Chia thành các nhóm $6$ học sinh ($7$ nhóm).
- Chia thành các nhóm $7$ học sinh ($6$ nhóm).

</details>

### Bài 10
Người ta muốn xếp $84$ quyển sách thành các ngăn tủ đều nhau, mỗi ngăn có từ $10$ đến $25$ quyển. Hỏi có bao nhiêu cách xếp?

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Số quyển sách trong mỗi ngăn là ước của $84.$
Ta có: $\text{Ư}(84) = \{1; 2; 3; 4; 6; 7; 12; 14; 21; 28; 42; 84\}.$
Các ước thỏa mãn từ $10$ đến $25$ là: $12; 14; 21.$
Vậy có **$3$ cách xếp**:
- Ngăn $12$ quyển ($7$ ngăn).
- Ngăn $14$ quyển ($6$ ngăn).
- Ngăn $21$ quyển ($4$ ngăn).

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Hãy tự đánh giá kiến thức đã học qua các câu hỏi trắc nghiệm tương tác:

```quiz
type: choice
question: 'Khẳng định nào sau đây là đúng?'
options:
  - '$0 \not\vdots\ 9$'
  - '$20\ \vdots\ 6$'
  - '$24\ \vdots\ 8$'
  - '6 là bội của 18'
answer: 3
explanation: 'Vì $24 = 8 \cdot 3$ nên $24\ \vdots\ 8.$ Còn $0$ chia hết cho 9; $20 : 6$ có dư; và 6 là ước của 18 chứ không phải bội.'
```

```quiz
type: choice
question: 'Nếu $a\ \vdots\ 7$ và $b \not\vdots\ 7$ thì tổng $(a + b)$:'
options:
  - 'Luôn chia hết cho 7'
  - 'Không chia hết cho 7'
  - 'Bằng 0'
  - 'Là số chẵn'
answer: 2
explanation: 'Theo Tính chất 2: Một số chia hết cho 7, số kia không chia hết cho 7 thì tổng không chia hết cho 7.'
```

```quiz
type: choice
question: 'Tập hợp các ước của 30 có bao nhiêu phần tử?'
options:
  - '6'
  - '7'
  - '8'
  - '10'
answer: 3
explanation: '$\text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}$ gồm đúng 8 phần tử.'
```

```quiz
type: choice
question: 'Trong các tổng sau, tổng nào chia hết cho 9?'
options:
  - '$54 + 90$'
  - '$63 + 17$'
  - '$27 + 25$'
  - '$81 + 10$'
answer: 1
explanation: 'Vì $54\ \vdots\ 9$ và $90\ \vdots\ 9$ nên $(54 + 90)\ \vdots\ 9.$'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.**
a) $\text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}.$
b) Ba bội của $7$ nhỏ hơn $45$: chẳng hạn $7; 14; 21$ (hoặc $0; 28; 35; 42$).

**Câu 2.**
a) $\text{Ư}(36) = \{1; 2; 3; 4; 6; 9; 12; 18; 36\}.$ Các ước lớn hơn $6$ là: $9; 12; 18; 36.$
b) $\text{B}(9) = \{0; 9; 18; 27; 36; 45; 54; \dots\}$ Các bội không vượt quá $45$ là: $0; 9; 18; 27; 36; 45.$

**Câu 3.**
a) $54\ \vdots\ 9$ và $90\ \vdots\ 9 \implies (54 + 90)\ \vdots\ 9.$
b) $63\ \vdots\ 9$ nhưng $17 \not\vdots\ 9 \implies (63 + 17) \not\vdots\ 9.$
c) $99\ \vdots\ 9$ và $27\ \vdots\ 9 \implies (99 - 27)\ \vdots\ 9.$

**Câu 4.**
Ta có $42\ \vdots\ 6$ và $66\ \vdots\ 6$ nên $42 + 66 = 108\ \vdots\ 6.$
a) Để $A\ \vdots\ 6 \implies x\ \vdots\ 6,$ do đó $x \in \{18; 30; 48\}.$
b) Để $A \not\vdots\ 6 \implies x \not\vdots\ 6,$ do đó $x \in \{25; 17\}.$

**Câu 5.**
- Tích $35 \cdot 17 \cdot 8$ có thừa số $35\ \vdots\ 7$ nên tích chia hết cho $7.$
- Tích $9 \cdot 25 \cdot 13$ gồm toàn số lẻ nên là một số lẻ, do đó không chia hết cho $2.$

**Câu 6.**
Tích $3 \cdot 5 \cdot 7 = 105 \not\vdots\ 9$ (vì $105 = 9 \cdot 11 + 6$), trong khi $27\ \vdots\ 9.$
Một số hạng không chia hết cho $9$, số hạng còn lại chia hết cho $9$ nên $A \not\vdots\ 9.$

**Câu 7.**
Số học sinh mỗi nhóm là ước của $45$: $\text{Ư}(45) = \{1; 3; 5; 9; 15; 45\}.$
Các ước từ $6$ đến $10$ chỉ có duy nhất số $9.$
Vậy chỉ có **$1$ cách chia**: chia thành $5$ nhóm, mỗi nhóm $9$ học sinh.

</details>

---

## E. Bài tập nâng cao

> **Phương pháp nhóm số hạng chứng minh chia hết:**
> Đối với tổng các luỹ thừa liên tiếp $A = a + a^2 + a^3 + \dots + a^n$:
> - Nhóm từng cặp $2$ số hạng: $a^k + a^{k+1} = a^k(1 + a).$
> - Nhóm từng bộ $3$ số hạng: $a^k + a^{k+1} + a^{k+2} = a^k(1 + a + a^2).$
> Đặt thừa số chung ra ngoài để xuất hiện thừa số chia hết cho số cần chứng minh.

### Nâng cao 1
Cho biểu thức $B = 3 + 3^2 + 3^3 + 3^4 + \dots + 3^{12}.$ Chứng minh rằng:
a) $B\ \vdots\ 3;$
b) $B\ \vdots\ 4;$
c) $B\ \vdots\ 13.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

a) Mỗi số hạng trong tổng $B$ đều có thừa số $3$ nên mọi số hạng đều chia hết cho $3.$ Do đó $B\ \vdots\ 3.$

b) Tổng $B$ có $12$ số hạng. Nhóm hai số hạng liền nhau thành một cặp:
$$B = (3 + 3^2) + (3^3 + 3^4) + \dots + (3^{11} + 3^{12})$$
$$B = 3(1 + 3) + 3^3(1 + 3) + \dots + 3^{11}(1 + 3)$$
$$B = 3 \cdot 4 + 3^3 \cdot 4 + \dots + 3^{11} \cdot 4$$
$$B = 4 \cdot (3 + 3^3 + \dots + 3^{11}).$$
Vì tích có thừa số $4$ nên $B\ \vdots\ 4.$

c) Nhóm ba số hạng liền nhau thành một nhóm (được đúng $12 : 3 = 4$ nhóm):
$$B = (3 + 3^2 + 3^3) + (3^4 + 3^5 + 3^6) + \dots + (3^{10} + 3^{11} + 3^{12})$$
$$B = 3(1 + 3 + 3^2) + 3^4(1 + 3 + 3^2) + \dots + 3^{10}(1 + 3 + 3^2)$$
Ta có $1 + 3 + 3^2 = 1 + 3 + 9 = 13.$
$$B = 3 \cdot 13 + 3^4 \cdot 13 + \dots + 3^{10} \cdot 13$$
$$B = 13 \cdot (3 + 3^4 + \dots + 3^{10}).$$
Vì tích có thừa số $13$ nên $B\ \vdots\ 13.$

</details>

### Nâng cao 2
Cho biểu thức $C = 5 + 5^2 + 5^3 + 5^4 + \dots + 5^{12}.$ Chứng minh rằng:
a) $C\ \vdots\ 5;$
b) $C\ \vdots\ 6;$
c) $C\ \vdots\ 31.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

a) Mỗi số hạng trong tổng $C$ đều chia hết cho $5$ nên $C\ \vdots\ 5.$

b) Nhóm hai số hạng liền nhau (gồm $6$ nhóm):
$$C = (5 + 5^2) + (5^3 + 5^4) + \dots + (5^{11} + 5^{12})$$
$$C = 5(1 + 5) + 5^3(1 + 5) + \dots + 5^{11}(1 + 5)$$
$$C = 5 \cdot 6 + 5^3 \cdot 6 + \dots + 5^{11} \cdot 6 = 6 \cdot (5 + 5^3 + \dots + 5^{11}).$$
Do đó $C\ \vdots\ 6.$

c) Nhóm ba số hạng liền nhau (gồm $4$ nhóm):
$$C = (5 + 5^2 + 5^3) + (5^4 + 5^5 + 5^6) + \dots + (5^{10} + 5^{11} + 5^{12})$$
$$C = 5(1 + 5 + 5^2) + 5^4(1 + 5 + 5^2) + \dots + 5^{10}(1 + 5 + 5^2)$$
Ta có $1 + 5 + 5^2 = 1 + 5 + 25 = 31.$
$$C = 31 \cdot (5 + 5^4 + \dots + 5^{10}).$$
Do đó $C\ \vdots\ 31.$

</details>

### Nâng cao 3
Cho biểu thức $D = 2 + 2^2 + 2^3 + 2^4 + \dots + 2^{20}.$ Chứng minh rằng:
a) $D\ \vdots\ 2;$
b) $D\ \vdots\ 3;$
c) $D\ \vdots\ 15.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

a) Mọi số hạng trong tổng đều chia hết cho $2$ nên $D\ \vdots\ 2.$

b) Nhóm hai số hạng liền nhau (gồm $10$ nhóm):
$$D = (2 + 2^2) + (2^3 + 2^4) + \dots + (2^{19} + 2^{20})$$
$$D = 2(1 + 2) + 2^3(1 + 2) + \dots + 2^{19}(1 + 2) = 3 \cdot (2 + 2^3 + \dots + 2^{19}).$$
Do đó $D\ \vdots\ 3.$

c) Nhóm bốn số hạng liền nhau (gồm $20 : 4 = 5$ nhóm):
$$D = (2 + 2^2 + 2^3 + 2^4) + \dots + (2^{17} + 2^{18} + 2^{19} + 2^{20})$$
$$D = 2(1 + 2 + 4 + 8) + \dots + 2^{17}(1 + 2 + 4 + 8)$$
Ta có $1 + 2 + 4 + 8 = 15.$
$$D = 15 \cdot (2 + 2^5 + \dots + 2^{17}).$$
Do đó $D\ \vdots\ 15.$

</details>

### Nâng cao 4
Cho $a$ và $d$ là các số tự nhiên khác $0.$ Chứng minh rằng $d = 1$ nếu:
a) $a$ và $3a - 1$ cùng chia hết cho $d;$
b) $a$ và $5a - 1$ cùng chia hết cho $d.$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

a) Vì $a\ \vdots\ d \implies 3a\ \vdots\ d.$
Mặt khác theo giả thiết $3a - 1\ \vdots\ d.$
Lấy hiệu hai số cùng chia hết cho $d$:
$$[3a - (3a - 1)]\ \vdots\ d \implies 1\ \vdots\ d.$$
Vì $d$ là số tự nhiên khác $0$ và $1\ \vdots\ d \implies d = 1.$

b) Vì $a\ \vdots\ d \implies 5a\ \vdots\ d.$
Mặt khác $5a - 1\ \vdots\ d.$
Lấy hiệu hai số:
$$[5a - (5a - 1)]\ \vdots\ d \implies 1\ \vdots\ d \implies d = 1.$$

</details>

### Nâng cao 5
Chứng minh rằng với mọi số tự nhiên $n,$ tích $P = n \cdot (n + 1) \cdot (n + 5)$ luôn chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Khi chia một số tự nhiên $n$ bất kì cho $3,$ số dư chỉ có thể là $0; 1$ hoặc $2.$ Do đó ta xét 3 trường hợp:
- **Trường hợp 1:** $n\ \vdots\ 3$ ($n = 3k,$ với $k \in \mathbb{N}$).
  Khi đó thừa số đầu tiên $n\ \vdots\ 3 \implies P\ \vdots\ 3.$

- **Trường hợp 2:** $n$ chia $3$ dư $1$ ($n = 3k + 1,$ với $k \in \mathbb{N}$).
  Khi đó thừa số thứ ba:
  $$n + 5 = 3k + 1 + 5 = 3k + 6 = 3(k + 2)\ \vdots\ 3 \implies P\ \vdots\ 3.$$

- **Trường hợp 3:** $n$ chia $3$ dư $2$ ($n = 3k + 2,$ với $k \in \mathbb{N}$).
  Khi đó thừa số thứ hai:
  $$n + 1 = 3k + 2 + 1 = 3k + 3 = 3(k + 1)\ \vdots\ 3 \implies P\ \vdots\ 3.$$

Trong cả 3 trường hợp, tích $P$ luôn chứa ít nhất một thừa số chia hết cho $3.$
Vậy $n(n + 1)(n + 5)\ \vdots\ 3$ với mọi số tự nhiên $n.$

</details>
