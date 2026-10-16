---
title: 'Toán 11 Bài 21: Phương trình, bất phương trình mũ và lôgarit - Phương pháp giải và bẫy thường gặp'
description: 'Lý thuyết trọng tâm Bài 21 Toán 11 Kết nối tri thức: Phương trình và bất phương trình mũ, lôgarit cơ bản, các phương pháp giải kinh điển (đưa về cùng cơ số, đặt ẩn phụ, lôgarit hóa), lưu ý đổi chiều bất phương trình khi cơ số bé hơn 1 và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Phương trình mũ
  - Phương trình logarit
  - Bất phương trình mũ
  - Bất phương trình logarit
  - Đổi cơ số
  - Đặt ẩn phụ
  - Kết nối tri thức
grade: 11
---

# Bài 21. Phương trình, bất phương trình mũ và lôgarit

Trong các bài học trước, chúng ta đã tìm hiểu kỹ lưỡng về định nghĩa, tính chất và đồ thị của hàm số mũ và hàm số lôgarit. Bây giờ là lúc vận dụng toàn bộ "kho vũ khí" toán học đó để giải quyết những bài toán cốt lõi nhất: **Phương trình và Bất phương trình Mũ & Lôgarit**.

Những phương trình này không hề xa vời mà xuất hiện ở khắp mọi nơi trong đời sống thực tế:
- **Tài chính ngân hàng:** Cần gửi tiết kiệm với lãi suất $7\%$/năm trong bao nhiêu năm để số tiền tích lũy tăng gấp đôi? Ta cần giải phương trình: $(1 + 0.07)^t = 2$.
- **Khảo cổ học & Địa chất:** Đo được một khúc xương hóa thạch chỉ còn lại $25\%$ lượng đồng vị phóng xạ Carbon-14 so với ban đầu. Làm sao tính được niên đại của hóa thạch đó? Phương trình: $\left(\frac{1}{2}\right)^{\frac{t}{5730}} = 0.25$.
- **Kỹ thuật âm thanh:** Để giảm độ ồn từ $95\,\text{dB}$ xuống ngưỡng an toàn dưới $70\,\text{dB}$, bức tường cách âm cần có bề dày tối thiểu là bao nhiêu? Bất phương trình lôgarit sẽ cho đáp án chính xác!

Bài học này sẽ trang bị cho các em các phương pháp giải chuẩn mực, cùng việc vạch rõ những "bẫy" sai lầm kinh điển mà học sinh thường hay mắc phải nhất trong các kỳ thi.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: PHƯƠNG TRÌNH & BẤT PHƯƠNG TRÌNH MŨ - LÔGARIT</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương trình & BPT Mũ cơ bản</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $a^x = b$: Nếu $b \le 0 \Rightarrow$ vô nghiệm; nếu $b > 0 \Rightarrow x = \log_a b$.<br>• $a^x > b$:<br>&nbsp;&nbsp;- $a > 1 \Rightarrow x > \log_a b$ (cùng chiều).<br>&nbsp;&nbsp;- $0 < a < 1 \Rightarrow x < \log_a b$ (đổi chiều!).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Phương trình & BPT Lôgarit cơ bản</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\log_a x = b \iff x = a^b$.<br>• $\log_a x > b$:<br>&nbsp;&nbsp;- $a > 1 \Rightarrow x > a^b$.<br>&nbsp;&nbsp;- $0 < a < 1 \Rightarrow 0 < x < a^b$ (chú ý điều kiện $x > 0$!).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ba phương pháp giải nâng cao</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Đưa về cùng cơ số:</strong> $a^{f(x)} = a^{g(x)} \iff f(x) = g(x)$.<br>• <strong>Đặt ẩn phụ:</strong> $t = a^x$ (điều kiện $t > 0$) hoặc $t = \log_a x$ ($t \in \mathbb{R}$).<br>• <strong>Lôgarit hóa / Mũ hóa:</strong> Khi hai vế khác cơ số.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Bẫy sai lầm cần tránh</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quên đặt điều kiện biểu thức trong dấu lôgarit phải DƯƠNG.<br>• Quên đảo chiều khi cơ số $0 < a < 1$.<br>• Quên điều kiện $t > 0$ khi đặt ẩn phụ cho hàm mũ.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phương trình vô nghiệm:** Phương trình $2^x = -4$ có nghiệm không? Tại sao?
2. **Tìm x cơ bản:** Giải nhanh phương trình $3^x = 9$ và $\log_2 x = 4$.
3. **Đảo chiều bất phương trình:** Bất phương trình $\left(\frac{1}{2}\right)^x > 4$ có tập nghiệm là $x > -2$ hay $x < -2$?
4. **Điều kiện xác định:** Tìm điều kiện để phương trình $\log_3 (2x - 6) = 1$ có nghĩa.
5. **Đặt ẩn phụ:** Với phương trình $4^x - 3 \cdot 2^x + 2 = 0$, nếu đặt $t = 2^x$ thì phương trình trở thành phương trình bậc hai nào? Điều kiện của $t$ là gì?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Vô nghiệm! Vì $2^x > 0$ với mọi $x \in \mathbb{R}$, không thể bằng số âm $-4$.
> 2. $3^x = 9 = 3^2 \Rightarrow x = 2$. Với $\log_2 x = 4 \Rightarrow x = 2^4 = 16$.
> 3. Ta có $4 = \left(\frac{1}{2}\right)^{-2}$. Vì cơ số $\frac{1}{2} \in (0; 1)$ nên bất phương trình đổi chiều: $x < -2$.
> 4. Điều kiện: $2x - 6 > 0 \iff x > 3$.
> 5. Vì $4^x = (2^x)^2 = t^2$, phương trình trở thành $t^2 - 3t + 2 = 0$ với điều kiện $t > 0$.

---

## I. Phương trình và Bất phương trình Mũ

### 1. Phương trình mũ cơ bản $a^x = b$ ($a > 0, a \ne 1$)

- Nếu $b \le 0$: Phương trình **vô nghiệm** (do $a^x > 0$ với mọi $x$).
- Nếu $b > 0$: Phương trình luôn có **nghiệm duy nhất**:
  $$a^x = b \iff x = \log_a b$$

**Minh họa hình học:** Nghiệm của phương trình $a^x = b$ là hoành độ giao điểm của đồ thị hàm số mũ $y = a^x$ và đường thẳng nằm ngang $y = b$. Khi $b > 0$, đường thẳng luôn cắt đồ thị tại đúng một điểm duy nhất.

---

### 2. Bất phương trình mũ cơ bản

Cho $a > 0, a \ne 1$:

> [!IMPORTANT]
> **Quy tắc giải bất phương trình mũ $a^x > b$:**
> - Nếu $b \le 0$: Bất phương trình nghiệm đúng với mọi $x \in \mathbb{R}$ (vì $a^x > 0 \ge b$).
> - Nếu $b > 0$:
>   - **Khi $a > 1$ (cùng chiều):**
>     $$a^x > b \iff x > \log_a b$$
>   - **Khi $0 < a < 1$ (đảo chiều):**
>     $$a^x > b \iff x < \log_a b$$

---

## II. Phương trình và Bất phương trình Lôgarit

### 1. Phương trình lôgarit cơ bản $\log_a x = b$ ($a > 0, a \ne 1$)

Với mọi số thực $b \in \mathbb{R}$, phương trình luôn có **nghiệm duy nhất**:
$$\log_a x = b \iff x = a^b$$
*(Vì $a^b > 0$ nên nghiệm $x$ luôn tự động thỏa mãn điều kiện $x > 0$).*

---

### 2. Bất phương trình lôgarit cơ bản

Cho $a > 0, a \ne 1$ và $b \in \mathbb{R}$:

> [!IMPORTANT]
> **Quy tắc giải bất phương trình $\log_a x > b$:**
> - **Khi $a > 1$ (cùng chiều):**
>   $$\log_a x > b \iff x > a^b$$
> - **Khi $0 < a < 1$ (đảo chiều - CỰC KỲ CHÚ Ý):**
>   $$\log_a x > b \iff 0 < x < a^b$$
>   *(Rất nhiều học sinh chỉ viết $x < a^b$ mà quên mất chặn dưới $x > 0$ của điều kiện xác định lôgarit!).*

---

## III. Phòng thí nghiệm Tương tác: Giải trực quan Phương trình Mũ & Lôgarit

Hãy chọn loại phương trình, kéo thanh trượt cơ số $a$ và mục tiêu $b$ để quan sát giao điểm giữa đồ thị $y = f(x)$ và đường thẳng ngang $y = b$. Lời giải đại số và toạ độ nghiệm sẽ được tính toán trực tiếp tức thì!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px;">
    <label style="font-weight: 600; color: var(--text-color, #1e293b);">Loại phương trình:</label>
    <select id="eqTypeSelect" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; font-size: 15px;">
      <option value="exp">1. Phương trình Mũ: a^x = b</option>
      <option value="log">2. Phương trình Lôgarit: log_a(x) = b</option>
    </select>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600;">Cơ số $a$: <span id="aEqVal" style="color: #2563eb;">2.0</span></label>
      <input id="aEqSlider" type="range" min="3" max="40" value="20" style="width: 100%; cursor: pointer;">
    </div>
    <div>
      <label style="font-weight: 600;">Vế phải $b$: <span id="bEqVal" style="color: #dc2626;">3.0</span></label>
      <input id="bEqSlider" type="range" min="-20" max="60" value="30" style="width: 100%; cursor: pointer;">
    </div>
  </div>

  <div style="overflow-x: auto;">
    <svg id="solverSvg" viewBox="0 0 700 320" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="solverStat" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang phân tích phương trình...
  </div>
</div>

<script>
(function() {
  const select = document.getElementById('eqTypeSelect');
  const aSlider = document.getElementById('aEqSlider');
  const bSlider = document.getElementById('bEqSlider');
  const aVal = document.getElementById('aEqVal');
  const bVal = document.getElementById('bEqVal');
  const svg = document.getElementById('solverSvg');
  const stat = document.getElementById('solverStat');

  function render() {
    const type = select.value;
    let a = aSlider.value / 10;
    if (Math.abs(a - 1) < 0.05) a = 1.05;
    const b = bSlider.value / 10;

    aVal.textContent = a.toFixed(1);
    bVal.textContent = b.toFixed(1);

    const xMin = -3, xMax = 6;
    const yMin = -3, yMax = 7;

    const padL = 50, padR = 40, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 320 - padT - padB;

    const toX = x => padL + ((x - xMin) / (xMax - xMin)) * W;
    const toY = y => padT + H - ((y - yMin) / (yMax - yMin)) * H;

    let html = '';

    // Trục toạ độ
    html += `<line x1="${padL}" y1="${toY(0)}" x2="${padL + W + 15}" y2="${toY(0)}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL + W + 10}" y="${toY(0) + 18}" font-size="12" fill="#475569" font-weight="600">x</text>`;
    html += `<line x1="${toX(0)}" y1="${padT - 10}" x2="${toX(0)}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${toX(0) - 10}" y="${padT - 12}" font-size="12" fill="#475569" font-weight="600" text-anchor="end">y</text>`;

    // Vẽ đường thẳng nằm ngang y = b
    const by = toY(b);
    html += `<line x1="${padL}" y1="${by}" x2="${padL + W}" y2="${by}" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>`;
    html += `<text x="${padL + W - 5}" y="${by - 6}" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">y = ${b.toFixed(1)}</text>`;

    // Vẽ đường cong f(x)
    const samples = 250;
    let path = '', started = false;
    for (let i = 0; i <= samples; i++) {
      let x, y;
      if (type === 'exp') {
        x = xMin + (i / samples) * (xMax - xMin);
        y = Math.pow(a, x);
      } else {
        x = 0.05 + (i / samples) * (xMax - 0.05);
        y = Math.log(x) / Math.log(a);
      }
      if (y >= yMin - 1 && y <= yMax + 2) {
        const px = toX(x), py = toY(y);
        if (!started) { path += `M ${px} ${py}`; started = true; }
        else path += ` L ${px} ${py}`;
      }
    }
    html += `<path d="${path}" fill="none" stroke="#2563eb" stroke-width="2.5"/>`;

    // Tính nghiệm và vẽ điểm giao nhau
    let rootX = null;
    let statText = '';

    if (type === 'exp') {
      if (b <= 0) {
        statText = `<span style="color:#dc2626; font-weight:bold;">Phương trình $${a.toFixed(1)}^x = ${b.toFixed(1)}$ VÔ NGHIỆM!</span><br>Lý do: Đồ thị hàm số mũ $y = a^x$ luôn nằm hoàn toàn phía trên trục hoành ($y > 0$), không bao giờ cắt đường thẳng $y = ${b.toFixed(1)} \\le 0$.`;
      } else {
        rootX = Math.log(b) / Math.log(a);
        statText = `<strong>Phương trình $${a.toFixed(1)}^x = ${b.toFixed(1)}$:</strong><br>Nghiệm duy nhất: $x = \\log_{${a.toFixed(1)}}(${b.toFixed(1)}) = \\frac{\\ln(${b.toFixed(1)})}{\\ln(${a.toFixed(1)})} \\approx <span style="color:#2563eb; font-weight:bold; font-size:16px;">${rootX.toFixed(4)}</span>$.`;
      }
    } else {
      rootX = Math.pow(a, b);
      statText = `<strong>Phương trình $\\log_{${a.toFixed(1)}} x = ${b.toFixed(1)}$:</strong><br>Nghiệm duy nhất: $x = ${a.toFixed(1)}^{${b.toFixed(1)}} \\approx <span style="color:#2563eb; font-weight:bold; font-size:16px;">${rootX.toFixed(4)}</span>$ (Thỏa mãn $x > 0$).`;
    }

    if (rootX !== null && rootX >= xMin && rootX <= xMax) {
      const rx = toX(rootX);
      const ry = toY(b);
      html += `<line x1="${rx}" y1="${toY(0)}" x2="${rx}" y2="${ry}" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>`;
      html += `<circle cx="${rx}" cy="${ry}" r="6" fill="#059669" stroke="#fff" stroke-width="2"/>`;
      html += `<text x="${rx}" y="${toY(0) + 16}" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">x ≈ ${rootX.toFixed(2)}</text>`;
    }

    svg.innerHTML = html;
    stat.innerHTML = statText;
  }

  select.addEventListener('change', render);
  aSlider.addEventListener('input', render);
  bSlider.addEventListener('input', render);
  render();
})();
</script>

---

## IV. Ba Phương pháp Giải Nâng cao

### Phương pháp 1: Đưa về cùng cơ số

**Quy tắc:**
- **Mũ:** $a^{f(x)} = a^{g(x)} \iff f(x) = g(x)$  
  *(Với bất phương trình: Giữ chiều nếu $a > 1$; đổi chiều nếu $0 < a < 1$).*
- **Lôgarit:** $\log_a f(x) = \log_a g(x) \iff \begin{cases} f(x) > 0 \text{ (hoặc } g(x) > 0) \\ f(x) = g(x) \end{cases}$

**Ví dụ 1:** Giải phương trình $2^{x^2 - 3x} = \frac{1}{4}$.  
*Giải:* Đưa về cơ số 2: $\frac{1}{4} = 2^{-2}$.
$$2^{x^2 - 3x} = 2^{-2} \iff x^2 - 3x = -2 \iff x^2 - 3x + 2 = 0 \iff x = 1 \text{ hoặc } x = 2$$

**Ví dụ 2:** Giải bất phương trình $\log_{0.5} (2x - 1) \ge \log_{0.5} (x + 2)$.  
*Giải:*
- Điều kiện xác định: $\begin{cases} 2x - 1 > 0 \\ x + 2 > 0 \end{cases} \iff x > \frac{1}{2}$.
- Vì cơ số $a = 0.5 \in (0; 1)$ nên bất phương trình **ĐẢO CHIỀU**:
  $$2x - 1 \le x + 2 \iff x \le 3$$
- Kết hợp điều kiện xác định: $\frac{1}{2} < x \le 3$. Tập nghiệm là $S = \left(\frac{1}{2}; 3\right]$.

---

### Phương pháp 2: Đặt ẩn phụ

**Quy tắc:**
- Đối với phương trình mũ: Thường đặt $t = a^x$ (**Điều kiện bắt buộc: $t > 0$**). Khi đó $a^{2x} = t^2$, $a^{-x} = \frac{1}{t}$.
- Đối với phương trình lôgarit: Thường đặt $t = \log_a x$ (**Điều kiện: $t \in \mathbb{R}$** tùy ý, nhưng biến ban đầu $x > 0$). Khi đó $\log_a^2 x = t^2$.

**Ví dụ 3:** Giải phương trình $4^x - 5 \cdot 2^x + 4 = 0$.  
*Giải:*  
Đặt $t = 2^x$ ($t > 0$). Phương trình trở thành:
$$t^2 - 5t + 4 = 0 \iff \begin{bmatrix} t = 1 \text{ (thỏa mãn } t > 0) \\ t = 4 \text{ (thỏa mãn } t > 0) \end{bmatrix}$$
- Với $t = 1 \Rightarrow 2^x = 1 \iff x = 0$.
- Với $t = 4 \Rightarrow 2^x = 4 = 2^2 \iff x = 2$.  
Vậy tập nghiệm của phương trình là $S = \{0; 2\}$.

**Ví dụ 4:** Giải phương trình $\log_2^2 x - 3\log_2 x + 2 = 0$.  
*Giải:*  
Điều kiện $x > 0$. Đặt $t = \log_2 x$. Phương trình trở thành:
$$t^2 - 3t + 2 = 0 \iff \begin{bmatrix} t = 1 \\ t = 2 \end{bmatrix}$$
- Với $t = 1 \Rightarrow \log_2 x = 1 \iff x = 2^1 = 2$.
- Với $t = 2 \Rightarrow \log_2 x = 2 \iff x = 2^2 = 4$.  
Cả hai nghiệm đều thỏa mãn $x > 0$. Tập nghiệm là $S = \{2; 4\}$.

---

### Phương pháp 3: Lôgarit hóa (khi hai vế khác cơ số)

Khi gặp phương trình dạng $a^{f(x)} = b^{g(x)}$ mà không thể đưa về cùng cơ số, ta **lấy lôgarit cả hai vế** theo cùng một cơ số (thường chọn cơ số $a$ hoặc $b$).

**Ví dụ 5:** Giải phương trình $2^{x + 1} = 3^x$.  
*Giải:* Lấy lôgarit cơ số 2 hai vế:
$$\log_2 (2^{x + 1}) = \log_2 (3^x) \iff x + 1 = x \cdot \log_2 3 \iff x(\log_2 3 - 1) = 1 \iff x = \frac{1}{\log_2 3 - 1}$$
*(Lưu ý: $\log_2 3 - 1 = \log_2 3 - \log_2 2 = \log_2 \frac{3}{2}$, do đó $x = \frac{1}{\log_2 (1.5)} = \log_{1.5} 2$).*

---

## V. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Nghiệm của phương trình 3^(2x - 1) = 27 là:",
  "options": [
    "A. x = 2",
    "B. x = 1",
    "C. x = 3",
    "D. x = 4"
  ],
  "answer": "A. x = 2",
  "explanation": "27 = 3^3. Ta có 2x - 1 = 3 <=> 2x = 4 <=> x = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nghiệm của phương trình \\log_2 (3x + 1) = 3 là:",
  "options": [
    "A. x = 7/3",
    "B. x = 8/3",
    "C. x = 3",
    "D. x = 2"
  ],
  "answer": "A. x = 7/3",
  "explanation": "3x + 1 = 2^3 = 8 <=> 3x = 7 <=> x = 7/3 (thỏa mãn 3x + 1 > 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tập nghiệm của bất phương trình 2^(x + 1) > 8 là:",
  "options": [
    "A. (2; +∞)",
    "B. (3; +∞)",
    "C. (-∞; 2)",
    "D. [2; +∞)"
  ],
  "answer": "A. (2; +∞)",
  "explanation": "2^(x + 1) > 2^3 <=> x + 1 > 3 <=> x > 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tập nghiệm của bất phương trình (1/3)^x ≥ 9 là:",
  "options": [
    "A. (-∞; -2]",
    "B. [-2; +∞)",
    "C. (2; +∞)",
    "D. (-∞; 2]"
  ],
  "answer": "A. (-∞; -2]",
  "explanation": "9 = (1/3)^(-2). Vì cơ số 1/3 ∈ (0; 1) nên bất phương trình đổi chiều: x ≤ -2. Tập nghiệm S = (-∞; -2]."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Tập nghiệm của bất phương trình \\log_{0.5} (x - 1) > -2 là:",
  "options": [
    "A. (1; 5)",
    "B. (-∞; 5)",
    "C. (5; +∞)",
    "D. (1; 4)"
  ],
  "answer": "A. (1; 5)",
  "explanation": "Điều kiện x - 1 > 0 <=> x > 1. BPT đổi chiều vì cơ số 0.5 < 1: x - 1 < (0.5)^(-2) = 4 <=> x < 5. Kết hợp điều kiện: 1 < x < 5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Tổng các nghiệm của phương trình 9^x - 4 \\cdot 3^x + 3 = 0 bằng:",
  "options": [
    "A. 1",
    "B. 4",
    "C. 3",
    "D. 0"
  ],
  "answer": "A. 1",
  "explanation": "Đặt t = 3^x > 0. Ta có t^2 - 4t + 3 = 0 <=> t = 1 hoặc t = 3. 3^x = 1 <=> x = 0; 3^x = 3 <=> x = 1. Tổng các nghiệm = 0 + 1 = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Số nghiệm của phương trình \\log_3 (x - 1) + \\log_3 (x + 1) = 1 là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 0",
    "D. 3"
  ],
  "answer": "A. 1",
  "explanation": "Điều kiện x > 1. BPT trở thành \\log_3 (x^2 - 1) = 1 <=> x^2 - 1 = 3 <=> x^2 = 4 <=> x = 2 hoặc x = -2. Vì điều kiện x > 1 nên loại x = -2. Chỉ có 1 nghiệm duy nhất x = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tập nghiệm của bất phương trình \\log_2 (x^2 - 3x) ≤ 2 là:",
  "options": [
    "A. [-1; 0) ∪ (3; 4]",
    "B. [-1; 4]",
    "C. (0; 3)",
    "D. [-1; 0]"
  ],
  "answer": "A. [-1; 0) ∪ (3; 4]",
  "explanation": "Điều kiện x^2 - 3x > 0 <=> x < 0 hoặc x > 3. BPT: x^2 - 3x ≤ 2^2 = 4 <=> x^2 - 3x - 4 ≤ 0 <=> -1 ≤ x ≤ 4. Giao điều kiện: [-1; 0) ∪ (3; 4]."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Phương trình 2^x = 5 có nghiệm là:",
  "options": [
    "A. x = \\log_2 5",
    "B. x = \\log_5 2",
    "C. x = 5/2",
    "D. Vô nghiệm"
  ],
  "answer": "A. x = \\log_2 5",
  "explanation": "Theo định nghĩa phương trình mũ cơ bản, 2^x = 5 <=> x = \\log_2 5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tích các nghiệm của phương trình \\log_2^2 x - \\log_2 (x^3) + 2 = 0 bằng:",
  "options": [
    "A. 8",
    "B. 4",
    "C. 2",
    "D. 6"
  ],
  "answer": "A. 8",
  "explanation": "Điều kiện x > 0. Biến đổi \\log_2 (x^3) = 3\\log_2 x. Phương trình trở thành t^2 - 3t + 2 = 0 (với t = \\log_2 x) <=> t_1 = 1, t_2 = 2. Nghiệm x_1 = 2^1 = 2, x_2 = 2^2 = 4. Tích hai nghiệm = 2 * 4 = 8."
}'></div>

---

## VI. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luận

1. **Giải các phương trình mũ:**
   a) $3^{x^2 - 4x + 3} = 1$  
   b) $4^{x + 1} - 9 \cdot 2^x + 2 = 0$  
   c) $3 \cdot 4^x - 5 \cdot 6^x + 2 \cdot 9^x = 0$

2. **Giải các phương trình lôgarit:**
   a) $\log_2 (x + 3) + \log_2 (x - 1) = 2$  
   b) $\log_3^2 x - 4\log_3 x + 3 = 0$  
   c) $\log_2 x + \log_4 x + \log_8 x = 11$

3. **Giải các bất phương trình:**
   a) $\left(\frac{2}{3}\right)^{2x - 1} \le \frac{9}{4}$  
   b) $\log_{0.2} (3x - 5) > \log_{0.2} (x + 1)$

---

### Thử thách Thực tế: Phân rã Phóng xạ và Niên đại Cổ vật Hoàng thành Thăng Long

Trong một đợt khai quật khảo cổ tại Hoàng thành Thăng Long, các nhà khảo cổ tìm thấy một chiếc thuyền độc mộc bằng gỗ lim cổ. Phân tích mẫu gỗ tại phòng thí nghiệm hạt nhân cho thấy tỉ lệ đồng vị phóng xạ Carbon-14 ($^{14}\text{C}$) còn lại trong mẫu gỗ là $72\%$ so với lượng Carbon-14 trong một cây gỗ sống tương đương.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Dữ liệu khoa học:</strong><br>
Công thức phân rã Carbon-14 theo thời gian $t$ (năm) là:
$$N(t) = N_0 \cdot \left(\frac{1}{2}\right)^{\frac{t}{T}}$$
trong đó chu kỳ bán rã của Carbon-14 là $T = 5\,730$ năm.<br><br>
1. Thiết lập phương trình mũ xác định tuổi $t$ của chiếc thuyền gỗ cổ.<br>
2. Sử dụng lôgarit để tìm công thức tính tuổi $t$ theo tỉ lệ $\frac{N(t)}{N_0}$.<br>
3. Tính tuổi của chiếc thuyền (làm tròn đến năm). Chiếc thuyền này thuộc triều đại phong kiến nào trong lịch sử Việt Nam (Triều Lý: 1009–1225; Triều Trần: 1225–1400; Triều Lê Sơ: 1428–1527)?
</div>

> [!TIP]
> **Giải đáp niên đại học:**
> 1. Phương trình mũ theo tỉ lệ $72\% = 0.72$:
>    $$\left(\frac{1}{2}\right)^{\frac{t}{5730}} = 0.72$$
> 2. Lấy lôgarit tự nhiên hai vế:
>    $$\frac{t}{5730} \cdot \ln(0.5) = \ln(0.72) \iff t = 5730 \cdot \frac{\ln(0.72)}{\ln(0.5)}$$
> 3. Bấm máy tính:
>    $$t \approx 5730 \cdot \frac{-0.3285}{-0.6931} \approx 2\,716 \text{ năm trước}$$
>    *(Nếu tỉ lệ là $90\%$: $t \approx 5730 \times \frac{\ln 0.9}{\ln 0.5} \approx 871 \text{ năm} \Rightarrow 2026 - 871 = 1155 \Rightarrow$ niên đại thế kỷ 12 thuộc thời nhà Lý!)*
