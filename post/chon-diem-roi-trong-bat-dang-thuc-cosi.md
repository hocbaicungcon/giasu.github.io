---
title: Chọn điểm rơi trong bất đẳng thức Côsi (Cauchy)
description: Cách chọn điểm rơi trong bất đẳng thức Côsi (Cauchy hay tên chính xác
  là AM-GM, mời bạn xem trong bài Các bất đẳng thức thường sử dụng) hay chính là cách
  dự
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Bất đẳng thức
- Điểm rơi Cô-si
grade: 10
---

Cách chọn điểm rơi trong [bất đẳng thức Côsi](/bai-viet/bat-dang-thuc-cosi-va-ung-dung.html) (Cauchy hay tên chính xác là AM-GM, mời bạn xem trong bài [Các bất đẳng thức thường sử dụng](/bai-viet/cac-bat-dang-thuc-thuong-su-dung.html)) hay chính là cách dự đoán dấu bằng xảy ra trong BĐT Cauchy.

## Chọn điểm rơi là gì?

Chọn điểm rơi ở đây chính là dự đoán giá trị của biến làm dấu bằng trong các bất đẳng thức xảy ra.

Các dấu hiệu nhận biết thường thấy:

- Nếu biểu thức có điều kiện ràng buộc thì GTLN, GTNN của biểu thức thường đạt được tại vị trí biên.

- Nếu biểu thức có tính đối xứng thì dấu “=” thường xảy ra khi các biến bằng nhau.

- Nếu biểu thức không có tính đối xứng thì tuỳ theo bài toán mà linh hoạt áp dụng.

## Chọn điểm rơi trong bất đẳng thức Côsi

Chúng ta xuất phát từ một bài toán quen thuộc sau:

**BÀI TẬP 1**: Chứng minh rằng 

$$
x+\frac{1}{x}\ge 2,\forall x>0
$$

 Đẳng thức xảy ra khi $x=2.$

**Hướng dẫn.**  Bài tập trên chỉ cần sử dụng bất đẳng thức Cauchy (AM-GM) chi hai số dương là xong. Tuy nhiên, khá nhiều bạn bạn lúng túng khi gặp bất đẳng thức sau:

**BÀI TẬP 2**: Tìm giá trị nhỏ nhất của biểu thức 

$$
S=x+\frac{1}{x},\forall x\ge 2.
$$

**Hướng dẫn.**

Sai lầm thường gặp: 

$$
S=x+\frac{1}{x} \ge 2\sqrt{x\cdot \frac{1}{x}}=2
$$

Tuy nhiên, dấu bằng xảy ra khi $x=\frac{1}{x}$ hay $x=1$, không thỏa mãn giả thiết $x \ge 2.$

Nhận thấy rằng khi $x$ tăng thì $S$ cũng tăng theo (bằng cách thử trực tiếp hoặc dùng máy tính CASIO vào tính năng lập bảng TABLE để thử). Từ đó dẫn đến dự đoán khi $x=2$ thì $S$ nhận giá trị nhỏ nhất.

Do bất đẳng thức Côsi xảy ra dấu bằng tại điều kiện các tham số tham gia phải bằng nhau, nên tại “điểm rơi $x=2$” ta không thể sử dụng bất đẳng thức Côsi trực tiếp cho hai số$x$ và $\frac{1}{x}$ vì khi đó $x=2$ còn $\frac{1}{x}=1/2.$

Lúc này ta sẽ giả định sử dụng bất đẳng thức Côsi cho cặp số $kx$ và $\frac{1}{x}$ thì biểu thức $S$ viết lại thành 

$$
x+\frac{1}{x}=kx +\frac{1}{x}+\left( 1-k \right)x.
$$

 Cần tìm số $k>0$ sao cho phương trình $kx=\frac{1}{x}$ xảy ra tại $x=2.$ Dễ dàng tìm được $k=\frac{1}{4}$ và khi đó 

$$
S=\frac{1}{4}x+\frac{1}{x}+\frac{3}{4}x.
$$

Áp dụng bất đẳng thức Cauchy cho 2 số dương ta có: 

$$
\frac{1}{4}x+\frac{1}{x}\ge 2\sqrt{\frac{1}{4}x\frac{1}{x}}=1.
$$

 Mặt khác, vì $x\ge 2$ nên 

$$
\frac{1}{4}x+\frac{1}{x}+\frac{3}{4}x\ge 1+\frac{3}{2}=\frac{5}{2}
$$

Dấu đẳng thức xảy ra khi $x = 2.$ Vậy, giá trị nhỏ nhất của $S$ là $2.$

**BÀI TẬP 3**: Cho $x > 0,y > 0$ và thoả mãn điều kiện $x+y=1$, chứng minh: 

$$
xy + \frac{1}{xy}\ge \frac{17}{4}
$$

**Hướng dẫn.** Từ $x > 0 , y > 0$ và $x + y = 1$ suy ra 

$$
1\ge 2\sqrt{xy}\Rightarrow xy\le \frac{1}{4}
$$

Đặt $y =\frac{1}{xy}$ Ta có bất đẳng thức cần chứng minh trở thành 

$$
y+\frac{1}{y}\ge \frac{17}{4}
$$

 với y$\ge 4$, cách chứng minh tương tự BÀI TẬP 2.

**BÀI TẬP 4**: Cho $x>0, y>0,z>0$ và $x+y+z=1.$ Chứng minh rằng: 

$$
xyz+\frac{1}{xyz}\ge 27+\frac{1}{27}
$$

 Dấu bằng xảy ra khi $x = y = z = \frac{1}{3}.$

Sử dụng các bài tập 2, 3, 4, chúng ta có thể chứng minh bài tập sau:

**BÀI TẬP 5**:

a) Cho $x>0,y>0$ và $x+y=1$, chứng minh rằng 

$$
\sqrt{x+\frac{1}{{{x}^{2}}}}+\sqrt{y+\frac{1}{{{y}^{2}}}}\ge \sqrt{18},
$$

 dấu đẳng thức xảy ra khi $x=y=\frac{1}{2}.$

b) Cho $x>0,y>0,z>0$ và thoả mãn $x+y+z=1.$ Chứng minh 

$$
\sqrt{{{x}^{2}}+\frac{1}{{{x}^{2}}}}+\sqrt{{{y}^{2}}+\frac{1}{{{y}^{2}}}}+\sqrt{{{z}^{2}}+\frac{1}{{{z}^{2}}}}\ge \sqrt{82}
$$

 Dấu đẳng thức xảy ra khi $x = y = z = \frac{1}{3}.$

**Hướng dẫn.**

a) Áp dụng bất đẳng thức Cô si cho 2 số dương ta có: 

$$
VT\ge 2\sqrt[4]{\left( x+\frac{1}{{{x}^{2}}} \right)\left( y+\frac{1}{{{y}^{2}}} \right)}
$$

 $$
 \left( x+\frac{1}{{{x}^{2}}} \right)\left( y+\frac{1}{y} \right)=xy+\frac{x}{{{y}^{2}}}+\frac{y}{{{x}^{2}}}+\frac{1}{{{x}^{2}}{{y}^{2}}}
 $$

 Mặt khác, $0<x+y=1\Rightarrow 0<xy\le \frac{1}{4}$ nên suy ra 

$$
xy+\frac{1}{{{x}^{2}}{{y}^{2}}}\ge \frac{1}{4}+{{4}^{2}}=\frac{65}{4}; \frac{x}{{{y}^{2}}}+\frac{y}{{{x}^{2}}}\ge 2\sqrt{\frac{1}{xy}}\ge 4
$$

 Do đó, 

$$
VT\ge 2\sqrt[4]{\frac{65}{4}+4}=2\sqrt[4]{\frac{81}{4}}=\sqrt{18}
$$

b) Áp dụng bất đẳng thức cô si cho 3 số dương ta có: 

$$
\sqrt{{{x}^{2}}+\frac{1}{{{x}^{2}}}}+\sqrt{{{y}^{2}}+\frac{1}{{{y}^{2}}}}+\sqrt{{{z}^{2}}+\frac{1}{{{z}^{2}}}}\ge 3\sqrt[6]{\left( {{x}^{2}}+\frac{1}{{{x}^{2}}} \right)\left( {{y}^{2}}+\frac{1}{{{y}^{2}}} \right)\left( {{z}^{2}}+\frac{1}{{{z}^{2}}} \right)}
$$

 Ta tiếp tục biến đổi như sau 

$$
\begin{aligned}
& \left( {{x}^{2}}+\frac{1}{{{x}^{2}}} \right)\left( {{y}^{2}}+\frac{1}{{{y}^{2}}} \right)\left( {{z}^{2}}+\frac{1}{{{z}^{2}}} \right) \\ & ={{x}^{2}}{{y}^{2}}{{z}^{2}}+\frac{1}{{{x}^{2}}{{y}^{2}}{{z}^{2}}}+\frac{{{x}^{2}}}{{{y}^{2}}{{z}^{2}}}+\frac{{{y}^{2}}}{{{x}^{2}}{{z}^{2}}}+\frac{{{z}^{2}}}{{{x}^{2}}{{y}^{2}}}+\frac{{{x}^{2}}{{y}^{2}}}{{{z}^{2}}}+\frac{{{y}^{2}}{{z}^{2}}}{{{x}^{2}}}+\frac{{{z}^{2}}{{x}^{2}}}{{{y}^{2}}}
\end{aligned}
$$

Ta có $0<xyz\le \frac{1}{27}$ nên suy ra 

$$
{{x}^{2}}{{y}^{2}}{{z}^{2}}+\frac{1}{{{x}^{2}}{{y}^{2}}{{z}^{2}}}\ge 729+\frac{1}{729}
$$

 Áp dụng bất đẳng thức Cauchy cho ba số không âm, chúng ta có 

$$
\begin{aligned}
\frac{{{x}^{2}}}{{{y}^{2}}{{z}^{2}}}+\frac{{{y}^{2}}}{{{x}^{2}}{{z}^{2}}}+\frac{{{z}^{2}}}{{{x}^{2}}{{y}^{2}}}&\ge 3\sqrt[3]{\frac{1}{{{x}^{2}}{{y}^{2}}{{z}^{2}}}} \\ \frac{{{x}^{2}}{{y}^{2}}}{{{z}^{2}}}+\frac{{{y}^{2}}{{z}^{2}}}{{{x}^{2}}}+\frac{{{z}^{2}}{{x}^{2}}}{{{y}^{2}}}&\ge 3\sqrt[3]{{{x}^{2}}{{y}^{2}}{{z}^{2}}}
\end{aligned}
$$

 Suy ra 

$$
\begin{aligned}
\frac{{{x}^{2}}}{{{y}^{2}}{{z}^{2}}}+\frac{{{y}^{2}}}{{{x}^{2}}{{z}^{2}}}+\frac{{{z}^{2}}}{{{x}^{2}}{{y}^{2}}}+\frac{{{x}^{2}}{{y}^{2}}}{{{z}^{2}}}+\frac{{{y}^{2}}{{z}^{2}}}{{{x}^{2}}}+\frac{{{z}^{2}}{{x}^{2}}}{{{y}^{2}}}&\ge 3\sqrt[3]{\frac{1}{{{x}^{2}}{{y}^{2}}{{z}^{2}}}}+3\sqrt[3]{{{x}^{2}}{{y}^{2}}{{z}^{2}}} \\ & \ge \text{3}\left(\frac{\text{1}}{\text{9}}+9\right)
\end{aligned}
$$

 Từ đó suy ra 

$$
\sqrt{{{x}^{2}}+\frac{1}{{{x}^{2}}}}+\sqrt{{{y}^{2}}+\frac{1}{{{y}^{2}}}}+\sqrt{{{z}^{2}}+\frac{1}{{{z}^{2}}}}\ge 3\sqrt[6]{729+\frac{1}{729}+3(9+\frac{1}{9})}\ge \sqrt{82}
$$

Đối với các bài toán khó hơn, mời các bạn tham khảo [SỬ DỤNG AM-GM ĐỂ CHỨNG MINH BẤT ĐẲNG THỨC DẤU BẰNG KHÔNG TẠI TÂM](/bai-viet/su-dung-am-gm-dau-bang-khong-tai-tam.html).
