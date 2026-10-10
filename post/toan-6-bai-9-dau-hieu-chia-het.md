---
title: 'Toán 6 Bài 9: Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9 - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 9 Dấu hiệu chia hết: nhận biết chia hết cho 2, 5, 3, 9, bản chất toán học, lập số, tìm chữ số chưa biết, bài toán thực tế và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Dấu hiệu chia hết
  - Chia hết cho 2 và 5
  - Chia hết cho 3 và 9
  - Kết nối tri thức
grade: 6
---

# Bài 9. Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9

Ở Bài 8, chúng ta đã biết muốn kiểm tra xem một số $a$ có chia hết cho $b$ hay không, ta thực hiện phép chia $a : b$ xem số dư có bằng $0$ hay không. Tuy nhiên, với các số tự nhiên có nhiều chữ số, việc thực hiện phép chia mất rất nhiều thời gian. Trong bài học này, chúng ta sẽ khám phá **các dấu hiệu chia hết đặc biệt** giúp nhận biết ngay một số có chia hết cho $2,$ cho $5,$ cho $3$ hay cho $9$ chỉ bằng cách quan sát **chữ số tận cùng** hoặc tính **tổng các chữ số**.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy hoàn thành các câu hỏi nhanh sau để ôn tập lại kiến thức về cấu tạo số và phép chia hết:

```quiz
type: choice
question: 'Trong các số sau, số nào chia hết cho 5?'
options:
  - '32'
  - '45'
  - '84'
  - '103'
answer: 2
explanation: 'Ta có $45 : 5 = 9$ (không dư) nên $45\ \vdots\ 5.$'
```

```quiz
type: choice
question: 'Không thực hiện phép tính, tổng $50 + 13$ có chia hết cho 5 không?'
options:
  - 'Có chia hết'
  - 'Không chia hết'
  - 'Chưa đủ điều kiện kết luận'
  - 'Chia hết và có dư là 0'
answer: 2
explanation: 'Vì $50\ \vdots\ 5$ nhưng $13 \not\vdots\ 5$ nên theo tính chất chia hết của một tổng, $(50 + 13) \not\vdots\ 5.$'
```

```quiz
type: choice
question: 'Tổng các chữ số của số 1278 bằng bao nhiêu?'
options:
  - '15'
  - '16'
  - '18'
  - '20'
answer: 3
explanation: 'Tổng các chữ số là: $1 + 2 + 7 + 8 = 18.$'
```

```quiz
type: choice
question: 'Không đặt phép chia, số 1350 có chia hết cho 5 không? Vì sao?'
options:
  - 'Không, vì là số có 4 chữ số'
  - 'Có, vì có chữ số tận cùng là 0'
  - 'Không, vì tổng các chữ số là 9'
  - 'Có, vì chứa chữ số 5 ở hàng chục'
answer: 2
explanation: 'Các số có chữ số tận cùng là 0 hoặc 5 đều chia hết cho 5, do đó 1350 chia hết cho 5.'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Điền kí hiệu thích hợp:
a) $45\ \vdots\ 5$ (vì $45 : 5 = 9$).
b) $32 \not\vdots\ 5$ (vì $32 : 5 = 6$ dư $2$).
c) $84\ \vdots\ 2$ (vì $84 : 2 = 42$).

**Câu 2.**
a) Tổng $48 + 36$ chia hết cho $6$ vì $48\ \vdots\ 6$ và $36\ \vdots\ 6.$
b) Tổng $50 + 13$ không chia hết cho $5$ vì $50\ \vdots\ 5$ nhưng $13 \not\vdots\ 5.$

**Câu 3.** Viết mỗi số thành tổng giá trị các chữ số theo hàng:
a) $605 = 6 \cdot 100 + 0 \cdot 10 + 5.$
b) $1978 = 1 \cdot 1000 + 9 \cdot 100 + 7 \cdot 10 + 8.$

**Câu 4.** Tính tổng các chữ số:
a) $342$: $3 + 4 + 2 = 9.$
b) $1278$: $1 + 2 + 7 + 8 = 18.$
c) $2025$: $2 + 0 + 2 + 5 = 9.$

**Câu 5.** Số $1350$ có tận cùng là chữ số $0$, tương tự như các số tròn chục $10; 20; 30; \dots$ đều chia hết cho $5.$ Đây chính là dấu hiệu chia hết cho $5$ mà chúng ta sẽ tìm hiểu ngay dưới đây.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Dấu hiệu chia hết cho 2, cho 5

> **Dấu hiệu chia hết cho 2, cho 5 (Quan sát chữ số tận cùng):**
> - **Chia hết cho 2:** Các số có chữ số tận cùng là **$0; 2; 4; 6; 8$** (chữ số chẵn) thì chia hết cho $2,$ và chỉ những số đó mới chia hết cho $2.$
> - **Chia hết cho 5:** Các số có chữ số tận cùng là **$0$ hoặc $5$** thì chia hết cho $5,$ và chỉ những số đó mới chia hết cho $5.$
> - **Chia hết cho cả 2 và 5:** Các số có chữ số tận cùng là **$0$** thì chia hết cho cả $2$ và $5.$

**Ví dụ 1:** Trong các số $124;\; 275;\; 1080;\; 2023$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

Chỉ cần xét chữ số tận cùng của từng số:
a) $124$ tận cùng là $4$ và $1080$ tận cùng là $0$ (đều là chữ số chẵn) nên $124\ \vdots\ 2$ và $1080\ \vdots\ 2.$
Còn $275$ tận cùng $5$ và $2023$ tận cùng $3$ nên $275 \not\vdots\ 2$ và $2023 \not\vdots\ 2.$

b) $275$ tận cùng là $5$ và $1080$ tận cùng là $0$ nên $275\ \vdots\ 5$ và $1080\ \vdots\ 5.$

c) Chỉ có số $1080$ tận cùng là $0$ nên $1080$ chia hết cho cả $2$ và $5.$

</details>

---

### 2. Dấu hiệu chia hết cho 9, cho 3

> **Dấu hiệu chia hết cho 9, cho 3 (Tính tổng các chữ số):**
> - **Chia hết cho 9:** Các số có **tổng các chữ số chia hết cho 9** thì chia hết cho $9,$ và chỉ những số đó mới chia hết cho $9.$
> - **Chia hết cho 3:** Các số có **tổng các chữ số chia hết cho 3** thì chia hết cho $3,$ và chỉ những số đó mới chia hết cho $3.$

> [!IMPORTANT] Mối quan hệ giữa chia hết cho 9 và chia hết cho 3:
> - Vì $9\ \vdots\ 3$ nên **mọi số chia hết cho 9 đều chia hết cho 3**.
> - Chiều ngược lại **không đúng**: Một số chia hết cho $3$ chưa chắc đã chia hết cho $9$ (ví dụ: số $12$ có tổng các chữ số là $3\ \vdots\ 3 \implies 12\ \vdots\ 3,$ nhưng $12 \not\vdots\ 9$).

**Ví dụ 2:** Trong các số $234;\; 561;\; 707$: Số nào chia hết cho $3?$ Số nào chia hết cho $9?$ Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

Tính tổng các chữ số của từng số:
- Số $234$ có tổng các chữ số: $2 + 3 + 4 = 9.$ Vì $9\ \vdots\ 9$ nên $234\ \vdots\ 9,$ do đó $234$ cũng chia hết cho $3.$
- Số $561$ có tổng các chữ số: $5 + 6 + 1 = 12.$ Vì $12\ \vdots\ 3$ nhưng $12 \not\vdots\ 9$ nên $561\ \vdots\ 3$ và $561 \not\vdots\ 9.$
- Số $707$ có tổng các chữ số: $7 + 0 + 7 = 14.$ Vì $14 \not\vdots\ 3$ nên $707 \not\vdots\ 3$ và $707 \not\vdots\ 9.$

**Kết luận:**
- Chia hết cho $3$: $234$ và $561.$
- Chia hết cho $9$: $234.$
- Chia hết cho $3$ mà không chia hết cho $9$: $561.$

</details>

---

### 3. Bản chất toán học: Vì sao có dấu hiệu chia hết?

Dấu hiệu chia hết không phải là quy tắc ngẫu nhiên, mà là hệ quả trực tiếp từ **cấu tạo số theo hệ thập phân (Bài 2)** kết hợp với **tính chất chia hết của một tổng (Bài 8)**:

1. **Giải thích dấu hiệu chia hết cho 2 và cho 5:**
   Mọi số tự nhiên đều viết được dưới dạng: $\overline{a_n\dots a_1a_0} = \overline{a_n\dots a_1} \cdot 10 + a_0.$
   Vì $10\ \vdots\ 2$ và $10\ \vdots\ 5$ nên số hạng $\overline{a_n\dots a_1} \cdot 10$ luôn chia hết cho cả $2$ và $5.$ Do đó, số đó chia hết cho $2$ (hoặc cho $5$) hay không phụ thuộc hoàn toàn vào **chữ số tận cùng $a_0$**.

2. **Giải thích dấu hiệu chia hết cho 9 và cho 3:**
   Nhận xét rằng các số $10 = 9 + 1;\; 100 = 99 + 1;\; 1000 = 999 + 1;\; \dots$ đều là bội của $9$ cộng thêm $1.$
   Chẳng hạn xét số có 3 chữ số:
   $$\overline{abc} = a \cdot 100 + b \cdot 10 + c = a \cdot (99 + 1) + b \cdot (9 + 1) + c$$
   $$\overline{abc} = (a \cdot 99 + b \cdot 9) + (a + b + c).$$
   Vì $99\ \vdots\ 9$ và $9\ \vdots\ 9$ nên cụm $(a \cdot 99 + b \cdot 9)$ luôn chia hết cho $9$ (và cho $3$). Do đó, $\overline{abc}$ có chia hết cho $9$ (hoặc $3$) hay không hoàn toàn do **tổng các chữ số $(a + b + c)$** quyết định!

---

### 4. Bảng tổng hợp các sai lầm học sinh rất hay gặp

| Lỗi sai phổ biến | Sửa lại cho đúng | Giải thích quy tắc |
| :--- | :--- | :--- |
| Nhầm dấu hiệu cho $3, 9$ với chữ số tận cùng: *"Số 13 tận cùng là 3 nên chia hết cho 3"* | $13$ có tổng chữ số $1 + 3 = 4 \not\vdots\ 3 \implies 13 \not\vdots\ 3$ | Dấu hiệu cho $3$ và $9$ bắt buộc phải tính **tổng các chữ số**, không xét chữ số tận cùng. Ngược lại, $51$ tận cùng $1$ nhưng $5 + 1 = 6\ \vdots\ 3 \implies 51\ \vdots\ 3.$ |
| Nhầm lẫn hai chiều giữa $3$ và $9$: *"Số chia hết cho 3 thì chia hết cho 9"* | Số chia hết cho $9$ thì chia hết cho $3$; chiều ngược lại không đúng | Ví dụ: $15\ \vdots\ 3$ nhưng $15 \not\vdots\ 9.$ |
| Quên điều kiện chia hết cho cả $2$ và $5$ | Số chia hết cho cả $2$ và $5$ bắt buộc phải có chữ số tận cùng là $0$ | Vì tận cùng vừa phải là số chẵn ($0, 2, 4, 6, 8$) vừa phải là $0$ hoặc $5 \implies$ chỉ có thể là $0.$ |
| Nhầm kí hiệu cấu tạo số $\overline{ab}$ với tích $a \cdot b$ | $\overline{ab} = 10a + b$ | Khi tìm các chữ số, phải nhớ $a \neq 0$ nếu $a$ đứng ở hàng cao nhất và $0 \le a, b \le 9.$ |

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Nhận biết các số chia hết cho 2, cho 5, cho 9, cho 3

**Phương pháp giải:**
- Chia hết cho 2, cho 5: Xét chữ số tận cùng.
- Chia hết cho 3, cho 9: Tính tổng các chữ số.
- Nhớ: Số chia hết cho $9$ thì chắc chắn chia hết cho $3.$ Số "chia hết cho $3$ mà không chia hết cho $9$" là số có tổng các chữ số chia hết cho $3$ nhưng không chia hết cho $9.$

#### Luyện tập 1.1
Trong các số sau: $60;\; 45;\; 105;\; 510;\; 711;\; 126;\; 78;\; 2022;\; 2025$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$
d) Số nào chia hết cho $3?$
e) Số nào chia hết cho $9?$
f) Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) Các số có chữ số tận cùng là số chẵn: $60;\; 510;\; 126;\; 78;\; 2022.$
b) Các số có chữ số tận cùng là $0$ hoặc $5$: $60;\; 45;\; 105;\; 510;\; 2025.$
c) Các số có chữ số tận cùng là $0$: $60;\; 510.$
d) Tổng các chữ số của các số lần lượt là:
- $60 \to 6$
- $45 \to 9$
- $105 \to 6$
- $510 \to 6$
- $711 \to 9$
- $126 \to 9$
- $78 \to 15$
- $2022 \to 6$
- $2025 \to 9$
Tất cả các tổng này đều chia hết cho $3,$ do đó **cả 9 số đều chia hết cho 3**.
e) Các số có tổng các chữ số chia hết cho $9$: $45;\; 711;\; 126;\; 2025.$
f) Các số chia hết cho $3$ mà không chia hết cho $9$ (tổng chữ số bằng $6$ hoặc $15$): $60;\; 105;\; 510;\; 78;\; 2022.$

</details>

#### Luyện tập 1.2
Trong các số sau: $30;\; 75;\; 405;\; 504;\; 813;\; 204;\; 87;\; 2028;\; 2034$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$
d) Số nào chia hết cho $3?$
e) Số nào chia hết cho $9?$
f) Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) Tận cùng chẵn: $30;\; 504;\; 204;\; 2028;\; 2034.$
b) Tận cùng $0$ hoặc $5$: $30;\; 75;\; 405.$
c) Tận cùng $0$: $30.$
d) Tổng các chữ số lần lượt là: $3;\; 12;\; 9;\; 9;\; 12;\; 6;\; 15;\; 12;\; 9$ — đều chia hết cho $3.$ Vậy **cả 9 số đều chia hết cho 3**.
e) Tổng các chữ số bằng $9$: $405;\; 504;\; 2034.$
f) Chia hết cho $3$ mà không chia hết cho $9$: $30;\; 75;\; 813;\; 204;\; 87;\; 2028.$

</details>

#### Luyện tập 1.3
Cho các số: $1010;\; 1945;\; 2178;\; 3105;\; 4620.$ Tìm:
a) Số chia hết cho $2$ mà không chia hết cho $5;$
b) Số chia hết cho cả $5$ và $9;$
c) Số chia hết cho cả $2;\; 3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

Tổng các chữ số:
- $1010 \to 2$ (tận cùng 0)
- $1945 \to 19$ (tận cùng 5)
- $2178 \to 18$ (tận cùng 8)
- $3105 \to 9$ (tận cùng 5)
- $4620 \to 12$ (tận cùng 0)

a) Số chia hết cho $2$ mà không chia hết cho $5$ (tận cùng là số chẵn khác $0$): Chỉ có số $2178.$
b) Số chia hết cho cả $5$ và $9$ (tận cùng là $0$ hoặc $5$ và tổng chữ số chia hết cho $9$): Chỉ có số $3105.$
c) Số chia hết cho cả $2;\; 3$ và $5$ (tận cùng là $0$ và tổng chữ số chia hết cho $3$): Chỉ có số $4620.$

</details>

---

### Dạng 2. Xét tính chia hết của một tổng (hiệu)

**Phương pháp giải:**
- Dùng dấu hiệu chia hết xét từng số hạng.
- Nếu các số hạng cùng chia hết $\implies$ tổng/hiệu chia hết.
- Nếu chỉ có đúng $1$ số hạng không chia hết $\implies$ tổng/hiệu không chia hết.
- Nếu có từ $2$ số hạng không chia hết trở lên $\implies$ nhóm chúng lại để tính tổng riêng của các số hạng đó.

#### Luyện tập 2.1
Các tổng (hiệu) sau có chia hết cho $2,$ có chia hết cho $5$ hay không? Tại sao?
a) $A = 108 + 22;$
b) $B = 155 + 30;$
c) $C = 117 + 23 + 150;$
d) $D = 2023 + 72 - 45.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) 
- Chia hết cho $2$: Vì $108\ \vdots\ 2$ và $22\ \vdots\ 2$ nên $A\ \vdots\ 2.$
- Chia hết cho $5$: Vì $108$ và $22$ đều không chia hết cho $5,$ ta xét tổng: $A = 108 + 22 = 130$ (tận cùng là $0$) nên $A\ \vdots\ 5.$

b) 
- Chia hết cho $2$: Vì $155 \not\vdots\ 2$ nhưng $30\ \vdots\ 2$ nên $B \not\vdots\ 2.$
- Chia hết cho $5$: Vì $155\ \vdots\ 5$ và $30\ \vdots\ 5$ nên $B\ \vdots\ 5.$

c) 
- Chia hết cho $2$: Nhóm $117 + 23 = 140\ \vdots\ 2$ và $150\ \vdots\ 2$ nên $C\ \vdots\ 2.$
- Chia hết cho $5$: Nhóm $117 + 23 = 140\ \vdots\ 5$ và $150\ \vdots\ 5$ nên $C\ \vdots\ 5.$

d) Tính $D = 2023 + 72 - 45 = 2050.$
Số $2050$ có tận cùng là chữ số $0$ nên $D$ chia hết cho cả $2$ và $5.$

</details>

#### Luyện tập 2.2
Các tổng sau có chia hết cho $3,$ có chia hết cho $9$ không? Tại sao?
a) $A = 108 + 27;$
b) $B = 123 + 324;$
c) $C = 117 + 405 + 31;$
d) $D = 504 + 204 + 3.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) 
- Số $108$ có tổng chữ số là $9\ \vdots\ 9$ và $27\ \vdots\ 9$ nên $A\ \vdots\ 9,$ kéo theo $A\ \vdots\ 3.$

b) 
- Số $123$ có tổng chữ số $6\ \vdots\ 3;$ số $324$ có tổng chữ số $9\ \vdots\ 3 \implies B\ \vdots\ 3.$
- Tuy nhiên $123 \not\vdots\ 9$ trong khi $324\ \vdots\ 9$ nên $B \not\vdots\ 9.$

c) 
- Các số $117$ và $405$ đều có tổng chữ số là $9$ nên chia hết cho cả $3$ và $9.$
- Số $31$ có tổng chữ số là $4 \not\vdots\ 3$ và $\not\vdots\ 9.$
Do đó $C \not\vdots\ 3$ và $C \not\vdots\ 9.$

d) 
- Các số $504;\; 204;\; 3$ đều chia hết cho $3$ nên $D\ \vdots\ 3.$
- Với số $9$: Ta có $504\ \vdots\ 9$ (tổng chữ số 9). Nhóm $204 + 3 = 207$ có tổng chữ số là $9\ \vdots\ 9.$
Do đó $D = 504 + 207\ \vdots\ 9.$

</details>

#### Luyện tập 2.3
Các tổng sau có chia hết cho $3,$ có chia hết cho $9$ không? Tại sao?
a) $A = 135 + 36;$
b) $B = 213 + 738;$
c) $C = 603 + 45 + 28;$
d) $D = 414 + 103 + 2.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Cả $135$ (tổng 9) và $36$ (tổng 9) đều chia hết cho $9$ nên $A\ \vdots\ 9$ và $A\ \vdots\ 3.$
b) $213$ (tổng 6) chia hết cho $3$ nhưng không chia hết cho $9;$ $738$ (tổng 18) chia hết cho $9.$ Do đó $B\ \vdots\ 3$ nhưng $B \not\vdots\ 9.$
c) $603$ và $45$ đều chia hết cho $3$ và cho $9;$ còn $28$ (tổng 10) không chia hết cho $3.$ Vậy $C \not\vdots\ 3$ và $C \not\vdots\ 9.$
d) Nhóm $103 + 2 = 105$ có tổng chữ số $6\ \vdots\ 3$ nhưng $105 \not\vdots\ 9.$ Số $414$ (tổng 9) chia hết cho $9$ và cho $3.$ Vậy $D = 414 + 105\ \vdots\ 3$ nhưng $D \not\vdots\ 9.$

</details>

---

### Dạng 3. Lập số chia hết từ các chữ số cho trước

**Phương pháp giải:**
- Chia hết cho 2 hoặc 5: Chọn chữ số tận cùng trước.
- Chia hết cho 3 hoặc 9: Tìm các bộ gồm các chữ số có tổng chia hết cho 3 (hoặc 9) trước, sau đó hoán vị các vị trí.
- **Chú ý:** Chữ số $0$ không được đứng ở hàng đầu tiên (hàng cao nhất).

#### Luyện tập 3.1
Từ các chữ số $1;\; 2;\; 3;\; 5,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Chia hết cho $2$: Chữ số tận cùng phải là $2.$ Chọn hai chữ số đầu trong $\{1; 3; 5\}$:
Ta được: $132;\; 152;\; 312;\; 352;\; 512;\; 532$ ($6$ số).

b) Chia hết cho $5$: Chữ số tận cùng phải là $5.$ Chọn hai chữ số đầu trong $\{1; 2; 3\}$:
Ta được: $125;\; 135;\; 215;\; 235;\; 315;\; 325$ ($6$ số).

c) Chia hết cho $9$: Tổng 3 chữ số phải chia hết cho $9.$
Xét các bộ ba chữ số:
- $\{1; 2; 3\} \to 6$
- $\{1; 2; 5\} \to 8$
- $\{1; 3; 5\} \to 9$ (thỏa mãn)
- $\{2; 3; 5\} \to 10$
Chỉ có bộ $\{1; 3; 5\}$ thỏa mãn. Hoán vị 3 chữ số này được: $135;\; 153;\; 315;\; 351;\; 513;\; 531$ ($6$ số).

d) Chia hết cho cả $3$ và $5$: Tận cùng phải là $5$ và tổng 3 chữ số chia hết cho $3.$
Bộ $\{1; 3; 5\}$ có tổng bằng $9\ \vdots\ 3$ và chứa chữ số $5.$
Cố định chữ số tận cùng là $5,$ ta được $2$ số: $135$ và $315.$

</details>

#### Luyện tập 3.2
Từ các chữ số $0;\; 3;\; 4;\; 5,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) Chia hết cho $2$: Chữ số tận cùng là $0$ hoặc $4.$
- Tận cùng là $0$: $340;\; 350;\; 430;\; 450;\; 530;\; 540$ ($6$ số).
- Tận cùng là $4$ (chữ số đầu khác 0): $304;\; 354;\; 504;\; 534$ ($4$ số).
Tổng cộng có $10$ số.

b) Chia hết cho $5$: Chữ số tận cùng là $0$ hoặc $5.$
- Tận cùng là $0$: $6$ số như câu a.
- Tận cùng là $5$ (chữ số đầu khác 0): $305;\; 345;\; 405;\; 435$ ($4$ số).
Tổng cộng có $10$ số.

c) Chia hết cho $9$: Tổng ba chữ số chia hết cho $9.$ Chỉ có bộ $\{0; 4; 5\}$ (tổng bằng 9).
Bỏ các số bắt đầu bằng $0,$ ta lập được $4$ số: $405;\; 450;\; 504;\; 540.$

d) Chia hết cho cả $3$ và $5$:
- Bộ $\{3; 4; 5\}$ (tổng 12): Tận cùng $5$ ta được $345;\; 435.$
- Bộ $\{0; 4; 5\}$ (tổng 9): Tận cùng $0$ được $450;\; 540;$ tận cùng $5$ được $405.$
Vậy có $5$ số: $345;\; 435;\; 405;\; 450;\; 540.$

</details>

#### Luyện tập 3.3
Từ các chữ số $0;\; 1;\; 2;\; 6,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho cả $2$ và $5;$
b) Chia hết cho $9;$
c) Chia hết cho $3$ mà không chia hết cho $9.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

a) Chia hết cho cả $2$ và $5$: Tận cùng phải là chữ số $0.$ Hai chữ số đầu chọn từ $\{1; 2; 6\}$:
Ta được: $120;\; 160;\; 210;\; 260;\; 610;\; 620$ ($6$ số).

b) Chia hết cho $9$: Bộ ba có tổng chia hết cho $9$ chỉ có $\{1; 2; 6\}$ (tổng bằng 9).
Ta được: $126;\; 162;\; 216;\; 261;\; 612;\; 621$ ($6$ số).

c) Chia hết cho $3$ mà không chia hết cho $9$: Tổng chia hết cho $3$ nhưng không chia hết cho $9.$ Chỉ có bộ $\{0; 1; 2\}$ (tổng bằng 3).
Loại các số có $0$ đứng đầu, ta được $4$ số: $102;\; 120;\; 201;\; 210.$

</details>

---

### Dạng 4. Tìm chữ số chưa biết thoả mãn điều kiện chia hết

**Phương pháp giải:**
- Nếu số có chứa chữ số tận cùng $y$ và chữ số khác $x$:
  - Bước 1: Dùng dấu hiệu chia hết cho 5 hoặc cho 2 để tìm các khả năng của chữ số tận cùng $y.$
  - Bước 2: Với mỗi trường hợp của $y,$ tính tổng các chữ số rồi dùng dấu hiệu chia hết cho 9 (hoặc cho 3) để tìm chữ số $x.$
  - Chú ý: $0 \le x, y \le 9;$ nếu chữ số đứng ở đầu tiên thì phải khác $0.$

#### Luyện tập 4.1
Tìm chữ số $x$ để số $A = \overline{36x}$:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

Tổng các chữ số của $A$ là: $3 + 6 + x = 9 + x.$
a) $A\ \vdots\ 2 \iff x \in \{0; 2; 4; 6; 8\}.$
b) $A\ \vdots\ 5 \iff x \in \{0; 5\}.$
c) $A\ \vdots\ 9 \iff (9 + x)\ \vdots\ 9 \iff x \in \{0; 9\}.$
d) $A\ \vdots\ 3 \iff (9 + x)\ \vdots\ 3 \iff x\ \vdots\ 3 \iff x \in \{0; 3; 6; 9\}.$

</details>

#### Luyện tập 4.2
Tìm các chữ số $x, y$ để số $A = \overline{1x8y}$:
a) Chia hết cho cả $9$ và $5;$
b) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

Tổng các chữ số của $A$ là: $1 + x + 8 + y = 9 + x + y.$
Vì $A\ \vdots\ 5$ nên $y \in \{0; 5\}.$

a) Để $A\ \vdots\ 9$:
- Trường hợp 1: $y = 0 \implies (9 + x + 0)\ \vdots\ 9 \implies x \in \{0; 9\}.$ Ta có các số $1080;\; 1980.$
- Trường hợp 2: $y = 5 \implies (9 + x + 5)\ \vdots\ 9 \implies (14 + x)\ \vdots\ 9 \implies x = 4.$ Ta có số $1485.$
Vậy các cặp $(x; y)$ thỏa mãn là: $(0; 0);\; (9; 0);\; (4; 5).$

b) Để $A\ \vdots\ 3$:
- Trường hợp 1: $y = 0 \implies (9 + x)\ \vdots\ 3 \implies x \in \{0; 3; 6; 9\}.$
- Trường hợp 2: $y = 5 \implies (14 + x)\ \vdots\ 3 \implies x \in \{1; 4; 7\}.$
Vậy có $7$ cặp $(x; y)$ thỏa mãn: $(0; 0);\; (3; 0);\; (6; 0);\; (9; 0);\; (1; 5);\; (4; 5);\; (7; 5).$

</details>

#### Luyện tập 4.3
Tìm các chữ số $x, y$ để số $A = \overline{3x4y}$:
a) Chia hết cho cả $9$ và $5;$
b) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

Tổng các chữ số: $3 + x + 4 + y = 7 + x + y.$
Vì $A\ \vdots\ 5$ nên $y \in \{0; 5\}.$

a) Để $A\ \vdots\ 9$:
- Với $y = 0 \implies (7 + x)\ \vdots\ 9 \implies x = 2$ (số $3240$).
- Với $y = 5 \implies (12 + x)\ \vdots\ 9 \implies x = 6$ (số $3645$).
Vậy $(x; y) \in \{(2; 0);\; (6; 5)\}.$

b) Để $A\ \vdots\ 3$:
- Với $y = 0 \implies (7 + x)\ \vdots\ 3 \implies x \in \{2; 5; 8\}$ (các số $3240;\; 3540;\; 3840$).
- Với $y = 5 \implies (12 + x)\ \vdots\ 3 \implies x \in \{0; 3; 6; 9\}$ (các số $3045;\; 3345;\; 3645;\; 3945$).
Vậy có $7$ cặp $(x; y)$ thỏa mãn như trên.

</details>

---

### Dạng 5. Bài toán thực tế về dấu hiệu chia hết

**Phương pháp giải:**
- Chuyển đổi dữ kiện đề bài thành quan hệ chia hết: "chia đều thành nhóm $k$ người" $\implies$ tổng số người phải chia hết cho $k.$
- Liệt kê các số trong khoảng cho trước thỏa mãn dấu hiệu chặt chẽ nhất (chia hết cho cả 2 và 5 $\implies$ tận cùng 0, hoặc chia hết cho 9), sau đó kiểm tra các điều kiện còn lại.

#### Luyện tập 5.1
Đội Sao Đỏ của trường cần một số lượng học sinh trong khoảng từ $28$ đến $32$ người, sao cho có thể chia đều thành các nhóm có $5$ hoặc $6$ học sinh. Hãy tìm số lượng học sinh của Đội Sao Đỏ.

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Số học sinh phải chia hết cho cả $5$ và $6.$
Trong khoảng từ $28$ đến $32,$ số chia hết cho $5$ (tận cùng là $0$ hoặc $5$) duy nhất là số $30.$
Kiểm tra: $30 = 6 \cdot 5$ nên $30\ \vdots\ 6.$
Vậy Đội Sao Đỏ có đúng $30$ học sinh.

</details>

#### Luyện tập 5.2
Trong chiến dịch phòng chống dịch, thành phố cần lập một đoàn công tác gồm các bác sĩ với số lượng trong khoảng từ $170$ đến $200$ người. Ban tổ chức muốn số lượng bác sĩ có thể chia đều thành các nhóm $5,$ nhóm $6$ hoặc nhóm $9$ người. Hỏi đoàn công tác cần có bao nhiêu bác sĩ?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Số bác sĩ phải chia hết cho cả $5;\; 6$ và $9.$
- Trong khoảng từ $170$ đến $200,$ các số chia hết cho $9$ (tổng chữ số chia hết cho 9) là: $171;\; 180;\; 189;\; 198.$
- Trong 4 số này, số chia hết cho $5$ (tận cùng là $0$ hoặc $5$) chỉ có duy nhất số $180.$
- Kiểm tra lại: $180 = 6 \cdot 30\ \vdots\ 6$ (thỏa mãn).
Vậy đoàn công tác cần đúng $180$ bác sĩ.

</details>

#### Luyện tập 5.3
Số học sinh khối 6 của một trường nằm trong khoảng từ $355$ đến $365$ em. Khi xếp thành hàng 2, hàng 5 hay hàng 9 đều vừa đủ, không thừa bạn nào. Hỏi khối 6 của trường đó có bao nhiêu học sinh?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

Số học sinh chia hết cho cả $2$ và $5$ nên chữ số tận cùng phải là $0.$
Trong khoảng từ $355$ đến $365,$ số duy nhất có tận cùng bằng $0$ là số $360.$
Kiểm tra điều kiện chia hết cho $9$:
Tổng các chữ số của $360$ là: $3 + 6 + 0 = 9\ \vdots\ 9.$
Vậy khối 6 của trường đó có đúng $360$ học sinh.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Trong các số sau: $40;\; 75;\; 213;\; 135;\; 1908;\; 1935$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$
d) Số nào chia hết cho $3?$
e) Số nào chia hết cho $9?$
f) Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

Tổng các chữ số của từng số: $40 \to 4;\; 75 \to 12;\; 213 \to 6;\; 135 \to 9;\; 1908 \to 18;\; 1935 \to 18.$
a) Chia hết cho $2$: $40;\; 1908.$
b) Chia hết cho $5$: $40;\; 75;\; 135;\; 1935.$
c) Chia hết cho cả $2$ và $5$: $40.$
d) Chia hết cho $3$: $75;\; 213;\; 135;\; 1908;\; 1935.$
e) Chia hết cho $9$: $135;\; 1908;\; 1935.$
f) Chia hết cho $3$ mà không chia hết cho $9$: $75;\; 213.$

</details>

### Bài 2
Xét tính chia hết của các tổng sau:
a) Tổng $A = 225 + 150$ có chia hết cho $2,$ cho $5$ không?
b) Tổng $B = 225 + 45 + 15$ có chia hết cho $3,$ cho $9$ không?

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

a) 
- Vì $225 \not\vdots\ 2$ (số lẻ) nhưng $150\ \vdots\ 2$ nên $A \not\vdots\ 2.$
- Vì cả $225$ và $150$ đều có chữ số tận cùng là $5$ hoặc $0$ nên $225\ \vdots\ 5$ và $150\ \vdots\ 5 \implies A\ \vdots\ 5.$

b) 
- Tổng các chữ số: $225 \to 9\ \vdots\ 3;\; 45 \to 9\ \vdots\ 3;\; 15 \to 6\ \vdots\ 3 \implies B\ \vdots\ 3.$
- Với số $9$: $225\ \vdots\ 9$ và $45\ \vdots\ 9,$ nhưng $15 \not\vdots\ 9$ nên $B \not\vdots\ 9.$

</details>

### Bài 3
Các tổng (hiệu) sau có chia hết cho $2,$ có chia hết cho $5$ hay không? Tại sao?
a) $A = 78 + 32;$
b) $B = 165 + 40;$
c) $C = 126 + 24 + 100;$
d) $D = 2025 + 65 - 40.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) Cả $78$ và $32$ đều chẵn nên $A\ \vdots\ 2.$ Tính $A = 110$ (tận cùng 0) nên $A\ \vdots\ 5.$
b) $165 \not\vdots\ 2$ nhưng $40\ \vdots\ 2 \implies B \not\vdots\ 2.$ Cả hai số đều chia hết cho $5 \implies B\ \vdots\ 5.$
c) Cả ba số đều là số chẵn nên $C\ \vdots\ 2.$ Nhóm $126 + 24 = 150\ \vdots\ 5$ và $100\ \vdots\ 5 \implies C\ \vdots\ 5.$
d) Cả ba số đều có tận cùng là $0$ hoặc $5$ nên $D\ \vdots\ 5.$ Nhóm $2025 + 65 = 2090\ \vdots\ 2$ và $40\ \vdots\ 2 \implies D\ \vdots\ 2.$

</details>

### Bài 4
Từ các chữ số $0;\; 2;\; 4;\; 5,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho cả $2$ và $5;$
b) Chia hết cho $9;$
c) Chia hết cho cả $5$ và $9.$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) Tận cùng phải là chữ số $0.$ Hai chữ số đầu chọn từ $\{2; 4; 5\}$:
Ta được: $240;\; 250;\; 420;\; 450;\; 520;\; 540$ ($6$ số).

b) Bộ ba chữ số có tổng chia hết cho $9$ chỉ có $\{0; 4; 5\}$ (tổng bằng 9).
Loại các số có chữ số $0$ đứng đầu, ta được $4$ số: $405;\; 450;\; 504;\; 540.$

c) Trong các số ở câu b, các số có tận cùng là $0$ hoặc $5$ là: $405;\; 450;\; 540.$

</details>

### Bài 5
Tìm chữ số $x$ để số $A = \overline{34x}$:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

Tổng các chữ số của $A$ là: $3 + 4 + x = 7 + x.$
a) $A\ \vdots\ 2 \implies x \in \{0; 2; 4; 6; 8\}.$
b) $A\ \vdots\ 5 \implies x \in \{0; 5\}.$
c) $A\ \vdots\ 9 \implies (7 + x)\ \vdots\ 9 \implies x = 2.$
d) $A\ \vdots\ 3 \implies (7 + x)\ \vdots\ 3 \implies x \in \{2; 5; 8\}.$

</details>

### Bài 6
Tìm các chữ số $x, y$ để số $B = \overline{x18y}$:
a) Chia hết cho cả $2$ và $5;$
b) Chia hết cho cả $9$ và $5.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

Lưu ý: $x$ là chữ số hàng nghìn nên $x \neq 0.$
a) Chia hết cho cả $2$ và $5 \implies y = 0.$ Khi đó $x$ tùy ý từ $1$ đến $9.$ Ta được $9$ số: $1180;\; 2180;\; \dots;\; 9180.$
b) $B\ \vdots\ 5 \implies y \in \{0; 5\}.$ Tổng các chữ số: $x + 1 + 8 + y = x + 9 + y.$
- Với $y = 0 \implies (x + 9)\ \vdots\ 9 \implies x = 9$ (vì $x \neq 0$). Ta được số $9180.$
- Với $y = 5 \implies (x + 14)\ \vdots\ 9 \implies x = 4.$ Ta được số $4185.$
Vậy $(x; y) \in \{(9; 0);\; (4; 5)\}.$

</details>

### Bài 7
Bạn An nói: *"Một số có tổng các chữ số chia hết cho 3 thì số đó cũng chia hết cho 9."* Theo em, bạn An nói đúng hay sai? Nếu sai, hãy nêu một ví dụ để giải thích và sửa lại phát biểu cho đúng.

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

Bạn An nói **sai**.
*Ví dụ:* Số $12$ có tổng các chữ số là $1 + 2 = 3\ \vdots\ 3,$ nhưng $12 \not\vdots\ 9.$
**Sửa lại cho đúng:** *"Một số có tổng các chữ số chia hết cho 9 thì số đó cũng chia hết cho 3."*

</details>

### Bài 8
Một trang trại thu hoạch được số trứng gà trong khoảng từ $50$ đến $60$ quả. Số trứng này xếp vừa khít vào các vỉ $2$ quả, và cũng chia đều được vào $9$ túi như nhau. Hỏi trang trại thu hoạch được bao nhiêu quả trứng?

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

Số trứng chia hết cho cả $2$ và $9.$
Trong khoảng từ $50$ đến $60,$ số chia hết cho $9$ duy nhất là $54$ (vì $5 + 4 = 9$).
Số $54$ có chữ số tận cùng là $4$ nên $54\ \vdots\ 2$ (thỏa mãn).
Vậy trang trại thu hoạch được đúng $54$ quả trứng.

</details>

### Bài 9
Tìm các chữ số $x, y$ để số $\overline{x54y}$ chia hết cho cả $2;\; 5$ và $9.$

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

- Chia hết cho cả $2$ và $5 \implies y = 0.$
- Khi đó số có dạng $\overline{x540}.$ Tổng các chữ số là: $x + 5 + 4 + 0 = x + 9.$
Để số chia hết cho $9$ thì $(x + 9)\ \vdots\ 9 \implies x \in \{0; 9\}.$
Vì $x$ là chữ số đầu tiên nên $x \neq 0 \implies x = 9.$
Vậy $x = 9;\; y = 0$ (số $9540$).

</details>

### Bài 10
Tìm số tự nhiên nhỏ nhất có ba chữ số khác nhau chia hết cho cả $2;\; 3$ và $5.$

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Số chia hết cho cả $2$ và $5$ nên có chữ số tận cùng là $0.$
Để số là nhỏ nhất có ba chữ số, ta chọn chữ số hàng trăm nhỏ nhất là $1.$
Số có dạng $\overline{1a0}$ với $a \neq 1, a \neq 0.$
Tổng các chữ số: $1 + a + 0 = 1 + a.$
Để số chia hết cho $3$ thì $(1 + a)\ \vdots\ 3,$ với $a$ nhỏ nhất khác $0$ và $1 \implies a = 2.$
Vậy số tự nhiên nhỏ nhất cần tìm là $120.$

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Thử sức với các câu hỏi kiểm tra nhanh để củng cố toàn bộ kiến thức bài học:

```quiz
type: choice
question: 'Khẳng định nào sau đây là đúng?'
options:
  - 'Số có chữ số tận cùng là 5 thì chia hết cho 2'
  - 'Số chia hết cho 9 thì chia hết cho 3'
  - 'Số chia hết cho 3 thì chia hết cho 9'
  - 'Số có chữ số tận cùng là 3 thì chia hết cho 3'
answer: 2
explanation: 'Mọi số chia hết cho 9 đều có tổng các chữ số chia hết cho 9, mà 9 chia hết cho 3 nên số đó chia hết cho 3.'
```

```quiz
type: choice
question: 'Số nào sau đây chia hết cho cả 2 và 5?'
options:
  - '302'
  - '145'
  - '230'
  - '425'
answer: 3
explanation: 'Số chia hết cho cả 2 và 5 phải có chữ số tận cùng là 0. Do đó 230 là đáp án đúng.'
```

```quiz
type: choice
question: 'Trong các số sau, số nào chia hết cho 3 mà không chia hết cho 9?'
options:
  - '234'
  - '405'
  - '1278'
  - '6171'
answer: 4
explanation: 'Số 6171 có tổng các chữ số là $6 + 1 + 7 + 1 = 15.$ Vì $15\ \vdots\ 3$ nhưng $15 \not\vdots\ 9$ nên 6171 chia hết cho 3 mà không chia hết cho 9.'
```

```quiz
type: choice
question: 'Lớp 6A có từ 30 đến 40 học sinh. Khi xếp hàng 2 hay hàng 9 đều vừa đủ. Hỏi lớp 6A có bao nhiêu bạn?'
options:
  - '32 bạn'
  - '36 bạn'
  - '38 bạn'
  - '40 bạn'
answer: 2
explanation: 'Số học sinh chia hết cho cả 2 và 9. Trong khoảng từ 30 đến 40, số chia hết cho 9 là 36; số 36 lại là số chẵn nên chia hết cho 2.'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 3.** Cho các số $234;\; 405;\; 730;\; 1278;\; 6171$:
- Tổng chữ số tương ứng: $9;\; 9;\; 10;\; 18;\; 15.$
a) Chia hết cho $2$: $234;\; 730;\; 1278.$
b) Chia hết cho $5$: $405;\; 730.$
c) Chia hết cho $9$: $234;\; 405;\; 1278.$
d) Chia hết cho $3$ mà không chia hết cho $9$: $6171.$

**Câu 4.**
- Số $1251$ có tổng chữ số là $9\ \vdots\ 9$ và $\vdots\ 3.$
- Số $5316$ có tổng chữ số là $15\ \vdots\ 3$ nhưng $\not\vdots\ 9.$
Vì cả hai số đều chia hết cho $3$ nên tổng chia hết cho $3.$ Tuy nhiên một số chia hết cho $9$, số kia không chia hết cho $9$ nên tổng không chia hết cho $9.$

**Câu 5.**
- Cả $2025$ và $405$ đều có tận cùng là $5$ nên hiệu chia hết cho $5.$
- Cả hai số đều có tổng chữ số là $9\ \vdots\ 9$ nên hiệu chia hết cho $9.$

**Câu 6.** Từ các chữ số $0;\; 2;\; 7$:
a) Chia hết cho $2$: $270;\; 720;\; 702.$
b) Chia hết cho $5$: $270;\; 720.$
c) Tổng $0 + 2 + 7 = 9\ \vdots\ 9$ nên **mọi số có 3 chữ số khác nhau lập từ 3 chữ số này đều chia hết cho 9**.

**Câu 7.** Với số $A = \overline{46x}$ có tổng chữ số là $10 + x$:
a) $x \in \{0; 2; 4; 6; 8\}.$
b) $x \in \{0; 5\}.$
c) $(10 + x)\ \vdots\ 9 \implies x = 8.$
d) $(10 + x)\ \vdots\ 3 \implies x \in \{2; 5; 8\}.$

**Câu 8.** Số $\overline{5x1y}$ chia hết cho $5$ nên $y \in \{0; 5\}.$
Tổng các chữ số: $5 + x + 1 + y = 6 + x + y.$
- Với $y = 0 \implies (6 + x)\ \vdots\ 9 \implies x = 3$ (số $5310$).
- Với $y = 5 \implies (11 + x)\ \vdots\ 9 \implies x = 7$ (số $5715$).
Vậy $(x; y) \in \{(3; 0);\; (7; 5)\}.$

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Gọi $A$ là tổng của tất cả các số tự nhiên có hai chữ số. Hỏi $A$ chia hết cho những số nào trong các số $2;\; 5;\; 3;\; 9?$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Các số tự nhiên có hai chữ số là: $10; 11; 12; \dots; 99.$
Số các số hạng là: $99 - 10 + 1 = 90$ số hạng.
Áp dụng công thức tính tổng dãy số cách đều (bài toán Gauss):
$$A = \frac{(10 + 99) \cdot 90}{2} = 109 \cdot 45 = 4905.$$
Xét tính chia hết của số $4905$:
- Chữ số tận cùng là $5$ nên $A\ \vdots\ 5$ và $A \not\vdots\ 2.$
- Tổng các chữ số là: $4 + 9 + 0 + 5 = 18.$
Vì $18\ \vdots\ 9$ nên $A\ \vdots\ 9$ và do đó $A\ \vdots\ 3.$

**Kết luận:** $A$ chia hết cho $5;\; 3;\; 9$ và không chia hết cho $2.$

</details>

### Nâng cao 2
Dùng ba trong bốn chữ số $4;\; 6;\; 3;\; 0,$ hãy viết tất cả các số tự nhiên có ba chữ số chia hết cho tất cả các số $2;\; 5;\; 3;\; 9.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

- Số chia hết cho cả $2$ và $5$ nên chữ số tận cùng bắt buộc phải là $0.$
- Số chia hết cho cả $3$ và $9$ chỉ cần thỏa mãn điều kiện tổng các chữ số chia hết cho $9.$
Hai chữ số còn lại được chọn từ $\{4; 6; 3\}$ sao cho tổng của chúng chia hết cho $9$:
- $4 + 6 = 10 \not\vdots\ 9$
- $4 + 3 = 7 \not\vdots\ 9$
- $6 + 3 = 9\ \vdots\ 9$ (thỏa mãn)

Do đó hai chữ số đầu tiên phải là $6$ và $3.$
Các số tự nhiên thỏa mãn là: $630$ và $360.$

</details>

### Nâng cao 3
Tìm các chữ số $a, b$ để số $\overline{3a4b5}$ chia hết cho $9,$ biết rằng $a - b = 2.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Tổng các chữ số của số đã cho là:
$$3 + a + 4 + b + 5 = 12 + a + b.$$
Để số đó chia hết cho $9$ thì $(12 + a + b)\ \vdots\ 9.$
Vì $a, b$ là các chữ số ($0 \le a, b \le 9$) nên $0 \le a + b \le 18.$
Do đó $12 \le 12 + a + b \le 30.$
Các bội của $9$ trong khoảng này là $18$ và $27$:
- **Trường hợp 1:** $12 + a + b = 18 \implies a + b = 6.$
  Kết hợp với $a - b = 2$:
  $$a = (6 + 2) : 2 = 4$$
  $$b = 4 - 2 = 2.$$
  Ta được số $34425$ (thử lại: $3 + 4 + 4 + 2 + 5 = 18\ \vdots\ 9$).

- **Trường hợp 2:** $12 + a + b = 27 \implies a + b = 15.$
  Kết hợp với $a - b = 2 \implies a = (15 + 2) : 2 = 8,5$ (loại vì $a$ phải là số tự nhiên).

Vậy $a = 4$ và $b = 2.$

</details>

### Nâng cao 4
Khi đổi chỗ các chữ số của số tự nhiên $a,$ ta nhận được số tự nhiên $b$ gấp ba lần số $a$ ($b = 3a$). Chứng minh rằng $a$ chia hết cho $9.$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

1. Vì $b = 3a$ nên $b\ \vdots\ 3.$ Do đó, tổng các chữ số của $b$ chia hết cho $3.$
2. Vì số $b$ chỉ là kết quả đổi chỗ các chữ số của $a$ nên tổng các chữ số của $a$ bằng tổng các chữ số của $b.$ Suy ra tổng các chữ số của $a$ cũng chia hết cho $3,$ tức là $a\ \vdots\ 3.$
3. Khi $a\ \vdots\ 3,$ ta có $b = 3a$ là tích của $3$ với một số chia hết cho $3,$ do đó $b\ \vdots\ 9.$
4. Vì $b\ \vdots\ 9$ nên tổng các chữ số của $b$ chia hết cho $9.$
5. Như vậy, tổng các chữ số của $a$ cũng chia hết cho $9,$ suy ra $a\ \vdots\ 9\ (\text{đpcm}).$

</details>

### Nâng cao 5
Bạn Tùng viết mười số tự nhiên liên tiếp lên bảng, sau đó xoá đi một số thì tổng của chín số còn lại là $490.$ Hãy tìm số đã bị xoá.

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Gọi mười số tự nhiên liên tiếp là: $a;\; a + 1;\; a + 2;\; \dots;\; a + 9$ ($a \in \mathbb{N}$).
Tổng của cả mười số là:
$$S = 10a + (1 + 2 + \dots + 9) = 10a + 45.$$
Gọi số bị xoá là $a + b$ với $0 \le b \le 9.$
Tổng của chín số còn lại là:
$$(10a + 45) - (a + b) = 490$$
$$9a + 45 - b = 490$$
$$9a = 445 + b.$$

Nhận xét: Vế trái $9a\ \vdots\ 9,$ do đó vế phải $(445 + b)\ \vdots\ 9.$
Ta phân tích: $445 = 9 \cdot 49 + 4.$
Do đó $(445 + b)\ \vdots\ 9 \iff (4 + b)\ \vdots\ 9.$
Vì $0 \le b \le 9$ nên $4 \le 4 + b \le 13,$ suy ra $4 + b = 9 \implies b = 5.$
Khi $b = 5,$ ta có:
$$9a = 445 + 5 = 450 \implies a = 50.$$
Số bị xoá là:
$$a + b = 50 + 5 = 55.$$

**Thử lại:** Mười số liên tiếp là từ $50$ đến $59,$ tổng là $545.$
Bỏ số $55$ đi thì tổng còn lại là $545 - 55 = 490$ (hoàn toàn chính xác).
**Đáp số:** Số bị xoá là $55.$

</details>
