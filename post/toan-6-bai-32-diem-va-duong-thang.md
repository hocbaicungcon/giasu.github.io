---
title: 'Toán 6 Bài 32: Điểm và đường thẳng - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 32 Điểm và đường thẳng: khái niệm cơ bản, quan hệ thuộc và không thuộc, ba điểm thẳng hàng, ba vị trí tương đối của hai đường thẳng, công thức đếm số đường thẳng và giao điểm, 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học
  - Điểm và đường thẳng
  - Ba điểm thẳng hàng
  - Hai đường thẳng song song
  - Kết nối tri thức
grade: 6
---

# Bài 32. Điểm và đường thẳng

Khi các em chấm một đầu bút bi lên trang giấy trắng, ta có hình ảnh của một **điểm**. Khi căng một sợi chỉ may thật chặt, hay ngắm nhìn vệt laser đỏ rọi trên tường, mép thước kẻ hay đường chân trời xa tít tắp ngoài bờ biển, ta bắt gặp hình ảnh của một **đường thẳng**.

Điểm và đường thẳng là hai "viên gạch nguyên thủy" đặt nền móng cho toàn bộ tòa lâu đài Hình học. Mọi hình dạng kì diệu trong vũ trụ — từ hình tam giác, hình tròn, đa giác đến các công trình kiến trúc đồ sộ hay quỹ đạo chuyển động của các hành tinh — đều được cấu tạo từ vô số những điểm và đường thẳng.

Bài học mở đầu của Chương VIII sẽ giúp các em nắm vững các quy ước đặt tên, mối quan hệ thuộc/không thuộc, bản chất của ba điểm thẳng hàng, ba vị trí tương đối giữa hai đường thẳng, cùng công thức đếm tổ hợp kinh điển và $5$ chuyên đề học sinh giỏi độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 32: ĐIỂM VÀ ĐƯỜNG THẲNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm cơ bản</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Điểm: chữ in hoa ($A, B, M,\dots$)<br>• Đường thẳng: chữ thường ($a, b, d,\dots$) hoặc hai điểm ($AB$). Kéo dài vô tận về hai phía.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Điểm thuộc / không thuộc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Điểm nằm trên đường: $A \in d$.<br>• Điểm nằm ngoài đường: $B \notin d$.<br>• Tuyệt đối không viết $d \in A$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ba điểm thẳng hàng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Cùng thuộc một đường thẳng.<br>• Trong $3$ điểm thẳng hàng, có đúng một điểm nằm giữa hai điểm còn lại.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Vị trí hai đường thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Cắt nhau: đúng $1$ điểm chung.<br>• Song song ($a \parallel b$): $0$ điểm chung.<br>• Trùng nhau: vô số điểm chung.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Trực giác đời sống đến hình học (5–7 phút)

Hãy bắt đầu khám phá qua 5 câu hỏi tư duy trực quan:

**Câu 1 (Hình ảnh của điểm):** Dùng đầu ngòi bút bi chấm một vết nhỏ trên tờ giấy trắng. Chấm nhỏ này gợi cho em khái niệm hình học nào?
- *Trả lời:* Chấm nhỏ gợi cho ta hình ảnh của một **điểm**.

**Câu 2 (Hình ảnh của đường thẳng):** Nêu ba ví dụ trong lớp học hoặc thực tế đời sống gợi cho ta hình ảnh của đường thẳng.
- *Trả lời:*
  - Cạnh mép thước thẳng bằng gỗ.
  - Sợi dây đàn ghi-ta hoặc sợi chỉ may khi được kéo căng.
  - Đường ray xe lửa trên một đoạn đường thẳng tắp.
  - Vệt tia sáng laser chiếu trong phòng tối.

**Câu 3 (Khái niệm thẳng hàng):** Khi ngắm bắn súng hoặc ngắm thẳng hàng trồng cây, người ta nhắm mắt sao cho mắt, đầu ruồi và mục tiêu cùng nằm trên một hướng nhìn. Ba điểm đó có tính chất gì?
- *Trả lời:* Ba điểm đó cùng nằm trên một đường thẳng, nghĩa là chúng **thẳng hàng**.

**Câu 4 (Vẽ đường thẳng qua hai điểm):** Lấy hai điểm $A$ và $B$ phân biệt trên mặt giấy. Dùng thước kẻ, em vẽ được bao nhiêu đường thẳng đi qua cả hai điểm $A$ và $B$?
- *Trả lời:* Ta chỉ vẽ được **duy nhất một đường thẳng**.

**Câu 5 (Quy ước đặt tên):** Em hãy dự đoán: Trong toán học, người ta dùng loại chữ cái nào để đặt tên cho điểm và loại chữ cái nào để đặt tên cho đường thẳng?
- *Trả lời:* Người ta dùng chữ cái **in hoa** ($A, B, C, M,\dots$) đặt tên cho điểm, và chữ cái **in thường** ($a, b, d, m, x, y,\dots$) đặt tên cho đường thẳng.

---

## A. Lý thuyết trọng tâm

### 1. Điểm và đường thẳng

#### a) Điểm
- Điểm là hình hình học đơn giản nhất, không có kích thước (không có chiều dài, chiều rộng, chiều cao).
- Dấu chấm nhỏ trên mặt giấy là hình ảnh trực quan của điểm.
- Quy ước đặt tên: Dùng các chữ cái in hoa: $A, B, C, D, M, N,\dots$
- Hai điểm phân biệt là hai điểm không trùng nhau. Khi nói "hai điểm" mà không chú thích gì thêm, ta hiểu đó là hai điểm phân biệt.

#### b) Đường thẳng
- Sợi chỉ kéo căng, mép bàn, tia laser... cho ta hình ảnh của đường thẳng.
- Đường thẳng **không bị giới hạn về cả hai phía**.
- Quy ước đặt tên:
  - Dùng một chữ cái in thường: đường thẳng $a,$ đường thẳng $b,$ đường thẳng $d,\dots$
  - Dùng hai chữ cái in thường biểu thị hai hướng: đường thẳng $xy,$ đường thẳng $mn,\dots$
  - Dùng tên của hai điểm thuộc đường thẳng đó: đường thẳng $AB$ (hoặc đường thẳng $BA$).

```
        A                      d
        •───────────────────────•────────────────────────>
                                B
                  Đường thẳng d (hay đường thẳng AB)
```

---

### 2. Điểm thuộc đường thẳng — Điểm không thuộc đường thẳng

Cho đường thẳng $d$ và hai điểm $A, M$:
- Điểm $A$ nằm trên đường thẳng $d$: Ta nói **điểm $A$ thuộc đường thẳng $d$** (hoặc đường thẳng $d$ đi qua điểm $A$), kí hiệu:
$$A \in d.$$
- Điểm $M$ không nằm trên đường thẳng $d$: Ta nói **điểm $M$ không thuộc đường thẳng $d$** (hoặc đường thẳng $d$ không đi qua điểm $M$), kí hiệu:
$$M \notin d.$$

```
            M • (M không thuộc d)

    ─────────────•─────────────────────> d
                 A (A thuộc d)
```

> [!WARNING]
> **Cạm bẫy quy ước ký hiệu:**
> - Ký hiệu $\in$ và $\notin$ chỉ được viết theo chiều: **TÊN ĐIỂM $\in$ TÊN ĐƯỜNG THẲNG** (ví dụ $A \in d$).
> - Tuyệt đối **KHÔNG ĐƯỢC VIẾT NGƯỢC** thành $d \in A$ (vì đường thẳng không phải là phần tử của điểm).
> - Tuyệt đối không dùng ký hiệu song song cho điểm: viết $A \parallel d$ là SAI!

---

### 3. Ba điểm thẳng hàng — Quan hệ nằm giữa

#### a) Định nghĩa
- Khi ba điểm cùng thuộc một đường thẳng, ta nói **ba điểm đó thẳng hàng**.
- Khi ba điểm không cùng thuộc bất kì đường thẳng nào, ta nói **ba điểm đó không thẳng hàng**.

```
    A          B          C                 M •
────•──────────•──────────•────> d                    P •
    Ba điểm A, B, C thẳng hàng              N •
                                      Ba điểm M, N, P không thẳng hàng
```

#### b) Tính chất nằm giữa của ba điểm thẳng hàng
> [!IMPORTANT]
> **Định lý then chốt:**
> Trong ba điểm thẳng hàng, có **một và chỉ một điểm nằm giữa** hai điểm còn lại.
> - Trên hình vẽ trên: Điểm $B$ nằm giữa hai điểm $A$ và $C.$
> - Hai điểm $A$ và $C$ nằm về hai phía đối với điểm $B.$
> - Hai điểm $B$ và $C$ nằm cùng phía đối với điểm $A.$

---

### 4. Tiên đề đường thẳng đi qua hai điểm

- **Tiên đề cơ bản:**
  $$\text{Có một và chỉ một đường thẳng đi qua hai điểm phân biệt } A \text{ và } B.$$
- Nhận xét mở rộng:
  - Qua **một điểm** cho trước: Có **vô số đường thẳng** đi qua nó.
  - Qua **hai điểm** phân biệt: Có **đúng $1$ đường thẳng** duy nhất.
  - Qua **ba điểm** phân biệt:
    - Nếu $3$ điểm thẳng hàng: Vẽ được **đúng $1$ đường thẳng**.
    - Nếu $3$ điểm không thẳng hàng: Vẽ được **$3$ đường thẳng** phân biệt tạo thành một hình tam giác.

---

### 5. Ba vị trí tương đối của hai đường thẳng

Cho hai đường thẳng phân biệt $a$ và $b$ trên cùng một mặt phẳng. Ta có đúng $3$ trường hợp xảy ra:

| Vị trí tương đối | Số điểm chung | Kí hiệu / Cách gọi | Hình ảnh minh họa |
| :--- | :---: | :--- | :--- |
| **Cắt nhau** | Có đúng **$1$ điểm chung** | Giao điểm $O$: $a \cap b = \{O\}$ | Hai đường thẳng chéo qua nhau tạo thành hình chữ $X$ |
| **Song song** | **Không có điểm chung nào** | $a \parallel b$ | Hai thanh ray xe lửa chạy song song vô tận |
| **Trùng nhau** | Có **vô số điểm chung** | $a \equiv b$ (cùng là một đường) | Hai tên gọi khác nhau của cùng một đường thẳng |

> [!NOTE]
> Hai đường thẳng được gọi là **phân biệt** nếu chúng không trùng nhau (nghĩa là chúng hoặc cắt nhau tại $1$ điểm, hoặc song song với nhau).

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Nhận biết điểm thuộc / không thuộc đường thẳng và sử dụng ký hiệu

#### Phương pháp giải:
- Quan sát hình vẽ: điểm nào nằm trên đường thẳng thì dùng ký hiệu $\in,$ điểm nào nằm ngoài thì dùng ký hiệu $\notin.$
- Đường thẳng đi qua đúng những điểm thuộc nó.

---

**Ví dụ 1:**
Cho hình vẽ bên dưới gồm hai đường thẳng $a, b$ cắt nhau tại điểm $M,$ điểm $P$ nằm trên đường thẳng $a$ (khác $M$), điểm $Q$ nằm trên đường thẳng $b$ (khác $M$), và điểm $K$ nằm ngoài cả hai đường thẳng.
a) Điền ký hiệu $\in$ hoặc $\notin$ thích hợp vào chỗ trống:
$$M \quad \dots \quad a;\quad M \quad \dots \quad b;\quad P \quad \dots \quad b;\quad K \quad \dots \quad a.$$
b) Đường thẳng $a$ đi qua những điểm nào? Đường thẳng $b$ không đi qua những điểm nào?

**Lời giải:**
a)
- $M \in a$ (vì $M$ là giao điểm nên thuộc cả $a$ và $b$).
- $M \in b.$
- $P \notin b$ (vì $P$ chỉ nằm trên $a,$ không nằm trên $b$).
- $K \notin a$ (vì $K$ nằm ngoài cả hai đường thẳng).

b)
- Đường thẳng $a$ đi qua các điểm: $M$ và $P.$
- Đường thẳng $b$ không đi qua các điểm: $P$ và $K.$

---

### Dạng 2: Nhận biết, kiểm tra và vẽ ba điểm thẳng hàng

#### Phương pháp giải:
- Ba điểm thẳng hàng khi cùng nằm trên một đường thẳng.
- Để kiểm tra ba điểm $A, B, C$ có thẳng hàng hay không: Đặt cạnh thước kẻ đi qua hai điểm $A$ và $B.$ Nếu mép thước đi qua cả điểm $C$ thì ba điểm đó thẳng hàng; nếu mép thước không đi qua $C$ thì ba điểm đó không thẳng hàng.

---

**Ví dụ 2:**
Cho hình vẽ tam giác $ABC,$ trên cạnh $AB$ lấy điểm $M,$ trên cạnh $AC$ lấy điểm $N,$ vẽ đường thẳng đi qua $M$ và $N$ cắt đường thẳng $BC$ kéo dài tại điểm $P.$
a) Kể tên các bộ ba điểm thẳng hàng trong hình.
b) Trong bộ ba điểm thẳng hàng $M, N, P,$ điểm nào nằm giữa hai điểm còn lại?
c) Ba điểm $A, M, C$ có thẳng hàng không? Vì sao?

**Lời giải:**
a) Các bộ ba điểm thẳng hàng là:
- Bộ ba điểm nằm trên cạnh $AB$: $A, M, B.$
- Bộ ba điểm nằm trên cạnh $AC$: $A, N, C.$
- Bộ ba điểm nằm trên đường thẳng $BC$ kéo dài: $B, C, P.$
- Bộ ba điểm nằm trên đường thẳng $MNP$: $M, N, P.$

b) Trên đường thẳng nối $M, N, P,$ theo thứ tự dựng hình thì điểm $N$ nằm giữa hai điểm $M$ và $P.$

c) Ba điểm $A, M, C$ **không thẳng hàng** vì điểm $M$ nằm trên cạnh $AB,$ điểm $C$ nằm ngoài đường thẳng $AB.$ Không có đường thẳng nào đi qua đồng thời cả ba điểm $A, M, C.$

---

### Dạng 3: Xác định vị trí tương đối của hai hay nhiều đường thẳng

#### Phương pháp giải:
- Đếm số điểm chung:
  - $1$ điểm chung $\implies$ Cắt nhau.
  - $0$ điểm chung $\implies$ Song song.
  - Vô số điểm chung $\implies$ Trùng nhau.

---

**Ví dụ 3:**
Cho hình chữ nhật $ABCD.$ Kéo dài các cạnh thành các đường thẳng $AB, BC, CD, DA$ và hai đường chéo $AC, BD$ cắt nhau tại $O.$
a) Chỉ ra các cặp đường thẳng song song với nhau.
b) Chỉ ra các cặp đường thẳng cắt nhau tại điểm $A.$
c) Hai đường thẳng $AC$ và $BD$ có vị trí tương đối như thế nào? Điểm chung của chúng là điểm nào?

**Lời giải:**
a) Các cặp đường thẳng song song (không có điểm chung):
- Đường thẳng $AB$ song song với đường thẳng $CD$ ($AB \parallel CD$).
- Đường thẳng $AD$ song song với đường thẳng $BC$ ($AD \parallel BC$).

b) Các đường thẳng đi qua điểm $A$ gồm: $AB, AD, AC.$ Do đó các cặp đường thẳng cắt nhau tại $A$ là:
- Đường thẳng $AB$ và đường thẳng $AD.$
- Đường thẳng $AB$ và đường thẳng $AC.$
- Đường thẳng $AD$ và đường thẳng $AC.$

c) Hai đường thẳng $AC$ và $BD$ **cắt nhau** tại điểm chung duy nhất là điểm $O.$

---

### Dạng 4: Đếm số đường thẳng tạo bởi $n$ điểm cho trước

#### Phương pháp giải:
- **Trường hợp 1 (Không có 3 điểm nào thẳng hàng):**
  - Mỗi điểm nối với $(n - 1)$ điểm còn lại được $(n - 1)$ đường thẳng.
  - Với $n$ điểm, ta vẽ được $n(n - 1)$ đường thẳng.
  - Nhưng mỗi đường thẳng $AB$ và $BA$ bị tính lặp $2$ lần, nên số đường thẳng phân biệt là:
    $$S = \dfrac{n(n - 1)}{2}.$$
- **Trường hợp 2 (Có đúng $k$ điểm thẳng hàng, $k \ge 3$):**
  - Nếu $k$ điểm đó không thẳng hàng, chúng tạo ra $\dfrac{k(k - 1)}{2}$ đường thẳng.
  - Khi chúng thẳng hàng, tất cả gộp lại chỉ còn đúng $1$ đường thẳng duy nhất.
  - Số đường thẳng giảm đi là $\dfrac{k(k - 1)}{2} - 1.$
  - Công thức tính:
    $$S = \dfrac{n(n - 1)}{2} - \dfrac{k(k - 1)}{2} + 1.$$

---

**Ví dụ 4:**
a) Cho $5$ điểm phân biệt trong đó không có ba điểm nào thẳng hàng. Hỏi vẽ được tất cả bao nhiêu đường thẳng đi qua từng cặp điểm? Kể tên các đường thẳng đó nếu các điểm là $A, B, C, D, E.$
b) Cho $10$ điểm phân biệt, trong đó có đúng $4$ điểm thẳng hàng, ngoài ra không có ba điểm nào khác thẳng hàng. Hỏi vẽ được bao nhiêu đường thẳng phân biệt?

**Lời giải:**
a)
- Áp dụng công thức với $n = 5$:
  $$S = \dfrac{5 \cdot (5 - 1)}{2} = \dfrac{5 \cdot 4}{2} = 10\text{ đường thẳng}.$$
- Tên $10$ đường thẳng:
  $$AB, AC, AD, AE, BC, BD, BE, CD, CE, DE.$$

b)
- Nếu trong $10$ điểm không có $3$ điểm nào thẳng hàng, số đường thẳng vẽ được là:
  $$\dfrac{10 \cdot 9}{2} = 45\text{ đường thẳng}.$$
- Riêng $4$ điểm thẳng hàng chỉ tạo ra $1$ đường thẳng duy nhất, thay vì $\dfrac{4 \cdot 3}{2} = 6$ đường thẳng.
- Số đường thẳng thực tế vẽ được là:
  $$S = 45 - 6 + 1 = 40\text{ đường thẳng}.$$

---

### Dạng 5: Đếm số giao điểm của các đường thẳng

#### Phương pháp giải:
- Cho $n$ đường thẳng đôi một cắt nhau và không có ba đường thẳng nào cùng đi qua một điểm (không có $3$ đường đồng quy).
- Mỗi đường thẳng cắt $(n - 1)$ đường thẳng còn lại tại $(n - 1)$ giao điểm.
- Với $n$ đường thẳng, số giao điểm là:
  $$G = \dfrac{n(n - 1)}{2}.$$

---

**Ví dụ 5:**
Cho $6$ đường thẳng đôi một cắt nhau và không có ba đường thẳng nào đồng quy.
a) Tính số giao điểm tạo thành.
b) Nếu có $3$ đường thẳng trong số đó cùng đi qua một điểm $O,$ hỏi số giao điểm giảm đi bao nhiêu và còn lại bao nhiêu giao điểm?

**Lời giải:**
a) Với $n = 6,$ số giao điểm tối đa là:
$$G = \dfrac{6 \cdot (6 - 1)}{2} = \dfrac{6 \cdot 5}{2} = 15\text{ giao điểm}.$$

b)
- Ba đường thẳng nếu cắt nhau từng đôi một sẽ tạo ra $\dfrac{3 \cdot 2}{2} = 3$ giao điểm phân biệt.
- Khi ba đường thẳng này đồng quy tại $O,$ chúng chỉ còn lại $1$ giao điểm duy nhất là $O.$
- Số giao điểm giảm đi là:
  $$3 - 1 = 2\text{ giao điểm}.$$
- Tổng số giao điểm còn lại là:
  $$15 - 2 = 13\text{ giao điểm}.$$

---

## C. Phiếu bài tập tự luyện toàn diện (Có lời giải chi tiết)

### Đề bài tự luyện

**Bài 1 (Ký hiệu và quan hệ thuộc):**
Cho ba đường thẳng $a, b, c$ và bốn điểm $M, N, P, Q.$ Biết:
- Đường thẳng $a$ đi qua $M$ và $N.$
- Đường thẳng $b$ đi qua $N$ và $P.$
- Đường thẳng $c$ đi qua $P$ và $M.$
- Điểm $Q$ không nằm trên bất kì đường thẳng nào trong ba đường thẳng trên.
a) Vẽ hình minh họa.
b) Điền ký hiệu $\in$ hoặc $\notin$: $N \dots a;\; P \dots a;\; Q \dots b;\; M \dots c.$
c) Điểm nào thuộc đồng thời hai đường thẳng?

**Bài 2 (Ba điểm thẳng hàng):**
Vẽ đường thẳng $xy.$ Lấy ba điểm $A, B, C$ nằm trên đường thẳng $xy$ theo thứ tự đó. Lấy điểm $D$ không thuộc đường thẳng $xy.$
a) Kể tên các bộ ba điểm thẳng hàng.
b) Kể tên ba bộ ba điểm không thẳng hàng.
c) Điểm nào nằm giữa hai điểm $A$ và $C$?

**Bài 3 (Hai đường thẳng cắt nhau, song song):**
Cho hai đường thẳng $m$ và $n$ cắt nhau tại điểm $I.$ Đường thẳng $p$ song song với đường thẳng $m.$
a) Vẽ hình minh họa.
b) Đường thẳng $p$ có cắt đường thẳng $n$ không? Hai đường thẳng $m$ và $p$ có điểm chung nào không?

**Bài 4 (Đếm số đường thẳng):**
Cho $6$ điểm phân biệt trong đó không có ba điểm nào thẳng hàng.
a) Vẽ và tính số đường thẳng đi qua các cặp điểm.
b) Nếu trong $6$ điểm đó có đúng $3$ điểm thẳng hàng thì vẽ được bao nhiêu đường thẳng phân biệt?

**Bài 5 (Bẫy tư duy ký hiệu):**
Một học sinh ghi vào vở các câu sau:
1. $d \in A$
2. $B \parallel a$
3. $a \cap b = M$
4. $M \in a$
Em hãy chỉ ra những câu sai và sửa lại cho đúng quy ước toán học.

**Bài 6 (Đếm số giao điểm):**
Có $8$ đường thẳng đôi một cắt nhau và không có ba đường nào đồng quy. Hỏi có tất cả bao nhiêu giao điểm?

**Bài 7 (Bài toán ngược đếm điểm):**
Cho $n$ điểm phân biệt trong đó không có ba điểm nào thẳng hàng. Biết rằng người ta vẽ được tất cả $28$ đường thẳng đi qua các cặp điểm. Tìm số điểm $n.$

**Bài 8 (Giao điểm giảm do đồng quy):**
Cho $5$ đường thẳng phân biệt đôi một cắt nhau. Hỏi số giao điểm có thể nhận những giá trị nào (xét các trường hợp có $3$ đường đồng quy, $4$ đường đồng quy, $5$ đường đồng quy)?

**Bài 9 (Bài toán thực tế trồng cây):**
Bác Ba có $9$ cây chuối tiêu giống và muốn trồng thành $8$ hàng, mỗi hàng có đúng $3$ cây chuối. Em hãy vẽ sơ đồ giúp bác Ba bố trí vị trí các cây chuối.

**Bài 10 (Trồng cây ngôi sao):**
Có $10$ cây hoa hồng giống, cần trồng thành $5$ hàng, mỗi hàng có đúng $4$ cây hoa. Hãy vẽ sơ đồ bố trí các cây hoa.

---

### Lời giải chi tiết bài tập tự luyện

**Bài 1:**
a) Hình vẽ: Ba đường thẳng $a, b, c$ cắt nhau từng đôi một tại $M, N, P$ tạo thành tam giác $MNP,$ điểm $Q$ nằm bên trong hoặc bên ngoài tam giác.
b) Điền ký hiệu:
- $N \in a$ (vì $a$ đi qua $N$).
- $P \notin a$ (vì $a$ chỉ đi qua $M$ và $N$).
- $Q \notin b$ (vì $Q$ không thuộc đường nào).
- $M \in c$ (vì $c$ đi qua $M$).
c) Các điểm thuộc đồng thời hai đường thẳng là các giao điểm:
- Điểm $M$ thuộc $a$ và $c.$
- Điểm $N$ thuộc $a$ và $b.$
- Điểm $P$ thuộc $b$ và $c.$

**Bài 2:**
a) Bộ ba điểm thẳng hàng duy nhất là: $A, B, C$ (vì cùng nằm trên đường thẳng $xy$).
b) Ba bộ ba điểm không thẳng hàng:
- Bộ $(A, B, D)$
- Bộ $(B, C, D)$
- Bộ $(A, C, D)$
c) Điểm $B$ nằm giữa hai điểm $A$ và $C.$

**Bài 3:**
a) Vẽ đường thẳng $m$ cắt $n$ tại $I.$ Sau đó vẽ đường thẳng $p$ song song với $m$ cắt $n$ tại điểm $K.$
b)
- Đường thẳng $p$ có cắt đường thẳng $n$ tại một điểm $K$ (khác $I$).
- Hai đường thẳng $m$ và $p$ song song nên chúng **không có điểm chung nào**.

**Bài 4:**
a) Với $n = 6$ điểm không có $3$ điểm nào thẳng hàng:
$$S = \dfrac{6 \cdot (6 - 1)}{2} = \dfrac{6 \cdot 5}{2} = 15\text{ đường thẳng}.$$
b) Có đúng $3$ điểm thẳng hàng:
$$S = 15 - \left(\dfrac{3 \cdot 2}{2} - 1\right) = 15 - (3 - 1) = 13\text{ đường thẳng}.$$

**Bài 5:**
1. $d \in A$: **Sai**. Sửa lại: $A \in d$ (tên điểm đứng trước, tên đường thẳng đứng sau).
2. $B \parallel a$: **Sai**. Ký hiệu $\parallel$ chỉ dùng cho hai đường thẳng. Sửa lại: $B \notin a$ (nếu muốn nói $B$ không nằm trên $a$).
3. $a \cap b = M$: Chưa chuẩn xác về tập hợp. Chuẩn xác là $a \cap b = \{M\}$ hoặc ghi bằng lời: "Đường thẳng $a$ cắt đường thẳng $b$ tại $M$".
4. $M \in a$: **Đúng**.

**Bài 6:**
Số giao điểm của $8$ đường thẳng không đồng quy là:
$$G = \dfrac{8 \cdot (8 - 1)}{2} = \dfrac{8 \cdot 7}{2} = 28\text{ giao điểm}.$$

**Bài 7:**
Số đường thẳng tạo bởi $n$ điểm là:
$$\dfrac{n(n - 1)}{2} = 28 \iff n(n - 1) = 56.$$
Vì $n$ và $(n - 1)$ là hai số tự nhiên liên tiếp, và $8 \cdot 7 = 56,$ suy ra:
$$n = 8.$$
Vậy có $8$ điểm.

**Bài 8:**
Số giao điểm tối đa của $5$ đường thẳng là $\dfrac{5 \cdot 4}{2} = 10$ giao điểm.
- Nếu không có 3 đường nào đồng quy: Có **$10$ giao điểm**.
- Nếu có đúng $3$ đường đồng quy: Số giao điểm giảm đi $3 - 1 = 2 \implies$ Có **$8$ giao điểm**.
- Nếu có $4$ đường đồng quy: Số giao điểm giảm đi $\dfrac{4 \cdot 3}{2} - 1 = 6 - 1 = 5 \implies$ Có $10 - 5 = \mathbf{5\text{ giao điểm}}.$
- Nếu cả $5$ đường cùng đồng quy tại $1$ điểm: Có **$1$ giao điểm**.

**Bài 9:**
Sơ đồ trồng $9$ cây thành $8$ hàng, mỗi hàng $3$ cây:
- Bố trí $9$ cây thành hình lưới ô vuông $3 \times 3$ (như bàn cờ ca-rô):
  - $3$ hàng ngang: mỗi hàng $3$ cây ($3$ hàng).
  - $3$ hàng dọc: mỗi hàng $3$ cây ($3$ hàng).
  - $2$ hàng chéo: mỗi hàng chéo $3$ cây ($2$ hàng).
- Tổng cộng có $3 + 3 + 2 = 8$ hàng, mỗi hàng đúng $3$ cây.

**Bài 10:**
Sơ đồ trồng $10$ cây thành $5$ hàng, mỗi hàng $4$ cây:
- Bố trí các cây theo hình **ngôi sao $5$ cánh**:
  - $5$ cây đặt tại $5$ đỉnh nhọn của ngôi sao.
  - $5$ cây đặt tại $5$ giao điểm của các cạnh ngôi sao.
- Khi đó ngôi sao có đúng $5$ đoạn thẳng (cạnh), mỗi cạnh chứa đúng $4$ cây.

---

## D. 5 Chuyên đề nâng cao học sinh giỏi (Độc bản 100%)

### Chuyên đề 1: Công thức tổng quát đếm số đường thẳng khi có nhiều cụm điểm thẳng hàng

> [!NOTE]
> **Định lý đếm đường thẳng tổng quát:**
> Cho $n$ điểm phân biệt. Nếu trong đó có nhiều nhóm điểm thẳng hàng, nhóm thứ nhất có $k_1$ điểm, nhóm thứ hai có $k_2$ điểm,... (các nhóm không có điểm chung ngoài tối đa $1$ giao điểm):
> $$S = \dfrac{n(n - 1)}{2} - \sum_{i} \left[ \dfrac{k_i(k_i - 1)}{2} - 1 \right].$$

**Bài toán 1:**
Cho $30$ điểm phân biệt trên mặt phẳng, trong đó có một nhóm gồm $6$ điểm thẳng hàng và một nhóm khác gồm $5$ điểm thẳng hàng (hai nhóm này không có điểm chung), ngoài ra không có ba điểm nào khác thẳng hàng. Cứ qua hai điểm vẽ một đường thẳng. Tính số đường thẳng phân biệt vẽ được.

**Lời giải chi tiết:**
- Nếu không có ba điểm nào thẳng hàng, số đường thẳng vẽ được là:
  $$S_0 = \dfrac{30 \cdot 29}{2} = 435\text{ đường thẳng}.$$
- Nhóm $6$ điểm thẳng hàng:
  - Lẽ ra tạo ra: $\dfrac{6 \cdot 5}{2} = 15$ đường thẳng.
  - Nay chỉ tạo ra $1$ đường thẳng duy nhất.
  - Số đường thẳng giảm đi: $15 - 1 = 14$ đường thẳng.
- Nhóm $5$ điểm thẳng hàng:
  - Lẽ ra tạo ra: $\dfrac{5 \cdot 4}{2} = 10$ đường thẳng.
  - Nay chỉ tạo ra $1$ đường thẳng duy nhất.
  - Số đường thẳng giảm đi: $10 - 1 = 9$ đường thẳng.
- Tổng số đường thẳng phân biệt thực tế vẽ được là:
  $$S = 435 - 14 - 9 = 412\text{ đường thẳng}.$$

---

### Chuyên đề 2: Số đường thẳng có thể nhận một giá trị cho trước hay không?

**Bài toán 2:**
Cho $n$ điểm phân biệt, trong đó không có ba điểm nào thẳng hàng. Cứ qua hai điểm vẽ một đường thẳng. Hỏi số đường thẳng vẽ được có thể bằng $2\,026$ được không? Vì sao?

**Lời giải chi tiết:**
- Số đường thẳng tạo bởi $n$ điểm không có ba điểm thẳng hàng là:
  $$S = \dfrac{n(n - 1)}{2}.$$
- Giả sử số đường thẳng bằng $2\,026,$ ta có:
  $$\dfrac{n(n - 1)}{2} = 2\,026 \iff n(n - 1) = 4\,052.$$
- Nhận xét về chữ số tận cùng của tích hai số tự nhiên liên tiếp $n(n - 1)$:
  - Hai số tự nhiên liên tiếp chỉ có thể có các cặp tận cùng là: $(0, 1) \to 0;$ $(1, 2) \to 2;$ $(2, 3) \to 6;$ $(3, 4) \to 2;$ $(4, 5) \to 0;$ $(5, 6) \to 0;$ $(6, 7) \to 2;$ $(7, 8) \to 6;$ $(8, 9) \to 2;$ $(9, 0) \to 0.$
  - Do đó, **tích hai số tự nhiên liên tiếp chỉ có thể tận cùng bằng $0, 2$ hoặc $6$**.
  - Không bao giờ tận cùng bằng các chữ số $4, 8$ hay chữ số lẻ!
- Mặt khác, số $4\,052$ có chữ số tận cùng là $2.$ Ta kiểm tra bằng ước lượng:
  - $60 \cdot 60 = 3\,600 < 4\,052.$
  - $65 \cdot 64 = 4\,160 > 4\,052.$
  - Thử các số ở giữa: $63 \cdot 64 = 4\,032 \neq 4\,052;$ $64 \cdot 65 = 4\,160 \neq 4\,052.$
  - Không có số tự nhiên $n$ nào thỏa mãn $n(n - 1) = 4\,052.$
Vậy số đường thẳng vẽ được **không thể bằng $2\,026$**.

---

### Chuyên đề 3: Phân chia mặt phẳng bởi $n$ đường thẳng

> [!TIP]
> **Định lý phân chia mặt phẳng:**
> Trên mặt phẳng cho $n$ đường thẳng, trong đó không có hai đường nào song song và không có ba đường nào đồng quy.
> Số miền mặt phẳng phân chia được là:
> $$M_n = \dfrac{n(n + 1)}{2} + 1.$$

**Bài toán 3:**
a) Một đường thẳng chia mặt phẳng thành bao nhiêu miền? Hai đường thẳng cắt nhau chia mặt phẳng thành bao nhiêu miền?
b) Tính số miền mặt phẳng được tạo thành bởi $10$ đường thẳng đôi một cắt nhau và không có ba đường nào đồng quy.

**Lời giải chi tiết:**
a)
- Với $n = 1$: Một đường thẳng chia mặt phẳng thành $2$ nửa mặt phẳng ($M_1 = 2$).
- Với $n = 2$: Hai đường thẳng cắt nhau chia mặt phẳng thành $4$ góc đối đỉnh ($M_2 = 4$).
- Với $n = 3$: Ba đường thẳng cắt nhau từng đôi một chia mặt phẳng thành $7$ miền ($M_3 = 7$).
- Quy luật: Khi thêm đường thẳng thứ $n,$ nó bị $n - 1$ đường thẳng trước đó cắt tại $n - 1$ giao điểm, chia đường thẳng thứ $n$ thành $n$ phần. Mỗi phần này chia đôi một miền cũ thành hai miền mới, do đó số miền tăng thêm đúng $n$:
  $$M_n = M_{n-1} + n.$$
  $$M_n = 1 + (1 + 2 + 3 + \dots + n) = 1 + \dfrac{n(n + 1)}{2}.$$

b) Áp dụng với $n = 10$:
$$M_{10} = \dfrac{10 \cdot 11}{2} + 1 = 55 + 1 = 56\text{ miền mặt phẳng}.$$

---

### Chuyên đề 4: Điểm đồng quy và các bài toán xác định vị trí giao điểm

**Bài toán 4:**
Cho $n$ đường thẳng phân biệt trên mặt phẳng. Biết rằng trong đó có đúng $4$ đường thẳng cùng đi qua một điểm $A,$ ngoài ra không có ba đường thẳng nào khác đồng quy và không có hai đường thẳng nào song song. Tìm $n$ biết tổng số giao điểm của các đường thẳng là $40.$

**Lời giải chi tiết:**
- Nếu cả $n$ đường thẳng cắt nhau từng đôi một và không đồng quy, số giao điểm là:
  $$\dfrac{n(n - 1)}{2}.$$
- Có $4$ đường thẳng đồng quy tại $A$:
  - Bình thường $4$ đường thẳng này tạo ra $\dfrac{4 \cdot 3}{2} = 6$ giao điểm phân biệt.
  - Nay chúng chỉ tạo ra $1$ giao điểm duy nhất tại $A.$
  - Số giao điểm giảm đi là: $6 - 1 = 5$ giao điểm.
- Theo bài ra, tổng số giao điểm thực tế là $40$:
  $$\dfrac{n(n - 1)}{2} - 5 = 40 \iff \dfrac{n(n - 1)}{2} = 45 \iff n(n - 1) = 90.$$
- Ta có $10 \cdot 9 = 90,$ suy ra $n = 10.$
Vậy có $10$ đường thẳng.

---

### Chuyên đề 5: Cấu hình hình học tối ưu trong bài toán trồng cây

**Bài toán 5:**
Có $12$ cây ăn quả, người ta muốn trồng thành $6$ hàng, sao cho mỗi hàng có đúng $4$ cây. Hãy tìm một phương án hình học để giải quyết bài toán trên.

**Lời giải chi tiết:**
- Phân tích:
  - Nếu các hàng không chung cây nào thì $6$ hàng cần $6 \cdot 4 = 24$ cây.
  - Thực tế chỉ có $12$ cây, nghĩa là trung bình mỗi cây phải thuộc $24 : 12 = 2$ hàng (mỗi cây là giao điểm của hai hàng).
- Phương án thiết kế:
  - Ta dựng hai hình tam giác lồng nhau: Một tam giác lớn $ABC$ và một tam giác nhỏ $A'B'C'$ ngược chiều đặt lồng vào nhau tạo thành hình **ngôi sao David (ngôi sao 6 cánh)**.
  - Sáu đường thẳng chính là $6$ đường thẳng chứa $6$ cạnh của hai tam giác.
  - Các cây được đặt tại:
    - $6$ đỉnh của hai tam giác.
    - $6$ giao điểm cắt nhau giữa các cạnh của hai tam giác.
  - Tổng số cây: $6 + 6 = 12$ cây.
  - Mỗi đường thẳng cạnh chứa đúng $2$ đỉnh và $2$ giao điểm $\implies$ mỗi hàng có đúng $4$ cây.
Đây là phương án bố trí hoàn hảo thỏa mãn yêu cầu đề bài.

---

## E. Bộ câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Kí hiệu nào sau đây diễn đạt ĐÚNG quan hệ điểm $A$ nằm trên đường thẳng $d$?'
options:
  - 'd ∈ A'
  - 'A ∈ d'
  - 'A ∥ d'
  - 'd ⊂ A'
answer: 2
explanation: 'Quy ước điểm thuộc đường thẳng được viết là A ∈ d.'
```

```quiz
type: choice
question: 'Qua hai điểm phân biệt $A$ và $B,$ ta vẽ được bao nhiêu đường thẳng?'
options:
  - 'Vô số'
  - '2'
  - '1'
  - '0'
answer: 3
explanation: 'Tiên đề cơ bản: Qua hai điểm phân biệt có một và chỉ một đường thẳng.'
```

```quiz
type: choice
question: 'Hai đường thẳng song song là hai đường thẳng:'
options:
  - 'Có đúng 1 điểm chung'
  - 'Không có điểm chung nào'
  - 'Có vô số điểm chung'
  - 'Trùng nhau'
answer: 2
explanation: 'Hai đường thẳng song song là hai đường thẳng không có bất kỳ điểm chung nào.'
```

```quiz
type: choice
question: 'Trong ba điểm thẳng hàng, có bao nhiêu điểm nằm giữa hai điểm còn lại?'
options:
  - 'Có 1 và chỉ 1 điểm'
  - 'Có 2 điểm'
  - 'Có 3 điểm'
  - 'Không có điểm nào'
answer: 1
explanation: 'Trong ba điểm thẳng hàng, luôn có một và chỉ một điểm nằm giữa hai điểm còn lại.'
```

```quiz
type: choice
question: 'Cho 5 điểm phân biệt trong đó không có 3 điểm nào thẳng hàng. Số đường thẳng vẽ được là:'
options:
  - '5'
  - '10'
  - '20'
  - '15'
answer: 2
explanation: 'Số đường thẳng = 5 * 4 / 2 = 10 đường thẳng.'
```

```quiz
type: choice
question: 'Cho 4 đường thẳng đôi một cắt nhau và không có 3 đường nào đồng quy. Số giao điểm là:'
options:
  - '4'
  - '6'
  - '8'
  - '12'
answer: 2
explanation: 'Số giao điểm = 4 * 3 / 2 = 6 giao điểm.'
```

```quiz
type: choice
question: 'Cho ba điểm $M, N, P$ thẳng hàng. Số đường thẳng phân biệt đi qua các cặp điểm là:'
options:
  - '3'
  - '2'
  - '1'
  - 'Vô số'
answer: 3
explanation: 'Ba điểm thẳng hàng cùng thuộc một đường thẳng duy nhất MNP.'
```

```quiz
type: choice
question: 'Có bao nhiêu đường thẳng đi qua một điểm $O$ cho trước?'
options:
  - '1'
  - '2'
  - 'Vô số'
  - '0'
answer: 3
explanation: 'Qua một điểm cho trước có vô số đường thẳng.'
```

```quiz
type: choice
question: 'Cho $n$ điểm phân biệt không có 3 điểm thẳng hàng. Vẽ được 36 đường thẳng. Giá trị của $n$ là:'
options:
  - '8'
  - '9'
  - '10'
  - '12'
answer: 2
explanation: 'n(n - 1)/2 = 36 => n(n - 1) = 72 => n = 9.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - 'Đường thẳng không bị giới hạn về hai phía'
  - 'Điểm không có kích thước'
  - 'Hai đường thẳng phân biệt hoặc cắt nhau hoặc song song'
  - 'Qua ba điểm bất kì luôn vẽ được một đường thẳng đi qua cả ba điểm'
answer: 4
explanation: 'Chỉ khi ba điểm thẳng hàng mới vẽ được một đường thẳng đi qua cả ba điểm.'
```

---

## F. Đề kiểm tra 15 phút đánh giá năng lực (Có ma trận & lời giải)

### Đề kiểm tra 15 phút

**Phần I: Trắc nghiệm (3.0 điểm — Mỗi câu 0.75 điểm)**

**Câu 1:** Đặt tên cho điểm người ta dùng:
A. Chữ cái in hoa ($A, B, C,\dots$)
B. Chữ cái in thường ($a, b, c,\dots$)
C. Chữ số ($1, 2, 3,\dots$)
D. Ký hiệu La Mã

**Câu 2:** Hai đường thẳng phân biệt có thể có nhiều nhất bao nhiêu điểm chung?
A. $0$
B. $1$
C. $2$
D. Vô số

**Câu 3:** Cho $4$ điểm phân biệt trong đó có đúng $3$ điểm thẳng hàng. Số đường thẳng vẽ được là:
A. $6$
B. $4$
C. $3$
D. $5$

**Câu 4:** Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì:
A. Ba điểm $A, M, B$ không thẳng hàng
B. Ba điểm $A, M, B$ thẳng hàng
C. $M$ trùng với $A$
D. $A$ nằm giữa $M$ và $B$

---

**Phần II: Tự luận (7.0 điểm)**

**Bài 1 (2.0 điểm):**
Vẽ đường thẳng $d.$ Lấy hai điểm $A, B$ thuộc đường thẳng $d$ và điểm $C$ không thuộc đường thẳng $d.$
a) Viết các khẳng định đúng dùng ký hiệu $\in$ hoặc $\notin.$
b) Vẽ tất cả các đường thẳng đi qua hai trong ba điểm $A, B, C.$ Có bao nhiêu đường thẳng? Kể tên.

**Bài 2 (2.0 điểm):**
Cho ba đường thẳng $a, b, c$ đôi một cắt nhau tại ba điểm phân biệt $M, N, P.$
a) Vẽ hình minh họa.
b) Điểm $M$ thuộc những đường thẳng nào? Điểm $P$ không thuộc đường thẳng nào?

**Bài 3 (2.0 điểm):**
Cho $7$ điểm phân biệt trong đó không có ba điểm nào thẳng hàng.
a) Tính số đường thẳng vẽ được đi qua các cặp điểm.
b) Nếu có đúng $4$ điểm trong số đó thẳng hàng thì vẽ được bao nhiêu đường thẳng?

**Bài 4 (1.0 điểm — Vận dụng cao):**
Cho $20$ đường thẳng phân biệt, trong đó bất kì hai đường thẳng nào cũng cắt nhau và không có ba đường thẳng nào đồng quy. Tính tổng số giao điểm tạo thành.

---

### Đáp án và biểu điểm chi tiết

**Phần I: Trắc nghiệm (3.0 điểm)**
- Câu 1: **A** (Chữ cái in hoa). *(0.75 điểm)*
- Câu 2: **B** ($1$ điểm chung). *(0.75 điểm)*
- Câu 3: **B** ($4$ đường thẳng: $1$ đường chứa $3$ điểm thẳng hàng $+ 3$ đường nối điểm ngoài với $3$ điểm). *(0.75 điểm)*
- Câu 4: **B** (Ba điểm thẳng hàng). *(0.75 điểm)*

**Phần II: Tự luận (7.0 điểm)**
- **Bài 1 (2.0 điểm):**
  - a) $A \in d;\; B \in d;\; C \notin d.$ *(1.0 điểm)*
  - b) Vì $A, B \in d$ nên đường thẳng đi qua $A, B$ chính là $d.$
       Nối $C$ với $A$ được đường thẳng $CA.$
       Nối $C$ với $B$ được đường thẳng $CB.$
       Tổng cộng có **$3$ đường thẳng**: $d$ (hay $AB$), $CA, CB.$ *(1.0 điểm)*
- **Bài 2 (2.0 điểm):**
  - a) Vẽ ba đường thẳng cắt nhau tạo thành hình tam giác $MNP.$ *(1.0 điểm)*
  - b) Giả sử $M$ là giao điểm của $a$ và $b$ thì $M \in a$ và $M \in b.$
       Điểm $P$ là giao điểm của $b$ và $c$ nên $P \notin a.$ *(1.0 điểm)*
- **Bài 3 (2.0 điểm):**
  - a) Số đường thẳng: $\dfrac{7 \cdot 6}{2} = 21$ đường thẳng. *(1.0 điểm)*
  - b) Khi có $4$ điểm thẳng hàng:
       Số đường thẳng giảm đi: $\dfrac{4 \cdot 3}{2} - 1 = 6 - 1 = 5.$
       Số đường thẳng còn lại: $21 - 5 = 16$ đường thẳng. *(1.0 điểm)*
- **Bài 4 (1.0 điểm):**
  - Số giao điểm của $20$ đường thẳng không đồng quy:
    $$G = \dfrac{20 \cdot 19}{2} = 190\text{ giao điểm}.$$ *(1.0 điểm)*
