---
title: 'Toán 12 Bài 9: Khoảng biến thiên và Khoảng tứ phân vị của mẫu số liệu ghép nhóm'
description: 'Lý thuyết trọng tâm Bài 9 Toán 12 Kết nối tri thức: Mẫu số liệu ghép nhóm, công thức tính khoảng biến thiên R, xác định các tứ phân vị Q1, Q2, Q3, khoảng tứ phân vị ΔQ, nhận diện giá trị ngoại lai kèm mô phỏng Box Plot tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Thống kê
  - Mẫu số liệu ghép nhóm
  - Khoảng biến thiên
  - Tứ phân vị
  - Box Plot
  - Kết nối tri thức
grade: 12
---

# Bài 9. Khoảng biến thiên và Khoảng tứ phân vị của mẫu số liệu ghép nhóm

Trong thời đại bùng nổ dữ liệu (Big Data), hàng triệu con số được thu thập mỗi giây: từ chiều cao của hàng vạn học sinh, thu nhập của người lao động, cho đến tuổi thọ của các linh kiện điện tử. Để phân tích một lượng dữ liệu khổng lồ như vậy, người ta không thể liệt kê từng số liệu riêng lẻ mà bắt buộc phải gom chúng thành từng khoảng – gọi là **mẫu số liệu ghép nhóm**.

Ở lớp 11, chúng ta đã biết cách đo xu thế trung tâm của mẫu số liệu (như số trung bình, trung vị, mốt). Tuy nhiên, chỉ biết giá trị trung bình là chưa đủ! Ví dụ: hai lớp học cùng có điểm trung bình môn Toán là $7.0$, nhưng lớp A điểm phân bố rất đều từ $6.5$ đến $7.5$, trong khi lớp B có nhiều bạn bị $2.0$ và cũng có nhiều bạn được $10.0$. Để đo mức độ chênh lệch, phân tán hay độ ổn định của dữ liệu, chúng ta cần đến các số đặc trưng mới: **Khoảng biến thiên** và **Khoảng tứ phân vị**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐỘ PHÂN TÁN DỮ LIỆU GHÉP NHÓM</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Mẫu số liệu ghép nhóm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Gồm $k$ nhóm dạng $[a_i; a_{i+1})$ với tần số $m_i$.<br>
• Cỡ mẫu: $n = m_1 + m_2 + \dots + m_k$.<br>
• Giá trị đại diện mỗi nhóm: $c_i = \frac{a_i + a_{i+1}}{2}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Khoảng biến thiên (R)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\mathbf{R = a_{k+1} - a_1}$.<br>
• Đầu mút trên nhóm cuối trừ đầu mút dưới nhóm đầu.<br>
• Đo độ phân tán thô, dễ bị ảnh hưởng bởi giá trị dị biệt.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tứ phân vị (Q₁, Q₂, Q₃)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $Q_1$: Nhóm chứa giá trị thứ $\frac{n}{4}$.<br>
• $Q_2 = M_e$: Nhóm chứa giá trị thứ $\frac{n}{2}$ (Trung vị).<br>
• $Q_3$: Nhóm chứa giá trị thứ $\frac{3n}{4}$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Khoảng tứ phân vị (ΔQ)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $\mathbf{\Delta_Q = Q_3 - Q_1}$.<br>
• Đo độ phân tán của $50\%$ số liệu chính giữa.<br>
• Điểm ngoại lai: $x < Q_1 - 1.5\Delta_Q$ hoặc $x > Q_3 + 1.5\Delta_Q$.
</p>
</div>
</div>
</div>

---

## I. Mẫu số liệu ghép nhóm và các đại lượng cơ bản

Một mẫu số liệu ghép nhóm gồm $k$ nhóm được cho dưới dạng bảng tần số ghép nhóm:

| Nhóm | $[a_1; a_2)$ | $[a_2; a_3)$ | $\dots$ | $[a_k; a_{k+1})$ |
| :---: | :---: | :---: | :---: | :---: |
| **Tần số** | $m_1$ | $m_2$ | $\dots$ | $m_k$ |

Trong đó:
- $n = m_1 + m_2 + \dots + m_k$ là **cỡ mẫu** (tổng số lượng quan sát).
- Mỗi nhóm $[a_i; a_{i+1})$ có độ dài nhóm là $h = a_{i+1} - a_i$.
- **Giá trị đại diện** của nhóm $[a_i; a_{i+1})$ là trung điểm của nửa khoảng đó:
  $$c_i = \frac{a_i + a_{i+1}}{2}$$
- **Tần số tích lũy** của nhóm $i$ (ký hiệu $C_i = m_1 + m_2 + \dots + m_i$) là số lượng quan sát có giá trị nhỏ hơn $a_{i+1}$.

---

## II. Khoảng biến thiên của mẫu số liệu ghép nhóm

### 1. Công thức tính
Khoảng biến thiên của mẫu số liệu ghép nhóm, ký hiệu là $R$, là hiệu giữa đầu mút trên của nhóm cuối cùng và đầu mút dưới của nhóm đầu tiên:
$$\mathbf{R = a_{k+1} - a_1}$$

### 2. Ý nghĩa thống kê
- Khoảng biến thiên $R$ phản ánh độ dàn trải hay độ chênh lệch tối đa giữa các giá trị trong mẫu số liệu.
- **Ưu điểm:** Tính toán cực kỳ đơn giản, nhanh chóng.
- **Nhược điểm:** Khoảng biến thiên chỉ phụ thuộc vào hai nhóm biên ngoài cùng, do đó rất nhạy cảm và dễ bị bóp méo bởi các giá trị bất thường (giá trị dị biệt/ngoại lai).

> [!NOTE]
> Để khắc phục nhược điểm của khoảng biến thiên, người ta sử dụng **Khoảng tứ phân vị**, một đại lượng tập trung vào $50\%$ dữ liệu cốt lõi ở giữa và loại bỏ hoàn toàn ảnh hưởng của các giá trị cực đoan ở hai đầu mút!

---

## III. Tứ phân vị và Khoảng tứ phân vị của mẫu số liệu ghép nhóm

Tứ phân vị gồm ba giá trị $Q_1, Q_2, Q_3$ chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau, mỗi phần chứa xấp xỉ $25\%$ số lượng quan sát.

### 1. Công thức xác định Tứ phân vị thứ hai ($Q_2$ - Trung vị $M_e$)
- Tìm nhóm chứa $Q_2$: Giả sử đó là nhóm $[a_p; a_{p+1})$ chứa giá trị thứ $\frac{n}{2}$. Tức là:
  $$C_{p-1} < \frac{n}{2} \le C_p$$
- Khi đó, trung vị $Q_2$ được tính bằng công thức nội suy:
  $$\mathbf{Q_2 = a_p + \frac{\frac{n}{2} - C_{p-1}}{m_p} \cdot (a_{p+1} - a_p)}$$
  Trong đó $C_{p-1} = m_1 + m_2 + \dots + m_{p-1}$ là tần số tích lũy trước nhóm $p$, và $m_p$ là tần số của nhóm $p$.

---

### 2. Công thức xác định Tứ phân vị thứ nhất ($Q_1$)
- Tìm nhóm chứa $Q_1$: Giả sử đó là nhóm $[a_p; a_{p+1})$ chứa giá trị thứ $\frac{n}{4}$. Tức là:
  $$C_{p-1} < \frac{n}{4} \le C_p$$
- Khi đó, $Q_1$ được tính bởi:
  $$\mathbf{Q_1 = a_p + \frac{\frac{n}{4} - C_{p-1}}{m_p} \cdot (a_{p+1} - a_p)}$$

---

### 3. Công thức xác định Tứ phân vị thứ ba ($Q_3$)
- Tìm nhóm chứa $Q_3$: Giả sử đó là nhóm $[a_p; a_{p+1})$ chứa giá trị thứ $\frac{3n}{4}$. Tức là:
  $$C_{p-1} < \frac{3n}{4} \le C_p$$
- Khi đó, $Q_3$ được tính bởi:
  $$\mathbf{Q_3 = a_p + \frac{\frac{3n}{4} - C_{p-1}}{m_p} \cdot (a_{p+1} - a_p)}$$

---

### 4. Khoảng tứ phân vị ($\Delta_Q$) và Giá trị ngoại lai
Khoảng tứ phân vị của mẫu số liệu ghép nhóm, ký hiệu là $\Delta_Q$, là hiệu số giữa tứ phân vị thứ ba và tứ phân vị thứ nhất:
$$\mathbf{\Delta_Q = Q_3 - Q_1}$$

#### Ý nghĩa của khoảng tứ phân vị:
- $\Delta_Q$ đo độ phân tán của $50\%$ số liệu chính giữa của mẫu dữ liệu.
- $\Delta_Q$ càng nhỏ chứng tỏ $50\%$ số liệu trung tâm càng tập trung sát nhau quanh trung vị; ngược lại $\Delta_Q$ lớn cho thấy số liệu trải rộng.
- $\Delta_Q$ **không bị ảnh hưởng bởi các giá trị bất thường (outliers)**.

#### Tiêu chí nhận diện giá trị ngoại lai (Outliers):
Một giá trị $x$ trong mẫu số liệu được coi là **giá trị ngoại lai (dị biệt)** nếu nó nằm ngoài khoảng:
$$\mathbf{[Q_1 - 1.5\Delta_Q; \; Q_3 + 1.5\Delta_Q]}$$
tức là:
$$x < Q_1 - 1.5\Delta_Q \quad \text{hoặc} \quad x > Q_3 + 1.5\Delta_Q$$

---

## Công cụ trực quan: Biểu đồ hộp tương tác (Box Plot & Tứ phân vị)

Hãy di chuyển thanh trượt để thay đổi độ phân tán của mẫu dữ liệu và quan sát biểu đồ hộp (Box Plot), các mốc $Q_1, Q_2, Q_3$ cùng khoảng tứ phân vị $\Delta_Q$ biến đổi trực quan:

<div id="boxplot-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG BIỂU ĐỒ HỘP (BOX PLOT) &amp; KHOẢNG TỨ PHÂN VỊ</h4>

<div style="max-width: 480px; margin: 0 auto 16px auto; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: left;">
  <label style="font-weight: 600; color: #1e293b; display: flex; justify-content: space-between; margin-bottom: 6px;">
    <span>Độ phân tán dữ liệu:</span>
    <strong id="val-disp-factor" style="color: #2563eb;">Trung bình</strong>
  </label>
  <input type="range" id="range-disp" min="1" max="3" step="1" value="2" style="width: 100%;">
  <div style="display: flex; justify-content: space-between; font-size: 0.85em; color: #64748b; margin-top: 4px;">
    <span>Đồng đều (Hẹp)</span>
    <span>Vừa phải</span>
    <span>Phân tán mạnh (Rộng)</span>
  </div>
</div>

<div style="display: flex; justify-content: center; overflow-x: auto;">
<svg id="box-svg" data-interactive-done="true" viewBox="0 0 500 200" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1; user-select: none;">
  <!-- Axis line -->
  <line x1="40" y1="150" x2="460" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Axis Ticks & Labels -->
  <line x1="50" y1="147" x2="50" y2="153" stroke="#64748b" stroke-width="1.5"/>
  <text x="50" y="170" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">0</text>
  <line x1="150" y1="147" x2="150" y2="153" stroke="#64748b" stroke-width="1.5"/>
  <text x="150" y="170" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">25</text>
  <line x1="250" y1="147" x2="250" y2="153" stroke="#64748b" stroke-width="1.5"/>
  <text x="250" y="170" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">50</text>
  <line x1="350" y1="147" x2="350" y2="153" stroke="#64748b" stroke-width="1.5"/>
  <text x="350" y="170" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">75</text>
  <line x1="450" y1="147" x2="450" y2="153" stroke="#64748b" stroke-width="1.5"/>
  <text x="450" y="170" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">100</text>

  <!-- Left Whisker line: Min to Q1 -->
  <line id="whisker-left" x1="100" y1="80" x2="180" y2="80" stroke="#2563eb" stroke-width="2"/>
  <line id="whisker-min-bar" x1="100" y1="65" x2="100" y2="95" stroke="#2563eb" stroke-width="2"/>
  <text id="lbl-min" x="100" y="55" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold" fill="#64748b">Min: 12.5</text>

  <!-- Box from Q1 to Q3 -->
  <rect id="box-rect" x="180" y="50" width="140" height="60" fill="rgba(37, 99, 235, 0.12)" stroke="#2563eb" stroke-width="2" rx="4"/>
  
  <!-- Median Line Q2 -->
  <line id="median-line" x1="250" y1="50" x2="250" y2="110" stroke="#dc2626" stroke-width="3"/>
  <text id="lbl-q2" x="250" y="40" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold" fill="#dc2626">Q₂ (Med) = 50.0</text>

  <!-- Right Whisker line: Q3 to Max -->
  <line id="whisker-right" x1="320" y1="80" x2="400" y2="80" stroke="#2563eb" stroke-width="2"/>
  <line id="whisker-max-bar" x1="400" y1="65" x2="400" y2="95" stroke="#2563eb" stroke-width="2"/>
  <text id="lbl-max" x="400" y="55" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold" fill="#64748b">Max: 87.5</text>

  <!-- Q1 & Q3 labels -->
  <text id="lbl-q1" x="180" y="128" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold" fill="#2563eb">Q₁: 32.5</text>
  <text id="lbl-q3" x="320" y="128" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold" fill="#2563eb">Q₃: 67.5</text>
</svg>
</div>

<div id="boxplot-results" style="margin-top: 14px; padding: 14px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left; line-height: 1.85;">
  <div>• Khoảng biến thiên: <strong id="res-r" style="color: #475569;">R = Max - Min = 75.00</strong></div>
  <div>• Tứ phân vị: <span id="res-q1-q3">Q₁ = 32.50 | Q₂ = 50.00 | Q₃ = 67.50</span></div>
  <div>• Khoảng tứ phân vị: <strong id="res-delta-q" style="color: #2563eb; font-size: 1.2em;">ΔQ = Q₃ - Q₁ = 35.00</strong></div>
  <div>• Nhận xét: <span id="res-comment" style="color: #047857;">50% dữ liệu ở giữa tập trung trong khoảng từ 32.50 đến 67.50</span></div>
</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rDisp = document.getElementById('range-disp');
  const valDisp = document.getElementById('val-disp-factor');
  const resR = document.getElementById('res-r');
  const resQ = document.getElementById('res-q1-q3');
  const resDeltaQ = document.getElementById('res-delta-q');
  const resComment = document.getElementById('res-comment');

  const whiskerLeft = document.getElementById('whisker-left');
  const whiskerMinBar = document.getElementById('whisker-min-bar');
  const lblMin = document.getElementById('lbl-min');

  const boxRect = document.getElementById('box-rect');
  const medianLine = document.getElementById('median-line');
  const lblQ2 = document.getElementById('lbl-q2');

  const whiskerRight = document.getElementById('whisker-right');
  const whiskerMaxBar = document.getElementById('whisker-max-bar');
  const lblMax = document.getElementById('lbl-max');

  const lblQ1 = document.getElementById('lbl-q1');
  const lblQ3 = document.getElementById('lbl-q3');

  if (!rDisp) return;

  const dataConfigs = [
    { name: "Đồng đều (Hẹp)", min: 25, q1: 40, q2: 50, q3: 60, max: 75 },
    { name: "Trung bình", min: 12.5, q1: 32.5, q2: 50, q3: 67.5, max: 87.5 },
    { name: "Phân tán mạnh (Rộng)", min: 5, q1: 22, q2: 50, q3: 78, max: 95 }
  ];

  function update() {
    const idx = parseInt(rDisp.value) - 1;
    const cfg = dataConfigs[idx];
    valDisp.textContent = cfg.name;

    // Scale: x in [0, 100] maps to SVG pixel [50, 450]
    const toPx = val => 50 + (val / 100) * 400;

    const pxMin = toPx(cfg.min);
    const pxQ1 = toPx(cfg.q1);
    const pxQ2 = toPx(cfg.q2);
    const pxQ3 = toPx(cfg.q3);
    const pxMax = toPx(cfg.max);

    // Update SVG elements
    whiskerLeft.setAttribute('x1', pxMin);
    whiskerLeft.setAttribute('x2', pxQ1);
    whiskerMinBar.setAttribute('x1', pxMin);
    whiskerMinBar.setAttribute('x2', pxMin);
    lblMin.setAttribute('x', pxMin);
    lblMin.textContent = `Min: ${cfg.min}`;

    boxRect.setAttribute('x', pxQ1);
    boxRect.setAttribute('width', pxQ3 - pxQ1);

    medianLine.setAttribute('x1', pxQ2);
    medianLine.setAttribute('x2', pxQ2);
    lblQ2.setAttribute('x', pxQ2);
    lblQ2.textContent = `Q₂ = ${cfg.q2.toFixed(1)}`;

    whiskerRight.setAttribute('x1', pxQ3);
    whiskerRight.setAttribute('x2', pxMax);
    whiskerMaxBar.setAttribute('x1', pxMax);
    whiskerMaxBar.setAttribute('x2', pxMax);
    lblMax.setAttribute('x', pxMax);
    lblMax.textContent = `Max: ${cfg.max}`;

    lblQ1.setAttribute('x', pxQ1);
    lblQ1.textContent = `Q₁: ${cfg.q1}`;
    lblQ3.setAttribute('x', pxQ3);
    lblQ3.textContent = `Q₃: ${cfg.q3}`;

    // Readout
    const R = cfg.max - cfg.min;
    const deltaQ = cfg.q3 - cfg.q1;
    resR.textContent = `R = Max - Min = ${cfg.max} - ${cfg.min} = ${R.toFixed(2)}`;
    resQ.textContent = `Q₁ = ${cfg.q1.toFixed(2)} | Q₂ = ${cfg.q2.toFixed(2)} | Q₃ = ${cfg.q3.toFixed(2)}`;
    resDeltaQ.textContent = `ΔQ = Q₃ - Q₁ = ${cfg.q3.toFixed(2)} - ${cfg.q1.toFixed(2)} = ${deltaQ.toFixed(2)}`;
    resComment.textContent = `50% số liệu trung tâm tập trung từ ${cfg.q1.toFixed(1)} đến ${cfg.q3.toFixed(1)} (độ dài hộp là ${deltaQ.toFixed(1)} đơn vị).`;
  }

  rDisp.addEventListener('input', update);
  update();
});
</script>

---

## IV. Các dạng toán trọng tâm có lời giải chi tiết

### Dạng 1: Tính khoảng biến thiên và các tứ phân vị

**Bài toán 1:** Thời gian hoàn thành một bài kiểm tra trắc nghiệm Toán (đơn vị: phút) của $40$ học sinh lớp 12 được ghi lại trong bảng tần số ghép nhóm sau:

| Thời gian (phút) | $[15; 20)$ | $[20; 25)$ | $[25; 30)$ | $[30; 35)$ | $[35; 40)$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh ($m_i$)** | $4$ | $10$ | $14$ | $8$ | $4$ |

1. Tìm khoảng biến thiên của mẫu số liệu ghép nhóm.
2. Tìm các tứ phân vị $Q_1, Q_2, Q_3$ và khoảng tứ phân vị $\Delta_Q$.

**Lời giải:**
1. **Khoảng biến thiên:**
   - Nhóm đầu tiên là $[15; 20) \implies a_1 = 15$.
   - Nhóm cuối cùng là $[35; 40) \implies a_6 = 40$.
   - Khoảng biến thiên là:
     $$\mathbf{R = a_6 - a_1 = 40 - 15 = 25\text{ (phút)}}$$

2. **Tìm các tứ phân vị:**
   - Cỡ mẫu: $n = 4 + 10 + 14 + 8 + 4 = 40$.
   - Bảng tần số tích lũy:
     - Nhóm 1 $[15; 20)$: $C_1 = 4$.
     - Nhóm 2 $[20; 25)$: $C_2 = 4 + 10 = 14$.
     - Nhóm 3 $[25; 30)$: $C_3 = 14 + 14 = 28$.
     - Nhóm 4 $[30; 35)$: $C_4 = 28 + 8 = 36$.
     - Nhóm 5 $[35; 40)$: $C_5 = 40$.

   - **Tính $Q_2$ (Trung vị):**
     - Ta có $\frac{n}{2} = \frac{40}{2} = 20$.
     - Vì $C_2 = 14 < 20 \le C_3 = 28$ nên nhóm chứa $Q_2$ là nhóm 3: $[25; 30)$.
     - Áp dụng công thức với $a_3 = 25, C_2 = 14, m_3 = 14, h = 5$:
       $$\mathbf{Q_2 = 25 + \frac{20 - 14}{14} \cdot 5 = 25 + \frac{6 \cdot 5}{14} = 25 + \frac{15}{7} \approx 27.14\text{ (phút)}}$$

   - **Tính $Q_1$:**
     - Ta có $\frac{n}{4} = \frac{40}{4} = 10$.
     - Vì $C_1 = 4 < 10 \le C_2 = 14$ nên nhóm chứa $Q_1$ là nhóm 2: $[20; 25)$.
     - Áp dụng công thức với $a_2 = 20, C_1 = 4, m_2 = 10, h = 5$:
       $$\mathbf{Q_1 = 20 + \frac{10 - 4}{10} \cdot 5 = 20 + \frac{6 \cdot 5}{10} = 20 + 3 = 23.00\text{ (phút)}}$$

   - **Tính $Q_3$:**
     - Ta có $\frac{3n}{4} = \frac{3 \cdot 40}{4} = 30$.
     - Vì $C_3 = 28 < 30 \le C_4 = 36$ nên nhóm chứa $Q_3$ là nhóm 4: $[30; 35)$.
     - Áp dụng công thức với $a_4 = 30, C_3 = 28, m_4 = 8, h = 5$:
       $$\mathbf{Q_3 = 30 + \frac{30 - 28}{8} \cdot 5 = 30 + \frac{2 \cdot 5}{8} = 30 + 1.25 = 31.25\text{ (phút)}}$$

   - **Khoảng tứ phân vị:**
     $$\mathbf{\Delta_Q = Q_3 - Q_1 = 31.25 - 23.00 = 8.25\text{ (phút)}}$$
     *Ý nghĩa:* $50\%$ số học sinh có thời gian làm bài ở mức trung bình tập trung trong khoảng từ $23.00$ đến $31.25$ phút, với độ chênh lệch là $8.25$ phút.

---

### Dạng 2: So sánh độ phân tán giữa hai mẫu số liệu ghép nhóm

**Bài toán 2:** Để đánh giá mức độ ổn định về thời gian tự học mỗi ngày của học sinh hai lớp 12A và 12B, nhà trường thu thập số liệu (đơn vị: giờ) và tính được kết quả sau:
- **Lớp 12A:** $Q_1 = 1.8\text{ h}$, $Q_3 = 3.2\text{ h}$, $R = 4.0\text{ h}$.
- **Lớp 12B:** $Q_1 = 2.1\text{ h}$, $Q_3 = 2.8\text{ h}$, $R = 4.5\text{ h}$.

Hỏi thời gian tự học của học sinh lớp nào có độ phân tán đồng đều hơn nếu xét trên $50\%$ số học sinh ở nhóm giữa?

**Lời giải:**
- Khoảng tứ phân vị của lớp 12A:
  $$\Delta_{Q(A)} = 3.2 - 1.8 = 1.4\text{ (giờ)}$$
- Khoảng tứ phân vị của lớp 12B:
  $$\Delta_{Q(B)} = 2.8 - 2.1 = 0.7\text{ (giờ)}$$
- So sánh: Vì $\Delta_{Q(B)} = 0.7 < \Delta_{Q(A)} = 1.4$, nên xét trên $50\%$ số học sinh có thời gian tự học ở mức trung bình, thời gian tự học của học sinh **lớp 12B đồng đều và tập trung hơn nhiều** so với lớp 12A (dù khoảng biến thiên $R$ của lớp B lớn hơn do có vài bạn học rất ít hoặc rất nhiều).

---

## V. Trắc nghiệm tự luyện củng cố kiến thức

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho mẫu số liệu ghép nhóm có 4 nhóm: [10; 20), [20; 30), [30; 40), [40; 50). Khoảng biến thiên R của mẫu số liệu bằng:",
  "options": [
    "A. 40",
    "B. 50",
    "C. 10",
    "D. 30"
  ],
  "answer": "A. 40",
  "explanation": "Khoảng biến thiên R = a_5 - a_1 = 50 - 10 = 40."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Khoảng tứ phân vị ΔQ của mẫu số liệu ghép nhóm được xác định bởi công thức:",
  "options": [
    "A. ΔQ = Q3 - Q1",
    "B. ΔQ = Q3 - Q2",
    "C. ΔQ = Q2 - Q1",
    "D. ΔQ = (Q1 + Q3) / 2"
  ],
  "answer": "A. ΔQ = Q3 - Q1",
  "explanation": "Theo định nghĩa, khoảng tứ phân vị ΔQ = Q3 - Q1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một mẫu số liệu ghép nhóm có cỡ mẫu n = 60. Nhóm chứa tứ phân vị thứ nhất Q1 là nhóm chứa giá trị thứ bao nhiêu?",
  "options": [
    "A. 15",
    "B. 30",
    "C. 45",
    "D. 20"
  ],
  "answer": "A. 15",
  "explanation": "Tứ phân vị thứ nhất Q1 ứng với n/4 = 60/4 = 15."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một mẫu số liệu ghép nhóm có cỡ mẫu n = 100. Nhóm chứa tứ phân vị thứ ba Q3 là nhóm chứa giá trị thứ bao nhiêu?",
  "options": [
    "A. 75",
    "B. 25",
    "C. 50",
    "D. 80"
  ],
  "answer": "A. 75",
  "explanation": "Tứ phân vị thứ ba Q3 ứng với 3n/4 = 3*100/4 = 75."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho mẫu số liệu ghép nhóm có Q1 = 12 và Q3 = 20. Giá trị nào sau đây là giá trị ngoại lai (outlier)?",
  "options": [
    "A. 35",
    "B. 15",
    "C. 25",
    "D. 8"
  ],
  "answer": "A. 35",
  "explanation": "ΔQ = 20 - 12 = 8. Giới hạn trên: Q3 + 1.5*ΔQ = 20 + 1.5*8 = 32. Vì 35 > 32 nên 35 là giá trị ngoại lai."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Ưu điểm nổi bật nhất của khoảng tứ phân vị so với khoảng biến thiên là:",
  "options": [
    "A. Không bị ảnh hưởng bởi các giá trị bất thường (dị biệt)",
    "B. Dễ tính toán hơn",
    "C. Luôn có giá trị lớn hơn",
    "D. Phụ thuộc vào tất cả các giá trị của mẫu"
  ],
  "answer": "A. Không bị ảnh hưởng bởi các giá trị bất thường (dị biệt)",
  "explanation": "Khoảng tứ phân vị chỉ đo độ phân tán của 50% số liệu trung tâm nên không bị ảnh hưởng bởi các giá trị quá lớn hoặc quá nhỏ ở hai đầu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giá trị đại diện của nhóm [40; 60) là:",
  "options": [
    "A. 50",
    "B. 40",
    "C. 60",
    "D. 20"
  ],
  "answer": "A. 50",
  "explanation": "Giá trị đại diện c = (40 + 60) / 2 = 50."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho bảng tần số ghép nhóm gồm 3 nhóm: [0; 10) có 5 phần tử, [10; 20) có 15 phần tử, [20; 30) có 10 phần tử. Trung vị Q2 thuộc nhóm nào?",
  "options": [
    "A. [10; 20)",
    "B. [0; 10)",
    "C. [20; 30)",
    "D. Không xác định"
  ],
  "answer": "A. [10; 20)",
  "explanation": "Cỡ mẫu n = 5 + 15 + 10 = 30. n/2 = 15. Tần số tích luỹ nhóm 1 là 5, nhóm 2 là 20. Vì 5 < 15 <= 20 nên nhóm chứa trung vị là [10; 20)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khi so sánh độ phân tán của hai mẫu số liệu có cùng đơn vị đo, mẫu có khoảng tứ phân vị nhỏ hơn chứng tỏ:",
  "options": [
    "A. 50% số liệu chính giữa có độ phân tán đồng đều và tập trung hơn",
    "B. Mẫu có số lượng quan sát ít hơn",
    "C. Số trung bình của mẫu nhỏ hơn",
    "D. Mẫu có khoảng biến thiên nhỏ hơn"
  ],
  "answer": "A. 50% số liệu chính giữa có độ phân tán đồng đều và tập trung hơn",
  "explanation": "Khoảng tứ phân vị càng nhỏ chứng tỏ nửa số liệu trung tâm càng tập trung sít sao quanh trung vị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho mẫu số liệu ghép nhóm có Q1 = 15, Q3 = 25. Giá trị nào dưới đây là giá trị ngoại lai phía dưới (bé bất thường)?",
  "options": [
    "A. -5",
    "B. 5",
    "C. 10",
    "D. 0"
  ],
  "answer": "A. -5",
  "explanation": "ΔQ = 25 - 15 = 10. Giới hạn dưới: Q1 - 1.5*ΔQ = 15 - 1.5*10 = 0. Vì -5 < 0 nên -5 là giá trị ngoại lai phía dưới."
}'></div>
