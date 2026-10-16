---
title: 'Toán 11 Bài 31: Định nghĩa và ý nghĩa của đạo hàm - Bản chất giải tích và ứng dụng tiếp tuyến'
description: 'Lý thuyết trọng tâm Bài 31 Toán 11 Kết nối tri thức: Định nghĩa đạo hàm bằng giới hạn số gia, mối liên hệ với tính liên tục, ý nghĩa hình học (tiếp tuyến), ý nghĩa vật lý (vận tốc tức thời), mô phỏng cát tuyến tiến về tiếp tuyến tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Đạo hàm
  - Định nghĩa đạo hàm
  - Ý nghĩa hình học
  - Tiếp tuyến
  - Ý nghĩa vật lý
  - Vận tốc tức thời
  - Kết nối tri thức
grade: 11
---

# Bài 31. Định nghĩa và ý nghĩa của đạo hàm

Nếu có một phát minh toán học nào làm thay đổi hoàn toàn tiến trình văn minh nhân loại, đưa loài người từ thời kỳ cơ học cổ điển bước sang kỷ nguyên công nghiệp và hàng không vũ trụ, thì đó chính là **Phép tính Vi tích phân (Calculus)**, mà viên gạch nền móng đầu tiên là **Đạo hàm**.

Được hai bộ óc thiên tài là **Isaac Newton** và **Gottfried Wilhelm Leibniz** độc lập phát minh vào thế kỷ XVII, đạo hàm sinh ra để giải quyết hai câu hỏi hóc búa nhất của vật lý và hình học đương thời:
1. **Trong vật lý:** Làm thế nào để đo được **vận tốc tức thời** của một vật thể chuyển động biến đổi tại đúng một tích tắc thời gian $t_0$, khi mà công thức quen thuộc $v = \frac{s}{t}$ chỉ cho ta vận tốc trung bình trên một khoảng thời gian?
2. **Trong hình học:** Làm thế nào để xác định chính xác phương trình của **đường tiếp tuyến** chạm vào một đường cong bất kỳ tại một điểm duy nhất?

Bài học này sẽ mở cánh cửa dẫn các em vào thế giới kỳ diệu của Đạo hàm — công cụ quyền năng nhất của Giải tích toán học.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KHÁI NIỆM: BẢN CHẤT CỦA ĐẠO HÀM</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Giới hạn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Số gia đối số: $\Delta x = x - x_0$.<br>
• Số gia hàm số: $\Delta y = f(x_0 + \Delta x) - f(x_0)$.<br>
• Đạo hàm tại $x_0$:<br>
$$\mathbf{f'(x_0) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}}$$
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Ý nghĩa Hình học</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $f'(x_0)$ là <strong>hệ số góc $k$</strong> của tiếp tuyến tại $M_0(x_0; y_0)$.<br>
• Phương trình tiếp tuyến:<br>
$$\mathbf{y = f'(x_0)(x - x_0) + y_0}$$
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ý nghĩa Vật lý</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Vận tốc tức thời: $\mathbf{v(t) = s'(t)}$.<br>
• Cường độ dòng điện tức thời: $\mathbf{i(t) = q'(t)}$.<br>
• Tốc độ biến thiên tức thời của mọi đại lượng vật lý.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Đạo hàm & Tính liên tục</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Có đạo hàm tại $x_0$ $\implies$ <strong>Liên tục</strong> tại $x_0$.<br>
• Chiều ngược lại <strong>KHÔNG</strong> đúng (Ví dụ: hàm $y = |x|$ liên tục tại $x=0$ nhưng không có đạo hàm tại đó!).
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Một chiếc xe máy đi được quãng đường $s = 60\text{ km}$ trong thời gian $t = 1.5\text{ giờ}$. Vận tốc trung bình của xe là bao nhiêu?
2. Kim đồng hồ tốc độ (speedometer) trên xe máy hiển thị $45\text{ km/h}$ lúc bạn liếc nhìn. Đó là vận tốc trung bình hay vận tốc tức thời?
3. Tính giới hạn sau: $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
4. Đường thẳng có phương trình $y = 3x - 5$ có hệ số góc bằng bao nhiêu?
5. Nếu một hàm số bị gián đoạn (đứt gãy đồ thị) tại điểm $x = 1$, liệu ta có thể kẻ được một tiếp tuyến trơn tru chạm vào đồ thị tại điểm đó không?

> [!TIP]
> **Đáp án nhanh:**
> 1. Vận tốc trung bình $v_{tb} = \frac{60}{1.5} = 40\text{ km/h}$.
> 2. Đó là vận tốc tức thời tại đúng thời điểm quan sát.
> 3. $\lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4$.
> 4. Hệ số góc $k = 3$.
> 5. Không thể. Đồ thị bị gián đoạn thì không thể tồn tại tiếp tuyến trơn.

---

## I. Định nghĩa Đạo hàm tại một điểm

### 1. Khái niệm Số gia
Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và điểm $x_0 \in (a; b)$.
- **Số gia của đối số** tại điểm $x_0$ là hiệu số:
  $$\Delta x = x - x_0 \iff x = x_0 + \Delta x$$
- **Số gia tương ứng của hàm số** là:
  $$\Delta y = f(x) - f(x_0) = f(x_0 + \Delta x) - f(x_0)$$

### 2. Định nghĩa Đạo hàm
> [!IMPORTANT]
> **Định nghĩa Đạo hàm tại một điểm:**
> Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và $x_0 \in (a; b)$. Nếu tồn tại giới hạn hữu hạn:
> $$\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} \quad \text{hay} \quad \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$$
> thì giới hạn đó được gọi là **đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$**, kí hiệu là:
> $$f'(x_0) \quad \text{hoặc} \quad y'(x_0)$$
>
> Như vậy:
> $$f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$$

### 3. Quy trình 3 bước tính đạo hàm bằng định nghĩa
Để tính đạo hàm $f'(x_0)$ bằng định nghĩa, ta thực hiện theo 3 bước chuẩn mực:
1. **Bước 1:** Cho đối số $x_0$ một số gia $\Delta x$. Tính số gia hàm số:
   $$\Delta y = f(x_0 + \Delta x) - f(x_0)$$
2. **Bước 2:** Lập tỉ số:
   $$\frac{\Delta y}{\Delta x}$$
   và rút gọn triệt tiêu đại lượng $\Delta x$ ở mẫu số.
3. **Bước 3:** Tính giới hạn khi $\Delta x \to 0$:
   $$f'(x_0) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$$

---

## II. Mối quan hệ giữa Đạo hàm và Tính liên tục

> [!IMPORTANT]
> **Định lý về Đạo hàm và Tính liên tục:**
> Nếu hàm số $y = f(x)$ có đạo hàm tại điểm $x_0$ thì nó **liên tục tại điểm $x_0$**.

> [!CAUTION]
> **Bẫy tư duy kinh điển: Chiều ngược lại KHÔNG ĐÚNG!**
> Một hàm số có thể liên tục tại điểm $x_0$ nhưng **hoàn toàn không có đạo hàm tại điểm đó**.
>
> **Phản ví dụ kinh điển:** Xét hàm số $y = f(x) = |x|$ tại $x_0 = 0$:
> - Hàm số liên tục tại $x = 0$ (đồ thị không đứt gãy, $\lim_{x \to 0} |x| = 0 = f(0)$).
> - Nhưng khi xét tỉ số đạo hàm:
>   + Giới hạn bên phải: $\lim_{\Delta x \to 0^+} \frac{|\Delta x|}{\Delta x} = \lim_{\Delta x \to 0^+} \frac{\Delta x}{\Delta x} = 1$.
>   + Giới hạn bên trái: $\lim_{\Delta x \to 0^-} \frac{|\Delta x|}{\Delta x} = \lim_{\Delta x \to 0^-} \frac{-\Delta x}{\Delta x} = -1$.
>   Hai giới hạn một bên khác nhau ($1 \ne -1$) nên không tồn tại $\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$.
>   Đồ thị tại điểm $(0; 0)$ bị "gãy nhọn" (corner point) nên không có tiếp tuyến duy nhất!

---

## III. Ý nghĩa Hình học của Đạo hàm

### 1. Tiếp tuyến của đường cong phẳng
Xét đồ thị $(C)$ của hàm số $y = f(x)$. Lấy điểm cố định $M_0(x_0; f(x_0))$ và điểm di động $M(x; f(x))$ trên $(C)$.
Đường thẳng nối hai điểm $M_0$ và $M$ được gọi là **cát tuyến** (secant line).
Hệ số góc của cát tuyến $M_0M$ là:
$$k_{sec} = \frac{f(x) - f(x_0)}{x - x_0} = \frac{\Delta y}{\Delta x}$$

Khi điểm $M$ di chuyển trên đường cong tiến dần về điểm $M_0$ ($x \to x_0$ hay $\Delta x \to 0$), cát tuyến $M_0M$ sẽ quay quanh $M_0$ và tiến dần tới vị trí giới hạn là đường thẳng $M_0T$. Đường thẳng $M_0T$ được gọi là **tiếp tuyến của đồ thị $(C)$ tại điểm $M_0$**.

> [!IMPORTANT]
> **Định lý Ý nghĩa Hình học của Đạo hàm:**
> Đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$ chính là **hệ số góc $k$ của tiếp tuyến** của đồ thị hàm số tại điểm $M_0(x_0; f(x_0))$:
> $$k = f'(x_0)$$

### 2. Phương trình tiếp tuyến của đồ thị hàm số
Phương trình tiếp tuyến của đồ thị $(C)$ tại điểm tiếp xúc $M_0(x_0; y_0)$ (với $y_0 = f(x_0)$) có dạng:
$$\mathbf{y - y_0 = f'(x_0)(x - x_0)} \iff \mathbf{y = f'(x_0)(x - x_0) + y_0}$$

---

## Công cụ trực quan: Mô phỏng Cát tuyến tiến về Tiếp tuyến

Hãy kéo thanh trượt $\Delta x$ bên dưới từ giá trị lớn về gần $0$. Quan sát điểm $M$ trượt trên parabol $y = x^2$ về phía $M_0(1; 1)$, đường cát tuyến (nét đứt) xoay dần và áp sát hoàn toàn vào đường tiếp tuyến (nét liền màu đỏ có hệ số góc $k = 2$):

<div id="tangent-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG GIỚI HẠN CÁT TUYẾN TRỞ THÀNH TIẾP TUYẾN TRÊN ĐỒ THỊ y = x²</h4>
<div style="max-width: 520px; margin: 0 auto 16px auto; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
<label style="font-weight: 600; color: #1e293b; display: block; margin-bottom: 8px;">
Kéo thanh trượt số gia Δx: <span id="val-dx" style="font-size: 1.15em; color: #2563eb; font-weight: bold;">1.00</span>
(Điểm M có tọa độ: <span id="val-coord-m" style="color: #7c3aed; font-weight: bold;">(2.00; 4.00)</span>)
</label>
<input type="range" id="range-dx" min="0.05" max="1.15" step="0.05" value="1.00" style="width: 100%;">
</div>
<div style="display: flex; justify-content: center; overflow-x: auto;">
<svg id="tangent-svg" viewBox="0 0 480 340" width="100%" style="max-width: 480px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
<!-- Coordinate Axes -->
<line x1="30" y1="290" x2="460" y2="290" stroke="#64748b" stroke-width="1.5"/>
<line x1="70" y1="330" x2="70" y2="15" stroke="#64748b" stroke-width="1.5"/>
<polygon points="460,287 468,290 460,293" fill="#64748b"/>
<polygon points="67,15 70,7 73,15" fill="#64748b"/>
<text x="455" y="280" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">x</text>
<text x="80" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">y</text>
<text x="56" y="304" font-family="sans-serif" font-size="12" fill="#64748b">O</text>
<!-- Ticks on x-axis -->
<line x1="210" y1="287" x2="210" y2="293" stroke="#64748b" stroke-width="1.5"/>
<text x="207" y="306" font-family="sans-serif" font-size="11" fill="#64748b">1</text>
<line x1="350" y1="287" x2="350" y2="293" stroke="#64748b" stroke-width="1.5"/>
<text x="347" y="306" font-family="sans-serif" font-size="11" fill="#64748b">2</text>
<!-- Ticks on y-axis -->
<line x1="67" y1="235" x2="73" y2="235" stroke="#64748b" stroke-width="1.5"/>
<text x="54" y="239" font-family="sans-serif" font-size="11" fill="#64748b">1</text>
<line x1="67" y1="70" x2="73" y2="70" stroke="#64748b" stroke-width="1.5"/>
<text x="54" y="74" font-family="sans-serif" font-size="11" fill="#64748b">4</text>
<!-- Curve y = x^2 -->
<path d="M 70,290 L 98,287.8 L 126,281.2 L 154,270.2 L 182,254.8 L 210,235 L 238,210.8 L 266,182.2 L 294,149.2 L 322,111.8 L 350,70 L 378,23.8" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<text x="385" y="35" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">y = x²</text>
<!-- Tangent Line at x0=1 (passes through M0(210, 235), y = 2x - 1) -->
<line x1="98" y1="323" x2="392" y2="92" stroke="#dc2626" stroke-width="2.5"/>
<text x="396" y="102" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Tiếp tuyến (k=2)</text>
<!-- Projections for M0(1; 1) -->
<line x1="210" y1="290" x2="210" y2="235" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="70" y1="235" x2="210" y2="235" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Dynamic Secant Line -->
<line id="secant-line" x1="112" y1="305" x2="370" y2="40" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="6,4"/>
<!-- Dynamic slope triangle M0 - H - M -->
<line id="tri-dx" x1="210" y1="235" x2="350" y2="235" stroke="#059669" stroke-width="1.8" stroke-dasharray="3,3"/>
<line id="tri-dy" x1="350" y1="235" x2="350" y2="70" stroke="#059669" stroke-width="1.8" stroke-dasharray="3,3"/>
<!-- Point M0(1; 1) -->
<circle cx="210" cy="235" r="5" fill="#dc2626"/>
<text x="175" y="230" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">M₀(1; 1)</text>
<!-- Dynamic Point M -->
<circle id="point-m" cx="350" cy="70" r="6" fill="#7c3aed"/>
<text id="label-m" x="358" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">M(2; 4)</text>
</svg>
</div>
<div style="margin-top: 14px; padding: 14px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left; line-height: 1.8;">
<div>• Tỉ số số gia: <strong>Δy / Δx</strong> = (<span id="calc-dy">3.00</span>) / (<span id="calc-dx">1.00</span>) = <strong id="slope-sec" style="color: #7c3aed; font-size: 1.15em;">3.00</strong></div>
<div>• Hệ số góc tiếp tuyến thực sự: <strong style="color: #dc2626; font-size: 1.15em;">k = f'(1) = 2.00</strong></div>
<div style="color: #334155; font-size: 0.9em; margin-top: 4px; font-family: sans-serif;">
💡 <em>Nhận xét:</em> Khi kéo <strong>Δx → 0</strong>, tam giác số gia nhỏ dần, điểm $M$ tiến sát về $M_0$, cát tuyến xoay dần và <strong>trùng khít với tiếp tuyến màu đỏ</strong>. Tỉ số $\frac{\Delta y}{\Delta x}$ hội tụ đúng về $2$!
</div>
</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rDx = document.getElementById('range-dx');
  const valDx = document.getElementById('val-dx');
  const valCoordM = document.getElementById('val-coord-m');
  const ptM = document.getElementById('point-m');
  const lblM = document.getElementById('label-m');
  const secLine = document.getElementById('secant-line');
  const slopeSec = document.getElementById('slope-sec');
  const calcDx = document.getElementById('calc-dx');
  const calcDy = document.getElementById('calc-dy');
  const triDx = document.getElementById('tri-dx');
  const triDy = document.getElementById('tri-dy');

  if (!rDx || !ptM || !secLine) return;

  function toSvgX(x) { return 70 + x * 140; }
  function toSvgY(y) { return 290 - y * 55; }

  function update() {
    const dx = parseFloat(rDx.value);
    const x0 = 1, y0 = 1;
    const x = x0 + dx;
    const y = x * x;
    const dy = y - y0;
    const kMath = dy / dx;

    valDx.textContent = dx.toFixed(2);
    valCoordM.textContent = `(${x.toFixed(2)}; ${y.toFixed(2)})`;
    calcDx.textContent = dx.toFixed(2);
    calcDy.textContent = dy.toFixed(2);
    slopeSec.textContent = kMath.toFixed(2);

    const xmSvg = toSvgX(x);
    const ymSvg = toSvgY(y);

    ptM.setAttribute('cx', xmSvg);
    ptM.setAttribute('cy', ymSvg);
    lblM.setAttribute('x', xmSvg + 8);
    lblM.setAttribute('y', ymSvg + 2);
    lblM.textContent = `M(${x.toFixed(1)}; ${y.toFixed(1)})`;

    // Triangle components: M0 is at (toSvgX(1), toSvgY(1)) = (210, 235)
    // H is at (xmSvg, 235)
    triDx.setAttribute('x1', 210);
    triDx.setAttribute('y1', 235);
    triDx.setAttribute('x2', xmSvg);
    triDx.setAttribute('y2', 235);

    triDy.setAttribute('x1', xmSvg);
    triDy.setAttribute('y1', 235);
    triDy.setAttribute('x2', xmSvg);
    triDy.setAttribute('y2', ymSvg);

    // Secant line extended
    const xStart = 0.3;
    const yStart = y0 + kMath * (xStart - x0);
    const xEnd = Math.min(2.35, x0 + 4.8 / kMath);
    const yEnd = y0 + kMath * (xEnd - x0);

    secLine.setAttribute('x1', toSvgX(xStart));
    secLine.setAttribute('y1', toSvgY(yStart));
    secLine.setAttribute('x2', toSvgX(xEnd));
    secLine.setAttribute('y2', toSvgY(yEnd));
  }

  rDx.addEventListener('input', update);
  update();
});
</script>

---

## IV. Ý nghĩa Vật lý của Đạo hàm

### 1. Vận tốc tức thời trong chuyển động thẳng
Một chất điểm chuyển động thẳng có phương trình quãng đường theo thời gian là $s = s(t)$.
- Vận tốc trung bình trong khoảng thời gian từ $t_0$ đến $t_0 + \Delta t$ là:
  $$v_{tb} = \frac{\Delta s}{\Delta t} = \frac{s(t_0 + \Delta t) - s(t_0)}{\Delta t}$$
- Khi $\Delta t$ tiến dần về $0$, giới hạn này biểu thị **vận tốc tức thời** của chất điểm tại đúng thời điểm $t_0$:
  $$\mathbf{v(t_0) = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t} = s'(t_0)}$$

> [!NOTE]
> **Quy tắc vàng vật lý:**
> Vận tốc tức thời là đạo hàm của quãng đường theo thời gian: $v(t) = s'(t)$.

### 2. Cường độ dòng điện tức thời
Nếu điện lượng $Q$ truyền qua tiết diện thẳng của dây dẫn là một hàm số theo thời gian $q = q(t)$, thì **cường độ dòng điện tức thời** tại thời điểm $t_0$ là đạo hàm của điện lượng:
$$\mathbf{i(t_0) = q'(t_0)}$$

---

## V. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Tính đạo hàm bằng định nghĩa

**Bài toán 1:** Dùng định nghĩa đạo hàm, hãy tính đạo hàm của hàm số $f(x) = x^2 - 3x$ tại điểm $x_0 = 2$.

**Lời giải:**
Thực hiện theo quy trình 3 bước:
- **Bước 1:** Cho $x_0 = 2$ một số gia $\Delta x$.
  Ta có:
  $$f(2) = 2^2 - 3(2) = 4 - 6 = -2$$
  $$f(2 + \Delta x) = (2 + \Delta x)^2 - 3(2 + \Delta x) = 4 + 4\Delta x + (\Delta x)^2 - 6 - 3\Delta x = (\Delta x)^2 + \Delta x - 2$$
  Số gia hàm số:
  $$\Delta y = f(2 + \Delta x) - f(2) = [(\Delta x)^2 + \Delta x - 2] - (-2) = (\Delta x)^2 + \Delta x$$

- **Bước 2:** Lập tỉ số số gia:
  $$\frac{\Delta y}{\Delta x} = \frac{(\Delta x)^2 + \Delta x}{\Delta x} = \frac{\Delta x(\Delta x + 1)}{\Delta x} = \Delta x + 1 \quad (\text{với } \Delta x \ne 0)$$

- **Bước 3:** Lấy giới hạn khi $\Delta x \to 0$:
  $$f'(2) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} (\Delta x + 1) = 0 + 1 = 1$$
Vậy $f'(2) = 1$.

---

### Dạng 2: Viết phương trình tiếp tuyến của đồ thị hàm số

**Bài toán 2:** Cho hàm số $y = f(x) = -x^2 + 4x - 1$ có đồ thị là $(P)$.
a) Tính đạo hàm $f'(x)$ tại điểm $x_0 = 3$ bằng định nghĩa (hoặc quy tắc cơ bản: $(x^2)' = 2x$).  
b) Viết phương trình tiếp tuyến của parabol $(P)$ tại điểm $M_0$ có hoành độ $x_0 = 3$.  
c) Tìm tọa độ giao điểm của tiếp tuyến trên với hai trục tọa độ $Ox, Oy$.

**Lời giải:**
a) Với $x_0 = 3$:
$y_0 = f(3) = -(3)^2 + 4(3) - 1 = -9 + 12 - 1 = 2$. Vậy tọa độ tiếp điểm là $M_0(3; 2)$.
Tính đạo hàm tại $x_0 = 3$:
$$\Delta y = f(3 + \Delta x) - f(3) = [-(3 + \Delta x)^2 + 4(3 + \Delta x) - 1] - 2$$
$$= -[9 + 6\Delta x + (\Delta x)^2] + 12 + 4\Delta x - 1 - 2 = -(\Delta x)^2 - 2\Delta x$$
$$\frac{\Delta y}{\Delta x} = -\Delta x - 2 \implies f'(3) = \lim_{\Delta x \to 0} (-\Delta x - 2) = -2$$
Hệ số góc của tiếp tuyến là $k = f'(3) = -2$.

b) Phương trình tiếp tuyến tại $M_0(3; 2)$ là:
$$y - y_0 = f'(x_0)(x - x_0) \iff y - 2 = -2(x - 3) \iff y = -2x + 8$$

c) Giao điểm của tiếp tuyến $d: y = -2x + 8$ với các trục:
- Giao với $Oy$ ($x = 0$): $y = 8 \implies A(0; 8)$.
- Giao với $Ox$ ($y = 0$): $-2x + 8 = 0 \iff x = 4 \implies B(4; 0)$.

---

### Dạng 3: Bài toán chuyển động và vận tốc tức thời

**Bài toán 3:** Một quả bóng được bắn thẳng đứng lên trời từ mặt đất với phương trình chuyển động:
$$s(t) = 30t - 5t^2 \quad (\text{quãng đường tính bằng mét, thời gian } t \text{ tính bằng giây})$$
a) Tính vận tốc tức thời của quả bóng tại thời điểm $t = 2\text{ giây}$.  
b) Sau bao lâu kể từ lúc bắn thì quả bóng đạt độ cao cực đại? Độ cao cực đại đó bằng bao nhiêu?  
c) Khi chạm đất, vận tốc của quả bóng bằng bao nhiêu?

**Lời giải:**
a) Vận tốc tức thời $v(t) = s'(t)$.
Xét số gia tại thời điểm $t$:
$$\Delta s = s(t + \Delta t) - s(t) = 30(t + \Delta t) - 5(t + \Delta t)^2 - (30t - 5t^2)$$
$$= 30\Delta t - 10t\Delta t - 5(\Delta t)^2 = \Delta t (30 - 10t - 5\Delta t)$$
$$\frac{\Delta s}{\Delta t} = 30 - 10t - 5\Delta t \implies s'(t) = 30 - 10t$$
Vậy phương trình vận tốc tức thời là: $v(t) = 30 - 10t\text{ (m/s)}$.
Tại $t = 2\text{ s}$:
$$v(2) = 30 - 10(2) = 10\text{ m/s}$$

b) Quả bóng bay lên đến khi dừng lại trong giây lát rồi rơi xuống $\implies$ tại đỉnh cao nhất, vận tốc tức thời bằng 0:
$$v(t) = 0 \iff 30 - 10t = 0 \iff t = 3\text{ giây}$$
Độ cao cực đại của quả bóng là:
$$s_{max} = s(3) = 30(3) - 5(3)^2 = 90 - 45 = 45\text{ mét}$$

c) Quả bóng chạm đất khi độ cao $s(t) = 0$:
$$30t - 5t^2 = 0 \iff 5t(6 - t) = 0 \implies t = 6\text{ giây (vì } t > 0\text{)}$$
Vận tốc tức thời khi chạm đất là:
$$v(6) = 30 - 10(6) = -30\text{ m/s}$$
*(Dấu âm chỉ hướng chuyển động ngược lại chiều dương ban đầu, tốc độ khi chạm đất đúng bằng $30\text{ m/s}$).*

---

## VI. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Đạo hàm của hàm số y = f(x) tại điểm x_0 được định nghĩa là:",
  "options": [
    "A. lim (Δx → 0) [f(x_0 + Δx) - f(x_0)] / Δx",
    "B. [f(x_0 + Δx) - f(x_0)] / Δx",
    "C. lim (x → 0) [f(x) - f(x_0)] / x",
    "D. lim (Δx → ∞) [f(x_0 + Δx) - f(x_0)] / Δx"
  ],
  "answer": "A. lim (Δx → 0) [f(x_0 + Δx) - f(x_0)] / Δx",
  "explanation": "Theo đúng định nghĩa giải tích, f\u0027(x_0) = lim (Δx → 0) [f(x_0 + Δx) - f(x_0)] / Δx."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Ý nghĩa hình học của đạo hàm f\u0027(x_0) là gì?",
  "options": [
    "A. Là hệ số góc của tiếp tuyến của đồ thị hàm số tại điểm M_0(x_0; f(x_0))",
    "B. Là độ dài tiếp tuyến kẻ từ gốc tọa độ đến đồ thị",
    "C. Là diện tích hình phẳng giới hạn bởi đồ thị",
    "D. Là hoành độ giao điểm của tiếp tuyến với trục Ox"
  ],
  "answer": "A. Là hệ số góc của tiếp tuyến của đồ thị hàm số tại điểm M_0(x_0; f(x_0))",
  "explanation": "Hệ số góc k của tiếp tuyến tại M_0 chính là đạo hàm của hàm số tại hoành độ tiếp điểm: k = f\u0027(x_0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Phương trình tiếp tuyến của đồ thị hàm số y = f(x) tại điểm M_0(x_0; y_0) là:",
  "options": [
    "A. y = f\u0027(x_0)(x - x_0) + y_0",
    "B. y = f\u0027(x_0)(x + x_0) - y_0",
    "C. y = f(x_0)(x - x_0) + f\u0027(x_0)",
    "D. y = f\u0027(x)(x - x_0) + y_0"
  ],
  "answer": "A. y = f\u0027(x_0)(x - x_0) + y_0",
  "explanation": "Phương trình đường thẳng đi qua M_0(x_0; y_0) có hệ số góc k = f\u0027(x_0) là y - y_0 = f\u0027(x_0)(x - x_0) <=> y = f\u0027(x_0)(x - x_0) + y_0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho hàm số f(x) = x^2. Đạo hàm f\u0027(3) bằng:",
  "options": [
    "A. 6",
    "B. 9",
    "C. 3",
    "D. 12"
  ],
  "answer": "A. 6",
  "explanation": "f\u0027(x) = 2x => f\u0027(3) = 2 · 3 = 6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số f(x) có đạo hàm tại x_0. Mệnh đề nào sau đây CHẮC CHẮN ĐÚNG?",
  "options": [
    "A. Hàm số liên tục tại điểm x_0",
    "B. f\u0027(x_0) luôn luôn dương",
    "C. Hàm số đồng biến trên toàn tập xác định",
    "D. Đồ thị hàm số đi qua gốc tọa độ"
  ],
  "answer": "A. Hàm số liên tục tại điểm x_0",
  "explanation": "Định lý: Nếu hàm số có đạo hàm tại một điểm thì nó liên tục tại điểm đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Hàm số y = |x| tại điểm x = 0 có tính chất nào sau đây?",
  "options": [
    "A. Liên tục nhưng không có đạo hàm tại x = 0",
    "B. Có đạo hàm bằng 0 tại x = 0",
    "C. Không liên tục tại x = 0",
    "D. Có đạo hàm bằng 1 tại x = 0"
  ],
  "answer": "A. Liên tục nhưng không có đạo hàm tại x = 0",
  "explanation": "Hàm y = |x| liên tục tại x = 0 nhưng giới hạn bên trái bằng -1, giới hạn bên phải bằng 1, do đó không tồn tại đạo hàm tại x = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một vật chuyển động thẳng xác định bởi phương trình s(t) = t^3 - 3t^2 + 5 (t tính bằng giây, s tính bằng mét). Vận tốc tức thời tại thời điểm t = 2s là:",
  "options": [
    "A. 0 m/s",
    "B. 3 m/s",
    "C. 12 m/s",
    "D. 5 m/s"
  ],
  "answer": "A. 0 m/s",
  "explanation": "v(t) = s\u0027(t) = 3t^2 - 6t. Tại t = 2s: v(2) = 3(2^2) - 6(2) = 12 - 12 = 0 m/s."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho đồ thị hàm số y = f(x). Tiếp tuyến của đồ thị tại điểm có hoành độ x_0 SONG SONG với trục hoành Ox khi và chỉ khi:",
  "options": [
    "A. f\u0027(x_0) = 0",
    "B. f(x_0) = 0",
    "C. f\u0027(x_0) = 1",
    "D. f\u0027(x_0) không tồn tại"
  ],
  "answer": "A. f\u0027(x_0) = 0",
  "explanation": "Trục hoành Ox có phương trình y = 0 (hệ số góc bằng 0). Đường thẳng song song với Ox phải có hệ số góc k = f\u0027(x_0) = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tiếp tuyến của đồ thị hàm số y = 2x^2 + 1 tại điểm có hoành độ x_0 = 1 có phương trình là:",
  "options": [
    "A. y = 4x - 1",
    "B. y = 4x + 3",
    "C. y = 2x + 1",
    "D. y = 4x + 1"
  ],
  "answer": "A. y = 4x - 1",
  "explanation": "Với x_0 = 1 => y_0 = 2(1^2) + 1 = 3. Đạo hàm y\u0027 = 4x => y\u0027(1) = 4. Phương trình tiếp tuyến: y - 3 = 4(x - 1) <=> y = 4x - 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Số gia của hàm số f(x) = x^2 ứng với x_0 = 1 và Δx = 0.1 là:",
  "options": [
    "A. 0.21",
    "B. 0.20",
    "C. 0.01",
    "D. 1.21"
  ],
  "answer": "A. 0.21",
  "explanation": "Δy = f(1 + 0.1) - f(1) = f(1.1) - f(1) = 1.1^2 - 1^2 = 1.21 - 1 = 0.21."
}'></div>

---

## VII. Ứng dụng Thực tế: Vận tốc Thoát Ly và Quỹ đạo Phóng Tên lửa Vũ trụ

Khi các kỹ sư tại Trung tâm Vũ trụ phóng một tên lửa đẩy để đưa vệ tinh viễn thông lên quỹ đạo địa tĩnh:

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Bài toán Hàng không Vũ trụ:</strong><br>
Trong giai đoạn kích hoạt tầng động cơ thứ nhất kéo dài 100 giây, độ cao $h$ (tính bằng mét) của tên lửa theo thời gian $t$ (giây) được mô tả xấp xỉ bởi hàm đa thức bậc ba:<br>
$$h(t) = 0.5 t^3 + 10 t^2 \quad (0 \le t \le 100)$$
1. Hãy tìm hàm số biểu diễn vận tốc tức thời $v(t)$ của tên lửa trong giai đoạn này.<br>
2. Tính vận tốc tức thời của tên lửa tại thời điểm $t = 60\text{ giây}$ (khi vượt qua tầng đối lưu).<br>
3. Để tên lửa thoát khỏi lực cản tầng khí quyển dày đặc an toàn, vận tốc tại thời điểm kết thúc tầng 1 ($t = 100\text{ s}$) cần đạt tối thiểu $15\,000\text{ m/s}$. Tên lửa này có đáp ứng tiêu chuẩn đó không?
</div>

> [!TIP]
> **Giải pháp kỹ thuật vi tích phân:**
> 1. Vận tốc tức thời là đạo hàm của độ cao theo thời gian:
>    $$v(t) = h'(t) = 0.5 \cdot (3t^2) + 10 \cdot (2t) = 1.5 t^2 + 20 t \quad (\text{m/s})$$
> 2. Tại $t = 60\text{ s}$:
>    $$v(60) = 1.5 \times (60)^2 + 20 \times 60 = 1.5 \times 3600 + 1200 = 5400 + 1200 = 6\,600\text{ m/s} \approx 23\,760\text{ km/h}$$
> 3. Tại thời điểm $t = 100\text{ s}$:
>    $$v(100) = 1.5 \times (100)^2 + 20 \times 100 = 1.5 \times 10\,000 + 2\,000 = 15\,000 + 2\,000 = 17\,000\text{ m/s}$$
>    Vì $17\,000\text{ m/s} > 15\,000\text{ m/s}$, động cơ tên lửa hoàn toàn đáp ứng xuất sắc yêu cầu kỹ thuật để đưa vệ tinh vào quỹ đạo chuyển tiếp!
