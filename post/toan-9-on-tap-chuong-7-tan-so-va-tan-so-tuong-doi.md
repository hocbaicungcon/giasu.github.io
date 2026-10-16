---
title: 'Ôn tập Chương 7: Tần số và Tần số tương đối - Ma trận Đề thi, Tổng ôn Toàn diện & Đề kiểm tra 45 phút'
description: 'Tổng ôn toàn diện Chương 7 Toán 9: Bảng tần số, tần số tương đối, biểu đồ cột, biểu đồ đoạn thẳng, biểu đồ quạt tròn, dữ liệu ghép nhóm và Histogram. Kèm ma trận đề thi 45 phút chuẩn Bộ GD&ĐT, 12 câu trắc nghiệm tương tác và tự luận có barem điểm chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Thống kê 9
  - Tần số
  - Tần số tương đối
  - Biểu đồ quạt tròn
  - Histogram
  - Ôn tập chương 7
  - Kết nối tri thức
grade: 9
---

# Ôn tập Chương 7. Tần số và tần số tương đối

Chào mừng các em học sinh lớp 9 đến với bài tổng ôn tập **Chương 7: Tần số và tần số tương đối** — cầu nối quan trọng giữa Toán học nhà trường với khoa học phân tích dữ liệu thực tế!

Nếu như các chương trước tập trung vào các phép biến đổi đại số và hình học thuần túy, thì Chương 7 trang bị cho các em tư duy định lượng, kỹ năng thống kê mô tả để giải mã dữ liệu thực tiễn:
1. **Bài 22 (Bảng tần số và biểu đồ tần số):** Thu thập số liệu thô, xác định cỡ mẫu $N$, kiểm đếm tần số $m$, tìm Mốt ($M_o$), vẽ biểu đồ cột và biểu đồ đoạn thẳng để phản ánh quy mô và xu hướng biến thiên.
2. **Bài 23 (Bảng tần số tương đối và biểu đồ tần số tương đối):** Chuyển đổi số liệu tuyệt đối sang tỉ lệ phần trăm ($f = \frac{m}{N} \times 100\%$), tính góc ở tâm ($n^\circ = 360^\circ \times f$) để vẽ biểu đồ hình quạt tròn (Pie Chart) và biểu đồ cột tương đối, ứng dụng so sánh hai tập dữ liệu khác quy mô mẫu.
3. **Bài 24 (Bảng tần số, tần số tương đối ghép nhóm và biểu đồ ghép nhóm):** Xử lý số liệu liên tục và dữ liệu lớn thông qua chia nhóm nửa khoảng $[a; b)$, tính giá trị đại diện $c = \frac{a+b}{2}$, vẽ biểu đồ cột liền kề (Histogram), đa giác tần số và ước lượng số trung bình cộng $\bar{x}$.

Bài viết này hệ thống hóa toàn bộ kiến thức qua bản đồ tư duy, cung cấp ma trận kiểm tra chuẩn định dạng Bộ GD&ĐT, kèm **Đề kiểm tra 45 phút** (Trắc nghiệm tương tác 3 điểm + Tự luận phân hóa 7 điểm) có barem chấm điểm chi tiết đến từng $0,25$ điểm.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ HỆ THỐNG KIẾN THỨC CHƯƠNG 7 (TOÁN 9)</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tần số & Biểu đồ Tần số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tần số $m$: Số lần xuất hiện của giá trị.<br>• Cỡ mẫu $N = \sum m_i$. Mốt $M_o$: Giá trị có $m$ lớn nhất.<br>• Biểu đồ cột: So sánh số lượng tuyệt đối.<br>• Biểu đồ đoạn thẳng: Thể hiện xu hướng biến đổi.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tần số Tương đối & Quạt tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tỉ số phần trăm: $f = \frac{m}{N} \times 100\%$. Tổng $\sum f_i = 100\%$.<br>• Góc ở tâm hình quạt: $n^\circ = 360^\circ \times f = 360^\circ \times \frac{m}{N}$.<br>• Dùng so sánh cơ cấu hai mẫu có cỡ mẫu khác nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dữ liệu Ghép nhóm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhóm nửa khoảng $[a; b)$ ($a \le x < b$).<br>• Độ dài nhóm: $L = b - a$.<br>• Giá trị đại diện: $c = \frac{a+b}{2}$.<br>• Trung bình ước lượng: $\bar{x} \approx \frac{\sum c_i m_i}{N}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu đồ Histogram & Đa giác</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Histogram:</strong> Cột liền kề nhau không có khe hở, đáy là $[a; b)$, chiều cao là $m_i$ hoặc $f_i\%$.<br>• <strong>Đa giác tần số:</strong> Nối các đỉnh $(c_i; m_i)$ bằng các đoạn thẳng liên tiếp.</p>
    </div>
  </div>
</div>

---

## Ma trận Đề kiểm tra 45 phút Chương 7 (Chuẩn Bộ GD&ĐT)

| Chủ đề / Mạch kiến thức | Nhận biết (TNKQ) | Thông hiểu (TNKQ + TL) | Vận dụng (TL) | Vận dụng cao (TL) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Bảng tần số & Biểu đồ tần số** | 2 câu TN (0,5đ) | 1 câu TN (0,25đ) + 1,0đ TL | 0,5đ TL | — | **2,25đ** |
| **2. Tần số tương đối & Biểu đồ quạt tròn** | 2 câu TN (0,5đ) | 2 câu TN (0,5đ) + 1,0đ TL | 1,0đ TL | 0,5đ TL | **3,50đ** |
| **3. Dữ liệu ghép nhóm & Biểu đồ Histogram** | 2 câu TN (0,5đ) | 3 câu TN (0,75đ) + 1,5đ TL | 1,0đ TL | 0,5đ TL | **4,25đ** |
| **Tổng số câu / điểm** | **6 câu (1,5đ)** | **6 câu TN (1,5đ) + 3,5đ TL** | **2,5đ TL** | **1,0đ TL** | **10,0 điểm** |
| **Tỉ lệ phần trăm** | **15%** | **50%** | **25%** | **10%** | **100%** |

---

## Đề kiểm tra 45 phút: Chương 7 - Toán 9

### Phần I. Trắc nghiệm khách quan (3,0 điểm — 12 câu, mỗi câu 0,25đ)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Số lần xuất hiện của một giá trị trong mẫu số liệu thống kê được gọi là:",
  "options": [
    "A. Cỡ mẫu",
    "B. Tần số",
    "C. Tần số tương đối",
    "D. Giá trị đại diện"
  ],
  "answer": "B. Tần số",
  "explanation": "Theo định nghĩa, số lần xuất hiện của một giá trị trong toàn bộ mẫu được gọi là tần số của giá trị đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tổng tất cả các tần số của các giá trị trong một cuộc điều tra chính là:",
  "options": [
    "A. Cỡ mẫu N",
    "B. Mốt của mẫu số liệu",
    "C. 100%",
    "D. Số trung bình cộng"
  ],
  "answer": "A. Cỡ mẫu N",
  "explanation": "Tổng tất cả các tần số m_1 + m_2 + ... + m_k luôn bằng cỡ mẫu N."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Mốt (Mo) của mẫu số liệu là giá trị có đặc điểm nào sau đây?",
  "options": [
    "A. Có giá trị bằng số lớn nhất trong mẫu",
    "B. Có tần số xuất hiện lớn nhất trong mẫu",
    "C. Nằm ở chính giữa dãy số liệu",
    "D. Bằng trung bình cộng của giá trị lớn nhất và nhỏ nhất"
  ],
  "answer": "B. Có tần số xuất hiện lớn nhất trong mẫu",
  "explanation": "Mốt của mẫu số liệu là giá trị có tần số lớn nhất."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một nhóm học sinh gồm 60 em có 18 em yêu thích môn Bóng đá. Tần số tương đối của học sinh thích Bóng đá là:",
  "options": [
    "A. 18%",
    "B. 30%",
    "C. 25%",
    "D. 35%"
  ],
  "answer": "B. 30%",
  "explanation": "f = (18 / 60) * 100% = 0,3 * 100% = 30%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong biểu đồ hình quạt tròn, một hình quạt có số đo góc ở tâm là 72°. Tần số tương đối ứng với hình quạt này là:",
  "options": [
    "A. 20%",
    "B. 25%",
    "C. 15%",
    "D. 18%"
  ],
  "answer": "A. 20%",
  "explanation": "f = 72° / 360° * 100% = (1 / 5) * 100% = 20%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Trên biểu đồ quạt tròn, góc ở tâm đại diện cho tần số tương đối 45% có số đo bằng:",
  "options": [
    "A. 90°",
    "B. 162°",
    "C. 145°",
    "D. 180°"
  ],
  "answer": "B. 162°",
  "explanation": "n° = 360° * 45% = 360° * 0,45 = 162°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giá trị đại diện của nhóm số liệu ghép nhóm [30; 50) là:",
  "options": [
    "A. 30",
    "B. 50",
    "C. 40",
    "D. 20"
  ],
  "answer": "C. 40",
  "explanation": "Giá trị đại diện c = (30 + 50) / 2 = 40."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho nhóm số liệu [15; 25). Giá trị nào sau đây KHÔNG thuộc nhóm này?",
  "options": [
    "A. 15",
    "B. 20,5",
    "C. 24,9",
    "D. 25"
  ],
  "answer": "D. 25",
  "explanation": "Nửa khoảng [15; 25) chỉ chứa các phần tử x thỏa mãn 15 <= x < 25. Giá trị 25 không thuộc nhóm này (nó thuộc nhóm [25; 35))."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Độ dài của nhóm số liệu [200; 250) bằng:",
  "options": [
    "A. 50",
    "B. 225",
    "C. 25",
    "D. 450"
  ],
  "answer": "A. 50",
  "explanation": "Độ dài nhóm L = 250 - 200 = 50."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Điểm đặc trưng nhất của biểu đồ tần số ghép nhóm dạng cột (Histogram) là:",
  "options": [
    "A. Các cột cách rời nhau một khoảng cố định",
    "B. Các cột hình chữ nhật nằm liền kề sát nhau không có khe hở",
    "C. Trục đứng luôn ghi góc ở tâm",
    "D. Chỉ vẽ được khi cỡ mẫu dưới 10"
  ],
  "answer": "B. Các cột hình chữ nhật nằm liền kề sát nhau không có khe hở",
  "explanation": "Do dữ liệu là các nhóm liên tiếp bao trùm miền số liệu liên tục nên các cột hình chữ nhật trong Histogram luôn được dựng liền kề sát nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Để vẽ đa giác tần số ghép nhóm, ta nối các điểm có tọa độ nào sau đây bằng các đoạn thẳng liên tiếp?",
  "options": [
    "A. (a; m) với a là mút trái của nhóm",
    "B. (b; m) với b là mút phải của nhóm",
    "C. (c; m) với c là giá trị đại diện của nhóm",
    "D. (c; N) với N là cỡ mẫu"
  ],
  "answer": "C. (c; m) với c là giá trị đại diện của nhóm",
  "explanation": "Mỗi nhóm [a_i; b_i) được biểu diễn bởi điểm M_i(c_i; m_i) với c_i = (a_i + b_i) / 2 là giá trị đại diện của nhóm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Mẫu số liệu ghép nhóm có 3 nhóm: [0; 10) có 5 phần tử, [10; 20) có 10 phần tử, [20; 30) có 5 phần tử. Số trung bình cộng ước lượng của mẫu số liệu là:",
  "options": [
    "A. 15",
    "B. 10",
    "C. 20",
    "D. 12,5"
  ],
  "answer": "A. 15",
  "explanation": "Giá trị đại diện lần lượt là 5, 15, 25. Cỡ mẫu N = 5 + 10 + 5 = 20. Số trung bình ước lượng: x_tb = (5*5 + 15*10 + 25*5) / 20 = (25 + 150 + 125) / 20 = 300 / 20 = 15."
}'></div>

---

### Phần II. Tự luận (7,0 điểm — 4 bài toán)

#### Bài 1 (1,5 điểm): Thống kê điểm kiểm tra & Bảng tần số
Điểm kiểm tra giữa học kỳ II môn Toán của $30$ học sinh lớp 9C được ghi lại như sau:
$$7, 8, 9, 6, 8, 10, 7, 8, 9, 8, 6, 7, 8, 9, 10, 8, 7, 6, 9, 8, 7, 8, 9, 8, 10, 7, 8, 6, 9, 8$$

a) Lập bảng tần số của mẫu số liệu trên.  
b) Tìm mốt của mẫu số liệu và nêu ý nghĩa thực tế.

---

#### Bài 2 (2,0 điểm): Bảng tần số tương đối & Biểu đồ hình quạt tròn
Một siêu thị điện máy thống kê số lượng các loại TV thông minh bán ra trong tháng 1 như sau:
- TV kích cỡ 43 inch: $40$ chiếc.
- TV kích cỡ 50 inch: $60$ chiếc.
- TV kích cỡ 55 inch: $70$ chiếc.
- TV kích cỡ 65 inch trở lên: $30$ chiếc.

a) Tính cỡ mẫu $N$ và lập bảng tần số tương đối của các loại TV bán ra.  
b) Tính số đo góc ở tâm tương ứng của từng loại TV trên biểu đồ hình quạt tròn.  
c) Giả sử sang tháng 2, tổng số TV bán ra tăng $20\%$ so với tháng 1 và tỉ lệ TV 55 inch bán ra tăng lên thành $40\%$. Hỏi trong tháng 2 siêu thị đã bán được bao nhiêu chiếc TV 55 inch?

---

#### Bài 3 (2,5 điểm): Số liệu ghép nhóm & Biểu đồ Histogram
Khảo sát thời gian truy cập Internet phục vụ học tập mỗi ngày (đơn vị: phút) của $50$ học sinh khối 9 thu được kết quả:

| Thời gian (phút) | $[0; 30)$ | $[30; 60)$ | $[60; 90)$ | $[90; 120)$ | $[120; 150]$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh ($m$)** | $5$ | $15$ | $18$ | $8$ | $4$ |

a) Xác định giá trị đại diện của từng nhóm và lập bảng tần số tương đối ghép nhóm.  
b) Ước lượng thời gian truy cập Internet trung bình mỗi ngày của một học sinh khối 9.  
c) Nhóm học sinh truy cập từ $60$ phút trở lên chiếm bao nhiêu phần trăm?

---

#### Bài 4 (1,0 điểm - Vận dụng cao): So sánh & Quyết định dựa trên Dữ liệu
Hai dây chuyền sản xuất vi mạch $A$ và $B$ cùng đóng gói linh kiện. Kiểm tra ngẫu nhiên chất lượng sản phẩm của hai dây chuyền thu được số liệu về số sản phẩm lỗi:
- Dây chuyền $A$: Kiểm tra $250$ sản phẩm, ghi nhận $15$ sản phẩm lỗi.
- Dây chuyền $B$: Kiểm tra $400$ sản phẩm, ghi nhận $22$ sản phẩm lỗi.

a) Dựa vào tần số tương đối, dây chuyền nào hoạt động đạt độ chính xác cao hơn (tỉ lệ lỗi thấp hơn)?  
b) Để nâng cao chất lượng toàn diện, ban giám đốc yêu cầu tỉ lệ lỗi của toàn nhà máy không được vượt quá $5\%$. Nếu gộp chung kết quả kiểm tra của cả hai dây chuyền trên, nhà máy có đạt tiêu chuẩn chất lượng đã đề ra hay không?

---

## Đáp án chi tiết & Barem chấm điểm Phần Tự luận

### Bài 1 (1,5 điểm)

**a) (1,0 điểm)**
- Xác định các giá trị khác nhau của mẫu: $6, 7, 8, 9, 10$. *(0,25đ)*
- Đếm tần số xuất hiện của từng giá trị:
  + Điểm $6$: xuất hiện $4$ lần.
  + Điểm $7$: xuất hiện $6$ lần.
  + Điểm $8$: xuất hiện $11$ lần.
  + Điểm $9$: xuất hiện $6$ lần.
  + Điểm $10$: xuất hiện $3$ lần. *(0,5đ)*
- Lập bảng tần số: *(0,25đ)*

| Điểm số ($x$) | $6$ | $7$ | $8$ | $9$ | $10$ | Tổng cộng |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Tần số ($m$)** | $4$ | $6$ | $11$ | $6$ | $3$ | **$N = 30$** |

**b) (0,5 điểm)**
- Giá trị $8$ có tần số lớn nhất là $11$, do đó Mốt của mẫu số liệu là $M_o = 8$. *(0,25đ)*
- Ý nghĩa: Điểm số đạt được nhiều nhất của học sinh lớp 9C trong bài kiểm tra này là điểm $8$. *(0,25đ)*

---

### Bài 2 (2,0 điểm)

**a) (0,75 điểm)**
- Cỡ mẫu: $N = 40 + 60 + 70 + 30 = 200$ (chiếc TV). *(0,25đ)*
- Tần số tương đối từng loại TV:
  + TV 43 inch: $f_1 = \frac{40}{200} \times 100\% = 20\%$.
  + TV 50 inch: $f_2 = \frac{60}{200} \times 100\% = 30\%$.
  + TV 55 inch: $f_3 = \frac{70}{200} \times 100\% = 35\%$.
  + TV $\ge 65$ inch: $f_4 = \frac{30}{200} \times 100\% = 15\%$. *(0,25đ)*
- Bảng tần số tương đối: *(0,25đ)*

| Kích cỡ TV | 43 inch | 50 inch | 55 inch | $\ge 65$ inch | Tổng |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Tần số tương đối ($f$)** | $20\%$ | $30\%$ | $35\%$ | $15\%$ | **$100\%$** |

**b) (0,75 điểm)**
- Tính số đo góc ở tâm tương ứng:
  + TV 43 inch: $n_1^\circ = 360^\circ \times 20\% = 72^\circ$. *(0,25đ)*
  + TV 50 inch: $n_2^\circ = 360^\circ \times 30\% = 108^\circ$. *(0,25đ)*
  + TV 55 inch: $n_3^\circ = 360^\circ \times 35\% = 126^\circ$.
  + TV $\ge 65$ inch: $n_4^\circ = 360^\circ \times 15\% = 54^\circ$. *(0,25đ)*

**c) (0,5 điểm)**
- Tổng số TV bán ra trong tháng 2 là:
  $$N_2 = 200 \times (1 + 20\%) = 200 \times 1,2 = 240 \text{ (chiếc)}$$ *(0,25đ)*
- Số chiếc TV 55 inch bán ra trong tháng 2 là:
  $$m = 240 \times 40\% = 96 \text{ (chiếc)}$$ *(0,25đ)*

---

### Bài 3 (2,5 điểm)

**a) (1,0 điểm)**
- Giá trị đại diện của các nhóm:
  + Nhóm $[0; 30)$: $c_1 = \frac{0 + 30}{2} = 15$.
  + Nhóm $[30; 60)$: $c_2 = \frac{30 + 60}{2} = 45$.
  + Nhóm $[60; 90)$: $c_3 = \frac{60 + 90}{2} = 75$.
  + Nhóm $[90; 120)$: $c_4 = \frac{90 + 120}{2} = 105$.
  + Nhóm $[120; 150]$: $c_5 = \frac{120 + 150}{2} = 135$. *(0,5đ)*
- Tần số tương đối của từng nhóm với cỡ mẫu $N = 50$:
  + $f_1 = \frac{5}{50} \times 100\% = 10\%$.
  + $f_2 = \frac{15}{50} \times 100\% = 30\%$.
  + $f_3 = \frac{18}{50} \times 100\% = 36\%$.
  + $f_4 = \frac{8}{50} \times 100\% = 16\%$.
  + $f_5 = \frac{4}{50} \times 100\% = 8\%$. *(0,25đ)*
- Bảng tần số tương đối ghép nhóm hoàn chỉnh: *(0,25đ)*

| Thời gian (phút) | $[0; 30)$ | $[30; 60)$ | $[60; 90)$ | $[90; 120)$ | $[120; 150]$ | Tổng |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Giá trị đại diện ($c$)** | $15$ | $45$ | $75$ | $105$ | $135$ | — |
| **Tần số tương đối ($f$)** | $10\%$ | $30\%$ | $36\%$ | $16\%$ | $8\%$ | **$100\%$** |

**b) (1,0 điểm)**
- Thời gian truy cập trung bình ước lượng là:
  $$\bar{x} \approx \frac{15 \times 5 + 45 \times 15 + 75 \times 18 + 105 \times 8 + 135 \times 4}{50}$$ *(0,5đ)*
  $$\bar{x} \approx \frac{75 + 675 + 1350 + 840 + 540}{50} = \frac{3480}{50} = 69,6 \text{ (phút)}$$ *(0,5đ)*
- Vậy thời gian trung bình mỗi học sinh truy cập Internet để học tập là khoảng $69,6$ phút/ngày.

**c) (0,5 điểm)**
- Học sinh truy cập từ $60$ phút trở lên thuộc các nhóm $[60; 90), [90; 120)$ và $[120; 150]$:
  $$f = 36\% + 16\% + 8\% = 60\%$$ *(0,5đ)*
- Vậy có $60\%$ học sinh truy cập từ $60$ phút trở lên mỗi ngày.

---

### Bài 4 (1,0 điểm)

**a) (0,5 điểm)**
- Tần số tương đối sản phẩm lỗi của dây chuyền $A$:
  $$f_A = \frac{15}{250} \times 100\% = 6\%$$ *(0,25đ)*
- Tần số tương đối sản phẩm lỗi của dây chuyền $B$:
  $$f_B = \frac{22}{400} \times 100\% = 5,5\%$$ *(0,25đ)*
- Vì $5,5\% < 6\%$ nên **Dây chuyền $B$ có tỉ lệ lỗi thấp hơn**, do đó hoạt động đạt độ chính xác cao hơn dây chuyền $A$.

**b) (0,5 điểm)**
- Khi gộp chung cả hai dây chuyền:
  + Tổng số sản phẩm kiểm tra là: $N_{\text{chung}} = 250 + 400 = 650$ (sản phẩm).
  + Tổng số sản phẩm lỗi là: $m_{\text{chung}} = 15 + 22 = 37$ (sản phẩm). *(0,25đ)*
- Tỉ lệ lỗi chung của toàn nhà máy là:
  $$f_{\text{chung}} = \frac{37}{650} \times 100\% \approx 5,69\%$$ *(0,25đ)*
- Vì $5,69\% > 5\%$ nên **nhà máy chưa đạt tiêu chuẩn chất lượng** đã đề ra (tỉ lệ lỗi không vượt quá $5\%$). Ban giám đốc cần có biện pháp cải tiến công nghệ, đặc biệt là ở dây chuyền $A$.
