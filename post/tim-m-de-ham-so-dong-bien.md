---
title: Tìm m để hàm số đồng biến trên các khoảng
description: Tìm tất cả các giá trị thực của tham số m để hàm số y=1/3x^3-(m-1) x^2-(m-3)
  x+1 đồng biến trên các khoảng (-3;-1) và (0;3)
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 12
- Đơn điệu hàm số
- Đồng biến nghịch biến
- Khảo sát hàm số
grade: 12
---

Xem chi tiết các dạng toán về tính đơn điệu của hàm số [Sự đồng biến nghịch biến của hàm số](/bai-viet/su-dong-bien-nghich-bien-cua-ham-so.html)

**Bài toán.** Tìm tất cả các giá trị thực của tham số $m$ để hàm số 

$$
y=\frac{1}{3}x^{3}-(m-1)x^{2}-(m-3)x+1
$$

 đồng biến trên các khoảng $(-3;-1)$ và $(0;3)$.

**Hướng dẫn.
- Đạo hàm của hàm số đã cho là

  $$
  y’=x^{2}-2(m-1)x-(m-3)
  $$

- Hàm số đã cho đồng biến trên các khoảng $(-3;-1)$ và $(0;3)$ khi và chỉ khi

  $$
  y’\geqslant0,\forall x\in(-3;1)\cup(0;3)
  $$

- Điều kiện này tương đương với

  $$
  \begin{aligned}
  & m(2x+1)\leqslant x^{2}+2x+3,\forall x\in(-3;1)\cup(0;3)\\ 
  \Leftrightarrow & \begin{cases} 
  m\leqslant\frac{x^{2}+2x+3}{2x+1},\forall x\in[0;3]\\ 
  m\geqslant\frac{x^{2}+2x+3}{2x+1},\forall x\in[-3-1] 
  \end{cases}
  \end{aligned}
  $$

  Xét hàm số $g(x)=\frac{x^{2}+2x+3}{2x+1}$ trên đọan $[-3;-1]$

  chúng ta có bảng biến thiên như sau:

![Tìm tất cả các giá trị thực của tham số m để hàm số y=1/3x^3-(m-1) x^2-(m-3) x+1 đồng biến trên các khoảng (-3;-1) và (0;3)](assets/images/tim-m-de-ham-so-dong-bien-Tim-dieu-kien-de-ham-so-dong-bien-300x175.png)

Do đó, điều kiện $m\geqslant\frac{x^{2}+2x+3}{2x+1},\forall x\in[-3-1]$ tương đương với

$$
m\geqslant\max\limits _{[-3;-1]}g(x)=-1.
$$

- Làm tương tự, điều kiện $m\leqslant\frac{x^{2}+2x+3}{2x+1},\forall x\in[0;3]$

  cho ta $m\leqslant2.$

Kết hợp hai điều kiện, được đáp số cần tìm là $-1\leqslant m\leqslant2.$
