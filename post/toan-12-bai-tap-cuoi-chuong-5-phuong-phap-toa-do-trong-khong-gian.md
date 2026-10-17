---
title: 'Toán 12 Bài tập cuối chương 5: Phương pháp toạ độ trong không gian - Đề ôn tập chuẩn cấu trúc 2025'
description: 'Tổng hợp toàn diện kiến thức Chương 5 Toán 12 Kết nối tri thức: Hệ thống công thức mặt phẳng, đường thẳng, góc và khoảng cách Oxyz kèm đề ôn tập chuẩn cấu trúc 2025 (3 phần: Nhiều lựa chọn, Đúng/Sai, Trả lời ngắn) có lời giải chi tiết và trắc nghiệm tự chấm.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Bài tập cuối chương
  - Oxyz
  - Mặt phẳng
  - Đường thẳng
  - Góc và khoảng cách
  - Đề thi 2025
  - Kết nối tri thức
grade: 12
---

# Bài tập cuối chương 5: Phương pháp toạ độ trong không gian

Chương 5 khép lại toàn bộ mạch kiến thức Hình học không gian toạ độ $Oxyz$ của chương trình Toán THPT. Bằng cách đại số hoá các hình học thực tế, phương pháp toạ độ đã biến những bài toán góc, khoảng cách, tương giao tưởng chừng rất phức tạp thành những bài toán tính toán đại số rõ ràng và chuẩn xác.

Bài học tổng kết này cung cấp:
1. **Bảng hệ thống hoá công thức toàn diện Chương 5**.
2. **Đề kiểm tra ôn tập chuẩn cấu trúc đề thi Tốt nghiệp THPT mới từ năm 2025**:
   - **Phần I:** 12 câu trắc nghiệm nhiều phương án lựa chọn (3.0 điểm).
   - **Phần II:** 4 câu trắc nghiệm Đúng / Sai (4.0 điểm, 16 ý hỏi).
   - **Phần III:** 6 câu trắc nghiệm trả lời ngắn (3.0 điểm).
3. **Lời giải chi tiết từng bước** và hệ thống trắc nghiệm trực tuyến tự động chấm điểm.

---

## I. Bảng tổng hợp công thức trọng tâm Chương 5

| Đối tượng / Khái niệm | Phương trình & Công thức toạ độ | Ý nghĩa & Dấu hiệu nhận biết |
| :--- | :--- | :--- |
| **Mặt phẳng qua $M_0$ có VTPT $\vec{n}(A;B;C)$** | $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \iff Ax + By + Cz + D = 0$ | $A^2 + B^2 + C^2 > 0$. VTPT $\vec{n} = (A; B; C)$. |
| **Mặt phẳng theo đoạn chắn** | $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$ | Cắt 3 trục tại $(a;0;0), (0;b;0), (0;0;c)$ ($abc \neq 0$). |
| **Đường thẳng tham số** | $\begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases} \quad (t \in \mathbb{R})$ | Qua $M_0(x_0; y_0; z_0)$, VTCP $\vec{u} = (a; b; c)$. |
| **Đường thẳng chính tắc** | $\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$ | Áp dụng khi $a \cdot b \cdot c \neq 0$. |
| **Góc giữa 2 đường thẳng** | $\cos(d_1, d_2) = \frac{|\vec{u}_1 \cdot \vec{u}_2|}{|\vec{u}_1| \cdot |\vec{u}_2|}$ | Luôn lấy góc nhọn hoặc vuông ($0^\circ \le \varphi \le 90^\circ$). |
| **Góc giữa đường và mặt** | $\sin(d, P) = \frac{|\vec{u} \cdot \vec{n}|}{|\vec{u}| \cdot |\vec{n}|}$ | **Dùng hàm $\sin$** vì góc phụ với góc của VTPT. |
| **Góc giữa 2 mặt phẳng** | $\cos(P, Q) = \frac{|\vec{n}_P \cdot \vec{n}_Q|}{|\vec{n}_P| \cdot |\vec{n}_Q|}$ | Dùng hàm $\cos$ tích vô hướng 2 VTPT. |
| **Khoảng cách điểm đến mặt** | $d(M_0, P) = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$ | Thay toạ độ điểm vào vế trái rồi chia độ dài VTPT. |
| **Khoảng cách 2 MP song song** | $d(P, Q) = \frac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}$ | Áp dụng khi phương trình đã quy về cùng bộ $(A; B; C)$. |
| **Khoảng cách điểm đến đường** | $d(M_0, \Delta) = \frac{|[\vec{AM_0}, \vec{u}]|}{|\vec{u}|}$ | Với $A \in \Delta$, VTCP $\vec{u}$. |

---

## II. Đề ôn tập chuẩn cấu trúc thi tốt nghiệp THPT 2025

### PHẦN I: Câu trắc nghiệm nhiều phương án lựa chọn (12 câu - 3.0 điểm)

**Câu 1:** Trong không gian $Oxyz$, mặt phẳng $(P): 3x - 2y + 4z - 7 = 0$ có một vectơ pháp tuyến là:  
A. $\vec{n} = (3; -2; 4)$.  
B. $\vec{n} = (3; 2; 4)$.  
C. $\vec{n} = (3; -2; -7)$.  
D. $\vec{n} = (-2; 4; -7)$.

**Câu 2:** Đường thẳng $d: \frac{x - 1}{2} = \frac{y + 3}{-1} = \frac{z}{4}$ đi qua điểm nào sau đây?  
A. $M(1; -3; 0)$.  
B. $N(-1; 3; 0)$.  
C. $P(2; -1; 4)$.  
D. $Q(1; 3; 0)$.

**Câu 3:** Phương trình mặt phẳng đi qua $A(2; 0; 0)$, $B(0; -3; 0)$, $C(0; 0; 1)$ là:  
A. $\frac{x}{2} - \frac{y}{3} + \frac{z}{1} = 1$.  
B. $\frac{x}{2} + \frac{y}{3} + \frac{z}{1} = 1$.  
C. $\frac{x}{2} - \frac{y}{3} + \frac{z}{1} = 0$.  
D. $2x - 3y + z = 1$.

**Câu 4:** Khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng toạ độ $(Oxy)$ bằng:  
A. 1.  
B. 2.  
C. 3.  
D. $\sqrt{14}$.

**Câu 5:** Góc giữa hai mặt phẳng $(P): x + y - 1 = 0$ và $(Q): y - z + 2 = 0$ là:  
A. $30^\circ$.  
B. $45^\circ$.  
C. $60^\circ$.  
D. $90^\circ$.

**Câu 6:** Cho hai đường thẳng $d_1: \frac{x - 1}{1} = \frac{y}{2} = \frac{z + 1}{-1}$ và $d_2: \frac{x}{2} = \frac{y - 1}{4} = \frac{z}{-2}$. Khẳng định nào sau đây đúng?  
A. $d_1 \parallel d_2$.  
B. $d_1 \equiv d_2$.  
C. $d_1 \perp d_2$.  
D. $d_1$ và $d_2$ chéo nhau.

**Câu 7:** Khoảng cách từ điểm $A(1; 1; 2)$ đến mặt phẳng $(P): 2x - 2y + z + 3 = 0$ là:  
A. $\frac{5}{3}$.  
B. 1.  
C. $\frac{7}{3}$.  
D. $\frac{5}{9}$.

**Câu 8:** Đường thẳng đi qua $M(1; 2; -1)$ và vuông góc với mặt phẳng $(P): x + 2y - 3z + 1 = 0$ có phương trình tham số là:  
A. $\begin{cases} x = 1 + t \\ y = 2 + 2t \\ z = -1 - 3t \end{cases}$.  
B. $\begin{cases} x = 1 + t \\ y = 2 - 2t \\ z = -1 + 3t \end{cases}$.  
C. $\begin{cases} x = 1 + t \\ y = 2 + 2t \\ z = -1 + 3t \end{cases}$.  
D. $\begin{cases} x = 1 - t \\ y = 2 + 2t \\ z = -1 - 3t \end{cases}$.

**Câu 9:** Cho đường thẳng $d: \frac{x - 1}{1} = \frac{y}{1} = \frac{z + 1}{\sqrt{2}}$ và mặt phẳng $(P): z - 2 = 0$. Sin của góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng:  
A. $\frac{\sqrt{2}}{2}$.  
B. $\frac{1}{2}$.  
C. $\frac{\sqrt{3}}{2}$.  
D. 0.

**Câu 10:** Hai mặt phẳng $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 8 = 0$ song song với nhau. Khoảng cách giữa $(P)$ và $(Q)$ bằng:  
A. 3.  
B. 9.  
C. 1.  
D. $\frac{7}{3}$.

**Câu 11:** Trong không gian $Oxyz$, phương trình mặt phẳng đi qua gốc toạ độ $O(0; 0; 0)$ và song song với mặt phẳng $(P): x - 3y + 2z - 5 = 0$ là:  
A. $x - 3y + 2z = 0$.  
B. $x - 3y + 2z + 5 = 0$.  
C. $x + 3y - 2z = 0$.  
D. $x - 3y + 2z - 1 = 0$.

**Câu 12:** Vị trí tương đối của đường thẳng $d: \frac{x - 1}{2} = \frac{y + 1}{1} = \frac{z - 2}{1}$ và mặt phẳng $(P): x + y - 3z + 5 = 0$ là:  
A. $d$ cắt $(P)$ nhưng không vuông góc.  
B. $d$ nằm trong $(P)$.  
C. $d$ song song với $(P)$.  
D. $d$ vuông góc với $(P)$.

---

### PHẦN II: Câu trắc nghiệm Đúng / Sai (4 câu - 4.0 điểm)

**Câu 1:** Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 3)$ và $D(1; 2; 3)$.  
Các mệnh đề sau đúng hay sai?  
a) Mặt phẳng $(ABC)$ có phương trình là $6x + 3y + 2z - 6 = 0$.  
b) Điểm $D(1; 2; 3)$ thuộc mặt phẳng $(ABC)$.  
c) Vectơ $\vec{n} = (6; 3; 2)$ là một vectơ pháp tuyến của mặt phẳng $(ABC)$.  
d) Khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(ABC)$ là $\frac{6}{7}$.

**Câu 2:** Cho đường thẳng $d: \frac{x - 2}{2} = \frac{y + 1}{-1} = \frac{z - 1}{2}$ và điểm $A(1; 2; 3)$.  
Các mệnh đề sau đúng hay sai?  
a) Đường thẳng $d$ có một vectơ chỉ phương là $\vec{u} = (2; -1; 2)$.  
b) Mặt phẳng $(P)$ đi qua $A$ và vuông góc với đường thẳng $d$ có phương trình $2x - y + 2z - 6 = 0$.  
c) Toạ độ hình chiếu vuông góc của điểm $A$ lên đường thẳng $d$ là $H(2; -1; 1)$.  
d) Khoảng cách từ điểm $A$ đến đường thẳng $d$ bằng $\sqrt{14}$.

**Câu 3:** Cho hai mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và $(Q): 2x + 4y - 4z - 7 = 0$.  
Các mệnh đề sau đúng hay sai?  
a) Hai mặt phẳng $(P)$ và $(Q)$ song song với nhau.  
b) Khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(P)$ bằng $\frac{1}{3}$.  
c) Mặt phẳng $(R)$ song song và cách đều hai mặt phẳng $(P)$ và $(Q)$ có phương trình $2x + 4y - 4z - 5 = 0$.  
d) Khoảng cách giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $\frac{3}{2}$.

**Câu 4:** Cho hai đường thẳng $d_1: \frac{x - 1}{2} = \frac{y}{1} = \frac{z + 1}{-1}$ và $d_2: \begin{cases} x = 2 + t \\ y = 1 - t \\ z = 1 + 2t \end{cases}$.  
Các mệnh đề sau đúng hay sai?  
a) VTCP của $d_1$ là $\vec{u}_1 = (2; 1; -1)$, VTCP của $d_2$ là $\vec{u}_2 = (1; -1; 2)$.  
b) Tích vô hướng $\vec{u}_1 \cdot \vec{u}_2 = -1$.  
c) Hai đường thẳng $d_1$ và $d_2$ vuông góc với nhau.  
d) Côsin của góc giữa hai đường thẳng $d_1$ và $d_2$ là $\frac{1}{6}$.

---

### PHẦN III: Câu trắc nghiệm trả lời ngắn (6 câu - 3.0 điểm)

**Câu 1:** Tính khoảng cách từ điểm $M(3; 4; 5)$ đến mặt phẳng toạ độ $(Oyz)$.  
*Đáp số:* `...`

**Câu 2:** Cho hai mặt phẳng $(P): 2x - y + 2z - 3 = 0$ và $(Q): 2x - y + 2z + 6 = 0$. Tính khoảng cách giữa hai mặt phẳng $(P)$ và $(Q)$.  
*Đáp số:* `...`

**Câu 3:** Tính góc (đơn vị: độ) giữa hai đường thẳng $d_1$ có VTCP $\vec{u}_1 = (1; 1; 0)$ và $d_2$ có VTCP $\vec{u}_2 = (0; 1; 1)$.  
*Đáp số:* `...`

**Câu 4:** Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(2; 1; -2)$ và tiếp xúc với mặt phẳng $(P): 3x + 4z + 12 = 0$. Tính bán kính $R$ của mặt cầu $(S)$.  
*Đáp số:* `...`

**Câu 5:** Cho điểm $A(1; 2; 3)$. Tính khoảng cách từ điểm $A$ đến trục cao độ $Oz$.  
*Đáp số:* `...`

**Câu 6:** Cho mặt phẳng $(P): x + 2y - 2z + 9 = 0$ và điểm $M(1; 1; 1)$. Gọi $H(a; b; c)$ là hình chiếu vuông góc của điểm $M$ lên mặt phẳng $(P)$. Tính tổng $a + b + c$.  
*Đáp số:* `...`

---

## III. Hướng dẫn giải chi tiết đề ôn tập

### HƯỚNG DẪN GIẢI PHẦN I

- **Câu 1:** Chọn **A**. Hệ số của $x, y, z$ là $(3; -2; 4)$.
- **Câu 2:** Chọn **A**. Điểm $(1; -3; 0)$ làm các tử số bằng 0.
- **Câu 3:** Chọn **A**. Áp dụng phương trình đoạn chắn $\frac{x}{2} + \frac{y}{-3} + \frac{z}{1} = 1 \iff \frac{x}{2} - \frac{y}{3} + \frac{z}{1} = 1$.
- **Câu 4:** Chọn **C**. Khoảng cách đến $(Oxy)$ là $|z_M| = |3| = 3$.
- **Câu 5:** Chọn **C**. $\vec{n}_P = (1; 1; 0), \vec{n}_Q = (0; 1; -1)$. $\cos\varphi = \frac{|0 + 1 + 0|}{\sqrt{2}\sqrt{2}} = \frac{1}{2} \implies \varphi = 60^\circ$.
- **Câu 6:** Chọn **A**. $\vec{u}_1 = (1; 2; -1)$, $\vec{u}_2 = (2; 4; -2) = 2\vec{u}_1$. Điểm $M_1(1; 0; -1) \in d_1$, thay vào $d_2$: $\frac{1}{2} \neq \frac{0 - 1}{4} \implies M_1 \notin d_2$. Vậy $d_1 \parallel d_2$.
- **Câu 7:** Chọn **A**. $d = \frac{|2(1) - 2(1) + 2 + 3|}{\sqrt{4 + 4 + 1}} = \frac{|5|}{3} = \frac{5}{3}$.
- **Câu 8:** Chọn **A**. VTCP $\vec{u} = \vec{n}_P = (1; 2; -3)$. Đi qua $(1; 2; -1)$.
- **Câu 9:** Chọn **A**. VTCP $\vec{u} = (1; 1; \sqrt{2}) \implies |\vec{u}| = \sqrt{1 + 1 + 2} = 2$. VTPT $\vec{n} = (0; 0; 1) \implies |\vec{n}| = 1$. $\sin\varphi = \frac{|0 + 0 + \sqrt{2}|}{2 \cdot 1} = \frac{\sqrt{2}}{2}$.
- **Câu 10:** Chọn **A**. $d = \frac{|-1 - 8|}{\sqrt{4 + 1 + 4}} = \frac{9}{3} = 3$.
- **Câu 11:** Chọn **A**. Mặt phẳng qua $O$ nên $D = 0 \implies x - 3y + 2z = 0$.
- **Câu 12:** Chọn **B**. $\vec{u} = (2; 1; 1), \vec{n} = (1; 1; -3)$. $\vec{u} \cdot \vec{n} = 2(1) + 1(1) + 1(-3) = 0$. Điểm $M(1; -1; 2) \in d$, thay vào $(P)$: $1 + (-1) - 3(2) + 5 = 1 - 1 - 6 + 5 = 0$ (thỏa mãn). Vậy $d \subset (P)$.

---

### HƯỚNG DẪN GIẢI PHẦN II

**Câu 1:**
- a) **Đúng**. $\frac{x}{1} + \frac{y}{2} + \frac{z}{3} = 1 \iff 6x + 3y + 2z - 6 = 0$.
- b) **Sai**. Thay $D(1; 2; 3)$: $6(1) + 3(2) + 2(3) - 6 = 6 + 6 + 6 - 6 = 12 \neq 0$.
- c) **Đúng**. Hệ số là $(6; 3; 2)$.
- d) **Đúng**. $d(O, (ABC)) = \frac{|-6|}{\sqrt{36 + 9 + 4}} = \frac{6}{\sqrt{49}} = \frac{6}{7}$.

**Câu 2:**
- a) **Đúng**. $\vec{u} = (2; -1; 2)$.
- b) **Đúng**. $2(x - 1) - 1(y - 2) + 2(z - 3) = 0 \iff 2x - y + 2z - 6 = 0$.
- c) **Sai**. Hình chiếu $H$ là giao điểm của $d$ và $(P)$. Điểm $M(t) \in d \implies M(2 + 2t; -1 - t; 1 + 2t)$. Thay vào $(P)$: $2(2+2t) - (-1-t) + 2(1+2t) - 6 = 0 \iff 4 + 4t + 1 + t + 2 + 4t - 6 = 0 \iff 9t + 1 = 0 \iff t = -1/9 \implies H \neq (2; -1; 1)$.
- d) **Sai**. $H(2; -1; 1) \in d$ không phải là hình chiếu vuông góc của $A$.

**Câu 3:**
- a) **Đúng**. $\frac{1}{2} = \frac{2}{4} = \frac{-2}{-4} \neq \frac{1}{-7}$.
- b) **Đúng**. $d(O, (P)) = \frac{|1|}{\sqrt{1 + 4 + 4}} = \frac{1}{3}$.
- c) **Sai**. Mặt phẳng cách đều có hệ số $D = \frac{D_1 + D_2}{2}$ khi cùng quy về hệ số $2x + 4y - 4z$. $(P) \iff 2x + 4y - 4z + 2 = 0$. $D = \frac{2 + (-7)}{2} = -\frac{5}{2} \implies 2x + 4y - 4z - 2.5 = 0$.
- d) **Đúng**. $d = \frac{|2 - (-7)|}{\sqrt{4 + 16 + 16}} = \frac{9}{6} = \frac{3}{2}$.

**Câu 4:**
- a) **Đúng**. Đọc trực tiếp từ phương trình.
- b) **Đúng**. $\vec{u}_1 \cdot \vec{u}_2 = 2(1) + 1(-1) + (-1)(2) = 2 - 1 - 2 = -1$.
- c) **Sai**. Tích vô hướng bằng $-1 \neq 0$ nên hai đường thẳng không vuông góc.
- d) **Đúng**. $|\vec{u}_1| = \sqrt{4 + 1 + 1} = \sqrt{6}$, $|\vec{u}_2| = \sqrt{1 + 1 + 4} = \sqrt{6}$. $\cos\varphi = \frac{|-1|}{\sqrt{6}\sqrt{6}} = \frac{1}{6}$.

---

### HƯỚNG DẪN GIẢI PHẦN III

- **Câu 1:** Khoảng cách đến $(Oyz)$ là $|x_M| = |3| = 3$.
- **Câu 2:** $d = \frac{|-3 - 6|}{\sqrt{4 + 1 + 4}} = \frac{9}{3} = 3$.
- **Câu 3:** $\cos\varphi = \frac{|0 + 1 + 0|}{\sqrt{2}\sqrt{2}} = \frac{1}{2} \implies \varphi = 60^\circ$.
- **Câu 4:** $R = d(I, (P)) = \frac{|3(2) + 4(-2) + 12|}{\sqrt{9 + 16}} = \frac{|6 - 8 + 12|}{5} = \frac{10}{5} = 2$.
- **Câu 5:** Hình chiếu của $A(1; 2; 3)$ lên $Oz$ là $H(0; 0; 3)$. Khoảng cách là $AH = \sqrt{(1 - 0)^2 + (2 - 0)^2 + (3 - 3)^2} = \sqrt{1 + 4 + 0} = \sqrt{5} \approx 2.24$. (Đáp số chính xác: $\sqrt{5}$).
- **Câu 6:** Đường thẳng qua $M$ vuông góc $(P)$ là $x = 1 + t, y = 1 + 2t, z = 1 - 2t$.  
  Thay vào $(P)$: $(1 + t) + 2(1 + 2t) - 2(1 - 2t) + 9 = 0 \iff 1 + t + 2 + 4t - 2 + 4t + 9 = 0 \iff 9t + 10 = -10 \implies$ chờ chút: $1 + 2 - 2 + 9 = 10 \implies 9t + 10 = 0 \implies t = -\frac{10}{9}$.  
  Khi đó $a = 1 - \frac{10}{9} = -\frac{1}{9}$, $b = 1 - \frac{20}{9} = -\frac{11}{9}$, $c = 1 + \frac{20}{9} = \frac{29}{9}$.  
  Tổng $a + b + c = \frac{-1 - 11 + 29}{9} = \frac{17}{9} \approx 1.89$.

---

## IV. Đề kiểm tra trắc nghiệm tương tác tự động chấm (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách từ điểm $M(2; -3; 1)$ đến mặt phẳng $(P): 2x - y + 2z - 3 = 0$ bằng:",
  "options": [
    "A. 2",
    "B. 3",
    "C. $\\frac{4}{3}$",
    "D. 1"
  ],
  "answer": "A. 2",
  "explanation": "$d = \\frac{|2(2) - (-3) + 2(1) - 3|}{\\sqrt{4 + 1 + 4}} = \\frac{|4 + 3 + 2 - 3|}{3} = \\frac{6}{3} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Mặt phẳng đi qua $M(1; 2; 3)$ và song song với mặt phẳng $(Oxy)$ có phương trình là:",
  "options": [
    "A. $z - 3 = 0$",
    "B. $x + y - 3 = 0$",
    "C. $z + 3 = 0$",
    "D. $x - 1 = 0$"
  ],
  "answer": "A. $z - 3 = 0$",
  "explanation": "Mặt phẳng song song với $(Oxy)$ có phương trình dạng $z + D = 0$. Đi qua điểm có $z = 3 \\implies z = 3 \\iff z - 3 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Góc giữa hai đường thẳng $d_1$ có VTCP $\\vec{u}_1 = (1; 0; 0)$ và $d_2$ có VTCP $\\vec{u}_2 = (1; 1; 0)$ bằng:",
  "options": [
    "A. 30°",
    "B. 45°",
    "C. 60°",
    "D. 90°"
  ],
  "answer": "B. 45°",
  "explanation": "$\\cos\\varphi = \\frac{|1(1) + 0(1) + 0(0)|}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies \\varphi = 45°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đường thẳng nào sau đây VUÔNG GÓC với mặt phẳng $(P): x - 2y + 3z - 4 = 0$?",
  "options": [
    "A. $\\frac{x - 1}{1} = \\frac{y}{-2} = \\frac{z + 1}{3}$",
    "B. $\\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{3}$",
    "C. $\\frac{x - 1}{-1} = \\frac{y}{-2} = \\frac{z + 1}{3}$",
    "D. $\\frac{x - 1}{2} = \\frac{y}{-1} = \\frac{z + 1}{3}$"
  ],
  "answer": "A. $\\frac{x - 1}{1} = \\frac{y}{-2} = \\frac{z + 1}{3}$",
  "explanation": "Đường thẳng vuông góc với mặt phẳng thì có VTCP cùng phương với VTPT $\\vec{n}_P = (1; -2; 3)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách giữa hai mặt phẳng song song $(P): x + 2y - 2z + 1 = 0$ và $(Q): x + 2y - 2z + 7 = 0$ bằng:",
  "options": [
    "A. 2",
    "B. 3",
    "C. 6",
    "D. $\\frac{8}{3}$"
  ],
  "answer": "A. 2",
  "explanation": "$d = \\frac{|1 - 7|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho $\\vec{u} = (1; 2; 2)$ và $\\vec{n} = (2; -1; 0)$. Góc giữa đường thẳng có VTCP $\\vec{u}$ và mặt phẳng có VTPT $\\vec{n}$ bằng:",
  "options": [
    "A. 0°",
    "B. 30°",
    "C. 45°",
    "D. 90°"
  ],
  "answer": "A. 0°",
  "explanation": "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 1(2) + 2(-1) + 2(0) = 0 \\implies \\sin\\varphi = 0 \\implies \\varphi = 0°$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Hình chiếu vuông góc của điểm $M(2; 3; 4)$ lên trục tung $Oy$ có toạ độ là:",
  "options": [
    "A. $(0; 3; 0)$",
    "B. $(2; 0; 4)$",
    "C. $(0; 0; 4)$",
    "D. $(2; 0; 0)$"
  ],
  "answer": "A. $(0; 3; 0)$",
  "explanation": "Chiếu lên trục $Oy$ thì giữ lại tung độ $y = 3$, hoành độ và cao độ bằng 0: $(0; 3; 0)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Phương trình mặt phẳng đi qua $A(1; 0; 0)$ và song song với mặt phẳng $(Oyz)$ là:",
  "options": [
    "A. $x = 1$",
    "B. $y = 1$",
    "C. $z = 1$",
    "D. $x + y + z = 1$"
  ],
  "answer": "A. $x = 1$",
  "explanation": "Mặt phẳng $(Oyz)$ có phương trình $x = 0$. Mặt phẳng song song với $(Oyz)$ có phương trình $x = x_0 \\implies x = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(P): 3x - 4y + 10 = 0$ là:",
  "options": [
    "A. 2",
    "B. 10",
    "C. $\\frac{10}{7}$",
    "D. 1"
  ],
  "answer": "A. 2",
  "explanation": "$d(O, (P)) = \\frac{|10|}{\\sqrt{3^2 + (-4)^2 + 0}} = \\frac{10}{5} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tâm $I$ và bán kính $R$ của mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + z^2 = 16$ là:",
  "options": [
    "A. $I(1; -2; 0), R = 4$",
    "B. $I(-1; 2; 0), R = 4$",
    "C. $I(1; -2; 0), R = 16$",
    "D. $I(1; 2; 0), R = 4$"
  ],
  "answer": "A. $I(1; -2; 0), R = 4$",
  "explanation": "Theo dạng chính tắc $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$, ta có tâm $I(1; -2; 0)$ và bán kính $R = \\sqrt{16} = 4$."
}'></div>
