---
title: 'Toán 6 Bài 14: Phép cộng và phép trừ số nguyên - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Lý thuyết toàn diện Toán 6 Bài 14 Phép cộng và phép trừ số nguyên: số đối, quy tắc cộng cùng dấu, khác dấu, phép trừ hai số nguyên, tính chất phép cộng, bài tập thực tế và bài tập nâng cao độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số nguyên
  - Phép cộng số nguyên
  - Phép trừ số nguyên
  - Số đối
  - Kết nối tri thức
grade: 6
---

# Bài 14. Phép cộng và phép trừ số nguyên

Ở Bài 13, chúng ta đã bước chân vào thế giới của tập hợp số nguyên $\mathbb{Z}$ với những con số nguyên âm đầy mới mẻ. Tuy nhiên, nếu chỉ biết đọc và so sánh các số nguyên thì chưa đủ. Trong đời sống thực tế, nhiệt độ có thể **tăng thêm** hoặc **giảm đi**, tài khoản ngân hàng có thể **nạp vào** hoặc **rút ra**, tàu ngầm có thể **nổi lên** hoặc **lặn sâu xuống**.

Tất cả những sự biến động đó đòi hỏi chúng ta phải biết thực hiện **phép cộng** và **phép trừ** số nguyên. Hôm nay, chúng ta sẽ cùng khám phá các quy tắc vàng giúp các em tính toán số nguyên một cách chuẩn xác, nhanh chóng và không bao giờ bị nhầm dấu!

---

## 0. Khởi động — Ôn tập và kích hoạt tư duy (5–7 phút)

Hãy thử sức với 3 câu hỏi trắc nghiệm tương tác để khởi động trước khi vào bài mới:

```quiz
type: choice
question: 'Số đối của số nguyên -18 là số nào sau đây?'
options:
  - '-18'
  - '18'
  - '0'
  - '81'
answer: 2
explanation: 'Số đối của số nguyên âm -a là số nguyên dương a. Do đó số đối của -18 là 18.'
```

```quiz
type: choice
question: 'Nhiệt độ buổi chiều tại Sa Pa là 2 độ C. Đến nửa đêm, nhiệt độ giảm đi 5 độ C. Phép tính nào mô tả nhiệt độ lúc nửa đêm?'
options:
  - '2 + 5 = 7'
  - '2 - 5 = -3'
  - '5 - 2 = 3'
  - '(-2) + 5 = 3'
answer: 2
explanation: 'Nhiệt độ ban đầu là 2 độ C, giảm đi 5 độ C tức là lấy 2 - 5 = 2 + (-5) = -3 độ C.'
```

```quiz
type: choice
question: 'Một người nợ ngân hàng 15 triệu đồng, sau đó vay thêm 20 triệu đồng nữa. Tổng số tiền nợ của người đó tương ứng với phép tính nào?'
options:
  - '(-15) + (-20) = -35'
  - '(-15) + 20 = 5'
  - '15 + 20 = 35'
  - '(-15) - (-20) = 5'
answer: 1
explanation: 'Nợ 15 triệu ghi là -15, nợ thêm 20 triệu ghi là -20. Tổng số tiền nợ là (-15) + (-20) = -35 triệu đồng.'
```

---

## A. Tóm tắt lý thuyết trọng tâm

### 1. Số đối của một số nguyên

#### a) Định nghĩa
- Hai số nằm ở hai phía của điểm $0$ trên trục số và **cách đều điểm $0$** được gọi là **hai số đối nhau**.
- Số đối của số nguyên $a$ được ký hiệu là $-a$.
  - Số đối của số nguyên dương là số nguyên âm: số đối của $6$ là $-6$.
  - Số đối của số nguyên âm là số nguyên dương: số đối của $-8$ là $-(-8) = 8$.
  - Số đối của số $0$ là chính nó: số đối của $0$ là $0$.
- **Tổng của hai số đối nhau luôn bằng $0$:**

$$a + (-a) = 0.$$

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 20px 0; overflow-x: auto; text-align: center;">
<div style="font-weight: 600; margin-bottom: 12px; color: #1e293b;">Minh họa hai số đối nhau trên trục số (-4 và 4)</div>
<svg viewBox="0 0 600 90" style="width: 100%; max-width: 600px; height: auto; font-family: system-ui, sans-serif;">
<defs>
<marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
</marker>
</defs>
<line x1="20" y1="45" x2="580" y2="45" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr)" />
<line x1="300" y1="35" x2="300" y2="55" stroke="#dc2626" stroke-width="3" />
<text x="300" y="75" text-anchor="middle" font-size="15" font-weight="bold" fill="#dc2626">0</text>
<circle cx="140" cy="45" r="5" fill="#2563eb" />
<line x1="140" y1="37" x2="140" y2="53" stroke="#2563eb" stroke-width="2" />
<text x="140" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#2563eb">-4</text>
<circle cx="460" cy="45" r="5" fill="#2563eb" />
<line x1="460" y1="37" x2="460" y2="53" stroke="#2563eb" stroke-width="2" />
<text x="460" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#2563eb">4</text>
<path d="M 140 32 Q 220 10 300 32" fill="none" stroke="#2563eb" stroke-dasharray="4" stroke-width="1.5" />
<text x="220" y="18" text-anchor="middle" font-size="12" fill="#2563eb">cách 4 đơn vị</text>
<path d="M 300 32 Q 380 10 460 32" fill="none" stroke="#2563eb" stroke-dasharray="4" stroke-width="1.5" />
<text x="380" y="18" text-anchor="middle" font-size="12" fill="#2563eb">cách 4 đơn vị</text>
</svg>
</div>

#### Ví dụ mẫu 1
Tìm số đối của mỗi số nguyên sau: $15;\; -28;\; 0;\; -2028.$

**Lời giải:**
- Số đối của $15$ là $-15.$
- Số đối của $-28$ là $28.$
- Số đối của $0$ là $0.$
- Số đối của $-2028$ là $2028.$

---

### 2. Cộng hai số nguyên cùng dấu

#### a) Cộng hai số nguyên dương
Cộng hai số nguyên dương chính là phép cộng hai số tự nhiên đã học ở tiểu học:

$$a + b \quad (a, b > 0).$$

#### b) Cộng hai số nguyên âm
> Muốn cộng hai số nguyên âm, ta **cộng phần số tự nhiên** của chúng lại với nhau rồi **đặt dấu trừ "$-$"** đằng trước kết quả:
> $$(-a) + (-b) = -(a + b) \quad (a, b > 0).$$

*Hình dung trực quan trên trục số:* Cộng với một số âm chính là lùi (nhảy) về phía bên trái. Xuất phát từ $-a$, lùi tiếp sang trái $b$ đơn vị, ta sẽ dừng lại ở vị trí $-(a + b).$

#### Ví dụ mẫu 2
Tính:
a) $142 + 58$;  
b) $(-35) + (-25)$;  
c) $(-215) + (-65).$

**Lời giải:**
a) Hai số nguyên dương: $142 + 58 = 200.$  
b) Hai số nguyên âm: cộng hai phần tự nhiên $35 + 25 = 60$, sau đó đặt dấu "$-$" đằng trước:
$(-35) + (-25) = -(35 + 25) = -60.$  
c) $(-215) + (-65) = -(215 + 65) = -280.$

---

### 3. Cộng hai số nguyên khác dấu

#### Quy tắc cộng hai số nguyên khác dấu:
1. **Hai số đối nhau** luôn có tổng bằng $0$: $(-a) + a = 0.$
2. **Hai số khác dấu không đối nhau:**
   - Lấy phần số tự nhiên **lớn hơn** trừ đi phần số tự nhiên **nhỏ hơn**.
   - Đặt trước hiệu vừa tìm được dấu của số có phần số tự nhiên lớn hơn.

> **Quy tắc dấu:** Dấu của kết quả là dấu của số có giá trị tuyệt đối (phần tự nhiên) lớn hơn.

*Hình dung trực quan trên trục số:* Cộng với số dương là tiến sang phải, cộng với số âm là lùi sang trái.

#### Ví dụ mẫu 3
Tính:
a) $(-56) + 24$;  
b) $50 + (-80)$;  
c) $175 + (-75).$

**Lời giải:**
a) So sánh hai phần tự nhiên: $56 > 24$. Ta lấy $56 - 24 = 32$. Vì số mang dấu âm có phần tự nhiên lớn hơn ($56 > 24$), nên kết quả mang dấu "$-$":
$(-56) + 24 = -(56 - 24) = -32.$  
b) Ta thấy $80 > 50$, lấy $80 - 50 = 30$. Số mang dấu âm có phần tự nhiên lớn hơn, nên:
$50 + (-80) = -(80 - 50) = -30.$  
c) Ta thấy $175 > 75$, lấy $175 - 75 = 100$. Số mang dấu dương có phần tự nhiên lớn hơn, nên:
$175 + (-75) = +(175 - 75) = 100.$

---

### 4. Tính chất của phép cộng số nguyên

Tương tự như phép cộng số tự nhiên, phép cộng trong tập hợp $\mathbb{Z}$ có đầy đủ các tính chất đại số quan trọng:

| Tên tính chất | Công thức tổng quát | Ý nghĩa ứng dụng |
| :--- | :--- | :--- |
| **Giao hoán** | $a + b = b + a$ | Đổi chỗ các số hạng tùy ý |
| **Kết hợp** | $(a + b) + c = a + (b + c)$ | Nhóm các số hạng tạo thành số tròn chục, tròn trăm hoặc cặp số đối |
| **Cộng với số 0** | $a + 0 = 0 + a = a$ | Số $0$ không làm thay đổi giá trị |
| **Cộng với số đối** | $a + (-a) = 0$ | Triệt tiêu các cặp số đối để biểu thức trở về $0$ |

#### Ví dụ mẫu 4
Tính một cách hợp lý:
a) $(-24) + 17 + 24$;  
b) $14 + 36 + (-20).$

**Lời giải:**
a) Giao hoán để ghép cặp số đối nhau:
$(-24) + 17 + 24 = [(-24) + 24] + 17 = 0 + 17 = 17.$  
b) Nhóm hai số nguyên dương trước:
$14 + 36 + (-20) = (14 + 36) + (-20) = 50 + (-20) = 30.$

---

### 5. Phép trừ hai số nguyên

#### Quy tắc chuyển phép trừ về phép cộng với số đối:
> Muốn trừ số nguyên $a$ cho số nguyên $b$, ta **cộng $a$ với số đối của $b$**:
> $$a - b = a + (-b).$$

Đặc biệt: Trừ đi một số âm chính là **cộng với số dương đối của nó**:
$$a - (-b) = a + b.$$

> [!NOTE]
> Trong tập hợp số tự nhiên $\mathbb{N}$, phép trừ $a - b$ chỉ thực hiện được khi $a \ge b$.  
> Nhưng trong tập hợp số nguyên $\mathbb{Z}$, **phép trừ luôn luôn thực hiện được** với mọi số nguyên $a$ và $b$!

#### Ví dụ mẫu 5
Tính:
a) $7 - 12$;  
b) $(-8) - 9$;  
c) $(-20) - (-6).$

**Lời giải:**
a) Chuyển thành cộng với số đối:
$7 - 12 = 7 + (-12) = -(12 - 7) = -5.$  
b) Chuyển thành cộng với số đối:
$(-8) - 9 = (-8) + (-9) = -(8 + 9) = -17.$  
c) Trừ đi số âm đổi thành cộng số dương:
$(-20) - (-6) = (-20) + 6 = -(20 - 6) = -14.$

---

### 6. Bốn sai lầm kinh điển cần tuyệt đối tránh

> [!WARNING]
> **Sai lầm 1: Nhầm lẫn quy tắc cộng hai số âm**
> - Học sinh hay làm sai: $(-7) + (-8) = -1$ (do lấy $8 - 7$).
> - **Quy tắc đúng:** Cùng dấu âm thì phải **cộng** hai số tự nhiên lại: $(-7) + (-8) = -(7 + 8) = -15.$
>
> **Sai lầm 2: Trừ số âm bị sót đổi dấu**
> - Học sinh hay làm sai: $6 - (-4) = 6 - 4 = 2$.
> - **Quy tắc đúng:** Hai dấu trừ liên tiếp biến thành dấu cộng: $6 - (-4) = 6 + 4 = 10.$
>
> **Sai lầm 3: Nhầm phép trừ có tính giao hoán**
> - Phép trừ **không có tính giao hoán**: $8 - 3 \ne 3 - 8$ (vì $8 - 3 = 5$, còn $3 - 8 = -5$).
> - Hai kết quả là hai số đối nhau: $a - b = -(b - a).$
>
> **Sai lầm 4: Bỏ quên dấu khi đổi chỗ số hạng**
> - Khi đổi vị trí các số hạng trong một tổng đại số, mỗi số hạng **phải mang theo dấu đứng ngay phía trước nó**.

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1. Phép cộng hai số nguyên

**Phương pháp giải:**
1. Nhìn dấu của hai số hạng:
   - Cùng dương: cộng bình thường.
   - Cùng âm: cộng hai phần tự nhiên, đặt dấu trừ đằng trước.
   - Khác dấu: lấy phần lớn trừ phần bé, đặt dấu của số lớn hơn trước kết quả.

#### Luyện tập 1.1
Tính:
a) $(-34) + (-46)$;  
b) $(-7) + 12$;  
c) $184 + (-84).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.1</strong></summary>

- a) $(-34) + (-46) = -(34 + 46) = -80.$
- b) Vì $12 > 7$ nên $(-7) + 12 = +(12 - 7) = 5.$
- c) Vì $184 > 84$ nên $184 + (-84) = +(184 - 84) = 100.$
</details>

#### Luyện tập 1.2
Tính:
a) $68 + 312$;  
b) $(-345) + (-555)$;  
c) $1200 + (-450).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.2</strong></summary>

- a) $68 + 312 = 380.$
- b) $(-345) + (-555) = -(345 + 555) = -900.$
- c) $1200 + (-450) = 1200 - 450 = 750.$
</details>

#### Luyện tập 1.3
Tính:
a) $(-3125) + (-275)$;  
b) $(-8942) + 8942$;  
c) $(-65) + 35.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.3</strong></summary>

- a) $(-3125) + (-275) = -(3125 + 275) = -3400.$
- b) Hai số đối nhau có tổng bằng $0$: $(-8942) + 8942 = 0.$
- c) Vì $65 > 35$ nên $(-65) + 35 = -(65 - 35) = -30.$
</details>

---

### Dạng 2. Phép trừ hai số nguyên

**Phương pháp giải:**
Luôn chuyển thành phép cộng với số đối:
$$a - b = a + (-b).$$
Sau đó áp dụng quy tắc cộng số nguyên ở Dạng 1.

#### Luyện tập 2.1
Tính:
a) $24 - 8$;  
b) $8 - 15$;  
c) $(-7) - 9$;  
d) $(-18) - (-6).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.1</strong></summary>

- a) $24 - 8 = 16.$
- b) $8 - 15 = 8 + (-15) = -(15 - 8) = -7.$
- c) $(-7) - 9 = (-7) + (-9) = -(7 + 9) = -16.$
- d) $(-18) - (-6) = (-18) + 6 = -(18 - 6) = -12.$
</details>

#### Luyện tập 2.2
Tính:
a) $16 - 25$;  
b) $(-12) - 8$;  
c) $11 - (-7)$;  
d) $(-6) - (-14).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.2</strong></summary>

- a) $16 - 25 = 16 + (-25) = -(25 - 16) = -9.$
- b) $(-12) - 8 = (-12) + (-8) = -(12 + 8) = -20.$
- c) $11 - (-7) = 11 + 7 = 18.$
- d) $(-6) - (-14) = (-6) + 14 = 14 - 6 = 8.$
</details>

#### Luyện tập 2.3
Tìm số đối của số trừ rồi tính:
a) $0 - 19$;  
b) $(-250) - (-250)$;  
c) $32 - 50.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.3</strong></summary>

- a) Số đối của $19$ là $-19$: $0 - 19 = 0 + (-19) = -19.$
- b) Số đối của $-250$ là $250$: $(-250) - (-250) = (-250) + 250 = 0.$
- c) Số đối của $50$ là $-50$: $32 - 50 = 32 + (-50) = -(50 - 32) = -18.$
</details>

---

### Dạng 3. Tính nhanh (tính hợp lý) tổng đại số

**Phương pháp giải:**
1. Chuyển các phép trừ thành phép cộng với số đối.
2. Dùng tính chất giao hoán và kết hợp:
   - Ghép các cặp số đối nhau (có tổng bằng $0$).
   - Ghép các số có tận cùng tròn chục, tròn trăm.
   - Gom các số âm với nhau, các số dương với nhau.

#### Luyện tập 3.1
Tính hợp lý:
a) $-18 + (-22) + 47$;  
b) $74 + (-45) + (-15).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.1</strong></summary>

- a) Nhóm hai số nguyên âm trước:
  $$-18 + (-22) + 47 = [(-18) + (-22)] + 47 = (-40) + 47 = 7.$$
- b) Nhóm hai số nguyên âm trước:
  $$74 + [(-45) + (-15)] = 74 + (-60) = 14.$$
</details>

#### Luyện tập 3.2
Tính hợp lý:
a) $(-24) + (-315) + (-16) + 315$;  
b) $(-145) + 86 + (-255) + 14.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.2</strong></summary>

- a) Ghép cặp số đối nhau và cặp số âm:
  $$[(-315) + 315] + [(-24) + (-16)] = 0 + (-40) = -40.$$
- b) Ghép hai số âm và hai số dương:
  $$[(-145) + (-255)] + (86 + 14) = (-400) + 100 = -300.$$
</details>

#### Luyện tập 3.3
Tính tổng tất cả các số nguyên $x$ thỏa mãn:
a) $-25 < x < 25$;  
b) $-21 \le x \le 20.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.3</strong></summary>

- a) Các số nguyên thỏa mãn là: $-24; -23; \dots; 23; 24.$  
  Tổng cần tính:
  $$S = (-24 + 24) + (-23 + 23) + \dots + (-1 + 1) + 0 = 0.$$

- b) Các số nguyên thỏa mãn là: $-21; -20; -19; \dots; 19; 20.$  
  Ta ghép các cặp số đối từ $-20$ đến $20$:
  $$S = -21 + [(-20 + 20) + (-19 + 19) + \dots + 0] = -21 + 0 = -21.$$
</details>

---

### Dạng 4. Tìm số nguyên $x$

**Phương pháp giải:**
Áp dụng các quy tắc tìm thành phần phép tính:
- Muốn tìm số hạng chưa biết: lấy Tổng trừ đi số hạng đã biết.
- Muốn tìm số bị trừ: lấy Hiệu cộng với số trừ.
- Muốn tìm số trừ: lấy Số bị trừ trừ đi hiệu.
- Nếu biểu thức có ngoặc, coi cả cụm trong ngoặc là một ẩn phụ cần tìm trước.

#### Luyện tập 4.1
Tìm số nguyên $x$, biết:
a) $x + 9 = -16$;  
b) $x - 18 = -25$;  
c) $17 - x = 24.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.1</strong></summary>

- a) $x = -16 - 9 = -16 + (-9) = -25.$
- b) $x = -25 + 18 = -(25 - 18) = -7.$
- c) $x = 17 - 24 = 17 + (-24) = -7.$
</details>

#### Luyện tập 4.2
Tìm số nguyên $x$, biết: $23 - (4 + x) = 7.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.2</strong></summary>

Coi cụm $(4 + x)$ là số trừ:
$$4 + x = 23 - 7 = 16 \implies x = 16 - 4 = 12.$$

**Thử lại:** $23 - (4 + 12) = 23 - 16 = 7$ (chính xác).
</details>

#### Luyện tập 4.3
Tìm số nguyên $x$, biết $x$ là số đối của tổng $S = (-12) + 7 + (-19).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.3</strong></summary>

Tính tổng $S$:
$$S = [(-12) + (-19)] + 7 = (-31) + 7 = -24.$$

Vì $x$ là số đối của $S = -24$, nên $x = -(-24) = 24.$
</details>

---

### Dạng 5. Bài toán ứng dụng thực tế

**Phương pháp giải:**
1. Xác định dấu đại lượng:
   - Đại lượng tăng, ấm lên, nổi lên, có tiền, sau công nguyên: số dương ($+$).
   - Đại lượng giảm, lạnh đi, lặn xuống, nợ tiền, trước công nguyên: số âm ($-$).
2. Tìm chênh lệch giữa hai đại lượng:
   $$\text{Chênh lệch} = \text{Giá trị lớn} - \text{Giá trị nhỏ}.$$

#### Luyện tập 5.1
Nơi lạnh nhất trên Trái Đất từng được ghi nhận là trạm nghiên cứu Vostok (Nam Cực) với nhiệt độ khoảng $-89^\circ\text{C}$. Nơi nóng nhất từng ghi nhận là sa mạc Dasht-e Lut (Iran) với nhiệt độ khoảng $70^\circ\text{C}$. Hỏi sự chênh lệch nhiệt độ giữa nơi nóng nhất và nơi lạnh nhất này là bao nhiêu độ C?

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.1</strong></summary>

Chênh lệch nhiệt độ giữa hai nơi là:
$$70 - (-89) = 70 + 89 = 159^\circ\text{C}.$$

Vậy mức chênh lệch nhiệt độ là $159^\circ\text{C}.$
</details>

#### Luyện tập 5.2
Bảng sau ghi lại nhiệt độ tại các thời điểm trong một ngày mùa đông tại thành phố Cáp Nhĩ Tân:

| Thời điểm | 4 giờ | 8 giờ | 13 giờ | 16 giờ | 20 giờ | 23 giờ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Nhiệt độ** | $-18^\circ\text{C}$ | $-12^\circ\text{C}$ | $-2^\circ\text{C}$ | $1^\circ\text{C}$ | $-6^\circ\text{C}$ | $-10^\circ\text{C}$ |

a) Trong hai thời điểm $4$ giờ và $23$ giờ, thời điểm nào lạnh hơn?  
b) Tính độ chênh lệch nhiệt độ giữa thời điểm ấm nhất ($16$ giờ) và thời điểm lạnh nhất ($4$ giờ).

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.2</strong></summary>

a) So sánh nhiệt độ lúc $4$ giờ ($-18^\circ\text{C}$) và lúc $23$ giờ ($-10^\circ\text{C}$):  
Vì $-18 < -10$ nên **thời điểm $4$ giờ lạnh hơn.**

b) Độ chênh lệch nhiệt độ giữa $16$ giờ và $4$ giờ là:
$$1 - (-18) = 1 + 18 = 19^\circ\text{C}.$$
</details>

#### Luyện tập 5.3
Một chiếc thang máy đang ở tầng $4$ của một tòa cao ốc. Thang máy đi xuống $7$ tầng để nhân viên vận chuyển hàng vào kho tầng hầm. Hỏi thang máy dừng lại ở tầng nào (biết tầng trệt là $0$, tầng hầm thứ nhất là $-1$, hầm thứ hai là $-2\dots$)?

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.3</strong></summary>

Vị trí của thang máy sau khi đi xuống $7$ tầng là:
$$4 - 7 = 4 + (-7) = -3.$$

Vậy thang máy dừng lại ở **tầng hầm thứ 3** (tương ứng với số $-3$).
</details>

---

## C. Phiếu bài tập tự luyện (Độc bản 100%)

### Bài 1. Thực hiện phép cộng
Tính:
a) $(-382) + (-518)$;  
b) $1500 + (-485)$;  
c) $(-4120) + (-280)$;  
d) $74 + 326.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 1</strong></summary>

- a) $(-382) + (-518) = -(382 + 518) = -900.$
- b) $1500 + (-485) = 1500 - 485 = 1015.$
- c) $(-4120) + (-280) = -(4120 + 280) = -4400.$
- d) $74 + 326 = 400.$
</details>

### Bài 2. Thực hiện phép trừ
Tính:
a) $(-14) - 8$;  
b) $9 - 21$;  
c) $(-5) - (-16)$;  
d) $35 - (-35).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 2</strong></summary>

- a) $(-14) - 8 = (-14) + (-8) = -22.$
- b) $9 - 21 = 9 + (-21) = -12.$
- c) $(-5) - (-16) = (-5) + 16 = 11.$
- d) $35 - (-35) = 35 + 35 = 70.$
</details>

### Bài 3. Tính hợp lý biểu thức nhiều số hạng
Tính hợp lý:
a) $45 + 46 + 47 + 48 - 25 - 26 - 27 - 28$;  
b) $324 + (-54) - (-74) + 110 - 95.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 3</strong></summary>

- a) Ghép từng cặp tương ứng:
  $$(45 - 25) + (46 - 26) + (47 - 27) + (48 - 28) = 20 + 20 + 20 + 20 = 80.$$
- b) Đổi trừ thành cộng với số đối:
  $$324 + (-54) + 74 + 110 - 95 = [324 + 74 + 110] + [(-54) + (-95)] = 508 + (-149) = 359.$$
</details>

### Bài 4. Triệt tiêu số đối
Tính hợp lý:
a) $36 + 48 - 65 - 36 - 48$;  
b) $(-2025) + (-684) + (-305) + 584 + 405.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 4</strong></summary>

- a) Ghép các cặp đối nhau:
  $$(36 - 36) + (48 - 48) - 65 = 0 + 0 - 65 = -65.$$
- b) Nhóm các số thích hợp:
  $$(-2025) + [(-684) + 584] + [(-305) + 405] = (-2025) + (-100) + 100 = -2025.$$
</details>

### Bài 5. Tìm số nguyên $x$
Tìm số nguyên $x$, biết:
a) $x + 11 = -18$;  
b) $19 - x = 27$;  
c) $(-15) - (42 - x) = 55.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 5</strong></summary>

- a) $x = -18 - 11 = -18 + (-11) = -29.$
- b) $x = 19 - 27 = 19 + (-27) = -8.$
- c) Coi $(42 - x)$ là số trừ:
  $$42 - x = (-15) - 55 = -70 \implies x = 42 - (-70) = 42 + 70 = 112.$$
</details>

### Bài 6. Tổng các số nguyên trong khoảng
Tính tổng tất cả các số nguyên $x$ thỏa mãn điều kiện: $-35 < x \le 35.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 6</strong></summary>

Các số nguyên $x$ thỏa mãn là: $-34; -33; \dots; 33; 34; 35.$  
Ghép các cặp số đối nhau:
$$S = [(-34 + 34) + (-33 + 33) + \dots + (-1 + 1) + 0] + 35 = 0 + 35 = 35.$$
</details>

### Bài 7. Biến thiên nhiệt độ
Nhiệt độ đo được lúc trưa tại đỉnh đèo Ô Quy Hồ là $2^\circ\text{C}$. Đến nửa đêm, không khí lạnh tăng cường làm nhiệt độ giảm đi $7^\circ\text{C}$. Hỏi nhiệt độ lúc nửa đêm tại đỉnh đèo là bao nhiêu?

<details>
<summary><strong>Xem lời giải chi tiết Bài 7</strong></summary>

Nhiệt độ lúc nửa đêm là:
$$2 - 7 = 2 + (-7) = -5^\circ\text{C}.$$

Vậy nhiệt độ nửa đêm là $-5^\circ\text{C}.$
</details>

### Bài 8. Đánh giá tính đúng / sai
Xét tính đúng/sai của mỗi khẳng định sau. Sửa lại nếu sai:
a) $(-9) + (-6) = -3$;  
b) $8 - (-4) = 8 - 4 = 4$;  
c) Tổng của hai số nguyên âm luôn luôn là một số nguyên âm;  
d) Trong tập hợp số nguyên, hiệu $a - b$ luôn bằng số đối của $b - a.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 8</strong></summary>

- a) **Sai.** Cùng âm thì phải cộng: $(-9) + (-6) = -15.$
- b) **Sai.** Trừ số âm thành cộng: $8 - (-4) = 8 + 4 = 12.$
- c) **Đúng.** Vì cộng hai số âm ta cộng hai phần tự nhiên rồi đặt dấu trừ trước kết quả.
- d) **Đúng.** Vì $a - b = -(b - a)$ với mọi số nguyên $a, b.$
</details>

### Bài 9. Bài toán chuyển động tàu ngầm
Một tàu ngầm nghiên cứu sinh vật biển đang ở độ sâu $45\text{ m}$ dưới mực nước biển (độ cao $-45\text{ m}$). Tàu nổi lên $20\text{ m}$, sau đó lại lặn sâu thêm $35\text{ m}$. Hỏi vị trí cuối cùng của tàu ở độ cao bao nhiêu mét so với mực nước biển?

<details>
<summary><strong>Xem lời giải chi tiết Bài 9</strong></summary>

Độ cao cuối cùng của tàu ngầm là:
$$(-45) + 20 - 35 = [(-45) + 20] + (-35) = (-25) + (-35) = -60\text{ m}.$$

Vậy tàu ngầm ở độ cao $-60\text{ m}$ (tức là ở độ sâu $60\text{ m}$ dưới mực nước biển).
</details>

### Bài 10. Tài khoản thấu chi ngân hàng
Bạn Minh có $120$ nghìn đồng trong tài khoản ngân hàng liên kết ví điện tử. Do cần thanh toán tiền sách giáo khoa, Minh đã thực hiện giao dịch $190$ nghìn đồng nhờ dịch vụ chi tiêu thấu chi (cho phép số dư tài khoản âm). Hỏi số dư hiển thị trên tài khoản ngân hàng của Minh sau giao dịch là bao nhiêu?

<details>
<summary><strong>Xem lời giải chi tiết Bài 10</strong></summary>

Số dư tài khoản của Minh sau giao dịch là:
$$120 - 190 = 120 + (-190) = -70\text{ (nghìn đồng)}.$$

Vậy tài khoản của Minh hiển thị số dư là $-70$ nghìn đồng (Minh đang nợ ngân hàng $70$ nghìn đồng).
</details>

---

## D. Đề kiểm tra cơ bản 15 phút

### Phần 1. Trắc nghiệm khách quan (4 điểm)

```quiz
type: choice
question: 'Kết quả của phép tính (-18) + (-32) là:'
options:
  - '-14'
  - '14'
  - '-50'
  - '50'
answer: 3
explanation: 'Cộng hai số nguyên âm: (-18) + (-32) = -(18 + 32) = -50.'
```

```quiz
type: choice
question: 'Số đối của kết quả phép tính 6 - 21 là:'
options:
  - '-15'
  - '15'
  - '-27'
  - '27'
answer: 2
explanation: 'Ta có 6 - 21 = -15. Số đối của -15 là 15.'
```

```quiz
type: choice
question: 'Kết quả của phép tính (-15) - (-35) là:'
options:
  - '-50'
  - '50'
  - '-20'
  - '20'
answer: 4
explanation: 'Trừ số âm thành cộng số dương: (-15) - (-35) = (-15) + 35 = 35 - 15 = 20.'
```

```quiz
type: choice
question: 'Tìm x biết x + 12 = 5. Giá trị của x là:'
options:
  - '7'
  - '-7'
  - '17'
  - '-17'
answer: 2
explanation: 'x = 5 - 12 = 5 + (-12) = -7.'
```

---

### Phần 2. Tự luận (6 điểm)

#### Câu 1 (1.5 điểm)
Thực hiện phép tính:  
a) $(-42) + (-58)$;  
b) $64 + (-80)$;  
c) $15 - (-25).$

#### Câu 2 (1.5 điểm)
Tính một cách hợp lý:  
a) $(-35) + 72 + (-65)$;  
b) $158 + (-47) + (-58) + 47.$

#### Câu 3 (1.5 điểm)
Tìm số nguyên $x$, biết:  
a) $x - 14 = -30$;  
b) $25 - x = 38.$

#### Câu 4 (1.5 điểm)
Tại đỉnh núi tuyết, nhiệt độ đo được lúc trưa là $3^\circ\text{C}$. Đến tối, nhiệt độ hạ xuống thêm $8^\circ\text{C}$. Hỏi nhiệt độ buổi tối là bao nhiêu độ C?

---

### Đáp án và Barem điểm chi tiết

<details>
<summary><strong>Xem đáp án tự luận và thang điểm chi tiết</strong></summary>

- **Câu 1 (1.5 điểm):**
  - a) $(-42) + (-58) = -(42 + 58) = -100.$ *(0.5 điểm)*
  - b) $64 + (-80) = -(80 - 64) = -16.$ *(0.5 điểm)*
  - c) $15 - (-25) = 15 + 25 = 40.$ *(0.5 điểm)*

- **Câu 2 (1.5 điểm):**
  - a) Nhóm hai số âm: $[(-35) + (-65)] + 72 = (-100) + 72 = -28.$ *(0.75 điểm)*
  - b) Ghép cặp thích hợp: $[158 + (-58)] + [(-47) + 47] = 100 + 0 = 100.$ *(0.75 điểm)*

- **Câu 3 (1.5 điểm):**
  - a) $x = -30 + 14 = -16.$ *(0.75 điểm)*
  - b) $x = 25 - 38 = 25 + (-38) = -13.$ *(0.75 điểm)*

- **Câu 4 (1.5 điểm):**
  - Phép tính nhiệt độ buổi tối: $3 - 8 = 3 + (-8) = -5^\circ\text{C}.$ *(1.0 điểm)*
  - Kết luận: Nhiệt độ buổi tối là $-5^\circ\text{C}.$ *(0.5 điểm)*
</details>

---

## E. Bài tập nâng cao và phát triển tư duy

### Bài nâng cao 1. Tính giá trị biểu thức quy luật chu kỳ 4
Tính giá trị của biểu thức:

$$A = 1 - 2 - 3 - 4 + 5 - 6 - 7 - 8 + 9 - 10 - 11 - 12 + \dots + 197 - 198 - 199 - 200.$$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 1</strong></summary>

**Phân tích & Lời giải:**  
Biểu thức $A$ có $200$ số hạng từ $1$ đến $200$.  
Ta nhóm cứ $4$ số hạng liên tiếp thành một nhóm:
$$A = (1 - 2 - 3 - 4) + (5 - 6 - 7 - 8) + (9 - 10 - 11 - 12) + \dots + (197 - 198 - 199 - 200).$$

Tính giá trị của từng nhóm:
- Nhóm 1: $1 - 2 - 3 - 4 = -8.$
- Nhóm 2: $5 - 6 - 7 - 8 = -16.$
- Nhóm 3: $9 - 10 - 11 - 12 = -24.$
- Nhóm cuối (nhóm thứ $50$): $197 - 198 - 199 - 200 = -400.$

Tổng số nhóm là: $200 : 4 = 50$ nhóm.  
Mỗi nhóm có giá trị lần lượt là: $-8; -16; -24; \dots; -400.$  
Đặt dấu trừ và thừa số chung $-8$ ra ngoài:
$$A = -(8 + 16 + 24 + \dots + 400) = -8 \cdot (1 + 2 + 3 + \dots + 50).$$

Áp dụng công thức tính tổng dãy số cách đều:
$$1 + 2 + 3 + \dots + 50 = \frac{(1 + 50) \cdot 50}{2} = 51 \cdot 25 = 1275.$$

Vậy:
$$A = -8 \cdot 1275 = -10200.$$
</details>

---

### Bài nâng cao 2. Nhóm 4 số hạng hằng số
Tính giá trị của biểu thức:

$$B = 1 + 2 - 3 - 4 + 5 + 6 - 7 - 8 + 9 + 10 - 11 - 12 + \dots + 197 + 198 - 199 - 200.$$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 2</strong></summary>

**Lời giải:**  
Dãy có $200$ số hạng, chia thành $200 : 4 = 50$ nhóm, mỗi nhóm gồm $4$ số hạng liên tiếp:
$$B = (1 + 2 - 3 - 4) + (5 + 6 - 7 - 8) + \dots + (197 + 198 - 199 - 200).$$

Xét giá trị của mỗi nhóm:
$$(4k + 1) + (4k + 2) - (4k + 3) - (4k + 4) = (8k + 3) - (8k + 7) = -4.$$

Như vậy, **mỗi nhóm đều có giá trị bằng $-4$**.  
Có tất cả $50$ nhóm như vậy, do đó:
$$B = (-4) \cdot 50 = -200.$$
</details>

---

### Bài nâng cao 3. Tổng dãy số đan dấu chẵn / lẻ số hạng
Cho dãy số viết theo quy luật: $S = 1 - 2 + 3 - 4 + 5 - 6 + 7 - 8 + \dots$
a) Tính tổng $100$ số hạng đầu của dãy.  
b) Tính tổng $47$ số hạng đầu của dãy.

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 3</strong></summary>

**Lời giải:**
a) Tổng của $100$ số hạng đầu:
$$S_{100} = 1 - 2 + 3 - 4 + \dots + 99 - 100.$$
Nhóm $2$ số hạng liên tiếp thành một cặp:
$$S_{100} = (1 - 2) + (3 - 4) + \dots + (99 - 100).$$
Mỗi cặp có giá trị: $1 - 2 = -1$.  
Có $100 : 2 = 50$ cặp, do đó:
$$S_{100} = (-1) \cdot 50 = -50.$$

b) Tổng của $47$ số hạng đầu:
$$S_{47} = 1 - 2 + 3 - 4 + \dots + 45 - 46 + 47.$$
Vì $47$ là số lẻ, ta nhóm $46$ số hạng đầu thành $23$ cặp, để lại số hạng thứ $47$:
$$S_{47} = [(1 - 2) + (3 - 4) + \dots + (45 - 46)] + 47 = [(-1) \cdot 23] + 47 = -23 + 47 = 24.$$
</details>

---

### Bài nâng cao 4. Hệ phương trình tổng vòng quanh
Tìm ba số nguyên $x, y, z$ thỏa mãn đồng thời ba hệ thức sau:

$$x + y = 8; \quad y + z = 19; \quad z + x = -21.$$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 4</strong></summary>

**Lời giải:**  
Cộng vế với vế của cả ba đẳng thức:
$$(x + y) + (y + z) + (z + x) = 8 + 19 + (-21) \implies 2(x + y + z) = 6 \implies x + y + z = 3.$$

Từ đó, ta tìm từng số bằng cách lấy tổng ba số trừ đi tổng hai số:
- Tìm $z$:
  $$z = (x + y + z) - (x + y) = 3 - 8 = -5.$$
- Tìm $x$:
  $$x = (x + y + z) - (y + z) = 3 - 19 = -16.$$
- Tìm $y$:
  $$y = (x + y + z) - (z + x) = 3 - (-21) = 3 + 21 = 24.$$

**Thử lại:**  
- $x + y = -16 + 24 = 8$ (đúng).
- $y + z = 24 + (-5) = 19$ (đúng).
- $z + x = -5 + (-16) = -21$ (đúng).

**Kết luận:** $x = -16;\; y = 24;\; z = -5.$
</details>

---

### Bài nâng cao 5. Bất biến tính chẵn lẻ khi thay đổi dấu
Cho biểu thức ban đầu gồm $16$ số lẻ liên tiếp:

$$T = 1 + 3 + 5 + 7 + \dots + 29 + 31.$$

Bạn Nam thay đổi một số dấu cộng "$+$" trước các số hạng thành dấu trừ "$-$". Hỏi giá trị của biểu thức mới:  
a) Có thể bằng $44$ được không?  
b) Có thể bằng $-45$ được không? Vì sao?

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 5</strong></summary>

**Phân tích tính bất biến (Parity Invariance):**  
1. Tính tổng ban đầu $T$:  
   Dãy $1, 3, 5, \dots, 31$ có: $\frac{31 - 1}{2} + 1 = 16$ số hạng.  
   $$T = \frac{(1 + 31) \cdot 16}{2} = 32 \cdot 8 = 256\text{ (là một số chẵn)}.$$

2. Khi ta thay đổi dấu trước một số hạng $k$ bất kỳ từ $+k$ thành $-k$:  
   Hiệu số giữa biểu thức cũ và biểu thức mới là:
   $$k - (-k) = 2k\text{ (luôn là một số chẵn)}.$$
   Điều này có nghĩa là mỗi lần đổi một dấu cộng thành dấu trừ, giá trị của tổng chỉ **giảm đi một lượng chẵn $2k$**.  
   Do đó, tính chẵn/lẻ của biểu thức **không bao giờ thay đổi (bất biến)**: Biểu thức mới luôn luôn là một **số chẵn**!

**Trả lời:**  
- **a) Giá trị bằng $44$:** Vì $44$ là một số chẵn, nên giá trị này **hoàn toàn có thể đạt được**.  
  *(Chẳng hạn: chỉ cần chọn các số hạng sao cho tổng các số mang dấu trừ bằng $\frac{256 - 44}{2} = 106$, ví dụ mang dấu trừ trước $31 + 29 + 27 + 19 = 106$).*
- **b) Giá trị bằng $-45$:** Vì $-45$ là một **số lẻ**, trong khi biểu thức mới luôn luôn có kết quả là một số chẵn, nên giá trị của biểu thức **không bao giờ có thể bằng $-45$**.
</details>

---

## 4. Bảng tổng kết ghi nhớ bài học

<div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
  <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 12px; color: #0f172a;">BÍ KÍP VÀNG: PHÉP CỘNG VÀ PHÉP TRỪ SỐ NGUYÊN</div>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #334155;">
    <li><strong>Cộng cùng âm:</strong> Cộng phần tự nhiên, giữ dấu trừ: $(-a) + (-b) = -(a + b).$</li>
    <li><strong>Cộng khác dấu:</strong> Lấy số lớn trừ số bé, lấy dấu của số có phần tự nhiên lớn hơn.</li>
    <li><strong>Hai số đối:</strong> $a + (-a) = 0.$</li>
    <li><strong>Quy tắc trừ:</strong> Chuyển về cộng số đối: $a - b = a + (-b).$</li>
    <li><strong>Trừ số âm:</strong> Đổi thành cộng số dương: $a - (-b) = a + b.$</li>
    <li><strong>Đổi chỗ trong tổng:</strong> Luôn mang theo dấu đứng trước số hạng!</li>
  </ul>
</div>
