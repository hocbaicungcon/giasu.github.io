---
title: So sánh 1 số với 2 nghiệm của phương trình bậc hai
description: Để so sánh 1 số với 2 nghiệm của phương trình bậc hai, chúng ta sử dụng
  định lý đảo về dấu tam thức bậc hai.
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Tam thức bậc hai
- So sánh nghiệm
grade: 10
---

Để so sánh một số với hai nghiệm của phương trình bậc hai, chúng ta sử dụng định lý đảo về [dấu tam thức bậc hai](/bai-viet/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai.html).

## 1. So sánh 1 số với 2 nghiệm của phương trình bậc hai

Cho tam thức bậc hai $f(x)=ax^2+bx+c$, với $a\ne 0$, có hai nghiệm phân biệt $x_1<x_2$ và một số $\alpha$. Khi đó, ta có các kết quả sau

### 1.1. Số α nằm trong khoảng hai nghiệm

- Số $\alpha$ nằm giữa hai nghiệm, tức là $x_1<\alpha<x_2$ điều kiện cần và đủ là

  $$
  a\cdot f(\alpha)<0
  $$

### 1.2. Số α nằm ngoài khoảng hai nghiệm

- Số $\alpha$ nằm về bên trái hai nghiệm $x_1,x_2$ (nói cách khác, số $\alpha$ bé hơn hai nghiệm), tức là $\alpha<x_1<x_2$ điều kiện cần và đủ là

  $$
  \begin{cases} \Delta >0\\ a\cdot f(\alpha)>0\\ \alpha<\frac{S}{2} \end{cases}
  $$

- Số $\alpha$ nằm về bên phải hai nghiệm $x_1,x_2$, (nói cách khác, số $\alpha$ lớn hơn hai nghiệm)tức là $x_1<x_2<\alpha$ điều kiện cần và đủ là

  $$
  \begin{cases} 
  \Delta >0\\ a\cdot f(\alpha)>0\\ \frac{S}{2}<\alpha \end{cases}
  $$

### 1.3. So sánh nghiệm của phương trình bậc hai với số 0

Đặc biệt, khi $\alpha=0$ chúng ta có các bài toán:

- Tìm điều kiện để phương trình có hai nghiệm trái dấu: Tức là $x_1<0<x_2$, khi đó $f(\alpha) = f(0) =c$ nên điều kiện cần và đủ là

  $$
  ac<0
  $$

- Tìm điều kiện để phương trình có hai nghiệm dương phân biệt khi và chỉ khi

  $$
  \begin{cases} \Delta >0\\ ac>0\\ -\frac{b}{a}>0\end{cases}
  $$

- Tìm điều kiện để phương trình có hai nghiệm âm phân biệt khi và chỉ khi

  $$
  \begin{cases} \Delta >0\\ ac>0\\ -\frac{b}{a}<0\end{cases}
  $$

Đôi khi, người ta còn đặt tổng 2 nghiệm là $x_1+x_2=S=-\frac{b}{a}$, tích hai nghiệm là $x_1 x_2=P=\frac{c}{a}$ thì các điều kiện trên trở thành:

- Phương trình bậc 2 có hai nghiệm trái dấu khi và chỉ khi $P<0$.

- Phương trình bậc 2 có hai nghiệm cùng dấu khi và chỉ khi

  $$
  \begin{cases} \Delta >0\\ P>0\end{cases}
  $$

- Phương trình bậc 2 có hai nghiệm dương phân biệt khi và chỉ khi

  $$
  \begin{cases} \Delta >0\\ P>0\\ S>0\end{cases}
  $$

- Phương trình bậc 2 có hai nghiệm âm phân biệt khi và chỉ khi

  $$
  \begin{cases} \Delta >0\\ P>0\\ S<0\end{cases}
  $$

## 2. So sánh nghiệm với hai số cho trước α < β

- Phương trình có hai nghiệm thỏa mãn ${{x}_{1}}<\alpha <\beta <{{x}_{2}}\Leftrightarrow \left\{ \begin{aligned} & af(\alpha )<0 \\ & af(\beta )<0 \\ \end{aligned} \right.$

- Phương trình có hai nghiệm thỏa mãn ${{x}_{1}}<\alpha <{{x}_{2}}<\beta \Leftrightarrow \left\{ \begin{aligned} & af(\alpha )<0 \\ & af(\beta )>0 \\ \end{aligned} \right.$

- Phương trình có hai nghiệm thỏa mãn $\alpha <{{x}_{1}}<\beta <{{x}_{2}}\Leftrightarrow \left\{ \begin{aligned} & af(\alpha )>0 \\ & af(\beta )<0 \\ \end{aligned} \right.$

- Phương trình có hai nghiệm phân biệt và chỉ có một nghiệm thuộc khoảng $(\alpha;\beta)$ khi và chỉ khi

  $$
  f(\alpha).f(\beta) < 0
  $$

- Phương trình có hai nghiệm phân biệt và $\alpha <{{x}_{1}}<{{x}_{2}}<\beta \Leftrightarrow \left\{ \begin{aligned} & \Delta >0 \\ & af(\alpha )>0 \\ & af(\beta )>0 \\ & \frac{S}{2}-\alpha >0 \\ & \frac{S}{2}-\beta <0 \\ \end{aligned} \right.$

## 3. Ví dụ về so sánh nghiệm phương trình bậc hai với một số

**Ví dụ 1.** Tìm $m$ để phương trình: ${{x}^{2}}-2mx+m+2=0$

- Có hai nghiệm trái dấu;

- Có hai nghiệm cùng lớn hơn $1$.

**Hướng dẫn.**

- Phương trình có hai nghiệm trái dấu khi và chỉ khi

  $$
  P=\frac{c}{a}=m+2<0\Leftrightarrow m<-2
  $$

  Vậy $m<-2$ là giá trị cần tìm.

- Phương trình có hai nghiệm ${{x}_{1}},{{x}_{2}}$ cùng lớn hơn 1 khi và chỉ khi

  $$
  \begin{cases} \Delta >0\\ a.f(1)>0\\ 
  {-b}{2a}>0 \end{cases}
  $$

  Giải hệ này ta tìm được đáp số $2\leqslant m<3$.

Cách khác, không sử dụng định lý đảo về dấu tam thức bậc hai, mà chúng ta sử dụng định lí Viète:

- Phương trình có hai nghiệm $x_1,x_2$ khi và chỉ khi

  $$
  \Delta’={{m}^{2}}-m-2\geqslant 0\Leftrightarrow m\in (-\infty,-1]\cup[2,+\infty)
  $$

- Khi đó, cả hai nghiệm của phương trình đều lớn hơn $1$, tức là $x_1-1>0$ và $x_2-1>0$. Do đó, chúng ta có

  $$
  \begin{aligned}
  \begin{cases} x_1-1>0\\ x_2-1>0 \end{cases} \Leftrightarrow \begin{cases} (x_1-1)(x_2-1)>0\\ (x_1-1)+(x_2-1)>0 
  \end{cases}
  \end{aligned}
  $$

- Nhân ra và sử dụng Viète, thay $x_1x_2=m+2$ và $x_1+x_2=2m$ chúng ta được hệ

  $$
  \begin{aligned}
  \begin{cases} m+2-2m+1>0\\2m-2>0 \end{cases} \Leftrightarrow 1<m<3
  \end{aligned}
  $$

  Kết hợp với điều kiện ta có $2\leqslant m<3$ là những giá trị cần tìm.

**Ví dụ 2.**  Cho phương trình ${x^2} + 2mx – 3{m^2} = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thoả mãn ${x1} < 1 < {x_2}.$

**Hướng dẫn.** Đặt $f\left( x \right) = {x^2} + 2mx – 3{m^2}$. Yêu cầu bài toán tương đương với

$$
af\left( 1 \right) < 0 \Leftrightarrow 1 \cdot f\left( 1 \right) < 0 \Leftrightarrow {1^2} + 2m – 3{m^2} < 0 \Leftrightarrow – 3{m^2} + 2m + 1 < 0 \Leftrightarrow \left[ \begin{array}{l} m > 1\\ m < – \frac{1}{3} \end{array} \right.
$$

.

**Ví dụ 3.** Cho phương trình ${x^2} + 2mx – 3{m^2} = 0$. Tìm m để phương trình có hai nghiệm $x_1, x_2$ và số $\alpha =1$ nằm ngoài khoảng hai nghiệm.

**Hướng dẫn.** Đặt $f\left( x \right) = {x^2} + 2mx – 3{m^2}$. Ta có $\Delta ‘ = {m^2} – \left( { – 3{m^2}} \right) = 4{m^2}$.

Yêu cầu bài toán tương đương

$$
\left\{ \begin{array}{l} \Delta ‘ > 0\\ af\left( \alpha \right) > 0 \end{array} \right. \Leftrightarrow \left\{ \begin{array}{l} 4{m^2} > 0\\ – 3{m^2} + 2m + 1 > 0 \end{array} \right. \Leftrightarrow \left\{ \begin{array}{l} m \ne 0\\ – \frac{1}{3} < m < 1 \end{array} \right.
$$

.

## 4. Bài tập so sánh nghiệm phương trình bậc hai

**Bài 1.** Tìm giá trị của $m$ để phương trình sau có nghiệm cùng dấu. Khi đó hai nghiệm mang dấu gì?

- $x^2-2mx+5m-4=0;$

- $mx^2+mx+3=0.$

**Bài 2.** Tìm $m$ để phương trình $(m+1)x^2+2(m+4)x+m+1=0$ có một nghiệm, hai nghiệm phân biệt cùng dấu, hai nghiệm âm phân biệt?

**Bài 3.** Tìm $m$ để phương trình $(m-4)x^2-2(m-2)x+m-1=0$ có hai nghiệm cùng dấu, hai nghiệm trái dấu và nghiệm âm có giá trị tuyệt đối lớn hơn, đúng một nghiệm dương, hai nghiệm đối nhau?

**Bài 4.** Tìm $m$ để phương trình $mx^2-2(m-3)x+m-4=0$ có đúng một nghiệm không dương.

**Bài 5.** Tìm $m$ để phương trình $(m+1)x^2-2x+m-1=0$ có ít nhất một nghiệm không âm.

**Bài 6.** So sánh số $1$ với nghiệm của phương trình $2x^2 – 18x + 17 = 0$ [TD10BD70]

**Bài 7.**So sánh số $- 2$ với nghiệm của phương trình $f(x) = (m^2 + 1)x^2 – 5(m^2 + 1)x – m^2 + m – 1 = 0$ [TD11BD70]

**Bài 8.**Tìm $m$ để các phương trình sau có hai nghiệm

- $mx^2 + (m – 1)x + 3 – 4m = 0$ và thoả mãn $x_1 < 2 < x_2$ [VD1TTM19]

- $(m + 1)x^2 – (m – 3)x + m + 1 = 0$ và thoả mãn $-1 < x_1 \leqslant x_2$

- $(m + 1)x^2 + mx + 3 = 0$ và thoả mãn $x_1 < – 2 < 1 < x_2$ [VD-TTM27]

- $x^2 – 2mx + m = 0$ và thoả mãn $x_1, x_2\in (-1;3)$

- $x^2 – 2x – 3m = 0$ và thoả mãn $\frac{m}{2}\le {{x}_{1}}<1<{{x}_{2}}$

**Bài 9.**Tìm $m$ để phương trình sau có nghiệm

- $(x^2 + 2x)2 – 4m(x^2 + 2x) + 3m + 1 = 0$ [VD1TTM23]

- $x^4 + mx^3 + 2mx^2 + mx + 1 = 0$ [VD!TTM31]

**Bài 10.**Tìm $m$ để phương trình $(m + 1)x^2 – 3mx + 4m = 0$ có duy nhất một nghiệm lớn hơn $1$.

**Bài 11.** Cho phương trình $x^2 – (2m – 3)x + m2 – 3m = 0$. Xác định $m$ để phương trình có hai nghiệm $x_1 ; x_2$ thoả mãn $1 < x_1 < x_2 < 6$.

**Bài 12.** Cho phương trình $2x^2 + (2m – 1)x + m – 1 = 0$. Xác định $m$ để phương trình có hai nghiệm phân biệt $x_1 ; x_2$ thoả mãn: $– 1 < x_1 < x_2 < 1.$

**Bài 13.**Cho $f(x) = x^2 – 2(m + 2)x + 6m + 1.$

- Chứng minh rằng phương trình $f(x) = 0$ có nghiệm với mọi $m$.

- Đặt $x = t + 2$. Tính $f(x)$ theo $t$, từ đó tìm điều kiện đối với $m$ để phương trình $f(x) = 0$ có hai nghiệm lớn hơn $2$.

**Bài 14.**Cho phương trình bậc hai: $x^2 + 2(a + 3)x + 4(a + 3) = 0$.

- Với giá trị nào của tham số $a$, phương trình có nghiệm kép. Tính các nghiệm kép.

- Xác định $a$ để phương trình có hai nghiệm phân biệt lớn hơn $– 1$.

**Bài 15.**Cho phương trình: $x^2 + 2(m – 1)x – (m + 1) = 0$.

- Tìm giá trị của $m$ để phương trình có một nghiệm nhỏ hơn $1$ và một nghiệm lớn hơn $1$.

- Tìm giá trị của $m$ để phương trình có hai nghiệm nhỏ hơn $2$.

**Bài 16.** Tìm $m$ để phương trình: $x^2 – mx + m = 0$ có nghiệm thoả mãn $x_1 \leqslant – 2 \leqslant x_2$

**Bài 17.**Cho biểu thức 

$$
A=\left(1-\frac{\sqrt{x}}{\sqrt{x}+1}\right):\left(\frac{\sqrt{x}+3}{\sqrt{x}-2}+\frac{\sqrt{x}+2}{3-\sqrt{x}}+\frac{\sqrt{x}+2}{x-5\sqrt{x}+6}\right).
$$

 Tìm $m$ để có $x$ thoả mãn $A(\sqrt{x}+1)=m(x+1)-2$.

**Bài 18.** Tìm $m$ để có $x<0$ sao cho 

$$
m=\frac{x(1-x^2)^2}{1+x^2}:\left[\left(\frac{1-x^3}{1-x}+x\right)\left(\frac{1+x^3}{1+x}-x\right)\right].
$$

**Bài 19.** Tìm $m$ để có $x<0$ sao cho 

$$
m=\sqrt{x}-\frac{\sqrt{4x}-9}{x-5\sqrt{x}+6}+\frac{2\sqrt{x}+1}{3-\sqrt{x}}+\frac{\sqrt{x}+3}{\sqrt{x}-2}.
$$
