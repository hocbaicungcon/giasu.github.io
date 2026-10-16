---
title: 'Toán 8 Bài 5: Phép chia đa thức cho đơn thức'
description: 'Làm chủ kỹ thuật chia đơn thức cho đơn thức, chia đa thức cho đơn thức Toán 8 Bài 5: Điều kiện chia hết, quy tắc trừ số mũ, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Phép chia đa thức
  - Chia đơn thức cho đơn thức
  - Chia đa thức cho đơn thức
  - Điều kiện chia hết
  - Kết nối tri thức
grade: 8
---

# Bài 5. Phép chia đa thức cho đơn thức

Nếu phép nhân (Bài 4) giúp chúng ta tính diện tích của một hình chữ nhật khi biết chiều dài và chiều rộng ($S = a \cdot b$), thì trong thực tế chúng ta lại thường xuyên gặp bài toán ngược: *"Biết diện tích một mảnh đất và biết chiều rộng, làm thế nào để tìm ra chiều dài của mảnh đất đó?"*. Câu trả lời chính là phép chia đại số: $a = S : b$.

Phép chia đa thức là phép toán cuối cùng khép lại Chương 1 — mạch kiến thức về 4 phép tính đại số nhiều biến. Khác với phép cộng, trừ và nhân luôn luôn thực hiện được trong tập hợp đa thức, **phép chia đại số đòi hỏi điều kiện chia hết khắt khe** về số mũ của từng biến.

Bài 5 sẽ trang bị cho các em:
1. Quy tắc chia hai lũy thừa cùng cơ số và chia đơn thức cho đơn thức: $(x^m : x^n = x^{m - n})$.
2. Điều kiện để đơn thức $A$ chia hết cho đơn thức $B$.
3. Quy tắc chia đa thức cho đơn thức: Chia từng hạng tử rồi cộng kết quả lại.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 5: PHÉP CHIA ĐA THỨC CHO ĐƠN THỨC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Chia Đơn thức cho Đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Lấy hệ số chia cho hệ số.<br>• Lấy lũy thừa của từng biến chia cho lũy thừa của cùng biến đó:<br>  $$x^m : x^n = x^{m - n} \quad (m \ge n)$$<br>• Nhân các kết quả tìm được với nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Điều kiện Chia hết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Đơn thức $A$ chia hết cho đơn thức $B$ khi:<br>• Mọi biến của $B$ đều là biến của $A$.<br>• Số mũ của mỗi biến trong $B$ <strong>không lớn hơn</strong> số mũ của biến đó trong $A$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Chia Đa thức cho Đơn thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đa thức $A$ chia hết cho đơn thức $B$ khi <strong>mọi hạng tử của $A$ đều chia hết cho $B$</strong>.<br>• Quy tắc chia:<br>  $$(A_1 + A_2 - A_3) : B = (A_1 : B) + (A_2 : B) - (A_3 : B)$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quy ước Số mũ 0</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với mọi $x \neq 0$: $x^0 = 1$.<br>• Khi $m = n$: $x^m : x^m = x^0 = 1$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Quy tắc trừ số mũ:** Kết quả của phép chia $x^5 : x^2$ bằng bao nhiêu?
2. **Chia cùng số mũ:** Kết quả của $y^3 : y^3$ bằng bao nhiêu ($y \neq 0$)?
3. **Chia hệ số:** Kết quả của $(-18) : 6$ bằng bao nhiêu?
4. **Kiểm tra chia hết:** Đơn thức $x^2 y$ có chia hết cho đơn thức $x^3$ không? Vì sao?
5. **Chia phân phối:** Phép tính $(20 + 8) : 4$ được tính bằng cách lấy từng số chia cho $4$ như thế nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $x^{5 - 2} = x^3$.
> 2. $y^{3 - 3} = y^0 = 1$.
> 3. $-3$.
> 4. Không chia hết, vì số mũ của biến $x$ trong số chia ($3$) lớn hơn số mũ của biến $x$ trong số bị chia ($2$).
> 5. $(20 : 4) + (8 : 4) = 5 + 2 = 7$.

---

## I. Lý thuyết Trọng tâm

### 1. Phép chia đơn thức cho đơn thức

#### a) Quy tắc chia hai lũy thừa cùng cơ số
Với số thực $x \neq 0$ và hai số tự nhiên $m, n$ ($m \ge n$):
$$x^m : x^n = x^{m - n}$$
- Nếu $m > n$: $x^m : x^n = x^{m - n}$.
- Nếu $m = n$: $x^m : x^m = 1$ (quy ước $x^0 = 1$).

#### b) Quy tắc chia đơn thức cho đơn thức

> [!IMPORTANT]
> **QUY TẮC CHIA ĐƠN THỨC:**
> Muốn chia đơn thức $A$ cho đơn thức $B$ (trong trường hợp $A$ chia hết cho $B$), ta thực hiện:
> 1. **Chia hệ số** của đơn thức $A$ cho hệ số của đơn thức $B$.
> 2. **Chia lũy thừa của từng biến** trong $A$ cho lũy thừa của cùng biến đó trong $B$.
> 3. **Nhân các kết quả** tìm được với nhau.

*Ví dụ:* Thực hiện phép chia đơn thức $15x^4 y^3 z^2$ cho đơn thức $5x^2 y^3$:
$$\begin{aligned}
(15x^4 y^3 z^2) : (5x^2 y^3) &= (15 : 5) \cdot (x^4 : x^2) \cdot (y^3 : y^3) \cdot z^2 \\
&= 3 \cdot x^{4-2} \cdot 1 \cdot z^2 = 3x^2 z^2
\end{aligned}$$

---

### 2. Điều kiện để đơn thức A chia hết cho đơn thức B

> [!IMPORTANT]
> **ĐIỀU KIỆN CHIA HẾT CỦA HAI ĐƠN THỨC:**
> Đơn thức $A$ chia hết cho đơn thức $B$ khi và chỉ khi thỏa mãn đồng thời hai điều kiện:
> 1. Mọi biến có mặt trong đơn thức $B$ đều phải **có mặt trong đơn thức $A$**.
> 2. Số mũ của mỗi biến trong đơn thức $B$ phải **nhỏ hơn hoặc bằng** số mũ của biến đó trong đơn thức $A$.

*Ví dụ:*
- $A = 6x^3 y^2$ chia hết cho $B = 2xy^2$ (vì $x$ có số mũ $3 \ge 1$, $y$ có số mũ $2 \ge 2$).
- $A = 4x^2 y$ **KHÔNG chia hết** cho $B = 3xy^2$ (vì số mũ của $y$ trong $B$ là 2, lớn hơn số mũ 1 trong $A$).
- $A = 5x^3$ **KHÔNG chia hết** cho $B = 2x^2 y$ (vì trong $B$ có biến $y$ nhưng trong $A$ không có biến $y$).

---

### 3. Phép chia đa thức cho đơn thức

> [!IMPORTANT]
> **QUY TẮC CHIA ĐA THỨC CHO ĐƠN THỨC:**
> - Đa thức $A$ chia hết cho đơn thức $B$ nếu **mọi hạng tử của $A$ đều chia hết cho $B$**.
> - Muốn chia đa thức $A$ cho đơn thức $B$, ta **chia từng hạng tử của $A$ cho $B$**, rồi **cộng các kết quả tìm được với nhau**:
> 
> $$(A_1 + A_2 - A_3) : B = (A_1 : B) + (A_2 : B) - (A_3 : B)$$

*Ví dụ:* Thực hiện phép chia đa thức:
$$(12x^4 y^2 - 9x^3 y^3 + 6x^2 y^2) : (3x^2 y^2)$$
$$\begin{aligned}
&= (12x^4 y^2 : 3x^2 y^2) - (9x^3 y^3 : 3x^2 y^2) + (6x^2 y^2 : 3x^2 y^2) \\
&= 4x^2 - 3xy + 2
\end{aligned}$$

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Chia đơn thức cho đơn thức

**Phương pháp giải:**
Tách phép chia thành tích các phép chia số và từng biến tương ứng.

---

#### Bài toán 1:
Thực hiện các phép chia đơn thức sau:
a) $(-24x^5 y^3) : (8x^2 y)$
b) $\left(\frac{3}{5}x^4 y^2 z^3\right) : \left(-\frac{2}{5}x^2 y^2 z\right)$
c) $(-2x^2 y)^3 : (4xy^2)$

**Lời giải:**

a) Ta có:
$$(-24x^5 y^3) : (8x^2 y) = [(-24) : 8] \cdot (x^5 : x^2) \cdot (y^3 : y) = -3x^3 y^2$$

b) Ta có:
$$\left(\frac{3}{5}x^4 y^2 z^3\right) : \left(-\frac{2}{5}x^2 y^2 z\right) = \left[\frac{3}{5} : \left(-\frac{2}{5}\right)\right] \cdot (x^4 : x^2) \cdot (y^2 : y^2) \cdot (z^3 : z)$$
$$= \left(\frac{3}{5} \cdot -\frac{5}{2}\right) \cdot x^2 \cdot 1 \cdot z^2 = -\frac{3}{2}x^2 z^2$$

c) Lũy thừa trước khi chia:
$$(-2x^2 y)^3 = (-2)^3 \cdot (x^2)^3 \cdot y^3 = -8x^6 y^3$$
Do đó:
$$(-8x^6 y^3) : (4xy^2) = [(-8) : 4] \cdot (x^6 : x) \cdot (y^3 : y^2) = -2x^5 y$$

---

### Dạng 2: Chia đa thức cho đơn thức

**Phương pháp giải:**
Chia từng hạng tử của đa thức cho đơn thức rồi cộng các kết quả. Cẩn thận dấu của các hạng tử.

---

#### Bài toán 2:
Thực hiện các phép tính sau:
a) $(15x^3 y^2 - 20x^2 y^3 + 25x^4 y) : (5x^2 y)$
b) $(4x^4 y^3 - 6x^3 y^2 + 8x^2 y^4) : (-2x^2 y^2)$
c) $\left(\frac{2}{3}x^3 y^4 - 2x^2 y^3 + \frac{4}{5}x^4 y^2\right) : \left(\frac{2}{3}x^2 y^2\right)$

**Lời giải:**

a) Ta có:
$$(15x^3 y^2 - 20x^2 y^3 + 25x^4 y) : (5x^2 y)$$
$$= (15x^3 y^2 : 5x^2 y) - (20x^2 y^3 : 5x^2 y) + (25x^4 y : 5x^2 y)$$
$$= 3xy - 4y^2 + 5x^2$$

b) Ta có:
$$(4x^4 y^3 - 6x^3 y^2 + 8x^2 y^4) : (-2x^2 y^2)$$
$$= [4x^4 y^3 : (-2x^2 y^2)] - [6x^3 y^2 : (-2x^2 y^2)] + [8x^2 y^4 : (-2x^2 y^2)]$$
$$= -2x^2 y - (-3x) + (-4y^2) = -2x^2 y + 3x - 4y^2$$

c) Ta có:
$$\left(\frac{2}{3}x^3 y^4 - 2x^2 y^3 + \frac{4}{5}x^4 y^2\right) : \left(\frac{2}{3}x^2 y^2\right)$$
$$= \left(\frac{2}{3}x^3 y^4 : \frac{2}{3}x^2 y^2\right) - \left(2x^2 y^3 : \frac{2}{3}x^2 y^2\right) + \left(\frac{4}{5}x^4 y^2 : \frac{2}{3}x^2 y^2\right)$$
$$= xy^2 - \left(2 \cdot \frac{3}{2}\right)y + \left(\frac{4}{5} \cdot \frac{3}{2}\right)x^2$$
$$= xy^2 - 3y + \frac{6}{5}x^2$$

---

### Dạng 3: Tìm điều kiện của số mũ để phép chia là phép chia hết

**Phương pháp giải:**
Đơn thức $A$ chia hết cho đơn thức $B$ khi số mũ của mỗi biến trong $A$ lớn hơn hoặc bằng số mũ của biến đó trong $B$:
$$m_A \ge m_B$$

---

#### Bài toán 3:
Tìm số tự nhiên $n$ để:
a) Đơn thức $A = 5x^n y^3$ chia hết cho đơn thức $B = 2x^2 y^n$.
b) Đa thức $P = 4x^5 y^n - 3x^n y^4$ chia hết cho đơn thức $Q = 2x^3 y^2$.

**Lời giải:**

a) Để đơn thức $A = 5x^n y^3$ chia hết cho $B = 2x^2 y^n$, ta cần đồng thời hai điều kiện:
- Số mũ của biến $x$ trong $A$ phải $\ge$ số mũ của $x$ trong $B$: $n \ge 2$.
- Số mũ của biến $y$ trong $A$ phải $\ge$ số mũ của $y$ trong $B$: $3 \ge n \iff n \le 3$.
Kết hợp lại ta có:
$$2 \le n \le 3$$
Vì $n \in \mathbb{N}$ nên $n \in \{2; 3\}$.

b) Để đa thức $P$ chia hết cho đơn thức $Q$, mọi hạng tử của $P$ đều phải chia hết cho $Q$:
- Hạng tử thứ nhất $4x^5 y^n$ chia hết cho $2x^3 y^2$:
  Số mũ của $x$: $5 \ge 3$ (luôn thỏa mãn).
  Số mũ của $y$: $n \ge 2$.
- Hạng tử thứ hai $3x^n y^4$ chia hết cho $2x^3 y^2$:
  Số mũ của $x$: $n \ge 3$.
  Số mũ của $y$: $4 \ge 2$ (luôn thỏa mãn).
Để cả hai hạng tử đều chia hết cho $Q$, ta cần đồng thời:
$$\begin{cases} n \ge 2 \\ n \ge 3 \end{cases} \implies n \ge 3$$
Vậy với mọi số tự nhiên $n \ge 3$ thì đa thức $P$ chia hết cho đơn thức $Q$.

---

### Dạng 4: Rút gọn biểu thức và bài toán hình học thực tế

**Phương pháp giải:**
Kết hợp các phép toán cộng, trừ, nhân, chia đa thức để rút gọn biểu thức hoặc giải bài toán tìm kích thước hình học: $\text{Chiều dài} = \text{Diện tích} : \text{Chiều rộng}$.

---

#### Bài toán 4:
a) Rút gọn biểu thức:
$$M = (18x^4 y^3 - 24x^3 y^4) : (6x^2 y^2) - (2x - 3y)(x + y)$$
b) Một mảnh đất hình chữ nhật có diện tích được biểu thị bởi đa thức:
$$S = 6x^3 y^2 + 9x^2 y^3 - 3x^2 y^2\text{ (m}^2\text{)}$$
Biết chiều rộng của mảnh đất là một đơn thức: $W = 3x^2 y^2\text{ (m)}$.
Hãy tìm biểu thức biểu thị chiều dài của mảnh đất đó. Tính chiều dài khi $x = 4\text{ m}$ và $y = 2\text{ m}$.

**Lời giải:**

a) Thực hiện phép chia trước:
$$(18x^4 y^3 - 24x^3 y^4) : (6x^2 y^2) = 3x^2 y - 4xy^2$$
Thực hiện phép nhân đa thức:
$$(2x - 3y)(x + y) = 2x^2 + 2xy - 3xy - 3y^2 = 2x^2 - xy - 3y^2$$
Thay vào biểu thức $M$:
$$\begin{aligned}
M &= (3x^2 y - 4xy^2) - (2x^2 - xy - 3y^2) \\
&= 3x^2 y - 4xy^2 - 2x^2 + xy + 3y^2
\end{aligned}$$

b) Chiều dài của mảnh đất hình chữ nhật là:
$$L = S : W = (6x^3 y^2 + 9x^2 y^3 - 3x^2 y^2) : (3x^2 y^2)$$
$$L = (6x^3 y^2 : 3x^2 y^2) + (9x^2 y^3 : 3x^2 y^2) - (3x^2 y^2 : 3x^2 y^2)$$
$$L = 2x + 3y - 1\text{ (m)}$$
Khi $x = 4\text{ m}$ và $y = 2\text{ m}$, chiều dài mảnh đất là:
$$L = 2(4) + 3(2) - 1 = 8 + 6 - 1 = 13\text{ (m)}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Phép Chia Đa thức và Tỉ số Nén Dữ liệu Video MP4 / H.264

Khi bạn xem video trực tuyến trên YouTube hay TikTok ở độ phân giải 1080p:
- Một giây video thô không nén chiếm dung lượng khổng lồ tới $150\text{ MB}$.
- Bộ mã hóa video H.264 / AV1 chia khung hình thành các khối pixel đa biến và thực hiện phép biến đổi Cosine rời rạc (DCT) kết hợp với phép chia lượng tử hóa (Quantization Division):
  $$Q(u, v) = \text{round}\left(\frac{F(u, v)}{q(u, v)}\right)$$
Phép chia đa thức ma trận này loại bỏ các tần số mắt người không phân biệt được, nén kích thước tệp video xuống hơn $95\%$ mà hình ảnh vẫn giữ nguyên độ sắc nét!

---

### Chuyên đề 2: Tính Toán Tỷ lệ Hiệu suất Năng lượng (PUE) của Trung tâm Dữ liệu AI

Các trung tâm dữ liệu khổng lồ của Google, Microsoft chứa hàng trăm ngàn máy chủ AI tiêu thụ lượng điện năng tương đương một thành phố:
- Hiệu quả sử dụng năng lượng được đo bằng chỉ số PUE (Power Usage Effectiveness):
  $$\text{PUE} = \frac{\text{Tổng năng lượng toàn bộ cơ sở}}{\text{Năng lượng thực tế cho thiết bị IT}} = \frac{P_{\text{IT}} + P_{\text{làm mát}} + P_{\text{hao phí}}}{P_{\text{IT}}}$$
Về mặt đại số, đây là phép chia một đa thức cho đơn thức:
$$\text{PUE} = 1 + \frac{P_{\text{làm mát}}}{P_{\text{IT}}} + \frac{P_{\text{hao phí}}}{P_{\text{IT}}}$$
Bằng cách tối ưu hóa các đơn thức hao phí này tiệm cận về $0$, Google đưa chỉ số PUE xuống mức kỷ lục $1{,}1$, tiết kiệm hàng tỷ kilowatt giờ điện năng mỗi năm.

---

### Chuyên đề 3: Phép Chia Đa thức trong Mã CRC (Cyclic Redundancy Check)

Mỗi khi máy tính tải một tệp file từ internet hoặc đọc thẻ nhớ USB:
- Làm thế nào hệ thống phát hiện tệp có bị lỗi đường truyền hay không?
- Thuật toán CRC coi toàn bộ luồng dữ liệu nhị phân là một đa thức bậc cao $M(x)$ và thực hiện **phép chia đa thức cho một đa thức sinh $G(x)$** trên trường nhị phân.
- Phần dư của phép chia chính là mã kiểm tra CRC được đính kèm ở đuôi tệp. Nếu khi nhận, phép chia cho số dư bằng $0 \implies$ Tệp hoàn toàn nguyên vẹn $100\%$!

---

### Chuyên đề 4: Phân Rã Phân Thức Hữu Tỉ (Partial Fraction Decomposition) trong Tích phân

Trong toán học giải tích đại học, để tính tích phân của các hàm phân thức phức tạp $\frac{P(x)}{Q(x)}$:
- Bước đầu tiên bắt buộc luôn là: **Thực hiện phép chia đa thức tử cho mẫu** nếu bậc của tử lớn hơn hoặc bằng bậc của mẫu:
  $$\frac{P(x)}{Q(x)} = M(x) + \frac{R(x)}{Q(x)}$$
Tách đa thức nguyên $M(x)$ ra khỏi phần dư $R(x)$ giúp các nhà khoa học giải quyết trọn vẹn các phương trình vi phân mô tả chuyển động của vệ tinh định vị quỹ đạo Trái Đất.

---

### Chuyên đề 5: Khái niệm Ideal và Đại số Giao hoán (Commutative Algebra)

Trong đại số trừu tượng cao cấp, tính chia hết của đa thức mở rộng thành khái niệm **Ideal (I-đê-an)** do nhà toán học Đức Richard Dedekind phát minh:
- Tập hợp tất cả các đa thức chia hết cho một đa thức $B$ tạo thành một Ideal chính $(B)$.
- Định lý cơ sở Hilbert (Hilbert's Basis Theorem) khẳng định mọi Ideal trong vành đa thức đều hữu hạn sinh — chiếc chìa khóa khai phá toàn bộ nền móng của Hình học Đại số và Robot học hiện đại.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 5: Phép chia đa thức cho đơn thức (Toán 8)",
  "questions": [
    {
      "question": "Kết quả của phép chia đơn thức 12x^4 y^3 : (-4x^2 y) là:",
      "options": [
        "-3x^2 y^2",
        "3x^2 y^2",
        "-3x^2 y",
        "-3x^6 y^4"
      ],
      "answer": 0,
      "hint": "[12 : (-4)] * x^(4-2) * y^(3-1).",
      "explanation": "$12x^4 y^3 : (-4x^2 y) = [12 : (-4)] \\cdot x^{4-2} \\cdot y^{3-1} = -3x^2 y^2$."
    },
    {
      "question": "Đơn thức 8x^3 y^2 z chia hết cho đơn thức nào sau đây?",
      "options": [
        "2x^4 y",
        "4x^2 y^3",
        "3xy^2 z",
        "5x^2 y z^2"
      ],
      "answer": 2,
      "hint": "Số mũ của từng biến trong số chia phải nhỏ hơn hoặc bằng số mũ trong số bị chia.",
      "explanation": "Trong đơn thức $3xy^2 z$: số mũ của $x$ là $1 \\le 3$, $y$ là $2 \\le 2$, $z$ là $1 \\le 1$. Do đó $8x^3 y^2 z$ chia hết cho $3xy^2 z$."
    },
    {
      "question": "Kết quả của phép tính (6x^3 y^2 - 9x^2 y^3) : (3x^2 y^2) là:",
      "options": [
        "2x - 3y",
        "2x + 3y",
        "2x^2 - 3y^2",
        "3x - 2y"
      ],
      "answer": 0,
      "hint": "(6x^3 y^2 : 3x^2 y^2) - (9x^2 y^3 : 3x^2 y^2) = 2x - 3y.",
      "explanation": "Chia từng hạng tử: $(6x^3 y^2 : 3x^2 y^2) - (9x^2 y^3 : 3x^2 y^2) = 2x - 3y$."
    },
    {
      "question": "Tìm số tự nhiên n để đơn thức A = 4x^n y^4 chia hết cho đơn thức B = 2x^3 y^n:",
      "options": [
        "n = 3",
        "n = 4",
        "n thuộc {3; 4}",
        "n >= 4"
      ],
      "answer": 2,
      "hint": "Cần n >= 3 và 4 >= n => 3 <= n <= 4.",
      "explanation": "Điều kiện chia hết: $n \\ge 3$ và $4 \\ge n \\implies 3 \\le n \\le 4$. Vì $n \\in \\mathbb{N}$ nên $n \\in \\{3; 4\\}$."
    },
    {
      "question": "Kết quả của phép chia (2x^4 - 4x^3 + 6x^2) : (2x^2) là:",
      "options": [
        "x^2 - 2x + 3",
        "x^2 - 4x + 3",
        "2x^2 - 2x + 3",
        "x^2 - 2x"
      ],
      "answer": 0,
      "hint": "(2x^4 : 2x^2) - (4x^3 : 2x^2) + (6x^2 : 2x^2) = x^2 - 2x + 3.",
      "explanation": "Chia từng hạng tử cho $2x^2$: $x^2 - 2x + 3$."
    },
    {
      "question": "Đa thức 5x^3 y^2 - 3x^2 y + xy KHÔNG chia hết cho đơn thức nào sau đây?",
      "options": [
        "xy",
        "-xy",
        "(1/2)xy",
        "x^2 y"
      ],
      "answer": 3,
      "hint": "Hạng tử cuối cùng là xy có số mũ của x bằng 1, nhỏ hơn x^2.",
      "explanation": "Hạng tử $xy$ không chia hết cho $x^2 y$ (vì số mũ của $x$ là $1 < 2$). Do đó đa thức không chia hết cho $x^2 y$."
    },
    {
      "question": "Giá trị của biểu thức P = (8x^3 y^2 - 4x^2 y^3) : (4x^2 y^2) tại x = 5 và y = 3 bằng:",
      "options": [
        "7",
        "10",
        "1",
        "-1"
      ],
      "answer": 0,
      "hint": "Rút gọn trước: P = 2x - y. Thay x = 5, y = 3 => 2(5) - 3 = 10 - 3 = 7.",
      "explanation": "Rút gọn: $P = 2x - y$. Thay $x = 5, y = 3$: $P = 2(5) - 3 = 10 - 3 = 7$."
    },
    {
      "question": "Một hình chữ nhật có diện tích S = 12x^2 y + 8xy^2 (cm^2) và chiều rộng w = 4xy (cm). Chiều dài của hình chữ nhật là:",
      "options": [
        "3x + 2y (cm)",
        "3x - 2y (cm)",
        "2x + 3y (cm)",
        "3x + 2 (cm)"
      ],
      "answer": 0,
      "hint": "Chiều dài = S : w = (12x^2 y + 8xy^2) : 4xy.",
      "explanation": "Chiều dài là: $(12x^2 y + 8xy^2) : (4xy) = 3x + 2y\\text{ (cm)}$."
    },
    {
      "question": "Biểu thức (-x)^5 : (-x)^2 bằng:",
      "options": [
        "-x^3",
        "x^3",
        "-x^7",
        "x^7"
      ],
      "answer": 0,
      "hint": "(-x)^(5 - 2) = (-x)^3 = -x^3.",
      "explanation": "$(-x)^5 : (-x)^2 = (-x)^{5-2} = (-x)^3 = -x^3$."
    },
    {
      "question": "Rút gọn biểu thức A = (15x^3 y^2 - 10x^2 y) : (5x^2 y) - 3xy ta được:",
      "options": [
        "-2",
        "2",
        "6xy - 2",
        "0"
      ],
      "answer": 0,
      "hint": "Chia: 3xy - 2. Sau đó lấy: (3xy - 2) - 3xy = -2.",
      "explanation": "$(15x^3 y^2 - 10x^2 y) : (5x^2 y) = 3xy - 2$. Biểu thức $A = 3xy - 2 - 3xy = -2$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Thực hiện các phép chia sau:
a) $(-15x^4 y^3 z^2) : (3x^2 y^2 z)$
b) $(12x^5 y^2 - 18x^3 y^3 + 6x^2 y^4) : (-6x^2 y^2)$
c) $\left(\frac{3}{4}x^4 y^3 - \frac{1}{2}x^3 y^4 + x^2 y^2\right) : \left(\frac{1}{4}x^2 y^2\right)$

### Bài tập 2:
Tìm số tự nhiên $n$ để:
a) Đơn thức $A = 7x^4 y^n$ chia hết cho đơn thức $B = 3x^n y^2$.
b) Đa thức $M = 5x^8 y^5 - 2x^n y^4 + 3x^6 y^n$ chia hết cho đơn thức $N = 2x^4 y^3$.

### Bài tập 3 (Toán thực tế):
Một hình hộp chữ nhật có thể tích được biểu thị bởi đa thức:
$$V = 16x^4 y^3 + 24x^3 y^4 - 8x^2 y^2\text{ (cm}^3\text{)}$$
Biết diện tích mặt đáy của hình hộp là một đơn thức:
$$S_{\text{đáy}} = 4x^2 y^2\text{ (cm}^2\text{)}$$
a) Hãy tìm biểu thức biểu thị chiều cao $h$ của hình hộp chữ nhật đó.
b) Tính chiều cao $h$ khi biết $x = 2\text{ cm}$ và $y = 1\text{ cm}$.
