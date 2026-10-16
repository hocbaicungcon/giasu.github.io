---
title: 'Toán 11 Bài tập cuối chương 8: Các quy tắc tính xác suất - Ôn tập toàn diện'
description: 'Tổng ôn lý thuyết trọng tâm Chương VIII Toán 11 Kết nối tri thức: Biến cố hợp, giao, độc lập, xung khắc, quy tắc cộng và quy tắc nhân xác suất, phương pháp giải 4 dạng toán kinh điển và 12 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Xác suất
  - Ôn tập chương 8
  - Công thức cộng xác suất
  - Công thức nhân xác suất
  - Biến cố độc lập
  - Kết nối tri thức
grade: 11
---

# Bài tập cuối chương VIII. Các quy tắc tính xác suất

Chương VIII đã đưa chúng ta từ những khái niệm cơ bản về biến cố trong không gian mẫu tiến tới việc làm chủ hai quy tắc tính xác suất mạnh mẽ và thực tiễn nhất của toán học hiện đại: **Quy tắc cộng xác suất** và **Quy tắc nhân xác suất**.

Để đạt điểm số tối đa trong các bài kiểm tra định kỳ và kỳ thi Tốt nghiệp THPT, các em cần có khả năng:
1. Đọc một đề toán thực tế và nhận diện chính xác các biến cố đang ở mối quan hệ nào: **hợp, giao, xung khắc hay độc lập**.
2. Vận dụng linh hoạt phương pháp **biến cố đối** khi gặp các yêu cầu tính xác suất *"có ít nhất một"*.
3. Phối hợp nhịp nhàng giữa công thức cộng và công thức nhân để chia trường hợp một cách khoa học, không bỏ sót và không trùng lặp.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">TỔNG KẾT HỆ THỐNG CÔNG THỨC CHƯƠNG VIII</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 10px 0; color: #1d4ed8;">1. Biến cố Hợp & Công thức Cộng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• <strong>Tổng quát:</strong> $P(A \cup B) = P(A) + P(B) - P(AB)$<br>
• <strong>Xung khắc ($A \cap B = \emptyset$):</strong> $P(A \cup B) = P(A) + P(B)$<br>
• <strong>Biến cố đối:</strong> $P(\overline{A}) = 1 - P(A)$
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 10px 0; color: #047857;">2. Biến cố Giao & Công thức Nhân</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• <strong>Độc lập:</strong> $P(AB) = P(A) \cdot P(B)$<br>
• <strong>Hệ $n$ biến cố độc lập:</strong><br>
&nbsp;&nbsp;$P(A_1 A_2 \dots A_n) = P(A_1) \cdot P(A_2) \dots P(A_n)$<br>
• <strong>Ít nhất 1 biến cố:</strong> $1 - \prod_{i=1}^n [1 - P(A_i)]$
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 10px 0; color: #b45309;">3. Dấu hiệu nhận biết biến cố độc lập</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• $A, B$ độc lập $\iff P(AB) = P(A)P(B)$<br>
• Nếu $A, B$ độc lập thì các cặp $(A, \overline{B})$, $(\overline{A}, B)$, $(\overline{A}, \overline{B})$ cũng độc lập.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 18px; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="margin: 0 0 10px 0; color: #b91c1c;">4. Phân biệt Xung khắc vs Độc lập</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.8;">
• <strong>Xung khắc:</strong> Không thể cùng xảy ra ($A \cap B = \emptyset$).<br>
• <strong>Độc lập:</strong> Xảy ra của $A$ không đổi xác suất của $B$.<br>
• Nếu $P(A)>0, P(B)>0$ và $A, B$ xung khắc thì <em>không độc lập</em>!
</p>
</div>
</div>
</div>

---

## Bảng tra cứu toàn diện: Phân loại bài toán và Công thức xử lý

| Dấu hiệu ngôn ngữ đề bài | Tên biến cố | Công thức giải quyết |
| :--- | :--- | :--- |
| *"Xảy ra $A$ hoặc xảy ra $B$"*, *"Có ít nhất một trong hai biến cố xảy ra"* | Biến cố hợp $A \cup B$ | $P(A \cup B) = P(A) + P(B) - P(AB)$ |
| *"Cả $A$ và $B$ đồng thời cùng xảy ra"* | Biến cố giao $AB$ (với $A, B$ độc lập) | $P(AB) = P(A) \cdot P(B)$ |
| *"Biến cố $A$ không xảy ra"*, *"Không có cái nào..."* | Biến cố đối $\overline{A}$ | $P(\overline{A}) = 1 - P(A)$ |
| *"Có ít nhất một sự kiện thành công trong $n$ lần độc lập"* | Hợp của các biến cố độc lập | $P = 1 - [1 - P(A_1)][1 - P(A_2)]\dots[1 - P(A_n)]$ |
| *"Có đúng một trong hai biến cố $A, B$ xảy ra"* | Hợp của hai trường hợp xung khắc | $P = P(A\overline{B}) + P(\overline{A}B) = P(A)[1-P(B)] + [1-P(A)]P(B)$ |

---

## Bốn Dạng Toán Điển Hình Ôn Thi Có Lời Giải Chi Tiết

### Dạng 1: Xác định quan hệ biến cố & Biểu diễn bằng đại số tập hợp

**Bài toán 1:** Một bác sĩ thực hiện một đợt xét nghiệm kiểm tra sức khỏe tổng quát cho một bệnh nhân. Gọi:
- $A$: "Bệnh nhân có nồng độ đường huyết cao".
- $B$: "Bệnh nhân có huyết áp cao".
- $C$: "Bệnh nhân có lượng mỡ máu cao".

Hãy dùng các phép toán hợp, giao, đối để biểu diễn các biến cố sau:
a) Bệnh nhân mắc cả 3 triệu chứng trên.  
b) Bệnh nhân hoàn toàn khỏe mạnh (không mắc triệu chứng nào).  
c) Bệnh nhân có ít nhất 1 triệu chứng.  
d) Bệnh nhân chỉ mắc đúng duy nhất triệu chứng huyết áp cao.  
e) Bệnh nhân mắc đúng 2 trong 3 triệu chứng.

**Lời giải:**
a) Mắc cả 3 triệu chứng là biến cố giao: $A \cap B \cap C$ (hoặc viết tắt là $ABC$).  
b) Không mắc triệu chứng nào tức là không $A$, không $B$ và không $C$: $\overline{A} \cap \overline{B} \cap \overline{C}$ (hoặc viết tắt là $\overline{A}\,\overline{B}\,\overline{C}$).  
c) Mắc ít nhất 1 triệu chứng là biến cố hợp: $A \cup B \cup C$. Nhận xét: đây chính là biến cố đối của câu b: $A \cup B \cup C = \overline{\overline{A}\,\overline{B}\,\overline{C}}$.  
d) Chỉ mắc đúng huyết áp cao (có $B$, nhưng không có $A$ và không có $C$): $\overline{A} B \overline{C}$.  
e) Mắc đúng 2 trong 3 triệu chứng gồm 3 khả năng xung khắc nhau:
$$(AB\overline{C}) \cup (A\overline{B}C) \cup (\overline{A}BC)$$

---

### Dạng 2: Vận dụng công thức cộng xác suất (biến cố xung khắc và biến cố đối)

**Bài toán 2:** Một hộp đựng 12 viên bi giống hệt nhau về kích thước, gồm 5 bi đỏ, 4 bi xanh và 3 bi vàng. Lấy ngẫu nhiên đồng thời 3 viên bi. Tính xác suất để:
a) 3 viên bi lấy ra có đủ cả 3 màu.  
b) 3 viên bi lấy ra cùng một màu.  
c) 3 viên bi lấy ra có ít nhất 1 viên bi màu đỏ.

**Lời giải:**
Số phần tử của không gian mẫu:
$$n(\Omega) = C_{12}^3 = \frac{12 \times 11 \times 10}{3 \times 2 \times 1} = 220$$

a) Biến cố 3 viên bi có đủ cả 3 màu (1 đỏ, 1 xanh, 1 vàng):
Số kết quả thuận lợi: $n(A) = C_5^1 \times C_4^1 \times C_3^1 = 5 \times 4 \times 3 = 60$.
$$P(A) = \frac{60}{220} = \frac{3}{11}$$

b) Biến cố 3 viên bi cùng một màu có thể là: cùng màu đỏ, cùng màu xanh hoặc cùng màu vàng. Ba trường hợp này đôi một xung khắc nhau:
- Cùng đỏ: $C_5^3 = 10$.
- Cùng xanh: $C_4^3 = 4$.
- Cùng vàng: $C_3^3 = 1$.
Số kết quả thuận lợi: $n(B) = 10 + 4 + 1 = 15$.
$$P(B) = \frac{15}{220} = \frac{3}{44}$$

c) Biến cố $C$: "Có ít nhất 1 viên bi màu đỏ".
Biến cố đối $\overline{C}$: "Không có viên bi màu đỏ nào" (tức cả 3 viên đều chọn từ 7 viên xanh và vàng).
$$n(\overline{C}) = C_7^3 = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$
Xác suất của biến cố đối:
$$P(\overline{C}) = \frac{35}{220} = \frac{7}{44}$$
Suy ra xác suất cần tìm là:
$$P(C) = 1 - P(\overline{C}) = 1 - \frac{7}{44} = \frac{37}{44} \approx 0.841$$

---

### Dạng 3: Bài toán chuỗi thử nghiệm độc lập và xác suất ít nhất một lần

**Bài toán 3:** Một thiết bị viễn thông có 4 bộ vi xử lý hoạt động độc lập với nhau. Trong điều kiện môi trường khắc nghiệt, xác suất để một bộ vi xử lý bị sự cố quá nhiệt trong 1 ngày làm việc là $0.05$. Thiết bị chỉ ngừng hoạt động hoàn toàn nếu **cả 4 bộ vi xử lý đều bị sự cố**.
a) Tính xác suất để thiết bị ngừng hoạt động hoàn toàn trong ngày.  
b) Tính xác suất để thiết bị hoạt động bình thường (có ít nhất 1 bộ vi xử lý không bị sự cố).  
c) Cần trang bị tối thiểu bao nhiêu bộ vi xử lý độc lập để xác suất thiết bị hoạt động an toàn đạt không dưới $99.999\%$ ($0.99999$)?

**Lời giải:**
Gọi $A_i$ là biến cố "Bộ vi xử lý thứ $i$ bị sự cố", $P(A_i) = 0.05$ với mọi $i = 1, 2, 3, 4$.
Vì các bộ vi xử lý hoạt động độc lập nên các biến cố $A_i$ độc lập.

a) Thiết bị ngừng hoạt động hoàn toàn khi cả 4 bộ cùng bị sự cố:
$$P(\text{Ngừng hoạt động}) = P(A_1 A_2 A_3 A_4) = (0.05)^4 = 0.00000625 = 6.25 \times 10^{-6}$$

b) Thiết bị hoạt động bình thường là biến cố đối của việc ngừng hoạt động:
$$P(\text{Bình thường}) = 1 - (0.05)^4 = 1 - 0.00000625 = 0.99999375 \approx 99.9994\%$$

c) Giả sử hệ thống được trang bị $n$ bộ vi xử lý ($n \in \mathbb{N}^*$).
Xác suất để cả $n$ bộ cùng bị hỏng là $(0.05)^n$.
Xác suất thiết bị hoạt động an toàn là:
$$P_n = 1 - (0.05)^n$$
Theo yêu cầu đề bài:
$$1 - (0.05)^n \ge 0.99999 \iff (0.05)^n \le 0.00001 = 10^{-5}$$
Lấy lôgarit cơ số 10 hai vế (vì $\log(0.05) < 0$ nên bất đẳng thức đổi chiều):
$$n \cdot \log(0.05) \le -5 \iff n \ge \frac{-5}{\log(0.05)} \approx \frac{-5}{-1.30103} \approx 3.84$$
Vì $n$ là số nguyên dương nhỏ nhất nên $n = 4$.
Vậy chỉ cần tối thiểu 4 bộ vi xử lý là đã đáp ứng tiêu chuẩn an toàn siêu cao này!

---

### Dạng 4: Bài toán tổng hợp phối hợp cả quy tắc cộng và quy tắc nhân

**Bài toán 4:** Hai người thợ săn A và B cùng ngắm bắn độc lập vào một con mồi. Xác suất bắn trúng của người A là $0.7$, của người B là $0.6$. Nếu chỉ có đúng 1 viên đạn trúng thì con mồi bị thương nhưng trốn thoát với xác suất $0.5$ (tức bị bắt với xác suất $0.5$). Nếu cả 2 viên đạn cùng trúng thì con mồi chắc chắn bị bắt ($100\%$). Nếu không viên nào trúng thì con mồi chạy thoát. Tính xác suất để con mồi bị bắt.

**Lời giải:**
Gọi $A$ là biến cố "Người A bắn trúng" $\implies P(A) = 0.7, P(\overline{A}) = 0.3$.  
Gọi $B$ là biến cố "Người B bắn trúng" $\implies P(B) = 0.6, P(\overline{B}) = 0.4$.  
Vì hai người bắn độc lập, ta có:
1. Xác suất cả 2 viên cùng trúng:
   $$P_2 = P(AB) = P(A)P(B) = 0.7 \times 0.6 = 0.42$$
   Khi đó xác suất bắt được mồi là $P(\text{bắt} \mid 2 \text{ trúng}) = 1$.
   Xác suất con mồi bị bắt trong trường hợp này là:
   $$0.42 \times 1 = 0.42$$

2. Xác suất có đúng 1 viên trúng:
   $$P_1 = P(A\overline{B}) + P(\overline{A}B) = 0.7 \times 0.4 + 0.3 \times 0.6 = 0.28 + 0.18 = 0.46$$
   Khi đó xác suất bắt được mồi là $0.5$.
   Xác suất con mồi bị bắt trong trường hợp này là:
   $$0.46 \times 0.5 = 0.23$$

3. Các trường hợp trên xung khắc nhau. Do đó tổng xác suất con mồi bị bắt là:
   $$P = 0.42 + 0.23 = 0.65 = 65\%$$

---

## Trắc nghiệm Tự chấm: Tổng ôn toàn chương (12 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho hai biến cố A và B bất kỳ. Khẳng định nào sau đây luôn đúng?",
  "options": [
    "A. P(A ∪ B) = P(A) + P(B) - P(AB)",
    "B. P(A ∪ B) = P(A) + P(B)",
    "C. P(AB) = P(A) · P(B)",
    "D. P(A ∪ B) = P(A) · P(B) - P(AB)"
  ],
  "answer": "A. P(A ∪ B) = P(A) + P(B) - P(AB)",
  "explanation": "Đây là công thức cộng xác suất tổng quát áp dụng cho hai biến cố bất kỳ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nếu A và B là hai biến cố xung khắc và P(A) = 0.2, P(B) = 0.5 thì P(A ∪ B) bằng:",
  "options": [
    "A. 0.7",
    "B. 0.1",
    "C. 0.3",
    "D. 0.6"
  ],
  "answer": "A. 0.7",
  "explanation": "Vì A và B xung khắc nên P(A ∪ B) = P(A) + P(B) = 0.2 + 0.5 = 0.7."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hai biến cố độc lập A và B có P(A) = 0.3 và P(B) = 0.4. Xác suất biến cố giao P(AB) bằng:",
  "options": [
    "A. 0.12",
    "B. 0.70",
    "C. 0.58",
    "D. 0.10"
  ],
  "answer": "A. 0.12",
  "explanation": "Theo công thức nhân biến cố độc lập: P(AB) = P(A) · P(B) = 0.3 · 0.4 = 0.12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Từ dữ kiện Câu 3, xác suất của biến cố hợp P(A ∪ B) bằng:",
  "options": [
    "A. 0.58",
    "B. 0.70",
    "C. 0.12",
    "D. 0.82"
  ],
  "answer": "A. 0.58",
  "explanation": "P(A ∪ B) = P(A) + P(B) - P(AB) = 0.3 + 0.4 - 0.12 = 0.58."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho P(A) = 0.4, P(B) = 0.5 và P(AB) = 0.2. Khẳng định nào sau đây đúng?",
  "options": [
    "A. A và B là hai biến cố độc lập",
    "B. A và B là hai biến cố xung khắc",
    "C. A và B là hai biến cố đối nhau",
    "D. P(A ∪ B) = 0.9"
  ],
  "answer": "A. A và B là hai biến cố độc lập",
  "explanation": "Vì P(A) · P(B) = 0.4 · 0.5 = 0.2 = P(AB), do đó A và B là hai biến cố độc lập."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo một con xúc xắc cân đối đồng chất 2 lần liên tiếp. Xác suất để có ít nhất một lần xuất hiện mặt 6 chấm là:",
  "options": [
    "A. 11/36",
    "B. 1/36",
    "C. 25/36",
    "D. 1/6"
  ],
  "answer": "A. 11/36",
  "explanation": "Xác suất cả 2 lần đều KHÔNG ra mặt 6 chấm là (5/6) · (5/6) = 25/36. Xác suất có ít nhất 1 lần ra mặt 6 là 1 - 25/36 = 11/36."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một tổ có 5 học sinh giỏi Toán, 4 học sinh giỏi Lý và không có ai giỏi cả hai môn. Chọn ngẫu nhiên 1 bạn. Xác suất bạn đó là học sinh giỏi Toán hoặc Lý (biết tổ có 15 bạn) là:",
  "options": [
    "A. 3/5",
    "B. 4/15",
    "C. 1/3",
    "D. 9/15"
  ],
  "answer": "A. 3/5",
  "explanation": "Vì không có ai giỏi cả hai môn nên hai biến cố là xung khắc. Xác suất = (5 + 4)/15 = 9/15 = 3/5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hai biến cố A và B độc lập với P(A) = 0.6 và P(B) = 0.7. Xác suất để không có biến cố nào xảy ra là:",
  "options": [
    "A. 0.12",
    "B. 0.42",
    "C. 0.88",
    "D. 0.18"
  ],
  "answer": "A. 0.12",
  "explanation": "P(cả hai không xảy ra) = P(A̅) · P(B̅) = (1 - 0.6) · (1 - 0.7) = 0.4 · 0.3 = 0.12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một bài kiểm tra có 5 câu hỏi trắc nghiệm, mỗi câu có 4 lựa chọn (chỉ 1 đúng). Một học sinh khoanh bừa tất cả các câu. Xác suất học sinh đó trả lời SAI TẤT CẢ 5 câu là:",
  "options": [
    "A. (3/4)^5",
    "B. (1/4)^5",
    "C. 1 - (1/4)^5",
    "D. 1 - (3/4)^5"
  ],
  "answer": "A. (3/4)^5",
  "explanation": "Mỗi câu có xác suất sai là 3/4. Do các câu độc lập nên xác suất sai cả 5 câu là (3/4)^5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hai biến cố A và B có P(A) = 0.5, P(B) = 0.3 và P(A ∪ B) = 0.7. Xác suất của biến cố giao P(AB) là:",
  "options": [
    "A. 0.1",
    "B. 0.15",
    "C. 0.2",
    "D. 0"
  ],
  "answer": "A. 0.1",
  "explanation": "P(AB) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.3 - 0.7 = 0.1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Cho hai biến cố A và B độc lập có P(A) = 0.8 và P(B) = 0.5. Xác suất để có ĐÚNG MỘT trong hai biến cố xảy ra là:",
  "options": [
    "A. 0.5",
    "B. 0.4",
    "C. 0.9",
    "D. 0.1"
  ],
  "answer": "A. 0.5",
  "explanation": "P = P(A)P(B̅) + P(A̅)P(B) = 0.8 · (1 - 0.5) + (1 - 0.8) · 0.5 = 0.8 · 0.5 + 0.2 · 0.5 = 0.4 + 0.1 = 0.5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Hai cầu thủ sút phạt đền 11m độc lập. Xác suất sút vào lưới của cầu thủ 1 là 0.8, của cầu thủ 2 là 0.7. Xác suất để đội bóng ghi được ít nhất 1 bàn thắng là:",
  "options": [
    "A. 0.94",
    "B. 0.56",
    "C. 0.06",
    "D. 0.86"
  ],
  "answer": "A. 0.94",
  "explanation": "Xác suất cả 2 đều sút trượt = (1 - 0.8)(1 - 0.7) = 0.2 · 0.3 = 0.06. Xác suất có ít nhất 1 bàn thắng = 1 - 0.06 = 0.94 (94%)."
}'></div>

---

## Ứng dụng Thực tế: Di truyền học Mendel & Bệnh Di truyền Độc lập

Quy tắc nhân xác suất chính là nền tảng toán học đằng sau **Định luật phân li độc lập của Gregor Mendel** trong sinh học hiện đại.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #10b981;">
<strong>Bài toán Di truyền Y học:</strong><br>
Bệnh bạch tạng và bệnh tan máu bẩm sinh (Thalassemia) ở người là do hai gen lặn nằm trên hai cặp nhiễm sắc thể thường khác nhau quy định (hoạt động di truyền độc lập với nhau).<br>
Một cặp vợ chồng bình thường nhưng cả hai đều mang gen lặn dị hợp của cả hai bệnh:<br>
- Xác suất một đứa con sinh ra mắc bệnh bạch tạng là $\frac{1}{4}$ (khỏe mạnh là $\frac{3}{4}$).<br>
- Xác suất đứa con mắc bệnh tan máu bẩm sinh là $\frac{1}{4}$ (khỏe mạnh là $\frac{3}{4}$).<br><br>
1. Tính xác suất để đứa con đầu lòng sinh ra mắc cả hai bệnh nguy hiểm trên.<br>
2. Tính xác suất để đứa con đầu lòng sinh ra hoàn toàn khỏe mạnh đối với cả hai bệnh.<br>
3. Tính xác suất để đứa con sinh ra mắc ít nhất một trong hai bệnh.
</div>

> [!TIP]
> **Giải đáp di truyền bằng toán xác suất:**
> Gọi $A$ là biến cố "Con mắc bệnh bạch tạng" $\implies P(A) = \frac{1}{4}$, $P(\overline{A}) = \frac{3}{4}$.  
> Gọi $B$ là biến cố "Con mắc bệnh Thalassemia" $\implies P(B) = \frac{1}{4}$, $P(\overline{B}) = \frac{3}{4}$.  
> Do hai gen nằm trên hai NST khác nhau nên hai biến cố $A$ và $B$ là **độc lập**.
> 
> 1. Xác suất con mắc cả hai bệnh (biến cố giao $AB$):
>    $$P(AB) = P(A) \cdot P(B) = \frac{1}{4} \times \frac{1}{4} = \frac{1}{16} = 6.25\%$$
> 2. Xác suất con hoàn toàn khỏe mạnh cả hai bệnh (biến cố giao $\overline{A}\,\overline{B}$):
>    $$P(\overline{A}\,\overline{B}) = P(\overline{A}) \cdot P(\overline{B}) = \frac{3}{4} \times \frac{3}{4} = \frac{9}{16} = 56.25\%$$
> 3. Xác suất con mắc ít nhất một trong hai bệnh (biến cố hợp $A \cup B$):
>    $$P(A \cup B) = 1 - P(\overline{A}\,\overline{B}) = 1 - \frac{9}{16} = \frac{7}{16} = 43.75\%$$
>    *(Hoặc tính theo công thức cộng: $P(A) + P(B) - P(AB) = \frac{1}{4} + \frac{1}{4} - \frac{1}{16} = \frac{7}{16}$).*
