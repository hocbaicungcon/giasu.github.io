---
title: 'Toán 7 Bài 6: Số vô tỉ. Căn bậc hai số học - Bản chất toán học, Ước lượng và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 7 Bài 6 Số vô tỉ và Căn bậc hai số học: bản chất số vô tỉ, tập hợp I, ký hiệu căn bậc hai số học, điều kiện xác định, kỹ năng bấm máy tính cầm tay, ước lượng kẹp số, 5 chuyên đề Olympic và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Số vô tỉ
  - Căn bậc hai số học
  - Tập hợp I
  - Ước lượng căn bậc hai
  - Kết nối tri thức
grade: 7
---

# Bài 6. Số vô tỉ. Căn bậc hai số học

Trong suốt chiều dài lịch sử loài người từ thời cổ đại đến tận thời kỳ Hy Lạp cổ, các nhà toán học vĩ đại thuộc trường phái Pythagoras từng tin rằng: **"Mọi đại lượng trong vũ trụ đều có thể biểu diễn được dưới dạng tỉ số của hai số nguyên"** — tức là mọi số đo độ dài, khối lượng hay diện tích đều là số hữu tỉ $\mathbb{Q}$.

Thế nhưng, một cuộc khủng hoảng toán học chấn động đã nổ ra khi nhà toán học Hippasus xem xét một bài toán hình học tưởng chừng vô cùng đơn giản:
> Cho một mảnh đất hình vuông có diện tích đúng bằng $2\text{ m}^2$. Độ dài mỗi cạnh của mảnh đất đó bằng bao nhiêu mét?

Gọi độ dài cạnh hình vuông đó là $x\text{ (m)}$ với $x > 0$. Theo công thức diện tích hình vuông, ta có $x^2 = 2$.
Thế nhưng, dù cố gắng tìm kiếm bao nhiêu đi chăng nữa, người ta cũng không thể tìm được bất kỳ phân số hữu tỉ $\dfrac{a}{b}$ nào $(a, b \in \mathbb{Z}, b \ne 0)$ sao cho $\left(\dfrac{a}{b}\right)^2 = 2$. Số $x$ này khi viết dưới dạng số thập phân sẽ kéo dài vô tận mà **không bao giờ lặp lại tuần hoàn**:
$$x = 1{,}414213562373095\dots$$

Con số kỳ bí ấy không thuộc tập hợp số hữu tỉ $\mathbb{Q}$. Nó mở ra một chân trời mới của thế giới toán học: **Số vô tỉ** và phép toán ngược của bình phương: **Căn bậc hai số học**!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 6: SỐ VÔ TỈ & CĂN BẬC HAI SỐ HỌC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Số vô tỉ (Tập hợp $\mathbb{I}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Là số thập phân vô hạn <b>không tuần hoàn</b>.<br>• Ký hiệu tập hợp là $\mathbb{I}$.<br>• Không thể viết dưới dạng phân số $\dfrac{a}{b}$ ($a, b \in \mathbb{Z}, b \ne 0$).<br>• Ví dụ điển hình: $\sqrt{2}, \sqrt{3}, \pi = 3{,}14159\dots$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Căn bậc hai số học ($\sqrt{a}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Điều kiện tồn tại: $a \geqslant 0$.<br>• Định nghĩa: $\sqrt{a} = x \iff x \geqslant 0$ và $x^2 = a$.<br>• Luôn không âm: $\sqrt{a} \geqslant 0$.<br>• Hằng đẳng thức căn bản: $(\sqrt{a})^2 = a$ và $\sqrt{a^2} = a$ ($a \geqslant 0$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. So sánh căn bậc hai</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Với hai số không âm $a, b \geqslant 0$:<br>&nbsp;&nbsp;$a < b \iff \sqrt{a} < \sqrt{b}$.<br>• Phương pháp kẹp hai số chính phương liên tiếp để ước lượng phần nguyên của căn thức.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Máy tính cầm tay & Làm tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Sử dụng phím $\sqrt{\Box}$ trên máy tính.<br>• Quy tắc làm tròn chữ số: hàng đơn vị, phần mười, phần trăm.<br>• Nhận biết căn của số chính phương là số hữu tỉ; căn của số tự nhiên không chính phương là số vô tỉ.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Trước khi tìm hiểu về căn bậc hai và số vô tỉ, hãy ôn lại kiến thức về lũy thừa bậc hai (bình phương) và số chính phương:

### Câu hỏi khởi động

1. **Tính bình phương của các số sau:**
   $$4;\quad 9;\quad 12;\quad 15;\quad 0{,}6;\quad \dfrac{3}{5};\quad 1{,}2.$$

2. **Trong các số sau, số nào là số chính phương (bình phương của một số tự nhiên)?**
   $$16;\quad 28;\quad 49;\quad 81;\quad 120;\quad 169;\quad 225.$$

3. **Tìm số không âm $x$ thích hợp điền vào ô trống:**
   - a) $x^2 = 36$
   - b) $x^2 = 121$
   - c) $x^2 = \dfrac{4}{25}$
   - d) $x^2 = 0{,}64$

4. **Bài toán thực tế:** Một mảnh vườn hình vuông có diện tích $64\text{ m}^2$. Hãy tính độ dài cạnh của mảnh vườn đó. Nếu diện tích mảnh vườn là $50\text{ m}^2$ thì độ dài cạnh có phải là một số tự nhiên hay không?

---

### Lời giải chi tiết phần khởi động

1. **Bình phương của các số đã cho:**
   - $4^2 = 4 \cdot 4 = 16.$
   - $9^2 = 9 \cdot 9 = 81.$
   - $12^2 = 12 \cdot 12 = 144.$
   - $15^2 = 15 \cdot 15 = 225.$
   - $(0{,}6)^2 = 0{,}6 \cdot 0{,}6 = 0{,}36.$
   - $\left(\dfrac{3}{5}\right)^2 = \dfrac{3^2}{5^2} = \dfrac{9}{25}.$
   - $(1{,}2)^2 = 1{,}2 \cdot 1{,}2 = 1{,}44.$

2. **Nhận diện số chính phương:**
   - $16 = 4^2 \implies$ là số chính phương.
   - $28$ không phải là bình phương của số tự nhiên nào ($5^2 = 25 < 28 < 36 = 6^2$).
   - $49 = 7^2 \implies$ là số chính phương.
   - $81 = 9^2 \implies$ là số chính phương.
   - $120$ không phải là số chính phương ($10^2 = 100 < 120 < 121 = 11^2$).
   - $169 = 13^2 \implies$ là số chính phương.
   - $225 = 15^2 \implies$ là số chính phương.
   
   Vậy các số chính phương là: $16; 49; 81; 169; 225.$

3. **Tìm số không âm $x$:**
   - a) Vì $x \geqslant 0$ và $6^2 = 36$ nên $x = 6.$
   - b) Vì $x \geqslant 0$ và $11^2 = 121$ nên $x = 11.$
   - c) Vì $x \geqslant 0$ và $\left(\dfrac{2}{5}\right)^2 = \dfrac{4}{25}$ nên $x = \dfrac{2}{5}.$
   - d) Vì $x \geqslant 0$ và $(0{,}8)^2 = 0{,}64$ nên $x = 0{,}8.$

4. **Giải bài toán thực tế:**
   - Gọi cạnh mảnh vườn thứ nhất là $a\text{ (m)}$ ($a > 0$). Diện tích $a^2 = 64 \implies a = 8\text{ m}.$
   - Với mảnh vườn diện tích $50\text{ m}^2$, gọi độ dài cạnh là $b\text{ (m)}$ ($b > 0$). Ta có $b^2 = 50$.
   - Vì $7^2 = 49 < 50 < 64 = 8^2$, nên $b$ nằm giữa hai số tự nhiên liên tiếp $7$ và $8$. Do đó $b$ **không thể là số tự nhiên**! Cạnh $b$ chính là số vô tỉ $\sqrt{50} \approx 7{,}071\dots\text{ m}.$

---

## 1. Lý thuyết trọng tâm

### 1.1. Số vô tỉ là gì?

Ở Bài 5, các em đã biết: mọi số hữu tỉ $\dfrac{a}{b}$ ($a, b \in \mathbb{Z}, b \ne 0$) đều viết được dưới dạng **số thập phân hữu hạn** hoặc **số thập phân vô hạn tuần hoàn**.

Nhưng trong toán học còn tồn tại những số thập phân vô hạn mà phần thập phân của chúng **không bao giờ lặp lại tuần hoàn**.

> [!IMPORTANT]
> **Định nghĩa số vô tỉ:**
> - **Số vô tỉ** là số thập phân vô hạn **không tuần hoàn**.
> - Tập hợp các số vô tỉ được ký hiệu là $\mathbb{I}$ (viết tắt từ chữ tiếng Anh *Irrational numbers*).
> - Số vô tỉ **không thể** viết được dưới dạng phân số $\dfrac{a}{b}$ với $a, b \in \mathbb{Z}, b \ne 0.$

**Ví dụ về số vô tỉ:**
1. Số $\pi$ (pi) - tỉ số giữa chu vi và đường kính của một đường tròn:
   $$\pi = 3{,}14159265358979323846\dots \in \mathbb{I}.$$
2. Số thập phân có quy luật tăng dần số chữ số $0$ (nhưng không tuần hoàn):
   $$0{,}101001000100001\dots \in \mathbb{I}$$
   (Số chữ số $0$ giữa các chữ số $1$ cứ tăng dần: $1, 2, 3, 4, \dots$ nên không có chu kỳ cố định).
3. Độ dài đường chéo hình vuông cạnh $1$:
   $$\sqrt{2} = 1{,}414213562373\dots \in \mathbb{I}.$$

---

### 1.2. Căn bậc hai số học

> [!IMPORTANT]
> **Định nghĩa căn bậc hai số học:**
> - Cho số $a \geqslant 0$. **Căn bậc hai số học** của số $a$ là số **không âm** $x$ sao cho $x^2 = a.$
> - Ký hiệu căn bậc hai số học của $a$ là $\sqrt{a}.$
> 
> Tóm lại:
> $$\sqrt{a} = x \iff \begin{cases} x \geqslant 0 \\ x^2 = a \end{cases}$$

**Các tính chất nền tảng:**
1. Điều kiện tồn tại: Dấu căn $\sqrt{a}$ **chỉ có nghĩa khi $a \geqslant 0$**. Biểu thức dưới dấu căn không được âm (ví dụ: $\sqrt{-9}$ hay $\sqrt{-25}$ là **không xác định** trong phạm vi số thực).
2. Giá trị của căn bậc hai số học luôn không âm: Với mọi $a \geqslant 0$, ta luôn có $\sqrt{a} \geqslant 0.$
3. Hai công thức cốt lõi:
   $$(\sqrt{a})^2 = a \quad (a \geqslant 0)$$
   $$\sqrt{a^2} = a \quad (a \geqslant 0)$$
4. Các trường hợp đặc biệt:
   $$\sqrt{0} = 0;\quad \sqrt{1} = 1.$$

**Ví dụ minh họa:**
- Vì $7 \geqslant 0$ và $7^2 = 49$ nên $\sqrt{49} = 7.$
- Vì $\dfrac{3}{5} \geqslant 0$ và $\left(\dfrac{3}{5}\right)^2 = \dfrac{9}{25}$ nên $\sqrt{\dfrac{9}{25}} = \dfrac{3}{5}.$
- Vì $0{,}4 \geqslant 0$ và $(0{,}4)^2 = 0{,}16$ nên $\sqrt{0{,}16} = 0{,}4.$

> [!WARNING]
> **CẢNH BÁO BẪY SAI LẦM PHỔ BIẾN:**
> 
> 1. **Bẫy dấu $\pm$:**
>    - Rất nhiều học sinh nhầm lẫn viết $\sqrt{25} = \pm 5$. Đây là **SAI HOÀN TOÀN**!
>    - Theo định nghĩa, căn bậc hai số học $\sqrt{25}$ chỉ nhận giá trị **không âm duy nhất**, tức là $\sqrt{25} = 5$.
>    - Chỉ khi giải phương trình tìm $x$ thỏa mãn $x^2 = 25$, ta mới có hai nghiệm: $x = \sqrt{25} = 5$ hoặc $x = -\sqrt{25} = -5$.
> 
> 2. **Bẫy căn số âm:**
>    - Biểu thức $\sqrt{-16}$ **không có nghĩa**, không được viết $\sqrt{-16} = -4$!
> 
> 3. **Bẫy tách dấu căn qua phép cộng:**
>    - Tuyệt đối **KHÔNG CÓ** công thức $\sqrt{a + b} = \sqrt{a} + \sqrt{b}$!
>    - Ví dụ kiểm chứng: $\sqrt{9 + 16} = \sqrt{25} = 5$, trong khi $\sqrt{9} + \sqrt{16} = 3 + 4 = 7 \ne 5.$

---

### 1.3. Tính chất căn bậc hai số học của một tích và một thương

Với các số không âm, ta có hai tính chất tính toán rất quan trọng:

1. **Căn của một tích:** Với $a \geqslant 0, b \geqslant 0$:
   $$\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$$
   *Ví dụ:* $\sqrt{4 \cdot 25} = \sqrt{4} \cdot \sqrt{25} = 2 \cdot 5 = 10.$ (Kiểm tra lại: $\sqrt{100} = 10$).

2. **Căn của một thương:** Với $a \geqslant 0, b > 0$:
   $$\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}$$
   *Ví dụ:* $\sqrt{\dfrac{49}{64}} = \dfrac{\sqrt{49}}{\sqrt{64}} = \dfrac{7}{8}.$

---

### 1.4. So sánh hai căn bậc hai số học

> [!TIP]
> **Định lý so sánh căn bậc hai:**
> Với hai số không âm $a$ và $b$ bất kỳ ($a \geqslant 0, b \geqslant 0$):
> $$a < b \iff \sqrt{a} < \sqrt{b}$$
> $$a = b \iff \sqrt{a} = \sqrt{b}$$

**Ứng dụng để so sánh một số với một căn bậc hai:**
Muốn so sánh một số dương $m$ với $\sqrt{k}$, ta đưa $m$ về dạng căn bậc hai: $m = \sqrt{m^2}$, rồi so sánh $m^2$ với $k$.
- *Ví dụ 1:* So sánh $5$ và $\sqrt{23}$.
  Ta có $5 = \sqrt{5^2} = \sqrt{25}$.
  Vì $25 > 23 > 0$ nên $\sqrt{25} > \sqrt{23}$, suy ra $5 > \sqrt{23}.$
- *Ví dụ 2:* So sánh $\sqrt{38}$ và $6$.
  Ta có $6 = \sqrt{6^2} = \sqrt{36}$.
  Vì $38 > 36$ nên $\sqrt{38} > \sqrt{36} = 6.$

---

### 1.5. Ước lượng căn bậc hai và sử dụng máy tính cầm tay

#### a) Ước lượng bằng phương pháp kẹp giữa hai số chính phương
Nếu số tự nhiên $n$ không phải là số chính phương thì $\sqrt{n}$ là một **số vô tỉ**. Ta có thể ước lượng giá trị của nó bằng cách tìm hai số chính phương liên tiếp kẹp lấy $n$:
- Xét $\sqrt{13}$:
  Ta thấy $3^2 = 9 < 13 < 16 = 4^2$.
  Suy ra: $\sqrt{9} < \sqrt{13} < \sqrt{16} \iff 3 < \sqrt{13} < 4.$
  Như vậy, giá trị của $\sqrt{13}$ nằm trong khoảng từ $3$ đến $4$ (phần nguyên của $\sqrt{13}$ là $3$).

#### b) Dùng máy tính cầm tay và làm tròn
Trên các máy tính cầm tay thông dụng (Casio fx-580VN X, fx-880BTG, Vinacal,...):
- Nhấn phím $\sqrt{\Box}$, sau đó nhập số cần tính rồi bấm dấu $=$.
- Nếu kết quả hiển thị dưới dạng căn thức hoặc phân số, bấm phím $S \Leftrightarrow D$ (hoặc phím chuyển đổi) để xem dạng số thập phân.
- Áp dụng quy tắc làm tròn:
  - Nếu chữ số ngay sau hàng làm tròn $\geqslant 5$: cộng thêm $1$ vào hàng làm tròn.
  - Nếu chữ số ngay sau hàng làm tròn $< 5$: giữ nguyên.

*Bảng làm tròn một số căn bậc hai thường gặp:*

| Căn thức | Giá trị máy tính hiển thị | Làm tròn đến chữ số thập phân thứ nhất (hàng phần mười) | Làm tròn đến chữ số thập phân thứ hai (hàng phần trăm) |
| :--- | :--- | :--- | :--- |
| $\sqrt{2}$ | $1{,}41421356\dots$ | $1{,}4$ | $1{,}41$ |
| $\sqrt{3}$ | $1{,}73205080\dots$ | $1{,}7$ | $1{,}73$ |
| $\sqrt{5}$ | $2{,}23606797\dots$ | $2{,}2$ | $2{,}24$ |
| $\sqrt{7}$ | $2{,}64575131\dots$ | $2{,}6$ | $2{,}65$ |
| $\sqrt{10}$ | $3{,}16227766\dots$ | $3{,}2$ | $3{,}16$ |

---

## 2. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Nhận biết số vô tỉ và phân loại tập hợp số

**Phương pháp giải:**
1. Số hữu tỉ ($\mathbb{Q}$): viết được dưới dạng phân số $\dfrac{a}{b}$ ($a, b \in \mathbb{Z}, b \ne 0$), tương đương với số thập phân hữu hạn hoặc vô hạn tuần hoàn.
2. Căn bậc hai của một số chính phương hay bình phương của phân số hữu tỉ: là số hữu tỉ (ví dụ $\sqrt{16} = 4 \in \mathbb{Q}$, $\sqrt{\dfrac{4}{9}} = \dfrac{2}{3} \in \mathbb{Q}$).
3. Số vô tỉ ($\mathbb{I}$): số thập phân vô hạn không tuần hoàn, số $\pi$, hoặc căn bậc hai của số tự nhiên không chính phương (ví dụ $\sqrt{2}, \sqrt{3}, \sqrt{5}, \sqrt{7}, \dots$).

---

#### Ví dụ 1
Cho các số sau:
$$A = \left\{ -2{,}5;\quad \sqrt{36};\quad \dfrac{4}{7};\quad \sqrt{15};\quad 0{,}(27);\quad 1{,}020020002\dots;\quad \pi \right\}.$$
a) Những số nào là số hữu tỉ?
b) Những số nào là số vô tỉ?
c) Điền ký hiệu thích hợp ($\in$ hoặc $\notin$) vào chỗ trống:
$$\sqrt{36} \dots \mathbb{Q};\quad \sqrt{15} \dots \mathbb{Q};\quad \sqrt{15} \dots \mathbb{I};\quad \dfrac{4}{7} \dots \mathbb{I}.$$

**Lời giải chi tiết:**
a) Ta xét từng số:
- $-2{,}5 = -\dfrac{5}{2}$ là số thập phân hữu hạn nên là số hữu tỉ.
- $\sqrt{36} = 6 = \dfrac{6}{1}$ là số tự nhiên nên là số hữu tỉ.
- $\dfrac{4}{7}$ có dạng $\dfrac{a}{b}$ ($a, b \in \mathbb{Z}, b \ne 0$) nên là số hữu tỉ.
- $0{,}(27) = \dfrac{27}{99} = \dfrac{3}{11}$ là số thập phân vô hạn tuần hoàn nên là số hữu tỉ.
Vậy các số hữu tỉ là: $-2{,}5;\quad \sqrt{36};\quad \dfrac{4}{7};\quad 0{,}(27).$

b) Các số còn lại:
- $\sqrt{15}$: Vì $15$ không phải là số chính phương nên $\sqrt{15}$ là số thập phân vô hạn không tuần hoàn, tức là số vô tỉ.
- $1{,}020020002\dots$: Số thập phân vô hạn không tuần hoàn (số chữ số $0$ tăng dần $1, 2, 3, \dots$).
- $\pi \approx 3{,}14159\dots$ là số vô tỉ nổi tiếng trong toán học.
Vậy các số vô tỉ là: $\sqrt{15};\quad 1{,}020020002\dots;\quad \pi.$

c) Điền ký hiệu:
- $\sqrt{36} = 6 \in \mathbb{Q}.$
- $\sqrt{15} \notin \mathbb{Q}.$
- $\sqrt{15} \in \mathbb{I}.$
- $\dfrac{4}{7} \notin \mathbb{I}.$

---

### Dạng 2: Tính căn bậc hai số học và tính giá trị biểu thức

**Phương pháp giải:**
1. Áp dụng định nghĩa: Với $a \geqslant 0$, $\sqrt{a} = x \iff x \geqslant 0$ và $x^2 = a$.
2. Phân tích số dưới dấu căn thành tích của các thừa số chính phương hoặc đổi số thập phân, hỗn số ra phân số có tử và mẫu là các số chính phương.
3. Thực hiện các phép tính cộng, trừ, nhân, chia theo thứ tự ưu tiên: tính căn bậc hai trước, rồi đến nhân chia, cuối cùng là cộng trừ.

---

#### Ví dụ 2
Tính căn bậc hai số học của các số sau:
$$81;\quad 196;\quad 0{,}09;\quad 1{,}44;\quad \dfrac{49}{121};\quad 1\dfrac{9}{16}.$$

**Lời giải chi tiết:**
- $\sqrt{81} = 9$ (vì $9 \geqslant 0$ và $9^2 = 81$).
- $\sqrt{196} = 14$ (vì $14 \geqslant 0$ và $14^2 = 196$).
- $\sqrt{0{,}09} = 0{,}3$ (vì $0{,}3 \geqslant 0$ và $(0{,}3)^2 = 0{,}09$).
- $\sqrt{1{,}44} = 1{,}2$ (vì $1{,}2 \geqslant 0$ và $(1{,}2)^2 = 1{,}44$).
- $\sqrt{\dfrac{49}{121}} = \dfrac{\sqrt{49}}{\sqrt{121}} = \dfrac{7}{11}.$
- Đổi hỗn số $1\dfrac{9}{16} = \dfrac{1 \cdot 16 + 9}{16} = \dfrac{25}{16}$. Khi đó:
  $$\sqrt{1\dfrac{9}{16}} = \sqrt{\dfrac{25}{16}} = \dfrac{\sqrt{25}}{\sqrt{16}} = \dfrac{5}{4}.$$

---

#### Ví dụ 3
Tính giá trị của các biểu thức sau:
$$A = 4\sqrt{25} - 3\sqrt{64} + 2\sqrt{0{,}49}.$$
$$B = \sqrt{\dfrac{81}{4}} + 5\sqrt{0{,}16} - \left(\sqrt{\dfrac{9}{25}}\right)^2.$$
$$C = \sqrt{10^2 - 6^2} + \sqrt{25 \cdot 144}.$$

**Lời giải chi tiết:**
- Biểu thức $A$:
  $$A = 4 \cdot 5 - 3 \cdot 8 + 2 \cdot 0{,}7 = 20 - 24 + 1{,}4 = -4 + 1{,}4 = -2{,}6.$$

- Biểu thức $B$:
  Ta có $\sqrt{\dfrac{81}{4}} = \dfrac{9}{2} = 4{,}5$;
  $\sqrt{0{,}16} = 0{,}4 \implies 5\sqrt{0{,}16} = 5 \cdot 0{,}4 = 2$;
  $\left(\sqrt{\dfrac{9}{25}}\right)^2 = \dfrac{9}{25} = 0{,}36$.
  Do đó:
  $$B = 4{,}5 + 2 - 0{,}36 = 6{,}5 - 0{,}36 = 6{,}14.$$

- Biểu thức $C$:
  Ta tính trong căn trước:
  $10^2 - 6^2 = 100 - 36 = 64 \implies \sqrt{10^2 - 6^2} = \sqrt{64} = 8.$
  Áp dụng công thức căn một tích:
  $\sqrt{25 \cdot 144} = \sqrt{25} \cdot \sqrt{144} = 5 \cdot 12 = 60.$
  Vậy:
  $$C = 8 + 60 = 68.$$

---

### Dạng 3: Tìm $x$ trong các đẳng thức chứa căn bậc hai

**Phương pháp giải:**
1. Dạng $\sqrt{x} = m$:
   - Nếu $m < 0$: Phương trình **vô nghiệm** (vì $\sqrt{x} \geqslant 0$ với mọi $x \geqslant 0$).
   - Nếu $m \geqslant 0$: Ta có $x = m^2$.
2. Dạng $\sqrt{A(x)} = m$ ($m \geqslant 0$): Bình phương hai vế thu được $A(x) = m^2$, rồi tìm $x$ và đối chiếu điều kiện.
3. Dạng $x^2 = k$:
   - Nếu $k < 0$: Phương trình vô nghiệm.
   - Nếu $k = 0$: $x = 0$.
   - Nếu $k > 0$: Phương trình có **hai nghiệm đối nhau**: $x = \sqrt{k}$ hoặc $x = -\sqrt{k}$.

---

#### Ví dụ 4
Tìm số thực $x$, biết:
- a) $\sqrt{x} = 7$
- b) $3\sqrt{x} - 2 = 10$
- c) $\sqrt{2x - 3} = 5$
- d) $\sqrt{x} = -4$
- e) $x^2 = 36$
- f) $(2x + 1)^2 = 49$

**Lời giải chi tiết:**
- a) Vì $7 \geqslant 0$ nên bình phương hai vế:
  $$x = 7^2 = 49.$$
  Vậy $x = 49.$

- b) Chuyển vế:
  $$3\sqrt{x} = 10 + 2 = 12 \implies \sqrt{x} = 12 : 3 = 4.$$
  Vì $4 \geqslant 0$ nên:
  $$x = 4^2 = 16.$$
  Vậy $x = 16.$

- c) Điều kiện $2x - 3 \geqslant 0$. Bình phương hai vế:
  $$2x - 3 = 5^2 = 25 \implies 2x = 25 + 3 = 28 \implies x = 14.$$
  Kiểm tra: $2 \cdot 14 - 3 = 25 > 0$ (thỏa mãn).
  Vậy $x = 14.$

- d) Vì với mọi $x \geqslant 0$ thì $\sqrt{x} \geqslant 0$, mà $-4 < 0$ nên không tồn tại giá trị $x$ nào thỏa mãn.
  Vậy phương trình vô nghiệm.

- e) $x^2 = 36 \implies x = \sqrt{36}$ hoặc $x = -\sqrt{36}.$
  Suy ra $x = 6$ hoặc $x = -6.$

- f) $(2x + 1)^2 = 49 \implies 2x + 1 = 7$ hoặc $2x + 1 = -7.$
  - Trường hợp 1: $2x + 1 = 7 \implies 2x = 6 \implies x = 3.$
  - Trường hợp 2: $2x + 1 = -7 \implies 2x = -8 \implies x = -4.$
  Vậy $x \in \{3; -4\}.$

---

### Dạng 4: So sánh hai biểu thức chứa căn bậc hai

**Phương pháp giải:**
- Với hai số $a, b \geqslant 0$: $a > b \iff \sqrt{a} > \sqrt{b}$.
- Đưa thừa số vào dấu căn: $m\sqrt{a} = \sqrt{m^2 \cdot a}$ với $m \geqslant 0$.
- So sánh gián tiếp qua một số trung gian (số nguyên gần nhất).

---

#### Ví dụ 5
Không dùng máy tính cầm tay, hãy so sánh:
- a) $\sqrt{26}$ và $5$
- b) $\sqrt{48}$ và $7$
- c) $3\sqrt{5}$ và $2\sqrt{11}$
- d) $\sqrt{10} + \sqrt{17}$ và $7$

**Lời giải chi tiết:**
- a) Ta có $5 = \sqrt{5^2} = \sqrt{25}$.
  Vì $26 > 25$ nên $\sqrt{26} > \sqrt{25}$, hay $\sqrt{26} > 5.$

- b) Ta có $7 = \sqrt{7^2} = \sqrt{49}$.
  Vì $48 < 49$ nên $\sqrt{48} < \sqrt{49}$, hay $\sqrt{48} < 7.$

- c) Đưa thừa số vào trong dấu căn:
  $3\sqrt{5} = \sqrt{3^2 \cdot 5} = \sqrt{9 \cdot 5} = \sqrt{45}.$
  $2\sqrt{11} = \sqrt{2^2 \cdot 11} = \sqrt{4 \cdot 11} = \sqrt{44}.$
  Vì $45 > 44$ nên $\sqrt{45} > \sqrt{44}$, suy ra $3\sqrt{5} > 2\sqrt{11}.$

- d) So sánh qua trung gian:
  Ta có $10 > 9 \implies \sqrt{10} > \sqrt{9} = 3.$
  Ta có $17 > 16 \implies \sqrt{17} > \sqrt{16} = 4.$
  Cộng từng vế hai bất đẳng thức cùng chiều:
  $$\sqrt{10} + \sqrt{17} > 3 + 4 = 7.$$
  Vậy $\sqrt{10} + \sqrt{17} > 7.$

---

### Dạng 5: Bài toán thực tế liên quan đến căn bậc hai

**Phương pháp giải:**
1. Nhận dạng đại lượng cần tính qua công thức:
   - Cạnh hình vuông khi biết diện tích $S$: $a = \sqrt{S}$.
   - Tốc độ rơi tự do từ độ cao $h$: $v = \sqrt{2gh}$.
   - Đường chéo hình vuông cạnh $a$: $d = \sqrt{2a^2} = a\sqrt{2}$.
2. Thay số vào công thức, sử dụng máy tính cầm tay và làm tròn kết quả theo đúng quy định đề bài yêu cầu.

---

#### Ví dụ 6
Một công viên hình vuông có diện tích $125\text{ m}^2$. Ban quản lý dự định làm hàng rào bao quanh công viên bằng lưới thép.
a) Tính độ dài cạnh của công viên (làm tròn đến chữ số thập phân thứ hai).
b) Cần bao nhiêu mét lưới thép để rào kín xung quanh công viên, biết cửa ra vào rộng $3\text{ m}$ không phải rào? (Làm tròn kết quả đến hàng phần mười).

**Lời giải chi tiết:**
a) Gọi độ dài cạnh của công viên hình vuông là $x\text{ (m)}$ ($x > 0$).
Theo công thức diện tích hình vuông:
$$x^2 = 125 \implies x = \sqrt{125}.$$
Bấm máy tính cầm tay, ta được:
$$\sqrt{125} = 11{,}18033989\dots$$
Làm tròn đến chữ số thập phân thứ hai (hàng phần trăm), chữ số ngay sau là $0 < 5$:
$$x \approx 11{,}18\text{ m}.$$

b) Chu vi của công viên hình vuông là:
$$P = 4 \cdot x \approx 4 \cdot 11{,}18034 = 44{,}72136\text{ m}.$$
Chiều dài lưới thép cần dùng là chu vi trừ đi phần cửa ra vào:
$$L = P - 3 \approx 44{,}72136 - 3 = 41{,}72136\text{ m}.$$
Làm tròn đến hàng phần mười:
$$L \approx 41{,}7\text{ m}.$$
Vậy cần khoảng $41{,}7\text{ m}$ lưới thép.

---

## 3. 5 Chuyên đề Olympic & Học sinh giỏi Toán 7 Nâng cao

---

### Chuyên đề 1: Phương pháp phản chứng chứng minh một số là số vô tỉ

> [!IMPORTANT]
> **Phương pháp phản chứng (Reductio ad absurdum):**
> Để chứng minh số $x$ là số vô tỉ, ta giả sử điều ngược lại: giả sử $x$ là số hữu tỉ. Khi đó $x$ biểu diễn được dưới dạng phân số tối giản $\dfrac{a}{b}$ với $a, b \in \mathbb{Z}, b > 0, \text{ƯCLN}(a, b) = 1$. Dùng các phép biến đổi đại số suy ra mâu thuẫn (vô lý), từ đó kết luận điều giả sử là sai, tức $x$ phải là số vô tỉ.

#### Bài toán 1.1
Chứng minh rằng $\sqrt{3}$ là một số vô tỉ.

**Lời giải chi tiết:**
Giả sử $\sqrt{3}$ là số hữu tỉ.
Khi đó tồn tại hai số nguyên dương $a$ và $b$ sao cho:
$$\sqrt{3} = \dfrac{a}{b} \quad \text{với } \text{ƯCLN}(a, b) = 1.$$
Bình phương hai vế:
$$3 = \dfrac{a^2}{b^2} \implies a^2 = 3b^2.$$
Từ đẳng thức này suy ra $a^2$ chia hết cho $3$.
Vì $3$ là số nguyên tố nên $a$ cũng phải chia hết cho $3$.
Do đó, ta có thể đặt $a = 3k$ với $k \in \mathbb{Z}^+$.
Thay $a = 3k$ vào phương trình trên:
$$(3k)^2 = 3b^2 \implies 9k^2 = 3b^2 \implies b^2 = 3k^2.$$
Suy ra $b^2$ chia hết cho $3$, dẫn tới $b$ cũng phải chia hết cho $3$.

Như vậy cả $a$ và $b$ đều cùng chia hết cho $3$, nghĩa là $3$ là ước chung của $a$ và $b$.
Điều này mâu thuẫn trực tiếp với giả thiết ban đầu là $\text{ƯCLN}(a, b) = 1$ (phân số $\dfrac{a}{b}$ đã tối giản).
Sự mâu thuẫn này chứng tỏ giả sử ban đầu là sai.
Vậy $\sqrt{3}$ bắt buộc phải là một số vô tỉ. $\blacksquare$

#### Bài toán 1.2 (Mở rộng tính chất)
Cho biết $\sqrt{3}$ là số vô tỉ. Chứng minh rằng số $A = 5 + 2\sqrt{3}$ cũng là một số vô tỉ.

**Lời giải chi tiết:**
Giả sử $A = 5 + 2\sqrt{3}$ là số hữu tỉ, đặt $A = q \in \mathbb{Q}$.
Từ đẳng thức:
$$5 + 2\sqrt{3} = q \implies 2\sqrt{3} = q - 5 \implies \sqrt{3} = \dfrac{q - 5}{2}.$$
Vì $q \in \mathbb{Q}$ nên hiệu $q - 5 \in \mathbb{Q}$, và thương $\dfrac{q - 5}{2} \in \mathbb{Q}$.
Điều này dẫn tới $\sqrt{3}$ là một số hữu tỉ, mâu thuẫn hoàn toàn với sự thật $\sqrt{3}$ là số vô tỉ.
Vậy $A = 5 + 2\sqrt{3}$ là số vô tỉ. $\blacksquare$

---

### Chuyên đề 2: Kẹp căn bậc hai và tìm phần nguyên $[x]$

> [!NOTE]
> **Khái niệm phần nguyên:**
> Phần nguyên của số thực $x$, ký hiệu là $[x]$, là số nguyên lớn nhất không vượt quá $x$:
> $$[x] = n \iff n \leqslant x < n + 1 \quad (n \in \mathbb{Z}).$$

#### Bài toán 2.1
Tìm phần nguyên của biểu thức:
$$M = \sqrt{n(n + 1)(n + 2)(n + 3) + 1} \quad \text{với } n \in \mathbb{N}^*.$$

**Lời giải chi tiết:**
Biến đổi biểu thức dưới dấu căn:
$$P = n(n + 1)(n + 2)(n + 3) + 1 = [n(n + 3)] \cdot [(n + 1)(n + 2)] + 1.$$
Đặt $t = n(n + 3) = n^2 + 3n$.
Khi đó $(n + 1)(n + 2) = n^2 + 3n + 2 = t + 2$.
Thay vào biểu thức $P$:
$$P = t(t + 2) + 1 = t^2 + 2t + 1 = (t + 1)^2.$$
Vì $n \in \mathbb{N}^*$ nên $t + 1 = n^2 + 3n + 1 > 0$.
Do đó:
$$M = \sqrt{P} = \sqrt{(n^2 + 3n + 1)^2} = n^2 + 3n + 1.$$
Vì $n \in \mathbb{N}^*$ nên $n^2 + 3n + 1$ là một số nguyên dương.
Do đó phần nguyên của $M$ chính là giá trị của nó:
$$[M] = n^2 + 3n + 1.$$

#### Bài toán 2.2
Tìm phần nguyên của $\sqrt{n^2 + 3n}$ với $n$ là số nguyên dương bất kỳ.

**Lời giải chi tiết:**
Xét hai bình phương liên tiếp chứa $n^2 + 3n$:
- Rõ ràng $n^2 < n^2 + 3n$ (vì $n > 0 \implies 3n > 0$).
- Mặt khác: $(n + 2)^2 = n^2 + 4n + 4 > n^2 + 3n$.
So sánh với $(n + 1)^2 = n^2 + 2n + 1$:
Xét hiệu: $(n^2 + 3n) - (n^2 + 2n + 1) = n - 1 \geqslant 0$ với mọi $n \geqslant 1$.
Do đó với $n \geqslant 2$, ta có:
$$(n + 1)^2 < n^2 + 3n < (n + 2)^2.$$
Khai căn từng vế:
$$n + 1 < \sqrt{n^2 + 3n} < n + 2.$$
Suy ra với mọi $n \geqslant 2$ thì phần nguyên $\left[\sqrt{n^2 + 3n}\right] = n + 1.$
Với $n = 1$: $\sqrt{1^2 + 3 \cdot 1} = \sqrt{4} = 2$, và $n + 1 = 2$ (vẫn đúng).
Vậy với mọi $n \in \mathbb{N}^*$, ta luôn có:
$$\left[\sqrt{n^2 + 3n}\right] = n + 1.$$

---

### Chuyên đề 3: Tìm số nguyên $x$ để biểu thức chứa căn nhận giá trị nguyên

> [!TIP]
> **Phương pháp giải:**
> 1. Tìm điều kiện xác định ($x \geqslant 0$, mẫu khác $0$).
> 2. Chia tử cho mẫu để tách phần nguyên: $P = \text{thương} + \dfrac{k}{\text{mẫu}}$.
> 3. Để $P \in \mathbb{Z}$ thì mẫu phải là ước số của tử $k$.
> 4. Do $\sqrt{x} \geqslant 0$ nên mẫu có chặn dưới, giúp loại bỏ các ước không thỏa mãn.

#### Bài toán 3.1
Tìm số nguyên $x \geqslant 0$ để biểu thức sau nhận giá trị là một số nguyên:
$$P = \dfrac{\sqrt{x} + 7}{\sqrt{x} + 2}.$$

**Lời giải chi tiết:**
Điều kiện: $x \geqslant 0$. Khi đó $\sqrt{x} \geqslant 0 \implies \sqrt{x} + 2 \geqslant 2 > 0$.
Tách biểu thức $P$:
$$P = \dfrac{(\sqrt{x} + 2) + 5}{\sqrt{x} + 2} = 1 + \dfrac{5}{\sqrt{x} + 2}.$$
Để $P$ nhận giá trị nguyên thì $\dfrac{5}{\sqrt{x} + 2}$ phải là số nguyên, suy ra:
$$(\sqrt{x} + 2) \in \text{Ư}(5) = \{-5; -1; 1; 5\}.$$
Vì $x \geqslant 0 \implies \sqrt{x} \geqslant 0 \implies \sqrt{x} + 2 \geqslant 2$.
Do đó, trong các ước trên, chỉ có giá trị $5$ là thỏa mãn điều kiện $\geqslant 2$:
$$\sqrt{x} + 2 = 5 \implies \sqrt{x} = 3 \implies x = 3^2 = 9.$$
Kiểm tra lại: Với $x = 9$ thì $P = \dfrac{3 + 7}{3 + 2} = \dfrac{10}{5} = 2 \in \mathbb{Z}$ (thỏa mãn).
Vậy giá trị nguyên cần tìm là $x = 9.$

---

### Chuyên đề 4: Phương trình chứa tổng các biểu thức không âm

> [!IMPORTANT]
> **Nguyên lý triệt tiêu tổng không âm:**
> Nếu $A^2 \geqslant 0$ và $\sqrt{B} \geqslant 0$ với mọi biến, thì:
> $$A^2 + \sqrt{B} = 0 \iff \begin{cases} A = 0 \\ B = 0 \end{cases}$$
> Phương pháp này áp dụng cho tổng các lũy thừa chẵn, căn bậc hai số học, và giá trị tuyệt đối.

#### Bài toán 4.1
Tìm các số thực $x, y$ thỏa mãn đẳng thức:
$$(2x - 6)^2 + \sqrt{3y + 12} = 0.$$

**Lời giải chi tiết:**
Điều kiện xác định: $3y + 12 \geqslant 0 \iff y \geqslant -4$.
Nhận xét:
- Với mọi $x \in \mathbb{R}$, ta luôn có $(2x - 6)^2 \geqslant 0$. Dấu "$=$" xảy ra khi $2x - 6 = 0 \iff x = 3$.
- Với mọi $y \geqslant -4$, ta luôn có $\sqrt{3y + 12} \geqslant 0$. Dấu "$=$" xảy ra khi $3y + 12 = 0 \iff y = -4$.
Tổng của hai số không âm bằng $0$ khi và chỉ khi cả hai số đồng thời bằng $0$:
$$\begin{cases} (2x - 6)^2 = 0 \\ \sqrt{3y + 12} = 0 \end{cases} \iff \begin{cases} 2x - 6 = 0 \\ 3y + 12 = 0 \end{cases} \iff \begin{cases} x = 3 \\ y = -4 \end{cases}$$
Vậy cặp số $(x; y)$ thỏa mãn đề bài là $(3; -4).$

---

### Chuyên đề 5: Tìm giá trị lớn nhất và nhỏ nhất (Cực trị) của biểu thức chứa căn

> [!TIP]
> **Phương pháp đánh giá bất đẳng thức căn bản:**
> 1. Với mọi $x$ trong tập xác định: $\sqrt{x} \geqslant 0$. Dấu "$=$" xảy ra khi $x = 0$.
> 2. Đánh giá biểu thức dạng phân số: Mẫu số càng nhỏ thì phân số càng lớn (với tử số dương cố định).

#### Bài toán 5.1
a) Tìm giá trị nhỏ nhất của biểu thức: $A = \sqrt{x - 5} + 12.$
b) Tìm giá trị lớn nhất của biểu thức: $B = \dfrac{18}{\sqrt{x} + 3}.$

**Lời giải chi tiết:**
a) Xét biểu thức $A = \sqrt{x - 5} + 12$:
- Điều kiện xác định: $x - 5 \geqslant 0 \iff x \geqslant 5$.
- Với mọi $x \geqslant 5$, ta có $\sqrt{x - 5} \geqslant 0$.
- Cộng $12$ vào hai vế:
  $$A = \sqrt{x - 5} + 12 \geqslant 0 + 12 = 12.$$
- Dấu đẳng thức xảy ra khi:
  $$\sqrt{x - 5} = 0 \iff x - 5 = 0 \iff x = 5\text{ (thỏa mãn)}.$$
Vậy giá trị nhỏ nhất của $A$ là $12$, đạt được khi $x = 5.$

b) Xét biểu thức $B = \dfrac{18}{\sqrt{x} + 3}$:
- Điều kiện xác định: $x \geqslant 0$.
- Với mọi $x \geqslant 0$, ta có $\sqrt{x} \geqslant 0$.
- Cộng $3$ vào hai vế: $\sqrt{x} + 3 \geqslant 3 > 0$.
- Vì tử số $18 > 0$ và mẫu số luôn dương, nghịch đảo hai vế đổi chiều:
  $$B = \dfrac{18}{\sqrt{x} + 3} \leqslant \dfrac{18}{3} = 6.$$
- Dấu đẳng thức xảy ra khi:
  $$\sqrt{x} = 0 \iff x = 0\text{ (thỏa mãn)}.$$
Vậy giá trị lớn nhất của $B$ là $6$, đạt được khi $x = 0.$

---

## 4. Bộ Quiz Trắc nghiệm tương tác (10 câu)

```quiz
type: choice
question: 'Số nào sau đây là số vô tỉ?'
options:
  - 'A) 0,35'
  - 'B) 1,(45)'
  - 'C) \sqrt{7}'
  - 'D) \sqrt{25}'
answer: 3
explanation: 'A là số thập phân hữu hạn (hữu tỉ); B là số thập phân vô hạn tuần hoàn (hữu tỉ); D có \sqrt{25} = 5 là số tự nhiên (hữu tỉ). Riêng \sqrt{7} có 7 không phải số chính phương nên là số thập phân vô hạn không tuần hoàn, tức số vô tỉ.'
```

```quiz
type: choice
question: 'Căn bậc hai số học của 144 bằng bao nhiêu?'
options:
  - 'A) -12'
  - 'B) 12'
  - 'C) \pm 12'
  - 'D) 72'
answer: 2
explanation: 'Căn bậc hai số học của số a \geqslant 0 là số không âm x sao cho x^2 = a. Do đó \sqrt{144} = 12 (chỉ nhận giá trị không âm, không lấy \pm 12).'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'A) \sqrt{-49} = -7'
  - 'B) \sqrt{0} không xác định'
  - 'C) \sqrt{64} = 8'
  - 'D) \sqrt{16} = \pm 4'
answer: 3
explanation: 'A sai vì căn số âm không xác định; B sai vì \sqrt{0} = 0; D sai vì căn bậc hai số học chỉ nhận giá trị không âm. Do đó C đúng.'
```

```quiz
type: choice
question: 'Tính giá trị của biểu thức: M = \sqrt{\dfrac{16}{81}} - \sqrt{0{,}04}'
options:
  - 'A) \dfrac{11}{45}'
  - 'B) \dfrac{2}{9}'
  - 'C) \dfrac{4}{45}'
  - 'D) \dfrac{1}{5}'
answer: 1
explanation: 'Ta có \sqrt{\dfrac{16}{81}} = \dfrac{4}{9} và \sqrt{0{,}04} = 0{,}2 = \dfrac{1}{5}. Do đó M = \dfrac{4}{9} - \dfrac{1}{5} = \dfrac{20 - 9}{45} = \dfrac{11}{45}.'
```

```quiz
type: choice
question: 'So sánh 4 và \sqrt{17}:'
options:
  - 'A) 4 > \sqrt{17}'
  - 'B) 4 < \sqrt{17}'
  - 'C) 4 = \sqrt{17}'
  - 'D) Không so sánh được'
answer: 2
explanation: 'Ta có 4 = \sqrt{4^2} = \sqrt{16}. Vì 16 < 17 nên \sqrt{16} < \sqrt{17}, suy ra 4 < \sqrt{17}.'
```

```quiz
type: choice
question: 'Biểu thức \sqrt{2x - 8} có nghĩa khi và chỉ khi:'
options:
  - 'A) x > 4'
  - 'B) x \geqslant 4'
  - 'C) x \leqslant 4'
  - 'D) x \geqslant 0'
answer: 2
explanation: 'Căn thức \sqrt{A} có nghĩa khi A \geqslant 0. Do đó 2x - 8 \geqslant 0 \iff 2x \geqslant 8 \iff x \geqslant 4.'
```

```quiz
type: choice
question: 'Tìm x không âm biết: 2\sqrt{x} = 10'
options:
  - 'A) x = 5'
  - 'B) x = 100'
  - 'C) x = 25'
  - 'D) x = \pm 25'
answer: 3
explanation: '2\sqrt{x} = 10 \iff \sqrt{x} = 5 \iff x = 5^2 = 25.'
```

```quiz
type: choice
question: 'Dùng máy tính cầm tay, làm tròn \sqrt{11} đến chữ số thập phân thứ hai:'
options:
  - 'A) 3,31'
  - 'B) 3,32'
  - 'C) 3,30'
  - 'D) 3,33'
answer: 2
explanation: 'Bấm máy tính ta được \sqrt{11} = 3{,}31662479\dots Chữ số thứ ba ở phần thập phân là 6 \geqslant 5 nên làm tròn lên được 3,32.'
```

```quiz
type: choice
question: 'Một hình vuông có diện tích 50 cm^2. Độ dài cạnh hình vuông đó bằng:'
options:
  - 'A) 25 cm'
  - 'B) 5\sqrt{2} cm'
  - 'C) 10 cm'
  - 'D) 7 cm'
answer: 2
explanation: 'Cạnh hình vuông là a = \sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2} cm (xấp xỉ 7,07 cm).'
```

```quiz
type: choice
question: 'Giá trị nhỏ nhất của biểu thức K = \sqrt{x + 1} - 7 (với x \geqslant -1) là:'
options:
  - 'A) -7'
  - 'B) 0'
  - 'C) 1'
  - 'D) -6'
answer: 1
explanation: 'Vì \sqrt{x + 1} \geqslant 0 với mọi x \geqslant -1 nên K \geqslant 0 - 7 = -7. Dấu bằng đạt được khi x = -1.'
```

---

## 5. Phiếu bài tập tự luyện toàn diện (10 bài tập tự luận)

### Đề bài

**Bài 1 (Nhận biết):** Điền các ký hiệu thích hợp ($\in, \notin$) vào các ô trống:
- a) $\sqrt{49} \dots \mathbb{Q}$
- b) $\sqrt{10} \dots \mathbb{I}$
- c) $\pi \dots \mathbb{Q}$
- d) $-3{,}5 \dots \mathbb{I}$
- e) $\sqrt{\dfrac{9}{16}} \dots \mathbb{Q}$

**Bài 2 (Tính toán căn thức cơ bản):** Tính căn bậc hai số học của các số sau:
$$100;\quad 256;\quad 0{,}81;\quad 0{,}0016;\quad \dfrac{36}{49};\quad 2\dfrac{7}{9}.$$

**Bài 3 (Tính giá trị biểu thức):** Thực hiện phép tính:
- a) $A = 3\sqrt{49} - 2\sqrt{81} + \sqrt{121}.$
- b) $B = \sqrt{0{,}36} \cdot \sqrt{25} - \sqrt{\dfrac{64}{25}} : \dfrac{4}{5}.$
- c) $C = \left(\sqrt{16} - \sqrt{9}\right) \cdot \left(\sqrt{16} + \sqrt{9}\right).$

**Bài 4 (Tìm $x$):** Tìm số thực $x$, biết:
- a) $\sqrt{x} = 9$
- b) $5\sqrt{x} - 4 = 16$
- c) $\sqrt{3x - 5} = 4$
- d) $x^2 = 81$
- e) $(x + 2)^2 = 25$

**Bài 5 (So sánh không dùng máy tính):** So sánh các cặp số sau:
- a) $\sqrt{37}$ và $6$
- b) $8$ và $\sqrt{65}$
- c) $4\sqrt{3}$ và $3\sqrt{5}$
- d) $\sqrt{7} + \sqrt{15}$ và $6$

**Bài 6 (Bấm máy tính và làm tròn):**
Dùng máy tính cầm tay, tính và làm tròn các số sau đến chữ số thập phân thứ hai:
$$\sqrt{6};\quad \sqrt{14};\quad \sqrt{35};\quad \sqrt{115}.$$

**Bài 7 (Bài toán thực tế):**
Một bể bơi hình vuông có diện tích mặt nước là $72\text{ m}^2$.
a) Tính độ dài cạnh của bể bơi (làm tròn đến hàng phần mười của mét).
b) Người ta muốn lát gạch viền xung quanh bờ bể bơi. Biết chi phí lát viền là $150\,000$ đồng mỗi mét. Tính tổng chi phí lát viền bể bơi đó.

**Bài 8 (Bẫy nhận thức):**
Hai bạn Nam và Việt tranh luận về kết quả phép tính $\sqrt{64}$.
- Nam nói: $\sqrt{64} = 8$.
- Việt nói: $\sqrt{64} = \pm 8$ vì cả $8^2 = 64$ và $(-8)^2 = 64$.
Theo em, bạn nào đúng, bạn nào sai? Hãy giải thích rõ sự khác biệt giữa "căn bậc hai số học của một số" và "nghiệm của phương trình $x^2 = a$".

**Bài 9 (Nâng cao - Kẹp số):**
Chứng minh rằng với mọi số tự nhiên $n \geqslant 1$, số $\sqrt{n^2 + n}$ không thể là một số nguyên.

**Bài 10 (Nâng cao - Cực trị):**
Cho biểu thức:
$$P = \dfrac{24}{\sqrt{x + 2} + 4}.$$
a) Tìm điều kiện xác định của biểu thức $P$.
b) Tìm giá trị lớn nhất của $P$ và giá trị của $x$ tương ứng.

---

### Hướng dẫn giải chi tiết

**Bài 1:**
- a) $\sqrt{49} = 7 \in \mathbb{Q}.$
- b) $10$ không phải số chính phương $\implies \sqrt{10} \in \mathbb{I}.$
- c) $\pi \notin \mathbb{Q}$ (vì $\pi$ là số vô tỉ).
- d) $-3{,}5 = -\dfrac{7}{2} \in \mathbb{Q} \implies -3{,}5 \notin \mathbb{I}.$
- e) $\sqrt{\dfrac{9}{16}} = \dfrac{3}{4} \in \mathbb{Q}.$

**Bài 2:**
- $\sqrt{100} = 10.$
- $\sqrt{256} = 16.$
- $\sqrt{0{,}81} = 0{,}9.$
- $\sqrt{0{,}0016} = 0{,}04.$
- $\sqrt{\dfrac{36}{49}} = \dfrac{6}{7}.$
- $2\dfrac{7}{9} = \dfrac{25}{9} \implies \sqrt{2\dfrac{7}{9}} = \sqrt{\dfrac{25}{9}} = \dfrac{5}{3}.$

**Bài 3:**
- a) $A = 3 \cdot 7 - 2 \cdot 9 + 11 = 21 - 18 + 11 = 14.$
- b) $B = 0{,}6 \cdot 5 - \dfrac{8}{5} : \dfrac{4}{5} = 3 - \left(\dfrac{8}{5} \cdot \dfrac{5}{4}\right) = 3 - 2 = 1.$
- c) $C = (4 - 3) \cdot (4 + 3) = 1 \cdot 7 = 7.$

**Bài 4:**
- a) $\sqrt{x} = 9 \implies x = 9^2 = 81.$
- b) $5\sqrt{x} = 20 \implies \sqrt{x} = 4 \implies x = 16.$
- c) $\sqrt{3x - 5} = 4 \implies 3x - 5 = 16 \implies 3x = 21 \implies x = 7.$
- d) $x^2 = 81 \implies x = 9$ hoặc $x = -9.$
- e) $(x + 2)^2 = 25 \implies x + 2 = 5$ hoặc $x + 2 = -5 \implies x = 3$ hoặc $x = -7.$

**Bài 5:**
- a) $6 = \sqrt{36}$. Vì $37 > 36$ nên $\sqrt{37} > 6.$
- b) $8 = \sqrt{64}$. Vì $64 < 65$ nên $8 < \sqrt{65}.$
- c) $4\sqrt{3} = \sqrt{16 \cdot 3} = \sqrt{48}$. $3\sqrt{5} = \sqrt{9 \cdot 5} = \sqrt{45}$. Vì $48 > 45$ nên $4\sqrt{3} > 3\sqrt{5}.$
- d) Ta có $\sqrt{7} < \sqrt{9} = 3$ và $\sqrt{15} < \sqrt{16} = 4$. Do đó $\sqrt{7} + \sqrt{15} < 3 + 4 = 7$.
  Để so sánh với $6$: Bình phương $(\sqrt{7} + \sqrt{15})^2 = 7 + 15 + 2\sqrt{105} = 22 + 2\sqrt{105}$.
  Vì $105 > 100 \implies \sqrt{105} > 10 \implies 2\sqrt{105} > 20$.
  Suy ra $(\sqrt{7} + \sqrt{15})^2 > 22 + 20 = 42 > 36 = 6^2$.
  Vậy $\sqrt{7} + \sqrt{15} > 6.$

**Bài 6:**
- $\sqrt{6} \approx 2{,}4494\dots \approx 2{,}45.$
- $\sqrt{14} \approx 3{,}7416\dots \approx 3{,}74.$
- $\sqrt{35} \approx 5{,}9160\dots \approx 5{,}92.$
- $\sqrt{115} \approx 10{,}7238\dots \approx 10{,}72.$

**Bài 7:**
a) Độ dài cạnh bể bơi là $a = \sqrt{72} \approx 8{,}485\dots \approx 8{,}5\text{ m}.$
b) Chu vi bể bơi là $P = 4 \cdot a = 4 \cdot \sqrt{72} \approx 4 \cdot 8{,}48528 = 33{,}94\text{ m}.$
Tổng chi phí lát viền: $33{,}94 \cdot 150\,000 \approx 5\,091\,000$ đồng (khoảng $5{,}09$ triệu đồng).

**Bài 8:**
- Bạn Nam đúng, bạn Việt sai.
- Giải thích: Theo định nghĩa toán học, ký hiệu căn bậc hai số học $\sqrt{a}$ luôn nhận một giá trị **không âm duy nhất**. Do đó $\sqrt{64} = 8$.
- Việt đã nhầm lẫn giữa định nghĩa căn bậc hai số học với việc giải phương trình $x^2 = 64$. Phương trình $x^2 = 64$ có hai nghiệm là $x = \sqrt{64} = 8$ và $x = -\sqrt{64} = -8$.

**Bài 9:**
Xét số $A = n^2 + n$ với $n \in \mathbb{N}^*$:
Ta có: $n^2 < n^2 + n$ (vì $n > 0$).
Mặt khác: $n^2 + n < n^2 + 2n + 1 = (n + 1)^2$.
Suy ra: $n^2 < n^2 + n < (n + 1)^2$.
Khai căn từng vế: $n < \sqrt{n^2 + n} < n + 1$.
Vì $\sqrt{n^2 + n}$ bị kẹp giữa hai số nguyên liên tiếp là $n$ và $n + 1$ nên nó không thể là một số nguyên. $\blacksquare$

**Bài 10:**
a) Điều kiện xác định: $x + 2 \geqslant 0 \iff x \geqslant -2$.
b) Với $x \geqslant -2 \implies \sqrt{x + 2} \geqslant 0$.
Suy ra mẫu số: $\sqrt{x + 2} + 4 \geqslant 0 + 4 = 4$.
Vì tử số $24 > 0$ nên:
$$P = \dfrac{24}{\sqrt{x + 2} + 4} \leqslant \dfrac{24}{4} = 6.$$
Dấu "$=$" xảy ra khi $\sqrt{x + 2} = 0 \iff x = -2$ (thỏa mãn điều kiện).
Vậy giá trị lớn nhất của $P$ là $6$, đạt được khi $x = -2.$

---

## 6. Đề kiểm tra đánh giá năng lực

---

### Đề kiểm tra 15 phút

#### Phần I: Trắc nghiệm (4 câu — 4,0 điểm)

**Câu 1:** Số nào sau đây là số hữu tỉ?
- A) $\sqrt{5}$
- B) $\sqrt{49}$
- C) $\pi$
- D) $0{,}1010010001\dots$

**Câu 2:** Giá trị của $\sqrt{0{,}25}$ là:
- A) $0{,}05$
- B) $0{,}5$
- C) $\pm 0{,}5$
- D) $5$

**Câu 3:** Khẳng định nào sau đây là **SAI**?
- A) $\sqrt{81} = 9$
- B) $(\sqrt{7})^2 = 7$
- C) $\sqrt{-16} = -4$
- D) $\sqrt{0} = 0$

**Câu 4:** Tìm $x$ không âm biết $\sqrt{x} = 6$:
- A) $x = 36$
- B) $x = 12$
- C) $x = \sqrt{6}$
- D) $x = \pm 36$

#### Phần II: Tự luận (2 câu — 6,0 điểm)

**Câu 5 (3,0 điểm):** Tính giá trị biểu thức:
$$M = 2\sqrt{36} - 3\sqrt{16} + \sqrt{\dfrac{25}{4}}.$$

**Câu 6 (3,0 điểm):** Một tấm bìa hình vuông có diện tích $80\text{ cm}^2$.
a) Tính độ dài cạnh của tấm bìa (làm tròn đến chữ số thập phân thứ hai).
b) Độ dài cạnh của tấm bìa có phải là một số hữu tỉ không? Vì sao?

---

#### Đáp án & Thang điểm đề 15 phút

**Phần I: Trắc nghiệm (4,0 điểm — mỗi câu 1,0 điểm)**
1. **B** ($\sqrt{49} = 7 \in \mathbb{Q}$).
2. **B** ($0{,}5^2 = 0{,}25$).
3. **C** (Căn số âm không có nghĩa).
4. **A** ($x = 6^2 = 36$).

**Phần II: Tự luận (6,0 điểm)**
- **Câu 5 (3,0 điểm):**
  - $\sqrt{36} = 6 \implies 2\sqrt{36} = 12$ *(1,0 điểm)*
  - $\sqrt{16} = 4 \implies 3\sqrt{16} = 12$ *(1,0 điểm)*
  - $\sqrt{\dfrac{25}{4}} = \dfrac{5}{2} = 2{,}5$ *(0,5 điểm)*
  - $M = 12 - 12 + 2{,}5 = 2{,}5$ *(0,5 điểm)*
- **Câu 6 (3,0 điểm):**
  - a) Cạnh tấm bìa là $a = \sqrt{80} \approx 8{,}94427\dots \approx 8{,}94\text{ cm}$ *(1,5 điểm)*
  - b) Độ dài cạnh tấm bìa là $\sqrt{80}$. Vì $80$ không phải là số chính phương nên $\sqrt{80}$ là số thập phân vô hạn không tuần hoàn, tức là số vô tỉ, không phải số hữu tỉ *(1,5 điểm)*.

---

### Đề kiểm tra 45 phút định kỳ

#### Ma trận đề thi

| Mức độ nhận thức | Nhận biết (30%) | Thông hiểu (30%) | Vận dụng (30%) | Vận dụng cao (10%) | Tổng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Số vô tỉ & Tập hợp $\mathbb{I}$** | 1 TN (0,5đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | **3,5đ** |
| **Căn bậc hai số học** | 2 TN (1,0đ) | 1 TN (0,5đ) + 1 TL (1,0đ) | 1 TL (1,0đ) | | **3,5đ** |
| **So sánh & Ứng dụng thực tế**| 1 TN (0,5đ) | 1 TN (0,5đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | **3,0đ** |
| **Tổng điểm** | **2,0đ** | **3,0đ** | **3,0đ** | **2,0đ** | **10,0đ** |

---

#### Phần I: Trắc nghiệm khách quan (6 câu — 3,0 điểm)

**Câu 1:** Trong các khẳng định sau, khẳng định nào đúng?
- A) Mọi số vô tỉ đều viết được dưới dạng phân số tối giản.
- B) Tập hợp số vô tỉ được ký hiệu là $\mathbb{Q}$.
- C) Số thập phân vô hạn không tuần hoàn là số vô tỉ.
- D) $\sqrt{9}$ là một số vô tỉ.

**Câu 2:** Biểu thức $\sqrt{x - 3}$ có nghĩa khi:
- A) $x \geqslant 3$
- B) $x > 3$
- C) $x \leqslant 3$
- D) $x \ne 3$

**Câu 3:** Giá trị của biểu thức $P = \sqrt{0{,}64} + \sqrt{\dfrac{9}{100}}$ bằng:
- A) $1{,}1$
- B) $0{,}11$
- C) $0{,}73$
- D) $1{,}4$

**Câu 4:** Cho $x^2 = 121$. Giá trị của $x$ là:
- A) $x = 11$
- B) $x = -11$
- C) $x = \pm 11$
- D) $x = 60{,}5$

**Câu 5:** So sánh $3\sqrt{2}$ và $\sqrt{19}$:
- A) $3\sqrt{2} > \sqrt{19}$
- B) $3\sqrt{2} < \sqrt{19}$
- C) $3\sqrt{2} = \sqrt{19}$
- D) Không xác định được

**Câu 6:** Bấm máy tính cầm tay, căn bậc hai số học của $13$ làm tròn đến hàng phần mười là:
- A) $3{,}6$
- B) $3{,}7$
- C) $3{,}61$
- D) $3{,}60$

---

#### Phần II: Tự luận (4 bài — 7,0 điểm)

**Bài 1 (2,0 điểm):** Tính giá trị của các biểu thức sau:
- a) $A = 5\sqrt{64} - 4\sqrt{49} + 3\sqrt{0{,}01}.$
- b) $B = \sqrt{13^2 - 12^2} + \sqrt{\dfrac{144}{25}} \cdot \dfrac{5}{6}.$

**Bài 2 (2,0 điểm):** Tìm số thực $x$, biết:
- a) $3\sqrt{x} + 1 = 19$
- b) $(2x - 3)^2 = 25$

**Bài 3 (2,0 điểm):**
Một người thợ kim hoàn muốn cắt một thanh vàng hình chữ nhật có diện tích $54\text{ cm}^2$ để đúc lại thành một miếng vàng hình vuông có cùng diện tích.
a) Tính độ dài cạnh của miếng vàng hình vuông (làm tròn đến chữ số thập phân thứ hai).
b) Không dùng máy tính cầm tay, hãy chứng minh rằng cạnh của miếng vàng hình vuông lớn hơn $7\text{ cm}$ nhưng nhỏ hơn $8\text{ cm}$.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Cho biểu thức:
$$Q = \dfrac{\sqrt{x} + 10}{\sqrt{x} + 3} \quad (x \geqslant 0).$$
a) Tìm số nguyên $x$ để biểu thức $Q$ đạt giá trị nguyên.
b) Tìm giá trị lớn nhất của $Q$.

---

#### Đáp án & Hướng dẫn chấm đề 45 phút

**Phần I: Trắc nghiệm (3,0 điểm — mỗi câu 0,5 điểm)**
1. **C** (Định nghĩa chuẩn của số vô tỉ).
2. **A** ($x - 3 \geqslant 0 \iff x \geqslant 3$).
3. **A** ($0{,}8 + 0{,}3 = 1{,}1$).
4. **C** (Phương trình $x^2 = 121$ có hai nghiệm đối nhau $\pm 11$).
5. **B** ($3\sqrt{2} = \sqrt{18} < \sqrt{19}$).
6. **A** ($\sqrt{13} \approx 3{,}60555\dots \approx 3{,}6$).

**Phần II: Tự luận (7,0 điểm)**

- **Bài 1 (2,0 điểm):**
  - a) $A = 5 \cdot 8 - 4 \cdot 7 + 3 \cdot 0{,}1 = 40 - 28 + 0{,}3 = 12{,}3$ *(1,0 điểm)*.
  - b) $\sqrt{13^2 - 12^2} = \sqrt{169 - 144} = \sqrt{25} = 5$ *(0,5 điểm)*.
    $\sqrt{\dfrac{144}{25}} \cdot \dfrac{5}{6} = \dfrac{12}{5} \cdot \dfrac{5}{6} = 2$ *(0,25 điểm)*.
    $B = 5 + 2 = 7$ *(0,25 điểm)*.

- **Bài 2 (2,0 điểm):**
  - a) $3\sqrt{x} = 18 \implies \sqrt{x} = 6 \implies x = 6^2 = 36$ *(1,0 điểm)*.
  - b) $(2x - 3)^2 = 25 \implies 2x - 3 = 5$ hoặc $2x - 3 = -5$ *(0,25 điểm)*.
    - TH1: $2x = 8 \implies x = 4$ *(0,25 điểm)*.
    - TH2: $2x = -2 \implies x = -1$ *(0,25 điểm)*.
    - Kết luận: $x \in \{4; -1\}$ *(0,25 điểm)*.

- **Bài 3 (2,0 điểm):**
  - a) Cạnh miếng vàng hình vuông là $a = \sqrt{54} \approx 7{,}348469\dots \approx 7{,}35\text{ cm}$ *(1,0 điểm)*.
  - b) Ta có $7^2 = 49$ và $8^2 = 64$ *(0,5 điểm)*.
    Vì $49 < 54 < 64$ nên $\sqrt{49} < \sqrt{54} < \sqrt{64} \iff 7 < \sqrt{54} < 8$.
    Vậy cạnh miếng vàng hình vuông lớn hơn $7\text{ cm}$ và nhỏ hơn $8\text{ cm}$ *(0,5 điểm)*.

- **Bài 4 (1,0 điểm):**
  - a) Ta có $Q = \dfrac{(\sqrt{x} + 3) + 7}{\sqrt{x} + 3} = 1 + \dfrac{7}{\sqrt{x} + 3}$ *(0,25 điểm)*.
    Để $Q \in \mathbb{Z}$ thì $(\sqrt{x} + 3) \in \text{Ư}(7) = \{-7; -1; 1; 7\}$.
    Vì $x \geqslant 0 \implies \sqrt{x} \geqslant 0 \implies \sqrt{x} + 3 \geqslant 3$.
    Do đó $\sqrt{x} + 3 = 7 \implies \sqrt{x} = 4 \implies x = 16$ *(0,25 điểm)*.
    Vậy $x = 16$.
  - b) Vì $\sqrt{x} \geqslant 0 \implies \sqrt{x} + 3 \geqslant 3$.
    Suy ra $\dfrac{7}{\sqrt{x} + 3} \leqslant \dfrac{7}{3} \implies Q = 1 + \dfrac{7}{\sqrt{x} + 3} \leqslant 1 + \dfrac{7}{3} = \dfrac{10}{3}$ *(0,25 điểm)*.
    Dấu "$=$" xảy ra khi $x = 0$.
    Vậy giá trị lớn nhất của $Q$ là $\dfrac{10}{3}$ khi $x = 0$ *(0,25 điểm)*.
