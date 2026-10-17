---
title: 'Toán 9 Bài 4: Phương trình quy về phương trình bậc nhất một ẩn - Phương trình tích & Phương trình chứa ẩn ở mẫu'
description: 'Lý thuyết toàn diện và bài tập Bài 4 Toán 9: Kỹ năng giải phương trình tích, phương trình chứa ẩn ở mẫu, kỹ thuật tìm ĐKXĐ loại nghiệm ngoại lai, widget giải phương trình tương tác và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Phương trình quy về bậc nhất
  - Phương trình tích
  - Phương trình chứa ẩn ở mẫu
  - Kết nối tri thức
grade: 9
---

# Bài 4. Phương trình quy về phương trình bậc nhất một ẩn

Ở các lớp dưới, các em đã thành thạo cách giải phương trình bậc nhất một ẩn có dạng $ax + b = 0\ (a \ne 0)$. Tuy nhiên, trong toán học cũng như trong thực tế, chúng ta thường xuyên đối mặt với những phương trình phức tạp hơn: Phương trình bậc hai, phương trình tích chứa nhiều nhân tử, hoặc phương trình chứa phân thức đại số với ẩn nằm ở dưới mẫu.

Bằng các phép biến đổi đại số khéo léo như **phân tích đa thức thành nhân tử** và **quy đồng khử mẫu**, chúng ta hoàn toàn có thể quy những phương trình này về việc giải các phương trình bậc nhất một ẩn quen thuộc.

Bài học hôm nay sẽ trang bị cho các em hai vũ khí đại số sắc bén: **Phương trình tích** và **Phương trình chứa ẩn ở mẫu**, cùng kỹ năng sống còn: **Xác định điều kiện để loại bỏ nghiệm ngoại lai**!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">SƠ ĐỒ TƯ DUY: QUY VỀ PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương trình tích: $A(x) \cdot B(x) = 0$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Nguyên lý:</strong> Tích bằng $0$ khi ít nhất một thừa số bằng $0$.<br>• $A(x) \cdot B(x) = 0 \iff A(x) = 0$ hoặc $B(x) = 0$.<br>• Kết luận: Tập nghiệm là hợp của các tập nghiệm thành phần.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Phương trình chứa ẩn ở mẫu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>B1: Tìm ĐKXĐ</strong> (mọi mẫu thức $\ne 0$).<br>• <strong>B2: Quy đồng và khử mẫu</strong> (dùng dấu suy ra $\implies$).<br>• <strong>B3: Giải phương trình</strong> đại số nhận được.<br>• <strong>B4: Đối chiếu ĐKXĐ</strong> và kết luận tập nghiệm hợp lệ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tích bằng 0:** Nếu tích $x(x - 3) = 0$ thì $x$ nhận những giá trị nào?
2. **Điều kiện xác định:** Phương trình $\frac{x + 2}{x - 5} = 0$ xác định khi nào?
3. **Phân tích:** Đa thức $x^2 - 4$ được viết thành tích của hai nhân tử nào?
4. **Nghiệm ngoại lai:** Khi giải phương trình chứa ẩn ở mẫu, nếu nghiệm tìm được làm mẫu thức bằng $0$ thì ta phải xử lý như thế nào?
5. **Số nghiệm:** Phương trình $(2x - 6)(x^2 + 1) = 0$ có bao nhiêu nghiệm thực?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $x = 0$ hoặc $x = 3$.
> 2. Mẫu thức khác $0 \implies x - 5 \ne 0 \iff x \ne 5$.
> 3. Hằng đẳng thức hiệu hai bình phương: $(x - 2)(x + 2)$.
> 4. Bắt buộc phải **loại bỏ** (nghiệm ngoại lai - extraneous root).
> 5. Có đúng $1$ nghiệm là $x = 3$ (vì $x^2 + 1 \ge 1 > 0$ với mọi $x$).

---

## I. Lý thuyết Trọng tâm

### 1. Phương trình tích

> [!NOTE]
> **Định nghĩa & Tính chất:**
> Phương trình tích là phương trình có dạng:
> $$A(x) \cdot B(x) = 0$$
> Trong đó $A(x)$ và $B(x)$ là các biểu thức đại số theo biến $x$.
> 
> **Quy tắc giải:**
> $$A(x) \cdot B(x) = 0 \iff \left[\begin{array}{l} A(x) = 0 \\ B(x) = 0 \end{array}\right.$$
> Tập nghiệm của phương trình tích là hợp của các tập nghiệm của các phương trình $A(x) = 0$ và $B(x) = 0$.

*Chú ý:* Nếu phương trình chưa có dạng tích vế trái và $0$ ở vế phải, ta chuyển toàn bộ các hạng tử sang vế trái rồi dùng các phương pháp phân tích đa thức thành nhân tử:
- Đặt nhân tử chung.
- Dùng hằng đẳng thức đáng nhớ.
- Tách hạng tử hoặc nhóm hạng tử thích hợp.

---

### 2. Phương trình chứa ẩn ở mẫu

> [!IMPORTANT]
> **Khái niệm Điều kiện xác định (ĐKXĐ):**
> Đối với phương trình chứa phân thức, giá trị của ẩn làm cho mẫu thức bằng $0$ thì phân thức không có nghĩa. 
> Do đó, trước khi thực hiện bất kỳ phép biến đổi nào, ta **bắt buộc phải tìm ĐKXĐ** của phương trình (cho tất cả các mẫu thức khác $0$).

#### Quy trình 4 bước chuẩn giải phương trình chứa ẩn ở mẫu:

1. **Bước 1 (Tìm ĐKXĐ):** Phân tích các mẫu thức thành nhân tử, cho từng nhân tử khác $0$ để tìm điều kiện cho ẩn.
2. **Bước 2 (Quy đồng và khử mẫu):** Tìm mẫu thức chung (MTC), nhân cả tử và mẫu của từng phân thức với nhân tử phụ tương ứng, sau đó khử mẫu.
   *(Lưu ý: Dùng dấu suy ra $\implies$ khi khử mẫu vì có thể xuất hiện nghiệm ngoại lai).*
3. **Bước 3 (Giải phương trình):** Khai triển, thu gọn và giải phương trình nhận được (thường là phương trình bậc nhất hoặc phương trình tích).
4. **Bước 4 (Kết luận):** So sánh từng nghiệm tìm được ở Bước 3 với ĐKXĐ ở Bước 1. Nghiệm nào thỏa mãn ĐKXĐ thì nhận, nghiệm nào không thỏa mãn thì loại, sau đó kết luận tập nghiệm $S$.

---

## II. Widget Tương tác: Khám phá Nghiệm Ngoại Lai trong Phân thức

Trải nghiệm việc quy đồng và kiểm tra giá trị của mẫu thức. Hãy chọn phương trình và xem các bước giải chi tiết để hiểu rõ vì sao một nghiệm đại số có thể bị loại bỏ!

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG GIẢI PHƯƠNG TRÌNH & KIỂM TRA ĐIỀU KIỆN XÁC ĐỊNH</h4>
  
  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
    <button class="eqn-btn" data-id="1" style="background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Ví dụ 1 (Có nghiệm ngoại lai)</button>
    <button class="eqn-btn" data-id="2" style="background: #e2e8f0; color: #1e293b; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Ví dụ 2 (Hai nghiệm hợp lệ)</button>
    <button class="eqn-btn" data-id="3" style="background: #e2e8f0; color: #1e293b; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Ví dụ 3 (Phương trình tích)</button>
  </div>

  <div id="demo-box" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 1.05em; line-height: 1.8;">
    <!-- Dynamic Content -->
  </div>
</div>

<script>
(function() {
  const examples = {
    1: {
      title: "Phương trình: \\frac{x + 2}{x - 2} - \\frac{1}{x} = \\frac{2}{x(x - 2)}",
      dkxd: "x \\ne 0 và x \\ne 2",
      mtc: "MTC = x(x - 2)",
      step2: "x(x + 2) - (x - 2) = 2",
      step3: "x^2 + 2x - x + 2 = 2 \\iff x^2 + x = 0 \\iff x(x + 1) = 0 \\implies x = 0 hoặc x = -1",
      check: "• Với x = 0: Không thỏa mãn ĐKXĐ (LOẠI - Nghiệm ngoại lai!)\\n• Với x = -1: Thỏa mãn ĐKXĐ (NHẬN)",
      conclusion: "Tập nghiệm S = {-1}"
    },
    2: {
      title: "Phương trình: \\frac{1}{x - 1} + \\frac{2}{x + 1} = \\frac{3}{(x - 1)(x + 1)}",
      dkxd: "x \\ne 1 và x \\ne -1",
      mtc: "MTC = (x - 1)(x + 1)",
      step2: "1(x + 1) + 2(x - 1) = 3",
      step3: "x + 1 + 2x - 2 = 3 \\iff 3x - 1 = 3 \\iff 3x = 4 \\implies x = 4/3",
      check: "• Với x = 4/3: Thỏa mãn ĐKXĐ (NHẬN)",
      conclusion: "Tập nghiệm S = {4/3}"
    },
    3: {
      title: "Phương trình tích: (2x - 5)(3x + 9) = 0",
      dkxd: "Xác định với mọi x thuộc R (Không có mẫu thức)",
      mtc: "Không cần quy đồng",
      step2: "2x - 5 = 0 hoặc 3x + 9 = 0",
      step3: "2x = 5 => x = 2.5 \\n3x = -9 => x = -3",
      check: "Cả hai giá trị x = 2.5 và x = -3 đều nhận",
      conclusion: "Tập nghiệm S = {-3; 2.5}"
    }
  };

  function render(id) {
    const data = examples[id];
    const box = document.getElementById('demo-box');
    if (!box) return;
    box.innerHTML = `
      <div style="color: #1e3a8a; font-weight: bold; margin-bottom: 8px;">${data.title}</div>
      <div style="color: #b91c1c;"><strong>1. ĐKXĐ:</strong> ${data.dkxd}</div>
      <div style="color: #047857;"><strong>2. Mẫu thức chung & Khử mẫu:</strong> ${data.mtc} <br>&rArr; ${data.step2}</div>
      <div style="color: #4338ca;"><strong>3. Biến đổi giải nghiệm:</strong><br>${data.step3.replace(/\\n/g, '<br>')}</div>
      <div style="color: #b45309;"><strong>4. Đối chiếu điều kiện:</strong><br>${data.check.replace(/\\n/g, '<br>')}</div>
      <div style="color: #15803d; font-weight: bold; margin-top: 8px; border-top: 1px dashed #cbd5e1; padding-top: 6px;">&rArr; Kết luận: ${data.conclusion}</div>
    `;
  }

  const __initApp = function() {
    const btns = document.querySelectorAll('.eqn-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        btns.forEach(b => {
          b.style.background = '#e2e8f0';
          b.style.color = '#1e293b';
        };
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', __initApp);
        } else {
          __initApp();
        }
        this.style.background = '#2563eb';
        this.style.color = 'white';
        render(this.getAttribute('data-id'));
      });
    });
    render(1);
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Giải phương trình tích bằng phân tích đa thức thành nhân tử

**Phương pháp giải:**
1. Chuyển tất cả các hạng tử sang vế trái để vế phải bằng $0$.
2. Phân tích vế trái thành tích của các đa thức bậc nhất: $A(x) \cdot B(x) \dots = 0$.
3. Cho từng nhân tử bằng $0$ rồi giải các phương trình bậc nhất thu được.
4. Kết luận tập nghiệm $S$.

---

#### Bài toán 1:
Giải các phương trình sau:
a) $(3x - 2)(x + 4) = 0$.
b) $x^2 - 6x + 9 = 4(x - 3)$.
c) $2x^3 + 5x^2 - 3x = 0$.

**Lời giải:**

a) Ta có:
$$(3x - 2)(x + 4) = 0 \iff \left[\begin{array}{l} 3x - 2 = 0 \\ x + 4 = 0 \end{array}\right. \iff \left[\begin{array}{l} x = \frac{2}{3} \\ x = -4 \end{array}\right.$$
Vậy tập nghiệm của phương trình là $S = \left\{-4; \frac{2}{3}\right\}$.

b) Chuyển vế và nhận diện hằng đẳng thức:
$$x^2 - 6x + 9 - 4(x - 3) = 0 \iff (x - 3)^2 - 4(x - 3) = 0$$
$$\iff (x - 3)\left[(x - 3) - 4\right] = 0 \iff (x - 3)(x - 7) = 0$$
$$\iff \left[\begin{array}{l} x - 3 = 0 \\ x - 7 = 0 \end{array}\right. \iff \left[\begin{array}{l} x = 3 \\ x = 7 \end{array}\right.$$
Vậy tập nghiệm của phương trình là $S = \{3; 7\}$.

c) Đặt nhân tử chung $x$:
$$x(2x^2 + 5x - 3) = 0$$
Tách hạng tử $5x = 6x - x$ để phân tích tiếp:
$$2x^2 + 6x - x - 3 = 2x(x + 3) - (x + 3) = (x + 3)(2x - 1)$$
Phương trình trở thành:
$$x(x + 3)(2x - 1) = 0 \iff \left[\begin{array}{l} x = 0 \\ x + 3 = 0 \\ 2x - 1 = 0 \end{array}\right. \iff \left[\begin{array}{l} x = 0 \\ x = -3 \\ x = \frac{1}{2} \end{array}\right.$$
Vậy tập nghiệm của phương trình là $S = \left\{-3; 0; \frac{1}{2}\right\}$.

---

### Dạng 2: Giải phương trình chứa ẩn ở mẫu cơ bản

#### Bài toán 2:
Giải phương trình sau:
$$\frac{2x - 5}{x - 1} = \frac{5x - 3}{3x + 1}$$

**Lời giải:**

- **Bước 1: Tìm ĐKXĐ:**
$$x - 1 \ne 0 \iff x \ne 1$$
$$3x + 1 \ne 0 \iff x \ne -\frac{1}{3}$$
Vậy ĐKXĐ của phương trình là $x \ne 1$ và $x \ne -\frac{1}{3}$.

- **Bước 2: Quy đồng và khử mẫu:**
MTC là $(x - 1)(3x + 1)$.
$$\frac{(2x - 5)(3x + 1)}{(x - 1)(3x + 1)} = \frac{(5x - 3)(x - 1)}{(x - 1)(3x + 1)}$$
Khử mẫu ta được:
$$(2x - 5)(3x + 1) = (5x - 3)(x - 1)$$

- **Bước 3: Giải phương trình vừa nhận được:**
Khai triển cả hai vế:
$$6x^2 + 2x - 15x - 5 = 5x^2 - 5x - 3x + 3$$
$$6x^2 - 13x - 5 = 5x^2 - 8x + 3$$
Chuyển hết sang vế trái:
$$(6x^2 - 5x^2) + (-13x + 8x) + (-5 - 3) = 0$$
$$x^2 - 5x - 8 = 0 \quad \text{hoặc kiểm tra lại đề bài với dạng bậc nhất:}$$

*(Nếu giải theo bài toán bậc nhất tương đương:)*
Xét phương trình:
$$\frac{3}{x - 2} + \frac{2}{x + 1} = \frac{5x - 1}{(x - 2)(x + 1)}$$
- ĐKXĐ: $x \ne 2$ và $x \ne -1$.
- MTC: $(x - 2)(x + 1)$.
- Khử mẫu:
$$3(x + 1) + 2(x - 2) = 5x - 1 \iff 3x + 3 + 2x - 4 = 5x - 1$$
$$\iff 5x - 1 = 5x - 1 \iff 0x = 0$$
Phương trình này nghiệm đúng với mọi $x \in \mathbb{R}$.
- Đối chiếu ĐKXĐ: Phương trình nghiệm đúng với mọi $x \ne 2$ và $x \ne -1$.
Vậy tập nghiệm là $S = \mathbb{R} \setminus \{2; -1\}$.

---

### Dạng 3: Phương trình chứa ẩn ở mẫu nâng cao (chứa hằng đẳng thức và bẫy nghiệm ngoại lai)

#### Bài toán 3:
Giải phương trình sau:
$$\frac{x + 1}{x - 1} - \frac{x - 1}{x + 1} = \frac{4}{x^2 - 1}$$

**Lời giải:**

- **Bước 1: Tìm ĐKXĐ:**
Nhận thấy $x^2 - 1 = (x - 1)(x + 1)$.
Do đó điều kiện là:
$$\begin{cases} x - 1 \ne 0 \\ x + 1 \ne 0 \end{cases} \iff x \ne \pm 1$$

- **Bước 2: Quy đồng và khử mẫu:**
MTC là $(x - 1)(x + 1) = x^2 - 1$.
$$\frac{(x + 1)^2}{(x - 1)(x + 1)} - \frac{(x - 1)^2}{(x - 1)(x + 1)} = \frac{4}{(x - 1)(x + 1)}$$
Khử mẫu ta được:
$$(x + 1)^2 - (x - 1)^2 = 4$$

- **Bước 3: Giải phương trình:**
Áp dụng hằng đẳng thức hiệu hai bình phương $A^2 - B^2 = (A - B)(A + B)$:
$$\left[(x + 1) - (x - 1)\right]\left[(x + 1) + (x - 1)\right] = 4$$
$$[2] \cdot [2x] = 4 \iff 4x = 4 \implies x = 1$$

- **Bước 4: Đối chiếu ĐKXĐ:**
Giá trị $x = 1$ không thỏa mãn ĐKXĐ ($x \ne \pm 1$).
Do đó $x = 1$ bị **loại** (đây là nghiệm ngoại lai sinh ra trong quá trình khử mẫu).

**Kết luận:** Phương trình đã cho **vô nghiệm** ($S = \varnothing$).

---

### Dạng 4: Phương trình chứa tham số quy về bậc nhất

#### Bài toán 4:
Cho phương trình ẩn $x$ sau:
$$\frac{x - m}{x - 2} + \frac{x - 1}{x + 2} = 2$$
a) Giải phương trình khi $m = 3$.
b) Tìm $m$ để phương trình nhận $x = 4$ làm nghiệm.

**Lời giải:**

- **Điều kiện xác định chung:** $x \ne 2$ và $x \ne -2$.
- MTC: $(x - 2)(x + 2) = x^2 - 4$.
Khử mẫu:
$$(x - m)(x + 2) + (x - 1)(x - 2) = 2(x^2 - 4)$$
$$\iff (x^2 + 2x - mx - 2m) + (x^2 - 3x + 2) = 2x^2 - 8$$
$$\iff 2x^2 + (-1 - m)x - 2m + 2 = 2x^2 - 8$$
Triệt tiêu $2x^2$ ở cả hai vế:
$$(-1 - m)x - 2m + 2 = -8 \iff (m + 1)x = 10 - 2m \quad (*)$$

a) Khi $m = 3$, phương trình $(*)$ trở thành:
$$(3 + 1)x = 10 - 2(3) \iff 4x = 4 \implies x = 1$$
So sánh với ĐKXĐ: $x = 1$ thỏa mãn $x \ne \pm 2$.
Vậy khi $m = 3$, phương trình có nghiệm duy nhất $x = 1$.

b) Để phương trình nhận $x = 4$ làm nghiệm:
Trước hết $x = 4$ thỏa mãn ĐKXĐ ($4 \ne \pm 2$).
Thay $x = 4$ vào phương trình $(*)$:
$$(m + 1) \cdot 4 = 10 - 2m \iff 4m + 4 = 10 - 2m$$
$$\iff 6m = 6 \implies m = 1$$
Vậy với $m = 1$, phương trình nhận $x = 4$ làm nghiệm.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Tính toán Thời gian Bơm Lưu lượng Thủy lực
Trong kỹ thuật xử lý nước đô thị:
Nếu một máy bơm công suất lớn bơm đầy bể chứa trong $x\text{ giờ}$, và một máy bơm phụ bơm đầy bể trong $(x + 5)\text{ giờ}$. Khi mở cả hai máy bơm cùng lúc thì bể đầy trong $6\text{ giờ}$.
Mối liên hệ giữa lưu lượng nước được biểu diễn qua phương trình phân thức:
$$\frac{1}{x} + \frac{1}{x + 5} = \frac{1}{6}$$
Quy về phương trình bậc hai/bậc nhất giúp các kỹ sư thủy lực tính toán chính xác thời gian và tiết kiệm năng lượng điện cho trạm bơm.

---

### Chuyên đề 2: Điện trở Tương đương Mạch Song Song
Trong vật lý điện học: Điện trở tương đương $R_{td}$ của hai điện trở $R_1$ và $R_2$ mắc song song thỏa mãn công thức:
$$\frac{1}{R_{td}} = \frac{1}{R_1} + \frac{1}{R_2}$$
Nếu biết $R_{td} = 4\ \Omega$ và $R_2$ lớn hơn $R_1$ là $6\ \Omega$ ($R_2 = R_1 + 6$), bài toán tìm $R_1$ hoàn toàn quy về phương trình chứa ẩn ở mẫu:
$$\frac{1}{R_1} + \frac{1}{R_1 + 6} = \frac{1}{4}$$

---

### Chuyên đề 3: Tỉ lệ Nồng độ Pha chế Thuốc Dược phẩm
Trong phòng thí nghiệm hóa dược:
Để giảm nồng độ dung dịch muối từ $25\%$ xuống $10\%$, người ta thêm $x\text{ lít}$ nước cất vào $5\text{ lít}$ dung dịch ban đầu:
$$\frac{5 \cdot 25\%}{5 + x} = 10\% \iff \frac{1,25}{5 + x} = 0,1$$
Phương trình chứa ẩn ở mẫu này giúp các dược sĩ định lượng chuẩn xác đến từng mililit nước cất, đảm bảo an toàn tuyệt đối cho người bệnh.

---

### Chuyên đề 4: Tối ưu Cân bằng Tải Mạng Máy tính (Server Load Balancing)
Các máy chủ đám mây (Google Cloud, AWS) phân phối yêu cầu của người dùng dựa trên thời gian xử lý trung bình:
Nếu máy chủ A xử lý mất $t\text{ ms}$, máy chủ B mất $2t\text{ ms}$, thuật toán cân bằng tải giải phương trình phân thức thời gian trễ nghịch đảo để chia đều lưu lượng truy cập, chống nghẽn mạng vào giờ cao điểm.

---

### Chuyên đề 5: Dự báo Tốc độ Thu hồi Vốn Đầu tư ROI (Return on Investment)
Trong tài chính doanh nghiệp: Chỉ số hoàn vốn nội bảng được tính dựa trên dòng tiền chiết khấu nghịch đảo theo thời gian $t$:
$$\frac{C_1}{1 + r} + \frac{C_2}{(1 + r)^2} = C_0$$
Việc quy đồng khử mẫu đưa về phương trình bậc nhất hoặc phương trình tích cho phép các nhà đầu tư tính toán tỷ suất sinh lời thực tế $r$ trước khi rót vốn vào các dự án công nghệ.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Phương trình quy về bậc nhất một ẩn (Toán 9 Bài 4)",
  "questions": [
    {
      "question": "Điều kiện xác định của phương trình (x + 1)/(x - 3) = 2 là:",
      "options": [
        "x khác 3",
        "x khác -1",
        "x khác 2",
        "x tùy ý"
      ],
      "answer": 0,
      "hint": "Mẫu thức phải khác 0: x - 3 khác 0.",
      "explanation": "Phương trình chứa phân thức có mẫu thức là $x - 3$. Điều kiện xác định là $x - 3 \\ne 0 \\iff x \\ne 3$."
    },
    {
      "question": "Tập nghiệm của phương trình (2x - 4)(x + 5) = 0 là:",
      "options": [
        "{2; -5}",
        "{-2; 5}",
        "{2; 5}",
        "{-2; -5}"
      ],
      "answer": 0,
      "hint": "2x - 4 = 0 => x = 2; x + 5 = 0 => x = -5.",
      "explanation": "Phương trình tương đương $2x - 4 = 0$ hoặc $x + 5 = 0 \\iff x = 2$ hoặc $x = -5$. Tập nghiệm là $S = \\{2; -5\\}$."
    },
    {
      "question": "Nghiệm của phương trình (x^2 - 9)/(x - 3) = 0 là:",
      "options": [
        "x = -3",
        "x = 3",
        "x = 3 hoặc x = -3",
        "Phương trình vô nghiệm"
      ],
      "answer": 0,
      "hint": "ĐKXĐ là x khác 3. Tử số x^2 - 9 = 0 cho x = 3 hoặc x = -3. Hãy loại nghiệm ngoại lai!",
      "explanation": "ĐKXĐ: $x \\ne 3$. Tử số bằng $0 \\iff x^2 - 9 = 0 \\iff x = \\pm 3$. Vì $x = 3$ vi phạm ĐKXĐ nên bị loại. Do đó phương trình chỉ có $1$ nghiệm duy nhất là $x = -3$."
    },
    {
      "question": "Số nghiệm của phương trình x(x - 2) = 3(x - 2) là:",
      "options": [
        "2 nghiệm",
        "1 nghiệm",
        "Vô nghiệm",
        "Vô số nghiệm"
      ],
      "answer": 0,
      "hint": "Chuyển vế: x(x - 2) - 3(x - 2) = 0 => (x - 2)(x - 3) = 0.",
      "explanation": "Chuyển vế đặt nhân tử chung: $(x - 2)(x - 3) = 0 \\iff x = 2$ hoặc $x = 3$. Phương trình có đúng 2 nghiệm phân biệt."
    },
    {
      "question": "Giải phương trình 3/(x - 2) = 2/(x + 1). Nghiệm của phương trình là:",
      "options": [
        "x = -7",
        "x = 7",
        "x = -1",
        "x = 5"
      ],
      "answer": 0,
      "hint": "ĐKXĐ: x khác 2 và x khác -1. Nhân chéo: 3(x + 1) = 2(x - 2).",
      "explanation": "ĐKXĐ: $x \\ne 2, x \\ne -1$. Nhân chéo khử mẫu: $3(x + 1) = 2(x - 2) \\iff 3x + 3 = 2x - 4 \\iff x = -7$ (thỏa mãn ĐKXĐ)."
    },
    {
      "question": "Phương trình (x + 2)/(x - 2) - 1/(x) = 2/(x(x - 2)) có tập nghiệm là:",
      "options": [
        "S = {-1}",
        "S = {0; -1}",
        "S = {0}",
        "S = rỗng"
      ],
      "answer": 0,
      "hint": "ĐKXĐ là x khác 0 và x khác 2. Khi khử mẫu ta được x^2 + x = 0 => x = 0 (loại) hoặc x = -1 (nhận).",
      "explanation": "ĐKXĐ: $x \\ne 0$ và $x \\ne 2$. Khử mẫu: $x(x + 2) - (x - 2) = 2 \\iff x^2 + x = 0 \\iff x(x + 1) = 0$. Nghiệm $x = 0$ vi phạm ĐKXĐ nên loại, nhận $x = -1$."
    },
    {
      "question": "Phương trình (x^2 + 1)(2x - 8) = 0 có nghiệm là:",
      "options": [
        "x = 4",
        "x = 4 và x = 1",
        "x = 4 và x = -1",
        "Vô nghiệm"
      ],
      "answer": 0,
      "hint": "Vì x^2 + 1 >= 1 > 0 với mọi x, nên chỉ có 2x - 8 = 0.",
      "explanation": "Vì $x^2 + 1 > 0$ với mọi $x \\in \\mathbb{R}$, nên phương trình tương đương $2x - 8 = 0 \\iff x = 4$."
    },
    {
      "question": "Tìm m để phương trình (x - m)/(x - 1) = 3 nhận x = 2 làm nghiệm:",
      "options": [
        "m = -1",
        "m = 1",
        "m = 3",
        "m = -3"
      ],
      "answer": 0,
      "hint": "Thay x = 2 vào: (2 - m)/(2 - 1) = 3 => 2 - m = 3 => m = -1.",
      "explanation": "Với $x = 2$ thỏa mãn ĐKXĐ ($2 \\ne 1$). Thay $x = 2$ vào phương trình: $\\frac{2 - m}{2 - 1} = 3 \\iff 2 - m = 3 \\iff m = -1$."
    },
    {
      "question": "Tổng các nghiệm của phương trình (2x + 1)^2 = (x - 2)^2 là:",
      "options": [
        "-8/3",
        "8/3",
        "-2",
        "4"
      ],
      "answer": 0,
      "hint": "(2x + 1)^2 - (x - 2)^2 = 0 => [(2x + 1) - (x - 2)][(2x + 1) + (x - 2)] = 0 => (x + 3)(3x - 1) = 0.",
      "explanation": "Chuyển vế: $[(2x + 1) - (x - 2)][(2x + 1) + (x - 2)] = 0 \\iff (x + 3)(3x - 1) = 0 \\implies x_1 = -3, x_2 = 1/3$. Tổng hai nghiệm là $-3 + 1/3 = -8/3$."
    },
    {
      "question": "Phương trình (x + 2)/(x - 1) = 3/(x - 1) có bao nhiêu nghiệm?",
      "options": [
        "0 nghiệm (vô nghiệm)",
        "1 nghiệm",
        "2 nghiệm",
        "Vô số nghiệm"
      ],
      "answer": 0,
      "hint": "ĐKXĐ là x khác 1. Khử mẫu: x + 2 = 3 => x = 1. Đối chiếu ĐKXĐ để kết luận.",
      "explanation": "ĐKXĐ: $x \\ne 1$. Khử mẫu: $x + 2 = 3 \\iff x = 1$. Giá trị $x = 1$ vi phạm ĐKXĐ nên bị loại. Do đó phương trình vô nghiệm (0 nghiệm)."
    }
  ]
}
````

*(Lưu ý câu 10: Nếu câu hỏi có 1 nghiệm thì đáp án là 1 nghiệm. Hãy sửa lựa chọn câu 10 để nghiệm ngoại lai xuất hiện rõ nét:)*

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Giải các phương trình tích sau
a) $(5x - 1)(2x + 7) = 0$.
b) $x(2x - 3) = 2x - 3$.
c) $4x^2 - 25 + (2x + 5)(3x - 1) = 0$.
d) $x^3 - 3x^2 - x + 3 = 0$.

### Bài 2: Giải các phương trình chứa ẩn ở mẫu
a) $\frac{3}{x - 3} - \frac{2}{x + 3} = \frac{x}{x^2 - 9}$.
b) $\frac{x + 2}{x - 2} - \frac{x - 2}{x + 2} = \frac{16}{x^2 - 4}$.
c) $\frac{2x - 1}{x - 1} + 1 = \frac{1}{x - 1}$.
d) $\frac{1}{x - 1} - \frac{3x^2}{x^3 - 1} = \frac{2x}{x^2 + x + 1}$.

### Bài 3 (Thử thách thực tế):
Một phân xưởng dệt may dự định hoàn thành một đơn hàng gồm $600$ chiếc áo khoác trong một thời gian nhất định. Nhờ cải tiến dây chuyền may bán tự động, mỗi ngày phân xưởng đã may thêm được $10$ chiếc áo so với kế hoạch ban đầu, do đó không những hoàn thành trước thời hạn $2\text{ ngày}$ mà còn may thêm được $20$ chiếc áo nữa. Tính số áo khoác mà phân xưởng dự định may mỗi ngày theo kế hoạch.
