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
- a) Đọc số $5\ 406\ 283.$
- b) Viết số "ba mươi tư nghìn không trăm năm mươi" bằng chữ số.

<details>
<summary>Xem đáp án Câu 1</summary>

- a) $5\ 406\ 283$ đọc là: **Năm triệu bốn trăm linh sáu nghìn hai trăm tám mươi ba**.
- b) Viết bằng chữ số: **$34\ 050$**.

</details>

**Câu 2.** Viết tập hợp các chữ số của số $2035.$

<details>
<summary>Xem đáp án Câu 2</summary>

Số $2035$ gồm các chữ số $2; 0; 3; 5.$ Vì mỗi phần tử trong tập hợp chỉ được viết một lần duy nhất nên tập hợp các chữ số là:
$$\{0; 2; 3; 5\}$$

</details>

**Câu 3.** Trong mỗi số $1\ 526$; $50\ 784$; $5\ 810\ 327$, chữ số 5 có giá trị là bao nhiêu?

```quiz
type: choice
question: 'Trong số $50\ 784$, chữ số 5 nằm ở hàng nào và có giá trị bao nhiêu?'
options:
  - 'Hàng nghìn, giá trị 5000'
  - 'Hàng chục nghìn, giá trị 50 000'
  - 'Hàng trăm, giá trị 500'
  - 'Hàng trăm nghìn, giá trị 500 000'
answer: 2
explanation: 'Đếm các hàng từ phải sang trái: 4 (đơn vị), 8 (chục), 7 (trăm), 0 (nghìn), 5 (chục nghìn). Do đó chữ số 5 ở hàng chục nghìn và có giá trị bằng 50 000.'
```

<details>
<summary>Xem lời giải đầy đủ Câu 3</summary>

- Trong số $1\ 526$: chữ số 5 ở hàng trăm $\implies$ giá trị là **$500$**.
- Trong số $50\ 784$: chữ số 5 ở hàng chục nghìn $\implies$ giá trị là **$50\ 000$**.
- Trong số $5\ 810\ 327$: chữ số 5 ở hàng triệu $\implies$ giá trị là **$5\ 000\ 000$**.

</details>

**Câu 4.** Dùng bốn chữ số $0; 2; 5; 8$ (mỗi chữ số viết một lần), hãy viết số lớn nhất và số nhỏ nhất có bốn chữ số.

<details>
<summary>Xem đáp án Câu 4</summary>

- **Số lớn nhất:** Xếp các chữ số theo thứ tự giảm dần: $8; 5; 2; 0 \implies \mathbf{8520}.$
- **Số nhỏ nhất:** Chữ số đầu tiên phải khác 0 nên chọn 2, sau đó xếp các chữ số còn lại theo thứ tự tăng dần: $0; 5; 8 \implies \mathbf{2058}.$

</details>

**Câu 5.**
- a) Đọc các số La Mã: $\text{XVIII}$; $\text{XXIV}.$
- b) Viết các số $14$; $29$ bằng chữ số La Mã.

<details>
<summary>Xem đáp án Câu 5</summary>

- a) $\text{XVIII} = 10 + 5 + 3 = 18$; $\text{XXIV} = 20 + 4 = 24.$
- b) $14 = \text{XIV}$; $29 = \text{XXIX}.$

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
    <!-- Vạch chia từ 0 đến 9 -->
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

> **Ví dụ 1.** Hãy biểu diễn hai số $4$ và $8$ trên tia số, rồi cho biết trong hai số đó số nào lớn hơn.

<details>
<summary>Xem lời giải và hình vẽ Ví dụ 1</summary>

Vẽ tia số và chấm đậm hai điểm ứng với số 4 và số 8:

<div style="display:flex; justify-content:center; margin:12px 0;">
  <svg width="420" height="70" viewBox="0 0 420 70" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="395" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="405,35 390,30 390,40" fill="#334155"/>
    <line x1="30" y1="30" x2="30" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="30" y="58" font-size="12" text-anchor="middle" fill="#64748b">0</text>
    <line x1="66" y1="30" x2="66" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="66" y="58" font-size="12" text-anchor="middle" fill="#64748b">1</text>
    <line x1="102" y1="30" x2="102" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="102" y="58" font-size="12" text-anchor="middle" fill="#64748b">2</text>
    <line x1="138" y1="30" x2="138" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="138" y="58" font-size="12" text-anchor="middle" fill="#64748b">3</text>
    <!-- Điểm 4 -->
    <circle cx="174" cy="35" r="4.5" fill="#2563eb"/>
    <line x1="174" y1="24" x2="174" y2="46" stroke="#2563eb" stroke-width="2.5"/><text x="174" y="59" font-size="14" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
    <line x1="210" y1="30" x2="210" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="210" y="58" font-size="12" text-anchor="middle" fill="#64748b">5</text>
    <line x1="246" y1="30" x2="246" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="246" y="58" font-size="12" text-anchor="middle" fill="#64748b">6</text>
    <line x1="282" y1="30" x2="282" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="282" y="58" font-size="12" text-anchor="middle" fill="#64748b">7</text>
    <!-- Điểm 8 -->
    <circle cx="318" cy="35" r="4.5" fill="#16a34a"/>
    <line x1="318" y1="24" x2="318" y2="46" stroke="#16a34a" stroke-width="2.5"/><text x="318" y="59" font-size="14" font-weight="bold" text-anchor="middle" fill="#15803d">8</text>
    <line x1="354" y1="30" x2="354" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="354" y="58" font-size="12" text-anchor="middle" fill="#64748b">9</text>
  </svg>
</div>

Trên tia số, điểm 4 nằm ở bên trái điểm 8, nên $4 < 8.$ Vậy số **8 lớn hơn**.

</details>

---

### 2. Số liền trước — Số liền sau — Hai số tự nhiên liên tiếp

- **Số liền sau:** Số liền sau của một số tự nhiên $a$ bằng số đó cộng thêm 1: $a + 1.$
  $$\text{Ví dụ: Số liền sau của } 12 \text{ là } 13.$$
- **Số liền trước:** Số liền trước của một số tự nhiên $a$ (với $a \ne 0$) bằng số đó bớt đi 1: $a - 1.$
  $$\text{Ví dụ: Số liền trước của } 13 \text{ là } 12.$$
- **Hai số tự nhiên liên tiếp:** Hai số tự nhiên liên tiếp thì hơn kém nhau đúng **1 đơn vị**. Nếu gọi số bé là $n$ thì số liền sau là $n + 1.$
- **Đặc điểm tập hợp $\mathbb{N}$:**
  - Số **0 là số tự nhiên nhỏ nhất** và **không có số liền trước**.
  - Tập hợp $\mathbb{N}$ **không có số tự nhiên lớn nhất**, vì bất kì số tự nhiên nào cũng luôn có một số liền sau lớn hơn nó.

> **Ví dụ 2.** Tìm số liền trước và số liền sau của hai số $135$ và $142.$ Sắp xếp sáu số đó (tính cả $135$ và $142$) theo thứ tự từ bé đến lớn.

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- Xét số $135$:
  - Số liền trước của $135$ là: $135 - 1 = 134.$
  - Số liền sau của $135$ là: $135 + 1 = 136.$
- Xét số $142$:
  - Số liền trước của $142$ là: $142 - 1 = 141.$
  - Số liền sau của $142$ là: $142 + 1 = 143.$
- Sắp xếp 6 số từ bé đến lớn:
  $$134;\ 135;\ 136;\ 141;\ 142;\ 143$$

</details>

---

### 3. So sánh hai số tự nhiên

Với hai số tự nhiên $a$ và $b$ bất kì, luôn xảy ra đúng một trong ba trường hợp: $a < b$, hoặc $a = b$, hoặc $a > b.$

#### a) Các bước so sánh hai số tự nhiên
1. **Bước 1 (So sánh số lượng chữ số):** Số nào có **nhiều chữ số hơn** thì số đó **lớn hơn**.
   $$\text{Ví dụ: } 10\ 005 > 8764 \quad (\text{vì 5 chữ số} > \text{4 chữ số})$$
2. **Bước 2 (Khi có cùng số lượng chữ số):** So sánh từng cặp chữ số ở cùng một hàng kể từ trái sang phải. Đến cặp chữ số đầu tiên khác nhau, chữ số nào lớn hơn thì số chứa nó sẽ lớn hơn.
   $$\text{Ví dụ: } 4392 > 4329 \quad (\text{chữ số hàng chục: } 9 > 2)$$

#### b) Các kí hiệu so sánh mở rộng
- Kí hiệu $a \le b$: đọc là "*$a$ nhỏ hơn hoặc bằng $b$*", nghĩa là $a < b$ hoặc $a = b.$
- Kí hiệu $a \ge b$: đọc là "*$a$ lớn hơn hoặc bằng $b$*", nghĩa là $a > b$ hoặc $a = b.$

#### c) Tính chất bắc cầu
$$\text{Nếu } a < b \text{ và } b < c \implies a < c$$
$$\text{Nếu } a > b \text{ và } b > c \implies a > c$$

> **Ví dụ 3.**
> - a) So sánh: $8764$ và $10\ 005$; $4329$ và $4392.$
> - b) Liệt kê các phần tử của tập hợp $B = \{x \in \mathbb{N} \mid 6 < x \le 11\}.$

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) **So sánh:**
  - $8764$ có 4 chữ số, còn $10\ 005$ có 5 chữ số $\implies 8764 < 10\ 005.$
  - $4329$ và $4392$ cùng có 4 chữ số: hàng nghìn đều là 4, hàng trăm đều là 3, hàng chục có $2 < 9 \implies 4329 < 4392.$
- b) **Liệt kê tập hợp $B$:**
  - Điều kiện $6 < x \le 11$ nghĩa là $x$ lớn hơn 6 (không lấy số 6) và $x$ nhỏ hơn hoặc bằng 11 (có lấy số 11).
  - Vậy $B = \{7; 8; 9; 10; 11\}.$

</details>

---

### 4. Bốn điều chú ý rất dễ nhầm lẫn

1. **Phân biệt dấu $<$ với $\le$:**
   - Với điều kiện $x < 12$: **không lấy** số 12 ($x \in \{0; 1; \dots; 11\}$).
   - Với điều kiện $x \le 12$: **có lấy** số 12 ($x \in \{0; 1; \dots; 12\}$).
2. **Số 0 không có số liền trước:**
   - Trong tập hợp số tự nhiên $\mathbb{N}$, số 0 là số bé nhất và không có số liền trước. Tránh viết "số liền trước của 0 là $-1$" vì $-1$ không thuộc $\mathbb{N}.$
3. **Hai số tự nhiên liên tiếp:**
   - Phải hơn kém nhau đúng **1 đơn vị**. Hai số $16$ và $18$ hơn kém nhau 2 đơn vị nên không phải là hai số liên tiếp.
4. **Phân biệt "số liền sau" và "số lớn hơn":**
   - Số liền sau của $7$ chỉ có **duy nhất một số là 8**.
   - Còn các số lớn hơn $7$ thì có **vô số** ($8; 9; 10; 11; \dots$).

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Số liền trước, số liền sau, số tự nhiên liên tiếp

**Phương pháp giải:**
- Số liền sau $= \text{Số đã cho} + 1.$
- Số liền trước $= \text{Số đã cho} - 1$ (số 0 không có số liền trước).
- Ba số tự nhiên liên tiếp tăng dần có dạng: $n - 1;\ n;\ n + 1$ hoặc $n;\ n + 1;\ n + 2.$
- **Mẹo giải nhanh:** Tổng của 3 số tự nhiên liên tiếp luôn bằng **3 lần số ở giữa**.

**Luyện tập 1.1.** Tìm số liền trước và số liền sau của hai số $300$ và $294.$ Sắp xếp sáu số đó (tính cả $300$ và $294$) theo thứ tự từ lớn đến bé.

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- Xét số $300$: số liền trước là $299$, số liền sau là $301.$
- Xét số $294$: số liền trước là $293$, số liền sau là $295.$
- Xếp 6 số từ lớn đến bé:
  $$301;\ 300;\ 299;\ 295;\ 294;\ 293$$

</details>

**Luyện tập 1.2.** Điền vào chỗ trống để mỗi dòng sau là ba số tự nhiên liên tiếp xếp từ lớn đến bé:
- a) $30;\ \dots;\ \dots$
- b) $\dots;\ 300;\ \dots$
- c) $\dots;\ \dots;\ 3000.$

<details>
<summary>Xem lời giải Luyện tập 1.2</summary>

Vì xếp từ lớn đến bé nên mỗi số sau bằng số đứng trước bớt đi 1 đơn vị:
- a) $30;\ 29;\ 28$
- b) $301;\ 300;\ 299$
- c) $3002;\ 3001;\ 3000$

</details>

**Luyện tập 1.3.** Tìm ba số tự nhiên liên tiếp có tổng bằng $42.$

```quiz
type: choice
question: 'Ba số tự nhiên liên tiếp có tổng bằng 42 là:'
options:
  - '12; 13; 14'
  - '13; 14; 15'
  - '14; 15; 16'
  - '11; 14; 17'
answer: 2
explanation: 'Tổng của ba số tự nhiên liên tiếp bằng 3 lần số ở giữa. Do đó số ở giữa là 42 : 3 = 14. Ba số đó là 13; 14; 15.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 1.3</summary>

- Gọi ba số tự nhiên liên tiếp là $n - 1,\ n,\ n + 1$ với $n$ là số ở giữa.
- Tổng của ba số là: $(n - 1) + n + (n + 1) = 3n = 42 \implies n = 42 : 3 = 14.$
- Vậy ba số cần tìm là: **$13;\ 14;\ 15$**.
- Thử lại: $13 + 14 + 15 = 42$ (chính xác).

</details>

---

### Dạng 2. So sánh, sắp xếp thứ tự các số tự nhiên; tia số

**Phương pháp giải:**
- So sánh: Đếm số lượng chữ số trước; nếu bằng nhau thì so sánh các chữ số cùng hàng từ trái sang phải.
- Tia số: Số bên trái nhỏ hơn số bên phải.
- Bắc cầu: $x < a$ và $a < y \implies x < y.$

**Luyện tập 2.1.** Điền dấu thích hợp ($<, >$ hoặc $=$) vào chỗ chấm:
$$2345 \dots 998;\quad 6089 \dots 6098;\quad 30\ 000 \dots 29\ 999;\quad 408 \dots 408$$

<details>
<summary>Xem lời giải Luyện tập 2.1</summary>

- $2345 > 998$ (4 chữ số $> 3$ chữ số).
- $6089 < 6098$ (cùng 4 chữ số, hàng chục có $8 < 9$).
- $30\ 000 > 29\ 999$ (hàng chục nghìn có $3 > 2$).
- $408 = 408.$

</details>

**Luyện tập 2.2.** Cho các số: $8032$; $7986$; $8023$; $10\ 000$; $998.$
- a) Sắp xếp các số đó theo thứ tự tăng dần.
- b) Sắp xếp các số đó theo thứ tự giảm dần.

<details>
<summary>Xem lời giải Luyện tập 2.2</summary>

- a) **Thứ tự tăng dần (từ bé đến lớn):**
  $$998;\ 7986;\ 8023;\ 8032;\ 10\ 000$$
- b) **Thứ tự giảm dần (từ lớn đến bé):**
  $$10\ 000;\ 8032;\ 8023;\ 7986;\ 998$$

</details>

**Luyện tập 2.3.**
- a) Vẽ tia số từ 0 đến 10 rồi biểu diễn các số $3; 6; 8.$ Trong ba số đó, số nào nằm bên trái nhất?
- b) Cho hai số tự nhiên $x$ và $y$, biết $x < 9$ và $9 < y.$ Hãy so sánh $x$ với $y.$

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

- a) Biểu diễn trên tia số:
  - Điểm ứng với số 3 nằm bên trái nhất $\implies$ số **3 là số nhỏ nhất** trong ba số.
- b) Theo tính chất bắc cầu: vì $x < 9$ và $9 < y$ nên ta có **$x < y$**.

</details>

---

### Dạng 3. Liệt kê phần tử của tập hợp cho bởi điều kiện $<, \le, >, \ge$

**Phương pháp giải:**
- Đọc kĩ điều kiện:
  - Nếu gặp dấu $<$ hoặc $>$: không lấy số ở mép.
  - Nếu gặp dấu $\le$ hoặc $\ge$: có lấy số ở mép.
  - Nếu là $x \in \mathbb{N}^*$: chỉ lấy các số tự nhiên khác 0.

**Luyện tập 3.1.** Trong các số $12; 16; 19; 22; 29; 31$:
- Số nào thuộc tập hợp $A = \{x \in \mathbb{N} \mid x > 21\}$?
- Số nào thuộc tập hợp $B = \{x \in \mathbb{N} \mid x \le 22\}$?

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- Tập hợp $A$ gồm các số lớn hơn 21 (không lấy 21): các số thuộc $A$ là **$22;\ 29;\ 31$**.
- Tập hợp $B$ gồm các số nhỏ hơn hoặc bằng 22 (có lấy 22): các số thuộc $B$ là **$12;\ 16;\ 19;\ 22$**.

</details>

**Luyện tập 3.2.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 14 < x < 21\}$
- b) $B = \{x \in \mathbb{N} \mid 35 \le x < 40\}$
- c) $C = \{x \in \mathbb{N}^* \mid x \le 5\}$
- d) $D = \{x \in \mathbb{N} \mid 200 \le x \le 205\}$

<details>
<summary>Xem lời giải Luyện tập 3.2</summary>

- a) $A = \{15; 16; 17; 18; 19; 20\}$
- b) $B = \{35; 36; 37; 38; 39\}$
- c) $C = \{1; 2; 3; 4; 5\}$ (chú ý $x \in \mathbb{N}^*$ nên không có số 0)
- d) $D = \{200; 201; 202; 203; 204; 205\}$

</details>

**Luyện tập 3.3.**
- a) Liệt kê các phần tử của tập hợp $M = \{x \in \mathbb{N} \mid 38 \le x < 43\}.$
- b) Cho hai tập hợp $P = \{x \in \mathbb{N} \mid x \le 5\}$ và $Q = \{x \in \mathbb{N}^* \mid x < 6\}.$ Hai tập hợp $P$ và $Q$ có bằng nhau không? Vì sao?

```quiz
type: choice
question: 'Hai tập hợp $P = \{x \in \mathbb{N} \mid x \le 5\}$ và $Q = \{x \in \mathbb{N}^* \mid x < 6\}$ có bằng nhau không?'
options:
  - 'Có bằng nhau, vì cùng có 5 phần tử'
  - 'Không bằng nhau, vì tập P có thêm phần tử 0'
  - 'Có bằng nhau, vì các phần tử đều nhỏ hơn 6'
  - 'Không bằng nhau, vì tập Q có nhiều phần tử hơn'
answer: 2
explanation: 'P = {0; 1; 2; 3; 4; 5} (gồm 6 phần tử), trong khi Q = {1; 2; 3; 4; 5} (do x thuộc N* nên không có số 0). Do đó hai tập hợp này không bằng nhau.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 3.3</summary>

- a) $M = \{38; 39; 40; 41; 42\}.$
- b) Liệt kê từng tập hợp:
  - $P = \{0; 1; 2; 3; 4; 5\}$ (vì $x \in \mathbb{N}$ nên có lấy số 0).
  - $Q = \{1; 2; 3; 4; 5\}$ (vì $x \in \mathbb{N}^*$ nên không có số 0).
  - Vậy hai tập hợp $P$ và $Q$ **không bằng nhau** vì tập hợp $P$ chứa phần tử $0$ mà tập hợp $Q$ không có.

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Tìm số liền trước và số liền sau của mỗi số sau: $199$; $2000$; $2027.$

<details>
<summary>Xem lời giải Bài 1</summary>

- Số $199$: số liền trước là $198$, số liền sau là $200.$
- Số $2000$: số liền trước là $1999$, số liền sau là $2001.$
- Số $2027$: số liền trước là $2026$, số liền sau là $2028.$

</details>

**Bài 2.** Điền dấu thích hợp ($<, >$ hoặc $=$) vào chỗ chấm:
$$2001 \dots 1999;\quad 5689 \dots 5698;\quad 40\ 000 \dots 4000;\quad 2028 \dots 2028$$

<details>
<summary>Xem lời giải Bài 2</summary>

- $2001 > 1999$
- $5689 < 5698$
- $40\ 000 > 4000$
- $2028 = 2028$

</details>

**Bài 3.** Cho tia số dưới đây (các vạch chia cách đều nhau):

<div style="display:flex; justify-content:center; margin:16px 0;">
  <svg width="460" height="75" viewBox="0 0 460 75" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="435" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="445,35 430,30 430,40" fill="#334155"/>
    <!-- 0 -->
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="12" text-anchor="middle">0</text>
    <!-- 1 -->
    <line x1="60" y1="30" x2="60" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 2 -->
    <line x1="90" y1="30" x2="90" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 3: A -->
    <circle cx="120" cy="35" r="4" fill="#2563eb"/><text x="120" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">A</text>
    <!-- 4 -->
    <line x1="150" y1="28" x2="150" y2="42" stroke="#334155" stroke-width="2"/><text x="150" y="58" font-size="12" text-anchor="middle">4</text>
    <!-- 5 -->
    <line x1="180" y1="30" x2="180" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 6: B -->
    <circle cx="210" cy="35" r="4" fill="#2563eb"/><text x="210" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">B</text>
    <!-- 7 -->
    <line x1="240" y1="30" x2="240" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 8 -->
    <line x1="270" y1="28" x2="270" y2="42" stroke="#334155" stroke-width="2"/><text x="270" y="58" font-size="12" text-anchor="middle">8</text>
    <!-- 9 -->
    <line x1="300" y1="30" x2="300" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 10: C -->
    <circle cx="330" cy="35" r="4" fill="#2563eb"/><text x="330" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">C</text>
    <!-- 11 -->
    <line x1="360" y1="30" x2="360" y2="40" stroke="#94a3b8" stroke-width="1"/>
    <!-- 12 -->
    <line x1="390" y1="28" x2="390" y2="42" stroke="#334155" stroke-width="2"/><text x="390" y="58" font-size="12" text-anchor="middle">12</text>
    <!-- 13: D -->
    <circle cx="420" cy="35" r="4" fill="#2563eb"/><text x="420" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">D</text>
  </svg>
</div>

- a) Mỗi điểm $A, B, C, D$ ứng với số tự nhiên nào?
- b) Trong bốn số đó, số nào lớn nhất, số nào nhỏ nhất?

<details>
<summary>Xem lời giải Bài 3</summary>

- a) Đếm lần lượt các vạch chia cách đều từ vạch số 0:
  - Điểm $A$ ứng với số **$3$**.
  - Điểm $B$ ứng với số **$6$**.
  - Điểm $C$ ứng với số **$10$**.
  - Điểm $D$ ứng với số **$13$**.
- b) So sánh thứ tự trên tia số:
  - Số lớn nhất là **$13$** (ứng với điểm $D$ nằm xa nhất về bên phải).
  - Số nhỏ nhất là **$3$** (ứng với điểm $A$ nằm gần nhất về bên trái).

</details>

**Bài 4.**
- a) Viết ba số tự nhiên liên tiếp, trong đó số lớn nhất là $200.$
- b) Viết ba số tự nhiên liên tiếp, trong đó số bé nhất là $2025.$

<details>
<summary>Xem lời giải Bài 4</summary>

- a) Số lớn nhất là 200, hai số liền trước lần lượt là 199 và 198: **$198;\ 199;\ 200$**.
- b) Số bé nhất là 2025, hai số liền sau lần lượt là 2026 và 2027: **$2025;\ 2026;\ 2027$**.

</details>

**Bài 5.** Sắp xếp các số $8032$; $998$; $8023$; $10\ 000$; $7986$; $8320$ theo thứ tự tăng dần.

<details>
<summary>Xem lời giải Bài 5</summary>

- Số có 3 chữ số: $998$ (nhỏ nhất).
- Các số có 4 chữ số: $7986 < 8023 < 8032 < 8320.$
- Số có 5 chữ số: $10\ 000$ (lớn nhất).
- **Thứ tự tăng dần:**
  $$998;\ 7986;\ 8023;\ 8032;\ 8320;\ 10\ 000$$

</details>

**Bài 6.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 18 < x \le 23\}$
- b) $B = \{x \in \mathbb{N}^* \mid x < 5\}$
- c) $C = \{x \in \mathbb{N} \mid 45 \le x < 49\}$

<details>
<summary>Xem lời giải Bài 6</summary>

- a) $A = \{19; 20; 21; 22; 23\}.$
- b) $B = \{1; 2; 3; 4\}$ (vì $x \in \mathbb{N}^*$ nên không lấy số 0).
- c) $C = \{45; 46; 47; 48\}.$

</details>

**Bài 7.** Tìm số tự nhiên $x$, biết:
- a) $x$ là số liền sau của số $2026.$
- b) $x$ là số liền trước của số $2000.$
- c) $x$ vừa lớn hơn $8$ vừa nhỏ hơn $10.$

<details>
<summary>Xem lời giải Bài 7</summary>

- a) $x = 2026 + 1 = 2027.$
- b) $x = 2000 - 1 = 1999.$
- c) $8 < x < 10 \implies x = 9.$

</details>

**Bài 8.** Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Số liền trước của số 1 trong $\mathbb{N}$ là số 0.
- b) Tập hợp $\{x \in \mathbb{N} \mid x \le 6\}$ có 6 phần tử.
- c) Trong tập hợp $\mathbb{N}^*$ có số nhỏ nhất là số 0.
- d) Hai số $20$ và $22$ là hai số tự nhiên liên tiếp.

<details>
<summary>Xem lời giải Bài 8</summary>

- a) **Đúng**, vì trong $\mathbb{N}$, $1 - 1 = 0.$
- b) **Sai**, vì tập hợp này gồm các phần tử $\{0; 1; 2; 3; 4; 5; 6\}$, có tổng cộng **7 phần tử** (bao gồm số 0).
- c) **Sai**, vì tập hợp $\mathbb{N}^*$ chỉ chứa các số tự nhiên khác 0 nên số nhỏ nhất là 1.
- d) **Sai**, vì hai số tự nhiên liên tiếp phải hơn kém nhau 1 đơn vị, trong khi $22 - 20 = 2.$ Sửa lại: hai số liên tiếp là $20$ và $21$ (hoặc $21$ và $22$).

</details>

**Bài 9.** Tìm hai số tự nhiên liên tiếp có tổng bằng $89.$

<details>
<summary>Xem lời giải Bài 9</summary>

- Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.
- Số bé là: $(89 - 1) : 2 = 44.$
- Số lớn là: $44 + 1 = 45.$
- Vậy hai số cần tìm là **$44$ và $45$**. Thử lại: $44 + 45 = 89$ (đúng).

</details>

**Bài 10.**
- a) Có bao nhiêu số tự nhiên $x$ thoả mãn $200 \le x < 320$?
- b) Có bao nhiêu số tự nhiên có bốn chữ số?

<details>
<summary>Xem lời giải Bài 10</summary>

- a) Các số thỏa mãn là $200; 201; 202; \dots; 319.$
  - Đây là dãy số cách đều 1 đơn vị.
  - Số các số là: $(319 - 200) : 1 + 1 = 120$ (số).
- b) Các số tự nhiên có bốn chữ số là từ $1000$ đến $9999$:
  - Số các số là: $(9999 - 1000) : 1 + 1 = 9000$ (số).

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Số liền trước của số 2000 là số nào?'
options:
  - '2001'
  - '1999'
  - '1990'
  - '1900'
answer: 2
explanation: 'Số liền trước của 2000 là 2000 - 1 = 1999.'
```

```quiz
type: choice
question: 'Tập hợp $A = \{x \in \mathbb{N} \mid 12 \le x \le 18\}$ có bao nhiêu phần tử?'
options:
  - '6 phần tử'
  - '7 phần tử'
  - '8 phần tử'
  - '5 phần tử'
answer: 2
explanation: 'A = {12; 13; 14; 15; 16; 17; 18}. Số phần tử là (18 - 12) + 1 = 7 phần tử.'
```

```quiz
type: choice
question: 'Cho ba số a, b, c thỏa mãn a < 20 và 20 < b. Khẳng định nào sau đây chắc chắn ĐÚNG?'
options:
  - 'a > b'
  - 'a = b'
  - 'a < b'
  - 'b < 20'
answer: 3
explanation: 'Theo tính chất bắc cầu: a < 20 và 20 < b suy ra a < b.'
```

```quiz
type: choice
question: 'Tổng của ba số tự nhiên liên tiếp là 75. Số lớn nhất trong ba số đó là:'
options:
  - '24'
  - '25'
  - '26'
  - '27'
answer: 3
explanation: 'Số ở giữa là 75 : 3 = 25. Ba số đó là 24; 25; 26. Số lớn nhất là 26.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Tìm số liền trước và số liền sau của mỗi số sau: $56$; $299.$

<details>
<summary>Xem lời giải Câu 1</summary>

- Số $56$: số liền trước là $55$, số liền sau là $57.$
- Số $299$: số liền trước là $298$, số liền sau là $300.$

</details>

**Câu 2.** Điền vào chỗ trống để ba số ở mỗi dòng sau là ba số tự nhiên liên tiếp theo thứ tự từ bé đến lớn:
- a) $89;\ \dots;\ \dots$
- b) $\dots;\ 600;\ \dots$
- c) $\dots;\ \dots;\ 20\ 000.$

<details>
<summary>Xem lời giải Câu 2</summary>

- a) $89;\ 90;\ 91$
- b) $599;\ 600;\ 601$
- c) $19\ 998;\ 19\ 999;\ 20\ 000$

</details>

**Câu 3.** So sánh hai số trong mỗi trường hợp sau:
- a) $7999$ và $8000.$
- b) $23\ 456$ và $23\ 465.$

<details>
<summary>Xem lời giải Câu 3</summary>

- a) $7999 < 8000$ (hàng nghìn có $7 < 8$).
- b) $23\ 456 < 23\ 465$ (hàng chục có $5 < 6$).

</details>

**Câu 4.** Sắp xếp các số $3033$; $3303$; $3330$; $3030$ theo thứ tự giảm dần.

<details>
<summary>Xem lời giải Câu 4</summary>

Thứ tự giảm dần:
$$3330;\ 3303;\ 3033;\ 3030$$

</details>

**Câu 5.** Vẽ tia số từ 0 đến 9 rồi biểu diễn các số $2; 5; 8$ trên tia số đó.

<details>
<summary>Xem lời giải và hình vẽ Câu 5</summary>

<div style="display:flex; justify-content:center; margin:12px 0;">
  <svg width="380" height="70" viewBox="0 0 380 70" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="355" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="365,35 350,30 350,40" fill="#334155"/>
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="12" text-anchor="middle">0</text>
    <line x1="66" y1="30" x2="66" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="66" y="58" font-size="12" text-anchor="middle">1</text>
    <!-- 2 -->
    <circle cx="102" cy="35" r="4" fill="#2563eb"/><text x="102" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">2</text>
    <line x1="138" y1="30" x2="138" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="138" y="58" font-size="12" text-anchor="middle">3</text>
    <line x1="174" y1="30" x2="174" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="174" y="58" font-size="12" text-anchor="middle">4</text>
    <!-- 5 -->
    <circle cx="210" cy="35" r="4" fill="#2563eb"/><text x="210" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">5</text>
    <line x1="246" y1="30" x2="246" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="246" y="58" font-size="12" text-anchor="middle">6</text>
    <line x1="282" y1="30" x2="282" y2="40" stroke="#94a3b8" stroke-width="1"/><text x="282" y="58" font-size="12" text-anchor="middle">7</text>
    <!-- 8 -->
    <circle cx="318" cy="35" r="4" fill="#2563eb"/><text x="318" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">8</text>
    <line x1="354" y1="28" x2="354" y2="42" stroke="#334155" stroke-width="2"/><text x="354" y="58" font-size="12" text-anchor="middle">9</text>
  </svg>
</div>

</details>

**Câu 6.** Trong các số $6; 14; 19; 22; 25; 35$:
- Số nào thuộc tập hợp $A = \{x \in \mathbb{N} \mid x \ge 22\}$?
- Số nào thuộc tập hợp $B = \{x \in \mathbb{N} \mid x < 22\}$?

<details>
<summary>Xem lời giải Câu 6</summary>

- Các số thuộc tập hợp $A$ ($x \ge 22$, có lấy 22): **$22;\ 25;\ 35$**.
- Các số thuộc tập hợp $B$ ($x < 22$, không lấy 22): **$6;\ 14;\ 19$**.

</details>

**Câu 7.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 10 < x \le 15\}$
- b) $B = \{x \in \mathbb{N} \mid 50 \le x \le 55\}$
- c) $C = \{x \in \mathbb{N}^* \mid x \le 4\}$

<details>
<summary>Xem lời giải Câu 7</summary>

- a) $A = \{11; 12; 13; 14; 15\}.$
- b) $B = \{50; 51; 52; 53; 54; 55\}.$
- c) $C = \{1; 2; 3; 4\}.$

</details>

**Câu 8.** Tìm ba số tự nhiên liên tiếp có tổng bằng $75.$

<details>
<summary>Xem lời giải Câu 8</summary>

- Số ở giữa là: $75 : 3 = 25.$
- Số liền trước là $24$, số liền sau là $26.$
- Vậy ba số cần tìm là **$24;\ 25;\ 26$**. Thử lại: $24 + 25 + 26 = 75$ (đúng).

</details>

**Câu 9.**
- a) Cho hai số tự nhiên $a$ và $b$, biết $a < 35$ và $35 < b.$ Hãy so sánh $a$ với $b.$
- b) Tìm tất cả các số tự nhiên $x$ thoả mãn $13 < x < 17.$

<details>
<summary>Xem lời giải Câu 9</summary>

- a) Theo tính chất bắc cầu: $a < 35$ và $35 < b \implies \mathbf{a < b}.$
- b) Các số tự nhiên lớn hơn 13 và nhỏ hơn 17 là: **$14;\ 15;\ 16$**.

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Tính chất bắc cầu trong đời sống).**
Bốn bạn Minh, Nam, Phúc, Quân có số nhãn vở khác nhau. Biết rằng:
- Minh có nhiều nhãn vở hơn Nam.
- Nam có nhiều nhãn vở hơn Quân.
- Phúc có ít nhãn vở hơn Quân.

Hãy sắp xếp tên bốn bạn theo thứ tự số nhãn vở từ ít đến nhiều.

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

Kí hiệu số nhãn vở của mỗi bạn bằng tên của bạn đó:
- Đề bài cho:
  $$\text{Minh} > \text{Nam}$$
  $$\text{Nam} > \text{Quân} \iff \text{Quân} < \text{Nam}$$
  $$\text{Phúc} < \text{Quân}$$
- Kết hợp $\text{Phúc} < \text{Quân}$ và $\text{Quân} < \text{Nam} < \text{Minh}$ theo tính chất bắc cầu, ta có:
  $$\text{Phúc} < \text{Quân} < \text{Nam} < \text{Minh}$$
- Vậy thứ tự số nhãn vở từ ít đến nhiều là: **Phúc, Quân, Nam, Minh**.

</details>

**Bài 2.** Dùng ba chữ số $2; 4; 6$ (mỗi chữ số viết đúng một lần), hãy viết tất cả các số tự nhiên có ba chữ số. Sau đó sắp xếp các số viết được theo thứ tự tăng dần.

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

Lần lượt cố định chữ số hàng trăm:
- Hàng trăm là 2: lập được $246;\ 264.$
- Hàng trăm là 4: lập được $426;\ 462.$
- Hàng trăm là 6: lập được $624;\ 642.$

Tổng cộng lập được 6 số. Sắp xếp theo thứ tự tăng dần:
$$246 < 264 < 426 < 462 < 624 < 642$$

</details>

**Bài 3 (Quy tắc đếm số lượng số tự nhiên).**
- a) Có bao nhiêu số tự nhiên có ba chữ số?
- b) Có bao nhiêu số tự nhiên lẻ có ba chữ số?
- c) Có bao nhiêu số tự nhiên có ba chữ số mà chữ số hàng chục bằng 7?

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

- a) Số tự nhiên có 3 chữ số là từ $100$ đến $999$:
  $$(999 - 100) : 1 + 1 = 900 \text{ (số)}$$
- b) Các số lẻ có 3 chữ số là $101; 103; 105; \dots; 999$ (cách đều 2 đơn vị):
  $$(999 - 101) : 2 + 1 = 449 + 1 = 450 \text{ (số)}$$
- c) Các số có dạng $\overline{a7c}$:
  - Chữ số hàng trăm $a$ có 9 cách chọn ($1$ đến $9$).
  - Chữ số hàng chục cố định là 7 ($1$ cách chọn).
  - Chữ số hàng đơn vị $c$ có 10 cách chọn ($0$ đến $9$).
  - Số các số thỏa mãn là: $9 \times 1 \times 10 = \mathbf{90}$ (số).
  - *(Chẳng hạn với $a = 1$: $170; 171; \dots; 179$ gồm 10 số).*

</details>

**Bài 4 (Quy luật dãy số cách đều).**
Cho dãy số: $5;\ 9;\ 13;\ 17;\ \dots;\ 97;\ 101$ (kể từ số thứ hai, mỗi số bằng số đứng ngay trước nó cộng thêm 4 đơn vị).
- a) Dãy số trên có bao nhiêu số?
- b) Số thứ 20 của dãy là số nào?
- c) Nếu viết tiếp dãy số trên mãi mãi thì số $2025$ có thuộc dãy đó không? Nếu có thì nó là số thứ mấy?

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- a) Đây là dãy số cách đều 4 đơn vị: số đầu là 5, số cuối là 101.
  - Số lượng các số của dãy là:
    $$(101 - 5) : 4 + 1 = 24 + 1 = 25 \text{ (số)}$$
- b) Nhận xét công thức của số hạng thứ $n$:
  - Số thứ nhất: $5 = 5 + 4 \times 0.$
  - Số thứ hai: $9 = 5 + 4 \times 1.$
  - Số thứ $n$: có dạng $5 + 4 \times (n - 1).$
  - Vậy số thứ 20 của dãy là:
    $$5 + 4 \times (20 - 1) = 5 + 4 \times 19 = 5 + 76 = \mathbf{81}$$
- c) Giả sử số $2025$ là số thứ $n$ của dãy:
  $$5 + 4 \times (n - 1) = 2025$$
  $$4 \times (n - 1) = 2025 - 5 = 2020$$
  $$n - 1 = 2020 : 4 = 505 \implies n = 506$$
  - Vì $n = 506$ là số tự nhiên nên **số 2025 có thuộc dãy** và là **số thứ 506**.
  - **Thử lại:** $5 + 4 \times (506 - 1) = 5 + 4 \times 505 = 5 + 2020 = 2025$ (hoàn toàn chính xác).

</details>
