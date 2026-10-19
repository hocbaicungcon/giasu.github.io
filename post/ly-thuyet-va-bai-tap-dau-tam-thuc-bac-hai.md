---
title: Lý thuyết và bài tập dấu tam thức bậc hai
description: 'Toàn bộ lý thuyết và bài tập dấu tam thức bậc hai Toán 10: định lý trong trái ngoài cùng, bảng xét dấu, điều kiện luôn dương luôn âm có ví dụ giải chi tiết.'
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 10
- Tam thức bậc hai
- Bất phương trình
grade: 10
---

Sử dụng kiến thức về **dấu tam thức bậc hai**, chúng ta có thể giải quyết được các dạng toán trọng tâm của Đại số 10:
- [Tìm điều kiện để tam thức bậc hai luôn dương, luôn âm](/bai-viet/tim-dieu-kien-de-tam-thuc-bac-hai-luon-duong.html)
- [Cách giải phương trình chứa căn, bất phương trình chứa căn](/bai-viet/phuong-trinh-chua-can-bat-phuong-trinh-chua-can.html)

## 1. Tam thức bậc hai là gì?

Tam thức bậc hai đối với biến $x$ là biểu thức có dạng:
$$
f(x) = ax^2 + bx + c, \quad (a \ne 0)
$$
trong đó $a, b, c$ là các hệ số thực, $a$ là hệ số của bậc cao nhất.

## 2. Định lý về dấu của tam thức bậc hai

### 2.1. Định lý dấu tam thức bậc hai

Cho tam thức bậc hai $f(x) = ax^2 + bx + c$ với $a \ne 0,$ biệt thức $\Delta = b^2 - 4ac$ (hoặc $\Delta' = b'^2 - ac$). Khi đó:

- **Nếu $\Delta < 0$:** $f(x)$ cùng dấu với hệ số $a$ với mọi $x \in \mathbb{R}$ ($a \cdot f(x) > 0, \forall x$).
- **Nếu $\Delta = 0$:** $f(x)$ cùng dấu với hệ số $a$ với mọi $x \ne -\dfrac{b}{2a}.$ Tại $x = -\dfrac{b}{2a}$ thì $f(x) = 0.$
- **Nếu $\Delta > 0$:** $f(x)$ có hai nghiệm phân biệt $x_1 < x_2.$ Dấu của $f(x)$ tuân theo quy tắc vàng: **"Trong trái – Ngoài cùng"** (trong khoảng hai nghiệm trái dấu với $a,$ ngoài khoảng hai nghiệm cùng dấu với $a$).

### Bảng tổng hợp dấu của tam thức bậc hai

| Biệt thức $\Delta$ | Nghiệm của $f(x) = 0$ | $a > 0$ | $a < 0$ | Quy tắc xét dấu |
| :---: | :---: | :---: | :---: | :--- |
| $\Delta < 0$ | Vô nghiệm | $f(x) > 0, \forall x \in \mathbb{R}$ | $f(x) < 0, \forall x \in \mathbb{R}$ | Luôn cùng dấu với hệ số $a$ trên toàn $\mathbb{R}$ |
| $\Delta = 0$ | Nghiệm kép $x_0 = -\dfrac{b}{2a}$ | $f(x) > 0, \forall x \ne x_0$ | $f(x) < 0, \forall x \ne x_0$ | Cùng dấu với $a$ với mọi $x \ne x_0$ |
| $\Delta > 0$ | 2 nghiệm $x_1 < x_2$ | $(x_1; x_2): f(x) < 0$<br>$(-\infty; x_1) \cup (x_2; +\infty): f(x) > 0$ | $(x_1; x_2): f(x) > 0$<br>$(-\infty; x_1) \cup (x_2; +\infty): f(x) < 0$ | **Trong trái - Ngoài cùng** so với hệ số $a$ |

![bảng xét dấu tam thức bậc hai](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bang-xet-dau-tam-thuc-bac-hai.jpg)

### 2.2. Minh họa hình học của định lý dấu tam thức bậc hai

Định lý về dấu của tam thức bậc hai có minh họa hình học thông qua vị trí tương đối giữa parabol $y = ax^2 + bx + c$ và trục hoành $Ox$:

![định lí về dấu tam thức bậc hai](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-dinh-ly-dau-tam-thuc-bac-hai.png)

### 2.3. Ứng dụng: Điều kiện để tam thức không đổi dấu trên $\mathbb{R}$

- $f(x) > 0, \forall x \in \mathbb{R} \iff \begin{cases} a > 0 \\ \Delta < 0 \end{cases}$
- $f(x) < 0, \forall x \in \mathbb{R} \iff \begin{cases} a < 0 \\ \Delta < 0 \end{cases}$
- $f(x) \geqslant 0, \forall x \in \mathbb{R} \iff \begin{cases} a > 0 \\ \Delta \leqslant 0 \end{cases}$
- $f(x) \leqslant 0, \forall x \in \mathbb{R} \iff \begin{cases} a < 0 \\ \Delta \leqslant 0 \end{cases}$

Xem chi tiết: [Tìm điều kiện để tam thức bậc hai luôn dương, luôn âm](/bai-viet/tim-dieu-kien-de-tam-thuc-bac-hai-luon-duong.html)

### 2.4. Định lý đảo dấu tam thức bậc hai (So sánh nghiệm với số $\alpha$)

Cho tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \ne 0$) có hai nghiệm phân biệt $x_1 < x_2$ và một số thực $\alpha$:
- $x_1 < \alpha < x_2 \iff a \cdot f(\alpha) < 0$
- $\alpha < x_1 < x_2 \iff \begin{cases} \Delta > 0 \\ a \cdot f(\alpha) > 0 \\ \dfrac{S}{2} > \alpha \end{cases}$
- $x_1 < x_2 < \alpha \iff \begin{cases} \Delta > 0 \\ a \cdot f(\alpha) > 0 \\ \dfrac{S}{2} < \alpha \end{cases}$

---

## 3. Bài tập về dấu tam thức bậc hai có hướng dẫn giải

**Bài 1.** Xét dấu các tam thức sau:
1. $f(x) = x^2 - 5x + 6$
2. $g(x) = -x^2 + 4x + 5$
3. $h(x) = 6x^2 + x + 4$

**Hướng dẫn giải.**
1. Tam thức $f(x) = x^2 - 5x + 6$ có hệ số $a = 1 > 0$ và có hai nghiệm $x_1 = 2, x_2 = 3.$ Áp dụng quy tắc "trong trái ngoài cùng":
   - $f(x) < 0$ với mọi $x \in (2; 3)$
   - $f(x) > 0$ với mọi $x \in (-\infty; 2) \cup (3; +\infty)$
   - $f(x) = 0 \iff x \in \{2; 3\}$

   ![bảng xét dấu của tam thức bậc hai f(x)](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bang-xet-dau-fx.jpg)

2. Tam thức $g(x) = -x^2 + 4x + 5$ có hệ số $a = -1 < 0$ và có hai nghiệm $x_1 = -1, x_2 = 5:$

   ![bảng xét dấu của g(x)](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bang-xet-dau-gx.jpg)

3. Tam thức $h(x) = 6x^2 + x + 4$ có hệ số $a = 6 > 0$ và $\Delta = 1^2 - 4(6)(4) = -95 < 0.$ Do đó $h(x) > 0$ với mọi $x \in \mathbb{R}.$

   ![bảng xét dấu của hx](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bang-xet-dau-hx.jpg)

**Bài 2.** Giải các bất phương trình sau:
1. $x^2 - 2x + 3 > 0$
2. $x^2 + 9 > 6x$
3. $6x^2 - x - 2 \geqslant 0$
4. $\frac{1}{3}x^2 + 3x + 6 < 0$
5. $\dfrac{x^2 + 1}{x^2 + 3x - 10} < 0$
6. $\dfrac{10 - x}{5 + x^2} > \dfrac{1}{2}$
7. $\dfrac{x + 1}{x - 1} + 2 > \dfrac{x - 1}{x}$
8. $\dfrac{1}{x + 1} + \dfrac{2}{x + 3} < \dfrac{3}{x + 2}$

**Hướng dẫn giải.**

1. $x^2 - 2x + 3 > 0:$ Có $\Delta' = 1 - 3 = -2 < 0$ và $a = 1 > 0,$ do đó $x^2 - 2x + 3 > 0$ với mọi $x \in \mathbb{R}.$ Vậy tập nghiệm $S = \mathbb{R}.$

   ![bảng xét dấu bất phương trình bậc hai](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-bac-hai.jpg)

2. $x^2 + 9 > 6x \iff x^2 - 6x + 9 > 0 \iff (x - 3)^2 > 0 \iff x \ne 3.$ Tập nghiệm $S = \mathbb{R} \setminus \{3\}.$

   ![bat phuong trinh bac hai 2](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-bac-hai-2.jpg)

3. $6x^2-x-2 \geqslant 0.$ Lập bảng xét dấu cho vế trái, ta được:

   ![bat phuong trinh đa thuc](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-3.jpg)

   Suy ra, tập nghiệm của bất phương trình đã cho là $S=\left(-\infty;-\frac{1}{2}\right]\cup \left[\frac{2}{3};+\infty\right).$

4. $\frac{1}{3}x^2+3x+6<0.$ Bảng xét dấu của vế trái:

   ![bất phương trình hữu tỉ](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-4.jpg)

   Kết luận, tập nghiệm của bất phương trình là $S=(-6;-3).$

5. $\dfrac{x^2+1}{x^2+3x-10}<0.$ Lập bảng xét dấu cho vế trái, chúng ta có bảng sau:

   ![bất phương trình phân thức hữu tỉ](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-5.jpg)

   Kết luận, tập nghiệm của bất phương trình là $S=(-5;2).$

6. $\dfrac{10-x}{5+x^2}>\dfrac{1}{2}.$ Chuyển vế, quy đồng giữ lại mẫu của bất phương trình đã cho, ta được bất phương trình tương đương

   $$
   \frac{-x^{2}-2x+15}{2\left( x^{2}+5\right) }>0
   $$

   Lập bảng xét dấu cho vế trái bất phương trình này, ta được bảng sau:

   ![bất phương trình thương](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-6.jpg)

   Kết luận, tập nghiệm của bất phương trình là $S=(-5;3).$

7. $\dfrac{x+1}{x-1}+2>\dfrac{x-1}{x}.$ Chuyển vế, quy đồng giữ mẫu của bất phương trình này, ta được bất phương trình tương đương:

   $$
   \frac{2x^{2}+x-1}{x^{2}-x}>0
   $$

   Lập bảng xét dấu cho vế trái, ta được:

   ![bất phương trình hữu tỉ](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-7.jpg)

   Kết luận, tập nghiệm của bất phương trình đã cho là $S= \left( -\infty ,-1\right) \cup \left( 0,\frac{1}{2}\right) \cup \left( 1,+\infty \right).$

8. $\dfrac{1}{x+1}+\dfrac{2}{x+3}<\dfrac{3}{x+2}.$ Chuyển vế, quy đồng ta được bất phương trình tương đương:

   $$
   \frac{-x+1}{\left( x+3\right) \left( x+2\right) \left( x+1\right) }<0
   $$

   Lập bảng xét dấu cho vế trái, ta được:

   ![bất phương trình chứa ẩn ở mẫu sử dụng tam thức bậc hai](assets/images/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai-bat-phuong-trinh-8.jpg)

   Căn cứ vào bảng xét dấu, chúng ta có tập nghiệm của bất phương trình đã cho là $S=\left( -\infty ,-3\right) \cup \left( -2,-1\right) \cup \left( 1,+\infty \right).$

**Bài 3.** Tìm các giá trị của tham số $m$ để các phương trình sau có 2 nghiệm dương phân biệt

1. $(m^2+m+1)x^2+(2m-3)x+m-5=0$

2. $x^2-6mx+2-2m+9m^2=0$

**Bài 4.** Tìm $m$ để các bất phương trình sau vô nghiệm.

1. $5x^2-x+m\leqslant 0$

2. $mx^2-10x-5\geqslant 0$

3. $(m-1)x^{2}-(2m+1)x>m-3$

4. $x^{2}-2mx+m+12<0$

5. $-2x^{2}-mx+m^{2}-1>0$

6. $x^{2}+3mx-9<0$

7. $2mx^{2}+x-3\geqslant 0$

8. $x^{2}+3x-9m\leqslant 0$

**Bài 5.** Tìm $m$ để các bất phương trình sau có nghiệm duy nhất.

1. $x^{2}-2mx+m+12\leqslant 0$

2. $-2x^{2}-mx+m^{2}-1\geqslant 0$

3. $x^{2}+3mx-9\leqslant 0$

4. $x^{2}+3x-9m\leqslant 0$

5. $(m-1)x^{2}-(2m+1)x\geqslant -m-3$

6. $2mx^{2}+x-3\geqslant 0$

**Bài 6.** Tìm $m$ để các bất phương trình sau có tập nghiệm là $\mathbb{R}.$

1. $5x^2-x+m>0$

2. $mx^2-10x-5<0$

3. $\dfrac{x^2-mx-2}{x^2-3x+4}>-1$

4. $m(m+2)x^2+2mx+2>0$

5. $x^{2}-2mx+m+12>0$

6. $-2x^{2}-mx+m^{2}-1<0$

7. $x^{2}+3mx-9\geqslant 0$

8. $2mx^{2}+x-3\geqslant 0$

9. $x^{2}+3x-9m>0$

10. $(m-1)x^{2}>(2m+1)x-m-3$

**Bài 7.** Tìm $m$ để hàm số sau xác định với mọi $x\in\mathbb{R}.$

1. $y=\sqrt{x^{2}+3x-m^{2}+2}$

2. $y=\sqrt{m(m+2)x^{2}+2mx+2}$

3. $y=\dfrac{1}{\sqrt{mx^{2}+6mx-7}}$

**Bài 8.** Giải các bất phương trình sau:

1. $\dfrac{x^{2}-9x+14}{2-3x}\geqslant 0$

2. $\dfrac{(2x-5)(x+2)}{-4x+3}>0$

3. $\dfrac{x-3}{x+1}>\dfrac{x+5}{2-x}$

4. $\dfrac{x-3}{x+5}<\dfrac{1-2x}{x-3}$

5. $\dfrac{2x-1}{2x+1}\leqslant 1$

6. $\dfrac{3x-4}{x-2}>1$

7. $\dfrac{2x-5}{2-x}\geqslant -1$

8. $\dfrac{2}{x-1}\leqslant \dfrac{5}{2x-1}$

9. $\dfrac{1}{x}+\dfrac{1}{x+1}<\dfrac{2}{x^{2}+x}$

10. $\dfrac{x^{2}}{x^{2}+1}+\dfrac{2}{x}<1$

11. $\dfrac{11x^{2}-5x+6}{x^{2}+5x+6}<x$

12. $\dfrac{1}{x+1}-\dfrac{2}{x^{2}-x+1}\leqslant \dfrac{1-2x}{x^{3}+1}$

13. $\dfrac{2-x}{x^{3}+x}>\dfrac{1-2x}{x^{3}-3x}$

14. $1<\dfrac{1+x}{1-x}\le2$

15. $-1\leqslant \dfrac{x^{2}-5x+4}{x^{2}-4}\leqslant 1$

Xem thêm: [Phương trình chứa trị tuyệt đối](/bai-viet/phuong-trinh-chua-tri-tuyet-doi.html)

**Bài 9.** Giải các phương trình sau.

1. $|2x+1|-3=x$

2. $|1-3x|+x-7=0$

3. $|2x-13|+3x-1=0$

4. $|x^{2}-x+2|=2-x$

5. $|1-x-2x^{2}|+3x=5$

6. $|2x^{2}-4x+1|+x-2=1$

7. $|2x-1|+|1-x|+x=4$

8. $|2x-1|+|2x+1|=4$

9. $|x^{2}-3x+2|-2x=1$

10. $|x^{2}+x-12|=x^{2}-x-2$

11. $|x^{2}-2x|=2x^{2}-1$

12. $|2x^{2}+3x-2|=|x^{2}-x-3|$

**Bài 10.** Giải các phương trình, bất phương trình sau:

1. $(x^{2}+4x+10)^{2}-7(x^{2}+4x+11)+7<0$

2. $x^{4}+4x^{2}+2|x^{2}-2x|=4x^{3}+3$

3. $2|x+1|-|x^{2}-2x-8|=-5-x+x^{2}$

4. $|x+3|<x-6$

5. $|2x-1|+5x-7\geqslant 0$

6. $|x^{2}-3x+2|-3x-7\geqslant 0$

7. $|2x-4|+|3x-6|\geqslant 2$

8. $|x-1|\leqslant 2|-x-4|+x-2$

9. $|x+2|+|1-2x|\leqslant x+1$
