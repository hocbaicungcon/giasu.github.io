---
title: 'Toán 7 Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế - Lý thuyết, Phương pháp và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 7 Bài 4 Thứ tự thực hiện phép tính và Quy tắc chuyển vế: thứ tự ưu tiên, quy tắc phá ngoặc, đổi dấu khi chuyển vế, 5 chuyên đề Olympic (thu gọn nhiều tầng ngoặc, GTLN GTNN giá trị tuyệt đối, phương trình nghiệm nguyên) và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Số hữu tỉ
  - Thứ tự phép tính
  - Quy tắc dấu ngoặc
  - Quy tắc chuyển vế
  - Kết nối tri thức
grade: 7
---

# Bài 4. Thứ tự thực hiện các phép tính. Quy tắc chuyển vế

Trong đại số, giải toán cũng giống như việc mở một chiếc hộp nhiều lớp khóa: nếu các em mở đúng thứ tự từ ngoài vào trong (hoặc từ trong ra ngoài), chiếc hộp sẽ mở ra dễ dàng; nhưng chỉ cần mở sai thứ tự một bước, kết quả sẽ bị sai lệch hoàn toàn.

Khi làm việc với các biểu thức chứa số hữu tỉ gồm đầy đủ các phép tính cộng, trừ, nhân, chia, nâng lên lũy thừa và lồng ghép nhiều loại ngoặc tròn $(\dots)$, ngoặc vuông $[\dots]$, ngoặc nhọn $\{\dots\}$, chúng ta cần tuân thủ nghiêm ngặt **thứ tự ưu tiên thực hiện các phép tính** và **quy tắc dấu ngoặc**.

Đặc biệt, **quy tắc chuyển vế** chính là chìa khóa vạn năng giúp các em giải quyết mọi bài toán tìm $x$ và là viên gạch nền móng cho toàn bộ chương trình phương trình đại số ở các lớp học sau này.

Bài học hôm nay sẽ giúp các em nắm vững quy luật, tránh xa các bẫy dấu âm thường gặp, đồng thời chinh phục $5$ chuyên đề bồi dưỡng học sinh giỏi Olympic với tư duy toán học sâu sắc!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 4: THỨ TỰ PHÉP TÍNH & QUY TẮC CHUYỂN VẾ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Thứ tự thực hiện phép tính</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Không ngoặc: Lũy thừa $\to$ Nhân/Chia $\to$ Cộng/Trừ.<br>• Có ngoặc: $(\dots) \to [\dots] \to \{\dots\}$.<br>• Cùng mức ưu tiên: thực hiện từ trái sang phải.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Quy tắc dấu ngoặc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Trước dấu $+$: giữ nguyên mọi dấu bên trong.<br>• Trước dấu $-$: đổi dấu tất cả số hạng ($+ \leftrightarrow -$).<br>• Đặt ngoặc: đặt dấu $-$ ra ngoài phải đổi dấu bên trong.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Quy tắc chuyển vế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Chuyển vế thì đổi dấu: $A + B = C \iff A = C - B$.<br>• Dạng trừ: $A - B = C \iff A = C + B$.<br>• Tích bằng $0$: $A \cdot B = 0 \iff A = 0$ hoặc $B = 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tư duy Olympic nâng cao</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Phá ngoặc thu gọn nhiều biến lồng nhau.<br>• Bất đẳng thức $|a| + |b| \ge |a + b|$ tìm GTNN.<br>• Phương trình nghiệm nguyên dạng tích $A(x) \cdot B(y) = k$.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Hãy khởi động cùng $5$ câu hỏi kiểm tra kỹ năng thứ tự phép tính và chuyển vế:

### Câu hỏi khởi động

1. **Tính giá trị biểu thức số nguyên theo đúng thứ tự:**
   - a) $8 + 6 \cdot 3$.
   - b) $(8 + 6) \cdot 3$.
   - c) $36 - 3 \cdot 2^3$.

2. **Bỏ dấu ngoặc rồi tính nhanh:**
   - a) $15 - (8 - 3)$.
   - b) $24 - (14 + 7 - 3)$.

3. **Thực hiện phép tính phân số:**
   $$\frac{1}{3} + \frac{1}{4} - \frac{5}{12}.$$

4. **Tính giá trị biểu thức có ngoặc vuông:**
   $$H = 3 \cdot [4 + (9 - 7)^2].$$

5. **Tìm số nguyên $x$ biết:**
   $$x - 7 = -12.$$

---

### Lời giải gợi ý phần Khởi động

1. **Thứ tự thực hiện:**
   - a) Nhân trước cộng sau: $8 + 6 \cdot 3 = 8 + 18 = 26$.
   - b) Trong ngoặc trước: $(8 + 6) \cdot 3 = 14 \cdot 3 = 42$.
   - c) Lũy thừa trước, nhân sau: $36 - 3 \cdot 8 = 36 - 24 = 12$.

2. **Bỏ ngoặc:**
   - a) $15 - (8 - 3) = 15 - 8 + 3 = 7 + 3 = 10$ (hoặc $15 - 5 = 10$).
   - b) $24 - (14 + 7 - 3) = 24 - 14 - 7 + 3 = 10 - 7 + 3 = 6$.

3. **Phân số:**
   Mẫu số chung là $12$:
   $$\frac{1}{3} + \frac{1}{4} - \frac{5}{12} = \frac{4 + 3 - 5}{12} = \frac{2}{12} = \frac{1}{6}.$$

4. **Ngoặc vuông:**
   Trong ngoặc tròn trước: $(9 - 7)^2 = 2^2 = 4$.
   Trong ngoặc vuông: $4 + 4 = 8$.
   Ngoài ngoặc: $H = 3 \cdot 8 = 24$.

5. **Tìm $x$:**
   Chuyển $-7$ sang vế phải đổi dấu thành $+7$:
   $$x = -12 + 7 = -5.$$

---

## A. Lý thuyết trọng tâm

### 1. Thứ tự thực hiện các phép tính trong $\mathbb{Q}$

> [!NOTE]
> **Quy tắc thứ tự ưu tiên:**
> 1. **Biểu thức không có dấu ngoặc:**
>    $$\text{Luy thua} \longrightarrow \text{Nhan va chia} \longrightarrow \text{Cong va tru}.$$
>    *(Lũy thừa $\to$ Nhân và chia $\to$ Cộng và trừ; nếu chỉ có cộng/trừ hoặc nhân/chia thì tính từ trái sang phải).*
> 2. **Biểu thức có dấu ngoặc:**
>    Thực hiện các phép tính trong dấu ngoặc trước theo thứ tự:
>    Ngoặc tròn $(\dots) \longrightarrow$ Ngoặc vuông $[\dots] \longrightarrow$ Ngoặc nhọn $\{\dots\}$.

**Ví dụ 1:** Tính giá trị các biểu thức sau:
- a) $A = 3^2 - 4 \cdot \frac{1}{2} + \left(-\frac{2}{3}\right)^2$.
- b) $B = 8 - \left[5 - \left(3 - 7\right)\right]$.

*Lời giải:*
- a) Thực hiện các lũy thừa trước:
  $$3^2 = 9; \quad \left(-\frac{2}{3}\right)^2 = \frac{4}{9}.$$
  Thực hiện phép nhân:
  $$4 \cdot \frac{1}{2} = 2.$$
  Cuối cùng thực hiện cộng, trừ:
  $$A = 9 - 2 + \frac{4}{9} = 7 + \frac{4}{9} = \frac{63 + 4}{9} = \frac{67}{9}.$$
- b) Thực hiện trong ngoặc tròn trước: $3 - 7 = -4$.
  Thực hiện trong ngoặc vuông: $5 - (-4) = 5 + 4 = 9$.
  Thực hiện ngoài ngoặc:
  $$B = 8 - 9 = -1.$$

---

### 2. Quy tắc dấu ngoặc

> [!NOTE]
> **Quy tắc bỏ dấu ngoặc:**
> 1. Khi bỏ dấu ngoặc có dấu cộng ($+$) đằng trước, ta **giữ nguyên dấu** của các số hạng trong dấu ngoặc:
>    $$x + (y - z + t) = x + y - z + t.$$
> 2. Khi bỏ dấu ngoặc có dấu trừ ($-$) đằng trước, ta phải **đổi dấu tất cả các số hạng** trong dấu ngoặc (dấu $+$ đổi thành dấu $-$, dấu $-$ đổi thành dấu $+$):
>    $$x - (y - z + t) = x - y + z - t.$$

#### Quy tắc đặt dấu ngoặc (nhóm số hạng):
- Khi đặt dấu ngoặc để nhóm các số hạng, nếu đằng trước dấu ngoặc có dấu trừ ($-$) thì ta phải **đổi dấu tất cả các số hạng** đưa vào trong ngoặc:
  $$a - b + c = a - (b - c).$$
- Nếu đằng trước có dấu cộng ($+$) thì giữ nguyên dấu:
  $$a - b + c = a + (-b + c).$$

**Ví dụ 2:** Tính nhanh bằng cách bỏ dấu ngoặc:
$$M = \frac{4}{5} - \left(\frac{1}{3} - \frac{1}{5}\right) - \left(-\frac{2}{3}\right).$$

*Lời giải:*
Phá các dấu ngoặc:
$$M = \frac{4}{5} - \frac{1}{3} + \frac{1}{5} + \frac{2}{3}.$$
Nhóm các số hạng có cùng mẫu số:
$$M = \left(\frac{4}{5} + \frac{1}{5}\right) + \left(\frac{2}{3} - \frac{1}{3}\right) = \frac{5}{5} + \frac{1}{3} = 1 + \frac{1}{3} = \frac{4}{3}.$$

---

### 3. Quy tắc chuyển vế

> [!IMPORTANT]
> **Quy tắc chuyển vế:**
> Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải **đổi dấu** số hạng đó:
> $$x + a = b \iff x = b - a.$$
> $$x - a = b \iff x = b + a.$$

#### Định lý về tích bằng 0:
Nếu tích của nhiều số hữu tỉ bằng $0$ thì ít nhất một trong các thừa số phải bằng $0$:
$$A \cdot B = 0 \iff A = 0 \quad \text{hay} \quad B = 0.$$

**Ví dụ 3:** Tìm số hữu tỉ $x$ biết:
- a) $x + \frac{3}{7} = \frac{-2}{5}$.
- b) $\frac{1}{3} - 2x = \frac{5}{6}$.

*Lời giải:*
- a) Chuyển $+\frac{3}{7}$ sang vế phải và đổi dấu thành $-\frac{3}{7}$:
  $$x = \frac{-2}{5} - \frac{3}{7} = \frac{-14 - 15}{35} = \frac{-29}{35}.$$
- b) Chuyển $-2x$ sang vế phải để thành dương, chuyển $\frac{5}{6}$ sang vế trái:
  $$2x = \frac{1}{3} - \frac{5}{6} = \frac{2}{6} - \frac{5}{6} = \frac{-3}{6} = \frac{-1}{2}.$$
  Tìm $x$:
  $$x = \frac{-1}{2} : 2 = \frac{-1}{4}.$$

---

### 4. Những bẫy sai lầm kinh điển cần tránh

> [!WARNING]
> 1. **Chỉ đổi dấu số hạng đầu tiên khi phá ngoặc trừ:**
>    - Viết $10 - (4 - 7) = 10 - 4 - 7$ là **SAI HOÀN TOÀN**!
>    - Đúng phải là: $10 - (4 - 7) = 10 - 4 + 7 = 13$.
> 2. **Chuyển vế quên đổi dấu:**
>    - $x - \frac{2}{5} = \frac{1}{3} \implies x = \frac{1}{3} - \frac{2}{5}$ (SAI).
>    - Đúng phải là: $x = \frac{1}{3} + \frac{2}{5}$.
> 3. **Nhầm lẫn thứ tự nhân chia trước cộng trừ:**
>    - Biểu thức $2 + 3 \cdot 4$: Rất nhiều bạn lấy $2 + 3 = 5$ rồi $5 \cdot 4 = 20$ (SAI).
>    - Đúng phải nhân trước: $2 + 12 = 14$.
> 4. **Bỏ ngoặc khi nhóm số có dấu trừ đằng trước:**
>    - $a - b - c = a - (b - c)$ (SAI dấu của $c$).
>    - Đúng phải là: $a - b - c = a - (b + c)$.

---

## B. Các dạng bài tập thường gặp & Phương pháp giải

### Dạng 1: Thực hiện phép tính phức hợp chứa nhiều loại ngoặc

#### Phương pháp giải:
- Thực hiện từ trong ra ngoài: $(\dots) \to [\dots] \to \{\dots\}$.
- Trong mỗi ngoặc, tính theo thứ tự: Lũy thừa $\to$ Nhân/Chia $\to$ Cộng/Trừ.
- Đổi các số thập phân và hỗn số về phân số tối giản trước khi tính.

**Bài 1.1:** Tính giá trị của biểu thức:
$$P = \frac{3}{4} - \left[\frac{1}{2} - \left(\frac{2}{3} - \frac{5}{6}\right)\right]^2.$$

*Lời giải:*
- Tính trong ngoặc tròn:
  $$\frac{2}{3} - \frac{5}{6} = \frac{4}{6} - \frac{5}{6} = \frac{-1}{6}.$$
- Tính trong ngoặc vuông:
  $$\frac{1}{2} - \left(\frac{-1}{6}\right) = \frac{1}{2} + \frac{1}{6} = \frac{3}{6} + \frac{1}{6} = \frac{4}{6} = \frac{2}{3}.$$
- Nâng lên lũy thừa:
  $$\left[\frac{2}{3}\right]^2 = \frac{4}{9}.$$
- Thực hiện phép trừ cuối cùng:
  $$P = \frac{3}{4} - \frac{4}{9} = \frac{27 - 16}{36} = \frac{11}{36}.$$

---

### Dạng 2: Tính nhanh bằng cách phá ngoặc và nhóm số hạng hợp lý

#### Phương pháp giải:
- Khi biểu thức gồm nhiều phân số có cùng mẫu số hoặc mẫu số tương thích nhưng nằm rải rác trong các dấu ngoặc, ta **bỏ dấu ngoặc** trước (chú ý đổi dấu nếu trước ngoặc là dấu $-$).
- Sau đó dùng tính chất giao hoán và kết hợp để nhóm các số có cùng mẫu số lại với nhau.

**Bài 2.1:** Tính hợp lý giá trị của biểu thức:
$$Q = \left(4 - \frac{3}{7} + \frac{2}{5}\right) - \left(3 + \frac{4}{7} - \frac{3}{5}\right) - \left(1 - \frac{2}{7}\right).$$

*Lời giải:*
Phá toàn bộ các dấu ngoặc:
$$Q = 4 - \frac{3}{7} + \frac{2}{5} - 3 - \frac{4}{7} + \frac{3}{5} - 1 + \frac{2}{7}.$$
Nhóm các số nguyên, các phân số cùng mẫu $7$ và các phân số cùng mẫu $5$:
$$Q = (4 - 3 - 1) + \left(-\frac{3}{7} - \frac{4}{7} + \frac{2}{7}\right) + \left(\frac{2}{5} + \frac{3}{5}\right)$$
$$Q = 0 + \left(\frac{-3 - 4 + 2}{7}\right) + \frac{5}{5}$$
$$Q = \frac{-5}{7} + 1 = \frac{-5}{7} + \frac{7}{7} = \frac{2}{7}.$$

---

### Dạng 3: Tìm $x$ bằng quy tắc chuyển vế

#### Phương pháp giải:
- Thu gọn các vế nếu có thể.
- Chuyển các số hạng chứa $x$ về một vế (thường là vế trái), chuyển các hằng số về vế còn lại (vế phải).
- Luôn nhớ: **Chuyển vế phải đổi dấu!**
- Đưa về dạng $a \cdot x = b \implies x = b : a$ ($a \ne 0$).

**Bài 3.1:** Tìm số hữu tỉ $x$ biết:
- a) $\frac{3}{4} - \left(x + \frac{1}{2}\right) = \frac{-5}{6}$.
- b) $\frac{2}{3}x - \frac{1}{4} = \frac{5}{12} + \frac{1}{6}x$.

*Lời giải:*
- a) Phá ngoặc ở vế trái:
  $$\frac{3}{4} - x - \frac{1}{2} = \frac{-5}{6}$$
  Chuyển $-x$ sang vế phải và $\frac{-5}{6}$ sang vế trái:
  $$x = \frac{3}{4} - \frac{1}{2} + \frac{5}{6}$$
  Quy đồng mẫu số chung là $12$:
  $$x = \frac{9 - 6 + 10}{12} = \frac{13}{12}.$$
- b) Chuyển các số hạng chứa $x$ sang vế trái, hằng số sang vế phải:
  $$\frac{2}{3}x - \frac{1}{6}x = \frac{5}{12} + \frac{1}{4}$$
  Thu gọn hai vế:
  $$\left(\frac{4}{6} - \frac{1}{6}\right)x = \frac{5}{12} + \frac{3}{12}$$
  $$\frac{3}{6}x = \frac{8}{12} \iff \frac{1}{2}x = \frac{2}{3}$$
  Tìm $x$:
  $$x = \frac{2}{3} : \frac{1}{2} = \frac{2}{3} \cdot 2 = \frac{4}{3}.$$

---

### Dạng 4: Tìm $x$ trong phương trình tích và biểu thức chứa dấu giá trị tuyệt đối

#### Phương pháp giải:
- Dạng $A(x) \cdot B(x) = 0 \iff A(x) = 0$ hoặc $B(x) = 0$.
- Dạng $|A(x)| = k$ ($k \ge 0$): $A(x) = k$ hoặc $A(x) = -k$.

**Bài 4.1:** Tìm $x$ biết:
- a) $\left(\frac{3}{5}x - \frac{2}{3}\right)\left(x + \frac{4}{7}\right) = 0$.
- b) $\left|x - \frac{3}{4}\right| - \frac{1}{2} = \frac{1}{3}$.

*Lời giải:*
- a) Xét hai trường hợp:
  - TH1: $\frac{3}{5}x - \frac{2}{3} = 0 \iff \frac{3}{5}x = \frac{2}{3} \iff x = \frac{2}{3} : \frac{3}{5} = \frac{10}{9}$.
  - TH2: $x + \frac{4}{7} = 0 \iff x = -\frac{4}{7}$.
  Vậy $x \in \left\{-\frac{4}{7}; \frac{10}{9}\right\}$.
- b) Chuyển vế:
  $$\left|x - \frac{3}{4}\right| = \frac{1}{3} + \frac{1}{2} = \frac{5}{6}.$$
  Vì $\frac{5}{6} > 0$, ta có hai trường hợp:
  - TH1: $x - \frac{3}{4} = \frac{5}{6} \iff x = \frac{5}{6} + \frac{3}{4} = \frac{10 + 9}{12} = \frac{19}{12}$.
  - TH2: $x - \frac{3}{4} = -\frac{5}{6} \iff x = -\frac{5}{6} + \frac{3}{4} = \frac{-10 + 9}{12} = \frac{-1}{12}$.
  Vậy $x \in \left\{\frac{-1}{12}; \frac{19}{12}\right\}$.

---

### Dạng 5: Bài toán thực tế liên môn

**Bài 5.1:** Một dự án làm đường giao thông nông thôn dự kiến thi công trong $3$ giai đoạn:
- Giai đoạn $1$: Làm được $\frac{1}{3}$ tổng chiều dài tuyến đường.
- Giai đoạn $2$: Làm được $\frac{2}{5}$ chiều dài đoạn đường còn lại.
- Giai đoạn $3$: Thi công nốt $24\text{ km}$ đường cuối cùng.
1. Tính tổng chiều dài toàn bộ tuyến đường giao thông đó.
2. Tính chiều dài đoạn đường đã làm ở giai đoạn $1$ và giai đoạn $2$.

*Lời giải:*
1. Coi toàn bộ tuyến đường là $1$ đơn vị:
   - Phân số chỉ chiều dài còn lại sau giai đoạn $1$:
     $$1 - \frac{1}{3} = \frac{2}{3}\text{ (tuyen duong)}.$$
   - Phân số chỉ chiều dài đường làm trong giai đoạn $2$:
     $$\frac{2}{3} \cdot \frac{2}{5} = \frac{4}{15}\text{ (tuyen duong)}.$$
   - Phân số chỉ chiều dài đường làm trong giai đoạn $3$:
     $$\frac{2}{3} - \frac{4}{15} = \frac{10 - 4}{15} = \frac{6}{15} = \frac{2}{5}\text{ (tuyen duong)}.$$
   - Tổng chiều dài toàn bộ tuyến đường là:
     $$24 : \frac{2}{5} = 24 \cdot \frac{5}{2} = 60\text{ km}.$$
2. Chiều dài đoạn đường ở từng giai đoạn:
   - Giai đoạn $1$: $60 \cdot \frac{1}{3} = 20\text{ km}$.
   - Giai đoạn $2$: $60 \cdot \frac{4}{15} = 16\text{ km}$.

---

## C. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Phá ngoặc và rút gọn biểu thức nhiều tầng ngoặc chứa biến

> [!TIP]
> **Chiến thuật:**
> Khi biểu thức chứa nhiều loại ngoặc lồng nhau $(\dots) \subset [\dots] \subset \{\dots\}$, ta có thể phá ngoặc theo hai cách:
> - **Cách 1:** Phá từ trong ra ngoài (từ ngoặc tròn, đến ngoặc vuông, rồi ngoặc nhọn).
> - **Cách 2:** Phá từ ngoài vào trong (đổi dấu toàn bộ biểu thức trong ngoặc nếu trước có dấu trừ).

**Bài toán Olympic 1:** Rút gọn biểu thức đại số sau:
$$A = 3x - \left\{2y - [5x - (3x - 2y) + 4] - (x - y)\right\}.$$

*Lời giải:*
Phá ngoặc từ trong ra ngoài:
- Bước 1: Phá ngoặc tròn $(3x - 2y)$:
  $$5x - (3x - 2y) + 4 = 5x - 3x + 2y + 4 = 2x + 2y + 4.$$
- Bước 2: Thay vào ngoặc vuông và phá ngoặc vuông:
  $$2y - [2x + 2y + 4] = 2y - 2x - 2y - 4 = -2x - 4.$$
- Bước 3: Phá ngoặc tròn còn lại $(x - y)$ và kết hợp trong ngoặc nhọn:
  $$\{-2x - 4 - (x - y)\} = -2x - 4 - x + y = -3x + y - 4.$$
- Bước 4: Phá ngoặc nhọn ngoài cùng:
  $$A = 3x - \{-3x + y - 4\} = 3x + 3x - y + 4 = 6x - y + 4.$$

---

### Chuyên đề 2: Bất đẳng thức giá trị tuyệt đối và bài toán tìm GTNN / GTLN

> [!NOTE]
> **Bất đẳng thức tam giác cho giá trị tuyệt đối:**
> Với mọi số thực $a, b$:
> $$|a| + |b| \ge |a + b|.$$
> Dấu đẳng thức xảy ra khi và chỉ khi $a$ và $b$ cùng dấu (tức $a \cdot b \ge 0$).
> Hệ quả: $|a| + |b| = |a| + |-b| \ge |a - b|$.

**Bài toán Olympic 2:** Tìm giá trị nhỏ nhất của biểu thức:
$$P = |x - 2| + |x - 7| \quad (x \in \mathbb{Q}).$$

*Lời giải:*
Áp dụng tính chất $|x - 7| = |7 - x|$:
$$P = |x - 2| + |7 - x|.$$
Áp dụng bất đẳng thức $|a| + |b| \ge |a + b|$ với $a = x - 2$ và $b = 7 - x$:
$$P \ge |(x - 2) + (7 - x)| = |5| = 5.$$

Dấu đẳng thức xảy ra khi:
$$(x - 2)(7 - x) \ge 0 \iff 2 \le x \le 7.$$
Vậy giá trị nhỏ nhất của $P$ là $5$, đạt được khi mọi $x \in \mathbb{Q}$ thỏa mãn $2 \le x \le 7$.

---

### Chuyên đề 3: Phương trình nghiệm nguyên dạng tích sau chuyển vế

**Bài toán Olympic 3:** Tìm tất cả các cặp số nguyên $(x; y)$ thỏa mãn đẳng thức:
$$xy - 2x + 3y = 11.$$

*Lời giải:*
Nhóm các số hạng chứa $x$ và đặt nhân tử chung:
$$x(y - 2) + 3y = 11.$$
Để xuất hiện thừa số $(y - 2)$, ta trừ cả hai vế cho $3 \cdot 2 = 6$:
$$x(y - 2) + 3(y - 2) = 11 - 6$$
$$(x + 3)(y - 2) = 5.$$

Vì $x, y \in \mathbb{Z}$ nên $(x + 3)$ và $(y - 2)$ là các ước nguyên của $5$.
Ta có $\text{Ư}(5) = \{-5; -1; 1; 5\}$.
Lập bảng giá trị:

| $x + 3$ | $-5$ | $-1$ | $1$ | $5$ |
| :---: | :---: | :---: | :---: | :---: |
| $y - 2$ | $-1$ | $-5$ | $5$ | $1$ |
| $x$ | $-8$ | $-4$ | $-2$ | $2$ |
| $y$ | $1$ | $-3$ | $7$ | $3$ |

*Kết luận:* Các cặp số nguyên $(x; y)$ thỏa mãn là:
$$(-8; 1), \quad (-4; -3), \quad (-2; 7), \quad (2; 3).$$

---

### Chuyên đề 4: Phương trình chứa nhiều dấu giá trị tuyệt đối bằng bảng xét dấu

**Bài toán Olympic 4:** Tìm $x \in \mathbb{Q}$ thỏa mãn:
$$|x - 1| + |2x + 4| = 5.$$

*Lời giải:*
Cho từng biểu thức trong dấu giá trị tuyệt đối bằng $0$:
- $x - 1 = 0 \iff x = 1$.
- $2x + 4 = 0 \iff x = -2$.

Hai điểm $x = -2$ và $x = 1$ chia trục số thành $3$ khoảng:
- **Khoảng 1 ($x < -2$):**
  Ta có $x - 1 < 0$ và $2x + 4 < 0$. Khi đó:
  $$-(x - 1) - (2x + 4) = 5 \iff -x + 1 - 2x - 4 = 5 \iff -3x - 3 = 5 \iff -3x = 8 \iff x = -\frac{8}{3}.$$
  Vì $-\frac{8}{3} \approx -2{,}67 < -2$ (thỏa mãn khoảng xét).
- **Khoảng 2 ($-2 \le x < 1$):**
  Ta có $x - 1 < 0$ và $2x + 4 \ge 0$. Khi đó:
  $$-(x - 1) + (2x + 4) = 5 \iff -x + 1 + 2x + 4 = 5 \iff x + 5 = 5 \iff x = 0.$$
  Vì $0 \in [-2; 1)$ (thỏa mãn khoảng xét).
- **Khoảng 3 ($x \ge 1$):**
  Ta có $x - 1 \ge 0$ và $2x + 4 > 0$. Khi đó:
  $$(x - 1) + (2x + 4) = 5 \iff 3x + 3 = 5 \iff 3x = 2 \iff x = \frac{2}{3}.$$
  Vì $\frac{2}{3} < 1$ (loại, không thỏa mãn khoảng $x \ge 1$).

*Kết luận:* Phương trình có hai nghiệm: $x = -\frac{8}{3}$ hoặc $x = 0$.

---

### Chuyên đề 5: Rút gọn phân thức có tỉ số hệ số đồng dạng

Trong các kỳ thi học sinh giỏi, ta thường gặp dạng phân thức mà tử số và mẫu số có cấu trúc các phân số giống nhau nhưng khác nhau về hệ số tỉ lệ.

**Bài toán Olympic 5:** Tính giá trị của biểu thức:
$$M = \frac{\frac{3}{4} - \frac{3}{11} + \frac{3}{13}}{\frac{5}{4} - \frac{5}{11} + \frac{5}{13}} + \frac{\frac{1}{2} - \frac{1}{3} + \frac{1}{4}}{\frac{5}{4} - \frac{5}{6} + \frac{5}{8}}.$$

*Lời giải:*
- Xét phân thức thứ nhất:
  Đặt $3$ làm thừa số chung ở tử và $5$ làm thừa số chung ở mẫu:
  $$A_1 = \frac{3 \cdot \left(\frac{1}{4} - \frac{1}{11} + \frac{1}{13}\right)}{5 \cdot \left(\frac{1}{4} - \frac{1}{11} + \frac{1}{13}\right)} = \frac{3}{5}.$$
- Xét phân thức thứ hai:
  Ở mẫu số, ta thấy $\frac{5}{4} = \frac{5}{2} \cdot \frac{1}{2}$; $\frac{5}{6} = \frac{5}{2} \cdot \frac{1}{3}$; $\frac{5}{8} = \frac{5}{2} \cdot \frac{1}{4}$.
  Đặt $\frac{5}{2}$ làm thừa số chung ở mẫu số:
  $$A_2 = \frac{\frac{1}{2} - \frac{1}{3} + \frac{1}{4}}{\frac{5}{2} \cdot \left(\frac{1}{2} - \frac{1}{3} + \frac{1}{4}\right)} = \frac{1}{\frac{5}{2}} = \frac{2}{5}.$$
- Tổng giá trị:
  $$M = A_1 + A_2 = \frac{3}{5} + \frac{2}{5} = \frac{5}{5} = 1.$$

---

## D. 10 Câu hỏi Trắc nghiệm Tương tác (Quiz)

```quiz
type: choice
question: 'Trong biểu thức không có ngoặc, thứ tự thực hiện phép tính đúng là:'
options:
  - 'Cộng, trừ $\to$ Nhân, chia $\to$ Lũy thừa'
  - 'Lũy thừa $\to$ Nhân, chia $\to$ Cộng, trừ'
  - 'Nhân, chia $\to$ Lũy thừa $\to$ Cộng, trừ'
  - 'Lũy thừa $\to$ Cộng, trừ $\to$ Nhân, chia'
answer: 2
explanation: 'Quy tắc chuẩn: Lũy thừa $\to$ Nhân và chia $\to$ Cộng và trừ.'
```

```quiz
type: choice
question: 'Khi bỏ dấu ngoặc trong biểu thức $x - (y - z + t)$, ta được kết quả là:'
options:
  - '$x - y - z + t$'
  - '$x - y + z - t$'
  - '$x - y + z + t$'
  - '$x + y - z + t$'
  - '$x - y - z - t$'
answer: 2
explanation: 'Trước dấu ngoặc có dấu trừ, đổi dấu tất cả các số hạng bên trong: $y \to -y$, $-z \to +z$, $+t \to -t$.'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $15 - 3 \cdot 2^2$ là:'
options:
  - '$48$'
  - '$3$'
  - '$144$'
  - '$-3$'
answer: 2
explanation: 'Lũy thừa trước: $2^2 = 4$. Nhân: $3 \cdot 4 = 12$. Trừ: $15 - 12 = 3$.'
```

```quiz
type: choice
question: 'Tìm $x$ biết $x - \frac{3}{5} = \frac{1}{2}$:'
options:
  - '$\frac{-1}{10}$'
  - '$\frac{11}{10}$'
  - '$\frac{1}{10}$'
  - '$\frac{-11}{10}$'
answer: 2
explanation: 'Chuyển vế: $x = \frac{1}{2} + \frac{3}{5} = \frac{5 + 6}{10} = \frac{11}{10}$.'
```

```quiz
type: choice
question: 'Tính nhanh biểu thức $\left(\frac{5}{7} - \frac{2}{3}\right) + \left(\frac{2}{7} + \frac{2}{3}\right)$:'
options:
  - '$0$'
  - '$1$'
  - '$\frac{4}{3}$'
  - '$\frac{7}{3}$'
answer: 2
explanation: 'Phá ngoặc: $\left(\frac{5}{7} + \frac{2}{7}\right) + \left(-\frac{2}{3} + \frac{2}{3}\right) = 1 + 0 = 1$.'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $4 \cdot [2 + (5 - 3)^3]$ là:'
options:
  - '$40$'
  - '$24$'
  - '$32$'
  - '$64$'
answer: 1
explanation: 'Trong ngoặc tròn: $5 - 3 = 2$. Lũy thừa: $2^3 = 8$. Trong ngoặc vuông: $2 + 8 = 10$. Tích: $4 \cdot 10 = 40$.'
```

```quiz
type: choice
question: 'Số nghiệm của phương trình $\left(x - \frac{1}{4}\right)\left(2x + \frac{3}{5}\right) = 0$ là:'
options:
  - '$0$'
  - '$1$'
  - '$2$'
  - 'Vô số'
answer: 3
explanation: 'Phương trình tích có 2 nghiệm: $x = \frac{1}{4}$ hoặc $x = -\frac{3}{10}$.'
```

```quiz
type: choice
question: 'Giá trị nhỏ nhất của biểu thức $A = |x - 3| + 5$ là:'
options:
  - '$3$'
  - '$5$'
  - '$8$'
  - '$0$'
answer: 2
explanation: 'Vì $|x - 3| \ge 0$ nên $A \ge 0 + 5 = 5$. Dấu bằng đạt được khi $x = 3$.'
```

```quiz
type: choice
question: 'Tìm $x$ biết $\frac{1}{2} - 3x = \frac{5}{4}$:'
options:
  - '$\frac{-1}{4}$'
  - '$\frac{1}{4}$'
  - '$\frac{-7}{12}$'
  - '$\frac{7}{12}$'
answer: 1
explanation: 'Chuyển vế: $3x = \frac{1}{2} - \frac{5}{4} = \frac{-3}{4} \implies x = \frac{-3}{4} : 3 = \frac{-1}{4}$.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - '$a - (b - c) = a - b - c$'
  - '$a + b = c \iff a = c + b$'
  - '$a - b = c \iff a = c + b$'
  - '$a : (b + c) = a : b + a : c$'
answer: 3
explanation: 'Quy tắc chuyển vế: khi chuyển $-b$ sang vế phải thì đổi dấu thành $+b \implies a = c + b$.'
```

---

## E. Phiếu bài tập tự luyện toàn diện (Có lời giải)

### Bài 1. Thực hiện phép tính đúng thứ tự
Tính giá trị các biểu thức:
- a) $A = \frac{2}{3} + \frac{3}{4} \cdot \left(-\frac{4}{9}\right)$;
- b) $B = \left(\frac{1}{2}\right)^2 - \frac{3}{8} : \frac{-9}{4}$;
- c) $C = 2^3 - 3 \cdot \left(\frac{1}{3}\right)^2 + \left(-\frac{1}{2}\right)^0$.

### Bài 2. Biểu thức chứa nhiều dấu ngoặc
Tính giá trị các biểu thức:
- a) $M = 15 - \left[4 + \left(3 - 2^2\right)\right]$;
- b) $N = \frac{5}{6} - \left[\frac{1}{3} - \left(\frac{1}{4} - \frac{2}{3}\right)\right]$;
- c) $P = 2 \cdot \left\{\left[3 \cdot (4 - 2)^2 + 10\right] : 11\right\}$.

### Bài 3. Tính nhanh bằng quy tắc bỏ dấu ngoặc
Tính hợp lý:
- a) $\left(\frac{7}{12} - \frac{3}{4}\right) + \left(\frac{5}{12} + \frac{3}{4}\right)$;
- b) $\left(5 - \frac{2}{3} + \frac{1}{4}\right) - \left(2 + \frac{1}{3} - \frac{3}{4}\right) - \left(1 - \frac{4}{3}\right)$;
- c) $\frac{13}{25} \cdot \frac{-8}{9} + \frac{13}{25} \cdot \frac{-1}{9}$.

### Bài 4. Tìm $x$ bằng quy tắc chuyển vế
Tìm số hữu tỉ $x$ biết:
- a) $x + \frac{4}{5} = \frac{-1}{3}$;
- b) $\frac{3}{7} - x = \frac{2}{5}$;
- c) $\frac{1}{2} - 2x = \frac{-3}{4}$;
- d) $\frac{2}{3} + \frac{1}{3} : x = \frac{5}{6}$.

### Bài 5. Tìm $x$ trong phương trình tích và lũy thừa
- a) $\left(x - \frac{2}{7}\right)\left(3x + \frac{1}{2}\right) = 0$;
- b) $\left(2x - \frac{1}{3}\right)^2 = \frac{25}{36}$;
- c) $(x + 1)^3 = -27$.

### Bài 6. Tìm $x$ chứa dấu giá trị tuyệt đối
- a) $\left|x - \frac{1}{3}\right| = \frac{4}{5}$;
- b) $2\left|x + \frac{1}{2}\right| - \frac{1}{3} = \frac{1}{2}$;
- c) $\left|2x - 3\right| + 4 = 1$.

### Bài 7. Bài toán thực tế 1: Tiết kiệm chi tiêu
Bạn Hoàng có một khoản tiền tiết kiệm:
- Hoàng dùng $\frac{2}{5}$ số tiền để mua một đôi giày thể thao.
- Hoàng dùng $\frac{1}{4}$ số tiền để mua một chiếc áo khoác.
- Sau khi mua hai món đồ trên, Hoàng còn lại $420\,000$ đồng.
Hỏi ban đầu Hoàng có bao nhiêu tiền tiết kiệm?

### Bài 8. Rút gọn biểu thức đại số chứa ngoặc lồng nhau
Cho biểu thức:
$$K = 5a - \{3b - [2a - (b - 4a) + 3] - 2b\}.$$
- a) Rút gọn biểu thức $K$.
- b) Tính giá trị của $K$ khi $a = \frac{1}{3}$ và $b = -2$.

### Bài 9. Tìm giá trị nhỏ nhất
Tìm giá trị nhỏ nhất của biểu thức:
$$Q = |x - 1| + |x - 5| + 2026.$$

### Bài 10. Phương trình nghiệm nguyên
Tìm các cặp số nguyên $(x; y)$ thỏa mãn đẳng thức:
$$xy + 3x - y = 8.$$

---

### Hướng dẫn giải chi tiết Phiếu bài tập

#### Bài 1:
- a) Nhân trước: $\frac{3}{4} \cdot \left(-\frac{4}{9}\right) = -\frac{1}{3}$.
  Cộng: $A = \frac{2}{3} + \left(-\frac{1}{3}\right) = \frac{1}{3}$.
- b) Lũy thừa: $\left(\frac{1}{2}\right)^2 = \frac{1}{4}$.
  Chia: $\frac{3}{8} : \frac{-9}{4} = \frac{3}{8} \cdot \frac{4}{-9} = -\frac{1}{6}$.
  Trừ: $B = \frac{1}{4} - \left(-\frac{1}{6}\right) = \frac{1}{4} + \frac{1}{6} = \frac{5}{12}$.
- c) $C = 8 - 3 \cdot \frac{1}{9} + 1 = 8 - \frac{1}{3} + 1 = 9 - \frac{1}{3} = \frac{26}{3}$.

#### Bài 2:
- a) $3 - 2^2 = 3 - 4 = -1$.
  $4 + (-1) = 3$.
  $M = 15 - 3 = 12$.
- b) $\frac{1}{4} - \frac{2}{3} = \frac{3 - 8}{12} = \frac{-5}{12}$.
  $\frac{1}{3} - \left(\frac{-5}{12}\right) = \frac{4 + 5}{12} = \frac{9}{12} = \frac{3}{4}$.
  $N = \frac{5}{6} - \frac{3}{4} = \frac{10 - 9}{12} = \frac{1}{12}$.
- c) $(4 - 2)^2 = 2^2 = 4$.
  $3 \cdot 4 + 10 = 22$.
  $22 : 11 = 2$.
  $P = 2 \cdot 2 = 4$.

#### Bài 3:
- a) $\left(\frac{7}{12} + \frac{5}{12}\right) + \left(-\frac{3}{4} + \frac{3}{4}\right) = \frac{12}{12} + 0 = 1$.
- b) Phá ngoặc:
  $5 - \frac{2}{3} + \frac{1}{4} - 2 - \frac{1}{3} + \frac{3}{4} - 1 + \frac{4}{3}$.
  Nhóm:
  $(5 - 2 - 1) + \left(-\frac{2}{3} - \frac{1}{3} + \frac{4}{3}\right) + \left(\frac{1}{4} + \frac{3}{4}\right) = 2 + \frac{1}{3} + 1 = 3 + \frac{1}{3} = \frac{10}{3}$.
- c) $\frac{13}{25} \cdot \left(\frac{-8}{9} + \frac{-1}{9}\right) = \frac{13}{25} \cdot (-1) = -\frac{13}{25}$.

#### Bài 4:
- a) $x = \frac{-1}{3} - \frac{4}{5} = \frac{-5 - 12}{15} = \frac{-17}{15}$.
- b) $x = \frac{3}{7} - \frac{2}{5} = \frac{15 - 14}{35} = \frac{1}{35}$.
- c) $2x = \frac{1}{2} - \left(-\frac{3}{4}\right) = \frac{2 + 3}{4} = \frac{5}{4} \implies x = \frac{5}{4} : 2 = \frac{5}{8}$.
- d) $\frac{1}{3} : x = \frac{5}{6} - \frac{2}{3} = \frac{1}{6} \implies x = \frac{1}{3} : \frac{1}{6} = 2$.

#### Bài 5:
- a) $x = \frac{2}{7}$ hoặc $x = -\frac{1}{6}$.
- b) $2x - \frac{1}{3} = \pm \frac{5}{6}$:
  - TH1: $2x = \frac{5}{6} + \frac{1}{3} = \frac{7}{6} \implies x = \frac{7}{12}$.
  - TH2: $2x = -\frac{5}{6} + \frac{1}{3} = -\frac{3}{6} = -\frac{1}{2} \implies x = -\frac{1}{4}$.
- c) $x + 1 = -3 \implies x = -4$.

#### Bài 6:
- a) $x - \frac{1}{3} = \pm \frac{4}{5} \implies x = \frac{17}{15}$ hoặc $x = -\frac{7}{15}$.
- b) $2|x + \frac{1}{2}| = \frac{1}{2} + \frac{1}{3} = \frac{5}{6} \implies |x + \frac{1}{2}| = \frac{5}{12}$.
  - $x = \frac{5}{12} - \frac{1}{2} = -\frac{1}{12}$.
  - $x = -\frac{5}{12} - \frac{1}{2} = -\frac{11}{12}$.
- c) $|2x - 3| = 1 - 4 = -3 < 0 \implies$ Vô nghiệm.

#### Bài 7:
- Phân số chỉ số tiền đã dùng:
  $$\frac{2}{5} + \frac{1}{4} = \frac{8 + 5}{20} = \frac{13}{20}\text{ (so tien)}.$$
- Phân số chỉ số tiền còn lại:
  $$1 - \frac{13}{20} = \frac{7}{20}\text{ (so tien)}.$$
- Số tiền tiết kiệm ban đầu là:
  $$420\,000 : \frac{7}{20} = 420\,000 \cdot \frac{20}{7} = 1\,200\,000\text{ (dong)}.$$

#### Bài 8:
- a) Rút gọn từ trong ra ngoài:
  $2a - (b - 4a) + 3 = 2a - b + 4a + 3 = 6a - b + 3$.
  $3b - [6a - b + 3] - 2b = 3b - 6a + b - 3 - 2b = -6a + 2b - 3$.
  $K = 5a - (-6a + 2b - 3) = 5a + 6a - 2b + 3 = 11a - 2b + 3$.
- b) Thay $a = \frac{1}{3}, b = -2$:
  $$K = 11 \cdot \frac{1}{3} - 2 \cdot (-2) + 3 = \frac{11}{3} + 4 + 3 = \frac{11}{3} + 7 = \frac{32}{3}.$$

#### Bài 9:
Ta có $|x - 5| = |5 - x|$.
Áp dụng bất đẳng thức $|a| + |b| \ge |a + b|$:
$$|x - 1| + |5 - x| \ge |(x - 1) + (5 - x)| = |4| = 4.$$
Do đó:
$$Q \ge 4 + 2026 = 2030.$$
Dấu bằng xảy ra khi $(x - 1)(5 - x) \ge 0 \iff 1 \le x \le 5$.
Vậy giá trị nhỏ nhất của $Q$ là $2030$.

#### Bài 10:
Nhóm:
$$x(y + 3) - y = 8 \iff x(y + 3) - (y + 3) = 8 - 3 \iff (x - 1)(y + 3) = 5.$$
Vì $x, y \in \mathbb{Z}$, ta xét các ước của $5$:
- $x - 1 = 1, y + 3 = 5 \implies x = 2, y = 2$.
- $x - 1 = 5, y + 3 = 1 \implies x = 6, y = -2$.
- $x - 1 = -1, y + 3 = -5 \implies x = 0, y = -8$.
- $x - 1 = -5, y + 3 = -1 \implies x = -4, y = -4$.
Vậy $(x; y) \in \{(2; 2), (6; -2), (0; -8), (-4; -4)\}$.

---

## F. Đề kiểm tra 15 phút (2 Đề Chẵn - Lẻ)

### Đề số 1

#### Phần I. Trắc nghiệm (4,0 điểm — Mỗi câu 1,0 điểm)
**Câu 1:** Giá trị của biểu thức $12 - 2 \cdot 3^2$ là:
- A. $90$
- B. $-6$
- C. $6$
- D. $0$

**Câu 2:** Khi phá ngoặc biểu thức $A = 5 - (x - 2)$, ta được:
- A. $5 - x - 2$
- B. $7 - x$
- C. $3 - x$
- D. $5 + x - 2$

**Câu 3:** Tìm $x$ biết $x + \frac{2}{3} = \frac{1}{6}$:
- A. $\frac{1}{2}$
- B. $-\frac{1}{2}$
- C. $\frac{5}{6}$
- D. $-\frac{5}{6}$

**Câu 4:** Kết quả của phép tính $\frac{3}{5} \cdot \frac{7}{11} + \frac{3}{5} \cdot \frac{4}{11}$ là:
- A. $\frac{3}{5}$
- B. $1$
- C. $\frac{33}{55}$
- D. $\frac{7}{11}$

#### Phần II. Tự luận (6,0 điểm)
**Bài 1 (3,0 điểm):** Tính hợp lý giá trị biểu thức:
$$H = \left(3 - \frac{2}{5} + \frac{1}{3}\right) - \left(1 + \frac{3}{5} - \frac{2}{3}\right).$$

**Bài 2 (3,0 điểm):** Tìm số hữu tỉ $x$ biết:
$$\frac{2}{3} - 3x = \frac{-1}{6}.$$

---

### Hướng dẫn chấm Đề số 1

#### Trắc nghiệm:
- Câu 1: **B** ($1{,}0$ điểm) ($12 - 2 \cdot 9 = 12 - 18 = -6$).
- Câu 2: **B** ($1{,}0$ điểm) ($5 - x + 2 = 7 - x$).
- Câu 3: **B** ($1{,}0$ điểm) ($x = \frac{1}{6} - \frac{4}{6} = -\frac{3}{6} = -\frac{1}{2}$).
- Câu 4: **A** ($1{,}0$ điểm) ($\frac{3}{5} \cdot 1 = \frac{3}{5}$).

#### Tự luận:
**Bài 1 (3,0 điểm):**
- Bỏ dấu ngoặc đúng: $H = 3 - \frac{2}{5} + \frac{1}{3} - 1 - \frac{3}{5} + \frac{2}{3}$ ($1{,}0$ điểm).
- Nhóm hợp lý: $H = (3 - 1) - \left(\frac{2}{5} + \frac{3}{5}\right) + \left(\frac{1}{3} + \frac{2}{3}\right)$ ($1{,}0$ điểm).
- Tính đúng kết quả: $H = 2 - 1 + 1 = 2$ ($1{,}0$ điểm).

**Bài 2 (3,0 điểm):**
- Chuyển vế: $3x = \frac{2}{3} - \left(-\frac{1}{6}\right) = \frac{4}{6} + \frac{1}{6} = \frac{5}{6}$ ($1{,}5$ điểm).
- Tìm $x$: $x = \frac{5}{6} : 3 = \frac{5}{18}$ ($1{,}25$ điểm).
- Kết luận đúng ($0{,}25$ điểm).

---

### Đề số 2

#### Phần I. Trắc nghiệm (4,0 điểm — Mỗi câu 1,0 điểm)
**Câu 1:** Trong các ngoặc $(\dots), [\dots], \{\dots\}$, thứ tự thực hiện đúng là:
- A. $[\dots] \to (\dots) \to \{\dots\}$
- B. $(\dots) \to [\dots] \to \{\dots\}$
- C. $\{\dots\} \to [\dots] \to (\dots)$
- D. Ngoặc nào cũng như nhau

**Câu 2:** Biểu thức $a - (b + c - d)$ bằng:
- A. $a - b - c + d$
- B. $a - b + c - d$
- C. $a - b - c - d$
- D. $a + b - c + d$

**Câu 3:** Tìm $x$ biết $x - \frac{1}{4} = -\frac{3}{4}$:
- A. $-1$
- B. $-\frac{1}{2}$
- C. $\frac{1}{2}$
- D. $1$

**Câu 4:** Giá trị của $3 \cdot [2 + (4 - 1)^2]$ là:
- A. $33$
- B. $27$
- C. $15$
- D. $39$

#### Phần II. Tự luận (6,0 điểm)
**Bài 1 (3,0 điểm):** Thực hiện phép tính:
$$K = \frac{3}{4} - \left[\frac{1}{2} + \left(\frac{3}{4} - \frac{1}{2}\right)\right].$$

**Bài 2 (3,0 điểm):** Tìm $x \in \mathbb{Q}$ biết:
$$\left|x - \frac{2}{5}\right| = \frac{3}{10}.$$

---

### Hướng dẫn chấm Đề số 2

#### Trắc nghiệm:
- Câu 1: **B** ($1{,}0$ điểm).
- Câu 2: **A** ($1{,}0$ điểm).
- Câu 3: **B** ($1{,}0$ điểm) ($x = -\frac{3}{4} + \frac{1}{4} = -\frac{2}{4} = -\frac{1}{2}$).
- Câu 4: **A** ($1{,}0$ điểm) ($3 \cdot [2 + 9] = 3 \cdot 11 = 33$).

#### Tự luận:
**Bài 1 (3,0 điểm):**
- Tính trong ngoặc tròn: $\frac{3}{4} - \frac{1}{2} = \frac{1}{4}$ ($1{,}0$ điểm).
- Tính trong ngoặc vuông: $\frac{1}{2} + \frac{1}{4} = \frac{3}{4}$ ($1{,}0$ điểm).
- Tính ngoài ngoặc: $K = \frac{3}{4} - \frac{3}{4} = 0$ ($1{,}0$ điểm).

**Bài 2 (3,0 điểm):**
- Xét hai trường hợp ($0{,}5$ điểm):
- TH1: $x - \frac{2}{5} = \frac{3}{10} \iff x = \frac{3}{10} + \frac{4}{10} = \frac{7}{10}$ ($1{,}25$ điểm).
- TH2: $x - \frac{2}{5} = -\frac{3}{10} \iff x = -\frac{3}{10} + \frac{4}{10} = \frac{1}{10}$ ($1{,}0$ điểm).
- Kết luận: $x \in \left\{\frac{1}{10}; \frac{7}{10}\right\}$ ($0{,}25$ điểm).
