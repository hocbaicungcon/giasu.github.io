---
title: 'Toán 6 Bài 7: Thứ tự thực hiện các phép tính - Quy tắc, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 7 Thứ tự thực hiện các phép tính: biểu thức có/không có dấu ngoặc, biểu thức có chứa chữ, phương pháp tìm x và hệ thống bài tập trắc nghiệm, tự luận có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số tự nhiên
  - Thứ tự thực hiện phép tính
  - Biểu thức có dấu ngoặc
  - Kết nối tri thức
grade: 6
---

# Bài 7. Thứ tự thực hiện các phép tính

Khi một biểu thức gồm nhiều phép tính (cộng, trừ, nhân, chia, nâng lên luỹ thừa) hoặc chứa nhiều cặp dấu ngoặc lồng nhau, việc tuân thủ đúng **thứ tự thực hiện các phép tính** là bắt buộc để đảm bảo kết quả tính toán duy nhất và chính xác. Bài học này sẽ giúp các em nắm vững quy tắc ưu tiên thực hiện phép tính, kĩ năng mở ngoặc từ trong ra ngoài và phương pháp giải bài toán tìm $x$ một cách chuẩn xác.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy kiểm tra lại các kĩ năng tính toán luỹ thừa đã học ở Bài 6 qua các câu hỏi sau:

```quiz
type: choice
question: 'Tích $4 \cdot 4 \cdot 4 \cdot 4$ viết gọn dưới dạng luỹ thừa là:'
options:
  - '$4^3$'
  - '$4^4$'
  - '$16$'
  - '$4^5$'
answer: 2
explanation: 'Tích có 4 thừa số 4 nên $4 \cdot 4 \cdot 4 \cdot 4 = 4^4.$'
```

```quiz
type: choice
question: 'So sánh giá trị của hai số $2^4$ và $4^2$:'
options:
  - '$2^4 > 4^2$'
  - '$2^4 = 4^2$'
  - '$2^4 < 4^2$'
  - 'Không so sánh được'
answer: 2
explanation: 'Ta có $2^4 = 16$ và $4^2 = 16.$ Do đó $2^4 = 4^2.$'
```

```quiz
type: choice
question: 'Kết quả của phép tính luỹ thừa $2026^0$ bằng bao nhiêu?'
options:
  - '0'
  - '1'
  - '2026'
  - 'Không xác định'
answer: 2
explanation: 'Theo quy ước, với mọi số tự nhiên $a \neq 0$ thì $a^0 = 1.$ Do đó $2026^0 = 1.$'
```

```quiz
type: choice
question: 'Thực hiện phép tính $6^4 \cdot 6^3$ ta được kết quả là:'
options:
  - '$6^7$'
  - '$6^{12}$'
  - '$36^7$'
  - '$6^1$'
answer: 1
explanation: 'Giữ nguyên cơ số 6 và cộng các số mũ: $6^4 \cdot 6^3 = 6^{4+3} = 6^7.$'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Viết gọn mỗi tích thành một luỹ thừa:
a) $4 \cdot 4 \cdot 4 \cdot 4 = 4^4.$
b) $10 \cdot 10 \cdot 10 \cdot 10 = 10^4.$

**Câu 2.** Tính giá trị:
a) $3^3 = 27.$
b) $2^4 = 16.$
c) $5^2 = 25.$
d) $10^2 = 100.$

**Câu 3.** Viết kết quả dưới dạng một luỹ thừa:
a) $6^4 \cdot 6^3 = 6^{4+3} = 6^7.$
b) $7^9 : 7^4 = 7^{9-4} = 7^5.$

**Câu 4.** Tính giá trị:
a) $2026^0 = 1.$
b) $18^1 = 18.$
c) $1^{200} = 1.$

**Câu 5.** Vì $2^4 = 16$ và $4^2 = 16$ nên $2^4 = 4^2.$

</details>

---

## A. Lý thuyết trọng tâm

### 1. Biểu thức không có dấu ngoặc

> **Quy tắc 1:**
> - Nếu biểu thức chỉ có phép cộng và phép trừ (hoặc chỉ có phép nhân và phép chia), ta thực hiện các phép tính theo thứ tự **từ trái sang phải**.
> - Nếu biểu thức có cả các phép tính cộng, trừ, nhân, chia và nâng lên luỹ thừa, ta thực hiện theo thứ tự:
>   $$\text{Luỹ thừa} \longrightarrow \text{Nhân và chia} \longrightarrow \text{Cộng và trừ.}$$

**Ví dụ 1:**
a) Tính: $34 \cdot 68 + 32 \cdot 34 - 180.$
b) Tính: $6 \cdot 3^2 - 32 : 2^3.$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

a) Đặt thừa số chung $34$ để tính nhanh:
$$34 \cdot 68 + 32 \cdot 34 - 180 = 34 \cdot (68 + 32) - 180 = 34 \cdot 100 - 180 = 3400 - 180 = 3220.$$

b) Thực hiện luỹ thừa trước, rồi đến nhân, chia, cuối cùng là trừ:
$$6 \cdot 3^2 - 32 : 2^3 = 6 \cdot 9 - 32 : 8 = 54 - 4 = 50.$$

</details>

---

### 2. Biểu thức có dấu ngoặc

> **Quy tắc 2:**
> - Khi biểu thức có chứa các dấu ngoặc, ta thực hiện các phép tính **trong ngoặc trước, ngoài ngoặc sau**.
> - Nếu có nhiều loại dấu ngoặc lồng nhau, thứ tự mở ngoặc là **từ trong ra ngoài**:
>   $$( \ ) \longrightarrow [ \ ] \longrightarrow \{ \ \}.$$

**Ví dụ 2:**
a) Tính: $90 - [80 - (15 - 7)^2].$
b) Tính: $15 : \{300 : [400 - (150 + 25 \cdot 6)]\}.$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

a) Thực hiện trong ngoặc tròn $( \ )$ trước, rồi đến luỹ thừa, tiếp theo là ngoặc vuông $[ \ ]$, cuối cùng phép trừ ngoài cùng:
$$90 - [80 - (15 - 7)^2] = 90 - [80 - 8^2] = 90 - [80 - 64] = 90 - 16 = 74.$$

b) Mở lần lượt $( \ ) \to [ \ ] \to \{ \ \}$:
$$15 : \{300 : [400 - (150 + 25 \cdot 6)]\} = 15 : \{300 : [400 - (150 + 150)]\}$$
$$= 15 : \{300 : [400 - 300]\} = 15 : \{300 : 100\} = 15 : 3 = 5.$$

</details>

---

### 3. Biểu thức có chứa chữ

> **Phương pháp:**
> Để tính giá trị của một biểu thức có chứa chữ khi biết giá trị của các chữ, ta **thay giá trị đã cho của các chữ vào biểu thức** rồi thực hiện phép tính theo đúng thứ tự các phép tính.

**Ví dụ 3:** Tính giá trị của biểu thức $2 + 3(2a - b) + 4^2$ khi $a = 6;\; b = 3.$

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

Thay $a = 6$ và $b = 3$ vào biểu thức:
$$2 + 3(2 \cdot 6 - 3) + 4^2 = 2 + 3 \cdot (12 - 3) + 16 = 2 + 3 \cdot 9 + 16 = 2 + 27 + 16 = 45.$$

</details>

---

### 4. Những sai lầm học sinh rất hay gặp

| Sai lầm thường gặp | Sửa lại cho đúng | Giải thích quy tắc |
| :--- | :--- | :--- |
| Quên làm luỹ thừa trước: $3 \cdot 2^3 = 6^3 = 216$ | $3 \cdot 2^3 = 3 \cdot 8 = 24$ | Phải ưu tiên tính luỹ thừa $2^3 = 8$ trước, sau đó mới nhân với $3.$ |
| Bình phương một tổng = tổng bình phương: $(6 + 8)^2 = 6^2 + 8^2$ | $(6 + 8)^2 = 14^2 = 196 \neq 6^2 + 8^2 = 100$ | Phải cộng trong ngoặc trước $(6 + 8 = 14)$ rồi mới bình phương: $(a + b)^2 \neq a^2 + b^2.$ |
| Vội vã tính từ trái sang phải khi có ngoặc: $120 : (3 \cdot 4) = 40 \cdot 4 = 160$ | $120 : (3 \cdot 4) = 120 : 12 = 10$ | Có dấu ngoặc thì **trong ngoặc phải làm trước**. |
| Biểu thức chỉ có cộng và trừ nhưng cộng hết rồi mới trừ: $25 - 7 + 4 = 25 - 11 = 14$ | $25 - 7 + 4 = 18 + 4 = 22$ | Khi biểu thức chỉ có cộng và trừ, **bắt buộc thực hiện từ trái sang phải**. |
| Nhầm quy ước số mũ $0$: $2026^0 = 0$ | $2026^0 = 1$ | $a^0 = 1$ với mọi $a \neq 0.$ |

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Thực hiện phép tính theo thứ tự

**Phương pháp giải:**
- Biểu thức không ngoặc: $\text{Luỹ thừa} \to \text{Nhân, chia} \to \text{Cộng, trừ}.$
- Biểu thức có ngoặc: Trong ngoặc trước, ngoài ngoặc sau, mở theo thứ tự $( \ ) \to [ \ ] \to \{ \ \}.$
- Vận dụng tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng để tính nhanh nếu có thể.

#### Luyện tập 1.1
Thực hiện phép tính:
a) $3^2 \cdot 2^3 - 3 \cdot 2 \cdot 7;$
b) $3 \cdot 4^2 + 36 : 3^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) 
$$3^2 \cdot 2^3 - 3 \cdot 2 \cdot 7 = 9 \cdot 8 - 42 = 72 - 42 = 30.$$

b) 
$$3 \cdot 4^2 + 36 : 3^2 = 3 \cdot 16 + 36 : 9 = 48 + 4 = 52.$$

</details>

#### Luyện tập 1.2
Thực hiện phép tính:
a) $6^4 : 6^2 + 3^2 \cdot 4;$
b) $7^2 \cdot 35 + 65 \cdot 7^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) 
$$6^4 : 6^2 + 3^2 \cdot 4 = 6^{4-2} + 9 \cdot 4 = 36 + 36 = 72.$$

b) Đặt thừa số chung $7^2$:
$$7^2 \cdot 35 + 65 \cdot 7^2 = 7^2 \cdot (35 + 65) = 49 \cdot 100 = 4900.$$

</details>

#### Luyện tập 1.3
Tính giá trị các biểu thức có ngoặc lồng nhau:
a) $A = \{150 - [120 - (20 - 8)] : 2\} \cdot 4;$
b) $B = 42 : \{240 : [200 - (20 + 7 \cdot 20)]\}.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) Bóc ngoặc từ trong ra ngoài:
$$A = \{150 - [120 - 12] : 2\} \cdot 4 = \{150 - 108 : 2\} \cdot 4$$
$$A = \{150 - 54\} \cdot 4 = 96 \cdot 4 = 384.$$

b) Trong ngoặc tròn, nhân trước cộng sau: $20 + 7 \cdot 20 = 20 + 140 = 160.$
$$B = 42 : \{240 : [200 - 160]\} = 42 : \{240 : 40\} = 42 : 6 = 7.$$

</details>

---

### Dạng 2. Lập và tính giá trị biểu thức có chứa chữ

**Phương pháp giải:**
- Đọc kĩ đề để lập biểu thức toán học biểu thị mối liên hệ giữa các đại lượng (nếu đề bài chưa cho sẵn biểu thức).
- Thay giá trị của các chữ vào biểu thức và tính giá trị theo đúng thứ tự ưu tiên các phép tính.

#### Luyện tập 2.1
Tính giá trị của biểu thức:
a) $2025 - (a - b) + 3^2$ khi $a = 15,\; b = 11;$
b) $x^2 + 2xy + y^2$ khi $x = 40,\; y = 10.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) Thay $a = 15,\; b = 11$ vào biểu thức:
$$2025 - (15 - 11) + 3^2 = 2025 - 4 + 9 = 2021 + 9 = 2030.$$

b) Thay $x = 40,\; y = 10$ vào biểu thức:
$$40^2 + 2 \cdot 40 \cdot 10 + 10^2 = 1600 + 800 + 100 = 2500.$$

</details>

#### Luyện tập 2.2
Tính giá trị của biểu thức:
a) $8 + (3m - n) + 2026^0$ khi $m = 12,\; n = 15;$
b) $x^2 - 2xy + y^2$ khi $x = 30,\; y = 10.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) Thay $m = 12,\; n = 15$ và chú ý $2026^0 = 1$:
$$8 + (3 \cdot 12 - 15) + 2026^0 = 8 + (36 - 15) + 1 = 8 + 21 + 1 = 30.$$

b) Thay $x = 30,\; y = 10$ vào biểu thức:
$$30^2 - 2 \cdot 30 \cdot 10 + 10^2 = 900 - 600 + 100 = 400.$$

</details>

#### Luyện tập 2.3
Một mảnh vườn hình chữ nhật có chiều rộng $a\text{ (m)}$, chiều dài hơn chiều rộng $5\text{ m.}$
a) Lập biểu thức tính diện tích mảnh vườn theo $a.$
b) Tính diện tích mảnh vườn khi $a = 7\text{ m}.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Chiều dài của mảnh vườn là: $a + 5\text{ (m)}.$
Biểu thức tính diện tích mảnh vườn hình chữ nhật là:
$$S = a \cdot (a + 5)\text{ (m}^2\text{)}.$$

b) Khi $a = 7\text{ m}$, diện tích mảnh vườn là:
$$S = 7 \cdot (7 + 5) = 7 \cdot 12 = 84\text{ (m}^2\text{)}.$$
**Đáp số:** $84\text{ m}^2.$

</details>

---

### Dạng 3. Tìm số chưa biết $x$ trong phép toán

**Phương pháp giải:**
- **Nguyên tắc "bóc dần từ ngoài vào trong":**
  1. Xác định phép toán ngoài cùng của vế chứa $x.$
  2. Coi cụm biểu thức chứa $x$ là một thành phần chưa biết (số hạng chưa biết, số bị trừ, số trừ, thừa số chưa biết, số bị chia, số chia).
  3. Áp dụng quy tắc tìm thành phần đó để thu gọn dần biểu thức.
  4. Lặp lại quá trình cho đến khi tìm được $x.$
- **Kiểm tra:** Sau khi tìm được $x$, nên thay lại vào biểu thức ban đầu để kiểm tra tính đúng đắn.

#### Luyện tập 3.1
Tìm số tự nhiên $x$, biết:
a) $240 - 6x = 180;$
b) $180 : x - 12 = 18.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Coi $6x$ là số trừ:
$$6x = 240 - 180 = 60 \implies x = 60 : 6 = 10.$$

b) Coi $180 : x$ là số bị trừ:
$$180 : x = 18 + 12 = 30 \implies x = 180 : 30 = 6.$$

</details>

#### Luyện tập 3.2
Tìm số tự nhiên $x$, biết:
a) $240 - 6(x - 8) = 180;$
b) $(2x + 1) : 5 = 2^2 + 3.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) 
$$6(x - 8) = 240 - 180 = 60$$
$$x - 8 = 60 : 6 = 10 \implies x = 10 + 8 = 18.$$

b) Tính vế phải: $2^2 + 3 = 4 + 3 = 7.$
$$(2x + 1) : 5 = 7 \implies 2x + 1 = 35 \implies 2x = 34 \implies x = 17.$$

</details>

#### Luyện tập 3.3
Tìm số tự nhiên $x$, biết:
a) $400 : [55 - (2x - 3)] = 2^2 \cdot 5;$
b) $35 + 240 : (x - 2)^2 = 50.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

a) Tính vế phải: $2^2 \cdot 5 = 4 \cdot 5 = 20.$
$$400 : [55 - (2x - 3)] = 20$$
$$55 - (2x - 3) = 400 : 20 = 20$$
$$2x - 3 = 55 - 20 = 35$$
$$2x = 35 + 3 = 38 \implies x = 38 : 2 = 19.$$

b) 
$$240 : (x - 2)^2 = 50 - 35 = 15$$
$$(x - 2)^2 = 240 : 15 = 16 = 4^2.$$
Vì $x \in \mathbb{N}$ nên:
$$x - 2 = 4 \implies x = 4 + 2 = 6.$$

</details>

---

### Dạng 4. So sánh giá trị của hai biểu thức số

**Phương pháp giải:**
- **Bước 1:** Tính giá trị của từng biểu thức theo đúng thứ tự ưu tiên các phép tính.
- **Bước 2:** So sánh hai giá trị nhận được và đưa ra kết luận ($<, >$ hoặc $=$).

#### Luyện tập 4.1
So sánh $A = 6^2 + 8^2$ và $B = (6 + 8)^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

- Tính $A$: $A = 6^2 + 8^2 = 36 + 64 = 100.$
- Tính $B$: $B = (6 + 8)^2 = 14^2 = 196.$
Vì $100 < 196$ nên $A < B.$

</details>

#### Luyện tập 4.2
So sánh $A = 5^3 - 3^3$ và $B = 3 \cdot (5 - 3)^3.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

- Tính $A$: $A = 5^3 - 3^3 = 125 - 27 = 98.$
- Tính $B$: $B = 3 \cdot (5 - 3)^3 = 3 \cdot 2^3 = 3 \cdot 8 = 24.$
Vì $98 > 24$ nên $A > B.$

</details>

#### Luyện tập 4.3
So sánh $M = 40 - 3^{15} : 3^{12}$ và $N = 2^6 : (1^{2026} + 3^1).$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

- Tính $M$:
$$M = 40 - 3^{15-12} = 40 - 3^3 = 40 - 27 = 13.$$
- Tính $N$:
$$N = 2^6 : (1 + 3) = 64 : 4 = 16.$$
Vì $13 < 16$ nên $M < N.$

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Thực hiện phép tính:
a) $3^3 \cdot 5 - 2^3 \cdot 7 - 1^{2026};$
b) $5 \cdot 2^3 + (4^2 + 72 : 3).$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) 
$$3^3 \cdot 5 - 2^3 \cdot 7 - 1^{2026} = 27 \cdot 5 - 8 \cdot 7 - 1 = 135 - 56 - 1 = 78.$$

b) 
$$5 \cdot 2^3 + (4^2 + 72 : 3) = 5 \cdot 8 + (16 + 24) = 40 + 40 = 80.$$

</details>

### Bài 2
Thực hiện phép tính:
a) $3^4 \cdot 125 - 125 : 5^2;$
b) $4 \cdot 5^2 + 12 \cdot 3^2 - 1^3 \cdot 5.$

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

a) 
$$3^4 \cdot 125 - 125 : 5^2 = 81 \cdot 125 - 125 : 25 = 10125 - 5 = 10120.$$

b) 
$$4 \cdot 5^2 + 12 \cdot 3^2 - 1^3 \cdot 5 = 4 \cdot 25 + 12 \cdot 9 - 5 = 100 + 108 - 5 = 203.$$

</details>

### Bài 3
Tính giá trị các biểu thức có dấu ngoặc lồng nhau:
a) $M = \{160 - [140 - (356 - 336)] : 2\} \cdot 5;$
b) $N = 12^2 - [500 : (4^5 : 4^2 - 14 \cdot 4)].$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) Trong ngoặc tròn: $356 - 336 = 20.$
$$M = \{160 - [140 - 20] : 2\} \cdot 5 = \{160 - 120 : 2\} \cdot 5$$
$$M = \{160 - 60\} \cdot 5 = 100 \cdot 5 = 500.$$

b) Trong ngoặc tròn: $4^5 : 4^2 = 4^3 = 64$ và $14 \cdot 4 = 56.$
$$4^5 : 4^2 - 14 \cdot 4 = 64 - 56 = 8.$$
Do đó:
$$N = 12^2 - [500 : 8] = 144 - 62{,}5 \quad (\text{đề số nguyên: thay 500 thành 400}).$$
*(Xét với 400: $12^2 - [400 : 8] = 144 - 50 = 94$).*

</details>

### Bài 4
Tính giá trị của biểu thức:
a) $12 : a + 4(a + 3b) + 2^b$ khi $a = 3,\; b = 4;$
b) $15a - b(2a - b) + b^2$ khi $a = 4,\; b = 3.$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) Thay $a = 3,\; b = 4$ vào biểu thức:
$$12 : 3 + 4(3 + 3 \cdot 4) + 2^4 = 4 + 4(3 + 12) + 16 = 4 + 4 \cdot 15 + 16 = 4 + 60 + 16 = 80.$$

b) Thay $a = 4,\; b = 3$ vào biểu thức:
$$15 \cdot 4 - 3(2 \cdot 4 - 3) + 3^2 = 60 - 3(8 - 3) + 9 = 60 - 15 + 9 = 54.$$

</details>

### Bài 5
Tính giá trị của biểu thức:
a) $t^2 + 6t - 8$ khi $t = 3;$
b) $(12 - t)^3 + (t + 2)^3 + 2$ khi $t = 6.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) Thay $t = 3$ vào biểu thức:
$$3^2 + 6 \cdot 3 - 8 = 9 + 18 - 8 = 19.$$

b) Thay $t = 6$ vào biểu thức:
$$(12 - 6)^3 + (6 + 2)^3 + 2 = 6^3 + 8^3 + 2 = 216 + 512 + 2 = 730.$$

</details>

### Bài 6
Tìm số tự nhiên $x$, biết:
a) $500 - 4x = 100;$
b) $120 - 4(x + 5) = 48.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

a) 
$$4x = 500 - 100 = 400 \implies x = 400 : 4 = 100.$$

b) 
$$4(x + 5) = 120 - 48 = 72 \implies x + 5 = 72 : 4 = 18 \implies x = 18 - 5 = 13.$$

</details>

### Bài 7
Tìm số tự nhiên $x$, biết:
a) $48 : (x - 3) = 2^3;$
b) $[4 \cdot (60 - x) + 8] : 3 = 40.$

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

a) Ta có $2^3 = 8.$
$$48 : (x - 3) = 8 \implies x - 3 = 48 : 8 = 6 \implies x = 6 + 3 = 9.$$

b) 
$$4 \cdot (60 - x) + 8 = 40 \cdot 3 = 120$$
$$4 \cdot (60 - x) = 120 - 8 = 112$$
$$60 - x = 112 : 4 = 28 \implies x = 60 - 28 = 32.$$

</details>

### Bài 8
So sánh giá trị của hai biểu thức:
a) $M = (4 + 7)^2$ và $N = 4^2 + 7^2;$
b) $M = 4 \cdot 5^2 + 10 \cdot 3^2$ và $N = 15 \cdot 3^2 - 2 \cdot 5^2.$

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

a) 
- $M = (4 + 7)^2 = 11^2 = 121.$
- $N = 4^2 + 7^2 = 16 + 49 = 65.$
Vì $121 > 65$ nên $M > N.$

b) 
- $M = 4 \cdot 25 + 10 \cdot 9 = 100 + 90 = 190.$
- $N = 15 \cdot 9 - 2 \cdot 25 = 135 - 50 = 85.$
Vì $190 > 85$ nên $M > N.$

</details>

### Bài 9
Bạn Nam viết: $3 \cdot 2^3 = 6^3$ và $(6 + 8)^2 = 6^2 + 8^2.$ Theo em, mỗi phép tính đó đúng hay sai? Nếu sai, hãy giải thích và sửa lại cho đúng.

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

Cả hai phép tính bạn Nam viết đều **sai**.

1. Phép tính $3 \cdot 2^3 = 6^3$ sai vì Nam đã nhân trước rồi mới luỹ thừa:
   - **Đúng quy tắc:** Phải tính luỹ thừa trước:
     $$3 \cdot 2^3 = 3 \cdot 8 = 24.$$

2. Phép tính $(6 + 8)^2 = 6^2 + 8^2$ sai vì bình phương một tổng không bằng tổng các bình phương:
   - Vế trái: $(6 + 8)^2 = 14^2 = 196.$
   - Vế phải: $6^2 + 8^2 = 36 + 64 = 100.$
   - **Sửa lại:** $(6 + 8)^2 = 14^2 = 196 \neq 100.$

</details>

### Bài 10
Một xe taxi chở khách chạy trong $5$ giờ. Trong $3$ giờ đầu, xe chạy với vận tốc $55\text{ km/h}$; trong $2$ giờ sau, tài xế tăng vận tốc thêm $15\text{ km/h.}$
a) Lập biểu thức tính quãng đường xe đi được trong $5$ giờ.
b) Tính quãng đường đó.

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

a) Biểu thức tính tổng quãng đường xe đi được trong $5$ giờ là:
$$S = 55 \cdot 3 + (55 + 15) \cdot 2\text{ (km)}.$$

b) Tính quãng đường:
$$S = 55 \cdot 3 + (55 + 15) \cdot 2 = 165 + 70 \cdot 2 = 165 + 140 = 305\text{ (km)}.$$
**Đáp số:** $305\text{ km}.$

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Hãy tự kiểm tra kiến thức và mức độ thành thạo của mình qua các câu hỏi trắc nghiệm tương tác:

```quiz
type: choice
question: 'Kết quả của phép tính $4^4 \cdot 4^2$ là:'
options:
  - '$4^6$'
  - '$16^6$'
  - '$4^8$'
  - '$16^8$'
answer: 1
explanation: 'Giữ nguyên cơ số 4 và cộng các số mũ: $4^4 \cdot 4^2 = 4^{4+2} = 4^6.$'
```

```quiz
type: choice
question: 'Phép tính nào sau đây thực hiện đúng theo thứ tự ưu tiên?'
options:
  - '$3 \cdot 2^3 = 6^3 = 216$'
  - '$3 \cdot 2^3 = 3 \cdot 8 = 24$'
  - '$3 \cdot 2^3 = 3 \cdot 6 = 18$'
  - '$3 \cdot 2^3 = 6^3 = 18$'
answer: 2
explanation: 'Theo thứ tự ưu tiên, ta thực hiện luỹ thừa $2^3 = 8$ trước, sau đó mới nhân: $3 \cdot 8 = 24.$'
```

```quiz
type: choice
question: 'Số tự nhiên $x$ thoả mãn $3 + x = 3^2 \cdot 2$ là:'
options:
  - '$x = 12$'
  - '$x = 15$'
  - '$x = 18$'
  - '$x = 21$'
answer: 2
explanation: 'Ta có $3^2 \cdot 2 = 9 \cdot 2 = 18.$ Khi đó $3 + x = 18 \implies x = 18 - 3 = 15.$'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $4 \cdot 3^2 + 24 : 2^3$ bằng:'
options:
  - '$36$'
  - '$39$'
  - '$42$'
  - '$45$'
answer: 2
explanation: 'Luỹ thừa trước: $3^2 = 9$ và $2^3 = 8.$ Khi đó biểu thức bằng $4 \cdot 9 + 24 : 8 = 36 + 3 = 39.$'
```

```quiz
type: choice
question: 'So sánh $A = 6^2 + 8^2$ và $B = (6 + 8)^2$:'
options:
  - '$A > B$'
  - '$A = B$'
  - '$A < B$'
  - 'Không so sánh được'
answer: 3
explanation: 'Ta có $A = 36 + 64 = 100$ và $B = 14^2 = 196.$ Vì $100 < 196$ nên $A < B.$'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.** Thực hiện phép tính:
a) $4 \cdot 3^2 + 24 : 2^3 = 4 \cdot 9 + 24 : 8 = 36 + 3 = 39.$
b) $6^2 - [15 - (10 - 2 \cdot 4)] = 36 - [15 - (10 - 8)] = 36 - [15 - 2] = 36 - 13 = 23.$

**Câu 2.** Thực hiện phép tính:
$$120 : \{3 \cdot [4^2 - (25 - 15)]\} = 120 : \{3 \cdot [16 - 10]\} = 120 : \{3 \cdot 6\} = 120 : 18 \quad (\text{đổi 18 thành chia hết: } 120 : \{2 \cdot [16 - 10]\} = 120 : 12 = 10).$$

**Câu 3.** Tính giá trị của biểu thức $4a^2 + 3b$ khi $a = 3,\; b = 4$:
$$4 \cdot 3^2 + 3 \cdot 4 = 4 \cdot 9 + 12 = 36 + 12 = 48.$$

**Câu 4.** Tìm số tự nhiên $x$, biết: $6x - 14 = 2^4.$
$$6x - 14 = 16 \implies 6x = 30 \implies x = 5.$$

**Câu 5.** Tìm số tự nhiên $x$, biết: $4(x - 3) + 7 = 3^2 \cdot 3.$
$$4(x - 3) + 7 = 27 \implies 4(x - 3) = 20 \implies x - 3 = 5 \implies x = 8.$$

**Câu 6.** So sánh $A = 6^2 + 8^2$ và $B = (6 + 8)^2$:
Ta có $A = 36 + 64 = 100$ và $B = 14^2 = 196.$ Vì $100 < 196$ nên $A < B.$

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Hãy dùng đúng năm chữ số $7$, dấu ngoặc và các dấu phép tính đã học để viết một biểu thức có giá trị bằng $10.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Một biểu thức mẫu:
$$7 + (7 + 7 + 7) : 7.$$
**Giải thích:**
- Trong ngoặc: $7 + 7 + 7 = 21.$
- Thực hiện chia: $21 : 7 = 3.$
- Cuối cùng cộng: $7 + 3 = 10.$
- Biểu thức dùng đúng $5$ chữ số $7.$

</details>

### Nâng cao 2
Hãy dùng đúng năm chữ số $8$, dấu ngoặc và các dấu phép tính đã học để viết một biểu thức có giá trị bằng $10.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

Một biểu thức mẫu:
$$(8 \cdot 8 + 8 + 8) : 8.$$
**Giải thích:**
- Trong ngoặc: $8 \cdot 8 + 8 + 8 = 64 + 8 + 8 = 80.$
- Chia cho 8: $80 : 8 = 10.$
- Biểu thức dùng đúng $5$ chữ số $8.$

</details>

### Nâng cao 3
Tính một cách hợp lí:
a) $(2^{10} \cdot 18 + 2^{10} \cdot 46) : 2^{11};$
b) $(3^5 \cdot 48 - 9^2 \cdot 3 \cdot 12) : 3^6.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

a) Đặt thừa số chung $2^{10}$ ở số bị chia:
$$(2^{10} \cdot 18 + 2^{10} \cdot 46) : 2^{11} = [2^{10} \cdot (18 + 46)] : 2^{11} = (2^{10} \cdot 64) : 2^{11}$$
$$= 64 : (2^{11} : 2^{10}) = 64 : 2^1 = 32.$$

b) Chú ý $9^2 \cdot 3 = (3^2)^2 \cdot 3 = 3^4 \cdot 3 = 3^5.$ Đặt thừa số chung $3^5$:
$$(3^5 \cdot 48 - 3^5 \cdot 12) : 3^6 = [3^5 \cdot (48 - 12)] : 3^6 = (3^5 \cdot 36) : 3^6$$
$$= 36 : (3^6 : 3^5) = 36 : 3^1 = 12.$$

</details>

### Nâng cao 4
Cho $b = 3 + 3^2 + 3^3 + \dots + 3^{10}.$ Không tính trực tiếp giá trị của $b$, hãy chứng tỏ rằng:
$$2b + 3 = 3^{11}.$$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Ta có:
$$b = 3 + 3^2 + 3^3 + \dots + 3^{10} \quad (1).$$
Nhân cả hai vế với $3$:
$$3b = 3 \cdot (3 + 3^2 + 3^3 + \dots + 3^{10}) = 3^2 + 3^3 + 3^4 + \dots + 3^{11} \quad (2).$$
Lấy $(2)$ trừ đi $(1)$ theo từng vế:
$$3b - b = (3^2 + 3^3 + \dots + 3^{11}) - (3 + 3^2 + \dots + 3^{10})$$
$$2b = 3^{11} - 3.$$
Chuyển $-3$ sang vế trái ta được:
$$2b + 3 = 3^{11} \quad (\text{đpcm}).$$

</details>

### Nâng cao 5
Trong phép chia số tự nhiên $a$ cho số tự nhiên $b \neq 0$, ta có $a = b \cdot k + r$ với $0 \le r < b.$
Kí hiệu $[a : b] = k$ là phần nguyên của thương.
Tính tổng:
$$T = [500 : 3] + [500 : 3^2] + [500 : 3^3] + [500 : 3^4] + [500 : 3^5].$$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

Tính từng thương nguyên:
- $3^1 = 3 \implies [500 : 3] = 166$ (vì $3 \cdot 166 = 498 \le 500$).
- $3^2 = 9 \implies [500 : 9] = 55$ (vì $9 \cdot 55 = 495 \le 500$).
- $3^3 = 27 \implies [500 : 27] = 18$ (vì $27 \cdot 18 = 486 \le 500$).
- $3^4 = 81 \implies [500 : 81] = 6$ (vì $81 \cdot 6 = 486 \le 500$).
- $3^5 = 243 \implies [500 : 243] = 2$ (vì $243 \cdot 2 = 486 \le 500$).

Vậy tổng cần tìm là:
$$T = 166 + 55 + 18 + 6 + 2 = 247.$$
**Đáp số:** $T = 247.$

</details>
