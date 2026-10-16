---
title: 'Toán 11 Bài 2: Công thức lượng giác - Công thức cộng, nhân đôi, biến đổi tích tổng'
description: 'Toàn bộ lý thuyết trọng tâm Bài 2 Toán 11: Công thức cộng, công thức nhân đôi, công thức hạ bậc, biến đổi tích thành tổng và tổng thành tích, mẹo ghi nhớ bằng thơ cực nhanh, các dạng toán rút gọn biểu thức, chứng minh đẳng thức và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Lượng giác 11
  - Công thức lượng giác
  - Công thức cộng
  - Công thức nhân đôi
  - Biến đổi lượng giác
  - Kết nối tri thức
grade: 11
---

# Bài 2. Công thức lượng giác

Chào mừng các em tiếp tục hành trình chinh phục chương trình **Toán 11**!

Trong [Bài 1: Giá trị lượng giác của góc lượng giác](toan-11-bai-1-gia-tri-luong-giac-cua-goc-luong-giac.html), chúng ta đã nắm vững các giá trị lượng giác cơ bản trên đường tròn đơn vị và các góc đặc biệt như $30^\circ, 45^\circ, 60^\circ, 90^\circ$. Nhưng trong thực tế đo đạc, kỹ thuật và vật lý:
- Làm sao tính chính xác $\sin 15^\circ$ hay $\cos 75^\circ$ mà không cần máy tính cầm tay?
- Khi hai sóng âm hoặc hai dòng điện xoay chiều có độ lệch pha $\Delta \varphi$ chồng chập lên nhau, âm thanh thu được sẽ khuếch đại hay triệt tiêu?
- Làm thế nào để phân rã một tích các dao động phức tạp $\cos(100\pi t) \cdot \cos(2\pi t)$ thành tổng các sóng điều hòa đơn giản để truyền qua anten radio?

Câu trả lời nằm ở hệ thống **Công thức lượng giác** — chiếc "chìa khóa vàng" giúp biến đổi linh hoạt giữa các góc, các hàm và các bậc lượng giác!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HỆ THỐNG CÔNG THỨC LƯỢNG GIÁC</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Công thức cộng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b$<br>• $\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b$<br>• $\tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a \tan b}$<br>• <em>Mẹo: Cos thì cos cos sin sin, Sin thì sin cos cos sin.</em></p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Công thức nhân đôi & Hạ bậc</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sin 2a = 2\sin a \cos a$<br>• $\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$<br>• $\tan 2a = \frac{2\tan a}{1 - \tan^2 a}$<br>• Hạ bậc: $\cos^2 a = \frac{1 + \cos 2a}{2}$, $\sin^2 a = \frac{1 - \cos 2a}{2}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biến đổi Tích thành Tổng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\cos a \cos b = \frac{1}{2}[\cos(a - b) + \cos(a + b)]$<br>• $\sin a \sin b = \frac{1}{2}[\cos(a - b) - \cos(a + b)]$<br>• $\sin a \cos b = \frac{1}{2}[\sin(a - b) + \sin(a + b)]$<br>• Giúp hạ bậc tích, tính nguyên hàm/tích phân sau này.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biến đổi Tổng thành Tích</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\cos u + \cos v = 2\cos\frac{u+v}{2}\cos\frac{u-v}{2}$<br>• $\cos u - \cos v = -2\sin\frac{u+v}{2}\sin\frac{u-v}{2}$<br>• $\sin u \pm \sin v = 2\left\{\begin{matrix}\sin\\\cos\end{matrix}\right\}\frac{u+v}{2}\left\{\begin{matrix}\cos\\\sin\end{matrix}\right\}\frac{u-v}{2}$<br>• Đưa phương trình về dạng tích $A \cdot B = 0$.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tách góc:** Viết góc $15^\circ$ dưới dạng hiệu của hai góc đặc biệt quen thuộc trong khoảng $(0^\circ; 90^\circ)$.
2. **Kiểm tra trực giác:** Liệu $\sin(30^\circ + 60^\circ)$ có bằng $\sin 30^\circ + \sin 60^\circ$ hay không?
3. **Giá trị đặc biệt:** Nếu $\cos a = 0$, giá trị của $\cos 2a$ bằng bao nhiêu?
4. **Nhân đôi:** Nếu biết $\sin x \cos x = \frac{1}{4}$, thì $\sin 2x$ bằng bao nhiêu?
5. **Hạ bậc:** Biểu thức $2\cos^2 15^\circ - 1$ có giá trị bằng bao nhiêu?

> [!TIP]
> **Giải đáp khởi động:**
> 1. $15^\circ = 45^\circ - 30^\circ$ (hoặc $60^\circ - 45^\circ$).
> 2. **Không bằng nhau!** Vế trái là $\sin 90^\circ = 1$. Vế phải là $\frac{1}{2} + \frac{\sqrt{3}}{2} = \frac{1 + \sqrt{3}}{2} \approx 1,366 \ne 1$. Do đó hàm sin **không có tính chất phân phối** đối với phép cộng góc!
> 3. Ta có $\cos 2a = 2\cos^2 a - 1 = 2(0)^2 - 1 = -1$.
> 4. $\sin 2x = 2\sin x \cos x = 2 \cdot \frac{1}{4} = \frac{1}{2}$.
> 5. $2\cos^2 15^\circ - 1 = \cos(2 \cdot 15^\circ) = \cos 30^\circ = \frac{\sqrt{3}}{2}$.

---

## Lý thuyết Trọng tâm

### 1. Công thức cộng

Công thức cộng cho phép tính giá trị lượng giác của tổng hoặc hiệu hai góc $(a \pm b)$ thông qua các giá trị lượng giác của từng góc riêng lẻ $a$ và $b$.

> [!NOTE]
> **Hệ thống công thức cộng:**
> $$\begin{aligned}
> \cos(a - b) &= \cos a \cos b + \sin a \sin b \\
> \cos(a + b) &= \cos a \cos b - \sin a \sin b \\
> \sin(a - b) &= \sin a \cos b - \cos a \sin b \\
> \sin(a + b) &= \sin a \cos b + \cos a \sin b \\
> \tan(a - b) &= \frac{\tan a - \tan b}{1 + \tan a \tan b} \quad \left(\text{khi các biểu thức xác định}\right) \\
> \tan(a + b) &= \frac{\tan a + \tan b}{1 - \tan a \tan b} \quad \left(\text{khi các biểu thức xác định}\right)
> \end{aligned}$$

#### Bài thơ nhớ công thức cộng siêu dễ thuộc:
> *"Cos thì cos cos sin sin,*  
> *Dấu trừ đổi cộng, dấu cộng đổi trừ.*  
> *Sin thì sin cos cos sin,*  
> *Dấu cùng dấu cũ nhớ in vào lòng.*  
> *Tan thì tan tử chia cho,*  
> *Một trừ tan tích cùng đò sang sông."*

<div style="margin: 20px 0; text-align: center;">
<svg viewBox="0 0 320 220" style="max-width: 420px; width: 100%; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
<!-- Unit circle arc -->
<path d="M 270 170 A 120 120 0 0 0 170 50" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
<!-- Axes -->
<line x1="30" y1="170" x2="290" y2="170" stroke="#475569" stroke-width="1.5" />
<polygon points="290,167 297,170 290,173" fill="#475569" />
<text x="280" y="185" font-size="11" fill="#475569">x</text>
<line x1="150" y1="190" x2="150" y2="30" stroke="#475569" stroke-width="1.5" />
<polygon points="147,30 150,23 153,30" fill="#475569" />
<text x="135" y="32" font-size="11" fill="#475569">y</text>
<text x="138" y="182" font-size="11" font-weight="bold" fill="#475569">O</text>
<!-- Vector u at angle b (25 deg) -->
<line x1="150" y1="170" x2="258" y2="119" stroke="#0284c7" stroke-width="2" />
<circle cx="258" cy="119" r="4" fill="#0284c7" />
<text x="264" y="117" font-size="11" font-weight="bold" fill="#0369a1">M (b)</text>
<!-- Vector v at angle a (65 deg) -->
<line x1="150" y1="170" x2="200" y2="61" stroke="#ea580c" stroke-width="2" />
<circle cx="200" cy="61" r="4" fill="#ea580c" />
<text x="195" y="52" font-size="11" font-weight="bold" fill="#c2410c">N (a)</text>
<!-- Angle arc a - b -->
<path d="M 194 149 A 50 50 0 0 0 171 125" fill="none" stroke="#16a34a" stroke-width="2" />
<text x="195" y="138" font-size="10" font-weight="bold" fill="#15803d">a - b</text>
<!-- Dot product note -->
<text x="40" y="70" font-size="10" fill="#64748b">Tích vô hướng:</text>
<text x="40" y="86" font-size="10" font-style="italic" fill="#334155">OM · ON = cos(a - b)</text>
<text x="40" y="102" font-size="10" font-style="italic" fill="#334155">= cos a cos b + sin a sin b</text>
</svg>
<div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 2.1: Bản chất hình học của công thức cộng $\cos(a - b)$ xuất phát từ tích vô hướng hai vectơ đơn vị</em></div>
</div>

---

### 2. Công thức nhân đôi

Khi ta cho hai góc bằng nhau: $b = a$ trong công thức cộng, ta lập tức nhận được các **công thức nhân đôi**:

> [!NOTE]
> **Công thức nhân đôi:**
> $$\begin{aligned}
> \sin 2a &= 2\sin a \cos a \\
> \cos 2a &= \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a \\
> \tan 2a &= \frac{2\tan a}{1 - \tan^2 a} \quad \left(\text{với } a, 2a \ne \frac{\pi}{2} + k\pi\right)
> \end{aligned}$$

> [!WARNING]
> **Lưu ý ba dạng tương đương của $\cos 2a$:**
> Tùy theo bài toán đang chứa $\sin a$ hay $\cos a$ mà ta chọn dạng biểu diễn phù hợp nhất:
> - Cần triệt tiêu số $1$: $1 + \cos 2a = 2\cos^2 a$ hoặc $1 - \cos 2a = 2\sin^2 a$.
> - Chuyển toàn bộ về $\cos a$: dùng $\cos 2a = 2\cos^2 a - 1$.
> - Chuyển toàn bộ về $\sin a$: dùng $\cos 2a = 1 - 2\sin^2 a$.

---

### 3. Công thức hạ bậc

Từ công thức $\cos 2a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$, rút ra bình phương của $\sin a$ và $\cos a$:

> [!NOTE]
> **Công thức hạ bậc:**
> $$\cos^2 a = \frac{1 + \cos 2a}{2}$$
> $$\sin^2 a = \frac{1 - \cos 2a}{2}$$
> $$\tan^2 a = \frac{1 - \cos 2a}{1 + \cos 2a} \quad \left(\text{khi } \cos 2a \ne -1\right)$$

*Quy tắc đổi góc:* Khi hạ bậc từ bậc $2$ xuống bậc $1$, góc sẽ **tăng gấp đôi** ($a \to 2a$). Ngược lại, khi nâng bậc từ bậc $1$ lên bậc $2$, góc sẽ **giảm một nửa** ($2a \to a$).

---

### 4. Công thức biến đổi tích thành tổng

Khi cần tính tích phân, giải phương trình hoặc phân tích chuỗi Fourier, việc biến đổi một tích lượng giác về tổng các dao động điều hòa là thao tác then chốt:

> [!NOTE]
> **Công thức biến đổi tích thành tổng:**
> $$\begin{aligned}
> \cos a \cos b &= \frac{1}{2} \left[ \cos(a - b) + \cos(a + b) \right] \\
> \sin a \sin b &= \frac{1}{2} \left[ \cos(a - b) - \cos(a + b) \right] \\
> \sin a \cos b &= \frac{1}{2} \left[ \sin(a - b) + \sin(a + b) \right]
> \end{aligned}$$

---

### 5. Công thức biến đổi tổng thành tích

Khi cần rút gọn phân thức lượng giác hoặc giải phương trình lượng giác bằng cách đưa về phương trình tích $A \cdot B = 0$, ta chuyển từ tổng (hiệu) sang tích:

> [!NOTE]
> **Công thức biến đổi tổng thành tích:**
> Đặt $u = a + b$ và $v = a - b \implies a = \frac{u + v}{2}, b = \frac{u - v}{2}$:
> $$\begin{aligned}
> \cos u + \cos v &= 2\cos\frac{u + v}{2}\cos\frac{u - v}{2} \\
> \cos u - \cos v &= -2\sin\frac{u + v}{2}\sin\frac{u - v}{2} \\
> \sin u + \sin v &= 2\sin\frac{u + v}{2}\cos\frac{u - v}{2} \\
> \sin u - \sin v &= 2\cos\frac{u + v}{2}\sin\frac{u - v}{2}
> \end{aligned}$$

#### Bài thơ nhớ biến đổi tổng thành tích:
> *"Cos cộng cos bằng hai cos cos,*  
> *Cos trừ cos bằng trừ hai sin sin.*  
> *Sin cộng sin bằng hai sin cos,*  
> *Sin trừ sin bằng hai cos sin."*

---

## 5 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính giá trị lượng giác của góc không đặc biệt

#### Phương pháp giải:
Tách góc cần tính thành tổng hoặc hiệu của các góc đặc biệt ($30^\circ, 45^\circ, 60^\circ, 90^\circ,...$), sau đó áp dụng công thức cộng hoặc công thức nhân đôi/hạ bậc.

---

#### Bài toán 1
Tính chính xác giá trị của $\sin 15^\circ$ và $\cos 75^\circ$.

> [!TIP]
> **Lời giải:**
> 1. Ta tách $15^\circ = 45^\circ - 30^\circ$. Áp dụng công thức cộng cho sin:
>    $$\sin 15^\circ = \sin(45^\circ - 30^\circ) = \sin 45^\circ \cos 30^\circ - \cos 45^\circ \sin 30^\circ$$
>    Thay các giá trị đặc biệt: $\sin 45^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\sin 30^\circ = \frac{1}{2}$:
>    $$\sin 15^\circ = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} - \sqrt{2}}{4}$$
> 2. Vì $75^\circ$ và $15^\circ$ là hai góc phụ nhau ($75^\circ + 15^\circ = 90^\circ$), theo tính chất phụ chéo:
>    $$\cos 75^\circ = \sin 15^\circ = \frac{\sqrt{6} - \sqrt{2}}{4}$$

---

#### Bài toán 2
Cho $\sin \alpha = \frac{3}{5}$ với $\frac{\pi}{2} < \alpha < \pi$. Tính $\cos 2\alpha$, $\sin 2\alpha$ và $\cos\left(\alpha + \frac{\pi}{3}\right)$.

> [!TIP]
> **Lời giải:**
> - Vì $\frac{\pi}{2} < \alpha < \pi$ (góc phần tư thứ II) nên $\cos \alpha < 0$.
>   $$\cos \alpha = -\sqrt{1 - \sin^2 \alpha} = -\sqrt{1 - \left(\frac{3}{5}\right)^2} = -\sqrt{\frac{16}{25}} = -\frac{4}{5}$$
> - Áp dụng công thức nhân đôi:
>   $$\sin 2\alpha = 2\sin \alpha \cos \alpha = 2 \cdot \frac{3}{5} \cdot \left(-\frac{4}{5}\right) = -\frac{24}{25}$$
>   $$\cos 2\alpha = 1 - 2\sin^2 \alpha = 1 - 2 \cdot \left(\frac{3}{5}\right)^2 = 1 - \frac{18}{25} = \frac{7}{25}$$
> - Áp dụng công thức cộng:
>   $$\cos\left(\alpha + \frac{\pi}{3}\right) = \cos \alpha \cos\frac{\pi}{3} - \sin \alpha \sin\frac{\pi}{3} = \left(-\frac{4}{5}\right) \cdot \frac{1}{2} - \left(\frac{3}{5}\right) \cdot \frac{\sqrt{3}}{2} = \frac{-4 - 3\sqrt{3}}{10}$$

---

### Dạng 2: Rút gọn biểu thức lượng giác

#### Phương pháp giải:
- Phát hiện các góc bù, phụ, hoặc hơn kém nhau để nhóm cặp thích hợp.
- Sử dụng các hằng đẳng thức cơ bản và công thức nhân đôi để triệt tiêu các hạng tử tự do.
- Đưa về cùng một góc hoặc cùng một hàm lượng giác.

---

#### Bài toán 3
Rút gọn biểu thức $A = \frac{\sin 2x + \sin x}{1 + \cos 2x + \cos x}$.

> [!TIP]
> **Lời giải:**
> Ta quan sát thấy ở mẫu có $1 + \cos 2x$. Theo công thức hạ bậc ngược: $1 + \cos 2x = 2\cos^2 x$.
> Ở tử số có $\sin 2x = 2\sin x \cos x$. Ta biến đổi:
> $$A = \frac{2\sin x \cos x + \sin x}{2\cos^2 x + \cos x} = \frac{\sin x(2\cos x + 1)}{\cos x(2\cos x + 1)}$$
> Với điều kiện $2\cos x + 1 \ne 0$ và $\cos x \ne 0$, ta rút gọn thừa số chung $(2\cos x + 1)$:
> $$A = \frac{\sin x}{\cos x} = \tan x$$
> Một biểu thức tưởng chừng phức tạp đã thu gọn kỳ diệu thành $\tan x$!

---

### Dạng 3: Biến đổi tổng thành tích để rút gọn phân thức

#### Bài toán 4
Rút gọn biểu thức $B = \frac{\sin x + \sin 3x + \sin 5x}{\cos x + \cos 3x + \cos 5x}$.

> [!TIP]
> **Lời giải:**
> Quan sát các góc $x, 3x, 5x$: Ta thấy trung bình cộng của $x$ và $5x$ chính là $\frac{x + 5x}{2} = 3x$. Do đó ta ghép cặp hạng tử đầu và hạng tử cuối!
> - Biến đổi tử số:
>   $$\begin{aligned}
>   \sin x + \sin 5x + \sin 3x &= 2\sin\frac{5x + x}{2}\cos\frac{5x - x}{2} + \sin 3x \\
>   &= 2\sin 3x \cos 2x + \sin 3x \\
>   &= \sin 3x (2\cos 2x + 1)
>   \end{aligned}$$
> - Biến đổi mẫu số:
>   $$\begin{aligned}
>   \cos x + \cos 5x + \cos 3x &= 2\cos\frac{5x + x}{2}\cos\frac{5x - x}{2} + \cos 3x \\
>   &= 2\cos 3x \cos 2x + \cos 3x \\
>   &= \cos 3x (2\cos 2x + 1)
>   \end{aligned}$$
> - Chia tử cho mẫu:
>   $$B = \frac{\sin 3x(2\cos 2x + 1)}{\cos 3x(2\cos 2x + 1)} = \frac{\sin 3x}{\cos 3x} = \tan 3x$$

---

### Dạng 4: Chứng minh đẳng thức trong tam giác

#### Bài toán 5
Chứng minh rằng trong mọi tam giác $ABC$, ta luôn có:
$$\sin A + \sin B + \sin C = 4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$$

> [!TIP]
> **Lời giải:**
> Vì $A + B + C = \pi$ nên $C = \pi - (A + B) \implies \frac{C}{2} = \frac{\pi}{2} - \frac{A + B}{2}$.
> Do đó $\sin\frac{C}{2} = \cos\frac{A + B}{2}$ và $\cos\frac{C}{2} = \sin\frac{A + B}{2}$.
> - Áp dụng công thức biến đổi tổng thành tích cho $\sin A + \sin B$:
>   $$\sin A + \sin B = 2\sin\frac{A + B}{2}\cos\frac{A - B}{2} = 2\cos\frac{C}{2}\cos\frac{A - B}{2}$$
> - Áp dụng công thức nhân đôi cho $\sin C$:
>   $$\sin C = 2\sin\frac{C}{2}\cos\frac{C}{2}$$
> - Cộng hai vế lại và đặt nhân tử chung $2\cos\frac{C}{2}$:
>   $$\begin{aligned}
>   \sin A + \sin B + \sin C &= 2\cos\frac{C}{2} \left[ \cos\frac{A - B}{2} + \sin\frac{C}{2} \right] \\
>   &= 2\cos\frac{C}{2} \left[ \cos\frac{A - B}{2} + \cos\frac{A + B}{2} \right]
>   \end{aligned}$$
> - Áp dụng công thức $\cos u + \cos v = 2\cos\frac{u+v}{2}\cos\frac{u-v}{2}$ cho ngoặc vuông:
>   $$\cos\frac{A - B}{2} + \cos\frac{A + B}{2} = 2\cos\frac{A}{2}\cos\frac{B}{2}$$
> - Thay vào ta được điều phải chứng minh:
>   $$\sin A + \sin B + \sin C = 2\cos\frac{C}{2} \cdot 2\cos\frac{A}{2}\cos\frac{B}{2} = 4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$$

---

### Dạng 5: Ứng dụng Thực tế - Hiện tượng phách trong âm học (Acoustic Beats)

Khi hai âm thoa hoặc hai dây đàn ghi-ta phát ra hai âm thanh có tần số gần bằng nhau $f_1$ và $f_2$ (ví dụ $440\text{ Hz}$ và $444\text{ Hz}$), ta nghe thấy âm thanh phát ra không đều mà to nhỏ nhịp nhàng liên tục. Hiện tượng này gọi là **hiện tượng phách**.

Phương trình của hai sóng âm tại tai người nghe có dạng:
$$s_1(t) = A\cos(2\pi f_1 t) \quad \text{và} \quad s_2(t) = A\cos(2\pi f_2 t)$$

Áp dụng công thức biến đổi tổng thành tích:
$$s(t) = s_1(t) + s_2(t) = 2A \cos\left(2\pi \frac{f_1 - f_2}{2} t\right) \cdot \cos\left(2\pi \frac{f_1 + f_2}{2} t\right)$$

- Sóng tổng hợp có tần số sóng mang là trung bình cộng $f_{\text{tb}} = \frac{f_1 + f_2}{2}$.
- Biên độ biến thiên điều hòa theo tần số phách $f_{\text{phách}} = |f_1 - f_2|$.
- Đây chính là nguyên lý mà các nhạc công dùng để **lên dây đàn**: khi nghe tiếng phách chậm dần về $0$, nghĩa là hai dây đàn đã hoàn toàn đồng âm ($f_1 = f_2$)!

---

## 10 Câu Trắc nghiệm Tự chấm có Lời giải chi tiết

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Khẳng định nào sau đây là ĐÚNG với mọi góc a và b?",
  "options": [
    "A. cos(a - b) = cos a cos b - sin a sin b",
    "B. sin(a + b) = sin a cos b + cos a sin b",
    "C. sin(a - b) = sin a cos b + cos a sin b",
    "D. cos(a + b) = cos a cos b + sin a sin b"
  ],
  "answer": "B. sin(a + b) = sin a cos b + cos a sin b",
  "explanation": "Theo công thức cộng: sin(a + b) = sin a cos b + cos a sin b (đúng). Các đáp án A, C, D đều bị sai dấu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Giá trị của biểu thức P = cos 75° cos 15° - sin 75° sin 15° bằng:",
  "options": [
    "A. 1",
    "B. 1/2",
    "C. 0",
    "D. √3/2"
  ],
  "answer": "C. 0",
  "explanation": "Áp dụng công thức cộng: P = cos(75° + 15°) = cos 90° = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tan a = 2 và tan b = 1/3. Giá trị của tan(a - b) bằng:",
  "options": [
    "A. 1",
    "B. 7/5",
    "C. 5/7",
    "D. 1/2"
  ],
  "answer": "A. 1",
  "explanation": "Áp dụng công thức tan(a - b) = (tan a - tan b)/(1 + tan a tan b) = (2 - 1/3) / (1 + 2 * 1/3) = (5/3) / (5/3) = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Công thức nhân đôi nào sau đây là SAI?",
  "options": [
    "A. sin 2a = 2sin a cos a",
    "B. cos 2a = cos² a - sin² a",
    "C. cos 2a = 1 - 2sin² a",
    "D. cos 2a = 2sin² a - 1"
  ],
  "answer": "D. cos 2a = 2sin² a - 1",
  "explanation": "Công thức đúng là cos 2a = 2cos² a - 1 hoặc cos 2a = 1 - 2sin² a. Đáp án D bị sai dấu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nếu sin a = 1/√5 thì giá trị của cos 2a bằng:",
  "options": [
    "A. 3/5",
    "B. -3/5",
    "C. 4/5",
    "D. 2/5"
  ],
  "answer": "A. 3/5",
  "explanation": "Ta có cos 2a = 1 - 2sin² a = 1 - 2*(1/√5)² = 1 - 2/5 = 3/5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Biểu thức rút gọn của M = 2cos²(π/4 - x) - 1 là:",
  "options": [
    "A. cos 2x",
    "B. sin 2x",
    "C. -sin 2x",
    "D. -cos 2x"
  ],
  "answer": "B. sin 2x",
  "explanation": "Áp dụng công thức 2cos² u - 1 = cos 2u với u = π/4 - x: M = cos[2(π/4 - x)] = cos(π/2 - 2x) = sin 2x (do phụ chéo)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Biến đổi tích thành tổng biểu thức P = 2sin 3x cos x ta được:",
  "options": [
    "A. sin 4x + sin 2x",
    "B. sin 4x - sin 2x",
    "C. cos 4x + cos 2x",
    "D. cos 2x - cos 4x"
  ],
  "answer": "A. sin 4x + sin 2x",
  "explanation": "Áp dụng công thức 2sin a cos b = sin(a + b) + sin(a - b) ta có P = sin(3x + x) + sin(3x - x) = sin 4x + sin 2x."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Giá trị của biểu thức Q = cos 20° + cos 100° + cos 140° bằng:",
  "options": [
    "A. 1/2",
    "B. -1/2",
    "C. 0",
    "D. 1"
  ],
  "answer": "C. 0",
  "explanation": "Ghép cos 140° + cos 20° = 2cos(80°)cos(60°) = 2cos 80° * (1/2) = cos 80°. Khi đó Q = cos 80° + cos 100° = 2cos 90° cos 10° = 2*0*cos 10° = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Rút gọn biểu thức E = (sin 2a + sin 4a) / (cos 2a + cos 4a) ta được:",
  "options": [
    "A. tan a",
    "B. tan 2a",
    "C. tan 3a",
    "D. cot 3a"
  ],
  "answer": "C. tan 3a",
  "explanation": "Tử số: sin 4a + sin 2a = 2sin 3a cos a. Mẫu số: cos 4a + cos 2a = 2cos 3a cos a. Do đó E = (2sin 3a cos a)/(2cos 3a cos a) = tan 3a."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho tam giác ABC. Đẳng thức nào sau đây luôn ĐÚNG?",
  "options": [
    "A. cos(A + B) = cos C",
    "B. sin(A + B) = sin C",
    "C. tan(A + B) = tan C",
    "D. cos[(A + B)/2] = -sin(C/2)"
  ],
  "answer": "B. sin(A + B) = sin C",
  "explanation": "Trong tam giác ABC, A + B = π - C (hai góc bù nhau). Do đó sin(A + B) = sin(π - C) = sin C. Còn cos(A + B) = -cos C, tan(A + B) = -tan C."
}'></div>

---

## Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Tính giá trị biểu thức:**
   a) Tính $\tan 105^\circ$ bằng cách phân tích $105^\circ = 60^\circ + 45^\circ$.  
   b) Cho $\cos x = \frac{1}{3}$ với $-\frac{\pi}{2} < x < 0$. Tính $\sin 2x, \cos 2x, \tan\left(x + \frac{\pi}{4}\right)$.

2. **Rút gọn biểu thức:**
   a) $A = \frac{\cos 4x - \cos 2x}{\sin 4x + \sin 2x}$.  
   b) $B = \sin^2\left(\frac{\pi}{8} + x\right) - \sin^2\left(\frac{\pi}{8} - x\right)$.

3. **Chứng minh đẳng thức:**
   $$\frac{\sin 3x - \sin x}{1 - \cos 2x} = 2\cot x \cos x$$

---

### Thử thách Thực tế: Thiết kế Anten và Tín hiệu Điều chế AM

Trong truyền thanh vô tuyến AM (Amplitude Modulation):
- Một tín hiệu âm thanh có tần số thấp (âm thanh tiếng nói, âm nhạc) $f_m = 1\text{ kHz}$ được mô tả bởi hàm:
  $$m(t) = \cos(2\pi f_m t)$$
- Một sóng mang cao tần $f_c = 1000\text{ kHz}$ được phát ra từ trạm phát sóng:
  $$c(t) = \cos(2\pi f_c t)$$

Khi thực hiện điều chế biên độ tại đài phát thanh, tín hiệu phát ra không gian là tích của hai dao động:
$$s(t) = [1 + m(t)] \cdot c(t) = \cos(2\pi f_c t) + \cos(2\pi f_m t)\cos(2\pi f_c t)$$

**Nhiệm vụ:**
1. Áp dụng công thức biến đổi tích thành tổng cho số hạng $\cos(2\pi f_m t)\cos(2\pi f_c t)$.
2. Xác định các tần số xuất hiện trong phổ sóng của tín hiệu truyền đi. Giải thích vì sao mỗi đài phát thanh cần một dải thông (bandwidth) nhất định để không bị nhiễu sang đài bên cạnh.

> [!TIP]
> **Hướng dẫn:**
> 1. $\cos(2\pi f_m t)\cos(2\pi f_c t) = \frac{1}{2}\left[\cos(2\pi(f_c - f_m)t) + \cos(2\pi(f_c + f_m)t)\right]$.
> 2. Phổ tần số gồm 3 tần số:
>    - Tần số sóng mang trung tâm: $f_c = 1000\text{ kHz}$.
>    - Dải biên dưới (Lower Sideband): $f_c - f_m = 999\text{ kHz}$.
>    - Dải biên trên (Upper Sideband): $f_c + f_m = 1001\text{ kHz}$.
>    Do đó tín hiệu chiếm dải tần rộng $2f_m = 2\text{ kHz}$. Các đài phát thanh phải phát cách nhau tối thiểu một khoảng tần số này để tránh chồng lấn sóng!
