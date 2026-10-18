---
title: 'Toán 10 Bài 4: Hệ bất phương trình bậc nhất hai ẩn & Quy hoạch tuyến tính'
description: 'Lý thuyết chuẩn Toán 10 Bài 4: Hệ bất phương trình bậc nhất hai ẩn, biểu diễn miền đa giác nghiệm trên hệ trục Oxy, bài toán quy hoạch tuyến tính tối ưu hóa lợi nhuận, widget tương tác đồ họa và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Đại số 10
  - Hệ bất phương trình bậc nhất hai ẩn
  - Miền đa giác nghiệm
  - Quy hoạch tuyến tính
  - Giá trị lớn nhất nhỏ nhất
  - Kết nối tri thức
grade: 10
---

# Bài 4. Hệ bất phương trình bậc nhất hai ẩn

Nếu như ở Bài 3, một bất phương trình bậc nhất hai ẩn giúp ta kiểm soát một ràng buộc đơn lẻ (chẳng hạn như giới hạn về ngân sách), thì trong thế giới thực, một doanh nghiệp hay một nhà hoạch định chính sách luôn phải đối mặt với **hàng loạt ràng buộc cùng một lúc**:
- Số lượng nguyên liệu A không được vượt quá kho chứa.
- Số giờ công lao động của công nhân có hạn.
- Sản lượng tối thiểu mỗi ngày phải đáp ứng hợp đồng đã ký.
- Yêu cầu bảo vệ môi trường giới hạn lượng khí thải phát ra.

Khi gom tất cả các điều kiện ràng buộc đó lại, chúng ta có một **Hệ bất phương trình bậc nhất hai ẩn**.

Đặc biệt, Bài 4 sẽ mở ra cánh cửa dẫn đến một trong những nhánh toán học ứng dụng vĩ đại nhất của thế kỷ XX — **Quy hoạch tuyến tính (Linear Programming)** — công cụ đã mang lại Giải Nobel Kinh tế năm 1975 cho hai nhà toán học Leonid Kantorovich và Tjalling Koopmans nhờ phát minh phương pháp phân bổ tối ưu các nguồn lực kinh tế!

---

## 1. Sơ đồ tư duy toàn diện: Hệ BPT & Quy hoạch tuyến tính

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Định nghĩa Hệ BPT</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Gồm hai hay nhiều BPT bậc nhất hai ẩn $x, y$.<br>
      • Cặp $(x_0; y_0)$ là nghiệm khi và chỉ khi nó là nghiệm chung của <strong>tất cả</strong> các BPT trong hệ.<br>
      • Điều kiện thực tế thường có: $x \ge 0, y \ge 0$.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Miền nghiệm hình học</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • Là <strong>giao</strong> của các miền nghiệm của từng BPT.<br>
      • Thường có dạng một <strong>miền đa giác lồi</strong> (tam giác, tứ giác, ngũ giác) hoặc miền không bị chặn.<br>
      • Đỉnh của đa giác là giao điểm của các đường thẳng bờ.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Định lý cực trị đỉnh</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • Cho hàm mục tiêu $F(x, y) = ax + by$.<br>
      • Nếu miền nghiệm là đa giác lồi $A_1 A_2 \dots A_n$ (kể cả biên), thì <strong>GTLN và GTNN của $F(x, y)$ luôn đạt tại một trong các đỉnh $A_i$</strong>.<br>
      • Không cần kiểm tra vô số điểm bên trong đa giác!
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Quy trình tối ưu 4 bước</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • <strong>Bước 1:</strong> Đặt ẩn $x, y$ & lập hệ ràng buộc.<br>
      • <strong>Bước 2:</strong> Vẽ miền nghiệm trên $Oxy$ & tìm tọa độ các đỉnh.<br>
      • <strong>Bước 3:</strong> Tính giá trị hàm mục tiêu tại từng đỉnh.<br>
      • <strong>Bước 4:</strong> Kết luận phương án tối ưu nhất.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Cặp số $(1; 1)$ có là nghiệm của hệ $\left\{\begin{array}{l} x + y \le 3 \\ 2x - y \ge 0 \end{array}\right.$ không?**  
   *Đáp án:* Có, vì $1 + 1 = 2 \le 3$ (đúng) và $2(1) - 1 = 1 \ge 0$ (đúng). Cả hai BPT đều thỏa mãn.
2. **Miền nghiệm của hệ $\left\{\begin{array}{l} x \ge 0 \\ y \ge 0 \end{array}\right.$ trên mặt phẳng $Oxy$ là vùng nào?**  
   *Đáp án:* Góc phần tư thứ I của mặt phẳng tọa độ (kể cả hai tia $Ox$ và $Oy$).
3. **Nếu một hệ BPT có miền nghiệm là một tam giác, ta cần tính giá trị hàm mục tiêu tại bao nhiêu điểm để tìm GTLN?**  
   *Đáp án:* Đúng 3 điểm (tọa độ 3 đỉnh của tam giác).
4. **Hệ BPT $\left\{\begin{array}{l} x + y \le 2 \\ x + y \ge 5 \end{array}\right.$ có nghiệm không?**  
   *Đáp án:* Vô nghiệm, vì không có cặp số $(x; y)$ nào mà tổng $x + y$ vừa nhỏ hơn hoặc bằng 2 lại vừa lớn hơn hoặc bằng 5.
5. **Đỉnh của miền đa giác nghiệm được xác định bằng cách nào?**  
   *Đáp án:* Giải hệ phương trình tạo bởi hai đường thẳng bờ tương ứng cắt nhau tại đỉnh đó.

---

## 3. Lý thuyết trọng tâm

### 3.1. Khái niệm hệ bất phương trình bậc nhất hai ẩn

- **Định nghĩa:** Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn $x, y$.
  Mỗi bất phương trình trong hệ có dạng $ax + by \le c$ (hoặc $<, \ge, >$).
- **Nghiệm của hệ:** Cặp số $(x_0; y_0)$ là một **nghiệm** của hệ nếu nó đồng thời là nghiệm của tất cả các bất phương trình trong hệ.
- **Miền nghiệm:** Miền nghiệm của hệ là **giao của các miền nghiệm** của các bất phương trình thành phần.

---

### 3.2. Phương pháp biểu diễn miền nghiệm của hệ trên $Oxy$

Để biểu diễn miền nghiệm của hệ trên mặt phẳng tọa độ $Oxy$:
1. Trên cùng một hệ trục tọa độ $Oxy$, lần lượt vẽ các đường thẳng bờ của từng bất phương trình.
2. Với mỗi bất phương trình, xác định nửa mặt phẳng không phải là miền nghiệm (bằng phương pháp điểm thử) và **gạch bỏ** phần đó đi.
3. Phần mặt phẳng **trắng (không bị gạch)** cùng với các đoạn biên thích hợp chính là miền nghiệm cần tìm.

> [!WARNING]
> Cần phân biệt rõ nét liền (được tính vào miền nghiệm) và nét đứt (không được tính vào miền nghiệm). Khi tính tọa độ đỉnh, nếu đỉnh nằm trên một đường nét đứt thì giá trị tại đỉnh đó không thể đạt được dưới dạng GTLN/GTNN thực sự (chỉ là cận trên/cận dưới).

---

### 3.3. Bài toán Quy hoạch tuyến tính & Định lý Cực trị tại Đỉnh

Trong thực tế sản xuất và quản trị, ta thường gặp bài toán:  
Tìm cặp số $(x; y)$ thuộc miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn sao cho biểu thức mục tiêu:
$$F(x; y) = ax + by$$
đạt **Giá trị Lớn Nhất (GTLN)** hoặc **Giá trị Nhỏ Nhất (GTNN)**.

> [!NOTE]
> **ĐỊNH LÝ CƠ BẢN CỦA QUY HOẠCH TUYẾN TÍNH:**  
> Nếu miền nghiệm của hệ bất phương trình bậc nhất hai ẩn là một **đa giác lồi** (tức là miền đa giác bị chặn, kể cả biên), thì hàm số $F(x, y) = ax + by$ luôn đạt giá trị lớn nhất và giá trị nhỏ nhất tại **ít nhất một trong các đỉnh** của miền đa giác đó.

#### Ý nghĩa trực quan hình học:
Đường thẳng mức $d_c: ax + by = c$ có phương không đổi với vectơ pháp tuyến $\vec{n} = (a; b)$. Khi hằng số $c$ tăng hoặc giảm, đường thẳng $d_c$ tịnh tiến song song với chính nó.
Điểm cuối cùng mà đường thẳng $d_c$ còn chạm vào miền đa giác trước khi rời khỏi nó luôn luôn là một trong các đỉnh (hoặc cả một cạnh nối hai đỉnh nếu đường thẳng song song với cạnh đó).

---

## 4. Khảo sát trực quan: Điểm thuộc miền nghiệm & Giá trị hàm mục tiêu

Khảo sát hệ bất phương trình bậc nhất hai ẩn kinh điển:
$$\left\{\begin{array}{l} x \ge 0 \\ y \ge 0 \\ x + y \le 6 \\ 2x + y \le 8 \end{array}\right.$$
và hàm mục tiêu lợi nhuận: $F(x, y) = 3x + 2y.$

Miền nghiệm của hệ là miền tứ giác cố định trên mặt phẳng tọa độ $Oxy$ với các đỉnh:
$$O(0; 0), \quad A(4; 0), \quad B(2; 4), \quad C(0; 6)$$

Em hãy kéo rê điểm (x; y)$ bên dưới (hoặc điều chỉnh thanh trượt , y$) để quan sát giá trị hàm mục tiêu (x, y) = 3x + 2y$ thay đổi theo vị trí của điểm $:

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px; margin: 20px 0; font-family: system-ui, sans-serif;">
<div style="text-align: center; margin-bottom: 14px;">
<span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 13px; padding: 4px 10px; border-radius: 6px; margin-bottom: 8px;">Hàm mục tiêu: F(x, y) = 3x + 2y</span>
<div style="display: flex; justify-content: center; align-items: center; gap: 16px; flex-wrap: wrap;">
<div style="font-size: 15px; color: #1e293b;">Tọa độ: <strong id="mCoordText" style="color: #0f172a; font-family: monospace;">M(2.0; 4.0)</strong></div>
<div style="font-size: 18px; font-weight: 800; color: #0284c7;">F(x, y) = <span id="mValF" style="color: #dc2626; font-size: 22px;">14.0</span></div>
</div>
<div id="mStatusBadge" style="margin-top: 8px; display: inline-block; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 20px; background: #dcfce7; color: #15803d; border: 1px solid #86efac;">
★ Đỉnh B(2; 4) — Đạt Giá Trị Lớn Nhất F_max = 14!
</div>
</div>
<div style="display: flex; justify-content: center;">
<svg id="lpInteractiveSvg" data-interactive-done="true" viewBox="-15 -15 270 240" style="width: 100%; max-width: 400px; height: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; touch-action: none; cursor: crosshair;">
<g stroke="#f1f5f9" stroke-width="0.8" style="pointer-events: none;">
<line x1="40" y1="160" x2="220" y2="160" /><line x1="40" y1="140" x2="220" y2="140" />
<line x1="40" y1="120" x2="220" y2="120" /><line x1="40" y1="100" x2="220" y2="100" />
<line x1="40" y1="80" x2="220" y2="80" /><line x1="40" y1="60" x2="220" y2="60" />
<line x1="40" y1="40" x2="220" y2="40" /><line x1="40" y1="20" x2="220" y2="20" />
<line x1="60" y1="20" x2="60" y2="180" /><line x1="80" y1="20" x2="80" y2="180" />
<line x1="100" y1="20" x2="100" y2="180" /><line x1="120" y1="20" x2="120" y2="180" />
<line x1="140" y1="20" x2="140" y2="180" /><line x1="160" y1="20" x2="160" y2="180" />
<line x1="180" y1="20" x2="180" y2="180" /><line x1="200" y1="20" x2="200" y2="180" />
</g>
<line x1="15" y1="180" x2="235" y2="180" stroke="#334155" stroke-width="1.8" style="pointer-events: none;" />
<polygon points="235,180 227,176 227,184" fill="#334155" style="pointer-events: none;" />
<text x="230" y="196" font-size="11" font-weight="bold" fill="#334155" style="pointer-events: none;">x</text>
<line x1="40" y1="195" x2="40" y2="15" stroke="#334155" stroke-width="1.8" style="pointer-events: none;" />
<polygon points="40,15 36,23 44,23" fill="#334155" style="pointer-events: none;" />
<text x="24" y="22" font-size="11" font-weight="bold" fill="#334155" style="pointer-events: none;">y</text>
<text x="26" y="194" font-size="11" font-weight="bold" fill="#64748b" style="pointer-events: none;">O</text>
<text x="80" y="193" font-size="9" fill="#94a3b8" text-anchor="middle" style="pointer-events: none;">2</text>
<text x="120" y="193" font-size="9" fill="#94a3b8" text-anchor="middle" style="pointer-events: none;">4</text>
<text x="160" y="193" font-size="9" fill="#94a3b8" text-anchor="middle" style="pointer-events: none;">6</text>
<text x="200" y="193" font-size="9" fill="#94a3b8" text-anchor="middle" style="pointer-events: none;">8</text>
<text x="32" y="143" font-size="9" fill="#94a3b8" text-anchor="end" style="pointer-events: none;">2</text>
<text x="32" y="103" font-size="9" fill="#94a3b8" text-anchor="end" style="pointer-events: none;">4</text>
<text x="32" y="63" font-size="9" fill="#94a3b8" text-anchor="end" style="pointer-events: none;">6</text>
<text x="32" y="23" font-size="9" fill="#94a3b8" text-anchor="end" style="pointer-events: none;">8</text>
<line x1="20" y1="40" x2="180" y2="200" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,2" style="pointer-events: none;" />
<text x="165" y="165" font-size="9" font-weight="bold" fill="#2563eb" style="pointer-events: none;">d₁: x+y=6</text>
<line x1="30" y1="0" x2="135" y2="210" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,2" style="pointer-events: none;" />
<text x="50" y="30" font-size="9" font-weight="bold" fill="#7c3aed" style="pointer-events: none;">d₂: 2x+y=8</text>
<polygon points="40,180 120,180 80,100 40,60" fill="#38bdf8" fill-opacity="0.32" stroke="#0284c7" stroke-width="2" style="pointer-events: none;" />
<circle cx="40" cy="180" r="3.5" fill="#0f172a" style="pointer-events: none;" /><text x="44" y="174" font-size="9" font-weight="bold" fill="#0f172a" style="pointer-events: none;">O(0;0)</text>
<circle cx="120" cy="180" r="3.5" fill="#0f172a" style="pointer-events: none;" /><text x="122" y="174" font-size="9" font-weight="bold" fill="#0f172a" style="pointer-events: none;">A(4;0)</text>
<circle cx="80" cy="100" r="4.5" fill="#e11d48" style="pointer-events: none;" /><text x="85" y="96" font-size="10" font-weight="bold" fill="#e11d48" style="pointer-events: none;">B(2;4) ★ MAX</text>
<circle cx="40" cy="60" r="3.5" fill="#0f172a" style="pointer-events: none;" /><text x="45" y="58" font-size="9" font-weight="bold" fill="#0f172a" style="pointer-events: none;">C(0;6)</text>
<line id="mProjX" x1="80" y1="100" x2="80" y2="180" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="3,2" style="pointer-events: none;" />
<line id="mProjY" x1="80" y1="100" x2="40" y2="100" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="3,2" style="pointer-events: none;" />
<circle id="dragM" cx="80" cy="100" r="7" fill="#f43f5e" stroke="#ffffff" stroke-width="2" style="cursor: grab;" />
<circle id="dragMHit" cx="80" cy="100" r="24" fill="transparent" style="cursor: grab;" />
<text id="dragMLabel" x="85" y="92" font-size="11" font-weight="bold" fill="#be123c" style="pointer-events: none;">M(2.0; 4.0)</text>
</svg>
</div>
<div style="margin-top: 14px; max-width: 420px; margin-inline: auto;">
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
<div>
<label for="rangeX" style="font-size: 12px; font-weight: 700; color: #475569; display: flex; justify-content: space-between;">
<span>Hoành độ x:</span><span id="labelX" style="color: #2563eb;">2.0</span>
</label>
<input type="range" id="rangeX" min="0" max="4.5" step="0.1" value="2.0" style="width: 100%; accent-color: #2563eb; cursor: pointer;" />
</div>
<div>
<label for="rangeY" style="font-size: 12px; font-weight: 700; color: #475569; display: flex; justify-content: space-between;">
<span>Tung độ y:</span><span id="labelY" style="color: #7c3aed;">4.0</span>
</label>
<input type="range" id="rangeY" min="0" max="6.5" step="0.1" value="4.0" style="width: 100%; accent-color: #7c3aed; cursor: pointer;" />
</div>
</div>
<div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
<button type="button" class="vertex-btn" data-x="0" data-y="0" style="padding: 4px 8px; font-size: 12px; font-weight: 600; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">Đỉnh O(0; 0)</button>
<button type="button" class="vertex-btn" data-x="4" data-y="0" style="padding: 4px 8px; font-size: 12px; font-weight: 600; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">Đỉnh A(4; 0)</button>
<button type="button" class="vertex-btn" data-x="2" data-y="4" style="padding: 4px 8px; font-size: 12px; font-weight: 700; background: #ffe4e6; color: #be123c; border: 1px solid #f43f5e; border-radius: 6px; cursor: pointer;">Đỉnh B(2; 4) ★ MAX</button>
<button type="button" class="vertex-btn" data-x="0" data-y="6" style="padding: 4px 8px; font-size: 12px; font-weight: 600; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">Đỉnh C(0; 6)</button>
</div>
</div>
</div>
<script>
(function() {
  var svg = document.getElementById('lpInteractiveSvg');
  var pt = document.getElementById('dragM');
  var hit = document.getElementById('dragMHit');
  var lbl = document.getElementById('dragMLabel');
  var projX = document.getElementById('mProjX');
  var projY = document.getElementById('mProjY');
  var rangeX = document.getElementById('rangeX');
  var rangeY = document.getElementById('rangeY');
  var labelX = document.getElementById('labelX');
  var labelY = document.getElementById('labelY');
  var coordText = document.getElementById('mCoordText');
  var valFText = document.getElementById('mValF');
  var statusBadge = document.getElementById('mStatusBadge');
  if (!svg || !pt) return;
  var originX = 40;
  var originY = 180;
  var scale = 20;
  function setM(x, y) {
    x = Math.max(0, Math.min(4.5, Math.round(x * 10) / 10));
    y = Math.max(0, Math.min(6.5, Math.round(y * 10) / 10));
    var svgX = originX + x * scale;
    var svgY = originY - y * scale;
    pt.setAttribute('cx', svgX);
    pt.setAttribute('cy', svgY);
    if (hit) {
      hit.setAttribute('cx', svgX);
      hit.setAttribute('cy', svgY);
    }
    lbl.setAttribute('x', svgX + 6);
    lbl.setAttribute('y', svgY - 6);
    lbl.textContent = 'M(' + x.toFixed(1) + '; ' + y.toFixed(1) + ')';
    projX.setAttribute('x1', svgX);
    projX.setAttribute('y1', svgY);
    projX.setAttribute('x2', svgX);
    projX.setAttribute('y2', originY);
    projY.setAttribute('x1', svgX);
    projY.setAttribute('y1', svgY);
    projY.setAttribute('x2', originX);
    projY.setAttribute('y2', svgY);
    rangeX.value = x;
    rangeY.value = y;
    labelX.textContent = x.toFixed(1);
    labelY.textContent = y.toFixed(1);
    coordText.textContent = 'M(' + x.toFixed(1) + '; ' + y.toFixed(1) + ')';
    var f = 3 * x + 2 * y;
    valFText.textContent = f.toFixed(1);
    var inside = (x >= 0) && (y >= 0) && (x + y <= 6.01) && (2 * x + y <= 8.01);
    if (Math.abs(x - 2) < 0.05 && Math.abs(y - 4) < 0.05) {
      statusBadge.style.background = '#ffe4e6';
      statusBadge.style.color = '#be123c';
      statusBadge.style.borderColor = '#f43f5e';
      statusBadge.textContent = '★ Đỉnh B(2; 4) — Đạt Giá Trị Lớn Nhất F_max = 14!';
    } else if (Math.abs(x - 0) < 0.05 && Math.abs(y - 0) < 0.05) {
      statusBadge.style.background = '#f1f5f9';
      statusBadge.style.color = '#334155';
      statusBadge.style.borderColor = '#94a3b8';
      statusBadge.textContent = '• Gốc O(0; 0) — Đạt Giá Trị Nhỏ Nhất F_min = 0';
    } else if (inside) {
      statusBadge.style.background = '#dcfce7';
      statusBadge.style.color = '#15803d';
      statusBadge.style.borderColor = '#86efac';
      statusBadge.textContent = '✔ Điểm M thuộc miền nghiệm khả thi';
    } else {
      statusBadge.style.background = '#fee2e2';
      statusBadge.style.color = '#b91c1c';
      statusBadge.style.borderColor = '#fca5a5';
      statusBadge.textContent = '✖ Điểm M nằm NGOÀI miền nghiệm (Không thỏa mãn)';
    }
  }
  rangeX.addEventListener('input', function() {
    setM(parseFloat(rangeX.value), parseFloat(rangeY.value));
  });
  rangeY.addEventListener('input', function() {
    setM(parseFloat(rangeX.value), parseFloat(rangeY.value));
  });
  document.querySelectorAll('.vertex-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setM(parseFloat(btn.dataset.x), parseFloat(btn.dataset.y));
    });
  });
  var isDragging = false;
  function getMathCoord(evt) {
    var clientX = evt.clientX;
    var clientY = evt.clientY;
    if (evt.touches && evt.touches.length > 0) {
      clientX = evt.touches[0].clientX;
      clientY = evt.touches[0].clientY;
    } else if (evt.changedTouches && evt.changedTouches.length > 0) {
      clientX = evt.changedTouches[0].clientX;
      clientY = evt.changedTouches[0].clientY;
    }
    if (clientX === undefined || clientY === undefined) return null;
    var ptSVG = svg.createSVGPoint();
    ptSVG.x = clientX;
    ptSVG.y = clientY;
    var ctm = svg.getScreenCTM();
    if (!ctm) return null;
    var transformed = ptSVG.matrixTransform(ctm.inverse());
    var mathX = (transformed.x - originX) / scale;
    var mathY = (originY - transformed.y) / scale;
    return { x: mathX, y: mathY };
  }
  function handleStart(e) {
    isDragging = true;
    pt.style.cursor = 'grabbing';
    if (hit) hit.style.cursor = 'grabbing';
    try {
      if (e.target && e.target.setPointerCapture) {
        e.target.setPointerCapture(e.pointerId);
      }
    } catch(err) {}
    var c = getMathCoord(e);
    if (c) setM(c.x, c.y);
  }
  function handleMove(e) {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();
    var c = getMathCoord(e);
    if (c) setM(c.x, c.y);
  }
  function handleEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    pt.style.cursor = 'grab';
    if (hit) hit.style.cursor = 'grab';
    try {
      if (e.target && e.target.releasePointerCapture) {
        e.target.releasePointerCapture(e.pointerId);
      }
    } catch(err) {}
  }
  svg.addEventListener('pointerdown', handleStart);
  window.addEventListener('pointermove', handleMove);
  window.addEventListener('pointerup', handleEnd);
  window.addEventListener('pointercancel', handleEnd);
  // Mouse fallback
  svg.addEventListener('mousedown', function(e) {
    isDragging = true;
    var c = getMathCoord(e);
    if (c) setM(c.x, c.y);
  });
  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var c = getMathCoord(e);
    if (c) setM(c.x, c.y);
  });
  window.addEventListener('mouseup', function() {
    isDragging = false;
  });
  // Touch fallback
  svg.addEventListener('touchstart', function(e) {
    isDragging = true;
    var c = getMathCoord(e);
    if (c) setM(c.x, c.y);
  }, { passive: false });
  window.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();
    var c = getMathCoord(e);
    if (c) setM(c.x, c.y);
  }, { passive: false });
  window.addEventListener('touchend', function() {
    isDragging = false;
  });
  setM(2, 4);
})();
</script>


---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Kiểm tra điểm thuộc miền nghiệm của hệ bất phương trình

#### Phương pháp:
Thay tọa độ điểm $(x_0; y_0)$ vào **tất cả** các bất phương trình trong hệ:
- Nếu tất cả các bất đẳng thức đều đúng, thì điểm thuộc miền nghiệm.
- Chỉ cần một bất đẳng thức sai, kết luận ngay điểm đó **không** thuộc miền nghiệm.

---

#### Bài toán 1
Cho hệ bất phương trình:
$$\left\{\begin{array}{l} 2x + 3y \le 12 \\ x - y \ge -1 \\ x \ge 0 \\ y \ge 0 \end{array}\right.$$
Kiểm tra xem các điểm sau có thuộc miền nghiệm của hệ không: $M(1; 2), N(3; 3), P(0; 4)$ và $Q(4; 2)$.

**Lời giải chi tiết:**

- **Với điểm $M(1; 2)$:**
  - $2(1) + 3(2) = 8 \le 12$ (Đúng).
  - $1 - 2 = -1 \ge -1$ (Đúng).
  - $1 \ge 0$ và $2 \ge 0$ (Đúng).  
  Vì thỏa mãn cả 4 bất phương trình, **$M(1; 2)$ thuộc miền nghiệm**.

- **Với điểm $N(3; 3)$:**
  - $2(3) + 3(3) = 15 \le 12$ (Sai).  
  Do vi phạm bất phương trình đầu tiên, **$N(3; 3)$ không thuộc miền nghiệm**.

- **Với điểm $P(0; 4)$:**
  - $2(0) + 3(4) = 12 \le 12$ (Đúng).
  - $0 - 4 = -4 \ge -1$ (Sai, vì $-4 < -1$).  
  Do đó, **$P(0; 4)$ không thuộc miền nghiệm**.

- **Với điểm $Q(4; 2)$:**
  - $2(4) + 3(2) = 14 \le 12$ (Sai).  
  Do đó, **$Q(4; 2)$ không thuộc miền nghiệm**.

<div style="text-align: center; margin: 20px 0;">
<svg data-interactive-done="true" viewBox="-20 -20 280 230" style="width: 100%; max-width: 360px; height: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
<!-- Grid -->
<g stroke="#f1f5f9" stroke-width="0.8">
<line x1="40" y1="30" x2="240" y2="30" /><line x1="40" y1="55" x2="240" y2="55" />
<line x1="40" y1="80" x2="240" y2="80" /><line x1="40" y1="105" x2="240" y2="105" />
<line x1="40" y1="130" x2="240" y2="130" /><line x1="40" y1="155" x2="240" y2="155" />
<line x1="65" y1="20" x2="65" y2="180" /><line x1="90" y1="20" x2="90" y2="180" />
<line x1="115" y1="20" x2="115" y2="180" /><line x1="140" y1="20" x2="140" y2="180" />
<line x1="165" y1="20" x2="165" y2="180" /><line x1="190" y1="20" x2="190" y2="180" />
<line x1="215" y1="20" x2="215" y2="180" />
</g>
<!-- Axes: Origin (40, 180), 1 unit = 25px -->
<line x1="15" y1="180" x2="250" y2="180" stroke="#334155" stroke-width="1.8" />
<line x1="40" y1="195" x2="40" y2="15" stroke="#334155" stroke-width="1.8" />
<polygon points="250,180 242,176 242,184" fill="#334155" />
<polygon points="40,15 36,23 44,23" fill="#334155" />
<text x="245" y="195" font-size="11" font-weight="bold" fill="#334155">x</text>
<text x="26" y="22" font-size="11" font-weight="bold" fill="#334155">y</text>
<text x="26" y="194" font-size="11" font-weight="bold" fill="#64748b">O</text>
<!-- Boundary lines -->
<!-- d1: 2x + 3y = 12 -> (0; 4) at (40, 80), (6; 0) at (190, 180) -->
<line x1="25" y1="70" x2="205" y2="190" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="4,2" />
<text x="175" y="168" font-size="9" font-weight="bold" fill="#2563eb">d₁: 2x+3y=12</text>
<!-- d2: x - y = -1 -> (0; 1) at (40, 155), (-1; 0) at (15, 180), (3; 4) at (115, 80) -->
<line x1="15" y1="180" x2="135" y2="60" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="4,2" />
<text x="95" y="65" font-size="9" font-weight="bold" fill="#7c3aed">d₂: x-y=-1</text>
<!-- Feasible polygon OKIH: O(40,180), K(190,180), I(85,110), H(40,155) -->
<polygon points="40,180 190,180 85,110 40,155" fill="#38bdf8" fill-opacity="0.28" stroke="#0284c7" stroke-width="2" />
<!-- Vertices -->
<circle cx="40" cy="180" r="3.5" fill="#0f172a" />
<circle cx="190" cy="180" r="3.5" fill="#0f172a" />
<text x="185" y="194" font-size="9" font-weight="bold" fill="#0f172a">(6;0)</text>
<circle cx="85" cy="110" r="3.5" fill="#0f172a" />
<text x="89" y="106" font-size="9" font-weight="bold" fill="#0f172a">I(1.8; 2.8)</text>
<circle cx="40" cy="155" r="3.5" fill="#0f172a" />
<text x="14" y="158" font-size="9" font-weight="bold" fill="#0f172a">(0;1)</text>
<!-- Points M, N, P, Q -->
<!-- M(1; 2) -> (65, 130) inside (green) -->
<circle cx="65" cy="130" r="5" fill="#16a34a" />
<text x="73" y="133" font-size="10" font-weight="bold" fill="#16a34a">M(1; 2) ✔</text>
<!-- N(3; 3) -> (115, 105) outside (red) -->
<circle cx="115" cy="105" r="4.5" fill="#dc2626" />
<text x="122" y="108" font-size="9" font-weight="bold" fill="#dc2626">N(3; 3) ✖</text>
<!-- P(0; 4) -> (40, 80) outside (red) -->
<circle cx="40" cy="80" r="4.5" fill="#dc2626" />
<text x="47" y="83" font-size="9" font-weight="bold" fill="#dc2626">P(0; 4) ✖</text>
<!-- Q(4; 2) -> (140, 130) outside (red) -->
<circle cx="140" cy="130" r="4.5" fill="#dc2626" />
<text x="146" y="133" font-size="9" font-weight="bold" fill="#dc2626">Q(4; 2) ✖</text>
</svg>
<div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 4.1: Miền nghiệm tứ giác màu xanh và vị trí trực quan của các điểm M, N, P, Q</em></div>
</div>

---

### Dạng 2: Biểu diễn miền nghiệm, xác định tọa độ đỉnh và tính diện tích đa giác

#### Phương pháp:
1. Vẽ các đường thẳng bờ trên cùng mặt phẳng tọa độ $Oxy$.
2. Gạch bỏ phần không thỏa mãn của từng bất phương trình.
3. Xác định tọa độ các đỉnh bằng cách giải các hệ phương trình giao điểm của các cặp đường thẳng tương ứng.
4. Chia miền đa giác thành các tam giác hoặc hình thang vuông để tính diện tích.

---

#### Bài toán 2
Biểu diễn miền nghiệm của hệ bất phương trình sau trên mặt phẳng tọa độ $Oxy$:
$$\left\{\begin{array}{l} x - y \le 2 \\ x + 2y \le 8 \\ x \ge 0 \\ y \ge 0 \end{array}\right.$$
1. Xác định tọa độ các đỉnh của miền nghiệm.
2. Tính diện tích của miền nghiệm đó.

**Lời giải chi tiết:**

1. **Biểu diễn hình học & Tìm tọa độ các đỉnh:**
   - Điều kiện $x \ge 0, y \ge 0$ giới hạn miền nghiệm trong góc phần tư thứ nhất.
   - Vẽ đường thẳng $d_1: x - y = 2$ đi qua $(2; 0)$ và $(0; -2)$. Miền nghiệm $x - y \le 2$ chứa điểm $O(0; 0)$ vì $0 - 0 = 0 \le 2$.
   - Vẽ đường thẳng $d_2: x + 2y = 8$ đi qua $(8; 0)$ và $(0; 4)$. Miền nghiệm $x + 2y \le 8$ chứa điểm $O(0; 0)$ vì $0 + 2(0) = 0 \le 8$.

   Miền nghiệm của hệ là tứ giác $OABC$ với các đỉnh:
   - Gốc tọa độ: $O(0; 0)$.
   - Đỉnh $A$: Giao điểm của $d_1$ với trục hoành $y = 0 \Rightarrow x - 0 = 2 \Rightarrow A(2; 0)$.
   - Đỉnh $B$: Giao điểm của $d_1$ và $d_2$. Tọa độ của $B$ là nghiệm của hệ:
     $$\left\{\begin{array}{l} x - y = 2 \\ x + 2y = 8 \end{array}\right. \iff \left\{\begin{array}{l} 3y = 6 \\ x = y + 2 \end{array}\right. \iff \left\{\begin{array}{l} y = 2 \\ x = 4 \end{array}\right. \Rightarrow B(4; 2)$$
   - Đỉnh $C$: Giao điểm của $d_2$ với trục tung $x = 0 \Rightarrow 0 + 2y = 8 \Rightarrow C(0; 4)$.

2. **Tính diện tích tứ giác $OABC$:**
   Ta chia tứ giác $OABC$ thành hai tam giác vuông hoặc dùng hình thang:
   - Hạ $BH \perp Ox$ tại $H(4; 0)$.
   - Đoạn $OA = 2$, đoạn $AH = 4 - 2 = 2$, chiều cao $BH = 2$.
   - Diện tích tam giác $ABH$:
     $$S_{\triangle ABH} = \frac{1}{2} AH \cdot BH = \frac{1}{2} \cdot 2 \cdot 2 = 2$$
   - Diện tích hình thang vuông $OCHB$ (có hai đáy $OC = 4, BH = 2$, chiều cao $OH = 4$):
     $$S_{OCHB} = \frac{(OC + BH) \cdot OH}{2} = \frac{(4 + 2) \cdot 4}{2} = 12$$
   - Suy ra diện tích tứ giác $OABC$:
     $$S_{OABC} = S_{OCHB} - S_{\triangle ABH} = 12 - 2 = 10 \text{ (đơn vị diện tích)}$$

<div style="margin: 20px 0; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 340 220" style="max-width: 480px; width: 100%; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
<!-- Grid pattern -->
<defs>
<pattern id="grid2" width="25" height="25" patternUnits="userSpaceOnUse">
<path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" stroke-width="0.8" />
</pattern>
</defs>
<rect width="340" height="220" fill="url(#grid2)" />
<!-- Axes: Ox at y=175, Oy at x=45 -->
<line x1="25" y1="175" x2="315" y2="175" stroke="#475569" stroke-width="1.5" />
<polygon points="315,172 323,175 315,178" fill="#475569" />
<text x="316" y="190" font-size="12" font-style="italic" fill="#475569">x</text>
<line x1="45" y1="205" x2="45" y2="20" stroke="#475569" stroke-width="1.5" />
<polygon points="42,20 45,12 48,20" fill="#475569" />
<text x="32" y="18" font-size="12" font-style="italic" fill="#475569">y</text>
<text x="32" y="190" font-size="12" font-weight="bold" fill="#475569">O</text>
<!-- Ticks on Ox -->
<line x1="95" y1="172" x2="95" y2="178" stroke="#475569" stroke-width="1.2" />
<text x="92" y="190" font-size="10" fill="#64748b">2</text>
<line x1="145" y1="172" x2="145" y2="178" stroke="#475569" stroke-width="1.2" />
<text x="142" y="190" font-size="10" fill="#64748b">4</text>
<line x1="245" y1="172" x2="245" y2="178" stroke="#475569" stroke-width="1.2" />
<text x="242" y="190" font-size="10" fill="#64748b">8</text>
<!-- Ticks on Oy -->
<line x1="42" y1="125" x2="48" y2="125" stroke="#475569" stroke-width="1.2" />
<text x="28" y="129" font-size="10" fill="#64748b">2</text>
<line x1="42" y1="75" x2="48" y2="75" stroke="#475569" stroke-width="1.2" />
<text x="28" y="79" font-size="10" fill="#64748b">4</text>
<!-- Feasible polygon OABC: O(45,175), A(95,175), B(145,125), C(45,75) -->
<polygon points="45,175 95,175 145,125 45,75" fill="#38bdf8" fill-opacity="0.32" stroke="#0284c7" stroke-width="2" />
<!-- Subtraction Triangle ABH: A(95,175), H(145,175), B(145,125) with dashed outline -->
<polygon points="95,175 145,175 145,125" fill="#f43f5e" fill-opacity="0.12" stroke="#f43f5e" stroke-dasharray="3,3" stroke-width="1.5" />
<line x1="145" y1="125" x2="145" y2="175" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,3" />
<!-- Right angle mark at H(145, 175) -->
<path d="M 137 175 L 137 167 L 145 167" fill="none" stroke="#64748b" stroke-width="1" />
<!-- Boundary line d1: x - y = 2 -->
<line x1="75" y1="195" x2="185" y2="85" stroke="#2563eb" stroke-width="1.5" />
<text x="175" y="80" font-size="10" font-weight="bold" fill="#2563eb">d₁: x - y = 2</text>
<!-- Boundary line d2: x + 2y = 8 -->
<line x1="30" y1="68" x2="265" y2="185" stroke="#7c3aed" stroke-width="1.5" />
<text x="215" y="165" font-size="10" font-weight="bold" fill="#7c3aed">d₂: x + 2y = 8</text>
<!-- Vertices -->
<circle cx="45" cy="175" r="3.5" fill="#0f172a" />
<circle cx="95" cy="175" r="3.5" fill="#0f172a" />
<text x="86" y="166" font-size="10" font-weight="bold" fill="#0f172a">A(2;0)</text>
<circle cx="145" cy="125" r="4" fill="#0f172a" />
<text x="150" y="122" font-size="10" font-weight="bold" fill="#0f172a">B(4;2)</text>
<circle cx="45" cy="75" r="3.5" fill="#0f172a" />
<text x="50" y="72" font-size="10" font-weight="bold" fill="#0f172a">C(0;4)</text>
<circle cx="145" cy="175" r="3" fill="#64748b" />
<text x="148" y="168" font-size="9" font-style="italic" fill="#64748b">H(4;0)</text>
<!-- Area Annotation badge -->
<rect x="62" y="125" width="56" height="20" rx="4" fill="#ffffff" fill-opacity="0.88" stroke="#cbd5e1" stroke-width="0.8" />
<text x="67" y="139" font-size="10" font-weight="bold" fill="#0284c7">S = 10</text>
</svg>
<div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 4.2: Biểu diễn miền nghiệm tứ giác OABC và phương pháp phân rã diện tích thông qua hình thang vuông OCHB</em></div>
</div>

---

### Dạng 3: Tìm GTLN, GTNN của biểu thức $F(x, y) = ax + by$ trên miền đa giác

#### Phương pháp:
1. Xác định tọa độ tất cả các đỉnh $A_1, A_2, \dots, A_n$ của miền đa giác nghiệm.
2. Lần lượt tính giá trị $F(A_i) = ax_i + by_i$ tại từng đỉnh.
3. So sánh các giá trị:
   $$F_{\max} = \max \{F(A_1), F(A_2), \dots, F(A_n)\}$$
   $$F_{\min} = \min \{F(A_1), F(A_2), \dots, F(A_n)\}$$

---

#### Bài toán 3
Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x, y) = 4x + 3y$ với $(x; y)$ thỏa mãn hệ:
$$\left\{\begin{array}{l} x + y \le 5 \\ 2x - y \le 4 \\ x \ge 0 \\ y \ge 1 \end{array}\right.$$

**Lời giải chi tiết:**

- Xác định các đường thẳng bờ:
  - $d_1: x + y = 5$
  - $d_2: 2x - y = 4$
  - $d_3: x = 0$ (trục tung)
  - $d_4: y = 1$ (đường thẳng song song trục hoành)

- Tìm tọa độ các đỉnh của miền tứ giác nghiệm:
  - Đỉnh $A$ là giao của $d_3$ và $d_4$: $\left\{\begin{array}{l} x = 0 \\ y = 1 \end{array}\right. \Rightarrow A(0; 1)$.
  - Đỉnh $B$ là giao của $d_2$ và $d_4$: $\left\{\begin{array}{l} 2x - 1 = 4 \\ y = 1 \end{array}\right. \Rightarrow x = 2,5 \Rightarrow B(2,5; 1)$.
  - Đỉnh $C$ là giao của $d_1$ và $d_2$: $\left\{\begin{array}{l} x + y = 5 \\ 2x - y = 4 \end{array}\right. \iff \left\{\begin{array}{l} 3x = 9 \\ y = 5 - x \end{array}\right. \Rightarrow C(3; 2)$.
  - Đỉnh $D$ là giao của $d_1$ và $d_3$: $\left\{\begin{array}{l} 0 + y = 5 \\ x = 0 \end{array}\right. \Rightarrow D(0; 5)$.

- Tính giá trị của biểu thức $F(x, y) = 4x + 3y$ tại các đỉnh:
  - Tại $A(0; 1)$: $F(A) = 4(0) + 3(1) = 3$.
  - Tại $B(2,5; 1)$: $F(B) = 4(2,5) + 3(1) = 10 + 3 = 13$.
  - Tại $C(3; 2)$: $F(C) = 4(3) + 3(2) = 12 + 6 = 18$.
  - Tại $D(0; 5)$: $F(D) = 4(0) + 3(5) = 15$.

- Kết luận:
  - Giá trị lớn nhất: $F_{\max} = 18$ đạt được tại $(x; y) = (3; 2)$.
  - Giá trị nhỏ nhất: $F_{\min} = 3$ đạt được tại $(x; y) = (0; 1)$.

<div style="margin: 20px 0; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 350 230" style="max-width: 480px; width: 100%; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
<!-- Grid pattern -->
<defs>
<pattern id="grid3" width="26" height="26" patternUnits="userSpaceOnUse">
<path d="M 26 0 L 0 0 0 26" fill="none" stroke="#e2e8f0" stroke-width="0.8" />
</pattern>
</defs>
<rect width="350" height="230" fill="url(#grid3)" />
<!-- Axes: Ox at y=185, Oy at x=45 -->
<line x1="25" y1="185" x2="320" y2="185" stroke="#475569" stroke-width="1.5" />
<polygon points="320,182 328,185 320,188" fill="#475569" />
<text x="322" y="200" font-size="12" font-style="italic" fill="#475569">x</text>
<line x1="45" y1="215" x2="45" y2="18" stroke="#475569" stroke-width="1.5" />
<polygon points="42,18 45,10 48,18" fill="#475569" />
<text x="32" y="18" font-size="12" font-style="italic" fill="#475569">y</text>
<text x="32" y="200" font-size="12" font-weight="bold" fill="#475569">O</text>
<!-- Ticks on Ox -->
<line x1="110" y1="182" x2="110" y2="188" stroke="#475569" stroke-width="1.2" />
<text x="103" y="200" font-size="10" fill="#64748b">2.5</text>
<line x1="123" y1="182" x2="123" y2="188" stroke="#475569" stroke-width="1.2" />
<text x="120" y="200" font-size="10" fill="#64748b">3</text>
<line x1="175" y1="182" x2="175" y2="188" stroke="#475569" stroke-width="1.2" />
<text x="172" y="200" font-size="10" fill="#64748b">5</text>
<!-- Ticks on Oy -->
<line x1="42" y1="159" x2="48" y2="159" stroke="#475569" stroke-width="1.2" />
<text x="30" y="163" font-size="10" fill="#64748b">1</text>
<line x1="42" y1="133" x2="48" y2="133" stroke="#475569" stroke-width="1.2" />
<text x="30" y="137" font-size="10" fill="#64748b">2</text>
<line x1="42" y1="55" x2="48" y2="55" stroke="#475569" stroke-width="1.2" />
<text x="30" y="59" font-size="10" fill="#64748b">5</text>
<!-- Feasible polygon ABCD: A(45,159), B(110,159), C(123,133), D(45,55) -->
<polygon points="45,159 110,159 123,133 45,55" fill="#38bdf8" fill-opacity="0.32" stroke="#0284c7" stroke-width="2" />
<!-- Boundary lines -->
<!-- d4: y = 1 -->
<line x1="25" y1="159" x2="160" y2="159" stroke="#0d9488" stroke-width="1.2" stroke-dasharray="4,2" />
<text x="165" y="162" font-size="10" font-weight="bold" fill="#0d9488">y = 1</text>
<!-- d1: x + y = 5 -->
<line x1="32" y1="42" x2="188" y2="198" stroke="#2563eb" stroke-width="1.5" />
<text x="180" y="180" font-size="10" font-weight="bold" fill="#2563eb">d₁: x + y = 5</text>
<!-- d2: 2x - y = 4 -->
<line x1="90" y1="195" x2="140" y2="95" stroke="#7c3aed" stroke-width="1.5" />
<text x="135" y="90" font-size="10" font-weight="bold" fill="#7c3aed">d₂: 2x - y = 4</text>
<!-- Level lines (Đường mức) -->
<!-- F_min = 3: 4x + 3y = 3 through A(45, 159) -->
<line x1="27" y1="135" x2="75" y2="199" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,3" />
<!-- F_max = 18: 4x + 3y = 18 through C(123, 133) -->
<line x1="38" y1="20" x2="178" y2="207" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3" />
<!-- Vertices -->
<circle cx="45" cy="159" r="4.5" fill="#16a34a" />
<text x="52" y="155" font-size="10" font-weight="bold" fill="#16a34a">A(0; 1) [F_min = 3]</text>
<circle cx="110" cy="159" r="3.5" fill="#0f172a" />
<text x="112" y="173" font-size="10" font-weight="bold" fill="#0f172a">B(2.5; 1)</text>
<circle cx="123" cy="133" r="5" fill="#dc2626" />
<text x="130" y="130" font-size="10" font-weight="bold" fill="#dc2626">C(3; 2) [F_max = 18]</text>
<circle cx="45" cy="55" r="3.5" fill="#0f172a" />
<text x="52" y="52" font-size="10" font-weight="bold" fill="#0f172a">D(0; 5) [F = 15]</text>
</svg>
<div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 4.3: Miền nghiệm tứ giác ABCD và các đường mức F = 4x + 3y đạt cực tiểu tại A(0;1) và cực đại tại C(3;2)</em></div>
</div>

---

### Dạng 4: Bài toán tối ưu hóa nguồn lực trong thực tế sản xuất & kinh doanh

#### Phương pháp:
1. **Lập bảng số liệu:** Liệt kê các đại lượng, chi phí, doanh thu, định mức.
2. **Đặt ẩn số & Tìm miền ràng buộc:** Gọi $x, y$ là số lượng cần sản xuất, lập hệ bất phương trình bậc nhất hai ẩn.
3. **Thiết lập hàm mục tiêu:** Hàm lợi nhuận hoặc hàm chi phí $F(x, y)$.
4. **Tìm cực trị tại đỉnh** và trả lời câu hỏi bài toán với đơn vị thực tế.

---

#### Bài toán 4
Một xưởng may sản xuất hai loại áo: áo sơ mi (loại I) và áo khoác (loại II).
- Để may 1 chiếc áo loại I cần 2 mét vải và 3 giờ công. Lợi nhuận mang lại là 120 000 đồng/chiếc.
- Để may 1 chiếc áo loại II cần 3 mét vải và 2 giờ công. Lợi nhuận mang lại là 150 000 đồng/chiếc.
- Mỗi ngày xưởng chỉ có tối đa 60 mét vải và 60 giờ công lao động.

Hỏi xưởng may cần sản xuất bao nhiêu chiếc áo mỗi loại trong một ngày để thu được lợi nhuận lớn nhất? Lợi nhuận tối đa đó là bao nhiêu?

**Lời giải chi tiết:**

- **Bước 1: Gọi ẩn & Đặt điều kiện:**  
  Gọi $x$ là số áo loại I và $y$ là số áo loại II may trong một ngày ($x, y \ge 0, x, y \in \mathbb{N}$).

- **Bước 2: Thiết lập hệ bất phương trình ràng buộc:**
  - Lượng vải sử dụng: $2x + 3y \le 60$ (mét).
  - Số giờ công sử dụng: $3x + 2y \le 60$ (giờ).
  - Điều kiện không âm: $x \ge 0, y \ge 0$.

  Ta có hệ bất phương trình:
  $$\left\{\begin{array}{l} 2x + 3y \le 60 \\ 3x + 2y \le 60 \\ x \ge 0 \\ y \ge 0 \end{array}\right.$$

- **Bước 3: Xác định các đỉnh của miền nghiệm:**  
  Miền nghiệm là tứ giác $OABC$ nằm trong góc phần tư thứ I:
  - $O(0; 0)$.
  - $A(20; 0)$: Giao của đường $3x + 2y = 60$ với trục hoành ($y = 0 \Rightarrow x = 20$).
  - $B(12; 12)$: Nghiệm của hệ $\left\{\begin{array}{l} 2x + 3y = 60 \\ 3x + 2y = 60 \end{array}\right. \iff x = y = 12$.
  - $C(0; 20)$: Giao của đường $2x + 3y = 60$ với trục tung ($x = 0 \Rightarrow y = 20$).

- **Bước 4: Tính lợi nhuận tại các đỉnh:**  
  Hàm mục tiêu lợi nhuận (đơn vị: nghìn đồng):
  $$L(x, y) = 120x + 150y$$
  - Tại $O(0; 0)$: $L(O) = 0$.
  - Tại $A(20; 0)$: $L(A) = 120(20) + 150(0) = 2400$ (nghìn đồng).
  - Tại $B(12; 12)$: $L(B) = 120(12) + 150(12) = 1440 + 1800 = 3240$ (nghìn đồng).
  - Tại $C(0; 20)$: $L(C) = 120(0) + 150(20) = 3000$ (nghìn đồng).

- **Kết luận:**  
  Xưởng may cần sản xuất **12 chiếc áo loại I** và **12 chiếc áo loại II** mỗi ngày để đạt lợi nhuận lớn nhất là **3 240 000 đồng**.

<div style="margin: 20px 0; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 350 230" style="max-width: 480px; width: 100%; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
<!-- Grid pattern -->
<defs>
<pattern id="grid4" width="25" height="25" patternUnits="userSpaceOnUse">
<path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" stroke-width="0.8" />
</pattern>
</defs>
<rect width="350" height="230" fill="url(#grid4)" />
<!-- Axes: Ox at y=185, Oy at x=45 -->
<line x1="25" y1="185" x2="320" y2="185" stroke="#475569" stroke-width="1.5" />
<polygon points="320,182 328,185 320,188" fill="#475569" />
<text x="346" y="200" text-anchor="end" font-size="12" font-style="italic" fill="#475569">x (áo I)</text>
<line x1="45" y1="215" x2="45" y2="18" stroke="#475569" stroke-width="1.5" />
<polygon points="42,18 45,10 48,18" fill="#475569" />
<text x="24" y="18" font-size="12" font-style="italic" fill="#475569">y (áo II)</text>
<text x="32" y="200" font-size="12" font-weight="bold" fill="#475569">O</text>
<!-- Ticks on Ox -->
<line x1="105" y1="182" x2="105" y2="188" stroke="#475569" stroke-width="1.2" />
<text x="100" y="200" font-size="10" fill="#64748b">12</text>
<line x1="145" y1="182" x2="145" y2="188" stroke="#475569" stroke-width="1.2" />
<text x="140" y="200" font-size="10" fill="#64748b">20</text>
<line x1="195" y1="182" x2="195" y2="188" stroke="#475569" stroke-width="1.2" />
<text x="190" y="200" font-size="10" fill="#64748b">30</text>
<!-- Ticks on Oy -->
<line x1="42" y1="125" x2="48" y2="125" stroke="#475569" stroke-width="1.2" />
<text x="26" y="129" font-size="10" fill="#64748b">12</text>
<line x1="42" y1="85" x2="48" y2="85" stroke="#475569" stroke-width="1.2" />
<text x="26" y="89" font-size="10" fill="#64748b">20</text>
<line x1="42" y1="35" x2="48" y2="35" stroke="#475569" stroke-width="1.2" />
<text x="26" y="39" font-size="10" fill="#64748b">30</text>
<!-- Feasible polygon OABC: O(45,185), A(145,185), B(105,125), C(45,85) -->
<polygon points="45,185 145,185 105,125 45,85" fill="#38bdf8" fill-opacity="0.32" stroke="#0284c7" stroke-width="2" />
<!-- Dashed projection for B(12; 12) -->
<line x1="105" y1="125" x2="105" y2="185" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
<line x1="45" y1="125" x2="105" y2="125" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
<!-- Boundary lines -->
<!-- d1: 2x + 3y = 60 (vải) -->
<line x1="35" y1="78" x2="210" y2="195" stroke="#2563eb" stroke-width="1.5" />
<text x="195" y="175" font-size="10" font-weight="bold" fill="#2563eb">2x + 3y = 60</text>
<!-- d2: 3x + 2y = 60 (giờ công) -->
<line x1="40" y1="27" x2="155" y2="200" stroke="#7c3aed" stroke-width="1.5" />
<text x="110" y="45" font-size="10" font-weight="bold" fill="#7c3aed">3x + 2y = 60</text>
<!-- Objective level line: 120x + 150y = 3240 (amber dashed) -->
<line x1="35" y1="69" x2="195" y2="197" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="4,3" />
<!-- Vertices -->
<circle cx="45" cy="185" r="3.5" fill="#0f172a" />
<circle cx="145" cy="185" r="3.5" fill="#0f172a" />
<text x="140" y="175" font-size="10" font-weight="bold" fill="#0f172a">A(20; 0)</text>
<circle cx="45" cy="85" r="3.5" fill="#0f172a" />
<text x="50" y="80" font-size="10" font-weight="bold" fill="#0f172a">C(0; 20)</text>
<!-- Optimal vertex B -->
<circle cx="105" cy="125" r="5" fill="#ea580c" />
<rect x="112" y="112" width="138" height="22" rx="4" fill="#ffffff" fill-opacity="0.9" stroke="#ea580c" stroke-width="1" />
<text x="116" y="127" font-size="10" font-weight="bold" fill="#c2410c">B(12; 12) ★ Max 3.240k</text>
</svg>
<div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 4.4: Miền nghiệm tứ giác OABC và tiếp điểm tối ưu B(12; 12) mang lại doanh thu lợi nhuận cao nhất cho xưởng may</em></div>
</div>

---

## 6. Ứng dụng khoa học & Công nghệ hiện đại

| Lĩnh vực ứng dụng | Đột phá từ Quy hoạch Tuyến tính (Linear Programming) |
| :--- | :--- |
| **Quản trị chuỗi cung ứng (SCM)** | Các tập đoàn đa quốc gia như Amazon hay Walmart sử dụng thuật toán đơn hình (Simplex Algorithm) giải hệ hàng triệu bất phương trình để quyết định lộ trình giao hàng tối ưu và vị trí lưu kho. |
| **Hàng không dân dụng (Aviation)** | Sắp xếp lịch bay cho phi hành đoàn và phi công: Tối thiểu hóa thời gian chờ đợi tại sân bay mà vẫn tuân thủ nghiêm ngặt quy định giờ bay an toàn của ICAO. |
| **Thiết kế vi mạch điện tử (VLSI Design)** | Sắp đặt vị trí hàng tỷ bóng bán dẫn (transistors) trên chip silicon sao cho diện tích bản mạch nhỏ nhất và đường truyền tín hiệu ngắn nhất. |
| **Tài chính & Quản lý danh mục đầu tư** | Mô hình Markowitz: Phân bổ tỷ trọng vốn vào các loại cổ phiếu, trái phiếu sao cho rủi ro thấp nhất với mức lợi suất kỳ vọng định trước. |
| **Kỹ thuật năng lượng & Lưới điện thông minh** | Điều độ công suất phát điện giữa nhà máy thủy điện, điện mặt trời và nhiệt điện theo từng khung giờ trong ngày để chi phí thấp nhất và giảm thiểu ô nhiễm. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q1",
  "question": "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình: $x + y \\ge 2$, $2x - y \\le 4$, $x \\ge 0$?",
  "options": [
    "$(1; 0)$",
    "$(2; 1)$",
    "$(0; 1)$",
    "$(3; -1)$"
  ],
  "answer": 1,
  "explanation": "Thay tọa độ $(2; 1)$ vào: $2 + 1 = 3 \\ge 2$ (đúng); $2(2) - 1 = 3 \\le 4$ (đúng); $2 \\ge 0$ (đúng). Cả 3 BPT đều đúng nên $(2; 1)$ thuộc miền nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q2",
  "question": "Miền nghiệm của hệ bất phương trình: $x \\ge 0$, $y \\ge 0$, $x + y \\le 4$ trên mặt phẳng tọa độ $Oxy$ là một hình phẳng có dạng:",
  "options": [
    "Hình vuông",
    "Hình chữ nhật",
    "Tam giác vuông cân",
    "Hình thang cân"
  ],
  "answer": 2,
  "explanation": "Miền nghiệm được giới hạn bởi 3 đường thẳng $x = 0$ (trục $Oy$), $y = 0$ (trục $Ox$) và $x + y = 4$. Ba đỉnh là $O(0; 0), A(4; 0), B(0; 4)$. Đây là tam giác vuông cân tại gốc tọa độ $O$ với hai cạnh góc vuông bằng 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q3",
  "question": "Diện tích miền tam giác giới hạn bởi hệ bất phương trình: $x \\ge 0$, $y \\ge 0$, $2x + 3y \\le 12$ là:",
  "options": [
    "12",
    "24",
    "6",
    "18"
  ],
  "answer": 0,
  "explanation": "Ba đỉnh của tam giác là $O(0; 0), A(6; 0)$ và $B(0; 4)$. Diện tích tam giác vuông là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q4",
  "question": "Giá trị lớn nhất của biểu thức $F(x, y) = 2x + 5y$ trên miền đa giác nghiệm có các đỉnh $A(1; 1), B(4; 1), C(3; 4), D(1; 3)$ là:",
  "options": [
    "7",
    "13",
    "26",
    "17"
  ],
  "answer": 2,
  "explanation": "Tính giá trị $F$ tại 4 đỉnh: $F(A) = 2(1) + 5(1) = 7$; $F(B) = 2(4) + 5(1) = 13$; $F(C) = 2(3) + 5(4) = 26$; $F(D) = 2(1) + 5(3) = 17$. Giá trị lớn nhất là 26 tại đỉnh $C(3; 4)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q5",
  "question": "Giá trị nhỏ nhất của biểu thức $F(x, y) = 3x - 2y$ trên miền tứ giác có 4 đỉnh $M(0; 2), N(2; 0), P(4; 3), Q(1; 5)$ là:",
  "options": [
    "$-7$",
    "$-4$",
    "$6$",
    "$0$"
  ],
  "answer": 0,
  "explanation": "Tính $F$: $F(M) = 3(0) - 2(2) = -4$; $F(N) = 3(2) - 2(0) = 6$; $F(P) = 3(4) - 2(3) = 6$; $F(Q) = 3(1) - 2(5) = -7$. Nhỏ nhất là $-7$ tại đỉnh $Q(1; 5)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q6",
  "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một miền KHÔNG BỊ CHẶN (không tạo thành đa giác khép kín)?",
  "options": [
    "Hệ: $x \\ge 0, y \\ge 0, x + y \\le 5$",
    "Hệ: $x \\ge 0, y \\ge 0, x + y \\ge 3$",
    "Hệ: $0 \\le x \\le 4, 0 \\le y \\le 3$",
    "Hệ: $x \\ge 0, y \\ge 0, 2x + y \\le 6, x + 2y \\le 6$"
  ],
  "answer": 1,
  "explanation": "Hệ $x \\ge 0, y \\ge 0, x + y \\ge 3$ lấy phần mặt phẳng phía ngoài đường thẳng $x + y = 3$, trải dài vô tận về phía dương vô cực của cả hai trục $Ox$ và $Oy$, nên đây là miền không bị chặn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q7",
  "question": "Cho hệ bất phương trình: $x + y \\le 4$, $x - y \\ge 0$, $x \\le 3$. Tọa độ giao điểm của hai đường biên $x + y = 4$ và $x - y = 0$ là:",
  "options": [
    "$(2; 2)$",
    "$(3; 1)$",
    "$(4; 0)$",
    "$(1; 3)$"
  ],
  "answer": 0,
  "explanation": "Giải hệ phương trình: $x + y = 4$ và $x - y = 0 \\iff x = y$. Thay vào ta có $2x = 4 \\iff x = 2 \\Rightarrow y = 2$. Giao điểm là $(2; 2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q8",
  "question": "Một xưởng chế biến nông sản sản xuất hai loại mứt: mứt dâu ($x$ hộp) và mứt gừng ($y$ hộp). Lợi nhuận là $40x + 50y$ (nghìn đồng). Miền nghiệm ràng buộc có các đỉnh $O(0; 0), A(50; 0), B(30; 40), C(0; 60)$. Lợi nhuận lớn nhất xưởng có thể đạt được là:",
  "options": [
    "2 000 nghìn đồng",
    "3 000 nghìn đồng",
    "3 200 nghìn đồng",
    "3 500 nghìn đồng"
  ],
  "answer": 2,
  "explanation": "Tính lợi nhuận tại các đỉnh: $L(O) = 0$; $L(A) = 40(50) = 2000$; $L(B) = 40(30) + 50(40) = 1200 + 2000 = 3200$; $L(C) = 50(60) = 3000$. Lợi nhuận lớn nhất là 3 200 nghìn đồng (3,2 triệu đồng) tại phương án $B(30; 40)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q9",
  "question": "Cặp số $(x; y)$ nào sau đây KHÔNG phải là nghiệm của hệ bất phương trình: $2x + y > 3$, $x - 2y < 4$?",
  "options": [
    "$(2; 1)$",
    "$(3; 0)$",
    "$(0; 0)$",
    "$(1; 3)$"
  ],
  "answer": 2,
  "explanation": "Thay $(0; 0)$ vào: $2(0) + 0 = 0 > 3$ là khẳng định sai. Do đó $(0; 0)$ không phải là nghiệm của hệ."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c2_b4_q10",
  "question": "Theo định lý cơ bản của Quy hoạch tuyến tính, nếu hàm mục tiêu $F(x, y) = ax + by$ đạt giá trị lớn nhất tại hai đỉnh kề nhau $A$ và $B$ của miền đa giác nghiệm, thì khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "Chỉ có duy nhất hai điểm $A$ và $B$ cho giá trị lớn nhất.",
    "Hàm số $F(x, y)$ đạt giá trị lớn nhất tại mọi điểm thuộc đoạn thẳng $AB$.",
    "Bài toán bị vô nghiệm.",
    "Giá trị lớn nhất đạt được tại trung điểm của $AB$ sẽ lớn hơn tại $A$ và $B$."
  ],
  "answer": 1,
  "explanation": "Khi hàm mục tiêu đạt cùng giá trị cực đại tại hai đỉnh kề nhau $A$ và $B$, đường thẳng mức song song và trùng với cả cạnh $AB$. Khi đó mọi điểm nằm trên đoạn thẳng $AB$ đều cho giá trị lớn nhất đó (vô số phương án tối ưu)."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Phân tích miền ngũ giác & Cực trị)
Cho hệ bất phương trình:
$$\left\{\begin{array}{l} x \ge 0, \ y \ge 0 \\ x \le 4 \\ y \le 4 \\ x + y \le 6 \end{array}\right.$$
1. Chứng minh miền nghiệm của hệ là một miền ngũ giác.
2. Tìm tọa độ 5 đỉnh của ngũ giác và tìm GTLN, GTNN của biểu thức $F(x, y) = 5x + 3y$.

*Hướng dẫn giải:*
1. Miền nghiệm nằm trong góc phần tư thứ I ($x \ge 0, y \ge 0$). Bị giới hạn bởi 2 đường $x = 4, y = 4$ và đường chéo $x + y = 6$.
2. Năm đỉnh của ngũ giác lần lượt là:
   - $O(0; 0)$
   - $A(4; 0)$ (giao của $x = 4$ và $y = 0$)
   - $B(4; 2)$ (giao của $x = 4$ và $x + y = 6$)
   - $C(2; 4)$ (giao của $y = 4$ và $x + y = 6$)
   - $D(0; 4)$ (giao của $y = 4$ và $x = 0$)
   Tính $F(x, y) = 5x + 3y$:
   - $F(O) = 0$ (GTNN)
   - $F(A) = 5(4) + 3(0) = 20$
   - $F(B) = 5(4) + 3(2) = 20 + 6 = 26$ (GTLN)
   - $F(C) = 5(2) + 3(4) = 10 + 12 = 22$
   - $F(D) = 5(0) + 3(4) = 12$  
   Vậy $F_{\max} = 26$ tại $B(4; 2)$ và $F_{\min} = 0$ tại $O(0; 0)$.

---

### Bài tập 2 (Bài toán dinh dưỡng tối ưu chi phí)
Một viện dưỡng lão cần thiết lập khẩu phần ăn mỗi ngày cho một cụ già từ hai loại thực phẩm $M$ và $N$:
- Mỗi gam thực phẩm $M$ chứa 2 đơn vị canxi và 1 đơn vị vitamin C. Giá tiền: 300 đồng/gam.
- Mỗi gam thực phẩm $N$ chứa 1 đơn vị canxi và 2 đơn vị vitamin C. Giá tiền: 400 đồng/gam.
- Bác sĩ chỉ định mỗi ngày một cụ cần tối thiểu 100 đơn vị canxi và tối thiểu 80 đơn vị vitamin C.
- Để tránh khó tiêu, tổng khối lượng thực phẩm $M$ và $N$ trong ngày không vượt quá 90 gam.

Hãy tìm phương án mua thực phẩm để chi phí bữa ăn là nhỏ nhất mà vẫn đáp ứng đầy đủ yêu cầu y tế.

*Hướng dẫn giải:*
- Gọi $x$ là số gam thực phẩm $M$ và $y$ là số gam thực phẩm $N$ ($x, y \ge 0$).
- Hệ điều kiện:
  $$\left\{\begin{array}{l} 2x + y \ge 100 \text{ (canxi)} \\ x + 2y \ge 80 \text{ (vitamin C)} \\ x + y \le 90 \text{ (tổng khối lượng)} \\ x \ge 0, \ y \ge 0 \end{array}\right.$$
- Giao điểm của các đường bờ tạo nên miền tam giác nghiệm $ABC$:
  - Đỉnh $A$: Giao của $2x + y = 100$ và $x + 2y = 80 \Rightarrow A(40; 20)$.
  - Đỉnh $B$: Giao của $2x + y = 100$ và $x + y = 90 \Rightarrow B(10; 80)$.
  - Đỉnh $C$: Giao của $x + 2y = 80$ và $x + y = 90 \Rightarrow C(100; -10)$ (loại vì $y < 0$). Thay bằng giao với trục hoặc đường phù hợp:
    Ta thấy tại $y = 0 \Rightarrow x + y = 90 \Rightarrow x = 90$ nhưng $2(90) + 0 = 180 \ge 100$ và $90 + 0 = 90 \ge 80$. Điểm $C(90; 0)$ thỏa mãn!
    Và giao của $x + 2y = 80$ với $x + y = 90$: $x + y = 90 \Rightarrow x = 90 - y \Rightarrow (90 - y) + 2y = 80 \Rightarrow y = -10 < 0$. Do đó đường $x + 2y = 80$ cắt $2x + y = 100$ tại $A(40; 20)$ và cắt trục hoành tại $(80; 0)$.
    Tứ giác nghiệm có 4 đỉnh: $A(40; 20), B(10; 80), D(0; 90)$? Thử $(0; 90)$: $2(0) + 90 = 90 < 100$ (không thỏa).
    Đỉnh $B(10; 80)$: $2(10) + 80 = 100 \ge 100, 10 + 2(80) = 170 \ge 80, 10 + 80 = 90 \le 90$ (thỏa mãn).
    Đỉnh $C(90; 0)$: $2(90) + 0 = 180 \ge 100, 90 + 0 \ge 80, 90 + 0 \le 90$ (thỏa mãn).
    Đỉnh $E(50; 0)$: $2(50) = 100, 50 < 80$ (không thỏa). Điểm $(80; 0)$: $2(80) \ge 100, 80 \ge 80, 80 \le 90$ (thỏa mãn).
    Vậy các đỉnh là $A(40; 20), B(10; 80), C(90; 0), E(80; 0)$.
- Hàm chi phí: $T(x, y) = 300x + 400y$ (đồng).
  - $T(A) = 300(40) + 400(20) = 12000 + 8000 = 20000$ đồng.
  - $T(B) = 300(10) + 400(80) = 3000 + 32000 = 35000$ đồng.
  - $T(C) = 300(90) + 400(0) = 27000$ đồng.
  - $T(E) = 300(80) + 400(0) = 24000$ đồng.
- Chi phí nhỏ nhất là **20 000 đồng** khi dùng **40g thực phẩm M** và **20g thực phẩm N**.
