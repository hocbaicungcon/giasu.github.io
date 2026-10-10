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

**Câu 1.** Tìm số liền trước và số liền sau của mỗi số sau: $500$; $3079.$

<details>
<summary>Xem đáp án Câu 1</summary>

- Số $500$: số liền trước là $499$, số liền sau là $501.$
- Số $3079$: số liền trước là $3078$, số liền sau là $3080.$

</details>

**Câu 2.** Điền dấu thích hợp ($<, >$ hoặc $=$) vào chỗ chấm:
$$5978 \dots 5987;\quad 10\ 000 \dots 9999;\quad 4152 \dots 4152.$$

<details>
<summary>Xem đáp án Câu 2</summary>

- $5978 < 5987$ (hàng chục: $7 < 8$).
- $10\ 000 > 9999$ (5 chữ số $> 4$ chữ số).
- $4152 = 4152.$

</details>

**Câu 3.** Điền vào chỗ trống để mỗi dòng sau là ba số tự nhiên liên tiếp xếp từ bé đến lớn:
- a) $78;\ \dots;\ \dots$
- b) $\dots;\ \dots;\ 300.$

<details>
<summary>Xem đáp án Câu 3</summary>

- a) $78;\ 79;\ 80.$
- b) $298;\ 299;\ 300.$

</details>

**Câu 4.** Liệt kê các phần tử của mỗi tập hợp sau:
- a) $A = \{x \in \mathbb{N} \mid 47 \le x < 52\}$
- b) $B = \{x \in \mathbb{N}^* \mid x \le 5\}$

<details>
<summary>Xem đáp án Câu 4</summary>

- a) $A = \{47; 48; 49; 50; 51\}$ (lấy 47, không lấy 52).
- b) $B = \{1; 2; 3; 4; 5\}$ (vì $x \in \mathbb{N}^*$ nên không lấy số 0).

</details>

**Câu 5.** Cho tia số dưới đây:

<div style="display:flex; justify-content:center; margin:16px 0;">
  <svg width="420" height="75" viewBox="0 0 420 75" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <line x1="20" y1="35" x2="395" y2="35" stroke="#334155" stroke-width="2"/>
    <polygon points="405,35 390,30 390,40" fill="#334155"/>
    <!-- vạch 0 at x=30, step=28px (mỗi vạch 1 đơn vị) -->
    <line x1="30" y1="28" x2="30" y2="42" stroke="#334155" stroke-width="2"/><text x="30" y="58" font-size="12" text-anchor="middle">0</text>
    <line x1="114" y1="28" x2="114" y2="42" stroke="#334155" stroke-width="2"/><text x="114" y="58" font-size="12" text-anchor="middle">3</text>
    <!-- A tại 4 (x = 30 + 4*28 = 142) -->
    <circle cx="142" cy="35" r="4.5" fill="#2563eb"/><text x="142" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">A</text>
    <line x1="198" y1="28" x2="198" y2="42" stroke="#334155" stroke-width="2"/><text x="198" y="58" font-size="12" text-anchor="middle">6</text>
    <line x1="282" y1="28" x2="282" y2="42" stroke="#334155" stroke-width="2"/><text x="282" y="58" font-size="12" text-anchor="middle">9</text>
    <!-- B tại 10 (x = 30 + 10*28 = 310) -->
    <circle cx="310" cy="35" r="4.5" fill="#16a34a"/><text x="310" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#15803d">B</text>
    <line x1="366" y1="28" x2="366" y2="42" stroke="#334155" stroke-width="2"/><text x="366" y="58" font-size="12" text-anchor="middle">12</text>
  </svg>
</div>

Mỗi điểm $A, B$ ứng với số tự nhiên nào? Trong hai số đó, số nào lớn hơn?

<details>
<summary>Xem đáp án Câu 5</summary>

- Đếm từ vạch 0: điểm $A$ ứng với số **$4$**, điểm $B$ ứng với số **$10.$**
- Điểm $B$ nằm bên phải điểm $A$ nên $10 > 4.$ Vậy số ứng với điểm $B$ lớn hơn.

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
> - a) $358 + 214$
> - b) $123 + 456 + 789$

<details>
<summary>Xem lời giải Ví dụ 1</summary>

- a) Đặt tính thẳng cột rồi cộng từ phải sang trái:
  $$358 + 214 = 572.$$
  Ở đây $358$ và $214$ là các số hạng, còn $572$ là tổng.
- b) Cộng lần lượt từ trái sang phải:
  $$123 + 456 = 579;\quad 579 + 789 = 1368.$$
  Vậy $123 + 456 + 789 = 1368.$

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
    <line x1="183" y1="45" x2="183" y2="55" stroke="#94a3b8"/><text x="183" y="70" font-size="12" text-anchor="middle">4</text>
    <line x1="220" y1="45" x2="220" y2="55" stroke="#2563eb" stroke-width="2"/><text x="220" y="70" font-size="12" font-weight="bold" text-anchor="middle" fill="#1d4ed8">5</text>
    <line x1="257" y1="45" x2="257" y2="55" stroke="#94a3b8"/><text x="257" y="70" font-size="12" text-anchor="middle">6</text>
    <line x1="294" y1="45" x2="294" y2="55" stroke="#94a3b8"/><text x="294" y="70" font-size="12" text-anchor="middle">7</text>
    <line x1="331" y1="45" x2="331" y2="55" stroke="#16a34a" stroke-width="2"/><text x="331" y="70" font-size="12" font-weight="bold" text-anchor="middle" fill="#15803d">8</text>
    <line x1="368" y1="45" x2="368" y2="55" stroke="#94a3b8"/><text x="368" y="70" font-size="12" text-anchor="middle">9</text>
    <!-- Nhảy sang phải +3: từ 5 (x=220) đến 8 (x=331) -->
    <path d="M 220,45 Q 275,18 331,45" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="275" y="16" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">+3</text>
    <!-- Nhảy sang trái -3: từ 8 (x=331) về 5 (x=220) -->
    <path d="M 331,55 Q 275,82 220,55" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="275" y="86" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">-3</text>
  </svg>
</div>

> **Ví dụ 2.**
> - a) Tính $865 - 417$ rồi thử lại kết quả.
> - b) Trong hai phép tính $815 - 1000$ và $1000 - 815$, phép tính nào thực hiện được trong tập hợp số tự nhiên? Hãy tính kết quả.

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- a) Thực hiện phép tính:
  $$865 - 417 = 448.$$
  - Thử lại: $448 + 417 = 865$ (đúng bằng số bị trừ). Vậy kết quả chính xác.
- b) Xét điều kiện:
  - Phép tính $815 - 1000$ **không thực hiện được** trong $\mathbb{N}$ vì số bị trừ bé hơn số trừ ($815 < 1000$).
  - Phép tính $1000 - 815$ **thực hiện được** vì $1000 > 815.$ Kết quả là:
    $$1000 - 815 = 185.$$

</details>

---

### 3. Các kĩ thuật tính nhanh (tính hợp lí)

1. **Nhóm tạo số tròn chục, tròn trăm, tròn nghìn:**
   - Dùng tính chất giao hoán và kết hợp để ghép các cặp số có tận cùng cộng lại ra 10, 100,...
   $$\text{Ví dụ: } 97 + 65 + 3 = (97 + 3) + 65 = 100 + 65 = 165.$$
2. **Kĩ thuật thêm bớt cùng một số:**
   - Khi cộng hai số: thêm vào số hạng này bao nhiêu thì bớt ở số hạng kia bấy nhiêu, tổng không đổi.
   $$\text{Ví dụ: } 999 + 45 = (999 + 1) + (45 - 1) = 1000 + 44 = 1044.$$
3. **Quy tắc trừ liên tiếp một tổng:**
   - Trừ đi từng số cũng bằng trừ đi cả tổng của chúng:
   $$a - b - c = a - (b + c)$$
   $$\text{Ví dụ: } 100 - 37 - 63 = 100 - (37 + 63) = 100 - 100 = 0.$$

> **Ví dụ 3.** Tính một cách hợp lí:
> - a) $57 + 123 + 43$
> - b) $298 + 532 - 32 - 98$
> - c) $997 + 58$

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) $57 + 123 + 43 = (57 + 43) + 123 = 100 + 123 = 223.$
- b) Ghép mỗi số trừ với số hạng có cùng phần đuôi:
  $$298 + 532 - 32 - 98 = (298 - 98) + (532 - 32) = 200 + 500 = 700.$$
- c) Thêm 3 vào 997 và bớt 3 ở 58:
  $$997 + 58 = (997 + 3) + (58 - 3) = 1000 + 55 = 1055.$$

</details>

---

### 4. Bốn chú ý rất dễ nhầm lẫn

1. **Phép trừ KHÔNG có tính chất giao hoán và kết hợp:**
   - $7 - 3 \ne 3 - 7.$ Chỉ được tự do đổi chỗ, nhóm các số hạng trong **phép cộng**.
2. **Trong tập hợp $\mathbb{N}$, phép trừ $a - b$ không thực hiện được khi $a < b$:**
   - Không có số tự nhiên nào bằng $5 - 8.$
3. **Phân biệt $a - 0$ và $0 - a$:**
   - $a - 0 = a,$ nhưng $0 - a$ không thực hiện được trong $\mathbb{N}$ (khi $a > 0$). Tránh viết sai thành $0 - 7 = 7.$
4. **Khi đổi chỗ trong biểu thức có cả cộng và trừ, phải mang theo dấu đứng trước số đó:**
   - Trong biểu thức $298 + 532 - 32,$ số $32$ mang dấu trừ, nên phải ghép là $(532 - 32)$ chứ không được viết $(532 + 32).$

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Thực hiện phép cộng, phép trừ

**Phương pháp giải:**
- Đặt tính thẳng hàng từ phải sang trái.
- Dãy tính chỉ gồm cộng và trừ thì thực hiện theo thứ tự từ trái sang phải.
- Luôn kiểm tra lại phép trừ bằng phép cộng: $\text{Hiệu} + \text{Số trừ} = \text{Số bị trừ}.$

**Luyện tập 1.1.** Tính:
- a) $216 + 307$
- b) $123 + 456 + 789$

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- a) $216 + 307 = 523.$
- b) Tính từ trái sang phải: $123 + 456 = 579;\quad 579 + 789 = 1368.$

</details>

**Luyện tập 1.2.** Tính $56\ 768 - 12\ 379$ rồi thử lại kết quả bằng phép cộng.

<details>
<summary>Xem lời giải Luyện tập 1.2</summary>

- Thực hiện phép trừ: $56\ 768 - 12\ 379 = 44\ 389.$
- Thử lại: $44\ 389 + 12\ 379 = 56\ 768$ (đúng bằng số bị trừ).

</details>

**Luyện tập 1.3.** Tính: $78\ 349 - 10\ 240 + 56\ 711.$

<details>
<summary>Xem lời giải Luyện tập 1.3</summary>

Tính từ trái sang phải:
$$78\ 349 - 10\ 240 = 68\ 109$$
$$68\ 109 + 56\ 711 = 124\ 820.$$

</details>

---

### Dạng 2. Tính nhanh (Tính hợp lí)

**Phương pháp giải:**
- Tìm các cặp số có tổng tròn chục, tròn trăm ($1 + 9 = 10, 2 + 8 = 10, 3 + 7 = 10, \dots$).
- Ghép số bị trừ và số trừ có chữ số hàng đơn vị giống nhau.
- Với số gần tròn nghìn ($1998, 1999$), thực hiện mượn để tạo số tròn nghìn.

**Luyện tập 2.1.** Tính một cách hợp lí: $142 + 657 + 243 + 258.$

```quiz
type: choice
question: 'Kết quả của phép tính $142 + 657 + 243 + 258$ khi tính hợp lí là:'
options:
  - '1200'
  - '1300'
  - '1400'
  - '1250'
answer: 2
explanation: 'Ghép cặp tròn trăm: (142 + 258) + (657 + 243) = 400 + 900 = 1300.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 2.1</summary>

Ghép hai cặp có tổng tròn trăm:
$$142 + 657 + 243 + 258 = (142 + 258) + (657 + 243) = 400 + 900 = 1300.$$

</details>

**Luyện tập 2.2.** Tính một cách hợp lí: $1252 + 3139 - 1139 - 252.$

<details>
<summary>Xem lời giải Luyện tập 2.2</summary>

Ghép mỗi số trừ với số hạng có cùng phần đuôi:
$$1252 + 3139 - 1139 - 252 = (1252 - 252) + (3139 - 1139) = 1000 + 2000 = 3000.$$

</details>

**Luyện tập 2.3.** Tính một cách hợp lí: $1997 + 1998 + 1999 + 2001 + 2002 + 2003.$

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

Ghép số nhỏ nhất với số lớn nhất (mỗi cặp có tổng bằng 4000):
$$(1997 + 2003) + (1998 + 2002) + (1999 + 2001) = 4000 + 4000 + 4000 = 12\ 000.$$

</details>

---

### Dạng 3. Tìm số chưa biết trong phép cộng, phép trừ

**Phương pháp giải:**
- Tìm số hạng chưa biết: $\text{Số hạng} = \text{Tổng} - \text{Số hạng đã biết}.$
- Tìm số bị trừ: $\text{Số bị trừ} = \text{Hiệu} + \text{Số trừ}.$
- Tìm số trừ: $\text{Số trừ} = \text{Số bị trừ} - \text{Hiệu}.$
- Bài toán có chứa dấu ngoặc: coi cả biểu thức trong ngoặc là một thành phần chưa biết, tìm giá trị của ngoặc trước rồi mới tìm $x.$

**Luyện tập 3.1.** Tìm $x$, biết:
- a) $x + 37 = 94$
- b) $58 - x = 26$

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- a) $x$ là số hạng chưa biết:
  $$x = 94 - 37 = 57.$$
- b) $x$ là số trừ:
  $$x = 58 - 26 = 32.$$

</details>

**Luyện tập 3.2.** Tìm $x$, biết: $(x - 2) + 12 = 25.$

```quiz
type: choice
question: 'Giá trị của x thỏa mãn $(x - 2) + 12 = 25$ là:'
options:
  - '11'
  - '13'
  - '15'
  - '17'
answer: 3
explanation: 'Coi (x - 2) là số hạng: x - 2 = 25 - 12 = 13. Suy ra x = 13 + 2 = 15.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 3.2</summary>

- Coi cụm $(x - 2)$ là số hạng chưa biết:
  $$x - 2 = 25 - 12 = 13.$$
- $x$ là số bị trừ:
  $$x = 13 + 2 = 15.$$

</details>

**Luyện tập 3.3.** Tìm $x$, biết: $1124 + (1118 - x) = 1217.$

<details>
<summary>Xem lời giải Luyện tập 3.3</summary>

- Coi cụm $(1118 - x)$ là số hạng chưa biết:
  $$1118 - x = 1217 - 1124 = 93.$$
- $x$ là số trừ:
  $$x = 1118 - 93 = 1025.$$
- Thử lại: $1124 + (1118 - 1025) = 1124 + 93 = 1217$ (đúng).

</details>

---

### Dạng 4. Bài toán thực tế về phép cộng, phép trừ

**Phương pháp giải:**
- Đọc kĩ đề bài, xác định đại lượng cần tìm.
- Từ khoá "*tất cả, thêm, gộp lại*" $\implies$ làm phép **cộng**.
- Từ khoá "*bớt, còn lại, ít hơn, giảm đi*" $\implies$ làm phép **trừ**.

**Luyện tập 4.1.** Khối 6 của một trường có 425 học sinh, khối 7 có 387 học sinh. Hỏi hai khối có tất cả bao nhiêu học sinh?

<details>
<summary>Xem lời giải Luyện tập 4.1</summary>

Cả hai khối có tất cả số học sinh là:
$$425 + 387 = 812\text{ (học sinh)}.$$

</details>

**Luyện tập 4.2.** Mai mua một quyển sách giá 78 000 đồng và một tập vở giá 45 000 đồng. Mai đưa cô bán hàng 150 000 đồng. Hỏi cô bán hàng phải trả lại Mai bao nhiêu tiền?

<details>
<summary>Xem lời giải Luyện tập 4.2</summary>

- Tổng số tiền Mai mua sách và vở là:
  $$78\ 000 + 45\ 000 = 123\ 000\text{ (đồng)}.$$
- Cô bán hàng phải trả lại Mai số tiền là:
  $$150\ 000 - 123\ 000 = 27\ 000\text{ (đồng)}.$$

</details>

**Luyện tập 4.3.** Thư viện trường có 1250 quyển sách. Đầu năm thư viện mua thêm 375 quyển, sau đó cho học sinh mượn 480 quyển. Hỏi trong thư viện còn lại bao nhiêu quyển sách?

<details>
<summary>Xem lời giải Luyện tập 4.3</summary>

- Sau khi mua thêm, thư viện có:
  $$1250 + 375 = 1625\text{ (quyển)}.$$
- Sau khi cho mượn, thư viện còn lại:
  $$1625 - 480 = 1145\text{ (quyển sách)}.$$

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Tính:
- a) $427 + 185$
- b) $703 - 258$ (thử lại kết quả bằng phép cộng).

<details>
<summary>Xem lời giải Bài 1</summary>

- a) $427 + 185 = 612.$
- b) $703 - 258 = 445.$
  - Thử lại: $445 + 258 = 703$ (đúng).

</details>

**Bài 2.** Điền số thích hợp vào ô trống trong bảng dưới đây:

| $a$ | $b$ | $a + b$ | $a - b$ |
| :---: | :---: | :---: | :---: |
| $6$ | $2$ | ? | ? |
| $10$ | ? | $15$ | ? |
| ? | $16$ | ? | $32$ |
| $36$ | ? | $40$ | ? |
| ? | $20$ | ? | $80$ |

<details>
<summary>Xem đáp án bảng Bài 2</summary>

| $a$ | $b$ | $a + b$ | $a - b$ |
| :---: | :---: | :---: | :---: |
| $6$ | $2$ | **$8$** | **$4$** |
| $10$ | **$5$** | $15$ | **$5$** |
| **$48$** | $16$ | **$64$** | $32$ |
| $36$ | **$4$** | $40$ | **$32$** |
| **$100$** | $20$ | **$120$** | $80$ |

- Cột 2: $b = 15 - 10 = 5 \implies a - b = 10 - 5 = 5.$
- Cột 3: $a = 32 + 16 = 48 \implies a + b = 48 + 16 = 64.$
- Cột 4: $b = 40 - 36 = 4 \implies a - b = 36 - 4 = 32.$
- Cột 5: $a = 80 + 20 = 100 \implies a + b = 100 + 20 = 120.$

</details>

**Bài 3.** Tính một cách hợp lí:
- a) $81 + 243 + 19$
- b) $5347 + 2456 - 456 - 347$

<details>
<summary>Xem lời giải Bài 3</summary>

- a) $81 + 243 + 19 = (81 + 19) + 243 = 100 + 243 = 343.$
- b) $(5347 - 347) + (2456 - 456) = 5000 + 2000 = 7000.$

</details>

**Bài 4.** Tính một cách hợp lí:
- a) $999 + 58$
- b) $2026 - 997$

<details>
<summary>Xem lời giải Bài 4</summary>

- a) $999 + 58 = (999 + 1) + (58 - 1) = 1000 + 57 = 1057.$
- b) Trừ 997 bằng cách trừ 1000 rồi cộng lại 3:
  $$2026 - 997 = 2026 - 1000 + 3 = 1026 + 3 = 1029.$$
  Thử lại: $1029 + 997 = 2026$ (đúng).

</details>

**Bài 5.** Tìm $x$, biết:
- a) $x - 156 = 79$
- b) $702 - x = 456$

<details>
<summary>Xem lời giải Bài 5</summary>

- a) $x = 79 + 156 = 235.$
- b) $x = 702 - 456 = 246.$

</details>

**Bài 6.** Tìm $x$, biết:
- a) $(x - 35) - 120 = 0$
- b) $1200 - (x + 240) = 560$

<details>
<summary>Xem lời giải Bài 6</summary>

- a) $x - 35 = 0 + 120 = 120 \implies x = 120 + 35 = 155.$
- b) $x + 240 = 1200 - 560 = 640 \implies x = 640 - 240 = 400.$

</details>

**Bài 7.** Đợt một, trường quyên góp được 1450 quyển vở ủng hộ các bạn vùng lũ. Đợt hai quyên góp được ít hơn đợt một 280 quyển. Hỏi cả hai đợt trường quyên góp được bao nhiêu quyển vở?

<details>
<summary>Xem lời giải Bài 7</summary>

- Số vở quyên góp được ở đợt hai là:
  $$1450 - 280 = 1170\text{ (quyển)}.$$
- Cả hai đợt quyên góp được:
  $$1450 + 1170 = 2620\text{ (quyển vở)}.$$

</details>

**Bài 8.** Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Phép trừ có tính chất giao hoán, nghĩa là $a - b = b - a.$
- b) $15 - 7 - 3 = 15 - (7 - 3).$
- c) Có số tự nhiên $x$ thoả mãn $x + 12 = 5.$
- d) $a - 0 = 0$ với mọi số tự nhiên $a.$

<details>
<summary>Xem lời giải Bài 8</summary>

- a) **Sai**, vì $7 - 3 = 4$ nhưng $3 - 7$ không thực hiện được trong $\mathbb{N}.$ Phép trừ không có tính chất giao hoán.
- b) **Sai**, vì trừ liên tiếp là trừ đi cả tổng: $15 - 7 - 3 = 15 - (7 + 3) = 5,$ trong khi $15 - (7 - 3) = 15 - 4 = 11.$
- c) **Sai**, vì với mọi $x \in \mathbb{N}$ ta có $x + 12 \ge 12 > 5,$ do đó không tồn tại số tự nhiên nào thỏa mãn.
- d) **Sai**, vì trừ đi 0 thì giá trị không đổi: $a - 0 = a$ (chứ không phải 0).

</details>

**Bài 9.** Một đoàn tàu chở 892 hành khách. Đến ga Vinh có 257 hành khách xuống tàu và 138 hành khách lên tàu. Hỏi lúc rời ga Vinh, trên tàu có bao nhiêu hành khách?

<details>
<summary>Xem lời giải Bài 9</summary>

- Sau khi 257 khách xuống, trên tàu còn:
  $$892 - 257 = 635\text{ (hành khách)}.$$
- Sau khi 138 khách lên, trên tàu có:
  $$635 + 138 = 773\text{ (hành khách)}.$$

</details>

**Bài 10.** Hiệu của hai số tự nhiên bằng 57. Nếu bớt số bị trừ đi 12 đơn vị và thêm vào số trừ 18 đơn vị thì được hiệu mới bằng bao nhiêu?

<details>
<summary>Xem lời giải Bài 10</summary>

- Khi bớt số bị trừ đi 12 đơn vị thì hiệu giảm 12 đơn vị.
- Khi thêm vào số trừ 18 đơn vị thì hiệu lại giảm tiếp 18 đơn vị nữa.
- Vậy hiệu mới là:
  $$57 - 12 - 18 = 57 - 30 = 27.$$

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Phép tính nào sau đây KHÔNG thực hiện được trong tập hợp số tự nhiên?'
options:
  - '1000 - 815'
  - '567 - 567'
  - '345 - 453'
  - '2026 - 0'
answer: 3
explanation: 'Trong tập hợp số tự nhiên, phép trừ a - b chỉ thực hiện được khi a >= b. Phép tính 345 - 453 có số bị trừ nhỏ hơn số trừ nên không thực hiện được.'
```

```quiz
type: choice
question: 'Tính nhanh biểu thức $428 + 537 - 137 - 28$, kết quả là:'
options:
  - '700'
  - '800'
  - '900'
  - '750'
answer: 2
explanation: 'Ghép cặp: (428 - 28) + (537 - 137) = 400 + 400 = 800.'
```

```quiz
type: choice
question: 'Tìm x biết $315 - x = 178$.'
options:
  - '137'
  - '493'
  - '147'
  - '237'
answer: 1
explanation: 'x là số trừ nên x = 315 - 178 = 137.'
```

```quiz
type: choice
question: 'Một cửa hàng có 1000 kg gạo. Buổi sáng bán 358 kg, buổi chiều bán 267 kg. Hỏi còn lại bao nhiêu kg gạo?'
options:
  - '475 kg'
  - '375 kg'
  - '365 kg'
  - '425 kg'
answer: 2
explanation: 'Cả ngày bán được 358 + 267 = 625 kg. Số gạo còn lại là 1000 - 625 = 375 kg.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Tính:
- a) $356 + 244$
- b) $951 - 487$

<details>
<summary>Xem lời giải Câu 1</summary>

- a) $356 + 244 = 600.$
- b) $951 - 487 = 464.$

</details>

**Câu 2.** Tính: $2764 + 1358 - 764.$

<details>
<summary>Xem lời giải Câu 2</summary>

$$2764 + 1358 - 764 = (2764 - 764) + 1358 = 2000 + 1358 = 3358.$$

</details>

**Câu 3.** Tính một cách hợp lí:
- a) $46 + 789 + 54$
- b) $428 + 537 - 137 - 28$

<details>
<summary>Xem lời giải Câu 3</summary>

- a) $(46 + 54) + 789 = 100 + 789 = 889.$
- b) $(428 - 28) + (537 - 137) = 400 + 400 = 800.$

</details>

**Câu 4.** Tính một cách hợp lí: $1998 + 36.$

<details>
<summary>Xem lời giải Câu 4</summary>

$$1998 + 36 = (1998 + 2) + (36 - 2) = 2000 + 34 = 2034.$$

</details>

**Câu 5.** Tìm $x$, biết:
- a) $x + 58 = 203$
- b) $x - 76 = 124$

<details>
<summary>Xem lời giải Câu 5</summary>

- a) $x = 203 - 58 = 145.$
- b) $x = 124 + 76 = 200.$

</details>

**Câu 6.** Tìm $x$, biết: $315 - x = 178.$

<details>
<summary>Xem lời giải Câu 6</summary>

$x$ là số trừ:
$$x = 315 - 178 = 137.$$

</details>

**Câu 7.** Trong hai phép tính $245 - 370$ và $370 - 245$, phép tính nào thực hiện được trong tập hợp số tự nhiên? Hãy tính kết quả của phép tính đó.

<details>
<summary>Xem lời giải Câu 7</summary>

- Vì $245 < 370$ nên phép tính $245 - 370$ không thực hiện được trong $\mathbb{N}.$
- Phép tính $370 - 245$ thực hiện được vì $370 > 245.$
  $$370 - 245 = 125.$$

</details>

**Câu 8.** Kho có 1000 kg gạo. Buổi sáng cửa hàng bán được 358 kg, buổi chiều bán được 267 kg. Hỏi trong kho còn lại bao nhiêu ki-lô-gam gạo?

<details>
<summary>Xem lời giải Câu 8</summary>

- Tổng số gạo bán trong cả ngày là:
  $$358 + 267 = 625\text{ (kg)}.$$
- Số gạo còn lại trong kho là:
  $$1000 - 625 = 375\text{ (kg gạo)}.$$

</details>

**Câu 9.** Lan có 95 000 đồng. Lan mua một quyển truyện giá 38 000 đồng và một chiếc bút giá 12 500 đồng. Hỏi Lan còn lại bao nhiêu tiền?

<details>
<summary>Xem lời giải Câu 9</summary>

- Lan mua hết tổng cộng số tiền là:
  $$38\ 000 + 12\ 500 = 50\ 500\text{ (đồng)}.$$
- Số tiền Lan còn lại là:
  $$95\ 000 - 50\ 500 = 44\ 500\text{ (đồng)}.$$

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Bài toán của nhà toán học Gauss).**
- a) Tính tổng $S = 1 + 2 + 3 + \dots + 99 + 100.$
- b) Dùng cách đó, tính tổng các số chẵn: $T = 2 + 4 + 6 + \dots + 98 + 100.$

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

- a) Ghép số đầu với số cuối:
  $$1 + 100 = 101;\quad 2 + 99 = 101;\quad 3 + 98 = 101;\quad \dots;\quad 50 + 51 = 101.$$
  - Từ 1 đến 100 có 100 số hạng, ghép được đúng $100 : 2 = 50$ cặp, mỗi cặp có tổng bằng 101.
  - Tổng $S$ là:
    $$S = 101 \times 50 = 5050.$$
- b) Dãy số chẵn từ 2 đến 100 có $(100 - 2) : 2 + 1 = 50$ số hạng.
  - Ghép từng cặp:
    $$2 + 100 = 102;\quad 4 + 98 = 102;\quad \dots;\quad 50 + 52 = 102.$$
  - Có tất cả $50 : 2 = 25$ cặp, mỗi cặp có tổng bằng 102.
  - Tổng $T$ là:
    $$T = 102 \times 25 = 2550.$$

</details>

**Bài 2 (Bài toán tìm hai số khi biết tổng và hiệu).**
Hai kho chứa tất cả 145 tấn thóc, kho thứ nhất chứa nhiều hơn kho thứ hai 27 tấn. Hỏi mỗi kho chứa bao nhiêu tấn thóc?

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

- Nếu bớt ở kho thứ nhất đi 27 tấn thì số thóc ở hai kho bằng nhau.
- Khi đó tổng số thóc của cả hai kho là:
  $$145 - 27 = 118\text{ (tấn)}.$$
- Số thóc ở kho thứ hai là:
  $$118 : 2 = 59\text{ (tấn)}.$$
- Số thóc ở kho thứ nhất là:
  $$59 + 27 = 86\text{ (tấn)}.$$
- Thử lại: $86 + 59 = 145$ và $86 - 59 = 27$ (hoàn toàn chính xác).

</details>

**Bài 3 (Điền chữ số thích hợp).**
Thay mỗi chữ cái bởi một chữ số thích hợp:
$$8aba + c25d = d52c.$$

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

- Quan sát hàng nghìn: tổng $d52c$ có bốn chữ số, số hạng thứ nhất có hàng nghìn là 8. Do đó ở hàng nghìn, phép cộng $8 + c$ (kể cả có nhớ) không được vượt quá 9.
- Vì $c$ là chữ số đầu của số $c25d$ nên $c \ge 1.$ Do đó bắt buộc $c = 1,$ và hàng nghìn không có nhớ sang.
- Suy ra $d = 8 + 1 = 9.$
- Thay $c = 1$ và $d = 9$ vào phép tính:
  $$8aba + 1259 = 9521.$$
- Tìm số hạng thứ nhất:
  $$8aba = 9521 - 1259 = 8262.$$
- Đối chiếu: $8aba = 8262 \implies a = 2$ và $b = 6.$
- Vậy các chữ số cần tìm là:
  $$a = 2;\quad b = 6;\quad c = 1;\quad d = 9.$$
- Thử lại: $8262 + 1259 = 9521$ (hoàn toàn chính xác).

</details>

**Bài 4 (Cực trị cấu tạo số).**
Cho ba chữ số $a, b, c$ nhận ba giá trị $1; 2; 3$ (mỗi chữ số nhận một giá trị khác nhau). Hãy chọn giá trị của $a, b, c$ sao cho tổng $\overline{abc} + \overline{bca}$ đạt giá trị lớn nhất. Tổng lớn nhất đó bằng bao nhiêu?

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
  - Chọn $b = 3$ (lớn nhất).
  - Chọn $a = 2.$
  - Chọn $c = 1.$
- Khi đó tổng lớn nhất là:
  $$\overline{abc} + \overline{bca} = 231 + 312 = 543.$$
- **So sánh thử:** Nếu chọn $a = 3, b = 2, c = 1$ thì $321 + 213 = 534 < 543.$
- Vậy tổng lớn nhất bằng **$543$**, đạt được khi $a = 2, b = 3, c = 1.$

</details>
