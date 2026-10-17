---
title: 'Toán 11 Bài 32: Các quy tắc tính đạo hàm - Bảng công thức đầy đủ và phương pháp giải nhanh'
description: 'Lý thuyết trọng tâm Bài 32 Toán 11 Kết nối tri thức: Đạo hàm của đa thức, căn thức, lượng giác, hàm mũ, lôgarit và hàm hợp; công thức giải nhanh phân thức, công cụ tra cứu đạo hàm tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Đạo hàm
  - Quy tắc tính đạo hàm
  - Đạo hàm hàm hợp
  - Đạo hàm lượng giác
  - Đạo hàm hàm mũ
  - Đạo hàm logarit
  - Kết nối tri thức
grade: 11
---

# Bài 32. Các quy tắc tính đạo hàm

Trong Bài 31, chúng ta đã hiểu sâu sắc về bản chất của đạo hàm qua giới hạn số gia:
$$f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$$

Tuy nhiên, nếu hàm số có dạng phức tạp như $f(x) = \frac{x^3 - 2x + 1}{\sqrt{x^2 + 4}}$ hay $g(x) = e^{2x} \sin(3x)$ mà phải dùng định nghĩa 3 bước để tính giới hạn thì sẽ vô cùng dài dòng và dễ nhầm lẫn.

May mắn thay, các nhà toán học đã xây dựng một hệ thống **Các quy tắc và công thức đạo hàm chuẩn mực**, cho phép chúng ta tính đạo hàm của bất kỳ biểu thức giải tích nào chỉ trong vài dòng ngắn ngủi!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ CÔNG THỨC: HỆ THỐNG QUY TẮC ĐẠO HÀM</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đạo hàm Đại số cơ bản</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $(c)' = 0$; $(x^\alpha)' = \alpha x^{\alpha - 1}$<br>
• $(u \pm v)' = u' \pm v'$<br>
• $(uv)' = u'v + uv'$<br>
• $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Đạo hàm Lượng giác</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $(\sin x)' = \cos x$<br>
• $(\cos x)' = -\sin x$<br>
• $(\tan x)' = \frac{1}{\cos^2 x} = 1 + \tan^2 x$<br>
• $(\cot x)' = -\frac{1}{\sin^2 x} = -(1 + \cot^2 x)$
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đạo hàm Mũ & Lôgarit</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• $(e^x)' = e^x$; $(a^x)' = a^x \ln a$<br>
• $(\ln x)' = \frac{1}{x}$; $(\log_a x)' = \frac{1}{x \ln a}$<br>
• Nhớ nhân $u'$ khi áp dụng cho hàm hợp!
</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quy tắc Hàm hợp</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">
• Với $y = f(u)$ và $u = u(x)$:<br>
$$\mathbf{y'_x = y'_u \cdot u'_x}$$<br>
• Ví dụ: $(\sin u)' = u' \cdot \cos u$.
</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. Đạo hàm của hàm số hằng $f(x) = 2026$ bằng bao nhiêu?
2. Tính đạo hàm của $f(x) = x^4$ và $g(x) = x$.
3. Đạo hàm của hàm số $y = \sin x$ tại $x = 0$ bằng bao nhiêu?
4. Nếu $u(x) = 2x + 1$ thì đạo hàm $u'(x)$ bằng bao nhiêu?
5. Tính đạo hàm của $y = e^x$ tại điểm $x = 1$.

> [!TIP]
> **Đáp án nhanh:**
> 1. $(2026)' = 0$.
> 2. $(x^4)' = 4x^3$; $(x)' = 1$.
> 3. $(\sin x)' = \cos x \implies \cos(0) = 1$.
> 4. $u'(x) = 2$.
> 5. $(e^x)' = e^x \implies e^1 = e \approx 2.718$.

---

## I. Bảng Đạo hàm của một số hàm số cơ bản

| Hàm số cơ bản $y = f(x)$ | Đạo hàm tương ứng $y' = f'(x)$ | Điều kiện áp dụng |
| :--- | :--- | :--- |
| **Hằng số:** $y = c$ | $y' = 0$ | $c \in \mathbb{R}$ |
| **Lũy thừa:** $y = x^n$ | $y' = n x^{n-1}$ | $n \in \mathbb{N}^*, n \ge 2$ |
| **Lũy thừa thực:** $y = x^\alpha$ | $y' = \alpha x^{\alpha - 1}$ | $x > 0, \alpha \in \mathbb{R}$ |
| **Căn bậc hai:** $y = \sqrt{x}$ | $y' = \frac{1}{2\sqrt{x}}$ | $x > 0$ |
| **Lượng giác sin:** $y = \sin x$ | $y' = \cos x$ | $\forall x \in \mathbb{R}$ |
| **Lượng giác cos:** $y = \cos x$ | $y' = -\sin x$ | $\forall x \in \mathbb{R}$ |
| **Lượng giác tan:** $y = \tan x$ | $y' = \frac{1}{\cos^2 x} = 1 + \tan^2 x$ | $x \ne \frac{\pi}{2} + k\pi$ |
| **Lượng giác cot:** $y = \cot x$ | $y' = -\frac{1}{\sin^2 x} = -(1 + \cot^2 x)$ | $x \ne k\pi$ |
| **Hàm số mũ e:** $y = e^x$ | $y' = e^x$ | $\forall x \in \mathbb{R}$ |
| **Hàm số mũ cơ số a:** $y = a^x$ | $y' = a^x \ln a$ | $a > 0, a \ne 1$ |
| **Hàm số ln:** $y = \ln x$ | $y' = \frac{1}{x}$ | $x > 0$ |
| **Hàm số logarit cơ số a:** $y = \log_a x$ | $y' = \frac{1}{x \ln a}$ | $x > 0, a > 0, a \ne 1$ |

---

## II. Các quy tắc tính đạo hàm Đại số (Tổng, Hiệu, Tích, Thương)

Giả sử $u = u(x)$ và $v = v(x)$ là hai hàm số có đạo hàm trên khoảng xác định.

### 1. Đạo hàm của Tổng và Hiệu
$$(u + v)' = u' + v'$$
$$(u - v)' = u' - v'$$
Mở rộng cho $n$ hàm số: $(u_1 \pm u_2 \pm \dots \pm u_n)' = u_1' \pm u_2' \pm \dots \pm u_n'$.

### 2. Đạo hàm của Tích
$$(uv)' = u'v + uv'$$

> [!NOTE]
> **Hệ quả quan trọng:**
> - Nhân với hằng số $c$: $(c \cdot u)' = c \cdot u'$.
> - Tích của 3 hàm số: $(uvw)' = u'vw + uv'w + uvw'$.

### 3. Đạo hàm của Thương
$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \quad (v(x) \ne 0)$$

> [!NOTE]
> **Hệ quả quan trọng:**
> - Nghịch đảo: $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$.
> - Đặc biệt: Công thức giải nhanh phân thức bậc nhất trên bậc nhất:
>   $$\mathbf{\left(\frac{ax + b}{cx + d}\right)' = \frac{ad - bc}{(cx + d)^2}}$$

---

## III. Đạo hàm của Hàm hợp

### 1. Định lý đạo hàm hàm hợp
Cho hàm số $y = f(u)$ với $u = u(x)$. Nếu hàm số $u(x)$ có đạo hàm theo $x$ là $u'_x$ và hàm số $f(u)$ có đạo hàm theo $u$ là $y'_u$, thì hàm hợp $y = f(u(x))$ có đạo hàm theo $x$ là:
$$\mathbf{y'_x = y'_u \cdot u'_x}$$

> [!TIP]
> **Quy tắc bỏ túi:**
> Khi tính đạo hàm của hàm hợp theo $u$, công thức giữ nguyên dạng như hàm sơ cấp theo $x$, nhưng **BẮT BUỘC NHÂN THÊM $u'$**!

### 2. Bảng đối chiếu song song: Hàm cơ bản vs Hàm hợp

| Hàm số cơ bản $x$ | Hàm hợp $u = u(x)$ |
| :--- | :--- |
| $(x^n)' = n x^{n-1}$ | **$(u^n)' = n u^{n-1} \cdot u'$** |
| $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$ | **$(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$** |
| $(\sin x)' = \cos x$ | **$(\sin u)' = u' \cdot \cos u$** |
| $(\cos x)' = -\sin x$ | **$(\cos u)' = -u' \cdot \sin u$** |
| $(\tan x)' = \frac{1}{\cos^2 x}$ | **$(\tan u)' = \frac{u'}{\cos^2 u}$** |
| $(\cot x)' = -\frac{1}{\sin^2 x}$ | **$(\cot u)' = -\frac{u'}{\sin^2 u}$** |
| $(e^x)' = e^x$ | **$(e^u)' = u' \cdot e^u$** |
| $(a^x)' = a^x \ln a$ | **$(a^u)' = u' \cdot a^u \ln a$** |
| $(\ln x)' = \frac{1}{x}$ | **$(\ln u)' = \frac{u'}{u}$** |
| $(\log_a x)' = \frac{1}{x \ln a}$ | **$(\log_a u)' = \frac{u'}{u \ln a}$** |

---

## Công cụ trực quan: Bộ Tra cứu & Tính Đạo hàm Nhanh

Hãy chọn dạng hàm số để xem công thức mẫu, quy tắc bước làm và kết quả đạo hàm:

<div id="derivative-app" style="margin: 24px 0; padding: 22px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">BỘ TRA CỨU ĐẠO HÀM TƯƠNG TÁC</h4>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 20px;">
    <button type="button" class="btn-deriv active" data-type="poly" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #3b82f6; background: #3b82f6; color: #fff; font-weight: 600; cursor: pointer;">Đa thức: xⁿ</button>
    <button type="button" class="btn-deriv" data-type="frac" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: 600; cursor: pointer;">Phân thức: (ax+b)/(cx+d)</button>
    <button type="button" class="btn-deriv" data-type="trig" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #f59e0b; background: #fef3c7; color: #b45309; font-weight: 600; cursor: pointer;">Lượng giác: sin(u)</button>
    <button type="button" class="btn-deriv" data-type="exp" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #8b5cf6; background: #f5f3ff; color: #6d28d9; font-weight: 600; cursor: pointer;">Mũ: eᵘ(x)</button>
  </div>

  <div id="deriv-display" style="background: #f8fafc; border-radius: 10px; padding: 18px; border: 1px solid #e2e8f0; font-family: monospace; font-size: 1.05em; line-height: 1.8;">
    <div style="color: #1e293b; font-weight: bold; font-size: 1.2em;" id="deriv-formula">y = a·xⁿ + b·x + c</div>
    <div style="color: #2563eb; margin: 8px 0;" id="deriv-rule">Quy tắc: (xⁿ)' = n·xⁿ⁻¹, (c·x)' = c, (hằng số)' = 0</div>
    <div style="background: #e2e8f0; padding: 10px; border-radius: 6px; font-weight: bold; color: #0f172a;" id="deriv-example">
      Ví dụ: y = 3x⁴ - 5x² + 7x - 2<br>
      => y' = 3·(4x³) - 5·(2x) + 7 = 12x³ - 10x + 7
    </div>
  </div>
</div>

<script>
const __initApp = function() {
  const btns = document.querySelectorAll('.btn-deriv');
  const dFormula = document.getElementById('deriv-formula');
  const dRule = document.getElementById('deriv-rule');
  const dExample = document.getElementById('deriv-example');

  if (!btns.length || !dFormula) return;

  const data = {
    poly: {
      formula: 'y = a·xⁿ + b·x + c',
      rule: 'Quy tắc: (xⁿ)\' = n·xⁿ⁻¹ ; (c·u)\' = c·u\' ; (hằng số)\' = 0',
      example: 'Ví dụ: y = 3x⁴ - 5x² + 7x - 2<br>=> y\' = 3·(4x³) - 5·(2x) + 7 = 12x³ - 10x + 7'
    },
    frac: {
      formula: 'y = (ax + b) / (cx + d)',
      rule: 'Công thức giải nhanh: y\' = (a·d - b·c) / (cx + d)²',
      example: 'Ví dụ: y = (2x - 3) / (x + 1)<br>=> ad - bc = 2·(1) - (-3)·(1) = 2 + 3 = 5<br>=> y\' = 5 / (x + 1)²'
    },
    trig: {
      formula: 'y = sin(u(x)) hoặc cos(u(x))',
      rule: 'Quy tắc hàm hợp: (sin u)\' = u\'·cos u ; (cos u)\' = -u\'·sin u',
      example: 'Ví dụ: y = sin(3x² + 1)<br>Đặt u = 3x² + 1 => u\' = 6x<br>=> y\' = (3x² + 1)\' · cos(3x² + 1) = 6x · cos(3x² + 1)'
    },
    exp: {
      formula: 'y = eᵘ(x) hoặc y = aᵘ(x)',
      rule: 'Quy tắc hàm hợp: (eᵘ)\' = u\'·eᵘ ; (aᵘ)\' = u\'·aᵘ·ln(a)',
      example: 'Ví dụ: y = e^(2x - 5)<br>Đặt u = 2x - 5 => u\' = 2<br>=> y\' = 2 · e^(2x - 5)'
    }
  };

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btns.forEach(b => {
        b.style.background = '';
        b.style.color = '';
      });
      this.style.background = '#2563eb';
      this.style.color = '#ffffff';

      const type = this.dataset.type;
      const item = data[type];
      dFormula.innerHTML = item.formula;
      dRule.innerHTML = item.rule;
      dExample.innerHTML = item.example;
    });
  });
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initApp);
} else {
  __initApp();
}
</script>

---

## IV. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Tính đạo hàm của hàm số đa thức và căn thức

**Bài toán 1:** Tính đạo hàm của các hàm số sau:
a) $y = 4x^5 - 2x^3 + \frac{1}{2}x^2 - 7x + 10$  
b) $y = (x^2 + 1)(3x - 2)$  
c) $y = \sqrt{2x^2 + 5x + 3}$

**Lời giải:**
a) Áp dụng quy tắc cộng, trừ và lũy thừa:
$$y' = (4x^5)' - (2x^3)' + \left(\frac{1}{2}x^2\right)' - (7x)' + (10)'$$
$$y' = 4(5x^4) - 2(3x^2) + \frac{1}{2}(2x) - 7 = 20x^4 - 6x^2 + x - 7$$

b) Cách 1 (Áp dụng công thức nhân $(uv)' = u'v + uv'$):
$$u = x^2 + 1 \implies u' = 2x$$
$$v = 3x - 2 \implies v' = 3$$
$$y' = 2x(3x - 2) + (x^2 + 1)(3) = 6x^2 - 4x + 3x^2 + 3 = 9x^2 - 4x + 3$$
*(Cách 2: Khai triển $y = 3x^3 - 2x^2 + 3x - 2 \implies y' = 9x^2 - 4x + 3$).*

c) Hàm hợp căn thức $y = \sqrt{u}$ với $u = 2x^2 + 5x + 3$:
$$u' = (2x^2 + 5x + 3)' = 4x + 5$$
Áp dụng công thức $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$:
$$y' = \frac{4x + 5}{2\sqrt{2x^2 + 5x + 3}}$$

---

### Dạng 2: Tính đạo hàm của hàm số phân thức hữu tỉ

**Bài toán 2:** Tính đạo hàm của các hàm số sau:
a) $y = \frac{2x - 1}{x + 3}$  
b) $y = \frac{x^2 - 3x + 2}{x - 1}$

**Lời giải:**
a) Áp dụng công thức giải nhanh $\left(\frac{ax+b}{cx+d}\right)' = \frac{ad - bc}{(cx+d)^2}$:
Với $a = 2, b = -1, c = 1, d = 3$:
$$ad - bc = 2(3) - (-1)(1) = 6 + 1 = 7$$
Suy ra:
$$y' = \frac{7}{(x + 3)^2}$$

b) Áp dụng công thức thương $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$:
$$u = x^2 - 3x + 2 \implies u' = 2x - 3$$
$$v = x - 1 \implies v' = 1$$
$$y' = \frac{(2x - 3)(x - 1) - (x^2 - 3x + 2)(1)}{(x - 1)^2}$$
$$y' = \frac{(2x^2 - 5x + 3) - (x^2 - 3x + 2)}{(x - 1)^2} = \frac{x^2 - 2x + 1}{(x - 1)^2} = \frac{(x - 1)^2}{(x - 1)^2} = 1 \quad (\forall x \ne 1)$$
*(Nhận xét: Vì $x^2 - 3x + 2 = (x-1)(x-2)$ nên $y = x - 2$ với $x \ne 1$, do đó $y' = 1$).*

---

### Dạng 3: Đạo hàm hàm số lượng giác và hàm hợp

**Bài toán 3:** Tính đạo hàm của các hàm số sau:
a) $y = \sin(3x) + \cos(2x - \pi)$  
b) $y = \tan^2(x)$  
c) $y = x^2 \cos x$

**Lời giải:**
a) Áp dụng $(\sin u)' = u' \cos u$ và $(\cos u)' = -u' \sin u$:
$$(\sin 3x)' = (3x)' \cdot \cos(3x) = 3\cos(3x)$$
$$(\cos(2x - \pi))' = -(2x - \pi)' \cdot \sin(2x - \pi) = -2\sin(2x - \pi)$$
Vậy $y' = 3\cos(3x) - 2\sin(2x - \pi)$.

b) Đây là hàm hợp dạng $y = u^2$ với $u = \tan x$:
$$y' = 2u \cdot u' = 2\tan x \cdot (\tan x)' = 2\tan x \cdot \frac{1}{\cos^2 x} = \frac{2\sin x}{\cos^3 x}$$

c) Dạng tích $(uv)' = u'v + uv'$:
$$y' = (x^2)' \cos x + x^2 (\cos x)' = 2x\cos x - x^2 \sin x = x(2\cos x - x\sin x)$$

---

### Dạng 4: Đạo hàm hàm số mũ và lôgarit

**Bài toán 4:** Tính đạo hàm của các hàm số sau:
a) $y = e^{x^2 - 3x}$  
b) $y = \ln(2x + 5)$  
c) $y = 3^x \cdot \log_3 x$

**Lời giải:**
a) Dạng $y = e^u$ với $u = x^2 - 3x \implies u' = 2x - 3$:
$$y' = u' e^u = (2x - 3) e^{x^2 - 3x}$$

b) Dạng $y = \ln u$ với $u = 2x + 5 \implies u' = 2$:
$$y' = \frac{u'}{u} = \frac{2}{2x + 5}$$

c) Dạng tích $(uv)' = u'v + uv'$:
$$u = 3^x \implies u' = 3^x \ln 3$$
$$v = \log_3 x \implies v' = \frac{1}{x \ln 3}$$
$$y' = (3^x \ln 3) \cdot \log_3 x + 3^x \cdot \frac{1}{x \ln 3}$$
Vì $\log_3 x = \frac{\ln x}{\ln 3}$ nên số hạng đầu là $3^x \ln x$. Vậy:
$$y' = 3^x \left(\ln 3 \cdot \log_3 x + \frac{1}{x \ln 3}\right)$$

---

## V. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Đạo hàm của hàm số y = 3x^4 - 2x^3 + 5 bằng:",
  "options": [
    "A. y\u0027 = 12x^3 - 6x^2",
    "B. y\u0027 = 12x^3 - 6x^2 + 5",
    "C. y\u0027 = 7x^3 - 5x^2",
    "D. y\u0027 = 12x^4 - 6x^3"
  ],
  "answer": "A. y\u0027 = 12x^3 - 6x^2",
  "explanation": "y\u0027 = 3 · 4x^3 - 2 · 3x^2 + 0 = 12x^3 - 6x^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Đạo hàm của hàm số y = (2x - 1) / (x + 2) là:",
  "options": [
    "A. y\u0027 = 5 / (x + 2)^2",
    "B. y\u0027 = 3 / (x + 2)^2",
    "C. y\u0027 = -3 / (x + 2)^2",
    "D. y\u0027 = 5 / (x + 2)"
  ],
  "answer": "A. y\u0027 = 5 / (x + 2)^2",
  "explanation": "ad - bc = 2(2) - (-1)(1) = 4 + 1 = 5 => y\u0027 = 5 / (x + 2)^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đạo hàm của hàm số y = sin(2x) là:",
  "options": [
    "A. y\u0027 = 2 cos(2x)",
    "B. y\u0027 = cos(2x)",
    "C. y\u0027 = -2 cos(2x)",
    "D. y\u0027 = 2 sin(2x)"
  ],
  "answer": "A. y\u0027 = 2 cos(2x)",
  "explanation": "(sin u)\u0027 = u\u0027 · cos u = (2x)\u0027 · cos(2x) = 2 cos(2x)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Đạo hàm của hàm số y = e^(3x + 1) là:",
  "options": [
    "A. y\u0027 = 3 e^(3x + 1)",
    "B. y\u0027 = e^(3x + 1)",
    "C. y\u0027 = (3x + 1) e^(3x + 1)",
    "D. y\u0027 = 3 e^x"
  ],
  "answer": "A. y\u0027 = 3 e^(3x + 1)",
  "explanation": "(e^u)\u0027 = u\u0027 · e^u = 3 e^(3x + 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Đạo hàm của hàm số y = ln(x^2 + 1) là:",
  "options": [
    "A. y\u0027 = 2x / (x^2 + 1)",
    "B. y\u0027 = 1 / (x^2 + 1)",
    "C. y\u0027 = 2x (x^2 + 1)",
    "D. y\u0027 = x / (x^2 + 1)"
  ],
  "answer": "A. y\u0027 = 2x / (x^2 + 1)",
  "explanation": "(ln u)\u0027 = u\u0027 / u = (x^2 + 1)\u0027 / (x^2 + 1) = 2x / (x^2 + 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đạo hàm của hàm số y = √(3x - 2) tại điểm x = 2 bằng:",
  "options": [
    "A. 3/4",
    "B. 3/2",
    "C. 3/8",
    "D. 1/2"
  ],
  "answer": "A. 3/4",
  "explanation": "y\u0027 = (3x - 2)\u0027 / [2√(3x - 2)] = 3 / [2√(3x - 2)]. Tại x = 2: y\u0027(2) = 3 / [2√(4)] = 3/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho hàm số f(x) = x^3 - 3x^2 + 2. Nghiệm của phương trình f\u0027(x) = 0 là:",
  "options": [
    "A. x = 0 hoặc x = 2",
    "B. x = 1 hoặc x = 2",
    "C. x = 0 hoặc x = 3",
    "D. x = -1 hoặc x = 2"
  ],
  "answer": "A. x = 0 hoặc x = 2",
  "explanation": "f\u0027(x) = 3x^2 - 6x = 3x(x - 2). f\u0027(x) = 0 <=> 3x(x - 2) = 0 <=> x = 0 hoặc x = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Đạo hàm của hàm số y = 2^x bằng:",
  "options": [
    "A. 2^x · ln 2",
    "B. x · 2^(x - 1)",
    "C. 2^x / ln 2",
    "D. 2^x"
  ],
  "answer": "A. 2^x · ln 2",
  "explanation": "Công thức cơ bản: (a^x)\u0027 = a^x · ln a. Với a = 2: (2^x)\u0027 = 2^x ln 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hàm số y = cos(x^2). Đạo hàm y\u0027 bằng:",
  "options": [
    "A. -2x · sin(x^2)",
    "B. 2x · sin(x^2)",
    "C. -sin(x^2)",
    "D. -2x · cos(x^2)"
  ],
  "answer": "A. -2x · sin(x^2)",
  "explanation": "(cos u)\u0027 = -u\u0027 · sin u = -(x^2)\u0027 · sin(x^2) = -2x · sin(x^2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tiếp tuyến của đồ thị hàm số y = x^3 - 3x + 1 tại điểm có hoành độ x_0 = 2 có hệ số góc bằng:",
  "options": [
    "A. 9",
    "B. 3",
    "C. 12",
    "D. 6"
  ],
  "answer": "A. 9",
  "explanation": "y\u0027 = 3x^2 - 3. Hệ số góc k = y\u0027(2) = 3(2^2) - 3 = 12 - 3 = 9."
}'></div>

---

## VI. Ứng dụng Thực tế: Chi phí Biên & Doanh thu Biên trong Kinh tế học

Trong kinh tế học lượng giác và quản trị kinh doanh hiện đại, đạo hàm xuất hiện dưới khái niệm cốt lõi: **Đại lượng Biên (Marginal Analysis)**.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #10b981;">
<strong>Bài toán Kinh tế học Thực tế:</strong><br>
Một nhà máy sản xuất linh kiện điện tử ước tính tổng chi phí (tính bằng triệu đồng) để sản xuất ra $x$ nghìn linh kiện mỗi tháng được mô hình hóa bởi hàm số bậc ba:<br>
$$C(x) = 0.01 x^3 - 0.3 x^2 + 15 x + 200 \quad (x \ge 0)$$
Trong đó:
- $C'(x)$ được gọi là <strong>Chi phí biên (Marginal Cost)</strong>, biểu thị chi phí ước tính tăng thêm để sản xuất thêm $1$ đơn vị sản phẩm khi đang ở quy mô $x$.
- Số hạng tự do $200$ là chi phí cố định (mặt bằng, máy móc ban đầu).<br><br>
1. Tìm hàm chi phí biên $C'(x)$.<br>
2. Tính chi phí biên tại quy mô sản xuất $x = 10$ (nghìn sản phẩm) và $x = 20$ (nghìn sản phẩm).<br>
3. Ở quy mô nào thì chi phí biên đạt giá trị nhỏ nhất (tức chi phí gia tăng cho một đơn vị sản phẩm mới là rẻ nhất)?
</div>

> [!TIP]
> **Phân tích kinh tế lượng:**
> 1. Chi phí biên là đạo hàm của hàm tổng chi phí:
>    $$C'(x) = 0.01 \cdot (3x^2) - 0.3 \cdot (2x) + 15 = 0.03 x^2 - 0.6 x + 15 \quad (\text{triệu đồng})$$
> 2. Tính tại các mốc sản lượng:
>    - Tại $x = 10$: $C'(10) = 0.03(100) - 0.6(10) + 15 = 3 - 6 + 15 = 12$ triệu đồng.
>    - Tại $x = 20$: $C'(20) = 0.03(400) - 0.6(20) + 15 = 12 - 12 + 15 = 15$ triệu đồng.
> 3. Tìm giá trị nhỏ nhất của tam thức bậc hai $C'(x) = 0.03 x^2 - 0.6 x + 15$:
>    Đỉnh của parabol đạt tại:
>    $$x_{min} = -\frac{b}{2a} = -\frac{-0.6}{2 \times 0.03} = \frac{0.6}{0.06} = 10$$
>    Tại quy mô $x = 10$ nghìn sản phẩm, chi phí biên đạt mức tối ưu thấp nhất là $12$ triệu đồng/đơn vị. Sản xuất ít hơn hoặc nhiều hơn mốc này thì chi phí cận biên trên mỗi đơn vị làm thêm đều sẽ cao hơn!
