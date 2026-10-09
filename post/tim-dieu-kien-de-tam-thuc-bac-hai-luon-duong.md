---
title: Tìm điều kiện để tam thức bậc hai luôn dương, luôn âm
description: Tìm điều kiện của tham số m để tam thức bậc hai (bất phương trình bậc
  2) luôn dương, luôn âm với mọi x thuộc R, nghiệm đúng với mọi số thực x, vô nghiệm...
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Tam thức bậc hai
- Đại số 10
grade: 10
---

# Tìm điều kiện của tham số để tam thức bậc hai luôn dương, luôn âm

Từ [định lí về dấu tam thức bậc hai](/bai-viet/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai.html) chúng ta có thể giải được các phương trình, bất phương trình tích, [phương trình chứa căn, giải bất phương trình chứa căn](/bai-viet/phuong-trinh-chua-can-bat-phuong-trinh-chua-can.html). Đồng thời, từ đó có thể suy ra cách giải bài toán tìm điều kiện của tham số để tam thức bậc 2 (bất phương trình bậc hai) luôn dương, luôn âm với mọi $x$ thuộc $\mathbb{R}$, tìm điều kiện để bất phương trình nghiệm đúng với mọi số thực $x$, tìm điều kiện để bất phương trình vô nghiệm… Đây là một dạng toán quan trọng, xuyên suốt chương trình Đại số và Giải tích ở cấp THPT.

Nếu bài viết hữu ích, bạn hãy tặng tôi 1 cốc cafe vào số tài khoản Agribank 3205215033513.  Xin cảm ơn!

Để hiểu về các dạng toán tìm điều kiện để phương trình luôn đúng, vô nghiệm… chúng ta cần thành thạo các dạng bài [Lý thuyết và bài tập dấu tam thức bậc hai](/bai-viet/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai.html).

**✅Xem thêm [ĐỀ CƯƠNG HỌC KÌ 2 TOÁN 10](/bai-viet/de-cuong-hoc-ki-2-toan-10.html)** 

## 1. Tìm điều kiện để tam thức bậc hai luôn dương, luôn âm

**Bài toán 1.** Cho [tam thức bậc hai](/bai-viet/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai.html) $f(x)=ax^2 +bx+c$, tìm điều kiện của tham số $m$ để $f(x) >0$ với mọi $x$ thuộc $\mathbb{R}$.

Để giải quyết bài toán trên, chúng ta cần xét hai trường hợp:

- Khi $a=0$, ta kiểm tra xem lúc đó $f(x)$ như thế nào, có thỏa mãn yêu cầu bài toán hay không.

- Khi $a\ne 0$, thì $f(x)$ là một tam thức bậc hai, nên $f(x)>0$ với mọi $x\in \mathbb{R}$ khi và chỉ khi

  $$
  \begin{cases} a>0\\ \Delta <0 \end{cases}
  $$

Tương tự, chúng ta có các bài toán sau:

**Bài toán 2.** Cho $f(x)=ax^2 +bx+c$, tìm điều kiện của tham số $m$ để $f(x) <0$ với mọi $x$ thuộc $\mathbb{R}$.

Cần xét hai trường hợp:

- Kiểm tra khi $a=0$.

- Khi $a\ne 0$, thì $f(x)>0$ với mọi $x\in \mathbb{R}$ tương đương với

  $$
  \begin{cases} a<0\\ \Delta <0 \end{cases}
  $$

**Bài toán 3.** Cho $f(x)=ax^2 +bx+c$, tìm điều kiện của tham số $m$ để $f(x) \ge 0$ với mọi $x$ thuộc $\mathbb{R}$.

Xét hai trường hợp:

- Khi $a=0$, ta kiểm tra xem lúc đó $f(x)$ như thế nào, có thỏa mãn yêu cầu bài toán hay không.

- Khi $a\ne 0$, thì $f(x)>0$ với mọi $x\in \mathbb{R}$ tương đương với

  $$
  \begin{cases} a>0\\ \Delta \le 0 \end{cases}
  $$

**Bài toán 4.** Cho hàm số $f(x)=ax^2 +bx+c$, tìm điều kiện của tham số $m$ để $f(x) \le 0$ với mọi $x$ thuộc $\mathbb{R}$.

Để giải quyết bài toán trên, chúng ta cần xét hai trường hợp:

- Khi $a=0$, ta kiểm tra xem lúc đó $f(x)$ như thế nào, có thỏa mãn yêu cầu bài toán hay không.

- Khi $a\ne 0$, thì $f(x)>0$ với mọi $x\in \mathbb{R}$ tương đương với

  $$
  \begin{cases} a<0\\ \Delta \le 0 \end{cases}
  $$

**Ví dụ 1.** Tìm $m$ để hàm số $f(x)=3 x^{2}+ x+m+1>0$ với mọi $x\in \mathbb{R}$.

**Hướng dẫn.** Hàm số $f(x)=3 x^{2}+ x+m+1>0$ với mọi $x\in \mathbb{R}$ khi và chỉ khi 

$$
\begin{cases} a=3>0\\ \Delta =-12m-11<0 \end{cases}
$$

 Giải hệ này, từ đó tìm được đáp số $m<\frac{-11}{12}$.

**Ví dụ 2.**  Tìm $m$ để biểu thức sau luôn dương với mọi $x$ 

$$
f(x)=(m-1) x^{2}+(2 m+1) x+m+1.
$$

**Hướng dẫn.** Chúng ta xét hai trường hợp:

- **Trường hợp 1.** $m-1=0 \Leftrightarrow m=1$. Lúc này bất phương trình $f(x)>0$ tương đương với $3 x+2>0 \Leftrightarrow x>-\frac{2}{3}$ Rõ ràng tập nghiệm này không đáp ứng được mong muốn của đề bài (đề bài yêu cầu là $f(x)>0$ với mọi $x\in R$), do đó $m=1$ không thỏa mãn yêu cầu.

- **Trường hợp 2.**$m \neq 1$, khi đó  $f(x)>0,\,\forall x \in \mathbb{R}$ tương đương với $\begin{array}{l} & \left\{\begin{array}{l} m-1>0 \\ \Delta=4 m+5<0 \end{array}\right. \\ \Leftrightarrow& \left\{\begin{array}{l} m>1 \\ m<-\frac{5}{4} \end{array}\right. \end{array}$ Rất tiếc hệ này cũng vô nghiệm.

Tóm lại, không tìm được giá trị nào của $m$ thỏa mãn yêu cầu đề bài.

## 2. Tìm điều kiện để bất phương trình luôn đúng, vô nghiệm

Đối với các bài toán tìm điều kiện để bất phương trình luôn đúng (nghiệm đúng) với mọi $x$ thuộc $\mathbb{R}$ thì ta làm như phần trên. Đối với các bài toán tìm điều kiện để bất phương trình vô nghiệm thì ta sử dụng các lập luận sau

- Bất phương trình $f(x)>0$ vô nghiệm tương đương với

  $$
  f(x) \le 0, \forall x\in \mathbb{R}
  $$

- Bất phương trình $f(x)<0$ vô nghiệm tương đương với

  $$
  f(x) \ge 0, \forall x\in \mathbb{R}
  $$

- Bất phương trình $f(x)\ge 0$ vô nghiệm tương đương với

  $$
  f(x) < 0, \forall x\in \mathbb{R}
  $$

- Bất phương trình $f(x)\le 0$ vô nghiệm tương đương với

  $$
  f(x) > 0, \forall x\in \mathbb{R}
  $$

Đây chính là 4 bài toán đã xét ở phần trước. Sau đây chúng ta sử dụng các kết quả trên để giải quyết một số bài tập.

**Ví dụ 1.** Tìm tất cả các giá trị của tham số $m$ để bất phương trình 

$$
(m-1){{{x}}^{2}}+2(m-1)x+1\ge 0
$$

 nghiệm đúng với $\forall x\in \mathbb{R}$.

**Hướng dẫn.** Bất phương trình nghiệm đúng với mọi $x\in \mathbb{R}$ thì cũng chính là 

$$
f(x)\ge 0,\, \forall x\in \mathbb{R},
$$

  trong đó $f(x)=(m-1){{x}^{2}}+2(m-1)x+1$. Do đó, chúng ta xét hai trường hợp:

- **Trường hợp 1.** Khi $m=1$, bất phương trình trở thành

  $$
  0x^2+0x+1\ge 0
  $$

  Rõ ràng bất phương trình này luôn đúng với mọi $x\in \mathbb{R}$. Nên giá trị $m=1$ thỏa mãn yêu cầu.

- **Trường hợp 2.** Khi $m\ne 1$, thì $f(x)$ là tam thức bậc hai nên $f(x) \ge 0,\, \forall x\in \mathbb{R}$ khi và chỉ khi

  $$
  \begin{aligned}
  &\begin{cases} m-1>0 \\ {{(m-1)}^{2}}-(m-1)\le 0 \\ \end{cases}\\ \Leftrightarrow & \begin{cases} m>1 \\ {{m}^{2}}-3m+2\le 0 \\ \end{cases}\\ \Leftrightarrow & \begin{cases} m>1 \\ 1\le m\le 2 \\ \end{cases} \Leftrightarrow 1<m\le 2
  \end{aligned}
  $$

**Kết luận.** Kết hợp cả 2 trường hợp, chúng ta có đáp số $m\in \left[ 1;2 \right]$.

**Ví dụ 2.** Cho hàm số $f(x)=(m-1){{x}^{2}}+2mx-3$ trong đó $m$ là tham số. Tìm tất cả giá trị của $m$ để bất phương trình $f(x)>0$ vô nghiệm.

**Hướng dẫn.** Chúng ta xét hai trường hợp:

- Khi $m=1$, bất phương trình $f(x)>0$ trở thành

  $$
  2x-3>0\Leftrightarrow x>\frac{3}{2}.
  $$

  Suy ra $m=1$ không thỏa mãn yêu cầu.

- Khi $m\ne 1$ thì $f(x)$ là tam thức bậc hai. Yêu cầu bài toán tương đương với

  $$
  f(x)\le 0,\forall x\in \mathbb{R}
  $$

  Điều kiện cần và đủ là

  $$
  \left\{ \begin{aligned} & m-1<0 \\ & \Delta’={{m}^{2}}+3(m-1)\le 0 \\ \end{aligned} \right.
  $$

  Giải hệ bất phương trình trên, tìm được đáp số $m\in \left[ \frac{-3-\sqrt{21}}{2};\frac{-3+\sqrt{21}}{2} \right].$

**Ví dụ 3.** Cho $f(x)=(m-2){{x}^{2}}-2(2-m)x+2m-1$, với $m$ là tham số.

1. Tìm tất cả các giá trị của $m$ để phương trình $f(x)=0$ nhận $x=-2$ làm nghiệm.

2. Tìm tất cả các giá trị của $m$ để hàm số $y=\sqrt{f(x)}$ được xác định với mọi giá trị của $x\in \mathbb{R}$.

**Hướng dẫn.** 

1. Phương trình $f(x)=0$ nhận $x=-2$ làm nghiệm khi và chỉ khi $f(-2)=0$. Điều này tương đương với

$$
(m-2){{(-2)}^{2}}-2(2-m)(-2)+2m-1=0\Leftrightarrow m=\frac{1}{2}
$$

 Vậy $m=\frac{1}{2}$ là giá trị cần tìm.

2. Hàm số $y=\sqrt{f(x)}$ được xác định với mọi giá trị của $x\in \mathbb{R}$ khi và chỉ khi: 

$$
f(x)\ge 0,\forall x\in \mathbb{R}
$$

 $$
 \Leftrightarrow (m-2){{x}^{2}}-2(2-m)x+2m-1\ge 0,\forall x\in \mathbb{R}\,\,\,\,(1)
 $$

 Chúng ta xét hai trường hợp:

- **Trường hợp 1:** $m-2=0\Leftrightarrow m=2$ thì (1) có dạng $3\ge 0,\forall x\in \mathbb{R}$ (luôn đúng)

- **Trường hợp 2:** $m-2\ne 0\Leftrightarrow m\ne 2$. Lúc đó (1) xảy ra khi và chỉ khi:

  $$
  \begin{aligned}
  &\left\{ \begin{array}{l} m \ne 2\\ \Delta’ \le 0\\ m – 2 > 0 \end{array} \right.\\ \Leftrightarrow &\left\{ \begin{array}{l} m > 2\\ {(2 – m)^2} – (m – 2)(2m – 1) \le 0 \end{array} \right.\\ \Leftrightarrow &\left\{ \begin{array}{l} m > 2\\ (2 – m)(m + 1) \le 0 \end{array} \right.\\ \Leftrightarrow &\left\{ \begin{array}{l} m > 2\\ \left[ \begin{array}{l} m \le – 1\\ m \ge 2 \end{array} \right. \end{array} \right. \Leftrightarrow m > 2
  \end{aligned}
  $$

**Kết luận:** Vậy các số thực $m\ge 2$ thỏa mãn yêu cầu bài toán.

## 3. Bài giảng về bất phương trình bậc 2

Chi tiết về các dạng toán trên, mời các bạn xem trong video sau:

https://youtu.be/7Kl3U3qa5HY
