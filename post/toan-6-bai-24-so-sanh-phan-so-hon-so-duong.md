---
title: 'Toán 6 Bài 24: So sánh phân số. Hỗn số dương - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 24 So sánh phân số và Hỗn số dương: quy đồng mẫu số, quy tắc so sánh số âm, so sánh bằng số trung gian và phần bù, chuyển đổi hỗn số, 5 chuyên đề nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Phân số
  - So sánh phân số
  - Hỗn số dương
  - Quy đồng mẫu
  - Kết nối tri thức
grade: 6
---

# Bài 24. So sánh phân số. Hỗn số dương

Trong cuộc sống hằng ngày, chúng ta liên tục gặp phải các tình huống cần so sánh các phân số với nhau: *Đội thi công A đã hoàn thành $\dfrac{5}{8}$ công trình, trong khi đội B hoàn thành $\dfrac{7}{12}$ công trình, đội nào thi công nhanh hơn?* hay *Nhiệt độ ở Sa Pa sáng sớm giảm $\dfrac{-3}{4}^\circ\text{C}$ so với mức chuẩn, còn Mẫu Sơn giảm $\dfrac{-5}{6}^\circ\text{C}$, nơi nào lạnh hơn?*

Để trả lời những câu hỏi này một cách chính xác, chúng ta cần nắm vững công cụ **quy đồng mẫu số** và các **kỹ thuật so sánh phân số thông minh** (so sánh với số trung gian $0, 1,$ so sánh cùng tử số, phương pháp phần bù, phần hơn). Bên cạnh đó, khái niệm **hỗn số dương** sẽ giúp chúng ta biểu diễn các phân số lớn hơn $1$ một cách vô cùng trực quan và tiện lợi.

Bài học hôm nay sẽ trang bị cho các em toàn bộ phương pháp so sánh phân số từ cơ bản đến nâng cao học sinh giỏi với $100\%$ nội dung độc bản có lời giải chi tiết!

---

## 0. Khởi động — Ôn cũ biết mới (5–7 phút)

Hãy cùng giải nhanh 5 câu hỏi khởi động sau đây:

**Câu 1 (Rút gọn & Mở rộng):** Rút gọn phân số $\dfrac{18}{24}$ về tối giản và tìm số thích hợp điền vào chỗ chấm: $\dfrac{3}{7} = \dfrac{\dots}{28}.$
*Trả lời:* $\dfrac{18}{24} = \dfrac{18 : 6}{24 : 6} = \dfrac{3}{4}.$ Vì $28 : 7 = 4$ nên tử số mới là $3 \cdot 4 = 12,$ tức $\dfrac{3}{7} = \dfrac{12}{28}.$

**Câu 2 (Bội chung nhỏ nhất):** Tìm $\text{BCNN}(6, 9)$ và $\text{BCNN}(8, 12).$
*Trả lời:* $\text{BCNN}(6, 9) = 18;$ $\text{BCNN}(8, 12) = 24.$ Đây chính là chìa khóa để tìm mẫu chung nhỏ nhất khi quy đồng!

**Câu 3 (So sánh cùng mẫu ở Tiểu học):** Điền dấu $(<, >, =)$ thích hợp: $\dfrac{4}{9} \;\dots\; \dfrac{7}{9}$ và $\dfrac{5}{5} \;\dots\; 1.$
*Trả lời:* $\dfrac{4}{9} < \dfrac{7}{9}$ (vì cùng mẫu dương $9$ và $4 < 7$); $\dfrac{5}{5} = 1.$

**Câu 4 (So sánh số nguyên):** Điền dấu $(<, >)$ thích hợp: $-4 \;\dots\; 2$ và $-7 \;\dots\; -3.$
*Trả lời:* $-4 < 2$ (số âm nhỏ hơn số dương); $-7 < -3$ (trên trục số nằm ngang, $-7$ nằm bên trái $-3$).

**Câu 5 (Trực giác hỗn số):** Khi ăn hết $2$ cái bánh pizza trọn vẹn và thêm $\dfrac{1}{4}$ cái bánh nữa, người ta ghi gọn là $2\dfrac{1}{4}$ cái bánh. Theo em, số $2\dfrac{1}{4}$ này gồm những phần nào?
*Trả lời:* Gồm phần nguyên là $2$ và phần phân số là $\dfrac{1}{4},$ tổng cộng bằng $2 + \dfrac{1}{4} = \dfrac{9}{4}$ cái bánh.

---

## 1. Lý thuyết trọng tâm

### 1.1. Quy đồng mẫu nhiều phân số

Quy đồng mẫu nhiều phân số là biến đổi các phân số đã cho thành các phân số tương ứng bằng chúng nhưng có **cùng một mẫu số dương**.

> [!IMPORTANT]
> **Quy trình quy đồng mẫu các phân số có mẫu dương:**
> - **Bước 1 (Tìm mẫu chung):** Tìm một bội chung của các mẫu số (thông thường chọn $\text{BCNN}$ của các mẫu) để làm mẫu chung.
> - **Bước 2 (Tìm thừa số phụ):** Lấy mẫu chung chia cho từng mẫu số để tìm thừa số phụ tương ứng của mỗi phân số.
> - **Bước 3 (Nhân tử và mẫu):** Nhân cả tử và mẫu của từng phân số với thừa số phụ tương ứng.

> [!NOTE]
> **Chú ý quy tắc đổi dấu trước khi quy đồng:**
> Nếu phân số có mẫu âm, ta **bắt buộc phải đổi dấu đưa về mẫu dương** trước khi tìm $\text{BCNN}$:
> $$\dfrac{a}{-b} = \dfrac{-a}{b} \quad (b > 0).$$
> Nên rút gọn các phân số về tối giản trước khi quy đồng để mẫu chung nhỏ nhất, tính toán nhanh và không bị nhầm lẫn.

---

### 1.2. Quy tắc so sánh hai phân số

> [!NOTE]
> **Quy tắc so sánh hai phân số:**
> 1. **Cùng mẫu dương:** Trong hai phân số có cùng một mẫu dương, phân số nào có **tử số lớn hơn** thì phân số đó **lớn hơn**:
>    $$\text{Với } m > 0: \quad a > b \iff \dfrac{a}{m} > \dfrac{b}{m}.$$
> 2. **Khác mẫu:** Muốn so sánh hai phân số không cùng mẫu, ta viết chúng dưới dạng hai phân số có cùng một **mẫu số dương** (quy đồng mẫu), rồi so sánh hai tử số với nhau.

**Cảnh giác cực lớn với phân số âm:**
Khi so sánh hai phân số âm, trực giác ban đầu rất dễ bị đánh lừa:
- Xét cặp $\dfrac{-3}{5}$ và $\dfrac{-4}{5}$:
  Vì cả hai phân số đều có mẫu dương là $5,$ mà $-3 > -4$ (số âm $-3$ lớn hơn $-4$) nên:
  $$\dfrac{-3}{5} > \dfrac{-4}{5}.$$
- Nhiều bạn thấy số $4$ lớn hơn $3$ liền kết luận $\dfrac{-4}{5} > \dfrac{-3}{5}$ là hoàn toàn **sai lầm**!

---

### 1.3. Các phương pháp so sánh nhanh không cần quy đồng mẫu

Trong nhiều bài toán (đặc biệt là trắc nghiệm hoặc thi học sinh giỏi), việc quy đồng mẫu số với các số lớn sẽ mất rất nhiều thời gian. Các nhà toán học thường dùng các kỹ thuật so sánh gián tiếp sau:

#### Phương pháp 1: Dùng số trung gian $0$
- Phân số âm luôn nhỏ hơn $0,$ phân số dương luôn lớn hơn $0.$
- **Hệ quả:** Mọi phân số âm đều nhỏ hơn mọi phân số dương!
  $$\dfrac{-5}{7} < 0 < \dfrac{2}{9} \implies \dfrac{-5}{7} < \dfrac{2}{9}.$$

#### Phương pháp 2: Dùng số trung gian $1$
Với các phân số dương:
- Phân số có tử nhỏ hơn mẫu thì nhỏ hơn $1$ (ví dụ $\dfrac{6}{7} < 1$).
- Phân số có tử lớn hơn mẫu thì lớn hơn $1$ (ví dụ $\dfrac{8}{5} > 1$).
- Suy ra: $\dfrac{6}{7} < 1 < \dfrac{8}{5} \implies \dfrac{6}{7} < \dfrac{8}{5}.$

#### Phương pháp 3: So sánh hai phân số có cùng tử số dương
Trong hai phân số có **cùng tử số dương**:
- Phân số nào có **mẫu số nhỏ hơn** thì phân số đó **lớn hơn** (chia cho ít phần hơn thì mỗi phần nhận được to hơn):
  $$\text{Với } a > 0 \text{ và } 0 < m < n \implies \dfrac{a}{m} > \dfrac{a}{n}.$$
- *Ví dụ:* $\dfrac{5}{11} > \dfrac{5}{14}$ vì cùng tử $5 > 0$ và mẫu $11 < 14.$

#### Phương pháp 4: Kỹ thuật "Phần bù tới 1"
Khi hai phân số dương đều nhỏ hơn $1$ và khoảng cách từ tử đến mẫu bằng nhau (hoặc phần bù dễ so sánh):
- Phân số nào có **phần bù tới $1$ nhỏ hơn** thì phân số đó **lớn hơn**:
  $$1 - \dfrac{a}{b} < 1 - \dfrac{c}{d} \implies \dfrac{a}{b} > \dfrac{c}{d}.$$
- *Ví dụ:* So sánh $\dfrac{2025}{2026}$ và $\dfrac{2026}{2027}$:
  Ta có: $1 - \dfrac{2025}{2026} = \dfrac{1}{2026}$ và $1 - \dfrac{2026}{2027} = \dfrac{1}{2027}.$
  Vì $\dfrac{1}{2026} > \dfrac{1}{2027}$ nên phần bù của phân số thứ nhất lớn hơn, do đó:
  $$\dfrac{2025}{2026} < \dfrac{2026}{2027}.$$

#### Phương pháp 5: Kỹ thuật "Phần hơn so với 1"
Khi hai phân số dương đều lớn hơn $1$:
- Phân số nào có **phần hơn so với $1$ lớn hơn** thì phân số đó **lớn hơn**:
  $$\dfrac{a}{b} - 1 > \dfrac{c}{d} - 1 \implies \dfrac{a}{b} > \dfrac{c}{d}.$$

---

### 1.4. Hỗn số dương

> [!NOTE]
> **Định nghĩa hỗn số dương:**
> Khi viết một phân số dương có tử lớn hơn mẫu dưới dạng tổng của một số tự nhiên và một phân số dương nhỏ hơn $1,$ ta được một **hỗn số dương**:
> $$a\dfrac{m}{n} = a + \dfrac{m}{n} \quad (a, m, n \in \mathbb{N}^*, m < n).$$
> Trong đó:
> - $a$ được gọi là **phần nguyên**.
> - $\dfrac{m}{n}$ được gọi là **phần phân số** (luôn thỏa mãn $0 < \dfrac{m}{n} < 1$).

**Hai thao tác chuyển đổi cơ bản:**
1. **Đổi phân số sang hỗn số:**
   Lấy tử số chia cho mẫu số:
   - Thương tìm được là **phần nguyên**.
   - Số dư là **tử số mới** của phần phân số, giữ nguyên mẫu số cũ.
   *Ví dụ:* $\dfrac{23}{5}$: Lấy $23 : 5$ được thương là $4,$ dư $3.$ Do đó $\dfrac{23}{5} = 4\dfrac{3}{5}.$
2. **Đổi hỗn số sang phân số:**
   Tử số mới bằng phần nguyên nhân mẫu số rồi cộng với tử số cũ, giữ nguyên mẫu số:
   $$a\dfrac{m}{n} = \dfrac{a \cdot n + m}{n}.$$
   *Ví dụ:* $3\dfrac{4}{7} = \dfrac{3 \cdot 7 + 4}{7} = \dfrac{25}{7}.$

**So sánh hai hỗn số dương:**
- Hỗn số nào có **phần nguyên lớn hơn** thì hỗn số đó **lớn hơn**.
- Nếu hai phần nguyên bằng nhau, ta so sánh tiếp hai phần phân số.
*Ví dụ:* $5\dfrac{1}{3} > 4\dfrac{5}{6}$ (vì phần nguyên $5 > 4$).
$3\dfrac{3}{4} > 3\dfrac{2}{5}$ (vì cùng phần nguyên $3$ và $\dfrac{3}{4} = \dfrac{15}{20} > \dfrac{2}{5} = \dfrac{8}{20}$).

---

### 1.5. Sơ đồ tư duy tổng kết Bài 24

<div class="flowchart-container">
  <div class="flowchart-group" style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 12px; padding: 18px; margin-bottom: 16px;">
    <h3 style="margin-top: 0; color: #15803d; text-align: center; font-size: 1.15rem;">CẤU TRÚC BÀI HỌC: SO SÁNH PHÂN SỐ & HỖN SỐ DƯƠNG</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 14px;">
      
      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #4ade80; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #16a34a; font-size: 1rem;">1. Quy đồng mẫu số</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Đưa về mẫu dương<br>
          • Mẫu chung = $\text{BCNN}$ các mẫu<br>
          • Tìm thừa số phụ & nhân cả tử và mẫu
        </p>
      </div>

      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #4ade80; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #16a34a; font-size: 1rem;">2. So sánh cùng mẫu dương</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Tử lớn hơn $\implies$ Phân số lớn hơn<br>
          • Chú ý số âm: $-3 > -5 \implies \dfrac{-3}{7} > \dfrac{-5}{7}$<br>
          • Không nhầm lẫn độ lớn số tự nhiên
        </p>
      </div>

      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #4ade80; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #16a34a; font-size: 1rem;">3. So sánh nhanh</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • So với $0$: Âm $< 0 <$ Dương<br>
          • So với $1$: Tử $<$ Mẫu thì $< 1$<br>
          • Cùng tử dương: Mẫu nhỏ hơn thì lớn hơn<br>
          • Dùng phần bù tới $1$
        </p>
      </div>

      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #4ade80; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #16a34a; font-size: 1rem;">4. Hỗn số dương</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Dạng $a\dfrac{m}{n} = a + \dfrac{m}{n}$ với $m < n$<br>
          • Đổi qua lại giữa phân số và hỗn số<br>
          • So phần nguyên trước, so phần phân số sau
        </p>
      </div>

    </div>
  </div>
</div>

---

## 2. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Quy đồng mẫu hai hay nhiều phân số

**Phương pháp giải:**
1. Đưa các phân số có mẫu âm về mẫu dương.
2. Rút gọn các phân số về tối giản nếu cần.
3. Tìm $\text{BCNN}$ của các mẫu làm mẫu chung.
4. Tìm thừa số phụ bằng cách lấy mẫu chung chia cho từng mẫu.
5. Nhân cả tử và mẫu với thừa số phụ tương ứng.

---

**Ví dụ 1:** Quy đồng mẫu các phân số sau:
a) $\dfrac{5}{12}$ và $\dfrac{-7}{18}.$
b) $\dfrac{-3}{8}; \quad \dfrac{5}{-12}; \quad \dfrac{7}{16}.$

**Lời giải:**
a) Các mẫu là $12$ và $18.$
Ta phân tích: $12 = 2^2 \cdot 3;$ $18 = 2 \cdot 3^2 \implies \text{BCNN}(12, 18) = 2^2 \cdot 3^2 = 36.$
Mẫu chung là $36.$
- Thừa số phụ thứ nhất: $36 : 12 = 3.$
- Thừa số phụ thứ hai: $36 : 18 = 2.$
Thực hiện quy đồng:
$$\dfrac{5}{12} = \dfrac{5 \cdot 3}{12 \cdot 3} = \dfrac{15}{36}; \qquad \dfrac{-7}{18} = \dfrac{-7 \cdot 2}{18 \cdot 2} = \dfrac{-14}{36}.$$

b) Đưa phân số thứ hai về mẫu dương: $\dfrac{5}{-12} = \dfrac{-5}{12}.$
Tìm $\text{BCNN}(8, 12, 16)$:
$8 = 2^3;$ $12 = 2^2 \cdot 3;$ $16 = 2^4 \implies \text{BCNN}(8, 12, 16) = 2^4 \cdot 3 = 48.$
Mẫu chung là $48.$
- Thừa số phụ: $48 : 8 = 6;$ $48 : 12 = 4;$ $48 : 16 = 3.$
Thực hiện quy đồng:
$$\dfrac{-3}{8} = \dfrac{-3 \cdot 6}{8 \cdot 6} = \dfrac{-18}{48}; \qquad \dfrac{-5}{12} = \dfrac{-5 \cdot 4}{12 \cdot 4} = \dfrac{-20}{48}; \qquad \dfrac{7}{16} = \dfrac{7 \cdot 3}{16 \cdot 3} = \dfrac{21}{48}.$$

---

### Dạng 2: So sánh hai phân số bằng cách quy đồng mẫu

**Phương pháp giải:**
1. Đưa cả hai phân số về cùng một mẫu số dương.
2. So sánh hai tử số với nhau.
3. Rút ra kết luận cho hai phân số ban đầu.

---

**Ví dụ 2:** So sánh các cặp phân số sau:
a) $\dfrac{-5}{9}$ và $\dfrac{-7}{12}.$
b) $\dfrac{7}{-15}$ và $\dfrac{-9}{20}.$

**Lời giải:**
a) Hai phân số đã có mẫu dương là $9$ và $12.$
Ta có $\text{BCNN}(9, 12) = 36.$
$$\dfrac{-5}{9} = \dfrac{-5 \cdot 4}{9 \cdot 4} = \dfrac{-20}{36}; \qquad \dfrac{-7}{12} = \dfrac{-7 \cdot 3}{12 \cdot 3} = \dfrac{-21}{36}.$$
Vì $-20 > -21$ nên $\dfrac{-20}{36} > \dfrac{-21}{36}.$
Vậy $\dfrac{-5}{9} > \dfrac{-7}{12}.$

b) Đưa cả hai phân số về mẫu dương:
$\dfrac{7}{-15} = \dfrac{-7}{15}$ và $\dfrac{-9}{20}.$
Ta có $\text{BCNN}(15, 20) = 60.$
$$\dfrac{-7}{15} = \dfrac{-7 \cdot 4}{15 \cdot 4} = \dfrac{-28}{60}; \qquad \dfrac{-9}{20} = \dfrac{-9 \cdot 3}{20 \cdot 3} = \dfrac{-27}{60}.$$
Vì $-28 < -27$ nên $\dfrac{-28}{60} < \dfrac{-27}{60}.$
Vậy $\dfrac{7}{-15} < \dfrac{-9}{20}.$

---

### Dạng 3: So sánh phân số bằng các phương pháp nhanh (Không quy đồng mẫu)

**Ví dụ 3:** Không quy đồng mẫu số, hãy so sánh:
a) $\dfrac{-8}{15}$ và $\dfrac{3}{11}.$
b) $\dfrac{13}{15}$ và $\dfrac{17}{19}.$
c) $\dfrac{7}{12}$ và $\dfrac{7}{16}.$
d) $\dfrac{15}{29}$ và $\dfrac{14}{31}.$

**Lời giải:**
a) Ta có $\dfrac{-8}{15} < 0$ (phân số âm) và $\dfrac{3}{11} > 0$ (phân số dương).
Vì số âm luôn nhỏ hơn số dương nên $\dfrac{-8}{15} < \dfrac{3}{11}.$

b) Xét phần bù tới $1$ của hai phân số:
$$1 - \dfrac{13}{15} = \dfrac{2}{15}; \qquad 1 - \dfrac{17}{19} = \dfrac{2}{19}.$$
Vì cùng tử số dương $2$ và mẫu $15 < 19$ nên $\dfrac{2}{15} > \dfrac{2}{19}.$
Phân số thứ nhất có phần bù lớn hơn nên giá trị nhỏ hơn:
$$\dfrac{13}{15} < \dfrac{17}{19}.$$

c) Hai phân số có cùng tử số dương là $7.$
Vì mẫu số $12 < 16$ nên $\dfrac{7}{12} > \dfrac{7}{16}.$

d) Dùng số trung gian là $\dfrac{1}{2}$:
Ta có: $\dfrac{1}{2} = \dfrac{15}{30}.$
Vì $29 < 30$ nên $\dfrac{15}{29} > \dfrac{15}{30} = \dfrac{1}{2}.$
Mặt khác: $\dfrac{1}{2} = \dfrac{14}{28}.$
Vì $31 > 28$ nên $\dfrac{14}{31} < \dfrac{14}{28} = \dfrac{1}{2}.$
Do đó: $\dfrac{15}{29} > \dfrac{1}{2} > \dfrac{14}{31} \implies \dfrac{15}{29} > \dfrac{14}{31}.$

---

### Dạng 4: Sắp xếp các phân số theo thứ tự tăng dần hoặc giảm dần

**Phương pháp giải:**
1. Chia các phân số thành hai nhóm:
   - Nhóm 1: Các phân số âm (nhỏ hơn $0$).
   - Nhóm 2: Các phân số dương (lớn hơn $0$).
2. Quy đồng và so sánh thứ tự trong từng nhóm.
3. Ghép hai nhóm lại: Nhóm âm luôn đứng trước nhóm dương.

---

**Ví dụ 4:** Sắp xếp các phân số sau theo thứ tự từ bé đến lớn:
$$\dfrac{-3}{4}; \quad \dfrac{5}{6}; \quad \dfrac{-7}{12}; \quad 0; \quad \dfrac{2}{3}; \quad \dfrac{11}{12}.$$

**Lời giải:**
- Phân loại:
  + Nhóm các phân số âm: $\dfrac{-3}{4}$ và $\dfrac{-7}{12}.$
  + Số $0.$
  + Nhóm các phân số dương: $\dfrac{5}{6}; \dfrac{2}{3}; \dfrac{11}{12}.$
- So sánh nhóm âm: Quy đồng mẫu chung $12$:
  $\dfrac{-3}{4} = \dfrac{-9}{12}.$
  Vì $-9 < -7$ nên $\dfrac{-9}{12} < \dfrac{-7}{12},$ tức là $\dfrac{-3}{4} < \dfrac{-7}{12}.$
- So sánh nhóm dương: Quy đồng mẫu chung $12$:
  $\dfrac{2}{3} = \dfrac{8}{12}; \quad \dfrac{5}{6} = \dfrac{10}{12}; \quad \dfrac{11}{12}.$
  Vì $8 < 10 < 11$ nên $\dfrac{2}{3} < \dfrac{5}{6} < \dfrac{11}{12}.$
- Kết hợp toàn bộ theo thứ tự tăng dần:
  $$\dfrac{-3}{4} < \dfrac{-7}{12} < 0 < \dfrac{2}{3} < \dfrac{5}{6} < \dfrac{11}{12}.$$

---

### Dạng 5: Tìm số nguyên $x$ thỏa mãn bất đẳng thức phân số

**Phương pháp giải:**
1. Quy đồng tất cả các phân số về cùng một mẫu số dương $M.$
2. Chuyển điều kiện phân số thành điều kiện so sánh các tử số nguyên:
   $$\dfrac{A}{M} < \dfrac{k \cdot x}{M} < \dfrac{B}{M} \implies A < k \cdot x < B.$$
3. Tìm các giá trị nguyên $x$ thỏa mãn.

---

**Ví dụ 5:** Tìm tất cả các số nguyên $x,$ biết:
a) $\dfrac{-5}{6} < \dfrac{x}{18} < \dfrac{-2}{9}.$
b) $\dfrac{3}{7} < \dfrac{x}{14} \le \dfrac{5}{7}.$

**Lời giải:**
a) Quy đồng các phân số về mẫu chung $18$:
$$\dfrac{-15}{18} < \dfrac{x}{18} < \dfrac{-4}{18}.$$
Vì mẫu số $18 > 0$ nên các tử số thỏa mãn:
$$-15 < x < -4.$$
Vì $x \in \mathbb{Z}$ nên $x \in \{-14; -13; -12; -11; -10; -9; -8; -7; -6; -5\}.$

b) Quy đồng các phân số về mẫu chung $14$:
$$\dfrac{6}{14} < \dfrac{x}{14} \le \dfrac{10}{14}.$$
Suy ra:
$$6 < x \le 10.$$
Vì $x \in \mathbb{Z}$ nên $x \in \{7; 8; 9; 10\}.$

---

### Dạng 6: Hỗn số dương — Chuyển đổi và so sánh

**Ví dụ 6:**
a) Viết các phân số sau dưới dạng hỗn số: $\dfrac{31}{7}; \quad \dfrac{47}{9}.$
b) Viết các hỗn số sau dưới dạng phân số: $3\dfrac{5}{8}; \quad 5\dfrac{2}{11}.$
c) So sánh hai hỗn số: $4\dfrac{3}{5}$ và $4\dfrac{5}{8}.$

**Lời giải:**
a)
- $\dfrac{31}{7}$: Ta có $31 : 7 = 4$ (dư $3$). Vậy $\dfrac{31}{7} = 4\dfrac{3}{7}.$
- $\dfrac{47}{9}$: Ta có $47 : 9 = 5$ (dư $2$). Vậy $\dfrac{47}{9} = 5\dfrac{2}{9}.$

b)
- $3\dfrac{5}{8} = \dfrac{3 \cdot 8 + 5}{8} = \dfrac{29}{8}.$
- $5\dfrac{2}{11} = \dfrac{5 \cdot 11 + 2}{11} = \dfrac{57}{11}.$

c) Hai hỗn số có cùng phần nguyên là $4.$ Ta so sánh hai phần phân số $\dfrac{3}{5}$ và $\dfrac{5}{8}$:
Quy đồng mẫu số chung $40$:
$$\dfrac{3}{5} = \dfrac{24}{40}; \qquad \dfrac{5}{8} = \dfrac{25}{40}.$$
Vì $24 < 25$ nên $\dfrac{3}{5} < \dfrac{5}{8}.$
Vậy $4\dfrac{3}{5} < 4\dfrac{5}{8}.$

---

### Dạng 7: Bài toán thực tế liên quan đến so sánh phân số

**Ví dụ 7:** Trong một kỳ kiểm tra thể lực chạy cự ly $100\text{ m}$:
- Bạn An chạy hết $15\dfrac{2}{5}$ giây.
- Bạn Bình chạy hết $15\dfrac{3}{8}$ giây.
- Bạn Cường chạy hết $15\dfrac{7}{20}$ giây.
Hỏi bạn nào chạy nhanh nhất và bạn nào chạy chậm nhất?

**Lời giải:**
Cả ba bạn đều có phần nguyên thời gian là $15$ giây.
Để biết ai chạy nhanh nhất, ta cần tìm thời gian **ít nhất** (chạy ít thời gian hơn nghĩa là chạy nhanh hơn).
So sánh ba phần phân số: $\dfrac{2}{5}; \dfrac{3}{8}; \dfrac{7}{20}.$
Mẫu chung là $\text{BCNN}(5, 8, 20) = 40.$
Quy đồng:
$$\dfrac{2}{5} = \dfrac{16}{40}; \qquad \dfrac{3}{8} = \dfrac{15}{40}; \qquad \dfrac{7}{20} = \dfrac{14}{40}.$$
Vì $14 < 15 < 16$ nên:
$$\dfrac{7}{20} < \dfrac{3}{8} < \dfrac{2}{5}.$$
Do đó:
$$15\dfrac{7}{20} < 15\dfrac{3}{8} < 15\dfrac{2}{5}.$$
Thời gian của bạn Cường là ít nhất, thời gian của bạn An là nhiều nhất.
Vậy **bạn Cường chạy nhanh nhất** và **bạn An chạy chậm nhất**.

---

## 3. Chuyên đề nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Quy đồng tử số để so sánh dãy phân số

> [!TIP]
> **Khi nào nên quy đồng tử số?**
> Khi các tử số là những số nhỏ, dễ tìm $\text{BCNN},$ trong khi các mẫu số là những số lớn, cồng kềnh hoặc chứa biểu thức phức tạp.
> **Quy tắc:** Với các phân số dương có cùng tử số: phân số nào có mẫu số nhỏ hơn thì phân số đó lớn hơn.

**Bài toán HSG 1:** Hãy sắp xếp ba phân số sau theo thứ tự từ bé đến lớn mà không quy đồng mẫu số:
$$A = \dfrac{4}{15}; \quad B = \dfrac{6}{23}; \quad C = \dfrac{12}{47}.$$

**Lời giải chi tiết:**
Các tử số là $4, 6, 12.$
Ta thấy $\text{BCNN}(4, 6, 12) = 12.$
Quy đồng tử số của ba phân số về cùng tử số $12$:
$$A = \dfrac{4}{15} = \dfrac{4 \cdot 3}{15 \cdot 3} = \dfrac{12}{45}.$$
$$B = \dfrac{6}{23} = \dfrac{6 \cdot 2}{23 \cdot 2} = \dfrac{12}{46}.$$
$$C = \dfrac{12}{47}.$$
Ba phân số có cùng tử số dương $12.$
So sánh các mẫu số: $45 < 46 < 47.$
Vì mẫu càng nhỏ thì phân số càng lớn nên:
$$\dfrac{12}{47} < \dfrac{12}{46} < \dfrac{12}{45}.$$
Vậy sắp xếp theo thứ tự từ bé đến lớn là:
$$C < B < A \quad \left(\text{tức } \dfrac{12}{47} < \dfrac{6}{23} < \dfrac{4}{15}\right).$$

---

### Chuyên đề 2: Kỹ thuật Bổ đề phân số $\dfrac{a}{b} < \dfrac{a+m}{b+m}$ khi $a < b$

> [!IMPORTANT]
> **Bổ đề quan trọng về phân số:**
> Cho phân số dương $\dfrac{a}{b}$ với $a, b \in \mathbb{N}^*$ và $m \in \mathbb{N}^*$:
> 1. Nếu $a < b$ (phân số nhỏ hơn $1$) thì:
>    $$\dfrac{a}{b} < \dfrac{a + m}{b + m}.$$
> 2. Nếu $a > b$ (phân số lớn hơn $1$) thì:
>    $$\dfrac{a}{b} > \dfrac{a + m}{b + m}.$$
> 3. Nếu $a = b$ thì $\dfrac{a}{b} = \dfrac{a + m}{b + m} = 1.$

*Chứng minh trường hợp 1 ($a < b$):*
Xét tích chéo của hai phân số $\dfrac{a}{b}$ và $\dfrac{a + m}{b + m}$:
$$a(b + m) = ab + am$$
$$b(a + m) = ba + bm = ab + bm.$$
Vì $a < b$ và $m > 0$ nên $am < bm.$
Suy ra $ab + am < ab + bm \implies a(b + m) < b(a + m).$
Do đó $\dfrac{a}{b} < \dfrac{a + m}{b + m}.$ (Đpcm).

---

**Bài toán HSG 2:** So sánh hai phân số sau:
$$M = \dfrac{10^{15} + 1}{10^{16} + 1} \quad \text{và} \quad N = \dfrac{10^{16} + 1}{10^{17} + 1}.$$

**Lời giải chi tiết:**
Nhận xét: Cả hai phân số đều có tử nhỏ hơn mẫu (nhỏ hơn $1$).
Xét biểu thức $10M$ và $10N$:
$$10M = \dfrac{10 \cdot (10^{15} + 1)}{10^{16} + 1} = \dfrac{10^{16} + 10}{10^{16} + 1} = \dfrac{(10^{16} + 1) + 9}{10^{16} + 1} = 1 + \dfrac{9}{10^{16} + 1}.$$
$$10N = \dfrac{10 \cdot (10^{16} + 1)}{10^{17} + 1} = \dfrac{10^{17} + 10}{10^{17} + 1} = \dfrac{(10^{17} + 1) + 9}{10^{17} + 1} = 1 + \dfrac{9}{10^{17} + 1}.$$
Bây giờ ta so sánh hai phân số $\dfrac{9}{10^{16} + 1}$ và $\dfrac{9}{10^{17} + 1}$:
Hai phân số này có cùng tử số dương là $9.$
Vì mẫu số $10^{16} + 1 < 10^{17} + 1$ nên:
$$\dfrac{9}{10^{16} + 1} > \dfrac{9}{10^{17} + 1}.$$
Do đó:
$$1 + \dfrac{9}{10^{16} + 1} > 1 + \dfrac{9}{10^{17} + 1}$$
$$\implies 10M > 10N \implies M > N.$$
Vậy $\dfrac{10^{15} + 1}{10^{16} + 1} > \dfrac{10^{16} + 1}{10^{17} + 1}.$

---

### Chuyên đề 3: Tìm phân số tối giản kẹp giữa hai phân số có điều kiện mẫu số

**Bài toán HSG 3:** Tìm tất cả các phân số có mẫu số là $15,$ lớn hơn $\dfrac{-2}{3}$ và nhỏ hơn $\dfrac{-1}{5}.$ Trong các phân số tìm được, phân số nào là phân số tối giản?

**Lời giải chi tiết:**
Gọi phân số cần tìm là $\dfrac{x}{15}$ với $x \in \mathbb{Z}.$
Theo bài ra:
$$\dfrac{-2}{3} < \dfrac{x}{15} < \dfrac{-1}{5}.$$
Quy đồng mẫu số về $15$:
$$\dfrac{-10}{15} < \dfrac{x}{15} < \dfrac{-3}{15}.$$
Vì mẫu số $15 > 0$ nên:
$$-10 < x < -3.$$
Do $x \in \mathbb{Z}$ nên $x \in \{-9; -8; -7; -6; -5; -4\}.$
Vậy các phân số thỏa mãn là:
$$\dfrac{-9}{15}; \quad \dfrac{-8}{15}; \quad \dfrac{-7}{15}; \quad \dfrac{-6}{15}; \quad \dfrac{-5}{15}; \quad \dfrac{-4}{15}.$$
Để phân số $\dfrac{x}{15}$ tối giản thì $\text{ƯCLN}(|x|, 15) = 1,$ nghĩa là $|x|$ không chia hết cho $3$ và không chia hết cho $5.$
- Trong các số $\{-9; -8; -7; -6; -5; -4\}$:
  + Các số chia hết cho $3$ là: $-9; -6$ (loại).
  + Số chia hết cho $5$ là: $-5$ (loại).
  + Các số còn lại là: $-8; -7; -4.$
Vậy các phân số tối giản thỏa mãn là:
$$\dfrac{-8}{15}; \quad \dfrac{-7}{15}; \quad \dfrac{-4}{15}.$$

---

### Chuyên đề 4: So sánh bằng phương pháp phần bù nâng cao

**Bài toán HSG 4:** So sánh hai phân số:
$$A = \dfrac{2024^{2024} + 1}{2024^{2025} + 1} \quad \text{và} \quad B = \dfrac{2024^{2023} + 1}{2024^{2024} + 1}.$$

**Lời giải chi tiết:**
Đặt $a = 2024 > 1.$ Khi đó:
$$A = \dfrac{a^{2024} + 1}{a^{2025} + 1}; \qquad B = \dfrac{a^{2023} + 1}{a^{2024} + 1}.$$
Nhân cả hai vế của $A$ và $B$ với $a$:
$$a \cdot A = \dfrac{a \cdot (a^{2024} + 1)}{a^{2025} + 1} = \dfrac{a^{2025} + a}{a^{2025} + 1} = 1 + \dfrac{a - 1}{a^{2025} + 1}.$$
$$a \cdot B = \dfrac{a \cdot (a^{2023} + 1)}{a^{2024} + 1} = \dfrac{a^{2024} + a}{a^{2024} + 1} = 1 + \dfrac{a - 1}{a^{2024} + 1}.$$
Vì $a = 2024 > 1$ nên $a - 1 > 0.$
Hai phân số $\dfrac{a - 1}{a^{2025} + 1}$ và $\dfrac{a - 1}{a^{2024} + 1}$ có cùng tử số dương $a - 1.$
Vì $a^{2025} + 1 > a^{2024} + 1 > 0$ nên:
$$\dfrac{a - 1}{a^{2025} + 1} < \dfrac{a - 1}{a^{2024} + 1}.$$
Do đó:
$$1 + \dfrac{a - 1}{a^{2025} + 1} < 1 + \dfrac{a - 1}{a^{2024} + 1} \implies a \cdot A < a \cdot B.$$
Vì $a = 2024 > 0$ nên suy ra $A < B.$
Vậy $\dfrac{2024^{2024} + 1}{2024^{2025} + 1} < \dfrac{2024^{2023} + 1}{2024^{2024} + 1}.$

---

### Chuyên đề 5: Tìm số nguyên $x$ trong bất đẳng thức có biến ở mẫu

**Bài toán HSG 5:** Tìm tất cả các số nguyên dương $x$ thỏa mãn bất đẳng thức:
$$\dfrac{5}{12} < \dfrac{4}{x} < \dfrac{5}{9}.$$

**Lời giải chi tiết:**
Điều kiện: $x \in \mathbb{N}^*.$
Quy đồng tử số của ba phân số về cùng tử số là $\text{BCNN}(5, 4) = 20$:
- Phân số thứ nhất: $\dfrac{5}{12} = \dfrac{5 \cdot 4}{12 \cdot 4} = \dfrac{20}{48}.$
- Phân số thứ hai: $\dfrac{4}{x} = \dfrac{4 \cdot 5}{x \cdot 5} = \dfrac{20}{5x}.$
- Phân số thứ ba: $\dfrac{5}{9} = \dfrac{5 \cdot 4}{9 \cdot 4} = \dfrac{20}{36}.$
Khi đó bất đẳng thức đã cho trở thành:
$$\dfrac{20}{48} < \dfrac{20}{5x} < \dfrac{20}{36}.$$
Ba phân số có cùng tử số dương $20.$ Do đó thứ tự của các mẫu số phải ngược lại:
$$36 < 5x < 48.$$
Chia cả ba vế cho $5$:
$$\dfrac{36}{5} < x < \dfrac{48}{5} \iff 7{,}2 < x < 9{,}6.$$
Vì $x$ là số nguyên dương nên $x \in \{8; 9\}.$
*Thử lại:*
- Với $x = 8$: $\dfrac{4}{8} = \dfrac{1}{2} = \dfrac{5}{10},$ rõ ràng $\dfrac{5}{12} < \dfrac{5}{10} < \dfrac{5}{9}$ (thỏa mãn).
- Với $x = 9$: $\dfrac{4}{9} = \dfrac{20}{45},$ rõ ràng $\dfrac{20}{48} < \dfrac{20}{45} < \dfrac{20}{36}$ (thỏa mãn).
Vậy $x \in \{8; 9\}.$

---

## 4. Trắc nghiệm tương tác kiểm tra độ hiểu bài

```quiz
type: choice
question: 'Mẫu số chung nhỏ nhất của hai phân số $\dfrac{7}{18}$ và $\dfrac{-5}{24}$ là:'
options:
  - '48'
  - '72'
  - '144'
  - '432'
answer: 2
explanation: 'Mẫu số chung nhỏ nhất là $\text{BCNN}(18, 24) = 72$.'
```

```quiz
type: choice
question: 'Trong các khẳng định sau, khẳng định nào ĐÚNG?'
options:
  - '$\dfrac{-3}{7} > \dfrac{-2}{7}$'
  - '$\dfrac{-4}{5} > \dfrac{-3}{5}$'
  - '$\dfrac{-5}{8} < \dfrac{-3}{8}$'
  - '$\dfrac{-7}{10} > \dfrac{-1}{10}$'
answer: 3
explanation: 'Cùng mẫu dương $8$, vì $-5 < -3$ nên $\dfrac{-5}{8} < \dfrac{-3}{8}$.'
```

```quiz
type: choice
question: 'So sánh hai phân số $\dfrac{-5}{9}$ và $\dfrac{4}{-7}$:'
options:
  - '$\dfrac{-5}{9} > \dfrac{4}{-7}$'
  - '$\dfrac{-5}{9} < \dfrac{4}{-7}$'
  - '$\dfrac{-5}{9} = \dfrac{4}{-7}$'
  - 'Không thể so sánh'
answer: 1
explanation: 'Đưa về mẫu dương: $\dfrac{4}{-7} = \dfrac{-4}{7}$. Quy đồng mẫu chung $63$: $\dfrac{-5}{9} = \dfrac{-35}{63}$ và $\dfrac{-4}{7} = \dfrac{-36}{63}$. Vì $-35 > -36$ nên $\dfrac{-5}{9} > \dfrac{4}{-7}$.'
```

```quiz
type: choice
question: 'Không cần quy đồng, phân số nào sau đây LỚN HƠN 1?'
options:
  - '$\dfrac{14}{15}$'
  - '$\dfrac{-9}{8}$'
  - '$\dfrac{2026}{2025}$'
  - '$\dfrac{17}{17}$'
answer: 3
explanation: 'Phân số dương có tử lớn hơn mẫu ($2026 > 2025$) thì lớn hơn $1$.'
```

```quiz
type: choice
question: 'Đổi hỗn số $4\dfrac{3}{7}$ ra phân số ta được:'
options:
  - '$\dfrac{19}{7}$'
  - '$\dfrac{25}{7}$'
  - '$\dfrac{31}{7}$'
  - '$\dfrac{12}{7}$'
answer: 3
explanation: 'Tử số mới $= 4 \cdot 7 + 3 = 28 + 3 = 31$, giữ nguyên mẫu $7$, ta được $\dfrac{31}{7}$.'
```

```quiz
type: choice
question: 'Đổi phân số $\dfrac{38}{5}$ ra hỗn số ta được:'
options:
  - '$7\dfrac{3}{5}$'
  - '$6\dfrac{8}{5}$'
  - '$8\dfrac{2}{5}$'
  - '$7\dfrac{1}{5}$'
answer: 1
explanation: 'Lấy $38 : 5$ được thương $7$, dư $3$. Vậy $\dfrac{38}{5} = 7\dfrac{3}{5}$.'
```

```quiz
type: choice
question: 'Có bao nhiêu số nguyên $x$ thỏa mãn $\dfrac{-2}{3} < \dfrac{x}{6} < \dfrac{1}{2}$?'
options:
  - '5'
  - '6'
  - '7'
  - '8'
answer: 2
explanation: 'Quy đồng mẫu $6$: $\dfrac{-4}{6} < \dfrac{x}{6} < \dfrac{3}{6} \implies -4 < x < 3$. Các số nguyên $x$ là $-3; -2; -1; 0; 1; 2$ (tổng cộng 6 số).'
```

```quiz
type: choice
question: 'Trong hai phân số $\dfrac{19}{20}$ và $\dfrac{24}{25}$, phân số nào lớn hơn và vì sao?'
options:
  - '$\dfrac{19}{20} > \dfrac{24}{25}$ vì tử số nhỏ hơn'
  - '$\dfrac{24}{25} > \dfrac{19}{20}$ vì phần bù $1 - \dfrac{24}{25} = \dfrac{1}{25} < \dfrac{1}{20}$'
  - 'Hai phân số bằng nhau'
  - '$\dfrac{19}{20} > \dfrac{24}{25}$ vì mẫu số nhỏ hơn'
answer: 2
explanation: 'Phần bù tới 1 là $\dfrac{1}{20}$ và $\dfrac{1}{25}$. Vì $\dfrac{1}{25} < \dfrac{1}{20}$ nên phân số $\dfrac{24}{25}$ có phần bù nhỏ hơn, do đó lớn hơn.'
```

```quiz
type: choice
question: 'Sắp xếp ba hỗn số sau theo thứ tự tăng dần: $3\dfrac{1}{4}; \; 2\dfrac{7}{8}; \; 3\dfrac{2}{5}$:'
options:
  - '$2\dfrac{7}{8} < 3\dfrac{1}{4} < 3\dfrac{2}{5}$'
  - '$3\dfrac{1}{4} < 2\dfrac{7}{8} < 3\dfrac{2}{5}$'
  - '$2\dfrac{7}{8} < 3\dfrac{2}{5} < 3\dfrac{1}{4}$'
  - '$3\dfrac{2}{5} < 3\dfrac{1}{4} < 2\dfrac{7}{8}$'
answer: 1
explanation: 'Phần nguyên $2 < 3$ nên $2\dfrac{7}{8}$ nhỏ nhất. Với hai hỗn số cùng phần nguyên $3$: $\dfrac{1}{4} = \dfrac{5}{20} < \dfrac{2}{5} = \dfrac{8}{20}$, do đó $3\dfrac{1}{4} < 3\dfrac{2}{5}$.'
```

```quiz
type: choice
question: 'Tìm số nguyên dương $x$ biết $\dfrac{3}{8} < \dfrac{3}{x} < \dfrac{3}{5}$:'
options:
  - '$x \in \{6; 7\}$'
  - '$x \in \{5; 6; 7\}$'
  - '$x = 6$'
  - '$x = 7$'
answer: 1
explanation: 'Cùng tử số dương $3$, do đó mẫu số ngược chiều: $5 < x < 8$. Vì $x$ nguyên dương nên $x \in \{6; 7\}$.'
```

---

## 5. Phiếu bài tập tự luyện và lời giải chi tiết

### Phần 1: Mức độ Nhận biết — Thông hiểu

**Bài 1:** Quy đồng mẫu các phân số sau:
a) $\dfrac{3}{8}$ và $\dfrac{5}{12}.$
b) $\dfrac{-4}{15}$ và $\dfrac{7}{-20}.$
c) $\dfrac{1}{6}; \quad \dfrac{-3}{8}; \quad \dfrac{5}{18}.$

**Bài 2:** So sánh các cặp phân số sau bằng cách quy đồng mẫu:
a) $\dfrac{7}{10}$ và $\dfrac{11}{15}.$
b) $\dfrac{-5}{8}$ và $\dfrac{-7}{12}.$
c) $\dfrac{-9}{14}$ và $\dfrac{13}{-21}.$

**Bài 3:** Không quy đồng mẫu số, hãy điền dấu $(<, >, =)$ thích hợp vào ô trống:
a) $\dfrac{-7}{11} \;\dots\; 0$
b) $\dfrac{15}{13} \;\dots\; 1$
c) $\dfrac{-8}{17} \;\dots\; \dfrac{5}{12}$
d) $\dfrac{9}{25} \;\dots\; \dfrac{9}{28}$

**Bài 4:** Đổi các phân số sau ra hỗn số: $\dfrac{29}{6}; \quad \dfrac{53}{8}; \quad \dfrac{74}{9}.$
Đổi các hỗn số sau ra phân số: $3\dfrac{4}{7}; \quad 6\dfrac{2}{5}; \quad 8\dfrac{1}{3}.$

---

### Phần 2: Mức độ Vận dụng

**Bài 5:** Sắp xếp các phân số sau theo thứ tự từ bé đến lớn:
$$\dfrac{-4}{5}; \quad \dfrac{7}{10}; \quad \dfrac{-3}{4}; \quad 0; \quad \dfrac{5}{6}; \quad \dfrac{1}{2}.$$

**Bài 6:** Tìm các số nguyên $x$ thỏa mãn:
a) $\dfrac{-3}{4} < \dfrac{x}{12} < \dfrac{-1}{6}.$
b) $\dfrac{2}{5} \le \dfrac{x}{20} < \dfrac{3}{4}.$

**Bài 7:** So sánh các phân số sau bằng phương pháp phần bù tới $1$ hoặc phần hơn so với $1$:
a) $\dfrac{97}{98}$ và $\dfrac{98}{99}.$
b) $\dfrac{105}{103}$ và $\dfrac{207}{205}.$

**Bài 8 (Thực tế):** Trong một cuộc thi bơi ếch $50\text{ m}$:
- Bạn Hùng bơi hết $\dfrac{3}{4}$ phút.
- Bạn Dũng bơi hết $\dfrac{7}{10}$ phút.
- Bạn Nam bơi hết $\dfrac{11}{15}$ phút.
Hỏi bạn nào bơi nhanh nhất? Bạn nào bơi chậm nhất?

---

### Phần 3: Mức độ Vận dụng cao & Học sinh giỏi

**Bài 9:** Sắp xếp các phân số sau theo thứ tự giảm dần mà không quy đồng mẫu số:
$$A = \dfrac{5}{18}; \quad B = \dfrac{10}{37}; \quad C = \dfrac{15}{56}.$$

**Bài 10:** Tìm tất cả các phân số có tử số là $7,$ lớn hơn $\dfrac{3}{8}$ và nhỏ hơn $\dfrac{3}{7}.$

**Bài 11:** So sánh hai biểu thức:
$$P = \dfrac{2025^{10} + 1}{2025^{11} + 1} \quad \text{và} \quad Q = \dfrac{2025^{11} + 1}{2025^{12} + 1}.$$

**Bài 12:** Tìm số nguyên dương $n$ nhỏ nhất sao cho:
$$\dfrac{7}{15} < \dfrac{n}{n + 10} < \dfrac{8}{15}.$$

---

### Lời giải chi tiết phiếu bài tập tự luyện

#### Lời giải Bài 1:
a) $\text{BCNN}(8, 12) = 24.$
$$\dfrac{3}{8} = \dfrac{3 \cdot 3}{8 \cdot 3} = \dfrac{9}{24}; \qquad \dfrac{5}{12} = \dfrac{5 \cdot 2}{12 \cdot 2} = \dfrac{10}{24}.$$

b) Đưa về mẫu dương: $\dfrac{7}{-20} = \dfrac{-7}{20}.$
$\text{BCNN}(15, 20) = 60.$
$$\dfrac{-4}{15} = \dfrac{-4 \cdot 4}{15 \cdot 4} = \dfrac{-16}{60}; \qquad \dfrac{-7}{20} = \dfrac{-7 \cdot 3}{20 \cdot 3} = \dfrac{-21}{60}.$$

c) $\text{BCNN}(6, 8, 18) = 72.$
$$\dfrac{1}{6} = \dfrac{1 \cdot 12}{6 \cdot 12} = \dfrac{12}{72}; \qquad \dfrac{-3}{8} = \dfrac{-3 \cdot 9}{8 \cdot 9} = \dfrac{-27}{72}; \qquad \dfrac{5}{18} = \dfrac{5 \cdot 4}{18 \cdot 4} = \dfrac{20}{72}.$$

#### Lời giải Bài 2:
a) $\text{BCNN}(10, 15) = 30.$
$\dfrac{7}{10} = \dfrac{21}{30}; \quad \dfrac{11}{15} = \dfrac{22}{30}.$ Vì $21 < 22$ nên $\dfrac{7}{10} < \dfrac{11}{15}.$

b) $\text{BCNN}(8, 12) = 24.$
$\dfrac{-5}{8} = \dfrac{-15}{24}; \quad \dfrac{-7}{12} = \dfrac{-14}{24}.$ Vì $-15 < -14$ nên $\dfrac{-5}{8} < \dfrac{-7}{12}.$

c) Đưa về mẫu dương: $\dfrac{13}{-21} = \dfrac{-13}{21}.$
$\text{BCNN}(14, 21) = 42.$
$\dfrac{-9}{14} = \dfrac{-27}{42}; \quad \dfrac{-13}{21} = \dfrac{-26}{42}.$ Vì $-27 < -26$ nên $\dfrac{-9}{14} < \dfrac{13}{-21}.$

#### Lời giải Bài 3:
a) $\dfrac{-7}{11} < 0$ (phân số âm nhỏ hơn $0$).
b) $\dfrac{15}{13} > 1$ (tử số lớn hơn mẫu số).
c) $\dfrac{-8}{17} < \dfrac{5}{12}$ (số âm luôn nhỏ hơn số dương).
d) $\dfrac{9}{25} > \dfrac{9}{28}$ (cùng tử số dương $9,$ mẫu $25 < 28$).

#### Lời giải Bài 4:
- Đổi ra hỗn số:
  + $29 : 6 = 4$ (dư $5$) $\implies \dfrac{29}{6} = 4\dfrac{5}{6}.$
  + $53 : 8 = 6$ (dư $5$) $\implies \dfrac{53}{8} = 6\dfrac{5}{8}.$
  + $74 : 9 = 8$ (dư $2$) $\implies \dfrac{74}{9} = 8\dfrac{2}{9}.$
- Đổi ra phân số:
  + $3\dfrac{4}{7} = \dfrac{3 \cdot 7 + 4}{7} = \dfrac{25}{7}.$
  + $6\dfrac{2}{5} = \dfrac{6 \cdot 5 + 2}{5} = \dfrac{32}{5}.$
  + $8\dfrac{1}{3} = \dfrac{8 \cdot 3 + 1}{3} = \dfrac{25}{3}.$

#### Lời giải Bài 5:
- Nhóm âm: $\dfrac{-4}{5}$ và $\dfrac{-3}{4}.$ Quy đồng mẫu $20$:
  $\dfrac{-4}{5} = \dfrac{-16}{20}; \quad \dfrac{-3}{4} = \dfrac{-15}{20}.$
  Vì $-16 < -15$ nên $\dfrac{-4}{5} < \dfrac{-3}{4}.$
- Nhóm dương: $\dfrac{7}{10}; \dfrac{5}{6}; \dfrac{1}{2}.$ Quy đồng mẫu $30$:
  $\dfrac{1}{2} = \dfrac{15}{30}; \quad \dfrac{7}{10} = \dfrac{21}{30}; \quad \dfrac{5}{6} = \dfrac{25}{30}.$
  Vì $15 < 21 < 25$ nên $\dfrac{1}{2} < \dfrac{7}{10} < \dfrac{5}{6}.$
- Sắp xếp tăng dần:
  $$\dfrac{-4}{5} < \dfrac{-3}{4} < 0 < \dfrac{1}{2} < \dfrac{7}{10} < \dfrac{5}{6}.$$

#### Lời giải Bài 6:
a) Quy đồng mẫu $12$:
$$\dfrac{-9}{12} < \dfrac{x}{12} < \dfrac{-2}{12} \implies -9 < x < -2.$$
Vậy $x \in \{-8; -7; -6; -5; -4; -3\}.$

b) Quy đồng mẫu $20$:
$$\dfrac{8}{20} \le \dfrac{x}{20} < \dfrac{15}{20} \implies 8 \le x < 15.$$
Vậy $x \in \{8; 9; 10; 11; 12; 13; 14\}.$

#### Lời giải Bài 7:
a) Xét phần bù tới $1$:
$$1 - \dfrac{97}{98} = \dfrac{1}{98}; \qquad 1 - \dfrac{98}{99} = \dfrac{1}{99}.$$
Vì $\dfrac{1}{98} > \dfrac{1}{99}$ nên $\dfrac{97}{98} < \dfrac{98}{99}.$

b) Xét phần hơn so với $1$:
$$\dfrac{105}{103} - 1 = \dfrac{2}{103}; \qquad \dfrac{207}{205} - 1 = \dfrac{2}{205}.$$
Vì cùng tử $2$ và mẫu $103 < 205$ nên $\dfrac{2}{103} > \dfrac{2}{205}.$
Do đó: $\dfrac{105}{103} > \dfrac{207}{205}.$

#### Lời giải Bài 8:
So sánh thời gian ba bạn bơi: $\dfrac{3}{4}; \dfrac{7}{10}; \dfrac{11}{15}$ phút.
Mẫu chung $\text{BCNN}(4, 10, 15) = 60.$
$$\dfrac{3}{4} = \dfrac{45}{60}; \qquad \dfrac{7}{10} = \dfrac{42}{60}; \qquad \dfrac{11}{15} = \dfrac{44}{60}.$$
Vì $42 < 44 < 45$ nên:
$$\dfrac{7}{10} < \dfrac{11}{15} < \dfrac{3}{4}.$$
Thời gian của bạn Dũng ít nhất, bạn Hùng nhiều nhất.
Vậy **bạn Dũng bơi nhanh nhất** và **bạn Hùng bơi chậm nhất**.

#### Lời giải Bài 9:
Các tử số là $5, 10, 15.$ Ta có $\text{BCNN}(5, 10, 15) = 30.$
Quy đồng tử số:
$$A = \dfrac{5}{18} = \dfrac{30}{108}; \qquad B = \dfrac{10}{37} = \dfrac{30}{111}; \qquad C = \dfrac{15}{56} = \dfrac{30}{112}.$$
Vì $108 < 111 < 112$ nên:
$$\dfrac{30}{108} > \dfrac{30}{111} > \dfrac{30}{112}.$$
Vậy sắp xếp theo thứ tự giảm dần là:
$$A > B > C \quad \left(\text{tức } \dfrac{5}{18} > \dfrac{10}{37} > \dfrac{15}{56}\right).$$

#### Lời giải Bài 10:
Gọi phân số cần tìm là $\dfrac{7}{y}$ với $y \in \mathbb{Z}, y \neq 0.$
Theo đề bài: $\dfrac{3}{8} < \dfrac{7}{y} < \dfrac{3}{7}.$
Vì $\dfrac{3}{8} > 0$ nên $y > 0.$
Quy đồng tử số về $\text{BCNN}(3, 7) = 21$:
$$\dfrac{21}{56} < \dfrac{21}{3y} < \dfrac{21}{49}.$$
Do các tử số dương bằng nhau nên các mẫu số đổi chiều:
$$49 < 3y < 56.$$
Chia cho $3$:
$$16{,}33 < y < 18{,}66.$$
Vì $y \in \mathbb{Z}$ nên $y \in \{17; 18\}.$
Vậy có hai phân số thỏa mãn là $\dfrac{7}{17}$ và $\dfrac{7}{18}.$

#### Lời giải Bài 11:
Đặt $a = 2025.$
$$P = \dfrac{a^{10} + 1}{a^{11} + 1}; \qquad Q = \dfrac{a^{11} + 1}{a^{12} + 1}.$$
Nhân cả hai phân số với $a$:
$$a \cdot P = \dfrac{a^{11} + a}{a^{11} + 1} = 1 + \dfrac{a - 1}{a^{11} + 1}.$$
$$a \cdot Q = \dfrac{a^{12} + a}{a^{12} + 1} = 1 + \dfrac{a - 1}{a^{12} + 1}.$$
Vì $a = 2025 > 1$ nên $a - 1 > 0.$
Mẫu số $a^{11} + 1 < a^{12} + 1 \implies \dfrac{a - 1}{a^{11} + 1} > \dfrac{a - 1}{a^{12} + 1}.$
Suy ra $a \cdot P > a \cdot Q \implies P > Q.$
Vậy $\dfrac{2025^{10} + 1}{2025^{11} + 1} > \dfrac{2025^{11} + 1}{2025^{12} + 1}.$

#### Lời giải Bài 12:
Bất đẳng thức: $\dfrac{7}{15} < \dfrac{n}{n + 10} < \dfrac{8}{15}.$
Vì $n \in \mathbb{N}^*$ nên $n + 10 > 0.$
- Xét vế trái: $\dfrac{7}{15} < \dfrac{n}{n + 10}$
  $\iff 7(n + 10) < 15n \iff 7n + 70 < 15n \iff 8n > 70 \iff n > 8{,}75.$
- Xét vế phải: $\dfrac{n}{n + 10} < \dfrac{8}{15}$
  $\iff 15n < 8(n + 10) \iff 15n < 8n + 80 \iff 7n < 80 \iff n < 11{,}42.$
Kết hợp hai điều kiện:
$$8{,}75 < n < 11{,}42.$$
Vì $n$ là số nguyên dương nên $n \in \{9; 10; 11\}.$
Số nguyên dương $n$ nhỏ nhất thỏa mãn là $n = 9.$

---

## 6. Đề kiểm tra 15 phút (Đề A & Đề B)

### Đề A (Thời gian: 15 phút)

**Phần 1: Trắc nghiệm (4 điểm)**
**Câu 1:** Mẫu chung nhỏ nhất của hai phân số $\dfrac{5}{12}$ và $\dfrac{-7}{16}$ là:
A. $24$
B. $36$
C. $48$
D. $96$

**Câu 2:** Khẳng định nào sau đây là đúng?
A. $\dfrac{-4}{9} > \dfrac{-2}{9}$
B. $\dfrac{-5}{7} < \dfrac{-3}{7}$
C. $\dfrac{-1}{3} < \dfrac{-2}{3}$
D. $\dfrac{-8}{11} > \dfrac{-5}{11}$

**Phần 2: Tự luận (6 điểm)**
**Câu 3 (3 điểm):** So sánh các cặp phân số sau:
a) $\dfrac{-5}{6}$ và $\dfrac{-7}{8}$
b) $\dfrac{11}{13}$ và $\dfrac{13}{15}$ (bằng phương pháp phần bù)

**Câu 4 (3 điểm):** Đổi phân số $\dfrac{43}{6}$ ra hỗn số và đổi hỗn số $5\dfrac{3}{7}$ ra phân số.

---

### Đáp án và Biểu điểm Đề A

- **Câu 1 (2 điểm):** Chọn **C** (vì $\text{BCNN}(12, 16) = 48$).
- **Câu 2 (2 điểm):** Chọn **B** (vì $-5 < -3$).
- **Câu 3 (3 điểm):**
  a) Quy đồng mẫu chung $24$: $\dfrac{-5}{6} = \dfrac{-20}{24}$ và $\dfrac{-7}{8} = \dfrac{-21}{24}.$ Vì $-20 > -21$ nên $\dfrac{-5}{6} > \dfrac{-7}{8}.$ (1,5 điểm)
  b) Phần bù tới $1$: $1 - \dfrac{11}{13} = \dfrac{2}{13}$ và $1 - \dfrac{13}{15} = \dfrac{2}{15}.$ Vì $\dfrac{2}{13} > \dfrac{2}{15}$ nên $\dfrac{11}{13} < \dfrac{13}{15}.$ (1,5 điểm)
- **Câu 4 (3 điểm):**
  - $\dfrac{43}{6} = 7\dfrac{1}{6}$ (vì $43 : 6 = 7$ dư $1$). (1,5 điểm)
  - $5\dfrac{3}{7} = \dfrac{5 \cdot 7 + 3}{7} = \dfrac{38}{7}.$ (1,5 điểm)

---

### Đề B (Thời gian: 15 phút)

**Phần 1: Trắc nghiệm (4 điểm)**
**Câu 1:** Trong các phân số sau, phân số nào lớn hơn $1$?
A. $\dfrac{24}{25}$
B. $\dfrac{-7}{6}$
C. $\dfrac{19}{18}$
D. $\dfrac{15}{15}$

**Câu 2:** Đổi hỗn số $3\dfrac{4}{9}$ ra phân số, ta được:
A. $\dfrac{16}{9}$
B. $\dfrac{31}{9}$
C. $\dfrac{27}{9}$
D. $\dfrac{12}{9}$

**Phần 2: Tự luận (6 điểm)**
**Câu 3 (3 điểm):** Tìm số nguyên $x$ biết $\dfrac{-3}{5} < \dfrac{x}{15} < \dfrac{-1}{3}.$

**Câu 4 (3 điểm):** Không quy đồng mẫu số, hãy so sánh: $\dfrac{5}{14}$ và $\dfrac{5}{18}; \quad \dfrac{-7}{12}$ và $\dfrac{3}{10}.$

---

### Đáp án và Biểu điểm Đề B

- **Câu 1 (2 điểm):** Chọn **C** (vì tử số $19 >$ mẫu số $18 > 0$).
- **Câu 2 (2 điểm):** Chọn **B** (vì $3 \cdot 9 + 4 = 31$).
- **Câu 3 (3 điểm):**
  Quy đồng mẫu chung $15$: $\dfrac{-9}{15} < \dfrac{x}{15} < \dfrac{-5}{15}.$ (1,0 điểm)
  Suy ra $-9 < x < -5.$ (1,0 điểm)
  Vì $x \in \mathbb{Z}$ nên $x \in \{-8; -7; -6\}.$ (1,0 điểm)
- **Câu 4 (3 điểm):**
  - Cùng tử số dương $5,$ vì mẫu $14 < 18$ nên $\dfrac{5}{14} > \dfrac{5}{18}.$ (1,5 điểm)
  - Vì $\dfrac{-7}{12} < 0$ và $\dfrac{3}{10} > 0$ nên $\dfrac{-7}{12} < \dfrac{3}{10}.$ (1,5 điểm)

---

## 7. Cạm bẫy học sinh thường gặp & Mẹo ghi nhớ siêu tốc

> [!WARNING]
> **Các cạm bẫy cần tuyệt đối tránh:**
> 1. **Quên đổi mẫu âm về mẫu dương:** Khi so sánh $\dfrac{3}{-5}$ và $\dfrac{4}{-5},$ nếu vội kết luận vì cùng mẫu $-5$ nên $3 < 4 \implies \dfrac{3}{-5} < \dfrac{4}{-5}$ là **sai hoàn toàn**! Ta phải đổi về mẫu dương: $\dfrac{-3}{5} > \dfrac{-4}{5}.$ Quy tắc "tử lớn hơn thì lớn hơn" **chỉ đúng khi mẫu số là số dương**.
> 2. **Nhầm lẫn thứ tự số nguyên âm:** $-8 < -5,$ do đó $\dfrac{-8}{9} < \dfrac{-5}{9}.$ Đừng nhầm tưởng số $8$ to hơn số $5$ mà cho rằng $\dfrac{-8}{9}$ lớn hơn.
> 3. **Cùng tử số nhưng quên điều kiện tử dương:** Quy tắc "mẫu nhỏ hơn thì lớn hơn" chỉ áp dụng cho **tử số dương**. Với tử số âm, quy tắc sẽ bị đảo chiều.
> 4. **Hỗn số có phần phân số lớn hơn 1:** Cách viết như $3\dfrac{5}{4}$ không phải là hỗn số chuẩn. Hỗn số chuẩn luôn có phần phân số nhỏ hơn $1.$

> [!TIP]
> **Bài thơ ghi nhớ so sánh phân số:**
> *"Muốn so hai số phân chia,*
> *Đưa về mẫu dượng, phân bua tỏ tường!*
> *Cùng mẫu thì ngắm tử thôi,*
> *Tử nào lớn bước, phân số thời vượt lên!*
> *Khác mẫu: quy đồng kề bên,*
> *Hoặc dùng số một, số không bắc cầu!*
> *Phần bù, phần lẻ trước sau,*
> *Hỗn số phần chẵn, cùng nhau đọ tài!"*
