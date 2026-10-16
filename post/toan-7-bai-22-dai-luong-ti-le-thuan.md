---
title: 'Bài 22: Đại lượng tỉ lệ thuận - Lý thuyết, Hệ số tỉ lệ, Các dạng toán và 5 Chuyên đề Thực tế'
description: 'Làm chủ Đại lượng tỉ lệ thuận y = kx, tính chất tỉ số không đổi, phương pháp giải toán chia phần tỉ lệ thuận, ứng dụng vật lý kinh tế và 5 chuyên đề kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Tỉ lệ thuận
  - Hệ số tỉ lệ
  - Bài toán thực tế
  - Kết nối tri thức
grade: 7
---

# Bài 22. Đại lượng tỉ lệ thuận

Trong cuộc sống hàng ngày, chúng ta liên tục bắt gặp những mối quan hệ nhân quả tương đồng: khi đi xe với vận tốc không đổi, thời gian đi càng dài thì quãng đường đi được càng xa; khi mua càng nhiều tập vở cùng loại thì tổng số tiền phải trả càng lớn; một thanh sắt càng dài thì khối lượng của nó càng nặng. Những mối liên hệ mà trong đó **đại lượng này tăng (hoặc giảm) bao nhiêu lần thì đại lượng kia cũng tăng (hoặc giảm) bấy nhiêu lần** được toán học gọi là **Đại lượng tỉ lệ thuận**.

Tỉ lệ thuận chính là nền móng đại số đầu tiên dẫn dắt các em đến với khái niệm hàm số bậc nhất và những định luật vật lý cơ bản nhất của vũ trụ (như định luật Ohm về dòng điện, định luật Hooke về lò xo hay định luật II Newton). Trong bài học này, chúng ta sẽ cùng khám phá bản chất của hệ số tỉ lệ $k$, các tính chất cốt lõi và phương pháp giải quyết gọn gàng mọi bài toán thực tế!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 22: ĐẠI LƯỢNG TỈ LỆ THUẬN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $y$ tỉ lệ thuận với $x$ theo hệ số $k \neq 0$ nếu: $y = kx$.<br>• $k$ gọi là <strong>hệ số tỉ lệ</strong>.<br>• Khi đó, $x$ cũng tỉ lệ thuận với $y$ theo hệ số $\frac{1}{k}$ ($x = \frac{1}{k}y$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính chất 1: Tỉ số không đổi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{y_1}{x_1} = \frac{y_2}{x_2} = \dots = \frac{y_n}{x_n} = k$.<br>• Tỉ số giữa hai giá trị tương ứng của $y$ và $x$ luôn là hằng số $k$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất 2: Tỉ số đồng dạng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{x_1}{x_2} = \frac{y_1}{y_2}$; &nbsp; $\frac{x_1}{x_3} = \frac{y_1}{y_3}$.<br>• Tỉ số hai giá trị bất kì của $x$ bằng tỉ số hai giá trị tương ứng của $y$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Chia phần tỉ lệ thuận</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Kết hợp với tính chất dãy tỉ số bằng nhau: $\frac{x}{a} = \frac{y}{b} = \frac{z}{c} = \frac{x+y+z}{a+b+c}$.<br>• Giải toán chia tiền, chia nguyên vật liệu sản xuất.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Tính tiền:** Một chiếc bút bi có giá $5\,000$ đồng. Mua $3$ chiếc bút như vậy hết bao nhiêu tiền? Mua $6$ chiếc hết bao nhiêu tiền? Khi số lượng bút tăng gấp đôi thì số tiền phải trả tăng gấp mấy lần?
2. **Quãng đường chuyển động:** Một người đi xe đạp với vận tốc không đổi $15\text{ km/h}$. Trong $1$ giờ người đó đi được bao nhiêu km? Trong $3$ giờ đi được bao nhiêu km?
3. **Tìm hệ số:** Cho biết $y = 4x$. Khi $x = 5$ thì $y$ bằng bao nhiêu? Khi $y = 36$ thì $x$ bằng bao nhiêu?
4. **Tỉ số hai giá trị:** Điền số thích hợp vào dấu hỏi chấm: $\frac{10}{2} = \frac{25}{?}$.
5. **Dự đoán:** Một người làm một sản phẩm mất $40$ phút. Nếu người đó làm $5$ sản phẩm như thế (với cùng năng suất) thì cần bao nhiêu thời gian?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - Mua $3$ chiếc: $3 \times 5\,000 = 15\,000$ đồng.
   - Mua $6$ chiếc: $6 \times 5\,000 = 30\,000$ đồng.
   - Khi số lượng bút tăng gấp đôi (từ $3$ lên $6$) thì số tiền phải trả cũng **tăng gấp đôi** (từ $15\,000$ lên $30\,000$ đồng).
2. **Trả lời:**
   - Trong $1$ giờ đi được: $15\text{ km}$.
   - Trong $3$ giờ đi được: $15 \times 3 = 45\text{ km}$.
3. **Trả lời:**
   - Khi $x = 5 \implies y = 4 \times 5 = 20$.
   - Khi $y = 36 \implies 4x = 36 \implies x = 9$.
4. **Trả lời:** Ta có $\frac{10}{2} = 5$, do đó $\frac{25}{?} = 5 \implies ? = 5$.
5. **Trả lời:** Cần: $40 \times 5 = 200$ phút ($3$ giờ $20$ phút).
</details>

---

## I. Lý thuyết trọng tâm

### 1. Định nghĩa Đại lượng tỉ lệ thuận

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức:
> $$y = kx$$
> (với $k$ là một hằng số khác $0$)
> thì ta nói **$y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $k$**.

**Tính chất hai chiều (Tính đối xứng nghịch đảo):**
Khi $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $k$ ($k \neq 0$), thì từ $y = kx$ ta suy ra:
$$x = \frac{1}{k} y$$
Do đó, **$x$ cũng tỉ lệ thuận với $y$ theo hệ số tỉ lệ là $\frac{1}{k}$**.

*Ví dụ:*
Nếu $y = 3x$ ($y$ tỉ lệ thuận với $x$ theo hệ số $3$), thì $x = \frac{1}{3}y$ ($x$ tỉ lệ thuận với $y$ theo hệ số $\frac{1}{3}$).
Vì vậy, khi hai đại lượng tỉ lệ thuận với nhau, ta nói ngắn gọn là **hai đại lượng tỉ lệ thuận**.

---

### 2. Các Tính chất của Hai đại lượng tỉ lệ thuận

Giả sử $y$ và $x$ là hai đại lượng tỉ lệ thuận với nhau: $y = kx$.
Với mỗi giá trị $x_1, x_2, x_3, \dots$ khác $0$ của $x$, ta có các giá trị tương ứng $y_1, y_2, y_3, \dots$ của $y$. Khi đó:

> [!IMPORTANT]
> **TÍNH CHẤT 1 (Tỉ số hai giá trị tương ứng luôn không đổi):**
> $$\frac{y_1}{x_1} = \frac{y_2}{x_2} = \frac{y_3}{x_3} = \dots = k$$

> [!IMPORTANT]
> **TÍNH CHẤT 2 (Tỉ số hai giá trị bất kỳ của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia):**
> $$\frac{x_1}{x_2} = \frac{y_1}{y_2};\quad \frac{x_1}{x_3} = \frac{y_1}{y_3};\quad \frac{x_2}{x_3} = \frac{y_2}{y_3};\quad \dots$$

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết, xác định hệ số tỉ lệ và viết công thức liên hệ

**Phương pháp giải:**
1. Để kiểm tra $y$ có tỉ lệ thuận với $x$ hay không: xét tỉ số $\frac{y_i}{x_i}$ tại từng cặp giá trị tương ứng. Nếu mọi tỉ số đều bằng nhau và bằng một hằng số $k \neq 0$, thì $y$ tỉ lệ thuận với $x$.
2. Hệ số tỉ lệ: $k = \frac{y_i}{x_i}$.
3. Công thức biểu diễn $y$ theo $x$: $y = kx$.
4. Công thức biểu diễn $x$ theo $y$: $x = \frac{1}{k}y$.

---

#### Bài toán 1:
Cho biết đại lượng $y$ tỉ lệ thuận với đại lượng $x$, và khi $x = 4$ thì $y = 12$.
a) Tìm hệ số tỉ lệ $k$ của $y$ đối với $x$.
b) Hãy biểu diễn $y$ theo $x$.
c) Tìm hệ số tỉ lệ của $x$ đối với $y$ và biểu diễn $x$ theo $y$.
d) Tính giá trị của $y$ khi $x = -3$; $x = 5.5$.
e) Tính giá trị của $x$ khi $y = 24$; $y = -18$.

**Lời giải:**

a) Vì $y$ tỉ lệ thuận với $x$ nên $y = kx$.
Khi $x = 4$ thì $y = 12$, do đó:
$$k = \frac{y}{x} = \frac{12}{4} = 3$$
Vậy hệ số tỉ lệ của $y$ đối với $x$ là $k = 3$.

b) Biểu diễn $y$ theo $x$:
$$y = 3x$$

c) Vì $y$ tỉ lệ thuận với $x$ theo hệ số $3$, nên $x$ tỉ lệ thuận với $y$ theo hệ số $\frac{1}{k} = \frac{1}{3}$.
Biểu diễn $x$ theo $y$:
$$x = \frac{1}{3}y$$

d) Thay các giá trị của $x$ vào công thức $y = 3x$:
- Khi $x = -3 \implies y = 3 \times (-3) = -9$.
- Khi $x = 5.5 \implies y = 3 \times 5.5 = 16.5$.

e) Thay các giá trị của $y$ vào công thức $x = \frac{1}{3}y$:
- Khi $y = 24 \implies x = \frac{1}{3} \times 24 = 8$.
- Khi $y = -18 \implies x = \frac{1}{3} \times (-18) = -6$.

---

### Dạng 2: Điền số thích hợp vào bảng giá trị tương ứng

**Phương pháp giải:**
1. Tìm cột đã có đủ cả hai giá trị $(x_0, y_0)$ để tính hệ số tỉ lệ $k = \frac{y_0}{x_0}$.
2. Với các cột còn thiếu $y$: lấy $x$ nhân với $k$ ($y = kx$).
3. Với các cột còn thiếu $x$: lấy $y$ chia cho $k$ ($x = \frac{y}{k}$).

---

#### Bài toán 2:
Cho biết $x$ và $y$ là hai đại lượng tỉ lệ thuận. Hãy điền các số thích hợp vào các ô trống trong bảng sau:

| $x$ | $-4$ | $-2$ | $1$ | $3$ | ? |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | ? | $10$ | ? | ? | $-25$ |

**Lời giải:**

Quan sát cột thứ hai có đủ $x = -2$ và $y = 10$.
Hệ số tỉ lệ của $y$ đối với $x$ là:
$$k = \frac{y}{x} = \frac{10}{-2} = -5$$
Vậy công thức liên hệ là: $y = -5x$ (hay $x = \frac{y}{-5}$).

Tính các ô trống còn lại:
- Cột 1: $x = -4 \implies y = -5 \times (-4) = 20$.
- Cột 3: $x = 1 \implies y = -5 \times 1 = -5$.
- Cột 4: $x = 3 \implies y = -5 \times 3 = -15$.
- Cột 5: $y = -25 \implies x = \frac{-25}{-5} = 5$.

Bảng hoàn thiện:

| $x$ | $-4$ | $-2$ | $1$ | $3$ | **$5$** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | **$20$** | $10$ | **$-5$** | **$-15$** | $-25$ |

---

### Dạng 3: Bài toán thực tế về đại lượng tỉ lệ thuận

**Phương pháp giải:**
1. Xác định hai đại lượng trong bài toán có quan hệ tỉ lệ thuận hay không (khi một đại lượng tăng gấp bao nhiêu lần thì đại lượng kia có tăng gấp bấy nhiêu lần không).
2. Gọi các đại lượng cần tìm là $x, y$ (kèm đơn vị).
3. Thiết lập tỉ lệ thức: $\frac{y_1}{x_1} = \frac{y_2}{x_2}$ hoặc $\frac{x_1}{x_2} = \frac{y_1}{y_2}$.
4. Tính toán và kết luận.

---

#### Bài toán 3 (Thực tế): Khối lượng và Thể tích của kim loại
Một thanh đồng chất có thể tích $15\text{ cm}^3$ thì nặng $133.5\text{ g}$.
Hỏi một khối kim loại cùng chất có thể tích $40\text{ cm}^3$ thì nặng bao nhiêu gam?

**Lời giải:**

Vì khối lượng $m$ và thể tích $V$ của cùng một chất là hai đại lượng tỉ lệ thuận với nhau (thông qua khối lượng riêng $D = \frac{m}{V}$), ta có:
$$\frac{m_1}{V_1} = \frac{m_2}{V_2}$$

Gọi khối lượng của khối kim loại $40\text{ cm}^3$ là $m_2$ (gam, điều kiện $m_2 > 0$).
Thay số vào tỉ lệ thức:
$$\frac{133.5}{15} = \frac{m_2}{40}$$

Suy ra:
$$m_2 = \frac{133.5 \times 40}{15} = 8.9 \times 40 = 356\text{ (g)}$$

Giá trị $356$ thỏa mãn điều kiện.
**Kết luận:** Khối kim loại thể tích $40\text{ cm}^3$ nặng $356\text{ g}$ (chính là đồng đỏ nguyên chất với khối lượng riêng $8.9\text{ g/cm}^3$).

---

### Dạng 4: Bài toán chia một số thành các phần tỉ lệ thuận

**Phương pháp giải:**
Để chia số $S$ thành các phần $x, y, z$ tỉ lệ thuận với các số $a, b, c$:
1. Thiết lập dãy tỉ số bằng nhau: $\frac{x}{a} = \frac{y}{b} = \frac{z}{c}$.
2. Thiết lập điều kiện tổng: $x + y + z = S$.
3. Áp dụng tính chất dãy tỉ số bằng nhau:
$$\frac{x}{a} = \frac{y}{b} = \frac{z}{c} = \frac{x + y + z}{a + b + c} = \frac{S}{a + b + c} = k$$
4. Suy ra: $x = a \cdot k$, $y = b \cdot k$, $z = c \cdot k$.

---

#### Bài toán 4: Tam giác có ba cạnh tỉ lệ thuận
Một mảnh đất hình tam giác có chu vi là $144\text{ m}$. Biết rằng độ dài ba cạnh của mảnh đất tỉ lệ thuận với các số $3; 4; 5$.
a) Tính độ dài ba cạnh của mảnh đất đó.
b) Mảnh đất này có phải là một tam giác vuông không? Vì sao?

**Lời giải:**

a) Gọi độ dài ba cạnh của mảnh đất hình tam giác lần lượt là $a, b, c$ (mét, điều kiện $a, b, c > 0$).
Vì chu vi tam giác bằng $144\text{ m}$ nên:
$$a + b + c = 144\text{ (m)}$$

Vì ba cạnh tỉ lệ thuận với $3; 4; 5$, ta có dãy tỉ số bằng nhau:
$$\frac{a}{3} = \frac{b}{4} = \frac{c}{5}$$

Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{a}{3} = \frac{b}{4} = \frac{c}{5} = \frac{a + b + c}{3 + 4 + 5} = \frac{144}{12} = 12$$

Từ đó suy ra độ dài ba cạnh:
- $a = 3 \times 12 = 36\text{ (m)}$.
- $b = 4 \times 12 = 48\text{ (m)}$.
- $c = 5 \times 12 = 60\text{ (m)}$.
Các giá trị đều thỏa mãn điều kiện.

b) Kiểm tra tính vuông góc bằng định lý Pythagoras đảo:
- $a^2 + b^2 = 36^2 + 48^2 = 1296 + 2304 = 3600$.
- $c^2 = 60^2 = 3600$.
- Nhận thấy $a^2 + b^2 = c^2 = 3600$.
**Kết luận:** Mảnh đất hình tam giác này là một **tam giác vuông** tại góc đối diện với cạnh $60\text{ m}$.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Định luật Ohm trong Kỹ thuật Điện

Trong chương trình Khoa học Tự nhiên và Vật lý, **Định luật Ohm** phát biểu rằng: *"Cường độ dòng điện chạy qua một dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn đó"*:
$$I = \frac{1}{R} \cdot U$$
Trong đó:
- $I$ là cường độ dòng điện (Ampe, $\text{A}$).
- $U$ là hiệu điện thế (Vôn, $\text{V}$).
- Hệ số tỉ lệ chính là độ dẫn điện $G = \frac{1}{R}$ ($R$ là điện trở dây dẫn).

Nếu hiệu điện thế tăng gấp đôi ($U \to 2U$) thì bóng đèn sẽ nhận dòng điện mạnh gấp đôi ($I \to 2I$) và phát sáng rực rỡ hơn.

---

### Chuyên đề 2: Đồ thị Hàm số $y = kx$ đi qua Gốc tọa độ

Khi biểu diễn mối quan hệ tỉ lệ thuận $y = kx$ ($k \neq 0$) trên mặt phẳng tọa độ Decartes $Oxy$:
- Với $x = 0 \implies y = k \cdot 0 = 0$. Điểm $O(0; 0)$ luôn luôn thuộc đồ thị!
- Đồ thị của đại lượng tỉ lệ thuận luôn là **một đường thẳng đi qua gốc tọa độ $O$**.
- Hệ số $k$ chính là **hệ số góc (độ dốc)** của đường thẳng:
  + Nếu $k > 0$: Đường thẳng dốc lên từ trái sang phải (góc nhọn với tia $Ox$).
  + Nếu $k < 0$: Đường thẳng dốc xuống từ trái sang phải (góc tù với tia $Ox$).

---

### Chuyên đề 3: Định luật Hooke về Độ đàn hồi của Lò xo

Nhà bác học người Anh Robert Hooke (1678) đã phát hiện ra rằng trong giới hạn đàn hồi, **lực đàn hồi $F$ của lò xo tỉ lệ thuận với độ dãn $\Delta l$ của nó**:
$$F = k \cdot \Delta l$$
Trong đó:
- $k$ là độ cứng của lò xo (hệ số tỉ lệ, đơn vị $\text{N/m}$).
- $\Delta l = l - l_0$ là độ biến dạng dãn của lò xo.

Nếu treo một quả cân $100\text{ g}$ làm lò xo dãn $2\text{ cm}$, thì khi treo $3$ quả cân như vậy ($300\text{ g}$), lò xo sẽ dãn đúng: $2 \times 3 = 6\text{ cm}$. Đây chính là nguyên lý hoạt động của mọi chiếc cân lò xo trong đời sống!

---

### Chuyên đề 4: Tốc độ Tải Dữ liệu (Download Bandwidth) trong Mạng Máy tính

Khi tải một tệp dữ liệu dung lượng $S$ (Megabyte - $\text{MB}$) với đường truyền internet có tốc độ tải không đổi $v$ ($\text{MB/s}$):
$$S = v \cdot t$$
Dung lượng tệp tải được $S$ tỉ lệ thuận với thời gian tải $t$ theo hệ số tỉ lệ là tốc độ mạng $v$.

Nếu với tốc độ mạng $15\text{ MB/s}$, trong $10$ giây các em tải được $150\text{ MB}$, thì trong $60$ giây (1 phút) các em sẽ tải được đúng:
$$S = 15 \times 60 = 900\text{ MB}$$

---

### Chuyên đề 5: Hàm số Doanh thu Tuyến tính trong Kinh tế học Vi mô

Trong kinh tế học, nếu giá bán một sản phẩm cố định là $P$ (đồng/sản phẩm), thì tổng doanh thu $R$ thu được từ việc bán $Q$ sản phẩm là:
$$R = P \cdot Q$$
Doanh thu $R$ tỉ lệ thuận với số lượng hàng bán $Q$ theo hệ số tỉ lệ là đơn giá $P$. Đồ thị doanh thu là một đường thẳng xuất phát từ gốc tọa độ ($0$ sản phẩm $\implies 0$ đồng doanh thu). Phân tích tỉ lệ thuận giúp các nhà quản trị kinh doanh tính toán được điểm hòa vốn (Break-even Point) một cách chuẩn xác.

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy kiểm tra năng lực hiểu biết về đại lượng tỉ lệ thuận qua $10$ câu hỏi trắc nghiệm sau:

````quiz
title: Kiểm tra Đại lượng tỉ lệ thuận (Toán 7 - Bài 22)
questions:
  - question: Đại lượng y tỉ lệ thuận với đại lượng x theo hệ số tỉ lệ k (k khác 0) nếu liên hệ theo công thức nào?
    options:
      - y = k / x
      - y = k * x
      - y = x + k
      - y = x - k
    answer: 1
    hint: Xem lại định nghĩa cơ bản ở mục I.1.
    explanation: Theo định nghĩa, y tỉ lệ thuận với x nếu y = kx (với k là hằng số khác 0).

  - question: Nếu y tỉ lệ thuận với x theo hệ số tỉ lệ k = 4 thì x tỉ lệ thuận với y theo hệ số tỉ lệ nào?
    options:
      - 4
      - -4
      - 1/4
      - -1/4
    answer: 2
    hint: Hệ số tỉ lệ của x đối với y là 1/k.
    explanation: Nếu y = 4x thì x = (1/4)y, do đó x tỉ lệ thuận với y theo hệ số 1/4.

  - question: Cho biết y tỉ lệ thuận với x và khi x = 3 thì y = -15. Hệ số tỉ lệ của y đối với x là:
    options:
      - -5
      - 5
      - -1/5
      - -45
    answer: 0
    hint: k = y / x.
    explanation: Ta có k = (-15) / 3 = -5.

  - question: Cho y tỉ lệ thuận với x theo công thức y = 2.5x. Khi x = 8 thì giá trị của y là:
    options:
      - 16
      - 20
      - 25
      - 30
    answer: 1
    hint: Thay x = 8 vào công thức y = 2.5 * 8.
    explanation: y = 2.5 * 8 = 20.

  - question: Cho bảng giá trị của hai đại lượng x và y tỉ lệ thuận: khi x = 2 thì y = 6. Khi y = 24 thì giá trị của x là:
    options:
      - 6
      - 8
      - 12
      - 16
    answer: 1
    hint: Hệ số tỉ lệ k = 6 / 2 = 3 -> x = y / 3 = 24 / 3.
    explanation: Hệ số tỉ lệ k = 6/2 = 3. Khi y = 24 thì x = 24 / 3 = 8.

  - question: Đại lượng nào sau đây tỉ lệ thuận với nhau trong thực tế?
    options:
      - Quãng đường đi được và thời gian đi (với vận tốc không đổi).
      - Thời gian hoàn thành công việc và số người làm (với cùng năng suất).
      - Chiều dài và chiều rộng của một hình chữ nhật có diện tích không đổi.
      - Tuổi của cha và tuổi của con theo từng năm.
    answer: 0
    hint: Quãng đường s = v * t (khi v không đổi thì s và t tỉ lệ thuận).
    explanation: Khi vận tốc không đổi, s = vt nên quãng đường tỉ lệ thuận với thời gian chuyển động.

  - question: Một ô tô chạy đều tiêu thụ 7 lít xăng cho quãng đường 100 km. Muốn đi hết quãng đường 350 km thì ô tô cần bao nhiêu lít xăng?
    options:
      - 21 lít
      - 24.5 lít
      - 28 lít
      - 35 lít
    answer: 1
    hint: Lập tỉ số: x / 350 = 7 / 100 -> x = 3.5 * 7.
    explanation: Lượng xăng cần dùng là: (350 * 7) / 100 = 24.5 lít.

  - question: Đồ thị biểu diễn mối quan hệ giữa hai đại lượng tỉ lệ thuận y = kx trên mặt phẳng tọa độ Oxy có đặc điểm gì?
    options:
      - Là một đường tròn tâm O.
      - Là một đường thẳng luôn đi qua gốc tọa độ O(0; 0).
      - Là một đường cong parabol.
      - Là một đường thẳng song song với trục hoành.
    answer: 1
    hint: Xem Chuyên đề 2 về đồ thị hàm số y = kx.
    explanation: Đồ thị hàm số y = kx là một đường thẳng luôn đi qua gốc tọa độ O(0; 0).

  - question: Ba số x, y, z tỉ lệ thuận với 2; 3; 5 và có tổng x + y + z = 70. Giá trị của số lớn nhất là:
    options:
      - 14
      - 21
      - 35
      - 40
    answer: 2
    hint: Số lớn nhất tương ứng với 5 phần: 70 / (2 + 3 + 5) * 5.
    explanation: Giá trị một phần = 70 / 10 = 7. Số lớn nhất là z = 5 * 7 = 35.

  - question: Biết độ dài cạnh hình vuông tỉ lệ thuận với chu vi của nó. Hệ số tỉ lệ của chu vi đối với cạnh hình vuông là:
    options:
      - 2
      - 4
      - 8
      - 16
    answer: 1
    hint: Chu vi P = 4 * a.
    explanation: Công thức chu vi hình vuông là P = 4a, do đó chu vi P tỉ lệ thuận với cạnh a theo hệ số k = 4.
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Khái niệm & Hệ số tỉ lệ** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Tính chất tỉ số & Bảng giá trị** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | | **$3.0$ điểm** |
| **Toán thực tế & Chia phần** | | | TL3 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$3.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Công thức nào sau đây thể hiện đại lượng $y$ tỉ lệ thuận với đại lượng $x$?
- A. $y = \frac{5}{x}$
- B. $y = -6x$
- C. $y = x + 3$
- D. $x \cdot y = 10$

**Câu 2:** Cho $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $k = -3$. Khi $x = -4$ thì $y$ bằng:
- A. $-12$
- B. $12$
- C. $7$
- D. $-1$

**Câu 3:** Nếu đại lượng $x$ tỉ lệ thuận với đại lượng $y$ theo hệ số $\frac{2}{5}$ thì $y$ tỉ lệ thuận với $x$ theo hệ số:
- A. $\frac{2}{5}$
- B. $-\frac{2}{5}$
- C. $\frac{5}{2}$
- D. $-\frac{5}{2}$

**Câu 4:** Cho bảng giá trị hai đại lượng tỉ lệ thuận $x$ và $y$. Biết khi $x = 3$ thì $y = 15$. Khi $x = 7$ thì $y$ bằng:
- A. $25$
- B. $30$
- C. $35$
- D. $40$

**Câu 5:** Một cuộn dây đồng dài $50\text{ m}$ nặng $1.2\text{ kg}$. Một cuộn dây đồng cùng loại dài $150\text{ m}$ sẽ nặng:
- A. $2.4\text{ kg}$
- B. $3.6\text{ kg}$
- C. $4.8\text{ kg}$
- D. $5.0\text{ kg}$

**Câu 6:** Chia số $60$ thành ba phần $x, y, z$ tỉ lệ thuận với $1; 2; 3$. Giá trị của $y$ là:
- A. $10$
- B. $20$
- C. $30$
- D. $40$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):**
Cho biết hai đại lượng $x$ và $y$ tỉ lệ thuận với nhau. Khi $x = 5$ thì $y = -15$.
a) ($1.0$ điểm) Tìm hệ số tỉ lệ $k$ của $y$ đối với $x$ và viết công thức biểu diễn $y$ theo $x$.
b) ($1.0$ điểm) Tính giá trị của $y$ khi $x = -2$; $x = 4$. Tính giá trị của $x$ khi $y = 30$.

**Bài 2 ($2.0$ điểm):**
Cho biết $x$ và $y$ là hai đại lượng tỉ lệ thuận. Điền số thích hợp vào các ô trống trong bảng sau:

| $x$ | $-3$ | $-1$ | $2$ | ? | $6$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | $12$ | ? | ? | $-16$ | ? |

**Bài 3 ($2.0$ điểm):**
Hưởng ứng phong trào xây dựng thư viện xanh, ba lớp 7A, 7B, 7C đã quyên góp được tổng cộng $270$ quyển sách.
Biết rằng số học sinh của ba lớp 7A, 7B, 7C lần lượt là $42, 45, 48$ bạn, và số sách mỗi lớp quyên góp tỉ lệ thuận với số học sinh của lớp đó.
Hỏi mỗi lớp đã quyên góp được bao nhiêu quyển sách?

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
Cho biết đại lượng $z$ tỉ lệ thuận với đại lượng $y$ theo hệ số tỉ lệ $k_1$ ($k_1 \neq 0$), và đại lượng $y$ tỉ lệ thuận với đại lượng $x$ theo hệ số tỉ lệ $k_2$ ($k_2 \neq 0$).
Chứng minh rằng đại lượng $z$ cũng tỉ lệ thuận với đại lượng $x$. Hãy tìm hệ số tỉ lệ của $z$ đối với $x$.

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B \| 2. B \| 3. C \| 4. C \| 5. B \| 6. B** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Vì $y$ tỉ lệ thuận với $x$ nên $y = kx \implies k = \frac{y}{x} = \frac{-15}{5} = -3$.<br>- Công thức: $y = -3x$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - Khi $x = -2 \implies y = -3 \times (-2) = 6$.<br>- Khi $x = 4 \implies y = -3 \times 4 = -12$.<br>- Khi $y = 30 \implies -3x = 30 \implies x = -10$. | $0.25$ đ<br>$0.25$ đ<br>$0.5$ đ |
| **Bài 2** | - Từ cột đầu tiên: $k = \frac{12}{-3} = -4 \implies y = -4x$.<br>- Ô 1 ($x = -1$): $y = -4 \times (-1) = 4$.<br>- Ô 2 ($x = 2$): $y = -4 \times 2 = -8$.<br>- Ô 3 ($y = -16$): $x = \frac{-16}{-4} = 4$.<br>- Ô 4 ($x = 6$): $y = -4 \times 6 = -24$. | $0.5$ đ<br>$0.25$ đ<br>$0.5$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 3** | - Gọi số sách ba lớp 7A, 7B, 7C quyên góp lần lượt là $x, y, z$ (quyển, $x, y, z \in \mathbb{N}^*$).<br>- Ta có: $x + y + z = 270$ và $\frac{x}{42} = \frac{y}{45} = \frac{z}{48}$.<br>- Rút gọn tỉ số (chia cho 3): $\frac{x}{14} = \frac{y}{15} = \frac{z}{16}$.<br>- Áp dụng tính chất: $\frac{x}{14} = \frac{y}{15} = \frac{z}{16} = \frac{x + y + z}{14 + 15 + 16} = \frac{270}{45} = 6$.<br>- Suy ra: $x = 14 \times 6 = 84$; $y = 15 \times 6 = 90$; $z = 16 \times 6 = 96$ (quyển).<br>- Thỏa mãn điều kiện. Kết luận đúng. | $0.25$ đ<br>$0.5$ đ<br><br>$0.5$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 4** | - Vì $z$ tỉ lệ thuận với $y$ theo hệ số $k_1$ nên: $z = k_1 y$. (1)<br>- Vì $y$ tỉ lệ thuận với $x$ theo hệ số $k_2$ nên: $y = k_2 x$. (2)<br>- Thay (2) vào (1) ta được: $z = k_1 (k_2 x) = (k_1 \cdot k_2) x$.<br>- Vì $k_1 \neq 0$ và $k_2 \neq 0$ nên tích $k_1 \cdot k_2$ là một hằng số khác $0$.<br>- Theo định nghĩa, đại lượng $z$ tỉ lệ thuận với đại lượng $x$ theo hệ số tỉ lệ là tích $k_1 \cdot k_2$ (đpcm). | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br><br>$0.25$ đ |
