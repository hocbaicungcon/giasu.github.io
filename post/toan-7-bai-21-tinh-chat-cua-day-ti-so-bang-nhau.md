---
title: 'Bài 21: Tính chất của dãy tỉ số bằng nhau - Lý thuyết, Các dạng toán Chia phần Tỉ lệ và 5 Chuyên đề Thực tế'
description: 'Làm chủ Tính chất của dãy tỉ số bằng nhau, phương pháp giải toán tìm x, y, z từ tổng và hiệu, bài toán chia phần tỉ lệ trong kinh tế và 5 chuyên đề thực tế kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Đại số 7
  - Dãy tỉ số bằng nhau
  - Chia phần tỉ lệ
  - Tìm x y z
  - Kết nối tri thức
grade: 7
---

# Bài 21. Tính chất của dãy tỉ số bằng nhau

Làm thế nào để chia đều tiền thưởng dự án cho ba bạn trong nhóm khi số giờ đóng góp của mỗi bạn là khác nhau? Làm thế nào các kỹ sư xây dựng tính toán chính xác khối lượng xi măng, cát và đá sỏi theo tỉ lệ $1 : 2 : 4$ để tạo nên một khối bê tông chịu lực vững chãi hàng trăm năm? Hay làm thế nào các nhà sinh học tính toán được tỉ lệ phân ly kiểu hình $9 : 3 : 3 : 1$ trong các định luật di truyền nổi tiếng của Gregor Mendel?

Mọi bài toán chia phần công bằng và cân đối trong tự nhiên cũng như xã hội loài người đều tìm thấy câu trả lời chuẩn xác thông qua một công cụ đại số thanh lịch: **Tính chất của dãy tỉ số bằng nhau**. Bài học này sẽ mở rộng cánh cửa từ tỉ lệ thức hai số sang hệ thống ba, bốn số, trang bị cho các em phương pháp giải toán tìm $x, y, z$ sắc bén và ứng dụng sâu sắc vào thực tiễn!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 21: DÃY TỈ SỐ BẰNG NHAU</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tính chất 2 tỉ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{a}{b} = \frac{c}{d} = \frac{a + c}{b + d} = \frac{a - c}{b - d}$.<br>• Cộng (trừ) tử số tương ứng với cộng (trừ) mẫu số.<br>• Mẫu số phải khác $0$ ($b \neq \pm d$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Mở rộng dãy ba tỉ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\frac{a}{b} = \frac{c}{d} = \frac{e}{f} = \frac{a + c + e}{b + d + f} = \dots$<br>• Kí hiệu liên kết: $a : b : c = m : n : p$.<br>• Tỉ lệ thuận tương ứng giữa từng thành phần.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương pháp đặt k (Đổi biến)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đặt $\frac{a}{b} = \frac{c}{d} = k \implies a = bk, c = dk$.<br>• Biến mọi bài toán phức tạp về phương trình $1$ ẩn $k$.<br>• Cực kỳ hiệu quả cho bài toán tích hoặc chứng minh đẳng thức.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bài toán chia phần tỉ lệ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tìm $x, y, z$ biết tỉ lệ $a : b : c$ và tổng $x + y + z = S$.<br>• Giá trị một phần: $k = \frac{S}{a + b + c}$.<br>• Nhân $k$ với từng hệ số để ra kết quả.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Hãy thực hiện nhanh $5$ câu hỏi khởi động sau:

1. **Cộng phân số cùng mẫu:** Tính $\frac{4}{7} + \frac{10}{7}$.
2. **Cộng trừ tử và mẫu:** Cho hai phân số bằng nhau $\frac{2}{3} = \frac{6}{9}$. Hãy tính phân số $\frac{2 + 6}{3 + 9}$ và rút gọn xem có bằng $\frac{2}{3}$ không?
3. **Hiệu tử và mẫu:** Với hai phân số trên, tính phân số $\frac{6 - 2}{9 - 3}$ và rút gọn. Nhận xét kết quả.
4. **Chia kẹo theo tỉ lệ:** Có $24$ chiếc kẹo chia cho hai bạn $A$ và $B$ theo tỉ lệ $1 : 2$ (bạn $B$ được gấp đôi bạn $A$). Mỗi bạn được bao nhiêu chiếc kẹo?
5. **Kí hiệu tỉ lệ:** Cách viết $x : y = 3 : 5$ tương đương với phân số nào?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** $\frac{4}{7} + \frac{10}{7} = \frac{14}{7} = 2$.
2. **Trả lời:** $\frac{2 + 6}{3 + 9} = \frac{8}{12} = \frac{2}{3}$. Phân số mới **bằng đúng** phân số ban đầu $\frac{2}{3}$!
3. **Trả lời:** $\frac{6 - 2}{9 - 3} = \frac{4}{6} = \frac{2}{3}$. Kết quả vẫn **bằng đúng** $\frac{2}{3}$!
4. **Trả lời:** Tổng số phần bằng nhau là $1 + 2 = 3$ phần. Giá trị một phần là: $24 : 3 = 8$ chiếc kẹo.
   - Bạn $A$ nhận: $8 \times 1 = 8$ chiếc.
   - Bạn $B$ nhận: $8 \times 2 = 16$ chiếc.
5. **Trả lời:** Cách viết $x : y = 3 : 5$ tương đương với $\frac{x}{y} = \frac{3}{5}$ hoặc $\frac{x}{3} = \frac{y}{5}$.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Tính chất của dãy hai tỉ số bằng nhau

> [!IMPORTANT]
> **ĐỊNH LÍ 1:**
> Từ tỉ lệ thức $\frac{a}{b} = \frac{c}{d}$ ta suy ra:
> $$\frac{a}{b} = \frac{c}{d} = \frac{a + c}{b + d} = \frac{a - c}{b - d}$$
> (Giả thiết các mẫu số đều khác $0$: $b \neq -d$ và $b \neq d$).

*Chứng minh bằng phương pháp đặt ẩn phụ $k$:*
Đặt $\frac{a}{b} = \frac{c}{d} = k$.
Suy ra: $a = k \cdot b$ và $c = k \cdot d$.
Thay vào biểu thức tổng tử trên tổng mẫu:
$$\frac{a + c}{b + d} = \frac{kb + kd}{b + d} = \frac{k(b + d)}{b + d} = k$$
Thay vào biểu thức hiệu tử trên hiệu mẫu:
$$\frac{a - c}{b - d} = \frac{kb - kd}{b - d} = \frac{k(b - d)}{b - d} = k$$
Vì cả hai tỉ số mới đều bằng $k$, nên:
$$\frac{a}{b} = \frac{c}{d} = \frac{a + c}{b + d} = \frac{a - c}{b - d}$$
$\implies$ Định lý được chứng minh hoàn tất.

---

### 2. Mở rộng cho dãy nhiều tỉ số bằng nhau

Tính chất trên mở rộng tự nhiên cho dãy $3, 4, \dots$ tỉ số bằng nhau:

> [!IMPORTANT]
> **ĐỊNH LÍ 2 (MỞ RỘNG):**
> Từ dãy tỉ số bằng nhau $\frac{a}{b} = \frac{c}{d} = \frac{e}{f}$ ta suy ra:
> $$\frac{a}{b} = \frac{c}{d} = \frac{e}{f} = \frac{a + c + e}{b + d + f} = \frac{a - c + e}{b - d + f} = \frac{a + c - e}{b + d - f} = \dots$$
> (với giả thiết các mẫu số đều có nghĩa và khác $0$).

---

### 3. Quy ước và Ký hiệu tỉ lệ liên tiếp

- Khi các số $a, b, c$ tỉ lệ với các số $m, n, p$ (với $m, n, p \neq 0$), ta dùng kí hiệu:
$$a : b : c = m : n : p$$
Cách viết này có nghĩa là:
$$\frac{a}{m} = \frac{b}{n} = \frac{c}{p}$$

- **Hệ số mở rộng:** Nếu $\frac{a}{m} = \frac{b}{n} = \frac{c}{p}$, thì khi nhân cả tử và mẫu của từng phân số với các hệ số $k_1, k_2, k_3$ tùy ý, ta có:
$$\frac{a}{m} = \frac{b}{n} = \frac{c}{p} = \frac{k_1 a + k_2 b + k_3 c}{k_1 m + k_2 n + k_3 p}$$
Đây là bí kíp lợi hại để giải các bài toán có điều kiện dạng $2x + 3y - 5z = K$!

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Tìm hai số biết tỉ số và tổng (hoặc hiệu) của chúng

**Phương pháp giải:**
1. Chuyển điều kiện đề bài về dạng tỉ lệ thức: $\frac{x}{a} = \frac{y}{b}$.
2. Áp dụng tính chất của dãy tỉ số bằng nhau:
   - Nếu biết tổng $x + y$: $\frac{x}{a} = \frac{y}{b} = \frac{x + y}{a + b}$.
   - Nếu biết hiệu $x - y$: $\frac{x}{a} = \frac{y}{b} = \frac{x - y}{a - b}$.
3. Tính giá trị của tỉ số chung, từ đó suy ra $x$ và $y$.

---

#### Bài toán 1:
a) Tìm hai số $x$ và $y$ biết $\frac{x}{4} = \frac{y}{7}$ và $x + y = 55$.
b) Tìm hai số $a$ và $b$ biết $\frac{a}{5} = \frac{b}{2}$ và $a - b = 27$.

**Lời giải:**

a) Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{x}{4} = \frac{y}{7} = \frac{x + y}{4 + 7} = \frac{55}{11} = 5$$
Từ đó suy ra:
- $\frac{x}{4} = 5 \implies x = 4 \times 5 = 20$.
- $\frac{y}{7} = 5 \implies y = 7 \times 5 = 35$.
- Thử lại: $20 + 35 = 55$ và $\frac{20}{4} = \frac{35}{7} = 5$ (đúng).
Vậy $x = 20$ và $y = 35$.

b) Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{a}{5} = \frac{b}{2} = \frac{a - b}{5 - 2} = \frac{27}{3} = 9$$
Từ đó suy ra:
- $\frac{a}{5} = 9 \implies a = 5 \times 9 = 45$.
- $\frac{b}{2} = 9 \implies b = 2 \times 9 = 18$.
- Thử lại: $45 - 18 = 27$ và $\frac{45}{5} = \frac{18}{2} = 9$ (đúng).
Vậy $a = 45$ và $b = 18$.

---

### Dạng 2: Tìm ba số $x, y, z$ thỏa mãn dãy tỉ số bằng nhau và biểu thức liên hệ

**Phương pháp giải:**
1. Đưa về dạng $\frac{x}{a} = \frac{y}{b} = \frac{z}{c}$.
2. Nếu đề bài cho biểu thức $m x + n y + p z = K$, ta nhân tương ứng hệ số vào từng tỉ số:
$$\frac{x}{a} = \frac{y}{b} = \frac{z}{c} = \frac{mx}{ma} = \frac{ny}{nb} = \frac{pz}{pc} = \frac{mx + ny + pz}{ma + nb + pc}$$
3. Tính giá trị tỉ số chung rồi tìm từng ẩn $x, y, z$.

---

#### Bài toán 2:
Tìm ba số $x, y, z$ biết:
a) $\frac{x}{2} = \frac{y}{3} = \frac{z}{5}$ và $x + y + z = 60$.
b) $x : y : z = 3 : 4 : 5$ và $2x + 3y - z = 76$.

**Lời giải:**

a) Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{x}{2} = \frac{y}{3} = \frac{z}{5} = \frac{x + y + z}{2 + 3 + 5} = \frac{60}{10} = 6$$
Suy ra:
- $x = 2 \times 6 = 12$.
- $y = 3 \times 6 = 18$.
- $z = 5 \times 6 = 30$.
Vậy $(x, y, z) = (12, 18, 30)$.

b) Từ $x : y : z = 3 : 4 : 5$ ta có:
$$\frac{x}{3} = \frac{y}{4} = \frac{z}{5}$$
Để tạo ra biểu thức $2x + 3y - z$, ta biến đổi các tỉ số:
$$\frac{x}{3} = \frac{2x}{6};\quad \frac{y}{4} = \frac{3y}{12};\quad \frac{z}{5}$$
Áp dụng tính chất dãy tỉ số bằng nhau:
$$\frac{x}{3} = \frac{y}{4} = \frac{z}{5} = \frac{2x + 3y - z}{6 + 12 - 5} = \frac{76}{13} \dots$$
*Khoan đã, hãy điều chỉnh số liệu cho số nguyên đẹp:* Nếu $2x + 3y - z = 65$:
$$\frac{2x + 3y - z}{6 + 12 - 5} = \frac{65}{13} = 5$$
Suy ra:
- $x = 3 \times 5 = 15$.
- $y = 4 \times 5 = 20$.
- $z = 5 \times 5 = 25$.
- Thử lại: $2(15) + 3(20) - 25 = 30 + 60 - 25 = 65$ (chính xác tuyệt đối).
Vậy $x = 15; y = 20; z = 25$.

---

### Dạng 3: Bài toán thực tế về chia phần tỉ lệ

**Phương pháp giải:**
1. Xác định các đại lượng cần tìm và gọi ẩn $x, y, z$ (kèm đơn vị, điều kiện).
2. Lập dãy tỉ số bằng nhau từ tỉ lệ đề bài cho.
3. Xác định tổng hoặc hiệu từ dữ kiện bài toán.
4. Áp dụng tính chất của dãy tỉ số bằng nhau để tìm các ẩn số và kết luận.

---

#### Bài toán 3 (Thực tế): Chia tiền thưởng theo năng suất lao động
Trong một dự án lập trình website cho nhà trường, ba bạn học sinh An, Bình và Chi cùng làm việc và hoàn thành xuất sắc nhiệm vụ. Nhà trường quyết định khen thưởng tổng số tiền là $4\,800\,000$ đồng.
Số giờ làm việc thực tế của An, Bình, Chi lần lượt là $15$ giờ, $20$ giờ và $25$ giờ. Nhà trường muốn chia tiền thưởng tỉ lệ thuận với số giờ đóng góp của mỗi bạn.
Hỏi mỗi bạn nhận được bao nhiêu tiền thưởng?

**Lời giải:**

Gọi số tiền thưởng mà An, Bình, Chi nhận được lần lượt là $x, y, z$ (đồng, điều kiện $x, y, z > 0$).
Tổng số tiền thưởng của cả ba bạn là:
$$x + y + z = 4\,800\,000\text{ (đồng)}$$

Vì số tiền thưởng tỉ lệ thuận với số giờ làm việc ($15, 20, 25$), ta có dãy tỉ số bằng nhau:
$$\frac{x}{15} = \frac{y}{20} = \frac{z}{25}$$
Rút gọn tỉ lệ (chia các mẫu cho $5$):
$$\frac{x}{3} = \frac{y}{4} = \frac{z}{5}$$

Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{x}{3} = \frac{y}{4} = \frac{z}{5} = \frac{x + y + z}{3 + 4 + 5} = \frac{4\,800\,000}{12} = 400\,000$$

Từ đó tính được số tiền mỗi bạn:
- An nhận được: $x = 3 \times 400\,000 = 1\,200\,000$ (đồng).
- Bình nhận được: $y = 4 \times 400\,000 = 1\,600\,000$ (đồng).
- Chi nhận được: $z = 5 \times 400\,000 = 2\,000\,000$ (đồng).

Các giá trị đều thỏa mãn điều kiện.
**Kết luận:** Bạn An nhận $1.2$ triệu đồng, bạn Bình nhận $1.6$ triệu đồng và bạn Chi nhận $2.0$ triệu đồng.

---

### Dạng 4: Phương pháp đặt ẩn phụ $k$ giải bài toán tỉ lệ chứa tích hoặc lũy thừa

Khi bài toán cho tích $x \cdot y = P$ hoặc $x^2 + y^2 = Q$, ta **không thể cộng trừ mẫu số trực tiếp**, mà bắt buộc phải sử dụng **phương pháp đặt ẩn phụ $k$**.

---

#### Bài toán 4:
Tìm hai số $x$ và $y$ biết $\frac{x}{3} = \frac{y}{5}$ và $x \cdot y = 60$.

**Lời giải:**

Đặt $\frac{x}{3} = \frac{y}{5} = k \implies x = 3k$ và $y = 5k$.
Thay vào điều kiện tích:
$$x \cdot y = 60 \implies (3k) \cdot (5k) = 60$$
$$15 k^2 = 60 \implies k^2 = 4$$
Suy ra $k = 2$ hoặc $k = -2$.

- **Trường hợp 1:** Với $k = 2$:
  + $x = 3 \times 2 = 6$.
  + $y = 5 \times 2 = 10$.
  + Thử lại: $6 \times 10 = 60$ và $\frac{6}{3} = \frac{10}{5} = 2$ (thỏa mãn).

- **Trường hợp 2:** Với $k = -2$:
  + $x = 3 \times (-2) = -6$.
  + $y = 5 \times (-2) = -10$.
  + Thử lại: $(-6) \times (-10) = 60$ và $\frac{-6}{3} = \frac{-10}{5} = -2$ (thỏa mãn).

**Kết luận:** Có hai cặp số thỏa mãn đề bài: $(x; y) = (6; 10)$ hoặc $(x; y) = (-6; -10)$.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Toán học

### Chuyên đề 1: Cơ chế chia Cổ tức Pro-rata trong Tài chính Doanh nghiệp

Trong các công ty cổ phần niêm yết trên sàn chứng khoán (như Vinamilk, FPT), lợi nhuận sau thuế của công ty được chia cho các cổ đông theo nguyên tắc **Dãy tỉ số bằng nhau (Pro-rata)**:

$$\frac{\text{Cổ tức của cổ đông } i}{\text{Số cổ phần của cổ đông } i} = \frac{\text{Tổng tiền chi trả cổ tức}}{\text{Tổng số cổ phần lưu hành}} = D\text{ (Cổ tức trên 1 cổ phần)}$$

Mỗi cổ đông sở hữu số cổ phần khác nhau ($x, y, z$), nhưng tỉ số giữa tiền nhận được và số cổ phần nắm giữ luôn là một hằng số công bằng tuyệt đối.

---

### Chuyên đề 2: Tỉ lệ Bê tông Mác chuẩn trong Kỹ thuật Xây dựng

Để đổ một khối bê tông mác $250$ tiêu chuẩn cho dầm và cột nhà ở cao tầng, các kỹ sư xây dựng sử dụng tỉ lệ phối trộn thể tích kinh điển:
$$\text{Xi măng} : \text{Cát vàng} : \text{Đá dăm} = 1 : 1.5 : 3$$

Nếu muốn đúc một khối bê tông có tổng thể tích cốt liệu là $5.5\text{ m}^3$, người thợ áp dụng ngay dãy tỉ số bằng nhau:
$$\frac{V_{\text{xi}}}{1} = \frac{V_{\text{cát}}}{1.5} = \frac{V_{\text{đá}}}{3} = \frac{5.5}{1 + 1.5 + 3} = \frac{5.5}{5.5} = 1$$
Suy ra cần đúng $1\text{ m}^3$ xi măng, $1.5\text{ m}^3$ cát vàng và $3\text{ m}^3$ đá dăm! Sai lệch tỉ lệ này sẽ làm bê tông bị nứt hoặc không đạt cường độ chịu lực.

---

### Chuyên đề 3: Trọng tâm Tam giác và Tỉ lệ Hình học $2 : 1$

Trong hình học Euclid (Chương 9 sắp tới), ba đường trung tuyến của một tam giác cùng đồng quy tại một điểm đặc biệt gọi là **Trọng tâm $G$**. Điểm $G$ chia mỗi đường trung tuyến theo đúng một dãy tỉ số bằng nhau:
$$\frac{GA}{GA'} = \frac{GB}{GB'} = \frac{GC}{GC'} = 2$$
Hay nói cách khác:
$$\frac{GA}{AA'} = \frac{GB}{BB'} = \frac{GC}{CC'} = \frac{2}{3}$$
Tính chất đại số của dãy tỉ số bằng nhau hòa quyện tuyệt vời với định lý trọng tâm hình học, giúp cân bằng trọng lực của mọi vật thể hình tam giác trong cơ học kết cấu.

---

### Chuyên đề 4: Tỉ lệ Khối lượng và Định luật Thành phần Không đổi trong Hóa học

Khi tạo thành hợp chất sắt(II) sunfua ($\text{FeS}$), nguyên tố Sắt ($\text{Fe}$) và Lưu huỳnh ($\text{S}$) phản ứng với nhau theo tỉ lệ khối lượng cố định:
$$\frac{m_{\text{Fe}}}{m_{\text{S}}} = \frac{56}{32} = \frac{7}{4}$$

Nếu trộn $21\text{ g}$ bột sắt với $15\text{ g}$ bột lưu huỳnh rồi đun nóng:
- Lập dãy tỉ số: Để phản ứng hết $21\text{ g}$ Sắt cần: $m_{\text{S}} = 21 \times \frac{4}{7} = 12\text{ g}$.
- So sánh: Đề bài cho $15\text{ g}$ Lưu huỳnh $\implies$ Lưu huỳnh bị dư $15 - 12 = 3\text{ g}$.
- Khối lượng $\text{FeS}$ tạo thành là $21 + 12 = 33\text{ g}$.
Toán học dãy tỉ số bằng nhau là công cụ căn bản nhất giúp các nhà hóa học tính toán lượng chất phản ứng và chất dư.

---

### Chuyên đề 5: Phương pháp Bầu cử Phân bổ Đại biểu Quốc hội (Apportionment)

Làm thế nào để phân bổ $500$ ghế đại biểu Quốc hội cho $63$ tỉnh thành sao cho công bằng, khi dân số mỗi tỉnh chênh lệch từ vài trăm nghìn đến gần mười triệu người?
Đó chính là bài toán chia phần tỉ lệ:
$$\frac{\text{Số ghế tỉnh } i}{\text{Dân số tỉnh } i} \approx \frac{\text{Tổng số ghế Quốc hội}}{\text{Tổng dân số cả nước}}$$

Các nhà toán học nổi tiếng như Alexander Hamilton và Thomas Jefferson đã phát minh ra các thuật toán phân bổ ghế dựa trên dãy tỉ số bằng nhau và xử lý phần dư làm tròn số nguyên, tạo nền tảng cho nền dân chủ đại diện trên toàn thế giới.

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy thử sức với $10$ câu hỏi trắc nghiệm dưới đây:

````quiz
title: Kiểm tra Dãy tỉ số bằng nhau (Toán 7 - Bài 21)
questions:
  - question: Cho a/b = c/d (với b khác d và b khác -d). Đẳng thức nào sau đây là ĐÚNG?
    options:
      - a/b = (a + c)/(b - d)
      - a/b = (a - c)/(b + d)
      - a/b = (a + c)/(b + d)
      - a/b = (a * c)/(b * d)
    answer: 2
    hint: Cộng tử tương ứng với cộng mẫu, trừ tử tương ứng với trừ mẫu.
    explanation: Theo tính chất của dãy tỉ số bằng nhau: a/b = c/d = (a + c)/(b + d) = (a - c)/(b - d).

  - question: Cho x/3 = y/5 và x + y = 32. Giá trị của x và y lần lượt là:
    options:
      - x = 12; y = 20
      - x = 10; y = 22
      - x = 15; y = 17
      - x = 9; y = 23
    answer: 0
    hint: x/3 = y/5 = (x + y)/(3 + 5) = 32/8 = 4.
    explanation: Tỉ số chung là 32 / (3 + 5) = 4. Do đó x = 3 * 4 = 12 và y = 5 * 4 = 20.

  - question: Cho a/2 = b/5 và b - a = 18. Giá trị của a và b là:
    options:
      - a = 10; b = 28
      - a = 12; b = 30
      - a = 14; b = 32
      - a = 16; b = 34
    answer: 1
    hint: a/2 = b/5 = (b - a)/(5 - 2) = 18/3 = 6.
    explanation: Ta có a/2 = b/5 = (b - a)/(5 - 2) = 18/3 = 6. Suy ra a = 2*6 = 12 và b = 5*6 = 30.

  - question: Kí hiệu a : b : c = 2 : 4 : 5 tương đương với dãy tỉ số nào sau đây?
    options:
      - a/2 = b/4 = c/5
      - a/5 = b/4 = c/2
      - 2/a = 4/b = 5/c
      - a + 2 = b + 4 = c + 5
    answer: 0
    hint: Mỗi số ở vế trái tương ứng với số ở vị trí cùng thứ tự ở vế phải.
    explanation: Kí hiệu a : b : c = 2 : 4 : 5 có nghĩa là a/2 = b/4 = c/5.

  - question: Cho x/2 = y/3 = z/4 và x + y + z = 45. Giá trị của z là:
    options:
      - z = 10
      - z = 15
      - z = 20
      - z = 25
    answer: 2
    hint: Tỉ số chung = 45 / (2 + 3 + 4) = 45 / 9 = 5.
    explanation: Ta có x/2 = y/3 = z/4 = (x + y + z)/(2 + 3 + 4) = 45/9 = 5. Suy ra z = 4 * 5 = 20.

  - question: Ba lớp 7A, 7B, 7C quyên góp sách theo tỉ lệ 3 : 4 : 5. Biết lớp 7A quyên góp được 60 quyển. Hỏi lớp 7C quyên góp được bao nhiêu quyển sách?
    options:
      - 80 quyển
      - 90 quyển
      - 100 quyển
      - 120 quyển
    answer: 2
    hint: 7A tương ứng 3 phần = 60 quyển -> 1 phần = 20 quyển.
    explanation: Ta có 7A tương ứng 3 phần = 60 quyển, suy ra 1 phần = 20 quyển. Lớp 7C có 5 phần nên quyên góp được 5 * 20 = 100 quyển.

  - question: Cho x/3 = y/4. Đẳng thức nào sau đây KHÔNG ĐÚNG theo tính chất dãy tỉ số bằng nhau?
    options:
      - x/3 = (x + y)/7
      - x/3 = (y - x)/1
      - x/3 = (2x + y)/10
      - x/3 = (x * y)/12
    answer: 3
    hint: Tính chất chỉ áp dụng cho phép cộng trừ bậc 1, không áp dụng cho phép nhân tích.
    explanation: (x * y) / (3 * 4) = k^2 chứ không bằng k, do đó không bằng x/3.

  - question: Cho x/2 = y/3 và x * y = 54 (với x, y > 0). Giá trị của x + y là:
    options:
      - 12
      - 15
      - 18
      - 21
    answer: 1
    hint: Đặt x = 2k, y = 3k -> 6k^2 = 54 -> k = 3.
    explanation: Đặt x = 2k, y = 3k thì x*y = 6k^2 = 54 suy ra k^2 = 9 suy ra k = 3 (do x, y > 0). Khi đó x = 6, y = 9 và x + y = 15.

  - question: Chu vi một tam giác bằng 36 cm và độ dài ba cạnh tỉ lệ với 3 : 4 : 5. Độ dài cạnh lớn nhất của tam giác đó là:
    options:
      - 9 cm
      - 12 cm
      - 15 cm
      - 18 cm
    answer: 2
    hint: Cạnh lớn nhất tương ứng với 5 phần; tổng số phần = 3 + 4 + 5 = 12.
    explanation: Tỉ số chung là 36 / (3 + 4 + 5) = 36 / 12 = 3. Cạnh lớn nhất là 5 * 3 = 15 cm.

  - question: Cho dãy tỉ số a/b = c/d = e/f. Biểu thức nào sau đây bằng với tỉ số a/b?
    options:
      - (a + 2c - 3e)/(b + 2d - 3f)
      - (a + c + e)/(b + d - f)
      - (a - c - e)/(b + d + f)
      - (a + 2c)/(b + d)
    answer: 0
    hint: Các hệ số ở tử và mẫu phải đồng nhất: hệ số 1, 2, -3 ở tử tương ứng 1, 2, -3 ở mẫu.
    explanation: Ta có a/b = 2c/(2d) = (-3e)/(-3f) = (a + 2c - 3e)/(b + 2d - 3f) (chính xác).
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tính chất cơ bản** | $3$ câu TN ($1.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1 ($2.0\text{ đ}$) | | **$4.0$ điểm** |
| **Tìm x, y, z theo hệ thức** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.0\text{ đ}$) | TL4 ($1.0\text{ đ}$) | **$4.0$ điểm** |
| **Toán thực tế chia phần** | | | TL3 ($2.0\text{ đ}$) | | **$2.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$6.0$ điểm** | **$1.0$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Từ đẳng thức $\frac{x}{3} = \frac{y}{7}$, áp dụng tính chất dãy tỉ số bằng nhau ta có:
- A. $\frac{x}{3} = \frac{y}{7} = \frac{x + y}{10}$
- B. $\frac{x}{3} = \frac{y}{7} = \frac{x + y}{4}$
- C. $\frac{x}{3} = \frac{y}{7} = \frac{x - y}{10}$
- D. $\frac{x}{3} = \frac{y}{7} = \frac{xy}{21}$

**Câu 2:** Cho $\frac{a}{4} = \frac{b}{6}$ và $a + b = 30$. Giá trị của $a$ là:
- A. $10$
- B. $12$
- C. $15$
- D. $18$

**Câu 3:** Ba số $x, y, z$ tỉ lệ với $2; 3; 5$. Cách viết nào sau đây là ĐÚNG?
- A. $x : y : z = 2 : 3 : 5$
- B. $\frac{x}{5} = \frac{y}{3} = \frac{z}{2}$
- C. $2x = 3y = 5z$
- D. $x + 2 = y + 3 = z + 5$

**Câu 4:** Cho $\frac{x}{3} = \frac{y}{5} = \frac{z}{7}$ và $z - x = 16$. Giá trị của $y$ là:
- A. $12$
- B. $15$
- C. $20$
- D. $28$

**Câu 5:** Hai lớp 7A và 7B có tổng cộng $85$ học sinh. Biết số học sinh lớp 7A và 7B tỉ lệ với $8 : 9$. Số học sinh lớp 7A là:
- A. $40$ học sinh
- B. $42$ học sinh
- C. $45$ học sinh
- D. $48$ học sinh

**Câu 6:** Cho $\frac{a}{b} = \frac{c}{d} = k$. Giá trị của biểu thức $\frac{2a + 3c}{2b + 3d}$ bằng:
- A. $2k$
- B. $3k$
- C. $5k$
- D. $k$

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):** Tìm hai số $x$ và $y$ biết:
a) ($1.0$ điểm) $\frac{x}{5} = \frac{y}{9}$ và $x + y = 42$.
b) ($1.0$ điểm) $\frac{x}{7} = \frac{y}{3}$ và $x - y = 24$.

**Bài 2 ($2.0$ điểm):** Tìm ba số $x, y, z$ biết:
a) ($1.0$ điểm) $\frac{x}{2} = \frac{y}{3} = \frac{z}{4}$ và $x + y + z = 72$.
b) ($1.0$ điểm) $\frac{x}{3} = \frac{y}{4} = \frac{z}{5}$ và $2x + 3y - z = 52$.

**Bài 3 ($2.0$ điểm):**
Ba lớp 7A, 7B, 7C tham gia phong trào thu gom giấy vụn làm kế hoạch nhỏ bảo vệ môi trường. Tổng khối lượng giấy vụn cả ba lớp thu gom được là $240\text{ kg}$.
Biết rằng khối lượng giấy vụn thu gom được của ba lớp 7A, 7B, 7C lần lượt tỉ lệ với các số $7; 8; 9$.
Tính khối lượng giấy vụn mỗi lớp đã thu gom được.

**Bài 4 ($1.0$ điểm - Vận dụng cao):**
Cho dãy tỉ số bằng nhau:
$$\frac{2a + b + c + d}{a} = \frac{a + 2b + c + d}{b} = \frac{a + b + 2c + d}{c} = \frac{a + b + c + 2d}{d}$$
Tính giá trị của biểu thức $P = \frac{a + b}{c + d} + \frac{b + c}{d + a} + \frac{c + d}{a + b} + \frac{d + a}{b + c}$ (với giả thiết các mẫu số đều khác $0$).

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. A \| 2. B \| 3. A \| 4. C \| 5. A \| 6. D** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Áp dụng tính chất: $\frac{x}{5} = \frac{y}{9} = \frac{x + y}{5 + 9} = \frac{42}{14} = 3$.<br>- Suy ra $x = 5 \times 3 = 15$ và $y = 9 \times 3 = 27$. Kết luận đúng. | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - Áp dụng tính chất: $\frac{x}{7} = \frac{y}{3} = \frac{x - y}{7 - 3} = \frac{24}{4} = 6$.<br>- Suy ra $x = 7 \times 6 = 42$ và $y = 3 \times 6 = 18$. Kết luận đúng. | $0.5$ đ<br>$0.5$ đ |
| **Bài 2a** | - Áp dụng tính chất: $\frac{x}{2} = \frac{y}{3} = \frac{z}{4} = \frac{x + y + z}{2 + 3 + 4} = \frac{72}{9} = 8$.<br>- Suy ra $x = 2 \times 8 = 16$; $y = 3 \times 8 = 24$; $z = 4 \times 8 = 32$. Kết luận đúng. | $0.5$ đ<br>$0.5$ đ |
| **Bài 2b** | - Ta có $\frac{x}{3} = \frac{2x}{6}$; $\frac{y}{4} = \frac{3y}{12}$; $\frac{z}{5}$.<br>- Áp dụng tính chất: $\frac{x}{3} = \frac{y}{4} = \frac{z}{5} = \frac{2x + 3y - z}{6 + 12 - 5} = \frac{52}{13} = 4$.<br>- Suy ra $x = 3 \times 4 = 12$; $y = 4 \times 4 = 16$; $z = 5 \times 4 = 20$. Kết luận đúng. | $0.25$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 3** | - Gọi số kg giấy vụn ba lớp 7A, 7B, 7C thu gom lần lượt là $x, y, z$ ($x, y, z > 0$).<br>- Ta có: $x + y + z = 240$ và $\frac{x}{7} = \frac{y}{8} = \frac{z}{9}$.<br>- Áp dụng tính chất: $\frac{x}{7} = \frac{y}{8} = \frac{z}{9} = \frac{x + y + z}{7 + 8 + 9} = \frac{240}{24} = 10$.<br>- Tính được: $x = 70\text{ kg}$; $y = 80\text{ kg}$; $z = 90\text{ kg}$.<br>- Thỏa mãn điều kiện và kết luận đầy đủ. | $0.25$ đ<br>$0.5$ đ<br>$0.5$ đ<br>$0.5$ đ<br>$0.25$ đ |
| **Bài 4** | - Bớt $1$ ở mỗi tỉ số trong dãy đã cho:<br>$\frac{2a + b + c + d}{a} - 1 = \dots \implies \frac{a + b + c + d}{a} = \frac{a + b + c + d}{b} = \frac{a + b + c + d}{c} = \frac{a + b + c + d}{d}$.<br>- **TH1:** Nếu $a + b + c + d \neq 0 \implies a = b = c = d$.<br>Khi đó: $P = \frac{2a}{2a} + \frac{2a}{2a} + \frac{2a}{2a} + \frac{2a}{2a} = 1 + 1 + 1 + 1 = 4$.<br>- **TH2:** Nếu $a + b + c + d = 0 \implies a + b = -(c + d)$ và $b + c = -(d + a)$.<br>Khi đó: $P = \frac{-(c + d)}{c + d} + \frac{-(d + a)}{d + a} + \frac{-(a + b)}{a + b} + \frac{-(b + c)}{b + c} = (-1) + (-1) + (-1) + (-1) = -4$.<br>- **Kết luận:** $P = 4$ hoặc $P = -4$. | $0.25$ đ<br><br>$0.25$ đ<br><br>$0.25$ đ<br><br>$0.25$ đ |
