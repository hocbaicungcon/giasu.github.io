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

**Câu 1.** Viết tập hợp $A$ các số tự nhiên nhỏ hơn 6 theo hai cách.

<details>
<summary>Xem đáp án Câu 1</summary>

- **Cách 1 (liệt kê):** $A = \{0; 1; 2; 3; 4; 5\}.$
- **Cách 2 (tính chất đặc trưng):** $A = \{x \in \mathbb{N} \mid x < 6\}.$

</details>

**Câu 2.** Điền kí hiệu thích hợp ($\in$ hoặc $\notin$) vào chỗ chấm:

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - '$0 \notin \mathbb{N}$'
  - '$0 \in \mathbb{N}^*$'
  - '$7 \in \mathbb{N}^*$'
  - '$3{,}5 \in \mathbb{N}$'
answer: 3
explanation: 'Số 7 là số tự nhiên khác 0 nên $7 \in \mathbb{N}^*$ là đúng. Các khẳng định khác đều sai vì $0 \in \mathbb{N}$, $0 \notin \mathbb{N}^*$ và $3{,}5 \notin \mathbb{N}.$'
```

<details>
<summary>Xem lời giải đầy đủ Câu 2</summary>

- $0 \in \mathbb{N}$
- $0 \notin \mathbb{N}^*$
- $7 \in \mathbb{N}^*$
- $3{,}5 \notin \mathbb{N}$ (vì $3{,}5$ là số thập phân, không phải số tự nhiên)

</details>

**Câu 3.** Cho $B = \{x \in \mathbb{N} \mid 4 < x \le 9\}.$ Hãy liệt kê các phần tử của $B$ và cho biết $B$ có bao nhiêu phần tử.

<details>
<summary>Xem đáp án Câu 3</summary>

- Các số tự nhiên lớn hơn 4 và nhỏ hơn hoặc bằng 9 là: $5; 6; 7; 8; 9.$
- Vậy $B = \{5; 6; 7; 8; 9\}.$ Tập hợp $B$ có **5 phần tử**.

</details>

**Câu 4.**
- a) Đọc số $5\ 070\ 302.$
- b) Viết số "bốn nghìn không trăm linh chín" bằng chữ số.

<details>
<summary>Xem đáp án Câu 4</summary>

- a) $5\ 070\ 302$ đọc là: **Năm triệu không trăm bảy mươi nghìn ba trăm linh hai**.
- b) Bốn nghìn không trăm linh chín viết là: **$4009$**.

</details>

**Câu 5.** Trong số $3\ 815$, chữ số hàng trăm là chữ số nào? Chữ số 8 trong số đó chỉ mấy trăm?

```quiz
type: choice
question: 'Trong số $3\ 815$, giá trị của chữ số 8 là bao nhiêu?'
options:
  - '8'
  - '80'
  - '800'
  - '8000'
answer: 3
explanation: 'Trong số $3\ 815$, chữ số 8 đứng ở hàng trăm nên chỉ 8 trăm, tức có giá trị bằng 800.'
```

<details>
<summary>Xem đáp án Câu 5</summary>

Trong số $3\ 815$:
- Chữ số hàng trăm là **8**.
- Chữ số 8 đó chỉ **8 trăm**, tức là có giá trị bằng **800**.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Ghi số tự nhiên trong hệ thập phân

#### a) Mười chữ số và nguyên tắc viết số
Để ghi mọi số tự nhiên trong hệ thập phân, người ta dùng **10 chữ số**:
$$0;\ 1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8;\ 9$$

- Một số tự nhiên có thể gồm **một** hoặc **nhiều chữ số**:
  - $8$ là số có một chữ số.
  - $2454$ là số có bốn chữ số (gồm các chữ số $2; 4; 5; 4$).
- **Cách phân tách lớp:** Khi viết số tự nhiên có từ 4 chữ số trở lên, ta thường tách thành từng lớp (mỗi lớp gồm 3 chữ số kể từ phải sang trái) để dễ đọc:
  $$\text{Ví dụ: } 1\ 613\ 521$$
- **Hàng và lớp:** Vị trí của mỗi chữ số trong một số gọi là **hàng**. Cứ $10$ đơn vị ở một hàng thì tạo thành $1$ đơn vị ở hàng liền trước nó ($10$ đơn vị $= 1$ chục; $10$ chục $= 1$ trăm; $10$ trăm $= 1$ nghìn,...).

| Lớp | Lớp tỉ | Lớp triệu | | | Lớp nghìn | | | Lớp đơn vị | | |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Hàng** | Hàng tỉ | Trăm triệu | Chục triệu | Hàng triệu | Trăm nghìn | Chục nghìn | Hàng nghìn | Hàng trăm | Hàng chục | Hàng đơn vị |
| **Giá trị** | $10^9$ | $10^8$ | $10^7$ | $10^6$ | $10^5$ | $10^4$ | $10^3$ | $100$ | $10$ | $1$ |

> **Ví dụ 1.** Cho số $12\ 625.$
> - a) Số đó có bao nhiêu chữ số?
> - b) Hãy đọc số đó.

<details>
<summary>Xem lời giải Ví dụ 1</summary>

- a) Số $12\ 625$ có **5 chữ số**, lần lượt là $1; 2; 6; 2; 5.$
- b) Tách lớp từ phải sang trái: $12 \mid 625.$ Đọc là: **Mười hai nghìn sáu trăm hai mươi lăm**.

</details>

---

### 2. Cấu tạo số tự nhiên

#### a) Giá trị của chữ số
- Giá trị của một chữ số phụ thuộc vào **vị trí hàng** của nó trong số đó.
  - Chẳng hạn trong số $1240$, chữ số $2$ nằm ở hàng trăm nên có giá trị là: $2 \times 100 = 200.$
- Mọi số tự nhiên đều viết được thành **tổng giá trị các chữ số** của nó:
  $$3502 = 3 \times 1000 + 5 \times 100 + 0 \times 10 + 2 = 3000 + 500 + 2$$

#### b) Kí hiệu số có nhiều chữ số
Để biểu diễn các số có các chữ số là chữ cái, ta dùng dấu gạch ngang trên đầu để phân biệt với tích của các chữ cái:
- **Số có hai chữ số:** $\overline{ab} = a \times 10 + b$ (với $a \ne 0$).
- **Số có ba chữ số:** $\overline{abc} = a \times 100 + b \times 10 + c$ (với $a \ne 0$).
- **Số có bốn chữ số:** $\overline{abcd} = a \times 1000 + b \times 100 + c \times 10 + d$ (với $a \ne 0$).

> **Ví dụ 2.**
> - a) Trong số $2\ 413\ 576$, chữ số 4 nằm ở hàng nào và có giá trị là bao nhiêu?
> - b) Viết số $3502$ thành tổng giá trị các chữ số của nó.

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- a) Kể từ phải sang trái, các hàng lần lượt là: đơn vị (6), chục (7), trăm (5), nghìn (3), chục nghìn (1), trăm nghìn (4), triệu (2).
  - Vậy chữ số **4** ở **hàng trăm nghìn**, có giá trị là:
    $$4 \times 100\ 000 = 400\ 000$$
- b) Viết thành tổng giá trị các chữ số:
  $$3502 = 3 \times 1000 + 5 \times 100 + 0 \times 10 + 2 = 3000 + 500 + 2$$

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
> - a) Đọc các số La Mã: $\text{XXIV}$; $\text{XVII}.$
> - b) Viết các số $9$; $14$; $26$ bằng chữ số La Mã.

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) Đọc số:
  - $\text{XXIV} = \text{XX} + \text{IV} = 20 + 4 = 24.$
  - $\text{XVII} = \text{X} + \text{V} + \text{II} = 10 + 5 + 2 = 17.$
- b) Viết số:
  - $9 = \text{IX}.$
  - $14 = 10 + 4 = \text{XIV}.$
  - $26 = 20 + 6 = \text{XXVI}.$

</details>

---

### 4. Bốn điều chú ý rất dễ nhầm lẫn

1. **Phân biệt số và chữ số:**
   - Số $2454$ là **một số**.
   - Các chữ số tạo nên nó là: $2; 4; 5; 4.$
   - Tập hợp các chữ số của số $2454$ là $\{2; 4; 5\}$ (mỗi chữ số chỉ viết một lần).
2. **Chữ số 0 không đứng đầu bên trái:**
   - Số tự nhiên không bắt đầu bằng chữ số 0: viết $725$, không viết là $0725.$
3. **Phân biệt $\overline{ab}$ với tích $a \times b$:**
   - $\overline{ab}$ là số có hai chữ số: $\overline{ab} = 10a + b.$
   - Ví dụ với $a = 3, b = 7$: $\overline{ab} = 37$, trong khi $a \times b = 3 \times 7 = 21.$
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
- a) Viết tập hợp các chữ số của số $2389.$
- b) Viết tập hợp các chữ số của số $2020.$

```quiz
type: choice
question: 'Tập hợp các chữ số của số $2020$ có bao nhiêu phần tử?'
options:
  - '4 phần tử'
  - '3 phần tử'
  - '2 phần tử'
  - '1 phần tử'
answer: 3
explanation: 'Số 2020 gồm các chữ số 2, 0, 2, 0. Vì mỗi phần tử trong tập hợp chỉ được viết một lần nên tập hợp các chữ số là $\{0; 2\}$, gồm đúng 2 phần tử.'
```

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- a) Số $2389$ có các chữ số $2; 3; 8; 9 \implies$ Tập hợp cần tìm là:
  $$\{2; 3; 8; 9\}$$
- b) Số $2020$ có các chữ số $2; 0; 2; 0.$ Mỗi chữ số chỉ viết 1 lần $\implies$ Tập hợp cần tìm là:
  $$\{0; 2\}$$

</details>

**Luyện tập 1.2.** Cho các số: $12\ 625$; $140\ 962$; $1\ 613\ 521$; $2\ 156\ 937.$
- a) Đọc mỗi số đã cho.
- b) Chữ số 6 trong mỗi số đã cho có giá trị là bao nhiêu?

```quiz
type: choice
question: 'Trong số $1\ 613\ 521$, chữ số 6 nằm ở hàng nào và có giá trị bao nhiêu?'
options:
  - 'Hàng trăm, giá trị 600'
  - 'Hàng nghìn, giá trị 6000'
  - 'Hàng trăm nghìn, giá trị 600 000'
  - 'Hàng triệu, giá trị 6 000 000'
answer: 3
explanation: 'Đếm từ phải sang trái: 1 (đơn vị), 2 (chục), 5 (trăm), 3 (nghìn), 1 (chục nghìn), 6 (trăm nghìn). Vậy chữ số 6 ở hàng trăm nghìn và có giá trị là 600 000.'
```

<details>
<summary>Xem lời giải Luyện tập 1.2</summary>

- a) **Đọc các số:**
  - $12\ 625$: Mười hai nghìn sáu trăm hai mươi lăm.
  - $140\ 962$: Một trăm bốn mươi nghìn chín trăm sáu mươi hai.
  - $1\ 613\ 521$: Một triệu sáu trăm mười ba nghìn năm trăm hai mươi mốt.
  - $2\ 156\ 937$: Hai triệu một trăm năm mươi sáu nghìn chín trăm ba mươi bảy.
- b) **Giá trị của chữ số 6 trong từng số:**
  - $12\ 625$: chữ số 6 ở hàng trăm $\implies$ giá trị là **$600$**.
  - $140\ 962$: chữ số 6 ở hàng chục $\implies$ giá trị là **$60$**.
  - $1\ 613\ 521$: chữ số 6 ở hàng trăm nghìn $\implies$ giá trị là **$600\ 000$**.
  - $2\ 156\ 937$: chữ số 6 ở hàng nghìn $\implies$ giá trị là **$6000$**.

</details>

**Luyện tập 1.3.** Viết các số $4528$ và $12\ 105$ thành tổng giá trị các chữ số của nó.

<details>
<summary>Xem lời giải Luyện tập 1.3</summary>

- $4528 = 4 \times 1000 + 5 \times 100 + 2 \times 10 + 8 = 4000 + 500 + 20 + 8.$
- $12\ 105 = 1 \times 10\ 000 + 2 \times 1000 + 1 \times 100 + 0 \times 10 + 5 = 10\ 000 + 2000 + 100 + 5.$

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
- a) Viết số tự nhiên nhỏ nhất có bốn chữ số.
- b) Viết số tự nhiên nhỏ nhất có bốn chữ số khác nhau.

```quiz
type: choice
question: 'Số tự nhiên nhỏ nhất có bốn chữ số KHÁC NHAU là số nào?'
options:
  - '1000'
  - '1023'
  - '1234'
  - '0123'
answer: 2
explanation: 'Hàng nghìn nhỏ nhất khác 0 là 1. Hàng trăm nhỏ nhất là 0. Hàng chục nhỏ nhất khác 1 và 0 là 2. Hàng đơn vị là 3. Vậy số nhỏ nhất có 4 chữ số khác nhau là 1023.'
```

<details>
<summary>Xem lời giải Luyện tập 2.1</summary>

- a) Chữ số hàng nghìn nhỏ nhất khác 0 là 1, ba chữ số còn lại nhỏ nhất là 0 $\implies$ Số cần tìm là **$1000$**.
- b) Bốn chữ số phải khác nhau: hàng nghìn chọn 1, hàng trăm chọn 0, hàng chục chọn 2, hàng đơn vị chọn 3 $\implies$ Số cần tìm là **$1023$**.

</details>

**Luyện tập 2.2.**
- a) Dùng ba chữ số $3; 4; 7$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.
- b) Dùng ba chữ số $0; 2; 5$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.

<details>
<summary>Xem lời giải Luyện tập 2.2</summary>

- a) Các số có ba chữ số khác nhau lập từ $3; 4; 7$:
  $$347;\ 374;\ 437;\ 473;\ 734;\ 743 \quad (\text{có 6 số})$$
- b) Chữ số 0 không thể đứng đầu, nên hàng trăm chỉ có thể là 2 hoặc 5:
  $$205;\ 250;\ 502;\ 520 \quad (\text{có 4 số})$$

</details>

**Luyện tập 2.3.** Dùng sáu chữ số $0; 2; 3; 5; 8; 9$, hãy viết số lớn nhất và số nhỏ nhất có sáu chữ số (mỗi chữ số chỉ được viết một lần).

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

- **Số lớn nhất:** Xếp các chữ số giảm dần từ trái sang phải: $9; 8; 5; 3; 2; 0 \implies \mathbf{985\ 320}.$
- **Số nhỏ nhất:** Chữ số đầu tiên phải khác 0 nên chọn 2. Sau đó xếp các chữ số còn lại theo thứ tự tăng dần: $0; 3; 5; 8; 9 \implies \mathbf{203\ 589}.$

</details>

---

### Dạng 3. Đọc và viết số La Mã

**Phương pháp giải:**
- **Đọc số La Mã:** Tách số thành từng cụm từ trái sang phải ($\text{XX}, \text{X}, \text{IX}, \text{IV}, \text{V}, \dots$), sau đó cộng giá trị của các cụm lại.
- **Viết số La Mã:** Tách số thành $\text{Phần chục} + \text{Phần đơn vị}$:
  - Phần chục viết bằng $\text{X}$, $\text{XX}$ hoặc $\text{XXX}.$
  - Phần đơn vị viết theo bảng chuẩn từ $\text{I}$ đến $\text{IX}.$

**Luyện tập 3.1.**
- a) Đọc các số La Mã sau: $\text{IX}$; $\text{XIX}$; $\text{XXII}$; $\text{XXVI}.$
- b) Viết các số sau bằng chữ số La Mã: $15$; $13$; $24$; $16$; $30.$

```quiz
type: choice
question: 'Số 24 được viết bằng chữ số La Mã là:'
options:
  - 'XXIIII'
  - 'XXIV'
  - 'IXXV'
  - 'XIV'
answer: 2
explanation: '24 = 20 + 4 = XX + IV = XXIV. Trong hệ số La Mã không được viết 4 chữ số I liền nhau (XXIIII).'
```

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- a) **Đọc số La Mã:**
  - $\text{IX} = 9$
  - $\text{XIX} = 10 + 9 = 19$
  - $\text{XXII} = 20 + 2 = 22$
  - $\text{XXVI} = 20 + 6 = 26$
- b) **Viết số La Mã:**
  - $15 = \text{XV}$
  - $13 = \text{XIII}$
  - $24 = \text{XXIV}$
  - $16 = \text{XVI}$
  - $30 = \text{XXX}$

</details>

**Luyện tập 3.2.**
- a) Đọc các số La Mã: $\text{XXI}$; $\text{XXIII}$; $\text{XV}$; $\text{XVII}$; $\text{XXIV}.$
- b) Viết các số sau bằng chữ số La Mã: $7$; $12$; $18$; $27$; $29.$

<details>
<summary>Xem lời giải Luyện tập 3.2</summary>

- a) $\text{XXI} = 21$; $\text{XXIII} = 23$; $\text{XV} = 15$; $\text{XVII} = 17$; $\text{XXIV} = 24.$
- b) $7 = \text{VII}$; $12 = \text{XII}$; $18 = \text{XVIII}$; $27 = \text{XXVII}$; $29 = \text{XXIX}.$

</details>

**Luyện tập 3.3.**
- a) Đọc các số La Mã: $\text{XIV}$; $\text{XXVIII}$; $\text{XXIX}.$
- b) Viết các số sau bằng chữ số La Mã: $4$; $9$; $19$; $25.$

<details>
<summary>Xem lời giải Luyện tập 3.3</summary>

- a) $\text{XIV} = 14$; $\text{XXVIII} = 28$; $\text{XXIX} = 29.$
- b) $4 = \text{IV}$; $9 = \text{IX}$; $19 = \text{XIX}$; $25 = \text{XXV}.$

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Cho các số: $42\ 356$; $153\ 782$; $10\ 802\ 953$; $3\ 129\ 612\ 457.$
- a) Đọc mỗi số đã cho.
- b) Chữ số 3 trong mỗi số đã cho có giá trị là bao nhiêu?

<details>
<summary>Xem lời giải Bài 1</summary>

- a) **Đọc các số:**
  - $42\ 356$: Bốn mươi hai nghìn ba trăm năm mươi sáu.
  - $153\ 782$: Một trăm năm mươi ba nghìn bảy trăm tám mươi hai.
  - $10\ 802\ 953$: Mười triệu tám trăm linh hai nghìn chín trăm năm mươi ba.
  - $3\ 129\ 612\ 457$: Ba tỉ một trăm hai mươi chín triệu sáu trăm mười hai nghìn bốn trăm năm mươi bảy.
- b) **Giá trị của chữ số 3:**
  - $42\ 356$: Chữ số 3 ở hàng trăm $\implies$ giá trị là **$300$**.
  - $153\ 782$: Chữ số 3 ở hàng nghìn $\implies$ giá trị là **$3000$**.
  - $10\ 802\ 953$: Chữ số 3 ở hàng đơn vị $\implies$ giá trị là **$3$**.
  - $3\ 129\ 612\ 457$: Chữ số 3 ở hàng tỉ $\implies$ giá trị là **$3\ 000\ 000\ 000$**.

</details>

**Bài 2.**
- a) Viết tập hợp các chữ số của số $13\ 527.$
- b) Viết tập hợp các chữ số của số $99\ 999.$

<details>
<summary>Xem lời giải Bài 2</summary>

- a) Tập hợp các chữ số của số $13\ 527$ là: $\{1; 2; 3; 5; 7\}.$
- b) Số $99\ 999$ chỉ gồm các chữ số 9, mỗi phần tử chỉ viết 1 lần $\implies$ Tập hợp là: $\{9\}.$

</details>

**Bài 3.** Hoàn thành bảng xác định hàng và giá trị của các chữ số sau:

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $1\ 425$ | $4$ | ? | ? |
| $2\ 307$ | $3$ | ? | ? |
| $25\ 890\ 472$ | $8$ | ? | ? |
| $1\ 245$ | $4$ | ? | ? |
| $12\ 987$ | $9$ | ? | ? |

<details>
<summary>Xem đáp án bảng Bài 3</summary>

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $1\ 425$ | $4$ | **Hàng trăm** | **$400$** |
| $2\ 307$ | $3$ | **Hàng trăm** | **$300$** |
| $25\ 890\ 472$ | $8$ | **Hàng trăm nghìn** | **$800\ 000$** |
| $1\ 245$ | $4$ | **Hàng chục** | **$40$** |
| $12\ 987$ | $9$ | **Hàng trăm** | **$900$** |

</details>

**Bài 4.** Viết các số $51\ 379$ và $1320$ thành tổng giá trị các chữ số của nó.

<details>
<summary>Xem lời giải Bài 4</summary>

- $51\ 379 = 50\ 000 + 1000 + 300 + 70 + 9.$
- $1320 = 1000 + 300 + 20 + 0 = 1000 + 300 + 20.$

</details>

**Bài 5.**
- a) Viết số tự nhiên lớn nhất có ba chữ số.
- b) Viết số tự nhiên lớn nhất có ba chữ số khác nhau.

<details>
<summary>Xem lời giải Bài 5</summary>

- a) Số tự nhiên lớn nhất có ba chữ số là **$999$**.
- b) Ba chữ số lớn nhất khác nhau là $9; 8; 7 \implies$ Số cần tìm là **$987$**.

</details>

**Bài 6.**
- a) Dùng ba chữ số $2; 6; 9$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.
- b) Dùng ba chữ số $4; 5; 0$, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.

<details>
<summary>Xem lời giải Bài 6</summary>

- a) Lập được 6 số: $269;\ 296;\ 629;\ 692;\ 926;\ 962.$
- b) Vì chữ số 0 không thể đứng đầu, nên hàng trăm là 4 hoặc 5: lập được 4 số là $405;\ 450;\ 504;\ 540.$

</details>

**Bài 7.** Dùng các chữ số $1; 4; 0$ để viết một số tự nhiên có ba chữ số khác nhau, trong đó chữ số 1 có giá trị là 10.

<details>
<summary>Xem lời giải Bài 7</summary>

- Chữ số 1 có giá trị bằng 10 nghĩa là chữ số 1 đứng ở **hàng chục**.
- Số có dạng $\overline{a1b}.$ Vì $a \ne 0$ nên hàng trăm phải chọn chữ số $4$, còn hàng đơn vị là $0.$
- Vậy số cần tìm là **$410$**.

</details>

**Bài 8.** Một số tự nhiên được viết bởi ba chữ số 0 và ba chữ số 5 nằm xen kẽ nhau. Tìm số đó.

<details>
<summary>Xem lời giải Bài 8</summary>

- Số đó có tổng cộng 6 chữ số.
- Chữ số đầu tiên bên trái không thể là chữ số 0, do đó chữ số đầu tiên bắt buộc phải là 5.
- Các chữ số 0 và 5 xen kẽ nhau theo quy luật: $5, 0, 5, 0, 5, 0.$
- Vậy số cần tìm là **$505\ 050$** (đọc là: năm trăm linh năm nghìn không trăm năm mươi).

</details>

**Bài 9.** Mỗi cách viết sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Số tự nhiên gồm bảy trăm hai mươi lăm đơn vị được viết là $0725.$
- b) Với $a = 3$ và $b = 7$ thì $\overline{ab} = 21.$
- c) Số 4 viết bằng chữ số La Mã là $\text{IIII}.$
- d) Số 15 viết bằng chữ số La Mã là $\text{VX}.$

<details>
<summary>Xem lời giải Bài 9</summary>

- a) **Sai**, vì chữ số 0 không được đứng đầu bên trái số tự nhiên. Sửa lại: **$725$**.
- b) **Sai**, vì $\overline{ab}$ là số có hai chữ số chứ không phải phép nhân $a \times b.$ Đúng ra: $\overline{ab} = 37$ (còn $3 \times 7 = 21$).
- c) **Sai**, vì không được viết quá ba chữ số giống nhau đứng liền nhau. Sửa lại: **$\text{IV}$**.
- d) **Sai**, vì chữ số nhỏ chỉ đứng trước chữ số lớn ở hai cụm $\text{IV}$ và $\text{IX}.$ Số 15 phân tích thành $10 + 5.$ Sửa lại: **$\text{XV}$**.

</details>

**Bài 10.** Bạn Nam xếp 11 que diêm thành phép tính bằng số La Mã dưới đây, nhưng kết quả chưa đúng:
$$\text{XI} - \text{V} = \text{IV}$$
*(Phép tính này sai vì $11 - 5 = 6 \ne 4$)*. Hãy đổi chỗ đúng một que diêm để được một phép tính đúng.

<div style="display:flex; justify-content:center; align-items:center; margin:16px 0;">
  <svg width="340" height="80" viewBox="0 0 340 80" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <!-- XI -->
    <line x1="25" y1="20" x2="45" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="45" y1="20" x2="25" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="20" x2="60" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <!-- MINUS -->
    <line x1="85" y1="40" x2="110" y2="40" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
    <!-- V -->
    <line x1="135" y1="20" x2="150" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="165" y1="20" x2="150" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <!-- EQUAL -->
    <line x1="190" y1="33" x2="215" y2="33" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
    <line x1="190" y1="47" x2="215" y2="47" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
    <!-- IV -->
    <line x1="240" y1="20" x2="240" y2="60" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <line x1="260" y1="20" x2="275" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <line x1="290" y1="20" x2="275" y2="60" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  </svg>
</div>

<details>
<summary>Xem lời giải Bài 10 (Đố que diêm)</summary>

- Phép tính bạn Nam xếp là: $\text{XI} - \text{V} = \text{IV}$ (tương ứng với $11 - 5 = 4$: sai).
- **Cách di chuyển que diêm:** Ta nhấc que diêm chữ $\text{I}$ màu đỏ ở trước chữ $\text{V}$ (trong cụm $\text{IV}$) và chuyển nó sang đứng **bên phải chữ $\text{V}$**.
- Khi đó cụm $\text{IV}$ chuyển thành $\text{VI}$ ($6$).
- Ta nhận được phép tính mới:
  $$\text{XI} - \text{V} = \text{VI}$$
  *(Tương ứng với $11 - 5 = 6$: hoàn toàn chính xác! Số que diêm sử dụng vẫn nguyên vẹn 11 que).*

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Số La Mã XXIX biểu diễn số tự nhiên nào trong hệ thập phân?'
options:
  - '19'
  - '24'
  - '29'
  - '31'
answer: 3
explanation: 'XXIX = XX + IX = 20 + 9 = 29.'
```

```quiz
type: choice
question: 'Trong số 240 162, giá trị của chữ số 1 là bao nhiêu?'
options:
  - '10'
  - '100'
  - '1000'
  - '10 000'
answer: 2
explanation: 'Kể từ phải sang trái: 2 (đơn vị), 6 (chục), 1 (hàng trăm). Do đó chữ số 1 có giá trị là 100.'
```

```quiz
type: choice
question: 'Dùng ba chữ số 0; 2; 5 có thể viết được bao nhiêu số tự nhiên có ba chữ số khác nhau?'
options:
  - '6 số'
  - '4 số'
  - '5 số'
  - '3 số'
answer: 2
explanation: 'Chữ số hàng trăm khác 0 nên chỉ có 2 cách chọn (2 hoặc 5). Với mỗi cách chọn chữ số hàng trăm, có 2 cách chọn chữ số hàng chục và 1 cách chọn chữ số hàng đơn vị. Tổng cộng có: 2 * 2 * 1 = 4 số (205, 250, 502, 520).'
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

**Câu 1.** Cho các số tự nhiên: $2012$; $13\ 478$; $240\ 162.$
- a) Đọc các số tự nhiên đã cho.
- b) Trong mỗi số trên, chữ số 1 có giá trị là bao nhiêu?

<details>
<summary>Xem lời giải Câu 1</summary>

- a) **Đọc các số:**
  - $2012$: Hai nghìn không trăm mười hai.
  - $13\ 478$: Mười ba nghìn bốn trăm bảy mươi tám.
  - $240\ 162$: Hai trăm bốn mươi nghìn một trăm sáu mươi hai.
- b) **Giá trị của chữ số 1:**
  - Trong số $2012$: chữ số 1 ở hàng chục $\implies$ giá trị là **$10$**.
  - Trong số $13\ 478$: chữ số 1 ở hàng chục nghìn $\implies$ giá trị là **$10\ 000$**.
  - Trong số $240\ 162$: chữ số 1 ở hàng trăm $\implies$ giá trị là **$100$**.

</details>

**Câu 2.**
- a) Viết tập hợp các chữ số của số $6789.$
- b) Viết tập hợp các chữ số của số $3066.$

<details>
<summary>Xem lời giải Câu 2</summary>

- a) $\{6; 7; 8; 9\}.$
- b) Số $3066$ có hai chữ số 6 lặp lại $\implies$ Tập hợp các chữ số là $\{0; 3; 6\}.$

</details>

**Câu 3.** Hoàn thành bảng sau:

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $9802$ | $8$ | ? | ? |
| $10\ 257$ | $5$ | ? | ? |
| $280\ 379$ | $2$ | ? | ? |

<details>
<summary>Xem đáp án Câu 3</summary>

| Số đã cho | Chữ số | Thuộc hàng | Giá trị của chữ số |
| :--- | :---: | :---: | :---: |
| $9802$ | $8$ | **Hàng trăm** | **$800$** |
| $10\ 257$ | $5$ | **Hàng chục** | **$50$** |
| $280\ 379$ | $2$ | **Hàng trăm nghìn** | **$200\ 000$** |

</details>

**Câu 4.**
- a) Viết số tự nhiên nhỏ nhất có 5 chữ số.
- b) Viết số tự nhiên nhỏ nhất có 5 chữ số khác nhau.
- c) Viết số tự nhiên nhỏ nhất có 5 chữ số khác nhau mà chữ số hàng chục có giá trị là 20.

<details>
<summary>Xem lời giải Câu 4</summary>

- a) Số tự nhiên nhỏ nhất có 5 chữ số là **$10\ 000$**.
- b) Số tự nhiên nhỏ nhất có 5 chữ số khác nhau là **$10\ 234$**.
- c) Chữ số hàng chục có giá trị 20 nghĩa là chữ số hàng chục cố định bằng 2.
  - Số cần tìm có dạng $\overline{abc2e}$ với các chữ số khác nhau.
  - Để số nhỏ nhất: hàng chục nghìn chọn 1; hàng nghìn chọn 0; hàng trăm chọn 3; hàng đơn vị chọn 4.
  - Vậy số cần tìm là **$10\ 324$**.

</details>

**Câu 5.** Dùng năm chữ số $0; 1; 4; 6; 7$, hãy viết số lớn nhất và số nhỏ nhất có năm chữ số (mỗi chữ số chỉ được viết một lần).

<details>
<summary>Xem lời giải Câu 5</summary>

- **Số lớn nhất:** Xếp các chữ số giảm dần $\implies \mathbf{76\ 410}.$
- **Số nhỏ nhất:** Chữ số đầu tiên chọn 1, sau đó xếp tăng dần $\implies \mathbf{10\ 467}.$

</details>

**Câu 6.** Dùng các chữ số $2; 5; 0$ để viết một số tự nhiên có ba chữ số khác nhau, trong đó chữ số 2 có giá trị là 2.

<details>
<summary>Xem lời giải Câu 6</summary>

- Chữ số 2 có giá trị là 2 nghĩa là chữ số 2 đứng ở hàng đơn vị.
- Hàng trăm phải khác 0 nên chọn 5, hàng chục chọn 0.
- Vậy số cần tìm là **$502$**.

</details>

**Câu 7.**
- a) Đọc các số La Mã: $\text{VII}$; $\text{XIV}$; $\text{XXVIII}.$
- b) Viết các số sau bằng chữ số La Mã: $18$; $25$; $13.$

<details>
<summary>Xem lời giải Câu 7</summary>

- a) $\text{VII} = 7$; $\text{XIV} = 14$; $\text{XXVIII} = 28.$
- b) $18 = \text{XVIII}$; $25 = \text{XXV}$; $13 = \text{XIII}.$

</details>

**Câu 8.** Mỗi cách viết số La Mã sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
$$\text{VIIII};\quad \text{XXIIII};\quad \text{IXX};\quad \text{XXVI}$$

<details>
<summary>Xem lời giải Câu 8</summary>

- $\text{VIIII}$: **Sai** (không lặp lại quá 3 chữ số I). Sửa lại: **$\text{IX}$**.
- $\text{XXIIII}$: **Sai**. Sửa lại: **$\text{XXIV}$**.
- $\text{IXX}$: **Sai** (chữ số I chỉ đứng trước V hoặc X ở cụm IV và IX). Sửa lại: **$\text{XIX}$**.
- $\text{XXVI}$: **Đúng** (có giá trị bằng 26).

</details>

**Câu 9.** Viết tập hợp các số tự nhiên có ba chữ số, trong đó:
- a) Chữ số hàng chục gấp 2 lần chữ số hàng trăm, chữ số hàng đơn vị gấp 2 lần chữ số hàng chục.
- b) Chữ số hàng chục lớn hơn chữ số hàng đơn vị 3 đơn vị, chữ số hàng trăm lớn hơn chữ số hàng chục 3 đơn vị.
- c) Chữ số hàng trăm là 1, chữ số hàng chục nhỏ hơn chữ số hàng đơn vị, và tổng ba chữ số bằng 8.

<details>
<summary>Xem lời giải Câu 9</summary>

- a) Gọi số có dạng $\overline{abc}$ ($a \ne 0$). Theo đề: $b = 2a$ và $c = 2b = 4a.$
  - Vì $c$ là chữ số nên $4a \le 9 \implies a = 1$ hoặc $a = 2.$
  - Với $a = 1 \implies b = 2, c = 4 \implies$ được số $124.$
  - Với $a = 2 \implies b = 4, c = 8 \implies$ được số $248.$
  - Vậy tập hợp cần tìm là: **$\{124; 248\}$**.
- b) Gọi chữ số hàng đơn vị là $c$, khi đó chữ số hàng chục là $c + 3$, chữ số hàng trăm là $(c + 3) + 3 = c + 6.$
  - Vì $c + 6 \le 9 \implies c \in \{0; 1; 2; 3\}.$
  - Lần lượt thế các giá trị của $c$:
    - $c = 0 \implies$ số $630.$
    - $c = 1 \implies$ số $741.$
    - $c = 2 \implies$ số $852.$
    - $c = 3 \implies$ số $963.$
  - Vậy tập hợp cần tìm là: **$\{630; 741; 852; 963\}$**.
- c) Chữ số hàng trăm là 1 nên tổng hai chữ số còn lại là $8 - 1 = 7.$
  - Gọi chữ số hàng chục là $b$ và hàng đơn vị là $c$ với $b + c = 7$ và $b < c$:
    - $b = 0 \implies c = 7 \implies$ số $107.$
    - $b = 1 \implies c = 6 \implies$ số $116.$
    - $b = 2 \implies c = 5 \implies$ số $125.$
    - $b = 3 \implies c = 4 \implies$ số $134.$
  - Vậy tập hợp cần tìm là: **$\{107; 116; 125; 134\}$**.

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Hệ nhị phân).**
Trong hệ thập phân, ta dùng 10 chữ số và cứ 10 đơn vị ở một hàng thì bằng 1 đơn vị ở hàng liền trước nó. Trong **hệ nhị phân** (dùng trong máy tính điện tử), người ta chỉ dùng hai chữ số là $0$ và $1$, và cứ 2 đơn vị ở một hàng thì bằng 1 đơn vị ở hàng liền trước nó. Số $a_3 a_2 a_1 a_0$ viết trong hệ nhị phân có giá trị bằng:
$$a_3 \times 2^3 + a_2 \times 2^2 + a_1 \times 2^1 + a_0 \times 2^0 = a_3 \times 8 + a_2 \times 4 + a_1 \times 2 + a_0$$
- a) Số $1101$ viết trong hệ nhị phân có giá trị bằng bao nhiêu trong hệ thập phân?
- b) Viết số $43$ (hệ thập phân) dưới dạng số nhị phân.

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

- a) Áp dụng công thức chuyển đổi:
  $$1101_2 = 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 1 = 8 + 4 + 0 + 1 = 13$$
  Vậy số $1101$ trong hệ nhị phân bằng số **$13$** trong hệ thập phân.
- b) Để đổi từ hệ thập phân sang hệ nhị phân, ta chia liên tiếp cho 2 và ghi lại các số dư:
  - $43 : 2 = 21$ (dư 1)
  - $21 : 2 = 10$ (dư 1)
  - $10 : 2 = 5$ (dư 0)
  - $5 : 2 = 2$ (dư 1)
  - $2 : 2 = 1$ (dư 0)
  - Thương cuối cùng là 1 (dừng lại vì $< 2$).
  - Ghi thương cuối cùng và các số dư theo thứ tự từ dưới lên: **$101011$**.
  - **Thử lại:** $1 \times 32 + 0 \times 16 + 1 \times 8 + 0 \times 4 + 1 \times 2 + 1 = 32 + 8 + 2 + 1 = 43$ (chính xác).
  - Vậy $43 = 101011_2.$

</details>

**Bài 2 (Hệ đếm cơ số 3 trong quân sự).**
Một đội quân được tổ chức theo nguyên tắc "tam tam chế":
- Cứ 3 lính thì lập thành 1 tổ.
- Cứ 3 tổ thì lập thành 1 tiểu đội.
- Cứ 3 tiểu đội thì lập thành 1 trung đội.
- Cứ 3 trung đội thì lập thành 1 đại đội.
- Cứ 3 đại đội thì lập thành 1 tiểu đoàn.

Có 422 lính thì lập được thành các cấp nào?

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

Vì cứ 3 đơn vị ở một cấp thì lập thành 1 đơn vị ở cấp liền trên, ta thực hiện chia liên tiếp 422 cho 3:
- $422 : 3 = 140$ (dư 2 lính lẻ)
- $140 : 3 = 46$ (dư 2 tổ)
- $46 : 3 = 15$ (dư 1 tiểu đội)
- $15 : 3 = 5$ (dư 0 trung đội)
- $5 : 3 = 1$ (dư 2 đại đội)
- Thương cuối cùng là 1 tiểu đoàn.

Xếp theo thứ tự từ cấp cao nhất xuống thấp nhất, 422 lính lập thành:
- **1 tiểu đoàn**
- **2 đại đội**
- **0 trung đội**
- **1 tiểu đội**
- **2 tổ**
- **2 lính lẻ**

**Kiểm tra lại:**
- 1 tiểu đoàn $= 3^5 = 243$ lính.
- 1 đại đội $= 3^4 = 81$ lính $\implies 2$ đại đội $= 162$ lính.
- 1 trung đội $= 3^3 = 27$ lính.
- 1 tiểu đội $= 3^2 = 9$ lính.
- 1 tổ $= 3$ lính $\implies 2$ tổ $= 6$ lính.
- Tổng số lính $= 243 + 162 + 0 + 9 + 6 + 2 = 422$ lính (hoàn toàn chính xác).

</details>

**Bài 3 (Bài toán đánh số trang sách).**
Người ta đánh số trang một quyển sách bằng dãy số tự nhiên $1; 2; 3; \dots$ Quyển sách đó dày 150 trang. Hỏi người ta phải viết tất cả bao nhiêu chữ số?

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

Ta chia các trang sách thành 3 nhóm theo số lượng chữ số:
1. **Trang có 1 chữ số (từ trang 1 đến trang 9):**
   - Số trang: $(9 - 1) + 1 = 9$ trang.
   - Số chữ số cần dùng: $9 \times 1 = 9$ chữ số.
2. **Trang có 2 chữ số (từ trang 10 đến trang 99):**
   - Số trang: $(99 - 10) + 1 = 90$ trang.
   - Số chữ số cần dùng: $90 \times 2 = 180$ chữ số.
3. **Trang có 3 chữ số (từ trang 100 đến trang 150):**
   - Số trang: $(150 - 100) + 1 = 51$ trang.
   - Số chữ số cần dùng: $51 \times 3 = 153$ chữ số.

Tổng số chữ số phải viết là:
$$9 + 180 + 153 = 342 \text{ (chữ số)}$$

</details>

**Bài 4 (Cấu tạo số nâng cao).**
Tìm một số tự nhiên có hai chữ số, biết rằng nếu viết thêm chữ số 0 vào giữa hai chữ số của nó thì được một số mới gấp 9 lần số ban đầu.

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- Gọi số cần tìm là $\overline{ab}$ ($a \ne 0; a, b \in \mathbb{N}, a, b \le 9$).
- Khi viết thêm chữ số 0 vào giữa hai chữ số, ta được số mới là $\overline{a0b}.$
- Theo đề bài, ta có phương trình:
  $$\overline{a0b} = 9 \times \overline{ab}$$
- Phân tích cấu tạo số ở cả hai vế:
  $$a \times 100 + 0 \times 10 + b = 9 \times (a \times 10 + b)$$
  $$100a + b = 90a + 9b$$
- Bớt cả hai vế đi $90a$ và $b$:
  $$10a = 8b \implies 5a = 4b$$
- Vì $5a = 4b$, mà $\text{ƯCLN}(4, 5) = 1$ nên $a$ phải chia hết cho 4, và $b$ phải chia hết cho 5.
- Lại có $a$ là chữ số khác 0 nên $a = 4$, kéo theo $b = 5.$
- Vậy số tự nhiên cần tìm là **$45$**.
- **Thử lại:** Khi viết thêm chữ số 0 vào giữa ta được $405.$ Ta thấy $405 = 45 \times 9$ (hoàn toàn thỏa mãn).

</details>
