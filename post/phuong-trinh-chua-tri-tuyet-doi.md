---
title: Phương trình chứa trị tuyệt đối
description: Để giải phương trình chứa trị tuyệt đối chúng ta có thể sử dụng hai cách
  chính là bình phương hai vế để khử dấu giá trị tuyệt đối, hoặc sử dụng định nghĩa
  giá trị tuyệt đối để xét các trường hợp (có thể lập bảng để việc phá dấu giá trị
  tuyệt đối đ...
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Trị tuyệt đối
- Phương trình
grade: 10
---

Để giải phương trình chứa trị tuyệt đối chúng ta có thể sử dụng hai cách chính là bình phương hai vế để khử dấu giá trị tuyệt đối, hoặc sử dụng định nghĩa giá trị tuyệt đối để xét các trường hợp (có thể lập bảng để việc phá dấu giá trị tuyệt đối được dễ dàng hơn).

Xem thêm:

- [Cách giải phương trình chứa căn, bất phương trình chứa căn](/bai-viet/phuong-trinh-chua-can-bat-phuong-trinh-chua-can.html)

- [Giải phương trình bằng phương pháp nhân liên hợp](/bai-viet/giai-phuong-trinh-bang-phuong-phap-nhan-lien-hop.html)

## 1. Cách giải phương trình chứa trị tuyệt đối

Trước tiên, chúng ta nhắc lại định nghĩa giá trị tuyệt đối của một số: 

$$
|a|=\begin{cases} a& \text{nếu } x \geqslant 0\\ -a& \text{nếu } x <0 \end{cases}
$$

 Từ đó, chúng ta có cách giải 2 dạng phương trình chứa trị tuyệt đối như sau:

1. $|A|=|B| \Leftrightarrow A=\pm B$;

2. $|A|= B$ ta xét hai khả năng:

   - nếu $B <0$ thì phương trình vô nghiệm;

   - nếu $B <0$ thì phương trình tương đương với $A=\pm B$.

Nếu $B$ là một biểu thức chứa $x$ thì phương trình đã cho tương đương với 

$$
\begin{cases} B \geqslant 0\\ A=\pm B 
\end{cases}
$$

 Để dễ cho việc kết hợp nghiệm, chúng ta thường tách thành hai trường hợp, hoặc hai hệ như sau: 

$$
|A|= B \Leftrightarrow \left[ \begin{array}{c} \begin{cases} B \geqslant 0\\ A=B \end{cases}\\ \begin{cases} B \geqslant 0\\ A=-B \end{cases} \end{array}\right.
$$

## 2. Ví dụ giải phương trình chứa trị tuyệt đối

**Ví dụ 1.** Giải phương trình 

$$
|x-3|=|2x+1|.
$$

**Hướng dẫn.**Phương trình đã cho tương đương với 

$$
\left[\begin{array}{l} x-3=2x+1\\ x-3=-(2x+1)\end{array}\right. 
\Leftrightarrow \left[\begin{array}{l}x=-4\\x=2\end{array}\right.
$$

**Ví dụ 2.** Giải phương trình 

$$
|x-3|=|x^2+3x-1|.
$$

**Hướng dẫn. **Phương trình đã cho tương đương với 

$$
\begin{aligned}
&\left[\begin{array}{l} x-3=x^2+3x-1\\ x-3=-(x^2+3x-1)\end{array}\right.\\ 
\Leftrightarrow & \left[\begin{array}{l} x^2+2x+2=0\text{ (vô nghiệm)}\\ x^2+4x-4=0\end{array}\right.\\ 
\Leftrightarrow & x=-2\pm 2\sqrt{2}.
\end{aligned}
$$

**Ví dụ 3.** Giải phương trình 

$$
|x+5|=3x+10.
$$

**Hướng dẫn.**Cách thứ nhất, chúng ta chia hai trường hợp:

- **Trường hợp 1.** Nếu $x+5 \geqslant 0 \Leftrightarrow x \geqslant -5$ thì phương trình đã cho trở thành

  $$
  x+5=3x+10.
  $$

  Giải phương trình này, tìm được $x=-\frac{5}{2}$. Nghiệm này thỏa mãn điều kiện $x \geqslant -5$ nên nhận.

- **Trường hợp 2.** Nếu $x+5 < 0 \Leftrightarrow x < -5$ thì phương trình đã cho trở thành

  $$
  -x-5=3x+10.
  $$

  Giải phương trình này, tìm được $x=-\frac{15}{4}$. Nghiệm này không thỏa mãn điều kiện $x \geqslant -5$ nên loại.

Kết luận, phương trình đã cho có nghiệm duy nhất $x=-\frac{5}{2}.$

Cách thứ hai, chúng ta biến đổi tương đương phương trình đã cho tương đương với hệ: 

$$
\begin{aligned}
&\begin{cases} 3x+10 \geqslant 0\\ \left[\begin{array}{l} x+5=3x+10\\x+5=-(3x+10)\end{array}\right. \end{cases} \\ 
\Leftrightarrow & \begin{cases} x\geqslant \frac{-10}{3}\\ \left[\begin{array}{l} x=-\frac{5}{2}\\x=-\frac{15}{4}\end{array}\right. \end{cases} \\ 
\Leftrightarrow & x=-\frac{5}{2}.
\end{aligned}
$$

**Ví dụ 4.** Giải phương trình 

$$
|3x – 2| = x^2+ 2x + 3.
$$

**Hướng dẫn. **Chúng ta xét hai trường hợp:

- **Trường hợp 1.** Khi $3x-2 \geqslant 0 \Leftrightarrow x \geqslant \frac{2}{3}$ thì phương trình đã cho trở thành

  $$
  3x-2 =x^2+2x+3.
  $$

  Phương trình này vô nghiệm.

- **Trường hợp 2.** Khi $3x-2 < 0 \Leftrightarrow x < \frac{2}{3}$  thì phương trình đã cho trở thành

  $$
  -3x+2=x^2+2x+3.
  $$

  Giải phương trình này, tìm được $x=\frac{-5\pm \sqrt{21}}{2}$. So sánh với điều kiện $x < \frac{2}{3}$ thấy cả hai nghiệm đều thỏa mãn.

Kết luận. Phương trình đã cho có hai nghiệm là $\frac{-5\pm \sqrt{21}}{2}$.

**Ví dụ 5.** Giải phương trình 

$$
\frac{x-1}{2x-3}=\frac{-3x+1}{|x+1|}.
$$

**Hướng dẫn. **Điều kiện $x\ne -1, x\ne \frac{3}{2}$. Chúng ta xét hai trường hợp:

- **Trường hợp 1.**Nếu $x+1>0 \Leftrightarrow x>-1$ thì phương trình đã cho trở thành

  $$
  \frac{x-1}{2x-3}=\frac{-3x+1}{x+1}.
  $$

  Biến đổi phương trình này được

  $$
  \frac{7x^{2}-11x+2}{-2x^{2}+x+3}=0.
  $$

  Giải phương trình này được nghiệm $x=\frac{11\pm \sqrt{65}}{14}$. So sánh thấy cả hai đều thỏa mãn các điều kiện $x\ne -1, x\ne \frac{3}{2}$ và $x>-1$ nên nhận cả hai nghiệm.

- **Trường hợp 2.**Nếu $x+1<0 \Leftrightarrow x<-1$ thì phương trình đã cho trở thành

  $$
  \frac{x-1}{2x-3}=\frac{-3x+1}{-x-1}.
  $$

  Giải phương trình này được nghiệm $x=\frac{11\pm \sqrt{41}}{10}$. So sánh thấy cả hai không thỏa mãn điều kiện $x<-1$ nên loại cả hai nghiệm.

Kết luận, tập nghiệm của phương trình đã cho là $S=\{\frac{11\pm \sqrt{65}}{14}\}.$

**Ví dụ 6.**Giải phương trình chứa dấu giá trị tuyệt đối sau: 

$$
x^2+4x-3|x+2|+4=0.
$$

**Hướng dẫn. **Chúng ta xét hai trường hợp:

- **Trường hợp 1.** Khi $x+2\geqslant 0 \Leftrightarrow x>\geqslant -2$ thì phương trình đã cho trở thành

  $$
  x^2+4x-3(x+2)+4=0.
  $$

  Giải phương trình này được nghiệm $x=-2,x=1$. Cả hai đều thỏa mãn điều kiện $x \geqslant -2$ nên nhận cả hai nghiệm.

- **Trường hợp 2.** Khi $x+2 <0 \Leftrightarrow x> <-2$ thì phương trình đã cho trở thành

  $$
  x^2+4x+3(x+2)+4=0.
  $$

  Giải phương trình này được nghiệm $x=-2,x=-5$. So sánh điều kiện $x <-2$ thì $x=-2$ bị loại, $x=-5$ thỏa mãn.

Kết luận, tập nghiệm của phương trình đã cho là $S=\{-5,-2,1\}$.

Đối với phương trình chứa nhiều dấu giá trị tuyệt đối mà không rơi vào các dạng trên, chúng ta thường lập bảng khử dấu giá trị tuyệt đối như sau.

**Ví dụ 7.**Giải phương trình chứa dấu giá trị tuyệt đối sau: 

$$
|x+1|+|x-1|=4.
$$

**Hướng dẫn. **

Ta lập bảng như sau, gọi là bảng khử dấu giá trị tuyệt đối hoặc bảng phá dấu giá trị tuyệt đối:

![giải phương trình chứa trị tuyệt đối băng cách lập bảng khử phá dấu giá trị tuyệt đối](assets/images/phuong-trinh-chua-tri-tuyet-doi-bang-khu-dau-gia-tri-tuyet-doi.jpg)

Từ đó, dễ dàng chia thành ba trường hợp:

- **Trường hợp 1.** Khi $x<-1$ thì phương trình đã cho trở thành

  $$
  -2x=4 \Leftrightarrow x=-2.
  $$

  Rõ ràng nghiệm này thỏa mãn điều kiện $x<-1$ nên nhận.

- **Trường hợp 2.** Khi $-1 \leqslant x<1$ thì phương trình đã cho trở thành

  $$
  2=4.
  $$

  Phương trình này vô nghiệm,

- **Trường hợp 3.** Khi $1 \leqslant x$ thì phương trình đã cho trở thành

  $$
  2x=4 \Leftrightarrow x=2.
  $$

  Nghiệm này cũng thỏa mãn điều kiện $x \geqslant 1$ nên nhận.

Tóm lại, phương trình đã cho có hai nghiệm $x=\pm 2$.

**Ví dụ 8.**Giải phương trình chứa trị tuyệt đối: 

$$
|x+4|-2|x+5|=-7.
$$

**Hướng dẫn. **Lập bảng xét dấu tương tự ví dụ 7, đáp số $x=1,x=-13$.
