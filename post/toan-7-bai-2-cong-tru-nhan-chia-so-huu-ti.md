---
title: 'Toán 7 Bài 2: Cộng, trừ, nhân, chia số hữu tỉ - Quy tắc, Tính chất và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 7 Bài 2 Cộng trừ nhân chia số hữu tỉ: quy tắc thực hiện phép tính, tính chất giao hoán, kết hợp, phân phối, quy tắc chuyển vế, 5 chuyên đề Olympic (Telescoping sum, lũy thừa, chặn bất đẳng thức) và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Số hữu tỉ
  - Phép tính số hữu tỉ
  - Quy tắc chuyển vế
  - Tính hợp lý
  - Kết nối tri thức
grade: 7
---

# Bài 2. Cộng, trừ, nhân, chia số hữu tỉ

Ở bài học trước, chúng ta đã khám phá tập hợp các số hữu tỉ $\mathbb{Q}$ — nơi hội tụ của các số nguyên, phân số và số thập phân. 

Nhưng toán học không chỉ dừng lại ở việc gọi tên các con số, mà sức mạnh thực sự của nó nằm ở **các phép tính**: làm thế nào để cộng hai phân số âm, nhân chia các số thập phân có dấu, hay giải quyết các bài toán biến đổi biểu thức phức tạp trong thực tế đời sống và khoa học kỹ thuật?

Bài học hôm nay sẽ trang bị cho các em hệ thống quy tắc hoàn chỉnh về **cộng, trừ, nhân, chia số hữu tỉ**, quy tắc chuyển vế "thần thánh" trong đại số, cùng $5$ chuyên đề bồi dưỡng học sinh giỏi Olympic mở ra vẻ đẹp biến ảo của chuỗi sai phân hữu hạn và bất đẳng thức phân số!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 2: CỘNG, TRỪ, NHÂN, CHIA SỐ HỮU TỈ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phép cộng & phép trừ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Quy đồng mẫu số dương $m > 0$: $\frac{a}{m} \pm \frac{b}{m} = \frac{a \pm b}{m}$.<br>• Trừ số âm là cộng số đối: $x - (-y) = x + y$.<br>• Giao hoán, kết hợp, cộng với số $0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Phép nhân & phép chia</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Nhân: $\frac{a}{b} \cdot \frac{c}{d} = \frac{a \cdot c}{b \cdot d}$.<br>• Chia: $\frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}$ ($c \ne 0$).<br>• Phân phối: $a(b + c) = ab + ac$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Quy tắc chuyển vế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Chuyển vế thì đổi dấu: $x + a = b \iff x = b - a$.<br>• Chuyển vế có dấu trừ: $x - a = b \iff x = b + a$.<br>• Tích bằng $0$: $A \cdot B = 0 \iff A = 0$ hoặc $B = 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật nâng cao Olympic</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Sai phân hữu hạn (Telescoping sum): $\frac{1}{n(n+1)}$.<br>• Kỹ thuật khử hệ số cấp số nhân: $qS - S$.<br>• Đánh giá chặn tổng phân số bình phương.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Hãy khởi động cùng $5$ bài toán nền tảng từ lớp 6 để tạo đà cho bài học mới:

### Câu hỏi khởi động

1. **Quy đồng mẫu số các phân số sau:**
   - a) $\frac{7}{12}$ và $\frac{-5}{18}$.
   - b) $\frac{-3}{8}$ và $\frac{5}{-14}$.

2. **Thực hiện phép tính phân số:**
   - a) $\frac{5}{9} + \frac{-2}{9}$.
   - b) $\frac{-3}{5} - \frac{7}{10}$.

3. **Thực hiện phép nhân và chia phân số:**
   - a) $\frac{-4}{7} \cdot \frac{21}{8}$.
   - b) $\frac{-9}{14} : \frac{-6}{35}$.

4. **Đổi các số sau về dạng phân số tối giản:**
   $$0{,}75; \quad -1{,}6; \quad 2\frac{3}{5}; \quad -3\frac{1}{4}.$$

5. **Tìm số nguyên $x$ biết:**
   $$x + \frac{2}{3} = \frac{5}{6}.$$

---

### Lời giải gợi ý phần Khởi động

1. **Quy đồng:**
   - a) Mẫu số dương: $12$ và $18$. $\text{BCNN}(12; 18) = 36$.
     $$\frac{7}{12} = \frac{7 \cdot 3}{36} = \frac{21}{36}; \quad \frac{-5}{18} = \frac{-5 \cdot 2}{36} = \frac{-10}{36}.$$
   - b) Đưa về mẫu dương: $\frac{-3}{8}$ và $\frac{-5}{14}$. $\text{BCNN}(8; 14) = 56$.
     $$\frac{-3}{8} = \frac{-3 \cdot 7}{56} = \frac{-21}{56}; \quad \frac{-5}{14} = \frac{-5 \cdot 4}{56} = \frac{-20}{56}.$$

2. **Cộng trừ phân số:**
   - a) $\frac{5}{9} + \frac{-2}{9} = \frac{5 + (-2)}{9} = \frac{3}{9} = \frac{1}{3}$.
   - b) $\frac{-3}{5} - \frac{7}{10} = \frac{-6}{10} - \frac{7}{10} = \frac{-6 - 7}{10} = \frac{-13}{10}$.

3. **Nhân chia phân số:**
   - a) $\frac{-4}{7} \cdot \frac{21}{8} = \frac{(-4) \cdot 21}{7 \cdot 8} = \frac{(-1) \cdot 3}{1 \cdot 2} = \frac{-3}{2}$.
   - b) $\frac{-9}{14} : \frac{-6}{35} = \frac{-9}{14} \cdot \frac{35}{-6} = \frac{(-3) \cdot 5}{2 \cdot (-2)} = \frac{-15}{-4} = \frac{15}{4}$.

4. **Đổi về phân số tối giản:**
   - $0{,}75 = \frac{75}{100} = \frac{3}{4}$.
   - $-1{,}6 = \frac{-16}{10} = \frac{-8}{5}$.
   - $2\frac{3}{5} = \frac{2 \cdot 5 + 3}{5} = \frac{13}{5}$.
   - $-3\frac{1}{4} = -\frac{3 \cdot 4 + 1}{4} = \frac{-13}{4}$.

5. **Tìm $x$:**
   $$x = \frac{5}{6} - \frac{2}{3} = \frac{5}{6} - \frac{4}{6} = \frac{1}{6}.$$

---

## A. Lý thuyết trọng tâm

### 1. Phép cộng và phép trừ hai số hữu tỉ

> [!NOTE]
> **Quy tắc:**
> Để cộng (hoặc trừ) hai số hữu tỉ, ta viết chúng dưới dạng hai phân số có cùng một mẫu số dương rồi cộng (hoặc trừ) các tử số với nhau và giữ nguyên mẫu số.
> Với $x = \frac{a}{m}, \ y = \frac{b}{m}$ ($a, b \in \mathbb{Z}, \ m \in \mathbb{Z}^+$):
> $$x + y = \frac{a}{m} + \frac{b}{m} = \frac{a + b}{m}.$$
> $$x - y = \frac{a}{m} - \frac{b}{m} = \frac{a - b}{m}.$$

#### Phép trừ là phép cộng với số đối:
Phép trừ trong tập hợp $\mathbb{Q}$ thực chất là phép cộng với số đối:
$$x - y = x + (-y).$$
Đặc biệt, trừ đi một số âm là cộng với số đối của nó (thành cộng số dương):
$$x - (-y) = x + y.$$

**Ví dụ 1:** Thực hiện phép tính:
- a) $\frac{-4}{7} + \frac{3}{5}$.
- b) $\frac{5}{12} - \left(-\frac{7}{18}\right)$.

*Lời giải:*
- a) $\text{BCNN}(7; 5) = 35$:
  $$\frac{-4}{7} + \frac{3}{5} = \frac{-20}{35} + \frac{21}{35} = \frac{-20 + 21}{35} = \frac{1}{35}.$$
- b) Trừ số âm thành cộng số dương; $\text{BCNN}(12; 18) = 36$:
  $$\frac{5}{12} - \left(-\frac{7}{18}\right) = \frac{5}{12} + \frac{7}{18} = \frac{15}{36} + \frac{14}{36} = \frac{29}{36}.$$

---

### 2. Phép nhân và phép chia hai số hữu tỉ

> [!NOTE]
> **Quy tắc:**
> Viết hai số hữu tỉ dưới dạng phân số rồi áp dụng quy tắc nhân, chia phân số:
> Với $x = \frac{a}{b}, \ y = \frac{c}{d}$ ($b, d \ne 0$):
> $$x \cdot y = \frac{a}{b} \cdot \frac{c}{d} = \frac{a \cdot c}{b \cdot d}.$$
> Với $y \ne 0$ (tức $c \ne 0$):
> $$x : y = \frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c} = \frac{a \cdot d}{b \cdot c}.$$

#### Số nghịch đảo:
- Số nghịch đảo của số hữu tỉ $x \ne 0$ kí hiệu là $\frac{1}{x}$ (hoặc $x^{-1}$).
- Tích của hai số nghịch đảo nhau luôn bằng $1$: $x \cdot \frac{1}{x} = 1$.
- Số nghịch đảo của $\frac{a}{b}$ ($a, b \ne 0$) là $\frac{b}{a}$.
- **Lưu ý:** Số $0$ không có số nghịch đảo!

#### Quy tắc dấu khi nhân, chia:
- Cùng dấu $\implies$ Kết quả mang dấu **dương** ($+$):
  $$(+) \cdot (+) = (+); \quad (-) \cdot (-) = (+).$$
- Khác dấu $\implies$ Kết quả mang dấu **âm** ($-$):
  $$(+) \cdot (-) = (-); \quad (-) \cdot (+) = (-).$$

**Ví dụ 2:** Thực hiện phép tính:
- a) $\frac{-5}{8} \cdot \frac{12}{25}$.
- b) $\frac{-14}{15} : \left(-\frac{7}{10}\right)$.

*Lời giải:*
- a) Rút gọn chéo trước khi nhân:
  $$\frac{-5}{8} \cdot \frac{12}{25} = \frac{(-5) \cdot 12}{8 \cdot 25} = \frac{(-1) \cdot 3}{2 \cdot 5} = \frac{-3}{10}.$$
- b) Chia hai số cùng dấu âm cho kết quả dương:
  $$\frac{-14}{15} : \left(-\frac{7}{10}\right) = \frac{-14}{15} \cdot \frac{-10}{7} = \frac{(-2) \cdot (-2)}{3 \cdot 1} = \frac{4}{3}.$$

---

### 3. Tính chất của các phép tính trong $\mathbb{Q}$

Phép cộng và phép nhân số hữu tỉ kế thừa trọn vẹn các tính chất đẹp đẽ của số nguyên:

| Tính chất | Phép cộng | Phép nhân |
| :--- | :---: | :---: |
| **Giao hoán** | $x + y = y + x$ | $x \cdot y = y \cdot x$ |
| **Kết hợp** | $(x + y) + z = x + (y + z)$ | $(x \cdot y) \cdot z = x \cdot (y \cdot z)$ |
| **Cộng với 0 / Nhân với 1** | $x + 0 = x$ | $x \cdot 1 = x$ |
| **Cộng với số đối / Nhân với nghịch đảo** | $x + (-x) = 0$ | $x \cdot \frac{1}{x} = 1$ ($x \ne 0$) |
| **Tính chất phân phối** | \multicolumn{2}{c|}{$x \cdot (y + z) = x \cdot y + x \cdot z$} |

> [!TIP]
> **Ứng dụng tính hợp lý:**
> 1. Nhóm các số có cùng mẫu số hoặc có tổng/hiệu là số nguyên ($1, -1, 0$).
> 2. Đặt thừa số chung khi gặp dạng $a \cdot b + a \cdot c = a \cdot (b + c)$.
> 3. Phân phối phép chia cho một số: $(b + c) : a = b : a + c : a$ (chỉ đúng khi số chia ở sau ngoặc, không được áp dụng $a : (b + c)$).

**Ví dụ 3:** Tính một cách hợp lý:
$$M = \frac{5}{13} \cdot \frac{-7}{9} + \frac{5}{13} \cdot \frac{-11}{9} + 1\frac{5}{13}.$$

*Lời giải:*
Ta thấy thừa số $\frac{5}{13}$ xuất hiện chung ở hai tích đầu, và $1\frac{5}{13} = 1 + \frac{5}{13}$:
$$M = \frac{5}{13} \cdot \left(\frac{-7}{9} + \frac{-11}{9}\right) + 1 + \frac{5}{13}$$
$$M = \frac{5}{13} \cdot \left(\frac{-18}{9}\right) + \frac{5}{13} + 1$$
$$M = \frac{5}{13} \cdot (-2) + \frac{5}{13} \cdot 1 + 1 = \frac{5}{13} \cdot (-2 + 1) + 1$$
$$M = \frac{5}{13} \cdot (-1) + 1 = \frac{-5}{13} + \frac{13}{13} = \frac{8}{13}.$$

---

### 4. Quy tắc chuyển vế

> [!IMPORTANT]
> **Quy tắc chuyển vế:**
> Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải **đổi dấu** số hạng đó (dấu $+$ đổi thành dấu $-$, dấu $-$ đổi thành dấu $+$).
> $$x + a = b \iff x = b - a.$$
> $$x - a = b \iff x = b + a.$$

#### Định lý về tích bằng 0:
Nếu tích của hai số hữu tỉ bằng $0$ thì ít nhất một trong hai số đó phải bằng $0$:
$$A \cdot B = 0 \iff A = 0 \quad \text{hay} \quad B = 0.$$

**Ví dụ 4:** Tìm $x$, biết:
- a) $x - \frac{3}{4} = \frac{-5}{6}$.
- b) $\left(x - \frac{2}{3}\right)\left(2x + \frac{4}{5}\right) = 0$.

*Lời giải:*
- a) Chuyển $-\frac{3}{4}$ sang vế phải và đổi dấu thành $+\frac{3}{4}$:
  $$x = \frac{-5}{6} + \frac{3}{4} = \frac{-10}{12} + \frac{9}{12} = \frac{-1}{12}.$$
- b) Tích bằng $0$, xét hai trường hợp:
  - TH1: $x - \frac{2}{3} = 0 \iff x = \frac{2}{3}$.
  - TH2: $2x + \frac{4}{5} = 0 \iff 2x = -\frac{4}{5} \iff x = -\frac{4}{5} : 2 = \frac{-2}{5}$.
  Vậy $x = \frac{2}{3}$ hoặc $x = \frac{-2}{5}$.

---

### 5. Những sai lầm kinh điển cần tránh

> [!WARNING]
> 1. **Quên đổi dấu khi chuyển vế:** Rất nhiều bạn viết $x - \frac{1}{2} = \frac{3}{4} \implies x = \frac{3}{4} - \frac{1}{2}$ (sai). Phải là $x = \frac{3}{4} + \frac{1}{2}$.
> 2. **Phá ngoặc có dấu trừ đằng trước không đổi dấu:** $-(a - b) = -a + b$, nếu viết thành $-a - b$ là sai hoàn toàn.
> 3. **Nhầm lẫn tính chất phân phối của phép chia:**
>    - $(a + b) : c = a : c + b : c$ $\implies$ **Đúng**.
>    - $c : (a + b) = c : a + c : b$ $\implies$ **SAI NGHIÊM TRỌNG!** (Ví dụ $12 : (2 + 4) = 12 : 6 = 2 \ne 12 : 2 + 12 : 4 = 6 + 3 = 9$).
> 4. **Trừ hỗn số có phần phân số lớn hơn:** Với $3\frac{1}{4} - 1\frac{3}{4}$, không được lấy phần nguyên trừ phần nguyên và phần phân số trừ phần phân số theo kiểu lấy số nhỏ trừ số lớn bừa bãi. Cách an toàn nhất là đổi toàn bộ về phân số rồi trừ!

---

## B. Các dạng bài tập thường gặp & Phương pháp giải

### Dạng 1: Thực hiện phép tính cơ bản

#### Phương pháp giải:
- Đổi các số thập phân, hỗn số về dạng phân số tối giản.
- Với phép cộng/trừ: quy đồng mẫu số dương.
- Với phép nhân/chia: rút gọn chéo các thừa số trước khi nhân.
- Thực hiện theo thứ tự: trong ngoặc trước, ngoài ngoặc sau; nhân chia trước, cộng trừ sau.

**Bài 1.1:** Tính giá trị các biểu thức sau:
- a) $A = \frac{-3}{8} + \frac{5}{12} - \frac{7}{16}$.
- b) $B = 1{,}25 \cdot \left(-\frac{8}{15}\right) : \frac{2}{3}$.
- c) $C = \left(\frac{2}{3} - \frac{5}{6}\right) : \left(\frac{3}{4} + \frac{-1}{2}\right)$.

*Lời giải:*
- a) $\text{BCNN}(8; 12; 16) = 48$:
  $$A = \frac{-3 \cdot 6}{48} + \frac{5 \cdot 4}{48} - \frac{7 \cdot 3}{48} = \frac{-18 + 20 - 21}{48} = \frac{-19}{48}.$$
- b) Đổi $1{,}25 = \frac{5}{4}$:
  $$B = \frac{5}{4} \cdot \left(\frac{-8}{15}\right) \cdot \frac{3}{2} = \frac{5 \cdot (-8) \cdot 3}{4 \cdot 15 \cdot 2} = \frac{-120}{120} = -1.$$
- c) Tính từng ngoặc:
  - Ngoặc 1: $\frac{2}{3} - \frac{5}{6} = \frac{4}{6} - \frac{5}{6} = \frac{-1}{6}$.
  - Ngoặc 2: $\frac{3}{4} + \frac{-1}{2} = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}$.
  $$C = \frac{-1}{6} : \frac{1}{4} = \frac{-1}{6} \cdot 4 = \frac{-4}{6} = \frac{-2}{3}.$$

---

### Dạng 2: Tính nhanh, tính hợp lý

#### Phương pháp giải:
- Nhóm các phân số có cùng mẫu số hoặc mẫu số là ước/bội của nhau.
- Áp dụng phân phối $a \cdot b + a \cdot c = a \cdot (b + c)$ hoặc $a \cdot b - a \cdot c = a \cdot (b - c)$.
- Kết hợp các số có tổng là $0$ hoặc là số nguyên.

**Bài 2.1:** Tính hợp lý:
- a) $H = \left(\frac{3}{7} + \frac{-5}{11}\right) + \left(\frac{4}{7} + \frac{-6}{11}\right)$.
- b) $K = \frac{4}{9} \cdot \frac{-13}{17} + \frac{4}{9} \cdot \frac{-4}{17} + \frac{13}{9}$.
- c) $L = \left(\frac{11}{12} : \frac{3}{5}\right) - \left(\frac{5}{12} : \frac{3}{5}\right)$.

*Lời giải:*
- a) Phá ngoặc và nhóm các số cùng mẫu:
  $$H = \left(\frac{3}{7} + \frac{4}{7}\right) + \left(\frac{-5}{11} + \frac{-6}{11}\right) = \frac{7}{7} + \frac{-11}{11} = 1 + (-1) = 0.$$
- b) Đặt thừa số chung $\frac{4}{9}$:
  $$K = \frac{4}{9} \cdot \left(\frac{-13}{17} + \frac{-4}{17}\right) + \frac{13}{9} = \frac{4}{9} \cdot \left(\frac{-17}{17}\right) + \frac{13}{9}$$
  $$K = \frac{4}{9} \cdot (-1) + \frac{13}{9} = \frac{-4}{9} + \frac{13}{9} = \frac{9}{9} = 1.$$
- c) Đặt phép chia chung $: \frac{3}{5}$ ra sau ngoặc:
  $$L = \left(\frac{11}{12} - \frac{5}{12}\right) : \frac{3}{5} = \frac{6}{12} : \frac{3}{5} = \frac{1}{2} \cdot \frac{5}{3} = \frac{5}{6}.$$

---

### Dạng 3: Tìm $x$ trong đẳng thức

#### Phương pháp giải:
1. Đưa các số hạng chứa $x$ về một vế, các hằng số về vế còn lại (chú ý đổi dấu khi chuyển vế).
2. Dạng $a \cdot x = b \implies x = b : a$ ($a \ne 0$).
3. Dạng $a : x = b \implies x = a : b$ ($b \ne 0$).
4. Dạng tích $A(x) \cdot B(x) = 0 \implies A(x) = 0$ hoặc $B(x) = 0$.

**Bài 3.1:** Tìm $x$ biết:
- a) $\frac{2}{5} - x = \frac{1}{3}$.
- b) $\frac{3}{4} + \frac{1}{4} : x = \frac{5}{6}$.
- c) $\left(2x - \frac{1}{3}\right)\left(\frac{3}{4}x + \frac{1}{2}\right) = 0$.

*Lời giải:*
- a) Chuyển $-x$ sang vế phải và $\frac{1}{3}$ sang vế trái:
  $$x = \frac{2}{5} - \frac{1}{3} = \frac{6}{15} - \frac{5}{15} = \frac{1}{15}.$$
- b) Chuyển $\frac{3}{4}$ sang vế phải:
  $$\frac{1}{4} : x = \frac{5}{6} - \frac{3}{4} = \frac{10}{12} - \frac{9}{12} = \frac{1}{12}.$$
  Tìm $x$ (số chia):
  $$x = \frac{1}{4} : \frac{1}{12} = \frac{1}{4} \cdot 12 = 3.$$
- c) Tích bằng $0$:
  - TH1: $2x - \frac{1}{3} = 0 \iff 2x = \frac{1}{3} \iff x = \frac{1}{6}$.
  - TH2: $\frac{3}{4}x + \frac{1}{2} = 0 \iff \frac{3}{4}x = -\frac{1}{2} \iff x = -\frac{1}{2} : \frac{3}{4} = -\frac{1}{2} \cdot \frac{4}{3} = \frac{-2}{3}$.
  Vậy $x = \frac{1}{6}$ hoặc $x = \frac{-2}{3}$.

---

### Dạng 4: Thứ tự thực hiện phép tính và dấu ngoặc phức tạp

#### Phương pháp giải:
Thực hiện theo thứ tự:
1. Trong ngoặc tròn $(\dots)$ $\to$ ngoặc vuông $[\dots]$ $\to$ ngoặc nhọn $\{\dots\}$.
2. Lũy thừa (nếu có) $\to$ Nhân và chia $\to$ Cộng và trừ.

**Bài 4.1:** Thực hiện phép tính:
$$D = 2 - \left[\frac{3}{4} - \left(\frac{1}{2} - \frac{2}{3}\right)\right] : \frac{11}{12}.$$

*Lời giải:*
- Tính trong ngoặc tròn:
  $$\frac{1}{2} - \frac{2}{3} = \frac{3}{6} - \frac{4}{6} = \frac{-1}{6}.$$
- Tính trong ngoặc vuông:
  $$\frac{3}{4} - \left(\frac{-1}{6}\right) = \frac{3}{4} + \frac{1}{6} = \frac{9}{12} + \frac{2}{12} = \frac{11}{12}.$$
- Thực hiện phép chia trước:
  $$\left[\frac{11}{12}\right] : \frac{11}{12} = 1.$$
- Cuối cùng thực hiện phép trừ:
  $$D = 2 - 1 = 1.$$

---

### Dạng 5: Bài toán thực tế liên môn

#### Phương pháp giải:
- Đọc kỹ đề bài, xác định rõ các đại lượng cho trước và đại lượng cần tìm.
- Thiết lập biểu thức số học gồm các phép tính cộng, trừ, nhân, chia số hữu tỉ.
- Tính toán chính xác và trả lời kèm đơn vị rõ ràng.

**Bài 5.1:** Một người nông dân thu hoạch được $45$ tạ thanh long. 
- Ngày thứ nhất, ông bán được $\frac{2}{5}$ số thanh long với giá $18\,000$ đồng/kg.
- Ngày thứ hai, ông bán được $\frac{2}{3}$ số thanh long còn lại với giá $15\,000$ đồng/kg.
- Số thanh long còn lại sau hai ngày được dùng để làm mứt.
1. Tính khối lượng thanh long được dùng để làm mứt.
2. Tính tổng số tiền người nông dân thu được sau hai ngày bán.

*Lời giải:*
Đổi $45$ tạ $= 4\,500\text{ kg}$.
1. Tính khối lượng:
   - Số thanh long bán ngày thứ nhất:
     $$4\,500 \cdot \frac{2}{5} = 1\,800\text{ kg}.$$
   - Số thanh long còn lại sau ngày thứ nhất:
     $$4\,500 - 1\,800 = 2\,700\text{ kg}.$$
   - Số thanh long bán ngày thứ hai:
     $$2\,700 \cdot \frac{2}{3} = 1\,800\text{ kg}.$$
   - Số thanh long dùng để làm mứt là:
     $$2\,700 - 1\,800 = 900\text{ kg}.$$
2. Tính số tiền thu được:
   - Tiền bán ngày thứ nhất:
     $$1\,800 \cdot 18\,000 = 32\,400\,000\text{ (dong)}.$$
     (Thu được $32\,400\,000$ đồng).
   - Tiền bán ngày thứ hai:
     $$1\,800 \cdot 15\,000 = 27\,000\,000\text{ (dong)}.$$
     (Thu được $27\,000\,000$ đồng).
   - Tổng số tiền thu được:
     $$32\,400\,000 + 27\,000\,000 = 59\,400\,000\text{ (dong)}.$$
     (Tổng cộng $59\,400\,000$ đồng).

---

## C. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Tính tổng sai phân hữu hạn (Telescoping Sum)

> [!TIP]
> **Công thức sai phân tổng quát:**
> Với $k, n \in \mathbb{Z}^+$:
> $$\frac{k}{n(n + k)} = \frac{1}{n} - \frac{1}{n + k}.$$
> Đặc biệt khi $k = 1$:
> $$\frac{1}{n(n + 1)} = \frac{1}{n} - \frac{1}{n + 1}.$$

**Bài toán Olympic 1:** Tính tổng:
$$S_1 = \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} + \dots + \frac{1}{2025 \cdot 2026}.$$

*Lời giải:*
Áp dụng công thức sai phân cho từng số hạng:
$$\frac{1}{1 \cdot 2} = 1 - \frac{1}{2}$$
$$\frac{1}{2 \cdot 3} = \frac{1}{2} - \frac{1}{3}$$
$$\dots$$
$$\frac{1}{2025 \cdot 2026} = \frac{1}{2025} - \frac{1}{2026}$$

Cộng vế theo vế, các số hạng trung gian tự triệt tiêu nhau:
$$S_1 = 1 - \frac{1}{2} + \frac{1}{2} - \frac{1}{3} + \dots + \frac{1}{2025} - \frac{1}{2026}$$
$$S_1 = 1 - \frac{1}{2026} = \frac{2025}{2026}.$$

**Mở rộng (Khoảng cách ở mẫu là $k = 3$):**
$$S_2 = \frac{1}{1 \cdot 4} + \frac{1}{4 \cdot 7} + \frac{1}{7 \cdot 10} + \dots + \frac{1}{97 \cdot 100}.$$
Nhân cả hai vế với $3$:
$$3S_2 = \frac{3}{1 \cdot 4} + \frac{3}{4 \cdot 7} + \dots + \frac{3}{97 \cdot 100}$$
$$3S_2 = \left(1 - \frac{1}{4}\right) + \left(\frac{1}{4} - \frac{1}{7}\right) + \dots + \left(\frac{1}{97} - \frac{1}{100}\right) = 1 - \frac{1}{100} = \frac{99}{100}$$
$$\implies S_2 = \frac{99}{100} : 3 = \frac{33}{100}.$$

---

### Chuyên đề 2: Kỹ thuật nhân hệ số khử chuỗi cấp số nhân

Phương pháp này dùng để tính tổng các phân số có mẫu số tăng theo cấp số nhân: $a, a \cdot q, a \cdot q^2, \dots$

**Bài toán Olympic 2:** Tính giá trị biểu thức:
$$A = \frac{1}{3} + \frac{1}{3^2} + \frac{1}{3^3} + \dots + \frac{1}{3^{100}}.$$

*Lời giải:*
Nhân cả hai vế của $A$ với công bội $q = 3$:
$$3A = 3 \cdot \left(\frac{1}{3} + \frac{1}{3^2} + \frac{1}{3^3} + \dots + \frac{1}{3^{100}}\right)$$
$$3A = 1 + \frac{1}{3} + \frac{1}{3^2} + \dots + \frac{1}{3^{99}}.$$

Lấy biểu thức $3A$ trừ đi biểu thức $A$:
$$3A - A = \left(1 + \frac{1}{3} + \frac{1}{3^2} + \dots + \frac{1}{3^{99}}\right) - \left(\frac{1}{3} + \frac{1}{3^2} + \dots + \frac{1}{3^{100}}\right)$$
$$2A = 1 - \frac{1}{3^{100}} = \frac{3^{100} - 1}{3^{100}}$$
$$\implies A = \frac{3^{100} - 1}{2 \cdot 3^{100}}.$$

---

### Chuyên đề 3: Rút gọn biểu thức phân số nhiều tầng (Tử và mẫu cùng quy luật)

Trong các bài toán thi học sinh giỏi cấp Huyện và Tỉnh, dạng toán tỉ số của hai tổng có cấu trúc đồng dạng xuất hiện rất thường xuyên.

**Bài toán Olympic 3:** Tính giá trị của biểu thức:
$$P = \frac{\frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \dots + \frac{1}{200}}{\frac{1}{199} + \frac{2}{198} + \frac{3}{197} + \dots + \frac{199}{1}}.$$

*Phân tích phương pháp:*
Quan sát mẫu số, ta cộng thêm $1$ vào từng số hạng (rồi trừ đi tổng số đơn vị đã thêm) để đưa các tử số về cùng một số $200$:

*Lời giải:*
Xét mẫu số $M$:
$$M = \frac{1}{199} + \frac{2}{198} + \frac{3}{197} + \dots + \frac{199}{1}$$
Có $199$ số hạng. Ta cộng $1$ vào mỗi số hạng từ số hạng thứ $1$ đến số hạng thứ $198$, riêng số hạng cuối cùng $\frac{199}{1} = 199$ ta tách thành $198$ số $1$ và dư $1$:
$$M = \left(\frac{1}{199} + 1\right) + \left(\frac{2}{198} + 1\right) + \dots + \left(\frac{198}{2} + 1\right) + 1$$
$$M = \frac{200}{199} + \frac{200}{198} + \dots + \frac{200}{2} + \frac{200}{200}$$
Đặt $200$ làm thừa số chung:
$$M = 200 \cdot \left(\frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{199} + \frac{1}{200}\right).$$

Khi đó, tử số chính là phần trong ngoặc của mẫu số:
$$P = \frac{\frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{200}}{200 \cdot \left(\frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{200}\right)} = \frac{1}{200}.$$

---

### Chuyên đề 4: Phương trình chứa dấu giá trị tuyệt đối trong $\mathbb{Q}$

> [!NOTE]
> Nhắc lại định nghĩa:
> $$|A| = \begin{cases} A & \text{khi } A \ge 0 \\ -A & \text{khi } A < 0 \end{cases}$$
> Với $k > 0$: $|A| = k \iff A = k$ hoặc $A = -k$.
> Nếu $k < 0$: Phương trình $|A| = k$ vô nghiệm.

**Bài toán Olympic 4:** Tìm $x \in \mathbb{Q}$ thỏa mãn:
$$2\left|x - \frac{3}{5}\right| + \frac{1}{4} = \frac{5}{6}.$$

*Lời giải:*
Chuyển vế:
$$2\left|x - \frac{3}{5}\right| = \frac{5}{6} - \frac{1}{4} = \frac{10}{12} - \frac{3}{12} = \frac{7}{12}.$$
Chia hai vế cho $2$:
$$\left|x - \frac{3}{5}\right| = \frac{7}{12} : 2 = \frac{7}{24}.$$

Vì $\frac{7}{24} > 0$, ta có hai trường hợp:
- **Trường hợp 1:**
  $$x - \frac{3}{5} = \frac{7}{24} \iff x = \frac{7}{24} + \frac{3}{5} = \frac{35}{120} + \frac{72}{120} = \frac{107}{120}.$$
- **Trường hợp 2:**
  $$x - \frac{3}{5} = -\frac{7}{24} \iff x = -\frac{7}{24} + \frac{3}{5} = \frac{-35}{120} + \frac{72}{120} = \frac{37}{120}.$$

Vậy $x \in \left\{\frac{37}{120}; \frac{107}{120}\right\}$.

---

### Chuyên đề 5: Đánh giá chặn giá trị tổng phân số (Bất đẳng thức phân số)

Một kỹ năng đỉnh cao trong các kỳ thi học sinh giỏi là so sánh một tổng không tính được chính xác bằng cách làm trội hoặc làm giảm từng số hạng.

**Bài toán Olympic 5:** Chứng minh rằng tổng sau luôn nhỏ hơn $1$:
$$T = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \dots + \frac{1}{2026^2} < 1.$$

*Lời giải:*
Ta có nhận xét quan trọng: Với mọi $n \ge 2$, ta có:
$$n^2 > n(n - 1) \iff \frac{1}{n^2} < \frac{1}{n(n - 1)} = \frac{1}{n - 1} - \frac{1}{n}.$$

Áp dụng bất đẳng thức làm trội này cho từng số hạng của $T$:
$$\frac{1}{2^2} < \frac{1}{1 \cdot 2} = 1 - \frac{1}{2}$$
$$\frac{1}{3^2} < \frac{1}{2 \cdot 3} = \frac{1}{2} - \frac{1}{3}$$
$$\frac{1}{4^2} < \frac{1}{3 \cdot 4} = \frac{1}{3} - \frac{1}{4}$$
$$\dots$$
$$\frac{1}{2026^2} < \frac{1}{2025 \cdot 2026} = \frac{1}{2025} - \frac{1}{2026}$$

Cộng tất cả các bất đẳng thức cùng chiều trên lại:
$$T < \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \dots + \left(\frac{1}{2025} - \frac{1}{2026}\right)$$
$$T < 1 - \frac{1}{2026}.$$
Vì $\frac{1}{2026} > 0$ nên $1 - \frac{1}{2026} < 1$.
Do đó:
$$T < 1.$$
(Điều phải chứng minh).

---

## D. 10 Câu hỏi Trắc nghiệm Tương tác (Quiz)

```quiz
type: choice
question: 'Kết quả của phép tính $\frac{-5}{9} + \frac{2}{3}$ là:'
options:
  - '$\frac{-3}{9}$'
  - '$\frac{1}{9}$'
  - '$\frac{-1}{9}$'
  - '$\frac{1}{3}$'
answer: 2
explanation: 'Quy đồng mẫu: $\frac{-5}{9} + \frac{6}{9} = \frac{-5 + 6}{9} = \frac{1}{9}$.'
```

```quiz
type: choice
question: 'Giá trị của phép tính $\frac{3}{8} - \left(-\frac{5}{12}\right)$ là:'
options:
  - '$\frac{-1}{24}$'
  - '$\frac{19}{24}$'
  - '$\frac{-19}{24}$'
  - '$\frac{1}{24}$'
answer: 2
explanation: 'Trừ số âm thành cộng: $\frac{3}{8} + \frac{5}{12} = \frac{9}{24} + \frac{10}{24} = \frac{19}{24}$.'
```

```quiz
type: choice
question: 'Tích $\frac{-6}{25} \cdot \frac{-15}{14}$ bằng:'
options:
  - '$\frac{9}{35}$'
  - '$\frac{-9}{35}$'
  - '$\frac{18}{35}$'
  - '$\frac{-18}{35}$'
answer: 1
explanation: 'Tích hai số âm là số dương: $\frac{(-6) \cdot (-15)}{25 \cdot 14} = \frac{(-3) \cdot (-3)}{5 \cdot 7} = \frac{9}{35}$.'
```

```quiz
type: choice
question: 'Số nghịch đảo của $-2\frac{1}{4}$ là:'
options:
  - '$2\frac{1}{4}$'
  - '$\frac{-4}{9}$'
  - '$\frac{4}{9}$'
  - '$\frac{-9}{4}$'
answer: 2
explanation: 'Đổi hỗn số: $-2\frac{1}{4} = -\frac{9}{4}$. Số nghịch đảo của $-\frac{9}{4}$ là $-\frac{4}{9}$.'
```

```quiz
type: choice
question: 'Tìm $x$ biết $x + \frac{3}{5} = \frac{-1}{2}$:'
options:
  - '$\frac{-1}{10}$'
  - '$\frac{1}{10}$'
  - '$\frac{-11}{10}$'
  - '$\frac{11}{10}$'
answer: 3
explanation: 'Chuyển vế: $x = \frac{-1}{2} - \frac{3}{5} = \frac{-5}{10} - \frac{6}{10} = \frac{-11}{10}$.'
```

```quiz
type: choice
question: 'Tính nhanh biểu thức $M = \frac{7}{15} \cdot \frac{-4}{11} + \frac{7}{15} \cdot \frac{-7}{11}$:'
options:
  - '$\frac{-7}{15}$'
  - '$\frac{7}{15}$'
  - '$0$'
  - '$-1$'
answer: 1
explanation: 'Đặt $\frac{7}{15}$ làm thừa số chung: $M = \frac{7}{15}\left(\frac{-4}{11} + \frac{-7}{11}\right) = \frac{7}{15} \cdot (-1) = \frac{-7}{15}$.'
```

```quiz
type: choice
question: 'Thực hiện phép tính $\left(\frac{-2}{3}\right) : 4 + \frac{5}{6}$:'
options:
  - '$\frac{2}{3}$'
  - '$\frac{-2}{3}$'
  - '$\frac{1}{2}$'
  - '$1$'
answer: 1
explanation: 'Thực hiện chia trước: $\left(\frac{-2}{3}\right) \cdot \frac{1}{4} = \frac{-1}{6}$. Sau đó cộng: $\frac{-1}{6} + \frac{5}{6} = \frac{4}{6} = \frac{2}{3}$.'
```

```quiz
type: choice
question: 'Số giá trị của $x$ thỏa mãn $\left(x - \frac{1}{2}\right)\left(x + \frac{3}{4}\right) = 0$ là:'
options:
  - '$1$'
  - '$2$'
  - '$0$'
  - 'Vô số'
answer: 2
explanation: 'Tích bằng 0 khi $x - \frac{1}{2} = 0 \iff x = \frac{1}{2}$ hoặc $x + \frac{3}{4} = 0 \iff x = -\frac{3}{4}$. Có đúng 2 giá trị của $x$.'
```

```quiz
type: choice
question: 'Giá trị của tổng $S = \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} + \frac{1}{4 \cdot 5}$ là:'
options:
  - '$\frac{4}{5}$'
  - '$\frac{5}{6}$'
  - '$\frac{3}{4}$'
  - '$\frac{1}{5}$'
answer: 1
explanation: 'Áp dụng telescoping sum: $S = 1 - \frac{1}{5} = \frac{4}{5}$.'
```

```quiz
type: choice
question: 'Biết $\frac{3}{4} : x = \frac{-9}{8}$. Giá trị của $x$ là:'
options:
  - '$\frac{-27}{32}$'
  - '$\frac{-2}{3}$'
  - '$\frac{2}{3}$'
  - '$\frac{-3}{2}$'
answer: 2
explanation: 'Số chia $x = \frac{3}{4} : \left(\frac{-9}{8}\right) = \frac{3}{4} \cdot \left(\frac{-8}{9}\right) = \frac{-2}{3}$.'
```

---

## E. Phiếu bài tập tự luyện toàn diện (Có lời giải)

### Bài 1. Tính giá trị biểu thức cơ bản
Thực hiện các phép tính sau:
- a) $\frac{-7}{12} + \frac{5}{18}$;
- b) $\frac{3}{8} - \frac{-5}{6} + \frac{-7}{12}$;
- c) $\frac{-15}{28} \cdot \frac{14}{-25}$;
- d) $\frac{-8}{15} : \left(-1\frac{1}{5}\right)$.

### Bài 2. Tính nhanh và hợp lý
Tính giá trị các biểu thức một cách thuận tiện nhất:
- a) $A = \frac{3}{7} + \frac{-5}{9} + \frac{4}{7} + \frac{-4}{9}$;
- b) $B = \frac{5}{13} \cdot \frac{-8}{19} + \frac{5}{13} \cdot \frac{-11}{19} + \frac{8}{13}$;
- c) $C = \left(\frac{13}{15} + \frac{7}{12}\right) - \left(\frac{8}{15} - \frac{5}{12}\right)$.

### Bài 3. Tìm $x$
Tìm số hữu tỉ $x$ biết:
- a) $x + \frac{4}{7} = \frac{-2}{3}$;
- b) $\frac{5}{8} - x = \frac{-3}{4}$;
- c) $\frac{3}{5} \cdot x - \frac{1}{2} = \frac{-7}{10}$;
- d) $\frac{2}{3} : x + \frac{1}{4} = \frac{-5}{12}$.

### Bài 4. Tìm $x$ trong phương trình tích và lũy thừa bậc 2
Tìm $x$ biết:
- a) $\left(x - \frac{3}{5}\right)\left(2x + \frac{1}{3}\right) = 0$;
- b) $\left(x + \frac{1}{2}\right)^2 = \frac{16}{25}$;
- c) $\left(2x - \frac{1}{3}\right)^2 = 0$.

### Bài 5. Tìm $x$ chứa dấu giá trị tuyệt đối
Tìm $x \in \mathbb{Q}$ biết:
- a) $\left|x - \frac{2}{3}\right| = \frac{1}{2}$;
- b) $\left|x + \frac{3}{4}\right| - \frac{1}{3} = 0$;
- c) $3\left|2x - 1\right| + \frac{5}{2} = 1$.

### Bài 6. Bài toán thực tế 1: Bình chứa nước
Một bể nước hình hộp chữ nhật đang chứa lượng nước bằng $\frac{3}{8}$ dung tích bể. Người ta mở một vòi nước chảy vào bể, mỗi giờ chảy được $\frac{1}{6}$ dung tích bể.
- a) Sau $2$ giờ mở vòi, lượng nước trong bể chiếm bao nhiêu phần dung tích bể?
- b) Cần mở vòi thêm bao nhiêu lâu nữa thì bể đầy nước?

### Bài 7. Bài toán thực tế 2: Quản lý ngân sách
Bạn Mai được mẹ cho $300\,000$ đồng để chuẩn bị năm học mới.
- Mai dùng $\frac{1}{3}$ số tiền để mua sách giáo khoa.
- Mai dùng $\frac{2}{5}$ số tiền còn lại để mua vở viết.
- Số tiền còn lại Mai dùng mua bút và thước kẻ.
Hỏi Mai còn lại bao nhiêu tiền để mua bút và thước kẻ?

### Bài 8. Sai phân hữu hạn mở rộng
Tính tổng sau:
$$S = \frac{2}{1 \cdot 3} + \frac{2}{3 \cdot 5} + \frac{2}{5 \cdot 7} + \dots + \frac{2}{99 \cdot 101}.$$

### Bài 9. Phân thức đối xứng
Tính giá trị của biểu thức:
$$K = \frac{\frac{2}{3} - \frac{2}{5} + \frac{2}{7}}{\frac{4}{3} - \frac{4}{5} + \frac{4}{7}} + \frac{\frac{1}{4} - \frac{1}{5} + \frac{1}{6}}{\frac{3}{4} - \frac{3}{5} + \frac{3}{6}}.$$

### Bài 10. Tìm giá trị nhỏ nhất của biểu thức
Cho biểu thức $A = \left|x - \frac{3}{4}\right| + \frac{2}{5}$.
- a) Tìm giá trị nhỏ nhất của biểu thức $A$.
- b) Giá trị nhỏ nhất đó đạt được khi $x$ bằng bao nhiêu?

---

### Hướng dẫn giải chi tiết Phiếu bài tập

#### Bài 1:
- a) $\text{BCNN}(12; 18) = 36$:
  $$\frac{-7}{12} + \frac{5}{18} = \frac{-21}{36} + \frac{10}{36} = \frac{-11}{36}.$$
- b) $\text{BCNN}(8; 6; 12) = 24$:
  $$\frac{3}{8} + \frac{5}{6} - \frac{7}{12} = \frac{9 + 20 - 14}{24} = \frac{15}{24} = \frac{5}{8}.$$
- c) Rút gọn trước khi nhân:
  $$\frac{-15}{28} \cdot \frac{14}{-25} = \frac{(-3) \cdot 1}{2 \cdot (-5)} = \frac{-3}{-10} = \frac{3}{10}.$$
- d) Đổi hỗn số $-1\frac{1}{5} = \frac{-6}{5}$:
  $$\frac{-8}{15} : \frac{-6}{5} = \frac{-8}{15} \cdot \frac{5}{-6} = \frac{(-4) \cdot 1}{3 \cdot (-3)} = \frac{-4}{-9} = \frac{4}{9}.$$

#### Bài 2:
- a) $A = \left(\frac{3}{7} + \frac{4}{7}\right) + \left(\frac{-5}{9} + \frac{-4}{9}\right) = \frac{7}{7} + \frac{-9}{9} = 1 + (-1) = 0$.
- b) $B = \frac{5}{13} \cdot \left(\frac{-8}{19} + \frac{-11}{19}\right) + \frac{8}{13} = \frac{5}{13} \cdot (-1) + \frac{8}{13} = \frac{-5 + 8}{13} = \frac{3}{13}$.
- c) Phá ngoặc:
  $$C = \frac{13}{15} + \frac{7}{12} - \frac{8}{15} + \frac{5}{12} = \left(\frac{13}{15} - \frac{8}{15}\right) + \left(\frac{7}{12} + \frac{5}{12}\right) = \frac{5}{15} + \frac{12}{12} = \frac{1}{3} + 1 = \frac{4}{3}.$$

#### Bài 3:
- a) $x = \frac{-2}{3} - \frac{4}{7} = \frac{-14 - 12}{21} = \frac{-26}{21}$.
- b) $x = \frac{5}{8} - \left(-\frac{3}{4}\right) = \frac{5}{8} + \frac{6}{8} = \frac{11}{8}$.
- c) $\frac{3}{5}x = \frac{-7}{10} + \frac{1}{2} = \frac{-7 + 5}{10} = \frac{-2}{10} = \frac{-1}{5} \implies x = \frac{-1}{5} : \frac{3}{5} = \frac{-1}{3}$.
- d) $\frac{2}{3} : x = \frac{-5}{12} - \frac{1}{4} = \frac{-5 - 3}{12} = \frac{-8}{12} = \frac{-2}{3} \implies x = \frac{2}{3} : \left(\frac{-2}{3}\right) = -1$.

#### Bài 4:
- a) $x - \frac{3}{5} = 0 \iff x = \frac{3}{5}$ hoặc $2x + \frac{1}{3} = 0 \iff x = \frac{-1}{6}$.
- b) Ta có $\left(x + \frac{1}{2}\right)^2 = \left(\pm \frac{4}{5}\right)^2$.
  - TH1: $x + \frac{1}{2} = \frac{4}{5} \iff x = \frac{4}{5} - \frac{1}{2} = \frac{3}{10}$.
  - TH2: $x + \frac{1}{2} = -\frac{4}{5} \iff x = -\frac{4}{5} - \frac{1}{2} = \frac{-13}{10}$.
- c) $\left(2x - \frac{1}{3}\right)^2 = 0 \iff 2x - \frac{1}{3} = 0 \iff x = \frac{1}{6}$.

#### Bài 5:
- a) Xét hai trường hợp:
  - TH1: $x - \frac{2}{3} = \frac{1}{2} \iff x = \frac{1}{2} + \frac{2}{3} = \frac{7}{6}$.
  - TH2: $x - \frac{2}{3} = -\frac{1}{2} \iff x = -\frac{1}{2} + \frac{2}{3} = \frac{1}{6}$.
- b) $\left|x + \frac{3}{4}\right| = \frac{1}{3}$.
  - TH1: $x + \frac{3}{4} = \frac{1}{3} \iff x = \frac{1}{3} - \frac{3}{4} = \frac{-5}{12}$.
  - TH2: $x + \frac{3}{4} = -\frac{1}{3} \iff x = -\frac{1}{3} - \frac{3}{4} = \frac{-13}{12}$.
- c) $3|2x - 1| = 1 - \frac{5}{2} = -\frac{3}{2} \implies |2x - 1| = -\frac{1}{2}$.
  Vì $|2x - 1| \ge 0$ mà $-\frac{1}{2} < 0$, nên phương trình vô nghiệm (không có giá trị $x$ thỏa mãn).

#### Bài 6:
- a) Lượng nước chảy thêm trong $2$ giờ:
  $$2 \cdot \frac{1}{6} = \frac{2}{6} = \frac{1}{3}\text{ (be)}.$$
  Lượng nước trong bể sau $2$ giờ là:
  $$\frac{3}{8} + \frac{1}{3} = \frac{9 + 8}{24} = \frac{17}{24}\text{ (be)}.$$
- b) Lượng nước còn thiếu để đầy bể:
  $$1 - \frac{17}{24} = \frac{7}{24}\text{ (be)}.$$
  Thời gian cần mở vòi thêm:
  $$\frac{7}{24} : \frac{1}{6} = \frac{7}{24} \cdot 6 = \frac{7}{4} = 1\frac{3}{4}\text{ gio} \quad (1\text{ gio } 45\text{ phut}).$$

#### Bài 7:
- Số tiền mua sách giáo khoa:
  $$300\,000 \cdot \frac{1}{3} = 100\,000\text{ (dong)}.$$
- Số tiền còn lại sau khi mua sách:
  $$300\,000 - 100\,000 = 200\,000\text{ (dong)}.$$
- Số tiền mua vở viết:
  $$200\,000 \cdot \frac{2}{5} = 80\,000\text{ (dong)}.$$
- Số tiền còn lại để mua bút và thước kẻ:
  $$200\,000 - 80\,000 = 120\,000\text{ (dong)}.$$

#### Bài 8:
Khoảng cách ở mẫu bằng tử số ($3 - 1 = 2$):
$$S = \left(1 - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \dots + \left(\frac{1}{99} - \frac{1}{101}\right) = 1 - \frac{1}{101} = \frac{100}{101}.$$

#### Bài 9:
Đặt thừa số chung ở tử và mẫu:
- Phân số thứ nhất:
  $$\frac{2\left(\frac{1}{3} - \frac{1}{5} + \frac{1}{7}\right)}{4\left(\frac{1}{3} - \frac{1}{5} + \frac{1}{7}\right)} = \frac{2}{4} = \frac{1}{2}.$$
- Phân số thứ hai:
  $$\frac{1\left(\frac{1}{4} - \frac{1}{5} + \frac{1}{6}\right)}{3\left(\frac{1}{4} - \frac{1}{5} + \frac{1}{6}\right)} = \frac{1}{3}.$$
- Tổng:
  $$K = \frac{1}{2} + \frac{1}{3} = \frac{5}{6}.$$

#### Bài 10:
- a) Vì $\left|x - \frac{3}{4}\right| \ge 0$ với mọi $x \in \mathbb{Q}$, nên:
  $$A = \left|x - \frac{3}{4}\right| + \frac{2}{5} \ge 0 + \frac{2}{5} = \frac{2}{5}.$$
  Vậy giá trị nhỏ nhất của $A$ là $\frac{2}{5}$.
- b) Dấu đẳng thức xảy ra khi:
  $$\left|x - \frac{3}{4}\right| = 0 \iff x = \frac{3}{4}.$$

---

## F. Đề kiểm tra 15 phút (2 Đề Chẵn - Lẻ)

### Đề số 1

#### Phần I. Trắc nghiệm (4,0 điểm — Mỗi câu 1,0 điểm)
**Câu 1:** Kết quả của phép tính $\frac{-3}{7} + \frac{5}{14}$ là:
- A. $\frac{2}{14}$
- B. $\frac{-1}{14}$
- C. $\frac{1}{14}$
- D. $\frac{-8}{14}$

**Câu 2:** Kết quả phép tính $\frac{-4}{9} \cdot \frac{3}{-8}$ là:
- A. $\frac{-1}{6}$
- B. $\frac{1}{6}$
- C. $\frac{2}{3}$
- D. $\frac{-2}{3}$

**Câu 3:** Số hữu tỉ $x$ thỏa mãn $x - \frac{2}{3} = \frac{-1}{6}$ là:
- A. $\frac{1}{2}$
- B. $\frac{-5}{6}$
- C. $\frac{5}{6}$
- D. $\frac{-1}{2}$

**Câu 4:** Giá trị của biểu thức $H = \frac{3}{11} \cdot \frac{4}{7} + \frac{3}{11} \cdot \frac{3}{7}$ là:
- A. $\frac{6}{11}$
- B. $\frac{7}{11}$
- C. $\frac{3}{11}$
- D. $1$

#### Phần II. Tự luận (6,0 điểm)
**Bài 1 (3,0 điểm):** Thực hiện phép tính một cách hợp lý:
$$M = \left(\frac{5}{8} - \frac{3}{7}\right) + \left(\frac{11}{8} + \frac{10}{7}\right).$$

**Bài 2 (3,0 điểm):** Tìm số hữu tỉ $x$ biết:
$$\frac{3}{4} - \frac{1}{2}x = \frac{-1}{8}.$$

---

### Hướng dẫn chấm Đề số 1

#### Trắc nghiệm:
- Câu 1: **B** ($1{,}0$ điểm). ($\frac{-6 + 5}{14} = \frac{-1}{14}$).
- Câu 2: **B** ($1{,}0$ điểm). ($\frac{(-4) \cdot 3}{9 \cdot (-8)} = \frac{1}{6}$).
- Câu 3: **A** ($1{,}0$ điểm). ($x = \frac{-1}{6} + \frac{4}{6} = \frac{3}{6} = \frac{1}{2}$).
- Câu 4: **C** ($1{,}0$ điểm). ($\frac{3}{11} \cdot \left(\frac{4 + 3}{7}\right) = \frac{3}{11} \cdot 1 = \frac{3}{11}$).

#### Tự luận:
**Bài 1 (3,0 điểm):**
- Phá ngoặc và nhóm các số cùng mẫu ($1{,}0$ điểm):
  $$M = \left(\frac{5}{8} + \frac{11}{8}\right) + \left(\frac{10}{7} - \frac{3}{7}\right).$$
- Tính từng ngoặc ($1{,}0$ điểm):
  $$M = \frac{16}{8} + \frac{7}{7} = 2 + 1.$$
- Kết quả đúng ($1{,}0$ điểm):
  $$M = 3.$$

**Bài 2 (3,0 điểm):**
- Chuyển vế tìm $\frac{1}{2}x$ ($1{,}0$ điểm):
  $$\frac{1}{2}x = \frac{3}{4} - \left(-\frac{1}{8}\right) = \frac{6}{8} + \frac{1}{8} = \frac{7}{8}.$$
- Thực hiện phép chia tìm $x$ ($1{,}0$ điểm):
  $$x = \frac{7}{8} : \frac{1}{2} = \frac{7}{8} \cdot 2 = \frac{7}{4}.$$
- Kết luận đúng: $x = \frac{7}{4}$ ($1{,}0$ điểm).

---

### Đề số 2

#### Phần I. Trắc nghiệm (4,0 điểm — Mỗi câu 1,0 điểm)
**Câu 1:** Kết quả của phép tính $\frac{5}{6} - \frac{-2}{3}$ là:
- A. $\frac{1}{6}$
- B. $\frac{3}{6}$
- C. $\frac{3}{2}$
- D. $\frac{-1}{6}$

**Câu 2:** Thương của phép chia $\frac{-5}{12} : \frac{15}{8}$ là:
- A. $\frac{-2}{9}$
- B. $\frac{2}{9}$
- C. $\frac{-25}{32}$
- D. $\frac{-9}{2}$

**Câu 3:** Tìm $x$ biết $x : \frac{2}{5} = \frac{-15}{4}$:
- A. $\frac{-3}{2}$
- B. $\frac{3}{2}$
- C. $\frac{-75}{8}$
- D. $\frac{-8}{75}$

**Câu 4:** Giá trị của biểu thức $P = \frac{5}{13} \cdot \frac{7}{9} - \frac{5}{13} \cdot \frac{16}{9}$ là:
- A. $\frac{5}{13}$
- B. $\frac{-5}{13}$
- C. $0$
- D. $\frac{-10}{13}$

#### Phần II. Tự luận (6,0 điểm)
**Bài 1 (3,0 điểm):** Tính hợp lý:
$$Q = \frac{4}{9} \cdot \frac{-5}{17} + \frac{4}{9} \cdot \frac{-12}{17} + \frac{5}{9}.$$

**Bài 2 (3,0 điểm):** Tìm $x \in \mathbb{Q}$ biết:
$$\left(x - \frac{1}{3}\right)^2 = \frac{4}{9}.$$

---

### Hướng dẫn chấm Đề số 2

#### Trắc nghiệm:
- Câu 1: **C** ($1{,}0$ điểm). ($\frac{5}{6} + \frac{4}{6} = \frac{9}{6} = \frac{3}{2}$).
- Câu 2: **A** ($1{,}0$ điểm). ($\frac{-5}{12} \cdot \frac{8}{15} = \frac{-2}{9}$).
- Câu 3: **A** ($1{,}0$ điểm). ($x = \frac{-15}{4} \cdot \frac{2}{5} = \frac{-3}{2}$).
- Câu 4: **B** ($1{,}0$ điểm). ($\frac{5}{13} \cdot \left(\frac{7 - 16}{9}\right) = \frac{5}{13} \cdot (-1) = \frac{-5}{13}$).

#### Tự luận:
**Bài 1 (3,0 điểm):**
- Đặt thừa số chung $\frac{4}{9}$ ($1{,}0$ điểm):
  $$Q = \frac{4}{9} \cdot \left(\frac{-5}{17} + \frac{-12}{17}\right) + \frac{5}{9}.$$
- Tính trong ngoặc: $\frac{-17}{17} = -1$ ($1{,}0$ điểm):
  $$Q = \frac{4}{9} \cdot (-1) + \frac{5}{9} = \frac{-4}{9} + \frac{5}{9}.$$
- Ra kết quả đúng: $Q = \frac{1}{9}$ ($1{,}0$ điểm).

**Bài 2 (3,0 điểm):**
- Nhận xét $\frac{4}{9} = \left(\pm \frac{2}{3}\right)^2$, chia làm hai trường hợp ($1{,}0$ điểm).
- TH1: $x - \frac{1}{3} = \frac{2}{3} \iff x = \frac{2}{3} + \frac{1}{3} = 1$ ($1{,}0$ điểm).
- TH2: $x - \frac{1}{3} = -\frac{2}{3} \iff x = -\frac{2}{3} + \frac{1}{3} = \frac{-1}{3}$ ($0{,}75$ điểm).
- Kết luận: $x = 1$ hoặc $x = \frac{-1}{3}$ ($0{,}25$ điểm).
