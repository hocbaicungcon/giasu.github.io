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
  - '$50 : 7$'
  - '$48 : 6$'
  - '$25 : 4$'
  - '$35 : 8$'
answer: 2
explanation: 'Ta có $48 : 6 = 8$ (số dư bằng 0) nên đây là phép chia hết. Còn $50 : 7 = 7$ dư 1; $25 : 4 = 6$ dư 1; $35 : 8 = 4$ dư 3.'
```

```quiz
type: choice
question: 'Số nào sau đây vừa là số tự nhiên nhỏ hơn 25 vừa chia hết cho 4?'
options:
  - '18'
  - '20'
  - '22'
  - '26'
answer: 2
explanation: 'Ta có $20 < 25$ và $20 : 4 = 5$ (chia hết). Các số khác hoặc không chia hết cho 4 hoặc lớn hơn 25.'
```

```quiz
type: choice
question: 'Tìm số tự nhiên thích hợp điền vào ô vuông: $56 = 8 \cdot \square$?'
options:
  - '6'
  - '7'
  - '8'
  - '9'
answer: 2
explanation: 'Vì $56 : 8 = 7$ nên số cần điền là 7.'
```

```quiz
type: choice
question: 'Cô giáo có 24 quyển vở. Nếu chia đều cho 6 bạn thì mỗi bạn được bao nhiêu quyển vở?'
options:
  - '3 quyển'
  - '4 quyển'
  - '5 quyển'
  - 'Không chia đều được'
answer: 2
explanation: 'Vì $24 : 6 = 4$ (không dư) nên mỗi bạn nhận được đúng 4 quyển vở.'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Đặt tính rồi cho biết:
a) $48 : 6 = 8$ (phép chia hết).
b) $50 : 7 = 7$ dư $1$ (vì $7 \cdot 7 = 49$, dư $1$).
c) $84 : 12 = 7$ (phép chia hết).

**Câu 2.** Năm số tự nhiên nhỏ hơn $25$ mà mỗi số đều chia hết cho $4$ có thể chọn là: $0; 4; 8; 12; 16$ (hoặc $20; 24$).

**Câu 3.**
a) $56 = 8 \cdot 7.$
b) $100 = 7 \cdot 14 + 2$ (thương là $14$, số dư $2 < 7$).

**Câu 4.**
- $72$ chia hết cho $9$ vì $72 : 9 = 8$ (số dư bằng $0$).
- $72$ không chia hết cho $5$ vì $72 : 5 = 14$ dư $2.$

**Câu 5.**
- Nếu chia cho $6$ bạn: Mỗi bạn được $24 : 6 = 4$ quyển vở.
- Nếu chia cho $5$ bạn: Ta có $24 : 5 = 4$ dư $4$ nên không chia đều được (còn thừa $4$ quyển vở).

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
a) Tìm tập hợp $\text{Ư}(12).$
b) Tìm các bội của $4$ nhỏ hơn $30.$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

a) Lần lượt chia $12$ cho các số từ $1$ đến $12,$ các số chia hết là: $1; 2; 3; 4; 6; 12.$
Do đó:
$$\text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}.$$

b) Nhân $4$ với $0; 1; 2; 3; 4; 5; 6; 7; 8; \dots$ ta được: $0; 4; 8; 12; 16; 20; 24; 28; 32; \dots$
Các bội của $4$ nhỏ hơn $30$ là:
$$\{0; 4; 8; 12; 16; 20; 24; 28\}.$$

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

**Ví dụ 2:** Không làm phép tính, hãy xét xem các biểu thức sau có chia hết cho $6$ không:
a) $24 + 36;$
b) $60 - 25.$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

a) Ta có $24\ \vdots\ 6$ (vì $24 = 6 \cdot 4$) và $36\ \vdots\ 6$ (vì $36 = 6 \cdot 6$).
Cả hai số hạng đều chia hết cho $6$ nên theo Tính chất 1:
$$(24 + 36)\ \vdots\ 6.$$

b) Ta có $60\ \vdots\ 6,$ nhưng $25 \not\vdots\ 6$ (vì $25 = 6 \cdot 4 + 1$).
Một số chia hết cho $6$, số còn lại không chia hết cho $6$ nên theo Tính chất 2:
$$(60 - 25) \not\vdots\ 6.$$

</details>

---

### 3. Tính chất chia hết của một tích

> **Tính chất chia hết của một tích:**
> Trong một tích các số tự nhiên, nếu có **ít nhất một thừa số chia hết cho $m$** thì **cả tích đó chia hết cho $m$**:
> $$a\ \vdots\ m \implies (a \cdot b)\ \vdots\ m.$$

**Ví dụ 3:** Xét xem các tích sau có chia hết cho $4$ không:
a) $15 \cdot 8 \cdot 7;$
b) $9 \cdot 35 \cdot 11.$

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

a) Trong tích $15 \cdot 8 \cdot 7$ có thừa số $8\ \vdots\ 4$ nên cả tích:
$$(15 \cdot 8 \cdot 7)\ \vdots\ 4.$$

b) Cả ba thừa số $9; 35; 11$ đều là số lẻ, không có thừa số nào chia hết cho $4.$ Tích của các số lẻ là một số lẻ nên:
$$(9 \cdot 35 \cdot 11) \not\vdots\ 4.$$

</details>

---

### 4. Những điều rất dễ nhầm lẫn

> [!WARNING] Các điểm dễ nhầm cần đặc biệt chú ý:
> 1. **Chiều suy luận của tổng chia hết:** Từ $(a + b)\ \vdots\ m$ **KHÔNG suy ra được** $a\ \vdots\ m$ và $b\ \vdots\ m.$
>    *Ví dụ:* $12 \not\vdots\ 5$ và $13 \not\vdots\ 5,$ nhưng tổng $12 + 13 = 25\ \vdots\ 5.$ Từng số hạng không chia hết nhưng tổng vẫn có thể chia hết!
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
a) $a \in \text{Ư}(18)$ và $a > 4;$
b) $b \in \text{B}(6)$ và $b \le 36.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) Ta có $\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}.$
Vì $a > 4$ nên $a \in \{6; 9; 18\}.$

b) Ta có $\text{B}(6) = \{0; 6; 12; 18; 24; 30; 36; 42; \dots\}$
Vì $b \le 36$ nên $b \in \{0; 6; 12; 18; 24; 30; 36\}.$

</details>

#### Luyện tập 1.2
Tìm các số tự nhiên $a, b$ sao cho:
a) $a \in \text{Ư}(48)$ và $a < 8;$
b) $b \in \text{B}(7)$ và $10 < b \le 45.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) Ta có $\text{Ư}(48) = \{1; 2; 3; 4; 6; 8; 12; 16; 24; 48\}.$
Vì $a < 8$ nên $a \in \{1; 2; 3; 4; 6\}.$

b) Ta có $\text{B}(7) = \{0; 7; 14; 21; 28; 35; 42; 49; \dots\}$
Vì $10 < b \le 45$ nên $b \in \{14; 21; 28; 35; 42\}.$

</details>

#### Luyện tập 1.3
a) Viết tập hợp $\text{Ư}(36).$
b) Viết tập hợp các bội của $8$ nhỏ hơn $60.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) $\text{Ư}(36) = \{1; 2; 3; 4; 6; 9; 12; 18; 36\}.$
b) Các bội của $8$ nhỏ hơn $60$ là: $\{0; 8; 16; 24; 32; 40; 48; 56\}.$

</details>

---

### Dạng 2. Xét tính chia hết của một tổng, một hiệu

**Phương pháp giải:**
- Xét xem từng số hạng có chia hết cho $m$ hay không.
- Nếu tất cả cùng chia hết $\implies$ tổng/hiệu chia hết.
- Nếu chỉ có đúng một số hạng không chia hết $\implies$ tổng/hiệu không chia hết.
- *Lưu ý:* Nếu có từ hai số hạng không chia hết trở lên, hãy thử nhóm chúng lại để kiểm tra tổng riêng của chúng có chia hết hay không.

#### Luyện tập 2.1
Xét xem mỗi tổng (hiệu) sau có chia hết cho $7$ không:
a) $700 + 21;\quad 28 + 1400;\quad 45 + 4 + 350;$
b) $70 - 23;\quad 280 - 56;\quad 205 + 5 - 17.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) 
- $700 + 21$: Vì $700\ \vdots\ 7$ và $21\ \vdots\ 7$ nên $(700 + 21)\ \vdots\ 7.$
- $28 + 1400$: Vì $28\ \vdots\ 7$ và $1400\ \vdots\ 7$ nên $(28 + 1400)\ \vdots\ 7.$
- $45 + 4 + 350$: Nhóm $45 + 4 = 49\ \vdots\ 7$ và $350\ \vdots\ 7$ nên $(45 + 4 + 350)\ \vdots\ 7.$

b) 
- $70 - 23$: Vì $70\ \vdots\ 7$ nhưng $23 \not\vdots\ 7$ nên $(70 - 23) \not\vdots\ 7.$
- $280 - 56$: Vì $280\ \vdots\ 7$ và $56\ \vdots\ 7$ nên $(280 - 56)\ \vdots\ 7.$
- $205 + 5 - 17$: Nhóm $205 + 5 = 210\ \vdots\ 7,$ nhưng $17 \not\vdots\ 7$ nên $(205 + 5 - 17) \not\vdots\ 7.$

</details>

#### Luyện tập 2.2
Xét xem mỗi tổng (hiệu) sau có chia hết cho $8$ không:
a) $800 + 24;\quad 25 + 1600;\quad 45 + 3 + 320;$
b) $80 - 13;\quad 400 - 56;\quad 214 + 26 - 18.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) 
- $800 + 24$: Cả $800$ và $24$ đều chia hết cho $8$ nên $(800 + 24)\ \vdots\ 8.$
- $25 + 1600$: Vì $1600\ \vdots\ 8$ nhưng $25 \not\vdots\ 8$ nên $(25 + 1600) \not\vdots\ 8.$
- $45 + 3 + 320$: Nhóm $45 + 3 = 48\ \vdots\ 8$ và $320\ \vdots\ 8$ nên $(45 + 3 + 320)\ \vdots\ 8.$

b) 
- $80 - 13$: Vì $80\ \vdots\ 8$ nhưng $13 \not\vdots\ 8$ nên $(80 - 13) \not\vdots\ 8.$
- $400 - 56$: Cả $400$ và $56$ đều chia hết cho $8$ nên $(400 - 56)\ \vdots\ 8.$
- $214 + 26 - 18$: Nhóm $214 + 26 = 240\ \vdots\ 8,$ nhưng $18 \not\vdots\ 8$ nên biểu thức không chia hết cho $8.$

</details>

#### Luyện tập 2.3
Cho biểu thức $A = 21 + 36 + x$ với $x \in \mathbb{N}.$ Tìm $x \in \{27; 35; 90; 13; 25\}$ để:
a) $A$ chia hết cho $3;$
b) $A$ không chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

Ta có $21\ \vdots\ 3$ và $36\ \vdots\ 3$ nên $21 + 36 = 57\ \vdots\ 3.$
Do đó, tính chia hết cho $3$ của $A$ phụ thuộc hoàn toàn vào $x$:
- $A\ \vdots\ 3 \iff x\ \vdots\ 3.$
- $A \not\vdots\ 3 \iff x \not\vdots\ 3.$

a) Các số chia hết cho $3$ trong tập hợp đã cho là: $x \in \{27; 90\}.$
b) Các số không chia hết cho $3$ trong tập hợp đã cho là: $x \in \{35; 13; 25\}.$

</details>

---

### Dạng 3. Xét tính chia hết của một tích

**Phương pháp giải:**
- Nếu trong tích có ít nhất một thừa số chia hết cho $m$ thì kết luận ngay tích chia hết cho $m.$
- Nếu không có thừa số nào chia hết cho $m,$ thử ghép tích của hai hay nhiều thừa số lại với nhau xem kết quả có chia hết cho $m$ hay không.

#### Luyện tập 3.1
Các tích sau có chia hết cho $6$ không? Vì sao?
a) $12 \cdot 17 \cdot 5;$
b) $30 \cdot 13 \cdot 11;$
c) $66 \cdot 45 \cdot 29;$
d) $3 \cdot 37 \cdot 4 \cdot 5.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Trong tích có thừa số $12\ \vdots\ 6$ nên $(12 \cdot 17 \cdot 5)\ \vdots\ 6.$
b) Trong tích có thừa số $30\ \vdots\ 6$ nên $(30 \cdot 13 \cdot 11)\ \vdots\ 6.$
c) Trong tích có thừa số $66\ \vdots\ 6$ nên $(66 \cdot 45 \cdot 29)\ \vdots\ 6.$
d) Không thừa số nào chia hết cho $6,$ nhưng ghép $3 \cdot 4 = 12\ \vdots\ 6$ nên $(3 \cdot 37 \cdot 4 \cdot 5)\ \vdots\ 6.$

</details>

#### Luyện tập 3.2
Các tích sau có chia hết cho $4$ không? Vì sao?
a) $32 \cdot 27 \cdot 15;$
b) $20 \cdot 43 \cdot 41;$
c) $124 \cdot 45 \cdot 29;$
d) $22 \cdot 127 \cdot 2 \cdot 15.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) Vì $32\ \vdots\ 4$ nên $(32 \cdot 27 \cdot 15)\ \vdots\ 4.$
b) Vì $20\ \vdots\ 4$ nên $(20 \cdot 43 \cdot 41)\ \vdots\ 4.$
c) Vì $124 = 4 \cdot 31\ \vdots\ 4$ nên tích chia hết cho $4.$
d) Ghép $22 \cdot 2 = 44\ \vdots\ 4$ nên $(22 \cdot 127 \cdot 2 \cdot 15)\ \vdots\ 4.$

</details>

#### Luyện tập 3.3
Tích $A = 2 \cdot 3 \cdot 4 \cdots 10 \cdot 11$ (tích các số tự nhiên liên tiếp từ $2$ đến $11$) có chia hết cho $100$ không?

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

Ta có $100 = 4 \cdot 25.$
- Trong tích $A$ có thừa số $4\ \vdots\ 4.$
- Trong tích $A$ có hai thừa số $5$ và $10,$ mà $5 \cdot 10 = 50\ \vdots\ 25.$
Do đó, tích $A$ chứa cả thừa số chia hết cho $4$ và tích chia hết cho $25.$
Vì vậy $A\ \vdots\ 100.$
*(Kiểm chứng: $A = 39916800 = 100 \cdot 399168$).*

</details>

---

### Dạng 4. Xét tính chia hết của tổng (hiệu) chứa tích

**Phương pháp giải:**
- Xét tính chia hết của từng cụm tích và từng số hạng riêng lẻ.
- Sử dụng Tính chất 1 và Tính chất 2 để kết luận.

#### Luyện tập 4.1
Các biểu thức sau có chia hết cho $7$ không? Vì sao?
a) $1 \cdot 3 \cdot 5 \cdot 7 \cdot 9 + 210;$
b) $12 \cdot 14 \cdot 16 + 35 + 70;$
c) $19 \cdot 21 \cdot 23 + 37.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

a) Tích $1 \cdot 3 \cdot 5 \cdot 7 \cdot 9$ có thừa số $7\ \vdots\ 7$ và $210\ \vdots\ 7$ nên cả tổng chia hết cho $7.$
b) Tích $12 \cdot 14 \cdot 16$ có $14\ \vdots\ 7;$ $35\ \vdots\ 7;$ $70\ \vdots\ 7$ nên cả tổng chia hết cho $7.$
c) Tích $19 \cdot 21 \cdot 23$ có $21\ \vdots\ 7,$ nhưng $37 \not\vdots\ 7$ nên tổng không chia hết cho $7.$

</details>

#### Luyện tập 4.2
Các biểu thức sau có chia hết cho $9$ không? Vì sao?
a) $3 \cdot 5 \cdot 7 \cdot 9 + 270;$
b) $3 \cdot 6 \cdot 57 + 90 + 81;$
c) $15 \cdot 6 \cdot 43 + 47.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

a) Tích đầu có $9\ \vdots\ 9$ và $270\ \vdots\ 9$ nên tổng chia hết cho $9.$
b) Tích đầu có $3 \cdot 6 = 18\ \vdots\ 9;$ $90\ \vdots\ 9;$ $81\ \vdots\ 9$ nên cả tổng chia hết cho $9.$
c) Tích đầu có $15 \cdot 6 = 90\ \vdots\ 9,$ nhưng $47 \not\vdots\ 9$ nên tổng không chia hết cho $9.$

</details>

#### Luyện tập 4.3
Số $A = 15 \cdot 23 \cdot 8 + 45 - 27$ có chia hết cho $9$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

Xét tích $15 \cdot 23 \cdot 8$: trong các thừa số chỉ có $15 = 3 \cdot 5$ chứa đúng một thừa số $3,$ không đủ chia hết cho $9,$ nên $15 \cdot 23 \cdot 8 \not\vdots\ 9.$
Mặt khác, $45\ \vdots\ 9$ và $27\ \vdots\ 9.$
Vì trong biểu thức chỉ có đúng một thành phần không chia hết cho $9$, nên $A \not\vdots\ 9.$
*(Kiểm chứng: $A = 2760 + 45 - 27 = 2778,$ mà $2778 : 9 = 308$ dư $6$).*

</details>

---

### Dạng 5. Bài toán thực tế về chia hết

**Phương pháp giải:**
- Nhận biết các từ khóa: *"chia đều", "xếp thành các phần/nhóm bằng nhau", "không thừa bạn/vật nào"* $\implies$ Số lượng mỗi nhóm hoặc số nhóm phải là **ước** của tổng số đối tượng ban đầu.
- Liệt kê tập hợp ước rồi dùng điều kiện của bài toán để chọn các giá trị thích hợp.

#### Luyện tập 5.1
Một bệnh viện cử một đoàn gồm $60$ bác sĩ đi hỗ trợ chống dịch. Ban tổ chức muốn chia $60$ bác sĩ thành các tổ có số người như nhau, mỗi tổ từ $4$ đến $10$ bác sĩ. Hỏi có bao nhiêu cách chia tổ?

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Số bác sĩ ở mỗi tổ phải là ước của $60.$
Ta có:
$$\text{Ư}(60) = \{1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60\}.$$
Vì mỗi tổ có từ $4$ đến $10$ bác sĩ nên số bác sĩ mỗi tổ có thể là: $4; 5; 6; 10.$
Vậy có **$4$ cách chia tổ**:
1. Chia thành các tổ $4$ người ($15$ tổ).
2. Chia thành các tổ $5$ người ($12$ tổ).
3. Chia thành các tổ $6$ người ($10$ tổ).
4. Chia thành các tổ $10$ người ($6$ tổ).

</details>

#### Luyện tập 5.2
Có $48$ học sinh tham gia hoạt động trải nghiệm. Cô giáo muốn chia đều các bạn thành các nhóm, mỗi nhóm có từ $6$ đến $12$ học sinh. Hỏi có bao nhiêu cách chia nhóm?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Số học sinh trong mỗi nhóm phải là ước của $48.$
Ta có:
$$\text{Ư}(48) = \{1; 2; 3; 4; 6; 8; 12; 16; 24; 48\}.$$
Các ước nằm trong khoảng từ $6$ đến $12$ là: $6; 8; 12.$
Vậy có **$3$ cách chia nhóm**: nhóm $6$ bạn ($8$ nhóm), nhóm $8$ bạn ($6$ nhóm), hoặc nhóm $12$ bạn ($4$ nhóm).

</details>

#### Luyện tập 5.3
Cô giáo có $36$ chiếc bút, muốn chia đều vào các hộp quà sao cho mỗi hộp có từ $5$ đến $12$ chiếc bút. Hỏi có bao nhiêu cách chia?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

Số bút trong mỗi hộp là ước của $36.$
Ta có:
$$\text{Ư}(36) = \{1; 2; 3; 4; 6; 9; 12; 18; 36\}.$$
Các ước nằm trong khoảng từ $5$ đến $12$ là: $6; 9; 12.$
Vậy có **$3$ cách chia**: mỗi hộp $6$ chiếc, $9$ chiếc hoặc $12$ chiếc bút.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Tìm các số tự nhiên $a, b$ sao cho:
a) $a \in \text{Ư}(20)$ và $a > 4;$
b) $b \in \text{B}(5)$ và $b \le 35.$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) $\text{Ư}(20) = \{1; 2; 4; 5; 10; 20\}.$ Vì $a > 4$ nên $a \in \{5; 10; 20\}.$
b) $\text{B}(5) = \{0; 5; 10; 15; 20; 25; 30; 35; 40; \dots\}$ Vì $b \le 35$ nên $b \in \{0; 5; 10; 15; 20; 25; 30; 35\}.$

</details>

### Bài 2
a) Viết tập hợp $\text{Ư}(28).$
b) Viết tập hợp các bội của $9$ nhỏ hơn $50.$

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

a) $\text{Ư}(28) = \{1; 2; 4; 7; 14; 28\}.$
b) Các bội của $9$ nhỏ hơn $50$ là: $\{0; 9; 18; 27; 36; 45\}.$

</details>

### Bài 3
Xét xem mỗi tổng (hiệu) sau có chia hết cho $15$ không:
a) $30 + 45;\quad 150 + 60;\quad 40 + 5 + 300;$
b) $1500 - 23;\quad 450 - 31;\quad 145 + 5 - 17.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) 
- $30 + 45$: Cả $30$ và $45$ đều chia hết cho $15$ nên tổng chia hết cho $15.$
- $150 + 60$: Cả hai số đều chia hết cho $15$ nên tổng chia hết cho $15.$
- $40 + 5 + 300$: Nhóm $40 + 5 = 45\ \vdots\ 15$ và $300\ \vdots\ 15$ nên tổng chia hết cho $15.$

b) 
- $1500 - 23$: Vì $1500\ \vdots\ 15$ nhưng $23 \not\vdots\ 15$ nên hiệu không chia hết cho $15.$
- $450 - 31$: Vì $450\ \vdots\ 15$ nhưng $31 \not\vdots\ 15$ nên hiệu không chia hết cho $15.$
- $145 + 5 - 17$: Nhóm $145 + 5 = 150\ \vdots\ 15,$ còn $17 \not\vdots\ 15$ nên không chia hết cho $15.$

</details>

### Bài 4
Cho biểu thức $A = 24 + 42 + x$ với $x \in \mathbb{N}.$ Tìm điều kiện của $x$ để:
a) $A$ chia hết cho $6;$
b) $A$ không chia hết cho $6.$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

Ta có $24\ \vdots\ 6$ và $42\ \vdots\ 6$ nên $24 + 42 = 66\ \vdots\ 6.$
a) Để $A\ \vdots\ 6$ thì $x$ phải chia hết cho $6,$ tức là $x$ là bội của $6$: $x \in \{0; 6; 12; 18; \dots\}$
b) Để $A \not\vdots\ 6$ thì $x$ không chia hết cho $6,$ tức là $x$ không phải là bội của $6.$

</details>

### Bài 5
Các tích sau có chia hết cho $8$ không? Vì sao?
a) $40 \cdot 7 \cdot 25;$
b) $32 \cdot 19 \cdot 28;$
c) $4 \cdot 35 \cdot 2 \cdot 39;$
d) $14 \cdot 27 \cdot 4 \cdot 15.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) Vì $40\ \vdots\ 8$ nên cả tích chia hết cho $8.$
b) Vì $32\ \vdots\ 8$ nên cả tích chia hết cho $8.$
c) Ghép $4 \cdot 2 = 8\ \vdots\ 8$ nên cả tích chia hết cho $8.$
d) Ghép $14 \cdot 4 = 56 = 8 \cdot 7\ \vdots\ 8$ nên cả tích chia hết cho $8.$

</details>

### Bài 6
Các tổng sau có chia hết cho $10$ không? Vì sao?
a) $2 \cdot 4 \cdot 6 \cdot 8 \cdot 10 + 310;$
b) $1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 + 230;$
c) $3 \cdot 5 \cdot 7 \cdot 9 + 25 + 50.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

a) Tích đầu có $10\ \vdots\ 10$ và $310\ \vdots\ 10$ nên cả tổng chia hết cho $10.$
b) Tích đầu có $2 \cdot 5 = 10\ \vdots\ 10$ và $230\ \vdots\ 10$ nên cả tổng chia hết cho $10.$
c) Tích $3 \cdot 5 \cdot 7 \cdot 9 = 945$ tận cùng là $5$ nên không chia hết cho $10;$ $25 \not\vdots\ 10;$ nhưng nhóm $945 + 25 = 970\ \vdots\ 10,$ lại có $50\ \vdots\ 10$ nên cả tổng chia hết cho $10.$

</details>

### Bài 7
Bạn Nam nói: *"Nếu một tổng $(a + b)$ chia hết cho $m$ thì mỗi số hạng $a$ và $b$ đều phải chia hết cho $m$."* Theo em, bạn Nam nói đúng hay sai? Hãy nêu một ví dụ để giải thích.

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

Bạn Nam nói **sai**.
Từ $(a + b)\ \vdots\ m$ không suy ra được từng số hạng phải chia hết cho $m.$
*Ví dụ:* Với $m = 5,$ ta lấy $a = 12$ và $b = 13.$
Cả hai số $12 \not\vdots\ 5$ và $13 \not\vdots\ 5,$ nhưng tổng $12 + 13 = 25\ \vdots\ 5.$

</details>

### Bài 8
Tích $A = 2 \cdot 4 \cdot 6 \cdot 8 \cdot 10 \cdot 12$ có chia hết cho $80$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

Ta có $80 = 16 \cdot 5.$
- Trong tích $A$ có thừa số $10 = 2 \cdot 5\ \vdots\ 5,$ nên $A\ \vdots\ 5.$
- Đếm các thừa số $2$ trong tích:
  - $2 = 2^1$
  - $4 = 2^2$
  - $6 = 2 \cdot 3$ (có một thừa số 2)
  - $8 = 2^3$
  - $10 = 2 \cdot 5$ (có một thừa số 2)
  - $12 = 2^2 \cdot 3$
  Tổng số thừa số $2$ là: $1 + 2 + 1 + 3 + 1 + 2 = 10 \ge 4,$ do đó $A$ chia hết cho $2^4 = 16.$
Vì $A$ vừa chia hết cho $16,$ vừa chia hết cho $5$ nên $A\ \vdots\ 80.$
*(Kiểm chứng: $A = 46080 = 80 \cdot 576$).*

</details>

### Bài 9
Có bao nhiêu cách chia đều $30$ học sinh thành các nhóm sao cho mỗi nhóm có từ $4$ đến $6$ học sinh?

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

Số học sinh trong mỗi nhóm phải là ước của $30.$
Ta có: $\text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}.$
Các ước thỏa mãn từ $4$ đến $6$ là: $5$ và $6.$
Vậy có **$2$ cách chia**:
- Chia thành các nhóm $5$ học sinh ($6$ nhóm).
- Chia thành các nhóm $6$ học sinh ($5$ nhóm).

</details>

### Bài 10
Người ta muốn xếp $72$ quyển vở thành các bó đều nhau, mỗi bó có từ $8$ đến $15$ quyển. Hỏi có bao nhiêu cách xếp?

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Số quyển vở trong mỗi bó là ước của $72.$
Ta có: $\text{Ư}(72) = \{1; 2; 3; 4; 6; 8; 9; 12; 18; 24; 36; 72\}.$
Các ước thỏa mãn từ $8$ đến $15$ là: $8; 9; 12.$
Vậy có **$3$ cách xếp**:
- Bó $8$ quyển ($9$ bó).
- Bó $9$ quyển ($8$ bó).
- Bó $12$ quyển ($6$ bó).

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Hãy tự đánh giá kiến thức đã học qua các câu hỏi trắc nghiệm tương tác:

```quiz
type: choice
question: 'Khẳng định nào sau đây là đúng?'
options:
  - '$0 \not\vdots\ 7$'
  - '$15\ \vdots\ 4$'
  - '$18\ \vdots\ 6$'
  - '7 là bội của 14'
answer: 3
explanation: 'Vì $18 = 6 \cdot 3$ nên $18\ \vdots\ 6.$ Còn $0$ chia hết cho 7; $15 : 4$ có dư; và 7 là ước của 14 chứ không phải bội.'
```

```quiz
type: choice
question: 'Nếu $a\ \vdots\ 5$ và $b \not\vdots\ 5$ thì tổng $(a + b)$:'
options:
  - 'Luôn chia hết cho 5'
  - 'Không chia hết cho 5'
  - 'Bằng 0'
  - 'Là số lẻ'
answer: 2
explanation: 'Theo Tính chất 2: Một số chia hết cho 5, số kia không chia hết cho 5 thì tổng không chia hết cho 5.'
```

```quiz
type: choice
question: 'Tập hợp các ước của 24 có bao nhiêu phần tử?'
options:
  - '6'
  - '7'
  - '8'
  - '10'
answer: 3
explanation: '$\text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}$ gồm đúng 8 phần tử.'
```

```quiz
type: choice
question: 'Trong các tổng sau, tổng nào chia hết cho 7?'
options:
  - '$42 + 70$'
  - '$49 + 15$'
  - '$14 + 23$'
  - '$70 + 8$'
answer: 1
explanation: 'Vì $42\ \vdots\ 7$ và $70\ \vdots\ 7$ nên $(42 + 70)\ \vdots\ 7.$'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.**
a) $\text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}.$
b) Ba bội của $6$ nhỏ hơn $40$: chẳng hạn $6; 12; 18$ (hoặc $0; 24; 30; 36$).

**Câu 2.**
a) $\text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}.$ Các ước lớn hơn $5$ là: $6; 10; 15; 30.$
b) $\text{B}(8) = \{0; 8; 16; 24; 32; 40; 48; \dots\}$ Các bội không vượt quá $48$ là: $0; 8; 16; 24; 32; 40; 48.$

**Câu 3.**
a) $42\ \vdots\ 7$ và $70\ \vdots\ 7 \implies (42 + 70)\ \vdots\ 7.$
b) $49\ \vdots\ 7$ nhưng $15 \not\vdots\ 7 \implies (49 + 15) \not\vdots\ 7.$
c) $84\ \vdots\ 7$ và $21\ \vdots\ 7 \implies (84 - 21)\ \vdots\ 7.$

**Câu 4.**
Ta có $40\ \vdots\ 5$ và $75\ \vdots\ 5$ nên $40 + 75 = 115\ \vdots\ 5.$
a) Để $A\ \vdots\ 5 \implies x\ \vdots\ 5,$ do đó $x \in \{35; 90; 25\}.$
b) Để $A \not\vdots\ 5 \implies x \not\vdots\ 5,$ do đó $x \in \{27; 13\}.$

**Câu 5.**
- Tích $25 \cdot 13 \cdot 8$ có thừa số $25\ \vdots\ 5$ nên tích chia hết cho $5.$
- Tích $9 \cdot 35 \cdot 11$ gồm toàn số lẻ nên là một số lẻ, do đó không chia hết cho $2.$

**Câu 6.**
Tích $3 \cdot 5 \cdot 8 = 120 \not\vdots\ 7$ (vì $120 = 7 \cdot 17 + 1$), trong khi $21\ \vdots\ 7.$
Một số hạng không chia hết cho $7$, số hạng còn lại chia hết cho $7$ nên $A \not\vdots\ 7.$

**Câu 7.**
Số học sinh mỗi nhóm là ước của $40$: $\text{Ư}(40) = \{1; 2; 4; 5; 8; 10; 20; 40\}.$
Các ước từ $6$ đến $9$ chỉ có duy nhất số $8.$
Vậy chỉ có **$1$ cách chia**: chia thành $5$ nhóm, mỗi nhóm $8$ học sinh.

</details>

---

## E. Bài tập nâng cao

> **Phương pháp nhóm số hạng chứng minh chia hết:**
> Đối với tổng các luỹ thừa liên tiếp $A = a + a^2 + a^3 + \dots + a^n$:
> - Nhóm từng cặp $2$ số hạng: $a^k + a^{k+1} = a^k(1 + a).$
> - Nhóm từng bộ $3$ số hạng: $a^k + a^{k+1} + a^{k+2} = a^k(1 + a + a^2).$
> Đặt thừa số chung ra ngoài để xuất hiện thừa số chia hết cho số cần chứng minh.

### Nâng cao 1
Cho biểu thức $A = 2 + 2^2 + 2^3 + 2^4 + \dots + 2^{12}.$ Chứng minh rằng:
a) $A\ \vdots\ 2;$
b) $A\ \vdots\ 3;$
c) $A\ \vdots\ 7.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

a) Mỗi số hạng trong tổng $A$ đều có thừa số $2$ nên mọi số hạng đều chia hết cho $2.$ Do đó $A\ \vdots\ 2.$

b) Tổng $A$ có $12$ số hạng. Nhóm hai số hạng liền nhau thành một cặp:
$$A = (2 + 2^2) + (2^3 + 2^4) + \dots + (2^{11} + 2^{12})$$
$$A = 2(1 + 2) + 2^3(1 + 2) + \dots + 2^{11}(1 + 2)$$
$$A = 2 \cdot 3 + 2^3 \cdot 3 + \dots + 2^{11} \cdot 3$$
$$A = 3 \cdot (2 + 2^3 + \dots + 2^{11}).$$
Vì tích có thừa số $3$ nên $A\ \vdots\ 3.$

c) Nhóm ba số hạng liền nhau thành một nhóm (được đúng $12 : 3 = 4$ nhóm):
$$A = (2 + 2^2 + 2^3) + (2^4 + 2^5 + 2^6) + \dots + (2^{10} + 2^{11} + 2^{12})$$
$$A = 2(1 + 2 + 2^2) + 2^4(1 + 2 + 2^2) + \dots + 2^{10}(1 + 2 + 2^2)$$
$$A = 2 \cdot 7 + 2^4 \cdot 7 + \dots + 2^{10} \cdot 7$$
$$A = 7 \cdot (2 + 2^4 + \dots + 2^{10}).$$
Vì tích có thừa số $7$ nên $A\ \vdots\ 7.$

</details>

### Nâng cao 2
Cho biểu thức $A = 3 + 3^2 + 3^3 + 3^4 + \dots + 3^{12}.$ Chứng minh rằng:
a) $A\ \vdots\ 3;$
b) $A\ \vdots\ 4;$
c) $A\ \vdots\ 13.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

a) Mỗi số hạng trong tổng $A$ đều chia hết cho $3$ nên $A\ \vdots\ 3.$

b) Nhóm hai số hạng liền nhau (gồm $6$ nhóm):
$$A = (3 + 3^2) + (3^3 + 3^4) + \dots + (3^{11} + 3^{12})$$
$$A = 3(1 + 3) + 3^3(1 + 3) + \dots + 3^{11}(1 + 3)$$
$$A = 3 \cdot 4 + 3^3 \cdot 4 + \dots + 3^{11} \cdot 4 = 4 \cdot (3 + 3^3 + \dots + 3^{11}).$$
Do đó $A\ \vdots\ 4.$

c) Nhóm ba số hạng liền nhau (gồm $4$ nhóm):
$$A = (3 + 3^2 + 3^3) + (3^4 + 3^5 + 3^6) + \dots + (3^{10} + 3^{11} + 3^{12})$$
$$A = 3(1 + 3 + 3^2) + 3^4(1 + 3 + 3^2) + \dots + 3^{10}(1 + 3 + 3^2)$$
Ta có $1 + 3 + 3^2 = 1 + 3 + 9 = 13.$
$$A = 13 \cdot (3 + 3^4 + \dots + 3^{10}).$$
Do đó $A\ \vdots\ 13.$

</details>

### Nâng cao 3
Cho biểu thức $A = 4 + 4^2 + 4^3 + 4^4 + \dots + 4^{12}.$ Chứng minh rằng:
a) $A\ \vdots\ 4;$
b) $A\ \vdots\ 5;$
c) $A\ \vdots\ 21.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

a) Mọi số hạng trong tổng đều chia hết cho $4$ nên $A\ \vdots\ 4.$

b) Nhóm hai số hạng liền nhau (gồm $6$ nhóm):
$$A = (4 + 4^2) + (4^3 + 4^4) + \dots + (4^{11} + 4^{12})$$
$$A = 4(1 + 4) + 4^3(1 + 4) + \dots + 4^{11}(1 + 4) = 5 \cdot (4 + 4^3 + \dots + 4^{11}).$$
Do đó $A\ \vdots\ 5.$

c) Nhóm ba số hạng liền nhau (gồm $4$ nhóm):
$$A = (4 + 4^2 + 4^3) + (4^4 + 4^5 + 4^6) + \dots + (4^{10} + 4^{11} + 4^{12})$$
$$A = 4(1 + 4 + 4^2) + 4^4(1 + 4 + 4^2) + \dots + 4^{10}(1 + 4 + 4^2)$$
Ta có $1 + 4 + 4^2 = 1 + 4 + 16 = 21.$
$$A = 21 \cdot (4 + 4^4 + \dots + 4^{10}).$$
Do đó $A\ \vdots\ 21.$

</details>

### Nâng cao 4
Cho $a$ và $d$ là các số tự nhiên khác $0.$ Chứng minh rằng $d = 1$ nếu:
a) $a$ và $2a - 1$ cùng chia hết cho $d;$
b) $a$ và $6a - 1$ cùng chia hết cho $d.$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

a) Vì $a\ \vdots\ d \implies 2a\ \vdots\ d.$
Mặt khác theo giả thiết $2a - 1\ \vdots\ d.$
Lấy hiệu hai số cùng chia hết cho $d$:
$$[2a - (2a - 1)]\ \vdots\ d \implies 1\ \vdots\ d.$$
Vì $d$ là số tự nhiên khác $0$ và $1\ \vdots\ d \implies d = 1.$

b) Vì $a\ \vdots\ d \implies 6a\ \vdots\ d.$
Mặt khác $6a - 1\ \vdots\ d.$
Lấy hiệu hai số:
$$[6a - (6a - 1)]\ \vdots\ d \implies 1\ \vdots\ d \implies d = 1.$$

</details>

### Nâng cao 5
Chứng minh rằng với mọi số tự nhiên $n,$ tích $P = n \cdot (n + 2) \cdot (n + 7)$ luôn chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Khi chia một số tự nhiên $n$ bất kì cho $3,$ số dư chỉ có thể là $0; 1$ hoặc $2.$ Do đó ta xét 3 trường hợp:
- **Trường hợp 1:** $n\ \vdots\ 3$ ($n = 3k,$ với $k \in \mathbb{N}$).
  Khi đó thừa số đầu tiên $n\ \vdots\ 3 \implies P\ \vdots\ 3.$

- **Trường hợp 2:** $n$ chia $3$ dư $1$ ($n = 3k + 1,$ với $k \in \mathbb{N}$).
  Khi đó thừa số thứ hai:
  $$n + 2 = 3k + 1 + 2 = 3k + 3 = 3(k + 1)\ \vdots\ 3 \implies P\ \vdots\ 3.$$

- **Trường hợp 3:** $n$ chia $3$ dư $2$ ($n = 3k + 2,$ với $k \in \mathbb{N}$).
  Khi đó thừa số thứ ba:
  $$n + 7 = 3k + 2 + 7 = 3k + 9 = 3(k + 3)\ \vdots\ 3 \implies P\ \vdots\ 3.$$

Trong cả 3 trường hợp, tích $P$ luôn chứa ít nhất một thừa số chia hết cho $3.$
Vậy $n(n + 2)(n + 7)\ \vdots\ 3$ với mọi số tự nhiên $n.$

</details>
