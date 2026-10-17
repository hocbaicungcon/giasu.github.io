---
title: 'Toán 8 Bài 27: Khái niệm hàm số và đồ thị của hàm số'
description: 'Làm chủ lý thuyết Khái niệm hàm số và đồ thị của hàm số Toán 8 Bài 27: Định nghĩa hàm số, các cách cho hàm số, mặt phẳng tọa độ Oxy, xác định và vẽ điểm, đồ thị hàm số kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Hàm số
  - Mặt phẳng tọa độ
  - Đồ thị hàm số
  - Tọa độ Oxy
  - Kết nối tri thức
grade: 8
---

# Bài 27. Khái niệm hàm số và đồ thị của hàm số

Trong vũ trụ bao la, vạn vật không tồn tại cô lập mà luôn vận động và phụ thuộc lẫn nhau: nhiệt độ của Trái Đất phụ thuộc vào độ cao so với mực nước biển; quãng đường đi được của đoàn tàu phụ thuộc vào thời gian chạy; giá tiền hóa đơn điện thoại phụ thuộc vào số gigabyte dung lượng dữ liệu 4G/5G đã sử dụng.

Để mô hình hóa sự phụ thuộc kỳ diệu đó, các nhà toán học vĩ đại như René Descartes, Gottfried Leibniz và Leonhard Euler đã phát minh ra khái niệm trung tâm của toàn bộ nền khoa học hiện đại: **Hàm số (Function)** và **Mặt phẳng tọa độ Descartes ($Oxy$)**.

Nhờ đồ thị hàm số, những quy luật trừu tượng được "vẽ" thành các đường cong sinh động trên màn hình, giúp các bác sĩ nhìn thấy nhịp tim trên máy đo điện tâm đồ (ECG), các nhà kinh tế theo dõi biến động thị trường chứng khoán, và các kỹ sư định vị vệ tinh GPS dẫn đường cho hàng triệu chuyến bay mỗi ngày. Bài học hôm nay sẽ mở cánh cửa bước vào thế giới hàm số đầy màu sắc!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 27: HÀM SỐ & ĐỒ THỊ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Hàm số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đại lượng $y$ phụ thuộc vào $x$.<br>• Với <strong>mỗi giá trị của $x$</strong>, xác định <strong>chỉ duy nhất một giá trị</strong> tương ứng của $y$.<br>• $x$ là biến số, $y$ là hàm số: $y = f(x)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Các cách cho Hàm số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bằng bảng:</strong> Liệt kê các cặp $(x; y)$.<br>• <strong>Bằng công thức:</strong> $y = 2x + 1, y = \frac{10}{x}\dots$<br>• <strong>Bằng biểu đồ / đồ thị:</strong> Trực quan hóa hình học.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Mặt phẳng Tọa độ Oxy</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trục nằm ngang $Ox$: <strong>Trục hoành</strong>.<br>• Trục thẳng đứng $Oy$: <strong>Trục tung</strong>.<br>• Điểm $M(x_0; y_0)$: $x_0$ viết trước (hoành độ), $y_0$ viết sau (tung độ).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Đồ thị của Hàm số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là tập hợp tất cả các điểm $(x; f(x))$ trên mặt phẳng tọa độ $Oxy$.<br>• Điểm $A(x_A; y_A)$ thuộc đồ thị $\iff y_A = f(x_A)$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Công thức tỉ lệ:** Nếu đi bộ đều với vận tốc $4\text{ km/h}$, thì sau $t\text{ (giờ)}$ quãng đường $s$ đi được tính theo công thức nào?
2. **Tính giá trị:** Cho $y = f(x) = 3x - 2$. Tính giá trị của $y$ khi $x = 4$.
3. **Mặt phẳng tọa độ:** Trong tọa độ điểm $P(-3; 5)$, số nào là hoành độ và số nào là tung độ?
4. **Vị trí đặc biệt:** Điểm nào nằm trên trục hoành $Ox$: Điểm $A(3; 0)$ hay điểm $B(0; 3)$?
5. **Gốc tọa độ:** Gốc tọa độ $O$ có tọa độ bằng bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $s = 4t\text{ (km)}$. Quãng đường $s$ là một hàm số theo thời gian $t$.
> 2. $f(4) = 3(4) - 2 = 12 - 2 = 10$.
> 3. Hoành độ là $-3$ (trục ngang $Ox$), tung độ là $5$ (trục dọc $Oy$).
> 4. Điểm $A(3; 0)$ nằm trên trục hoành $Ox$ (vì có tung độ bằng $0$).
> 5. Gốc tọa độ $O(0; 0)$.

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm Hàm số

> [!IMPORTANT]
> **ĐỊNH NGHĨA HÀM SỐ:**
> Nếu đại lượng $y$ phụ thuộc vào đại lượng thay đổi $x$ sao cho với **mỗi giá trị của $x$**, ta luôn xác định được **chỉ một giá trị tương ứng của $y$** thì:
> - $y$ được gọi là **hàm số** của $x$.
> - $x$ được gọi là **biến số** (hay nói gọn là **biến**).

*Chú ý đặc biệt:*
- Điều kiện cốt lõi: Với mỗi $x$ chỉ có **duy nhất một** $y$ tương ứng.
- Nếu với một giá trị $x$ mà có từ hai giá trị $y$ trở lên (ví dụ: $y^2 = x \implies y = \pm\sqrt{x}$), thì quan hệ đó **không phải là hàm số**!
- Ngược lại: Nhiều giá trị khác nhau của $x$ có thể cùng tương ứng với một giá trị $y$ (ví dụ: hàm hằng $y = 5$ với mọi $x$).

#### Ký hiệu:
Khi $y$ là hàm số của $x$, ta thường viết:
$$y = f(x), \quad y = g(x), \quad y = h(x)\dots$$
Giá trị của hàm số $y = f(x)$ tại $x = x_0$ được ký hiệu là $f(x_0)$.

---

### 2. Các cách cho một hàm số

Hàm số có thể được cho bằng các cách:
1. **Cho bằng công thức:** (Cách phổ biến nhất trong toán học)
   - $y = 2x - 3$
   - $y = x^2$
   - $y = \frac{12}{x}$
   *Tập xác định của hàm số* là tập hợp các giá trị của biến số $x$ làm cho công thức có nghĩa (mẫu số khác 0, biểu thức dưới căn bậc hai không âm).
2. **Cho bằng bảng:** Liệt kê các giá trị của $x$ và $y$ tương ứng.
3. **Cho bằng biểu đồ / đồ thị hình học:** Thường dùng trong khí tượng, tài chính, y tế.

---

### 3. Mặt phẳng Tọa độ $Oxy$

Mặt phẳng tọa độ $Oxy$ được hình thành bởi hai trục số thực vuông góc với nhau tại gốc $O$:
- **Trục hoành $Ox$:** Trục số nằm ngang, chiều dương từ trái sang phải.
- **Trục tung $Oy$:** Trục số thẳng đứng, chiều dương từ dưới lên trên.
- **Gốc tọa độ $O$:** Điểm giao nhau của hai trục, có tọa độ $O(0; 0)$.

Hai trục chia mặt phẳng thành $4$ góc phần tư:
- **Góc phần tư I:** $x > 0, y > 0$ (phía trên, bên phải).
- **Góc phần tư II:** $x < 0, y > 0$ (phía trên, bên trái).
- **Góc phần tư III:** $x < 0, y < 0$ (phía dưới, bên trái).
- **Góc phần tư IV:** $x > 0, y < 0$ (phía dưới, bên phải).

#### Tọa độ của một điểm:
Mỗi điểm $M$ trên mặt phẳng tọa độ tương ứng với một cặp số duy nhất $(x_0; y_0)$, viết là $M(x_0; y_0)$:
- $x_0$ gọi là **hoành độ** của điểm $M$ (hình chiếu vuông góc của $M$ lên trục $Ox$).
- $y_0$ gọi là **tung độ** của điểm $M$ (hình chiếu vuông góc của $M$ lên trục $Oy$).

> [!NOTE]
> **ĐIỂM ĐẶC BIỆT:**
> - Điểm nằm trên trục hoành $Ox$ luôn có **tung độ bằng 0**: $A(x_0; 0)$.
> - Điểm nằm trên trục tung $Oy$ luôn có **hoành độ bằng 0**: $B(0; y_0)$.

---

### 4. Đồ thị của Hàm số

> [!IMPORTANT]
> **ĐỊNH NGHĨA ĐỒ THỊ:**
> **Đồ thị của hàm số** $y = f(x)$ là tập hợp tất cả các điểm biểu diễn các cặp giá trị tương ứng $(x; f(x))$ trên mặt phẳng tọa độ $Oxy$.
>
> Điểm $M(x_M; y_M)$ thuộc đồ thị hàm số $y = f(x)$ khi và chỉ khi:
> $$y_M = f(x_M)$$

---

## Ứng dụng Tương tác Trực quan

Dưới đây là mô phỏng mặt phẳng tọa độ $Oxy$. Nhấp vào các nút bên dưới để quan sát cách biểu diễn tọa độ các điểm và đồ thị hàm số:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: MẶT PHẲNG TỌA ĐỘ OXY</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Khảo sát tọa độ các điểm trên mặt phẳng: $A(2; 3)$, $B(-3; 2)$, $C(-2; -2)$, $D(3; -1)$
  </p>
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg data-interactive-done="true" id="coordinate-plane-svg" width="320" height="320" viewBox="-160 -160 320 320" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
      <!-- Lưới tọa độ -->
      <g stroke="#e2e8f0" stroke-width="1">
        <line x1="-150" y1="-120" x2="150" y2="-120" />
        <line x1="-150" y1="-80" x2="150" y2="-80" />
        <line x1="-150" y1="-40" x2="150" y2="-40" />
        <line x1="-150" y1="40" x2="150" y2="40" />
        <line x1="-150" y1="80" x2="150" y2="80" />
        <line x1="-150" y1="120" x2="150" y2="120" />
        <line x1="-120" y1="-150" x2="-120" y2="150" />
        <line x1="-80" y1="-150" x2="-80" y2="150" />
        <line x1="-40" y1="-150" x2="-40" y2="150" />
        <line x1="40" y1="-150" x2="40" y2="150" />
        <line x1="80" y1="-150" x2="80" y2="150" />
        <line x1="120" y1="-150" x2="120" y2="150" />
      </g>
      <!-- Trục Ox -->
      <line x1="-150" y1="0" x2="150" y2="0" stroke="#334155" stroke-width="2" />
      <polygon points="150,0 142,-4 142,4" fill="#334155" />
      <text x="142" y="-8" font-size="12" font-weight="bold" fill="#334155">x</text>
      <!-- Trục Oy -->
      <line x1="0" y1="150" x2="0" y2="-150" stroke="#334155" stroke-width="2" />
      <polygon points="0,-150 -4,-142 4,-142" fill="#334155" />
      <text x="8" y="-140" font-size="12" font-weight="bold" fill="#334155">y</text>
      <!-- Gốc O -->
      <text x="-12" y="14" font-size="12" font-weight="bold" fill="#334155">O</text>
      <!-- Các điểm mẫu (tỉ lệ 40px = 1 đơn vị) -->
      <!-- A(2, 3) -> svg (80, -120) -->
      <circle cx="80" cy="-120" r="5" fill="#ef4444" />
      <text x="86" y="-124" font-size="12" font-weight="bold" fill="#ef4444">A(2; 3)</text>
      <!-- B(-3, 2) -> svg (-120, -80) -->
      <circle cx="-120" cy="-80" r="5" fill="#3b82f6" />
      <text x="-126" y="-86" font-size="12" font-weight="bold" fill="#3b82f6">B(-3; 2)</text>
      <!-- C(-2, -2) -> svg (-80, 80) -->
      <circle cx="-80" cy="80" r="5" fill="#10b981" />
      <text x="-86" y="96" font-size="12" font-weight="bold" fill="#10b981">C(-2; -2)</text>
      <!-- D(3, -1) -> svg (120, 40) -->
      <circle cx="120" cy="40" r="5" fill="#f59e0b" />
      <text x="126" y="44" font-size="12" font-weight="bold" fill="#f59e0b">D(3; -1)</text>
    </svg>
  </div>
  <p style="text-align: center; font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 4px;">
    <em>4 điểm đại diện cho 4 góc phần tư trên mặt phẳng tọa độ Oxy (tỉ lệ 1 đơn vị = 40px)</em>
  </p>
</div>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Nhận diện hàm số và tính giá trị của hàm số

**Phương pháp giải:**
1. Kiểm tra định nghĩa: Với mỗi giá trị $x$, chỉ có duy nhất một giá trị $y$.
2. Tính $f(x_0)$: Thay $x = x_0$ vào biểu thức công thức của hàm số rồi thực hiện phép tính.

---

#### Bài toán 1:
Cho hàm số $y = f(x) = 2x^2 - 3x + 1$.
a) Tính $f(-2)$, $f(0)$, $f(1)$, $f\left(\frac{1}{2}\right)$.
b) Tìm giá trị của $x$ sao cho $f(x) = 1$.

**Lời giải:**

a) Tính các giá trị:
- $f(-2) = 2(-2)^2 - 3(-2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15$.
- $f(0) = 2(0)^2 - 3(0) + 1 = 1$.
- $f(1) = 2(1)^2 - 3(1) + 1 = 2 - 3 + 1 = 0$.
- $f\left(\frac{1}{2}\right) = 2\left(\frac{1}{2}\right)^2 - 3\left(\frac{1}{2}\right) + 1 = 2\left(\frac{1}{4}\right) - \frac{3}{2} + 1 = \frac{1}{2} - \frac{3}{2} + 1 = -1 + 1 = 0$.

b) Cho $f(x) = 1$:
$$2x^2 - 3x + 1 = 1 \iff 2x^2 - 3x = 0 \iff x(2x - 3) = 0$$
$$\iff x = 0 \quad\text{hoặc}\quad 2x - 3 = 0 \iff x = \frac{3}{2}$$
Vậy với $x = 0$ hoặc $x = \frac{3}{2}$ thì $f(x) = 1$.

---

### Dạng 2: Biểu diễn điểm trên mặt phẳng tọa độ $Oxy$

**Phương pháp giải:**
1. Để biểu diễn điểm $M(a; b)$:
   - Từ điểm $a$ trên trục hoành $Ox$, kẻ đường thẳng vuông góc với $Ox$.
   - Từ điểm $b$ trên trục tung $Oy$, kẻ đường thẳng vuông góc với $Oy$.
   - Giao điểm của hai đường thẳng này chính là vị trí của điểm $M(a; b)$.
2. Xác định góc phần tư:
   - $(+; +) \implies$ Góc I.
   - $(-; +) \implies$ Góc II.
   - $(-; -) \implies$ Góc III.
   - $(+; -) \implies$ Góc IV.

---

#### Bài toán 2:
Cho các điểm: $M(3; 4)$, $N(-2; 5)$, $P(-4; -3)$, $Q(5; -2)$, $K(0; -3)$, $H(4; 0)$.
a) Cho biết mỗi điểm trên thuộc góc phần tư nào hoặc nằm trên trục tọa độ nào?
b) Tìm tọa độ điểm đối xứng của điểm $M(3; 4)$ qua trục hoành $Ox$, qua trục tung $Oy$ và qua gốc tọa độ $O$.

**Lời giải:**

a) Xác định vị trí:
- Điểm $M(3; 4)$ có $x > 0, y > 0 \implies$ Thuộc góc phần tư **I**.
- Điểm $N(-2; 5)$ có $x < 0, y > 0 \implies$ Thuộc góc phần tư **II**.
- Điểm $P(-4; -3)$ có $x < 0, y < 0 \implies$ Thuộc góc phần tư **III**.
- Điểm $Q(5; -2)$ có $x > 0, y < 0 \implies$ Thuộc góc phần tư **IV**.
- Điểm $K(0; -3)$ có hoành độ bằng $0 \implies$ Nằm trên **trục tung $Oy$**.
- Điểm $H(4; 0)$ có tung độ bằng $0 \implies$ Nằm trên **trục hoành $Ox$**.

b) Tọa độ các điểm đối xứng:
- Đối xứng qua trục hoành $Ox$: Giữ nguyên hoành độ, đổi dấu tung độ $\implies M_1(3; -4)$.
- Đối xứng qua trục tung $Oy$: Đổi dấu hoành độ, giữ nguyên tung độ $\implies M_2(-3; 4)$.
- Đối xứng qua gốc tọa độ $O$: Đổi dấu cả hoành độ và tung độ $\implies M_3(-3; -4)$.

---

### Dạng 3: Kiểm tra điểm thuộc hay không thuộc đồ thị hàm số

**Phương pháp giải:**
Muốn kiểm tra điểm $M(x_0; y_0)$ có thuộc đồ thị hàm số $y = f(x)$ không:
- Thay $x = x_0$ vào công thức hàm số để tính $f(x_0)$.
- So sánh $f(x_0)$ với tung độ $y_0$:
  + Nếu $f(x_0) = y_0 \implies$ Điểm $M$ **thuộc đồ thị**.
  + Nếu $f(x_0) \neq y_0 \implies$ Điểm $M$ **không thuộc đồ thị**.

---

#### Bài toán 3:
Cho hàm số $y = f(x) = -2x + 3$.
a) Trong các điểm sau, điểm nào thuộc đồ thị hàm số: $A(1; 1)$, $B(-1; 4)$, $C(0; 3)$, $D\left(\frac{3}{2}; 0\right)$?
b) Biết điểm $M(m; -7)$ thuộc đồ thị hàm số trên. Tìm giá trị của $m$.

**Lời giải:**

a) Kiểm tra các điểm:
- Điểm $A(1; 1)$: Thay $x = 1 \implies f(1) = -2(1) + 3 = 1 = y_A \implies$ Điểm $A$ **thuộc đồ thị**.
- Điểm $B(-1; 4)$: Thay $x = -1 \implies f(-1) = -2(-1) + 3 = 2 + 3 = 5 \neq 4 \implies$ Điểm $B$ **không thuộc đồ thị**.
- Điểm $C(0; 3)$: Thay $x = 0 \implies f(0) = -2(0) + 3 = 3 = y_C \implies$ Điểm $C$ **thuộc đồ thị**.
- Điểm $D\left(\frac{3}{2}; 0\right)$: Thay $x = \frac{3}{2} \implies f\left(\frac{3}{2}\right) = -2\left(\frac{3}{2}\right) + 3 = -3 + 3 = 0 = y_D \implies$ Điểm $D$ **thuộc đồ thị**.

b) Vì điểm $M(m; -7)$ thuộc đồ thị hàm số, nên tọa độ điểm $M$ phải thỏa mãn công thức hàm số:
$$-7 = -2m + 3 \iff 2m = 3 + 7 \iff 2m = 10 \iff m = 5$$
Vậy $m = 5$.

---

### Dạng 4: Đọc đồ thị hàm số và Bài toán thực tế

**Phương pháp giải:**
1. Xác định ý nghĩa của trục hoành (thường là thời gian, dung tích, số lượng).
2. Xác định ý nghĩa của trục tung (nhiệt độ, quãng đường, giá tiền).
3. Đọc các giao điểm, điểm cao nhất, điểm thấp nhất để trả lời câu hỏi thực tiễn.

---

#### Bài toán 4:
Nhiệt độ $T\text{ (}^\circ\text{C)}$ trong một ngày mùa hè tại Hà Nội được ghi nhận qua hàm số theo thời gian $t\text{ (giờ)}$ từ $6\text{h}$ sáng đến $18\text{h}$ chiều bởi bảng số liệu:

| Giờ trong ngày $t$ | $6$ | $9$ | $12$ | $14$ | $16$ | $18$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nhiệt độ $T\text{ (}^\circ\text{C)}$ | $26$ | $30$ | $35$ | $38$ | $36$ | $31$ |

a) Nhiệt độ $T$ có phải là hàm số của thời gian $t$ không? Vì sao?
b) Tìm nhiệt độ lúc $12$ giờ trưa và lúc $18$ giờ chiều.
c) Trong khoảng thời gian khảo sát, nhiệt độ đạt giá trị cao nhất lúc mấy giờ và bằng bao nhiêu độ C?

**Lời giải:**

a) Nhiệt độ $T$ là hàm số của thời gian $t$, vì với mỗi mốc thời gian $t$, ta chỉ ghi nhận được đúng **một giá trị nhiệt độ $T$ tương ứng duy nhất**.
b) - Lúc $12$ giờ trưa ($t = 12$): Nhiệt độ là $T(12) = 35^\circ\text{C}$.
   - Lúc $18$ giờ chiều ($t = 18$): Nhiệt độ là $T(18) = 31^\circ\text{C}$.
c) Quan sát bảng số liệu: Giá trị nhiệt độ lớn nhất là $38^\circ\text{C}$, đạt được vào thời điểm $14$ giờ chiều (lúc $2$ giờ chiều).

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: René Descartes và Cuộc cách mạng Hóa giải Đại số - Hình học

Trước năm 1637, Hình học (hình tròn, tam giác của Euclid) và Đại số (các con số và phép tính) là hai thế giới hoàn toàn tách biệt.
Nhà triết học người Pháp René Descartes đã phát minh ra **Mặt phẳng tọa độ Descartes**:
- Mỗi điểm hình học được mã hóa thành một cặp số $(x; y)$.
- Mỗi đường cong hình học được đại diện bởi một phương trình hàm số $y = f(x)$.
Khám phá vĩ đại này đã sinh ra môn **Hình học giải tích (Analytic Geometry)** — nền móng đưa loài người vào kỷ nguyên khoa học thực nghiệm và thám hiểm không gian!

---

### Chuyên đề 2: Hệ thống Định vị Vệ tinh Toàn cầu (GPS Navigation)

Khi các em mở ứng dụng Google Maps hoặc gọi xe Grab, điện thoại nhận tín hiệu từ ít nhất 4 vệ tinh GPS bay quanh Trái Đất ở độ cao $20\,200\text{ km}$.
Tọa độ của người dùng được xác định bằng hệ trục tọa độ không gian 3 chiều Descartes $(x, y, z)$:
$$(x - x_i)^2 + (y - y_i)^2 + (z - z_i)^2 = (c \cdot \Delta t_i)^2$$
Bằng việc giải hệ phương trình hàm số này, máy tính xác định chính xác vị trí của chiếc xe trên bản đồ với sai số chỉ dưới $1\text{ mét}$!

---

### Chuyên đề 3: Khái niệm "Hàm Thuần túy" (Pure Function) trong Lập trình Máy tính

Trong khoa học máy tính (ngôn ngữ Python, JavaScript, Haskell), một hàm được gọi là hàm thuần túy (*Pure Function*) nếu nó tuân thủ định nghĩa toán học của Bài 27:
- Với cùng một giá trị đầu vào $x$, hàm **luôn luôn trả về cùng một giá trị đầu ra $y$ duy nhất**.
- Không tạo ra tác dụng phụ (side-effects) làm thay đổi biến ngoài bộ nhớ.
Nhờ nguyên lý này, các hệ thống đám mây phân tán của Netflix và YouTube có thể xử lý đồng thời hàng triệu lượt xem video 4K cùng lúc mà không bao giờ bị lỗi xung đột dữ liệu.

---

### Chuyên đề 4: Đường cong Điện tâm đồ (ECG) và Giám sát Sức khỏe Tim mạch

Trong y khoa hiện đại, máy đo điện tâm đồ ghi nhận điện thế $V\text{ (mV)}$ do các tế bào cơ tim phát ra theo hàm số thời gian $t\text{ (giây)}$: $V = f(t)$.
- Đồ thị tạo thành các sóng đặc trưng $P, Q, R, S, T$.
- Bác sĩ tim mạch đọc đồ thị hàm số này để chẩn đoán chính xác chứng thiếu máu cơ tim hoặc rối loạn nhịp tim sớm trước khi cơn đau tim đột quỵ xảy ra, cứu sống hàng triệu bệnh nhân mỗi năm.

---

### Chuyên đề 5: Hàm Sóng Schrödinger trong Cơ học Lượng tử

Trong thế giới vi mô của nguyên tử và electron, nhà vật lý đoạt giải Nobel Erwin Schrödinger đã phát hiện ra rằng vị trí của electron không phải là một hạt cố định mà được mô tả bởi **Hàm sóng lượng tử** $\Psi(x, y, z, t)$.
Bình phương biên độ hàm số $|\Psi|^2$ cho biết xác suất tìm thấy electron tại một điểm trong không gian. Đây chính là chìa khóa để chế tạo bóng bán dẫn transistor vi mô — linh hồn của mọi bộ vi xử lý máy tính và điện thoại thông minh ngày nay!

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho hàm số y = f(x) = 3x - 5. Giá trị của f(2) bằng:",
  "options": [
    "1",
    "-1",
    "11",
    "6"
  ],
  "answer": 0,
  "explanation": "f(2) = 3(2) - 5 = 6 - 5 = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Điểm M(-4; 3) thuộc góc phần tư thứ mấy trên mặt phẳng tọa độ Oxy?",
  "options": [
    "Góc phần tư II",
    "Góc phần tư I",
    "Góc phần tư III",
    "Góc phần tư IV"
  ],
  "answer": 0,
  "explanation": "Điểm M có x = -4 < 0 và y = 3 > 0 nên thuộc góc phần tư thứ II (phía trên bên trái)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Điểm nào sau đây nằm trên trục hoành Ox?",
  "options": [
    "A(5; 0)",
    "B(0; 5)",
    "C(5; 5)",
    "D(-5; 5)"
  ],
  "answer": 0,
  "explanation": "Điểm nằm trên trục hoành Ox luôn có tung độ y = 0. Do đó điểm A(5; 0) nằm trên Ox."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Điểm nào sau đây THUỘC đồ thị hàm số y = 2x + 1?",
  "options": [
    "M(1; 3)",
    "N(2; 4)",
    "P(0; 0)",
    "Q(-1; 1)"
  ],
  "answer": 0,
  "explanation": "Với x = 1, y = 2(1) + 1 = 3 = y_M, nên điểm M(1; 3) thuộc đồ thị hàm số."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hàm số y = f(x) = 12 / x. Tập xác định của hàm số là:",
  "options": [
    "x ≠ 0",
    "x > 0",
    "x ≥ 0",
    "Mọi số thực x"
  ],
  "answer": 0,
  "explanation": "Hàm số phân thức xác định khi mẫu số khác 0: x ≠ 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Điểm đối xứng với điểm P(2; -5) qua trục hoành Ox có tọa độ là:",
  "options": [
    "(2; 5)",
    "(-2; -5)",
    "(-2; 5)",
    "(5; -2)"
  ],
  "answer": 0,
  "explanation": "Đối xứng qua Ox: giữ nguyên hoành độ, đổi dấu tung độ: (2; -(-5)) = (2; 5)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Gốc tọa độ O có tọa độ là:",
  "options": [
    "(0; 0)",
    "(1; 1)",
    "(0; 1)",
    "(1; 0)"
  ],
  "answer": 0,
  "explanation": "Gốc tọa độ O là giao điểm của hai trục Ox và Oy, có tọa độ (0; 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hàm số y = f(x) = ax + 2. Biết đồ thị hàm số đi qua điểm A(1; 5). Hệ số a bằng:",
  "options": [
    "3",
    "7",
    "2",
    "-3"
  ],
  "answer": 0,
  "explanation": "Thay x = 1, y = 5: 5 = a(1) + 2 <=> a = 5 - 2 = 3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Bảng nào sau đây KHÔNG PHẢI là một hàm số?",
  "options": [
    "x = 1 ứng với y = 2 và y = 3",
    "x = 1 ứng với y = 5; x = 2 ứng với y = 5",
    "x = 0 ứng với y = 0",
    "x = -1 ứng với y = 1; x = 1 ứng với y = 1"
  ],
  "answer": 0,
  "explanation": "Theo định nghĩa hàm số, với mỗi giá trị của x chỉ có DUY NHẤT một giá trị của y. Trường hợp một giá trị x = 1 mà có 2 giá trị y khác nhau thì không phải là hàm số."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Một ô tô chuyển động với vận tốc 60 km/h. Quãng đường s (km) đi được sau t (giờ) là hàm số s = 60t. Sau 2.5 giờ ô tô đi được:",
  "options": [
    "150 km",
    "120 km",
    "180 km",
    "140 km"
  ],
  "answer": 0,
  "explanation": "s(2.5) = 60 · 2.5 = 150 km."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho hàm số $y = f(x) = -3x + 2$.
a) Tính $f(-3), f(-1), f(0), f(2), f\left(\frac{2}{3}\right)$.
b) Tìm các giá trị của $x$ tương ứng khi $y = 8$, $y = 2$, $y = -1$.

### Bài tập 2:
Trên mặt phẳng tọa độ $Oxy$, hãy vẽ và xác định góc phần tư của các điểm sau:
$$A(2; 4), \quad B(-3; 1), \quad C(-4; -2), \quad D(3; -3), \quad E(0; 2), \quad F(-5; 0)$$

### Bài tập 3:
Cho hàm số $y = f(x) = (2m - 1)x + 3$.
a) Tìm $m$ biết đồ thị hàm số đi qua điểm $A(2; 7)$.
b) Với $m$ vừa tìm được, điểm $B(-1; 1)$ có thuộc đồ thị hàm số không? Vì sao?

### Bài tập 4 (Toán thực tế kinh tế):
Một hãng taxi tính cước như sau: Giá mở cửa cho $1\text{ km}$ đầu tiên là $15\,000$ đồng. Từ kilômét thứ hai trở đi, giá cước là $12\,000$ đồng/km.
a) Viết công thức hàm số biểu thị tổng số tiền cước $y\text{ (đồng)}$ theo quãng đường di chuyển $x\text{ (km)}$ với $x \ge 1$.
b) Bạn Nam đi taxi từ nhà đến trường với quãng đường dài $8\text{ km}$ thì phải trả bao nhiêu tiền cước?
c) Nếu bạn Linh thanh toán số tiền cước là $135\,000$ đồng thì quãng đường bạn Linh đã đi là bao nhiêu kilômét?
