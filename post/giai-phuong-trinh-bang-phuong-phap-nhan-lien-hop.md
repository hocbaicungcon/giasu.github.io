---
title: Giải phương trình bằng phương pháp nhân liên hợp
description: Nhân liên hợp để giải phương trình, bất phương trình chứa căn khi nhận
  thấy ngay được một nghiệm đẹp của phương trình, bất phương trình đã cho.
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 10
- Phương trình vô tỉ
- Nhân liên hợp
grade: 10
---

**Nhân liên hợp** để giải phương trình, bất phương trình chứa căn là một trong những phương pháp hiệu quả để giải phương trình, khi mà chúng ta nhận thấy ngay được một nghiệm *đẹp* của phương trình, bất phương trình đã cho.

Mời Quý Thầy cô và các em tham khảo [1000 bài bất đẳng thức trong đề thi tuyển sinh vào lớp 10](/bai-viet/bat-dang-thuc-trong-de-thi-tuyen-sinh-vao-lop-10.html)

## 1. Các bước giải phương trình, bất phương trình bằng nhân liên hợp

Ý tưởng của phương pháp nhân liên hợp là khi một phương trình, bất phương trình chứa căn thức mà có nghiệm đẹp thì thường ta sẽ tìm cách phân tích thành nhân tử. Nhưng đối với một đa thức thì việc phân tích đa thức thành nhân tử sẽ dễ dàng hơn so với các biểu thức chứa căn, do đó chúng ta sẽ tìm cách khử căn thức bằng cách nhân chia với biểu thức liên hợp.

Nhắc lại, biểu thức liên hợp của $\sqrt{A}\pm\sqrt{B}$ là $\sqrt{A}\mp\sqrt{B}$, tức là biến đổi:

$$
\sqrt{A}\pm \sqrt{B}=\frac{A-B}{\sqrt{A}\pm\sqrt{B}}
$$

 Biểu thức liên hợp của $\sqrt[3]{A}\pm\sqrt[3]{B}$ là $(\sqrt[3]{A})^2\pm\sqrt[3]{A}\sqrt[3]{B}+(\sqrt[3]{B})^2$ 

$$
\sqrt[3]{A}\pm\sqrt[3]{B}=\frac{A\pm B}{(\sqrt[3]{A})^2\pm\sqrt[3]{A}\sqrt[3]{B}+(\sqrt[3]{B})^2}
$$

- **Bước 1.** Nhẩm nghiệm hoặc [dùng máy tính](/bai-viet/huong-dan-su-dung-may-tinh-casio-giai-toan-trac-nghiem.html) để tìm nghiệm của phương trình, giả sử nghiệm của pt là $x_0.$

- **Bước 2.** Phân tích (tách hoặc thêm bớt các hạng tử thích hợp), sau đó nhân chia với biểu thức liên hợp sao cho sau khi nhân chia liên hợp ta được có biểu thức có chứa nhân tử $x – x_0.$

Xem thêm:

- [Cách giải phương trình chứa căn, bất phương trình chứa căn](/bai-viet/phuong-trinh-chua-can-bat-phuong-trinh-chua-can.html)

- [Phương pháp biến đổi tương đương giải phương trình, bất phương trình chứa căn](/bai-viet/phuong-phap-bien-doi-tuong-duong-giai-phuong-trinh-chua-can.html)

- [Giải phương trình chứa căn bằng cách phân tích thành tích](/bai-viet/phuong-trinh-chua-can-phan-tich-thanh-tich.html)

## 2. Ví dụ giải phương trình nhân liên hợp

**Ví dụ 1.** Giải phương trình 

$$
x^3 + 11 = 3\sqrt {x + 3}
$$

 **Hướng dẫn.** Chúng ta đoán (hoặc dùng lệnh SOLVE của máy tính CASIO) và nhận thấy phương trình có nghiệm $x=2.$ Tức là, chắc chắn phương trình sẽ có nhân tử là $(x-2)$, nhưng chúng ta khó phân tích biểu thức chứa căn thành nhân tử, nên sẽ tìm cách chuyển về đa thức rồi phân tích. Cụ thể, chúng ta tách $11=8+3$ rồi biến đổi như sau

$$
\begin{aligned}
& x^3+8-3\sqrt{x+3}+3=0 \\ 
\Leftrightarrow &(x+2)(x^2+2x+4)-\frac{3(x+2)}{\sqrt{x+3}+1}=0\\ 
\Leftrightarrow &(x+2)\left(x^2+2x+4-\frac{3}{\sqrt{x+3}+1}\right)=0\\ 
\Leftrightarrow &\left[\begin{array}{l} 
x+2=0\\x^2+2x+4-\frac{3}{\sqrt{x+3}+1}=0 \qquad (*) 
\end{array}\right.
\end{aligned}
$$

 Ta có 

$$
\begin{array}{l} 
{x^2} + 2x + 4 \ge 3\\ 
– \dfrac{3}{{\sqrt {x + 3} + 1}} \ge – 3\\ 
\Rightarrow {x^2} + 2x + 4 – \dfrac{3}{{\sqrt {x + 3} + 1}} \ge 0. 
\end{array}
$$

 Bất phương trình cuối không xảy ra dấu đẳng thức nên phương trình (*) vô nghiệm.

Vậy phương trình đã cho có nghiệm duy nhất $x=2.$

Nếu bài viết hữu ích, bạn có thể  tặng tôi 1 cốc cafe vào số tài khoản Agribank 3205215033513.  Xin cảm ơn!

**Ví dụ 2.** Giải phương trình 

$$
\sqrt{x+1}~+1=4{{x}^{2}}+\sqrt{3x}
$$

 **Hướng dẫn.** Với điều kiện $x\ge0$ thì phương trình đã cho tương đương với 

$$
\begin{aligned}
&4{{x}^{2}}-1+\sqrt{3x}-\sqrt{x+1}=0\\ 
\Leftrightarrow & (2x+1)(2x-1)+\frac{2x-1}{\sqrt{3x}+\sqrt{x+1}}=0\\ 
\Leftrightarrow & (2x-1)\left( 2x+1+\frac{1}{\sqrt{3x}+\sqrt{x+1}} \right)=0\\ 
\Leftrightarrow & 2x-1=0\\ 
\Leftrightarrow & x=\frac{1}{2}
\end{aligned}
$$

 So sánh điều kiện được nghiệm của phương trình là $x=\frac{1}{2}.$

**Ví dụ 3.** Giải phương trình 

$$
\sqrt[3]{{{x}^{2}}-1}+x=\sqrt{{{x}^{3}}-2}
$$

 **Hướng dẫn.** Điều kiện $x\ge \sqrt[3]{2}.$ Đoán được nghiệm $x=3$ nên ta tách rồi nhân liên hợp như sau: 

$$
\begin{aligned}
&\sqrt[3]{{{x^2} – 1}} – 2 + x – 3 = \sqrt {{x^3} – 2} – 5 \\ 
\Leftrightarrow\;& \left( {x – 3} \right)\left[ {1 + \frac{{x + 3}}{{\sqrt[3]{{{{\left( {{x^2} – 1} \right)}^2}}} + 2\sqrt[3]{{{x^2} – 1}} + 4}}} \right] = \frac{{\left( {x – 3} \right)\left( {{x^2} + 3x + 9} \right)}}{{\sqrt {{x^3} – 2} + 5}} \\ 
\Leftrightarrow\;& x = 3
\end{aligned}
$$

 Ta có 

$$
\begin{aligned}
1 + \dfrac{{x + 3}}{{\sqrt[3]{{{{\left( {{x^2} - 1} \right)}^2}}} + 2\sqrt[3]{{{x^2} - 1}} + 4}} &= 1 + \dfrac{{x + 3}}{{{{\left( {\sqrt[3]{{{x^2} - 1}} + 1} \right)}^2} + 3}}\\ 
&< 2 < \dfrac{{{x^2} + 3x + 9}}{{\sqrt {{x^3} - 2} + 5}}
\end{aligned}
$$

 nên phương trình đã cho có nghiệm duy nhất $x=3.$

**Ví dụ 4.** Giải phương trình 

$$
\sqrt{3{{x}^{2}}-5x+1}-\sqrt{{{x}^{2}}-2}=\sqrt{3({{x}^{2}}-x-1)}-\sqrt{{{x}^{2}}-3x+4}
$$

 **Hướng dẫn.** Nhận xét $\left( 3{{x}^{2}}-5x+1 \right)-\left( 3{{x}^{2}}-3x-3 \right)=-2(x-2)$ và $\left( {{x}^{2}}-2 \right)-\left( {{x}^{2}}-3x+4 \right)=3(x-2)$ nên ta biến đổi phương trình rồi nhân liên hợp như sau: 

$$
\begin{aligned}
&\sqrt{3{{x}^{2}}-5x+1}-\sqrt{3({{x}^{2}}-x-1)}=\sqrt{{{x}^{2}}-2}-\sqrt{{{x}^{2}}-3x+4}\\ 
\Leftrightarrow\;& \frac{-2(x-2)}{\sqrt{3{{x}^{2}}-5x+1}+\sqrt{3({{x}^{2}}-x-1)}}=\frac{3(x-2)}{\sqrt{{{x}^{2}}-2}+\sqrt{{{x}^{2}}-3x+4}}\\ 
\Leftrightarrow\;& (x-2)\left[ \frac{3}{\sqrt{{{x}^{2}}-2}+\sqrt{{{x}^{2}}-3x+4}}+\frac{2}{\sqrt{3{{x}^{2}}-5x+1}+\sqrt{3({{x}^{2}}-x-1)}} \right]=0
\end{aligned}
$$

 Ta có $\dfrac{3}{\sqrt{{{x}^{2}}-2}+\sqrt{{{x}^{2}}-3x+4}}+\dfrac{2}{\sqrt{3{{x}^{2}}-5x+1}+\sqrt{3({{x}^{2}}-x-1)}}>0$ nên phương trình đã cho có nghiệm duy nhất $x=2.$

**Ví dụ 5.** Giải phương trình 

$$
\sqrt{x^2+15}=3x-2 +\sqrt{x^2+8}
$$

 **Hướng dẫn.** Nhẩm được nghiệm $x=1$ nên ta tách rồi nhân liên hợp như sau 

$$
\begin{aligned}
&\sqrt{x^2+15}-4=3x-3+\sqrt{x^2+8}-3 \notag\\ 
\Leftrightarrow &\frac{x^2+15-16}{\sqrt{x^2+15}+4}=3(x-1)+\frac{x^2+8-9}{\sqrt{x^2+8}+3}\notag\\ 
\Leftrightarrow &\frac{x^2-1}{\sqrt{x^2+15}+4}=3(x-1)+\frac{x^2-1}{\sqrt{x^2+8}+3} \,\,\,(*)
\end{aligned}
$$

 Xét hai trường hợp:

- $x=1$ thỏa mãn phương trình nên là nghiệm.

- $x\ne 1$ thì phương trình

  $$
  (*)\Leftrightarrow\frac{x+1}{\sqrt{x^2+15}+4}=\frac{x+1}{\sqrt{x^2+8}+3}+3
  $$

  Vì $\sqrt{x^2+15}>\sqrt{x^2+8}$ nên từ phương trình đã cho, chúng ta suy ra

  $$
  \begin{aligned}
  &3x-2=\sqrt{x^2+15}-\sqrt{x^2+8}\\ 
  \Leftrightarrow \;& 3x-2>0 \Leftrightarrow x>\frac{2}{3}
  \end{aligned}
  $$

  Suy ra $x+1>0$ và như vậy $\frac{x+1}{\sqrt{x^2+8}+3}+3>\frac{x+1}{\sqrt{x^2+15}}$ hay phương trình $(*)$ vô nghiệm.

Vậy phương trình đã cho có nghiệm duy nhất $x=1.$

**Ví dụ 6.** Giải phương trình

$$
\sqrt{3x+1}-\sqrt{6-x}+3x^2-14x-8=0
$$

 **Hướng dẫn.** Điều kiện $-\frac{1}{3}\le x\le 6.$ Đoán được nghiệm $x=5$ nên ta tách phương trình đã cho thành:

$$
(\sqrt{3x+1}-4)-(\sqrt{6-x}-1)+3x^2-14x-8=0
$$

 Sau đó nhân chia với biểu thức liên hợp, được:

$$
\begin{aligned}
&\frac{3(x-5)}{\sqrt{3x+1}+4}-\frac{5-x}{\sqrt{6-x}+1}+(x-5)(3x+1)=0\\ 
\Leftrightarrow\;& (x-5)\left(\frac{3}{\sqrt{3x+1}+4}+\frac{1}{\sqrt{6-x}+1}+3x+1\right)=0
\end{aligned}
$$

 Vì $-\frac{1}{3}\le x\le 6$ nên 

$$
\dfrac{3}{\sqrt{3x+1}+4}+\dfrac{1}{\sqrt{6-x}+1}+3x+1>0,
$$

 do đó phương trình đã cho có nghiệm duy nhất $x=5.$

Đôi khi, sau khi nhân chia liên hợp, việc chứng minh phương trình còn lại vô nghiệm khá khó khăn, ta hãy xem ví dụ sau.

**Ví dụ 7.** Giải phương trình 

$$
(x+3)\sqrt{x+4}+(x+9)\sqrt{x+11}=x^2+9x+10
$$

 **Hướng dẫn.** Điều kiện $x\ge -4.$ Dễ dàng đoán được nghiệm $x=5$, nên ta tách thành: 

$$
(x+3)\left(\sqrt{x+4}-3\right)+(x+9)\left(\sqrt{x+11}-4\right)=x^2+2x-35
$$

 Sau đó, nhân liên hợp được: 

$$
\begin{aligned}
&(x+3)\cdot\frac{x-5}{\sqrt{x+4}+3}+(x+9)\cdot\frac{x-5}{\sqrt{x+11}+4}=(x-5)(x+7)\\ 
\Leftrightarrow\;& (x-5)\left(\frac{x+3}{\sqrt{x+4}+3}+\frac{x+9}{\sqrt{x+11}+4}-x-7\right)=0
\end{aligned}
$$

 Ta sẽ chứng minh phương trình sau vô nghiệm: 

$$
\frac{x+3}{\sqrt{x+4}+3}+\frac{x+9}{\sqrt{x+11}+4}-x-7=0\,\,(*)
$$

 Vì điều kiện là $x\ge -4$ và chú ý rằng các phân thức $\frac{1}{\sqrt{x+4}+3}$ và $\frac{1}{\sqrt{x+11}+4}$ đều có giá trị nhỏ hơn $\frac{1}{2},$ nên ta tách như sau:

$$
\begin{aligned}
VT(*)&= \frac{x+4}{\sqrt{x+4}+3}-\frac{x+4}{2}+\frac{x+9}{\sqrt{x+11}+4}-\frac{x+9}{2}-\frac{1}{2}-\frac{1}{\sqrt{x+4}+3}\\ 
&=(x+4)\left(\frac{1}{\sqrt{x+4}+3}-\frac{1}{2}\right)+(x+9)\left(\frac{1}{\sqrt{x+11}+4}-\frac{1}{2}\right)-\frac{1}{2}-\frac{1}{\sqrt{x+4}+3}\\ 
&<0
\end{aligned}
$$

 Suy ra phương trình đã cho có nghiệm duy nhất $x=5.$

**Ví dụ 8.** Giải phương trình 

$$
\sqrt{x^2+8}-\sqrt{x^2+3}=2x-1
$$

 **Hướng dẫn.** Đoán được nghiệm $x=1$ nên ta tách PT đã cho thành 

$$
\left(\sqrt{x^2+8}-3\right)-\left(\sqrt{x^2+3}-2\right)-2(x-1)=0
$$

 Sử dụng phương pháp nhân liên hợp được 

$$
(x-1)\left((x+1)\left(\frac{1}{\sqrt{x^2+8}+3}-\frac{1}{\sqrt{x^2+3}+2}\right)-2\right)=0
$$

 Nhận xét rằng $\sqrt{x^2+8}+3>\sqrt{x^2+3}+2$ nên 

$$
\frac{1}{\sqrt{x^2+8}+3}-\frac{1}{\sqrt{x^2+3}+2}<0
$$

 Mặt khác, từ phương trình đã cho có $2x-1=\sqrt{x^2+8}-\sqrt{x^2+3}>0 \Leftrightarrow x>\frac{1}{2} \Leftrightarrow x+1>\frac{3}{2} .$ Do đó, 

$$
(x+1)\left(\frac{1}{\sqrt{x^2+8}+3}-\frac{1}{\sqrt{x^2+3}+2}\right)<0
$$

 và dẫn tới 

$$
(x+1)\left(\frac{1}{\sqrt{x^2+8}+3}-\frac{1}{\sqrt{x^2+3}+2}\right)-2<0
$$

 Như vậy, phương trình đã cho có nghiệm duy nhất $x=1.$

**Ví dụ 9.** Giải phương trình 

$$
\sqrt{x^2+5}+\sqrt{x^2+12}-\sqrt{x^2-3}=18-6x
$$

 **Hướng dẫn.** Đoán được nghiệm $x=2$ và sử dụng phương pháp nhân chia với lượng liên hiệp.

**Ví dụ 10.** Giải phương trình 

$$
\left( \sqrt{x-1}+\sqrt{x+2} \right)\left( \sqrt{{{x}^{2}}+x-2}-1 \right)=3
$$

 **Hướng dẫn.** Điều kiện xác định của phương trình là $x\ge 1.$ Với diều kiện đó, ta có: $(x+2)-(x-1)=3>0$ nên $\sqrt{x+2}-\sqrt{x-1}>0$ với $x\ge 1.$ Nhân hai vế của phương trình với $\sqrt{x+2}-\sqrt{x-1}$ ta được 

$$
\begin{aligned}
&\bigg( (x+2)-(x-1) \bigg)\left( \sqrt{{{x}^{2}}+x-2}-1 \right)=3\left( \sqrt{x+2}-\sqrt{x-1} \right)\\ 
\Leftrightarrow\;& \sqrt{{{x}^{2}}+x-2}-1=\sqrt{x+2}-\sqrt{x-1}\\ 
\Leftrightarrow\;& \left\{ \begin{array}{l} 
\sqrt{{{x}^{2}}+x-2}\ge 1 \\ 
{{\left( \sqrt{{{x}^{2}}+x-2}-1 \right)}^{2}}={{\left( \sqrt{x+2}-\sqrt{x-1} \right)}^{2}} \\ 
\end{array} \right.\\ 
\Leftrightarrow\;& \left\{ \begin{array}{l} 
{{x}^{2}}+x-3\ge 0\\ 
{{x}^{2}}+x-1-2\sqrt{{{x}^{2}}+x-2}=x+2+x-1-2\sqrt{x+2}.\sqrt{x-1} \\ 
\end{array} \right.\\ 
\Leftrightarrow\;& \left\{ \begin{array}{l} 
{{x}^{2}}+x-3\ge 0 \\ 
{{x}^{2}}-x-2=0 \\ 
\end{array} \right.\Leftrightarrow \left\{ \begin{array}{l} 
{{x}^{2}}+x-3\ge 0 \\ 
x=-1\vee x=2 \\ 
\end{array} \right.\Leftrightarrow x=-1\vee x=2.
\end{aligned}
$$

 Vậy nghiệm của phương trình là $x=-1,x=2.$

**Ví dụ 11.** Giải bất phương trình 

$$
\left( \sqrt{x+3}-\sqrt{x-1} \right)\left( 1+\sqrt{{{x}^{2}}+2\text{x}-3} \right)\ge 4
$$

 **Hướng dẫn.** Điều kiện $x\ge 1,$ nhân liên hợp cho vế trái thì bất phương trình đã cho tương đương với 

$$
\begin{aligned}
& 4\left( 1+\sqrt{{{x}^{2}}+2x-3} \right)\ge 4\left( \sqrt{x+3}+\sqrt{x-1} \right)\\ 
\Leftrightarrow & 1+\sqrt{{{x}^{2}}+2x-3}\ge \sqrt{x+3}+\sqrt{x-1}\\ 
\Leftrightarrow & {{x}^{2}}+2x-2+2\sqrt{{{x}^{2}}+2x-3}\ge 2x+2+2\sqrt{{{x}^{2}}+2x-3}\\ 
\Leftrightarrow & {{x}^{2}}-4\ge 0\\ 
\Leftrightarrow & \left[ \begin{array}{l}x\le -2 \\ x\ge 2 \\ \end{array} \right.
\end{aligned}
$$

 Kết hợp với điều kiện $x\ge 1$ ta được tập nghiệm của bất phương trình là $S=[2,+\infty).$

**Nhận xét.** Bất phương trình này hoàn toàn có thể giải được bằng phương pháp đặt ẩn phụ. Xin mời bạn thử!

**Ví dụ 12.** Giải bất phương trình 

$$
2x+5>\sqrt{2-x}\left(\sqrt{x-1}+\sqrt{3x+4}\right)
$$

 **Hướng dẫn.** Điều kiện $1\le x\le 2.$ Chúng ta có 

$$
2x+5=3x+4-(x-1)=\left(\sqrt{x-1}+\sqrt{3x+4}\right)\left(\sqrt{3x+4}-\sqrt{x-1}\right)
$$

 nên bất phương trình đã cho tương đương với tương đương với 

$$
\begin{aligned}
& \left(\sqrt{x-1}+\sqrt{3x+4}\right)\left(\sqrt{3x+4}-\sqrt{x-1}\right)>\sqrt{2-x}\left(\sqrt{x-1}+\sqrt{3x+4}\right)\\ 
\Leftrightarrow & \sqrt{3x+4}-\sqrt{x-1}>\sqrt{2-x} \text{\quad (vì $\sqrt{x-1}+\sqrt{3x+4}>0$)}
\end{aligned}
$$

 Giải bất phương trình này, kết hợp điều kiện được tập nghiệm của bất phương trình đã cho là $S=[1;2]$

**Ví dụ 13.** Giải phương trình 

$$
\sqrt{2{{x}^{2}}+x+9}+\sqrt{2{{x}^{2}}-x+1}=x+4
$$

 **Hướng dẫn.** Nhận xét rằng 

$$
\left( 2{{x}^{2}}+x+9 \right)-\left( 2{{x}^{2}}-x+1 \right)=2\left( x+4 \right)
$$

 Vì $x=4$ không là nghiệm nên ta xét $x\ne 4$ và nhân chia liên hiệp để trục căn thức được 

$$
\frac{2x+8}{\sqrt{2{{x}^{2}}+x+9}-\sqrt{2{{x}^{2}}-x+1}}=x+4\Rightarrow \sqrt{2{{x}^{2}}+x+9}-\sqrt{2{{x}^{2}}-x+1}=2
$$

 Thu được hệ phương trình 

$$
\left\{ \begin{array}{l} 
\sqrt {2{x^2} + x + 9} – \sqrt {2{x^2} – x + 1} = 2\\ 
\sqrt {2{x^2} + x + 9} + \sqrt {2{x^2} – x + 1} = x + 4 
\end{array} \right. \Rightarrow 2\sqrt {2{x^2} + x + 9} = x + 6 \Leftrightarrow \left[ \begin{array}{l} 
x = 0\\ 
x = \frac{8}{7} 
\end{array} \right.
$$

 Thử lại thấy thỏa mãn, vậy phương trình có nghiệm $x=0$ và $x = \frac{8}{7}.$

## 3. Bài tập phương pháp nhân liên hợp giải phương trình, bất phương trình

Đối với các bải tập sau, ta có thể sử dụng phương pháp nhân chia với biểu thức liên hợp để giải quyết.

**Bài 1.** Giải phương trình $\sqrt{2x-3}-\sqrt{x}=2x-6$

Đáp số. $x=3$

**Bài 2.** Giải phương trình $\sqrt{4x^2 +5x+1}-2\sqrt{x^2 -x+1}=9x-3$

Đáp số. $x=\frac{1}{3}.$

**Bài 3.** Giải phương trình $\sqrt{10x+1}+\sqrt{3x-5}=\sqrt{9x+4}+\sqrt{2x-2}$

**Hướng dẫn.** Nhóm thành $\left(\sqrt{10x+1}-\sqrt{9x+4}\right)+\left(\sqrt{3x-5}-\sqrt{2x-2}\right)=0,$ rồi nhân liên hợp…

Đáp số. $x=3$

**Bài 4.** Giải phương trình $\sqrt{x-2}+\sqrt{4-x}=2x^2-5x-1$

**Hướng dẫn.** Tách thành $\left(\sqrt{x-2}-1\right) +\left(\sqrt{4-x}-1\right)-\left(2x^2-5x-3\right)=0.$ Sau đó nhân liên hợp xuất hiện nhân tử $x-3,$ xét hàm cho nhân tử còn lại…

Đáp số. $x=3$

**Bài 5.** Giải phương trình $2\sqrt{\left( 2-x \right)\left( 5-x \right)}=x+\sqrt{\left( 2-x \right)\left( 10-x \right)}$

Đáp số. $x=1,x=\frac{15+5\sqrt{5} }{2}$

**Bài 6.** Giải phương trình $\sqrt[3]{{{x}^{2}}+4}=\sqrt{x-1}+2x-3$

Đáp số. $x=2$

**Bài 7.** Giải phương trình $\sqrt[3]{{{x}^{2}}-1}+\sqrt{3{{x}^{3}}-2}=3x-2$

**Bài 8.** [Đề thi Olympic 30/4 năm 2007] Giải phương trình $2{{x}^{2}}-11x+21-3\sqrt[3]{4x-4}=0$

**Bài 9.** Giải phương trình $\sqrt{2{{x}^{2}}+16x+18}+\sqrt{{{x}^{2}}-1}=2x+4$

**Bài 10.** Giải phương trình ${{x}^{2}}+3x+1=\left( x+3 \right)\sqrt{{{x}^{2}}+1}$

**Bài 11.** Giải phương trình $1+\sqrt{x}=4x^{2}+\sqrt{3x-1}$

Đáp số. $x=\frac{1}{2}$

**Bài 12.** Giải phương trình $\sqrt{x}=1-\sqrt[3]{3x^2+x-1}+\sqrt[3]{2x+1}$

Đáp số. $x=1$

**Bài 13.** Giải phương trình $2\sqrt {{x^2} + 5} = 2\sqrt {x – 1} + {x^2}$

**Hướng dẫn.** Biến đổi thành 

$$
2\sqrt{{{x}^{2}}+5}-6=2\sqrt{x-1}-2+{{x}^{2}}-4\Leftrightarrow 2\frac{{{x}^{2}}-4}{\sqrt{{{x}^{2}}+5}+3}=2\frac{x-2}{\sqrt{x-1}+1}+(x-2)(x+2)
$$

 Tìm được $x=2$ hoặc 

$$
\frac{2(x+2)}{\sqrt{{{x}^{2}}+5}+3}=\frac{2}{\sqrt{x-1}+1}+x+2\Leftrightarrow \frac{2}{{\sqrt {x – 1} + 1}} + \left( {x + 2} \right)\left( {1 – \frac{2}{{\sqrt {{x^2} + 5} + 3}}} \right) = 0
$$

 Phương trình cuối này vô nghiệm.

**Bài 14.** Giải phương trình $\sqrt{x^2+12}+5=3x+\sqrt{x^2+5}$

**Hướng dẫn.** Để phương trình có nghiệm thì: $\sqrt{{{x}^{2}}+12}-\sqrt{{{x}^{2}}+5}=3x-5\ge 0\Leftrightarrow x\ge \frac{5}{3}.$ Biến đổi phương trình thành 

$$
\begin{aligned}
& \sqrt{{{x}^{2}}+12}-4=3x-6+\sqrt{{{x}^{2}}+5}-3\Leftrightarrow \frac{{{x}^{2}}-4}{\sqrt{{{x}^{2}}+12}+4}=3\left( x-2 \right)+\frac{{{x}^{2}}-4}{\sqrt{{{x}^{2}}+5}+3} \\ 
& \Leftrightarrow \left( x-2 \right)\left( \frac{x+2}{\sqrt{{{x}^{2}}+12}+4}-\frac{x+1}{\sqrt{{{x}^{2}}+5}+3}-3 \right)=0\Leftrightarrow x=2
\end{aligned}
$$

 Chứng minh được $\frac{x+2}{\sqrt{{{x}^{2}}+12}+4}-\frac{x+2}{\sqrt{{{x}^{2}}+5}+3}-3<0,\forall x>\frac{5}{3}.$

Đáp số. $x=2$

**Bài 15.** Giải bất phương trình $\frac{1-\sqrt{1-4{{x}^{2}}}}{x}<3$

Đáp số. $\left[ -\frac{1}{2};\frac{1}{2} \right]\backslash \left\{ 0 \right\}$
