---
title: 'Toán 10 Ôn tập Chương 7: Phương pháp tọa độ trong mặt phẳng - Tổng hợp & Đề kiểm tra'
description: 'Tổng ôn tập toàn diện Chương 7 Hình học 10: Phương trình đường thẳng, góc và khoảng cách, phương trình đường tròn và ba đường conic (elip, hypebol, parabol). Kèm ma trận đề 45 phút chuẩn Bộ GD&ĐT, 12 câu trắc nghiệm và 4 câu tự luận có barem điểm 0.25đ.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Ôn tập chương 7
  - Phương pháp tọa độ
  - Phương trình đường thẳng
  - Đường tròn
  - Ba đường conic
  - Đề kiểm tra 45 phút
  - Kết nối tri thức
---

# Ôn tập Chương 7. Phương pháp tọa độ trong mặt phẳng

Phương pháp tọa độ do René Descartes và Pierre de Fermat khởi xướng là cuộc cách mạng lớn trong lịch sử toán học, cho phép "đại số hóa hình học" - chuyển mọi bài toán hình học phẳng trực quan thành các phép tính đại số giải tích chính xác. Chương 7 trang bị toàn bộ công cụ cốt lõi: phương trình đường thẳng, vị trí tương đối, góc, khoảng cách, phương trình đường tròn và ba đường conic (elip, hypebol, parabol). Bài tổng ôn tập này giúp các em hệ thống hóa toàn diện lý thuyết và thực chiến đề kiểm tra 45 phút chuẩn ma trận Bộ GD&ĐT.

---

## 1. Bảng tra cứu toàn diện công thức Chương 7

| Mạch kiến thức | Công thức chuẩn toán học | Lưu ý & Điều kiện |
| :--- | :--- | :--- |
| **Vectơ chỉ phương (VTCP) & Pháp tuyến (VTPT)** | • $\vec{u} = (u_1; u_2) \implies \vec{n} = (-u_2; u_1)$<br>• $\vec{u} \cdot \vec{n} = 0 \iff u_1(-u_2) + u_2(u_1) = 0$ | Một đường thẳng có vô số VTCP và VTPT cùng phương |
| **Phương trình đường thẳng** | • Tham số: $\begin{cases} x = x_0 + u_1 t \\ y = y_0 + u_2 t \end{cases}$<br>• Tổng quát: $a(x - x_0) + b(y - y_0) = 0 \iff ax + by + c = 0$ | $(a^2 + b^2 > 0)$, nhận $\vec{n} = (a; b)$ làm VTPT |
| **Góc giữa hai đường thẳng** | $\cos \varphi = \frac{|a_1 a_2 + b_1 b_2|}{\sqrt{a_1^2 + b_1^2}\sqrt{a_2^2 + b_2^2}}$ | Luôn thỏa mãn $0^\circ \le \varphi \le 90^\circ$ ($\cos \varphi \ge 0$)<br>$\Delta_1 \perp \Delta_2 \iff a_1 a_2 + b_1 b_2 = 0$ |
| **Khoảng cách từ điểm đến đường thẳng** | $d(M_0, \Delta) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$ | Điểm $M_0(x_0; y_0)$ và đường thẳng $\Delta: ax + by + c = 0$ |
| **Phương trình đường tròn** | • Chính tắc: $(x - a)^2 + (y - b)^2 = R^2$<br>• Khai triển: $x^2 + y^2 - 2ax - 2by + c = 0$ | Điều kiện là đường tròn: $a^2 + b^2 - c > 0$<br>Tâm $I(a; b)$, bán kính $R = \sqrt{a^2 + b^2 - c}$ |
| **Tiếp tuyến đường tròn** | • Tại $M_0 \in (C)$: $(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$<br>• Tiếp xúc tổng quát: $d(I, \Delta) = R$ | Tiếp tuyến luôn vuông góc với bán kính tại tiếp điểm |
| **Đường Elip $(E)$** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (a > b > 0)$<br>• $c^2 = a^2 - b^2$, tiêu cự $2c$<br>• Tâm sai $e = \frac{c}{a} < 1$, đỉnh $A(\pm a; 0), B(0; \pm b)$ | Trục lớn $2a$, trục nhỏ $2b$<br>Bán kính qua tiêu: $MF_1 = a + ex, MF_2 = a - ex$ |
| **Đường Hypebol $(H)$** | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad (a > 0, b > 0)$<br>• $c^2 = a^2 + b^2$, tiêu cự $2c$<br>• Tiệm cận: $y = \pm \frac{b}{a}x$, tâm sai $e = \frac{c}{a} > 1$ | Trục thực $2a$, trục ảo $2b$<br>Đỉnh $A(\pm a; 0)$ |
| **Đường Parabol $(P)$** | $y^2 = 2px \quad (p > 0)$<br>• Tiêu điểm $F\left(\frac{p}{2}; 0\right)$, đỉnh $O(0; 0)$<br>• Đường chuẩn: $\Delta: x = -\frac{p}{2}$, tâm sai $e = 1$ | Bán kính qua tiêu: $MF = x + \frac{p}{2}$ |

---

## 2. Ma trận đề kiểm tra 45 phút Chương 7 (Chuẩn Bộ GD&ĐT)

Tỉ lệ chuẩn cấu trúc: **30% Trắc nghiệm khách quan (3,0 điểm)** và **70% Tự luận phân hóa (7,0 điểm)**.

| Chủ đề / Mạch kiến thức | Nhận biết | Thông hiểu | Vận dụng | Vận dụng cao | Tổng câu / Điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Phương trình đường thẳng, góc & khoảng cách** | 2 TN (0,5đ) | 1 TN (0,25đ) | 1 TL (1,5đ) | - | **3 TN + 1 TL** (2,25đ) |
| **2. Phương trình đường tròn & Tiếp tuyến** | 2 TN (0,5đ) | 1 TN (0,25đ) | 1 TL (1,5đ) | - | **3 TN + 1 TL** (2,25đ) |
| **3. Ba đường conic (Elip, Hypebol, Parabol)** | 2 TN (0,5đ) | 1 TN (0,25đ) | 1 TL (2,0đ) | - | **3 TN + 1 TL** (2,75đ) |
| **4. Ứng dụng thực tế & Bài toán cực trị tọa độ** | 2 TN (0,5đ) | 1 TN (0,25đ) | - | 1 TL (2,0đ) | **3 TN + 1 TL** (2,75đ) |
| **Tổng điểm** | **1,75đ (17,5%)** | **1,25đ (12,5%)** | **5,0đ (50,0%)** | **2,0đ (20,0%)** | **10,0 điểm (100%)** |

---

## 3. Phần I: Trắc nghiệm khách quan (3,0 điểm - 12 câu, mỗi câu 0,25 điểm)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q1",
  "question": "Vectơ pháp tuyến của đường thẳng $\\Delta: 2x - 3y + 5 = 0$ là:",
  "options": [
    "\\vec{n} = (2; -3)",
    "\\vec{n} = (3; 2)",
    "\\vec{n} = (-3; 2)",
    "\\vec{n} = (2; 3)"
  ],
  "answer": 0,
  "explanation": "Đường thẳng $ax + by + c = 0$ có một vectơ pháp tuyến là $\\vec{n} = (a; b) = (2; -3)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q2",
  "question": "Phương trình tham số của đường thẳng đi qua điểm $A(1; -2)$ và có VTCP $\\vec{u} = (3; 4)$ là:",
  "options": [
    "x = 1 + 3t, y = -2 + 4t",
    "x = 3 + t, y = 4 - 2t",
    "x = 1 - 2t, y = 3 + 4t",
    "x = -1 + 3t, y = 2 + 4t"
  ],
  "answer": 0,
  "explanation": "Phương trình tham số qua $(x_0; y_0) = (1; -2)$ với VTCP $(u_1; u_2) = (3; 4)$ là $x = 1 + 3t, y = -2 + 4t$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q3",
  "question": "Khoảng cách từ điểm $M(1; 2)$ đến đường thẳng $\\Delta: 3x - 4y + 10 = 0$ bằng:",
  "options": [
    "1",
    "2",
    "5",
    "\\frac{5}{2}"
  ],
  "answer": 0,
  "explanation": "$d(M, \\Delta) = \\frac{|3(1) - 4(2) + 10|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 - 8 + 10|}{\\sqrt{25}} = \\frac{5}{5} = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q4",
  "question": "Hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: x + 2y - 4 = 0$ có vị trí tương đối là:",
  "options": [
    "Vuông góc với nhau",
    "Song song với nhau",
    "Trùng nhau",
    "Cắt nhau nhưng không vuông góc"
  ],
  "answer": 0,
  "explanation": "Ta có $\\vec{n_1} = (2; -1)$ và $\\vec{n_2} = (1; 2)$. Tích vô hướng $\\vec{n_1} \\cdot \\vec{n_2} = 2(1) + (-1)(2) = 0 \\implies d_1 \\perp d_2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q5",
  "question": "Tọa độ tâm $I$ và bán kính $R$ của đường tròn $(C): (x + 3)^2 + (y - 1)^2 = 16$ là:",
  "options": [
    "I(-3; 1), R = 4",
    "I(3; -1), R = 4",
    "I(-3; 1), R = 16",
    "I(3; -1), R = 16"
  ],
  "answer": 0,
  "explanation": "Phương trình có dạng $(x - a)^2 + (y - b)^2 = R^2 \\implies a = -3, b = 1, R = \\sqrt{16} = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q6",
  "question": "Phương trình nào sau đây là phương trình của một đường tròn?",
  "options": [
    "x^2 + y^2 - 4x + 2y - 4 = 0",
    "x^2 + y^2 - 2x + 6y + 20 = 0",
    "x^2 - y^2 + 4x - 6y + 1 = 0",
    "2x^2 + y^2 - 4x + 6 = 0"
  ],
  "answer": 0,
  "explanation": "Phương trình $x^2 + y^2 - 4x + 2y - 4 = 0$ có $a = 2, b = -1, c = -4 \\implies a^2 + b^2 - c = 4 + 1 - (-4) = 9 > 0$ nên là phương trình đường tròn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q7",
  "question": "Phương trình tiếp tuyến của đường tròn $(C): x^2 + y^2 = 25$ tại điểm $M(3; -4)$ là:",
  "options": [
    "3x - 4y - 25 = 0",
    "3x + 4y - 25 = 0",
    "4x + 3y - 25 = 0",
    "3x - 4y + 25 = 0"
  ],
  "answer": 0,
  "explanation": "Tâm $O(0; 0)$. Tiếp tuyến tại $M(3; -4)$ nhận $\\vec{OM} = (3; -4)$ làm VTPT: $3(x - 3) - 4(y + 4) = 0 \\iff 3x - 4y - 25 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q8",
  "question": "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{16} = 1$. Tiêu cự của elip bằng:",
  "options": [
    "6",
    "3",
    "10",
    "8"
  ],
  "answer": 0,
  "explanation": "$a^2 = 25, b^2 = 16 \\implies c = \\sqrt{25 - 16} = 3$. Tiêu cự $2c = 6$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q9",
  "question": "Tâm sai $e$ của hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$ bằng:",
  "options": [
    "\\frac{5}{4}",
    "\\frac{4}{5}",
    "\\frac{3}{4}",
    "\\frac{5}{3}"
  ],
  "answer": 0,
  "explanation": "$a = 4, b = 3 \\implies c = \\sqrt{16 + 9} = 5$. Tâm sai $e = \\frac{c}{a} = \\frac{5}{4}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q10",
  "question": "Tiêu điểm của parabol $(P): y^2 = 12x$ là:",
  "options": [
    "F(3; 0)",
    "F(6; 0)",
    "F(0; 3)",
    "F(-3; 0)"
  ],
  "answer": 0,
  "explanation": "$2p = 12 \\implies p = 6 \\implies \\frac{p}{2} = 3$. Tiêu điểm $F\\left(\\frac{p}{2}; 0\\right) = (3; 0)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q11",
  "question": "Góc tạo bởi hai đường thẳng $d_1: x + y - 3 = 0$ và $d_2: y - 5 = 0$ là:",
  "options": [
    "45°",
    "30°",
    "60°",
    "90°"
  ],
  "answer": 0,
  "explanation": "$\\vec{n_1} = (1; 1), \\vec{n_2} = (0; 1) \\implies \\cos \\varphi = \\frac{|1(0) + 1(1)|}{\\sqrt{1^2 + 1^2}\\sqrt{0^2 + 1^2}} = \\frac{1}{\\sqrt{2}} \\implies \\varphi = 45°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_ontap_q12",
  "question": "Đường chuẩn của parabol $(P): y^2 = 8x$ có phương trình là:",
  "options": [
    "x = -2",
    "x = 2",
    "y = -2",
    "x = -4"
  ],
  "answer": 0,
  "explanation": "$2p = 8 \\implies p = 4 \\implies \\frac{p}{2} = 2$. Đường chuẩn có phương trình $x = -\\frac{p}{2} = -2$."
}'></div>

---

## 4. Phần II: Tự luận phân hóa (7,0 điểm - 4 câu)

### Đề bài tự luận

#### Câu 1 (1,5 điểm - Vận dụng thấp)
Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 3)$, $B(-2; 1)$ và $C(4; -1)$.
1. Viết phương trình tổng quát của đường cao $AH$ kẻ từ đỉnh $A$ của tam giác $ABC$.
2. Tính diện tích tam giác $ABC$.

#### Câu 2 (1,5 điểm - Vận dụng trung bình)
Trong mặt phẳng tọa độ $Oxy$, cho đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$ và điểm $M(5; 1)$.
1. Xác định tọa độ tâm $I$ và tính bán kính $R$ của đường tròn $(C)$.
2. Chứng minh điểm $M$ nằm ngoài đường tròn $(C)$ và viết phương trình các tiếp tuyến của $(C)$ kẻ từ điểm $M$.

#### Câu 3 (2,0 điểm - Vận dụng)
Trong mặt phẳng tọa độ $Oxy$:
1. Lập phương trình chính tắc của elip $(E)$ biết tiêu cự bằng $2\sqrt{5}$ và elip đi qua điểm $M\left(3; \frac{4}{5}\right)$.
2. Cho parabol $(P): y^2 = 4x$. Một dây cung $AB$ của $(P)$ vuông góc với trục $Ox$ và có độ dài bằng $8$. Tính khoảng cách từ tiêu điểm $F$ đến hai đầu mút $A$ và $B$.

#### Câu 4 (2,0 điểm - Vận dụng cao & Ứng dụng thực tế)
Một trạm kiểm soát tín hiệu radar hàng hải đặt tại vị trí $A(0; 2)$ và một ngọn hải đăng báo bão đặt tại vị trí $B(6; 8)$ (đơn vị trên các trục tọa độ tính bằng hải lý). Một con tàu chở khách di chuyển liên tục trên tuyến luồng hàng hải thẳng có phương trình:
$$\Delta: x - y + 4 = 0$$
1. Tìm tọa độ vị trí điểm $M$ trên luồng hàng hải $\Delta$ sao cho tổng khoảng cách từ con tàu đến trạm radar $A$ và hải đăng $B$ là ngắn nhất ($MA + MB$ đạt giá trị nhỏ nhất).
2. Khi thời tiết xấu, trạm radar phát tín hiệu cảnh báo trong phạm vi bán kính quét hình tròn tâm $A$ bán kính $R = 5$ hải lý. Hỏi con tàu khi di chuyển trên luồng hàng hải $\Delta$ có đi vào vùng phủ sóng cảnh báo của trạm $A$ hay không? Nếu có, hãy tính chiều dài đoạn đường tàu chạy bên trong vùng phủ sóng đó.

---

### Hướng dẫn chấm & Thang điểm chi tiết (Barem 0,25đ)

#### Lời giải Câu 1 (1,5 điểm)
- **Ý 1 (0,75 điểm):**
  - Ta có vectơ $\vec{BC} = (4 - (-2); -1 - 1) = (6; -2) = 2(3; -1)$ *(0,25đ)*.
  - Đường cao $AH$ vuông góc với cạnh $BC$ nên nhận $\vec{n} = (3; -1)$ làm vectơ pháp tuyến *(0,25đ)*.
  - Phương trình đường cao $AH$ đi qua $A(1; 3)$:
    $$3(x - 1) - 1(y - 3) = 0 \iff 3x - y = 0$$
    *(0,25đ)*
- **Ý 2 (0,75 điểm):**
  - Độ dài cạnh đáy $BC = \sqrt{6^2 + (-2)^2} = \sqrt{36 + 4} = \sqrt{40} = 2\sqrt{10}$ *(0,25đ)*.
  - Đường thẳng $BC$ đi qua $B(-2; 1)$ và nhận $\vec{n_{BC}} = (1; 3)$ làm VTPT (vì $\vec{n_{BC}} \perp \vec{BC}$):
    $$1(x + 2) + 3(y - 1) = 0 \iff x + 3y - 1 = 0$$
    Khoảng cách từ $A(1; 3)$ đến đường thẳng $BC$:
    $$AH = d(A, BC) = \frac{|1 + 3(3) - 1|}{\sqrt{1^2 + 3^2}} = \frac{9}{\sqrt{10}}$$
    *(0,25đ)*
  - Diện tích tam giác $ABC$:
    $$S_{ABC} = \frac{1}{2} \cdot BC \cdot AH = \frac{1}{2} \cdot 2\sqrt{10} \cdot \frac{9}{\sqrt{10}} = 9$$
    *(0,25đ)*

---

#### Lời giải Câu 2 (1,5 điểm)
- **Ý 1 (0,5 điểm):**
  - Phương trình đường tròn $(C)$ có hệ số:
    $$a = \frac{-4}{-2} = 2, \quad b = \frac{6}{-2} = -3, \quad c = -12$$
    Tọa độ tâm $I(2; -3)$ *(0,25đ)*.
  - Bán kính:
    $$R = \sqrt{a^2 + b^2 - c} = \sqrt{2^2 + (-3)^2 - (-12)} = \sqrt{4 + 9 + 12} = \sqrt{25} = 5$$
    *(0,25đ)*
- **Ý 2 (1,0 điểm):**
  - Tính khoảng cách $IM$:
    $$IM = \sqrt{(5 - 2)^2 + (1 - (-3))^2} = \sqrt{3^2 + 4^2} = 5 = R$$
    Suy ra $M$ nằm **trên** đường tròn $(C)$ *(0,25đ)*.
  - Vì $M(5; 1) \in (C)$, tiếp tuyến tại $M$ nhận vectơ $\vec{IM} = (5 - 2; 1 - (-3)) = (3; 4)$ làm vectơ pháp tuyến *(0,25đ)*.
  - Phương trình tiếp tuyến:
    $$3(x - 5) + 4(y - 1) = 0 \iff 3x + 4y - 19 = 0$$
    *(0,25đ)*
  - Kết luận: Chỉ có duy nhất một tiếp tuyến tại $M$ là $3x + 4y - 19 = 0$ *(0,25đ)*.

---

#### Lời giải Câu 3 (2,0 điểm)
- **Ý 1 (1,0 điểm):**
  - Gọi phương trình chính tắc của elip là $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($a > b > 0$).
    Tiêu cự $2c = 2\sqrt{5} \implies c = \sqrt{5} \implies a^2 - b^2 = c^2 = 5 \implies a^2 = b^2 + 5$ *(0,25đ)*.
  - Điểm $M\left(3; \frac{4}{5}\right) \in (E)$ nên:
    $$\frac{9}{a^2} + \frac{\frac{16}{25}}{b^2} = 1 \iff \frac{9}{b^2 + 5} + \frac{16}{25b^2} = 1$$
    *(0,25đ)*
  - Quy đồng mẫu số:
    $$225b^2 + 16(b^2 + 5) = 25b^2(b^2 + 5) \iff 241b^2 + 80 = 25b^4 + 125b^2$$
    $$\iff 25b^4 - 116b^2 - 80 = 0$$
    Đặt $t = b^2 > 0$: $25t^2 - 116t - 80 = 0 \implies t = 5$ (loại nghiệm $t = -\frac{16}{25} < 0$) *(0,25đ)*.
  - Với $b^2 = 5 \implies a^2 = 5 + 5 = 10$.
    Phương trình chính tắc của $(E)$ là:
    $$\frac{x^2}{10} + \frac{y^2}{5} = 1$$
    *(0,25đ)*
- **Ý 2 (1,0 điểm):**
  - Parabol $(P): y^2 = 4x \implies 2p = 4 \implies p = 2 \implies \frac{p}{2} = 1$.
    Tiêu điểm $F(1; 0)$, đường chuẩn $\Delta: x = -1$ *(0,25đ)*.
  - Dây cung $AB \perp Ox$ nên hoành độ của $A$ và $B$ bằng nhau: $x_A = x_B = x_0$.
    Vì đối xứng qua trục hoành và độ dài $AB = 8$ nên tung độ $y_A = 4$ và $y_B = -4$ *(0,25đ)*.
  - Thay $y_A = 4$ vào $(P): 4^2 = 4x_0 \iff 16 = 4x_0 \implies x_0 = 4$ *(0,25đ)*.
  - Áp dụng công thức bán kính qua tiêu của Parabol:
    $$FA = FB = x_0 + \frac{p}{2} = 4 + 1 = 5$$
    *(0,25đ)*

---

#### Lời giải Câu 4 (2,0 điểm)
- **Ý 1 (1,0 điểm):**
  - Xét vị trí tương đối của hai điểm $A(0; 2)$ và $B(6; 8)$ đối với đường thẳng $\Delta: x - y + 4 = 0$:
    Thay tọa độ điểm $A$: $0 - 2 + 4 = 2 > 0$.
    Thay tọa độ điểm $B$: $6 - 8 + 4 = 2 > 0$.
    Vì hai giá trị cùng dấu dương nên $A$ và $B$ nằm về **cùng một phía** so với đường thẳng $\Delta$ *(0,25đ)*.
  - Gọi $A'$ là điểm đối xứng với $A$ qua đường thẳng $\Delta$.
    Đường thẳng $d$ đi qua $A(0; 2)$ và vuông góc với $\Delta$ có VTPT $\vec{n_d} = (1; 1)$:
    $$1(x - 0) + 1(y - 2) = 0 \iff x + y - 2 = 0$$
    Tọa độ hình chiếu $H$ của $A$ trên $\Delta$ là nghiệm của hệ:
    $$\begin{cases} x - y = -4 \\ x + y = 2 \end{cases} \iff \begin{cases} x = -1 \\ y = 3 \end{cases} \implies H(-1; 3)$$
    Vì $H$ là trung điểm $AA' \implies A'(-2; 4)$ *(0,25đ)*.
  - Với mọi điểm $M \in \Delta$, ta có $MA = MA'$, do đó:
    $$MA + MB = MA' + MB \ge A'B$$
    Dấu đẳng thức xảy ra khi và chỉ khi $M$ là giao điểm của đường thẳng $A'B$ với $\Delta$ *(0,25đ)*.
  - Ta có $\vec{A'B} = (6 - (-2); 8 - 4) = (8; 4) = 4(2; 1) \implies$ VTPT của $A'B$ là $\vec{n} = (1; -2)$.
    Phương trình đường thẳng $A'B$:
    $$1(x - 6) - 2(y - 8) = 0 \iff x - 2y + 10 = 0$$
    Tọa độ điểm $M$ là nghiệm của hệ:
    $$\begin{cases} x - y = -4 \\ x - 2y = -10 \end{cases} \iff \begin{cases} y = 6 \\ x = 2 \end{cases} \implies M(2; 6)$$
    Vậy vị trí điểm cần tìm trên luồng hàng hải là $M(2; 6)$ *(0,25đ)*.
- **Ý 2 (1,0 điểm):**
  - Khoảng cách từ trạm $A(0; 2)$ đến đường thẳng $\Delta: x - y + 4 = 0$:
    $$d(A, \Delta) = \frac{|0 - 2 + 4|}{\sqrt{1^2 + (-1)^2}} = \frac{2}{\sqrt{2}} = \sqrt{2} \approx 1,414\text{ hải lý}$$
    *(0,25đ)*
  - Vì $d(A, \Delta) = \sqrt{2} < R = 5$ nên đường thẳng luồng hàng hải $\Delta$ cắt đường tròn phủ sóng của trạm $A$ tại hai điểm phân biệt $P$ và $Q$. Do đó con tàu **chắc chắn đi vào vùng phủ sóng** của trạm $A$ *(0,25đ)*.
  - Đoạn đường tàu chạy bên trong vùng phủ sóng chính là độ dài dây cung $PQ$ của đường tròn tâm $A$ bán kính $R = 5$ *(0,25đ)*.
  - Áp dụng định lí Pytago trong tam giác vuông tạo bởi tâm $A$, hình chiếu $H$ và đầu mút dây cung:
    $$PQ = 2\sqrt{R^2 - [d(A, \Delta)]^2} = 2\sqrt{5^2 - (\sqrt{2})^2} = 2\sqrt{25 - 2} = 2\sqrt{23} \approx 9,59\text{ hải lý}$$
    Vậy chiều dài đoạn đường tàu chạy bên trong vùng phủ sóng là $2\sqrt{23}$ hải lý *(0,25đ)*.
