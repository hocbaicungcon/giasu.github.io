---
title: 'Bài 18: Biểu đồ hình quạt tròn - Lý thuyết, Cách vẽ, Phân tích số liệu và 5 Chuyên đề Thực tế'
description: 'Làm chủ biểu đồ hình quạt tròn (Pie Chart), công thức tính góc ở tâm \alpha = (p/100) \times 360^\circ, cách vẽ và phân tích dữ liệu, 5 dạng toán và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Thống kê 7
  - Biểu đồ hình quạt tròn
  - Biểu đồ quạt
  - Góc ở tâm
  - Phân tích số liệu
  - Kết nối tri thức
grade: 7
---

# Bài 18. Biểu đồ hình quạt tròn

Khi mở một bài báo cáo tài chính của các tập đoàn công nghệ toàn cầu, xem bản tin thời sự về cơ cấu năng lượng tái tạo của quốc gia hay đơn giản là quan sát dung lượng bộ nhớ trên chiếc điện thoại thông minh, chúng ta thường bắt gặp một chiếc "bánh tròn" nhiều màu sắc chia thành từng múi. Đó chính là **Biểu đồ hình quạt tròn (Pie Chart)**.

Biểu đồ hình quạt tròn là công cụ trực quan hóa dữ liệu quyền năng nhất khi ta muốn so sánh **tỉ lệ phần trăm của từng thành phần so với toàn thể $100\%$**. Mỗi hình quạt tròn tương ứng với một lát cắt của thực tại, liên kết chặt chẽ giữa đại số phần trăm và góc hình học ở tâm đường tròn $360^\circ$. Trong bài học này, chúng ta sẽ cùng giải mã toàn bộ bí mật toán học đằng sau biểu đồ hình quạt tròn, rèn luyện kỹ năng đọc hiểu bảng số liệu, tự tay vẽ biểu đồ bằng thước đo độ và vận dụng vào các bài toán kinh tế, đời sống hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 18: BIỂU ĐỒ HÌNH QUẠT TRÒN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Ý nghĩa & Cấu tạo</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu diễn tỉ lệ phần trăm các thành phần so với toàn thể ($100\%$).<br>• Cả hình tròn tương ứng với $100\%$ và góc ở tâm $360^\circ$.<br>• Mỗi hình quạt biểu diễn một thành phần.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Công thức cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tính góc từ %: $\alpha = \frac{p}{100} \times 360^\circ = p \times 3.6^\circ$.<br>• Tính % từ góc: $p = \frac{\alpha}{360} \times 100\%$.<br>• Mỗi $1\%$ tương ứng với đúng $3.6^\circ$ ở tâm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Các bước thiết lập</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• B1: Tính tỉ lệ % từng đối tượng.<br>• B2: Tính góc ở tâm $\alpha_i = p_i \times 3.6^\circ$.<br>• B3: Dùng thước đo góc vẽ các hình quạt nối tiếp nhau.<br>• B4: Tô màu, ghi chú giải và tiêu đề.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Phân tích số liệu thực tế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tính giá trị tuyệt đối: $N_i = \frac{p_i}{100} \times N_{\text{tổng}}$.<br>• So sánh thị phần, cơ cấu kinh tế.<br>• Nhận diện biểu đồ gây hiểu nhầm thị giác.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Các em hãy cùng thực hiện nhanh $5$ câu hỏi khởi động sau đây:

1. **Góc của một vòng tròn:** Một đường tròn đầy đủ chứa góc ở tâm bằng bao nhiêu độ?
2. **Góc vuông và góc bẹt:** Một góc vuông ($90^\circ$) chiếm bao nhiêu phần của một vòng tròn? Một góc bẹt ($180^\circ$) chiếm bao nhiêu phần?
3. **Phần trăm sang số thập phân:** Chuyển các tỉ lệ phần trăm sau về phân số tối giản và số thập phân: $25\%$, $50\%$, $75\%$, $10\%$.
4. **Tính tỉ lệ phần trăm:** Một lớp học có $40$ học sinh, trong đó có $10$ học sinh giỏi. Học sinh giỏi chiếm bao nhiêu phần trăm số học sinh cả lớp?
5. **Tổng phần trăm:** Nếu một chiếc bánh được chia cho ba bạn $A, B, C$, biết bạn $A$ nhận $35\%$, bạn $B$ nhận $40\%$ chiếc bánh. Hỏi bạn $C$ nhận được bao nhiêu phần trăm?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Một vòng tròn đầy đủ có góc ở tâm bằng $360^\circ$.
2. **Trả lời:**
   - Góc vuông $90^\circ$ chiếm: $\frac{90}{360} = \frac{1}{4}$ vòng tròn (tức $25\%$).
   - Góc bẹt $180^\circ$ chiếm: $\frac{180}{360} = \frac{1}{2}$ vòng tròn (tức $50\%$).
3. **Trả lời:**
   - $25\% = \frac{25}{100} = \frac{1}{4} = 0.25$.
   - $50\% = \frac{50}{100} = \frac{1}{2} = 0.5$.
   - $75\% = \frac{75}{100} = \frac{3}{4} = 0.75$.
   - $10\% = \frac{10}{100} = \frac{1}{10} = 0.1$.
4. **Trả lời:** Tỉ lệ phần trăm học sinh giỏi là: $\frac{10}{40} \times 100\% = 25\%$.
5. **Trả lời:** Toàn bộ chiếc bánh là $100\%$. Phần bánh của $C$ là: $100\% - (35\% + 40\%) = 25\%$.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Khái niệm và Cấu tạo của Biểu đồ hình quạt tròn

> [!IMPORTANT]
> **ĐỊNH NGHĨA BIỂU ĐỒ HÌNH QUẠT TRÒN:**
> **Biểu đồ hình quạt tròn** (còn gọi là biểu đồ tròn / Pie chart) là biểu đồ dùng một hình tròn được chia thành các **hình quạt tròn** để biểu diễn tỉ lệ phần trăm của các thành phần trong một tổng thể.
> 
> Trong biểu đồ hình quạt tròn:
> - Toàn bộ hình tròn biểu diễn toàn bộ tổng thể, ứng với **$100\%$** và có số đo góc ở tâm là **$360^\circ$**.
> - Mỗi hình quạt tròn biểu diễn một nhóm thành phần dữ liệu.
> - Diện tích và góc ở tâm của mỗi hình quạt tỉ lệ thuận với tỉ lệ phần trăm của thành phần đó.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 280" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Cấu tạo biểu đồ hình quạt tròn">
    <!-- Hình tròn tâm (180, 140), R = 100 -->
    <!-- Quạt 1: 50% (180 độ), từ -90 đến 90 độ -->
    <path d="M 180,140 L 180,40 A 100 100 0 0 1 180,240 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="2" />
    <!-- Quạt 2: 25% (90 độ), từ 90 đến 180 độ -->
    <path d="M 180,140 L 180,240 A 100 100 0 0 1 80,140 Z" fill="#10b981" stroke="#ffffff" stroke-width="2" />
    <!-- Quạt 3: 25% (90 độ), từ 180 đến 270 độ -->
    <path d="M 180,140 L 80,140 A 100 100 0 0 1 180,40 Z" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
    <!-- Tâm O -->
    <circle cx="180" cy="140" r="4.5" fill="#1e293b" />
    <text x="188" y="136" font-family="Source Sans Pro, sans-serif" font-weight="bold" font-size="14" fill="#1e293b">O</text>
    
    <!-- Nhãn bên trong quạt -->
    <text x="235" y="145" font-family="Source Sans Pro, sans-serif" font-weight="bold" font-size="16" fill="#ffffff">50%</text>
    <text x="125" y="195" font-family="Source Sans Pro, sans-serif" font-weight="bold" font-size="15" fill="#ffffff">25%</text>
    <text x="125" y="95" font-family="Source Sans Pro, sans-serif" font-weight="bold" font-size="15" fill="#ffffff">25%</text>

    <!-- Chú giải bên phải -->
    <rect x="330" y="60" width="18" height="18" rx="4" fill="#3b82f6" />
    <text x="360" y="74" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="14" fill="#1e293b">Học tập: 50% (α = 180°)</text>

    <rect x="330" y="115" width="18" height="18" rx="4" fill="#10b981" />
    <text x="360" y="129" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="14" fill="#1e293b">Thể thao: 25% (α = 90°)</text>

    <rect x="330" y="170" width="18" height="18" rx="4" fill="#f59e0b" />
    <text x="360" y="184" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="14" fill="#1e293b">Giải trí: 25% (α = 90°)</text>

    <text x="180" y="270" text-anchor="middle" font-family="Source Sans Pro, sans-serif" font-size="13" font-weight="bold" fill="#64748b">Tổng: 100% ⟷ 360°</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Mô hình cấu tạo biểu đồ hình quạt tròn — tổng các góc ở tâm luôn bằng 360°</em></p>
</div>

---

### 2. Công thức liên hệ giữa Tỉ lệ phần trăm và Góc ở tâm

Mối liên hệ giữa số đo góc ở tâm $\alpha^\circ$ và tỉ lệ phần trăm $p\%$ là quy tắc tam suất thuận:

$$\frac{\alpha}{360^\circ} = \frac{p}{100\%}$$

Từ đây, ta có hai công thức chuyển đổi cốt lõi:

> [!TIP]
> **CÔNG THỨC CHUYỂN ĐỔI HAI CHIỀU:**
> 1. **Tính góc ở tâm khi biết tỉ lệ phần trăm:**
>    $$\alpha = \frac{p}{100} \times 360^\circ = p \times 3.6^\circ$$
>    *Ý nghĩa:* Cứ mỗi $1\%$ trong biểu đồ tương ứng với một góc $3.6^\circ$ ở tâm!
> 
> 2. **Tính tỉ lệ phần trăm khi biết số đo góc ở tâm:**
>    $$p = \frac{\alpha}{360} \times 100\%$$
> 
> 3. **Tính số lượng thực tế khi biết tổng số lượng $N$:**
>    $$n_i = \frac{p_i}{100} \times N = \frac{\alpha_i}{360} \times N$$

**Bảng tra cứu nhanh các giá trị đặc biệt:**

| Tỉ lệ phần trăm ($p$) | Góc ở tâm ($\alpha$) | Dạng hình học tương ứng |
| :---: | :---: | :---: |
| $100\%$ | $360^\circ$ | Toàn bộ hình tròn |
| $50\%$ | $180^\circ$ | Một nửa hình tròn (góc bẹt) |
| $25\%$ | $90^\circ$ | Một phần tư hình tròn (góc vuông) |
| $12.5\%$ | $45^\circ$ | Một phần tám hình tròn (nửa góc vuông) |
| $10\%$ | $36^\circ$ | Một phần mười hình tròn |
| $1\%$ | $3.6^\circ$ | Đơn vị cơ sở |

---

### 3. Quy trình 4 bước vẽ Biểu đồ hình quạt tròn chuẩn xác

Để vẽ biểu đồ hình quạt tròn từ một bảng số liệu thực tế, ta thực hiện theo $4$ bước:

1. **Bước 1 (Tính tỉ lệ %):** Nếu đề bài cho số liệu tuyệt đối $n_i$, tính tỉ lệ phần trăm:
   $$p_i = \frac{n_i}{N_{\text{tổng}}} \times 100\%$$
2. **Bước 2 (Tính số đo góc ở tâm):** Tính góc ở tâm tương ứng cho từng nhóm:
   $$\alpha_i = \frac{p_i}{100} \times 360^\circ = p_i \times 3.6^\circ$$
   *Kiểm tra:* Tổng các góc $\alpha_1 + \alpha_2 + \dots + \alpha_k$ phải đúng bằng $360^\circ$.
3. **Bước 3 (Vẽ các hình quạt bằng thước đo độ):**
   - Vẽ đường tròn tâm $O$, bán kính $R$ thích hợp (thường từ $4\text{ cm}$ đến $6\text{ cm}$).
   - Vẽ một bán kính xuất phát (thường là bán kính thẳng đứng hướng lên hoặc nằm ngang).
   - Đặt tâm thước đo độ trùng tâm $O$, vạch số $0$ trùng bán kính vừa vẽ, đo và vẽ góc $\alpha_1$.
   - Từ cạnh mới vẽ, tiếp tục đo và vẽ góc $\alpha_2$, lặp lại cho đến góc cuối cùng.
4. **Bước 4 (Hoàn thiện biểu đồ):**
   - Tô màu hoặc kẻ sọc phân biệt các hình quạt.
   - Ghi tỉ lệ phần trăm (hoặc tên đối tượng) lên từng hình quạt.
   - Lập bảng chú giải (nếu cần) và viết tên tiêu đề biểu đồ rõ ràng.

---

## II. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Đọc và giải thích thông tin trên Biểu đồ hình quạt tròn

**Phương pháp giải:**
- Xác định biểu đồ nói về chủ đề gì (đọc tiêu đề).
- Đọc bảng chú giải và tỉ lệ phần trăm của từng thành phần.
- So sánh các thành phần: thành phần nào chiếm tỉ lệ cao nhất (nhiều nhất), thấp nhất (ít nhất), gấp mấy lần nhau.

#### Ví dụ 1
Biểu đồ hình quạt tròn sau biểu diễn kết quả khảo sát phương tiện đi lại đến trường của $200$ học sinh trường THCS Hòa Bình:
- Xe đạp: $45\%$
- Đi bộ: $25\%$
- Xe buýt: $20\%$
- Xe máy điện: $10\%$

a) Phương tiện nào được học sinh sử dụng nhiều nhất? Chiếm bao nhiêu phần trăm?
b) Tính số lượng học sinh sử dụng mỗi loại phương tiện trên.
c) Số học sinh đi xe đạp gấp bao nhiêu lần số học sinh đi xe máy điện?

**Lời giải chi tiết:**
a) Phương tiện được học sinh sử dụng nhiều nhất là **Xe đạp**, chiếm $45\%$ tổng số học sinh.
b) Tổng số học sinh được khảo sát là $N = 200$ học sinh.
Số học sinh đi từng phương tiện là:
- Đi xe đạp: $\frac{45}{100} \times 200 = 90$ (học sinh).
- Đi bộ: $\frac{25}{100} \times 200 = 50$ (học sinh).
- Đi xe buýt: $\frac{20}{100} \times 200 = 40$ (học sinh).
- Đi xe máy điện: $\frac{10}{100} \times 200 = 20$ (học sinh).
*(Kiểm tra: $90 + 50 + 40 + 20 = 200$ học sinh — chính xác!)*

c) Tỉ lệ học sinh đi xe đạp gấp số học sinh đi xe máy điện số lần là:
$$\frac{45\%}{10\%} = 4.5\text{ (lần)}$$
(Hoặc tính theo số học sinh: $\frac{90}{20} = 4.5\text{ lần}$).

---

### Dạng 2: Tính số đo góc ở tâm để vẽ biểu đồ

**Phương pháp giải:**
- Áp dụng công thức: $\alpha = p \times 3.6^\circ$ hoặc $\alpha = \frac{n}{N} \times 360^\circ$.
- Làm tròn góc đến độ hoặc $0.5^\circ$ nếu cần.

#### Ví dụ 2
Một cửa hàng sách thống kê số lượng sách bán được trong tháng 10 theo các thể loại như sau:

| Thể loại sách | Số lượng cuốn | Tỉ lệ phần trăm | Góc ở tâm ($\alpha$) |
| :--- | :---: | :---: | :---: |
| Sách Văn học | $120$ | ? | ? |
| Sách Khoa học | $90$ | ? | ? |
| Truyện tranh | $150$ | ? | ? |
| Sách Kỹ năng sống | $40$ | ? | ? |
| **Tổng cộng** | **$400$** | **$100\%$** | **$360^\circ$** |

Em hãy hoàn thành bảng số liệu trên để chuẩn bị vẽ biểu đồ hình quạt tròn.

**Lời giải chi tiết:**
Tổng số sách bán ra là $N = 120 + 90 + 150 + 40 = 400$ (cuốn).
Ta tính tỉ lệ phần trăm và góc ở tâm cho từng thể loại:
1. **Sách Văn học:**
   - Tỉ lệ: $p_1 = \frac{120}{400} \times 100\% = 30\%$.
   - Góc ở tâm: $\alpha_1 = 30\% \times 3.6^\circ = 108^\circ$.
2. **Sách Khoa học:**
   - Tỉ lệ: $p_2 = \frac{90}{400} \times 100\% = 22.5\%$.
   - Góc ở tâm: $\alpha_2 = 22.5\% \times 3.6^\circ = 81^\circ$.
3. **Truyện tranh:**
   - Tỉ lệ: $p_3 = \frac{150}{400} \times 100\% = 37.5\%$.
   - Góc ở tâm: $\alpha_3 = 37.5\% \times 3.6^\circ = 135^\circ$.
4. **Sách Kỹ năng sống:**
   - Tỉ lệ: $p_4 = \frac{40}{400} \times 100\% = 10\%$.
   - Góc ở tâm: $\alpha_4 = 10\% \times 3.6^\circ = 36^\circ$.

*Kiểm tra lại:*
- Tổng phần trăm: $30\% + 22.5\% + 37.5\% + 10\% = 100\%$.
- Tổng góc ở tâm: $108^\circ + 81^\circ + 135^\circ + 36^\circ = 360^\circ$. Bảng số liệu hoàn toàn chính xác!

---

### Dạng 3: Chuyển đổi qua lại giữa Biểu đồ cột và Biểu đồ hình quạt tròn

**Phương pháp giải:**
- **Từ biểu đồ cột sang quạt tròn:** Lấy giá trị từng cột chia cho tổng các cột để tính $\%$, rồi tính góc $\alpha$.
- **Từ quạt tròn sang biểu đồ cột:** Nhân tỉ lệ $\%$ với tổng quy mô để tìm độ cao từng cột.

#### Ví dụ 3
Cơ cấu chi tiêu hàng tháng của một gia đình gồm:
- Tiền ăn uống: $40\%$
- Tiền học tập của con: $25\%$
- Tiền nhà và dịch vụ tiện ích: $20\%$
- Tiết kiệm dự phòng: $15\%$

Biết rằng tổng thu nhập hàng tháng của gia đình là $24\text{ triệu đồng}$.
a) Tính số tiền gia đình chi cho mỗi khoản mục trên.
b) Nếu vẽ biểu đồ hình quạt tròn, góc ở tâm biểu diễn khoản Tiết kiệm dự phòng bằng bao nhiêu độ?

**Lời giải chi tiết:**
a) Số tiền chi cho từng khoản mục:
- Ăn uống: $\frac{40}{100} \times 24 = 9.6\text{ (triệu đồng)}$.
- Học tập: $\frac{25}{100} \times 24 = 6.0\text{ (triệu đồng)}$.
- Tiền nhà và tiện ích: $\frac{20}{100} \times 24 = 4.8\text{ (triệu đồng)}$.
- Tiết kiệm: $\frac{15}{100} \times 24 = 3.6\text{ (triệu đồng)}$.
*(Tổng: $9.6 + 6.0 + 4.8 + 3.6 = 24.0\text{ triệu đồng}$).*

b) Góc ở tâm biểu diễn khoản Tiết kiệm dự phòng ($15\%$):
$$\alpha = 15 \times 3.6^\circ = 54^\circ.$$

---

### Dạng 4: Phát hiện lỗi sai và ngụy biện hình ảnh trong Biểu đồ hình quạt tròn

**Phương pháp giải:**
Các lỗi thường gặp trong truyền thông hoặc báo cáo:
1. **Lỗi tổng phần trăm:** Tổng các số liệu $\%$ ghi trên biểu đồ khác $100\%$ (ví dụ: $98\%$ hoặc $106\%$).
2. **Lỗi tỉ lệ góc:** Một nhóm chiếm $20\%$ nhưng lại vẽ góc tù $> 90^\circ$; hoặc hai nhóm có $\%$ bằng nhau nhưng hình quạt một bên to một bên bé.
3. **Lỗi góc 3D (3D Pie Chart Distortion):** Biểu đồ 3D nghiêng làm cho các múi ở phía trước trông to hơn thực tế, đánh lừa trực giác thị giác của người xem!

#### Ví dụ 4
Quan sát một biểu đồ hình quạt tròn trên mạng xã hội về thị phần của 3 hãng điện thoại $A, B, C$:
- Hãng $A$: ghi $50\%$, góc ở tâm đo được là $120^\circ$.
- Hãng $B$: ghi $30\%$, góc ở tâm đo được là $108^\circ$.
- Hãng $C$: ghi $30\%$, góc ở tâm đo được là $132^\circ$.

Em hãy chỉ ra ít nhất hai lỗi sai nghiêm trọng của biểu đồ này.

**Lời giải chi tiết:**
1. **Lỗi thứ nhất về tổng phần trăm:**
   Tổng tỉ lệ phần trăm ghi trên biểu đồ là: $50\% + 30\% + 30\% = 110\% > 100\%$. Đây là lỗi sai cơ bản về số học thống kê.
2. **Lỗi thứ hai về tương quan giữa phần trăm và góc vẽ:**
   - Hãng $A$ chiếm $50\%$ thì góc ở tâm bắt buộc phải là một nửa vòng tròn: $\alpha_A = 180^\circ$, nhưng người vẽ lại chỉ vẽ góc nhọn/tù $120^\circ$ (thiếu mất $60^\circ$).
   - Hãng $B$ và Hãng $C$ đều có thị phần bằng nhau là $30\%$, góc ở tâm đúng phải là $30 \times 3.6^\circ = 108^\circ$. Thế nhưng Hãng $C$ lại bị vẽ thành $132^\circ$, làm múi của $C$ phình to hơn hẳn $B$, gây hiểu lầm thị giác cho người xem.

---

## III. 5 Chuyên đề Nâng cao & Ứng dụng Thực tế Đỉnh cao

### Chuyên đề 1: Quy tắc $5$ múi bánh và Biểu đồ Donut (Donut Chart) trong UI/UX

Trong thiết kế giao diện ứng dụng hiện đại (Apple, Google, Facebook), biểu đồ hình quạt tròn truyền thống thường gặp nhược điểm:
- Nếu chia quá nhiều múi ($> 6$ múi), các lát cắt trở nên li ti, người dùng rất khó phân biệt và chữ số bị đè lên nhau.
- **Quy tắc vàng của Data Visualization:** Chỉ nên chia biểu đồ hình quạt tối đa **$5$ thành phần chính**, các phần nhỏ còn lại gộp chung vào một múi gọi là **"Các thành phần khác" (Others)**.
- **Biểu đồ Donut (Donut Chart):** Khoét rỗng phần tâm hình tròn. Phần khoảng trống ở giữa được tận dụng để ghi tổng số lượng (ví dụ: Tổng dung lượng: $256\text{ GB}$ hoặc Tổng doanh thu: $10\text{ tỷ}$), giúp tăng trải nghiệm thị giác và tối ưu hóa không gian hiển thị.

---

### Chuyên đề 2: Chỉ số Herfindahl-Hirschman (HHI) — Đo lường mức độ độc quyền thị trường

Trong kinh tế học vi mô, cơ quan quản lý cạnh tranh sử dụng thị phần phần trăm $s_i\%$ từ biểu đồ quạt tròn để tính chỉ số HHI:
$$HHI = \sum_{i=1}^k s_i^2 = s_1^2 + s_2^2 + \dots + s_k^2$$
- Nếu một doanh nghiệp độc quyền $100\%$: $HHI = 100^2 = 10\ 000$.
- Nếu thị trường cạnh tranh hoàn hảo với $100$ doanh nghiệp, mỗi bên chiếm $1\%$: $HHI = 100 \times 1^2 = 100$.
- **Ý nghĩa:** Chỉ số HHI giúp Chính phủ quyết định có cho phép hai tập đoàn lớn sáp nhập (M&A) hay không nhằm chống độc quyền giá cả.

---

### Chuyên đề 3: Công thức lượng giác tính Tọa độ điểm biên trên cung tròn SVG

Để lập trình biểu đồ hình quạt tròn tự động chạy trên trang web bằng mã SVG, các kỹ sư phần mềm sử dụng hệ tọa độ cực chuyển sang Descartes:
Nếu tâm hình tròn tại $(x_0, y_0)$, bán kính $R$, góc quét bắt đầu từ $\theta_1$ đến $\theta_2$ (tính từ phương thẳng đứng $12$ giờ theo chiều kim đồng hồ):
$$x_1 = x_0 + R \sin \theta_1,\quad y_1 = y_0 - R \cos \theta_1$$
$$x_2 = x_0 + R \sin \theta_2,\quad y_2 = y_0 - R \cos \theta_2$$
Lệnh vẽ đường cong SVG là:
`d="M x0 y0 L x1 y1 A R R 0 largeArcFlag 1 x2 y2 Z"`
Trong đó `largeArcFlag = 1` nếu $(\theta_2 - \theta_1) > 180^\circ$ và bằng $0$ nếu ngược lại.

---

### Chuyên đề 4: Tỉ lệ chuyển dịch cơ cấu kinh tế (Structural Shift Analysis)

Khi so sánh biểu đồ hình quạt tròn của Việt Nam qua hai mốc thời gian (ví dụ: năm 2000 và 2026), ta theo dõi sự dịch chuyển tỉ trọng giữa ba khu vực:
1. Khu vực I: Nông, lâm, thủy sản.
2. Khu vực II: Công nghiệp và xây dựng.
3. Khu vực III: Dịch vụ.
Xu hướng chung của một quốc gia công nghiệp hóa, hiện đại hóa là tỉ trọng Khu vực I giảm dần, trong khi Khu vực II và III tăng lên, phản ánh sự phát triển của công nghệ và đời sống xã hội.

---

### Chuyên đề 5: Biểu đồ hình quạt phân cấp (Sunburst Chart)

Khi dữ liệu có tính phân cấp nhiều tầng (ví dụ: Tỉnh/Thành $\implies$ Quận/Huyện $\implies$ Phường/Xã), các nhà khoa học dữ liệu mở rộng biểu đồ quạt tròn thành **Sunburst Chart** (Biểu đồ vầng mặt trời):
- Vòng tròn trong cùng biểu thị cấp cha ($100\%$).
- Các vòng tròn đồng tâm bên ngoài chia nhỏ các múi cha thành các múi con tương ứng.
- Đây là giải pháp trực quan hóa dữ liệu cây thư mục, cơ cấu ngân sách quốc gia và phả hệ di truyền học hàng đầu hiện nay.

---

## IV. Bộ 10 câu hỏi Trắc nghiệm tương tác chuyên sâu

```quiz
type: choice
question: 'Toàn bộ hình tròn trong biểu đồ hình quạt tròn ứng với bao nhiêu phần trăm và góc ở tâm bằng bao nhiêu độ?'
options:
  - '100% và 180°'
  - '50% và 360°'
  - '100% và 360°'
  - '100% và 90°'
answer: 3
hint: 'Cả hình tròn là toàn bộ 100% và quay đủ một vòng 360°.'
explanation: 'Theo quy ước toán học, toàn bộ hình tròn biểu diễn trọn vẹn tổng thể 100%, tương ứng với số đo góc ở tâm là 360°.'
```

```quiz
type: choice
question: 'Nếu một thành phần chiếm 20% trong bảng thống kê, thì góc ở tâm của hình quạt tròn biểu diễn thành phần đó bằng bao nhiêu độ?'
options:
  - '36°'
  - '72°'
  - '54°'
  - '90°'
answer: 2
hint: 'Lấy số phần trăm nhân với 3.6°.'
explanation: 'Góc ở tâm tương ứng là: α = (20 / 100) × 360° = 20 × 3.6° = 72°.'
```

```quiz
type: choice
question: 'Một hình quạt tròn có góc ở tâm là 90°. Hỏi thành phần đó chiếm bao nhiêu phần trăm trong toàn bộ tổng thể?'
options:
  - '25%'
  - '50%'
  - '30%'
  - '15%'
answer: 1
hint: 'Góc vuông 90° là một phần tư hình tròn.'
explanation: 'Tỉ lệ phần trăm tương ứng là: p = (90 / 360) × 100% = 25%.'
```

```quiz
type: choice
question: 'Biểu đồ hình quạt tròn biểu diễn kết quả học tập của 200 học sinh. Biết tỉ lệ học sinh Xuất sắc là 15%. Số học sinh Xuất sắc là:'
options:
  - '15 học sinh'
  - '30 học sinh'
  - '45 học sinh'
  - '60 học sinh'
answer: 2
hint: 'Tính 15% của 200 học sinh.'
explanation: 'Số học sinh Xuất sắc là: (15 / 100) × 200 = 30 học sinh.'
```

```quiz
type: choice
question: 'Biểu đồ hình quạt tròn phù hợp nhất để biểu diễn thông tin nào dưới đây?'
options:
  - 'Nhiệt độ trung bình các tháng trong năm tại Hà Nội'
  - 'Sự tăng trưởng chiều cao của một bạn học sinh từ 6 tuổi đến 15 tuổi'
  - 'Tỉ lệ phần trăm cơ cấu nguồn điện phát ra của Việt Nam (Thủy điện, Nhiệt điện, Năng lượng tái tạo...)'
  - 'Số lượng huy chương vàng của 10 nước tại SEA Games'
answer: 3
hint: 'Biểu đồ quạt tròn dùng để so sánh các thành phần trong cùng một tổng thể 100%.'
explanation: 'Cơ cấu tỉ lệ các nguồn điện trong tổng sản lượng điện quốc gia (100%) là trường hợp hoàn hảo nhất để dùng biểu đồ hình quạt tròn.'
```

```quiz
type: choice
question: 'Cứ mỗi 1% trong bảng số liệu sẽ tương ứng với góc ở tâm có số đo bằng bao nhiêu độ?'
options:
  - '1°'
  - '3.6°'
  - '0.36°'
  - '18°'
answer: 2
hint: 'Lấy 360° chia cho 100%.'
explanation: 'Số đo góc ứng với 1% là: 360° / 100 = 3.6°.'
```

```quiz
type: choice
question: 'Một học sinh vẽ biểu đồ hình quạt gồm 4 thành phần với các góc ở tâm lần lượt là: 90°, 120°, 60°, 100°. Biểu đồ này đúng hay sai?'
options:
  - 'Đúng vì các góc đều dương'
  - 'Sai vì tổng các góc bằng 370° > 360°'
  - 'Đúng vì có góc 90°'
  - 'Sai vì có một góc lớn hơn 90°'
answer: 2
hint: 'Kiểm tra tổng 4 góc xem có đúng bằng 360° không.'
explanation: 'Tổng 4 góc là: 90° + 120° + 60° + 100° = 370° > 360°. Biểu đồ này sai vì tổng các góc ở tâm của một hình tròn bắt buộc phải bằng đúng 360°.'
```

```quiz
type: choice
question: 'Một biểu đồ hình quạt tròn chia thời gian trong ngày (24 giờ) của bạn Nam thành 4 phần: Học tập 8h, Ngủ 8h, Thể thao 2h, Khác 6h. Hình quạt biểu diễn thời gian Ngủ có góc ở tâm là:'
options:
  - '90°'
  - '120°'
  - '180°'
  - '150°'
answer: 2
hint: 'Tính tỉ lệ 8 giờ trên 24 giờ rồi nhân với 360°.'
explanation: 'Thời gian ngủ chiếm tỉ lệ: 8 / 24 = 1/3 ngày. Góc ở tâm tương ứng là: (1/3) × 360° = 120°.'
```

```quiz
type: choice
question: 'Trên một biểu đồ hình quạt tròn có 3 hình quạt. Biết hình quạt thứ nhất có góc 108°, hình quạt thứ hai có góc 144°. Hỏi hình quạt thứ ba chiếm bao nhiêu phần trăm?'
options:
  - '25%'
  - '30%'
  - '35%'
  - '40%'
answer: 2
hint: 'Tính góc của hình quạt thứ ba rồi đổi sang phần trăm.'
explanation: 'Góc của hình quạt thứ ba là: 360° - (108° + 144°) = 108°. Tỉ lệ phần trăm tương ứng là: (108 / 360) × 100% = 30%.'
```

```quiz
type: choice
question: 'Vì sao trong thiết kế trực quan hóa dữ liệu chuyên nghiệp, các chuyên gia khuyên không nên dùng biểu đồ hình quạt tròn dạng 3D nghiêng?'
options:
  - 'Vì biểu đồ 3D tốn nhiều mực in hơn'
  - 'Vì góc nghiêng 3D làm méo mó tỉ lệ thị giác, khiến múi ở gần trông to hơn múi ở xa'
  - 'Vì biểu đồ 3D không tô được nhiều màu sắc'
  - 'Vì máy tính không vẽ được biểu đồ 3D'
answer: 2
hint: 'Góc nhìn phối cảnh làm thay đổi diện tích biểu kiến trên màn hình.'
explanation: 'Hiệu ứng 3D tạo phối cảnh giả khiến các lát cắt ở phía trước mắt người xem trông to hơn nhiều so với giá trị phần trăm thực tế của nó, dẫn đến đánh giá sai lệch thông tin.'
```

---

## V. Đề kiểm tra 45 phút chuẩn Ma trận Đánh giá Năng lực

### Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết (40%) | Thông hiểu (30%) | Vận dụng (20%) | Vận dụng cao (10%) | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Khái niệm & Góc** | Câu 1 (1.0đ) | Câu 3 (1.5đ) | | | **2.5đ** |
| **Đọc & Phân tích** | Câu 2 (1.0đ) | Câu 4a (1.0đ) | Câu 5a (1.5đ) | | **3.5đ** |
| **Vẽ & Ứng dụng** | | Câu 4b (1.0đ) | Câu 5b (1.0đ) | Câu 6 (1.0đ) | **4.0đ** |
| **Tổng điểm** | **2.0đ** | **3.5đ** | **2.5đ** | **2.0đ** | **10.0đ** |

---

### Đề bài chi tiết

**Phần I. Trắc nghiệm khách quan (3.0 điểm)**
*Mỗi câu đúng được 0.5 điểm.*

**Câu 1:** Trong biểu đồ hình quạt tròn, góc ở tâm biểu diễn tỉ lệ $50\%$ là:
A. $90^\circ$.
B. $180^\circ$.
C. $270^\circ$.
D. $360^\circ$.

**Câu 2:** Cho góc ở tâm của một hình quạt tròn là $54^\circ$. Tỉ lệ phần trăm tương ứng của thành phần này là:
A. $10\%$.
B. $12\%$.
C. $15\%$.
D. $20\%$.

**Câu 3:** Khảo sát sở thích của $300$ học sinh, kết quả biểu đồ quạt tròn cho thấy có $35\%$ thích môn Bơi lội. Số học sinh thích bơi lội là:
A. $35$ học sinh.
B. $70$ học sinh.
C. $105$ học sinh.
D. $140$ học sinh.

**Câu 4:** Biểu đồ hình quạt tròn có $3$ thành phần. Biết thành phần thứ nhất chiếm $40\%$, thành phần thứ hai chiếm $35\%$. Góc ở tâm của thành phần thứ ba là:
A. $25^\circ$.
B. $75^\circ$.
C. $90^\circ$.
D. $100^\circ$.

**Câu 5:** Điều kiện nào sau đây bắt buộc đối với một biểu đồ hình quạt tròn đúng quy chuẩn?
A. Phải có ít nhất $10$ hình quạt.
B. Tổng các tỉ lệ phần trăm phải bằng đúng $100\%$ và tổng các góc ở tâm bằng đúng $360^\circ$.
C. Các hình quạt phải có diện tích bằng nhau.
D. Biểu đồ phải vẽ theo dạng 3D nổi.

**Câu 6:** Một hình quạt tròn chiếm $\frac{1}{6}$ diện tích hình tròn. Số đo góc ở tâm của hình quạt đó là:
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.

---

**Phần II. Tự luận (7.0 điểm)**

**Bài 1 (2.0 điểm):**
Một nông trường trồng cây ăn quả có cơ cấu diện tích như sau:
- Cây Cam: $40\%$
- Cây Bưởi: $30\%$
- Cây Xoài: $20\%$
- Cây Nhãn: $10\%$
a) Tính số đo góc ở tâm tương ứng của từng loại cây để vẽ biểu đồ hình quạt tròn.
b) Nêu các bước dùng compa và thước đo độ để vẽ biểu đồ trên vào vở.

**Bài 2 (2.5 điểm):**
Biểu đồ hình quạt tròn biểu diễn kết quả phân loại rác thải sinh hoạt hàng ngày tại một khu dân cư có tổng khối lượng $500\text{ kg}$ như sau:
- Rác hữu cơ dễ phân hủy: $55\%$
- Rác tái chế (giấy, nhựa, kim loại): $30\%$
- Rác thải nguy hại và rác khác: $15\%$
a) Tính khối lượng (đơn vị $\text{kg}$) của từng loại rác thải trên trong một ngày.
b) Nếu toàn bộ lượng rác tái chế được thu gom bán với giá bình quân $3\ 000\text{ đồng/kg}$ để gây quỹ khuyến học, hỏi mỗi ngày khu dân cư thu được bao nhiêu tiền từ rác tái chế?

**Bài 3 (1.5 điểm):**
Một bạn học sinh lập bảng số liệu chi tiêu tiền mừng tuổi dịp Tết như sau:
- Mua sách vở, đồ dùng học tập: $600\ 000\text{ đồng}$ (chiếm $50\%$)
- Mua quà tặng người thân: $240\ 000\text{ đồng}$
- Nuôi heo đất tiết kiệm: $360\ 000\text{ đồng}$
a) Tổng số tiền mừng tuổi của bạn học sinh là bao nhiêu?
b) Tính tỉ lệ phần trăm và số đo góc ở tâm của khoản "Mua quà tặng người thân" và "Nuôi heo đất tiết kiệm".

**Bài 4 (1.0 điểm — Vận dụng cao):**
Một công ty công nghệ có $4$ cổ đông sáng lập nắm giữ số cổ phần tương ứng:
- Cổ đông $A$: góc ở tâm biểu diễn cổ phần là $\alpha_A = 126^\circ$.
- Cổ đông $B$: góc ở tâm là $\alpha_B = 90^\circ$.
- Cổ đông $C$: góc ở tâm là $\alpha_C = 72^\circ$.
- Cổ đông $D$: nắm phần còn lại.
Theo điều lệ công ty, một nghị quyết chỉ được thông qua nếu nhóm cổ đông biểu quyết tán thành nắm giữ trên $65\%$ tổng số cổ phần. Nếu hai cổ đông $A$ và $B$ liên minh biểu quyết tán thành, hỏi nghị quyết đó có được thông qua không? Vì sao?

---

<details>
<summary><b>BẤM XEM ĐÁP ÁN VÀ BIỂU ĐIỂM CHI TIẾT ĐỀ KIỂM TRA</b></summary>

### Đáp án trắc nghiệm (3.0 điểm)
*Mỗi câu đúng: 0.5 điểm.*
1. **B** | 2. **C** | 3. **C** | 4. **C** | 5. **B** | 6. **C**

---

### Hướng dẫn chấm tự luận (7.0 điểm)

**Bài 1 (2.0 điểm):**
a) Tính góc ở tâm tương ứng: *(1.0 điểm)*
- Cam: $\alpha_1 = 40 \times 3.6^\circ = 144^\circ$.
- Bưởi: $\alpha_2 = 30 \times 3.6^\circ = 108^\circ$.
- Xoài: $\alpha_3 = 20 \times 3.6^\circ = 72^\circ$.
- Nhãn: $\alpha_4 = 10 \times 3.6^\circ = 36^\circ$.
*(Kiểm tra: $144^\circ + 108^\circ + 72^\circ + 36^\circ = 360^\circ$).*

b) Nêu đúng các bước vẽ bằng thước đo độ và compa: *(1.0 điểm)*
- Vẽ đường tròn tâm $O$.
- Vẽ bán kính khởi đầu $OA$.
- Đo góc $144^\circ$ từ $OA$ để vẽ quạt Cây Cam.
- Tiếp tục đo góc $108^\circ$ từ cạnh vừa vẽ cho quạt Cây Bưởi, góc $72^\circ$ cho Cây Xoài, phần còn lại $36^\circ$ là Cây Nhãn.
- Tô màu, điền $\%$ và chú giải.

**Bài 2 (2.5 điểm):**
a) Khối lượng từng loại rác: *(1.5 điểm)*
- Rác hữu cơ: $\frac{55}{100} \times 500 = 275\text{ kg}$. *(0.5 điểm)*
- Rác tái chế: $\frac{30}{100} \times 500 = 150\text{ kg}$. *(0.5 điểm)*
- Rác nguy hại & khác: $\frac{15}{100} \times 500 = 75\text{ kg}$. *(0.5 điểm)*

b) Số tiền thu được từ rác tái chế: *(1.0 điểm)*
$$150 \times 3\ 000 = 450\ 000\text{ (đồng)}.$$

**Bài 3 (1.5 điểm):**
a) Vì $600\ 000\text{ đồng}$ chiếm $50\%$ (một nửa) tổng số tiền mừng tuổi, nên tổng số tiền là: *(0.5 điểm)*
$$600\ 000 \div 50\% = 1\ 200\ 000\text{ (đồng)}.$$

b) Tỉ lệ phần trăm và góc ở tâm: *(1.0 điểm)*
- Mua quà: Tỉ lệ: $\frac{240\ 000}{1\ 200\ 000} \times 100\% = 20\%$. Góc ở tâm: $20 \times 3.6^\circ = 72^\circ$. *(0.5 điểm)*
- Heo đất: Tỉ lệ: $\frac{360\ 000}{1\ 200\ 000} \times 100\% = 30\%$. Góc ở tâm: $30 \times 3.6^\circ = 108^\circ$. *(0.5 điểm)*

**Bài 4 (1.0 điểm):**
- Tỉ lệ cổ phần của cổ đông $A$:
  $$p_A = \frac{126^\circ}{360^\circ} \times 100\% = 35\%.$$ *(0.25 điểm)*
- Tỉ lệ cổ phần của cổ đông $B$:
  $$p_B = \frac{90^\circ}{360^\circ} \times 100\% = 25\%.$$ *(0.25 điểm)*
- Tổng cổ phần của liên minh $A$ và $B$ là:
  $$35\% + 25\% = 60\%.$$ *(0.25 điểm)*
- So sánh: Vì $60\% < 65\%$ (yêu cầu điều lệ là trên $65\%$), nên nghị quyết **không được thông qua**. *(0.25 điểm)*
</details>
