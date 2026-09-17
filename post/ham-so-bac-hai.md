---
title: "Hàm số bậc hai: hiểu đồ thị parabol"
description: "Nhận biết đỉnh, trục đối xứng và cách vẽ đồ thị qua từng bước."
category: "Toán học"
grade: 10
type: "Bài học"
date: "2026-09-17"
tags: ["toán 10", "đại số"]
---

## 1. Hàm số bậc hai là gì?
Hàm số bậc hai có dạng $y=ax^2+bx+c$, trong đó $a\ne 0$. Đồ thị của hàm số là một đường parabol.

- Nếu $a>0$, parabol có bề lõm hướng lên.
- Nếu $a<0$, parabol có bề lõm hướng xuống.

## 2. Tìm đỉnh và trục đối xứng
Đặt $\Delta=b^2-4ac$. Đỉnh của parabol là:

$$
I\left(-\frac{b}{2a},-\frac{\Delta}{4a}\right)
$$

Trục đối xứng có phương trình $x=-\frac{b}{2a}$.

## 3. Ví dụ: vẽ đồ thị
Với $y=x^2-4x+3$, ta có $a=1$, $b=-4$, $c=3$.

1. Tìm hoành độ đỉnh: $x_I=2$.
2. Thay vào hàm số: $y_I=4-8+3=-1$.
3. Đánh dấu đỉnh $I(2,-1)$ và trục đối xứng $x=2$.
4. Lấy thêm các điểm trong bảng, rồi nối thành đường cong mềm.

| $x$ | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| $y$ | 3 | 0 | -1 | 0 | 3 |

> Các điểm có hoành độ cách đều trục đối xứng sẽ có cùng tung độ.

## 4. Con thử sức nhé
Tìm đỉnh của parabol $y=2x^2-4x+1$.

**Gợi ý:** Tính hoành độ đỉnh trước, sau đó thay vào hàm số.

**Đáp án:** $I(1,-1)$.

## 5. Luyện tập tương tác

```quiz
type: choice
question: 'Đỉnh của parabol $y=x^2-4x+3$ là điểm nào?'
options:
  - '$I(2,-1)$'
  - '$I(-2,1)$'
  - '$I(2,3)$'
answer: 1
explanation: 'Ta có $x_I=-b/(2a)=2$. Thay $x=2$ vào hàm số được $y_I=-1$.'
```

```quiz
type: text
question: 'Trục đối xứng của $y=2x^2-4x+1$ là $x=a$. Nhập giá trị của $a$.'
answers: ['1', '1,0', '1.0']
explanation: 'Hoành độ đỉnh là $a=-(-4)/(2\times2)=1$, nên trục đối xứng là $x=1$.'
```
