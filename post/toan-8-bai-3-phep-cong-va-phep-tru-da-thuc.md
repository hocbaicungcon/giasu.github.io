---
title: 'Toán 8 Bài 3: Phép cộng và phép trừ đa thức'
description: 'Làm chủ kỹ thuật cộng trừ đa thức nhiều biến Toán 8 Bài 3: Quy tắc phá ngoặc, nhóm hạng tử đồng dạng, tìm đa thức chưa biết, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Phép cộng đa thức
  - Phép trừ đa thức
  - Đa thức nhiều biến
  - Quy tắc đổi dấu
  - Kết nối tri thức
grade: 8
---

# Bài 3. Phép cộng và phép trừ đa thức

Trong kỹ thuật chế tạo robot và đồ họa máy tính, khi hai hình khối 3D chuyển động giao nhau hoặc va chạm, máy tính thực hiện hàng triệu phép toán cộng và trừ các đa thức đại số biểu thị tọa độ không gian mỗi giây. 

Sau khi đã nắm vững khái niệm đơn thức (Bài 1) và đa thức (Bài 2), bài học này sẽ trang bị cho các em hai công cụ thao tác đại số nền tảng: **Phép cộng và phép trừ đa thức**.

Làm thế nào để cộng hai đa thức nhiều biến mà không bị nhầm lẫn dấu? Quy tắc phá ngoặc có dấu trừ đằng trước đòi hỏi kỹ năng cẩn trọng ra sao? Làm thế nào để tìm một đa thức chưa biết trong một đẳng thức phức tạp? Hãy cùng bước vào Bài 3 để làm chủ các kỹ thuật giải toán sắc bén nhất!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 3: CỘNG & TRỪ ĐA THỨC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quy trình Cộng hai đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bước 1:</strong> Đặt phép tính trong ngoặc: $A + B = (A) + (B)$.<br>• <strong>Bước 2:</strong> Bỏ dấu ngoặc (giữ nguyên dấu các hạng tử).<br>• <strong>Bước 3:</strong> Nhóm các hạng tử đồng dạng và cộng hệ số.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">2. Quy tắc Trừ hai đa thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bước 1:</strong> Đặt phép tính trong ngoặc: $A - B = (A) - (B)$.<br>• <strong>Bước 2 (Sống còn):</strong> Bỏ ngoặc và <strong>đổi dấu toàn bộ</strong> các hạng tử của đa thức $B$: $+ \to -$ và $- \to +$.<br>• <strong>Bước 3:</strong> Nhóm các đơn thức đồng dạng và thu gọn.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">3. Tìm đa thức chưa biết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $X + A = B \implies X = B - A$.<br>• $X - A = B \implies X = B + A$.<br>• $A - X = B \implies X = A - B$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bậc của Tổng và Hiệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bậc của đa thức tổng $A + B$ và hiệu $A - B$ luôn <strong>nhỏ hơn hoặc bằng</strong> bậc cao nhất của $A$ và $B$:<br>  $$\text{bậc}(A \pm B) \le \max(\text{bậc } A, \text{bậc } B)$$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phá ngoặc có dấu trừ:** Phá ngoặc biểu thức $-(2x^2 - 3xy + 5y^2)$ ta được kết quả là gì?
2. **Cộng đơn thức đồng dạng:** Tính: $3x^2 y + (-5x^2 y) = ?$
3. **Trừ đơn thức đồng dạng:** Tính: $4xy^2 - (-2xy^2) = ?$
4. **Quy tắc chuyển vế:** Tìm $x$ trong phương trình số học: $x + 15 = 40 \implies x = ?$
5. **Số đối của đa thức:** Đa thức đối của đa thức $P = x^2 - 4x + 3$ là đa thức nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Đổi dấu toàn bộ: $-2x^2 + 3xy - 5y^2$.
> 2. $(3 - 5)x^2 y = -2x^2 y$.
> 3. $4xy^2 + 2xy^2 = 6xy^2$ (trừ của trừ thành cộng).
> 4. $x = 40 - 15 = 25$.
> 5. $-P = -(x^2 - 4x + 3) = -x^2 + 4x - 3$.

---

## I. Lý thuyết Trọng tâm

### 1. Phép cộng hai đa thức

Để cộng hai đa thức $A$ và $B$, ta thực hiện theo 3 bước chuẩn:
- **Bước 1:** Viết tổng hai đa thức với dấu ngoặc: $(A) + (B)$.
- **Bước 2:** Bỏ dấu ngoặc (vì trước ngoặc là dấu cộng nên giữ nguyên toàn bộ dấu của các hạng tử bên trong).
- **Bước 3:** Nhóm các hạng tử đồng dạng bằng dấu ngoặc và cộng các hệ số của chúng lại với nhau để thu gọn.

*Ví dụ:* Cho hai đa thức:
$$A = 5x^2 y + 3xy^2 - 2xy + 1$$
$$B = -2x^2 y + xy^2 + 4xy - 5$$
Tính $A + B$:
$$\begin{aligned}
A + B &= (5x^2 y + 3xy^2 - 2xy + 1) + (-2x^2 y + xy^2 + 4xy - 5) \\
&= 5x^2 y + 3xy^2 - 2xy + 1 - 2x^2 y + xy^2 + 4xy - 5 \\
&= (5x^2 y - 2x^2 y) + (3xy^2 + xy^2) + (-2xy + 4xy) + (1 - 5) \\
&= 3x^2 y + 4xy^2 + 2xy - 4
\end{aligned}$$

---

### 2. Phép trừ hai đa thức

> [!IMPORTANT]
> **QUY TẮC PHÉP TRỪ ĐA THỨC:**
> Muốn trừ đa thức $A$ cho đa thức $B$, ta lấy đa thức $A$ cộng với **đa thức đối của đa thức $B$**:
> $$A - B = A + (-B)$$
> 
> *Quy tắc bỏ dấu ngoặc khi trừ:*
> Khi bỏ dấu ngoặc có dấu trừ đằng trước, ta phải **đổi dấu toàn bộ các hạng tử** trong ngoặc:
> - Dấu cộng ($+$) đổi thành dấu trừ ($-$).
> - Dấu trừ ($-$) đổi thành dấu cộng ($+$).

*Ví dụ:* Lấy lại hai đa thức $A$ và $B$ ở trên, tính $A - B$:
$$\begin{aligned}
A - B &= (5x^2 y + 3xy^2 - 2xy + 1) - (-2x^2 y + xy^2 + 4xy - 5) \\
&= 5x^2 y + 3xy^2 - 2xy + 1 + 2x^2 y - xy^2 - 4xy + 5 \\
&= (5x^2 y + 2x^2 y) + (3xy^2 - xy^2) + (-2xy - 4xy) + (1 + 5) \\
&= 7x^2 y + 2xy^2 - 6xy + 6
\end{aligned}$$

---

### 3. Tính chất của phép cộng đa thức

Tương tự như phép cộng các số thực, phép cộng đa thức cũng có các tính chất đại số cơ bản:
- **Tính chất giao hoán:** $A + B = B + A$.
- **Tính chất kết hợp:** $(A + B) + C = A + (B + C)$.
- **Cộng với đa thức không:** $A + 0 = 0 + A = A$.
- **Cộng với đa thức đối:** $A + (-A) = 0$.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Thực hiện phép cộng và trừ hai đa thức

**Phương pháp giải:**
1. Đặt các đa thức vào trong từng dấu ngoặc tròn.
2. Áp dụng quy tắc bỏ dấu ngoặc (chú ý đổi dấu khi trừ).
3. Nhóm các đơn thức đồng dạng vào ngoặc, giữa các ngoặc luôn đặt dấu cộng ($+$) để tránh sai sót về dấu:
   $$\dots + (\text{nhóm 1}) + (\text{nhóm 2}) + \dots$$

---

#### Bài toán 1:
Cho hai đa thức:
$$P = 3x^3 - 2x^2 y + 4xy^2 - y^3 + 5$$
$$Q = -x^3 + 2x^2 y - 3xy^2 + 2y^3 - 7$$
a) Tính $M = P + Q$.
b) Tính $N = P - Q$.
c) Tìm bậc của đa thức tổng $M$ và đa thức hiệu $N$.

**Lời giải:**

a) Tính tổng $M = P + Q$:
$$M = (3x^3 - 2x^2 y + 4xy^2 - y^3 + 5) + (-x^3 + 2x^2 y - 3xy^2 + 2y^3 - 7)$$
$$M = [3x^3 + (-x^3)] + (-2x^2 y + 2x^2 y) + (4xy^2 - 3xy^2) + (-y^3 + 2y^3) + (5 - 7)$$
$$M = 2x^3 + 0 + xy^2 + y^3 - 2 = 2x^3 + xy^2 + y^3 - 2$$

b) Tính hiệu $N = P - Q$:
$$N = (3x^3 - 2x^2 y + 4xy^2 - y^3 + 5) - (-x^3 + 2x^2 y - 3xy^2 + 2y^3 - 7)$$
Đổi dấu toàn bộ các hạng tử của $Q$:
$$N = 3x^3 - 2x^2 y + 4xy^2 - y^3 + 5 + x^3 - 2x^2 y + 3xy^2 - 2y^3 + 7$$
Nhóm các hạng tử đồng dạng:
$$N = (3x^3 + x^3) + (-2x^2 y - 2x^2 y) + (4xy^2 + 3xy^2) + (-y^3 - 2y^3) + (5 + 7)$$
$$N = 4x^3 - 4x^2 y + 7xy^2 - 3y^3 + 12$$

c) Tìm bậc:
- Trong đa thức $M = 2x^3 + xy^2 + y^3 - 2$:
  Các hạng tử $2x^3, xy^2, y^3$ đều có bậc là $3$ $\implies$ **Bậc của $M$ là $3$**.
- Trong đa thức $N = 4x^3 - 4x^2 y + 7xy^2 - 3y^3 + 12$:
  Các hạng tử bậc cao nhất có bậc là $3$ $\implies$ **Bậc của $N$ là $3$**.

---

### Dạng 2: Tìm đa thức chưa biết trong một đẳng thức

**Phương pháp giải:**
Xem đa thức cần tìm như một số chưa biết và áp dụng quy tắc chuyển vế:
- Nếu $X + A = B \implies X = B - A$.
- Nếu $X - A = B \implies X = B + A$.
- Nếu $A - X = B \implies X = A - B$.

---

#### Bài toán 2:
Cho hai đa thức $A = 2x^2 - 3xy + y^2$ và $B = x^2 + 2xy - 3y^2$.
Tìm đa thức $C$ sao cho:
a) $C + A = B$
b) $A - C = B$
c) $C - 2A = B$

**Lời giải:**

a) Ta có:
$$C + A = B \implies C = B - A$$
Thay biểu thức của $B$ và $A$:
$$\begin{aligned}
C &= (x^2 + 2xy - 3y^2) - (2x^2 - 3xy + y^2) \\
&= x^2 + 2xy - 3y^2 - 2x^2 + 3xy - y^2 \\
&= (x^2 - 2x^2) + (2xy + 3xy) + (-3y^2 - y^2) \\
&= -x^2 + 5xy - 4y^2
\end{aligned}$$

b) Ta có:
$$A - C = B \implies C = A - B$$
Thay biểu thức:
$$\begin{aligned}
C &= (2x^2 - 3xy + y^2) - (x^2 + 2xy - 3y^2) \\
&= 2x^2 - 3xy + y^2 - x^2 - 2xy + 3y^2 \\
&= (2x^2 - x^2) + (-3xy - 2xy) + (y^2 + 3y^2) \\
&= x^2 - 5xy + 4y^2
\end{aligned}$$
*(Nhận xét: Đa thức $C$ ở câu b chính là đa thức đối của đa thức $C$ ở câu a).*

c) Ta có:
$$C - 2A = B \implies C = B + 2A$$
Tính $2A = 2(2x^2 - 3xy + y^2) = 4x^2 - 6xy + 2y^2$.
Do đó:
$$\begin{aligned}
C &= (x^2 + 2xy - 3y^2) + (4x^2 - 6xy + 2y^2) \\
&= (x^2 + 4x^2) + (2xy - 6xy) + (-3y^2 + 2y^2) \\
&= 5x^2 - 4xy - y^2
\end{aligned}$$

---

### Dạng 3: Rút gọn biểu thức và tính giá trị tại các điểm cho trước

**Phương pháp giải:**
1. Thực hiện các phép cộng, trừ đa thức để rút gọn biểu thức về dạng tối giản nhất.
2. Thay giá trị các biến vào biểu thức đã rút gọn.

---

#### Bài toán 3:
Cho biểu thức:
$$K = (3x^2 y - 2xy + 5y^2) - (x^2 y - 4xy + 5y^2) - (2x^2 y + 2xy - 7)$$
a) Rút gọn biểu thức $K$.
b) Chứng minh rằng giá trị của biểu thức $K$ không phụ thuộc vào giá trị của các biến $x$ và $y$.

**Lời giải:**

a) Thực hiện phá tất cả các dấu ngoặc theo đúng quy tắc:
$$\begin{aligned}
K &= 3x^2 y - 2xy + 5y^2 - x^2 y + 4xy - 5y^2 - 2x^2 y - 2xy + 7 \\
&= (3x^2 y - x^2 y - 2x^2 y) + (-2xy + 4xy - 2xy) + (5y^2 - 5y^2) + 7 \\
&= (3 - 1 - 2)x^2 y + (-2 + 4 - 2)xy + (5 - 5)y^2 + 7 \\
&= 0 \cdot x^2 y + 0 \cdot xy + 0 \cdot y^2 + 7 \\
&= 7
\end{aligned}$$

b) Kết quả rút gọn của biểu thức $K$ là một hằng số bằng $7$.
Vì trong kết quả không còn chứa bất kỳ biến số nào nên giá trị của biểu thức $K$ luôn luôn bằng $7$ với mọi giá trị của $x$ và $y$.
Vậy giá trị của $K$ không phụ thuộc vào giá trị của biến.

---

### Dạng 4: Bài toán hình học và thực tế tính chu vi, diện tích chênh lệch

**Phương pháp giải:**
Dùng phép trừ đa thức $\Delta S = S_1 - S_2$ hoặc $\Delta C = C_1 - C_2$ để tính độ chênh lệch diện tích, chu vi hoặc chi phí.

---

#### Bài toán 4:
Một công ty may mặc có hai xưởng sản xuất:
- Doanh thu hàng tháng của xưởng 1 được biểu thị bởi đa thức: $D_1 = 5x^2 + 3xy + 20\text{ (triệu đồng)}$.
- Doanh thu hàng tháng của xưởng 2 được biểu thị bởi đa thức: $D_2 = 3x^2 + 5xy + 15\text{ (triệu đồng)}$.
(với $x$ là số lô hàng áo sơ mi, $y$ là số lô hàng áo khoác xuất khẩu).
a) Viết đa thức $T$ biểu thị tổng doanh thu của cả hai xưởng.
b) Viết đa thức $H$ biểu thị số tiền xưởng 1 đạt doanh thu cao hơn xưởng 2.
c) Biết trong tháng 10, công ty xuất khẩu được $x = 10$ lô áo sơ mi và $y = 4$ lô áo khoác. Hãy tính số tiền chênh lệch doanh thu giữa hai xưởng.

**Lời giải:**

a) Tổng doanh thu của cả hai xưởng là:
$$T = D_1 + D_2 = (5x^2 + 3xy + 20) + (3x^2 + 5xy + 15)$$
$$T = (5x^2 + 3x^2) + (3xy + 5xy) + (20 + 15) = 8x^2 + 8xy + 35\text{ (triệu đồng)}$$

b) Số tiền doanh thu xưởng 1 chênh lệch cao hơn xưởng 2 là:
$$H = D_1 - D_2 = (5x^2 + 3xy + 20) - (3x^2 + 5xy + 15)$$
$$H = 5x^2 + 3xy + 20 - 3x^2 - 5xy - 15$$
$$H = (5x^2 - 3x^2) + (3xy - 5xy) + (20 - 15) = 2x^2 - 2xy + 5\text{ (triệu đồng)}$$

c) Thay $x = 10$ và $y = 4$ vào biểu thức chênh lệch $H$:
$$H = 2(10)^2 - 2(10)(4) + 5 = 2(100) - 80 + 5 = 200 - 80 + 5 = 125\text{ (triệu đồng)}$$
Vậy xưởng 1 có doanh thu cao hơn xưởng 2 là $125$ triệu đồng.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Phép Trừ Đa thức và Kỹ thuật Khử Nhiễu Âm thanh Chủ động (ANC)

Khi bạn đeo tai nghe chống ồn chủ động (Active Noise Cancellation - như AirPods Pro hay Sony WH-1000XM5):
- Micro thu âm bên ngoài ghi lại sóng âm tạp âm từ môi trường là một hàm đa thức tín hiệu: $N(t)$.
- Chip xử lý âm thanh kỹ thuật số bên trong tai nghe ngay lập tức đảo pha sóng để tạo ra đa thức sóng âm đối kháng: $-N(t)$.
- Loa tai nghe phát ra sóng âm đối kháng, thực hiện phép cộng đa thức triệt tiêu trong không khí:
  $$S_{\text{tai}} = N(t) + [-N(t)] = 0$$
Tạp âm bị triệt tiêu hoàn toàn, mang lại không gian tĩnh lặng tuyệt đối cho người nghe nhạc!

---

### Chuyên đề 2: Đại số Boolean và Phép Cộng Trừ Nhị phân trong CPU Máy tính

Bên trong vi xử lý máy tính, các phép tính cộng trừ số học hàng tỷ phép tính mỗi giây thực chất là các phép toán cộng trừ đa thức trên trường nhị phân hữu hạn $\mathbb{F}_2$:
- Các mạch logic điện tử (bộ cộng toàn phần Full Adder) sử dụng cổng logic XOR (tương ứng với phép cộng trừ không nhớ) và cổng AND (tương ứng với phép nhân đơn thức).
- Mọi phép trừ nhị phân đều được CPU chuyển thành **phép cộng với số bù hai** ($A - B = A + \bar{B} + 1$), giúp bộ xử lý số học chỉ cần một mạch cộng duy nhất để thực hiện cả hai phép tính, tối ưu hóa tốc độ tính toán của máy tính.

---

### Chuyên đề 3: Phép Toán Tập hợp Hình học CSG trong Đồ họa Game 3D

Trong các phần mềm thiết kế cơ khí 3D (như AutoCAD, SolidWorks, Blender):
Làm thế nào để tạo ra một chi tiết máy phức tạp có khoét lỗ tròn xuyên qua một khối hộp?
Họ sử dụng kỹ thuật **Hình học Thực thể Xây dựng (Constructive Solid Geometry - CSG)**:
- Mỗi khối hình $3\text{D}$ được mô tả bởi một phương trình đa thức không gian: $f(x, y, z) \le 0$.
- Phép khoét lỗ thực chất là **phép trừ đa thức tập hợp**: $A - B$.
- Phép hàn ghép chi tiết là **phép cộng đa thức tập hợp**: $A + B$.
Cho phép các nhà thiết kế tạo ra những chi tiết động cơ phản lực cực kỳ tinh xảo.

---

### Chuyên đề 4: Cân bằng Phương trình Phản ứng Hóa học bằng Ma trận Đa thức

Làm thế nào để cân bằng phản ứng hóa học phức tạp trong công nghiệp:
$$a \text{KMnO}_4 + b \text{HCl} \to c \text{KCl} + d \text{MnCl}_2 + e \text{Cl}_2 + f \text{H}_2\text{O}$$
Các nhà hóa học lập hệ phương trình bảo toàn nguyên tố cho từng nguyên tử (K, Mn, O, H, Cl):
- Mỗi nguyên tố tạo thành một đa thức bảo toàn khối lượng: $\sum \text{vế trái} - \sum \text{vế phải} = 0$.
- Bằng các phép biến đổi cộng trừ đa thức tuyến tính (phép khử Gauss), máy tính tự động tìm ra bộ hệ số nguyên tối giản $(2, 16, 2, 2, 5, 8)$ chỉ trong một phần triệu giây!

---

### Chuyên đề 5: Vành Đa thức (Polynomial Ring) trong Đại số Hiện đại

Trong cấu trúc đại số trừu tượng, tập hợp tất cả các đa thức nhiều biến với phép cộng và phép nhân tạo thành một cấu trúc toán học gọi là **Vành Đa thức (Polynomial Ring)**, kí hiệu là $\mathbb{R}[x_1, x_2, \dots, x_n]$.
Phép cộng đa thức biến vành này thành một nhóm giao hoán (Abelian Group). Cấu trúc này là hòn đá tảng của Hình học Đại số (Algebraic Geometry) — công cụ toán học được dùng để chứng minh Định lý Lớn Fermat thế kỷ trước và giải mã thuyết Dây trong vật lý vũ trụ.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 3: Phép cộng và phép trừ đa thức (Toán 8)",
  "questions": [
    {
      "question": "Cho hai đa thức A = 3x^2 - 2xy + y^2 và B = x^2 + 2xy - y^2. Tổng A + B bằng:",
      "options": [
        "4x^2",
        "4x^2 + 4xy",
        "2x^2 - 4xy + 2y^2",
        "4x^2 + 2y^2"
      ],
      "answer": 0,
      "hint": "Cộng từng cặp hạng tử đồng dạng: (3x^2 + x^2) + (-2xy + 2xy) + (y^2 - y^2).",
      "explanation": "$A + B = (3x^2 + x^2) + (-2xy + 2xy) + (y^2 - y^2) = 4x^2 + 0 + 0 = 4x^2$."
    },
    {
      "question": "Cho P = 5x^2 y - 3xy^2 + 1 và Q = 2x^2 y - xy^2 - 4. Hiệu P - Q bằng:",
      "options": [
        "3x^2 y - 2xy^2 + 5",
        "3x^2 y - 4xy^2 - 3",
        "7x^2 y - 4xy^2 - 3",
        "3x^2 y - 2xy^2 - 3"
      ],
      "answer": 0,
      "hint": "Đổi dấu Q: -2x^2 y + xy^2 + 4. Khi đó: (5-2)x^2 y + (-3+1)xy^2 + (1+4).",
      "explanation": "$P - Q = 5x^2 y - 3xy^2 + 1 - 2x^2 y + xy^2 + 4 = 3x^2 y - 2xy^2 + 5$."
    },
    {
      "question": "Khi phá ngoặc biểu thức -(3x^2 - 2xy + 4y - 5), kết quả đúng là:",
      "options": [
        "-3x^2 - 2xy + 4y - 5",
        "-3x^2 + 2xy - 4y + 5",
        "-3x^2 + 2xy + 4y - 5",
        "3x^2 - 2xy + 4y - 5"
      ],
      "answer": 1,
      "hint": "Đổi dấu toàn bộ các số hạng trong ngoặc: + thành -, - thành +.",
      "explanation": "Quy tắc phá ngoặc có dấu trừ: $-(3x^2 - 2xy + 4y - 5) = -3x^2 + 2xy - 4y + 5$."
    },
    {
      "question": "Tìm đa thức M biết M + (2x^2 - y^2) = 5x^2 - 3y^2 + 1:",
      "options": [
        "M = 3x^2 - 2y^2 + 1",
        "M = 7x^2 - 4y^2 + 1",
        "M = 3x^2 - 4y^2 + 1",
        "M = -3x^2 + 2y^2 - 1"
      ],
      "answer": 0,
      "hint": "M = (5x^2 - 3y^2 + 1) - (2x^2 - y^2).",
      "explanation": "$M = 5x^2 - 3y^2 + 1 - 2x^2 + y^2 = (5x^2 - 2x^2) + (-3y^2 + y^2) + 1 = 3x^2 - 2y^2 + 1$."
    },
    {
      "question": "Cho hai đa thức bậc 4 là A và B. Bậc của đa thức tổng A + B có thể bằng bao nhiêu?",
      "options": [
        "Luôn luôn bằng 8",
        "Luôn luôn bằng 4",
        "Bằng 4 hoặc nhỏ hơn 4",
        "Không thể xác định"
      ],
      "answer": 2,
      "hint": "Nếu các hạng tử bậc 4 triệt tiêu nhau thì bậc có thể giảm xuống 3, 2, 1 hoặc 0.",
      "explanation": "Bậc của tổng hai đa thức luôn $\\le \\max(\\text{bậc } A, \\text{bậc } B)$. Ở đây hai hạng tử bậc 4 có thể triệt tiêu lẫn nhau, nên bậc của tổng là $\\le 4$."
    },
    {
      "question": "Rút gọn biểu thức (x - y) + (y - z) + (z - x) ta được:",
      "options": [
        "2x + 2y + 2z",
        "0",
        "x + y + z",
        "-2x - 2y - 2z"
      ],
      "answer": 1,
      "hint": "Bỏ ngoặc: x - y + y - z + z - x.",
      "explanation": "$x - y + y - z + z - x = (x - x) + (-y + y) + (-z + z) = 0$."
    },
    {
      "question": "Tìm đa thức K biết (3x^2 y - 4) - K = x^2 y + 2:",
      "options": [
        "K = 2x^2 y - 6",
        "K = 4x^2 y - 2",
        "K = 2x^2 y + 6",
        "K = -2x^2 y + 6"
      ],
      "answer": 0,
      "hint": "K = (3x^2 y - 4) - (x^2 y + 2).",
      "explanation": "$K = 3x^2 y - 4 - x^2 y - 2 = 2x^2 y - 6$."
    },
    {
      "question": "Cho A = x^2 - 2xy + y^2 và B = x^2 + 2xy + y^2. Hiệu B - A bằng:",
      "options": [
        "4xy",
        "-4xy",
        "2x^2 + 2y^2",
        "0"
      ],
      "answer": 0,
      "hint": "(x^2 + 2xy + y^2) - (x^2 - 2xy + y^2) = 2xy - (-2xy).",
      "explanation": "$B - A = x^2 + 2xy + y^2 - x^2 + 2xy - y^2 = 4xy$."
    },
    {
      "question": "Cho đa thức P = 2x^2 - 3x + 1 và Q = -2x^2 + 3x - 1. Mối quan hệ giữa P và Q là:",
      "options": [
        "P và Q bằng nhau",
        "P và Q là hai đa thức đối nhau",
        "P lớn hơn Q",
        "Không có mối quan hệ"
      ],
      "answer": 1,
      "hint": "Tính tổng P + Q = 0.",
      "explanation": "Ta có $P + Q = (2 - 2)x^2 + (-3 + 3)x + (1 - 1) = 0$. Do đó $P$ và $Q$ là hai đa thức đối nhau ($Q = -P$)."
    },
    {
      "question": "Giá trị của biểu thức M = (2x^2 + 3xy - 4) - (x^2 + 3xy - 5) tại x = -3 và y = 2026 bằng:",
      "options": [
        "10",
        "1",
        "8",
        "-8"
      ],
      "answer": 0,
      "hint": "Rút gọn trước: M = x^2 + 1 (biến y bị triệt tiêu!). Thay x = -3 => (-3)^2 + 1 = 10.",
      "explanation": "Rút gọn: $M = 2x^2 + 3xy - 4 - x^2 - 3xy + 5 = x^2 + 1$. Biến $y$ triệt tiêu hoàn toàn. Thay $x = -3$: $M = (-3)^2 + 1 = 9 + 1 = 10$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho hai đa thức:
$$A = 4x^3 y - 3x^2 y^2 + 2xy - 5$$
$$B = -2x^3 y + 3x^2 y^2 - 5xy + y^3 + 1$$
a) Tính $P = A + B$ và xác định bậc của đa thức $P$.
b) Tính $Q = A - B$ và xác định bậc của đa thức $Q$.
c) Tính giá trị của $P$ tại $x = 1, y = -1$.

### Bài tập 2:
Tìm đa thức $X$ biết:
a) $X + (3x^2 - 2xy + y^2) = 5x^2 - 2xy + 4y^2 - 1$
b) $(4xy^2 - 3x^2 y + 2) - X = 2xy^2 + x^2 y - 5$

### Bài tập 3 (Toán thực tế):
Một mảnh đất hình chữ nhật có chiều dài là $3x + 2y\text{ (m)}$ và chiều rộng là $2x + y\text{ (m)}$. Người ta đào một cái ao nuôi cá hình chữ nhật ở giữa mảnh đất có chiều dài là $2x - y\text{ (m)}$ và chiều rộng là $x + y\text{ (m)}$ ($x > y > 0$).
a) Viết biểu thức chu vi của mảnh đất ban đầu và chu vi của cái ao.
b) Viết đa thức biểu thị phần chu vi mảnh đất lớn hơn chu vi cái ao.
c) Tính số mét rào chắn chênh lệch khi $x = 10\text{ m}$ và $y = 4\text{ m}$.
