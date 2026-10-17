---
title: 'Ôn tập Chương 6: Tỉ lệ thức và Đại lượng tỉ lệ - Tổng hợp Lý thuyết, Ma trận Đối sánh và 5 Chuyên đề Nâng cao'
description: 'Hệ thống hóa toàn bộ kiến thức Chương 6 Toán 7: Tỉ lệ thức, dãy tỉ số bằng nhau, ma trận so sánh Tỉ lệ thuận vs Tỉ lệ nghịch, phương pháp chia phần tỉ lệ kèm 10 quiz tương tác và đề kiểm tra 45 phút chuẩn ma trận.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Tỉ lệ thức
  - Dãy tỉ số bằng nhau
  - Tỉ lệ thuận
  - Tỉ lệ nghịch
  - Ôn tập chương 6
  - Kết nối tri thức
grade: 7
---

# Ôn tập Chương 6. Tỉ lệ thức và Đại lượng tỉ lệ

Trong tác phẩm kinh điển *Cơ sở (Elements)*, nhà toán học Hy Lạp cổ đại Euclid đã dành trọn quyển thứ V để nghiên cứu về lý thuyết tỉ lệ — một trong những thành tựu trí tuệ vĩ đại nhất của nền văn minh nhân loại. Tỉ lệ thức không chỉ là công cụ đo đạc Trái Đất, tính toán chu vi kim tự tháp qua bóng nắng mặt trời của Thales, mà ngày nay nó còn là ngôn ngữ cốt lõi vận hành các thuật toán nén ảnh số, mô hình hóa tài chính và điều khiển cánh tay robot tự động.

Chương 6 đã dẫn dắt chúng ta qua một hành trình đại số tuyệt đẹp: từ việc khám phá bản chất tích chéo của Tỉ lệ thức (Bài 20), làm chủ kỹ thuật chia phần công bằng qua Tính chất của dãy tỉ số bằng nhau (Bài 21), cho đến việc giải mã hai quy luật biến thiên phổ quát của tự nhiên: Đại lượng tỉ lệ thuận $y = kx$ (Bài 22) và Đại lượng tỉ lệ nghịch $y = \frac{a}{x}$ (Bài 23). Bài ôn tập tổng hợp này sẽ giúp các em xâu chuỗi toàn bộ kiến thức thành một hệ thống vững chắc, phân biệt rạch ròi các dạng toán và rèn luyện tư duy phản biện sắc bén!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC TỔNG ÔN CHƯƠNG 6: TỈ LỆ THỨC & ĐẠI LƯỢNG TỈ LỆ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tỉ lệ thức cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$.<br>• Hoán vị 4 tỉ lệ thức.<br>• Tìm $x$: Quy tắc "nhân chéo chia thẳng".</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Dãy tỉ số bằng nhau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{a}{b} = \frac{c}{d} = \frac{e}{f} = \frac{a \pm c \pm e}{b \pm d \pm f}$.<br>• Kí hiệu: $a : b : c = m : n : p$.<br>• Phương pháp đặt ẩn phụ $k$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đại lượng tỉ lệ thuận</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Công thức: $y = kx$ ($k \neq 0$).<br>• <strong>Thương số</strong> không đổi: $\frac{y_1}{x_1} = \frac{y_2}{x_2} = k$.<br>• Đồ thị đi qua gốc tọa độ $O(0; 0)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Đại lượng tỉ lệ nghịch</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Công thức: $y = \frac{a}{x} \iff xy = a$.<br>• <strong>Tích số</strong> không đổi: $x_1 y_1 = x_2 y_2 = a$.<br>• Nghịch đảo tỉ số: $\frac{x_1}{x_2} = \frac{y_2}{y_1}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ toàn diện (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi phản xạ sau:

1. **Tìm x chéo:** Cho $\frac{x}{15} = \frac{4}{5}$. Tìm $x$.
2. **Nhận dạng quan hệ:** Khi mua gạo với giá $20\,000$ đồng/kg cố định, số tiền phải trả và số kg gạo mua là hai đại lượng tỉ lệ thuận hay tỉ lệ nghịch?
3. **Nhận dạng quan hệ:** Cùng số tiền $120\,000$ đồng, giá tiền một quyển sách và số quyển sách mua được là hai đại lượng tỉ lệ thuận hay tỉ lệ nghịch?
4. **Chia tỉ lệ nhanh:** Chia số $50$ thành hai phần theo tỉ lệ $2 : 3$. Hai phần đó là bao nhiêu?
5. **Hệ số nghịch đảo:** Nếu $y$ tỉ lệ thuận với $x$ theo hệ số $k = 5$ thì $x$ tỉ lệ thuận với $y$ theo hệ số nào? Còn nếu $y$ tỉ lệ nghịch với $x$ theo hệ số $a = 10$ thì $x$ tỉ lệ nghịch với $y$ theo hệ số nào?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** $x = \frac{15 \times 4}{5} = 12$.
2. **Trả lời:** Là hai đại lượng **tỉ lệ thuận** (vì $T = 20\,000 \cdot m$, mua càng nhiều kg thì số tiền trả càng lớn gấp bấy nhiêu lần).
3. **Trả lời:** Là hai đại lượng **tỉ lệ nghịch** (vì $\text{Giá tiền} \times \text{Số lượng} = 120\,000$ không đổi, giá sách càng đắt thì số quyển mua được càng ít).
4. **Trả lời:** Tổng số phần: $2 + 3 = 5$ phần $\implies 1$ phần $= 10$. Hai phần là: $2 \times 10 = 20$ và $3 \times 10 = 30$.
5. **Trả lời:**
   - Trường hợp tỉ lệ thuận: $x$ tỉ lệ thuận với $y$ theo hệ số $\frac{1}{k} = \frac{1}{5}$.
   - Trường hợp tỉ lệ nghịch: $x$ tỉ lệ nghịch với $y$ theo chính hệ số $a = 10$.
</details>

---

## I. Bảng đối sánh toàn diện: Tỉ lệ thuận vs Tỉ lệ nghịch

Để không bao giờ nhầm lẫn giữa hai quy luật đại số này, hãy ghi nhớ bảng ma trận đối sánh chuẩn sau:

| Tiêu chí so sánh | Đại lượng Tỉ lệ thuận | Đại lượng Tỉ lệ nghịch |
| :--- | :--- | :--- |
| **Công thức liên hệ** | $y = kx$ &nbsp; ($k \neq 0$ là hằng số) | $y = \frac{a}{x}$ &nbsp; hay &nbsp; $x \cdot y = a$ &nbsp; ($a \neq 0$) |
| **Hệ số tỉ lệ** | $k = \frac{y}{x}$ &nbsp; *(là một thương số)* | $a = x \cdot y$ &nbsp; *(là một tích số)* |
| **Tính chất đối xứng** | $x$ tỉ lệ thuận với $y$ theo hệ số $\frac{1}{k}$ | $x$ tỉ lệ nghịch với $y$ theo chính hệ số $a$ |
| **Tính chất giá trị tương ứng** | **Thương số không đổi:**<br>$\frac{y_1}{x_1} = \frac{y_2}{x_2} = \dots = k$ | **Tích số không đổi:**<br>$x_1 \cdot y_1 = x_2 \cdot y_2 = \dots = a$ |
| **Tính chất tỉ số** | **Tỉ số đồng hướng:**<br>$\frac{x_1}{x_2} = \frac{y_1}{y_2};\quad \frac{x_1}{x_3} = \frac{y_1}{y_3}$ | **Tỉ số nghịch đảo:**<br>$\frac{x_1}{x_2} = \frac{y_2}{y_1};\quad \frac{x_1}{x_3} = \frac{y_3}{y_1}$ |
| **Quy luật biến thiên** | $x$ tăng bao nhiêu lần $\implies y$ **tăng** bấy nhiêu lần. | $x$ tăng bao nhiêu lần $\implies y$ **giảm** bấy nhiêu lần. |
| **Hình dạng đồ thị** | Một đường thẳng luôn đi qua gốc tọa độ $O(0; 0)$. | Một đường cong Hyperbol gồm hai nhánh đối xứng qua $O$. |
| **Ví dụ thực tế kinh điển** | - Quãng đường và thời gian ($s = vt$).<br>- Khối lượng và thể tích ($m = DV$).<br>- Lực đàn hồi và độ dãn lò xo ($F = k \Delta l$). | - Vận tốc và thời gian trên cùng quãng đường ($v \cdot t = s$).<br>- Số công nhân và thời gian làm xong việc.<br>- Chiều dài và chiều rộng hình chữ nhật có diện tích cố định. |

---

## II. Các dạng toán tổng hợp trọng tâm toàn chương

### Dạng 1: Tìm nhiều ẩn số $x, y, z$ từ dãy tỉ số bằng nhau và biểu thức đại số

**Phương pháp giải:**
1. **Trường hợp biểu thức bậc nhất ($ax + by + cz = K$):** Nhân hệ số tương ứng vào cả tử và mẫu của từng tỉ số rồi áp dụng tính chất cộng trừ:
$$\frac{x}{m} = \frac{y}{n} = \frac{z}{p} = \frac{ax + by + cz}{am + bn + cp} = \dots$$
2. **Trường hợp biểu thức chứa tích ($x \cdot y = P$) hoặc lũy thừa ($x^2 + y^2 = Q$):**
Đặt $\frac{x}{m} = \frac{y}{n} = k \implies x = mk; y = nk$. Thay vào phương trình để tìm $k$, rồi suy ra $(x; y)$.

---

#### Bài toán 1:
Tìm các số $x, y, z$ biết:
a) $\frac{x}{2} = \frac{y}{3} = \frac{z}{5}$ và $3x - 2y + 4z = 80$.
b) $\frac{x}{4} = \frac{y}{7}$ và $x \cdot y = 112$.

**Lời giải:**

a) Ta biến đổi hệ số các tỉ số:
$$\frac{x}{2} = \frac{3x}{6};\quad \frac{y}{3} = \frac{2y}{6};\quad \frac{z}{5} = \frac{4z}{20}$$
Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{x}{2} = \frac{y}{3} = \frac{z}{5} = \frac{3x - 2y + 4z}{6 - 6 + 20} = \frac{80}{20} = 4$$
Từ đó suy ra:
- $x = 2 \times 4 = 8$.
- $y = 3 \times 4 = 12$.
- $z = 5 \times 4 = 20$.
- Thử lại: $3(8) - 2(12) + 4(20) = 24 - 24 + 80 = 80$ (đúng).
Vậy $(x, y, z) = (8, 12, 20)$.

b) Đặt $\frac{x}{4} = \frac{y}{7} = k \implies x = 4k$ và $y = 7k$.
Thay vào điều kiện tích:
$$x \cdot y = 112 \implies (4k) \cdot (7k) = 112 \implies 28 k^2 = 112 \implies k^2 = 4$$
Suy ra $k = 2$ hoặc $k = -2$.
- Với $k = 2 \implies x = 4 \times 2 = 8$ và $y = 7 \times 2 = 14$.
- Với $k = -2 \implies x = 4 \times (-2) = -8$ và $y = 7 \times (-2) = -14$.
Vậy có hai cặp số thỏa mãn: $(x; y) = (8; 14)$ hoặc $(x; y) = (-8; -14)$.

---

### Dạng 2: Phân biệt và giải bài toán Tỉ lệ thuận vs Tỉ lệ nghịch

**Phương pháp giải:**
1. Đọc kỹ đề bài, xác định đại lượng nào không đổi.
2. Thiết lập bảng phân tích logic:
   - Nếu "Đại lượng $A$ tăng $\implies$ Đại lượng $B$ tăng": **Tỉ lệ thuận** $\implies$ Lập tỉ số bằng nhau: $\frac{A_1}{A_2} = \frac{B_1}{B_2}$.
   - Nếu "Đại lượng $A$ tăng $\implies$ Đại lượng $B$ giảm": **Tỉ lệ nghịch** $\implies$ Lập tích số bằng nhau: $A_1 \cdot B_1 = A_2 \cdot B_2$.

---

#### Bài toán 2 (So sánh hai tình huống):
Một đội máy gặt lúa dự định gặt một cánh đồng mẫu lớn.
a) Tình huống 1: Nếu $3$ máy gặt làm việc trong $8$ giờ thì gặt được $18\text{ ha}$ lúa. Hỏi với $5$ máy gặt cùng loại làm việc trong $8$ giờ thì gặt được bao nhiêu héc-ta lúa?
b) Tình huống 2: Nếu đội dùng $6$ máy gặt thì gặt xong toàn bộ cánh đồng trong $10$ ngày. Nếu muốn gặt xong cánh đồng đó sớm hơn, chỉ trong $4$ ngày thì cần bao nhiêu máy gặt cùng công suất?

**Lời giải:**

a) **Xét Tình huống 1:**
- Thời gian làm việc cố định ($8$ giờ).
- Số máy gặt và diện tích lúa gặt được là hai đại lượng **tỉ lệ thuận** (càng nhiều máy thì diện tích gặt được càng lớn).
- Lập tỉ số: $\frac{S_1}{m_1} = \frac{S_2}{m_2} \implies \frac{18}{3} = \frac{S_2}{5}$.
- Suy ra: $S_2 = \frac{18 \times 5}{3} = 30\text{ (ha)}$.
- Vậy $5$ máy sẽ gặt được $30\text{ ha}$ lúa.

b) **Xét Tình huống 2:**
- Diện tích cánh đồng là cố định.
- Số máy gặt và số ngày hoàn thành là hai đại lượng **tỉ lệ nghịch** (càng nhiều máy thì thời gian hoàn thành càng ngắn lại).
- Lập tích số: $m_1 \cdot t_1 = m_2 \cdot t_2 \implies 6 \cdot 10 = m_2 \cdot 4$.
- Suy ra: $m_2 = \frac{60}{4} = 15\text{ (máy)}$.
- Vậy để hoàn thành trong $4$ ngày, cần $15$ máy gặt (tức phải bổ sung thêm $15 - 6 = 9$ máy nữa).

---

### Dạng 3: Bài toán hỗn hợp chia phần tỉ lệ thuận và tỉ lệ nghịch

#### Bài toán 3:
Ba bạn An, Bình, Cường được mẹ giao quét một đoạn đường làng dài $300\text{ m}$. Mẹ muốn chia đoạn đường cho ba bạn tỉ lệ nghịch với tuổi của mỗi bạn (bạn nào lớn tuổi hơn thì phụ trách đoạn đường dài hơn, tức tỉ lệ nghịch với nghịch đảo tuổi, hay tỉ lệ nghịch với thời gian).
Biết rằng tuổi của An, Bình, Cường lần lượt là $10$ tuổi, $12$ tuổi và $15$ tuổi.
Hỏi mỗi bạn cần quét đoạn đường dài bao nhiêu mét nếu đoạn đường được chia tỉ lệ nghịch với các số tuổi $10, 12, 15$?

**Lời giải:**

Gọi chiều dài đoạn đường An, Bình, Cường nhận lần lượt là $x, y, z$ (mét, điều kiện $x, y, z > 0$).
Tổng chiều dài đoạn đường là:
$$x + y + z = 300\text{ (m)}$$

Vì $x, y, z$ tỉ lệ nghịch với $10, 12, 15$, ta có:
$$10x = 12y = 15z$$
Chia cả ba vế cho BCNN$(10, 12, 15) = 60$:
$$\frac{10x}{60} = \frac{12y}{60} = \frac{15z}{60} \implies \frac{x}{6} = \frac{y}{5} = \frac{z}{4}$$

Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{x}{6} = \frac{y}{5} = \frac{z}{4} = \frac{x + y + z}{6 + 5 + 4} = \frac{300}{15} = 20$$
Từ đó suy ra:
- An quét: $x = 6 \times 20 = 120\text{ m}$.
- Bình quét: $y = 5 \times 20 = 100\text{ m}$.
- Cường quét: $z = 4 \times 20 = 80\text{ m}$.
- Kiểm tra: $120 + 100 + 80 = 300\text{ m}$ và $10(120) = 12(100) = 15(80) = 1200$ (chính xác tuyệt đối).
Vậy An quét $120\text{ m}$, Bình quét $100\text{ m}$ và Cường quét $80\text{ m}$.

---

### Dạng 4: Chứng minh đẳng thức tỉ lệ thức nâng cao

**Phương pháp giải:**
Khi cần chứng minh một đẳng thức tỉ lệ phức tạp từ $\frac{a}{b} = \frac{c}{d}$, **phương pháp đặt ẩn phụ $k$** là phương pháp vạn năng và trong sáng nhất:
- Đặt $\frac{a}{b} = \frac{c}{d} = k \implies a = kb$ và $c = kd$.
- Thay $a, c$ vào vế trái ($\text{VT}$) và vế phải ($\text{VP}$) của đẳng thức cần chứng minh.
- Rút gọn cả hai vế về cùng một biểu thức theo $k$.
- Kết luận $\text{VT} = \text{VP} \implies$ Đẳng thức được chứng minh.

---

#### Bài toán 4:
Cho tỉ lệ thức $\frac{a}{b} = \frac{c}{d}$ (với giả thiết các mẫu số đều khác $0$). Chứng minh rằng:
$$\frac{5a + 3b}{5a - 3b} = \frac{5c + 3d}{5c - 3d}$$

**Lời giải:**

Đặt $\frac{a}{b} = \frac{c}{d} = k \implies a = kb$ và $c = kd$.

Thay vào vế trái ($\text{VT}$):
$$\text{VT} = \frac{5(kb) + 3b}{5(kb) - 3b} = \frac{b(5k + 3)}{b(5k - 3)} = \frac{5k + 3}{5k - 3}$$

Thay vào vế phải ($\text{VP}$):
$$\text{VP} = \frac{5(kd) + 3d}{5(kd) - 3d} = \frac{d(5k + 3)}{d(5k - 3)} = \frac{5k + 3}{5k - 3}$$

Nhận thấy $\text{VT} = \text{VP} = \frac{5k + 3}{5k - 3}$.
Vậy $\frac{5a + 3b}{5a - 3b} = \frac{5c + 3d}{5c - 3d}$ (Điều phải chứng minh).

---

## III. 5 Chuyên đề Nâng cao & Mở rộng Tư duy Khoa học

### Chuyên đề 1: Nghịch lý Simpson trong Phân tích Dữ liệu Tỉ lệ

Trong thống kê và lý thuyết tỉ lệ, **Nghịch lý Simpson (Simpson's Paradox)** là hiện tượng kỳ lạ khi một xu hướng xuất hiện ở từng nhóm dữ liệu riêng rẽ nhưng lại bị đảo ngược hoàn toàn khi gộp chung tất cả các nhóm lại!

Ví dụ, một loại thuốc điều trị bệnh $A$ có tỉ lệ khỏi bệnh ở nam giới cao hơn thuốc đối chứng, và ở nữ giới cũng cao hơn thuốc đối chứng. Nhưng khi gộp chung cả nam và nữ, tỉ lệ khỏi bệnh của thuốc này lại thấp hơn thuốc đối chứng!
Nguyên nhân sâu xa là do tỉ lệ phân bổ số lượng bệnh nhân nặng/nhẹ giữa hai giới tính không đồng đều. Người làm toán phải luôn cẩn trọng khi so sánh các tỉ số trên những tập mẫu có quy mô khác nhau.

---

### Chuyên đề 2: Cân đĩa Roberval và Định luật Moment Lực trong Cơ học

Một chiếc cân đĩa thăng bằng dựa trên phương trình tỉ lệ thức về moment lực:
$$m_1 \cdot l_1 = m_2 \cdot l_2 \iff \frac{m_1}{m_2} = \frac{l_2}{l_1}$$
Trong đó $m_1, m_2$ là khối lượng quả cân, $l_1, l_2$ là khoảng cách từ đĩa cân đến trục quay.
Nếu cánh tay đòn bên trái dài gấp đôi bên phải ($l_1 = 2 l_2$), thì chỉ cần một quả cân $1\text{ kg}$ bên trái là có thể làm thăng bằng một vật nặng $2\text{ kg}$ bên phải. Đây là sự kết hợp kinh điển giữa đại số tỉ lệ nghịch và định luật vật lý Newton.

---

### Chuyên đề 3: Tỉ lệ thức và Cân bằng Nguyên tố trong Hóa học Phân tích

Trong hóa học định lượng, phương pháp chuẩn độ axit - bazơ dựa trên tỉ lệ số mol phản ứng:
$$\frac{C_A \cdot V_A}{a} = \frac{C_B \cdot V_B}{b}$$
Trong đó $C$ là nồng độ mol, $V$ là thể tích dung dịch, $a, b$ là hệ số tỉ lượng trong phương trình hóa học.
Biết nồng độ chuẩn của dung dịch kiềm, các nhà hóa học chỉ cần đo thể tích tiêu thụ trên buret là lập được tỉ lệ thức để tìm ra chính xác nồng độ axit chưa biết trong mẫu xét nghiệm.

---

### Chuyên đề 4: Hiệu quả kinh tế theo Quy mô (Economies of Scale)

Trong kinh tế học sản xuất, chi phí cố định trung bình trên một đơn vị sản phẩm ($\text{AFC}$) tỉ lệ nghịch với quy mô sản lượng $Q$:
$$\text{AFC} = \frac{\text{TFC}}{Q}$$
(với $\text{TFC}$ là tổng chi phí thuê nhà xưởng, máy móc không đổi).
Khi một nhà máy sản xuất linh kiện điện tử tăng sản lượng từ $10\,000$ lên $1\,000\,000$ con chip mỗi tháng, chi phí khấu hao máy móc chia cho mỗi con chip sẽ giảm đi $100$ lần! Đó chính là lý do các tập đoàn toàn cầu có thể bán sản phẩm công nghệ cao với giá thành cực kỳ cạnh tranh.

---

### Chuyên đề 5: Thuật toán Băm và Phân bổ Tải (Consistent Hashing & Load Balancing)

Trong các hệ thống phân tán lớn như Google Tìm kiếm hay YouTube:
Hàng triệu lượt truy cập mỗi giây phải được chia đều cho hàng nghìn máy chủ (Server). Các kỹ sư phần mềm sử dụng thuật toán phân bổ tải trọng tỉ lệ (Weighted Load Balancing):
$$\frac{\text{Số yêu cầu gửi đến Server } i}{\text{Năng lực CPU của Server } i} = \text{const}$$
Hệ thống máy chủ áp dụng dãy tỉ số bằng nhau trong thời gian thực để đảm bảo không có máy chủ nào bị quá tải hay bị bỏ trống, duy trì mạng internet thông suốt $24/7$.

---

## IV. Bài tập Trắc nghiệm Tương tác Tổng ôn (10 câu hỏi)

Hãy tự kiểm tra kiến thức toàn diện Chương 6 qua $10$ câu hỏi trắc nghiệm dưới đây:

````quiz
title: "Kiểm tra Tổng ôn Chương 6 (Tỉ lệ thức và Đại lượng tỉ lệ)"
questions:
  - question: "Cho đẳng thức 2 * 36 = 8 * 9. Tỉ lệ thức nào sau đây là SAI?"
    options:
      - "2/8 = 9/36"
      - "2/9 = 8/36"
      - "36/8 = 9/2"
      - "2/36 = 8/9"
    answer: 3
    hint: "Kiểm tra tích chéo: ở phương án sai, tích chéo là 2*9 != 36*8."
    explanation: "Tỉ lệ thức 2/36 = 8/9 có tích chéo là 2*9 = 18 != 36*8 = 288, do đó đây là tỉ lệ thức sai."

  - question: "Cho x/4 = y/7 và x + y = 44. Giá trị của x và y lần lượt là:"
    options:
      - "x = 16; y = 28"
      - "x = 12; y = 32"
      - "x = 20; y = 24"
      - "x = 14; y = 30"
    answer: 0
    hint: "Tỉ số chung = 44 / (4 + 7) = 44 / 11 = 4."
    explanation: "Ta có x/4 = y/7 = (x + y)/(4 + 7) = 44/11 = 4. Suy ra x = 4*4 = 16 và y = 7*4 = 28."

  - question: "Nếu y tỉ lệ thuận với x theo hệ số tỉ lệ k = -2 thì phát biểu nào sau đây ĐÚNG?"
    options:
      - "y = -2/x"
      - "x = -2y"
      - "x = (-1/2)y"
      - "x * y = -2"
    answer: 2
    hint: "y = kx -> x = (1/k)y."
    explanation: "Vì y = -2x nên x = (-1/2)y, do đó x tỉ lệ thuận với y theo hệ số -1/2."

  - question: "Nếu y tỉ lệ nghịch với x theo hệ số tỉ lệ a = 24 thì khi x = -6, giá trị của y là:"
    options:
      - "4"
      - "-4"
      - "-144"
      - "18"
    answer: 1
    hint: "y = a / x = 24 / (-6)."
    explanation: "y = 24 / (-6) = -4."

  - question: "Cho biết hai đại lượng x và y tỉ lệ thuận. Khi x = 3 thì y = 12. Khi x = 5 thì giá trị của y là:"
    options:
      - "15"
      - "18"
      - "20"
      - "25"
    answer: 2
    hint: "Hệ số k = 12 / 3 = 4 -> y = 4 * 5 = 20."
    explanation: "Hệ số tỉ lệ k = 12/3 = 4. Khi x = 5 thì y = 4*5 = 20."

  - question: "Cho biết hai đại lượng x và y tỉ lệ nghịch. Khi x = 3 thì y = 12. Khi x = 4 thì giá trị của y là:"
    options:
      - "9"
      - "16"
      - "8"
      - "6"
    answer: 0
    hint: "Tích không đổi: 3 * 12 = 36 -> y = 36 / 4 = 9."
    explanation: "Vì tỉ lệ nghịch nên x*y = 3*12 = 36. Khi x = 4 thì y = 36 / 4 = 9."

  - question: "Ba góc của một tam giác tỉ lệ với 1 : 2 : 3. Số đo góc lớn nhất của tam giác đó là:"
    options:
      - "60°"
      - "75°"
      - "90°"
      - "120°"
    answer: 2
    hint: "Tổng ba góc tam giác = 180°. Góc lớn nhất = 180 / (1 + 2 + 3) * 3."
    explanation: "Tổng ba góc = 180°. Tỉ số chung = 180 / 6 = 30°. Góc lớn nhất là 3 * 30° = 90° (tam giác vuông)."

  - question: "Một ô tô tiêu thụ 15 lít xăng cho 200 km. Muốn đi quãng đường 500 km thì ô tô cần bao nhiêu lít xăng?"
    options:
      - "30 lít"
      - "35 lít"
      - "37.5 lít"
      - "40 lít"
    answer: 2
    hint: "Lượng xăng tỉ lệ thuận với quãng đường: (15 * 500) / 200."
    explanation: "Lượng xăng cần dùng = (15 * 500) / 200 = 37.5 lít."

  - question: "8 người xây xong một bức tường trong 6 ngày. Muốn xây xong bức tường đó trong 4 ngày thì cần bao nhiêu người (cùng năng suất)?"
    options:
      - "10 người"
      - "12 người"
      - "14 người"
      - "16 người"
    answer: 1
    hint: "Số người tỉ lệ nghịch với thời gian: (8 * 6) / 4 = 12."
    explanation: "Số công là 8 * 6 = 48 công. Để làm xong trong 4 ngày cần 48 / 4 = 12 người."

  - question: "Cho x/2 = y/3 = z/5 và 2x + y - z = 8. Giá trị của x + y + z là:"
    options:
      - "20"
      - "30"
      - "40"
      - "50"
    answer: 2
    hint: "Đặt x/2 = y/3 = z/5 = k. Thay x = 2k, y = 3k, z = 5k vào 2x + y - z = 8 để tìm k, rồi tính x + y + z = 10k."
    explanation: "Đặt x/2 = y/3 = z/5 = k thì x = 2k, y = 3k, z = 5k. Từ 2x + y - z = 8 ta có 4k + 3k - 5k = 2k = 8, suy ra k = 4. Vậy x + y + z = 10k = 40."
````

---

## V. Đề kiểm tra tổng ôn 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tỉ lệ thức & Dãy tỉ số** | $2$ câu TN ($1.0\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$4.5$ điểm** |
| **Đại lượng tỉ lệ thuận** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2a ($1.5\text{ đ}$) | | **$2.5$ điểm** |
| **Đại lượng tỉ lệ nghịch** | $1$ câu TN ($0.5\text{ đ}$) | | TL2b ($1.5\text{ đ}$) | | **$2.0$ điểm** |
| **Toán thực tế tổng hợp** | | | TL3 ($1.0\text{ đ}$) | | **$1.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Từ tỉ lệ thức $\frac{a}{b} = \frac{c}{d}$, ta suy ra:
- A. $a \cdot b = c \cdot d$
- B. $a \cdot c = b \cdot d$
- C. $a \cdot d = b \cdot c$
- D. $a + d = b + c$

**Câu 2:** Cho $\frac{x}{5} = \frac{y}{8}$ và $y - x = 12$. Giá trị của $x$ là:
- A. $20$
- B. $32$
- C. $15$
- D. $24$

**Câu 3:** Khẳng định nào sau đây mô tả hai đại lượng tỉ lệ thuận?
- A. Tích hai giá trị tương ứng luôn không đổi.
- B. Thương hai giá trị tương ứng luôn không đổi.
- C. Đồ thị là một đường cong đối xứng qua gốc tọa độ.
- D. Khi đại lượng này tăng thì đại lượng kia giảm.

**Câu 4:** Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số $a = 15$ thì công thức biểu diễn $y$ theo $x$ là:
- A. $y = 15x$
- B. $y = \frac{15}{x}$
- C. $y = \frac{x}{15}$
- D. $y = x - 15$

**Câu 5:** Một hình chữ nhật có chu vi $48\text{ cm}$ và tỉ số giữa chiều rộng và chiều dài là $\frac{3}{5}$. Chiều dài hình chữ nhật là:
- A. $9\text{ cm}$
- B. $12\text{ cm}$
- C. $15\text{ cm}$
- D. $18\text{ cm}$

**Câu 6:** Một tổ công nhân dự kiến làm xong công việc trong $12$ ngày. Nếu tăng năng suất lên gấp rưỡi ($1.5$ lần) thì tổ đó làm xong công việc trong mấy ngày?
- A. $6$ ngày
- B. $8$ ngày
- C. $9$ ngày
- D. $18$ ngày

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):** Tìm ba số $x, y, z$ biết:
a) ($1.0$ điểm) $\frac{x}{3} = \frac{y}{5} = \frac{z}{7}$ và $x + y + z = 75$.
b) ($1.0$ điểm) $\frac{x}{2} = \frac{y}{3} = \frac{z}{4}$ và $2x - 3y + z = -5$.

**Bài 2 ($3.0$ điểm - Đối sánh hai bài toán):**
a) ($1.5$ điểm) Một máy in laser in được $75$ trang tài liệu trong $3$ phút. Hỏi trong $8$ phút máy in đó in được bao nhiêu trang tài liệu cùng loại?
b) ($1.5$ điểm) Để chở hết một lô hàng cứu trợ, nếu dùng loại xe tải chở được $5$ tấn một chuyến thì cần $12$ chuyến xe. Nếu dùng loại xe tải lớn hơn chở được $6$ tấn một chuyến thì cần bao nhiêu chuyến xe?

**Bài 3 ($1.0$ điểm):**
Ba lớp 7A, 7B, 7C cùng tham gia trồng cây xanh cho vườn trường. Số cây trồng được của ba lớp lần lượt tỉ lệ với các số $4; 5; 6$. Biết rằng lớp 7C trồng được nhiều hơn lớp 7A là $18$ cây.
Tính số cây mỗi lớp đã trồng được.

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
Cho dãy tỉ số bằng nhau:
$$\frac{a}{2025} = \frac{b}{2026} = \frac{c}{2027}$$
Chứng minh rằng:
$$4(a - b)(b - c) = (c - a)^2$$

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. C · 2. A · 3. B · 4. B · 5. C · 6. B** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Áp dụng tính chất: $\frac{x}{3} = \frac{y}{5} = \frac{z}{7} = \frac{x + y + z}{3 + 5 + 7} = \frac{75}{15} = 5$.<br>- Suy ra: $x = 3 \times 5 = 15$; $y = 5 \times 5 = 25$; $z = 7 \times 5 = 35$. Kết luận đúng. | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - Ta có: $\frac{x}{2} = \frac{2x}{4}$; $\frac{y}{3} = \frac{3y}{9}$; $\frac{z}{4}$.<br>- Áp dụng tính chất: $\frac{2x - 3y + z}{4 - 9 + 4} = \frac{-5}{-1} = 5$.<br>- Suy ra: $x = 2 \times 5 = 10$; $y = 3 \times 5 = 15$; $z = 4 \times 5 = 20$. Kết luận đúng. | $0.25$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 2a** | - Số trang in và thời gian là hai đại lượng tỉ lệ thuận.<br>- Lập tỉ số: $\frac{75}{3} = \frac{S_2}{8}$.<br>- Suy ra: $S_2 = \frac{75 \times 8}{3} = 25 \times 8 = 200$ (trang). Kết luận đúng. | $0.5$ đ<br>$0.5$ đ<br>$0.5$ đ |
| **Bài 2b** | - Tải trọng mỗi chuyến và số chuyến là hai đại lượng tỉ lệ nghịch (vì tổng khối lượng hàng không đổi).<br>- Ta có: $5 \times 12 = 6 \times c_2 \implies 60 = 6 \cdot c_2$.<br>- Suy ra: $c_2 = \frac{60}{6} = 10$ (chuyến). Kết luận đúng. | $0.5$ đ<br>$0.5$ đ<br>$0.5$ đ |
| **Bài 3** | - Gọi số cây ba lớp 7A, 7B, 7C trồng lần lượt là $x, y, z$ ($x, y, z \in \mathbb{N}^*$).<br>- Ta có: $\frac{x}{4} = \frac{y}{5} = \frac{z}{6}$ và $z - x = 18$.<br>- Áp dụng tính chất: $\frac{x}{4} = \frac{y}{5} = \frac{z}{6} = \frac{z - x}{6 - 4} = \frac{18}{2} = 9$.<br>- Suy ra: $x = 4 \times 9 = 36$; $y = 5 \times 9 = 45$; $z = 6 \times 9 = 54$ (cây). Kết luận đúng. | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 4** | - Áp dụng tính chất của dãy tỉ số bằng nhau:<br>$\frac{a}{2025} = \frac{b}{2026} = \frac{c}{2027} = \frac{a - b}{2025 - 2026} = \frac{a - b}{-1} \implies a - b = -k$.<br>$\frac{b - c}{2026 - 2027} = \frac{b - c}{-1} \implies b - c = -k$.<br>$\frac{c - a}{2027 - 2025} = \frac{c - a}{2} \implies c - a = 2k$.<br>- Thay vào vế trái: $\text{VT} = 4(a - b)(b - c) = 4(-k)(-k) = 4k^2$.<br>- Thay vào vế phải: $\text{VP} = (c - a)^2 = (2k)^2 = 4k^2$.<br>- Nhận thấy $\text{VT} = \text{VP} = 4k^2$. Đẳng thức được chứng minh. | $0.25$ đ<br><br>$0.25$ đ<br><br>$0.25$ đ<br>$0.25$ đ |
