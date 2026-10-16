---
title: 'Toán 11: Bài tập cuối chương 3 - Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm'
description: 'Tổng ôn toàn diện Chương 3 Thống kê Toán 11 Kết nối tri thức: Bản đồ tư duy hệ thống, bảng vàng công thức số trung bình, trung vị, tứ phân vị, mốt; chiến lược lựa chọn số đặc trưng phù hợp và 12 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Thống kê 11
  - Mẫu số liệu ghép nhóm
  - Số trung bình
  - Trung vị
  - Tứ phân vị
  - Ôn tập chương 3
  - Kết nối tri thức
grade: 11
---

# Bài tập cuối chương III. Các số đặc trưng đo xu thế trung tâm

Chúc mừng các em đã hoàn thành toàn bộ nội dung của **Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm** (Chương trình Toán 11 GDPT 2018 — Bộ sách Kết nối tri thức với cuộc sống)!

Đây là một chương kiến thức có tính ứng dụng thực tiễn cao nhất trong toàn bộ chương trình Toán học phổ thông. Việc làm chủ các chỉ số này không chỉ giúp các em giành điểm số tối đa trong các bài kiểm tra định kỳ và kỳ thi Tốt nghiệp THPT, mà còn là hành trang phân tích dữ liệu vô cùng quan trọng cho mọi ngành nghề tương lai: từ kinh tế, tài chính, y sinh học cho đến trí tuệ nhân tạo và khoa học dữ liệu!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG III: THỐNG KÊ 11</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Mẫu số liệu ghép nhóm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhóm: $[a_i; a_{i+1})$. Độ dài: $L = a_{i+1} - a_i$.<br>• Giá trị đại diện: $c_i = \frac{a_i + a_{i+1}}{2}$.<br>• Tần số $m_i$, cỡ mẫu $n = \sum m_i$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Số trung bình ($\bar{x}$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\bar{x} = \frac{\sum m_i c_i}{n}$.<br>• Đại diện giá trị trung bình cộng.<br>• Nhạy cảm với giá trị ngoại lai.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Trung vị & Tứ phân vị</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $M_e = a_p + \frac{n/2 - C}{m_p} \cdot L$.<br>• $Q_1$ tại mốc $\frac{n}{4}$; $Q_3$ tại mốc $\frac{3n}{4}$.<br>• $Q_2 = M_e$. Khoảng tứ phân vị $\Delta_Q = Q_3 - Q_1$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Mốt ($M_o$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhóm có tần số $m_j$ lớn nhất.<br>• $M_o = a_j + \frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \cdot L$.<br>• Xác định xu thế phổ biến nhất.</p>
</div>
</div>
</div>

---

## I. Bảng Vàng Công thức Toàn chương

Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_i; a_{i+1})$ với tần số tương ứng $m_i$ ($i = 1, 2, \dots, k$), kích thước mẫu $n = \sum_{i=1}^k m_i$:

| Số đặc trưng | Công thức chuẩn xác | Ý nghĩa & Điều kiện sử dụng |
| :--- | :--- | :--- |
| **Số trung bình** ($\bar{x}$) | $\bar{x} = \frac{1}{n}\sum_{i=1}^k m_i c_i$ | Giá trị đại diện trung bình; dùng khi dữ liệu phân bố đối xứng, không có ngoại lai. |
| **Trung vị** ($M_e$) | $M_e = a_p + \frac{\frac{n}{2} - C}{m_p} \cdot L$ | Chia dữ liệu thành hai nửa $50\% - 50\%$; dùng khi dữ liệu có ngoại lai hoặc bị lệch. |
| **Tứ phân vị 1** ($Q_1$) | $Q_1 = a_p + \frac{\frac{n}{4} - C}{m_p} \cdot L$ | Điểm phân cách $25\%$ số liệu thấp nhất; đo độ phân tán phía dưới. |
| **Tứ phân vị 3** ($Q_3$) | $Q_3 = a_r + \frac{\frac{3n}{4} - C'}{m_r} \cdot L$ | Điểm phân cách $75\%$ số liệu phía dưới và $25\%$ số liệu phía trên. |
| **Mốt** ($M_o$) | $M_o = a_j + \frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \cdot L$ | Giá trị có tần suất xuất hiện cao nhất; dùng trong tối ưu kho hàng, mẫu mã phổ biến. |
| **Khoảng tứ phân vị** ($\Delta_Q$) | $\Delta_Q = Q_3 - Q_1$ | Đo độ phân tán của $50\%$ số liệu trung tâm; rất bền vững với ngoại lai. |

---

## II. Phân loại và Phương pháp giải 5 Dạng toán trọng tâm

### Dạng 1: Tính số trung bình, trung vị và mốt của một mẫu số liệu

#### Bài toán 1:
Khảo sát thời gian di chuyển từ nhà đến trường (tính bằng phút) của $60$ học sinh THPT được ghi nhận trong bảng sau:

| Thời gian (phút) | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ | $[50; 60)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh ($m_i$)** | $8$ | $20$ | $18$ | $10$ | $4$ |

a) Tính thời gian di chuyển trung bình ($\bar{x}$) của học sinh.  
b) Tìm trung vị ($M_e$).  
c) Tìm mốt ($M_o$).

#### Lời giải chi tiết:
- Cỡ mẫu: $n = 8 + 20 + 18 + 10 + 4 = 60$.  
- Độ dài mỗi nhóm là $L = 10$.
- Giá trị đại diện $c_i$:
  - $c_1 = 15, c_2 = 25, c_3 = 35, c_4 = 45, c_5 = 55$.

**a) Tính số trung bình:**
$$\bar{x} = \frac{8 \times 15 + 20 \times 25 + 18 \times 35 + 10 \times 45 + 4 \times 55}{60} = \frac{120 + 500 + 630 + 450 + 220}{60} = \frac{1920}{60} = 32\text{ (phút)}$$

**b) Tìm trung vị:**
- $\frac{n}{2} = 30$.
- Tần số tích lũy: $cf_1 = 8, cf_2 = 28, cf_3 = 46$.
- Do $cf_2 = 28 < 30 \le cf_3 = 46$, nhóm chứa trung vị là **nhóm 3: $[30; 40)$**.
- $a_3 = 30, L = 10, m_3 = 18, C = cf_2 = 28$.
$$M_e = 30 + \frac{30 - 28}{18} \times 10 = 30 + \frac{2}{18} \times 10 = 30 + \frac{10}{9} \approx 31.11\text{ (phút)}$$

**c) Tìm mốt:**
- Nhóm có tần số lớn nhất là **nhóm 2: $[20; 30)$** (vì $m_2 = 20 > 18 > 10 > 8 > 4$).
- $a_2 = 20, L = 10, m_2 = 20, m_1 = 8, m_3 = 18$.
$$M_o = 20 + \frac{20 - 8}{(20 - 8) + (20 - 18)} \times 10 = 20 + \frac{12}{12 + 2} \times 10 = 20 + \frac{120}{14} \approx 20 + 8.57 = 28.57\text{ (phút)}$$

---

### Dạng 2: Tính các tứ phân vị và Khoảng tứ phân vị

#### Bài toán 2:
Từ bảng số liệu của Bài toán 1, hãy:
a) Tính các tứ phân vị $Q_1$ và $Q_3$.  
b) Tính khoảng tứ phân vị $\Delta_Q$ và nêu ý nghĩa.

#### Lời giải chi tiết:
**a) Tính $Q_1$:**
- $\frac{n}{4} = \frac{60}{4} = 15$.
- Tần số tích lũy: $cf_1 = 8 < 15 \le cf_2 = 28$. Nhóm chứa $Q_1$ là **nhóm 2: $[20; 30)$**.
- $a_2 = 20, L = 10, m_2 = 20, C = cf_1 = 8$.
$$Q_1 = 20 + \frac{15 - 8}{20} \times 10 = 20 + \frac{7}{20} \times 10 = 20 + 3.5 = 23.5\text{ (phút)}$$

**Tính $Q_3$:**
- $\frac{3n}{4} = \frac{3 \times 60}{4} = 45$.
- Tần số tích lũy: $cf_2 = 28 < 45 \le cf_3 = 46$. Nhóm chứa $Q_3$ là **nhóm 3: $[30; 40)$**.
- $a_3 = 30, L = 10, m_3 = 18, C' = cf_2 = 28$.
$$Q_3 = 30 + \frac{45 - 28}{18} \times 10 = 30 + \frac{17}{18} \times 10 = 30 + \frac{170}{18} \approx 30 + 9.44 = 39.44\text{ (phút)}$$

**b) Khoảng tứ phân vị:**
$$\Delta_Q = Q_3 - Q_1 = 39.44 - 23.5 = 15.94\text{ (phút)}$$
**Ý nghĩa:** Độ phân tán của $50\%$ số học sinh có thời gian đi lại ở mức trung bình nằm trong khoảng chênh lệch là $15.94\text{ phút}$.

---

### Dạng 3: So sánh hai mẫu số liệu ghép nhóm

#### Bài toán 3:
Để đánh giá độ chính xác của hai máy bay không người lái (drone) nông nghiệp, người ta tiến hành phun thuốc trừ sâu thử nghiệm và đo sai số lệch tâm mục tiêu (tính bằng centimét). Kết quả ở $50$ lần bay thử nghiệm của mỗi drone được ghi lại như sau:

| Sai số (cm) | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Drone A (lần)** | $15$ | $20$ | $10$ | $4$ | $1$ |
| **Drone B (lần)** | $8$ | $14$ | $18$ | $8$ | $2$ |

Dựa vào số trung bình và trung vị, hãy cho biết Drone nào hoạt động chính xác hơn?

#### Lời giải chi tiết:
Giá trị đại diện: $c_1 = 5, c_2 = 15, c_3 = 25, c_4 = 35, c_5 = 45$. Cỡ mẫu $n = 50$.

**1. Tính toán cho Drone A:**
- Số trung bình:
  $$\bar{x}_A = \frac{15 \times 5 + 20 \times 15 + 10 \times 25 + 4 \times 35 + 1 \times 45}{50} = \frac{75 + 300 + 250 + 140 + 45}{50} = \frac{810}{50} = 16.2\text{ cm}$$
- Trung vị: $\frac{n}{2} = 25$. Tần số tích lũy: $cf_1 = 15 < 25 \le cf_2 = 35 \Rightarrow$ nhóm $[10; 20)$.
  $$M_{e(A)} = 10 + \frac{25 - 15}{20} \times 10 = 10 + \frac{10}{20} \times 10 = 10 + 5 = 15\text{ cm}$$

**2. Tính toán cho Drone B:**
- Số trung bình:
  $$\bar{x}_B = \frac{8 \times 5 + 14 \times 15 + 18 \times 25 + 8 \times 35 + 2 \times 45}{50} = \frac{40 + 210 + 450 + 280 + 90}{50} = \frac{1070}{50} = 21.4\text{ cm}$$
- Trung vị: $\frac{n}{2} = 25$. Tần số tích lũy: $cf_1 = 8, cf_2 = 22 < 25 \le cf_3 = 40 \Rightarrow$ nhóm $[20; 30)$.
  $$M_{e(B)} = 20 + \frac{25 - 22}{18} \times 10 = 20 + \frac{3}{18} \times 10 = 20 + 1.67 = 21.67\text{ cm}$$

**Kết luận:**
Cả số trung bình ($\bar{x}_A = 16.2\text{ cm} < \bar{x}_B = 21.4\text{ cm}$) và trung vị ($M_{e(A)} = 15\text{ cm} < M_{e(B)} = 21.67\text{ cm}$) của Drone A đều nhỏ hơn đáng kể so với Drone B.  
Vì sai số càng nhỏ thì độ chính xác càng cao, nên **Drone A hoạt động chính xác hơn hẳn Drone B**.

---

## III. Đề Trắc nghiệm Tổng ôn Toàn bộ Chương III (12 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị đại diện của nhóm [150; 160) là:",
  "options": [
    "A. 154",
    "B. 155",
    "C. 156",
    "D. 10"
  ],
  "answer": "B. 155",
  "explanation": "c = (150 + 160) / 2 = 155."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho bảng tần số ghép nhóm có 4 nhóm với tần số m_1 = 5, m_2 = 15, m_3 = 20, m_4 = 10. Kích thước mẫu n là:",
  "options": [
    "A. 40",
    "B. 50",
    "C. 60",
    "D. 20"
  ],
  "answer": "B. 50",
  "explanation": "n = 5 + 15 + 20 + 10 = 50."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Nhóm chứa trung vị của mẫu số liệu trên (n = 50) là:",
  "options": [
    "A. Nhóm 1",
    "B. Nhóm 2",
    "C. Nhóm 3",
    "D. Nhóm 4"
  ],
  "answer": "C. Nhóm 3",
  "explanation": "n/2 = 25. Tần số tích lũy: cf_1 = 5, cf_2 = 20, cf_3 = 40. Vì cf_2 < 25 ≤ cf_3 nên nhóm 3 là nhóm chứa trung vị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Khi muốn tìm kích cỡ áo thun phổ biến nhất để sản xuất hàng loạt, nhà may cần quan tâm đến số đặc trưng nào?",
  "options": [
    "A. Số trung bình",
    "B. Trung vị",
    "C. Tứ phân vị thứ nhất",
    "D. Mốt"
  ],
  "answer": "D. Mốt",
  "explanation": "Mốt cho biết kích cỡ có tần suất người mặc nhiều nhất, giúp nhà sản xuất tối ưu quy mô sản phẩm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nhóm chứa mốt của mẫu số liệu ở Câu 2 là:",
  "options": [
    "A. Nhóm 1",
    "B. Nhóm 2",
    "C. Nhóm 3",
    "D. Nhóm 4"
  ],
  "answer": "C. Nhóm 3",
  "explanation": "Nhóm 3 có tần số lớn nhất bằng 20."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Khoảng tứ phân vị Δ_Q đo lường:",
  "options": [
    "A. Độ tập trung trung bình của mẫu",
    "B. Độ phân tán của 50% số liệu ở phần giữa của mẫu",
    "C. Giá trị lớn nhất trừ giá trị nhỏ nhất",
    "D. Tần số lớn nhất trong mẫu"
  ],
  "answer": "B. Độ phân tán của 50% số liệu ở phần giữa của mẫu",
  "explanation": "Δ_Q = Q_3 - Q_1 đo độ biến thiên của 50% số liệu trung tâm và không bị ảnh hưởng bởi giá trị ngoại lai."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Nếu tất cả các giá trị của một mẫu số liệu ghép nhóm đều được cộng thêm 5 đơn vị thì số trung bình mới sẽ:",
  "options": [
    "A. Không đổi",
    "B. Tăng thêm 5 đơn vị",
    "C. Nhân lên 5 lần",
    "D. Tăng thêm 25 đơn vị"
  ],
  "answer": "B. Tăng thêm 5 đơn vị",
  "explanation": "Theo tính chất tuyến tính của số trung bình, khi mỗi quan sát cộng thêm hằng số c thì trung bình mới cũng tăng đúng c đơn vị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho nhóm [20; 30) chứa trung vị với n = 40, C = 15, m_p = 10. Trung vị Me bằng:",
  "options": [
    "A. 22.5",
    "B. 25.0",
    "C. 27.5",
    "D. 24.0"
  ],
  "answer": "B. 25.0",
  "explanation": "Me = 20 + [(20 - 15) / 10] * 10 = 20 + 5 = 25.0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tứ phân vị thứ nhất Q_1 còn được gọi là phân vị mức:",
  "options": [
    "A. 10%",
    "B. 25%",
    "C. 50%",
    "D. 75%"
  ],
  "answer": "B. 25%",
  "explanation": "Q_1 tương ứng với điểm bách phân vị thứ 25 (Percentile 25th)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho nhóm chứa mốt [10; 20) có tần số m_j = 25, nhóm trước m_{j-1} = 15, nhóm sau m_{j+1} = 15. Mốt Mo bằng:",
  "options": [
    "A. 15",
    "B. 16",
    "C. 14",
    "D. 18"
  ],
  "answer": "A. 15",
  "explanation": "Mo = 10 + [(25 - 15) / ((25 - 15) + (25 - 15))] * 10 = 10 + (10 / 20) * 10 = 10 + 5 = 15."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Cho mẫu số liệu có Q_1 = 12 và Q_3 = 28. Khoảng tứ phân vị Δ_Q bằng:",
  "options": [
    "A. 16",
    "B. 20",
    "C. 40",
    "D. 8"
  ],
  "answer": "A. 16",
  "explanation": "Δ_Q = Q_3 - Q_1 = 28 - 12 = 16."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Khi phân phối số liệu có dạng lệch phải (Right-skewed, có một vài giá trị rất lớn kéo dài đuôi bên phải), mối quan hệ thông thường giữa Số trung bình, Trung vị và Mốt là:",
  "options": [
    "A. Số trung bình < Trung vị < Mốt",
    "B. Mốt < Trung vị < Số trung bình",
    "C. Số trung bình = Trung vị = Mốt",
    "D. Trung vị < Mốt < Số trung bình"
  ],
  "answer": "B. Mốt < Trung vị < Số trung bình",
  "explanation": "Trong phân phối lệch phải, giá trị ngoại lai kéo số trung bình dịch mạnh về phía phải, tiếp theo là trung vị, còn mốt ở vị trí đỉnh tần số: Mốt < Trung vị < Số trung bình."
}'></div>

---

## IV. Lời kết và Kế hoạch học tập tiếp theo

Chúc mừng các em đã làm chủ trọn vẹn kiến thức của **Chương III: Thống kê số liệu ghép nhóm**!

Kỹ năng tính toán và phân tích các chỉ số $\bar{x}, M_e, Q_1, Q_3, M_o$ sẽ là nền tảng trực tiếp để tiếp tục nghiên cứu:
- **Chương trình Toán 12:** Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm (Phương sai, Độ lệch chuẩn).
- Ứng dụng thực tế trong quản trị rủi ro, phân tích tài chính chứng khoán, nghiên cứu dịch tễ học và trí tuệ nhân tạo!
