---
title: 'Toán 6 Bài 11: Ước chung. Ước chung lớn nhất - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 11 Ước chung và ƯCLN: khái niệm, 3 bước tìm ƯCLN bằng phân tích thừa số nguyên tố, hai số nguyên tố cùng nhau, phân số tối giản, toán thực tế và nâng cao có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Tính chia hết
  - Ước chung
  - Ước chung lớn nhất
  - Phân số tối giản
  - Kết nối tri thức
grade: 6
---

# Bài 11. Ước chung. Ước chung lớn nhất

Ở các bài trước, chúng ta đã thành thạo cách tìm tập hợp các ước của một số tự nhiên (Bài 8) và phân tích một số ra thừa số nguyên tố (Bài 10). Trong bài học hôm nay, chúng ta sẽ kết hợp các công cụ số học đó để tìm **ước chung** và **ước chung lớn nhất (ƯCLN)** của hai hay nhiều số. Đây là chiếc chìa khóa vạn năng giúp các em giải quyết bài toán rút gọn phân số chỉ trong một bước và xử lý các bài toán chia nhóm thực tế tối ưu nhất.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy hoàn thành các câu hỏi trắc nghiệm ngắn sau để gợi nhớ lại các khái niệm nền tảng:

```quiz
type: choice
question: 'Tập hợp các ước chung của 12 và 20 là:'
options:
  - '$\{1; 2; 3\}$'
  - '$\{1; 2; 4\}$'
  - '$\{1; 4; 5\}$'
  - '$\{2; 4; 6\}$'
answer: 2
explanation: 'Ta có $\text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}$ và $\text{Ư}(20) = \{1; 2; 4; 5; 10; 20\}.$ Các phần tử chung là $\{1; 2; 4\}.$'
```

```quiz
type: choice
question: 'Kết quả phân tích số 40 ra thừa số nguyên tố là:'
options:
  - '$4 \cdot 10$'
  - '$2^3 \cdot 5$'
  - '$2 \cdot 4 \cdot 5$'
  - '$2^2 \cdot 10$'
answer: 2
explanation: 'Ta có $40 = 8 \cdot 5 = 2^3 \cdot 5.$'
```

```quiz
type: choice
question: 'Số 36 có tất cả bao nhiêu ước số tự nhiên?'
options:
  - '6'
  - '8'
  - '9'
  - '10'
answer: 3
explanation: 'Phân tích $36 = 2^2 \cdot 3^2.$ Số ước là $(2 + 1)(2 + 1) = 3 \cdot 3 = 9.$'
```

```quiz
type: choice
question: 'Rút gọn phân số $\frac{10}{15}$ về tối giản, ta được phân số nào?'
options:
  - '$\frac{5}{7}$'
  - '$\frac{2}{3}$'
  - '$\frac{1}{2}$'
  - '$\frac{3}{5}$'
answer: 2
explanation: 'Chia cả tử và mẫu cho 5: $\frac{10 : 5}{15 : 5} = \frac{2}{3}.$'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Viết hai tập hợp:
- $\text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}.$
- $\text{Ư}(20) = \{1; 2; 4; 5; 10; 20\}.$
Các số có mặt trong cả hai tập hợp là: $1; 2; 4.$

**Câu 2.** Phân tích ra thừa số nguyên tố:
- $40 = 2^3 \cdot 5.$
- $56 = 2^3 \cdot 7.$

**Câu 3.** Áp dụng công thức tính số ước:
Vì $36 = 2^2 \cdot 3^2$ nên số lượng ước của $36$ là: $(2 + 1)(2 + 1) = 3 \cdot 3 = 9$ ước.
*(Các ước là: $1; 2; 3; 4; 6; 9; 12; 18; 36$).*

**Câu 4.**
$$\frac{10}{15} = \frac{10 : 5}{15 : 5} = \frac{2}{3}.$$
Em đã chia cả tử và mẫu cho số $5.$ Không còn chia được cho số tự nhiên nào lớn hơn $5$ nữa vì $2$ và $3$ không còn ước chung nào khác $1.$

**Câu 5.** Để tìm những số vừa là ước của số này vừa là ước của số kia, việc liệt kê hết các ước chỉ tiện khi các số nhỏ. Với các số lớn, ta có phương pháp tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố rồi lấy các ước của ƯCLN đó mà không cần liệt kê toàn bộ.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Ước chung và Ước chung lớn nhất

> **Định nghĩa:**
> - **Ước chung** của hai hay nhiều số là số vừa là ước của số này, vừa là ước của số kia (tức là ước của tất cả các số đã cho).
>   Tập hợp các ước chung của $a$ và $b$ được kí hiệu là:
>   $$\text{ƯC}(a, b).$$
> - **Ước chung lớn nhất** của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó.
>   Ước chung lớn nhất của $a$ và $b$ được kí hiệu là:
>   $$\text{ƯCLN}(a, b).$$

**Nhận xét quan trọng:**
- Số $1$ luôn luôn là ước chung của mọi số tự nhiên.
- Mọi ước chung của $a$ và $b$ đều là ước của $\text{ƯCLN}(a, b).$
- Nếu số lớn chia hết cho số bé ($a\ \vdots\ b$) thì $\text{ƯCLN}(a, b) = b$ (không cần tính toán dài dòng).
- Với mọi số tự nhiên $a \neq 0,$ ta luôn có $\text{ƯCLN}(a, 1) = 1.$

**Mô hình Venn:**
Hình dung tập hợp ước chung của $18$ và $24$ là phần giao nhau của hai tập hợp:
- $\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}$
- $\text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}$
- Phần chung là: $\text{ƯC}(18, 24) = \{1; 2; 3; 6\}.$
- Số lớn nhất trong phần chung là: $\text{ƯCLN}(18, 24) = 6.$

**Ví dụ 1:** Viết $\text{Ư}(16)$ và $\text{Ư}(24),$ từ đó tìm $\text{ƯC}(16, 24)$ và $\text{ƯCLN}(16, 24).$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

Ta có:
- $\text{Ư}(16) = \{1; 2; 4; 8; 16\}$
- $\text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}$

Các số cùng xuất hiện trong cả hai tập hợp là: $1; 2; 4; 8.$
Do đó:
$$\text{ƯC}(16, 24) = \{1; 2; 4; 8\}.$$
Số lớn nhất trong tập hợp đó là $8,$ vậy:
$$\text{ƯCLN}(16, 24) = 8.$$
*(Nhận xét: các ước chung $1; 2; 4; 8$ đều là ước của số $8$).*

</details>

---

### 2. Quy tắc 3 bước tìm ƯCLN bằng phân tích ra thừa số nguyên tố

Để tìm ƯCLN của hai hay nhiều số lớn hơn $1,$ ta thực hiện theo quy tắc 3 bước chuẩn:

> **Quy tắc 3 bước tìm ƯCLN:**
> - **Bước 1:** Phân tích mỗi số ra thừa số nguyên tố (dùng sơ đồ cột hoặc sơ đồ cây).
> - **Bước 2:** Chọn ra các thừa số nguyên tố **chung** (chỉ lấy các thừa số xuất hiện ở tất cả các số).
> - **Bước 3:** Lập tích các thừa số đã chọn, mỗi thừa số lấy với **số mũ nhỏ nhất**. Tích đó chính là $\text{ƯCLN}$ cần tìm.

> [!IMPORTANT] Hệ quả tìm ước chung thông qua ƯCLN:
> Vì mọi ước chung của các số đều là ước của $\text{ƯCLN}$ của chúng, nên:
> $$\text{ƯC}(a, b) = \text{Ư}(\text{ƯCLN}(a, b)).$$
> Đây là phương pháp tối ưu nhất để tìm toàn bộ ước chung của các số lớn mà không cần liệt kê riêng lẻ từng tập ước!

**Ví dụ 2:** Tìm $\text{ƯCLN}(36, 90),$ rồi từ đó tìm tập hợp $\text{ƯC}(36, 90).$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

- **Bước 1:** Phân tích ra thừa số nguyên tố:
  $$36 = 2^2 \cdot 3^2$$
  $$90 = 2 \cdot 3^2 \cdot 5$$
- **Bước 2:** Các thừa số nguyên tố chung là $2$ và $3$ (thừa số $5$ chỉ có ở $90$ nên không lấy).
- **Bước 3:** Lấy mỗi thừa số chung với số mũ nhỏ nhất:
  - Thừa số $2$: số mũ nhỏ nhất là $1$ (trong $2^1$).
  - Thừa số $3$: số mũ nhỏ nhất là $2$ (trong $3^2$).
  $$\text{ƯCLN}(36, 90) = 2^1 \cdot 3^2 = 2 \cdot 9 = 18.$$

Từ đó:
$$\text{ƯC}(36, 90) = \text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}.$$

</details>

---

### 3. Hai số nguyên tố cùng nhau. Phân số tối giản

> **Định nghĩa:**
> - Hai số tự nhiên được gọi là **nguyên tố cùng nhau** nếu ước chung lớn nhất của chúng bằng $1$:
>   $$\text{ƯCLN}(a, b) = 1.$$
> - Phân số $\frac{a}{b}$ ($a, b \in \mathbb{N}^*$) được gọi là **phân số tối giản** khi tử số và mẫu số của nó là hai số nguyên tố cùng nhau, tức là $\text{ƯCLN}(a, b) = 1.$

**Quy tắc rút gọn phân số về tối giản chỉ trong một bước:**
- Muốn rút gọn phân số $\frac{a}{b}$ về tối giản nhanh nhất, ta **chia cả tử và mẫu cho $\text{ƯCLN}(a, b)$**:
  $$\frac{a}{b} = \frac{a : \text{ƯCLN}(a, b)}{b : \text{ƯCLN}(a, b)}.$$

**Ví dụ 3:**
a) Hai số $9$ và $20$ có phải là hai số nguyên tố cùng nhau không?
b) Rút gọn phân số $\frac{28}{42}$ về phân số tối giản.

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

a) Phân tích: $9 = 3^2$ và $20 = 2^2 \cdot 5.$
Hai số không có thừa số nguyên tố chung nào, do đó $\text{ƯCLN}(9, 20) = 1.$
Vậy $9$ và $20$ là **hai số nguyên tố cùng nhau** (dù cả hai số đều là hợp số!).

b) Phân tích: $28 = 2^2 \cdot 7$ và $42 = 2 \cdot 3 \cdot 7.$
$$\text{ƯCLN}(28, 42) = 2 \cdot 7 = 14.$$
Chia cả tử và mẫu cho $14$:
$$\frac{28}{42} = \frac{28 : 14}{42 : 14} = \frac{2}{3}.$$
Vì $\text{ƯCLN}(2, 3) = 1$ nên phân số $\frac{2}{3}$ là phân số tối giản.

</details>

---

### 4. Những điều rất dễ nhầm lẫn

> [!WARNING] Hãy ghi nhớ để không bị trừ điểm đáng tiếc:
> 1. **Nhầm giữa "số nguyên tố" và "hai số nguyên tố cùng nhau":**
>    Hai số nguyên tố cùng nhau không nhất thiết phải là các số nguyên tố. Ví dụ $8 = 2^3$ và $15 = 3 \cdot 5$ đều là hợp số, nhưng vì $\text{ƯCLN}(8, 15) = 1$ nên chúng là hai số nguyên tố cùng nhau.
> 2. **Nhầm lẫn số mũ:**
>    Khi tìm $\text{ƯCLN},$ phải lấy số mũ **nhỏ nhất** của các thừa số chung. Lấy nhầm số mũ lớn nhất là sai quy tắc (số mũ lớn nhất thuộc về BCNN ở bài học sau).
> 3. **Lấy nhầm thừa số riêng:**
>    Chỉ lấy các thừa số nguyên tố xuất hiện ở **tất cả** các số. Ví dụ $24 = 2^3 \cdot 3$ và $40 = 2^3 \cdot 5$ thì thừa số chung chỉ có $2,$ tuyệt đối không đưa $3$ hoặc $5$ vào tích $\text{ƯCLN}.$
> 4. **Trường hợp chia hết đặc biệt:**
>    Nếu số lớn chia hết cho số bé, ví dụ $48\ \vdots\ 16,$ thì kết luận ngay $\text{ƯCLN}(48, 16) = 16$ mà không cần mất công phân tích thừa số nguyên tố.

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Nhận biết và tìm ước chung bằng cách liệt kê

**Phương pháp giải:**
- Để kiểm tra $m$ có là ước chung của $a$ và $b$ không: xét xem $a$ và $b$ có cùng chia hết cho $m$ không ($a\ \vdots\ m$ và $b\ \vdots\ m$).
- Để tìm $\text{ƯC}(a, b)$ bằng liệt kê: viết tập hợp $\text{Ư}(a)$ và $\text{Ư}(b),$ sau đó chọn các phần tử chung.

#### Luyện tập 1.1
a) Số $3$ có phải là ước chung của $45$ và $70$ không? Vì sao?
b) Số $6$ có phải là ước chung của $48$ và $72$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) Ta có $45\ \vdots\ 3$ (vì $45 : 3 = 15$), nhưng $70 \not\vdots\ 3$ (vì $70 : 3 = 23$ dư $1$).
Vì số $3$ không là ước của $70$ nên **$3$ không phải là ước chung của $45$ và $70$**.

b) Ta có $48\ \vdots\ 6$ (vì $48 : 6 = 8$) và $72\ \vdots\ 6$ (vì $72 : 6 = 12$).
Vì $6$ là ước của cả $48$ và $72$ nên **$6$ là ước chung của $48$ và $72$**.

</details>

#### Luyện tập 1.2
a) Viết tập hợp các ước của hai số $18$ và $30.$
b) Viết tập hợp $\text{ƯC}(18, 30).$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) 
- $\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}.$
- $\text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}.$

b) Các phần tử có mặt trong cả hai tập hợp là: $1; 2; 3; 6.$
Do đó:
$$\text{ƯC}(18, 30) = \{1; 2; 3; 6\}.$$

</details>

#### Luyện tập 1.3
Tìm tất cả các ước chung của:
a) $24$ và $36;$
b) $14$ và $35.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) Ta có:
- $\text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}$
- $\text{Ư}(36) = \{1; 2; 3; 4; 6; 9; 12; 18; 36\}$
Vậy $\text{ƯC}(24, 36) = \{1; 2; 3; 4; 6; 12\}.$

b) Ta có:
- $\text{Ư}(14) = \{1; 2; 7; 14\}$
- $\text{Ư}(35) = \{1; 5; 7; 35\}$
Vậy $\text{ƯC}(14, 35) = \{1; 7\}.$

</details>

---

### Dạng 2. Tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố

**Phương pháp giải:**
- Thực hiện chuẩn 3 bước:
  1. Phân tích ra thừa số nguyên tố.
  2. Chọn thừa số chung.
  3. Lập tích với số mũ nhỏ nhất.
- Chú ý quan sát nhanh: nếu có một số là ước của tất cả các số còn lại thì số đó chính là ƯCLN.

#### Luyện tập 2.1
Tìm ước chung lớn nhất của:
a) $6$ và $18;$
b) $7;\; 21$ và $63;$
c) $24$ và $40;$
d) $36;\; 54$ và $72.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) Vì $18\ \vdots\ 6$ nên:
$$\text{ƯCLN}(6, 18) = 6.$$

b) Vì $21\ \vdots\ 7$ và $63\ \vdots\ 7$ nên:
$$\text{ƯCLN}(7, 21, 63) = 7.$$

c) Phân tích: $24 = 2^3 \cdot 3$ và $40 = 2^3 \cdot 5.$
Thừa số nguyên tố chung là $2.$
$$\text{ƯCLN}(24, 40) = 2^3 = 8.$$

d) Phân tích:
- $36 = 2^2 \cdot 3^2$
- $54 = 2 \cdot 3^3$
- $72 = 2^3 \cdot 3^2$
Thừa số chung là $2$ và $3,$ lấy số mũ nhỏ nhất:
$$\text{ƯCLN}(36, 54, 72) = 2^1 \cdot 3^2 = 2 \cdot 9 = 18.$$

</details>

#### Luyện tập 2.2
Tìm ước chung lớn nhất của:
a) $9$ và $27;$
b) $12;\; 48$ và $96;$
c) $30$ và $105;$
d) $36;\; 60$ và $140.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) Vì $27\ \vdots\ 9$ nên:
$$\text{ƯCLN}(9, 27) = 9.$$

b) Vì $48\ \vdots\ 12$ và $96\ \vdots\ 12$ nên:
$$\text{ƯCLN}(12, 48, 96) = 12.$$

c) Phân tích: $30 = 2 \cdot 3 \cdot 5$ và $105 = 3 \cdot 5 \cdot 7.$
Thừa số chung là $3$ và $5$:
$$\text{ƯCLN}(30, 105) = 3 \cdot 5 = 15.$$

d) Phân tích:
- $36 = 2^2 \cdot 3^2$
- $60 = 2^2 \cdot 3 \cdot 5$
- $140 = 2^2 \cdot 5 \cdot 7$
Thừa số nguyên tố chung duy nhất có mặt ở cả ba số là $2$ (số $3$ và $5$ không có đủ ở cả 3 số).
$$\text{ƯCLN}(36, 60, 140) = 2^2 = 4.$$

</details>

#### Luyện tập 2.3
Tìm ước chung lớn nhất của:
a) $54$ và $90;$
b) $48;\; 72$ và $120.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Phân tích: $54 = 2 \cdot 3^3$ và $90 = 2 \cdot 3^2 \cdot 5.$
$$\text{ƯCLN}(54, 90) = 2 \cdot 3^2 = 18.$$

b) Phân tích:
- $48 = 2^4 \cdot 3$
- $72 = 2^3 \cdot 3^2$
- $120 = 2^3 \cdot 3 \cdot 5$
Thừa số chung là $2$ và $3,$ lấy số mũ nhỏ nhất là $2^3$ và $3^1$:
$$\text{ƯCLN}(48, 72, 120) = 2^3 \cdot 3 = 8 \cdot 3 = 24.$$

</details>

---

### Dạng 3. Tìm ước chung thông qua ƯCLN

**Phương pháp giải:**
- Thay vì liệt kê tập hợp ước của từng số, ta tìm $\text{ƯCLN}$ trước.
- Sau đó liệt kê các ước của $\text{ƯCLN}$: $\text{ƯC}(a, b) = \text{Ư}(\text{ƯCLN}(a, b)).$

#### Luyện tập 3.1
a) Biết $\text{ƯCLN}(36, 54) = 18,$ hãy tìm $\text{ƯC}(36, 54).$
b) Tìm $\text{ƯC}(16, 48, 80).$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Vì $\text{ƯCLN}(36, 54) = 18$ nên:
$$\text{ƯC}(36, 54) = \text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}.$$

b) Ta thấy $48\ \vdots\ 16$ và $80\ \vdots\ 16$ nên $\text{ƯCLN}(16, 48, 80) = 16.$
Do đó:
$$\text{ƯC}(16, 48, 80) = \text{Ư}(16) = \{1; 2; 4; 8; 16\}.$$

</details>

#### Luyện tập 3.2
a) Biết $\text{ƯCLN}(40, 100) = 20,$ hãy tìm $\text{ƯC}(40, 100).$
b) Tìm $\text{ƯC}(24, 60, 84).$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) 
$$\text{ƯC}(40, 100) = \text{Ư}(20) = \{1; 2; 4; 5; 10; 20\}.$$

b) Phân tích:
- $24 = 2^3 \cdot 3$
- $60 = 2^2 \cdot 3 \cdot 5$
- $84 = 2^2 \cdot 3 \cdot 7$
$$\text{ƯCLN}(24, 60, 84) = 2^2 \cdot 3 = 12.$$
Do đó:
$$\text{ƯC}(24, 60, 84) = \text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}.$$

</details>

#### Luyện tập 3.3
Tìm $\text{ƯC}(84, 140).$

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

Phân tích ra thừa số nguyên tố:
- $84 = 2^2 \cdot 3 \cdot 7$
- $140 = 2^2 \cdot 5 \cdot 7$
Thừa số chung là $2$ và $7$:
$$\text{ƯCLN}(84, 140) = 2^2 \cdot 7 = 28.$$
Do đó:
$$\text{ƯC}(84, 140) = \text{Ư}(28) = \{1; 2; 4; 7; 14; 28\}.$$

</details>

---

### Dạng 4. Hai số nguyên tố cùng nhau. Rút gọn phân số về tối giản

**Phương pháp giải:**
- Hai số nguyên tố cùng nhau khi và chỉ khi $\text{ƯCLN}$ của chúng bằng $1.$
- Để rút gọn phân số về tối giản, chia cả tử và mẫu cho $\text{ƯCLN}$ của tử và mẫu.

#### Luyện tập 4.1
a) Hai số $14$ và $25$ có phải là hai số nguyên tố cùng nhau không? Vì sao?
b) Hãy chỉ ra một hợp số nguyên tố cùng nhau với $15.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

a) Phân tích: $14 = 2 \cdot 7$ và $25 = 5^2.$
Hai số không có thừa số nguyên tố chung nên $\text{ƯCLN}(14, 25) = 1.$
Vậy $14$ và $25$ là **hai số nguyên tố cùng nhau**.

b) Ta có $15 = 3 \cdot 5.$ Cần tìm một hợp số không chia hết cho $3$ và không chia hết cho $5.$
Chẳng hạn chọn số $8$ ($8 = 2^3$ là hợp số và $\text{ƯCLN}(8, 15) = 1$) hoặc số $14, 16, 22, 26, 49.$

</details>

#### Luyện tập 4.2
a) Hai số $21$ và $40$ có nguyên tố cùng nhau không?
b) Hai số $18$ và $45$ có nguyên tố cùng nhau không?
c) Hãy chỉ ra hai hợp số nguyên tố cùng nhau với $14.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

a) $21 = 3 \cdot 7$ và $40 = 2^3 \cdot 5.$ Không có thừa số nguyên tố chung $\implies \text{ƯCLN}(21, 40) = 1.$
Vậy $21$ và $40$ nguyên tố cùng nhau.

b) $18 = 2 \cdot 3^2$ và $45 = 3^2 \cdot 5 \implies \text{ƯCLN}(18, 45) = 3^2 = 9 \neq 1.$
Vậy $18$ và $45$ không nguyên tố cùng nhau.

c) Ta có $14 = 2 \cdot 7.$ Ta cần tìm các hợp số là số lẻ và không chia hết cho $7.$
Chẳng hạn hai số $9$ ($9 = 3^2$) và $25$ ($25 = 5^2$). Cả hai đều là hợp số và đều nguyên tố cùng nhau với $14.$

</details>

#### Luyện tập 4.3
Rút gọn mỗi phân số sau về phân số tối giản:
a) $\frac{18}{30};$
b) $\frac{24}{36};$
c) $\frac{35}{84}.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

a) Ta có $\text{ƯCLN}(18, 30) = 6.$ Chia cả tử và mẫu cho $6$:
$$\frac{18}{30} = \frac{18 : 6}{30 : 6} = \frac{3}{5}.$$

b) Ta có $\text{ƯCLN}(24, 36) = 12.$ Chia cả tử và mẫu cho $12$:
$$\frac{24}{36} = \frac{24 : 12}{36 : 12} = \frac{2}{3}.$$

c) Ta có $35 = 5 \cdot 7$ và $84 = 2^2 \cdot 3 \cdot 7 \implies \text{ƯCLN}(35, 84) = 7.$
Chia cả tử và mẫu cho $7$:
$$\frac{35}{84} = \frac{35 : 7}{84 : 7} = \frac{5}{12}.$$

</details>

---

### Dạng 5. Bài toán thực tế về ước chung và ƯCLN

**Phương pháp giải:**
- Xác định đại lượng cần tìm: nếu bài toán yêu cầu "chia đều", "xếp thành các phần bằng nhau" thì đại lượng đó phải là **ước chung** của các số đã cho.
- Nếu bài toán yêu cầu "chia được nhiều nhất", "cạnh lớn nhất", "phần thưởng nhiều nhất" $\implies$ tìm **$\text{ƯCLN}$**.
- Nếu bài toán cho điều kiện khoảng (ví dụ: số nhóm từ $a$ đến $b$) $\implies$ tìm $\text{ƯC}$ rồi chọn giá trị thỏa mãn.

#### Luyện tập 5.1
Tổ II của lớp 6A được khen thưởng $48$ quyển vở và $36$ chiếc bút bi. Cô giáo muốn chia đều số vở và bút đó cho các thành viên trong tổ sao cho mỗi bạn nhận được phần như nhau. Biết tổ II có nhiều hơn $4$ học sinh, hỏi tổ II có bao nhiêu học sinh?

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Số học sinh của tổ II vừa là ước của $48,$ vừa là ước của $36,$ nên là ước chung của $48$ và $36.$
Ta có:
- $48 = 2^4 \cdot 3$
- $36 = 2^2 \cdot 3^2$
$$\text{ƯCLN}(48, 36) = 2^2 \cdot 3 = 12.$$
Do đó:
$$\text{ƯC}(48, 36) = \text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}.$$
Vì tổ II có nhiều hơn $4$ học sinh nên số học sinh của tổ II có thể là $6$ học sinh hoặc $12$ học sinh.

</details>

#### Luyện tập 5.2
Một mảnh đất hình chữ nhật có chiều dài $96\text{ m}$ và chiều rộng $36\text{ m}.$ Bác nông dân muốn chia mảnh đất thành các ô vuông bằng nhau (độ dài cạnh là một số tự nhiên mét) để trồng các loại rau khác nhau. Hỏi độ dài cạnh ô vuông lớn nhất có thể bằng bao nhiêu mét?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Độ dài cạnh ô vuông phải là ước chung của chiều dài $96\text{ m}$ và chiều rộng $36\text{ m}.$
Để cạnh ô vuông đạt kích thước lớn nhất, độ dài cạnh phải bằng $\text{ƯCLN}(96, 36).$
Phân tích ra thừa số nguyên tố:
- $96 = 2^5 \cdot 3$
- $36 = 2^2 \cdot 3^2$
$$\text{ƯCLN}(96, 36) = 2^2 \cdot 3 = 12.$$
Vậy độ dài cạnh ô vuông lớn nhất bằng $12\text{ m}.$

</details>

#### Luyện tập 5.3
Trong một buổi liên hoan tất niên, ban tổ chức chuẩn bị $420$ chiếc bánh ngọt, $1050$ chiếc kẹo và $280$ quả quýt. Người ta muốn chia đều toàn bộ số bánh, kẹo và quýt vào các đĩa sao cho mỗi đĩa đều có đủ cả ba loại và số lượng mỗi loại trên các đĩa là như nhau.
a) Hỏi có thể chia được nhiều nhất thành bao nhiêu đĩa?
b) Khi đó mỗi đĩa có bao nhiêu cái bánh, cái kẹo và quả quýt?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

a) Số đĩa là ước chung của $420;\; 1050$ và $280.$
Để số đĩa chia được là nhiều nhất, số đĩa phải bằng $\text{ƯCLN}(420, 1050, 280).$
Phân tích ra thừa số nguyên tố:
- $420 = 2^2 \cdot 3 \cdot 5 \cdot 7$
- $1050 = 2 \cdot 3 \cdot 5^2 \cdot 7$
- $280 = 2^3 \cdot 5 \cdot 7$
Thừa số nguyên tố chung là $2;\; 5$ và $7.$ Lấy số mũ nhỏ nhất:
$$\text{ƯCLN}(420, 1050, 280) = 2^1 \cdot 5^1 \cdot 7^1 = 70.$$
Vậy có thể chia được nhiều nhất **$70$ đĩa**.

b) Khi chia thành $70$ đĩa, mỗi đĩa có:
- Số bánh: $420 : 70 = 6$ (cái bánh).
- Số kẹo: $1050 : 70 = 15$ (cái kẹo).
- Số quýt: $280 : 70 = 4$ (quả quýt).

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
a) Số $8$ có phải là ước chung của $80$ và $144$ không? Vì sao?
b) Số $14$ có phải là ước chung của $70$ và $120$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) Ta có $80 : 8 = 10\ \vdots\ 8$ và $144 : 8 = 18\ \vdots\ 8.$ Vì $8$ là ước của cả hai số nên **$8$ là ước chung của $80$ và $144$**.
b) Ta có $70\ \vdots\ 14$ (vì $70 : 14 = 5$), nhưng $120 \not\vdots\ 14$ (vì $120 = 14 \cdot 8 + 8$). Do đó **$14$ không phải là ước chung của $70$ và $120$**.

</details>

### Bài 2
Tìm tất cả các ước chung của $32$ và $48.$

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

Phân tích: $32 = 2^5$ và $48 = 2^4 \cdot 3 \implies \text{ƯCLN}(32, 48) = 2^4 = 16.$
Do đó:
$$\text{ƯC}(32, 48) = \text{Ư}(16) = \{1; 2; 4; 8; 16\}.$$

</details>

### Bài 3
Tìm ước chung lớn nhất của:
a) $36$ và $60;$
b) $45;\; 75$ và $105.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) $36 = 2^2 \cdot 3^2$ và $60 = 2^2 \cdot 3 \cdot 5 \implies \text{ƯCLN}(36, 60) = 2^2 \cdot 3 = 12.$
b) $45 = 3^2 \cdot 5;\; 75 = 3 \cdot 5^2;\; 105 = 3 \cdot 5 \cdot 7 \implies \text{ƯCLN}(45, 75, 105) = 3 \cdot 5 = 15.$

</details>

### Bài 4
a) Rút gọn phân số $\frac{20}{35}$ về phân số tối giản.
b) Tìm một phân số bằng $\frac{4}{9}$ và có mẫu số bằng $45.$
c) Trong các phân số $\frac{15}{27};\; \frac{25}{45};\; \frac{20}{36},$ phân số nào bằng phân số $\frac{5}{9}?$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) $\text{ƯCLN}(20, 35) = 5 \implies \frac{20}{35} = \frac{20 : 5}{35 : 5} = \frac{4}{7}.$
b) Nhân cả tử và mẫu với $5$: $\frac{4}{9} = \frac{4 \cdot 5}{9 \cdot 5} = \frac{20}{45}.$
c) Rút gọn các phân số về tối giản:
- $\frac{15}{27} = \frac{15 : 3}{27 : 3} = \frac{5}{9}.$
- $\frac{25}{45} = \frac{25 : 5}{45 : 5} = \frac{5}{9}.$
- $\frac{20}{36} = \frac{20 : 4}{36 : 4} = \frac{5}{9}.$
Vậy **cả ba phân số đã cho đều bằng $\frac{5}{9}$**.

</details>

### Bài 5
Cặp số nào sau đây là hai số nguyên tố cùng nhau?
a) $27$ và $16;$
b) $15$ và $25.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) $27 = 3^3$ và $16 = 2^4 \implies \text{ƯCLN}(27, 16) = 1.$ Vậy $27$ và $16$ nguyên tố cùng nhau.
b) $\text{ƯCLN}(15, 25) = 5 \neq 1$ nên $15$ và $25$ không nguyên tố cùng nhau.

</details>

### Bài 6
Tìm $\text{ƯC}(60, 90)$ bằng cách tìm $\text{ƯCLN}$ trước rồi liệt kê các ước.

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

Ta có $60 = 2^2 \cdot 3 \cdot 5$ và $90 = 2 \cdot 3^2 \cdot 5.$
$$\text{ƯCLN}(60, 90) = 2 \cdot 3 \cdot 5 = 30.$$
Vậy:
$$\text{ƯC}(60, 90) = \text{Ư}(30) = \{1; 2; 3; 5; 6; 10; 15; 30\}.$$

</details>

### Bài 7
Đội hợp xướng của trường có $36$ học sinh. Thầy giáo muốn chia đều các bạn thành các nhóm biểu diễn sao cho số nhóm lớn hơn $4$ và nhỏ hơn $15.$ Hỏi có bao nhiêu cách chia nhóm và có thể chia nhiều nhất thành bao nhiêu nhóm?

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

Số nhóm phải là ước của $36.$
Ta có: $\text{Ư}(36) = \{1; 2; 3; 4; 6; 9; 12; 18; 36\}.$
Các ước lớn hơn $4$ và nhỏ hơn $15$ là: $6;\; 9;\; 12.$
Vậy có **$3$ cách chia nhóm**: chia thành $6$ nhóm, $9$ nhóm hoặc $12$ nhóm.
Có thể chia nhiều nhất thành **$12$ nhóm** (mỗi nhóm $3$ học sinh).

</details>

### Bài 8
Một tấm bìa hình chữ nhật kích thước $140\text{ cm} \times 84\text{ cm}$ được cắt thành các mảnh hình vuông có cạnh là số tự nhiên xăng-ti-mét sao cho tấm bìa được cắt hết, không thừa mảnh nào. Hỏi cạnh hình vuông lớn nhất có thể cắt được bằng bao nhiêu xăng-ti-mét, và khi đó cắt được tất cả bao nhiêu hình vuông?

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

Độ dài cạnh hình vuông phải là ước chung của $140$ và $84.$ Muốn cạnh hình vuông lớn nhất thì cạnh bằng $\text{ƯCLN}(140, 84).$
Phân tích: $140 = 2^2 \cdot 5 \cdot 7$ và $84 = 2^2 \cdot 3 \cdot 7.$
$$\text{ƯCLN}(140, 84) = 2^2 \cdot 7 = 28\text{ (cm)}.$$
Vậy cạnh hình vuông lớn nhất bằng $28\text{ cm}.$
Số hình vuông cắt được là:
$$\frac{140}{28} \cdot \frac{84}{28} = 5 \cdot 3 = 15\text{ (mảnh)}.$$

</details>

### Bài 9
Xét hai phát biểu sau và cho biết mỗi phát biểu đúng hay sai, giải thích rõ:
a) Bạn Lan nói: *"Hai số tự nhiên liên tiếp luôn luôn nguyên tố cùng nhau."*
b) Bạn Minh rút gọn phân số $\frac{20}{32}$ bằng cách chia cả tử và mẫu cho $2,$ được $\frac{10}{16},$ rồi nói: *"Phân số này đã tối giản rồi."*

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

a) Bạn Lan nói **ĐÚNG**.
Gọi hai số tự nhiên liên tiếp là $n$ và $n + 1$ ($n \in \mathbb{N}^*$).
Nếu $d$ là ước chung của $n$ và $n + 1$ thì $(n + 1 - n)\ \vdots\ d \implies 1\ \vdots\ d \implies d = 1.$
Do đó $\text{ƯCLN}(n, n + 1) = 1,$ nghĩa là hai số tự nhiên liên tiếp luôn nguyên tố cùng nhau.

b) Bạn Minh nói **SAI**.
Phân số $\frac{10}{16}$ chưa tối giản vì $\text{ƯCLN}(10, 16) = 2 \neq 1.$ Phải rút gọn tiếp:
$$\frac{10}{16} = \frac{10 : 2}{16 : 2} = \frac{5}{8}.$$
*(Để rút gọn tối giản chỉ trong một lần, Minh nên chia cả tử và mẫu cho $\text{ƯCLN}(20, 32) = 4$).*

</details>

### Bài 10
Một căn phòng hình chữ nhật có kích thước $720\text{ cm} \times 540\text{ cm}.$ Người ta muốn lát kín sàn phòng bằng các viên gạch hoa hình vuông cùng kích thước (cạnh là số tự nhiên xăng-ti-mét) sao cho các viên gạch được đặt liền nhau, không phải cắt xén viên nào. Hỏi cạnh của viên gạch hoa lớn nhất bằng bao nhiêu xăng-ti-mét? Khi đó cần dùng bao nhiêu viên gạch để lát kín căn phòng?

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Cạnh viên gạch hoa phải là ước chung của $720$ và $540.$ Để cạnh gạch lớn nhất, cạnh phải bằng $\text{ƯCLN}(720, 540).$
Phân tích ra thừa số nguyên tố:
- $720 = 2^4 \cdot 3^2 \cdot 5$
- $540 = 2^2 \cdot 3^3 \cdot 5$
$$\text{ƯCLN}(720, 540) = 2^2 \cdot 3^2 \cdot 5 = 4 \cdot 9 \cdot 5 = 180\text{ (cm)}.$$
Vậy cạnh viên gạch hoa lớn nhất bằng $180\text{ cm}.$
Số viên gạch cần dùng là:
$$\frac{720}{180} \cdot \frac{540}{180} = 4 \cdot 3 = 12\text{ (viên)}.$$

</details>

---

## D. Kiểm tra cơ bản (15 phút)

```quiz
type: choice
question: 'Tập hợp các ước của số 12 là:'
options:
  - '$\{1; 2; 3; 4; 6\}$'
  - '$\{1; 2; 3; 4; 6; 12\}$'
  - '$\{0; 1; 2; 3; 4; 6; 12\}$'
  - '$\{2; 3; 4; 6; 12\}$'
answer: 2
explanation: '$\text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}.$ Số 0 không thể là ước của bất kì số nào.'
```

```quiz
type: choice
question: 'Tập hợp $\text{ƯC}(12, 18)$ gồm những phần tử nào?'
options:
  - '$\{1; 2; 3\}$'
  - '$\{1; 2; 3; 6\}$'
  - '$\{2; 3; 6\}$'
  - '$\{1; 6\}$'
answer: 2
explanation: '$\text{Ư}(12) = \{1; 2; 3; 4; 6; 12\}$ và $\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\} \implies \text{ƯC}(12, 18) = \{1; 2; 3; 6\}.$'
```

```quiz
type: choice
question: 'Ước chung lớn nhất của 24 và 36 là:'
options:
  - '6'
  - '12'
  - '18'
  - '24'
answer: 2
explanation: 'Ta có $24 = 2^3 \cdot 3$ và $36 = 2^2 \cdot 3^2 \implies \text{ƯCLN}(24, 36) = 2^2 \cdot 3 = 12.$'
```

```quiz
type: choice
question: 'Phân số nào sau đây đã là phân số tối giản?'
options:
  - '$\frac{6}{9}$'
  - '$\frac{14}{21}$'
  - '$\frac{8}{15}$'
  - '$\frac{10}{25}$'
answer: 3
explanation: 'Ta có $\text{ƯCLN}(8, 15) = 1$ nên phân số $\frac{8}{15}$ đã tối giản. Các phân số khác đều rút gọn được tiếp.'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.** Viết $\text{Ư}(18)$ và $\text{Ư}(27),$ rồi tìm $\text{ƯC}(18, 27)$:
- $\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}$
- $\text{Ư}(27) = \{1; 3; 9; 27\}$
$$\text{ƯC}(18, 27) = \{1; 3; 9\}.$$

**Câu 2.** Tìm ước chung lớn nhất của:
a) $40$ và $60$:
$40 = 2^3 \cdot 5$ và $60 = 2^2 \cdot 3 \cdot 5 \implies \text{ƯCLN}(40, 60) = 2^2 \cdot 5 = 20.$
b) $18;\; 30$ và $42$:
$18 = 2 \cdot 3^2;\; 30 = 2 \cdot 3 \cdot 5;\; 42 = 2 \cdot 3 \cdot 7 \implies \text{ƯCLN}(18, 30, 42) = 2 \cdot 3 = 6.$

**Câu 3.** Biết $\text{ƯCLN}(72, 108) = 36,$ tìm $\text{ƯC}(72, 108)$:
$$\text{ƯC}(72, 108) = \text{Ư}(36) = \{1; 2; 3; 4; 6; 9; 12; 18; 36\}.$$

**Câu 4.** Rút gọn mỗi phân số về tối giản:
a) $\frac{28}{42} = \frac{28 : 14}{42 : 14} = \frac{2}{3}.$
b) $\frac{45}{60} = \frac{45 : 15}{60 : 15} = \frac{3}{4}.$

**Câu 5.** Cô giáo có $30$ chiếc bút và $45$ quyển vở, muốn chia đều vào các phần quà sao cho mỗi phần có số bút như nhau và số vở như nhau. Hỏi chia được nhiều nhất bao nhiêu phần quà?
*Giải:* Số phần quà nhiều nhất là $\text{ƯCLN}(30, 45) = 15$ phần quà (mỗi phần gồm $2$ bút và $3$ vở).

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Tìm ước chung lớn nhất của hai số $151515$ và $252525.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Nhận xét cấu tạo số lặp:
$$151515 = 15 \cdot 10101$$
$$252525 = 25 \cdot 10101$$
Do đó:
$$\text{ƯCLN}(151515, 252525) = \text{ƯCLN}(15, 25) \cdot 10101.$$
Ta có $\text{ƯCLN}(15, 25) = 5.$
Vậy:
$$\text{ƯCLN}(151515, 252525) = 5 \cdot 10101 = 50505.$$

</details>

### Nâng cao 2
Chứng minh rằng với mọi số tự nhiên $n,$ hai số $n + 1$ và $2n + 3$ luôn là hai số nguyên tố cùng nhau.

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

Gọi $d$ là một ước chung bất kì của $n + 1$ và $2n + 3$ ($d \in \mathbb{N}^*$).
Khi đó:
$$(n + 1)\ \vdots\ d \implies 2(n + 1)\ \vdots\ d \implies (2n + 2)\ \vdots\ d.$$
Mặt khác:
$$(2n + 3)\ \vdots\ d.$$
Theo tính chất chia hết của một hiệu (Bài 8):
$$[(2n + 3) - (2n + 2)]\ \vdots\ d \implies 1\ \vdots\ d.$$
Vì $d \in \mathbb{N}^*$ và $1\ \vdots\ d \implies d = 1.$
Do ước chung lớn nhất bằng $1$ nên hai số $n + 1$ và $2n + 3$ luôn nguyên tố cùng nhau với mọi $n \in \mathbb{N}.$

</details>

### Nâng cao 3
Tìm số tự nhiên $n$ lớn nhất sao cho khi chia ba số $278;\; 338;\; 458$ cho $n$ thì được ba số dư bằng nhau.

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Gọi số dư khi chia ba số cho $n$ là $r$ ($r < n$).
Khi đó:
$$278 = n \cdot q_1 + r$$
$$338 = n \cdot q_2 + r$$
$$458 = n \cdot q_3 + r$$
Lấy hiệu giữa hai số bất kì trong ba số đó, phần dư $r$ sẽ bị triệt tiêu:
- $338 - 278 = 60\ \vdots\ n$
- $458 - 338 = 120\ \vdots\ n$
- $458 - 278 = 180\ \vdots\ n$

Do đó $n$ là ước chung của $60;\; 120$ và $180.$
Để $n$ đạt giá trị lớn nhất, $n$ phải bằng $\text{ƯCLN}(60, 120, 180).$
Vì $120\ \vdots\ 60$ và $180\ \vdots\ 60$ nên:
$$\text{ƯCLN}(60, 120, 180) = 60.$$
Vậy số tự nhiên lớn nhất cần tìm là $n = 60.$
*(Thử lại: $278 = 60 \cdot 4 + 38;\; 338 = 60 \cdot 5 + 38;\; 458 = 60 \cdot 7 + 38$ — cả ba số đều có cùng số dư là $38 < 60$).*

</details>

### Nâng cao 4
Có $134$ quyển vở, $82$ chiếc bút bi và $102$ tập giấy được chia đều vào các phần thưởng như nhau (mỗi phần đều có cả ba loại). Sau khi chia xong, người ta thấy còn thừa $14$ quyển vở, $10$ chiếc bút bi và $6$ tập giấy (không đủ để chia thêm một phần nào nữa). Hỏi có tất cả bao nhiêu phần thưởng?

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Gọi số phần thưởng là $x$ ($x \in \mathbb{N}^*$).
Vì còn thừa $14$ quyển vở nên số phần thưởng phải lớn hơn số dư:
$$x > 14.$$
Số đồ dùng đã chia đều vào $x$ phần thưởng là:
- Số vở đã chia: $134 - 14 = 120$ (quyển vở).
- Số bút đã chia: $82 - 10 = 72$ (chiếc bút bi).
- Số giấy đã chia: $102 - 6 = 96$ (tập giấy).

Do đó, $x$ là ước chung của $120;\; 72$ và $96.$
Phân tích ra thừa số nguyên tố:
- $120 = 2^3 \cdot 3 \cdot 5$
- $72 = 2^3 \cdot 3^2$
- $96 = 2^5 \cdot 3$
$$\text{ƯCLN}(120, 72, 96) = 2^3 \cdot 3 = 24.$$
Tập hợp các ước chung là:
$$\text{ƯC}(120, 72, 96) = \text{Ư}(24) = \{1; 2; 3; 4; 6; 8; 12; 24\}.$$
Vì điều kiện $x > 14$ nên trong các ước trên chỉ có duy nhất số $24$ thỏa mãn.
Vậy có tất cả **$24$ phần thưởng**.

</details>

### Nâng cao 5
Tìm hai số tự nhiên $a$ và $b$ với $a < b,$ biết rằng $a + b = 84$ và $\text{ƯCLN}(a, b) = 12.$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Vì $\text{ƯCLN}(a, b) = 12$ nên ta đặt:
$$a = 12m \quad \text{và} \quad b = 12n$$
với $m, n \in \mathbb{N}^*$ và $\text{ƯCLN}(m, n) = 1.$
Vì $a < b$ nên $m < n.$
Theo đề bài, $a + b = 84,$ ta có:
$$12m + 12n = 84 \implies 12(m + n) = 84 \implies m + n = 7.$$
Vì $m < n,$ $m + n = 7$ và $\text{ƯCLN}(m, n) = 1,$ ta xét các cặp $(m; n)$ thỏa mãn:
1. $m = 1 \implies n = 6 \implies a = 12 \cdot 1 = 12;\; b = 12 \cdot 6 = 72.$
2. $m = 2 \implies n = 5 \implies a = 12 \cdot 2 = 24;\; b = 12 \cdot 5 = 60.$
3. $m = 3 \implies n = 4 \implies a = 12 \cdot 3 = 36;\; b = 12 \cdot 4 = 48.$

**Thử lại:**
- $12 + 72 = 84$ và $\text{ƯCLN}(12, 72) = 12$ (thỏa mãn).
- $24 + 60 = 84$ và $\text{ƯCLN}(24, 60) = 12$ (thỏa mãn).
- $36 + 48 = 84$ và $\text{ƯCLN}(36, 48) = 12$ (thỏa mãn).

Vậy các cặp số $(a; b)$ thỏa mãn là:
$$(a; b) \in \{(12; 72);\; (24; 60);\; (36; 48)\}.$$

</details>

---

### Đọc thêm: Thuật toán chia liên tiếp Euclide tìm ƯCLN

> **Mẹo toán học cổ đại:**
> Thuật toán Euclide (có từ thế kỉ thứ 3 trước Công nguyên) cho phép tìm $\text{ƯCLN}$ của hai số lớn mà không cần phân tích ra thừa số nguyên tố:
> 1. Lấy số lớn chia cho số nhỏ.
> 2. Nếu phép chia còn dư, lấy số chia đem chia cho số dư đó.
> 3. Cứ lặp lại quá trình lấy số chia chia cho số dư cho đến khi số dư bằng $0.$
> **Số chia cuối cùng chính là $\text{ƯCLN}$ cần tìm.**

**Ví dụ:** Tìm $\text{ƯCLN}(198, 126)$:
- $198 = 126 \cdot 1 + 72$ (dư $72$)
- $126 = 72 \cdot 1 + 54$ (dư $54$)
- $72 = 54 \cdot 1 + 18$ (dư $18$)
- $54 = 18 \cdot 3 + 0$ (dư $0$)

Số chia cuối cùng là $18,$ do đó:
$$\text{ƯCLN}(198, 126) = 18.$$
