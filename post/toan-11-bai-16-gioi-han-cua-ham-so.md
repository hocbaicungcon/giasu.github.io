---
title: 'Toán 11 Bài 16: Giới hạn của hàm số - Định nghĩa, giới hạn một bên và kỹ thuật khử vô định'
description: 'Lý thuyết trọng tâm Bài 16 Toán 11 Kết nối tri thức: Giới hạn hàm số tại một điểm, giới hạn vô cực, giới hạn tại vô cực, giới hạn một bên (trái, phải), các dạng vô định 0/0, vô cực/vô cực, vô cực - vô cực kèm mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Giới hạn hàm số
  - Giới hạn một bên
  - Giới hạn tại vô cực
  - Khử dạng 0/0
  - Nhân liên hợp
  - Kết nối tri thức
grade: 11
---

# Bài 16. Giới hạn của hàm số

Nếu như ở bài trước chúng ta đã khảo sát các bước nhảy rời rạc $n = 1, 2, 3, \dots$ trong giới hạn dãy số, thì ở bài học này, chúng ta sẽ bước lên một nấc thang mới: **sự biến thiên liên tục** của hàm số $f(x)$ khi biến số $x$ lướt êm ái trên trục số thực!

Trong cuộc sống và khoa học thực nghiệm, chúng ta liên tục gặp phải những tình huống toán học tưởng chừng "bất khả thi":
- Một chiếc ô tô đang lăn bánh, vận tốc trung bình sau khoảng thời gian $\Delta t$ là $v_{tb} = \frac{\Delta s}{\Delta t}$. Nhưng muốn đo **vận tốc tức thời** tại đúng tích tắc kim đồng hồ chỉ thời điểm $t_0$, ta phải cho $\Delta t \to 0$. Khi đó cả quãng đường $\Delta s$ và thời gian $\Delta t$ đều co về $0$, tạo nên biểu thức "chia cho $0$" kinh điển: $\frac{0}{0}$!
- Trên đồ thị hàm số $y = f(x)$, để tính hệ số góc của tiếp tuyến tại một điểm, ta phải xét cát tuyến nối hai điểm rồi cho điểm thứ hai tiến lại gần điểm thứ nhất đến mức khoảng cách giữa chúng bằng $0$.

Làm thế nào để xác định giá trị của một biểu thức tại nơi mà nó không xác định? Câu trả lời vi diệu chính là **Giới hạn của hàm số**!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: GIỚI HẠN CỦA HÀM SỐ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Giới hạn tại một điểm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\lim_{x \to x_0} f(x) = L$: Khi $x$ tiến vô cùng gần $x_0$ thì $f(x)$ tiến gần $L$.<br>• Định nghĩa qua dãy: $\forall (x_n) \to x_0 \Rightarrow f(x_n) \to L$.<br>• Giới hạn cơ bản: $\lim_{x \to x_0} x = x_0$, $\lim_{x \to x_0} c = c$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Giới hạn một bên</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bên phải:</strong> $\lim_{x \to x_0^+} f(x)$ ($x > x_0$).<br>• <strong>Bên trái:</strong> $\lim_{x \to x_0^-} f(x)$ ($x < x_0$).<br>• <strong>Điều kiện tồn tại:</strong> $\lim_{x \to x_0} f(x) = L \iff \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = L$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Giới hạn tại vô cực & Vô cực</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi $x \to +\infty$ hoặc $x \to -\infty$.<br>• $\lim_{x \to \pm\infty} \frac{1}{x^k} = 0$ ($k \in \mathbb{N}^*$).<br>• $\lim_{x \to x_0} f(x) = \pm\infty$: giá trị hàm số tăng/giảm không giới hạn.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Khử dạng vô định</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Dạng $\frac{0}{0}$:</strong> Tách nhân tử chung $(x - x_0)$ hoặc nhân liên hợp căn thức.<br>• <strong>Dạng $\frac{\infty}{\infty}$ ($x \to \pm\infty$):</strong> Rút bậc cao nhất (lưu ý $\sqrt{x^2} = -x$ khi $x \to -\infty$).<br>• <strong>Dạng $\infty - \infty$:</strong> Nhân liên hợp.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khảo sát giá trị:** Cho hàm số $f(x) = 2x + 1$. Khi $x$ nhận các giá trị $1.9, 1.99, 1.999$, giá trị $f(x)$ tiến dần đến số nào?
2. **Điểm không xác định:** Hàm số $g(x) = \frac{x^2 - 1}{x - 1}$ có xác định tại $x = 1$ không? Với $x \ne 1$, ta có thể rút gọn $g(x)$ thành biểu thức nào?
3. **Tiến từ một phía:** Khi nói $x \to 3^+$, nghĩa là $x$ tiến về $3$ từ phía các số lớn hơn $3$ hay nhỏ hơn $3$?
4. **Căn bậc hai khi âm:** Khi $x \to -\infty$, biểu thức $\sqrt{x^2}$ đưa ra ngoài dấu căn bằng $x$ hay $-x$?
5. **Giới hạn hằng số:** $\lim_{x \to 5} 7$ bằng bao nhiêu?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Khi $x \to 2$, $f(x) = 2x + 1$ tiến dần về $2(2) + 1 = 5$.
> 2. Tại $x = 1$, mẫu số bằng $0$ nên $g(x)$ không xác định. Tuy nhiên với $x \ne 1$, $g(x) = \frac{(x - 1)(x + 1)}{x - 1} = x + 1$.
> 3. $x \to 3^+$ nghĩa là $x$ tiến dần về $3$ và luôn giữ điều kiện $x > 3$ (phía bên phải trên trục số).
> 4. $\sqrt{x^2} = |x| = -x$ khi $x < 0$ (lỗi sai kinh điển của học sinh khi làm bài thi!).
> 5. $\lim_{x \to 5} 7 = 7$.

---

## I. Giới hạn hữu hạn của Hàm số tại một điểm

### 1. Định nghĩa

Cho khoảng $K$ chứa điểm $x_0$ và hàm số $y = f(x)$ xác định trên $K$ hoặc trên $K \setminus \{x_0\}$.

Ta nói hàm số $f(x)$ có **giới hạn là số thực $L$ khi $x$ dần tới $x_0$** (ký hiệu là $\lim_{x \to x_0} f(x) = L$ hoặc $f(x) \to L$ khi $x \to x_0$) nếu với mọi dãy số $(x_n)$ trong tập xác định thỏa mãn $x_n \ne x_0$ và $\lim x_n = x_0$, ta đều có:
$$\lim f(x_n) = L$$

> [!NOTE]
> **Điểm mấu chốt:** Khi tính $\lim_{x \to x_0} f(x)$, ta chỉ quan tâm đến hành vi của $f(x)$ khi $x$ ở **rất gần** $x_0$ ($x \ne x_0$), chứ **không quan tâm** hàm số $f(x)$ có xác định tại đúng điểm $x_0$ hay không!

### 2. Một số giới hạn cơ bản
- $\lim_{x \to x_0} x = x_0$
- $\lim_{x \to x_0} c = c$ ($c$ là hằng số)

### 3. Các phép toán về giới hạn hữu hạn của hàm số

Nếu $\lim_{x \to x_0} f(x) = L$ và $\lim_{x \to x_0} g(x) = M$ ($L, M \in \mathbb{R}$) thì:
1. $\lim_{x \to x_0} [f(x) \pm g(x)] = L \pm M$
2. $\lim_{x \to x_0} [f(x) \cdot g(x)] = L \cdot M$
3. $\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{L}{M}$ (nếu $M \ne 0$)
4. Nếu $f(x) \ge 0$ trong lân cận $x_0$ thì $L \ge 0$ và $\lim_{x \to x_0} \sqrt{f(x)} = \sqrt{L}$

---

## II. Giới hạn Một bên (Trái và Phải)

Có những hàm số khi $x$ tiến về $x_0$ từ bên trái (các giá trị $x < x_0$) lại cho kết quả hoàn toàn khác so với khi $x$ tiến về $x_0$ từ bên phải ($x > x_0$). Do đó ta cần khái niệm **giới hạn một bên**.

```
          x tiến từ trái (x < x₀)       x tiến từ phải (x > x₀)
             ───────►                      ◄───────
 ───────────────┬──────────────────────────────┬───────────────► Trục số x
               x                              x₀
           (x → x₀⁻)                      (x → x₀⁺)
```

### 1. Định nghĩa giới hạn một bên

- **Giới hạn bên phải:** Ký hiệu $\lim_{x \to x_0^+} f(x) = L_1$, nghĩa là với mọi dãy $(x_n)$ thỏa mãn $x_n > x_0$ và $\lim x_n = x_0$ thì $\lim f(x_n) = L_1$.
- **Giới hạn bên trái:** Ký hiệu $\lim_{x \to x_0^-} f(x) = L_2$, nghĩa là với mọi dãy $(x_n)$ thỏa mãn $x_n < x_0$ và $\lim x_n = x_0$ thì $\lim f(x_n) = L_2$.

### 2. Định lý về mối quan hệ giữa giới hạn và giới hạn một bên

> [!IMPORTANT]
> **Định lý cốt lõi:**
> Giới hạn $\lim_{x \to x_0} f(x)$ tồn tại và bằng $L$ khi và chỉ khi cả hai giới hạn một bên cùng tồn tại và bằng $L$:
> $$\lim_{x \to x_0} f(x) = L \iff \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = L$$
> Nếu $\lim_{x \to x_0^+} f(x) \ne \lim_{x \to x_0^-} f(x)$, ta kết luận: **Không tồn tại giới hạn $\lim_{x \to x_0} f(x)$!**

---

## III. Phòng thí nghiệm Tương tác: Khảo sát Giới hạn & Giới hạn một bên

Hãy kéo thanh trượt để di chuyển điểm dò $x$ tiến lại gần điểm kỳ dị $x_0$. Quan sát đồ thị hàm số và xem giá trị $f(x)$ hội tụ hay bị "xé rách" thành 2 nhánh!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px;">
    <label style="font-weight: 600; color: var(--text-color, #1e293b);">Chọn hàm số khảo sát:</label>
    <select id="funcSelect" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; font-size: 15px;">
      <option value="hole">1. f(x) = (x^2 - 1) / (x - 1) tại x_0 = 1 (Lỗ thủng khử được, giới hạn = 2)</option>
      <option value="step">2. f(x) = |x - 2| / (x - 2) tại x_0 = 2 (Nhảy bậc, không có giới hạn)</option>
      <option value="asymptote">3. f(x) = 1 / (x - 1)^2 tại x_0 = 1 (Tiệm cận đứng, tiến ra +∞)</option>
    </select>
  </div>

  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <label style="font-weight: 600; min-width: 140px;">Vị trí $x$: <span id="xDisplay" style="color: #2563eb; font-size: 18px;">0.50</span></label>
    <input id="xSlider" type="range" min="0" max="1000" value="250" style="flex: 1; cursor: pointer;">
  </div>

  <div style="overflow-x: auto;">
    <svg id="funcSvg" viewBox="0 0 700 320" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="funcStat" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang phân tích giới hạn hàm số...
  </div>
</div>

<script>
(function() {
  const select = document.getElementById('funcSelect');
  const slider = document.getElementById('xSlider');
  const xDisplay = document.getElementById('xDisplay');
  const svg = document.getElementById('funcSvg');
  const stat = document.getElementById('funcStat');

  function getRange(mode) {
    if (mode === 'hole') return { xMin: -0.5, xMax: 2.5, yMin: 0, yMax: 4, x0: 1 };
    if (mode === 'step') return { xMin: 0.5, xMax: 3.5, yMin: -2, yMax: 2, x0: 2 };
    if (mode === 'asymptote') return { xMin: -0.5, xMax: 2.5, yMin: 0, yMax: 10, x0: 1 };
    return { xMin: -1, xMax: 3, yMin: -2, yMax: 4, x0: 1 };
  }

  function evalF(mode, x) {
    if (mode === 'hole') {
      if (Math.abs(x - 1) < 1e-5) return null;
      return (x * x - 1) / (x - 1);
    }
    if (mode === 'step') {
      if (Math.abs(x - 2) < 1e-5) return null;
      return (x > 2) ? 1 : -1;
    }
    if (mode === 'asymptote') {
      if (Math.abs(x - 1) < 1e-5) return null;
      return 1 / ((x - 1) * (x - 1));
    }
    return 0;
  }

  function render() {
    const mode = select.value;
    const { xMin, xMax, yMin, yMax, x0 } = getRange(mode);
    const progress = slider.value / 1000;
    const currentX = xMin + progress * (xMax - xMin);
    xDisplay.textContent = currentX.toFixed(3);

    const padL = 50, padR = 30, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 320 - padT - padB;

    const toX = x => padL + ((x - xMin) / (xMax - xMin)) * W;
    const toY = y => padT + H - ((y - yMin) / (yMax - yMin)) * H;

    let html = '';

    // Trục toạ độ
    const y0 = toY(0);
    const xZero = toX(0);
    if (y0 >= padT && y0 <= padT + H) {
      html += `<line x1="${padL}" y1="${y0}" x2="${padL + W + 15}" y2="${y0}" stroke="#64748b" stroke-width="1.5"/>`;
      html += `<text x="${padL + W + 10}" y="${y0 + 20}" font-size="12" fill="#475569" font-weight="600">x</text>`;
    }
    if (xZero >= padL && xZero <= padL + W) {
      html += `<line x1="${xZero}" y1="${padT - 10}" x2="${xZero}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
      html += `<text x="${xZero - 10}" y="${padT - 12}" font-size="12" fill="#475569" font-weight="600" text-anchor="end">y</text>`;
    }

    // Đường dóng điểm đặc biệt x_0
    const x0Pix = toX(x0);
    html += `<line x1="${x0Pix}" y1="${padT}" x2="${x0Pix}" y2="${padT + H}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/>`;
    html += `<text x="${x0Pix}" y="${padT + H + 18}" font-size="12" fill="#ef4444" font-weight="bold" text-anchor="middle">x₀ = ${x0}</text>`;

    // Vẽ đồ thị f(x)
    const samples = 300;
    let path = '';
    let drawing = false;
    for (let i = 0; i <= samples; i++) {
      const x = xMin + (i / samples) * (xMax - xMin);
      const y = evalF(mode, x);
      if (y === null || y < yMin - 5 || y > yMax + 5) {
        drawing = false;
        continue;
      }
      const px = toX(x);
      const py = Math.max(padT, Math.min(padT + H, toY(y)));
      if (!drawing) {
        path += `M ${px} ${py}`;
        drawing = true;
      } else {
        path += ` L ${px} ${py}`;
      }
    }
    html += `<path d="${path}" fill="none" stroke="#2563eb" stroke-width="2.5"/>`;

    // Điểm thủng (nếu có)
    if (mode === 'hole') {
      const holeY = toY(2);
      html += `<circle cx="${x0Pix}" cy="${holeY}" r="5" fill="#fff" stroke="#2563eb" stroke-width="2.5"/>`;
      html += `<line x1="${padL}" y1="${holeY}" x2="${x0Pix}" y2="${holeY}" stroke="#10b981" stroke-dasharray="3,3"/>`;
      html += `<text x="${padL + 8}" y="${holeY - 6}" font-size="12" font-weight="bold" fill="#047857">Giới hạn L = 2</text>`;
    } else if (mode === 'step') {
      const p1 = toY(-1), p2 = toY(1);
      html += `<circle cx="${x0Pix}" cy="${p1}" r="4.5" fill="#fff" stroke="#2563eb" stroke-width="2"/>`;
      html += `<circle cx="${x0Pix}" cy="${p2}" r="4.5" fill="#fff" stroke="#2563eb" stroke-width="2"/>`;
    }

    // Điểm di động
    const currentY = evalF(mode, currentX);
    if (currentY !== null && currentY >= yMin && currentY <= yMax) {
      const cx = toX(currentX);
      const cy = toY(currentY);
      html += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${y0}" stroke="#f97316" stroke-width="1" stroke-dasharray="2,2"/>`;
      html += `<circle cx="${cx}" cy="${cy}" r="6" fill="#f97316" stroke="#fff" stroke-width="2"/>`;
    }

    svg.innerHTML = html;

    // Cập nhật thống kê giải thích
    if (mode === 'hole') {
      const valStr = (currentY !== null) ? currentY.toFixed(4) : "Không xác định (0/0)";
      stat.innerHTML = `<strong>Tại $x = ${currentX.toFixed(3)}$:</strong> Giá trị $f(x) = ${valStr}$.<br><span style="color:#047857;">Dù hàm số không xác định tại đúng $x = 1$, nhưng khi $x \to 1^-$ hoặc $x \to 1^+$ thì $f(x) \to 2$. Vậy $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2$.</span>`;
    } else if (mode === 'step') {
      stat.innerHTML = `<strong>Tại $x = ${currentX.toFixed(3)}$:</strong> $f(x) = ${currentY !== null ? currentY : 'Không xác định'}$.<br><span style="color:#dc2626;">Giới hạn trái: $\\lim_{x \\to 2^-} f(x) = -1$; Giới hạn phải: $\\lim_{x \\to 2^+} f(x) = 1$. Vì hai giới hạn một bên khác nhau nên <strong>KHÔNG TỒN TẠI</strong> $\\lim_{x \\to 2} f(x)$!</span>`;
    } else if (mode === 'asymptote') {
      stat.innerHTML = `<strong>Tại $x = ${currentX.toFixed(3)}$:</strong> $f(x) = ${currentY !== null ? currentY.toFixed(2) : '+∞'}$.<br><span style="color:#2563eb;">Khi $x$ tiến dần đến $1$ từ cả 2 phía, mẫu số tiến về $0^+$ khiến giá trị hàm số vọt lên cực lớn: $\\lim_{x \\to 1} \\frac{1}{(x - 1)^2} = +\\infty$.</span>`;
    }
  }

  select.addEventListener('change', render);
  slider.addEventListener('input', render);
  render();
})();
</script>

---

## IV. Giới hạn Hữu hạn và Vô cực tại Vô cực

### 1. Giới hạn tại vô cực ($x \to +\infty$ hoặc $x \to -\infty$)

- $\lim_{x \to +\infty} f(x) = L$ nghĩa là khi $x$ tăng lên dương vô cực thì giá trị $f(x)$ tiến dần đến $L$.
- $\lim_{x \to -\infty} f(x) = L$ nghĩa là khi $x$ giảm về âm vô cực thì giá trị $f(x)$ tiến dần đến $L$.

**Giới hạn cơ bản tại vô cực:**
$$\lim_{x \to +\infty} \frac{1}{x^k} = 0 \quad \text{và} \quad \lim_{x \to -\infty} \frac{1}{x^k} = 0 \quad (k \in \mathbb{N}^*)$$

### 2. Giới hạn vô cực của hàm số

- $\lim_{x \to x_0} f(x) = +\infty$ nếu $f(x)$ lớn hơn bất kỳ số dương nào khi $x$ đủ gần $x_0$.
- Các quy tắc tính giới hạn tích và thương có liên quan đến $\pm\infty$ hoàn toàn tương tự như đối với dãy số.

---

## V. Kỹ thuật Khử các Dạng Vô định Thường gặp

### Dạng 1: Dạng $\frac{0}{0}$ tại điểm $x \to x_0$

Khi thay trực tiếp $x = x_0$ vào phân thức $\frac{P(x)}{Q(x)}$ mà cả tử và mẫu đều bằng $0$, theo định lý Bézout, cả $P(x)$ và $Q(x)$ đều chứa nhân tử chung là $(x - x_0)$.

**Chiến lược 1: Phân tích đa thức thành nhân tử để triệt tiêu $(x - x_0)$**

**Ví dụ 1:** Tính $A = \lim_{x \to 2} \frac{x^2 - 5x + 6}{x^2 - 4}$.  
*Giải:* Thay $x = 2$ ta thấy tử $= 2^2 - 10 + 6 = 0$ và mẫu $= 2^2 - 4 = 0$ (dạng $\frac{0}{0}$).  
Phân tích thành nhân tử:
$$A = \lim_{x \to 2} \frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{x - 3}{x + 2} = \frac{2 - 3}{2 + 2} = -\frac{1}{4}$$

**Chiến lược 2: Nhân lượng liên hợp khi có căn thức**

**Ví dụ 2:** Tính $B = \lim_{x \to 3} \frac{\sqrt{x + 1} - 2}{x - 3}$.  
*Giải:* Thay $x = 3$ được $\frac{\sqrt{4} - 2}{3 - 3} = \frac{0}{0}$. Nhân liên hợp tử và mẫu với $(\sqrt{x + 1} + 2)$:
$$B = \lim_{x \to 3} \frac{(\sqrt{x + 1} - 2)(\sqrt{x + 1} + 2)}{(x - 3)(\sqrt{x + 1} + 2)} = \lim_{x \to 3} \frac{(x + 1) - 4}{(x - 3)(\sqrt{x + 1} + 2)} = \lim_{x \to 3} \frac{x - 3}{(x - 3)(\sqrt{x + 1} + 2)}$$
Triệt tiêu nhân tử $(x - 3)$:
$$B = \lim_{x \to 3} \frac{1}{\sqrt{x + 1} + 2} = \frac{1}{\sqrt{3 + 1} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$

---

### Dạng 2: Dạng $\frac{\infty}{\infty}$ khi $x \to \pm\infty$

**Phương pháp:** Đặt lũy thừa bậc cao nhất của $x$ ở cả tử và mẫu ra ngoài rồi triệt tiêu.

> [!CAUTION]
> **Cực kỳ lưu ý dấu căn thức khi $x \to -\infty$:**
> $$\sqrt{x^2} = |x| = \begin{cases} x & \text{khi } x \to +\infty \\ -x & \text{khi } x \to -\infty \end{cases}$$

**Ví dụ 3:** Tính $C = \lim_{x \to -\infty} \frac{\sqrt{4x^2 + 1} - 3x}{2x + 5}$.  
*Giải:* Khi $x \to -\infty$, $x < 0$ nên $\sqrt{x^2} = |x| = -x$.  
Đưa $x^2$ ra ngoài dấu căn:
$$\sqrt{4x^2 + 1} = \sqrt{x^2\left(4 + \frac{1}{x^2}\right)} = |x| \sqrt{4 + \frac{1}{x^2}} = -x \sqrt{4 + \frac{1}{x^2}}$$
Thay vào biểu thức:
$$C = \lim_{x \to -\infty} \frac{-x \sqrt{4 + \frac{1}{x^2}} - 3x}{x\left(2 + \frac{5}{x}\right)} = \lim_{x \to -\infty} \frac{x\left(-\sqrt{4 + \frac{1}{x^2}} - 3\right)}{x\left(2 + \frac{5}{x}\right)} = \lim_{x \to -\infty} \frac{-\sqrt{4 + \frac{1}{x^2}} - 3}{2 + \frac{5}{x}} = \frac{-\sqrt{4 + 0} - 3}{2 + 0} = \frac{-2 - 3}{2} = -\frac{5}{2}$$

---

### Dạng 3: Dạng $\infty - \infty$ khi $x \to \pm\infty$

**Phương pháp:** Nhân lượng liên hợp để đưa về dạng phân thức $\frac{\infty}{\infty}$ rồi rút $x$.

**Ví dụ 4:** Tính $D = \lim_{x \to +\infty} \left(\sqrt{x^2 + 4x} - x\right)$.  
*Giải:* Nhân liên hợp với $(\sqrt{x^2 + 4x} + x)$:
$$D = \lim_{x \to +\infty} \frac{(x^2 + 4x) - x^2}{\sqrt{x^2 + 4x} + x} = \lim_{x \to +\infty} \frac{4x}{x\sqrt{1 + \frac{4}{x}} + x} = \lim_{x \to +\infty} \frac{4}{\sqrt{1 + \frac{4}{x}} + 1} = \frac{4}{1 + 1} = 2$$

---

## VI. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị của \\lim_{x \\to 2} (3x^2 - 4x + 1) bằng:",
  "options": [
    "A. 5",
    "B. 1",
    "C. 9",
    "D. 0"
  ],
  "answer": "A. 5",
  "explanation": "Hàm đa thức xác định tại x = 2, thay trực tiếp: 3(2^2) - 4(2) + 1 = 12 - 8 + 1 = 5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tính giới hạn \\lim_{x \\to 1} \\frac{x^2 - 3x + 2}{x - 1}:",
  "options": [
    "A. -1",
    "B. 1",
    "C. 0",
    "D. +\\infty"
  ],
  "answer": "A. -1",
  "explanation": "Dạng 0/0. Phân tích tử: (x - 1)(x - 2) / (x - 1) = x - 2. Khi x -> 1: 1 - 2 = -1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hàm số f(x) = { 2x + 1 khi x ≥ 1; x^2 + a khi x < 1 }. Để tồn tại \\lim_{x \\to 1} f(x) thì giá trị của a là:",
  "options": [
    "A. a = 1",
    "B. a = 2",
    "C. a = 3",
    "D. a = 0"
  ],
  "answer": "B. a = 2",
  "explanation": "\\lim_{x \\to 1^+} f(x) = 2(1) + 1 = 3. \\lim_{x \\to 1^-} f(x) = 1^2 + a = 1 + a. Để tồn tại giới hạn thì 1 + a = 3 <=> a = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tính giới hạn \\lim_{x \\to 2^+} \\frac{3x - 1}{x - 2}:",
  "options": [
    "A. 5",
    "B. +\\infty",
    "C. -\\infty",
    "D. 0"
  ],
  "answer": "B. +\\infty",
  "explanation": "Khi x -> 2^+, tử số tiến về 3(2) - 1 = 5 > 0; mẫu số x - 2 tiến về 0 và x - 2 > 0. Do đó thương tiến về +\\infty."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Tính giới hạn \\lim_{x \\to 2^-} \\frac{3x - 1}{x - 2}:",
  "options": [
    "A. +\\infty",
    "B. -\\infty",
    "C. 5",
    "D. Không tồn tại"
  ],
  "answer": "B. -\\infty",
  "explanation": "Tử số tiến về 5 > 0; mẫu số tiến về 0 nhưng vì x < 2 nên x - 2 < 0. Do đó thương tiến về -\\infty."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Tính giới hạn \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x} - 1}{x}:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 4",
    "D. 0"
  ],
  "answer": "B. 2",
  "explanation": "Nhân liên hợp: 4x / [x(\\sqrt{1 + 4x} + 1)] = 4 / (\\sqrt{1 + 4x} + 1). Khi x -> 0, giá trị là 4 / (1 + 1) = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giá trị của \\lim_{x \\to +\\infty} \\frac{3x^2 - 2x + 1}{x^2 + 5} bằng:",
  "options": [
    "A. 3",
    "B. 1/5",
    "C. 0",
    "D. +\\infty"
  ],
  "answer": "A. 3",
  "explanation": "Tử và mẫu cùng bậc 2, giới hạn bằng tỉ số hai hệ số cao nhất: 3 / 1 = 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tính giới hạn \\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2 + 1}}{x}:",
  "options": [
    "A. 1",
    "B. -1",
    "C. 0",
    "D. +\\infty"
  ],
  "answer": "B. -1",
  "explanation": "Khi x -> -\\infty, \\sqrt{x^2} = -x. Do đó \\sqrt{x^2 + 1} / x = -x\\sqrt{1 + 1/x^2} / x = -\\sqrt{1 + 1/x^2} -> -1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tính giới hạn \\lim_{x \\to +\\infty} (\\sqrt{x^2 + 2x} - \\sqrt{x^2 - 2x}):",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. 4"
  ],
  "answer": "C. 2",
  "explanation": "Nhân liên hợp: (4x) / (\\sqrt{x^2 + 2x} + \\sqrt{x^2 - 2x}) = 4 / (\\sqrt{1 + 2/x} + \\sqrt{1 - 2/x}) = 4 / 2 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. Nếu f(x) không xác định tại x_0 thì không thể tồn tại \\lim_{x \\to x_0} f(x)",
    "B. Nếu \\lim_{x \\to x_0^+} f(x) = L thì \\lim_{x \\to x_0} f(x) = L",
    "C. Nếu \\lim_{x \\to x_0} f(x) = L thì f(x_0) phải bằng L",
    "D. \\lim_{x \\to x_0} f(x) = L khi và chỉ khi \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L"
  ],
  "answer": "D. \\lim_{x \\to x_0} f(x) = L khi và chỉ khi \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L",
  "explanation": "Theo định lý về giới hạn một bên, giới hạn tồn tại khi và chỉ khi hai giới hạn một bên cùng tồn tại và bằng nhau."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luận

1. **Khử dạng $\frac{0}{0}$ bằng phân tích đa thức:**
   a) $\lim_{x \to 3} \frac{x^3 - 27}{x^2 - 9}$  
   b) $\lim_{x \to -2} \frac{2x^2 + 3x - 2}{x^2 - 4}$  
   c) $\lim_{x \to 1} \frac{x^4 - 1}{x - 1}$

2. **Khử dạng $\frac{0}{0}$ bằng nhân liên hợp:**
   a) $\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x}$  
   b) $\lim_{x \to 4} \frac{\sqrt{2x + 1} - 3}{x^2 - 16}$  
   c) $\lim_{x \to 1} \frac{\sqrt[3]{x} - 1}{x - 1}$

3. **Giới hạn tại vô cực chứa căn:**
   a) $\lim_{x \to -\infty} \frac{2x - \sqrt{9x^2 + 2}}{x + 1}$  
   b) $\lim_{x \to +\infty} \left(\sqrt{4x^2 + 3x} - 2x\right)$  
   c) $\lim_{x \to -\infty} \left(\sqrt{x^2 - 3x} + x\right)$

---

### Thử thách Thực tế: Vận tốc vũ trụ cấp 1 và Lực cản không khí

Khi một khoang tàu vũ trụ trở lại bầu khí quyển Trái Đất, lực cản không khí phụ thuộc vào vận tốc chuyển động theo quy luật phi tuyến $F(v)$.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Bài toán:</strong><br>
Giả sử gia tốc hãm của khoang tàu khi đi vào tầng khí quyển dày được mô hình hóa bởi hàm số:
$$a(t) = \frac{100 - t^2}{20 - 2t} \quad (\text{đơn vị } m/s^2)$$
với $t$ (giây) là thời gian tính từ lúc bắt đầu hãm ($t < 10$).<br><br>
1. Tại đúng thời điểm $t = 10$ giây, gia tốc biểu kiến theo công thức có dạng vô định nào?<br>
2. Tính giới hạn $\lim_{t \to 10^-} a(t)$ để tìm gia tốc hãm thực tế mà các phi hành gia phải chịu ngay trước khi chạm mốc 10 giây.<br>
3. Nếu giới hạn an toàn chịu đựng của cơ thể người là $10g \approx 98\,m/s^2$, các phi hành gia có gặp nguy hiểm không?
</div>

> [!TIP]
> **Hướng dẫn giải:**
> 1. Tại $t = 10$, tử số $100 - 10^2 = 0$ và mẫu số $20 - 2(10) = 0$. Biểu thức gặp dạng vô định $\frac{0}{0}$.
> 2. Rút gọn nhân tử chung $(10 - t)$:
>    $$a(t) = \frac{(10 - t)(10 + t)}{2(10 - t)} = \frac{10 + t}{2} \quad (\text{với } t \ne 10)$$
>    Do đó:
>    $$\lim_{t \to 10^-} a(t) = \lim_{t \to 10^-} \frac{10 + t}{2} = \frac{10 + 10}{2} = 10\,m/s^2$$
> 3. Gia tốc hãm thực tế xấp xỉ $10\,m/s^2 \approx 1g$, hoàn toàn an toàn và nằm sâu dưới ngưỡng nguy hiểm $10g \approx 98\,m/s^2$!
