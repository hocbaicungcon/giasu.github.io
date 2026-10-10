---
title: Các bất đẳng thức thường sử dụng
description: 'Các bất đẳng thức thường sử dụng: Bất đẳng thức AM-GM, AM-GM suy rộng,
  AM-HM, Bất đẳng thức Bernoulli, Bất đẳng thức Cauchy-Schwarz, Bất đẳng thức Hölder,
  Chebyshev, Bất đẳng thức hoán vị, Maclaurin, Newton, BDT Karamata, Popoviciu, Bất
  đẳng thức ...'
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 10
- Bất đẳng thức
- Bất đẳng thức Cauchy
- Bunhiacopxki
grade: 10
---

## 1. Các bất đẳng thức thường sử dụng

### Bất đẳng thức AM-GM

Với $a_1,a_2,\ldots,a_n$ là các số thực không âm, khi đó 

$$
a_1+a_2+\cdots +a_{n}\ge n\sqrt[n]{a_1a_2\ldots a_n}.
$$

 Dấu bằng xảy ra khi và chỉ khi $a_1=a_2=\cdots =a_n.$

![các bất đẳng thức thường sử dụng](assets/images/cac-bat-dang-thuc-thuong-su-dung-440px-AM_GM_inequality_visual_proof.png)

Chứng minh bất đẳng thức AM-GM cho hai số không âm bằng hình học

### Bất đẳng thức AM-GM suy rộng

Cho $p_1,p_2\ldots p_n$ là các số thực dương thỏa 

$$
p_1+p_2+\cdots +p_n=1.
$$

 Với $a_1,a_2\ldots a_n$ là các số thực không âm thì ta có 

$$
p_1a_1+p_2a_2+\cdots +p_na_n\ge a_1^{p_1}a_2^{p_2}\ldots a_n^{p_n}.
$$

 Dấu bằng xảy ra khi và chỉ khi $a_1=a_2=\cdots =a_n.$

### Bất đẳng thức AM-HM

Với $a_1,a_2,\ldots,a_n$ là các số thực không âm, khi đó 

$$
\left(a_1+a_2+\cdots +a_n \right)\left(\dfrac{1}{a_1}+\dfrac{1}{a_2}\cdots +\dfrac{1}{a_n} \right)\ge n^2
$$

 Dấu bằng xảy ra khi và chỉ khi $a_1=a_2=\cdots =a_n.$

### Bất đẳng thức Bernoulli

Với số thực $x\ge -1$, ta có:

- $(1+x)^r\ge 1+rx$ khi $r\ge 1$ hoặc $r\le 0$

- $(1+x)^r\le 1+rx$ khi $0\le r\le 1$

### Bất đẳng thức Cauchy-Schwarz

Cho các số thực $a_1,a_2,\ldots ,a_n$ và $b_1,b_2,\ldots ,b_n$, ta có 

$$
\left(a_1^2+a_2^2+\cdots +a_n^2\right)\left(b_1^2+b_2^2+\cdots +b_n^2\right)\ge \left(a_1b_1+a_2b_2+\cdots +a_nb_n\right)^2.
$$

 Dấu bằng xảy ra khi và chỉ khi $\dfrac{a_1}{b_1}=\dfrac{a_2}{b_2}=\cdots =\dfrac{a_n}{b_n}.$

### Bất đẳng thức Hölder

Cho $x_{ij}$ là các số thực không âm (với $i=\overline{1;m}, \ \ j=\overline{1;n}$ ), khi đó ta có 

$$
\prod_{i=1}^{m}\left(\sum_{j=1}^n x_{ij}\right)\ge \left(\sum_{j=1}^{n}\sqrt[m]{\prod_{i=1}^{m}x_{ij}} \right)^m.
$$

### Bất đẳng thức Chebyshev

Cho $a_1\ge a_2\ge\cdots\ge a_n$ là các số thực.

1. Nếu $b_1\ge b_2\ge\cdots\ge b_n$ thì

   $$
   n\sum_{i=1}^na_ib_i\ge\left(\sum_{i=1}^n a_i\right)\left(\sum_{i=1}^n b_i\right).
   $$

2. Nếu $b_1\le b_2\le\cdots\le b_n$ thì

   $$
   n\sum_{i=1}^na_ib_i\le\left(\sum_{i=1}^n a_i\right)\left(\sum_{i=1}^n b_i\right).
   $$

### Bất đẳng thức hoán vị

Cho $a_1\ge a_2\ge\ldots\ge a_n$ là hai dãy số thực và $(z_1,z_2,\ldots ,z_n)$ là hoán vị nào đó của $(x_1,x_2,\ldots ,x_n).$ Khi đó ta có:

1. Nếu $b_1\ge b_2\ge\cdots\ge b_n$ thì

   $$
   a_1b_1+a_2b_2+\cdots a_nb_n\ge z_1b_2+z_2b_2+\cdots +z_nb_n.
   $$

2. Nếu $b_1\le b_2\le\cdots\le b_n$ thì

   $$
   a_1b_1+a_2b_2+\cdots a_nb_n\le z_1b_2+z_2b_2+\cdots +z_nb_n.
   $$

### Bất đẳng thức Maclaurin và bất đẳng thức Newton

Với $a_1,a_2,\ldots,a_n$ là các số thực không âm, khi đó:

1. (Maclaurin) $S_1\ge S_2\ge \cdots\ge S_n$

2. (Newton) $S_k^2\ge S_{k-1}S_{k+1}$

với 

$$
S_{k}=\sqrt[k]{\dfrac{\displaystyle\sum_{1\le i_1< i_2<\cdots <i_n}^n a_{i_1}a_{i_2}\ldots a_{i_n} }{ C_{n}^k}}.
$$

### Bất đẳng thức Karamata

Cho hai bộ số $(x_1,x_2\ldots ,x_n)$ và $(y_1,y_2\ldots ,y_n)$ với $(x_1,x_2\ldots ,x_n)\succ\succ(y_1,y_2\ldots ,y_n)$ sao cho $x_i,y_i\in \mathbb{I}\subseteq \mathbb{R}.$ Nếu hàm số $f$ xác định lồi trên khoảng $\mathbb{I}\subseteq \mathbb{R}$ thì

$$
f(x_1)+f(x_2)+\cdots +f(x_n)\ge f(y_1)+f(y_2)+\cdots +f(y_n).
$$

**Ghi chú:
$$
(x_1,x_2\ldots ,x_n)\succ\succ(y_1,y_2\ldots ,y_n)\Leftrightarrow\begin{cases}x_1\ge y_1\\ x_2+x_2\ge y_1+y_2\\ \cdots \cdots \cdots\cdots \cdots \cdots\cdots \cdots\\ x_1+x_2+\cdots +x_{n-1}\ge y_1+y_2+\cdots +y_{n-1}\\ x_1+x_2+\cdots +x_{n}= y_1+y_2+\cdots +y_{n}\end{cases}
$$

### Bất đẳng thức Popoviciu

Cho hàm số $f$ xác định lồi trên khoảng $\mathbb{I}\subseteq \mathbb{R}.$ Khi đó với $a_1,a_2,\ldots ,a_n\in\mathbb{I}$ thì

$$
f(a_1)+f(a_2)+\cdots +f(a_n)+n(n-2)f\left(\dfrac{a_1+a_2+\cdots +a_n}{n}\right)\ge (n-1)\left[f(b_1)+f(b_2)+\cdots +f(b_2)\right],
$$

 với 

$$
b_i=\dfrac{1}{n-1}\sum_{j\neq i}a_j \ \ ,\ \ i=\overline{1;n}.
$$

### Bất đẳng thức Schur

- Cho các số thực không âm $a,b,c$ và số thực dương k, khi đó ta có

  $$
  a^k(a-b)(a-c)+b^k(b-c)(b-a)+c^k(c-a)(c-b)\ge 0,
  $$

  Đẳng thức xảy ra khi $a=b=c$ hoặc $a=0$ và $b=c$ hoặc một vài hoán vị.

- Với $k=1$ chúng ta thu được một vài phát biểu quen thuộc sau:

  $$
  a^3+b^3+c^3+3abc\ge ab(a+b)+bc(b+c)+ca(c+a)
  $$

  $$
  (a+b+c)^3+9abc\ge 4(a+b+c)(ab+bc+ca)
  $$

  $$
  a^2+b^2+c^2+\dfrac{9abc}{a+b+c}\ge 2(ab+bc+ca)
  $$

  $$
  \sum_{cyc}\dfrac{a}{b+c} +\dfrac{4abc}{(a+b)(b+c)(c+a)}\ge 2.
  $$

### Bất đẳng thức Vornicu-Schur

Cho các số thực không âm $a,b,c,x,y,z$ sao cho $(a,b,c)$ và $(x,y,z)$ đều là các bộ đơn điệu. Khi đó ta có 

$$
x(a-b)(a-c)+y(b-a)(b-c)+z(c-a)(c-b)\ge 0
$$

### Bất đẳng thức Vasc

Với mọi số thực $a,b,c$, ta có 

$$
(a^2+b^2+c^2)^2\ge 3(a^3b+b^3c+c^3a).
$$

 Đẳng thức xảy ra khi $a=b=c$ hoặc $\dfrac{a}{sin^2\dfrac{4\pi}{7}}=\dfrac{b}{sin^2\dfrac{2\pi}{7}}=\dfrac{c}{sin^2\dfrac{\pi}{7}}$, (hoặc một vài hoán vị).

### Bất đẳng thức Vasc

Cho $f_{n}(a,b,c)$ là một đa thức đối xứng bậc $n=3$, $n=4$, $n=5.$

1. Với $a,b,c$ các số thực thì $f_{4}(a,b,c)\ge 0$ khi và chỉ khi $f_{4}(a,1,1)\ge 0$

2. Với $a,b,c$ các số thực không âm thì $f_{n}(a,b,c)\ge 0$ khi và chỉ khi $f_{n}(a,1,1)\ge 0$ và $f_{n}(0,b,c)\ge 0.$

### Bất đẳng thức $(a-b)^2(b-c)^2(c-a)^2\ge 0$

Với các số thực $a,b,c$, ta có 

$$
27(a-b)^2(b-c)^2(c-a)^2= 4(p^2-3q)^3-(2p^3-9pq+27r)^2\ge 0,
$$

 từ đây ta có

$$
\dfrac{-2p^3+9pq-2(p^2-3q)\sqrt{p^2-3q}}{27} \le r\le \dfrac{-2p^3+9pq+2(p^2-3q)\sqrt{p^2-3q}}{27}
$$

## 2. Một số tiêu chuẩn khi chứng minh bất đẳng thức

### SOS

Cho các số thực không âm thỏa $a\ge b\ge c$ và cần chứng minh 

$$
f(a,b,c)=(a-b)^2S_c+(b-c)^2S_a+(c-a)^2S_b\ge 0.
$$

Sau đấy chúng ta sẽ tạo ra một vài tiêu chuẩn thường sử dụng:

1. **Tiêu chuẩn 1.** Nếu $S_a,S_b,S_c\ge 0$ thì $f(a,b,c)\ge 0$ là hiển nhiên.

2. **Tiêu chuẩn 2.** Nếu $S_b\ge 0$ và $S_b+S_c\ge 0$ và $S_a+S_b\ge 0$ thì $f(a,b,c)\ge 0.$

   Thật vậy

   $$
   (a-c)^2=(a-b)^2+(b-c)^2+2(a-b)(b-c)\ge (a-b)^2+(b-c)^2,
   $$

   do đó ta có

   $$
   f(a,b,c)\ge (a-b)^2(S_b+S_c)+(b-c)^2(S_a+S_b)\ge 0,
   $$

   do đó để bất đẳng thức đúng ta cần chứng minh $S_b+S_c\ge 0$ và $S_a+S_b\ge 0.$

3. **Tiêu chuẩn 3.** Nếu $S_b\le 0$ và $S_a+2S_b\ge 0$ và $S_c+2S_b\ge 0$ thì $f(a,b,c)\ge 0.$

   Thật vậy

   $$
   (a-c)^2=(a-b)^2+(b-c)^2+2(a-b)(b-c)\le 2\left[(a-b)^2+(b-c)^2 \right]
   $$

   do đó ta có

   $$
   f(a,b,c)\ge (a-b)^2(S_c+2S_b)+(b-c)^2(S_a+2S_b),
   $$

   vậy nên để bất đẳng thức đúng ta cần chứng minh $S_c+2S_b\ge 0$ và $S_a+2S_b\ge 0.$

4. **Tiêu chuẩn 4.** Nếu $S_b,S_c\ge 0$ và $b^2S_a+a^2S_b\ge 0$ thì $f(a,b,c)\ge 0.$

   Thật vậy theo bất đẳng thức tỉ lệ thì

   $$
   \dfrac{a-c}{b-c}\ge \dfrac{a}{b},
   $$

   do đó ta có

   $$
   f(a,b,c)\ge (b-c)^2S_a+\dfrac{(b-c)^2a^2}{b^2}S_b,
   $$

   vậy nên để bất đẳng thức đúng ta cần chứng minh $b^2S_a+a^2S_b\ge 0.$

5. **Tiêu chuẩn 5.** Nếu $S_b,S_c\ge 0$ và $b(b-c)S_a+a(a-c)S_b\ge 0$ thì $f(a,b,c)\ge 0.$

   Thật vậy theo bất đẳng thức tỉ lệ thì

   $$
   \dfrac{a-c}{b-c}\ge \dfrac{a}{b},
   $$

   do đó ta có

   $$
   f(a,b,c)\ge (b-c)^2S_a+\dfrac{(b-c)^2a(a-c)}{b(b-c)}S_b,
   $$

   vậy nên để bất đẳng thức đúng ta cần chứng minh $b(b-c)S_a+a(a-c)S_b\ge 0.$

### Tiêu chuẩn Vornicu-Schur

$$
\begin{aligned}
x(a-b)(a-c)&+y(b-c)(b-a)+z(c-a)(c-b)=\left[a\sqrt{x}-(\sqrt{x}+\sqrt{z})b+c\sqrt{z} \right]^2+\\ &+(\sqrt{x}-\sqrt{y}+\sqrt{z})^2(a-b)(b-c)+2\sqrt{y}(a-b)(b-c)(\sqrt{x}-\sqrt{y}+\sqrt{z})
\end{aligned}
$$
