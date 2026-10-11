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
  - '36'
  - '55'
  - '74'
  - '102'
answer: 2
explanation: 'Ta có $55 : 5 = 11$ (không dư) nên $55\ \vdots\ 5.$'
```

```quiz
type: choice
question: 'Không thực hiện phép tính, tổng $60 + 17$ có chia hết cho 5 không?'
options:
  - 'Có chia hết'
  - 'Không chia hết'
  - 'Chưa đủ điều kiện kết luận'
  - 'Chia hết và có dư là 0'
answer: 2
explanation: 'Vì $60\ \vdots\ 5$ nhưng $17 \not\vdots\ 5$ nên theo tính chất chia hết của một tổng, $(60 + 17) \not\vdots\ 5.$'
```

```quiz
type: choice
question: 'Tổng các chữ số của số 2358 bằng bao nhiêu?'
options:
  - '16'
  - '17'
  - '18'
  - '20'
answer: 3
explanation: 'Tổng các chữ số là: $2 + 3 + 5 + 8 = 18.$'
```

```quiz
type: choice
question: 'Không đặt phép chia, số 1540 có chia hết cho 5 không? Vì sao?'
options:
  - 'Không, vì là số có 4 chữ số'
  - 'Có, vì có chữ số tận cùng là 0'
  - 'Không, vì tổng các chữ số là 10'
  - 'Có, vì chứa chữ số 5 ở hàng trăm'
answer: 2
explanation: 'Các số có chữ số tận cùng là 0 hoặc 5 đều chia hết cho 5, do đó 1540 chia hết cho 5.'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Điền kí hiệu thích hợp:
a) $55\ \vdots\ 5$ (vì $55 : 5 = 11$).
b) $36 \not\vdots\ 5$ (vì $36 : 5 = 7$ dư $1$).
c) $74\ \vdots\ 2$ (vì $74 : 2 = 37$).

**Câu 2.**
a) Tổng $54 + 42$ chia hết cho $6$ vì $54\ \vdots\ 6$ và $42\ \vdots\ 6.$
b) Tổng $60 + 17$ không chia hết cho $5$ vì $60\ \vdots\ 5$ nhưng $17 \not\vdots\ 5.$

**Câu 3.** Viết mỗi số thành tổng giá trị các chữ số theo hàng:
a) $708 = 7 \cdot 100 + 0 \cdot 10 + 8.$
b) $2564 = 2 \cdot 1000 + 5 \cdot 100 + 6 \cdot 10 + 4.$

**Câu 4.** Tính tổng các chữ số:
a) $453$: $4 + 5 + 3 = 12.$
b) $2358$: $2 + 3 + 5 + 8 = 18.$
c) $3042$: $3 + 0 + 4 + 2 = 9.$

**Câu 5.** Số $1540$ có tận cùng là chữ số $0$, tương tự như các số tròn chục $10; 20; 30; \dots$ đều chia hết cho $5.$ Đây chính là dấu hiệu chia hết cho $5$ mà chúng ta sẽ tìm hiểu ngay dưới đây.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Dấu hiệu chia hết cho 2, cho 5

> **Dấu hiệu chia hết cho 2, cho 5 (Quan sát chữ số tận cùng):**
> - **Chia hết cho 2:** Các số có chữ số tận cùng là **$0; 2; 4; 6; 8$** (chữ số chẵn) thì chia hết cho $2,$ và chỉ những số đó mới chia hết cho $2.$
> - **Chia hết cho 5:** Các số có chữ số tận cùng là **$0$ hoặc $5$** thì chia hết cho $5,$ và chỉ những số đó mới chia hết cho $5.$
> - **Chia hết cho cả 2 và 5:** Các số có chữ số tận cùng là **$0$** thì chia hết cho cả $2$ và $5.$

**Ví dụ 1:** Trong các số $136;\; 385;\; 1290;\; 2027$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

Chỉ cần xét chữ số tận cùng của từng số:
a) $136$ tận cùng là $6$ và $1290$ tận cùng là $0$ (đều là chữ số chẵn) nên $136\ \vdots\ 2$ và $1290\ \vdots\ 2.$
Còn $385$ tận cùng $5$ và $2027$ tận cùng $7$ nên $385 \not\vdots\ 2$ và $2027 \not\vdots\ 2.$

b) $385$ tận cùng là $5$ và $1290$ tận cùng là $0$ nên $385\ \vdots\ 5$ và $1290\ \vdots\ 5.$

c) Chỉ có số $1290$ tận cùng là $0$ nên $1290$ chia hết cho cả $2$ và $5.$

</details>

---

### 2. Dấu hiệu chia hết cho 9, cho 3

> **Dấu hiệu chia hết cho 9, cho 3 (Tính tổng các chữ số):**
> - **Chia hết cho 9:** Các số có **tổng các chữ số chia hết cho 9** thì chia hết cho $9,$ và chỉ những số đó mới chia hết cho $9.$
> - **Chia hết cho 3:** Các số có **tổng các chữ số chia hết cho 3** thì chia hết cho $3,$ và chỉ những số đó mới chia hết cho $3.$

> [!IMPORTANT] Mối quan hệ giữa chia hết cho 9 và chia hết cho 3:
> - Vì $9\ \vdots\ 3$ nên **mọi số chia hết cho 9 đều chia hết cho 3**.
> - Chiều ngược lại **không đúng**: Một số chia hết cho $3$ chưa chắc đã chia hết cho $9$ (ví dụ: số $15$ có tổng các chữ số là $1 + 5 = 6\ \vdots\ 3 \implies 15\ \vdots\ 3,$ nhưng $15 \not\vdots\ 9$).

**Ví dụ 2:** Trong các số $324;\; 642;\; 805$: Số nào chia hết cho $3?$ Số nào chia hết cho $9?$ Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

Tính tổng các chữ số của từng số:
- Số $324$ có tổng các chữ số: $3 + 2 + 4 = 9.$ Vì $9\ \vdots\ 9$ nên $324\ \vdots\ 9,$ do đó $324$ cũng chia hết cho $3.$
- Số $642$ có tổng các chữ số: $6 + 4 + 2 = 12.$ Vì $12\ \vdots\ 3$ nhưng $12 \not\vdots\ 9$ nên $642\ \vdots\ 3$ và $642 \not\vdots\ 9.$
- Số $805$ có tổng các chữ số: $8 + 0 + 5 = 13.$ Vì $13 \not\vdots\ 3$ nên $805 \not\vdots\ 3$ và $805 \not\vdots\ 9.$

**Kết luận:**
- Chia hết cho $3$: $324$ và $642.$
- Chia hết cho $9$: $324.$
- Chia hết cho $3$ mà không chia hết cho $9$: $642.$

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
| Nhầm dấu hiệu cho $3, 9$ với chữ số tận cùng: *"Số 23 tận cùng là 3 nên chia hết cho 3"* | $23$ có tổng chữ số $2 + 3 = 5 \not\vdots\ 3 \implies 23 \not\vdots\ 3$ | Dấu hiệu cho $3$ và $9$ bắt buộc phải tính **tổng các chữ số**, không xét chữ số tận cùng. Ngược lại, $51$ tận cùng $1$ nhưng $5 + 1 = 6\ \vdots\ 3 \implies 51\ \vdots\ 3.$ |
| Nhầm lẫn hai chiều giữa $3$ và $9$: *"Số chia hết cho 3 thì chia hết cho 9"* | Số chia hết cho $9$ thì chia hết cho $3$; chiều ngược lại không đúng | Ví dụ: $24\ \vdots\ 3$ nhưng $24 \not\vdots\ 9.$ |
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
Trong các số sau: $90;\; 35;\; 115;\; 420;\; 621;\; 144;\; 84;\; 2016;\; 2034$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$
d) Số nào chia hết cho $3?$
e) Số nào chia hết cho $9?$
f) Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) Các số có chữ số tận cùng là số chẵn: $90;\; 420;\; 144;\; 84;\; 2016;\; 2034.$
b) Các số có chữ số tận cùng là $0$ hoặc $5$: $90;\; 35;\; 115;\; 420.$
c) Các số có chữ số tận cùng là $0$: $90;\; 420.$
d) Tổng các chữ số của các số lần lượt là:
- $90 \to 9$
- $35 \to 8$ (không chia hết cho 3)
- $115 \to 7$ (không chia hết cho 3)
- $420 \to 6$
- $621 \to 9$
- $144 \to 9$
- $84 \to 12$
- $2016 \to 9$
- $2034 \to 9$
Các số chia hết cho $3$ là: $90;\; 420;\; 621;\; 144;\; 84;\; 2016;\; 2034.$
e) Các số có tổng các chữ số chia hết cho $9$: $90;\; 621;\; 144;\; 2016;\; 2034.$
f) Các số chia hết cho $3$ mà không chia hết cho $9$ (tổng chữ số bằng $6$ hoặc $12$): $420;\; 84.$

</details>

#### Luyện tập 1.2
Trong các số sau: $40;\; 85;\; 306;\; 603;\; 714;\; 303;\; 93;\; 2019;\; 2043$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$
d) Số nào chia hết cho $3?$
e) Số nào chia hết cho $9?$
f) Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) Tận cùng chẵn: $40;\; 306;\; 714.$
b) Tận cùng $0$ hoặc $5$: $40;\; 85.$
c) Tận cùng $0$: $40.$
d) Tổng các chữ số lần lượt là: $4;\; 13;\; 9;\; 9;\; 12;\; 6;\; 12;\; 12;\; 9.$
Các số chia hết cho $3$ là: $306;\; 603;\; 714;\; 303;\; 93;\; 2019;\; 2043.$
e) Tổng các chữ số bằng $9$: $306;\; 603;\; 2043.$
f) Chia hết cho $3$ mà không chia hết cho $9$: $714;\; 303;\; 93;\; 2019.$

</details>

#### Luyện tập 1.3
Cho các số: $1220;\; 1845;\; 2376;\; 3285;\; 5820.$ Tìm:
a) Số chia hết cho $2$ mà không chia hết cho $5;$
b) Số chia hết cho cả $5$ và $9;$
c) Số chia hết cho cả $2;\; 3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

Tổng các chữ số:
- $1220 \to 5$ (tận cùng 0)
- $1845 \to 18$ (tận cùng 5)
- $2376 \to 18$ (tận cùng 6)
- $3285 \to 18$ (tận cùng 5)
- $5820 \to 15$ (tận cùng 0)

a) Số chia hết cho $2$ mà không chia hết cho $5$ (tận cùng là số chẵn khác $0$): Chỉ có số $2376.$
b) Số chia hết cho cả $5$ và $9$ (tận cùng là $0$ hoặc $5$ và tổng chữ số chia hết cho $9$): Gồm $1845$ và $3285.$
c) Số chia hết cho cả $2;\; 3$ và $5$ (tận cùng là $0$ và tổng chữ số chia hết cho $3$): Chỉ có số $5820.$

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
a) $A = 114 + 26;$
b) $B = 175 + 40;$
c) $C = 129 + 31 + 180;$
d) $D = 2025 + 63 - 38.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) 
- Chia hết cho $2$: Vì $114\ \vdots\ 2$ và $26\ \vdots\ 2$ nên $A\ \vdots\ 2.$
- Chia hết cho $5$: Vì $114$ và $26$ đều không chia hết cho $5,$ ta xét tổng: $A = 114 + 26 = 140$ (tận cùng là $0$) nên $A\ \vdots\ 5.$

b) 
- Chia hết cho $2$: Vì $175 \not\vdots\ 2$ nhưng $40\ \vdots\ 2$ nên $B \not\vdots\ 2.$
- Chia hết cho $5$: Vì $175\ \vdots\ 5$ và $40\ \vdots\ 5$ nên $B\ \vdots\ 5.$

c) 
- Chia hết cho $2$: Nhóm $129 + 31 = 160\ \vdots\ 2$ và $180\ \vdots\ 2$ nên $C\ \vdots\ 2.$
- Chia hết cho $5$: Nhóm $129 + 31 = 160\ \vdots\ 5$ và $180\ \vdots\ 5$ nên $C\ \vdots\ 5.$

d) Tính $D = 2025 + 63 - 38 = 2050.$
Số $2050$ có tận cùng là chữ số $0$ nên $D$ chia hết cho cả $2$ và $5.$

</details>

#### Luyện tập 2.2
Các tổng sau có chia hết cho $3,$ có chia hết cho $9$ không? Tại sao?
a) $A = 126 + 36;$
b) $B = 141 + 432;$
c) $C = 135 + 504 + 43;$
d) $D = 603 + 201 + 6.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) 
- Số $126$ có tổng chữ số là $9\ \vdots\ 9$ và $36\ \vdots\ 9$ nên $A\ \vdots\ 9,$ kéo theo $A\ \vdots\ 3.$

b) 
- Số $141$ có tổng chữ số $6\ \vdots\ 3;$ số $432$ có tổng chữ số $9\ \vdots\ 3 \implies B\ \vdots\ 3.$
- Tuy nhiên $141 \not\vdots\ 9$ trong khi $432\ \vdots\ 9$ nên $B \not\vdots\ 9.$

c) 
- Các số $135$ và $504$ đều có tổng chữ số là $9$ nên chia hết cho cả $3$ và $9.$
- Số $43$ có tổng chữ số là $7 \not\vdots\ 3$ và $\not\vdots\ 9.$
Do đó $C \not\vdots\ 3$ và $C \not\vdots\ 9.$

d) 
- Các số $603;\; 201;\; 6$ đều chia hết cho $3$ nên $D\ \vdots\ 3.$
- Với số $9$: Ta có $603\ \vdots\ 9$ (tổng chữ số 9). Nhóm $201 + 6 = 207$ có tổng chữ số là $9\ \vdots\ 9.$
Do đó $D = 603 + 207\ \vdots\ 9.$

</details>

#### Luyện tập 2.3
Các tổng sau có chia hết cho $3,$ có chia hết cho $9$ không? Tại sao?
a) $A = 153 + 45;$
b) $B = 231 + 846;$
c) $C = 702 + 54 + 37;$
d) $D = 513 + 104 + 1.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Cả $153$ (tổng 9) và $45$ (tổng 9) đều chia hết cho $9$ nên $A\ \vdots\ 9$ và $A\ \vdots\ 3.$
b) $231$ (tổng 6) chia hết cho $3$ nhưng không chia hết cho $9;$ $846$ (tổng 18) chia hết cho $9.$ Do đó $B\ \vdots\ 3$ nhưng $B \not\vdots\ 9.$
c) $702$ và $54$ đều chia hết cho $3$ và cho $9;$ còn $37$ (tổng 10) không chia hết cho $3.$ Vậy $C \not\vdots\ 3$ và $C \not\vdots\ 9.$
d) Nhóm $104 + 1 = 105$ có tổng chữ số $6\ \vdots\ 3$ nhưng $105 \not\vdots\ 9.$ Số $513$ (tổng 9) chia hết cho $9$ và cho $3.$ Vậy $D = 513 + 105\ \vdots\ 3$ nhưng $D \not\vdots\ 9.$

</details>

---

### Dạng 3. Lập số chia hết từ các chữ số cho trước

**Phương pháp giải:**
- Chia hết cho 2 hoặc 5: Chọn chữ số tận cùng trước.
- Chia hết cho 3 hoặc 9: Tìm các bộ gồm các chữ số có tổng chia hết cho 3 (hoặc 9) trước, sau đó hoán vị các vị trí.
- **Chú ý:** Chữ số $0$ không được đứng ở hàng đầu tiên (hàng cao nhất).

#### Luyện tập 3.1
Từ các chữ số $2;\; 3;\; 4;\; 5,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Chia hết cho $2$: Chữ số tận cùng phải là $2$ hoặc $4.$
- Tận cùng là $2$: Chọn hai chữ số đầu từ $\{3; 4; 5\}$ được $342;\; 352;\; 432;\; 452;\; 532;\; 542$ ($6$ số).
- Tận cùng là $4$: Chọn hai chữ số đầu từ $\{2; 3; 5\}$ được $234;\; 254;\; 324;\; 354;\; 524;\; 534$ ($6$ số).
Tổng cộng có $12$ số.

b) Chia hết cho $5$: Chữ số tận cùng phải là $5.$ Chọn hai chữ số đầu trong $\{2; 3; 4\}$:
Ta được: $235;\; 245;\; 325;\; 345;\; 425;\; 435$ ($6$ số).

c) Chia hết cho $9$: Tổng 3 chữ số phải chia hết cho $9.$
Xét các bộ ba chữ số:
- $\{2; 3; 4\} \to 9$ (thỏa mãn)
- $\{2; 3; 5\} \to 10$
- $\{2; 4; 5\} \to 11$
- $\{3; 4; 5\} \to 12$
Chỉ có bộ $\{2; 3; 4\}$ thỏa mãn. Hoán vị 3 chữ số này được: $234;\; 243;\; 324;\; 342;\; 423;\; 432$ ($6$ số).

d) Chia hết cho cả $3$ và $5$: Tận cùng phải là $5$ và tổng 3 chữ số chia hết cho $3.$
Bộ $\{3; 4; 5\}$ có tổng bằng $12\ \vdots\ 3$ và chứa chữ số $5.$
Cố định chữ số tận cùng là $5,$ ta được $2$ số: $345$ và $435.$

</details>

#### Luyện tập 3.2
Từ các chữ số $0;\; 2;\; 5;\; 7,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) Chia hết cho $2$: Chữ số tận cùng là $0$ hoặc $2.$
- Tận cùng là $0$: $250;\; 270;\; 520;\; 570;\; 720;\; 750$ ($6$ số).
- Tận cùng là $2$ (chữ số đầu khác 0): $502;\; 572;\; 702;\; 752$ ($4$ số).
Tổng cộng có $10$ số.

b) Chia hết cho $5$: Chữ số tận cùng là $0$ hoặc $5.$
- Tận cùng là $0$: $6$ số như câu a.
- Tận cùng là $5$ (chữ số đầu khác 0): $205;\; 275;\; 705;\; 725$ ($4$ số).
Tổng cộng có $10$ số.

c) Chia hết cho $9$: Tổng ba chữ số chia hết cho $9.$ Chỉ có bộ $\{0; 2; 7\}$ (tổng bằng 9).
Bỏ các số bắt đầu bằng $0,$ ta lập được $4$ số: $207;\; 270;\; 702;\; 720.$

d) Chia hết cho cả $3$ và $5$:
- Bộ $\{0; 2; 7\}$ (tổng 9): Tận cùng $0$ được $270;\; 720.$
Vậy có $2$ số thỏa mãn: $270$ và $720.$

</details>

#### Luyện tập 3.3
Từ các chữ số $0;\; 1;\; 3;\; 5,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho cả $2$ và $5;$
b) Chia hết cho $9;$
c) Chia hết cho $3$ mà không chia hết cho $9.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

a) Chia hết cho cả $2$ và $5$: Tận cùng phải là chữ số $0.$ Hai chữ số đầu chọn từ $\{1; 3; 5\}$:
Ta được: $130;\; 150;\; 310;\; 350;\; 510;\; 530$ ($6$ số).

b) Chia hết cho $9$: Bộ ba có tổng chia hết cho $9$ chỉ có $\{1; 3; 5\}$ (tổng bằng 9).
Ta được: $135;\; 153;\; 315;\; 351;\; 513;\; 531$ ($6$ số).

c) Chia hết cho $3$ mà không chia hết cho $9$: Tổng chia hết cho $3$ nhưng không chia hết cho $9.$ Chỉ có bộ $\{0; 1; 5\}$ (tổng bằng 6).
Loại các số có $0$ đứng đầu, ta được $4$ số: $105;\; 150;\; 501;\; 510.$

</details>

---

### Dạng 4. Tìm chữ số chưa biết thoả mãn điều kiện chia hết

**Phương pháp giải:**
- Nếu số có chứa chữ số tận cùng $y$ và chữ số khác $x$:
  - Bước 1: Dùng dấu hiệu chia hết cho 5 hoặc cho 2 để tìm các khả năng của chữ số tận cùng $y.$
  - Bước 2: Với mỗi trường hợp của $y,$ tính tổng các chữ số rồi dùng dấu hiệu chia hết cho 9 (hoặc cho 3) để tìm chữ số $x.$
  - Chú ý: $0 \le x, y \le 9;$ nếu chữ số đứng ở đầu tiên thì phải khác $0.$

#### Luyện tập 4.1
Tìm chữ số $x$ để số $A = \overline{45x}$:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

Tổng các chữ số của $A$ là: $4 + 5 + x = 9 + x.$
a) $A\ \vdots\ 2 \iff x \in \{0; 2; 4; 6; 8\}.$
b) $A\ \vdots\ 5 \iff x \in \{0; 5\}.$
c) $A\ \vdots\ 9 \iff (9 + x)\ \vdots\ 9 \iff x \in \{0; 9\}.$
d) $A\ \vdots\ 3 \iff (9 + x)\ \vdots\ 3 \iff x\ \vdots\ 3 \iff x \in \{0; 3; 6; 9\}.$

</details>

#### Luyện tập 4.2
Tìm các chữ số $x, y$ để số $A = \overline{2x7y}$:
a) Chia hết cho cả $9$ và $5;$
b) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

Tổng các chữ số của $A$ là: $2 + x + 7 + y = 9 + x + y.$
Vì $A\ \vdots\ 5$ nên $y \in \{0; 5\}.$

a) Để $A\ \vdots\ 9$:
- Trường hợp 1: $y = 0 \implies (9 + x + 0)\ \vdots\ 9 \implies x \in \{0; 9\}.$ Ta có các số $2070;\; 2970.$
- Trường hợp 2: $y = 5 \implies (9 + x + 5)\ \vdots\ 9 \implies (14 + x)\ \vdots\ 9 \implies x = 4.$ Ta có số $2475.$
Vậy các cặp $(x; y)$ thỏa mãn là: $(0; 0);\; (9; 0);\; (4; 5).$

b) Để $A\ \vdots\ 3$:
- Trường hợp 1: $y = 0 \implies (9 + x)\ \vdots\ 3 \implies x \in \{0; 3; 6; 9\}.$
- Trường hợp 2: $y = 5 \implies (14 + x)\ \vdots\ 3 \implies x \in \{1; 4; 7\}.$
Vậy có $7$ cặp $(x; y)$ thỏa mãn: $(0; 0);\; (3; 0);\; (6; 0);\; (9; 0);\; (1; 5);\; (4; 5);\; (7; 5).$

</details>

#### Luyện tập 4.3
Tìm các chữ số $x, y$ để số $A = \overline{5x3y}$:
a) Chia hết cho cả $9$ và $5;$
b) Chia hết cho cả $3$ và $5.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

Tổng các chữ số: $5 + x + 3 + y = 8 + x + y.$
Vì $A\ \vdots\ 5$ nên $y \in \{0; 5\}.$

a) Để $A\ \vdots\ 9$:
- Với $y = 0 \implies (8 + x)\ \vdots\ 9 \implies x = 1$ (số $5130$).
- Với $y = 5 \implies (13 + x)\ \vdots\ 9 \implies x = 5$ (số $5535$).
Vậy $(x; y) \in \{(1; 0);\; (5; 5)\}.$

b) Để $A\ \vdots\ 3$:
- Với $y = 0 \implies (8 + x)\ \vdots\ 3 \implies x \in \{1; 4; 7\}$ (các số $5130;\; 5430;\; 5730$).
- Với $y = 5 \implies (13 + x)\ \vdots\ 3 \implies x \in \{2; 5; 8\}$ (các số $5235;\; 5535;\; 5835$).
Vậy có $6$ cặp $(x; y)$ thỏa mãn như trên.

</details>

---

### Dạng 5. Bài toán thực tế về dấu hiệu chia hết

**Phương pháp giải:**
- Chuyển đổi dữ kiện đề bài thành quan hệ chia hết: "chia đều thành nhóm $k$ người" $\implies$ tổng số người phải chia hết cho $k.$
- Liệt kê các số trong khoảng cho trước thỏa mãn dấu hiệu chặt chẽ nhất (chia hết cho cả 2 và 5 $\implies$ tận cùng 0, hoặc chia hết cho 9), sau đó kiểm tra các điều kiện còn lại.

#### Luyện tập 5.1
Đội văn nghệ của trường cần một số lượng học sinh trong khoảng từ $32$ đến $38$ người, sao cho có thể chia đều thành các nhóm có $4$ hoặc $6$ học sinh. Hãy tìm số lượng học sinh của đội văn nghệ.

<details>
<summary><strong>Xem lời giải Luyện tập 5.1</strong></summary>

Số học sinh phải chia hết cho cả $4$ và $6.$
Trong khoảng từ $32$ đến $38,$ số chia hết cho $6$ là số $36.$
Kiểm tra: $36 = 4 \cdot 9$ nên $36\ \vdots\ 4.$
Vậy đội văn nghệ có đúng $36$ học sinh.

</details>

#### Luyện tập 5.2
Trong một chương trình thiện nguyện, ban tổ chức cần lập một đoàn tình nguyện viên với số lượng trong khoảng từ $80$ đến $100$ người. Ban tổ chức muốn số lượng tình nguyện viên có thể chia đều thành các nhóm $5,$ nhóm $6$ hoặc nhóm $9$ người. Hỏi đoàn thiện nguyện cần có bao nhiêu người?

<details>
<summary><strong>Xem lời giải Luyện tập 5.2</strong></summary>

Số người phải chia hết cho cả $5;\; 6$ và $9.$
- Trong khoảng từ $80$ đến $100,$ các số chia hết cho $9$ là: $81;\; 90;\; 99.$
- Trong 3 số này, số chia hết cho $5$ (tận cùng là $0$ hoặc $5$) chỉ có duy nhất số $90.$
- Kiểm tra lại: $90 = 6 \cdot 15\ \vdots\ 6$ (thỏa mãn).
Vậy đoàn thiện nguyện cần đúng $90$ người.

</details>

#### Luyện tập 5.3
Số học sinh khối 6 của một trường nằm trong khoảng từ $430$ đến $460$ em. Khi xếp thành hàng 2, hàng 5 hay hàng 9 đều vừa đủ, không thừa bạn nào. Hỏi khối 6 của trường đó có bao nhiêu học sinh?

<details>
<summary><strong>Xem lời giải Luyện tập 5.3</strong></summary>

Số học sinh chia hết cho cả $2$ và $5$ nên chữ số tận cùng phải là $0.$
Trong khoảng từ $430$ đến $460,$ các số có tận cùng bằng $0$ là: $440;\; 450.$
Kiểm tra điều kiện chia hết cho $9$:
- $440$ có tổng các chữ số là: $4 + 4 + 0 = 8 \not\vdots\ 9.$
- $450$ có tổng các chữ số là: $4 + 5 + 0 = 9\ \vdots\ 9.$
Vậy khối 6 của trường đó có đúng $450$ học sinh.

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Trong các số sau: $50;\; 85;\; 312;\; 144;\; 2016;\; 2043$:
a) Số nào chia hết cho $2?$
b) Số nào chia hết cho $5?$
c) Số nào chia hết cho cả $2$ và $5?$
d) Số nào chia hết cho $3?$
e) Số nào chia hết cho $9?$
f) Số nào chia hết cho $3$ mà không chia hết cho $9?$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

Tổng các chữ số của từng số: $50 \to 5;\; 85 \to 13;\; 312 \to 6;\; 144 \to 9;\; 2016 \to 9;\; 2043 \to 9.$
a) Chia hết cho $2$: $50;\; 312;\; 144;\; 2016.$
b) Chia hết cho $5$: $50;\; 85.$
c) Chia hết cho cả $2$ và $5$: $50.$
d) Chia hết cho $3$: $312;\; 144;\; 2016;\; 2043.$
e) Chia hết cho $9$: $144;\; 2016;\; 2043.$
f) Chia hết cho $3$ mà không chia hết cho $9$: $312.$

</details>

### Bài 2
Xét tính chia hết của các tổng sau:
a) Tổng $A = 315 + 180$ có chia hết cho $2,$ cho $5$ không?
b) Tổng $B = 315 + 54 + 21$ có chia hết cho $3,$ cho $9$ không?

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

a) 
- Vì $315 \not\vdots\ 2$ (số lẻ) nhưng $180\ \vdots\ 2$ nên $A \not\vdots\ 2.$
- Vì cả $315$ và $180$ đều có chữ số tận cùng là $5$ hoặc $0$ nên $315\ \vdots\ 5$ và $180\ \vdots\ 5 \implies A\ \vdots\ 5.$

b) 
- Tổng các chữ số: $315 \to 9\ \vdots\ 3;\; 54 \to 9\ \vdots\ 3;\; 21 \to 3\ \vdots\ 3 \implies B\ \vdots\ 3.$
- Với số $9$: $315\ \vdots\ 9$ và $54\ \vdots\ 9,$ nhưng $21 \not\vdots\ 9$ nên $B \not\vdots\ 9.$

</details>

### Bài 3
Các tổng (hiệu) sau có chia hết cho $2,$ có chia hết cho $5$ hay không? Tại sao?
a) $A = 86 + 44;$
b) $B = 185 + 50;$
c) $C = 138 + 32 + 120;$
d) $D = 2035 + 55 - 60.$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) Cả $86$ và $44$ đều chẵn nên $A\ \vdots\ 2.$ Tính $A = 130$ (tận cùng 0) nên $A\ \vdots\ 5.$
b) $185 \not\vdots\ 2$ nhưng $50\ \vdots\ 2 \implies B \not\vdots\ 2.$ Cả hai số đều chia hết cho $5 \implies B\ \vdots\ 5.$
c) Cả ba số đều là số chẵn nên $C\ \vdots\ 2.$ Nhóm $138 + 32 = 170\ \vdots\ 5$ và $120\ \vdots\ 5 \implies C\ \vdots\ 5.$
d) Cả ba số đều có tận cùng là $0$ hoặc $5$ nên $D\ \vdots\ 5.$ Nhóm $2035 + 55 = 2090\ \vdots\ 2$ và $60\ \vdots\ 2 \implies D\ \vdots\ 2.$

</details>

### Bài 4
Từ các chữ số $0;\; 3;\; 5;\; 6,$ hãy lập tất cả các số có 3 chữ số khác nhau:
a) Chia hết cho cả $2$ và $5;$
b) Chia hết cho $9;$
c) Chia hết cho cả $5$ và $9.$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) Tận cùng phải là chữ số $0.$ Hai chữ số đầu chọn từ $\{3; 5; 6\}$:
Ta được: $350;\; 360;\; 530;\; 560;\; 630;\; 650$ ($6$ số).

b) Bộ ba chữ số có tổng chia hết cho $9$ chỉ có $\{0; 3; 6\}$ (tổng bằng 9).
Loại các số có chữ số $0$ đứng đầu, ta được $4$ số: $306;\; 360;\; 603;\; 630.$

c) Trong các số ở câu b, các số có tận cùng là $0$ hoặc $5$ là: $360;\; 630.$

</details>

### Bài 5
Tìm chữ số $x$ để số $A = \overline{52x}$:
a) Chia hết cho $2;$
b) Chia hết cho $5;$
c) Chia hết cho $9;$
d) Chia hết cho $3.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

Tổng các chữ số của $A$ là: $5 + 2 + x = 7 + x.$
a) $A\ \vdots\ 2 \implies x \in \{0; 2; 4; 6; 8\}.$
b) $A\ \vdots\ 5 \implies x \in \{0; 5\}.$
c) $A\ \vdots\ 9 \implies (7 + x)\ \vdots\ 9 \implies x = 2.$
d) $A\ \vdots\ 3 \implies (7 + x)\ \vdots\ 3 \implies x \in \{2; 5; 8\}.$

</details>

### Bài 6
Tìm các chữ số $x, y$ để số $B = \overline{x27y}$:
a) Chia hết cho cả $2$ và $5;$
b) Chia hết cho cả $9$ và $5.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

Lưu ý: $x$ là chữ số hàng nghìn nên $x \neq 0.$
a) Chia hết cho cả $2$ và $5 \implies y = 0.$ Khi đó $x$ tùy ý từ $1$ đến $9.$ Ta được $9$ số: $1270;\; 2270;\; \dots;\; 9270.$
b) $B\ \vdots\ 5 \implies y \in \{0; 5\}.$ Tổng các chữ số: $x + 2 + 7 + y = x + 9 + y.$
- Với $y = 0 \implies (x + 9)\ \vdots\ 9 \implies x = 9$ (vì $x \neq 0$). Ta được số $9270.$
- Với $y = 5 \implies (x + 14)\ \vdots\ 9 \implies x = 4.$ Ta được số $4275.$
Vậy $(x; y) \in \{(9; 0);\; (4; 5)\}.$

</details>

### Bài 7
Bạn An nói: *"Một số có tổng các chữ số chia hết cho 3 thì số đó cũng chia hết cho 9."* Theo em, bạn An nói đúng hay sai? Nếu sai, hãy nêu một ví dụ để giải thích và sửa lại phát biểu cho đúng.

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

Bạn An nói **sai**.
*Ví dụ:* Số $21$ có tổng các chữ số là $2 + 1 = 3\ \vdots\ 3,$ nhưng $21 \not\vdots\ 9.$
**Sửa lại cho đúng:** *"Một số có tổng các chữ số chia hết cho 9 thì số đó cũng chia hết cho 3."*

</details>

### Bài 8
Một trang trại thu hoạch được số trứng gà trong khoảng từ $70$ đến $80$ quả. Số trứng này xếp vừa khít vào các vỉ $2$ quả, và cũng chia đều được vào $9$ hộp như nhau. Hỏi trang trại thu hoạch được bao nhiêu quả trứng?

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

Số trứng chia hết cho cả $2$ và $9.$
Trong khoảng từ $70$ đến $80,$ số chia hết cho $9$ duy nhất là $72$ (vì $7 + 2 = 9$).
Số $72$ có chữ số tận cùng là $2$ nên $72\ \vdots\ 2$ (thỏa mãn).
Vậy trang trại thu hoạch được đúng $72$ quả trứng.

</details>

### Bài 9
Tìm các chữ số $x, y$ để số $\overline{x63y}$ chia hết cho cả $2;\; 5$ và $9.$

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

- Chia hết cho cả $2$ và $5 \implies y = 0.$
- Khi đó số có dạng $\overline{x630}.$ Tổng các chữ số là: $x + 6 + 3 + 0 = x + 9.$
Để số chia hết cho $9$ thì $(x + 9)\ \vdots\ 9 \implies x \in \{0; 9\}.$
Vì $x$ là chữ số đầu tiên nên $x \neq 0 \implies x = 9.$
Vậy $x = 9;\; y = 0$ (số $9630$).

</details>

### Bài 10
Tìm số tự nhiên lớn nhất có ba chữ số khác nhau chia hết cho cả $2;\; 3$ và $5.$

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

Số chia hết cho cả $2$ và $5$ nên có chữ số tận cùng là $0.$
Để số là lớn nhất có ba chữ số khác nhau, ta chọn chữ số hàng trăm lớn nhất là $9.$
Số có dạng $\overline{9a0}$ với $a \neq 9, a \neq 0.$
Tổng các chữ số: $9 + a + 0 = 9 + a.$
Để số chia hết cho $3$ thì $(9 + a)\ \vdots\ 3 \implies a\ \vdots\ 3.$
Vì $a \in \{0; 1; 2; \dots; 8\}$ và $a \neq 0$ nên $a \in \{3; 6\}.$
Để số lớn nhất ta chọn $a = 6.$
Vậy số tự nhiên lớn nhất cần tìm là $960.$

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
  - '350'
  - '425'
answer: 3
explanation: 'Số chia hết cho cả 2 và 5 phải có chữ số tận cùng là 0. Do đó 350 là đáp án đúng.'
```

```quiz
type: choice
question: 'Trong các số sau, số nào chia hết cho 3 mà không chia hết cho 9?'
options:
  - '234'
  - '405'
  - '1278'
  - '2154'
answer: 4
explanation: 'Số 2154 có tổng các chữ số là $2 + 1 + 5 + 4 = 12.$ Vì $12\ \vdots\ 3$ nhưng $12 \not\vdots\ 9$ nên 2154 chia hết cho 3 mà không chia hết cho 9.'
```

```quiz
type: choice
question: 'Lớp 6B có từ 50 đến 60 học sinh. Khi xếp hàng 2 hay hàng 9 đều vừa đủ. Hỏi lớp 6B có bao nhiêu bạn?'
options:
  - '52 bạn'
  - '54 bạn'
  - '56 bạn'
  - '58 bạn'
answer: 2
explanation: 'Số học sinh chia hết cho cả 2 và 9. Trong khoảng từ 50 đến 60, số chia hết cho 9 là 54; số 54 là số chẵn nên chia hết cho 2.'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 3.** Cho các số $324;\; 504;\; 740;\; 1368;\; 2154$:
- Tổng chữ số tương ứng: $9;\; 9;\; 11;\; 18;\; 12.$
a) Chia hết cho $2$: $324;\; 504;\; 740;\; 1368;\; 2154.$
b) Chia hết cho $5$: $740.$
c) Chia hết cho $9$: $324;\; 504;\; 1368.$
d) Chia hết cho $3$ mà không chia hết cho $9$: $2154.$

**Câu 4.**
- Số $1350$ có tổng chữ số là $9\ \vdots\ 9$ và $\vdots\ 3.$
- Số $4215$ có tổng chữ số là $12\ \vdots\ 3$ nhưng $\not\vdots\ 9.$
Vì cả hai số đều chia hết cho $3$ nên tổng chia hết cho $3.$ Tuy nhiên một số chia hết cho $9$, số kia không chia hết cho $9$ nên tổng không chia hết cho $9.$

**Câu 5.**
- Cả $2035$ và $515$ đều có tận cùng là $5$ nên hiệu chia hết cho $5.$
- Cả hai số đều có tổng chữ số không chia hết cho $9$ (tổng là $10$ và $11$). Hiệu là $2035 - 515 = 1520$ có tổng chữ số $8 \not\vdots\ 9.$

**Câu 6.** Từ các chữ số $0;\; 3;\; 6$:
a) Chia hết cho $2$: $360;\; 630;\; 306.$
b) Chia hết cho $5$: $360;\; 630.$
c) Tổng $0 + 3 + 6 = 9\ \vdots\ 9$ nên **mọi số có 3 chữ số khác nhau lập từ 3 chữ số này đều chia hết cho 9**.

**Câu 7.** Với số $A = \overline{53x}$ có tổng chữ số là $8 + x$:
a) $x \in \{0; 2; 4; 6; 8\}.$
b) $x \in \{0; 5\}.$
c) $(8 + x)\ \vdots\ 9 \implies x = 1.$
d) $(8 + x)\ \vdots\ 3 \implies x \in \{1; 4; 7\}.$

**Câu 8.** Số $\overline{4x2y}$ chia hết cho $5$ nên $y \in \{0; 5\}.$
Tổng các chữ số: $4 + x + 2 + y = 6 + x + y.$
- Với $y = 0 \implies (6 + x)\ \vdots\ 9 \implies x = 3$ (số $4320$).
- Với $y = 5 \implies (11 + x)\ \vdots\ 9 \implies x = 7$ (số $4725$).
Vậy $(x; y) \in \{(3; 0);\; (7; 5)\}.$

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Gọi $S$ là tổng của tất cả các số tự nhiên có ba chữ số từ $100$ đến $999.$ Hỏi $S$ chia hết cho những số nào trong các số $2;\; 5;\; 3;\; 9?$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Số các số hạng từ $100$ đến $999$ là:
$$999 - 100 + 1 = 900\text{ (số hạng)}.$$
Áp dụng công thức tính tổng dãy số cách đều:
$$S = \frac{(100 + 999) \cdot 900}{2} = 1099 \cdot 450 = 494550.$$
Xét tính chia hết của số $494550$:
- Chữ số tận cùng là $0$ nên $S\ \vdots\ 2$ và $S\ \vdots\ 5.$
- Tổng các chữ số là: $4 + 9 + 4 + 5 + 5 + 0 = 27.$
Vì $27\ \vdots\ 9$ nên $S\ \vdots\ 9$ và do đó $S\ \vdots\ 3.$

**Kết luận:** $S$ chia hết cho tất cả các số $2;\; 5;\; 3;\; 9.$

</details>

### Nâng cao 2
Dùng ba trong bốn chữ số $5;\; 7;\; 2;\; 0,$ hãy viết tất cả các số tự nhiên có ba chữ số chia hết cho tất cả các số $2;\; 5;\; 3;\; 9.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

- Số chia hết cho cả $2$ và $5$ nên chữ số tận cùng bắt buộc phải là $0.$
- Số chia hết cho cả $3$ và $9$ chỉ cần thỏa mãn điều kiện tổng các chữ số chia hết cho $9.$
Hai chữ số còn lại được chọn từ $\{5; 7; 2\}$ sao cho tổng của chúng chia hết cho $9$:
- $5 + 7 = 12 \not\vdots\ 9$
- $5 + 2 = 7 \not\vdots\ 9$
- $7 + 2 = 9\ \vdots\ 9$ (thỏa mãn)

Do đó hai chữ số đầu tiên phải là $7$ và $2.$
Các số tự nhiên thỏa mãn là: $720$ và $270.$

</details>

### Nâng cao 3
Tìm các chữ số $a, b$ để số $\overline{4a5b2}$ chia hết cho $9,$ biết rằng $a - b = 3.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

Tổng các chữ số của số đã cho là:
$$4 + a + 5 + b + 2 = 11 + a + b.$$
Để số đó chia hết cho $9$ thì $(11 + a + b)\ \vdots\ 9.$
Vì $a, b$ là các chữ số ($0 \le a, b \le 9$) nên $0 \le a + b \le 18.$
Do đó $11 \le 11 + a + b \le 29.$
Các bội của $9$ trong khoảng này là $18$ và $27$:
- **Trường hợp 1:** $11 + a + b = 18 \implies a + b = 7.$
  Kết hợp với $a - b = 3$:
  $$a = (7 + 3) : 2 = 5$$
  $$b = 5 - 3 = 2.$$
  Ta được số $45522$ (thử lại: $4 + 5 + 5 + 2 + 2 = 18\ \vdots\ 9$).

- **Trường hợp 2:** $11 + a + b = 27 \implies a + b = 16.$
  Kết hợp với $a - b = 3 \implies a = (16 + 3) : 2 = 9,5$ (loại vì $a$ phải là số tự nhiên).

Vậy $a = 5$ và $b = 2.$

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
Bạn Tùng viết mười số tự nhiên liên tiếp lên bảng, sau đó xoá đi một số thì tổng của chín số còn lại là $580.$ Hãy tìm số đã bị xoá.

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Gọi mười số tự nhiên liên tiếp là: $a;\; a + 1;\; a + 2;\; \dots;\; a + 9$ ($a \in \mathbb{N}$).
Tổng của cả mười số là:
$$S = 10a + (1 + 2 + \dots + 9) = 10a + 45.$$
Gọi số bị xoá là $a + b$ với $0 \le b \le 9.$
Tổng của chín số còn lại là:
$$(10a + 45) - (a + b) = 580$$
$$9a + 45 - b = 580$$
$$9a = 535 + b.$$

Nhận xét: Vế trái $9a\ \vdots\ 9,$ do đó vế phải $(535 + b)\ \vdots\ 9.$
Ta phân tích: $535 = 9 \cdot 59 + 4.$
Do đó $(535 + b)\ \vdots\ 9 \iff (4 + b)\ \vdots\ 9.$
Vì $0 \le b \le 9$ nên $4 \le 4 + b \le 13,$ suy ra $4 + b = 9 \implies b = 5.$
Khi $b = 5,$ ta có:
$$9a = 535 + 5 = 540 \implies a = 60.$$
Số bị xoá là:
$$a + b = 60 + 5 = 65.$$

**Thử lại:** Mười số liên tiếp là từ $60$ đến $69,$ tổng là $645.$
Bỏ số $65$ đi thì tổng còn lại là $645 - 65 = 580$ (hoàn toàn chính xác).
**Đáp số:** Số bị xoá là $65.$

</details>
