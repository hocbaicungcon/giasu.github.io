---
title: 'Toán 11: Bài tập cuối chương 5 - Giới hạn và Hàm số liên tục'
description: 'Tổng ôn toàn diện Chương 5 Giải tích 11 Kết nối tri thức: Hệ thống hóa toàn bộ công thức giới hạn dãy số, giới hạn hàm số, cấp số nhân lùi vô hạn, tính liên tục, kỹ thuật khử các dạng vô định và 12 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Ôn tập chương 5
  - Giới hạn dãy số
  - Giới hạn hàm số
  - Hàm số liên tục
  - Cấp số nhân lùi vô hạn
  - Trắc nghiệm chương 5
  - Kết nối tri thức
grade: 11
---

# Bài tập cuối chương V. Giới hạn. Hàm số liên tục

Chúc mừng các em đã hoàn thành toàn bộ chuyên đề **Chương V: Giới hạn. Hàm số liên tục** — cũng là bài học khép lại toàn bộ chương trình **Toán 11 - Tập 1** (Bộ sách Kết nối tri thức với cuộc sống)!

Khái niệm Giới hạn và Tính liên tục là bước ngoặt tư duy vĩ đại nhất của toán học phổ thông, đánh dấu sự chuyển mình từ Đại số sơ cấp (khảo sát các đại lượng hữu hạn, đứng yên) sang Giải tích toán học (nghiên cứu sự biến thiên liên tục, các đại lượng vô cùng bé và vô cùng lớn). Đây là nền tảng sống còn để các em học tiếp chuyên đề Đạo hàm ở Học kì 2 và Tích phân ở lớp 12.

Bài học tổng kết này sẽ hệ thống hóa toàn bộ công thức, bảng nhận diện phương pháp khử dạng vô định và bộ đề trắc nghiệm tự chấm giúp các em tự tin đạt điểm tối đa trong các bài kiểm tra định kỳ và thi học kì!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG V: GIỚI HẠN & HÀM SỐ LIÊN TỤC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Giới hạn Dãy số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\lim \frac{1}{n^k} = 0$, $\lim q^n = 0$ ($|q| < 1$).<br>• Cấp số nhân lùi vô hạn: $S = \frac{u_1}{1 - q}$.<br>• Khử $\frac{\infty}{\infty}$: Chia cho bậc cao nhất của $n$.<br>• Khử $\infty - \infty$: Nhân lượng liên hợp.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Giới hạn Hàm số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Giới hạn tại điểm: $\lim_{x \to x_0} f(x) = L$.<br>• Giới hạn một bên: $\lim_{x \to x_0^+} f(x)$ và $\lim_{x \to x_0^-} f(x)$.<br>• Tồn tại giới hạn $\iff \lim_{x \to x_0^+} = \lim_{x \to x_0^-} = L$.<br>• Khử $\frac{0}{0}$: Tách nhân tử $(x - x_0)$ hoặc liên hợp.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Giới hạn tại Vô cực</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x \to +\infty$ hoặc $x \to -\infty$.<br>• Rút $x$ bậc cao nhất ra ngoài.<br>• Chú ý dấu căn: $\sqrt{x^2} = |x| = -x$ khi $x \to -\infty$.<br>• $\lim \frac{1}{x^k} = 0$ ($k \in \mathbb{N}^*$).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hàm số Liên tục</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Liên tục tại $x_0 \iff \lim_{x \to x_0} f(x) = f(x_0)$.<br>• Hàm sơ cấp liên tục trên tập xác định.<br>• Định lý Bolzano: $f$ liên tục trên $[a; b]$ và $f(a) \cdot f(b) < 0 \Rightarrow$ có nghiệm $c \in (a; b)$.</p>
</div>
</div>
</div>

---

## I. Bảng Tra cứu Toàn diện: Kỹ thuật Khử các Dạng Vô định

| Dạng vô định | Tình huống xuất hiện | Kỹ thuật giải quyết cốt lõi | Ví dụ tiêu biểu |
| :---: | :--- | :--- | :--- |
| **$\frac{0}{0}$** | $x \to x_0$ trong phân thức đa thức hoặc căn thức | 1. Phân tích thành nhân tử $(x - x_0)$ để triệt tiêu.<br>2. Nhân lượng liên hợp bậc 2: $\sqrt{A} - B = \frac{A - B^2}{\sqrt{A} + B}$.<br>3. Nhân lượng liên hợp bậc 3: $\sqrt[3]{A} - B = \frac{A - B^3}{\sqrt[3]{A^2} + B\sqrt[3]{A} + B^2}$. | $\lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{x - 1} = \frac{1}{4}$ |
| **$\frac{\infty}{\infty}$** | $n \to +\infty$ (dãy số) hoặc $x \to \pm\infty$ (hàm số) | Chia cả tử và mẫu cho $x^k$ với $k$ là bậc cao nhất của mẫu. | $\lim \frac{3n^2 - 1}{2n^2 + 5} = \frac{3}{2}$ |
| **$\infty - \infty$** | Chứa hiệu căn thức cùng bậc cao nhất và cùng hệ số | Nhân lượng liên hợp để đưa về dạng phân thức $\frac{\infty}{\infty}$ rồi rút $x$. | $\lim (\sqrt{n^2 + 2n} - n) = 1$ |
| **$\frac{L}{0}$ ($L \ne 0$)** | Mẫu số tiến về $0$, tử số tiến về hằng số khác $0$ | Xét dấu của tử số $L$ và dấu của mẫu số trong lân cận điểm đang xét $\Rightarrow$ kết quả ra $+\infty$ hoặc $-\infty$. | $\lim_{x \to 2^+} \frac{1}{x - 2} = +\infty$ |
| **Mũ $a^n, b^n$** | Phân thức chứa hàm mũ khi $n \to +\infty$ | Chia cả tử và mẫu cho $q^n$ với $q$ là cơ số có trị tuyệt đối lớn nhất. | $\lim \frac{2^n + 3 \cdot 5^n}{5^n - 2^n} = 3$ |

---

## II. Bộ đề Ôn tập Trắc nghiệm Toàn diện (12 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị của \\lim \\frac{2n^2 - 3n + 1}{n^2 + 4} bằng:",
  "options": [
    "A. 2",
    "B. 1/4",
    "C. 0",
    "D. +\\infty"
  ],
  "answer": "A. 2",
  "explanation": "Bậc tử bằng bậc mẫu (bậc 2), giới hạn bằng tỉ số hai hệ số cao nhất: 2 / 1 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tổng của cấp số nhân lùi vô hạn S = 3 - 1 + 1/3 - 1/9 + ... bằng:",
  "options": [
    "A. 9/4",
    "B. 9/2",
    "C. 3/2",
    "D. 2"
  ],
  "answer": "A. 9/4",
  "explanation": "u_1 = 3, q = -1/3. S = u_1 / (1 - q) = 3 / (1 - (-1/3)) = 3 / (4/3) = 9/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tính giới hạn \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}:",
  "options": [
    "A. 0",
    "B. 2",
    "C. 4",
    "D. Không tồn tại"
  ],
  "answer": "C. 4",
  "explanation": "\\lim_{x \\to 2} (x - 2)(x + 2) / (x - 2) = \\lim_{x \\to 2} (x + 2) = 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tính giới hạn \\lim_{x \\to 1} \\frac{\\sqrt{2x + 2} - 2}{x - 1}:",
  "options": [
    "A. 1/2",
    "B. 1/4",
    "C. 1",
    "D. 2"
  ],
  "answer": "A. 1/2",
  "explanation": "Nhân liên hợp: (2x + 2 - 4) / [(x - 1)(\\sqrt{2x + 2} + 2)] = 2(x - 1) / [(x - 1)(\\sqrt{2x + 2} + 2)] = 2 / (2 + 2) = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số f(x) = { 3x - 1 khi x ≥ 2; ax + 3 khi x < 2 }. Để tồn tại \\lim_{x \\to 2} f(x) thì giá trị của a là:",
  "options": [
    "A. a = 1",
    "B. a = 2",
    "C. a = -1",
    "D. a = 5"
  ],
  "answer": "A. a = 1",
  "explanation": "\\lim_{x \\to 2^+} f(x) = 3(2) - 1 = 5. \\lim_{x \\to 2^-} f(x) = 2a + 3. Giới hạn tồn tại <=> 2a + 3 = 5 <=> a = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Tính giới hạn \\lim_{x \\to 1^+} \\frac{2x - 3}{x - 1}:",
  "options": [
    "A. +\\infty",
    "B. -\\infty",
    "C. -1",
    "D. 0"
  ],
  "answer": "B. -\\infty",
  "explanation": "Tử số tiến về 2(1) - 3 = -1 < 0. Mẫu số x - 1 tiến về 0 và mang dấu dương vì x > 1. Do đó thương tiến về -\\infty."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giá trị của \\lim_{x \\to -\\infty} \\frac{\\sqrt{9x^2 + 2x} - 1}{2x + 3} bằng:",
  "options": [
    "A. 3/2",
    "B. -3/2",
    "C. 0",
    "D. +\\infty"
  ],
  "answer": "B. -3/2",
  "explanation": "Khi x -> -\\infty thì \\sqrt{x^2} = -x. Tử số là -x\\sqrt{9 + 2/x} - 1. Chia cả tử và mẫu cho x ta được (-3 - 0) / (2 + 0) = -3/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tính giới hạn \\lim (\\sqrt{4n^2 + n} - 2n):",
  "options": [
    "A. 1/4",
    "B. 1/2",
    "C. 1",
    "D. 0"
  ],
  "answer": "A. 1/4",
  "explanation": "Nhân liên hợp: n / (\\sqrt{4n^2 + n} + 2n) = 1 / (\\sqrt{4 + 1/n} + 2) = 1 / (2 + 2) = 1/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Hàm số nào sau đây LIÊN TỤC trên toàn bộ tập số thực R?",
  "options": [
    "A. y = (x + 1) / (x^2 - 1)",
    "B. y = tan x",
    "C. y = \\sqrt{x - 1}",
    "D. y = x^4 - 2x^2 + 3"
  ],
  "answer": "D. y = x^4 - 2x^2 + 3",
  "explanation": "Hàm số đa thức liên tục trên toàn bộ tập số thực R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hàm số f(x) liên tục trên [-2; 1] thỏa mãn f(-2) = 4 và f(1) = -3. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. Phương trình f(x) = 0 có ít nhất một nghiệm trong khoảng (-2; 1)",
    "B. f(x) luôn đồng biến trên [-2; 1]",
    "C. Phương trình f(x) = 0 có đúng một nghiệm trong khoảng (-2; 1)",
    "D. f(x) > 0 với mọi x thuộc [-2; 1]"
  ],
  "answer": "A. Phương trình f(x) = 0 có ít nhất một nghiệm trong khoảng (-2; 1)",
  "explanation": "f(-2) * f(1) = 4 * (-3) = -12 < 0. Theo định lý Bolzano-Cauchy, phương trình f(x) = 0 có ít nhất 1 nghiệm trong khoảng (-2; 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Phương trình 2x^3 - 5x + 1 = 0 có ít nhất bao nhiêu nghiệm trong khoảng (-2; 2)?",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. Vô nghiệm"
  ],
  "answer": "C. 3",
  "explanation": "f(-2) = -5 < 0; f(0) = 1 > 0; f(1) = -2 < 0; f(2) = 7 > 0. Các tích f(-2)*f(0) < 0, f(0)*f(1) < 0, f(1)*f(2) < 0 chứng tỏ có ít nhất 3 nghiệm phân biệt trong (-2; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Tính giới hạn \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x} - \\sqrt[3]{1 + 2x}}{x}:",
  "options": [
    "A. 1/6",
    "B. 5/6",
    "C. 1",
    "D. 7/6"
  ],
  "answer": "B. 5/6",
  "explanation": "Thêm bớt 1 ở tử: [(\\sqrt{1 + 3x} - 1) / x] - [(\\sqrt[3]{1 + 2x} - 1) / x] = 3/2 - 2/3 = 9/6 - 4/6 = 5/6."
}'></div>

---

## III. Các Bài toán Tự luận Trọng tâm

### Bài 1: Tính các giới hạn dãy số và hàm số

a) $\lim \frac{2 \cdot 3^n - 4 \cdot 7^n + 1}{5 \cdot 7^n + 2^n}$  
b) $\lim \left(\sqrt{n^2 + 5n} - \sqrt{n^2 - 3n}\right)$  
c) $\lim_{x \to 2} \frac{x^3 - 8}{x^2 - 3x + 2}$  
d) $\lim_{x \to -\infty} \frac{\sqrt{4x^2 + 3} + 2x}{x - 1}$

> [!TIP]
> **Lời giải vắn tắt:**
> a) Chia cả tử và mẫu cho $7^n \Rightarrow \frac{0 - 4 + 0}{5 + 0} = -\frac{4}{5}$.  
> b) Nhân liên hợp: $\lim \frac{8n}{\sqrt{n^2 + 5n} + \sqrt{n^2 - 3n}} = \frac{8}{1 + 1} = 4$.  
> c) $\lim_{x \to 2} \frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x - 1)} = \frac{4 + 4 + 4}{2 - 1} = 12$.  
> d) Khi $x \to -\infty$, $\sqrt{4x^2} = -2x \Rightarrow \sqrt{4x^2 + 3} + 2x$ gặp dạng $\infty - \infty$, cần nhân liên hợp:
> $$\lim_{x \to -\infty} \frac{3}{(x - 1)(\sqrt{4x^2 + 3} - 2x)} = 0$$

---

### Bài 2: Định tham số để hàm số liên tục

Cho hàm số:
$$f(x) = \begin{cases} \frac{\sqrt{2x + 5} - 3}{x - 2} & \text{khi } x > 2 \\ ax + \frac{1}{6} & \text{khi } x \le 2 \end{cases}$$
Tìm $a$ để hàm số liên tục tại điểm $x_0 = 2$.

> [!TIP]
> **Lời giải:**
> - $f(2) = 2a + \frac{1}{6}$.
> - $\lim_{x \to 2^-} f(x) = 2a + \frac{1}{6}$.
> - $\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} \frac{2(x - 2)}{(x - 2)(\sqrt{2x + 5} + 3)} = \frac{2}{3 + 3} = \frac{1}{3}$.
> - Hàm số liên tục tại $x = 2 \iff 2a + \frac{1}{6} = \frac{1}{3} \iff 2a = \frac{1}{6} \iff a = \frac{1}{12}$.

---

### Bài toán Thực tế: Dược động học và Nồng độ Thuốc tích lũy

Một bệnh nhân được chỉ định dùng thuốc hạ sốt định kỳ:
- Mỗi lần uống một liều cố định chứa $D_0 = 500\,mg$ hoạt chất.
- Sau mỗi khoảng thời gian 6 tiếng (trước liều uống tiếp theo), cơ thể đào thải bớt và chỉ còn giữ lại $40\%$ lượng thuốc có trong cơ thể trước đó (tức tỉ lệ thuốc còn lại là $q = 0.4$).

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Câu hỏi:</strong><br>
1. Tính lượng thuốc $C_1, C_2, C_3$ trong cơ thể ngay sau liều uống thứ nhất, thứ hai và thứ ba.<br>
2. Thiết lập công thức lượng thuốc $C_n$ trong cơ thể ngay sau liều uống thứ $n$.<br>
3. Nếu bệnh nhân điều trị lâu dài nhiều ngày liên tục ($n \to +\infty$), lượng thuốc tối đa tích lũy trong cơ thể sẽ tiến dần về mức ổn định (trạng thái bão hòa) là bao nhiêu miligam?<br>
4. Nếu ngưỡng gây độc cho gan của thuốc là $900\,mg$, phác đồ điều trị trên có an toàn không?
</div>

> [!TIP]
> **Hướng dẫn giải:**
> 1. Các liều đầu:
>    - $C_1 = 500\,mg$.
>    - $C_2 = 500 + C_1 \cdot 0.4 = 500 + 500(0.4) = 700\,mg$.
>    - $C_3 = 500 + C_2 \cdot 0.4 = 500 + 500(0.4) + 500(0.4)^2 = 780\,mg$.
> 2. Công thức tổng quát sau liều thứ $n$:
>    $$C_n = 500 \cdot \left[1 + 0.4 + (0.4)^2 + \dots + (0.4)^{n-1}\right] = 500 \cdot \frac{1 - (0.4)^n}{1 - 0.4}$$
> 3. Lượng thuốc trạng thái ổn định khi $n \to +\infty$:
>    $$C_{\infty} = \lim_{n \to +\infty} C_n = \frac{500}{1 - 0.4} = \frac{500}{0.6} = \frac{2500}{3} \approx 833.33\,mg$$
> 4. Vì $C_{\infty} \approx 833.33\,mg < 900\,mg$ nên lượng thuốc trong cơ thể không bao giờ vượt quá $833.33\,mg$, luôn nằm dưới ngưỡng ngộ độc gan $900\,mg$. Phác đồ điều trị hoàn toàn an toàn về mặt dược động học!
