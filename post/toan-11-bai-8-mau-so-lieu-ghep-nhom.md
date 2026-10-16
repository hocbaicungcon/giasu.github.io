---
title: 'Toán 11 Bài 8: Mẫu số liệu ghép nhóm - Khái niệm, bảng tần số và biểu đồ'
description: 'Lý thuyết trọng tâm Bài 8 Toán 11 Kết nối tri thức: Khái niệm mẫu số liệu ghép nhóm, bảng tần số ghép nhóm, giá trị đại diện của nhóm, quy trình chuyển mẫu số liệu không ghép nhóm sang mẫu ghép nhóm và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Thống kê 11
  - Mẫu số liệu ghép nhóm
  - Bảng tần số ghép nhóm
  - Giá trị đại diện
  - Kết nối tri thức
grade: 11
---

# Bài 8. Mẫu số liệu ghép nhóm

Chào mừng các em bước vào **Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm**!

Trong thời đại bùng nổ dữ liệu (Big Data) ngày nay, hàng triệu thông tin được thu thập mỗi giây:
- Kết quả đo chiều cao, cân nặng của $1000$ học sinh trong đợt khám sức khỏe đầu năm.
- Nồng độ bụi mịn PM2.5 được trạm quan trắc không khí đo liên tục 24/7 suốt một tháng.
- Thời gian chạy cự ly $100\text{ m}$ của hàng trăm vận động viên điền kinh (đo chính xác đến phần trăm giây).
- Mức tiêu thụ điện năng (kWh) của hàng vạn hộ gia đình trong một thành phố.

Nếu ghi lại từng số liệu rời rạc, chúng ta sẽ có một danh sách khổng lồ, rối rắm và gần như không thể rút ra được bất kỳ nhận xét trực quan nào. Để giải quyết vấn đề này, các nhà thống kê đã phát minh ra phương pháp **ghép nhóm số liệu**. Bài học này sẽ giúp các em làm chủ kỹ năng biểu diễn và phân tích mẫu số liệu ghép nhóm một cách khoa học nhất!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: MẪU SỐ LIỆU GHÉP NHÓM</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Nhóm số liệu</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhóm thường có dạng nửa khoảng $[a_i; a_{i+1})$.<br>• $a_i$ là đầu mút trái, $a_{i+1}$ là đầu mút phải.<br>• Độ dài nhóm: $L_i = a_{i+1} - a_i$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Giá trị đại diện $c_i$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $c_i = \frac{a_i + a_{i+1}}{2}$ (trung bình cộng 2 đầu mút).<br>• Dùng để thay thế cho tất cả các phần tử trong nhóm khi tính toán số trung bình.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Bảng tần số ghép nhóm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tần số $m_i$:</strong> Số lượng phần tử thuộc nhóm $i$.<br>• <strong>Kích thước mẫu:</strong> $n = m_1 + m_2 + \dots + m_k$.<br>• <strong>Tần số tương đối:</strong> $f_i = \frac{m_i}{n} \times 100\%$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quy trình ghép nhóm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bước 1: Tìm $x_{\min}, x_{\max}$ và tính khoảng biến thiên $R$.<br>• Bước 2: Chọn số nhóm $k$ hợp lý (thường $k \in [5; 8]$).<br>• Bước 3: Xác định độ dài nhóm $L \approx \frac{R}{k}$.<br>• Bước 4: Đếm tần số cho từng nhóm.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khoảng giá trị:** Nhóm số liệu $[150; 155)$ bao gồm những giá trị $x$ thỏa mãn điều kiện gì?
2. **Đầu mút phải:** Nếu một học sinh có chiều cao đúng $155\text{ cm}$, bạn ấy sẽ được xếp vào nhóm $[150; 155)$ hay nhóm $[155; 160)$?
3. **Giá trị đại diện:** Giá trị đại diện của nhóm $[20; 30)$ là bao nhiêu?
4. **Độ dài nhóm:** Độ dài của nhóm $[45; 50)$ bằng bao nhiêu?
5. **Tổng tần số:** Nếu một mẫu số liệu gồm 40 học sinh được chia thành 4 nhóm với tần số lần lượt là $8, 15, 12, x$, thì $x$ bằng bao nhiêu?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Thỏa mãn $150 \le x < 155$.
> 2. Được xếp vào nhóm $[155; 160)$ (vì nhóm trước không lấy dấu bằng tại đầu mút phải $155$).
> 3. Giá trị đại diện là $c = \frac{20 + 30}{2} = 25$.
> 4. Độ dài nhóm là $L = 50 - 45 = 5$.
> 5. Tổng tần số phải bằng kích thước mẫu: $8 + 15 + 12 + x = 40 \Rightarrow 35 + x = 40 \Rightarrow x = 5$.

---

## I. Mẫu số liệu ghép nhóm là gì?

### 1. Định nghĩa

- **Mẫu số liệu ghép nhóm** là mẫu số liệu được cho dưới dạng bảng phân bố tần số của các nhóm số liệu.
- Mỗi nhóm số liệu là một tập hợp con gồm các giá trị của mẫu số liệu được ghép lại với nhau, thường được cho dưới dạng nửa khoảng $[a_i; a_{i+1})$, với $a_i < a_{i+1}$.
  - Nhóm đầu tiên có thể là đoạn $[a_1; a_2]$.
  - Nhóm cuối cùng có thể là đoạn $[a_k; a_{k+1}]$.
- $a_i$ gọi là **đầu mút trái**, $a_{i+1}$ gọi là **đầu mút phải** của nhóm $[a_i; a_{i+1})$.
- Hiệu số $L_i = a_{i+1} - a_i$ gọi là **độ dài của nhóm**. Thông thường trong thực tế, người ta chọn các nhóm có độ dài bằng nhau.

### 2. Giá trị đại diện của nhóm

> [!IMPORTANT]
> **Quy tắc tính Giá trị đại diện:**  
> Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung bình cộng của hai đầu mút:
> $$c_i = \frac{a_i + a_{i+1}}{2}$$
> Giá trị đại diện đóng vai trò là giá trị tiêu biểu thay mặt cho toàn bộ các phần tử thuộc nhóm đó trong các phép tính toán số học sau này.

---

## II. Bảng tần số và Bảng tần số tương đối ghép nhóm

Một mẫu số liệu ghép nhóm gồm $k$ nhóm thường được trình bày dưới dạng bảng:

| Nhóm | $[a_1; a_2)$ | $[a_2; a_3)$ | $\dots$ | $[a_k; a_{k+1})$ |
| :--- | :---: | :---: | :---: | :---: |
| **Giá trị đại diện ($c_i$)** | $c_1$ | $c_2$ | $\dots$ | $c_k$ |
| **Tần số ($m_i$)** | $m_1$ | $m_2$ | $\dots$ | $m_k$ |
| **Tần số tương đối ($f_i$)** | $f_1$ | $f_2$ | $\dots$ | $f_k$ |

Trong đó:
- $m_i$ là **tần số** của nhóm thứ $i$ (số lượng quan sát rơi vào nhóm $[a_i; a_{i+1})$).
- $n = m_1 + m_2 + \dots + m_k = \sum_{i=1}^k m_i$ là **cỡ mẫu** (kích thước mẫu).
- $f_i = \frac{m_i}{n} \times 100\%$ là **tần số tương đối** (tỉ lệ phần trăm) của nhóm thứ $i$.  
  Tổng các tần số tương đối luôn bằng $100\%$: $\sum_{i=1}^k f_i = 100\%$.

---

## III. Các bước ghép nhóm một mẫu số liệu không ghép nhóm

Khi có trong tay một tập dữ liệu thô gồm $n$ giá trị rời rạc $x_1, x_2, \dots, x_n$, ta thực hiện theo 4 bước chuẩn sau:

> [!NOTE]
> **Quy trình 4 bước ghép nhóm dữ liệu:**
> - **Bước 1 (Xác định khoảng biến thiên):**  
>   Tìm giá trị nhỏ nhất $x_{\min}$ và giá trị lớn nhất $x_{\max}$. Khoảng biến thiên là:
>   $$R = x_{\max} - x_{\min}$$
> - **Bước 2 (Chọn số nhóm $k$):**  
>   Tùy theo cỡ mẫu $n$, chọn số lượng nhóm $k$ thích hợp (thông thường từ $5$ đến $8$ nhóm).  
>   *(Nếu chia quá ít nhóm thì làm mất đặc trưng dữ liệu, nếu chia quá nhiều nhóm thì dữ liệu bị phân tán, không thấy được quy luật tổng thể)*.
> - **Bước 3 (Xác định độ dài nhóm $L$):**  
>   Tính độ dài nhóm sơ bộ $L \approx \frac{R}{k}$. Thường làm tròn lên một số nguyên hoặc số thập phân tròn trịa. Chọn đầu mút trái $a_1 \le x_{\min}$ và đầu mút phải của nhóm cuối $a_{k+1} > x_{\max}$.
> - **Bước 4 (Đếm tần số và lập bảng):**  
>   Rà soát từng số liệu thô và phân loại vào các nhóm thích hợp, đếm tần số $m_i$ cho từng nhóm.

---

## IV. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Đọc hiểu và khai thác thông tin từ bảng số liệu ghép nhóm

#### Ví dụ 1:
Kết quả khảo sát thời gian sử dụng điện thoại thông minh mỗi ngày (đơn vị: phút) của $50$ học sinh lớp 11 được ghi lại trong bảng sau:

| Thời gian (phút) | $[30; 60)$ | $[60; 90)$ | $[90; 120)$ | $[120; 150)$ | $[150; 180)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh (Tần số)** | $6$ | $14$ | $18$ | $8$ | $4$ |

a) Xác định cỡ mẫu $n$. Có bao nhiêu nhóm số liệu và độ dài của mỗi nhóm bằng bao nhiêu?  
b) Tính giá trị đại diện của từng nhóm số liệu.  
c) Có bao nhiêu học sinh sử dụng điện thoại từ $90\text{ phút}$ trở lên mỗi ngày? Tỉ lệ phần trăm tương ứng là bao nhiêu?

#### Lời giải chi tiết:
**a)** Cỡ mẫu $n = 6 + 14 + 18 + 8 + 4 = 50$ (học sinh).  
Có $5$ nhóm số liệu. Độ dài của mỗi nhóm là:
$$L = 60 - 30 = 90 - 60 = 30\text{ (phút)}$$

**b)** Giá trị đại diện của các nhóm:
- Nhóm 1 $[30; 60)$: $c_1 = \frac{30 + 60}{2} = 45$.
- Nhóm 2 $[60; 90)$: $c_2 = \frac{60 + 90}{2} = 75$.
- Nhóm 3 $[90; 120)$: $c_3 = \frac{90 + 120}{2} = 105$.
- Nhóm 4 $[120; 150)$: $c_4 = \frac{120 + 150}{2} = 135$.
- Nhóm 5 $[150; 180)$: $c_5 = \frac{150 + 180}{2} = 165$.

**c)** Số học sinh sử dụng điện thoại từ $90\text{ phút}$ trở lên gồm các bạn thuộc nhóm 3, nhóm 4 và nhóm 5:
$$N = 18 + 8 + 4 = 30\text{ (học sinh)}$$
Tỉ lệ phần trăm tương ứng là:
$$f = \frac{30}{50} \times 100\% = 60\%$$

---

### Dạng 2: Chuyển đổi mẫu số liệu thô thành mẫu số liệu ghép nhóm

#### Ví dụ 2:
Điểm kiểm tra môn Toán giữa học kỳ 1 của 20 học sinh lớp 11A được ghi nhận như sau:
$$5.2; \quad 6.0; \quad 7.5; \quad 8.0; \quad 4.5; \quad 9.0; \quad 6.5; \quad 7.0; \quad 8.5; \quad 5.5;$$
$$7.2; \quad 6.8; \quad 8.2; \quad 9.5; \quad 4.8; \quad 6.2; \quad 7.8; \quad 8.8; \quad 5.8; \quad 7.0.$$

Hãy ghép mẫu số liệu trên thành 5 nhóm có độ dài bằng nhau, với nhóm đầu tiên là $[4; 5.5)$. Lập bảng tần số và bảng tần số tương đối ghép nhóm.

#### Lời giải chi tiết:
- Giá trị nhỏ nhất là $x_{\min} = 4.5$, giá trị lớn nhất là $x_{\max} = 9.5$.
- Với nhóm đầu tiên là $[4; 5.5)$, độ dài mỗi nhóm là $L = 5.5 - 4 = 1.5$.
- 5 nhóm liên tiếp là:
  1. Nhóm 1: $[4; 5.5)$
  2. Nhóm 2: $[5.5; 7.0)$
  3. Nhóm 3: $[7.0; 8.5)$
  4. Nhóm 4: $[8.5; 10.0]$ *(lấy cả đầu mút 10.0 cho nhóm cuối)*

Tiến hành kiểm đếm tần số từng nhóm:
- Nhóm $[4; 5.5)$: gồm các điểm $\{4.5; 4.8; 5.2\}$ $\Rightarrow$ có $3$ học sinh ($f_1 = \frac{3}{20} \times 100\% = 15\%$).
- Nhóm $[5.5; 7.0)$: gồm $\{5.5; 5.8; 6.0; 6.2; 6.5; 6.8\}$ $\Rightarrow$ có $6$ học sinh ($f_2 = \frac{6}{20} \times 100\% = 30\%$).
- Nhóm $[7.0; 8.5)$: gồm $\{7.0; 7.0; 7.2; 7.5; 7.8; 8.0; 8.2\}$ $\Rightarrow$ có $7$ học sinh ($f_3 = \frac{7}{20} \times 100\% = 35\%$).
- Nhóm $[8.5; 10.0]$: gồm $\{8.5; 8.8; 9.0; 9.5\}$ $\Rightarrow$ có $4$ học sinh ($f_4 = \frac{4}{20} \times 100\% = 20\%$).

**Bảng tần số và tần số tương đối ghép nhóm:**

| Điểm số | $[4.0; 5.5)$ | $[5.5; 7.0)$ | $[7.0; 8.5)$ | $[8.5; 10.0]$ | **Tổng** |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Giá trị đại diện** | $4.75$ | $6.25$ | $7.75$ | $9.25$ | — |
| **Tần số (học sinh)** | $3$ | $6$ | $7$ | $4$ | **20** |
| **Tần số tương đối (%)** | $15\%$ | $30\%$ | $35\%$ | $20\%$ | **100%** |

---

### Dạng 3: Ứng dụng thực tế: Quan trắc chất lượng không khí đô thị

#### Bài toán thực tế:
Trạm quan trắc môi trường đo nồng độ bụi mịn PM2.5 ($\mu\text{g/m}^3$) tại một ngã tư giao thông trọng điểm trong $30\text{ ngày}$ của tháng 10. Số liệu ghép nhóm thu được như sau:

| Nồng độ PM2.5 ($\mu\text{g/m}^3$) | $[0; 25)$ | $[25; 50)$ | $[50; 75)$ | $[75; 100)$ | $[100; 150)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Đánh giá mức độ** | Tốt | Trung bình | Kém | Xấu | Rất xấu |
| **Số ngày (Tần số)** | $5$ | $12$ | $8$ | $3$ | $2$ |

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Tính tỉ lệ phần trăm số ngày không khí ở mức "Tốt" và "Trung bình" trong tháng.<br>
2. Theo quy chuẩn y tế, những ngày có nồng độ PM2.5 từ $50\mu\text{g/m}^3$ trở lên khuyến cáo người già và trẻ nhỏ hạn chế ra ngoài đường. Trong tháng có bao nhiêu ngày cần phát cảnh báo này?
</div>

#### Lời giải chi tiết:
1. Số ngày không khí ở mức Tốt và Trung bình:
   $$n_{\text{an toàn}} = 5 + 12 = 17\text{ (ngày)}$$
   Tỉ lệ phần trăm:
   $$P = \frac{17}{30} \times 100\% \approx 56.67\%$$

2. Số ngày có nồng độ từ $50\mu\text{g/m}^3$ trở lên (thuộc các nhóm $[50; 75), [75; 100), [100; 150)$):
   $$n_{\text{cảnh báo}} = 8 + 3 + 2 = 13\text{ (ngày)}$$
   Như vậy, trong tháng có tới **$13\text{ ngày}$** (chiếm $43.33\%$) trạm quan trắc cần phát cảnh báo sức khỏe đến người dân.

---

## V. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị đại diện của nhóm [40; 60) là:",
  "options": [
    "A. 45",
    "B. 50",
    "C. 55",
    "D. 20"
  ],
  "answer": "B. 50",
  "explanation": "Giá trị đại diện c = (40 + 60) / 2 = 50."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Độ dài của nhóm [12.5; 17.5) là:",
  "options": [
    "A. 4",
    "B. 5",
    "C. 6",
    "D. 15"
  ],
  "answer": "B. 5",
  "explanation": "Độ dài nhóm L = 17.5 - 12.5 = 5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một mẫu số liệu có cỡ mẫu n = 100. Tần số của nhóm [10; 20) là 25. Tần số tương đối của nhóm này là:",
  "options": [
    "A. 2.5%",
    "B. 25%",
    "C. 50%",
    "D. 0.25%"
  ],
  "answer": "B. 25%",
  "explanation": "Tần số tương đối f = (25 / 100) * 100% = 25%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Giá trị x = 160 thuộc vào nhóm nào dưới đây?",
  "options": [
    "A. [150; 160)",
    "B. [160; 170)",
    "C. (160; 170]",
    "D. [140; 150)"
  ],
  "answer": "B. [160; 170)",
  "explanation": "Nhóm [160; 170) bao gồm các giá trị thỏa mãn 160 ≤ x < 170, nên số 160 thuộc nhóm này. Còn nhóm [150; 160) chỉ lấy x < 160."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho mẫu số liệu ghép nhóm gồm 4 nhóm có tần số lần lượt là 12, 18, 14, 6. Kích thước mẫu n bằng:",
  "options": [
    "A. 40",
    "B. 48",
    "C. 50",
    "D. 60"
  ],
  "answer": "C. 50",
  "explanation": "n = 12 + 18 + 14 + 6 = 50."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Khoảng biến thiên của mẫu số liệu thô có x_min = 12 và x_max = 52 là:",
  "options": [
    "A. 40",
    "B. 64",
    "C. 32",
    "D. 20"
  ],
  "answer": "A. 40",
  "explanation": "R = x_max - x_min = 52 - 12 = 40."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Nếu khoảng biến thiên R = 40 và ta muốn chia thành 5 nhóm có độ dài bằng nhau thì độ dài mỗi nhóm là:",
  "options": [
    "A. 5",
    "B. 8",
    "C. 10",
    "D. 4"
  ],
  "answer": "B. 8",
  "explanation": "Độ dài mỗi nhóm L = R / k = 40 / 5 = 8."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tổng các tần số tương đối f_1 + f_2 + ... + f_k của tất cả các nhóm trong một bảng phân bố luôn bằng:",
  "options": [
    "A. 1%",
    "B. 10%",
    "C. 50%",
    "D. 100%"
  ],
  "answer": "D. 100%",
  "explanation": "Tổng tần số tương đối của toàn bộ mẫu số liệu luôn bằng 100% (hay bằng 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Bảng thống kê khối lượng của 30 quả cam cho thấy nhóm [120; 140) gam có 9 quả. Tỉ lệ phần trăm cam thuộc nhóm này là:",
  "options": [
    "A. 20%",
    "B. 25%",
    "C. 30%",
    "D. 35%"
  ],
  "answer": "C. 30%",
  "explanation": "f = (9 / 30) * 100% = 30%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Ý nghĩa chính của việc chuyển mẫu số liệu thô thành mẫu số liệu ghép nhóm là gì?",
  "options": [
    "A. Làm tăng độ chính xác tuyệt đối của từng cá thể",
    "B. Thu gọn, làm nổi bật phân bố tổng thể của tập dữ liệu lớn",
    "C. Để loại bỏ các giá trị lớn nhất và nhỏ nhất",
    "D. Để không phải vẽ biểu đồ"
  ],
  "answer": "B. Thu gọn, làm nổi bật phân bố tổng thể của tập dữ liệu lớn",
  "explanation": "Khi dữ liệu quá lớn hoặc liên tục, ghép nhóm giúp thu gọn thông tin, dễ dàng nhận diện hình dạng phân bố và quy luật phân tán."
}'></div>

---

## VI. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho bảng tần số ghép nhóm về thời gian tự học ở nhà mỗi ngày của 60 học sinh:**

| Thời gian (giờ) | $[0.5; 1.5)$ | $[1.5; 2.5)$ | $[2.5; 3.5)$ | $[3.5; 4.5)$ |
| :--- | :---: | :---: | :---: | :---: |
| **Số học sinh** | $8$ | $22$ | $20$ | $10$ |

   a) Tìm giá trị đại diện của từng nhóm.  
   b) Tính tần số tương đối của mỗi nhóm.  
   c) Có bao nhiêu phần trăm học sinh tự học từ $2.5\text{ giờ}$ trở lên mỗi ngày?

2. **Thu thập dữ liệu về cự ly nhảy xa (mét) của 16 học sinh:**
   $$3.2; \; 3.5; \; 3.8; \; 4.1; \; 3.3; \; 4.2; \; 3.9; \; 4.5; \; 3.7; \; 4.0; \; 3.6; \; 4.3; \; 3.4; \; 4.4; \; 3.9; \; 4.6.$$
   Hãy chia dữ liệu trên thành $4$ nhóm có độ dài bằng nhau bắt đầu từ $[3.0; 3.5)$. Lập bảng tần số ghép nhóm.
