---
title: 'Toán 6 Bài 3: Thứ tự trong tập hợp các số tự nhiên - Lý thuyết, tia số và bài tập chi tiết'
description: 'Toàn bộ kiến thức Toán 6 Bài 3 Thứ tự trong tập hợp các số tự nhiên: tia số, số liền trước, số liền sau, so sánh hai số tự nhiên, kèm bài tập tương tác và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số tự nhiên
  - Tia số
  - Số học 6
  - Kết nối tri thức
grade: 6
---

Bài học **Bài 3: Thứ tự trong tập hợp các số tự nhiên** thuộc Chương I: *Tập hợp các số tự nhiên* trong chương trình môn Toán 6. Bài viết tổng hợp toàn bộ lý thuyết trọng tâm về tia số, số liền trước, số liền sau, các quy tắc so sánh và tính chất bắc cầu, kết hợp các câu hỏi trắc nghiệm tương tác và hệ thống bài tập tự luyện có nút hiện/ẩn lời giải chi tiết.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy cùng kiểm tra lại các kiến thức đã học từ bài trước:

**Câu 1.**
- a) Đọc số $4\ 305\ 172.$
- b) Viết số "hai mươi ba nghìn không trăm bốn mươi" bằng chữ số.

<details>
<summary>Xem đáp án Câu 1</summary>

- a) $4\ 305\ 172$ đọc là: **Bốn triệu ba trăm linh năm nghìn một trăm bảy mươi hai**.
- b) Viết bằng chữ số: **$23\ 040$**.

</details>

**Câu 2.** Viết tập hợp các chữ số của số $2026.$

<details>
<summary>Xem đáp án Câu 2</summary>

Số $2026$ gồm các chữ số $2; 0; 2; 6.$ Vì mỗi phần tử trong tập hợp chỉ được viết một lần duy nhất nên tập hợp các chữ số là:
$$\{0; 2; 6\}$$

</details>

**Câu 3.** Trong mỗi số $1\ 425$; $40\ 983$; $4\ 720\ 516$, chữ số 4 có giá trị là bao nhiêu?

```quiz
type: choice
question: 'Trong số $40\ 983$, chữ số 4 nằm ở hàng nào và có giá trị bao nhiêu?'
options:
  - 'Hàng nghìn, giá trị 4000'
  - 'Hàng chục nghìn, giá trị 40 000'
  - 'Hàng trăm, giá trị 400'
  - 'Hàng trăm nghìn, giá trị 400 000'
answer: 2
explanation: 'Đếm các hàng từ phải sang trái: 3 (đơn vị), 8 (chục), 9 (trăm), 0 (nghìn), 4 (chục nghìn). Do đó chữ số 4 ở hàng chục nghìn và có giá trị bằng 40 000.'
```

<details>
<summary>Xem lời giải đầy đủ Câu 3</summary>

- Trong số $1\ 425$: chữ số 4 ở hàng trăm $\implies$ giá trị là **$400$**.
- Trong số $40\ 983$: chữ số 4 ở hàng chục nghìn $\implies$ giá trị là **$40\ 000$**.
- Trong số $4\ 720\ 516$: chữ số 4 ở hàng triệu $\implies$ giá trị là **$4\ 000\ 000$**.

</details>

**Câu 4.** Dùng bốn chữ số $0; 3; 6; 9$ (mỗi chữ số viết một lần), hãy viết số lớn nhất và số nhỏ nhất có bốn chữ số.

<details>
<summary>Xem đáp án Câu 4</summary>

- **Số lớn nhất:** Xếp các chữ số theo thứ tự giảm dần: $9; 6; 3; 0 \implies \mathbf{9630}.$
- **Số nhỏ nhất:** Chữ số đầu tiên phải khác 0 nên chọn 3, sau đó xếp các chữ số còn lại theo thứ tự tăng dần: $0; 6; 9 \implies \mathbf{3069}.$

</details>

**Câu 5.**
- a) Đọc các số La Mã: $\text{XVII}$; $\text{XXVI}.$
- b) Viết các số $19$; $24$ bằng chữ số La Mã.

<details>
<summary>Xem đáp án Câu 5</summary>

- a) $\text{XVII} = 10 + 5 + 2 = 17$; $\text{XXVI} = 20 + 6 = 26.$
- b) $19 = \text{XIX}$; $24 = \text{XXIV}.$

</details>

---

## A. Lý thuyết trọng tâm

### 1. Tia số — Thứ tự trên tia số

Mỗi số tự nhiên được biểu diễn bởi một điểm trên **tia số**:
- Tia số là một tia có gốc tại điểm $0$, có chiều mũi tên từ trái sang phải.
- Các vạch chia trên tia số cách đều nhau; mỗi vạch ứng với một số tự nhiên: $0; 1; 2; 3; 4; \dots$
- **Quy tắc so sánh trên tia số:** Các số được sắp xếp tăng dần theo chiều mũi tên. Do đó, trong hai số tự nhiên khác nhau:
  $$\text{Số nằm bên trái nhỏ hơn số nằm bên phải.}$$
  $$\text{Số nằm bên phải lớn hơn số nằm bên trái.}$$

<div style="display:flex; justify-content:center; margin:16px 0;">
  <svg width="420" height="70" viewBox="0 0 420 70" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <!-- Trục tia số -->
    <line x1="20" y1="35" x2="395" y2="35" stroke="#334155" stroke-width="2"/>
    <!-- Mũi tên -->
    <polygon points="405,35 390,30 390,40" fill="#334155"/>
    <!-- Vạch chia từ 0 đến 10 -->
    <!-- 0: x=30, step=36 -->
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="13" text-anchor="middle" fill="#1e293b">0</text>
    <line x1="66" y1="30" x2="66" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="66" y="58" font-size="13" text-anchor="middle" fill="#64748b">1</text>
    <line x1="102" y1="30" x2="102" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="102" y="58" font-size="13" text-anchor="middle" fill="#64748b">2</text>
    <line x1="138" y1="30" x2="138" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="138" y="58" font-size="13" text-anchor="middle" fill="#64748b">3</text>
    <line x1="174" y1="30" x2="174" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="174" y="58" font-size="13" text-anchor="middle" fill="#64748b">4</text>
    <line x1="210" y1="30" x2="210" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="210" y="58" font-size="13" text-anchor="middle" fill="#64748b">5</text>
    <line x1="246" y1="30" x2="246" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="246" y="58" font-size="13" text-anchor="middle" fill="#64748b">6</text>
    <line x1="282" y1="30" x2="282" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="282" y="58" font-size="13" text-anchor="middle" fill="#64748b">7</text>
    <line x1="318" y1="30" x2="318" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="318" y="58" font-size="13" text-anchor="middle" fill="#64748b">8</text>
    <line x1="354" y1="30" x2="354" y2="40" stroke="#64748b" stroke-width="1.5"/><text x="354" y="58" font-size="13" text-anchor="middle" fill="#64748b">9</text>
  </svg>
</div>

> **Ví dụ 1.** Hãy biểu diễn hai số $3$ và $7$ trên tia số, rồi cho biết trong hai số đó số nào lớn hơn.

<details>
<summary>Xem lời giải và hình vẽ Ví dụ 1</summary>

Vẽ tia số và chấm đậm hai điểm ứng với số 3 và số 7:

<div style="display:flex; justify-content:center; margin:12px 0;">
  <svg width="420" height="70" viewBox="0 0 420 70" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="395" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="405,35 390,30 390,40" fill="#334155"/>
    <line x1="30" y1="30" x2="30" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="30" y="58" font-size="12" text-anchor="middle" fill="#64748b">0</text>
    <line x1="66" y1="30" x2="66" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="66" y="58" font-size="12" text-anchor="middle" fill="#64748b">1</text>
    <line x1="102" y1="30" x2="102" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="102" y="58" font-size="12" text-anchor="middle" fill="#64748b">2</text>
    <!-- Điểm 3 -->
    <circle cx="138" cy="35" r="4.5" fill="#2563eb"/>
    <line x1="138" y1="24" x2="138" y2="46" stroke="#2563eb" stroke-width="2.5"/><text x="138" y="59" font-size="14" font-weight="bold" text-anchor="middle" fill="#1d4ed8">3</text>
    <line x1="174" y1="30" x2="174" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="174" y="58" font-size="12" text-anchor="middle" fill="#64748b">4</text>
    <line x1="210" y1="30" x2="210" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="210" y="58" font-size="12" text-anchor="middle" fill="#64748b">5</text>
    <line x1="246" y1="30" x2="246" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="246" y="58" font-size="12" text-anchor="middle" fill="#64748b">6</text>
    <!-- Điểm 7 -->
    <circle cx="282" cy="35" r="4.5" fill="#16a34a"/>
    <line x1="282" y1="24" x2="282" y2="46" stroke="#16a34a" stroke-width="2.5"/><text x="282" y="59" font-size="14" font-weight="bold" text-anchor="middle" fill="#15803d">7</text>
    <line x1="318" y1="30" x2="318" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="318" y="58" font-size="12" text-anchor="middle" fill="#64748b">8</text>
    <line x1="354" y1="30" x2="354" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="354" y="58" font-size="12" text-anchor="middle" fill="#64748b">9</text>
  </svg>
</div>

Trên tia số, điểm 3 nằm ở bên trái điểm 7, nên $3 < 7.$ Vậy số **7 lớn hơn**.

</details>

---

### 2. Số liền trước — Số liền sau — Hai số tự nhiên liên tiếp

- **Số liền sau:** Số liền sau của một số tự nhiên $a$ bằng số đó cộng thêm 1: $a + 1.$
  $$\text{Ví dụ: Số liền sau của } 10 \text{ là } 11.$$
- **Số liền trước:** Số liền trước của một số tự nhiên $a$ (với $a \ne 0$) bằng số đó bớt đi 1: $a - 1.$
  $$\text{Ví dụ: Số liền trước của } 11 \text{ là } 10.$$
- **Hai số tự nhiên liên tiếp:** Hai số tự nhiên liên tiếp thì hơn kém nhau đúng **1 đơn vị**. Nếu gọi số bé là $n$ thì số liền sau là $n + 1.$
- **Đặc điểm tập hợp $\mathbb{N}$:**
  - Số **0 là số tự nhiên nhỏ nhất** và **không có số liền trước**.
  - Tập hợp $\mathbb{N}$ **không có số tự nhiên lớn nhất**, vì bất kì số tự nhiên nào cũng luôn có một số liền sau lớn hơn nó.

> **Ví dụ 2.** Tìm số liền trước và số liền sau của hai số $123$ và $129.$ Sắp xếp sáu số đó (tính cả $123$ và $129$) theo thứ tự từ bé đến lớn.

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- Xét số $123$:
  - Số liền trước của $123$ là: $123 - 1 = 122.$
  - Số liền sau của $123$ là: $123 + 1 = 124.$
- Xét số $129$:
  - Số liền trước của $129$ là: $129 - 1 = 128.$
  - Số liền sau của $129$ là: $129 + 1 = 130.$
- Sắp xếp 6 số từ bé đến lớn:
  $$122;\ 123;\ 124;\ 128;\ 129;\ 130$$

</details>

---

### 3. So sánh hai số tự nhiên

Với hai số tự nhiên $a$ và $b$ bất kì, luôn xảy ra đúng một trong ba trường hợp: $a < b$, hoặc $a = b$, hoặc $a > b.$

#### a) Các bước so sánh hai số tự nhiên
1. **Bước 1 (So sánh số lượng chữ số):** Số nào có **nhiều chữ số hơn** thì số đó **lớn hơn**.
   $$\text{Ví dụ: } 10\ 002 > 9875 \quad (\text{vì 5 chữ số} > \text{4 chữ số})$$
2. **Bước 2 (Khi có cùng số lượng chữ số):** So sánh từng cặp chữ số ở cùng một hàng kể từ trái sang phải. Đến cặp chữ số đầu tiên khác nhau, chữ số nào lớn hơn thì số chứa nó sẽ lớn hơn.
   $$\text{Ví dụ: } 3281 > 3218 \quad (\text{chữ số hàng chục: } 8 > 1)$$

#### b) Các kí hiệu so sánh mở rộng
- Kí hiệu $a \le b$: đọc là "*$a$ nhỏ hơn hoặc bằng $b$*", nghĩa là $a < b$ hoặc $a = b.$
- Kí hiệu $a \ge b$: đọc là "*$a$ lớn hơn hoặc bằng $b$*", nghĩa là $a > b$ hoặc $a = b.$

#### c) Tính chất bắc cầu
$$\text{Nếu } a < b \text{ và } b < c \implies a < c$$
$$\text{Nếu } a > b \text{ và } b > c \implies a > c$$

> **Ví dụ 3.**
> - a) So sánh: $9875$ và $10\ 002$; $3218$ và $3281.$
> - b) Liệt kê các phần tử của tập hợp $B = \{x \in \mathbb{N} \mid 5 < x \le 10\}.$

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) **So sánh:**
  - $9875$ có 4 chữ số, còn $10\ 002$ có 5 chữ số $\implies 9875 < 10\ 002.$
  - $3218$ và $3281$ cùng có 4 chữ số: hàng nghìn đều là 3, hàng trăm đều là 2, hàng chục có $1 < 8 \implies 3218 < 3281.$
- b) **Liệt kê tập hợp $B$:**
  - Điều kiện $5 < x \le 10$ nghĩa là $x$ lớn hơn 5 (không lấy số 5) và $x$ nhỏ hơn hoặc bằng 10 (có lấy số 10).
  - Vậy $B = \{6; 7; 8; 9; 10\}.$

</details>

---

### 4. Bốn điều chú ý rất dễ nhầm lẫn

1. **Phân biệt dấu $<$ với $\le$:**
   - Với điều kiện $x < 10$: **không lấy** số 10 ($x \in \{0; 1; \dots; 9\}$).
   - Với điều kiện $x \le 10$: **có lấy** số 10 ($x \in \{0; 1; \dots; 10\}$).
2. **Số 0 không có số liền trước:**
   - Trong tập hợp số tự nhiên $\mathbb{N}$, số 0 là số bé nhất và không có số liền trước. Tránh viết "số liền trước của 0 là $-1$" vì $-1$ không thuộc $\mathbb{N}.$
3. **Hai số tự nhiên liên tiếp:**
   - Phải hơn kém nhau đúng **1 đơn vị**. Hai số $15$ và $17$ hơn kém nhau 2 đơn vị nên không phải là hai số liên tiếp.
4. **Phân biệt "số liền sau" và "số lớn hơn":**
   - Số liền sau của $6$ chỉ có **duy nhất một số là 7**.
   - Còn các số lớn hơn $6$ thì có **vô số** ($7; 8; 9; 10; \dots$).

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Số liền trước, số liền sau, số tự nhiên liên tiếp

**Phương pháp giải:**
- Số liền sau $= \text{Số đã cho} + 1.$
- Số liền trước $= \text{Số đã cho} - 1$ (số 0 không có số liền trước).
- Ba số tự nhiên liên tiếp tăng dần có dạng: $n - 1;\ n;\ n + 1$ hoặc $n;\ n + 1;\ n + 2.$
- **Mẹo giải nhanh:** Tổng của 3 số tự nhiên liên tiếp luôn bằng **3 lần số ở giữa**.

**Luyện tập 1.1.** Tìm số liền trước và số liền sau của hai số $200$ và $195.$ Sắp xếp sáu số đó (tính cả $200$ và $195$) theo thứ tự từ lớn đến bé.

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- Xét số $200$: số liền trước là $199$, số liền sau là $201.$
- Xét số $195$: số liền trước là $194$, số liền sau là $196.$
- Xếp 6 số từ lớn đến bé:
  $$201;\ 200;\ 199;\ 196;\ 195;\ 194$$

</details>

**Luyện tập 1.2.** Điền vào chỗ trống để mỗi dòng sau là ba số tự nhiên liên tiếp xếp từ lớn đến bé:
- a) $20;\ \dots;\ \dots$
- b) $\dots;\ 200;\ \dots$
- c) $\dots;\ \dots;\ 2000.$

<details>
<summary>Xem lời giải Luyện tập 1.2</summary>

Vì xếp từ lớn đến bé nên mỗi số sau bằng số đứng trước bớt đi 1 đơn vị:
- a) $20;\ 19;\ 18$
- b) $201;\ 200;\ 199$
- c) $2002;\ 2001;\ 2000$

</details>

**Luyện tập 1.3.** Tìm ba số tự nhiên liên tiếp có tổng bằng $33.$

```quiz
type: choice
question: 'Ba số tự nhiên liên tiếp có tổng bằng 33 là:'
options:
  - '9; 10; 11'
  - '10; 11; 12'
  - '11; 12; 13'
  - '8; 11; 14'
answer: 2
explanation: 'Tổng của ba số tự nhiên liên tiếp bằng 3 lần số ở giữa. Do đó số ở giữa là 33 : 3 = 11. Ba số đó là 10; 11; 12.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 1.3</summary>

- Gọi ba số tự nhiên liên tiếp là $n - 1,\ n,\ n + 1$ với $n$ là số ở giữa.
- Tổng của ba số là: $(n - 1) + n + (n + 1) = 3n = 33 \implies n = 33 : 3 = 11.$
- Vậy ba số cần tìm là: **$10;\ 11;\ 12$**.
- Thử lại: $10 + 11 + 12 = 33$ (chính xác).

</details>

---

### Dạng 2. So sánh, sắp xếp thứ tự các số tự nhiên; tia số

**Phương pháp giải:**
- So sánh: Đếm số lượng chữ số trước; nếu bằng nhau thì so sánh các chữ số cùng hàng từ trái sang phải.
- Tia số: Số bên trái nhỏ hơn số bên phải.
- Bắc cầu: $x < a$ và $a < y \implies x < y.$

**Luyện tập 2.1.** Điền dấu thích hợp ($<, >$ hoặc $=$) vào chỗ chấm:
$$1234 \dots 999;\quad 5078 \dots 5087;\quad 20\ 000 \dots 19\ 999;\quad 307 \dots 307$$

<details>
<summary>Xem lời giải Luyện tập 2.1</summary>

- $1234 > 999$ (4 chữ số $> 3$ chữ số).
- $5078 < 5087$ (cùng 4 chữ số, hàng chục có $7 < 8$).
- $20\ 000 > 19\ 999$ (hàng chục nghìn có $2 > 1$).
- $307 = 307.$

</details>

**Luyện tập 2.2.** Cho các số: $7021$; $6987$; $7012$; $10\ 000$; $999.$
- a) Sắp xếp các số đó theo thứ tự tăng dần.
- b) Sắp xếp các số đó theo thứ tự giảm dần.

<details>
<summary>Xem lời giải Luyện tập 2.2</summary>

- a) **Thứ tự tăng dần (từ bé đến lớn):**
  $$999;\ 6987;\ 7012;\ 7021;\ 10\ 000$$
- b) **Thứ tự giảm dần (từ lớn đến bé):**
  $$10\ 000;\ 7021;\ 7012;\ 6987;\ 999$$

</details>

**Luyện tập 2.3.**
- a) Vẽ tia số từ 0 đến 10 rồi biểu diễn các số $2; 5; 9.$ Trong ba số đó, số nào nằm bên trái nhất?
- b) Cho hai số tự nhiên $x$ và $y$, biết $x < 7$ và $7 < y.$ Hãy so sánh $x$ với $y.$

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

- a) Biểu diễn trên tia số:
  - Điểm ứng với số 2 nằm bên trái nhất $\implies$ số **2 là số nhỏ nhất** trong ba số.
- b) Theo tính chất bắc cầu: vì $x < 7$ và $7 < y$ nên ta có **$x < y$**.

</details>

---

### Dạng 3. Liệt kê phần tử của tập hợp cho bởi điều kiện $<, \le, >, \ge$

**Phương pháp giải:**
- Đọc kĩ điều kiện:
  - Nếu gặp dấu $<$ hoặc $>$: không lấy số ở mép.
  - Nếu gặp dấu $\le$ hoặc $\ge$: có lấy số ở mép.
  - Nếu là $x \in \mathbb{N}^*$: chỉ lấy các số tự nhiên khác 0.

**Luyện tập 3.1.** Trong các số $11; 15; 18; 21; 28; 30$:
- Số nào thuộc tập hợp $A = \{x \in \mathbb{N} \mid x > 20\}$?
- Số nào thuộc tập hợp $B = \{x \in \mathbb{N} \mid x \le 21\}$?

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- Tập hợp $A$ gồm các số lớn hơn 20 (không lấy 20): các số thuộc $A$ là **$21;\ 28;\ 30$**.
- Tập hợp $B$ gồm các số nhỏ hơn hoặc bằng 21 (có lấy 21): các số thuộc $B$ là **$11;\ 15;\ 18;\ 21$**.

</details>

**Luyện tập 3.2.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 12 < x < 19\}$
- b) $B = \{x \in \mathbb{N} \mid 25 \le x < 30\}$
- c) $C = \{x \in \mathbb{N}^* \mid x \le 6\}$
- d) $D = \{x \in \mathbb{N} \mid 100 \le x \le 105\}$

<details>
<summary>Xem lời giải Luyện tập 3.2</summary>

- a) $A = \{13; 14; 15; 16; 17; 18\}$
- b) $B = \{25; 26; 27; 28; 29\}$
- c) $C = \{1; 2; 3; 4; 5; 6\}$ (chú ý $x \in \mathbb{N}^*$ nên không có số 0)
- d) $D = \{100; 101; 102; 103; 104; 105\}$

</details>

**Luyện tập 3.3.**
- a) Liệt kê các phần tử của tập hợp $M = \{x \in \mathbb{N} \mid 27 \le x < 32\}.$
- b) Cho hai tập hợp $P = \{x \in \mathbb{N} \mid x \le 4\}$ và $Q = \{x \in \mathbb{N}^* \mid x < 5\}.$ Hai tập hợp $P$ và $Q$ có bằng nhau không? Vì sao?

```quiz
type: choice
question: 'Hai tập hợp $P = \{x \in \mathbb{N} \mid x \le 4\}$ và $Q = \{x \in \mathbb{N}^* \mid x < 5\}$ có bằng nhau không?'
options:
  - 'Có bằng nhau, vì cùng có 4 phần tử'
  - 'Không bằng nhau, vì tập P có thêm phần tử 0'
  - 'Có bằng nhau, vì các phần tử đều nhỏ hơn 5'
  - 'Không bằng nhau, vì tập Q có nhiều phần tử hơn'
answer: 2
explanation: 'P = {0; 1; 2; 3; 4} (gồm 5 phần tử), trong khi Q = {1; 2; 3; 4} (do x thuộc N* nên không có số 0). Do đó hai tập hợp này không bằng nhau.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 3.3</summary>

- a) $M = \{27; 28; 29; 30; 31\}.$
- b) Liệt kê từng tập hợp:
  - $P = \{0; 1; 2; 3; 4\}$ (vì $x \in \mathbb{N}$ nên có lấy số 0).
  - $Q = \{1; 2; 3; 4\}$ (vì $x \in \mathbb{N}^*$ nên không có số 0).
  - Vậy hai tập hợp $P$ và $Q$ **không bằng nhau** vì tập hợp $P$ chứa phần tử $0$ mà tập hợp $Q$ không có.

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Tìm số liền trước và số liền sau của mỗi số sau: $99$; $1000$; $2026.$

<details>
<summary>Xem lời giải Bài 1</summary>

- Số $99$: số liền trước là $98$, số liền sau là $100.$
- Số $1000$: số liền trước là $999$, số liền sau là $1001.$
- Số $2026$: số liền trước là $2025$, số liền sau là $2027.$

</details>

**Bài 2.** Điền dấu thích hợp ($<, >$ hoặc $=$) vào chỗ chấm:
$$1001 \dots 999;\quad 4578 \dots 4587;\quad 30\ 000 \dots 3000;\quad 2026 \dots 2026$$

<details>
<summary>Xem lời giải Bài 2</summary>

- $1001 > 999$
- $4578 < 4587$
- $30\ 000 > 3000$
- $2026 = 2026$

</details>

**Bài 3.** Cho tia số dưới đây (các vạch chia cách đều nhau):

<div style="display:flex; justify-content:center; margin:16px 0;">
  <svg width="460" height="75" viewBox="0 0 460 75" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="435" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="445,35 430,30 430,40" fill="#334155"/>
    <!-- vạch: 0 at x=30, mỗi bước 30px -->
    <!-- 0 -->
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="12" text-anchor="middle">0</text>
    <!-- 1 -->
    <line x1="60" y1="30" x2="60" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 2: A -->
    <circle cx="90" cy="35" r="4" fill="#2563eb"/><text x="90" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">A</text>
    <!-- 3 -->
    <line x1="120" y1="30" x2="120" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 4 -->
    <line x1="150" y1="28" x2="150" y2="42" stroke="#334155" stroke-width="2"/><text x="150" y="58" font-size="12" text-anchor="middle">4</text>
    <!-- 5: B -->
    <circle cx="180" cy="35" r="4" fill="#2563eb"/><text x="180" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">B</text>
    <!-- 6 -->
    <line x1="210" y1="30" x2="210" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 7 -->
    <line x1="240" y1="30" x2="240" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 8 -->
    <line x1="270" y1="28" x2="270" y2="42" stroke="#334155" stroke-width="2"/><text x="270" y="58" font-size="12" text-anchor="middle">8</text>
    <!-- 9: C -->
    <circle cx="300" cy="35" r="4" fill="#2563eb"/><text x="300" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">C</text>
    <!-- 10 -->
    <line x1="330" y1="30" x2="330" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 11: D -->
    <circle cx="360" cy="35" r="4" fill="#2563eb"/><text x="360" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">D</text>
    <!-- 12 -->
    <line x1="390" y1="28" x2="390" y2="42" stroke="#334155" stroke-width="2"/><text x="390" y="58" font-size="12" text-anchor="middle">12</text>
  </svg>
</div>

- a) Mỗi điểm $A, B, C, D$ ứng với số tự nhiên nào?
- b) Trong bốn số đó, số nào lớn nhất, số nào nhỏ nhất?

<details>
<summary>Xem lời giải Bài 3</summary>

- a) Đếm lần lượt các vạch chia cách đều từ vạch số 0:
  - Điểm $A$ ứng với số **$2$**.
  - Điểm $B$ ứng với số **$5$**.
  - Điểm $C$ ứng với số **$9$**.
  - Điểm $D$ ứng với số **$11$**.
- b) So sánh thứ tự trên tia số:
  - Số lớn nhất là **$11$** (ứng với điểm $D$ nằm xa nhất về bên phải).
  - Số nhỏ nhất là **$2$** (ứng với điểm $A$ nằm gần nhất về bên trái).

</details>

**Bài 4.**
- a) Viết ba số tự nhiên liên tiếp, trong đó số lớn nhất là $100.$
- b) Viết ba số tự nhiên liên tiếp, trong đó số bé nhất là $2026.$

<details>
<summary>Xem lời giải Bài 4</summary>

- a) Số lớn nhất là 100, hai số liền trước lần lượt là 99 và 98: **$98;\ 99;\ 100$**.
- b) Số bé nhất là 2026, hai số liền sau lần lượt là 2027 và 2028: **$2026;\ 2027;\ 2028$**.

</details>

**Bài 5.** Sắp xếp các số $7021$; $999$; $7012$; $10\ 000$; $6987$; $7210$ theo thứ tự tăng dần.

<details>
<summary>Xem lời giải Bài 5</summary>

- Số có 3 chữ số: $999$ (nhỏ nhất).
- Các số có 4 chữ số: $6987 < 7012 < 7021 < 7210.$
- Số có 5 chữ số: $10\ 000$ (lớn nhất).
- **Thứ tự tăng dần:**
  $$999;\ 6987;\ 7012;\ 7021;\ 7210;\ 10\ 000$$

</details>

**Bài 6.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 15 < x \le 20\}$
- b) $B = \{x \in \mathbb{N}^* \mid x < 4\}$
- c) $C = \{x \in \mathbb{N} \mid 30 \le x < 34\}$

<details>
<summary>Xem lời giải Bài 6</summary>

- a) $A = \{16; 17; 18; 19; 20\}.$
- b) $B = \{1; 2; 3\}$ (vì $x \in \mathbb{N}^*$ nên không lấy số 0).
- c) $C = \{30; 31; 32; 33\}.$

</details>

**Bài 7.** Tìm số tự nhiên $x$, biết:
- a) $x$ là số liền sau của số $2025.$
- b) $x$ là số liền trước của số $1000.$
- c) $x$ vừa lớn hơn $7$ vừa nhỏ hơn $9.$

<details>
<summary>Xem lời giải Bài 7</summary>

- a) $x = 2025 + 1 = 2026.$
- b) $x = 1000 - 1 = 999.$
- c) $7 < x < 9 \implies x = 8.$

</details>

**Bài 8.** Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Số liền trước của số 0 là số $-1.$
- b) Tập hợp $\{x \in \mathbb{N} \mid x \le 5\}$ có 5 phần tử.
- c) Trong tập hợp $\mathbb{N}$ có một số tự nhiên lớn nhất.
- d) Hai số $15$ và $17$ là hai số tự nhiên liên tiếp.

<details>
<summary>Xem lời giải Bài 8</summary>

- a) **Sai**, vì $-1$ không phải số tự nhiên. Trong $\mathbb{N}$, số 0 là số nhỏ nhất và không có số liền trước.
- b) **Sai**, vì tập hợp này gồm các phần tử $\{0; 1; 2; 3; 4; 5\}$, có tổng cộng **6 phần tử** (bao gồm số 0).
- c) **Sai**, vì mọi số tự nhiên đều có một số liền sau lớn hơn nó nên $\mathbb{N}$ không có số lớn nhất.
- d) **Sai**, vì hai số tự nhiên liên tiếp phải hơn kém nhau 1 đơn vị, trong khi $17 - 15 = 2.$ Sửa lại: hai số liên tiếp là $15$ và $16$ (hoặc $16$ và $17$).

</details>

**Bài 9.** Tìm hai số tự nhiên liên tiếp có tổng bằng $75.$

<details>
<summary>Xem lời giải Bài 9</summary>

- Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.
- Số bé là: $(75 - 1) : 2 = 37.$
- Số lớn là: $37 + 1 = 38.$
- Vậy hai số cần tìm là **$37$ và $38$**. Thử lại: $37 + 38 = 75$ (đúng).

</details>

**Bài 10.**
- a) Có bao nhiêu số tự nhiên $x$ thoả mãn $100 \le x < 210$?
- b) Có bao nhiêu số tự nhiên có ba chữ số?

<details>
<summary>Xem lời giải Bài 10</summary>

- a) Các số thỏa mãn là $100; 101; 102; \dots; 209.$
  - Đây là dãy số cách đều 1 đơn vị.
  - Số các số là: $(209 - 100) : 1 + 1 = 110$ (số).
- b) Các số tự nhiên có ba chữ số là từ $100$ đến $999$:
  - Số các số là: $(999 - 100) : 1 + 1 = 900$ (số).

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Số liền trước của số 1000 là số nào?'
options:
  - '1001'
  - '999'
  - '990'
  - '900'
answer: 2
explanation: 'Số liền trước của 1000 là 1000 - 1 = 999.'
```

```quiz
type: choice
question: 'Tập hợp $A = \{x \in \mathbb{N} \mid 10 \le x \le 15\}$ có bao nhiêu phần tử?'
options:
  - '5 phần tử'
  - '6 phần tử'
  - '7 phần tử'
  - '4 phần tử'
answer: 2
explanation: 'A = {10; 11; 12; 13; 14; 15}. Số phần tử là (15 - 10) + 1 = 6 phần tử.'
```

```quiz
type: choice
question: 'Cho ba số a, b, c thỏa mãn a < 15 và 15 < b. Khẳng định nào sau đây chắc chắn ĐÚNG?'
options:
  - 'a > b'
  - 'a = b'
  - 'a < b'
  - 'b < 15'
answer: 3
explanation: 'Theo tính chất bắc cầu: a < 15 và 15 < b suy ra a < b.'
```

```quiz
type: choice
question: 'Tổng của ba số tự nhiên liên tiếp là 60. Số lớn nhất trong ba số đó là:'
options:
  - '19'
  - '20'
  - '21'
  - '22'
answer: 3
explanation: 'Số ở giữa là 60 : 3 = 20. Ba số đó là 19; 20; 21. Số lớn nhất là 21.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Tìm số liền trước và số liền sau của mỗi số sau: $45$; $199.$

<details>
<summary>Xem lời giải Câu 1</summary>

- Số $45$: số liền trước là $44$, số liền sau là $46.$
- Số $199$: số liền trước là $198$, số liền sau là $200.$

</details>

**Câu 2.** Điền vào chỗ trống để ba số ở mỗi dòng sau là ba số tự nhiên liên tiếp theo thứ tự từ bé đến lớn:
- a) $79;\ \dots;\ \dots$
- b) $\dots;\ 500;\ \dots$
- c) $\dots;\ \dots;\ 10\ 000.$

<details>
<summary>Xem lời giải Câu 2</summary>

- a) $79;\ 80;\ 81$
- b) $499;\ 500;\ 501$
- c) $9998;\ 9999;\ 10\ 000$

</details>

**Câu 3.** So sánh hai số trong mỗi trường hợp sau:
- a) $8999$ và $9000.$
- b) $12\ 345$ và $12\ 354.$

<details>
<summary>Xem lời giải Câu 3</summary>

- a) $8999 < 9000$ (hàng nghìn có $8 < 9$).
- b) $12\ 345 < 12\ 354$ (hàng chục có $4 < 5$).

</details>

**Câu 4.** Sắp xếp các số $2022$; $2202$; $2220$; $2020$ theo thứ tự giảm dần.

<details>
<summary>Xem lời giải Câu 4</summary>

Thứ tự giảm dần:
$$2220;\ 2202;\ 2022;\ 2020$$

</details>

**Câu 5.** Vẽ tia số từ 0 đến 8 rồi biểu diễn các số $1; 4; 7$ trên tia số đó.

<details>
<summary>Xem lời giải và hình vẽ Câu 5</summary>

<div style="display:flex; justify-content:center; margin:12px 0;">
  <svg width="380" height="70" viewBox="0 0 380 70" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="355" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="365,35 350,30 350,40" fill="#334155"/>
    <!-- vạch 0 at x=30, step=38 -->
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="12" text-anchor="middle">0</text>
    <!-- 1 -->
    <circle cx="68" cy="35" r="4" fill="#2563eb"/><text x="68" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">1</text>
    <line x1="106" y1="30" x2="106" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="106" y="58" font-size="12" text-anchor="middle">2</text>
    <line x1="144" y1="30" x2="144" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="144" y="58" font-size="12" text-anchor="middle">3</text>
    <!-- 4 -->
    <circle cx="182" cy="35" r="4" fill="#2563eb"/><text x="182" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
    <line x1="220" y1="30" x2="220" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="220" y="58" font-size="12" text-anchor="middle">5</text>
    <line x1="258" y1="30" x2="258" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="258" y="58" font-size="12" text-anchor="middle">6</text>
    <!-- 7 -->
    <circle cx="296" cy="35" r="4" fill="#2563eb"/><text x="296" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">7</text>
    <line x1="334" y1="28" x2="334" y2="42" stroke="#334155" stroke-width="2"/><text x="334" y="58" font-size="12" text-anchor="middle">8</text>
  </svg>
</div>

</details>

**Câu 6.** Trong các số $5; 12; 17; 20; 23; 31$:
- Số nào thuộc tập hợp $A = \{x \in \mathbb{N} \mid x \ge 20\}$?
- Số nào thuộc tập hợp $B = \{x \in \mathbb{N} \mid x < 20\}$?

<details>
<summary>Xem lời giải Câu 6</summary>

- Các số thuộc tập hợp $A$ ($x \ge 20$, có lấy 20): **$20;\ 23;\ 31$**.
- Các số thuộc tập hợp $B$ ($x < 20$, không lấy 20): **$5;\ 12;\ 17$**.

</details>

**Câu 7.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 8 < x \le 13\}$
- b) $B = \{x \in \mathbb{N} \mid 40 \le x \le 45\}$
- c) $C = \{x \in \mathbb{N}^* \mid x \le 3\}$

<details>
<summary>Xem lời giải Câu 7</summary>

- a) $A = \{9; 10; 11; 12; 13\}.$
- b) $B = \{40; 41; 42; 43; 44; 45\}.$
- c) $C = \{1; 2; 3\}.$

</details>

**Câu 8.** Tìm ba số tự nhiên liên tiếp có tổng bằng $60.$

<details>
<summary>Xem lời giải Câu 8</summary>

- Số ở giữa là: $60 : 3 = 20.$
- Số liền trước là $19$, số liền sau là $21.$
- Vậy ba số cần tìm là **$19;\ 20;\ 21$**. Thử lại: $19 + 20 + 21 = 60$ (đúng).

</details>

**Câu 9.**
- a) Cho hai số tự nhiên $a$ và $b$, biết $a < 25$ và $25 < b.$ Hãy so sánh $a$ với $b.$
- b) Tìm tất cả các số tự nhiên $x$ thoả mãn $11 < x < 15.$

<details>
<summary>Xem lời giải Câu 9</summary>

- a) Theo tính chất bắc cầu: $a < 25$ và $25 < b \implies \mathbf{a < b}.$
- b) Các số tự nhiên lớn hơn 11 và nhỏ hơn 15 là: **$12;\ 13;\ 14$**.

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Tính chất bắc cầu trong đời sống).**
Bốn bạn An, Bình, Cường, Dũng có số viên bi khác nhau. Biết rằng:
- An có nhiều bi hơn Bình.
- Bình có nhiều bi hơn Dũng.
- Cường có ít bi hơn Dũng.

Hãy sắp xếp tên bốn bạn theo thứ tự số bi từ ít đến nhiều.

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

Kí hiệu số bi của mỗi bạn bằng tên của bạn đó:
- Đề bài cho:
  $$\text{An} > \text{Bình}$$
  $$\text{Bình} > \text{Dũng} \iff \text{Dũng} < \text{Bình}$$
  $$\text{Cường} < \text{Dũng}$$
- Kết hợp $\text{Cường} < \text{Dũng}$ và $\text{Dũng} < \text{Bình} < \text{An}$ theo tính chất bắc cầu, ta có:
  $$\text{Cường} < \text{Dũng} < \text{Bình} < \text{An}$$
- Vậy thứ tự số bi từ ít đến nhiều là: **Cường, Dũng, Bình, An**.

</details>

**Bài 2.** Dùng ba chữ số $1; 2; 3$ (mỗi chữ số viết đúng một lần), hãy viết tất cả các số tự nhiên có ba chữ số. Sau đó sắp xếp các số viết được theo thứ tự tăng dần.

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

Lần lượt cố định chữ số hàng trăm:
- Hàng trăm là 1: lập được $123;\ 132.$
- Hàng trăm là 2: lập được $213;\ 231.$
- Hàng trăm là 3: lập được $312;\ 321.$

Tổng cộng lập được 6 số. Sắp xếp theo thứ tự tăng dần:
$$123 < 132 < 213 < 231 < 312 < 321$$

</details>

**Bài 3 (Quy tắc đếm số lượng số tự nhiên).**
- a) Có bao nhiêu số tự nhiên có ba chữ số?
- b) Có bao nhiêu số tự nhiên chẵn có ba chữ số?
- c) Có bao nhiêu số tự nhiên có ba chữ số mà chữ số hàng chục bằng 5?

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

- a) Số tự nhiên có 3 chữ số là từ $100$ đến $999$:
  $$(999 - 100) : 1 + 1 = 900 \text{ (số)}$$
- b) Các số chẵn có 3 chữ số là $100; 102; 104; \dots; 998$ (cách đều 2 đơn vị):
  $$(998 - 100) : 2 + 1 = 449 + 1 = 450 \text{ (số)}$$
- c) Các số có dạng $\overline{a5c}$:
  - Chữ số hàng trăm $a$ có 9 cách chọn ($1$ đến $9$).
  - Chữ số hàng chục cố định là 5 ($1$ cách chọn).
  - Chữ số hàng đơn vị $c$ có 10 cách chọn ($0$ đến $9$).
  - Số các số thỏa mãn là: $9 \times 1 \times 10 = \mathbf{90}$ (số).
  - *(Chẳng hạn với $a = 1$: $150; 151; \dots; 159$ gồm 10 số).*

</details>

**Bài 4 (Quy luật dãy số cách đều).**
Cho dãy số: $7;\ 10;\ 13;\ \dots;\ 97;\ 100$ (kể từ số thứ hai, mỗi số bằng số đứng ngay trước nó cộng thêm 3 đơn vị).
- a) Dãy số trên có bao nhiêu số?
- b) Số thứ 22 của dãy là số nào?
- c) Nếu viết tiếp dãy số trên mãi mãi thì số $2026$ có thuộc dãy đó không? Nếu có thì nó là số thứ mấy?

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- a) Đây là dãy số cách đều 3 đơn vị: số đầu là 7, số cuối là 100.
  - Số lượng các số của dãy là:
    $$(100 - 7) : 3 + 1 = 31 + 1 = 32 \text{ (số)}$$
- b) Nhận xét công thức của số hạng thứ $n$:
  - Số thứ nhất: $7 = 7 + 3 \times 0.$
  - Số thứ hai: $10 = 7 + 3 \times 1.$
  - Số thứ $n$: có dạng $7 + 3 \times (n - 1).$
  - Vậy số thứ 22 của dãy là:
    $$7 + 3 \times (22 - 1) = 7 + 3 \times 21 = 7 + 63 = \mathbf{70}$$
- c) Giả sử số $2026$ là số thứ $n$ của dãy:
  $$7 + 3 \times (n - 1) = 2026$$
  $$3 \times (n - 1) = 2026 - 7 = 2019$$
  $$n - 1 = 2019 : 3 = 673 \implies n = 674$$
  - Vì $n = 674$ là số tự nhiên nên **số 2026 có thuộc dãy** và là **số thứ 674**.
  - **Thử lại:** $7 + 3 \times (674 - 1) = 7 + 3 \times 673 = 7 + 2019 = 2026$ (hoàn toàn chính xác).

</details>
