---
title: 'Toán 9 Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ ghép nhóm - Xử lý Dữ liệu lớn'
description: 'Lý thuyết toàn diện Bài 24 Toán 9: Ghép nhóm số liệu, nửa khoảng [a; b), giá trị đại diện, bảng tần số và tần số tương đối ghép nhóm, biểu đồ cột liền kề (Histogram), đa giác tần số, widget mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Thống kê 9
  - Dữ liệu ghép nhóm
  - Bảng tần số ghép nhóm
  - Histogram
  - Biểu đồ cột liền kề
  - Kết nối tri thức
grade: 9
---

# Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ ghép nhóm

Trong các bài học trước, chúng ta đã làm quen với việc lập bảng và vẽ biểu đồ cho các dữ liệu rời rạc có ít giá trị khác biệt (như số con trong gia đình, điểm kiểm tra từ $1$ đến $10$). 

Tuy nhiên, trong thế giới thực tế và các bài toán phân tích dữ liệu lớn (Big Data):
- Chiều cao của $1\,000$ học sinh có thể nhận hàng trăm giá trị lẻ như $162,4\text{ cm}; 162,5\text{ cm}; 162,8\text{ cm}\dots$
- Thời gian tải trang web của hàng triệu người dùng nhận các giá trị từ $0,12\text{ giây}$ đến $5,43\text{ giây}$.
- Thu nhập hàng tháng của người lao động trong một thành phố trải rộng từ vài triệu đến hàng trăm triệu đồng.

Nếu liệt kê từng giá trị lẻ tẻ, bảng thống kê sẽ dài vô tận và hoàn toàn mất đi tính khái quát! 

Giải pháp đột phá của Thống kê học là: **Ghép nhóm số liệu vào các khoảng/nửa khoảng liên tiếp**. Từ đó, các công cụ biểu diễn hiện đại như **Biểu đồ cột liền kề (Histogram)** và **Đa giác tần số (Frequency Polygon)** ra đời, mở ra bức tranh phân phối toàn cảnh của toàn bộ tập dữ liệu.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: DỮ LIỆU GHÉP NHÓM & BIỂU ĐỒ HISTOGRAM</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Nhóm số liệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhóm số liệu thường là nửa khoảng $[a; b)$ với $a \le x < b$.<br>• <strong>Độ dài nhóm:</strong> $L = b - a$.<br>• <strong>Giá trị đại diện:</strong> $c = \frac{a+b}{2}$ (trung điểm của khoảng).<br>• Các nhóm phải liên tiếp, không giao nhau và bao phủ hết dữ liệu.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Bảng Tần số & Tần số tương đối ghép nhóm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tần số nhóm $m_i$: Số phần tử thuộc nhóm $[a_i; b_i)$.<br>• Tần số tương đối nhóm: $f_i = \frac{m_i}{N} \times 100\%$.<br>• Tổng các tần số $\sum m_i = N$; tổng các tỉ lệ $\sum f_i = 100\%$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biểu đồ Cột liền kề (Histogram)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Các cột hình chữ nhật <strong>xếp sát liền nhau không có khoảng cách</strong>.<br>• Đáy mỗi cột là đoạn biểu diễn khoảng $[a; b)$ trên trục hoành.<br>• Chiều cao tương ứng với tần số $m_i$ hoặc tần số tương đối $f_i\%$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu đồ Đoạn thẳng ghép nhóm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hoành độ mỗi đỉnh là <strong>giá trị đại diện</strong> $c_i = \frac{a_i+b_i}{2}$.<br>• Tung độ là tần số $m_i$ (hoặc $f_i\%$).<br>• Nối các đỉnh liên tiếp để mô phỏng đường cong mật độ phân phối chuẩn.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Xác định giá trị đại diện:** Cho nhóm số liệu $[40; 50)$. Giá trị đại diện của nhóm này là bao nhiêu?
2. **Kiểm tra thuộc nhóm:** Giá trị $x = 60$ có thuộc nhóm $[50; 60)$ hay nhóm $[60; 70)$?
3. **Độ dài nhóm:** Các nhóm số liệu là $[150; 155), [155; 160), [160; 165)$. Độ dài của mỗi nhóm là bao nhiêu?
4. **Đặc điểm biểu đồ:** Điểm khác biệt lớn nhất giữa biểu đồ cột thông thường (rời rạc) và biểu đồ cột ghép nhóm (Histogram) là gì?
5. **Tính tỉ lệ nhóm:** Một lớp có $40$ học sinh, nhóm đạt điểm $[8; 10)$ có $12$ bạn. Tần số tương đối của nhóm điểm này là bao nhiêu phần trăm?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: $c = \frac{40 + 50}{2} = 45$.
> - Câu 2: Nhóm $[50; 60)$ gồm các giá trị $50 \le x < 60$ (không chứa 60). Nhóm $[60; 70)$ gồm $60 \le x < 70$. Vậy $x = 60$ thuộc **nhóm $[60; 70)$**!
> - Câu 3: Độ dài nhóm $L = 155 - 150 = 5$.
> - Câu 4: Các cột trong Histogram **nằm sát liền kề nhau** (không có khe hở) vì dữ liệu liên tục.
> - Câu 5: $f = \frac{12}{40} \times 100\% = \frac{3}{10} \times 100\% = 30\%$.

---

## Lý thuyết trọng tâm

### 1. Thu thập và Ghép nhóm số liệu

Khi mẫu dữ liệu gồm nhiều giá trị khác nhau, hoặc dữ liệu thuộc loại liên tục (chiều dài, khối lượng, thời gian, nhiệt độ...), ta nhóm các số liệu lại thành từng khoảng/nửa khoảng:

> [!NOTE]
> **Quy ước nhóm số liệu:**
> - Mỗi nhóm thường được viết dưới dạng nửa khoảng $[a; b)$ gồm tất cả các giá trị $x$ thỏa mãn:
>   $$a \le x < b$$
>   *(Nhóm cuối cùng có thể lấy đoạn $[a; b]$ để bao hàm giá trị lớn nhất).*
> - **Độ dài của nhóm $[a; b)$** là hiệu giữa đầu mút phải và đầu mút trái:
>   $$L = b - a$$
>   *Người ta thường chọn các nhóm có độ dài bằng nhau.*
> - **Giá trị đại diện của nhóm $[a; b)$** là trung điểm của hai đầu mút:
>   $$c = \frac{a + b}{2}$$

---

### 2. Bảng tần số và Tần số tương đối ghép nhóm

Giả sử mẫu dữ liệu có cỡ mẫu $N$ được chia thành $k$ nhóm liên tiếp: $[a_1; b_1), [a_2; b_2), \dots, [a_k; b_k)$.

- **Tần số của một nhóm ($m_i$):** Là số lượng phần tử của mẫu thuộc nhóm đó.
  $$m_1 + m_2 + \dots + m_k = N$$
- **Tần số tương đối của một nhóm ($f_i$):** Là tỉ số giữa tần số của nhóm đó với cỡ mẫu $N$:
  $$f_i = \frac{m_i}{N} \times 100\%$$
  $$f_1 + f_2 + \dots + f_k = 100\%$$

**Bảng mẫu hoàn chỉnh gồm cả Tần số và Tần số tương đối:**

| Nhóm số liệu | Giá trị đại diện ($c$) | Tần số ($m$) | Tần số tương đối ($f\%$) |
| :---: | :---: | :---: | :---: |
| $[a_1; b_1)$ | $c_1 = \frac{a_1+b_1}{2}$ | $m_1$ | $f_1 = \frac{m_1}{N} \times 100\%$ |
| $[a_2; b_2)$ | $c_2 = \frac{a_2+b_2}{2}$ | $m_2$ | $f_2 = \frac{m_2}{N} \times 100\%$ |
| $\dots$ | $\dots$ | $\dots$ | $\dots$ |
| $[a_k; b_k)$ | $c_k = \frac{a_k+b_k}{2}$ | $m_k$ | $f_k = \frac{m_k}{N} \times 100\%$ |
| **Tổng cộng** | — | **$N$** | **$100\%$** |

---

### 3. Biểu đồ tần số ghép nhóm dạng cột liền kề (Histogram)

Biểu đồ Histogram là công cụ số 1 trong Thống kê mô tả:
- **Trục hoành:** Biểu thị các nhóm số liệu. Các mốc chia trên trục hoành chính là các điểm mút $a_1, b_1, b_2, \dots, b_k$.
- **Trục tung:** Biểu thị tần số ($m$) hoặc tần số tương đối ($f\%$).
- **Các cột hình chữ nhật:** 
  + Mỗi cột ứng với một nhóm số liệu, có chiều rộng bằng độ dài nhóm $b_i - a_i$.
  + Các cột **xếp sát nhau, không có khoảng hở giữa hai cột liên tiếp**.
  + Chiều cao của mỗi cột bằng tần số (hoặc tần số tương đối) của nhóm đó.

---

### 4. Biểu đồ tần số ghép nhóm dạng đoạn thẳng (Đa giác tần số)

Để quan sát dáng điệu phân phối trơn tru hơn (như hình chuông Gauss chuẩn):
1. Mỗi nhóm $[a_i; b_i)$ có tần số $m_i$ được biểu diễn bởi điểm:
   $$M_i(c_i; m_i) \quad \text{với } c_i = \frac{a_i+b_i}{2}$$
2. Nối các điểm $M_1, M_2, \dots, M_k$ liên tiếp bằng các đoạn thẳng.
3. Ta thu được **Biểu đồ đoạn thẳng ghép nhóm** (hay còn gọi là **Đa giác tần số - Frequency Polygon**).

---

## Phòng thí nghiệm Tương tác: Histogram & Đa giác Tần số Trực quan

Trải nghiệm trực quan hóa phân phối điểm thi / thời gian chạy với khả năng chuyển đổi tức thì giữa **Biểu đồ cột liền kề (Histogram)** và **Đa giác tần số (Đoạn thẳng)**:

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: BIỂU ĐỒ HISTOGRAM VÀ ĐA GIÁC TẦN SỐ GHÉP NHÓM</h3>
  <p style="text-align: center; color: #64748b; font-size: 0.95em;">Điều chỉnh tần số số học sinh trong từng khoảng điểm để quan sát dáng điệu đồ thị:</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 16px;">
    <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
      <span style="font-size: 0.8em; font-weight: bold; color: #475569;">[0; 2)</span>
      <input type="number" id="g1" value="3" min="0" max="50" style="width: 100%; padding: 4px; border: 1px solid #94a3b8; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="renderHistogram()">
    </div>
    <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
      <span style="font-size: 0.8em; font-weight: bold; color: #475569;">[2; 4)</span>
      <input type="number" id="g2" value="7" min="0" max="50" style="width: 100%; padding: 4px; border: 1px solid #94a3b8; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="renderHistogram()">
    </div>
    <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
      <span style="font-size: 0.8em; font-weight: bold; color: #475569;">[4; 6)</span>
      <input type="number" id="g3" value="18" min="0" max="50" style="width: 100%; padding: 4px; border: 1px solid #94a3b8; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="renderHistogram()">
    </div>
    <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
      <span style="font-size: 0.8em; font-weight: bold; color: #475569;">[6; 8)</span>
      <input type="number" id="g4" value="22" min="0" max="50" style="width: 100%; padding: 4px; border: 1px solid #94a3b8; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="renderHistogram()">
    </div>
    <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
      <span style="font-size: 0.8em; font-weight: bold; color: #475569;">[8; 10]</span>
      <input type="number" id="g5" value="10" min="0" max="50" style="width: 100%; padding: 4px; border: 1px solid #94a3b8; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="renderHistogram()">
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 20px;">
    <button id="btnHist" onclick="setHistMode('hist')" style="padding: 6px 16px; background: #2563eb; color: #ffffff; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 500;">Biểu đồ cột liền kề (Histogram)</button>
    <button id="btnPoly" onclick="setHistMode('poly')" style="padding: 6px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 500;">Đa giác tần số (Line/Polygon)</button>
    <button id="btnBoth" onclick="setHistMode('both')" style="padding: 6px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 500;">Kết hợp cả hai</button>
  </div>

  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; display: flex; justify-content: center;">
    <svg id="histSvg" width="540" height="280" viewBox="0 0 540 280" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div style="margin-top: 16px; overflow-x: auto;">
    <table id="histTable" style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em;">
      <thead>
        <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
          <th style="padding: 6px;">Khoảng điểm</th>
          <th style="padding: 6px;">Giá trị đại diện ($c$)</th>
          <th style="padding: 6px;">Tần số ($m$)</th>
          <th style="padding: 6px;">Tần số tương đối ($f$)</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</div>

<script>
let histMode = 'both';

function setHistMode(m) {
  histMode = m;
  document.getElementById('btnHist').style.background = (m === 'hist') ? '#2563eb' : '#e2e8f0';
  document.getElementById('btnHist').style.color = (m === 'hist') ? '#fff' : '#1e293b';
  document.getElementById('btnPoly').style.background = (m === 'poly') ? '#2563eb' : '#e2e8f0';
  document.getElementById('btnPoly').style.color = (m === 'poly') ? '#fff' : '#1e293b';
  document.getElementById('btnBoth').style.background = (m === 'both') ? '#2563eb' : '#e2e8f0';
  document.getElementById('btnBoth').style.color = (m === 'both') ? '#fff' : '#1e293b';
  renderHistogram();
}

function renderHistogram() {
  const groups = [
    { label: '[0; 2)', low: 0, high: 2, c: 1, m: Math.max(0, parseInt(document.getElementById('g1').value) || 0) },
    { label: '[2; 4)', low: 2, high: 4, c: 3, m: Math.max(0, parseInt(document.getElementById('g2').value) || 0) },
    { label: '[4; 6)', low: 4, high: 6, c: 5, m: Math.max(0, parseInt(document.getElementById('g3').value) || 0) },
    { label: '[6; 8)', low: 6, high: 8, c: 7, m: Math.max(0, parseInt(document.getElementById('g4').value) || 0) },
    { label: '[8; 10]', low: 8, high: 10, c: 9, m: Math.max(0, parseInt(document.getElementById('g5').value) || 0) }
  ];

  const totalN = groups.reduce((acc, g) => acc + g.m, 0);
  const maxM = Math.max(10, ...groups.map(g => g.m));
  const svg = document.getElementById('histSvg');
  svg.innerHTML = '';

  const ox = 50;
  const oy = 230;
  const w = 450;
  const h = 190;
  const colW = w / groups.length;

  // Grid lines
  for (let step = 0; step <= 5; step++) {
    const val = Math.round((maxM / 5) * step);
    const yPos = oy - (val / maxM) * h;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', ox);
    line.setAttribute('y1', yPos);
    line.setAttribute('x2', ox + w);
    line.setAttribute('y2', yPos);
    line.setAttribute('stroke', '#e2e8f0');
    line.setAttribute('stroke-dasharray', '3,3');
    svg.appendChild(line);

    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', ox - 8);
    txt.setAttribute('y', yPos + 4);
    txt.setAttribute('font-size', '11');
    txt.setAttribute('fill', '#64748b');
    txt.setAttribute('text-anchor', 'end');
    txt.textContent = val;
    svg.appendChild(txt);
  }

  // Axes
  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.setAttribute('x1', ox);
  axisX.setAttribute('y1', oy);
  axisX.setAttribute('x2', ox + w + 15);
  axisX.setAttribute('y2', oy);
  axisX.setAttribute('stroke', '#334155');
  axisX.setAttribute('stroke-width', '2');
  svg.appendChild(axisX);

  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.setAttribute('x1', ox);
  axisY.setAttribute('y1', oy);
  axisY.setAttribute('x2', ox);
  axisY.setAttribute('y2', oy - h - 15);
  axisY.setAttribute('stroke', '#334155');
  axisY.setAttribute('stroke-width', '2');
  svg.appendChild(axisY);

  // Draw Bars (Histogram)
  const pts = [];
  groups.forEach((g, idx) => {
    const barX = ox + idx * colW;
    const barH = (g.m / maxM) * h;
    const barY = oy - barH;

    if (histMode === 'hist' || histMode === 'both') {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', barX);
      rect.setAttribute('y', barY);
      rect.setAttribute('width', colW);
      rect.setAttribute('height', barH);
      rect.setAttribute('fill', '#93c5fd');
      rect.setAttribute('stroke', '#2563eb');
      rect.setAttribute('stroke-width', '1.5');
      svg.appendChild(rect);

      // Label on top of bar
      if (g.m > 0) {
        const barTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        barTxt.setAttribute('x', barX + colW / 2);
        barTxt.setAttribute('y', barY - 6);
        barTxt.setAttribute('font-size', '11');
        barTxt.setAttribute('font-weight', 'bold');
        barTxt.setAttribute('fill', '#1d4ed8');
        barTxt.setAttribute('text-anchor', 'middle');
        barTxt.textContent = g.m;
        svg.appendChild(barTxt);
      }
    }

    // Midpoint for polygon
    const midX = barX + colW / 2;
    pts.push({ x: midX, y: barY, m: g.m });

    // Tick labels on X axis
    const tickTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tickTxt.setAttribute('x', barX + colW / 2);
    tickTxt.setAttribute('y', oy + 18);
    tickTxt.setAttribute('font-size', '11');
    tickTxt.setAttribute('fill', '#334155');
    tickTxt.setAttribute('text-anchor', 'middle');
    tickTxt.textContent = g.label;
    svg.appendChild(tickTxt);
  });

  // Draw Polygon / Line
  if (histMode === 'poly' || histMode === 'both') {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L ${pts[i].x} ${pts[i].y}`;
    }
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#dc2626');
    path.setAttribute('stroke-width', '2.5');
    svg.appendChild(path);

    pts.forEach(p => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', p.x);
      circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '4');
      circle.setAttribute('fill', '#ffffff');
      circle.setAttribute('stroke', '#dc2626');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    });
  }

  // Update table
  const tbody = document.querySelector('#histTable tbody');
  tbody.innerHTML = '';
  groups.forEach(g => {
    const pct = totalN > 0 ? ((g.m / totalN) * 100).toFixed(1) : '0.0';
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid #e2e8f0';
    tr.innerHTML = `
      <td style="padding: 6px; font-weight: 500;">${g.label}</td>
      <td style="padding: 6px; color: #64748b;">${g.c}</td>
      <td style="padding: 6px; font-weight: bold; color: #2563eb;">${g.m}</td>
      <td style="padding: 6px; font-weight: bold; color: #059669;">${pct}%</td>
    `;
    tbody.appendChild(tr);
  });

  const sumTr = document.createElement('tr');
  sumTr.style.background = '#f8fafc';
  sumTr.style.fontWeight = 'bold';
  sumTr.innerHTML = `
    <td style="padding: 6px;">Tổng cộng</td>
    <td style="padding: 6px;">—</td>
    <td style="padding: 6px; color: #2563eb;">N = ${totalN}</td>
    <td style="padding: 6px; color: #059669;">100%</td>
  `;
  tbody.appendChild(sumTr);
}

window.addEventListener('DOMContentLoaded', renderHistogram);
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Chuyển dữ liệu thô sang Bảng tần số & Tần số tương đối ghép nhóm

**Phương pháp giải:**
1. Xác định giá trị nhỏ nhất ($x_{\min}$) và lớn nhất ($x_{\max}$) trong mẫu dữ liệu.
2. Xác định các nhóm nửa khoảng $[a_i; b_i)$ liên tiếp sao cho bao phủ toàn bộ khoảng $[x_{\min}; x_{\max}]$ và có độ dài bằng nhau $L = b_i - a_i$.
3. Đếm cẩn thận số lượng số liệu rơi vào từng nửa khoảng $[a_i; b_i)$ (chú ý: nếu giá trị bằng đúng mút phải $b_i$ thì nó thuộc về nhóm kế tiếp).
4. Tính tần số tương đối của từng nhóm: $f_i = \frac{m_i}{N} \times 100\%$.
5. Lập bảng đầy đủ các cột: Nhóm, Giá trị đại diện, Tần số, Tần số tương đối.

---

#### Ví dụ 1
Thời gian (đơn vị: phút) hoàn thành một bài kiểm tra trắc nghiệm Tin học của $25$ học sinh được ghi nhận như sau:
$$12, 14, 15, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 28, 29, 31, 32, 33, 34, 34, 35, 36, 38, 39, 40$$

Hãy lập bảng tần số và tần số tương đối ghép nhóm cho mẫu số liệu trên với $3$ nhóm: $[10; 20), [20; 30), [30; 40]$.

**Lời giải chi tiết:**
- Cỡ mẫu $N = 25$.
- Phân loại số liệu vào từng nhóm:
  + Nhóm $[10; 20)$: Gồm các giá trị $12, 14, 15, 18, 19 \implies$ Tần số $m_1 = 5$.
    Giá trị đại diện: $c_1 = \frac{10 + 20}{2} = 15$.
    Tần số tương đối: $f_1 = \frac{5}{25} \times 100\% = 20\%$.
  + Nhóm $[20; 30)$: Gồm các giá trị $21, 22, 23, 24, 25, 26, 27, 28, 28, 29 \implies$ Tần số $m_2 = 10$.
    Giá trị đại diện: $c_2 = \frac{20 + 30}{2} = 25$.
    Tần số tương đối: $f_2 = \frac{10}{25} \times 100\% = 40\%$.
  + Nhóm $[30; 40]$: Gồm các giá trị $31, 32, 33, 34, 34, 35, 36, 38, 39, 40 \implies$ Tần số $m_3 = 10$.
    Giá trị đại diện: $c_3 = \frac{30 + 40}{2} = 35$.
    Tần số tương đối: $f_3 = \frac{10}{25} \times 100\% = 40\%$.

Ta có bảng tần số và tần số tương đối ghép nhóm:

| Nhóm thời gian (phút) | Giá trị đại diện ($c$) | Tần số ($m$) | Tần số tương đối ($f\%$) |
| :---: | :---: | :---: | :---: |
| $[10; 20)$ | $15$ | $5$ | $20\%$ |
| $[20; 30)$ | $25$ | $10$ | $40\%$ |
| $[30; 40]$ | $35$ | $10$ | $40\%$ |
| **Tổng cộng** | — | **$25$** | **$100\%$** |

---

### Dạng 2: Ước lượng Số trung bình cộng của mẫu số liệu ghép nhóm

**Phương pháp giải:**
Khi dữ liệu đã bị ghép nhóm, ta không còn biết chính xác từng giá trị ban đầu. Để tính số trung bình cộng ước lượng ($\bar{x}$), ta thay thế tất cả các giá trị trong mỗi nhóm bằng **giá trị đại diện** $c_i = \frac{a_i+b_i}{2}$ của nhóm đó:
$$\bar{x} \approx \frac{c_1 m_1 + c_2 m_2 + \dots + c_k m_k}{N} = c_1 f_1 + c_2 f_2 + \dots + c_k f_k$$

---

#### Ví dụ 2
Bảng sau cho biết chiều cao (cm) của $50$ vận động viên điền kinh trẻ:

| Chiều cao (cm) | $[160; 165)$ | $[165; 170)$ | $[170; 175)$ | $[175; 180)$ | $[180; 185]$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số VĐV ($m$)** | $6$ | $14$ | $18$ | $8$ | $4$ |

Hãy ước lượng chiều cao trung bình của $50$ vận động viên này.

**Lời giải chi tiết:**
- Xác định giá trị đại diện của từng nhóm:
  + $c_1 = \frac{160 + 165}{2} = 162,5$
  + $c_2 = \frac{165 + 170}{2} = 167,5$
  + $c_3 = \frac{170 + 175}{2} = 172,5$
  + $c_4 = \frac{175 + 180}{2} = 177,5$
  + $c_5 = \frac{180 + 185}{2} = 182,5$
- Cỡ mẫu $N = 6 + 14 + 18 + 8 + 4 = 50$.
- Chiều cao trung bình ước lượng là:
  $$\bar{x} \approx \frac{162,5 \times 6 + 167,5 \times 14 + 172,5 \times 18 + 177,5 \times 8 + 182,5 \times 4}{50}$$
  $$\bar{x} \approx \frac{975 + 2345 + 3105 + 1420 + 730}{50} = \frac{8575}{50} = 171,5 \text{ (cm)}$$
Vậy chiều cao trung bình ước lượng của đoàn vận động viên là $171,5\text{ cm}$.

---

### Dạng 3: Vẽ và đọc hiểu Biểu đồ Histogram (Cột liền kề)

**Phương pháp giải:**
1. Đọc trục hoành để xác định các mốc ranh giới của các nhóm $[a_i; b_i)$.
2. Đọc trục tung để xác định độ cao (tần số $m_i$ hoặc tần số tương đối $f_i$).
3. Tìm nhóm có cột cao nhất $\implies$ Nhóm có tần số lớn nhất (chứa Mốt).
4. Tính tổng cỡ mẫu $N$ hoặc phần trăm tích lũy trên các khoảng theo yêu cầu đề bài.

---

#### Ví dụ 3
Một biểu đồ cột liền kề thể hiện cước điện thoại di động (nghìn đồng) trong tháng của $80$ hộ gia đình:
- Nhóm $[0; 100)$: cao $16$
- Nhóm $[100; 200)$: cao $32$
- Nhóm $[200; 300)$: cao $20$
- Nhóm $[300; 400)$: cao $12$

a) Lập bảng tần số tương đối ghép nhóm.  
b) Có bao nhiêu phần trăm hộ gia đình chi trả cước điện thoại từ $200$ nghìn đồng trở lên?

**Lời giải chi tiết:**
a) Cỡ mẫu $N = 16 + 32 + 20 + 12 = 80$.
- Tần số tương đối:
  + Nhóm $[0; 100)$: $f_1 = \frac{16}{80} \times 100\% = 20\%$.
  + Nhóm $[100; 200)$: $f_2 = \frac{32}{80} \times 100\% = 40\%$.
  + Nhóm $[200; 300)$: $f_3 = \frac{20}{80} \times 100\% = 25\%$.
  + Nhóm $[300; 400)$: $f_4 = \frac{12}{80} \times 100\% = 15\%$.

Bảng tần số tương đối ghép nhóm:
| Mức cước (nghìn đồng) | $[0; 100)$ | $[100; 200)$ | $[200; 300)$ | $[300; 400)$ | Tổng cộng |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Tỉ lệ ($f\%$)** | $20\%$ | $40\%$ | $25\%$ | $15\%$ | $100\%$ |

b) Số hộ chi trả từ $200$ nghìn đồng trở lên thuộc hai nhóm $[200; 300)$ và $[300; 400)$:
$$f = 25\% + 15\% = 40\%$$
Như vậy có $40\%$ hộ gia đình chi từ $200$ nghìn đồng trở lên cho cước điện thoại hàng tháng.

---

### Dạng 4: Vẽ và phân tích Đa giác tần số (Biểu đồ đoạn thẳng ghép nhóm)

**Phương pháp giải:**
1. Tính giá trị đại diện $c_i = \frac{a_i+b_i}{2}$ cho mỗi nhóm.
2. Vẽ các điểm $(c_i; m_i)$ hoặc $(c_i; f_i)$ trên hệ trục tọa độ.
3. Nối liên tiếp các điểm bằng các đoạn thẳng để tạo thành đa giác tần số.
4. Nhận xét xu hướng tăng, đạt đỉnh, giảm dần và tính đối xứng của phân phối.

---

#### Ví dụ 4
Khảo sát thời gian tự học ở nhà mỗi ngày của $60$ học sinh lớp 9:
- Nhóm $[0; 1)$ giờ: $6$ học sinh.
- Nhóm $[1; 2)$ giờ: $18$ học sinh.
- Nhóm $[2; 3)$ giờ: $24$ học sinh.
- Nhóm $[3; 4]$ giờ: $12$ học sinh.

a) Xác định tọa độ các đỉnh của đa giác tần số.  
b) Đỉnh cao nhất của đồ thị rơi vào khoảng thời gian tự học nào?

**Lời giải chi tiết:**
a) Xác định các giá trị đại diện:
- Nhóm $[0; 1)$: $c_1 = 0,5 \implies A(0,5; 6)$.
- Nhóm $[1; 2)$: $c_2 = 1,5 \implies B(1,5; 18)$.
- Nhóm $[2; 3)$: $c_3 = 2,5 \implies C(2,5; 24)$.
- Nhóm $[3; 4]$: $c_4 = 3,5 \implies D(3,5; 12)$.
Nối lần lượt các đoạn thẳng $AB, BC, CD$ ta được đa giác tần số.

b) Điểm cao nhất là $C(2,5; 24)$ với tung độ tần số là $24$. Như vậy, đỉnh phân phối tập trung vào khoảng thời gian tự học từ $2$ đến $3$ giờ mỗi ngày.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Giám sát Hiệu năng Máy chủ & Website (Latency Distribution):** Các kỹ sư tại Google và Netflix giám sát độ trễ phản hồi (Response Time) theo các nhóm $[0; 50\text{ms}), [50; 100\text{ms}), [100; 200\text{ms})\dots$ dưới dạng biểu đồ Histogram để đảm bảo $99\%$ người dùng không bị giật lag (SLA - Service Level Agreement).
2. **Xử lý Ảnh Số & Thị giác Máy tính (Image Histogram):** Trong Photoshop hay camera điện thoại, biểu đồ Histogram ánh sáng biểu diễn phân phối độ sáng từ $0$ (đen hoàn toàn) đến $255$ (trắng tinh), giúp thuật toán AI tự động cân bằng sáng và dải tương phản động (HDR).
3. **Phân tích Phổ Tuổi Dân số (Demographic Pyramids):** Tổng cục Thống kê chia dân số thành các nhóm tuổi $[0; 5), [5; 10), [10; 15)\dots$ để hoạch định chính sách giáo dục, việc làm và an sinh xã hội cho thời kỳ "dân số vàng" hoặc "dân số già".
4. **Phân tích Rủi ro Tín dụng Ngân hàng:** Điểm tín dụng cá nhân (Credit Score từ $300$ đến $850$) được phân nhóm để ngân hàng tự động phê duyệt hạn mức thẻ tín dụng và lãi suất vay qua các mô hình AI chấm điểm tín dụng.
5. **Khí tượng & Năng lượng Tái tạo:** Thống kê tốc độ gió hàng giờ thành các nhóm $[0; 3\text{ m/s}), [3; 6\text{ m/s})\dots$ để chọn vị trí lắp đặt tuabin điện gió đạt hiệu suất phát điện cực đại.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho nhóm số liệu [20; 30). Giá trị đại diện của nhóm này là:",
  "options": [
    "A. 20",
    "B. 30",
    "C. 25",
    "D. 10"
  ],
  "answer": "C. 25",
  "explanation": "Giá trị đại diện c = (20 + 30) / 2 = 25."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Độ dài của nhóm số liệu [120; 150) bằng:",
  "options": [
    "A. 30",
    "B. 135",
    "C. 15",
    "D. 270"
  ],
  "answer": "A. 30",
  "explanation": "Độ dài nhóm L = 150 - 120 = 30."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một mẫu số liệu có giá trị x = 15. Giá trị này thuộc nhóm số liệu nào dưới đây?",
  "options": [
    "A. [5; 15)",
    "B. [15; 25)",
    "C. (15; 25]",
    "D. [0; 10)"
  ],
  "answer": "B. [15; 25)",
  "explanation": "Nửa khoảng [15; 25) chứa các giá trị 15 <= x < 25, do đó x = 15 thuộc nhóm [15; 25)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Điểm khác biệt quan trọng của biểu đồ cột liền kề (Histogram) so với biểu đồ cột thông thường là:",
  "options": [
    "A. Histogram vẽ các cột ngang, biểu đồ thông thường vẽ cột dọc",
    "B. Các cột trong Histogram xếp sát nhau không có khoảng trống vì dữ liệu liên tục",
    "C. Histogram không có trục tọa độ",
    "D. Histogram chỉ dùng cho dữ liệu định tính"
  ],
  "answer": "B. Các cột trong Histogram xếp sát nhau không có khoảng trống vì dữ liệu liên tục",
  "explanation": "Vì các nhóm là các khoảng liên tiếp bao trùm miền số liệu liên tục nên các cột hình chữ nhật tương ứng nằm liền kề sát nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong một biểu đồ Histogram, nếu một nhóm [50; 60) có tần số là 18 trên cỡ mẫu N = 72, thì tần số tương đối của nhóm này là:",
  "options": [
    "A. 18%",
    "B. 20%",
    "C. 25%",
    "D. 30%"
  ],
  "answer": "C. 25%",
  "explanation": "Tần số tương đối f = (18 / 72) * 100% = (1 / 4) * 100% = 25%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Để vẽ đa giác tần số ghép nhóm, mỗi nhóm [a; b) với tần số m được biểu diễn bởi một điểm có tọa độ là:",
  "options": [
    "A. (a; m)",
    "B. (b; m)",
    "C. ((a + b) / 2; m)",
    "D. (b - a; m)"
  ],
  "answer": "C. ((a + b) / 2; m)",
  "explanation": "Hoành độ là giá trị đại diện c = (a + b) / 2 và tung độ là tần số m."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khảo sát cân nặng của 40 quả cam: [100; 120) có 8 quả; [120; 140) có 20 quả; [140; 160] có 12 quả. Khối lượng trung bình ước lượng của 40 quả cam này là:",
  "options": [
    "A. 130 g",
    "B. 132 g",
    "C. 134 g",
    "D. 135 g"
  ],
  "answer": "B. 132 g",
  "explanation": "Giá trị đại diện các nhóm lần lượt là 110, 130, 150. Khối lượng trung bình: x_tb = (110 * 8 + 130 * 20 + 150 * 12) / 40 = (880 + 2600 + 1800) / 40 = 5280 / 40 = 132 g."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho biểu đồ ghép nhóm gồm 5 nhóm với tần số tương đối lần lượt là 15%, 25%, 30%, f4, 10%. Giá trị của f4 là:",
  "options": [
    "A. 15%",
    "B. 20%",
    "C. 25%",
    "D. 10%"
  ],
  "answer": "B. 20%",
  "explanation": "Tổng các tần số tương đối bằng 100%: f4 = 100% - (15% + 25% + 30% + 10%) = 100% - 80% = 20%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khi nào chúng ta nên chuyển mẫu số liệu rời rạc sang dạng số liệu ghép nhóm?",
  "options": [
    "A. Khi mẫu số liệu chỉ có 2 giá trị khác nhau",
    "B. Khi mẫu số liệu có cỡ mẫu rất nhỏ (dưới 5 phần tử)",
    "C. Khi số liệu nhận rất nhiều giá trị khác nhau hoặc là đại lượng biến thiên liên tục",
    "D. Khi tất cả các giá trị đều bằng nhau"
  ],
  "answer": "C. Khi số liệu nhận rất nhiều giá trị khác nhau hoặc là đại lượng biến thiên liên tục",
  "explanation": "Ghép nhóm giúp tóm tắt cô đọng dữ liệu liên tục hoặc dữ liệu có quá nhiều giá trị khác biệt thành bức tranh phân phối rõ ràng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Nhóm chứa mốt trong mẫu số liệu ghép nhóm là nhóm có đặc điểm nào?",
  "options": [
    "A. Nhóm có độ dài lớn nhất",
    "B. Nhóm có tần số lớn nhất",
    "C. Nhóm đầu tiên trong bảng",
    "D. Nhóm ở chính giữa bảng"
  ],
  "answer": "B. Nhóm có tần số lớn nhất",
  "explanation": "Nhóm chứa mốt là nhóm số liệu có tần số xuất hiện cao nhất trong toàn bộ mẫu."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Lập bảng tần số ghép nhóm:** Khảo sát thời gian (phút) đi từ nhà đến trường của $30$ học sinh:
   $$15, 18, 22, 25, 27, 28, 30, 32, 35, 35, 36, 38, 40, 42, 43, 45, 45, 48, 50, 52, 53, 55, 58, 60, 62, 65, 68, 70, 72, 75$$
   Hãy ghép các số liệu trên thành $4$ nhóm: $[15; 30), [30; 45), [45; 60), [60; 75]$. Lập bảng tần số và tần số tương đối ghép nhóm.

2. **Ước lượng số trung bình:** Cho bảng số liệu ghép nhóm về điểm kiểm tra cuối kỳ môn Toán của $100$ học sinh:

| Điểm số | $[4; 6)$ | $[6; 8)$ | $[8; 10]$ |
| :---: | :---: | :---: | :---: |
| **Số học sinh** | $20$ | $50$ | $30$ |

   a) Tính giá trị đại diện của từng nhóm.  
   b) Ước lượng điểm trung bình của $100$ học sinh trên.

---

### Thử thách Thực tế: Tối ưu Hóa Tuyến Xe Buýt Học Đường (Smart School Bus)

**Bối cảnh:** Một trường liên cấp quốc tế khảo sát quãng đường từ nhà đến trường (km) của $200$ học sinh đăng ký đi xe buýt. Dữ liệu được nhóm thành:
- Nhóm 1: $[0; 3\text{ km})$ có $30$ học sinh.
- Nhóm 2: $[3; 6\text{ km})$ có $80$ học sinh.
- Nhóm 3: $[6; 9\text{ km})$ có $60$ học sinh.
- Nhóm 4: $[9; 12\text{ km}]$ có $30$ học sinh.

**Yêu cầu:**
1. Lập bảng tần số tương đối ghép nhóm và vẽ biểu đồ Histogram tương ứng.
2. Nhà trường dự kiến áp dụng chính sách: Học sinh có quãng đường từ $6\text{ km}$ trở lên sẽ được ưu tiên bố trí xe buýt tuyến nhanh (không dừng đón trung gian). Hỏi có bao nhiêu phần trăm học sinh thuộc diện ưu tiên này?
3. Ước lượng tổng quãng đường di chuyển mỗi lượt của toàn bộ $200$ học sinh dựa vào giá trị đại diện của các nhóm.
