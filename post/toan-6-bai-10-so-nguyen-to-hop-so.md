---
title: 'Toán 6 Bài 10: Số nguyên tố. Hợp số - Lý thuyết, cách nhận biết và bài tập chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 10 Số nguyên tố và hợp số: bảng số nguyên tố, phân tích ra thừa số nguyên tố, công thức tìm số ước, các bài toán thực tế và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số nguyên tố
  - Hợp số
  - Phân tích ra thừa số nguyên tố
  - Số ước của một số
  - Kết nối tri thức
grade: 6
---

# Bài 10. Số nguyên tố. Hợp số

Trong số học, các số nguyên tố được ví như "những viên gạch nguyên tử" xây dựng nên toàn bộ thế giới số tự nhiên, bởi vì mọi hợp số đều có thể phân tích thành tích của các số nguyên tố một cách duy nhất. Bài học này sẽ giúp các em nắm vững định nghĩa số nguyên tố, hợp số, phương pháp phân tích một số ra thừa số nguyên tố bằng sơ đồ cột và sơ đồ cây, cũng như công thức tính số lượng các ước của một số tự nhiên.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy hoàn thành các câu hỏi khởi động sau để nhận biết sự khác biệt thú vị về số lượng ước của các số tự nhiên:

```quiz
type: choice
question: 'Số nào sau đây chỉ có đúng hai ước là 1 và chính nó?'
options:
  - '8'
  - '11'
  - '15'
  - '21'
answer: 2
explanation: 'Ta có $\text{Ư}(11) = \{1; 11\}$ chỉ có đúng hai ước. Trong khi $\text{Ư}(8) = \{1; 2; 4; 8\}$, $\text{Ư}(15) = \{1; 3; 5; 15\}$, $\text{Ư}(21) = \{1; 3; 7; 21\}.$'
```

```quiz
type: choice
question: 'Không đặt phép chia, số 57 có chia hết cho 3 không?'
options:
  - 'Không chia hết vì tận cùng là 7'
  - 'Có chia hết vì tổng các chữ số là 12 chia hết cho 3'
  - 'Không chia hết vì là số lẻ'
  - 'Chưa đủ điều kiện kết luận'
answer: 2
explanation: 'Tổng các chữ số của 57 là $5 + 7 = 12\ \vdots\ 3$ nên $57\ \vdots\ 3.$'
```

```quiz
type: choice
question: 'Số 119 có chia hết cho 7 không? Nếu có thì $119 = 7 \cdot \square$?'
options:
  - 'Không chia hết'
  - 'Chia hết, $119 = 7 \cdot 13$'
  - 'Chia hết, $119 = 7 \cdot 17$'
  - 'Chia hết, $119 = 7 \cdot 19$'
answer: 3
explanation: 'Thực hiện phép chia: $119 : 7 = 17$ (chia hết không dư), do đó $119 = 7 \cdot 17.$'
```

```quiz
type: choice
question: 'Viết số 72 dưới dạng tích của các luỹ thừa cơ số 2 và cơ số 3:'
options:
  - '$72 = 2^2 \cdot 3^2$'
  - '$72 = 2^3 \cdot 3^2$'
  - '$72 = 2^2 \cdot 3^3$'
  - '$72 = 8 \cdot 9$'
answer: 2
explanation: 'Ta có $72 = 8 \cdot 9 = 2^3 \cdot 3^2.$'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Viết các tập hợp ước:
- $\text{Ư}(8) = \{1; 2; 4; 8\}$ ($4$ ước).
- $\text{Ư}(11) = \{1; 11\}$ ($2$ ước).
- $\text{Ư}(15) = \{1; 3; 5; 15\}$ ($4$ ước).
Trong ba số $8;\; 11;\; 15,$ số $11$ có ít ước nhất (chỉ có đúng $2$ ước).

**Câu 2.**
a) Số $57$ có tổng các chữ số là $5 + 7 = 12\ \vdots\ 3$ nên $57\ \vdots\ 3.$
b) Số $95$ có chữ số tận cùng là $5$ nên $95\ \vdots\ 5.$

**Câu 3.** Đặt phép chia: $119 : 7 = 17$ (không dư).
Vậy $119\ \vdots\ 7$ và viết được thành tích: $119 = 7 \cdot 17.$

**Câu 4.** Dùng luỹ thừa:
a) $16 = 2 \cdot 2 \cdot 2 \cdot 2 = 2^4.$
b) $72 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 = 2^3 \cdot 3^2.$

**Câu 5.** Các số chỉ có đúng hai ước tương tự như số $11$ là: $2;\; 3;\; 5;\; 7;\; 13;\; 17;\; 19;\; \dots$ Những số đặc biệt này được gọi là **số nguyên tố**.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Số nguyên tố và hợp số

> **Định nghĩa:**
> - **Số nguyên tố** là số tự nhiên lớn hơn $1,$ chỉ có hai ước là $1$ và chính nó.
> - **Hợp số** là số tự nhiên lớn hơn $1,$ có nhiều hơn hai ước (tức là ngoài $1$ và chính nó, còn có ít nhất một ước khác).

**Cách kiểm tra một số $a > 1$ có phải là số nguyên tố hay không:**
Ta chia thử $a$ lần lượt cho các số nguyên tố từ nhỏ đến lớn: $2;\; 3;\; 5;\; 7;\; 11;\; 13;\; \dots$
- Dùng ngay dấu hiệu chia hết cho $2;\; 3;\; 5$ (Bài 9) để loại trừ nhanh.
- Nếu gặp một phép chia hết $\implies a$ là **hợp số**.
- Nếu chia mãi mà vẫn không chia hết cho số nguyên tố nào, đến khi **thương nhỏ hơn số chia** thì dừng lại $\implies a$ là **số nguyên tố**.

> **Bảng 25 số nguyên tố nhỏ hơn 100:**
>
> | $2$ | $3$ | $5$ | $7$ | $11$ |
> | :---: | :---: | :---: | :---: | :---: |
> | $13$ | $17$ | $19$ | $23$ | $29$ |
> | $31$ | $37$ | $41$ | $43$ | $47$ |
> | $53$ | $59$ | $61$ | $67$ | $71$ |
> | $73$ | $79$ | $83$ | $89$ | $97$ |

**Ví dụ 1:** Các số $65;\; 47;\; 119$ là số nguyên tố hay hợp số?

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

- **Xét số $65$:** Số $65$ có chữ số tận cùng là $5$ nên $65\ \vdots\ 5.$ Ngoài $1$ và $65,$ số $65$ còn có ước là $5$ (và $13$). Vậy $65$ là **hợp số**.
- **Xét số $47$:**
  - $47$ là số lẻ nên $47 \not\vdots\ 2.$
  - Tổng các chữ số $4 + 7 = 11 \not\vdots\ 3$ nên $47 \not\vdots\ 3.$
  - Tận cùng khác $0$ và $5$ nên $47 \not\vdots\ 5.$
  - Chia thử cho $7$: $47 : 7 = 6$ (dư $5$). Nhận thấy thương $6$ đã nhỏ hơn số chia $7,$ ta được phép dừng lại.
  Vậy $47$ chỉ có đúng hai ước là $1$ và $47,$ nên $47$ là **số nguyên tố**.
- **Xét số $119$:**
  - $119$ là số lẻ, không chia hết cho $2.$
  - Tổng chữ số $1 + 1 + 9 = 11 \not\vdots\ 3.$
  - Không tận cùng $0$ hoặc $5.$
  - Chia thử tiếp cho $7$: $119 : 7 = 17$ (chia hết). Vậy $119$ có ước là $7$ và $17,$ do đó $119$ là **hợp số**.

</details>

---

### 2. Phân tích một số ra thừa số nguyên tố

> **Khái niệm:** Phân tích một số tự nhiên lớn hơn $1$ ra thừa số nguyên tố là viết số đó dưới dạng một tích các thừa số nguyên tố.
> - Bản thân mỗi số nguyên tố khi phân tích ra thừa số nguyên tố là chính nó.
> - Mọi hợp số đều phân tích được ra thừa số nguyên tố.
> - Kết quả phân tích thường được viết gọn dưới dạng luỹ thừa với các thừa số nguyên tố xếp theo thứ tự từ nhỏ đến lớn.

Có hai cách trình bày phân tích: **Sơ đồ cột** và **Sơ đồ cây**. Cùng phân tích số $84$:

```
Sơ đồ cột:             Sơ đồ cây:
  84 | 2                     84
  42 | 2                    /  \
  21 | 3                   4    21
   7 | 7                  / \   / \
   1 |                   2   2 3   7
```

Cả hai cách đều cho cùng kết quả:
$$84 = 2 \cdot 2 \cdot 3 \cdot 7 = 2^2 \cdot 3 \cdot 7.$$

**Ví dụ 2:** Phân tích số $126$ ra thừa số nguyên tố theo sơ đồ cột rồi viết kết quả gọn bằng luỹ thừa.

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

Chia liên tiếp cho các số nguyên tố nhỏ nhất:
- $126 : 2 = 63$
- $63 : 3 = 21$
- $21 : 3 = 7$
- $7 : 7 = 1$

Trình bày theo sơ đồ cột:
$$\begin{array}{r|l}
126 & 2 \\
63 & 3 \\
21 & 3 \\
7 & 7 \\
1 & 
\end{array}$$

Vậy $126 = 2 \cdot 3^2 \cdot 7.$
*(Thử lại bằng phép nhân: $2 \cdot 9 \cdot 7 = 126$).*

</details>

---

### 3. Ba số đặc biệt: Số 0, Số 1 và Số 2

> [!NOTE] Ba số cần ghi nhớ đặc biệt:
> - **Số 0 và số 1:** Không phải là số nguyên tố, cũng không phải là hợp số (vì định nghĩa số nguyên tố và hợp số đều yêu cầu số tự nhiên phải lớn hơn 1).
> - **Số 2:** Là **số nguyên tố chẵn duy nhất**, đồng thời là số nguyên tố nhỏ nhất. Tất cả các số chẵn lớn hơn 2 đều có ít nhất ba ước ($1;$ $2$ và chính nó) nên đều là hợp số.

**Ví dụ 3:** Phân loại các số $0;\; 1;\; 2;\; 15;\; 23;\; 87$ vào ba nhóm: số nguyên tố, hợp số, hoặc không thuộc hai nhóm trên.

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

- **Không là số nguyên tố, không là hợp số:** $0$ và $1.$
- **Số nguyên tố:**
  - $2$ (số nguyên tố chẵn duy nhất).
  - $23$ (chỉ có hai ước là $1$ và $23$).
- **Hợp số:**
  - $15$ (vì $15 = 3 \cdot 5,$ có các ước $1; 3; 5; 15$).
  - $87$ (tổng các chữ số $8 + 7 = 15\ \vdots\ 3 \implies 87 = 3 \cdot 29$).

</details>

---

### 4. Bảng tổng hợp các sai lầm và "bẫy" kinh điển

| Lỗi sai thường gặp | Sửa lại cho đúng | Giải thích quy tắc |
| :--- | :--- | :--- |
| Nhầm lẫn: *"Mọi số nguyên tố đều là số lẻ"* | Số $2$ là số nguyên tố chẵn duy nhất | Phát biểu đúng: *"Mọi số nguyên tố lớn hơn 2 đều là số lẻ"*. |
| Xếp số $0$ hoặc $1$ vào nhóm số nguyên tố / hợp số | Số $0$ và số $1$ đứng riêng | Cả hai định nghĩa đều bắt đầu bằng điều kiện: *"Số tự nhiên lớn hơn 1..."* |
| Nhầm các "hợp số ngụy trang" là số nguyên tố: $51;\; 57;\; 87;\; 91;\; 119$ | $51 = 3 \cdot 17$<br>$57 = 3 \cdot 19$<br>$87 = 3 \cdot 29$<br>$91 = 7 \cdot 13$<br>$119 = 7 \cdot 17$ | Đây là các hợp số rất dễ bị nhầm là số nguyên tố. Phải luôn nhớ kiểm tra tổng chữ số (chia hết cho 3) hoặc chia thử cho 7. |
| Viết phân tích ra thừa số nguyên tố nhưng còn chứa hợp số: $72 = 8 \cdot 9$ | $72 = 2^3 \cdot 3^2$ | Các cơ số bắt buộc phải là **số nguyên tố**. Viết $8 \cdot 9$ chưa hoàn thành vì $8$ và $9$ đều là hợp số. |

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Nhận biết số nguyên tố và hợp số

**Phương pháp giải:**
- Số đó có lớn hơn 1 không?
- Kiểm tra tính chia hết: Dùng dấu hiệu chia hết cho $2, 5, 3$ trước. Nếu không chia hết, chia thử lần lượt cho các số nguyên tố $7, 11, 13, \dots$ đến khi thương nhỏ hơn số chia thì dừng.
- Kết luận: Chỉ có 2 ước $\to$ số nguyên tố; Có từ 3 ước trở lên $\to$ hợp số (chỉ ra một ước khác 1 và chính nó).

#### Luyện tập 1.1
Trong các số sau, số nào là số nguyên tố, số nào là hợp số?
$$42;\quad 19;\quad 27;\quad 37;\quad 73;\quad 85;\quad 51.$$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

- **Các số nguyên tố:**
  - $19$ (chỉ có hai ước $1$ và $19$).
  - $37$ (chỉ có hai ước $1$ và $37$).
  - $73$ (chia thử: $73 : 7 = 10$ dư $3;$ $73 : 11 = 6$ dư $7,$ thương $6 < 11$ nên dừng $\implies$ số nguyên tố).
- **Các hợp số:**
  - $42\ \vdots\ 2$ (số chẵn lớn hơn 2).
  - $27 = 3^3\ \vdots\ 3.$
  - $85\ \vdots\ 5$ (tận cùng bằng 5).
  - $51$ có tổng chữ số $5 + 1 = 6\ \vdots\ 3$ nên $51 = 3 \cdot 17$ (hợp số).

</details>

#### Luyện tập 1.2
Trong các số sau, số nào là số nguyên tố, số nào là hợp số?
$$26;\quad 23;\quad 35;\quad 41;\quad 87;\quad 67;\quad 91.$$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

- **Các số nguyên tố:**
  - $23$
  - $41$
  - $67$ (chia thử cho 7: $67 : 7 = 9$ dư $4;$ cho 11: $67 : 11 = 6$ dư $1,$ thương $6 < 11$ nên dừng).
- **Các hợp số:**
  - $26\ \vdots\ 2.$
  - $35\ \vdots\ 5.$
  - $87$ có $8 + 7 = 15\ \vdots\ 3$ nên $87 = 3 \cdot 29.$
  - $91 = 7 \cdot 13$ (chia hết cho 7).

</details>

#### Luyện tập 1.3
Các số $57;\; 89;\; 111;\; 119$ là số nguyên tố hay hợp số?

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

- $57$ có $5 + 7 = 12\ \vdots\ 3 \implies 57 = 3 \cdot 19$ là **hợp số**.
- $89$: Số lẻ, tổng chữ số $17 \not\vdots\ 3,$ không tận cùng $0, 5;$ chia thử cho $7$: $89 : 7 = 12$ dư $5;$ chia cho $11$: $89 : 11 = 8$ dư $1$ (thương $8 < 11$ nên dừng). Vậy $89$ là **số nguyên tố**.
- $111$ có $1 + 1 + 1 = 3\ \vdots\ 3 \implies 111 = 3 \cdot 37$ là **hợp số**.
- $119$: Chia thử $119 : 7 = 17 \implies 119 = 7 \cdot 17$ là **hợp số**.

</details>

---

### Dạng 2. Chứng minh một tổng (hiệu) là hợp số

**Phương pháp giải:**
- Tìm một số nguyên tố $m > 1$ sao cho tất cả các số hạng trong tổng (hiệu) đều chia hết cho $m.$
- Khi đó tổng (hiệu) chia hết cho $m.$
- Nếu tổng (hiệu) lớn hơn $m$ thì tổng (hiệu) có ít nhất ba ước: $1;$ $m$ và chính nó $\implies$ kết luận là hợp số.
- *Mẹo nhận biết nhanh:* Tổng của hai số lẻ luôn là số chẵn $\implies$ chia hết cho $2.$

#### Luyện tập 2.1
Các tổng sau đây là số nguyên tố hay hợp số?
a) $A = 48 + 54;$
b) $B = 234 + 567 + 891;$
c) $C = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 + 11 \cdot 13 \cdot 17;$
d) $D = 9 \cdot 11 \cdot 13 + 15 \cdot 17 \cdot 19.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) Vì $48\ \vdots\ 2$ và $54\ \vdots\ 2$ nên $A\ \vdots\ 2.$ Mặt khác $A = 102 > 2$ nên $A$ là **hợp số**.

b) Tổng các chữ số: $234 \to 9\ \vdots\ 9;\; 567 \to 18\ \vdots\ 9;\; 891 \to 18\ \vdots\ 9.$
Cả ba số đều chia hết cho $9$ nên $B\ \vdots\ 9.$ Vì $B > 9$ nên $B$ là **hợp số**.

c) Tích thứ nhất chứa thừa số $11,$ tích thứ hai chứa thừa số $11.$
Do đó cả hai số hạng đều chia hết cho $11 \implies C\ \vdots\ 11.$ Vì $C > 11$ nên $C$ là **hợp số**.

d) Tích $9 \cdot 11 \cdot 13$ là tích các số lẻ nên là số lẻ.
Tích $15 \cdot 17 \cdot 19$ cũng là số lẻ.
Tổng của hai số lẻ là một số chẵn $\implies D\ \vdots\ 2.$ Vì $D > 2$ nên $D$ là **hợp số**.

</details>

#### Luyện tập 2.2
Các biểu thức sau có giá trị là số nguyên tố hay hợp số?
a) $E = 5 \cdot 7 \cdot 9 - 2 \cdot 5 \cdot 11;$
b) $F = 3 \cdot 5 \cdot 7 + 11 \cdot 13 \cdot 15.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) Cả hai tích đều chứa thừa số $5$ nên $E\ \vdots\ 5.$
Ta có $E = 315 - 110 = 205 > 5.$
Vì $E > 5$ và $E\ \vdots\ 5$ nên $E$ là **hợp số**.

b) Tích đầu có thừa số $3\ \vdots\ 3.$ Tích sau có thừa số $15 = 3 \cdot 5\ \vdots\ 3.$
Do đó cả hai số hạng đều chia hết cho $3 \implies F\ \vdots\ 3.$
Vì $F > 3$ nên $F$ là **hợp số**.

</details>

---

### Dạng 3. Phân tích một số ra thừa số nguyên tố

**Phương pháp giải:**
- Dùng sơ đồ cột: Lấy số chia cho số nguyên tố nhỏ nhất có thể ($2 \to 3 \to 5 \to 7 \dots$).
- Viết kết quả dưới dạng luỹ thừa với các thừa số tăng dần: $a^m \cdot b^n \cdot c^p \dots$

#### Luyện tập 3.1
Phân tích các số sau ra thừa số nguyên tố:
$$54;\quad 70;\quad 96;\quad 140;\quad 300.$$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

- $54 = 2 \cdot 27 = 2 \cdot 3^3.$
- $70 = 2 \cdot 5 \cdot 7.$
- $96 = 2^5 \cdot 3$ (vì $96 : 2 = 48; 48 : 2 = 24; 24 : 2 = 12; 12 : 2 = 6; 6 : 2 = 3$).
- $140 = 2^2 \cdot 5 \cdot 7.$
- $300 = 2^2 \cdot 3 \cdot 5^2$ (vì $300 = 3 \cdot 100 = 3 \cdot 2^2 \cdot 5^2$).

</details>

#### Luyện tập 3.2
Phân tích các biểu thức sau ra thừa số nguyên tố:
a) $M = 3^4 \cdot 6^2;$
b) $N = 2^5 \cdot 10^3.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) Ta có $6 = 2 \cdot 3 \implies 6^2 = (2 \cdot 3)^2 = 2^2 \cdot 3^2.$
Do đó:
$$M = 3^4 \cdot 2^2 \cdot 3^2 = 2^2 \cdot 3^{4+2} = 2^2 \cdot 3^6.$$

b) Ta có $10 = 2 \cdot 5 \implies 10^3 = (2 \cdot 5)^3 = 2^3 \cdot 5^3.$
Do đó:
$$N = 2^5 \cdot 2^3 \cdot 5^3 = 2^{5+3} \cdot 5^3 = 2^8 \cdot 5^3.$$

</details>

---

### Dạng 4. Tìm số lượng các ước của một số tự nhiên

> **Công thức tính số lượng các ước:**
> Nếu số tự nhiên $A$ được phân tích ra thừa số nguyên tố dạng:
> $$A = a^m \cdot b^n \cdot c^p \dots$$
> (trong đó $a, b, c$ là các số nguyên tố đôi một khác nhau), thì **số lượng tất cả các ước của $A$** bằng:
> $$\text{Số ước của } A = (m + 1)(n + 1)(p + 1)\dots$$

#### Luyện tập 4.1
Tìm số lượng các ước của các số sau:
a) $54;$
b) $70;$
c) $96;$
d) $300.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

Dùng kết quả phân tích ở Dạng 3:
a) $54 = 2^1 \cdot 3^3 \implies$ Số ước là: $(1 + 1)(3 + 1) = 2 \cdot 4 = 8$ ước.
b) $70 = 2^1 \cdot 5^1 \cdot 7^1 \implies$ Số ước là: $(1 + 1)(1 + 1)(1 + 1) = 2 \cdot 2 \cdot 2 = 8$ ước.
c) $96 = 2^5 \cdot 3^1 \implies$ Số ước là: $(5 + 1)(1 + 1) = 6 \cdot 2 = 12$ ước.
d) $300 = 2^2 \cdot 3^1 \cdot 5^2 \implies$ Số ước là: $(2 + 1)(1 + 1)(2 + 1) = 3 \cdot 2 \cdot 3 = 18$ ước.

</details>

#### Luyện tập 4.2
Không liệt kê, hãy tính số lượng ước của số $1000$ và số $2025.$ Sau đó, với số $28,$ hãy tính số lượng ước bằng công thức rồi liệt kê toàn bộ các ước để kiểm chứng.

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

- Với số $1000$: $1000 = 10^3 = (2 \cdot 5)^3 = 2^3 \cdot 5^3.$
  Số lượng ước là: $(3 + 1)(3 + 1) = 4 \cdot 4 = 16$ ước.
- Với số $2025$: $2025 = 5^2 \cdot 81 = 3^4 \cdot 5^2.$
  Số lượng ước là: $(4 + 1)(2 + 1) = 5 \cdot 3 = 15$ ước.
- Với số $28$:
  - Phân tích: $28 = 2^2 \cdot 7^1.$
  - Số lượng ước theo công thức: $(2 + 1)(1 + 1) = 3 \cdot 2 = 6$ ước.
  - Liệt kê kiểm chứng: $\text{Ư}(28) = \{1; 2; 4; 7; 14; 28\}$ — đúng chính xác $6$ ước.

</details>

---

### Dạng 5. Bài toán thực tế: Chia đều nhờ phân tích ra thừa số nguyên tố

**Phương pháp giải:**
- Số người (hoặc vật) mỗi nhóm phải là ước của tổng số.
- Phân tích tổng số ra thừa số nguyên tố $\to$ ghép các thừa số để liệt kê đầy đủ tất cả các ước $\to$ chọn các ước thỏa mãn điều kiện đề bài.

#### Luyện tập 5.1
Một lớp học có $40$ học sinh. Thầy giáo muốn chia đều cả lớp thành các nhóm học tập sao cho mỗi nhóm có từ $4$ đến $10$ học sinh. Hỏi thầy giáo có bao nhiêu cách chia nhóm?

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Số học sinh trong mỗi nhóm phải là ước của $40.$
Phân tích: $40 = 2^3 \cdot 5.$
Số lượng ước của $40$ là: $(3 + 1)(1 + 1) = 8$ ước.
Liệt kê đủ $8$ ước: $\text{Ư}(40) = \{1; 2; 4; 5; 8; 10; 20; 40\}.$
Các ước nằm trong khoảng từ $4$ đến $10$ là: $4;\; 5;\; 8;\; 10.$
Vậy thầy giáo có **$4$ cách chia nhóm**:
1. Nhóm $4$ học sinh ($10$ nhóm).
2. Nhóm $5$ học sinh ($8$ nhóm).
3. Nhóm $8$ học sinh ($5$ nhóm).
4. Nhóm $10$ học sinh ($4$ nhóm).

</details>

#### Luyện tập 5.2
Một thư viện trường học nhận về $120$ cuốn sách tham khảo môn Toán 6. Cô phụ trách thư viện muốn xếp đều số sách này vào các giá sách, mỗi giá xếp được từ $10$ đến $25$ cuốn. Hỏi có bao nhiêu cách xếp sách?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Số sách ở mỗi giá phải là ước của $120.$
Phân tích: $120 = 2^3 \cdot 3 \cdot 5.$
Số ước của $120$ là: $(3 + 1)(1 + 1)(1 + 1) = 16$ ước.
Các ước của $120$ nằm trong khoảng từ $10$ đến $25$ là: $10;\; 12;\; 15;\; 20;\; 24.$
Vậy cô phụ trách có **$5$ cách xếp sách** thỏa mãn yêu cầu.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Trong các số sau: $0;\; 1;\; 13;\; 17;\; 29;\; 51;\; 77;\; 83,$ số nào là số nguyên tố, số nào là hợp số, số nào không thuộc cả hai nhóm?

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

- **Không thuộc cả hai nhóm:** $0$ và $1.$
- **Số nguyên tố:** $13;\; 17;\; 29;\; 83.$
- **Hợp số:**
  - $51$ (vì $51 = 3 \cdot 17$).
  - $77$ (vì $77 = 7 \cdot 11$).

</details>

### Bài 2
Hãy liệt kê tất cả các số nguyên tố lớn hơn $30$ và nhỏ hơn $50.$

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

Xét các số từ $31$ đến $49$:
- Loại các số chẵn và số tận cùng là $5.$
- Còn lại: $31;\; 33;\; 37;\; 39;\; 41;\; 43;\; 47;\; 49.$
- Loại tiếp các hợp số: $33\ \vdots\ 3;\; 39\ \vdots\ 3;\; 49 = 7^2.$
Các số nguyên tố cần tìm là: $31;\; 37;\; 41;\; 43;\; 47.$

</details>

### Bài 3
Các tổng sau đây là số nguyên tố hay hợp số?
a) $A = 27 + 63;$
b) $B = 15 + 35 + 55;$
c) $C = 2 \cdot 5 \cdot 7 + 9 \cdot 11 \cdot 13;$
d) $D = 13 \cdot 17 \cdot 19 + 23.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) Cả $27$ và $63$ đều chia hết cho $9$ nên $A\ \vdots\ 9.$ Vì $A > 9$ nên $A$ là **hợp số**.
b) Cả ba số đều chia hết cho $5$ nên $B\ \vdots\ 5.$ Vì $B > 5$ nên $B$ là **hợp số**.
c) Tích đầu chẵn ($2 \cdot 5 \cdot 7\ \vdots\ 2$), tích sau lẻ ($9 \cdot 11 \cdot 13$). Tổng của số chẵn và số lẻ là số lẻ, ta tính trực tiếp:
$$C = 70 + 1287 = 1357.$$
Xét $1357$: không chia hết cho $2, 3, 5.$ Chia thử cho $7$: $1357 : 7 = 193$ dư $6.$ Chia thử cho $11$: $1357 : 11 = 123$ dư $4.$ Chia thử cho $23$: $1357 : 23 = 59.$
Vì $1357 = 23 \cdot 59$ nên $C$ là **hợp số**.
d) $13 \cdot 17 \cdot 19$ là số lẻ, cộng với số lẻ $23$ sẽ được số chẵn $\implies D\ \vdots\ 2.$ Vì $D > 2$ nên $D$ là **hợp số**.

</details>

### Bài 4
Phân tích các số sau ra thừa số nguyên tố:
$$75;\quad 112;\quad 150;\quad 252.$$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

- $75 = 3 \cdot 5^2.$
- $112 = 2^4 \cdot 7.$
- $150 = 2 \cdot 3 \cdot 5^2.$
- $252 = 2^2 \cdot 3^2 \cdot 7.$

</details>

### Bài 5
Tìm số lượng các ước của các số trong Bài 4 ($75;\; 112;\; 150;\; 252$).

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

- Số $75 = 3^1 \cdot 5^2 \implies (1 + 1)(2 + 1) = 2 \cdot 3 = 6$ ước.
- Số $112 = 2^4 \cdot 7^1 \implies (4 + 1)(1 + 1) = 5 \cdot 2 = 10$ ước.
- Số $150 = 2^1 \cdot 3^1 \cdot 5^2 \implies (1 + 1)(1 + 1)(2 + 1) = 2 \cdot 2 \cdot 3 = 12$ ước.
- Số $252 = 2^2 \cdot 3^2 \cdot 7^1 \implies (2 + 1)(2 + 1)(1 + 1) = 3 \cdot 3 \cdot 2 = 18$ ước.

</details>

### Bài 6
Tìm các ước nguyên tố của số $72$ và số $90.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

- Phân tích $72 = 2^3 \cdot 3^2 \implies$ Các ước nguyên tố của $72$ là $2$ và $3.$
- Phân tích $90 = 2 \cdot 3^2 \cdot 5 \implies$ Các ước nguyên tố của $90$ là $2;\; 3$ và $5.$

</details>

### Bài 7
Thay dấu $*$ bằng chữ số thích hợp để mỗi số sau là số nguyên tố:
a) $\overline{5*};$
b) $\overline{*7}.$

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

a) Xét các số từ $50$ đến $59$:
Loại các số chẵn và số tận cùng là $5.$ Còn lại: $51 = 3 \cdot 17$ (hợp số); $53$ (nguyên tố); $57 = 3 \cdot 19$ (hợp số); $59$ (nguyên tố).
Vậy $* \in \{3; 9\}.$

b) Xét các số có dạng $\overline{*7}$ với $* \in \{1; 2; \dots; 9\}$:
- $17$ (nguyên tố); $27 = 3^3$ (hợp số); $37$ (nguyên tố); $47$ (nguyên tố); $57 = 3 \cdot 19$ (hợp số); $67$ (nguyên tố); $77 = 7 \cdot 11$ (hợp số); $87 = 3 \cdot 29$ (hợp số); $97$ (nguyên tố).
Vậy $* \in \{1; 3; 4; 6; 9\}.$

</details>

### Bài 8
Thay dấu $*$ bằng chữ số thích hợp để mỗi số sau là hợp số:
a) $\overline{2*};$
b) $\overline{*9}.$

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

a) Trong các số từ $20$ đến $29,$ các hợp số là: $20;\; 21;\; 22;\; 24;\; 25;\; 26;\; 27;\; 28$ (chỉ loại $23$ và $29$ là số nguyên tố).
Vậy $* \in \{0; 1; 2; 4; 5; 6; 7; 8\}.$

b) Xét các số $\overline{*9}$:
- $19$ (nguyên tố); $29$ (nguyên tố); $39 = 3 \cdot 13$ (hợp số); $49 = 7^2$ (hợp số); $59$ (nguyên tố); $69\ \vdots\ 3$ (hợp số); $79$ (nguyên tố); $89$ (nguyên tố); $99\ \vdots\ 9$ (hợp số).
Vậy $* \in \{3; 4; 6; 9\}.$

</details>

### Bài 9
Xét hai khẳng định sau:
a) Bạn Hùng nói: *"Mọi số tự nhiên có chữ số tận cùng là 7 đều là số nguyên tố."*
b) Bạn Lan viết $48 = 6 \cdot 8$ rồi nói: *"Mình đã phân tích xong số 48 ra thừa số nguyên tố."*
Theo em, mỗi bạn nói đúng hay sai? Hãy giải thích và sửa lại cho đúng.

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

Cả hai bạn đều nói **sai**:
a) Bạn Hùng sai vì có rất nhiều số tận cùng là $7$ nhưng là hợp số, chẳng hạn $27 = 3 \cdot 9;\; 57 = 3 \cdot 19;\; 77 = 7 \cdot 11.$
b) Bạn Lan sai vì trong tích $6 \cdot 8,$ cả $6$ và $8$ đều là hợp số chứ không phải số nguyên tố. Phải phân tích tiếp:
$$48 = (2 \cdot 3) \cdot (2 \cdot 2 \cdot 2) = 2^4 \cdot 3.$$

</details>

### Bài 10
Có bao nhiêu cách chia đều $72$ học sinh thành các tổ có từ $6$ đến $12$ học sinh?

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Số học sinh mỗi tổ phải là ước của $72.$
Phân tích: $72 = 2^3 \cdot 3^2.$
Các ước của $72$ nằm trong khoảng từ $6$ đến $12$ là: $6;\; 8;\; 9;\; 12.$
Vậy có **$4$ cách chia tổ**: tổ $6$ bạn, tổ $8$ bạn, tổ $9$ bạn, hoặc tổ $12$ bạn.

</details>

---

## D. Kiểm tra cơ bản (15 phút)

```quiz
type: choice
question: 'Kết quả phân tích số 180 ra thừa số nguyên tố là:'
options:
  - '$180 = 2 \cdot 9 \cdot 10$'
  - '$180 = 2^2 \cdot 3^2 \cdot 5$'
  - '$180 = 4 \cdot 9 \cdot 5$'
  - '$180 = 2^2 \cdot 45$'
answer: 2
explanation: 'Phân tích ra thừa số nguyên tố phải gồm các cơ số nguyên tố: $180 = 4 \cdot 9 \cdot 5 = 2^2 \cdot 3^2 \cdot 5.$'
```

```quiz
type: choice
question: 'Có bao nhiêu số nguyên tố có hai chữ số mà chữ số hàng đơn vị là 3?'
options:
  - '4 số'
  - '5 số'
  - '6 số'
  - '7 số'
answer: 3
explanation: 'Các số nguyên tố tận cùng bằng 3 là: 13; 23; 43; 53; 73; 83 (có 6 số, loại 33 = 3 * 11; 63 chia hết cho 9; 93 chia hết cho 3).'
```

```quiz
type: choice
question: 'Số 91 là số nguyên tố hay hợp số?'
options:
  - 'Số nguyên tố vì không chia hết cho 2, 3, 5'
  - 'Hợp số vì chia hết cho 7 và 13'
  - 'Không phải số nguyên tố, cũng không phải hợp số'
  - 'Số chính phương'
answer: 2
explanation: 'Ta có $91 = 7 \cdot 13$ nên 91 là hợp số.'
```

```quiz
type: choice
question: 'Số lượng tất cả các ước của số $72 = 2^3 \cdot 3^2$ là:'
options:
  - '6 ước'
  - '10 ước'
  - '12 ước'
  - '15 ước'
answer: 3
explanation: 'Áp dụng công thức: $(3 + 1)(2 + 1) = 4 \cdot 3 = 12$ ước.'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.** Trong các số $0;\; 1;\; 2;\; 21;\; 31;\; 91$:
- Không thuộc hai nhóm: $0$ và $1.$
- Số nguyên tố: $2$ và $31.$
- Hợp số: $21 = 3 \cdot 7$ và $91 = 7 \cdot 13.$

**Câu 2.** Phân tích ra thừa số nguyên tố:
a) $90 = 2 \cdot 3^2 \cdot 5.$
b) $200 = 2^3 \cdot 5^2.$

**Câu 3.** Tìm số ước của $90$ và $200$:
- Số $90 = 2^1 \cdot 3^2 \cdot 5^1$ có $(1 + 1)(2 + 1)(1 + 1) = 2 \cdot 3 \cdot 2 = 12$ ước.
- Số $200 = 2^3 \cdot 5^2$ có $(3 + 1)(2 + 1) = 4 \cdot 3 = 12$ ước.

**Câu 4.** Đoàn thể thao có $60$ vận động viên. Huấn luyện viên muốn chia đều thành các nhóm, mỗi nhóm từ $5$ đến $12$ bạn. Hỏi có bao nhiêu cách chia?
*Giải:* Phân tích $60 = 2^2 \cdot 3 \cdot 5.$ Các ước của $60$ từ $5$ đến $12$ là: $5;\; 6;\; 10;\; 12.$ Vậy có **$4$ cách chia**.

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Hãy viết số $80$ và số $81$ thành tổng của các hợp số sao cho số lượng các số hạng trong tổng là **nhiều nhất có thể**.

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Để số lượng các số hạng trong tổng là nhiều nhất, mỗi số hạng phải là hợp số nhỏ nhất có thể.
- Hợp số chẵn nhỏ nhất là $4$ (tiếp theo là $6$).
- Hợp số lẻ nhỏ nhất là $9.$

1. **Với số $80$:**
   Vì $80$ là số chẵn chia hết cho $4$:
   $$80 = 4 \cdot 20 = \underbrace{4 + 4 + \dots + 4}_{20 \text{ số hạng}}.$$
   Vậy số $80$ có thể viết thành tổng của nhiều nhất là $20$ hợp số.

2. **Với số $81$:**
   Vì $81$ là số lẻ, nên trong tổng bắt buộc phải chứa ít nhất một hợp số lẻ (nhỏ nhất là $9$).
   Sau khi bớt $9,$ phần còn lại là $81 - 9 = 72$ (là số chẵn chia hết cho $4$):
   $$72 = 4 \cdot 18 = \underbrace{4 + 4 + \dots + 4}_{18 \text{ số hạng}}.$$
   Do đó:
   $$81 = 9 + \underbrace{4 + 4 + \dots + 4}_{18 \text{ số hạng}} \implies 1 + 18 = 19\text{ số hạng}.$$
   Vậy số $81$ có thể viết thành tổng của nhiều nhất là $19$ hợp số.

</details>

### Nâng cao 2
Viết liên tiếp các số tự nhiên từ $1$ đến $50$ thành một dãy số liên tục:
$$A = 123456789101112\dots4950.$$
Hỏi $A$ là số nguyên tố hay hợp số?

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

Ta xét tính chia hết cho $3$ của số $A$ bằng cách tính tổng các chữ số của $A.$
Số $A$ được tạo thành bằng cách viết liên tiếp các số từ $1$ đến $50.$
Tổng các chữ số của $A$ bằng tổng các chữ số của tất cả các số từ $1$ đến $50.$
- Các số từ $1$ đến $49$:
  - Chữ số hàng đơn vị gồm $5$ chu kì từ $0$ đến $9$ (riêng nhóm $0$ đến $9$ có $1$ chu kì):
    Mỗi chữ số từ $1$ đến $9$ xuất hiện $5$ lần ở hàng đơn vị. Tổng bằng: $5 \cdot (1 + 2 + \dots + 9) = 5 \cdot 45 = 225.$
  - Chữ số hàng chục: Các chữ số $1, 2, 3, 4$ mỗi chữ số xuất hiện đúng $10$ lần. Tổng bằng: $10 \cdot (1 + 2 + 3 + 4) = 10 \cdot 10 = 100.$
- Số $50$ có tổng chữ số là: $5 + 0 = 5.$
Tổng các chữ số của số $A$ là:
$$S = 225 + 100 + 5 = 330.$$
Vì $330\ \vdots\ 3$ nên số $A\ \vdots\ 3.$
Mặt khác số $A$ chắc chắn lớn hơn $3.$
Vì $A > 3$ và $A\ \vdots\ 3$ nên **$A$ là hợp số**.

</details>

### Nâng cao 3
Tìm ba số tự nhiên liên tiếp có tích bằng $4080.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Phân tích số $4080$ ra thừa số nguyên tố:
$$4080 = 2^4 \cdot 3 \cdot 5 \cdot 17.$$
Ta nhận thấy trong phân tích có thừa số nguyên tố lớn là $17.$
Do đó một trong ba số tự nhiên liên tiếp phải bằng $17$ hoặc là bội của $17.$
Vì ba số liên tiếp có tích là $4080$ nên các số phải ở quanh số $17$:
- Xét ba số liên tiếp có chứa số $17$: có thể là $(15, 16, 17)$ hoặc $(16, 17, 18)$ hoặc $(17, 18, 19).$
- Ghép các thừa số còn lại của $4080$:
  $$2^4 = 16$$
  $$3 \cdot 5 = 15.$$
Ba thừa số nhận được chính là $15;\; 16;\; 17.$
Kiểm tra lại: $15 \cdot 16 \cdot 17 = 240 \cdot 17 = 4080$ (chính xác).
Vậy ba số tự nhiên liên tiếp cần tìm là: **$15;\; 16;\; 17$**.

</details>

### Nâng cao 4
Tìm hai số tự nhiên không chia hết cho $10$ và có tích bằng $100000$ ($10^5$).

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Gọi hai số cần tìm là $a$ và $b.$
Ta có:
$$a \cdot b = 100000 = 10^5 = (2 \cdot 5)^5 = 2^5 \cdot 5^5.$$
Một số tự nhiên chia hết cho $10$ khi và chỉ khi nó đồng thời chứa cả thừa số nguyên tố $2$ và thừa số nguyên tố $5.$
Theo đề bài, cả $a$ và $b$ đều không chia hết cho $10,$ điều đó có nghĩa là:
- Toàn bộ các thừa số $2$ phải thuộc về một số.
- Toàn bộ các thừa số $5$ phải thuộc về số còn lại.
Do đó:
$$a = 2^5 = 32$$
$$b = 5^5 = 3125.$$
**Thử lại:**
- $32 \not\vdots\ 10$ và $3125 \not\vdots\ 10.$
- Tích $32 \cdot 3125 = 100000$ (chính xác).

Vậy hai số cần tìm là: **$32$** và **$3125$**.

</details>

### Nâng cao 5
Tìm số tự nhiên nhỏ nhất có đúng $12$ ước.

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Gọi số tự nhiên cần tìm là $n.$
Phân tích $n$ ra thừa số nguyên tố: $n = a^x \cdot b^y \cdot c^z \dots$ (với $a < b < c \dots$ là các số nguyên tố).
Số lượng các ước của $n$ là:
$$(x + 1)(y + 1)(z + 1)\dots = 12.$$
Ta phân tích số $12$ thành tích các thừa số tự nhiên lớn hơn $1$:
1. $12 = 12 \implies x + 1 = 12 \implies x = 11.$
   Số nhỏ nhất là: $2^{11} = 2048.$
2. $12 = 6 \cdot 2 \implies x + 1 = 6;\; y + 1 = 2 \implies x = 5;\; y = 1.$
   Số nhỏ nhất là: $2^5 \cdot 3^1 = 32 \cdot 3 = 96.$
3. $12 = 4 \cdot 3 \implies x + 1 = 4;\; y + 1 = 3 \implies x = 3;\; y = 2.$
   Số nhỏ nhất là: $2^3 \cdot 3^2 = 8 \cdot 9 = 72.$
4. $12 = 3 \cdot 2 \cdot 2 \implies x + 1 = 3;\; y + 1 = 2;\; z + 1 = 2 \implies x = 2;\; y = 1;\; z = 1.$
   Số nhỏ nhất là: $2^2 \cdot 3^1 \cdot 5^1 = 4 \cdot 3 \cdot 5 = 60.$

So sánh các kết quả tìm được: $2048;\; 96;\; 72;\; 60,$ giá trị nhỏ nhất là $60.$
**Kiểm chứng:** $\text{Ư}(60) = \{1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60\}$ có đúng $12$ ước.
**Đáp số:** Số tự nhiên nhỏ nhất có đúng $12$ ước là **$60$**.

</details>
