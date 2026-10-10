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
- a) $439 + 386$
- b) $803 - 368$ (thử lại kết quả bằng phép cộng).

<details>
<summary>Xem đáp án Câu 1</summary>

- a) $439 + 386 = 825.$
- b) $803 - 368 = 435.$
  - Thử lại: $435 + 368 = 803$ (đúng bằng số bị trừ).

</details>

**Câu 2.** Tính một cách hợp lí:
- a) $73 + 185 + 27$
- b) $1996 + 58$

<details>
<summary>Xem đáp án Câu 2</summary>

- a) $(73 + 27) + 185 = 100 + 185 = 285.$
- b) $(1996 + 4) + (58 - 4) = 2000 + 54 = 2054.$

</details>

**Câu 3.** Tìm $x$, biết:
- a) $x + 137 = 320$
- b) $342 - x = 185$

<details>
<summary>Xem đáp án Câu 3</summary>

- a) $x = 320 - 137 = 183.$
- b) $x = 342 - 185 = 157.$

</details>

**Câu 4.** Trong hai phép tính $408 - 600$ và $600 - 408$, phép tính nào thực hiện được trong tập hợp số tự nhiên? Hãy tính kết quả.

<details>
<summary>Xem đáp án Câu 4</summary>

- Phép tính $408 - 600$ **không thực hiện được** trong $\mathbb{N}$ vì $408 < 600.$
- Phép tính $600 - 408$ **thực hiện được** vì $600 > 408.$ Kết quả là:
  $$600 - 408 = 192.$$

</details>

**Câu 5.** Một cửa hàng có 1800 kg đường. Buổi sáng cửa hàng bán được 425 kg, buổi chiều nhập thêm 315 kg. Hỏi sau đó cửa hàng có bao nhiêu ki-lô-gam đường?

<details>
<summary>Xem đáp án Câu 5</summary>

- Sau buổi sáng, cửa hàng còn lại:
  $$1800 - 425 = 1375\text{ (kg)}.$$
- Sau khi nhập thêm, cửa hàng có:
  $$1375 + 315 = 1690\text{ (kg đường)}.$$

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
> - Dấu nhân "$\times$" ở Tiểu học từ nay được thay bằng dấu chấm giữa dòng "$\cdot$": viết $4 \cdot 7$ thay cho $4 \times 7.$
> - Khi nhân một số với một chữ, hoặc nhân hai chữ với nhau, ta có thể **bỏ dấu chấm**: $6 \cdot x$ viết gọn là $6x;$ $a \cdot b$ viết gọn là $ab.$
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
  <svg width="300" height="120" viewBox="0 0 300 120" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; max-width:100%;">
    <!-- Lưới 4 hàng x 6 cột -->
    <rect x="40" y="20" width="180" height="80" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <line x1="70" y1="20" x2="70" y2="100" stroke="#93c5fd"/>
    <line x1="100" y1="20" x2="100" y2="100" stroke="#93c5fd"/>
    <line x1="130" y1="20" x2="130" y2="100" stroke="#93c5fd"/>
    <line x1="160" y1="20" x2="160" y2="100" stroke="#93c5fd"/>
    <line x1="190" y1="20" x2="190" y2="100" stroke="#93c5fd"/>
    <line x1="40" y1="40" x2="220" y2="40" stroke="#93c5fd"/>
    <line x1="40" y1="60" x2="220" y2="60" stroke="#93c5fd"/>
    <line x1="40" y1="80" x2="220" y2="80" stroke="#93c5fd"/>
    <text x="130" y="14" font-size="12" text-anchor="middle" fill="#1e293b">6 ô mỗi hàng</text>
    <text x="24" y="65" font-size="12" text-anchor="middle" fill="#1e293b">4 hàng</text>
    <text x="260" y="65" font-size="13" font-weight="bold" fill="#1d4ed8">4 · 6 = 24</text>
  </svg>
</div>

*Minh họa:* Đếm theo hàng có $4 \cdot 6 = 24$ ô; đếm theo cột có $6 \cdot 4 = 24$ ô. Hai cách đếm cho cùng một kết quả, khẳng định $4 \cdot 6 = 6 \cdot 4.$

> **Ví dụ 1.** Tính một cách hợp lí:
> - a) $25 \cdot 7 \cdot 4$
> - b) $53 \cdot 101$

<details>
<summary>Xem lời giải Ví dụ 1</summary>

- a) Dùng tính chất giao hoán và kết hợp để nhóm hai thừa số có tích tròn trăm:
  $$25 \cdot 7 \cdot 4 = (25 \cdot 4) \cdot 7 = 100 \cdot 7 = 700.$$
- b) Tách $101 = 100 + 1$ rồi áp dụng tính chất phân phối:
  $$53 \cdot 101 = 53 \cdot (100 + 1) = 53 \cdot 100 + 53 \cdot 1 = 5300 + 53 = 5353.$$

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
> - a) $318 \cdot 27$
> - b) $5184 : 24$

<details>
<summary>Xem lời giải Ví dụ 2</summary>

- a) Đặt tính nhân từ phải sang trái:
  $$318 \cdot 27 = 8586.$$
- b) Đặt tính chia:
  $$5184 : 24 = 216.$$
  - Thử lại: $216 \cdot 24 = 5184$ (đúng bằng số bị chia).

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
> - a) $58 : 7$
> - b) $1000 : 9$

<details>
<summary>Xem lời giải Ví dụ 3</summary>

- a) $58 : 7$ được thương là 8, dư 2 (vì $7 \cdot 8 = 56,$ thừa 2). Ta viết:
  $$58 = 7 \cdot 8 + 2 \quad (\text{số dư } 2 < 7).$$
- b) $1000 : 9$ được thương là 111, dư 1 (vì $9 \cdot 111 = 999,$ thừa 1). Ta viết:
  $$1000 = 9 \cdot 111 + 1 \quad (\text{số dư } 1 < 9).$$

</details>

---

### 4. Những điều rất dễ nhầm lẫn

1. **Phép chia KHÔNG có tính chất giao hoán:**
   - $16 : 4 = 4,$ nhưng $4 : 16$ không thực hiện được trong tập hợp số tự nhiên $\mathbb{N}.$
2. **Không được chia cho số 0:**
   - Phép tính $a : 0$ là **hoàn toàn vô nghĩa**. Tuy nhiên, $0 : a = 0$ với mọi $a \ne 0.$
3. **Quy tắc nhân với 0:**
   - $a \cdot 0 = 0.$
   - Nếu một tích bằng 0 thì **ít nhất một thừa số phải bằng 0**:
     $$A \cdot B = 0 \iff A = 0 \text{ hoặc } B = 0.$$
4. **Số dư phải nhỏ hơn số chia:**
   - Viết $23 = 4 \cdot 4 + 7$ là **sai** vì số dư 7 lớn hơn số chia 4. Viết đúng là: $23 = 4 \cdot 5 + 3.$
5. **Nhân phân phối phải nhân đủ:**
   - $6 \cdot (20 + 4) = 6 \cdot 20 + 6 \cdot 4 = 120 + 24 = 144,$ không được viết sai thành $6 \cdot 20 + 4.$

---

## B. Các dạng bài tập thường gặp

### Dạng 1. Thực hiện phép nhân, phép chia

**Phương pháp giải:**
- Đặt tính thẳng cột rồi tính cẩn thận từng hàng.
- Phép chia hết: thử lại bằng cách lấy $\text{Thương} \times \text{Số chia}.$
- Phép chia có dư: viết dưới dạng $a = b \cdot q + r$ với $0 \le r < b.$

**Luyện tập 1.1.** Đặt tính rồi tính:
- a) $315 \cdot 24$
- b) $4368 : 21$

<details>
<summary>Xem lời giải Luyện tập 1.1</summary>

- a) $315 \cdot 24 = 7560.$
- b) $4368 : 21 = 208$ (thử lại: $208 \cdot 21 = 4368$).

</details>

**Luyện tập 1.2.** Thực hiện phép chia rồi viết dưới dạng $a = b \cdot q + r$:
- a) $2026 : 14$
- b) $6000 : 23$

```quiz
type: choice
question: 'Số dư trong phép chia $2026 : 14$ là bao nhiêu?'
options:
  - '8'
  - '10'
  - '12'
  - '14'
answer: 2
explanation: 'Ta có 2026 = 14 * 144 + 10. Thương là 144 và số dư là 10 (thỏa mãn 10 < 14).'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 1.2</summary>

- a) $2026 : 14$ được thương là 144, dư 10:
  $$2026 = 14 \cdot 144 + 10 \quad (10 < 14).$$
- b) $6000 : 23$ được thương là 260, dư 20:
  $$6000 = 23 \cdot 260 + 20 \quad (20 < 23).$$

</details>

**Luyện tập 1.3.** Đặt tính rồi tính $45\ 375 : 25,$ sau đó thử lại kết quả bằng phép nhân.

<details>
<summary>Xem lời giải Luyện tập 1.3</summary>

- Đặt tính chia: $45\ 375 : 25 = 1815.$
- Thử lại: $1815 \cdot 25 = 45\ 375$ (đúng bằng số bị chia).

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
- a) $500 \cdot 37 \cdot 2$
- b) $8 \cdot 29 \cdot 125$

<details>
<summary>Xem lời giải Luyện tập 2.1</summary>

- a) $(500 \cdot 2) \cdot 37 = 1000 \cdot 37 = 37\ 000.$
- b) $(8 \cdot 125) \cdot 29 = 1000 \cdot 29 = 29\ 000.$

</details>

**Luyện tập 2.2.** Tính một cách hợp lí:
- a) $318 \cdot 84 - 56 \cdot 318 - 318 \cdot 28$
- b) $3725 : 25 - 1225 : 25$

```quiz
type: choice
question: 'Giá trị của biểu thức $318 \cdot 84 - 56 \cdot 318 - 318 \cdot 28$ là:'
options:
  - '318'
  - '0'
  - '3180'
  - '100'
answer: 2
explanation: 'Đặt thừa số chung 318: 318 * (84 - 56 - 28) = 318 * 0 = 0.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 2.2</summary>

- a) Đặt thừa số chung $318$:
  $$318 \cdot (84 - 56 - 28) = 318 \cdot 0 = 0.$$
- b) Áp dụng quy tắc chia một hiệu cho một số:
  $$(3725 - 1225) : 25 = 2500 : 25 = 100.$$

</details>

**Luyện tập 2.3.** Tính một cách hợp lí: $36 \cdot 14 + 18 \cdot 16 + 36 \cdot 6 - 6 \cdot 18.$

<details>
<summary>Xem lời giải Luyện tập 2.3</summary>

Nhóm các tích có chung thừa số $36$ và các tích có chung thừa số $18$:
$$[36 \cdot 14 + 36 \cdot 6] + [18 \cdot 16 - 18 \cdot 6]$$
$$= 36 \cdot (14 + 6) + 18 \cdot (16 - 6)$$
$$= 36 \cdot 20 + 18 \cdot 10$$
$$= 720 + 180 = 900.$$

</details>

---

### Dạng 3. Tìm số chưa biết trong phép nhân, phép chia

**Phương pháp giải:**
- Tìm thừa số: $\text{Thừa số} = \text{Tích} : \text{Thừa số đã biết}.$
- Tìm số bị chia: $\text{Số bị chia} = \text{Thương} \cdot \text{Số chia}.$
- Tìm số chia: $\text{Số chia} = \text{Số bị chia} : \text{Thương}.$
- Dạng $6x + 3x$: dùng phân phối gộp lại thành $(6 + 3)x = 9x.$

**Luyện tập 3.1.** Tìm $x$, biết:
- a) $8x = 104$
- b) $x : 7 = 18$

<details>
<summary>Xem lời giải Luyện tập 3.1</summary>

- a) $x = 104 : 8 = 13.$
- b) $x = 18 \cdot 7 = 126.$

</details>

**Luyện tập 3.2.** Tìm $x$, biết:
- a) $6x - 15 = 21$
- b) $4(x + 12) = 80$

<details>
<summary>Xem lời giải Luyện tập 3.2</summary>

- a) Coi $6x$ là số bị trừ:
  $$6x = 21 + 15 = 36 \implies x = 36 : 6 = 6.$$
- b) Coi $(x + 12)$ là thừa số:
  $$x + 12 = 80 : 4 = 20 \implies x = 20 - 12 = 8.$$

</details>

**Luyện tập 3.3.** Tìm $x$, biết:
- a) $(x - 45) : 15 = 32$
- b) $6x + 3x = 81$

```quiz
type: choice
question: 'Giá trị của x thỏa mãn $6x + 3x = 81$ là:'
options:
  - '7'
  - '9'
  - '12'
  - '27'
answer: 2
explanation: 'Gộp lại: (6 + 3)x = 9x = 81 => x = 81 : 9 = 9.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 3.3</summary>

- a) Coi $(x - 45)$ là số bị chia:
  $$x - 45 = 32 \cdot 15 = 480 \implies x = 480 + 45 = 525.$$
- b) Gộp thừa số:
  $$(6 + 3)x = 81 \implies 9x = 81 \implies x = 81 : 9 = 9.$$

</details>

---

### Dạng 4. Bài toán thực tế về phép nhân, phép chia

**Phương pháp giải:**
- Xác định rõ phép tính cần dùng.
- **Lưu ý bài toán chia có dư:**
  - *Làm tròn xuống:* Mua đồ, cắt vải, may áo (tiền dư không đủ mua thêm 1 đơn vị).
  - *Làm tròn lên (cộng thêm 1):* Xếp xe, chia bàn, đóng thùng (phải có thêm 1 xe/bàn/thùng để chở/chứa nốt số lượng còn dư).

**Luyện tập 4.1.** Một xí nghiệp may có hai tổ công nhân:
- Tổ 1 có 25 công nhân, mỗi công nhân may được 40 sản phẩm một ngày.
- Tổ 2 có nhiều hơn tổ 1 là 15 công nhân, mỗi công nhân may được 35 sản phẩm một ngày.

Hỏi mỗi ngày xí nghiệp may được tất cả bao nhiêu sản phẩm?

<details>
<summary>Xem lời giải Luyện tập 4.1</summary>

- Số sản phẩm tổ 1 may trong một ngày:
  $$25 \cdot 40 = 1000\text{ (sản phẩm)}.$$
- Số công nhân của tổ 2 là:
  $$25 + 15 = 40\text{ (công nhân)}.$$
- Số sản phẩm tổ 2 may trong một ngày:
  $$40 \cdot 35 = 1400\text{ (sản phẩm)}.$$
- Mỗi ngày xí nghiệp may được:
  $$1000 + 1400 = 2400\text{ (sản phẩm)}.$$

</details>

**Luyện tập 4.2.** Nam có 70 000 đồng đi mua bút bi, mỗi chiếc giá 4000 đồng. Hỏi Nam mua được nhiều nhất bao nhiêu chiếc bút bi?

<details>
<summary>Xem lời giải Luyện tập 4.2</summary>

Thực hiện phép chia có dư:
$$70\ 000 : 4000 = 17\text{ (dư } 2000).$$
Vì số tiền còn dư 2000 đồng không đủ mua thêm một chiếc bút nên Nam mua được **nhiều nhất 17 chiếc bút bi**.

</details>

**Luyện tập 4.3.** Một đoàn gồm 350 học sinh đi tham quan dã ngoại bằng xe khách, mỗi xe chở được tối đa 45 học sinh. Hỏi cần ít nhất bao nhiêu chiếc xe để chở hết số học sinh đó?

```quiz
type: choice
question: 'Đoàn có 350 học sinh, mỗi xe chở được 45 học sinh. Cần ít nhất bao nhiêu chiếc xe?'
options:
  - '7 chiếc xe'
  - '8 chiếc xe'
  - '9 chiếc xe'
  - '6 chiếc xe'
answer: 2
explanation: '350 : 45 = 7 dư 35 học sinh. 7 xe chở được 315 em, còn thừa 35 em nên bắt buộc cần thêm 1 xe nữa. Vậy cần ít nhất 7 + 1 = 8 xe.'
```

<details>
<summary>Xem lời giải đầy đủ Luyện tập 4.3</summary>

Thực hiện phép chia:
$$350 : 45 = 7\text{ (dư } 35).$$
7 xe chỉ chở được $7 \cdot 45 = 315$ học sinh, còn dư 35 học sinh nên bắt buộc phải bố trí thêm 1 xe nữa.
Vậy cần ít nhất số xe là:
$$7 + 1 = 8\text{ (chiếc xe)}.$$

</details>

---

## C. Phiếu bài tập tự luyện

**Bài 1.** Đặt tính rồi tính:
- a) $512 \cdot 28$
- b) $8688 : 24$ (thử lại bằng phép nhân).

<details>
<summary>Xem lời giải Bài 1</summary>

- a) $512 \cdot 28 = 14\ 336.$
- b) $8688 : 24 = 362.$
  - Thử lại: $362 \cdot 24 = 8688$ (đúng).

</details>

**Bài 2.** Điền số thích hợp vào ô trống trong bảng dưới đây:

| $a$ | $b$ | $a \cdot b$ | $a : b$ |
| :---: | :---: | :---: | :---: |
| $12$ | $4$ | ? | ? |
| ? | $5$ | ? | $8$ |
| $36$ | ? | $108$ | ? |
| ? | ? | $320$ | $5$ |
| $96$ | $16$ | ? | ? |

<details>
<summary>Xem đáp án bảng Bài 2</summary>

| $a$ | $b$ | $a \cdot b$ | $a : b$ |
| :---: | :---: | :---: | :---: |
| $12$ | $4$ | **$48$** | **$3$** |
| **$40$** | $5$ | **$200$** | $8$ |
| $36$ | **$3$** | $108$ | **$12$** |
| **$40$** | **$8$** | $320$ | $5$ |
| $96$ | $16$ | **$1536$** | **$6$** |

- Cột 2: $a = 5 \cdot 8 = 40 \implies a \cdot b = 40 \cdot 5 = 200.$
- Cột 3: $b = 108 : 36 = 3 \implies a : b = 36 : 3 = 12.$
- Cột 4: Ta có $(a \cdot b) \cdot (a : b) = a \cdot a = 320 \cdot 5 = 1600 \implies a = 40$ (vì $40 \cdot 40 = 1600$). Khi đó $b = 40 : 5 = 8.$
- Cột 5: $a \cdot b = 96 \cdot 16 = 1536;\quad a : b = 96 : 16 = 6.$

</details>

**Bài 3.** Tính một cách hợp lí:
- a) $4 \cdot 19 \cdot 25$
- b) $43 \cdot 38 + 43 \cdot 62$

<details>
<summary>Xem lời giải Bài 3</summary>

- a) $(4 \cdot 25) \cdot 19 = 100 \cdot 19 = 1900.$
- b) $43 \cdot (38 + 62) = 43 \cdot 100 = 4300.$

</details>

**Bài 4.** Tính một cách hợp lí:
- a) $48 \cdot 76 + 48 \cdot 24$
- b) $178 \cdot 34 - 78 \cdot 34$

<details>
<summary>Xem lời giải Bài 4</summary>

- a) $48 \cdot (76 + 24) = 48 \cdot 100 = 4800.$
- b) $(178 - 78) \cdot 34 = 100 \cdot 34 = 3400.$

</details>

**Bài 5.** Thực hiện phép chia rồi viết dưới dạng $a = b \cdot q + r$:
- a) $835 : 9$
- b) $3154 : 16$

<details>
<summary>Xem lời giải Bài 5</summary>

- a) $835 : 9$ được thương 92, dư 7:
  $$835 = 9 \cdot 92 + 7 \quad (7 < 9).$$
- b) $3154 : 16$ được thương 197, dư 2:
  $$3154 = 16 \cdot 197 + 2 \quad (2 < 16).$$

</details>

**Bài 6.** Tìm $x$, biết:
- a) $9x = 117$
- b) $x : 14 = 7$
- c) $5x + 4x = 72$

<details>
<summary>Xem lời giải Bài 6</summary>

- a) $x = 117 : 9 = 13.$
- b) $x = 7 \cdot 14 = 98.$
- c) $9x = 72 \implies x = 72 : 9 = 8.$

</details>

**Bài 7.** Tìm $x$, biết:
- a) $(x - 18) \cdot 6 = 72$
- b) $108 : (x + 3) = 9$

<details>
<summary>Xem lời giải Bài 7</summary>

- a) $x - 18 = 72 : 6 = 12 \implies x = 12 + 18 = 30.$
- b) $x + 3 = 108 : 9 = 12 \implies x = 12 - 3 = 9.$

</details>

**Bài 8.** Mỗi khẳng định sau đúng hay sai? Nếu sai, hãy sửa lại cho đúng:
- a) Phép chia có tính chất giao hoán, nghĩa là $16 : 4 = 4 : 16.$
- b) $23 = 4 \cdot 4 + 7.$
- c) $a : 0 = 0$ với mọi số tự nhiên $a.$
- d) $6 \cdot (20 + 4) = 6 \cdot 20 + 4.$

<details>
<summary>Xem lời giải Bài 8</summary>

- a) **Sai**, vì $16 : 4 = 4$ nhưng $4 : 16$ không thực hiện được trong $\mathbb{N}.$ Phép chia không có tính chất giao hoán.
- b) **Sai**, vì số dư 7 lớn hơn số chia 4. Phép chia chưa hoàn thành, viết đúng là: $23 = 4 \cdot 5 + 3.$
- c) **Sai**, vì không được chia cho 0, biểu thức $a : 0$ là vô nghĩa. (Chỉ có $0 : a = 0$ khi $a \ne 0$).
- d) **Sai**, vì phải nhân phân phối đủ: $6 \cdot (20 + 4) = 6 \cdot 20 + 6 \cdot 4 = 120 + 24 = 144.$

</details>

**Bài 9.** Người ta xếp 280 quyển vở vào các hộp, mỗi hộp đựng được 16 quyển. Hỏi cần ít nhất bao nhiêu hộp để đựng hết số vở đó?

<details>
<summary>Xem lời giải Bài 9</summary>

- Thực hiện phép chia:
  $$280 : 16 = 17\text{ (dư } 8).$$
- 17 hộp chỉ chứa được $17 \cdot 16 = 272$ quyển, còn thừa 8 quyển nên cần thêm 1 hộp nữa.
- Vậy cần ít nhất: $17 + 1 = 18\text{ (hộp)}.$

</details>

**Bài 10.** Lớp 6B có 42 học sinh. Thầy giáo phô tô đề kiểm tra để phát cho mỗi bạn một bản, mỗi đề gồm 3 trang. Biết giá phô tô một trang là 300 đồng, hỏi thầy giáo phải trả bao nhiêu tiền?

<details>
<summary>Xem lời giải Bài 10</summary>

- Tổng số trang cần phô tô là:
  $$42 \cdot 3 = 126\text{ (trang)}.$$
- Thầy giáo phải trả số tiền là:
  $$126 \cdot 300 = 37\ 800\text{ (đồng)}.$$

</details>

---

## D. Kiểm tra trắc nghiệm & Tự luận (15 phút)

### 1. Trắc nghiệm tương tác nhanh

```quiz
type: choice
question: 'Tích $8 \cdot 125 \cdot 9$ có kết quả là:'
options:
  - '900'
  - '9000'
  - '90 000'
  - '8000'
answer: 2
explanation: 'Ta có (8 * 125) * 9 = 1000 * 9 = 9000.'
```

```quiz
type: choice
question: 'Tìm x biết $7(x - 5) = 42$.'
options:
  - '6'
  - '11'
  - '1'
  - '12'
answer: 2
explanation: 'x - 5 = 42 : 7 = 6 => x = 6 + 5 = 11.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - '20 : 0 = 0'
  - '0 : 20 = 0'
  - '20 : 0 = 20'
  - '0 : 0 = 0'
answer: 2
explanation: 'Không được chia cho số 0. Chỉ có phép tính 0 : a = 0 (với a khác 0) là hợp lệ.'
```

```quiz
type: choice
question: 'Có 250 học sinh xếp ngồi vào các bàn 6 chỗ. Cần ít nhất bao nhiêu bàn?'
options:
  - '41 bàn'
  - '42 bàn'
  - '43 bàn'
  - '40 bàn'
answer: 2
explanation: '250 : 6 = 41 dư 4 học sinh. 41 bàn ngồi được 246 em, còn thừa 4 em nên cần thêm 1 bàn. Vậy cần ít nhất 42 bàn.'
```

---

### 2. Bài tập tự luận kiểm tra

**Câu 1.** Tính:
- a) $345 \cdot 14$
- b) $5280 : 16$

<details>
<summary>Xem lời giải Câu 1</summary>

- a) $345 \cdot 14 = 4830.$
- b) $5280 : 16 = 330.$

</details>

**Câu 2.** Thực hiện phép chia $1000 : 9$ rồi viết kết quả dưới dạng $a = b \cdot q + r.$

<details>
<summary>Xem lời giải Câu 2</summary>

$$1000 : 9 = 111\text{ (dư } 1) \implies 1000 = 9 \cdot 111 + 1.$$

</details>

**Câu 3.** Tính một cách hợp lí:
- a) $4 \cdot 25 \cdot 17$
- b) $8 \cdot 125 \cdot 9$

<details>
<summary>Xem lời giải Câu 3</summary>

- a) $(4 \cdot 25) \cdot 17 = 100 \cdot 17 = 1700.$
- b) $(8 \cdot 125) \cdot 9 = 1000 \cdot 9 = 9000.$

</details>

**Câu 4.** Tính một cách hợp lí: $72 \cdot 46 + 72 \cdot 54.$

<details>
<summary>Xem lời giải Câu 4</summary>

$$72 \cdot (46 + 54) = 72 \cdot 100 = 7200.$$

</details>

**Câu 5.** Tìm $x$, biết:
- a) $8x = 112$
- b) $x : 9 = 15$

<details>
<summary>Xem lời giải Câu 5</summary>

- a) $x = 112 : 8 = 14.$
- b) $x = 15 \cdot 9 = 135.$

</details>

**Câu 6.** Tìm $x$, biết: $7(x - 5) = 42.$

<details>
<summary>Xem lời giải Câu 6</summary>

$$x - 5 = 42 : 7 = 6 \implies x = 6 + 5 = 11.$$

</details>

**Câu 7.** Một cửa hàng nhập về 18 thùng mì, mỗi thùng có 30 gói. Hỏi cửa hàng nhập về tất cả bao nhiêu gói mì?

<details>
<summary>Xem lời giải Câu 7</summary>

Cửa hàng nhập về tất cả:
$$18 \cdot 30 = 540\text{ (gói mì)}.$$

</details>

**Câu 8.** Có 250 học sinh xếp ngồi vào các bàn, mỗi bàn ngồi được 6 học sinh. Hỏi cần ít nhất bao nhiêu chiếc bàn để tất cả học sinh đều có chỗ ngồi?

<details>
<summary>Xem lời giải Câu 8</summary>

- Ta có: $250 : 6 = 41\text{ (dư } 4).$
- 41 bàn ngồi được 246 em, còn thừa 4 em nên cần thêm 1 bàn.
- Vậy cần ít nhất: $41 + 1 = 42\text{ (chiếc bàn)}.$

</details>

**Câu 9.** Mỗi khẳng định sau đúng hay sai?
- a) $0 : 24 = 0$
- b) $24 : 0 = 0$

<details>
<summary>Xem lời giải Câu 9</summary>

- a) **Đúng**, vì 0 chia cho bất kì số tự nhiên khác 0 nào cũng bằng 0.
- b) **Sai**, vì phép chia cho 0 không có nghĩa.

</details>

---

## E. Bài tập nâng cao

**Bài 1 (Bài toán phép chia có dư).**
Trong một phép chia có dư, số bị chia bằng 35, thương bằng 4. Tìm số chia và số dư.

<details>
<summary>Xem lời giải Bài 1 nâng cao</summary>

- Gọi số chia là $b,$ số dư là $r$ ($b, r \in \mathbb{N}$).
- Điều kiện của phép chia có dư:
  $$35 = 4b + r \quad (0 < r < b).$$
- Từ $r = 35 - 4b > 0 \implies 4b < 35 \implies b \le 8.$
- Từ $r < b \implies 35 - 4b < b \implies 35 < 5b \implies b > 7.$
- Vì $b \in \mathbb{N}$ và $7 < b \le 8$ nên bắt buộc $b = 8.$
- Khi đó số dư là:
  $$r = 35 - 4 \cdot 8 = 35 - 32 = 3.$$
- Thử lại: $35 = 8 \cdot 4 + 3$ (với số dư $3 < 8,$ hoàn toàn chính xác).
- Vậy **số chia bằng 8** và **số dư bằng 3**.

</details>

**Bài 2.** Tìm số tự nhiên lớn nhất có ba chữ số, biết rằng khi chia nó cho 74 thì thương bằng số dư.

<details>
<summary>Xem lời giải Bài 2 nâng cao</summary>

- Gọi số cần tìm là $a$ ($a \le 999$).
- Khi chia $a$ cho 74, gọi thương và số dư là $k$ ($0 \le k < 74$).
- Theo công thức phép chia có dư:
  $$a = 74k + k = 75k.$$
- Vì $a$ là số có ba chữ số nên $a \le 999 \implies 75k \le 999 \implies k \le 13.$
- Để $a$ lớn nhất, ta chọn $k$ lớn nhất là $k = 13.$
- Khi đó số cần tìm là:
  $$a = 75 \cdot 13 = 975.$$
- **Thử lại:** $975 : 74 = 13$ (dư 13, thỏa mãn thương bằng số dư).
- Vậy số cần tìm là **$975$**.

</details>

**Bài 3.** Tính một cách hợp lí: $318 \cdot 73 + 54 - 63 \cdot 318.$

<details>
<summary>Xem lời giải Bài 3 nâng cao</summary>

Nhóm hai số hạng có chung thừa số $318$:
$$318 \cdot 73 - 63 \cdot 318 + 54$$
$$= 318 \cdot (73 - 63) + 54$$
$$= 318 \cdot 10 + 54$$
$$= 3180 + 54 = 3234.$$

</details>

**Bài 4.** Tìm hai số tự nhiên, biết rằng tổng của chúng gấp ba lần hiệu của chúng và tích của chúng gấp tám lần hiệu của chúng.

<details>
<summary>Xem lời giải Bài 4 nâng cao</summary>

- Gọi hai số tự nhiên cần tìm là $x$ và $y$ ($x \ge y$).
- Gọi hiệu của chúng là $d = x - y.$
- Theo đề bài:
  - Tổng: $x + y = 3d.$
  - Tích: $xy = 8d.$
- Từ tổng $x + y = 3d$ và hiệu $x - y = d$:
  - Số lớn: $x = (3d + d) : 2 = 2d.$
  - Số bé: $y = (3d - d) : 2 = d.$
- Thay vào biểu thức tích:
  $$x \cdot y = 2d \cdot d = 2d^2.$$
  Mà tích bằng $8d,$ do đó:
  $$2d^2 = 8d \implies 2d = 8 \implies d = 4\text{ (vì } d \ne 0).$$
- Với $d = 4$:
  - Số bé: $y = d = 4.$
  - Số lớn: $x = 2d = 8.$
- **Thử lại:**
  - Tổng $= 8 + 4 = 12.$
  - Hiệu $= 8 - 4 = 4$ (tổng gấp 3 lần hiệu: $12 = 3 \cdot 4$).
  - Tích $= 8 \cdot 4 = 32$ (tích gấp 8 lần hiệu: $32 = 8 \cdot 4$).
- Vậy hai số tự nhiên cần tìm là **$8$ và $4$**.

</details>

**Bài 5 (Điền chữ số thích hợp).**
Thay mỗi dấu $*$ bởi một chữ số thích hợp sao cho thương là số chẵn:
$$93** : 58 = *6*.$$

<details>
<summary>Xem lời giải Bài 5 nâng cao</summary>

- Số bị chia $93**$ nằm trong khoảng từ $9300$ đến $9399.$
- Ta thực hiện phép chia chặn hai đầu:
  $$9300 : 58 \approx 160{,}34$$
  $$9399 : 58 \approx 162{,}05$$
- Do đó thương $*6*$ phải là số tự nhiên nằm giữa 160 và 163, có chữ số hàng chục là 6, tức là $161$ hoặc $162.$
- Vì đề bài yêu cầu thương là số chẵn nên chọn thương là **$162$**.
- Khi đó số bị chia là:
  $$58 \cdot 162 = 9396.$$
- Ta được phép tính hoàn chỉnh:
  $$9396 : 58 = 162.$$

</details>
