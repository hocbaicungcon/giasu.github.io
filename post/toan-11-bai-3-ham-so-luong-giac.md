---
title: 'Toán 11 Bài 3: Hàm số lượng giác - Tập xác định, tính tuần hoàn và đồ thị hàm số'
description: 'Toàn bộ lý thuyết trọng tâm Bài 3 Toán 11: Khảo sát 4 hàm số lượng giác y = sin x, y = cos x, y = tan x, y = cot x; tập xác định, tập giá trị, tính chẵn lẻ, chu kỳ tuần hoàn, bảng biến thiên, đồ thị sóng sin và các dạng toán GTLN, GTNN kèm 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Lượng giác 11
  - Hàm số lượng giác
  - Tập xác định lượng giác
  - Chu kỳ tuần hoàn
  - Đồ thị hàm số lượng giác
  - Kết nối tri thức
grade: 11
---

# Bài 3. Hàm số lượng giác

Chào mừng các em tiếp tục hành trình khám phá chương trình **Toán 11**!

Trong hai bài học trước ([Bài 1: Giá trị lượng giác](toan-11-bai-1-gia-tri-luong-giac-cua-goc-luong-giac.html) và [Bài 2: Công thức lượng giác](toan-11-bai-2-cong-thuc-luong-giac.html)), chúng ta đã tìm hiểu giá trị lượng giác của một góc cố định và những công thức biến đổi đại số tinh tế. 

Bây giờ, hãy tưởng tượng biến số $x$ không còn đứng yên mà liên tục thay đổi theo thời gian $t$:
- Từng đợt sóng biển dâng lên rồi rút xuống theo chu kỳ thủy triều mỗi ngày.
- Đốm sáng trên màn hình máy đo điện tim (ECG) vạch nên những nhịp đập đều đặn của trái tim.
- Một cabin trên vòng đu quay khổng lồ nâng người chơi lên đỉnh cao nhất rồi hạ dần xuống vị trí thấp nhất.
- Âm thanh của một nốt nhạc phát ra từ dây đàn guitar rung động lan tỏa trong không khí.

Tất cả những chuyển động lặp đi lặp lại một cách nhịp nhàng và hoàn hảo đó đều được mô hình hóa toán học bởi **Hàm số lượng giác**. Đây chính là chiếc cầu nối kỳ diệu giữa hình học góc quay với giải tích biến thiên hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG 4 HÀM SỐ LƯỢNG GIÁC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Hàm số $y = \sin x$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>TXĐ:</strong> $D = \mathbb{R}$, <strong>TGT:</strong> $[-1; 1]$.<br>• <strong>Tính chất:</strong> Hàm số <em>lẻ</em>, chu kỳ tuần hoàn $T = 2\pi$.<br>• <strong>Đồ thị:</strong> Đường hình sin lượn sóng, đối xứng qua gốc tọa độ $O$.<br>• Đồng biến trên $\left(-\frac{\pi}{2} + k2\pi; \frac{\pi}{2} + k2\pi\right)$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Hàm số $y = \cos x$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>TXĐ:</strong> $D = \mathbb{R}$, <strong>TGT:</strong> $[-1; 1]$.<br>• <strong>Tính chất:</strong> Hàm số <em>chẵn</em>, chu kỳ tuần hoàn $T = 2\pi$.<br>• <strong>Đồ thị:</strong> Hình sin tịnh tiến sang trái $\frac{\pi}{2}$, đối xứng qua trục tung $Oy$.<br>• Đồng biến trên $(-\pi + k2\pi; k2\pi)$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hàm số $y = \tan x$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>TXĐ:</strong> $D = \mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi\right\}$, <strong>TGT:</strong> $\mathbb{R}$.<br>• <strong>Tính chất:</strong> Hàm số <em>lẻ</em>, chu kỳ cơ sở $T = \pi$.<br>• <strong>Biến thiên:</strong> Luôn đồng biến trên từng khoảng xác định.<br>• <strong>Tiệm cận:</strong> Các đường thẳng đứng $x = \frac{\pi}{2} + k\pi$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hàm số $y = \cot x$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>TXĐ:</strong> $D = \mathbb{R} \setminus \{k\pi\}$, <strong>TGT:</strong> $\mathbb{R}$.<br>• <strong>Tính chất:</strong> Hàm số <em>lẻ</em>, chu kỳ cơ sở $T = \pi$.<br>• <strong>Biến thiên:</strong> Luôn nghịch biến trên từng khoảng xác định.<br>• <strong>Tiệm cận:</strong> Các đường thẳng đứng $x = k\pi$.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tập giá trị:** Giá trị của $\sin x$ có thể vượt quá $1$ hoặc nhỏ hơn $-1$ được không?
2. **Tính đối xứng:** Giữa hai hàm $y = \sin x$ và $y = \cos x$, hàm số nào có đồ thị đối xứng qua trục tung $Oy$?
3. **Chu kỳ:** Nếu góc quay tăng thêm đúng một vòng tròn $360^\circ$ ($2\pi\text{ rad}$), giá trị của $\sin(x + 2\pi)$ và $\cos(x + 2\pi)$ có thay đổi không?
4. **Điểm gián đoạn:** Biểu thức $\tan x = \frac{\sin x}{\cos x}$ sẽ không xác định tại các góc nào mà tại đó $\cos x = 0$?
5. **Đồ thị:** Đồ thị hàm số $y = \sin x$ đi qua gốc tọa độ $O(0; 0)$ hay điểm $(0; 1)$?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Không bao giờ! Tập giá trị của $\sin x$ và $\cos x$ luôn luôn bị giới hạn trong đoạn kín $[-1; 1]$.
> 2. Hàm số $y = \cos x$ là hàm chẵn ($\cos(-x) = \cos x$), nên đồ thị của nó đối xứng qua trục tung $Oy$.
> 3. Không thay đổi! Điểm biểu diễn trên đường tròn đơn vị quay về đúng vị trí ban đầu: $\sin(x + 2\pi) = \sin x$ và $\cos(x + 2\pi) = \cos x$.
> 4. Tại các góc $x = \frac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$), tức là $90^\circ, 270^\circ, -90^\circ, \dots$.
> 5. Đi qua gốc tọa độ $O(0; 0)$ vì $\sin 0 = 0$. Còn đồ thị hàm $y = \cos x$ mới đi qua điểm $(0; 1)$ vì $\cos 0 = 1$.

---

## I. Hàm số tuần hoàn và Chu kỳ

### 1. Định nghĩa hàm số tuần hoàn

Một hàm số $y = f(x)$ xác định trên tập hợp $D$ được gọi là **hàm số tuần hoàn** nếu tồn tại một số thực $T \neq 0$ sao cho với mọi $x \in D$, ta có:
1. $x - T \in D$ và $x + T \in D$.
2. $f(x + T) = f(x)$.

Số dương $T$ nhỏ nhất thỏa mãn tính chất trên (nếu có) được gọi là **chu kỳ** (hay chu kỳ cơ sở) của hàm số tuần hoàn đó.

### 2. Chu kỳ của các hàm số lượng giác cơ bản

- Hai hàm số $y = \sin x$ và $y = \cos x$ tuần hoàn với chu kỳ $T = 2\pi$:
  $$\sin(x + 2\pi) = \sin x, \quad \cos(x + 2\pi) = \cos x$$
- Hai hàm số $y = \tan x$ và $y = \cot x$ tuần hoàn với chu kỳ $T = \pi$:
  $$\tan(x + \pi) = \tan x, \quad \cot(x + \pi) = \cot x$$

> [!IMPORTANT]
> **Công thức mở rộng tính chu kỳ nhanh cho bài tập trắc nghiệm:**
> Cho $\omega > 0$:
> - Hàm số $y = \sin(\omega x + \varphi)$ và $y = \cos(\omega x + \varphi)$ có chu kỳ:
>   $$T = \frac{2\pi}{\omega}$$
> - Hàm số $y = \tan(\omega x + \varphi)$ và $y = \cot(\omega x + \varphi)$ có chu kỳ:
>   $$T = \frac{\pi}{\omega}$$
> - Nếu hàm số $y = f(x)$ là tổng hoặc hiệu của hai hàm tuần hoàn có chu kỳ $T_1 = \frac{a}{b}$ và $T_2 = \frac{c}{d}$ (dạng phân số tối giản), thì chu kỳ chung $T$ là bội chung nhỏ nhất của $T_1$ và $T_2$:
>   $$T = \text{BCNN}(T_1, T_2)$$

---

## II. Khảo sát chi tiết 4 hàm số lượng giác

### 1. Hàm số $y = \sin x$

- **Tập xác định:** $D = \mathbb{R}$.
- **Tập giá trị:** $TGT = [-1; 1]$, nghĩa là $-1 \le \sin x \le 1$ với mọi $x \in \mathbb{R}$.
- **Tính chẵn lẻ:** Vì với mọi $x \in \mathbb{R}$, ta có $-x \in \mathbb{R}$ và $\sin(-x) = -\sin x$ nên $y = \sin x$ là **hàm số lẻ**. Do đó, đồ thị của nó nhận gốc tọa độ $O(0; 0)$ làm tâm đối xứng.
- **Tính tuần hoàn:** Tuần hoàn với chu kỳ cơ sở $T = 2\pi$. Vì vậy, để vẽ toàn bộ đồ thị hàm số $y = \sin x$ trên $\mathbb{R}$, ta chỉ cần vẽ đồ thị trên một chu kỳ có độ dài $2\pi$ (chẳng hạn đoạn $[-\pi; \pi]$ hoặc $[0; 2\pi]$), sau đó tịnh tiến liên tiếp sang trái và sang phải các đoạn có độ dài $2\pi$.

#### Bảng biến thiên trên đoạn $[-\pi; \pi]$:

| $x$ | $-\pi$ | | $-\frac{\pi}{2}$ | | $0$ | | $\frac{\pi}{2}$ | | $\pi$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$y = \sin x$** | $0$ | $\searrow$ | $-1$ | $\nearrow$ | $0$ | $\nearrow$ | $1$ | $\searrow$ | $0$ |

- **Khoảng đồng biến:** $\left(-\frac{\pi}{2} + k2\pi; \frac{\pi}{2} + k2\pi\right)$ với $k \in \mathbb{Z}$.
- **Khoảng nghịch biến:** $\left(\frac{\pi}{2} + k2\pi; \frac{3\pi}{2} + k2\pi\right)$ với $k \in \mathbb{Z}$.
- **Các điểm đặc biệt:**
  - $\sin x = 0 \Leftrightarrow x = k\pi$ ($k \in \mathbb{Z}$) (giao điểm với trục hoành).
  - $\sin x = 1 \Leftrightarrow x = \frac{\pi}{2} + k2\pi$ ($k \in \mathbb{Z}$) (điểm cực đại).
  - $\sin x = -1 \Leftrightarrow x = -\frac{\pi}{2} + k2\pi$ ($k \in \mathbb{Z}$) (điểm cực tiểu).

#### Đồ thị hàm số $y = \sin x$:

<div style="margin: 24px auto; max-width: 780px; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 760 260" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); font-family: system-ui, -apple-system, sans-serif;">
<defs>
<marker id="arrowX" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b"/>
</marker>
<marker id="arrowY" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 1 8 L 5 0 L 9 8 z" fill="#64748b"/>
</marker>
</defs>
<rect x="0" y="0" width="760" height="260" fill="transparent"/>
<!-- Lưới tọa độ mờ -->
<line x1="60" y1="50" x2="720" y2="50" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="60" y1="210" x2="720" y2="210" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4,4"/>
<!-- Trục Ox và Oy -->
<line x1="40" y1="130" x2="730" y2="130" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrowX)"/>
<line x1="380" y1="245" x2="380" y2="20" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrowY)"/>
<text x="735" y="134" font-size="14" font-weight="bold" fill="#475569">x</text>
<text x="384" y="22" font-size="14" font-weight="bold" fill="#475569">y</text>
<text x="368" y="146" font-size="13" fill="#64748b">O</text>
<!-- Các mốc trục Oy: +1 và -1 (1 đơn vị = 80px) -->
<line x1="375" y1="50" x2="385" y2="50" stroke="#64748b" stroke-width="1.5"/>
<text x="360" y="55" font-size="13" font-weight="bold" fill="#0f172a">1</text>
<line x1="375" y1="210" x2="385" y2="210" stroke="#64748b" stroke-width="1.5"/>
<text x="354" y="215" font-size="13" font-weight="bold" fill="#0f172a">-1</text>
<!-- Các mốc trục Ox: pi = 150px, pi/2 = 75px -->
<!-- -2pi: 80, -3pi/2: 155, -pi: 230, -pi/2: 305, 0: 380, pi/2: 455, pi: 530, 3pi/2: 605, 2pi: 680 -->
<line x1="80" y1="126" x2="80" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="65" y="148" font-size="12" fill="#475569">-2π</text>
<line x1="230" y1="126" x2="230" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="220" y="148" font-size="12" fill="#475569">-π</text>
<line x1="455" y1="126" x2="455" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="445" y="148" font-size="12" fill="#475569">π/2</text>
<line x1="530" y1="126" x2="530" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="525" y="148" font-size="12" fill="#475569">π</text>
<line x1="680" y1="126" x2="680" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="670" y="148" font-size="12" fill="#475569">2π</text>
<!-- Đường cong y = sin x từ x = -2pi đến 2pi -->
<path d="M 80 130 C 117.5 45, 117.5 45, 155 50 C 192.5 55, 192.5 130, 230 130 C 267.5 130, 267.5 205, 305 210 C 342.5 215, 342.5 130, 380 130 C 417.5 130, 417.5 45, 455 50 C 492.5 55, 492.5 130, 530 130 C 567.5 130, 567.5 205, 605 210 C 642.5 215, 642.5 130, 680 130" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
<!-- Các điểm đặc biệt trên đồ thị -->
<circle cx="380" cy="130" r="4.5" fill="#2563eb"/>
<circle cx="455" cy="50" r="4.5" fill="#ef4444"/>
<circle cx="530" cy="130" r="4.5" fill="#2563eb"/>
<circle cx="605" cy="210" r="4.5" fill="#ef4444"/>
<circle cx="680" cy="130" r="4.5" fill="#2563eb"/>
<circle cx="305" cy="210" r="4.5" fill="#ef4444"/>
<circle cx="230" cy="130" r="4.5" fill="#2563eb"/>
<circle cx="155" cy="50" r="4.5" fill="#ef4444"/>
<circle cx="80" cy="130" r="4.5" fill="#2563eb"/>
<!-- Nhãn chú thích đồ thị -->
<rect x="580" y="30" width="135" height="32" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
<text x="590" y="51" font-size="13" font-weight="bold" fill="#1d4ed8">y = sin x (T = 2π)</text>
</svg>
<p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 3.1: Đồ thị hàm số sóng sin $y = \sin x$ đối xứng qua gốc tọa độ $O$ với biên độ $[-1; 1]$.</em></p>
</div>

---

### 2. Hàm số $y = \cos x$

- **Tập xác định:** $D = \mathbb{R}$.
- **Tập giá trị:** $TGT = [-1; 1]$.
- **Tính chẵn lẻ:** Với mọi $x \in \mathbb{R}$, ta có $-x \in \mathbb{R}$ và $\cos(-x) = \cos x$ nên $y = \cos x$ là **hàm số chẵn**. Do đó, đồ thị của nó nhận trục tung $Oy$ làm trục đối xứng.
- **Tính tuần hoàn:** Tuần hoàn với chu kỳ cơ sở $T = 2\pi$.
- **Mối liên hệ hình học:** Vì $\cos x = \sin\left(x + \frac{\pi}{2}\right)$, đồ thị hàm số $y = \cos x$ có được bằng cách **tịnh tiến đồ thị hàm số $y = \sin x$ sang phía bên trái một đoạn bằng $\frac{\pi}{2}$** dọc theo trục hoành $Ox$.

#### Bảng biến thiên trên đoạn $[-\pi; \pi]$:

| $x$ | $-\pi$ | | $0$ | | $\pi$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **$y = \cos x$** | $-1$ | $\nearrow$ | $1$ | $\searrow$ | $-1$ |

- **Khoảng đồng biến:** $(-\pi + k2\pi; k2\pi)$ với $k \in \mathbb{Z}$.
- **Khoảng nghịch biến:** $(k2\pi; \pi + k2\pi)$ với $k \in \mathbb{Z}$.
- **Các điểm đặc biệt:**
  - $\cos x = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$).
  - $\cos x = 1 \Leftrightarrow x = k2\pi$ ($k \in \mathbb{Z}$).
  - $\cos x = -1 \Leftrightarrow x = \pi + k2\pi$ ($k \in \mathbb{Z}$).

#### Đồ thị hàm số $y = \cos x$:

<div style="margin: 24px auto; max-width: 780px; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 760 260" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); font-family: system-ui, -apple-system, sans-serif;">
<defs>
<marker id="arrowX2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b"/>
</marker>
<marker id="arrowY2" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 1 8 L 5 0 L 9 8 z" fill="#64748b"/>
</marker>
</defs>
<rect x="0" y="0" width="760" height="260" fill="transparent"/>
<!-- Lưới tọa độ mờ -->
<line x1="60" y1="50" x2="720" y2="50" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="60" y1="210" x2="720" y2="210" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4,4"/>
<!-- Trục Ox và Oy -->
<line x1="40" y1="130" x2="730" y2="130" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrowX2)"/>
<line x1="380" y1="245" x2="380" y2="20" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrowY2)"/>
<text x="735" y="134" font-size="14" font-weight="bold" fill="#475569">x</text>
<text x="384" y="22" font-size="14" font-weight="bold" fill="#475569">y</text>
<text x="368" y="146" font-size="13" fill="#64748b">O</text>
<!-- Mốc Oy -->
<line x1="375" y1="50" x2="385" y2="50" stroke="#64748b" stroke-width="1.5"/>
<text x="360" y="55" font-size="13" font-weight="bold" fill="#0f172a">1</text>
<line x1="375" y1="210" x2="385" y2="210" stroke="#64748b" stroke-width="1.5"/>
<text x="354" y="215" font-size="13" font-weight="bold" fill="#0f172a">-1</text>
<!-- Mốc Ox -->
<line x1="80" y1="126" x2="80" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="65" y="148" font-size="12" fill="#475569">-2π</text>
<line x1="230" y1="126" x2="230" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="220" y="148" font-size="12" fill="#475569">-π</text>
<line x1="305" y1="126" x2="305" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="290" y="148" font-size="12" fill="#475569">-π/2</text>
<line x1="455" y1="126" x2="455" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="445" y="148" font-size="12" fill="#475569">π/2</text>
<line x1="530" y1="126" x2="530" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="525" y="148" font-size="12" fill="#475569">π</text>
<line x1="680" y1="126" x2="680" y2="134" stroke="#64748b" stroke-width="1.5"/>
<text x="670" y="148" font-size="12" fill="#475569">2π</text>
<!-- Đường cong y = cos x từ x = -2pi đến 2pi -->
<path d="M 80 50 C 117.5 55, 117.5 130, 155 130 C 192.5 130, 192.5 205, 230 210 C 267.5 215, 267.5 130, 305 130 C 342.5 130, 342.5 45, 380 50 C 417.5 45, 417.5 130, 455 130 C 492.5 130, 492.5 205, 530 210 C 567.5 215, 567.5 130, 605 130 C 642.5 130, 642.5 45, 680 50" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
<!-- Điểm cực trị và giao điểm -->
<circle cx="380" cy="50" r="4.5" fill="#10b981"/>
<circle cx="455" cy="130" r="4.5" fill="#64748b"/>
<circle cx="530" cy="210" r="4.5" fill="#ef4444"/>
<circle cx="605" cy="130" r="4.5" fill="#64748b"/>
<circle cx="680" cy="50" r="4.5" fill="#10b981"/>
<circle cx="305" cy="130" r="4.5" fill="#64748b"/>
<circle cx="230" cy="210" r="4.5" fill="#ef4444"/>
<circle cx="155" cy="130" r="4.5" fill="#64748b"/>
<circle cx="80" cy="50" r="4.5" fill="#10b981"/>
<!-- Nhãn chú thích -->
<rect x="580" y="30" width="140" height="32" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
<text x="590" y="51" font-size="13" font-weight="bold" fill="#047857">y = cos x (T = 2π)</text>
</svg>
<p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 3.2: Đồ thị hàm số $y = \cos x$ đối xứng qua trục tung $Oy$, đạt cực đại tại $x = 0, \pm 2\pi$.</em></p>
</div>

---

### 3. Hàm số $y = \tan x$

- **Tập xác định:** $D = \mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi, k \in \mathbb{Z}\right\}$.
- **Tập giá trị:** $TGT = \mathbb{R}$ (hàm số nhận mọi giá trị từ $-\infty$ đến $+\infty$).
- **Tính chẵn lẻ:** Vì với mọi $x \in D$, $-x \in D$ và $\tan(-x) = -\tan x$ nên $y = \tan x$ là **hàm số lẻ**. Đồ thị đối xứng qua gốc tọa độ $O(0; 0)$.
- **Tính tuần hoàn:** Tuần hoàn với chu kỳ cơ sở $T = \pi$: $\tan(x + \pi) = \tan x$.
- **Sự biến thiên:** Hàm số $y = \tan x$ **đồng biến trên mỗi khoảng** $\left(-\frac{\pi}{2} + k\pi; \frac{\pi}{2} + k\pi\right)$.
- **Tiệm cận:** Các đường thẳng đứng $x = \frac{\pi}{2} + k\pi$ là các đường tiệm cận đứng của đồ thị (đồ thị tiến sát vô cực nhưng không bao giờ chạm vào các đường này).

#### Đồ thị hàm số $y = \tan x$:

<div style="margin: 24px auto; max-width: 780px; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 760 260" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); font-family: system-ui, -apple-system, sans-serif;">
<defs>
<marker id="arrowX3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b"/>
</marker>
<marker id="arrowY3" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 1 8 L 5 0 L 9 8 z" fill="#64748b"/>
</marker>
</defs>
<rect x="0" y="0" width="760" height="260" fill="transparent"/>
<!-- Trục Ox và Oy -->
<line x1="40" y1="130" x2="730" y2="130" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrowX3)"/>
<line x1="380" y1="245" x2="380" y2="20" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrowY3)"/>
<text x="735" y="134" font-size="14" font-weight="bold" fill="#475569">x</text>
<text x="384" y="22" font-size="14" font-weight="bold" fill="#475569">y</text>
<text x="368" y="146" font-size="13" fill="#64748b">O</text>
<!-- Các đường tiệm cận đứng nét đứt đỏ: x = -3pi/2 (155), -pi/2 (305), pi/2 (455), 3pi/2 (605) -->
<line x1="155" y1="25" x2="155" y2="245" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="305" y1="25" x2="305" y2="245" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="455" y1="25" x2="455" y2="245" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="605" y1="25" x2="605" y2="245" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,4"/>
<!-- Nhãn tiệm cận -->
<text x="286" y="255" font-size="11" fill="#dc2626">-π/2</text>
<text x="444" y="255" font-size="11" fill="#dc2626">π/2</text>
<!-- Nhánh trung tâm x in (-pi/2; pi/2) đi qua O(380, 130) -->
<path d="M 315 240 Q 355 210, 370 160 Q 380 130, 390 100 Q 405 50, 445 20" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
<!-- Nhánh phải x in (pi/2; 3pi/2) đi qua (530, 130) -->
<path d="M 465 240 Q 505 210, 520 160 Q 530 130, 540 100 Q 555 50, 595 20" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
<!-- Nhánh trái x in (-3pi/2; -pi/2) đi qua (230, 130) -->
<path d="M 165 240 Q 205 210, 220 160 Q 230 130, 240 100 Q 255 50, 295 20" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
<circle cx="380" cy="130" r="4.5" fill="#d97706"/>
<circle cx="530" cy="130" r="4.5" fill="#d97706"/>
<text x="525" y="148" font-size="12" fill="#475569">π</text>
<circle cx="230" cy="130" r="4.5" fill="#d97706"/>
<text x="220" y="148" font-size="12" fill="#475569">-π</text>
<!-- Chú thích -->
<rect x="580" y="30" width="140" height="32" rx="6" fill="#fef3c7" stroke="#fde68a"/>
<text x="590" y="51" font-size="13" font-weight="bold" fill="#b45309">y = tan x (T = π)</text>
</svg>
<p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 3.3: Đồ thị hàm số tang $y = \tan x$ gồm các nhánh đồng biến bị giới hạn bởi các đường tiệm cận đứng màu đỏ.</em></p>
</div>

---

### 4. Hàm số $y = \cot x$

- **Tập xác định:** $D = \mathbb{R} \setminus \{k\pi, k \in \mathbb{Z}\}$.
- **Tập giá trị:** $TGT = \mathbb{R}$.
- **Tính chẵn lẻ:** Là **hàm số lẻ**, đồ thị đối xứng qua gốc tọa độ $O(0; 0)$.
- **Tính tuần hoàn:** Tuần hoàn với chu kỳ $T = \pi$: $\cot(x + \pi) = \cot x$.
- **Sự biến thiên:** Hàm số $y = \cot x$ **nghịch biến trên mỗi khoảng** $(k\pi; (k+1)\pi)$ với $k \in \mathbb{Z}$.
- **Tiệm cận:** Các đường thẳng đứng $x = k\pi$ ($k \in \mathbb{Z}$) là các đường tiệm cận đứng.

---

## III. Bảng so sánh tổng hợp 4 hàm số lượng giác

| Tiêu chí | $y = \sin x$ | $y = \cos x$ | $y = \tan x$ | $y = \cot x$ |
| :--- | :---: | :---: | :---: | :---: |
| **Tập xác định ($D$)** | $\mathbb{R}$ | $\mathbb{R}$ | $\mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi\right\}$ | $\mathbb{R} \setminus \{k\pi\}$ |
| **Tập giá trị** | $[-1; 1]$ | $[-1; 1]$ | $\mathbb{R}$ | $\mathbb{R}$ |
| **Tính chẵn / lẻ** | Hàm lẻ | **Hàm chẵn** | Hàm lẻ | Hàm lẻ |
| **Tâm / Trục đối xứng** | Tâm $O(0; 0)$ | **Trục $Oy$** | Tâm $O(0; 0)$ | Tâm $O(0; 0)$ |
| **Chu kỳ cơ sở ($T$)** | $2\pi$ | $2\pi$ | **$\pi$** | **$\pi$** |
| **Tính biến thiên** | Từng khoảng đb/nb | Từng khoảng đb/nb | **Luôn đồng biến** | **Luôn nghịch biến** |
| **Giao điểm trục tung** | $(0; 0)$ | $(0; 1)$ | $(0; 0)$ | Không có |

---

## IV. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Tìm tập xác định của hàm số lượng giác

> [!NOTE]
> **Quy tắc tìm điều kiện xác định:**
> 1. Hàm số chứa mẫu thức $\frac{A}{B}$: Điều kiện $B \neq 0$.
> 2. Hàm số chứa căn thức bậc chẵn $\sqrt{A}$: Điều kiện $A \ge 0$.
> 3. Hàm số chứa $\tan[u(x)]$: Điều kiện $u(x) \neq \frac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$).
> 4. Hàm số chứa $\cot[u(x)]$: Điều kiện $u(x) \neq k\pi$ ($k \in \mathbb{Z}$).

#### Ví dụ 1:
Tìm tập xác định của các hàm số sau:
a) $y = \frac{1}{\sin x - \cos x}$  
b) $y = \tan\left(2x - \frac{\pi}{3}\right)$  
c) $y = \sqrt{\frac{1 + \cos x}{1 - \cos x}}$

#### Lời giải chi tiết:
**a)** Hàm số xác định khi và chỉ khi mẫu thức khác $0$:
$$\sin x - \cos x \neq 0 \Leftrightarrow \sqrt{2}\sin\left(x - \frac{\pi}{4}\right) \neq 0 \Leftrightarrow x - \frac{\pi}{4} \neq k\pi \Leftrightarrow x \neq \frac{\pi}{4} + k\pi \; (k \in \mathbb{Z})$$
Vậy tập xác định là $D = \mathbb{R} \setminus \left\{\frac{\pi}{4} + k\pi, k \in \mathbb{Z}\right\}$.

**b)** Hàm số $y = \tan\left(2x - \frac{\pi}{3}\right)$ xác định khi:
$$2x - \frac{\pi}{3} \neq \frac{\pi}{2} + k\pi \Leftrightarrow 2x \neq \frac{5\pi}{6} + k\pi \Leftrightarrow x \neq \frac{5\pi}{12} + \frac{k\pi}{2} \; (k \in \mathbb{Z})$$
Vậy tập xác định là $D = \mathbb{R} \setminus \left\{\frac{5\pi}{12} + \frac{k\pi}{2}, k \in \mathbb{Z}\right\}$.

**c)** Biểu thức trong căn là phân thức:
$$\frac{1 + \cos x}{1 - \cos x} \ge 0 \quad \text{và} \quad 1 - \cos x \neq 0$$
Vì $-1 \le \cos x \le 1$ với mọi $x \in \mathbb{R}$ nên:
- Tử số $1 + \cos x \ge 0$ luôn đúng.
- Mẫu số $1 - \cos x \ge 0$ luôn đúng.
Do đó phân số luôn không âm. Biểu thức xác định khi mẫu thức khác $0$:
$$1 - \cos x \neq 0 \Leftrightarrow \cos x \neq 1 \Leftrightarrow x \neq k2\pi \; (k \in \mathbb{Z})$$
Vậy tập xác định là $D = \mathbb{R} \setminus \{k2\pi, k \in \mathbb{Z}\}$.

---

### Dạng 2: Xét tính chẵn, tính lẻ của hàm số

> [!NOTE]
> **Quy trình 2 bước chuẩn:**
> - **Bước 1 (Kiểm tra tập đối xứng):** Tìm tập xác định $D$. Kiểm tra xem với mọi $x \in D$ thì $-x \in D$ hay không. Nếu không, kết luận ngay hàm số không chẵn cũng không lẻ.
> - **Bước 2 (Kiểm tra quan hệ giá trị):** Tính $f(-x)$:
>   - Nếu $f(-x) = f(x)$ $\forall x \in D \Rightarrow f(x)$ là **hàm số chẵn**.
>   - Nếu $f(-x) = -f(x)$ $\forall x \in D \Rightarrow f(x)$ là **hàm số lẻ**.
>   - Nếu tồn tại $x_0$ sao cho $f(-x_0) \neq \pm f(x_0) \Rightarrow$ hàm số **không chẵn không lẻ**.

#### Ví dụ 2:
Xét tính chẵn lẻ của các hàm số sau:
a) $f(x) = x^3 \sin 2x$  
b) $g(x) = \frac{\tan x + \sin x}{\cos 2x}$  
c) $h(x) = \sin x + \cos x$

#### Lời giải chi tiết:
**a)** Tập xác định: $D = \mathbb{R}$ (là tập đối xứng).  
Với mọi $x \in \mathbb{R}$:
$$f(-x) = (-x)^3 \cdot \sin(2(-x)) = (-x^3) \cdot (-\sin 2x) = x^3 \sin 2x = f(x)$$
Vậy $f(x)$ là **hàm số chẵn**.

**b)** Điều kiện xác định: $\cos x \neq 0$ và $\cos 2x \neq 0 \Rightarrow D = \mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi, \frac{\pi}{4} + \frac{k\pi}{2}\right\}$ (đối xứng qua gốc $O$).  
Ta có:
$$g(-x) = \frac{\tan(-x) + \sin(-x)}{\cos(-2x)} = \frac{-\tan x - \sin x}{\cos 2x} = -\frac{\tan x + \sin x}{\cos 2x} = -g(x)$$
Vậy $g(x)$ là **hàm số lẻ**.

**c)** $D = \mathbb{R}$ (đối xứng).  
Ta có: $h(-x) = \sin(-x) + \cos(-x) = -\sin x + \cos x$.  
Nhận xét:
- Với $x = \frac{\pi}{4}$: $h\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = \sqrt{2}$.
- $h\left(-\frac{\pi}{4}\right) = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = 0$.  
Vì $0 \neq \sqrt{2}$ và $0 \neq -\sqrt{2}$ nên $h(-x) \neq h(x)$ và $h(-x) \neq -h(x)$.  
Vậy $h(x)$ là **hàm số không chẵn, không lẻ**.

---

### Dạng 3: Tìm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN)

> [!NOTE]
> **Các phương pháp phổ biến:**
> 1. **Đánh giá trực tiếp:** Dựa vào bất đẳng thức nền tảng:
>    $$-1 \le \sin u \le 1, \quad -1 \le \cos u \le 1, \quad 0 \le \sin^2 u \le 1, \quad 0 \le |\cos u| \le 1$$
> 2. **Đưa về bình phương hoàn chỉnh / Đặt ẩn phụ:** Biến đổi $y = a\sin^2 x + b\sin x + c$, đặt $t = \sin x$ với $t \in [-1; 1]$, sau đó khảo sát tam thức bậc hai $g(t) = at^2 + bt + c$ trên $[-1; 1]$.
> 3. **Phương pháp điều kiện có nghiệm của dạng $a\sin x + b\cos x = c$:**  
>    Tồn tại nghiệm $\Leftrightarrow c^2 \le a^2 + b^2 \Leftrightarrow -\sqrt{a^2+b^2} \le a\sin x + b\cos x \le \sqrt{a^2+b^2}$.

#### Ví dụ 3:
Tìm giá trị lớn nhất và nhỏ nhất của:
a) $y = 3\cos\left(2x - \frac{\pi}{4}\right) - 5$  
b) $y = 2\sin^2 x - \cos 2x + 1$  
c) $y = \sin x + \sqrt{3}\cos x + 2$

#### Lời giải chi tiết:
**a)** Với mọi $x \in \mathbb{R}$, ta có:
$$-1 \le \cos\left(2x - \frac{\pi}{4}\right) \le 1 \Leftrightarrow -3 \le 3\cos\left(2x - \frac{\pi}{4}\right) \le 3$$
Cộng cả ba vế với $-5$:
$$-8 \le y \le -2$$
- $y_{\max} = -2$, đạt được khi $\cos\left(2x - \frac{\pi}{4}\right) = 1 \Leftrightarrow 2x - \frac{\pi}{4} = k2\pi \Leftrightarrow x = \frac{\pi}{8} + k\pi$.
- $y_{\min} = -8$, đạt được khi $\cos\left(2x - \frac{\pi}{4}\right) = -1 \Leftrightarrow x = \frac{5\pi}{8} + k\pi$.

**b)** Áp dụng công thức nhân đôi $\cos 2x = 1 - 2\sin^2 x$:
$$y = 2\sin^2 x - (1 - 2\sin^2 x) + 1 = 4\sin^2 x$$
Vì $0 \le \sin^2 x \le 1 \Rightarrow 0 \le 4\sin^2 x \le 4$.
- $y_{\max} = 4$ khi $\sin^2 x = 1 \Leftrightarrow \cos x = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi$.
- $y_{\min} = 0$ khi $\sin x = 0 \Leftrightarrow x = k\pi$.

**c)** Biến đổi biểu thức dạng $a\sin x + b\cos x$:
$$y = 2\left(\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x\right) + 2 = 2\sin\left(x + \frac{\pi}{3}\right) + 2$$
Vì $-1 \le \sin\left(x + \frac{\pi}{3}\right) \le 1$ nên:
$$-2 + 2 \le y \le 2 + 2 \Leftrightarrow 0 \le y \le 4$$
Vậy $y_{\max} = 4$ và $y_{\min} = 0$.

---

### Dạng 4: Ứng dụng thực tế của Hàm số lượng giác

Trong thực tế, nhiều đại lượng biến thiên có tính chu kỳ được biểu diễn bởi hàm dạng sin:
$$y = A\sin(\omega t + \varphi) + B \quad \text{hoặc} \quad y = A\cos(\omega t + \varphi) + B$$
Trong đó:
- $|A|$ là **biên độ dao động** (bằng một nửa khoảng cách giữa giá trị lớn nhất và nhỏ nhất: $|A| = \frac{y_{\max} - y_{\min}}{2}$).
- $B$ là **đường cơ sở (mức cân bằng)**: $B = \frac{y_{\max} + y_{\min}}{2}$.
- $T = \frac{2\pi}{\omega}$ là **chu kỳ** hoàn thành một vòng lặp.
- $\omega = \frac{2\pi}{T}$ là **tần số góc**.
- $\varphi$ là **pha ban đầu**.

#### Bài toán thực tế 1: Mực nước thủy triều tại Cảng Hải Phòng
Độ sâu $h(t)$ (tính bằng mét) của mực nước tại luồng vào cảng tàu sau $t$ giờ tính từ lúc $0\text{h}$ sáng được cho bởi công thức:
$$h(t) = 3\cos\left(\frac{\pi t}{6}\right) + 9$$

a) Xác định mực nước cao nhất và thấp nhất trong ngày.  
b) Một tàu hàng trọng tải lớn có thể vào cảng an toàn khi độ sâu nước đạt tối thiểu $10.5\text{ m}$. Hỏi trong khoảng thời gian từ $0\text{h}$ đến $12\text{h}$, tàu có thể vào cảng trong những khoảng thời gian nào?

#### Lời giải chi tiết:
**a)** Vì $-1 \le \cos\left(\frac{\pi t}{6}\right) \le 1$ nên:
$$-3 + 9 \le h(t) \le 3 + 9 \Leftrightarrow 6\text{ m} \le h(t) \le 12\text{ m}$$
- Mực nước cao nhất là $12\text{ m}$ (khi $\cos = 1 \Leftrightarrow \frac{\pi t}{6} = 0 \Leftrightarrow t = 0\text{h}$).
- Mực nước thấp nhất là $6\text{ m}$ (khi $\cos = -1 \Leftrightarrow \frac{\pi t}{6} = \pi \Leftrightarrow t = 6\text{h}$).

**b)** Tàu vào an toàn khi $h(t) \ge 10.5$:
$$3\cos\left(\frac{\pi t}{6}\right) + 9 \ge 10.5 \Leftrightarrow 3\cos\left(\frac{\pi t}{6}\right) \ge 1.5 \Leftrightarrow \cos\left(\frac{\pi t}{6}\right) \ge \frac{1}{2}$$
Trong nửa chu kỳ đầu $t \in [0; 12]$, góc $\alpha = \frac{\pi t}{6} \in [0; 2\pi]$:
Ta có $\cos \alpha \ge \frac{1}{2}$ khi $\alpha \in \left[0; \frac{\pi}{3}\right]$ hoặc $\alpha \in \left[\frac{5\pi}{3}; 2\pi\right]$.
- Trường hợp 1: $0 \le \frac{\pi t}{6} \le \frac{\pi}{3} \Leftrightarrow 0 \le t \le 2$ (tức là từ $0\text{h}$ sáng đến $2\text{h}$ sáng).
- Trường hợp 2: $\frac{5\pi}{3} \le \frac{\pi t}{6} \le 2\pi \Leftrightarrow 10 \le t \le 12$ (tức là từ $10\text{h}$ sáng đến $12\text{h}$ trưa).

Vậy tàu hàng có thể vào cảng an toàn vào hai khung giờ: **$0\text{h} - 2\text{h}$** và **$10\text{h} - 12\text{h}$**.

---

## V. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Tập xác định của hàm số y = 1 / sin x là:",
  "options": [
    "A. D = R \\ {kπ, k ∈ Z}",
    "B. D = R \\ {π/2 + kπ, k ∈ Z}",
    "C. D = R \\ {k2π, k ∈ Z}",
    "D. D = [-1; 1]"
  ],
  "answer": "A. D = R \\ {kπ, k ∈ Z}",
  "explanation": "Mẫu số sin x ≠ 0 tương đương với x ≠ kπ với k ∈ Z."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Chu kỳ tuần hoàn cơ sở của hàm số y = cos 4x là:",
  "options": [
    "A. 2π",
    "B. 4π",
    "C. π/2",
    "D. π/4"
  ],
  "answer": "C. π/2",
  "explanation": "Chu kỳ của hàm số y = cos(ωx) là T = 2π / ω = 2π / 4 = π/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Trong các hàm số sau, hàm số nào là hàm số chẵn?",
  "options": [
    "A. y = sin x",
    "B. y = cos x",
    "C. y = tan x",
    "D. y = cot x"
  ],
  "answer": "B. y = cos x",
  "explanation": "cos(-x) = cos x nên y = cos x là hàm số chẵn. Đồ thị của nó đối xứng qua trục tung Oy. Ba hàm còn lại đều là hàm số lẻ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Giá trị lớn nhất (M) và giá trị nhỏ nhất (m) của hàm số y = 4 - 3sin x lần lượt là:",
  "options": [
    "A. M = 7, m = 1",
    "B. M = 4, m = -3",
    "C. M = 1, m = -7",
    "D. M = 7, m = -1"
  ],
  "answer": "A. M = 7, m = 1",
  "explanation": "Vì -1 ≤ sin x ≤ 1 nên -3 ≤ -3sin x ≤ 3. Cộng 4 vào các vế ta được 1 ≤ 4 - 3sin x ≤ 7. Vậy M = 7 (khi sin x = -1) và m = 1 (khi sin x = 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Tập xác định của hàm số y = tan(x - π/4) là:",
  "options": [
    "A. D = R \\ {π/4 + kπ, k ∈ Z}",
    "B. D = R \\ {3π/4 + kπ, k ∈ Z}",
    "C. D = R \\ {π/2 + kπ, k ∈ Z}",
    "D. D = R \\ {kπ, k ∈ Z}"
  ],
  "answer": "B. D = R \\ {3π/4 + kπ, k ∈ Z}",
  "explanation": "Hàm tan u xác định khi u ≠ π/2 + kπ. Ta có: x - π/4 ≠ π/2 + kπ ⇔ x ≠ 3π/4 + kπ (k ∈ Z)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Hàm số y = sin x đồng biến trên khoảng nào dưới đây?",
  "options": [
    "A. (0; π)",
    "B. (-π/2; π/2)",
    "C. (π/2; 3π/2)",
    "D. (π; 2π)"
  ],
  "answer": "B. (-π/2; π/2)",
  "explanation": "Hàm số y = sin x đồng biến trên mỗi khoảng (-π/2 + k2π; π/2 + k2π). Với k = 0, khoảng đồng biến là (-π/2; π/2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Đồ thị hàm số y = cos x có thể nhận được từ đồ thị hàm số y = sin x bằng cách:",
  "options": [
    "A. Tịnh tiến sang phải một đoạn π/2",
    "B. Tịnh tiến sang trái một đoạn π/2",
    "C. Tịnh tiến lên trên 1 đơn vị",
    "D. Lấy đối xứng qua trục hoành Ox"
  ],
  "answer": "B. Tịnh tiến sang trái một đoạn π/2",
  "explanation": "Do cos x = sin(x + π/2), theo phép tịnh tiến đồ thị hàm số, đồ thị y = sin(x + a) với a > 0 nhận được bằng cách tịnh tiến đồ thị y = sin x sang trái một đoạn bằng a. Ở đây a = π/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Chu kỳ tuần hoàn của hàm số y = tan(2x) + sin(3x) là:",
  "options": [
    "A. π",
    "B. 2π",
    "C. 2π/3",
    "D. 6π"
  ],
  "answer": "B. 2π",
  "explanation": "Chu kỳ của y = tan 2x là T1 = π/2. Chu kỳ của y = sin 3x là T2 = 2π/3. Chu kỳ chung T là BCNN(T1, T2) = BCNN(π/2, 2π/3) = 2π (vì 2π = 4 * (π/2) = 3 * (2π/3))."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hàm số f(x) = (sin x + tan x) / (x^2 + 1). Mệnh đề nào sau đây đúng?",
  "options": [
    "A. f(x) là hàm số chẵn",
    "B. f(x) là hàm số lẻ",
    "C. f(x) không chẵn không lẻ",
    "D. f(x) vừa chẵn vừa lẻ"
  ],
  "answer": "B. f(x) là hàm số lẻ",
  "explanation": "Tập xác định D = R \\ {π/2 + kπ} đối xứng qua O. Ta có f(-x) = [sin(-x) + tan(-x)] / [(-x)^2 + 1] = (-sin x - tan x) / (x^2 + 1) = -f(x). Do đó f(x) là hàm số lẻ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Giá trị lớn nhất của hàm số y = sin x + cos x là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. √2",
    "D. √3"
  ],
  "answer": "C. √2",
  "explanation": "Biến đổi sin x + cos x = √2 sin(x + π/4). Vì sin(x + π/4) ≤ 1 nên GTLN là √2, đạt được khi x = π/4 + k2π."
}'></div>

---

## VI. Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tìm tập xác định của các hàm số sau:**
   a) $y = \frac{2\cos x - 1}{\sin^2 x - 1}$  
   b) $y = \cot\left(3x + \frac{\pi}{6}\right)$  
   c) $y = \sqrt{\cos 2x + 1}$

2. **Xét tính chẵn, lẻ của các hàm số sau:**
   a) $y = x^2 \cos 3x$  
   b) $y = \frac{\sin 2x}{|x| - 1}$  
   c) $y = \tan x + \cot x$

3. **Tìm giá trị lớn nhất, giá trị nhỏ nhất của các hàm số sau:**
   a) $y = 3 - 2\sin^2\left(x - \frac{\pi}{6}\right)$  
   b) $y = \cos^2 x + 2\cos x - 3$ trên $\mathbb{R}$  
   c) $y = 3\sin x - 4\cos x + 5$

---

### Thử thách Thực tế: Vòng quay Mặt trời Sun Wheel
Vòng quay Mặt trời tại Đà Nẵng có đường kính khổng lồ $115\text{ m}$ và quay đều với chu kỳ $T = 15\text{ phút}$ (tức 1 vòng mất 15 phút). Cabin đón khách ở vị trí thấp nhất cách mặt đất $5\text{ m}$.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #3b82f6;">
<strong>Nhiệm vụ:</strong><br>
1. Giả sử cabin đón khách lúc thời điểm $t = 0$ (phút). Hãy thiết lập công thức hàm số $h(t)$ biểu thị độ cao của cabin so với mặt đất theo thời gian $t$.<br>
2. Sau khi quay được $3.75\text{ phút}$, cabin đang ở độ cao bao nhiêu mét so với mặt đất?<br>
3. Trong một chu kỳ quay 15 phút, khoảng thời gian mà cabin ở độ cao trên $90\text{ m}$ so với mặt đất là bao lâu?
</div>

> [!TIP]
> **Hướng dẫn giải:**
> 1. Bán kính vòng quay là $R = \frac{115}{2} = 57.5\text{ m}$. Tâm của vòng quay cách mặt đất: $H_0 = 5 + 57.5 = 62.5\text{ m}$.  
>    Tần số góc $\omega = \frac{2\pi}{T} = \frac{2\pi}{15}\text{ (rad/phút)}$.  
>    Tại $t = 0$, cabin ở đáy thấp nhất $h(0) = 5\text{ m}$, nên hàm số có dạng:
>    $$h(t) = -57.5\cos\left(\frac{2\pi}{15}t\right) + 62.5 \quad (\text{đơn vị: mét})$$
> 2. Tại $t = 3.75\text{ phút} = \frac{15}{4}\text{ phút}$, góc quay là $\frac{2\pi}{15} \cdot \frac{15}{4} = \frac{\pi}{2}$.  
>    $\cos\left(\frac{\pi}{2}\right) = 0 \Rightarrow h(3.75) = 62.5\text{ m}$ (ngang độ cao tâm trục quay).
> 3. Độ cao $h(t) > 90\text{ m}$:
>    $$-57.5\cos\left(\frac{2\pi}{15}t\right) + 62.5 > 90 \Leftrightarrow -57.5\cos\left(\frac{2\pi}{15}t\right) > 27.5 \Leftrightarrow \cos\left(\frac{2\pi}{15}t\right) < -\frac{27.5}{57.5} \approx -0.478$$
>    Ta có $\arccos(-0.478) \approx 2.069\text{ rad}$.  
>    Do tính đối xứng, góc quay thỏa mãn nằm trong khoảng $(2.069; 2\pi - 2.069) = (2.069; 4.214)$.  
>    Thời gian tương ứng: $\Delta t = \frac{\Delta \alpha}{\omega} = \frac{2(\pi - 2.069)}{\frac{2\pi}{15}} \approx 5.12\text{ phút}$ (khoảng 5 phút 7 giây du khách được ngắm toàn cảnh thành phố trên độ cao 90m!).
