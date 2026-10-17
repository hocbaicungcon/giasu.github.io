---
title: 'Toán 12 Bài 10: Phương sai và Độ lệch chuẩn của mẫu số liệu ghép nhóm'
description: 'Lý thuyết trọng tâm Bài 10 Toán 12 Kết nối tri thức: Công thức tính số trung bình, phương sai, độ lệch chuẩn mẫu số liệu ghép nhóm, so sánh độ ổn định kèm đồ thị phân bố chuẩn tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Thống kê
  - Mẫu số liệu ghép nhóm
  - Phương sai
  - Độ lệch chuẩn
  - Phân bố chuẩn
  - Kết nối tri thức
grade: 12
---

# Bài 10. Phương sai và Độ lệch chuẩn của mẫu số liệu ghép nhóm

Trong thực tế, khi đánh giá chất lượng sản phẩm trong một dây chuyền công nghiệp, đo lường mức độ rủi ro của danh mục đầu tư tài chính, hay so sánh phong độ thi đấu của hai vận động viên, việc chỉ sử dụng **số trung bình** ($\bar{x}$) hay **trung vị** ($M_e$) thường dẫn đến những kết luận thiếu chính xác.

Ví dụ: Hai cổ phiếu A và B đều mang lại mức sinh lời trung bình $12\%/\text{năm}$. Nhưng cổ phiếu A luôn dao động ổn định trong khoảng $10\% - 14\%$, trong khi cổ phiếu B năm được $45\%$ năm lại lỗ nặng $-20\%$. Cổ phiếu nào an toàn hơn? Rõ ràng là A! Để định lượng chính xác **mức độ biến động** và **độ rủi ro** đó xung quanh giá trị trung bình, các nhà thống kê sử dụng hai công cụ quyền lực nhất: **Phương sai** ($s^2$) và **Độ lệch chuẩn** ($s$).

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">TỔNG QUAN CÔNG CỤ ĐO ĐỘ RỦI RO & PHÂN TÁN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Số trung bình (x̄)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Là trọng tâm phân bố của toàn bộ dữ liệu.<br>
• $\mathbf{\bar{x} = \frac{m_1 c_1 + m_2 c_2 + \dots + m_k c_k}{n}}$.<br>
• $c_i = \frac{a_i + a_{i+1}}{2}$ là giá trị đại diện của nhóm.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Phương sai (s²)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Trung bình cộng bình phương các độ lệch so với $\bar{x}$.<br>
• $\mathbf{s^2 = \frac{1}{n}\sum m_i(c_i - \bar{x})^2 = \frac{1}{n}\sum m_i c_i^2 - \bar{x}^2}$.<br>
• Đơn vị là bình phương đơn vị số liệu ban đầu.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Độ lệch chuẩn (s)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Căn bậc hai số học của phương sai: $\mathbf{s = \sqrt{s^2}}$.<br>
• **Cùng đơn vị đo** với số liệu gốc ban đầu.<br>
• $s$ càng nhỏ $\implies$ số liệu càng tập trung, độ đồng đều cao.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng thực tế</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• So sánh độ rủi ro giữa 2 danh mục tài chính.<br>
• Kiểm soát sai số kỹ thuật trong sản xuất vi mạch bán dẫn.<br>
• Đánh giá tính ổn định điểm số của học sinh qua các kì thi.
</p>
</div>
</div>
</div>

---

## 1. Số trung bình của mẫu số liệu ghép nhóm

Cho mẫu số liệu ghép nhóm gồm $k$ nhóm:

| Nhóm | $[a_1; a_2)$ | $[a_2; a_3)$ | $\dots$ | $[a_k; a_{k+1})$ |
| :--- | :---: | :---: | :---: | :---: |
| **Giá trị đại diện** $c_i$ | $c_1 = \frac{a_1+a_2}{2}$ | $c_2 = \frac{a_2+a_3}{2}$ | $\dots$ | $c_k = \frac{a_k+a_{k+1}}{2}$ |
| **Tần số** $m_i$ | $m_1$ | $m_2$ | $\dots$ | $m_k$ |

Cỡ mẫu là $n = m_1 + m_2 + \dots + m_k$.

::: tip Công thức số trung bình
Số trung bình của mẫu số liệu ghép nhóm, kí hiệu là $\bar{x}$, được tính theo công thức:
$$\bar{x} = \frac{m_1 c_1 + m_2 c_2 + \dots + m_k c_k}{n} = \frac{1}{n} \sum_{i=1}^k m_i c_i$$
:::

> **Ý nghĩa:** Số trung bình xấp xỉ cho giá trị trung bình thực sự của tập dữ liệu gốc, đại diện cho mức độ phổ quát của cả mẫu.

---

## 2. Phương sai và Độ lệch chuẩn

### 2.1. Định nghĩa và hai công thức tính Phương sai

::: tip Phương sai của mẫu số liệu ghép nhóm
**Phương sai**, kí hiệu là $s^2$, là số đo mức độ phân tán của các số liệu xung quanh số trung bình:

**1. Công thức theo định nghĩa:**
$$s^2 = \frac{1}{n} \left[ m_1(c_1 - \bar{x})^2 + m_2(c_2 - \bar{x})^2 + \dots + m_k(c_k - \bar{x})^2 \right] = \frac{1}{n} \sum_{i=1}^k m_i (c_i - \bar{x})^2$$

**2. Công thức biến đổi rút gọn (thường dùng khi bấm máy tính cầm tay):**
$$s^2 = \frac{m_1 c_1^2 + m_2 c_2^2 + \dots + m_k c_k^2}{n} - \bar{x}^2 = \frac{1}{n} \left(\sum_{i=1}^k m_i c_i^2\right) - \bar{x}^2$$
:::

### 2.2. Định nghĩa Độ lệch chuẩn

Vì trong công thức phương sai, các hiệu $(c_i - \bar{x})$ bị nâng lên bình phương, dẫn đến đơn vị đo của phương sai là bình phương của đơn vị mẫu (ví dụ: $\text{cm}^2$, triệu đồng$^2$, giây$^2$), không trực quan khi so sánh với số trung bình. Do đó, người ta khai căn bậc hai:

::: tip Độ lệch chuẩn
**Độ lệch chuẩn** của mẫu số liệu ghép nhóm, kí hiệu là $s$, là căn bậc hai số học của phương sai:
$$s = \sqrt{s^2}$$
:::

> **Ưu điểm lớn nhất của độ lệch chuẩn:** Nó có **cùng đơn vị đo** với số liệu gốc, giúp ta hình dung trực tiếp khoảng sai lệch trung bình của từng giá trị so với số trung bình $\bar{x}$.

---

## 3. Ý nghĩa thực tiễn & So sánh độ ổn định

1. **Đo mức độ phân tán:** Cả phương sai và độ lệch chuẩn đều dùng để đo độ biến thiên, mức độ đồng đều của mẫu số liệu.
2. **Nguyên tắc so sánh tính ổn định:**
   - Khi so sánh hai mẫu số liệu **cùng đơn vị đo** và có **số trung bình bằng nhau hoặc xấp xỉ nhau**:
     - Mẫu nào có phương sai (hoặc độ lệch chuẩn) **nhỏ hơn** thì các giá trị tập trung sát quanh giá trị trung bình hơn $\implies$ **đồng đều hơn, độ ổn định cao hơn, mức độ rủi ro thấp hơn**.
     - Mẫu nào có phương sai **lớn hơn** thì số liệu phân tán rộng, biến động mạnh $\implies$ **kém ổn định hơn, rủi ro cao hơn**.
3. **Quy tắc thực nghiệm $3\sigma$ (Phân bố chuẩn):**
   - Khoảng $[\bar{x} - s; \bar{x} + s]$ thường chứa xấp xỉ $68.3\%$ số liệu.
   - Khoảng $[\bar{x} - 2s; \bar{x} + 2s]$ chứa xấp xỉ $95.4\%$ số liệu.
   - Khoảng $[\bar{x} - 3s; \bar{x} + 3s]$ chứa hầu như toàn bộ ($99.7\%$) số liệu.

---

## 4. Mô phỏng trực quan: Phân bố chuẩn & Tác động của Độ lệch chuẩn

Dưới đây là mô phỏng đường cong mật độ phân bố chuẩn (Gaussian Bell Curve). Hãy thử kéo thanh trượt để thay đổi **Độ lệch chuẩn $s$** ($\sigma$) và **Số trung bình $\bar{x}$** ($\mu$) để quan sát hình dạng đồ thị thay đổi ra sao:

<div class="interactive-figure-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Số trung bình $\bar{x}$ ($\mu$): <span id="val-mu" style="color: #2563eb; font-weight: bold;">50</span></label><br>
      <input type="range" id="slider-mu" min="30" max="70" value="50" step="1" style="width: 200px; accent-color: #2563eb;">
    </div>
    <div>
      <label style="font-weight: 600; font-size: 0.95em; color: var(--text-color, #1e293b);">Độ lệch chuẩn $s$ ($\sigma$): <span id="val-sigma" style="color: #ef4444; font-weight: bold;">8</span></label><br>
      <input type="range" id="slider-sigma" min="4" max="18" value="8" step="0.5" style="width: 200px; accent-color: #ef4444;">
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 8px 16px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.88em;">
      <strong>Nhận xét:</strong> <span id="status-desc" style="color: #047857; font-weight: 600;">Độ biến động vừa phải</span>
    </div>
  </div>

  <div style="position: relative; width: 100%; height: 320px; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
    <svg id="bell-curve-svg" data-interactive-done="true" viewBox="0 0 700 300" style="width: 100%; height: 100%; display: block;"></svg>
  </div>

  <div style="margin-top: 12px; font-size: 0.85em; color: var(--text-muted, #64748b); display: flex; justify-content: space-around; flex-wrap: wrap;">
    <span><span style="display:inline-block; width:12px; height:12px; background:rgba(37, 99, 235, 0.3); border:1px solid #2563eb; border-radius:2px;"></span> Vùng $[\bar{x} - s; \bar{x} + s]$ (~68.3%)</span>
    <span><span style="display:inline-block; width:12px; height:12px; background:rgba(16, 185, 129, 0.2); border:1px solid #10b981; border-radius:2px;"></span> Vùng $[\bar{x} - 2s; \bar{x} + 2s]$ (~95.4%)</span>
    <span><span style="display:inline-block; width:12px; height:2px; background:#ef4444; vertical-align:middle;"></span> Đường trung bình $\bar{x}$</span>
  </div>
</div>

<script>
(function() {
  const svg = document.getElementById('bell-curve-svg');
  const sliderMu = document.getElementById('slider-mu');
  const sliderSigma = document.getElementById('slider-sigma');
  const valMu = document.getElementById('val-mu');
  const valSigma = document.getElementById('val-sigma');
  const statusDesc = document.getElementById('status-desc');

  if (!svg || !sliderMu || !sliderSigma) return;

  function renderCurve() {
    const mu = parseFloat(sliderMu.value);
    const sigma = parseFloat(sliderSigma.value);

    valMu.textContent = mu;
    valSigma.textContent = sigma;

    if (sigma <= 6) {
      statusDesc.textContent = "Số liệu rất tập trung, độ ổn định rất cao!";
      statusDesc.style.color = "#047857";
    } else if (sigma <= 11) {
      statusDesc.textContent = "Độ biến động vừa phải, phân bố đều.";
      statusDesc.style.color = "#2563eb";
    } else {
      statusDesc.textContent = "Số liệu phân tán mạnh, độ rủi ro/biến động lớn!";
      statusDesc.style.color = "#dc2626";
    }

    const W = 700, H = 300;
    const paddingX = 40, baseY = 260;
    const plotW = W - 2 * paddingX;
    const minX = 10, maxX = 90;

    function toScreenX(x) {
      return paddingX + ((x - minX) / (maxX - minX)) * plotW;
    }

    function normalPdf(x, m, s) {
      return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));
    }

    // Max peak is at x = mu, pdf = 1 / (s * sqrt(2pi))
    // We scale peak so sigma = 4 still fits in ~220px height
    const maxPdfEver = 1 / (4 * Math.sqrt(2 * Math.PI));
    const scaleY = 210 / maxPdfEver;

    let pathD = `M ${toScreenX(minX)} ${baseY}`;
    let sigma1Path = '';
    let sigma2Path = '';

    const steps = 200;
    const dx = (maxX - minX) / steps;

    for (let i = 0; i <= steps; i++) {
      const x = minX + i * dx;
      const yVal = normalPdf(x, mu, sigma);
      const sy = baseY - yVal * scaleY;
      pathD += ` L ${toScreenX(x).toFixed(1)} ${sy.toFixed(1)}`;
    }
    pathD += ` L ${toScreenX(maxX)} ${baseY} Z`;

    // Sigma regions
    const xL1 = Math.max(minX, mu - sigma);
    const xR1 = Math.min(maxX, mu + sigma);
    let poly1 = `M ${toScreenX(xL1).toFixed(1)} ${baseY}`;
    for (let x = xL1; x <= xR1; x += 0.5) {
      const sy = baseY - normalPdf(x, mu, sigma) * scaleY;
      poly1 += ` L ${toScreenX(x).toFixed(1)} ${sy.toFixed(1)}`;
    }
    poly1 += ` L ${toScreenX(xR1).toFixed(1)} ${baseY} Z`;

    const xL2 = Math.max(minX, mu - 2 * sigma);
    const xR2 = Math.min(maxX, mu + 2 * sigma);
    let poly2 = `M ${toScreenX(xL2).toFixed(1)} ${baseY}`;
    for (let x = xL2; x <= xR2; x += 0.5) {
      const sy = baseY - normalPdf(x, mu, sigma) * scaleY;
      poly2 += ` L ${toScreenX(x).toFixed(1)} ${sy.toFixed(1)}`;
    }
    poly2 += ` L ${toScreenX(xR2).toFixed(1)} ${baseY} Z`;

    let axisHtml = `
      <!-- Trục hoành -->
      <line x1="${paddingX - 10}" y1="${baseY}" x2="${W - paddingX + 10}" y2="${baseY}" stroke="#64748b" stroke-width="1.5" />
      <polygon points="${W - paddingX + 15},${baseY} ${W - paddingX + 5},${baseY - 4} ${W - paddingX + 5},${baseY + 4}" fill="#64748b" />
      <text x="${W - paddingX + 8}" y="${baseY + 18}" font-size="12" fill="#64748b" font-weight="bold">x</text>
    `;

    // Grid marks every 10 units
    for (let val = 20; val <= 80; val += 10) {
      const sx = toScreenX(val);
      axisHtml += `
        <line x1="${sx}" y1="${baseY}" x2="${sx}" y2="${baseY + 5}" stroke="#94a3b8" />
        <text x="${sx}" y="${baseY + 18}" font-size="11" fill="#64748b" text-anchor="middle">${val}</text>
      `;
    }

    // Mean vertical line
    const muX = toScreenX(mu);
    const peakY = baseY - normalPdf(mu, mu, sigma) * scaleY;

    svg.innerHTML = `
      <defs>
        <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      ${axisHtml}
      <!-- Vùng 2 sigma -->
      <path d="${poly2}" fill="rgba(16, 185, 129, 0.18)" />
      <!-- Vùng 1 sigma -->
      <path d="${poly1}" fill="rgba(37, 99, 235, 0.3)" />
      <!-- Đường bao cong -->
      <path d="${pathD}" fill="url(#curveGrad)" stroke="#1d4ed8" stroke-width="2.5" />
      <!-- Trục giữa mu -->
      <line x1="${muX}" y1="${baseY}" x2="${muX}" y2="${peakY}" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3" />
      <circle cx="${muX}" cy="${peakY}" r="4" fill="#ef4444" />
      <text x="${muX}" y="${peakY - 10}" font-size="12" fill="#ef4444" font-weight="bold" text-anchor="middle">x̄ = ${mu}</text>
      <!-- Nhãn s -->
      <line x1="${muX}" y1="${baseY - 30}" x2="${toScreenX(mu + sigma)}" y2="${baseY - 30}" stroke="#b91c1c" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="${toScreenX(mu + sigma / 2)}" y="${baseY - 36}" font-size="11" fill="#b91c1c" text-anchor="middle" font-weight="bold">s = ${sigma}</text>
    `;
  }

  sliderMu.addEventListener('input', renderCurve);
  sliderSigma.addEventListener('input', renderCurve);
  renderCurve();
})();
</script>

---

## 5. Các ví dụ minh họa có lời giải chi tiết

### Ví dụ 1: Tính số trung bình, phương sai và độ lệch chuẩn của một mẫu ghép nhóm

Một công ty vận tải thống kê thời gian giao hàng (đơn vị: giờ) của 50 đơn hàng nội thành trong một ngày được kết quả như sau:

| Thời gian (giờ) | $[1; 3)$ | $[3; 5)$ | $[5; 7)$ | $[7; 9)$ | $[9; 11)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số đơn hàng** ($m_i$) | $6$ | $14$ | $18$ | $8$ | $4$ |

a) Tính số trung bình thời gian giao hàng $\bar{x}$.  
b) Tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm.

#### Lời giải chi tiết:

Lập bảng tính phụ trợ gồm giá trị đại diện $c_i$, các tích $m_i c_i$ và $m_i c_i^2$:

| Nhóm thời gian | Tần số $m_i$ | Giá trị đại diện $c_i$ | $m_i \cdot c_i$ | $c_i^2$ | $m_i \cdot c_i^2$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $[1; 3)$ | $6$ | $\frac{1+3}{2} = 2$ | $12$ | $4$ | $24$ |
| $[3; 5)$ | $14$ | $\frac{3+5}{2} = 4$ | $56$ | $16$ | $224$ |
| $[5; 7)$ | $18$ | $\frac{5+7}{2} = 6$ | $108$ | $36$ | $648$ |
| $[7; 9)$ | $8$ | $\frac{7+9}{2} = 8$ | $64$ | $64$ | $512$ |
| $[9; 11)$ | $4$ | $\frac{9+11}{2} = 10$ | $40$ | $100$ | $400$ |
| **Tổng cộng** | **$n = 50$** | — | $\sum m_i c_i = \mathbf{280}$ | — | $\sum m_i c_i^2 = \mathbf{1808}$ |

**a) Số trung bình:**
$$\bar{x} = \frac{\sum m_i c_i}{n} = \frac{280}{50} = 5.6 \text{ (giờ)}$$

**b) Phương sai và độ lệch chuẩn:**
- Áp dụng công thức rút gọn:
  $$s^2 = \frac{1}{n} \left(\sum_{i=1}^5 m_i c_i^2\right) - \bar{x}^2 = \frac{1808}{50} - (5.6)^2 = 36.16 - 31.36 = 4.8$$
- Độ lệch chuẩn:
  $$s = \sqrt{s^2} = \sqrt{4.8} \approx 2.19 \text{ (giờ)}$$

---

### Ví dụ 2: So sánh độ ổn định giữa hai đối tượng

Bảng thống kê điểm kiểm tra định kì môn Toán của học sinh hai lớp 12A1 và 12A2 (mỗi lớp 40 học sinh) được cho như sau:

| Điểm số | $[4; 6)$ | $[6; 8)$ | $[8; 10]$ |
| :--- | :---: | :---: | :---: |
| **Giá trị đại diện** $c_i$ | $5$ | $7$ | $9$ |
| **Lớp 12A1** ($m_{1i}$) | $8$ | $24$ | $8$ |
| **Lớp 12A2** ($m_{2i}$) | $14$ | $12$ | $14$ |

Hỏi điểm số của học sinh lớp nào đồng đều hơn?

#### Lời giải chi tiết:

**1. Xét lớp 12A1:**
- Cỡ mẫu: $n_1 = 8 + 24 + 8 = 40$.
- Điểm trung bình:
  $$\bar{x}_1 = \frac{8 \cdot 5 + 24 \cdot 7 + 8 \cdot 9}{40} = \frac{40 + 168 + 72}{40} = \frac{280}{40} = 7.0$$
- Phương sai:
  $$s_1^2 = \frac{8 \cdot 5^2 + 24 \cdot 7^2 + 8 \cdot 9^2}{40} - 7.0^2 = \frac{8 \cdot 25 + 24 \cdot 49 + 8 \cdot 81}{40} - 49 = \frac{200 + 1176 + 648}{40} - 49 = 50.6 - 49 = 1.6$$
- Độ lệch chuẩn: $s_1 = \sqrt{1.6} \approx 1.265$.

**2. Xét lớp 12A2:**
- Cỡ mẫu: $n_2 = 14 + 12 + 14 = 40$.
- Điểm trung bình:
  $$\bar{x}_2 = \frac{14 \cdot 5 + 12 \cdot 7 + 14 \cdot 9}{40} = \frac{70 + 84 + 126}{40} = \frac{280}{40} = 7.0$$
- Phương sai:
  $$s_2^2 = \frac{14 \cdot 5^2 + 12 \cdot 7^2 + 14 \cdot 9^2}{40} - 7.0^2 = \frac{350 + 588 + 1134}{40} - 49 = \frac{2072}{40} - 49 = 51.8 - 49 = 2.8$$
- Độ lệch chuẩn: $s_2 = \sqrt{2.8} \approx 1.673$.

**Kết luận:**
- Cả hai lớp có cùng điểm trung bình $\bar{x}_1 = \bar{x}_2 = 7.0$.
- Tuy nhiên, phương sai của lớp 12A1 bé hơn hẳn lớp 12A2 ($s_1^2 = 1.6 < s_2^2 = 2.8$, tức $s_1 < s_2$).
- Do đó, **học sinh lớp 12A1 có lực học đồng đều hơn**, điểm số tập trung quanh mức $7.0$ nhiều hơn so với lớp 12A2 (lớp 12A2 bị phân hóa mạnh về hai phía điểm kém và điểm giỏi).

---

## 6. Kỹ năng bấm máy tính cầm tay (Casio fx-580VN X & fx-880BTG)

Để tính nhanh $\bar{x}$, $s^2$, $s$ trên Casio fx-580VN X:
1. **Bật cột tần số:** Bấm `SHIFT` $\to$ `MENU` $\to$ Cuộn xuống chọn `Thống kê (Statistics)` $\to$ Chọn `Tần số (Frequency): On`.
2. **Chọn chế độ thống kê 1 biến:** Bấm `MENU` $\to$ `6` (Statistics) $\to$ `1` (1-Variable).
3. **Nhập dữ liệu:**
   - Cột $x$: Nhập các giá trị đại diện $c_i$.
   - Cột $FREQ$: Nhập các tần số tương ứng $m_i$.
4. **Xuất kết quả:** Bấm `OPTN` $\to$ chọn `3` (1-Variable Calc).
   - Máy sẽ hiển thị ngay: $\bar{x}$ (số trung bình), $\sigma_x$ hoặc $s_x$ (độ lệch chuẩn), $\sigma_x^2$ hoặc $s_x^2$ (phương sai).
   *(Lưu ý: Trong chương trình THPT hiện hành, ta lấy kết quả của $\sigma_x$ làm độ lệch chuẩn $s$).*

---

## 7. Bài tập trắc nghiệm tự luyện (10 câu có đáp án và giải chi tiết)

<div class="quiz-item" data-quiz='{
  "question": "Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_i; a_{i+1})$ với tần số tương ứng $m_i$, cỡ mẫu $n$. Giá trị đại diện $c_i$ của mỗi nhóm được xác định bởi công thức nào?",
  "options": [
    "A. $c_i = a_{i+1} - a_i$",
    "B. $c_i = \\frac{a_i + a_{i+1}}{2}$",
    "C. $c_i = \\frac{a_{i+1} - a_i}{2}$",
    "D. $c_i = \\sqrt{a_i \\cdot a_{i+1}}$"
  ],
  "answer": "B. $c_i = \\frac{a_i + a_{i+1}}{2}$",
  "explanation": "Theo định nghĩa, giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung điểm của hai đầu mút: $c_i = \\frac{a_i + a_{i+1}}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Đại lượng nào sau đây có CÙNG ĐƠN VỊ ĐO với mẫu số liệu ban đầu?",
  "options": [
    "A. Phương sai",
    "B. Bình phương số trung bình",
    "C. Độ lệch chuẩn",
    "D. Tần số tích lũy"
  ],
  "answer": "C. Độ lệch chuẩn",
  "explanation": "Phương sai có đơn vị là bình phương đơn vị số liệu ban đầu. Do đó căn bậc hai của nó, tức Độ lệch chuẩn $s = \\sqrt{s^2}$, sẽ có cùng đơn vị đo với mẫu số liệu gốc."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Công thức biến đổi rút gọn để tính phương sai của mẫu số liệu ghép nhóm là:",
  "options": [
    "A. $s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - \\bar{x}^2$",
    "B. $s^2 = \\left( \\frac{1}{n} \\sum_{i=1}^k m_i c_i \\right)^2 - \\bar{x}$",
    "C. $s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i - \\bar{x}^2$",
    "D. $s^2 = \\sum_{i=1}^k (c_i - \\bar{x})^2$"
  ],
  "answer": "A. $s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - \\bar{x}^2$",
  "explanation": "Khai triển $s^2 = \\frac{1}{n} \\sum m_i(c_i - \\bar{x})^2 = \\frac{1}{n} \\sum m_i(c_i^2 - 2c_i \\bar{x} + \\bar{x}^2) = \\frac{1}{n}\\sum m_i c_i^2 - \\bar{x}^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho hai xạ thủ A và B cùng bắn 100 viên đạn. Cả hai đều có điểm bắn trung bình là 8.5 điểm. Độ lệch chuẩn điểm bắn của xạ thủ A là $s_A = 0.6$, của xạ thủ B là $s_B = 1.4$. Khẳng định nào sau đây đúng?",
  "options": [
    "A. Xạ thủ B bắn ổn định hơn xạ thủ A",
    "B. Xạ thủ A bắn ổn định hơn xạ thủ B",
    "C. Hai xạ thủ có độ ổn định ngang nhau",
    "D. Không thể so sánh được vì không biết điểm cao nhất"
  ],
  "answer": "B. Xạ thủ A bắn ổn định hơn xạ thủ B",
  "explanation": "Vì hai xạ thủ có cùng điểm trung bình $\\bar{x}_A = \\bar{x}_B = 8.5$ và $s_A = 0.6 < s_B = 1.4$, nên điểm của xạ thủ A ít phân tán hơn, do đó xạ thủ A thi đấu ổn định hơn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Cho mẫu số liệu ghép nhóm gồm 3 nhóm: $[0; 2)$ tần số 3, $[2; 4)$ tần số 4, $[4; 6)$ tần số 3. Số trung bình $\\bar{x}$ của mẫu số liệu này là:",
  "options": [
    "A. 3.0",
    "B. 3.5",
    "C. 2.8",
    "D. 4.0"
  ],
  "answer": "A. 3.0",
  "explanation": "Giá trị đại diện các nhóm lần lượt là $c_1 = 1$, $c_2 = 3$, $c_3 = 5$. Cỡ mẫu $n = 3 + 4 + 3 = 10$. $\\bar{x} = \\frac{3 \\cdot 1 + 4 \\cdot 3 + 3 \\cdot 5}{10} = \\frac{3 + 12 + 15}{10} = \\frac{30}{10} = 3.0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Với mẫu số liệu ở câu trên ($[0; 2): 3$, $[2; 4): 4$, $[4; 6): 3$), phương sai $s^2$ bằng:",
  "options": [
    "A. 1.8",
    "B. 2.4",
    "C. 2.0",
    "D. 1.5"
  ],
  "answer": "B. 2.4",
  "explanation": "Ta có $\\bar{x} = 3.0$. Áp dụng công thức $s^2 = \\frac{1}{10}[3(1-3)^2 + 4(3-3)^2 + 3(5-3)^2] = \\frac{1}{10}[3(4) + 0 + 3(4)] = \\frac{24}{10} = 2.4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nếu tất cả các giá trị của một mẫu số liệu ghép nhóm được nhân thêm một hằng số dương $k > 0$ thì độ lệch chuẩn của mẫu số liệu mới sẽ:",
  "options": [
    "A. Không đổi",
    "B. Tăng thêm $k$ đơn vị",
    "C. Bằng $k^2$ lần độ lệch chuẩn cũ",
    "D. Bằng $k$ lần độ lệch chuẩn cũ"
  ],
  "answer": "D. Bằng $k$ lần độ lệch chuẩn cũ",
  "explanation": "Khi mỗi giá trị $x$ được nhân với $k$ thì giá trị đại diện $c_i$ mới là $k \\cdot c_i$, số trung bình mới là $k\\bar{x}$. Do đó phương sai mới là $k^2 s^2$, suy ra độ lệch chuẩn mới là $\\sqrt{k^2 s^2} = k \\cdot s$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Nếu cộng thêm một hằng số $c$ vào tất cả các giá trị của một mẫu số liệu thì phương sai của mẫu số liệu mới sẽ:",
  "options": [
    "A. Tăng thêm $c^2$",
    "B. Tăng thêm $c$",
    "C. Không thay đổi",
    "D. Tăng gấp $c$ lần"
  ],
  "answer": "C. Không thay đổi",
  "explanation": "Khi cộng thêm cùng một hằng số $c$, khoảng cách giữa các số liệu với số trung bình không hề đổi: $(c_i + c) - (\\bar{x} + c) = c_i - \\bar{x}$. Do đó mức độ phân tán và phương sai hoàn toàn không đổi."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Một mẫu số liệu ghép nhóm có phương sai $s^2 = 6.25$. Độ lệch chuẩn $s$ của mẫu số liệu này là:",
  "options": [
    "A. 2.5",
    "B. 3.125",
    "C. 39.0625",
    "D. 1.25"
  ],
  "answer": "A. 2.5",
  "explanation": "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{6.25} = 2.5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Trong quản trị tài chính, chỉ số độ lệch chuẩn của tỷ suất sinh lời của một quỹ đầu tư thường được dùng để đại diện cho yếu tố nào?",
  "options": [
    "A. Lợi nhuận kỳ vọng của quỹ",
    "B. Mức độ rủi ro hay biến động của quỹ",
    "C. Quy mô vốn điều lệ của quỹ",
    "D. Thời gian hoàn vốn đầu tư"
  ],
  "answer": "B. Mức độ rủi ro hay biến động của quỹ",
  "explanation": "Trong tài chính đầu tư, độ lệch chuẩn (volatility / standard deviation) là thước đo tiêu chuẩn cho mức độ biến động và rủi ro của tài sản hoặc danh mục đầu tư."
}'></div>
