---
title: 'Toán 9 Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn'
description: 'Làm chủ khái niệm Phương trình và Hệ hai phương trình bậc nhất hai ẩn Toán 9 Bài 1: Dạng tổng quát, nghiệm và tập nghiệm, biểu diễn hình học đường thẳng ax + by = c, vị trí tương đối hai đường thẳng, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Phương trình bậc nhất hai ẩn
  - Hệ phương trình bậc nhất hai ẩn
  - Nghiệm của hệ phương trình
  - Kết nối tri thức
grade: 9
---

# Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn

Chào mừng các em học sinh bước vào năm học cuối cấp THCS — năm học lớp 9 mang tính bước ngoặt chuẩn bị cho kỳ thi tuyển sinh vào Lớp 10 THPT!

Ở lớp 8, chúng ta đã làm quen với phương trình bậc nhất một ẩn dạng $ax + b = 0$, nơi mỗi ẩn số đại diện cho một đại lượng đơn lẻ (như vận tốc, thời gian hay số học sinh). Nhưng trong thực tế cuộc sống, các hiện tượng kinh tế, kỹ thuật và đời sống thường xuất hiện **hai hoặc nhiều đại lượng biến thiên cùng tác động lẫn nhau**:
- Một cửa hàng bán được cả áo sơ mi và quần âu với tổng doanh thu và tổng số lượng xác định.
- Hỗn hợp hai dung dịch hóa chất với nồng độ phần trăm khác nhau cần pha trộn để đạt dung dịch tiêu chuẩn.
- Dòng nước chảy xuôi dòng và ngược dòng chịu ảnh hưởng đồng thời của vận tốc thuyền và vận tốc dòng nước.

Để mô hình hóa toán học các bài toán đa biến đó, chúng ta cần tới công cụ mạnh mẽ: **Phương trình và Hệ phương trình bậc nhất hai ẩn**. Bài học mở đầu này sẽ giúp các em xây dựng nền móng trực quan vững chắc nhất!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 1: PHƯƠNG TRÌNH & HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương trình bậc nhất 2 ẩn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dạng tổng quát: $ax + by = c$ ($a^2 + b^2 \neq 0$).<br>• Nghiệm là <strong>cặp số $(x_0; y_0)$</strong> thỏa mãn đẳng thức.<br>• Luôn có <strong>vô số nghiệm</strong>.<br>• Biểu diễn hình học là một <strong>đường thẳng</strong> trên mặt phẳng tọa độ $Oxy$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hệ hai phương trình</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dạng tổng quát:<br>$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$<br>• Cặp số $(x_0; y_0)$ là nghiệm chung của cả hai phương trình.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ý nghĩa hình học số nghiệm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $d_1$ cắt $d_2 \iff$ Hệ có <strong>nghiệm duy nhất</strong>.<br>• $d_1 \parallel d_2 \iff$ Hệ <strong>vô nghiệm</strong>.<br>• $d_1 \equiv d_2 \iff$ Hệ có <strong>vô số nghiệm</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Điều kiện tỉ số hệ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Duy nhất: $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$.<br>• Vô nghiệm: $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$.<br>• Vô số nghiệm: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Nhận dạng phương trình:** Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn: $2x - 3y = 5$; $x^2 + y = 3$; $0x + 0y = 7$; $0x + 4y = 8$?
2. **Kiểm tra nghiệm:** Cặp số $(x; y) = (2; 1)$ có phải là nghiệm của phương trình $3x - 2y = 4$ không?
3. **Tìm ẩn còn lại:** Cho phương trình $2x + y = 7$. Nếu $x = 3$ thì giá trị tương ứng của $y$ bằng bao nhiêu?
4. **Kiểm tra nghiệm của hệ:** Cặp số $(1; 2)$ có phải là nghiệm của hệ $\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases}$ không?
5. **Giao điểm đồ thị:** Hai đường thẳng biểu diễn hai phương trình của hệ cắt nhau tại điểm $M(-1; 4)$. Nghiệm của hệ phương trình đó là gì?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $2x - 3y = 5$ và $0x + 4y = 8$ (tương đương $4y = 8$) là các phương trình bậc nhất hai ẩn (vì có bậc nhất và $a^2 + b^2 \neq 0$). Phương trình $x^2 + y = 3$ chứa $x^2$ (bậc 2); $0x + 0y = 7$ có cả $a = b = 0$ nên không phải.
> 2. Thay $x = 2, y = 1$ vào vế trái: $3(2) - 2(1) = 6 - 2 = 4$ (bằng vế phải) $\implies$ **Là nghiệm**.
> 3. $2(3) + y = 7 \implies 6 + y = 7 \implies y = 1$.
> 4. Thay $(1; 2)$: $1 + 2 = 3$ (thỏa mãn pt 1) và $2(1) - 2 = 0$ (thỏa mãn pt 2) $\implies$ **Là nghiệm của hệ**.
> 5. Nghiệm của hệ chính là tọa độ giao điểm: $(x; y) = (-1; 4)$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Khái niệm Phương trình bậc nhất hai ẩn

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Phương trình bậc nhất hai ẩn $x$ và $y$ là hệ thức có dạng:
> $$ax + by = c$$
> Trong đó $a, b, c$ là các số đã biết ($a$ và $b$ **không đồng thời bằng 0**, tức $a^2 + b^2 \neq 0$), $x$ và $y$ là hai ẩn số.

**Ví dụ:**
- $2x + 3y = 12$ là phương trình bậc nhất hai ẩn với $a = 2, b = 3, c = 12$.
- $5x + 0y = 15$ (viết gọn là $5x = 15$) là phương trình bậc nhất hai ẩn với $a = 5, b = 0, c = 15$.
- $0x - 2y = 8$ (viết gọn là $-2y = 8$) là phương trình bậc nhất hai ẩn với $a = 0, b = -2, c = 8$.

---

### 2. Nghiệm và Tập nghiệm của Phương trình bậc nhất hai ẩn

- Nếu tại $x = x_0$ và $y = y_0$, giá trị của vế trái $ax_0 + by_0$ bằng vế phải $c$ thì cặp số $(x_0; y_0)$ được gọi là một **nghiệm** của phương trình $ax + by = c$.
- Kí hiệu nghiệm là: $(x; y) = (x_0; y_0)$.

> [!NOTE]
> **TÍNH CHẤT TẬP NGHIỆM:**
> Phương trình bậc nhất hai ẩn $ax + by = c$ **luôn có vô số nghiệm**.
> Trong mặt phẳng tọa độ $Oxy$, tập hợp các điểm biểu diễn các nghiệm $(x; y)$ của phương trình $ax + by = c$ là một **đường thẳng**, gọi là **đường thẳng $ax + by = c$** (kí hiệu là đường thẳng $d$).

**Các trường hợp đường thẳng biểu diễn nghiệm:**
1. **Nếu $b \neq 0$:** Phương trình viết lại thành $y = -\frac{a}{b}x + \frac{c}{b}$.
   Đường thẳng $d$ cắt cả hai trục tọa độ. Tập nghiệm là:
   $$S = \left\{\left(x;\ -\frac{a}{b}x + \frac{c}{b}\right) \;\middle|\; x \in \mathbb{R}\right\}$$
2. **Nếu $b = 0$ và $a \neq 0$:** Phương trình trở thành $ax = c \iff x = \frac{c}{a}$.
   Đường thẳng $d$ **song song hoặc trùng với trục tung $Oy$**. Tập nghiệm là:
   $$S = \left\{\left(\frac{c}{a};\ y\right) \;\middle|\; y \in \mathbb{R}\right\}$$
3. **Nếu $a = 0$ và $b \neq 0$:** Phương trình trở thành $by = c \iff y = \frac{c}{b}$.
   Đường thẳng $d$ **song song hoặc trùng với trục hoành $Ox$**. Tập nghiệm là:
   $$S = \left\{\left(x;\ \frac{c}{b}\right) \;\middle|\; x \in \mathbb{R}\right\}$$

---

### 3. Hệ hai phương trình bậc nhất hai ẩn

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Hệ hai phương trình bậc nhất hai ẩn $x$ và $y$ có dạng tổng quát:
> $$\begin{cases} a_1x + b_1y = c_1 \quad (d_1) \\ a_2x + b_2y = c_2 \quad (d_2) \end{cases}$$
> Trong đó $a_1^2 + b_1^2 \neq 0$ và $a_2^2 + b_2^2 \neq 0$.

- Nếu cặp số $(x_0; y_0)$ đồng thời là nghiệm của cả hai phương trình thì $(x_0; y_0)$ được gọi là một **nghiệm của hệ phương trình**.
- Giải hệ phương trình là tìm tất cả các nghiệm (tìm tập nghiệm) của hệ đó.

---

### 4. Ý nghĩa Hình học về Số nghiệm của Hệ phương trình

Gọi $d_1$ là đường thẳng biểu diễn tập nghiệm của phương trình $a_1x + b_1y = c_1$ và $d_2$ là đường thẳng biểu diễn tập nghiệm của phương trình $a_2x + b_2y = c_2$:

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" style="width: 100%; max-width: 600px; height: auto;" class="lesson-diagram" role="img" aria-label="3 vị trí tương đối của hai đường thẳng biểu diễn số nghiệm hệ phương trình">
    <!-- Hình 1: Cắt nhau (1 nghiệm duy nhất) -->
    <g transform="translate(10, 10)">
      <rect width="170" height="170" fill="#f8fafc" stroke="#e2e8f0" rx="8"/>
      <line x1="20" y1="150" x2="150" y2="30" stroke="#2563eb" stroke-width="2"/>
      <line x1="20" y1="40" x2="150" y2="140" stroke="#ef4444" stroke-width="2"/>
      <circle cx="85" cy="90" r="4" fill="#10b981"/>
      <text x="95" y="90" font-family="sans-serif" font-weight="bold" font-size="12" fill="#10b981">M(x₀; y₀)</text>
      <text x="30" y="180" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">1. Nghiệm duy nhất</text>
    </g>

    <!-- Hình 2: Song song (Vô nghiệm) -->
    <g transform="translate(210, 10)">
      <rect width="170" height="170" fill="#f8fafc" stroke="#e2e8f0" rx="8"/>
      <line x1="20" y1="120" x2="150" y2="30" stroke="#2563eb" stroke-width="2"/>
      <line x1="20" y1="150" x2="150" y2="60" stroke="#ef4444" stroke-width="2"/>
      <text x="50" y="90" font-family="sans-serif" font-weight="bold" font-size="13" fill="#64748b">d₁ // d₂</text>
      <text x="45" y="180" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">2. Vô nghiệm</text>
    </g>

    <!-- Hình 3: Trùng nhau (Vô số nghiệm) -->
    <g transform="translate(410, 10)">
      <rect width="170" height="170" fill="#f8fafc" stroke="#e2e8f0" rx="8"/>
      <line x1="20" y1="140" x2="150" y2="40" stroke="#2563eb" stroke-width="4"/>
      <line x1="20" y1="140" x2="150" y2="40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="45" y="80" font-family="sans-serif" font-weight="bold" font-size="13" fill="#b45309">d₁ ≡ d₂</text>
      <text x="35" y="180" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">3. Vô số nghiệm</text>
    </g>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Ba trạng thái nghiệm của hệ tương ứng với 3 vị trí tương đối của hai đường thẳng d₁ và d₂</em></p>
</div>

| Vị trí tương đối của $d_1$ và $d_2$ | Số giao điểm | Số nghiệm của hệ phương trình | Điều kiện tỉ số hệ số (khi $a_2, b_2, c_2 \neq 0$) |
| :--- | :---: | :--- | :--- |
| **$d_1$ cắt $d_2$** | $1$ giao điểm $M(x_0; y_0)$ | **Có nghiệm duy nhất** $(x_0; y_0)$ | $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ |
| **$d_1 \parallel d_2$** | Không có giao điểm | **Vô nghiệm** | $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ |
| **$d_1 \equiv d_2$** | Vô số giao điểm | **Có vô số nghiệm** | $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ |

---

## Ứng dụng Tương tác Trực quan

### Mô phỏng Đồ thị Hai Đường thẳng & Khám phá Nghiệm của Hệ

Nhập các hệ số $a_1, b_1, c_1$ và $a_2, b_2, c_2$ của hệ phương trình:
$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$
Hệ thống tự động vẽ hai đường thẳng $d_1$ (xanh lam) và $d_2$ (đỏ), xác định giao điểm và kết luận số nghiệm theo thời gian thực:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: ĐỒ THỊ VÀ SỐ NGHIỆM CỦA HỆ PHƯƠNG TRÌNH</h4>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-bottom: 16px;">
    <!-- Phương trình 1 -->
    <div style="background: var(--bg-secondary, #f8fafc); padding: 12px; border-radius: 8px; border-left: 4px solid #2563eb;">
      <h5 style="margin: 0 0 8px 0; color: #2563eb;">Phương trình (d₁): a₁x + b₁y = c₁</h5>
      <div style="display: flex; gap: 8px; align-items: center;">
        <input type="number" id="inp-a1" value="1" style="width: 45px; padding: 4px;" oninput="updateSystemVisual()"> x + 
        <input type="number" id="inp-b1" value="1" style="width: 45px; padding: 4px;" oninput="updateSystemVisual()"> y = 
        <input type="number" id="inp-c1" value="4" style="width: 45px; padding: 4px;" oninput="updateSystemVisual()">
      </div>
    </div>
    <!-- Phương trình 2 -->
    <div style="background: var(--bg-secondary, #f8fafc); padding: 12px; border-radius: 8px; border-left: 4px solid #ef4444;">
      <h5 style="margin: 0 0 8px 0; color: #ef4444;">Phương trình (d₂): a₂x + b₂y = c₂</h5>
      <div style="display: flex; gap: 8px; align-items: center;">
        <input type="number" id="inp-a2" value="2" style="width: 45px; padding: 4px;" oninput="updateSystemVisual()"> x - 
        <input type="number" id="inp-b2" value="1" style="width: 45px; padding: 4px;" oninput="updateSystemVisual()"> y = 
        <input type="number" id="inp-c2" value="2" style="width: 45px; padding: 4px;" oninput="updateSystemVisual()">
      </div>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
    <button onclick="setSystemPreset(1, 1, 4, 2, -1, 2)" style="padding: 6px 12px; font-size: 0.9em; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; cursor: pointer;">
      🎯 Nghiệm duy nhất (2; 2)
    </button>
    <button onclick="setSystemPreset(1, -2, 3, 2, -4, 10)" style="padding: 6px 12px; font-size: 0.9em; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; cursor: pointer;">
      🚫 Vô nghiệm (Song song)
    </button>
    <button onclick="setSystemPreset(2, 3, 6, 4, 6, 12)" style="padding: 6px 12px; font-size: 0.9em; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; cursor: pointer;">
      ♾️ Vô số nghiệm (Trùng nhau)
    </button>
  </div>

  <div style="text-align: center; margin: 14px 0;">
    <svg id="system-svg" viewBox="0 0 460 260" style="width: 100%; max-width: 460px; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px;">
      <!-- Lưới tọa độ Oxy -->
      <!-- Gốc tọa độ O tại (230, 130). Tỉ lệ: 1 đơn vị = 20px. x từ -10 đến 10, y từ -6 đến 6 -->
      <line x1="20" y1="130" x2="440" y2="130" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="440,126 448,130 440,134" fill="#94a3b8" />
      <text x="440" y="148" font-family="sans-serif" font-size="12" fill="#64748b">x</text>

      <line x1="230" y1="240" x2="230" y2="20" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="226,20 230,12 234,20" fill="#94a3b8" />
      <text x="215" y="25" font-family="sans-serif" font-size="12" fill="#64748b">y</text>

      <text x="218" y="145" font-family="sans-serif" font-size="11" fill="#94a3b8">O</text>

      <!-- Đường thẳng d1 (xanh) -->
      <line id="svg-line-d1" x1="0" y1="0" x2="0" y2="0" stroke="#2563eb" stroke-width="2.5" />
      <!-- Đường thẳng d2 (đỏ) -->
      <line id="svg-line-d2" x1="0" y1="0" x2="0" y2="0" stroke="#ef4444" stroke-width="2.5" />

      <!-- Điểm giao M -->
      <circle id="svg-inter-pt" cx="0" cy="0" r="5" fill="#10b981" style="display: none;" />
      <text id="svg-inter-txt" x="0" y="0" font-family="sans-serif" font-weight="bold" font-size="12" fill="#10b981" style="display: none;">M</text>
    </svg>
  </div>

  <div id="system-result-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 0.95em; line-height: 1.8;">
    Đang phân tích hệ phương trình...
  </div>
</div>

<script>
function setSystemPreset(a1, b1, c1, a2, b2, c2) {
  document.getElementById('inp-a1').value = a1;
  document.getElementById('inp-b1').value = b1;
  document.getElementById('inp-c1').value = c1;
  document.getElementById('inp-a2').value = a2;
  document.getElementById('inp-b2').value = b2;
  document.getElementById('inp-c2').value = c2;
  updateSystemVisual();
}

function updateSystemVisual() {
  var a1 = parseFloat(document.getElementById('inp-a1').value) || 0;
  var b1 = parseFloat(document.getElementById('inp-b1').value) || 0;
  var c1 = parseFloat(document.getElementById('inp-c1').value) || 0;
  var a2 = parseFloat(document.getElementById('inp-a2').value) || 0;
  var b2 = parseFloat(document.getElementById('inp-b2').value) || 0;
  var c2 = parseFloat(document.getElementById('inp-c2').value) || 0;

  var resBox = document.getElementById('system-result-box');
  if (!resBox) return;

  var D = a1 * b2 - a2 * b1;
  var Dx = c1 * b2 - c2 * b1;
  var Dy = a1 * c2 - a2 * c1;

  // Tính tọa độ SVG: gốc O tại (230, 130), scale: 20px = 1 đv
  var ox = 230, oy = 130, scale = 20;

  // Vẽ d1: a1*x + b1*y = c1. Lấy 2 điểm x=-10 và x=10
  var l1 = document.getElementById('svg-line-d1');
  var l2 = document.getElementById('svg-line-d2');

  function plotLine(a, b, c, lineEl) {
    if (a === 0 && b === 0) {
      lineEl.setAttribute('x1', 0); lineEl.setAttribute('y1', 0);
      lineEl.setAttribute('x2', 0); lineEl.setAttribute('y2', 0);
      return;
    }
    if (Math.abs(b) > 0.001) {
      var xA = -10, yA = (c - a * xA) / b;
      var xB = 10, yB = (c - a * xB) / b;
      lineEl.setAttribute('x1', ox + xA * scale);
      lineEl.setAttribute('y1', oy - yA * scale);
      lineEl.setAttribute('x2', ox + xB * scale);
      lineEl.setAttribute('y2', oy - yB * scale);
    } else {
      var xFix = c / a;
      lineEl.setAttribute('x1', ox + xFix * scale);
      lineEl.setAttribute('y1', 20);
      lineEl.setAttribute('x2', ox + xFix * scale);
      lineEl.setAttribute('y2', 240);
    }
  }

  if (l1) plotLine(a1, b1, c1, l1);
  if (l2) plotLine(a2, b2, c2, l2);

  var dot = document.getElementById('svg-inter-pt');
  var txt = document.getElementById('svg-inter-txt');

  if (D !== 0) {
    var x0 = Dx / D;
    var y0 = Dy / D;
    if (dot && txt) {
      dot.style.display = 'block';
      dot.setAttribute('cx', ox + x0 * scale);
      dot.setAttribute('cy', oy - y0 * scale);
      txt.style.display = 'block';
      txt.setAttribute('x', ox + x0 * scale + 8);
      txt.setAttribute('y', oy - y0 * scale - 6);
      txt.textContent = 'M(' + x0.toFixed(1) + '; ' + y0.toFixed(1) + ')';
    }
    resBox.innerHTML = 
      '✅ <strong>HỆ CÓ NGHIỆM DUY NHẤT:</strong><br>' +
      '• Hai đường thẳng $d_1$ và $d_2$ <strong>cắt nhau</strong> tại giao điểm $M(' + x0.toFixed(2) + '; ' + y0.toFixed(2) + ')$.<br>' +
      '• Tỉ số hệ số: $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$ (vì định thức $D = a_1b_2 - a_2b_1 = ' + D.toFixed(1) + ' \\neq 0$).<br>' +
      '• <strong>Nghiệm của hệ:</strong> $(x; y) = (' + x0.toFixed(2) + '; ' + y0.toFixed(2) + ')$.';
  } else {
    if (dot) dot.style.display = 'none';
    if (txt) txt.style.display = 'none';
    if (Dx === 0 && Dy === 0) {
      resBox.innerHTML = 
        '♾️ <strong>HỆ CÓ VÔ SỐ NGHIỆM:</strong><br>' +
        '• Hai đường thẳng $d_1$ và $d_2$ <strong>trùng nhau</strong> ($d_1 \\equiv d_2$).<br>' +
        '• Tỉ số hệ số: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.<br>' +
        '• Tập nghiệm của hệ là tập hợp tất cả các điểm nằm trên đường thẳng $d_1$.';
    } else {
      resBox.innerHTML = 
        '🚫 <strong>HỆ PHƯƠNG TRÌNH VÔ NGHIỆM:</strong><br>' +
        '• Hai đường thẳng $d_1$ và $d_2$ <strong>song song với nhau</strong> ($d_1 \\parallel d_2$), không có điểm chung.<br>' +
        '• Tỉ số hệ số: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ ($D = 0$ nhưng $D_x \\neq 0$ hoặc $D_y \\neq 0$).<br>' +
        '• Tập nghiệm: $S = \\varnothing$.';
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  updateSystemVisual();
});
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Kiểm tra một cặp số có phải là nghiệm của phương trình / hệ phương trình

**Phương pháp giải:**
1. Thay giá trị $x = x_0$ và $y = y_0$ vào từng phương trình.
2. Tính giá trị hai vế. Nếu vế trái bằng vế phải $\implies$ cặp số là nghiệm.
3. Đối với hệ phương trình, cặp số phải thỏa mãn **đồng thời cả hai phương trình**.

---

#### Bài toán 1:
Cho phương trình $(1): 3x - 5y = 11$ và hệ phương trình $(I): \begin{cases} 2x + 3y = 7 \\ 4x - y = 7 \end{cases}$.
a) Trong các cặp số sau, cặp số nào là nghiệm của phương trình $(1)$: $(2; -1)$, $(7; 2)$, $(4; 1)$?
b) Cặp số $(2; 1)$ có phải là nghiệm của hệ phương trình $(I)$ không? Vì sao?

**Lời giải:**

a) Thay lần lượt các cặp số vào vế trái của phương trình $(1)$:
- Với cặp số $(2; -1)$:
  $$\text{VT} = 3(2) - 5(-1) = 6 + 5 = 11 = \text{VP}$$
  $\implies (2; -1)$ **là một nghiệm** của phương trình $(1)$.
- Với cặp số $(7; 2)$:
  $$\text{VT} = 3(7) - 5(2) = 21 - 10 = 11 = \text{VP}$$
  $\implies (7; 2)$ **là một nghiệm** của phương trình $(1)$.
- Với cặp số $(4; 1)$:
  $$\text{VT} = 3(4) - 5(1) = 12 - 5 = 7 \neq 11 = \text{VP}$$
  $\implies (4; 1)$ **không phải là nghiệm** của phương trình $(1)$.

b) Thay $x = 2$ và $y = 1$ vào hai phương trình của hệ $(I)$:
- Phương trình thứ nhất: $2(2) + 3(1) = 4 + 3 = 7$ (thỏa mãn).
- Phương trình thứ hai: $4(2) - 1 = 8 - 1 = 7$ (thỏa mãn).
Vì cặp số $(2; 1)$ thỏa mãn đồng thời cả hai phương trình của hệ $(I)$ nên $(2; 1)$ **chính là nghiệm của hệ phương trình $(I)$**.

---

### Dạng 2: Biểu diễn tập nghiệm và vẽ đường thẳng biểu diễn nghiệm

**Phương pháp giải:**
1. Rút ẩn này theo ẩn kia (thường rút $y$ theo $x$: $y = -\frac{a}{b}x + \frac{c}{b}$).
2. Viết tập nghiệm tổng quát: $S = \left\{\left(x;\ -\frac{a}{b}x + \frac{c}{b}\right) \;\middle|\; x \in \mathbb{R}\right\}$.
3. Tìm 2 điểm thuộc đường thẳng: cho $x = 0 \implies y$; cho $y = 0 \implies x$. Vẽ đường thẳng đi qua 2 điểm đó trên mặt phẳng tọa độ $Oxy$.

---

#### Bài toán 2:
Cho phương trình $2x - y = 4$.
a) Viết công thức nghiệm tổng quát của phương trình và nêu tập nghiệm.
b) Biểu diễn hình học tập nghiệm của phương trình trên mặt phẳng tọa độ $Oxy$.

**Lời giải:**

a) Biến đổi phương trình về dạng rút $y$ theo $x$:
$$2x - y = 4 \iff y = 2x - 4$$
Nghiệm tổng quát của phương trình là $(x;\ 2x - 4)$ với $x \in \mathbb{R}$ tùy ý.
Tập nghiệm của phương trình là:
$$S = \{(x;\ 2x - 4) \mid x \in \mathbb{R}\}$$

b) Biểu diễn hình học:
Tập nghiệm của phương trình được biểu diễn bởi đường thẳng $(d): y = 2x - 4$:
- Cho $x = 0 \implies y = -4$, ta được điểm $A(0; -4)$ trên trục tung $Oy$.
- Cho $y = 0 \implies 2x - 4 = 0 \implies x = 2$, ta được điểm $B(2; 0)$ trên trục hoành $Ox$.
Vẽ đường thẳng đi qua hai điểm $A(0; -4)$ và $B(2; 0)$, ta được đường thẳng biểu diễn tập nghiệm của phương trình.

---

### Dạng 3: Tìm tham số $m$ để cặp số cho trước là nghiệm của phương trình / hệ phương trình

**Phương pháp giải:**
1. Thay giá trị cụ thể của $x$ và $y$ vào phương trình.
2. Thu gọn và giải phương trình ẩn $m$.

---

#### Bài toán 3:
a) Tìm giá trị của $m$ để phương trình $(2m - 1)x + 3y = 7$ nhận cặp số $(1; 2)$ làm nghiệm.
b) Tìm các giá trị của $m$ và $n$ để hệ phương trình sau nhận cặp số $(x; y) = (3; -1)$ làm nghiệm:
$$\begin{cases} mx + ny = 5 \\ 2mx - 3ny = 25 \end{cases}$$

**Lời giải:**

a) Vì phương trình nhận $(1; 2)$ làm nghiệm nên thay $x = 1, y = 2$ vào phương trình:
$$(2m - 1) \cdot 1 + 3 \cdot 2 = 7$$
$$2m - 1 + 6 = 7 \implies 2m + 5 = 7 \implies 2m = 2 \implies m = 1$$
Vậy với $m = 1$, phương trình nhận cặp số $(1; 2)$ làm nghiệm.

b) Thay $x = 3, y = -1$ vào hệ phương trình:
$$\begin{cases} m(3) + n(-1) = 5 \\ 2m(3) - 3n(-1) = 25 \end{cases} \iff \begin{cases} 3m - n = 5 \quad (1) \\ 6m + 3n = 25 \quad (2) \end{cases}$$
Từ $(1) \implies n = 3m - 5$. Thay vào $(2)$:
$$6m + 3(3m - 5) = 25 \implies 6m + 9m - 15 = 25 \implies 15m = 40 \implies m = \frac{40}{15} = \frac{8}{3}$$
Suy ra:
$$n = 3 \cdot \frac{8}{3} - 5 = 8 - 5 = 3$$
Vậy $m = \frac{8}{3}$ và $n = 3$.

---

### Dạng 4: Dự đoán số nghiệm của hệ phương trình bằng tỉ số hệ số

**Phương pháp giải:**
Xét hệ $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$:
- Nếu $\frac{a_1}{a_2} \neq \frac{b_1}{b_2} \implies$ Hệ có **nghiệm duy nhất**.
- Nếu $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \implies$ Hệ **vô nghiệm**.
- Nếu $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} \implies$ Hệ có **vô số nghiệm**.

---

#### Bài toán 4:
Không giải hệ phương trình, hãy dự đoán số nghiệm của các hệ sau:
a) $\begin{cases} 2x - 3y = 5 \\ 4x - 6y = 10 \end{cases}$
b) $\begin{cases} x + 2y = 4 \\ 3x + 6y = 7 \end{cases}$
c) $\begin{cases} 5x - y = 2 \\ 2x + 3y = 8 \end{cases}$

**Lời giải:**

a) Xét các tỉ số:
$$\frac{a_1}{a_2} = \frac{2}{4} = \frac{1}{2};\quad \frac{b_1}{b_2} = \frac{-3}{-6} = \frac{1}{2};\quad \frac{c_1}{c_2} = \frac{5}{10} = \frac{1}{2}$$
Vì $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} = \frac{1}{2}$, hai đường thẳng trùng nhau nên hệ phương trình **có vô số nghiệm**.

b) Xét các tỉ số:
$$\frac{a_1}{a_2} = \frac{1}{3};\quad \frac{b_1}{b_2} = \frac{2}{6} = \frac{1}{3};\quad \frac{c_1}{c_2} = \frac{4}{7}$$
Vì $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ ($\frac{1}{3} \neq \frac{4}{7}$), hai đường thẳng song song nên hệ phương trình **vô nghiệm**.

c) Xét các tỉ số:
$$\frac{a_1}{a_2} = \frac{5}{2};\quad \frac{b_1}{b_2} = \frac{-1}{3}$$
Vì $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ ($\frac{5}{2} \neq -\frac{1}{3}$), hai đường thẳng cắt nhau nên hệ phương trình **có nghiệm duy nhất**.

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Phân tích Cân bằng Cung – Cầu trong Kinh tế học Thị trường (Market Equilibrium)
Trong kinh tế vi mô:
- Đường Cung (Supply) biểu diễn lượng hàng hóa doanh nghiệp muốn bán: $P = a \cdot Q + b$.
- Đường Cầu (Demand) biểu diễn lượng hàng hóa người tiêu dùng muốn mua: $P = -c \cdot Q + d$.
- Nghiệm của hệ hai phương trình bậc nhất hai ẩn này xác định **Mức giá cân bằng $P^*$** và **Sản lượng cân bằng $Q^*$**, giúp các sàn thương mại điện tử như Shopee hay Amazon tự động điều chỉnh thuật toán giá bán tối ưu!

### 2. Định vị Giao hội Tín hiệu Vô tuyến trong Hàng không & Hàng hải
Để xác định vị trí của một chiếc máy bay bị mất tín hiệu trên biển:
- Hai trạm kiểm soát không lưu đo phương vị góc của máy bay, thiết lập thành hai phương trình đường thẳng $a_1x + b_1y = c_1$ và $a_2x + b_2y = c_2$.
- Giao điểm duy nhất của hai đường thẳng này chính là tọa độ cứu hộ chuẩn xác của chiếc phi cơ giữa đại dương mênh mông.

### 3. Cân bằng Phương trình Phản ứng Hóa học Đa chất
Khi cân bằng các phản ứng oxi hóa - khử phức tạp trong hóa học lớp 9 và THPT:
- Việc đặt các hệ số ẩn $x, y$ cho các chất tham gia và chất tạo thành dẫn tới một hệ phương trình bậc nhất hai ẩn bảo toàn số nguyên tử của từng nguyên tố (như Fe, O, H).
- Giải hệ phương trình giúp tìm ra chính xác tỉ lệ mol tối giản mà không cần mò mẫm thử sai.

### 4. Thuật toán Xử lý Ảnh & Trích xuất Biên dạng Điểm trong Trí tuệ Nhân tạo (Computer Vision)
Xe tự hành nhận diện làn đường bằng camera trước:
- Bộ lọc Sobel xác định hai vạch sơn mép đường dưới dạng hai phương trình đường thẳng $d_1$ và $d_2$.
- Máy tính giải hệ phương trình tìm giao điểm của hai vạch sơn ở đường chân trời (điểm hội tụ), từ đó điều khiển vô lăng giữ cho xe chạy luôn ở chính giữa làn đường an toàn.

### 5. Quản lý Tài chính Doanh nghiệp & Điểm Hòa vốn (Break-even Point)
Khi thành lập một công ty khởi nghiệp:
- Hàm tổng chi phí: $y = C_{\text{co dinh}} + C_{\text{bien doi}} \cdot x$.
- Hàm tổng doanh thu: $y = \text{Gia ban} \cdot x$.
- Nghiệm của hệ hai phương trình bậc nhất hai ẩn này chỉ ra số lượng sản phẩm $x$ tối thiểu công ty phải bán được để bắt đầu có lãi, tránh phá sản trong năm đầu tiên.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phương trình nào sau đây là phương trình bậc nhất hai ẩn?",
  "options": [
    "2x - 3y = 7",
    "x^2 + y = 5",
    "0x + 0y = 4",
    "xy + 2 = 0"
  ],
  "answer": 0,
  "explanation": "Phương trình bậc nhất hai ẩn có dạng ax + by = c với a, b không đồng thời bằng 0. Chỉ có 2x - 3y = 7 thỏa mãn điều kiện này."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cặp số nào sau đây là một nghiệm của phương trình 2x + y = 5?",
  "options": [
    "(1; 2)",
    "(2; 1)",
    "(3; 1)",
    "(0; 4)"
  ],
  "answer": 1,
  "explanation": "Thay (2; 1): 2(2) + 1 = 5 (đúng bằng vế phải) nên (2; 1) là nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Phương trình bậc nhất hai ẩn ax + by = c (với a^2 + b^2 khác 0) có bao nhiêu nghiệm?",
  "options": [
    "Vô nghiệm",
    "1 nghiệm duy nhất",
    "2 nghiệm phân biệt",
    "Vô số nghiệm"
  ],
  "answer": 3,
  "explanation": "Phương trình bậc nhất hai ẩn luôn có vô số nghiệm. Tập hợp các điểm biểu diễn nghiệm tạo thành một đường thẳng trên mặt phẳng tọa độ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Đường thẳng biểu diễn tập nghiệm của phương trình 3x = 6 là đường thẳng:",
  "options": [
    "Song song với trục hoành Ox",
    "Song song với trục tung Oy",
    "Đi qua gốc tọa độ O",
    "Trùng với trục hoành Ox"
  ],
  "answer": 1,
  "explanation": "Phương trình tương đương x = 2. Đây là đường thẳng song song với trục tung Oy và cắt trục hoành tại điểm (2; 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cặp số (x; y) = (1; -2) là nghiệm của hệ phương trình nào sau đây?",
  "options": [
    "Hệ { x + y = -1 ; 2x - y = 4 }",
    "Hệ { x - y = 1 ; x + y = 3 }",
    "Hệ { 2x + y = 1 ; x - y = 2 }",
    "Hệ { 3x + y = 5 ; x + y = -1 }"
  ],
  "answer": 0,
  "explanation": "Thay x = 1, y = -2 vào hệ thứ nhất: 1 + (-2) = -1 (đúng) và 2(1) - (-2) = 4 (đúng)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hệ phương trình { a1x + b1y = c1 ; a2x + b2y = c2 }. Hệ có nghiệm duy nhất khi và chỉ khi:",
  "options": [
    "a1 / a2 = b1 / b2",
    "a1 / a2 khác b1 / b2",
    "a1 / a2 = b1 / b2 = c1 / c2",
    "a1 / a2 = b1 / b2 khác c1 / c2"
  ],
  "answer": 1,
  "explanation": "Hệ có nghiệm duy nhất khi hai đường thẳng cắt nhau, tương đương tỉ số a1 / a2 khác b1 / b2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Hệ phương trình { 2x + y = 3 ; 4x + 2y = 5 } có bao nhiêu nghiệm?",
  "options": [
    "1 nghiệm duy nhất",
    "Vô nghiệm",
    "Vô số nghiệm",
    "2 nghiệm"
  ],
  "answer": 1,
  "explanation": "Ta có 2/4 = 1/2 khác 3/5. Hai đường thẳng song song nên hệ vô nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Hệ phương trình { x - 2y = 3 ; 3x - 6y = 9 } có bao nhiêu nghiệm?",
  "options": [
    "Vô số nghiệm",
    "Vô nghiệm",
    "1 nghiệm duy nhất",
    "3 nghiệm"
  ],
  "answer": 0,
  "explanation": "Ta có 1/3 = (-2)/(-6) = 3/9 = 1/3. Hai đường thẳng trùng nhau nên hệ có vô số nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho phương trình (m - 2)x + 2y = 6. Tìm m để phương trình nhận cặp số (2; 1) làm nghiệm.",
  "options": [
    "m = 4",
    "m = 2",
    "m = 3",
    "m = 5"
  ],
  "answer": 0,
  "explanation": "Thay x = 2, y = 1: (m - 2)*2 + 2(1) = 6 ⇒ 2m - 4 + 2 = 6 ⇒ 2m - 2 = 6 ⇒ 2m = 8 ⇒ m = 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai đường thẳng biểu diễn hai phương trình trong hệ cắt nhau tại điểm P(3; -5). Nghiệm của hệ phương trình đó là:",
  "options": [
    "(x; y) = (-5; 3)",
    "(x; y) = (3; -5)",
    "Hệ vô nghiệm",
    "Hệ có vô số nghiệm"
  ],
  "answer": 1,
  "explanation": "Tọa độ giao điểm của hai đường thẳng chính là nghiệm duy nhất của hệ phương trình: (x; y) = (3; -5)."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Trong các cặp số $(0; 2), (1; 0), (2; -2), (-1; 4)$, cặp số nào là nghiệm của phương trình $2x + y = 2$?
2. Cho phương trình $3x - 2y = 6$.
   a) Viết công thức nghiệm tổng quát của phương trình.
   b) Vẽ đường thẳng biểu diễn tập nghiệm của phương trình trên mặt phẳng tọa độ $Oxy$.
3. Không giải hệ, hãy cho biết số nghiệm của các hệ phương trình sau:
   a) $\begin{cases} 3x - y = 2 \\ 6x - 2y = 7 \end{cases}$
   b) $\begin{cases} 4x + y = 5 \\ 2x - 3y = 1 \end{cases}$
   c) $\begin{cases} x - 3y = 4 \\ 2x - 6y = 8 \end{cases}$

### Bài tập nâng cao & Vận dụng thực tế
4. **Bài toán kinh tế cung cầu:** Một mặt hàng có hàm cung là $P = 2Q + 10$ và hàm cầu là $P = -3Q + 60$ ($P$ tính bằng nghìn đồng, $Q$ tính bằng nghìn sản phẩm).
   a) Viết hệ hai phương trình bậc nhất hai ẩn biểu diễn trạng thái thị trường.
   b) Tìm mức giá cân bằng $P$ và sản lượng cân bằng $Q$ của mặt hàng đó trên thị trường.
5. Cho hệ phương trình $\begin{cases} (m + 1)x - y = 3 \\ mx + y = m \end{cases}$.
   a) Tìm $m$ để hệ phương trình nhận cặp số $(1; -1)$ làm nghiệm.
   b) Tìm $m$ để hai đường thẳng biểu diễn hai phương trình của hệ cắt nhau tại một điểm nằm trên trục tung $Oy$.
