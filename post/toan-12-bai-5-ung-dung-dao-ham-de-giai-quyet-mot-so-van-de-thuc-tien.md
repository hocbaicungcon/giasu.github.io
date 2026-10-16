---
title: 'Toán 12 Bài 5: Ứng dụng đạo hàm giải quyết vấn đề thực tiễn - Mô hình hóa và bài toán tối ưu'
description: 'Lý thuyết trọng tâm Bài 5 Toán 12 Kết nối tri thức: Quy trình mô hình hóa toán học, tối ưu hóa kinh tế (doanh thu, lợi nhuận, chi phí biên), tối ưu hóa kỹ thuật (đường ống dẫn dầu, thể tích vật liệu), mô phỏng tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Đạo hàm
  - Bài toán thực tế
  - Tối ưu hóa
  - Kinh tế vi mô
  - Mô hình hóa toán học
  - Kết nối tri thức
grade: 12
---

# Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn

Toán học không sinh ra trong các trang sách lý thuyết tách rời cuộc sống, mà bắt nguồn từ chính nhu cầu thực tiễn của con người: làm thế nào để tiết kiệm chi phí nhất, vận chuyển nhanh nhất, sản xuất đạt lợi nhuận cao nhất và bảo vệ môi trường an toàn nhất.

Trong toàn bộ chương trình Toán phổ thông, **Đạo hàm** là công cụ trực tiếp và hiệu quả nhất để giải quyết các bài toán tối ưu hóa thực tế thông qua phương pháp **Mô hình hóa toán học (Mathematical Modeling)**:
$$\text{Tình huống Đời sống} \xrightarrow{\text{Mô hình hóa}} \text{Hàm số } f(x) \xrightarrow{\text{Đạo hàm } f'(x)=0} \text{Điểm Tối ưu } x^* \xrightarrow{\text{Đánh giá}} \text{Giải pháp Thực tiễn}$$

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">QUY TRÌNH 4 BƯỚC MÔ HÌNH HÓA BÀI TOÁN TỐI ƯU</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">Bước 1: Chọn Biến số & Đặt điều kiện</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Chọn đại lượng biến thiên làm ẩn số $x$.<br>
• Xác định tập xác định thực tế của $x$ (ví dụ: $x > 0$, chiều dài $0 < x < L$, số sản phẩm $x \in \mathbb{N}$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">Bước 2: Thiết lập Hàm mục tiêu</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Biểu diễn đại lượng cần tối ưu (thể tích $V$, chi phí $C$, lợi nhuận $\Pi$, thời gian $T$) thành một hàm số $y = f(x)$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">Bước 3: Tìm Cực trị bằng Đạo hàm</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Tính đạo hàm $f'(x)$.<br>
• Giải $f'(x) = 0$ tìm nghiệm $x_0$ trong miền xác định.<br>
• Lập bảng biến thiên hoặc dùng đạo hàm cấp hai để khẳng định Max/Min.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">Bước 4: Trả lời Câu hỏi Thực tiễn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Quy đổi kết quả toán học sang đơn vị thực tế (mét, đồng, giờ, kg...) và kiểm tra tính khả thi của giải pháp.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Nếu gọi $R(x)$ là doanh thu và $C(x)$ là chi phí sản xuất $x$ sản phẩm, hàm lợi nhuận $\Pi(x)$ được tính bằng công thức nào?
2. Lợi nhuận của doanh nghiệp đạt cực đại khi mối liên hệ giữa doanh thu biên $R'(x)$ và chi phí biên $C'(x)$ như thế nào?
3. Một bể chứa nước dạng khối hộp chữ nhật có đáy hình vuông và thể tích $V = 8\text{ m}^3$. Nếu gọi cạnh đáy là $x$, chiều cao $h$ được tính theo $x$ bằng biểu thức nào?
4. Định lý Fermat trong quang học nói rằng: Tia sáng truyền giữa hai điểm theo con đường nào? (Gợi ý: Thời gian truyền ngắn nhất).
5. Khi giải bài toán thực tế, nếu nghiệm tìm được là $x = -5\text{ mét}$, ta có nhận nghiệm này không? Tại sao?

> [!TIP]
> **Đáp án nhanh:**
> 1. $\Pi(x) = R(x) - C(x)$ (Lợi nhuận = Doanh thu - Chi phí).
> 2. $\Pi'(x) = 0 \iff R'(x) = C'(x)$ (Doanh thu biên bằng Chi phí biên).
> 3. $V = x^2 h = 8 \implies h = \frac{8}{x^2}$.
> 4. Ánh sáng truyền theo đường đi tốn ít thời gian nhất (Principle of Least Time).
> 5. Loại ngay, vì độ dài kích thước thực tế luôn phải là số thực dương ($x > 0$).

---

## I. Nhóm 1: Tối ưu hóa trong Kinh tế và Quản trị Kinh doanh

Trong kinh tế học, ba đại lượng then chốt là:
- **Hàm doanh thu:** $R(x) = x \cdot p(x)$, trong đó $x$ là số lượng sản phẩm tiêu thụ, $p(x)$ là giá bán một sản phẩm (hàm cầu).
- **Hàm tổng chi phí:** $C(x)$, bao gồm chi phí cố định (nhà xưởng, khấu hao) và chi phí biến đổi (nguyên liệu, nhân công).
- **Hàm lợi nhuận:**
  $$\Pi(x) = R(x) - C(x)$$

> [!IMPORTANT]
> **Quy luật Tối đa hóa Lợi nhuận:**
> Lợi nhuận của doanh nghiệp đạt giá trị lớn nhất khi:
> $$\Pi'(x) = 0 \iff R'(x) - C'(x) = 0 \iff \mathbf{R'(x) = C'(x)}$$
> Nghĩa là: **Doanh thu biên (Marginal Revenue) bằng Chi phí biên (Marginal Cost)**!

---

## II. Nhóm 2: Tối ưu hóa trong Kỹ thuật Xây dựng và Giao thông

### Bài toán Vận chuyển & Lắp đặt Đường ống (Pipeline Optimization)
Một bài toán kinh điển trong ngành dầu khí và cấp thoát nước:
Cần nối một đường ống dẫn từ một giàn khoan ngoài biển về một nhà máy trên đất liền.
- Chi phí đặt ống dưới biển đắt đỏ hơn nhiều so với đặt ống trên cạn ($c_{biển} > c_{cạn}$).
- Nối thẳng vuông góc vào bờ rồi đi trên cạn: Đoạn dưới biển ngắn nhất nhưng tổng chiều dài ống dài.
- Nối thẳng đường chéo từ giàn khoan tới nhà máy: Chiều dài ống ngắn nhất nhưng toàn bộ dưới biển, chi phí cực cao.
- **Giải pháp tối ưu:** Nối xiên cập bờ tại một vị trí $M$ thích hợp để **tổng chi phí là nhỏ nhất**!

---

## Công cụ trực quan: Mô phỏng Bài toán Đường ống dẫn Dầu Tối ưu

Một giàn khoan nằm cách bờ biển $6\text{ km}$, nhà máy lọc dầu nằm cách vị trí đối diện giàn khoan trên bờ $10\text{ km}$.
- Chi phí đặt ống dưới biển: $5$ triệu USD/km.
- Chi phí đặt ống trên đất liền: $3$ triệu USD/km.

Hãy kéo thanh trượt điểm cập bờ $x$ (khoảng cách từ điểm chân vuông góc đến điểm cập bờ, $0 \le x \le 10$) để tìm vị trí cập bờ làm tổng chi phí thấp nhất:

<div id="pipe-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG TỐI ƯU HÓA ĐƯỜNG ỐNG DẪN DẦU</h4>
  
  <div style="max-width: 480px; margin: 0 auto 16px auto; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <label style="font-weight: 600; color: #1e293b; display: block; margin-bottom: 6px;">
      Vị trí điểm cập bờ x: <span id="val-pipe-x" style="font-size: 1.15em; color: #2563eb;">4.50</span> km
    </label>
    <input type="range" id="range-pipe-x" min="0" max="10" step="0.25" value="4.50" style="width: 100%;">
  </div>

  <div style="display: flex; justify-content: center;">
    <svg id="pipe-svg" viewBox="0 0 500 240" width="100%" style="max-width: 500px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
      <!-- Biển (phía trên) & Đất liền (phía dưới) -->
      <rect x="20" y="20" width="460" height="110" fill="#e0f2fe" stroke="none"/>
      <rect x="20" y="130" width="460" height="90" fill="#fef3c7" stroke="none"/>
      <line x1="20" y1="130" x2="480" y2="130" stroke="#d97706" stroke-width="2"/>
      <text x="30" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">BIỂN (5 triệu $/km)</text>
      <text x="30" y="155" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">BỜ BIỂN (3 triệu $/km)</text>

      <!-- Giàn khoan A tại (80, 50) -->
      <!-- Điểm chiếu H trên bờ tại (80, 130). Khoảng cách 6km -->
      <!-- Nhà máy B trên bờ tại (440, 130). Khoảng cách HB = 10km => scale 36px per km -->
      <circle cx="80" cy="50" r="6" fill="#0369a1"/>
      <text x="50" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Giàn khoan A</text>

      <!-- Điểm H (80, 130) -->
      <circle cx="80" cy="130" r="3" fill="#64748b"/>
      <text x="75" y="145" font-family="sans-serif" font-size="10" fill="#64748b">H</text>

      <!-- Nhà máy B (440, 130) -->
      <circle cx="440" cy="130" r="6" fill="#b45309"/>
      <text x="400" y="150" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">Nhà máy B</text>

      <!-- Pipeline undersea A -> M dynamic -->
      <line id="line-sea" x1="80" y1="50" x2="242" y2="130" stroke="#0284c7" stroke-width="3"/>

      <!-- Pipeline onshore M -> B dynamic -->
      <line id="line-land" x1="242" y1="130" x2="440" y2="130" stroke="#d97706" stroke-width="3"/>

      <!-- Điểm cập bờ M -->
      <circle id="pt-m" cx="242" cy="130" r="5" fill="#ef4444"/>
      <text id="lbl-m" x="235" y="120" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">M</text>
    </svg>
  </div>

  <div id="pipe-cost" style="margin-top: 14px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left;">
    <div>• Chiều dài dưới biển (AM): <strong id="val-sea-len">7.50 km</strong> ($37.50 triệu)</div>
    <div>• Chiều dài trên cạn (MB): <strong id="val-land-len">5.50 km</strong> ($16.50 triệu)</div>
    <div>• Tổng chi phí: <strong id="val-total-cost" style="color: #047857; font-size: 1.15em;">54.00 triệu USD (CHI PHÍ TỐI THIỂU - MIN!)</strong></div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rX = document.getElementById('range-pipe-x');
  const valX = document.getElementById('val-pipe-x');
  const lineSea = document.getElementById('line-sea');
  const lineLand = document.getElementById('line-land');
  const ptM = document.getElementById('pt-m');
  const lblM = document.getElementById('lbl-m');
  const valSea = document.getElementById('val-sea-len');
  const valLand = document.getElementById('val-land-len');
  const valCost = document.getElementById('val-total-cost');

  if (!rX || !lineSea) return;

  const hX = 80, bX = 440, seaY = 50, landY = 130;
  const dSea = 6; // 6km
  const L = 10;   // 10km
  const scale = 36; // (440 - 80) / 10 = 36 px/km

  function update() {
    const x = parseFloat(rX.value);
    valX.textContent = x.toFixed(2);

    const seaLen = Math.sqrt(dSea * dSea + x * x);
    const landLen = L - x;
    const cost = seaLen * 5 + landLen * 3;

    valSea.textContent = `${seaLen.toFixed(2)} km ($${(seaLen * 5).toFixed(2)} triệu)`;
    valLand.textContent = `${landLen.toFixed(2)} km ($${(landLen * 3).toFixed(2)} triệu)`;

    const mx = hX + x * scale;
    lineSea.setAttribute('x2', mx);
    lineLand.setAttribute('x1', mx);
    ptM.setAttribute('cx', mx);
    lblM.setAttribute('x', mx - 6);

    if (Math.abs(x - 4.5) < 0.15) {
      valCost.innerHTML = `${cost.toFixed(2)} triệu USD <span style="color: #047857; font-weight: bold;">(TỐI ƯU NHẤT - MIN!)</span>`;
    } else {
      valCost.innerHTML = `${cost.toFixed(2)} triệu USD`;
    }
  }

  rX.addEventListener('input', update);
  update();
});
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Bài toán kinh tế tối ưu giá bán và doanh thu

**Bài toán 1:** Một rạp chiếu phim có sức chứa $500$ chỗ ngồi. Qua khảo sát thị trường:
- Nếu bán vé với giá $80.000$ đồng/vé thì trung bình mỗi suất chiếu có $300$ khán giả đến xem.
- Cứ mỗi lần giảm giá vé $5.000$ đồng, rạp sẽ thu hút thêm được $50$ khán giả.

Hỏi ban quản lý rạp chiếu phim nên ấn định giá vé là bao nhiêu để **tổng doanh thu của mỗi suất chiếu đạt giá trị lớn nhất**? Khi đó doanh thu đạt bao nhiêu?

**Lời giải:**
Gọi $x$ là số lần giảm giá vé ($x \ge 0$).
- Giá vé sau khi giảm là:
  $$p(x) = 80.000 - 5.000x = 5.000(16 - x) \quad (\text{đồng})$$
  Điều kiện: $p(x) > 0 \implies 0 \le x < 16$.
- Số lượng khán giả đến rạp là:
  $$q(x) = 300 + 50x = 50(6 + x)$$
  Vì rạp có tối đa 500 chỗ nên: $300 + 50x \le 500 \iff 50x \le 200 \iff x \le 4$.
  Vậy miền xác định thực tế của biến số là: $x \in [0; 4]$.

Tổng doanh thu của suất chiếu là:
$$R(x) = p(x) \cdot q(x) = 5.000(16 - x) \cdot 50(6 + x) = 250.000(96 + 10x - x^2) \quad (\text{đồng})$$
Lấy đạo hàm để tìm cực trị:
$$R'(x) = 250.000(10 - 2x)$$
$$R'(x) = 0 \iff 10 - 2x = 0 \iff x = 5$$

Nhận xét: Giá trị $x = 5$ nằm ngoài khoảng sức chứa $[0; 4]$ của rạp!
Ta xét trên đoạn $[0; 4]$:
- $R'(x) = 250.000(10 - 2x) > 0, \forall x \in [0; 4]$.
Do đó hàm doanh thu $R(x)$ là hàm **đồng biến liên tục** trên đoạn $[0; 4]$.
Suy ra doanh thu lớn nhất đạt được tại điểm mút bên phải: $x = 4$ (rạp lấp đầy toàn bộ 500 ghế).

Khi $x = 4$:
- Giá vé tối ưu: $p(4) = 80.000 - 5.000(4) = 60.000\text{ đồng/vé}$.
- Doanh thu cực đại đạt được:
  $$R(4) = 60.000 \times 500 = 30.000.000\text{ đồng (30 triệu đồng)}$$

---

### Dạng 2: Bài toán tối ưu hóa chi phí lắp đặt đường ống

**Bài toán 2:** (Giải quyết bài toán mô phỏng đường ống dầu phía trên bằng toán học).
Một trạm biến áp đặt tại điểm $A$ cách bờ sông thẳng $6\text{ km}$. Một trang trại nông nghiệp đặt tại điểm $B$ trên bờ sông, cách hình chiếu vuông góc $H$ của $A$ lên bờ sông một khoảng $10\text{ km}$.
Chi phí lắp đường dây điện ngầm dưới lòng sông là $50$ triệu đồng/km, chi phí lắp trên bờ là $30$ triệu đồng/km.
Hỏi cần đưa đường dây ngầm cập bờ tại điểm $M$ cách $H$ bao nhiêu km để tổng chi phí kéo đường điện là nhỏ nhất?

**Lời giải:**
Gọi khoảng cách từ $H$ đến điểm cập bờ $M$ là $x\text{ (km)}$ ($0 \le x \le 10$).
- Khoảng cách trên bờ từ $M$ đến trang trại $B$ là:
  $$MB = 10 - x\text{ (km)}$$
- Khoảng cách đường dây ngầm dưới nước $AM$ (áp dụng định lý Pythagore trong tam giác vuông $AHM$ vuông tại $H$ với $AH = 6$):
  $$AM = \sqrt{AH^2 + HM^2} = \sqrt{6^2 + x^2} = \sqrt{x^2 + 36}\text{ (km)}$$

Tổng chi phí lắp đặt đường dây (tính bằng triệu đồng) là:
$$C(x) = 50\sqrt{x^2 + 36} + 30(10 - x) \quad (x \in [0; 10])$$
Lấy đạo hàm theo $x$:
$$C'(x) = 50 \cdot \frac{2x}{2\sqrt{x^2 + 36}} - 30 = \frac{50x}{\sqrt{x^2 + 36}} - 30$$
Giải phương trình $C'(x) = 0$:
$$\frac{50x}{\sqrt{x^2 + 36}} = 30 \iff 5x = 3\sqrt{x^2 + 36}$$
Bình phương hai vế (vì $x \ge 0$):
$$25x^2 = 9(x^2 + 36) \iff 25x^2 = 9x^2 + 324 \iff 16x^2 = 324 \iff x^2 = \frac{324}{16} = \frac{81}{4}$$
Vì $x \ge 0 \implies x = \frac{9}{2} = 4.5\text{ km}$.

Tính giá trị chi phí tại các điểm:
- $C(0) = 50\sqrt{36} + 30(10) = 300 + 300 = 600$ triệu đồng.
- $C(10) = 50\sqrt{100 + 36} + 0 = 50\sqrt{136} \approx 583.1$ triệu đồng.
- $C(4.5) = 50\sqrt{(4.5)^2 + 36} + 30(10 - 4.5) = 50(7.5) + 30(5.5) = 375 + 165 = 540$ triệu đồng.

**Kết luận:**
Tổng chi phí nhỏ nhất là $540$ triệu đồng khi điểm cập bờ $M$ cách $H$ một khoảng đúng bằng $\mathbf{4.5\text{ km}}$.

---

### Dạng 3: Bài toán tối ưu thể tích lăng trụ trong bao bì thực phẩm

**Bài toán 3:** Một công ty sữa tươi muốn sản xuất hộp sữa hình hộp chữ nhật có thể tích $V = 500\text{ cm}^3$ ($500\text{ ml}$) với đáy là hình vuông cạnh $x\text{ (cm)}$. Tìm độ dài cạnh đáy $x$ để diện tích giấy làm vỏ hộp là nhỏ nhất (bỏ qua mép dán).

**Lời giải:**
Gọi cạnh đáy của hộp là $x\text{ (cm)}$ ($x > 0$), chiều cao của hộp là $h\text{ (cm)}$.
Thể tích hộp:
$$V = x^2 h = 500 \implies h = \frac{500}{x^2}$$
Diện tích toàn phần vỏ hộp (gồm 2 mặt đáy vuông và 4 mặt bên):
$$S(x) = 2x^2 + 4xh = 2x^2 + 4x \left(\frac{500}{x^2}\right) = 2x^2 + \frac{2000}{x} \quad (x > 0)$$
Đạo hàm:
$$S'(x) = 4x - \frac{2000}{x^2} = \frac{4x^3 - 2000}{x^2}$$
$$S'(x) = 0 \iff 4x^3 = 2000 \iff x^3 = 500 \implies x = \sqrt[3]{500} = 5\sqrt[3]{4} \approx 7.94\text{ cm}$$
Khi đó:
$$h = \frac{500}{x^2} = \frac{500}{(\sqrt[3]{500})^2} = \sqrt[3]{500} = x$$
Vì $S''(x) = 4 + \frac{4000}{x^3} > 0, \forall x > 0$ nên $x = \sqrt[3]{500}$ là điểm đạt GTNN toàn cục.
**Kết luận:** Để tốn ít giấy nhất, hộp sữa phải có hình dạng khối lập phương ($x = h = \sqrt[3]{500} \approx 7.94\text{ cm}$).

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Lợi nhuận của doanh nghiệp đạt mức tối đa khi đại lượng nào sau đây triệt tiêu?",
  "options": [
    "A. Đạo hàm của hàm lợi nhuận: Π\u0027(x) = 0",
    "B. Tổng chi phí sản xuất: C(x) = 0",
    "C. Doanh thu của doanh nghiệp: R(x) = 0",
    "D. Giá bán một đơn vị sản phẩm: p(x) = 0"
  ],
  "answer": "A. Đạo hàm của hàm lợi nhuận: Π\u0027(x) = 0",
  "explanation": "Theo điều kiện cực trị, lợi nhuận cực đại khi đạo hàm lợi nhuận biên triệt tiêu: Π\u0027(x) = 0 <=> R\u0027(x) = C\u0027(x)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Một người muốn rào một khu đất hình chữ nhật có diện tích không đổi S = 100 m^2. Chu vi hàng rào nhỏ nhất khi khu đất có hình dạng là:",
  "options": [
    "A. Hình vuông cạnh 10 m",
    "B. Hình chữ nhật 5 m x 20 m",
    "C. Hình chữ nhật 4 m x 25 m",
    "D. Hình chữ nhật 2 m x 50 m"
  ],
  "answer": "A. Hình vuông cạnh 10 m",
  "explanation": "Chu vi P = 2(a + b) ≥ 4√(ab) = 4√100 = 40 m. Dấu bằng đạt được khi a = b = 10 m (hình vuông)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một chất điểm chuyển động với phương trình quãng đường s(t) = -t^3 + 6t^2 + 10t (t ≥ 0). Vận tốc của chất điểm đạt giá trị LỚN NHẤT tại thời điểm:",
  "options": [
    "A. t = 2s",
    "B. t = 4s",
    "C. t = 0s",
    "D. t = 6s"
  ],
  "answer": "A. t = 2s",
  "explanation": "v(t) = s\u0027(t) = -3t^2 + 12t + 10. Đây là tam thức bậc hai có đỉnh tại t = -12 / [2(-3)] = 2s. Tại t = 2s vận tốc đạt GTLN v_max = 22 m/s."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một công ty ước tính chi phí sản xuất x đơn vị hàng là C(x) = x^2 + 50x + 1000. Chi phí trung bình cho mỗi đơn vị c(x) = C(x)/x đạt giá trị NHỎ NHẤT khi sản xuất bao nhiêu đơn vị?",
  "options": [
    "A. x = 32 (làm tròn từ √1000 ≈ 31.6)",
    "B. x = 25",
    "C. x = 50",
    "D. x = 10"
  ],
  "answer": "A. x = 32 (làm tròn từ √1000 ≈ 31.6)",
  "explanation": "c(x) = x + 50 + 1000/x. Áp dụng Cauchy cho 2 số dương: x + 1000/x ≥ 2√1000 ≈ 63.2. Dấu bằng khi x = √1000 ≈ 31.6 => làm tròn x = 32 đơn vị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một cửa hàng bán bánh kem với giá x nghìn đồng/chiếc thì mỗi ngày bán được (120 - x) chiếc. Doanh thu của cửa hàng trong ngày lớn nhất khi giá bán mỗi chiếc bánh là:",
  "options": [
    "A. 60 nghìn đồng",
    "B. 80 nghìn đồng",
    "C. 50 nghìn đồng",
    "D. 40 nghìn đồng"
  ],
  "answer": "A. 60 nghìn đồng",
  "explanation": "Doanh thu R(x) = x(120 - x) = -x^2 + 120x. Đỉnh parabol đạt tại x = -120 / [2(-1)] = 60 nghìn đồng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho một tấm nhôm hình vuông cạnh 60 cm. Cắt ở 4 góc 4 hình vuông bằng nhau cạnh x rồi gập lại thành hộp không nắp. Thể tích hộp lớn nhất khi x bằng:",
  "options": [
    "A. 10 cm",
    "B. 15 cm",
    "C. 20 cm",
    "D. 12 cm"
  ],
  "answer": "A. 10 cm",
  "explanation": "V(x) = x(60 - 2x)^2. V\u0027(x) = (60 - 2x)^2 - 4x(60 - 2x) = (60 - 2x)(60 - 6x) = 0 <=> x = 30 (loại) hoặc x = 10 cm. Thể tích lớn nhất khi x = 10 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một sợi dây kim loại dài 100 cm được cắt làm hai đoạn: một đoạn uốn thành hình vuông, một đoạn uốn thành hình tròn. Tổng diện tích của hai hình đạt giá trị NHỎ NHẤT khi tỉ số giữa cạnh hình vuông và bán kính hình tròn là:",
  "options": [
    "A. 2",
    "B. π",
    "C. 1",
    "D. 4/π"
  ],
  "answer": "A. 2",
  "explanation": "Chu vi 4x + 2πr = 100. Tổng diện tích S = x^2 + πr^2. Đạo hàm theo x cho thấy GTNN đạt được khi x = 2r, tức cạnh hình vuông gấp 2 lần bán kính đường tròn (bằng đường kính)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một thùng chứa hình trụ không nắp có thể tích V = 1 m^3. Diện tích vật liệu làm thùng nhỏ nhất khi tỉ lệ giữa chiều cao h và bán kính đáy r là:",
  "options": [
    "A. h = r",
    "B. h = 2r",
    "C. h = r/2",
    "D. h = 3r"
  ],
  "answer": "A. h = r",
  "explanation": "Thùng không nắp có S = πr^2 + 2πrh = πr^2 + 2V/r. S\u0027(r) = 2πr - 2V/r^2 = 0 <=> πr^3 = V <=> πr^3 = πr^2 h <=> h = r."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Độ giảm huyết áp của một bệnh nhân được cho bởi G(x) = 0.025x^2(30 - x), trong đó x là liều lượng thuốc tiêm (mg). Liều lượng thuốc để mức giảm huyết áp là LỚN NHẤT là:",
  "options": [
    "A. 20 mg",
    "B. 15 mg",
    "C. 25 mg",
    "D. 30 mg"
  ],
  "answer": "A. 20 mg",
  "explanation": "G(x) = 0.025(30x^2 - x^3). G\u0027(x) = 0.025(60x - 3x^2) = 0 <=> x = 20 mg (với x > 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Bước đầu tiên và quan trọng nhất trong quy trình mô hình hóa toán học là:",
  "options": [
    "A. Lựa chọn biến số thích hợp và tìm tập xác định thực tế",
    "B. Tính ngay đạo hàm cấp hai",
    "C. Vẽ đồ thị hàm số lên hệ trục Oxy",
    "D. Tìm các đường tiệm cận"
  ],
  "answer": "A. Lựa chọn biến số thích hợp và tìm tập xác định thực tế",
  "explanation": "Xác định đúng biến số và điều kiện thực tế của biến là bước nền tảng quyết định tính đúng đắn của toàn bộ mô hình."
}'></div>
