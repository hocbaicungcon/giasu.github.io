---
title: 'Toán 6 Bài 2: Cách ghi số tự nhiên - Lý thuyết, bài tập và số La Mã chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 2 Cách ghi số tự nhiên: hệ thập phân, cấu tạo số, cách đọc viết số La Mã (1-30), kèm bài tập trắc nghiệm tương tác và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số tự nhiên
  - Số La Mã
  - Số học 6
  - Kết nối tri thức
grade: 6
---

Bài học **Bài 2: Cách ghi số tự nhiên** thuộc Chương I: *Tập hợp các số tự nhiên* trong chương trình Toán 6. Bài viết hệ thống hoá toàn bộ kiến thức trọng tâm về hệ thập phân, cấu tạo số tự nhiên, quy tắc đọc viết số La Mã, cùng các dạng bài tập tự luận và trắc nghiệm tương tác có nút xem lời giải chi tiết.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Trước khi vào bài mới, các em hãy cùng hoàn thành 5 câu hỏi ôn tập sau:

**Câu 1.** Viết tập hợp $A$ các số tự nhiên nhỏ hơn 7 theo hai cách.

<details>
<summary>Xem đáp án Câu 1</summary>

- **Cách 1 (liệt kê):** $A = \{0; 1; 2; 3; 4; 5; 6\}.$
- **Cách 2 (tính chất đặc trưng):** $A = \{x \in \mathbb{N} \mid x < 7\}.$

</details>

**Câu 2.** Điền kí hiệu thích hợp ($\in$ hoặc $\notin$) vào chỗ chấm:

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - '$0 \notin \mathbb{N}$'
  - '$0 \in \mathbb{N}^*$'
  - '$9 \in \mathbb{N}^*$'
  - '$4{,}5 \in \mathbb{N}$'
answer: 3
explanation: 'Số 9 là số tự nhiên khác 0 nên $9 \in \mathbb{N}^*$ là đúng. Các khẳng định khác đều sai vì $0 \in \mathbb{N}$, $0 \notin \mathbb{N}^*$ và $4{,}5 \notin \mathbb{N}.$'
```

<details>
<summary>Xem lời giải đầy đủ Câu 2</summary>

- $0 \in \mathbb{N}$
- $0 \notin \mathbb{N}^*$
- $9 \in \mathbb{N}^*$
- $4{,}5 \notin \mathbb{N}$ (vì $4{,}5$ là số thập phân, không phải số tự nhiên)

</details>

**Câu 3.** Cho $C = \{x \in \mathbb{N} \mid 6 < x \le 11\}.$ Hãy liệt kê các phần tử của $C$ và cho biết $C$ có bao nhiêu phần tử.

<details>
<summary>Xem đáp án Câu 3</summary>

- Các số tự nhiên lớn hơn 6 và nhỏ hơn hoặc bằng 11 là: $7; 8; 9; 10; 11.$
- Vậy $C = \{7; 8; 9; 10; 11\}.$ Tập hợp $C$ có **5 phần tử**.

</details>

**Câu 4.**
- a) Đọc số $6\ 080\ 403.$
- b) Viết số "bảy nghìn không trăm linh năm" bằng chữ số.

<details>
<summary>Xem đáp án Câu 4</summary>

- a) $6\ 080\ 403$ đọc là: **Sáu triệu không trăm tám mươi nghìn bốn trăm linh ba**.
- b) Bảy nghìn không trăm linh năm viết là: **$7005$**.

</details>

**Câu 5.** Trong số $4\ 926$, chữ số hàng trăm là chữ số nào? Chữ số 9 trong số đó chỉ mấy trăm?

```quiz
type: choice
question: 'Trong số $4\ 926$, giá trị của chữ số 9 là bao nhiêu?'
options:
  - '9'
  - '90'
  - '900'
  - '9000'
answer: 3
explanation: 'Trong số $4\ 926$, chữ số 9 đứng ở hàng trăm nên chỉ 9 trăm, tức có giá trị bằng 900.'
```

<details>
<summary>Xem đáp án Câu 5</summary>

Trong số $4\ 926$:
- Chữ số hàng trăm là **9**.
- Chữ số 9 đó chỉ **9 trăm**, tức là có giá trị bằng **900**.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Ghi số tự nhiên trong hệ thập phân

#### a) Mười chữ số và nguyên tắc viết số
Để ghi mọi số tự nhiên trong hệ thập phân, người ta dùng **10 chữ số**:
$$0;\ 1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8;\ 9$$

- Một số tự nhiên có thể gồm **một** hoặc **nhiều chữ số**:
  - $7$ là số có một chữ số.
  - $3565$ là số có bốn chữ số (gồm các chữ số $3; 5; 6; 5$).
- **Cách phân tách lớp:** Khi viết số tự nhiên có từ 4 chữ số trở lên, ta thường tách thành từng lớp (mỗi lớp gồm 3 chữ số kể từ phải sang trái) để dễ đọc:
  $$\text{Ví dụ: } 2\ 714\ 635$$
- **Hàng và lớp:** Vị trí của mỗi chữ số trong một số gọi là **hàng**. Cứ $10$ đơn vị ở một hàng thì tạo thành $1$ đơn vị ở hàng liền trước nó ($10$ đơn vị $= 1$ chục; $10$ chục $= 1$ trăm; $10$ trăm $= 1$ nghìn,...).

| Lớp | Lớp tỉ | Lớp triệu | | | Lớp nghìn | | | Lớp đơn vị | | |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Hàng** | Hàng tỉ | Trăm triệu | Chục triệu | Hàng triệu | Trăm nghìn | Chục nghìn | Hàng nghìn | Hàng trăm | Hàng chục | Hàng đơn vị |
| **Giá trị** | $10^9$ | $10^8$ | $10^7$ | $10^6$ | $10^5$ | $10^4$ | $10^3$ | $100$ | $10$ | $1$ |

> **Ví dụ 1.** Cho số $23\ 746.$
> - a) Số đó có bao nhiêu chữ số?
> - b) Hãy đọc số đó.

<details>
<summary>Xem lời giải Ví dụ 1</summary>

- a) Số $23\ 746$ có **5 chữ số**, lần lượt là $2; 3; 7; 4; 6.$
- b) Tách lớp từ phải sang trái: $23 \mid 746.$ Đọc là: **Hai mươi ba nghìn bảy trăm bốn mươi sáu**.

</details>

---

### 2. Cấu tạo số tự nhiên

#### a) Giá trị của chữ số
- Giá trị của một chữ số phụ thuộc vào **vị trí hàng** của nó trong số đó.
  - Chẳng hạn trong số $2460$, chữ số $4$ nằm ở hàng trăm nên có giá trị là: $4 \times 100 = 400.$
- Mọi số tự nhiên đều viết được thành **tổng giá trị các chữ số** của nó:
  $$4603 = 4 \times 1000 + 6 \times 100 + 0 \times 10 + 3 = 4000 + 600 + 3$$

#### b) Kí hiệu số có nhiều chữ số
Để biểu diễn các số có các chữ số là chữ cái, ta dùng dấu gạch ngang trên đầu để phân biệt với tích của các chữ cái:
- **Số có hai chữ số:** $\overline{ab} = a \times 10 + b$ (với $a \ne 0$).
- **Số có ba chữ số:** $\overline{abc} = a \times 100 + b \times 10 + c$ (với $a \ne 0$).
- **Số có bốn chữ số:** $\overline{abcd} = a \times 1000 + b \times 100 + c \times 10 + d$ (với $a \ne 0$).

> **Ví dụ 2.**
> - a) Trong số $3\ 526\ 481$, chữ số 5 nằm ở hàng nào và có giá trị là bao nhiêu?
> - b) Viết số $4603$ thành tổng giá trị các chữ số của nó.

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- a) Kể từ phải sang trái, các hàng lần lượt là: đơn vị (1), chục (8), trăm (4), nghìn (6), chục nghìn (2), trăm nghìn (5), triệu (3).
  - Vậy chữ số **5** ở **hàng trăm nghìn**, có giá trị là:
    $$5 \times 100\ 000 = 500\ 000$$
- b) Viết thành tổng giá trị các chữ số:
  $$4603 = 4 \times 1000 + 6 \times 100 + 0 \times 10 + 3 = 4000 + 600 + 3$$

</details>

---

### 3. Số La Mã

Hệ số La Mã là hệ đếm cổ xưa vẫn được sử dụng ngày nay trên mặt đồng hồ, ghi số thứ tự các thế kỉ, mục lục sách báo, số hiệu chương hồi,...

#### a) Các chữ số La Mã cơ bản
Trong chương trình Toán 6, chúng ta học cách ghi các số La Mã từ $1$ đến $30.$ Hệ thống này sử dụng **ba chữ số cơ bản**:

| Chữ số La Mã | I | V | X |
| :---: | :---: | :---: | :---: |
| **Giá trị** | $1$ | $5$ | $10$ |

#### b) Bảng số La Mã từ 1 đến 10
Bên cạnh việc lặp lại chữ số I (không quá 3 lần), người ta dùng hai cụm đặc biệt theo nguyên tắc trừ: $\text{IV} = 5 - 1 = 4$ và $\text{IX} = 10 - 1 = 9.$

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **I** | **II** | **III** | **IV** | **V** | **VI** | **VII** | **VIII** | **IX** | **X** |

#### c) Quy tắc viết số từ 11 đến 30
- **Từ 11 đến 20:** Thêm **X** vào bên trái mỗi số từ I đến X.
  $$\text{Ví dụ: } 11 = \text{XI};\quad 14 = \text{XIV};\quad 19 = \text{XIX};\quad 20 = \text{XX}$$
- **Từ 21 đến 30:** Thêm **XX** vào bên trái mỗi số từ I đến X.
  $$\text{Ví dụ: } 21 = \text{XXI};\quad 24 = \text{XXIV};\quad 26 = \text{XXVI};\quad 30 = \text{XXX}$$

> **Ví dụ 3.**
> - a) Đọc các số La Mã: $\text{XXVI}$; $\text{XVIII}.$
> - b) Viết các số $4$; $16$; $29$ bằng chữ số La Mã.

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) Đọc số:
  - $\text{XXVI} = \text{XX} + \text{VI} = 20 + 6 = 26.$
  - $\text{XVIII} = \text{X} + \text{V} + \text{III} = 10 + 5 + 3 = 18.$
- b) Viết số:
  - $4 = \text{IV}.$
  - $16 = 10 + 6 = \text{XVI}.$
  - $29 = 20 + 9 = \text{XXIX}.$

</details>

---

### 4. Bốn điều chú ý rất dễ nhầm lẫn

1. **Phân biệt số và chữ số:**
   - Số $3565$ là **một số**.
   - Các chữ số tạo nên nó là: $3; 5; 6; 5.$
   - Tập hợp các chữ số của số $3565$ là $\{3; 5; 6\}$ (mỗi chữ số chỉ viết một lần).
2. **Chữ số 0 không đứng đầu bên trái:**
   - Số tự nhiên không bắt đầu bằng chữ số 0: viết $836$, không viết là $0836.$
3. **Phân biệt $\overline{ab}$ với tích $a \times b$:**
   - $\overline{ab}$ là số có hai chữ số: $\overline{ab} = 10a + b.$
   - Ví dụ với $a = 4, b = 9$: $\overline{ab} = 49$, trong khi $a \times b = 4 \times 9 = 36.$
4. **Quy tắc số La Mã:**
   - **Không viết quá 3 chữ số giống nhau đứng liền nhau**: $4 = \text{IV}$ (không viết $\text{IIII}$), $9 = \text{IX}$ (không viết $\text{VIIII}$).
   - **Chữ số nhỏ đứng trước chữ số lớn chỉ áp dụng cho IV và IX**: $15 = \text{XV}$ (không viết $\text{VX}$).

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Ghi số tự nhiên, phân biệt số và chữ số, giá trị của chữ số

**Phương pháp giải:**
- **Bước 1:** Tách số thành từng lớp gồm 3 chữ số kể từ phải sang trái để đọc chính xác.
- **Bước 2:** Để tìm giá trị của một chữ số, xác định hàng của chữ số đó (từ phải sang trái: đơn vị, chục, trăm, nghìn, chục nghìn, trăm nghìn, triệu,...), sau đó nhân chữ số với giá trị của hàng.
- **Lưu ý:** Khi viết tập hợp các chữ số của một số, mỗi chữ số chỉ liệt kê một lần duy nhất.

**Luyện tập 1.1.**
- a) Viết tập hợp các chữ số của số $3478.$
- b) Viết tập hợp các chữ số của số $3030.$

```quiz
type: choice
question: 'Tập hợp các chữ số của số $3030$ có bao nhiêu phần tử?'
options:
  - '4 phần tử'
  - '3 phần tử'
  - '2 phần tử'
  - '1 phần tử'
answer: 3
explanation: 'Số 3030 gồm các chữ số 3, 0, 3, 0. Vì mỗi phần tử trong tập hợp chỉ được viết một lần nên tập hợp các chữ số là $\{0; 3\}$, gồm đúng 2 phần tử.'
```

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- a) Số $3478$ có các chữ số $3; 4; 7; 8 \implies$ Tập hợp cần tìm là:
  $$\{3; 4; 7; 8\}$$
- b) Số $3030$ có các chữ số $3; 0; 3; 0.$ Mỗi chữ số chỉ viết 1 lần $\implies$ Tập hợp cần tìm là:
  $$\{0; 3\}$$

</details>

**Luyện tập 1.2.** Cho các số: $23\ 746$; $250\ 873$; $2\ 714\ 635$; $3\ 178\ 924.$
- a) Đọc mỗi số đã cho.
- b) Chữ số 7 trong mỗi số đã cho có giá trị là bao nhiêu?

```quiz
type: choice
question: 'Trong số $2\ 714\ 635$, chữ số 7 nằm ở hàng nào và có giá trị bao nhiêu?'
options:
  - 'Hàng trăm, giá trị 700'
  - 'Hàng nghìn, giá trị 7000'
  - 'Hàng trăm nghìn, giá trị 700 000'
  - 'Hàng triệu, giá trị 7 000 000'
answer: 3
explanation: 'Đếm từ phải sang trái: 5 (đơn vị), 3 (chục), 6 (trăm), 4 (nghìn), 1 (chục nghìn), 7 (trăm nghìn). Vậy chữ số 7 ở hàng trăm nghìn và có giá trị là 700 000.'
```

<details>
<summary>Xem lời giải Luyện tập 1.2</summary>

- a) **Đọc các số:**
  - $23\ 746$: Hai mươi ba nghìn bảy trăm bốn mươi sáu.
  - $250\ 873$: Hai trăm năm mươi nghìn tám trăm bảy mươi ba.
  - $2\ 714\ 635$: Hai triệu bảy trăm mười bốn nghìn sáu trăm ba mươi lăm.
  - $3\ 178\ 924$: Ba triệu một trăm bảy mươi tám nghìn chín trăm hai mươi tư.
- b) **Giá trị của chữ số 7 trong từng số:**
  - $23\ 746$: chữ số 7 ở hàng trăm $\implies$ giá trị là **$700$**.
  - $250\ 873$: chữ số 7 ở hàng chục $\implies$ giá trị là **$70$**.
  - $2\ 714\ 635$: chữ số 7 ở hàng trăm nghìn $\implies$ giá trị là **$700\ 000$**.
  - $3\ 178\ 924$: chữ số 7 ở hàng chục nghìn $\implies$ giá trị là **$70\ 000$**.

</details>

**Luyện tập 1.3.** Viết các số $5639$ và $14\ 208$ thành tổng giá trị các chữ số của nó.

<details>
<summary>Xem lời giải Luyện tập 1.3</summary>

- $5639 = 5 \times 1000 + 6 \times 100 + 3 \times 10 + 9 = 5000 + 600 + 30 + 9.$
- $14\ 208 = 1 \times 10\ 000 + 4 \times 1000 + 2 \times 100 + 0 \times 10 + 8 = 10\ 000 + 4000 + 200 + 8.$

</details>

---

### Dạng 2. Viết số tự nhiên theo yêu cầu cho trước

**Phương pháp giải:**
- **Bước 1:** Xác định số cần viết có bao nhiêu chữ số, mỗi hàng nhận giá trị nào.
- **Bước 2:** Chú ý các điều kiện ràng buộc:
  - Chữ số đứng đầu bên trái luôn phải **khác 0**.
  - Muốn tạo số **lớn nhất**: chọn chữ số lớn nhất xếp vào hàng cao nhất.
  - Muốn tạo số **nhỏ nhất**: chọn chữ số nhỏ nhất khác 0 xếp vào hàng cao nhất, sau đó xếp chữ số 0 (nếu có) vào hàng tiếp theo.

**Luyện tập 2.1.**
- a) Viết số tự nhiên nhỏ nhất có năm chữ số.
- b) Viết số tự nhiên nhỏ nhất có năm chữ số khác nhau.

```quiz
type: choice
question: 'Số tự nhiên nhỏ nhất có năm chữ số KHÁC NHAU là số nào?'
options:
  - '10 000'
  - '10 234'
  - '12 345'
  - '01 234'
answer: 2
explanation: 'Hàng chục nghìn nhỏ nhất khác 0 là 1. Hàng nghìn nhỏ nhất là 0. Hàng trăm nhỏ nhất là 2. Hàng chục là 3. Hàng đơn vị là 4. Ta được số 10 234.'
```

<details>
<summary>Xem lời giải Luyện tập 2.1</summary>

- a) Chữ số hàng chục nghìn nhỏ nhất khác 0 là 1, bốn chữ số còn lại nhỏ nhất là 0 $\implies$ Số cần tìm là **$10\ 000$**.
- b) Năm chữ số phải khác nhau: hàng chục nghìn chọn 1, hàng nghìn chọn 0, hàng trăm chọn 2, hàng chục chọn 3, hàng đơn vị chọn 4 $\implies$ Số cần tìm là **$10\ 234$**.

</details>

**Luyện tập 2.2.**
- a) Dùng ba chữ số $2; 5; 8$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.
- b) Dùng ba chữ số $0; 3; 7$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.

<details>
<summary>Xem lời giải Luyện tập 2.2</summary>

- a) Các số có ba chữ số khác nhau lập từ $2; 5; 8$:
  $$258;\ 285;\ 528;\ 582;\ 825;\ 852 \quad (\text{có 6 số})$$
- b) Chữ số 0 không thể đứng đầu, nên hàng trăm chỉ có thể là 3 hoặc 7:
  $$307;\ 370;\ 703;\ 730 \quad (\text{có 4 số})$$

</details>

**Luyện tập 2.3.** Dùng sáu chữ số $0; 1; 4; 6; 7; 8$, hãy viết số lớn nhất và số nhỏ nhất có sáu chữ số (mỗi chữ số chỉ được viết một lần).

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

- **Số lớn nhất:** Xếp các chữ số giảm dần từ trái sang phải: $8; 7; 6; 4; 1; 0 \implies \mathbf{876\ 410}.$
- **Số nhỏ nhất:** Chữ số đầu tiên phải khác 0 nên chọn 1. Sau đó xếp các chữ số còn lại theo thứ tự tăng dần: $0; 4; 6; 7; 8 \implies \mathbf{104\ 678}.$

</details>

---

### Dạng 3. Đọc và viết số La Mã

**Phương pháp giải:**
- **Đọc số La Mã:** Tách số thành từng cụm từ trái sang phải ($\text{XX}, \text{X}, \text{IX}, \text{IV}, \text{V}, \dots$), sau đó cộng giá trị của các cụm lại.
- **Viết số La Mã:** Tách số thành $\text{Phần chục} + \text{Phần đơn vị}$:
  - Phần chục viết bằng $\text{X}$, $\text{XX}$ hoặc $\text{XXX}.$
  - Phần đơn vị viết theo bảng chuẩn từ $\text{I}$ đến $\text{IX}.$

**Luyện tập 3.1.**
- a) Đọc các số La Mã sau: $\text{IV}$; $\text{XIV}$; $\text{XXIII}$; $\text{XXVII}.$
- b) Viết các số sau bằng chữ số La Mã: $16$; $14$; $25$; $17$; $30.$

```quiz
type: choice
question: 'Số 14 được viết bằng chữ số La Mã là:'
options:
  - 'XIIII'
  - 'XIV'
  - 'VIX'
  - 'IVX'
answer: 2
explanation: '14 = 10 + 4 = X + IV = XIV. Trong hệ số La Mã không được viết 4 chữ số I liền nhau (XIIII).'
```

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- a) **Đọc số La Mã:**
  - $\text{IV} = 4$
  - $\text{XIV} = 10 + 4 = 14$
  - $\text{XXIII} = 20 + 3 = 23$
  - $\text{XXVII} = 20 + 7 = 27$
- b) **Viết số La Mã:**
  - $16 = \text{XVI}$
  - $14 = \text{XIV}$
  - $25 = \text{XXV}$
  - $17 = \text{XVII}$
  - $30 = \text{XXX}$

</details>

**Luyện tập 3.2.**
- a) Đọc các số La Mã: $\text{XXII}$; $\text{XXIV}$; $\text{XVI}$; $\text{XVIII}$; $\text{XXVI}.$
- b) Viết các số sau bằng chữ số La Mã: $8$; $13$; $19$; $28$; $24.$

<details>
<summary>Xem lời giải Luyện tập 3.2</summary>

- a) $\text{XXII} = 22$; $\text{XXIV} = 24$; $\text{XVI} = 16$; $\text{XVIII} = 18$; $\text{XXVI} = 26.$
- b) $8 = \text{VIII}$; $13 = \text{XIII}$; $19 = \text{XIX}$; $28 = \text{XXVIII}$; $24 = \text{XXIV}.$

</details>

**Luyện tập 3.3.**
- a) Đọc các số La Mã: $\text{XV}$; $\text{XXVII}$; $\text{XXIX}.$
- b) Viết các số sau bằng chữ số La Mã: $6$; $9$; $21$; $26.$

<details>
<summary>Xem lời giải Luyện tập 3.3</summary>

- a) $\text{XV} = 15$; $\text{XXVII} = 27$; $\text{XXIX} = 29.$
- b) $6 = \text{VI}$; $9 = \text{IX}$; $21 = \text{XXI}$; $26 = \text{XXVI}.$

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Cho các số: $53\ 467$; $264\ 893$; $20\ 903\ 864$; $4\ 238\ 723\ 569.$
- a) Đọc mỗi số đã cho.
- b) Chữ số 4 trong mỗi số đã cho có giá trị là bao nhiêu?

<details>
<summary>Xem lời giải Bài 1</summary>

- a) **Đọc các số:**
  - $53\ 467$: Năm mươi ba nghìn bốn trăm sáu mươi bảy.
  - $264\ 893$: Hai trăm sáu mươi tư nghìn tám trăm chín mươi ba.
  - $20\ 903\ 864$: Hai mươi triệu chín trăm linh ba nghìn tám trăm sáu mươi tư.
  - $4\ 238\ 723\ 569$: Bốn tỉ hai trăm ba mươi tám triệu bảy trăm hai mươi ba nghìn năm trăm sáu mươi chín.
- b) **Giá trị của chữ số 4:**
  - $53\ 467$: Chữ số 4 ở hàng trăm $\implies$ giá trị là **$400$**.
  - $264\ 893$: Chữ số 4 ở hàng nghìn $\implies$ giá trị là **$4000$**.
  - $20\ 903\ 864$: Chữ số 4 ở hàng đơn vị $\implies$ giá trị là **$4$**.
  - $4\ 238\ 723\ 569$: Chữ số 4 ở hàng tỉ $\implies$ giá trị là **$4\ 000\ 000\ 000$**.

</details>

**Bài 2.**
- a) Viết tập hợp các chữ số của số $24\ 638.$
- b) Viết tập hợp các chữ số của số $88\ 888.$

<details>
<summary>Xem lời giải Bài 2</summary>

- a) Tập hợp các chữ số của số $24\ 638$ là: $\{2; 3; 4; 6; 8\}.$
- b) Số $88\ 888$ chỉ gồm các chữ số 8, mỗi phần tử chỉ viết 1 lần $\implies$ Tập hợp là: $\{8\}.$

</details>

**Bài 3.** Hoàn thành bảng xác định hàng và giá trị của các chữ số sau:

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $2\ 536$ | $5$ | ? | ? |
| $3\ 408$ | $4$ | ? | ? |
| $36\ 980\ 571$ | $9$ | ? | ? |
| $2\ 356$ | $5$ | ? | ? |
| $23\ 876$ | $8$ | ? | ? |

<details>
<summary>Xem đáp án bảng Bài 3</summary>

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $2\ 536$ | $5$ | **Hàng trăm** | **$500$** |
| $3\ 408$ | $4$ | **Hàng trăm** | **$400$** |
| $36\ 980\ 571$ | $9$ | **Hàng trăm nghìn** | **$900\ 000$** |
| $2\ 356$ | $5$ | **Hàng chục** | **$50$** |
| $23\ 876$ | $8$ | **Hàng trăm** | **$800$** |

</details>

**Bài 4.** Viết các số $62\ 485$ và $2430$ thành tổng giá trị các chữ số của nó.

<details>
<summary>Xem lời giải Bài 4</summary>

- $62\ 485 = 60\ 000 + 2000 + 400 + 80 + 5.$
- $2430 = 2000 + 400 + 30 + 0 = 2000 + 400 + 30.$

</details>

**Bài 5.**
- a) Viết số tự nhiên lớn nhất có bốn chữ số.
- b) Viết số tự nhiên lớn nhất có bốn chữ số khác nhau.

<details>
<summary>Xem lời giải Bài 5</summary>

- a) Số tự nhiên lớn nhất có bốn chữ số là **$9999$**.
- b) Bốn chữ số lớn nhất khác nhau là $9; 8; 7; 6 \implies$ Số cần tìm là **$9876$**.

</details>

**Bài 6.**
- a) Dùng ba chữ số $3; 7; 8$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.
- b) Dùng ba chữ số $5; 6; 0$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.

<details>
<summary>Xem lời giải Bài 6</summary>

- a) Lập được 6 số: $378;\ 387;\ 738;\ 783;\ 837;\ 873.$
- b) Vì chữ số 0 không thể đứng đầu, nên hàng trăm là 5 hoặc 6: lập được 4 số là $506;\ 560;\ 605;\ 650.$

</details>

**Bài 7.** Dùng các chữ số $2; 5; 0$ để viết một số tự nhiên có ba chữ số khác nhau, trong đó chữ số 2 có giá trị là 20.

<details>
<summary>Xem lời giải Bài 7</summary>

- Chữ số 2 có giá trị bằng 20 nghĩa là chữ số 2 đứng ở **hàng chục**.
- Số có dạng $\overline{a2b}.$ Vì $a \ne 0$ nên hàng trăm phải chọn chữ số $5$, còn hàng đơn vị là $0.$
- Vậy số cần tìm là **$520$**.

</details>

**Bài 8.** Một số tự nhiên được viết bởi ba chữ số 0 và ba chữ số 7 nằm xen kẽ nhau. Tìm số đó.

<details>
<summary>Xem lời giải Bài 8</summary>

- Số đó có tổng cộng 6 chữ số.
- Chữ số đầu tiên bên trái không thể là chữ số 0, do đó chữ số đầu tiên bắt buộc phải là 7.
- Các chữ số 0 và 7 xen kẽ nhau theo quy luật: $7, 0, 7, 0, 7, 0.$
- Vậy số cần tìm là **$707\ 070$** (đọc là: bảy trăm linh bảy nghìn không trăm bảy mươi).

</details>

**Bài 9.** Mỗi cách viết sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Số tự nhiên gồm bốn trăm mười lăm đơn vị được viết là $0415.$
- b) Với $x = 4$ và $y = 9$ thì $\overline{xy} = 36.$
- c) Số 9 viết bằng chữ số La Mã là $\text{VIIII}.$
- d) Số 14 viết bằng chữ số La Mã là $\text{XIIII}.$

<details>
<summary>Xem lời giải Bài 9</summary>

- a) **Sai**, vì chữ số 0 không được đứng đầu bên trái số tự nhiên. Sửa lại: **$415$**.
- b) **Sai**, vì $\overline{xy}$ là số có hai chữ số chứ không phải phép nhân $x \times y.$ Đúng ra: $\overline{xy} = 49$ (còn $4 \times 9 = 36$).
- c) **Sai**, vì không được viết quá ba chữ số giống nhau đứng liền nhau. Sửa lại: **$\text{IX}$**.
- d) **Sai**, vì 14 phân tích thành $10 + 4.$ Sửa lại: **$\text{XIV}$**.

</details>

**Bài 10.** Bạn Nam xếp 12 que diêm thành phép tính bằng số La Mã dưới đây, nhưng kết quả chưa đúng:
$$\text{XI} - \text{IV} = \text{V}$$
*(Phép tính này sai vì $11 - 4 = 7 \ne 5$)*. Hãy đổi chỗ đúng một que diêm để được một phép tính đúng.

<div style="display:flex; justify-content:center; align-items:center; margin:16px 0;">
  <svg width="340" height="80" viewBox="0 0 340 80" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <!-- XI -->
    <line x1="25" y1="20" x2="45" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="45" y1="20" x2="25" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="20" x2="60" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <!-- MINUS -->
    <line x1="85" y1="40" x2="110" y2="40" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
    <!-- IV -->
    <line x1="135" y1="20" x2="135" y2="60" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <line x1="155" y1="20" x2="170" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="185" y1="20" x2="170" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <!-- EQUAL -->
    <line x1="210" y1="33" x2="235" y2="33" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
    <line x1="210" y1="47" x2="235" y2="47" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
    <!-- V -->
    <line x1="265" y1="20" x2="280" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="295" y1="20" x2="280" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  </svg>
</div>

<details>
<summary>Xem lời giải Bài 10 (Đố que diêm)</summary>

- Phép tính bạn Nam xếp là: $\text{XI} - \text{IV} = \text{V}$ (tương ứng với $11 - 4 = 5$: sai).
- **Cách di chuyển que diêm:** Ta nhấc que diêm chữ $\text{I}$ màu đỏ ở trước chữ $\text{V}$ (trong cụm $\text{IV}$) và chuyển nó sang đứng **bên phải chữ $\text{V}$**.
- Khi đó cụm $\text{IV}$ chuyển thành $\text{VI}$ ($6$).
- Ta nhận được phép tính mới:
  $$\text{XI} - \text{VI} = \text{V}$$
  *(Tương ứng với $11 - 6 = 5$: hoàn toàn chính xác! Số que diêm sử dụng vẫn nguyên vẹn 12 que).*

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Số La Mã XXIV biểu diễn số tự nhiên nào trong hệ thập phân?'
options:
  - '14'
  - '24'
  - '26'
  - '29'
answer: 2
explanation: 'XXIV = XX + IV = 20 + 4 = 24.'
```

```quiz
type: choice
question: 'Trong số 350 271, giá trị của chữ số 2 là bao nhiêu?'
options:
  - '20'
  - '200'
  - '2000'
  - '20 000'
answer: 2
explanation: 'Kể từ phải sang trái: 1 (đơn vị), 7 (chục), 2 (hàng trăm). Do đó chữ số 2 có giá trị là 200.'
```

```quiz
type: choice
question: 'Dùng ba chữ số 0; 3; 7 có thể viết được bao nhiêu số tự nhiên có ba chữ số khác nhau?'
options:
  - '6 số'
  - '4 số'
  - '5 số'
  - '3 số'
answer: 2
explanation: 'Chữ số hàng trăm khác 0 nên chỉ có 2 cách chọn (3 hoặc 7). Với mỗi cách chọn chữ số hàng trăm, có 2 cách chọn chữ số hàng chục và 1 cách chọn chữ số hàng đơn vị. Tổng cộng có: 2 * 2 * 1 = 4 số (307, 370, 703, 730).'
```

```quiz
type: choice
question: 'Số tự nhiên nhỏ nhất có 5 chữ số khác nhau là:'
options:
  - '10 000'
  - '10 234'
  - '12 345'
  - '01 234'
answer: 2
explanation: 'Hàng chục nghìn nhỏ nhất khác 0 là 1. Các hàng tiếp theo chọn các số tự nhiên nhỏ nhất chưa được chọn: 0, 2, 3, 4. Ta được số 10 234.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Cho các số tự nhiên: $2015$; $14\ 589$; $350\ 271.$
- a) Đọc các số tự nhiên đã cho.
- b) Trong mỗi số trên, chữ số 5 có giá trị là bao nhiêu?

<details>
<summary>Xem lời giải Câu 1</summary>

- a) **Đọc các số:**
  - $2015$: Hai nghìn không trăm mười lăm.
  - $14\ 589$: Mười bốn nghìn năm trăm tám mươi chín.
  - $350\ 271$: Ba trăm năm mươi nghìn hai trăm bảy mươi mốt.
- b) **Giá trị của chữ số 5:**
  - Trong số $2015$: chữ số 5 ở hàng đơn vị $\implies$ giá trị là **$5$**.
  - Trong số $14\ 589$: chữ số 5 ở hàng trăm $\implies$ giá trị là **$500$**.
  - Trong số $350\ 271$: chữ số 5 ở hàng chục nghìn $\implies$ giá trị là **$50\ 000$**.

</details>

**Câu 2.**
- a) Viết tập hợp các chữ số của số $7890.$
- b) Viết tập hợp các chữ số của số $4077.$

<details>
<summary>Xem lời giải Câu 2</summary>

- a) $\{0; 7; 8; 9\}.$
- b) Số $4077$ có hai chữ số 7 lặp lại $\implies$ Tập hợp các chữ số là $\{0; 4; 7\}.$

</details>

**Câu 3.** Hoàn thành bảng sau:

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $8703$ | $7$ | ? | ? |
| $10\ 368$ | $6$ | ? | ? |
| $370\ 489$ | $3$ | ? | ? |

<details>
<summary>Xem đáp án Câu 3</summary>

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $8703$ | $7$ | **Hàng trăm** | **$700$** |
| $10\ 368$ | $6$ | **Hàng chục** | **$60$** |
| $370\ 489$ | $3$ | **Hàng trăm nghìn** | **$300\ 000$** |

</details>

**Câu 4.**
- a) Viết số tự nhiên nhỏ nhất có 5 chữ số.
- b) Viết số tự nhiên nhỏ nhất có 5 chữ số khác nhau.
- c) Viết số tự nhiên nhỏ nhất có 5 chữ số khác nhau mà chữ số hàng chục có giá trị là 40.

<details>
<summary>Xem lời giải Câu 4</summary>

- a) Số tự nhiên nhỏ nhất có 5 chữ số là **$10\ 000$**.
- b) Số tự nhiên nhỏ nhất có 5 chữ số khác nhau là **$10\ 234$**.
- c) Chữ số hàng chục có giá trị 40 nghĩa là chữ số hàng chục cố định bằng 4.
  - Số cần tìm có dạng $\overline{abc4e}$ với các chữ số khác nhau.
  - Để số nhỏ nhất: hàng chục nghìn chọn 1; hàng nghìn chọn 0; hàng trăm chọn 2; hàng đơn vị chọn 3.
  - Vậy số cần tìm là **$10\ 243$**.

</details>

**Câu 5.** Dùng năm chữ số $0; 2; 5; 7; 8$, hãy viết số lớn nhất và số nhỏ nhất có năm chữ số (mỗi chữ số chỉ được viết một lần).

<details>
<summary>Xem lời giải Câu 5</summary>

- **Số lớn nhất:** Xếp các chữ số giảm dần $\implies \mathbf{87\ 520}.$
- **Số nhỏ nhất:** Chữ số đầu tiên chọn 2, sau đó xếp tăng dần $\implies \mathbf{20\ 578}.$

</details>

**Câu 6.** Dùng các chữ số $3; 6; 0$ để viết một số tự nhiên có ba chữ số khác nhau, trong đó chữ số 3 có giá trị là 3.

<details>
<summary>Xem lời giải Câu 6</summary>

- Chữ số 3 có giá trị là 3 nghĩa là chữ số 3 đứng ở hàng đơn vị.
- Hàng trăm phải khác 0 nên chọn 6, hàng chục chọn 0.
- Vậy số cần tìm là **$603$**.

</details>

**Câu 7.**
- a) Đọc các số La Mã: $\text{VIII}$; $\text{XVI}$; $\text{XXIX}.$
- b) Viết các số sau bằng chữ số La Mã: $19$; $26$; $14.$

<details>
<summary>Xem lời giải Câu 7</summary>

- a) $\text{VIII} = 8$; $\text{XVI} = 16$; $\text{XXIX} = 29.$
- b) $19 = \text{XIX}$; $26 = \text{XXVI}$; $14 = \text{XIV}.$

</details>

**Câu 8.** Mỗi cách viết số La Mã sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
$$\text{VIIII};\quad \text{XXIIII};\quad \text{IXX};\quad \text{XXVII}$$

<details>
<summary>Xem lời giải Câu 8</summary>

- $\text{VIIII}$: **Sai** (không lặp lại quá 3 chữ số I). Sửa lại: **$\text{IX}$**.
- $\text{XXIIII}$: **Sai**. Sửa lại: **$\text{XXIV}$**.
- $\text{IXX}$: **Sai** (chữ số I chỉ đứng trước V hoặc X ở cụm IV và IX). Sửa lại: **$\text{XIX}$**.
- $\text{XXVII}$: **Đúng** (có giá trị bằng 27).

</details>

**Câu 9.** Viết tập hợp các số tự nhiên có ba chữ số, trong đó:
- a) Chữ số hàng chục gấp 3 lần chữ số hàng trăm, chữ số hàng đơn vị gấp 2 lần chữ số hàng chục.
- b) Chữ số hàng chục lớn hơn chữ số hàng đơn vị 2 đơn vị, chữ số hàng trăm lớn hơn chữ số hàng chục 2 đơn vị.
- c) Chữ số hàng trăm là 2, chữ số hàng chục nhỏ hơn chữ số hàng đơn vị, và tổng ba chữ số bằng 9.

<details>
<summary>Xem lời giải Câu 9</summary>

- a) Gọi số có dạng $\overline{abc}$ ($a \ne 0$). Theo đề: $b = 3a$ và $c = 2b = 6a.$
  - Vì $c$ là chữ số nên $6a \le 9 \implies a = 1.$
  - Với $a = 1 \implies b = 3, c = 6 \implies$ được số $136.$
  - Vậy tập hợp cần tìm là: **$\{136\}$**.
- b) Gọi chữ số hàng đơn vị là $c$, khi đó chữ số hàng chục là $c + 2$, chữ số hàng trăm là $(c + 2) + 2 = c + 4.$
  - Vì $c + 4 \le 9 \implies c \in \{0; 1; 2; 3; 4; 5\}.$
  - Lần lượt thế các giá trị của $c$:
    - $c = 0 \implies$ số $420.$
    - $c = 1 \implies$ số $531.$
    - $c = 2 \implies$ số $642.$
    - $c = 3 \implies$ số $753.$
    - $c = 4 \implies$ số $864.$
    - $c = 5 \implies$ số $975.$
  - Vậy tập hợp cần tìm là: **$\{420; 531; 642; 753; 864; 975\}$**.
- c) Chữ số hàng trăm là 2 nên tổng hai chữ số còn lại là $9 - 2 = 7.$
  - Gọi chữ số hàng chục là $b$ và hàng đơn vị là $c$ với $b + c = 7$ và $b < c$:
    - $b = 0 \implies c = 7 \implies$ số $207.$
    - $b = 1 \implies c = 6 \implies$ số $216.$
    - $b = 2 \implies c = 5 \implies$ số $225.$
    - $b = 3 \implies c = 4 \implies$ số $234.$
  - Vậy tập hợp cần tìm là: **$\{207; 216; 225; 234\}$**.

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Hệ nhị phân).**
Trong hệ thập phân, ta dùng 10 chữ số và cứ 10 đơn vị ở một hàng thì bằng 1 đơn vị ở hàng liền trước nó. Trong **hệ nhị phân** (dùng trong máy tính điện tử), người ta chỉ dùng hai chữ số là $0$ và $1$, và cứ 2 đơn vị ở một hàng thì bằng 1 đơn vị ở hàng liền trước nó. Số $a_4 a_3 a_2 a_1 a_0$ viết trong hệ nhị phân có giá trị bằng:
$$a_4 \times 2^4 + a_3 \times 2^3 + a_2 \times 2^2 + a_1 \times 2^1 + a_0 \times 2^0 = a_4 \times 16 + a_3 \times 8 + a_2 \times 4 + a_1 \times 2 + a_0$$
- a) Số $11101$ viết trong hệ nhị phân có giá trị bằng bao nhiêu trong hệ thập phân?
- b) Viết số $53$ (hệ thập phân) dưới dạng số nhị phân.

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

- a) Áp dụng công thức chuyển đổi:
  $$11101_2 = 1 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 1 = 16 + 8 + 4 + 0 + 1 = 29.$$
  Vậy số $11101$ trong hệ nhị phân bằng số **$29$** trong hệ thập phân.
- b) Để đổi từ hệ thập phân sang hệ nhị phân, ta chia liên tiếp cho 2 và ghi lại các số dư:
  - $53 : 2 = 26$ (dư 1)
  - $26 : 2 = 13$ (dư 0)
  - $13 : 2 = 6$ (dư 1)
  - $6 : 2 = 3$ (dư 0)
  - $3 : 2 = 1$ (dư 1)
  - Thương cuối cùng là 1 (dừng lại vì $< 2$).
  - Ghi thương cuối cùng và các số dư theo thứ tự từ dưới lên: **$110101$**.
  - **Thử lại:** $1 \times 32 + 1 \times 16 + 0 \times 8 + 1 \times 4 + 0 \times 2 + 1 = 32 + 16 + 4 + 1 = 53$ (chính xác).
  - Vậy $53 = 110101_2.$

</details>

**Bài 2 (Hệ đếm cơ số 3 trong quân sự).**
Một đội quân được tổ chức theo nguyên tắc "tam tam chế":
- Cứ 3 lính thì lập thành 1 tổ.
- Cứ 3 tổ thì lập thành 1 tiểu đội.
- Cứ 3 tiểu đội thì lập thành 1 trung đội.
- Cứ 3 trung đội thì lập thành 1 đại đội.
- Cứ 3 đại đội thì lập thành 1 tiểu đoàn.

Có 538 lính thì lập được thành các cấp nào?

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

Vì cứ 3 đơn vị ở một cấp thì lập thành 1 đơn vị ở cấp liền trên, ta thực hiện chia liên tiếp 538 cho 3:
- $538 : 3 = 179$ (dư 1 lính lẻ)
- $179 : 3 = 59$ (dư 2 tổ)
- $59 : 3 = 19$ (dư 2 tiểu đội)
- $19 : 3 = 6$ (dư 1 trung đội)
- $6 : 3 = 2$ (dư 0 đại đội)
- Thương cuối cùng là 2 tiểu đoàn.

Xếp theo thứ tự từ cấp cao nhất xuống thấp nhất, 538 lính lập thành:
- **2 tiểu đoàn**
- **0 đại đội**
- **1 trung đội**
- **2 tiểu đội**
- **2 tổ**
- **1 lính lẻ**

**Kiểm tra lại:**
- 1 tiểu đoàn $= 3^5 = 243$ lính $\implies 2$ tiểu đoàn $= 486$ lính.
- 0 đại đội $= 0$ lính.
- 1 trung đội $= 3^3 = 27$ lính.
- 2 tiểu đội $= 2 \times 3^2 = 18$ lính.
- 2 tổ $= 2 \times 3 = 6$ lính.
- 1 lính lẻ $= 1$ lính.
- Tổng số lính $= 486 + 0 + 27 + 18 + 6 + 1 = 538$ lính (hoàn toàn chính xác).

</details>

**Bài 3 (Bài toán đánh số trang sách).**
Người ta đánh số trang một quyển sách bằng dãy số tự nhiên $1; 2; 3; \dots$ Quyển sách đó dày 180 trang. Hỏi người ta phải viết tất cả bao nhiêu chữ số?

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

Ta chia các trang sách thành 3 nhóm theo số lượng chữ số:
1. **Trang có 1 chữ số (từ trang 1 đến trang 9):**
   - Số trang: $(9 - 1) + 1 = 9$ trang.
   - Số chữ số cần dùng: $9 \times 1 = 9$ chữ số.
2. **Trang có 2 chữ số (từ trang 10 đến trang 99):**
   - Số trang: $(99 - 10) + 1 = 90$ trang.
   - Số chữ số cần dùng: $90 \times 2 = 180$ chữ số.
3. **Trang có 3 chữ số (từ trang 100 đến trang 180):**
   - Số trang: $(180 - 100) + 1 = 81$ trang.
   - Số chữ số cần dùng: $81 \times 3 = 243$ chữ số.

Tổng số chữ số phải viết là:
$$9 + 180 + 243 = 432 \text{ (chữ số)}.$$

</details>

**Bài 4 (Cấu tạo số nâng cao).**
Tìm một số tự nhiên có hai chữ số, biết rằng nếu viết thêm chữ số 0 vào giữa hai chữ số của nó thì được một số mới gấp 7 lần số ban đầu.

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- Gọi số cần tìm là $\overline{ab}$ ($a \ne 0; a, b \in \mathbb{N}, a, b \le 9$).
- Khi viết thêm chữ số 0 vào giữa hai chữ số, ta được số mới là $\overline{a0b}.$
- Theo đề bài, ta có phương trình:
  $$\overline{a0b} = 7 \times \overline{ab}$$
- Phân tích cấu tạo số ở cả hai vế:
  $$a \times 100 + 0 \times 10 + b = 7 \times (a \times 10 + b)$$
  $$100a + b = 70a + 7b$$
- Bớt cả hai vế đi $70a$ và $b$:
  $$30a = 6b \implies 5a = b$$
- Vì $a$ là chữ số khác 0 và $b \le 9$:
  - Nếu $a = 1 \implies b = 5 \times 1 = 5$ (thỏa mãn).
  - Nếu $a \ge 2 \implies b \ge 10$ (loại vì $b$ là chữ số).
- Vậy số tự nhiên cần tìm là **$15$**.
- **Thử lại:** Khi viết thêm chữ số 0 vào giữa ta được $105.$ Ta thấy $105 = 15 \times 7$ (hoàn toàn thỏa mãn).

</details>
