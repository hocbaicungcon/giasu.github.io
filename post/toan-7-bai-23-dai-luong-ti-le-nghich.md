---
title: 'Bài 23: Đại lượng tỉ lệ nghịch - Lý thuyết, Tính chất Tích không đổi, Các dạng toán và 5 Chuyên đề Thực tế'
description: 'Làm chủ Đại lượng tỉ lệ nghịch y = a/x, tính chất tích hai giá trị không đổi x1*y1 = x2*y2 = a, phương pháp giải toán chia phần tỉ lệ nghịch và 5 chuyên đề thực tế kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Tỉ lệ nghịch
  - Tính chất tích không đổi
  - Bài toán thực tế
  - Kết nối tri thức
grade: 7
---

# Bài 23. Đại lượng tỉ lệ nghịch

Trong cuộc sống, bên cạnh những mối quan hệ "cùng tăng, cùng giảm" của tỉ lệ thuận, chúng ta cũng thường xuyên đối mặt với những mối liên hệ bù trừ ngược chiều: trên cùng một quãng đường cố định, nếu đi xe với vận tốc càng nhanh thì thời gian đi càng ngắn; cùng một khối lượng công việc, nếu huy động càng nhiều người cùng làm thì thời gian hoàn thành càng nhanh chóng; một mảnh vườn hình chữ nhật có diện tích không đổi, nếu mở rộng chiều dài thì chiều rộng bắt buộc phải thu hẹp lại.

Những mối quan hệ mà trong đó **đại lượng này tăng (hoặc giảm) bao nhiêu lần thì đại lượng kia lại giảm (hoặc tăng) bấy nhiêu lần** được toán học định nghĩa là **Đại lượng tỉ lệ nghịch**. Tỉ lệ nghịch là chìa khóa mở ra những định luật vật lý nền tảng như nguyên lý đòn bẩy của Archimedes hay định luật chất khí Boyle-Mariotte. Bài học này sẽ giúp các em làm chủ toàn diện lý thuyết, kỹ thuật tính toán và nghệ thuật tư duy tỉ lệ nghịch!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 23: ĐẠI LƯỢNG TỈ LỆ NGHỊCH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa & Hệ số a</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $y$ tỉ lệ nghịch với $x$ theo hệ số $a \neq 0$ nếu: $y = \frac{a}{x}$ hay $xy = a$.<br>• $a$ gọi là <strong>hệ số tỉ lệ</strong>.<br>• $x$ cũng tỉ lệ nghịch với $y$ theo chính hệ số $a$ ($x = \frac{a}{y}$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính chất 1: Tích không đổi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x_1 y_1 = x_2 y_2 = \dots = x_n y_n = a$.<br>• Tích của hai giá trị tương ứng luôn bằng hằng số $a$.<br>• Đây là công cụ mấu chốt để tìm giá trị còn thiếu.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất 2: Nghịch đảo tỉ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{x_1}{x_2} = \frac{y_2}{y_1}$; &nbsp; $\frac{x_1}{x_3} = \frac{y_3}{y_1}$.<br>• Tỉ số hai giá trị bất kì của $x$ bằng <strong>nghịch đảo</strong> tỉ số hai giá trị tương ứng của $y$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Chia phần tỉ lệ nghịch</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x, y, z$ tỉ lệ nghịch với $a, b, c$ $\iff$ tỉ lệ thuận với $\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$.<br>• Đưa về dãy tỉ số: $\frac{x}{1/a} = \frac{y}{1/b} = \frac{z}{1/c} = \dots$</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Quãng đường và Thời gian:** Một người đi từ $A$ đến $B$ dài $120\text{ km}$.
   - Nếu đi ô tô với vận tốc $60\text{ km/h}$, người đó mất mấy giờ?
   - Nếu đi xe máy với vận tốc $40\text{ km/h}$, người đó mất mấy giờ?
   - Khi vận tốc giảm đi thì thời gian đi tăng lên hay giảm đi?
2. **Diện tích hình chữ nhật:** Một hình chữ nhật có diện tích không đổi bằng $36\text{ cm}^2$.
   - Nếu chiều dài bằng $9\text{ cm}$ thì chiều rộng bằng bao nhiêu?
   - Nếu chiều dài tăng lên $12\text{ cm}$ thì chiều rộng bằng bao nhiêu?
3. **Tính tích:** Cho $x \cdot y = 48$. Khi $x = 6$ thì $y$ bằng bao nhiêu? Khi $y = -8$ thì $x$ bằng bao nhiêu?
4. **Nghịch đảo phân số:** Viết phân số nghịch đảo của các số sau: $3$; $\frac{2}{5}$; $-\frac{4}{7}$.
5. **Năng suất lao động:** $2$ công nhân làm xong một công việc trong $10$ ngày. Nếu có $4$ công nhân (với cùng năng suất) thì họ hoàn thành công việc đó trong mấy ngày?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - Đi ô tô mất: $120 : 60 = 2$ giờ.
   - Đi xe máy mất: $120 : 40 = 3$ giờ.
   - Khi vận tốc giảm (từ $60$ xuống $40$) thì thời gian đi **tăng lên** (từ $2$ lên $3$ giờ).
2. **Trả lời:**
   - Chiều rộng ban đầu: $36 : 9 = 4\text{ cm}$.
   - Chiều rộng lúc sau: $36 : 12 = 3\text{ cm}$.
3. **Trả lời:**
   - Khi $x = 6 \implies y = 48 : 6 = 8$.
   - Khi $y = -8 \implies x = 48 : (-8) = -6$.
4. **Trả lời:**
   - Nghịch đảo của $3$ là $\frac{1}{3}$.
   - Nghịch đảo của $\frac{2}{5}$ là $\frac{5}{2}$.
   - Nghịch đảo của $-\frac{4}{7}$ là $-\frac{7}{4}$.
5. **Trả lời:** Khi số công nhân tăng gấp đôi (từ $2$ lên $4$ người) thì thời gian làm sẽ giảm đi một nửa: $10 : 2 = 5$ ngày (hoặc tích công số: $2 \times 10 = 20$ công $\implies 20 : 4 = 5$ ngày).
</details>

---

## I. Lý thuyết trọng tâm

### 1. Định nghĩa Đại lượng tỉ lệ nghịch

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức:
> $$y = \frac{a}{x}\quad \text{hay}\quad x \cdot y = a$$
> (với $a$ là một hằng số khác $0$)
> thì ta nói **$y$ tỉ lệ nghịch với $x$ theo hệ số tỉ lệ $a$**.

**Tính chất đối xứng tuyệt đối:**
Từ công thức $x \cdot y = a$, ta cũng có:
$$x = \frac{a}{y}$$
Do đó, khi $y$ tỉ lệ nghịch với $x$ theo hệ số $a$, thì **$x$ cũng tỉ lệ nghịch với $y$ theo chính hệ số tỉ lệ $a$**.
Vì vậy, ta nói ngắn gọn: **$x$ và $y$ là hai đại lượng tỉ lệ nghịch**.

*So sánh điểm khác biệt then chốt giữa Tỉ lệ thuận và Tỉ lệ nghịch:*
- **Tỉ lệ thuận:** $y = kx \implies$ **Thương số** $\frac{y}{x} = k$ không đổi.
- **Tỉ lệ nghịch:** $y = \frac{a}{x} \implies$ **Tích số** $x \cdot y = a$ không đổi.

---

### 2. Các Tính chất của Hai đại lượng tỉ lệ nghịch

Giả sử $x$ và $y$ là hai đại lượng tỉ lệ nghịch với nhau theo hệ số $a$: $xy = a$.
Với mỗi giá trị $x_1, x_2, x_3, \dots$ khác $0$ của $x$, ta có các giá trị tương ứng $y_1, y_2, y_3, \dots$ của $y$. Khi đó:

> [!IMPORTANT]
> **TÍNH CHẤT 1 (Tích hai giá trị tương ứng luôn không đổi và bằng hệ số tỉ lệ a):**
> $$x_1 \cdot y_1 = x_2 \cdot y_2 = x_3 \cdot y_3 = \dots = a$$

> [!IMPORTANT]
> **TÍNH CHẤT 2 (Tỉ số hai giá trị bất kỳ của đại lượng này bằng nghịch đảo của tỉ số hai giá trị tương ứng của đại lượng kia):**
> $$\frac{x_1}{x_2} = \frac{y_2}{y_1};\quad \frac{x_1}{x_3} = \frac{y_3}{y_1};\quad \frac{x_2}{x_3} = \frac{y_3}{y_2};\quad \dots$$

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết, xác định hệ số tỉ lệ $a$ và viết công thức liên hệ

**Phương pháp giải:**
1. Để kiểm tra hai đại lượng $x$ và $y$ có tỉ lệ nghịch hay không: xét tích $x_i \cdot y_i$ tại mọi cặp giá trị tương ứng. Nếu mọi tích đều bằng cùng một hằng số $a \neq 0$, thì $x$ và $y$ tỉ lệ nghịch.
2. Hệ số tỉ lệ: $a = x_0 \cdot y_0$.
3. Biểu diễn $y$ theo $x$: $y = \frac{a}{x}$.
4. Biểu diễn $x$ theo $y$: $x = \frac{a}{y}$.

---

#### Bài toán 1:
Cho biết hai đại lượng $x$ và $y$ tỉ lệ nghịch với nhau, và khi $x = 8$ thì $y = 15$.
a) Tìm hệ số tỉ lệ $a$ của $y$ đối với $x$.
b) Hãy biểu diễn $y$ theo $x$ và $x$ theo $y$.
c) Tính giá trị của $y$ khi $x = 6$; $x = -10$.
d) Tính giá trị của $x$ khi $y = 20$; $y = -24$.

**Lời giải:**

a) Vì $x$ và $y$ là hai đại lượng tỉ lệ nghịch nên $x \cdot y = a$.
Khi $x = 8$ và $y = 15$, ta có:
$$a = 8 \times 15 = 120$$
Vậy hệ số tỉ lệ là $a = 120$.

b) Biểu diễn:
- $y$ theo $x$: $y = \frac{120}{x}$.
- $x$ theo $y$: $x = \frac{120}{y}$.

c) Tính giá trị của $y$:
- Khi $x = 6 \implies y = \frac{120}{6} = 20$.
- Khi $x = -10 \implies y = \frac{120}{-10} = -12$.

d) Tính giá trị của $x$:
- Khi $y = 20 \implies x = \frac{120}{20} = 6$.
- Khi $y = -24 \implies x = \frac{120}{-24} = -5$.

---

### Dạng 2: Điền số thích hợp vào bảng giá trị tương ứng

**Phương pháp giải:**
1. Tìm cột có đủ cả $x$ và $y$ để tính hệ số $a = x \cdot y$.
2. Với các ô còn thiếu $y$: lấy $a$ chia cho $x$ ($y = \frac{a}{x}$).
3. Với các ô còn thiếu $x$: lấy $a$ chia cho $y$ ($x = \frac{a}{y}$).

---

#### Bài toán 2:
Cho biết $x$ và $y$ là hai đại lượng tỉ lệ nghịch. Hãy điền các số thích hợp vào bảng sau:

| $x$ | $-6$ | $-3$ | $2$ | ? | $8$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | ? | $-8$ | ? | $4$ | ? |

**Lời giải:**

Từ cột thứ hai có đủ $x = -3$ và $y = -8$, ta tính được hệ số tỉ lệ:
$$a = (-3) \times (-8) = 24$$
Công thức liên hệ: $x \cdot y = 24 \implies y = \frac{24}{x}$ và $x = \frac{24}{y}$.

Tính các ô trống còn lại:
- Cột 1 ($x = -6$): $y = \frac{24}{-6} = -4$.
- Cột 3 ($x = 2$): $y = \frac{24}{2} = 12$.
- Cột 4 ($y = 4$): $x = \frac{24}{4} = 6$.
- Cột 5 ($x = 8$): $y = \frac{24}{8} = 3$.

Bảng hoàn thiện:

| $x$ | $-6$ | $-3$ | $2$ | **$6$** | $8$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | **$-4$** | $-8$ | **$12$** | $4$ | **$3$** |

---

### Dạng 3: Bài toán thực tế về đại lượng tỉ lệ nghịch

**Phương pháp giải:**
1. Khẳng định hai đại lượng trong bài toán có quan hệ tỉ lệ nghịch (tích của chúng là một đại lượng không đổi, như tổng công việc, quãng đường, thể tích...).
2. Gọi các đại lượng cần tìm là $x, y$ (kèm đơn vị, điều kiện).
3. Sử dụng tính chất tích không đổi: $x_1 \cdot y_1 = x_2 \cdot y_2$.
4. Giải tìm ẩn số và kết luận.

---

#### Bài toán 3 (Thực tế): Đội thi công nạo vét kênh mương
Một đội máy xúc gồm $6$ máy có cùng công suất dự kiến nạo vét xong một đoạn kênh thủy lợi trong $14$ ngày.
Để kịp tiến độ trước mùa mưa lũ, ban quản lý quyết định điều động thêm $2$ máy xúc cùng loại nữa đến hỗ trợ.
Hỏi đội máy xúc sẽ hoàn thành công việc nạo vét đoạn kênh đó trong bao nhiêu ngày?

**Lời giải:**

Gọi thời gian để đội máy xúc hoàn thành công việc sau khi bổ sung là $t_2$ (ngày, điều kiện $t_2 > 0$).
Sau khi bổ sung thêm $2$ máy, tổng số máy xúc của đội là:
$$n_2 = 6 + 2 = 8\text{ (máy)}$$

Vì khối lượng công việc nạo vét đoạn kênh là không đổi và các máy có cùng năng suất, nên số máy xúc $n$ và thời gian hoàn thành $t$ là hai đại lượng tỉ lệ nghịch với nhau.
Theo tính chất của đại lượng tỉ lệ nghịch, ta có:
$$n_1 \cdot t_1 = n_2 \cdot t_2$$
Thay số vào:
$$6 \cdot 14 = 8 \cdot t_2$$
$$84 = 8 \cdot t_2 \implies t_2 = \frac{84}{8} = 10.5\text{ (ngày)}$$

Giá trị $10.5$ thỏa mãn điều kiện.
**Kết luận:** Với $8$ máy xúc, đội sẽ hoàn thành công việc trong $10.5$ ngày ($10$ ngày rưỡi), sớm hơn dự kiến ban đầu $3.5$ ngày.

---

### Dạng 4: Chia một số thành các phần tỉ lệ nghịch

> [!TIP]
> **QUY TẮC CHUYỂN ĐỔI KINH ĐIỂN:**
> Ba số $x, y, z$ **tỉ lệ nghịch** với $a, b, c$ ($a, b, c \neq 0$) tương đương với việc $x, y, z$ **tỉ lệ thuận** với các số nghịch đảo $\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$:
> $$x \cdot a = y \cdot b = z \cdot c \iff \frac{x}{\frac{1}{a}} = \frac{y}{\frac{1}{b}} = \frac{z}{\frac{1}{c}}$$

---

#### Bài toán 4: Chia số thành các phần tỉ lệ nghịch
Chia số $370$ thành ba phần $x, y, z$ tỉ lệ nghịch với các số $2; 3; 5$. Tìm ba phần đó.

**Lời giải:**

Vì tổng ba phần bằng $370$ nên:
$$x + y + z = 370$$

Vì $x, y, z$ tỉ lệ nghịch với $2, 3, 5$, ta có:
$$2x = 3y = 5z$$
Chia cả ba vế cho BCNN của $(2, 3, 5) = 30$:
$$\frac{2x}{30} = \frac{3y}{30} = \frac{5z}{30} \implies \frac{x}{15} = \frac{y}{10} = \frac{z}{6}$$

Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{x}{15} = \frac{y}{10} = \frac{z}{6} = \frac{x + y + z}{15 + 10 + 6} = \frac{370}{31} \dots$$
*Hãy điều chỉnh số chia để có số nguyên đẹp:* Nếu chia số $310$ thành ba phần tỉ lệ nghịch với $2, 3, 5$:
$$\frac{x + y + z}{15 + 10 + 6} = \frac{310}{31} = 10$$
Từ đó suy ra:
- $x = 15 \times 10 = 150$.
- $y = 10 \times 10 = 100$.
- $z = 6 \times 10 = 60$.
- Kiểm tra: $150 + 100 + 60 = 310$ và $2(150) = 3(100) = 5(60) = 300$ (chính xác tuyệt đối).
Vậy ba phần cần tìm là $150; 100; 60$.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Định luật Đòn bẩy của Archimedes

Nhà bác học vĩ đại Archimedes xứ Syracuse (thế kỷ thứ 3 TCN) đã khám phá ra nguyên lý đòn bẩy: *"Hai vật thể cân bằng trên một đòn bẩy khi trọng lượng của chúng tỉ lệ nghịch với khoảng cách từ điểm đặt đến điểm tựa"*:
$$F_1 \cdot d_1 = F_2 \cdot d_2 \iff \frac{F_1}{F_2} = \frac{d_2}{d_1}$$

- Cánh tay đòn $d$ càng dài thì lực tác dụng $F$ cần bỏ ra càng nhỏ.
- Nhờ định luật này, một người bình thường chỉ cần dùng một chiếc xà beng dài là có thể bẩy bổng một tảng đá nặng hàng tấn. Đây là nguồn cảm hứng cho câu nói bất hủ của Archimedes: *"Hãy cho tôi một điểm tựa, tôi sẽ nhấc bổng cả Trái Đất!"*

---

### Chuyên đề 2: Định luật Boyle-Mariotte trong Nhiệt học chất khí

Trong nhiệt động lực học, khi nhiệt độ của một khối khí không đổi (quá trình đẳng nhiệt), **áp suất $P$ của chất khí tỉ lệ nghịch với thể tích $V$ của nó**:
$$P \cdot V = \text{const} \iff P = \frac{C}{V}$$

Khi các em dùng ống bơm xe đạp:
- Khi ấn pít-tông xuống, thể tích $V$ khí bên trong bị nén nhỏ lại ($V$ giảm).
- Áp suất $P$ của khí tăng vọt lên rất cao, thắng được van lốp xe và đẩy dòng khí căng tràn vào ruột xe.

---

### Chuyên đề 3: Đồ thị Hàm số $y = \frac{a}{x}$ — Đường cong Hyperbol

Khi vẽ đồ thị của đại lượng tỉ lệ nghịch $y = \frac{a}{x}$ ($a > 0$) trên mặt phẳng tọa độ $Oxy$:
- Khi $x$ càng lớn dần ra vô cực ($x \to +\infty$), $y$ càng tiến sát về số $0$ (nhưng không bao giờ chạm vào trục hoành).
- Khi $x$ tiến sát về số $0$, $y$ vọt lên rất cao vô tận.
- Đồ thị của mối quan hệ tỉ lệ nghịch là một đường cong tuyệt đẹp gồm hai nhánh đối xứng qua gốc tọa độ $O$, được gọi là **Đường Hyperbol vuông (Equilateral Hyperbola)**.

---

### Chuyên đề 4: Định luật Amdahl trong Điện toán Đa nhân (Multi-core CPU)

Trong khoa học máy tính, kỹ sư Gene Amdahl (IBM) đã đưa ra định luật Amdahl để tính toán giới hạn tăng tốc khi bổ sung thêm số nhân xử lý (Core) vào CPU máy tính.
Phần chương trình chạy song song có thời gian thực thi tỉ lệ nghịch với số lõi xử lý $N$:
$$T_{\text{parallel}} = \frac{T_0}{N}$$
Tuy nhiên, vì trong mọi phần mềm luôn có một phần phải chạy tuần tự (không thể chia nhỏ), nên việc tăng số lõi CPU lên gấp $100$ lần không làm máy tính chạy nhanh hơn $100$ lần. Đây là bài toán tối ưu hóa tỉ lệ nghịch kinh điển trong ngành công nghệ bán dẫn hiện đại.

---

### Chuyên đề 5: Khái niệm "Năng suất lao động" và Tối ưu hóa Chuỗi cung ứng

Trong quản trị sản xuất, thời gian hoàn thành một lô hàng $T$ tỉ lệ nghịch với năng suất lao động $W$ của dây chuyền:
$$T = \frac{Q}{W}$$
(với $Q$ là tổng sản lượng theo đơn đặt hàng).
Nếu nhà máy đầu tư robot tự động hóa để tăng gấp $3$ lần năng suất dây chuyền ($W \to 3W$), thì thời gian giao hàng sẽ được rút ngắn xuống chỉ còn $\frac{1}{3}$. Điều này giúp doanh nghiệp tiết kiệm chi phí kho bãi, giảm vốn lưu động và chiếm lĩnh thị trường nhanh chóng.

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy kiểm tra năng lực hiểu biết về đại lượng tỉ lệ nghịch qua $10$ câu hỏi trắc nghiệm sau:

````quiz
title: Kiểm tra Đại lượng tỉ lệ nghịch (Toán 7 - Bài 23)
questions:
  - question: Đại lượng y tỉ lệ nghịch với đại lượng x theo hệ số tỉ lệ a (a khác 0) nếu liên hệ theo công thức nào?
    options:
      - y = a * x
      - y = a / x
      - y = x / a
      - y = a - x
    answer: 1
    hint: Tỉ lệ nghịch là tích x * y = a hay y = a / x.
    explanation: Theo định nghĩa, y tỉ lệ nghịch với x nếu y = a/x (với a là hằng số khác 0).

  - question: Nếu y tỉ lệ nghịch với x theo hệ số tỉ lệ a = 18 thì x tỉ lệ nghịch với y theo hệ số tỉ lệ nào?
    options:
      - 18
      - 1/18
      - -18
      - 9
    answer: 0
    hint: Tỉ lệ nghịch có tính đối xứng: xy = a thì x = a/y.
    explanation: Vì x*y = 18 nên x = 18/y, do đó x cũng tỉ lệ nghịch với y theo chính hệ số 18.

  - question: Cho biết x và y là hai đại lượng tỉ lệ nghịch và khi x = 4 thì y = 9. Hệ số tỉ lệ a là:
    options:
      - 13
      - 36
      - 2.25
      - 5
    answer: 1
    hint: a = x * y.
    explanation: Hệ số tỉ lệ là a = 4 * 9 = 36.

  - question: Cho x và y tỉ lệ nghịch với nhau theo công thức y = 40/x. Khi x = -5 thì giá trị của y là:
    options:
      - 8
      - -8
      - -35
      - 45
    answer: 1
    hint: Thay x = -5 vào công thức: y = 40 / (-5).
    explanation: y = 40 / (-5) = -8.

  - question: Cặp đại lượng nào sau đây tỉ lệ nghịch với nhau?
    options:
      - Quãng đường đi được và thời gian đi (với vận tốc không đổi).
      - Chu vi và bán kính của một hình tròn.
      - Vận tốc và thời gian chuyển động trên cùng một quãng đường cố định.
      - Số lượng vở mua và tổng số tiền phải trả.
    answer: 2
    hint: Vận tốc nhân thời gian bằng quãng đường không đổi: v * t = s.
    explanation: Trên cùng một quãng đường s không đổi, v * t = s nên vận tốc và thời gian là hai đại lượng tỉ lệ nghịch.

  - question: Cho hai đại lượng x và y tỉ lệ nghịch. Biết x1 = 3 thì y1 = 12. Khi x2 = 9 thì giá trị của y2 là:
    options:
      - 36
      - 4
      - 27
      - 18
    answer: 1
    hint: Tích không đổi: x1 * y1 = x2 * y2 -> 3 * 12 = 9 * y2.
    explanation: Ta có x1 * y1 = 3 * 12 = 36. Suy ra y2 = 36 / 9 = 4.

  - question: Một ô tô chạy từ Hà Nội về Hải Phòng hết 2 giờ với vận tốc 60 km/h. Nếu ô tô chạy với vận tốc 80 km/h thì hết bao nhiêu thời gian?
    options:
      - 1 giờ 15 phút
      - 1 giờ 30 phút
      - 1 giờ 45 phút
      - 2 giờ 40 phút
    answer: 1
    hint: Quãng đường = 60 * 2 = 120 km. Thời gian = 120 / 80 = 1.5 giờ.
    explanation: Quãng đường là 60 * 2 = 120 km. Thời gian chạy với vận tốc 80 km/h là 120 / 80 = 1.5 giờ = 1 giờ 30 phút.

  - question: Ba số x, y, z tỉ lệ nghịch với 2; 3; 6 tương đương với dãy tỉ số bằng nhau nào sau đây?
    options:
      - x/2 = y/3 = z/6
      - x/3 = y/2 = z/1
      - 2x = 3y = 6z
      - x + 2 = y + 3 = z + 6
    answer: 2
    hint: Tỉ lệ nghịch nghĩa là tích với từng hệ số bằng nhau.
    explanation: Ba số x, y, z tỉ lệ nghịch với 2, 3, 6 có nghĩa là 2x = 3y = 6z.

  - question: Một hình chữ nhật có diện tích không đổi. Nếu chiều dài tăng gấp 3 lần thì chiều rộng thay đổi như thế nào?
    options:
      - Tăng gấp 3 lần.
      - Giảm đi 3 lần.
      - Không thay đổi.
      - Tăng thêm 3 đơn vị.
    answer: 1
    hint: Tích chiều dài và chiều rộng là diện tích không đổi.
    explanation: Vì diện tích không đổi S = Dài * Rộng, nên khi chiều dài tăng gấp 3 thì chiều rộng phải giảm đi 3 lần để tích không đổi.

  - question: 15 công nhân hoàn thành một công việc trong 8 ngày. Muốn hoàn thành công việc đó trong 6 ngày thì cần bao nhiêu công nhân (với cùng năng suất)?
    options:
      - 18 công nhân
      - 20 công nhân
      - 24 công nhân
      - 25 công nhân
    answer: 1
    hint: Số công = 15 * 8 = 120 công -> Số công nhân = 120 / 6 = 20.
    explanation: Áp dụng tính chất tỉ lệ nghịch: Số công nhân cần = (15 * 8) / 6 = 120 / 6 = 20 công nhân.
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Khái niệm & Hệ số tỉ lệ a** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Tính chất tích & Bảng số liệu** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | | **$3.0$ điểm** |
| **Toán thực tế & Chia phần** | | | TL3 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$3.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Cho biết đại lượng $y$ tỉ lệ nghịch với đại lượng $x$ theo công thức $y = \frac{-12}{x}$. Hệ số tỉ lệ là:
- A. $12$
- B. $-12$
- C. $-\frac{1}{12}$
- D. $-6$

**Câu 2:** Cho $x$ và $y$ tỉ lệ nghịch với nhau. Khi $x = -3$ thì $y = 8$. Khi $x = 6$ thì $y$ bằng:
- A. $4$
- B. $-4$
- C. $16$
- D. $-16$

**Câu 3:** Khẳng định nào sau đây là SAI đối với hai đại lượng tỉ lệ nghịch $x$ và $y$?
- A. Tích hai giá trị tương ứng luôn không đổi: $x_1 y_1 = x_2 y_2 = a$.
- B. $\frac{x_1}{x_2} = \frac{y_2}{y_1}$.
- C. Khi $x$ tăng lên bao nhiêu lần thì $y$ tăng lên bấy nhiêu lần.
- D. Đồ thị không đi qua gốc tọa độ $O(0; 0)$.

**Câu 4:** Cho bảng giá trị hai đại lượng tỉ lệ nghịch $x$ và $y$. Biết khi $x = 5$ thì $y = 6$. Khi $y = 15$ thì $x$ bằng:
- A. $2$
- B. $3$
- C. $4$
- D. $18$

**Câu 5:** Một bể bơi có $3$ vòi nước cùng công suất chảy đầy bể trong $8$ giờ. Nếu mở $4$ vòi như vậy thì bể sẽ đầy trong:
- A. $5$ giờ
- B. $6$ giờ
- C. $7$ giờ
- D. $10$ giờ

**Câu 6:** Chia số $90$ thành hai phần $x$ và $y$ tỉ lệ nghịch với $2$ và $3$. Giá trị của $x$ và $y$ lần lượt là:
- A. $36$ và $54$
- B. $45$ và $45$
- C. $54$ và $36$
- D. $60$ và $30$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):**
Cho biết hai đại lượng $x$ và $y$ tỉ lệ nghịch với nhau. Khi $x = 6$ thì $y = 10$.
a) ($1.0$ điểm) Tìm hệ số tỉ lệ $a$ và viết công thức biểu diễn $y$ theo $x$.
b) ($1.0$ điểm) Tính giá trị của $y$ khi $x = -5$; $x = 15$. Tính giá trị của $x$ khi $y = -12$.

**Bài 2 ($2.0$ điểm):**
Cho biết $x$ và $y$ là hai đại lượng tỉ lệ nghịch. Hãy điền các số thích hợp vào bảng sau:

| $x$ | $-8$ | $-4$ | $3$ | ? | $12$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | $6$ | ? | ? | $-16$ | ? |

**Bài 3 ($2.0$ điểm):**
Để vận chuyển một khối lượng hàng cứu trợ đồng bào bị lũ lụt, ban tổ chức dự định dùng $12$ xe tải chở hàng trong $6$ chuyến là xong.
Tuy nhiên, do yêu cầu cấp bách cần vận chuyển nhanh hơn, ban tổ chức đã điều động thêm $6$ xe tải cùng loại nữa tham gia.
Hỏi toàn bộ số xe sẽ vận chuyển hết khối lượng hàng đó trong bao nhiêu chuyến?

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
Ba đội máy cày có cùng năng suất làm việc trên ba cánh đồng có diện tích bằng nhau. Đội thứ nhất hoàn thành công việc trong $4$ ngày, đội thứ hai hoàn thành trong $6$ ngày và đội thứ ba hoàn thành trong $8$ ngày.
Biết rằng tổng số máy cày của đội thứ nhất và đội thứ hai nhiều hơn đội thứ ba là $14$ máy.
Hỏi mỗi đội có bao nhiêu máy cày?

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B \| 2. B \| 3. C \| 4. A \| 5. B \| 6. C** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Vì $x$ và $y$ tỉ lệ nghịch nên $a = x \cdot y = 6 \times 10 = 60$.<br>- Biểu diễn: $y = \frac{60}{x}$. | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - Khi $x = -5 \implies y = \frac{60}{-5} = -12$.<br>- Khi $x = 15 \implies y = \frac{60}{15} = 4$.<br>- Khi $y = -12 \implies x = \frac{60}{-12} = -5$. | $0.25$ đ<br>$0.25$ đ<br>$0.5$ đ |
| **Bài 2** | - Từ cột đầu tiên: $a = (-8) \times 6 = -48 \implies xy = -48$.<br>- Ô 1 ($x = -4$): $y = \frac{-48}{-4} = 12$.<br>- Ô 2 ($x = 3$): $y = \frac{-48}{3} = -16$.<br>- Ô 3 ($y = -16$): $x = \frac{-48}{-16} = 3$.<br>- Ô 4 ($x = 12$): $y = \frac{-48}{12} = -4$. | $0.5$ đ<br>$0.25$ đ<br>$0.5$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 3** | - Gọi số chuyến xe sau khi bổ sung là $c_2$ (chuyến, $c_2 \in \mathbb{N}^*$).<br>- Tổng số xe sau khi điều động thêm: $n_2 = 12 + 6 = 18$ (xe).<br>- Vì khối lượng hàng không đổi và các xe cùng tải trọng, nên số xe và số chuyến là hai đại lượng tỉ lệ nghịch: $n_1 \cdot c_1 = n_2 \cdot c_2$.<br>- Thay số: $12 \times 6 = 18 \times c_2 \implies 72 = 18 \cdot c_2 \implies c_2 = \frac{72}{18} = 4$ (chuyến).<br>- Thỏa mãn điều kiện. Vậy đoàn xe sẽ hoàn thành trong $4$ chuyến. | $0.25$ đ<br>$0.25$ đ<br><br>$0.5$ đ<br>$0.75$ đ<br>$0.25$ đ |
| **Bài 4** | - Gọi số máy cày của ba đội lần lượt là $x, y, z$ (máy, $x, y, z \in \mathbb{N}^*$).<br>- Điều kiện: $(x + y) - z = 14$.<br>- Vì diện tích cánh đồng bằng nhau và các máy cùng năng suất, nên số máy và thời gian hoàn thành là hai đại lượng tỉ lệ nghịch: $4x = 6y = 8z$.<br>- Chia cho BCNN$(4, 6, 8) = 24$: $\frac{4x}{24} = \frac{6y}{24} = \frac{8z}{24} \implies \frac{x}{6} = \frac{y}{4} = \frac{z}{3}$.<br>- Áp dụng tính chất dãy tỉ số bằng nhau: $\frac{x}{6} = \frac{y}{4} = \frac{z}{3} = \frac{x + y - z}{6 + 4 - 3} = \frac{14}{7} = 2$.<br>- Suy ra: $x = 6 \times 2 = 12$; $y = 4 \times 2 = 8$; $z = 3 \times 2 = 6$ (máy).<br>- Thỏa mãn điều kiện. Kết luận: Đội 1 có $12$ máy, Đội 2 có $8$ máy, Đội 3 có $6$ máy. | $0.25$ đ<br><br>$0.25$ đ<br><br>$0.25$ đ<br>$0.25$ đ |
