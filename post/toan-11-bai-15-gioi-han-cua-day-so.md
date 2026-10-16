---
title: 'Toán 11 Bài 15: Giới hạn của dãy số - Khái niệm, định lý và các dạng vô định'
description: 'Lý thuyết trọng tâm Bài 15 Toán 11 Kết nối tri thức: Định nghĩa giới hạn hữu hạn và vô cực của dãy số, các định lý phép toán giới hạn, tổng cấp số nhân lùi vô hạn, kỹ thuật khử dạng vô định kèm mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Giới hạn dãy số
  - Giới hạn vô cực
  - Cấp số nhân lùi vô hạn
  - Khử vô định
  - Định lý kẹp
  - Kết nối tri thức
grade: 11
---

# Bài 15. Giới hạn của dãy số

Chào mừng các em bước vào **Chương V: Giới hạn. Hàm số liên tục** — cánh cửa mở ra thế giới của **Giải tích toán học hiện đại**!

Từ thời Hy Lạp cổ đại, triết gia Zeno xứ Elea đã đưa ra nghịch lý nổi tiếng: *"Chàng dũng sĩ Achilles chạy nhanh như gió không bao giờ đuổi kịp một chú rùa chạy trước chàng 100 mét."* Bởi vì khi Achilles đến vị trí ban đầu của rùa, rùa đã nhích thêm được một đoạn; khi Achilles đến điểm mới đó, rùa lại nhích thêm một quãng nữa... Quá trình này diễn ra vô tận. Phải đến thế kỷ 17, với sự ra đời của **khái niệm Giới hạn** do Newton và Leibniz phát triển, nghịch lý trên mới được giải thích trọn vẹn: một tổng gồm vô hạn đại lượng nhỏ dần vẫn có thể hội tụ về một con số hữu hạn!

Giới hạn chính là công cụ giải tích tối thượng cho phép chúng ta tính vận tốc tức thời, độ dốc tiếp tuyến, diện tích hình phẳng cong và khảo sát hành vi của các đại lượng khi số bước tiến ra vô tận.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: GIỚI HẠN CỦA DÃY SỐ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Giới hạn hữu hạn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\lim_{n \to +\infty} u_n = a \Leftrightarrow \lim_{n \to +\infty} |u_n - a| = 0$.<br>• Khoảng cách từ $u_n$ tới $a$ nhỏ hơn mọi số dương $\varepsilon$ tùy ý với $n$ đủ lớn.<br>• Giới hạn cơ bản: $\lim \frac{1}{n^k} = 0$, $\lim q^n = 0$ ($|q| < 1$).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lý phép toán giới hạn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\lim (u_n \pm v_n) = a \pm b$.<br>• $\lim (u_n \cdot v_n) = a \cdot b$.<br>• $\lim \frac{u_n}{v_n} = \frac{a}{b}$ ($b \ne 0$).<br>• $\lim \sqrt{u_n} = \sqrt{a}$ ($u_n \ge 0, a \ge 0$).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Cấp số nhân lùi vô hạn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: Công bội $|q| < 1$.<br>• Tổng: $S = u_1 + u_1 q + u_1 q^2 + \dots = \frac{u_1}{1 - q}$.<br>• Ứng dụng: Biến đổi số thập phân vô hạn tuần hoàn về phân số tối giản.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Giới hạn vô cực & Khử vô định</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dạng $\frac{\infty}{\infty}$: Chia cả tử và mẫu cho lũy thừa cao nhất của $n$.<br>• Dạng $\infty - \infty$: Nhân lượng liên hợp $(\sqrt{A} - \sqrt{B})$.<br>• Dạng lũy thừa $a^n$: Chia cho cơ số có trị tuyệt đối lớn nhất.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Quan sát xu hướng:** Cho dãy số $u_n = \frac{1}{n}$. Khi $n$ nhận các giá trị $10, 100, 1000, 1\,000\,000$, giá trị của $u_n$ tiến dần về số nào?
2. **Ký hiệu giới hạn:** Cách viết $\lim_{n \to +\infty} u_n = 3$ (hoặc viết tắt là $\lim u_n = 3$) được phát biểu bằng lời như thế nào?
3. **Giới hạn số mũ:** Với $q = 0.5$, khi $n$ tăng lên rất lớn thì $(0.5)^n$ tiến về đâu?
4. **Giới hạn của hằng số:** Nếu $c$ là một hằng số thực (ví dụ dãy số $3, 3, 3, 3, \dots$), thì $\lim c$ bằng bao nhiêu?
5. **Nghịch lý chia bánh:** Bạn chia một chiếc bánh làm 2, rồi chia nửa còn lại làm đôi, rồi chia tiếp phần còn lại làm đôi... Cứ tiếp tục mãi mãi, tổng các miếng bánh bạn đã cắt ra có vượt quá 1 chiếc bánh ban đầu không?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Khi $n$ tăng lên rất lớn, $u_n = \frac{1}{n}$ tiến vô cùng gần đến số $0$.
> 2. Phát biểu: "Giới hạn của dãy số $u_n$ khi $n$ dần tới dương vô cực bằng $3$".
> 3. $(0.5)^n = \frac{1}{2^n}$ tiến về $0$ vì $|0.5| < 1$.
> 4. $\lim c = c$ (giới hạn của hằng số bằng chính nó).
> 5. Không, tổng các phần cắt $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots$ tiến đúng về $1$ chiếc bánh (tổng cấp số nhân lùi vô hạn).

---

## I. Khái niệm Giới hạn hữu hạn của Dãy số

### 1. Dãy số có giới hạn 0

Ta nói dãy số $(u_n)$ có **giới hạn là $0$** khi $n$ dần tới dương vô cực (ký hiệu là $\lim_{n \to +\infty} u_n = 0$ hay $\lim u_n = 0$), nếu giá trị tuyệt đối $|u_n|$ có thể nhỏ hơn một số dương bé tùy ý, kể từ một số hạng nào đó trở đi.

$$\lim_{n \to +\infty} u_n = 0 \iff \forall \varepsilon > 0, \exists N \in \mathbb{N}^*: \forall n > N \Rightarrow |u_n| < \varepsilon$$

**Một số giới hạn $0$ cơ bản:**
- $\lim \frac{1}{n} = 0$, $\lim \frac{1}{n^2} = 0$, tổng quát: $\lim \frac{1}{n^k} = 0$ với mọi số nguyên dương $k \ge 1$.
- $\lim \frac{1}{\sqrt{n}} = 0$, $\lim \frac{1}{\sqrt[k]{n}} = 0$ với $k \in \mathbb{N}^*$.
- Nếu $|q| < 1$ thì $\lim q^n = 0$. Ví dụ: $\lim \left(\frac{1}{3}\right)^n = 0$, $\lim \left(-\frac{2}{5}\right)^n = 0$.

### 2. Dãy số có giới hạn hữu hạn $a$

Ta nói dãy số $(u_n)$ có **giới hạn là số thực $a$** khi $n$ dần tới dương vô cực (ký hiệu là $\lim_{n \to +\infty} u_n = a$ hoặc $\lim u_n = a$), nếu:
$$\lim_{n \to +\infty} (u_n - a) = 0$$

Điều này có nghĩa là khi $n$ càng lớn, khoảng cách $|u_n - a|$ trên trục số giữa điểm biểu diễn $u_n$ và điểm biểu diễn $a$ càng trở nên nhỏ tùy ý.

**Quy ước viết:** Khi không ghi rõ chỉ số dưới dấu $\lim$, ta luôn ngầm hiểu là $n \to +\infty$.

---

## II. Phòng thí nghiệm Tương tác: Khám phá Giới hạn Dãy số

Hãy chọn một dãy số và kéo thanh trượt để quan sát các điểm $(n, u_n)$ tiến dần và nằm lọt thỏm bên trong dải lân cận $\varepsilon$ bao quanh đường giới hạn màu xanh lá cây!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px;">
    <label style="font-weight: 600; color: var(--text-color, #1e293b);">Chọn dãy số $(u_n)$:</label>
    <select id="seqSelect" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; font-size: 15px;">
      <option value="1">u_n = (2n + 1) / (n + 1)  (Hội tụ về 2)</option>
      <option value="2">u_n = (-1)^n / n  (Dao động hội tụ về 0)</option>
      <option value="3">u_n = (0.7)^n  (Mũ cơ số bé hội tụ về 0)</option>
      <option value="4">u_n = (3n^2 - 2) / (n^2 + 2)  (Hội tụ về 3)</option>
    </select>
  </div>

  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <label style="font-weight: 600; min-width: 120px;">Số bước $n$: <span id="nVal" style="color: #2563eb; font-size: 18px;">15</span></label>
    <input id="nSlider" type="range" min="3" max="60" value="15" style="flex: 1; cursor: pointer;">
  </div>

  <div style="overflow-x: auto;">
    <svg id="limitSvg" viewBox="0 0 700 320" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="statBox" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang tính toán giá trị dãy số...
  </div>
</div>

<script>
(function() {
  const select = document.getElementById('seqSelect');
  const slider = document.getElementById('nSlider');
  const nVal = document.getElementById('nVal');
  const svg = document.getElementById('limitSvg');
  const statBox = document.getElementById('statBox');

  function getFormula(type, n) {
    if (type === '1') return (2 * n + 1) / (n + 1);
    if (type === '2') return Math.pow(-1, n) / n;
    if (type === '3') return Math.pow(0.7, n);
    if (type === '4') return (3 * n * n - 2) / (n * n + 2);
    return 0;
  }

  function getLimit(type) {
    if (type === '1') return 2;
    if (type === '2') return 0;
    if (type === '3') return 0;
    if (type === '4') return 3;
    return 0;
  }

  function render() {
    const type = select.value;
    const maxN = parseInt(slider.value, 10);
    nVal.textContent = maxN;
    const L = getLimit(type);

    let yMin = L - 1.5, yMax = L + 1.5;
    if (type === '1') { yMin = 1.0; yMax = 2.4; }
    if (type === '2') { yMin = -1.1; yMax = 1.1; }
    if (type === '3') { yMin = -0.2; yMax = 1.0; }
    if (type === '4') { yMin = 0.5; yMax = 3.4; }

    const padL = 55, padR = 30, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 320 - padT - padB;

    const toX = n => padL + ((n - 1) / (60 - 1)) * W;
    const toY = val => padT + H - ((val - yMin) / (yMax - yMin)) * H;

    let html = '';

    // Lưới ngang
    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const v = yMin + (i / yTicks) * (yMax - yMin);
      const y = toY(v);
      html += `<line x1="${padL}" y1="${y}" x2="${padL + W}" y2="${y}" stroke="#f1f5f9" stroke-width="1"/>`;
      html += `<text x="${padL - 10}" y="${y + 4}" font-size="11" text-anchor="end" fill="#94a3b8">${v.toFixed(2)}</text>`;
    }

    // Trục hoành và trục tung
    html += `<line x1="${padL}" y1="${padT + H}" x2="${padL + W + 15}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL + W + 10}" y="${padT + H + 25}" font-size="12" fill="#475569" font-weight="600">n</text>`;
    html += `<line x1="${padL}" y1="${padT - 10}" x2="${padL}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
    html += `<text x="${padL - 10}" y="${padT - 12}" font-size="12" fill="#475569" font-weight="600" text-anchor="end">u_n</text>`;

    // Dải lân cận epsilon = 0.15 quanh L
    const eps = (yMax - yMin) * 0.08;
    const yEpsTop = toY(L + eps);
    const yEpsBottom = toY(L - eps);
    html += `<rect x="${padL}" y="${yEpsTop}" width="${W}" height="${yEpsBottom - yEpsTop}" fill="#10b981" fill-opacity="0.12"/>`;
    html += `<line x1="${padL}" y1="${yEpsTop}" x2="${padL + W}" y2="${yEpsTop}" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/>`;
    html += `<line x1="${padL}" y1="${yEpsBottom}" x2="${padL + W}" y2="${yEpsBottom}" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/>`;
    html += `<text x="${padL + W - 5}" y="${yEpsTop - 5}" font-size="11" fill="#059669" text-anchor="end">Dải lân cận L ± ε</text>`;

    // Đường tiệm cận giới hạn L
    const yL = toY(L);
    html += `<line x1="${padL}" y1="${yL}" x2="${padL + W}" y2="${yL}" stroke="#059669" stroke-width="2" stroke-dasharray="6,4"/>`;
    html += `<text x="${padL + 10}" y="${yL - 6}" font-size="13" font-weight="bold" fill="#047857">Đường giới hạn L = ${L}</text>`;

    // Vẽ các điểm u_n
    let lastX = 0, lastY = 0;
    let pathD = '';
    for (let n = 1; n <= maxN; n++) {
      const val = getFormula(type, n);
      const cx = toX(n);
      const cy = toY(val);
      if (n === 1) pathD += `M ${cx} ${cy}`;
      else pathD += ` L ${cx} ${cy}`;
      lastX = cx; lastY = cy;
    }
    html += `<path d="${pathD}" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="2,2"/>`;

    for (let n = 1; n <= maxN; n++) {
      const val = getFormula(type, n);
      const cx = toX(n);
      const cy = toY(val);
      const isLast = (n === maxN);
      const r = isLast ? 5 : 3.5;
      const fill = isLast ? '#ef4444' : '#2563eb';
      html += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="#fff" stroke-width="1.5"/>`;
    }

    svg.innerHTML = html;

    const currentVal = getFormula(type, maxN);
    const diff = Math.abs(currentVal - L);
    statBox.innerHTML = `<strong>Tại bước $n = ${maxN}$:</strong> Giá trị $u_{${maxN}} = ${currentVal.toFixed(6)}$ · Khoảng cách tới giới hạn: $|u_{${maxN}} - ${L}| = ${diff.toFixed(6)}$ <br><span style="color:#059669;">Nhận xét: Khi $n$ càng lớn, khoảng cách $|u_n - L|$ càng tiến về 0 tuyệt đối!</span>`;
  }

  select.addEventListener('change', render);
  slider.addEventListener('input', render);
  render();
})();
</script>

---

## III. Các Định lý và Phép toán về Giới hạn Hữu hạn

Giả sử $\lim_{n \to +\infty} u_n = a$ và $\lim_{n \to +\infty} v_n = b$ ($a, b \in \mathbb{R}$). Khi đó:

### 1. Các phép toán đại số
1. **Giới hạn của tổng/hiệu:**
   $$\lim (u_n + v_n) = a + b \quad \text{và} \quad \lim (u_n - v_n) = a - b$$
2. **Giới hạn của tích:**
   $$\lim (u_n \cdot v_n) = a \cdot b$$
3. **Giới hạn với hằng số:**
   $$\lim (c \cdot u_n) = c \cdot a \quad (c \in \mathbb{R})$$
4. **Giới hạn của thương:**
   $$\lim \frac{u_n}{v_n} = \frac{a}{b} \quad (\text{với } b \ne 0 \text{ và } v_n \ne 0, \forall n)$$
5. **Giới hạn của căn bậc hai:**
   $$\text{Nếu } u_n \ge 0, \forall n \text{ thì } a \ge 0 \text{ và } \lim \sqrt{u_n} = \sqrt{a}$$

### 2. Định lý Kẹp (Squeeze Theorem)

> [!NOTE]
> **Định lý Kẹp:**
> Nếu có hai dãy số $(v_n)$ và $(w_n)$ cùng hội tụ về $a$ ($\lim v_n = \lim w_n = a$) và thỏa mãn:
> $$v_n \le u_n \le w_n \quad \text{với mọi } n \in \mathbb{N}^*$$
> thì dãy số bị kẹp ở giữa cũng hội tụ về $a$:
> $$\lim u_n = a$$

**Ví dụ ứng dụng định lý kẹp:**
Tính giới hạn $\lim \frac{\sin n}{n}$.
Vì $-1 \le \sin n \le 1$ với mọi $n \in \mathbb{N}^*$, ta chia cả 3 vế cho $n > 0$:
$$-\frac{1}{n} \le \frac{\sin n}{n} \le \frac{1}{n}$$
Vì $\lim \left(-\frac{1}{n}\right) = 0$ và $\lim \left(\frac{1}{n}\right) = 0$, theo định lý kẹp ta suy ra ngay:
$$\lim \frac{\sin n}{n} = 0$$

---

## IV. Tổng của Cấp số nhân lùi vô hạn

### 1. Khái niệm và Công thức tính tổng

Một cấp số nhân vô hạn $u_1, u_1 q, u_1 q^2, \dots, u_1 q^{n-1}, \dots$ có công bội $q$ thỏa mãn $|q| < 1$ được gọi là một **cấp số nhân lùi vô hạn**.

Tổng của $n$ số hạng đầu tiên của cấp số nhân là:
$$S_n = u_1 + u_2 + \dots + u_n = u_1 \cdot \frac{1 - q^n}{1 - q} = \frac{u_1}{1 - q} - \frac{u_1}{1 - q} \cdot q^n$$

Vì $|q| < 1 \Rightarrow \lim q^n = 0$, do đó khi cho $n \to +\infty$, ta được:
$$S = \lim_{n \to +\infty} S_n = \frac{u_1}{1 - q}$$

> [!IMPORTANT]
> **Công thức tổng cấp số nhân lùi vô hạn:**
> $$S = u_1 + u_2 + u_3 + \dots = \sum_{k=1}^{+\infty} u_k = \frac{u_1}{1 - q} \quad (|q| < 1)$$

### 2. Ứng dụng: Biến đổi số thập phân vô hạn tuần hoàn sang phân số

**Ví dụ:** Biểu diễn số thập phân vô hạn tuần hoàn $0.3333\dots = 0.(3)$ và $0.212121\dots = 0.(21)$ dưới dạng phân số tối giản.
- Với $0.(3) = 0.3 + 0.03 + 0.003 + \dots$:
  Đây là cấp số nhân lùi vô hạn với $u_1 = 0.3 = \frac{3}{10}$ và $q = 0.1 = \frac{1}{10}$.
  $$S = \frac{\frac{3}{10}}{1 - \frac{1}{10}} = \frac{\frac{3}{10}}{\frac{9}{10}} = \frac{1}{3}$$
- Với $0.(21) = 0.21 + 0.0021 + 0.000021 + \dots$:
  Cấp số nhân lùi vô hạn có $u_1 = 0.21 = \frac{21}{100}$ và công bội $q = 0.01 = \frac{1}{100}$.
  $$S = \frac{\frac{21}{100}}{1 - \frac{1}{100}} = \frac{21}{99} = \frac{7}{33}$$

---

## V. Giới hạn Vô cực của Dãy số

### 1. Dãy số tiến ra vô cực

- Dãy số $(u_n)$ có giới hạn $+\infty$ (ký hiệu $\lim u_n = +\infty$) nếu $u_n$ có thể lớn hơn bất kì số dương tùy ý, kể từ một số hạng nào đó trở đi.
- Dãy số $(u_n)$ có giới hạn $-\infty$ (ký hiệu $\lim u_n = -\infty$) nếu $\lim (-u_n) = +\infty$.

**Các giới hạn vô cực cơ bản:**
- $\lim n^k = +\infty$ với mọi số nguyên dương $k \ge 1$.
- $\lim q^n = +\infty$ nếu $q > 1$ (ví dụ: $\lim 2^n = +\infty$, $\lim 1.05^n = +\infty$).

### 2. Các quy tắc tính giới hạn có liên quan đến vô cực

**Quy tắc 1: Giới hạn của tích $\lim (u_n \cdot v_n)$**

| $\lim u_n$ | $\lim v_n$ | Dấu của $v_n$ | $\lim (u_n \cdot v_n)$ |
| :---: | :---: | :---: | :---: |
| $a > 0$ | $+\infty$ | Tùy ý | $+\infty$ |
| $a < 0$ | $+\infty$ | Tùy ý | $-\infty$ |
| $a > 0$ | $-\infty$ | Tùy ý | $-\infty$ |
| $a < 0$ | $-\infty$ | Tùy ý | $+\infty$ |

**Quy tắc 2: Giới hạn của thương $\lim \frac{u_n}{v_n}$**

| $\lim u_n$ | $\lim v_n$ | Điều kiện của $v_n$ | $\lim \frac{u_n}{v_n}$ |
| :---: | :---: | :---: | :---: |
| $a$ | $\pm\infty$ | $v_n \ne 0$ | **$0$** |
| $a > 0$ | $0$ | $v_n > 0$ kể từ số hạng nào đó | **$+\infty$** |
| $a > 0$ | $0$ | $v_n < 0$ kể từ số hạng nào đó | **$-\infty$** |
| $a < 0$ | $0$ | $v_n > 0$ kể từ số hạng nào đó | **$-\infty$** |
| $a < 0$ | $0$ | $v_n < 0$ kể từ số hạng nào đó | **$+\infty$** |

---

## VI. Các Kỹ thuật Khử Dạng Vô định Kinh điển

Trong giới hạn, các biểu thức có dạng $\frac{\infty}{\infty}$, $\infty - \infty$, $0 \cdot \infty$, $\frac{0}{0}$ được gọi là **dạng vô định**. Để tìm giới hạn, ta phải biến đổi đại số để "khử" dạng vô định.

### Dạng 1: Phân thức đại số $\frac{\infty}{\infty}$

**Phương pháp:** Chia cả tử và mẫu cho $n^k$, trong đó $k$ là số mũ cao nhất của $n$ ở mẫu số (hoặc đặt lũy thừa bậc cao nhất làm nhân tử chung).

$$\lim \frac{P(n)}{Q(n)}$$
- **Bậc tử = Bậc mẫu:** Giới hạn bằng tỉ số hai hệ số của số hạng bậc cao nhất.
- **Bậc tử < Bậc mẫu:** Giới hạn bằng $0$.
- **Bậc tử > Bậc mẫu:** Giới hạn tiến ra $\pm\infty$.

**Ví dụ 1:** Tính $I = \lim \frac{4n^3 - 3n + 5}{2n^3 + n^2 - 1}$.  
*Giải:* Chia cả tử và mẫu cho $n^3$:
$$I = \lim \frac{4 - \frac{3}{n^2} + \frac{5}{n^3}}{2 + \frac{1}{n} - \frac{1}{n^3}} = \frac{4 - 0 + 0}{2 + 0 - 0} = \frac{4}{2} = 2$$

**Ví dụ 2:** Tính $J = \lim \frac{2n^2 + 5}{3n^3 - n + 1}$.  
*Giải:* Chia cả tử và mẫu cho $n^3$:
$$J = \lim \frac{\frac{2}{n} + \frac{5}{n^3}}{3 - \frac{1}{n^2} + \frac{1}{n^3}} = \frac{0 + 0}{3 - 0 + 0} = 0$$

---

### Dạng 2: Căn thức và dạng vô định $\infty - \infty$

Khi gặp hiệu chứa căn thức $(\sqrt{A} - \sqrt{B})$ mà khi $n \to +\infty$ cả hai đều tiến ra $+\infty$ với cùng bậc cao nhất và cùng hệ số, ta sử dụng **phương pháp nhân liên hợp**:
$$(\sqrt{A} - \sqrt{B}) = \frac{A - B}{\sqrt{A} + \sqrt{B}}$$
$$(\sqrt[3]{A} - \sqrt[3]{B}) = \frac{A - B}{\sqrt[3]{A^2} + \sqrt[3]{A B} + \sqrt[3]{B^2}}$$

**Ví dụ 3:** Tính $L = \lim \left(\sqrt{n^2 + 4n} - n\right)$.  
*Giải:* Đây là dạng $\infty - \infty$. Nhân liên hợp tử và mẫu với $(\sqrt{n^2 + 4n} + n)$:
$$L = \lim \frac{(\sqrt{n^2 + 4n} - n)(\sqrt{n^2 + 4n} + n)}{\sqrt{n^2 + 4n} + n} = \lim \frac{(n^2 + 4n) - n^2}{\sqrt{n^2 + 4n} + n} = \lim \frac{4n}{\sqrt{n^2\left(1 + \frac{4}{n}\right)} + n}$$
Vì $n > 0 \Rightarrow \sqrt{n^2} = n$. Chia cả tử và mẫu cho $n$:
$$L = \lim \frac{4}{\sqrt{1 + \frac{4}{n}} + 1} = \frac{4}{\sqrt{1 + 0} + 1} = \frac{4}{2} = 2$$

> [!WARNING]
> **Khi nào KHÔNG cần nhân liên hợp?**
> Nếu hệ số của bậc cao nhất không bằng nhau, hiệu không phải dạng vô định triệt tiêu. Khi đó ta chỉ cần **đặt $n$ làm nhân tử chung**:
> $$\lim \left(\sqrt{4n^2 + 1} - n\right) = \lim n \left(\sqrt{4 + \frac{1}{n^2}} - 1\right) = +\infty \cdot (2 - 1) = +\infty$$

---

### Dạng 3: Dãy số mũ lũy thừa $a^n, b^n$

**Phương pháp:** Chia cả tử và mẫu cho $q^n$, trong đó $q$ là cơ số có giá trị tuyệt đối lớn nhất xuất hiện trong phân thức.

**Ví dụ 4:** Tính $K = \lim \frac{3 \cdot 2^n - 4 \cdot 5^n + 1}{2 \cdot 5^n + 3^n}$.  
*Giải:* Cơ số lớn nhất ở mẫu là $5$. Chia cả tử và mẫu cho $5^n$:
$$K = \lim \frac{3 \cdot \left(\frac{2}{5}\right)^n - 4 + \left(\frac{1}{5}\right)^n}{2 + \left(\frac{3}{5}\right)^n}$$
Vì $\lim \left(\frac{2}{5}\right)^n = 0$, $\lim \left(\frac{1}{5}\right)^n = 0$, $\lim \left(\frac{3}{5}\right)^n = 0$, ta có:
$$K = \frac{3 \cdot 0 - 4 + 0}{2 + 0} = \frac{-4}{2} = -2$$

---

## VII. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị của \\lim \\frac{1}{n^3} bằng:",
  "options": [
    "A. 1",
    "B. 0",
    "C. +\\infty",
    "D. 3"
  ],
  "answer": "B. 0",
  "explanation": "Theo giới hạn cơ bản, với mọi số nguyên dương k, \\lim \\frac{1}{n^k} = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Dãy số nào sau đây có giới hạn bằng 0?",
  "options": [
    "A. u_n = (1.2)^n",
    "B. u_n = (-0.8)^n",
    "C. u_n = (n + 1) / n",
    "D. u_n = (-1)^n"
  ],
  "answer": "B. u_n = (-0.8)^n",
  "explanation": "Với q = -0.8 có |q| = 0.8 < 1 nên \\lim q^n = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tính giới hạn \\lim \\frac{3n - 5}{2n + 1}:",
  "options": [
    "A. 3/2",
    "B. -5",
    "C. 0",
    "D. +\\infty"
  ],
  "answer": "A. 3/2",
  "explanation": "Chia cả tử và mẫu cho n: \\lim (3 - 5/n) / (2 + 1/n) = 3/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tính giới hạn \\lim \\frac{2n^2 - 1}{n^3 + 3n}:",
  "options": [
    "A. 2",
    "B. 0",
    "C. +\\infty",
    "D. -1/3"
  ],
  "answer": "B. 0",
  "explanation": "Bậc của tử (bậc 2) nhỏ hơn bậc của mẫu (bậc 3), do đó giới hạn bằng 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho \\lim u_n = -3 và \\lim v_n = 2. Khi đó \\lim (2u_n - 3v_n) bằng:",
  "options": [
    "A. 0",
    "B. -12",
    "C. -6",
    "D. -1"
  ],
  "answer": "B. -12",
  "explanation": "\\lim (2u_n - 3v_n) = 2(-3) - 3(2) = -6 - 6 = -12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Tổng của cấp số nhân lùi vô hạn S = 1 + 1/2 + 1/4 + 1/8 + ... bằng:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3/2",
    "D. +\\infty"
  ],
  "answer": "B. 2",
  "explanation": "u_1 = 1, q = 1/2. Áp dụng công thức S = u_1 / (1 - q) = 1 / (1 - 1/2) = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Số thập phân vô hạn tuần hoàn 0.6666... = 0.(6) viết dưới dạng phân số tối giản là:",
  "options": [
    "A. 6/10",
    "B. 2/3",
    "C. 3/5",
    "D. 7/11"
  ],
  "answer": "B. 2/3",
  "explanation": "u_1 = 0.6 = 6/10, q = 0.1 = 1/10. S = (6/10) / (1 - 1/10) = (6/10) / (9/10) = 6/9 = 2/3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Tính giới hạn \\lim (\\sqrt{n^2 + 2n} - n):",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. +\\infty"
  ],
  "answer": "B. 1",
  "explanation": "Nhân liên hợp: \\lim 2n / (\\sqrt{n^2 + 2n} + n) = \\lim 2 / (\\sqrt{1 + 2/n} + 1) = 2 / (1 + 1) = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tính giới hạn \\lim \\frac{2^n + 4^n}{3^n + 4^{n+1}}:",
  "options": [
    "A. 1/4",
    "B. 1",
    "C. 4/3",
    "D. 0"
  ],
  "answer": "A. 1/4",
  "explanation": "Chia cả tử và mẫu cho 4^n: \\lim ((2/4)^n + 1) / ((3/4)^n + 4) = (0 + 1) / (0 + 4) = 1/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khẳng định nào sau đây SAI?",
  "options": [
    "A. Nếu \\lim u_n = a thì \\lim |u_n| = |a|",
    "B. Nếu \\lim u_n = +\\infty và \\lim v_n = a > 0 thì \\lim (u_n \\cdot v_n) = +\\infty",
    "C. Dãy số tăng và bị chặn trên thì có giới hạn hữu hạn",
    "D. Nếu \\lim u_n = 0 thì \\lim (1 / u_n) luôn bằng +\\infty"
  ],
  "answer": "D. Nếu \\lim u_n = 0 thì \\lim (1 / u_n) luôn bằng +\\infty",
  "explanation": "Khẳng định D sai vì nếu u_n âm (ví dụ u_n = -1/n) thì 1/u_n = -n tiến về -\\infty, hoặc nếu u_n đổi dấu luân phiên thì 1/u_n không có giới hạn."
}'></div>

---

## VIII. Bài tập Tự luyện & Thử thách Ứng dụng

### Bài tập Tự luận

1. **Tính các giới hạn dãy phân thức:**
   a) $\lim \frac{3n^2 - 5n + 1}{2n^2 + 7}$  
   b) $\lim \frac{\sqrt{4n^2 + 3n - 1}}{3n + 2}$  
   c) $\lim \frac{(2n - 1)(3n + 2)^2}{(n + 1)^3}$

2. **Khử dạng vô định bằng liên hợp:**
   a) $\lim \left(\sqrt{n^2 + 6n} - \sqrt{n^2 - 2n}\right)$  
   b) $\lim \left(\sqrt[3]{n^3 + 3n^2} - n\right)$  
   c) $\lim \frac{1}{\sqrt{n + 1} - \sqrt{n}}$

3. **Cấp số nhân lùi vô hạn:**
   a) Tính tổng $S = 2 - \frac{2}{3} + \frac{2}{9} - \frac{2}{27} + \dots$  
   b) Chuyển số thập phân vô hạn tuần hoàn $1.2(34) = 1.2343434\dots$ thành phân số tối giản.

---

### Thử thách Thực tế: Bông tuyết Koch (Koch Snowflake)

Năm 1904, nhà toán học Thụy Điển Helge von Koch giới thiệu một trong những hình học fractal kỳ thú nhất:
- Bắt đầu từ một tam giác đều cạnh bằng $a = 1$ (chu vi $P_0 = 3$, diện tích $S_0 = \frac{\sqrt{3}}{4}$).
- Ở mỗi bước tiếp theo, chia mỗi cạnh làm 3 đoạn bằng nhau và dựng trên đoạn ở giữa một tam giác đều mới hướng ra ngoài, rồi xóa đoạn đáy đi.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ:</strong><br>
1. Tìm chu vi $P_n$ của bông tuyết sau bước thứ $n$ và tính $\lim_{n \to +\infty} P_n$.<br>
2. Tính diện tích $S_n$ của bông tuyết sau bước thứ $n$ và tìm $\lim_{n \to +\infty} S_n$.<br>
3. <em>Ý nghĩa triết học & vật lý:</em> Bông tuyết Koch có đường biên giới hạn dài vô hạn nhưng lại bao bọc một diện tích hữu hạn hoàn toàn!
</div>

> [!TIP]
> **Hướng dẫn giải:**
> 1. Ở mỗi bước, mỗi cạnh bị thay thế bởi 4 cạnh mới có độ dài bằng $\frac{1}{3}$ cạnh cũ:
>    $$P_n = 3 \cdot \left(\frac{4}{3}\right)^n$$
>    Vì cơ số $\frac{4}{3} > 1$, suy ra $\lim_{n \to +\infty} P_n = +\infty$ (chu vi tiến ra vô cực!).
> 2. Ở bước $n \ge 1$, ta thêm vào $3 \cdot 4^{n-1}$ tam giác đều nhỏ xíu, mỗi tam giác có cạnh $\left(\frac{1}{3}\right)^n$:
>    $$S = S_0 + \sum_{k=1}^{+\infty} 3 \cdot 4^{k-1} \cdot S_0 \cdot \left(\frac{1}{9}\right)^k = S_0 \left(1 + \frac{3}{4} \sum_{k=1}^{+\infty} \left(\frac{4}{9}\right)^k\right)$$
>    Tổng cấp số nhân lùi vô hạn với $q = \frac{4}{9} < 1$:
>    $$\sum_{k=1}^{+\infty} \left(\frac{4}{9}\right)^k = \frac{\frac{4}{9}}{1 - \frac{4}{9}} = \frac{4}{5}$$
>    Do đó:
>    $$\lim_{n \to +\infty} S_n = S_0 \left(1 + \frac{3}{4} \cdot \frac{4}{5}\right) = \frac{8}{5} S_0 = \frac{8}{5} \cdot \frac{\sqrt{3}}{4} = \frac{2\sqrt{3}}{5}$$
>    Diện tích hội tụ về đúng $\frac{2\sqrt{3}}{5}$ — một hòn đảo có diện tích hữu hạn nhưng đường bờ biển dài vô tận!
