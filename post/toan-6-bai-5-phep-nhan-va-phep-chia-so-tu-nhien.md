---
title: 'Toán 6 Bài 5: Phép nhân và phép chia số tự nhiên - Lý thuyết, tính nhanh và bài tập chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 5 Phép nhân và phép chia số tự nhiên: tính chất giao hoán, kết hợp, phân phối, phép chia hết, phép chia có dư, kèm bài tập tương tác và lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-10'
tags:
  - Toán học
  - Toán 6
  - Số tự nhiên
  - Phép nhân và phép chia
  - Số học 6
  - Kết nối tri thức
grade: 6
---

Bài học **Bài 5: Phép nhân và phép chia số tự nhiên** thuộc Chương I: *Tập hợp các số tự nhiên* trong chương trình môn Toán 6. Bài viết hệ thống hoá đầy đủ kiến thức về các tính chất của phép nhân, phép chia hết, phép chia có dư, các kĩ thuật tính nhanh (tính hợp lí), bài toán tìm $x$ và bài toán thực tế, kết hợp các câu hỏi trắc nghiệm tương tác và hệ thống bài tập tự luyện có nút xem lời giải chi tiết.

---

## 0. Khởi động — Kiểm tra kiến thức cũ (5–7 phút)

Hãy cùng hoàn thành nhanh 5 câu hỏi ôn tập sau:

**Câu 1.** Tính:
- a) $348 + 275$
- b) $902 - 457$ (thử lại kết quả bằng phép cộng).

<details>
<summary>Xem đáp án Câu 1</summary>

- a) $348 + 275 = 623.$
- b) $902 - 457 = 445.$
  - Thử lại: $445 + 457 = 902$ (đúng bằng số bị trừ).

</details>

**Câu 2.** Tính một cách hợp lí:
- a) $64 + 178 + 36$
- b) $1997 + 45$

<details>
<summary>Xem đáp án Câu 2</summary>

- a) $(64 + 36) + 178 = 100 + 178 = 278.$
- b) $(1997 + 3) + (45 - 3) = 2000 + 42 = 2042.$

</details>

**Câu 3.** Tìm $x$, biết:
- a) $x + 128 = 305$
- b) $251 - x = 176$

<details>
<summary>Xem đáp án Câu 3</summary>

- a) $x = 305 - 128 = 177.$
- b) $x = 251 - 176 = 75.$

</details>

**Câu 4.** Trong hai phép tính $305 - 500$ và $500 - 305$, phép tính nào thực hiện được trong tập hợp số tự nhiên? Hãy tính kết quả.

<details>
<summary>Xem đáp án Câu 4</summary>

- Phép tính $305 - 500$ **không thực hiện được** trong $\mathbb{N}$ vì $305 < 500.$
- Phép tính $500 - 305$ **thực hiện được** vì $500 > 305.$ Kết quả là:
  $$500 - 305 = 195.$$

</details>

**Câu 5.** Một cửa hàng có 1500 kg gạo. Buổi sáng cửa hàng bán được 372 kg, buổi chiều nhập thêm 208 kg. Hỏi sau đó cửa hàng có bao nhiêu ki-lô-gam gạo?

<details>
<summary>Xem đáp án Câu 5</summary>

- Sau buổi sáng, cửa hàng còn lại:
  $$1500 - 372 = 1128\text{ (kg)}.$$
- Sau khi nhập thêm, cửa hàng có:
  $$1128 + 208 = 1336\text{ (kg gạo)}.$$

</details>

---

## A. Lý thuyết trọng tâm

### 1. Phép nhân số tự nhiên

#### a) Định nghĩa và kí hiệu mới
Phép nhân hai số tự nhiên $a$ và $b$ cho ta một số tự nhiên gọi là tích của chúng:
$$a \cdot b = c$$
Trong đó:
- $a$ và $b$ gọi là các **thừa số**.
- $c$ gọi là **tích**.

> **Quy ước kí hiệu trong cấp 2:**
> - Dấu nhân "$\times$" ở Tiểu học từ nay được thay bằng dấu chấm giữa dòng "$\cdot$": viết $3 \cdot 5$ thay cho $3 \times 5.$
> - Khi nhân một số với một chữ, hoặc nhân hai chữ với nhau, ta có thể **bỏ dấu chấm**: $5 \cdot x$ viết gọn là $5x;$ $a \cdot b$ viết gọn là $ab.$
> - Bản chất phép nhân là phép cộng nhiều số hạng bằng nhau:
>   $$4 \cdot 25 = 25 + 25 + 25 + 25 = 100\text{ (cộng 4 lần số 25)}.$$

#### b) Các tính chất của phép nhân
1. **Tính chất giao hoán:** Đổi chỗ các thừa số thì tích không đổi:
   $$a \cdot b = b \cdot a$$
2. **Tính chất kết hợp:** Muốn nhân một tích hai số với một số thứ ba, ta có thể nhân số thứ nhất với tích của hai số còn lại:
   $$(a \cdot b) \cdot c = a \cdot (b \cdot c)$$
3. **Nhân với số 1:**
   $$a \cdot 1 = 1 \cdot a = a$$
4. **Tính chất phân phối của phép nhân đối với phép cộng và phép trừ:**
   $$a(b + c) = ab + ac$$
   $$a(b - c) = ab - ac$$

<div style="display:flex; justify-content:center; align-items:center; margin:16px 0;">
  <svg width="280" height="110" viewBox="0 0 280 110" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <!-- Lưới 3 hàng x 5 cột -->
    <!-- mỗi ô 30x20, start tại x=50, y=25 -->
    <rect x="50" y="25" width="150" height="60" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <line x1="80" y1="25" x2="80" y2="85" stroke="#93c5fd"/>
    <line x1="110" y1="25" x2="110" y2="85" stroke="#93c5fd"/>
    <line x1="140" y1="25" x2="140" y2="85" stroke="#93c5fd"/>
    <line x1="170" y1="25" x2="170" y2="85" stroke="#93c5fd"/>
    <line x1="50" y1="45" x2="200" y2="45" stroke="#93c5fd"/>
    <line x1="50" y1="65" x2="200" y2="65" stroke="#93c5fd"/>
    <text x="125" y="16" font-size="12" text-anchor="middle" fill="#1e293b">5 ô mỗi hàng</text>
    <text x="32" y="58" font-size="12" text-anchor="middle" fill="#1e293b">3 hàng</text>
    <text x="240" y="58" font-size="13" font-weight="bold" fill="#1d4ed8">3 · 5 = 15</text>
  </svg>
</div>

*Minh họa:* Đếm theo hàng có $3 \cdot 5 = 15$ ô; đếm theo cột có $5 \cdot 3 = 15$ ô. Hai cách đếm cho cùng một kết quả, khẳng định $3 \cdot 5 = 5 \cdot 3.$

> **Ví dụ 1.** Tính một cách hợp lí:
> - a) $25 \cdot 6 \cdot 4$
> - b) $47 \cdot 101$

<details>
<summary>Xem lời giải Ví dụ 1</summary>

- a) Dùng tính chất giao hoán và kết hợp để nhóm hai thừa số có tích tròn trăm:
  $$25 \cdot 6 \cdot 4 = (25 \cdot 4) \cdot 6 = 100 \cdot 6 = 600.$$
- b) Tách $101 = 100 + 1$ rồi áp dụng tính chất phân phối:
  $$47 \cdot 101 = 47 \cdot (100 + 1) = 47 \cdot 100 + 47 \cdot 1 = 4700 + 47 = 4747.$$

</details>

---

### 2. Phép chia hết

Cho hai số tự nhiên $a$ và $b$ với $b \ne 0.$ Nếu có số tự nhiên $q$ sao cho:
$$a = b \cdot q$$
thì ta nói $a$ **chia hết** cho $b,$ và viết:
$$a : b = q$$
Trong đó:
- $a$ là **số bị chia**.
- $b$ là **số chia**.
- $q$ là **thương**.

$$\text{Số bị chia} = \text{Số chia} \times \text{Thương}$$
- **Cách thử lại phép chia:** Lấy thương nhân với số chia, kết quả phải đúng bằng số bị chia.

> **Ví dụ 2.** Đặt tính rồi tính, sau đó thử lại:
> - a) $285 \cdot 36$
> - b) $4056 : 24$

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- a) Đặt tính nhân từ phải sang trái:
  $$285 \cdot 36 = 10\ 260.$$
- b) Đặt tính chia:
  $$4056 : 24 = 169.$$
  - Thử lại: $169 \cdot 24 = 4056$ (đúng bằng số bị chia).

</details>

---

### 3. Phép chia có dư

Khi số tự nhiên $a$ không chia hết cho số tự nhiên $b$ ($b \ne 0$), ta có **phép chia có dư**:
$$a = b \cdot q + r \quad (0 \le r < b)$$
Trong đó:
- $q$ là **thương**.
- $r$ là **số dư**.

> [!IMPORTANT]
> **Quy tắc bắt buộc:** Số dư $r$ luôn luôn phải **nhỏ hơn số chia $b$** ($r < b$). Nếu số dư còn lớn hơn hoặc bằng số chia thì phép chia chưa hoàn thành!
> - Nếu $r = 0$: đó là phép chia hết.

> **Ví dụ 3.** Thực hiện phép chia rồi viết dưới dạng $a = b \cdot q + r$:
> - a) $47 : 5$
> - b) $1000 : 7$

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) $47 : 5$ được thương là 9, dư 2 (vì $5 \cdot 9 = 45,$ thừa 2). Ta viết:
  $$47 = 5 \cdot 9 + 2 \quad (\text{số dư } 2 < 5).$$
- b) $1000 : 7$ được thương là 142, dư 6 (vì $7 \cdot 142 = 994,$ thừa 6). Ta viết:
  $$1000 = 7 \cdot 142 + 6 \quad (\text{số dư } 6 < 7).$$

</details>

---

### 4. Những điều rất dễ nhầm lẫn

1. **Phép chia KHÔNG có tính chất giao hoán:**
   - $12 : 4 = 3,$ nhưng $4 : 12$ không thực hiện được trong tập hợp số tự nhiên $\mathbb{N}.$
2. **Không được chia cho số 0:**
   - Phép tính $a : 0$ là **hoàn toàn vô nghĩa**. Tuy nhiên, $0 : a = 0$ với mọi $a \ne 0.$
3. **Quy tắc nhân với 0:**
   - $a \cdot 0 = 0.$
   - Nếu một tích bằng 0 thì **ít nhất một thừa số phải bằng 0**:
     $$A \cdot B = 0 \iff A = 0 \text{ hoặc } B = 0.$$
     *(Tính chất này cực kì hữu ích trong các bài toán tìm $x$).*
4. **Số dư phải nhỏ hơn số chia:**
   - Viết $17 = 3 \cdot 4 + 5$ là **sai** vì số dư 5 lớn hơn số chia 3. Viết đúng là: $17 = 3 \cdot 5 + 2.$
5. **Nhân phân phối phải nhân đủ:**
   - $5 \cdot (20 + 3) = 5 \cdot 20 + 5 \cdot 3 = 100 + 15 = 115,$ không được viết sai thành $5 \cdot 20 + 3.$

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Thực hiện phép nhân, phép chia

**Phương pháp giải:**
- Đặt tính thẳng cột rồi tính cẩn thận từng hàng.
- Phép chia hết: thử lại bằng cách lấy $\text{Thương} \times \text{Số chia}.$
- Phép chia có dư: viết dưới dạng $a = b \cdot q + r$ với $0 \le r < b.$

**Luyện tập 1.1.** Đặt tính rồi tính:
- a) $214 \cdot 32$
- b) $3105 : 23$

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- a) $214 \cdot 32 = 6848.$
- b) $3105 : 23 = 135$ (thử lại: $135 \cdot 23 = 3105$).

</details>

**Luyện tập 1.2.** Thực hiện phép chia rồi viết dưới dạng $a = b \cdot q + r$:
- a) $2023 : 15$
- b) $5000 : 24$

```quiz
type: choice
question: 'Số dư trong phép chia $2023 : 15$ là bao nhiêu?'
options:
  - '11'
  - '12'
  - '13'
  - '14'
answer: 3
explanation: 'Ta có 2023 = 15 * 134 + 13. Thương là 134 và số dư là 13 (thỏa mãn 13 < 15).'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 1.2</summary>

- a) $2023 : 15$ được thương là 134, dư 13:
  $$2023 = 15 \cdot 134 + 13 \quad (13 < 15).$$
- b) $5000 : 24$ được thương là 208, dư 8:
  $$5000 = 24 \cdot 208 + 8 \quad (8 < 24).$$

</details>

**Luyện tập 1.3.** Đặt tính rồi tính $36\ 718 : 22,$ sau đó thử lại kết quả bằng phép nhân.

<details>
<summary>Xem lời giải Luyện tập 1.3</summary>

- Đặt tính chia: $36\ 718 : 22 = 1669.$
- Thử lại: $1669 \cdot 22 = 36\ 718$ (đúng bằng số bị chia).

</details>

---

### Dạng 2. Tính nhanh (Tính hợp lí)

**Phương pháp giải:**
- **Nhóm tích tròn chục, tròn trăm:**
  - $2 \cdot 5 = 10$
  - $4 \cdot 25 = 100$
  - $8 \cdot 125 = 1000$
  - $500 \cdot 2 = 1000$
- **Đặt thừa số chung ra ngoài (phân phối ngược):**
  $$ab + ac = a(b + c)$$
  $$ab - ac = a(b - c)$$
- **Chia một tổng (hiệu) cho một số:**
  $$(a \pm b) : c = a : c \pm b : c$$

**Luyện tập 2.1.** Tính một cách hợp lí:
- a) $500 \cdot 21 \cdot 2$
- b) $8 \cdot 17 \cdot 125$

<details>
<summary>Xem lời giải Luyện tập 2.1</summary>

- a) $(500 \cdot 2) \cdot 21 = 1000 \cdot 21 = 21\ 000.$
- b) $(8 \cdot 125) \cdot 17 = 1000 \cdot 17 = 17\ 000.$

</details>

**Luyện tập 2.2.** Tính một cách hợp lí:
- a) $214 \cdot 72 - 45 \cdot 214 - 214 \cdot 27$
- b) $2975 : 25 - 475 : 25$

```quiz
type: choice
question: 'Giá trị của biểu thức $214 \cdot 72 - 45 \cdot 214 - 214 \cdot 27$ là:'
options:
  - '214'
  - '0'
  - '2140'
  - '100'
answer: 2
explanation: 'Đặt thừa số chung 214: 214 * (72 - 45 - 27) = 214 * 0 = 0.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 2.2</summary>

- a) Đặt thừa số chung $214$:
  $$214 \cdot (72 - 45 - 27) = 214 \cdot 0 = 0.$$
- b) Áp dụng quy tắc chia một hiệu cho một số:
  $$(2975 - 475) : 25 = 2500 : 25 = 100.$$

</details>

**Luyện tập 2.3.** Tính một cách hợp lí: $42 \cdot 13 + 22 \cdot 15 + 42 \cdot 7 - 5 \cdot 22.$

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

Nhóm các tích có chung thừa số $42$ và các tích có chung thừa số $22$:
$$[42 \cdot 13 + 42 \cdot 7] + [22 \cdot 15 - 22 \cdot 5]$$
$$= 42 \cdot (13 + 7) + 22 \cdot (15 - 5)$$
$$= 42 \cdot 20 + 22 \cdot 10$$
$$= 840 + 220 = 1060.$$

</details>

---

### Dạng 3. Tìm số chưa biết trong phép nhân, phép chia

**Phương pháp giải:**
- Tìm thừa số: $\text{Thừa số} = \text{Tích} : \text{Thừa số đã biết}.$
- Tìm số bị chia: $\text{Số bị chia} = \text{Thương} \cdot \text{Số chia}.$
- Tìm số chia: $\text{Số chia} = \text{Số bị chia} : \text{Thương}.$
- Dạng $5x + 2x$: dùng phân phối gộp lại thành $(5 + 2)x = 7x.$

**Luyện tập 3.1.** Tìm $x$, biết:
- a) $7x = 84$
- b) $x : 6 = 15$

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- a) $x = 84 : 7 = 12.$
- b) $x = 15 \cdot 6 = 90.$

</details>

**Luyện tập 3.2.** Tìm $x$, biết:
- a) $5x - 13 = 17$
- b) $3(x + 15) = 60$

<details>
<summary>Xem lời giải Luyện tập 3.2</summary>

- a) Coi $5x$ là số bị trừ:
  $$5x = 17 + 13 = 30 \implies x = 30 : 5 = 6.$$
- b) Coi $(x + 15)$ là thừa số:
  $$x + 15 = 60 : 3 = 20 \implies x = 20 - 15 = 5.$$

</details>

**Luyện tập 3.3.** Tìm $x$, biết:
- a) $(x - 32) : 16 = 48$
- b) $5x + 2x = 70$

```quiz
type: choice
question: 'Giá trị của x thỏa mãn $5x + 2x = 70$ là:'
options:
  - '7'
  - '10'
  - '14'
  - '35'
answer: 2
explanation: 'Gộp lại: (5 + 2)x = 7x = 70 => x = 70 : 7 = 10.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 3.3</summary>

- a) Coi $(x - 32)$ là số bị chia:
  $$x - 32 = 48 \cdot 16 = 768 \implies x = 768 + 32 = 800.$$
- b) Gộp thừa số:
  $$(5 + 2)x = 70 \implies 7x = 70 \implies x = 70 : 7 = 10.$$

</details>

---

### Dạng 4. Bài toán thực tế về phép nhân, phép chia

**Phương pháp giải:**
- Xác định rõ phép tính cần dùng.
- **Lưu ý bài toán chia có dư:**
  - *Làm tròn xuống:* Mua đồ, cắt vải, may áo (tiền dư không đủ mua thêm 1 đơn vị).
  - *Làm tròn lên (cộng thêm 1):* Xếp xe, chia bàn, đóng thùng (phải có thêm 1 xe/bàn/thùng để chở/chứa nốt số lượng còn dư).

**Luyện tập 4.1.** Một công ty có hai xưởng sản xuất:
- Xưởng A có 30 công nhân, mỗi công nhân làm được 50 sản phẩm một ngày.
- Xưởng B có nhiều hơn xưởng A 10 công nhân, mỗi công nhân làm được 30 sản phẩm một ngày.

Hỏi mỗi ngày công ty làm được tất cả bao nhiêu sản phẩm?

<details>
<summary>Xem lời giải Luyện tập 4.1</summary>

- Số sản phẩm xưởng A làm trong một ngày:
  $$30 \cdot 50 = 1500\text{ (sản phẩm)}.$$
- Số công nhân của xưởng B là:
  $$30 + 10 = 40\text{ (công nhân)}.$$
- Số sản phẩm xưởng B làm trong một ngày:
  $$40 \cdot 30 = 1200\text{ (sản phẩm)}.$$
- Mỗi ngày công ty làm được:
  $$1500 + 1200 = 2700\text{ (sản phẩm)}.$$

</details>

**Luyện tập 4.2.** Mẹ đưa cho Trọng 50 000 đồng để mua bút bi, mỗi chiếc giá 3000 đồng. Hỏi Trọng mua được nhiều nhất bao nhiêu chiếc bút bi?

<details>
<summary>Xem lời giải Luyện tập 4.2</summary>

Thực hiện phép chia có dư:
$$50\ 000 : 3000 = 16\text{ (dư } 2000).$$
Vì số tiền còn dư 2000 đồng không đủ mua thêm một chiếc bút nên Trọng mua được **nhiều nhất 16 chiếc bút bi**.

</details>

**Luyện tập 4.3.** Một đoàn có 320 học sinh đi tham quan bằng ô tô, mỗi xe chở được tối đa 45 học sinh. Hỏi cần ít nhất bao nhiêu chiếc xe ô tô để chở hết số học sinh đó?

```quiz
type: choice
question: 'Đoàn có 320 học sinh, mỗi xe chở được 45 học sinh. Cần ít nhất bao nhiêu chiếc xe?'
options:
  - '7 chiếc xe'
  - '8 chiếc xe'
  - '9 chiếc xe'
  - '6 chiếc xe'
answer: 2
explanation: '320 : 45 = 7 dư 5 học sinh. 7 xe chở được 315 em, còn thừa 5 em nên bắt buộc cần thêm 1 xe nữa. Vậy cần ít nhất 7 + 1 = 8 xe.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 4.3</summary>

Thực hiện phép chia:
$$320 : 45 = 7\text{ (dư } 5).$$
7 xe chỉ chở được $7 \cdot 45 = 315$ học sinh, còn dư 5 học sinh nên bắt buộc phải bố trí thêm 1 xe nữa.
Vậy cần ít nhất số xe là:
$$7 + 1 = 8\text{ (chiếc xe)}.$$

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Đặt tính rồi tính:
- a) $408 \cdot 37$
- b) $9384 : 24$ (thử lại bằng phép nhân).

<details>
<summary>Xem lời giải Bài 1</summary>

- a) $408 \cdot 37 = 15\ 096.$
- b) $9384 : 24 = 391.$
  - Thử lại: $391 \cdot 24 = 9384$ (đúng).

</details>

**Bài 2.** Điền số thích hợp vào ô trống trong bảng dưới đây:

| $a$ | $b$ | $a \cdot b$ | $a : b$ |
| :---: | :---: | :---: | :---: |
| $9$ | $3$ | ? | ? |
| ? | $6$ | ? | $7$ |
| $24$ | ? | $72$ | ? |
| ? | ? | $180$ | $5$ |
| $84$ | $12$ | ? | ? |

<details>
<summary>Xem đáp án bảng Bài 2</summary>

| $a$ | $b$ | $a \cdot b$ | $a : b$ |
| :---: | :---: | :---: | :---: |
| $9$ | $3$ | **$27$** | **$3$** |
| **$42$** | $6$ | **$252$** | $7$ |
| $24$ | **$3$** | $72$ | **$8$** |
| **$30$** | **$6$** | $180$ | $5$ |
| $84$ | $12$ | **$1008$** | **$7$** |

- Cột 2: $a = 6 \cdot 7 = 42 \implies a \cdot b = 42 \cdot 6 = 252.$
- Cột 3: $b = 72 : 24 = 3 \implies a : b = 24 : 3 = 8.$
- Cột 4: Ta có $(a \cdot b) \cdot (a : b) = a \cdot a = 180 \cdot 5 = 900 \implies a = 30$ (vì $30 \cdot 30 = 900$). Khi đó $b = 30 : 5 = 6.$
- Cột 5: $a \cdot b = 84 \cdot 12 = 1008;\quad a : b = 84 : 12 = 7.$

</details>

**Bài 3.** Tính một cách hợp lí:
- a) $4 \cdot 17 \cdot 25$
- b) $32 \cdot 47 + 32 \cdot 53$

<details>
<summary>Xem lời giải Bài 3</summary>

- a) $(4 \cdot 25) \cdot 17 = 100 \cdot 17 = 1700.$
- b) $32 \cdot (47 + 53) = 32 \cdot 100 = 3200.$

</details>

**Bài 4.** Tính một cách hợp lí:
- a) $37 \cdot 78 + 37 \cdot 22$
- b) $156 \cdot 23 - 56 \cdot 23$

<details>
<summary>Xem lời giải Bài 4</summary>

- a) $37 \cdot (78 + 22) = 37 \cdot 100 = 3700.$
- b) $(156 - 56) \cdot 23 = 100 \cdot 23 = 2300.$

</details>

**Bài 5.** Thực hiện phép chia rồi viết dưới dạng $a = b \cdot q + r$:
- a) $745 : 8$
- b) $2846 : 15$

<details>
<summary>Xem lời giải Bài 5</summary>

- a) $745 : 8$ được thương 93, dư 1:
  $$745 = 8 \cdot 93 + 1 \quad (1 < 8).$$
- b) $2846 : 15$ được thương 189, dư 11:
  $$2846 = 15 \cdot 189 + 11 \quad (11 < 15).$$

</details>

**Bài 6.** Tìm $x$, biết:
- a) $8x = 96$
- b) $x : 12 = 8$
- c) $4x + 3x = 63$

<details>
<summary>Xem lời giải Bài 6</summary>

- a) $x = 96 : 8 = 12.$
- b) $x = 8 \cdot 12 = 96.$
- c) $7x = 63 \implies x = 63 : 7 = 9.$

</details>

**Bài 7.** Tìm $x$, biết:
- a) $(x - 15) \cdot 7 = 63$
- b) $96 : (x + 2) = 8$

<details>
<summary>Xem lời giải Bài 7</summary>

- a) $x - 15 = 63 : 7 = 9 \implies x = 9 + 15 = 24.$
- b) $x + 2 = 96 : 8 = 12 \implies x = 12 - 2 = 10.$

</details>

**Bài 8.** Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Phép chia có tính chất giao hoán, nghĩa là $12 : 4 = 4 : 12.$
- b) $17 = 3 \cdot 4 + 5.$
- c) $a : 0 = 0$ với mọi số tự nhiên $a.$
- d) $5 \cdot (20 + 3) = 5 \cdot 20 + 3.$

<details>
<summary>Xem lời giải Bài 8</summary>

- a) **Sai**, vì $12 : 4 = 3$ nhưng $4 : 12$ không thực hiện được trong $\mathbb{N}.$ Phép chia không có tính chất giao hoán.
- b) **Sai**, vì số dư 5 lớn hơn số chia 3. Phép chia chưa xong, viết đúng là: $17 = 3 \cdot 5 + 2.$
- c) **Sai**, vì không được chia cho 0, biểu thức $a : 0$ là vô nghĩa. (Chỉ có $0 : a = 0$ khi $a \ne 0$).
- d) **Sai**, vì phải nhân phân phối đủ: $5 \cdot (20 + 3) = 5 \cdot 20 + 5 \cdot 3 = 100 + 15 = 115.$

</details>

**Bài 9.** Người ta xếp 250 quyển vở vào các thùng, mỗi thùng đựng được 18 quyển. Hỏi cần ít nhất bao nhiêu thùng để đựng hết số vở đó?

<details>
<summary>Xem lời giải Bài 9</summary>

- Thực hiện phép chia:
  $$250 : 18 = 13\text{ (dư } 16).$$
- 13 thùng chỉ chứa được $13 \cdot 18 = 234$ quyển, còn thừa 16 quyển nên cần thêm 1 thùng nữa.
- Vậy cần ít nhất: $13 + 1 = 14\text{ (thùng)}.$

</details>

**Bài 10.** Lớp 6A có 45 học sinh. Cô giáo phô tô đề kiểm tra để phát cho mỗi bạn một bản, mỗi đề gồm 2 trang. Biết giá phô tô một trang là 250 đồng, hỏi cô giáo phải trả bao nhiêu tiền?

<details>
<summary>Xem lời giải Bài 10</summary>

- Tổng số trang cần phô tô là:
  $$45 \cdot 2 = 90\text{ (trang)}.$$
- Cô giáo phải trả số tiền là:
  $$90 \cdot 250 = 22\ 500\text{ (đồng)}.$$

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Tích $8 \cdot 125 \cdot 7$ có kết quả là:'
options:
  - '700'
  - '7000'
  - '70 000'
  - '8000'
answer: 2
explanation: 'Ta có (8 * 125) * 7 = 1000 * 7 = 7000.'
```

```quiz
type: choice
question: 'Tìm x biết $6(x - 4) = 30$.'
options:
  - '5'
  - '9'
  - '1'
  - '10'
answer: 2
explanation: 'x - 4 = 30 : 6 = 5 => x = 5 + 4 = 9.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - '15 : 0 = 0'
  - '0 : 15 = 0'
  - '15 : 0 = 15'
  - '0 : 0 = 0'
answer: 2
explanation: 'Không được chia cho số 0. Chỉ có phép tính 0 : a = 0 (với a khác 0) là hợp lệ.'
```

```quiz
type: choice
question: 'Có 200 học sinh xếp ngồi vào các bàn 6 chỗ. Cần ít nhất bao nhiêu bàn?'
options:
  - '33 bàn'
  - '34 bàn'
  - '35 bàn'
  - '32 bàn'
answer: 2
explanation: '200 : 6 = 33 dư 2 học sinh. 33 bàn ngồi được 198 em, còn thừa 2 em nên cần thêm 1 bàn. Vậy cần ít nhất 34 bàn.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Tính:
- a) $234 \cdot 12$
- b) $4620 : 15$

<details>
<summary>Xem lời giải Câu 1</summary>

- a) $234 \cdot 12 = 2808.$
- b) $4620 : 15 = 308.$

</details>

**Câu 2.** Thực hiện phép chia $1000 : 7$ rồi viết kết quả dưới dạng $a = b \cdot q + r.$

<details>
<summary>Xem lời giải Câu 2</summary>

$$1000 : 7 = 142\text{ (dư } 6) \implies 1000 = 7 \cdot 142 + 6.$$

</details>

**Câu 3.** Tính một cách hợp lí:
- a) $4 \cdot 25 \cdot 13$
- b) $8 \cdot 125 \cdot 7$

<details>
<summary>Xem lời giải Câu 3</summary>

- a) $(4 \cdot 25) \cdot 13 = 100 \cdot 13 = 1300.$
- b) $(8 \cdot 125) \cdot 7 = 1000 \cdot 7 = 7000.$

</details>

**Câu 4.** Tính một cách hợp lí: $63 \cdot 47 + 63 \cdot 53.$

<details>
<summary>Xem lời giải Câu 4</summary>

$$63 \cdot (47 + 53) = 63 \cdot 100 = 6300.$$

</details>

**Câu 5.** Tìm $x$, biết:
- a) $9x = 108$
- b) $x : 8 = 16$

<details>
<summary>Xem lời giải Câu 5</summary>

- a) $x = 108 : 9 = 12.$
- b) $x = 16 \cdot 8 = 128.$

</details>

**Câu 6.** Tìm $x$, biết: $6(x - 4) = 30.$

<details>
<summary>Xem lời giải Câu 6</summary>

$$x - 4 = 30 : 6 = 5 \implies x = 5 + 4 = 9.$$

</details>

**Câu 7.** Một cửa hàng nhập về 15 thùng sữa, mỗi thùng có 24 hộp. Hỏi cửa hàng nhập về tất cả bao nhiêu hộp sữa?

<details>
<summary>Xem lời giải Câu 7</summary>

Cửa hàng nhập về tất cả:
$$15 \cdot 24 = 360\text{ (hộp sữa)}.$$

</details>

**Câu 8.** Có 200 học sinh xếp ngồi vào các bàn, mỗi bàn ngồi được 6 học sinh. Hỏi cần ít nhất bao nhiêu chiếc bàn để tất cả học sinh đều có chỗ ngồi?

<details>
<summary>Xem lời giải Câu 8</summary>

- Ta có: $200 : 6 = 33\text{ (dư } 2).$
- 33 bàn ngồi được 198 em, còn thừa 2 em nên cần thêm 1 bàn.
- Vậy cần ít nhất: $33 + 1 = 34\text{ (chiếc bàn)}.$

</details>

**Câu 9.** Mỗi khẳng định sau đúng hay sai?
- a) $0 : 15 = 0$
- b) $15 : 0 = 0$

<details>
<summary>Xem lời giải Câu 9</summary>

- a) **Đúng**, vì 0 chia cho bất kì số tự nhiên khác 0 nào cũng bằng 0.
- b) **Sai**, vì phép chia cho 0 không có nghĩa.

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Bài toán phép chia có dư).**
Trong một phép chia có dư, số bị chia bằng 24, thương bằng 3. Tìm số chia và số dư.

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

- Gọi số chia là $b,$ số dư là $r$ ($b, r \in \mathbb{N}$).
- Điều kiện của phép chia có dư:
  $$24 = 3b + r \quad (0 < r < b).$$
- Từ $r = 24 - 3b > 0 \implies 3b < 24 \implies b < 8.$
- Từ $r < b \implies 24 - 3b < b \implies 24 < 4b \implies b > 6.$
- Vì $b \in \mathbb{N}$ và $6 < b < 8$ nên bắt buộc $b = 7.$
- Khi đó số dư là:
  $$r = 24 - 3 \cdot 7 = 24 - 21 = 3.$$
- Thử lại: $24 = 7 \cdot 3 + 3$ (với số dư $3 < 7,$ hoàn toàn chính xác).
- Vậy **số chia bằng 7** và **số dư bằng 3**.

</details>

**Bài 2.** Tìm số tự nhiên lớn nhất có ba chữ số, biết rằng khi chia nó cho 69 thì thương bằng số dư.

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

- Gọi số cần tìm là $a$ ($a \le 999$).
- Khi chia $a$ cho 69, gọi thương và số dư là $k$ ($0 \le k < 69$).
- Theo công thức phép chia có dư:
  $$a = 69k + k = 70k.$$
- Vì $a$ là số có ba chữ số nên $a \le 999 \implies 70k \le 999 \implies k \le 14.$
- Để $a$ lớn nhất, ta chọn $k$ lớn nhất là $k = 14.$
- Khi đó số cần tìm là:
  $$a = 70 \cdot 14 = 980.$$
- **Thử lại:** $980 : 69 = 14$ (dư 14, thỏa mãn thương bằng số dư).
- Vậy số cần tìm là **$980$**.

</details>

**Bài 3.** Tính một cách hợp lí: $215 \cdot 62 + 42 - 52 \cdot 215.$

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

Nhóm hai số hạng có chung thừa số $215$:
$$215 \cdot 62 - 52 \cdot 215 + 42$$
$$= 215 \cdot (62 - 52) + 42$$
$$= 215 \cdot 10 + 42$$
$$= 2150 + 42 = 2192.$$

</details>

**Bài 4.** Tìm hai số tự nhiên, biết rằng tổng của chúng gấp ba lần hiệu của chúng và cũng bằng đúng nửa tích của chúng.

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- Gọi hai số tự nhiên cần tìm là $x$ và $y$ ($x \ge y$).
- Gọi hiệu của chúng là $d = x - y.$
- Theo đề bài:
  - Tổng: $x + y = 3d.$
  - Tích: $xy = 2 \cdot (x + y) = 6d$ (vì tổng bằng nửa tích nên tích gấp đôi tổng).
- Từ tổng $x + y = 3d$ và hiệu $x - y = d$:
  - Số lớn: $x = (3d + d) : 2 = 2d.$
  - Số bé: $y = (3d - d) : 2 = d.$
- Thay vào biểu thức tích:
  $$x \cdot y = 2d \cdot d = 2d^2.$$
  Mà tích bằng $6d,$ do đó:
  $$2d^2 = 6d \implies 2d = 6 \implies d = 3\text{ (vì } d \ne 0).$$
- Với $d = 3$:
  - Số bé: $y = d = 3.$
  - Số lớn: $x = 2d = 6.$
- **Thử lại:**
  - Tổng $= 6 + 3 = 9.$
  - Hiệu $= 6 - 3 = 3$ (tổng gấp 3 lần hiệu: $9 = 3 \cdot 3$).
  - Tích $= 6 \cdot 3 = 18$ (tổng bằng nửa tích: $9 = 18 : 2$).
- Vậy hai số tự nhiên cần tìm là **$6$ và $3$**.

</details>

**Bài 5 (Điền chữ số thích hợp).**
Thay mỗi dấu $*$ bởi một chữ số thích hợp:
$$84** : 47 = *8*.$$

<details>
<summary>Xem lời giải Bài 5 nâng cao</summary>

- Số bị chia $84**$ nằm trong khoảng từ $8400$ đến $8499.$
- Ta thực hiện phép chia chặn hai đầu:
  $$8400 : 47 \approx 178{,}72$$
  $$8499 : 47 \approx 180{,}82$$
- Do đó thương $*8*$ phải là số tự nhiên nằm giữa 178 và 181, tức là một trong ba số: $179, 180, 181.$
- Trong ba số này, chỉ có duy nhất số **$180$** có chữ số hàng chục bằng 8 (phù hợp với dạng $*8*$).
- Vậy thương là **$180$**.
- Khi đó số bị chia là:
  $$47 \cdot 180 = 8460.$$
- Ta được phép tính hoàn chỉnh:
  $$8460 : 47 = 180.$$

</details>
