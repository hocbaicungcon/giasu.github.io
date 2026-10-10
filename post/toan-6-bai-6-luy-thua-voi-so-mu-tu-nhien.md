---
title: 'Toán 6 Bài 6: Luỹ thừa với số mũ tự nhiên - Lý thuyết, dạng toán và bài tập chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 6 Luỹ thừa với số mũ tự nhiên: định nghĩa, cơ số, số mũ, số chính phương, nhân chia cùng cơ số, kèm câu hỏi trắc nghiệm tương tác và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số tự nhiên
  - Luỹ thừa với số mũ tự nhiên
  - Số chính phương
  - Kết nối tri thức
grade: 6
---

# Bài 6. Luỹ thừa với số mũ tự nhiên

Ở Bài 5, chúng ta đã biết phép nhân là cách viết gọn của phép cộng nhiều số hạng bằng nhau. Khi cần nhân nhiều thừa số bằng nhau (chẳng hạn $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2$), toán học sử dụng phép nâng lên **luỹ thừa** để biểu diễn ngắn gọn, súc tích và dễ tính toán hơn.

---

## 0. Khởi động — Ôn tập kiến thức cũ

Hãy thực hiện nhanh các câu hỏi khởi động sau để làm quen với phép nhân nhiều thừa số bằng nhau.

```quiz
type: choice
question: 'Giá trị của tích $5 \cdot 5 \cdot 5$ bằng bao nhiêu?'
options:
  - '15'
  - '25'
  - '125'
  - '75'
answer: 3
explanation: 'Ta có $5 \cdot 5 \cdot 5 = 25 \cdot 5 = 125.$'
```

```quiz
type: choice
question: 'Giá trị của tích $3 \cdot 3 \cdot 3 \cdot 3$ (4 thừa số 3) bằng bao nhiêu?'
options:
  - '12'
  - '27'
  - '81'
  - '243'
answer: 3
explanation: 'Ta có $3 \cdot 3 = 9$; $9 \cdot 3 = 27$; $27 \cdot 3 = 81.$ Chú ý không nhầm với phép nhân $3 \cdot 4 = 12.$'
```

```quiz
type: choice
question: 'Tính nhanh tích $8 \cdot 29 \cdot 125$ ta được kết quả là:'
options:
  - '2900'
  - '29000'
  - '2320'
  - '14500'
answer: 2
explanation: 'Áp dụng tính chất giao hoán và kết hợp: $8 \cdot 29 \cdot 125 = 29 \cdot (8 \cdot 125) = 29 \cdot 1000 = 29000.$'
```

```quiz
type: choice
question: 'Tích $10 \cdot 10 \cdot 10 \cdot 10 \cdot 10$ gồm 5 thừa số 10 có giá trị là:'
options:
  - '50'
  - '10000'
  - '100000'
  - '1000000'
answer: 3
explanation: 'Tích của năm số 10 bằng $100000$ (chữ số 1 kèm theo 5 chữ số 0 phía sau).'
```

<details>
<summary><strong>Xem lời giải các câu tự luận khởi động (Câu 4, Câu 5)</strong></summary>

**Câu 4.** Viết số $4635$ thành tổng giá trị các chữ số theo từng hàng (nghìn, trăm, chục, đơn vị):
$$4635 = 4 \cdot 1000 + 6 \cdot 100 + 3 \cdot 10 + 5.$$

**Câu 5.** Một tích gồm các thừa số đều bằng $8$ và có tất cả $6$ thừa số:
$$8 \cdot 8 \cdot 8 \cdot 8 \cdot 8 \cdot 8.$$
Đây chính là hình ảnh trực quan dẫn tới khái niệm luỹ thừa $8^6$ mà chúng ta sẽ tìm hiểu ngay dưới đây.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Luỹ thừa với số mũ tự nhiên

> **Định nghĩa:** Luỹ thừa bậc $n$ của $a$ là tích của $n$ thừa số bằng nhau, mỗi thừa số bằng $a$:
> $$a^n = \underbrace{a \cdot a \cdot a \cdots a}_{n \text{ thừa số}} \quad (n \in \mathbb{N}^*).$$
> Trong đó:
> - $a$ được gọi là **cơ số**.
> - $n$ được gọi là **số mũ**.
> - $a^n$ đọc là "a mũ n" (hoặc "a luỹ thừa n", "luỹ thừa bậc n của a").

**Quy ước và tên gọi đặc biệt:**
- $a^1 = a.$
- $a^2$ đọc là "$a$ mũ hai" hoặc **"$a$ bình phương"**. Các số là bình phương của một số tự nhiên như $0; 1; 4; 9; 16; 25; 36; \dots$ được gọi là **các số chính phương**.
- $a^3$ đọc là "$a$ mũ ba" hoặc **"$a$ lập phương"**.
- Luỹ thừa của $10$: $10^n = 1\underbrace{00\dots0}_{n \text{ chữ số } 0}.$

**Ví dụ 1:**
- Viết các tích sau thành luỹ thừa:
  - $4 \cdot 4 \cdot 4 \cdot 4 \cdot 4 = 4^5$ (có $5$ thừa số $4$).
  - $7 \cdot 7 \cdot 7 = 7^3$ (có $3$ thừa số $7$).
- Tính giá trị:
  - $3^4 = 3 \cdot 3 \cdot 3 \cdot 3 = 81.$
  - $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32.$
  - $10^3 = 10 \cdot 10 \cdot 10 = 1000.$

---

### 2. Nhân và chia hai luỹ thừa cùng cơ số

> **Quy tắc nhân hai luỹ thừa cùng cơ số:**
> Khi nhân hai luỹ thừa cùng cơ số, ta **giữ nguyên cơ số** và **cộng các số mũ**:
> $$a^m \cdot a^n = a^{m+n}.$$

> **Quy tắc chia hai luỹ thừa cùng cơ số:**
> Khi chia hai luỹ thừa cùng cơ số (khác $0$), ta **giữ nguyên cơ số** và **trừ các số mũ**:
> $$a^m : a^n = a^{m-n} \quad (a \neq 0;\; m \ge n).$$

> **Quy ước:**
> $$a^0 = 1 \quad (a \neq 0).$$

**Ví dụ 2:**
1. $3^4 \cdot 3^5 = 3^{4+5} = 3^9.$
2. $5^8 : 5^5 = 5^{8-5} = 5^3.$
3. Viết $8 \cdot 32$ dưới dạng một luỹ thừa: Đưa về cùng cơ số $2$ ta có $8 = 2^3$ và $32 = 2^5$, do đó:
   $$8 \cdot 32 = 2^3 \cdot 2^5 = 2^{3+5} = 2^8.$$

---

### 3. Những sai lầm học sinh rất dễ mắc phải

| Sai lầm phổ biến | Sửa lại cho đúng | Giải thích |
| :--- | :--- | :--- |
| Nhầm luỹ thừa với phép nhân: $3^2 = 6$ | $3^2 = 3 \cdot 3 = 9$ | Luỹ thừa là tích các thừa số giống nhau, không phải lấy cơ số nhân số mũ. |
| Nhân cả cơ số lẫn số mũ: $3^2 \cdot 3^3 = 9^5$ hoặc $3^6$ | $3^2 \cdot 3^3 = 3^{2+3} = 3^5$ | Giữ nguyên cơ số, chỉ cộng số mũ. |
| Tự ý cộng số mũ khi gặp phép cộng: $2^3 + 2^2 = 2^5$ | $2^3 + 2^2 = 8 + 4 = 12$ | Chỉ phép nhân/chia mới gộp số mũ, phép cộng phải tính giá trị từng luỹ thừa. |
| Quên quy ước luỹ thừa mũ $0$: $7^0 = 0$ | $7^0 = 1$ | Mọi số khác $0$ nâng lên luỹ thừa $0$ đều bằng $1.$ |

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Viết kết quả dưới dạng một luỹ thừa

**Phương pháp giải:**
- Áp dụng định nghĩa luỹ thừa: $a^n = \underbrace{a \cdot a \cdots a}_{n \text{ thừa số}}.$
- Sử dụng công thức nhân, chia: $a^m \cdot a^n = a^{m+n}$ và $a^m : a^n = a^{m-n}$ ($a \neq 0, m \ge n$).
- Nếu các thừa số khác cơ số, hãy tìm cách phân tích đưa về cùng cơ số (ví dụ $4 = 2^2, 8 = 2^3, 9 = 3^2, 27 = 3^3$).

#### Luyện tập 1.1
Hoàn thành các ô còn thiếu trong bảng sau:

| Luỹ thừa | Cơ số | Số mũ | Giá trị của luỹ thừa |
| :---: | :---: | :---: | :---: |
| $6^2$ | $?$ | $?$ | $?$ |
| $?$ | $4$ | $3$ | $?$ |
| $3^?$ | $3$ | $?$ | $81$ |
| $a^0$ ($a \in \mathbb{N}^*$) | $a$ | $0$ | $?$ |

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

- Hàng 1: Luỹ thừa $6^2$ có cơ số là $6$, số mũ là $2$, giá trị là $6^2 = 36.$
- Hàng 2: Cơ số $4$, số mũ $3 \Rightarrow$ Luỹ thừa $4^3$, giá trị là $4^3 = 4 \cdot 4 \cdot 4 = 64.$
- Hàng 3: Vì $81 = 3^4$ nên luỹ thừa là $3^4$, số mũ là $4.$
- Hàng 4: Luỹ thừa $a^0$ với $a \neq 0$ có giá trị bằng $1.$

Bảng hoàn chỉnh:

| Luỹ thừa | Cơ số | Số mũ | Giá trị |
| :---: | :---: | :---: | :---: |
| $6^2$ | $6$ | $2$ | $36$ |
| $4^3$ | $4$ | $3$ | $64$ |
| $3^4$ | $3$ | $4$ | $81$ |
| $a^0$ | $a$ | $0$ | $1$ |

</details>

#### Luyện tập 1.2
Viết kết quả mỗi phép tính sau dưới dạng một luỹ thừa:
a) $7^6 \cdot 7^4;$
b) $3 \cdot 3^4 \cdot 3 \cdot 3^{15};$
c) $17^{18} : 17^{12};$
d) $c^{15} : c^8 : c^7$ ($c \neq 0$).

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) $7^6 \cdot 7^4 = 7^{6+4} = 7^{10}.$
b) $3 \cdot 3^4 \cdot 3 \cdot 3^{15} = 3^1 \cdot 3^4 \cdot 3^1 \cdot 3^{15} = 3^{1+4+1+15} = 3^{21}.$
c) $17^{18} : 17^{12} = 17^{18-12} = 17^6.$
d) $c^{15} : c^8 : c^7 = c^{15-8-7} = c^0 = 1.$

</details>

#### Luyện tập 1.3
Viết thành một luỹ thừa bằng cách đưa về cùng cơ số:
a) $8 \cdot 8 \cdot 8 \cdot 2 \cdot 2;$
b) $3^4 \cdot 9^2 \cdot 27^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) Ta có $8 = 2^3$ nên $8 \cdot 8 \cdot 8 = 2^3 \cdot 2^3 \cdot 2^3 = 2^9.$
Do đó:
$$8 \cdot 8 \cdot 8 \cdot 2 \cdot 2 = 2^9 \cdot 2^1 \cdot 2^1 = 2^{9+1+1} = 2^{11}.$$

b) Đưa về cơ số $3$:
- $9 = 3^2 \Rightarrow 9^2 = 3^2 \cdot 3^2 = 3^4.$
- $27 = 3^3 \Rightarrow 27^2 = 3^3 \cdot 3^3 = 3^6.$
Vậy:
$$3^4 \cdot 9^2 \cdot 27^2 = 3^4 \cdot 3^4 \cdot 3^6 = 3^{4+4+6} = 3^{14}.$$

</details>

---

### Dạng 2. Bình phương, lập phương và số chính phương

**Phương pháp giải:**
- Số chính phương là bình phương của một số tự nhiên ($0^2 = 0, 1^2 = 1, 2^2 = 4, 3^2 = 9, \dots$).
- Các công thức tổng đặc biệt đáng nhớ:
  - Tổng của $n$ số lẻ liên tiếp bắt đầu từ $1$ bằng $n^2$:
    $$1 + 3 + 5 + \dots + (2n - 1) = n^2.$$
  - Tổng các lập phương bằng bình phương của tổng các cơ số:
    $$1^3 + 2^3 + 3^3 + \dots + n^3 = (1 + 2 + 3 + \dots + n)^2.$$

#### Luyện tập 2.1
Điền các giá trị thích hợp vào bảng:

| $a$ | $2$ | $?$ | $5$ | $?$ |
| :---: | :---: | :---: | :---: | :---: |
| $a^2$ | $?$ | $0$ | $?$ | $?$ |
| $a^3$ | $?$ | $?$ | $?$ | $27$ |

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

- Cột 1: $a = 2 \Rightarrow a^2 = 2^2 = 4;\; a^3 = 2^3 = 8.$
- Cột 2: $a^2 = 0 \Rightarrow a = 0;\; a^3 = 0^3 = 0.$
- Cột 3: $a = 5 \Rightarrow a^2 = 5^2 = 25;\; a^3 = 5^3 = 125.$
- Cột 4: $a^3 = 27 = 3^3 \Rightarrow a = 3;\; a^2 = 3^2 = 9.$

Bảng kết quả:

| $a$ | $2$ | $0$ | $5$ | $3$ |
| :---: | :---: | :---: | :---: | :---: |
| $a^2$ | $4$ | $0$ | $25$ | $9$ |
| $a^3$ | $8$ | $0$ | $125$ | $27$ |

</details>

#### Luyện tập 2.2
a) Trong các số tự nhiên từ $1$ đến $50$, có bao nhiêu số chính phương?
b) Tìm tất cả các số tự nhiên có ba chữ số là lập phương của một số tự nhiên.

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) Các số chính phương từ $1$ đến $50$ là bình phương của các số tự nhiên từ $1$ đến $7$:
$$1^2 = 1;\; 2^2 = 4;\; 3^2 = 9;\; 4^2 = 16;\; 5^2 = 25;\; 6^2 = 36;\; 7^2 = 49.$$
(Vì $8^2 = 64 > 50$). Vậy có $7$ số chính phương thỏa mãn.

b) Ta lần lượt tính lập phương của các số tự nhiên:
- $4^3 = 64$ (có hai chữ số — loại).
- $5^3 = 125.$
- $6^3 = 216.$
- $7^3 = 343.$
- $8^3 = 512.$
- $9^3 = 729.$
- $10^3 = 1000$ (có bốn chữ số — dừng lại).

Vậy có $5$ số tự nhiên có ba chữ số là lập phương của một số tự nhiên: $125; 216; 343; 512; 729.$

</details>

#### Luyện tập 2.3
Viết mỗi tổng sau thành bình phương của một số tự nhiên:
a) $1 + 3 + 5 + 7 + 9;$
b) $1^3 + 2^3 + 3^3.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Tổng gồm $5$ số lẻ liên tiếp kể từ $1$, nên:
$$1 + 3 + 5 + 7 + 9 = 5^2 = 25.$$

b) Áp dụng công thức tổng các lập phương:
$$1^3 + 2^3 + 3^3 = (1 + 2 + 3)^2 = 6^2 = 36.$$

</details>

---

### Dạng 3. Viết một số tự nhiên thành tổng theo các luỹ thừa của 10

**Phương pháp giải:**
- **Bước 1:** Viết số đã cho thành tổng giá trị các chữ số theo từng hàng đơn vị, chục, trăm, nghìn, ...
- **Bước 2:** Thay các số $1; 10; 100; 1000; 10000; \dots$ bằng các luỹ thừa tương ứng $10^0; 10^1; 10^2; 10^3; 10^4; \dots$

#### Luyện tập 3.1
Viết số $28230$ thành tổng các giá trị chữ số của nó bằng cách dùng các luỹ thừa của $10.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

$$28230 = 2 \cdot 10000 + 8 \cdot 1000 + 2 \cdot 100 + 3 \cdot 10 + 0$$
$$28230 = 2 \cdot 10^4 + 8 \cdot 10^3 + 2 \cdot 10^2 + 3 \cdot 10^1.$$

</details>

#### Luyện tập 3.2
Viết số $40872$ thành tổng các giá trị chữ số của nó bằng cách dùng các luỹ thừa của $10.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

Chữ số hàng nghìn bằng $0$ nên ta có thể bỏ qua số hạng đó:
$$40872 = 4 \cdot 10000 + 0 \cdot 1000 + 8 \cdot 100 + 7 \cdot 10 + 2$$
$$40872 = 4 \cdot 10^4 + 8 \cdot 10^2 + 7 \cdot 10^1 + 2 \cdot 10^0.$$

</details>

#### Luyện tập 3.3
Viết các số sau thành tổng các luỹ thừa của $10$:
a) $826435;$
b) $\overline{abcd}$ ($a \neq 0$).

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

a) $826435 = 8 \cdot 10^5 + 2 \cdot 10^4 + 6 \cdot 10^3 + 4 \cdot 10^2 + 3 \cdot 10^1 + 5 \cdot 10^0.$
b) $\overline{abcd} = a \cdot 10^3 + b \cdot 10^2 + c \cdot 10^1 + d \cdot 10^0.$

</details>

---

### Dạng 4. Tìm cơ số hoặc số mũ của một luỹ thừa

**Phương pháp giải:**
- **Tìm số mũ:** Đưa hai vế về hai luỹ thừa có **cùng cơ số** rồi cho hai số mũ bằng nhau:
  $$\text{Nếu } a^m = a^n \quad (a > 1) \implies m = n.$$
- **Tìm cơ số:** Đưa hai vế về hai luỹ thừa có **cùng số mũ lẻ** (hoặc số tự nhiên dương với số mũ chẵn):
  $$\text{Nếu } x^n = a^n \quad (n \ge 1, x, a \in \mathbb{N}) \implies x = a.$$

#### Luyện tập 4.1
Tìm số tự nhiên $n$, biết:
a) $2^n = 16;$
b) $5^n = 125.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

a) Ta có $16 = 2^4.$ Do đó $2^n = 2^4 \implies n = 4.$
b) Ta có $125 = 5^3.$ Do đó $5^n = 5^3 \implies n = 3.$

</details>

#### Luyện tập 4.2
Tìm số tự nhiên $n$, biết:
a) $4 \cdot 7^n = 196;$
b) $10^{4-n} = 100.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

a) 
$$7^n = 196 : 4 = 49.$$
Vì $49 = 7^2$ nên $7^n = 7^2 \implies n = 2.$

b) 
$$10^{4-n} = 100 = 10^2.$$
Suy ra $4 - n = 2 \implies n = 4 - 2 = 2.$

</details>

#### Luyện tập 4.3
Tìm số tự nhiên $x$, biết:
a) $5x^2 - 7 = 38;$
b) $(x + 2)^3 = 27.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

a) 
$$5x^2 = 38 + 7 = 45$$
$$x^2 = 45 : 5 = 9.$$
Vì $9 = 3^2$ và $x \in \mathbb{N}$ nên $x = 3.$

b) 
$$(x + 2)^3 = 27 = 3^3.$$
Suy ra:
$$x + 2 = 3 \implies x = 3 - 2 = 1.$$

</details>

---

### Dạng 5. Bài toán thực tế sử dụng luỹ thừa

#### Luyện tập 5.1
Khoảng cách từ Trái Đất đến Mặt Trời khoảng $15 \cdot 10^7\text{ km}.$ Một tàu thám hiểm không gian bay với vận tốc đều $10^4\text{ km/h}.$ Hỏi tàu cần bao nhiêu giờ để đi hết quãng đường đó?

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Thời gian cần thiết để tàu bay hết quãng đường là:
$$\frac{15 \cdot 10^7}{10^4} = 15 \cdot 10^{7-4} = 15 \cdot 10^3 = 15000\text{ (giờ)}.$$
**Đáp số:** $15000$ giờ.

</details>

#### Luyện tập 5.2
Trong tin học, biết $1\text{ MB} = 2^{10}\text{ kB}$ và $1\text{ GB} = 2^{10}\text{ MB}.$ Hỏi một thẻ nhớ có dung lượng $4\text{ GB}$ thì chứa được bao nhiêu Kilobyte (kB)?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Ta có:
$$1\text{ GB} = 2^{10}\text{ MB} = 2^{10} \cdot 2^{10}\text{ kB} = 2^{20}\text{ kB}.$$
Do đó thẻ nhớ $4\text{ GB}$ có dung lượng là:
$$4 \cdot 2^{20} = 2^2 \cdot 2^{20} = 2^{22}\text{ (kB)} = 4194304\text{ kB}.$$
**Đáp số:** $4194304\text{ kB}.$

</details>

#### Luyện tập 5.3
Một nhà máy xử lý nước thải xử lý được $8 \cdot 10^6\text{ lít}$ nước mỗi ngày. Hỏi nhà máy sẽ xử lý được $64 \cdot 10^9\text{ lít}$ nước trong bao nhiêu ngày?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

Số ngày cần thiết là:
$$(64 \cdot 10^9) : (8 \cdot 10^6) = (64 : 8) \cdot 10^{9-6} = 8 \cdot 10^3 = 8000\text{ (ngày)}.$$
**Đáp số:** $8000$ ngày.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Viết các tích sau dưới dạng một luỹ thừa:
a) $7 \cdot 7 \cdot 7 \cdot 7 \cdot 7;$
b) $4 \cdot 2 \cdot 16 \cdot 8;$
c) $36 \cdot 36 \cdot 6.$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) Tích có $5$ thừa số $7$ nên:
$$7 \cdot 7 \cdot 7 \cdot 7 \cdot 7 = 7^5.$$

b) Đưa các thừa số về cơ số $2$: $4 = 2^2, 16 = 2^4, 8 = 2^3.$
$$4 \cdot 2 \cdot 16 \cdot 8 = 2^2 \cdot 2^1 \cdot 2^4 \cdot 2^3 = 2^{2+1+4+3} = 2^{10}.$$

c) Đưa các thừa số về cơ số $6$: $36 = 6^2.$
$$36 \cdot 36 \cdot 6 = 6^2 \cdot 6^2 \cdot 6^1 = 6^{2+2+1} = 6^5.$$

</details>

### Bài 2
Hoàn thành các ô trống trong bảng sau:

| Luỹ thừa | Cơ số | Số mũ | Giá trị của luỹ thừa |
| :---: | :---: | :---: | :---: |
| $8^2$ | $?$ | $?$ | $?$ |
| $?$ | $3$ | $4$ | $?$ |
| $6^?$ | $6$ | $?$ | $216$ |
| $1^k$ ($k \in \mathbb{N}^*$) | $1$ | $k$ | $?$ |

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

- Hàng 1: Cơ số $8$, số mũ $2$, giá trị $8^2 = 64.$
- Hàng 2: Cơ số $3$, số mũ $4 \Rightarrow$ Luỹ thừa $3^4$, giá trị $3^4 = 81.$
- Hàng 3: Vì $216 = 6^3$ nên số mũ là $3$, luỹ thừa là $6^3.$
- Hàng 4: Luỹ thừa $1^k = 1$ với mọi $k \in \mathbb{N}^*.$

Bảng hoàn thành:

| Luỹ thừa | Cơ số | Số mũ | Giá trị |
| :---: | :---: | :---: | :---: |
| $8^2$ | $8$ | $2$ | $64$ |
| $3^4$ | $3$ | $4$ | $81$ |
| $6^3$ | $6$ | $3$ | $216$ |
| $1^k$ | $1$ | $k$ | $1$ |

</details>

### Bài 3
Viết kết quả dưới dạng một luỹ thừa:
a) $8^{15} \cdot 8^{25};$
b) $23^8 \cdot 23 \cdot 23;$
c) $145^{18} : 145^{17};$
d) $81 : 3^2.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) $8^{15} \cdot 8^{25} = 8^{15+25} = 8^{40}.$
b) $23^8 \cdot 23 \cdot 23 = 23^{8+1+1} = 23^{10}.$
c) $145^{18} : 145^{17} = 145^{18-17} = 145^1 = 145.$
d) Ta có $81 = 3^4$ nên $81 : 3^2 = 3^4 : 3^2 = 3^{4-2} = 3^2.$

</details>

### Bài 4
a) Tìm tất cả các số chính phương có hai chữ số.
b) Trong các số tự nhiên từ $50$ đến $300$, có bao nhiêu số là lập phương của một số tự nhiên?

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) Lần lượt bình phương các số tự nhiên:
- $4^2 = 16;\; 5^2 = 25;\; 6^2 = 36;\; 7^2 = 49;\; 8^2 = 64;\; 9^2 = 81.$
Vậy các số chính phương có hai chữ số là: $16; 25; 36; 49; 64; 81.$

b) Xét lập phương của các số tự nhiên:
- $3^3 = 27 < 50.$
- $4^3 = 64$ ($50 \le 64 \le 300$).
- $5^3 = 125$ ($50 \le 125 \le 300$).
- $6^3 = 216$ ($50 \le 216 \le 300$).
- $7^3 = 343 > 300.$
Vậy có $3$ số thoả mãn là: $64; 125; 216.$

</details>

### Bài 5
Viết mỗi tổng sau thành bình phương của một số tự nhiên:
a) $1 + 3 + 5 + 7 + 9 + 11 + 13;$
b) $1^3 + 2^3 + 3^3 + 4^3.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) Dãy số $1; 3; 5; \dots; 13$ gồm $7$ số lẻ liên tiếp kể từ $1$.
Tổng bằng:
$$1 + 3 + 5 + \dots + 13 = 7^2 = 49.$$

b) Áp dụng tính chất tổng lập phương:
$$1^3 + 2^3 + 3^3 + 4^3 = (1 + 2 + 3 + 4)^2 = 10^2 = 100.$$

</details>

### Bài 6
Viết các số sau thành tổng các luỹ thừa của $10$:
a) $74290;$
b) $\overline{abcde}$ ($a \neq 0$).

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

a) $74290 = 7 \cdot 10000 + 4 \cdot 1000 + 2 \cdot 100 + 9 \cdot 10$
$$74290 = 7 \cdot 10^4 + 4 \cdot 10^3 + 2 \cdot 10^2 + 9 \cdot 10^1.$$

b) $\overline{abcde} = a \cdot 10^4 + b \cdot 10^3 + c \cdot 10^2 + d \cdot 10^1 + e \cdot 10^0.$

</details>

### Bài 7
Tìm số tự nhiên $n$, biết:
a) $5^n = 625;$
b) $2^{n+3} : 16 = 4.$

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

a) Ta có $625 = 5^4.$ Do đó $5^n = 5^4 \implies n = 4.$

b) Vì $16 = 2^4$ và $4 = 2^2$ nên biểu thức trở thành:
$$2^{n+3} : 2^4 = 2^2$$
$$2^{(n+3)-4} = 2^2$$
$$2^{n-1} = 2^2.$$
Suy ra $n - 1 = 2 \implies n = 3.$

</details>

### Bài 8
Tìm số tự nhiên $x$, biết:
a) $45 - 3x^2 = 18;$
b) $(10 - 2x)^3 = 64.$

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

a) 
$$3x^2 = 45 - 18 = 27$$
$$x^2 = 27 : 3 = 9 = 3^2.$$
Vì $x \in \mathbb{N}$ nên $x = 3.$

b) 
$$(10 - 2x)^3 = 64 = 4^3.$$
Suy ra:
$$10 - 2x = 4 \implies 2x = 10 - 4 = 6 \implies x = 3.$$

</details>

### Bài 9
Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng.
a) $3^3 = 9;$
b) $3^3 \cdot 3^4 = 9^7;$
c) $2^4 + 2^2 = 2^6;$
d) $b^0 = 1$ (với $b \neq 0$).

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

a) **Sai.** Vì $3^3 = 3 \cdot 3 \cdot 3 = 27$ (không phải $3 \cdot 3 = 9$).
Sửa lại: $3^3 = 27.$

b) **Sai.** Khi nhân hai luỹ thừa cùng cơ số, giữ nguyên cơ số và cộng số mũ: $3^3 \cdot 3^4 = 3^{3+4} = 3^7.$
Sửa lại: $3^3 \cdot 3^4 = 3^7.$

c) **Sai.** Phép cộng không được gộp số mũ.
Sửa lại: $2^4 + 2^2 = 16 + 4 = 20.$

d) **Đúng.** Theo quy ước, luỹ thừa với số mũ $0$ của một số khác $0$ luôn bằng $1.$

</details>

### Bài 10
Một tế bào sinh học cứ sau mỗi chu kỳ thời gian lại phân chia thành 3 tế bào con. Ban đầu có $1$ tế bào. Hỏi sau $6$ chu kỳ sẽ có tất cả bao nhiêu tế bào? Hãy viết kết quả dưới dạng một luỹ thừa của $3$ rồi tính giá trị cụ thể.

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

- Sau $1$ chu kỳ có: $1 \cdot 3 = 3^1$ tế bào.
- Sau $2$ chu kỳ có: $3 \cdot 3 = 3^2$ tế bào.
- ...
- Sau $6$ chu kỳ số lượng tế bào sẽ là:
$$3^6 = 729 \text{ (tế bào)}.$$
**Đáp số:** $3^6$ tế bào, tương ứng với $729$ tế bào.

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Thử sức với các câu hỏi kiểm tra nhanh để đánh giá mức độ tiếp thu bài học của bạn:

```quiz
type: choice
question: 'Tích $5 \cdot 5 \cdot 5 \cdot 5 \cdot 5$ viết dưới dạng luỹ thừa là:'
options:
  - '$5^4$'
  - '$5^5$'
  - '$25$'
  - '$5 \cdot 5$'
answer: 2
explanation: 'Tích gồm 5 thừa số 5 nên được viết thành $5^5.$'
```

```quiz
type: choice
question: 'Viết kết quả của phép tính $4^6 \cdot 4^3$ dưới dạng một luỹ thừa:'
options:
  - '$4^9$'
  - '$4^{18}$'
  - '$16^9$'
  - '$16^{18}$'
answer: 1
explanation: 'Giữ nguyên cơ số 4 và cộng số mũ: $4^6 \cdot 4^3 = 4^{6+3} = 4^9.$'
```

```quiz
type: choice
question: 'Kết quả của phép chia $10^{15} : 10^9$ là:'
options:
  - '$10^{24}$'
  - '$10^6$'
  - '$1^6$'
  - '$10^{135}$'
answer: 2
explanation: 'Giữ nguyên cơ số 10 và trừ số mũ: $10^{15} : 10^9 = 10^{15-9} = 10^6.$'
```

```quiz
type: choice
question: 'So sánh $4^2$ và $2^4$, khẳng định nào sau đây đúng?'
options:
  - '$4^2 < 2^4$'
  - '$4^2 = 2^4$'
  - '$4^2 > 2^4$'
  - 'Không thể so sánh'
answer: 2
explanation: 'Ta có $4^2 = 16$ và $2^4 = 16.$ Do đó $4^2 = 2^4.$'
```

```quiz
type: choice
question: 'Tìm số tự nhiên $n$ biết $3^n = 243$:'
options:
  - '$n = 4$'
  - '$n = 5$'
  - '$n = 6$'
  - '$n = 81$'
answer: 2
explanation: 'Vì $243 = 3^5$ nên $3^n = 3^5 \implies n = 5.$'
```

```quiz
type: choice
question: 'Tìm số tự nhiên $x$ biết $(x - 2)^2 = 16$:'
options:
  - '$x = 2$'
  - '$x = 4$'
  - '$x = 6$'
  - '$x = 8$'
answer: 3
explanation: 'Ta có $16 = 4^2$ nên $x - 2 = 4 \implies x = 6.$'
```

<details>
<summary><strong>Xem lời giải các câu còn lại của bài Kiểm tra 15 phút</strong></summary>

**Câu 1b.** $8 \cdot 8 \cdot 8 = 8^3.$

**Câu 3.** Tính giá trị:
a) $3^4 = 81.$
b) $2^6 = 64.$
c) $10^5 = 100000.$

**Câu 4a.** Các số chính phương nhỏ hơn $40$ là: $0; 1; 4; 9; 16; 25; 36.$

**Câu 5.** Viết tổng $1 + 3 + 5 + 7 + 9 + 11$ thành bình phương một số tự nhiên:
Tổng có $6$ số lẻ liên tiếp kể từ $1$ nên:
$$1 + 3 + 5 + 7 + 9 + 11 = 6^2 = 36.$$

**Câu 6.** Viết số $3456$ thành tổng các luỹ thừa của $10$:
$$3456 = 3 \cdot 10^3 + 4 \cdot 10^2 + 5 \cdot 10^1 + 6 \cdot 10^0.$$

**Câu 7b.** $10^n = 10000 = 10^4 \implies n = 4.$

**Câu 9.** Vận tốc ánh sáng khoảng $3 \cdot 10^5\text{ km/s}.$ Quãng đường đi trong $10^3$ giây là:
$$3 \cdot 10^5 \cdot 10^3 = 3 \cdot 10^{5+3} = 3 \cdot 10^8 = 300000000\text{ (km)}.$$

</details>

---

## E. Bài tập nâng cao

> **Phương pháp tìm chữ số tận cùng của một luỹ thừa:**
> Chữ số tận cùng của luỹ thừa lặp lại theo chu kì:
> - Các số có tận cùng là $0; 1; 5; 6$ khi nâng lên bất kì luỹ thừa nào (khác $0$) đều giữ nguyên chữ số tận cùng đó.
> - Số tận cùng là $9$: chu kì $2$ số ($9; 1$). Mũ lẻ tận cùng là $9$, mũ chẵn tận cùng là $1.$
> - Số tận cùng là $4$: chu kì $2$ số ($4; 6$). Mũ lẻ tận cùng là $4$, mũ chẵn tận cùng là $6.$
> - Số tận cùng là $2$: chu kì $4$ số ($2; 4; 8; 6$).
> - Số tận cùng là $3$: chu kì $4$ số ($3; 9; 7; 1$).
> - Số tận cùng là $7$: chu kì $4$ số ($7; 9; 3; 1$).
> - Số tận cùng là $8$: chu kì $4$ số ($8; 4; 2; 6$).
> *Quy tắc:* Muốn tìm chữ số tận cùng của $a^n$, ta chia số mũ $n$ cho độ dài chu kì rồi lấy số dư để xác định vị trí trong chu kì.

### Nâng cao 1
Tìm chữ số tận cùng của:
a) $99^{2024};$
b) $27^{103};$
c) $2^{2023}.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

a) Cơ số có chữ số tận cùng là $9$, số mũ $2024$ là số chẵn.
Do đó $99^{2024}$ có chữ số tận cùng bằng $1.$

b) Cơ số có chữ số tận cùng là $7$, chu kì lặp lại gồm $4$ số ($7; 9; 3; 1$).
Ta có $103 = 4 \cdot 25 + 3$ (chia $4$ dư $3$).
Vậy $27^{103}$ có chữ số tận cùng là số thứ $3$ trong chu kì, tức là chữ số $3.$

c) Cơ số $2$ có chu kì lặp lại gồm $4$ số ($2; 4; 8; 6$).
Ta có $2023 = 4 \cdot 505 + 3$ (chia $4$ dư $3$).
Vậy $2^{2023}$ có chữ số tận cùng là số thứ $3$ trong chu kì, tức là chữ số $8.$

</details>

### Nâng cao 2
Cho $S = 1 + 2 + 2^2 + 2^3 + \dots + 2^{25}.$ Tìm chữ số tận cùng của $S$, từ đó chứng minh rằng $S$ không phải là một số chính phương.

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

- Nhân cả hai vế với 2:
  $$2S = 2 + 2^2 + 2^3 + \dots + 2^{26}.$$
- Trừ từng vế:
  $$2S - S = (2 + 2^2 + \dots + 2^{26}) - (1 + 2 + \dots + 2^{25})$$
  $$S = 2^{26} - 1.$$
- Xét chữ số tận cùng của $2^{26}$:
  - Chu kì chữ số tận cùng của luỹ thừa cơ số 2 là $4$ số ($2; 4; 8; 6$).
  - Ta có $26 = 4 \cdot 6 + 2$ (chia 4 dư 2).
  - Do đó $2^{26}$ có chữ số tận cùng là số thứ 2 trong chu kì, tức là chữ số $4.$
- Suy ra $S = 2^{26} - 1$ có chữ số tận cùng là:
  $$4 - 1 = 3.$$
- Vì một số chính phương chỉ có thể tận cùng bằng một trong các chữ số $0; 1; 4; 5; 6; 9$ (không bao giờ tận cùng bằng 3), nên **$S$ không phải là số chính phương**.

</details>

### Nâng cao 3
Cho biết $1^3 + 2^3 + 3^3 + \dots + 10^3 = 3025.$ Hãy tính giá trị của tổng:
$$A = 3^3 + 6^3 + 9^3 + \dots + 30^3.$$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Nhận xét: Mỗi số hạng trong tổng $A$ đều có dạng:
$$(3k)^3 = 3^3 \cdot k^3 = 27 \cdot k^3.$$
Đặt $27$ ra ngoài làm thừa số chung:
$$A = 3^3 + 6^3 + 9^3 + \dots + 30^3$$
$$A = 3^3 \cdot 1^3 + 3^3 \cdot 2^3 + 3^3 \cdot 3^3 + \dots + 3^3 \cdot 10^3$$
$$A = 27 \cdot (1^3 + 2^3 + 3^3 + \dots + 10^3).$$

Thay giá trị đã cho vào:
$$A = 27 \cdot 3025 = 81675.$$
**Đáp số:** $81675.$

</details>

### Nâng cao 4
Tính giá trị của biểu thức:
$$C = (3^4 + 3^5 + 3^6) : (1 + 3 + 3^2).$$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Đặt $3^4$ ra ngoài làm thừa số chung ở số bị chia:
$$3^4 + 3^5 + 3^6 = 3^4 \cdot 1 + 3^4 \cdot 3^1 + 3^4 \cdot 3^2 = 3^4 \cdot (1 + 3 + 3^2).$$
Khi đó:
$$C = \frac{3^4 \cdot (1 + 3 + 3^2)}{1 + 3 + 3^2} = 3^4 = 81.$$
**Đáp số:** $81.$

</details>

### Nâng cao 5
Tìm số tự nhiên $x$, biết rằng: $(2x + 3)^2 = 289.$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Ta có $289 = 17^2.$
Vì $x$ là số tự nhiên nên $2x + 3 > 0$, do đó:
$$(2x + 3)^2 = 17^2$$
$$2x + 3 = 17$$
$$2x = 17 - 3 = 14$$
$$x = 14 : 2 = 7.$$

Thử lại: $(2 \cdot 7 + 3)^2 = 17^2 = 289$ (chính xác).
**Đáp số:** $x = 7.$

</details>
