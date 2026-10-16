---
title: 'Toán 11 Bài 30: Công thức nhân xác suất cho hai biến cố độc lập - Phương pháp và bài toán thực tế'
description: 'Lý thuyết trọng tâm Bài 30 Toán 11 Kết nối tri thức: Công thức nhân xác suất cho biến cố độc lập, điều kiện độc lập, mô hình mạch điện song song nối tiếp tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Xác suất
  - Công thức nhân xác suất
  - Biến cố độc lập
  - Độ tin cậy hệ thống
  - Mạch điện
  - Kết nối tri thức
grade: 11
---

# Bài 30. Công thức nhân xác suất cho hai biến cố độc lập

Trong Bài 28, chúng ta đã hiểu trực giác về **biến cố độc lập**: hai sự kiện xảy ra riêng biệt sao cho việc một sự kiện xảy ra không làm thay đổi cơ hội xảy ra của sự kiện kia.

Nhưng làm thế nào để tính chính xác xác suất để **cả hai biến cố độc lập cùng đồng thời xảy ra**? Câu trả lời chính là **Công thức nhân xác suất**.

Đây là một trong những công thức toán học có sức ảnh hưởng to lớn nhất trong thế giới hiện đại:
- **Kỹ thuật hàng không vũ trụ:** Tính xác suất an toàn của tàu con thoi khi có nhiều hệ thống máy tính điều khiển bay chạy song song dự phòng.
- **Mạng lưới điện quốc gia:** Thiết kế các đường dây truyền tải điện nối tiếp và song song sao cho khả năng mất điện diện rộng là thấp nhất.
- **Bảo mật mật khẩu và viễn thông:** Tính xác suất kẻ gian đoán trúng mật khẩu nhiều ký tự hoặc xác suất truyền gói tin thành công qua nhiều trạm trung gian.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC: QUY TẮC NHÂN XÁC SUẤT</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Hai biến cố độc lập</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: $A$ và $B$ độc lập.<br>• Công thức nhân cơ bản:<br>$$\mathbf{P(AB) = P(A) \cdot P(B)}$$</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Mở rộng cho n biến cố độc lập</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với hệ $A_1, A_2, \dots, A_n$ độc lập:<br>$$\mathbf{P(A_1 A_2 \dots A_n) = \prod_{i=1}^n P(A_i)}$$</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Xác suất ít nhất một biến cố</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Áp dụng biến cố đối:<br>$$\mathbf{P\left(\bigcup_{i=1}^n A_i\right) = 1 - \prod_{i=1}^n (1 - P(A_i))}$$</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kiểm tra tính độc lập</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $P(AB) = P(A)P(B) \implies A, B$ độc lập.<br>• Nếu $P(AB) \ne P(A)P(B) \implies A, B$ phụ thuộc.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Gieo một đồng xu cân đối 2 lần liên tiếp. Xác suất lần 1 ra Ngửa là bao nhiêu? Lần 2 ra Ngửa là bao nhiêu?
2. Từ câu 1, xác suất để *cả 2 lần đều ra Ngửa* bằng bao nhiêu? Bạn tính bằng cách nào?
3. Một xạ thủ bắn phát thứ nhất trúng với xác suất $0.8$, phát thứ hai trúng với xác suất $0.8$ (hai phát bắn độc lập). Xác suất để *cả hai phát đều trượt* bằng bao nhiêu?
4. Nếu hai biến cố $A$ và $B$ có $P(A) = 0.5$, $P(B) = 0.4$ và $P(AB) = 0.2$. Hai biến cố này có độc lập không?
5. Nếu $P(A) = 0.5$, $P(B) = 0.4$ và $P(AB) = 0.3$. Hai biến cố này có độc lập không?

> [!TIP]
> **Đáp án nhanh:**
> 1. Lần 1 ra Ngửa: $P(A) = \frac{1}{2}$. Lần 2 ra Ngửa: $P(B) = \frac{1}{2}$.
> 2. $P(AB) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$.
> 3. Xác suất phát 1 trượt là $1 - 0.8 = 0.2$. Phát 2 trượt là $1 - 0.8 = 0.2$. Cả hai phát trượt là $0.2 \cdot 0.2 = 0.04$.
> 4. Ta có $P(A) \cdot P(B) = 0.5 \times 0.4 = 0.2 = P(AB)$ $\Rightarrow$ $A$ và $B$ độc lập!
> 5. Ta có $P(A) \cdot P(B) = 0.2 \ne 0.3 = P(AB)$ $\Rightarrow$ $A$ và $B$ không độc lập (phụ thuộc).

---

## I. Công thức nhân xác suất cho hai biến cố độc lập

### 1. Định lý công thức nhân
> [!IMPORTANT]
> **Định lý 1 (Công thức nhân xác suất):**
> Hai biến cố $A$ và $B$ là độc lập với nhau khi và chỉ khi:
> $$P(AB) = P(A) \cdot P(B)$$

### 2. Ý nghĩa hai chiều của định lý
1. **Chiều xuôi (Tính xác suất):** Nếu đề bài khẳng định hoặc từ bản chất phép thử ta thấy $A$ và $B$ độc lập, ta có quyền dùng ngay công thức:
   $$P(AB) = P(A) \cdot P(B)$$
2. **Chiều ngược (Kiểm tra tính độc lập):** Nếu ta tính được ba giá trị $P(A), P(B), P(AB)$ mà thấy:
   - $P(AB) = P(A) \cdot P(B) \implies A$ và $B$ là hai biến cố độc lập.
   - $P(AB) \ne P(A) \cdot P(B) \implies A$ và $B$ là hai biến cố không độc lập (phụ thuộc).

### 3. Các hệ thức mở rộng từ tính chất biến cố độc lập
Nếu $A$ và $B$ độc lập, ta cũng có các công thức nhân sau cho các biến cố đối:
- $P(A\overline{B}) = P(A) \cdot P(\overline{B}) = P(A) \cdot [1 - P(B)]$
- $P(\overline{A}B) = P(\overline{A}) \cdot P(B) = [1 - P(A)] \cdot P(B)$
- $P(\overline{A}\,\overline{B}) = P(\overline{A}) \cdot P(\overline{B}) = [1 - P(A)] \cdot [1 - P(B)]$

---

## II. Mở rộng cho hệ $n$ biến cố độc lập

Một hệ $n$ biến cố $A_1, A_2, \dots, A_n$ được gọi là **độc lập toàn phần** nếu biến cố bất kỳ trong hệ không phụ thuộc vào tổ hợp của các biến cố còn lại.

> [!IMPORTANT]
> **Công thức nhân cho $n$ biến cố độc lập:**
> $$P(A_1 A_2 \dots A_n) = P(A_1) \cdot P(A_2) \dots P(A_n)$$

### Hệ quả tối quan trọng: Xác suất có ít nhất một biến cố xảy ra
Xét $n$ biến cố độc lập $A_1, A_2, \dots, A_n$. Biến cố *"Có ít nhất một biến cố xảy ra"* là $E = A_1 \cup A_2 \cup \dots \cup A_n$.
Biến cố đối của $E$ là *"Không có biến cố nào xảy ra"*:
$$\overline{E} = \overline{A}_1 \cap \overline{A}_2 \cap \dots \cap \overline{A}_n$$
Vì các biến cố đối $\overline{A}_i$ cũng độc lập, ta có:
$$P(\overline{E}) = P(\overline{A}_1) \cdot P(\overline{A}_2) \dots P(\overline{A}_n) = [1 - P(A_1)] \cdot [1 - P(A_2)] \dots [1 - P(A_n)]$$
Từ đó suy ra công thức kinh điển:
$$P(\text{Có ít nhất một } A_i \text{ xảy ra}) = 1 - \prod_{i=1}^n [1 - P(A_i)]$$

---

## Công cụ trực quan: Mô phỏng Mạch điện & Độ tin cậy Hệ thống

Trong kỹ thuật điện tử, một mạch điện gồm 2 bóng đèn hoặc 2 rơ-le hoạt động độc lập:
- **Mắc nối tiếp:** Mạch thông suốt khi và chỉ khi **cả 2 rơ-le đều đóng** ($A \cap B$).
- **Mắc song song:** Mạch thông suốt khi có **ít nhất 1 rơ-le đóng** ($A \cup B$).

Hãy điều chỉnh xác suất đóng của rơ-le 1 ($p_1$) và rơ-le 2 ($p_2$) để so sánh độ tin cậy giữa hai cách mắc:

<div id="circuit-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG ĐỘ TIN CẬY MẠCH NỐI TIẾP & SONG SONG</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 18px 0;">
<div style="background: #eff6ff; padding: 12px; border-radius: 8px; border: 1px solid #bfdbfe;">
<label style="font-weight: 600; color: #1e40af; display: block; margin-bottom: 6px;">Độ tin cậy Rơ-le 1 (p₁): <span id="val-p1" style="font-size: 1.1em; color: #1d4ed8;">0.90</span></label>
<input type="range" id="range-p1" min="0.1" max="1" step="0.05" value="0.90" style="width: 100%;">
</div>
<div style="background: #ecfdf5; padding: 12px; border-radius: 8px; border: 1px solid #a7f3d0;">
<label style="font-weight: 600; color: #065f46; display: block; margin-bottom: 6px;">Độ tin cậy Rơ-le 2 (p₂): <span id="val-p2" style="font-size: 1.1em; color: #047857;">0.80</span></label>
<input type="range" id="range-p2" min="0.1" max="1" step="0.05" value="0.80" style="width: 100%;">
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
<div style="background: #f8fafc; border-radius: 10px; padding: 16px; border: 1px solid #cbd5e1;">
<h5 style="margin: 0 0 10px 0; color: #334155; font-size: 1em;">1. Mạch Mắc Nối Tiếp (Series)</h5>
<div style="display: flex; align-items: center; justify-content: center; height: 50px; background: #e2e8f0; border-radius: 6px; font-family: monospace; font-weight: bold; margin-bottom: 12px;">
──[ R1 ]──[ R2 ]──
</div>
<p style="margin: 4px 0; font-size: 0.9em; color: #475569;">Cả 2 linh kiện cùng thông mạch (AB):</p>
<div style="font-size: 1.25em; font-weight: bold; color: #dc2626;" id="res-series">
P = 0.90 × 0.80 = 0.72 (72%)
</div>
<small style="color: #64748b;">Độ tin cậy mạch giảm so với từng linh kiện đơn lẻ.</small>
</div>
<div style="background: #f0fdf4; border-radius: 10px; padding: 16px; border: 1px solid #bbf7d0;">
<h5 style="margin: 0 0 10px 0; color: #166534; font-size: 1em;">2. Mạch Mắc Song Song (Parallel - Dự phòng)</h5>
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 50px; background: #dcfce7; border-radius: 6px; font-family: monospace; font-weight: bold; margin-bottom: 12px; line-height: 1.2;">
┌─[ R1 ]─┐<br>└──[ R2 ]──┘
</div>
<p style="margin: 4px 0; font-size: 0.9em; color: #14532d;">Ít nhất 1 linh kiện thông mạch (A ∪ B):</p>
<div style="font-size: 1.25em; font-weight: bold; color: #16a34a;" id="res-parallel">
P = 1 - (1-0.9)(1-0.8) = 0.98 (98%)
</div>
<small style="color: #15803d; font-weight: 600;">Độ tin cậy mạch vượt trội hơn hẳn từng linh kiện riêng biệt!</small>
</div>
</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const r1 = document.getElementById('range-p1');
  const r2 = document.getElementById('range-p2');
  const val1 = document.getElementById('val-p1');
  const val2 = document.getElementById('val-p2');
  const resSeries = document.getElementById('res-series');
  const resParallel = document.getElementById('res-parallel');

  if (!r1 || !r2) return;

  function calc() {
    const p1 = parseFloat(r1.value);
    const p2 = parseFloat(r2.value);
    val1.textContent = p1.toFixed(2);
    val2.textContent = p2.toFixed(2);

    const series = Math.round(p1 * p2 * 1000) / 1000;
    const parallel = Math.round((1 - (1 - p1) * (1 - p2)) * 1000) / 1000;

    resSeries.innerHTML = `P = ${p1.toFixed(2)} × ${p2.toFixed(2)} = <strong>${series.toFixed(3)}</strong> (${(series * 100).toFixed(1)}%)`;
    resParallel.innerHTML = `P = 1 - (1 - ${p1.toFixed(2)})(1 - ${p2.toFixed(2)}) = <strong>${parallel.toFixed(3)}</strong> (${(parallel * 100).toFixed(1)}%)`;
  }

  r1.addEventListener('input', calc);
  r2.addEventListener('input', calc);
  calc();
});
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Bài toán xạ thủ bắn bia

**Bài toán 1:** Hai xạ thủ A và B độc lập cùng bắn mỗi người một viên đạn vào cùng một tấm bia. Xác suất bắn trúng bia của xạ thủ A là $0.8$, của xạ thủ B là $0.7$. Tính xác suất để:
a) Cả hai xạ thủ đều bắn trúng bia.  
b) Cả hai xạ thủ đều bắn trượt.  
c) Có đúng một xạ thủ bắn trúng bia.  
d) Có ít nhất một xạ thủ bắn trúng bia.

**Lời giải:**
Gọi $A$ là biến cố: "Xạ thủ A bắn trúng bia" $\implies P(A) = 0.8 \implies P(\overline{A}) = 1 - 0.8 = 0.2$.  
Gọi $B$ là biến cố: "Xạ thủ B bắn trúng bia" $\implies P(B) = 0.7 \implies P(\overline{B}) = 1 - 0.7 = 0.3$.  
Vì hai xạ thủ bắn độc lập nên $A$ và $B$ là hai biến cố độc lập.

a) Biến cố "Cả hai cùng bắn trúng" là $AB$.
$$P(AB) = P(A) \cdot P(B) = 0.8 \times 0.7 = 0.56$$

b) Biến cố "Cả hai cùng bắn trượt" là $\overline{A}\,\overline{B}$.
$$P(\overline{A}\,\overline{B}) = P(\overline{A}) \cdot P(\overline{B}) = 0.2 \times 0.3 = 0.06$$

c) Biến cố "Có đúng một xạ thủ bắn trúng" là $E = (A\overline{B}) \cup (\overline{A}B)$.
Nhận thấy hai biến cố $A\overline{B}$ và $\overline{A}B$ là xung khắc nhau. Áp dụng công thức cộng:
$$P(E) = P(A\overline{B}) + P(\overline{A}B) = P(A)P(\overline{B}) + P(\overline{A})P(B)$$
$$P(E) = 0.8 \times 0.3 + 0.2 \times 0.7 = 0.24 + 0.14 = 0.38$$

d) Biến cố "Có ít nhất một xạ thủ bắn trúng" là biến cố đối của câu b:
$$P(\text{Ít nhất một trúng}) = 1 - P(\overline{A}\,\overline{B}) = 1 - 0.06 = 0.94$$
*(Hoặc dùng công thức cộng: $P(A \cup B) = P(A) + P(B) - P(AB) = 0.8 + 0.7 - 0.56 = 0.94$).*

---

### Dạng 2: Phối hợp quy tắc nhân và quy tắc cộng trong thi cử & sản xuất

**Bài toán 2:** Một học sinh đi thi môn Lịch sử phải trả lời 3 câu hỏi vấn đáp độc lập. Xác suất học sinh trả lời đúng câu thứ nhất là $0.9$, câu thứ hai là $0.8$ và câu thứ ba là $0.7$. Để được điểm Giỏi, học sinh phải trả lời đúng **ít nhất 2 câu hỏi**. Tính xác suất để học sinh đạt điểm Giỏi.

**Lời giải:**
Gọi $A_1, A_2, A_3$ lần lượt là biến cố học sinh trả lời đúng câu 1, câu 2, câu 3.
Ta có:
$$P(A_1) = 0.9 \implies P(\overline{A}_1) = 0.1$$
$$P(A_2) = 0.8 \implies P(\overline{A}_2) = 0.2$$
$$P(A_3) = 0.7 \implies P(\overline{A}_3) = 0.3$$
Học sinh đạt điểm Giỏi khi trả lời đúng đúng 2 câu hoặc đúng cả 3 câu. Các trường hợp này xung khắc nhau:
1. **Đúng cả 3 câu ($A_1 A_2 A_3$):**
   $$P_1 = P(A_1)P(A_2)P(A_3) = 0.9 \times 0.8 \times 0.7 = 0.504$$
2. **Đúng câu 1, 2 và sai câu 3 ($A_1 A_2 \overline{A}_3$):**
   $$P_2 = P(A_1)P(A_2)P(\overline{A}_3) = 0.9 \times 0.8 \times 0.3 = 0.216$$
3. **Đúng câu 1, 3 và sai câu 2 ($A_1 \overline{A}_2 A_3$):**
   $$P_3 = P(A_1)P(\overline{A}_2)P(A_3) = 0.9 \times 0.2 \times 0.7 = 0.126$$
4. **Đúng câu 2, 3 và sai câu 1 ($\overline{A}_1 A_2 A_3$):**
   $$P_4 = P(\overline{A}_1)P(A_2)P(A_3) = 0.1 \times 0.8 \times 0.7 = 0.056$$

Vì 4 biến cố trên đôi một xung khắc, xác suất để học sinh đạt loại Giỏi là:
$$P = P_1 + P_2 + P_3 + P_4 = 0.504 + 0.216 + 0.126 + 0.056 = 0.902$$
Vậy xác suất đạt điểm Giỏi là $90.2\%$.

---

### Dạng 3: Kiểm tra tính độc lập của hai biến cố

**Bài toán 3:** Một bộ bài tú lơ khơ có 52 quân bài. Rút ngẫu nhiên 1 lá bài. Xét hai biến cố:
- $A$: "Rút được lá bài chất Cơ".
- $B$: "Rút được lá bài hình người (J, Q, K)".

Hỏi $A$ và $B$ có độc lập với nhau không?

**Lời giải:**
Không gian mẫu: $n(\Omega) = 52$.
- Trong bộ bài có 13 lá Cơ $\implies P(A) = \frac{13}{52} = \frac{1}{4}$.
- Có 3 quân bài hình (J, Q, K) cho mỗi chất, tổng cộng có $3 \times 4 = 12$ quân hình $\implies P(B) = \frac{12}{52} = \frac{3}{13}$.
- Biến cố giao $AB$ là "Rút được lá bài vừa là chất Cơ vừa là quân hình" (gồm J Cơ, Q Cơ, K Cơ: có đúng 3 lá):
  $$P(AB) = \frac{3}{52}$$

Bây giờ ta tính tích:
$$P(A) \cdot P(B) = \frac{1}{4} \times \frac{3}{13} = \frac{3}{52}$$
Nhận thấy $P(AB) = P(A) \cdot P(B) = \frac{3}{52}$.
Vậy $A$ và $B$ là hai biến cố **độc lập** với nhau!

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho hai biến cố A và B độc lập với nhau, P(A) = 0.4 và P(B) = 0.5. Xác suất biến cố giao P(AB) bằng:",
  "options": [
    "A. 0.2",
    "B. 0.9",
    "C. 0.1",
    "D. 0.7"
  ],
  "answer": "A. 0.2",
  "explanation": "Vì A và B độc lập nên P(AB) = P(A) · P(B) = 0.4 · 0.5 = 0.2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hai xạ thủ cùng bắn độc lập vào một tấm bia. Xác suất bắn trúng của xạ thủ thứ nhất là 0.7, xạ thủ thứ hai là 0.6. Xác suất để cả hai xạ thủ cùng bắn trượt là:",
  "options": [
    "A. 0.12",
    "B. 0.42",
    "C. 0.30",
    "D. 0.02"
  ],
  "answer": "A. 0.12",
  "explanation": "Xác suất người 1 trượt là 1 - 0.7 = 0.3. Người 2 trượt là 1 - 0.6 = 0.4. Cả hai trượt là 0.3 · 0.4 = 0.12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Từ câu 2, xác suất để có ít nhất một xạ thủ bắn trúng bia là:",
  "options": [
    "A. 0.88",
    "B. 0.42",
    "C. 0.58",
    "D. 0.76"
  ],
  "answer": "A. 0.88",
  "explanation": "Xác suất có ít nhất một người trúng = 1 - P(cả hai trượt) = 1 - 0.12 = 0.88."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Gieo 2 con xúc xắc 6 mặt độc lập. Xác suất để cả 2 con cùng xuất hiện mặt 6 chấm là:",
  "options": [
    "A. 1/36",
    "B. 1/6",
    "C. 1/12",
    "D. 2/36"
  ],
  "answer": "A. 1/36",
  "explanation": "P = (1/6) · (1/6) = 1/36."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho P(A) = 0.3, P(B) = 0.5 và P(A ∪ B) = 0.65. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. A và B là hai biến cố độc lập",
    "B. A và B là hai biến cố xung khắc",
    "C. P(AB) = 0",
    "D. A ⊂ B"
  ],
  "answer": "A. A và B là hai biến cố độc lập",
  "explanation": "Ta có P(AB) = P(A) + P(B) - P(A ∪ B) = 0.3 + 0.5 - 0.65 = 0.15. Mặt khác P(A) · P(B) = 0.3 · 0.5 = 0.15. Vì P(AB) = P(A)P(B) nên A và B độc lập."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Ba người độc lập cùng đi câu cá. Xác suất để người 1, 2, 3 câu được cá lần lượt là 0.6; 0.5 và 0.4. Xác suất để không ai câu được cá là:",
  "options": [
    "A. 0.12",
    "B. 0.15",
    "C. 0.08",
    "D. 0.24"
  ],
  "answer": "A. 0.12",
  "explanation": "P(không ai câu được) = (1 - 0.6)(1 - 0.5)(1 - 0.4) = 0.4 · 0.5 · 0.6 = 0.12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một hệ thống có 2 máy bơm hoạt động độc lập để thoát nước chống ngập. Xác suất để máy 1 bị hỏng trong mùa mưa là 0.1, máy 2 bị hỏng là 0.2. Hệ thống bị tê liệt khi cả 2 máy đều hỏng. Xác suất hệ thống hoạt động bình thường (ít nhất 1 máy chạy) là:",
  "options": [
    "A. 0.98",
    "B. 0.90",
    "C. 0.72",
    "D. 0.88"
  ],
  "answer": "A. 0.98",
  "explanation": "Xác suất cả 2 máy cùng hỏng = 0.1 · 0.2 = 0.02. Do đó xác suất ít nhất một máy hoạt động là 1 - 0.02 = 0.98 (98%)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hai biến cố A và B độc lập, biết P(A) = 0.6 và P(B) = 0.4. Xác suất để có đúng một biến cố xảy ra là:",
  "options": [
    "A. 0.52",
    "B. 0.24",
    "C. 0.76",
    "D. 0.48"
  ],
  "answer": "A. 0.52",
  "explanation": "P(đúng 1 xảy ra) = P(A)P(B̅) + P(A̅)P(B) = 0.6 · (1 - 0.4) + (1 - 0.6) · 0.4 = 0.6 · 0.6 + 0.4 · 0.4 = 0.36 + 0.16 = 0.52."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một bài thi trắc nghiệm gồm 4 câu hỏi, mỗi câu có 4 phương án trả lời và chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên các đáp án. Xác suất để thí sinh trả lời đúng tất cả 4 câu là:",
  "options": [
    "A. 1/256",
    "B. 1/64",
    "C. 1/16",
    "D. 4/256"
  ],
  "answer": "A. 1/256",
  "explanation": "Mỗi câu xác suất đúng là 1/4. Do các câu độc lập nên P = (1/4)^4 = 1/256."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho A và B là hai biến cố xung khắc và P(A) > 0, P(B) > 0. Kết luận nào sau đây về tính độc lập của A và B là đúng?",
  "options": [
    "A. A và B chắc chắn không độc lập",
    "B. A và B luôn độc lập",
    "C. A và B độc lập khi P(A) = P(B)",
    "D. Chưa đủ dữ kiện để kết luận"
  ],
  "answer": "A. A và B chắc chắn không độc lập",
  "explanation": "Vì A và B xung khắc nên P(AB) = 0. Mặt khác P(A) > 0 và P(B) > 0 nên P(A) · P(B) > 0. Suy ra P(AB) ≠ P(A) · P(B), do đó A và B chắc chắn phụ thuộc (không độc lập)."
}'></div>

---

## V. Ứng dụng Kỹ thuật: Thiết kế Hệ thống An toàn Dự phòng Máy bay

Trong ngành hàng không dân dụng, an toàn bay là ưu tiên số một. Mọi hệ thống điều khiển lái quan trọng (Fly-by-wire) đều không bao giờ dùng một máy tính đơn lẻ, mà luôn được cấu hình **đa kênh song song độc lập**.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Bài toán Kỹ thuật Hàng không:</strong><br>
Hệ thống máy tính lái tự động trên một chiếc máy bay chở khách thế hệ mới được trang bị 3 máy tính giống hệt nhau hoạt động song song độc lập (A, B và C).<br>
Xác suất để một máy tính bị lỗi phần cứng trong một chuyến bay kéo dài 10 tiếng là $q = 0.001$ (tức xác suất hoạt động bình thường là $p = 0.999$).<br>
Máy bay chỉ gặp nguy hiểm khi <strong>cả 3 máy tính đều đồng thời bị hỏng</strong>.<br><br>
1. Tính xác suất để chuyến bay an toàn (ít nhất 1 máy tính hoạt động tốt).<br>
2. So sánh độ an toàn của hệ thống 3 máy tính dự phòng với trường hợp máy bay chỉ sử dụng duy nhất 1 máy tính.
</div>

> [!TIP]
> **Phân tích an toàn:**
> 1. Xác suất cả 3 máy tính cùng hỏng trong chuyến bay:
>    $$P(\text{Cả 3 hỏng}) = q^3 = (0.001)^3 = 10^{-9} = 0.000000001$$
>    Xác suất hệ thống an toàn (ít nhất một máy tính vận hành tốt):
>    $$P(\text{An toàn}) = 1 - 10^{-9} = 0.999999999$$
> 2. **So sánh:**
>    - Nếu chỉ dùng 1 máy tính: Xác suất gặp sự cố là $q = 0.001$ (tương đương cứ 1.000 chuyến bay thì có 1 chuyến gặp nạn - tỉ lệ cực kỳ nguy hiểm!).
>    - Khi có 3 máy tính dự phòng độc lập: Xác suất sự cố giảm xuống còn $1$ trên $1.000.000.000$ (1 phần một tỷ chuyến bay).
>    Đó chính là sức mạnh phi thường của nguyên lý nhân xác suất trong kỹ thuật an toàn hiện đại!
