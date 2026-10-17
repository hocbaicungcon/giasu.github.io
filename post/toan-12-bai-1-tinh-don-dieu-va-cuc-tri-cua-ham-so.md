---
title: 'Toán 12 Bài 1: Tính đơn điệu và cực trị của hàm số - Bản chất và phương pháp giải'
description: 'Lý thuyết trọng tâm Bài 1 Toán 12 Kết nối tri thức: Điều kiện đồng biến nghịch biến của hàm số, định lý dấu đạo hàm f''(x), điều kiện cực đại cực tiểu (dấu hiệu 1 và dấu hiệu 2), mô phỏng đồ thị hàm bậc ba tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Đơn điệu
  - Đồng biến nghịch biến
  - Cực trị
  - Cực đại cực tiểu
  - Bảng biến thiên
  - Kết nối tri thức
grade: 12
---

# Bài 1. Tính đơn điệu và cực trị của hàm số

Chào mừng các em bước vào chương trình **Toán học lớp 12** — năm học then chốt hướng tới Kỳ thi Tốt nghiệp THPT và Tuyển sinh Đại học! 

Mở đầu chương trình lớp 12 là **Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số**. Nếu ở lớp 11, chúng ta đã học cách tính đạo hàm $f'(x)$ và hiểu ý nghĩa của nó là tiếp tuyến và vận tốc, thì ở lớp 12, đạo hàm sẽ trở thành "chiếc kính hiển vi" thần kỳ giúp chúng ta nhìn thấu mọi ngóc ngách của đồ thị hàm số:
- Khi nào hàm số **tăng lên (đồng biến)**?
- Khi nào hàm số **giảm xuống (nghịch biến)**?
- Đâu là những đỉnh cao nhất cục bộ (**Cực đại**) và đáy sâu nhất cục bộ (**Cực tiểu**)?

Những khái niệm này không chỉ phục vụ các bài toán hình học phẳng, mà còn là trái tim của mọi mô hình tối ưu hóa trong đời sống: từ việc tìm thời điểm bán cổ phiếu đạt đỉnh, tối ưu hóa lợi nhuận của doanh nghiệp, cho đến việc dự đoán đỉnh dịch bệnh trong y tế cộng đồng.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY: MỐI LIÊN HỆ GIỮA ĐẠO HÀM, ĐƠN ĐIỆU VÀ CỰC TRỊ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">1. Hàm số Đồng biến ($\nearrow$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $x$ tăng thì $y$ tăng.<br>
• Dấu đạo hàm: $\mathbf{f'(x) \ge 0}$ trên khoảng $K$ (dấu bằng chỉ tại hữu hạn điểm).<br>
• Tiếp tuyến có hệ số góc dương ($k > 0$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="margin: 0 0 8px 0; color: #b91c1c;">2. Hàm số Nghịch biến ($\searrow$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $x$ tăng thì $y$ giảm.<br>
• Dấu đạo hàm: $\mathbf{f'(x) \le 0}$ trên khoảng $K$ (dấu bằng chỉ tại hữu hạn điểm).<br>
• Tiếp tuyến có hệ số góc âm ($k < 0$).
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">3. Điểm Cực đại (Đỉnh)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $f'(x)$ đổi dấu từ <strong>dương (+) sang âm (-)</strong> khi qua $x_0$.<br>
• Đồ thị chuyển từ đi lên sang đi xuống.<br>
• Dấu hiệu 2: $f'(x_0) = 0$ và $f''(x_0) < 0$.
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">4. Điểm Cực tiểu (Đáy)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $f'(x)$ đổi dấu từ <strong>âm (-) sang dương (+)</strong> khi qua $x_0$.<br>
• Đồ thị chuyển từ đi xuống sang đi lên.<br>
• Dấu hiệu 2: $f'(x_0) = 0$ và $f''(x_0) > 0$.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Xét parabol $y = x^2$. Khi $x$ tăng từ $-2$ đến $0$, giá trị của $y$ tăng hay giảm? Khoảng $(-\infty; 0)$ là khoảng đồng biến hay nghịch biến?
2. Tiếp tục với $y = x^2$, khi $x$ tăng từ $0$ đến $3$, giá trị của $y$ tăng hay giảm? Đỉnh $(0; 0)$ là cực đại hay cực tiểu?
3. Tính đạo hàm của $y = x^2$. Khi $x > 0$ thì $y'$ mang dấu gì? Khi $x < 0$ thì $y'$ mang dấu gì?
4. Nếu một đường thẳng có hệ số góc $k = f'(x_0) = 0$, tiếp tuyến đó có vị trí tương đối thế nào với trục hoành?
5. Một hàm số có đồ thị đi lên rồi đi xuống qua điểm $x = 1$. Tại điểm $x = 1$, hàm số đạt cực đại hay cực tiểu?

> [!TIP]
> **Đáp án nhanh:**
> 1. $y$ giảm từ $4$ về $0$ $\implies$ Nghịch biến trên $(-\infty; 0)$.
> 2. $y$ tăng từ $0$ lên $9$ $\implies$ Đồng biến trên $(0; +\infty)$. Điểm $(0; 0)$ là điểm cực tiểu (đáy).
> 3. $y' = 2x$. Khi $x > 0 \implies y' > 0$ (đồng biến); khi $x < 0 \implies y' < 0$ (nghịch biến).
> 4. Tiếp tuyến nằm ngang (song song hoặc trùng với trục hoành $Ox$).
> 5. Hàm số đạt cực đại tại $x = 1$.

---

## I. Tính đơn điệu của hàm số

### 1. Nhắc lại định nghĩa
Cho hàm số $y = f(x)$ xác định trên một khoảng, đoạn hoặc nửa khoảng (gọi chung là tập $K \subset \mathbb{R}$).
- Hàm số $y = f(x)$ được gọi là **đồng biến (tăng)** trên $K$ nếu:
  $$\forall x_1, x_2 \in K: x_1 < x_2 \implies f(x_1) < f(x_2)$$
- Hàm số $y = f(x)$ được gọi là **nghịch biến (giảm)** trên $K$ nếu:
  $$\forall x_1, x_2 \in K: x_1 < x_2 \implies f(x_1) > f(x_2)$$
- Hàm số đồng biến hoặc nghịch biến trên $K$ được gọi chung là **đơn điệu** trên $K$.

### 2. Định lý về mối liên hệ giữa Đạo hàm và Tính đơn điệu
Giả sử hàm số $y = f(x)$ có đạo hàm trên khoảng $K$.

> [!IMPORTANT]
> **Định lý 1 (Điều kiện đủ của tính đơn điệu):**
> 1. Nếu $\mathbf{f'(x) > 0}$ với mọi $x \in K$ thì hàm số $f(x)$ **đồng biến** trên khoảng $K$.
> 2. Nếu $\mathbf{f'(x) < 0}$ với mọi $x \in K$ thì hàm số $f(x)$ **nghịch biến** trên khoảng $K$.
> 3. Nếu $\mathbf{f'(x) = 0}$ với mọi $x \in K$ thì hàm số $f(x)$ là **hàm hằng** (không đổi) trên khoảng $K$.

### 3. Định lý mở rộng (Trường hợp $f'(x) = 0$ tại hữu hạn điểm)
> [!NOTE]
> **Định lý mở rộng:**
> Nếu hàm số $y = f(x)$ liên tục trên khoảng $K$ và có đạo hàm:
> - $f'(x) \ge 0, \forall x \in K$ và $f'(x) = 0$ chỉ tại một số **hữu hạn điểm** thì hàm số **đồng biến** trên $K$.
> - $f'(x) \le 0, \forall x \in K$ và $f'(x) = 0$ chỉ tại một số **hữu hạn điểm** thì hàm số **nghịch biến** trên $K$.

*Ví dụ:* Hàm số $y = x^3$ có $y' = 3x^2 \ge 0, \forall x \in \mathbb{R}$. Đạo hàm triệt tiêu tại đúng 1 điểm duy nhất $x = 0$. Vì thế, hàm số $y = x^3$ đồng biến trên toàn bộ trục số $(-\infty; +\infty)$.

---

## II. Cực trị của hàm số

### 1. Định nghĩa Cực đại và Cực tiểu
Cho hàm số $y = f(x)$ xác định trên tập $D$ và $x_0 \in D$.

> [!IMPORTANT]
> **Định nghĩa Cực trị:**
> 1. Điểm $x_0$ được gọi là **điểm cực đại** của hàm số $f(x)$ nếu tồn tại một khoảng $(a; b)$ chứa $x_0$ sao cho:
>    $$f(x) < f(x_0), \quad \forall x \in (a; b) \setminus \{x_0\}$$
>    Khi đó, $f(x_0)$ được gọi là **giá trị cực đại** (hay cực đại) của hàm số, kí hiệu là $y_{\text{CĐ}}$. Điểm $M_0(x_0; f(x_0))$ trên mặt phẳng tọa độ gọi là **điểm cực đại của đồ thị hàm số**.
>
> 2. Điểm $x_0$ được gọi là **điểm cực tiểu** của hàm số $f(x)$ nếu tồn tại một khoảng $(a; b)$ chứa $x_0$ sao cho:
>    $$f(x) > f(x_0), \quad \forall x \in (a; b) \setminus \{x_0\}$$
>    Khi đó, $f(x_0)$ được gọi là **giá trị cực tiểu** (hay cực tiểu) của hàm số, kí hiệu là $y_{\text{CT}}$. Điểm $M_0(x_0; f(x_0))$ gọi là **điểm cực tiểu của đồ thị hàm số**.

> [!WARNING]
> **Phân biệt thuật ngữ để tránh mất điểm:**
> - **Điểm cực trị của hàm số:** Là giá trị của biến số $x$ (ví dụ: $x = 2$).
> - **Cực trị (hoặc giá trị cực trị) của hàm số:** Là giá trị của $y$ (ví dụ: $y_{\text{CĐ}} = 5$).
> - **Điểm cực trị của đồ thị hàm số:** Là một cặp tọa độ $(x; y)$ trên mặt phẳng (ví dụ: $M(2; 5)$).

### 2. Điều kiện cần để hàm số đạt cực trị (Định lý Fermat)
Nếu hàm số $y = f(x)$ đạt cực trị tại điểm $x_0$ và nếu hàm số có đạo hàm tại $x_0$ thì:
$$\mathbf{f'(x_0) = 0}$$

*Lưu ý:* Những điểm mà tại đó $f'(x) = 0$ hoặc $f'(x)$ không xác định được gọi là các **điểm tới hạn (critical points)** của hàm số.

### 3. Điều kiện đủ để hàm số đạt cực trị

#### Dấu hiệu 1 (Dựa vào sự đổi dấu của đạo hàm $f'(x)$)
Giả sử hàm số $y = f(x)$ liên tục trên khoảng $(a; b)$ chứa $x_0$ và có đạo hàm trên $(a; b) \setminus \{x_0\}$:
- Nếu $f'(x)$ **đổi dấu từ dương (+) sang âm (-)** khi $x$ đi qua $x_0$ (từ trái sang phải) thì $x_0$ là **điểm cực đại**.
- Nếu $f'(x)$ **đổi dấu từ âm (-) sang dương (+)** khi $x$ đi qua $x_0$ (từ trái sang phải) thì $x_0$ là **điểm cực tiểu**.
- Nếu $f'(x)$ **không đổi dấu** khi $x$ đi qua $x_0$ thì điểm $x_0$ **không phải là điểm cực trị**.

<div style="margin: 20px auto; max-width: 640px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
<div style="font-weight: bold; color: #1e293b; text-align: center; margin-bottom: 12px;">HÌNH HỌC HÓA BẢNG BIẾN THIÊN THEO DẤU HIỆU 1</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
<div>
<div style="font-size: 0.9em; font-weight: bold; color: #166534; text-align: center; margin-bottom: 6px;">1. ĐIỂM CỰC ĐẠI (Đổi dấu: + qua 0 sang −)</div>
<svg viewBox="0 0 280 150" width="100%" class="lesson-diagram">
<defs><marker id="arr-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#166534"/></marker></defs>
<line x1="45" y1="0" x2="45" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="35" x2="280" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="70" x2="280" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
<text x="22" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">x</text>
<text x="22" y="58" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">f'(x)</text>
<text x="22" y="115" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">f(x)</text>
<text x="70" y="24" text-anchor="middle" font-size="13" fill="#64748b">a</text>
<text x="160" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">x₀</text>
<text x="250" y="24" text-anchor="middle" font-size="13" fill="#64748b">b</text>
<text x="110" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="160" y="58" text-anchor="middle" font-size="14" fill="#64748b">0</text>
<text x="210" y="58" text-anchor="middle" font-weight="bold" font-size="18" fill="#dc2626">−</text>
<line x1="75" y1="135" x2="148" y2="92" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-g)"/>
<text x="160" y="88" text-anchor="middle" font-weight="bold" font-size="13" fill="#15803d">f(x₀) (CĐ)</text>
<line x1="172" y1="92" x2="245" y2="135" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-g)"/>
</svg>
</div>
<div>
<div style="font-size: 0.9em; font-weight: bold; color: #b45309; text-align: center; margin-bottom: 6px;">2. ĐIỂM CỰC TIỂU (Đổi dấu: − qua 0 sang +)</div>
<svg viewBox="0 0 280 150" width="100%" class="lesson-diagram">
<defs><marker id="arr-o" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b45309"/></marker></defs>
<line x1="45" y1="0" x2="45" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="35" x2="280" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="70" x2="280" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
<text x="22" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">x</text>
<text x="22" y="58" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">f'(x)</text>
<text x="22" y="115" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">f(x)</text>
<text x="70" y="24" text-anchor="middle" font-size="13" fill="#64748b">a</text>
<text x="160" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">x₀</text>
<text x="250" y="24" text-anchor="middle" font-size="13" fill="#64748b">b</text>
<text x="110" y="58" text-anchor="middle" font-weight="bold" font-size="18" fill="#dc2626">−</text>
<text x="160" y="58" text-anchor="middle" font-size="14" fill="#64748b">0</text>
<text x="210" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<line x1="75" y1="92" x2="148" y2="135" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-o)"/>
<text x="160" y="145" text-anchor="middle" font-weight="bold" font-size="13" fill="#b45309">f(x₀) (CT)</text>
<line x1="172" y1="135" x2="245" y2="92" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-o)"/>
</svg>
</div>
</div>
</div>

#### Dấu hiệu 2 (Dựa vào đạo hàm cấp hai $f''(x)$)
Giả sử hàm số $y = f(x)$ có đạo hàm cấp một và cấp hai trên khoảng $(a; b)$ chứa $x_0$, và $f'(x_0) = 0$:
- Nếu $\mathbf{f''(x_0) < 0}$ thì hàm số đạt **cực đại** tại điểm $x_0$.
- Nếu $\mathbf{f''(x_0) > 0}$ thì hàm số đạt **cực tiểu** tại điểm $x_0$.

---

## Công cụ trực quan: Mô phỏng Đơn điệu & Cực trị Hàm số bậc ba

Dưới đây là đồ thị hàm số bậc ba chuẩn mực $y = \frac{1}{3}x^3 - x^2 - 3x + 2$.
Hãy kéo thanh trượt hoặc chạm/kéo trực tiếp điểm $M$ trên đồ thị để quan sát tiếp tuyến (màu cam), dấu của đạo hàm $y' = x^2 - 2x - 3$ và vị trí hai điểm cực trị:

<div id="cubic-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
<h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG ĐỒ THỊ BẬC BA: y = ⅓x³ - x² - 3x + 2</h4>
<div style="max-width: 500px; margin: 0 auto 16px auto; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
<label style="font-weight: 600; color: #1e293b; display: block; margin-bottom: 8px;">
Kéo thanh trượt hoặc kéo thả điểm M: <span id="val-probe-x" style="font-size: 1.2em; color: #2563eb; font-weight: bold;">-1.00</span>
(Tọa độ điểm M: <span id="val-probe-coord" style="font-weight: bold; color: #ea580c;">(-1.00; 3.67)</span>)
</label>
<input type="range" id="range-probe-x" min="-3" max="5" step="0.05" value="-1.00" style="width: 100%;">
</div>
<div style="display: flex; justify-content: center; overflow-x: auto;">
<svg id="cubic-svg" data-interactive-done="true" viewBox="0 0 520 340" width="100%" style="max-width: 520px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1; user-select: none; touch-action: none; cursor: crosshair;">
<!-- Coordinate Axes: Origin at (210, 160). Scale: 36px/unit in x, 12px/unit in y -->
<line x1="30" y1="160" x2="490" y2="160" stroke="#64748b" stroke-width="1.5"/>
<line x1="210" y1="325" x2="210" y2="15" stroke="#64748b" stroke-width="1.5"/>
<polygon points="490,157 498,160 490,163" fill="#64748b"/>
<polygon points="207,15 210,7 213,15" fill="#64748b"/>
<text x="485" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">x</text>
<text x="220" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">y</text>
<text x="198" y="174" font-family="sans-serif" font-size="12" fill="#64748b">O</text>
<!-- Ticks on x-axis -->
<line x1="102" y1="157" x2="102" y2="163" stroke="#94a3b8" stroke-width="1"/>
<text x="102" y="174" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">-3</text>
<line x1="174" y1="157" x2="174" y2="163" stroke="#94a3b8" stroke-width="1"/>
<text x="174" y="174" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">-1</text>
<line x1="246" y1="157" x2="246" y2="163" stroke="#94a3b8" stroke-width="1"/>
<text x="246" y="174" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">1</text>
<line x1="318" y1="157" x2="318" y2="163" stroke="#94a3b8" stroke-width="1"/>
<text x="318" y="174" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">3</text>
<line x1="390" y1="157" x2="390" y2="163" stroke="#94a3b8" stroke-width="1"/>
<text x="390" y="174" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">5</text>
<!-- Ticks on y-axis -->
<line x1="207" y1="116" x2="213" y2="116" stroke="#94a3b8" stroke-width="1"/>
<text x="195" y="120" font-family="sans-serif" font-size="11" text-anchor="end" fill="#64748b">3.7</text>
<line x1="207" y1="244" x2="213" y2="244" stroke="#94a3b8" stroke-width="1"/>
<text x="195" y="248" font-family="sans-serif" font-size="11" text-anchor="end" fill="#64748b">-7</text>
<!-- Smooth Mathematically Exact Cubic Curve -->
<path id="curve-cubic" d="M 93.0 283.1 L 94.8 274.8 L 96.6 266.7 L 98.4 258.9 L 100.2 251.3 L 102.0 244.0 L 103.8 236.9 L 105.6 230.1 L 107.4 223.5 L 109.2 217.1 L 111.0 210.9 L 112.8 205.0 L 114.6 199.3 L 116.4 193.8 L 118.2 188.6 L 120.0 183.5 L 121.8 178.7 L 123.6 174.0 L 125.4 169.6 L 127.2 165.3 L 129.0 161.3 L 130.8 157.5 L 132.6 153.8 L 134.4 150.4 L 136.2 147.1 L 138.0 144.0 L 139.8 141.1 L 141.6 138.4 L 143.4 135.8 L 145.2 133.4 L 147.0 131.2 L 148.8 129.1 L 150.6 127.2 L 152.4 125.5 L 154.2 123.9 L 156.0 122.5 L 157.8 121.2 L 159.6 120.1 L 161.4 119.1 L 163.2 118.3 L 165.0 117.6 L 166.8 117.0 L 168.6 116.6 L 170.4 116.2 L 172.2 116.1 L 174.0 116.0 L 175.8 116.1 L 177.6 116.2 L 179.4 116.5 L 181.2 116.9 L 183.0 117.4 L 184.8 118.1 L 186.6 118.8 L 188.4 119.6 L 190.2 120.5 L 192.0 121.5 L 193.8 122.6 L 195.6 123.8 L 197.4 125.0 L 199.2 126.4 L 201.0 127.8 L 202.8 129.3 L 204.6 130.9 L 206.4 132.5 L 208.2 134.2 L 210.0 136.0 L 211.8 137.8 L 213.6 139.7 L 215.4 141.7 L 217.2 143.6 L 219.0 145.7 L 220.8 147.8 L 222.6 149.9 L 224.4 152.1 L 226.2 154.3 L 228.0 156.5 L 229.8 158.8 L 231.6 161.1 L 233.4 163.4 L 235.2 165.7 L 237.0 168.1 L 238.8 170.4 L 240.6 172.8 L 242.4 175.2 L 244.2 177.6 L 246.0 180.0 L 247.8 182.4 L 249.6 184.8 L 251.4 187.2 L 253.2 189.6 L 255.0 191.9 L 256.8 194.3 L 258.6 196.6 L 260.4 198.9 L 262.2 201.2 L 264.0 203.5 L 265.8 205.7 L 267.6 207.9 L 269.4 210.1 L 271.2 212.2 L 273.0 214.3 L 274.8 216.4 L 276.6 218.3 L 278.4 220.3 L 280.2 222.2 L 282.0 224.0 L 283.8 225.8 L 285.6 227.5 L 287.4 229.1 L 289.2 230.7 L 291.0 232.2 L 292.8 233.6 L 294.6 235.0 L 296.4 236.2 L 298.2 237.4 L 300.0 238.5 L 301.8 239.5 L 303.6 240.4 L 305.4 241.2 L 307.2 241.9 L 309.0 242.6 L 310.8 243.1 L 312.6 243.5 L 314.4 243.8 L 316.2 243.9 L 318.0 244.0 L 319.8 243.9 L 321.6 243.8 L 323.4 243.4 L 325.2 243.0 L 327.0 242.4 L 328.8 241.7 L 330.6 240.9 L 332.4 239.9 L 334.2 238.8 L 336.0 237.5 L 337.8 236.1 L 339.6 234.5 L 341.4 232.8 L 343.2 230.9 L 345.0 228.8 L 346.8 226.6 L 348.6 224.2 L 350.4 221.6 L 352.2 218.9 L 354.0 216.0 L 355.8 212.9 L 357.6 209.6 L 359.4 206.2 L 361.2 202.5 L 363.0 198.7 L 364.8 194.7 L 366.6 190.4 L 368.4 186.0 L 370.2 181.3 L 372.0 176.5 L 373.8 171.4 L 375.6 166.2 L 377.4 160.7 L 379.2 155.0 L 381.0 149.1 L 382.8 142.9 L 384.6 136.5 L 386.4 129.9 L 388.2 123.1 L 390.0 116.0 L 391.8 108.7 L 393.6 101.1 L 395.4 93.3 L 397.2 85.2 L 399.0 76.9" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<text x="405" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">y = f(x)</text>
<!-- Extremum Projections and Points (Fixed Markers) -->
<!-- Cực đại: x = -1, y = 3.67 (174, 116) -->
<line x1="174" y1="160" x2="174" y2="116" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="210" y1="116" x2="174" y2="116" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/>
<circle cx="174" cy="116" r="5" fill="#10b981"/>
<text x="165" y="105" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">CĐ (−1; 3.67)</text>
<!-- Cực tiểu: x = 3, y = -7 (318, 244) -->
<line x1="318" y1="160" x2="318" y2="244" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="210" y1="244" x2="318" y2="244" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/>
<circle cx="318" cy="244" r="5" fill="#f59e0b"/>
<text x="325" y="260" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">CT (3; −7)</text>
<!-- Dynamic Projections for Probe Point M -->
<line id="probe-proj-x" x1="174" y1="160" x2="174" y2="116" stroke="#ea580c" stroke-width="1" stroke-dasharray="2,2"/>
<line id="probe-proj-y" x1="210" y1="116" x2="174" y2="116" stroke="#ea580c" stroke-width="1" stroke-dasharray="2,2"/>
<!-- Dynamic Tangent line -->
<line id="probe-tangent" x1="120" y1="116" x2="228" y2="116" stroke="#ea580c" stroke-width="2.5"/>
<!-- Probe Point M (Draggable along curve) -->
<circle id="probe-pt" cx="174" cy="116" r="7" fill="#ea580c" stroke="#ffffff" stroke-width="2" style="cursor: grab; touch-action: none;"/>
</svg>
</div>
<div id="probe-status" style="margin-top: 14px; padding: 14px; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 1.05em; text-align: left; line-height: 1.8;">
<div>• Đạo hàm cấp 1: <strong id="val-deriv" style="color: #ea580c; font-size: 1.15em;">y' = 0.00</strong> <span style="color: #64748b; font-size: 0.9em;">(y' = x² - 2x - 3)</span></div>
<div>• Đạo hàm cấp 2: <strong id="val-d2" style="color: #475569;">y'' = -4.00</strong></div>
<div style="margin-top: 6px;">• Trạng thái khảo sát: <span id="val-state"><strong style="color: #047857; font-size: 1.1em;">ĐIỂM CỰC ĐẠI</strong> (tiếp tuyến nằm ngang k = 0, f''(x) &lt; 0)</span></div>
</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const rX = document.getElementById('range-probe-x');
  const valX = document.getElementById('val-probe-x');
  const valCoord = document.getElementById('val-probe-coord');
  const valDeriv = document.getElementById('val-deriv');
  const valD2 = document.getElementById('val-d2');
  const valState = document.getElementById('val-state');
  const lineTan = document.getElementById('probe-tangent');
  const ptProbe = document.getElementById('probe-pt');
  const projX = document.getElementById('probe-proj-x');
  const projY = document.getElementById('probe-proj-y');
  const svg = document.getElementById('cubic-svg');

  if (!rX || !lineTan || !ptProbe || !svg) return;

  const originX = 210, originY = 160;
  const scaleX = 36, scaleY = 12;

  function f(x) { return (x*x*x)/3 - x*x - 3*x + 2; }
  function df(x) { return x*x - 2*x - 3; }
  function d2f(x) { return 2*x - 2; }

  function update() {
    const x = parseFloat(rX.value);
    const y = f(x);
    const slope = df(x);
    const d2 = d2f(x);

    valX.textContent = x.toFixed(2);
    valCoord.textContent = `(${x.toFixed(2)}; ${y.toFixed(2)})`;
    valDeriv.textContent = `y' = ${slope.toFixed(2)}`;
    valD2.textContent = `y'' = ${d2.toFixed(2)}`;

    const sx = originX + x * scaleX;
    const sy = originY - y * scaleY;

    ptProbe.setAttribute('cx', sx);
    ptProbe.setAttribute('cy', sy);

    projX.setAttribute('x1', sx);
    projX.setAttribute('y1', 160);
    projX.setAttribute('x2', sx);
    projX.setAttribute('y2', sy);

    projY.setAttribute('x1', 210);
    projY.setAttribute('y1', sy);
    projY.setAttribute('x2', sx);
    projY.setAttribute('y2', sy);

    // Tangent endpoints in screen pixels
    const kScreen = -slope * (scaleY / scaleX);
    const len = 60;
    const dxScreen = len / Math.sqrt(1 + kScreen * kScreen);
    const dyScreen = kScreen * dxScreen;

    lineTan.setAttribute('x1', sx - dxScreen);
    lineTan.setAttribute('y1', sy - dyScreen);
    lineTan.setAttribute('x2', sx + dxScreen);
    lineTan.setAttribute('y2', sy + dyScreen);

    if (Math.abs(x - (-1)) < 0.12) {
      valState.innerHTML = '<strong style="color: #047857; font-size: 1.1em;">ĐIỂM CỰC ĐẠI</strong> (y\' = 0, y\'\' = -4 &lt; 0, đồ thị chuyển từ đồng biến sang nghịch biến)';
    } else if (Math.abs(x - 3) < 0.12) {
      valState.innerHTML = '<strong style="color: #b45309; font-size: 1.1em;">ĐIỂM CỰC TIỂU</strong> (y\' = 0, y\'\' = 4 &gt; 0, đồ thị chuyển từ nghịch biến sang đồng biến)';
    } else if (slope > 0) {
      valState.innerHTML = '<strong style="color: #2563eb; font-size: 1.05em;">Hàm số ĐỒNG BIẾN</strong> (y\' &gt; 0, tiếp tuyến dốc lên, đồ thị đang đi lên)';
    } else {
      valState.innerHTML = '<strong style="color: #dc2626; font-size: 1.05em;">Hàm số NGHỊCH BIẾN</strong> (y\' &lt; 0, tiếp tuyến dốc xuống, đồ thị đang đi xuống)';
    }
  }

  rX.addEventListener('input', update);

  // Drag interaction exclusively for point M along the curve
  let isDragging = false;
  function getSvgX(e) {
    const rect = svg.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    return (clientX - rect.left) * (520 / rect.width);
  }

  function onPointerDown(e) {
    isDragging = true;
    ptProbe.style.cursor = 'grabbing';
    try { svg.setPointerCapture(e.pointerId); } catch {}
    onPointerMove(e);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const svgX = getSvgX(e);
    let x = (svgX - originX) / scaleX;
    if (x < -3) x = -3;
    if (x > 5) x = 5;
    rX.value = x.toFixed(2);
    update();
  }

  function onPointerUp(e) {
    if (isDragging) {
      isDragging = false;
      ptProbe.style.cursor = 'grab';
      try { svg.releasePointerCapture(e.pointerId); } catch {}
    }
  }

  svg.addEventListener('pointerdown', function(e) {
    const svgX = getSvgX(e);
    const curX = parseFloat(rX.value);
    const curSx = originX + curX * scaleX;
    const dist = Math.abs(svgX - curSx);
    // Allow dragging when clicking near probe point M or anywhere on the graph
    if (dist < 45 || e.target.id === 'probe-pt' || e.target.id === 'curve-cubic') {
      onPointerDown(e);
    }
  });

  svg.addEventListener('pointermove', onPointerMove);
  svg.addEventListener('pointerup', onPointerUp);
  svg.addEventListener('pointercancel', onPointerUp);

  update();
});
</script>

---

## III. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Xét tính đơn điệu và tìm cực trị của hàm đa thức

**Bài toán 1:** Xét tính đơn điệu và tìm các điểm cực trị của hàm số:
$$y = f(x) = 2x^3 - 3x^2 - 12x + 1$$

**Lời giải:**
- **Tập xác định:** $D = \mathbb{R}$.
- **Đạo hàm:**
  $$y' = 6x^2 - 6x - 12 = 6(x^2 - x - 2)$$
- **Nghiệm đạo hàm:**
  $$y' = 0 \iff x^2 - x - 2 = 0 \iff \left[\begin{array}{l} x = -1 \\ x = 2 \end{array}\right.$$
- **Tính các giá trị tương ứng:**
  $$f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 1 = -2 - 3 + 12 + 1 = 8$$
  $$f(2) = 2(2)^3 - 3(2)^2 - 12(2) + 1 = 16 - 12 - 24 + 1 = -19$$
- **Bảng biến thiên:**

<div style="margin: 20px auto; max-width: 580px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); text-align: center;">
<div style="font-weight: bold; color: #1e293b; margin-bottom: 8px;">BẢNG BIẾN THIÊN HÀM BẬC BA: y = 2x³ - 3x² - 12x + 1</div>
<svg viewBox="0 0 540 170" width="100%" class="lesson-diagram">
<defs><marker id="arr-bt1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/></marker></defs>
<line x1="65" y1="0" x2="65" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="36" x2="540" y2="36" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="72" x2="540" y2="72" stroke="#94a3b8" stroke-width="1.5"/>
<text x="32" y="24" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">x</text>
<text x="32" y="58" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">y'</text>
<text x="32" y="125" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">y</text>
<text x="95" y="24" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<text x="210" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">−1</text>
<text x="350" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">2</text>
<text x="495" y="24" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
<text x="145" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="210" y="58" text-anchor="middle" font-size="14" fill="#64748b">0</text>
<text x="280" y="58" text-anchor="middle" font-weight="bold" font-size="18" fill="#dc2626">−</text>
<text x="350" y="58" text-anchor="middle" font-size="14" fill="#64748b">0</text>
<text x="425" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="95" y="156" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<line x1="115" y1="148" x2="195" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt1)"/>
<text x="210" y="94" text-anchor="middle" font-weight="bold" font-size="14" fill="#047857">8</text>
<line x1="225" y1="100" x2="335" y2="148" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt1)"/>
<text x="350" y="156" text-anchor="middle" font-weight="bold" font-size="14" fill="#b45309">−19</text>
<line x1="365" y1="148" x2="475" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt1)"/>
<text x="495" y="94" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
</svg>
</div>

- **Kết luận:**
  + Hàm số **đồng biến** trên các khoảng $(-\infty; -1)$ và $(2; +\infty)$.
  + Hàm số **nghịch biến** trên khoảng $(-1; 2)$.
  + Hàm số đạt **cực đại** tại điểm $x = -1$, giá trị cực đại là $y_{\text{CĐ}} = 8$. Điểm cực đại của đồ thị là $M(-1; 8)$.
  + Hàm số đạt **cực tiểu** tại điểm $x = 2$, giá trị cực tiểu là $y_{\text{CT}} = -19$. Điểm cực tiểu của đồ thị là $N(2; -19)$.

---

### Dạng 2: Tính đơn điệu của hàm phân thức hữu tỉ

**Bài toán 2:** Xét tính đơn điệu của các hàm số sau:
a) $y = \frac{2x - 1}{x + 1}$  
b) $y = \frac{x^2 - 3x + 3}{x - 1}$

**Lời giải:**
a) $y = \frac{2x - 1}{x + 1}$
- Tập xác định: $D = \mathbb{R} \setminus \{-1\}$.
- Đạo hàm:
  $$y' = \frac{2(1) - (-1)(1)}{(x + 1)^2} = \frac{3}{(x + 1)^2} > 0, \quad \forall x \ne -1$$
- Kết luận: Hàm số **đồng biến** trên từng khoảng xác định $(-\infty; -1)$ và $(-1; +\infty)$.  
  *(Lưu ý: Tuyệt đối không kết luận hàm số đồng biến trên $\mathbb{R} \setminus \{-1\}$ hoặc $(-\infty; -1) \cup (-1; +\infty)$ vì định nghĩa đơn điệu chỉ xét trên từng khoảng!).* Hàm số này không có cực trị.

<div style="margin: 20px auto; max-width: 540px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); text-align: center;">
<div style="font-weight: bold; color: #1e293b; margin-bottom: 8px;">BẢNG BIẾN THIÊN HÀM BẬC NHẤT / BẬC NHẤT: y = (2x - 1)/(x + 1)</div>
<svg viewBox="0 0 500 170" width="100%" class="lesson-diagram">
<defs><marker id="arr-bt2a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/></marker></defs>
<line x1="65" y1="0" x2="65" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="36" x2="500" y2="36" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="72" x2="500" y2="72" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="273" y1="36" x2="273" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="277" y1="36" x2="277" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<text x="32" y="24" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">x</text>
<text x="32" y="58" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">y'</text>
<text x="32" y="125" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">y</text>
<text x="100" y="24" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<text x="275" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#dc2626">−1</text>
<text x="450" y="24" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
<text x="180" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="370" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="100" y="156" text-anchor="middle" font-size="13" fill="#1e293b">2</text>
<line x1="120" y1="148" x2="245" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt2a)"/>
<text x="255" y="94" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
<text x="295" y="156" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<line x1="315" y1="148" x2="430" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt2a)"/>
<text x="450" y="94" text-anchor="middle" font-size="13" fill="#1e293b">2</text>
</svg>
</div>

b) $y = \frac{x^2 - 3x + 3}{x - 1}$
- Tập xác định: $D = \mathbb{R} \setminus \{1\}$.
- Biến đổi: $y = x - 2 + \frac{1}{x - 1}$.
- Đạo hàm:
  $$y' = 1 - \frac{1}{(x - 1)^2} = \frac{(x - 1)^2 - 1}{(x - 1)^2} = \frac{x^2 - 2x}{(x - 1)^2}$$
- Cho $y' = 0 \iff x(x - 2) = 0 \iff x = 0$ hoặc $x = 2$.
  + Với $x = 0 \implies y = -3$.
  + Với $x = 2 \implies y = 1$.
- Bảng biến thiên:

<div style="margin: 20px auto; max-width: 620px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); text-align: center;">
<div style="font-weight: bold; color: #1e293b; margin-bottom: 8px;">BẢNG BIẾN THIÊN HÀM PHÂN THỨC: y = (x² - 3x + 3)/(x - 1)</div>
<svg viewBox="0 0 600 170" width="100%" class="lesson-diagram">
<defs><marker id="arr-bt2b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/></marker></defs>
<line x1="65" y1="0" x2="65" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="36" x2="600" y2="36" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="0" y1="72" x2="600" y2="72" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="328" y1="36" x2="328" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="332" y1="36" x2="332" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<text x="32" y="24" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">x</text>
<text x="32" y="58" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">y'</text>
<text x="32" y="125" text-anchor="middle" font-weight="bold" font-size="15" fill="#1e293b">y</text>
<text x="95" y="24" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<text x="205" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">0</text>
<text x="330" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#dc2626">1</text>
<text x="455" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">2</text>
<text x="565" y="24" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
<text x="145" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="205" y="58" text-anchor="middle" font-size="14" fill="#64748b">0</text>
<text x="265" y="58" text-anchor="middle" font-weight="bold" font-size="18" fill="#dc2626">−</text>
<text x="390" y="58" text-anchor="middle" font-weight="bold" font-size="18" fill="#dc2626">−</text>
<text x="455" y="58" text-anchor="middle" font-size="14" fill="#64748b">0</text>
<text x="515" y="58" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
<text x="95" y="156" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<line x1="115" y1="148" x2="190" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt2b)"/>
<text x="205" y="94" text-anchor="middle" font-weight="bold" font-size="14" fill="#047857">−3</text>
<line x1="220" y1="100" x2="295" y2="148" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt2b)"/>
<text x="310" y="156" text-anchor="middle" font-size="13" fill="#64748b">−∞</text>
<text x="350" y="94" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
<line x1="365" y1="100" x2="440" y2="148" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt2b)"/>
<text x="455" y="156" text-anchor="middle" font-weight="bold" font-size="14" fill="#b45309">1</text>
<line x1="470" y1="148" x2="545" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt2b)"/>
<text x="565" y="94" text-anchor="middle" font-size="13" fill="#64748b">+∞</text>
</svg>
</div>

- Kết luận:
  + Hàm số đồng biến trên các khoảng $(-\infty; 0)$ và $(2; +\infty)$.
  + Hàm số nghịch biến trên các khoảng $(0; 1)$ và $(1; 2)$.
  + Điểm cực đại là $x = 0$ ($y_{\text{CĐ}} = -3$), điểm cực tiểu là $x = 2$ ($y_{\text{CT}} = 1$).  
  *(Chú ý: Giá trị cực đại $y_{\text{CĐ}} = -3$ có thể nhỏ hơn giá trị cực tiểu $y_{\text{CT}} = 1$ vì cực trị chỉ có tính chất cục bộ!).*

---

### Dạng 3: Tìm tham số $m$ để hàm số đơn điệu trên $\mathbb{R}$

**Bài toán 3:** Tìm tất cả các giá trị thực của tham số $m$ để hàm số:
$$y = \frac{1}{3}x^3 - m x^2 + (2m + 3)x - 5$$
đồng biến trên toàn bộ trục số $\mathbb{R}$.

**Lời giải:**
Tập xác định: $D = \mathbb{R}$.
Đạo hàm:
$$y' = x^2 - 2mx + (2m + 3)$$
Hàm số đã cho đồng biến trên $\mathbb{R}$ khi và chỉ khi:
$$y' \ge 0, \quad \forall x \in \mathbb{R}$$
(và dấu bằng chỉ xảy ra tại hữu hạn điểm).

Vì $y'$ là tam thức bậc hai có hệ số $a = 1 > 0$, điều kiện để $y' \ge 0, \forall x \in \mathbb{R}$ là:
$$\Delta' \le 0$$
Trong đó:
$$\Delta' = (-m)^2 - 1 \cdot (2m + 3) = m^2 - 2m - 3$$
Ta có:
$$m^2 - 2m - 3 \le 0 \iff -1 \le m \le 3$$
Vậy các giá trị $m$ cần tìm là $m \in [-1; 3]$.

---

## IV. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hàm số y = f(x) có đạo hàm f\u0027(x) = x^2(x - 1)(x + 2). Số điểm cực trị của hàm số là:",
  "options": [
    "A. 2",
    "B. 3",
    "C. 1",
    "D. 0"
  ],
  "answer": "A. 2",
  "explanation": "f\u0027(x) = 0 có các nghiệm x = 0 (bội 2), x = 1 (bội 1), x = -2 (bội 1). Vì x = 0 là nghiệm bội chẵn nên f\u0027(x) không đổi dấu khi qua 0. f\u0027(x) chỉ đổi dấu khi qua x = 1 và x = -2. Vậy hàm số có đúng 2 điểm cực trị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hàm số y = x^3 - 3x^2 + 2 đồng biến trên khoảng nào sau đây?",
  "options": [
    "A. (2; +∞)",
    "B. (0; 2)",
    "C. (-∞; 2)",
    "D. (0; +∞)"
  ],
  "answer": "A. (2; +∞)",
  "explanation": "y\u0027 = 3x^2 - 6x = 3x(x - 2). y\u0027 > 0 <=> x < 0 hoặc x > 2. Do đó hàm số đồng biến trên (-∞; 0) và (2; +∞)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hàm số y = f(x) có bảng biến thiên: x chạy từ -∞ qua 1 rồi đến +∞; y\u0027 đổi dấu từ dương (+) sang âm (-) qua điểm x = 1, giá trị f(1) = 4. Mệnh đề nào sau đây đúng?",
  "options": [
    "A. Hàm số đạt cực đại tại x = 1",
    "B. Hàm số đạt cực tiểu tại x = 1",
    "C. Điểm cực đại của đồ thị là (4; 1)",
    "D. Giá trị cực tiểu của hàm số bằng 4"
  ],
  "answer": "A. Hàm số đạt cực đại tại x = 1",
  "explanation": "y\u0027 đổi dấu từ dương sang âm khi qua x = 1 nên x = 1 là điểm cực đại của hàm số, giá trị cực đại là 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hàm số y = (x - 2) / (x + 1) có bao nhiêu điểm cực trị?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "answer": "A. 0",
  "explanation": "y\u0027 = [1(1) - (-2)(1)] / (x + 1)^2 = 3 / (x + 1)^2 > 0 với mọi x ≠ -1. Đạo hàm không triệt tiêu và không đổi dấu, do đó hàm phân thức bậc nhất trên bậc nhất không có cực trị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số f(x) có f\u0027(x_0) = 0 và f\u0027\u0027(x_0) = -5. Kết luận nào sau đây đúng?",
  "options": [
    "A. x_0 là điểm cực đại của hàm số",
    "B. x_0 là điểm cực tiểu của hàm số",
    "C. x_0 không phải là cực trị",
    "D. Hàm số nghịch biến trên toàn trục số"
  ],
  "answer": "A. x_0 là điểm cực đại của hàm số",
  "explanation": "Theo dấu hiệu 2: Nếu f\u0027(x_0) = 0 và f\u0027\u0027(x_0) < 0 thì hàm số đạt cực đại tại x_0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Điểm cực tiểu của đồ thị hàm số y = x^4 - 2x^2 + 3 là:",
  "options": [
    "A. (1; 2) và (-1; 2)",
    "B. (0; 3)",
    "C. x = ±1",
    "D. y = 2"
  ],
  "answer": "A. (1; 2) và (-1; 2)",
  "explanation": "y\u0027 = 4x^3 - 4x = 4x(x^2 - 1) = 0 <=> x = 0 hoặc x = ±1. Bảng biến thiên cho thấy cực tiểu tại x = ±1, y = (±1)^4 - 2(±1)^2 + 3 = 2. Điểm cực tiểu của đồ thị là (1; 2) và (-1; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tìm tất cả giá trị thực của tham số m để hàm số y = x^3 - 3mx^2 + 3(m^2 - 1)x đồng biến trên ℝ:",
  "options": [
    "A. Không tồn tại m",
    "B. m ∈ (-1; 1)",
    "C. m = 0",
    "D. m ∈ ℝ"
  ],
  "answer": "A. Không tồn tại m",
  "explanation": "y\u0027 = 3x^2 - 6mx + 3(m^2 - 1). Để y\u0027 ≥ 0 với mọi x thì Δ\u0027 ≤ 0 <=> (3m)^2 - 3 · 3(m^2 - 1) ≤ 0 <=> 9m^2 - 9m^2 + 9 ≤ 0 <=> 9 ≤ 0 (vô lý). Vậy không tồn tại m."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hàm số y = f(x) có đồ thị đạo hàm f\u0027(x) cắt trục hoành tại 3 điểm phân biệt có hoành độ -2, 0, 3. Đồ thị f\u0027(x) đi từ phía dưới lên phía trên qua x = -2. Khẳng định nào sau đây đúng?",
  "options": [
    "A. x = -2 là điểm cực tiểu của hàm số f(x)",
    "B. x = -2 là điểm cực đại của hàm số f(x)",
    "C. f(-2) = 0",
    "D. f(x) đồng biến trên khoảng (-2; 0)"
  ],
  "answer": "A. x = -2 là điểm cực tiểu của hàm số f(x)",
  "explanation": "Đồ thị f\u0027(x) đi từ dưới lên trên qua x = -2 nghĩa là f\u0027(x) đổi dấu từ âm sang dương, suy ra x = -2 là điểm cực tiểu của f(x)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Hàm số y = -x^3 + 3x - 1 có giá trị cực đại bằng:",
  "options": [
    "A. 1",
    "B. -3",
    "C. -1",
    "D. 2"
  ],
  "answer": "A. 1",
  "explanation": "y\u0027 = -3x^2 + 3 = 0 <=> x = ±1. y\u0027 đổi dấu từ dương sang âm khi qua x = 1. Giá trị cực đại là y(1) = -(1)^3 + 3(1) - 1 = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khoảng nghịch biến của hàm số y = √(4 - x^2) là:",
  "options": [
    "A. (0; 2)",
    "B. (-2; 0)",
    "C. (-2; 2)",
    "D. [0; 2]"
  ],
  "answer": "A. (0; 2)",
  "explanation": "Tập xác định [-2; 2]. y\u0027 = -2x / [2√(4 - x^2)] = -x / √(4 - x^2). y\u0027 < 0 <=> x > 0. Kết hợp tập xác định suy ra hàm số nghịch biến trên khoảng (0; 2)."
}'></div>

---

## V. Ứng dụng Thực tế: Quy luật Lợi nhuận Giảm dần trong Kinh doanh

Trong kinh tế học vi mô, hàm doanh thu và lợi nhuận của doanh nghiệp thường tuân theo quy luật điểm cực trị:

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #10b981;">
<strong>Bài toán Tối ưu hóa Doanh thu:</strong><br>
Một công ty du lịch tổ chức tour khám phá vịnh Hạ Long. Giá vé trọn gói là $2.000.000$ VNĐ/người cho nhóm $30$ khách. Nếu số lượng khách đăng ký vượt quá $30$ người, để khuyến khích số đông, công ty giảm $40.000$ VNĐ/vé cho toàn bộ khách trong đoàn ứng với mỗi khách tăng thêm.<br>
1. Gọi $x$ là số lượng khách tăng thêm ($x \ge 0$). Lập hàm số biểu diễn tổng doanh thu $R(x)$ của công ty theo $x$.<br>
2. Sử dụng đạo hàm để tìm số lượng khách của đoàn tour sao cho doanh thu của công ty du lịch đạt mức <strong>cực đại</strong>.<br>
3. Tính doanh thu cực đại đó.
</div>

> [!TIP]
> **Giải bài toán kinh doanh bằng đạo hàm:**
> 1. Tổng số khách trong đoàn là $30 + x$.  
>    Giá vé của mỗi người lúc này là: $2.000.000 - 40.000x$ (đồng).  
>    Hàm tổng doanh thu (tính bằng triệu đồng):
>    $$R(x) = (30 + x)(2 - 0.04x) = 60 - 1.2x + 2x - 0.04x^2 = -0.04x^2 + 0.8x + 60$$
> 2. Tìm điểm cực đại bằng đạo hàm:
>    $$R'(x) = -0.08x + 0.8$$
>    $$R'(x) = 0 \iff -0.08x + 0.8 = 0 \iff x = 10$$
>    Vì $R''(x) = -0.08 < 0$ nên $x = 10$ chắc chắn là điểm cực đại của hàm doanh thu!
>
> <div style="margin: 16px auto; max-width: 500px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; text-align: center;">
> <div style="font-weight: bold; color: #1e293b; font-size: 0.9em; margin-bottom: 6px;">BẢNG BIẾN THIÊN HÀM DOANH THU R(x) (triệu đồng)</div>
> <svg viewBox="0 0 460 150" width="100%" class="lesson-diagram">
> <defs><marker id="arr-r" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#16a34a"/></marker></defs>
> <line x1="60" y1="0" x2="60" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
> <line x1="0" y1="34" x2="460" y2="34" stroke="#94a3b8" stroke-width="1.5"/>
> <line x1="0" y1="68" x2="460" y2="68" stroke="#94a3b8" stroke-width="1.5"/>
> <text x="30" y="23" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">x</text>
> <text x="30" y="55" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">R'(x)</text>
> <text x="30" y="112" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">R(x)</text>
> <text x="95" y="23" text-anchor="middle" font-size="13" fill="#64748b">0</text>
> <text x="245" y="23" text-anchor="middle" font-weight="bold" font-size="14" fill="#166534">10</text>
> <text x="410" y="23" text-anchor="middle" font-size="13" fill="#64748b">50</text>
> <text x="165" y="55" text-anchor="middle" font-weight="bold" font-size="16" fill="#16a34a">+</text>
> <text x="245" y="55" text-anchor="middle" font-size="14" fill="#64748b">0</text>
> <text x="335" y="55" text-anchor="middle" font-weight="bold" font-size="18" fill="#dc2626">−</text>
> <text x="95" y="138" text-anchor="middle" font-size="13" fill="#1e293b">60</text>
> <line x1="115" y1="130" x2="230" y2="88" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-r)"/>
> <text x="245" y="82" text-anchor="middle" font-weight="bold" font-size="14" fill="#15803d">64 (CĐ)</text>
> <line x1="260" y1="88" x2="390" y2="130" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-r)"/>
> <text x="410" y="138" text-anchor="middle" font-size="13" fill="#1e293b">0</text>
> </svg>
> </div>
>
> 3. Đoàn tour tối ưu nhất là có:
>    $$30 + 10 = 40\text{ khách}$$
>    Doanh thu cực đại thu về là:
>    $$R(10) = -0.04(10)^2 + 0.8(10) + 60 = -4 + 8 + 60 = 64\text{ triệu đồng}$$
>    *(Nếu nhận thêm khách quá mốc 40 người, tiền giảm giá sẽ làm doanh thu sụt giảm trở lại!).*
