---
title: 'Toán 11 Bài 20: Hàm số mũ và hàm số lôgarit - Khảo sát, đồ thị và tính đối xứng'
description: 'Lý thuyết trọng tâm Bài 20 Toán 11 Kết nối tri thức: Định nghĩa hàm số mũ y = a^x và hàm số lôgarit y = log_a x, tập xác định, tập giá trị, chiều biến thiên theo cơ số a, tiệm cận, tính đối xứng qua đường thẳng y = x kèm mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hàm số mũ
  - Hàm số lôgarit
  - Đồ thị hàm mũ
  - Đồ thị hàm lôgarit
  - Tính đối xứng
  - Tiệm cận
  - Kết nối tri thức
grade: 11
---

# Bài 20. Hàm số mũ và hàm số lôgarit

Trong thế giới toán học, có những cặp khái niệm song sinh luôn gắn bó khăng khít với nhau: cộng và trừ, nhân và chia, vi phân và tích phân. Và trong giải tích, cặp đôi kỳ diệu bậc nhất chính là **Hàm số mũ** và **Hàm số lôgarit**!

Nếu như hàm số mũ $y = a^x$ mô tả sự bùng nổ vượt bậc của các đại lượng theo thời gian (như dân số, lãi kép, vi khuẩn), thì hàm số lôgarit $y = \log_a x$ lại đóng vai trò là "chiếc gương soi đảo ngược": cho biết cần bao nhiêu thời gian để đạt được một quy mô mong muốn.

Về mặt hình học, hai đồ thị $y = a^x$ và $y = \log_a x$ là hai hình ảnh phản chiếu hoàn hảo qua đường phân giác $y = x$. Nắm vững tính chất, dáng điệu đồ thị và đường tiệm cận của hai hàm số này sẽ giúp các em tự tin giải quyết mọi bài toán khảo sát và phương trình ở các bài học tiếp theo.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: SO SÁNH SONG SONG HÀM MŨ & HÀM LÔGARIT</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Hàm số mũ $y = a^x$ ($a > 0, a \ne 1$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tập xác định:</strong> $D = \mathbb{R}$.<br>• <strong>Tập giá trị:</strong> $T = (0; +\infty)$ (luôn dương).<br>• Điểm luôn đi qua: $(0; 1)$ và $(1; a)$.<br>• <strong>Tiệm cận ngang:</strong> Trục hoành $y = 0$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Hàm số lôgarit $y = \log_a x$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tập xác định:</strong> $D = (0; +\infty)$ ($x > 0$).<br>• <strong>Tập giá trị:</strong> $T = \mathbb{R}$.<br>• Điểm luôn đi qua: $(1; 0)$ và $(a; 1)$.<br>• <strong>Tiệm cận đứng:</strong> Trục tung $x = 0$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Chiều biến thiên theo cơ số $a$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Khi $a > 1$:</strong> Cả 2 hàm số đều <strong>ĐỒNG BIẾN</strong> đi lên từ trái sang phải.<br>• <strong>Khi $0 < a < 1$:</strong> Cả 2 hàm số đều <strong>NGHỊCH BIẾN</strong> đi xuống từ trái sang phải.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tính đối xứng qua $y = x$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu điểm $(x_0; y_0)$ thuộc đồ thị $y = a^x$ thì điểm $(y_0; x_0)$ thuộc đồ thị $y = \log_a x$.<br>• Hai đồ thị đối xứng nhau qua đường phân giác của góc phần tư thứ nhất $y = x$.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tìm tập xác định:** Hàm số $y = 2^x$ có tính được giá trị tại $x = 0$ và $x = -5$ không?
2. **Điều kiện lôgarit:** Tìm tập xác định của hàm số $y = \log_3 x$.
3. **Cắt trục tọa độ:** Đồ thị hàm số $y = 3^x$ cắt trục tung tại điểm có tọa độ nào? Có cắt trục hoành không?
4. **Cắt trục hoành:** Đồ thị hàm số $y = \log_2 x$ cắt trục hoành tại điểm nào?
5. **Đồng biến hay nghịch biến:** Hàm số $y = (0.5)^x$ đồng biến hay nghịch biến trên $\mathbb{R}$?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Có, $2^0 = 1$ và $2^{-5} = \frac{1}{32}$. Tập xác định của hàm số mũ là toàn bộ $\mathbb{R}$.
> 2. Điều kiện là $x > 0$, do đó tập xác định là $D = (0; +\infty)$.
> 3. Cắt trục tung tại điểm $(0; 1)$ (vì $3^0 = 1$). Không bao giờ cắt trục hoành vì $3^x > 0, \forall x$.
> 4. Cắt trục hoành tại điểm $(1; 0)$ (vì $\log_2 1 = 0$).
> 5. Nghịch biến, vì cơ số $a = 0.5 \in (0; 1)$.

---

## I. Hàm số Mũ

### 1. Định nghĩa
Cho số thực dương $a$ khác $1$ ($a > 0, a \ne 1$). Hàm số có dạng:
$$y = a^x$$
được gọi là **hàm số mũ cơ số $a$**.

### 2. Tính chất của Hàm số Mũ $y = a^x$

| Đặc điểm | Cơ số $a > 1$ | Cơ số $0 < a < 1$ |
| :--- | :--- | :--- |
| **Tập xác định** | $D = \mathbb{R}$ | $D = \mathbb{R}$ |
| **Tập giá trị** | $T = (0; +\infty)$ ($a^x > 0, \forall x$) | $T = (0; +\infty)$ ($a^x > 0, \forall x$) |
| **Tính đơn điệu** | **Đồng biến** trên $\mathbb{R}$ ($x_1 < x_2 \Rightarrow a^{x_1} < a^{x_2}$) | **Nghịch biến** trên $\mathbb{R}$ ($x_1 < x_2 \Rightarrow a^{x_1} > a^{x_2}$) |
| **Giới hạn** | $\lim_{x \to +\infty} a^x = +\infty$; $\lim_{x \to -\infty} a^x = 0$ | $\lim_{x \to +\infty} a^x = 0$; $\lim_{x \to -\infty} a^x = +\infty$ |
| **Tiệm cận** | Trục hoành $y = 0$ là **tiệm cận ngang** (về phía $-\infty$) | Trục hoành $y = 0$ là **tiệm cận ngang** (về phía $+\infty$) |
| **Điểm đặc biệt** | Luôn đi qua điểm $(0; 1)$ và $(1; a)$ | Luôn đi qua điểm $(0; 1)$ và $(1; a)$ |
| **Vị trí đồ thị** | Luôn nằm hoàn toàn phía trên trục hoành ($y > 0$) | Luôn nằm hoàn toàn phía trên trục hoành ($y > 0$) |

---

## II. Hàm số Lôgarit

### 1. Định nghĩa
Cho số thực dương $a$ khác $1$ ($a > 0, a \ne 1$). Hàm số có dạng:
$$y = \log_a x$$
được gọi là **hàm số lôgarit cơ số $a$**.

### 2. Tính chất của Hàm số Lôgarit $y = \log_a x$

| Đặc điểm | Cơ số $a > 1$ | Cơ số $0 < a < 1$ |
| :--- | :--- | :--- |
| **Tập xác định** | $D = (0; +\infty)$ | $D = (0; +\infty)$ |
| **Tập giá trị** | $T = \mathbb{R}$ | $T = \mathbb{R}$ |
| **Tính đơn điệu** | **Đồng biến** trên $(0; +\infty)$ | **Nghịch biến** trên $(0; +\infty)$ |
| **Giới hạn** | $\lim_{x \to +\infty} \log_a x = +\infty$; $\lim_{x \to 0^+} \log_a x = -\infty$ | $\lim_{x \to +\infty} \log_a x = -\infty$; $\lim_{x \to 0^+} \log_a x = +\infty$ |
| **Tiệm cận** | Trục tung $x = 0$ là **tiệm cận đứng** | Trục tung $x = 0$ là **tiệm cận đứng** |
| **Điểm đặc biệt** | Luôn đi qua điểm $(1; 0)$ và $(a; 1)$ | Luôn đi qua điểm $(1; 0)$ và $(a; 1)$ |
| **Vị trí đồ thị** | Nằm hoàn toàn bên phải trục tung ($x > 0$) | Nằm hoàn toàn bên phải trục tung ($x > 0$) |

---

## III. Tính Đối xứng qua Đường thẳng $y = x$

Hai hàm số $y = a^x$ và $y = \log_a x$ là **hai hàm số ngược nhau**:
$$y = a^x \iff x = \log_a y$$

> [!IMPORTANT]
> **Định lý hình học về tính đối xứng:**
> Đồ thị của hàm số mũ $y = a^x$ và đồ thị của hàm số lôgarit $y = \log_a x$ **đối xứng với nhau qua đường thẳng phân giác $y = x$**.

Điều này có nghĩa là nếu ta gấp mặt phẳng toạ độ theo nếp gấp là đường thẳng $y = x$, đồ thị hàm số mũ $y = a^x$ sẽ trùng khít hoàn toàn lên đồ thị hàm số lôgarit $y = \log_a x$!
- Điểm $(0; 1)$ trên đồ thị hàm mũ đối xứng với điểm $(1; 0)$ trên đồ thị hàm lôgarit.
- Tiệm cận ngang $y = 0$ của hàm mũ đối xứng với tiệm cận đứng $x = 0$ của hàm lôgarit.

---

## IV. Phòng thí nghiệm Tương tác: Khảo sát Đồ thị Mũ & Lôgarit

Hãy kéo thanh trượt cơ số $a$ (từ $0.2$ đến $4.0$) để quan sát sự biến chuyển của hai đường cong: màu đỏ là hàm mũ $y = a^x$, màu xanh dương là hàm lôgarit $y = \log_a x$. Hãy chú ý cách hai đường cong cùng lật ngược chiều biến thiên khi $a$ vượt qua mốc $1$!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <label style="font-weight: 600; min-width: 140px;">Cơ số $a$: <span id="baseVal" style="color: #2563eb; font-size: 20px;">2.0</span></label>
    <input id="baseSlider" type="range" min="2" max="40" value="20" style="flex: 1; cursor: pointer;">
  </div>

  <div style="overflow-x: auto;">
    <svg id="expLogSvg" viewBox="0 0 700 360" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="graphStat" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang phân tích đồ thị...
  </div>
</div>

<script>
(function() {
  const slider = document.getElementById('baseSlider');
  const baseVal = document.getElementById('baseVal');
  const svg = document.getElementById('expLogSvg');
  const stat = document.getElementById('graphStat');

  function render() {
    let a = slider.value / 10;
    if (Math.abs(a - 1) < 0.05) a = 1.05; // tránh cơ số đúng bằng 1
    baseVal.textContent = a.toFixed(1);

    const xMin = -4, xMax = 5;
    const yMin = -4, yMax = 5;

    const padL = 40, padR = 40, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 360 - padT - padB;

    const toX = x => padL + ((x - xMin) / (xMax - xMin)) * W;
    const toY = y => padT + H - ((y - yMin) / (yMax - yMin)) * H;

    let html = '';

    // Lưới toạ độ
    for (let x = -3; x <= 4; x++) {
      html += `<line x1="${toX(x)}" y1="${padT}" x2="${toX(x)}" y2="${padT + H}" stroke="#f1f5f9" stroke-width="1"/>`;
      if (x !== 0) html += `<text x="${toX(x)}" y="${toY(0) + 16}" font-size="11" fill="#94a3b8" text-anchor="middle">${x}</text>`;
    }
    for (let y = -3; y <= 4; y++) {
      html += `<line x1="${padL}" y1="${toY(y)}" x2="${padL + W}" y2="${toY(y)}" stroke="#f1f5f9" stroke-width="1"/>`;
      if (y !== 0) html += `<text x="${toX(0) - 8}" y="${toY(y) + 4}" font-size="11" fill="#94a3b8" text-anchor="end">${y}</text>`;
    }

    // Trục toạ độ
    html += `<line x1="${padL}" y1="${toY(0)}" x2="${padL + W + 15}" y2="${toY(0)}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL + W + 10}" y="${toY(0) + 18}" font-size="12" fill="#475569" font-weight="600">x</text>`;
    html += `<line x1="${toX(0)}" y1="${padT - 10}" x2="${toX(0)}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${toX(0) - 10}" y="${padT - 12}" font-size="12" fill="#475569" font-weight="600" text-anchor="end">y</text>`;

    // Đường đối xứng y = x
    html += `<line x1="${toX(xMin)}" y1="${toY(xMin)}" x2="${toX(yMax)}" y2="${toY(yMax)}" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5"/>`;
    html += `<text x="${toX(3.5)}" y="${toY(3.5) - 8}" font-size="12" fill="#94a3b8" font-style="italic">y = x</text>`;

    // Vẽ hàm mũ y = a^x (Màu đỏ)
    let pExp = '', startedExp = false;
    const samples = 300;
    for (let i = 0; i <= samples; i++) {
      const x = xMin + (i / samples) * (xMax - xMin);
      const y = Math.pow(a, x);
      if (y >= yMin - 1 && y <= yMax + 2) {
        const px = toX(x), py = toY(y);
        if (!startedExp) { pExp += `M ${px} ${py}`; startedExp = true; }
        else pExp += ` L ${px} ${py}`;
      }
    }
    html += `<path d="${pExp}" fill="none" stroke="#dc2626" stroke-width="2.5"/>`;

    // Vẽ hàm lôgarit y = log_a(x) (Màu xanh dương)
    let pLog = '', startedLog = false;
    for (let i = 0; i <= samples; i++) {
      const x = 0.02 + (i / samples) * (xMax - 0.02);
      const y = Math.log(x) / Math.log(a);
      if (y >= yMin - 2 && y <= yMax + 1) {
        const px = toX(x), py = toY(y);
        if (!startedLog) { pLog += `M ${px} ${py}`; startedLog = true; }
        else pLog += ` L ${px} ${py}`;
      }
    }
    html += `<path d="${pLog}" fill="none" stroke="#2563eb" stroke-width="2.5"/>`;

    // Các điểm đặc biệt
    html += `<circle cx="${toX(0)}" cy="${toY(1)}" r="5" fill="#dc2626" stroke="#fff" stroke-width="1.5"/>`;
    html += `<text x="${toX(0) - 8}" y="${toY(1) - 6}" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">(0, 1)</text>`;

    html += `<circle cx="${toX(1)}" cy="${toY(0)}" r="5" fill="#2563eb" stroke="#fff" stroke-width="1.5"/>`;
    html += `<text x="${toX(1) + 4}" y="${toY(0) + 16}" font-size="11" font-weight="bold" fill="#2563eb">(1, 0)</text>`;

    // Chú thích
    html += `<text x="${padL + 15}" y="${padT + 20}" font-size="13" font-weight="bold" fill="#dc2626">— Hàm mũ: y = ${a.toFixed(1)}^x</text>`;
    html += `<text x="${padL + 15}" y="${padT + 40}" font-size="13" font-weight="bold" fill="#2563eb">— Hàm lôgarit: y = log_{${a.toFixed(1)}}(x)</text>`;

    svg.innerHTML = html;

    const isInc = a > 1;
    stat.innerHTML = `<strong>Cơ số $a = ${a.toFixed(1)}$:</strong> ${isInc ? '<span style="color:#047857; font-weight:bold;">$a > 1$: Cả hai hàm số đều ĐỒNG BIẾN đi lên.</span>' : '<span style="color:#d97706; font-weight:bold;">$0 < a < 1$: Cả hai hàm số đều NGHỊCH BIẾN đi xuống.</span>'}<br>Đồ thị hàm mũ có tiệm cận ngang $y = 0$, đồ thị hàm lôgarit có tiệm cận đứng $x = 0$. Hai đường cong hoàn toàn đối xứng qua trục $y = x$.`;
  }

  slider.addEventListener('input', render);
  render();
})();
</script>

---

## V. Các Dạng Toán Thực chiến

### Dạng 1: Tìm tập xác định của hàm số chứa mũ và lôgarit

**Quy tắc:**  
- Biểu thức dạng $y = a^{u(x)}$: Xác định khi $u(x)$ xác định.
- Biểu thức dạng $y = \log_a [u(x)]$: Xác định khi $u(x) > 0$.
- Biểu thức dạng $y = \log_{v(x)} [u(x)]$: Xác định khi $\begin{cases} u(x) > 0 \\ v(x) > 0 \\ v(x) \ne 1 \end{cases}$.

**Ví dụ 1:** Tìm tập xác định của hàm số $y = \log_2 (4 - x^2)$.  
*Giải:*  
Điều kiện xác định: $4 - x^2 > 0 \iff x^2 < 4 \iff -2 < x < 2$.  
Vậy tập xác định là $D = (-2; 2)$.

**Ví dụ 2:** Tìm tập xác định của hàm số $y = \sqrt{\log_{0.5} (2x - 1)}$.  
*Giải:*  
Điều kiện xác định:
$$\begin{cases} 2x - 1 > 0 \\ \log_{0.5} (2x - 1) \ge 0 \end{cases} \iff \begin{cases} x > \frac{1}{2} \\ 2x - 1 \le (0.5)^0 = 1 \text{ (vì } 0.5 < 1 \text{ nên đổi chiều)} \end{cases} \iff \begin{cases} x > \frac{1}{2} \\ 2x \le 2 \end{cases} \iff \frac{1}{2} < x \le 1$$
Vậy tập xác định là $D = \left(\frac{1}{2}; 1\right]$.

---

### Dạng 2: Nhận dạng đồ thị hàm số mũ và lôgarit

**Bí kíp nhận diện đồ thị trong các đề thi:**
1. **Kiểm tra chiều biến thiên:** Đồ thị đi lên $\Rightarrow a > 1$; đồ thị đi xuống $\Rightarrow 0 < a < 1$.
2. **Kiểm tra giao điểm với trục toạ độ:**
   - Cắt trục tung tại $(0; 1)$, nằm phía trên trục hoành $\Rightarrow$ hàm số mũ $y = a^x$.
   - Cắt trục hoành tại $(1; 0)$, nằm bên phải trục tung $\Rightarrow$ hàm số lôgarit $y = \log_a x$.
3. **So sánh nhiều cơ số cùng lúc:**
   - Kẻ đường thẳng thẳng đứng $x = 1$: Đường nào cắt cao hơn thì cơ số $a$ của hàm mũ đó lớn hơn.
   - Kẻ đường thẳng nằm ngang $y = 1$: Đường nào cắt xa hơn về bên phải thì cơ số $a$ của hàm lôgarit đó lớn hơn.

---

## VI. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Tập xác định của hàm số y = (1/3)^x là:",
  "options": [
    "A. R",
    "B. (0; +∞)",
    "C. R \\ {0}",
    "D. [0; +∞)"
  ],
  "answer": "A. R",
  "explanation": "Hàm số mũ y = a^x xác định với mọi số thực x ∈ R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tập xác định của hàm số y = \\log_3 (x - 2) là:",
  "options": [
    "A. (2; +∞)",
    "B. [2; +∞)",
    "C. R \\ {2}",
    "D. (-∞; 2)"
  ],
  "answer": "A. (2; +∞)",
  "explanation": "Điều kiện x - 2 > 0 <=> x > 2. Tập xác định D = (2; +∞)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Hàm số nào sau đây ĐỒNG BIẾN trên R?",
  "options": [
    "A. y = (e/3)^x",
    "B. y = (π/3)^x",
    "C. y = (0.8)^x",
    "D. y = (√2 - 1)^x"
  ],
  "answer": "B. y = (π/3)^x",
  "explanation": "Vì π ≈ 3.1416 > 3 nên cơ số π/3 > 1. Do đó hàm số y = (π/3)^x đồng biến trên R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hàm số y = \\log_{0.5} x nghịch biến trên khoảng nào?",
  "options": [
    "A. (0; +∞)",
    "B. R",
    "C. (-∞; 0)",
    "D. [0; +∞)"
  ],
  "answer": "A. (0; +∞)",
  "explanation": "Cơ số 0.5 ∈ (0; 1) nên hàm số nghịch biến trên toàn bộ tập xác định D = (0; +∞)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Đồ thị hàm số y = \\log_2 x có tiệm cận đứng là đường thẳng:",
  "options": [
    "A. x = 0 (trục tung)",
    "B. y = 0 (trục hoành)",
    "C. x = 1",
    "D. y = 1"
  ],
  "answer": "A. x = 0 (trục tung)",
  "explanation": "\\lim_{x \\to 0^+} \\log_2 x = -∞ nên trục tung x = 0 là tiệm cận đứng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đồ thị hàm số y = 3^x có tiệm cận ngang là đường thẳng:",
  "options": [
    "A. y = 0 (trục hoành)",
    "B. x = 0 (trục tung)",
    "C. y = 1",
    "D. Không có tiệm cận ngang"
  ],
  "answer": "A. y = 0 (trục hoành)",
  "explanation": "\\lim_{x \\to -∞} 3^x = 0 nên trục hoành y = 0 là tiệm cận ngang."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Đồ thị hai hàm số y = 2^x và y = \\log_2 x đối xứng với nhau qua đường thẳng nào?",
  "options": [
    "A. y = x",
    "B. Trục hoành Ox",
    "C. Trục tung Oy",
    "D. y = -x"
  ],
  "answer": "A. y = x",
  "explanation": "Đồ thị hàm số mũ y = a^x và hàm số lôgarit y = \\log_a x luôn đối xứng qua đường phân giác y = x."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tập giá trị của hàm số y = e^x là:",
  "options": [
    "A. (0; +∞)",
    "B. R",
    "C. [0; +∞)",
    "D. (1; +∞)"
  ],
  "answer": "A. (0; +∞)",
  "explanation": "Với mọi x ∈ R, e^x luôn dương nên tập giá trị T = (0; +∞)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tìm tất cả giá trị thực của x để hàm số y = \\ln (x^2 - 4x + 3) xác định:",
  "options": [
    "A. x ∈ (-∞; 1) ∪ (3; +∞)",
    "B. x ∈ (1; 3)",
    "C. x ∈ [1; 3]",
    "D. x ∈ (-∞; 1] ∪ [3; +∞)"
  ],
  "answer": "A. x ∈ (-∞; 1) ∪ (3; +∞)",
  "explanation": "Điều kiện x^2 - 4x + 3 > 0 <=> (x - 1)(x - 3) > 0 <=> x < 1 hoặc x > 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khẳng định nào sau đây SAI?",
  "options": [
    "A. Đồ thị hàm số y = a^x luôn đi qua điểm (0; 1)",
    "B. Đồ thị hàm số y = \\log_a x luôn đi qua điểm (1; 0)",
    "C. Đồ thị hàm số y = a^x luôn cắt trục hoành",
    "D. Đồ thị hàm số y = \\log_a x luôn nằm bên phải trục tung"
  ],
  "answer": "C. Đồ thị hàm số y = a^x luôn cắt trục hoành",
  "explanation": "Mệnh đề C sai vì a^x > 0 với mọi x nên đồ thị hàm số mũ không bao giờ cắt trục hoành."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luận

1. **Tìm tập xác định của các hàm số sau:**
   a) $y = \log_5 \frac{x + 2}{3 - x}$  
   b) $y = \sqrt{\log_2 (x - 1) - 1}$  
   c) $y = 3^{\frac{1}{x - 2}} + \ln(x + 1)$

2. **Khảo sát sự biến thiên và vẽ phác đồ thị các cặp hàm số sau trên cùng một hệ trục toạ độ:**
   a) $y = 2^x$ và $y = \log_2 x$  
   b) $y = \left(\frac{1}{2}\right)^x$ và $y = \log_{0.5} x$

---

### Thử thách Thực tế: Quá trình Sạc Tụ điện RC trong Mạch Điện tử

Trong kỹ thuật điện tử, khi đóng khóa điện nạp điện cho một tụ điện có điện dung $C$ qua một điện trở $R$, điện áp $u(t)$ hai đầu tụ điện tăng dần theo thời gian $t$ (giây) theo quy luật hàm số mũ:
$$u(t) = U_0 \left(1 - e^{-\frac{t}{\tau}}\right)$$
trong đó $U_0$ là điện áp nguồn một chiều và $\tau = R \cdot C$ được gọi là hằng số thời gian của mạch.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Câu hỏi:</strong><br>
1. Tại thời điểm ban đầu $t = 0$, điện áp trên tụ $u(0)$ bằng bao nhiêu?<br>
2. Khi thời gian $t \to +\infty$, điện áp trên tụ đạt giá trị giới hạn là bao nhiêu? Đường thẳng $y = U_0$ đóng vai trò gì đối với đồ thị hàm số?<br>
3. Sau thời gian bao lâu (tính theo hằng số $\tau$) thì điện áp trên tụ đạt được $99\%$ điện áp nguồn $U_0$? Sử dụng hàm số lôgarit để tìm công thức giải tích chính xác.
</div>

> [!TIP]
> **Giải đáp ứng dụng:**
> 1. Tại $t = 0$: $u(0) = U_0 (1 - e^0) = U_0(1 - 1) = 0\,\text{V}$ (tụ bắt đầu từ trạng thái cạn kiệt điện tích).
> 2. Khi $t \to +\infty$: Vì $e^{-\infty} = 0 \Rightarrow \lim_{t \to +\infty} u(t) = U_0(1 - 0) = U_0$. Đường thẳng $y = U_0$ chính là **tiệm cận ngang** của đồ thị điện áp.
> 3. Để điện áp đạt $99\% U_0$:
>    $$U_0 \left(1 - e^{-\frac{t}{\tau}}\right) = 0.99 U_0 \iff 1 - e^{-\frac{t}{\tau}} = 0.99 \iff e^{-\frac{t}{\tau}} = 0.01$$
>    Lấy lôgarit tự nhiên hai vế:
>    $$-\frac{t}{\tau} = \ln(0.01) = \ln(10^{-2}) = -2\ln 10 \approx -4.605$$
>    $$\Rightarrow t \approx 4.6 \tau$$
>    Trong kỹ thuật, người ta quy ước rằng sau khoảng thời gian $5\tau$, tụ điện được coi như đã nạp đầy $100\%$ điện tích!
