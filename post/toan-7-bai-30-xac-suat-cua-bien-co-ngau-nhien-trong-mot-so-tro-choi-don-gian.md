---
title: 'Toán 7 Bài 30: Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản'
description: 'Làm chủ công thức tính xác suất cổ điển Toán 7 Bài 30: Trò chơi gieo xúc xắc, tung đồng xu, chọn bóng, quay thưởng, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Xác suất và thống kê
  - Xác suất của biến cố
  - Xác suất cổ điển
  - Gieo xúc xắc
  - Tung đồng xu
  - Kết nối tri thức
grade: 7
---

# Bài 30. Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản

Ở Bài 29, chúng ta đã biết một biến cố ngẫu nhiên có thể xảy ra hoặc không xảy ra. Nhưng câu hỏi đặt ra là: **Làm thế nào để đo lường chính xác bằng một con số cụ thể mức độ khả quan (khả năng xảy ra) của một biến cố?**

Số đo định lượng ấy chính là **Xác suất (Probability)**. Được ký hiệu bằng chữ cái $P$ (viết tắt từ chữ La-tinh *Probabilitas*), xác suất là chiếc cầu nối kỳ diệu chuyển hóa những điều không chắc chắn của tự nhiên thành các con số toán học định lượng rõ ràng từ $0$ đến $1$ (hoặc từ $0\%$ đến $100\%$).

Trong bài học này, chúng ta sẽ cùng khám phá công thức tính xác suất cổ điển — công thức nền tảng chi phối mọi trò chơi trí tuệ, dự báo thời tiết, giải mã di truyền Mendel và vận hành các giải thuật thị giác máy tính hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 30: CÔNG THỨC XÁC SUẤT CỔ ĐIỂN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Công thức Xác suất cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$P(E) = \frac{k}{n}$$<br>• $k$: Số kết quả thuận lợi cho $E$.<br>• $n$: Tổng số kết quả có thể (đồng khả năng).<br>• Luôn có: $0 \le P(E) \le 1$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Trò chơi Tung Đồng xu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Không gian mẫu: $n = 2$ (Sấp, Ngửa).<br>• Khả năng đồng đều: $P(S) = P(N) = \frac{1}{2}$.<br>• Tung 2 đồng xu: $n = 4$ kết quả (SS, SN, NS, NN).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Trò chơi Gieo Xúc xắc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $n = 6$ kết quả $\{1; 2; 3; 4; 5; 6\}$.<br>• Mỗi mặt có xác suất: $\frac{1}{6}$.<br>• Số chẵn: $k = 3 \implies P = \frac{3}{6} = \frac{1}{2}$.<br>• Số nguyên tố: $k = 3 \implies P = \frac{1}{2}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Rút bóng / Thẻ ngẫu nhiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tổng số vật phẩm: $n$.<br>• Số vật phẩm thỏa mãn tính chất: $k$.<br>• Xác suất rút trúng: $P = \frac{k}{n}$.<br>• Phân số rút gọn tối giản.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (3 phút)

1. Tung một đồng xu cân đối 1 lần. Xác suất xuất hiện mặt Ngửa bằng bao nhiêu?
2. Gieo một con xúc xắc 6 mặt đồng chất 1 lần. Xác suất xuất hiện mặt 5 chấm bằng bao nhiêu?
3. Một hộp có 3 viên bi đỏ và 7 viên bi xanh cùng kích thước. Xác suất bốc ngẫu nhiên được viên bi đỏ bằng bao nhiêu?
4. Xác suất của một biến cố chắc chắn luôn bằng mấy?
5. Xác suất của một biến cố không thể luôn bằng mấy?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $\frac{1}{2} = 50\%$.
> 2. $\frac{1}{6}$.
> 3. $\frac{3}{3 + 7} = \frac{3}{10} = 30\%$.
> 4. $1$ ($100\%$).
> 5. $0$ ($0\%$).

---

## I. Lý thuyết Trọng tâm: Công thức Xác suất Cổ điển

### 1. Định nghĩa Xác suất trong mô hình Đồng khả năng

Giả sử một phép thử có **$n$ kết quả có thể xảy ra** và các kết quả này là **đồng khả năng** (có khả năng xuất hiện như nhau). 

Nếu có **$k$ kết quả thuận lợi** cho biến cố $E$ thì **xác suất của biến cố $E$**, kí hiệu là $P(E)$, được định nghĩa bằng tỉ số giữa số kết quả thuận lợi cho $E$ và tổng số kết quả có thể xảy ra:

> [!IMPORTANT]
> **CÔNG THỨC XÁC SUẤT CỔ ĐIỂN (LAPLACE, 1812):**
> $$P(E) = \frac{k}{n} = \frac{\text{Số kết quả thuận lợi cho } E}{\text{Tổng số kết quả có thể xảy ra}}$$

*Trong đó:*
- $n$ là tổng số kết quả có thể xảy ra của phép thử ($n \in \mathbb{N}^*$).
- $k$ là số kết quả thuận lợi cho biến cố $E$ ($0 \le k \le n$).
- $P(E)$ là một số thực nằm trong đoạn $[0; 1]$:
  $$0 \le P(E) \le 1$$

---

### 2. Hai trường hợp đặc biệt

1. **Biến cố không thể:** Hoàn toàn không có kết quả nào thuận lợi ($k = 0$).
   $$P(\text{Không thể}) = \frac{0}{n} = 0$$
2. **Biến cố chắc chắn:** Mọi kết quả của phép thử đều thuận lợi ($k = n$).
   $$P(\text{Chắc chắn}) = \frac{n}{n} = 1$$
3. **Biến cố ngẫu nhiên:** Có ít nhất 1 kết quả thuận lợi nhưng không phải tất cả ($1 \le k < n$).
   $$0 < P(E) < 1$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 200" style="width: 100%; max-width: 580px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình cơ chế tính xác suất cổ điển">
    <rect x="20" y="20" width="540" height="160" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    
    <!-- Hộp tổng kết quả n -->
    <rect x="50" y="50" width="220" height="100" rx="10" fill="#e0e7ff" stroke="#6366f1" stroke-width="2" />
    <text x="160" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#3730a3">Toàn bộ n kết quả</text>
    
    <!-- Tập con kết quả thuận lợi k -->
    <rect x="75" y="95" width="170" height="40" rx="6" fill="#3b82f6" />
    <text x="160" y="120" text-anchor="middle" font-size="14" font-weight="600" fill="#ffffff">k kết quả thuận lợi cho E</text>

    <!-- Dấu mũi tên phân số -->
    <path d="M 290 100 L 340 100" stroke="#0f172a" stroke-width="3" marker-end="url(#arrow)" />
    
    <!-- Phân số xác suất -->
    <text x="440" y="85" text-anchor="middle" font-size="22" font-weight="700" fill="#0f172a">P(E) = </text>
    <text x="495" y="75" text-anchor="middle" font-size="24" font-weight="700" fill="#2563eb">k</text>
    <line x1="475" y1="85" x2="515" y2="85" stroke="#0f172a" stroke-width="2.5" />
    <text x="495" y="115" text-anchor="middle" font-size="24" font-weight="700" fill="#475569">n</text>
    
    <text x="440" y="145" text-anchor="middle" font-size="13" fill="#64748b">(Luôn rút gọn tối giản)</text>
  </svg>
</div>

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Xác suất trong trò chơi Tung đồng xu

**Phương pháp giải:**
- Tung 1 đồng xu cân đối: Có $n = 2$ kết quả đồng khả năng: Sấp (S) hoặc Ngửa (N).
- Tung 2 đồng xu cân đối phân biệt: Có $n = 2 \times 2 = 4$ kết quả: $\{SS, SN, NS, NN\}$.
- Đếm số kết quả thuận lợi và áp dụng $P = \frac{k}{n}$.

---

#### Bài toán 1:
Tung đồng thời hai đồng xu cân đối $1$ nghìn đồng và $5$ nghìn đồng. Tính xác suất của các biến cố sau:
a) $A$: "Cả hai đồng xu đều xuất hiện mặt Sấp".
b) $B$: "Có ít nhất một đồng xu xuất hiện mặt Ngửa".
c) $C$: "Hai đồng xu xuất hiện hai mặt khác nhau".

**Lời giải:**

Gọi kết quả của mỗi lần tung là cặp $(X, Y)$, trong đó $X$ là mặt của đồng xu 1 nghìn đồng, $Y$ là mặt của đồng xu 5 nghìn đồng ($X, Y \in \{S; N\}$).
Tập hợp tất cả các kết quả có thể xảy ra là:
$$\Omega = \{(S, S); (S, N); (N, S); (N, N)\}$$
Tổng số kết quả có thể xảy ra là $n = 4$ kết quả đồng khả năng.

a) **Xét biến cố $A$ ("Cả hai đồng xu đều xuất hiện mặt Sấp"):**
- Kết quả thuận lợi cho $A$ là: $(S, S)$ $\implies k = 1$.
- Xác suất của biến cố $A$:
  $$P(A) = \frac{1}{4} = 0{,}25 = 25\%$$

b) **Xét biến cố $B$ ("Có ít nhất một đồng xu xuất hiện mặt Ngửa"):**
- "Ít nhất một mặt ngửa" nghĩa là có 1 mặt ngửa hoặc cả 2 mặt ngửa.
- Các kết quả thuận lợi là: $(S, N), (N, S), (N, N)$ $\implies k = 3$.
- Xác suất của biến cố $B$:
  $$P(B) = \frac{3}{4} = 0{,}75 = 75\%$$

c) **Xét biến cố $C$ ("Hai đồng xu xuất hiện hai mặt khác nhau"):**
- Các kết quả thuận lợi là: $(S, N), (N, S)$ $\implies k = 2$.
- Xác suất của biến cố $C$:
  $$P(C) = \frac{2}{4} = \frac{1}{2} = 50\%$$

---

### Dạng 2: Xác suất trong trò chơi Gieo xúc xắc 6 mặt

**Phương pháp giải:**
Khi gieo 1 con xúc xắc 6 mặt cân đối:
- Tổng số kết quả có thể là $n = 6$ (các mặt $\{1; 2; 3; 4; 5; 6\}$).
- Liệt kê các mặt thỏa mãn tính chất số học (số chẵn, số lẻ, số nguyên tố, ước số, bội số) $\to$ Đếm số kết quả $k \to P = \frac{k}{6}$.

---

#### Bài toán 2:
Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối một lần. Tính xác suất của các biến cố sau:
a) $E$: "Số chấm xuất hiện trên mặt xúc xắc là số chia hết cho 3".
b) $F$: "Số chấm xuất hiện là số nguyên tố".
c) $G$: "Số chấm xuất hiện là ước của 12".
d) $H$: "Số chấm xuất hiện lớn hơn hoặc bằng 5".

**Lời giải:**

Không gian các kết quả có thể của phép thử là: $\{1; 2; 3; 4; 5; 6\} \implies n = 6$.

a) **Biến cố $E$ ("Số chia hết cho 3"):**
- Các số chia hết cho 3 trong khoảng từ 1 đến 6 là: $3; 6$.
- Số kết quả thuận lợi: $k = 2$.
- Xác suất: $P(E) = \frac{2}{6} = \frac{1}{3}$.

b) **Biến cố $F$ ("Số nguyên tố"):**
- Các số nguyên tố là: $2; 3; 5$.
- Số kết quả thuận lợi: $k = 3$.
- Xác suất: $P(F) = \frac{3}{6} = \frac{1}{2}$.

c) **Biến cố $G$ ("Ước của 12"):**
- Các số từ 1 đến 6 là ước của 12 là: $1; 2; 3; 4; 6$.
- Số kết quả thuận lợi: $k = 5$.
- Xác suất: $P(G) = \frac{5}{6}$.

d) **Biến cố $H$ ("Số chấm $\ge 5$"):**
- Các số thỏa mãn là: $5; 6$.
- Số kết quả thuận lợi: $k = 2$.
- Xác suất: $P(H) = \frac{2}{6} = \frac{1}{3}$.

---

### Dạng 3: Xác suất trong trò chơi Rút thẻ và Chọn bóng từ hộp kín

**Phương pháp giải:**
- Xác định tổng số thẻ/bóng trong hộp: $n$.
- Xác định số thẻ/bóng thỏa mãn yêu cầu màu sắc/số hiệu: $k$.
- Áp dụng công thức: $P = \frac{k}{n}$, rút gọn về phân số tối giản.

---

#### Bài toán 3:
Một hộp chứa $25$ quả bóng tennis có cùng kích thước và khối lượng, gồm:
- $10$ quả màu vàng chanh,
- $8$ quả màu trắng tuyết,
- $7$ quả màu xanh lá.
Bạn Lan nhắm mắt lấy ngẫu nhiên một quả bóng từ hộp. Tính xác suất để:
a) Quả bóng lấy ra có màu vàng chanh.
b) Quả bóng lấy ra không có màu trắng tuyết.
c) Quả bóng lấy ra có màu đỏ.

**Lời giải:**

Tổng số quả bóng trong hộp là: $n = 10 + 8 + 7 = 25$ (quả bóng).
Vì lấy ngẫu nhiên nên khả năng lấy trúng mỗi quả bóng là như nhau.

a) Gọi $A$ là biến cố "Quả bóng lấy ra có màu vàng chanh".
- Số quả bóng màu vàng chanh là $10 \implies k = 10$.
- Xác suất của biến cố $A$:
  $$P(A) = \frac{10}{25} = \frac{2}{5} = 0{,}4 = 40\%$$

b) Gọi $B$ là biến cố "Quả bóng lấy ra không có màu trắng tuyết".
- Không có màu trắng tuyết nghĩa là bóng có màu vàng chanh hoặc màu xanh lá.
- Số quả bóng thỏa mãn là: $10 + 7 = 17$ (quả) $\implies k = 17$.
- Xác suất của biến cố $B$:
  $$P(B) = \frac{17}{25} = 0{,}68 = 68\%$$

c) Gọi $C$ là biến cố "Quả bóng lấy ra có màu đỏ".
- Trong hộp chỉ có bóng vàng, trắng và xanh, không có bóng đỏ nào $\implies k = 0$.
- Biến cố $C$ là biến cố không thể.
  $$P(C) = \frac{0}{25} = 0$$

---

### Dạng 4: Trò chơi Vòng quay May mắn và Bánh xe Số học

**Phương pháp giải:**
- Một hình tròn được chia thành $n$ hình quạt có diện tích bằng nhau. Khả năng mũi tên dừng lại ở mỗi hình quạt là như nhau (đồng khả năng).
- Đếm số hình quạt ghi số hoặc màu sắc thỏa mãn biến cố $\to k$.
- Xác suất: $P = \frac{k}{n}$.

---

#### Bài toán 4:
Một vòng quay may mắn hình tròn được chia thành $8$ hình quạt bằng nhau, được đánh số từ $1$ đến $8$:
Bạn Hùng quay bánh xe một lần. Tính xác suất để mũi tên dừng lại ở:
a) Hình quạt ghi số chẵn lớn hơn 4.
b) Hình quạt ghi số là số chính phương.
c) Hình quạt ghi số chia cho 4 dư 3.

**Lời giải:**

Bánh xe chia thành $8$ phần bằng nhau nên tổng số kết quả có thể là $n = 8$.

a) Gọi $X$ là biến cố "Mũi tên dừng ở số chẵn lớn hơn 4".
- Các số chẵn từ 1 đến 8 lớn hơn 4 là: $6; 8 \implies k = 2$.
- Xác suất: $P(X) = \frac{2}{8} = \frac{1}{4} = 25\%$.

b) Gọi $Y$ là biến cố "Mũi tên dừng ở số chính phương".
- Các số chính phương từ 1 đến 8 là: $1 = 1^2$ và $4 = 2^2 \implies k = 2$.
- Xác suất: $P(Y) = \frac{2}{8} = \frac{1}{4} = 25\%$.

c) Gọi $Z$ là biến cố "Mũi tên dừng ở số chia cho 4 dư 3".
- Các số chia cho 4 dư 3 trong khoảng từ 1 đến 8 là: $3$ (vì $3 = 4 \cdot 0 + 3$) và $7$ (vì $7 = 4 \cdot 1 + 3$).
- Số kết quả thuận lợi: $k = 2$.
- Xác suất: $P(Z) = \frac{2}{8} = \frac{1}{4} = 25\%$.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Luật số lớn (Law of Large Numbers) của Jacob Bernoulli (1713)

Nếu xác suất lý thuyết của việc tung đồng xu ra mặt Ngửa là $\frac{1}{2} = 50\%$, liệu tung $10$ lần có chắc chắn ra đúng $5$ lần Ngửa không? 
Không hề! Bạn có thể nhận được $7$ lần Ngửa, hoặc thậm chí $10$ lần Ngửa.

Nhưng nhà toán học Thụy Sĩ Jacob Bernoulli đã chứng minh định lý vĩ đại:
> **ĐỊNH LÝ LUẬT SỐ LỚN:**
> Khi số lần thực hiện phép thử $N$ tiến tới vô cùng ($N \to \infty$), **tần số tương đối (xác suất thực nghiệm) $\frac{m}{N}$ sẽ hội tụ tuyệt đối về xác suất lý thuyết $P$**!

Năm 1900, nhà toán học Anh Karl Pearson đã kiên trì tung một đồng xu đúng $24\,000$ lần. Kết quả: có $12\,012$ lần xuất hiện mặt Ngửa. Tần số thực nghiệm là $\frac{12\,012}{24\,000} = 0{,}5005$ — tiệm cận sát sạt với con số lý thuyết $0{,}5$!

---

### Chuyên đề 2: Di truyền học Mendel và Tỉ lệ kiểu hình $3 : 1$

Năm 1865, linh mục Gregor Mendel đã làm thí nghiệm lai tạo hàng chục ngàn cây đậu Hà Lan trong tu viện. Khi cho lai giữa hai cây đậu F1 đều mang gene dị hợp tử mang tính trạng hoa đỏ $(Aa)$ với nhau:
- Mỗi hạt phấn đực có thể mang allele $A$ hoặc $a$ (xác suất $\frac{1}{2}$).
- Mỗi noãn cái có thể mang allele $A$ hoặc $a$ (xác suất $\frac{1}{2}$).

Tổ hợp ngẫu nhiên sinh ra 4 khả năng đồng xác suất:
$$AA \left(\frac{1}{4}\right), \quad Aa \left(\frac{1}{4}\right), \quad aA \left(\frac{1}{4}\right), \quad aa \left(\frac{1}{4}\right)$$
Vì $A$ là gene trội quy định màu đỏ, chỉ có $aa$ biểu hiện hoa trắng. Xác suất hoa đỏ là $\frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{3}{4}$, hoa trắng là $\frac{1}{4}$. Tỉ lệ kinh điển $3 : 1$ mà học sinh học trong môn Sinh học thực chất chính là bài toán xác suất biến cố ngẫu nhiên Toán 7!

---

### Chuyên đề 3: Phương pháp Monte Carlo trong Tính toán Siêu máy tính

Làm thế nào để tính diện tích của một hồ nước có hình dạng uốn lượn bất kỳ mà không có công thức hình học nào mô tả nổi?
Năm 1946, nhà vật lý Stanislaw Ulam và John von Neumann khi tham gia Dự án Manhattan chế tạo bom nguyên tử đã phát minh ra **Phương pháp Monte Carlo**:
1. Nhốt hồ nước vào trong một hình vuông có diện tích $S$ đã biết.
2. Bắn ngẫu nhiên hàng triệu hạt mưa (hoặc dùng máy tính gieo hàng triệu điểm ngẫu nhiên) vào hình vuông.
3. Đếm số điểm rơi trúng mặt hồ ($k$) trên tổng số điểm bắn ($N$).
4. Khi $N$ rất lớn, theo luật xác suất: $\frac{S_{\text{hồ}}}{S_{\text{vuông}}} \approx \frac{k}{N} \implies S_{\text{hồ}} \approx S_{\text{vuông}} \cdot \frac{k}{N}$.

Ngày nay, thuật toán Monte Carlo được sử dụng để mô phỏng sự va chạm của các thiên hà, định giá cổ phiếu phái sinh trên Phố Wall và huấn luyện AI AlphaGo chơi cờ vây thắng các đại kiện tướng thế giới!

---

### Chuyên đề 4: Biến cố đối và Quy tắc $P(\bar{E}) = 1 - P(E)$

Trong nhiều bài toán tính xác suất, việc đếm trực tiếp số kết quả thuận lợi vô cùng phức tạp (ví dụ câu hỏi chứa từ khóa *"có ít nhất một"*). Các nhà toán học đã nghĩ ra phương pháp đi đường vòng qua **Biến cố đối**:

> [!NOTE]
> **CÔNG THỨC BIẾN CỐ ĐỐI:**
> Biến cố đối của $E$, ký hiệu là $\bar{E}$, là biến cố *"Biến cố $E$ không xảy ra"*.
> Tổng xác suất của hai biến cố đối nhau luôn bằng $1$:
> $$P(E) + P(\bar{E}) = 1 \implies P(E) = 1 - P(\bar{E})$$

*Ví dụ:* Gieo 3 con xúc xắc cân đối. Tính xác suất để *"có ít nhất một con xúc xắc xuất hiện mặt 6 chấm"*.
- Đếm trực tiếp rất dài dòng (1 con ra 6, 2 con ra 6, cả 3 con ra 6).
- Xét biến cố đối: *"Cả 3 con xúc xắc đều không xuất hiện mặt 6 chấm"*.
  Số kết quả cho mỗi con là $5$ (từ 1 đến 5).
  Tổng số kết quả: $6 \times 6 \times 6 = 216$. Số kết quả thuận lợi cho biến cố đối: $5 \times 5 \times 5 = 125$.
  $P(\bar{E}) = \frac{125}{216}$.
- Xác suất cần tìm: $P(E) = 1 - \frac{125}{216} = \frac{91}{216} \approx 42{,}1\%$. Nhanh và thanh lịch hơn rất nhiều!

---

### Chuyên đề 5: Ngụy biện Con bạc (Gambler's Fallacy)

Một người chơi tung đồng xu 5 lần liên tiếp đều xuất hiện mặt Ngửa. Ở lần tung thứ 6, anh ta tự tin cược toàn bộ tài sản vào mặt Sấp vì nghĩ rằng: *"Ngửa ra 5 lần rồi thì lần này chắc chắn phải đổi sang Sấp để cân bằng xác suất!"*.

Anh ta đã mắc phải cái bẫy tâm lý kinh điển gọi là **Ngụy biện Con bạc (Gambler's Fallacy)**:
Đồng xu không có trí nhớ, không có cảm xúc và không biết những lần trước nó đã rơi vào mặt nào. Mỗi lần tung là một **phép thử hoàn toàn độc lập**. Ở lần tung thứ 6, xác suất xuất hiện mặt Sấp vẫn chính xác là $\frac{1}{2} = 50\%$ như mọi lần khác! Hiểu đúng xác suất giúp chúng ta đưa ra những quyết định tỉnh táo và khoa học trong cuộc sống.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 30: Xác suất của Biến cố Ngẫu nhiên",
  "questions": [
    {
      "question": "Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối 1 lần. Xác suất để xuất hiện mặt có số chấm là số lẻ bằng:",
      "options": [
        "1/6",
        "1/3",
        "1/2",
        "2/3"
      ],
      "answer": 2,
      "hint": "Các mặt có số chấm lẻ là: 1, 3, 5.",
      "explanation": "Có 3 kết quả thuận lợi $\\{1; 3; 5\\}$ trên tổng số 6 kết quả có thể. Xác suất là $P = \\frac{3}{6} = \\frac{1}{2}$."
    },
    {
      "question": "Một túi đựng 6 quả cầu xanh và 4 quả cầu đỏ có cùng khối lượng và kích thước. Rút ngẫu nhiên 1 quả cầu. Xác suất rút được quả cầu màu đỏ là:",
      "options": [
        "2/5",
        "3/5",
        "1/4",
        "4/6"
      ],
      "answer": 0,
      "hint": "Tổng số quả cầu là 6 + 4 = 10.",
      "explanation": "Tổng số quả cầu là $6 + 4 = 10$. Số quả cầu đỏ là $4$. Xác suất là $P = \\frac{4}{10} = \\frac{2}{5}$."
    },
    {
      "question": "Tung hai đồng xu cân đối đồng thời. Xác suất để cả hai đồng xu đều xuất hiện mặt Ngửa là:",
      "options": [
        "1/2",
        "1/3",
        "1/4",
        "3/4"
      ],
      "answer": 2,
      "hint": "Các kết quả có thể là (S,S), (S,N), (N,S), (N,N).",
      "explanation": "Tổng cộng có 4 kết quả đồng khả năng. Chỉ có 1 kết quả (N, N) là cả hai ngửa. Vậy $P = \\frac{1}{4}$."
    },
    {
      "question": "Rút ngẫu nhiên một tấm thẻ từ hộp có 20 tấm thẻ đánh số từ 1 đến 20. Xác suất để số trên thẻ là số chia hết cho 5 là:",
      "options": [
        "1/4",
        "1/5",
        "3/20",
        "1/10"
      ],
      "answer": 1,
      "hint": "Các số chia hết cho 5 từ 1 đến 20 là: 5, 10, 15, 20.",
      "explanation": "Có 4 số chia hết cho 5 trong tập hợp 20 số. Xác suất là $P = \\frac{4}{20} = \\frac{1}{5}$."
    },
    {
      "question": "Biết xác suất của biến cố E là P(E) = 0,35. Xác suất của biến cố đối không xảy ra E là:",
      "options": [
        "0,35",
        "0,65",
        "1,35",
        "0"
      ],
      "answer": 1,
      "hint": "Áp dụng công thức biến cố đối: $P(\\bar{E}) = 1 - P(E)$.",
      "explanation": "$P(\\bar{E}) = 1 - P(E) = 1 - 0{,}35 = 0{,}65$."
    },
    {
      "question": "Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối. Xác suất để mặt xuất hiện có số chấm là số nguyên tố là:",
      "options": [
        "1/6",
        "1/3",
        "1/2",
        "2/3"
      ],
      "answer": 2,
      "hint": "Các số nguyên tố từ 1 đến 6 là 2, 3, 5.",
      "explanation": "Có 3 kết quả thuận lợi là 2, 3, 5. Xác suất là $P = \\frac{3}{6} = \\frac{1}{2}$."
    },
    {
      "question": "Một hộp có chứa 8 viên bi trắng, 5 viên bi vàng và một số viên bi đỏ. Biết xác suất lấy được viên bi màu trắng là 1/3. Hỏi trong hộp có bao nhiêu viên bi đỏ?",
      "options": [
        "11 viên",
        "12 viên",
        "16 viên",
        "24 viên"
      ],
      "answer": 0,
      "hint": "Nếu xác suất lấy bi trắng là 1/3 thì tổng số bi trong hộp gấp 3 lần số bi trắng.",
      "explanation": "Tổng số bi trong hộp là: $8 \\times 3 = 24$ viên. Số bi đỏ là: $24 - (8 + 5) = 24 - 13 = 11$ viên."
    },
    {
      "question": "Một vòng quay may mắn chia làm 12 phần bằng nhau đánh số từ 1 đến 12. Xác suất để mũi tên dừng lại ở số là ước của 12 là:",
      "options": [
        "1/3",
        "5/12",
        "1/2",
        "7/12"
      ],
      "answer": 2,
      "hint": "Các ước của 12 là: 1, 2, 3, 4, 6, 12.",
      "explanation": "Có 6 ước số của 12 trong khoảng từ 1 đến 12 (gồm {1; 2; 3; 4; 6; 12}). Xác suất là $P = \\frac{6}{12} = \\frac{1}{2}$."
    },
    {
      "question": "Khẳng định nào sau đây là SAI về xác suất P(A) của một biến cố A bất kỳ?",
      "options": [
        "0 <= P(A) <= 1",
        "Nếu A là biến cố chắc chắn thì P(A) = 1",
        "Nếu A là biến cố không thể thì P(A) = 0",
        "Nếu tung đồng xu 10 lần thì chắc chắn có đúng 5 lần xuất hiện mặt sấp"
      ],
      "answer": 3,
      "hint": "Xác suất là khả năng lý thuyết, trong thực tế số lần xuất hiện có thể dao động ngẫu nhiên.",
      "explanation": "Tung đồng xu 10 lần là phép thử ngẫu nhiên, số lần sấp có thể là bất kỳ số nào từ 0 đến 10, không thể khẳng định chắc chắn bằng 5. Do đó phương án D sai."
    },
    {
      "question": "Gieo đồng thời hai con xúc xắc 6 mặt cân đối. Tổng số chấm xuất hiện có bao nhiêu kết quả có thể nhận được?",
      "options": [
        "6",
        "11",
        "12",
        "36"
      ],
      "answer": 1,
      "hint": "Tổng số chấm nhỏ nhất là 1 + 1 = 2, lớn nhất là 6 + 6 = 12.",
      "explanation": "Tổng số chấm trên 2 con xúc xắc có thể nhận các giá trị từ 2 đến 12 (gồm: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12). Có tất cả 11 giá trị có thể nhận được."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Gieo một con xúc xắc 6 mặt cân đối. Tính xác suất của các biến cố sau:
a) $A$: "Số chấm xuất hiện là số chia hết cho 2 nhưng không chia hết cho 4".
b) $B$: "Số chấm xuất hiện là số chính phương".
c) $C$: "Số chấm xuất hiện là bội của 7".

### Bài tập 2:
Một lớp học có $45$ học sinh, trong đó có $24$ bạn nữ và $21$ bạn nam. Trong số các bạn nữ có $6$ bạn đeo kính, trong số các bạn nam có $9$ bạn đeo kính. Giáo viên chủ nhiệm chọn ngẫu nhiên một bạn làm lớp trưởng.
Tính xác suất để:
a) Bạn được chọn là học sinh nam.
b) Bạn được chọn là học sinh có đeo kính.
c) Bạn được chọn là học sinh nữ không đeo kính.

### Bài tập 3 (Mở rộng tư duy):
Một mật khẩu vali gồm $3$ chữ số xoay, mỗi vòng xoay gồm các chữ số từ $0$ đến $9$.
a) Có tất cả bao nhiêu mã mật khẩu khác nhau có thể tạo thành?
b) Bạn Nam vô tình quên mất chữ số cuối cùng, chỉ nhớ hai chữ số đầu là $7$ và $8$. Nam thử bấm ngẫu nhiên một chữ số cuối cùng. Xác suất để Nam mở được vali ngay trong lần thử đầu tiên là bao nhiêu?
