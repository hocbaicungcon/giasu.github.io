---
title: 'Toán 12 Bài tập cuối chương 1: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số'
description: 'Tổng ôn toàn diện Chương I Toán 12 Kết nối tri thức: Hệ thống lý thuyết đơn điệu, cực trị, GTLN-GTNN, 3 loại tiệm cận (đứng, ngang, xiên), 4 dạng toán trọng tâm ôn thi THPT Quốc gia và 12 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Đạo hàm
  - Khảo sát hàm số
  - Cực trị
  - Max Min
  - Tiệm cận
  - Bài tập cuối chương 1
  - Kết nối tri thức
grade: 12
---

# Bài tập cuối chương I. Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số

Chương I — **Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số** là chương học chiếm tỉ trọng điểm số lớn nhất và mở đầu cho toàn bộ khối lượng kiến thức Giải tích lớp 12 trong Kỳ thi Tốt nghiệp THPT.

Một học sinh nắm vững Chương I là người có khả năng:
1. Đọc vanh vách mọi thông tin từ **Bảng biến thiên** hoặc **Đồ thị hàm số** (chiều mũi tên, điểm cực trị, mút vô cực, đường tiệm cận).
2. Xử lý thành thạo các bài toán chứa tham số $m$ (hàm số đồng biến trên khoảng, hàm số đạt cực trị tại điểm cho trước).
3. Vận dụng linh hoạt đạo hàm để giải quyết các bài toán tối ưu hóa trong đời sống thực tế (kinh tế, kỹ thuật, hình học).

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">TỔNG KẾT TOÀN DIỆN MẠNG LƯỚI KIẾN THỨC CHƯƠNG I</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 10px 0; color: #1d4ed8;">1. Đơn điệu & Cực trị</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• Đồng biến $\iff f'(x) \ge 0$ (dấu bằng tại hữu hạn điểm).<br>
• Nghịch biến $\iff f'(x) \le 0$ (dấu bằng tại hữu hạn điểm).<br>
• $f'(x)$ đổi dấu từ $+$ sang $-$ $\implies$ Cực đại ($x_{CĐ}$).<br>
• $f'(x)$ đổi dấu từ $-$ sang $+$ $\implies$ Cực tiểu ($x_{CT}$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 10px 0; color: #047857;">2. GTLN & GTNN (Max / Min)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• <strong>Trên đoạn $[a; b]$:</strong> Tính $f(a), f(b)$ và các $f(x_i)$ với $f'(x_i)=0$. Số lớn nhất là Max, nhỏ nhất là Min.<br>
• <strong>Trên khoảng $(a; b)$:</strong> Bắt buộc lập Bảng biến thiên.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="margin: 0 0 10px 0; color: #b91c1c;">3. Ba loại Đường tiệm cận</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• <strong>Tiệm cận đứng:</strong> $x = x_0$ khi $\lim_{x \to x_0^\pm} y = \pm\infty$.<br>
• <strong>Tiệm cận ngang:</strong> $y = y_0$ khi $\lim_{x \to \pm\infty} y = y_0$.<br>
• <strong>Tiệm cận xiên:</strong> $y = ax + b$ khi $\lim_{x \to \pm\infty} [y - (ax+b)] = 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 10px 0; color: #6d28d9;">4. Ba dạng đồ thị chuẩn GDPT 2018</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• <strong>Hàm bậc ba:</strong> Tâm đối xứng là điểm uốn $I$.<br>
• <strong>Hàm phân thức bậc 1/1:</strong> Tâm $I$ là giao của TCĐ và TCN.<br>
• <strong>Hàm phân thức bậc 2/1:</strong> Tâm $I$ là giao của TCĐ và TCX.
</p>
</div>
</div>
</div>

---

## Bảng Tra Cứu Đặc Trưng Hình Học Ba Dạng Đồ Thị Chuẩn

| Dạng hàm số | Tập xác định & Đạo hàm | Đường tiệm cận | Tâm đối xứng | Hình dáng đồ thị |
| :--- | :--- | :--- | :--- | :--- |
| **Bậc ba:**<br>$y = ax^3 + bx^2 + cx + d$ | $D = \mathbb{R}$<br>$y' = 3ax^2 + 2bx + c$ | **Không có tiệm cận** | Điểm uốn $I\left(-\frac{b}{3a}; y_I\right)$ | Hình chữ N ($a > 0$) hoặc chữ N ngược ($a < 0$). Có 2 cực trị khi $\Delta'_{y'} > 0$. |
| **Phân thức 1/1:**<br>$y = \frac{ax+b}{cx+d}$ | $D = \mathbb{R} \setminus \left\{-\frac{d}{c}\right\}$<br>$y' = \frac{ad-bc}{(cx+d)^2}$ | • TCĐ: $x = -\frac{d}{c}$<br>• TCN: $y = \frac{a}{c}$ | Giao điểm hai tiệm cận:<br>$I\left(-\frac{d}{c}; \frac{a}{c}\right)$ | Hyperbol 2 nhánh nằm ở 2 góc phần tư đối diện, luôn đồng biến hoặc nghịch biến trên từng khoảng. |
| **Phân thức 2/1:**<br>$y = mx + n + \frac{r}{px+q}$ | $D = \mathbb{R} \setminus \left\{-\frac{q}{p}\right\}$ | • TCĐ: $x = -\frac{q}{p}$<br>• TCX: $y = mx + n$ | Giao điểm TCĐ và TCX:<br>$I\left(-\frac{q}{p}; y_I\right)$ | 2 nhánh kẹp giữa hai đường tiệm cận chéo nhau. Nếu có cực trị thì CĐ và CT nằm ở 2 nhánh khác nhau. |

---

## Bốn Dạng Toán Trọng Tâm Ôn Thi Có Lời Giải Chi Tiết

### Dạng 1: Xét tính đơn điệu, cực trị và tham số $m$

**Bài toán 1:** Cho hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x + 1$ (với $m$ là tham số thực).
a) Khảo sát sự biến thiên và tìm các điểm cực trị của hàm số khi $m = 1$.  
b) Tìm tất cả các giá trị của tham số $m$ để hàm số có hai điểm cực trị $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.

**Lời giải:**
Đạo hàm:
$$y' = 3x^2 - 6mx + 3(m^2 - 1) = 3[x^2 - 2mx + (m^2 - 1)]$$

a) Khi $m = 1$:
$$y' = 3(x^2 - 2x) = 3x(x - 2)$$
- $y' = 0 \iff x = 0$ hoặc $x = 2$.
- Dấu đạo hàm: $y' > 0$ trên $(-\infty; 0)$ và $(2; +\infty)$; $y' < 0$ trên $(0; 2)$.
- Kết luận:
  + Hàm số đồng biến trên $(-\infty; 0)$ và $(2; +\infty)$; nghịch biến trên $(0; 2)$.
  + Cực đại tại $x = 0$, $y_{CĐ} = y(0) = 1$.
  + Cực tiểu tại $x = 2$, $y_{CT} = y(2) = 2^3 - 3(2)^2 + 1 = 8 - 12 + 1 = -3$.

b) Hàm số có 2 điểm cực trị $\iff$ phương trình $y' = 0$ có 2 nghiệm phân biệt:
$$g(x) = x^2 - 2mx + (m^2 - 1) = 0 \text{ có } \Delta' > 0$$
$$\Delta' = (-m)^2 - (m^2 - 1) = m^2 - m^2 + 1 = 1 > 0 \quad (\forall m)$$
Vậy hàm số luôn có 2 điểm cực trị với mọi $m \in \mathbb{R}$.

Theo định lý Viète:
$$\left\{\begin{array}{l} x_1 + x_2 = 2m \\ x_1 x_2 = m^2 - 1 \end{array}\right.$$
Theo giả thiết:
$$x_1^2 + x_2^2 = 10 \iff (x_1 + x_2)^2 - 2x_1 x_2 = 10$$
$$(2m)^2 - 2(m^2 - 1) = 10 \iff 4m^2 - 2m^2 + 2 = 10 \iff 2m^2 = 8 \iff m^2 = 4 \iff m = \pm 2$$
Vậy các giá trị $m$ cần tìm là $m = 2$ hoặc $m = -2$.

---

### Dạng 2: Tìm GTLN và GTNN của hàm số

**Bài toán 2:** Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số:
$$f(x) = \frac{x^2 - 2x + 9}{x - 1} \quad \text{trên đoạn } [2; 5]$$

**Lời giải:**
Biến đổi: $f(x) = x - 1 + \frac{8}{x - 1}$.
Đạo hàm:
$$f'(x) = 1 - \frac{8}{(x - 1)^2} = \frac{(x - 1)^2 - 8}{(x - 1)^2}$$
Cho $f'(x) = 0$:
$$(x - 1)^2 = 8 \iff x - 1 = \sqrt{8} = 2\sqrt{2} \implies x = 1 + 2\sqrt{2} \approx 3.828 \in [2; 5]$$
*(Nghiệm $x = 1 - 2\sqrt{2} < 0$ loại vì không thuộc đoạn $[2; 5]$).*

Tính các giá trị:
- Tại $x = 2$: $f(2) = \frac{2^2 - 2(2) + 9}{2 - 1} = 9$.
- Tại $x = 5$: $f(5) = \frac{5^2 - 2(5) + 9}{5 - 1} = \frac{25 - 10 + 9}{4} = \frac{24}{4} = 6$.
- Tại điểm cực trị $x = 1 + 2\sqrt{2}$:
  $$f(1 + 2\sqrt{2}) = (1 + 2\sqrt{2} - 1) + \frac{8}{2\sqrt{2}} = 2\sqrt{2} + 2\sqrt{2} = 4\sqrt{2} \approx 5.657$$

So sánh 3 giá trị: $9$, $6$, $4\sqrt{2}$:
$$\max_{[2; 5]} f(x) = 9 \quad (\text{đạt tại } x = 2)$$
$$\min_{[2; 5]} f(x) = 4\sqrt{2} \quad (\text{đạt tại } x = 1 + 2\sqrt{2})$$

---

### Dạng 3: Đường tiệm cận và Bài toán tương giao

**Bài toán 3:** Cho hàm số $y = f(x) = \frac{x^2 + 2x - 3}{x - 2}$ có đồ thị là $(C)$.
a) Tìm các đường tiệm cận đứng và tiệm cận xiên của $(C)$.  
b) Tìm tọa độ giao điểm $I$ của hai đường tiệm cận đó và chứng minh $I$ là tâm đối xứng của $(C)$.  
c) Tìm tất cả các giá trị của tham số $m$ để đường thẳng $d: y = m$ cắt đồ thị $(C)$ tại 2 điểm phân biệt.

**Lời giải:**
Tập xác định: $D = \mathbb{R} \setminus \{2\}$.

a)
- Tiệm cận đứng: $x = 2$ (vì mẫu số triệt tiêu tại $x = 2$, tử $2^2 + 2(2) - 3 = 5 \ne 0$).
- Tiệm cận xiên: Chia tử cho mẫu:
  $$x^2 + 2x - 3 = x(x - 2) + 4(x - 2) + 5 = (x + 4)(x - 2) + 5 \implies y = x + 4 + \frac{5}{x - 2}$$
  Vậy tiệm cận xiên là đường thẳng $\mathbf{y = x + 4}$.

b)
- Tọa độ giao điểm $I$: Thay $x = 2$ vào tiệm cận xiên: $y = 2 + 4 = 6 \implies \mathbf{I(2; 6)}$.
- Chứng minh tâm đối xứng: Tịnh tiến hệ trục tọa độ về gốc $I(2; 6)$ bằng công thức $\left\{\begin{array}{l} x = X + 2 \\ y = Y + 6 \end{array}\right.$:
  $$Y + 6 = (X + 2) + 4 + \frac{5}{(X + 2) - 2} \iff Y + 6 = X + 6 + \frac{5}{X} \iff Y = F(X) = X + \frac{5}{X}$$
  Nhận thấy $F(-X) = -X - \frac{5}{X} = -F(X)$, đây là hàm số lẻ trên $\mathbb{R} \setminus \{0\}$.
  Do đó đồ thị nhận gốc $I(2; 6)$ làm tâm đối xứng!

c)
Đạo hàm:
$$y' = 1 - \frac{5}{(x - 2)^2} = \frac{(x - 2)^2 - 5}{(x - 2)^2}$$
$y' = 0 \iff (x - 2)^2 = 5 \iff x = 2 \pm \sqrt{5}$.
- Tại $x_1 = 2 - \sqrt{5} < 2$ (cực đại): $y_{CĐ} = (2 - \sqrt{5}) + 4 + \frac{5}{-\sqrt{5}} = 6 - 2\sqrt{5} \approx 1.528$.
- Tại $x_2 = 2 + \sqrt{5} > 2$ (cực tiểu): $y_{CT} = (2 + \sqrt{5}) + 4 + \frac{5}{\sqrt{5}} = 6 + 2\sqrt{5} \approx 10.472$.

Bảng biến thiên:
- Nhánh trái: Tăng từ $-\infty$ lên $y_{CĐ} = 6 - 2\sqrt{5}$ rồi giảm về $-\infty$.
- Nhánh phải: Giảm từ $+\infty$ xuống $y_{CT} = 6 + 2\sqrt{5}$ rồi tăng lên $+\infty$.

Để đường thẳng nằm ngang $y = m$ cắt đồ thị tại 2 điểm phân biệt (mỗi nhánh 1 điểm), giá trị $m$ phải nằm ở khoảng ngoài hai cực trị:
$$\left[\begin{array}{l} m > y_{CT} \iff m > 6 + 2\sqrt{5} \\ m < y_{CĐ} \iff m < 6 - 2\sqrt{5} \end{array}\right.$$

---

### Dạng 4: Bài toán tối ưu hóa chi phí thực tế

**Bài toán 4:** Một công ty năng lượng mặt trời cần lắp đặt một trạm pin quang điện trên một mái nhà hình thang vuông $ABCD$ (vuông tại $A$ và $B$). Biết $AB = 12\text{ m}$, $AD = 8\text{ m}$, $BC = 4\text{ m}$. Công ty muốn bố trí một khung giá đỡ pin hình chữ nhật $MNPQ$ nằm trọn trong mái nhà sao cho hai đỉnh $M, N$ nằm trên cạnh $AB$, đỉnh $P$ nằm trên cạnh xiên $CD$ và đỉnh $Q$ nằm trên cạnh $AD$.
Tìm diện tích lớn nhất của khung pin hình chữ nhật có thể lắp đặt được.

**Lời giải:**
Chọn hệ trục tọa độ $Oxy$ sao cho $A \equiv O(0; 0)$, cạnh $AB$ nằm trên trục $Ox$, cạnh $AD$ nằm trên trục $Oy$.
- Tọa độ các đỉnh: $A(0; 0)$, $B(12; 0)$, $D(0; 8)$, $C(12; 4)$.
- Phương trình đường thẳng cạnh xiên $CD$:
  Hệ số góc: $k = \frac{y_C - y_D}{x_C - x_D} = \frac{4 - 8}{12 - 0} = -\frac{4}{12} = -\frac{1}{3}$.
  Phương trình đường thẳng $CD$:
  $$y = -\frac{1}{3}x + 8$$
- Đỉnh $P(x; y)$ nằm trên đoạn $CD$ ($0 \le x \le 12$) thì tung độ $y = -\frac{1}{3}x + 8$.
- Khung pin hình chữ nhật $MNPQ$ có:
  + Chiều dài dọc theo $AB$ là hoành độ $x$.
  + Chiều rộng vuông góc với $AB$ là tung độ $y = -\frac{1}{3}x + 8$.
- Diện tích khung pin:
  $$S(x) = x \cdot y = x\left(-\frac{1}{3}x + 8\right) = -\frac{1}{3}x^2 + 8x \quad (0 \le x \le 12)$$
- Đạo hàm:
  $$S'(x) = -\frac{2}{3}x + 8$$
  $$S'(x) = 0 \iff -\frac{2}{3}x + 8 = 0 \iff x = 12\text{ m}$$
  Tại $x = 12\text{ m}$, chiều rộng $y = -\frac{1}{3}(12) + 8 = 4\text{ m}$.
  Diện tích lớn nhất đạt được là:
  $$S_{max} = S(12) = 12 \times 4 = 48\text{ m}^2$$

---

## Trắc nghiệm Tự chấm: Tổng ôn toàn chương I (12 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho hàm số y = f(x) có đạo hàm f\u0027(x) = (x - 1)^2 (x + 3)(x - 4). Hàm số f(x) nghịch biến trên khoảng nào sau đây?",
  "options": [
    "A. (-3; 4)",
    "B. (4; +∞)",
    "C. (-∞; -3)",
    "D. (1; 4)"
  ],
  "answer": "A. (-3; 4)",
  "explanation": "f\u0027(x) = 0 có nghiệm x = 1 (bội 2), x = -3 (bội 1), x = 4 (bội 1). Dấu của f\u0027(x): âm trên (-3; 1) và (1; 4), tức là âm trên toàn khoảng (-3; 4). Do đó hàm số nghịch biến trên (-3; 4)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hàm số y = -x^3 + 3x^2 - 2 đạt cực tiểu tại điểm:",
  "options": [
    "A. x = 0",
    "B. x = 2",
    "C. x = -2",
    "D. x = 3"
  ],
  "answer": "A. x = 0",
  "explanation": "y\u0027 = -3x^2 + 6x = -3x(x - 2) = 0 <=> x = 0 hoặc x = 2. y\u0027 đổi dấu từ âm sang dương khi qua x = 0 nên x = 0 là điểm cực tiểu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Giá trị lớn nhất của hàm số y = x^4 - 4x^2 + 5 trên đoạn [-1; 2] bằng:",
  "options": [
    "A. 5",
    "B. 1",
    "C. 2",
    "D. 9"
  ],
  "answer": "A. 5",
  "explanation": "y\u0027 = 4x^3 - 8x = 0 <=> x = 0, x = ±√2. Các điểm trong [-1; 2]: x = 0, x = √2. y(-1) = 2; y(0) = 5; y(√2) = 1; y(2) = 5. Vậy GTLN = 5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = (3x - 1) / (x + 2) lần lượt là:",
  "options": [
    "A. x = -2 và y = 3",
    "B. x = 2 và y = 3",
    "C. x = -2 và y = -1/2",
    "D. x = 3 và y = -2"
  ],
  "answer": "A. x = -2 và y = 3",
  "explanation": "Mẫu số triệt tiêu tại x = -2 => TCĐ là x = -2. Giới hạn vô cực lim y = 3 => TCN là y = 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Đồ thị hàm số y = (2x^2 - x + 1) / (x - 1) có tiệm cận xiên là đường thẳng:",
  "options": [
    "A. y = 2x + 1",
    "B. y = 2x - 1",
    "C. y = 2x",
    "D. y = x + 1"
  ],
  "answer": "A. y = 2x + 1",
  "explanation": "Chia đa thức: 2x^2 - x + 1 = 2x(x - 1) + (x - 1) + 2 = (2x + 1)(x - 1) + 2 => y = 2x + 1 + 2/(x - 1). Tiệm cận xiên là y = 2x + 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hàm số y = f(x) có đồ thị như hình chữ N với điểm cực đại (-1; 2) và điểm cực tiểu (1; -2). Số nghiệm của phương trình f(x) - 1 = 0 là:",
  "options": [
    "A. 3",
    "B. 1",
    "C. 2",
    "D. 0"
  ],
  "answer": "A. 3",
  "explanation": "f(x) - 1 = 0 <=> f(x) = 1. Vì -2 < 1 < 2 nên đường thẳng y = 1 cắt đồ thị tại 3 điểm phân biệt."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tâm đối xứng của đồ thị hàm số y = x^3 - 3x^2 + 4 là điểm nào?",
  "options": [
    "A. I(1; 2)",
    "B. I(0; 4)",
    "C. I(2; 0)",
    "D. I(-1; 0)"
  ],
  "answer": "A. I(1; 2)",
  "explanation": "y\u0027 = 3x^2 - 6x => y\u0027\u0027 = 6x - 6 = 0 <=> x = 1. y(1) = 1 - 3 + 4 = 2. Điểm uốn I(1; 2) chính là tâm đối xứng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Hàm số y = (x - 1) / (x + 1) đồng biến trên khoảng nào sau đây?",
  "options": [
    "A. (-∞; -1) và (-1; +∞)",
    "B. ℝ \\ {-1}",
    "C. (-1; 1)",
    "D. (-∞; +∞)"
  ],
  "answer": "A. (-∞; -1) và (-1; +∞)",
  "explanation": "y\u0027 = 2/(x + 1)^2 > 0 với mọi x ≠ -1. Định nghĩa đơn điệu chỉ xét trên từng khoảng rời nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tìm m để hàm số y = x^3 - 3x^2 + mx - 1 đồng biến trên ℝ:",
  "options": [
    "A. m ≥ 3",
    "B. m > 3",
    "C. m ≤ 3",
    "D. m < 3"
  ],
  "answer": "A. m ≥ 3",
  "explanation": "y\u0027 = 3x^2 - 6x + m ≥ 0 với mọi x <=> Δ\u0027 = (-3)^2 - 3m ≤ 0 <=> 9 - 3m ≤ 0 <=> m ≥ 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Số tiệm cận của đồ thị hàm số y = 1 / (x^2 - 4) là:",
  "options": [
    "A. 3 (2 tiệm cận đứng, 1 tiệm cận ngang)",
    "B. 2",
    "C. 1",
    "D. 4"
  ],
  "answer": "A. 3 (2 tiệm cận đứng, 1 tiệm cận ngang)",
  "explanation": "Mẫu x^2 - 4 = 0 <=> x = ±2 (2 TCĐ). Bậc tử < bậc mẫu nên có 1 TCN y = 0. Tổng cộng có 3 tiệm cận."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Một công ty sản xuất x sản phẩm với tổng doanh thu R(x) = 200x - x^2 và chi phí C(x) = x^2 + 40x + 100. Lợi nhuận lớn nhất khi sản xuất bao nhiêu sản phẩm?",
  "options": [
    "A. x = 40",
    "B. x = 50",
    "C. x = 80",
    "D. x = 100"
  ],
  "answer": "A. x = 40",
  "explanation": "Π(x) = R(x) - C(x) = -2x^2 + 160x - 100. Đỉnh parabol x = -160 / [2(-2)] = 40 sản phẩm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Đồ thị hàm số y = (x^2 + 1) / (x - 1) có tâm đối xứng là điểm:",
  "options": [
    "A. I(1; 2)",
    "B. I(1; 0)",
    "C. I(0; -1)",
    "D. I(1; 1)"
  ],
  "answer": "A. I(1; 2)",
  "explanation": "y = x + 1 + 2/(x - 1). TCĐ là x = 1, TCX là y = x + 1. Giao điểm là I(1; 1 + 1) = I(1; 2)."
}'></div>
