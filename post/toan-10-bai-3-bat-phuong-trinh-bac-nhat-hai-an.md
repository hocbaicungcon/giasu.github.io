---
title: 'Toán 10 Bài 3: Bất phương trình bậc nhất hai ẩn - Biểu diễn miền nghiệm'
description: 'Lý thuyết chuẩn Toán 10 Bài 3: Khái niệm bất phương trình bậc nhất hai ẩn, cách biểu diễn miền nghiệm trên mặt phẳng tọa độ Oxy, quy tắc điểm thử, widget tương tác mặt phẳng tọa độ và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Đại số 10
  - Bất phương trình bậc nhất hai ẩn
  - Miền nghiệm
  - Mặt phẳng Oxy
  - Kết nối tri thức
grade: 10
---

# Bài 3. Bất phương trình bậc nhất hai ẩn

Trong đời sống thực tế và sản xuất kinh doanh, các quyết định kinh tế hiếm khi chỉ phụ thuộc vào một đại lượng duy nhất.
- Một xưởng sản xuất phải cân đối số lượng giữa hai loại sản phẩm $x$ và $y$ để không vượt quá định mức nguyên liệu và số giờ công lao động.
- Một chuyên gia dinh dưỡng phải phối hợp khối lượng thịt bò ($x$) và cá hồi ($y$) trong khẩu phần ăn để đảm bảo vừa cung cấp đủ lượng calo tối thiểu, vừa tiết kiệm chi phí tối đa.

Tất cả các bài toán tối ưu hóa, phân bổ nguồn lực và quản lý rủi ro đó đều được mô hình hóa bằng **Bất phương trình bậc nhất hai ẩn**.

Khác với bất phương trình một ẩn mà tập nghiệm chỉ là các điểm hoặc khoảng trên trục số, nghiệm của bất phương trình hai ẩn là một tập hợp vô số các cặp số $(x; y)$, được biểu diễn trực quan bằng một **nửa mặt phẳng** trên hệ trục tọa độ $Oxy$.

---

## 1. Sơ đồ tư duy: Bất phương trình bậc nhất hai ẩn

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Định nghĩa chuẩn</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Dạng tổng quát: $ax + by \le c$<br>
      (hoặc $<, \ge, >$)<br>
      • Điều kiện: $a^2 + b^2 \ne 0$ (tức $a, b$ không đồng thời bằng 0)<br>
      • Cặp $(x_0; y_0)$ là nghiệm nếu thay vào cho khẳng định đúng.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Bờ của miền nghiệm</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • Đường thẳng biên $d: ax + by = c$<br>
      • Đường thẳng $d$ chia mặt phẳng $Oxy$ thành 2 nửa mặt phẳng đối nhau.<br>
      • Dấu $\le, \ge$: Bờ là nét liền (lấy cả điểm trên $d$)<br>
      • Dấu $<, >$: Bờ là nét đứt (không lấy điểm trên $d$).
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Thuật toán điểm thử</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • Chọn điểm thử $M(x_0; y_0) \notin d$<br>
      • Ưu tiên chọn gốc tọa độ $O(0; 0)$ nếu $c \ne 0$<br>
      • Tính giá trị $T = ax_0 + by_0$<br>
      • Nếu $T$ thỏa mãn BPT: Nửa mặt phẳng chứa $M$ là miền nghiệm.<br>
      • Nếu $T$ không thỏa: Gạch bỏ nửa mặt phẳng chứa $M$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Ứng dụng mô hình hóa</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • Đặt ẩn và xác định điều kiện thực tế ($x \ge 0, y \ge 0$)<br>
      • Thiết lập bất đẳng thức ràng buộc chi phí, thời gian, sản lượng<br>
      • Nền tảng thiết yếu để giải bài toán Quy hoạch tuyến tính.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

Cùng thử tài phản xạ nhanh với 5 câu hỏi kiểm tra trực giác:

1. **Bất phương trình $2x^2 + 3y \le 5$ có phải là bất phương trình bậc nhất hai ẩn không?**  
   *Đáp án:* Không, vì có số hạng bậc hai $x^2$. Bất phương trình bậc nhất hai ẩn chỉ chứa $x$ và $y$ ở bậc nhất.
2. **Cặp số $(x; y) = (1; 2)$ có phải là nghiệm của bất phương trình $3x - y > 0$ không?**  
   *Đáp án:* Có, vì $3(1) - 2 = 1 > 0$ (khẳng định đúng).
3. **Khi biểu diễn bất phương trình $x + 2y < 4$, đường thẳng bờ $x + 2y = 4$ được vẽ bằng nét gì?**  
   *Đáp án:* Nét đứt (dashed line), vì dấu bất đẳng thức là ngặt ($<$) nên không lấy các điểm nằm trên đường thẳng bờ.
4. **Điểm nào là điểm thử thuận tiện nhất để xác định miền nghiệm nếu đường thẳng không đi qua gốc tọa độ?**  
   *Đáp án:* Gốc tọa độ $O(0; 0)$ vì tính toán $a(0) + b(0) = 0$ cực kỳ nhanh chóng.
5. **Đường thẳng $y = 3$ chia mặt phẳng tọa độ như thế nào đối với bất phương trình $y \le 3$?**  
   *Đáp án:* Là đường thẳng nằm ngang cắt trục tung tại $(0; 3)$, miền nghiệm là nửa mặt phẳng phía dưới đường thẳng (tính cả bờ).

---

## 3. Lý thuyết trọng tâm

### 3.1. Khái niệm bất phương trình bậc nhất hai ẩn

- **Định nghĩa:** Bất phương trình bậc nhất hai ẩn $x, y$ là bất phương trình có một trong các dạng tổng quát sau:
  $$ax + by < c$$
  $$ax + by \le c$$
  $$ax + by > c$$
  $$ax + by \ge c$$
  trong đó $a, b, c$ là những số thực đã cho, $a$ và $b$ không đồng thời bằng 0 (tức $a^2 + b^2 \ne 0$), $x$ và $y$ là các ẩn số.

- **Nghiệm của bất phương trình:** Mỗi cặp số $(x_0; y_0)$ sao cho khi thay $x = x_0$ và $y = y_0$ vào bất phương trình ta được một khẳng định đúng được gọi là một **nghiệm** của bất phương trình đó.
- **Tập nghiệm:** Tập hợp tất cả các nghiệm của bất phương trình được gọi là **tập nghiệm** (hoặc **miền nghiệm**).

---

### 3.2. Biểu diễn hình học miền nghiệm trên mặt phẳng tọa độ $Oxy$

Trong mặt phẳng tọa độ $Oxy$, đường thẳng bờ $d: ax + by = c$ chia mặt phẳng thành hai nửa mặt phẳng mở bờ $d$:
- Một nửa mặt phẳng gồm các điểm $(x; y)$ thỏa mãn $ax + by > c$.
- Nửa mặt phẳng còn lại gồm các điểm $(x; y)$ thỏa mãn $ax + by < c$.

> [!NOTE]
> - Nếu bất phương trình chứa dấu $\le$ hoặc $\ge$, miền nghiệm là **nửa mặt phẳng đóng** (bao gồm cả bờ $d$, thể hiện bằng **nét liền**).
> - Nếu bất phương trình chứa dấu $<$ hoặc $>$, miền nghiệm là **nửa mặt phẳng mở** (không chứa bờ $d$, thể hiện bằng **nét đứt**).

---

### 3.3. Quy trình 3 bước biểu diễn miền nghiệm bằng phương pháp "Điểm thử"

Để biểu diễn miền nghiệm của bất phương trình $ax + by \le c$ (hoặc $<, \ge, >$):

1. **Bước 1 (Vẽ bờ):** Vẽ đường thẳng $d: ax + by = c$ trên mặt phẳng tọa độ $Oxy$.
   - Tìm hai điểm phân biệt thuộc $d$, thường là giao điểm với hai trục tọa độ: Cho $x = 0 \Rightarrow y = \frac{c}{b}$; cho $y = 0 \Rightarrow x = \frac{c}{a}$.
   - Nối hai điểm đó để được đường thẳng $d$ (chú ý vẽ nét liền nếu có dấu "$=$", nét đứt nếu dấu ngặt).
2. **Bước 2 (Chọn điểm thử):** Chọn một điểm $M(x_0; y_0)$ không nằm trên đường thẳng $d$.
   - Nếu $c \ne 0$ (đường thẳng không qua gốc tọa độ), hãy luôn chọn gốc tọa độ $O(0; 0)$.
   - Nếu $c = 0$ (đường thẳng đi qua gốc tọa độ), ta có thể chọn điểm $M(1; 0)$ hoặc $M(0; 1)$.
   - Tính giá trị $T = ax_0 + by_0$ và so sánh với $c$.
3. **Bước 3 (Kết luận miền nghiệm):**
   - Nếu $ax_0 + by_0 \le c$ là khẳng định đúng, thì nửa mặt phẳng chứa điểm $M$ (kể cả bờ $d$) là miền nghiệm.
   - Nếu $ax_0 + by_0 \le c$ là khẳng định sai, thì nửa mặt phẳng không chứa điểm $M$ là miền nghiệm.
   - Ta gạch chéo phần mặt phẳng không phải là miền nghiệm.

> [!TIP]
> **Mẹo xác định nhanh dấu cho nửa mặt phẳng:**
> Nếu phương trình đưa về dạng $y \ge kx + m$, miền nghiệm nằm ở **phía trên** đường thẳng.  
> Nếu đưa về dạng $y \le kx + m$, miền nghiệm nằm ở **phía dưới** đường thẳng.

---

## 4. Widget tương tác: Khám phá Miền nghiệm trên Hệ trục $Oxy$

Hãy điều chỉnh các hệ số $a, b, c$ và dấu bất đẳng thức để quan sát trực quan sự thay đổi của đường thẳng bờ và miền nghiệm:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">📐 Phòng Thí Nghiệm Đồ Họa Miền Nghiệm Oxy</h3>
    <div style="font-weight: 700; font-size: 1.1rem; color: #2563eb;" id="bptDisplay">
      2x + y ≤ 4
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Canvas SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="geoSvg" viewBox="-150 -150 300 300" style="width: 100%; max-width: 320px; height: auto; background: #fafafa; border-radius: 6px;">
        <!-- Grid lines -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="-150" y1="-120" x2="150" y2="-120" />
          <line x1="-150" y1="-90" x2="150" y2="-90" />
          <line x1="-150" y1="-60" x2="150" y2="-60" />
          <line x1="-150" y1="-30" x2="150" y2="-30" />
          <line x1="-150" y1="30" x2="150" y2="30" />
          <line x1="-150" y1="60" x2="150" y2="60" />
          <line x1="-150" y1="90" x2="150" y2="90" />
          <line x1="-150" y1="120" x2="150" y2="120" />

          <line x1="-120" y1="-150" x2="-120" y2="150" />
          <line x1="-90" y1="-150" x2="-90" y2="150" />
          <line x1="-60" y1="-150" x2="-60" y2="150" />
          <line x1="-30" y1="-150" x2="-30" y2="150" />
          <line x1="30" y1="-150" x2="30" y2="150" />
          <line x1="60" y1="-150" x2="60" y2="150" />
          <line x1="90" y1="-150" x2="90" y2="150" />
          <line x1="120" y1="-150" x2="120" y2="150" />
        </g>

        <!-- Shaded Solution Half-Plane Polygon -->
        <polygon id="solHalfPlane" points="-150,-150 150,-150 150,150 -150,150" fill="#3b82f6" fill-opacity="0.25" />

        <!-- Axes -->
        <g stroke="#334155" stroke-width="1.5">
          <line x1="-145" y1="0" x2="145" y2="0" marker-end="url(#arrX)" />
          <line x1="0" y1="145" x2="0" y2="-145" marker-end="url(#arrY)" />
        </g>
        <defs>
          <marker id="arrX" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/></marker>
          <marker id="arrY" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/></marker>
        </defs>
        <text x="135" y="16" font-size="12" fill="#334155" font-weight="bold">x</text>
        <text x="-16" y="-135" font-size="12" fill="#334155" font-weight="bold">y</text>
        <text x="-14" y="16" font-size="11" fill="#64748b">O</text>

        <!-- Boundary line d -->
        <line id="boundaryLine" x1="-150" y1="150" x2="150" y2="-150" stroke="#dc2626" stroke-width="2.5" />

        <!-- Test point O(0,0) -->
        <circle id="testPoint" cx="0" cy="0" r="4.5" fill="#10b981" />
        <text id="testPointLabel" x="8" y="18" font-size="11" font-weight="bold" fill="#047857">O(0;0) [Thỏa]</text>
      </svg>
    </div>

    <!-- Controls -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hệ số a: <span id="valA" style="color: #2563eb;">2</span></label>
        <input type="range" id="sliderA" min="-4" max="4" step="1" value="2" oninput="updateBPT()" style="width: 100%;" />
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hệ số b: <span id="valB" style="color: #2563eb;">1</span></label>
        <input type="range" id="sliderB" min="-4" max="4" step="1" value="1" oninput="updateBPT()" style="width: 100%;" />
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Hệ số c: <span id="valC" style="color: #2563eb;">4</span></label>
        <input type="range" id="sliderC" min="-6" max="6" step="1" value="4" oninput="updateBPT()" style="width: 100%;" />
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">Dấu bất đẳng thức:</label>
        <div style="display: flex; gap: 8px; margin-top: 6px;">
          <button id="btnSignLe" onclick="setSign('le')" style="flex: 1; padding: 6px; border-radius: 6px; border: none; background: #2563eb; color: white; font-weight: bold; cursor: pointer;">≤</button>
          <button id="btnSignLt" onclick="setSign('lt')" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; color: #334155; font-weight: bold; cursor: pointer;"><</button>
          <button id="btnSignGe" onclick="setSign('ge')" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; color: #334155; font-weight: bold; cursor: pointer;">≥</button>
          <button id="btnSignGt" onclick="setSign('gt')" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; color: #334155; font-weight: bold; cursor: pointer;">></button>
        </div>
      </div>

      <div id="stepInfo" style="background: #f1f5f9; padding: 10px; border-radius: 6px; font-size: 0.85rem; color: #1e293b; line-height: 1.5;">
        • Đường thẳng bờ $d: 2x + y = 4$ (nét liền).<br>
        • Thử điểm $O(0; 0)$: $2(0) + 0 = 0 \le 4$ (Đúng).<br>
        • Miền nghiệm là nửa mặt phẳng màu xanh chứa điểm $O(0; 0)$.
      </div>
    </div>
  </div>
</div>

<script>
let currentSign = 'le';

function setSign(s) {
  currentSign = s;
  ['btnSignLe', 'btnSignLt', 'btnSignGe', 'btnSignGt'].forEach(id => {
    const el = document.getElementById(id);
    el.style.background = 'white';
    el.style.color = '#334155';
    el.style.border = '1px solid #cbd5e1';
  });
  const activeId = s === 'le' ? 'btnSignLe' : (s === 'lt' ? 'btnSignLt' : (s === 'ge' ? 'btnSignGe' : 'btnSignGt'));
  const btn = document.getElementById(activeId);
  btn.style.background = '#2563eb';
  btn.style.color = 'white';
  btn.style.border = 'none';
  updateBPT();
}

function updateBPT() {
  let a = parseInt(document.getElementById('sliderA').value);
  let b = parseInt(document.getElementById('sliderB').value);
  let c = parseInt(document.getElementById('sliderC').value);

  if (a === 0 && b === 0) {
    b = 1;
    document.getElementById('sliderB').value = 1;
  }

  document.getElementById('valA').textContent = a;
  document.getElementById('valB').textContent = b;
  document.getElementById('valC').textContent = c;

  const signSymbols = { 'le': '≤', 'lt': '<', 'ge': '≥', 'gt': '>' };
  const sym = signSymbols[currentSign];

  let exprStr = '';
  if (a !== 0) exprStr += (a === 1 ? 'x' : (a === -1 ? '-x' : a + 'x'));
  if (b !== 0) {
    if (exprStr && b > 0) exprStr += ' + ';
    else if (exprStr && b < 0) exprStr += ' - ';
    else if (!exprStr && b < 0) exprStr += '-';
    exprStr += (Math.abs(b) === 1 ? 'y' : Math.abs(b) + 'y');
  }
  document.getElementById('bptDisplay').textContent = `${exprStr} ${sym} ${c}`;

  // 1 unit = 25px in SVG coordinates. SVG x: right (+), SVG y: down (+) => math y is -SVG y.
  // Equation in math: a*x + b*y = c
  // In SVG coords (X = 25*x, Y = -25*y) => a*(X/25) - b*(Y/25) = c => a*X - b*Y = 25*c
  const scale = 25;
  const boundLine = document.getElementById('boundaryLine');
  const isStrict = (currentSign === 'lt' || currentSign === 'gt');
  boundLine.setAttribute('stroke-dasharray', isStrict ? '6,4' : 'none');

  let x1, y1, x2, y2;
  if (Math.abs(b) > 0.001) {
    x1 = -150;
    y1 = (a * x1 - scale * c) / b;
    x2 = 150;
    y2 = (a * x2 - scale * c) / b;
  } else {
    x1 = (scale * c) / a;
    y1 = -150;
    x2 = x1;
    y2 = 150;
  }
  boundLine.setAttribute('x1', x1);
  boundLine.setAttribute('y1', y1);
  boundLine.setAttribute('x2', x2);
  boundLine.setAttribute('y2', y2);

  // Check test point O(0,0) in math coords
  const valAtO = 0;
  let oSatisfies = false;
  if (currentSign === 'le') oSatisfies = valAtO <= c;
  else if (currentSign === 'lt') oSatisfies = valAtO < c;
  else if (currentSign === 'ge') oSatisfies = valAtO >= c;
  else if (currentSign === 'gt') oSatisfies = valAtO > c;

  const tpLabel = document.getElementById('testPointLabel');
  if (c !== 0) {
    tpLabel.textContent = oSatisfies ? 'O(0;0) [Nghiệm]' : 'O(0;0) [Không thỏa]';
    tpLabel.setAttribute('fill', oSatisfies ? '#047857' : '#dc2626');
  } else {
    tpLabel.textContent = 'O(0;0) ∈ d';
    tpLabel.setAttribute('fill', '#475569');
  }

  // Construct shaded polygon for half-plane
  // Normal vector in math: (a, b) points towards ax + by > c.
  // In SVG: normal is (a, -b).
  // A point deep in the correct half: if we want ax + by <= c, direction is (-a, b) in SVG.
  const poly = document.getElementById('solHalfPlane');
  const mult = (currentSign === 'le' || currentSign === 'lt') ? -1 : 1;
  const nx = mult * a;
  const ny = mult * (-b);
  const len = Math.hypot(nx, ny) || 1;
  const dx = (nx / len) * 350;
  const dy = (ny / len) * 350;

  const pts = `${x1},${y1} ${x2},${y2} ${x2 + dx},${y2 + dy} ${x1 + dx},${y1 + dy}`;
  poly.setAttribute('points', pts);

  document.getElementById('stepInfo').innerHTML = `
    • Đường thẳng biên $d: ${exprStr} = ${c}$ (${isStrict ? 'nét đứt' : 'nét liền'}).<br>
    • Thay $O(0;0)$: Giá trị vế trái = $0$. Khẳng định $0 ${sym} ${c}$ là <strong>${oSatisfies ? 'ĐÚNG' : 'SAI'}</strong>.<br>
    • Miền nghiệm là nửa mặt phẳng tô xanh ${oSatisfies ? 'chứa điểm O(0;0)' : 'không chứa điểm O(0;0)'}.
  `;
}
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Nhận biết bất phương trình bậc nhất hai ẩn & Kiểm tra điểm thuộc miền nghiệm

#### Phương pháp:
- Bất phương trình bậc nhất hai ẩn phải thỏa mãn: ẩn số có bậc cao nhất là 1, không có tích $xy$, không có ẩn dưới mẫu thức hay trong dấu căn, hệ số $a, b$ không đồng thời bằng 0.
- Để kiểm tra cặp số $(x_0; y_0)$ có là nghiệm hay không: Thay trực tiếp $x = x_0$ và $y = y_0$ vào bất phương trình. Nếu bất đẳng thức đúng thì điểm thuộc miền nghiệm, ngược lại điểm không thuộc miền nghiệm.

---

#### Bài toán 1
Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn?
1. $2x - 3y + 1 \ge 0$
2. $x^2 + 4y < 7$
3. $3x - 5y + xy \le 2$
4. $\frac{x}{3} + \frac{y}{2} \le 1$

Với bất phương trình (1), hãy kiểm tra xem các điểm $A(1; 1), B(0; 2), C(-2; -1)$ có thuộc miền nghiệm hay không?

**Lời giải chi tiết:**

- Các bất phương trình bậc nhất hai ẩn là:
  - BPT (1): $2x - 3y + 1 \ge 0$ là BPT bậc nhất hai ẩn với $a = 2, b = -3, c = -1$.
  - BPT (4): $\frac{x}{3} + \frac{y}{2} \le 1 \iff 2x + 3y \le 6$ là BPT bậc nhất hai ẩn với $a = \frac{1}{3}, b = \frac{1}{2}, c = 1$.
- BPT (2) không phải vì có số hạng $x^2$.
- BPT (3) không phải vì có tích $xy$ (bậc hai).

Kiểm tra các điểm với BPT (1): $2x - 3y + 1 \ge 0$:
- Với điểm $A(1; 1)$: $2(1) - 3(1) + 1 = 0 \ge 0$ (Đúng). Vậy $A(1; 1)$ thuộc miền nghiệm (nằm ngay trên đường thẳng bờ).
- Với điểm $B(0; 2)$: $2(0) - 3(2) + 1 = -5 \ge 0$ (Sai). Vậy $B(0; 2)$ không thuộc miền nghiệm.
- Với điểm $C(-2; -1)$: $2(-2) - 3(-1) + 1 = -4 + 3 + 1 = 0 \ge 0$ (Đúng). Vậy $C(-2; -1)$ thuộc miền nghiệm.

---

### Dạng 2: Biểu diễn miền nghiệm của bất phương trình trên mặt phẳng $Oxy$

#### Phương pháp:
Thực hiện chuẩn 3 bước:
1. Vẽ đường thẳng bờ $d: ax + by = c$. Xác định nét liền hay nét đứt.
2. Chọn điểm thử $O(0; 0)$ (nếu $d$ không qua $O$) và tính giá trị.
3. Kết luận và gạch bỏ nửa mặt phẳng không thích hợp.

---

#### Bài toán 2
Biểu diễn miền nghiệm của bất phương trình sau trên mặt phẳng tọa độ $Oxy$:
$$3x - 2y < 6$$

**Lời giải chi tiết:**

- **Bước 1:** Vẽ đường thẳng bờ $d: 3x - 2y = 6$.
  - Cho $x = 0 \Rightarrow y = -3$, ta được điểm $A(0; -3)$.
  - Cho $y = 0 \Rightarrow x = 2$, ta được điểm $B(2; 0)$.
  - Nối $A$ và $B$ bằng **nét đứt** (dashed line) vì bất phương trình chứa dấu $<$ (không lấy các điểm trên bờ).

- **Bước 2:** Chọn điểm thử $O(0; 0) \notin d$.  
  Thay tọa độ $(0; 0)$ vào vế trái của bất phương trình:
  $$3(0) - 2(0) = 0 < 6 \text{ (khẳng định đúng)}$$

- **Bước 3:** Kết luận:  
  Miền nghiệm của bất phương trình $3x - 2y < 6$ là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O(0; 0)$, không kể bờ $d$.

---

### Dạng 3: Bài toán thực tế mô hình hóa thành bất phương trình bậc nhất hai ẩn

#### Phương pháp:
1. Gọi $x$ và $y$ lần lượt là số lượng các đại lượng cần tìm. Đặt điều kiện thực tế (thường là $x \ge 0, y \ge 0$ hoặc $x, y \in \mathbb{N}$).
2. Lập bảng thống kê định mức (nguyên vật liệu, thời gian, chi phí).
3. Thiết lập bất phương trình từ điều kiện "không vượt quá" ($\le$) hoặc "tối thiểu" ($\ge$).

---

#### Bài toán 3
Một người thợ mộc sản xuất hai loại ghế gỗ: ghế tựa (loại A) và ghế xoay (loại B).
- Mỗi chiếc ghế loại A cần 2 giờ tiện gỗ và 1 giờ đánh bóng.
- Mỗi chiếc ghế loại B cần 1 giờ tiện gỗ và 3 giờ đánh bóng.
- Mỗi tuần xưởng mộc chỉ có tối đa 40 giờ dành cho công đoạn tiện gỗ.

1. Gọi $x$ và $y$ lần lượt là số ghế loại A và loại B người thợ mộc đóng trong một tuần. Hãy viết bất phương trình bậc nhất hai ẩn biểu thị giới hạn thời gian tiện gỗ.
2. Nếu người thợ mộc muốn đóng 12 chiếc ghế loại A và 18 chiếc ghế loại B trong một tuần thì có đủ thời gian tiện gỗ không?

**Lời giải chi tiết:**

1. Gọi $x \ge 0$ là số ghế loại A và $y \ge 0$ là số ghế loại B ($x, y \in \mathbb{N}$).
   - Tổng thời gian tiện gỗ cho $x$ chiếc ghế loại A là: $2x$ (giờ).
   - Tổng thời gian tiện gỗ cho $y$ chiếc ghế loại B là: $1y = y$ (giờ).
   - Tổng thời gian tiện gỗ cả tuần không vượt quá 40 giờ, nên ta có bất phương trình:
     $$2x + y \le 40$$

2. Với $x = 12$ và $y = 18$, ta thay vào vế trái của bất phương trình:
   $$2(12) + 18 = 24 + 18 = 42$$
   Vì $42 > 40$, bất đẳng thức $2x + y \le 40$ bị vi phạm.  
   Do đó, người thợ mộc **không đủ thời gian** tiện gỗ để sản xuất đồng thời 12 ghế loại A và 18 ghế loại B trong một tuần.

---

### Dạng 4: Bài toán tìm tham số $m$ liên quan đến miền nghiệm

#### Phương pháp:
- Yêu cầu điểm $M(x_0; y_0)$ thuộc miền nghiệm $\iff$ Thay $(x_0; y_0)$ vào BPT thu được bất phương trình một ẩn $m$ và giải tìm $m$.
- Yêu cầu cả một đoạn thẳng $AB$ nằm trong miền nghiệm $\iff$ Cả hai đầu mút $A$ và $B$ đều phải thỏa mãn bất phương trình.

---

#### Bài toán 4
Cho bất phương trình bậc nhất hai ẩn:
$$(2m - 1)x + (m + 2)y - 5 \ge 0$$
1. Tìm các giá trị của tham số $m$ để gốc tọa độ $O(0; 0)$ không thuộc miền nghiệm của bất phương trình.
2. Tìm $m$ để điểm $A(2; -1)$ thuộc miền nghiệm của bất phương trình.

**Lời giải chi tiết:**

1. **Tìm $m$ để $O(0; 0)$ không thuộc miền nghiệm:**  
   Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm khi và chỉ khi:
   $$(2m - 1)(0) + (m + 2)(0) - 5 \ge 0 \iff -5 \ge 0 \text{ (vô lý)}$$
   Điều này chứng tỏ với mọi giá trị của tham số $m$, gốc tọa độ $O(0; 0)$ không bao giờ thỏa mãn bất đẳng thức trên.  
   Vậy với **mọi $m \in \mathbb{R}$**, gốc tọa độ $O(0; 0)$ đều không thuộc miền nghiệm.

2. **Tìm $m$ để $A(2; -1)$ thuộc miền nghiệm:**  
   Thay $x = 2$ và $y = -1$ vào bất phương trình:
   $$(2m - 1)(2) + (m + 2)(-1) - 5 \ge 0$$
   $$\iff 4m - 2 - m - 2 - 5 \ge 0$$
   $$\iff 3m - 9 \ge 0 \iff 3m \ge 9 \iff m \ge 3$$
   Vậy với $m \ge 3$ thì điểm $A(2; -1)$ thuộc miền nghiệm.

---

## 6. Ứng dụng thực tế & Kinh tế học

| Lĩnh vực | Ứng dụng cụ thể của Bất phương trình hai ẩn |
| :--- | :--- |
| **Kế hoạch tài chính & Tiết kiệm** | Phân bổ thu nhập hàng tháng: $x$ triệu cho sinh hoạt, $y$ triệu cho đầu tư sao cho tổng chi tiêu $x + y \le S$ (thu nhập cố định). |
| **Logistics & Vận tải hàng hải** | Ràng buộc tải trọng tàu container: Tổng khối lượng $m_1 x + m_2 y \le W_{\max}$ và tổng thể tích $v_1 x + v_2 y \le V_{\max}$. |
| **Dinh dưỡng thể hình (Gym & Fitness)** | Đảm bảo lượng đạm hấp thụ mỗi ngày: $25x + 30y \ge 120$ (gam protein từ ức gà và bột whey). |
| **Nông nghiệp công nghệ cao** | Phối trộn phân bón NPK: Diện tích gieo trồng lúa giống A ($x$ ha) và giống B ($y$ ha) chịu ràng buộc về lượng nước tưới có hạn của hồ chứa. |
| **Quảng cáo đa kênh (Digital Ads)** | Tối ưu ngân sách quảng cáo: Chi phí chạy Ads TikTok ($x$) và Google Search ($y$) không vượt quá ngân sách chiến dịch: $500x + 800y \le 50\,000\,000$ VNĐ. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q1",
  "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
  "options": [
    "$2x^2 + 3y > 5$",
    "$3x - 4y + 7 \\le 0$",
    "$xy + x - 2 \\ge 0$",
    "$\\frac{1}{x} + 2y < 3$"
  ],
  "answer": 1,
  "explanation": "Bất phương trình $3x - 4y + 7 \\le 0$ có dạng $ax + by \\le c$ với $a = 3, b = -4, c = -7$, cả hai ẩn đều ở bậc nhất, không có tích $xy$ hay ẩn ở mẫu. Do đó đây là bất phương trình bậc nhất hai ẩn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q2",
  "question": "Cặp số nào sau đây là một nghiệm của bất phương trình $2x - 3y + 6 > 0$?",
  "options": [
    "$(0; 3)$",
    "$(-4; 0)$",
    "$(1; 2)$",
    "$(-2; 1)$"
  ],
  "answer": 2,
  "explanation": "Thay cặp số $(1; 2)$ vào: $2(1) - 3(2) + 6 = 2 - 6 + 6 = 2 > 0$ (khẳng định đúng). Các cặp còn lại: $(0; 3) \\Rightarrow -3 > 0$ (sai); $(-4; 0) \\Rightarrow -2 > 0$ (sai); $(-2; 1) \\Rightarrow -1 > 0$ (sai)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q3",
  "question": "Miền nghiệm của bất phương trình $x + y \\le 2$ chứa điểm nào sau đây?",
  "options": [
    "$M(2; 1)$",
    "$O(0; 0)$",
    "$P(3; 0)$",
    "$Q(2; 3)$"
  ],
  "answer": 1,
  "explanation": "Thay tọa độ $O(0; 0)$ vào ta có: $0 + 0 = 0 \\le 2$ (đúng). Do đó miền nghiệm chứa điểm $O(0; 0)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q4",
  "question": "Đường thẳng bờ của bất phương trình $2x - y < 4$ đi qua hai điểm nào sau đây trên hệ trục tọa độ $Oxy$?",
  "options": [
    "$(0; 4)$ và $(2; 0)$",
    "$(0; -4)$ và $(2; 0)$",
    "$(0; -4)$ và $(-2; 0)$",
    "$(0; 2)$ và $(4; 0)$"
  ],
  "answer": 1,
  "explanation": "Phương trình đường thẳng bờ là $2x - y = 4$. Cho $x = 0 \\Rightarrow y = -4$, ta được điểm $(0; -4)$. Cho $y = 0 \\Rightarrow 2x = 4 \\Rightarrow x = 2$, ta được điểm $(2; 0)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q5",
  "question": "Khi biểu diễn miền nghiệm của bất phương trình $x - 3y > 5$, đường thẳng bờ $x - 3y = 5$ được vẽ bằng:",
  "options": [
    "Nét liền và các điểm trên bờ thuộc miền nghiệm.",
    "Nét đứt và các điểm trên bờ không thuộc miền nghiệm.",
    "Nét liền và các điểm trên bờ không thuộc miền nghiệm.",
    "Nét đứt và các điểm trên bờ thuộc miền nghiệm."
  ],
  "answer": 1,
  "explanation": "Vì bất phương trình chứa dấu bất đẳng thức ngặt ($>$), các điểm nằm trên đường thẳng bờ không thỏa mãn bất phương trình. Theo quy ước chuẩn, bờ phải được vẽ bằng nét đứt."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q6",
  "question": "Miền nghiệm của bất phương trình $y \\ge -2$ là:",
  "options": [
    "Nửa mặt phẳng nằm bên phải đường thẳng $x = -2$.",
    "Nửa mặt phẳng nằm bên trái đường thẳng $x = -2$.",
    "Nửa mặt phẳng nằm phía trên đường thẳng $y = -2$ (kể cả bờ).",
    "Nửa mặt phẳng nằm phía dưới đường thẳng $y = -2$ (kể cả bờ)."
  ],
  "answer": 2,
  "explanation": "Đường thẳng $y = -2$ là đường thẳng song song với trục hoành cắt trục tung tại $(0; -2)$. Bất phương trình $y \\ge -2$ lấy các điểm có tung độ lớn hơn hoặc bằng $-2$, tức nửa mặt phẳng phía trên kể cả bờ."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q7",
  "question": "Một người có 100 000 đồng đi siêu thị mua táo ($x$ kg, giá 25 000 đ/kg) và xoài ($y$ kg, giá 20 000 đ/kg). Bất phương trình mô tả số tiền mua hàng không vượt quá số tiền mang theo là:",
  "options": [
    "$25x + 20y \\le 100$",
    "$5x + 4y \\le 20$",
    "$4x + 5y \\le 20$",
    "$20x + 25y \\le 100$"
  ],
  "answer": 1,
  "explanation": "Tổng số tiền mua hàng là $25000x + 20000y \\le 100000$. Chia cả hai vế cho 5000 ta được: $5x + 4y \\le 20$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q8",
  "question": "Cho bất phương trình $mx + 2y \\ge 6$. Tìm $m$ để điểm $A(1; 1)$ thuộc miền nghiệm của bất phương trình:",
  "options": [
    "$m \\ge 4$",
    "$m \\le 4$",
    "$m \\ge 8$",
    "$m \\le 8$"
  ],
  "answer": 0,
  "explanation": "Thay tọa độ $x = 1, y = 1$ vào bất phương trình: $m(1) + 2(1) \\ge 6 \\iff m + 2 \\ge 6 \\iff m \\ge 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q9",
  "question": "Hình phẳng nào sau đây là miền nghiệm của bất phương trình $x \\ge 0$?",
  "options": [
    "Nửa mặt phẳng bên trái trục tung $Oy$.",
    "Nửa mặt phẳng bên phải trục tung $Oy$ (kể cả trục tung).",
    "Nửa mặt phẳng phía trên trục hoành $Ox$.",
    "Nửa mặt phẳng phía dưới trục hoành $Ox$."
  ],
  "answer": 1,
  "explanation": "Bất phương trình $x \\ge 0$ xác định tất cả các điểm có hoành độ không âm. Đó chính là nửa mặt phẳng nằm bên phải trục tung $Oy$ (kể cả bờ $x = 0$ là trục $Oy$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b3_q10",
  "question": "Cho bất phương trình $3x - 4y + 12 \\ge 0$. Điểm nào sau đây nằm trên đường thẳng bờ của miền nghiệm?",
  "options": [
    "$(0; 3)$",
    "$(-4; 0)$",
    "Cả hai điểm trên đều đúng",
    "Không có điểm nào trong các điểm trên"
  ],
  "answer": 2,
  "explanation": "Đường thẳng bờ có phương trình $3x - 4y + 12 = 0$. Thay $(0; 3): 3(0) - 4(3) + 12 = 0$ (đúng). Thay $(-4; 0): 3(-4) - 4(0) + 12 = 0$ (đúng). Do đó cả hai điểm đều thuộc bờ."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Phân tích miền nghiệm & Tìm điểm nguyên)
Cho bất phương trình:
$$2x + 3y \le 6$$
1. Biểu diễn miền nghiệm của bất phương trình trên mặt phẳng tọa độ $Oxy$.
2. Tìm tất cả các cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình trên.

*Hướng dẫn giải:*
1. Vẽ đường thẳng bờ $d: 2x + 3y = 6$ đi qua hai điểm $(0; 2)$ và $(3; 0)$ bằng nét liền. Thử điểm $O(0; 0)$: $2(0) + 3(0) = 0 \le 6$ (đúng). Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O(0; 0)$, tính cả bờ.
2. Cặp số nguyên dương nghĩa là $x \in \{1; 2; 3; \dots\}$ và $y \in \{1; 2; 3; \dots\}$.  
   Từ $2x + 3y \le 6 \Rightarrow 3y \le 6 - 2x$.
   - Nếu $x = 1 \Rightarrow 3y \le 6 - 2(1) = 4 \Rightarrow y \le \frac{4}{3}$. Vì $y$ nguyên dương nên $y = 1$. Ta có cặp $(1; 1)$.
   - Nếu $x = 2 \Rightarrow 3y \le 6 - 2(2) = 2 \Rightarrow y \le \frac{2}{3}$ (không có số nguyên dương nào thỏa mãn).
   - Nếu $x \ge 3 \Rightarrow 2x \ge 6 \Rightarrow 3y \le 0$ (không có số nguyên dương nào thỏa mãn).  
   Vậy chỉ có duy nhất **1 cặp số nguyên dương** là $(1; 1)$.

---

### Bài tập 2 (Tình huống lập kế hoạch kinh doanh nhỏ)
Một nhóm học sinh lớp 10 tổ chức hội chợ gây quỹ từ thiện bằng việc bán hai loại nước giải khát tự làm: Trà chanh ($x$ ly) và Trà đào ($y$ ly).
- Để pha một ly trà chanh cần 20g đường và 5ml cốt chanh.
- Để pha một ly trà đào cần 30g đường và 15ml siro đào.
- Nhóm học sinh chỉ mua được tối đa 1,2 kg đường (tức 1200g).

1. Hãy thiết lập bất phương trình bậc nhất hai ẩn thể hiện giới hạn về lượng đường.
2. Nếu nhóm dự định pha 35 ly trà chanh và 20 ly trà đào thì lượng đường có đủ không? Còn dư bao nhiêu gam đường?

*Hướng dẫn giải:*
1. Lượng đường cần cho $x$ ly trà chanh là $20x$ (gam), cho $y$ ly trà đào là $30y$ (gam).  
   Bất phương trình giới hạn lượng đường:
   $$20x + 30y \le 1200 \iff 2x + 3y \le 120$$
2. Thay $x = 35$ và $y = 20$ vào biểu thức lượng đường:
   $$20(35) + 30(20) = 700 + 600 = 1300 \text{ (g)}$$
   Vì $1300 > 1200$, lượng đường chuẩn bị **không đủ** (thiếu mất 100g).
