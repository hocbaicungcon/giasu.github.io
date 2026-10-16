---
title: 'Toán 11 Bài 4: Phương trình lượng giác cơ bản - Phương pháp giải và bài tập trọng tâm'
description: 'Lý thuyết trọng tâm Bài 4 Toán 11: Phương trình sin x = m, cos x = m, tan x = m, cot x = m; điều kiện có nghiệm, công thức nghiệm theo radian và độ, các trường hợp đặc biệt, phương pháp chặn nghiệm trên khoảng và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Lượng giác 11
  - Phương trình lượng giác
  - Phương trình lượng giác cơ bản
  - sin x = m
  - cos x = m
  - Kết nối tri thức
grade: 11
---

# Bài 4. Phương trình lượng giác cơ bản

Chào mừng các em đến với bài học trọng tâm tiếp theo của chương trình **Toán 11**!

Trong [Bài 3: Hàm số lượng giác](toan-11-bai-3-ham-so-luong-giac.html), chúng ta đã biết đồ thị hình sin lượn sóng tuần hoàn vô tận và mô tả các dao động trong tự nhiên. Tuy nhiên, trong kỹ thuật và đời sống, ta thường xuyên phải trả lời các câu hỏi ngược lại:
- Vào **thời điểm nào** trong ngày thì mực nước triều dâng lên đúng độ cao $10.5\text{ m}$ để tàu thuyền cập cảng?
- Tại **những góc quay nào** thì cánh tay robot công nghiệp gắp trúng vị trí linh kiện trên băng chuyền?
- Trong mạch điện xoay chiều $i = I_0 \cos(100\pi t)$, tại **thời điểm nào** cường độ dòng điện tức thời đạt giá trị hiệu dụng?

Để tìm ra các thời điểm và góc quay chính xác đó, chúng ta cần giải **Phương trình lượng giác**. Bài học này sẽ trang bị cho các em toàn bộ nền tảng, công thức nghiệm chuẩn xác và các phương pháp giải tối ưu nhất!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: 4 PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương trình $\sin x = m$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Có nghiệm $\Leftrightarrow |m| \le 1$.<br>• $\sin x = \sin \alpha \Leftrightarrow \left[\begin{matrix} x = \alpha + k2\pi \\ x = \pi - \alpha + k2\pi \end{matrix}\right.$ ($k \in \mathbb{Z}$).<br>• Đuôi chu kỳ: $+ k2\pi$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Phương trình $\cos x = m$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Có nghiệm $\Leftrightarrow |m| \le 1$.<br>• $\cos x = \cos \alpha \Leftrightarrow x = \pm \alpha + k2\pi$ ($k \in \mathbb{Z}$).<br>• Hai nghiệm đối nhau qua trục hoành.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương trình $\tan x = m$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Luôn có nghiệm với <strong>mọi $m \in \mathbb{R}$</strong>.<br>• $\tan x = \tan \alpha \Leftrightarrow x = \alpha + k\pi$ ($k \in \mathbb{Z}$).<br>• Đuôi chu kỳ chỉ là $+ k\pi$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Phương trình $\cot x = m$</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Luôn có nghiệm với <strong>mọi $m \in \mathbb{R}$</strong>.<br>• $\cot x = \cot \alpha \Leftrightarrow x = \alpha + k\pi$ ($k \in \mathbb{Z}$).<br>• Đuôi chu kỳ chỉ là $+ k\pi$.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Điều kiện có nghiệm:** Phương trình $\sin x = 1.5$ có bao nhiêu nghiệm thực?
2. **Nghiệm đối:** Nếu biết $\cos x = \frac{1}{2}$ có một nghiệm là $x = \frac{\pi}{3}$, hãy nêu ngay một nghiệm khác đối xứng với nó.
3. **Chu kỳ nghiệm:** Tại sao nghiệm của phương trình $\sin x = m$ và $\cos x = m$ lại có đuôi $+ k2\pi$, còn $\tan x = m$ và $\cot x = m$ chỉ có đuôi $+ k\pi$?
4. **Nghiệm bằng 0:** Phương trình $\sin x = 0$ có nghiệm là $x = k2\pi$ hay $x = k\pi$?
5. **Đơn vị đo:** Nếu đề bài cho $\sin x = \sin 30^\circ$, công thức nghiệm viết theo độ là gì?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Vô nghiệm! Vì $-1 \le \sin x \le 1$, số $1.5 > 1$ nên phương trình không thể có nghiệm thực.
> 2. Nghiệm $x = -\frac{\pi}{3}$ (vì hàm cosin là hàm chẵn: $\cos(-x) = \cos x$).
> 3. Vì hàm số $\sin$ và $\cos$ tuần hoàn với chu kỳ $2\pi$, còn hàm số $\tan$ và $\cot$ tuần hoàn với chu kỳ $\pi$.
> 4. Nghiệm là $x = k\pi$ ($k \in \mathbb{Z}$), vì trên đường tròn lượng giác có 2 điểm đối xứng qua gốc $O$ làm cho $\sin = 0$ (tại $0$ và $\pi$).
> 5. Viết theo đơn vị độ: $x = 30^\circ + k360^\circ$ hoặc $x = 180^\circ - 30^\circ + k360^\circ = 150^\circ + k360^\circ$ ($k \in \mathbb{Z}$).

---

## I. Phương trình $\sin x = m$

### 1. Điều kiện có nghiệm và công thức nghiệm tổng quát

- Nếu $|m| > 1$: Phương trình **vô nghiệm**.
- Nếu $|m| \le 1$: Luôn tồn tại duy nhất một góc $\alpha \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right]$ sao cho $\sin \alpha = m$. Khi đó:
  $$\sin x = m \Leftrightarrow \sin x = \sin \alpha \Leftrightarrow \left[\begin{matrix} x = \alpha + k2\pi \\ x = \pi - \alpha + k2\pi \end{matrix}\right. \quad (k \in \mathbb{Z})$$

> [!NOTE]
> **Giải thích hình học trên đường tròn lượng giác:**  
> Giá trị $\sin x$ là tung độ của điểm biểu diễn trên đường tròn đơn vị. Đường thẳng nằm ngang $y = m$ cắt đường tròn tại hai điểm đối xứng nhau qua trục tung $Oy$: một điểm ứng với góc $\alpha$, và điểm kia ứng với góc bù $\pi - \alpha$.

<div style="margin: 20px auto; max-width: 500px; text-align: center;">
<svg data-interactive-done="true" viewBox="0 0 400 320" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; font-family: system-ui, sans-serif;">
<defs>
<marker id="arr1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b"/>
</marker>
</defs>
<!-- Trục tọa độ -->
<line x1="30" y1="160" x2="370" y2="160" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr1)"/>
<line x1="200" y1="300" x2="200" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr1)"/>
<text x="375" y="164" font-size="13" fill="#475569">x (cos)</text>
<text x="205" y="24" font-size="13" fill="#475569">y (sin)</text>
<text x="186" y="176" font-size="13" fill="#64748b">O</text>
<!-- Đường tròn đơn vị R = 110 -->
<circle cx="200" cy="160" r="110" fill="none" stroke="#cbd5e1" stroke-width="2"/>
<!-- Đường nằm ngang y = m (m = 0.5 -> y = 160 - 55 = 105) -->
<line x1="50" y1="105" x2="350" y2="105" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
<text x="310" y="98" font-size="12" font-weight="bold" fill="#ef4444">y = m</text>
<!-- Hai điểm nghiệm M1(alpha) và M2(pi - alpha) -->
<!-- alpha = 30 deg: cos = 110 * sqrt(3)/2 = 95.26, sin = 55 -->
<circle cx="295" cy="105" r="5" fill="#2563eb"/>
<text x="305" y="105" font-size="13" font-weight="bold" fill="#2563eb">M₁(α)</text>
<circle cx="105" cy="105" r="5" fill="#2563eb"/>
<text x="35" y="105" font-size="13" font-weight="bold" fill="#2563eb">M₂(π - α)</text>
<!-- Bán kính nối O đến M1 và M2 -->
<line x1="200" y1="160" x2="295" y2="105" stroke="#2563eb" stroke-width="1.5"/>
<line x1="200" y1="160" x2="105" y2="105" stroke="#2563eb" stroke-width="1.5"/>
<!-- Cung góc alpha -->
<path d="M 240 160 A 40 40 0 0 0 235 140" fill="none" stroke="#2563eb" stroke-width="1.5"/>
<text x="245" y="145" font-size="12" fill="#2563eb">α</text>
</svg>
<p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 6px;"><em>Hình 4.1: Biểu diễn nghiệm của phương trình $\sin x = m$ trên đường tròn lượng giác với hai họ nghiệm $\alpha$ và $\pi - \alpha$.</em></p>
</div>

### 2. Ký hiệu $\arcsin$ (Đọc là "Ác-sin")

Khi số $m$ không phải là giá trị lượng giác của các góc quen thuộc ($30^\circ, 45^\circ, 60^\circ, \dots$), ta dùng ký hiệu **$\arcsin m$** (nghĩa là *cung có sin bằng $m$*):
$$\sin x = m \Leftrightarrow \left[\begin{matrix} x = \arcsin m + k2\pi \\ x = \pi - \arcsin m + k2\pi \end{matrix}\right. \quad (k \in \mathbb{Z})$$

### 3. Các trường hợp đặc biệt cần ghi nhớ

Khi vế phải $m \in \{0; 1; -1\}$, hai họ nghiệm gộp lại thành **một họ nghiệm duy nhất**:
- $\sin x = 0 \Leftrightarrow x = k\pi \quad (k \in \mathbb{Z})$
- $\sin x = 1 \Leftrightarrow x = \frac{\pi}{2} + k2\pi \quad (k \in \mathbb{Z})$
- $\sin x = -1 \Leftrightarrow x = -\frac{\pi}{2} + k2\pi \quad (k \in \mathbb{Z})$

---

## II. Phương trình $\cos x = m$

### 1. Điều kiện có nghiệm và công thức nghiệm tổng quát

- Nếu $|m| > 1$: Phương trình **vô nghiệm**.
- Nếu $|m| \le 1$: Tồn tại duy nhất một góc $\alpha \in [0; \pi]$ sao cho $\cos \alpha = m$. Khi đó:
  $$\cos x = m \Leftrightarrow \cos x = \cos \alpha \Leftrightarrow x = \pm \alpha + k2\pi \quad (k \in \mathbb{Z})$$

### 2. Ký hiệu $\arccos$ (Đọc là "Ác-cô-sin")

Nếu $m \in [-1; 1]$ không rơi vào các giá trị đặc biệt, ta viết:
$$\cos x = m \Leftrightarrow x = \pm \arccos m + k2\pi \quad (k \in \mathbb{Z})$$

### 3. Các trường hợp đặc biệt

- $\cos x = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi \quad (k \in \mathbb{Z})$
- $\cos x = 1 \Leftrightarrow x = k2\pi \quad (k \in \mathbb{Z})$
- $\cos x = -1 \Leftrightarrow x = \pi + k2\pi \quad (k \in \mathbb{Z})$

---

## III. Phương trình $\tan x = m$ và $\cot x = m$

### 1. Phương trình $\tan x = m$
- Phương trình **luôn có nghiệm với mọi số thực $m \in \mathbb{R}$**.
- Tồn tại góc $\alpha \in \left(-\frac{\pi}{2}; \frac{\pi}{2}\right)$ sao cho $\tan \alpha = m$.
$$\tan x = m \Leftrightarrow \tan x = \tan \alpha \Leftrightarrow x = \alpha + k\pi \quad (k \in \mathbb{Z})$$
- Trường hợp không đặc biệt: $x = \arctan m + k\pi$ ($k \in \mathbb{Z}$).
- Đặc biệt: $\tan x = 0 \Leftrightarrow x = k\pi$ ($k \in \mathbb{Z}$).

### 2. Phương trình $\cot x = m$
- Phương trình **luôn có nghiệm với mọi số thực $m \in \mathbb{R}$**.
- Tồn tại góc $\alpha \in (0; \pi)$ sao cho $\cot \alpha = m$.
$$\cot x = m \Leftrightarrow \cot x = \cot \alpha \Leftrightarrow x = \alpha + k\pi \quad (k \in \mathbb{Z})$$
- Trường hợp không đặc biệt: $x = \text{arccot } m + k\pi$ ($k \in \mathbb{Z}$).
- Đặc biệt: $\cot x = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$).

> [!WARNING]
> **LỖI SAI KINH ĐIỂN CẦN TRÁNH:**
> 1. **Nhầm đuôi chu kỳ:** Phương trình $\sin$ và $\cos$ có chu kỳ nghiệm là $+ k2\pi$. Nhưng phương trình $\tan$ và $\cot$ chu kỳ nghiệm chỉ là **$+ k\pi$**!
> 2. **Quên điều kiện xác định:** Khi giải phương trình chứa $\tan u(x)$ phải đặt $u(x) \neq \frac{\pi}{2} + k\pi$, chứa $\cot u(x)$ phải đặt $u(x) \neq k\pi$.
> 3. **Trộn lẫn đơn vị:** Tuyệt đối không viết lẫn lộn radian và độ trong cùng một công thức, ví dụ: $x = \frac{\pi}{3} + k360^\circ$ (SAI) $\rightarrow$ phải viết $x = \frac{\pi}{3} + k2\pi$ hoặc $x = 60^\circ + k360^\circ$ (ĐÚNG).

---

## IV. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Giải phương trình lượng giác cơ bản mở rộng $f(u(x)) = f(v(x))$

> [!NOTE]
> **Công thức áp dụng:**
> - $\sin u(x) = \sin v(x) \Leftrightarrow \left[\begin{matrix} u(x) = v(x) + k2\pi \\ u(x) = \pi - v(x) + k2\pi \end{matrix}\right.$
> - $\cos u(x) = \cos v(x) \Leftrightarrow u(x) = \pm v(x) + k2\pi$
> - $\tan u(x) = \tan v(x) \Leftrightarrow u(x) = v(x) + k\pi$ (kèm điều kiện xác định)

#### Ví dụ 1:
Giải các phương trình sau:
a) $\sin\left(2x - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$  
b) $\cos\left(3x + \frac{\pi}{4}\right) = -\frac{\sqrt{2}}{2}$  
c) $\tan(2x - 10^\circ) = \sqrt{3}$

#### Lời giải chi tiết:
**a)** Vì $\frac{\sqrt{3}}{2} = \sin\frac{\pi}{3}$, phương trình trở thành:
$$\sin\left(2x - \frac{\pi}{3}\right) = \sin\frac{\pi}{3} \Leftrightarrow \left[\begin{matrix} 2x - \frac{\pi}{3} = \frac{\pi}{3} + k2\pi \\ 2x - \frac{\pi}{3} = \pi - \frac{\pi}{3} + k2\pi \end{matrix}\right. \Leftrightarrow \left[\begin{matrix} 2x = \frac{2\pi}{3} + k2\pi \\ 2x = \pi + k2\pi \end{matrix}\right. \Leftrightarrow \left[\begin{matrix} x = \frac{\pi}{3} + k\pi \\ x = \frac{\pi}{2} + k\pi \end{matrix}\right. (k \in \mathbb{Z})$$

**b)** Vì $-\frac{\sqrt{2}}{2} = \cos\frac{3\pi}{4}$, phương trình trở thành:
$$\cos\left(3x + \frac{\pi}{4}\right) = \cos\frac{3\pi}{4} \Leftrightarrow 3x + \frac{\pi}{4} = \pm \frac{3\pi}{4} + k2\pi$$
- Với dấu $+$: $3x = \frac{3\pi}{4} - \frac{\pi}{4} + k2\pi = \frac{\pi}{2} + k2\pi \Leftrightarrow x = \frac{\pi}{6} + \frac{k2\pi}{3}$.
- Với dấu $-$: $3x = -\frac{3\pi}{4} - \frac{\pi}{4} + k2\pi = -\pi + k2\pi \Leftrightarrow x = -\frac{\pi}{3} + \frac{k2\pi}{3}$.  
Vậy nghiệm của phương trình là $x = \frac{\pi}{6} + \frac{k2\pi}{3}$ hoặc $x = -\frac{\pi}{3} + \frac{k2\pi}{3}$ ($k \in \mathbb{Z}$).

**c)** Vì $\sqrt{3} = \tan 60^\circ$ và phương trình cho theo độ:
$$\tan(2x - 10^\circ) = \tan 60^\circ \Leftrightarrow 2x - 10^\circ = 60^\circ + k180^\circ \Leftrightarrow 2x = 70^\circ + k180^\circ \Leftrightarrow x = 35^\circ + k90^\circ \; (k \in \mathbb{Z})$$

---

### Dạng 2: Tìm số nghiệm hoặc các nghiệm thuộc khoảng, đoạn $[a; b]$

> [!NOTE]
> **Phương pháp chặn nghiệm nguyên $k$:**
> 1. Giải phương trình tìm họ nghiệm tổng quát dưới dạng $x = x_0 + k \cdot \Delta$.
> 2. Cho $a \le x \le b \Leftrightarrow a \le x_0 + k \cdot \Delta \le b$.
> 3. Cô lập $k$: $k_1 \le k \le k_2$. Do $k \in \mathbb{Z}$, liệt kê các giá trị nguyên của $k$.
> 4. Thay từng giá trị $k$ vừa tìm được vào công thức nghiệm để nhận các nghiệm cụ thể tương ứng.

#### Ví dụ 2:
Tìm tất cả các nghiệm của phương trình $\sin\left(x + \frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$ thuộc đoạn $[0; 2\pi]$.

#### Lời giải chi tiết:
Ta có $\frac{\sqrt{2}}{2} = \sin\frac{\pi}{4}$, do đó:
$$\sin\left(x + \frac{\pi}{4}\right) = \sin\frac{\pi}{4} \Leftrightarrow \left[\begin{matrix} x + \frac{\pi}{4} = \frac{\pi}{4} + k2\pi \\ x + \frac{\pi}{4} = \pi - \frac{\pi}{4} + k2\pi \end{matrix}\right. \Leftrightarrow \left[\begin{matrix} x = k2\pi \\ x = \frac{\pi}{2} + k2\pi \end{matrix}\right. (k \in \mathbb{Z})$$

**Xét họ nghiệm 1:** $x = k2\pi$ thuộc $[0; 2\pi]$:
$$0 \le k2\pi \le 2\pi \Leftrightarrow 0 \le k \le 1$$
Vì $k \in \mathbb{Z} \Rightarrow k \in \{0; 1\}$.
- Với $k = 0 \Rightarrow x_1 = 0$.
- Với $k = 1 \Rightarrow x_2 = 2\pi$.

**Xét họ nghiệm 2:** $x = \frac{\pi}{2} + k2\pi$ thuộc $[0; 2\pi]$:
$$0 \le \frac{\pi}{2} + k2\pi \le 2\pi \Leftrightarrow -\frac{1}{2} \le 2k \le \frac{3}{2} \Leftrightarrow -\frac{1}{4} \le k \le \frac{3}{4}$$
Vì $k \in \mathbb{Z} \Rightarrow k = 0$.
- Với $k = 0 \Rightarrow x_3 = \frac{\pi}{2}$.

Vậy phương trình có 3 nghiệm thuộc đoạn $[0; 2\pi]$ là: $x \in \left\{0; \frac{\pi}{2}; 2\pi\right\}$.

---

### Dạng 3: Phương trình bậc nhất đối với $\sin$ và $\cos$: $a\sin x + b\cos x = c$

> [!NOTE]
> **Điều kiện có nghiệm và cách giải:**
> - Phương trình có nghiệm $\Leftrightarrow a^2 + b^2 \ge c^2$.
> - Cách giải: Chia cả hai vế cho $\sqrt{a^2 + b^2}$:
>   $$\frac{a}{\sqrt{a^2 + b^2}}\sin x + \frac{b}{\sqrt{a^2 + b^2}}\cos x = \frac{c}{\sqrt{a^2 + b^2}}$$
>   Đặt $\cos \alpha = \frac{a}{\sqrt{a^2+b^2}}$ và $\sin \alpha = \frac{b}{\sqrt{a^2+b^2}}$, phương trình trở thành:
>   $$\sin(x + \alpha) = \frac{c}{\sqrt{a^2 + b^2}}$$
>   (Đưa về đúng dạng phương trình lượng giác cơ bản đã biết).

#### Ví dụ 3:
Giải phương trình: $\sqrt{3}\sin x - \cos x = \sqrt{2}$.

#### Lời giải chi tiết:
Ta có $a = \sqrt{3}, b = -1, c = \sqrt{2}$.  
Kiểm tra điều kiện có nghiệm: $a^2 + b^2 = (\sqrt{3})^2 + (-1)^2 = 4 \ge c^2 = (\sqrt{2})^2 = 2$ (thỏa mãn).  
Chia cả hai vế của phương trình cho $\sqrt{a^2 + b^2} = \sqrt{4} = 2$:
$$\frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x = \frac{\sqrt{2}}{2}$$
Vì $\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$ và $\sin\frac{\pi}{6} = \frac{1}{2}$, ta viết lại:
$$\sin x \cos\frac{\pi}{6} - \cos x \sin\frac{\pi}{6} = \frac{\sqrt{2}}{2} \Leftrightarrow \sin\left(x - \frac{\pi}{6}\right) = \sin\frac{\pi}{4}$$
$$\Leftrightarrow \left[\begin{matrix} x - \frac{\pi}{6} = \frac{\pi}{4} + k2\pi \\ x - \frac{\pi}{6} = \pi - \frac{\pi}{4} + k2\pi \end{matrix}\right. \Leftrightarrow \left[\begin{matrix} x = \frac{5\pi}{12} + k2\pi \\ x = \frac{11\pi}{12} + k2\pi \end{matrix}\right. \quad (k \in \mathbb{Z})$$

---

### Dạng 4: Ứng dụng thực tế: Chuyển động cơ học và Dao động điện từ

#### Bài toán thực tế:
Một thanh chắn đường tàu hỏa tự động hạ xuống và nâng lên nhờ động cơ quay. Độ cao $h(t)$ (mét) của đầu thanh chắn so với mặt đất tại thời điểm $t$ giây ($0 \le t \le 10$) được mô tả bởi phương trình:
$$h(t) = 1.5 - 1.2\cos\left(\frac{\pi t}{5}\right)$$

a) Thanh chắn ở vị trí thấp nhất khi nào và độ cao khi đó là bao nhiêu mét?  
b) Một xe tải mui cao $2.1\text{ m}$ muốn đi qua thanh chắn an toàn cần độ cao thanh chắn tối thiểu $2.1\text{ m}$. Hỏi trong khoảng thời gian từ $t = 0\text{ s}$ đến $t = 10\text{ s}$, tại những thời điểm nào đầu thanh chắn đạt đúng độ cao $2.1\text{ m}$?

#### Lời giải chi tiết:
**a)** Vì $-1 \le \cos\left(\frac{\pi t}{5}\right) \le 1$:
$$-1.2 \le -1.2\cos\left(\frac{\pi t}{5}\right) \le 1.2 \Rightarrow 1.5 - 1.2 \le h(t) \le 1.5 + 1.2 \Leftrightarrow 0.3\text{ m} \le h(t) \le 2.7\text{ m}$$
Thanh chắn ở vị trí thấp nhất $h_{\min} = 0.3\text{ m}$ khi:
$$\cos\left(\frac{\pi t}{5}\right) = 1 \Leftrightarrow \frac{\pi t}{5} = k2\pi \Leftrightarrow t = 10k$$
Với $t \in [0; 10]$, chọn $k = 0 \Rightarrow t = 0\text{ s}$ và $k = 1 \Rightarrow t = 10\text{ s}$.

**b)** Thanh chắn đạt độ cao $2.1\text{ m}$ khi:
$$1.5 - 1.2\cos\left(\frac{\pi t}{5}\right) = 2.1 \Leftrightarrow -1.2\cos\left(\frac{\pi t}{5}\right) = 0.6 \Leftrightarrow \cos\left(\frac{\pi t}{5}\right) = -\frac{1}{2}$$
Vì $-\frac{1}{2} = \cos\frac{2\pi}{3}$, ta có:
$$\frac{\pi t}{5} = \pm \frac{2\pi}{3} + k2\pi \Leftrightarrow t = \pm \frac{10}{3} + 10k \; (k \in \mathbb{Z})$$
Xét khoảng thời gian $0 \le t \le 10$:
- Với họ $t = \frac{10}{3} + 10k$: chọn $k = 0 \Rightarrow t = \frac{10}{3} \approx 3.33\text{ s}$.
- Với họ $t = -\frac{10}{3} + 10k$: chọn $k = 1 \Rightarrow t = \frac{20}{3} \approx 6.67\text{ s}$.

Vậy tại hai thời điểm **$t = 3.33\text{ giây}$** (lúc đang nâng lên) và **$t = 6.67\text{ giây}$** (lúc đang hạ xuống), thanh chắn đạt đúng độ cao $2.1\text{ m}$.

---

## V. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phương trình sin x = 1/2 có nghiệm là:",
  "options": [
    "A. x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ Z)",
    "B. x = π/3 + k2π hoặc x = 2π/3 + k2π (k ∈ Z)",
    "C. x = ±π/6 + k2π (k ∈ Z)",
    "D. x = π/6 + kπ hoặc x = 5π/6 + kπ (k ∈ Z)"
  ],
  "answer": "A. x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ Z)",
  "explanation": "Do sin(π/6) = 1/2, theo công thức nghiệm sin x = sin α: x = α + k2π hoặc x = π - α + k2π = 5π/6 + k2π."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nghiệm của phương trình cos x = 0 là:",
  "options": [
    "A. x = k2π (k ∈ Z)",
    "B. x = π/2 + kπ (k ∈ Z)",
    "C. x = π + k2π (k ∈ Z)",
    "D. x = kπ (k ∈ Z)"
  ],
  "answer": "B. x = π/2 + kπ (k ∈ Z)",
  "explanation": "Trên đường tròn đơn vị, cos x = 0 tại hai điểm cực bắc và cực nam: x = π/2 + kπ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Phương trình nào sau đây VÔ NGHIỆM?",
  "options": [
    "A. cos 2x = -0.99",
    "B. tan x = 2026",
    "C. sin x = √3",
    "D. cot(3x) = -1"
  ],
  "answer": "C. sin x = √3",
  "explanation": "Vì √3 ≈ 1.732 > 1 nên vượt quá tập giá trị [-1; 1] của hàm sin, do đó phương trình vô nghiệm. Còn hàm tan và cot có tập giá trị là R nên nhận mọi giá trị thực."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Nghiệm của phương trình tan x = 1 là:",
  "options": [
    "A. x = π/4 + k2π (k ∈ Z)",
    "B. x = π/4 + kπ (k ∈ Z)",
    "C. x = -π/4 + kπ (k ∈ Z)",
    "D. x = ±π/4 + k2π (k ∈ Z)"
  ],
  "answer": "B. x = π/4 + kπ (k ∈ Z)",
  "explanation": "Do tan(π/4) = 1 và hàm tan tuần hoàn với chu kỳ π nên nghiệm là x = π/4 + kπ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Phương trình sin x = 0 có bao nhiêu nghiệm thuộc đoạn [0; 3π]?",
  "options": [
    "A. 2 nghiệm",
    "B. 3 nghiệm",
    "C. 4 nghiệm",
    "D. 5 nghiệm"
  ],
  "answer": "C. 4 nghiệm",
  "explanation": "sin x = 0 ⇔ x = kπ. Với 0 ≤ kπ ≤ 3π ⇔ 0 ≤ k ≤ 3. Do k ∈ Z nên k ∈ {0; 1; 2; 3}, tương ứng với 4 nghiệm: 0, π, 2π, 3π."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Điều kiện để phương trình a·sin x + b·cos x = c có nghiệm là:",
  "options": [
    "A. a^2 + b^2 < c^2",
    "B. a^2 + b^2 ≥ c^2",
    "C. a + b ≥ c",
    "D. a^2 + b^2 ≤ c^2"
  ],
  "answer": "B. a^2 + b^2 ≥ c^2",
  "explanation": "Biến đổi vế trái về dạng √(a^2 + b^2)·sin(x + α), vì |sin| ≤ 1 nên điều kiện có nghiệm là |c| / √(a^2 + b^2) ≤ 1 ⇔ a^2 + b^2 ≥ c^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tổng tất cả các nghiệm của phương trình cos(2x - π/3) = 1 trong khoảng (0; 2π) là:",
  "options": [
    "A. 4π/3",
    "B. 5π/3",
    "C. 7π/3",
    "D. 8π/3"
  ],
  "answer": "A. 4π/3",
  "explanation": "cos u = 1 ⇔ u = k2π ⇒ 2x - π/3 = k2π ⇔ x = π/6 + kπ. Trong (0; 2π): với k = 0 được x1 = π/6; với k = 1 được x2 = 7π/6. Tổng hai nghiệm = π/6 + 7π/6 = 8π/6 = 4π/3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Phương trình sin x = cos x có nghiệm là:",
  "options": [
    "A. x = π/4 + kπ (k ∈ Z)",
    "B. x = π/4 + k2π (k ∈ Z)",
    "C. x = -π/4 + kπ (k ∈ Z)",
    "D. x = 3π/4 + kπ (k ∈ Z)"
  ],
  "answer": "A. x = π/4 + kπ (k ∈ Z)",
  "explanation": "Vì cos x = 0 không thỏa mãn phương trình, chia cả hai vế cho cos x ta được tan x = 1 ⇔ x = π/4 + kπ (k ∈ Z)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Nghiệm của phương trình 2cos^2 x - cos x - 1 = 0 là:",
  "options": [
    "A. x = k2π hoặc x = ±2π/3 + k2π (k ∈ Z)",
    "B. x = kπ hoặc x = ±π/3 + k2π (k ∈ Z)",
    "C. x = k2π hoặc x = ±π/3 + k2π (k ∈ Z)",
    "D. x = π/2 + kπ hoặc x = ±2π/3 + k2π (k ∈ Z)"
  ],
  "answer": "A. x = k2π hoặc x = ±2π/3 + k2π (k ∈ Z)",
  "explanation": "Đặt t = cos x (-1 ≤ t ≤ 1). Phương trình 2t^2 - t - 1 = 0 có nghiệm t = 1 hoặc t = -1/2. Với cos x = 1 ⇔ x = k2π. Với cos x = -1/2 = cos(2π/3) ⇔ x = ±2π/3 + k2π."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tất cả các giá trị của tham số m để phương trình 2sin x + m - 1 = 0 có nghiệm là:",
  "options": [
    "A. -1 ≤ m ≤ 3",
    "B. -3 ≤ m ≤ 1",
    "C. m ≥ 3",
    "D. m ≤ -1"
  ],
  "answer": "A. -1 ≤ m ≤ 3",
  "explanation": "Phương trình tương đương sin x = (1 - m)/2. Phương trình có nghiệm khi -1 ≤ (1 - m)/2 ≤ 1 ⇔ -2 ≤ 1 - m ≤ 2 ⇔ -3 ≤ -m ≤ 1 ⇔ -1 ≤ m ≤ 3."
}'></div>

---

## VI. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Giải các phương trình lượng giác cơ bản sau:**
   a) $\sin\left(3x - \frac{\pi}{4}\right) = -\frac{1}{2}$  
   b) $\cos\left(2x + 30^\circ\right) = \frac{\sqrt{3}}{2}$  
   c) $\sqrt{3}\tan\left(x + \frac{\pi}{6}\right) - 1 = 0$

2. **Tìm nghiệm thuộc tập xác định cho trước:**
   a) Tìm số nghiệm của phương trình $\cos 3x = \frac{1}{2}$ trên đoạn $[-\pi; \pi]$.  
   b) Tìm nghiệm dương nhỏ nhất của phương trình $\sin\left(2x - \frac{\pi}{3}\right) = 0$.

3. **Phương trình đưa về dạng tích:**
   a) $\sin 2x + 2\cos x = 0$  
   b) $\cos 3x - \cos x + \sin 2x = 0$

---

### Thử thách Thực tế: Góc chiếu của Tấm pin Năng lượng Mặt trời

Tại một nông trại điện mặt trời ở Ninh Thuận, góc nghiêng đón nắng $\theta$ của dàn pin được điều chỉnh tự động theo góc nâng mặt trời $\alpha(t)$ vào thời điểm $t$ giờ trong ngày ($6 \le t \le 18$) theo công thức:
$$\sin\left(\frac{\pi(t - 6)}{12}\right) = \sin \theta$$

Biết rằng hệ thống đạt hiệu suất phát điện cực đại trên $86.6\%$ khi $\sin \theta \ge \frac{\sqrt{3}}{2}$.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Tìm thời điểm trong ngày mà dàn pin đạt độ nghiêng đón nắng cao nhất ($\sin \theta = 1$).<br>
2. Xác định khoảng thời gian trong ngày (từ mấy giờ đến mấy giờ) mà nông trại phát điện với hiệu suất cao hơn 86.6%?
</div>

> [!TIP]
> **Hướng dẫn:**
> 1. $\sin\left(\frac{\pi(t - 6)}{12}\right) = 1 \Leftrightarrow \frac{\pi(t - 6)}{12} = \frac{\pi}{2} \Leftrightarrow t - 6 = 6 \Leftrightarrow t = 12\text{h}$ (đúng 12 giờ trưa).
> 2. $\sin\left(\frac{\pi(t - 6)}{12}\right) \ge \frac{\sqrt{3}}{2}$.  
>    Vì góc $\beta = \frac{\pi(t - 6)}{12} \in [0; \pi]$, bất phương trình có nghiệm khi $\frac{\pi}{3} \le \beta \le \frac{2\pi}{3}$:
>    $$\frac{\pi}{3} \le \frac{\pi(t - 6)}{12} \le \frac{2\pi}{3} \Leftrightarrow 4 \le t - 6 \le 8 \Leftrightarrow 10 \le t \le 14$$
>    Như vậy, từ **$10\text{h}$ sáng đến $14\text{h}$ chiều** (kéo dài suốt 4 tiếng buổi trưa), dàn pin hoạt động với công suất đỉnh cao nhất!
