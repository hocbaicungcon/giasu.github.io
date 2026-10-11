---
title: 'Toán 6 Bài 22: Hình có tâm đối xứng - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 22 Hình có tâm đối xứng: định nghĩa phép quay 180 độ, bảng đối chiếu hình có tâm đối xứng và trục đối xứng, chữ cái in hoa, kỹ thuật vẽ điểm đối xứng và 5 bài toán nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học trực quan
  - Tâm đối xứng
  - Tính đối xứng
  - Kết nối tri thức
grade: 6
---

# Bài 22. Hình có tâm đối xứng

Ở Bài 21, chúng ta đã làm quen với **trục đối xứng** — thao tác gắn liền với việc *gấp đôi một hình theo đường thẳng sao cho hai nửa trùng khít lên nhau*. Tuy nhiên, trong tự nhiên và cuộc sống, có những vật thể dù không thể gấp đôi theo đường thẳng nào (như cánh quạt quay, chong chóng gió, chữ cái $S$, quân bài rô hay hình bình hành nghiêng), nhưng nhìn chúng vẫn vô cùng cân đối và hài hòa.

Đó là bởi vì chúng sở hữu một dạng đối xứng thứ hai cực kỳ thú vị: **Tính đối xứng tâm**. Khi ta quay hình đó nửa vòng (tức đúng $180^\circ$) quanh một điểm cố định, hình thu được sẽ trùng khít hoàn toàn với vị trí ban đầu! Bài học hôm nay sẽ giúp các em phân biệt rõ ràng giữa trục đối xứng và tâm đối xứng, làm chủ phương pháp xác định tâm đối xứng của các hình phẳng và chinh phục hệ thống bài tập độc bản $100\%$ có lời giải chi tiết!

---

## 0. Khởi động — Trực giác về phép quay nửa vòng (5–7 phút)

Hãy kiểm tra trực giác hình học qua 3 câu hỏi trắc nghiệm tương tác sau:

```quiz
type: choice
question: 'Hình nào sau đây có tâm đối xứng nhưng KHÔNG CÓ trục đối xứng?'
options:
  - 'Hình vuông'
  - 'Hình tam giác đều'
  - 'Hình bình hành (không phải hình chữ nhật hay hình thoi)'
  - 'Hình thang cân'
answer: 3
explanation: 'Hình bình hành thông thường không có trục đối xứng nào, nhưng khi quay 180° quanh giao điểm hai đường chéo thì nó trùng khít với chính nó. Do đó hình bình hành có tâm đối xứng.'
```

```quiz
type: choice
question: 'Tam giác đều có tâm đối xứng không?'
options:
  - 'Có, là trọng tâm của tam giác'
  - 'Không có tâm đối xứng'
  - 'Có 3 tâm đối xứng'
  - 'Chỉ có khi quay 60°'
answer: 2
explanation: 'Khi quay tam giác đều nửa vòng (180°) quanh bất kỳ điểm nào, tam giác sẽ bị lộn ngược đỉnh (thành hình ngôi sao nếu chồng lên) chứ không trùng khít với vị trí ban đầu. Do đó tam giác đều KHÔNG có tâm đối xứng.'
```

```quiz
type: choice
question: 'Chữ cái in hoa nào dưới đây vừa có trục đối xứng vừa có tâm đối xứng?'
options:
  - 'Chữ A'
  - 'Chữ S'
  - 'Chữ H'
  - 'Chữ M'
  - 'Chữ Z'
answer: 3
explanation: 'Chữ H vừa có 2 trục đối xứng (dọc và ngang), vừa có tâm đối xứng ở chính giữa (quay 180° vẫn là chữ H).'
```

---

## A. Lý thuyết trọng tâm

### 1. Tâm đối xứng của một hình

> [!NOTE]
> **Định nghĩa tâm đối xứng:**
> Cho hình $(H)$ và một điểm $O$. Nếu khi ta **quay hình $(H)$ nửa vòng (tức là $180^\circ$) quanh điểm $O$** mà hình thu được trùng khít với vị trí ban đầu, thì:
> - Hình $(H)$ được gọi là **hình có tâm đối xứng**.
> - Điểm $O$ được gọi là **tâm đối xứng** của hình $(H)$.
>
> Khi đó, với mỗi điểm $M$ bất kỳ thuộc hình $(H)$, điểm đối xứng $M'$ của nó qua $O$ (sao cho $O$ là trung điểm của đoạn thẳng $MM'$) cũng thuộc hình $(H)$.

<div style="text-align: center; margin: 20px 0;">
<svg width="300" height="190" viewBox="0 0 300 190" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
  <!-- Hình bình hành ABCD -->
  <polygon points="80,35 270,35 220,155 30,155" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" />
  <line x1="80" y1="35" x2="220" y2="155" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="270" y1="35" x2="30" y2="155" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,4" />
  <!-- Tâm O -->
  <circle cx="150" cy="95" r="4" fill="#dc2626" />
  <!-- Mũi tên quay 180 độ quanh O -->
  <path d="M 165 80 A 20 20 0 0 1 135 110" fill="none" stroke="#dc2626" stroke-width="1.8" marker-end="url(#arrow)" />
  <text x="70" y="28" font-size="14" font-weight="bold" fill="#166534">A</text>
  <text x="278" y="28" font-size="14" font-weight="bold" fill="#166534">B</text>
  <text x="228" y="170" font-size="14" font-weight="bold" fill="#166534">C</text>
  <text x="18" y="170" font-size="14" font-weight="bold" fill="#166534">D</text>
  <text x="156" y="112" font-size="13" font-weight="bold" fill="#dc2626">O</text>
  <text x="150" y="185" text-anchor="middle" font-size="12" fill="#15803d">Khi quay 180° quanh O: A đổi chỗ cho C, B đổi chỗ cho D</text>
</svg>
<div style="font-size:13px; color:#64748b; margin-top:6px;">Hình 1. Giao điểm $O$ của hai đường chéo là tâm đối xứng của hình bình hành</div>
</div>

---

### 2. Tâm đối xứng của các hình hình học quen thuộc

Mỗi hình phẳng dưới đây chỉ có **duy nhất một tâm đối xứng**:

1. **Đoạn thẳng:** Tâm đối xứng là **trung điểm** của đoạn thẳng đó.
2. **Hình vuông, Hình chữ nhật, Hình thoi, Hình bình hành:** Tâm đối xứng là **giao điểm của hai đường chéo**.
3. **Lục giác đều:** Tâm đối xứng là **tâm của lục giác** (giao điểm của ba đường chéo chính).
4. **Hình tròn:** Tâm đối xứng là **tâm của hình tròn**.

> [!WARNING]
> **Những hình KHÔNG CÓ tâm đối xứng:**
> - **Tam giác đều:** Hoàn toàn không có tâm đối xứng.
> - **Tam giác cân, tam giác thường:** Không có tâm đối xứng.
> - **Hình thang cân, hình thang vuông, hình thang thường:** Không có tâm đối xứng.

---

### 3. Bảng vàng đối chiếu toàn diện: Trục đối xứng vs Tâm đối xứng

Đây là bảng kiến thức then chốt nhất của Chương V giúp học sinh phân loại chuẩn xác mọi hình phẳng:

| Hình phẳng | Có trục đối xứng không? (Số trục) | Có tâm đối xứng không? | Vị trí tâm đối xứng |
| :--- | :---: | :---: | :--- |
| **Đoạn thẳng** | Có ($1$ trục — đường trung trực) | **Có** | Trung điểm của đoạn thẳng |
| **Tam giác đều** | Có ($3$ trục) | **Không** | *(Không có)* |
| **Hình vuông** | Có ($4$ trục) | **Có** | Giao điểm hai đường chéo |
| **Hình chữ nhật** | Có ($2$ trục) | **Có** | Giao điểm hai đường chéo |
| **Hình thoi** | Có ($2$ trục) | **Có** | Giao điểm hai đường chéo |
| **Hình bình hành (thường)** | **Không** | **Có** | Giao điểm hai đường chéo |
| **Hình thang cân** | Có ($1$ trục) | **Không** | *(Không có)* |
| **Lục giác đều** | Có ($6$ trục) | **Có** | Tâm của lục giác đều |
| **Hình tròn** | Có (Vô số trục) | **Có** | Tâm của hình tròn |

---

### 4. Bốn nhóm hình theo tiêu chí đối xứng

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin: 20px 0;">
  <!-- Nhóm 1 -->
  <div style="flex: 1 1 220px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px;">
    <strong style="color: #1d4ed8;">1. Vừa có TRỤC, vừa có TÂM</strong>
    <p style="font-size: 13px; color: #1e3a8a; margin: 6px 0 0 0;">
      Hình tròn, hình vuông, hình chữ nhật, hình thoi, lục giác đều, đoạn thẳng.<br>
      <em>Chữ cái:</em> H, I, O, X.
    </p>
  </div>

  <!-- Nhóm 2 -->
  <div style="flex: 1 1 220px; background: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 12px;">
    <strong style="color: #a16207;">2. Chỉ có TRỤC, KHÔNG có tâm</strong>
    <p style="font-size: 13px; color: #713f12; margin: 6px 0 0 0;">
      Tam giác đều, tam giác cân, hình thang cân, hình trái tim.<br>
      <em>Chữ cái:</em> A, B, C, D, E, M, T, U, V, W, Y.
    </p>
  </div>

  <!-- Nhóm 3 -->
  <div style="flex: 1 1 220px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px;">
    <strong style="color: #15803d;">3. Chỉ có TÂM, KHÔNG có trục</strong>
    <p style="font-size: 13px; color: #14532d; margin: 6px 0 0 0;">
      Hình bình hành nghiêng, chong chóng 2 cánh / 4 cánh cong.<br>
      <em>Chữ cái:</em> N, S, Z.
    </p>
  </div>

  <!-- Nhóm 4 -->
  <div style="flex: 1 1 220px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 12px;">
    <strong style="color: #b91c1c;">4. KHÔNG có cả hai</strong>
    <p style="font-size: 13px; color: #7f1d1d; margin: 6px 0 0 0;">
      Tam giác thường, hình thang thường, tứ giác không đặc biệt.<br>
      <em>Chữ cái:</em> F, G, J, L, P, Q, R.
    </p>
  </div>
</div>

---

## B. Các dạng toán thường gặp và phương pháp giải chi tiết

### Dạng 1. Nhận biết hình có tâm đối xứng

**Phương pháp giải:**
- Tưởng tượng xoay hình đó nửa vòng (góc $180^\circ$):
  - Nếu đỉnh quay xuống đáy, mép trái đảo sang mép phải mà hình vẫn giữ nguyên hình dạng $\implies$ Có tâm đối xứng.
  - Nếu hình bị đảo lộn (ví dụ đỉnh nhọn chúc xuống dưới) $\implies$ Không có tâm đối xứng.
- Ghi nhớ: Các tứ giác có các cặp cạnh đối song song (hình bình hành, hình chữ nhật, hình thoi, hình vuông) luôn có tâm đối xứng.

#### Bài toán 1.1
Trong các biển báo giao thông dưới đây, biển báo nào có tâm đối xứng?
1. Biển báo cấm đi ngược chiều (hình tròn màu đỏ, ở giữa có vạch ngang màu trắng).
2. Biển báo nguy hiểm hình tam giác đều viền đỏ nền vàng.
3. Biển báo đường ưu tiên hình thoi màu vàng viền trắng.
4. Biển báo hiệu lệnh hình tròn có mũi tên rẽ phải.

**Lời giải:**
1. **Biển cấm đi ngược chiều:** Có tâm đối xứng (chính là tâm của hình tròn và tâm của vạch trắng). Khi quay $180^\circ$, vạch trắng nằm ngang vẫn là vạch trắng nằm ngang.
2. **Biển báo nguy hiểm tam giác đều:** Không có tâm đối xứng (khi quay $180^\circ$, đỉnh của tam giác quay chúc xuống dưới, hình bị lộn ngược).
3. **Biển báo đường ưu tiên hình thoi:** Có tâm đối xứng (giao điểm của hai đường chéo hình thoi).
4. **Biển báo mũi tên rẽ phải:** Không có tâm đối xứng (khi quay $180^\circ$, mũi tên rẽ phải biến thành mũi tên rẽ trái chúc xuống).

---

### Dạng 2. Xác định tâm đối xứng và tính khoảng cách

**Phương pháp giải:**
- Để xác định tâm đối xứng:
  - Đoạn thẳng: Xác định trung điểm $O$ ($OA = OB = \frac{AB}{2}$).
  - Tứ giác (hình bình hành, chữ nhật, thoi, vuông): Nối hai đường chéo, giao điểm $O$ là tâm đối xứng.
- Khoảng cách từ tâm đối xứng đến đỉnh bằng một nửa độ dài đường chéo đi qua đỉnh đó:
  $$OA = \frac{AC}{2};\quad OB = \frac{BD}{2}.$$

#### Bài toán 2.1
1. Cho hình chữ nhật $ABCD$ có đường chéo $AC = 14\text{ cm}$. Xác định tâm đối xứng $O$ của hình chữ nhật và tính khoảng cách từ $O$ đến mỗi đỉnh của hình chữ nhật đó.
2. Cho hình thoi $MNPQ$ có hai đường chéo $MP = 16\text{ cm}$ và $NQ = 12\text{ cm}$ cắt nhau tại $I$.
   - Điểm $I$ có phải là tâm đối xứng của hình thoi không?
   - Tính độ dài các đoạn thẳng $IM$ và $IN$.

**Lời giải:**
1. 
- Tâm đối xứng của hình chữ nhật $ABCD$ là giao điểm $O$ của hai đường chéo $AC$ và $BD$.
- Hai đường chéo hình chữ nhật bằng nhau nên $BD = AC = 14\text{ cm}$.
- Khoảng cách từ tâm $O$ đến bốn đỉnh là bằng nhau:
  $$OA = OB = OC = OD = \frac{AC}{2} = \frac{14}{2} = 7\text{ (cm)}.$$

2. 
- Giao điểm $I$ của hai đường chéo chính là **tâm đối xứng** của hình thoi $MNPQ$.
- Hai đường chéo cắt nhau tại trung điểm của mỗi đường nên:
  $$IM = \frac{MP}{2} = \frac{16}{2} = 8\text{ (cm)};\quad IN = \frac{NQ}{2} = \frac{12}{2} = 6\text{ (cm)}.$$

---

### Dạng 3. Vẽ thêm điểm hoặc đoạn thẳng để hoàn thiện hình có tâm đối xứng

**Phương pháp giải:**
- **Vẽ điểm $A'$ đối xứng với $A$ qua tâm $O$:** Nối đường thẳng $AO$, trên tia đối của tia $OA$ lấy điểm $A'$ sao cho $OA' = OA$ (tức $O$ là trung điểm của đoạn thẳng $AA'$).
- **Hoàn thiện hình bình hành từ tam giác $ABC$:** Lấy trung điểm $M$ của cạnh $BC$ làm tâm đối xứng, sau đó vẽ điểm $D$ đối xứng với $A$ qua $M$. Khi đó tứ giác $ABDC$ là một hình bình hành nhận $M$ làm tâm đối xứng.

#### Bài toán 3.1
Cho góc nhọn $\widehat{xOy}$ và một điểm $A$ nằm trong góc. Nêu các bước vẽ điểm $B$ sao cho gốc $O$ là tâm đối xứng của đoạn thẳng $AB$.

**Lời giải:**
- **Bước 1:** Đặt thước thẳng nối điểm $A$ và điểm $O$.
- **Bước 2:** Kéo dài đoạn thẳng $AO$ về phía đối diện để tạo thành tia đối của tia $OA$.
- **Bước 3:** Đo độ dài đoạn thẳng $OA$. Trên tia đối vừa vẽ, dùng compa hoặc thước vạch lấy điểm $B$ sao cho:
  $$OB = OA.$$
- Khi đó điểm $O$ là trung điểm của đoạn thẳng $AB$, nghĩa là $O$ là tâm đối xứng của đoạn thẳng $AB$.

---

### Dạng 4. Tâm đối xứng của các chữ cái in hoa và chữ số

#### Bài toán 4.1
1. Trong các chữ cái in hoa sau: N, P, S, Q, Z, chữ nào có tâm đối xứng? Hãy chỉ ra vị trí tâm đối xứng của chúng.
2. Trong các chữ số từ $0$ đến $9$, chữ số nào có tâm đối xứng?

**Lời giải:**
1. Xét từng chữ cái:
   - Chữ **N**: Có tâm đối xứng (nằm ở chính giữa nét gạch chéo).
   - Chữ **P**: Không có tâm đối xứng.
   - Chữ **S**: Có tâm đối xứng (nằm ở điểm uốn chính giữa chữ).
   - Chữ **Q**: Không có tâm đối xứng.
   - Chữ **Z**: Có tâm đối xứng (nằm ở trung điểm nét gạch chéo).
   Vậy các chữ có tâm đối xứng là: **N, S, Z**.
2. Trong các chữ số từ $0$ đến $9$ (theo phông số chuẩn cân đối):
   - Chữ số **$0$**: Có tâm đối xứng (tâm của hình elip).
   - Chữ số **$8$**: Có tâm đối xứng (giao điểm của hai vòng tròn).
   - Các chữ số $1, 2, 3, 4, 5, 6, 7, 9$ không có tâm đối xứng (số $6$ và $9$ quay $180^\circ$ biến thành nhau chứ bản thân mỗi số không trùng khít với chính nó).

---

## C. Phiếu bài tập tự luyện (10 bài độc bản kèm lời giải)

### Đề bài phiếu tự luyện

**Bài 1.** Điền từ thích hợp vào chỗ trống:
1. Điểm $O$ gọi là $\dots$ của hình $(H)$ nếu khi quay hình $(H)$ một góc $\dots^\circ$ quanh $O$ thì hình thu được trùng khít với hình ban đầu.
2. Tâm đối xứng của đoạn thẳng $AB$ là $\dots$ của đoạn thẳng đó.
3. Tâm đối xứng của hình chữ nhật là $\dots$ của hai đường chéo.

**Bài 2.** Trong các hình sau, hình nào có tâm đối xứng?
1. Tam giác đều;
2. Hình thoi;
3. Hình thang cân;
4. Hình bình hành;
5. Lục giác đều.

**Bài 3.** Cho lục giác đều $ABCDEF$ có tâm là $O$. Biết đường chéo chính $AD = 12\text{ cm}$.
1. Chỉ ra tâm đối xứng của lục giác đều.
2. Tính khoảng cách từ tâm đối xứng đến mỗi đỉnh của lục giác đều.

**Bài 4.** Bạn Hoa nói: *"Hình có trục đối xứng thì nhất định phải có tâm đối xứng."* Bạn Hoa nói đúng hay sai? Lấy ví dụ minh họa.

**Bài 5.** Cho đoạn thẳng $MN = 9\text{ cm}$. Xác định tâm đối xứng $I$ của đoạn thẳng $MN$ và tính độ dài $IM$.

**Bài 6.** Trong các chữ cái in hoa của từ "**HÀ NỘI**" (H, A, N, O, I), chữ nào có tâm đối xứng? Chữ nào vừa có trục đối xứng vừa có tâm đối xứng?

**Bài 7.** Một chiếc chong chóng có $2$ cánh hình chữ nhật đối xứng nhau qua trục quay. Chong chóng này có tâm đối xứng không? Có trục đối xứng không?

**Bài 8.** Cho tam giác $ABC$. Em hãy vẽ thêm một điểm $D$ sao cho tứ giác $ABDC$ là một hình có tâm đối xứng.

**Bài 9.** Kể tên 4 đồ vật hoặc logo thương hiệu trong thực tế có tâm đối xứng.

**Bài 10.** Hoàn thành bảng phân loại sau bằng cách điền "Có" hoặc "Không":

| Hình | Có trục đối xứng? | Có tâm đối xứng? |
| :--- | :---: | :---: |
| Tam giác cân (không đều) | | |
| Hình vuông | | |
| Hình bình hành (nghiêng) | | |
| Hình chữ nhật | | |
| Hình tròn | | |

---

### Lời giải chi tiết phiếu tự luyện

**Bài 1.**
1. ... gọi là **tâm đối xứng**; ... góc **$180^\circ$**.
2. ... là **trung điểm** của đoạn thẳng đó.
3. ... là **giao điểm** của hai đường chéo.

**Bài 2.**
- Các hình có tâm đối xứng là: **Hình thoi, Hình bình hành, Lục giác đều**.
- Tam giác đều và hình thang cân không có tâm đối xứng.

**Bài 3.**
1. Tâm đối xứng của lục giác đều là tâm $O$ (giao điểm của ba đường chéo chính).
2. Điểm $O$ là trung điểm của đường chéo chính $AD$, nên khoảng cách từ $O$ đến đỉnh $A$ là:
   $$OA = \frac{AD}{2} = \frac{12}{2} = 6\text{ (cm)}.$$
   Vì lục giác đều nên khoảng cách từ $O$ đến cả sáu đỉnh đều bằng nhau:
   $$OA = OB = OC = OD = OE = OF = 6\text{ (cm)}.$$

**Bài 4.**
Bạn Hoa nói **sai**.
*Ví dụ minh họa:* Tam giác đều hoặc hình thang cân đều là những hình có trục đối xứng (tam giác đều có 3 trục, hình thang cân có 1 trục) nhưng cả hai hình này đều **hoàn toàn không có tâm đối xứng**.

**Bài 5.**
- Tâm đối xứng $I$ của đoạn thẳng $MN$ là trung điểm của $MN$.
- Độ dài đoạn thẳng $IM$ là:
  $$IM = \frac{MN}{2} = \frac{9}{2} = 4.5\text{ (cm)}.$$

**Bài 6.**
- Các chữ cái có tâm đối xứng là: **H, N, O, I**. (Chữ A không có tâm đối xứng).
- Các chữ cái vừa có trục đối xứng vừa có tâm đối xứng là: **H, O, I**.

**Bài 7.**
- Chong chóng $2$ cánh đối xứng nhau qua trục quay: Khi quay $180^\circ$ quanh trục quay, hai cánh đổi chỗ cho nhau và trùng khít vị trí cũ $\implies$ **Có tâm đối xứng** (chính là trục quay).
- Nếu hai cánh phẳng thẳng hàng, nó có $2$ trục đối xứng. Nếu hai cánh hơi vát cong cùng chiều (để đón gió), nó **không có trục đối xứng**.

**Bài 8.**
*Cách vẽ:*
- Lấy $M$ là trung điểm của cạnh $BC$.
- Nối $AM$ và kéo dài về phía $M$. Trên tia đối của tia $MA$, lấy điểm $D$ sao cho $MD = MA$.
- Khi đó $M$ là trung điểm của cả $BC$ và $AD$, tứ giác $ABDC$ trở thành hình bình hành và nhận điểm $M$ làm tâm đối xứng.

**Bài 9.**
Bốn đồ vật/logo có tâm đối xứng trong thực tế:
1. Bánh xe đạp/xe máy (tâm trục bánh xe);
2. Cánh quạt trần 4 cánh hoặc 2 cánh;
3. Quân bài Tây $10$ rô, $8$ cơ (nhận điểm chính giữa lá bài làm tâm đối xứng);
4. Logo chữ S của hãng xe hơi Suzuki hoặc biểu tượng âm dương (Bát quái).

**Bài 10.**

| Hình | Có trục đối xứng? | Có tâm đối xứng? |
| :--- | :---: | :---: |
| Tam giác cân (không đều) | **Có** | **Không** |
| Hình vuông | **Có** | **Có** |
| Hình bình hành (nghiêng) | **Không** | **Có** |
| Hình chữ nhật | **Có** | **Có** |
| Hình tròn | **Có** | **Có** |

---

## D. Đề kiểm tra 15 phút — Đánh giá năng lực chuẩn

### Đề bài

**Phần I. Trắc nghiệm (4 câu — 4 điểm)**

```quiz
type: choice
question: 'Hình nào sau đây KHÔNG CÓ tâm đối xứng?'
options:
  - 'Đoạn thẳng'
  - 'Hình tròn'
  - 'Tam giác đều'
  - 'Hình thoi'
answer: 3
explanation: 'Tam giác đều không có tâm đối xứng.'
```

```quiz
type: choice
question: 'Tâm đối xứng của hình bình hành là:'
options:
  - 'Trung điểm một cạnh bất kỳ'
  - 'Một đỉnh của hình bình hành'
  - 'Giao điểm của hai đường chéo'
  - 'Điểm nằm ngoài hình bình hành'
answer: 3
explanation: 'Tâm đối xứng của hình bình hành là giao điểm của hai đường chéo.'
```

```quiz
type: choice
question: 'Chữ cái in hoa nào sau đây CÓ TÂM ĐỐI XỨNG nhưng KHÔNG CÓ trục đối xứng?'
options:
  - 'Chữ H'
  - 'Chữ O'
  - 'Chữ S'
  - 'Chữ T'
answer: 3
explanation: 'Chữ S không có trục đối xứng nào, nhưng khi quay 180° vẫn là chữ S (có tâm đối xứng).'
```

```quiz
type: choice
question: 'Cho hình vuông ABCD có tâm đối xứng O và đường chéo BD = 16 cm. Khoảng cách OA bằng:'
options:
  - '4 cm'
  - '8 cm'
  - '16 cm'
  - '32 cm'
answer: 2
explanation: 'Hai đường chéo hình vuông bằng nhau AC = BD = 16 cm. Tâm O là trung điểm AC nên OA = 16 : 2 = 8 cm.'
```

**Phần II. Tự luận (3 câu — 6 điểm)**

**Câu 1 (2.0 điểm).** Nêu tên $4$ hình tứ giác đã học có tâm đối xứng và chỉ ra vị trí tâm đối xứng của mỗi hình đó.

**Câu 2 (2.0 điểm).** Cho đoạn thẳng $AB = 7\text{ cm}$. Vẽ tâm đối xứng $O$ của đoạn thẳng $AB$. Giải thích vì sao điểm $O$ là tâm đối xứng của đoạn thẳng $AB$.

**Câu 3 (2.0 điểm).** Trong các chữ cái in hoa sau: D, N, X, Y, Z:
1. Chữ nào có tâm đối xứng?
2. Chữ nào vừa có trục đối xứng vừa có tâm đối xứng?

---

### Đáp án và thang điểm phần tự luận

**Câu 1 (2.0 điểm):**
- Bốn hình tứ giác có tâm đối xứng là: Hình vuông, Hình chữ nhật, Hình thoi, Hình bình hành *(1.0 điểm)*.
- Tâm đối xứng của cả bốn hình này đều là **giao điểm của hai đường chéo** *(1.0 điểm)*.

**Câu 2 (2.0 điểm):**
- Vẽ đoạn thẳng $AB = 7\text{ cm}$, xác định điểm $O$ trên đoạn $AB$ sao cho $OA = OB = 3.5\text{ cm}$ *(1.0 điểm)*.
- Giải thích: Khi quay đoạn thẳng $AB$ nửa vòng ($180^\circ$) quanh điểm $O$, mút $A$ chuyển đến vị trí mút $B$ và mút $B$ chuyển đến vị trí mút $A$, đoạn thẳng $AB$ trùng khít với chính nó. Do đó $O$ là tâm đối xứng của đoạn thẳng $AB$ *(1.0 điểm)*.

**Câu 3 (2.0 điểm):**
1. Các chữ cái có tâm đối xứng là: **N, X, Z** *(1.0 điểm)*.
2. Chữ cái vừa có trục đối xứng vừa có tâm đối xứng là: **X** *(1.0 điểm)*.

---

## E. Bài toán bồi dưỡng học sinh giỏi & Nâng cao

### Bài toán nâng cao 1 (Khảo sát 26 chữ cái tiếng Anh theo tính đối xứng)
Xét toàn bộ $26$ chữ cái in hoa tiếng Anh từ A đến Z (theo phông in hoa chuẩn không chân). Hãy phân loại các chữ cái này vào bảng gồm 4 nhóm:

**Lời giải:**
Ta kiểm tra tính chất đối xứng của từng chữ cái:
1. **Nhóm 1: Vừa có trục đối xứng, vừa có tâm đối xứng (4 chữ):**
   $$\text{H, I, O, X}.$$
2. **Nhóm 2: Chỉ có trục đối xứng, không có tâm đối xứng (12 chữ):**
   - Trục thẳng đứng: $\text{A, M, T, U, V, W, Y}.$
   - Trục nằm ngang: $\text{B, C, D, E, K}.$
3. **Nhóm 3: Chỉ có tâm đối xứng, không có trục đối xứng (3 chữ):**
   $$\text{N, S, Z}.$$
4. **Nhóm 4: Không có trục đối xứng, không có tâm đối xứng (7 chữ):**
   $$\text{F, G, J, L, P, Q, R}.$$

---

### Bài toán nâng cao 2 (Tính đối xứng tâm của đa giác đều $n$ cạnh)
Cho đa giác đều có $n$ đỉnh ($n \ge 3$). Hãy chứng minh:
1. Đa giác đều có tâm đối xứng khi và chỉ khi số cạnh $n$ là **số chẵn**.
2. Đa giác đều có $n$ là **số lẻ** không có tâm đối xứng.

**Lời giải:**
1. **Khi $n$ là số chẵn ($n = 2k$, ví dụ: hình vuông $n=4$, lục giác đều $n=6$, bát giác đều $n=8$):**
   - Mỗi đỉnh $A_i$ luôn có một đỉnh đối diện duy nhất $A_{i+k}$ qua tâm đường tròn ngoại tiếp $O$ sao cho $A_i, O, A_{i+k}$ thẳng hàng và $OA_i = OA_{i+k}$.
   - Khi quay đa giác nửa vòng ($180^\circ$) quanh $O$, mỗi đỉnh $A_i$ chuyển đến đúng đỉnh $A_{i+k}$, do đó đa giác trùng khít với chính nó.
   - Vậy đa giác đều có số cạnh chẵn **luôn có tâm đối xứng** (chính là tâm của đa giác).
2. **Khi $n$ là số lẻ ($n = 2k + 1$, ví dụ: tam giác đều $n=3$, ngũ giác đều $n=5$):**
   - Qua tâm $O$, đối diện với một đỉnh $A_i$ luôn là **trung điểm của cạnh đối diện**, không phải là một đỉnh!
   - Khi quay đa giác $180^\circ$ quanh $O$, đỉnh $A_i$ sẽ chuyển về phía cạnh đối diện, làm đảo lộn cấu trúc đỉnh và đáy của đa giác.
   - Do đó đa giác đều có số cạnh lẻ **không bao giờ có tâm đối xứng**. $\blacksquare$

---

### Bài toán nâng cao 3 (Bài toán chong chóng $n$ cánh)
Một chiếc chong chóng có $n$ cánh giống hệt nhau gắn đối xứng quanh một trục quay.
1. Với $n = 2, 3, 4, 5, 6$, chong chóng nào có tâm đối xứng?
2. Rút ra kết luận tổng quát cho chong chóng $n$ cánh xếp đều.

**Lời giải:**
1. 
- $n = 2$: Chong chóng $2$ cánh quay $180^\circ$ thì hai cánh đổi chỗ cho nhau $\implies$ **Có tâm đối xứng**.
- $n = 3$: Khi quay $180^\circ$, một cánh chúc lên trên sẽ biến thành cánh chúc xuống dưới (nơi không có cánh nào) $\implies$ **Không có tâm đối xứng**.
- $n = 4$: Quay $180^\circ$, hai cặp cánh đối diện đổi chỗ cho nhau $\implies$ **Có tâm đối xứng**.
- $n = 5$: Cánh trên cùng quay xuống khe giữa hai cánh dưới $\implies$ **Không có tâm đối xứng**.
- $n = 6$: Ba cặp cánh đối diện đổi chỗ cho nhau $\implies$ **Có tâm đối xứng**.
2. **Kết luận tổng quát:** Chong chóng $n$ cánh xếp đều có tâm đối xứng khi và chỉ khi số cánh **$n$ là số chẵn** ($n = 2, 4, 6, 8, \dots$).

---

### Bài toán nâng cao 4 (Bảo toàn diện tích qua tâm đối xứng)
Một đường thẳng $d$ bất kỳ đi qua tâm đối xứng $O$ của hình bình hành $ABCD$. Chứng minh rằng đường thẳng $d$ luôn chia hình bình hành thành hai phần có diện tích bằng nhau.

**Lời giải:**
- Vì $O$ là tâm đối xứng của hình bình hành $ABCD$, nên với mỗi điểm $M$ thuộc hình bình hành, điểm đối xứng $M'$ của nó qua $O$ cũng thuộc hình bình hành.
- Đường thẳng $d$ đi qua $O$, do đó khi thực hiện phép quay nửa vòng quanh $O$ ($180^\circ$):
  - Đường thẳng $d$ tự biến thành chính nó.
  - Nửa mặt phẳng thứ nhất của hình bình hành bị biến thành nửa mặt phẳng thứ hai.
- Phép quay $180^\circ$ là một phép dời hình, bảo toàn hoàn toàn kích thước và diện tích.
- Do đó, hai phần hình thu được hoàn toàn bằng nhau và có diện tích bằng nhau:
  $$S_1 = S_2 = \frac{1}{2} S_{ABCD}.$$
  *(Tính chất này ứng dụng rất phổ biến trong bài toán chia đều mảnh đất hình bình hành hoặc hình chữ nhật cho hai hộ gia đình bằng một nhát rào thẳng qua tâm)*. $\blacksquare$

---

### Bài toán nâng cao 5 (Tô màu đối xứng tâm trên bàn cờ $8 \times 8$)
Trên một bàn cờ vua kích thước $8 \times 8$:
1. Bàn cờ vua có tâm đối xứng không? Tâm đó nằm ở đâu?
2. Nếu quay bàn cờ vua $180^\circ$ quanh tâm, màu sắc của các ô cờ có bị đảo ngược không?

**Lời giải:**
1. Lưới $8 \times 8$ là một hình vuông gồm số hàng chẵn ($8$) và số cột chẵn ($8$).
   Giao điểm của đường phân chia hàng $4$ - hàng $5$ và đường phân chia cột $4$ - cột $5$ chính là **tâm đối xứng $O$ của bàn cờ**.
2. Xét màu sắc của các ô:
   - Trên bàn cờ vua, hai ô đối xứng nhau qua tâm $O$ luôn có cùng hàng và cột cách đều mép: nếu ô ở vị trí $(i; j)$ có màu trắng (tổng $i + j$ chẵn) thì ô đối xứng với nó ở vị trí $(9 - i; 9 - j)$ có tổng tọa độ là:
     $$(9 - i) + (9 - j) = 18 - (i + j).$$
   - Vì $18$ là số chẵn, nên nếu $(i + j)$ chẵn thì $18 - (i + j)$ cũng là số chẵn (cùng màu trắng); nếu $(i + j)$ lẻ thì $18 - (i + j)$ cũng lẻ (cùng màu đen).
   - Do đó, khi quay bàn cờ $180^\circ$ quanh tâm $O$, mỗi ô đen biến thành một ô đen, mỗi ô trắng biến thành một ô trắng.
   *Kết luận:* Bàn cờ vua (kể cả màu sắc các ô) **có tính đối xứng tâm hoàn hảo**!

---

## F. Lời kết và tóm tắt bài học

Bài 22 đã hoàn thiện mảnh ghép thứ hai về tính đối xứng trong hình học:
1. **Tâm đối xứng:** Điểm cố định mà khi quay hình $180^\circ$ quanh nó, hình trùng khít với chính nó.
2. **Hình có tâm đối xứng:** Đoạn thẳng, Hình bình hành, Hình chữ nhật, Hình thoi, Hình vuông, Lục giác đều, Hình tròn.
3. **Hình không có tâm đối xứng:** Tam giác đều, Hình thang cân, Đa giác đều có số lẻ đỉnh.
4. Ở bài học tiếp theo — **Ôn tập Chương V**, chúng ta sẽ tổng kết toàn bộ bức tranh đối xứng trục và đối xứng tâm, làm chủ các dạng bài thi và thử sức với hệ thống đề kiểm tra chuẩn ma trận!
