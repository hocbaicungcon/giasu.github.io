---
title: Nguyên Hàm – Tích Phân trong đề thi 2020
description: Tổng hợp câu hỏi chủ đề Nguyên hàm, Tích Phân trong đề thi 2020 gồm đề
  minh họa, đề tham khảo TN THPT, đề thi thử THPTQG của các trường trên cả nước.
category: Toán học
type: Bài tập
date: '2024-10-02'
tags:
- Toán học
- Toán 12
- Nguyên hàm
- Tích phân
grade: 12
---

Bài viết này tổng hợp các câu hỏi về chủ đề Nguyên hàm, Tích Phân và ứng dụng trong các đề thi minh họa, đề tham khảo TN THPT, đề thi thử THPTQG năm 2020 của các trường trên cả nước.

Mời thầy cô và các em học sinh tham khảo thêm các bài viết khác:

- [Khoảng cách giữa hai đường thẳng chéo nhau trong không gian](/bai-viet/khoang-cach-giua-hai-duong-thang-cheo-nhau.html)

- [Cách tính khoảng cách từ một điểm đến một mặt phẳng](/bai-viet/cach-tinh-khoang-cach-tu-mot-diem-den-mot-mat-phang.html)

- [Cách tính góc giữa hai mặt phẳng trong không gian](/bai-viet/cach-tinh-goc-giua-hai-mat-phang-trong-khong-gian.html)

- [Hoán vị – Tổ hợp – Chỉnh hợp](/bai-viet/hoan-vi-to-hop-chinh-hop.html)

**Câu 1.** [Chuyên KHTN Lần 1 năm 2020] Cho hàm số $f(x)$ có đạo hàm trên khoảng $(0;+\infty)$ và thỏa mãn $f(x)=x\left(\sin x + f'(x) \right) +\cos x$ và $f\left(\frac{\pi}{2}\right) =\frac{\pi}{2}.$ Tính giá trị của $f(\pi).$

**Hướng dẫn.** Từ đẳng thức $f(x)=x\left(\sin x + f'(x) \right) +\cos x$, sau khi nhân ra và chuyển hết số hạng liên quan đến hàm $f(x)$ sang một vế ta được 

$$
f(x)-x\cdot f'(x)=x\cdot \sin x+\cos x\,\,\,\,(*)
$$

 Quan sát vế trái, ta có thể viết lại thành 

$$
f(x)-x\cdot f'(x)=x’\cdot f(x)-x\cdot f'(x)
$$

 Ở đây xuất hiện dấu trừ, trong khi nếu đạo hàm của một tích thì phải là 

$$
x’\cdot f(x)+x\cdot f'(x).
$$

Do đó, chúng ta nghĩ tới công thức đạo hàm của một thương. Viết lại đẳng thức $(*)$ và chia hai vế cho $x^2$ (lưu ý rằng hàm số đang xét trên khoảng $(0;+\infty)$ nên $x\ne 0$) ta được 

$$
\begin{aligned}
\frac{f'(x)\cdot x – f(x)}{x^2}& =\frac{ – x\cdot \sin x -\cos x}{x^2}\\ 
\Leftrightarrow \left(\frac{f(x)}{x}\right)’&=\left(\frac{\cos x}{x}\right)’
\end{aligned}
$$

 Lấy nguyên hàm hai vế ta được 

$$
\frac{f(x)}{x}= \frac{\cos x}{x} + C
$$

 Theo đề bài có $f\left(\frac{\pi}{2}\right) =\frac{\pi}{2}$ nên suy ra $C=1.$ Do đó $f(x)=\cos x+x$ và $f(\pi)=\pi-1.$

**Câu 2.** [Chuyên KHTN Lần 1 năm 2020] Cho hàm số $f(x)$ liên tục trên $\mathbb{R}$ và thỏa mãn $f^3(x)+2f(x)=1-x$ với mọi $x\in \mathbb{R}.$ Tính tích phân $\displaystyle \int_{-2}^1 f(x)dx$

**Hướng dẫn.** Vì $f^3(x)+2f(x)=1-x$ với mọi $x\in \mathbb{R}$ nên cho $x=1$ ta có phương trình 

$$
f^3(1)+2f(1)=1-0
$$

 Giải phương trình này, được $f(1)=0.$ Tương tự, với $x=-2$ ta tìm được $f(-2)=1.$

Mặt khác, từ đẳng thức đã cho $f^3(x)+2f(x)=1-x$, ta lấy vi phân hai vế thì được 

$$
-dx = \left(3f^2(x)+2\right)df(x)
$$

 nên tích phân cần tính trở thành 

$$
\begin{aligned}
{\int \limits_{ – 2}^1 f (x)dx}&{\, =\, – \int \limits_{ – 2}^1 f (x)\left( {3{f^2}(x) + 2} \right)df(x)}\\ 
{}&{ =\, – \int \limits_1^0 {\left( {3{u^3} + 2u} \right)} du = \frac{7}{4}}
\end{aligned}
$$

**Câu 3.** [Lương Thế Vinh – HN Lần 2 năm 2020] Cho hàm số $y=f(x)$ liên tục trên $\mathbb{R}$ và thỏa mãn 

$$
\sin x\cdot f\left(\cos x\right)+\cos x\cdot f\left(\sin x\right) =\sin 2x-\frac{1}{2}\sin^3 2x
$$

 với mọi $x\in \mathbb{R}.$ Tính tích phân $\displaystyle I=\int_0^1 f(x)dx.$

**Hướng dẫn.** Lấy tích phân cận từ $0$ đến $\frac{\pi}{2}$ hai vế ta được 

$$
\begin{aligned}
\int_0^{\frac{\pi}{2}}\left(\sin x\cdot f\left(\cos x\right)+\cos x\cdot f\left(\sin x\right)\right)dx &= \int_0^{\frac{\pi}{2}}\left(\sin 2x-\frac{1}{2}\sin^3 2x\right)dx
\end{aligned}
$$

 Dễ dàng tính được tích phân ở vế phải 

$$
\displaystyle \int_0^{\frac{\pi}{2}}\left(\sin 2x-\frac{1}{2}\sin^3 2x\right)dx=\frac{2}{3}
$$

 Đối với tích phân ở vế trái, chúng ta tách thành hai tích phân và sử dụng phương pháp đổi biến số. Chẳng hạn, $\displaystyle\int_0^{\frac{\pi}{2}}\left(\sin x\cdot f\left(\cos x\right)\right)dx$ chúng ta đặt $t=\cos x$ thì tích phân này trở thành 

$$
\begin{aligned}
\int_1^{0}\left(-f\left(t\right)\right)dt
\end{aligned}
$$

 và cũng chính bằng 

$$
\int_1^{0}\left(-f\left(x\right)\right)dx=\int_0^{1}f\left(x\right)dx
$$

 do tích phân không phụ thuộc vào tên biến.

Hoàn toàn tương tự, chúng ta tính được 

$$
\int_0^{\frac{\pi}{2}}\left(\cos x\cdot f\left(\sin x\right)\right)dx= \int_0^{1}f\left(x\right)dx
$$

 Do đó, tích phân cần tính ban đầu là 

$$
2I=2/3
$$

 hay $I=\frac{1}{3}.$

**Câu 4.** [Chuyên ĐHSP HN] Cho hàm số $f(x)$ liên tục trên tập $\mathbb{R}$ và thỏa mãn 

$$
f(x)+(5x-2)f\left(5x^2-4x\right)=50x^3-60x^2+23x-1
$$

 với mọi $x\in \mathbb{R}.$ Tính tích phân $I=\displaystyle \int_0^1f(x) dx$

**Hướng dẫn.** Lấy tích phân cận từ $0$ đến $1$ hai vế đẳng thức đã cho ta có 

$$
\begin{aligned}
\int_0^1\left(f(x)+(5x-2)f\left(5x^2-4x\right)\right)dx=\int_0^1\left(50x^3-60x^2+23x-1 \right)dx
\end{aligned}
$$

 Dễ dàng tính được tích phân ở vế phải 

$$
\int_0^1\left(50x^3-60x^2+23x-1 \right)dx=3
$$

 Đối với tích phân ở vế trái, ta tách thành tổng hai tích phân, 

$$
\int_0^1\left(f(x)+(5x-2)f\left(5x^2-4x\right)\right)dx=I+\int_0^1(5x-2)f\left(5x^2-4x\right)dx
$$

 Đối với tích phân 

$$
\int_0^1(5x-2)f\left(5x^2-4x\right)dx
$$

 ta sử dụng phương pháp đổi biến số. Đặt $t=5x^2-4x$ thì $dt=2(5x-2)dx$, sau khi đổi cận ta được 

$$
\begin{aligned}
\int_0^1(5x-2)f\left(5x^2-4x\right)dx & = \int_0^1\frac{1}{2}f(t)dt\\ 
&=\frac{1}{2} \int_0^1f(x) dx
\end{aligned}
$$

 Do đó, ta có phương trình $I+\frac{1}{2} I=3$ hay $I=2.$

**Câu 5.** [Amsterdam HK2 năm 2020] Cho hàm số $f(x)$ có đạo hàm trên đoạn $[1;4].$ Biết rằng 

$$
2x\cdot f'(x)+f(x)=2x\cdot \sqrt{x}
$$

 và $f(1)=\frac{3}{2}$, tính giá trị $f(4).$

**Hướng dẫn.** Xét trên đoạn $[1;4]$ thì $x>0$ nên chia hai vế đẳng thức đã cho cho $2\sqrt{x}$ ta được 

$$
\begin{aligned}
\sqrt{x}\cdot f'(x)+\frac{1}{2\sqrt{x}}\cdot f(x)&=x\\ 
\Leftrightarrow \left(\sqrt{x}\cdot f(x)\right)’&=x
\end{aligned}
$$

 Lấy nguyên hàm hai vế, ta được 

$$
\sqrt{x}\cdot f(x)=\frac{1}{2}x^2+C
$$

 Mà $f(1)=\frac{3}{2}$ nên suy ra $C=1$ hay $\sqrt{x}\cdot f(x)=\frac{1}{2}x^2+1.$ Thay $x=4$ vào tìm được $f(4)=\frac{9}{2}.$

**Câu 6.** [SGD Vĩnh Phúc năm 2020] Cho hàm số $f(x)$ liên tục trên $\mathbb{R}$ và thỏa mãn 

$$
\int_{\frac{\pi}{4}}^{\frac{\pi}{2}}\cot x\cdot f\left(\sin^2x\right)dx=\int_1^{16}\frac{f\left(\sqrt{x}\right)}{x}dx=1
$$

 Tính tích phân $\displaystyle I=\int _{\frac{1}{8}}^1\frac{f(4x)}{x} dx.$

**Hướng dẫn.** Đối với tích phân $\displaystyle \int_{\frac{\pi}{4}}^{\frac{\pi}{2}}\cot x\cdot f\left(\sin^2x\right)dx= 1$ chúng ta đổi biến $t=\sin^2x$ thì 

$$
dt=2\sin x\cos x dx=2\sin^2x \cdot \cot x dx
$$

 Suy ra $\cot x dx=\frac{dt}{2t}$, do đó tích phân đã cho trở thành 

$$
1=\int_{\frac{1}{2}}^1\frac{f(t)dt}{2t}
$$

 Vì tích phân không phụ thuộc vào tên biến nên suy ra 

$$
\int_{\frac{1}{2}}^1\frac{f(x)dx}{2x}=1\Leftrightarrow \int_{\frac{1}{2}}^1\frac{f(x)dx}{x}=2
$$

 Đối với tích phân $\displaystyle \int_1^{16}\frac{f\left(\sqrt{x}\right)}{x}dx=1$, chúng ta cũng sử dụng phương pháp đổi biến với $t=\sqrt{x}$ thì tìm được 

$$
\int_1^{4}\frac{f\left(x\right)}{x}dx=\frac{1}{2}.
$$

 Tiếp tục sử dụng đổi biến số cho tích phân cần tính 

$$
\begin{aligned}
I&=\int _{\frac{1}{8}}^1\frac{f(4x)}{x} dx\\ 
&=\int _{\frac{1}{2}}^4\frac{f(t)}{t}dt=\int_{\frac{1}{2}}^1\frac{f(t)}{t}dt+\int_{1}^4\frac{f(t)}{t}dt\\ 
&=2+\frac{1}{2}\\ 
&=\frac{5}{2}
\end{aligned}
$$

**Câu 7.** [Chuyên Thái Bình Lần 4 năm 2020] Cho $f(x)$ là hàm số liên tục trên tập số thực $\mathbb{R}$ và thỏa mãn 

$$
f\left(x^2+3x+1\right)=x+2
$$

 Tính tích phân $\displaystyle I=\int_1^5 f(x) dx.$

**Hướng dẫn.** Vì tích phân không phụ thuộc tên biến nên ta có 

$$
I=\int_1^5 f(x) dx=\int_1^5 f(t) dt
$$

 Sử dụng phương pháp đổi biến số, đặt $t=x^2+3x+1$ thì $dt=(2x+3)dx$ và tích phân cần tính trở thành 

$$
\begin{aligned}
I&=\int_0^1f\left(x^2+3x+1)(2x+3)dx\right)\\ 
&=\int_0^1 (x+2)(2x+3)dx
\end{aligned}
$$

 Dễ dàng tính được tích phân cuối cùng này bằng $\frac{61}{6}$, tức là $I=\frac{61}{6}.$

**Câu 8.** [SGD Thái Nguyên năm 2020] Cho hàm số $f(x)$ có đạo hàm liên tục trên $\mathbb{R}$ và thỏa mãn $f'(x)>0, \;\forall x\in \mathbb{R}.$ Biết $f(0)=1$ và $f'(x)=(2-3x)\cdot f(x).$ Tính giá trị của $f(1).$

**Hướng dẫn.** Vì $f(x)>0, \;\forall x\in \mathbb{R}$ nên chia hai vế đẳng thức đã cho cho $f(x)$ ta được 

$$
\frac{f'(x)}{f(x)} =2-3x
$$

 Lấy nguyên hàm hai vế đẳng thức này, ta được 

$$
\begin{aligned}
\int \frac{f'(x)}{f(x)}dx & =\int (2-3x) dx\\ 
\Leftrightarrow \int \ln \left|f(x) \right|= \ln (f(x)) &= -\frac{3}{2}x^2+2x+C
\end{aligned}
$$

 Mặt khác $f(0)=1$ nên suy ra 

$$
\ln (f(0)) =\ln 1=-\frac{3}{2}\cdot0^2+2\cdot 0 +C
$$

 hay $C=0.$ Suy ra $\ln (f(x)) = -\frac{3}{2}x^2+2x.$ Thay $x=1$ vào ta được $\ln (f(1))=\frac{1}{2}$ nên $f(1)=e^{\frac{1}{2}}.$

**Câu 9.** [Chuyên Vĩnh Phúc – Lần 2 năm 2020] Cho hàm số $f(x)$ liên tục trên $\mathbb{R}$ và 

$$
\int_1^9\frac{f\left(\sqrt{x}\right)}{\sqrt{x}}dx=4, \int_0^{\frac{\pi}{2}}f\left(\sin x\right)\cos xdx=2
$$

 Tính tích phân $\displaystyle I=\int_0^3f(x)dx.$

**Hướng dẫn.** Sử dụng phương pháp đổi biến số, đặt $t=\sqrt{x}$ thì ta có 

$$
\begin{aligned}
4&=\int_1^9\frac{f\left(\sqrt{x}\right)}{\sqrt{x}}dx\\ 
&=2\int_1^3 f(t)dt
\end{aligned}
$$

 Vì tích phân không phụ thuộc tên biến, nên suy ra $\displaystyle \int_1^3 f(x)dx=2.$

Tương tự, đổi biến $t=\sin x$ thì tích phân thứ hai đã cho trở thành 

$$
\begin{aligned}
2&=\int_0^{\frac{\pi}{2}}f\left(\sin x\right)\cos xdx\\ 
&=\int_0^1 f(t)dt
\end{aligned}
$$

 hay suy ra $\displaystyle \int_0^1f(x)dx=2.$ Tóm lại, tích phân cần tính là 

$$
\begin{aligned}
I&=\int_0^3f(x)dx\\ 
&=\int_0^1f(x)dx+\int_1^3f(x)dx\\ 
&=2+2=4
\end{aligned}
$$

**Câu 10.** [THPT Bình Phú] Cho hàm số $f(x)$ là đa thức thỏa mãn 

$$
f(x)+\frac{1}{x}f'(x^2)+f”(x)=x^2+2x-2
$$

 Biết $f(-2)=0, f(0)=f'(-2)=-4.$ Tính tích phân $\displaystyle I=\int_0^{-2}f(x)dx.$

**Hướng dẫn.** Nhận xét rằng $f(x)$ là đa thức bậc hai, nên đặt $f(x)=ax^2+bx+c$ thì từ dữ kiện $f(-2)=0, f(0)=f'(-2)=-4$ ta có hệ phương trình 

$$
\begin{cases} 
4a-2b+c=0\\ 
c=-4\\ 
-4a+b=-4 
\end{cases}
$$

 Giải hệ này ta được $a=1,b=0,c=-4$ và do đó $f(x)=x^2-4.$ Từ đó tìm được 

$$
I=\int_0^{-2}f(x)dx=\frac{16}{3}.
$$

 Cách khác, chúng ta đồng nhất hệ số của đẳng thức 

$$
f(x)+\frac{1}{x}f'(x^2)+f”(x)=x^2+2x-2
$$

 cũng lập được một hệ phương trình và từ đó tìm được $f(x)=x^2-4$ như trên.

**Câu 11.** [Chuyên Lê Hồng Phong – Nam Định] Cho hàm số $f(x)$ liên tục trên khoảng $(0;+\infty)$ và $f(1)=e.$ Biết rằng $x^3\cdot f'(x)=e^x(x-2)$ với mọi $x\in (0;+\infty).$ Tính tích phân $\displaystyle I=\int_1^{\ln 3}x^2 f(x)dx.$

**Hướng dẫn.** Xét trên khoảng $(0;+\infty)$, từ $x^3\cdot f'(x)=e^x(x-2)$, ta suy ra 

$$
f'(x)=\frac{e^x(x-2)}{x^3}
$$

 Lấy nguyên hàm hai vế ta được 

$$
\begin{aligned}
\int f'(x) dx&=\int \frac{e^x(x-2)}{x^3}dx \\ 
f(x)&=\frac{1}{x^{2}}e^{x}+C
\end{aligned}
$$

 Cho $x=1$ ta được $e=f(1)=e+C$ nên suy ra $C=0.$ Tức là ta có $f(x)=\frac{1}{x^{2}}e^{x}.$ Do đó, tích phân cần tính trở thành 

$$
\begin{aligned}
I&=\int_1^{\ln 3}x^2\cdot \frac{e^x}{x^2}dx\\ 
&=\int_1^{\ln 3}e^xdx\\ 
&=3-e
\end{aligned}
$$

**Câu 12.** [Kim Liên – HN HK2] Giả sử hàm số $f(x)$ có đạo hàm cấp hai trên $\mathbb{R}$ và thỏa mãn $f(1)=f'(1)=2.$ Biết rằng 

$$
f(1-x)+x^2\cdot f”(x)=4x+2,
$$

 với mọi $x\in \mathbb{R}$, tính tích phân $\displaystyle \int_0^1 xf'(x)dx.$

**Hướng dẫn.** Ta sử dụng phương pháp tích phân từng phần, với 

$$
\begin{cases} 
u=f'(x)\\ dv=xdx 
\end{cases} \Rightarrow \begin{cases} 
du=f”(x)dx\\ v=\frac{1}{2}x^2 
\end{cases}
$$

 Tích phân cần tính trở thành 

$$
\begin{aligned}
I&=\frac{1}{2}x^2f'(x)\bigg|_0^1 -\frac{1}{2}\int_0^1 x^2f”(x)dx\\ 
&=\frac{1}{2}f'(1)-\frac{1}{2}\int_0^1\left(4x+2-f(1-x)\right)dx\\ 
&=1-\frac{1}{2}\int_0^1\left(4x+2\right)+\frac{1}{2}\int_0^1f(1-x)dx\\ 
&=-1-\frac{1}{2}\int_1^0f(t)dt\\ 
&=-1+\frac{1}{2}J
\end{aligned}
$$

 Mặt khác, nếu đặt 

$$
\begin{cases} 
u=x\\ dv=f'(x)dx 
\end{cases} \Rightarrow \begin{cases} 
du=dx\\ v=f(x) 
\end{cases}
$$

 thì thích phân cần tính trở thành 

$$
\begin{aligned}
I&=xf(x)\bigg|_0^1 -\int_0^1 f(x)dx\\ 
&=2-J
\end{aligned}
$$

 Tóm lại, chúng ta có hệ phương trình 

$$
\begin{cases} 
I=2-J\\ I=-1+\frac{1}{2}J 
\end{cases}
$$

Giải hệ này tìm được $I=0.$

**Câu 13.
**Câu 14.
**Câu 15.
**Câu 16.
**Câu 17.
**Câu 18.
(tiếp tục cập nhật)
