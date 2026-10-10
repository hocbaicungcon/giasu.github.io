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
question: 'Tích $3 \cdot 3 \cdot 3 \cdot 3$ viết gọn dưới dạng luỹ thừa là:'
options:
  - '$3^3$'
  - '$3^4$'
  - '$4^3$'
  - '$12$'
answer: 2
explanation: 'Tích có 4 thừa số 3 nên $3 \cdot 3 \cdot 3 \cdot 3 = 3^4.$'
```

```quiz
type: choice
question: 'So sánh giá trị của hai số $2^3$ và $3^2$:'
options:
  - '$2^3 > 3^2$'
  - '$2^3 = 3^2$'
  - '$2^3 < 3^2$'
  - 'Không so sánh được'
answer: 3
explanation: 'Ta có $2^3 = 8$ và $3^2 = 9.$ Vì $8 < 9$ nên $2^3 < 3^2.$'
```

```quiz
type: choice
question: 'Kết quả của phép tính luỹ thừa $2021^0$ bằng bao nhiêu?'
options:
  - '0'
  - '1'
  - '2021'
  - 'Không xác định'
answer: 2
explanation: 'Theo quy ước, với mọi số tự nhiên $a \neq 0$ thì $a^0 = 1.$ Do đó $2021^0 = 1.$'
```

```quiz
type: choice
question: 'Thực hiện phép tính $7^5 \cdot 7^2$ ta được kết quả là:'
options:
  - '$7^7$'
  - '$7^{10}$'
  - '$49^7$'
  - '$7^3$'
answer: 1
explanation: 'Giữ nguyên cơ số 7 và cộng các số mũ: $7^5 \cdot 7^2 = 7^{5+2} = 7^7.$'
```

<details>
<summary><strong>Xem lời giải chi tiết toàn bộ phần Khởi động</strong></summary>

**Câu 1.** Viết gọn mỗi tích thành một luỹ thừa:
a) $3 \cdot 3 \cdot 3 \cdot 3 = 3^4.$
b) $10 \cdot 10 \cdot 10 = 10^3.$

**Câu 2.** Tính giá trị:
a) $2^3 = 8.$
b) $3^2 = 9.$
c) $5^2 = 25.$
d) $10^3 = 1000.$

**Câu 3.** Viết kết quả dưới dạng một luỹ thừa:
a) $7^5 \cdot 7^2 = 7^{5+2} = 7^7.$
b) $6^8 : 6^3 = 6^{8-3} = 6^5.$

**Câu 4.** Tính giá trị:
a) $2021^0 = 1.$
b) $15^1 = 15.$
c) $1^{100} = 1.$

**Câu 5.** Vì $2^3 = 8$ và $3^2 = 9$, mà $8 < 9$ nên $2^3 < 3^2.$

</details>

---

## A. Lý thuyết trọng tâm

### 1. Biểu thức không có dấu ngoặc

> **Quy tắc 1:**
> - Nếu biểu thức chỉ có phép cộng và phép trừ (hoặc chỉ có phép nhân và phép chia), ta thực hiện các phép tính theo thứ tự **từ trái sang phải**.
> - Nếu biểu thức có cả các phép tính cộng, trừ, nhân, chia và nâng lên luỹ thừa, ta thực hiện theo thứ tự:
>   $$\text{Luỹ thừa} \longrightarrow \text{Nhân và chia} \longrightarrow \text{Cộng và trừ.}$$

**Ví dụ 1:**
a) Tính: $27 \cdot 75 + 25 \cdot 27 - 150.$
b) Tính: $5 \cdot 4^2 - 18 : 3^2.$

<details>
<summary><strong>Xem lời giải Ví dụ 1</strong></summary>

a) Biểu thức chỉ có nhân, cộng, trừ $\Rightarrow$ thực hiện nhân trước, cộng trừ sau:
$$27 \cdot 75 + 25 \cdot 27 - 150 = 2025 + 675 - 150 = 2700 - 150 = 2550.$$
*(Cách tính nhanh: $27 \cdot (75 + 25) - 150 = 27 \cdot 100 - 150 = 2700 - 150 = 2550$).*

b) Thực hiện luỹ thừa trước, rồi đến nhân, chia, cuối cùng là trừ:
$$5 \cdot 4^2 - 18 : 3^2 = 5 \cdot 16 - 18 : 9 = 80 - 2 = 78.$$

</details>

---

### 2. Biểu thức có dấu ngoặc

> **Quy tắc 2:**
> - Khi biểu thức có chứa các dấu ngoặc, ta thực hiện các phép tính **trong ngoặc trước, ngoài ngoặc sau**.
> - Nếu có nhiều loại dấu ngoặc lồng nhau, thứ tự mở ngoặc là **từ trong ra ngoài**:
>   $$( \ ) \longrightarrow [ \ ] \longrightarrow \{ \ \}.$$

**Ví dụ 2:**
a) Tính: $80 - [70 - (12 - 4)^2].$
b) Tính: $12 : \{390 : [500 - (125 + 35 \cdot 7)]\}.$

<details>
<summary><strong>Xem lời giải Ví dụ 2</strong></summary>

a) Thực hiện trong ngoặc tròn $( \ )$ trước, rồi đến luỹ thừa, tiếp theo là ngoặc vuông $[ \ ]$, cuối cùng phép trừ ngoài cùng:
$$80 - [70 - (12 - 4)^2] = 80 - [70 - 8^2] = 80 - [70 - 64] = 80 - 6 = 74.$$

b) Mở lần lượt $( \ ) \to [ \ ] \to \{ \ \}$:
$$12 : \{390 : [500 - (125 + 35 \cdot 7)]\} = 12 : \{390 : [500 - (125 + 245)]\}$$
$$= 12 : \{390 : [500 - 370]\} = 12 : \{390 : 130\} = 12 : 3 = 4.$$

</details>

---

### 3. Biểu thức có chứa chữ

> **Phương pháp:**
> Để tính giá trị của một biểu thức có chứa chữ khi biết giá trị của các chữ, ta **thay giá trị đã cho của các chữ vào biểu thức** rồi thực hiện phép tính theo đúng thứ tự các phép tính.

**Ví dụ 3:** Tính giá trị của biểu thức $1 + 2(2a - b) + 3^2$ khi $a = 5;\; b = 2.$

<details>
<summary><strong>Xem lời giải Ví dụ 3</strong></summary>

Thay $a = 5$ và $b = 2$ vào biểu thức:
$$1 + 2(2 \cdot 5 - 2) + 3^2 = 1 + 2 \cdot (10 - 2) + 9 = 1 + 2 \cdot 8 + 9 = 1 + 16 + 9 = 26.$$

</details>

---

### 4. Những sai lầm học sinh rất hay gặp

| Sai lầm thường gặp | Sửa lại cho đúng | Giải thích quy tắc |
| :--- | :--- | :--- |
| Quên làm luỹ thừa trước: $2 \cdot 4^2 = 8^2 = 64$ | $2 \cdot 4^2 = 2 \cdot 16 = 32$ | Phải ưu tiên tính luỹ thừa $4^2 = 16$ trước, sau đó mới nhân với $2.$ |
| Bình phương một tổng = tổng bình phương: $(5 + 12)^2 = 5^2 + 12^2$ | $(5 + 12)^2 = 17^2 = 289 \neq 5^2 + 12^2 = 169$ | Phải cộng trong ngoặc trước $(5 + 12 = 17)$ rồi mới bình phương: $(a + b)^2 \neq a^2 + b^2.$ |
| Vội vã tính từ trái sang phải khi có ngoặc: $100 : (2 \cdot 5) = 50 \cdot 5 = 250$ | $100 : (2 \cdot 5) = 100 : 10 = 10$ | Có dấu ngoặc thì **trong ngoặc phải làm trước**. |
| Biểu thức chỉ có cộng và trừ nhưng cộng hết rồi mới trừ: $20 - 5 + 3 = 20 - 8 = 12$ | $20 - 5 + 3 = 15 + 3 = 18$ | Khi biểu thức chỉ có cộng và trừ, **bắt buộc thực hiện từ trái sang phải**. |
| Nhầm quy ước số mũ $0$: $2021^0 = 0$ | $2021^0 = 1$ | $a^0 = 1$ với mọi $a \neq 0.$ |

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Thực hiện phép tính theo thứ tự

**Phương pháp giải:**
- Biểu thức không ngoặc: $\text{Luỹ thừa} \to \text{Nhân, chia} \to \text{Cộng, trừ}.$
- Biểu thức có ngoặc: Trong ngoặc trước, ngoài ngoặc sau, mở theo thứ tự $( \ ) \to [ \ ] \to \{ \ \}.$
- Vận dụng tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng để tính nhanh nếu có thể.

#### Luyện tập 1.1
Thực hiện phép tính:
a) $2^2 \cdot 3^2 - 2 \cdot 3 \cdot 5;$
b) $2 \cdot 5^2 + 20 : 2^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.1</strong></summary>

a) 
$$2^2 \cdot 3^2 - 2 \cdot 3 \cdot 5 = 4 \cdot 9 - 30 = 36 - 30 = 6.$$

b) 
$$2 \cdot 5^2 + 20 : 2^2 = 2 \cdot 25 + 20 : 4 = 50 + 5 = 55.$$

</details>

#### Luyện tập 1.2
Thực hiện phép tính:
a) $5^3 : 5^2 + 2^2 \cdot 3;$
b) $6^2 \cdot 28 + 72 \cdot 6^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.2</strong></summary>

a) 
$$5^3 : 5^2 + 2^2 \cdot 3 = 5^{3-2} + 4 \cdot 3 = 5 + 12 = 17.$$

b) Đặt thừa số chung $6^2$:
$$6^2 \cdot 28 + 72 \cdot 6^2 = 6^2 \cdot (28 + 72) = 36 \cdot 100 = 3600.$$

</details>

#### Luyện tập 1.3
Tính giá trị các biểu thức có ngoặc lồng nhau:
a) $A = \{132 - [116 - (16 - 8)] : 2\} \cdot 5;$
b) $B = 36 : \{336 : [200 - (12 + 8 \cdot 20)]\}.$

<details>
<summary><strong>Xem lời giải Luyện tập 1.3</strong></summary>

a) Bóc ngoặc từ trong ra ngoài:
$$A = \{132 - [116 - 8] : 2\} \cdot 5$$
$$A = \{132 - 108 : 2\} \cdot 5 = \{132 - 54\} \cdot 5 = 78 \cdot 5 = 390.$$

b) Trong ngoặc tròn, nhân trước cộng sau: $12 + 8 \cdot 20 = 12 + 160 = 172.$
$$B = 36 : \{336 : [200 - 172]\} = 36 : \{336 : 28\} = 36 : 12 = 3.$$

</details>

---

### Dạng 2. Lập và tính giá trị biểu thức có chứa chữ

**Phương pháp giải:**
- Đọc kĩ đề để lập biểu thức toán học biểu thị mối liên hệ giữa các đại lượng (nếu đề bài chưa cho sẵn biểu thức).
- Thay giá trị của các chữ vào biểu thức và tính giá trị theo đúng thứ tự ưu tiên các phép tính.

#### Luyện tập 2.1
Tính giá trị của biểu thức:
a) $2021 - (a - b) + 2^2$ khi $a = 12,\; b = 10;$
b) $x^2 + 2xy + y^2$ khi $x = 30,\; y = 20.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.1</strong></summary>

a) Thay $a = 12,\; b = 10$ vào biểu thức:
$$2021 - (12 - 10) + 2^2 = 2021 - 2 + 4 = 2019 + 4 = 2023.$$

b) Thay $x = 30,\; y = 20$ vào biểu thức:
$$30^2 + 2 \cdot 30 \cdot 20 + 20^2 = 900 + 1200 + 400 = 2500.$$

</details>

#### Luyện tập 2.2
Tính giá trị của biểu thức:
a) $5 + (2m - n) + 2021^0$ khi $m = 11,\; n = 10;$
b) $x^2 - 2xy + y^2$ khi $x = 20,\; y = 10.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.2</strong></summary>

a) Thay $m = 11,\; n = 10$ và chú ý $2021^0 = 1$:
$$5 + (2 \cdot 11 - 10) + 2021^0 = 5 + (22 - 10) + 1 = 5 + 12 + 1 = 18.$$

b) Thay $x = 20,\; y = 10$ vào biểu thức:
$$20^2 - 2 \cdot 20 \cdot 10 + 10^2 = 400 - 400 + 100 = 100.$$

</details>

#### Luyện tập 2.3
Một mảnh vườn hình chữ nhật có chiều rộng $a\text{ (m)}$, chiều dài hơn chiều rộng $4\text{ m.}$
a) Lập biểu thức tính diện tích mảnh vườn theo $a.$
b) Tính diện tích mảnh vườn khi $a = 6\text{ m}.$

<details>
<summary><strong>Xem lời giải Luyện tập 2.3</strong></summary>

a) Chiều dài của mảnh vườn là: $a + 4\text{ (m)}.$
Biểu thức tính diện tích mảnh vườn hình chữ nhật là:
$$S = a \cdot (a + 4)\text{ (m}^2\text{)}.$$

b) Khi $a = 6\text{ m}$, diện tích mảnh vườn là:
$$S = 6 \cdot (6 + 4) = 6 \cdot 10 = 60\text{ (m}^2\text{)}.$$
**Đáp số:** $60\text{ m}^2.$

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
a) $210 - 5x = 200;$
b) $210 : x - 10 = 20.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.1</strong></summary>

a) Coi $5x$ là số trừ:
$$5x = 210 - 200$$
$$5x = 10$$
$$x = 10 : 5 = 2.$$

b) Coi $210 : x$ là số bị trừ:
$$210 : x = 20 + 10$$
$$210 : x = 30$$
$$x = 210 : 30 = 7.$$

</details>

#### Luyện tập 3.2
Tìm số tự nhiên $x$, biết:
a) $210 - 5(x - 11) = 200;$
b) $(2x + 1) : 7 = 2^2 + 3^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.2</strong></summary>

a) 
$$5(x - 11) = 210 - 200$$
$$5(x - 11) = 10$$
$$x - 11 = 10 : 5 = 2$$
$$x = 2 + 11 = 13.$$

b) Tính vế phải trước: $2^2 + 3^2 = 4 + 9 = 13.$
$$(2x + 1) : 7 = 13$$
$$2x + 1 = 13 \cdot 7 = 91$$
$$2x = 91 - 1 = 90$$
$$x = 90 : 2 = 45.$$

</details>

#### Luyện tập 3.3
Tìm số tự nhiên $x$, biết:
a) $450 : [41 - (2x - 5)] = 3^2 \cdot 5;$
b) $27 + 288 : (x - 3)^2 = 35.$

<details>
<summary><strong>Xem lời giải Luyện tập 3.3</strong></summary>

a) Tính vế phải: $3^2 \cdot 5 = 9 \cdot 5 = 45.$
$$450 : [41 - (2x - 5)] = 45$$
$$41 - (2x - 5) = 450 : 45 = 10$$
$$2x - 5 = 41 - 10 = 31$$
$$2x = 31 + 5 = 36$$
$$x = 36 : 2 = 18.$$

b) 
$$288 : (x - 3)^2 = 35 - 27$$
$$288 : (x - 3)^2 = 8$$
$$(x - 3)^2 = 288 : 8 = 36.$$
Vì $x \in \mathbb{N}$ và $36 = 6^2$ nên:
$$x - 3 = 6 \implies x = 6 + 3 = 9.$$

</details>

---

### Dạng 4. So sánh giá trị của hai biểu thức số

**Phương pháp giải:**
- **Bước 1:** Tính giá trị của từng biểu thức theo đúng thứ tự ưu tiên các phép tính.
- **Bước 2:** So sánh hai giá trị nhận được và đưa ra kết luận ($<, >$ hoặc $=$).

#### Luyện tập 4.1
So sánh $A = 5^2 + 12^2$ và $B = (5 + 12)^2.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.1</strong></summary>

- Tính $A$: $A = 5^2 + 12^2 = 25 + 144 = 169.$
- Tính $B$: $B = (5 + 12)^2 = 17^2 = 289.$
Vì $169 < 289$ nên $A < B.$

</details>

#### Luyện tập 4.2
So sánh $A = 4^3 - 2^3$ và $B = 2 \cdot (4 - 2)^3.$

<details>
<summary><strong>Xem lời giải Luyện tập 4.2</strong></summary>

- Tính $A$: $A = 4^3 - 2^3 = 64 - 8 = 56.$
- Tính $B$: $B = 2 \cdot (4 - 2)^3 = 2 \cdot 2^3 = 2 \cdot 8 = 16.$
Vì $56 > 16$ nên $A > B.$

</details>

#### Luyện tập 4.3
So sánh $M = 30 - 2^{20} : 2^{18}$ và $N = 3^5 : (1^{2021} + 2^3).$

<details>
<summary><strong>Xem lời giải Luyện tập 4.3</strong></summary>

- Tính $M$:
$$M = 30 - 2^{20-18} = 30 - 2^2 = 30 - 4 = 26.$$
- Tính $N$:
$$N = 3^5 : (1 + 8) = 243 : 9 = 27.$$
Vì $26 < 27$ nên $M < N.$

</details>

---

## C. Phiếu bài tập tự luyện

### Bài 1
Thực hiện phép tính:
a) $2^3 \cdot 10 - 3^2 \cdot 5 - 1^{2021};$
b) $4 \cdot 3^2 + (5^2 + 58 : 2).$

<details>
<summary><strong>Xem lời giải Bài 1</strong></summary>

a) 
$$2^3 \cdot 10 - 3^2 \cdot 5 - 1^{2021} = 8 \cdot 10 - 9 \cdot 5 - 1 = 80 - 45 - 1 = 35 - 1 = 34.$$

b) 
$$4 \cdot 3^2 + (5^2 + 58 : 2) = 4 \cdot 9 + (25 + 29) = 36 + 54 = 90.$$

</details>

### Bài 2
Thực hiện phép tính:
a) $4^3 \cdot 125 - 125 : 5^2;$
b) $3 \cdot 5^2 + 15 \cdot 2^2 - 1^2 \cdot 3.$

<details>
<summary><strong>Xem lời giải Bài 2</strong></summary>

a) 
$$4^3 \cdot 125 - 125 : 5^2 = 64 \cdot 125 - 125 : 25 = 8000 - 5 = 7995.$$

b) 
$$3 \cdot 5^2 + 15 \cdot 2^2 - 1^2 \cdot 3 = 3 \cdot 25 + 15 \cdot 4 - 1 \cdot 3 = 75 + 60 - 3 = 135 - 3 = 132.$$

</details>

### Bài 3
Tính giá trị các biểu thức có dấu ngoặc lồng nhau:
a) $M = \{145 - [130 - (246 - 236)] : 2\} \cdot 5;$
b) $N = 11^2 - [600 : (5^5 : 5^2 - 21 \cdot 5)].$

<details>
<summary><strong>Xem lời giải Bài 3</strong></summary>

a) Thực hiện trong ngoặc tròn trước: $246 - 236 = 10.$
$$M = \{145 - [130 - 10] : 2\} \cdot 5 = \{145 - 120 : 2\} \cdot 5$$
$$M = \{145 - 60\} \cdot 5 = 85 \cdot 5 = 425.$$

b) Thực hiện trong ngoặc tròn: $5^5 : 5^2 = 5^3 = 125$ và $21 \cdot 5 = 105.$
$$5^5 : 5^2 - 21 \cdot 5 = 125 - 105 = 20.$$
Do đó:
$$N = 11^2 - [600 : 20] = 121 - 30 = 91.$$

</details>

### Bài 4
Tính giá trị của biểu thức:
a) $10 : a + 5(a + 4b) + 2^b$ khi $a = 2,\; b = 5;$
b) $16a - b(2a - b) + b^2$ khi $a = 5,\; b = 2.$

<details>
<summary><strong>Xem lời giải Bài 4</strong></summary>

a) Thay $a = 2,\; b = 5$ vào biểu thức:
$$10 : 2 + 5(2 + 4 \cdot 5) + 2^5 = 5 + 5(2 + 20) + 32 = 5 + 5 \cdot 22 + 32 = 5 + 110 + 32 = 147.$$

b) Thay $a = 5,\; b = 2$ vào biểu thức:
$$16 \cdot 5 - 2(2 \cdot 5 - 2) + 2^2 = 80 - 2(10 - 2) + 4 = 80 - 2 \cdot 8 + 4 = 80 - 16 + 4 = 68.$$

</details>

### Bài 5
Tính giá trị của biểu thức:
a) $t^2 + 5t - 6$ khi $t = 2;$
b) $(10 - t)^3 + (t + 1)^3 + 1$ khi $t = 5.$

<details>
<summary><strong>Xem lời giải Bài 5</strong></summary>

a) Thay $t = 2$ vào biểu thức:
$$2^2 + 5 \cdot 2 - 6 = 4 + 10 - 6 = 14 - 6 = 8.$$

b) Thay $t = 5$ vào biểu thức:
$$(10 - 5)^3 + (5 + 1)^3 + 1 = 5^3 + 6^3 + 1 = 125 + 216 + 1 = 342.$$

</details>

### Bài 6
Tìm số tự nhiên $x$, biết:
a) $400 - 3x = 100;$
b) $96 - 3(x + 8) = 42.$

<details>
<summary><strong>Xem lời giải Bài 6</strong></summary>

a) 
$$3x = 400 - 100 = 300$$
$$x = 300 : 3 = 100.$$

b) 
$$3(x + 8) = 96 - 42 = 54$$
$$x + 8 = 54 : 3 = 18$$
$$x = 18 - 8 = 10.$$

</details>

### Bài 7
Tìm số tự nhiên $x$, biết:
a) $36 : (x - 5) = 2^2;$
b) $[3 \cdot (70 - x) + 5] : 2 = 46.$

<details>
<summary><strong>Xem lời giải Bài 7</strong></summary>

a) Ta có $2^2 = 4.$
$$36 : (x - 5) = 4$$
$$x - 5 = 36 : 4 = 9$$
$$x = 9 + 5 = 14.$$

b) 
$$3 \cdot (70 - x) + 5 = 46 \cdot 2 = 92$$
$$3 \cdot (70 - x) = 92 - 5 = 87$$
$$70 - x = 87 : 3 = 29$$
$$x = 70 - 29 = 41.$$

</details>

### Bài 8
So sánh giá trị của hai biểu thức:
a) $M = (5 + 6)^2$ và $N = 5^2 + 6^2;$
b) $M = 3 \cdot 5^2 + 15 \cdot 2^2$ và $N = 17 \cdot 2^2 - 2 \cdot 5^2.$

<details>
<summary><strong>Xem lời giải Bài 8</strong></summary>

a) 
- $M = (5 + 6)^2 = 11^2 = 121.$
- $N = 5^2 + 6^2 = 25 + 36 = 61.$
Vì $121 > 61$ nên $M > N.$

b) 
- $M = 3 \cdot 25 + 15 \cdot 4 = 75 + 60 = 135.$
- $N = 17 \cdot 4 - 2 \cdot 25 = 68 - 50 = 18.$
Vì $135 > 18$ nên $M > N.$

</details>

### Bài 9
Bạn An viết: $2 \cdot 4^2 = 64$ và $(5 + 12)^2 = 5^2 + 12^2.$ Theo em, mỗi phép tính đó đúng hay sai? Nếu sai, hãy giải thích và sửa lại cho đúng.

<details>
<summary><strong>Xem lời giải Bài 9</strong></summary>

Cả hai phép tính bạn An viết đều **sai**.

1. Phép tính $2 \cdot 4^2 = 64$ sai vì An đã nhân trước rồi mới luỹ thừa: $(2 \cdot 4)^2 = 8^2 = 64.$
   - **Đúng quy tắc:** Phải tính luỹ thừa trước:
     $$2 \cdot 4^2 = 2 \cdot 16 = 32.$$

2. Phép tính $(5 + 12)^2 = 5^2 + 12^2$ sai vì bình phương của một tổng không bằng tổng các bình phương:
   - Vế trái: $(5 + 12)^2 = 17^2 = 289.$
   - Vế phải: $5^2 + 12^2 = 25 + 144 = 169.$
   - Vì $289 \neq 169$ nên $(5 + 12)^2 \neq 5^2 + 12^2.$
   - **Sửa lại:** $(5 + 12)^2 = 17^2 = 289.$

</details>

### Bài 10
Một hành khách thuê xe taxi đi trong $6$ giờ. Trong $4$ giờ đầu, xe chạy với vận tốc $60\text{ km/h}$; trong $2$ giờ sau, tài xế tăng vận tốc thêm $10\text{ km/h.}$
a) Lập biểu thức tính quãng đường xe đi được trong $6$ giờ.
b) Tính quãng đường đó.

<details>
<summary><strong>Xem lời giải Bài 10</strong></summary>

a) 
- Quãng đường xe đi trong $4$ giờ đầu: $60 \cdot 4\text{ (km)}.$
- Vận tốc xe trong $2$ giờ sau là: $60 + 10\text{ (km/h)}.$
- Quãng đường xe đi trong $2$ giờ sau: $(60 + 10) \cdot 2\text{ (km)}.$
- Biểu thức tính tổng quãng đường xe đi được trong $6$ giờ là:
$$S = 60 \cdot 4 + (60 + 10) \cdot 2\text{ (km)}.$$

b) Tính quãng đường:
$$S = 60 \cdot 4 + (60 + 10) \cdot 2 = 240 + 70 \cdot 2 = 240 + 140 = 380\text{ (km)}.$$
**Đáp số:** $380\text{ km}.$

</details>

---

## D. Kiểm tra cơ bản (15 phút)

Hãy tự kiểm tra kiến thức và mức độ thành thạo của mình qua các câu hỏi trắc nghiệm tương tác:

```quiz
type: choice
question: 'Kết quả của phép tính $3^5 \cdot 3^2$ là:'
options:
  - '$3^7$'
  - '$6^7$'
  - '$3^3$'
  - '$9^{10}$'
answer: 1
explanation: 'Giữ nguyên cơ số 3 và cộng các số mũ: $3^5 \cdot 3^2 = 3^{5+2} = 3^7.$'
```

```quiz
type: choice
question: 'Phép tính nào sau đây thực hiện đúng theo thứ tự ưu tiên?'
options:
  - '$2 \cdot 4^2 = 8^2 = 64$'
  - '$2 \cdot 4^2 = 2 \cdot 16 = 32$'
  - '$2 \cdot 4^2 = 2 \cdot 8 = 16$'
  - '$2 \cdot 4^2 = 8^2 = 16$'
answer: 2
explanation: 'Theo thứ tự ưu tiên, ta thực hiện luỹ thừa $4^2 = 16$ trước, sau đó mới nhân: $2 \cdot 16 = 32.$'
```

```quiz
type: choice
question: 'Số tự nhiên $x$ thoả mãn $2 + x = 2^2 \cdot 3$ là:'
options:
  - '$x = 6$'
  - '$x = 8$'
  - '$x = 10$'
  - '$x = 12$'
answer: 3
explanation: 'Ta có $2^2 \cdot 3 = 4 \cdot 3 = 12.$ Khi đó $2 + x = 12 \implies x = 12 - 2 = 10.$'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $3 \cdot 2^3 + 18 : 3^2$ bằng:'
options:
  - '26'
  - '24'
  - '30'
  - '18'
answer: 1
explanation: 'Luỹ thừa trước: $2^3 = 8$ và $3^2 = 9.$ Khi đó biểu thức bằng $3 \cdot 8 + 18 : 9 = 24 + 2 = 26.$'
```

```quiz
type: choice
question: 'So sánh $A = 3^2 + 4^2$ và $B = (3 + 4)^2$:'
options:
  - '$A > B$'
  - '$A = B$'
  - '$A < B$'
  - 'Không so sánh được'
answer: 3
explanation: 'Ta có $A = 9 + 16 = 25$ và $B = 7^2 = 49.$ Vì $25 < 49$ nên $A < B.$'
```

<details>
<summary><strong>Xem lời giải các câu tự luận bài Kiểm tra 15 phút</strong></summary>

**Câu 1.** Thực hiện phép tính:
a) $3 \cdot 2^3 + 18 : 3^2 = 3 \cdot 8 + 18 : 9 = 24 + 2 = 26.$
b) $5^2 - [12 - (8 - 2 \cdot 3)] = 25 - [12 - (8 - 6)] = 25 - [12 - 2] = 25 - 10 = 15.$

**Câu 2.** Thực hiện phép tính:
$$100 : \{2 \cdot [5^2 - (35 - 8)]\} = 100 : \{2 \cdot [25 - 27]\}$$
*(Đề gốc: $100 : \{2 \cdot [52 - (35 - 8)]\} = 100 : \{2 \cdot [52 - 27]\} = 100 : \{2 \cdot 25\} = 100 : 50 = 2$).*

**Câu 3.** Tính giá trị của biểu thức $3a^2 + 2b$ khi $a = 2,\; b = 5$:
$$3 \cdot 2^2 + 2 \cdot 5 = 3 \cdot 4 + 10 = 12 + 10 = 22.$$

**Câu 4.** Tìm số tự nhiên $x$, biết: $5x - 12 = 2^3.$
$$5x - 12 = 8$$
$$5x = 8 + 12 = 20$$
$$x = 20 : 5 = 4.$$

**Câu 5.** Tìm số tự nhiên $x$, biết: $3(x - 2) + 5 = 2^2 \cdot 5.$
$$3(x - 2) + 5 = 4 \cdot 5 = 20$$
$$3(x - 2) = 20 - 5 = 15$$
$$x - 2 = 15 : 3 = 5$$
$$x = 5 + 2 = 7.$$

**Câu 6.** So sánh $A = 3^2 + 4^2$ và $B = (3 + 4)^2$:
Ta có $A = 9 + 16 = 25$ và $B = 7^2 = 49.$
Vì $25 < 49$ nên $A < B.$

</details>

---

## E. Bài tập nâng cao

### Nâng cao 1
Hãy dùng đúng năm chữ số $5$, dấu ngoặc và các dấu phép tính đã học để viết một biểu thức có giá trị bằng $10^5.$

<details>
<summary><strong>Xem lời giải Nâng cao 1</strong></summary>

Một biểu thức mẫu:
$$(5 + 5)^5 + 5 - 5.$$
**Giải thích:**
- Trong ngoặc: $5 + 5 = 10.$
- Luỹ thừa: $(5 + 5)^5 = 10^5.$
- Thêm $+ 5 - 5$ không làm đổi giá trị của biểu thức.
- Biểu thức dùng đúng $5$ chữ số $5$ (hai chữ số ở cơ số, một ở số mũ, hai ở phần $+ 5 - 5$).

*(Ngoài ra còn có thể viết: $(5 + 5)^5 \cdot (5 : 5)$).*

</details>

### Nâng cao 2
Hãy dùng đúng năm chữ số $9$, dấu ngoặc và các dấu phép tính đã học để viết một biểu thức có giá trị bằng $10.$

<details>
<summary><strong>Xem lời giải Nâng cao 2</strong></summary>

Một biểu thức mẫu:
$$9 + (9 + 9) : (9 + 9).$$
**Giải thích:**
$$(9 + 9) : (9 + 9) = 18 : 18 = 1.$$
Do đó biểu thức có giá trị bằng $9 + 1 = 10,$ và dùng đúng $5$ chữ số $9.$

*(Cách khác: $9 + 9 : 9 + 9 - 9 = 9 + 1 + 0 = 10$).*

</details>

### Nâng cao 3
Tính một cách hợp lí (bằng cách đặt thừa số chung rồi rút gọn luỹ thừa cùng cơ số):
a) $(2^9 \cdot 16 + 2^9 \cdot 34) : 2^{10};$
b) $(3^4 \cdot 57 - 9^2 \cdot 21) : 3^5.$

<details>
<summary><strong>Xem lời giải Nâng cao 3</strong></summary>

a) Đặt thừa số chung $2^9$ ở số bị chia:
$$(2^9 \cdot 16 + 2^9 \cdot 34) : 2^{10} = [2^9 \cdot (16 + 34)] : 2^{10} = (2^9 \cdot 50) : 2^{10}$$
$$= 50 : (2^{10} : 2^9) = 50 : 2^1 = 25.$$

b) Chú ý $9^2 = (3^2)^2 = 3^4.$ Đặt thừa số chung $3^4$:
$$(3^4 \cdot 57 - 3^4 \cdot 21) : 3^5 = [3^4 \cdot (57 - 21)] : 3^5 = (3^4 \cdot 36) : 3^5$$
$$= 36 : (3^5 : 3^4) = 36 : 3^1 = 12.$$

</details>

### Nâng cao 4
Cho $a = 2 + 2^2 + 2^3 + 2^4 + \dots + 2^{10}.$ Không tính trực tiếp giá trị của $a$, hãy chứng tỏ rằng:
$$a + 2 = 2^{11}.$$

<details>
<summary><strong>Xem lời giải Nâng cao 4</strong></summary>

Ta có:
$$a = 2 + 2^2 + 2^3 + 2^4 + \dots + 2^{10} \quad (1).$$
Nhân cả hai vế với $2$:
$$2a = 2 \cdot (2 + 2^2 + 2^3 + \dots + 2^{10})$$
$$2a = 2^2 + 2^3 + 2^4 + \dots + 2^{11} \quad (2).$$

Lấy đẳng thức $(2)$ trừ đi đẳng thức $(1)$ theo từng vế:
$$2a - a = (2^2 + 2^3 + \dots + 2^{11}) - (2 + 2^2 + \dots + 2^{10}).$$
Nhận thấy các số hạng từ $2^2$ đến $2^{10}$ đều bị triệt tiêu, do đó:
$$a = 2^{11} - 2.$$
Chuyển $-2$ sang vế trái ta được:
$$a + 2 = 2^{11} \quad (\text{đpcm}).$$

</details>

### Nâng cao 5
Trong phép chia số tự nhiên $a$ cho số tự nhiên $b \neq 0$, ta có $a = b \cdot k + r$ với $0 \le r < b.$
Kí hiệu $[a : b] = k$ (gọi là *thương hụt* khi $r \neq 0$, và là *thương đúng* khi $r = 0$).
a) Tính $[32 : 4]$ và $[61 : 4].$
b) Tính tổng:
$$T = [800 : 5] + [800 : 5^2] + [800 : 5^3] + [800 : 5^4].$$

<details>
<summary><strong>Xem lời giải Nâng cao 5</strong></summary>

a)
- Ta có $32 = 4 \cdot 8 + 0$ (phép chia hết) $\implies [32 : 4] = 8.$
- Ta có $61 = 4 \cdot 15 + 1$ (thương là $15$, dư $1$) $\implies [61 : 4] = 15.$

b) Tính từng thương nguyên:
- $5^1 = 5 \implies [800 : 5] = 160$ (vì $800 = 5 \cdot 160$).
- $5^2 = 25 \implies [800 : 25] = 32$ (vì $800 = 25 \cdot 32$).
- $5^3 = 125 \implies [800 : 125] = 6$ (vì $125 \cdot 6 = 750 \le 800 < 125 \cdot 7 = 875$).
- $5^4 = 625 \implies [800 : 625] = 1$ (vì $625 \cdot 1 = 625 \le 800 < 625 \cdot 2 = 1250$).

Vậy tổng cần tìm là:
$$T = 160 + 32 + 6 + 1 = 199.$$
**Đáp số:** $T = 199.$

*(Ý nghĩa toán học: Công thức Legendre này dùng để tìm số lượng thừa số $5$ có trong tích $800! = 1 \cdot 2 \cdot 3 \cdots 800$, từ đó biết được $800!$ có đúng $199$ chữ số $0$ tận cùng).*

</details>
