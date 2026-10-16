---
title: 'Toán 8 Bài 2: Đa thức'
description: 'Làm chủ lý thuyết Đa thức Toán 8 Bài 2: Khái niệm đa thức nhiều biến, hạng tử, đa thức thu gọn, bậc của đa thức, tính giá trị biểu thức kèm 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Đa thức
  - Đa thức thu gọn
  - Bậc của đa thức
  - Giá trị của đa thức
  - Kết nối tri thức
grade: 8
---

# Bài 2. Đa thức

Sau khi đã làm chủ đơn thức ở Bài 1 — những viên gạch cơ bản nhất của đại số — chúng ta tiến thêm một bước quan trọng để ghép nối chúng lại thành một cấu trúc phong phú hơn: **Đa thức (Polynomial)**.

Từ *"Đa thức"* (bắt nguồn từ tiếng Hy Lạp *Poly* nghĩa là nhiều và La-tinh *Nomen* nghĩa là tên gọi hay hạng tử) đã đồng hành cùng lịch sử toán học qua hàng ngàn năm. Nếu đơn thức chỉ mô tả những đại lượng đơn lẻ thì đa thức chính là ngôn ngữ mô hình hóa toàn diện các hệ thống phức tạp: từ phương trình quỹ đạo bay của tên lửa, đường cong đồ họa của các siêu xe thể thao, phân tích cấu trúc thị trường tài chính cho đến thuật toán huấn luyện mạng trí tuệ nhân tạo (Deep Neural Networks).

Trong Bài 2 này, chúng ta sẽ cùng khám phá: Đa thức nhiều biến là gì? Thế nào là một đa thức thu gọn? Làm sao để xác định bậc chuẩn xác của một đa thức phức tạp và ứng dụng đa thức vào các bài toán thực tế của cuộc sống!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 2: ĐA THỨC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đa thức là <strong>tổng của những đơn thức</strong>.<br>• Mỗi đơn thức trong tổng gọi là một <strong>hạng tử</strong> của đa thức đó.<br>• Mỗi đơn thức cũng được coi là một đa thức.<br>• Số $0$ gọi là <em>đa thức không</em>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đa thức Thu gọn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là đa thức <strong>không còn hai hạng tử nào đồng dạng</strong>.<br>• Phương pháp thu gọn: Nhóm các đơn thức đồng dạng lại và thực hiện phép cộng trừ hệ số.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Bậc của Đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là <strong>bậc của hạng tử có bậc cao nhất</strong> trong dạng thu gọn của đa thức đó.<br>• <em>Quy tắc vàng:</em> Phải <strong>thu gọn đa thức</strong> trước khi xác định bậc!<br>• Đa thức không, không có bậc.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tính Giá trị Biểu thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bước 1:</strong> Thu gọn đa thức tối đa.<br>• <strong>Bước 2:</strong> Thay các giá trị cụ thể của các biến vào biểu thức.<br>• <strong>Bước 3:</strong> Thực hiện các phép tính số học cẩn thận về dấu.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhận diện đơn thức đồng dạng:** Hai đơn thức $3x^2 y$ và $-5x^2 y$ có đồng dạng với nhau không? Tổng của chúng bằng bao nhiêu?
2. **Quy tắc cộng trừ hệ số:** Tính nhanh: $4xy^2 - 7xy^2 + 5xy^2 = ?$
3. **Bậc của đơn thức:** Đơn thức $6x^3 y^2 z$ có bậc là bao nhiêu?
4. **Thay số đơn giản:** Giá trị của biểu thức $x^2 - 2x + 1$ tại $x = 3$ bằng bao nhiêu?
5. **Dấu ngoặc:** Khi phá ngoặc có dấu trừ đằng trước: $-(a - b + c)$, các dấu bên trong biến đổi như thế nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Có đồng dạng (cùng phần biến $x^2 y$). Tổng bằng $(3 - 5)x^2 y = -2x^2 y$.
> 2. $(4 - 7 + 5)xy^2 = 2xy^2$.
> 3. $3 + 2 + 1 = 6$.
> 4. $3^2 - 2(3) + 1 = 9 - 6 + 1 = 4$.
> 5. Đổi dấu toàn bộ các số hạng bên trong: $-a + b - c$.

---

## I. Lý thuyết Trọng tâm

### 1. Đa thức là gì?

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Đa thức** là một tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một **hạng tử** của đa thức đó.

*Ví dụ:*
Biểu thức $P = x^2 - 2xy + 3y^2 - 5$ là một đa thức.
Đa thức này là tổng của 4 đơn thức (hạng tử):
$$P = (x^2) + (-2xy) + (3y^2) + (-5)$$
Các hạng tử của nó là: $x^2; \ -2xy; \ 3y^2; \ -5$.

*Quy ước và chú ý:*
- Mỗi đơn thức cũng được coi là một đa thức (đa thức chỉ có đúng $1$ hạng tử).
- Số $0$ được gọi là **đa thức không**.
- Kí hiệu tên đa thức: Thường dùng các chữ in hoa như $A, B, C, P, Q, R\dots$ hoặc ghi rõ các biến $P(x, y), Q(x, y, z)$.

---

### 2. Đa thức thu gọn

Xét đa thức:
$$A = 3x^2 y - 2xy + 5 - x^2 y + 4xy - 1$$
Trong đa thức $A$, có những hạng tử đồng dạng với nhau:
- $3x^2 y$ và $-x^2 y$ có cùng phần biến $x^2 y$.
- $-2xy$ và $4xy$ có cùng phần biến $xy$.
- $5$ và $-1$ là hai số thực (hai đơn thức bậc 0).

Áp dụng tính chất giao hoán và kết hợp của phép cộng, ta nhóm các đơn thức đồng dạng:
$$A = (3x^2 y - x^2 y) + (-2xy + 4xy) + (5 - 1)$$
$$A = 2x^2 y + 2xy + 4$$
Trong biểu thức mới nhận được, không còn hai hạng tử nào đồng dạng với nhau nữa. Ta nói đa thức này đã được **thu gọn**.

> [!IMPORTANT]
> **ĐỊNH NGHĨA ĐA THỨC THU GỌN:**
> Đa thức thu gọn là đa thức **không còn hai hạng tử nào đồng dạng**.

---

### 3. Bậc của đa thức

> [!IMPORTANT]
> **ĐỊNH NGHĨA BẬC:**
> Bậc của đa thức là **bậc của hạng tử có bậc cao nhất** trong dạng thu gọn của đa thức đó.

> [!WARNING]
> **CẢNH BÁO SAI LẦM PHỔ BIẾN:**
> Tuyệt đối **không được tìm bậc khi đa thức chưa thu gọn**! 
> Vì hai hạng tử có bậc cao nhất có thể triệt tiêu lẫn nhau sau khi thu gọn, khiến bậc thực sự của đa thức bị giảm xuống!

*Ví dụ:* Tìm bậc của đa thức $P = x^4 y + 3x^2 y^2 - x^4 y + 5xy + 2$.
- Nếu vội vàng nhìn vào $x^4 y$ và kết luận bậc là $4 + 1 = 5$ thì sẽ **HOÀN TOÀN SAI**!
- Thu gọn trước:
  $$P = (x^4 y - x^4 y) + 3x^2 y^2 + 5xy + 2 = 3x^2 y^2 + 5xy + 2$$
- Bây giờ xét bậc của từng hạng tử:
  + Hạng tử $3x^2 y^2$ có bậc: $2 + 2 = 4$.
  + Hạng tử $5xy$ có bậc: $1 + 1 = 2$.
  + Hạng tử $2$ có bậc: $0$.
- Bậc cao nhất là $4 \implies$ **Bậc của đa thức $P$ là $4$**!

*Quy ước về bậc:*
- Một số khác $0$ là đa thức bậc $0$.
- Số $0$ (đa thức không) là đa thức không có bậc.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết đa thức và xác định các hạng tử

**Phương pháp giải:**
- Biểu thức chỉ gồm các phép tính cộng, trừ, nhân và nâng lên lũy thừa với số mũ nguyên dương giữa các biến là đa thức.
- Biểu thức chứa biến ở mẫu số hoặc biến dưới dấu căn thì **không phải là đa thức**.
- Chú ý viết lại các phép trừ thành phép cộng với số đối để xác định chính xác dấu của từng hạng tử.

---

#### Bài toán 1:
Trong các biểu thức đại số sau, biểu thức nào là đa thức?
$$A = 2x^2 y - 3xy + \frac{1}{2}; \quad B = \frac{3x + 1}{y}; \quad C = \sqrt{2}x^3 y - 4y^2; \quad D = \frac{x^2 + 5}{3}; \quad E = \frac{2}{x^2 + 1}$$
Với các đa thức tìm được, hãy chỉ rõ các hạng tử của chúng.

**Lời giải:**

1. **Phân loại đa thức:**
- $A = 2x^2 y - 3xy + \frac{1}{2}$: Là đa thức (chỉ chứa phép nhân, cộng, trừ và lũy thừa số mũ nguyên dương).
  Các hạng tử: $2x^2 y; \ -3xy; \ \frac{1}{2}$.
- $B = \frac{3x + 1}{y}$: **Không phải đa thức** (chứa biến $y$ ở mẫu số).
- $C = \sqrt{2}x^3 y - 4y^2$: Là đa thức (hệ số $\sqrt{2}$ là số thực, biến có số mũ nguyên dương).
  Các hạng tử: $\sqrt{2}x^3 y; \ -4y^2$.
- $D = \frac{x^2 + 5}{3} = \frac{1}{3}x^2 + \frac{5}{3}$: Là đa thức (mẫu số là số $3$, không chứa biến).
  Các hạng tử: $\frac{1}{3}x^2; \ \frac{5}{3}$.
- $E = \frac{2}{x^2 + 1}$: **Không phải đa thức** (chứa biến $x$ ở mẫu số).

---

### Dạng 2: Thu gọn đa thức và tìm bậc của đa thức

**Phương pháp giải:**
1. Áp dụng quy tắc dấu ngoặc và tính chất giao hoán, kết hợp: Đặt các đơn thức đồng dạng vào từng nhóm ngoặc vuông/tròn có dấu $+$ ở giữa.
2. Thực hiện cộng trừ hệ số của các đơn thức đồng dạng.
3. Tìm bậc của từng hạng tử sau thu gọn. Hạng tử có bậc lớn nhất chính là bậc của đa thức.

---

#### Bài toán 2:
Thu gọn và tìm bậc của các đa thức sau:
a) $M = 5x^3 y - 4xy^2 + 2x^3 y - 3 + 4xy^2 + 1$
b) $N = 2x^2 y^3 - 5x^4 + 3x^2 y^3 + 5x^4 - 7xy + 9$
c) $P = x^3 y^2 - 2xy + \frac{1}{2}x^3 y^2 - \frac{3}{2}x^3 y^2 + 4xy - 5$

**Lời giải:**

a) Thu gọn đa thức $M$:
$$M = (5x^3 y + 2x^3 y) + (-4xy^2 + 4xy^2) + (-3 + 1)$$
$$M = (5 + 2)x^3 y + (-4 + 4)xy^2 - 2$$
$$M = 7x^3 y + 0 - 2 = 7x^3 y - 2$$
- Hạng tử $7x^3 y$ có bậc là $3 + 1 = 4$.
- Hạng tử $-2$ có bậc $0$.
$\implies$ **Bậc của đa thức $M$ là $4$**.

b) Thu gọn đa thức $N$:
$$N = (2x^2 y^3 + 3x^2 y^3) + (-5x^4 + 5x^4) - 7xy + 9$$
$$N = 5x^2 y^3 + 0 - 7xy + 9 = 5x^2 y^3 - 7xy + 9$$
- Hạng tử $5x^2 y^3$ có bậc: $2 + 3 = 5$.
- Hạng tử $-7xy$ có bậc: $1 + 1 = 2$.
- Hạng tử $9$ có bậc: $0$.
$\implies$ **Bậc của đa thức $N$ là $5$**.

c) Thu gọn đa thức $P$:
$$P = \left(x^3 y^2 + \frac{1}{2}x^3 y^2 - \frac{3}{2}x^3 y^2\right) + (-2xy + 4xy) - 5$$
$$P = \left(1 + \frac{1}{2} - \frac{3}{2}\right)x^3 y^2 + (-2 + 4)xy - 5$$
$$P = 0 \cdot x^3 y^2 + 2xy - 5 = 2xy - 5$$
- Hạng tử $2xy$ có bậc: $1 + 1 = 2$.
- Hạng tử $-5$ có bậc: $0$.
$\implies$ **Bậc của đa thức $P$ là $2$** (lưu ý: các hạng tử bậc 5 đã triệt tiêu hoàn toàn!).

---

### Dạng 3: Tính giá trị của đa thức tại giá trị cho trước của các biến

**Phương pháp giải:**
1. Luôn **thu gọn đa thức** trước để biểu thức trở nên ngắn gọn nhất.
2. Thay giá trị của các biến vào đa thức đã thu gọn.
3. Chú ý tính toán cẩn thận quy tắc lũy thừa của số âm: $(-a)^2 = a^2$ (mũ chẵn dương) và $(-a)^3 = -a^3$ (mũ lẻ âm).

---

#### Bài toán 3:
Cho đa thức:
$$A = 4x^2 y - 3xy^2 + 2x^2 y - 5 + 3xy^2 - x^2 y + 8$$
a) Thu gọn đa thức $A$.
b) Tính giá trị của đa thức $A$ tại $x = -2$ và $y = 3$.
c) Tính giá trị của đa thức $A$ tại $x = \frac{1}{2}$ và $y = -4$.

**Lời giải:**

a) Thu gọn đa thức $A$:
$$A = (4x^2 y + 2x^2 y - x^2 y) + (-3xy^2 + 3xy^2) + (-5 + 8)$$
$$A = (4 + 2 - 1)x^2 y + 0 + 3 = 5x^2 y + 3$$

b) Thay $x = -2$ và $y = 3$ vào biểu thức đã thu gọn $A = 5x^2 y + 3$:
$$A = 5 \cdot (-2)^2 \cdot 3 + 3 = 5 \cdot 4 \cdot 3 + 3 = 60 + 3 = 63$$

c) Thay $x = \frac{1}{2}$ và $y = -4$ vào biểu thức $A$:
$$A = 5 \cdot \left(\frac{1}{2}\right)^2 \cdot (-4) + 3 = 5 \cdot \frac{1}{4} \cdot (-4) + 3 = 5 \cdot (-1) + 3 = -5 + 3 = -2$$

---

### Dạng 4: Lập biểu thức đa thức trong bài toán thực tế

**Phương pháp giải:**
Phân tích đề bài, gọi các kích thước hoặc đại lượng là các biến số $x, y, z$. Sử dụng các công thức diện tích, thể tích, doanh thu để thiết lập đa thức.

---

#### Bài toán 4:
Một khu vườn hình chữ nhật có chiều dài ban đầu là $x\text{ (m)}$ và chiều rộng ban đầu là $y\text{ (m)}$ ($x > 4, y > 2$). Người ta mở rộng khu vườn bằng cách tăng chiều dài thêm $4\text{ m}$ và tăng chiều rộng thêm $2\text{ m}$.
a) Viết biểu thức biểu thị diện tích ban đầu của khu vườn.
b) Viết biểu thức biểu thị diện tích mới sau khi mở rộng của khu vườn.
c) Viết biểu thức biểu thị phần diện tích tăng thêm của khu vườn theo hai biến $x$ và $y$.
d) Tính phần diện tích tăng thêm khi biết $x = 15\text{ m}$ và $y = 10\text{ m}$.

**Lời giải:**

a) Diện tích ban đầu của khu vườn hình chữ nhật là:
$$S_1 = x \cdot y\text{ (m}^2\text{)}$$

b) Kích thước mới sau khi mở rộng:
- Chiều dài mới: $x + 4\text{ (m)}$.
- Chiều rộng mới: $y + 2\text{ (m)}$.
Diện tích mới của khu vườn là:
$$S_2 = (x + 4)(y + 2) = x(y + 2) + 4(y + 2) = xy + 2x + 4y + 8\text{ (m}^2\text{)}$$

c) Phần diện tích tăng thêm của khu vườn là:
$$\Delta S = S_2 - S_1 = (xy + 2x + 4y + 8) - xy = 2x + 4y + 8\text{ (m}^2\text{)}$$
Biểu thức $\Delta S = 2x + 4y + 8$ là một đa thức bậc nhất theo hai biến $x$ và $y$.

d) Khi $x = 15\text{ m}$ và $y = 10\text{ m}$, phần diện tích tăng thêm là:
$$\Delta S = 2(15) + 4(10) + 8 = 30 + 40 + 8 = 78\text{ (m}^2\text{)}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Đa thức Nội suy Lagrange trong Tái tạo Hình ảnh Siêu phân giải (AI Super-Resolution)

Khi bạn phóng to một bức ảnh mờ có độ phân giải thấp trên điện thoại, làm thế nào các thuật toán AI làm nét bức ảnh mà không bị vỡ hạt (pixelated)?
Thuật toán sử dụng **Đa thức Nội suy Song tuyến tính và Đa thức bậc ba (Bicubic Polynomial Interpolation)**:
- Cường độ màu sắc của từng pixel mới được mô tả bằng một đa thức hai biến:
  $$I(x, y) = \sum_{i=0}^3 \sum_{j=0}^3 a_{ij} x^i y^j$$
- Đa thức này nội suy mượt mà các đường viền sắc nét, khôi phục chi tiết lông mi, kẽ lá và làn da chân thực trong công nghệ đồ họa máy tính hiện đại.

---

### Chuyên đề 2: Mô hình Đa thức Doanh thu và Tối ưu Lợi nhuận Doanh nghiệp

Trong kinh tế học vi mô, hàm cầu của một sản phẩm công nghệ (ví dụ máy bay không người lái drone) liên hệ giữa giá bán $p$ và số lượng bán $q$:
$$q = a - bp$$
Hàm tổng doanh thu của công ty là tích giữa giá bán và sản lượng:
$$R(p) = p \cdot q = p(a - bp) = ap - bp^2$$
Đây là một **đa thức bậc hai** có đồ thị dạng parabol úp xuống. Bằng cách tìm đỉnh của parabol (giá trị cực đại của đa thức), các nhà tài chính xác định chính xác mức giá bán tối ưu để công ty đạt doanh thu cực đại mà không làm mất khách hàng.

---

### Chuyên đề 3: Đa thức Khối lượng và Cân bằng Tải trọng Tàu biển (Ship Hydrostatics)

Một con tàu chở hàng rời vượt biển có hình dáng mạn tàu uốn lượn bất đối xứng.
Làm thế nào để các kỹ sư hàng hải tính toán chính xác thể tích chiếm nước và tâm nổi của con tàu?
Họ sử dụng quy tắc tích phân đa thức Simpson: Chia thân tàu thành các mặt cắt ngang và xấp xỉ đường cong boong tàu bằng các đa thức bậc hai và bậc ba. Việc này đảm bảo con tàu luôn giữ được thăng bằng hoàn hảo ngay cả khi bão tố cấp 12 cuộn sóng nghiêng mạn tàu tới $30^\circ$.

---

### Chuyên đề 4: Thuật toán Mật mã Đa biến (Multivariate Cryptography) thời kỳ Hậu Lượng tử

Khi các siêu máy tính lượng tử (Quantum Computers) ra đời trong tương lai, chúng có thể bẻ khóa các thuật toán mã hóa RSA truyền thống trong vài phút.
Các nhà khoa học an ninh mạng toàn cầu đang phát triển hệ mật mã mới: **Mật mã Đa biến (Multivariate Public Key Cryptography)**:
- Bản mã được bảo vệ bằng một hệ thống gồm hàng trăm phương trình đa thức bậc hai với hàng trăm biến số:
  $$P_k(x_1, x_2, \dots, x_n) = y_k$$
- Bài toán giải ngược hệ đa thức đa biến ngẫu nhiên là bài toán cực khó (NP-hard), thách thức ngay cả những cỗ máy tính lượng tử mạnh nhất vũ trụ!

---

### Chuyên đề 5: Định lý Cơ bản của Đại số học (Fundamental Theorem of Algebra)

Năm 1799, "Hoàng tử toán học" Carl Friedrich Gauss ở tuổi 22 đã chứng minh định lý vĩ đại làm nền móng cho toàn bộ đại số hiện đại:
> **ĐỊNH LÝ CƠ BẢN CỦA ĐẠI SỐ:**
> Mọi đa thức một biến có bậc $n \ge 1$ với hệ số phức luôn có **đúng $n$ nghiệm** (kể cả nghiệm bội) trên trường số phức $\mathbb{C}$.

Định lý này khẳng định rằng không gian số phức là một trường đóng đại số hoàn chỉnh — chiếc chìa khóa vạn năng để các nhà vật lý lượng tử giải phương trình sóng Schrödinger mô tả sự chuyển động của các hạt electron trong nguyên tử.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 2: Đa thức (Toán 8)",
  "questions": [
    {
      "question": "Biểu thức nào sau đây KHÔNG PHẢI là một đa thức?",
      "options": [
        "2x^2 y - 3xy + 5",
        "(2x + 1) / y",
        "4x^3 - y^2",
        "-7"
      ],
      "answer": 1,
      "hint": "Đa thức không được chứa biến ở mẫu số.",
      "explanation": "Biểu thức $\\frac{2x + 1}{y}$ có chứa biến $y$ ở mẫu số nên không phải là đa thức."
    },
    {
      "question": "Số lượng hạng tử của đa thức P = 3x^2 y - 4xy + 5x - 7 là:",
      "options": [
        "2 hạng tử",
        "3 hạng tử",
        "4 hạng tử",
        "5 hạng tử"
      ],
      "answer": 2,
      "hint": "Đếm từng đơn thức trong tổng: $3x^2 y$, $-4xy$, $5x$, $-7$.",
      "explanation": "Đa thức $P$ gồm có 4 hạng tử là: $3x^2 y; \\ -4xy; \\ 5x; \\ -7$."
    },
    {
      "question": "Thu gọn đa thức A = 5x^2 y - 3xy^2 + 2x^2 y + 4xy^2 ta được:",
      "options": [
        "7x^2 y + xy^2",
        "7x^2 y - 7xy^2",
        "8x^2 y",
        "7x^4 y^2 + xy^4"
      ],
      "answer": 0,
      "hint": "Nhóm hạng tử đồng dạng: (5 + 2) x^2 y + (-3 + 4) xy^2.",
      "explanation": "$A = (5x^2 y + 2x^2 y) + (-3xy^2 + 4xy^2) = 7x^2 y + xy^2$."
    },
    {
      "question": "Bậc của đa thức Q = 4x^3 y^2 - 2x^5 + 5xy^3 - 4x^3 y^2 + 1 sau khi thu gọn là:",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "answer": 0,
      "hint": "Thu gọn hai hạng tử 4x^3 y^2 và -4x^3 y^2 trước. Hạng tử bậc cao nhất còn lại là -2x^5 (bậc 5).",
      "explanation": "Thu gọn: $Q = (4x^3 y^2 - 4x^3 y^2) - 2x^5 + 5xy^3 + 1 = -2x^5 + 5xy^3 + 1$. Hạng tử $-2x^5$ có bậc 5, hạng tử $5xy^3$ có bậc 4. Vậy bậc của $Q$ là 5."
    },
    {
      "question": "Bậc của đa thức M = x^2 y^3 - 3xy^4 + 5x^3 y^2 là:",
      "options": [
        "4",
        "5",
        "6",
        "9"
      ],
      "answer": 1,
      "hint": "Xét bậc từng hạng tử: x^2 y^3 (bậc 5), -3xy^4 (bậc 5), 5x^3 y^2 (bậc 5). Bậc cao nhất là 5.",
      "explanation": "Cả ba hạng tử đều có bậc là 5 ($2+3 = 5, 1+4 = 5, 3+2 = 5$). Do đó bậc của đa thức là 5."
    },
    {
      "question": "Giá trị của đa thức P = 2x^2 - 3xy + y^2 tại x = 1 và y = -2 bằng:",
      "options": [
        "12",
        "0",
        "8",
        "-4"
      ],
      "answer": 0,
      "hint": "Thay x = 1, y = -2: 2(1)^2 - 3(1)(-2) + (-2)^2 = 2 + 6 + 4.",
      "explanation": "Thay số: $P = 2(1)^2 - 3(1)(-2) + (-2)^2 = 2(1) - (-6) + 4 = 2 + 6 + 4 = 12$."
    },
    {
      "question": "Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "Bậc của đa thức luôn bằng tổng bậc của tất cả các hạng tử",
        "Đa thức thu gọn là đa thức không còn hai hạng tử nào đồng dạng",
        "Mỗi đa thức đều có ít nhất hai hạng tử",
        "Đa thức không có bậc bằng 0"
      ],
      "answer": 1,
      "hint": "Xem lại định nghĩa đa thức thu gọn.",
      "explanation": "Theo định nghĩa, đa thức thu gọn là đa thức không còn hai hạng tử nào đồng dạng. Phương án B đúng."
    },
    {
      "question": "Bậc của đa thức không (số 0) là:",
      "options": [
        "0",
        "1",
        "Không có bậc",
        "Vô cùng"
      ],
      "answer": 2,
      "hint": "Số 0 là một trường hợp đặc biệt về bậc trong đại số.",
      "explanation": "Theo quy ước đại số, số 0 được gọi là đa thức không và không có bậc."
    },
    {
      "question": "Thu gọn đa thức B = x^3 - 2x^2 y + 3xy^2 + 2x^2 y - x^3 ta được:",
      "options": [
        "3xy^2",
        "2x^3 + 3xy^2",
        "4x^2 y + 3xy^2",
        "0"
      ],
      "answer": 0,
      "hint": "Các cặp hạng tử đối nhau triệt tiêu: (x^3 - x^3) + (-2x^2 y + 2x^2 y) + 3xy^2.",
      "explanation": "$B = (x^3 - x^3) + (-2x^2 y + 2x^2 y) + 3xy^2 = 0 + 0 + 3xy^2 = 3xy^2$."
    },
    {
      "question": "Một tấm bìa hình chữ nhật có chiều dài là 2x + 3 (cm) và chiều rộng là x - 1 (cm). Biểu thức chu vi của tấm bìa đó là một đa thức có bậc bằng:",
      "options": [
        "Bậc 1",
        "Bậc 2",
        "Bậc 3",
        "Bậc 0"
      ],
      "answer": 0,
      "hint": "Chu vi = 2 * [(2x + 3) + (x - 1)] = 2 * (3x + 2) = 6x + 4.",
      "explanation": "Chu vi là $C = 2[(2x + 3) + (x - 1)] = 2(3x + 2) = 6x + 4$. Đây là đa thức bậc 1 theo biến $x$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho các biểu thức:
$$A = 3x^2 y - 5xy + 2; \quad B = \frac{x^2 - 4}{x + 2}; \quad C = -\frac{1}{3}x^3 y^2 + 4xy - 7; \quad D = 2\sqrt{x} + y$$
a) Biểu thức nào là đa thức? Biểu thức nào không phải là đa thức? Vì sao?
b) Tìm các hạng tử và bậc của mỗi đa thức tìm được.

### Bài tập 2:
Thu gọn các đa thức sau rồi tìm bậc của chúng:
a) $P = 3x^4 y^2 - 2x^2 y^3 + 5 - 3x^4 y^2 + 4x^2 y^3 - 1$
b) $Q = \frac{1}{3}x^2 y - 2xy^2 + \frac{2}{3}x^2 y + 5xy^2 - x^2 y$
c) $R = 2x^3 y - 4xy^2 + 3 - 2x^3 y + 4xy^2 - 3$

### Bài tập 3 (Toán thực tế):
Một rạp chiếu phim có giá vé vào cửa là $x$ đồng/vé cho người lớn và $y$ đồng/vé cho trẻ em. Trong một buổi chiếu phim:
- Buổi sáng bán được $120$ vé người lớn và $80$ vé trẻ em.
- Buổi tối bán được $250$ vé người lớn và $150$ vé trẻ em.
a) Viết biểu thức đa thức $T$ biểu thị tổng số tiền bán vé thu được trong cả hai buổi chiếu phim theo hai biến $x$ và $y$.
b) Thu gọn đa thức $T$ và xác định bậc của nó.
c) Nếu giá vé người lớn là $90\,000$ đồng và giá vé trẻ em là $60\,000$ đồng, hãy tính tổng số tiền rạp chiếu phim thu được.
