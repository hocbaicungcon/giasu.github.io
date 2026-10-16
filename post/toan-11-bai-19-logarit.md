---
title: 'Toán 11 Bài 19: Lôgarit - Định nghĩa, tính chất, công thức đổi cơ số và ứng dụng thực tế'
description: 'Lý thuyết trọng tâm Bài 19 Toán 11 Kết nối tri thức: Định nghĩa phép toán lôgarit, các quy tắc tính lôgarit của tích, thương, lũy thừa, công thức đổi cơ số, lôgarit tự nhiên (ln), ứng dụng thang đo Richter, độ pH và decibel kèm mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Lôgarit
  - Đổi cơ số
  - Lôgarit tự nhiên
  - Lôgarit thập phân
  - Thang đo Richter
  - Độ pH
  - Decibel
  - Kết nối tri thức
grade: 11
---

# Bài 19. Lôgarit

Năm 1614, nhà toán học người Scotland **John Napier** công bố một phát minh làm chấn động toàn bộ giới khoa học châu Âu: **Phép toán Lôgarit** (Logarithm).

Vào thời kỳ đó, các nhà thiên văn học đang miệt mài tính toán quỹ đạo các hành tinh với những con số có hàng chục chữ số. Mỗi phép nhân, chia hay khai căn các đại lượng khổng lồ mất hàng tuần trời tính tay trên giấy. Nhờ có phát minh lôgarit của Napier, người ta có thể:
- Biến **phép nhân** phức tạp thành **phép cộng** đơn giản: $\log(xy) = \log x + \log y$.
- Biến **phép chia** cồng kềnh thành **phép trừ**: $\log\left(\frac{x}{y}\right) = \log x - \log y$.
- Biến **phép nâng lên lũy thừa** thành **phép nhân**: $\log(x^\alpha) = \alpha \log x$.

Nhà toán học và thiên văn học lừng danh Pierre-Simon Laplace từng thốt lên lời ca ngợi bất hủ: *"Bằng cách giảm bớt lao động tính toán, phát minh lôgarit đã nhân đôi tuổi thọ làm việc của các nhà thiên văn học!"*

Ngày nay, máy tính điện tử đã làm thay việc tính toán, nhưng lôgarit vẫn là ngôn ngữ chuẩn mực để con người "thu nhỏ" những thang đo tự nhiên có biên độ chênh lệch hàng triệu lần: từ năng lượng của những trận động đất kinh hoàng (thang đo Richter), cường độ âm thanh (thang đo Decibel) cho đến độ axit trong hóa học (thang đo pH).

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG PHÉP TOÁN LÔGARIT</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Lôgarit</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Điều kiện: Cơ số $a > 0, a \ne 1$; biểu thức lấy log $b > 0$.<br>• $\alpha = \log_a b \iff a^\alpha = b$.<br>• Tính chất: $\log_a 1 = 0$, $\log_a a = 1$, $\log_a a^\alpha = \alpha$, $a^{\log_a b} = b$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Các quy tắc tính cơ bản</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tích:</strong> $\log_a (xy) = \log_a x + \log_a y$.<br>• <strong>Thương:</strong> $\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$.<br>• <strong>Lũy thừa:</strong> $\log_a (x^\alpha) = \alpha \log_a x$, $\log_{a^\beta} x = \frac{1}{\beta} \log_a x$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Công thức Đổi cơ số</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\log_a b = \frac{\log_c b}{\log_c a}$ ($c > 0, c \ne 1$).<br>• Nghịch đảo cơ số: $\log_a b = \frac{1}{\log_b a}$.<br>• Nối cầu cơ số: $\log_a b \cdot \log_b c = \log_a c$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Lôgarit Thập phân & Tự nhiên</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Lôgarit thập phân:</strong> $\log b = \lg b = \log_{10} b$.<br>• <strong>Lôgarit tự nhiên:</strong> $\ln b = \log_e b$ với $e \approx 2.71828$.<br>• Ứng dụng: Thang Richter, độ pH $= -\log[H^+]$, decibel.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tìm số mũ:** Phương trình $2^x = 8$ có nghiệm là bao nhiêu? Số $x$ này chính là $\log_2 8$.
2. **Lũy thừa đặc biệt:** $10^x = 1000$ thì $x = ?$
3. **Số mũ 0:** Với mọi cơ số $a > 0, a \ne 1$, giá trị của $\log_a 1$ bằng bao nhiêu?
4. **Cơ số bằng biểu thức:** Giá trị của $\log_5 5$ bằng bao nhiêu?
5. **Số âm có logarit không:** Biểu thức $\log_2 (-4)$ hay $\log_{-3} 9$ có tồn tại trong tập số thực không?

> [!TIP]
> **Giải đáp khởi động:**
> 1. $2^x = 8 = 2^3 \Rightarrow x = 3$. Vậy $\log_2 8 = 3$.
> 2. $10^3 = 1000 \Rightarrow x = 3$, tức $\log_{10} 1000 = 3$.
> 3. $\log_a 1 = 0$ vì $a^0 = 1$.
> 4. $\log_5 5 = 1$ vì $5^1 = 5$.
> 5. Không tồn tại! Biểu thức lấy lôgarit bắt buộc phải là số dương ($b > 0$) và cơ số phải dương, khác 1 ($a > 0, a \ne 1$).

---

## I. Khái niệm và Tính chất của Lôgarit

### 1. Định nghĩa Lôgarit

Cho hai số thực dương $a, b$ với $a \ne 1$. Số $\alpha$ thỏa mãn đẳng thức $a^\alpha = b$ được gọi là **lôgarit cơ số $a$ của $b$**, ký hiệu là $\log_a b$:

$$\alpha = \log_a b \iff a^\alpha = b$$

> [!IMPORTANT]
> **Điều kiện tồn tại của $\log_a b$:**
> Để biểu thức $\log_a b$ có nghĩa, ta **bắt buộc phải có**:
> $$\begin{cases} a > 0 \\ a \ne 1 \\ b > 0 \end{cases}$$
> - Không có lôgarit của số âm hoặc số $0$!
> - Cơ số của lôgarit không thể là số âm, không thể bằng $0$ và không thể bằng $1$.

**Ví dụ:**
- $\log_3 9 = 2$ vì $3^2 = 9$.
- $\log_2 \frac{1}{16} = -4$ vì $2^{-4} = \frac{1}{2^4} = \frac{1}{16}$.
- $\log_5 \sqrt{5} = \frac{1}{2}$ vì $5^{\frac{1}{2}} = \sqrt{5}$.

---

### 2. Bốn tính chất cơ bản

Từ định nghĩa $\log_a b$, với mọi $a > 0, a \ne 1$ và $b > 0$, ta có ngay:

1. $\log_a 1 = 0$ *(vì $a^0 = 1$)*
2. $\log_a a = 1$ *(vì $a^1 = a$)*
3. $\log_a (a^\alpha) = \alpha$ với mọi $\alpha \in \mathbb{R}$
4. $a^{\log_a b} = b$

**Ví dụ áp dụng:**
- Tính $A = 3^{\log_3 7} \Rightarrow A = 7$.
- Tính $B = 4^{\log_2 5} = (2^2)^{\log_2 5} = 2^{2 \log_2 5} = 2^{\log_2 (5^2)} = 25$.

---

## II. Các Quy tắc Tính Lôgarit

Cho $a > 0, a \ne 1$ và các số thực dương $x, y > 0$:

### 1. Lôgarit của một tích
Lôgarit của một tích bằng tổng các lôgarit:
$$\log_a (x \cdot y) = \log_a x + \log_a y$$

*(Mở rộng cho tích nhiều số: $\log_a (x_1 \cdot x_2 \dots x_n) = \log_a x_1 + \log_a x_2 + \dots + \log_a x_n$).*

### 2. Lôgarit của một thương
Lôgarit của một thương bằng hiệu các lôgarit:
$$\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$$

Đặc biệt khi $x = 1$:
$$\log_a \left(\frac{1}{y}\right) = -\log_a y$$

### 3. Lôgarit của một lũy thừa
- Đưa số mũ ra trước dấu lôgarit:
  $$\log_a (x^\alpha) = \alpha \log_a x \quad (\alpha \in \mathbb{R})$$
- Đặc biệt với căn bậc $n$:
  $$\log_a \sqrt[n]{x} = \log_a (x^{\frac{1}{n}}) = \frac{1}{n} \log_a x$$
- Đưa số mũ ở cơ số ra trước:
  $$\log_{a^\beta} x = \frac{1}{\beta} \log_a x \quad (\beta \ne 0)$$
- Kết hợp cả hai:
  $$\log_{a^\beta} (x^\alpha) = \frac{\alpha}{\beta} \log_a x$$

**Ví dụ:**
- $\log_2 (8 \cdot 16) = \log_2 8 + \log_2 16 = 3 + 4 = 7$.
- $\log_3 \left(\frac{81}{27}\right) = \log_3 81 - \log_3 27 = 4 - 3 = 1$.
- $\log_8 32 = \log_{2^3} (2^5) = \frac{5}{3} \log_2 2 = \frac{5}{3}$.

---

## III. Công thức Đổi cơ số

Khi tính toán hoặc rút gọn, các biểu thức thường chứa các lôgarit khác cơ số. Để quy về cùng một cơ số chung, ta sử dụng các **công thức đổi cơ số**:

> [!IMPORTANT]
> **Công thức đổi cơ số tổng quát:**
> Cho $a, b, c$ là các số thực dương với $a \ne 1, c \ne 1$:
> $$\log_a b = \frac{\log_c b}{\log_c a}$$

**Các hệ quả đặc sắc:**
1. **Hoán đổi cơ số và biểu thức:**
   $$\log_a b = \frac{1}{\log_b a} \quad (b \ne 1)$$
2. **Quy tắc mắt xích (nối cầu cơ số):**
   $$\log_a b \cdot \log_b c = \log_a c$$
   *(Mở rộng: $\log_a b \cdot \log_b c \cdot \log_c d = \log_a d$)*

**Ví dụ:** Tính giá trị $P = \log_2 3 \cdot \log_3 5 \cdot \log_5 8$.  
*Giải:* Áp dụng quy tắc nối cầu:
$$P = \log_2 8 = 3$$

---

## IV. Lôgarit Thập phân và Lôgarit Tự nhiên

Trong thực hành khoa học, có hai cơ số đặc biệt thông dụng:

### 1. Lôgarit thập phân (Cơ số 10)
- Là lôgarit cơ số $10$, ký hiệu là $\log b$ hoặc $\lg b$ (bỏ ghi số 10).
- $\log b = \alpha \iff 10^\alpha = b$.
- Ví dụ: $\log 10 = 1, \log 100 = 2, \log 0.001 = -3$.

### 2. Lôgarit tự nhiên (Cơ số $e$)
- Là lôgarit cơ số $e$ (với $e$ là số vô tỉ Euler: $e = \lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n \approx 2.718281828\dots$).
- Ký hiệu là $\ln b$ (đọc là "lô-ga-rít tự nhiên" hoặc "len $b$").
- $\ln b = \alpha \iff e^\alpha = b$.
- Ví dụ: $\ln e = 1, \ln 1 = 0, \ln (e^5) = 5$.

---

## V. Phòng thí nghiệm Tương tác: Thang đo Richter & Âm lượng Decibel

Tại sao khi động đất tăng thêm 1 độ Richter thì năng lượng tàn phá lại tăng gấp hơn 30 lần? Tại sao âm thanh $80\,\text{dB}$ lại ồn gấp 10 lần âm thanh $70\,\text{dB}$? Hãy kéo thanh trượt để khám phá sự kỳ diệu của **thang đo Lôgarit**!

<div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px;">
    <label style="font-weight: 600; color: var(--text-color, #1e293b);">Chọn thang đo ứng dụng:</label>
    <select id="logAppSelect" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; font-size: 15px;">
      <option value="richter">1. Thang đo Richter (Độ lớn Động đất M = log(A/A_0))</option>
      <option value="decibel">2. Thang đo Decibel (Mức cường độ âm L = 10 log(I/I_0))</option>
      <option value="ph">3. Thang đo độ pH dung dịch (pH = -log[H+])</option>
    </select>
  </div>

  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <label style="font-weight: 600; min-width: 150px;">Mức thang đo: <span id="magDisplay" style="color: #2563eb; font-size: 18px;">5.0</span></label>
    <input id="magSlider" type="range" min="10" max="90" value="50" style="flex: 1; cursor: pointer;">
  </div>

  <div style="overflow-x: auto;">
    <svg id="logSvg" viewBox="0 0 700 280" style="width: 100%; max-width: 700px; height: auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" data-interactive-done="true">
    </svg>
  </div>

  <div id="logStat" style="margin-top: 14px; font-size: 14px; color: #475569; background: #fff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    Đang phân tích thang đo lôgarit...
  </div>
</div>

<script>
(function() {
  const select = document.getElementById('logAppSelect');
  const slider = document.getElementById('magSlider');
  const magDisplay = document.getElementById('magDisplay');
  const svg = document.getElementById('logSvg');
  const stat = document.getElementById('logStat');

  function render() {
    const mode = select.value;
    const val = slider.value / 10;
    magDisplay.textContent = val.toFixed(1);

    const padL = 60, padR = 40, padT = 30, padB = 40;
    const W = 700 - padL - padR;
    const H = 280 - padT - padB;

    let html = '';

    if (mode === 'richter') {
      const M = val;
      const amplitudeRatio = Math.pow(10, M);
      const energyJoules = Math.pow(10, 4.8 + 1.5 * M);

      // Trục so sánh biên độ từ M = 1 đến 9
      html += `<line x1="${padL}" y1="${padT + H}" x2="${padL + W}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
      for (let m = 1; m <= 9; m++) {
        const x = padL + ((m - 1) / 8) * W;
        html += `<line x1="${x}" y1="${padT + H}" x2="${x}" y2="${padT + H + 8}" stroke="#64748b" stroke-width="1.5"/>`;
        html += `<text x="${x}" y="${padT + H + 24}" font-size="12" fill="#475569" text-anchor="middle">M=${m}</text>`;
      }

      // Cột năng lượng biểu diễn theo thang log (chiều cao tỉ lệ với M)
      const curX = padL + ((M - 1) / 8) * W;
      const colH = ((M - 1) / 8) * (H - 20) + 20;
      const colColor = M < 4 ? '#10b981' : M < 6 ? '#f59e0b' : '#dc2626';

      html += `<rect x="${curX - 25}" y="${padT + H - colH}" width="50" height="${colH}" fill="${colColor}" rx="6" opacity="0.85"/>`;
      html += `<text x="${curX}" y="${padT + H - colH - 10}" font-size="13" font-weight="bold" fill="${colColor}" text-anchor="middle">10^${M.toFixed(1)} lần</text>`;

      // Vạch cảnh báo
      html += `<line x1="${padL}" y1="${padT + 30}" x2="${padL + W}" y2="${padT + 30}" stroke="#dc2626" stroke-dasharray="4,4"/>`;
      html += `<text x="${padL + 10}" y="${padT + 22}" font-size="11" fill="#dc2626" font-weight="bold">Ngưỡng thảm họa (M ≥ 7.0)</text>`;

      svg.innerHTML = html;

      let desc = '';
      if (M < 3.5) desc = 'Rung lắc cực nhẹ, hầu như người bình thường không cảm nhận được.';
      else if (M < 5.5) desc = 'Đồ vật trong nhà rung chuyển kêu lách cách, cảm nhận rõ rệt.';
      else if (M < 7.0) desc = 'Nứt tường, đổ cây cối, gây thiệt hại nhà cửa vừa phải.';
      else desc = 'ĐỘNG ĐẤT HUỶ DIỆT: sập cầu đường, sập toà nhà kiên cố, sóng thần!';

      stat.innerHTML = `<strong>Thang Richter $M = ${M.toFixed(1)}$:</strong> Biên độ sóng địa chấn lớn gấp $10^{${M.toFixed(1)}} \\approx ${amplitudeRatio.toExponential(2)}$ lần sóng chuẩn $A_0$.<br>Năng lượng giải phóng: $E \\approx ${energyJoules.toExponential(2)}\\text{ Joules}$ (Mỗi khi $M$ tăng 1 độ, năng lượng tăng gấp $10^{1.5} \\approx 31.6$ lần!).<br><span style="color:${colColor}; font-weight:600;">Hiện trạng: ${desc}</span>`;
    } else if (mode === 'decibel') {
      const dB = val * 15; // 15 đến 135 dB
      const ratio = Math.pow(10, dB / 10);
      const curX = padL + ((val - 1) / 8) * W;
      const colH = ((val - 1) / 8) * (H - 20) + 20;

      html += `<line x1="${padL}" y1="${padT + H}" x2="${padL + W}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
      for (let i = 1; i <= 9; i++) {
        const x = padL + ((i - 1) / 8) * W;
        const curDb = (i * 15).toFixed(0);
        html += `<line x1="${x}" y1="${padT + H}" x2="${x}" y2="${padT + H + 8}" stroke="#64748b" stroke-width="1.5"/>`;
        html += `<text x="${x}" y="${padT + H + 24}" font-size="11" fill="#475569" text-anchor="middle">${curDb}dB</text>`;
      }

      const colColor = dB < 60 ? '#10b981' : dB < 85 ? '#f59e0b' : '#dc2626';
      html += `<rect x="${curX - 25}" y="${padT + H - colH}" width="50" height="${colH}" fill="${colColor}" rx="6" opacity="0.85"/>`;
      html += `<text x="${curX}" y="${padT + H - colH - 10}" font-size="13" font-weight="bold" fill="${colColor}" text-anchor="middle">${dB.toFixed(0)} dB</text>`;

      svg.innerHTML = html;

      stat.innerHTML = `<strong>Mức cường độ âm $L = ${dB.toFixed(0)}\\text{ dB}$:</strong> Cường độ âm lớn gấp $10^{${(dB/10).toFixed(1)}} \\approx ${ratio.toExponential(2)}$ lần ngưỡng nghe $I_0$.<br><span style="color:${colColor}; font-weight:600;">Âm lượng $80\\text{ dB}$ (tiếng xe buýt) lớn gấp 10 lần $70\\text{ dB}$ và gấp 100 lần $60\\text{ dB}$!</span>`;
    } else {
      const pH = 1 + ((val - 1) / 8) * 13; // 1 đến 14
      const hPlus = Math.pow(10, -pH);
      const curX = padL + ((val - 1) / 8) * W;
      const colH = ((14 - pH) / 13) * (H - 20) + 20;

      html += `<line x1="${padL}" y1="${padT + H}" x2="${padL + W}" y2="${padT + H}" stroke="#64748b" stroke-width="1.5"/>`;
      for (let p = 1; p <= 14; p += 2) {
        const x = padL + ((p - 1) / 13) * W;
        html += `<line x1="${x}" y1="${padT + H}" x2="${x}" y2="${padT + H + 8}" stroke="#64748b" stroke-width="1.5"/>`;
        html += `<text x="${x}" y="${padT + H + 24}" font-size="11" fill="#475569" text-anchor="middle">pH=${p}</text>`;
      }

      const colColor = pH < 7 ? '#dc2626' : pH === 7 ? '#10b981' : '#3b82f6';
      html += `<rect x="${curX - 20}" y="${padT + H - colH}" width="40" height="${colH}" fill="${colColor}" rx="6" opacity="0.85"/>`;
      html += `<text x="${curX}" y="${padT + H - colH - 10}" font-size="13" font-weight="bold" fill="${colColor}" text-anchor="middle">pH = ${pH.toFixed(1)}</text>`;

      svg.innerHTML = html;

      stat.innerHTML = `<strong>Độ pH = ${pH.toFixed(1)}:</strong> Nồng độ ion $[H^+] = 10^{-${pH.toFixed(1)}} = ${hPlus.toExponential(2)}\\text{ mol/L}$.<br><span style="color:${colColor}; font-weight:600;">Môi trường ${pH < 7 ? 'Axit (nồng độ H+ cao)' : pH === 7 ? 'Trung tính' : 'Bazơ (Kiềm)'}.</span>`;
    }
  }

  select.addEventListener('change', render);
  slider.addEventListener('input', render);
  render();
})();
</script>

---

## VI. Các Dạng Toán Thực chiến

### Dạng 1: Rút gọn biểu thức chứa lôgarit

**Phương pháp:**  
- Đưa các số về dạng lũy thừa của thừa số nguyên tố: $4 = 2^2, 8 = 2^3, 9 = 3^2, 27 = 3^3$.
- Đưa số mũ ra ngoài bằng các công thức $\log_a (x^\alpha) = \alpha \log_a x$ và $\log_{a^\beta} x = \frac{1}{\beta} \log_a x$.
- Gom các lôgarit cùng cơ số bằng công thức tổng thành tích, hiệu thành thương.

**Ví dụ 1:** Rút gọn biểu thức $A = \log_2 20 - \log_2 5 + \log_3 \sqrt[3]{9}$.  
*Giải:*
- Phần 1: $\log_2 20 - \log_2 5 = \log_2 \left(\frac{20}{5}\right) = \log_2 4 = \log_2 (2^2) = 2$.
- Phần 2: $\log_3 \sqrt[3]{9} = \log_3 (9^{\frac{1}{3}}) = \log_3 ((3^2)^{\frac{1}{3}}) = \log_3 (3^{\frac{2}{3}}) = \frac{2}{3}$.
- Kết quả: $A = 2 + \frac{2}{3} = \frac{8}{3}$.

---

### Dạng 2: Biểu diễn lôgarit theo các lôgarit đã cho

**Phương pháp:**  
- Phân tích cơ số và số lấy lôgarit của biểu thức cần tính thành tích các thừa số nguyên tố xuất hiện trong giả thiết.
- Đổi cơ số nếu cơ số của biểu thức cần tính khác với cơ số của giả thiết.

**Ví dụ 2:** Cho $\log_2 3 = a$ và $\log_2 5 = b$. Hãy tính $\log_2 45$ theo $a$ và $b$.  
*Giải:*  
Phân tích $45 = 9 \times 5 = 3^2 \times 5$.  
Áp dụng quy tắc lôgarit của tích và lũy thừa:
$$\log_2 45 = \log_2 (3^2 \times 5) = \log_2 (3^2) + \log_2 5 = 2\log_2 3 + \log_2 5 = 2a + b$$

**Ví dụ 3:** Cho $\log_2 3 = a$. Tính $\log_6 18$ theo $a$.  
*Giải:*  
Đổi cơ số $6$ về cơ số $2$:
$$\log_6 18 = \frac{\log_2 18}{\log_2 6} = \frac{\log_2 (2 \cdot 3^2)}{\log_2 (2 \cdot 3)} = \frac{\log_2 2 + 2\log_2 3}{\log_2 2 + \log_2 3} = \frac{1 + 2a}{1 + a}$$

---

## VII. Trắc nghiệm Tự luyện Củng cố (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Giá trị của \\log_3 81 bằng:",
  "options": [
    "A. 3",
    "B. 4",
    "C. 9",
    "D. 27"
  ],
  "answer": "B. 4",
  "explanation": "3^4 = 81 nên \\log_3 81 = 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Điều kiện xác định của biểu thức \\log_2 (x - 3) là:",
  "options": [
    "A. x > 3",
    "B. x ≥ 3",
    "C. x ≠ 3",
    "D. x ∈ R"
  ],
  "answer": "A. x > 3",
  "explanation": "Biểu thức dưới dấu lôgarit phải dương: x - 3 > 0 <=> x > 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Với a, b > 0 và cơ số 2, đẳng thức nào sau đây ĐÚNG?",
  "options": [
    "A. \\log_2 (a + b) = \\log_2 a + \\log_2 b",
    "B. \\log_2 (ab) = \\log_2 a \\cdot \\log_2 b",
    "C. \\log_2 (ab) = \\log_2 a + \\log_2 b",
    "D. \\log_2 (a / b) = \\log_2 a / \\log_2 b"
  ],
  "answer": "C. \\log_2 (ab) = \\log_2 a + \\log_2 b",
  "explanation": "Lôgarit của một tích bằng tổng các lôgarit: \\log_2 (ab) = \\log_2 a + \\log_2 b."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Giá trị của biểu thức 5^{\\log_5 12} bằng:",
  "options": [
    "A. 5",
    "B. 12",
    "C. 60",
    "D. 1"
  ],
  "answer": "B. 12",
  "explanation": "Theo tính chất a^{\\log_a b} = b, ta có 5^{\\log_5 12} = 12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Rút gọn biểu thức P = \\log_a (a^3 \\sqrt{a}) với a > 0, a ≠ 1:",
  "options": [
    "A. 7/2",
    "B. 5/2",
    "C. 3/2",
    "D. 6"
  ],
  "answer": "A. 7/2",
  "explanation": "a^3 \\sqrt{a} = a^3 * a^(1/2) = a^(7/2). Do đó \\log_a (a^(7/2)) = 7/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho \\log_2 5 = a. Khi đó \\log_4 125 tính theo a bằng:",
  "options": [
    "A. 3a / 2",
    "B. 2a / 3",
    "C. 3a",
    "D. a^3 / 2"
  ],
  "answer": "A. 3a / 2",
  "explanation": "\\log_4 125 = \\log_{2^2} (5^3) = (3/2) \\log_2 5 = 3a / 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Đẳng thức nào sau đây SAI?",
  "options": [
    "A. \\ln e = 1",
    "B. \\log 100 = 2",
    "C. \\ln 1 = 0",
    "D. \\log_a b = \\log_b a"
  ],
  "answer": "D. \\log_a b = \\log_b a",
  "explanation": "Công thức đúng là \\log_a b = 1 / \\log_b a, không thể bằng \\log_b a trừ khi a = b."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho a, b > 0 và a ≠ 1. Biểu thức \\log_{a^3} b^6 bằng:",
  "options": [
    "A. 2 \\log_a b",
    "B. 18 \\log_a b",
    "C. (1/2) \\log_a b",
    "D. 3 \\log_a b"
  ],
  "answer": "A. 2 \\log_a b",
  "explanation": "\\log_{a^3} (b^6) = (6/3) \\log_a b = 2 \\log_a b."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho \\log_a b = 2 và \\log_a c = -3. Giá trị của \\log_a (a^2 b / c) bằng:",
  "options": [
    "A. 7",
    "B. 1",
    "C. -3",
    "D. 5"
  ],
  "answer": "A. 7",
  "explanation": "\\log_a (a^2 b / c) = \\log_a (a^2) + \\log_a b - \\log_a c = 2 + 2 - (-3) = 2 + 2 + 3 = 7."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Nếu một dung dịch có nồng độ ion H+ là [H+] = 10^(-4) mol/L thì độ pH của dung dịch bằng:",
  "options": [
    "A. 4",
    "B. -4",
    "C. 10",
    "D. 7"
  ],
  "answer": "A. 4",
  "explanation": "Độ pH = -\\log [H+] = -\\log (10^(-4)) = -(-4) = 4 (môi trường axit)."
}'></div>

---

## VIII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luận

1. **Rút gọn các biểu thức lôgarit sau:**
   a) $A = \log_3 15 - \log_3 5 + \log_2 32$  
   b) $B = 27^{\log_3 2} + 4^{\log_2 3}$  
   c) $C = \log_a \left(\frac{a^2 \cdot \sqrt[3]{a}}{\sqrt{a}}\right)$

2. **Biểu diễn theo $a$ và $b$:**
   a) Cho $\log_3 2 = a$ và $\log_3 5 = b$. Tính $\log_3 40$ theo $a$ và $b$.  
   b) Cho $\log_{12} 27 = a$. Tính $\log_6 16$ theo $a$.

---

### Thử thách Thực tế: Thảm họa Kép Động đất Fukushima 2011

Ngày 11 tháng 3 năm 2011, vùng bờ biển Tohoku (Nhật Bản) hứng chịu trận siêu động đất có độ lớn $M_1 = 9.0$ độ Richter gây ra thảm họa sóng thần kinh hoàng. Trong khi đó, một trận động đất thông thường thường có độ lớn khoảng $M_2 = 6.0$ độ Richter.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ tính toán:</strong><br>
Công thức Richter liên hệ độ lớn $M$ với biên độ địa chấn tối đa $A$ đo được trên máy đo địa chấn chuẩn là:
$$M = \log\left(\frac{A}{A_0}\right)$$
và năng lượng giải phóng $E$ (tính bằng Joules) được mô hình bởi công thức Gutenberg-Richter:
$$\log E = 4.8 + 1.5M$$<br>
1. Biên độ rung chấn $A_1$ của trận động đất Fukushima lớn gấp bao nhiêu lần biên độ rung chấn $A_2$ của trận động đất 6.0 độ Richter?<br>
2. Năng lượng $E_1$ của trận siêu động đất Fukushima gấp bao nhiêu lần năng lượng $E_2$ của trận động đất 6.0 độ Richter?<br>
3. <em>Ý nghĩa:</em> Nhận xét vì sao sự chênh lệch chỉ 3 đơn vị trên thang đo Lôgarit lại tạo nên sự khác biệt giữa một trận rung lắc nhẹ và một đại thảm họa hủy diệt lịch sử!
</div>

> [!TIP]
> **Giải đáp khoa học:**
> 1. Ta có:
>    $$M_1 - M_2 = \log\left(\frac{A_1}{A_0}\right) - \log\left(\frac{A_2}{A_0}\right) = \log\left(\frac{A_1}{A_2}\right)$$
>    Suy ra:
>    $$\frac{A_1}{A_2} = 10^{M_1 - M_2} = 10^{9.0 - 6.0} = 10^3 = 1\,000 \text{ lần!}$$
>    Biên độ rung lắc mặt đất lớn gấp đúng $1\,000$ lần!
> 2. Về tỉ lệ năng lượng:
>    $$\log E_1 - \log E_2 = 1.5(M_1 - M_2) = 1.5(3.0) = 4.5$$
>    $$\Rightarrow \frac{E_1}{E_2} = 10^{4.5} \approx 31\,622.78 \text{ lần!}$$
>    Năng lượng giải phóng của trận động đất $9.0$ độ lớn gấp hơn **$31\,600$ lần** trận động đất $6.0$ độ! (Mức năng lượng này tương đương sức nổ của hàng trăm triệu tấn thuốc nổ TNT).
