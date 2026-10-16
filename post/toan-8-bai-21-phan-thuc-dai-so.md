---
title: 'Toán 8 Bài 21: Phân thức đại số'
description: 'Làm chủ lý thuyết Phân thức đại số Toán 8 Bài 21: Khái niệm phân thức, tử thức và mẫu thức, hai phân thức bằng nhau, điều kiện xác định và tính giá trị phân thức kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Phân thức đại số
  - Điều kiện xác định
  - Hai phân thức bằng nhau
  - Kết nối tri thức
grade: 8
---

# Bài 21. Phân thức đại số

Chào mừng các em học sinh bước vào **Học kỳ II môn Toán lớp 8**! Sau khi đã hoàn thiện các công cụ căn bản về đa thức, các hằng đẳng thức đáng nhớ và phân tích đa thức thành nhân tử ở học kỳ I, chúng ta bước lên nấc thang tiếp theo của đại số hiện đại: **Phân thức đại số (Algebraic Fraction)**.

Nếu như trong tập hợp số nguyên $\mathbb{Z}$, phép chia không phải lúc nào cũng thực hiện được và đòi hỏi loài người phát minh ra tập hợp các số hữu tỉ $\mathbb{Q}$ (dạng phân số $\frac{a}{b}$), thì trong đại số, phép chia giữa hai đa thức dẫn chúng ta đến với **Phân thức đại số** dạng $\frac{A}{B}$.

Phân thức đại số xuất hiện ở khắp mọi nơi trong khoa học kỹ thuật: từ công thức điện trở tương đương của mạch điện song song $R = \frac{R_1 R_2}{R_1 + R_2}$, phương trình thấu kính quang học Gauss $\frac{1}{f} = \frac{1}{d} + \frac{1}{d'}$, cho đến mô hình động học enzyme Michaelis-Menten trong sinh hóa học. Bài học hôm nay sẽ giúp các em nắm vững định nghĩa, điều kiện xác định và quy tắc nhận biết hai phân thức bằng nhau!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 21: PHÂN THỨC ĐẠI SỐ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Phân thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu thức có dạng $\frac{A}{B}$ với $A, B$ là các đa thức và $B \neq 0$ (đa thức khác đa thức 0).<br>• $A$ gọi là <strong>tử thức</strong>, $B$ gọi là <strong>mẫu thức</strong>.<br>• Mọi đa thức đều là phân thức có mẫu số bằng $1$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hai Phân thức Bằng nhau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Hai phân thức $\frac{A}{B}$ và $\frac{C}{D}$ gọi là bằng nhau nếu:<br>$$\frac{A}{B} = \frac{C}{D} \iff A \cdot D = B \cdot C$$<br>• Kiểm tra bằng quy tắc nhân chéo.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Điều kiện Xác định (ĐKXĐ)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Phân thức $\frac{A}{B}$ chỉ có nghĩa (xác định) khi <strong>mẫu thức khác 0</strong>: $B \neq 0$.<br>• Để tìm ĐKXĐ: Cho $B \neq 0$ rồi giải tìm điều kiện của biến số.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Giá trị của Phân thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bước 1: Tìm ĐKXĐ của phân thức.<br>• Bước 2: Kiểm tra giá trị của biến có thỏa mãn ĐKXĐ không.<br>• Bước 3: Thay giá trị vào phân thức để tính toán kết quả.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phân số và số thực:** Số $0$ có thể làm mẫu số của một phân số được không? Vì sao?
2. **Nhận diện biểu thức:** Biểu thức $\frac{3x + 1}{x^2 - 4}$ có phải là một phân số không, hay là biểu thức gì?
3. **Phép nhân chéo:** Nếu $\frac{x}{3} = \frac{4}{6}$ thì tích chéo $x \cdot 6$ bằng bao nhiêu? Từ đó $x = ?$
4. **Tìm điểm kỳ dị:** Mẫu số của phân thức $\frac{5}{x - 3}$ sẽ bằng $0$ khi $x$ nhận giá trị nào?
5. **Đa thức có phải phân thức?** Đa thức $P(x) = 2x^2 - 5x + 3$ có được xem là một phân thức đại số không?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Không bao giờ, vì phép chia cho số $0$ không xác định trong toán học.
> 2. Đây là một phân thức đại số (tử và mẫu là các đa thức chứa biến $x$).
> 3. $x \cdot 6 = 3 \cdot 4 = 12 \implies x = 2$.
> 4. Khi $x - 3 = 0 \implies x = 3$. Tại $x = 3$, mẫu thức triệt tiêu.
> 5. Có! Mọi đa thức đều là phân thức có mẫu thức bằng $1$: $P(x) = \frac{2x^2 - 5x + 3}{1}$.

---

## I. Lý thuyết Trọng tâm

### 1. Định nghĩa Phân thức đại số

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Một **phân thức đại số** (hay nói gọn là **phân thức**) là một biểu thức có dạng $\frac{A}{B}$, trong đó $A$ và $B$ là những đa thức và $B$ khác đa thức $0$.
> - $A$ được gọi là **tử thức** (hay **tử**).
> - $B$ được gọi là **mẫu thức** (hay **mẫu**).

*Ví dụ về phân thức đại số:*
- $\frac{3x - 1}{2x + 5}$ (tử là đa thức $3x - 1$, mẫu là đa thức $2x + 5$).
- $\frac{x^2 - 4y^2}{x + 2y}$ (tử là đa thức bậc 2 hai biến, mẫu là đa thức bậc nhất).
- $\frac{7}{x^2 + 1}$ (tử là số 7 — đa thức bậc 0, mẫu là $x^2 + 1$).
- $\frac{x^3 - 3x + 2}{-5}$ (mẫu là một hằng số khác 0).

*Nhận xét đặc biệt:*
1. Mỗi **đa thức** $A$ được coi là một phân thức với mẫu thức bằng $1$: $A = \frac{A}{1}$.
2. Mỗi **số thực** $a \neq 0$ là một phân thức có dạng $\frac{a}{1}$.
3. Số $0$ cũng là một phân thức: $0 = \frac{0}{1}$.
4. Biểu thức $\frac{\sqrt{x} + 1}{x - 2}$ **không phải** là phân thức đại số vì tử thức $\sqrt{x} + 1$ chứa căn thức của biến nên không phải là đa thức!

---

### 2. Hai phân thức bằng nhau

Tương tự như hai phân số bằng nhau $\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$, ta có định nghĩa:

> [!IMPORTANT]
> **ĐỊNH NGHĨA HAI PHÂN THỨC BẰNG NHAU:**
> Hai phân thức $\frac{A}{B}$ và $\frac{C}{D}$ gọi là **bằng nhau**, viết là $\frac{A}{B} = \frac{C}{D}$, nếu:
> $$A \cdot D = B \cdot C$$

*Ví dụ:* Chứng minh rằng $\frac{x - 2}{x^2 - 4} = \frac{1}{x + 2}$.
Ta kiểm tra tích chéo:
- Tích chéo 1: $(x - 2)(x + 2) = x^2 - 2^2 = x^2 - 4$.
- Tích chéo 2: $(x^2 - 4) \cdot 1 = x^2 - 4$.
Vì $(x - 2)(x + 2) = (x^2 - 4) \cdot 1$ nên hai phân thức trên bằng nhau!

---

### 3. Điều kiện xác định (ĐKXĐ) của phân thức đại số

Vì phép chia cho $0$ không có nghĩa, nên một phân thức chỉ có giá trị khi mẫu thức nhận giá trị khác $0$.

> [!IMPORTANT]
> **ĐIỀU KIỆN XÁC ĐỊNH:**
> **Điều kiện xác định** của phân thức $\frac{A}{B}$ là điều kiện của các biến để **mẫu thức khác $0$** ($B \neq 0$).

*Ví dụ:*
- Phân thức $\frac{2x + 1}{x - 5}$ xác định khi $x - 5 \neq 0 \iff x \neq 5$.
- Phân thức $\frac{x + 3}{x^2 - 9}$ xác định khi $x^2 - 9 \neq 0 \iff (x - 3)(x + 3) \neq 0 \iff x \neq 3$ và $x \neq -3$.
- Phân thức $\frac{4x}{x^2 + 1}$ luôn xác định với mọi $x \in \mathbb{R}$ vì $x^2 \ge 0 \implies x^2 + 1 \ge 1 > 0$ với mọi $x$.

---

### 4. Giá trị của phân thức tại một điểm

Muốn tính giá trị của phân thức $\frac{A}{B}$ tại các giá trị cho trước của biến:
1. **Tìm ĐKXĐ** của phân thức.
2. Kiểm tra xem các giá trị đã cho của biến có **thỏa mãn ĐKXĐ** hay không.
   - Nếu vi phạm ĐKXĐ: Kết luận phân thức **không xác định** tại điểm đó.
   - Nếu thỏa mãn ĐKXĐ: Thay giá trị của biến vào phân thức và thực hiện phép tính.

---

## Ứng dụng Tương tác Trực quan

Dưới đây là công cụ tương tác giúp các em kiểm tra điều kiện xác định và tính giá trị của phân thức $P(x) = \frac{2x + 4}{x^2 - 4}$ tại các giá trị khác nhau của $x$:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #3b82f6; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: ĐIỀU KIỆN XÁC ĐỊNH & GIÁ TRỊ PHÂN THỨC</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Xét phân thức: $P(x) = \frac{2x + 4}{x^2 - 4}$. Kéo thanh trượt hoặc chọn giá trị của $x$ để xem phản ứng của mẫu thức!
  </p>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; margin: 20px 0;">
    <div style="display: flex; align-items: center; gap: 12px; width: 100%; max-width: 420px;">
      <label for="val-x-slider" style="font-weight: bold; min-width: 80px;">Giá trị $x$:</label>
      <input type="range" id="val-x-slider" min="-5" max="5" step="1" value="0" style="flex: 1;" oninput="updateFractionDemo(this.value)">
      <span id="val-x-display" style="font-weight: bold; font-size: 1.1em; color: #2563eb; min-width: 30px;">0</span>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
      <button onclick="setFractionX(-2)" style="padding: 4px 10px; border-radius: 6px; border: 1px solid #ef4444; background: #fee2e2; color: #b91c1c; cursor: pointer; font-size: 0.85em;">Thử $x = -2$</button>
      <button onclick="setFractionX(0)" style="padding: 4px 10px; border-radius: 6px; border: 1px solid #3b82f6; background: #dbeafe; color: #1d4ed8; cursor: pointer; font-size: 0.85em;">Thử $x = 0$</button>
      <button onclick="setFractionX(2)" style="padding: 4px 10px; border-radius: 6px; border: 1px solid #ef4444; background: #fee2e2; color: #b91c1c; cursor: pointer; font-size: 0.85em;">Thử $x = 2$</button>
      <button onclick="setFractionX(3)" style="padding: 4px 10px; border-radius: 6px; border: 1px solid #10b981; background: #d1fae5; color: #047857; cursor: pointer; font-size: 0.85em;">Thử $x = 3$</button>
      <button onclick="setFractionX(4)" style="padding: 4px 10px; border-radius: 6px; border: 1px solid #10b981; background: #d1fae5; color: #047857; cursor: pointer; font-size: 0.85em;">Thử $x = 4$</button>
    </div>
  </div>
  <div id="fraction-result-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 16px; border: 1px dashed #cbd5e1; text-align: center; font-family: monospace; font-size: 1.05em;">
    Đang tải mô phỏng...
  </div>
</div>

<script>
function updateFractionDemo(val) {
  var x = parseInt(val, 10);
  document.getElementById('val-x-display').innerText = x;
  document.getElementById('val-x-slider').value = x;
  var box = document.getElementById('fraction-result-box');
  var num = 2 * x + 4;
  var den = x * x - 4;
  if (den === 0) {
    box.innerHTML = '<span style="color:#dc2626; font-weight:bold;">⚠️ MẪU SỐ TRIỆT TIÊU: Mẫu = (' + x + ')² - 4 = 0!</span><br>' +
      '<span style="color:#b91c1c; font-size:0.95em;">Tại x = ' + x + ', phân thức KHÔNG XÁC ĐỊNH (phép chia cho 0 bị cấm).</span>';
    box.style.background = '#fef2f2';
    box.style.borderColor = '#f87171';
  } else {
    var res = (num / den).toFixed(3);
    var fracStr = num + ' / ' + den;
    box.innerHTML = '<span style="color:#15803d; font-weight:bold;">✅ THỎA MÃN ĐKXĐ (Mẫu = ' + den + ' ≠ 0)</span><br>' +
      'Tử số = 2(' + x + ') + 4 = ' + num + '<br>' +
      'Mẫu số = (' + x + ')² - 4 = ' + den + '<br>' +
      'Giá trị phân thức: P(' + x + ') = ' + fracStr + ' ≈ <strong>' + res + '</strong>';
    box.style.background = '#f0fdf4';
    box.style.borderColor = '#86efac';
  }
}
function setFractionX(val) {
  updateFractionDemo(val);
}
setTimeout(function() { updateFractionDemo(0); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Nhận diện phân thức đại số, chỉ ra tử thức và mẫu thức

**Phương pháp giải:**
1. Kiểm tra xem biểu thức có dạng $\frac{A}{B}$ không.
2. Kiểm tra xem $A$ và $B$ có phải là đa thức không (chú ý: biến không được nằm dưới dấu căn bậc hai hoặc trong hàm phi đa thức).
3. Kiểm tra mẫu thức $B$ có khác đa thức 0 không.

---

#### Bài toán 1:
Trong các biểu thức sau, biểu thức nào là phân thức đại số? Với mỗi phân thức, hãy chỉ rõ tử thức và mẫu thức:
a) $\frac{3x^2 - 5x + 1}{x - 2}$
b) $\frac{2\sqrt{x} + 3}{x + 1}$
c) $\frac{5x^3 - 4}{0}$
d) $3x^2 - 7x + 2$
e) $\frac{x^2 + y^2}{x - y}$

**Lời giải:**

a) Biểu thức $\frac{3x^2 - 5x + 1}{x - 2}$ là phân thức đại số vì tử thức $3x^2 - 5x + 1$ và mẫu thức $x - 2$ đều là các đa thức, và mẫu thức khác đa thức 0.
- Tử thức: $3x^2 - 5x + 1$.
- Mẫu thức: $x - 2$.

b) Biểu thức $\frac{2\sqrt{x} + 3}{x + 1}$ **không phải** là phân thức đại số vì tử thức chứa căn bậc hai của biến ($\sqrt{x}$) nên không phải là đa thức.

c) Biểu thức $\frac{5x^3 - 4}{0}$ **không phải** là phân thức đại số vì mẫu thức là số 0 (đa thức 0).

d) Biểu thức $3x^2 - 7x + 2$ là một đa thức, do đó nó **là một phân thức đại số** với:
- Tử thức: $3x^2 - 7x + 2$.
- Mẫu thức: $1$.

e) Biểu thức $\frac{x^2 + y^2}{x - y}$ là phân thức đại số hai biến $x, y$:
- Tử thức: $x^2 + y^2$.
- Mẫu thức: $x - y$.

---

### Dạng 2: Chứng minh hai phân thức bằng nhau

**Phương pháp giải:**
Muốn chứng minh $\frac{A}{B} = \frac{C}{D}$, ta tính hai tích chéo:
$$T_1 = A \cdot D \quad\text{và}\quad T_2 = B \cdot C$$
- Nếu $T_1 = T_2$ thì kết luận hai phân thức bằng nhau.
- Hoặc biến đổi phân tích tử và mẫu thành nhân tử rồi rút gọn thừa số chung.

---

#### Bài toán 2:
Chứng minh các cặp phân thức sau bằng nhau:
a) $\frac{3x}{x + 2} = \frac{3x^2 - 6x}{x^2 - 4}$
b) $\frac{x^2 - 2xy + y^2}{x - y} = \frac{x^2 - y^2}{x + y}$

**Lời giải:**

a) Ta xét hai tích chéo:
- Tích chéo thứ nhất:
  $$3x \cdot (x^2 - 4) = 3x(x^2 - 2^2) = 3x^3 - 12x$$
- Tích chéo thứ hai:
  $$(x + 2)(3x^2 - 6x) = 3x^2(x + 2) - 6x(x + 2) = 3x^3 + 6x^2 - 6x^2 - 12x = 3x^3 - 12x$$
Vì $3x(x^2 - 4) = (x + 2)(3x^2 - 6x)$ nên:
$$\frac{3x}{x + 2} = \frac{3x^2 - 6x}{x^2 - 4}$$

b) Áp dụng các hằng đẳng thức đáng nhớ:
- Tích chéo thứ nhất:
  $$(x^2 - 2xy + y^2)(x + y) = (x - y)^2 (x + y) = (x - y) \cdot [(x - y)(x + y)] = (x - y)(x^2 - y^2)$$
- Tích chéo thứ hai:
  $$(x - y)(x^2 - y^2)$$
Do hai tích chéo bằng nhau, ta có:
$$\frac{x^2 - 2xy + y^2}{x - y} = \frac{x^2 - y^2}{x + y}$$

---

### Dạng 3: Tìm điều kiện xác định (ĐKXĐ) của phân thức

**Phương pháp giải:**
1. Cho mẫu thức khác 0: $B \neq 0$.
2. Phân tích mẫu thức $B$ thành nhân tử: $B = B_1 \cdot B_2 \dots \neq 0$.
3. Tích khác 0 khi **tất cả các nhân tử đồng thời khác 0**:
   $$B_1 \neq 0 \quad\text{và}\quad B_2 \neq 0$$

---

#### Bài toán 3:
Tìm điều kiện xác định của các phân thức sau:
a) $A = \frac{2x - 3}{4x - 8}$
b) $B = \frac{x + 5}{x^2 - 16}$
c) $C = \frac{3x - 1}{x^2 - 2x + 1}$
d) $D = \frac{x^2 + 1}{x^2 + 4}$

**Lời giải:**

a) Phân thức $A$ xác định khi:
$$4x - 8 \neq 0 \iff 4x \neq 8 \iff x \neq 2$$
Vậy ĐKXĐ của $A$ là $x \neq 2$.

b) Phân thức $B$ xác định khi:
$$x^2 - 16 \neq 0 \iff (x - 4)(x + 4) \neq 0 \iff x \neq 4 \quad\text{và}\quad x \neq -4$$
Vậy ĐKXĐ của $B$ là $x \neq 4$ và $x \neq -4$ (viết gọn là $x \neq \pm 4$).

c) Phân thức $C$ xác định khi:
$$x^2 - 2x + 1 \neq 0 \iff (x - 1)^2 \neq 0 \iff x - 1 \neq 0 \iff x \neq 1$$
Vậy ĐKXĐ của $C$ là $x \neq 1$.

d) Mẫu thức của $D$ là $x^2 + 4$.
Vì $x^2 \ge 0$ với mọi $x \in \mathbb{R}$ nên $x^2 + 4 \ge 4 > 0$ với mọi $x$.
Do đó mẫu thức luôn khác 0 với mọi giá trị của $x$.
Vậy phân thức $D$ **xác định với mọi số thực $x$**.

---

### Dạng 4: Tính giá trị của phân thức tại giá trị cho trước & Bài toán thực tế

**Phương pháp giải:**
1. Tìm ĐKXĐ.
2. Đối chiếu giá trị của biến với ĐKXĐ.
3. Thay giá trị hợp lệ vào phân thức để tính toán.

---

#### Bài toán 4:
Cho phân thức $P = \frac{x^2 - 9}{2x^2 + 6x}$.
a) Tìm điều kiện xác định của phân thức $P$.
b) Tính giá trị của phân thức $P$ tại $x = 5$.
c) Có thể tính được giá trị của $P$ tại $x = 0$ và tại $x = -3$ không? Vì sao?

**Lời giải:**

a) Phân tích mẫu thức:
$$2x^2 + 6x = 2x(x + 3)$$
Phân thức $P$ xác định khi:
$$2x(x + 3) \neq 0 \iff 2x \neq 0 \quad\text{và}\quad x + 3 \neq 0 \iff x \neq 0 \quad\text{và}\quad x \neq -3$$
Vậy ĐKXĐ của $P$ là $x \neq 0$ và $x \neq -3$.

b) Tại $x = 5$:
Giá trị $x = 5$ thỏa mãn ĐKXĐ ($5 \neq 0$ và $5 \neq -3$).
Thay $x = 5$ vào phân thức:
$$P(5) = \frac{5^2 - 9}{2 \cdot 5^2 + 6 \cdot 5} = \frac{25 - 9}{2 \cdot 25 + 30} = \frac{16}{50 + 30} = \frac{16}{80} = \frac{1}{5}$$
Vậy giá trị của $P$ tại $x = 5$ bằng $\frac{1}{5}$.

c) Tại $x = 0$ và $x = -3$:
Cả hai giá trị $x = 0$ và $x = -3$ đều làm cho mẫu thức $2x^2 + 6x = 0$ (vi phạm ĐKXĐ).
Do đó, **không thể tính được giá trị của phân thức $P$ tại $x = 0$ và tại $x = -3$** (tại đó phân thức không xác định).

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Hàm phân thức hữu tỉ trong Giải tích vi phân và Tiệm cận

Trong toán học hiện đại, hàm số phân thức hữu tỉ $y = \frac{P(x)}{Q(x)}$ đóng vai trò trung tâm trong giải tích. Tại những điểm làm cho mẫu thức $Q(x) = 0$ nhưng tử thức $P(x) \neq 0$, đồ thị hàm số sẽ tiến ra vô cực, hình thành nên **đường tiệm cận đứng (Vertical Asymptote)**. Đây là ranh giới kỳ dị mà đồ thị không bao giờ chạm tới được — một khái niệm then chốt để nghiên cứu các hiện tượng cộng hưởng trong vật lý hạt nhân và kỹ thuật hàng không vũ trụ.

---

### Chuyên đề 2: Điện trở tương đương của đoạn mạch mắc song song

Trong vật lý lớp 9 và kỹ thuật điện tử, khi mắc hai điện trở $R_1$ và $R_2$ song song với nhau, điện trở tương đương $R_{td}$ của đoạn mạch được tính bởi công thức phân thức:
$$\frac{1}{R_{td}} = \frac{1}{R_1} + \frac{1}{R_2} \implies R_{td} = \frac{R_1 R_2}{R_1 + R_2}$$
Tử thức là tích hai điện trở, mẫu thức là tổng hai điện trở. Phân thức này luôn đảm bảo $R_{td} < R_1$ và $R_{td} < R_2$, giải thích tại sao khi cắm thêm nhiều thiết bị điện vào ổ cắm gia đình (mắc song song), điện trở tổng của ngôi nhà giảm xuống và dòng điện tổng tăng vọt, đòi hỏi aptomat ngắt mạch để chống cháy nổ.

---

### Chuyên đề 3: Công thức Thấu kính Hội tụ Gauss trong Quang học

Khi thiết kế ống kính máy ảnh, kính thiên văn hoặc kính hiển vi, các kỹ sư quang học áp dụng công thức Gauss dạng phân thức:
$$\frac{1}{f} = \frac{1}{d} + \frac{1}{d'} \implies d' = \frac{d \cdot f}{d - f}$$
Trong đó:
- $f$ là tiêu cự của thấu kính.
- $d$ là khoảng cách từ vật đến thấu kính.
- $d'$ là khoảng cách từ ảnh đến thấu kính.
Điều kiện xác định $d \neq f$ phản ánh một hiện tượng vật lý tuyệt đẹp: Khi vật đặt đúng tiêu điểm ($d = f$), mẫu số triệt tiêu, ảnh $d'$ ở vô cực — các tia sáng ló ra là chùm tia song song, tạo nên nguyên lý chế tạo đèn hải đăng chiếu xa hàng chục hải lý trên biển đêm!

---

### Chuyên đề 4: Mô hình Động học Enzyme Michaelis - Menten trong Hóa sinh

Trong sinh hóa và y học, tốc độ phản ứng sinh học được xúc tác bởi enzyme tuân theo phương trình phân thức Michaelis-Menten:
$$v = \frac{V_{\max} [S]}{K_m + [S]}$$
- $[S]$ là nồng độ cơ chất (substrate).
- $V_{\max}$ là tốc độ tối đa của phản ứng.
- $K_m$ là hằng số Michaelis.
Khi nồng độ cơ chất rất lớn ($[S] \gg K_m$), phân thức tiến dần về giới hạn $V_{\max}$ (bão hòa enzyme). Nhờ phân thức này, các hãng dược phẩm tính toán chuẩn xác liều lượng thuốc kháng sinh hoặc thuốc điều trị ung thư để ức chế các enzyme gây hại mà không làm tổn thương tế bào lành.

---

### Chuyên đề 5: Phân tích Hiệu suất Thuật toán và Định luật Amdahl

Trong khoa học máy tính, khi nâng cấp một máy tính có $N$ bộ xử lý (multi-core CPU), hệ số tăng tốc tối đa của toàn hệ thống được mô tả bởi công thức phân thức định luật Amdahl:
$$S(N) = \frac{1}{(1 - p) + \frac{p}{N}}$$
Trong đó $p$ là tỉ lệ phần trăm công việc có thể chạy song song ($0 \le p \le 1$). Phân thức này chỉ ra rằng: dù số lượng nhân CPU $N \to \infty$ thì tốc độ tối đa cũng chỉ đạt $\frac{1}{1 - p}$. Điều này định hướng các kỹ sư phần mềm tại Google hay Meta tối ưu hóa cấu trúc thuật toán trước khi mua thêm hàng ngàn máy chủ siêu máy tính!

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 21: Phân thức đại số (Toán 8)",
  "questions": [
    {
      "question": "Biểu thức nào sau đây KHÔNG PHẢI là một phân thức đại số?",
      "options": [
        "(x + 1) / (x - 2)",
        "(sqrt(x) + 3) / (x + 1)",
        "3x^2 - 5x + 4",
        "0"
      ],
      "answer": 1,
      "hint": "Phân thức đại số yêu cầu cả tử và mẫu đều phải là các đa thức.",
      "explanation": "Biểu thức $(\\sqrt{x} + 3)/(x + 1)$ có tử thức chứa $\\sqrt{x}$ không phải là đa thức, do đó không phải là phân thức đại số. Mọi đa thức và số thực đều là phân thức có mẫu bằng 1."
    },
    {
      "question": "Điều kiện xác định của phân thức P = (2x - 1) / (x - 4) là:",
      "options": [
        "x ≠ 4",
        "x ≠ 1/2",
        "x ≠ -4",
        "x ≠ 0"
      ],
      "answer": 0,
      "hint": "Mẫu thức phải khác 0: x - 4 ≠ 0.",
      "explanation": "Phân thức xác định khi mẫu thức khác 0: $x - 4 \\neq 0 \\iff x \\neq 4$."
    },
    {
      "question": "Cặp phân thức nào sau đây BẰNG NHAU?",
      "options": [
        "x / (x + 1) và x^2 / (x^2 + 1)",
        "(x - 3) / (x^2 - 9) và 1 / (x + 3)",
        "2 / x và (2x + 1) / x^2",
        "(x + 2) / (x - 2) và -1"
      ],
      "answer": 1,
      "hint": "Kiểm tra tích chéo: (x - 3)(x + 3) = x^2 - 9.",
      "explanation": "Ta có $(x - 3)(x + 3) = x^2 - 9 = 1 \\cdot (x^2 - 9)$. Do đó $(x - 3)/(x^2 - 9) = 1/(x + 3)$."
    },
    {
      "question": "Điều kiện xác định của phân thức Q = (x + 2) / (x^2 - 25) là:",
      "options": [
        "x ≠ 5",
        "x ≠ -5",
        "x ≠ 5 và x ≠ -5",
        "x ≠ -2"
      ],
      "answer": 2,
      "hint": "Mẫu số x^2 - 25 = (x - 5)(x + 5) ≠ 0.",
      "explanation": "Mẫu thức $x^2 - 25 \\neq 0 \\iff (x - 5)(x + 5) \\neq 0 \\iff x \\neq 5$ và $x \\neq -5$."
    },
    {
      "question": "Giá trị của phân thức M = (3x + 6) / (x^2 - 4) tại x = 3 là:",
      "options": [
        "3",
        "1",
        "15/5 = 3",
        "3/5"
      ],
      "answer": 0,
      "hint": "Thay x = 3: Tử = 3(3) + 6 = 15; Mẫu = 3^2 - 4 = 5. Giá trị = 15/5.",
      "explanation": "Thay $x = 3$ thỏa mãn ĐKXĐ ($x \\neq \\pm 2$): $M = \\frac{3(3) + 6}{3^2 - 4} = \\frac{15}{5} = 3$."
    },
    {
      "question": "Phân thức nào sau đây luôn XÁC ĐỊNH VỚI MỌI GIÁ TRỊ của biến x?",
      "options": [
        "(2x - 1) / (x^2 + 1)",
        "x / (x^2 - 1)",
        "3 / x",
        "(x + 4) / (x^2 - 4x)"
      ],
      "answer": 0,
      "hint": "Tìm phân thức có mẫu thức luôn khác 0 với mọi x.",
      "explanation": "Mẫu thức $x^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$, nên phân thức $(2x - 1)/(x^2 + 1)$ luôn xác định với mọi $x$."
    },
    {
      "question": "Giá trị của phân thức A = (x^2 - 1) / (x - 1) tại x = 1 là:",
      "options": [
        "2",
        "0",
        "1",
        "Không xác định"
      ],
      "answer": 3,
      "hint": "Tại x = 1, mẫu thức x - 1 = 0.",
      "explanation": "Tại $x = 1$, mẫu thức $x - 1 = 0$, vi phạm điều kiện xác định. Do đó phân thức không xác định tại $x = 1$."
    },
    {
      "question": "Đa thức B trong đẳng thức (x - 2) / (x + 3) = (x^2 - 4) / B là:",
      "options": [
        "(x + 3)(x - 2)",
        "(x + 3)(x + 2)",
        "x^2 + 9",
        "x^2 - 9"
      ],
      "answer": 1,
      "hint": "x^2 - 4 = (x - 2)(x + 2), nhân cả tử và mẫu với (x + 2).",
      "explanation": "Ta có $x^2 - 4 = (x - 2)(x + 2)$. Nhân cả tử và mẫu của phân thức vế trái với $(x + 2)$ ta được mẫu $B = (x + 3)(x + 2)$."
    },
    {
      "question": "Điều kiện xác định của phân thức H = 1 / (x^2 - 6x + 9) là:",
      "options": [
        "x ≠ 3",
        "x ≠ -3",
        "x ≠ 9",
        "x ≠ ±3"
      ],
      "answer": 0,
      "hint": "x^2 - 6x + 9 = (x - 3)^2.",
      "explanation": "Ta có $x^2 - 6x + 9 = (x - 3)^2 \\neq 0 \\iff x - 3 \\neq 0 \\iff x \\neq 3$."
    },
    {
      "question": "Một ô tô đi quãng đường 120 km với vận tốc v (km/h). Biểu thức biểu thị thời gian đi của ô tô là:",
      "options": [
        "120 * v",
        "120 / v (v > 0)",
        "v / 120",
        "120 + v"
      ],
      "answer": 1,
      "hint": "Thời gian = Quãng đường / Vận tốc.",
      "explanation": "Thời gian đi được biểu thị bằng phân thức $t = 120 / v$ với điều kiện vận tốc thực tế $v > 0$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho các biểu thức sau:
$$A = \frac{2x - 7}{3x + 1}; \quad B = \frac{x^2 - 4}{\sqrt{x} + 2}; \quad C = 5x^3 - 2x + 9; \quad D = \frac{x^2 + 1}{x^2 - 2x + 5}; \quad E = \frac{3x - 2}{0}$$
a) Biểu thức nào là phân thức đại số? Biểu thức nào không phải? Vì sao?
b) Tìm điều kiện xác định của phân thức $A$ và phân thức $D$.

### Bài tập 2:
Dùng định nghĩa hai phân thức bằng nhau, hãy chứng minh:
a) $\frac{x^2 + 2x}{x^2 - 4} = \frac{x}{x - 2}$
b) $\frac{x^3 + 8}{x + 2} = x^2 - 2x + 4$
c) $\frac{3 - x}{x^2 - 9} = -\frac{1}{x + 3}$

### Bài tập 3:
Cho phân thức đại số:
$$F = \frac{x^2 - 16}{2x^2 - 8x}$$
a) Tìm điều kiện xác định của $F$.
b) Rút gọn phân thức $F$.
c) Tính giá trị của $F$ tại $x = 6$, $x = -4$ và $x = 0$.

### Bài tập 4 (Toán thực tế):
Một xưởng may theo kế hoạch phải may $1\,200$ bộ quần áo trong $x$ ngày. Nhưng nhờ cải tiến kỹ thuật, xưởng đã hoàn thành kế hoạch sớm hơn $2$ ngày và may thêm được $50$ bộ quần áo.
a) Viết phân thức biểu thị số bộ quần áo xưởng may trong một ngày theo kế hoạch.
b) Viết phân thức biểu thị số bộ quần áo thực tế xưởng may được trong một ngày.
c) Tính số bộ quần áo thực tế may được mỗi ngày nếu kế hoạch ban đầu là $x = 20$ ngày.
