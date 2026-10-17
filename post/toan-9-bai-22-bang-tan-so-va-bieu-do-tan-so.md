---
title: 'Toán 9 Bài 22: Bảng tần số và biểu đồ tần số - Thu thập, Trực quan hóa & Phân tích số liệu thống kê'
description: 'Lý thuyết trọn vẹn Bài 22 Toán 9: Khái niệm tần số, cỡ mẫu N, cách lập bảng tần số, vẽ biểu đồ cột và biểu đồ đoạn thẳng, đọc hiểu dữ liệu thống kê, widget tạo biểu đồ tương tác và 10 câu trắc nghiệm có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Thống kê 9
  - Tần số
  - Bảng tần số
  - Biểu đồ cột
  - Biểu đồ đoạn thẳng
  - Kết nối tri thức
grade: 9
---

# Bài 22. Bảng tần số và biểu đồ tần số

Chúng ta đang sống trong kỷ nguyên bùng nổ của **Dữ liệu lớn (Big Data)** và **Trí tuệ nhân tạo (AI)**:
- Mỗi ngày có hàng tỉ lượt tìm kiếm trên Google, hàng triệu đơn hàng trên các sàn thương mại điện tử, và hàng trăm thông số nhịp tim được đo lường qua đồng hồ thông minh.
- Làm thế nào các nhà khoa học dữ liệu có thể nhìn vào hàng triệu con số thô ráp hỗn độn để phát hiện ngay: *Sản phẩm nào đang bán chạy nhất? Nhóm khách hàng nào tiềm năng nhất? Hay xu hướng thời tiết đang biến đổi ra sao?*

Câu trả lời nằm ở công cụ nền tảng đầu tiên của Thống kê học hiện đại: **Tần số và Biểu đồ tần số**.

Bước sang **Chương VII: Tần số và tần số tương đối**, các em sẽ được trang bị kỹ năng cốt lõi của một chuyên gia phân tích dữ liệu: từ thu thập số liệu thô, phân loại kiểm đếm, đóng gói thành bảng tần số khoa học, cho đến vẽ các biểu đồ trực quan biết "kể chuyện". Cùng bắt đầu ngay nhé!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: BẢNG TẦN SỐ VÀ BIỂU ĐỒ TẦN SỐ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Tần số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Số lần xuất hiện của một giá trị trong mẫu gọi là <strong>tần số</strong> ($m$ hoặc $n_i$).<br>• Cỡ mẫu $N$: Tổng số phần tử dữ liệu ($N = m_1 + m_2 + \dots + m_k$).<br>• Giá trị có tần số lớn nhất gọi là <strong>Mốt</strong> ($M_o$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Bảng Tần số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bảng gồm 2 dòng (hoặc 2 cột): Giá trị ($x$) và Tần số tương ứng ($m$).<br>• Dòng/cột cuối cùng luôn là tổng cộng cỡ mẫu $N$.<br>• Giúp tóm tắt dữ liệu thô cô đọng, ngăn nắp.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biểu đồ Cột (Bar Chart)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trục ngang: Ghi các giá trị $x_i$.<br>• Trục đứng: Ghi thang đo tần số $m_i$.<br>• Các cột hình chữ nhật có bề rộng bằng nhau, chiều cao tương ứng với tần số.<br>• Thích hợp so sánh độ lớn giữa các giá trị.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu đồ Đoạn thẳng (Line Chart)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Xác định các điểm $(x_i; m_i)$ trên mặt phẳng.<br>• Nối các điểm liên tiếp bằng các đoạn thẳng.<br>• Thể hiện trực quan xu hướng tăng/giảm, biến động của dữ liệu theo thứ tự.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Một cuộc điều tra điểm môn Toán của 20 học sinh cho thấy có 5 bạn đạt điểm 9. Tần số của giá trị "9 điểm" là bao nhiêu?
2. **Cỡ mẫu:** Một bảng tần số có các tần số lần lượt là: $4, 6, 8, 2$. Cỡ mẫu $N$ của cuộc điều tra này bằng bao nhiêu?
3. **Mốt:** Trong dãy điểm số: $6, 7, 8, 8, 8, 9, 10$, giá trị nào có tần số xuất hiện nhiều nhất (Mốt)?
4. **Trục biểu đồ:** Trên biểu đồ tần số dạng cột, trục thẳng đứng thường biểu thị đại lượng nào?
5. **Đọc biểu đồ:** Một biểu đồ cột có cột cao nhất đạt vạch số 15 tương ứng với cỡ áo Size M. Điều này có ý nghĩa gì trong thực tế?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Tần số bằng **5**.
> 2. Cỡ mẫu $N = 4 + 6 + 8 + 2 = 20$.
> 3. Giá trị **8** (xuất hiện 3 lần, nhiều nhất).
> 4. Biểu thị **tần số** (số lượng xuất hiện).
> 5. Có đúng **15 người** mặc áo Size M (Size M là kích cỡ phổ biến nhất).

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm Tần số của một Giá trị

Khi điều tra về một dấu hiệu hoặc một biến số thống kê nào đó trên một tập hợp các đối tượng, ta thu được một danh sách các số liệu ban đầu gọi là **mẫu dữ liệu thô**.

> [!NOTE]
> **Định nghĩa:**
> - **Tần số (Frequency):** Số lần xuất hiện của một giá trị trong mẫu dữ liệu được gọi là tần số của giá trị đó.
> - Ký hiệu tần số của giá trị $x_i$ thường là $m_i$ (hoặc $n_i$).
> - **Cỡ mẫu (Sample size):** Tổng tất cả các tần số của các giá trị trong mẫu dữ liệu đúng bằng tổng số đối tượng điều tra, ký hiệu là $N$:
> $$N = m_1 + m_2 + \dots + m_k = \sum_{i=1}^k m_i$$
> - **Mốt của mẫu dữ liệu (Mode):** Giá trị có tần số xuất hiện lớn nhất trong mẫu dữ liệu, ký hiệu là $M_o$. Một mẫu dữ liệu có thể có một mốt, nhiều mốt hoặc không có mốt.

---

### 2. Bảng Tần số

Để dễ dàng theo dõi, so sánh và tính toán, người ta sắp xếp các giá trị khác nhau của mẫu dữ liệu theo thứ tự tăng dần kèm theo tần số tương ứng của chúng thành một bảng gọi là **Bảng tần số**.

Bảng tần số thường được trình bày dưới 2 dạng:
- **Dạng dòng ngang:** Dòng trên ghi các giá trị $x_i$, dòng dưới ghi các tần số tương ứng $m_i$.
- **Dạng cột dọc:** Cột bên trái ghi các giá trị $x_i$, cột bên phải ghi các tần số $m_i$.

#### Ví dụ mẫu:
Khảo sát số con của $30$ gia đình trong một tổ dân phố, số liệu thu được như sau:
$$2, 1, 2, 3, 2, 1, 0, 2, 2, 1, 2, 3, 2, 1, 2, 2, 4, 1, 2, 2, 0, 1, 2, 3, 2, 1, 2, 2, 1, 2$$

Bảng tần số dạng ngang:

| Số con ($x$) | 0 | 1 | 2 | 3 | 4 | Tổng cộng ($N$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Tần số ($m$)** | 2 | 8 | 16 | 3 | 1 | **30** |

*Nhận xét từ bảng tần số:*
- Có $k = 5$ giá trị khác nhau: $0, 1, 2, 3, 4$.
- Giá trị $x = 2$ có tần số lớn nhất ($m = 16$), do đó Mốt của mẫu số liệu là $M_o = 2$ con (gia đình sinh 2 con chiếm số lượng áp đảo).
- Tổng các tần số bằng đúng cỡ mẫu: $2 + 8 + 16 + 3 + 1 = 30$.

---

### 3. Biểu đồ Tần số

Để người xem nắm bắt thông tin một cách nhanh chóng, trực quan và sinh động nhất, người ta chuyển đổi bảng tần số thành **Biểu đồ tần số**. Hai dạng biểu đồ phổ biến nhất là **Biểu đồ cột** và **Biểu đồ đoạn thẳng**.

#### a) Biểu đồ tần số dạng cột (Bar Chart)
- **Quy tắc dựng:**
  + Vẽ hai trục vuông góc: Trục hoành nằm ngang ghi các giá trị $x_i$; Trục tung thẳng đứng ghi tần số $m_i$ với tỷ lệ chia độ thích hợp.
  + Tại mỗi giá trị $x_i$, vẽ một hình chữ nhật đứng (cột) có đáy nhận $x_i$ làm tâm (hoặc nhãn nằm chính giữa đáy cột), chiều cao của cột bằng đúng tần số $m_i$.
  + Bề rộng của tất cả các cột phải **hoàn toàn bằng nhau**, các cột tách rời nhau một khoảng cách hợp lý.

#### b) Biểu đồ tần số dạng đoạn thẳng (Line Chart / Frequency Polygon)
- **Quy tắc dựng:**
  + Trên mặt phẳng tọa độ, xác định các điểm có tọa độ $(x_i; m_i)$.
  + Nối các điểm liên tiếp nhau bằng các đoạn thẳng: Nối $(x_1; m_1)$ với $(x_2; m_2)$, $(x_2; m_2)$ với $(x_3; m_3)$,...
- **Ý nghĩa:** Biểu đồ đoạn thẳng đặc biệt hữu ích khi các giá trị $x$ mang tính chất thứ tự liên tục (thời gian, độ tuổi, nhiệt độ, điểm số), giúp người phân tích nhìn thấy ngay **xu hướng tăng, giảm hoặc biến thiên cực đại/cực tiểu** của dữ liệu.

---

## II. Mô phỏng Tương tác: Trực quan hóa Bảng & Biểu đồ Tần số

Dưới đây là công cụ phân tích thống kê tự động. Các em có thể chọn bộ dữ liệu có sẵn (Điểm thi, Cỡ giày thể thao, Số giờ tự học) hoặc tự nhập dãy số liệu cách nhau bởi dấu phẩy. Hệ thống sẽ tự động tổng hợp bảng tần số, vẽ biểu đồ cột SVG và chuyển đổi sang biểu đồ đoạn thẳng tức thì!

<div class="interactive-frequency-sim" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG THỐNG KÊ: LẬP BẢNG & VẼ BIỂU ĐỒ TẦN SỐ</h4>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; margin-bottom: 10px;">
      <span style="font-weight: bold; font-size: 0.9em;">Chọn mẫu dữ liệu nhanh:</span>
      <button type="button" class="preset-btn" data-preset="shoes" style="padding: 5px 12px; font-size: 0.85em; background: #eff6ff; border: 1px solid #3b82f6; border-radius: 6px; cursor: pointer; color: #1d4ed8; font-weight: 600;">Cỡ giày thể thao</button>
      <button type="button" class="preset-btn" data-preset="grades" style="padding: 5px 12px; font-size: 0.85em; background: #ecfdf5; border: 1px solid #10b981; border-radius: 6px; cursor: pointer; color: #047857; font-weight: 600;">Điểm kiểm tra Toán</button>
      <button type="button" class="preset-btn" data-preset="hours" style="padding: 5px 12px; font-size: 0.85em; background: #fefce8; border: 1px solid #f59e0b; border-radius: 6px; cursor: pointer; color: #b45309; font-weight: 600;">Giờ tự học / tuần</button>
    </div>
    <div style="display: flex; gap: 8px;">
      <input type="text" id="rawInput" value="38, 39, 40, 39, 41, 40, 40, 39, 42, 40, 39, 40, 41, 40, 39, 40, 42, 40, 39, 41" style="flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9em;" placeholder="Nhập các số cách nhau bởi dấu phẩy..." />
      <button id="btnAnalyze" type="button" style="padding: 8px 16px; background: #2563eb; color: #ffffff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Phân tích</button>
    </div>
  </div>

  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: flex-start;">
    <!-- Visual Chart -->
    <div style="flex: 1 1 340px; max-width: 440px; text-align: center;">
      <div style="display: flex; justify-content: flex-end; gap: 8px; margin-bottom: 8px;">
        <button id="btnBar" type="button" style="padding: 4px 10px; font-size: 0.8em; border-radius: 4px; border: 1px solid #cbd5e1; background: #2563eb; color: #ffffff; cursor: pointer;">Biểu đồ cột</button>
        <button id="btnLine" type="button" style="padding: 4px 10px; font-size: 0.8em; border-radius: 4px; border: 1px solid #cbd5e1; background: #ffffff; color: #475569; cursor: pointer;">Đoạn thẳng</button>
      </div>
      <svg data-interactive-done="true" id="chartSvg" viewBox="0 0 380 240" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);"></svg>
    </div>

    <!-- Frequency Table & Stats -->
    <div style="flex: 1 1 280px; max-width: 360px;">
      <div id="tableWrapper" style="overflow-x: auto; margin-bottom: 12px;"></div>
      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; font-size: 0.88em; line-height: 1.8;">
        <div>• Cỡ mẫu: <strong id="statN" style="color: #2563eb;">N = 20</strong></div>
        <div>• Mốt của mẫu: <strong id="statMode" style="color: #dc2626;">Mo = 40 (xuất hiện 8 lần)</strong></div>
        <div>• Số giá trị phân biệt: <strong id="statK">5 giá trị</strong></div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const rawInput = document.getElementById('rawInput');
  const btnAnalyze = document.getElementById('btnAnalyze');
  const chartSvg = document.getElementById('chartSvg');
  const tableWrapper = document.getElementById('tableWrapper');
  const statN = document.getElementById('statN');
  const statMode = document.getElementById('statMode');
  const statK = document.getElementById('statK');
  const btnBar = document.getElementById('btnBar');
  const btnLine = document.getElementById('btnLine');
  const presetBtns = document.querySelectorAll('.preset-btn');

  if (!rawInput || !chartSvg) return;

  let currentMode = 'bar'; // 'bar' or 'line'
  let cachedData = [];

  const presets = {
    shoes: "38, 39, 40, 39, 41, 40, 40, 39, 42, 40, 39, 40, 41, 40, 39, 40, 42, 40, 39, 41",
    grades: "7, 8, 9, 8, 6, 10, 8, 7, 9, 8, 8, 7, 10, 6, 8, 9, 7, 8, 9, 8",
    hours: "2, 3, 4, 3, 5, 4, 4, 3, 6, 4, 3, 4, 5, 4, 3, 4, 6, 4, 3, 5"
  };

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.getAttribute('data-preset');
      if (presets[p]) {
        rawInput.value = presets[p];
        processData();
      }
    });
  });

  btnBar.addEventListener('click', () => {
    currentMode = 'bar';
    btnBar.style.background = '#2563eb';
    btnBar.style.color = '#ffffff';
    btnLine.style.background = '#ffffff';
    btnLine.style.color = '#475569';
    drawChart();
  });

  btnLine.addEventListener('click', () => {
    currentMode = 'line';
    btnLine.style.background = '#2563eb';
    btnLine.style.color = '#ffffff';
    btnBar.style.background = '#ffffff';
    btnBar.style.color = '#475569';
    drawChart();
  });

  btnAnalyze.addEventListener('click', processData);

  function processData() {
    const raw = rawInput.value.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    if (raw.length === 0) return;

    // Count frequencies
    const freqMap = {};
    raw.forEach(val => {
      freqMap[val] = (freqMap[val] || 0) + 1;
    });

    const sortedVals = Object.keys(freqMap).map(Number).sort((a, b) => a - b);
    cachedData = sortedVals.map(val => ({ x: val, m: freqMap[val] }));

    const N = raw.length;
    statN.textContent = 'N = ' + N;
    statK.textContent = sortedVals.length + ' giá trị';

    // Find mode
    let maxM = 0;
    cachedData.forEach(item => { if (item.m > maxM) maxM = item.m; });
    const modes = cachedData.filter(item => item.m === maxM).map(item => item.x);
    statMode.textContent = 'Mo = ' + modes.join(', ') + ' (' + maxM + ' lần)';

    // Render Table
    let tableHtml = '<table style="width: 100%; border-collapse: collapse; font-size: 0.85em; text-align: center; border: 1px solid #e2e8f0;">';
    tableHtml += '<thead><tr style="background: #f1f5f9;"><th style="padding: 6px; border: 1px solid #cbd5e1;">Giá trị ($x$)</th>';
    cachedData.forEach(d => { tableHtml += `<th style="padding: 6px; border: 1px solid #cbd5e1;">${d.x}</th>`; });
    tableHtml += '<th style="padding: 6px; border: 1px solid #cbd5e1; background: #e2e8f0;">Tổng</th></tr></thead><tbody><tr>';
    tableHtml += '<td style="padding: 6px; font-weight: bold; border: 1px solid #cbd5e1;">Tần số ($m$)</td>';
    cachedData.forEach(d => { tableHtml += `<td style="padding: 6px; border: 1px solid #cbd5e1; font-weight: ${d.m === maxM ? 'bold' : 'normal'}; color: ${d.m === maxM ? '#dc2626' : '#1e293b'};">${d.m}</td>`; });
    tableHtml += `<td style="padding: 6px; font-weight: bold; border: 1px solid #cbd5e1; background: #e2e8f0; color: #2563eb;">${N}</td></tr></tbody></table>`;
    tableWrapper.innerHTML = tableHtml;

    drawChart();
  }

  function drawChart() {
    if (!cachedData || cachedData.length === 0) return;

    const padL = 40, padR = 25, padT = 30, padB = 40;
    const w = 380, h = 240;
    const chartW = w - padL - padR;
    const chartH = h - padT - padB;

    let maxM = 0;
    cachedData.forEach(d => { if (d.m > maxM) maxM = d.m; });
    const yMax = Math.max(5, Math.ceil(maxM * 1.25));

    let svgHtml = '';

    // Axes
    svgHtml += `<line x1="${padL}" y1="${h - padB}" x2="${w - padR}" y2="${h - padB}" stroke="#64748b" stroke-width="1.5" />`;
    svgHtml += `<line x1="${padL}" y1="${padT - 10}" x2="${padL}" y2="${h - padB}" stroke="#64748b" stroke-width="1.5" />`;
    svgHtml += `<text x="${w - padR}" y="${h - padB + 20}" font-size="11" font-weight="bold" fill="#64748b" text-anchor="end">Giá trị (x)</text>`;
    svgHtml += `<text x="${padL - 6}" y="${padT - 12}" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">m</text>`;

    // Y ticks
    const stepY = Math.max(1, Math.ceil(yMax / 5));
    for (let val = 0; val <= yMax; val += stepY) {
      const yPos = (h - padB) - (val / yMax) * chartH;
      svgHtml += `<line x1="${padL - 4}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="#f1f5f9" stroke-width="1" />`;
      svgHtml += `<text x="${padL - 8}" y="${yPos + 4}" font-size="10" fill="#64748b" text-anchor="end">${val}</text>`;
    }

    const nCols = cachedData.length;
    const colSpacing = chartW / nCols;

    if (currentMode === 'bar') {
      const barW = Math.min(36, colSpacing * 0.65);
      cachedData.forEach((d, idx) => {
        const xCenter = padL + idx * colSpacing + colSpacing / 2;
        const barH = (d.m / yMax) * chartH;
        const barY = (h - padB) - barH;
        const isMax = d.m === maxM;
        const color = isMax ? '#ef4444' : '#3b82f6';

        svgHtml += `<rect x="${xCenter - barW/2}" y="${barY}" width="${barW}" height="${barH}" rx="4" fill="${color}" opacity="0.85" />`;
        svgHtml += `<text x="${xCenter}" y="${barY - 5}" font-size="11" font-weight="bold" fill="${color}" text-anchor="middle">${d.m}</text>`;
        svgHtml += `<text x="${xCenter}" y="${h - padB + 16}" font-size="11" fill="#1e293b" text-anchor="middle">${d.x}</text>`;
      });
    } else {
      // Line mode
      let points = [];
      cachedData.forEach((d, idx) => {
        const xCenter = padL + idx * colSpacing + colSpacing / 2;
        const yPos = (h - padB) - (d.m / yMax) * chartH;
        points.push({ x: xCenter, y: yPos, m: d.m, label: d.x });
      });

      // Draw polyline
      const ptsStr = points.map(p => `${p.x},${p.y}`).join(' ');
      svgHtml += `<polyline points="${ptsStr}" fill="none" stroke="#2563eb" stroke-width="2.5" />`;

      points.forEach(p => {
        svgHtml += `<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#ef4444" stroke="#ffffff" stroke-width="1.5" />`;
        svgHtml += `<text x="${p.x}" y="${p.y - 7}" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">${p.m}</text>`;
        svgHtml += `<text x="${p.x}" y="${h - padB + 16}" font-size="11" fill="#1e293b" text-anchor="middle">${p.label}</text>`;
      });
    }

    chartSvg.innerHTML = svgHtml;
  }

  processData();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Lập Bảng Tần số từ Mẫu Dữ liệu Thô

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Quan sát toàn bộ số liệu thô để tìm giá trị nhỏ nhất và lớn nhất.
> 2. Liệt kê tất cả các giá trị **khác nhau** theo thứ tự tăng dần vào dòng/cột $x$.
> 3. Tiến hành **kiểm đếm** (dùng phương pháp gạch dấu kiểm $///$ hoặc đếm từng giá trị) để xác định tần số $m$ tương ứng.
> 4. **Kiểm tra bắt buộc:** Cộng tất cả các tần số vừa tìm được xem có bằng đúng cỡ mẫu $N$ hay không ($m_1 + m_2 + \dots + m_k = N$). Nếu lệch số, lập tức kiểm tra lại các giá trị bị sót!

#### Bài toán mẫu 1.1:
Điểm kiểm tra giữa học kỳ môn Tiếng Anh của $25$ học sinh lớp 9A được ghi lại như sau:
$$7, 8, 6, 9, 8, 7, 10, 8, 5, 8, 7, 9, 8, 6, 7, 8, 9, 10, 7, 8, 6, 8, 9, 7, 8$$
a) Hãy lập bảng tần số của mẫu số liệu trên.
b) Tìm mốt $M_o$ của mẫu số liệu và cho biết có bao nhiêu bạn đạt điểm từ $8$ trở lên?

**Lời giải chi tiết:**
a) Lập bảng tần số:
- Các giá trị điểm số khác nhau xếp theo thứ tự tăng dần là: $5, 6, 7, 8, 9, 10$.
- Đếm số lần xuất hiện của từng giá trị:
  + Điểm 5 xuất hiện: $1$ lần ($m = 1$).
  + Điểm 6 xuất hiện: $3$ lần ($m = 3$).
  + Điểm 7 xuất hiện: $6$ lần ($m = 6$).
  + Điểm 8 xuất hiện: $9$ lần ($m = 9$).
  + Điểm 9 xuất hiện: $4$ lần ($m = 4$).
  + Điểm 10 xuất hiện: $2$ lần ($m = 2$).
- Tổng tần số: $1 + 3 + 6 + 9 + 4 + 2 = 25$ (đúng bằng cỡ mẫu $N = 25$).

Bảng tần số:

| Điểm số ($x$) | 5 | 6 | 7 | 8 | 9 | 10 | Tổng cộng ($N$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Tần số ($m$)** | 1 | 3 | 6 | 9 | 4 | 2 | **25** |

b) Nhận xét:
- Mốt của mẫu số liệu là $M_o = 8$ điểm (vì có tần số xuất hiện nhiều nhất là $9$ lần).
- Số học sinh đạt điểm từ $8$ trở lên bao gồm các điểm $8, 9, 10$:
  $$m_8 + m_9 + m_{10} = 9 + 4 + 2 = 15\text{ học sinh}$$
  *(Chiếm tỷ lệ $\frac{15}{25} = 60\%$ tổng số học sinh của lớp).*

---

### Dạng 2: Vẽ và Đọc Biểu đồ Tần số Dạng Cột và Đoạn Thẳng

> [!TIP]
> **Phương pháp cốt lõi:**
> - **Khi vẽ:** Trục hoành ghi giá trị $x$, trục tung ghi tần số $m$. Đảm bảo tỷ lệ chia độ đều đặn trên trục tung, ghi rõ số liệu trên đỉnh mỗi cột/điểm.
> - **Khi đọc biểu đồ:**
>   + Nhìn đỉnh cột cao nhất để đọc **Mốt** và tần số cực đại.
>   + Cộng chiều cao các cột để tìm **cỡ mẫu $N$**.
>   + Tính tỉ lệ phần trăm của một nhóm giá trị: $\% = \frac{m_{\text{nhóm}}}{N} \times 100\%$.

#### Bài toán mẫu 2.1:
Cho biểu đồ tần số dạng đoạn thẳng thể hiện số lượng cuộc gọi rác mà một nhân viên văn phòng nhận được mỗi ngày trong suốt $30\text{ ngày}$ của tháng 4:
- Ngày nhận 0 cuộc: tần số $4$ ngày.
- Ngày nhận 1 cuộc: tần số $7$ ngày.
- Ngày nhận 2 cuộc: tần số $12$ ngày.
- Ngày nhận 3 cuộc: tần số $5$ ngày.
- Ngày nhận 4 cuộc: tần số $2$ ngày.

a) Lập bảng tần số tương ứng từ số liệu trên.
b) Trong tháng 4, có bao nhiêu ngày nhân viên nhận từ 2 cuộc gọi rác trở lên? Tính tỉ lệ phần trăm số ngày đó.

**Lời giải chi tiết:**
a) Bảng tần số:

| Số cuộc gọi ($x$) | 0 | 1 | 2 | 3 | 4 | Tổng cộng ($N$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Số ngày ($m$)** | 4 | 7 | 12 | 5 | 2 | **30** |

b) Số ngày nhận từ 2 cuộc gọi rác trở lên (tương ứng với $x = 2, 3, 4$):
$$m_{x \ge 2} = 12 + 5 + 2 = 19\text{ ngày}$$
Tỉ lệ phần trăm số ngày nhận từ 2 cuộc gọi rác trở lên trong tháng là:
$$\% = \frac{19}{30} \times 100\% \approx 63{,}33\%$$

---

### Dạng 3: Tính Số Trung Bình Cộng từ Bảng Tần số

> [!TIP]
> **Phương pháp cốt lõi:**
> Số trung bình cộng $\bar{x}$ của một mẫu số liệu cho bởi bảng tần số được tính bằng tổng các tích của giá trị nhân với tần số tương ứng, chia cho cỡ mẫu $N$:
> $$\bar{x} = \frac{x_1 m_1 + x_2 m_2 + \dots + x_k m_k}{N} = \frac{\sum_{i=1}^k x_i m_i}{N}$$
> *Ý nghĩa:* Số trung bình biểu thị giá trị đại diện cho toàn bộ mẫu số liệu khi các số liệu không có sự chênh lệch quá dị biệt.

#### Bài toán mẫu 3.1:
Một trạm quan trắc ghi lại số giờ nắng mỗi ngày trong tháng 6 ($30\text{ ngày}$) qua bảng tần số sau:

| Số giờ nắng ($x$) | 4 | 5 | 6 | 7 | 8 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số ngày ($m$)** | 3 | 5 | 10 | 8 | 4 |

Tính số giờ nắng trung bình mỗi ngày trong tháng 6 của trạm quan trắc đó.

**Lời giải chi tiết:**
- Cỡ mẫu: $N = 3 + 5 + 10 + 8 + 4 = 30\text{ ngày}$.
- Tổng số giờ nắng của toàn bộ tháng 6 là:
  $$\sum x_i m_i = (4 \times 3) + (5 \times 5) + (6 \times 10) + (7 \times 8) + (8 \times 4)$$
  $$\sum x_i m_i = 12 + 25 + 60 + 56 + 32 = 185\text{ giờ}$$
- Số giờ nắng trung bình mỗi ngày trong tháng 6 là:
  $$\bar{x} = \frac{185}{30} \approx 6{,}17\text{ giờ/ngày}$$

---

### Dạng 4: Bài toán Khuyết Tần số trong Mẫu Dữ liệu

> [!TIP]
> **Phương pháp cốt lõi:**
> Đề bài giấu một hoặc hai tần số dưới dạng ẩn $x, y$ và cho biết cỡ mẫu $N$ hoặc số trung bình cộng $\bar{x}$:
> 1. Dùng tổng cỡ mẫu: $\sum m_i = N \implies$ lập phương trình thứ nhất.
> 2. Dùng công thức trung bình: $\frac{\sum x_i m_i}{N} = \bar{x} \implies$ lập phương trình thứ hai.
> 3. Giải hệ phương trình hoặc phương trình bậc nhất tìm các tần số bị khuyết.

#### Bài toán mẫu 4.1:
Khảo sát số lỗi chính tả trong bài kiểm tra Văn của một lớp học gồm $40$ học sinh, người ta lập được một phần bảng tần số như sau:

| Số lỗi ($x$) | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Tần số ($m$)** | 8 | $a$ | 12 | $b$ | 4 |

Biết số lỗi chính tả trung bình của mỗi học sinh trong lớp là $\bar{x} = 2{,}8$ lỗi. Hãy tìm các tần số $a$ và $b$ còn thiếu trong bảng.

**Lời giải chi tiết:**
Tổng số học sinh được điều tra là $N = 40$, ta có:
$$8 + a + 12 + b + 4 = 40 \iff a + b + 24 = 40 \iff a + b = 16 \quad (1)$$

Số lỗi chính tả trung bình là $\bar{x} = 2{,}8$, ta có:
$$\bar{x} = \frac{(1 \times 8) + (2 \times a) + (3 \times 12) + (4 \times b) + (5 \times 4)}{40} = 2{,}8$$
$$\iff \frac{8 + 2a + 36 + 4b + 20}{40} = 2{,}8$$
$$\iff 2a + 4b + 64 = 40 \times 2{,}8 = 112$$
$$\iff 2a + 4b = 112 - 64 = 48$$
Chia cả hai vế cho 2:
$$a + 2b = 24 \quad (2)$$

Trừ phương trình $(2)$ cho phương trình $(1)$:
$$(a + 2b) - (a + b) = 24 - 16 \implies b = 8$$
Thay $b = 8$ vào $(1)$:
$$a + 8 = 16 \implies a = 8$$
Vậy các tần số còn thiếu là $a = 8$ và $b = 8$.

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG BẢNG & BIỂU ĐỒ TẦN SỐ TRONG ĐỜI SỐNG
 ┌────────────────────────────────────────────────────────┐
 │ 1. Khoa học Dữ liệu (AI & Machine Learning): Histogram │
 │ 2. Bán lẻ & Chuỗi cung ứng: Quản lý kích thước tồn kho │
 │ 3. Dịch tễ học Y tế: Biểu đồ số ca nhiễm theo độ tuổi  │
 │ 4. Kiểm soát chất lượng công nghiệp (Six Sigma / QA)  │
 │ 5. Viễn thông: Giám sát lưu lượng truy cập mạng theo giờ│
 └────────────────────────────────────────────────────────┘
```

### 1. Trí tuệ Nhân tạo & Xử lý Ảnh số (Image Histogram)
Trong máy ảnh kỹ thuật số và phần mềm chỉnh ảnh (Photoshop), **Biểu đồ tần số sắc độ (Histogram)** là công cụ tối quan trọng:
- Trục ngang biểu thị $256$ mức độ sáng từ đen tuyền ($0$) đến trắng tinh ($255$).
- Trục đứng biểu thị tần số (số lượng pixel) đạt mức sáng đó.
Nhiếp ảnh gia chỉ cần nhìn vào biểu đồ tần số là biết ngay bức ảnh chụp có bị "cháy sáng" (tần số dồn quá nhiều về phía 255) hay bị "thiếu sáng" (tần số dồn về phía 0) để điều chỉnh khẩu độ máy ảnh chuẩn xác!

### 2. Quản lý Chuỗi Cung ứng và Bán lẻ Thời trang
Một chuỗi cửa hàng giày dép không bao giờ nhập số lượng các cỡ giày (size) bằng nhau.
Dựa vào bảng tần số bán hàng thực tế: Size 39 và 40 có tần số mua chiếm tới $65\%$ (Mốt của mẫu), trong khi Size 36 và 44 có tần số chỉ chiếm dưới $3\%$.
Nhờ biểu đồ tần số, các nhà quản lý phân bổ ngân sách sản xuất tập trung vào cỡ giày có tần số cao nhất, giảm thiểu $80\%$ nguy cơ tồn kho ứ đọng vốn.

### 3. Dịch tễ học Y tế Công cộng: Nhận diện Nhóm Nguy cơ
Khi một đợt dịch cúm mùa hoặc sốt xuất huyết bùng phát, các chuyên gia y tế lập tức vẽ biểu đồ tần số số ca nhiễm theo từng nhóm tuổi.
Nếu biểu đồ cho thấy cột tần số của trẻ em dưới 5 tuổi và người già trên 65 tuổi cao đột biến, Bộ Y tế sẽ ban hành ngay hướng dẫn ưu tiên tiêm chủng vaccine cho hai nhóm đối tượng này nhằm hạn chế tối đa nguy cơ chuyển nặng và quá tải bệnh viện.

### 4. Kiểm soát Chất lượng Sản xuất Công nghiệp (QC / QA)
Trong dây chuyền sản xuất vi mạch bán dẫn hoặc lon nước ngọt tự động:
Cứ mỗi 1000 sản phẩm, cảm biến tự động cân khối lượng và vẽ biểu đồ tần số khối lượng.
Nếu biểu đồ có dạng hình chuông cân đối (phân phối chuẩn) quanh khối lượng chuẩn $330\text{ ml}$, dây chuyền đạt chuẩn. Nếu cột tần số bị lệch sang trái hoặc sang phải, hệ thống cảnh báo van chiết rót đang bị nghẹt hoặc rò rỉ để kỹ sư bảo trì can thiệp ngay lập tức.

### 5. Viễn thông & Đám mây: Tải lưu lượng Internet theo Giờ
Nhà mạng viễn thông phân tích tần số số lượng cuộc gọi và dữ liệu 5G sử dụng trong 24 giờ của một ngày.
Biểu đồ đoạn thẳng cho thấy hai đỉnh tần số cao điểm (Peak hours) vào lúc $11\text{h}30 - 13\text{h}00$ (nghỉ trưa) và $20\text{h}00 - 22\text{h}30$ (buổi tối). Dựa vào đó, trung tâm điều hành mạng điều tiết băng thông tự động để không người dùng nào bị giật lag khi xem video trực tuyến.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Tần số của một giá trị trong mẫu số liệu thống kê là:",
  "options": [
    "A. Giá trị lớn nhất trong mẫu dữ liệu",
    "B. Giá trị trung bình của toàn bộ mẫu",
    "C. Số lần xuất hiện của giá trị đó trong mẫu dữ liệu",
    "D. Tỉ số giữa giá trị đó và cỡ mẫu"
  ],
  "correct": 2,
  "explanation": "Theo định nghĩa, tần số của một giá trị là số lần xuất hiện của giá trị đó trong mẫu dữ liệu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tổng tất cả các tần số trong một bảng tần số luôn bằng:",
  "options": [
    "A. Giá trị trung bình",
    "B. Cỡ mẫu N (tổng số đối tượng điều tra)",
    "C. Mốt của mẫu số liệu",
    "D. Số lượng các giá trị khác nhau k"
  ],
  "correct": 1,
  "explanation": "Tổng của tất cả các tần số luôn bằng cỡ mẫu N: $m_1 + m_2 + \\dots + m_k = N$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho mẫu số liệu: 3, 5, 5, 6, 7, 5, 8, 5, 9. Tần số của giá trị 5 là:",
  "options": [
    "A. 3",
    "B. 4",
    "C. 5",
    "D. 9"
  ],
  "correct": 1,
  "explanation": "Giá trị 5 xuất hiện đúng 4 lần trong dãy số liệu, nên tần số của nó là 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Mốt của một mẫu số liệu thống kê là:",
  "options": [
    "A. Giá trị có độ lớn lớn nhất",
    "B. Giá trị có tần số xuất hiện lớn nhất",
    "C. Giá trị nằm chính giữa mẫu số liệu",
    "D. Giá trị xuất hiện đầu tiên"
  ],
  "correct": 1,
  "explanation": "Mốt ($M_o$) là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong một bảng tần số, các giá trị khác nhau của dấu hiệu được thống kê theo thứ tự:",
  "options": [
    "A. Ngẫu nhiên không theo quy tắc nào",
    "B. Xếp theo thứ tự tăng dần (hoặc giảm dần)",
    "C. Xếp theo thứ tự bảng chữ cái",
    "D. Xếp theo tần số từ lớn đến bé"
  ],
  "correct": 1,
  "explanation": "Các giá trị số thường được sắp xếp theo thứ tự tăng dần để thuận tiện theo dõi và vẽ biểu đồ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Trên biểu đồ tần số dạng cột, chiều cao của mỗi cột biểu thị đại lượng nào?",
  "options": [
    "A. Cỡ mẫu N",
    "B. Giá trị của dữ liệu",
    "C. Tần số của giá trị tương ứng",
    "D. Số thứ tự của cột"
  ],
  "correct": 2,
  "explanation": "Chiều cao của mỗi cột trong biểu đồ cột tương ứng với tần số của giá trị đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một biểu đồ cột thể hiện điểm kiểm tra của 40 học sinh có cột điểm 8 cao nhất với vạch số 14. Tỉ lệ học sinh đạt điểm 8 là:",
  "options": [
    "A. 14%",
    "B. 28%",
    "C. 35%",
    "D. 40%"
  ],
  "correct": 2,
  "explanation": "Tỉ lệ phần trăm học sinh đạt điểm 8: $\\frac{14}{40} \\times 100\\% = 35\\%$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Khi nào người ta thường ưu tiên vẽ biểu đồ tần số dạng đoạn thẳng thay vì biểu đồ cột?",
  "options": [
    "A. Khi số lượng đối tượng điều tra quá ít",
    "B. Khi muốn theo dõi xu hướng tăng giảm, biến động liên tục theo thứ tự",
    "C. Khi tất cả các tần số đều bằng nhau",
    "D. Khi dữ liệu là các chữ cái không có thứ tự"
  ],
  "correct": 1,
  "explanation": "Biểu đồ đoạn thẳng thích hợp nhất để quan sát xu hướng biến động tăng giảm theo một tiến trình có thứ tự."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho bảng tần số: Giá trị 2 có tần số 3; giá trị 4 có tần số 5; giá trị 6 có tần số 2. Số trung bình cộng của mẫu số liệu là:",
  "options": [
    "A. 3,8",
    "B. 4,0",
    "C. 4,2",
    "D. 4,5"
  ],
  "correct": 0,
  "explanation": "$\\bar{x} = \\frac{(2 \\times 3) + (4 \\times 5) + (6 \\times 2)}{3 + 5 + 2} = \\frac{6 + 20 + 12}{10} = \\frac{38}{10} = 3{,}8$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Một mẫu số liệu có cỡ mẫu $N = 50$, gồm 4 giá trị với các tần số là $12, 18, x, 6$. Giá trị của tần số $x$ là:",
  "options": [
    "A. 10",
    "B. 14",
    "C. 16",
    "D. 20"
  ],
  "correct": 1,
  "explanation": "Tổng các tần số bằng cỡ mẫu: $12 + 18 + x + 6 = 50 \\iff 36 + x = 50 \\implies x = 14$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Tối ưu Kho Hàng Áo Phông Đồng Phục
Đoàn trường dự định may áo phông đồng phục cho $200$ học sinh khối 9.
Một mẫu khảo sát ngẫu nhiên trên $40$ học sinh cho kết quả kích cỡ áo (Size) như sau:
- Size S: $6$ học sinh.
- Size M: $16$ học sinh.
- Size L: $12$ học sinh.
- Size XL: $6$ học sinh.
1. Hãy lập bảng tần số và xác định Mốt của kích cỡ áo trong mẫu khảo sát.
2. Dựa vào tỉ lệ của mẫu điều tra, hãy ước tính số lượng áo mỗi Size mà nhà trường cần đặt xưởng may cho toàn bộ $200$ học sinh khối 9.

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Bảng tần số mẫu khảo sát ($N = 40$):
>    - Size S: $m = 6$.
>    - Size M: $m = 16$.
>    - Size L: $m = 12$.
>    - Size XL: $m = 6$.
>    Mốt của mẫu là **Size M** ($M_o = \text{Size M}$) vì có tần số xuất hiện lớn nhất là $16$.
> 
> 2. Tính số lượng áo cần may cho $200$ học sinh:
>    Vì $200$ học sinh gấp $5$ lần mẫu khảo sát ($200 : 40 = 5$ lần):
>    - Số áo Size S: $6 \times 5 = 30\text{ áo}$.
>    - Số áo Size M: $16 \times 5 = 80\text{ áo}$.
>    - Số áo Size L: $12 \times 5 = 60\text{ áo}$.
>    - Số áo Size XL: $6 \times 5 = 30\text{ áo}$.
>    *(Tổng cộng: $30 + 80 + 60 + 30 = 200\text{ áo}$).*

---

### Bài tập Tự luyện

**Bài 1:** Điều tra số giờ sử dụng điện thoại thông minh mỗi ngày của $20$ học sinh ghi nhận được:
$$2, 3, 1, 2, 4, 3, 2, 5, 3, 2, 1, 2, 3, 4, 2, 3, 2, 1, 3, 4$$
a) Hãy lập bảng tần số của mẫu số liệu trên.
b) Vẽ biểu đồ tần số dạng cột.
c) Tính số giờ sử dụng điện thoại trung bình mỗi ngày của nhóm học sinh.

**Bài 2:** Một thư viện trường học theo dõi số lượt học sinh mượn sách mỗi ngày trong 2 tuần (10 ngày làm việc) thu được biểu đồ đoạn thẳng với các tọa độ $(x; m)$ lần lượt là:
$(15; 1), (20; 2), (25; 4), (30; 2), (35; 1)$.
a) Lập bảng tần số từ biểu đồ trên.
b) Trong 10 ngày đó, có bao nhiêu ngày có số lượt mượn sách từ 25 lượt trở lên?
