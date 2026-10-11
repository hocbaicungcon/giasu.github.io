---
title: 'Toán 6 Bài 19: Hình chữ nhật, Hình thoi, Hình bình hành, Hình thang cân - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 19: đặc điểm cạnh, góc, đường chéo của hình chữ nhật, hình thoi, hình bình hành, hình thang cân; sơ đồ phả hệ tứ giác, phương pháp vẽ hình, bài toán đếm hình và nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học trực quan
  - Hình chữ nhật
  - Hình thoi
  - Hình bình hành
  - Hình thang cân
  - Kết nối tri thức
grade: 6
---

# Bài 19. Hình chữ nhật — Hình thoi — Hình bình hành — Hình thang cân

Ở Bài 18, chúng ta đã tìm hiểu ba hình phẳng vô cùng cân đối là tam giác đều, hình vuông và lục giác đều. Trong cuộc sống hàng ngày, chúng ta còn bắt gặp rất nhiều hình dạng tứ giác khác: cánh cổng sắt xếp, mặt bàn học, khung cửa sổ, những cánh diều chao lượn trên bầu trời, hay những mái nhà hình thang vững chãi.

Tất cả các vật thể đó là hiện thân sinh động của bốn tứ giác quan trọng bậc nhất trong hình học: **Hình chữ nhật, Hình thoi, Hình bình hành và Hình thang cân**. Bài học này sẽ giúp các em hệ thống hóa toàn diện đặc điểm về cạnh, góc, đường chéo của từng hình, làm chủ kỹ năng vẽ hình chuẩn xác, phương pháp đếm hình trong lưới và chinh phục các bài toán nâng cao hấp dẫn!

---

## 0. Khởi động — Nhận diện tứ giác quanh ta (5–7 phút)

Hãy kiểm tra trực giác hình học của các em qua 3 câu hỏi trắc nghiệm tương tác sau:

```quiz
type: choice
question: 'Tứ giác nào sau đây có hai đường chéo VUÔNG GÓC với nhau tại trung điểm của mỗi đường?'
options:
  - 'Hình chữ nhật'
  - 'Hình thoi'
  - 'Hình bình hành'
  - 'Hình thang cân'
answer: 2
explanation: 'Hình thoi có hai đường chéo vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường.'
```

```quiz
type: choice
question: 'Trong các hình dưới đây, hình nào có hai đường chéo BẰNG NHAU nhưng KHÔNG vuông góc?'
options:
  - 'Hình thoi'
  - 'Hình vuông'
  - 'Hình chữ nhật'
  - 'Hình bình hành không đặc biệt'
answer: 3
explanation: 'Hình chữ nhật có hai đường chéo bằng nhau. (Hình vuông cũng có hai đường chéo bằng nhau nhưng chúng vuông góc với nhau; hình thoi thì đường chéo vuông góc nhưng không bằng nhau).'
```

```quiz
type: choice
question: 'Hình thang cân có đặc điểm nào sau đây?'
options:
  - 'Hai cạnh bên song song với nhau'
  - 'Hai đường chéo vuông góc với nhau'
  - 'Hai cạnh đáy song song và hai cạnh bên bằng nhau'
  - 'Bốn góc đều bằng nhau'
answer: 3
explanation: 'Hình thang cân là hình thang có hai cạnh đáy song song, hai cạnh bên bằng nhau, hai góc kề một đáy bằng nhau và hai đường chéo bằng nhau.'
```

---

## A. Lý thuyết trọng tâm

### 1. Hình chữ nhật

> [!NOTE]
> **Định nghĩa và tính chất của hình chữ nhật:**
> Hình chữ nhật $ABCD$ là tứ giác có:
> - **Bốn góc vuông:** $\widehat{A} = \widehat{B} = \widehat{C} = \widehat{D} = 90^\circ.$
> - **Các cặp cạnh đối song song và bằng nhau:** $AB \parallel CD,\; AB = CD$ và $AD \parallel BC,\; AD = BC.$
> - **Hai đường chéo bằng nhau:** $AC = BD.$
> - **Hai đường chéo cắt nhau tại trung điểm $O$ của mỗi đường:**
>   $$OA = OB = OC = OD = \frac{AC}{2} = \frac{BD}{2}.$$

<div style="text-align: center; margin: 20px 0;">
<svg width="280" height="180" viewBox="0 0 280 180" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
  <polygon points="30,30 250,30 250,150 30,150" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" />
  <line x1="30" y1="30" x2="250" y2="150" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="250" y1="30" x2="30" y2="150" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,4" />
  <circle cx="140" cy="90" r="3.5" fill="#1d4ed8" />
  <!-- Dấu góc vuông tại A -->
  <polyline points="30,45 45,45 45,30" fill="none" stroke="#2563eb" stroke-width="1.5" />
  <text x="20" y="24" font-size="14" font-weight="bold" fill="#1e40af">A</text>
  <text x="258" y="24" font-size="14" font-weight="bold" fill="#1e40af">B</text>
  <text x="258" y="165" font-size="14" font-weight="bold" fill="#1e40af">C</text>
  <text x="20" y="165" font-size="14" font-weight="bold" fill="#1e40af">D</text>
  <text x="140" y="112" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">O</text>
</svg>
<div style="font-size:13px; color:#64748b; margin-top:6px;">Hình 1. Hình chữ nhật $ABCD$ có $4$ góc vuông và $2$ đường chéo bằng nhau</div>
</div>

---

### 2. Hình thoi

> [!NOTE]
> **Định nghĩa và tính chất của hình thoi:**
> Hình thoi $ABCD$ là tứ giác có:
> - **Bốn cạnh bằng nhau:** $AB = BC = CD = DA.$
> - **Các cặp cạnh đối song song:** $AB \parallel CD$ và $AD \parallel BC.$
> - **Các góc đối bằng nhau:** $\widehat{A} = \widehat{C}$ và $\widehat{B} = \widehat{D}.$
> - **Hai đường chéo vuông góc với nhau tại trung điểm $O$ của mỗi đường:**
>   $$AC \perp BD \quad \text{tại } O;\quad OA = OC = \frac{AC}{2};\quad OB = OD = \frac{BD}{2}.$$

<div style="text-align: center; margin: 20px 0;">
<svg width="260" height="200" viewBox="0 0 260 200" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
  <polygon points="130,20 235,100 130,180 25,100" fill="#fef2f2" stroke="#dc2626" stroke-width="2.5" />
  <line x1="130" y1="20" x2="130" y2="180" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="25" y1="100" x2="235" y2="100" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4,4" />
  <circle cx="130" cy="100" r="3.5" fill="#b91c1c" />
  <!-- Dấu vuông góc tại O -->
  <polyline points="130,88 142,88 142,100" fill="none" stroke="#dc2626" stroke-width="1.5" />
  <text x="130" y="14" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">A</text>
  <text x="245" y="105" font-size="14" font-weight="bold" fill="#991b1b">B</text>
  <text x="130" y="196" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">C</text>
  <text x="12" y="105" font-size="14" font-weight="bold" fill="#991b1b">D</text>
  <text x="145" y="118" font-size="12" font-weight="bold" fill="#991b1b">O</text>
</svg>
<div style="font-size:13px; color:#64748b; margin-top:6px;">Hình 2. Hình thoi $ABCD$ có bốn cạnh bằng nhau, hai đường chéo vuông góc</div>
</div>

---

### 3. Hình bình hành

> [!NOTE]
> **Định nghĩa và tính chất của hình bình hành:**
> Hình bình hành $ABCD$ là tứ giác có:
> - **Các cặp cạnh đối song song và bằng nhau:**
>   $$AB \parallel CD,\; AB = CD;\quad AD \parallel BC,\; AD = BC.$$
> - **Các góc đối bằng nhau:** $\widehat{A} = \widehat{C}$ và $\widehat{B} = \widehat{D}.$
> - **Hai đường chéo cắt nhau tại trung điểm $O$ của mỗi đường:**
>   $$OA = OC = \frac{AC}{2};\quad OB = OD = \frac{BD}{2}.$$

<div style="text-align: center; margin: 20px 0;">
<svg width="290" height="180" viewBox="0 0 290 180" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
  <polygon points="75,30 265,30 215,150 25,150" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" />
  <line x1="75" y1="30" x2="215" y2="150" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="265" y1="30" x2="25" y2="150" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,4" />
  <circle cx="145" cy="90" r="3.5" fill="#15803d" />
  <text x="68" y="24" font-size="14" font-weight="bold" fill="#166534">A</text>
  <text x="272" y="24" font-size="14" font-weight="bold" fill="#166534">B</text>
  <text x="222" y="165" font-size="14" font-weight="bold" fill="#166534">C</text>
  <text x="14" y="165" font-size="14" font-weight="bold" fill="#166534">D</text>
  <text x="145" y="112" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">O</text>
</svg>
<div style="font-size:13px; color:#64748b; margin-top:6px;">Hình 3. Hình bình hành $ABCD$ có các cặp cạnh đối song song và bằng nhau</div>
</div>

---

### 4. Hình thang cân

> [!NOTE]
> **Định nghĩa và tính chất của hình thang cân:**
> Hình thang cân $ABCD$ (với hai đáy $AB \parallel CD$) có:
> - **Hai cạnh đáy song song:** $AB \parallel CD$ ($AB$ là đáy nhỏ, $CD$ là đáy lớn).
> - **Hai cạnh bên bằng nhau:** $AD = BC.$
> - **Hai góc kề một đáy bằng nhau:**
>   $$\widehat{A} = \widehat{B} \quad \text{và} \quad \widehat{C} = \widehat{D}.$$
> - **Hai đường chéo bằng nhau:** $AC = BD.$

<div style="text-align: center; margin: 20px 0;">
<svg width="270" height="180" viewBox="0 0 270 180" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
  <polygon points="75,35 195,35 245,150 25,150" fill="#fffbeb" stroke="#d97706" stroke-width="2.5" />
  <line x1="75" y1="35" x2="245" y2="150" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="195" y1="35" x2="25" y2="150" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="65" y="26" font-size="14" font-weight="bold" fill="#b45309">A</text>
  <text x="202" y="26" font-size="14" font-weight="bold" fill="#b45309">B</text>
  <text x="252" y="165" font-size="14" font-weight="bold" fill="#b45309">C</text>
  <text x="14" y="165" font-size="14" font-weight="bold" fill="#b45309">D</text>
</svg>
<div style="font-size:13px; color:#64748b; margin-top:6px;">Hình 4. Hình thang cân $ABCD$ có hai đáy song song, hai cạnh bên và hai đường chéo bằng nhau</div>
</div>

---

### 5. Bảng tổng hợp so sánh đặc điểm 4 tứ giác

| Tiêu chí | Hình chữ nhật | Hình thoi | Hình bình hành | Hình thang cân |
| :--- | :--- | :--- | :--- | :--- |
| **Cạnh** | Các cặp cạnh đối song song &amp; bằng nhau | $4$ cạnh bằng nhau, các cặp cạnh đối song song | Các cặp cạnh đối song song &amp; bằng nhau | $2$ đáy song song, $2$ cạnh bên bằng nhau |
| **Góc** | $4$ góc vuông ($90^\circ$) | Các góc đối bằng nhau | Các góc đối bằng nhau | Hai góc kề một đáy bằng nhau |
| **Độ dài đường chéo** | **Bằng nhau** ($AC = BD$) | Không nhất thiết bằng nhau | Không nhất thiết bằng nhau | **Bằng nhau** ($AC = BD$) |
| **Giao điểm đường chéo** | Cắt nhau tại **trung điểm** mỗi đường | Cắt nhau tại **trung điểm** mỗi đường | Cắt nhau tại **trung điểm** mỗi đường | Cắt nhau nhưng **không tại trung điểm** |
| **Độ vuông góc đường chéo** | Không nhất thiết vuông góc | **Vuông góc với nhau** ($AC \perp BD$) | Không vuông góc | Không nhất thiết vuông góc |

---

### 6. Cây phả hệ tứ giác và các mối quan hệ đặc biệt

> [!TIP]
> **Mối liên hệ "phả hệ" thú vị giữa các hình:**
> 1. **Hình bình hành là "gốc rễ":**
>    - Nếu hình bình hành có thêm $4$ góc vuông $\implies$ trở thành **Hình chữ nhật**.
>    - Nếu hình bình hành có thêm $4$ cạnh bằng nhau $\implies$ trở thành **Hình thoi**.
> 2. **Hình vuông là "con cưng" hoàn hảo nhất:**
>    - Hình vuông vừa có $4$ góc vuông (là hình chữ nhật), vừa có $4$ cạnh bằng nhau (là hình thoi).
>    - Do đó, **Hình vuông vừa là hình chữ nhật đặc biệt, vừa là hình thoi đặc biệt**!
> 3. **Hình thang cân:**
>    - Hình thang cân chỉ có **một cặp cạnh đối song song** (hai đáy), còn hai cạnh bên bằng nhau nhưng cắt nhau nếu kéo dài, nên hình thang cân **không phải là hình bình hành**.

---

## B. Các dạng toán thường gặp và phương pháp giải chi tiết

### Dạng 1. Nhận biết hình qua dấu hiệu và hình vẽ

**Phương pháp giải:**
- Quan sát ký hiệu trên hình: Dấu vuông góc, dấu gạch chéo cạnh bằng nhau, dấu mũi tên song song.
- Đối chiếu với bảng dấu hiệu nhận biết:
  - Bốn góc vuông $\to$ Hình chữ nhật.
  - Bốn cạnh bằng nhau $\to$ Hình thoi.
  - Hai cặp cạnh đối song song $\to$ Hình bình hành.
  - Một cặp cạnh song song và hai cạnh bên bằng nhau $\to$ Hình thang cân.

#### Bài toán 1.1
Mỗi mô tả dưới đây ứng với hình nào?
1. Tứ giác có hai cặp cạnh đối song song, bốn góc đều bằng $90^\circ$.
2. Tứ giác có bốn cạnh bằng nhau và hai đường chéo vuông góc với nhau.
3. Tứ giác có hai đáy song song và hai đường chéo bằng nhau.
4. Tứ giác có hai cặp cạnh đối song song và bằng nhau nhưng các góc không vuông.

**Lời giải:**
1. Tứ giác có bốn góc vuông là **Hình chữ nhật**.
2. Tứ giác có bốn cạnh bằng nhau là **Hình thoi**.
3. Tứ giác có hai đáy song song và hai đường chéo bằng nhau là **Hình thang cân**.
4. Tứ giác có hai cặp cạnh đối song song và bằng nhau (không có góc vuông) là **Hình bình hành**.

---

### Dạng 2. Tính toán độ dài cạnh, góc và chu vi

**Phương pháp giải:**
- **Chu vi hình chữ nhật:** $C = 2 \cdot (a + b).$
- **Chu vi hình thoi:** $C = 4 \cdot a.$
- **Chu vi hình bình hành:** $C = 2 \cdot (a + b).$
- **Chu vi hình thang cân:** $C = a + b + 2c$ (với $a, b$ là hai đáy, $c$ là cạnh bên).
- Vận dụng tính chất: Các cạnh đối bằng nhau, góc đối bằng nhau, hai góc kề đáy bằng nhau.

#### Bài toán 2.1
1. Một mảnh vườn hình chữ nhật có chiều dài $18\text{ m}$, chiều rộng $12\text{ m}$. Tính chu vi mảnh vườn.
2. Một huy hiệu hình thoi có độ dài cạnh bằng $4.5\text{ cm}$. Tính chu vi của huy hiệu đó.
3. Cho hình bình hành $MNPQ$ có $MN = 14\text{ cm}, NP = 9\text{ cm}$ và góc $\widehat{M} = 110^\circ$.
   - Tính độ dài các cạnh $PQ, MQ$ và chu vi hình bình hành.
   - Tìm số đo các góc $\widehat{P}$ và $\widehat{N}$.
4. Cho hình thang cân $ABCD$ ($AB \parallel CD$) có $AB = 6\text{ cm}, CD = 14\text{ cm}$ và cạnh bên $AD = 7\text{ cm}$.
   - Tính độ dài cạnh bên $BC$ và chu vi hình thang cân.
   - Biết góc $\widehat{D} = 65^\circ$, hãy tìm số đo góc $\widehat{C}$.

**Lời giải:**
1. Chu vi mảnh vườn hình chữ nhật là:
   $$C = 2 \cdot (18 + 12) = 2 \cdot 30 = 60\text{ (m)}.$$

2. Chu vi huy hiệu hình thoi là:
   $$C = 4 \cdot 4.5 = 18\text{ (cm)}.$$

3. 
- Trong hình bình hành $MNPQ$, các cặp cạnh đối bằng nhau nên:
  $$PQ = MN = 14\text{ cm};\quad MQ = NP = 9\text{ cm}.$$
  Chu vi hình bình hành là:
  $$C = 2 \cdot (14 + 9) = 2 \cdot 23 = 46\text{ (cm)}.$$
- Các góc đối của hình bình hành bằng nhau nên:
  $$\widehat{P} = \widehat{M} = 110^\circ.$$
  Tổng hai góc kề một cạnh của hình bình hành bằng $180^\circ$ nên:
  $$\widehat{N} = 180^\circ - 110^\circ = 70^\circ.$$

4. 
- Trong hình thang cân $ABCD$, hai cạnh bên bằng nhau nên:
  $$BC = AD = 7\text{ cm}.$$
  Chu vi của hình thang cân là:
  $$C = AB + CD + AD + BC = 6 + 14 + 7 + 7 = 34\text{ (cm)}.$$
- Hai góc kề đáy lớn $CD$ bằng nhau nên:
  $$\widehat{C} = \widehat{D} = 65^\circ.$$

---

### Dạng 3. Vận dụng tính chất đường chéo

**Phương pháp giải:**
- Nhớ rõ:
  - Đường chéo **bằng nhau**: Hình chữ nhật, Hình vuông, Hình thang cân.
  - Đường chéo **vuông góc**: Hình thoi, Hình vuông.
  - Đường chéo **cắt nhau tại trung điểm**: Hình bình hành, Hình chữ nhật, Hình thoi, Hình vuông.

#### Bài toán 3.1
1. Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết đường chéo $AC = 14\text{ cm}$.
   Tính độ dài đường chéo $BD$ và độ dài các đoạn thẳng $OA, OB$.
2. Hình thoi $EFGH$ có hai đường chéo cắt nhau tại $I$. Biết $EG = 12\text{ cm}$ và $FH = 16\text{ cm}$.
   - Tính độ dài $IE$ và $IF$.
   - Cho biết số đo góc $\widehat{EIF}$.
3. Hình thang cân $ABCD$ có đường chéo $AC = 9.5\text{ cm}$. Hỏi đường chéo $BD$ dài bao nhiêu xentimét?

**Lời giải:**
1. 
- Trong hình chữ nhật, hai đường chéo bằng nhau nên: $BD = AC = 14\text{ cm}.$
- Hai đường chéo cắt nhau tại trung điểm của mỗi đường nên:
  $$OA = OB = \frac{AC}{2} = \frac{14}{2} = 7\text{ (cm)}.$$

2. 
- Hai đường chéo hình thoi cắt nhau tại trung điểm mỗi đường nên:
  $$IE = \frac{EG}{2} = \frac{12}{2} = 6\text{ (cm)};\quad IF = \frac{FH}{2} = \frac{16}{2} = 8\text{ (cm)}.$$
- Hai đường chéo hình thoi vuông góc với nhau nên $\widehat{EIF} = 90^\circ.$

3. Trong hình thang cân, hai đường chéo luôn bằng nhau nên:
   $$BD = AC = 9.5\text{ cm}.$$

---

### Dạng 4. Kỹ thuật vẽ hình bằng dụng cụ học tập

#### Bài toán 4.1 (Vẽ hình chữ nhật bằng thước và ê-ke)
Nêu các bước vẽ hình chữ nhật $ABCD$ có $AB = 7\text{ cm}$ và $BC = 4\text{ cm}$.

**Lời giải:**
- **Bước 1:** Dùng thước thẳng vẽ đoạn thẳng $AB = 7\text{ cm}$.
- **Bước 2:** Đặt góc vuông của ê-ke tại đỉnh $A$ vẽ đường thẳng vuông góc với $AB$, trên đó lấy đoạn thẳng $AD = 4\text{ cm}$.
- **Bước 3:** Đặt góc vuông của ê-ke tại đỉnh $B$ vẽ đường thẳng vuông góc với $AB$, trên đó lấy đoạn thẳng $BC = 4\text{ cm}$ (cùng phía với $D$).
- **Bước 4:** Nối $D$ với $C$, ta được hình chữ nhật $ABCD$ cần vẽ.

#### Bài toán 4.2 (Vẽ hình thoi bằng thước và compa)
Nêu các bước vẽ hình thoi $ABCD$ có cạnh $AB = 5\text{ cm}$ và đường chéo $AC = 6\text{ cm}$.

**Lời giải:**
- **Bước 1:** Dùng thước vẽ đường chéo $AC = 6\text{ cm}$.
- **Bước 2:** Mở compa khẩu độ đúng bằng $5\text{ cm}$.
  - Lấy $A$ làm tâm, vẽ hai cung tròn ở hai phía của đoạn $AC$.
  - Lấy $C$ làm tâm, vẽ hai cung tròn ở hai phía của đoạn $AC$ cắt các cung tròn trước lần lượt tại hai điểm $B$ và $D$.
- **Bước 3:** Nối $A$ với $B$, $B$ với $C$, $C$ với $D$ và $D$ với $A$, ta thu được hình thoi $ABCD$ có cạnh $5\text{ cm}$ và đường chéo $AC = 6\text{ cm}$.

---

### Dạng 5. Bài toán đếm hình trong lưới ô

**Phương pháp giải:**
- Với lưới gồm các hàng và cột, ta đếm theo nguyên tắc chọn:
  - Đếm số đoạn thẳng trên phương ngang.
  - Đếm số đoạn thẳng trên phương dọc.
  - Số hình chữ nhật tạo thành bằng tích của số đoạn ngang nhân số đoạn dọc.

#### Bài toán 5.1
1. Một hàng gồm $4$ ô vuông nhỏ bằng nhau xếp liền kề. Hỏi có tất cả bao nhiêu hình chữ nhật (kể cả ô vuông) trong hàng đó?
2. Một lưới ô vuông gồm $2$ hàng và $3$ cột (kích thước $2 \times 3$). Hỏi trong lưới có tất cả bao nhiêu hình chữ nhật?

**Lời giải:**
1. Trong hàng gồm $4$ ô vuông nhỏ:
   - Hình chữ nhật kích thước $1$ ô: Có $4$ hình.
   - Hình chữ nhật kích thước $2$ ô: Có $3$ hình.
   - Hình chữ nhật kích thước $3$ ô: Có $2$ hình.
   - Hình chữ nhật kích thước $4$ ô: Có $1$ hình.
   
   Tổng số hình chữ nhật là:
   $$4 + 3 + 2 + 1 = 10\text{ (hình chữ nhật)}.$$

2. Trong lưới kích thước $2 \times 3$:
   - Theo phương ngang (gồm $3$ cột): Số đoạn thẳng tạo thành là $3 + 2 + 1 = 6$ đoạn.
   - Theo phương dọc (gồm $2$ hàng): Số đoạn thẳng tạo thành là $2 + 1 = 3$ đoạn.
   
   Mỗi cặp gồm một đoạn ngang và một đoạn dọc xác định duy nhất một hình chữ nhật.
   Tổng số hình chữ nhật có trong lưới là:
   $$6 \times 3 = 18\text{ (hình chữ nhật)}.$$

---

## C. Phiếu bài tập tự luyện (10 bài độc bản kèm lời giải)

### Đề bài phiếu tự luyện

**Bài 1.** Điền dấu "$\times$" vào ô Đúng hoặc Sai:

| Khẳng định | Đúng | Sai |
| :--- | :---: | :---: |
| 1. Hình thoi có bốn cạnh bằng nhau và bốn góc vuông. | | |
| 2. Hình chữ nhật có hai đường chéo bằng nhau và cắt nhau tại trung điểm. | | |
| 3. Hình thang cân có hai cạnh đáy bằng nhau. | | |
| 4. Hình bình hành có các góc đối bằng nhau. | | |

**Bài 2.** Hình chữ nhật $ABCD$ có chiều dài $AB = 15\text{ cm}$, chiều rộng $BC = 8\text{ cm}$ và đường chéo $AC = 17\text{ cm}$.
1. Tính độ dài cạnh $CD$ và $AD$.
2. Tính chu vi hình chữ nhật $ABCD$ và độ dài đường chéo $BD$.

**Bài 3.** Cho hình thoi $MNPQ$ có cạnh $MN = 10\text{ cm}$; hai đường chéo $MP = 16\text{ cm}$ và $NQ = 12\text{ cm}$ cắt nhau tại $O$.
1. Tính chu vi hình thoi $MNPQ$.
2. Tính độ dài các đoạn thẳng $OM, ON$ và số đo góc $\widehat{MON}$.

**Bài 4.** Cho hình bình hành $ABCD$ có chu vi bằng $40\text{ cm}$. Biết cạnh $AB$ dài hơn cạnh $BC$ là $4\text{ cm}$. Tính độ dài các cạnh của hình bình hành đó.

**Bài 5.** Hình thang cân $EFGH$ ($EF \parallel GH$) có hai đáy $EF = 5\text{ cm}, GH = 11\text{ cm}$, cạnh bên $EH = 6\text{ cm}$ và góc $\widehat{G} = 70^\circ$.
1. Tính độ dài cạnh bên $FG$ và chu vi của hình thang cân.
2. Tìm số đo góc $\widehat{H}$.

**Bài 6.** Bạn Nam khẳng định: *"Mọi hình chữ nhật đều là hình bình hành, nhưng hình bình hành thì chưa chắc là hình chữ nhật."* Theo em, bạn Nam nói đúng hay sai? Vì sao?

**Bài 7.** Người ta uốn một sợi dây thép dài $36\text{ cm}$ thành một khung hình thoi. Hỏi mỗi cạnh của khung hình thoi đó dài bao nhiêu xentimét?

**Bài 8.** Nêu các bước vẽ hình bình hành $ABCD$ có cạnh $AB = 6\text{ cm}$ và cạnh $AD = 4\text{ cm}$.

**Bài 9.** Một khung cửa chớp bằng gỗ gồm một hình chữ nhật lớn được chia thành $3$ hàng, mỗi hàng gồm $2$ ô kính nhỏ bằng nhau. Hỏi trên khung cửa sổ có tất cả bao nhiêu hình chữ nhật?

**Bài 10.** Cho một mảnh bìa hình bình hành $ABCD$. Bằng một nhát kéo thẳng, em hãy nêu cách cắt mảnh bìa này thành hai mảnh để ghép lại thành một hình chữ nhật.

---

### Lời giải chi tiết phiếu tự luyện

**Bài 1.**
1. **Sai** *(Hình thoi có bốn cạnh bằng nhau nhưng không nhất thiết có bốn góc vuông)*.
2. **Đúng** *(Tính chất cơ bản của hình chữ nhật)*.
3. **Sai** *(Hình thang cân có hai cạnh BÊN bằng nhau, hai đáy song song và độ dài thường khác nhau)*.
4. **Đúng** *(Tính chất cơ bản của hình bình hành)*.

**Bài 2.**
1. Các cạnh đối của hình chữ nhật bằng nhau nên:
   $$CD = AB = 15\text{ cm};\quad AD = BC = 8\text{ cm}.$$
2. Chu vi hình chữ nhật là:
   $$C = 2 \cdot (15 + 8) = 2 \cdot 23 = 46\text{ (cm)}.$$
   Hai đường chéo bằng nhau nên:
   $$BD = AC = 17\text{ cm}.$$

**Bài 3.**
1. Bốn cạnh hình thoi bằng nhau nên chu vi là:
   $$C = 4 \cdot 10 = 40\text{ (cm)}.$$
2. Hai đường chéo cắt nhau tại trung điểm của mỗi đường:
   $$OM = \frac{MP}{2} = \frac{16}{2} = 8\text{ (cm)};\quad ON = \frac{NQ}{2} = \frac{12}{2} = 6\text{ (cm)}.$$
   Hai đường chéo vuông góc với nhau nên $\widehat{MON} = 90^\circ.$

**Bài 4.**
Nửa chu vi hình bình hành là:
$$40 : 2 = 20\text{ (cm)}.$$
Ta có bài toán tìm hai số khi biết tổng và hiệu:
- Tổng hai cạnh kề: $AB + BC = 20\text{ cm}.$
- Hiệu hai cạnh kề: $AB - BC = 4\text{ cm}.$
Độ dài cạnh $AB$ là:
$$AB = (20 + 4) : 2 = 12\text{ (cm)}.$$
Độ dài cạnh $BC$ là:
$$BC = 20 - 12 = 8\text{ (cm)}.$$
Vì các cạnh đối bằng nhau nên:
$$CD = AB = 12\text{ cm};\quad AD = BC = 8\text{ cm}.$$

**Bài 5.**
1. Trong hình thang cân, hai cạnh bên bằng nhau:
   $$FG = EH = 6\text{ cm}.$$
   Chu vi hình thang cân là:
   $$C = EF + GH + EH + FG = 5 + 11 + 6 + 6 = 28\text{ (cm)}.$$
2. Hai góc kề đáy lớn $GH$ bằng nhau nên:
   $$\widehat{H} = \widehat{G} = 70^\circ.$$

**Bài 6.**
Bạn Nam nói **hoàn toàn đúng**.
*Giải thích:*
- Hình chữ nhật có các cặp cạnh đối song song và bằng nhau, thỏa mãn đầy đủ định nghĩa của hình bình hành. Vì vậy hình chữ nhật chính là một hình bình hành đặc biệt (có thêm $4$ góc vuông).
- Ngược lại, một hình bình hành thông thường không có $4$ góc vuông nên không thể coi là hình chữ nhật.

**Bài 7.**
Khung hình thoi có bốn cạnh bằng nhau, do đó độ dài mỗi cạnh là:
$$a = 36 : 4 = 9\text{ (cm)}.$$

**Bài 8.**
Các bước vẽ:
- **Bước 1:** Vẽ đoạn thẳng $AB = 6\text{ cm}$.
- **Bước 2:** Qua điểm $A$, vẽ một đường thẳng xiên và lấy điểm $D$ trên đó sao cho $AD = 4\text{ cm}$.
- **Bước 3:** Qua $D$, vẽ đường thẳng song song với $AB$ và lấy điểm $C$ sao cho $DC = 6\text{ cm}$ (cùng chiều với tia $AB$).
- **Bước 4:** Nối $B$ với $C$, ta được hình bình hành $ABCD$ cần vẽ.

**Bài 9.**
Lưới gồm $3$ hàng và $2$ cột:
- Theo chiều ngang ($2$ cột): số đoạn thẳng tạo thành là $2 + 1 = 3$ đoạn.
- Theo chiều dọc ($3$ hàng): số đoạn thẳng tạo thành là $3 + 2 + 1 = 6$ đoạn.
Tổng số hình chữ nhật trên khung cửa sổ là:
$$3 \times 6 = 18\text{ (hình chữ nhật)}.$$

**Bài 10.**
*Cách thực hiện:*
1. Từ đỉnh $A$ của hình bình hành $ABCD$, kẻ đường thẳng $AH$ vuông góc với cạnh đáy $CD$ tại điểm $H$.
2. Cắt theo đoạn thẳng $AH$, ta tách hình bình hành thành hai mảnh: một hình tam giác vuông $ADH$ và một hình thang vuông $ABCH$.
3. Ghép cạnh $AD$ của tam giác vuông vào cạnh $BC$ của hình thang vuông (vì $AD = BC$), ta sẽ thu được một hình chữ nhật hoàn chỉnh.

---

## D. Đề kiểm tra 15 phút — Đánh giá năng lực chuẩn

### Đề bài

**Phần I. Trắc nghiệm (4 câu — 4 điểm)**

```quiz
type: choice
question: 'Hình bình hành ABCD có AB = 8 cm, BC = 5 cm. Chu vi của hình bình hành đó là:'
options:
  - '13 cm'
  - '26 cm'
  - '40 cm'
  - '20 cm'
answer: 2
explanation: 'Chu vi hình bình hành C = 2 · (8 + 5) = 2 · 13 = 26 cm.'
```

```quiz
type: choice
question: 'Trong các hình sau, hình nào có hai đường chéo VUÔNG GÓC với nhau?'
options:
  - 'Hình chữ nhật'
  - 'Hình bình hành'
  - 'Hình thoi'
  - 'Hình thang cân'
answer: 3
explanation: 'Hai đường chéo của hình thoi vuông góc với nhau tại trung điểm của mỗi đường.'
```

```quiz
type: choice
question: 'Hình thang cân có hai góc kề đáy lớn bằng 75°. Hai góc kề đáy nhỏ có tổng số đo bằng:'
options:
  - '150°'
  - '180°'
  - '210°'
  - '360°'
answer: 3
explanation: 'Tổng bốn góc của tứ giác là 360°. Hai góc đáy lớn có tổng là 75° + 75° = 150°. Vậy tổng hai góc đáy nhỏ là 360° - 150° = 210° (mỗi góc bằng 105°).'
```

```quiz
type: choice
question: 'Hình thoi có chu vi bằng 48 cm. Độ dài mỗi cạnh của hình thoi là:'
options:
  - '8 cm'
  - '12 cm'
  - '16 cm'
  - '24 cm'
answer: 2
explanation: 'Hình thoi có 4 cạnh bằng nhau nên độ dài mỗi cạnh là 48 : 4 = 12 cm.'
```

**Phần II. Tự luận (3 câu — 6 điểm)**

**Câu 1 (2.0 điểm).** Cho hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = 7.5\text{ cm}$. Tính độ dài đường chéo $BD$.

**Câu 2 (2.0 điểm).** Một biển báo giao thông hình thoi có cạnh dài $40\text{ cm}$. Người ta viền mép xung quanh biển báo bằng dải phản quang màu vàng. Tính chiều dài dải phản quang cần dùng.

**Câu 3 (2.0 điểm).** Một dải gồm $5$ ô vuông nhỏ bằng nhau xếp thành một hàng ngang. Hỏi có tất cả bao nhiêu hình chữ nhật trong dải ô vuông đó?

---

### Đáp án và thang điểm phần tự luận

**Câu 1 (2.0 điểm):**
- Trong hình chữ nhật, $O$ là trung điểm của $AC$ nên:
  $$AC = 2 \cdot OA = 2 \cdot 7.5 = 15\text{ cm}\text{ (1.0 điểm)}.$$
- Hai đường chéo của hình chữ nhật bằng nhau nên:
  $$BD = AC = 15\text{ cm}\text{ (1.0 điểm)}.$$

**Câu 2 (2.0 điểm):**
- Chiều dài dải phản quang cần dùng đúng bằng chu vi của biển báo hình thoi *(0.5 điểm)*.
- Chu vi hình thoi là:
  $$C = 4 \cdot 40 = 160\text{ (cm)}\text{ (1.5 điểm)}.$$
  *(Đổi ra mét: $1.6\text{ m}$)*.

**Câu 3 (2.0 điểm):**
- Số hình chữ nhật ghép từ $1$ ô vuông: $5$ hình *(0.5 điểm)*.
- Số hình chữ nhật ghép từ $2$ ô vuông: $4$ hình *(0.5 điểm)*.
- Số hình chữ nhật ghép từ $3$ ô vuông: $3$ hình *(0.25 điểm)*.
- Số hình chữ nhật ghép từ $4$ ô vuông: $2$ hình *(0.25 điểm)*.
- Số hình chữ nhật ghép từ $5$ ô vuông: $1$ hình *(0.25 điểm)*.
- Tổng số hình chữ nhật là:
  $$5 + 4 + 3 + 2 + 1 = 15\text{ (hình chữ nhật)}\text{ (0.25 điểm)}.$$

---

## E. Bài toán bồi dưỡng học sinh giỏi & Nâng cao

### Bài toán nâng cao 1 (Công thức tổng quát đếm hình chữ nhật trong lưới $m \times n$)
Một mảnh đất hình chữ nhật được chia thành lưới gồm $m$ hàng và $n$ cột ô vuông nhỏ.
1. Hãy tìm công thức tổng quát tính số hình chữ nhật có trong lưới.
2. Áp dụng tính số hình chữ nhật có trong bàn cờ vua kích thước $8 \times 8$.

**Lời giải:**
1. Một hình chữ nhật bất kỳ được giới hạn bởi $2$ đường nằm ngang và $2$ đường thẳng đứng.
   - Lưới có $m$ hàng thì có $(m + 1)$ đường kẻ ngang. Số cách chọn ra $2$ đường ngang là:
     $$\frac{(m + 1) \cdot m}{2}.$$
   - Lưới có $n$ cột thì có $(n + 1)$ đường kẻ dọc. Số cách chọn ra $2$ đường dọc là:
     $$\frac{(n + 1) \cdot n}{2}.$$
   
   Theo quy tắc nhân, tổng số hình chữ nhật trong lưới $m \times n$ là:
   $$N = \frac{m(m + 1)}{2} \times \frac{n(n + 1)}{2}.$$

2. Áp dụng cho bàn cờ vua ($m = 8, n = 8$):
   $$N = \frac{8 \cdot 9}{2} \times \frac{8 \cdot 9}{2} = 36 \times 36 = 1296\text{ (hình chữ nhật)}.$$

---

### Bài toán nâng cao 2 (Ghép hai tam giác vuông bằng nhau)
Cho hai tấm bìa hình tam giác vuông bằng nhau có các cạnh góc vuông là $3\text{ cm}, 4\text{ cm}$ và cạnh huyền là $5\text{ cm}$.
Bằng cách ghép hai tấm bìa (chung một cạnh và không chồng lên nhau), ta có thể tạo được những tứ giác nào trong các hình đã học?

**Lời giải:**
Ta xét các cách ghép hai tam giác vuông theo cạnh chung:
1. **Ghép chung cạnh huyền ($5\text{ cm}$):**
   - Ghép đối xứng qua cạnh huyền: Ta được một tứ giác có bốn cạnh lần lượt là $3\text{ cm}, 3\text{ cm}, 4\text{ cm}, 4\text{ cm}$ (hình cánh diều).
   - Ghép đảo đầu (góc vuông so le): Hai cạnh góc vuông $3\text{ cm}$ và $4\text{ cm}$ ở hai phía đối nhau. Tứ giác thu được có các cặp cạnh đối bằng nhau và bốn góc đều là góc vuông ($90^\circ$). Đó là một **Hình chữ nhật** có kích thước $3\text{ cm} \times 4\text{ cm}$.
2. **Ghép chung cạnh góc vuông $3\text{ cm}$:**
   - Ghép đối xứng: Ta được một tam giác cân lớn cạnh đáy $8\text{ cm}$ (không phải tứ giác).
   - Ghép đảo đầu: Ta được một **Hình bình hành** có hai cạnh là $4\text{ cm}$ và $5\text{ cm}$.
3. **Ghép chung cạnh góc vuông $4\text{ cm}$:**
   - Ghép đảo đầu: Ta được một **Hình bình hành** có hai cạnh là $3\text{ cm}$ và $5\text{ cm}$.

*Kết luận:* Ta có thể ghép được **Hình chữ nhật** và **Hình bình hành**. (Nếu tam giác vuông cân thì còn ghép được cả **Hình vuông**).

---

### Bài toán nâng cao 3 (Đếm hình bình hành trong lưới nghiêng)
Một hình bình hành lớn được chia bởi $3$ đường song song với đáy và $4$ đường song song với cạnh bên. Hỏi có tất cả bao nhiêu hình bình hành trong hình vẽ?

**Lời giải:**
Các đường song song chia hình bình hành thành một lưới gồm:
- $(3 + 1) = 4$ dải theo phương cạnh bên.
- $(4 + 1) = 5$ dải theo phương cạnh đáy.

Tương tự như bài toán đếm hình chữ nhật, một hình bình hành được xác định bởi $2$ đường song song với đáy và $2$ đường song song với cạnh bên.
- Số cách chọn $2$ đường từ $(3 + 2) = 5$ đường đáy là:
  $$\frac{5 \cdot 4}{2} = 10\text{ (cách)}.$$
- Số cách chọn $2$ đường từ $(4 + 2) = 6$ đường cạnh bên là:
  $$\frac{6 \cdot 5}{2} = 15\text{ (cách)}.$$

Tổng số hình bình hành tạo thành là:
$$10 \times 15 = 150\text{ (hình bình hành)}.$$

---

### Bài toán nâng cao 4 (Bất đẳng thức chu vi và diện tích)
Trong tất cả các hình chữ nhật có cùng chu vi bằng $40\text{ cm}$, hình nào có diện tích lớn nhất?

**Lời giải:**
Gọi chiều dài và chiều rộng của hình chữ nhật là $a$ và $b$ ($a, b > 0$).
Nửa chu vi của hình chữ nhật là:
$$a + b = 40 : 2 = 20\text{ (cm)}.$$
Ta có công thức biến đổi:
$$a \cdot b = \frac{(a + b)^2 - (a - b)^2}{4} = \frac{20^2 - (a - b)^2}{4} = 100 - \frac{(a - b)^2}{4}.$$
Vì $(a - b)^2 \ge 0$ với mọi $a, b$ nên:
$$a \cdot b \le 100.$$
Dấu "$=$" xảy ra khi và chỉ khi:
$$a - b = 0 \iff a = b = 10\text{ (cm)}.$$
Khi $a = b = 10\text{ cm}$, hình chữ nhật trở thành **Hình vuông**.
*Kết luận:* Trong các hình chữ nhật có cùng chu vi, **Hình vuông** là hình có diện tích lớn nhất ($100\text{ cm}^2$).

---

### Bài toán nâng cao 5 (Bài toán thực tế khung giàn không gian)
Tại sao các cánh cổng sắt xếp người ta lại dùng các thanh kim loại ghép thành các **hình thoi**, trong khi khung giàn mái nhà lại luôn dùng các thanh sắt hàn thành các **hình tam giác**?

**Lời giải:**
- **Tính biến dạng của hình thoi (cổng xếp):** Tứ giác (trong đó có hình thoi) không có tính cứng vững. Khi ta tác dụng lực đẩy hoặc kéo, bốn khớp nối ở bốn đỉnh có thể thay đổi góc mà độ dài bốn cạnh không đổi. Điều này giúp cổng sắt xếp có thể dễ dàng co lại hoặc giãn ra khi đóng mở.
- **Tính cứng vững của tam giác (mái nhà):** Tam giác có tính chất độc nhất vô nhị: khi độ dài ba cạnh cố định thì hình dạng và các góc của tam giác hoàn toàn không thể bị biến dạng. Do đó, khung giàn mái nhà, cầu thép, cần cẩu luôn được kết cấu từ các tam giác để đảm bảo khả năng chịu lực tối đa và độ an toàn tuyệt đối.

---

## F. Lời kết và tóm tắt bài học

Bài 19 đã cung cấp cái nhìn toàn diện và sâu sắc về thế giới bốn tứ giác quen thuộc:
1. **Hình chữ nhật:** $4$ góc vuông, đường chéo bằng nhau.
2. **Hình thoi:** $4$ cạnh bằng nhau, đường chéo vuông góc.
3. **Hình bình hành:** Các cặp cạnh đối song song và bằng nhau, đường chéo cắt nhau tại trung điểm.
4. **Hình thang cân:** Hai đáy song song, hai cạnh bên bằng nhau, đường chéo bằng nhau.
5. Ở bài học tiếp theo — **Bài 20**, chúng ta sẽ học cách tính toán số đo định lượng: **Chu vi và diện tích của một số tứ giác đã học**!
