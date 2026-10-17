---
title: 'Toán 11 Bài 33: Đạo hàm cấp hai - Ý nghĩa cơ học của gia tốc và ứng dụng dao động'
description: 'Lý thuyết trọng tâm Bài 33 Toán 11 Kết nối tri thức: Định nghĩa đạo hàm cấp hai, ý nghĩa cơ học của gia tốc tức thời, ứng dụng trong dao động điều hòa, mô phỏng đồ thị s(t)-v(t)-a(t) tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Đạo hàm
  - Đạo hàm cấp hai
  - Gia tốc tức thời
  - Ý nghĩa cơ học
  - Dao động điều hòa
  - Kết nối tri thức
grade: 11
---

# Bài 33. Đạo hàm cấp hai

Trong Bài 31 và Bài 32, chúng ta đã biết rằng đạo hàm cấp một $f'(x)$ biểu thị **tốc độ biến thiên** của đại lượng $f(x)$ theo $x$.
- Trong hình học, $f'(x)$ là hệ số góc của tiếp tuyến.
- Trong vật lý, nếu $s(t)$ là quãng đường thì $v(t) = s'(t)$ là vận tốc tức thời.

Tuy nhiên, trong tự nhiên, chính bản thân vận tốc $v(t)$ cũng không hề đứng yên mà liên tục tăng lên (tăng tốc) hoặc giảm đi (hãm phanh). Vậy đại lượng nào đo lường **tốc độ biến thiên của chính vận tốc**?
Đó chính là **Gia tốc $a(t)$** — và về mặt giải tích toán học, nó chính là **Đạo hàm cấp hai** $s''(t)$.

Khái niệm này giữ vai trò sống còn trong toàn bộ nền cơ học cổ điển và hiện đại, gắn liền với Định luật II Newton vĩ đại:
$$\vec{F} = m \cdot \vec{a} = m \cdot s''(t)$$

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KHÁI NIỆM: ĐẠO HÀM CẤP HAI & Ý NGHĨA</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Giải tích</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Lấy đạo hàm của đạo hàm cấp một:<br>
$$\mathbf{f''(x) = (f'(x))'}$$<br>
• Kí hiệu: $y''$ hoặc $f''(x)$ hoặc $\frac{d^2y}{dx^2}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Ý nghĩa Cơ học</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $s(t)$: Quãng đường / vị trí.<br>
• $v(t) = s'(t)$: Vận tốc tức thời.<br>
• $\mathbf{a(t) = v'(t) = s''(t)}$: <strong>Gia tốc tức thời</strong>.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dao động điều hòa</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Li độ: $x(t) = A \cos(\omega t + \varphi)$.<br>
• Gia tốc:<br>
$$\mathbf{a(t) = x''(t) = -\omega^2 x(t)}$$<br>
• Gia tốc luôn tỉ lệ và ngược hướng với li độ.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Đạo hàm cấp cao</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Đạo hàm cấp 3: $f'''(x) = (f''(x))'$.<br>
• Đạo hàm cấp $n$: $f^{(n)}(x) = (f^{(n-1)}(x))'$.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Cho hàm số $f(x) = x^3$. Tính đạo hàm cấp một $f'(x)$.
2. Tiếp tục lấy đạo hàm của kết quả ở câu 1, ta được biểu thức nào?
3. Nếu một chiếc xe chuyển động với vận tốc không đổi $v(t) = 50\text{ km/h}$, thì gia tốc $a(t)$ của xe bằng bao nhiêu?
4. Một vật rơi tự do có phương trình quãng đường $s(t) = \frac{1}{2}gt^2$ ($g \approx 9.8\text{ m/s}^2$). Hãy tính đạo hàm cấp hai $s''(t)$. Giá trị này có ý nghĩa gì?
5. Cho hàm số $y = \sin x$. Đạo hàm cấp một là $\cos x$. Đạo hàm cấp hai $y''$ bằng bao nhiêu?

> [!TIP]
> **Đáp án nhanh:**
> 1. $f'(x) = 3x^2$.
> 2. $(3x^2)' = 6x$. Đây chính là đạo hàm cấp hai $f''(x) = 6x$!
> 3. Vận tốc không đổi nên gia tốc $a(t) = v'(t) = (50)' = 0$.
> 4. $s'(t) = gt \implies s''(t) = g \approx 9.8\text{ m/s}^2$. Đây chính là gia tốc trọng trường không đổi của Trái Đất!
> 5. $y'' = (\cos x)' = -\sin x$.

---

## I. Định nghĩa Đạo hàm cấp hai

### 1. Định nghĩa
Cho hàm số $y = f(x)$ có đạo hàm tại mọi điểm thuộc khoảng $(a; b)$, ta có hàm số đạo hàm $y' = f'(x)$.

> [!IMPORTANT]
> **Định nghĩa Đạo hàm cấp hai:**
> Nếu hàm số đạo hàm $y' = f'(x)$ tiếp tục có đạo hàm tại điểm $x$, thì đạo hàm của $f'(x)$ được gọi là **đạo hàm cấp hai** của hàm số ban đầu $y = f(x)$ tại điểm đó, kí hiệu là:
> $$y'' \quad \text{hoặc} \quad f''(x)$$
>
> Như vậy:
> $$\mathbf{f''(x) = [f'(x)]'}$$

### 2. Mở rộng: Đạo hàm cấp cao ($n \ge 3$)
Tương tự, ta có thể định nghĩa các đạo hàm cấp cao hơn:
- Đạo hàm cấp ba: $f'''(x) = [f''(x)]'$ (hoặc kí hiệu $f^{(3)}(x)$).
- Đạo hàm cấp bốn: $f^{(4)}(x) = [f'''(x)]'$.
- Tổng quát đạo hàm cấp $n$ ($n \in \mathbb{N}, n \ge 2$):
  $$\mathbf{f^{(n)}(x) = [f^{(n-1)}(x)]'}$$

---

## II. Ý nghĩa Cơ học của Đạo hàm cấp hai

Giả sử một chất điểm chuyển động dọc theo một đường thẳng có phương trình tọa độ vị trí theo thời gian là:
$$s = s(t)$$

1. **Vận tốc tức thời:** Là đạo hàm cấp một của quãng đường theo thời gian:
   $$v(t) = s'(t)$$
   Nó biểu thị tốc độ dịch chuyển và chiều chuyển động tại thời điểm $t$.

2. **Gia tốc tức thời:** Là đạo hàm cấp một của vận tốc theo thời gian, tức là **đạo hàm cấp hai của quãng đường**:
   $$\mathbf{a(t) = v'(t) = s''(t)}$$

> [!IMPORTANT]
> **Ý nghĩa Cơ học:**
> Gia tốc tức thời của một chuyển động tại thời điểm $t$ chính là **đạo hàm cấp hai** của phương trình chuyển động $s(t)$ tại thời điểm đó:
> $$a(t) = s''(t)$$

- Nếu $a(t) > 0$ và cùng dấu với $v(t)$: Chuyển động nhanh dần.
- Nếu $a(t)$ ngược dấu với $v(t)$: Chuyển động chậm dần.
- Nếu $a(t) = 0$: Vận tốc không đổi, chuyển động thẳng đều.
- Nếu $a(t) = \text{const} \ne 0$: Chuyển động thẳng biến đổi đều.

---

## Công cụ trực quan: Mô phỏng Dao động điều hòa & Bộ ba đồ thị s(t) - v(t) - a(t)

Trong dao động điều hòa của con lắc lò xo:
- Phương trình li độ: $x(t) = A \cos(\omega t)$
- Vận tốc tức thời: $v(t) = x'(t) = -A\omega \sin(\omega t)$ (sớm pha $\frac{\pi}{2}$ so với li độ)
- Gia tốc tức thời: $a(t) = x''(t) = -A\omega^2 \cos(\omega t) = -\omega^2 x(t)$ (ngược pha $180^\circ$ so với li độ!)

Hãy điều chỉnh tần số góc $\omega$ và biên độ $A$ bên dưới để quan sát mối quan hệ giữa ba đồ thị:

<div id="oscillation-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG QUAN HỆ ĐẠO HÀM: LI ĐỘ x(t) - VẬN TỐC v(t) - GIA TỐC a(t)</h4>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 16px; background: #f8fafc; padding: 12px; border-radius: 8px;">
    <div>
      <label style="font-weight: 600; color: #1e293b; font-size: 0.9em;">Biên độ A (cm): <span id="val-amp" style="color: #2563eb; font-weight: bold;">4.0</span></label>
      <input type="range" id="range-amp" min="1" max="6" step="0.5" value="4.0" style="width: 100%;">
    </div>
    <div>
      <label style="font-weight: 600; color: #1e293b; font-size: 0.9em;">Tần số góc ω (rad/s): <span id="val-omega" style="color: #059669; font-weight: bold;">1.0</span></label>
      <input type="range" id="range-omega" min="0.5" max="2.0" step="0.25" value="1.0" style="width: 100%;">
    </div>
  </div>

  <div style="display: flex; justify-content: center;">
    <svg data-interactive-done="true" id="osc-svg" viewBox="0 0 500 240" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
      <!-- Trục tọa độ -->
      <line x1="30" y1="120" x2="480" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="50" y1="15" x2="50" y2="225" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="470" y="115" font-family="sans-serif" font-size="11" fill="#64748b">t</text>
      
      <!-- Paths -->
      <path id="path-x" d="" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <path id="path-v" d="" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
      <path id="path-a" d="" fill="none" stroke="#ef4444" stroke-width="2"/>
    </svg>
  </div>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-top: 12px; font-size: 0.9em; font-weight: 600;">
    <span style="color: #2563eb;">── Li độ: x(t) = A·cos(ωt)</span>
    <span style="color: #059669;">╌╌ Vận tốc: v(t) = x'(t) = -Aω·sin(ωt)</span>
    <span style="color: #dc2626;">── Gia tốc: a(t) = x''(t) = -Aω²·cos(ωt)</span>
  </div>

  <div style="margin-top: 12px; padding: 10px; background: #f1f5f9; border-radius: 6px; font-size: 0.9em; color: #334155; text-align: left;">
    <strong>Quy luật cơ học cốt lõi:</strong> Gia tốc $a(t) = x''(t) = -\omega^2 x(t)$ luôn ngược pha với li độ. Khi vật ở biên dương ($x = +A$), gia tốc đạt cực tiểu âm ($a = -\omega^2 A$), kéo vật mạnh nhất về vị trí cân bằng!
  </div>
</div>

<script>
const __initApp = function() {
  const rAmp = document.getElementById('range-amp');
  const rOmega = document.getElementById('range-omega');
  const valAmp = document.getElementById('val-amp');
  const valOmega = document.getElementById('val-omega');
  const pathX = document.getElementById('path-x');
  const pathV = document.getElementById('path-v');
  const pathA = document.getElementById('path-a');

  if (!rAmp || !pathX) return;

  function render() {
    const A = parseFloat(rAmp.value);
    const w = parseFloat(rOmega.value);
    valAmp.textContent = A.toFixed(1);
    valOmega.textContent = w.toFixed(2);

    let dX = '', dV = '', dA = '';
    const originX = 50, originY = 120;
    const scaleT = 55; // 55px per second
    const scaleY = 14; // pixels per unit

    for (let px = 0; px <= 420; px += 4) {
      const t = px / scaleT;
      const xVal = A * Math.cos(w * t);
      const vVal = -A * w * Math.sin(w * t);
      const aVal = -A * w * w * Math.cos(w * t);

      const yScreenX = originY - xVal * scaleY;
      const yScreenV = originY - vVal * scaleY;
      const yScreenA = originY - aVal * scaleY;

      if (px === 0) {
        dX += `M ${originX + px} ${yScreenX}`;
        dV += `M ${originX + px} ${yScreenV}`;
        dA += `M ${originX + px} ${yScreenA}`;
      } else {
        dX += ` L ${originX + px} ${yScreenX}`;
        dV += ` L ${originX + px} ${yScreenV}`;
        dA += ` L ${originX + px} ${yScreenA}`;
      }
    }

    pathX.setAttribute('d', dX);
    pathV.setAttribute('d', dV);
    pathA.setAttribute('d', dA);
  }

  rAmp.addEventListener('input', render);
  rOmega.addEventListener('input', render);
  render();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Tính đạo hàm cấp hai của hàm số

**Bài toán 1:** Tính đạo hàm cấp hai của các hàm số sau:
a) $y = x^5 - 4x^3 + 2x - 1$  
b) $y = \frac{1}{2x - 1}$  
c) $y = \cos(3x)$  
d) $y = e^{x^2}$

**Lời giải:**
a) Tính tuần tự:
- Đạo hàm cấp một:
  $$y' = (x^5 - 4x^3 + 2x - 1)' = 5x^4 - 12x^2 + 2$$
- Đạo hàm cấp hai:
  $$y'' = (5x^4 - 12x^2 + 2)' = 20x^3 - 24x$$

b) Dạng phân thức:
- Đạo hàm cấp một (dùng $(1/u)' = -u'/u^2$):
  $$y' = -\frac{(2x - 1)'}{(2x - 1)^2} = -\frac{2}{(2x - 1)^2} = -2(2x - 1)^{-2}$$
- Đạo hàm cấp hai:
  $$y'' = [-2(2x - 1)^{-2}]' = -2 \cdot (-2)(2x - 1)^{-3} \cdot (2x - 1)' = 4(2x - 1)^{-3} \cdot 2 = \frac{8}{(2x - 1)^3}$$

c) Dạng lượng giác:
- Đạo hàm cấp một:
  $$y' = (\cos 3x)' = -3\sin(3x)$$
- Đạo hàm cấp hai:
  $$y'' = (-3\sin 3x)' = -3 \cdot 3\cos(3x) = -9\cos(3x)$$
*(Nhận xét: $y'' = -9y \iff y'' + 9y = 0$).*

d) Dạng hàm mũ:
- Đạo hàm cấp một:
  $$y' = (e^{x^2})' = (x^2)' e^{x^2} = 2x e^{x^2}$$
- Đạo hàm cấp hai (áp dụng quy tắc tích $(uv)' = u'v + uv'$):
  $$y'' = (2x)' e^{x^2} + 2x (e^{x^2})' = 2 e^{x^2} + 2x (2x e^{x^2}) = 2e^{x^2} + 4x^2 e^{x^2} = 2(1 + 2x^2)e^{x^2}$$

---

### Dạng 2: Bài toán gia tốc tức thời trong chuyển động cơ học

**Bài toán 2:** Một chất điểm chuyển động theo phương trình:
$$s(t) = t^3 - 6t^2 + 9t + 2 \quad (t \ge 0, t \text{ tính bằng giây, } s \text{ tính bằng mét})$$
a) Tìm hàm vận tốc $v(t)$ và hàm gia tốc $a(t)$ của chất điểm.  
b) Tính gia tốc tức thời của chất điểm tại thời điểm vận tốc triệt tiêu ($v(t) = 0$).  
c) Trong khoảng thời gian nào thì chất điểm chuyển động chậm dần? Nhanh dần?

**Lời giải:**
a) Vận tốc tức thời:
$$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) \quad (\text{m/s})$$
Gia tốc tức thời:
$$a(t) = v'(t) = s''(t) = 6t - 12 \quad (\text{m/s}^2)$$

b) Vận tốc triệt tiêu khi:
$$v(t) = 0 \iff 3(t^2 - 4t + 3) = 0 \iff t = 1\text{ s} \quad \text{hoặc} \quad t = 3\text{ s}$$
- Tại $t = 1\text{ s}$: Gia tốc $a(1) = 6(1) - 12 = -6\text{ m/s}^2$.
- Tại $t = 3\text{ s}$: Gia tốc $a(3) = 6(3) - 12 = 6\text{ m/s}^2$.

c) Xét dấu tích $v(t) \cdot a(t)$:
- $v(t) = 3(t - 1)(t - 3)$. Trên khoảng $(0; 1)$, $v > 0$; trên $(1; 3)$, $v < 0$; trên $(3; +\infty)$, $v > 0$.
- $a(t) = 6(t - 2)$. Với $0 \le t < 2$, $a < 0$; với $t > 2$, $a > 0$.
- **Chuyển động chậm dần** khi $v(t)$ và $a(t)$ trái dấu:
  + Khoảng $(0; 1)$: $v > 0, a < 0 \implies$ Chậm dần.
  + Khoảng $(2; 3)$: $v < 0, a > 0 \implies$ Chậm dần.
- **Chuyển động nhanh dần** khi $v(t)$ và $a(t)$ cùng dấu:
  + Khoảng $(1; 2)$: $v < 0, a < 0 \implies$ Nhanh dần theo chiều âm.
  + Khoảng $(3; +\infty)$: $v > 0, a > 0 \implies$ Nhanh dần theo chiều dương.

---

### Dạng 3: Chứng minh đẳng thức chứa đạo hàm cấp hai

**Bài toán 3:** Cho hàm số $y = e^{-x} \sin x$. Chứng minh rằng:
$$y'' + 2y' + 2y = 0$$

**Lời giải:**
Tính đạo hàm cấp một bằng quy tắc tích:
$$y' = (e^{-x})' \sin x + e^{-x} (\sin x)' = -e^{-x} \sin x + e^{-x} \cos x = e^{-x} (\cos x - \sin x)$$
Tiếp tục tính đạo hàm cấp hai:
$$y'' = [e^{-x}]' (\cos x - \sin x) + e^{-x} [\cos x - \sin x]'$$
$$= -e^{-x} (\cos x - \sin x) + e^{-x} (-\sin x - \cos x)$$
$$= e^{-x} (-\cos x + \sin x - \sin x - \cos x) = -2e^{-x} \cos x$$

Bây giờ ta thay $y, y', y''$ vào vế trái của đẳng thức:
$$VT = y'' + 2y' + 2y$$
$$= (-2e^{-x} \cos x) + 2[e^{-x} (\cos x - \sin x)] + 2[e^{-x} \sin x]$$
$$= e^{-x} [-2\cos x + 2\cos x - 2\sin x + 2\sin x] = e^{-x} \cdot 0 = 0 = VP$$
Đẳng thức được chứng minh hoàn tất!

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Đạo hàm cấp hai của hàm số f(x) được định nghĩa là:",
  "options": [
    "A. f\u0027\u0027(x) = [f\u0027(x)]\u0027",
    "B. f\u0027\u0027(x) = [f(x)]^2",
    "C. f\u0027\u0027(x) = 2 · f\u0027(x)",
    "D. f\u0027\u0027(x) = f(x) · f\u0027(x)"
  ],
  "answer": "A. f\u0027\u0027(x) = [f\u0027(x)]\u0027",
  "explanation": "Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: f\u0027\u0027(x) = (f\u0027(x))\u0027."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Đạo hàm cấp hai của hàm số y = x^4 - 2x^3 + 5x là:",
  "options": [
    "A. y\u0027\u0027 = 12x^2 - 12x",
    "B. y\u0027\u0027 = 4x^3 - 6x^2 + 5",
    "C. y\u0027\u0027 = 24x - 12",
    "D. y\u0027\u0027 = 12x^3 - 6x^2"
  ],
  "answer": "A. y\u0027\u0027 = 12x^2 - 12x",
  "explanation": "y\u0027 = 4x^3 - 6x^2 + 5 => y\u0027\u0027 = (4x^3 - 6x^2 + 5)\u0027 = 12x^2 - 12x."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Ý nghĩa cơ học của đạo hàm cấp hai s\u0027\u0027(t) của phương trình chuyển động s(t) là:",
  "options": [
    "A. Gia tốc tức thời của chuyển động",
    "B. Vận tốc tức thời của chuyển động",
    "C. Quãng đường vật đi được trong 1 giây",
    "D. Động năng của vật"
  ],
  "answer": "A. Gia tốc tức thời của chuyển động",
  "explanation": "Gia tốc tức thời a(t) = v\u0027(t) = s\u0027\u0027(t)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho hàm số y = sin x. Đạo hàm cấp hai y\u0027\u0027 bằng:",
  "options": [
    "A. -sin x",
    "B. cos x",
    "C. -cos x",
    "D. sin x"
  ],
  "answer": "A. -sin x",
  "explanation": "y\u0027 = cos x => y\u0027\u0027 = (cos x)\u0027 = -sin x."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số y = e^(2x). Đạo hàm cấp hai y\u0027\u0027 bằng:",
  "options": [
    "A. 4 e^(2x)",
    "B. 2 e^(2x)",
    "C. e^(2x)",
    "D. 4x e^(2x)"
  ],
  "answer": "A. 4 e^(2x)",
  "explanation": "y\u0027 = 2 e^(2x) => y\u0027\u0027 = 2 · 2 e^(2x) = 4 e^(2x)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một vật chuyển động thẳng có phương trình s(t) = 2t^3 - t + 3 (s tính bằng m, t tính bằng s). Gia tốc của vật tại thời điểm t = 2s là:",
  "options": [
    "A. 24 m/s^2",
    "B. 23 m/s^2",
    "C. 12 m/s^2",
    "D. 48 m/s^2"
  ],
  "answer": "A. 24 m/s^2",
  "explanation": "v(t) = s\u0027(t) = 6t^2 - 1 => a(t) = s\u0027\u0027(t) = 12t. Tại t = 2s: a(2) = 12 · 2 = 24 m/s^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Đạo hàm cấp hai của hàm số y = ln x là:",
  "options": [
    "A. -1 / x^2",
    "B. 1 / x^2",
    "C. 1 / x",
    "D. -2 / x^2"
  ],
  "answer": "A. -1 / x^2",
  "explanation": "y\u0027 = 1/x = x^(-1) => y\u0027\u0027 = -x^(-2) = -1 / x^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hàm số f(x) = (x + 1)^4. Giá trị của f\u0027\u0027(0) bằng:",
  "options": [
    "A. 12",
    "B. 4",
    "C. 24",
    "D. 1"
  ],
  "answer": "A. 12",
  "explanation": "f\u0027(x) = 4(x + 1)^3 => f\u0027\u0027(x) = 12(x + 1)^2. Tại x = 0: f\u0027\u0027(0) = 12(1)^2 = 12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một chất điểm chuyển động với vận tốc v(t) = 10 - 2t (m/s). Gia tốc của chất điểm là:",
  "options": [
    "A. a = -2 m/s^2 (chuyển động thẳng chậm dần đều)",
    "B. a = 10 m/s^2",
    "C. a = 2 m/s^2",
    "D. a = -2t m/s^2"
  ],
  "answer": "A. a = -2 m/s^2 (chuyển động thẳng chậm dần đều)",
  "explanation": "a(t) = v\u0027(t) = (10 - 2t)\u0027 = -2 m/s^2. Vì gia tốc là hằng số âm nên chuyển động là chuyển động chậm dần đều."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Đạo hàm cấp ba f\u0027\u0027\u0027(x) của hàm số f(x) = x^4 - 5x^2 là:",
  "options": [
    "A. 24x",
    "B. 12x^2 - 10",
    "C. 24",
    "D. 4x^3 - 10x"
  ],
  "answer": "A. 24x",
  "explanation": "f\u0027(x) = 4x^3 - 10x => f\u0027\u0027(x) = 12x^2 - 10 => f\u0027\u0027\u0027(x) = 24x."
}'></div>

---

## V. Ứng dụng Kỹ thuật: Phân tích Gia tốc Hãm Phanh An toàn trên Ô tô Điện

Trong thiết kế hệ thống hỗ trợ phanh khẩn cấp tự động (AEB - Autonomous Emergency Braking) trên các dòng xe điện thông minh hiện đại:

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #ef4444;">
<strong>Bài toán Kỹ thuật Ô tô:</strong><br>
Một chiếc ô tô điện đang chạy với vận tốc $72\text{ km/h}$ ($20\text{ m/s}$) thì radar phía trước phát hiện chướng ngại vật ở khoảng cách $40\text{ mét}$. Hệ thống điều khiển kích hoạt phanh tự động tạo ra phương trình quãng đường di chuyển kể từ lúc nhấn phanh là:<br>
$$s(t) = 20 t - 2.5 t^2 \quad (t \ge 0, s \text{ tính bằng mét, } t \text{ tính bằng giây})$$
1. Tìm hàm vận tốc $v(t)$ và gia tốc hãm phanh $a(t) = s''(t)$ của xe.<br>
2. Sau bao lâu kể từ lúc phanh thì xe dừng lại hoàn toàn? Quãng đường phanh là bao nhiêu mét? Xe có dừng lại kịp trước chướng ngại vật $40\text{ m}$ không?<br>
3. Tính lực hãm phanh tác động lên thân xe biết khối lượng toàn tải của xe là $m = 1\,800\text{ kg}$.
</div>

> [!TIP]
> **Giải pháp kỹ thuật cơ điện tử:**
> 1. Đạo hàm các cấp:
>    - Vận tốc tức thời: $v(t) = s'(t) = 20 - 5t\text{ (m/s)}$.
>    - Gia tốc tức thời: $a(t) = s''(t) = -5\text{ m/s}^2$ (gia tốc âm biểu thị lực hãm liên tục).
> 2. Xe dừng lại hoàn toàn khi vận tốc $v(t) = 0$:
>    $$20 - 5t = 0 \iff t = 4\text{ giây}$$
>    Quãng đường xe trượt trên đường trong 4 giây phanh là:
>    $$s(4) = 20(4) - 2.5(4)^2 = 80 - 40 = 40\text{ mét}$$
>    Xe dừng lại vừa đúng ngay sát trước chướng ngại vật ($40\text{ m}$), tránh được va chạm trong gang tấc!
> 3. Theo Định luật II Newton:
>    $$F_{hãm} = m \cdot |a| = 1800\text{ kg} \times 5\text{ m/s}^2 = 9\,000\text{ N} = 9\text{ kN}$$
>    Hệ thống phanh cần sản sinh một lực hãm tối thiểu là $9\text{ kN}$ để đảm bảo khoảng cách an toàn này.
