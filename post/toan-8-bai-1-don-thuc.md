---
title: 'Toán 8 Bài 1: Đơn thức'
description: 'Làm chủ lý thuyết Đơn thức Toán 8 Bài 1: Khái niệm đơn thức, đơn thức thu gọn, bậc của đơn thức, đơn thức đồng dạng, phép cộng và trừ đơn thức đồng dạng kèm 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Đơn thức
  - Đơn thức thu gọn
  - Bậc của đơn thức
  - Đơn thức đồng dạng
  - Kết nối tri thức
grade: 8
---

# Bài 1. Đơn thức

Chào mừng các em học sinh bước vào chương trình **Toán học lớp 8** — năm học bản lề và mang tính đột phá nhất của toàn bộ bậc Trung học cơ sở! Nếu như ở lớp 7, chúng ta đã làm quen với biểu thức đại số và đa thức một biến đơn giản, thì lên lớp 8, cánh cửa đại số sẽ mở rộng sang không gian đa biến ($x, y, z\dots$) phong phú và sinh động hơn bao giờ hết.

Viên gạch đầu tiên xây dựng nên toàn bộ tòa lâu đài đại số lớp 8 chính là **Đơn thức (Monomial)**. Từ công thức tính động năng một chiếc xe đang chạy $E_d = \frac{1}{2}mv^2$, công thức lực vạn vật hấp dẫn của Newton $F = G \frac{m_1 m_2}{r^2}$ cho đến năng lượng nguyên tử $E = mc^2$ của Einstein — tất cả các định luật vật lý vĩ đại nhất của vũ trụ đều được viết dưới dạng các đơn thức thanh nhã.

Bài học mở đầu này sẽ trang bị cho các em kiến thức toàn diện: Đơn thức là gì? Làm thế nào để thu gọn và xác định bậc của đơn thức nhiều biến? Quy tắc cộng trừ các đơn thức đồng dạng và những ứng dụng thực tiễn của chúng trong đời sống!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 1: ĐƠN THỨC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu thức đại số chỉ gồm <strong>một số</strong>, hoặc <strong>một biến</strong>, hoặc <strong>một tích</strong> giữa các số và các biến.<br>• Tuyệt đối không chứa phép cộng, trừ giữa các biến.<br>• Số $0$ được gọi là <em>đơn thức không</em>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đơn thức Thu gọn & Bậc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chỉ gồm tích của một số với các biến, mỗi biến chỉ viết một lần với số mũ nguyên dương.<br>• Gồm 2 phần: <strong>Hệ số</strong> và <strong>Phần biến</strong>.<br>• <strong>Bậc:</strong> Tổng số mũ của tất cả các biến có trong đơn thức đó.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đơn thức Đồng dạng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Hai đơn thức đồng dạng khi:<br>• Hệ số khác $0$.<br>• Có <strong>cùng phần biến</strong> (tất cả các biến cùng số mũ tương ứng).<br>• Các số thực khác $0$ là các đơn thức đồng dạng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Cộng & Trừ Đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Muốn cộng/trừ các đơn thức đồng dạng:<br>• <strong>Cộng (hoặc trừ) các hệ số</strong> với nhau.<br>• <strong>Giữ nguyên phần biến</strong>:<br>  $$a \cdot X + b \cdot X = (a + b) \cdot X$$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhận diện phép tính:** Trong các biểu thức sau, biểu thức nào chỉ chứa phép nhân: $3x + 2y$ hay $5x^2 y$?
2. **Quy tắc lũy thừa:** Kết quả của phép nhân $x^3 \cdot x^2$ bằng bao nhiêu?
3. **Phần hệ số:** Hệ số của biểu thức $-x^2 y$ là số nào?
4. **Cộng trừ đơn giản:** Tính nhanh: $4a + 7a - 2a = ?$
5. **Số mũ của biến:** Trong biểu thức $6xy^2 z$, số mũ của biến $x$ là bao nhiêu? Số mũ của biến $z$ là bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Biểu thức $5x^2 y$ (chỉ gồm phép nhân giữa số $5$ và các biến $x, y$).
> 2. $x^{3 + 2} = x^5$ (nhớ cộng số mũ, không nhân số mũ).
> 3. Hệ số là $-1$ (vì $-x^2 y = -1 \cdot x^2 y$).
> 4. $(4 + 7 - 2)a = 9a$.
> 5. Biến $x$ có số mũ là $1$ ($x = x^1$); biến $z$ có số mũ là $1$ ($z = z^1$).

---

## I. Lý thuyết Trọng tâm

### 1. Đơn thức là gì?

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Đơn thức** là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.

*Ví dụ về đơn thức:*
- Một số: $5, \ -12, \ \frac{3}{4}, \ 0$.
- Một biến: $x, \ y, \ z$.
- Tích giữa số và biến: $3x^2 y, \ -\frac{2}{3}xy^3, \ 4x^2 \cdot (-2)y \cdot z$.

*Biểu thức KHÔNG PHẢI là đơn thức:*
- $2x + 3y$ (chứa phép cộng giữa các biến).
- $x^2 - 4$ (chứa phép trừ).
- $\frac{3x}{y}$ (chứa biến $y$ ở mẫu số — phép chia biến).
- $\sqrt{x} + 1$ (chứa căn thức của biến).

---

### 2. Đơn thức thu gọn

Xét đơn thức: $A = 3x^2 y \cdot 4xy^3$.
Trong đơn thức này, số $3$ và số $4$ chưa được nhân với nhau; biến $x$ và biến $y$ xuất hiện nhiều lần. Ta có thể viết lại:
$$A = (3 \cdot 4) \cdot (x^2 \cdot x) \cdot (y \cdot y^3) = 12x^3 y^4$$
Đơn thức $12x^3 y^4$ được gọi là **đơn thức thu gọn**.

> [!IMPORTANT]
> **ĐỊNH NGHĨA ĐƠN THỨC THU GỌN:**
> Đơn thức thu gọn là đơn thức chỉ gồm tích của một số với các biến, mà mỗi biến chỉ được viết một lần dưới dạng nâng lên lũy thừa với số mũ nguyên dương.
> 
> Đơn thức thu gọn gồm hai phần tách biệt:
> 1. **Hệ số:** Phần số đứng trước (kể cả dấu âm).
> 2. **Phần biến:** Tích các lũy thừa của các biến.

*Quy ước:*
- Khi viết đơn thức thu gọn, ta luôn viết **hệ số trước**, **phần biến sau** và các biến viết theo thứ tự bảng chữ cái ($x, y, z\dots$).
- Hệ số bằng $1$ thường không viết (ví dụ: $x^2 y$ hiểu là $1x^2 y$).
- Hệ số bằng $-1$ viết dấu trừ (ví dụ: $-xy$ hiểu là $-1xy$).
- Một số khác $0$ là một đơn thức thu gọn có phần biến rỗng (bậc 0).

---

### 3. Bậc của đơn thức

> [!IMPORTANT]
> **ĐỊNH NGHĨA BẬC:**
> Bậc của đơn thức có hệ số khác $0$ là **tổng số mũ của tất cả các biến** có trong đơn thức đó.

*Cách tìm bậc của một đơn thức:*
- **Bước 1:** Thu gọn đơn thức (nếu đơn thức chưa thu gọn).
- **Bước 2:** Cộng tất cả các số mũ của từng biến lại.

*Ví dụ:*
- Đơn thức $5x^3 y^2 z$ có bậc là: $3 + 2 + 1 = 6$ (vì biến $z = z^1$).
- Đơn thức $-7x^4$ có bậc là $4$.
- Số thực khác $0$ (ví dụ: số $8 = 8x^0$) có bậc là **0**.
- **Số 0 được gọi là đơn thức không có bậc.**

---

### 4. Đơn thức đồng dạng

> [!IMPORTANT]
> **ĐỊNH NGHĨA ĐƠN THỨC ĐỒNG DẠNG:**
> Hai đơn thức đồng dạng là hai đơn thức có **hệ số khác 0** và có **cùng phần biến**.

*Ví dụ:*
- $3x^2 y$ và $-5x^2 y$ là hai đơn thức đồng dạng (cùng phần biến $x^2 y$).
- $\frac{1}{2}xy^3$ và $7xy^3$ là hai đơn thức đồng dạng (cùng phần biến $xy^3$).
- $2x^2 y$ và $2xy^2$ **KHÔNG đồng dạng** (vì một bên biến $x$ mũ 2, một bên biến $y$ mũ 2 — phần biến khác nhau).

*Chú ý đặc biệt:*
- Hai số thực khác $0$ bất kỳ luôn là hai đơn thức đồng dạng (ví dụ: $5$ và $-12$ là hai đơn thức đồng dạng vì cùng có phần biến rỗng).

---

### 5. Phép cộng và trừ các đơn thức đồng dạng

> [!IMPORTANT]
> **QUY TẮC CỘNG TRỪ:**
> Để cộng (hay trừ) các đơn thức đồng dạng, ta **cộng (hay trừ) các hệ số với nhau** và **giữ nguyên phần biến**.
> 
> $$A \cdot X + B \cdot X = (A + B) \cdot X$$
> $$A \cdot X - B \cdot X = (A - B) \cdot X$$

*Ví dụ:*
- $5x^2 y + 3x^2 y = (5 + 3)x^2 y = 8x^2 y$.
- $2xy^3 - 7xy^3 = (2 - 7)xy^3 = -5xy^3$.
- $4x^3 y^2 + x^3 y^2 - 6x^3 y^2 = (4 + 1 - 6)x^3 y^2 = -x^3 y^2$.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết đơn thức và đơn thức thu gọn

**Phương pháp giải:**
- Kiểm tra xem biểu thức có chứa phép cộng, trừ giữa các biến hoặc chứa biến ở mẫu số không. Nếu có $\to$ Không phải đơn thức.
- Nếu mỗi biến chỉ xuất hiện đúng một lần và các số được nhân gọn thành một hệ số $\to$ Đơn thức thu gọn.

---

#### Bài toán 1:
Trong các biểu thức đại số sau, biểu thức nào là đơn thức? Với các đơn thức tìm được, hãy chỉ ra đơn thức nào đã thu gọn, đơn thức nào chưa thu gọn:
$$A = -5x^2 y; \quad B = 3x + 2y; \quad C = \frac{4}{7}x^3 y^2 z; \quad D = 2x^2 \cdot (-3)y \cdot x; \quad E = \frac{5x}{y}; \quad F = 0$$

**Lời giải:**

1. **Phân loại đơn thức:**
- $A = -5x^2 y$: Là đơn thức (chỉ gồm tích số và biến).
- $B = 3x + 2y$: **Không phải đơn thức** (chứa phép cộng giữa các biến).
- $C = \frac{4}{7}x^3 y^2 z$: Là đơn thức.
- $D = 2x^2 \cdot (-3)y \cdot x$: Là đơn thức.
- $E = \frac{5x}{y}$: **Không phải đơn thức** (chứa biến $y$ ở mẫu số).
- $F = 0$: Là đơn thức (đơn thức không).

2. **Kiểm tra tính thu gọn của các đơn thức:**
- $A = -5x^2 y$ và $C = \frac{4}{7}x^3 y^2 z$: Là các **đơn thức đã thu gọn** (mỗi biến chỉ xuất hiện 1 lần, hệ số đã gom gọn).
- $D = 2x^2 \cdot (-3)y \cdot x$: Là **đơn thức chưa thu gọn** (số $2$ và $-3$ chưa nhân, biến $x$ xuất hiện hai lần).
  Thu gọn: $D = [2 \cdot (-3)] \cdot (x^2 \cdot x) \cdot y = -6x^3 y$.
- $F = 0$: Đơn thức không.

---

### Dạng 2: Thu gọn đơn thức và xác định hệ số, phần biến, bậc

**Phương pháp giải:**
1. Nhân các hệ số số học với nhau: $a \cdot b \cdot c$.
2. Áp dụng quy tắc nhân các lũy thừa cùng cơ số: $x^m \cdot x^n = x^{m+n}$ cho từng biến.
3. Xác định:
   - Hệ số: Số đứng trước.
   - Phần biến: Toàn bộ tích lũy thừa các biến.
   - Bậc: Tổng các số mũ của biến.

---

#### Bài toán 2:
Thu gọn các đơn thức sau, chỉ ra hệ số, phần biến và bậc của mỗi đơn thức:
a) $M = -\frac{2}{3}x^2 y \cdot 6xy^3$
b) $N = \left(-\frac{1}{2}x^3 y\right)^2 \cdot 4y^2 z$

**Lời giải:**

a) Thu gọn đơn thức $M$:
$$M = \left(-\frac{2}{3} \cdot 6\right) \cdot (x^2 \cdot x) \cdot (y \cdot y^3) = -4x^3 y^4$$
- **Hệ số:** $-4$.
- **Phần biến:** $x^3 y^4$.
- **Bậc của $M$:** Tổng số mũ là $3 + 4 = 7$.

b) Thu gọn đơn thức $N$:
Ta có: $\left(-\frac{1}{2}x^3 y\right)^2 = \left(-\frac{1}{2}\right)^2 \cdot (x^3)^2 \cdot y^2 = \frac{1}{4}x^6 y^2$.
Do đó:
$$N = \left(\frac{1}{4}x^6 y^2\right) \cdot (4y^2 z) = \left(\frac{1}{4} \cdot 4\right) \cdot x^6 \cdot (y^2 \cdot y^2) \cdot z = 1 \cdot x^6 y^4 z = x^6 y^4 z$$
- **Hệ số:** $1$.
- **Phần biến:** $x^6 y^4 z$.
- **Bậc của $N$:** Tổng số mũ là $6 + 4 + 1 = 11$ (lưu ý $z = z^1$).

---

### Dạng 3: Phân nhóm và cộng, trừ các đơn thức đồng dạng

**Phương pháp giải:**
1. Nhóm các đơn thức có **cùng phần biến** vào chung một nhóm.
2. Thực hiện cộng trừ các hệ số, giữ nguyên phần biến.

---

#### Bài toán 3:
a) Trong các đơn thức sau, hãy chỉ ra các cặp đơn thức đồng dạng:
$$3x^2 y; \quad -5xy^2; \quad \frac{2}{3}x^2 y; \quad 7x^2 y^2; \quad -xy^2$$
b) Tính giá trị của biểu thức:
$$P = 5x^3 y^2 - 3x^3 y^2 + 7x^3 y^2 - x^3 y^2$$
c) Rút gọn biểu thức sau rồi tính giá trị tại $x = -1, y = 2$:
$$Q = 4x^2 y - 3xy^2 + 5x^2 y + 7xy^2 - 2x^2 y$$

**Lời giải:**

a) Phân tích phần biến:
- Nhóm có phần biến $x^2 y$: $3x^2 y$ và $\frac{2}{3}x^2 y$ là hai đơn thức đồng dạng.
- Nhóm có phần biến $xy^2$: $-5xy^2$ và $-xy^2$ là hai đơn thức đồng dạng.
- Đơn thức $7x^2 y^2$ có phần biến khác nên không đồng dạng với các đơn thức còn lại.

b) Vì tất cả các hạng tử của $P$ đều đồng dạng (cùng phần biến $x^3 y^2$):
$$P = (5 - 3 + 7 - 1)x^3 y^2 = 8x^3 y^2$$

c) Nhóm các đơn thức đồng dạng trong $Q$:
$$Q = (4x^2 y + 5x^2 y - 2x^2 y) + (-3xy^2 + 7xy^2)$$
$$Q = (4 + 5 - 2)x^2 y + (-3 + 7)xy^2 = 7x^2 y + 4xy^2$$
Thay $x = -1$ và $y = 2$ vào biểu thức đã thu gọn:
$$Q = 7(-1)^2(2) + 4(-1)(2)^2 = 7(1)(2) + 4(-1)(4) = 14 - 16 = -2$$

---

### Dạng 4: Bài toán thực tế lập đơn thức tính đại lượng vật lý và hình học

**Phương pháp giải:**
Sử dụng các công thức hình học (diện tích, thể tích) hoặc công thức vật lý (quãng đường, nhiệt lượng, khối lượng) để thiết lập đơn thức chứa các biến số.

---

#### Bài toán 4:
a) Viết đơn thức biểu thị thể tích của một khối hộp chữ nhật có đáy là hình vuông cạnh $x\text{ (cm)}$ và chiều cao gấp $3$ lần cạnh đáy.
b) Viết đơn thức biểu thị số tiền mua $x$ quyển vở giá $12\,000$ đồng/quyển và $y$ chiếc bút bi giá $6\,000$ đồng/chiếc. Biểu thức này có phải là một đơn thức không?
c) Viết đơn thức biểu thị quãng đường một ô tô đi được trong thời gian $t\text{ (giờ)}$ với vận tốc trung bình $v\text{ (km/h)}$. Xác định bậc của đơn thức đó theo hai biến $v$ và $t$.

**Lời giải:**

a) Chiều cao của khối hộp chữ nhật là: $h = 3x\text{ (cm)}$.
Thể tích của khối hộp chữ nhật là:
$$V = S_{\text{đáy}} \cdot h = x^2 \cdot (3x) = 3x^3\text{ (cm}^3\text{)}$$
Đây là một đơn thức bậc $3$ theo biến $x$ với hệ số là $3$.

b) Số tiền mua vở và bút bi là:
$$T = 12\,000x + 6\,000y\text{ (đồng)}$$
Biểu thức $T$ **không phải là đơn thức** vì nó chứa phép cộng giữa hai đại lượng biến $x$ và $y$ (đây là một đa thức).

c) Công thức tính quãng đường là:
$$s = v \cdot t\text{ (km)}$$
Biểu thức $s = vt$ là một đơn thức có hệ số là $1$, phần biến là $vt$.
Bậc của đơn thức theo hai biến $v$ và $t$ là: $1 + 1 = 2$.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Công thức $E = mc^2$ của Albert Einstein (1905)

Năm 1905, trong thuyết Tương đối hẹp, Albert Einstein đã công bố phương trình vật lý nổi tiếng nhất lịch sử nhân loại:
$$E = mc^2$$
- $m$: Khối lượng của vật thể ($\text{kg}$).
- $c$: Vận tốc ánh sáng trong chân không ($c \approx 3 \times 10^8\text{ m/s}$ — một hằng số).
- $E$: Năng lượng tương đương ($\text{Joule}$).

Về mặt đại số, $E = mc^2$ chính là một **đơn thức bậc nhất theo biến khối lượng $m$** với hệ số là $c^2 \approx 9 \times 10^{16}$. Chỉ cần $1\text{ gam}$ vật chất bị phân rã hoàn toàn sẽ giải phóng một nguồn năng lượng khổng lồ tương đương sức nổ của $20\,000$ tấn thuốc nổ TNT — nguyên lý vận hành của phản ứng nhiệt hạch trên Mặt Trời!

---

### Chuyên đề 2: Đơn thức Định luật Trọng lực Newton và Quỹ đạo Vệ tinh

Isaac Newton đã phát hiện ra lực hấp dẫn giữa hai thiên thể trong không gian tuân theo đơn thức:
$$F = G \cdot m_1 m_2 \cdot r^{-2}$$
Trong đó $G$ là hằng số hấp dẫn, $m_1, m_2$ là khối lượng các hành tinh và $r$ là khoảng cách. Khi xét hai thiên thể có khối lượng cố định, lực hấp dẫn tỉ lệ nghịch với bình phương khoảng cách. Nhờ đơn thức này, các kỹ sư vũ trụ tính toán chính xác lực hút Trái Đất để phóng kính viễn vọng không gian James Webb bay vào quỹ đạo quanh điểm Lagrange cách Trái Đất $1{,}5$ triệu kilômét.

---

### Chuyên đề 3: Phân tích Thứ nguyên (Dimensional Analysis) trong Kỹ thuật

Trong vật lý và kỹ thuật, các nhà khoa học kiểm tra tính đúng đắn của một công thức bằng phương pháp phân tích thứ nguyên:
- Mọi đại lượng vật lý đều được biểu diễn dưới dạng đơn thức của các thứ nguyên cơ bản: Chiều dài $[L]$, Khối lượng $[M]$ và Thời gian $[T]$.
- Ví dụ: 
  + Vận tốc: $[v] = [L][T]^{-1}$.
  + Gia tốc: $[a] = [L][T]^{-2}$.
  + Lực: $[F] = [M][L][T]^{-2}$.
Nếu hai vế của một phương trình vật lý không có cùng phần biến thứ nguyên thì phương trình đó chắc chắn bị sai!

---

### Chuyên đề 4: Tối ưu Hóa Đa thức Đơn thức (Monomial Geometry) trong Thiết kế Vi mạch

Trong sản xuất chip bán dẫn và vi xử lý (như Apple M3, Intel Core Ultra):
- Diện tích chiếm dụng của một transistor vi mô trên tấm wafer silicon được mô hình hóa bằng đơn thức diện tích: $S = k \cdot w \cdot l$.
- Bằng các thuật toán tối ưu hóa hình học đơn thức (Geometric Programming), các kỹ sư vi mạch nén được hơn $100$ tỷ bóng bán dẫn vào một con chip nhỏ bằng móng tay mà không bị quá nhiệt.

---

### Chuyên đề 5: Khái niệm Đơn thức trong Đại số Trừu tượng Đa biến

Trong toán học cao cấp, một đơn thức đa biến trên trường số thực $\mathbb{R}[x_1, x_2, \dots, x_n]$ được biểu diễn cô đọng bằng ký hiệu đa chỉ số (Multi-index notation):
$$x^\alpha = x_1^{\alpha_1} x_2^{\alpha_2} \dots x_n^{\alpha_n}$$
với bậc $|\alpha| = \alpha_1 + \dots + \alpha_n$. Cấu trúc này là nền tảng để máy tính xử lý chuỗi khai triển Taylor đa biến, cho phép mô phỏng sự biến dạng của cánh máy bay khi bay vượt vận tốc âm thanh.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 1: Đơn thức (Toán 8)",
  "questions": [
    {
      "question": "Biểu thức nào sau đây LÀ một đơn thức?",
      "options": [
        "3x^2 + y",
        "-4x^3 y^2",
        "2x / y",
        "5(x - 1)"
      ],
      "answer": 1,
      "hint": "Đơn thức chỉ gồm tích giữa các số và các biến, không chứa phép cộng trừ hay chia biến.",
      "explanation": "Biểu thức $-4x^3 y^2$ chỉ gồm tích của số $-4$ với các lũy thừa của biến $x, y$ nên là đơn thức. Các biểu thức còn lại chứa phép cộng, trừ hoặc chia biến."
    },
    {
      "question": "Bậc của đơn thức -3x^4 y^2 z là:",
      "options": [
        "6",
        "7",
        "8",
        "4"
      ],
      "answer": 1,
      "hint": "Bậc là tổng số mũ của tất cả các biến: 4 + 2 + 1 (nhớ z = z^1).",
      "explanation": "Đơn thức $-3x^4 y^2 z$ có bậc là tổng các số mũ: $4 + 2 + 1 = 7$."
    },
    {
      "question": "Thu gọn đơn thức M = (-2x^2 y) * (3xy^3) ta được kết quả là:",
      "options": [
        "-6x^3 y^4",
        "-6x^2 y^3",
        "6x^3 y^4",
        "-5x^3 y^4"
      ],
      "answer": 0,
      "hint": "Nhân hệ số: (-2) * 3 = -6; nhân biến: x^2 * x = x^3, y * y^3 = y^4.",
      "explanation": "$M = [(-2) \\cdot 3] \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^3) = -6x^3 y^4$."
    },
    {
      "question": "Cặp đơn thức nào sau đây là hai đơn thức đồng dạng?",
      "options": [
        "2x^2 y và 2xy^2",
        "-3x^3 y^2 và 5x^3 y^2",
        "4xy và 4x^2 y^2",
        "5x^2 và 5y^2"
      ],
      "answer": 1,
      "hint": "Hai đơn thức đồng dạng phải có hệ số khác 0 và có CÙNG phần biến.",
      "explanation": "Hai đơn thức $-3x^3 y^2$ và $5x^3 y^2$ có cùng phần biến là $x^3 y^2$ nên là hai đơn thức đồng dạng."
    },
    {
      "question": "Hệ số và bậc của đơn thức A = -(2/5) x^3 y^5 lần lượt là:",
      "options": [
        "2/5 và 8",
        "-2/5 và 8",
        "-2/5 và 15",
        "2/5 và 15"
      ],
      "answer": 1,
      "hint": "Hệ số gồm cả dấu âm đằng trước. Bậc là tổng số mũ 3 + 5.",
      "explanation": "Hệ số của đơn thức là $-\\frac{2}{5}$, bậc của đơn thức là $3 + 5 = 8$."
    },
    {
      "question": "Kết quả của phép tính 7x^2 y - 3x^2 y + 2x^2 y là:",
      "options": [
        "6x^2 y",
        "6x^6 y^3",
        "12x^2 y",
        "6xy"
      ],
      "answer": 0,
      "hint": "Cộng trừ hệ số, giữ nguyên phần biến: (7 - 3 + 2) x^2 y.",
      "explanation": "$(7 - 3 + 2)x^2 y = 6x^2 y$."
    },
    {
      "question": "Khẳng định nào sau đây là SAI?",
      "options": [
        "Số 0 được gọi là đơn thức không",
        "Số thực khác 0 là đơn thức bậc 0",
        "Hai đơn thức đồng dạng thì có cùng bậc",
        "Hai đơn thức có cùng bậc thì luôn đồng dạng với nhau"
      ],
      "answer": 3,
      "hint": "Ví dụ: 2x^2 và 3y^2 cùng có bậc là 2 nhưng phần biến khác nhau nên không đồng dạng.",
      "explanation": "Khẳng định D sai, vì hai đơn thức có thể cùng bậc nhưng khác phần biến (ví dụ $x^2$ và $y^2$ cùng bậc 2 nhưng không đồng dạng)."
    },
    {
      "question": "Giá trị của đơn thức P = -2x^2 y^3 tại x = -1 và y = 1 bằng:",
      "options": [
        "2",
        "-2",
        "4",
        "-4"
      ],
      "answer": 1,
      "hint": "Thay x = -1 => (-1)^2 = 1. Thay y = 1 => 1^3 = 1.",
      "explanation": "Thay số: $P = -2(-1)^2(1)^3 = -2(1)(1) = -2$."
    },
    {
      "question": "Tìm tổng của ba đơn thức: (1/2)x^3 y, -2x^3 y và (5/2)x^3 y:",
      "options": [
        "x^3 y",
        "2x^3 y",
        "3x^3 y",
        "(7/2)x^3 y"
      ],
      "answer": 0,
      "hint": "Cộng các hệ số: 1/2 + (-2) + 5/2 = (1/2 + 5/2) - 2 = 3 - 2 = 1.",
      "explanation": "Tổng các hệ số: $\\frac{1}{2} - 2 + \\frac{5}{2} = 3 - 2 = 1$. Kết quả là $1x^3 y = x^3 y$."
    },
    {
      "question": "Bậc của đơn thức sau khi thu gọn: B = (2x^2 y)^3 * (-x y^2) là:",
      "options": [
        "8",
        "10",
        "12",
        "14"
      ],
      "answer": 2,
      "hint": "(2x^2 y)^3 = 8 x^6 y^3. Nhân với (-x y^2) = -8 x^7 y^5. Bậc = 7 + 5 = 12.",
      "explanation": "Ta có $(2x^2 y)^3 = 8x^6 y^3$. Khi đó $B = (8x^6 y^3)(-xy^2) = -8x^{6+1}y^{3+2} = -8x^7 y^5$. Bậc của đơn thức là $7 + 5 = 12$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho các biểu thức đại số sau:
$$A = \frac{3}{4}x^2 y^3; \quad B = -2x^2 y \cdot 3y^2; \quad C = 5x^2 - 3y^2; \quad D = -\frac{1}{3}x^2 y^3; \quad E = 0$$
a) Trong các biểu thức trên, biểu thức nào là đơn thức?
b) Thu gọn đơn thức $B$ và tìm bậc của nó.
c) Chỉ ra các đơn thức đồng dạng trong các biểu thức trên và tính tổng của chúng.

### Bài tập 2:
Cho hai đơn thức:
$$P = \left(-\frac{2}{3}x^3 y^2\right) \cdot \left(\frac{3}{4}xy^3\right)$$
$$Q = \left(-2x^2 y\right)^2 \cdot \left(-\frac{1}{8}y^3\right)$$
a) Thu gọn đơn thức $P$ và $Q$.
b) Hai đơn thức $P$ và $Q$ có đồng dạng với nhau không? Vì sao?
c) Tính $P + Q$ và tính giá trị của tổng đó tại $x = 1, y = -1$.

### Bài tập 3 (Toán thực tế):
Một bể chứa nước có dạng hình hộp chữ nhật với chiều dài đáy là $2x\text{ (m)}$, chiều rộng đáy là $y\text{ (m)}$ và chiều cao là $3z\text{ (m)}$.
a) Viết đơn thức $V$ biểu thị thể tích của bể nước đó.
b) Viết đơn thức $S_{xq}$ biểu thị diện tích xung quanh của bể nước đó.
c) Biểu thức diện tích xung quanh $S_{xq}$ có phải là một đơn thức không? Vì sao?
