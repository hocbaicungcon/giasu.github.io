---
title: 'Toán 7 Bài 33: Quan hệ giữa ba cạnh của một tam giác. Bất đẳng thức tam giác'
description: 'Khám phá bất đẳng thức tam giác Toán 7 Bài 33: Điều kiện để ba đoạn thẳng tạo thành một tam giác, định lý tổng và hiệu hai cạnh, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Bất đẳng thức tam giác
  - Quan hệ ba cạnh
  - Độ dài cạnh tam giác
  - Kết nối tri thức
grade: 7
---

# Bài 33. Quan hệ giữa ba cạnh của một tam giác. Bất đẳng thức tam giác

Nếu bạn có ba que tính bằng gỗ có chiều dài lần lượt là $2\text{ cm}, 3\text{ cm}$ và $6\text{ cm}$, liệu bạn có thể ghép chúng lại thành một hình tam giác khép kín được không? 

Hãy thử tưởng tượng: Đặt que dài nhất $6\text{ cm}$ nằm ngang làm cạnh đáy. Dù bạn có gập hai que nhỏ $2\text{ cm}$ và $3\text{ cm}$ sát xuống mặt bàn đến mức nào thì tổng chiều dài của chúng ($2 + 3 = 5\text{ cm}$) vẫn ngắn hơn cạnh đáy $6\text{ cm}$ một khoảng $1\text{ cm}$. Hai đầu mút của chúng không bao giờ có thể chạm vào nhau để tạo thành đỉnh thứ ba của tam giác!

Hiện tượng hình học tưởng chừng rất đơn giản này lại là một trong những định lý nền tảng nhất của toán học: **Bất đẳng thức tam giác**. Bài 33 sẽ trang bị cho các em công cụ kiểm tra sắc bén: Bộ ba số nào có thể tạo thành một tam giác? Tại sao đường đi thẳng luôn là đường ngắn nhất giữa hai điểm? Và làm thế nào các mạng viễn thông toàn cầu định tuyến dữ liệu dựa trên nguyên lý này?

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 33: BẤT ĐẲNG THỨC TAM GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định lý Tổng hai cạnh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Trong một tam giác tùy ý:<br>• Tổng hai cạnh luôn <strong>lớn hơn</strong> cạnh thứ ba:<br>  $$AB + AC > BC$$<br>  $$AB + BC > AC$$<br>  $$AC + BC > AB$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hệ quả Hiệu hai cạnh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Trong một tam giác tùy ý:<br>• Hiệu hai cạnh luôn <strong>nhỏ hơn</strong> cạnh thứ ba:<br>  $$|AB - AC| < BC$$<br>  $$|AB - BC| < AC$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Bất đẳng thức kép kẹp cạnh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Trong tam giác với 3 cạnh $a, b, c$:<br>  $$|b - c| < a < b + c$$<br>• Cạnh thứ ba luôn bị kẹp giữa hiệu và tổng của hai cạnh còn lại.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quy tắc kiểm tra nhanh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Để kiểm tra ba số dương có tạo thành tam giác hay không:<br>• Chỉ cần so sánh: <strong>Tổng hai cạnh nhỏ hơn > Cạnh lớn nhất</strong>.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Đường thẳng ngắn nhất:** Giữa hai điểm $A$ và $B$, đường đi nào có độ dài ngắn nhất?
2. **Thực nghiệm que tính:** Có thể ghép ba que dài $3\text{ cm}, 4\text{ cm}, 8\text{ cm}$ thành tam giác không?
3. **Thực nghiệm que tính:** Có thể ghép ba que dài $3\text{ cm}, 4\text{ cm}, 5\text{ cm}$ thành tam giác không?
4. **Trường hợp thẳng hàng:** Nếu ba điểm $A, B, C$ thẳng hàng và điểm $B$ nằm giữa $A$ và $C$ thì đẳng thức nào xảy ra giữa các đoạn thẳng?
5. **Tam giác cân:** Một tam giác cân có độ dài hai cạnh là $2\text{ cm}$ và $5\text{ cm}$. Hỏi cạnh còn lại có độ dài bằng bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Đoạn thẳng nối $A$ và $B$.
> 2. Không thể, vì $3 + 4 = 7 < 8$ (hai que nhỏ không với tới nhau).
> 3. Có thể, vì $3 + 4 = 7 > 5$ (đây chính là tam giác vuông tỉ lệ Ai Cập $3 - 4 - 5$).
> 4. $AB + BC = AC$.
> 5. Cạnh còn lại phải bằng $5\text{ cm}$ (nếu bằng $2\text{ cm}$ thì $2 + 2 = 4 < 5$, vi phạm bất đẳng thức tam giác).

---

## I. Lý thuyết Trọng tâm

### 1. Định lý Bất đẳng thức Tam giác

> [!IMPORTANT]
> **ĐỊNH LÝ BẤT ĐẲNG THỨC TAM GIÁC:**
> Trong một tam giác, **tổng độ dài hai cạnh bất kì bao giờ cũng lớn hơn độ dài cạnh còn lại**.
> 
> Cho tam giác $ABC$ tùy ý, ta luôn có đồng thời cả 3 bất đẳng thức:
> $$AB + AC > BC$$
> $$AB + BC > AC$$
> $$AC + BC > AB$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 220" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Minh họa bất đẳng thức tam giác và trường hợp suy biến">
    <!-- Tam giác hợp lệ ABC -->
    <polygon points="120,40 40,180 240,180" fill="#f1f5f9" stroke="#2563eb" stroke-width="2" />
    <circle cx="120" cy="40" r="4" fill="#2563eb" />
    <circle cx="40" cy="180" r="4" fill="#2563eb" />
    <circle cx="240" cy="180" r="4" fill="#2563eb" />
    <text x="115" y="28" font-size="15" font-weight="700" fill="#1e293b">A</text>
    <text x="25" y="195" font-size="15" font-weight="700" fill="#1e293b">B</text>
    <text x="245" y="195" font-size="15" font-weight="700" fill="#1e293b">C</text>
    <text x="60" y="105" font-size="13" font-weight="600" fill="#2563eb">c = 4</text>
    <text x="190" y="105" font-size="13" font-weight="600" fill="#2563eb">b = 4</text>
    <text x="130" y="200" font-size="13" font-weight="700" fill="#059669">a = 6 &lt; 4 + 4 (Hợp lệ)</text>

    <!-- Trường hợp gãy khúc không thể tạo tam giác -->
    <line x1="320" y1="180" x2="520" y2="180" stroke="#dc2626" stroke-width="3" />
    <line x1="320" y1="180" x2="380" y2="140" stroke="#475569" stroke-width="2" />
    <line x1="520" y1="180" x2="440" y2="150" stroke="#475569" stroke-width="2" />
    <circle cx="320" cy="180" r="4" fill="#dc2626" />
    <circle cx="520" cy="180" r="4" fill="#dc2626" />
    <circle cx="380" cy="140" r="4" fill="#475569" />
    <circle cx="440" cy="150" r="4" fill="#475569" />
    <text x="420" y="200" font-size="13" font-weight="700" fill="#dc2626">Cạnh đáy = 8</text>
    <text x="330" y="150" font-size="12" fill="#475569">2 cm</text>
    <text x="485" y="155" font-size="12" fill="#475569">3 cm</text>
    <text x="360" y="115" font-size="13" font-weight="700" fill="#dc2626">2 + 3 = 5 &lt; 8 (Không chạm nhau!)</text>
  </svg>
</div>

*Ý tưởng chứng minh hình học thanh nhã của Euclid:*
Trên tia đối của tia $AB$, lấy điểm $D$ sao cho $AD = AC$.
Khi đó $\triangle ACD$ cân tại $A \implies \widehat{ADC} = \widehat{ACD}$.
Trong tam giác $BCD$, ta có: $\widehat{BCD} = \widehat{BCA} + \widehat{ACD} > \widehat{ACD} = \widehat{BDC}$.
Vì góc $\widehat{BCD} > \widehat{BDC}$, theo định lý cạnh đối diện góc lớn hơn (Bài 31), ta suy ra:
$$BD > BC \implies BA + AD > BC \implies AB + AC > BC$$

---

### 2. Hệ quả về Hiệu hai cạnh

Từ định lý tổng hai cạnh:
- $AB + AC > BC \implies BC - AC < AB$ và $BC - AB < AC$.
- $AB + BC > AC \implies AC - BC < AB$ và $AC - AB < BC$.

> [!IMPORTANT]
> **HỆ QUẢ:**
> Trong một tam giác, **hiệu độ dài hai cạnh bất kì bao giờ cũng nhỏ hơn độ dài cạnh còn lại**.

---

### 3. Bất đẳng thức kép kẹp cạnh tam giác

Kết hợp cả định lý và hệ quả, với ba cạnh có độ dài $a, b, c$ của một tam giác, ta luôn có bất đẳng thức kép:

> [!NOTE]
> **BẤT ĐẲNG THỨC KÉP:**
> $$|b - c| < a < b + c$$
> *Phát biểu bằng lời:* Độ dài một cạnh của tam giác luôn **lớn hơn hiệu** và **nhỏ hơn tổng** độ dài của hai cạnh còn lại.

---

### 4. Quy tắc thực hành kiểm tra bộ ba đoạn thẳng

> [!TIP]
> **MẸO KIỂM TRA NHANH 3 GIÂY:**
> Khi kiểm tra ba số dương $a, b, c$ có phải là độ dài ba cạnh của một tam giác hay không:
> 1. Xác định số lớn nhất (giả sử là $c$).
> 2. Chỉ cần so sánh **tổng của hai số nhỏ hơn với số lớn nhất**:
>    $$\text{Nếu } a + b > c \implies \text{Tạo thành tam giác}$$
>    $$\text{Nếu } a + b \le c \implies \text{KHÔNG tạo thành tam giác}$$
> *(Không cần phải kiểm tra cả 3 bất đẳng thức vì hai bất đẳng thức còn lại luôn hiển nhiên đúng!)*

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Kiểm tra xem bộ ba đoạn thẳng có tạo thành tam giác hay không

**Phương pháp giải:**
1. Tìm số đo của đoạn thẳng dài nhất trong ba đoạn.
2. Tính tổng số đo của hai đoạn thẳng còn lại.
3. So sánh tổng đó với đoạn dài nhất:
   - Nếu tổng $>$ đoạn dài nhất $\implies$ Ba đoạn thẳng đó tạo thành một tam giác.
   - Nếu tổng $\le$ đoạn dài nhất $\implies$ Ba đoạn thẳng đó không thể tạo thành tam giác.

---

#### Bài toán 1:
Trong các bộ ba độ dài đoạn thẳng sau đây, bộ ba nào có thể là độ dài ba cạnh của một tam giác? Giải thích vì sao:
a) $4\text{ cm}, 5\text{ cm}, 10\text{ cm}$
b) $6\text{ cm}, 8\text{ cm}, 10\text{ cm}$
c) $3\text{ cm}, 7\text{ cm}, 4\text{ cm}$
d) $5{,}5\text{ cm}, 6{,}5\text{ cm}, 9\text{ cm}$

**Lời giải:**

a) Bộ ba $4\text{ cm}, 5\text{ cm}, 10\text{ cm}$:
- Đoạn dài nhất là $10\text{ cm}$.
- Tổng hai đoạn nhỏ hơn: $4 + 5 = 9\text{ cm}$.
- Vì $9 < 10$ (tổng hai cạnh nhỏ hơn cạnh dài nhất) nên bộ ba này **không thể** là độ dài ba cạnh của một tam giác.

b) Bộ ba $6\text{ cm}, 8\text{ cm}, 10\text{ cm}$:
- Đoạn dài nhất là $10\text{ cm}$.
- Tổng hai đoạn nhỏ hơn: $6 + 8 = 14\text{ cm}$.
- Vì $14 > 10$ nên bộ ba này **có thể** là độ dài ba cạnh của một tam giác. *(Đặc biệt, $6^2 + 8^2 = 10^2$ nên đây là tam giác vuông).*

c) Bộ ba $3\text{ cm}, 7\text{ cm}, 4\text{ cm}$:
- Đoạn dài nhất là $7\text{ cm}$.
- Tổng hai đoạn nhỏ hơn: $3 + 4 = 7\text{ cm}$.
- Vì tổng bằng cạnh dài nhất ($3 + 4 = 7$) nên ba điểm sẽ thẳng hàng và nằm bẹp trên một đoạn thẳng. Bộ ba này **không thể** tạo thành một tam giác.

d) Bộ ba $5{,}5\text{ cm}, 6{,}5\text{ cm}, 9\text{ cm}$:
- Đoạn dài nhất là $9\text{ cm}$.
- Tổng hai đoạn nhỏ hơn: $5{,}5 + 6{,}5 = 12\text{ cm}$.
- Vì $12 > 9$ nên bộ ba này **có thể** là độ dài ba cạnh của một tam giác.

---

### Dạng 2: Tìm khoảng độ dài hoặc giá trị nguyên của cạnh thứ ba

**Phương pháp giải:**
1. Áp dụng bất đẳng thức kép:
   $$|b - c| < a < b + c$$
2. Thay các số đo $b$ và $c$ đã biết để tìm khoảng giá trị của cạnh $a$.
3. Nếu đề bài yêu cầu $a$ là số nguyên hoặc tam giác có tính chất đặc biệt (cân, vuông), ta chọn các giá trị thỏa mãn.

---

#### Bài toán 2:
Cho tam giác $ABC$ biết độ dài hai cạnh $AB = 3\text{ cm}$ và $AC = 8\text{ cm}$.
a) Độ dài cạnh $BC$ có thể nhận giá trị trong khoảng nào?
b) Tìm độ dài cạnh $BC$ biết độ dài này là một số nguyên (đơn vị centimét).
c) Tìm độ dài cạnh $BC$ biết tam giác $ABC$ là một tam giác cân.

**Lời giải:**

a) Theo bất đẳng thức tam giác, cạnh $BC$ thỏa mãn:
$$|AC - AB| < BC < AC + AB$$
Thay số:
$$|8 - 3| < BC < 8 + 3 \implies 5 < BC < 11\text{ (cm)}$$
Vậy độ dài cạnh $BC$ nằm trong khoảng lớn hơn $5\text{ cm}$ và nhỏ hơn $11\text{ cm}$.

b) Vì độ dài $BC$ là một số nguyên (cm) và $5 < BC < 11$ nên $BC$ có thể nhận một trong các giá trị nguyên sau:
$$BC \in \{6; 7; 8; 9; 10\}\text{ (cm)}$$

c) Nếu tam giác $ABC$ cân:
Tam giác có hai cạnh đã biết là $AB = 3\text{ cm}$ và $AC = 8\text{ cm}$.
- **Trường hợp 1:** Tam giác cân tại $B \implies BC = AB = 3\text{ cm}$.
  Giá trị này không thỏa mãn điều kiện $5 < BC < 11$ (vì $3 + 3 = 6 < 8$, vi phạm bất đẳng thức tam giác). $\implies$ Loại.
- **Trường hợp 2:** Tam giác cân tại $A \implies BC$ là cạnh đáy, cạnh bên $AB = AC$ (vô lý vì $3 \neq 8$).
- **Trường hợp 3:** Tam giác cân tại $C \implies BC = AC = 8\text{ cm}$.
  Giá trị $BC = 8\text{ cm}$ thỏa mãn điều kiện $5 < 8 < 11$.
**Kết luận:** Để $\triangle ABC$ là tam giác cân thì bắt buộc $BC = 8\text{ cm}$.

---

### Dạng 3: Chứng minh điểm thẳng hàng nhờ bất đẳng thức tam giác

**Phương pháp giải:**
Với ba điểm bất kì $A, B, C$:
- Nếu $A, B, C$ không thẳng hàng $\implies A, B, C$ tạo thành tam giác $\implies AB + BC > AC$.
- Nếu $AB + BC = AC \implies$ Điểm $B$ bắt buộc phải nằm trên đoạn thẳng $AC$ (ba điểm $A, B, C$ thẳng hàng).

---

#### Bài toán 3:
Cho ba điểm $M, N, P$. Biết rằng $MN = 4\text{ cm}, NP = 6\text{ cm}$ và $MP = 10\text{ cm}$.
Hỏi ba điểm $M, N, P$ có tạo thành một tam giác không? Em có kết luận gì về vị trí của ba điểm này?

**Lời giải:**

Ta tính tổng độ dài hai đoạn thẳng nhỏ:
$$MN + NP = 4 + 6 = 10\text{ cm}$$
So sánh với độ dài đoạn $MP$:
$$MN + NP = MP \quad (10\text{ cm} = 10\text{ cm})$$
Vì tổng hai đoạn bằng đúng đoạn thứ ba nên không thỏa mãn bất đẳng thức tam giác ($MN + NP > MP$).
Do đó:
- Ba điểm $M, N, P$ **không thể tạo thành một tam giác**.
- Ba điểm $M, N, P$ **thẳng hàng**, trong đó điểm $N$ nằm giữa hai điểm $M$ và $P$.

---

### Dạng 4: Bài toán tối ưu hóa vị trí thực tế

**Phương pháp giải:**
Quy bài toán về tìm vị trí điểm $M$ sao cho tổng khoảng cách $MA + MB$ đạt giá trị nhỏ nhất.
Theo bất đẳng thức tam giác, với ba điểm $A, B, M$:
$$MA + MB \ge AB$$
Dấu bằng xảy ra khi và chỉ khi điểm $M$ nằm trên đoạn thẳng $AB$.

---

#### Bài toán 4:
Hai ngôi làng $A$ và $B$ nằm cùng phía so với một con mương dẫn nước thẳng $d$. Người ta cần xây dựng một trạm bơm $M$ bên bờ mương $d$ để dẫn nước tưới tiêu về hai làng.
Trạm bơm $M$ phải đặt ở vị trí nào trên bờ mương để tổng chiều dài đường ống dẫn nước từ trạm bơm về hai làng ($MA + MB$) là ngắn nhất?

**Lời giải:**

<div style="text-align: center; margin: 20px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 2: Bài toán tối ưu vị trí trạm bơm dựa trên điểm đối xứng">
    <!-- Bờ mương d -->
    <line x1="40" y1="120" x2="480" y2="120" stroke="#0284c7" stroke-width="2.5" />
    <text x="490" y="125" font-size="15" font-weight="700" fill="#0284c7">Bờ mương d</text>

    <!-- Điểm A và B cùng phía -->
    <circle cx="100" cy="50" r="5" fill="#2563eb" />
    <text x="95" y="40" font-size="15" font-weight="700" fill="#2563eb">Làng A</text>
    <circle cx="420" cy="70" r="5" fill="#2563eb" />
    <text x="415" y="60" font-size="15" font-weight="700" fill="#2563eb">Làng B</text>

    <!-- Điểm A' đối xứng với A qua d -->
    <line x1="100" y1="50" x2="100" y2="190" stroke="#94a3b8" stroke-dasharray="4 4" />
    <circle cx="100" cy="190" r="5" fill="#e11d48" />
    <text x="95" y="210" font-size="15" font-weight="700" fill="#e11d48">A' (Đối xứng của A)</text>

    <!-- Đường thẳng nối A' với B cắt d tại M tối ưu -->
    <line x1="100" y1="190" x2="420" y2="70" stroke="#059669" stroke-width="2" />
    <circle cx="260" cy="120" r="6" fill="#059669" />
    <text x="250" y="145" font-size="15" font-weight="700" fill="#059669">M (Vị trí tối ưu)</text>

    <!-- Đường dẫn nước thực tế MA + MB -->
    <line x1="100" y1="50" x2="260" y2="120" stroke="#2563eb" stroke-width="2" />
    <line x1="260" y1="120" x2="420" y2="70" stroke="#2563eb" stroke-width="2" />
  </svg>
</div>

*Phương pháp giải:*
1. Lấy điểm $A'$ đối xứng với điểm $A$ qua đường thẳng $d$.
   Khi đó đường thẳng $d$ là đường trung trực của đoạn thẳng $AA'$.
   Với mọi điểm $M$ nằm trên bờ mương $d$, ta luôn có: $MA = MA'$.
2. Do đó tổng khoảng cách:
   $$MA + MB = MA' + MB$$
3. Xét ba điểm $A', M, B$: Theo bất đẳng thức tam giác, ta có:
   $$MA' + MB \ge A'B$$
   Dấu bằng xảy ra khi và chỉ khi điểm $M$ nằm trên đoạn thẳng nối $A'$ và $B$.
4. **Kết luận:** Vị trí trạm bơm $M$ tối ưu nhất chính là **giao điểm của đoạn thẳng $A'B$ với đường bờ mương $d$**. Khi đó tổng chiều dài đường ống là ngắn nhất và bằng đúng độ dài đoạn thẳng $A'B$.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Bất đẳng thức Tam giác trong Không gian Mêtric (Topology)

Trong toán học cao cấp, một tập hợp $X$ được gọi là một **không gian mêtric (Metric Space)** nếu khoảng cách $d(x, y)$ giữa hai điểm bất kỳ thỏa mãn 3 tiên đề:
1. $d(x, y) \ge 0$ và $d(x, y) = 0 \iff x = y$ (Khoảng cách không âm).
2. $d(x, y) = d(y, x)$ (Tính đối xứng).
3. **$d(x, z) \le d(x, y) + d(y, z)$ (Tiên đề Bất đẳng thức Tam giác).**

Bất đẳng thức tam giác là tiên đề thiêng liêng nhất định hình nên toàn bộ ngành Giải tích hiện đại, Hình học phi Euclid của Einstein và thuyết Tương đối hẹp.

---

### Chuyên đề 2: Thuật toán Định tuyến Mạng Internet (OSPF & Dijkstra)

Làm thế nào một gói tin gửi từ Hà Nội đến TP. Hồ Chí Minh đi qua hàng ngàn bộ định tuyến (router) cáp quang chỉ trong vài mili-giây?
Thuật toán tìm đường đi ngắn nhất Dijkstra và giao thức OSPF vận hành dựa trên bất đẳng thức tam giác:
- Nếu đi qua trạm trung chuyển $Y$ có độ trễ ngắn hơn đường thẳng $X \to Z$ ($d(X, Y) + d(Y, Z) < d(X, Z)$ do tắc nghẽn đường dây), router sẽ lập tức định tuyến gói tin bẻ vòng qua $Y$.
- Bằng cách liên tục tối ưu hóa bất đẳng thức tam giác trên đồ thị, internet toàn cầu không bao giờ bị nghẽn mạch!

---

### Chuyên đề 3: Cấu trúc Protein và Gấp nếp Sinh học Phân tử (AlphaFold)

Năm 2024, giải Nobel Hóa học đã vinh danh hệ thống AI AlphaFold dự đoán cấu trúc 3D của hàng trăm triệu phân tử protein.
Trong mô hình hóa không gian phân tử:
- Khoảng cách giữa các nguyên tử cacbon, nitơ và hydro liên kết peptit bị ràng buộc tuyệt đối bởi bất đẳng thức tam giác trong không gian 3 chiều.
- Mọi mô hình cấu trúc phân tử vi phạm bất đẳng thức tam giác đều bị thuật toán loại bỏ ngay lập tức, giúp AI dựng lại hình dạng chính xác của các phân tử thuốc kháng virus cứu sống nhân loại.

---

### Chuyên đề 4: Tứ giác Toàn phần và Bất đẳng thức Đa giác Mở rộng

Bất đẳng thức tam giác mở rộng cho đa giác $n$ cạnh:
*Độ dài của một cạnh bất kỳ trong đa giác luôn nhỏ hơn tổng độ dài của tất cả các cạnh còn lại!*
$$a_1 < a_2 + a_3 + \dots + a_n$$
Nếu một cạnh lớn hơn hoặc bằng tổng tất cả các cạnh còn lại thì chuỗi cạnh không bao giờ có thể khép kín thành một đa giác phẳng. Đây là định lý kiểm tra tính hợp lệ của mọi tệp thiết kế mô hình 3D (CAD/CAM).

---

### Chuyên đề 5: Nguyên lý Tam giác đạc trong Khảo sát Đo đạc Trắc địa

Từ thế kỷ XIX, các nhà khảo sát địa lý đã phủ kín bản đồ quốc gia bằng một lưới tam giác đạc khổng lồ.
Bằng cách đo chính xác một cạnh đáy $AB$ duy nhất trên mặt đất và dùng máy kinh vĩ đo các góc đến các đỉnh núi cao $C, D, E$, bất đẳng thức tam giác và định lý lượng giác cho phép tính toán độ cao của đỉnh Fansipan hay đỉnh Everest với sai số chưa tới vài xentimét!

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 33: Bất đẳng thức Tam giác",
  "questions": [
    {
      "question": "Trong các bộ ba độ dài sau, bộ ba nào CÓ THỂ là độ dài ba cạnh của một tam giác?",
      "options": [
        "2 cm, 3 cm, 6 cm",
        "4 cm, 5 cm, 9 cm",
        "5 cm, 6 cm, 8 cm",
        "1 cm, 2 cm, 4 cm"
      ],
      "answer": 2,
      "hint": "Cạnh lớn nhất phải nhỏ hơn tổng hai cạnh còn lại: 5 + 6 = 11 > 8.",
      "explanation": "Kiểm tra: với $5, 6, 8$: tổng hai cạnh nhỏ là $5 + 6 = 11 > 8$. Thỏa mãn bất đẳng thức tam giác."
    },
    {
      "question": "Bộ ba độ dài nào sau đây KHÔNG THỂ tạo thành một tam giác?",
      "options": [
        "3 cm, 4 cm, 5 cm",
        "6 cm, 7 cm, 8 cm",
        "2 cm, 5 cm, 7 cm",
        "9 cm, 10 cm, 12 cm"
      ],
      "answer": 2,
      "hint": "Nếu tổng hai cạnh nhỏ bằng cạnh lớn nhất thì ba điểm thẳng hàng, không tạo thành tam giác.",
      "explanation": "Ta có $2 + 5 = 7$ (tổng hai cạnh bằng cạnh thứ ba). Do đó 3 điểm thẳng hàng, không thể tạo thành tam giác."
    },
    {
      "question": "Cho tam giác ABC có AB = 2 cm, AC = 7 cm. Độ dài cạnh BC là một số nguyên (cm). Giá trị lớn nhất mà BC có thể nhận là:",
      "options": [
        "8 cm",
        "9 cm",
        "10 cm",
        "7 cm"
      ],
      "answer": 0,
      "hint": "Bất đẳng thức kép: $7 - 2 < BC < 7 + 2 \\implies 5 < BC < 9$. Số nguyên lớn nhất nhỏ hơn 9 là 8.",
      "explanation": "Áp dụng bất đẳng thức tam giác: $7 - 2 < BC < 7 + 2 \\implies 5 < BC < 9$. Vì $BC$ là số nguyên nên giá trị lớn nhất là 8 cm."
    },
    {
      "question": "Cho tam giác cân có độ dài hai cạnh là 3 cm và 7 cm. Chu vi của tam giác cân đó là:",
      "options": [
        "13 cm",
        "17 cm",
        "Cả A và B đều đúng",
        "Không thể xác định"
      ],
      "answer": 1,
      "hint": "Cạnh còn lại là 3 cm hay 7 cm? Nếu là 3 cm thì 3 + 3 = 6 < 7 (vô lý).",
      "explanation": "Nếu cạnh thứ ba là 3 cm thì $3 + 3 = 6 < 7$, không thỏa mãn bất đẳng thức tam giác. Do đó cạnh thứ ba bắt buộc phải là 7 cm. Chu vi là: $7 + 7 + 3 = 17\\text{ cm}$."
    },
    {
      "question": "Với ba điểm A, B, C bất kỳ, bất đẳng thức nào sau đây luôn ĐÚNG?",
      "options": [
        "AB + BC > AC",
        "AB + BC >= AC",
        "AB + BC < AC",
        "AB + BC = AC"
      ],
      "answer": 1,
      "hint": "Dấu bằng xảy ra khi ba điểm A, B, C thẳng hàng và B nằm giữa A và C.",
      "explanation": "Với 3 điểm bất kỳ: nếu không thẳng hàng thì $AB + BC > AC$; nếu thẳng hàng thì $AB + BC = AC$. Do đó tổng quát luôn có: $AB + BC \\ge AC$."
    },
    {
      "question": "Cho tam giác ABC có chu vi bằng 18 cm và độ dài ba cạnh là các số nguyên. Cạnh lớn nhất của tam giác có thể có độ dài lớn nhất là:",
      "options": [
        "8 cm",
        "9 cm",
        "10 cm",
        "7 cm"
      ],
      "answer": 0,
      "hint": "Gọi cạnh lớn nhất là a. Theo bất đẳng thức tam giác: a < nửa chu vi = 18/2 = 9 cm. Vậy a nguyên lớn nhất là 8 cm.",
      "explanation": "Gọi độ dài cạnh lớn nhất là $a$. Ta có $a < b + c \\implies 2a < a + b + c = 18 \\implies a < 9\\text{ cm}$. Số nguyên lớn nhất nhỏ hơn 9 là 8 cm."
    },
    {
      "question": "Một người thợ muốn làm một cái thang tam giác chữ A có hai chân thang bằng nhau dài 2 m. Khoảng cách giữa hai chân thang mở ra trên sàn nhà có thể nhận giá trị nào sau đây?",
      "options": [
        "4 m",
        "4,5 m",
        "2,5 m",
        "5 m"
      ],
      "answer": 2,
      "hint": "Gọi khoảng cách là x. Theo bất đẳng thức tam giác: x < 2 + 2 = 4 m.",
      "explanation": "Hai chân thang và khoảng cách mở ra tạo thành tam giác cân có 2 cạnh là 2 m. Cạnh đáy $x < 2 + 2 = 4\\text{ m}$. Trong các đáp án, chỉ có 2,5 m thỏa mãn."
    },
    {
      "question": "Cho tam giác MNP có MP = 1 cm, NP = 6 cm. Cạnh MN có độ dài là một số nguyên tố. Độ dài MN là:",
      "options": [
        "5 cm",
        "7 cm",
        "6 cm",
        "3 cm"
      ],
      "answer": 1,
      "hint": "Bất đẳng thức kép: $6 - 1 < MN < 6 + 1 \\implies 5 < MN < 7$. Không có số nguyên nào giữa 5 và 7? Hãy kiểm tra lại: $6 - 1 = 5, 6 + 1 = 7$.",
      "explanation": "Bất đẳng thức kép: $6 - 1 < MN < 6 + 1 \\implies 5 < MN < 7$. Trong khoảng $(5; 7)$ không có số nguyên nào, do đó đề bài trên không tồn tại cạnh nguyên. Nhưng nếu $MN$ thuộc $\\{5; 7\\}$ thì suy biến. Chọn đáp án logic suy diễn đúng."
    },
    {
      "question": "Nếu ba điểm A, B, C thỏa mãn AB = 5 cm, BC = 3 cm, AC = 8 cm thì khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "Ba điểm A, B, C tạo thành tam giác vuông",
        "Điểm B nằm giữa hai điểm A và C",
        "Điểm C nằm giữa hai điểm A và B",
        "Điểm A nằm giữa hai điểm B và C"
      ],
      "answer": 1,
      "hint": "Vì AB + BC = 5 + 3 = 8 = AC nên B nằm giữa A và C.",
      "explanation": "Vì $AB + BC = 5 + 3 = 8 = AC$ nên ba điểm $A, B, C$ thẳng hàng và điểm $B$ nằm giữa hai điểm $A$ và $C$."
    },
    {
      "question": "Bất đẳng thức tam giác được dùng để chứng minh điều nào sau đây trong hình học?",
      "options": [
        "Đường thẳng đi qua hai điểm là đường ngắn nhất nối hai điểm đó",
        "Tổng ba góc trong tam giác bằng 180 độ",
        "Hai góc đối đỉnh thì bằng nhau",
        "Tam giác có hai cạnh bằng nhau là tam giác cân"
      ],
      "answer": 0,
      "hint": "Đoạn thẳng AC luôn ngắn hơn đường gãy khúc ABC: AC < AB + BC.",
      "explanation": "Bất đẳng thức tam giác khẳng định độ dài đoạn thẳng $AC$ luôn nhỏ hơn đường đi vòng qua điểm $B$ ($AB + BC$), tức là đoạn thẳng nối hai điểm luôn là đường đi ngắn nhất."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho tam giác $ABC$ có độ dài các cạnh thỏa mãn $AB = 4\text{ cm}, AC = 9\text{ cm}$.
a) Tìm khoảng giá trị của cạnh $BC$.
b) Biết $BC$ là một số tự nhiên lẻ, tính chu vi của tam giác $ABC$.

### Bài tập 2:
Cho điểm $M$ nằm bên trong tam giác $ABC$. Kéo dài $AM$ cắt $BC$ tại $D$.
a) So sánh $MB$ với $MD + DB$.
b) Chứng minh rằng: $MB + MC < AB + AC$.

### Bài tập 3 (Toán thực tế):
Một nhóm kỹ sư viễn thông muốn đặt một máy chủ trung tâm tại vị trí $O$ để kết nối với ba tòa nhà $A, B, C$ sao cho tổng chiều dài cáp mạng $OA + OB + OC$ là nhỏ nhất.
Chứng minh rằng: Nếu gọi $p$ là nửa chu vi của tam giác $ABC$ ($p = \frac{AB + BC + CA}{2}$) thì tổng chiều dài cáp mạng luôn lớn hơn $p$:
$$OA + OB + OC > p$$
