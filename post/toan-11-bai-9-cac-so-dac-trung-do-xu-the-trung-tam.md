---
title: 'Toán 11 Bài 9: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm'
description: 'Lý thuyết trọng tâm Bài 9 Toán 11 Kết nối tri thức: Công thức chuẩn xác tính số trung bình, trung vị (Me), tứ phân vị (Q1, Q2, Q3) và mốt (Mo) của mẫu số liệu ghép nhóm; ý nghĩa thực tế khi xử lý giá trị ngoại lai và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Thống kê 11
  - Số trung bình
  - Trung vị ghép nhóm
  - Tứ phân vị ghép nhóm
  - Mốt ghép nhóm
  - Kết nối tri thức
grade: 11
---

# Bài 9. Các số đặc trưng đo xu thế trung tâm

Chào mừng các em đến với bài học trọng tâm và ứng dụng nhiều nhất của thống kê hiện đại: **Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm**!

Trong [Bài 8: Mẫu số liệu ghép nhóm](toan-11-bai-8-mau-so-lieu-ghep-nhom.html), chúng ta đã biết cách gom hàng ngàn số liệu thô thành các khoảng nhóm gọn gàng. Nhưng để ra các quyết định thực tế:
- Mức thu nhập trung bình của người lao động trong một tỉnh là bao nhiêu để hoạch định chính sách an sinh xã hội?
- Khi mức lương của một vài giám đốc tập đoàn cao gấp hàng trăm lần công nhân (giá trị ngoại lai - Outlier), số trung bình có còn phản ánh đúng mức sống của đa số người dân hay ta phải dùng **Trung vị**?
- Một nhà máy sản xuất giày cần nhập cỡ giày nào nhiều nhất (nhóm có nhu cầu cao nhất — **Mốt**) để tối ưu hóa kho hàng?
- Làm sao chia học sinh toàn trường thành 4 nhóm năng lực học tập đều nhau bằng **Tứ phân vị**?

Bài học này sẽ cung cấp cho các em toàn bộ bộ công cụ giải tích thống kê chuẩn xác theo chương trình GDPT 2018!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: 4 SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Số trung bình ($\bar{x}$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\bar{x} = \frac{\sum m_i c_i}{n}$.<br>• Đại diện cho giá trị trung bình cộng của toàn bộ mẫu.<br>• Nhược điểm: Nhạy cảm với giá trị bất thường (outlier).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Trung vị ($M_e$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chia mẫu số liệu thành 2 nửa bằng nhau ($50\% - 50\%$).<br>• $M_e = a_p + \frac{\frac{n}{2} - C}{m_p} \cdot L$.<br>• Ưu điểm: Không bị ảnh hưởng bởi giá trị ngoại lai.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tứ phân vị ($Q_1, Q_2, Q_3$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chia mẫu thành 4 phần bằng nhau ($25\%$ mỗi phần).<br>• $Q_2 = M_e$.<br>• $Q_1$ xác định tại vị trí $\frac{n}{4}$; $Q_3$ xác định tại $\frac{3n}{4}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Mốt ($M_o$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Giá trị có tần số xuất hiện cao nhất trong mẫu.<br>• $M_o = a_j + \frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \cdot L$.<br>• Ứng dụng: Xác định xu hướng phổ biến nhất.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm trung vị:** Trong một cuộc thi chạy, nếu thời gian trung vị là $12.5\text{ giây}$, điều đó có nghĩa là có bao nhiêu phần trăm thí sinh chạy nhanh hơn (hoặc bằng) $12.5\text{ giây}$?
2. **Giá trị ngoại lai:** Nếu một công ty gồm 9 nhân viên lương 10 triệu đồng và 1 giám đốc lương 200 triệu đồng, số trung bình là 29 triệu. Con số này có phản ánh đúng mức thu nhập của đa số nhân viên không?
3. **Mốt:** Trong kinh doanh giày dép, chủ cửa hàng quan tâm nhất đến số trung bình hay mốt của kích cỡ giày?
4. **Vị trí tứ phân vị:** Tứ phân vị thứ nhất $Q_1$ chia mẫu số liệu thành hai phần có tỉ lệ là bao nhiêu?
5. **Ký hiệu $c_i$:** Trong công thức tính số trung bình của mẫu ghép nhóm, $c_i$ là gì?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Đúng $50\%$ số thí sinh có thời gian nhỏ hơn hoặc bằng trung vị $12.5\text{ s}$ và $50\%$ chạy chậm hơn.
> 2. Hoàn toàn không! Mức lương 200 triệu là giá trị ngoại lai kéo vọt số trung bình lên $29$ triệu. Trong tình huống này, Trung vị ($10$ triệu) mới là con số đại diện trung thực nhất.
> 3. Quan tâm đến Mốt (cỡ giày được nhiều người mua nhất) để nhập kho đúng số lượng.
> 4. $25\%$ số liệu nhỏ hơn hoặc bằng $Q_1$ và $75\%$ số liệu lớn hơn $Q_1$.
> 5. $c_i$ là giá trị đại diện của nhóm thứ $i$ (trung bình cộng của hai đầu mút nhóm).

---

## I. Số trung bình của mẫu số liệu ghép nhóm

### 1. Công thức tính

Giả sử mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2), [a_2; a_3), \dots, [a_k; a_{k+1})$ với tần số tương ứng là $m_1, m_2, \dots, m_k$.  
Gọi $c_1, c_2, \dots, c_k$ lần lượt là giá trị đại diện của các nhóm, cỡ mẫu là $n = m_1 + m_2 + \dots + m_k$.

> [!IMPORTANT]
> **Công thức Số trung bình ($\bar{x}$):**
> $$\bar{x} = \frac{m_1 c_1 + m_2 c_2 + \dots + m_k c_k}{n} = \frac{1}{n}\sum_{i=1}^k m_i c_i$$

### 2. Ý nghĩa thực tế
Số trung bình đại diện cho giá trị trung bình của toàn bộ dữ liệu. Nó được sử dụng phổ biến nhất khi dữ liệu phân bố đối xứng và không có các giá trị quá lớn hoặc quá nhỏ bất thường.

---

## II. Trung vị của mẫu số liệu ghép nhóm

### 1. Quy trình tìm Trung vị ($M_e$)

Để tìm trung vị của mẫu số liệu ghép nhóm kích thước $n$:

- **Bước 1 (Lập bảng tần số tích lũy):**  
  Tính tần số tích lũy $cf_i$ của từng nhóm:
  $$cf_1 = m_1, \quad cf_2 = m_1 + m_2, \quad \dots, \quad cf_k = n$$
- **Bước 2 (Xác định nhóm chứa trung vị):**  
  Tìm nhóm $[a_p; a_{p+1})$ đầu tiên có tần số tích lũy $cf_p \ge \frac{n}{2}$. Đây chính là nhóm chứa trung vị.
- **Bước 3 (Áp dụng công thức nội suy trung vị):**

> [!IMPORTANT]
> **Công thức Trung vị ($M_e$):**
> $$M_e = a_p + \frac{\frac{n}{2} - C}{m_p} \cdot (a_{p+1} - a_p)$$
> Trong đó:
> - $a_p$ là đầu mút trái của nhóm chứa trung vị.
> - $a_{p+1} - a_p$ là độ dài của nhóm chứa trung vị.
> - $m_p$ là tần số của nhóm chứa trung vị.
> - $C = cf_{p-1} = m_1 + m_2 + \dots + m_{p-1}$ là **tần số tích lũy của nhóm đứng liền trước** nhóm chứa trung vị (nếu $p = 1$ thì $C = 0$).

---

## III. Tứ phân vị của mẫu số liệu ghép nhóm

Tứ phân vị gồm ba giá trị $Q_1, Q_2, Q_3$ chia mẫu số liệu đã sắp xếp thành 4 phần có số lượng quan sát bằng nhau ($25\%$ mỗi phần).

- **Tứ phân vị thứ hai ($Q_2$):** Chính là Trung vị của mẫu số liệu:
  $$Q_2 = M_e$$

- **Tứ phân vị thứ nhất ($Q_1$):**
  - Nhóm chứa $Q_1$ là nhóm $[a_p; a_{p+1})$ đầu tiên có tần số tích lũy thỏa mãn:
    $$cf_p \ge \frac{n}{4}$$
  - Công thức tính $Q_1$:
    $$Q_1 = a_p + \frac{\frac{n}{4} - C}{m_p} \cdot (a_{p+1} - a_p)$$
    *(với $C$ là tần số tích lũy của nhóm trước nhóm chứa $Q_1$)*.

- **Tứ phân vị thứ ba ($Q_3$):**
  - Nhóm chứa $Q_3$ là nhóm $[a_r; a_{r+1})$ đầu tiên có tần số tích lũy thỏa mãn:
    $$cf_r \ge \frac{3n}{4}$$
  - Công thức tính $Q_3$:
    $$Q_3 = a_r + \frac{\frac{3n}{4} - C'}{m_r} \cdot (a_{r+1} - a_r)$$
    *(với $C'$ là tần số tích lũy của nhóm trước nhóm chứa $Q_3$)*.

> [!NOTE]
> **Khoảng tứ phân vị (Interquartile Range - $\Delta_Q$):**
> $$\Delta_Q = Q_3 - Q_1$$
> Khoảng tứ phân vị đo độ phân tán của $50\%$ số liệu trung tâm và không bị ảnh hưởng bởi các giá trị ngoại lai.

---

## IV. Mốt của mẫu số liệu ghép nhóm

### 1. Quy trình tìm Mốt ($M_o$)

- **Bước 1 (Xác định nhóm chứa mốt):**  
  Là nhóm $[a_j; a_{j+1})$ có **tần số lớn nhất** ($m_j = \max\{m_1, m_2, \dots, m_k\}$).
- **Bước 2 (Áp dụng công thức mốt):**

> [!IMPORTANT]
> **Công thức Mốt ($M_o$):**
> $$M_o = a_j + \frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \cdot (a_{j+1} - a_j)$$
> Trong đó:
> - $a_j$ là đầu mút trái của nhóm chứa mốt.
> - $m_j$ là tần số của nhóm chứa mốt.
> - $m_{j-1}$ là tần số của nhóm đứng liền trước nhóm chứa mốt (quy ước bằng 0 nếu nhóm chứa mốt là nhóm đầu tiên).
> - $m_{j+1}$ là tần số của nhóm đứng liền sau nhóm chứa mốt (quy ước bằng 0 nếu nhóm chứa mốt là nhóm cuối cùng).

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Tính số trung bình của mẫu số liệu ghép nhóm

#### Ví dụ 1:
Khảo sát thời gian hoàn thành một bài kiểm tra trắc nghiệm online (tính bằng phút) của 40 học sinh lớp 11 được ghi trong bảng sau:

| Thời gian (phút) | $[15; 20)$ | $[20; 25)$ | $[25; 30)$ | $[30; 35)$ | $[35; 40)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh ($m_i$)** | $5$ | $12$ | $14$ | $6$ | $3$ |

Tính thời gian hoàn thành bài kiểm tra trung bình của học sinh.

#### Lời giải chi tiết:
- Cỡ mẫu: $n = 5 + 12 + 14 + 6 + 3 = 40$.
- Tính giá trị đại diện $c_i = \frac{a_i + a_{i+1}}{2}$ cho từng nhóm:
  - Nhóm 1 $[15; 20)$: $c_1 = \frac{15 + 20}{2} = 17.5$
  - Nhóm 2 $[20; 25)$: $c_2 = \frac{20 + 25}{2} = 22.5$
  - Nhóm 3 $[25; 30)$: $c_3 = \frac{25 + 30}{2} = 27.5$
  - Nhóm 4 $[30; 35)$: $c_4 = \frac{30 + 35}{2} = 32.5$
  - Nhóm 5 $[35; 40)$: $c_5 = \frac{35 + 40}{2} = 37.5$

Áp dụng công thức số trung bình:
$$\begin{aligned}
\bar{x} &= \frac{5 \times 17.5 + 12 \times 22.5 + 14 \times 27.5 + 6 \times 32.5 + 3 \times 37.5}{40} \\
&= \frac{87.5 + 270 + 385 + 195 + 112.5}{40} \\
&= \frac{1050}{40} = 26.25\text{ (phút)}
\end{aligned}$$
Vậy thời gian trung bình làm bài kiểm tra của học sinh là **$26.25\text{ phút}$** (tức 26 phút 15 giây).

---

### Dạng 2: Tính Trung vị ($M_e$) của mẫu số liệu ghép nhóm

#### Ví dụ 2:
Từ bảng số liệu của Ví dụ 1, hãy xác định trung vị $M_e$ và nêu ý nghĩa thực tế.

#### Lời giải chi tiết:
- Cỡ mẫu $n = 40 \Rightarrow \frac{n}{2} = 20$.
- Lập bảng tần số tích lũy:
  - Nhóm 1 $[15; 20)$: $cf_1 = 5$
  - Nhóm 2 $[20; 25)$: $cf_2 = 5 + 12 = 17$
  - Nhóm 3 $[25; 30)$: $cf_3 = 17 + 14 = 31$
  - Nhóm 4 $[30; 35)$: $cf_4 = 31 + 6 = 37$
  - Nhóm 5 $[35; 40)$: $cf_5 = 37 + 3 = 40$

Vì $cf_2 = 17 < 20$ và $cf_3 = 31 \ge 20$, nhóm chứa trung vị là **nhóm 3: $[25; 30)$**.
- Đầu mút trái: $a_3 = 25$.
- Độ dài nhóm: $L = 30 - 25 = 5$.
- Tần số nhóm chứa trung vị: $m_3 = 14$.
- Tần số tích lũy nhóm đứng trước: $C = cf_2 = 17$.

Áp dụng công thức trung vị:
$$M_e = 25 + \frac{20 - 17}{14} \times 5 = 25 + \frac{3}{14} \times 5 = 25 + \frac{15}{14} \approx 25 + 1.07 = 26.07\text{ (phút)}$$

**Ý nghĩa:** Có khoảng $50\%$ số học sinh hoàn thành bài kiểm tra trong thời gian dưới $26.07\text{ phút}$ và $50\%$ số học sinh mất từ $26.07\text{ phút}$ trở lên.

---

### Dạng 3: Tính các Tứ phân vị $Q_1$ và $Q_3$

#### Ví dụ 3:
Từ bảng số liệu của Ví dụ 1, hãy tính các tứ phân vị $Q_1$ và $Q_3$.

#### Lời giải chi tiết:
**1. Tìm $Q_1$:**
- Ta có $\frac{n}{4} = \frac{40}{4} = 10$.
- So sánh với tần số tích lũy: $cf_1 = 5 < 10 \le cf_2 = 17$.
- Do đó nhóm chứa $Q_1$ là **nhóm 2: $[20; 25)$**.
- Các thông số: $a_2 = 20$, $L = 5$, $m_2 = 12$, $C = cf_1 = 5$.
$$Q_1 = 20 + \frac{10 - 5}{12} \times 5 = 20 + \frac{25}{12} \approx 20 + 2.08 = 22.08\text{ (phút)}$$

**2. Tìm $Q_3$:**
- Ta có $\frac{3n}{4} = \frac{3 \times 40}{4} = 30$.
- So sánh với tần số tích lũy: $cf_2 = 17 < 30 \le cf_3 = 31$.
- Nhóm chứa $Q_3$ cũng là **nhóm 3: $[25; 30)$**.
- Các thông số: $a_3 = 25$, $L = 5$, $m_3 = 14$, $C' = cf_2 = 17$.
$$Q_3 = 25 + \frac{30 - 17}{14} \times 5 = 25 + \frac{13 \times 5}{14} = 25 + \frac{65}{14} \approx 25 + 4.64 = 29.64\text{ (phút)}$$

---

### Dạng 4: Tính Mốt ($M_o$) của mẫu số liệu ghép nhóm

#### Ví dụ 4:
Từ bảng số liệu của Ví dụ 1, hãy xác định Mốt $M_o$.

#### Lời giải chi tiết:
- Quan sát bảng tần số: các tần số lần lượt là $5, 12, 14, 6, 3$.
- Tần số lớn nhất là $14$, do đó nhóm chứa mốt là **nhóm 3: $[25; 30)$**.
- Các thông số:
  - $a_3 = 25$
  - Độ dài nhóm $L = 30 - 25 = 5$
  - Tần số nhóm mốt: $m_3 = 14$
  - Tần số nhóm liền trước: $m_2 = 12$
  - Tần số nhóm liền sau: $m_4 = 6$

Áp dụng công thức mốt:
$$M_o = 25 + \frac{14 - 12}{(14 - 12) + (14 - 6)} \times 5 = 25 + \frac{2}{2 + 8} \times 5 = 25 + \frac{2}{10} \times 5 = 25 + 1 = 26\text{ (phút)}$$

**Ý nghĩa:** Mức thời gian hoàn thành bài kiểm tra phổ biến nhất của học sinh tập trung quanh giá trị **$26\text{ phút}$**.

---

### Dạng 5: Ứng dụng thực tế: Phân tích cơ cấu bảng lương doanh nghiệp

#### Bài toán thực tế:
Thống kê mức thu nhập hàng tháng (đơn vị: triệu đồng) của $100$ nhân viên tại một công ty công nghệ được cho trong bảng sau:

| Thu nhập (triệu đồng) | $[10; 15)$ | $[15; 20)$ | $[20; 25)$ | $[25; 30)$ | $[30; 50)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số nhân viên** | $25$ | $40$ | $20$ | $10$ | $5$ |

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Tính mức thu nhập trung bình ($\bar{x}$) của nhân viên công ty.<br>
2. Tính trung vị thu nhập ($M_e$). Nhận xét về sự chênh lệch giữa số trung bình và trung vị.<br>
3. Nhóm 25% nhân viên có thu nhập cao nhất công ty đạt mức thu nhập tối thiểu từ bao nhiêu triệu đồng trở lên?
</div>

#### Lời giải chi tiết:
**1. Tính số trung bình:**
Giá trị đại diện các nhóm:
- Nhóm 1 $[10; 15)$: $c_1 = 12.5$
- Nhóm 2 $[15; 20)$: $c_2 = 17.5$
- Nhóm 3 $[20; 25)$: $c_3 = 22.5$
- Nhóm 4 $[25; 30)$: $c_4 = 27.5$
- Nhóm 5 $[30; 50)$: $c_5 = 40.0$

$$\bar{x} = \frac{25 \times 12.5 + 40 \times 17.5 + 20 \times 22.5 + 10 \times 27.5 + 5 \times 40}{100} = \frac{312.5 + 700 + 450 + 275 + 200}{100} = \frac{1937.5}{100} = 19.375\text{ triệu}$$

**2. Tính trung vị:**
$n = 100 \Rightarrow \frac{n}{2} = 50$.  
Tần số tích lũy: $cf_1 = 25, cf_2 = 65$. Nhóm chứa trung vị là $[15; 20)$.
$$M_e = 15 + \frac{50 - 25}{40} \times (20 - 15) = 15 + \frac{25}{40} \times 5 = 15 + 3.125 = 18.125\text{ triệu}$$
*Nhận xét:* Số trung bình ($19.38\text{ triệu}$) cao hơn trung vị ($18.13\text{ triệu}$) do nhóm thu nhập cao $[30; 50)$ kéo trung bình lệch sang phải. Trung vị phản ánh sát hơn mức thu nhập của đa số người lao động.

**3. Ngưỡng thu nhập của nhóm 25% cao nhất:**
Nhóm 25% cao nhất tương ứng với các giá trị từ tứ phân vị thứ ba $Q_3$ trở lên.  
$\frac{3n}{4} = 75$.  
Tần số tích lũy: $cf_2 = 65, cf_3 = 85$. Nhóm chứa $Q_3$ là $[20; 25)$.
$$Q_3 = 20 + \frac{75 - 65}{20} \times (25 - 20) = 20 + \frac{10}{20} \times 5 = 20 + 2.5 = 22.5\text{ triệu}$$
Vậy nhóm 25% nhân viên có thu nhập cao nhất công ty kiếm được từ **$22.5\text{ triệu đồng/tháng}$** trở lên.

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Công thức tính số trung bình của mẫu số liệu ghép nhóm là:",
  "options": [
    "A. x̄ = (m1*c1 + m2*c2 + ... + mk*ck) / n",
    "B. x̄ = (c1 + c2 + ... + ck) / k",
    "C. x̄ = (m1 + m2 + ... + mk) / n",
    "D. x̄ = (c1 + ck) / 2"
  ],
  "answer": "A. x̄ = (m1*c1 + m2*c2 + ... + mk*ck) / n",
  "explanation": "Số trung bình tính bằng tổng tích các tần số với giá trị đại diện tương ứng chia cho cỡ mẫu n."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nhóm chứa trung vị của mẫu số liệu có cỡ mẫu n = 60 là nhóm đầu tiên có tần số tích lũy thỏa mãn:",
  "options": [
    "A. cf ≥ 15",
    "B. cf ≥ 30",
    "C. cf ≥ 45",
    "D. cf = 60"
  ],
  "answer": "B. cf ≥ 30",
  "explanation": "Trung vị chia đôi mẫu số liệu, do đó nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy cf ≥ n/2 = 60/2 = 30."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Trong công thức trung vị Me = a_p + [(n/2 - C) / m_p] * L, đại lượng C biểu thị:",
  "options": [
    "A. Tần số của nhóm chứa trung vị",
    "B. Tần số tích lũy của nhóm chứa trung vị",
    "C. Tần số tích lũy của nhóm đứng liền trước nhóm chứa trung vị",
    "D. Giá trị đại diện của nhóm chứa trung vị"
  ],
  "answer": "C. Tần số tích lũy của nhóm đứng liền trước nhóm chứa trung vị",
  "explanation": "C là tổng tần số của tất cả các nhóm đứng trước nhóm chứa trung vị (tức cf_{p-1})."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Khi mẫu số liệu xuất hiện một vài giá trị ngoại lai (quá lớn hoặc quá nhỏ bất thường), số đặc trưng nào phản ánh độ tập trung tốt nhất?",
  "options": [
    "A. Số trung bình",
    "B. Trung vị",
    "C. Độ lệch chuẩn",
    "D. Khoảng biến thiên"
  ],
  "answer": "B. Trung vị",
  "explanation": "Trung vị không phụ thuộc vào độ lớn của các giá trị ở hai cực biên nên không bị ảnh hưởng bởi giá trị ngoại lai."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nhóm chứa mốt của mẫu số liệu ghép nhóm là nhóm có:",
  "options": [
    "A. Độ dài nhóm lớn nhất",
    "B. Giá trị đại diện lớn nhất",
    "C. Tần số lớn nhất",
    "D. Tần số tích lũy lớn nhất"
  ],
  "answer": "C. Tần số lớn nhất",
  "explanation": "Mốt là giá trị có tần số xuất hiện nhiều nhất, vì vậy nhóm chứa mốt là nhóm có tần số lớn nhất trong bảng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho mẫu số liệu ghép nhóm có n = 80. Nhóm chứa tứ phân vị thứ nhất Q_1 là nhóm đầu tiên có tần số tích lũy thỏa mãn:",
  "options": [
    "A. cf ≥ 20",
    "B. cf ≥ 40",
    "C. cf ≥ 60",
    "D. cf ≥ 10"
  ],
  "answer": "A. cf ≥ 20",
  "explanation": "Vị trí Q_1 tương ứng với n/4 = 80/4 = 20."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tứ phân vị thứ hai Q_2 của mẫu số liệu luôn bằng:",
  "options": [
    "A. Số trung bình x̄",
    "B. Trung vị Me",
    "C. Mốt Mo",
    "D. (Q_1 + Q_3) / 2"
  ],
  "answer": "B. Trung vị Me",
  "explanation": "Theo định nghĩa, tứ phân vị thứ hai Q_2 chính là Trung vị Me."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Khoảng tứ phân vị Δ_Q được tính theo công thức:",
  "options": [
    "A. Δ_Q = Q_3 - Q_1",
    "B. Δ_Q = Q_3 - Q_2",
    "C. Δ_Q = Q_2 - Q_1",
    "D. Δ_Q = (Q_1 + Q_3) / 2"
  ],
  "answer": "A. Δ_Q = Q_3 - Q_1",
  "explanation": "Khoảng tứ phân vị là hiệu số giữa tứ phân vị thứ ba và thứ nhất: Δ_Q = Q_3 - Q_1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho bảng tần số ghép nhóm có 3 nhóm: [0; 10) có tần số 10; [10; 20) có tần số 30; [20; 30) có tần số 10. Mốt Mo của mẫu số liệu bằng:",
  "options": [
    "A. 10",
    "B. 15",
    "C. 20",
    "D. 25"
  ],
  "answer": "B. 15",
  "explanation": "Nhóm chứa mốt là [10; 20) với m_j = 30, m_{j-1} = 10, m_{j+1} = 10. Mo = 10 + [(30 - 10) / ((30 - 10) + (30 - 10))] * 10 = 10 + (20/40)*10 = 10 + 5 = 15."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tứ phân vị thứ ba Q_3 chia mẫu số liệu thành hai phần có tỉ lệ là:",
  "options": [
    "A. 50% nhỏ hơn và 50% lớn hơn",
    "B. 25% nhỏ hơn và 75% lớn hơn",
    "C. 75% nhỏ hơn hoặc bằng Q_3 và 25% lớn hơn Q_3",
    "D. 90% nhỏ hơn và 10% lớn hơn"
  ],
  "answer": "C. 75% nhỏ hơn hoặc bằng Q_3 và 25% lớn hơn Q_3",
  "explanation": "Q_3 là mốc phân cách 75% số liệu phía dưới và 25% số liệu phía trên."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho bảng số liệu về tuổi thọ (năm) của 50 bóng đèn LED cao áp:**

| Tuổi thọ (nghìn giờ) | $[30; 35)$ | $[35; 40)$ | $[40; 45)$ | $[45; 50)$ | $[50; 55)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số bóng đèn** | $4$ | $12$ | $18$ | $11$ | $5$ |

   a) Tính tuổi thọ trung bình của bóng đèn.  
   b) Tính trung vị $M_e$.  
   c) Tính các tứ phân vị $Q_1, Q_3$ và khoảng tứ phân vị $\Delta_Q$.  
   d) Tính mốt $M_o$.

2. **So sánh hai lớp:** Điểm kiểm tra học kỳ của lớp 11A và 11B cùng có điểm trung bình là $7.2$. Nhưng lớp 11A có $Q_1 = 6.5, Q_3 = 8.0$ còn lớp 11B có $Q_1 = 5.0, Q_3 = 9.0$. Hãy nhận xét về mức độ đồng đều về học lực giữa học sinh hai lớp.
