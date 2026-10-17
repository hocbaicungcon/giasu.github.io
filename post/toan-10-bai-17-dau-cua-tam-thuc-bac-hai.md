---
title: 'Toán 10 Bài 17: Dấu của tam thức bậc hai - Định lí, Bất phương trình, Widget & Bài tập'
description: 'Làm chủ lý thuyết Dấu của tam thức bậc hai Toán 10: Quy tắc Trong trái ngoài cùng, giải bất phương trình bậc hai, điều kiện tham số m nghiệm đúng với mọi x, widget xét dấu trực quan và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Đại số 10
  - Dấu tam thức bậc hai
  - Bất phương trình bậc hai
  - Định lí về dấu
  - Kết nối tri thức
grade: 10
---

# Bài 17. Dấu của tam thức bậc hai

"Trong trái, ngoài cùng" — câu khẩu quyết kinh điển quen thuộc của bao thế hệ học sinh phổ thông chính là tinh hoa cô đọng của **Định lí về dấu của tam thức bậc hai**. Khả năng xác định nhanh dấu của biểu thức bậc hai $ax^2 + bx + c$ không chỉ giúp giải trọn vẹn các bất phương trình đại số, tìm tập xác định chứa căn thức mà còn là công cụ phân tích vùng an toàn trong kết cấu kỹ thuật công trình và kinh tế học.

---

## 1. Sơ đồ tư duy (Mindmap) Dấu tam thức bậc hai

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Trường hợp $\Delta < 0$</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Phương trình vô nghiệm.<br>
      • $f(x)$ <strong>luôn cùng dấu với hệ số $a$</strong> với mọi $x \in \mathbb{R}$.<br>
      • Đồ thị parabol hoàn toàn nằm về một phía so với trục hoành $Ox$.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Trường hợp $\Delta = 0$</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Phương trình có nghiệm kép $x_0 = -\frac{b}{2a}$.<br>
      • $f(x)$ cùng dấu với $a$ với mọi $x \ne x_0$, và $f(x_0) = 0$.<br>
      • Parabol tiếp xúc với trục $Ox$ tại đỉnh.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Trường hợp $\Delta > 0$</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Có 2 nghiệm phân biệt $x_1 < x_2$.<br>
      • <strong>Trong khoảng hai nghiệm $(x_1; x_2)$:</strong> $f(x)$ <em>trái dấu</em> với $a$.<br>
      • <strong>Ngoài khoảng hai nghiệm:</strong> $f(x)$ <em>cùng dấu</em> với $a$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Điều kiện $f(x)$ giữ dấu</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $f(x) > 0 \ \forall x \in \mathbb{R} \iff a > 0$ và $\Delta < 0$.<br>
      • $f(x) \ge 0 \ \forall x \in \mathbb{R} \iff a > 0$ và $\Delta \le 0$.<br>
      • $f(x) < 0 \ \forall x \in \mathbb{R} \iff a < 0$ và $\Delta < 0$.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo nhớ quy tắc

1. **Tam thức $f(x) = x^2 + 1$ có biệt thức $\Delta$ mang dấu gì và dấu của $f(x)$ ra sao?**  
   *Đáp án:* $\Delta = 0^2 - 4(1)(1) = -4 < 0$. Vì $a = 1 > 0$ nên $f(x) > 0$ với mọi $x \in \mathbb{R}$.
2. **Quy tắc "Trong trái, ngoài cùng" áp dụng khi nào?**  
   *Đáp án:* Chỉ áp dụng khi tam thức bậc hai có $\Delta > 0$ (tức là có hai nghiệm phân biệt $x_1 < x_2$).
3. **Giải nhanh bất phương trình $x^2 - 4 < 0$:**  
   *Đáp án:* Hai nghiệm là $-2$ và $2$. Hệ số $a = 1 > 0$. Lấy dấu âm (trái dấu với $a$) $\implies$ Lấy khoảng trong: $-2 < x < 2$.
4. **Giải nhanh bất phương trình $x^2 - 4 > 0$:**  
   *Đáp án:* Lấy dấu dương (cùng dấu với $a$) $\implies$ Lấy khoảng ngoài: $x < -2$ hoặc $x > 2$.
5. **Tam thức $f(x) = -x^2 + 2x - 1 = -(x - 1)^2$ nhận giá trị như thế nào với mọi $x$?**  
   *Đáp án:* Luôn $\le 0$ với mọi $x$, bằng $0$ tại $x = 1$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Tam thức bậc hai

> [!NOTE]
> **Tam thức bậc hai** đối với $x$ là biểu thức có dạng:
> $$f(x) = ax^2 + bx + c$$
> Trong đó $a, b, c$ là các số thực cho trước và **$a \ne 0$**.
> - Biệt thức: $\Delta = b^2 - 4ac$ (hoặc $\Delta' = b'^2 - ac$ với $b = 2b'$).
> - Nghiệm của tam thức bậc hai là nghiệm của phương trình bậc hai $ax^2 + bx + c = 0$.

### 3.2. Định lí về dấu của tam thức bậc hai

> [!IMPORTANT]
> Cho tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \ne 0$).
> 1. Nếu $\Delta < 0$ thì $f(x)$ **cùng dấu với hệ số $a$** với mọi $x \in \mathbb{R}$:
>    $$a \cdot f(x) > 0, \quad \forall x \in \mathbb{R}$$
> 2. Nếu $\Delta = 0$ thì $f(x)$ **cùng dấu với hệ số $a$** với mọi $x \ne -\frac{b}{2a}$, và $f\left(-\frac{b}{2a}\right) = 0$.
> 3. Nếu $\Delta > 0$ thì $f(x)$ có hai nghiệm phân biệt $x_1 < x_2$:
>    - $f(x)$ **trái dấu với hệ số $a$** khi $x \in (x_1; x_2)$ *(trong khoảng hai nghiệm)*.
>    - $f(x)$ **cùng dấu với hệ số $a$** khi $x \in (-\infty; x_1) \cup (x_2; +\infty)$ *(ngoài khoảng hai nghiệm)*.

### 3.3. Bảng tóm tắt xét dấu tam thức bậc hai

| Điều kiện $\Delta$ | Nghiệm | Bảng xét dấu của $f(x)$ |
| :---: | :---: | :--- |
| $\Delta < 0$ | Vô nghiệm | $f(x)$ cùng dấu với $a$ trên toàn bộ $(-\infty; +\infty)$ |
| $\Delta = 0$ | Nghiệm kép $x_0 = -\frac{b}{2a}$ | $f(x)$ cùng dấu với $a$ khi $x \ne x_0$, $f(x_0) = 0$ |
| $\Delta > 0$ | 2 nghiệm $x_1 < x_2$ | $x \in (-\infty; x_1) \implies f(x)$ cùng dấu $a$<br>$x \in (x_1; x_2) \implies f(x)$ **trái dấu $a$**<br>$x \in (x_2; +\infty) \implies f(x)$ cùng dấu $a$ |

### 3.4. Bất phương trình bậc hai một ẩn

> [!NOTE]
> Bất phương trình bậc hai một ẩn là bất phương trình có một trong các dạng:
> $$ax^2 + bx + c > 0, \quad ax^2 + bx + c \ge 0, \quad ax^2 + bx + c < 0, \quad ax^2 + bx + c \le 0$$
> Giải bất phương trình bậc hai thực chất là tìm các khoảng giá trị của $x$ để tam thức $f(x)$ nhận dấu phù hợp với bất phương trình.

---

## 4. Widget tương tác: Bộ Xét Dấu Tam Thức Bậc Hai Trực Quan

Nhập các hệ số $a, b, c$ để xem ngay đồ thị Parabol, vị trí nghiệm và các khoảng mang dấu DƯƠNG (+) / ÂM (-) trên trục số thực:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🔍 Công Cụ Khảo Sát Dấu Tam Thức $f(x) = ax^2 + bx + c$</h3>
    <span style="font-size: 0.85rem; background: #fef3c7; color: #b45309; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Trong trái ngoài cùng</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
    <div>
      <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hệ số a (≠ 0):</label>
      <input type="number" id="signA" value="1" step="0.5" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    </div>
    <div>
      <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hệ số b:</label>
      <input type="number" id="signB" value="-3" step="0.5" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    </div>
    <div>
      <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hệ số c:</label>
      <input type="number" id="signC" value="2" step="0.5" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    </div>
  </div>

  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
      <div>Biệt thức $\Delta$: <strong id="valDelta" style="color: #2563eb;">1.00</strong></div>
      <div>Trạng thái nghiệm: <strong id="valRootStatus" style="color: #16a34a;">2 nghiệm phân biệt</strong></div>
    </div>
    <div style="font-family: monospace; font-size: 1.05rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px; color: #0f172a;" id="valRoots">x₁ = 1.00, x₂ = 2.00</div>
  </div>

  <div style="background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 6px; padding: 12px; font-size: 0.92rem; color: #1e40af;">
    <strong>Kết luận xét dấu:</strong>
    <div id="signConclusion" style="margin-top: 6px; line-height: 1.5;">• f(x) > 0 khi x ∈ (-∞; 1) ∪ (2; +∞)<br>• f(x) < 0 khi x ∈ (1; 2)</div>
  </div>
</div>

<script>
(() => {
  const signA = document.getElementById('signA');
  const signB = document.getElementById('signB');
  const signC = document.getElementById('signC');
  const valDelta = document.getElementById('valDelta');
  const valRootStatus = document.getElementById('valRootStatus');
  const valRoots = document.getElementById('valRoots');
  const signConclusion = document.getElementById('signConclusion');

  function analyze() {
    let a = parseFloat(signA.value);
    if (isNaN(a) || a === 0) a = 1;
    const b = parseFloat(signB.value) || 0;
    const c = parseFloat(signC.value) || 0;

    const delta = b * b - 4 * a * c;
    valDelta.textContent = delta.toFixed(2);

    if (delta < 0) {
      valRootStatus.textContent = 'Vô nghiệm';
      valRoots.textContent = 'Phương trình f(x) = 0 vô nghiệm trên ℝ';
      if (a > 0) {
        signConclusion.innerHTML = '• Vì Δ < 0 và a > 0 nên <strong>f(x) > 0 với mọi x ∈ ℝ</strong>.';
      } else {
        signConclusion.innerHTML = '• Vì Δ < 0 và a < 0 nên <strong>f(x) < 0 với mọi x ∈ ℝ</strong>.';
      }
    } else if (Math.abs(delta) < 1e-7) {
      valRootStatus.textContent = 'Nghiệm kép';
      const x0 = -b / (2 * a);
      valRoots.textContent = 'x₀ = ' + x0.toFixed(2);
      if (a > 0) {
        signConclusion.innerHTML = '• <strong>f(x) > 0</strong> với mọi x ≠ ' + x0.toFixed(2) + '; và f(' + x0.toFixed(2) + ') = 0.';
      } else {
        signConclusion.innerHTML = '• <strong>f(x) < 0</strong> với mọi x ≠ ' + x0.toFixed(2) + '; và f(' + x0.toFixed(2) + ') = 0.';
      }
    } else {
      valRootStatus.textContent = '2 nghiệm phân biệt';
      let x1 = (-b - Math.sqrt(delta)) / (2 * a);
      let x2 = (-b + Math.sqrt(delta)) / (2 * a);
      if (x1 > x2) { const t = x1; x1 = x2; x2 = t; }
      valRoots.textContent = 'x₁ = ' + x1.toFixed(2) + ', x₂ = ' + x2.toFixed(2);

      if (a > 0) {
        signConclusion.innerHTML = '• <strong>f(x) > 0</strong> (cùng dấu a) khi x ∈ (-∞; ' + x1.toFixed(2) + ') ∪ (' + x2.toFixed(2) + '; +∞)<br>' +
                                  '• <strong>f(x) < 0</strong> (trái dấu a) khi x ∈ (' + x1.toFixed(2) + '; ' + x2.toFixed(2) + ')';
      } else {
        signConclusion.innerHTML = '• <strong>f(x) < 0</strong> (cùng dấu a) khi x ∈ (-∞; ' + x1.toFixed(2) + ') ∪ (' + x2.toFixed(2) + '; +∞)<br>' +
                                  '• <strong>f(x) > 0</strong> (trái dấu a) khi x ∈ (' + x1.toFixed(2) + '; ' + x2.toFixed(2) + ')';
      }
    }
  }

  signA.addEventListener('input', analyze);
  signB.addEventListener('input', analyze);
  signC.addEventListener('input', analyze);
  analyze();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Xét dấu của tam thức bậc hai

#### Phương pháp giải:
1. Tính biệt thức $\Delta = b^2 - 4ac$.
2. Tìm các nghiệm (nếu có).
3. Xác định dấu của hệ số $a$.
4. Áp dụng định lí về dấu để kết luận.

#### Bài toán 1
Xét dấu của các tam thức bậc hai sau:
1. $f(x) = 2x^2 - 5x + 2$
2. $g(x) = -x^2 + 4x - 5$

#### Lời giải:
1. Xét $f(x) = 2x^2 - 5x + 2$:
   - Hệ số $a = 2 > 0$.
   - $\Delta = (-5)^2 - 4(2)(2) = 25 - 16 = 9 > 0$.
   - Tam thức có 2 nghiệm phân biệt: $x_1 = \frac{5 - 3}{4} = \frac{1}{2}, x_2 = \frac{5 + 3}{4} = 2$.
   - Áp dụng quy tắc "trong trái, ngoài cùng":
     - $f(x) < 0$ khi $x \in \left(\frac{1}{2}; 2\right)$.
     - $f(x) > 0$ khi $x \in \left(-\infty; \frac{1}{2}\right) \cup (2; +\infty)$.
     - $f(x) = 0$ khi $x \in \left\{\frac{1}{2}; 2\right\}$.

2. Xét $g(x) = -x^2 + 4x - 5$:
   - Hệ số $a = -1 < 0$.
   - $\Delta' = 2^2 - (-1)(-5) = 4 - 5 = -1 < 0$.
   - Vì $\Delta' < 0$ và $a < 0$, tam thức luôn cùng dấu với $a$ với mọi $x \in \mathbb{R}$.
   - **Kết luận:** $g(x) < 0$ với mọi $x \in \mathbb{R}$.

---

### Dạng 2: Giải bất phương trình bậc hai một ẩn

#### Phương pháp giải:
Chuyển bất phương trình về dạng vế trái là tam thức bậc hai $ax^2 + bx + c$, vế phải là số 0. Xét dấu vế trái và chọn miền nghiệm phù hợp.

#### Bài toán 2
Giải các bất phương trình sau:
1. $-3x^2 + 7x - 2 \ge 0$
2. $4x^2 - 12x + 9 > 0$

#### Lời giải:
1. Xét tam thức $f(x) = -3x^2 + 7x - 2$:
   - Hệ số $a = -3 < 0$.
   - $\Delta = 7^2 - 4(-3)(-2) = 49 - 24 = 25 > 0$.
   - Phương trình $-3x^2 + 7x - 2 = 0$ có hai nghiệm: $x_1 = \frac{1}{3}, x_2 = 2$.
   - Bất phương trình lấy dấu $\ge 0$ (trái dấu hoặc bằng 0 so với $a = -3 < 0$).
   - Theo quy tắc "trong trái", nghiệm nằm trong đoạn hai nghiệm:
     $$\frac{1}{3} \le x \le 2$$
   - Vậy tập nghiệm của bất phương trình là $S = \left[\frac{1}{3}; 2\right]$.

2. Xét tam thức $g(x) = 4x^2 - 12x + 9 = (2x - 3)^2$:
   - Hệ số $a = 4 > 0$.
   - $\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$.
   - Phương trình có nghiệm kép $x = \frac{3}{2}$.
   - Vì $(2x - 3)^2 \ge 0$ với mọi $x$, nên $(2x - 3)^2 > 0 \iff 2x - 3 \ne 0 \iff x \ne \frac{3}{2}$.
   - Vậy tập nghiệm là $S = \mathbb{R} \setminus \left\{\frac{3}{2}\right\}$.

---

### Dạng 3: Tìm tập xác định của biểu thức chứa căn bậc hai

#### Phương pháp giải:
Hàm số $y = \sqrt{f(x)}$ xác định $\iff f(x) \ge 0$.
Hàm số $y = \frac{1}{\sqrt{f(x)}}$ xác định $\iff f(x) > 0$.

#### Bài toán 3
Tìm tập xác định của hàm số $y = \sqrt{x^2 - 6x + 8} + \frac{1}{\sqrt{16 - x^2}}$.

#### Lời giải:
Hàm số xác định khi và chỉ khi hệ điều kiện sau đồng thời thỏa mãn:
$$\begin{cases} x^2 - 6x + 8 \ge 0 \\ 16 - x^2 > 0 \end{cases}$$
1. Giải (1): $x^2 - 6x + 8 \ge 0$.
   - Tam thức có $a = 1 > 0$ và hai nghiệm $x = 2, x = 4$.
   - Lấy cùng dấu với $a$ $\implies x \le 2$ hoặc $x \ge 4$.
2. Giải (2): $16 - x^2 > 0 \iff -x^2 + 16 > 0$.
   - Tam thức có $a = -1 < 0$ và hai nghiệm $x = -4, x = 4$.
   - Lấy trái dấu với $a$ $\implies -4 < x < 4$.
3. Kết hợp hai điều kiện:
   $$x \in (-4; 4) \cap \left((-\infty; 2] \cup [4; +\infty)\right) \implies -4 < x \le 2$$

**Kết luận:** Tập xác định của hàm số là $D = (-4; 2]$.

---

### Dạng 4: Tìm điều kiện tham số $m$ để tam thức luôn mang một dấu

#### Phương pháp giải:
Cho $f(x) = ax^2 + bx + c$:
- $f(x) > 0 \ \forall x \in \mathbb{R} \iff a > 0$ và $\Delta < 0$.
- $f(x) \ge 0 \ \forall x \in \mathbb{R} \iff a > 0$ và $\Delta \le 0$.
- $f(x) < 0 \ \forall x \in \mathbb{R} \iff a < 0$ và $\Delta < 0$.
- $f(x) \le 0 \ \forall x \in \mathbb{R} \iff a < 0$ và $\Delta \le 0$.
*(Lưu ý: Nếu hệ số $a$ chứa tham số $m$, phải xét riêng trường hợp $a = 0$).*

#### Bài toán 4
Tìm tất cả các giá trị của tham số $m$ để tam thức sau luôn dương với mọi số thực $x$:
$$f(x) = x^2 - 2(m - 1)x + 2m + 1 > 0, \quad \forall x \in \mathbb{R}$$

#### Lời giải:
Hệ số $a = 1 > 0$.
Để $f(x) > 0$ với mọi $x \in \mathbb{R}$, điều kiện cần và đủ là:
$$\begin{cases} a > 0 \\ \Delta' < 0 \end{cases}$$
Vì $a = 1 > 0$ hiển nhiên đúng, ta chỉ cần giải $\Delta' < 0$:
$$\Delta' = (m - 1)^2 - 1(2m + 1) < 0$$
$$m^2 - 2m + 1 - 2m - 1 < 0 \iff m^2 - 4m < 0$$
Tam thức $m^2 - 4m$ có hệ số $a_m = 1 > 0$ và hai nghiệm $m = 0, m = 4$.
Bất phương trình lấy dấu âm (trái dấu với $a_m$) $\implies$ Lấy khoảng trong:
$$0 < m < 4$$

**Kết luận:** Với $0 < m < 4$ thì tam thức luôn dương với mọi $x \in \mathbb{R}$.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Vùng an toàn cất/hạ cánh của máy bay:** Bề mặt dải bay và góc tiếp cận đường băng được mô hình hóa bằng bất phương trình bậc hai $h(x) \ge ax^2 + bx + c$, đảm bảo máy bay luôn cách các chướng ngại vật tối thiểu một khoảng an toàn.
2. **Kỹ thuật kết cấu xây dựng & Chịu lực dầm:** Độ võng của dầm cầu chịu tải trọng phân bố đều thỏa mãn phương trình vi phân có nghiệm dạng bậc hai. Kỹ sư phải giải bất phương trình bậc hai để đảm bảo độ võng không vượt quá giới hạn phá hủy vật liệu.
3. **Phân tích điểm hòa vốn trong kinh tế:** Lợi nhuận của một công ty sản xuất là hàm số bậc hai $P(x) = -0,05x^2 + 120x - 50\,000$. Vùng doanh nghiệp có lãi tương ứng với nghiệm của bất phương trình $P(x) > 0$.
4. **Viễn thông & Vùng phủ sóng di động:** Vùng phủ sóng anten định hướng phát sóng theo búp sóng elip/parabol. Bất phương trình bậc hai xác định tọa độ các hộ dân nằm trong vùng sóng đạt chuẩn chất lượng 5G.
5. **Vật lí hạt nhân & Vùng giữ plasma trong Tokamak:** Trong lò phản ứng nhiệt hạch, từ trường giam giữ plasma phải thỏa mãn bất phương trình áp suất từ trường $B^2/(2\mu_0) \ge p(r)$ ở mọi bán kính $r$ để ngăn plasma 100 triệu độ chạm vào thành buồng chân không.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q1",
  "question": "Tam thức $f(x) = x^2 - 5x + 6$ mang dấu ÂM trong khoảng nào sau đây?",
  "options": [
    "(2; 3)",
    "(-∞; 2)",
    "(3; +∞)",
    "(-∞; 3)"
  ],
  "answer": 0,
  "explanation": "Phương trình $x^2 - 5x + 6 = 0$ có hai nghiệm $x = 2$ và $x = 3$. Hệ số $a = 1 > 0$. Theo quy tắc trong trái ngoài cùng, $f(x) < 0$ khi $x \\in (2; 3)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q2",
  "question": "Tập nghiệm của bất phương trình $x^2 - 4x + 4 > 0$ là:",
  "options": [
    "S = R \\ {2}",
    "S = R",
    "S = (2; +∞)",
    "S = ∅"
  ],
  "answer": 0,
  "explanation": "$x^2 - 4x + 4 = (x - 2)^2 > 0 \\iff x - 2 \\ne 0 \\iff x \\ne 2$. Vậy $S = \\mathbb{R} \\setminus \\{2\\}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q3",
  "question": "Tập nghiệm của bất phương trình $-x^2 + 2x - 3 > 0$ là:",
  "options": [
    "S = ∅",
    "S = R",
    "S = (1; 3)",
    "S = (-∞; 1)"
  ],
  "answer": 0,
  "explanation": "Ta có $\\Delta' = 1^2 - (-1)(-3) = 1 - 3 = -2 < 0$. Vì $\\Delta' < 0$ và $a = -1 < 0$ nên $-x^2 + 2x - 3 < 0$ với mọi $x \\in \\mathbb{R}$. Do đó bất phương trình vô nghiệm $S = \\emptyset$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q4",
  "question": "Tập nghiệm của bất phương trình $2x^2 - 7x + 3 \\le 0$ là:",
  "options": [
    "[1/2; 3]",
    "(1/2; 3)",
    "(-∞; 1/2] ∪ [3; +∞)",
    "[-3; -1/2]"
  ],
  "answer": 0,
  "explanation": "Tam thức có $a = 2 > 0$ và 2 nghiệm $x = 1/2, x = 3$. BPT lấy dấu $\\le 0$ (trái dấu với $a$) nên nghiệm nằm trong đoạn: $[1/2; 3]$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q5",
  "question": "Điều kiện cần và đủ để tam thức $f(x) = ax^2 + bx + c$ ($a \\ne 0$) luôn âm với mọi $x \\in \\mathbb{R}$ là:",
  "options": [
    "a < 0 và Δ < 0",
    "a < 0 và Δ ≤ 0",
    "a > 0 và Δ < 0",
    "a < 0 và Δ > 0"
  ],
  "answer": 0,
  "explanation": "Để $f(x) < 0$ với mọi $x \\in \\mathbb{R}$ thì $\\Delta < 0$ (để vô nghiệm, không đổi dấu) và $a < 0$ (cùng dấu âm)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q6",
  "question": "Tập xác định của hàm số $y = \\sqrt{-x^2 + 5x - 4}$ là:",
  "options": [
    "[1; 4]",
    "(1; 4)",
    "(-∞; 1] ∪ [4; +∞)",
    "[-4; -1]"
  ],
  "answer": 0,
  "explanation": "Điều kiện: $-x^2 + 5x - 4 \\ge 0$. Hai nghiệm là $1$ và $4$. Vì $a = -1 < 0$ nên BPT lấy trong đoạn: $1 \\le x \\le 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q7",
  "question": "Số nghiệm nguyên của bất phương trình $x^2 - 3x - 10 \\le 0$ là:",
  "options": [
    "8",
    "7",
    "6",
    "9"
  ],
  "answer": 0,
  "explanation": "$x^2 - 3x - 10 = 0$ có hai nghiệm $-2$ và $5$. BPT nghiệm đúng khi $-2 \\le x \\le 5$. Các nghiệm nguyên là $-2, -1, 0, 1, 2, 3, 4, 5$ (tổng cộng 8 số nguyên)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q8",
  "question": "Tìm tất cả giá trị của tham số $m$ để bất phương trình $x^2 - 2mx + 4 > 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$:",
  "options": [
    "-2 < m < 2",
    "m < -2 hoặc m > 2",
    "-2 ≤ m ≤ 2",
    "m < 2"
  ],
  "answer": 0,
  "explanation": "Vì $a = 1 > 0$, BPT nghiệm đúng với mọi $x \\iff \\Delta' < 0 \\iff (-m)^2 - 4 < 0 \\iff m^2 - 4 < 0 \\iff -2 < m < 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q9",
  "question": "Bất phương trình $\\frac{x^2 - 4}{x - 1} \\ge 0$ có tập nghiệm là:",
  "options": [
    "[-2; 1) ∪ [2; +∞)",
    "[-2; 2]",
    "(1; 2]",
    "[-2; 1) ∪ (1; 2]"
  ],
  "answer": 0,
  "explanation": "Lập bảng xét dấu với các điểm mốc $-2, 1, 2$ (trong đó $x = 1$ làm mẫu không xác định). Ta được nghiệm $x \\in [-2; 1) \\cup [2; +\\infty)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b17_q10",
  "question": "Tìm $m$ để hàm số $y = \\frac{1}{\\sqrt{x^2 - 2x + m}}$ có tập xác định $D = \\mathbb{R}$:",
  "options": [
    "m > 1",
    "m ≥ 1",
    "m < 1",
    "m > 0"
  ],
  "answer": 0,
  "explanation": "Hàm số xác định trên $\\mathbb{R} \\iff x^2 - 2x + m > 0 \\ \\forall x \\in \\mathbb{R} \\iff \\Delta' = 1 - m < 0 \\iff m > 1$."
}'></div>

---

## 8. Thử thách thực tế: Dự án Phân tích Lợi nhuận Doanh nghiệp

Một cơ sở sản xuất đồ gốm sứ thủ công mỹ nghệ ước tính hàm lợi nhuận hàng tháng (triệu VNĐ) khi sản xuất và bán $x$ chiếc bình hoa là:
$$P(x) = -0,2x^2 + 80x - 6000$$
1. Tìm khoảng số lượng sản phẩm $x$ cơ sở cần bán để không bị thua lỗ ($P(x) \ge 0$).
2. Cơ sở cần bán bao nhiêu sản phẩm mỗi tháng để đạt lợi nhuận cực đại? Lợi nhuận cực đại đó là bao nhiêu?
