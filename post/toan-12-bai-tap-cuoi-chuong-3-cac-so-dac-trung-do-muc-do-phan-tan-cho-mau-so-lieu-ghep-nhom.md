---
title: 'Toán 12 Bài tập cuối chương 3: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm - Đề ôn tập chuẩn cấu trúc 2025'
description: 'Tổng hợp toàn diện kiến thức Chương 3 Toán 12 Kết nối tri thức: Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn, nhận diện ngoại lai kèm đề ôn tập chuẩn cấu trúc đề thi tốt nghiệp THPT 2025 (3 phần: Nhiều lựa chọn, Đúng/Sai, Trả lời ngắn) có lời giải chi tiết và trắc nghiệm tự chấm.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Bài tập cuối chương
  - Thống kê
  - Mẫu số liệu ghép nhóm
  - Đề thi 2025
  - Kết nối tri thức
grade: 12
---

# Bài tập cuối chương 3: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm

Chương 3 khép lại phần Thống kê mô tả của chương trình Toán THPT với những công cụ tối quan trọng để phân tích, đánh giá và xử lý các tập dữ liệu lớn trong thực tế. Nếu như số trung bình ($\bar{x}$) hay trung vị ($M_e$) cho ta biết **xu thế tập trung** của mẫu số liệu, thì **Khoảng biến thiên ($R$)**, **Khoảng tứ phân vị ($\Delta_Q$)**, **Phương sai ($s^2$)** và **Độ lệch chuẩn ($s$)** lại cho ta bức tranh hoàn chỉnh về **độ phân tán, mức độ ổn định và rủi ro** của dữ liệu.

Bài học tổng kết này cung cấp:
1. **Bảng so sánh và tổng hợp công thức toàn diện Chương 3**.
2. **Đề ôn tập chuẩn cấu trúc đề thi Tốt nghiệp THPT mới từ năm 2025**:
   - **Phần I:** 12 câu trắc nghiệm nhiều phương án lựa chọn.
   - **Phần II:** 4 câu trắc nghiệm Đúng / Sai (16 ý hỏi).
   - **Phần III:** 6 câu trắc nghiệm trả lời ngắn (yêu cầu tính toán cụ thể).
3. **Lời giải chi tiết từng bước** và hệ thống câu hỏi trắc nghiệm tự động chấm điểm.

---

## I. Bảng tổng hợp các số đặc trưng đo mức độ phân tán

Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_i; a_{i+1})$ với tần số $m_i$ ($i = 1, 2, \dots, k$), cỡ mẫu $n = \sum_{i=1}^k m_i$:

| Số đặc trưng | Kí hiệu & Công thức tính toán | Ưu điểm & Ý nghĩa thực tiễn | Nhược điểm / Hạn chế |
| :--- | :--- | :--- | :--- |
| **Khoảng biến thiên** | $\mathbf{R = a_{k+1} - a_1}$ <br>*(Đầu mút trên nhóm cuối trừ đầu mút dưới nhóm đầu)* | Rất dễ tính, cho biết phạm vi bao quát tối đa của toàn bộ dữ liệu. | Rất nhạy cảm với các giá trị bất thường (ngoại lai). |
| **Khoảng tứ phân vị** | $\mathbf{\Delta_Q = Q_3 - Q_1}$ <br>*(Tứ phân vị thứ ba trừ tứ phân vị thứ nhất)* | Đo độ biến động của **50% số liệu chính giữa**. Không bị ảnh hưởng bởi giá trị ngoại lai. | Bỏ qua thông tin của 25% số liệu nhỏ nhất và 25% số liệu lớn nhất. |
| **Phương sai** | $\mathbf{s^2 = \frac{1}{n}\sum_{i=1}^k m_i c_i^2 - \bar{x}^2}$ <br>*(hoặc $s^2 = \frac{1}{n}\sum m_i(c_i - \bar{x})^2$)* | Tận dụng thông tin của **toàn bộ** các quan sát trong mẫu, là thước đo toán học chuẩn mực nhất. | Đơn vị đo là bình phương đơn vị gốc, dễ bị phóng đại khi có sai lệch lớn. |
| **Độ lệch chuẩn** | $\mathbf{s = \sqrt{s^2}}$ | **Cùng đơn vị đo** với số liệu gốc. Dùng để so sánh độ đồng đều, mức độ rủi ro giữa 2 mẫu có cùng đơn vị. | Tính toán phức tạp hơn, cần dùng máy tính cầm tay hỗ trợ. |
| **Giá trị ngoại lai** | $x < Q_1 - 1.5\Delta_Q$ <br>hoặc $x > Q_3 + 1.5\Delta_Q$ | Giúp phát hiện sai sót khi nhập liệu, lỗi thiết bị đo lường hoặc các hiện tượng đột biến hiếm gặp. | Cần tính chính xác $Q_1, Q_3$ trước khi kiểm tra. |

---

## II. Đề ôn tập chuẩn cấu trúc thi tốt nghiệp THPT 2025

### PHẦN I: Câu trắc nghiệm nhiều phương án lựa chọn (12 câu - 3.0 điểm)

**Câu 1:** Cho mẫu số liệu ghép nhóm có các nhóm $[a_1; a_2), [a_2; a_3), \dots, [a_k; a_{k+1})$. Khoảng biến thiên $R$ của mẫu số liệu ghép nhóm này là:  
A. $R = a_{k} - a_1$.  
B. $R = a_{k+1} - a_1$.  
C. $R = a_{k+1} - a_2$.  
D. $R = a_k - a_2$.

**Câu 2:** Đại lượng nào sau đây **không phụ thuộc** vào các giá trị ngoại lai (giá trị dị biệt cực lớn hoặc cực nhỏ)?  
A. Khoảng biến thiên $R$.  
B. Phương sai $s^2$.  
C. Khoảng tứ phân vị $\Delta_Q$.  
D. Độ lệch chuẩn $s$.

**Câu 3:** Khảo sát thời gian tự học mỗi ngày của 40 học sinh được bảng sau:

| Thời gian (giờ) | $[1; 2)$ | $[2; 3)$ | $[3; 4)$ | $[4; 5)$ |
| :--- | :---: | :---: | :---: | :---: |
| **Số học sinh** | $6$ | $18$ | $12$ | $4$ |

Khoảng biến thiên của mẫu số liệu ghép nhóm này là:  
A. $4$ giờ.  
B. $5$ giờ.  
C. $3$ giờ.  
D. $2$ giờ.

**Câu 4:** Với mẫu số liệu ở Câu 3, giá trị đại diện của nhóm $[2; 3)$ là:  
A. $2$.  
B. $3$.  
C. $2.5$.  
D. $5$.

**Câu 5:** Cho mẫu số liệu ghép nhóm có $Q_1 = 15$ và $Q_3 = 27$. Giá trị nào sau đây là một **giá trị ngoại lai** của mẫu số liệu?  
A. $12$.  
B. $35$.  
C. $46$.  
D. $20$.

**Câu 6:** Bảng điểm trung bình môn Toán của hai học sinh An và Bình qua 10 bài kiểm tra đều là $8.2$. Độ lệch chuẩn điểm của An là $s_{\text{An}} = 0.4$, của Bình là $s_{\text{Bình}} = 1.1$. Kết luận nào sau đây đúng?  
A. Điểm số của Bình đồng đều hơn An.  
B. An có phong độ học tập ổn định hơn Bình.  
C. Hai bạn có năng lực và phong độ như nhau vì cùng số trung bình.  
D. Bình có xác suất đạt điểm 10 thấp hơn An.

**Câu 7:** Một mẫu số liệu có phương sai $s^2 = 3.24$. Độ lệch chuẩn của mẫu số liệu đó là:  
A. $1.8$.  
B. $1.62$.  
C. $10.4976$.  
D. $0.9$.

**Câu 8:** Công thức tính tứ phân vị thứ nhất $Q_1$ của mẫu số liệu ghép nhóm khi nhóm chứa $Q_1$ là $[a_p; a_{p+1})$ là:  
A. $Q_1 = a_p + \frac{\frac{n}{4} - C}{m_p}(a_{p+1} - a_p)$ với $C = m_1 + \dots + m_{p-1}$.  
B. $Q_1 = a_p + \frac{\frac{n}{2} - C}{m_p}(a_{p+1} - a_p)$.  
C. $Q_1 = a_p + \frac{\frac{3n}{4} - C}{m_p}(a_{p+1} - a_p)$.  
D. $Q_1 = a_{p+1} - \frac{\frac{n}{4} - C}{m_p}(a_{p+1} - a_p)$.

**Câu 9:** Cho mẫu số liệu ghép nhóm có số trung bình $\bar{x} = 10$, $\sum_{i=1}^k m_i c_i^2 = 5200$ và cỡ mẫu $n = 50$. Phương sai $s^2$ của mẫu số liệu là:  
A. $4$.  
B. $104$.  
C. $14$.  
D. $24$.

**Câu 10:** Khi tất cả các giá trị trong mẫu số liệu được tăng lên gấp đôi thì:  
A. Phương sai tăng gấp 2 lần, độ lệch chuẩn tăng gấp 2 lần.  
B. Phương sai tăng gấp 4 lần, độ lệch chuẩn tăng gấp 2 lần.  
C. Phương sai tăng gấp 2 lần, độ lệch chuẩn không đổi.  
D. Cả phương sai và độ lệch chuẩn đều tăng gấp 4 lần.

**Câu 11:** Trong các phát biểu sau về khoảng tứ phân vị $\Delta_Q$, phát biểu nào **sai**?  
A. $\Delta_Q = Q_3 - Q_1$.  
B. $\Delta_Q$ luôn là một số không âm.  
C. Nếu tất cả các số liệu đều bằng nhau thì $\Delta_Q = 0$.  
D. $\Delta_Q$ đo độ phân tán của toàn bộ $100\%$ các số liệu.

**Câu 12:** Khi bấm máy tính cầm tay Casio fx-580VN X để tính phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, đại lượng $\sigma_x$ hiển thị trên màn hình tương ứng với:  
A. Số trung bình $\bar{x}$.  
B. Phương sai $s^2$.  
C. Độ lệch chuẩn $s$.  
D. Khoảng biến thiên $R$.

---

### PHẦN II: Câu trắc nghiệm Đúng / Sai (4 câu - 4.0 điểm)

**Câu 1:** Thống kê cân nặng (đơn vị: kg) của 30 quả bưởi thu hoạch tại một nông trường được cho ở bảng sau:

| Khối lượng (kg) | $[0.8; 1.0)$ | $[1.0; 1.2)$ | $[1.2; 1.4)$ | $[1.4; 1.6)$ | $[1.6; 1.8)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số quả** | $3$ | $7$ | $12$ | $6$ | $2$ |

Các mệnh đề sau đúng hay sai?  
a) Cỡ mẫu điều tra là $n = 30$.  
b) Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 1.0\text{ kg}$.  
c) Nhóm chứa tứ phân vị thứ nhất $Q_1$ là $[1.0; 1.2)$.  
d) Nhóm chứa tứ phân vị thứ ba $Q_3$ là $[1.4; 1.6)$.

**Câu 2:** Xét mẫu số liệu ghép nhóm về năng suất lúa (tạ/ha) của 20 thửa ruộng:

| Năng suất (tạ/ha) | $[45; 50)$ | $[50; 55)$ | $[55; 60)$ | $[60; 65)$ |
| :--- | :---: | :---: | :---: | :---: |
| **Số thửa ruộng** | $4$ | $8$ | $6$ | $2$ |

Các mệnh đề sau đúng hay sai?  
a) Giá trị đại diện của các nhóm lần lượt là $47.5; 52.5; 57.5; 62.5$.  
b) Năng suất trung bình của 20 thửa ruộng là $\bar{x} = 53.0$ tạ/ha.  
c) Phương sai của mẫu số liệu ghép nhóm là $s^2 = 18.5$.  
d) Độ lệch chuẩn của mẫu số liệu nhỏ hơn $4.5$ tạ/ha.

**Câu 3:** Điều tra tuổi thọ (năm) của một loại bóng đèn LED do hai phân xưởng A và B sản xuất (mỗi xưởng thử nghiệm 100 bóng):
- Phân xưởng A: Tuổi thọ trung bình $\bar{x}_A = 5.2$ năm, độ lệch chuẩn $s_A = 0.6$ năm.
- Phân xưởng B: Tuổi thọ trung bình $\bar{x}_B = 5.2$ năm, phương sai $s_B^2 = 0.81$ năm$^2$.

Các mệnh đề sau đúng hay sai?  
a) Độ lệch chuẩn của phân xưởng B là $s_B = 0.9$ năm.  
b) Tuổi thọ bóng đèn của hai phân xưởng có cùng giá trị kỳ vọng trung bình.  
c) Phân xưởng B sản xuất bóng đèn có chất lượng đồng đều hơn phân xưởng A.  
d) Khi người tiêu dùng muốn chọn mua bóng đèn có độ bền ít biến động nhất, họ nên chọn sản phẩm của phân xưởng A.

**Câu 4:** Cho mẫu số liệu ghép nhóm có $Q_1 = 20$, $Q_3 = 32$.  
Các mệnh đề sau đúng hay sai?  
a) Khoảng tứ phân vị của mẫu số liệu là $\Delta_Q = 12$.  
b) Giá trị $x = 0$ được xem là một giá trị ngoại lai bé.  
c) Giá trị $x = 51$ là một giá trị ngoại lai lớn.  
d) Mọi số liệu thuộc khoảng $[2; 50]$ đều không phải là giá trị ngoại lai.

---

### PHẦN III: Câu trắc nghiệm trả lời ngắn (6 câu - 3.0 điểm)

**Câu 1:** Một bác sĩ theo dõi nhịp tim lúc nghỉ ngơi (nhịp/phút) của 40 bệnh nhân và thu được bảng số liệu ghép nhóm: $[60; 70)$ có 8 người, $[70; 80)$ có 16 người, $[80; 90)$ có 12 người, $[90; 100)$ có 4 người. Tính khoảng biến thiên $R$ của mẫu số liệu này.  
*Đáp số:* `...`

**Câu 2:** Cho mẫu số liệu ghép nhóm về điểm kiểm tra của học sinh:

| Điểm số | $[2; 4)$ | $[4; 6)$ | $[6; 8)$ | $[8; 10]$ |
| :--- | :---: | :---: | :---: | :---: |
| **Số học sinh** | $2$ | $8$ | $14$ | $6$ |

Tính tứ phân vị thứ nhất $Q_1$ (làm tròn kết quả đến hàng phần trăm).  
*Đáp số:* `...`

**Câu 3:** Với mẫu số liệu ở Câu 2, tính tứ phân vị thứ ba $Q_3$ (làm tròn kết quả đến hàng phần trăm).  
*Đáp số:* `...`

**Câu 4:** Với mẫu số liệu ở Câu 2, tính khoảng tứ phân vị $\Delta_Q$ (làm tròn kết quả đến hàng phần trăm).  
*Đáp số:* `...`

**Câu 5:** Tính số trung bình $\bar{x}$ của mẫu số liệu ở Câu 2.  
*Đáp số:* `...`

**Câu 6:** Tính phương sai $s^2$ của mẫu số liệu ở Câu 2 (làm tròn kết quả đến hàng phần trăm).  
*Đáp số:* `...`

---

## III. Hướng dẫn giải chi tiết đề ôn tập

### HƯỚNG DẪN GIẢI PHẦN I

- **Câu 1:** Chọn **B**. $R = a_{k+1} - a_1$.
- **Câu 2:** Chọn **C**. Khoảng tứ phân vị $\Delta_Q$ chỉ dựa vào $Q_1$ và $Q_3$ nên không bị ảnh hưởng bởi giá trị ngoại lai.
- **Câu 3:** Chọn **A**. $R = 5 - 1 = 4$ giờ.
- **Câu 4:** Chọn **C**. $c_2 = \frac{2 + 3}{2} = 2.5$.
- **Câu 5:** Chọn **C**. Ta có $\Delta_Q = Q_3 - Q_1 = 27 - 15 = 12$. Ranh giới ngoại lai: $Q_1 - 1.5\Delta_Q = 15 - 1.5(12) = -3$; $Q_3 + 1.5\Delta_Q = 27 + 1.5(12) = 45$. Do đó số $46 > 45$ là giá trị ngoại lai.
- **Câu 6:** Chọn **B**. Cùng điểm trung bình nhưng $s_{\text{An}} < s_{\text{Bình}}$ nên điểm An ổn định hơn.
- **Câu 7:** Chọn **A**. $s = \sqrt{3.24} = 1.8$.
- **Câu 8:** Chọn **A**. Công thức chuẩn tính $Q_1$.
- **Câu 9:** Chọn **A**. $s^2 = \frac{1}{n}\sum m_i c_i^2 - \bar{x}^2 = \frac{5200}{50} - 10^2 = 104 - 100 = 4$.
- **Câu 10:** Chọn **B**. Mỗi số liệu nhân $2$ thì phương sai nhân $2^2 = 4$, độ lệch chuẩn nhân $2$.
- **Câu 11:** Chọn **D**. $\Delta_Q$ chỉ đo độ biến động của 50% số liệu chính giữa, không phải toàn bộ 100%.
- **Câu 12:** Chọn **C**. Kí hiệu $\sigma_x$ trên máy Casio là độ lệch chuẩn mẫu.

---

### HƯỚNG DẪN GIẢI PHẦN II

**Câu 1:**
- a) **Đúng**. Tổng tần số $n = 3 + 7 + 12 + 6 + 2 = 30$.
- b) **Đúng**. $R = 1.8 - 0.8 = 1.0\text{ kg}$.
- c) **Đúng**. Vị trí chứa $Q_1$ là $\frac{n}{4} = \frac{30}{4} = 7.5$. Nhóm 1 có 3 quả, nhóm 2 cộng dồn có $3 + 7 = 10$ quả $\implies Q_1 \in [1.0; 1.2)$.
- d) **Sai**. Vị trí chứa $Q_3$ là $\frac{3n}{4} = 22.5$. Tần số tích lũy: nhóm 1 là 3, nhóm 2 là 10, nhóm 3 là $10 + 12 = 22$, nhóm 4 là $22 + 6 = 28$. Vậy giá trị thứ 22.5 nằm ở nhóm 4, tức là $[1.4; 1.6)$. Khoan, tần số tích lũy của nhóm 3 là 22, giá trị thứ 22.5 phải rơi vào nhóm 4 $[1.4; 1.6)$! Vậy mệnh đề d là **Đúng**!

**Câu 2:**
- a) **Đúng**. Giá trị đại diện là trung điểm các khoảng: $47.5; 52.5; 57.5; 62.5$.
- b) **Sai**. $\bar{x} = \frac{4 \cdot 47.5 + 8 \cdot 52.5 + 6 \cdot 57.5 + 2 \cdot 62.5}{20} = \frac{190 + 420 + 345 + 125}{20} = \frac{1080}{20} = 54.0$ tạ/ha $\neq 53.0$.
- c) **Sai**. Ta tính $s^2 = \frac{1}{20}[4(47.5)^2 + 8(52.5)^2 + 6(57.5)^2 + 2(62.5)^2] - 54^2 = \frac{58700}{20} - 2916 = 2935 - 2916 = 19.0 \neq 18.5$.
- d) **Đúng**. $s = \sqrt{19.0} \approx 4.36$ tạ/ha $< 4.5$.

**Câu 3:**
- a) **Đúng**. $s_B = \sqrt{s_B^2} = \sqrt{0.81} = 0.9$ năm.
- b) **Đúng**. Cả hai đều có $\bar{x} = 5.2$ năm.
- c) **Sai**. Vì $s_A = 0.6 < s_B = 0.9$ nên phân xưởng A đồng đều hơn, phân xưởng B kém đồng đều hơn.
- d) **Đúng**. Chọn phân xưởng A vì độ lệch chuẩn nhỏ hơn $\implies$ ít biến động hơn.

**Câu 4:**
- a) **Đúng**. $\Delta_Q = 32 - 20 = 12$.
- b) **Đúng**. Ngưỡng dưới: $Q_1 - 1.5\Delta_Q = 20 - 1.5 \cdot 12 = 2$. Do $0 < 2$ nên $x = 0$ là giá trị ngoại lai bé.
- c) **Đúng**. Ngưỡng trên: $Q_3 + 1.5\Delta_Q = 32 + 1.5 \cdot 12 = 50$. Do $51 > 50$ nên $x = 51$ là giá trị ngoại lai lớn.
- d) **Đúng**. Tập giá trị không phải ngoại lai là $[2; 50]$.

---

### HƯỚNG DẪN GIẢI PHẦN III

- **Câu 1:** $R = 100 - 60 = 40$.
- **Câu 2:** Cỡ mẫu $n = 2 + 8 + 14 + 6 = 30$.  
  Vị trí chứa $Q_1$ là $\frac{n}{4} = 7.5$. Nhóm 1 có 2 phần tử, nhóm 2 tích lũy $2 + 8 = 10 \implies Q_1 \in [4; 6)$.  
  Áp dụng công thức: $Q_1 = 4 + \frac{7.5 - 2}{8}(6 - 4) = 4 + \frac{5.5}{8} \cdot 2 = 4 + 1.375 = 5.38$.
- **Câu 3:** Vị trí chứa $Q_3$ là $\frac{3n}{4} = 22.5$. Tích lũy nhóm 2 là 10, nhóm 3 là $10 + 14 = 24 \implies Q_3 \in [6; 8)$.  
  Áp dụng công thức: $Q_3 = 6 + \frac{22.5 - 10}{14}(8 - 6) = 6 + \frac{12.5}{14} \cdot 2 = 6 + \frac{25}{14} \approx 7.79$.
- **Câu 4:** $\Delta_Q = Q_3 - Q_1 = 7.7857 - 5.375 = 2.41$.
- **Câu 5:** Đại diện các nhóm: $c = [3, 5, 7, 9]$.  
  $\bar{x} = \frac{2 \cdot 3 + 8 \cdot 5 + 14 \cdot 7 + 6 \cdot 9}{30} = \frac{6 + 40 + 98 + 54}{30} = \frac{198}{30} = 6.6$.
- **Câu 6:** $\sum m_i c_i^2 = 2 \cdot 9 + 8 \cdot 25 + 14 \cdot 49 + 6 \cdot 81 = 18 + 200 + 686 + 486 = 1390$.  
  $s^2 = \frac{1390}{30} - (6.6)^2 = 46.333 - 43.56 = 2.77$.

---

## IV. Đề kiểm tra trắc nghiệm tương tác tự động chấm (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Cho mẫu số liệu ghép nhóm gồm 4 nhóm: $[10; 20)$, $[20; 30)$, $[30; 40)$, $[40; 50)$. Khoảng biến thiên $R$ của mẫu số liệu này là:",
  "options": [
    "A. 30",
    "B. 40",
    "C. 50",
    "D. 10"
  ],
  "answer": "B. 40",
  "explanation": "Khoảng biến thiên $R = a_{k+1} - a_1 = 50 - 10 = 40$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm được xác định bằng công thức:",
  "options": [
    "A. $\\Delta_Q = Q_2 - Q_1$",
    "B. $\\Delta_Q = Q_3 - Q_2$",
    "C. $\\Delta_Q = Q_3 - Q_1$",
    "D. $\\Delta_Q = \\frac{Q_3 - Q_1}{2}$"
  ],
  "answer": "C. $\\Delta_Q = Q_3 - Q_1$",
  "explanation": "Theo định nghĩa, khoảng tứ phân vị là hiệu số giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: $\\Delta_Q = Q_3 - Q_1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $Q_1 = 12$ và $Q_3 = 20$. Một giá trị $x$ được coi là giá trị ngoại lai lớn nếu:",
  "options": [
    "A. $x > 28$",
    "B. $x > 32$",
    "C. $x > 24$",
    "D. $x > 30$"
  ],
  "answer": "B. $x > 32$",
  "explanation": "Ta có $\\Delta_Q = 20 - 12 = 8$. Ranh giới ngoại lai lớn là $Q_3 + 1.5\\Delta_Q = 20 + 1.5 \\cdot 8 = 20 + 12 = 32$. Do đó $x > 32$ là giá trị ngoại lai lớn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho bảng số liệu ghép nhóm có phương sai $s^2 = 1.44$. Độ lệch chuẩn $s$ bằng:",
  "options": [
    "A. 1.2",
    "B. 0.72",
    "C. 2.0736",
    "D. 0.12"
  ],
  "answer": "A. 1.2",
  "explanation": "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{1.44} = 1.2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tại sao độ lệch chuẩn $s$ thường được ưa chuộng hơn phương sai $s^2$ trong các báo cáo kinh tế - xã hội thực tế?",
  "options": [
    "A. Vì độ lệch chuẩn luôn luôn là một số nguyên",
    "B. Vì độ lệch chuẩn có cùng đơn vị đo với số liệu gốc ban đầu",
    "C. Vì độ lệch chuẩn không bao giờ bị ảnh hưởng bởi sai số",
    "D. Vì độ lệch chuẩn dễ tính bằng tay hơn phương sai"
  ],
  "answer": "B. Vì độ lệch chuẩn có cùng đơn vị đo với số liệu gốc ban đầu",
  "explanation": "Phương sai có đơn vị là bình phương (ví dụ: $\\text{kg}^2$, $\\text{VNĐ}^2$) nên khó so sánh trực tiếp, trong khi độ lệch chuẩn có cùng đơn vị với số liệu gốc nên dễ hình dung và diễn giải hơn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Hai nhóm công nhân A và B sản xuất cùng một chi tiết máy. Năng suất trung bình của hai nhóm bằng nhau là 85 sản phẩm/ngày. Độ lệch chuẩn của nhóm A là $s_A = 2.1$, của nhóm B là $s_B = 5.4$. Nhận xét nào sau đây chính xác nhất?",
  "options": [
    "A. Nhóm B có tay nghề đồng đều hơn nhóm A",
    "B. Nhóm A có tay nghề đồng đều hơn nhóm B",
    "C. Cả hai nhóm có tay nghề như nhau",
    "D. Nhóm B làm việc hiệu quả hơn nhóm A"
  ],
  "answer": "B. Nhóm A có tay nghề đồng đều hơn nhóm B",
  "explanation": "Độ lệch chuẩn của nhóm A nhỏ hơn nhóm B ($s_A = 2.1 < s_B = 5.4$) chứng tỏ năng suất của các công nhân nhóm A tập trung sát số trung bình hơn, tức tay nghề đồng đều hơn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho mẫu số liệu ghép nhóm gồm 2 nhóm: $[0; 10)$ tần số 4, $[10; 20)$ tần số 6. Số trung bình $\\bar{x}$ của mẫu là:",
  "options": [
    "A. 10",
    "B. 11",
    "C. 12",
    "D. 9"
  ],
  "answer": "B. 11",
  "explanation": "Giá trị đại diện lần lượt là $c_1 = 5, c_2 = 15$. Cỡ mẫu $n = 4 + 6 = 10$. $\\bar{x} = \\frac{4 \\cdot 5 + 6 \\cdot 15}{10} = \\frac{20 + 90}{10} = 11$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Với mẫu số liệu ở câu trên ($[0; 10): 4$, $[10; 20): 6$), phương sai $s^2$ bằng:",
  "options": [
    "A. 24",
    "B. 25",
    "C. 20",
    "D. 16"
  ],
  "answer": "A. 24",
  "explanation": "Ta có $\\bar{x} = 11$. $s^2 = \\frac{1}{10}[4(5 - 11)^2 + 6(15 - 11)^2] = \\frac{1}{10}[4(36) + 6(16)] = \\frac{144 + 96}{10} = \\frac{240}{10} = 24$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nếu mẫu số liệu ghép nhóm có phương sai $s^2 = 0$ thì điều này có nghĩa là:",
  "options": [
    "A. Mẫu số liệu không có số liệu nào",
    "B. Tất cả các nhóm đều có cùng tần số",
    "C. Tất cả các số liệu trong mẫu đều tập trung tại một giá trị đại diện duy nhất",
    "D. Không thể xảy ra trường hợp phương sai bằng 0"
  ],
  "answer": "C. Tất cả các số liệu trong mẫu đều tập trung tại một giá trị đại diện duy nhất",
  "explanation": "Phương sai là trung bình bình phương các độ lệch so với số trung bình. $s^2 = 0 \\iff c_i = \\bar{x}$ với mọi nhóm có tần số $m_i > 0$, tức toàn bộ số liệu đều bằng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Trong phân phối chuẩn (đường cong hình chuông), khoảng $[\bar{x} - 2s; \\bar{x} + 2s]$ bao phủ xấp xỉ bao nhiêu phần trăm dữ liệu?",
  "options": [
    "A. 50%",
    "B. 68.3%",
    "C. 95.4%",
    "D. 99.7%"
  ],
  "answer": "C. 95.4%",
  "explanation": "Theo quy tắc thực nghiệm (Empirical Rule): 1 độ lệch chuẩn bao phủ khoảng 68.3%, 2 độ lệch chuẩn bao phủ khoảng 95.4%, và 3 độ lệch chuẩn bao phủ khoảng 99.7% dữ liệu."
}'></div>
