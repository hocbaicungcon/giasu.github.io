---
title: 'Toán 6 Bài 16: Phép nhân số nguyên - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 16 Phép nhân số nguyên: nhân hai số nguyên khác dấu, cùng dấu, quy tắc dấu, tính chất phép nhân, lũy thừa số nguyên âm, bài toán tìm x và nâng cao độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số nguyên
  - Phép nhân số nguyên
  - Quy tắc dấu
  - Tính chất phép nhân
  - Kết nối tri thức
grade: 6
---

# Bài 16. Phép nhân số nguyên

Ở Bài 14 và Bài 15, các em đã thành thạo các phép cộng, phép trừ số nguyên và kỹ năng bỏ dấu ngoặc linh hoạt. Hôm nay, chúng ta sẽ bước sang một phép toán quen thuộc nhưng đầy bất ngờ trong tập hợp $\mathbb{Z}$: **Phép nhân số nguyên**.

Chắc hẳn nhiều em từng nghe câu khẩu quyết nổi tiếng: *"Âm nhân âm ra dương!"* Nhưng tại sao hai số âm nhân với nhau lại ra kết quả dương? Làm thế nào để nhân nhiều số nguyên cùng lúc mà không bị nhầm lẫn dấu? Khi nào thì một tích bằng $0$? Bài học này sẽ giải đáp cặn kẽ mọi thắc mắc đó kèm theo hệ thống bài tập thực tế và nâng cao vô cùng hấp dẫn!

---

## 0. Khởi động — Thử tài phản xạ dấu phép nhân (5–7 phút)

Hãy kiểm tra trực giác và kiến thức của các em qua 3 câu hỏi trắc nghiệm tương tác sau:

```quiz
type: choice
question: 'Kết quả của phép nhân hai số nguyên khác dấu (-8) · 9 là:'
options:
  - '-72'
  - '72'
  - '-17'
  - '1'
answer: 1
explanation: 'Nhân hai số nguyên khác dấu, ta nhân hai phần số tự nhiên rồi đặt dấu trừ trước kết quả: -(8 · 9) = -72.'
```

```quiz
type: choice
question: 'Tích của hai số nguyên âm (-14) · (-5) bằng:'
options:
  - '-70'
  - '70'
  - '-19'
  - '9'
answer: 2
explanation: 'Tích của hai số nguyên âm là một số nguyên dương: (-14) · (-5) = 14 · 5 = 70.'
```

```quiz
type: choice
question: 'Tìm số nguyên x biết (-25) · (x - 7) = 0. Giá trị của x là:'
options:
  - '0'
  - '-7'
  - '7'
  - '25'
answer: 3
explanation: 'Một tích bằng 0 khi có ít nhất một thừa số bằng 0. Vì -25 ≠ 0 nên x - 7 = 0, suy ra x = 7.'
```

---

## A. Tóm tắt lý thuyết trọng tâm

### 1. Nhân hai số nguyên khác dấu

#### a) Bản chất phép nhân
Ta biết phép nhân các số tự nhiên chính là phép cộng của nhiều số hạng bằng nhau. Với số nguyên âm cũng hoàn toàn tương tự:

$$(-4) \cdot 3 = (-4) + (-4) + (-4) = -12.$$

#### b) Quy tắc tổng quát
> Muốn nhân hai số nguyên khác dấu, ta **nhân phần số tự nhiên** của chúng lại với nhau rồi **đặt dấu trừ "$-$" đằng trước** kết quả:
> $$(-m) \cdot n = -(m \cdot n) \quad \text{và} \quad m \cdot (-n) = -(m \cdot n) \quad (m, n \in \mathbb{N}^*).$$

**Quy tắc vàng:** Tích của hai số nguyên khác dấu luôn luôn là một **số nguyên âm** ($< 0$).

#### Ví dụ mẫu 1
Tính:  
a) $(-7) \cdot 8$;  
b) $16 \cdot (-5).$

**Lời giải:**  
a) $(-7) \cdot 8 = -(7 \cdot 8) = -56.$  
b) $16 \cdot (-5) = -(16 \cdot 5) = -80.$

---

### 2. Nhân hai số nguyên cùng dấu

#### a) Hai số nguyên dương
Nhân hai số nguyên dương chính là phép nhân hai số tự nhiên đã học ở tiểu học: $a \cdot b > 0.$

#### b) Hai số nguyên âm
Để hiểu tại sao *"âm nhân âm lại ra dương"*, hãy cùng quan sát quy luật của dãy tích sau khi thừa số thứ hai giảm dần từng đơn vị:
- $(-4) \cdot 2 = -8$
- $(-4) \cdot 1 = -4$ *(tăng thêm 4 đơn vị)*
- $(-4) \cdot 0 = 0$ *(tăng thêm 4 đơn vị)*
- $(-4) \cdot (-1) = 4$ *(tiếp tục tăng thêm 4 đơn vị)*
- $(-4) \cdot (-2) = 8$ *(tiếp tục tăng thêm 4 đơn vị)*

> Muốn nhân hai số nguyên âm, ta **nhân hai phần số tự nhiên** của chúng lại với nhau:
> $$(-m) \cdot (-n) = m \cdot n \quad (m, n \in \mathbb{N}^*).$$

**Quy tắc vàng:** Tích của hai số nguyên cùng dấu (cùng âm hoặc cùng dương) luôn luôn là một **số nguyên dương** ($> 0$).

#### Ví dụ mẫu 2
Tính:  
a) $(-9) \cdot (-6)$;  
b) $(-15) \cdot (-4).$

**Lời giải:**  
a) $(-9) \cdot (-6) = 9 \cdot 6 = 54.$  
b) $(-15) \cdot (-4) = 15 \cdot 4 = 60.$

---

### 3. Các trường hợp đặc biệt và Bảng quy tắc dấu

Với mọi số nguyên $a$:
- **Nhân với $0$:** $a \cdot 0 = 0 \cdot a = 0.$
- **Nhân với $1$:** $a \cdot 1 = 1 \cdot a = a.$
- **Nhân với $-1$:** $a \cdot (-1) = (-1) \cdot a = -a$ *(kết quả chính là số đối của $a$)*.

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin: 20px 0;">
  <div style="font-weight: 600; text-align: center; margin-bottom: 12px; color: #0f172a;">BẢNG QUY TẮC DẤU PHÉP NHÂN</div>
  <table style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
      <tr style="background: #e2e8f0;">
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Dấu thừa số thứ nhất</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Dấu thừa số thứ hai</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Dấu của tích</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Ghi nhớ nhanh</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #16a34a;">$(+)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #16a34a;">$(+)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #16a34a;">$(+)$ Dương</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1;" rowspan="2"><strong>CÙNG DẤU</strong><br>&rarr; Ra số <strong>DƯƠNG</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$(-)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$(-)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #16a34a;">$(+)$ Dương</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #16a34a;">$(+)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$(-)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$(-)$ Âm</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1;" rowspan="2"><strong>KHÁC DẤU</strong><br>&rarr; Ra số <strong>ÂM</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$(-)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #16a34a;">$(+)$</td>
        <td style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$(-)$ Âm</td>
      </tr>
    </tbody>
  </table>
</div>

#### Ví dụ mẫu 3
Tính:  
a) $(-12) \cdot 0$;  
b) $(-18) \cdot 1$;  
c) $8 \cdot (-1)$;  
d) $(-1) \cdot (-24).$

**Lời giải:**  
a) $(-12) \cdot 0 = 0.$  
b) $(-18) \cdot 1 = -18.$  
c) $8 \cdot (-1) = -8.$  
d) $(-1) \cdot (-24) = 24.$

---

### 4. Tính chất của phép nhân số nguyên

Phép nhân trong $\mathbb{Z}$ có đầy đủ các tính chất đại số quan trọng:
1. **Giao hoán:** $a \cdot b = b \cdot a.$
2. **Kết hợp:** $(a \cdot b) \cdot c = a \cdot (b \cdot c).$
3. **Nhân với số 1:** $a \cdot 1 = 1 \cdot a = a.$
4. **Phân phối đối với phép cộng và phép trừ:**
   $$a \cdot (b + c) = a \cdot b + a \cdot c; \quad a \cdot (b - c) = a \cdot b - a \cdot c.$$

#### Dấu của tích nhiều thừa số khác 0:
> Khi nhân một dãy nhiều thừa số khác $0$:
> - Nếu **số lượng thừa số âm là số CHẴN** ($0, 2, 4, 6\dots$) $\implies$ Tích mang dấu **DƯƠNG** ($+$).
> - Nếu **số lượng thừa số âm là số LẺ** ($1, 3, 5, 7\dots$) $\implies$ Tích mang dấu **ÂM** ($-$).

#### Lũy thừa của số nguyên âm:
$$(-a)^n = \begin{cases} a^n & \text{nếu } n \text{ là số chẵn} \\ -a^n & \text{nếu } n \text{ là số lẻ} \end{cases}$$
*Ví dụ:* $(-3)^2 = 9 > 0$ nhưng $(-3)^3 = -27 < 0.$

#### Ví dụ mẫu 4
Tính một cách hợp lý:  
a) $(-125) \cdot 7 \cdot (-8)$;  
b) $(-17) \cdot 24 + (-17) \cdot 76.$

**Lời giải:**  
a) Nhóm hai thừa số có tích tròn nghìn (có $2$ thừa số âm nên tích dương):
$$(-125) \cdot 7 \cdot (-8) = [(-125) \cdot (-8)] \cdot 7 = 1000 \cdot 7 = 7000.$$

b) Áp dụng tính chất phân phối, đặt thừa số chung $(-17)$:
$$(-17) \cdot 24 + (-17) \cdot 76 = (-17) \cdot (24 + 76) = (-17) \cdot 100 = -1700.$$

---

### 5. Những sai lầm kinh điển cần tránh

> [!WARNING]
> **Sai lầm 1: Nhầm phép nhân hai số âm ra số âm**
> - *Sai lầm:* $(-3) \cdot (-5) = -15.$
> - *Đúng:* Cùng âm thì tích là số dương: $(-3) \cdot (-5) = 15.$
>
> **Sai lầm 2: Nhầm lẫn giữa $(-a)^2$ và $-a^2$**
> - $(-3)^2 = (-3) \cdot (-3) = 9.$
> - Trong khi $-3^2 = -(3^2) = -9.$ *(Dấu trừ nằm ngoài lũy thừa)*.
>
> **Sai lầm 3: Quên điều kiện một tích bằng 0**
> - Nếu $A \cdot B = 0$ thì $A = 0$ hoặc $B = 0$. Học sinh hay quên xét trường hợp thứ hai khi giải bài toán tìm $x$.

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1. Thực hiện phép tính nhân

**Phương pháp giải:**
1. Đếm số thừa số âm để xác định trước dấu của kết quả.
2. Áp dụng tính chất giao hoán, kết hợp để ghép các cặp số tạo thành số tròn chục, tròn trăm ($2 \cdot 5 = 10;\; 4 \cdot 25 = 100;\; 8 \cdot 125 = 1000$).
3. Dùng tính chất phân phối để đặt thừa số chung ra ngoài.

#### Luyện tập 1.1
Thực hiện phép tính:  
a) $(-18) \cdot 5$;  
b) $6 \cdot (-25)$;  
c) $(-9) \cdot 14$;  
d) $24 \cdot (-5).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.1</strong></summary>

- a) $(-18) \cdot 5 = -(18 \cdot 5) = -90.$
- b) $6 \cdot (-25) = -(6 \cdot 25) = -150.$
- c) $(-9) \cdot 14 = -(9 \cdot 14) = -126.$
- d) $24 \cdot (-5) = -(24 \cdot 5) = -120.$
</details>

#### Luyện tập 1.2
Thực hiện phép tính:  
a) $(-25) \cdot 8$;  
b) $16 \cdot (-6)$;  
c) $(-13) \cdot (-8)$;  
d) $(-102) \cdot (-7).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.2</strong></summary>

- a) $(-25) \cdot 8 = -200.$
- b) $16 \cdot (-6) = -96.$
- c) $(-13) \cdot (-8) = 13 \cdot 8 = 104.$
- d) $(-102) \cdot (-7) = 102 \cdot 7 = 714.$
</details>

#### Luyện tập 1.3
Tính một cách hợp lý:  
a) $6 \cdot (-145) + 6 \cdot (-55)$;  
b) $3 \cdot (2025 + 135) + (-2025) \cdot 3$;  
c) $-4 \cdot (25 + 17) - 4 \cdot (-7).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.3</strong></summary>

- a) Đặt thừa số chung $6$:
  $$6 \cdot [(-145) + (-55)] = 6 \cdot (-200) = -1200.$$
- b) Đặt thừa số chung $3$:
  $$3 \cdot [(2025 + 135) + (-2025)] = 3 \cdot [2025 - 2025 + 135] = 3 \cdot 135 = 405.$$
- c) Đặt thừa số chung $-4$:
  $$-4 \cdot (25 + 17) + (-4) \cdot (-7) = -4 \cdot (25 + 17 - 7) = -4 \cdot 35 = -140.$$
</details>

---

### Dạng 2. So sánh hai biểu thức

**Phương pháp giải:**
- **So sánh gián tiếp qua số 0:** Đếm số thừa số âm:
  - Nếu biểu thức mang dấu âm $\implies < 0.$
  - Nếu biểu thức mang dấu dương $\implies > 0.$
  - Mọi số âm luôn nhỏ hơn mọi số dương.
- **So sánh trực tiếp:** Tính giá trị hoặc áp dụng tính chất đại số để so sánh phần số tự nhiên.

#### Luyện tập 2.1
So sánh:  
a) $(-19) \cdot 3$ với $-50$;  
b) $25 \cdot (-4)$ với $-95$;  
c) $(-24) \cdot 5$ với $40 \cdot (-3)$;  
d) $35 \cdot (-10)$ với $12 \cdot 10.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.1</strong></summary>

- a) $(-19) \cdot 3 = -57.$ Vì $-57 < -50$ nên $(-19) \cdot 3 < -50.$
- b) $25 \cdot (-4) = -100.$ Vì $-100 < -95$ nên $25 \cdot (-4) < -95.$
- c) $(-24) \cdot 5 = -120$ và $40 \cdot (-3) = -120.$ Vậy $(-24) \cdot 5 = 40 \cdot (-3).$
- d) $35 \cdot (-10) = -350 < 0$, còn $12 \cdot 10 = 120 > 0.$ Vậy $35 \cdot (-10) < 12 \cdot 10.$
</details>

#### Luyện tập 2.2
So sánh:  
a) $42 \cdot (-3)$ với $(-40) \cdot (-3)$;  
b) $120 \cdot (-2)$ với $120 \cdot (-4)$;  
c) $(-8) \cdot 15$ với $0$;  
d) $85 \cdot (-2)$ với $(-3) \cdot (-6).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.2</strong></summary>

- a) $42 \cdot (-3) = -126 < 0$, còn $(-40) \cdot (-3) = 120 > 0.$ Do đó $42 \cdot (-3) < (-40) \cdot (-3).$
- b) $120 \cdot (-2) = -240$, còn $120 \cdot (-4) = -480.$ Vì $-240 > -480$ nên $120 \cdot (-2) > 120 \cdot (-4).$
- c) Tích có $1$ thừa số âm nên là số âm: $(-8) \cdot 15 < 0.$
- d) $85 \cdot (-2) = -170 < 0$, còn $(-3) \cdot (-6) = 18 > 0.$ Do đó $85 \cdot (-2) < (-3) \cdot (-6).$
</details>

#### Luyện tập 2.3
Không tính kết quả, hãy điền dấu thích hợp ($<, >, =$) vào ô trống:  
a) $234 \cdot (-5) \dots 15$;  
b) $(-24) \cdot (-3) \dots 189 \cdot (-2)$;  
c) $30 \cdot (-7) \dots 35 \cdot 6$;  
d) $340 \cdot (-105) \dots (-340) \cdot (-110).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.3</strong></summary>

- a) $234 \cdot (-5)$ mang dấu âm, còn $15$ là số dương $\implies 234 \cdot (-5) < 15.$
- b) $(-24) \cdot (-3)$ mang dấu dương, còn $189 \cdot (-2)$ mang dấu âm $\implies (-24) \cdot (-3) > 189 \cdot (-2).$
- c) $30 \cdot (-7) < 0$ và $35 \cdot 6 > 0 \implies 30 \cdot (-7) < 35 \cdot 6.$
- d) $340 \cdot (-105)$ mang dấu âm, còn $(-340) \cdot (-110)$ mang dấu dương $\implies 340 \cdot (-105) < (-340) \cdot (-110).$
</details>

---

### Dạng 3. Tìm số nguyên $x$ trong biểu thức tích

**Phương pháp giải:**
1. Dạng $k \cdot x = 0$ (với $k \ne 0$) $\implies x = 0.$
2. Dạng $A(x) \cdot B(x) = 0 \iff A(x) = 0$ hoặc $B(x) = 0.$ Giải từng trường hợp và kết luận tập nghiệm.

#### Luyện tập 3.1
Tìm số nguyên $x$, biết:  
a) $3 \cdot x = 0$;  
b) $15 \cdot (x + 4) = 0$;  
c) $x \cdot (-2025) = 0.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.1</strong></summary>

- a) Vì $3 \ne 0$ nên $x = 0.$
- b) Vì $15 \ne 0$ nên $x + 4 = 0 \implies x = -4.$
- c) Vì $-2025 \ne 0$ nên $x = 0.$
</details>

#### Luyện tập 3.2
Tìm số nguyên $x$, biết:  
a) $-7 \cdot x = 0$;  
b) $150 \cdot (x - 18) = 0$;  
c) $x \cdot (-19) = 0.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.2</strong></summary>

- a) $x = 0.$
- b) $x - 18 = 0 \implies x = 18.$
- c) $x = 0.$
</details>

#### Luyện tập 3.3
Tìm số nguyên $x$, biết:  
a) $(-45) \cdot (x + 12) = 0$;  
b) $(x - 18)(x + 23) = 0$;  
c) $x(x + 25) = 0$;  
d) $(x - 34)(x - 120) = 0.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.3</strong></summary>

- a) $x + 12 = 0 \implies x = -12.$
- b) $x - 18 = 0$ hoặc $x + 23 = 0 \implies x = 18$ hoặc $x = -23.$
- c) $x = 0$ hoặc $x + 25 = 0 \implies x = 0$ hoặc $x = -25.$
- d) $x - 34 = 0$ hoặc $x - 120 = 0 \implies x = 34$ hoặc $x = 120.$
</details>

---

### Dạng 4. Bài toán thực tế ứng dụng phép nhân số nguyên

**Phương pháp giải:**
1. Biểu thị đại lượng giảm hoặc tiêu hao bằng số nguyên âm: giảm $k$ đơn vị là $-k$.
2. Tổng lượng biến thiên bằng: $(\text{Đại lượng mỗi lần}) \times (\text{Số lần})$.

#### Luyện tập 4.1
Một kho bảo quản đông lạnh hải sản được bật hệ thống hạ nhiệt, trung bình mỗi giờ nhiệt độ trong kho giảm $4^\circ\text{C}$.  
a) Sau $6$ giờ liên tục, nhiệt độ trong kho thay đổi bao nhiêu độ C (ghi bằng số nguyên)?  
b) Biết nhiệt độ ban đầu trước khi bật máy là $15^\circ\text{C}$, hỏi sau $6$ giờ nhiệt độ trong kho là bao nhiêu?

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.1</strong></summary>

- a) Nhiệt độ giảm $4^\circ\text{C}$ mỗi giờ tương ứng với $-4^\circ\text{C}$.  
  Sau $6$ giờ, nhiệt độ thay đổi là:
  $$6 \cdot (-4) = -24^\circ\text{C}.$$
  Vậy nhiệt độ giảm $24^\circ\text{C}$.

- b) Nhiệt độ trong kho sau $6$ giờ là:
  $$15 + (-24) = -(24 - 15) = -9^\circ\text{C}.$$
</details>

#### Luyện tập 4.2
Một hồ thủy lợi đang mở van xả nước, trung bình mỗi phút mực nước hồ hạ xuống $8\text{ cm}$. Hỏi sau $15$ phút, mực nước hồ thay đổi bao nhiêu xăng-ti-mét?

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.2</strong></summary>

Mỗi phút hạ $8\text{ cm}$ ghi là $-8\text{ cm}$.  
Sau $15$ phút, mực nước hồ thay đổi:
$$15 \cdot (-8) = -120\text{ cm}.$$

Vậy mực nước hồ hạ xuống $120\text{ cm}$ (hay $1,2\text{ m}$).
</details>

#### Luyện tập 4.3
Tìm số nguyên $x$ thỏa mãn đẳng thức: $4x - 7 = -11 + 2x.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.3</strong></summary>

Chuyển các số hạng chứa $x$ sang vế trái, các số tự do sang vế phải:
$$4x - 2x = -11 + 7$$
$$2x = -4 \implies x = -4 : 2 = -2.$$

**Thử lại:**  
- Vế trái: $4 \cdot (-2) - 7 = -8 - 7 = -15.$
- Vế phải: $-11 + 2 \cdot (-2) = -11 - 4 = -15.$  
Hai vế bằng nhau, vậy $x = -2.$
</details>

---

### Dạng 5. Tìm cặp số nguyên $(x, y)$ biết tích

**Phương pháp giải:**
1. Phân tích tích $k$ thành tích của hai số nguyên (kể cả số âm): $k = a \cdot b.$
2. Lập bảng liệt kê các trường hợp và tìm $(x; y).$

#### Luyện tập 5.1
Tìm các cặp số nguyên $(x; y)$ thỏa mãn:  
a) $x \cdot y = -3$;  
b) $x \cdot y = -5$ và $x < y$;  
c) $(x + 2)(y - 4) = -7.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.1</strong></summary>

- a) Vì $-3 = 1 \cdot (-3) = (-1) \cdot 3 = 3 \cdot (-1) = (-3) \cdot 1$, nên các cặp $(x; y)$ là:
  $$(1; -3), (-3; 1), (-1; 3), (3; -1).$$

- b) Vì $x < y$ nên trong các cách phân tích số $-5$, ta chỉ lấy:
  $$(-5; 1) \quad \text{và} \quad (-1; 5).$$

- c) Phân tích $-7$: Các cặp $(x + 2;\; y - 4)$ gồm $(1; -7), (-1; 7), (7; -1), (-7; 1).$
  - TH1: $x + 2 = 1 \implies x = -1$; $y - 4 = -7 \implies y = -3 \implies (-1; -3).$
  - TH2: $x + 2 = -1 \implies x = -3$; $y - 4 = 7 \implies y = 11 \implies (-3; 11).$
  - TH3: $x + 2 = 7 \implies x = 5$; $y - 4 = -1 \implies y = 3 \implies (5; 3).$
  - TH4: $x + 2 = -7 \implies x = -9$; $y - 4 = 1 \implies y = 5 \implies (-9; 5).$
  Vậy các cặp $(x; y)$ là: $(-1; -3), (-3; 11), (5; 3), (-9; 5).$
</details>

---

## C. Phiếu bài tập tự luyện (Độc bản 100%)

### Bài 1. Tính toán cơ bản
Tính:  
a) $(-24) \cdot 5$;  
b) $15 \cdot (-8)$;  
c) $25 \cdot (-4) \cdot 18$;  
d) $8 \cdot (-125) \cdot 14.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 1</strong></summary>

- a) $(-24) \cdot 5 = -120.$
- b) $15 \cdot (-8) = -120.$
- c) $[25 \cdot (-4)] \cdot 18 = (-100) \cdot 18 = -1800.$
- d) $[8 \cdot (-125)] \cdot 14 = (-1000) \cdot 14 = -14000.$
</details>

### Bài 2. Điền bảng tích hai số nguyên
Điền số nguyên thích hợp vào các ô trống trong bảng sau:

| $x$ | $-18$ | $8$ | $?$ | $-25$ |
| :---: | :---: | :---: | :---: | :---: |
| $y$ | $5$ | $-15$ | $16$ | $?$ |
| $x \cdot y$ | $?$ | $?$ | $-64$ | $100$ |

<details>
<summary><strong>Xem lời giải chi tiết Bài 2</strong></summary>

- Cột 1: $x \cdot y = (-18) \cdot 5 = -90.$
- Cột 2: $x \cdot y = 8 \cdot (-15) = -120.$
- Cột 3: $x = -64 : 16 = -4.$
- Cột 4: $y = 100 : (-25) = -4.$

Bảng kết quả hoàn chỉnh:
- Cột 1: $-90$
- Cột 2: $-120$
- Cột 3: $-4$
- Cột 4: $-4$
</details>

### Bài 3. Tính hợp lý
Tính một cách hợp lý:  
a) $45 \cdot 16 - 9 \cdot 5 \cdot 26$;  
b) $25 \cdot (-4) \cdot 17 \cdot (-20)$;  
c) $60 - 6 \cdot (15 + 8)$;  
d) $32 \cdot (18 - 7) - 18 \cdot (32 - 11).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 3</strong></summary>

- a) Vì $9 \cdot 5 = 45$:
  $$45 \cdot 16 - 45 \cdot 26 = 45 \cdot (16 - 26) = 45 \cdot (-10) = -450.$$
- b) Nhóm $[25 \cdot (-4)] = -100$:
  $$(-100) \cdot 17 \cdot (-20) = [(-100) \cdot (-20)] \cdot 17 = 2000 \cdot 17 = 34000.$$
- c) $60 - 6 \cdot 23 = 60 - 138 = -78.$
- d) Khai triển phân phối:
  $$32 \cdot 18 - 32 \cdot 7 - 18 \cdot 32 + 18 \cdot 11 = (32 \cdot 18 - 18 \cdot 32) + 18 \cdot 11 - 32 \cdot 7 = 0 + 198 - 224 = -26.$$
</details>

### Bài 4. So sánh biểu thức
So sánh các biểu thức sau với $0$:  
a) $84 \cdot (-75) \cdot 48$;  
b) $(-15) \cdot 28 \cdot (-95)$;  
c) $17 \cdot (-6)$ với $28 \cdot (-3).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 4</strong></summary>

- a) Tích có $1$ thừa số âm (lẻ) $\implies 84 \cdot (-75) \cdot 48 < 0.$
- b) Tích có $2$ thừa số âm (chẵn) $\implies (-15) \cdot 28 \cdot (-95) > 0.$
- c) $17 \cdot (-6) = -102$ và $28 \cdot (-3) = -84.$ Vì $-102 < -84$ nên $17 \cdot (-6) < 28 \cdot (-3).$
</details>

### Bài 5. Xét tính đúng / sai
Mỗi khẳng định sau đúng hay sai? Sửa lại nếu sai:  
a) Tích của 3 số nguyên âm là một số nguyên dương;  
b) $(-4)^2 = -16$;  
c) $(-3)^3 = -27$;  
d) Tích của 8 số nguyên âm là một số nguyên dương.

<details>
<summary><strong>Xem lời giải chi tiết Bài 5</strong></summary>

- a) **Sai.** 3 là số lẻ nên tích của 3 số nguyên âm là số nguyên âm.
- b) **Sai.** $(-4)^2 = (-4) \cdot (-4) = 16.$
- c) **Đúng.** $(-3)^3 = -27.$
- d) **Đúng.** 8 là số chẵn nên tích của 8 số nguyên âm là số nguyên dương.
</details>

### Bài 6. Tìm số nguyên $x$
Tìm số nguyên $x$, biết:  
a) $x(x + 9) = 0$;  
b) $(x + 15)(x - 4) = 0$;  
c) $x(x + 5)(8 - x) = 0$;  
d) $(x - 2)(3x - 6)(x + 7) = 0.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 6</strong></summary>

- a) $x = 0$ hoặc $x = -9.$
- b) $x = -15$ hoặc $x = 4.$
- c) $x = 0$ hoặc $x = -5$ hoặc $x = 8.$
- d) $x - 2 = 0 \implies x = 2$; $3x - 6 = 0 \implies x = 2$; $x + 7 = 0 \implies x = -7.$  
  Vậy $x = 2$ hoặc $x = -7.$
</details>

### Bài 7. Đánh giá dấu của tích
Không làm phép tính, hãy so sánh:  
a) $1452 \cdot (-389) \cdot (-712) \cdot 0$ với $0$;  
b) $(-12) \cdot (-35) \cdot (-48) \cdot (-92)$ với $(-15) \cdot (-24) \cdot (-30).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 7</strong></summary>

- a) Biểu thức có thừa số $0$ nên tích bằng $0.$
- b) Vế trái có $4$ thừa số âm $\implies > 0.$ Vế phải có $3$ thừa số âm $\implies < 0.$  
  Do đó Vế trái $>$ Vế phải.
</details>

### Bài 8. Bài toán thi đua lớp học
Trong đợt thi đua chào mừng ngày Nhà giáo Việt Nam, mỗi hành động tốt của tổ được cộng $10$ điểm, mỗi lần vi phạm nội quy bị trừ $5$ điểm (ghi là $-5$ điểm).  
Trong tuần, Tổ 1 có $8$ điểm tốt và $3$ lần vi phạm.  
Hỏi điểm tổng kết tuần của Tổ 1 thay đổi bao nhiêu điểm?

<details>
<summary><strong>Xem lời giải chi tiết Bài 8</strong></summary>

Tổng điểm thay đổi của Tổ 1 là:
$$8 \cdot 10 + 3 \cdot (-5) = 80 + (-15) = 65\text{ (điểm)}.$$

Vậy Tổ 1 được cộng $65$ điểm.
</details>

### Bài 9. Tìm cặp số nguyên $(x, y)$ có điều kiện
Tìm các cặp số nguyên $(x; y)$ thỏa mãn:  
a) $x \cdot y = -15$ và $x < y$;  
b) $x \cdot y = 11$ và $x < y$;  
c) $x \cdot y = -14$ và $x > y.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 9</strong></summary>

- a) Các cặp thỏa mãn $x < y$ là: $(-15; 1), (-5; 3), (-3; 5), (-1; 15).$
- b) Các cặp thỏa mãn $x < y$ là: $(-11; -1), (1; 11).$
- c) Các cặp thỏa mãn $x > y$ là: $(1; -14), (2; -7), (7; -2), (14; -1).$
</details>

### Bài 10. Tìm cặp số nguyên dạng tích biểu thức
Tìm các cặp số nguyên $(x; y)$ biết:  
a) $(x + 2)(y - 3) = -5$;  
b) $(x - 4)(y + 2) = 11.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 10</strong></summary>

- a) Phân tích $-5 = 1 \cdot (-5) = (-1) \cdot 5 = 5 \cdot (-1) = (-5) \cdot 1$:  
  Các cặp $(x; y)$ tương ứng là: $(-1; -2), (-3; 8), (3; 2), (-7; 4).$

- b) Phân tích $11 = 1 \cdot 11 = 11 \cdot 1 = (-1) \cdot (-11) = (-11) \cdot (-1)$:  
  - $(x - 4 = 1; y + 2 = 11) \implies (5; 9).$
  - $(x - 4 = 11; y + 2 = 1) \implies (15; -1).$
  - $(x - 4 = -1; y + 2 = -11) \implies (3; -13).$
  - $(x - 4 = -11; y + 2 = -1) \implies (-7; -3).$
</details>

---

## D. Đề kiểm tra cơ bản 15 phút

### Phần 1. Trắc nghiệm khách quan (4 điểm)

```quiz
type: choice
question: 'Kết quả của phép nhân (-7) · (-8) là:'
options:
  - '-56'
  - '56'
  - '-15'
  - '1'
answer: 2
explanation: '(-7) · (-8) = 7 · 8 = 56.'
```

```quiz
type: choice
question: 'Giá trị của lũy thừa (-2)³ là:'
options:
  - '-6'
  - '6'
  - '-8'
  - '8'
answer: 3
explanation: '(-2)³ = (-2) · (-2) · (-2) = 4 · (-2) = -8 (lũy thừa bậc lẻ của số âm là số âm).'
```

```quiz
type: choice
question: 'Tích của 10 số nguyên âm là một số:'
options:
  - 'Nguyên âm'
  - 'Nguyên dương'
  - 'Bằng 0'
  - 'Không xác định được'
answer: 2
explanation: 'Số thừa số âm là 10 (số chẵn) nên tích là số nguyên dương.'
```

```quiz
type: choice
question: 'Tìm x biết (x - 6)(x + 9) = 0. Tập hợp các giá trị của x là:'
options:
  - '{6; 9}'
  - '{-6; -9}'
  - '{6; -9}'
  - '{-6; 9}'
answer: 3
explanation: 'x - 6 = 0 hoặc x + 9 = 0 suy ra x = 6 hoặc x = -9.'
```

---

### Phần 2. Tự luận (6 điểm)

#### Câu 1 (2.0 điểm)
Thực hiện phép tính:  
a) $(-12) \cdot 6$;  
b) $(-15) \cdot (-8)$;  
c) $42 \cdot (-5) + 58 \cdot (-5).$

#### Câu 2 (1.5 điểm)
Tìm số nguyên $x$, biết: $x(x - 12) = 0.$

#### Câu 3 (1.5 điểm)
Tìm tất cả các cặp số nguyên $(x; y)$ thỏa mãn: $x \cdot y = -7.$

#### Câu 4 (1.0 điểm)
Tại một vùng núi cao, nhiệt độ hạ đều đặn $2^\circ\text{C}$ sau mỗi giờ vào ban đêm. Hỏi sau $5$ giờ, nhiệt độ đã thay đổi bao nhiêu độ C?

---

### Đáp án và Barem điểm chi tiết

<details>
<summary><strong>Xem đáp án tự luận và thang điểm chi tiết</strong></summary>

- **Câu 1 (2.0 điểm):**
  - a) $(-12) \cdot 6 = -72.$ *(0.5 điểm)*
  - b) $(-15) \cdot (-8) = 120.$ *(0.5 điểm)*
  - c) $(-5) \cdot (42 + 58) = (-5) \cdot 100 = -500.$ *(1.0 điểm)*

- **Câu 2 (1.5 điểm):**
  - $x = 0$ hoặc $x - 12 = 0 \implies x = 0$ hoặc $x = 12.$ *(1.5 điểm)*

- **Câu 3 (1.5 điểm):**
  - Phân tích $-7$: Các cặp $(x; y)$ là $(1; -7), (-1; 7), (7; -1), (-7; 1).$ *(1.5 điểm)*

- **Câu 4 (1.0 điểm):**
  - Nhiệt độ thay đổi là: $5 \cdot (-2) = -10^\circ\text{C}$ (giảm $10^\circ\text{C}$). *(1.0 điểm)*
</details>

---

## E. Bài tập nâng cao và phát triển tư duy

### Bài nâng cao 1. Đánh giá dấu tích lũy thừa lớn
Cho hai biểu thức:  
$$A = (-5)^{200} \quad \text{và} \quad B = (-5)^{201}.$$
Hãy so sánh $A$ và $B$ với số $0$.

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 1</strong></summary>

**Lời giải:**  
- Xét biểu thức $A = (-5)^{200}$:  
  Số mũ $200$ là một số tự nhiên chẵn.  
  Tích của $200$ thừa số nguyên âm có số lượng thừa số âm là chẵn, do đó $A > 0.$
- Xét biểu thức $B = (-5)^{201}$:  
  Số mũ $201$ là một số tự nhiên lẻ.  
  Tích của $201$ thừa số nguyên âm có số lượng thừa số âm là lẻ, do đó $B < 0.$

**Kết luận:** $A > 0$ và $B < 0.$
</details>

---

### Bài nâng cao 2. Tích của bốn số nguyên liên tiếp
Cho bốn số nguyên liên tiếp $x, x + 1, x + 2, x + 3.$ Đặt tích của chúng là:

$$P = x(x + 1)(x + 2)(x + 3).$$

Chứng minh rằng $P \ge 0$ với mọi số nguyên $x$. Khi nào thì $P = 0$?

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 2</strong></summary>

**Chứng minh:**  
- **Trường hợp 1:** Một trong bốn số bằng $0$ (tức $x \in \{-3; -2; -1; 0\}$). Khi đó tích $P$ có một thừa số bằng $0 \implies P = 0.$
- **Trường hợp 2:** $x \ge 1$. Cả bốn số đều là số nguyên dương $\implies P > 0.$
- **Trường hợp 3:** $x \le -4$. Cả bốn số đều là số nguyên âm.  
  Tích của $4$ số nguyên âm (số chẵn thừa số âm) luôn là một số nguyên dương $\implies P > 0.$

Vậy trong mọi trường hợp, ta luôn có $P \ge 0.$  
Giá trị nhỏ nhất của $P$ bằng $0$, đạt được khi $x \in \{-3; -2; -1; 0\}.$
</details>

---

### Bài nâng cao 3. Tìm cặp số nguyên thỏa mãn $ab = 4(a + b)$
Tìm tất cả các cặp số nguyên $(a; b)$ thỏa mãn phương trình:

$$ab = 4(a + b).$$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 3</strong></summary>

**Lời giải:**  
Chuyển vế:
$$ab - 4a - 4b = 0$$
$$a(b - 4) - 4(b - 4) - 16 = 0$$
$$(a - 4)(b - 4) = 16.$$

Phân tích số $16$ thành tích của hai số nguyên:
$$16 = 1 \cdot 16 = 2 \cdot 8 = 4 \cdot 4 = (-1) \cdot (-16) = (-2) \cdot (-8) = (-4) \cdot (-4)$$
và các cặp hoán vị đối xứng.

Giải từng cặp $(a - 4;\; b - 4)$:
- $(1; 16) \implies a = 5; b = 20.$
- $(16; 1) \implies a = 20; b = 5.$
- $(2; 8) \implies a = 6; b = 12.$
- $(8; 2) \implies a = 12; b = 6.$
- $(4; 4) \implies a = 8; b = 8.$
- $(-1; -16) \implies a = 3; b = -12.$
- $(-16; -1) \implies a = -12; b = 3.$
- $(-2; -8) \implies a = 2; b = -4.$
- $(-8; -2) \implies a = -4; b = 2.$
- $(-4; -4) \implies a = 0; b = 0.$

Vậy có $10$ cặp số nguyên $(a; b)$ thỏa mãn bài toán.
</details>

---

### Bài nâng cao 4. Bất phương trình tích khác dấu
Tìm tất cả các số nguyên $x$ thỏa mãn bất đẳng thức:

$$(x - 3)(x + 4) < 0.$$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 4</strong></summary>

**Lời giải:**  
Tích của hai thừa số nhỏ hơn $0$ khi và chỉ khi hai thừa số đó **khác dấu**.  
Nhận xét rằng: với mọi $x$, ta luôn có $x + 4 > x - 3$ (vì $4 > -3$).  
Do đó, số lớn hơn phải mang dấu dương và số nhỏ hơn phải mang dấu âm:
$$\begin{cases} x + 4 > 0 \\ x - 3 < 0 \end{cases} \iff \begin{cases} x > -4 \\ x < 3 \end{cases} \iff -4 < x < 3.$$

Vì $x \in \mathbb{Z}$ nên:
$$x \in \{-3; -2; -1;\; 0;\; 1;\; 2\}.$$
</details>

---

## 4. Bảng tổng kết ghi nhớ bài học

<div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
  <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 12px; color: #0f172a;">BÍ KÍP VÀNG: PHÉP NHÂN SỐ NGUYÊN</div>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #334155;">
    <li><strong>Cùng dấu ra dương:</strong> $(+) \cdot (+) = (+);\; (-) \cdot (-) = (+).$</li>
    <li><strong>Khác dấu ra âm:</strong> $(+) \cdot (-) = (-);\; (-) \cdot (+) = (-).$</li>
    <li><strong>Nhân với 0:</strong> $a \cdot 0 = 0.$</li>
    <li><strong>Nhân với -1:</strong> $a \cdot (-1) = -a$ (cho số đối).</li>
    <li><strong>Tích nhiều thừa số:</strong> Đếm số thừa số âm (chẵn $\implies +$, lẻ $\implies -$).</li>
    <li><strong>Tích bằng 0:</strong> $A \cdot B = 0 \iff A = 0$ hoặc $B = 0.$</li>
  </ul>
</div>
