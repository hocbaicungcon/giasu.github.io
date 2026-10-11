---
title: 'Toán 6 Bài 12: Bội chung. Bội chung nhỏ nhất - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 12 Bội chung và BCNN: khái niệm, 3 bước tìm BCNN bằng phân tích thừa số nguyên tố, ứng dụng quy đồng mẫu số, toán thực tế và nâng cao có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Tính chia hết
  - Bội chung
  - Bội chung nhỏ nhất
  - Quy đồng mẫu số
  - Kết nối tri thức
grade: 6
---

# Bài 12. Bội chung. Bội chung nhỏ nhất

Ở Bài 11, chúng ta đã làm quen với khái niệm ước chung và ước chung lớn nhất ($\text{ƯCLN}$). Hôm nay, chúng ta sẽ tìm hiểu "người anh em song sinh" của $\text{ƯCLN}$ trong số học: **Bội chung** và **Bội chung nhỏ nhất ($\text{BCNN}$)**. Đây là công cụ toán học không thể thiếu giúp các em thực hiện quy đồng mẫu số các phân số nhanh chóng và giải quyết các bài toán chu kì, lặp lại trong đời sống thực tế.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy cùng hoàn thành các câu hỏi trắc nghiệm nhanh sau để sẵn sàng cho bài học mới:

```quiz
type: choice
question: 'Các số nào sau đây xuất hiện trong cả sáu bội đầu tiên (kể cả 0) của 6 và của 8?'
options:
  - '0 và 12'
  - '0 và 24'
  - '0 và 48'
  - '12 và 24'
answer: 2
explanation: 'Sáu bội đầu của 6: $0; 6; 12; 18; 24; 30.$ Sáu bội đầu của 8: $0; 8; 16; 24; 32; 40.$ Các số chung đã viết là 0 và 24.'
```

```quiz
type: choice
question: 'Phân tích các số 12 và 18 ra thừa số nguyên tố, ta được:'
options:
  - '$12 = 3 \cdot 4;\; 18 = 2 \cdot 9$'
  - '$12 = 2^2 \cdot 3;\; 18 = 2 \cdot 3^2$'
  - '$12 = 2 \cdot 6;\; 18 = 3 \cdot 6$'
  - '$12 = 2^3 \cdot 3;\; 18 = 2 \cdot 3^3$'
answer: 2
explanation: 'Ta có $12 = 4 \cdot 3 = 2^2 \cdot 3$ và $18 = 2 \cdot 9 = 2 \cdot 3^2.$'
```

```quiz
type: choice
question: 'Ước chung lớn nhất của 12 và 18 là:'
options:
  - '2'
  - '3'
  - '6'
  - '36'
answer: 3
explanation: '$\text{ƯCLN}(12, 18) = 2 \cdot 3 = 6.$'
```

```quiz
type: choice
question: 'Muốn quy đồng mẫu hai phân số $\frac{1}{3}$ và $\frac{1}{4}$ về cùng một mẫu số, ta thường chọn mẫu chung nhỏ nhất bằng bao nhiêu?'
options:
  - '7'
  - '12'
  - '24'
  - '36'
answer: 2
explanation: 'Mẫu chung nhỏ nhất là số nhỏ nhất khác 0 vừa chia hết cho 3 vừa chia hết cho 4, tức bằng 12.'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.**
- Sáu bội đầu tiên của $6$: $0; 6; 12; 18; 24; 30.$
- Sáu bội đầu tiên của $8$: $0; 8; 16; 24; 32; 40.$
Các số có mặt trong cả hai dãy bội trên là: $0$ và $24.$

**Câu 2.** Phân tích ra thừa số nguyên tố:
- $12 = 2^2 \cdot 3.$
- $18 = 2 \cdot 3^2.$

**Câu 3.** Nhắc lại ba bước tìm $\text{ƯCLN}$: Phân tích mỗi số ra thừa số nguyên tố $\to$ Chọn các thừa số nguyên tố chung $\to$ Lập tích các thừa số chung với số mũ nhỏ nhất.
Thừa số chung của $12$ và $18$ là $2$ và $3,$ lấy số mũ nhỏ nhất:
$$\text{ƯCLN}(12, 18) = 2^1 \cdot 3^1 = 6.$$

**Câu 4.** Mẫu chung nhỏ nhất khi quy đồng $\frac{1}{3}$ và $\frac{1}{4}$ là $12$ (vì $12 : 3 = 4$ và $12 : 4 = 3$). Khi đó:
$$\frac{1}{3} = \frac{4}{12} \quad \text{và} \quad \frac{1}{4} = \frac{3}{12}.$$

**Câu 5.** Số nhỏ nhất khác $0$ cùng chia hết cho $6$ và $8$ là $24.$ Khi các số lớn hơn, việc liệt kê dãy bội sẽ rất dài và mất thời gian. Bài học này sẽ cung cấp cho các em quy tắc 3 bước tìm nhanh số đó mà không cần liệt kê từng bội.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Bội chung và Bội chung nhỏ nhất

> **Định nghĩa:**
> - **Bội chung** của hai hay nhiều số là số vừa là bội của số này, vừa là bội của số kia (tức là bội của tất cả các số đã cho).
>   Tập hợp các bội chung của $a$ và $b$ được kí hiệu là:
>   $$\text{BC}(a, b).$$
> - **Bội chung nhỏ nhất** của hai hay nhiều số là **số nhỏ nhất khác $0$** trong tập hợp các bội chung của các số đó.
>   Bội chung nhỏ nhất của $a$ và $b$ được kí hiệu là:
>   $$\text{BCNN}(a, b).$$

**Mô hình trực quan về Bội chung:**
Xét hai dãy bội của $6$ và $8$:
- $\text{B}(6) = \{0;\; 6;\; 12;\; 18;\; \mathbf{24};\; 30;\; 36;\; 42;\; \mathbf{48};\; 54;\; 60;\; \dots\}$
- $\text{B}(8) = \{0;\; 8;\; 16;\; \mathbf{24};\; 32;\; 40;\; \mathbf{48};\; 56;\; \dots\}$

Phần chung của hai tập hợp là:
$$\text{BC}(6, 8) = \{0;\; 24;\; 48;\; 72;\; \dots\}.$$
Số nhỏ nhất khác $0$ trong tập hợp bội chung là $24,$ vậy:
$$\text{BCNN}(6, 8) = 24.$$

> [!NOTE] Nhận xét đặc biệt:
> - Số $0$ là bội chung của mọi số tự nhiên, nhưng **số $0$ không bao giờ được tính là $\text{BCNN}$**.
> - Nếu số lớn chia hết cho số bé ($a\ \vdots\ b$) thì $\text{BCNN}(a, b) = a$ (chính là số lớn, không cần tính toán).
> - Với mọi số tự nhiên $a \neq 0,$ ta luôn có $\text{BCNN}(a, 1) = a.$

**Ví dụ 1:** Viết tập hợp $\text{B}(6)$ và $\text{B}(8)$ (một vài phần tử đầu), rồi tìm $\text{BC}(6, 8)$ và $\text{BCNN}(6, 8).$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

Ta có:
- $\text{B}(6) = \{0; 6; 12; 18; 24; 30; 36; 42; 48; \dots\}$
- $\text{B}(8) = \{0; 8; 16; 24; 32; 40; 48; \dots\}$

Các số cùng xuất hiện trong cả hai tập hợp là: $0; 24; 48; \dots$
Do đó:
$$\text{BC}(6, 8) = \{0; 24; 48; 72; \dots\}.$$
Số nhỏ nhất khác $0$ trong tập hợp đó là $24,$ vậy:
$$\text{BCNN}(6, 8) = 24.$$

</details>

---

### 2. Quy tắc 3 bước tìm BCNN bằng phân tích ra thừa số nguyên tố

Để tìm BCNN của hai hay nhiều số lớn hơn $1,$ ta thực hiện theo quy tắc 3 bước:

> **Quy tắc 3 bước tìm BCNN:**
> - **Bước 1:** Phân tích mỗi số ra thừa số nguyên tố (Bài 10).
> - **Bước 2:** Chọn ra các thừa số nguyên tố **chung và riêng** (lấy tất cả các thừa số xuất hiện, dù chỉ có ở một số).
> - **Bước 3:** Lập tích các thừa số đã chọn, mỗi thừa số lấy với **số mũ lớn nhất**. Tích đó chính là $\text{BCNN}$ cần tìm.

> [!IMPORTANT] Hệ quả tìm bội chung qua BCNN:
> Mọi bội chung của $a$ và $b$ đều là bội của $\text{BCNN}(a, b),$ do đó:
> $$\text{BC}(a, b) = \text{B}(\text{BCNN}(a, b)).$$
> Để tìm các bội chung của nhiều số, ta chỉ cần tìm $\text{BCNN}$ rồi nhân $\text{BCNN}$ lần lượt với $0; 1; 2; 3; \dots$

**Ví dụ 2:** Tìm $\text{BCNN}(18, 45),$ rồi từ đó tìm tập hợp $\text{BC}(18, 45).$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

- **Bước 1:** Phân tích ra thừa số nguyên tố:
  $$18 = 2 \cdot 3^2$$
  $$45 = 3^2 \cdot 5$$
- **Bước 2:** Các thừa số nguyên tố chung và riêng là $2;\; 3$ và $5$ (lấy cả $2$ và $5$ dù mỗi số chỉ có ở một bên).
- **Bước 3:** Lấy mỗi thừa số với số mũ lớn nhất:
  - Thừa số $2$: số mũ lớn nhất là $1.$
  - Thừa số $3$: số mũ lớn nhất là $2$ (trong $3^2$).
  - Thừa số $5$: số mũ lớn nhất là $1.$
  $$\text{BCNN}(18, 45) = 2 \cdot 3^2 \cdot 5 = 2 \cdot 9 \cdot 5 = 90.$$

Do đó:
$$\text{BC}(18, 45) = \text{B}(90) = \{0;\; 90;\; 180;\; 270;\; 360;\; \dots\}.$$

</details>

---

### 3. Ứng dụng: Quy đồng mẫu các phân số

Khi cộng, trừ các phân số không cùng mẫu, việc tìm mẫu số chung nhỏ nhất chính là tìm **$\text{BCNN}$ của các mẫu số**.

> **Ba bước quy đồng mẫu số nhờ BCNN:**
> - **Bước 1:** Tìm mẫu chung bằng cách tính $\text{BCNN}$ của các mẫu số.
> - **Bước 2:** Tìm **thừa số phụ** của mỗi phân số bằng cách lấy mẫu chung chia cho từng mẫu.
> - **Bước 3:** Nhân cả tử và mẫu của mỗi phân số với thừa số phụ tương ứng.

**Ví dụ 3:** Quy đồng mẫu số rồi thực hiện phép tính:
$$\frac{5}{12} + \frac{7}{18}.$$

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

- **Bước 1:** Tìm mẫu chung $\text{BCNN}(12, 18)$:
  Ta có $12 = 2^2 \cdot 3$ và $18 = 2 \cdot 3^2.$
  $$\text{BCNN}(12, 18) = 2^2 \cdot 3^2 = 4 \cdot 9 = 36.$$
- **Bước 2:** Tìm thừa số phụ:
  $$36 : 12 = 3 \quad \text{và} \quad 36 : 18 = 2.$$
- **Bước 3:** Quy đồng và tính:
  $$\frac{5}{12} = \frac{5 \cdot 3}{12 \cdot 3} = \frac{15}{36}$$
  $$\frac{7}{18} = \frac{7 \cdot 2}{18 \cdot 2} = \frac{14}{36}$$
  Vậy:
  $$\frac{5}{12} + \frac{7}{18} = \frac{15}{36} + \frac{14}{36} = \frac{29}{36}.$$

</details>

---

### 4. So sánh đối chiếu ƯCLN và BCNN — Những điều rất dễ nhầm lẫn

| Tiêu chí | Ước chung lớn nhất ($\text{ƯCLN}$) | Bội chung nhỏ nhất ($\text{BCNN}$) |
| :--- | :--- | :--- |
| **Bước 2: Chọn thừa số** | Chỉ chọn thừa số nguyên tố **CHUNG** | Chọn thừa số nguyên tố **CHUNG VÀ RIÊNG** |
| **Bước 3: Lấy số mũ** | Mỗi thừa số lấy số mũ **NHỎ NHẤT** | Mỗi thừa số lấy số mũ **LỚN NHẤT** |
| **Trường hợp chia hết $a\ \vdots\ b$** | $\text{ƯCLN}(a, b) = b$ (số bé) | $\text{BCNN}(a, b) = a$ (số lớn) |
| **Hai số nguyên tố cùng nhau** | $\text{ƯCLN}(a, b) = 1$ | $\text{BCNN}(a, b) = a \cdot b$ |

> [!WARNING] Hãy ghi nhớ:
> 1. **Số $0$:** Số $0$ tuy là bội chung của mọi số nhưng không được tính là $\text{BCNN}.$ $\text{BCNN}$ luôn là số nguyên dương ($> 0$).
> 2. **Hai số nguyên tố cùng nhau:** Nếu $\text{ƯCLN}(a, b) = 1$ thì $\text{BCNN}(a, b) = a \cdot b.$ Ví dụ: $\text{BCNN}(4, 9) = 4 \cdot 9 = 36.$ Tuy nhiên, nếu hai số chưa nguyên tố cùng nhau thì không được lấy tích (ví dụ: $\text{BCNN}(6, 8) = 24 \neq 48$).
> 3. **Hệ thức tuyệt đẹp liên kết ƯCLN và BCNN:**
>    Với hai số tự nhiên $a$ và $b$ bất kì:
>    $$\text{ƯCLN}(a, b) \cdot \text{BCNN}(a, b) = a \cdot b.$$

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Tìm bội chung nhỏ nhất của hai hay nhiều số

**Phương pháp giải:**
- Áp dụng chuẩn quy tắc 3 bước (phân tích $\to$ chọn thừa số chung và riêng $\to$ lấy số mũ lớn nhất).
- Nhìn nhanh: Nếu số lớn nhất chia hết cho tất cả các số còn lại thì $\text{BCNN}$ chính là số lớn nhất đó.
- Nếu các số đôi một nguyên tố cùng nhau thì $\text{BCNN}$ bằng tích của chúng.

#### Luyện tập 1.1
Tìm bội chung nhỏ nhất của:
a) $12$ và $20;$
b) $40;\; 24$ và $60.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) Phân tích: $12 = 2^2 \cdot 3$ và $20 = 2^2 \cdot 5.$
Các thừa số nguyên tố chung và riêng là $2;\; 3;\; 5.$
$$\text{BCNN}(12, 20) = 2^2 \cdot 3 \cdot 5 = 60.$$

b) Phân tích:
- $40 = 2^3 \cdot 5$
- $24 = 2^3 \cdot 3$
- $60 = 2^2 \cdot 3 \cdot 5$
Lấy các thừa số $2;\; 3;\; 5$ với số mũ lớn nhất:
$$\text{BCNN}(40, 24, 60) = 2^3 \cdot 3 \cdot 5 = 8 \cdot 3 \cdot 5 = 120.$$

</details>

#### Luyện tập 1.2
Tìm bội chung nhỏ nhất của:
a) $14$ và $35;$
b) $36;\; 54$ và $90.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) Phân tích: $14 = 2 \cdot 7$ và $35 = 5 \cdot 7.$
$$\text{BCNN}(14, 35) = 2 \cdot 5 \cdot 7 = 70.$$

b) Phân tích:
- $36 = 2^2 \cdot 3^2$
- $54 = 2 \cdot 3^3$
- $90 = 2 \cdot 3^2 \cdot 5$
Lấy các thừa số $2;\; 3;\; 5$ với số mũ lớn nhất là $2^2;\; 3^3;\; 5^1$:
$$\text{BCNN}(36, 54, 90) = 2^2 \cdot 3^3 \cdot 5 = 4 \cdot 27 \cdot 5 = 540.$$

</details>

#### Luyện tập 1.3
Tìm bội chung nhỏ nhất của:
a) $20$ và $28;$
b) $18;\; 30$ và $45.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) Phân tích: $20 = 2^2 \cdot 5$ và $28 = 2^2 \cdot 7.$
$$\text{BCNN}(20, 28) = 2^2 \cdot 5 \cdot 7 = 4 \cdot 35 = 140.$$

b) Phân tích:
- $18 = 2 \cdot 3^2$
- $30 = 2 \cdot 3 \cdot 5$
- $45 = 3^2 \cdot 5$
Lấy các thừa số $2;\; 3;\; 5$ với số mũ lớn nhất:
$$\text{BCNN}(18, 30, 45) = 2 \cdot 3^2 \cdot 5 = 2 \cdot 9 \cdot 5 = 90.$$

</details>

---

### Dạng 2. Tìm bội chung. Tìm số tự nhiên $x$ thoả mãn điều kiện chia hết

**Phương pháp giải:**
- Dùng công thức $\text{BC}(a, b) = \text{B}(\text{BCNN}(a, b)).$
- Với bài toán "tìm số $x$ chia hết cho $a, b, c$ và $m < x < n$":
  1. $x$ là bội chung của $a, b, c \implies x\ \vdots\ \text{BCNN}(a, b, c).$
  2. Tìm $\text{BCNN}(a, b, c).$
  3. Liệt kê các bội của $\text{BCNN}$ và chọn giá trị nằm trong khoảng $(m; n).$

#### Luyện tập 2.1
Tìm $\text{BCNN}(18, 30, 42),$ sau đó tìm tập hợp $\text{BC}(18, 30, 42).$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

Phân tích ra thừa số nguyên tố:
- $18 = 2 \cdot 3^2$
- $30 = 2 \cdot 3 \cdot 5$
- $42 = 2 \cdot 3 \cdot 7$
$$\text{BCNN}(18, 30, 42) = 2 \cdot 3^2 \cdot 5 \cdot 7 = 2 \cdot 9 \cdot 35 = 630.$$
Do đó:
$$\text{BC}(18, 30, 42) = \text{B}(630) = \{0;\; 630;\; 1260;\; 1890;\; \dots\}.$$

</details>

#### Luyện tập 2.2
Tìm số tự nhiên $x,$ biết rằng $x\ \vdots\ 20;\; x\ \vdots\ 15;\; x\ \vdots\ 25$ và $500 < x < 700.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

Vì $x$ cùng chia hết cho $20;\; 15$ và $25$ nên $x$ là bội chung của ba số đó.
Phân tích ra thừa số nguyên tố:
- $20 = 2^2 \cdot 5$
- $15 = 3 \cdot 5$
- $25 = 5^2$
$$\text{BCNN}(20, 15, 25) = 2^2 \cdot 3 \cdot 5^2 = 4 \cdot 3 \cdot 25 = 300.$$
Vậy $x$ là bội của $300$:
$$x \in \{0;\; 300;\; 600;\; 900;\; \dots\}.$$
Vì điều kiện $500 < x < 700$ nên:
$$x = 600.$$

</details>

#### Luyện tập 2.3
Tìm các bội chung của $16;\; 24$ và $32$ nằm trong khoảng từ $200$ đến $400.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

Phân tích ra thừa số nguyên tố:
- $16 = 2^4$
- $24 = 2^3 \cdot 3$
- $32 = 2^5$
$$\text{BCNN}(16, 24, 32) = 2^5 \cdot 3 = 32 \cdot 3 = 96.$$
Bội chung của ba số là bội của $96$:
$$\text{BC}(16, 24, 32) = \{0;\; 96;\; 192;\; 288;\; 384;\; 480;\; \dots\}.$$
Các bội nằm trong khoảng từ $200$ đến $400$ là:
$$288 \quad \text{và} \quad 384.$$

</details>

---

### Dạng 3. Quy đồng mẫu hai hay nhiều phân số

**Phương pháp giải:**
- Bước 1: Rút gọn các phân số về tối giản trước nếu có thể (để mẫu số nhỏ hơn, tính toán đỡ cồng kềnh).
- Bước 2: Tìm mẫu chung bằng cách tính $\text{BCNN}$ của các mẫu.
- Bước 3: Tìm thừa số phụ rồi nhân cả tử và mẫu với thừa số phụ tương ứng.

#### Luyện tập 3.1
Thực hiện phép tính:
a) $\frac{7}{8} + \frac{5}{12};$
b) $\frac{18}{24} - \frac{15}{30}.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Mẫu chung là $\text{BCNN}(8, 12).$
Ta có $8 = 2^3$ và $12 = 2^2 \cdot 3 \implies \text{BCNN}(8, 12) = 2^3 \cdot 3 = 24.$
Thừa số phụ: $24 : 8 = 3$ và $24 : 12 = 2.$
$$\frac{7}{8} + \frac{5}{12} = \frac{7 \cdot 3}{24} + \frac{5 \cdot 2}{24} = \frac{21}{24} + \frac{10}{24} = \frac{31}{24}.$$

b) Rút gọn các phân số về tối giản trước khi tính:
$$\frac{18}{24} = \frac{18 : 6}{24 : 6} = \frac{3}{4}$$
$$\frac{15}{30} = \frac{15 : 15}{30 : 15} = \frac{1}{2}$$
Mẫu chung là $\text{BCNN}(4, 2) = 4.$ Thừa số phụ của phân số thứ hai là $4 : 2 = 2.$
$$\frac{18}{24} - \frac{15}{30} = \frac{3}{4} - \frac{1}{2} = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}.$$

</details>

#### Luyện tập 3.2
Thực hiện phép tính:
a) $\frac{5}{6} + \frac{3}{8};$
b) $\frac{24}{36} - \frac{15}{45}.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) Mẫu chung là $\text{BCNN}(6, 8) = 24.$
Thừa số phụ: $24 : 6 = 4$ và $24 : 8 = 3.$
$$\frac{5}{6} + \frac{3}{8} = \frac{5 \cdot 4}{24} + \frac{3 \cdot 3}{24} = \frac{20}{24} + \frac{9}{24} = \frac{29}{24}.$$

b) Rút gọn trước:
$$\frac{24}{36} = \frac{2}{3} \quad \text{và} \quad \frac{15}{45} = \frac{1}{3}.$$
Cả hai phân số đã cùng mẫu số là $3$:
$$\frac{24}{36} - \frac{15}{45} = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}.$$

</details>

#### Luyện tập 3.3
Quy đồng mẫu hai phân số $\frac{7}{18}$ và $\frac{5}{12}.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

Mẫu chung là $\text{BCNN}(18, 12).$
Ta có $18 = 2 \cdot 3^2$ và $12 = 2^2 \cdot 3 \implies \text{BCNN}(18, 12) = 2^2 \cdot 3^2 = 36.$
Thừa số phụ:
$$36 : 18 = 2 \quad \text{và} \quad 36 : 12 = 3.$$
Quy đồng mẫu hai phân số:
$$\frac{7}{18} = \frac{7 \cdot 2}{18 \cdot 2} = \frac{14}{36}$$
$$\frac{5}{12} = \frac{5 \cdot 3}{12 \cdot 3} = \frac{15}{36}.$$

</details>

---

### Dạng 4. Toán thực tế về bội chung

**Phương pháp giải:**
- Đổi lời văn thành quan hệ bội chung: một hiện tượng lặp lại theo chu kì (chạy quanh sân, xe vào bến, xếp hàng vừa đủ, lịch trực...) thì thời gian hoặc số lượng đối tượng phải là **bội chung** của các chu kì thành phần.
- "Lần đầu tiên lặp lại / sau ít nhất bao nhiêu lâu" $\implies$ tìm **$\text{BCNN}$**.
- "Số học sinh / số quyển sách trong khoảng từ $a$ đến $b$" $\implies$ tìm $\text{BCNN}$ rồi lấy bội thích hợp trong khoảng.

#### Luyện tập 4.1
Cứ $3$ ngày, bạn Minh lại tưới nước cho luống hoa hồng; cứ $4$ ngày, bạn lại làm cỏ và bón phân cho vườn cây. Hôm nay là thứ Hai, Minh vừa tưới hoa vừa bón phân. Hỏi sau ít nhất bao nhiêu ngày nữa thì Minh lại vừa tưới hoa vừa bón phân trong cùng một ngày? Hôm đó là thứ mấy trong tuần?

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

Số ngày trôi qua để Minh cùng làm cả hai việc vừa là bội của $3,$ vừa là bội của $4,$ nên là bội chung của $3$ và $4.$
Để thời gian là ít nhất, số ngày phải bằng $\text{BCNN}(3, 4).$
Vì $3$ và $4$ nguyên tố cùng nhau nên:
$$\text{BCNN}(3, 4) = 3 \cdot 4 = 12\text{ (ngày)}.$$
Vậy sau ít nhất **$12$ ngày** nữa Minh lại làm cả hai việc cùng lúc.
Hôm nay là thứ Hai. Ta có $12 : 7 = 1$ (tuần) dư $5$ ngày.
Cộng thêm $5$ ngày kể từ thứ Hai: Thứ Ba ($+1$), Thứ Tư ($+2$), Thứ Năm ($+3$), Thứ Sáu ($+4$), Thứ Bảy ($+5$).
Vậy hôm đó là **thứ Bảy**.

</details>

#### Luyện tập 4.2
Tại một bến xe buýt, cứ $12$ phút lại có một chuyến xe của Tuyến A xuất phát, cứ $18$ phút lại có một chuyến xe của Tuyến B xuất phát. Lúc $7$ giờ sáng, xe của cả hai tuyến cùng đồng thời xuất phát. Hỏi lần tiếp theo gần nhất mà xe của cả hai tuyến lại cùng xuất phát từ bến là lúc mấy giờ?

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

Khoảng thời gian (phút) đến lần hai xe lại cùng xuất phát là bội chung của $12$ và $18.$
Muốn thời gian là gần nhất, khoảng thời gian đó bằng $\text{BCNN}(12, 18).$
Ta có $12 = 2^2 \cdot 3$ và $18 = 2 \cdot 3^2 \implies \text{BCNN}(12, 18) = 2^2 \cdot 3^2 = 36\text{ (phút)}.$
Vậy sau $36$ phút nữa, hai xe lại cùng xuất phát.
Thời điểm hai xe cùng xuất phát tiếp theo là:
$$7\text{ giờ} + 36\text{ phút} = 7\text{ giờ } 36\text{ phút}.$$

</details>

#### Luyện tập 4.3
Số học sinh khối 6 của một trường THCS trong khoảng từ $250$ đến $350$ em. Khi xếp hàng đồng diễn thể dục, nếu xếp mỗi hàng $10$ em, $12$ em hoặc $15$ em thì đều vừa đủ, không thừa bạn nào. Tính số học sinh khối 6 của trường đó.

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

Gọi số học sinh khối 6 là $x$ ($x \in \mathbb{N}^*$).
Theo đề bài, khi xếp hàng $10;\; 12$ hay $15$ đều vừa đủ nên:
$$x\ \vdots\ 10;\quad x\ \vdots\ 12;\quad x\ \vdots\ 15.$$
Do đó $x$ là bội chung của $10;\; 12$ và $15.$
Phân tích ra thừa số nguyên tố:
- $10 = 2 \cdot 5$
- $12 = 2^2 \cdot 3$
- $15 = 3 \cdot 5$
$$\text{BCNN}(10, 12, 15) = 2^2 \cdot 3 \cdot 5 = 60.$$
Bội chung của ba số là các bội của $60$:
$$x \in \{0;\; 60;\; 120;\; 180;\; 240;\; 300;\; 360;\; \dots\}.$$
Vì số học sinh trong khoảng từ $250$ đến $350$ ($250 \le x \le 350$) nên:
$$x = 300.$$
Vậy khối 6 của trường đó có đúng **$300$ học sinh**.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
a) Số $96$ có phải là bội chung của $16$ và $32$ không? Vì sao?
b) Số $180$ có phải là bội chung của $30$ và $45$ không? Vì sao?

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) Ta có $96 : 16 = 6$ ($96\ \vdots\ 16$) và $96 : 32 = 3$ ($96\ \vdots\ 32$). Vì $96$ là bội của cả hai số nên **$96$ là bội chung của $16$ và $32$**.
b) Ta có $180 : 30 = 6$ ($180\ \vdots\ 30$) và $180 : 45 = 4$ ($180\ \vdots\ 45$). Do đó **$180$ là bội chung của $30$ và $45$**.

</details>

### Bài 2
Viết mười bội đầu tiên (kể cả số $0$) của $5$ và của $8.$ Từ đó chỉ ra các bội chung của $5$ và $8$ trong các số vừa viết.

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

- Mười bội đầu tiên của $5$: $0;\; 5;\; 10;\; 15;\; 20;\; 25;\; 30;\; 35;\; 40;\; 45.$
- Mười bội đầu tiên của $8$: $0;\; 8;\; 16;\; 24;\; 32;\; 40;\; 48;\; 56;\; 64;\; 72.$
Các bội chung của $5$ và $8$ vừa viết được là:
$$0 \quad \text{và} \quad 40.$$

</details>

### Bài 3
Tìm bội chung nhỏ nhất của:
a) $12$ và $48;$
b) $15;\; 45$ và $180;$
c) $24$ và $35;$
d) $28;\; 35$ và $70.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) Vì $48\ \vdots\ 12$ nên $\text{BCNN}(12, 48) = 48.$
b) Vì $180\ \vdots\ 15$ và $180\ \vdots\ 45$ (do $180 = 45 \cdot 4$) nên $\text{BCNN}(15, 45, 180) = 180.$
c) $24 = 2^3 \cdot 3$ và $35 = 5 \cdot 7.$ Hai số nguyên tố cùng nhau nên:
$$\text{BCNN}(24, 35) = 24 \cdot 35 = 840.$$
d) $28 = 2^2 \cdot 7;\; 35 = 5 \cdot 7;\; 70 = 2 \cdot 5 \cdot 7.$
$$\text{BCNN}(28, 35, 70) = 2^2 \cdot 5 \cdot 7 = 140.$$

</details>

### Bài 4
Tìm $\text{BCNN}(20, 35, 50),$ sau đó tìm tập hợp $\text{BC}(20, 35, 50).$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

Phân tích: $20 = 2^2 \cdot 5;\; 35 = 5 \cdot 7;\; 50 = 2 \cdot 5^2.$
$$\text{BCNN}(20, 35, 50) = 2^2 \cdot 5^2 \cdot 7 = 4 \cdot 25 \cdot 7 = 700.$$
Do đó:
$$\text{BC}(20, 35, 50) = \text{B}(700) = \{0;\; 700;\; 1400;\; 2100;\; \dots\}.$$

</details>

### Bài 5
Tìm $\text{BCNN}(7, 8),$ rồi tìm tất cả các bội chung của $7$ và $8$ nhỏ hơn $150.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

Vì $7$ và $8$ nguyên tố cùng nhau nên $\text{BCNN}(7, 8) = 7 \cdot 8 = 56.$
Bội chung của $7$ và $8$ là bội của $56$:
$$\text{B}(56) = \{0;\; 56;\; 112;\; 168;\; \dots\}.$$
Các bội chung nhỏ hơn $150$ là: $0;\; 56;\; 112.$

</details>

### Bài 6
Quy đồng mẫu hai phân số $\frac{5}{14}$ và $\frac{9}{21}.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

Rút gọn phân số thứ hai trước: $\frac{9}{21} = \frac{3}{7}.$
Mẫu chung là $\text{BCNN}(14, 7) = 14.$
Thừa số phụ: $14 : 7 = 2.$
$$\frac{9}{21} = \frac{3}{7} = \frac{3 \cdot 2}{7 \cdot 2} = \frac{6}{14}.$$
Vậy hai phân số quy đồng được là $\frac{5}{14}$ và $\frac{6}{14}.$

</details>

### Bài 7
Một lớp 6A khi xếp hàng $4$ hoặc hàng $6$ đều vừa đủ (không thừa bạn nào). Biết số học sinh của lớp trong khoảng từ $30$ đến $40$ bạn. Hỏi lớp 6A có bao nhiêu học sinh?

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

Số học sinh vừa là bội của $4,$ vừa là bội của $6$ nên là bội chung của $4$ và $6.$
Ta có $4 = 2^2$ và $6 = 2 \cdot 3 \implies \text{BCNN}(4, 6) = 2^2 \cdot 3 = 12.$
Số học sinh là bội của $12$:
$$\{0;\; 12;\; 24;\; 36;\; 48;\; \dots\}.$$
Vì số học sinh trong khoảng từ $30$ đến $40$ nên lớp 6A có đúng **$36$ học sinh**.

</details>

### Bài 8
Khi xếp một số quyển sách thành các chồng $8$ cuốn, $12$ cuốn hoặc $16$ cuốn thì đều vừa đủ. Tìm số sách đó, biết số sách nằm trong khoảng từ $120$ đến $180$ cuốn.

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

Số sách là bội chung của $8;\; 12$ và $16.$
Ta có $8 = 2^3;\; 12 = 2^2 \cdot 3;\; 16 = 2^4 \implies \text{BCNN}(8, 12, 16) = 2^4 \cdot 3 = 48.$
Số sách là bội của $48$:
$$\{0;\; 48;\; 96;\; 144;\; 192;\; \dots\}.$$
Bội nằm trong khoảng từ $120$ đến $180$ là $144.$
Vậy có tất cả **$144$ quyển sách**.

</details>

### Bài 9
Xét hai phát biểu sau và cho biết mỗi bạn nói đúng hay sai, giải thích rõ:
a) Bạn An nói: *"Vì $4$ nhân $6$ bằng $24$ nên $\text{BCNN}(4, 6) = 24$."*
b) Bạn Bình nói: *"Số $0$ là bội chung của $5$ và $7$, mà $0$ là số tự nhiên nhỏ nhất, nên $\text{BCNN}(5, 7) = 0$."*

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

a) Bạn An nói **SAI**.
Chỉ khi hai số nguyên tố cùng nhau thì $\text{BCNN}$ mới bằng tích của chúng. Ở đây $4$ và $6$ có ước chung là $2$ ($\text{ƯCLN}(4, 6) = 2 \neq 1$) nên không được lấy tích. Đúng ra là: $\text{BCNN}(4, 6) = 12.$

b) Bạn Bình nói **SAI**.
Theo định nghĩa, $\text{BCNN}$ là số nhỏ nhất **khác 0** trong tập hợp các bội chung. Số $0$ không được tính là $\text{BCNN}.$ Đúng ra là: $\text{BCNN}(5, 7) = 35.$

</details>

### Bài 10
Theo lịch Can Chi, tên mỗi năm gồm một Thiên Can và một Địa Chi. Phần Can lặp lại sau mỗi $10$ năm, phần Chi lặp lại sau mỗi $12$ năm. Năm $2024$ là năm Giáp Thìn. Hỏi năm Giáp Thìn tiếp theo gần nhất là năm nào?

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Khoảng cách (số năm) giữa hai năm có cùng tên Can Chi phải vừa là bội của $10$ (để lặp lại Can), vừa là bội của $12$ (để lặp lại Chi).
Để là năm tiếp theo gần nhất, số năm phải bằng $\text{BCNN}(10, 12).$
Phân tích: $10 = 2 \cdot 5$ và $12 = 2^2 \cdot 3.$
$$\text{BCNN}(10, 12) = 2^2 \cdot 3 \cdot 5 = 60\text{ (năm)}.$$
Do đó, sau đúng $60$ năm thì năm Giáp Thìn lại xuất hiện một lần nữa.
Năm Giáp Thìn tiếp theo là:
$$2024 + 60 = 2084.$$

</details>

---

## D. Kiểm tra cơ bản (15 phút)

```quiz
type: choice
question: 'Bội chung nhỏ nhất của 6 và 9 là:'
options:
  - '3'
  - '18'
  - '36'
  - '54'
answer: 2
explanation: 'Ta có $6 = 2 \cdot 3$ và $9 = 3^2 \implies \text{BCNN}(6, 9) = 2 \cdot 3^2 = 18.$'
```

```quiz
type: choice
question: 'Biết $a = 2^3 \cdot 3$ và $b = 2 \cdot 3^2.$ Bội chung nhỏ nhất của $a$ và $b$ là:'
options:
  - '6'
  - '24'
  - '72'
  - '144'
answer: 3
explanation: '$\text{BCNN}(a, b) = 2^3 \cdot 3^2 = 8 \cdot 9 = 72.$'
```

```quiz
type: choice
question: 'Mẫu số chung nhỏ nhất khi quy đồng hai phân số $\frac{5}{8}$ và $\frac{7}{12}$ là:'
options:
  - '16'
  - '24'
  - '48'
  - '96'
answer: 2
explanation: 'Mẫu chung nhỏ nhất bằng $\text{BCNN}(8, 12) = 24.$'
```

```quiz
type: choice
question: 'Bội chung nhỏ nhất của hai số nguyên tố cùng nhau 8 và 9 là:'
options:
  - '1'
  - '17'
  - '72'
  - 'Không có'
answer: 3
explanation: 'Vì $\text{ƯCLN}(8, 9) = 1$ nên $\text{BCNN}(8, 9) = 8 \cdot 9 = 72.$'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.** Tìm bội chung nhỏ nhất của:
a) $10$ và $15$:
$10 = 2 \cdot 5$ và $15 = 3 \cdot 5 \implies \text{BCNN}(10, 15) = 2 \cdot 3 \cdot 5 = 30.$
b) $8;\; 12$ và $18$:
$8 = 2^3;\; 12 = 2^2 \cdot 3;\; 18 = 2 \cdot 3^2 \implies \text{BCNN}(8, 12, 18) = 2^3 \cdot 3^2 = 72.$

**Câu 2.** Tìm $\text{BCNN}(14, 21),$ sau đó tìm các bội chung của $14$ và $21$ nhỏ hơn $100$:
- $14 = 2 \cdot 7$ và $21 = 3 \cdot 7 \implies \text{BCNN}(14, 21) = 2 \cdot 3 \cdot 7 = 42.$
- Các bội chung nhỏ hơn $100$ là: $0;\; 42;\; 84.$

**Câu 3.** Tìm số tự nhiên $x,$ biết $x\ \vdots\ 6;\; x\ \vdots\ 8$ và $40 < x < 80$:
Ta có $\text{BCNN}(6, 8) = 24.$ Các bội của $24$ là: $0;\; 24;\; 48;\; 72;\; 96;\; \dots$
Vì $40 < x < 80$ nên $x \in \{48;\; 72\}.$

**Câu 4.** Quy đồng mẫu rồi tính: $\frac{5}{12} + \frac{3}{16}$:
Mẫu chung là $\text{BCNN}(12, 16) = 48.$
Thừa số phụ: $48 : 12 = 4$ và $48 : 16 = 3.$
$$\frac{5}{12} + \frac{3}{16} = \frac{5 \cdot 4}{48} + \frac{3 \cdot 3}{48} = \frac{20}{48} + \frac{9}{48} = \frac{29}{48}.$$

**Câu 5.** Hai bạn An và Bình cùng chạy quanh một công viên. An chạy một vòng hết $12$ phút, Bình chạy một vòng hết $15$ phút. Hai bạn cùng xuất phát tại vạch xuất phát lúc $8$ giờ. Hỏi sau ít nhất bao nhiêu phút hai bạn lại cùng gặp nhau tại vạch xuất phát?
*Giải:* Thời gian ít nhất để hai bạn gặp lại nhau tại vạch xuất phát là $\text{BCNN}(12, 15) = 60$ phút (tức sau $1$ giờ, lúc $9$ giờ sáng).

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Có ba chiếc đèn tín hiệu cùng phát sáng vào lúc $6$ giờ sáng. Đèn thứ nhất cứ $5$ phút phát sáng một lần, đèn thứ hai cứ $8$ phút phát sáng một lần, đèn thứ ba cứ $12$ phút phát sáng một lần. Hỏi lần đầu tiên sau $9$ giờ sáng mà cả ba đèn lại cùng phát sáng là lúc mấy giờ?

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Khoảng thời gian (phút) để cả ba đèn cùng phát sáng trở lại là bội chung của $5;\; 8$ và $12.$
Thời gian ngắn nhất giữa hai lần liên tiếp cả ba đèn cùng sáng là $\text{BCNN}(5, 8, 12).$
Phân tích: $5 = 5;\; 8 = 2^3;\; 12 = 2^2 \cdot 3.$
$$\text{BCNN}(5, 8, 12) = 2^3 \cdot 3 \cdot 5 = 120\text{ (phút)} = 2\text{ giờ}.$$
Như vậy, cứ sau mỗi $2$ giờ thì cả ba đèn lại cùng phát sáng một lần.
Thời điểm cả ba đèn cùng sáng lần lượt là:
- Lúc $6\text{ giờ}$ sáng (bắt đầu)
- Lúc $6\text{ giờ} + 2\text{ giờ} = 8\text{ giờ}$ sáng
- Lúc $8\text{ giờ} + 2\text{ giờ} = 10\text{ giờ}$ sáng
- Lúc $10\text{ giờ} + 2\text{ giờ} = 12\text{ giờ}$ trưa

Vậy lần đầu tiên sau $9$ giờ sáng mà cả ba đèn cùng phát sáng là lúc **$10$ giờ sáng**.

</details>

### Nâng cao 2
Điền hai chữ số thích hợp vào dấu $*$ để số $\overline{531**}$ chia hết cho cả ba số $4;\; 5$ và $6.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

Số $\overline{531**}$ cùng chia hết cho $4;\; 5$ và $6$ khi và chỉ khi nó là bội chung của ba số đó, tức là chia hết cho $\text{BCNN}(4, 5, 6).$
Phân tích: $4 = 2^2;\; 5 = 5;\; 6 = 2 \cdot 3 \implies \text{BCNN}(4, 5, 6) = 2^2 \cdot 3 \cdot 5 = 60.$
Do đó, số cần tìm phải chia hết cho $60.$
Các số có dạng $\overline{531**}$ nằm trong đoạn từ $53100$ đến $53199.$
Thực hiện phép chia:
$$53100 : 60 = 885\text{ (chia hết, số dư bằng 0)}.$$
Do đó số $53100$ thỏa mãn đề bài.
Bội tiếp theo của $60$ là:
$$53100 + 60 = 53160\text{ (thỏa mãn)}.$$
Bội kế tiếp:
$$53160 + 60 = 53220 > 53199\text{ (loại)}.$$
Vậy có hai số thỏa mãn là **$53100$** (hai chữ số điền vào là $00$) và **$53160$** (hai chữ số điền vào là $60$).

</details>

### Nâng cao 3
Tìm hai số tự nhiên $a$ và $b$ với $a < b,$ biết rằng $\text{ƯCLN}(a, b) = 15$ và $\text{BCNN}(a, b) = 180.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Áp dụng hệ thức liên hệ giữa $\text{ƯCLN}$ và $\text{BCNN}$:
$$a \cdot b = \text{ƯCLN}(a, b) \cdot \text{BCNN}(a, b) = 15 \cdot 180 = 2700.$$
Vì $\text{ƯCLN}(a, b) = 15$ nên ta đặt:
$$a = 15m \quad \text{và} \quad b = 15n$$
với $m, n \in \mathbb{N}^*$ thỏa mãn $\text{ƯCLN}(m, n) = 1$ và $m < n$ (do $a < b$).
Thay vào tích $a \cdot b$:
$$15m \cdot 15n = 2700 \implies 225 \cdot mn = 2700 \implies mn = 12.$$
Vì $m < n$ và $\text{ƯCLN}(m, n) = 1,$ ta tìm các cặp $(m; n)$ có tích bằng $12$:
- Cặp 1: $m = 1 \implies n = 12 \implies a = 15 \cdot 1 = 15;\; b = 15 \cdot 12 = 180.$
- Cặp 2: $m = 3 \implies n = 4 \implies a = 15 \cdot 3 = 45;\; b = 15 \cdot 4 = 60.$
*(Loại cặp $m = 2, n = 6$ vì $\text{ƯCLN}(2, 6) = 2 \neq 1$).*

**Thử lại:**
- $\text{ƯCLN}(15, 180) = 15$ và $\text{BCNN}(15, 180) = 180$ (thỏa mãn).
- $\text{ƯCLN}(45, 60) = 15$ và $\text{BCNN}(45, 60) = 180$ (thỏa mãn).

Vậy các cặp $(a; b)$ thỏa mãn là:
$$(a; b) \in \{(15; 180);\; (45; 60)\}.$$

</details>

### Nâng cao 4
Tìm các số tự nhiên $a, b, c$ nhỏ nhất khác $0$ sao cho:
$$12a = 18b = 30c.$$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Đặt $12a = 18b = 30c = M.$
Vì $M\ \vdots\ 12,\; M\ \vdots\ 18,\; M\ \vdots\ 30$ nên $M$ là bội chung của $12;\; 18$ và $30.$
Để $a, b, c$ là các số tự nhiên nhỏ nhất khác $0,$ thì $M$ phải là số tự nhiên nhỏ nhất khác $0,$ tức là:
$$M = \text{BCNN}(12, 18, 30).$$
Phân tích ra thừa số nguyên tố:
- $12 = 2^2 \cdot 3$
- $18 = 2 \cdot 3^2$
- $30 = 2 \cdot 3 \cdot 5$
$$M = \text{BCNN}(12, 18, 30) = 2^2 \cdot 3^2 \cdot 5 = 4 \cdot 9 \cdot 5 = 180.$$
Khi đó:
$$a = 180 : 12 = 15$$
$$b = 180 : 18 = 10$$
$$c = 180 : 30 = 6.$$
Vậy các số cần tìm là: $a = 15;\; b = 10;\; c = 6.$

</details>

### Nâng cao 5
Hai bạn An và Bình cùng tham gia câu lạc bộ bơi lội. An cứ $6$ ngày đi bơi một lần, Bình cứ $8$ ngày đi bơi một lần. Cả hai bạn cùng gặp nhau tại bể bơi vào ngày Chủ Nhật 1-3-2026. Hỏi lần tiếp theo hai bạn lại cùng gặp nhau tại bể bơi vào một ngày Chủ Nhật là sau bao nhiêu ngày?

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Hai bạn cùng gặp nhau tại bể bơi sau những khoảng thời gian là bội chung của $6$ và $8.$
Khoảng thời gian ngắn nhất giữa hai lần gặp nhau liên tiếp là:
$$\text{BCNN}(6, 8) = 24\text{ (ngày)}.$$
Để lần gặp nhau đó lại rơi đúng vào một ngày **Chủ Nhật**, thì số ngày trôi qua bắt buộc phải chia hết cho $7$ (vì một tuần có $7$ ngày).
Do đó, số ngày cần tìm vừa là bội của $24,$ vừa là bội của $7,$ tức là bội của $\text{BCNN}(24, 7).$
Vì $24$ và $7$ nguyên tố cùng nhau nên:
$$\text{BCNN}(24, 7) = 24 \cdot 7 = 168\text{ (ngày)}.$$
Vậy lần tiếp theo hai bạn lại cùng gặp nhau vào một ngày Chủ Nhật là sau đúng **$168$ ngày** (tức đúng $168 : 7 = 24$ tuần lễ sau đó).

</details>
