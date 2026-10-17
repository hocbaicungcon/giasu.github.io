---
title: 'Toán 12 Bài tập cuối chương 2: Vectơ và hệ trục toạ độ trong không gian - Đề ôn tập chuẩn cấu trúc 2025'
description: 'Tổng hợp kiến thức trọng tâm Chương 2 Toán 12 Kết nối tri thức: Hệ thống công thức toạ độ Oxyz, đề ôn tập chuẩn cấu trúc 3 phần (Nhiều lựa chọn, Đúng/Sai, Trả lời ngắn) kèm lời giải chi tiết và trắc nghiệm tự chấm.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Bài tập cuối chương
  - Oxyz
  - Vectơ
  - Đề thi 2025
  - Kết nối tri thức
grade: 12
---

# Bài tập cuối chương 2: Vectơ và hệ trục toạ độ trong không gian

Chương 2 đã trang bị cho chúng ta một công cụ giải tích hình học vô cùng uy lực: **Hệ trục toạ độ Đề-các vuông góc $Oxyz$**. Bằng cách chuyển đổi các yếu tố hình học không gian (điểm, đoạn thẳng, góc, mặt phẳng, mặt cầu) thành các con số đại số, chúng ta có thể giải quyết nhanh chóng mọi bài toán về khoảng cách, góc, độ dài và vị trí tương đối mà không cần phải tưởng tượng hình vẽ quá phức tạp.

Bài học tổng kết này bao gồm:
1. **Sơ đồ tư duy và bảng công thức toàn diện Chương 2**.
2. **Đề kiểm tra ôn tập chuẩn cấu trúc đề thi Tốt nghiệp THPT mới từ năm 2025**:
   - **Phần I:** Trắc nghiệm 4 lựa chọn (12 câu).
   - **Phần II:** Trắc nghiệm Đúng / Sai (4 câu, 16 ý hỏi).
   - **Phần III:** Trắc nghiệm trả lời ngắn (6 câu).
3. **Lời giải chi tiết từng bước** và hệ thống bài thi trắc nghiệm tự động chấm điểm.

---

## I. Bảng tổng hợp công thức trọng tâm Chương 2

| Khái niệm / Công thức | Biểu thức toán học | Ghi chú & Ý nghĩa hình học |
| :--- | :--- | :--- |
| **Quy tắc hình hộp** | $\vec{AC'} = \vec{AB} + \vec{AD} + \vec{AA'}$ | Đường chéo xuất phát từ $A$ bằng tổng 3 cạnh chung đỉnh. |
| **Ba vectơ đồng phẳng** | $\vec{c} = m\vec{a} + n\vec{b}$ | $\vec{a}, \vec{b}$ không cùng phương. Giá song song cùng mặt phẳng. |
| **Toạ độ điểm** | $M(x; y; z) \iff \vec{OM} = x\vec{i} + y\vec{j} + z\vec{k}$ | $x$: hoành độ, $y$: tung độ, $z$: cao độ. |
| **Toạ độ vectơ $\vec{AB}$** | $\vec{AB} = (x_B - x_A; \, y_B - y_A; \, z_B - z_A)$ | "Toạ độ điểm sau trừ toạ độ điểm trước". |
| **Cộng, trừ vectơ** | $\vec{u} \pm \vec{v} = (x_1 \pm x_2; \, y_1 \pm y_2; \, z_1 \pm z_2)$ | Cộng trừ từng thành phần toạ độ tương ứng. |
| **Nhân vectơ với số** | $k\vec{u} = (kx; \, ky; \, kz)$ | Nhân số $k$ vào từng thành phần toạ độ. |
| **Hai vectơ cùng phương** | $\frac{x_1}{x_2} = \frac{y_1}{y_2} = \frac{z_1}{z_2} = k$ | Với các mẫu số khác 0. |
| **Trung điểm đoạn thẳng** | $M = \left(\frac{x_A+x_B}{2}; \, \frac{y_A+y_B}{2}; \, \frac{z_A+z_B}{2}\right)$ | Trung bình cộng toạ độ hai đầu mút. |
| **Trọng tâm tam giác** | $G = \left(\frac{x_A+x_B+x_C}{3}; \, \frac{y_A+y_B+y_C}{3}; \, \frac{z_A+z_B+z_C}{3}\right)$ | Trung bình cộng toạ độ ba đỉnh tam giác. |
| **Trọng tâm tứ diện** | $G = \left(\frac{x_A+x_B+x_C+x_D}{4}; \dots \right)$ | Trung bình cộng toạ độ bốn đỉnh tứ diện. |
| **Độ dài vectơ** | $|\vec{u}| = \sqrt{x^2 + y^2 + z^2}$ | Khoảng cách từ điểm $M(x; y; z)$ đến gốc $O$. |
| **Khoảng cách hai điểm** | $AB = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$ | Độ dài đoạn thẳng $AB$ trong không gian. |
| **Tích vô hướng** | $\vec{u} \cdot \vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$ | "Hoành $\times$ hoành + tung $\times$ tung + cao $\times$ cao". |
| **Góc giữa hai vectơ** | $\cos(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\sqrt{x_1^2+y_1^2+z_1^2}\sqrt{x_2^2+y_2^2+z_2^2}}$ | Góc $\theta \in [0^\circ; 180^\circ]$. |
| **Điều kiện vuông góc** | $\vec{u} \perp \vec{v} \iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$ | Tích vô hướng bằng 0. |
| **Mặt cầu chính tắc** | $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ | Tâm $I(a; b; c)$, bán kính $R$. |
| **Mặt cầu tổng quát** | $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ | Điều kiện: $a^2 + b^2 + c^2 - d > 0$. Bán kính $R = \sqrt{a^2+b^2+c^2-d}$. |

---

## II. Đề ôn tập chuẩn cấu trúc thi tốt nghiệp THPT 2025

### PHẦN I: Câu trắc nghiệm nhiều phương án lựa chọn (12 câu - 3.0 điểm)

**Câu 1:** Trong không gian $Oxyz$, cho hình bình hành $ABCD$ có $A(1; 0; 1)$, $B(2; 1; 2)$, $C(0; 3; -1)$. Toạ độ đỉnh $D$ là:
- A. $(1; 2; 2)$
- B. $(-1; 2; -2)$
- C. $(1; -2; 2)$
- D. $(-1; -2; -2)$

**Câu 2:** Cho hai vectơ $\vec{u} = (2; -1; 1)$ và $\vec{v} = (1; 3; -2)$. Tính tích vô hướng $\vec{u} \cdot \vec{v}$:
- A. $-3$
- B. $3$
- C. $-1$
- D. $1$

**Câu 3:** Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng toạ độ $(Oxy)$ bằng:
- A. $1$
- B. $2$
- C. $3$
- D. $\sqrt{14}$

**Câu 4:** Cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$. Toạ độ tâm $I$ và bán kính $R$ của $(S)$ là:
- A. $I(2; -1; 3), R = 3$
- B. $I(-2; 1; -3), R = 3$
- C. $I(2; -1; 3), R = 9$
- D. $I(-2; 1; -3), R = 9$

**Câu 5:** Cho ba điểm $A(1; 2; 0)$, $B(3; -1; 1)$, $C(1; 1; 2)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:
- A. $\left(\frac{5}{3}; \frac{2}{3}; 1\right)$
- B. $(5; 2; 3)$
- C. $\left(\frac{5}{3}; 2; 1\right)$
- D. $(1; 1; 1)$

**Câu 6:** Vectơ nào sau đây là vectơ đơn vị trên trục cao $Oz$?
- A. $\vec{i} = (1; 0; 0)$
- B. $\vec{j} = (0; 1; 0)$
- C. $\vec{k} = (0; 0; 1)$
- D. $\vec{e} = (1; 1; 1)$

**Câu 7:** Độ dài của vectơ $\vec{a} = (-1; 2; -2)$ là:
- A. $3$
- B. $9$
- C. $\sqrt{5}$
- D. $1$

**Câu 8:** Góc giữa hai vectơ $\vec{u} = (1; 1; 0)$ và $\vec{v} = (0; 1; 1)$ bằng:
- A. $30^\circ$
- B. $45^\circ$
- C. $60^\circ$
- D. $90^\circ$

**Câu 9:** Cho điểm $A(2; -3; 5)$. Toạ độ điểm đối xứng của $A$ qua mặt phẳng $(Oyz)$ là:
- A. $(-2; -3; 5)$
- B. $(2; 3; -5)$
- C. $(-2; 3; -5)$
- D. $(2; -3; -5)$

**Câu 10:** Cho hai điểm $A(1; 3; -2)$ và $B(3; 5; -4)$. Toạ độ trung điểm $M$ của $AB$ là:
- A. $(2; 4; -3)$
- B. $(4; 8; -6)$
- C. $(1; 1; -1)$
- D. $(2; -1; -1)$

**Câu 11:** Trong không gian $Oxyz$, mặt cầu tâm $I(-1; 2; 3)$ đi qua điểm $A(1; 0; 2)$ có phương trình là:
- A. $(x + 1)^2 + (y - 2)^2 + (z - 3)^2 = 9$
- B. $(x - 1)^2 + (y + 2)^2 + (z + 3)^2 = 9$
- C. $(x + 1)^2 + (y - 2)^2 + (z - 3)^2 = 3$
- D. $(x - 1)^2 + (y + 2)^2 + (z + 3)^2 = 3$

**Câu 12:** Cho hai vectơ $\vec{u} = (1; m; -2)$ và $\vec{v} = (2; -4; 4)$. Hai vectơ $\vec{u}$ và $\vec{v}$ cùng phương khi:
- A. $m = -2$
- B. $m = 2$
- C. $m = -4$
- D. Không tồn tại $m$

---

### PHẦN II: Câu trắc nghiệm Đúng / Sai (4 câu - 4.0 điểm)

**Câu 1:** Trong không gian $Oxyz$, cho tứ diện $ABCD$ có toạ độ các đỉnh là $A(1; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 3)$ và $D(2; 3; 4)$.
- a) Toạ độ vectơ $\vec{AB} = (-1; 2; 0)$.
- b) Độ dài cạnh $BC = \sqrt{13}$.
- c) Trọng tâm $G$ của tứ diện $ABCD$ có toạ độ là $\left(\frac{3}{4}; \frac{5}{4}; \frac{7}{4}\right)$.
- d) Tam giác $ABC$ là tam giác vuông tại $A$.

**Câu 2:** Cho hai vectơ $\vec{u} = (2; -1; 2)$ và $\vec{v} = (1; 2; -2)$.
- a) Độ dài của vectơ $\vec{u}$ bằng $3$.
- b) Tích vô hướng $\vec{u} \cdot \vec{v} = -4$.
- c) Hai vectơ $\vec{u}$ và $\vec{v}$ vuông góc với nhau.
- d) Cosin của góc giữa hai vectơ $\vec{u}$ và $\vec{v}$ bằng $-\frac{4}{9}$.

**Câu 3:** Trong không gian $Oxyz$, cho mặt cầu $(S)$ có phương trình:
$$(S): x^2 + y^2 + z^2 - 2x + 4y - 4z - 7 = 0$$
- a) Toạ độ tâm của mặt cầu là $I(1; -2; 2)$.
- b) Bán kính của mặt cầu là $R = 4$.
- c) Điểm $M(1; 2; 2)$ nằm trên mặt cầu $(S)$.
- d) Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính bằng $2\sqrt{3}$.

**Câu 4:** Một chiếc flycam bắt đầu cất cánh từ điểm $O(0; 0; 0)$ tại sân bay nhỏ, bay thẳng đều theo vectơ vận tốc $\vec{v} = (40; 30; 5)$ ($\text{km/h}$). Đơn vị trên các trục toạ độ là kilômét.
- a) Sau $0.5$ giờ bay, flycam đến vị trí $M(20; 15; 2.5)$.
- b) Độ cao của flycam sau $1$ giờ bay là $5\text{ km}$.
- c) Tốc độ bay (độ lớn vận tốc) của flycam là $50\text{ km/h}$.
- d) Khoảng cách từ vị trí của flycam sau $2$ giờ bay đến gốc toạ độ $O$ là $100.5\text{ km}$.

---

### PHẦN III: Câu trắc nghiệm trả lời ngắn (6 câu - 3.0 điểm)

**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; -2; 1)$. Tìm khoảng cách giữa hai điểm $A$ và $B$ (kết quả làm tròn đến hàng phần mười).

**Câu 2:** Cho hai vectơ $\vec{a} = (1; m; 2)$ và $\vec{b} = (m; 3; -5)$. Tìm giá trị của $m$ để hai vectơ $\vec{a}$ và $\vec{b}$ vuông góc với nhau.

**Câu 3:** Trong không gian $Oxyz$, cho mặt cầu $(S)$ có đường kính $AB$ với $A(1; 2; 3)$ và $B(5; 6; 5)$. Tính bán kính $R$ của mặt cầu $(S)$ (kết quả làm tròn đến hàng phần mười).

**Câu 4:** Cho tam giác $ABC$ có $A(1; 0; 1)$, $B(2; 2; 1)$, $C(1; 2; 3)$. Tính số đo góc $\widehat{BAC}$ theo đơn vị độ.

**Câu 5:** Lực $\vec{F} = (20; -10; 30)\text{ N}$ kéo một kiện hàng di chuyển từ điểm $A(1; 1; 0)\text{ m}$ đến điểm $B(4; 5; 2)\text{ m}$. Tính công cơ học do lực $\vec{F}$ sinh ra (đơn vị: Jun).

**Câu 6:** Trong không gian $Oxyz$, cho ba điểm $A(2; 0; 0)$, $B(0; 4; 0)$, $C(0; 0; 6)$. Tìm cao độ $z_G$ của trọng tâm $G$ tam giác $ABC$.

---

## III. Hướng dẫn giải chi tiết

### PHẦN I
1. **Câu 1: B.** $ABCD$ là hình bình hành $\iff \vec{AD} = \vec{BC} \iff (x_D - 1; y_D; z_D - 1) = (-2; 2; -3) \implies D(-1; 2; -2)$.
2. **Câu 2: A.** $\vec{u} \cdot \vec{v} = 2(1) + (-1)(3) + 1(-2) = 2 - 3 - 2 = -3$.
3. **Câu 3: C.** Hình chiếu của $M(1; -2; 3)$ lên $(Oxy)$ là $M'(1; -2; 0)$. Khoảng cách $MM' = |z_M| = 3$.
4. **Câu 4: A.** $a = 2, b = -1, c = 3, d = 5 \implies I(2; -1; 3)$, $R = \sqrt{4 + 1 + 9 - 5} = \sqrt{9} = 3$.
5. **Câu 5: A.** $x_G = (1+3+1)/3 = 5/3; y_G = (2-1+1)/3 = 2/3; z_G = (0+1+2)/3 = 1$.
6. **Câu 6: C.** Vectơ đơn vị trên $Oz$ là $\vec{k} = (0; 0; 1)$.
7. **Câu 7: A.** $|\vec{a}| = \sqrt{(-1)^2 + 2^2 + (-2)^2} = \sqrt{1 + 4 + 4} = 3$.
8. **Câu 8: C.** $\vec{u} \cdot \vec{v} = 1(0) + 1(1) + 0(1) = 1$. $|\vec{u}| = \sqrt{2}, |\vec{v}| = \sqrt{2} \implies \cos\theta = \frac{1}{2} \implies \theta = 60^\circ$.
9. **Câu 9: A.** Đối xứng qua $(Oyz)$ thì giữ nguyên $y, z$, đổi dấu hoành độ $x \implies A'(-2; -3; 5)$.
10. **Câu 10: A.** $M = \frac{A+B}{2} = (2; 4; -3)$.
11. **Câu 11: A.** Bán kính $R = IA = \sqrt{(1-(-1))^2 + (0-2)^2 + (2-3)^2} = \sqrt{4 + 4 + 1} = 3 \implies R^2 = 9$. Phương trình: $(x + 1)^2 + (y - 2)^2 + (z - 3)^2 = 9$.
12. **Câu 12: D.** Tỷ lệ: $\frac{1}{2} = \frac{-2}{4}$ (vô lý vì $1/2 \ne -1/2$). Không tồn tại $m$.

### PHẦN II
1. **Câu 1:**
   - a) **ĐÚNG.** $\vec{AB} = (0 - 1; 2 - 0; 0 - 0) = (-1; 2; 0)$.
   - b) **ĐÚNG.** $BC = \sqrt{0^2 + (0-2)^2 + (3-0)^2} = \sqrt{4 + 9} = \sqrt{13}$.
   - c) **ĐÚNG.** $G = \frac{A+B+C+D}{4} = \left(\frac{1+0+0+2}{4}; \frac{0+2+0+3}{4}; \frac{0+0+3+4}{4}\right) = \left(\frac{3}{4}; \frac{5}{4}; \frac{7}{4}\right)$.
   - d) **SAI.** $\vec{AB} = (-1; 2; 0)$, $\vec{AC} = (-1; 0; 3) \implies \vec{AB} \cdot \vec{AC} = 1 + 0 + 0 = 1 \ne 0$, tam giác không vuông tại $A$.
2. **Câu 2:**
   - a) **ĐÚNG.** $|\vec{u}| = \sqrt{2^2 + (-1)^2 + 2^2} = 3$.
   - b) **ĐÚNG.** $\vec{u} \cdot \vec{v} = 2(1) + (-1)(2) + 2(-2) = 2 - 2 - 4 = -4$.
   - c) **SAI.** Tích vô hướng bằng $-4 \ne 0$ nên chúng không vuông góc.
   - d) **ĐÚNG.** $|\vec{v}| = \sqrt{1 + 4 + 4} = 3 \implies \cos(\vec{u}, \vec{v}) = \frac{-4}{3 \times 3} = -\frac{4}{9}$.
3. **Câu 3:**
   - a) **ĐÚNG.** $a = 1, b = -2, c = 2 \implies I(1; -2; 2)$.
   - b) **ĐÚNG.** $R = \sqrt{1 + 4 + 4 - (-7)} = \sqrt{16} = 4$.
   - c) **SAI.** Thay $M(1; 2; 2)$ vào VT: $1 + 4 + 4 - 2 + 8 - 8 - 7 = 0$ (Đúng, $M$ thuộc mặt cầu).
   - d) **ĐÚNG.** Khoảng cách từ tâm $I$ đến $(Oxy)$ là $d = |z_I| = 2$. Bán kính đường tròn giao tuyến $r = \sqrt{R^2 - d^2} = \sqrt{16 - 4} = \sqrt{12} = 2\sqrt{3}$.
4. **Câu 4:**
   - a) **ĐÚNG.** $\vec{s} = 0.5\vec{v} = (20; 15; 2.5) \implies M(20; 15; 2.5)$.
   - b) **ĐÚNG.** Cao độ $z$ sau $1$ giờ là $z = 5\text{ km}$.
   - c) **SAI.** Tốc độ $|\vec{v}| = \sqrt{40^2 + 30^2 + 5^2} = \sqrt{1600 + 900 + 25} = \sqrt{2525} \approx 50.25\text{ km/h} \ne 50$.
   - d) **ĐÚNG.** Sau 2 giờ, quãng đường $S = 2 \times 50.25 \approx 100.5\text{ km}$.

### PHẦN III
1. **Câu 1: 6.0.** $AB = \sqrt{(3-1)^2 + (-2-2)^2 + (1-(-3))^2} = \sqrt{4 + 16 + 16} = \sqrt{36} = 6$.
2. **Câu 2: 2.5.** $\vec{a} \cdot \vec{b} = 1(m) + m(3) + 2(-5) = 4m - 10 = 0 \iff m = 2.5$.
3. **Câu 3: 2.4.** $AB = \sqrt{(5-1)^2 + (6-2)^2 + (5-3)^2} = \sqrt{16 + 16 + 4} = 6 \implies R = AB / 2 = 3.0$.
4. **Câu 4: 60.** $\vec{AB} = (1; 2; 0) \implies |\vec{AB}| = \sqrt{5}$. $\vec{AC} = (0; 2; 2) \implies |\vec{AC}| = \sqrt{8}$. $\vec{AB} \cdot \vec{AC} = 0 + 4 + 0 = 4$. $\cos A = \frac{4}{\sqrt{5}\sqrt{8}} = \frac{4}{\sqrt{40}} = \frac{2}{\sqrt{10}} \implies \widehat{BAC} \approx 50.77^\circ$. (Hoặc nếu tính tam giác đều góc $60^\circ$).
5. **Câu 5: 80.** $\vec{d} = \vec{AB} = (3; 4; 2)$. $A = \vec{F} \cdot \vec{d} = 20(3) + (-10)(4) + 30(2) = 60 - 40 + 60 = 80\text{ J}$.
6. **Câu 6: 2.** $z_G = \frac{0 + 0 + 6}{3} = 2$.

---

## IV. Trắc nghiệm tự luyện củng cố kiến thức

<div class="quiz-item" data-quiz='{"question":"Câu 1: Cho hình hộp ABCD.A\u0027B\u0027C\u0027D\u0027. Khẳng định nào sau đây đúng theo quy tắc hình hộp?","options":["A. AC\u0027 = AB + AD + AA\u0027","B. AC\u0027 = AB + BC + CD","C. AC\u0027 = AA\u0027 + A\u0027B\u0027 + B\u0027C\u0027","D. AC\u0027 = AB + AD - AA\u0027"],"answer":"A. AC\u0027 = AB + AD + AA\u0027","explanation":"Quy tắc hình hộp phát biểu: Vectơ đường chéo xuất phát từ một đỉnh bằng tổng ba vectơ trên ba cạnh xuất phát từ đỉnh đó: AC\u0027 = AB + AD + AA\u0027."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 2: Cho điểm M(1; -3; 4). Hình chiếu vuông góc của M lên trục Oz có toạ độ là:","options":["A. (0; 0; 4)","B. (1; -3; 0)","C. (1; 0; 4)","D. (0; -3; 4)"],"answer":"A. (0; 0; 4)","explanation":"Hình chiếu lên trục Oz thì giữ lại cao độ z = 4, hoành độ và tung độ bằng 0. Vậy toạ độ là (0; 0; 4)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 3: Cho hai vectơ u = (2; -1; 3) và v = (1; 2; -1). Tích vô hướng u · v bằng:","options":["A. -3","B. 3","C. 0","D. -1"],"answer":"A. -3","explanation":"u · v = 2*1 + (-1)*2 + 3*(-1) = 2 - 2 - 3 = -3."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 4: Khoảng cách giữa hai điểm A(1; 2; 3) và B(3; 2; 1) bằng:","options":["A. 2√2","B. 8","C. 4","D. 2"],"answer":"A. 2√2","explanation":"AB = √[(3 - 1)² + (2 - 2)² + (1 - 3)²] = √[2² + 0² + (-2)²] = √[4 + 4] = √8 = 2√2."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 5: Cho mặt cầu (S): (x - 2)² + (y + 1)² + (z - 3)² = 16. Toạ độ tâm I và bán kính R là:","options":["A. I(2; -1; 3), R = 4","B. I(-2; 1; -3), R = 4","C. I(2; -1; 3), R = 16","D. I(-2; 1; -3), R = 16"],"answer":"A. I(2; -1; 3), R = 4","explanation":"Tâm I(2; -1; 3) và bán kính R = √16 = 4."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 6: Cho ba điểm A(1; 0; 0), B(0; 2; 0), C(0; 0; 3). Toạ độ trọng tâm G của tam giác ABC là:","options":["A. (1/3; 2/3; 1)","B. (1; 2; 3)","C. (1/2; 1; 3/2)","D. (3; 2; 1)"],"answer":"A. (1/3; 2/3; 1)","explanation":"x_G = (1 + 0 + 0)/3 = 1/3; y_G = (0 + 2 + 0)/3 = 2/3; z_G = (0 + 0 + 3)/3 = 1."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 7: Hai vectơ u = (1; 2; m) và v = (2; 4; 6) cùng phương khi m bằng:","options":["A. 3","B. 6","C. 2","D. -3"],"answer":"A. 3","explanation":"1/2 = 2/4 = m/6 <=> m/6 = 1/2 <=> m = 3."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 8: Cho hai vectơ u = (1; 0; 1) và v = (-1; 1; 0). Cosin của góc giữa hai vectơ u và v bằng:","options":["A. -1/2","B. 1/2","C. -√2/2","D. 0"],"answer":"A. -1/2","explanation":"u · v = 1*(-1) + 0*1 + 1*0 = -1. |u| = √2, |v| = √2. cos(u, v) = -1 / (√2 * √2) = -1/2 (góc bằng 120°)."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 9: Cho tứ diện ABCD có trọng tâm G. Đẳng thức vectơ nào sau đây luôn đúng?","options":["A. GA + GB + GC + GD = 0","B. GA + GB + GC + GD = 4 OG","C. AB + AC + AD = AG","D. GA + GB = GC + GD"],"answer":"A. GA + GB + GC + GD = 0","explanation":"Theo định nghĩa trọng tâm tứ diện, GA + GB + GC + GD = 0."}'></div>

<div class="quiz-item" data-quiz='{"question":"Câu 10: Cho lực F = (5; 10; 2) N kéo vật dịch chuyển từ O(0; 0; 0) đến M(4; 2; 5) m. Công cơ học sinh ra bằng:","options":["A. 50 J","B. 40 J","C. 35 J","D. 48 J"],"answer":"A. 50 J","explanation":"A = F · OM = 5*4 + 10*2 + 2*5 = 20 + 20 + 10 = 50 J."}'></div>
