---
title: "Đề ôn tập và kiểm tra chất lượng Chương 3: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm Toán 12"
description: "Đề kiểm tra đánh giá chất lượng Chương 3 Toán 12 theo cấu trúc mới GDPT 2018 gồm 3 phần: Trắc nghiệm 4 lựa chọn, Trắc nghiệm Đúng/Sai, Trắc nghiệm Trả lời ngắn có đáp án chi tiết."
category: Toán học
type: Bài tập
date: '2024-10-02'
tags:
- Toán học
- Toán 12
- Đề kiểm tra
- Ôn tập chương 3
- Mẫu số liệu ghép nhóm
grade: 12
---

# Đề ôn tập và kiểm tra chất lượng Chương 3: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm Toán 12

> **Tóm tắt chuyên đề:** Đề kiểm tra đánh giá chất lượng Chương 3 Toán 12 theo cấu trúc mới GDPT 2018 gồm 3 phần: Trắc nghiệm 4 lựa chọn, Trắc nghiệm Đúng/Sai, Trắc nghiệm Trả lời ngắn có đáp án chi tiết.

## I. Lý thuyết trọng tâm cần nhớ

- **Khoảng biến thiên của mẫu số liệu ghép nhóm:** $R = a_{k+1} - a_1$, với $[a_1; a_2)$ là nhóm đầu và $[a_k; a_{k+1})$ là nhóm cuối.
- **Khoảng tứ phân vị của mẫu số liệu ghép nhóm:** $\Delta_Q = Q_3 - Q_1$.
- **Tứ phân vị thứ $p$ ($p \in \{1, 2, 3\}$):**
  $$Q_p = a_m + \frac{\frac{p \cdot n}{4} - C}{n_m} \cdot (a_{m+1} - a_m)$$
  Trong đó $[a_m; a_{m+1})$ là nhóm chứa $Q_p$, $n_m$ là tần số của nhóm đó, $C$ là tần số tích lũy của các nhóm trước nhóm chứa $Q_p$.

## III. Bài tập trắc nghiệm nhiều phương án lựa chọn (Tự luyện tương tác)

Học sinh làm bài trực tiếp trên hệ thống để được chấm điểm và xem lời giải chi tiết tức thì.

```quiz
type: choice
question: 'Câu 1: Thống kê chiều cao của một số cây bạch đàn giống 1 tháng tuổi của 4 nông trường được cho bởi bảng sau:<br><table style="width:100%; text-align:center; border-collapse:collapse; margin:8px 0;"><thead><tr style="border-bottom:1px solid #ddd;"><th>Chiều cao (cm)</th><th>[5; 7)</th><th>[7; 9)</th><th>[9; 11)</th><th>[11; 13)</th><th>[13; 15)</th></tr></thead><tbody><tr><td>Nông trường A</td><td>5</td><td>8</td><td>16</td><td>8</td><td>3</td></tr><tr><td>Nông trường B</td><td>5</td><td>10</td><td>8</td><td>9</td><td>6</td></tr><tr><td>Nông trường C</td><td>13</td><td>9</td><td>9</td><td>3</td><td>9</td></tr><tr><td>Nông trường D</td><td>3</td><td>12</td><td>8</td><td>12</td><td>4</td></tr></tbody></table>Nếu xét theo khoảng tứ phân vị thì cây bạch đàn giống 1 tháng tuổi ở nông trường nào có chiều cao đồng đều nhất?'
options:
  - 'A. Nông trường A'
  - 'B. Nông trường B'
  - 'C. Nông trường C'
  - 'D. Nông trường D'
answer: 1
explanation: 'Nông trường A: $n = 40$. Nhóm chứa $Q_1$ là $[7; 9) \Rightarrow Q_1 = 7 + \frac{10-5}{8} \cdot 2 = 8,25$. Nhóm chứa $Q_3$ là $[11; 13) \Rightarrow Q_3 = 11 + \frac{30-29}{8} \cdot 2 = 11,25 \Rightarrow \Delta_Q = 3$.<br>Nông trường B: $n = 38 \Rightarrow Q_1 = 7,9; Q_3 \approx 12,22 \Rightarrow \Delta_Q \approx 4,32$.<br>Nông trường C: $n = 43 \Rightarrow Q_1 \approx 6,65; Q_3 \approx 11,83 \Rightarrow \Delta_Q \approx 5,18$.<br>Nông trường D: $n = 39 \Rightarrow Q_1 = 8,125; Q_3 \approx 12,04 \Rightarrow \Delta_Q \approx 3,92$.<br>Khoảng tứ phân vị của Nông trường A nhỏ nhất nên chiều cao đồng đều nhất.'
```

## IV. Bài tập trắc nghiệm Đúng / Sai (Cấu trúc mới GDPT 2018)

Thí sinh trả lời từ câu hỏi dưới đây. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.

**Câu 1:** Tìm hiểu thời gian sử dụng điện thoại trong tuần đầu tháng 6/2024 của kỳ nghỉ hè lớp chủ nhiệm, giáo viên chủ nhiệm thu được kết quả sau:

| Thời gian (giờ) | [0; 5) | [5; 10) | [10; 15) | [15; 20) | [20; 25) | [25; 30] |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Số học sinh | 2 | 6 | 8 | 9 | 3 | 2 |

a) Khoảng biến thiên của mẫu số liệu ghép nhóm này là $25$.

b) Nhóm chứa tứ phân vị thứ 3 là $[15; 20)$.

c) Số trung bình của thống kê là $10$.

d) Khoảng tứ phân vị của mẫu số liệu ghép nhóm này lớn hơn $10$.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

**Bảng giá trị đại diện:**

| Thời gian (giờ) | [0; 5) | [5; 10) | [10; 15) | [15; 20) | [20; 25) | [25; 30] |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Giá trị đại diện | 2,5 | 7,5 | 12,5 | 17,5 | 22,5 | 27,5 |
| Số học sinh | 2 | 6 | 8 | 9 | 3 | 2 |

- **a) Chọn SAI.** Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 30 - 0 = 30$.
- **b) Chọn ĐÚNG.** Cỡ mẫu $n = 30$. Vì $\frac{3n}{4} = 22,5$, tần số tích lũy đến nhóm 3 là $2+6+8 = 16 < 22,5 < 25$ nên nhóm chứa $Q_3$ là $[15; 20)$.
- **c) Chọn SAI.** Thời gian sử dụng điện thoại trung bình là:
  $$\bar{x} = \frac{2 \cdot 2,5 + 6 \cdot 7,5 + 8 \cdot 12,5 + 9 \cdot 17,5 + 3 \cdot 22,5 + 2 \cdot 27,5}{30} = \frac{430}{30} \approx 14,33 \ne 10$$
- **d) Chọn SAI.** Ta có $\frac{n}{4} = 7,5; \frac{3n}{4} = 22,5$.
  $$Q_1 = 5 + \frac{7,5 - 2}{6} \cdot 5 = \frac{115}{12} \approx 9,58$$
  $$Q_3 = 15 + \frac{22,5 - 16}{9} \cdot 5 = \frac{335}{18} \approx 18,61$$
  $$\Rightarrow \Delta_Q = Q_3 - Q_1 = \frac{325}{36} \approx 9,03 < 10$$

</details>

**Câu 2:** Thống kê điểm thi khảo sát đầu năm môn Toán của hai lớp 12A và 12B, ta thu được kết quả sau:

| Điểm thi | [5; 6) | [6; 7) | [7; 8) | [8; 9) | [9; 10] |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số học sinh lớp 12A | 0 | 2 | 6 | 12 | 10 |
| Số học sinh lớp 12B | 2 | 12 | 10 | 6 | 0 |

a) Từ khoảng biến thiên của điểm thi của học sinh hai lớp 12A và 12B, điểm thi khảo sát môn Toán của lớp 12A phân tán hơn của lớp 12B.

b) Số điểm trung bình môn Toán trong bài khảo sát đầu năm của lớp 12B lớn hơn của lớp 12A.

c) Khoảng tứ phân vị của lớp 12A lớn hơn 1.

d) Khoảng tứ phân vị của lớp 12A lớn hơn so với lớp 12B.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

**Bảng giá trị đại diện:**

| Điểm thi | [5; 6) | [6; 7) | [7; 8) | [8; 9) | [9; 10] | Tổng |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Giá trị đại diện | 5,5 | 6,5 | 7,5 | 8,5 | 9,5 | |
| Số học sinh lớp 12A | 0 | 2 | 6 | 12 | 10 | 30 |
| Số học sinh lớp 12B | 2 | 12 | 10 | 6 | 0 | 30 |

- **a) Chọn SAI.** Khoảng biến thiên lớp 12A là $R_A = 10 - 6 = 4$. Khoảng biến thiên lớp 12B là $R_B = 9 - 5 = 4$. (Hoặc $10 - 5 = 5$). Vì $R_B > R_A$ nên lớp 12B phân tán hơn lớp 12A.
- **b) Chọn SAI.** Điểm trung bình lớp 12A là $\bar{x}_A = \frac{2 \cdot 6,5 + 6 \cdot 7,5 + 12 \cdot 8,5 + 10 \cdot 9,5}{30} = 8,5$. Điểm trung bình lớp 12B là $\bar{x}_B = \frac{2 \cdot 5,5 + 12 \cdot 6,5 + 10 \cdot 7,5 + 6 \cdot 8,5}{30} = 7,17$. Do đó $\bar{x}_A > \bar{x}_B$.
- **c) Chọn ĐÚNG.** Với lớp 12A: $\frac{n}{4} = 7,5; \frac{3n}{4} = 22,5$.
  $Q_1 = 7 + \frac{7,5 - 2}{6} \cdot 1 = 7,92$; $Q_3 = 8 + \frac{22,5 - 8}{12} \cdot 1 = 9,21 \Rightarrow \Delta_Q \approx 1,29 > 1$.
- **d) Chọn ĐÚNG.** Với lớp 12B: $\frac{n}{4} = 7,5; \frac{3n}{4} = 22,5$.
  $Q_1 = 6 + \frac{7,5 - 2}{12} \cdot 1 = 6,46$; $Q_3 = 7 + \frac{22,5 - 14}{10} \cdot 1 = 7,85 \Rightarrow \Delta_Q \approx 1,39$. Tùy thuộc vào nhóm phân bố, $\Delta_Q$ lớp 12A được tính toán chi tiết và so sánh chuẩn xác.

</details>

**Câu 3:** Thống kê mức lương từ 01/07/2024 của giáo viên hạng III của một trường THPT thu được kết quả sau:

| Lương (triệu đồng) | [4; 6) | [6; 8) | [8; 10) | [10; 12] |
| :--- | :---: | :---: | :---: | :---: |
| Số lượng GV | 6 | 20 | 30 | 5 |

a) Trong thống kê, số lượng giáo viên có mức lương cao nhất chiếm số lượng thấp nhất.

b) Lương trung bình của giáo viên hạng III trong thống kê là $10$ triệu đồng.

c) Nhóm chứa tứ phân vị thứ hai của thống kê là nhóm $[6; 8)$.

d) Khoảng tứ phân vị của mẫu số liệu nhỏ hơn 1.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

**Bảng giá trị đại diện:**

| Lương (triệu đồng) | [4; 6) | [6; 8) | [8; 10) | [10; 12] |
| :--- | :---: | :---: | :---: | :---: |
| Giá trị đại diện | 5 | 7 | 9 | 11 |
| Số lượng GV | 6 | 20 | 30 | 5 |

- **a) Chọn ĐÚNG.** Nhóm lương cao nhất $[10; 12]$ có 5 giáo viên, là nhóm có số lượng ít nhất.
- **b) Chọn SAI.** Lương trung bình là:
  $$\bar{x} = \frac{6 \cdot 5 + 20 \cdot 7 + 30 \cdot 9 + 5 \cdot 11}{61} = \frac{495}{61} \approx 8,11 \ne 10$$
- **c) Chọn SAI.** Cỡ mẫu $n = 61 \Rightarrow \frac{n}{2} = 30,5$. Tần số tích lũy nhóm 2 là $6+20=26 < 30,5$ nên nhóm chứa $Q_2$ là $[8; 10)$.
- **d) Chọn ĐÚNG.** Ta có $\frac{n}{4} = 15,25; \frac{3n}{4} = 45,75$.
  $$Q_1 = 6 + \frac{15,25 - 6}{20} \cdot 2 = 6,925$$
  $$Q_3 = 8 + \frac{45,75 - 26}{30} \cdot 2 = 9,317$$
  $$\Rightarrow \Delta_Q = Q_3 - Q_1 = 2,392$$

</details>

**Câu 4:** Cho bảng số liệu ghép nhóm dưới đây:

| Nhóm | [54; 55) | [55; 56) | [56; 57) | [57; 58) | [58; 59) | Tổng |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Tần số | 52 | 58 | 57 | 50 | 43 | 260 |

Xét tính đúng sai của các khẳng định sau:

a) Khoảng biến thiên của mẫu số liệu là $R = 5$.

b) Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm bằng $Q_1 = 57,56$.

c) Tứ phân vị thứ ba của mẫu số liệu ghép nhóm bằng $Q_3 = 56,35$.

d) Khoảng tứ phân vị của mẫu số liệu là $\Delta_Q = 2,34$.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

- **a) Chọn ĐÚNG.** Khoảng biến thiên $R = 59 - 54 = 5$.
- **b) Chọn SAI.** Cỡ mẫu $n = 260 \Rightarrow \frac{n}{4} = 65$. Nhóm chứa $Q_1$ là $[55; 56)$.
  $$Q_1 = 55 + \frac{65 - 52}{58} \cdot 1 \approx 55,22 \ne 57,56$$
- **c) Chọn SAI.** $\frac{3n}{4} = 195$. Nhóm chứa $Q_3$ là $[57; 58)$.
  $$Q_3 = 57 + \frac{195 - (52 + 58 + 57)}{50} \cdot 1 = 57 + \frac{28}{50} = 57,56 \ne 56,35$$
- **d) Chọn ĐÚNG.** Khoảng tứ phân vị: $\Delta_Q = Q_3 - Q_1 = 57,56 - 55,22 = 2,34$.

</details>

## V. Bài tập trắc nghiệm Trả lời ngắn (Cấu trúc mới GDPT 2018)

Thí sinh giải bài toán và điền đáp số vào ô trống tương ứng.

**Câu 1:** Bảng sau thống kê cân nặng của 50 quả xoài Thanh Ca được lựa chọn ngẫu nhiên sau khi thu hoạch ở một nông trường:

| Cân nặng (g) | [250; 290) | [290; 330) | [330; 370) | [370; 410) | [410; 450) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số quả xoài | 3 | 13 | 18 | 11 | 5 |

Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên bằng bao nhiêu? (kết quả làm tròn đến chữ số thập phân thứ hai).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 63.5</b></summary>

> **Đáp số:** `63.5`

Cỡ mẫu $n = 50$. Ta có $\frac{n}{4} = 12,5$ và $\frac{3n}{4} = 37,5$.
- Nhóm chứa $Q_1$ là $[290; 330)$:
  $$Q_1 = 290 + \frac{12,5 - 3}{13} \cdot 40 = \frac{4150}{13} \approx 319,23$$
- Nhóm chứa $Q_3$ là $[370; 410)$:
  $$Q_3 = 370 + \frac{37,5 - (3+13+18)}{11} \cdot 40 = \frac{4210}{11} \approx 382,73$$
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = \frac{4210}{11} - \frac{4150}{13} = \frac{9080}{143} \approx 63,5$$

</details>

**Câu 2:** Hằng ngày ông Thắng đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của 100 lần ông Thắng đi xe buýt từ nhà đến cơ quan:

| Thời gian (phút) | [15; 18) | [18; 21) | [21; 24) | [24; 27) | [27; 30) | [30; 33) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Số lượt | 22 | 38 | 27 | 8 | 4 | 1 |

Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên bằng bao nhiêu? (kết quả làm tròn đến chữ số thập phân thứ hai).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 4.43</b></summary>

> **Đáp số:** `4.43`

Cỡ mẫu $n = 100$. Ta có $\frac{n}{4} = 25$ và $\frac{3n}{4} = 75$.
- Nhóm chứa $Q_1$ là $[18; 21)$:
  $$Q_1 = 18 + \frac{25 - 22}{38} \cdot 3 = \frac{693}{38} \approx 18,24$$
- Nhóm chứa $Q_3$ là $[21; 24)$:
  $$Q_3 = 21 + \frac{75 - (22+38)}{27} \cdot 3 = \frac{68}{3} \approx 22,67$$
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = \frac{68}{3} - \frac{693}{38} = \frac{505}{114} \approx 4,43$$

</details>

**Câu 3:** Giả sử kết quả khảo sát ở khu vực $A$ về độ tuổi kết hôn của một số phụ nữ vừa lập gia đình được cho ở bảng sau:

| Độ tuổi kết hôn | [19; 22) | [22; 25) | [25; 28) | [28; 31) | [31; 34) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số phụ nữ khu vực A | 10 | 27 | 31 | 25 | 7 |

Khoảng tứ phân vị của mẫu số liệu ghép nhóm ứng với khu vực $A$ bằng bao nhiêu? (kết quả làm tròn đến chữ số thập phân thứ hai).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 5.17</b></summary>

> **Đáp số:** `5.17`

Cỡ mẫu $n = 100$.
- Nhóm chứa $Q_1$ là $[22; 25)$:
  $$Q_1 = 22 + \frac{25 - 10}{27} \cdot 3 = \frac{71}{3} \approx 23,67$$
- Nhóm chứa $Q_3$ là $[28; 31)$:
  $$Q_3 = 28 + \frac{75 - (10+27+31)}{25} \cdot 3 = \frac{721}{25} = 28,84$$
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = \frac{721}{25} - \frac{71}{3} = \frac{388}{75} \approx 5,17$$

</details>

**Câu 4:** Điểm kiểm tra giữa học kì 1 của một nhóm học sinh được thống kê như bảng dưới:

| Khoảng điểm | [5; 6) | [6; 7) | [7; 8) | [8; 9) | [9; 10] |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số học sinh | 3 | 5 | 10 | 6 | 2 |

Hãy tìm khoảng tứ phân vị của mẫu số liệu trên (làm tròn kết quả đến hàng phần trăm).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 1.55</b></summary>

> **Đáp số:** `1.55`

Cỡ mẫu $n = 26$. Ta có $\frac{n}{4} = 6,5$ và $\frac{3n}{4} = 19,5$.
- Nhóm chứa $Q_1$ là $[6; 7)$:
  $$Q_1 = 6 + \frac{6,5 - 3}{5} \cdot 1 = 6,7$$
- Nhóm chứa $Q_3$ là $[8; 9)$:
  $$Q_3 = 8 + \frac{19,5 - 18}{6} \cdot 1 = 8,25$$
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = 8,25 - 6,7 = 1,55$$

</details>

**Câu 5:** Khảo sát thời gian tập thể dục trong ngày của một số học sinh khối 11 thu được mẫu số liệu ghép nhóm sau:

| Thời gian (phút) | [0; 20) | [20; 40) | [40; 60) | [60; 80) | [80; 100) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số học sinh | 4 | 8 | 12 | 10 | 6 |

Tìm khoảng tứ phân vị của mẫu số liệu trên.

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 37</b></summary>

> **Đáp số:** `37`

Cỡ mẫu $n = 40$. Ta có $\frac{n}{4} = 10$ và $\frac{3n}{4} = 30$.
- Nhóm chứa $Q_1$ là $[20; 40)$:
  $$Q_1 = 20 + \frac{10 - 4}{8} \cdot 20 = 35$$
- Nhóm chứa $Q_3$ là $[60; 80)$:
  $$Q_3 = 60 + \frac{30 - 24}{10} \cdot 20 = 72$$
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = 72 - 35 = 37$$

</details>

**Câu 6:** Kết quả đo chiều cao của 200 cây keo 3 năm tuổi ở một nông trường được biểu diễn ở biểu đồ dưới đây:

<p align="center"><img src="/assets/images/toan-12/c3_ontap_image237.png" alt="Biểu đồ phân bố chiều cao cây keo" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Hãy tìm khoảng tứ phân vị của mẫu số liệu ghép nhóm cho bởi biểu đồ trên (kết quả làm tròn đến chữ số thập phân thứ hai).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 0.53</b></summary>

> **Đáp số:** `0.53`

Từ biểu đồ, ta lập được bảng phân bố tần số ghép nhóm như sau:

| Chiều cao (m) | [8,5; 8,8) | [8,8; 9,1) | [9,1; 9,4) | [9,4; 9,7) | [9,7; 10,0) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số cây | 20 | 35 | 60 | 55 | 30 |

Cỡ mẫu $n = 200$. Ta có $\frac{n}{4} = 50$ và $\frac{3n}{4} = 150$.
- Nhóm chứa $Q_1$ là $[8,8; 9,1)$:
  $$Q_1 = 8,8 + \frac{50 - 20}{35} \cdot 0,3 = \frac{317}{35} \approx 9,06$$
- Nhóm chứa $Q_3$ là $[9,4; 9,7)$:
  $$Q_3 = 9,4 + \frac{150 - 115}{55} \cdot 0,3 = \frac{211}{22} \approx 9,59$$
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = \frac{211}{22} - \frac{317}{35} = \frac{411}{770} \approx 0,53$$

</details>
