---
title: 'Toán 9 Bài 8: Khai căn bậc hai với Phép nhân và Phép chia - Quy tắc Tách & Ghép Căn số'
description: 'Lý thuyết toàn diện và bài tập Bài 8 Toán 9: Quy tắc khai phương một tích, khai phương một thương, nhân chia các căn bậc hai, widget tương tác tách đưa thừa số ra ngoài căn và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Khai phương một tích
  - Khai phương một thương
  - Nhân chia căn bậc hai
  - Đưa thừa số ra ngoài căn
  - Kết nối tri thức
grade: 9
---

# Bài 8. Khai căn bậc hai với Phép nhân và Phép chia

Ở bài học trước, các em đã làm quen với khái niệm căn bậc hai số học và hằng đẳng thức cốt lõi $\sqrt{A^2} = |A|$. Tuy nhiên, khi đối mặt với những biểu thức căn số cồng kềnh như $\sqrt{12} \cdot \sqrt{75}$ hay $\sqrt{\frac{288}{50}}$, việc tính toán riêng rẽ hoặc nhẩm tính số học trực tiếp thường rất khó khăn.

May mắn thay, căn bậc hai có hai tính chất đại số vô cùng đẹp đẽ và mạnh mẽ khi kết hợp với **phép nhân** và **phép chia**:
- Khai phương một tích bằng tích các căn bậc hai: $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$.
- Khai phương một thương bằng thương các căn bậc hai: $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$.

Nhờ hai quy tắc này, chúng ta có thể tự do **tách rời** một số phức tạp thành tích các số chính phương để khai căn, hoặc **ghép nối** các căn số rời rạc lại với nhau để tạo thành một số nguyên chẵn đẹp mắt. 

Bài học hôm nay sẽ giúp các em làm chủ toàn bộ các kỹ thuật biến đổi này!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ QUY TẮC: KHAI CĂN VỚI PHÉP NHÂN VÀ PHÉP CHIA</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khai phương một tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $a, b \ge 0$:<br>• $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$.<br>• Tách các thừa số chính phương ($4, 9, 16, 25...$) để khai căn dễ dàng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Nhân các căn bậc hai</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $a, b \ge 0$:<br>• $\sqrt{a} \cdot \sqrt{b} = \sqrt{a \cdot b}$.<br>• Ghép hai số không chính phương thành một tích chính phương (ví dụ $\sqrt{2} \cdot \sqrt{8} = \sqrt{16} = 4$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Khai phương một thương</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $a \ge 0, b > 0$:<br>• $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$.<br>• Khai căn riêng tử số và mẫu số.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Chia các căn bậc hai</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $a \ge 0, b > 0$:<br>• $\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}$.<br>• Rút gọn phân số dưới căn trước khi khai phương.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tách tích:** Tính nhanh giá trị của $\sqrt{16 \cdot 25}$.
2. **Ghép tích:** Tính nhanh giá trị của $\sqrt{3} \cdot \sqrt{12}$.
3. **Khai phương thương:** Tính nhanh giá trị của $\sqrt{\frac{49}{81}}$.
4. **Chia căn:** Tính nhanh kết quả của $\frac{\sqrt{80}}{\sqrt{5}}$.
5. **Cảnh báo lỗi:** Biểu thức $\sqrt{a + b}$ có bằng $\sqrt{a} + \sqrt{b}$ không?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $\sqrt{16} \cdot \sqrt{25} = 4 \cdot 5 = 20$.
> 2. $\sqrt{3 \cdot 12} = \sqrt{36} = 6$.
> 3. $\frac{\sqrt{49}}{\sqrt{81}} = \frac{7}{9}$.
> 4. $\sqrt{\frac{80}{5}} = \sqrt{16} = 4$.
> 5. **TUYỆT ĐỐI KHÔNG!** Ví dụ: $\sqrt{9 + 16} = \sqrt{25} = 5$, trong khi $\sqrt{9} + \sqrt{16} = 3 + 4 = 7 \ne 5$.

---

## I. Lý thuyết Trọng tâm

### 1. Khai phương một tích và Nhân các căn bậc hai

> [!NOTE]
> **Định lý (Khai phương một tích):**
> Với hai số $a$ và $b$ không âm, ta có:
> $$\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$$
> 
> **Mở rộng cho nhiều số:** Với $a_1, a_2, \dots, a_n \ge 0$:
> $$\sqrt{a_1 \cdot a_2 \dots a_n} = \sqrt{a_1} \cdot \sqrt{a_2} \dots \sqrt{a_n}$$

#### a) Quy tắc khai phương một tích (Chiều tách căn $\to$)
Muốn khai phương một tích của các số không âm, ta có thể khai phương từng thừa số rồi nhân các kết quả lại với nhau:
$$\sqrt{49 \cdot 1,44 \cdot 25} = \sqrt{49} \cdot \sqrt{1,44} \cdot \sqrt{25} = 7 \cdot 1,2 \cdot 5 = 42$$

#### b) Quy tắc nhân các căn bậc hai (Chiều ghép căn $\leftarrow$)
Muốn nhân các căn bậc hai của các số không âm, ta có thể nhân các số dưới dấu căn lại với nhau rồi khai phương kết quả đó:
$$\sqrt{5} \cdot \sqrt{20} = \sqrt{5 \cdot 20} = \sqrt{100} = 10$$

---

### 2. Khai phương một thương và Chia các căn bậc hai

> [!NOTE]
> **Định lý (Khai phương một thương):**
> Với số $a$ không âm và số $b$ dương ($a \ge 0, b > 0$), ta có:
> $$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$$

#### a) Quy tắc khai phương một thương (Chiều tách căn $\to$)
Muốn khai phương một thương $\frac{a}{b}$ (với $a \ge 0, b > 0$), ta có thể khai phương số bị chia $a$ và khai phương số chia $b$, rồi lấy kết quả thứ nhất chia cho kết quả thứ hai:
$$\sqrt{\frac{25}{121}} = \frac{\sqrt{25}}{\sqrt{121}} = \frac{5}{11}$$

#### b) Quy tắc chia hai căn bậc hai (Chiều ghép căn $\leftarrow$)
Muốn chia căn bậc hai của số $a$ không âm cho căn bậc hai của số $b$ dương, ta có thể chia số $a$ cho số $b$ rồi khai phương kết quả đó:
$$\frac{\sqrt{98}}{\sqrt{2}} = \sqrt{\frac{98}{2}} = \sqrt{49} = 7$$

---

### 3. Biểu thức đại số chứa căn thức

Với các biểu thức đại số $A$ và $B$:
- Với $A \ge 0, B \ge 0$: $\sqrt{A \cdot B} = \sqrt{A} \cdot \sqrt{B}$.
- Đặc biệt: $\sqrt{A^2 \cdot B} = |A|\sqrt{B} = \begin{cases} A\sqrt{B} & \text{khi } A \ge 0 \\ -A\sqrt{B} & \text{khi } A < 0 \end{cases}$ (Quy tắc đưa thừa số ra ngoài dấu căn).
- Với $A \ge 0, B > 0$: $\sqrt{\frac{A}{B}} = \frac{\sqrt{A}}{\sqrt{B}}$.

---

## II. Widget Tương tác: Máy Tính Tách & Ghép Căn Bậc Hai Tự Động

Hãy nhập vào một số tự nhiên bất kỳ $N$, công cụ sẽ tự động phân tích $N = k^2 \cdot m$ để đưa thừa số chính phương lớn nhất $k$ ra ngoài dấu căn $\sqrt{N} = k\sqrt{m}$ từng bước:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">CÔNG CỤ PHÂN TÍCH VÀ ĐƯA THỪA SỐ RA NGOÀI CĂN &radic;N</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
    <label><strong>Số N cần khai căn:</strong></label>
    <input type="number" id="input-n" value="72" min="1" max="10000" style="width: 80px; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: bold; text-align: center;">
    <button id="btn-simplify-sqrt" style="background: #2563eb; color: white; border: none; padding: 6px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Phân tích căn</button>
  </div>

  <div id="sqrt-steps" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-family: monospace; font-size: 1.05em; line-height: 1.8;">
    <!-- Step details rendered dynamically -->
  </div>
</div>

<script>
(function() {
  function simplify() {
    let n = parseInt(document.getElementById('input-n').value) || 0;
    const out = document.getElementById('sqrt-steps');

    if (n <= 0) {
      out.innerHTML = `<span style="color: #dc2626;">Vui lòng nhập số nguyên dương n > 0!</span>`;
      return;
    }

    // Find largest square factor k^2 that divides n
    let maxK = 1;
    for (let k = Math.floor(Math.sqrt(n)); k >= 1; k--) {
      if (n % (k * k) === 0) {
        maxK = k;
        break;
      }
    }

    let remainder = n / (maxK * maxK);

    let html = `<strong>Phân tích số ${n}:</strong><br>`;
    if (maxK === 1) {
      html += `• ${n} không chứa thừa số chính phương nào lớn hơn 1.<br>`;
      html += `&rArr; <span style="color: #047857; font-weight: bold; font-size: 1.15em;">&radic;${n}</span> đã ở dạng tối giản! (Xấp xỉ: ${Math.sqrt(n).toFixed(4)})`;
    } else if (remainder === 1) {
      html += `• ${n} là một số chính phương hoàn hảo: ${n} = ${maxK}&sup2;.<br>`;
      html += `&rArr; <span style="color: #047857; font-weight: bold; font-size: 1.15em;">&radic;${n} = ${maxK}</span>`;
    } else {
      html += `• Tách số ${n} thành tích với số chính phương lớn nhất: ${n} = ${maxK * maxK} &times; ${remainder} = ${maxK}&sup2; &times; ${remainder}<br>`;
      html += `• Áp dụng quy tắc khai phương một tích:<br>`;
      html += `&nbsp;&nbsp;&radic;${n} = &radic;(${maxK}&sup2; &times; ${remainder}) = &radic;(${maxK}&sup2;) &times; &radic;${remainder}<br>`;
      html += `&rArr; <strong>Kết quả đưa thừa số ra ngoài căn:</strong> <span style="color: #2563eb; font-weight: bold; font-size: 1.2em;">&radic;${n} = ${maxK}&radic;${remainder}</span> (Xấp xỉ: ${Math.sqrt(n).toFixed(4)})`;
    }

    out.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-simplify-sqrt');
    if (btn) btn.addEventListener('click', simplify);
    simplify();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Tính giá trị biểu thức bằng cách nhân hoặc tách căn

**Phương pháp giải:**
- Nếu các số dưới dấu căn đã là số chính phương: Khai căn trực tiếp rồi nhân.
- Nếu các số chưa chính phương: Ghép các căn lại theo công thức $\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$ hoặc tách ra các thừa số chính phương.

---

#### Bài toán 1:
Tính giá trị các biểu thức sau:
a) $A = \sqrt{0,16 \cdot 81 \cdot 2,25}$.
b) $B = \sqrt{14} \cdot \sqrt{56}$.
c) $C = \sqrt{2,5} \cdot \sqrt{14,4}$.

**Lời giải:**

a) Áp dụng quy tắc khai phương một tích:
$$A = \sqrt{0,16} \cdot \sqrt{81} \cdot \sqrt{2,25} = 0,4 \cdot 9 \cdot 1,5 = 3,6 \cdot 1,5 = 5,4$$

b) Ta thấy $56 = 14 \cdot 4$. Áp dụng quy tắc nhân căn thức:
$$B = \sqrt{14 \cdot 56} = \sqrt{14 \cdot (14 \cdot 4)} = \sqrt{14^2 \cdot 2^2} = 14 \cdot 2 = 28$$

c) Biến đổi đưa về các số nguyên chính phương:
$$C = \sqrt{2,5 \cdot 14,4} = \sqrt{\frac{25}{10} \cdot \frac{144}{10}} = \sqrt{\frac{25 \cdot 144}{100}} = \frac{\sqrt{25} \cdot \sqrt{144}}{\sqrt{100}} = \frac{5 \cdot 12}{10} = \frac{60}{10} = 6$$

---

### Dạng 2: Khai phương một thương và Rút gọn phân số chứa căn

**Phương pháp giải:**
- Khai phương riêng rẽ tử và mẫu nếu tử và mẫu đều là số chính phương.
- Nếu tử và mẫu chưa chính phương: Rút gọn phân số dưới dấu căn trước bằng công thức $\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}$.

---

#### Bài toán 2:
Tính giá trị các biểu thức:
a) $M = \sqrt{\frac{25}{144}} : \sqrt{\frac{49}{81}}$.
b) $N = \frac{\sqrt{192}}{\sqrt{3}}$.
c) $P = \sqrt{1\frac{9}{16} \cdot 5\frac{4}{9}}$.

**Lời giải:**

a) Khai phương từng phân số:
$$M = \frac{\sqrt{25}}{\sqrt{144}} : \frac{\sqrt{49}}{\sqrt{81}} = \frac{5}{12} : \frac{7}{9} = \frac{5}{12} \cdot \frac{9}{7} = \frac{5 \cdot 3}{4 \cdot 7} = \frac{15}{28}$$

b) Áp dụng quy tắc chia hai căn bậc hai:
$$N = \sqrt{\frac{192}{3}} = \sqrt{64} = 8$$

c) Đổi hỗn số về phân số trước khi khai căn:
$$1\frac{9}{16} = \frac{1 \cdot 16 + 9}{16} = \frac{25}{16}$$
$$5\frac{4}{9} = \frac{5 \cdot 9 + 4}{9} = \frac{49}{9}$$
Khi đó:
$$P = \sqrt{\frac{25}{16} \cdot \frac{49}{9}} = \sqrt{\frac{25}{16}} \cdot \sqrt{\frac{49}{9}} = \frac{5}{4} \cdot \frac{7}{3} = \frac{35}{12}$$

---

### Dạng 3: Rút gọn biểu thức chứa biến bằng phép nhân và chia căn thức

**Phương pháp giải:**
- Đưa thừa số ra ngoài căn: $\sqrt{A^2 \cdot B} = |A|\sqrt{B}$.
- Khai căn phân thức: $\sqrt{\frac{A^2}{B}} = \frac{|A|}{\sqrt{B}}$ hoặc $\sqrt{\frac{A}{B^2}} = \frac{\sqrt{A}}{|B|}$.
- Chú ý điều kiện của biến để phá dấu giá trị tuyệt đối.

---

#### Bài toán 3:
Rút gọn các biểu thức sau:
a) $E = \sqrt{25a^4 b^2}$ với $b \ge 0$.
b) $F = \sqrt{\frac{27x^3}{3x}}$ với $x > 0$.
c) $G = 3y \cdot \sqrt{\frac{x^4}{9y^2}}$ với $y < 0$.

**Lời giải:**

a) Áp dụng quy tắc khai phương một tích:
$$E = \sqrt{25} \cdot \sqrt{(a^2)^2} \cdot \sqrt{b^2} = 5 \cdot |a^2| \cdot |b|$$
Vì $a^2 \ge 0$ và giả thiết $b \ge 0$, nên $|a^2| = a^2$ và $|b| = b$.
Suy ra:
$$E = 5a^2 b$$

b) Rút gọn phân thức dưới dấu căn trước:
$$F = \sqrt{\frac{27x^3}{3x}} = \sqrt{9x^2} = \sqrt{9} \cdot \sqrt{x^2} = 3|x|$$
Vì $x > 0$ nên $|x| = x$. Do đó $F = 3x$.

c) Khai căn phân thức:
$$\sqrt{\frac{x^4}{9y^2}} = \frac{\sqrt{(x^2)^2}}{\sqrt{(3y)^2}} = \frac{|x^2|}{|3y|} = \frac{x^2}{3|y|}$$
Vì $y < 0$ nên $|y| = -y \implies 3|y| = -3y$.
Thay vào biểu thức $G$:
$$G = 3y \cdot \frac{x^2}{-3y} = -x^2$$

---

### Dạng 4: Giải phương trình áp dụng quy tắc nhân, chia căn thức

#### Bài toán 4:
Giải các phương trình sau:
a) $\sqrt{3} \cdot x - \sqrt{12} = 0$.
b) $\sqrt{2x - 1} \cdot \sqrt{3} = \sqrt{15}$.
c) $\frac{\sqrt{2x^2 + 6}}{\sqrt{2}} = 5$.

**Lời giải:**

a) Chuyển vế:
$$\sqrt{3}x = \sqrt{12} \iff x = \frac{\sqrt{12}}{\sqrt{3}} = \sqrt{\frac{12}{3}} = \sqrt{4} = 2$$
Vậy phương trình có nghiệm duy nhất $x = 2$.

b) Điều kiện: $2x - 1 \ge 0 \iff x \ge \frac{1}{2}$.
Chia cả hai vế cho $\sqrt{3} > 0$:
$$\sqrt{2x - 1} = \frac{\sqrt{15}}{\sqrt{3}} = \sqrt{\frac{15}{3}} = \sqrt{5}$$
Bình phương hai vế:
$$2x - 1 = 5 \iff 2x = 6 \implies x = 3\text{ (thỏa mãn ĐK)}$$
Vậy nghiệm của phương trình là $x = 3$.

c) Áp dụng quy tắc chia hai căn thức:
$$\sqrt{\frac{2x^2 + 6}{2}} = 5 \iff \sqrt{x^2 + 3} = 5$$
Bình phương hai vế:
$$x^2 + 3 = 25 \iff x^2 = 22 \implies x = \pm\sqrt{22}$$
Vậy tập nghiệm của phương trình là $S = \{-\sqrt{22}; \sqrt{22}\}$.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Phép Nhân Ma Trận & Tích Vô Hướng Trong Mô Hình AI
Trong các mạng thần kinh học sâu (Deep Neural Networks):
Tích vô hướng chuẩn hóa giữa hai vector đặc trưng $\mathbf{u}$ và $\mathbf{v}$ (Cosine Similarity) đo lường độ tương đồng ngữ nghĩa giữa các văn bản hoặc hình ảnh được tính bằng công thức:
$$\cos(\theta) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \cdot \|\mathbf{v}\|} = \frac{\sum u_i v_i}{\sqrt{\sum u_i^2} \cdot \sqrt{\sum v_i^2}} = \frac{\sum u_i v_i}{\sqrt{(\sum u_i^2)(\sum v_i^2)}}$$
Quy tắc ghép căn của tích hai độ dài vector giúp GPU tăng tốc phép tính hàng triệu lần khi bạn tìm kiếm trên Google hay ChatGPT.

---

### Chuyên đề 2: Tỉ Lệ Nén Âm Thanh Kỹ Thuật Số (Audio Spectral Density)
Khi bạn nghe nhạc trên Spotify hay Apple Music, các thuật toán nén âm thanh như AAC hoặc MP3 phân tích sóng âm qua biến đổi Fourier rời rạc. Tỉ số công suất tín hiệu trên nhiễu được tính bằng phép chia căn bậc hai của mật độ phổ năng lượng, loại bỏ các dải tần số tai người không nghe thấy để giảm dung lượng file xuống $10$ lần mà chất lượng âm thanh vẫn trong trẻo.

---

### Chuyên đề 3: Tỉ Lệ Vàng $\phi = \frac{1 + \sqrt{5}}{2}$ Trong Tự Nhiên & Kiến Trúc
Tỉ lệ vàng $\phi \approx 1,61803398...$ là một trong những hằng số toán học nổi tiếng nhất vũ trụ, xuất hiện trong vòng xoáy vỏ ốc anh vũ, sự sắp xếp cánh hoa hướng dương và thiết kế kim tự tháp Giza. Việc khai căn số vô tỉ $\sqrt{5}$ kết hợp với các tỉ số phân số tạo nên những tỷ lệ thị giác hài hòa nhất mà mắt người có thể cảm nhận.

---

### Chuyên đề 4: Hiệu Suất Động Cơ Nhiệt Carnot Trong Công Nghệ Ô Tô
Trong nhiệt động lực học, giới hạn hiệu suất tối đa theo lý thuyết của mọi động cơ nhiệt (như động cơ đốt trong xe máy, ô tô) hoạt động giữa nguồn nhiệt cao $T_1$ và nguồn nhiệt thấp $T_2$ liên quan trực tiếp đến tỉ số căn nhiệt độ:
$$\eta = 1 - \sqrt{\frac{T_2}{T_1}}$$
Quy tắc chia căn giúp các kỹ sư cơ khí ô tô thiết kế buồng đốt đạt hiệu suất tối ưu và giảm lượng khí thải độc hại ra môi trường.

---

### Chuyên đề 5: Lưu Lượng Nước Qua Đập Tràn Thủy Điện (Francis Formula)
Trong kỹ thuật thủy lợi và thiết kế đập thủy điện (như đập Hòa Bình, Sơn La), lưu lượng dòng nước $Q\ (\text{m}^3/\text{s})$ xả qua một cửa tràn hình chữ nhật rộng $L$ dưới cột nước cao $H$ tuân theo công thức:
$$Q = \frac{2}{3} C_d L \sqrt{2g} \cdot \sqrt{H^3} = \frac{2}{3} C_d L \sqrt{2g} \cdot H\sqrt{H}$$
Phép tách thừa số chính phương $H^3 = H^2 \cdot H$ đưa $H$ ra ngoài căn giúp tính toán chính xác năng lực thoát lũ, bảo vệ an toàn cho hàng triệu người dân hạ du.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Khai căn với Phép nhân và Phép chia (Toán 9 Bài 8)",
  "questions": [
    {
      "question": "Tính giá trị của biểu thức P = căn(49 * 0,09):",
      "options": [
        "2,1",
        "21",
        "0,21",
        "4,41"
      ],
      "answer": 0,
      "hint": "sqrt(49) * sqrt(0,09) = 7 * 0,3 = 2,1.",
      "explanation": "Ta có $\\sqrt{49 \\cdot 0,09} = \\sqrt{49} \\cdot \\sqrt{0,09} = 7 \\cdot 0,3 = 2,1$."
    },
    {
      "question": "Tính kết quả của phép nhân căn(2) * căn(32):",
      "options": [
        "8",
        "16",
        "4",
        "64"
      ],
      "answer": 0,
      "hint": "sqrt(2 * 32) = sqrt(64) = 8.",
      "explanation": "Áp dụng quy tắc nhân căn thức: $\\sqrt{2} \\cdot \\sqrt{32} = \\sqrt{2 \\cdot 32} = \\sqrt{64} = 8$."
    },
    {
      "question": "Tính giá trị của biểu thức căn(25/64):",
      "options": [
        "5/8",
        "5/16",
        "25/8",
        "10/8"
      ],
      "answer": 0,
      "hint": "sqrt(25)/sqrt(64) = 5/8.",
      "explanation": "Khai phương một thương: $\\sqrt{\\frac{25}{64}} = \\frac{\\sqrt{25}}{\\sqrt{64}} = \\frac{5}{8}$."
    },
    {
      "question": "Kết quả của phép chia căn(125) / căn(5) là:",
      "options": [
        "5",
        "25",
        "1",
        "sqrt(5)"
      ],
      "answer": 0,
      "hint": "sqrt(125/5) = sqrt(25) = 5.",
      "explanation": "Chia hai căn bậc hai: $\\frac{\\sqrt{125}}{\\sqrt{5}} = \\sqrt{\\frac{125}{5}} = \\sqrt{25} = 5$."
    },
    {
      "question": "Đưa thừa số ra ngoài dấu căn của biểu thức căn(75) ta được:",
      "options": [
        "5*căn(3)",
        "3*căn(5)",
        "25*căn(3)",
        "15"
      ],
      "answer": 0,
      "hint": "75 = 25 * 3 => sqrt(25 * 3) = 5*sqrt(3).",
      "explanation": "Tách thừa số chính phương: $\\sqrt{75} = \\sqrt{25 \\cdot 3} = \\sqrt{25} \\cdot \\sqrt{3} = 5\\sqrt{3}$."
    },
    {
      "question": "Rút gọn biểu thức căn(16a^2) với a < 0 ta được:",
      "options": [
        "-4a",
        "4a",
        "16a",
        "-16a"
      ],
      "answer": 0,
      "hint": "sqrt(16)*sqrt(a^2) = 4*|a|. Vì a < 0 nên |a| = -a.",
      "explanation": "Ta có $\\sqrt{16a^2} = \\sqrt{16} \\cdot \\sqrt{a^2} = 4|a|$. Vì $a < 0$ nên $|a| = -a$, do đó kết quả là $-4a$."
    },
    {
      "question": "Tính giá trị của căn(13^2 - 12^2):",
      "options": [
        "5",
        "1",
        "25",
        "7"
      ],
      "answer": 0,
      "hint": "Hằng đẳng thức: 13^2 - 12^2 = (13 - 12)(13 + 12) = 1 * 25 = 25.",
      "explanation": "Phân tích thành nhân tử: $\\sqrt{13^2 - 12^2} = \\sqrt{(13 - 12)(13 + 12)} = \\sqrt{1 \\cdot 25} = 5$."
    },
    {
      "question": "Nghiệm của phương trình căn(3)*x = căn(27) là:",
      "options": [
        "x = 3",
        "x = 9",
        "x = 1",
        "x = căn(3)"
      ],
      "answer": 0,
      "hint": "x = sqrt(27)/sqrt(3) = sqrt(27/3) = sqrt(9) = 3.",
      "explanation": "$x = \\frac{\\sqrt{27}}{\\sqrt{3}} = \\sqrt{\\frac{27}{3}} = \\sqrt{9} = 3$."
    },
    {
      "question": "Biểu thức căn((2a)/3) * căn(3/(2a)) với a > 0 có giá trị là:",
      "options": [
        "1",
        "a",
        "2a/3",
        "4a^2/9"
      ],
      "answer": 0,
      "hint": "Nhân hai căn lại: sqrt((2a/3) * (3/2a)) = sqrt(1) = 1.",
      "explanation": "Ta có: $\\sqrt{\\frac{2a}{3}} \\cdot \\sqrt{\\frac{3}{2a}} = \\sqrt{\\frac{2a}{3} \\cdot \\frac{3}{2a}} = \\sqrt{1} = 1$."
    },
    {
      "question": "Rút gọn biểu thức M = (căn(45) - căn(20)) / căn(5):",
      "options": [
        "1",
        "5",
        "căn(5)",
        "2"
      ],
      "answer": 0,
      "hint": "sqrt(45)/sqrt(5) - sqrt(20)/sqrt(5) = sqrt(9) - sqrt(4) = 3 - 2 = 1.",
      "explanation": "Chia từng hạng tử: $M = \\frac{\\sqrt{45}}{\\sqrt{5}} - \\frac{\\sqrt{20}}{\\sqrt{5}} = \\sqrt{\\frac{45}{5}} - \\sqrt{\\frac{20}{5}} = \\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Tính giá trị các biểu thức
a) $A = \sqrt{3,6 \cdot 40}$.
b) $B = \sqrt{5} \cdot \sqrt{45}$.
c) $C = \frac{\sqrt{200}}{\sqrt{8}}$.
d) $D = \sqrt{\frac{289}{225}} : \sqrt{\frac{16}{25}}$.

### Bài 2: Rút gọn các biểu thức có chứa biến
a) $\sqrt{64a^2 b^4}$ với $a \ge 0$.
b) $\sqrt{\frac{49x^2}{y^4}}$ với $x < 0, y \ne 0$.
c) $\frac{x - y}{\sqrt{x} - \sqrt{y}}$ với $x > 0, y > 0$ và $x \ne y$.
d) $\sqrt{\frac{12a^3}{3a}}$ với $a > 0$.

### Bài 3: Giải các phương trình
a) $\sqrt{2} \cdot x - \sqrt{50} = 0$.
b) $\frac{\sqrt{3x - 2}}{\sqrt{2}} = 4$.
c) $\sqrt{x - 3} \cdot \sqrt{x + 3} = 4$.

### Bài 4 (Thử thách thực tế):
Một hình chữ nhật có diện tích $S = 48\text{ cm}^2$. Biết rằng tỉ số giữa chiều rộng và chiều dài của hình chữ nhật là $3 : 4$.
a) Áp dụng quy tắc khai căn, tính độ dài chiều rộng và chiều dài của hình chữ nhật đó.
b) Tính độ dài đường chéo của hình chữ nhật đó.
