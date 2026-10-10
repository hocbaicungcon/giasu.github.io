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
question: 'Giá trị của tích $6 \cdot 6 \cdot 6$ bằng bao nhiêu?'
options:
  - '18'
  - '36'
  - '216'
  - '126'
answer: 3
explanation: 'Ta có $6 \cdot 6 \cdot 6 = 36 \cdot 6 = 216.$'
```

```quiz
type: choice
question: 'Giá trị của tích $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2$ (5 thừa số 2) bằng bao nhiêu?'
options:
  - '10'
  - '16'
  - '32'
  - '64'
answer: 3
explanation: 'Ta có $2 \cdot 2 = 4$; $4 \cdot 2 = 8$; $8 \cdot 2 = 16$; $16 \cdot 2 = 32.$ Chú ý không nhầm với phép nhân $2 \cdot 5 = 10.$'
```

```quiz
type: choice
question: 'Tính nhanh tích $4 \cdot 37 \cdot 25$ ta được kết quả là:'
options:
  - '3700'
  - '370'
  - '7400'
  - '1480'
answer: 1
explanation: 'Áp dụng tính chất giao hoán và kết hợp: $4 \cdot 37 \cdot 25 = 37 \cdot (4 \cdot 25) = 37 \cdot 100 = 3700.$'
```

```quiz
type: choice
question: 'Tích $10 \cdot 10 \cdot 10 \cdot 10$ gồm 4 thừa số 10 có giá trị là:'
options:
  - '40'
  - '1000'
  - '10000'
  - '100000'
answer: 3
explanation: 'Tích của bốn số 10 bằng $10000$ (chữ số 1 kèm theo 4 chữ số 0 phía sau).'
```

<details>
<summary><strong>Xem lời giải các câu tự luận khởi động (Câu 4, Câu 5)</strong></summary>

**Câu 4.** Viết số $3524$ thành tổng giá trị các chữ số theo từng hàng (nghìn, trăm, chục, đơn vị):
$$3524 = 3 \cdot 1000 + 5 \cdot 100 + 2 \cdot 10 + 4.$$

**Câu 5.** Một tích gồm các thừa số đều bằng $7$ và có tất cả $5$ thừa số:
$$7 \cdot 7 \cdot 7 \cdot 7 \cdot 7.$$
Đây chính là hình ảnh trực quan dẫn tới khái niệm luỹ thừa $7^5$ mà chúng ta sẽ tìm hiểu ngay dưới đây.

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
  - $3 \cdot 3 \cdot 3 \cdot 3 \cdot 3 = 3^5$ (có $5$ thừa số $3$).
  - $6 \cdot 6 \cdot 6 = 6^3$ (có $3$ thừa số $6$).
- Tính giá trị:
  - $2^4 = 2 \cdot 2 \cdot 2 \cdot 2 = 16.$
  - $5^3 = 5 \cdot 5 \cdot 5 = 125.$
  - $10^2 = 10 \cdot 10 = 100.$

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
1. $2^3 \cdot 2^4 = 2^{3+4} = 2^7.$
2. $3^{10} : 3^7 = 3^{10-7} = 3^3.$
3. Viết $9 \cdot 27$ dưới dạng một luỹ thừa: Đưa về cùng cơ số $3$ ta có $9 = 3^2$ và $27 = 3^3$, do đó:
   $$9 \cdot 27 = 3^2 \cdot 3^3 = 3^{2+3} = 3^5.$$

---

### 3. Những sai lầm học sinh rất dễ mắc phải

| Sai lầm phổ biến | Sửa lại cho đúng | Giải thích |
| :--- | :--- | :--- |
| Nhầm luỹ thừa với phép nhân: $2^3 = 6$ | $2^3 = 2 \cdot 2 \cdot 2 = 8$ | Luỹ thừa là tích các thừa số giống nhau, không phải lấy cơ số nhân số mũ. |
| Nhân cả cơ số lẫn số mũ: $2^3 \cdot 2^4 = 4^7$ hoặc $2^{12}$ | $2^3 \cdot 2^4 = 2^{3+4} = 2^7$ | Giữ nguyên cơ số, chỉ cộng số mũ. |
| Tự ý cộng số mũ khi gặp phép cộng: $2^3 + 2^2 = 2^5$ | $2^3 + 2^2 = 8 + 4 = 12$ | Chỉ phép nhân/chia mới gộp số mũ, phép cộng phải tính giá trị từng luỹ thừa. |
| Quên quy ước luỹ thừa mũ $0$: $5^0 = 0$ | $5^0 = 1$ | Mọi số khác $0$ nâng lên luỹ thừa $0$ đều bằng $1.$ |

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
| $5^2$ | $?$ | $?$ | $?$ |
| $?$ | $9$ | $3$ | $?$ |
| $4^?$ | $4$ | $?$ | $64$ |
| $a^0$ ($a \in \mathbb{N}^*$) | $a$ | $0$ | $?$ |

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

- Hàng 1: Luỹ thừa $5^2$ có cơ số là $5$, số mũ là $2$, giá trị là $5^2 = 25.$
- Hàng 2: Cơ số $9$, số mũ $3 \Rightarrow$ Luỹ thừa $9^3$, giá trị là $9^3 = 9 \cdot 9 \cdot 9 = 729.$
- Hàng 3: Vì $4^3 = 4 \cdot 4 \cdot 4 = 64$ nên luỹ thừa là $4^3$, số mũ là $3.$
- Hàng 4: Luỹ thừa $a^0$ với $a \neq 0$ có giá trị bằng $1.$

Bảng hoàn chỉnh:

| Luỹ thừa | Cơ số | Số mũ | Giá trị |
| :---: | :---: | :---: | :---: |
| $5^2$ | $5$ | $2$ | $25$ |
| $9^3$ | $9$ | $3$ | $729$ |
| $4^3$ | $4$ | $3$ | $64$ |
| $a^0$ | $a$ | $0$ | $1$ |

</details>

#### Luyện tập 1.2
Viết kết quả mỗi phép tính sau dưới dạng một luỹ thừa:
a) $8^7 \cdot 8^3;$
b) $5 \cdot 5^3 \cdot 5 \cdot 5^{20};$
c) $21^{15} : 21^{10};$
d) $b^{20} : b^{10} : b^{10}$ ($b \neq 0$).

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) $8^7 \cdot 8^3 = 8^{7+3} = 8^{10}.$
b) $5 \cdot 5^3 \cdot 5 \cdot 5^{20} = 5^1 \cdot 5^3 \cdot 5^1 \cdot 5^{20} = 5^{1+3+1+20} = 5^{25}.$
c) $21^{15} : 21^{10} = 21^{15-10} = 21^5.$
d) $b^{20} : b^{10} : b^{10} = b^{20-10-10} = b^0 = 1.$

</details>

#### Luyện tập 1.3
Viết thành một luỹ thừa bằng cách đưa về cùng cơ số:
a) $9 \cdot 9 \cdot 9 \cdot 3 \cdot 3;$
b) $2^5 \cdot 4^3 \cdot 8^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) Ta có $9 = 3^2$ nên $9 \cdot 9 \cdot 9 = 3^2 \cdot 3^2 \cdot 3^2 = 3^6.$
Do đó:
$$9 \cdot 9 \cdot 9 \cdot 3 \cdot 3 = 3^6 \cdot 3^1 \cdot 3^1 = 3^{6+1+1} = 3^8.$$

b) Đưa về cơ số $2$:
- $4 = 2^2 \Rightarrow 4^3 = 2^2 \cdot 2^2 \cdot 2^2 = 2^6.$
- $8 = 2^3 \Rightarrow 8^2 = 2^3 \cdot 2^3 = 2^6.$
Vậy:
$$2^5 \cdot 4^3 \cdot 8^2 = 2^5 \cdot 2^6 \cdot 2^6 = 2^{5+6+6} = 2^{17}.$$

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

| $a$ | $1$ | $?$ | $3$ | $?$ |
| :---: | :---: | :---: | :---: | :---: |
| $a^2$ | $?$ | $0$ | $?$ | $?$ |
| $a^3$ | $?$ | $?$ | $?$ | $64$ |

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

- Cột 1: $a = 1 \Rightarrow a^2 = 1^2 = 1;\; a^3 = 1^3 = 1.$
- Cột 2: $a^2 = 0 \Rightarrow a = 0;\; a^3 = 0^3 = 0.$
- Cột 3: $a = 3 \Rightarrow a^2 = 3^2 = 9;\; a^3 = 3^3 = 27.$
- Cột 4: $a^3 = 64 = 4^3 \Rightarrow a = 4;\; a^2 = 4^2 = 16.$

Bảng kết quả:

| $a$ | $1$ | $0$ | $3$ | $4$ |
| :---: | :---: | :---: | :---: | :---: |
| $a^2$ | $1$ | $0$ | $9$ | $16$ |
| $a^3$ | $1$ | $0$ | $27$ | $64$ |

</details>

#### Luyện tập 2.2
a) Trong các số tự nhiên từ $1$ đến $40$, có bao nhiêu số chính phương?
b) Tìm tất cả các số tự nhiên có ba chữ số là lập phương của một số tự nhiên.

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) Các số chính phương từ $1$ đến $40$ là bình phương của các số tự nhiên từ $1$ đến $6$:
$$1^2 = 1;\; 2^2 = 4;\; 3^2 = 9;\; 4^2 = 16;\; 5^2 = 25;\; 6^2 = 36.$$
(Vì $7^2 = 49 > 40$). Vậy có $6$ số chính phương thỏa mãn.

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
a) $1 + 3 + 5 + 7;$
b) $1^3 + 2^3 + 3^3 + 4^3.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Tổng gồm $4$ số lẻ liên tiếp kể từ $1$, nên:
$$1 + 3 + 5 + 7 = 4^2 = 16.$$
*(Kiểm tra lại: $1 + 3 + 5 + 7 = 16 = 4^2$).*

b) Áp dụng công thức tổng các lập phương:
$$1^3 + 2^3 + 3^3 + 4^3 = (1 + 2 + 3 + 4)^2 = 10^2 = 100.$$
*(Kiểm tra lại: $1 + 8 + 27 + 64 = 100 = 10^2$).*

</details>

---

### Dạng 3. Viết một số tự nhiên thành tổng theo các luỹ thừa của 10

**Phương pháp giải:**
- **Bước 1:** Viết số đã cho thành tổng giá trị các chữ số theo từng hàng đơn vị, chục, trăm, nghìn, ...
- **Bước 2:** Thay các số $1; 10; 100; 1000; 10000; \dots$ bằng các luỹ thừa tương ứng $10^0; 10^1; 10^2; 10^3; 10^4; \dots$

#### Luyện tập 3.1
Viết số $17120$ thành tổng các giá trị chữ số của nó bằng cách dùng các luỹ thừa của $10.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

$$17120 = 1 \cdot 10000 + 7 \cdot 1000 + 1 \cdot 100 + 2 \cdot 10 + 0$$
$$17120 = 1 \cdot 10^4 + 7 \cdot 10^3 + 1 \cdot 10^2 + 2 \cdot 10^1.$$

</details>

#### Luyện tập 3.2
Viết số $30981$ thành tổng các giá trị chữ số của nó bằng cách dùng các luỹ thừa của $10.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

Chữ số hàng nghìn bằng $0$ nên ta có thể bỏ qua số hạng đó:
$$30981 = 3 \cdot 10000 + 0 \cdot 1000 + 9 \cdot 100 + 8 \cdot 10 + 1$$
$$30981 = 3 \cdot 10^4 + 9 \cdot 10^2 + 8 \cdot 10^1 + 1 \cdot 10^0 \quad (\text{hoặc } 3 \cdot 10^4 + 9 \cdot 10^2 + 8 \cdot 10 + 1).$$

</details>

#### Luyện tập 3.3
Viết các số sau thành tổng các luỹ thừa của $10$:
a) $917111;$
b) $\overline{abc}$ ($a \neq 0$).

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

a) $917111 = 9 \cdot 10^5 + 1 \cdot 10^4 + 7 \cdot 10^3 + 1 \cdot 10^2 + 1 \cdot 10^1 + 1 \cdot 10^0.$
b) $\overline{abc} = a \cdot 10^2 + b \cdot 10^1 + c \cdot 10^0$ (hoặc $a \cdot 10^2 + b \cdot 10 + c$).

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
a) $2^n = 8;$
b) $3^n = 81.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

a) Ta có $8 = 2^3.$ Do đó $2^n = 2^3 \implies n = 3.$
b) Ta có $81 = 3^4.$ Do đó $3^n = 3^4 \implies n = 4.$

</details>

#### Luyện tập 4.2
Tìm số tự nhiên $n$, biết:
a) $5 \cdot 9^n = 405;$
b) $10^{3-n} = 100.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

a) 
$$9^n = 405 : 5 = 81.$$
Vì $81 = 9^2$ nên $9^n = 9^2 \implies n = 2.$

b) 
$$10^{3-n} = 100 = 10^2.$$
Suy ra $3 - n = 2 \implies n = 3 - 2 = 1.$

</details>

#### Luyện tập 4.3
Tìm số tự nhiên $x$, biết:
a) $8x^2 - 5 = 67;$
b) $(x + 1)^3 = 8.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

a) 
$$8x^2 = 67 + 5$$
$$8x^2 = 72$$
$$x^2 = 72 : 8 = 9.$$
Vì $9 = 3^2$ và $x \in \mathbb{N}$ nên $x = 3.$

b) 
$$(x + 1)^3 = 8 = 2^3.$$
Suy ra:
$$x + 1 = 2 \implies x = 2 - 1 = 1.$$

</details>

---

### Dạng 5. Bài toán thực tế sử dụng luỹ thừa

#### Luyện tập 5.1
Vận tốc ánh sáng trong không khí khoảng $3 \cdot 10^8\text{ m/s}.$ Một máy bay không người lái bay với vận tốc cực đại $10^4\text{ m/s}.$ Hỏi vận tốc ánh sáng gấp bao nhiêu lần vận tốc cực đại của máy bay đó?

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Vận tốc ánh sáng gấp vận tốc cực đại của máy bay số lần là:
$$\frac{3 \cdot 10^8}{10^4} = 3 \cdot 10^{8-4} = 3 \cdot 10^4 = 30000 \text{ (lần)}.$$
**Đáp số:** $30000$ lần.

</details>

#### Luyện tập 5.2
Trong tin học, biết $1\text{ kB} = 2^{10}\text{ B}$ và $1\text{ MB} = 2^{10}\text{ kB}.$ Hỏi một tệp dữ liệu có dung lượng $5\text{ MB}$ thì bằng bao nhiêu Byte (B)?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Ta có:
$$1\text{ MB} = 2^{10}\text{ kB} = 2^{10} \cdot 2^{10}\text{ B} = 2^{10+10}\text{ B} = 2^{20}\text{ B}.$$
Do đó tệp dữ liệu $5\text{ MB}$ có dung lượng là:
$$5 \cdot 2^{20} = 5 \cdot 1048576 = 5242880\text{ (B)}.$$
**Đáp số:** $5242880\text{ B}.$

</details>

#### Luyện tập 5.3
Một lượng vi khuẩn phân huỷ được $6 \cdot 10^5\text{ gam}$ chất béo mỗi giờ. Hỏi lượng vi khuẩn đó sẽ phân huỷ hết $36 \cdot 10^9\text{ gam}$ chất béo trong bao lâu?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

Thời gian cần thiết để lượng vi khuẩn đó phân huỷ hết lượng chất béo là:
$$(36 \cdot 10^9) : (6 \cdot 10^5) = (36 : 6) \cdot 10^{9-5} = 6 \cdot 10^4 = 60000\text{ (giờ)}.$$
**Đáp số:** $60000$ giờ.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Viết các tích sau dưới dạng một luỹ thừa:
a) $6 \cdot 6 \cdot 6 \cdot 6 \cdot 6;$
b) $8 \cdot 2 \cdot 2 \cdot 16 \cdot 4;$
c) $25 \cdot 25 \cdot 25 \cdot 5.$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) Tích có $5$ thừa số $6$ nên:
$$6 \cdot 6 \cdot 6 \cdot 6 \cdot 6 = 6^5.$$

b) Đưa các thừa số về cơ số $2$: $8 = 2^3, 16 = 2^4, 4 = 2^2.$
$$8 \cdot 2 \cdot 2 \cdot 16 \cdot 4 = 2^3 \cdot 2^1 \cdot 2^1 \cdot 2^4 \cdot 2^2 = 2^{3+1+1+4+2} = 2^{11}.$$

c) Đưa các thừa số về cơ số $5$: $25 = 5^2.$
$$25 \cdot 25 \cdot 25 \cdot 5 = 5^2 \cdot 5^2 \cdot 5^2 \cdot 5^1 = 5^{2+2+2+1} = 5^7.$$

</details>

### Bài 2
Hoàn thành các ô trống trong bảng sau:

| Luỹ thừa | Cơ số | Số mũ | Giá trị của luỹ thừa |
| :---: | :---: | :---: | :---: |
| $7^2$ | $?$ | $?$ | $?$ |
| $?$ | $2$ | $6$ | $?$ |
| $5^?$ | $5$ | $?$ | $625$ |
| $1^n$ ($n \in \mathbb{N}^*$) | $1$ | $n$ | $?$ |

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

- Hàng 1: Cơ số $7$, số mũ $2$, giá trị $7^2 = 49.$
- Hàng 2: Cơ số $2$, số mũ $6 \Rightarrow$ Luỹ thừa $2^6$, giá trị $2^6 = 64.$
- Hàng 3: Vì $625 = 5^4$ nên số mũ là $4$, luỹ thừa là $5^4.$
- Hàng 4: Luỹ thừa $1^n = 1$ với mọi $n \in \mathbb{N}^*.$

Bảng hoàn thành:

| Luỹ thừa | Cơ số | Số mũ | Giá trị |
| :---: | :---: | :---: | :---: |
| $7^2$ | $7$ | $2$ | $49$ |
| $2^6$ | $2$ | $6$ | $64$ |
| $5^4$ | $5$ | $4$ | $625$ |
| $1^n$ | $1$ | $n$ | $1$ |

</details>

### Bài 3
Viết kết quả dưới dạng một luỹ thừa:
a) $9^{21} \cdot 9^{33};$
b) $19^{11} \cdot 19 \cdot 19;$
c) $123^{14} : 123^{13};$
d) $64 : 2^3.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) $9^{21} \cdot 9^{33} = 9^{21+33} = 9^{54}.$
b) $19^{11} \cdot 19 \cdot 19 = 19^{11+1+1} = 19^{13}.$
c) $123^{14} : 123^{13} = 123^{14-13} = 123^1 = 123.$
d) Ta có $64 = 2^6$ nên $64 : 2^3 = 2^6 : 2^3 = 2^{6-3} = 2^3.$

</details>

### Bài 4
a) Tìm tất cả các số chính phương có hai chữ số.
b) Trong các số tự nhiên từ $101$ đến $400$, có bao nhiêu số là lập phương của một số tự nhiên?

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) Lần lượt bình phương các số tự nhiên:
- $3^2 = 9$ (1 chữ số).
- $4^2 = 16;\; 5^2 = 25;\; 6^2 = 36;\; 7^2 = 49;\; 8^2 = 64;\; 9^2 = 81.$
- $10^2 = 100$ (3 chữ số).
Vậy các số chính phương có hai chữ số là: $16; 25; 36; 49; 64; 81.$

b) Xét lập phương của các số tự nhiên:
- $4^3 = 64 < 101.$
- $5^3 = 125$ ($101 \le 125 \le 400$).
- $6^3 = 216$ ($101 \le 216 \le 400$).
- $7^3 = 343$ ($101 \le 343 \le 400$).
- $8^3 = 512 > 400.$
Vậy có $3$ số thoả mãn là: $125; 216; 343.$

</details>

### Bài 5
Viết mỗi tổng sau thành bình phương của một số tự nhiên:
a) $1 + 3 + 5 + \dots + 11;$
b) $1^3 + 2^3 + 3^3 + 4^3 + 5^3.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) Dãy số $1; 3; 5; \dots; 11$ gồm các số lẻ liên tiếp.
Số số hạng của dãy là: $(11 - 1) : 2 + 1 = 6$ (số hạng).
Tổng của $6$ số lẻ liên tiếp kể từ $1$ bằng $6^2$:
$$1 + 3 + 5 + \dots + 11 = 6^2 = 36.$$

b) Áp dụng tính chất tổng lập phương:
$$1^3 + 2^3 + 3^3 + 4^3 + 5^3 = (1 + 2 + 3 + 4 + 5)^2 = 15^2 = 225.$$

</details>

### Bài 6
Viết các số sau thành tổng các luỹ thừa của $10$:
a) $65180;$
b) $\overline{abcd}$ ($a \neq 0$).

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

a) $65180 = 6 \cdot 10000 + 5 \cdot 1000 + 1 \cdot 100 + 8 \cdot 10$
$$65180 = 6 \cdot 10^4 + 5 \cdot 10^3 + 1 \cdot 10^2 + 8 \cdot 10^1.$$

b) $\overline{abcd} = a \cdot 1000 + b \cdot 100 + c \cdot 10 + d$
$$\overline{abcd} = a \cdot 10^3 + b \cdot 10^2 + c \cdot 10^1 + d \cdot 10^0.$$

</details>

### Bài 7
Tìm số tự nhiên $n$, biết:
a) $4^n = 256;$
b) $3^{n+2} : 27 = 3.$

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

a) Ta có $256 = 4 \cdot 4 \cdot 4 \cdot 4 = 4^4.$
Do đó $4^n = 4^4 \implies n = 4.$

b) Vì $27 = 3^3$ nên biểu thức trở thành:
$$3^{n+2} : 3^3 = 3^1$$
$$3^{(n+2)-3} = 3^1$$
$$3^{n-1} = 3^1.$$
Suy ra $n - 1 = 1 \implies n = 2.$

</details>

### Bài 8
Tìm số tự nhiên $x$, biết:
a) $30 - 2x^2 = 12;$
b) $(9 - 2x)^3 = 125.$

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

a) 
$$2x^2 = 30 - 12$$
$$2x^2 = 18$$
$$x^2 = 9 = 3^2.$$
Vì $x \in \mathbb{N}$ nên $x = 3.$

b) 
$$(9 - 2x)^3 = 125 = 5^3.$$
Suy ra:
$$9 - 2x = 5$$
$$2x = 9 - 5 = 4$$
$$x = 2.$$

</details>

### Bài 9
Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng.
a) $2^3 = 6;$
b) $2^3 \cdot 2^4 = 4^7;$
c) $3^4 + 3^2 = 3^6;$
d) $a^0 = 0$ (với $a \neq 0$).

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

a) **Sai.** Vì $2^3 = 2 \cdot 2 \cdot 2 = 8$ (không phải $2 \cdot 3 = 6$).
Sửa lại: $2^3 = 8.$

b) **Sai.** Khi nhân hai luỹ thừa cùng cơ số, giữ nguyên cơ số và cộng số mũ: $2^3 \cdot 2^4 = 2^{3+4} = 2^7.$
Sửa lại: $2^3 \cdot 2^4 = 2^7.$

c) **Sai.** Phép cộng không được gộp số mũ.
Sửa lại: $3^4 + 3^2 = 81 + 9 = 90.$

d) **Sai.** Theo quy ước, luỹ thừa với số mũ $0$ của một số khác $0$ luôn bằng $1.$
Sửa lại: $a^0 = 1$ (với $a \neq 0$).

</details>

### Bài 10
Một loại vi khuẩn cứ sau mỗi giờ lại phân đôi một lần (mỗi con tách thành hai con). Ban đầu có $1$ con. Hỏi sau $10$ giờ có bao nhiêu con vi khuẩn? Hãy viết kết quả dưới dạng một luỹ thừa của $2$ rồi tính giá trị cụ thể.

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

- Sau $1$ giờ có: $1 \cdot 2 = 2^1$ con.
- Sau $2$ giờ có: $2 \cdot 2 = 2^2$ con.
- Sau $3$ giờ có: $2^2 \cdot 2 = 2^3$ con.
- ...
- Cứ như vậy, sau $10$ giờ số lượng vi khuẩn sẽ là:
$$2^{10} = 1024 \text{ (con)}.$$
**Đáp số:** $2^{10}$ con, tương ứng với $1024$ con vi khuẩn.

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Thử sức với các câu hỏi kiểm tra nhanh để đánh giá mức độ tiếp thu bài học của bạn:

```quiz
type: choice
question: 'Tích $4 \cdot 4 \cdot 4 \cdot 4 \cdot 4 \cdot 4$ viết dưới dạng luỹ thừa là:'
options:
  - '$4^5$'
  - '$4^6$'
  - '$6^4$'
  - '$24$'
answer: 2
explanation: 'Tích gồm 6 thừa số 4 nên được viết thành $4^6.$'
```

```quiz
type: choice
question: 'Viết kết quả của phép tính $3^5 \cdot 3^4$ dưới dạng một luỹ thừa:'
options:
  - '$3^9$'
  - '$3^{20}$'
  - '$9^9$'
  - '$9^{20}$'
answer: 1
explanation: 'Giữ nguyên cơ số 3 và cộng số mũ: $3^5 \cdot 3^4 = 3^{5+4} = 3^9.$'
```

```quiz
type: choice
question: 'Kết quả của phép chia $10^{12} : 10^7$ là:'
options:
  - '$10^{19}$'
  - '$10^5$'
  - '$1^5$'
  - '$10^{84}$'
answer: 2
explanation: 'Giữ nguyên cơ số 10 và trừ số mũ: $10^{12} : 10^7 = 10^{12-7} = 10^5.$'
```

```quiz
type: choice
question: 'So sánh $3^2$ và $2^3$, khẳng định nào sau đây đúng?'
options:
  - '$3^2 < 2^3$'
  - '$3^2 = 2^3$'
  - '$3^2 > 2^3$'
  - 'Không thể so sánh'
answer: 3
explanation: 'Ta có $3^2 = 9$ và $2^3 = 8.$ Vì $9 > 8$ nên $3^2 > 2^3.$'
```

```quiz
type: choice
question: 'Tìm số tự nhiên $n$ biết $2^n = 32$:'
options:
  - '$n = 4$'
  - '$n = 5$'
  - '$n = 6$'
  - '$n = 16$'
answer: 2
explanation: 'Vì $32 = 2^5$ nên $2^n = 2^5 \implies n = 5.$'
```

```quiz
type: choice
question: 'Tìm số tự nhiên $x$ biết $(x - 1)^2 = 9$:'
options:
  - '$x = 2$'
  - '$x = 3$'
  - '$x = 4$'
  - '$x = 5$'
answer: 3
explanation: 'Ta có $9 = 3^2$ nên $x - 1 = 3 \implies x = 4.$'
```

<details>
<summary><strong>Xem lời giải các câu còn lại của bài Kiểm tra 15 phút</strong></summary>

**Câu 1b.** $7 \cdot 7 \cdot 7 = 7^3.$

**Câu 3.** Tính giá trị:
a) $2^5 = 32.$
b) $5^3 = 125.$
c) $10^4 = 10000.$

**Câu 4a.** Các số chính phương nhỏ hơn $30$ là: $0; 1; 4; 9; 16; 25.$

**Câu 5.** Viết tổng $1 + 3 + 5 + 7 + 9$ thành bình phương một số tự nhiên:
Tổng có $5$ số lẻ liên tiếp kể từ $1$ nên:
$$1 + 3 + 5 + 7 + 9 = 5^2 = 25.$$

**Câu 6.** Viết số $2358$ thành tổng các luỹ thừa của $10$:
$$2358 = 2 \cdot 10^3 + 3 \cdot 10^2 + 5 \cdot 10^1 + 8 \cdot 10^0.$$

**Câu 7b.** $10^n = 1000 = 10^3 \implies n = 3.$

**Câu 9.** Ánh sáng đi được khoảng $3 \cdot 10^5\text{ km}$ trong $1$ giây. Quãng đường ánh sáng đi được trong $10^2$ giây là:
$$3 \cdot 10^5 \cdot 10^2 = 3 \cdot 10^{5+2} = 3 \cdot 10^7 = 30000000\text{ (km)}.$$

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
a) $99^{2020};$
b) $17^{102};$
c) $2^{2021}.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

a) Cơ số có chữ số tận cùng là $9$, số mũ $2020$ là số chẵn.
Do đó $99^{2020}$ có chữ số tận cùng bằng $1.$

b) Cơ số có chữ số tận cùng là $7$, chu kì lặp lại gồm $4$ số ($7; 9; 3; 1$).
Ta có $102 = 4 \cdot 25 + 2$ (chia $4$ dư $2$).
Vậy $17^{102}$ có chữ số tận cùng là số thứ $2$ trong chu kì, tức là chữ số $9.$

c) Cơ số $2$ có chu kì lặp lại gồm $4$ số ($2; 4; 8; 6$).
Ta có $2021 = 4 \cdot 505 + 1$ (chia $4$ dư $1$).
Vậy $2^{2021}$ có chữ số tận cùng là số thứ $1$ trong chu kì, tức là chữ số $2.$

</details>

### Nâng cao 2
Cho $S = 1 + 3 + 3^2 + 3^3 + \dots + 3^{30}.$ Tìm chữ số tận cùng của $S$, từ đó chứng minh rằng $S$ không phải là một số chính phương.

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

Chữ số tận cùng của các luỹ thừa $3^0; 3^1; 3^2; 3^3; 3^4; \dots$ lần lượt lặp theo chu kì $4$ số là $(1; 3; 9; 7).$
Tổng của $4$ chữ số tận cùng trong một chu kì là:
$$1 + 3 + 9 + 7 = 20 \quad (\text{tận cùng là } 0).$$

Tổng $S$ có tất cả $31$ số hạng (từ $3^0$ đến $3^{30}$).
Ta có $31 = 4 \cdot 7 + 3$, tức là có $7$ nhóm chu kì đủ và dư ra $3$ số hạng cuối cùng:
$$S = (3^0 + 3^1 + \dots + 3^{27}) + (3^{28} + 3^{29} + 3^{30}).$$
- $7$ nhóm đầu mỗi nhóm có tổng tận cùng bằng $0$, nên tổng của chúng tận cùng bằng $0.$
- Ba số hạng còn lại: $3^{28}$ tận cùng là $1$, $3^{29}$ tận cùng là $3$, $3^{30}$ tận cùng là $9.$
Tổng tận cùng của $3$ số hạng này là $1 + 3 + 9 = 13$ (tận cùng là $3$).

Do đó, $S$ có chữ số tận cùng là $3.$

Mặt khác, một số chính phương chỉ có thể tận cùng bằng một trong các chữ số $0; 1; 4; 5; 6; 9$ (không bao giờ tận cùng bằng $2; 3; 7; 8$).
Vì $S$ tận cùng bằng $3$ nên **$S$ không phải là số chính phương**.

</details>

### Nâng cao 3
Cho biết $1^3 + 2^3 + 3^3 + \dots + 9^3 = 2025.$ Hãy tính giá trị của tổng:
$$A = 2^3 + 4^3 + 6^3 + \dots + 18^3.$$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Nhận xét: Mỗi số hạng trong tổng $A$ đều có dạng:
$$(2k)^3 = 2^3 \cdot k^3 = 8 \cdot k^3.$$
Đặt $8$ ra ngoài làm thừa số chung:
$$A = 2^3 + 4^3 + 6^3 + \dots + 18^3$$
$$A = 2^3 \cdot 1^3 + 2^3 \cdot 2^3 + 2^3 \cdot 3^3 + \dots + 2^3 \cdot 9^3$$
$$A = 8 \cdot (1^3 + 2^3 + 3^3 + \dots + 9^3).$$

Thay giá trị đã cho vào:
$$A = 8 \cdot 2025 = 16200.$$
**Đáp số:** $16200.$

</details>

### Nâng cao 4
Tính giá trị của biểu thức:
$$B = (10^2 + 11^2 + 12^2) : (13^2 + 14^2).$$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Tính riêng giá trị của số bị chia và số chia:
- Số bị chia:
$$10^2 + 11^2 + 12^2 = 100 + 121 + 144 = 365.$$
- Số chia:
$$13^2 + 14^2 = 169 + 196 = 365.$$

Do đó:
$$B = 365 : 365 = 1.$$
**Đáp số:** $1.$

</details>

### Nâng cao 5
Tìm số tự nhiên $x$, biết rằng: $(2x + 1)^2 = 625.$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Ta có $625 = 25^2.$
Vì $x$ là số tự nhiên nên $2x + 1 > 0$, do đó:
$$(2x + 1)^2 = 25^2$$
$$2x + 1 = 25$$
$$2x = 25 - 1 = 24$$
$$x = 24 : 2 = 12.$$

Thử lại: $(2 \cdot 12 + 1)^2 = 25^2 = 625$ (chính xác).
**Đáp số:** $x = 12.$

</details>
