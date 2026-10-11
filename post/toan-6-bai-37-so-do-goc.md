---
title: 'Toán 6 Bài 37: Số đo góc - Các loại góc, cách đo và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 6 Bài 37 Số đo góc: thước đo độ, phân loại 4 loại góc (nhọn, vuông, tù, bẹt), so sánh góc, bài toán góc giữa hai kim đồng hồ và 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học
  - Số đo góc
  - Góc nhọn
  - Góc vuông
  - Góc tù
  - Góc bẹt
  - Kết nối tri thức
grade: 6
---

# Bài 37. Số đo góc

Ở bài học trước, chúng ta đã làm quen với góc như một hình hình học gồm hai tia chung gốc. Nhưng làm thế nào để biết một chiếc quạt đang xòe rộng bao nhiêu? Làm thế nào để phân biệt độ dốc của mái nhà kiểu Thái với mái bằng hiện đại? Hay làm sao để người thợ mộc biết chắc chắn hai thanh gỗ đã ghép vuông vắn với nhau? Để trả lời những câu hỏi đó, chúng ta cần gán cho mỗi góc một giá trị định lượng cụ thể — đó chính là **Số đo góc**.

Số đo góc là chiếc cầu nối giữa hình học thuần túy và các ngành khoa học ứng dụng: từ thiên văn học xác định vị trí các chòm sao, hoa tiêu định vị tàu thuyền trên đại dương, cho đến thiết kế đồ họa 3D và lập trình robot chuyển động.

Bài học này sẽ hướng dẫn các em sử dụng thước đo góc chính xác, phân loại thành thạo $4$ loại góc cơ bản (nhọn, vuông, tù, bẹt), giải quyết bài toán góc chuyển động của kim đồng hồ và chinh phục $5$ chuyên đề bồi dưỡng học sinh giỏi nâng cao độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 37: SỐ ĐO GÓC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đơn vị & Giới hạn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Đơn vị: độ ($^\circ$).<br>• Mỗi góc có số đo dương $\le 180^\circ$.<br>• Góc bẹt có số đo đúng bằng $180^\circ$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Bốn loại góc cơ bản</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Góc nhọn: $0^\circ &lt; \alpha &lt; 90^\circ$.<br>• Góc vuông: $\alpha = 90^\circ$.<br>• Góc tù: $90^\circ &lt; \alpha &lt; 180^\circ$.<br>• Góc bẹt: $\alpha = 180^\circ$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. So sánh hai góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Bằng nhau nếu số đo bằng nhau.<br>• Góc nào có số đo lớn hơn thì góc đó lớn hơn.<br>Thứ tự: Nhọn &lt; Vuông &lt; Tù &lt; Bẹt.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Góc kim đồng hồ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Mặt đồng hồ chia $12$ khoảng số, mỗi khoảng ứng với $360^\circ : 12 = 30^\circ$.<br>Lúc $3$ giờ: $90^\circ$; lúc $6$ giờ: $180^\circ$.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Trực giác về độ mở của góc (5–7 phút)

Hãy bắt đầu bài học bằng 5 câu hỏi tình huống:

**Câu 1:** Đơn vị chuẩn thường dùng để đo độ dài là mét ($\text{m}$), xăng-ti-mét ($\text{cm}$). Vậy đơn vị chuẩn để đo độ lớn của góc là gì? Kí hiệu như thế nào?
- *Trả lời:* Đơn vị chuẩn để đo số đo góc là **độ**, kí hiệu là $^\circ$ (ví dụ: $45^\circ, 90^\circ, 180^\circ$).

**Câu 2:** Hãy quan sát một chiếc thước ê-ke tam giác quen thuộc trong bộ đồ dùng học tập:
- Góc lớn nhất của chiếc ê-ke là góc gì? Số đo của nó bằng bao nhiêu độ?
- *Trả lời:* Đó là **góc vuông**, có số đo bằng $90^\circ.$

**Câu 3:** Khi hai cạnh của một góc mở rộng dần từ vị trí trùng nhau ra hai phía đối diện để tạo thành một đường thẳng, số đo của góc thay đổi như thế nào?
- *Trả lời:* Số đo của góc tăng dần từ $0^\circ$ lên tới số đo lớn nhất là $180^\circ$ (góc bẹt).

**Câu 4:** Khi đo góc bằng thước đo góc hình bán nguyệt, ta cần đặt tâm của thước và mép thước ở vị trí nào?
- *Trả lời:* Tâm của thước phải đặt trùng với **đỉnh** của góc; một cạnh của góc phải đi qua **vạch số $0^\circ$** của thước.

**Câu 5:** Lúc $1$ giờ đúng, khoảng cách giữa kim giờ và kim phút trên mặt đồng hồ ứng với bao nhiêu độ?
- *Trả lời:* Toàn bộ vòng tròn đồng hồ ứng với $360^\circ,$ chia làm $12$ khoảng số bằng nhau. Một khoảng số ứng với $360^\circ : 12 = 30^\circ.$ Lúc $1$ giờ đúng, hai kim cách nhau đúng $1$ khoảng số nên tạo thành góc $30^\circ.$

---

## I. Lý thuyết trọng tâm

### 1. Số đo góc và thước đo góc

> [!NOTE]
> **Quy ước về số đo góc:**
> - Mỗi góc có một số đo xác định, luôn là một số dương.
> - Đơn vị đo góc là **độ**, kí hiệu là $^\circ.$
> - Số đo của một góc trong chương trình Toán 6 không vượt quá $180^\circ$:
>   $$0^\circ < \text{Số đo góc} \le 180^\circ.$$
> - **Góc bẹt** có số đo đúng bằng $180^\circ.$

Dụng cụ thông dụng nhất để đo góc là **thước đo góc** (thước đo độ). Thước có dạng nửa hình tròn được chia đều thành $180$ phần bằng nhau, mỗi phần ứng với $1^\circ,$ từ vạch $0^\circ$ đến vạch $180^\circ.$ Trên thước thường có hai vòng số: một vòng theo chiều kim đồng hồ và một vòng ngược chiều kim đồng hồ.

```text
                      90°
                 120°      60°
             150°              30°
           180°──────────────────0°
                     Tâm O
```

#### Các bước đo góc $\widehat{xOy}$ bằng thước đo góc:
- **Bước 1:** Đặt thước sao cho **tâm của thước trùng với đỉnh $O$** của góc.
- **Bước 2:** Xoay thước sao cho một cạnh của góc (chẳng hạn tia $Ox$) **đi qua vạch $0^\circ$** của thước.
- **Bước 3:** Quan sát cạnh còn lại (tia $Oy$) đi qua vạch nào trên thang đo bắt đầu từ vạch $0^\circ$ nói trên. Đó chính là số đo của góc $\widehat{xOy}.$

---

### 2. Phân loại 4 loại góc cơ bản

Dựa vào số đo, mọi góc (không vượt quá $180^\circ$) được chia thành $4$ loại sau:

| Loại góc | Điều kiện số đo | Hình dạng trực quan |
| :---: | :---: | :---: |
| **Góc nhọn** | $0^\circ < \alpha < 90^\circ$ | Bé hơn góc vuông (độ mở hẹp) |
| **Góc vuông** | $\alpha = 90^\circ$ | Bằng một nửa góc bẹt (kí hiệu góc vuông $\llcorner$) |
| **Góc tù** | $90^\circ < \alpha < 180^\circ$ | Lớn hơn góc vuông, nhỏ hơn góc bẹt |
| **Góc bẹt** | $\alpha = 180^\circ$ | Hai cạnh tạo thành một đường thẳng |

```text
       Góc nhọn (< 90°)       Góc vuông (90°)       Góc tù (> 90°, < 180°)     Góc bẹt (180°)
              /                      |                      \
             /                       |                       \
            /                        |                        \
           ●───────>                ●───────>                 ●───────>     <───────●───────>
           O                        O                         O                     O
```

> [!IMPORTANT]
> **Thứ tự độ mở tăng dần của các góc:**
> $$\text{Góc nhọn} < \text{Góc vuông} < \text{Góc tù} < \text{Góc bẹt}.$$

---

### 3. So sánh hai góc

Muốn so sánh hai góc, ta so sánh số đo góc của chúng:

- Hai góc bằng nhau nếu chúng có số đo bằng nhau:
  $$\widehat{A} = \widehat{B} \iff \text{Số đo góc } A = \text{Số đo góc } B.$$
- Góc nào có số đo lớn hơn thì góc đó lớn hơn:
  $$\widehat{A} > \widehat{B} \iff \text{Số đo góc } A > \text{Số đo góc } B.$$

---

### 4. Góc tạo bởi hai kim đồng hồ

Mặt đồng hồ tròn chia làm $12$ khoảng cách số (từ số $1$ đến số $12$).
- Một vòng tròn tương ứng với hai góc bẹt ghép lại: $360^\circ.$
- Mỗi khoảng cách giữa hai chữ số liên tiếp ứng với:
  $$360^\circ : 12 = 30^\circ.$$
- Khi đồng hồ chỉ $h$ giờ đúng ($1 \le h \le 12$), kim phút chỉ đúng số $12,$ kim giờ chỉ đúng số $h.$
- Số khoảng cách ngắn giữa hai kim là $k$ khoảng. Số đo góc giữa hai kim là:
  $$\alpha = k \cdot 30^\circ.$$

Bảng số đo góc giữa hai kim lúc các giờ đúng:

| Thời điểm | Số khoảng cách | Số đo góc | Phân loại góc |
| :---: | :---: | :---: | :---: |
| $1$ giờ hoặc $11$ giờ | $1$ | $1 \cdot 30^\circ = 30^\circ$ | Góc nhọn |
| $2$ giờ hoặc $10$ giờ | $2$ | $2 \cdot 30^\circ = 60^\circ$ | Góc nhọn |
| $3$ giờ hoặc $9$ giờ | $3$ | $3 \cdot 30^\circ = 90^\circ$ | Góc vuông |
| $4$ giờ hoặc $8$ giờ | $4$ | $4 \cdot 30^\circ = 120^\circ$ | Góc tù |
| $5$ giờ hoặc $7$ giờ | $5$ | $5 \cdot 30^\circ = 150^\circ$ | Góc tù |
| $6$ giờ | $6$ | $6 \cdot 30^\circ = 180^\circ$ | Góc bẹt |
| $12$ giờ | $0$ | Hai kim trùng nhau | Góc $0^\circ$ (hai tia trùng nhau) |

---

> [!WARNING]
> ### Các bẫy và sai sót phổ biến:
> 1. **Đọc nhầm thang đo thước đo góc:** Thước đo góc có hai vòng số ($0^\circ \to 180^\circ$ và $180^\circ \to 0^\circ$). Nếu cạnh xuất phát ở vạch $0^\circ$ của vòng trong mà học sinh lại đọc số đo ở vòng ngoài sẽ ra góc bù (ví dụ góc nhọn $40^\circ$ lại đọc thành góc tù $140^\circ$). Luôn kiểm tra trực giác xem góc đó nhọn hay tù trước khi ghi kết quả!
> 2. **Nhầm lẫn giữa góc vuông và góc tù:** Góc $90^\circ$ là góc vuông, tuyệt đối không phải là góc tù. Góc tù bắt buộc phải **lớn hơn $90^\circ$**.
> 3. **Nhầm góc lúc giờ rưỡi trên đồng hồ:** Lúc $6$ giờ $30$ phút, kim phút chỉ số $6,$ nhưng kim giờ đã đi được một nửa quãng đường giữa số $6$ và số $7.$ Do đó hai kim không trùng nhau mà tạo thành góc $15^\circ$ (góc nhọn)!

---

## II. Các dạng bài tập điển hình

### Dạng 1: Đọc số đo góc và phân loại góc

#### Phương pháp giải:
- Xác định cạnh nằm ở vạch $0^\circ,$ chọn đúng dãy số trên thước đo góc.
- Đọc vạch chỉ của cạnh thứ hai.
- Phân loại:
  - $\alpha < 90^\circ \implies$ Góc nhọn.
  - $\alpha = 90^\circ \implies$ Góc vuông.
  - $90^\circ < \alpha < 180^\circ \implies$ Góc tù.
  - $\alpha = 180^\circ \implies$ Góc bẹt.

---

#### Ví dụ 1:
Cho các góc có số đo lần lượt như sau:
$$\widehat{A} = 42^\circ;\quad \widehat{B} = 90^\circ;\quad \widehat{C} = 135^\circ;\quad \widehat{D} = 180^\circ;\quad \widehat{E} = 89^\circ;\quad \widehat{F} = 91^\circ.$$
Hãy phân loại từng góc trên vào các nhóm: góc nhọn, góc vuông, góc tù, góc bẹt.

**Lời giải:**
- **Góc nhọn** ($0^\circ < \alpha < 90^\circ$): $\widehat{A} = 42^\circ$ và $\widehat{E} = 89^\circ.$
- **Góc vuông** ($\alpha = 90^\circ$): $\widehat{B} = 90^\circ.$
- **Góc tù** ($90^\circ < \alpha < 180^\circ$): $\widehat{C} = 135^\circ$ và $\widehat{F} = 91^\circ.$
- **Góc bẹt** ($\alpha = 180^\circ$): $\widehat{D} = 180^\circ.$

---

#### Bài tập tự luyện Dạng 1:
- **Bài 1.1:** Trong các số đo sau: $15^\circ,\; 90^\circ,\; 108^\circ,\; 180^\circ,\; 75^\circ,\; 179^\circ,$ số đo nào là của góc tù?
  *(Đáp số: $108^\circ$ và $179^\circ$).*

---

### Dạng 2: So sánh và sắp xếp thứ tự các góc

#### Phương pháp giải:
- Muốn so sánh hai hay nhiều góc, ta so sánh các số đo góc tương ứng của chúng.
- Sắp xếp các số đo theo thứ tự tăng dần hoặc giảm dần theo yêu cầu đề bài.

---

#### Ví dụ 2:
Cho tam giác $MNP$ có số đo ba góc lần lượt là:
$$\widehat{M} = 70^\circ;\quad \widehat{N} = 55^\circ;\quad \widehat{P} = 55^\circ.$$
a) So sánh hai góc $\widehat{N}$ và $\widehat{P}.$
b) So sánh góc $\widehat{M}$ với góc $\widehat{N}.$
c) Sắp xếp ba góc trên theo thứ tự số đo giảm dần.

**Lời giải:**
a) Vì $55^\circ = 55^\circ$ nên $\widehat{N} = \widehat{P}.$
b) Vì $70^\circ > 55^\circ$ nên $\widehat{M} > \widehat{N}.$
c) Ta có: $70^\circ > 55^\circ = 55^\circ.$
Thứ tự số đo giảm dần là:
$$\widehat{M} > \widehat{N} = \widehat{P}.$$

---

#### Bài tập tự luyện Dạng 2:
- **Bài 2.1:** Sắp xếp các góc sau theo thứ tự tăng dần: $\widehat{x} = 115^\circ,\; \widehat{y} = 48^\circ,\; \widehat{z} = 180^\circ,\; \widehat{t} = 90^\circ,\; \widehat{u} = 65^\circ.$
  *(Đáp số: $\widehat{y} < \widehat{u} < \widehat{t} < \widehat{x} < \widehat{z}$).*

---

### Dạng 3: Bài toán góc giữa hai kim đồng hồ lúc giờ đúng

#### Phương pháp giải:
- Tính số khoảng chia ngắn nhất giữa kim giờ và kim phút trên mặt đồng hồ (mỗi khoảng giữa hai số liên tiếp tương ứng với $30^\circ$).
- Nhân số khoảng với $30^\circ$ để tìm số đo góc.
- Nếu số đo lớn hơn $180^\circ,$ lấy $360^\circ$ trừ đi số đo đó để được góc lồi ($\le 180^\circ$).

---

#### Ví dụ 3:
Tính số đo góc tạo bởi kim giờ và kim phút của đồng hồ tại các thời điểm sau và cho biết đó là loại góc nào:
a) Lúc $2$ giờ đúng.
b) Lúc $5$ giờ đúng.
c) Lúc $8$ giờ đúng.

**Lời giải:**
a) **Lúc $2$ giờ đúng:**
Kim phút chỉ số $12,$ kim giờ chỉ số $2.$
Khoảng cách giữa hai kim là $2$ khoảng số.
Số đo góc là:
$$2 \cdot 30^\circ = 60^\circ.$$
Vì $0^\circ < 60^\circ < 90^\circ$ nên đây là **góc nhọn**.

b) **Lúc $5$ giờ đúng:**
Kim phút chỉ số $12,$ kim giờ chỉ số $5.$
Khoảng cách giữa hai kim là $5$ khoảng số.
Số đo góc là:
$$5 \cdot 30^\circ = 150^\circ.$$
Vì $90^\circ < 150^\circ < 180^\circ$ nên đây là **góc tù**.

c) **Lúc $8$ giờ đúng:**
Kim phút chỉ số $12,$ kim giờ chỉ số $8.$
Khoảng cách ngắn nhất giữa hai kim (từ số $8$ đến số $12$) là $12 - 8 = 4$ khoảng số.
Số đo góc tạo bởi hai kim là:
$$4 \cdot 30^\circ = 120^\circ.$$
Vì $90^\circ < 120^\circ < 180^\circ$ nên đây là **góc tù**.

---

### Dạng 4: Điểm nằm trong góc và quan hệ số đo góc

#### Phương pháp giải:
- Nếu tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ thì:
  $$\widehat{xOy} + \widehat{yOz} = \widehat{xOz}.$$
- Từ hệ thức này, biết số đo của hai góc thì tính được góc còn lại:
  $$\widehat{xOy} = \widehat{xOz} - \widehat{yOz}.$$

---

#### Ví dụ 4:
Cho góc $\widehat{xOz} = 110^\circ.$ Tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ sao cho $\widehat{xOy} = 45^\circ.$
a) Tính số đo góc $\widehat{yOz}.$
b) Góc $\widehat{yOz}$ là góc gì?

**Lời giải:**
a) Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên ta có hệ thức cộng góc:
$$\widehat{xOy} + \widehat{yOz} = \widehat{xOz}.$$
Thay số:
$$45^\circ + \widehat{yOz} = 110^\circ \implies \widehat{yOz} = 110^\circ - 45^\circ = 65^\circ.$$
b) Vì $0^\circ < 65^\circ < 90^\circ$ nên $\widehat{yOz}$ là **góc nhọn**.

---

### Dạng 5: Bài toán mô hình hóa góc trong đời sống

#### Ví dụ 5:
Một chiếc cầu trượt ngoài công viên nước được thiết kế với máng trượt nghiêng một góc $\alpha = 32^\circ$ so với mặt nước phẳng. Trong khi đó, bậc thang leo lên cầu trượt nghiêng một góc $\beta = 68^\circ$ so với mặt phẳng nằm ngang.
a) Mỗi góc $\alpha$ và $\beta$ thuộc loại góc nào?
b) Giữa máng trượt và bậc thang, phần nào dốc hơn (có góc nghiêng lớn hơn so với mặt ngang)?

**Lời giải:**
a) Vì $0^\circ < 32^\circ < 90^\circ$ và $0^\circ < 68^\circ < 90^\circ$ nên cả hai góc $\alpha$ và $\beta$ đều là **góc nhọn**.
b) Ta thấy: $68^\circ > 32^\circ,$ do đó $\beta > \alpha.$
Vậy bậc thang leo lên cầu trượt dốc hơn máng trượt nước.

---

## III. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Công thức tổng quát tính góc giữa hai kim đồng hồ lúc $h$ giờ $m$ phút

Trong chuyển động thực tế của đồng hồ:
- Kim phút quay hết $360^\circ$ trong $60$ phút $\implies$ mỗi phút kim phút quay được:
  $$360^\circ : 60 = 6^\circ/\text{phút}.$$
- Kim giờ quay hết $30^\circ$ trong $60$ phút $\implies$ mỗi phút kim giờ quay được:
  $$30^\circ : 60 = 0{,}5^\circ/\text{phút}.$$

> [!IMPORTANT]
> **Công thức tính góc giữa hai kim lúc $h$ giờ $m$ phút:**
> Coi mốc $0^\circ$ tại vị trí số $12$:
> - Tọa độ góc của kim giờ là: $\theta_{\text{giờ}} = 30^\circ \cdot h + 0{,}5^\circ \cdot m.$
> - Tọa độ góc của kim phút là: $\theta_{\text{phút}} = 6^\circ \cdot m.$
> - Góc giữa hai kim là:
>   $$\Delta \theta = |\theta_{\text{giờ}} - \theta_{\text{phút}}| = |30^\circ \cdot h - 5{,}5^\circ \cdot m|.$$
> *(Nếu $\Delta \theta > 180^\circ,$ góc nhỏ giữa hai kim là $360^\circ - \Delta \theta$).*

#### Bài toán áp dụng:
Tính góc tạo bởi kim giờ và kim phút tại các thời điểm:
a) $4$ giờ $30$ phút.
b) $8$ giờ $20$ phút.

**Lời giải:**
a) **Lúc $4$ giờ $30$ phút ($h = 4, m = 30$):**
- Vị trí kim giờ: $\theta_{\text{giờ}} = 30^\circ \cdot 4 + 0{,}5^\circ \cdot 30 = 120^\circ + 15^\circ = 135^\circ.$
- Vị trí kim phút: $\theta_{\text{phút}} = 6^\circ \cdot 30 = 180^\circ.$
- Góc tạo bởi hai kim là:
  $$\Delta \theta = |135^\circ - 180^\circ| = 45^\circ\quad \text{(Góc nhọn)}.$$

b) **Lúc $8$ giờ $20$ phút ($h = 8, m = 20$):**
- Vị trí kim giờ: $\theta_{\text{giờ}} = 30^\circ \cdot 8 + 0{,}5^\circ \cdot 20 = 240^\circ + 10^\circ = 250^\circ.$
- Vị trí kim phút: $\theta_{\text{phút}} = 6^\circ \cdot 20 = 120^\circ.$
- Góc tạo bởi hai kim là:
  $$\Delta \theta = 250^\circ - 120^\circ = 130^\circ\quad \text{(Góc tù)}.$$

---

### Chuyên đề 2: Bài toán thời điểm hai kim đồng hồ trùng nhau và tạo góc bẹt

#### Bài toán:
Bây giờ là $6$ giờ đúng (hai kim tạo thành góc bẹt $180^\circ$).
a) Sau ít nhất bao lâu thì kim phút và kim giờ trùng khít lên nhau lần đầu tiên?
b) Trong khoảng thời gian từ $6$ giờ đúng đến $7$ giờ đúng, có thời điểm nào hai kim tạo thành góc vuông không? Nếu có thì vào lúc mấy giờ mấy phút?

**Lời giải:**
Vận tốc tương đối của kim phút so với kim giờ:
$$v = 6^\circ - 0{,}5^\circ = 5{,}5^\circ/\text{phút} = \dfrac{11}{2}^\circ/\text{phút}.$$

a) **Thời gian để hai kim trùng nhau:**
Lúc $6$ giờ, kim phút đang cách kim giờ $180^\circ.$
Để trùng nhau, kim phút phải đuổi kịp khoảng cách $180^\circ$:
$$t = \dfrac{180^\circ}{5{,}5^\circ/\text{phút}} = \dfrac{180}{\dfrac{11}{2}} = \dfrac{360}{11} = 32\dfrac{8}{11}\quad \text{phút}.$$
Vậy sau $32\dfrac{8}{11}$ phút (tức lúc $6$ giờ $32\dfrac{8}{11}$ phút), hai kim sẽ trùng khít nhau lần đầu tiên.

b) **Thời điểm tạo góc vuông giữa $6$ giờ và $7$ giờ:**
Lúc $6$ giờ, góc giữa hai kim là $180^\circ.$ Để tạo góc vuông ($90^\circ$):
- *Lần 1 (kim phút đuổi bớt góc lệch từ $180^\circ$ xuống $90^\circ$):*
  Góc cần đuổi là: $180^\circ - 90^\circ = 90^\circ.$
  $$t_1 = \dfrac{90}{\dfrac{11}{2}} = \dfrac{180}{11} = 16\dfrac{4}{11}\quad \text{phút}.$$
  Thời điểm này là lúc **$6$ giờ $16\dfrac{4}{11}$ phút**.
- *Lần 2 (kim phút vượt qua kim giờ một góc $90^\circ$):*
  Góc cần đi là: $180^\circ + 90^\circ = 270^\circ.$
  $$t_2 = \dfrac{270}{\dfrac{11}{2}} = \dfrac{540}{11} = 49\dfrac{1}{11}\quad \text{phút}.$$
  Thời điểm này là lúc **$6$ giờ $49\dfrac{1}{11}$ phút**.

---

### Chuyên đề 3: Tính chất góc kề bù và điều kiện ba điểm thẳng hàng

> [!NOTE]
> **Khái niệm:**
> - Hai góc có một cạnh chung và hai cạnh còn lại là hai tia đối nhau được gọi là **hai góc kề bù**.
> - Tổng số đo của hai góc kề bù luôn bằng số đo góc bẹt:
>   $$\widehat{AOB} + \widehat{BOC} = 180^\circ.$$

> [!IMPORTANT]
> **Phương pháp chứng minh ba điểm thẳng hàng:**
> Nếu điểm $O$ nằm giữa hai điểm $A, C$ trên cùng một nửa mặt phẳng bờ chứa tia $OB$ mà ta chứng minh được:
> $$\widehat{AOB} + \widehat{BOC} = 180^\circ,$$
> thì tia $OA$ và tia $OC$ là hai tia đối nhau, do đó ba điểm $A, O, C$ **thẳng hàng**.

#### Bài toán áp dụng:
Cho điểm $O$ thuộc đường thẳng $d.$ Trên cùng một nửa mặt phẳng bờ là đường thẳng $d,$ vẽ hai tia $Om$ và $On$ sao cho $\widehat{mOn} = 90^\circ.$ Biết góc tạo bởi tia $Om$ với một tia của đường thẳng $d$ là $35^\circ.$ Tính số đo góc tạo bởi tia $On$ với tia đối của tia đó.

**Lời giải:**
Gọi đường thẳng $d$ là đường thẳng $xy$ (với $Ox$ và $Oy$ là hai tia đối nhau).
Giả sử $\widehat{xOm} = 35^\circ.$
Vì tia $Om$ và $On$ cùng thuộc một nửa mặt phẳng bờ $xy$ và $\widehat{xOm} < \widehat{xOn}$ (do $\widehat{mOn} = 90^\circ$), nên tia $Om$ nằm giữa $Ox$ và $On.$
Do đó:
$$\widehat{xOn} = \widehat{xOm} + \widehat{mOn} = 35^\circ + 90^\circ = 125^\circ.$$
Vì $Ox$ và $Oy$ là hai tia đối nhau nên $\widehat{xOn}$ và $\widehat{nOy}$ là hai góc kề bù:
$$\widehat{xOn} + \widehat{nOy} = 180^\circ.$$
Suy ra:
$$\widehat{nOy} = 180^\circ - 125^\circ = 55^\circ.$$

---

### Chuyên đề 4: Bài toán cực trị tổng số đo góc trong cấu hình tia

#### Bài toán:
Cho góc vuông $\widehat{xOy} = 90^\circ.$ Lấy một điểm $M$ nằm trong góc $\widehat{xOy}.$ Vẽ các tia $Ox', Oy'$ lần lượt vuông góc với $OM$ (sao cho tia $Ox'$ và $Ox$ nằm về hai phía đối với $OM$; tia $Oy'$ và $Oy$ nằm về hai phía đối với $OM$).
Tính tổng số đo của hai góc $\widehat{xOx'}$ và $\widehat{yOy'}.$

**Lời giải:**
Vì điểm $M$ nằm trong góc $\widehat{xOy}$ nên tia $OM$ nằm giữa hai tia $Ox$ và $Oy.$
Đặt $\widehat{xOM} = \alpha$ và $\widehat{MOy} = \beta.$
Vì tia $OM$ nằm giữa $Ox$ và $Oy$ nên:
$$\alpha + \beta = \widehat{xOy} = 90^\circ.$$
Theo đề bài:
- Tia $Ox' \perp OM \implies \widehat{x'OM} = 90^\circ.$
  Vì tia $Ox$ nằm giữa $Ox'$ và $OM$ nên:
  $$\widehat{xOx'} = \widehat{x'OM} - \widehat{xOM} = 90^\circ - \alpha.$$
- Tia $Oy' \perp OM \implies \widehat{y'OM} = 90^\circ.$
  Vì tia $Oy$ nằm giữa $Oy'$ và $OM$ nên:
  $$\widehat{yOy'} = \widehat{y'OM} - \widehat{yOM} = 90^\circ - \beta.$$
Tổng số đo hai góc là:
$$\widehat{xOx'} + \widehat{yOy'} = (90^\circ - \alpha) + (90^\circ - \beta) = 180^\circ - (\alpha + \beta).$$
Thay $\alpha + \beta = 90^\circ$:
$$\widehat{xOx'} + \widehat{yOy'} = 180^\circ - 90^\circ = 90^\circ.$$
Kết quả này là một hằng số cố định, không phụ thuộc vào vị trí của điểm $M$ trong góc vuông $\widehat{xOy}!$

---

### Chuyên đề 5: Khảo sát số đo góc trong quang học và kiến trúc

#### Bài toán (Góc phản xạ ánh sáng):
Trong vật lý quang học, khi một tia sáng chiếu tới một mặt gương phẳng tại điểm $I,$ tia phản xạ tạo với tia tới một góc $\widehat{S IR}.$ Đường pháp tuyến $IN$ vuông góc với mặt gương tại $I$ đóng vai trò là tia phân giác, chia góc $\widehat{S IR}$ thành hai góc bằng nhau: góc tới $\widehat{S IN} = i$ và góc phản xạ $\widehat{N IR} = i'.$
a) Nếu tia tới tạo với mặt gương một góc $30^\circ,$ hãy tính số đo góc tới $i$ và góc phản xạ $i'.$
b) Tính góc hợp bởi tia tới và tia phản xạ $\widehat{S IR}.$ Đó là loại góc gì?

**Lời giải:**
a)
- Đường pháp tuyến $IN$ vuông góc với mặt gương nên góc giữa pháp tuyến và mặt gương là $90^\circ.$
- Góc tới là:
  $$i = 90^\circ - 30^\circ = 60^\circ.$$
- Theo định luật phản xạ ánh sáng, góc phản xạ bằng góc tới:
  $$i' = i = 60^\circ.$$

b)
- Góc hợp bởi tia tới và tia phản xạ là:
  $$\widehat{S IR} = i + i' = 60^\circ + 60^\circ = 120^\circ.$$
- Vì $90^\circ < 120^\circ < 180^\circ$ nên góc giữa tia tới và tia phản xạ là một **góc tù**.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác

```quiz
type: choice
question: 'Đơn vị đo góc thông dụng trong chương trình Toán 6 là:'
options:
  - 'Mét (m)'
  - 'Độ (°)'
  - 'Lít (l)'
  - 'Kilôgam (kg)'
answer: 2
explanation: 'Đơn vị đo góc chuẩn là độ, kí hiệu là °.'
```

```quiz
type: choice
question: 'Góc có số đo bằng 90° được gọi là:'
options:
  - 'Góc nhọn'
  - 'Góc vuông'
  - 'Góc tù'
  - 'Góc bẹt'
answer: 2
explanation: 'Theo định nghĩa: Góc có số đo bằng 90° là góc vuông.'
```

```quiz
type: choice
question: 'Góc tù là góc có số đo:'
options:
  - 'Nhỏ hơn 90°'
  - 'Bằng 90°'
  - 'Lớn hơn 90° và nhỏ hơn 180°'
  - 'Bằng 180°'
answer: 3
explanation: 'Góc tù có số đo lớn hơn 90° và nhỏ hơn 180°.'
```

```quiz
type: choice
question: 'Số đo của góc bẹt bằng:'
options:
  - '90°'
  - '100°'
  - '180°'
  - '360°'
answer: 3
explanation: 'Góc bẹt là góc tạo bởi hai tia đối nhau, có số đo bằng 180°.'
```

```quiz
type: choice
question: 'Lúc 3 giờ đúng, góc tạo bởi kim giờ và kim phút của đồng hồ là:'
options:
  - '30°'
  - '60°'
  - '90°'
  - '120°'
answer: 3
explanation: 'Lúc 3 giờ đúng, khoảng cách giữa kim phút (số 12) và kim giờ (số 3) là 3 khoảng: 3 * 30° = 90° (góc vuông).'
```

```quiz
type: choice
question: 'Cho góc xOy = 125°. Góc xOy thuộc loại góc nào?'
options:
  - 'Góc nhọn'
  - 'Góc vuông'
  - 'Góc tù'
  - 'Góc bẹt'
answer: 3
explanation: 'Vì 90° < 125° < 180° nên góc xOy là góc tù.'
```

```quiz
type: choice
question: 'Thứ tự sắp xếp nào sau đây là ĐÚNG theo độ mở tăng dần của các góc?'
options:
  - 'Góc nhọn < Góc vuông < Góc tù < Góc bẹt'
  - 'Góc vuông < Góc nhọn < Góc tù < Góc bẹt'
  - 'Góc bẹt < Góc tù < Góc vuông < Góc nhọn'
  - 'Góc nhọn < Góc tù < Góc vuông < Góc bẹt'
answer: 1
explanation: 'Độ mở tăng dần: Nhọn (< 90°) < Vuông (= 90°) < Tù (90° - 180°) < Bẹt (= 180°).'
```

```quiz
type: choice
question: 'Lúc 6 giờ đúng, kim giờ và kim phút tạo với nhau một góc bằng:'
options:
  - '90°'
  - '120°'
  - '150°'
  - '180°'
  - '0°'
answer: 4
explanation: 'Lúc 6 giờ đúng, kim phút chỉ số 12 và kim giờ chỉ số 6, tạo thành hai tia đối nhau nên số đo góc là 180°.'
```

```quiz
type: choice
question: 'Cho tia Ob nằm giữa hai tia Oa và Oc. Biết góc aOb = 35° và góc bOc = 45°. Số đo góc aOc là:'
options:
  - '10°'
  - '80°'
  - '70°'
  - '90°'
answer: 2
explanation: 'Vì Ob nằm giữa Oa và Oc nên góc aOc = góc aOb + góc bOc = 35° + 45° = 80°.'
```

```quiz
type: choice
question: 'Lúc 4 giờ đúng, góc giữa kim giờ và kim phút là:'
options:
  - '90°'
  - '100°'
  - '120°'
  - '150°'
answer: 3
explanation: 'Giữa số 12 và số 4 có 4 khoảng cách: 4 * 30° = 120°.'
```

---

## V. Đề kiểm tra 15 phút tự luyện có hướng dẫn chấm

### Phần 1: Trắc nghiệm (4 câu — 3,0 điểm)

**Câu 1 (0,75 điểm):** Góc có số đo $75^\circ$ là:
A. Góc nhọn
B. Góc vuông
C. Góc tù
D. Góc bẹt

**Câu 2 (0,75 điểm):** Góc có số đo lớn nhất trong các loại góc sau là:
A. Góc vuông
B. Góc tù
C. Góc nhọn
D. Góc bẹt

**Câu 3 (0,75 điểm):** Lúc $2$ giờ đúng, hai kim đồng hồ tạo thành góc:
A. $30^\circ$
B. $60^\circ$
C. $90^\circ$
D. $120^\circ$

**Câu 4 (0,75 điểm):** Cho $\widehat{xOy} = 50^\circ$ và $\widehat{mOn} = 50^\circ.$ Khẳng định nào sau đây là ĐÚNG?
A. $\widehat{xOy} > \widehat{mOn}$
B. $\widehat{xOy} < \widehat{mOn}$
C. $\widehat{xOy} = \widehat{mOn}$
D. Hai góc không thể so sánh được

---

### Phần 2: Tự luận (4 bài — 7,0 điểm)

**Bài 1 (2,0 điểm):**
Cho các góc có số đo sau: $35^\circ,\; 90^\circ,\; 110^\circ,\; 180^\circ,\; 88^\circ,\; 145^\circ.$
a) Chỉ ra các góc nhọn và các góc tù trong các số đo trên.
b) Sắp xếp tất cả các góc trên theo thứ tự số đo tăng dần.

**Bài 2 (2,0 điểm):**
Cho góc $\widehat{xOz} = 120^\circ.$ Tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ sao cho $\widehat{xOy} = 50^\circ.$
a) Tính số đo góc $\widehat{yOz}.$
b) Cho biết góc $\widehat{yOz}$ thuộc loại góc nào?

**Bài 3 (1,5 điểm):**
Tính số đo góc tạo bởi kim giờ và kim phút của chiếc đồng hồ treo tường tại các thời điểm:
a) Lúc $5$ giờ đúng.
b) Lúc $9$ giờ đúng.
c) Lúc $10$ giờ đúng.

**Bài 4 (1,5 điểm — Vận dụng cao):**
Tính chính xác số đo góc tạo bởi kim giờ và kim phút của đồng hồ vào thời điểm lúc **$8$ giờ $30$ phút**. Góc đó là góc nhọn hay góc tù?

---

### Đáp án và Thang điểm chi tiết

#### Phần 1: Trắc nghiệm (3,0 điểm)
- Câu 1: **A** (Góc nhọn). *(0,75 điểm)*
- Câu 2: **D** (Góc bẹt). *(0,75 điểm)*
- Câu 3: **B** ($2 \cdot 30^\circ = 60^\circ$). *(0,75 điểm)*
- Câu 4: **C** ($\widehat{xOy} = \widehat{mOn}$). *(0,75 điểm)*

#### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a)
  - Các góc nhọn: $35^\circ,\; 88^\circ.$ *(0,5 điểm)*
  - Các góc tù: $110^\circ,\; 145^\circ.$ *(0,5 điểm)*
- b) Sắp xếp thứ tự tăng dần:
  $$35^\circ < 88^\circ < 90^\circ < 110^\circ < 145^\circ < 180^\circ.$$ *(1,0 điểm)*

**Bài 2 (2,0 điểm):**
- a) Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên:
  $$\widehat{xOy} + \widehat{yOz} = \widehat{xOz}.$$ *(0,75 điểm)*
  Thay số:
  $$50^\circ + \widehat{yOz} = 120^\circ \implies \widehat{yOz} = 120^\circ - 50^\circ = 70^\circ.$$ *(0,75 điểm)*
- b) Vì $0^\circ < 70^\circ < 90^\circ$ nên $\widehat{yOz}$ là **góc nhọn**. *(0,5 điểm)*

**Bài 3 (1,5 điểm):**
- a) Lúc $5$ giờ: $5 \cdot 30^\circ = 150^\circ$ (góc tù). *(0,5 điểm)*
- b) Lúc $9$ giờ: $3 \cdot 30^\circ = 90^\circ$ (góc vuông). *(0,5 điểm)*
- c) Lúc $10$ giờ: $2 \cdot 30^\circ = 60^\circ$ (góc nhọn). *(0,5 điểm)*

**Bài 4 (1,5 điểm):**
- Lúc $8$ giờ $30$ phút:
  - Kim phút chỉ đúng số $6.$ *(0,25 điểm)*
  - Kim giờ nằm ở vị trí chính giữa số $8$ và số $9$ (đã đi được nửa khoảng $= 15^\circ$). *(0,5 điểm)*
- Khoảng cách giữa hai kim gồm $2$ khoảng số nguyên (từ số $6$ đến số $8$) và nửa khoảng:
  $$\Delta \theta = 2 \cdot 30^\circ + 15^\circ = 60^\circ + 15^\circ = 75^\circ.$$ *(0,5 điểm)*
- Vì $0^\circ < 75^\circ < 90^\circ$ nên góc tạo bởi hai kim là **góc nhọn**. *(0,25 điểm)*
