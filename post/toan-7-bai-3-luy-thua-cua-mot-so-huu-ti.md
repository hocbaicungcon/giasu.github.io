---
title: 'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ - Lý thuyết, Công thức và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 7 Bài 3 Lũy thừa của số hữu tỉ: định nghĩa, tích và thương hai lũy thừa cùng cơ số, lũy thừa của lũy thừa, lũy thừa của tích và thương, 5 chuyên đề Olympic (so sánh lũy thừa lớn, chữ số tận cùng, phương trình mũ) và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Số hữu tỉ
  - Lũy thừa
  - Quy tắc lũy thừa
  - So sánh lũy thừa
  - Kết nối tri thức
grade: 7
---

# Bài 3. Lũy thừa với số mũ tự nhiên của một số hữu tỉ

Trong cuộc sống và khoa học kỹ thuật, chúng ta thường xuyên bắt gặp những con số khổng lồ hoặc những quá trình nhân đôi liên tiếp: một tế bào vi khuẩn cứ sau $20$ phút lại phân đôi một lần, khoảng cách từ Trái Đất đến Mặt Trời xấp xỉ $1{,}5 \cdot 10^8\text{ km}$, hay dung lượng của một chiếc thẻ nhớ là $2^{10}\text{ MB} = 1\,024\text{ MB}$.

Ở lớp 6, các em đã học lũy thừa của số tự nhiên và số nguyên. Sang lớp 7, khi tập số được mở rộng lên **tập hợp các số hữu tỉ** $\mathbb{Q}$, phép nâng lên lũy thừa hoạt động như thế nào với các phân số và số thập phân âm? Làm thế nào để tính nhẩm nhanh $\left(-\frac{2}{3}\right)^4$, hoặc so sánh hai con số khổng lồ như $2^{300}$ và $3^{200}$?

Bài học hôm nay sẽ giúp các em làm chủ toàn bộ các công thức lũy thừa cốt lõi, thấu suốt quy luật dấu của lũy thừa, đồng thời chinh phục $5$ chuyên đề bồi dưỡng học sinh giỏi Olympic với những phương pháp tư duy số học đỉnh cao!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 3: LŨY THỪA CỦA MỘT SỐ HỮU TỈ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa & Lũy thừa phân số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x^n = \underbrace{x \cdot x \cdots x}_{n\text{ thua so}}$ ($n \in \mathbb{N}, n > 1$).<br>• Quy ước: $x^1 = x; \ x^0 = 1$ ($x \ne 0$).<br>• Phân số: $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ ($b \ne 0$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Nhân & chia cùng cơ số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nhân: $x^m \cdot x^n = x^{m + n}$ (cộng số mũ).<br>• Chia: $x^m : x^n = x^{m - n}$ (trừ số mũ, $x \ne 0, m \ge n$).<br>• Lũy thừa của lũy thừa: $(x^m)^n = x^{m \cdot n}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Lũy thừa của tích & thương</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Lũy thừa của tích: $(x \cdot y)^n = x^n \cdot y^n$.<br>• Lũy thừa của thương: $\left(\frac{x}{y}\right)^n = \frac{x^n}{y^n}$ ($y \ne 0$).<br>• Giúp gom hoặc tách lũy thừa cùng số mũ.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quy luật dấu & Tư duy Olympic</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(-x)^{2k} = x^{2k} \ge 0$ (mũ chẵn luôn dương).<br>• $(-x)^{2k+1} = -x^{2k+1}$ (mũ lẻ giữ dấu âm).<br>• So sánh qua ƯCLN số mũ, chu kỳ chữ số tận cùng.</p>
    </div>
  </div>
</div>

---

## Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Hãy khởi động cùng $5$ câu hỏi kết nối kiến thức lũy thừa từ lớp 6:

### Câu hỏi khởi động

1. **Viết gọn các tích sau dưới dạng một lũy thừa:**
   - a) $6 \cdot 6 \cdot 6 \cdot 6 \cdot 6$.
   - b) $(-5) \cdot (-5) \cdot (-5)$.
   - c) $\frac{2}{3} \cdot \frac{2}{3} \cdot \frac{2}{3} \cdot \frac{2}{3}$.

2. **Tính giá trị của mỗi lũy thừa sau:**
   - a) $3^4$.
   - b) $(-2)^5$.
   - c) $(-4)^2$.
   - d) $10^5$.

3. **Viết kết quả mỗi phép tính sau dưới dạng một lũy thừa:**
   - a) $3^5 \cdot 3^4$.
   - b) $7^9 : 7^6$.
   - c) $(2^3)^4$.

4. **Thực hiện phép tính theo đúng thứ tự ưu tiên:**
   - a) $5 + 3 \cdot 2^3$.
   - b) $(8 - 5)^3 - 18 : 3^2$.

5. **Viết mỗi số sau thành lũy thừa với cơ số cho trước:**
   - a) $16 = 2^{\dots}$.
   - b) $125 = 5^{\dots}$.
   - c) $\frac{1}{27} = \left(\frac{1}{3}\right)^{\dots}$.

---

### Lời giải gợi ý phần Khởi động

1. **Viết gọn:**
   - a) $6 \cdot 6 \cdot 6 \cdot 6 \cdot 6 = 6^5$.
   - b) $(-5) \cdot (-5) \cdot (-5) = (-5)^3$.
   - c) $\frac{2}{3} \cdot \frac{2}{3} \cdot \frac{2}{3} \cdot \frac{2}{3} = \left(\frac{2}{3}\right)^4$.

2. **Tính giá trị:**
   - a) $3^4 = 3 \cdot 3 \cdot 3 \cdot 3 = 81$.
   - b) $(-2)^5 = -32$ (số mũ lẻ của số âm là số âm).
   - c) $(-4)^2 = 16$ (số mũ chẵn của số âm là số dương).
   - d) $10^5 = 100\,000$.

3. **Viết dưới dạng một lũy thừa:**
   - a) $3^5 \cdot 3^4 = 3^{5 + 4} = 3^9$.
   - b) $7^9 : 7^6 = 7^{9 - 6} = 7^3$.
   - c) $(2^3)^4 = 2^{3 \cdot 4} = 2^{12}$.

4. **Thứ tự thực hiện:**
   - a) $5 + 3 \cdot 2^3 = 5 + 3 \cdot 8 = 5 + 24 = 29$.
   - b) $(8 - 5)^3 - 18 : 3^2 = 3^3 - 18 : 9 = 27 - 2 = 25$.

5. **Lũy thừa tương ứng:**
   - a) $16 = 2^4$.
   - b) $125 = 5^3$.
   - c) $\frac{1}{27} = \left(\frac{1}{3}\right)^3$.

---

## A. Lý thuyết trọng tâm

### 1. Khái niệm lũy thừa với số mũ tự nhiên

> [!NOTE]
> **Định nghĩa:**
> Lũy thừa bậc $n$ của một số hữu tỉ $x$ (kí hiệu là $x^n$) là tích của $n$ thừa số bằng nhau, mỗi thừa số bằng $x$:
> $$x^n = \underbrace{x \cdot x \dots x}_{n\text{ thua so}} \quad (x \in \mathbb{Q}, \ n \in \mathbb{N}, \ n > 1).$$
> Trong đó:
> - $x$ gọi là **cơ số**.
> - $n$ gọi là **số mũ**.
> 
> **Quy ước:**
> - $x^1 = x$.
> - $x^0 = 1$ (với mọi $x \ne 0$). Biểu thức $0^0$ không có nghĩa trong toán học sơ cấp.

#### Lũy thừa của một phân số:
Khi số hữu tỉ $x$ được viết dưới dạng phân số $\frac{a}{b}$ ($a, b \in \mathbb{Z}, b \ne 0$):
$$\left(\dfrac{a}{b}\right)^n = \underbrace{\dfrac{a}{b} \cdot \dfrac{a}{b} \dots \dfrac{a}{b}}_{n\text{ thua so}} = \dfrac{\underbrace{a \cdot a \dots a}_{n\text{ thua so}}}{\underbrace{b \cdot b \dots b}_{n\text{ thua so}}} = \dfrac{a^n}{b^n}.$$

**Ví dụ 1:** Tính:
- a) $\left(\frac{-3}{4}\right)^3$.
- b) $(-0{,}4)^2$.
- c) $\left(-1\frac{1}{2}\right)^4$.

*Lời giải:*
- a) $\left(\frac{-3}{4}\right)^3 = \frac{(-3)^3}{4^3} = \frac{-27}{64}$.
- b) $(-0{,}4)^2 = (-0{,}4) \cdot (-0{,}4) = 0{,}16$ (hoặc $\left(-\frac{2}{5}\right)^2 = \frac{4}{25} = 0{,}16$).
- c) Đổi hỗn số sang phân số: $-1\frac{1}{2} = -\frac{3}{2}$.
  $$\left(-\dfrac{3}{2}\right)^4 = \dfrac{(-3)^4}{2^4} = \dfrac{81}{16}.$$

---

### 2. Quy luật dấu của lũy thừa

> [!IMPORTANT]
> Với số hữu tỉ âm $x < 0$ ($x = -a$ với $a > 0$):
> 1. **Lũy thừa với số mũ chẵn ($n = 2k$, $k \in \mathbb{N}^*$):** luôn cho kết quả là một số **dương**.
>    $$(-a)^{2k} = a^{2k} > 0.$$
> 2. **Lũy thừa với số mũ lẻ ($n = 2k + 1$, $k \in \mathbb{N}$):** luôn cho kết quả là một số **âm**.
>    $$(-a)^{2k + 1} = -(a^{2k + 1}) < 0.$$

**Hệ quả đặc biệt về số $-1$:**
$$(-1)^n = \begin{cases} 1 & \text{khi } n \text{ chan} \\ -1 & \text{khi } n \text{ le} \end{cases}$$

---

### 3. Các công thức biến đổi lũy thừa cơ bản

Cho $x, y \in \mathbb{Q}$ và các số tự nhiên $m, n$:

#### a) Nhân hai lũy thừa cùng cơ số:
Khi nhân hai lũy thừa cùng cơ số, ta **giữ nguyên cơ số** và **cộng hai số mũ**:
$$x^m \cdot x^n = x^{m + n}.$$

#### b) Chia hai lũy thừa cùng cơ số:
Khi chia hai lũy thừa cùng cơ số (khác $0$), ta **giữ nguyên cơ số** và **trừ hai số mũ**:
$$x^m : x^n = x^{m - n} \quad (x \ne 0, \ m \ge n).$$

#### c) Lũy thừa của lũy thừa:
Khi tính lũy thừa của một lũy thừa, ta **giữ nguyên cơ số** và **nhân hai số mũ**:
$$(x^m)^n = x^{m \cdot n}.$$

#### d) Lũy thừa của một tích:
Lũy thừa của một tích bằng tích các lũy thừa:
$$(x \cdot y)^n = x^n \cdot y^n.$$

#### e) Lũy thừa của một thương:
Lũy thừa của một thương bằng thương các lũy thừa:
$$\left(\dfrac{x}{y}\right)^n = \dfrac{x^n}{y^n} \quad (y \ne 0).$$

---

### 4. Những sai lầm kinh điển cần tránh

> [!WARNING]
> 1. **Nhầm lẫn giữa $(-a)^n$ và $-a^n$ khi $n$ chẵn:**
>    - $(-3)^2 = (-3) \cdot (-3) = 9$.
>    - $-3^2 = -(3^2) = -9$.
>    Dấu trừ ở $-3^2$ không nằm trong lũy thừa, học sinh rất hay quên dấu ngoặc!
> 2. **Nhầm lẫn giữa nhân cùng cơ số và lũy thừa của lũy thừa:**
>    - $x^3 \cdot x^4 = x^{3 + 4} = x^7$ (cộng số mũ).
>    - $(x^3)^4 = x^{3 \cdot 4} = x^{12}$ (nhân số mũ).
>    Học sinh thường nhầm $(x^3)^4 = x^7$.
> 3. **Nhầm lẫn lũy thừa của tổng:**
>    $$(a + b)^n \ne a^n + b^n.$$
>    *Ví dụ:* $(2 + 3)^2 = 5^2 = 25 \ne 2^2 + 3^2 = 4 + 9 = 13$.
> 4. **Quên xét hai trường hợp khi tìm cơ số với số mũ chẵn:**
>    Nếu $x^2 = \frac{9}{16}$ thì $x = \frac{3}{4}$ hoặc $x = -\frac{3}{4}$ ($x = \pm \frac{3}{4}$). Quên trường hợp âm là lỗi phổ biến nhất của học sinh!

---

## B. Các dạng bài tập thường gặp & Phương pháp giải

### Dạng 1: Tính giá trị của biểu thức chứa lũy thừa

#### Phương pháp giải:
- Thực hiện nâng lên lũy thừa trước.
- Với phân số: áp dụng $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$.
- Xác định đúng dấu của số mũ chẵn/lẻ.
- Sau đó thực hiện nhân, chia rồi đến cộng, trừ.

**Bài 1.1:** Tính giá trị các biểu thức sau:
- a) $A = \left(\frac{-2}{3}\right)^3 + \frac{5}{9} \cdot \left(\frac{-1}{2}\right)^2$.
- b) $B = \left(-\frac{1}{3}\right)^2 - \left(-\frac{1}{4}\right)^0 + \left(-\frac{1}{2}\right)^3$.

*Lời giải:*
- a) Tính từng lũy thừa:
  $$\left(\dfrac{-2}{3}\right)^3 = \dfrac{-8}{27}; \quad \left(\dfrac{-1}{2}\right)^2 = \dfrac{1}{4}.$$
  Thực hiện nhân:
  $$\dfrac{5}{9} \cdot \dfrac{1}{4} = \dfrac{5}{36}.$$
  Quy đồng mẫu số chung $\text{BCNN}(27; 36) = 108$:
  $$A = \dfrac{-8 \cdot 4}{108} + \dfrac{5 \cdot 3}{108} = \dfrac{-32 + 15}{108} = \dfrac{-17}{108}.$$
- b) Ta có:
  $$\left(-\dfrac{1}{3}\right)^2 = \dfrac{1}{9}; \quad \left(-\dfrac{1}{4}\right)^0 = 1; \quad \left(-\dfrac{1}{2}\right)^3 = -\dfrac{1}{8}.$$
  Do đó:
  $$B = \dfrac{1}{9} - 1 - \dfrac{1}{8} = \dfrac{1}{9} - \dfrac{9}{9} - \dfrac{1}{8} = -\dfrac{8}{9} - \dfrac{1}{8} = \dfrac{-64 - 9}{72} = \dfrac{-73}{72}.$$

---

### Dạng 2: Rút gọn biểu thức và đưa về cùng cơ số

#### Phương pháp giải:
- Phân tích các cơ số hợp số ra thừa số nguyên tố (ví dụ: $4 = 2^2, 8 = 2^3, 9 = 3^2, 27 = 3^3, 25 = 5^2$).
- Áp dụng các quy tắc nhân, chia cùng cơ số và lũy thừa của lũy thừa.
- Rút gọn các lũy thừa giống nhau ở cả tử và mẫu.

**Bài 2.1:** Rút gọn biểu thức:
$$P = \dfrac{4^5 \cdot 9^4 - 2 \cdot 6^9}{2^{10} \cdot 3^8 + 6^8 \cdot 20}.$$

*Lời giải:*
Đưa tất cả về cơ số nguyên tố $2$ và $3$:
- $4^5 = (2^2)^5 = 2^{10}$.
- $9^4 = (3^2)^4 = 3^8$.
- $6^9 = (2 \cdot 3)^9 = 2^9 \cdot 3^9 \implies 2 \cdot 6^9 = 2 \cdot 2^9 \cdot 3^9 = 2^{10} \cdot 3^9$.
- $6^8 = (2 \cdot 3)^8 = 2^8 \cdot 3^8$.
- $20 = 2^2 \cdot 5 \implies 6^8 \cdot 20 = 2^8 \cdot 3^8 \cdot 2^2 \cdot 5 = 2^{10} \cdot 3^8 \cdot 5$.

Thay vào tử số và mẫu số:
- Tử số:
  $$T = 2^{10} \cdot 3^8 - 2^{10} \cdot 3^9 = 2^{10} \cdot 3^8 \cdot (1 - 3) = 2^{10} \cdot 3^8 \cdot (-2) = -2^{11} \cdot 3^8.$$
- Mẫu số:
  $$M = 2^{10} \cdot 3^8 + 2^{10} \cdot 3^8 \cdot 5 = 2^{10} \cdot 3^8 \cdot (1 + 5) = 2^{10} \cdot 3^8 \cdot 6 = 2^{10} \cdot 3^8 \cdot (2 \cdot 3) = 2^{11} \cdot 3^9.$$

Rút gọn biểu thức:
$$P = \dfrac{T}{M} = \dfrac{-2^{11} \cdot 3^8}{2^{11} \cdot 3^9} = \dfrac{-1}{3}.$$

---

### Dạng 3: Tính nhanh bằng cách nhóm cùng số mũ

#### Phương pháp giải:
Sử dụng công thức tích các lũy thừa cùng số mũ:
$$a^n \cdot b^n = (a \cdot b)^n; \quad \dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n.$$

**Bài 3.1:** Tính nhanh giá trị của các biểu thức sau:
- a) $M = \left(\frac{3}{5}\right)^4 \cdot 15^4 : 9^3$.
- b) $N = \left(-\frac{2}{3}\right)^5 \cdot \left(\frac{9}{4}\right)^5 \cdot \left(-\frac{2}{3}\right)^2$.

*Lời giải:*
- a) Gom hai số đầu cùng số mũ $4$:
  $$\left(\dfrac{3}{5}\right)^4 \cdot 15^4 = \left(\dfrac{3}{5} \cdot 15\right)^4 = 9^4.$$
  Khi đó:
  $$M = 9^4 : 9^3 = 9^{4 - 3} = 9^1 = 9.$$
- b) Gom hai thừa số đầu cùng số mũ $5$:
  $$\left(-\dfrac{2}{3}\right)^5 \cdot \left(\dfrac{9}{4}\right)^5 = \left[\left(-\dfrac{2}{3}\right) \cdot \dfrac{9}{4}\right]^5 = \left(-\dfrac{3}{2}\right)^5.$$
  Nhân với thừa số thứ ba:
  $$\left(-\dfrac{2}{3}\right)^2 = \dfrac{4}{9} = \left(\dfrac{2}{3}\right)^2 = \left(\dfrac{3}{2}\right)^{-2}.$$
  Hoặc tính trực tiếp:
  $$N = \dfrac{(-3)^5}{2^5} \cdot \dfrac{2^2}{3^2} = \dfrac{(-1) \cdot 3^5 \cdot 2^2}{2^5 \cdot 3^2} = -\dfrac{3^3}{2^3} = -\dfrac{27}{8}.$$

---

### Dạng 4: Tìm $x$ trong bài toán lũy thừa

Có hai trường hợp cốt lõi:
1. **Biến $x$ nằm ở cơ số ($x^n = a$):**
   - Nếu $n$ lẻ: $x^n = a^n \iff x = a$.
   - Nếu $n$ chẵn: $x^n = a^n \iff x = a$ hoặc $x = -a$ ($x = \pm a$).
2. **Biến $x$ nằm ở số mũ ($a^x = a^m$):**
   - Với cơ số $a \notin \{-1; 0; 1\}$: $a^x = a^m \iff x = m$.

**Bài 4.1:** Tìm số hữu tỉ $x$ biết:
- a) $\left(x - \frac{1}{2}\right)^2 = \frac{25}{49}$.
- b) $(2x + 1)^3 = -\frac{27}{64}$.
- c) $2^{x + 1} \cdot 3^x = 72$.

*Lời giải:*
- a) Số mũ chẵn $n = 2$, ta có $\frac{25}{49} = \left(\pm \frac{5}{7}\right)^2$.
  - TH1: $x - \frac{1}{2} = \frac{5}{7} \iff x = \frac{5}{7} + \frac{1}{2} = \frac{17}{14}$.
  - TH2: $x - \frac{1}{2} = -\frac{5}{7} \iff x = -\frac{5}{7} + \frac{1}{2} = \frac{-3}{14}$.
  Vậy $x \in \left\{\frac{-3}{14}; \frac{17}{14}\right\}$.
- b) Số mũ lẻ $n = 3$, ta có $-\frac{27}{64} = \left(-\frac{3}{4}\right)^3$.
  $$2x + 1 = -\dfrac{3}{4} \iff 2x = -\dfrac{3}{4} - 1 = -\dfrac{7}{4} \iff x = -\dfrac{7}{8}.$$
- c) Tách $2^{x + 1} = 2 \cdot 2^x$:
  $$2 \cdot 2^x \cdot 3^x = 72 \iff 2 \cdot (2 \cdot 3)^x = 72 \iff 2 \cdot 6^x = 72 \iff 6^x = 36 = 6^2 \iff x = 2.$$

---

### Dạng 5: Bài toán thực tế liên quan đến lũy thừa

**Bài 5.1:** Một bể cá cảnh hình lập phương có cạnh bằng $0{,}6\text{ m}$.
1. Viết công thức tính diện tích xung quanh và thể tích của bể cá dưới dạng lũy thừa.
2. Tính thể tích bể cá đó ra đơn vị lít ($1\text{ dm}^3 = 1$ lít).

*Lời giải:*
1. Công thức:
   - Cạnh $a = 0{,}6\text{ m}$.
   - Diện tích xung quanh: $S_{xq} = 4 \cdot a^2 = 4 \cdot (0{,}6)^2\text{ m}^2$.
   - Thể tích bể cá: $V = a^3 = (0{,}6)^3\text{ m}^3$.
2. Tính giá trị:
   - Đổi $a = 0{,}6\text{ m} = 6\text{ dm}$.
   - Thể tích: $V = 6^3 = 216\text{ dm}^3 = 216$ lít.

---

## C. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Kỹ thuật so sánh hai lũy thừa lớn

> [!TIP]
> **Các phương pháp so sánh lũy thừa kinh điển:**
> 1. **Đưa về cùng cơ số:** Nếu $a > 1$ và $m > n$ thì $a^m > a^n$. (Nếu $0 < a < 1$ thì $a^m < a^n$).
> 2. **Đưa về cùng số mũ:** Tìm $\text{ƯCLN}$ của hai số mũ, đưa về dạng $(a^k)^m$ và $(b^k)^m$. Nếu $a^k > b^k$ thì $(a^k)^m > (b^k)^m$.
> 3. **So sánh qua lũy thừa trung gian:** Chọn một lũy thừa trung gian $C$ sao cho $A > C > B$.

**Bài toán Olympic 1:** So sánh:
- a) $2^{300}$ và $3^{200}$.
- b) $2^{31}$ và $3^{21}$.

*Lời giải:*
- a) Đưa về cùng số mũ:
  Tìm $\text{ƯCLN}(300; 200) = 100$.
  Ta tách:
  $$2^{300} = (2^3)^{100} = 8^{100}.$$
  $$3^{200} = (3^2)^{100} = 9^{100}.$$
  Vì $8 < 9$ nên $8^{100} < 9^{100} \implies 2^{300} < 3^{200}$.
- b) Phương pháp bắc cầu qua lũy thừa trung gian:
  Ta thấy:
  $$2^{31} < 2^{32} = (2^4)^8 = 16^8 < 17^8 \dots$$
  Hoặc so sánh:
  $$2^{31} = 2 \cdot 2^{30} = 2 \cdot (2^3)^{10} = 2 \cdot 8^{10}.$$
  $$3^{21} = 3 \cdot 3^{20} = 3 \cdot (3^2)^{10} = 3 \cdot 9^{10}.$$
  Vì $2 < 3$ và $8^{10} < 9^{10}$ nên $2 \cdot 8^{10} < 3 \cdot 9^{10}$.
  Vậy $2^{31} < 3^{21}$.

---

### Chuyên đề 2: Tìm chữ số tận cùng của một lũy thừa

Chữ số tận cùng của $a^n$ chỉ phụ thuộc vào chữ số tận cùng của cơ số $a$:
- Tận cùng là $0, 1, 5, 6$: nâng lên lũy thừa bao nhiêu cũng giữ nguyên chữ số tận cùng đó ($0^n = \dots 0; 1^n = \dots 1; 5^n = \dots 5; 6^n = \dots 6$).
- Tận cùng là $2, 3, 7, 8$: có chu kỳ $4$ bước lặp lại:
  - $2^1 = 2; \ 2^2 = 4; \ 2^3 = 8; \ 2^4 = 16$ (tận cùng $6$); $\ 2^5 = 32 \dots$
  - Cơ chế tổng quát: $2^{4k}$ tận cùng là $6$; $3^{4k}$ tận cùng là $1$; $7^{4k}$ tận cùng là $1$; $8^{4k}$ tận cùng là $6$.

**Bài toán Olympic 2:** Tìm chữ số tận cùng của số $A = 2^{2026} + 3^{2025}$.

*Lời giải:*
- Xét $2^{2026}$:
  Ta chia số mũ cho $4$: $2026 = 4 \cdot 506 + 2$.
  $$2^{2026} = 2^{4 \cdot 506 + 2} = (2^4)^{506} \cdot 2^2 = (\dots 6)^{506} \cdot 4 = (\dots 6) \cdot 4 = \dots 4.$$
  Vậy $2^{2026}$ có chữ số tận cùng là $4$.
- Xét $3^{2025}$:
  Ta chia số mũ cho $4$: $2025 = 4 \cdot 506 + 1$.
  $$3^{2025} = 3^{4 \cdot 506 + 1} = (3^4)^{506} \cdot 3^1 = (\dots 1)^{506} \cdot 3 = (\dots 1) \cdot 3 = \dots 3.$$
  Vậy $3^{2025}$ có chữ số tận cùng là $3$.
- Chữ số tận cùng của tổng $A$:
  $$\dots 4 + \dots 3 = \dots 7.$$
  Vậy $A$ có chữ số tận cùng là $7$.

---

### Chuyên đề 3: Phương trình mũ nâng cao

**Bài toán Olympic 3:** Tìm các số tự nhiên $n$ thỏa mãn:
$$5^{n} + 5^{n + 2} = 650.$$

*Lời giải:*
Đặt $5^n$ làm thừa số chung:
$$5^n + 5^n \cdot 5^2 = 650$$
$$5^n \cdot (1 + 5^2) = 650$$
$$5^n \cdot (1 + 25) = 650$$
$$5^n \cdot 26 = 650$$
$$5^n = 650 : 26 = 25.$$
Vì $25 = 5^2$ nên:
$$5^n = 5^2 \iff n = 2.$$
Vậy $n = 2$.

---

### Chuyên đề 4: Chứng minh chia hết bằng kỹ thuật đặt thừa số chung lũy thừa

**Bài toán Olympic 4:** Chứng minh rằng với mọi số tự nhiên $n$, biểu thức sau luôn chia hết cho $31$:
$$B = 5^{n + 3} + 5^{n + 2} + 5^{n + 1}.$$

*Lời giải:*
Biến đổi biểu thức $B$ bằng cách đặt lũy thừa nhỏ nhất $5^{n + 1}$ làm nhân tử chung:
$$B = 5^{n + 1} \cdot 5^2 + 5^{n + 1} \cdot 5^1 + 5^{n + 1} \cdot 1$$
$$B = 5^{n + 1} \cdot (5^2 + 5 + 1)$$
$$B = 5^{n + 1} \cdot (25 + 5 + 1)$$
$$B = 5^{n + 1} \cdot 31.$$

Vì $31 \ \vdots \ 31$ nên tích $5^{n + 1} \cdot 31$ luôn chia hết cho $31$ với mọi số tự nhiên $n$.
Vậy $B$ luôn chia hết cho $31$ (điều phải chứng minh).

---

### Chuyên đề 5: Tính tổng dãy lũy thừa liên tiếp và ứng dụng

**Bài toán Olympic 5:** Cho biết $1^2 + 2^2 + 3^2 + \dots + 10^2 = 385$. Hãy tính nhanh giá trị của tổng:
$$S = 2^2 + 4^2 + 6^2 + \dots + 20^2.$$

*Lời giải:*
Quan sát các số hạng của $S$:
$$2^2 = (2 \cdot 1)^2 = 2^2 \cdot 1^2$$
$$4^2 = (2 \cdot 2)^2 = 2^2 \cdot 2^2$$
$$6^2 = (2 \cdot 3)^2 = 2^2 \cdot 3^2$$
$$\dots$$
$$20^2 = (2 \cdot 10)^2 = 2^2 \cdot 10^2.$$

Đặt $2^2$ làm thừa số chung ra ngoài:
$$S = 2^2 \cdot (1^2 + 2^2 + 3^2 + \dots + 10^2).$$
Thay $2^2 = 4$ và tổng trong ngoặc bằng $385$:
$$S = 4 \cdot 385 = 1\,540.$$

---

## D. 10 Câu hỏi Trắc nghiệm Tương tác (Quiz)

```quiz
type: choice
question: 'Giá trị của lũy thừa $\left(-\frac{2}{3}\right)^3$ là:'
options:
  - '$\frac{8}{27}$'
  - '$-\frac{8}{27}$'
  - '$-\frac{6}{9}$'
  - '$\frac{6}{9}$'
answer: 2
explanation: 'Lũy thừa bậc lẻ của số âm mang dấu âm: $\frac{(-2)^3}{3^3} = -\frac{8}{27}$.'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $-5^2$ là:'
options:
  - '$25$'
  - '$-25$'
  - '$10$'
  - '$-10$'
answer: 2
explanation: 'Biểu thức $-5^2 = -(5^2) = -25$. Dấu trừ không nằm trong dấu ngoặc của lũy thừa.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - '$x^m \cdot x^n = x^{m + n}$'
  - '$(x^m)^n = x^{m \cdot n}$'
  - '$(x \cdot y)^n = x^n \cdot y^n$'
  - '$(x + y)^n = x^n + y^n$'
answer: 4
explanation: 'Lũy thừa của một tổng không bằng tổng các lũy thừa. Ví dụ $(1 + 2)^2 = 9 \ne 1^2 + 2^2 = 5$.'
```

```quiz
type: choice
question: 'Rút gọn biểu thức $\frac{3^8 \cdot 2^4}{6^4}$ ta được kết quả là:'
options:
  - '$3^4$'
  - '$81$'
  - 'Cả A và B đều đúng'
  - '$1$'
answer: 3
explanation: 'Ta có $6^4 = (2 \cdot 3)^4 = 2^4 \cdot 3^4$. Do đó biểu thức bằng $\frac{3^8 \cdot 2^4}{3^4 \cdot 2^4} = 3^4 = 81$. Cả A và B đều đúng.'
```

```quiz
type: choice
question: 'Số hữu tỉ $x$ thỏa mãn $x^2 = \frac{49}{81}$ là:'
options:
  - '$\frac{7}{9}$'
  - '$-\frac{7}{9}$'
  - '$\pm \frac{7}{9}$'
  - '$\frac{49}{162}$'
answer: 3
explanation: 'Vì số mũ là 2 (chẵn) nên $x^2 = \left(\pm \frac{7}{9}\right)^2 \implies x = \pm \frac{7}{9}$.'
```

```quiz
type: choice
question: 'Số tự nhiên $n$ thỏa mãn $3^{n + 1} = 243$ là:'
options:
  - '$3$'
  - '$4$'
  - '$5$'
  - '$6$'
answer: 2
explanation: 'Ta có $243 = 3^5$. Do đó $3^{n + 1} = 3^5 \implies n + 1 = 5 \implies n = 4$.'
```

```quiz
type: choice
question: 'So sánh $2^{30}$ và $3^{20}$:'
options:
  - '$2^{30} > 3^{20}$'
  - '$2^{30} < 3^{20}$'
  - '$2^{30} = 3^{20}$'
  - 'Không thể so sánh'
answer: 2
explanation: 'Ta có $2^{30} = (2^3)^{10} = 8^{10}$ và $3^{20} = (3^2)^{10} = 9^{10}$. Vì $8 < 9$ nên $8^{10} < 9^{10} \implies 2^{30} < 3^{20}$.'
```

```quiz
type: choice
question: 'Chữ số tận cùng của số $7^{2024}$ là:'
options:
  - '$1$'
  - '$3$'
  - '$7$'
  - '$9$'
answer: 1
explanation: 'Vì $2024 = 4 \cdot 506 \ \vdots \ 4$, nên $7^{2024} = (7^4)^{506} = (\dots 1)^{506} = \dots 1$. Chữ số tận cùng là 1.'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $K = \left(-\frac{3}{4}\right)^0 + (-1)^{2025} + (-1)^{2026}$ là:'
options:
  - '$0$'
  - '$1$'
  - '$-1$'
  - '$3$'
answer: 2
explanation: 'Ta có $\left(-\frac{3}{4}\right)^0 = 1$; $(-1)^{2025} = -1$ (mũ lẻ); $(-1)^{2026} = 1$ (mũ chẵn). Vậy $K = 1 + (-1) + 1 = 1$.'
```

```quiz
type: choice
question: 'Số tự nhiên $x$ thỏa mãn $(x - 2)^3 = -125$ là:'
options:
  - '$x = 7$'
  - '$x = -3$'
  - '$x = 3$'
  - 'Không có số tự nhiên nào thỏa mãn'
answer: 4
explanation: 'Ta có $(x - 2)^3 = (-5)^3 \implies x - 2 = -5 \implies x = -3$. Vì đề bài yêu cầu $x$ là số tự nhiên ($x \in \mathbb{N}$) mà $-3 \notin \mathbb{N}$ nên không có số tự nhiên nào thỏa mãn.'
```

---

## E. Phiếu bài tập tự luyện toàn diện (Có lời giải)

### Bài 1. Tính giá trị lũy thừa
Tính giá trị của các biểu thức sau:
- a) $\left(\frac{-3}{5}\right)^2$;
- b) $\left(-\frac{2}{3}\right)^3$;
- c) $(-1{,}2)^2$;
- d) $\left(-2\frac{1}{2}\right)^3$.

### Bài 2. Viết kết quả dưới dạng một lũy thừa
- a) $\left(\frac{3}{7}\right)^4 \cdot \left(\frac{3}{7}\right)^5$;
- b) $(-0{,}5)^8 : (-0{,}5)^3$;
- c) $\left[\left(-\frac{2}{3}\right)^3\right]^4$;
- d) $\left(\frac{5}{6}\right)^3 \cdot \left(\frac{12}{25}\right)^3$.

### Bài 3. Rút gọn biểu thức lũy thừa
Rút gọn các phân thức sau:
- a) $A = \frac{2^7 \cdot 9^3}{6^5 \cdot 8^2}$;
- b) $B = \frac{15^3 \cdot 4^2}{6^4 \cdot 25^2}$;
- c) $C = \frac{4^6 \cdot 9^5 + 6^9 \cdot 120}{8^4 \cdot 3^{12} - 6^{11}}$.

### Bài 4. Tìm $x$ ở cơ số
Tìm số hữu tỉ $x$ biết:
- a) $x^2 = \frac{16}{81}$;
- b) $(2x - 1)^3 = -64$;
- c) $\left(x + \frac{1}{3}\right)^2 = \frac{25}{36}$;
- d) $(x - 5)^4 = 81$.

### Bài 5. Tìm số tự nhiên $n$ ở số mũ
Tìm số tự nhiên $n$ biết:
- a) $3^n = 81$;
- b) $\left(\frac{2}{5}\right)^n = \frac{16}{625}$;
- c) $2^{n + 2} - 2^n = 96$;
- d) $32 < 2^n \le 512$.

### Bài 6. So sánh lũy thừa
So sánh các cặp số sau:
- a) $3^{200}$ và $2^{300}$;
- b) $5^{300}$ và $3^{500}$;
- c) $2^{91}$ và $5^{35}$;
- d) $99^{20}$ và $9\,999^{10}$.

### Bài 7. Bài toán thực tế: Sự phân chia tế bào
Trong điều kiện phòng thí nghiệm lý tưởng, một chủng vi khuẩn cứ sau $30$ phút lại nhân đôi số lượng một lần. Ban đầu trong ống nghiệm có $100$ con vi khuẩn.
- a) Viết công thức tính số lượng vi khuẩn trong ống nghiệm sau $t$ giờ dưới dạng lũy thừa.
- b) Hỏi sau $4$ giờ, trong ống nghiệm có bao nhiêu con vi khuẩn?

### Bài 8. Chữ số tận cùng
Tìm chữ số tận cùng của:
- a) $2^{2028}$;
- b) $7^{2025}$;
- c) $9^{2026} + 4^{2025}$.

### Bài 9. Chứng minh chia hết
Chứng minh rằng:
- a) $A = 7^6 + 7^5 - 7^4$ chia hết cho $55$;
- b) $B = 3^{n + 3} + 3^{n + 1} + 2^{n + 3} + 2^{n + 2}$ chia hết cho $6$ với mọi $n \in \mathbb{N}^*$.

### Bài 10. Tìm cặp số nguyên $(x; y)$
Tìm các số nguyên $x, y$ thỏa mãn đẳng thức:
$$(x - 3)^2 + (y + 1)^4 = 0.$$

---

### Hướng dẫn giải chi tiết Phiếu bài tập

#### Bài 1:
- a) $\left(\frac{-3}{5}\right)^2 = \frac{(-3)^2}{5^2} = \frac{9}{25}$.
- b) $\left(-\frac{2}{3}\right)^3 = \frac{(-2)^3}{3^3} = -\frac{8}{27}$.
- c) $(-1{,}2)^2 = 1{,}44$ (hoặc $\left(-\frac{6}{5}\right)^2 = \frac{36}{25}$).
- d) Đổi hỗn số $-2\frac{1}{2} = -\frac{5}{2} \implies \left(-\frac{5}{2}\right)^3 = -\frac{125}{8}$.

#### Bài 2:
- a) $\left(\frac{3}{7}\right)^{4 + 5} = \left(\frac{3}{7}\right)^9$.
- b) $(-0{,}5)^{8 - 3} = (-0{,}5)^5$.
- c) $\left(-\frac{2}{3}\right)^{3 \cdot 4} = \left(-\frac{2}{3}\right)^{12}$.
- d) $\left(\frac{5}{6} \cdot \frac{12}{25}\right)^3 = \left(\frac{2}{5}\right)^3$.

#### Bài 3:
- a) Phân tích cơ số nguyên tố:
  $$A = \dfrac{2^7 \cdot (3^2)^3}{(2 \cdot 3)^5 \cdot (2^3)^2} = \dfrac{2^7 \cdot 3^6}{2^5 \cdot 3^5 \cdot 2^6} = \dfrac{2^7 \cdot 3^6}{2^{11} \cdot 3^5} = \dfrac{3}{2^4} = \dfrac{3}{16}.$$
- b) Phân tích:
  $$B = \dfrac{(3 \cdot 5)^3 \cdot (2^2)^2}{(2 \cdot 3)^4 \cdot (5^2)^2} = \dfrac{3^3 \cdot 5^3 \cdot 2^4}{2^4 \cdot 3^4 \cdot 5^4} = \dfrac{1}{3 \cdot 5} = \dfrac{1}{15}.$$
- c) Đưa về lũy thừa của $2$ và $3$:
  - Tử: $4^6 \cdot 9^5 + 6^9 \cdot 120 = 2^{12} \cdot 3^{10} + 2^9 \cdot 3^9 \cdot (2^3 \cdot 3 \cdot 5) = 2^{12} \cdot 3^{10} + 2^{12} \cdot 3^{10} \cdot 5 = 2^{12} \cdot 3^{10} \cdot (1 + 5) = 2^{12} \cdot 3^{10} \cdot 6 = 2^{13} \cdot 3^{11}$.
  - Mẫu: $8^4 \cdot 3^{12} - 6^{11} = 2^{12} \cdot 3^{12} - 2^{11} \cdot 3^{11} = 2^{11} \cdot 3^{11} \cdot (2 \cdot 3 - 1) = 2^{11} \cdot 3^{11} \cdot 5$.
  - Rút gọn:
    $$C = \dfrac{2^{13} \cdot 3^{11}}{2^{11} \cdot 3^{11} \cdot 5} = \dfrac{2^2}{5} = \dfrac{4}{5}.$$

#### Bài 4:
- a) $x = \pm \frac{4}{9}$.
- b) $(2x - 1)^3 = (-4)^3 \implies 2x - 1 = -4 \implies 2x = -3 \implies x = -\frac{3}{2}$.
- c) $x + \frac{1}{3} = \pm \frac{5}{6}$:
  - TH1: $x = \frac{5}{6} - \frac{1}{3} = \frac{3}{6} = \frac{1}{2}$.
  - TH2: $x = -\frac{5}{6} - \frac{1}{3} = -\frac{7}{6}$.
- d) $(x - 5)^4 = (\pm 3)^4 \implies x - 5 = 3$ hoặc $x - 5 = -3 \implies x = 8$ hoặc $x = 2$.

#### Bài 5:
- a) $3^n = 3^4 \implies n = 4$.
- b) $\left(\frac{2}{5}\right)^n = \left(\frac{2}{5}\right)^4 \implies n = 4$.
- c) $2^n(2^2 - 1) = 96 \iff 2^n \cdot 3 = 96 \iff 2^n = 32 = 2^5 \implies n = 5$.
- d) $2^5 < 2^n \le 2^9 \implies 5 < n \le 9 \implies n \in \{6; 7; 8; 9\}$.

#### Bài 6:
- a) $3^{200} = (3^2)^{100} = 9^{100}$; $2^{300} = (2^3)^{100} = 8^{100}$. Vì $9 > 8$ nên $3^{200} > 2^{300}$.
- b) $5^{300} = (5^3)^{100} = 125^{100}$; $3^{500} = (3^5)^{100} = 243^{100}$. Vì $125 < 243$ nên $5^{300} < 3^{500}$.
- c) $2^{91} > 2^{90} = (2^9)^{10} = 512^{10}$. Mà $5^{35} < 5^{36} = (5^4)^9$? So sánh: $2^{91} = (2^{13})^7 = 8\,192^7$; $5^{35} = (5^5)^7 = 3\,125^7$. Vì $8\,192 > 3\,125$ nên $2^{91} > 5^{35}$.
- d) $9\,999^{10} = [(99 \cdot 101)]^{10} > 99^{20}$ vì $101^{10} > 99^{10}$. Vậy $99^{20} < 9\,999^{10}$.

#### Bài 7:
- a) Cứ $1$ giờ có $2$ lần nhân đôi. Sau $t$ giờ có $2t$ lần nhân đôi.
  Số vi khuẩn: $N = 100 \cdot 2^{2t}$.
- b) Sau $t = 4$ giờ:
  $$N = 100 \cdot 2^{2 \cdot 4} = 100 \cdot 2^8 = 100 \cdot 256 = 25\,600\text{ (con vi khuan)}.$$

#### Bài 8:
- a) $2^{2028} = (2^4)^{507} = (\dots 6)^{507} = \dots 6$.
- b) $2025 = 4 \cdot 506 + 1 \implies 7^{2025} = (7^4)^{506} \cdot 7 = (\dots 1) \cdot 7 = \dots 7$.
- c) $9^{2026}$ (mũ chẵn) tận cùng là $1$. $4^{2025}$ (mũ lẻ) tận cùng là $4$.
  Tổng tận cùng là $1 + 4 = 5$.

#### Bài 9:
- a) $A = 7^4 \cdot (7^2 + 7 - 1) = 7^4 \cdot (49 + 7 - 1) = 7^4 \cdot 55 \ \vdots \ 55$.
- b) $B = 3^{n + 1}(3^2 + 1) + 2^{n + 2}(2 + 1) = 3^{n + 1} \cdot 10 + 2^{n + 2} \cdot 3 = 3 \cdot [3^n \cdot 10 + 2^{n + 1} \cdot 2]$.
  Vì biểu thức trong ngoặc là số chẵn nên chia hết cho $2$. Kết hợp chia hết cho $3$ và $\text{ƯCLN}(2; 3) = 1 \implies B \ \vdots \ 6$.

#### Bài 10:
Vì $(x - 3)^2 \ge 0$ và $(y + 1)^4 \ge 0$ với mọi $x, y \in \mathbb{Z}$:
Tổng bằng $0$ khi và chỉ khi cả hai số hạng đồng thời bằng $0$:
$$\begin{cases} (x - 3)^2 = 0 \\ (y + 1)^4 = 0 \end{cases} \iff \begin{cases} x - 3 = 0 \\ y + 1 = 0 \end{cases} \iff \begin{cases} x = 3 \\ y = -1 \end{cases}.$$
Vậy cặp số nguyên duy nhất là $(x; y) = (3; -1)$.

---

## F. Đề kiểm tra 15 phút (2 Đề Chẵn - Lẻ)

### Đề số 1

#### Phần I. Trắc nghiệm (4,0 điểm — Mỗi câu 1,0 điểm)
**Câu 1:** Giá trị của $\left(-\frac{1}{2}\right)^4$ là:
- A. $-\frac{1}{16}$
- B. $\frac{1}{16}$
- C. $-\frac{1}{8}$
- D. $\frac{1}{8}$

**Câu 2:** Kết quả của phép tính $3^6 : 3^2$ là:
- A. $3^3$
- B. $3^4$
- C. $3^8$
- D. $1^4$

**Câu 3:** Khẳng định nào sau đây đúng?
- A. $(-5)^2 = -25$
- B. $-5^2 = 25$
- C. $(-5)^2 = 25$
- D. $-5^2 = -10$

**Câu 4:** Tìm số tự nhiên $n$ thỏa mãn $2^n = 64$:
- A. $n = 5$
- B. $n = 6$
- C. $n = 7$
- D. $n = 8$

#### Phần II. Tự luận (6,0 điểm)
**Bài 1 (3,0 điểm):** Thực hiện phép tính:
$$M = \left(\dfrac{2}{3}\right)^3 \cdot \left(\dfrac{9}{4}\right)^2 - (-1)^{2026}.$$

**Bài 2 (3,0 điểm):** Tìm số hữu tỉ $x$ biết:
$$\left(x - \dfrac{1}{3}\right)^2 = \dfrac{16}{25}.$$

---

### Hướng dẫn chấm Đề số 1

#### Trắc nghiệm:
- Câu 1: **B** ($1{,}0$ điểm).
- Câu 2: **B** ($1{,}0$ điểm).
- Câu 3: **C** ($1{,}0$ điểm).
- Câu 4: **B** ($1{,}0$ điểm).

#### Tự luận:
**Bài 1 (3,0 điểm):**
- Tính $\left(\frac{2}{3}\right)^3 = \frac{8}{27}$ và $\left(\frac{9}{4}\right)^2 = \frac{81}{16}$ ($1{,}0$ điểm).
- Tính tích: $\frac{8}{27} \cdot \frac{81}{16} = \frac{1 \cdot 3}{1 \cdot 2} = \frac{3}{2}$ ($1{,}0$ điểm).
- Tính $(-1)^{2026} = 1 \implies M = \frac{3}{2} - 1 = \frac{1}{2}$ ($1{,}0$ điểm).

**Bài 2 (3,0 điểm):**
- Nhận xét $\frac{16}{25} = \left(\pm \frac{4}{5}\right)^2$ ($0{,}5$ điểm).
- TH1: $x - \frac{1}{3} = \frac{4}{5} \iff x = \frac{4}{5} + \frac{1}{3} = \frac{17}{15}$ ($1{,}25$ điểm).
- TH2: $x - \frac{1}{3} = -\frac{4}{5} \iff x = -\frac{4}{5} + \frac{1}{3} = -\frac{7}{15}$ ($1{,}0$ điểm).
- Kết luận: $x \in \left\{-\frac{7}{15}; \frac{17}{15}\right\}$ ($0{,}25$ điểm).

---

### Đề số 2

#### Phần I. Trắc nghiệm (4,0 điểm — Mỗi câu 1,0 điểm)
**Câu 1:** Giá trị của $\left(-\frac{3}{4}\right)^3$ là:
- A. $\frac{27}{64}$
- B. $-\frac{27}{64}$
- C. $-\frac{9}{12}$
- D. $\frac{9}{12}$

**Câu 2:** Biểu thức $(x^3)^5$ bằng:
- A. $x^8$
- B. $x^{15}$
- C. $x^2$
- D. $x^{125}$

**Câu 3:** Tích $\left(\frac{2}{5}\right)^3 \cdot \left(\frac{5}{2}\right)^3$ có giá trị bằng:
- A. $1$
- B. $0$
- C. $\frac{4}{25}$
- D. $\frac{8}{125}$

**Câu 4:** Tìm $x$ biết $x^3 = -8$:
- A. $x = 2$
- B. $x = -2$
- C. $x = \pm 2$
- D. Không có giá trị nào

#### Phần II. Tự luận (6,0 điểm)
**Bài 1 (3,0 điểm):** Rút gọn và tính giá trị biểu thức:
$$N = \dfrac{4^3 \cdot 9^4}{6^6}.$$

**Bài 2 (3,0 điểm):** Tìm số tự nhiên $n$ biết:
$$3^{n + 2} - 3^n = 216.$$

---

### Hướng dẫn chấm Đề số 2

#### Trắc nghiệm:
- Câu 1: **B** ($1{,}0$ điểm).
- Câu 2: **B** ($1{,}0$ điểm).
- Câu 3: **A** ($1{,}0$ điểm) ($\left(\frac{2}{5} \cdot \frac{5}{2}\right)^3 = 1^3 = 1$).
- Câu 4: **B** ($1{,}0$ điểm).

#### Tự luận:
**Bài 1 (3,0 điểm):**
- Đưa về thừa số nguyên tố:
  $4^3 = (2^2)^3 = 2^6$; $9^4 = (3^2)^4 = 3^8$; $6^6 = 2^6 \cdot 3^6$ ($1{,}5$ điểm).
- Rút gọn:
  $$N = \dfrac{2^6 \cdot 3^8}{2^6 \cdot 3^6} = 3^{8 - 6} = 3^2$$ ($1{,}0$ điểm).
- Kết quả: $N = 9$ ($0{,}5$ điểm).

**Bài 2 (3,0 điểm):**
- Đặt $3^n$ làm thừa số chung ($1{,}0$ điểm):
  $$3^n \cdot (3^2 - 1) = 216.$$
- Tính $3^2 - 1 = 8 \implies 3^n \cdot 8 = 216$ ($1{,}0$ điểm).
- Tìm $3^n = 216 : 8 = 27 = 3^3 \implies n = 3$ ($1{,}0$ điểm).
