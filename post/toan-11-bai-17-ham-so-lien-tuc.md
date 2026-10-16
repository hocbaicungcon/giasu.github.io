---
title: 'Toán 11 Bài 17: Hàm số liên tục - Định nghĩa, tính chất và định lý giá trị trung gian'
description: 'Lý thuyết trọng tâm Bài 17 Toán 11 Kết nối tri thức: Khái niệm hàm số liên tục tại một điểm, trên một khoảng/đoạn, các định lý về tính liên tục của hàm số sơ cấp, định lý Bolzano-Cauchy (sự tồn tại nghiệm của phương trình) kèm mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hàm số liên tục
  - Gián đoạn
  - Định lý giá trị trung gian
  - Nghiệm phương trình
  - Bolzano-Cauchy
  - Kết nối tri thức
grade: 11
---

# Bài 17. Hàm số liên tục

Trong thế giới tự nhiên, phần lớn các quá trình vật lý diễn ra một cách êm đềm, không có những bước nhảy đột ngột:
- Một chiếc máy bay cất cánh từ mặt đất lên độ cao $10\,000\,m$, độ cao của nó tăng dần liên tục và chắc chắn phải đi qua mọi độ cao trung gian (như $3\,000\,m, 5\,000\,m, 8\,500\,m$).
- Nhiệt độ ngoài trời lúc 6 giờ sáng là $18^\circ\text{C}$ và lúc 12 giờ trưa là $32^\circ\text{C}$, thì chắc chắn trong khoảng thời gian đó, có ít nhất một thời điểm nhiệt độ đạt đúng $25^\circ\text{C}$.
- Một vận động viên chạy cự ly $100\,m$, quãng đường di chuyển là một hàm số liên tục theo thời gian, không bao giờ có chuyện "biến mất ở vạch $30\,m$ rồi tức thời hiện ra ở vạch $60\,m$".

Về mặt trực quan hình học, đồ thị của một **hàm số liên tục** là một đường liền nét trơn tru, không bị đứt đoạn, không bị thủng lỗ và không bị nhảy bậc! Bài học này sẽ giúp các em nắm vững định nghĩa chuẩn xác của tính liên tục và một công cụ cực kỳ lợi hại: **Định lý giá trị trung gian** để chứng minh sự tồn tại nghiệm của các phương trình đại số phức tạp.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HÀM SỐ LIÊN TỤC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Liên tục tại một điểm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $f(x)$ liên tục tại $x_0 \iff \lim_{x \to x_0} f(x) = f(x_0)$.<br>• Đủ 3 điều kiện: $x_0 \in D$, tồn tại $\lim_{x \to x_0} f(x)$, và giới hạn bằng đúng $f(x_0)$.<br>• Không thỏa mãn $\Rightarrow$ gián đoạn tại $x_0$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Liên tục trên khoảng, đoạn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Trên $(a; b)$:</strong> Liên tục tại mọi điểm thuộc khoảng.<br>• <strong>Trên $[a; b]$:</strong> Liên tục trên $(a; b)$, liên tục phải tại $a$ ($\lim_{x \to a^+} = f(a)$) và liên tục trái tại $b$ ($\lim_{x \to b^-} = f(b)$).<br>• Đồ thị là đường nét liền không nhấc bút.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất hàm sơ cấp</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hàm đa thức, phân thức hữu tỉ, căn thức, lượng giác ($\sin, \cos, \tan, \cot$) liên tục trên từng khoảng xác định của chúng.<br>• Tổng, hiệu, tích, thương của các hàm liên tục là hàm liên tục.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Định lý Bolzano-Cauchy</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $f(x)$ liên tục trên $[a; b]$ và $f(a) \cdot f(b) < 0$ thì tồn tại ít nhất một số $c \in (a; b)$ sao cho $f(c) = 0$.<br>• Ứng dụng: Chứng minh phương trình $f(x) = 0$ có nghiệm mà không cần giải trực tiếp.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm nét liền:** Khi vẽ đồ thị của hàm số $y = x^2$, em có phải nhấc bút lên khỏi mặt giấy không?
2. **Điểm gián đoạn:** Hàm số $f(x) = \frac{1}{x}$ có xác định tại $x = 0$ không? Đồ thị của nó có liền nét qua trục tung không?
3. **Kiểm tra 3 điều kiện:** Để $f(x)$ liên tục tại $x = 2$, giá trị của $\lim_{x \to 2} f(x)$ phải bằng đại lượng nào?
4. **Hàm đa thức:** Hàm số bậc ba $y = 2x^3 - 5x + 1$ liên tục trên tập hợp số nào?
5. **Dấu trái ngược:** Nếu một hàm số liên tục trên $[1; 3]$ có $f(1) = -4$ (dưới trục hoành) và $f(3) = 5$ (trên trục hoành), đồ thị của nó có bắt buộc phải cắt trục hoành ít nhất một lần không?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Không, đồ thị parabol $y = x^2$ là một đường cong trơn tru, liên tục trên toàn bộ $\mathbb{R}$.
> 2. Tại $x = 0$ hàm số không xác định; đồ thị bị xé rách thành hai nhánh riêng biệt (gián đoạn tại $x = 0$).
> 3. Phải bằng đúng giá trị $f(2)$.
> 4. Liên tục trên toàn bộ tập số thực $\mathbb{R}$.
> 5. Chắc chắn có! Để đi từ điểm dưới trục hoành lên điểm trên trục hoành mà không nhấc bút, đồ thị bắt buộc phải cắt trục hoành (Định lý Bolzano).

---

## I. Khái niệm Hàm số liên tục

### 1. Hàm số liên tục tại một điểm

Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và điểm $x_0 \in (a; b)$.  
Hàm số $f(x)$ được gọi là **liên tục tại điểm $x_0$** nếu:
$$\lim_{x \to x_0} f(x) = f(x_0)$$

> [!IMPORTANT]
> **Bộ 3 điều kiện kiểm tra tính liên tục tại $x_0$:**
> Để kết luận $f(x)$ liên tục tại $x_0$, ta phải kiểm tra đủ 3 bước:
> 1. Hàm số xác định tại $x_0$ (tức là $x_0 \in D$, tính được giá trị $f(x_0)$).
> 2. Tồn tại giới hạn hữu hạn $\lim_{x \to x_0} f(x)$ (nghĩa là $\lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = L$).
> 3. Giới hạn vừa tìm được phải bằng đúng giá trị hàm số: $L = f(x_0)$.  
> Nếu vi phạm bất kỳ điều kiện nào trong 3 điều kiện trên, ta kết luận hàm số **gián đoạn tại $x_0$**.

**Ví dụ 1:** Xét tính liên tục của hàm số $f(x) = \begin{cases} \frac{x^2 - 4}{x - 2} & \text{khi } x \ne 2 \\ 4 & \text{khi } x = 2 \end{cases}$ tại điểm $x_0 = 2$.  
*Giải:*
- Bước 1: $f(2) = 4$.
- Bước 2: Tính $\lim_{x \to 2} f(x) = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4$.
- Bước 3: So sánh: $\lim_{x \to 2} f(x) = f(2) = 4$.  
Vậy hàm số $f(x)$ **liên tục tại điểm $x = 2$**. Điểm thủng tại $x = 2$ đã được "lấp đầy" hoàn hảo bởi giá trị $f(2) = 4$!

---

### 2. Hàm số liên tục trên một khoảng, trên một đoạn

- Hàm số $y = f(x)$ được gọi là **liên tục trên khoảng $(a; b)$** nếu nó liên tục tại mọi điểm thuộc khoảng đó.
- Hàm số $y = f(x)$ được gọi là **liên tục trên đoạn $[a; b]$** nếu:
  1. Nó liên tục trên khoảng $(a; b)$.
  2. Nó **liên tục bên phải** tại điểm $a$: $\lim_{x \to a^+} f(x) = f(a)$.
  3. Nó **liên tục bên trái** tại điểm $b$: $\lim_{x \to b^-} f(x) = f(b)$.

---

## II. Các Định lý Cơ bản về Tính liên tục

### 1. Tính liên tục của các hàm số sơ cấp cơ bản

> [!NOTE]
> **Định lý 1 (Các hàm số sơ cấp):**
> 1. **Hàm đa thức:** $P(x) = a_n x^n + \dots + a_1 x + a_0$ liên tục trên toàn bộ tập số thực $\mathbb{R}$.
> 2. **Hàm phân thức hữu tỉ:** $f(x) = \frac{P(x)}{Q(x)}$ liên tục trên từng khoảng xác định của nó (tại mọi $x$ mà $Q(x) \ne 0$).
> 3. **Hàm căn thức:** $f(x) = \sqrt{x}$ liên tục trên nửa khoảng $[0; +\infty)$.
> 4. **Các hàm số lượng giác:**
>    - $y = \sin x$ và $y = \cos x$ liên tục trên $\mathbb{R}$.
>    - $y = \tan x$ liên tục trên các khoảng $\left(-\frac{\pi}{2} + k\pi; \frac{\pi}{2} + k\pi\right), k \in \mathbb{Z}$.
>    - $y = \cot x$ liên tục trên các khoảng $(k\pi; \pi + k\pi), k \in \mathbb{Z}$.

### 2. Các phép toán trên hàm số liên tục

> [!NOTE]
> **Định lý 2 (Đại số các hàm liên tục):**
> Giả sử hai hàm số $y = f(x)$ và $y = g(x)$ cùng liên tục tại điểm $x_0$. Khi đó:
> - Các hàm số $f(x) + g(x)$, $f(x) - g(x)$, $f(x) \cdot g(x)$ đều liên tục tại $x_0$.
> - Hàm số $\frac{f(x)}{g(x)}$ liên tục tại $x_0$ nếu $g(x_0) \ne 0$.

---

## III. Phòng thí nghiệm Tương tác: Định lý Bolzano & Sự tồn tại Nghiệm

Định lý Bolzano-Cauchy khẳng định: Nếu một hàm số liên tục đổi dấu từ âm sang dương trên đoạn $[a; b]$, đồ thị của nó bắt buộc phải cắt trục hoành $y = 0$ tại ít nhất một điểm nghiệm $c \in (a; b)$!

Hãy chọn hàm số, kéo 2 mút $[a, b]$ để kiểm tra điều kiện $f(a) \cdot f(b) < 0$ và bấm nút "Thu hẹp nhị phân" để quan sát thuật toán tìm nghiệm từng bước!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px;">
    <label style="font-weight: 600; color: var(--text-color, #1e293b);">Chọn phương trình:</label>
    <select id="eqSelect" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; font-size: 15px;">
      <option value="cubic">1. f(x) = x^3 - 3x + 1 = 0</option>
      <option value="fifth">2. f(x) = x^5 - 5x - 1 = 0</option>
      <option value="cos">3. f(x) = cos(x) - x = 0</option>
    </select>
    <button id="bisectBtn" style="padding: 6px 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Thu hẹp nhị phân (Chia đôi)</button>
    <button id="resetBtn" style="padding: 6px 14px; background: #64748b; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Đặt lại mút</button>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600;">Mút trái $a$: <span id="aDisplay" style="color: #2563eb;">-2.00</span></label>
      <input id="aSlider" type="range" min="-300" max="300" value="-200" style="width: 100%; cursor: pointer;">
    </div>
    <div>
      <label style="font-weight: 600;">Mút phải $b$: <span id="bDisplay" style="color: #dc2626;">0.50</span></label>
      <input id="bSlider" type="range" min="-300" max="300" value="50" style="width: 100%; cursor: pointer;">
    </div>
  </div>

  <div style="overflow-x: auto;">
    <svg id="rootSvg" viewBox="0 0 700 320" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="rootStat" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang phân tích định lý giá trị trung gian...
  </div>
</div>

<script>
(function() {
  const select = document.getElementById('eqSelect');
  const aSlider = document.getElementById('aSlider');
  const bSlider = document.getElementById('bSlider');
  const aDisplay = document.getElementById('aDisplay');
  const bDisplay = document.getElementById('bDisplay');
  const bisectBtn = document.getElementById('bisectBtn');
  const resetBtn = document.getElementById('resetBtn');
  const svg = document.getElementById('rootSvg');
  const stat = document.getElementById('rootStat');

  function evalFn(type, x) {
    if (type === 'cubic') return x * x * x - 3 * x + 1;
    if (type === 'fifth') return Math.pow(x, 5) - 5 * x - 1;
    if (type === 'cos') return Math.cos(x) - x;
    return 0;
  }

  function getInitInterval(type) {
    if (type === 'cubic') return { a: -2.0, b: 0.5 };
    if (type === 'fifth') return { a: 1.0, b: 2.0 };
    if (type === 'cos') return { a: 0.0, b: 1.5 };
    return { a: -2, b: 2 };
  }

  function render() {
    const type = select.value;
    let a = aSlider.value / 100;
    let b = bSlider.value / 100;
    if (a > b) { const tmp = a; a = b; b = tmp; }
    if (b - a < 0.05) b = a + 0.05;

    aDisplay.textContent = a.toFixed(2);
    bDisplay.textContent = b.toFixed(2);

    const xMin = -3.0, xMax = 3.0;
    let yMin = -6.0, yMax = 6.0;
    if (type === 'cos') { yMin = -2.5; yMax = 2.5; }

    const padL = 50, padR = 30, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 320 - padT - padB;

    const toX = x => padL + ((x - xMin) / (xMax - xMin)) * W;
    const toY = y => padT + H - ((y - yMin) / (yMax - yMin)) * H;

    let html = '';

    // Trục toạ độ
    const y0 = toY(0);
    const xZero = toX(0);
    html += `<line x1="${padL}" y1="${y0}" x2="${padL + W + 15}" y2="${y0}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL + W + 10}" y="${y0 + 20}" font-size="12" fill="#475569" font-weight="600">x</text>`;
    html += `<line x1="${xZero}" y1="${padT - 10}" x2="${xZero}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${xZero - 10}" y="${padT - 12}" font-size="12" fill="#475569" font-weight="600" text-anchor="end">y</text>`;

    // Vùng khoảng [a, b]
    const ax = toX(a), bx = toX(b);
    html += `<rect x="${ax}" y="${padT}" width="${bx - ax}" height="${H}" fill="#3b82f6" fill-opacity="0.08"/>`;

    // Vẽ đường cong f(x)
    const samples = 250;
    let path = '';
    for (let i = 0; i <= samples; i++) {
      const x = xMin + (i / samples) * (xMax - xMin);
      const y = evalFn(type, x);
      const px = toX(x);
      const py = Math.max(padT, Math.min(padT + H, toY(y)));
      if (i === 0) path += `M ${px} ${py}`;
      else path += ` L ${px} ${py}`;
    }
    html += `<path d="${path}" fill="none" stroke="#2563eb" stroke-width="2.5"/>`;

    // Điểm tại a và b
    const fa = evalFn(type, a);
    const fb = evalFn(type, b);
    const ay = toY(fa), by = toY(fb);

    html += `<line x1="${ax}" y1="${y0}" x2="${ax}" y2="${ay}" stroke="#2563eb" stroke-dasharray="3,3" stroke-width="1.5"/>`;
    html += `<circle cx="${ax}" cy="${ay}" r="6" fill="#2563eb" stroke="#fff" stroke-width="2"/>`;
    html += `<text x="${ax}" y="${y0 + 18}" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">a = ${a.toFixed(2)}</text>`;

    html += `<line x1="${bx}" y1="${y0}" x2="${bx}" y2="${by}" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5"/>`;
    html += `<circle cx="${bx}" cy="${by}" r="6" fill="#dc2626" stroke="#fff" stroke-width="2"/>`;
    html += `<text x="${bx}" y="${y0 + 18}" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">b = ${b.toFixed(2)}</text>`;

    svg.innerHTML = html;

    const prod = fa * fb;
    let statusMsg = '';
    if (prod < 0) {
      statusMsg = `<span style="color:#047857; font-weight:bold;">✓ Thỏa mãn điều kiện Bolzano: $f(a) = ${fa.toFixed(3)}$ và $f(b) = ${fb.toFixed(3)}$ trái dấu ($f(a) \\cdot f(b) < 0$).<br>Đồ thị hàm số liên tục cắt trục hoành tại ít nhất một nghiệm $c \\in (${a.toFixed(2)}; ${b.toFixed(2)})$!</span>`;
    } else {
      statusMsg = `<span style="color:#d97706; font-weight:bold;">⚠ Chưa thỏa mãn trái dấu: $f(a) = ${fa.toFixed(3)}$ và $f(b) = ${fb.toFixed(3)}$ cùng dấu ($f(a) \\cdot f(b) = ${prod.toFixed(3)} \\ge 0$).<br>Hãy điều chỉnh lại mút $a$ hoặc $b$ để đồ thị nằm ở hai phía của trục hoành!</span>`;
    }
    stat.innerHTML = `<strong>Khoảng khảo sát $[${a.toFixed(2)}; ${b.toFixed(2)}]$:</strong> $f(a) = ${fa.toFixed(3)}$, $f(b) = ${fb.toFixed(3)}$.<br>${statusMsg}`;
  }

  bisectBtn.addEventListener('click', () => {
    const type = select.value;
    let a = aSlider.value / 100;
    let b = bSlider.value / 100;
    if (a > b) { const t = a; a = b; b = t; }
    const fa = evalFn(type, a);
    const fb = evalFn(type, b);
    if (fa * fb >= 0) {
      alert("f(a) và f(b) chưa trái dấu! Hãy kéo thanh trượt để chọn khoảng có tích f(a)*f(b) < 0 trước.");
      return;
    }
    const mid = (a + b) / 2;
    const fmid = evalFn(type, mid);
    if (fa * fmid < 0) {
      b = mid;
    } else {
      a = mid;
    }
    aSlider.value = Math.round(a * 100);
    bSlider.value = Math.round(b * 100);
    render();
  });

  resetBtn.addEventListener('click', () => {
    const init = getInitInterval(select.value);
    aSlider.value = Math.round(init.a * 100);
    bSlider.value = Math.round(init.b * 100);
    render();
  });

  select.addEventListener('change', () => {
    const init = getInitInterval(select.value);
    aSlider.value = Math.round(init.a * 100);
    bSlider.value = Math.round(init.b * 100);
    render();
  });

  aSlider.addEventListener('input', render);
  bSlider.addEventListener('input', render);
  render();
})();
</script>

---

## IV. Định lý Giá trị Trung gian & Ứng dụng Chứng minh Nghiệm

### 1. Định lý Giá trị Trung gian

> [!IMPORTANT]
> **Định lý Bolzano-Cauchy:**
> Nếu hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$ và $f(a) \ne f(b)$ thì với mọi số thực $M$ nằm giữa $f(a)$ và $f(b)$, luôn tồn tại **ít nhất một số** $c \in (a; b)$ sao cho:
> $$f(c) = M$$

### 2. Hệ quả: Sự tồn tại nghiệm của phương trình

> [!IMPORTANT]
> **Hệ quả cốt lõi (Chứng minh có nghiệm):**
> Nếu hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$ và:
> $$f(a) \cdot f(b) < 0$$
> thì phương trình $f(x) = 0$ có **ít nhất một nghiệm** nằm trong khoảng $(a; b)$.

**Ý nghĩa hình học:** Đồ thị của hàm số liên tục xuất phát từ điểm $(a; f(a))$ ở một phía của trục hoành và kết thúc tại điểm $(b; f(b))$ ở phía bên kia của trục hoành thì bắt buộc phải cắt trục hoành tại ít nhất một điểm $(c; 0)$ với $c \in (a; b)$.

---

## V. Các Dạng Toán Thực chiến Thường gặp

### Dạng 1: Xét tính liên tục của hàm số tại một điểm

**Phương pháp:**  
- Tính $f(x_0)$.
- Tính $\lim_{x \to x_0} f(x)$ (nếu hàm cho bởi 2 công thức theo $x > x_0$ và $x < x_0$, phải tính cả hai giới hạn một bên $\lim_{x \to x_0^+} f(x)$ và $\lim_{x \to x_0^-} f(x)$).
- Kết luận: Nếu $\lim_{x \to x_0} f(x) = f(x_0)$ thì liên tục; ngược lại thì gián đoạn.

**Ví dụ 1:** Cho hàm số $f(x) = \begin{cases} \frac{x^2 - 3x + 2}{x - 1} & \text{khi } x \ne 1 \\ m & \text{khi } x = 1 \end{cases}$. Tìm giá trị của tham số $m$ để hàm số liên tục tại $x = 1$.  
*Giải:*
- Ta có $f(1) = m$.
- Giới hạn khi $x \to 1$:
  $$\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{(x - 1)(x - 2)}{x - 1} = \lim_{x \to 1} (x - 2) = 1 - 2 = -1$$
- Hàm số liên tục tại $x = 1 \iff \lim_{x \to 1} f(x) = f(1) \iff m = -1$.

---

### Dạng 2: Xét tính liên tục trên tập xác định

**Ví dụ 2:** Tìm tập xác định và các khoảng liên tục của hàm số $f(x) = \frac{\sqrt{x - 1}}{x^2 - 4}$.  
*Giải:*
- Điều kiện xác định: $\begin{cases} x - 1 \ge 0 \\ x^2 - 4 \ne 0 \end{cases} \iff \begin{cases} x \ge 1 \\ x \ne \pm 2 \end{cases} \iff x \in [1; 2) \cup (2; +\infty)$.
- Do tử số $\sqrt{x - 1}$ liên tục trên $[1; +\infty)$ và mẫu số $x^2 - 4$ liên tục trên $\mathbb{R}$, nên theo định lý về thương các hàm liên tục, hàm số $f(x)$ liên tục trên nửa khoảng $[1; 2)$ và khoảng $(2; +\infty)$.

---

### Dạng 3: Chứng minh phương trình có nghiệm

**Phương pháp:**  
Để chứng minh phương trình $f(x) = 0$ có ít nhất $k$ nghiệm trên khoảng $(a; b)$:
1. Chứng minh hàm số $f(x)$ liên tục trên đoạn $[a; b]$.
2. Tìm $k + 1$ điểm $x_0 < x_1 < \dots < x_k$ sao cho các giá trị $f(x_i)$ đan dấu nhau:
   $$f(x_0) \cdot f(x_1) < 0, \quad f(x_1) \cdot f(x_2) < 0, \quad \dots, \quad f(x_{k-1}) \cdot f(x_k) < 0$$
3. Áp dụng định lý Bolzano trên từng khoảng nhỏ $(x_i; x_{i+1})$, ta suy ra phương trình có ít nhất 1 nghiệm trên mỗi khoảng đó, tổng cộng có ít nhất $k$ nghiệm phân biệt.

**Ví dụ 3:** Chứng minh phương trình $2x^3 - 6x + 1 = 0$ có ít nhất 3 nghiệm phân biệt trên khoảng $(-2; 2)$.  
*Giải:*
- Đặt $f(x) = 2x^3 - 6x + 1$. Hàm số $f(x)$ là hàm đa thức nên liên tục trên toàn bộ $\mathbb{R}$, do đó liên tục trên đoạn $[-2; 2]$.
- Ta chọn các điểm thử giá trị:
  - $f(-2) = 2(-8) - 6(-2) + 1 = -16 + 12 + 1 = -3 < 0$.
  - $f(0) = 1 > 0$.
  - $f(1) = 2 - 6 + 1 = -3 < 0$.
  - $f(2) = 2(8) - 6(2) + 1 = 16 - 12 + 1 = 5 > 0$.
- Xét các khoảng:
  - Trên $[-2; 0]$: $f(-2) \cdot f(0) = (-3)(1) = -3 < 0 \Rightarrow$ có nghiệm $c_1 \in (-2; 0)$.
  - Trên $[0; 1]$: $f(0) \cdot f(1) = (1)(-3) = -3 < 0 \Rightarrow$ có nghiệm $c_2 \in (0; 1)$.
  - Trên $[1; 2]$: $f(1) \cdot f(2) = (-3)(5) = -15 < 0 \Rightarrow$ có nghiệm $c_3 \in (1; 2)$.
- Vì các khoảng $(-2; 0)$, $(0; 1)$, $(1; 2)$ đôi một rời nhau, nên $c_1, c_2, c_3$ là 3 nghiệm hoàn toàn phân biệt.  
Vậy phương trình đã cho có ít nhất $3$ nghiệm phân biệt thuộc khoảng $(-2; 2)$.

---

## VI. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hàm số y = f(x) liên tục tại điểm x_0 khi và chỉ khi:",
  "options": [
    "A. \\lim_{x \\to x_0} f(x) = f(x_0)",
    "B. f(x) xác định tại x_0",
    "C. Tồn tại \\lim_{x \\to x_0} f(x)",
    "D. \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x)"
  ],
  "answer": "A. \\lim_{x \\to x_0} f(x) = f(x_0)",
  "explanation": "Định nghĩa hàm số liên tục tại một điểm đòi hỏi giới hạn khi x -> x_0 phải bằng đúng giá trị hàm số f(x_0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hàm số nào sau đây GIÁN ĐOẠN tại điểm x = 1?",
  "options": [
    "A. f(x) = x^3 - 2x + 1",
    "B. f(x) = (2x + 1) / (x - 1)",
    "C. f(x) = \\sqrt{x + 3}",
    "D. f(x) = \\cos(πx)"
  ],
  "answer": "B. f(x) = (2x + 1) / (x - 1)",
  "explanation": "Hàm số B không xác định tại x = 1 (mẫu bằng 0) nên gián đoạn tại x = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Hàm số y = \\sqrt{4 - x^2} liên tục trên tập hợp nào sau đây?",
  "options": [
    "A. (-2; 2)",
    "B. [-2; 2]",
    "C. (-∞; -2] ∪ [2; +∞)",
    "D. \\mathbb{R}"
  ],
  "answer": "B. [-2; 2]",
  "explanation": "Điều kiện 4 - x^2 ≥ 0 <=> -2 ≤ x ≤ 2. Hàm số liên tục trên đoạn [-2; 2]."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho hàm số f(x) = { (x^2 - 1)/(x - 1) khi x ≠ 1; 2a khi x = 1 }. Để hàm số liên tục tại x = 1 thì:",
  "options": [
    "A. a = 1",
    "B. a = 2",
    "C. a = 1/2",
    "D. a = 0"
  ],
  "answer": "A. a = 1",
  "explanation": "\\lim_{x \\to 1} (x^2 - 1)/(x - 1) = \\lim_{x \\to 1} (x + 1) = 2. Để liên tục thì f(1) = 2a = 2 <=> a = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho f(x) liên tục trên [-1; 2] với f(-1) = 3 và f(2) = -5. Khẳng định nào sau đây CHẮC CHẮN ĐÚNG?",
  "options": [
    "A. Phương trình f(x) = 0 có đúng 1 nghiệm trên (-1; 2)",
    "B. Phương trình f(x) = 0 có ít nhất 1 nghiệm trên (-1; 2)",
    "C. Phương trình f(x) = 0 vô nghiệm",
    "D. f(x) nghịch biến trên [-1; 2]"
  ],
  "answer": "B. Phương trình f(x) = 0 có ít nhất 1 nghiệm trên (-1; 2)",
  "explanation": "Vì f(-1) * f(2) = 3 * (-5) = -15 < 0, theo định lý Bolzano phương trình f(x) = 0 có ít nhất 1 nghiệm thuộc khoảng (-1; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Hàm số f(x) = tan x liên tục trên khoảng nào sau đây?",
  "options": [
    "A. (0; π)",
    "B. (-π/2; π/2)",
    "C. [0; π/2]",
    "D. (-π; π)"
  ],
  "answer": "B. (-π/2; π/2)",
  "explanation": "tan x xác định và liên tục trên các khoảng (-π/2 + kπ; π/2 + kπ). Với k = 0 khoảng đó là (-π/2; π/2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Phương trình x^3 + 2x - 5 = 0 có nghiệm thuộc khoảng nào dưới đây?",
  "options": [
    "A. (-2; -1)",
    "B. (-1; 0)",
    "C. (0; 1)",
    "D. (1; 2)"
  ],
  "answer": "D. (1; 2)",
  "explanation": "Đặt f(x) = x^3 + 2x - 5. f(1) = 1 + 2 - 5 = -2 < 0; f(2) = 8 + 4 - 5 = 7 > 0. Vì f(1) * f(2) < 0 nên có nghiệm thuộc (1; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Khẳng định nào sau đây SAI?",
  "options": [
    "A. Tổng của hai hàm số liên tục tại x_0 là hàm số liên tục tại x_0",
    "B. Hàm phân thức hữu tỉ liên tục trên tập xác định của nó",
    "C. Nếu hàm số liên tục tại x_0 thì nó xác định tại x_0",
    "D. Nếu f(a) * f(b) > 0 thì phương trình f(x) = 0 chắc chắn không có nghiệm trên (a; b)"
  ],
  "answer": "D. Nếu f(a) * f(b) > 0 thì phương trình f(x) = 0 chắc chắn không có nghiệm trên (a; b)",
  "explanation": "Mệnh đề D sai. Đồ thị vẫn có thể cắt trục hoành chẵn lần (ví dụ 2 lần) nên vẫn có thể có nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hàm số f(x) = { x + 1 khi x ≤ 2; 3x - a khi x > 2 }. Giá trị của a để hàm số liên tục trên R là:",
  "options": [
    "A. a = 3",
    "B. a = 2",
    "C. a = 1",
    "D. a = -3"
  ],
  "answer": "A. a = 3",
  "explanation": "\\lim_{x \\to 2^-} f(x) = f(2) = 2 + 1 = 3. \\lim_{x \\to 2^+} f(x) = 3(2) - a = 6 - a. Để liên tục: 6 - a = 3 <=> a = 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Phương trình x^5 - 3x^4 + 5x - 2 = 0 có ít nhất bao nhiêu nghiệm thực?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. 5"
  ],
  "answer": "B. 1",
  "explanation": "Mọi phương trình đa thức bậc lẻ (ở đây bậc 5) đều có ít nhất một nghiệm thực (do lim khi x -> -∞ là -∞ và lim khi x -> +∞ là +∞)."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luận

1. **Tìm tham số $m$ để hàm số liên tục tại điểm chỉ ra:**
   a) $f(x) = \begin{cases} \frac{\sqrt{x + 4} - 2}{x} & \text{khi } x \ne 0 \\ m & \text{khi } x = 0 \end{cases}$ tại $x_0 = 0$.  
   b) $g(x) = \begin{cases} \frac{x^2 - 16}{x - 4} & \text{khi } x > 4 \\ mx + 1 & \text{khi } x \le 4 \end{cases}$ tại $x_0 = 4$.

2. **Xét tính liên tục trên tập xác định:**
   a) $y = \frac{x + 1}{\sqrt{x^2 - 9}}$  
   b) $y = \begin{cases} x^2 + 1 & \text{khi } x \ge 0 \\ 2x + 1 & \text{khi } x < 0 \end{cases}$

3. **Ứng dụng định lý Bolzano chứng minh nghiệm:**
   a) Chứng minh phương trình $x^3 - 3x^2 + 1 = 0$ có 3 nghiệm phân biệt trong khoảng $(-1; 3)$.  
   b) Chứng minh phương trình $x \cdot \sin x + \cos x = 0$ có ít nhất một nghiệm thực.

---

### Thử thách Thực tế: Chiếc bàn bập bênh bốn chân (Wobbly Table Theorem)

Năm 2005, nhà toán học Pháp Roger Martin và cộng sự đã công bố một bài báo khoa học chứng minh một định lý thú vị:
*"Trên bất kỳ mặt sàn mấp mô liên tục nào (không có bậc thềm đứng đứng), một chiếc bàn vuông 4 chân có độ dài bằng nhau luôn có thể đứng vững hoàn toàn (cả 4 chân cùng chạm đất) chỉ bằng cách xoay chiếc bàn quanh tâm của nó một góc không quá $90^\circ$!"*

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Bản chất toán học:</strong><br>
Giả sử 3 chân bàn đã chạm mặt sàn, khoảng cách từ chân thứ 4 tới mặt sàn được mô tả bởi hàm số $f(\theta)$ với $\theta \in [0; \frac{\pi}{2}]$ là góc xoay của bàn.<br><br>
1. Tại sao hàm số độ cao $f(\theta)$ là một hàm số liên tục?<br>
2. Khi xoay bàn một góc $90^\circ$ ($\frac{\pi}{2}$), hai cặp chân bàn đổi vai trò cho nhau. Chứng minh rằng $f(0) \cdot f\left(\frac{\pi}{2}\right) \le 0$.<br>
3. Dùng định lý Bolzano-Cauchy để suy ra luôn tồn tại góc xoay $\theta_0 \in [0; \frac{\pi}{2}]$ sao cho $f(\theta_0) = 0$ (cả 4 chân cùng chạm đất vững chãi).
</div>

> [!TIP]
> **Giải thích khoa học:**
> 1. Mặt đất mấp mô tự nhiên có độ cao biến thiên liên tục, không bị đứt gãy tức thời, do đó khoảng cách $f(\theta)$ từ chân bàn tới sàn là hàm số liên tục theo góc xoay $\theta$.
> 2. Vì bàn hình vuông đối xứng, khi xoay $90^\circ$, chân bị hổng sẽ hoán đổi vị trí với chân đối diện đang chịu tải đè xuống. Nếu ban đầu chân 4 bị hổng ($f(0) > 0$), thì sau khi xoay $90^\circ$, vị trí đó sẽ bị nhấn chìm xuống dưới mặt đất theo hình học tương đối ($f(\frac{\pi}{2}) \le 0$).
> 3. Áp dụng định lý Bolzano-Cauchy trên đoạn $\left[0; \frac{\pi}{2}\right]$: Vì $f$ liên tục và $f(0) \cdot f\left(\frac{\pi}{2}\right) \le 0$, ắt phải tồn tại góc $\theta_0 \in \left[0; \frac{\pi}{2}\right]$ để $f(\theta_0) = 0$. Khi xoay đến góc này, cả 4 chân bàn cùng chạm đất tuyệt đối!
