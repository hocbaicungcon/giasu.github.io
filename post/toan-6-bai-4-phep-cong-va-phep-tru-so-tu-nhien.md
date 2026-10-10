---
title: 'Toán 6 Bài 4: Phép cộng và phép trừ số tự nhiên - Lý thuyết, tính nhanh và bài tập chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 4 Phép cộng và phép trừ số tự nhiên: tính chất giao hoán, kết hợp, các kỹ thuật tính nhanh, bài toán tìm x và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số tự nhiên
  - Phép cộng và phép trừ
  - Số học 6
  - Kết nối tri thức
grade: 6
---

Bài học **Bài 4: Phép cộng và phép trừ số tự nhiên** thuộc Chương I: *Tập hợp các số tự nhiên* trong chương trình môn Toán 6. Bài viết hệ thống hoá đầy đủ kiến thức về các tính chất của phép cộng, điều kiện thực hiện phép trừ, các kỹ thuật tính nhanh (tính hợp lí), bài toán tìm $x$ và bài toán thực tế, kết hợp trắc nghiệm tương tác và nút xem lời giải chi tiết.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy cùng ôn lại kiến thức trước khi bắt đầu bài học mới:

**Câu 1.** Tìm số liền trước và số liền sau của mỗi số sau: $600$; $4089.$

<details>
<summary>Xem đáp án Câu 1</summary>

- Số $600$: số liền trước là $599$, số liền sau là $601.$
- Số $4089$: số liền trước là $4088$, số liền sau là $4090.$

</details>

**Câu 2.** Điền dấu thích hợp ($<, >$ hoặc $=$) vào chỗ chấm:
$$6978 \dots 6987;\quad 20\ 000 \dots 19\ 999;\quad 5263 \dots 5263.$$

<details>
<summary>Xem đáp án Câu 2</summary>

- $6978 < 6987$ (hàng chục: $7 < 8$).
- $20\ 000 > 19\ 999$ (hàng chục nghìn: $2 > 1$).
- $5263 = 5263.$

</details>

**Câu 3.** Điền vào chỗ trống để mỗi dòng sau là ba số tự nhiên liên tiếp xếp từ bé đến lớn:
- a) $88;\ \dots;\ \dots$
- b) $\dots;\ \dots;\ 400.$

<details>
<summary>Xem đáp án Câu 3</summary>

- a) $88;\ 89;\ 90.$
- b) $398;\ 399;\ 400.$

</details>

**Câu 4.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 57 \le x < 62\}$
- b) $B = \{x \in \mathbb{N}^* \mid x \le 6\}$

<details>
<summary>Xem đáp án Câu 4</summary>

- a) $A = \{57; 58; 59; 60; 61\}$ (lấy 57, không lấy 62).
- b) $B = \{1; 2; 3; 4; 5; 6\}$ (vì $x \in \mathbb{N}^*$ nên không lấy số 0).

</details>

**Câu 5.** Cho tia số dưới đây:

<div style="display:flex; justify-content:center; margin:16px 0;">
  <svg width="420" height="75" viewBox="0 0 420 75" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="395" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="405,35 390,30 390,40" fill="#334155"/>
    <!-- vạch 0 at x=30, step=28px -->
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="12" text-anchor="middle">0</text>
    <line x1="114" y1="28" x2="114" y2="42" stroke="#334155" stroke-width="2"/><text x="114" y="58" font-size="12" text-anchor="middle">3</text>
    <!-- A tại 5 (x = 30 + 5*28 = 170) -->
    <circle cx="170" cy="35" r="4.5" fill="#2563eb"/><text x="170" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">A</text>
    <line x1="198" y1="28" x2="198" y2="42" stroke="#334155" stroke-width="2"/><text x="198" y="58" font-size="12" text-anchor="middle">6</text>
    <line x1="282" y1="28" x2="282" y2="42" stroke="#334155" stroke-width="2"/><text x="282" y="58" font-size="12" text-anchor="middle">9</text>
    <!-- B tại 11 (x = 30 + 11*28 = 338) -->
    <circle cx="338" cy="35" r="4.5" fill="#16a34a"/><text x="338" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#15803d">B</text>
    <line x1="366" y1="28" x2="366" y2="42" stroke="#334155" stroke-width="2"/><text x="366" y="58" font-size="12" text-anchor="middle">12</text>
  </svg>
</div>

Mỗi điểm $A, B$ ứng với số tự nhiên nào? Trong hai số đó, số nào lớn hơn?

<details>
<summary>Xem đáp án Câu 5</summary>

- Đếm từ vạch 0: điểm $A$ ứng với số **$5$**, điểm $B$ ứng với số **$11.$**
- Điểm $B$ nằm bên phải điểm $A$ nên $11 > 5.$ Vậy số ứng với điểm $B$ lớn hơn.

</details>

---

## A. Lý thuyết trọng tâm

### 1. Phép cộng số tự nhiên

#### a) Định nghĩa
Phép cộng hai số tự nhiên $a$ và $b$ cho ta một số tự nhiên gọi là tổng của chúng:
$$a + b = c$$
Trong đó:
- $a$ và $b$ gọi là các **số hạng**.
- $c$ gọi là **tổng**.

#### b) Các tính chất của phép cộng
Phép cộng trong tập hợp số tự nhiên có ba tính chất cơ bản:
1. **Tính chất giao hoán:** Đổi chỗ các số hạng thì tổng không đổi:
   $$a + b = b + a$$
2. **Tính chất kết hợp:** Muốn cộng tổng của hai số với một số thứ ba, ta có thể cộng số thứ nhất với tổng của hai số còn lại:
   $$(a + b) + c = a + (b + c)$$
3. **Cộng với số 0:** Bất kì số tự nhiên nào cộng với 0 cũng bằng chính nó:
   $$a + 0 = 0 + a = a$$

> **Ví dụ 1.** Tính:
> - a) $469 + 325$
> - b) $234 + 567 + 891$

<details>
<summary>Xem lời giải Ví dụ 1</summary>

- a) Đặt tính thẳng cột rồi cộng từ phải sang trái:
  $$469 + 325 = 794.$$
  Ở đây $469$ và $325$ là các số hạng, còn $794$ là tổng.
- b) Cộng lần lượt từ trái sang phải:
  $$234 + 567 = 801;\quad 801 + 891 = 1692.$$
  Vậy $234 + 567 + 891 = 1692.$

</details>

---

### 2. Phép trừ số tự nhiên

#### a) Định nghĩa
Nếu $a = b + c$ thì ta viết:
$$a - b = c$$
Trong đó:
- $a$ gọi là **số bị trừ**.
- $b$ gọi là **số trừ**.
- $c$ gọi là **hiệu**.

#### b) Điều kiện thực hiện phép trừ
- **Quy tắc quan trọng:** Trong tập hợp số tự nhiên $\mathbb{N}$, phép trừ $a - b$ chỉ thực hiện được khi:
  $$a \ge b$$
  *(Số bị trừ phải lớn hơn hoặc bằng số trừ).*
- **Cách thử lại phép trừ:** Muốn thử lại kết quả của phép trừ, ta lấy **hiệu cộng với số trừ**:
  $$\text{Hiệu} + \text{Số trừ} = \text{Số bị trừ}$$
- **Trừ cho 0 và trừ chính nó:**
  $$a - 0 = a;\quad a - a = 0$$

#### c) Minh họa phép cộng và phép trừ trên tia số
Trên tia số, phép cộng tương ứng với việc **nhảy sang phải**, còn phép trừ tương ứng với việc **nhảy sang trái**:

<div style="display:flex; justify-content:center; margin:16px 0;">
  <svg width="420" height="90" viewBox="0 0 420 90" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <!-- Trục tia số -->
    <line x1="20" y1="50" x2="395" y2="50" stroke="#334155" stroke-width="2"/>
    <polygon points="405,50 390,45 390,55" fill="#334155"/>
    <!-- Vạch chia từ 0 đến 9 -->
    <line x1="35" y1="45" x2="35" y2="55" stroke="#94a3b8"/><text x="35" y="70" font-size="12" text-anchor="middle">0</text>
    <line x1="72" y1="45" x2="72" y2="55" stroke="#94a3b8"/><text x="72" y="70" font-size="12" text-anchor="middle">1</text>
    <line x1="109" y1="45" x2="109" y2="55" stroke="#94a3b8"/><text x="109" y="70" font-size="12" text-anchor="middle">2</text>
    <line x1="146" y1="45" x2="146" y2="55" stroke="#94a3b8"/><text x="146" y="70" font-size="12" text-anchor="middle">3</text>
    <line x1="183" y1="45" x2="183" y2="55" stroke="#2563eb" stroke-width="2"/><text x="183" y="70" font-size="12" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
    <line x1="220" y1="45" x2="220" y2="55" stroke="#94a3b8"/><text x="220" y="70" font-size="12" text-anchor="middle">5</text>
    <line x1="257" y1="45" x2="257" y2="55" stroke="#94a3b8"/><text x="257" y="70" font-size="12" text-anchor="middle">6</text>
    <line x1="294" y1="45" x2="294" y2="55" stroke="#94a3b8"/><text x="294" y="70" font-size="12" text-anchor="middle">7</text>
    <line x1="331" y1="45" x2="331" y2="55" stroke="#16a34a" stroke-width="2"/><text x="331" y="70" font-size="12" font-weight="bold" text-anchor="middle" fill="#15803d">8</text>
    <line x1="368" y1="45" x2="368" y2="55" stroke="#94a3b8"/><text x="368" y="70" font-size="12" text-anchor="middle">9</text>
    <!-- Nhảy sang phải +4: từ 4 (x=183) đến 8 (x=331) -->
    <path d="M 183,45 Q 257,15 331,45" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="257" y="14" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">+4</text>
    <!-- Nhảy sang trái -4: từ 8 (x=331) về 4 (x=183) -->
    <path d="M 331,55 Q 257,85 183,55" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="257" y="87" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">-4</text>
  </svg>
</div>

> **Ví dụ 2.**
> - a) Tính $976 - 528$ rồi thử lại kết quả.
> - b) Trong hai phép tính $725 - 900$ và $900 - 725$, phép tính nào thực hiện được trong tập hợp số tự nhiên? Hãy tính kết quả.

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- a) Thực hiện phép tính:
  $$976 - 528 = 448.$$
  - Thử lại: $448 + 528 = 976$ (đúng bằng số bị trừ). Vậy kết quả chính xác.
- b) Xét điều kiện:
  - Phép tính $725 - 900$ **không thực hiện được** trong $\mathbb{N}$ vì số bị trừ bé hơn số trừ ($725 < 900$).
  - Phép tính $900 - 725$ **thực hiện được** vì $900 > 725.$ Kết quả là:
    $$900 - 725 = 175.$$

</details>

---

### 3. Các kĩ thuật tính nhanh (tính hợp lí)

1. **Nhóm tạo số tròn chục, tròn trăm, tròn nghìn:**
   - Dùng tính chất giao hoán và kết hợp để ghép các cặp số có tận cùng cộng lại ra 10, 100,...
   $$\text{Ví dụ: } 68 + 145 + 32 = (68 + 32) + 145 = 100 + 145 = 245.$$
2. **Kĩ thuật thêm bớt cùng một số:**
   - Khi cộng hai số: thêm vào số hạng này bao nhiêu thì bớt ở số hạng kia bấy nhiêu, tổng không đổi.
   $$\text{Ví dụ: } 996 + 67 = (996 + 4) + (67 - 4) = 1000 + 63 = 1063.$$
3. **Quy tắc trừ liên tiếp một tổng:**
   - Trừ đi từng số cũng bằng trừ đi cả tổng của chúng:
   $$a - b - c = a - (b + c)$$
   $$\text{Ví dụ: } 100 - 46 - 54 = 100 - (46 + 54) = 100 - 100 = 0.$$

> **Ví dụ 3.** Tính một cách hợp lí:
> - a) $68 + 145 + 32$
> - b) $397 + 645 - 45 - 97$
> - c) $996 + 67$

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) $68 + 145 + 32 = (68 + 32) + 145 = 100 + 145 = 245.$
- b) Ghép mỗi số trừ với số hạng có cùng phần đuôi:
  $$397 + 645 - 45 - 97 = (397 - 97) + (645 - 45) = 300 + 600 = 900.$$
- c) Thêm 4 vào 996 và bớt 4 ở 67:
  $$996 + 67 = (996 + 4) + (67 - 4) = 1000 + 63 = 1063.$$

</details>

---

### 4. Bốn chú ý rất dễ nhầm lẫn

1. **Phép trừ KHÔNG có tính chất giao hoán và kết hợp:**
   - $8 - 5 \ne 5 - 8.$ Chỉ được tự do đổi chỗ, nhóm các số hạng trong **phép cộng**.
2. **Trong tập hợp $\mathbb{N}$, phép trừ $a - b$ không thực hiện được khi $a < b$:**
   - Không có số tự nhiên nào bằng $4 - 9.$
3. **Phân biệt $a - 0$ và $0 - a$:**
   - $a - 0 = a,$ nhưng $0 - a$ không thực hiện được trong $\mathbb{N}$ (khi $a > 0$). Tránh viết sai thành $0 - 8 = 8.$
4. **Khi đổi chỗ trong biểu thức có cả cộng và trừ, phải mang theo dấu đứng trước số đó:**
   - Trong biểu thức $397 + 645 - 45,$ số $45$ mang dấu trừ, nên phải ghép là $(645 - 45)$ chứ không được viết $(645 + 45).$

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Thực hiện phép cộng, phép trừ

**Phương pháp giải:**
- Đặt tính thẳng hàng từ phải sang trái.
- Dãy tính chỉ gồm cộng và trừ thì thực hiện theo thứ tự từ trái sang phải.
- Luôn kiểm tra lại phép trừ bằng phép cộng: $\text{Hiệu} + \text{Số trừ} = \text{Số bị trừ}.$

**Luyện tập 1.1.** Tính:
- a) $328 + 419$
- b) $234 + 345 + 456$

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- a) $328 + 419 = 747.$
- b) Tính từ trái sang phải: $234 + 345 = 579;\quad 579 + 456 = 1035.$

</details>

**Luyện tập 1.2.** Tính $67\ 859 - 23\ 486$ rồi thử lại kết quả bằng phép cộng.

<details>
<summary>Xem lời giải Luyện tập 1.2</summary>

- Thực hiện phép trừ: $67\ 859 - 23\ 486 = 44\ 373.$
- Thử lại: $44\ 373 + 23\ 486 = 67\ 859$ (đúng bằng số bị trừ).

</details>

**Luyện tập 1.3.** Tính: $89\ 456 - 21\ 350 + 47\ 894.$

<details>
<summary>Xem lời giải Luyện tập 1.3</summary>

Tính từ trái sang phải:
$$89\ 456 - 21\ 350 = 68\ 106$$
$$68\ 106 + 47\ 894 = 116\ 000.$$

</details>

---

### Dạng 2. Tính nhanh (Tính hợp lí)

**Phương pháp giải:**
- Tìm các cặp số có tổng tròn chục, tròn trăm ($1 + 9 = 10, 2 + 8 = 10, 3 + 7 = 10, \dots$).
- Ghép số bị trừ và số trừ có chữ số hàng đơn vị giống nhau.
- Với số gần tròn nghìn ($1996, 1997$), thực hiện mượn để tạo số tròn nghìn.

**Luyện tập 2.1.** Tính một cách hợp lí: $153 + 748 + 252 + 247.$

```quiz
type: choice
question: 'Kết quả của phép tính $153 + 748 + 252 + 247$ khi tính hợp lí là:'
options:
  - '1300'
  - '1400'
  - '1500'
  - '1350'
answer: 2
explanation: 'Ghép cặp tròn trăm: (153 + 247) + (748 + 252) = 400 + 1000 = 1400.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 2.1</summary>

Ghép hai cặp có tổng tròn trăm:
$$153 + 748 + 252 + 247 = (153 + 247) + (748 + 252) = 400 + 1000 = 1400.$$

</details>

**Luyện tập 2.2.** Tính một cách hợp lí: $2364 + 4258 - 1258 - 364.$

<details>
<summary>Xem lời giải Luyện tập 2.2</summary>

Ghép mỗi số trừ với số hạng có cùng phần đuôi:
$$2364 + 4258 - 1258 - 364 = (2364 - 364) + (4258 - 1258) = 2000 + 3000 = 5000.$$

</details>

**Luyện tập 2.3.** Tính một cách hợp lí: $1996 + 1997 + 1998 + 2002 + 2003 + 2004.$

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

Ghép số nhỏ nhất với số lớn nhất (mỗi cặp có tổng bằng 4000):
$$(1996 + 2004) + (1997 + 2003) + (1998 + 2002) = 4000 + 4000 + 4000 = 12\ 000.$$

</details>

---

### Dạng 3. Tìm số chưa biết trong phép cộng, phép trừ

**Phương pháp giải:**
- Tìm số hạng chưa biết: $\text{Số hạng} = \text{Tổng} - \text{Số hạng đã biết}.$
- Tìm số bị trừ: $\text{Số bị trừ} = \text{Hiệu} + \text{Số trừ}.$
- Tìm số trừ: $\text{Số trừ} = \text{Số bị trừ} - \text{Hiệu}.$
- Bài toán có chứa dấu ngoặc: coi cả biểu thức trong ngoặc là một thành phần chưa biết, tìm giá trị của ngoặc trước rồi mới tìm $x.$

**Luyện tập 3.1.** Tìm $x$, biết:
- a) $x + 48 = 115$
- b) $76 - x = 39$

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- a) $x$ là số hạng chưa biết:
  $$x = 115 - 48 = 67.$$
- b) $x$ là số trừ:
  $$x = 76 - 39 = 37.$$

</details>

**Luyện tập 3.2.** Tìm $x$, biết: $(x - 5) + 16 = 34.$

```quiz
type: choice
question: 'Giá trị của x thỏa mãn $(x - 5) + 16 = 34$ là:'
options:
  - '18'
  - '21'
  - '23'
  - '25'
answer: 3
explanation: 'Coi (x - 5) là số hạng: x - 5 = 34 - 16 = 18. Suy ra x = 18 + 5 = 23.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 3.2</summary>

- Coi cụm $(x - 5)$ là số hạng chưa biết:
  $$x - 5 = 34 - 16 = 18.$$
- $x$ là số bị trừ:
  $$x = 18 + 5 = 23.$$

</details>

**Luyện tập 3.3.** Tìm $x$, biết: $1235 + (1240 - x) = 1350.$

<details>
<summary>Xem lời giải Luyện tập 3.3</summary>

- Coi cụm $(1240 - x)$ là số hạng chưa biết:
  $$1240 - x = 1350 - 1235 = 115.$$
- $x$ là số trừ:
  $$x = 1240 - 115 = 1125.$$
- Thử lại: $1235 + (1240 - 1125) = 1235 + 115 = 1350$ (đúng).

</details>

---

### Dạng 4. Bài toán thực tế về phép cộng, phép trừ

**Phương pháp giải:**
- Đọc kĩ đề bài, xác định đại lượng cần tìm.
- Từ khoá "*tất cả, thêm, gộp lại*" $\implies$ làm phép **cộng**.
- Từ khoá "*bớt, còn lại, ít hơn, giảm đi*" $\implies$ làm phép **trừ**.

**Luyện tập 4.1.** Khối 6 của một trường có 385 học sinh, khối 7 có 418 học sinh. Hỏi hai khối có tất cả bao nhiêu học sinh?

<details>
<summary>Xem lời giải Luyện tập 4.1</summary>

Cả hai khối có tất cả số học sinh là:
$$385 + 418 = 803\text{ (học sinh)}.$$

</details>

**Luyện tập 4.2.** Nam mua một chiếc cặp sách giá 185 000 đồng và một hộp bút giá 45 000 đồng. Nam đưa cô bán hàng 300 000 đồng. Hỏi cô bán hàng phải trả lại Nam bao nhiêu tiền?

<details>
<summary>Xem lời giải Luyện tập 4.2</summary>

- Tổng số tiền Nam mua hàng là:
  $$185\ 000 + 45\ 000 = 230\ 000\text{ (đồng)}.$$
- Cô bán hàng phải trả lại Nam số tiền là:
  $$300\ 000 - 230\ 000 = 70\ 000\text{ (đồng)}.$$

</details>

**Luyện tập 4.3.** Một kho hàng có 1420 thùng sữa. Buổi sáng kho nhập thêm 480 thùng, buổi chiều xuất đi 650 thùng. Hỏi trong kho còn lại bao nhiêu thùng sữa?

<details>
<summary>Xem lời giải Luyện tập 4.3</summary>

- Sau khi nhập thêm, kho có:
  $$1420 + 480 = 1900\text{ (thùng)}.$$
- Sau khi xuất đi, kho còn lại:
  $$1900 - 650 = 1250\text{ (thùng sữa)}.$$

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Tính:
- a) $538 + 276$
- b) $805 - 367$ (thử lại kết quả bằng phép cộng).

<details>
<summary>Xem lời giải Bài 1</summary>

- a) $538 + 276 = 814.$
- b) $805 - 367 = 438.$
  - Thử lại: $438 + 367 = 805$ (đúng).

</details>

**Bài 2.** Điền số thích hợp vào ô trống trong bảng dưới đây:

| $a$ | $b$ | $a + b$ | $a - b$ |
| :---: | :---: | :---: | :---: |
| $8$ | $3$ | ? | ? |
| $12$ | ? | $18$ | ? |
| ? | $18$ | ? | $36$ |
| $45$ | ? | $50$ | ? |
| ? | $25$ | ? | $75$ |

<details>
<summary>Xem đáp án bảng Bài 2</summary>

| $a$ | $b$ | $a + b$ | $a - b$ |
| :---: | :---: | :---: | :---: |
| $8$ | $3$ | **$11$** | **$5$** |
| $12$ | **$6$** | $18$ | **$6$** |
| **$54$** | $18$ | **$72$** | $36$ |
| $45$ | **$5$** | $50$ | **$40$** |
| **$100$** | $25$ | **$125$** | $75$ |

- Cột 2: $b = 18 - 12 = 6 \implies a - b = 12 - 6 = 6.$
- Cột 3: $a = 36 + 18 = 54 \implies a + b = 54 + 18 = 72.$
- Cột 4: $b = 50 - 45 = 5 \implies a - b = 45 - 5 = 40.$
- Cột 5: $a = 75 + 25 = 100 \implies a + b = 100 + 25 = 125.$

</details>

**Bài 3.** Tính một cách hợp lí:
- a) $92 + 358 + 108$
- b) $6482 + 3527 - 527 - 482$

<details>
<summary>Xem lời giải Bài 3</summary>

- a) $92 + 358 + 108 = (92 + 108) + 358 = 200 + 358 = 558.$
- b) $(6482 - 482) + (3527 - 527) = 6000 + 3000 = 9000.$

</details>

**Bài 4.** Tính một cách hợp lí:
- a) $998 + 67$
- b) $2025 - 996$

<details>
<summary>Xem lời giải Bài 4</summary>

- a) $998 + 67 = (998 + 2) + (67 - 2) = 1000 + 65 = 1065.$
- b) Trừ 996 bằng cách trừ 1000 rồi cộng lại 4:
  $$2025 - 996 = 2025 - 1000 + 4 = 1025 + 4 = 1029.$$
  Thử lại: $1029 + 996 = 2025$ (đúng).

</details>

**Bài 5.** Tìm $x$, biết:
- a) $x - 178 = 95$
- b) $803 - x = 527$

<details>
<summary>Xem lời giải Bài 5</summary>

- a) $x = 95 + 178 = 273.$
- b) $x = 803 - 527 = 276.$

</details>

**Bài 6.** Tìm $x$, biết:
- a) $(x - 45) - 150 = 0$
- b) $1500 - (x + 350) = 720$

<details>
<summary>Xem lời giải Bài 6</summary>

- a) $x - 45 = 0 + 150 = 150 \implies x = 150 + 45 = 195.$
- b) $x + 350 = 1500 - 720 = 780 \implies x = 780 - 350 = 430.$

</details>

**Bài 7.** Đợt một, trường quyên góp được 1560 cuốn sách ủng hộ thư viện vùng khó khăn. Đợt hai quyên góp được ít hơn đợt một 320 cuốn. Hỏi cả hai đợt trường quyên góp được bao nhiêu cuốn sách?

<details>
<summary>Xem lời giải Bài 7</summary>

- Số sách quyên góp được ở đợt hai là:
  $$1560 - 320 = 1240\text{ (cuốn)}.$$
- Cả hai đợt quyên góp được:
  $$1560 + 1240 = 2800\text{ (cuốn sách)}.$$

</details>

**Bài 8.** Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Phép trừ có tính chất giao hoán, nghĩa là $a - b = b - a.$
- b) $18 - 8 - 4 = 18 - (8 - 4).$
- c) Có số tự nhiên $x$ thoả mãn $x + 15 = 8.$
- d) $a - 0 = 0$ với mọi số tự nhiên $a.$

<details>
<summary>Xem lời giải Bài 8</summary>

- a) **Sai**, vì $8 - 3 = 5$ nhưng $3 - 8$ không thực hiện được trong $\mathbb{N}.$ Phép trừ không có tính chất giao hoán.
- b) **Sai**, vì trừ liên tiếp là trừ đi cả tổng: $18 - 8 - 4 = 18 - (8 + 4) = 6,$ trong khi $18 - (8 - 4) = 18 - 4 = 14.$
- c) **Sai**, vì với mọi $x \in \mathbb{N}$ ta có $x + 15 \ge 15 > 8,$ do đó không tồn tại số tự nhiên nào thỏa mãn.
- d) **Sai**, vì trừ đi 0 thì giá trị không đổi: $a - 0 = a$ (chứ không phải 0).

</details>

**Bài 9.** Một đoàn tàu chở 945 hành khách. Đến ga Đà Nẵng có 312 hành khách xuống tàu và 187 hành khách lên tàu. Hỏi lúc rời ga Đà Nẵng, trên tàu có bao nhiêu hành khách?

<details>
<summary>Xem lời giải Bài 9</summary>

- Sau khi 312 khách xuống, trên tàu còn:
  $$945 - 312 = 633\text{ (hành khách)}.$$
- Sau khi 187 khách lên, trên tàu có:
  $$633 + 187 = 820\text{ (hành khách)}.$$

</details>

**Bài 10.** Hiệu của hai số tự nhiên bằng 68. Nếu bớt số bị trừ đi 15 đơn vị và thêm vào số trừ 23 đơn vị thì được hiệu mới bằng bao nhiêu?

<details>
<summary>Xem lời giải Bài 10</summary>

- Khi bớt số bị trừ đi 15 đơn vị thì hiệu giảm 15 đơn vị.
- Khi thêm vào số trừ 23 đơn vị thì hiệu lại giảm tiếp 23 đơn vị nữa.
- Vậy hiệu mới là:
  $$68 - 15 - 23 = 68 - 38 = 30.$$

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Phép tính nào sau đây KHÔNG thực hiện được trong tập hợp số tự nhiên?'
options:
  - '1000 - 725'
  - '648 - 648'
  - '278 - 387'
  - '2025 - 0'
answer: 3
explanation: 'Trong tập hợp số tự nhiên, phép trừ a - b chỉ thực hiện được khi a >= b. Phép tính 278 - 387 có số bị trừ nhỏ hơn số trừ nên không thực hiện được.'
```

```quiz
type: choice
question: 'Tính nhanh biểu thức $536 + 649 - 249 - 36$, kết quả là:'
options:
  - '800'
  - '900'
  - '1000'
  - '850'
answer: 2
explanation: 'Ghép cặp: (536 - 36) + (649 - 249) = 500 + 400 = 900.'
```

```quiz
type: choice
question: 'Tìm x biết $426 - x = 259$.'
options:
  - '167'
  - '685'
  - '177'
  - '267'
answer: 1
explanation: 'x là số trừ nên x = 426 - 259 = 167.'
```

```quiz
type: choice
question: 'Một cửa hàng có 1000 kg đường. Buổi sáng bán 346 kg, buổi chiều bán 284 kg. Hỏi còn lại bao nhiêu kg đường?'
options:
  - '470 kg'
  - '370 kg'
  - '360 kg'
  - '420 kg'
answer: 2
explanation: 'Cả ngày bán được 346 + 284 = 630 kg. Số đường còn lại là 1000 - 630 = 370 kg.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Tính:
- a) $467 + 333$
- b) $872 - 395$

<details>
<summary>Xem lời giải Câu 1</summary>

- a) $467 + 333 = 800.$
- b) $872 - 395 = 477.$

</details>

**Câu 2.** Tính: $3852 + 1469 - 852.$

<details>
<summary>Xem lời giải Câu 2</summary>

$$3852 + 1469 - 852 = (3852 - 852) + 1469 = 3000 + 1469 = 4469.$$

</details>

**Câu 3.** Tính một cách hợp lí:
- a) $57 + 864 + 43$
- b) $536 + 649 - 249 - 36$

<details>
<summary>Xem lời giải Câu 3</summary>

- a) $(57 + 43) + 864 = 100 + 864 = 964.$
- b) $(536 - 36) + (649 - 249) = 500 + 400 = 900.$

</details>

**Câu 4.** Tính một cách hợp lí: $1997 + 48.$

<details>
<summary>Xem lời giải Câu 4</summary>

$$1997 + 48 = (1997 + 3) + (48 - 3) = 2000 + 45 = 2045.$$

</details>

**Câu 5.** Tìm $x$, biết:
- a) $x + 69 = 214$
- b) $x - 84 = 136$

<details>
<summary>Xem lời giải Câu 5</summary>

- a) $x = 214 - 69 = 145.$
- b) $x = 136 + 84 = 220.$

</details>

**Câu 6.** Tìm $x$, biết: $426 - x = 259.$

<details>
<summary>Xem lời giải Câu 6</summary>

$x$ là số trừ:
$$x = 426 - 259 = 167.$$

</details>

**Câu 7.** Trong hai phép tính $325 - 450$ và $450 - 325$, phép tính nào thực hiện được trong tập hợp số tự nhiên? Hãy tính kết quả của phép tính đó.

<details>
<summary>Xem lời giải Câu 7</summary>

- Vì $325 < 450$ nên phép tính $325 - 450$ không thực hiện được trong $\mathbb{N}.$
- Phép tính $450 - 325$ thực hiện được vì $450 > 325.$
  $$450 - 325 = 125.$$

</details>

**Câu 8.** Kho có 1000 kg xi măng. Buổi sáng cửa hàng xuất 375 kg, buổi chiều xuất 285 kg. Hỏi trong kho còn lại bao nhiêu ki-lô-gam xi măng?

<details>
<summary>Xem lời giải Câu 8</summary>

- Tổng số xi măng xuất trong cả ngày là:
  $$375 + 285 = 660\text{ (kg)}.$$
- Số xi măng còn lại trong kho là:
  $$1000 - 660 = 340\text{ (kg xi măng)}.$$

</details>

**Câu 9.** Minh có 120 000 đồng. Minh mua một tập vở giá 46 000 đồng và một chiếc compa giá 18 500 đồng. Hỏi Minh còn lại bao nhiêu tiền?

<details>
<summary>Xem lời giải Câu 9</summary>

- Minh mua hết tổng cộng số tiền là:
  $$46\ 000 + 18\ 500 = 64\ 500\text{ (đồng)}.$$
- Số tiền Minh còn lại là:
  $$120\ 000 - 64\ 500 = 55\ 500\text{ (đồng)}.$$

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Bài toán của nhà toán học Gauss).**
- a) Tính tổng $S = 1 + 2 + 3 + \dots + 199 + 200.$
- b) Dùng cách đó, tính tổng các số lẻ: $T = 1 + 3 + 5 + \dots + 97 + 99.$

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

- a) Ghép số đầu với số cuối:
  $$1 + 200 = 201;\quad 2 + 199 = 201;\quad 3 + 198 = 201;\quad \dots;\quad 100 + 101 = 201.$$
  - Từ 1 đến 200 có 200 số hạng, ghép được đúng $200 : 2 = 100$ cặp, mỗi cặp có tổng bằng 201.
  - Tổng $S$ là:
    $$S = 201 \times 100 = 20\ 100.$$
- b) Dãy số lẻ từ 1 đến 99 có $(99 - 1) : 2 + 1 = 50$ số hạng.
  - Ghép từng cặp:
    $$1 + 99 = 100;\quad 3 + 97 = 100;\quad \dots;\quad 49 + 51 = 100.$$
  - Có tất cả $50 : 2 = 25$ cặp, mỗi cặp có tổng bằng 100.
  - Tổng $T$ là:
    $$T = 100 \times 25 = 2500.$$

</details>

**Bài 2 (Bài toán tìm hai số khi biết tổng và hiệu).**
Hai bao thóc chứa tất cả 178 kg thóc, bao thứ nhất chứa nhiều hơn bao thứ hai 34 kg. Hỏi mỗi bao chứa bao nhiêu ki-lô-gam thóc?

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

- Nếu bớt ở bao thứ nhất đi 34 kg thì số thóc ở hai bao bằng nhau.
- Khi đó tổng số thóc ở cả hai bao là:
  $$178 - 34 = 144\text{ (kg)}.$$
- Số thóc ở bao thứ hai là:
  $$144 : 2 = 72\text{ (kg)}.$$
- Số thóc ở bao thứ nhất là:
  $$72 + 34 = 106\text{ (kg)}.$$
- Thử lại: $106 + 72 = 178$ và $106 - 72 = 34$ (hoàn toàn chính xác).

</details>

**Bài 3 (Cấu tạo số trong phép cộng).**
Tìm các chữ số $a$ và $b$ ($a \ne 0$) thoả mãn phép tính:
$$\overline{aba} + \overline{ab} = 355.$$

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

- Phân tích cấu tạo số ở vế trái:
  $$\overline{aba} = 100a + 10b + a = 101a + 10b$$
  $$\overline{ab} = 10a + b$$
- Khi đó:
  $$\overline{aba} + \overline{ab} = (101a + 10b) + (10a + b) = 111a + 11b.$$
- Theo đề bài:
  $$111a + 11b = 355.$$
- Vì $a$ là chữ số khác 0 và $b \le 9$:
  - Nếu $a \ge 4 \implies 111a \ge 444 > 355$ (loại).
  - Nếu $a \le 2 \implies 111a \le 222 \implies 11b = 355 - 111a \ge 355 - 222 = 133 > 99$ (vô lý vì $11b \le 99$).
  - Do đó bắt buộc $a = 3.$
- Với $a = 3$:
  $$111 \times 3 + 11b = 355 \implies 333 + 11b = 355 \implies 11b = 355 - 333 = 22 \implies b = 2.$$
- Thử lại: $323 + 32 = 355$ (hoàn toàn chính xác).
- Vậy các chữ số cần tìm là: **$a = 3;\ b = 2$**.

</details>

**Bài 4 (Cực trị cấu tạo số).**
Cho ba chữ số $a, b, c$ nhận ba giá trị $2; 4; 6$ (mỗi chữ số nhận một giá trị khác nhau). Hãy chọn giá trị của $a, b, c$ sao cho tổng $\overline{abc} + \overline{bca}$ đạt giá trị lớn nhất. Tổng lớn nhất đó bằng bao nhiêu?

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- Phân tích cấu tạo số của tổng:
  $$\overline{abc} + \overline{bca} = (100a + 10b + c) + (100b + 10c + a)$$
  $$= (100a + a) + (10b + 100b) + (c + 10c)$$
  $$= 101a + 110b + 11c.$$
- Quan sát hệ số của từng chữ số:
  - Hệ số của $b$ lớn nhất ($110$).
  - Tiếp theo là hệ số của $a$ ($101$).
  - Hệ số của $c$ nhỏ nhất ($11$).
- Để tổng đạt giá trị lớn nhất, ta gán chữ số lớn nhất cho chữ số có hệ số lớn nhất:
  - Chọn $b = 6$ (lớn nhất).
  - Chọn $a = 4.$
  - Chọn $c = 2.$
- Khi đó tổng lớn nhất là:
  $$\overline{abc} + \overline{bca} = 462 + 624 = 1086.$$
- Vậy tổng lớn nhất bằng **$1086$**, đạt được khi $a = 4, b = 6, c = 2.$

</details>
