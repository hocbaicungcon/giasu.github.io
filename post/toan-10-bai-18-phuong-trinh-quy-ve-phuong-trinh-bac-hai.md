---
title: 'Toán 10 Bài 18: Phương trình quy về phương trình bậc hai - Phương pháp, Thử nghiệm ngoại lai & Bài tập'
description: 'Làm chủ các phương pháp giải phương trình quy về phương trình bậc hai Toán 10: Phương trình chứa căn, phương trình trùng phương, đặt ẩn phụ, kỹ thuật thử lại loại nghiệm ngoại lai, widget giải phương trình trực quan và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Đại số 10
  - Phương trình quy về bậc hai
  - Phương trình chứa căn
  - Nghiệm ngoại lai
  - Kết nối tri thức
grade: 10
---

# Bài 18. Phương trình quy về phương trình bậc hai

Nhiều bài toán vật lí, tối ưu hóa đường đi của tàu cứu hộ hay tính toán quỹ đạo trong không gian dẫn đến các phương trình chứa căn thức hoặc phương trình bậc bốn. Bằng các phép biến đổi đại số khéo léo như bình phương hai vế hoặc đặt ẩn phụ, ta có thể quy những bài toán phức tạp này về **phương trình bậc hai** quen thuộc. Trọng tâm cốt lõi của bài học là kỹ thuật biến đổi tương đương và thử lại để loại bỏ triệt để **nghiệm ngoại lai**.

---

## 1. Sơ đồ tư duy (Mindmap) Phương trình quy về bậc hai

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Dạng $\sqrt{f(x)} = \sqrt{g(x)}$</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Bước 1: Bình phương hai vế $f(x) = g(x)$.<br>
      • Bước 2: Giải tìm nghiệm $x$.<br>
      • Bước 3: Thay nghiệm vào kiểm tra (hoặc đặt điều kiện $g(x) \ge 0$).
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Dạng $\sqrt{f(x)} = g(x)$</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Điều kiện bắt buộc: $g(x) \ge 0$.<br>
      • Bình phương hai vế: $f(x) = [g(x)]^2$.<br>
      • Giải phương trình bậc hai và so sánh điều kiện.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Phương trình trùng phương</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Dạng $ax^4 + bx^2 + c = 0$ ($a \ne 0$).<br>
      • Đặt $t = x^2$ ($t \ge 0$).<br>
      • Đưa về $at^2 + bt + c = 0$, lấy nghiệm $t \ge 0 \implies x = \pm\sqrt{t}$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Nghiệm ngoại lai (Extraneous)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Phép bình phương là phép biến đổi hệ quả (không tương đương).<br>
      • Luôn phải có bước <strong>thử lại nghiệm</strong> trước khi kết luận tập nghiệm $S$.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Cảnh báo bẫy nghiệm ngoại lai

1. **Phương trình $\sqrt{x - 3} = -2$ có nghiệm không?**  
   *Đáp án:* Vô nghiệm ngay lập tức, vì căn bậc hai số học không thể nhận giá trị âm.
2. **Nếu bình phương hai vế phương trình $\sqrt{x - 3} = -2$, ta được gì?**  
   *Đáp án:* $x - 3 = 4 \implies x = 7$. Nhưng thay $x = 7$ vào: $\sqrt{4} = 2 \ne -2$! Số $7$ chính là một **nghiệm ngoại lai** sinh ra do bình phương số âm.
3. **Khi giải $\sqrt{f(x)} = \sqrt{g(x)}$, ta có cần đặt điều kiện cho cả hai biểu thức $f(x) \ge 0$ và $g(x) \ge 0$ không?**  
   *Đáp án:* Không cần cả hai, chỉ cần một trong hai (chọn biểu thức đơn giản hơn) vì khi $f(x) = g(x)$ thì biểu thức này dương sẽ kéo theo biểu thức kia dương.
4. **Phương trình $x^4 - 5x^2 + 4 = 0$ có bao nhiêu nghiệm thực?**  
   *Đáp án:* Đặt $t = x^2 \ge 0 \implies t^2 - 5t + 4 = 0 \implies t = 1$ hoặc $t = 4$. Cả hai đều thỏa mãn $t > 0 \implies x = \pm 1, x = \pm 2$ (tổng cộng 4 nghiệm thực).
5. **Cách giải an toàn và chuẩn mực nhất theo SGK Kết nối tri thức là gì?**  
   *Đáp án:* Bình phương hai vế để tìm tất cả các nghiệm tiềm năng, sau đó **thay từng nghiệm vào phương trình ban đầu** để kết luận.

---

## 3. Lý thuyết trọng tâm

### 3.1. Phương trình dạng $\sqrt{ax^2 + bx + c} = \sqrt{dx^2 + ex + f}$

> [!NOTE]
> **Quy trình giải chuẩn:**
> 1. Bình phương hai vế của phương trình để khử căn thức:
>    $$ax^2 + bx + c = dx^2 + ex + f$$
> 2. Rút gọn đưa về phương trình bậc hai hoặc bậc nhất:
>    $$(a - d)x^2 + (b - e)x + (c - f) = 0$$
> 3. Giải phương trình tìm các nghiệm $x$.
> 4. **Thử lại:** Thay các giá trị $x$ vừa tìm được vào phương trình ban đầu. Giá trị nào thỏa mãn là nghiệm của phương trình; giá trị nào không thỏa mãn là nghiệm ngoại lai và bị loại bỏ.

### 3.2. Phương trình dạng $\sqrt{ax^2 + bx + c} = dx + e$

> [!NOTE]
> **Quy trình giải chuẩn:**
> 1. Bình phương hai vế của phương trình:
>    $$ax^2 + bx + c = (dx + e)^2$$
> 2. Rút gọn và giải phương trình bậc hai thu được.
> 3. **Thử lại:** Thay các giá trị $x$ tìm được vào phương trình ban đầu (hoặc kiểm tra điều kiện $dx + e \ge 0$). Kết luận tập nghiệm chính xác.

> [!WARNING]
> Bẫy sai lầm phổ biến nhất của học sinh là **quên thử lại nghiệm** dẫn đến nhận cả nghiệm ngoại lai khiến bài thi bị trừ điểm toàn bộ câu hỏi!

### 3.3. Phương trình trùng phương

> [!NOTE]
> Phương trình trùng phương có dạng:
> $$ax^4 + bx^2 + c = 0 \quad (a \ne 0)$$
> - **Cách giải:** Đặt ẩn phụ $t = x^2$ với điều kiện $t \ge 0$.
> - Phương trình trở thành: $at^2 + bt + c = 0$.
> - Tìm nghiệm $t \ge 0$, sau đó giải $x = \pm\sqrt{t}$.

---

## 4. Widget tương tác: Máy Giải & Kiểm Tra Nghiệm Ngoại Lai

Nhập các hệ số để xem quy trình giải tự động phương trình dạng $\sqrt{ax^2 + bx + c} = dx + e$, kiểm tra điều kiện hai vế và phân loại nghiệm thật / nghiệm ngoại lai:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🔬 Giải Phương Trình Căn Thức $\sqrt{ax^2 + bx + c} = dx + e$</h3>
    <span style="font-size: 0.85rem; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Kiểm tra nghiệm ngoại lai</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px; margin-bottom: 16px;">
    <div>
      <label style="font-size: 0.8rem; font-weight: 600; color: #475569;">a:</label>
      <input type="number" id="inA" value="2" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" />
    </div>
    <div>
      <label style="font-size: 0.8rem; font-weight: 600; color: #475569;">b:</label>
      <input type="number" id="inB" value="-3" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" />
    </div>
    <div>
      <label style="font-size: 0.8rem; font-weight: 600; color: #475569;">c:</label>
      <input type="number" id="inC" value="-5" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" />
    </div>
    <div>
      <label style="font-size: 0.8rem; font-weight: 600; color: #475569;">d:</label>
      <input type="number" id="inD" value="1" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" />
    </div>
    <div>
      <label style="font-size: 0.8rem; font-weight: 600; color: #475569;">e:</label>
      <input type="number" id="inE" value="-1" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" />
    </div>
  </div>

  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
    <div style="font-weight: 600; color: #1e293b; margin-bottom: 8px;" id="dispEq">Phương trình: √(2x² - 3x - 5) = x - 1</div>
    <div style="font-size: 0.9rem; color: #64748b; line-height: 1.6;" id="dispSteps">
      • Bình phương hai vế: 2x² - 3x - 5 = (x - 1)² = x² - 2x + 1<br>
      • Thu gọn: x² - x - 6 = 0<br>
      • Nghiệm tiềm năng: x = 3 hoặc x = -2
    </div>
  </div>

  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px; padding: 12px; font-size: 0.92rem; color: #166534;" id="dispVerdict">
    <strong>Kết luận thử lại:</strong><br>
    • Thay x = 3: VT = √(2·9 - 9 - 5) = √4 = 2; VP = 3 - 1 = 2 (Thỏa mãn ✅)<br>
    • Thay x = -2: VP = -2 - 1 = -3 < 0 (Loại ❌ - Nghiệm ngoại lai)<br>
    ➔ <strong>Tập nghiệm S = {3}</strong>
  </div>
</div>

<script>
(() => {
  const inA = document.getElementById('inA');
  const inB = document.getElementById('inB');
  const inC = document.getElementById('inC');
  const inD = document.getElementById('inD');
  const inE = document.getElementById('inE');
  const dispEq = document.getElementById('dispEq');
  const dispSteps = document.getElementById('dispSteps');
  const dispVerdict = document.getElementById('dispVerdict');

  function solve() {
    const a = parseFloat(inA.value) || 0;
    const b = parseFloat(inB.value) || 0;
    const c = parseFloat(inC.value) || 0;
    const d = parseFloat(inD.value) || 0;
    const e = parseFloat(inE.value) || 0;

    dispEq.textContent = 'Phương trình: √(' + a + 'x² + (' + b + ')x + (' + c + ')) = ' + d + 'x + (' + e + ')';

    // (dx + e)^2 = d^2 x^2 + 2de x + e^2
    // ax^2 + bx + c = d^2 x^2 + 2de x + e^2
    // => (a - d^2) x^2 + (b - 2de) x + (c - e^2) = 0
    const A = a - d * d;
    const B = b - 2 * d * e;
    const C = c - e * e;

    let roots = [];
    if (Math.abs(A) < 1e-7) {
      if (Math.abs(B) > 1e-7) {
        roots = [-C / B];
      }
    } else {
      const delta = B * B - 4 * A * C;
      if (delta >= 0) {
        const r1 = (-B - Math.sqrt(delta)) / (2 * A);
        const r2 = (-B + Math.sqrt(delta)) / (2 * A);
        roots = [r1, r2];
      }
    }

    // Step display
    let stepHtml = '• Bình phương hai vế: ' + a + 'x² + (' + b + ')x + (' + c + ') = (' + d + 'x + ' + e + ')²<br>' +
                   '• Thu gọn: ' + A.toFixed(2) + 'x² + (' + B.toFixed(2) + ')x + (' + C.toFixed(2) + ') = 0<br>';

    if (roots.length === 0) {
      stepHtml += '• Phương trình sau bình phương vô nghiệm trên ℝ.';
      dispSteps.innerHTML = stepHtml;
      dispVerdict.style.background = '#fff1f2';
      dispVerdict.style.borderColor = '#e11d48';
      dispVerdict.style.color = '#9f1239';
      dispVerdict.innerHTML = '➔ <strong>Phương trình vô nghiệm: S = ∅</strong>';
      return;
    }

    stepHtml += '• Các nghiệm tiềm năng: ' + roots.map(r => 'x = ' + r.toFixed(2)).join(', ');
    dispSteps.innerHTML = stepHtml;

    // Verify
    const validRoots = [];
    let verfHtml = '<strong>Thử lại từng nghiệm vào phương trình gốc:</strong><br>';

    roots.forEach(r => {
      const underRad = a * r * r + b * r + c;
      const rhs = d * r + e;

      if (underRad < 0 || rhs < 0 || Math.abs(Math.sqrt(underRad) - rhs) > 1e-4) {
        verfHtml += '• x = ' + r.toFixed(2) + ': Vế trái = ' + (underRad >= 0 ? Math.sqrt(underRad).toFixed(2) : 'Không xđ') + ', Vế phải = ' + rhs.toFixed(2) + ' (Loại ❌ - Nghiệm ngoại lai)<br>';
      } else {
        verfHtml += '• x = ' + r.toFixed(2) + ': Cả hai vế bằng ' + rhs.toFixed(2) + ' (Thỏa mãn ✅)<br>';
        validRoots.push(r.toFixed(2));
      }
    });

    if (validRoots.length > 0) {
      dispVerdict.style.background = '#f0fdf4';
      dispVerdict.style.borderColor = '#16a34a';
      dispVerdict.style.color = '#166534';
      verfHtml += '➔ <strong>Tập nghiệm: S = {' + validRoots.join('; ') + '}</strong>';
    } else {
      dispVerdict.style.background = '#fff1f2';
      dispVerdict.style.borderColor = '#e11d48';
      dispVerdict.style.color = '#9f1239';
      verfHtml += '➔ <strong>Phương trình vô nghiệm: S = ∅</strong>';
    }
    dispVerdict.innerHTML = verfHtml;
  }

  [inA, inB, inC, inD, inE].forEach(inp => inp.addEventListener('input', solve));
  solve();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Giải phương trình $\sqrt{f(x)} = \sqrt{g(x)}$

#### Phương pháp giải:
1. Bình phương hai vế: $f(x) = g(x)$.
2. Rút gọn giải phương trình tìm các nghiệm tiềm năng.
3. Thử lại từng nghiệm vào phương trình ban đầu để kết luận.

#### Bài toán 1
Giải phương trình:
$$\sqrt{3x^2 - 6x + 1} = \sqrt{-2x^2 - x + 3}$$

#### Lời giải:
1. Bình phương hai vế phương trình, ta được:
   $$3x^2 - 6x + 1 = -2x^2 - x + 3$$
2. Chuyển vế thu gọn:
   $$5x^2 - 5x - 2 = 0$$
   Phương trình có $\Delta = (-5)^2 - 4(5)(-2) = 25 + 40 = 65 > 0$.
   Hai nghiệm là:
   $$x_1 = \frac{5 - \sqrt{65}}{10} \approx -0,306; \quad x_2 = \frac{5 + \sqrt{65}}{10} \approx 1,306$$
3. Thử lại:
   - Với $x_1 = \frac{5 - \sqrt{65}}{10}$: Thay vào $-2x_1^2 - x_1 + 3 \approx 3,119 > 0$ (Thỏa mãn).
   - Với $x_2 = \frac{5 + \sqrt{65}}{10}$: Thay vào $-2x_2^2 - x_2 + 3 \approx -1,719 < 0$ (Loại, vì biểu thức dưới căn bị âm).

**Kết luận:** Phương trình có nghiệm duy nhất $x = \frac{5 - \sqrt{65}}{10}$.

---

### Dạng 2: Giải phương trình $\sqrt{f(x)} = g(x)$

#### Phương pháp giải:
1. Bình phương hai vế: $f(x) = [g(x)]^2$.
2. Rút gọn và giải phương trình bậc hai.
3. Thử lại nghiệm vào phương trình gốc để loại nghiệm ngoại lai.

#### Bài toán 2
Giải phương trình:
$$\sqrt{2x^2 + 5x - 3} = x + 3$$

#### Lời giải:
1. Bình phương hai vế của phương trình:
   $$2x^2 + 5x - 3 = (x + 3)^2$$
   $$2x^2 + 5x - 3 = x^2 + 6x + 9$$
2. Chuyển vế rút gọn:
   $$x^2 - x - 12 = 0$$
   Phương trình có hai nghiệm:
   $$x = 4 \quad \text{hoặc} \quad x = -3$$
3. Thử lại vào phương trình ban đầu:
   - Với $x = 4$: Vế trái $= \sqrt{2(16) + 5(4) - 3} = \sqrt{49} = 7$; Vế phải $= 4 + 3 = 7$. Thỏa mãn!
   - Với $x = -3$: Vế trái $= \sqrt{2(9) + 5(-3) - 3} = \sqrt{0} = 0$; Vế phải $= -3 + 3 = 0$. Thỏa mãn!

**Kết luận:** Phương trình có hai nghiệm phân biệt là $x = -3$ và $x = 4$. Tập nghiệm $S = \{-3; 4\}$.

---

### Dạng 3: Phương trình trùng phương và đặt ẩn phụ

#### Phương pháp giải:
- Phương trình trùng phương $ax^4 + bx^2 + c = 0$: Đặt $t = x^2 \ge 0$.
- Phương trình chứa căn đồng dạng: Đặt $t = \sqrt{u(x)} \ge 0$.

#### Bài toán 3
Giải phương trình:
$$x^2 - 4x + 6 = 2\sqrt{x^2 - 4x + 3}$$

#### Lời giải:
1. Đặt ẩn phụ $t = \sqrt{x^2 - 4x + 3}$ (điều kiện: $t \ge 0$).
   Khi đó $t^2 = x^2 - 4x + 3 \implies x^2 - 4x + 6 = t^2 + 3$.
2. Phương trình đã cho trở thành:
   $$t^2 + 3 = 2t \iff t^2 - 2t + 3 = 0$$
3. Xét phương trình ẩn $t$:
   $\Delta' = (-1)^2 - 1(3) = 1 - 3 = -2 < 0$.
   Phương trình ẩn $t$ vô nghiệm trên $\mathbb{R}$.

**Kết luận:** Phương trình ban đầu vô nghiệm: $S = \emptyset$.

---

### Dạng 4: Bài toán vận tốc và cứu hộ trên biển

#### Phương pháp giải:
Sử dụng công thức thời gian $t = \frac{s}{v}$ và định lí Pythagore để thiết lập phương trình chứa căn bậc hai theo biến vị trí $x$.

#### Bài toán 4
Một trạm cứu hộ bờ biển đặt tại điểm $A$ cách bờ biển thẳng một khoảng $AH = 3\text{ km}$. Một chiếc tàu gặp nạn tại vị trí $B$ ngoài biển cách bờ một khoảng $BK = 5\text{ km}$. Khoảng cách dọc theo bờ biển $HK = 12\text{ km}$. Đội cứu hộ đi ca-nô chạy trên biển với vận tốc $30\text{ km/h}$ và chạy xe chuyên dụng trên bờ cát với vận tốc $50\text{ km/h}$.
Để đến ứng cứu tàu $B$ trong thời gian ngắn nhất, đội cứu hộ chạy xe từ $A$ đến $H$, sau đó đi dọc bờ cát một đoạn $HM = x$ ($\text{km}$, $0 \le x \le 12$), rồi phóng ca-nô thẳng từ $M$ đến $B$.
1. Biểu diễn thời gian cứu hộ $T(x)$ (giờ) theo $x$.
2. Biết rằng thời gian đạt cực tiểu khi $x$ thỏa mãn phương trình:
   $$\frac{1}{50} = \frac{12 - x}{30\sqrt{(12 - x)^2 + 25}}$$
   Hãy giải phương trình trên để tìm vị trí cập bờ $M$.

#### Lời giải:
1. Khoảng cách ca-nô chạy trên biển:
   $$MB = \sqrt{MK^2 + BK^2} = \sqrt{(12 - x)^2 + 5^2} = \sqrt{(12 - x)^2 + 25}$$
   Thời gian chạy xe: $t_1 = \frac{AH + HM}{50} = \frac{3 + x}{50}$.
   Thời gian đi ca-nô: $t_2 = \frac{MB}{30} = \frac{\sqrt{(12 - x)^2 + 25}}{30}$.
   Tổng thời gian: $T(x) = \frac{3 + x}{50} + \frac{\sqrt{(12 - x)^2 + 25}}{30}$.
2. Giải phương trình:
   $$\frac{1}{50} = \frac{12 - x}{30\sqrt{(12 - x)^2 + 25}} \iff 3\sqrt{(12 - x)^2 + 25} = 5(12 - x)$$
   Đặt $u = 12 - x$ với $0 \le u \le 12$:
   $$3\sqrt{u^2 + 25} = 5u$$
   Bình phương hai vế ($u \ge 0$ hiển nhiên thỏa mãn):
   $$9(u^2 + 25) = 25u^2 \iff 9u^2 + 225 = 25u^2 \iff 16u^2 = 225$$
   $$u^2 = \frac{225}{16} \implies u = \frac{15}{4} = 3,75\text{ km} \quad (\text{vì } u \ge 0)$$
   Suy ra:
   $$12 - x = 3,75 \implies x = 12 - 3,75 = 8,25\text{ km}$$

**Kết luận:** Đội cứu hộ cần chạy xe dọc bờ một đoạn $8,25\text{ km}$ rồi mới xuất phát ca-nô ra biển để tiếp cận con tàu nhanh nhất.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Nguyên lí Fermat trong quang hình học:** Tia sáng truyền giữa hai môi trường khác nhau (như từ không khí vào nước) luôn chọn con đường tốn ít thời gian nhất. Bài toán tìm điểm khúc xạ trên mặt phân cách dẫn thẳng đến phương trình chứa căn bậc hai.
2. **Hệ thống dẫn đường GPS & Giao cắt hình học:** Máy thu GPS nhận tín hiệu từ vệ tinh và giải hệ phương trình khoảng cách Euclide chứa căn thức $\sqrt{(x - x_i)^2 + (y - y_i)^2 + (z - z_i)^2} = c(t - t_i)$ để xác định vị trí kinh độ, vĩ độ và độ cao mặt đất.
3. **Quy hoạch đường ống dầu khí xuyên biển:** Kỹ sư thiết kế đường ống từ giàn khoan ngoài khơi vào bờ nối đến nhà máy lọc dầu luôn giải phương trình chứa căn để tìm điểm tiếp bờ tối ưu hóa tổng chi phí vật liệu.
4. **Hệ thống Radar cảnh báo va chạm tự động (ADAS) trên ô tô:** Radar tính toán khoảng cách tương đối giữa hai xe di chuyển theo hai trục vuông góc nhau $d(t) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$. Phương trình $d(t) \le d_{safe}$ quyết định thời điểm kích hoạt phanh khẩn cấp tự động.
5. **Cơ học vật liệu & Điểm nứt mỏi:** Phương trình tính hệ số cường độ ứng suất tại đầu vết nứt trong cánh máy bay phụ thuộc vào hàm căn thức chiều dài vết nứt $K = \sigma\sqrt{\pi a}$, quyết định số giờ bay an toàn trước khi phải bảo dưỡng.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q1",
  "question": "Nghiệm của phương trình $\\sqrt{2x - 3} = \\sqrt{x + 2}$ là:",
  "options": [
    "x = 5",
    "x = -1",
    "x = 1",
    "Phương trình vô nghiệm"
  ],
  "answer": 0,
  "explanation": "Bình phương hai vế: $2x - 3 = x + 2 \\iff x = 5$. Thay $x = 5$ vào thấy thỏa mãn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q2",
  "question": "Phương trình $\\sqrt{x^2 - 3x + 2} = x - 1$ có bao nhiêu nghiệm thực?",
  "options": [
    "2",
    "1",
    "0",
    "3"
  ],
  "answer": 0,
  "explanation": "Bình phương hai vế: $x^2 - 3x + 2 = (x - 1)^2 = x^2 - 2x + 1 \\iff -x = -1 \\iff x = 1$. Thay $x = 1$ vào: VT = 0, VP = 0 (thỏa mãn). Vậy phương trình có duy nhất 1 nghiệm thực là $x = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q3",
  "question": "Số nghiệm của phương trình $\\sqrt{x^2 - 4} = x - 2$ là:",
  "options": [
    "1",
    "2",
    "0",
    "Vô số nghiệm"
  ],
  "answer": 0,
  "explanation": "Bình phương: $x^2 - 4 = x^2 - 4x + 4 \\iff 4x = 8 \\iff x = 2$. Thử lại $x = 2$: VT = 0, VP = 0 (Thỏa mãn). Phương trình có 1 nghiệm duy nhất."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q4",
  "question": "Phương trình $\\sqrt{x + 1} = x - 1$ có nghiệm là:",
  "options": [
    "x = 3",
    "x = 0",
    "x = 0 và x = 3",
    "Phương trình vô nghiệm"
  ],
  "answer": 0,
  "explanation": "Bình phương: $x + 1 = x^2 - 2x + 1 \\iff x^2 - 3x = 0 \\iff x = 0$ hoặc $x = 3$. Thử lại: $x = 0 \\implies$ VP = -1 < 0 (Loại). $x = 3 \\implies$ VT = 2, VP = 2 (Nhận). Nghiệm duy nhất $x = 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q5",
  "question": "Phương trình $x^4 - 10x^2 + 9 = 0$ có tất cả bao nhiêu nghiệm thực?",
  "options": [
    "4",
    "2",
    "1",
    "0"
  ],
  "answer": 0,
  "explanation": "Đặt $t = x^2 \\ge 0 \\implies t^2 - 10t + 9 = 0 \\iff t = 1$ hoặc $t = 9$. Do đó $x = \\pm 1$ và $x = \\pm 3$ (tổng cộng 4 nghiệm thực)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q6",
  "question": "Phương trình $\\sqrt{3x^2 - 9x + 1} = x - 2$ có bao nhiêu nghiệm thực?",
  "options": [
    "0",
    "1",
    "2",
    "3"
  ],
  "answer": 0,
  "explanation": "Bình phương: $3x^2 - 9x + 1 = x^2 - 4x + 4 \\iff 2x^2 - 5x - 3 = 0 \\iff x = 3$ hoặc $x = -1/2$. Thử lại: với $x = -1/2$, VP = $-2,5 < 0$ (Loại). Với $x = 3$, VT = $\\sqrt{27 - 27 + 1} = 1$, VP = $3 - 2 = 1$ (Nhận). Vậy phương trình có 1 nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q7",
  "question": "Tổng các nghiệm của phương trình $\\sqrt{x^2 - 2x - 3} = \\sqrt{x + 1}$ bằng:",
  "options": [
    "4",
    "-1",
    "3",
    "0"
  ],
  "answer": 0,
  "explanation": "Bình phương: $x^2 - 2x - 3 = x + 1 \\iff x^2 - 3x - 4 = 0 \\iff x = -1$ hoặc $x = 4$. Thử lại: cả hai đều thỏa mãn. Tổng các nghiệm: $(-1) + 4 = 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q8",
  "question": "Tập nghiệm của phương trình $x^4 + 3x^2 - 4 = 0$ là:",
  "options": [
    "S = {-1; 1}",
    "S = {-2; 2}",
    "S = {-2; -1; 1; 2}",
    "S = ∅"
  ],
  "answer": 0,
  "explanation": "Đặt $t = x^2 \\ge 0 \\implies t^2 + 3t - 4 = 0 \\iff t = 1$ (nhận) hoặc $t = -4$ (loại vì âm). $x^2 = 1 \\implies x = \\pm 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q9",
  "question": "Khi giải phương trình $\\sqrt{f(x)} = g(x)$, tại sao ta có thể nhận phải nghiệm ngoại lai?",
  "options": [
    "Vì phép bình phương hai vế chỉ là phép biến đổi hệ quả",
    "Vì phương trình bậc hai luôn có 2 nghiệm",
    "Do máy tính làm tròn số",
    "Do điều kiện f(x) ≥ 0 bị vi phạm"
  ],
  "answer": 0,
  "explanation": "$A = B \\implies A^2 = B^2$ là phép biến đổi một chiều (hệ quả). Nó cũng bao hàm cả trường hợp $A = -B$, do đó có thể sinh ra nghiệm không thỏa mãn phương trình gốc."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c6_b18_q10",
  "question": "Tích các nghiệm của phương trình $\\sqrt{x^2 - 3x + 2} = \\sqrt{2x - 4}$ là:",
  "options": [
    "6",
    "2",
    "3",
    "5"
  ],
  "answer": 0,
  "explanation": "Bình phương: $x^2 - 3x + 2 = 2x - 4 \\iff x^2 - 5x + 6 = 0 \\iff x = 2$ hoặc $x = 3$. Thử lại: cả hai đều thỏa mãn. Tích hai nghiệm: $2 \\times 3 = 6$."
}'></div>

---

## 8. Thử thách thực tế: Dự án Trạm sạc xe điện tối ưu trên cao tốc

Một tuyến đường cao tốc chạy thẳng dọc trục $Ox$. Hai đô thị thông minh $A(0; 4)$ và $B(12; 6)$ nằm cùng một phía so với đường cao tốc (đơn vị: $\text{km}$).
Chính quyền muốn xây dựng một trạm sạc xe điện nhanh tại điểm $M(x; 0)$ trên cao tốc sao cho tổng chiều dài đường dây cấp điện $L = MA + MB$ đạt giá trị nhỏ nhất:
1. Viết biểu thức tổng khoảng cách $L(x) = \sqrt{x^2 + 16} + \sqrt{(12 - x)^2 + 36}$.
2. Dùng phương pháp đối xứng qua trục hoành để tìm tọa độ tối ưu của điểm $M$.
3. Kiểm tra lại bằng cách giải phương trình đạo hàm triệt tiêu: $\frac{x}{\sqrt{x^2 + 16}} = \frac{12 - x}{\sqrt{(12 - x)^2 + 36}}$.
