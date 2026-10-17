---
title: 'Toán 9 Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối - Tỷ lệ phần trăm & Phân tích thị phần'
description: 'Khám phá toàn diện Bài 23 Toán 9: Khái niệm tần số tương đối, bảng tần số tương đối, biểu đồ hình quạt tròn, biểu đồ cột tương đối, ứng dụng so sánh hai tập dữ liệu khác cỡ mẫu, widget tương tác vẽ quạt tròn SVG và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Thống kê 9
  - Tần số tương đối
  - Biểu đồ quạt tròn
  - Biểu đồ cột tương đối
  - Kết nối tri thức
grade: 9
---

# Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối

Trong kinh doanh và đời sống, tần số thuần túy (số lượng tuyệt đối) đôi khi chưa đủ để so sánh hay phản ánh toàn diện bản chất vấn đề. Hãy xét ví dụ sau:
- Trường THCS Chu Văn An có $60$ học sinh đạt giải Học sinh giỏi.
- Trường THCS Lê Quý Đôn có $45$ học sinh đạt giải Học sinh giỏi.

Nếu chỉ nhìn vào con số $60 > 45$, ta vội kết luận phong trào học sinh giỏi của trường Chu Văn An đạt hiệu suất cao hơn? Chưa chắc! 
- Nếu trường Chu Văn An có tổng cộng $1\,200$ học sinh, thì tỷ lệ đạt giải là $\frac{60}{1\,200} = 5\%$.
- Trong khi đó, trường Lê Quý Đôn chỉ có $600$ học sinh, thì tỷ lệ đạt giải là $\frac{45}{600} = 7,5\%$.

Chính **tỷ lệ phần trăm** (tần số tương đối) mới là thước đo công bằng và chuẩn xác nhất khi đối chiếu các tập dữ liệu có quy mô (cỡ mẫu) khác nhau.

Trong bài học này, chúng ta sẽ làm chủ công cụ **Bảng tần số tương đối**, cách tính góc ở tâm để kiến tạo **Biểu đồ hình quạt tròn (Pie Chart)** đẹp mắt, chuẩn xác, cùng **Biểu đồ cột tương đối** được ứng dụng rộng rãi trong các báo cáo kinh tế, công nghệ và thị phần toàn cầu.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: TẦN SỐ TƯƠNG ĐỐI & BIỂU ĐỒ TRỰC QUAN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Tần số tương đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tỉ số giữa tần số $m$ của một giá trị và cỡ mẫu $N$:<br>$$f = \frac{m}{N} \quad \text{hay} \quad f = \frac{m}{N} \times 100\%$$<br>• Tổng tất cả tần số tương đối luôn bằng $1$ (hoặc $100\%$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Bảng Tần số tương đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bảng thể hiện mối liên hệ giữa từng giá trị $x_i$ và tần số tương đối $f_i$.<br>• Dòng cuối luôn chốt tổng cộng: $N$ và $100\%$.<br>• Dễ dàng quan sát cấu trúc tỷ trọng của tổng thể.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biểu đồ Hình quạt tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hình tròn $360^\circ$ đại diện cho $100\%$ dữ liệu.<br>• Góc ở tâm của hình quạt biểu diễn tần số tương đối $f_i$ là:<br>$$n_i^\circ = 360^\circ \times f_i = 360^\circ \times \frac{m_i}{N}$$<br>• Trực quan hóa thị phần, cơ cấu thành phần.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu đồ Cột tương đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trục đứng ghi tần số tương đối dạng phần trăm (%).<br>• Các cột có chiều cao bằng đúng $f_i\%$.<br>• Dễ dàng đối chiếu, so sánh tỷ trọng giữa 2 hay nhiều nhóm đối tượng.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Công thức cơ bản:** Một nhóm gồm $50$ người có $15$ người thuận tay trái. Tần số tương đối của người thuận tay trái trong nhóm là bao nhiêu phần trăm?
2. **Tổng tỉ lệ:** Nếu một cuộc khảo sát phân loại người tham gia thành 4 nhóm, trong đó ba nhóm đầu chiếm lần lượt $25\%$, $40\%$, $15\%$, thì nhóm thứ tư chiếm bao nhiêu phần trăm?
3. **Góc hình quạt:** Giá trị chiếm $20\%$ trong mẫu số liệu sẽ ứng với một hình quạt tròn có góc ở tâm là bao nhiêu độ?
4. **Từ góc suy ra tỉ lệ:** Một hình quạt tròn trong biểu đồ có góc ở tâm là $90^\circ$. Hình quạt này biểu diễn tần số tương đối bằng bao nhiêu?
5. **So sánh:** Lớp 9A có $40$ bạn với $16$ bạn xếp loại Xuất sắc. Lớp 9B có $45$ bạn với $18$ bạn xếp loại Xuất sắc. Tỷ lệ học sinh Xuất sắc của lớp nào cao hơn?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: $\frac{15}{50} = \frac{30}{100} = 30\%$.
> - Câu 2: $100\% - (25\% + 40\% + 15\%) = 100\% - 80\% = 20\%$.
> - Câu 3: Mỗi $10\%$ ứng với $36^\circ$, nên $20\%$ ứng với $36^\circ \times 2 = 72^\circ$.
> - Câu 4: $\frac{90^\circ}{360^\circ} = \frac{1}{4} = 25\%$.
> - Câu 5: Lớp 9A có $\frac{16}{40} = 40\%$; Lớp 9B có $\frac{18}{45} = \frac{2}{5} = 40\%$. Tỷ lệ học sinh Xuất sắc của hai lớp là **như nhau**!

---

## Lý thuyết trọng tâm

### 1. Tần số tương đối là gì?

> [!NOTE]
> **Định nghĩa Tần số tương đối:**
> Giả sử một mẫu dữ liệu có cỡ mẫu là $N$. Tần số tương đối $f$ của một giá trị $x$ (hoặc một thuộc tính) có tần số $m$ là tỉ số giữa tần số $m$ và cỡ mẫu $N$:
> $$f = \frac{m}{N}$$
> Ta thường viết tần số tương đối dưới dạng phần trăm:
> $$f = \frac{m}{N} \times 100\%$$

**Tính chất quan trọng:**
- Do $0 \le m \le N$ nên $0 \le f \le 1$ (hay $0\% \le f \le 100\%$).
- Nếu mẫu dữ liệu có $k$ giá trị phân biệt $x_1, x_2, \dots, x_k$ với các tần số tương ứng $m_1, m_2, \dots, m_k$ ($m_1 + m_2 + \dots + m_k = N$) thì:
  $$f_1 + f_2 + \dots + f_k = 1 \quad \text{hay} \quad f_1\% + f_2\% + \dots + f_k\% = 100\%$$

---

### 2. Bảng tần số tương đối

Bảng tần số tương đối là bảng ghi lại các giá trị của dấu hiệu cùng với tần số tương đối tương ứng của từng giá trị đó.

**Bảng ngang:**
| Giá trị ($x$) | $x_1$ | $x_2$ | $\dots$ | $x_k$ | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tần số tương đối ($f$)** | $f_1$ | $f_2$ | $\dots$ | $f_k$ | $1$ ($100\%$) |

> [!WARNING]
> **Lưu ý làm tròn số liệu:**
> Khi đổi từ phân số sang số phần trăm thập phân, nếu kết quả có nhiều chữ số thập phân, ta thường làm tròn đến $1$ hoặc $2$ chữ số sau dấu phẩy.
> Sau khi làm tròn, tổng các phần trăm có thể bị lệch đôi chút (ví dụ $99,9\%$ hoặc $100,1\%$). Trong trường hợp đó, người ta thường điều chỉnh nhẹ ở nhóm có tần số lớn nhất để đảm bảo tổng đúng bằng $100\%$.

---

### 3. Biểu đồ hình quạt tròn (Pie Chart)

Biểu đồ hình quạt tròn dùng một hình tròn chia thành các hình quạt để biểu diễn tần số tương đối của các dữ liệu thành phần.

- Cả hình tròn tương ứng với góc ở tâm $360^\circ$ và đại diện cho $100\%$.
- Để vẽ hình quạt đại diện cho giá trị có tần số tương đối $f_i$ (hoặc tần số $m_i$), ta tính số đo góc ở tâm $n_i^\circ$ theo công thức:
  $$n_i^\circ = 360^\circ \times f_i = 360^\circ \times \frac{m_i}{N}$$

**Bảng quy đổi nhanh giữa Tần số tương đối và Góc ở tâm:**
- $10\% \longleftrightarrow 36^\circ$
- $25\% \longleftrightarrow 90^\circ$ (góc vuông, $1/4$ đường tròn)
- $50\% \longleftrightarrow 180^\circ$ (nửa đường tròn)
- $75\% \longleftrightarrow 270^\circ$ ($3/4$ đường tròn)

---

### 4. Biểu đồ cột tương đối

Khác với biểu đồ cột tần số (trục đứng ghi số lượng $m$), biểu đồ cột tương đối có:
- Trục ngang: Ghi các giá trị $x_1, x_2, \dots, x_k$.
- Trục đứng: Ghi thang đo tần số tương đối theo tỉ lệ phần trăm ($0\%, 10\%, 20\%, \dots, 100\%$).
- Mỗi cột hình chữ nhật có đáy nằm trên trục hoành, chiều cao bằng đúng giá trị phần trăm $f_i\%$.

Ưu điểm của biểu đồ cột tương đối: Giúp người đọc dễ dàng so sánh tỷ trọng giữa các đối tượng khác nhau ngay cả khi quy mô tổng thể của các đối tượng hoàn toàn chênh lệch.

---

## Phòng thí nghiệm Tương tác: Trực quan hóa Biểu đồ Quạt tròn & Cột tương đối

Hãy thử thay đổi số lượng từng danh mục bên dưới để quan sát hệ thống tự động tính tần số tương đối, chuyển đổi góc ở tâm và vẽ biểu đồ hình quạt SVG theo thời gian thực!

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: BẢNG TẦN SỐ TƯƠNG ĐỐI & BIỂU ĐỒ HÌNH QUẠT TRÒN</h3>
  <p style="text-align: center; color: #64748b; font-size: 0.95em;">Nhập số lượng (tần số $m$) của 4 phân khúc sản phẩm công nghệ để sinh biểu đồ tương đối:</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
    <div style="background: #eff6ff; padding: 12px; border-radius: 8px; border-left: 4px solid #3b82f6;">
      <label style="font-weight: 600; color: #1e40af; font-size: 0.85em;">Phân khúc A (Laptop AI):</label>
      <input type="number" id="freqA" value="45" min="1" max="500" style="width: 100%; padding: 6px 10px; margin-top: 4px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" oninput="updateRelChart()">
    </div>
    <div style="background: #ecfdf5; padding: 12px; border-radius: 8px; border-left: 4px solid #10b981;">
      <label style="font-weight: 600; color: #065f46; font-size: 0.85em;">Phân khúc B (Smartphone 5G):</label>
      <input type="number" id="freqB" value="75" min="1" max="500" style="width: 100%; padding: 6px 10px; margin-top: 4px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" oninput="updateRelChart()">
    </div>
    <div style="background: #fffbeb; padding: 12px; border-radius: 8px; border-left: 4px solid #f59e0b;">
      <label style="font-weight: 600; color: #92400e; font-size: 0.85em;">Phân khúc C (Đồng hồ Smart):</label>
      <input type="number" id="freqC" value="50" min="1" max="500" style="width: 100%; padding: 6px 10px; margin-top: 4px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" oninput="updateRelChart()">
    </div>
    <div style="background: #faf5ff; padding: 12px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
      <label style="font-weight: 600; color: #6b21a8; font-size: 0.85em;">Phân khúc D (Phụ kiện VR):</label>
      <input type="number" id="freqD" value="30" min="1" max="500" style="width: 100%; padding: 6px 10px; margin-top: 4px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" oninput="updateRelChart()">
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
    <button onclick="setSamplePreset(1)" style="padding: 6px 14px; background: #e2e8f0; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85em;">Mẫu 1: Thị phần Smartphone</button>
    <button onclick="setSamplePreset(2)" style="padding: 6px 14px; background: #e2e8f0; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85em;">Mẫu 2: Khảo sát sở thích thể thao</button>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center;">
    <div>
      <h4 style="margin: 0 0 10px 0; color: #334155; text-align: center;">Biểu đồ Hình quạt tròn (Pie Chart)</h4>
      <div style="display: flex; justify-content: center;">
        <svg data-interactive-done="true" id="pieSvg" width="260" height="260" viewBox="-130 -130 260 260" style="transform: rotate(-90deg); filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));"></svg>
      </div>
      <div id="pieLegend" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px; font-size: 0.85em;"></div>
    </div>
    <div>
      <h4 style="margin: 0 0 10px 0; color: #334155; text-align: center;">Bảng tần số tương đối chi tiết</h4>
      <div style="overflow-x: auto;">
        <table id="relTable" style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em;">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 8px;">Phân khúc</th>
              <th style="padding: 8px;">Tần số ($m$)</th>
              <th style="padding: 8px;">Tỉ lệ ($f$)</th>
              <th style="padding: 8px;">Góc tâm ($n^\circ$)</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div id="summaryStats" style="margin-top: 12px; padding: 10px; background: #f8fafc; border-radius: 8px; font-size: 0.9em; text-align: center; border: 1px dashed #cbd5e1;"></div>
    </div>
  </div>
</div>

<script>
function updateRelChart() {
  const vals = [
    { label: 'Laptop AI', val: Math.max(1, parseInt(document.getElementById('freqA').value) || 1), color: '#3b82f6' },
    { label: 'Smartphone 5G', val: Math.max(1, parseInt(document.getElementById('freqB').value) || 1), color: '#10b981' },
    { label: 'Đồng hồ Smart', val: Math.max(1, parseInt(document.getElementById('freqC').value) || 1), color: '#f59e0b' },
    { label: 'Phụ kiện VR', val: Math.max(1, parseInt(document.getElementById('freqD').value) || 1), color: '#8b5cf6' }
  ];

  const totalN = vals.reduce((sum, item) => sum + item.val, 0);
  const svg = document.getElementById('pieSvg');
  svg.innerHTML = '';

  let curAngle = 0;
  const tbody = document.querySelector('#relTable tbody');
  tbody.innerHTML = '';
  const legend = document.getElementById('pieLegend');
  legend.innerHTML = '';

  vals.forEach(item => {
    const pct = (item.val / totalN) * 100;
    const deg = (item.val / totalN) * 360;

    // SVG arc drawing
    const startRad = (curAngle * Math.PI) / 180;
    const endRad = ((curAngle + deg) * Math.PI) / 180;
    const r = 110;

    const x1 = r * Math.cos(startRad);
    const y1 = r * Math.sin(startRad);
    const x2 = r * Math.cos(endRad);
    const y2 = r * Math.sin(endRad);

    const largeArc = deg > 180 ? 1 : 0;
    const d = `M 0 0 L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', item.color);
    path.setAttribute('stroke', '#ffffff');
    path.setAttribute('stroke-width', '2');
    svg.appendChild(path);

    curAngle += deg;

    // Table row
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid #e2e8f0';
    tr.innerHTML = `
      <td style="padding: 8px; text-align: left; font-weight: 500;"><span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${item.color}; margin-right:6px;"></span>${item.label}</td>
      <td style="padding: 8px;">${item.val}</td>
      <td style="padding: 8px; font-weight: 600; color: ${item.color};">${pct.toFixed(1)}%</td>
      <td style="padding: 8px;">${deg.toFixed(1)}°</td>
    `;
    tbody.appendChild(tr);

    // Legend
    const legItem = document.createElement('div');
    legItem.style.display = 'flex';
    legItem.style.alignItems = 'center';
    legItem.innerHTML = `<span style="display:inline-block; width:12px; height:12px; background:${item.color}; border-radius:3px; margin-right:6px;"></span>${item.label}: <strong>${pct.toFixed(1)}%</strong>`;
    legend.appendChild(legItem);
  });

  // Summary row
  const summaryTr = document.createElement('tr');
  summaryTr.style.background = '#f8fafc';
  summaryTr.style.fontWeight = 'bold';
  summaryTr.innerHTML = `
    <td style="padding: 8px; text-align: left;">Tổng cộng</td>
    <td style="padding: 8px;">${totalN}</td>
    <td style="padding: 8px;">100%</td>
    <td style="padding: 8px;">360°</td>
  `;
  tbody.appendChild(summaryTr);

  document.getElementById('summaryStats').innerHTML = `Cỡ mẫu tổng thể: <strong>N = ${totalN}</strong> phần tử | Biểu đồ quạt tròn chuẩn xác <strong>360°</strong>`;
}

function setSamplePreset(type) {
  if (type === 1) {
    document.getElementById('freqA').value = 40;
    document.getElementById('freqB').value = 90;
    document.getElementById('freqC').value = 50;
    document.getElementById('freqD').value = 20;
  } else {
    document.getElementById('freqA').value = 60;
    document.getElementById('freqB').value = 60;
    document.getElementById('freqC').value = 40;
    document.getElementById('freqD').value = 40;
  }
  updateRelChart();
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', updateRelChart); } else { updateRelChart(); }
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Lập bảng tần số tương đối từ mẫu số liệu hoặc bảng tần số

**Phương pháp giải:**
1. Tính cỡ mẫu $N$ bằng cách cộng tất cả các tần số: $N = m_1 + m_2 + \dots + m_k$.
2. Với mỗi giá trị $x_i$, tính tần số tương đối tương ứng:
   $$f_i = \frac{m_i}{N} \times 100\%$$
3. Lập bảng gồm 2 dòng (hoặc 2 cột): Giá trị và Tần số tương đối.
4. Kiểm tra lại điều kiện kiểm chuẩn: Tổng các tần số tương đối phải bằng $100\%$.

---

#### Ví dụ 1
Một cuộc khảo sát phương tiện di chuyển chính của $120$ nhân viên tại một công ty công nghệ cho kết quả:
- Xe buýt công cộng: $36$ người.
- Xe máy cá nhân: $60$ người.
- Ô tô cá nhân: $18$ người.
- Xe đạp / Đi bộ: $6$ người.

Hãy lập bảng tần số tương đối cho dữ liệu trên.

**Lời giải chi tiết:**
- Cỡ mẫu của cuộc khảo sát là $N = 36 + 60 + 18 + 6 = 120$ (người).
- Tính tần số tương đối của từng loại phương tiện:
  + Xe buýt: $f_1 = \frac{36}{120} \times 100\% = 30\%$.
  + Xe máy: $f_2 = \frac{60}{120} \times 100\% = 50\%$.
  + Ô tô: $f_3 = \frac{18}{120} \times 100\% = 15\%$.
  + Xe đạp / Đi bộ: $f_4 = \frac{6}{120} \times 100\% = 5\%$.
- Kiểm tra tổng tỉ lệ: $30\% + 50\% + 15\% + 5\% = 100\%$.
- Ta có bảng tần số tương đối:

| Phương tiện | Xe buýt | Xe máy | Ô tô | Xe đạp/Đi bộ | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tần số tương đối ($f$)** | $30\%$ | $50\%$ | $15\%$ | $5\%$ | $100\%$ |

---

### Dạng 2: Vẽ và đọc hiểu Biểu đồ hình quạt tròn

**Phương pháp giải:**
1. Tính số đo góc ở tâm $n_i^\circ$ tương ứng với từng tần số tương đối $f_i$:
   $$n_i^\circ = 360^\circ \times f_i = 360^\circ \times \frac{m_i}{N}$$
2. Vẽ đường tròn bán kính $R$ tùy ý.
3. Dùng thước đo độ vẽ lần lượt các góc ở tâm có số đo $n_1^\circ, n_2^\circ, \dots, n_k^\circ$ kề nhau bao trùm toàn bộ hình tròn.
4. Ghi tên nhãn dữ liệu, tỉ lệ phần trăm trên từng hình quạt và chú giải biểu đồ.
5. Khi đọc hiểu: Nếu biết góc ở tâm $n^\circ$, ta tính tỉ lệ phần trăm tương ứng bằng:
   $$f\% = \frac{n^\circ}{360^\circ} \times 100\%$$
   Và tính số lượng tuyệt đối: $m = N \times f = N \times \frac{n^\circ}{360^\circ}$.

---

#### Ví dụ 2
Một tập đoàn công nghệ phân chia ngân sách nghiên cứu và phát triển (R&D) năm 2026 với tổng vốn là $80$ triệu USD vào 3 lĩnh vực:
- Trí tuệ nhân tạo (AI): $40$ triệu USD.
- Điện toán đám mây (Cloud Computing): $24$ triệu USD.
- An toàn thông tin (Cybersecurity): $16$ triệu USD.

a) Tính tần số tương đối và số đo góc ở tâm tương ứng của mỗi lĩnh vực trên biểu đồ quạt tròn.  
b) Nếu năm sau ngân sách An toàn thông tin được tăng lên sao cho góc ở tâm của nó trên biểu đồ là $90^\circ$ (giữ nguyên tổng ngân sách $80$ triệu USD), thì ngân sách cho An toàn thông tin khi đó là bao nhiêu triệu USD?

**Lời giải chi tiết:**
a) Cỡ mẫu tổng ngân sách: $N = 80$ triệu USD.
- Lĩnh vực AI:
  + Tần số tương đối: $f_{\text{AI}} = \frac{40}{80} \times 100\% = 50\%$.
  + Góc ở tâm: $n_{\text{AI}}^\circ = 360^\circ \times 50\% = 180^\circ$.
- Lĩnh vực Cloud:
  + Tần số tương đối: $f_{\text{Cloud}} = \frac{24}{80} \times 100\% = 30\%$.
  + Góc ở tâm: $n_{\text{Cloud}}^\circ = 360^\circ \times 30\% = 108^\circ$.
- Lĩnh vực Cybersecurity:
  + Tần số tương đối: $f_{\text{Cyber}} = \frac{16}{80} \times 100\% = 20\%$.
  + Góc ở tâm: $n_{\text{Cyber}}^\circ = 360^\circ \times 20\% = 72^\circ$.

Kiểm tra: $180^\circ + 108^\circ + 72^\circ = 360^\circ$.

b) Khi góc ở tâm của Cybersecurity là $90^\circ$:
- Tần số tương đối tương ứng là:
  $$f = \frac{90^\circ}{360^\circ} = \frac{1}{4} = 25\%$$
- Ngân sách tương ứng cho An toàn thông tin là:
  $$m = 80 \times 25\% = 20 \text{ (triệu USD)}$$
Vậy ngân sách mới cho An toàn thông tin là $20$ triệu USD.

---

### Dạng 3: Vẽ và phân tích Biểu đồ cột tương đối

**Phương pháp giải:**
1. Xác định trục ngang ghi danh mục / giá trị $x_i$, trục đứng ghi tỉ lệ phần trăm $f_i\%$ (từ $0\%$ đến $100\%$, chia khoảng cách đều đặn $10\%$ hoặc $20\%$).
2. Dựng các cột hình chữ nhật cách đều nhau hoặc liền nhau với chiều cao bằng đúng $f_i\%$.
3. Ghi giá trị phần trăm cụ thể trên đầu mỗi cột.
4. Đọc hiểu: Cột nào cao nhất biểu thị nhóm chiếm tỷ trọng lớn nhất (ưu thế), cột thấp nhất chiếm tỷ trọng nhỏ nhất.

---

#### Ví dụ 3
Kết quả khảo sát mức độ hài lòng của $200$ khách hàng đối với dịch vụ một ứng dụng giáo dục trực tuyến được ghi nhận như sau:
- Rất hài lòng: $90$ khách hàng.
- Hài lòng: $70$ khách hàng.
- Bình thường: $30$ khách hàng.
- Chưa hài lòng: $10$ khách hàng.

a) Lập bảng tần số tương đối của mức độ hài lòng.  
b) Những khách hàng đánh giá từ "Hài lòng" trở lên chiếm bao nhiêu phần trăm?

**Lời giải chi tiết:**
a) Cỡ mẫu $N = 200$.
- Tần số tương đối từng mức:
  + Rất hài lòng: $f_1 = \frac{90}{200} \times 100\% = 45\%$.
  + Hài lòng: $f_2 = \frac{70}{200} \times 100\% = 35\%$.
  + Bình thường: $f_3 = \frac{30}{200} \times 100\% = 15\%$.
  + Chưa hài lòng: $f_4 = \frac{10}{200} \times 100\% = 5\%$.

Bảng tần số tương đối:
| Mức độ | Rất hài lòng | Hài lòng | Bình thường | Chưa hài lòng | Tổng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tỉ lệ ($f$)** | $45\%$ | $35\%$ | $15\%$ | $5\%$ | $100\%$ |

b) Tỉ lệ khách hàng đánh giá từ "Hài lòng" trở lên gồm hai nhóm "Rất hài lòng" và "Hài lòng":
$$f_{\text{HL trở lên}} = 45\% + 35\% = 80\%$$
Như vậy có tới $80\%$ khách hàng đánh giá tích cực về ứng dụng.

---

### Dạng 4: Dùng tần số tương đối để so sánh hai mẫu số liệu khác cỡ mẫu

**Phương pháp giải:**
Khi hai mẫu số liệu $A$ và $B$ có cỡ mẫu khác nhau ($N_A \ne N_B$), ta **không thể so sánh trực tiếp tần số tuyệt đối $m_A$ và $m_B$**, mà phải:
1. Tính tần số tương đối của cùng một tiêu chí ở mẫu $A$: $f_A = \frac{m_A}{N_A} \times 100\%$.
2. Tính tần số tương đối của tiêu chí đó ở mẫu $B$: $f_B = \frac{m_B}{N_B} \times 100\%$.
3. So sánh $f_A$ và $f_B$: Mẫu nào có $f$ lớn hơn thì tiêu chí đó chiếm tỷ trọng ưu thế hơn ở mẫu đó.

---

#### Ví dụ 4
Tại kỳ thi học sinh giỏi cấp Thành phố:
- Quận Hoàn Kiếm cử $80$ thí sinh dự thi, trong đó có $28$ thí sinh đạt giải Nhất hoặc Nhì.
- Quận Cầu Giấy cử $125$ thí sinh dự thi, trong đó có $40$ thí sinh đạt giải Nhất hoặc Nhì.

a) Nếu chỉ so sánh số thí sinh đạt giải Nhất, Nhì thì quận nào nhiều hơn?  
b) Sử dụng tần số tương đối, hãy cho biết quận nào có tỷ lệ thí sinh đạt giải Nhất, Nhì cao hơn?

**Lời giải chi tiết:**
a) So sánh theo số lượng tuyệt đối (tần số):
- Quận Hoàn Kiếm có $28$ thí sinh đạt giải Nhất, Nhì.
- Quận Cầu Giấy có $40$ thí sinh đạt giải Nhất, Nhì.
Vì $40 > 28$ nên số thí sinh đạt giải Nhất, Nhì của Quận Cầu Giấy nhiều hơn Quận Hoàn Kiếm $12$ bạn.

b) So sánh theo tỷ lệ (tần số tương đối):
- Tỷ lệ thí sinh đạt giải Nhất, Nhì của Quận Hoàn Kiếm là:
  $$f_{\text{HK}} = \frac{28}{80} \times 100\% = 35\%$$
- Tỷ lệ thí sinh đạt giải Nhất, Nhì của Quận Cầu Giấy là:
  $$f_{\text{CG}} = \frac{40}{125} \times 100\% = 32\%$$
Vì $35\% > 32\%$ nên **Quận Hoàn Kiếm có tỷ lệ thí sinh đạt giải cao hơn** so với Quận Cầu Giấy.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Phân tích Thị phần Công nghệ (Market Share Analysis):** Các công ty nghiên cứu thị trường hàng đầu như Gartner hay IDC luôn biểu diễn thị phần hệ điều hành (Android chiếm $\approx 71\%$, iOS chiếm $\approx 28\%$) dưới dạng biểu đồ quạt tròn để các nhà đầu tư nhận diện tức thì tương quan lực lượng.
2. **Cơ cấu Doanh thu Doanh nghiệp (Revenue Breakdown):** Một công ty đa quốc gia báo cáo tỷ trọng doanh thu theo từng mảng sản phẩm (Phần cứng, Đám mây, Dịch vụ thuê bao) bằng biểu đồ cột tương đối để cổ đông đánh giá mô hình kinh doanh có phụ thuộc quá mức vào một mảng duy nhất hay không.
3. **Phân tích Thành phần Hóa sinh & Dinh dưỡng:** Trên bao bì thực phẩm hay ứng dụng theo dõi calo (MyFitnessPal), biểu đồ hình quạt thể hiện tỷ lệ 3 nhóm chất dinh dưỡng đa lượng (Macronutrients: Carbohydrate $50\%$, Protein $30\%$, Fat $20\%$) giúp người tập luyện cân đối khẩu phần ăn hàng ngày.
4. **Phân tích Cử tri & Thăm dò Bầu cử (Polling Analysis):** Trong các cuộc bầu cử, kết quả thăm dò cử tri luôn được quy đổi ra tỉ lệ phần trăm ủng hộ từng ứng viên kèm sai số mẫu để dự đoán xu thế chính xác.
5. **Đánh giá Chuyển đổi số trong Giáo dục (EdTech Analytics):** Các nền tảng học trực tuyến theo dõi tỷ lệ học sinh hoàn thành khóa học theo từng khối lớp để liên tục cải tiến bài giảng và giao diện học tập.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Lớp 9A có 40 học sinh, trong đó có 14 học sinh đeo kính cận thị. Tần số tương đối của học sinh đeo kính cận thị là:",
  "options": [
    "A. 14%",
    "B. 35%",
    "C. 28%",
    "D. 40%"
  ],
  "answer": "B. 35%",
  "explanation": "Tần số tương đối là f = (14 / 40) * 100% = 0,35 * 100% = 35%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Tổng tất cả các tần số tương đối trong một bảng tần số tương đối đầy đủ luôn bằng:",
  "options": [
    "A. Cỡ mẫu N",
    "B. 50% (hoặc 0,5)",
    "C. 100% (hoặc 1)",
    "D. 360%"
  ],
  "answer": "C. 100% (hoặc 1)",
  "explanation": "Tổng tất cả tần số tương đối của toàn bộ các giá trị trong mẫu dữ liệu luôn bằng 100% (tức bằng 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Trong biểu đồ hình quạt tròn, giá trị chiếm tần số tương đối 15% sẽ tương ứng với góc ở tâm có số đo bằng:",
  "options": [
    "A. 15°",
    "B. 30°",
    "C. 54°",
    "D. 60°"
  ],
  "answer": "C. 54°",
  "explanation": "Số đo góc ở tâm là n° = 360° * 15% = 360° * 0,15 = 54°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một hình quạt tròn trên biểu đồ có số đo góc ở tâm là 126°. Tần số tương đối của dữ liệu tương ứng là:",
  "options": [
    "A. 35%",
    "B. 30%",
    "C. 42%",
    "D. 25%"
  ],
  "answer": "A. 35%",
  "explanation": "Tần số tương đối f = 126° / 360° * 100% = 0,35 * 100% = 35%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một doanh nghiệp có 4 chi nhánh A, B, C, D. Chi nhánh A chiếm 30%, B chiếm 25%, C chiếm 20% doanh thu toàn công ty. Chi nhánh D có doanh thu là 15 tỷ đồng. Tổng doanh thu toàn công ty là:",
  "options": [
    "A. 50 tỷ đồng",
    "B. 60 tỷ đồng",
    "C. 75 tỷ đồng",
    "D. 100 tỷ đồng"
  ],
  "answer": "B. 60 tỷ đồng",
  "explanation": "Tỉ lệ doanh thu của chi nhánh D là: 100% - (30% + 25% + 20%) = 25%. Tổng doanh thu của toàn công ty là: 15 / 25% = 60 tỷ đồng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Để so sánh cơ cấu năng lượng tái tạo của hai quốc gia có tổng sản lượng điện rất khác nhau, ta nên dùng loại biểu đồ nào?",
  "options": [
    "A. Biểu đồ cột thể hiện sản lượng tuyệt đối (kWh)",
    "B. Biểu đồ hình quạt tròn hoặc biểu đồ cột tương đối (%)",
    "C. Biểu đồ đám mây phân tán",
    "D. Biểu đồ nhiệt"
  ],
  "answer": "B. Biểu đồ hình quạt tròn hoặc biểu đồ cột tương đối (%)",
  "explanation": "Khi so sánh cơ cấu/tỷ trọng của các tổng thể khác quy mô, biểu đồ tần số tương đối (hình quạt tròn hoặc biểu đồ cột %) là công cụ chuẩn xác và trực quan nhất."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khảo sát 250 người tiêu dùng về một dòng xe điện mới, có 175 người trả lời sẵn sàng mua. Tần số tương đối của nhóm người sẵn sàng mua là:",
  "options": [
    "A. 65%",
    "B. 70%",
    "C. 75%",
    "D. 80%"
  ],
  "answer": "B. 70%",
  "explanation": "f = (175 / 250) * 100% = (7 / 10) * 100% = 70%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho biểu đồ quạt tròn biểu diễn 3 màu xe ô tô bán chạy nhất: Trắng chiếm 40%, Đen chiếm 35%, còn lại là màu Đỏ. Góc ở tâm của hình quạt biểu diễn màu Đỏ là:",
  "options": [
    "A. 90°",
    "B. 72°",
    "C. 80°",
    "D. 108°"
  ],
  "answer": "A. 90°",
  "explanation": "Tỉ lệ xe màu Đỏ là: 100% - (40% + 35%) = 25%. Góc ở tâm tương ứng là: 360° * 25% = 90°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một mẫu số liệu có cỡ mẫu N = 80. Một giá trị có góc ở tâm trên biểu đồ quạt tròn là 45°. Tần số thực tế của giá trị này là:",
  "options": [
    "A. 10",
    "B. 12",
    "C. 15",
    "D. 8"
  ],
  "answer": "A. 10",
  "explanation": "Tỉ lệ phần trăm f = 45° / 360° = 1/8 = 12,5%. Tần số tuyệt đối m = 80 * 12,5% = 80 / 8 = 10."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Xạ thủ A bắn 50 viên trúng 42 viên. Xạ thủ B bắn 80 viên trúng 64 viên. So sánh độ chính xác (tỷ lệ trúng) của hai xạ thủ:",
  "options": [
    "A. Xạ thủ B bắn chính xác hơn vì trúng nhiều viên hơn (64 > 42)",
    "B. Xạ thủ A bắn chính xác hơn xạ thủ B",
    "C. Hai xạ thủ có độ chính xác như nhau",
    "D. Không thể so sánh vì số viên bắn khác nhau"
  ],
  "answer": "B. Xạ thủ A bắn chính xác hơn xạ thủ B",
  "explanation": "Tỷ lệ trúng của xạ thủ A: 42 / 50 = 84%. Tỷ lệ trúng của xạ thủ B: 64 / 80 = 80%. Vì 84% > 80% nên xạ thủ A có độ chính xác cao hơn."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Lập bảng tần số tương đối:** Một thư viện trường THCS thống kê số lượng sách được mượn trong tuần:
   - Sách Khoa học: $72$ cuốn.
   - Sách Văn học: $108$ cuốn.
   - Sách Lịch sử: $36$ cuốn.
   - Sách Kỹ năng sống: $24$ cuốn.
   a) Tính cỡ mẫu $N$.
   b) Lập bảng tần số tương đối và tính số đo góc ở tâm tương ứng trên biểu đồ hình quạt tròn của mỗi loại sách.

2. **Khôi phục dữ liệu từ biểu đồ quạt:** Một biểu đồ hình quạt tròn biểu diễn các loại đồ uống yêu thích của học sinh khối 9. Trong đó:
   - Trà sữa chiếm $45\%$.
   - Nước ép hoa quả có góc ở tâm là $72^\circ$.
   - Sữa tươi có góc ở tâm là $54^\circ$.
   - Còn lại là Nước khoáng.
   a) Tính tần số tương đối của từng loại đồ uống.
   b) Biết có $40$ bạn chọn Nước ép hoa quả, hãy tính tổng số học sinh khối 9 tham gia khảo sát và số bạn chọn Trà sữa.

---

### Thử thách Thực tế: Tư vấn Chiến lược Sản phẩm cho Startup Công nghệ

**Bối cảnh:** Một startup phát triển ứng dụng di động khảo sát phản hồi của $500$ người dùng thử nghiệm phiên bản Beta về tính năng được yêu thích nhất:
- Tính năng AI Chatbot: $225$ người.
- Tính năng Tóm tắt văn bản: $150$ người.
- Tính năng Tạo ảnh tự động: $75$ người.
- Tính năng Nhắc lịch học: $50$ người.

**Nhiệm vụ:**
1. Hãy lập bảng tần số tương đối cho kết quả khảo sát trên.
2. Vẽ biểu đồ hình quạt tròn mô tả cấu trúc người dùng.
3. Nếu nhóm phát triển có ngân sách tiếp thị là $200$ triệu đồng và muốn phân bổ ngân sách tỷ lệ thuận với mức độ yêu thích của người dùng, hãy tính số tiền phân bổ cho từng tính năng.
