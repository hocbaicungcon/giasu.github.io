---
title: Lý thuyết và bài tập dấu nhị thức bậc nhất
description: Lý thuyết và bài tập dấu nhị thức bậc nhất. Định lí về dấu nhị thức bậc
  nhất, ứng dụng dấu của nhị thức giải bất phương trình tích, bpt thương, chứa giá
  trị tuyệt đối
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Nhị thức bậc nhất
- Xét dấu
grade: 10
---

## 1. Định lí về dấu nhị thức bậc nhất

### 1.1. Nhị thức bậc nhất là gì?

Nhị thức bậc nhất là các biểu thức có dạng $ax+b$, trong đó $a ≠ 0$. Cho một nhị thức bậc nhất $f(x)=ax+b$ thì số $x₀ = -b/a$ làm cho $f(x)=0$ được gọi là nghiệm của nhị thức bậc nhất.

### 1.2. Định lí về dấu nhị thức bậc nhất

Bây giờ, chúng ta viết lại nhị thức $f(x)$ thành 

$$
f(x)=a\left(x-x_0\right)
$$

 Dễ thấy, khi $x>x_0 \Leftrightarrow x-x_0>0$ thì $f(x)$ và hệ số $a$ cùng dấu với nhau, ngược lại, khi $x<x_0 \Leftrightarrow x-x_0<0$ thì $f(x)$ và hệ số $a$ trái dấu với nhau. Từ đó chúng ta có định lý về dấu của nhị thức bậc nhất như sau:

Cho nhị thức $f(x)=ax+b$ với $a\ne 0$ thì

- $f(x)$ cùng dấu với hệ số $a$ với mọi $x >-b/a,$

- $f(x)$ trái dấu với hệ số $a$ với mọi $x <-b/a.$

Để dễ nhớ, ta lập bảng sau và sử dụng quy tắc **lớn cùng – bé khác**, nghĩa là ứng với những giá trị của $x$ ở bên phải nghiệm $x_0$ thì $f(x)$ và hệ số $a$ có cùng dấu, còn ở bên trái thì ngược dấu với hệ số $a$.

Bảng xét dấu của nhị thức bậc nhất

![định lí dấu nhị thức bậc nhất f(x)=ax+b](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-dau-nhi-thuc-bac-nhat.jpg)

Cụ thể, với trường hợp $a>0$ chúng ta có bảng xét dấu của $f(x)$ như sau:

![bảng xét dấu của nhị thức bậc nhất khi hệ số a dương](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bang-xet-dau-nhi-thuc-bac-nhat-he-so-a-duong.jpg)

còn khi $a<0$ chúng ta có bảng xét dấu như sau:

![bxd nhị thức bậc nhất khi hệ số a <0](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bang-xet-dau-nhi-thuc-bac-nhat-he-so-a-am.jpg)

## 2. Ví dụ dấu của nhị thức bậc nhất

**Ví dụ 1.** Xét dấu biểu thức $f(x)=3x+6$.

*Hướng dẫn.*Ta có $3x+6=0 \Leftrightarrow x=-2.$ Hệ số $a=3$ là số dương, nên ta có bảng xét dấu sau đây:

![bang xet dau cua nhi thuc 3x+6](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bang-xet-dau-cua-nhi-thuc-3x6-1.jpg)

Như vậy, $f(x)>0 \Leftrightarrow x\in (-2,+\infty)$, $f(x)<0 \Leftrightarrow x\in (-\infty,-2)$ và $f(x)=0 \Leftrightarrow x=-2.$

**Ví dụ 2.** Xét dấu biểu thức $f(x)=1-3x$.

*Hướng dẫn.*Ta có $1-3x=0 \Leftrightarrow x=\frac{1}{3}.$ Hệ số $a=-3$ là số âm, nên ta có bảng xét dấu sau đây:

![bang xet dau cua nhi thuc 1-3x](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bang-xet-dau-cua-nhi-thuc-1-3x.jpg)

Như vậy, $f(x)>0 \Leftrightarrow x\in (-\infty;\frac{1}{3})$, $f(x)<0 \Leftrightarrow x\in (\frac{1}{3};+\infty)$ và $f(x)=0 \Leftrightarrow x=\frac{1}{3}.$

## 3. Ứng dụng định lý dấu của nhị thức bậc nhất

- Xét dấu các biểu thức có dạng tích — thương các nhị thức bậc nhất, từ đó sử dụng để giải bất phương trình hoặc khảo sát hàm số.

- Lập bảng phá dấu giá trị tuyệt đối.

### 3.1. Cách lập bảng xét dấu của tích, thương các nhị thức bậc nhất

Để xét dấu của biểu thức $P(x)$ gồm tích hoặc thương các nhị thức bậc nhất, ta thực hiện như sau:

- Tìm các nghiệm của từng nhị thức bậc nhất tạo nên $P(x)$, tức là tìm nghiệm hoặc những điểm làm cho $P(x)$ không xác định (tức nghiệm của mẫu thức, nếu có): $x_1,x_2,\dots,x_n$.

- Lập bảng xét dấu của $P(x)$ gồm có:

Dòng đầu tiên gồm các giá trị $x_1,x_2,\dots,x_n$ được sắp xếp theo thứ tự từ bé đến lớn.

- Các dòng tiếp theo lần lượt là các nhị thức và dấu của chúng.

- Dòng cuối cùng là dấu của $P(x)$, sử dụng quy tắc nhân dấu đã học ở cấp II (tức là số dương nhân số dương bằng số dương, số âm nhân số âm bằng số dương,…)

**Ví dụ 3.** Lập bảng xét dấu biểu thức 

$$
P(x)=(x-1)(x+2)
$$

***Hướng dẫn.***Đầu tiên, chúng ta tìm nghiệm của từng nhị thức, có:

- $x-1=0 \Leftrightarrow x=1,$

- $x+2=0 \Leftrightarrow x=-2.$

Sau đó, ta lập bảng xét dấu của $P(x)$ như sau:

![cách lập bảng xét dấu của một tích](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-lap-bang-xet-dau-cua-mot-tich.jpg)

**Chú ý.** Để kiểm tra dấu của một khoảng nào $(a;b)$ đó đúng chúng ta chỉ cần chọn một giá trị $x_0$ bất kì thuộc khoảng $(a,b)$ và tính giá trị của $f(x_0)$ đó.

**Ví dụ 4.** Lập bảng xét dấu của biểu thức 

$$
f(x)=(x+2)(x^2+5x-6).
$$

**Hướng dẫn.** Chúng ta đưa biểu thức $f(x)$ về tích các nhị thức bậc nhất bằng cách phân tích $x^2+5x-6=(x-1)(x+6)$. Do đó, biểu thức $f(x)$ trở thành

$$
f(x)=(x+2)(x-1)(x+6)
$$

 Bảng xét dấu như sau:

![bang xet dau cua tich](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bang-xet-dau-cua-tich.jpg)

**Ví dụ 5.**Lập bảng xét dấu của biểu thức 

$$
g(x)=\frac{x+1}{x-7}.
$$

**Hướng dẫn.** Chúng ta có

- $g(x)$ không xác định khi $x=7;$

- $g(x)=0 \Leftrightarrow x=-1$

Từ đó có bảng xét dấu như sau:

![bảng xét dấu của một thương](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bang-xet-dau-cua-mot-thuong.jpg)

**Ví dụ 6.**Lập bảng xét dấu của biểu thức 

$$
h(x)=\frac{1}{x+2}-\frac{3}{x+4}
$$

**Hướng dẫn.**Rõ ràng biểu thức $h(x)$ chưa có dạng tích/thương các nhị thức bậc nhất, nên chúng ta cần quy đồng giữ lại mẫu của biểu thức đó. Cụ thể như sau 

$$
h(x)=\frac{-2(x+1)}{\left( x+4\right) \left( x+2\right) }
$$

Từ đó lập được bảng xét dấu như hình vẽ dưới đây (có thể ghép dòng $-2$ vào với $x+1$ thành $-2x-2$):

![cach lap bang xet dau cua mot thuong.jpg](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-cach-lap-bang-xet-dau-cua-mot-thuong.jpg)

#### Một số lưu ý khi lập bảng xét dấu một biểu thức:

- Dấu của các biểu thức $(ax+b)^{2n}$ luôn là dấu dương hoặc bằng không, chỉ bằng không tại mỗi $x=-b/a.$

- Dấu của các biểu thức $(ax+b)^{2n+1}$ luôn cùng dấu với nhị thức $ax+b.$

- Nếu biểu thức $f(x)$ chỉ gồm tích hoặc thương các nhân tử có dạng $(ax+b)^n$ với số mũ lẻ (tức $f(x)$ chỉ có nghiệm đơn hoặc nghiệm bội lẻ) thì dấu của $f(x)$ sẽ tuân theo quy luật đan dấu. Do đó, trong thực hành ta chỉ cần lập bảng xét dấu có hai dòng, hoặc vẽ trục xét dấu, chẳng hạn biểu thức $h(x)$ ở trên có thể lập bảng xét dấu ngắn gọn như sau:

![cách lập nhanh bảng xét dấu](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-cach-lap-nhanh-bang-xet-dau.jpg)

### 3.2. Sử dụng dấu nhị thức bậc nhất giải bất phương trình tích, bất phương trình thương

Phương pháp chung để giải các bất phương trình tích, thương là:

- Tìm điều kiện xác định và quy đồng không bỏ mẫu các phân phức.

- Phân tích bất phương trình thành tích, thương các nhị thức bậc nhất.

- Lập bảng xét dấu cho bất phương trình và kết luận nghiệm.

**Ví dụ 7.**Giải bất phương trình sau: 

$$
(2x-3)(4-5x)+(2x-3)>0
$$

**Hướng dẫn.**Biến đổi bất phương trình thành 

$$
\begin{aligned}
&-5\left( x-1\right) \left( 2x-3\right) >0\\ \Leftrightarrow &\left( x-1\right) \left( 2x-3\right)<0
\end{aligned}
$$

Bảng xét dấu cho vế trái của bất phương trình cuối cùng này như sau:

![giai bat phuong trinh tich](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-giai-bat-phuong-trinh-tich.jpg)

Suy ra, tập nghiệm của bất phương trình đã cho là $S=\left(1;\frac{3}{2}\right)$

**Ví dụ 8.**Giải bất phương trình sau: 

$$
\frac{4x+3}{\left( x+2\right) ^{2}}-\frac{4}{x+4}<0
$$

**Hướng dẫn.**Điều kiện xác định $x\ne -4;x\ne -2$. Chúng ta quy đồng giữ lại mẫu được bất phương trình đã cho tương đương với 

$$
\frac{3x-4}{\left( x+4\right) \left( x+2\right) ^{2}}<0
$$

 Lập bảng xét dấu cho vế trái được:

![giải bất phương trình chứa ẩn ở mẫu bằng lập bxd](assets/images/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat-bat-phuong-trinh-chua-an-o-mau.jpg)

Suy ra, tập nghiệm của bất phương trình đã cho là $S=\left(-4;-2\right)\cup \left(-2;\frac{4}{3}\right ).$

**Ví dụ 9.** Giải các bất phương trình sau:

- $(2x+3)^2-(x-2)^2 \geqslant 0$

- $(x-3)^4-1 \leqslant 0$

- $\frac{1}{x} >1$

- $\frac{x+2}{3x-1} \geqslant -2$

- $\frac{30}{x+1}-\frac{24}{x+2}+\frac{3}{x+3}+1 >0$

Sau khi đã học cả dấu tam thức bậc hai, các em có thể tham khảo video sau:

[https://www.youtube.com/watch?v=rKaFF_F1oAc](https://www.youtube.com/watch?v=rKaFF_F1oAc)

### 3.3. Sử dụng dấu nhị thức bậc nhất giải bất phương trình chứa dấu giá trị tuyệt đối

Về phương trình chứa dấu giá trị tuyệt đối xin mời các bạn xem tại đây [Phương trình chứa trị tuyệt đối](/bai-viet/phuong-trinh-chua-tri-tuyet-doi.html)

#### Bất phương trình chứa ẩn trong dấu giá trị tuyệt đối cơ bản

Bằng cách áp dụng tính chất của giá trị tuyệt đối ta có thể dễ dàng giải các bất phương trình dạng $| f ( x ) |< a$ và $| f ( x ) | > a$ với $a > 0$ cho trước.

- $|f(x)| <a \Leftrightarrow \begin{cases} -a<f(x)\\ f(x)<a \end{cases}$ hay viết gọn là $-a<f(x)<a$

- $f(x)>a \Leftrightarrow \left[ \begin{array}{l} f(x)<-a\\ f(x)>a \end{array}\right.$

#### Bất phương trình nhiều dấu giá trị tuyệt đối cơ bản

Chúng ta lập bảng khử dấu giá trị tuyệt đối, chi tiết về phương pháp này xin mời các bạn xem một ví dụ sau:

**Ví dụ 10.**Giải bất phương trình
