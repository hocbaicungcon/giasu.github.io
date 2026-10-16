---
title: 'Toán 11 Bài 18: Lũy thừa với số mũ thực - Khái niệm, tính chất và ứng dụng'
description: 'Lý thuyết trọng tâm Bài 18 Toán 11 Kết nối tri thức: Quá trình mở rộng số mũ từ nguyên sang thực, căn bậc n, các tính chất đại số của lũy thừa số mũ thực, quy tắc so sánh lũy thừa cùng cơ số kèm mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Lũy thừa số mũ thực
  - Căn bậc n
  - Hàm số mũ
  - So sánh lũy thừa
  - Tăng trưởng bùng nổ
  - Kết nối tri thức
grade: 11
---

# Bài 18. Lũy thừa với số mũ thực

Chào mừng các em bước vào **Chương VI: Hàm số mũ và hàm số lôgarit** — chương mở đầu của **Toán 11 - Tập 2 (Học kì 2)**!

Trong cuộc sống hiện đại và khoa học kỹ thuật, chúng ta thường xuyên chứng kiến những hiện tượng tăng trưởng hoặc suy giảm với tốc độ kinh hoàng mà các mô hình cộng dồn số học tuyến tính không thể nào mô tả nổi:
- **Tốc độ lây lan của dịch bệnh:** Từ 1 ca ban đầu lây cho 2 người, 2 người lây cho 4, rồi 8, 16, 32... chỉ sau 30 chu kỳ lây nhiễm, con số đã vọt lên hơn 1 tỷ ca mắc!
- **Sự tăng trưởng vi khuẩn:** Một tế bào E.coli phân chia mỗi 20 phút. Nếu có đủ dưỡng chất và không gian, chỉ sau 48 giờ khối lượng vi khuẩn sinh ra sẽ nặng hơn cả khối lượng Trái Đất.
- **Lãi kép ngân hàng:** Kỳ quan thứ 8 của nhân loại (theo lời Albert Einstein), nơi tiền lãi sinh ra lại tiếp tục sinh lãi mới theo quy luật lũy thừa.
- **Sự phân rã phóng xạ:** Đồng vị phóng xạ phân rã theo thời gian để các nhà khảo cổ xác định niên đại xương hóa thạch hàng chục nghìn năm tuổi.

Để mô hình hóa chính xác những quy luật tự nhiên đó với thời gian biến thiên liên tục (như sau $2.5$ ngày hay sau $\sqrt{3}$ giờ), chúng ta cần mở rộng khái niệm lũy thừa từ số mũ nguyên sang **số mũ thực tùy ý**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG LŨY THỪA VỚI SỐ MŨ THỰC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quá trình mở rộng số mũ</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Số mũ nguyên dương: $a^n = a \cdot a \dots a$ ($a \in \mathbb{R}$).<br>• Số mũ nguyên âm & 0: $a^0 = 1, a^{-n} = \frac{1}{a^n}$ ($a \ne 0$).<br>• Số mũ hữu tỉ: $a^{\frac{m}{n}} = \sqrt[n]{a^m}$ ($a > 0$).<br>• Số mũ thực: $a^\alpha = \lim_{n \to +\infty} a^{r_n}$ ($a > 0$).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Căn bậc $n$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $n$ lẻ: Mọi số thực đều có duy nhất 1 căn bậc lẻ $\sqrt[n]{b}$.<br>• $n$ chẵn: Số âm không có căn bậc chẵn; số dương có 2 căn đối nhau $\pm\sqrt[n]{b}$.<br>• Căn của tích/thương: $\sqrt[n]{ab} = \sqrt[n]{a}\sqrt[n]{b}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Các tính chất đại số ($a, b > 0$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $a^\alpha \cdot a^\beta = a^{\alpha + \beta}$<br>• $\frac{a^\alpha}{a^\beta} = a^{\alpha - \beta}$<br>• $(a^\alpha)^\beta = a^{\alpha \beta}$<br>• $(ab)^\alpha = a^\alpha b^\alpha$, $\left(\frac{a}{b}\right)^\alpha = \frac{a^\alpha}{b^\alpha}$</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. So sánh hai lũy thừa</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $a > 1$: $a^\alpha > a^\beta \iff \alpha > \beta$ (cùng chiều).<br>• Nếu $0 < a < 1$: $a^\alpha > a^\beta \iff \alpha < \beta$ (đảo chiều).<br>• So sánh khác cơ số: Với $\alpha > 0$, $a^\alpha > b^\alpha \iff a > b$.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Số mũ âm:** Biểu thức $2^{-3}$ có giá trị bằng bao nhiêu? Có phải là một số âm không?
2. **Số mũ phân số:** Viết biểu thức $\sqrt{x}$ và $\sqrt[3]{x^2}$ ($x > 0$) dưới dạng lũy thừa của $x$.
3. **Căn bậc chẵn của số âm:** Biểu thức $\sqrt{-4}$ và $\sqrt[3]{-8}$ có tồn tại trong tập số thực $\mathbb{R}$ không?
4. **Lũy thừa của lũy thừa:** Rút gọn biểu thức $(3^2)^3$ và $3^{2^3}$. Hai biểu thức này có bằng nhau không?
5. **So sánh nhanh:** Giữa $2^{\sqrt{3}}$ và $2^{\sqrt{2}}$, số nào lớn hơn?

> [!TIP]
> **Giải đáp khởi động:**
> 1. $2^{-3} = \frac{1}{2^3} = \frac{1}{8} > 0$. Số mũ âm tạo ra nghịch đảo chứ không làm đổi dấu của số!
> 2. $\sqrt{x} = x^{\frac{1}{2}}$ và $\sqrt[3]{x^2} = x^{\frac{2}{3}}$.
> 3. $\sqrt{-4}$ không tồn tại trong $\mathbb{R}$ (vì bình phương mọi số thực đều không âm). Nhưng $\sqrt[3]{-8} = -2$ hoàn toàn tồn tại vì $(-2)^3 = -8$.
> 4. $(3^2)^3 = 3^{2 \times 3} = 3^6 = 729$. Trong khi $3^{2^3} = 3^8 = 6561$. Hai biểu thức khác nhau hoàn toàn!
> 5. Vì cơ số $2 > 1$ và $\sqrt{3} \approx 1.732 > \sqrt{2} \approx 1.414$, nên $2^{\sqrt{3}} > 2^{\sqrt{2}}$.

---

## I. Mở rộng Khái niệm Lũy thừa

Quá trình mở rộng số mũ trong toán học là một hành trình khái quát hóa tuyệt đẹp:

```
Số tự nhiên n          Số nguyên âm -n           Phân số m/n            Số vô tỉ α
  (Phép nhân lặp)         (Nghịch đảo)             (Căn bậc n)          (Giới hạn dãy)
aⁿ = a·a...a    ───►    a⁻ⁿ = 1/aⁿ    ───►    a^(m/n) = ⁿ√(aᵐ) ───►  a^α = lim a^(r_n)
 (a ∈ ℝ tùy ý)          (Cơ số a ≠ 0)           (Cơ số a > 0)          (Cơ số a > 0)
```

### 1. Lũy thừa với số mũ nguyên

- **Số mũ nguyên dương:** Với $n \in \mathbb{N}^*$ và $a \in \mathbb{R}$:
  $$a^n = \underbrace{a \cdot a \cdot \dots \cdot a}_{n \text{ thừa số } a}$$
- **Số mũ 0 và số mũ nguyên âm:** Với $a \ne 0$ và $n \in \mathbb{N}^*$:
  $$a^0 = 1 \quad \text{và} \quad a^{-n} = \frac{1}{a^n}$$
  *(Chú ý: Biểu thức $0^0$ và $0^{-n}$ không có nghĩa).*

### 2. Căn bậc $n$

Cho số nguyên dương $n \ge 2$ và số thực $b$. Số $a$ được gọi là **căn bậc $n$ của số $b$** nếu:
$$a^n = b$$

- **Khi $n$ lẻ ($n = 3, 5, 7, \dots$):** Với mọi số thực $b$, tồn tại duy nhất một căn bậc $n$ của $b$, ký hiệu là $\sqrt[n]{b}$.
  - Ví dụ: $\sqrt[3]{27} = 3$, $\sqrt[3]{-64} = -4$, $\sqrt[5]{0} = 0$.
- **Khi $n$ chẵn ($n = 2, 4, 6, \dots$):**
  - Số âm ($b < 0$): Không có căn bậc chẵn trong $\mathbb{R}$.
  - Số $0$: Có một căn duy nhất $\sqrt[n]{0} = 0$.
  - Số dương ($b > 0$): Có đúng hai căn bậc $n$ đối nhau là $\sqrt[n]{b}$ (căn số học dương) và $-\sqrt[n]{b}$.
  - Ví dụ: Căn bậc 4 của $16$ là $2$ và $-2$.

**Tính chất căn bậc $n$ (với $a, b > 0$):**
$$\sqrt[n]{a \cdot b} = \sqrt[n]{a} \cdot \sqrt[n]{b}, \quad \sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \quad \sqrt[n]{a^m} = (\sqrt[n]{a})^m, \quad \sqrt[n]{\sqrt[k]{a}} = \sqrt[n \cdot k]{a}$$

---

### 3. Lũy thừa với số mũ hữu tỉ

Cho số thực $a > 0$ và số hữu tỉ $r = \frac{m}{n}$, trong đó $m \in \mathbb{Z}$, $n \in \mathbb{N}^*$, $n \ge 2$. Khi đó:
$$a^r = a^{\frac{m}{n}} = \sqrt[n]{a^m}$$

**Ví dụ:**
- $8^{\frac{2}{3}} = \sqrt[3]{8^2} = \sqrt[3]{64} = 4$ (hoặc $(\sqrt[3]{8})^2 = 2^2 = 4$).
- $16^{-\frac{3}{4}} = \frac{1}{16^{\frac{3}{4}}} = \frac{1}{\sqrt[4]{16^3}} = \frac{1}{2^3} = \frac{1}{8}$.

---

### 4. Lũy thừa với số mũ thực

Số vô tỉ (như $\sqrt{2} = 1.41421356\dots$ hay $\pi = 3.14159265\dots$) có thể xấp xỉ bằng một dãy số hữu tỉ $(r_n)$:
$$r_1 = 1.4, \quad r_2 = 1.41, \quad r_3 = 1.414, \quad r_4 = 1.4142, \dots \to \sqrt{2}$$

Với cơ số $a > 0$ và số thực $\alpha$, ta định nghĩa:
$$a^\alpha = \lim_{n \to +\infty} a^{r_n}$$
trong đó $(r_n)$ là một dãy số hữu tỉ bất kỳ hội tụ về $\alpha$.

> [!WARNING]
> **Điều kiện cơ số cực kỳ quan trọng:**
> - Số mũ nguyên dương: Cơ số $a \in \mathbb{R}$ tùy ý.
> - Số mũ nguyên âm hoặc bằng $0$: Cơ số $a \ne 0$.
> - Số mũ **không nguyên** (hữu tỉ, vô tỉ, số thực): **Bắt buộc cơ số $a > 0$**!  
> *(Ví dụ: $(-2)^{\frac{1}{2}}$ hay $(-3)^{\sqrt{2}}$ không có nghĩa trong tập số thực).*

---

## II. Các Tính chất Đại số của Lũy thừa với Số mũ thực

Cho $a, b$ là các số thực dương ($a, b > 0$) và $\alpha, \beta$ là các số thực tùy ý. Khi đó:

1. **Nhân cùng cơ số:**
   $$a^\alpha \cdot a^\beta = a^{\alpha + \beta}$$
2. **Chia cùng cơ số:**
   $$\frac{a^\alpha}{a^\beta} = a^{\alpha - \beta}$$
3. **Lũy thừa của lũy thừa:**
   $$(a^\alpha)^\beta = a^{\alpha \cdot \beta}$$
4. **Lũy thừa của một tích:**
   $$(a \cdot b)^\alpha = a^\alpha \cdot b^\alpha$$
5. **Lũy thừa của một thương:**
   $$\left(\frac{a}{b}\right)^\alpha = \frac{a^\alpha}{b^\alpha}$$

---

## III. So sánh các Lũy thừa cùng Cơ số

Cho số thực dương $a > 0$ và hai số thực $\alpha, \beta$:

> [!IMPORTANT]
> **Quy tắc so sánh cùng cơ số:**
> - **Trường hợp $a > 1$ (Hàm đồng biến):**
>   $$a^\alpha > a^\beta \iff \alpha > \beta$$
>   *(Cơ số lớn hơn 1 thì giữ nguyên chiều bất đẳng thức).*
> - **Trường hợp $0 < a < 1$ (Hàm nghịch biến):**
>   $$a^\alpha > a^\beta \iff \alpha < \beta$$
>   *(Cơ số nằm trong khoảng $(0; 1)$ thì bất đẳng thức bị ĐẢO CHIỀU).*
> - **Trường hợp đặc biệt với số 1:**
>   - Nếu $a > 1$: $a^\alpha > 1 \iff \alpha > 0$.
>   - Nếu $0 < a < 1$: $a^\alpha > 1 \iff \alpha < 0$.

**Ví dụ:**
- So sánh $(\sqrt{2})^3$ và $(\sqrt{2})^\pi$:  
  Vì cơ số $\sqrt{2} \approx 1.414 > 1$ và $3 < \pi \approx 3.1415$ nên $(\sqrt{2})^3 < (\sqrt{2})^\pi$.
- So sánh $(0.6)^{-2}$ và $(0.6)^{-3}$:  
  Vì cơ số $0 < 0.6 < 1$ và $-2 > -3$, nên bất đẳng thức đổi chiều: $(0.6)^{-2} < (0.6)^{-3}$.

---

## IV. Phòng thí nghiệm Tương tác: Sức mạnh Tăng trưởng Lũy thừa

Hãy kéo thanh trượt biến số $x$ để so sánh 3 đường cong kinh điển: Tăng trưởng đường thẳng (tuyến tính $y = 5x$), Tăng trưởng lũy thừa đa thức ($y = x^3$) và Tăng trưởng hàm mũ bùng nổ ($y = 2^x$)!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <label style="font-weight: 600; min-width: 140px;">Giá trị $x$: <span id="powXVal" style="color: #2563eb; font-size: 18px;">4.0</span></label>
    <input id="powSlider" type="range" min="10" max="100" value="40" style="flex: 1; cursor: pointer;">
  </div>

  <div style="overflow-x: auto;">
    <svg id="powerSvg" viewBox="0 0 700 320" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="powStat" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang tính toán tăng trưởng...
  </div>
</div>

<script>
(function() {
  const slider = document.getElementById('powSlider');
  const xVal = document.getElementById('powXVal');
  const svg = document.getElementById('powerSvg');
  const stat = document.getElementById('powStat');

  function render() {
    const x = slider.value / 10;
    xVal.textContent = x.toFixed(1);

    const xMin = 0, xMax = 10;
    const yMin = 0, yMax = 1024;

    const padL = 60, padR = 30, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 320 - padT - padB;

    const toX = v => padL + (v / xMax) * W;
    const toY = v => padT + H - (Math.min(v, yMax) / yMax) * H;

    let html = '';

    // Lưới ngang
    for (let i = 0; i <= 4; i++) {
      const v = i * 256;
      const y = toY(v);
      html += `<line x1="${padL}" y1="${y}" x2="${padL + W}" y2="${y}" stroke="#f1f5f9" stroke-width="1"/>`;
      html += `<text x="${padL - 10}" y="${y + 4}" font-size="11" text-anchor="end" fill="#94a3b8">${v}</text>`;
    }

    // Trục toạ độ
    html += `<line x1="${padL}" y1="${padT + H}" x2="${padL + W + 15}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL + W + 10}" y="${padT + H + 25}" font-size="12" fill="#475569" font-weight="600">x</text>`;
    html += `<line x1="${padL}" y1="${padT - 10}" x2="${padL}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL - 10}" y="${padT - 12}" font-size="12" fill="#475569" font-weight="600" text-anchor="end">y</text>`;

    // Vẽ 3 đồ thị: y = 20x (xanh lá), y = x^3 (xanh dương), y = 2^x (đỏ)
    const samples = 200;
    let pLinear = '', pPoly = '', pExp = '';
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * xMax;
      const y1 = 20 * t;
      const y2 = t * t * t;
      const y3 = Math.pow(2, t);

      const px = toX(t);
      if (i === 0) {
        pLinear += `M ${px} ${toY(y1)}`;
        pPoly += `M ${px} ${toY(y2)}`;
        pExp += `M ${px} ${toY(y3)}`;
      } else {
        pLinear += ` L ${px} ${toY(y1)}`;
        pPoly += ` L ${px} ${toY(y2)}`;
        pExp += ` L ${px} ${toY(y3)}`;
      }
    }

    html += `<path d="${pLinear}" fill="none" stroke="#10b981" stroke-width="2"/>`;
    html += `<path d="${pPoly}" fill="none" stroke="#2563eb" stroke-width="2"/>`;
    html += `<path d="${pExp}" fill="none" stroke="#dc2626" stroke-width="2.5"/>`;

    // Chú thích nhãn
    html += `<text x="${padL + 15}" y="${padT + 20}" font-size="12" font-weight="bold" fill="#dc2626">— Hàm mũ: y = 2^x (Bùng nổ)</text>`;
    html += `<text x="${padL + 15}" y="${padT + 38}" font-size="12" font-weight="bold" fill="#2563eb">— Lũy thừa: y = x^3</text>`;
    html += `<text x="${padL + 15}" y="${padT + 56}" font-size="12" font-weight="bold" fill="#10b981">— Tuyến tính: y = 20x</text>`;

    // Điểm tại x hiện tại
    const currXPix = toX(x);
    const valL = 20 * x;
    const valP = Math.pow(x, 3);
    const valE = Math.pow(2, x);

    html += `<line x1="${currXPix}" y1="${padT}" x2="${currXPix}" y2="${padT + H}" stroke="#64748b" stroke-dasharray="2,2"/>`;

    html += `<circle cx="${currXPix}" cy="${toY(valL)}" r="4.5" fill="#10b981" stroke="#fff" stroke-width="1.5"/>`;
    html += `<circle cx="${currXPix}" cy="${toY(valP)}" r="4.5" fill="#2563eb" stroke="#fff" stroke-width="1.5"/>`;
    html += `<circle cx="${currXPix}" cy="${toY(valE)}" r="5.5" fill="#dc2626" stroke="#fff" stroke-width="1.5"/>`;

    svg.innerHTML = html;

    stat.innerHTML = `<strong>Tại $x = ${x.toFixed(1)}$:</strong> Tuyến tính $20x = ${valL.toFixed(1)}$ · Lũy thừa $x^3 = ${valP.toFixed(1)}$ · Hàm mũ $2^x = ${valE.toFixed(1)}$<br><span style="color:#dc2626; font-weight:600;">Nhận xét: Ban đầu khi $x$ nhỏ, $x^3$ có thể cao hơn $2^x$. Nhưng khi $x \ge 10$, hàm mũ $2^{10} = 1024$ bứt phá vượt qua mọi đa thức!</span>`;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## V. Các Dạng Toán Thực chiến

### Dạng 1: Rút gọn biểu thức chứa lũy thừa

**Phương pháp:**  
- Đưa các căn thức về lũy thừa số mũ hữu tỉ: $\sqrt[n]{a^m} = a^{\frac{m}{n}}$.
- Phân tích cơ số về tích các thừa số nguyên tố: ví dụ $4 = 2^2, 8 = 2^3, 6 = 2 \cdot 3$.
- Áp dụng các quy tắc nhân, chia, lũy thừa của lũy thừa để gom số mũ.

**Ví dụ 1:** Rút gọn biểu thức $P = \frac{x^{\frac{5}{4}} \cdot \sqrt{x}}{\sqrt[4]{x^3}}$ với $x > 0$.  
*Giải:* Đưa hết về lũy thừa cơ số $x$:
- Tử số: $x^{\frac{5}{4}} \cdot x^{\frac{1}{2}} = x^{\frac{5}{4} + \frac{1}{2}} = x^{\frac{7}{4}}$.
- Mẫu số: $\sqrt[4]{x^3} = x^{\frac{3}{4}}$.
- Biểu thức: $P = \frac{x^{\frac{7}{4}}}{x^{\frac{3}{4}}} = x^{\frac{7}{4} - \frac{3}{4}} = x^{\frac{4}{4}} = x^1 = x$.

**Ví dụ 2:** Rút gọn $Q = \sqrt{a\sqrt{a\sqrt{a}}}$ với $a > 0$.  
*Giải:*
$$Q = \left(a \cdot (a \cdot a^{\frac{1}{2}})^{\frac{1}{2}}\right)^{\frac{1}{2}} = \left(a \cdot (a^{\frac{3}{2}})^{\frac{1}{2}}\right)^{\frac{1}{2}} = \left(a \cdot a^{\frac{3}{4}}\right)^{\frac{1}{2}} = \left(a^{\frac{7}{4}}\right)^{\frac{1}{2}} = a^{\frac{7}{8}} = \sqrt[8]{a^7}$$

---

### Dạng 2: So sánh các lũy thừa

**Phương pháp:**  
- Nếu hai lũy thừa có cùng cơ số $a$: Dựa vào điều kiện $a > 1$ (cùng chiều) hay $0 < a < 1$ (nghịch đảo chiều).
- Nếu hai lũy thừa có cùng số mũ $\alpha > 0$: $a^\alpha > b^\alpha \iff a > b$.
- Nếu khác cả cơ số lẫn số mũ: Đưa về cùng cơ số hoặc cùng số mũ trung gian.

**Ví dụ 3:** So sánh $A = 3^{400}$ và $B = 4^{300}$.  
*Giải:* Đưa về cùng số mũ chung $100$:
$$A = 3^{400} = (3^4)^{100} = 81^{100}$$
$$B = 4^{300} = (4^3)^{100} = 64^{100}$$
Vì $81 > 64 > 0$ và số mũ $100 > 0$, suy ra $81^{100} > 64^{100} \Rightarrow 3^{400} > 4^{300}$.

---

## VI. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị của biểu thức 16^(3/4) bằng:",
  "options": [
    "A. 8",
    "B. 12",
    "C. 6",
    "D. 4"
  ],
  "answer": "A. 8",
  "explanation": "16^(3/4) = (2^4)^(3/4) = 2^(4 * 3/4) = 2^3 = 8."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Với a > 0, biểu thức a^(2/3) * a^(1/2) viết dưới dạng một lũy thừa là:",
  "options": [
    "A. a^(1/3)",
    "B. a^(7/6)",
    "C. a^(2/6)",
    "D. a^(5/6)"
  ],
  "answer": "B. a^(7/6)",
  "explanation": "a^(2/3) * a^(1/2) = a^(2/3 + 1/2) = a^(4/6 + 3/6) = a^(7/6)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Điều kiện xác định của biểu thức (x - 2)^(-3) là:",
  "options": [
    "A. x > 2",
    "B. x ≠ 2",
    "C. x ≥ 2",
    "D. x ∈ R"
  ],
  "answer": "B. x ≠ 2",
  "explanation": "Với số mũ nguyên âm (-3), điều kiện là cơ số phải khác 0: x - 2 ≠ 0 <=> x ≠ 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Điều kiện xác định của biểu thức (x - 1)^(1/3) là:",
  "options": [
    "A. x > 1",
    "B. x ≠ 1",
    "C. x ≥ 1",
    "D. x ∈ R"
  ],
  "answer": "A. x > 1",
  "explanation": "Với số mũ không nguyên (1/3), điều kiện bắt buộc là cơ số phải dương: x - 1 > 0 <=> x > 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Rút gọn biểu thức P = √(x * ∛x) với x > 0:",
  "options": [
    "A. x^(2/3)",
    "B. x^(1/3)",
    "C. x^(5/6)",
    "D. x^(4/3)"
  ],
  "answer": "A. x^(2/3)",
  "explanation": "√(x * x^(1/3)) = √(x^(4/3)) = (x^(4/3))^(1/2) = x^(4/6) = x^(2/3)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho 0 < a < 1. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. a^√2 > a^√3",
    "B. a^√2 < a^√3",
    "C. a^0 = 0",
    "D. a^(-1) < 1"
  ],
  "answer": "A. a^√2 > a^√3",
  "explanation": "Vì 0 < a < 1 và √2 < √3 nên bất đẳng thức đổi chiều: a^√2 > a^√3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: So sánh hai số m = (π/4)^3 và n = (π/4)^4:",
  "options": [
    "A. m > n",
    "B. m < n",
    "C. m = n",
    "D. Không so sánh được"
  ],
  "answer": "A. m > n",
  "explanation": "Cơ số π/4 ≈ 3.14/4 ≈ 0.785 ∈ (0; 1). Vì 3 < 4 nên (π/4)^3 > (π/4)^4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Giá trị của (-27)^(-2/3) bằng:",
  "options": [
    "A. 9",
    "B. 1/9",
    "C. -1/9",
    "D. Không xác định trong tập số thực"
  ],
  "answer": "D. Không xác định trong tập số thực",
  "explanation": "Lũy thừa với số mũ không nguyên (-2/3) chỉ xác định với cơ số dương. Do -27 < 0 nên biểu thức không xác định trong R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho a, b > 0 và x, y ∈ R. Đẳng thức nào sau đây SAI?",
  "options": [
    "A. a^x * a^y = a^(x + y)",
    "B. (a^x)^y = a^(xy)",
    "C. (a + b)^x = a^x + b^x",
    "D. (ab)^x = a^x * b^x"
  ],
  "answer": "C. (a + b)^x = a^x + b^x",
  "explanation": "Lũy thừa của một tổng không bằng tổng các lũy thừa! (Ví dụ: (1 + 1)^2 = 4 ≠ 1^2 + 1^2 = 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Rút gọn biểu thức M = (a^(√3 + 1) * a^(2 - √3)) / (a^(√2 + 1))^(√2 - 1) với a > 0:",
  "options": [
    "A. a",
    "B. a^2",
    "C. a^3",
    "D. 1"
  ],
  "answer": "B. a^2",
  "explanation": "Tử số = a^(√3 + 1 + 2 - √3) = a^3. Mẫu số = a^((√2 + 1)(√2 - 1)) = a^(2 - 1) = a^1. M = a^3 / a^1 = a^2."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luận

1. **Rút gọn các biểu thức sau ($a, b, x, y > 0$):**
   a) $A = \frac{x^{\frac{4}{3}} y + x y^{\frac{4}{3}}}{\sqrt[3]{x} + \sqrt[3]{y}}$  
   b) $B = \left(a^{\frac{1}{3}} + b^{\frac{1}{3}}\right)\left(a^{\frac{2}{3}} - a^{\frac{1}{3}}b^{\frac{1}{3}} + b^{\frac{2}{3}}\right)$  
   c) $C = \frac{a^{\frac{1}{3}}\sqrt{b} + b^{\frac{1}{3}}\sqrt{a}}{\sqrt[6]{a} + \sqrt[6]{b}}$

2. **So sánh các cặp số sau không dùng máy tính cầm tay:**
   a) $(\sqrt{3} - 1)^5$ và $(\sqrt{3} - 1)^6$  
   b) $2^{300}$ và $3^{200}$  
   c) $\left(\frac{3}{4}\right)^{\sqrt{5}}$ và $\left(\frac{3}{4}\right)^{\sqrt{7}}$

---

### Thử thách Thực tế: Truyền thuyết Bàn cờ vua và Lũy thừa 64 ô

Theo truyền thuyết Ấn Độ cổ, nhà thông thái Sissa phát minh ra trò chơi cờ vua làm nhà vua vô cùng thích thú. Nhà vua hứa ban cho ông bất cứ phần thưởng nào ông muốn. Sissa chỉ xin một yêu cầu khiêm tốn:
- Đặt 1 hạt thóc vào ô thứ 1.
- Đặt 2 hạt thóc vào ô thứ 2.
- Đặt 4 hạt thóc vào ô thứ 3.
- Cứ thế, số hạt thóc ở mỗi ô tiếp theo gấp đôi ô liền trước, cho đến hết ô thứ 64.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ:</strong><br>
1. Viết công thức tính số hạt thóc ở ô thứ 64 dưới dạng lũy thừa.<br>
2. Tính tổng số hạt thóc $S$ trên toàn bộ 64 ô cờ.<br>
3. Biết rằng 1 hạt thóc nặng khoảng $0.025\,gam$. Hãy ước tính khối lượng của toàn bộ số thóc đó theo đơn vị tấn. Sản lượng lương thực toàn thế giới hiện nay (khoảng 3 tỷ tấn/năm) cần bao nhiêu năm sản xuất mới đủ số thóc nhà vua hứa ban?
</div>

> [!TIP]
> **Giải đáp thú vị:**
> 1. Số hạt thóc ở ô thứ 64 là: $2^{63} \approx 9.22 \times 10^{18}$ hạt.
> 2. Tổng số hạt thóc trên bàn cờ là cấp số nhân có $u_1 = 1, q = 2$:
>    $$S = 1 + 2 + 2^2 + \dots + 2^{63} = 2^{64} - 1 \approx 1.844 \times 10^{19} \text{ hạt thóc}$$
> 3. Khối lượng toàn bộ số thóc:
>    $$M \approx 1.844 \times 10^{19} \times 0.025 \times 10^{-6} \text{ tấn} \approx 4.61 \times 10^{11} \text{ tấn} = 461 \text{ tỷ tấn!}$$
>    So với sản lượng toàn cầu 3 tỷ tấn/năm:
>    $$\frac{461 \text{ tỷ}}{3 \text{ tỷ}} \approx 153.7 \text{ năm!}$$
>    Cả nhân loại phải dốc toàn lực canh tác hơn 150 năm mới gom đủ số thóc cho bàn cờ vua! Đó chính là sức mạnh bùng nổ của quy luật lũy thừa.
