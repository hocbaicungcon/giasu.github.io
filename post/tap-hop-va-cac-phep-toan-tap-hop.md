---
title: Toán 10 – Tập hợp và các phép toán tập hợp
description: Bài này giới thiệt Lý thuyết tập hợp (tập hợp là gì, tập hợp con là gì)
  và các phép toán tập hợp (các phép toán hợp của hai tập hợp, giao của hai tập hợp,
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 10
- Tập hợp
grade: 10
---

# Tập hợp và các phép toán tập hợp

Bài này giới thiệt Lý thuyết tập hợp (tập hợp là gì, tập hợp con là gì) và các phép toán tập hợp (các phép toán hợp của hai tập hợp, giao của hai tập hợp, hiệu của hai tập hợp. Bài tập các em có thể tham khảo trong bài viết [Bài tập Tập hợp Toán 10](/bai-viet/bai-tap-tap-hop-toan-10.html)

## 1. Khái niệm tập hợp

Tập hợp là khái niệm cơ bản của toán học, không định nghĩa. Ta hiểu rằng, một tập hợp là một nhóm, một sự tụ tập các phần tử (đối tượng) có chung tính chất nào đó, như tập hợp các số tự nhiên, tập hợp các số thực, tập hợp các học sinh trong một lớp, tập các hình tứ giác, tập hợp các chữ cái trong bảng chữ cái tiếng Anh… Tập hợp thường kí hiệu bằng chữ cái in hoa. Ví dụ, tập hợp các số tự nhiên kí hiệu là $\mathbb{N},$ tập hợp các số thực kí hiệu là $\mathbb{R}…$

Mỗi một tập hợp thì gồm có các *phần tử*, ví dụ tập hợp các số tự nhiên $\mathbb{N}$ thì gồm có các phần tử: $1,2,3,4,…$ Ta thấy số 1 nằm trong tập $\mathbb{N},$ khi đó ta nói, “1 là một phần tử của tập $\mathbb{N}$” hoặc “1 thuộc tập $\mathbb{N}$” và viết là $1\in \mathbb{N};$ nhưng số $-2$ không nằm trong $\mathbb{N},$ nên ta nói “$-2$ không thuộc $\mathbb{N}$” hoặc “$-2$ không là phần tử của $\mathbb{N}$” và viết là $-2\notin \mathbb{N}.$

Tổng quát, để nói $a$ là phần tử của tập hợp $X$ ta viết $a\in X$, $a$ không là phần tử của tập hợp $X$ ta viết $a\notin X.$

### Các xác định một tập hợp, cách cho tập hợp

Tập hợp được hoàn toàn xác định bởi các phần tử của nó, mỗi phần tử chỉ được kể tên một lần, thứ tự các phần tử là không quan trọng, ví dụ $\{1,2,3\}$ và $\{3,1,2\}$ là cùng một tập hợp. Một tập hợp được hoàn toàn xác định nếu ta liệt kê được tất cả các phần tử của nó, hoặc mô tả được các phần tử của nó có đặc điểm, tính chất gì.

- **Liệt kê các phần tử của tập hợp.** Nếu ta biết rõ các phần tử của một tập hợp thì ta có thể liệt kê chúng, đặt trong cặp ngoặc nhọn. Chẳng hạn, tập hợp $S$ các nghiệm của phương trình $x^2-3x+2=0$ là $S=\{1;2\}$, tập hợp $P$ gồm các ước dương của 12 là $P=\{1;2;3;4;6;12\}$. Khi các phần tử của một tập hợp quá nhiều, ta không thể viết hết ra được thì có thể dùng dấu ba chấm, chẳng hạn, tập hợp $A$ các số tự nhiên lẻ bé hơn 1000 là $A=\{1;3;5;…;997;999\}$.

- **Mô tả tính chất đặc trưng của tập hợp.** Đôi khi, ta có thể viết một tập hợp bằng cách chỉ ra tính chất đặc trưng của nó, chẳng hạn tập hợp $S$ các nghiệm của phương trình $x^2-3x+2=0$ có thể viết $S=\{x\in \mathbb{R}\mid x^2-3x+2=0$, tập hợp $A$ các số tự nhiên lẻ bé hơn $1000$ là $A=\{n\in \mathbb{N} \mid n=2k+1,k\in \mathbb{N},0\leqslant k\leqslant 448\}.$ Kí hiệu là “$\mid$” đọc là “sao cho”, đôi khi còn được kí hiệu bằng dấu hai chấm.

Chú ý:

- Khi liệt kê các phần tử của tập hợp, chúng ta không cần quan tâm đến thứ tự của chúng. Tập $A$ gồm ba phần tử $1,2,3$ có thể viết là $A=\{1,2,3\}$ hoặc $A=\{1,3,2\}$ đều được.\

- Mỗi một phần tử của tập hợp chỉ được liệt kê một lần.

**Ví dụ 1.** Hãy xác định các tập hợp sau bằng cách liệt kê tất cả các phần tử của nó:

- $A= \left\{x\in \mathbb{Z}, -3<x<2 \right\}$

- $B= \left\{x\in \mathbb{Q}, x^3-3x=0 \right\}$

- $C= \left\{x\in \mathbb{Z}, 4x^2-8x+3=0 \right\}$

**Ví dụ 2.** Hãy xác định các tập hợp sau bằng cách chỉ ra tính chất đặc trưng của nó:

- $A= \left\{2,3,5,7,11,13\right\}$

- $B= \left\{0,5,10,15,20 \right\}$

- $C= \left\{-\sqrt{5},-2,-\sqrt{3},-\sqrt{2},-1,0,1,\sqrt{2},\sqrt{3},2,\sqrt{5} \right\}$

- $D= \left\{X,U,A,N,T,R,O,G,B \right\}$

### Tập con của một tập hợp

Trong các tập hợp, có một tập hợp đặc biệt, nó không chứa phần tử nào cả, được gọi là tập rỗng, kí hiệu $\varnothing.$ Chẳng hạn, tập hợp các nghiệm thực của phương trình $x^2+1=0$ là tập rỗng.

Tập $A$ là tập con của $B$, kí hiệu là $A\subset B$ hoặc $B\supset A$, khi và chỉ khi mọi phần tử của $A$ đều là phần tử của $B.$ 

$$
A\subset B \Leftrightarrow x\in B,\, \forall x\in A.
$$

 Hiển nhiên, một tập hợp bất kì luôn là tập con của chính nó. Quy ước tập rỗng là tập con của mọi tập hợp.

**Ví dụ 3.** Cho tập $E=\left\{x\in \mathbb{Z}\mid \frac{3x+8}{x+1}\in \mathbb{Z} \right\}$

- Tìm tất cả các phần tử của $E.$

- Tìm tất cả các tập con của $E$ có ba phần tử.

- Tìm các tập con của $E$ có chứa phần tử $0$, và không chứa các ước số của $12$.

Ta cũng có tính chất, nếu $A\subset B$ và $B\subset C$ thì suy ra $A\subset C.$

Cho hai tập hợp $A$ và $B$. Nếu mỗi phần tử thuộc $A$ đều thuộc $B$ và ngược lại mỗi phần tử thuộc $B$ đều thuộc $A$ thì ta nói hai tập hợp $A$ và $B$ bằng nhau và kí hiệu $A= B$.

$$
A=B \Leftrightarrow A \subset B \text{ và } B \subset A.
$$

Để biểu diễn một tập hợp, ta có thể dùng biểu đồ Venn, là một đường khép kín. Ví dụ, hình vẽ sau mô tả tập $A$ là tập con của tập $B$.

![bieu do venn tap hop A la tap con cua B](assets/images/tap-hop-va-cac-phep-toan-tap-hop-bieu-do-venn-tap-hop-A-la-tap-con-cua-B.png)

## 2. Các phép toán trên tập hợp

Cho hai tập hợp $A$ và $B$, chúng ta có các phép toán sau:

- Hợp hai tập hợp: $A\cup B= \left\{x\mid x\in A \text{ hoặc } x\in B \right\}$.

- Giao hai tập hợp: $A\cap B= \left\{x\mid x\in A \text{ và } x\in B \right\}$.

- Hiệu hai tập hợp: $A\setminus B= \left\{x\mid x\in A \text{ và } x\notin B \right\}.$

- Nếu $A\subset E$ thì $C_EA=E\setminus A= \left\{x\mid x\in E \text{ và } x\notin A \right\}$ được gọi là phần bù của $A$ trong $E.$

Hiểu một cách đơn giản, giao của hai tập hợp là lấy phần chung nhau của hai tập đó. Hợp của hai tập hợp là lấy tất cả các phần tử của cả hai tập.

**Ví dụ 4.** Cho hai tập hợp $A=\left\{ 1;2;3;4;5;6;7\right\}$ và $B=\left\{1;3;5;7;9;11\right\}$. Hãy xác định các tập hợp

$$
A\cup B,\quad B\cup A,\quad A\cap B,\quad B\cap A,\quad A\setminus B,\quad B\setminus A.
$$

**Ví dụ 5.** Cho ba tập hợp $A=\left\{a, b,c,d,e,f,g \right\}, B=\left\{a,d,e,h,i,j\right\}$ và $C=\left\{e,m,y,u,a,n,h\right\}$. Hãy xác định các tập hợp 

$$
A\cup B\cup C,\quad A\cap B\cap C
$$

**Ví dụ 6.** Cho tập $A=\left\{1,2,3,4,5,6 \right\}$, $B=\left\{x\in \mathbb{Z}\mid -3\leqslant x\leqslant 2 \right\}$, $C=\left\{x\in \mathbb{R}\mid 2x^2-3x=0 \right\}.$

- Liệt kê các phần tử của tập hợp $B,C.$

- Xác định các tập hợp $A\cap B, B\cap C,C\cap A.$

- Xác định các tập hợp $A\cup B, B\cup C,C\cup A, A\cup B\cup C.$

- Xác định các tập hợp $A\setminus B, B\setminus C, A \setminus C.$

**Ví dụ 7.** Các học sinh của một lớp gồm 40 học sinh tham gia thi đấu các môn thể thao. Có 21 học sinh thi đấu môn bóng chuyền, 17 học sinh thi bóng chuyền. Trong đó có 5 học sinh thi đấu cả hai môn bóng đá và bóng chuyền. Các em còn lại thi cầu lông. Hỏi có bao nhiêu em thi cầu lông?

**Hướng dẫn.** Số học sinh chỉ thi đấu bóng đá là $21-5=16$ em. Số học sinh chỉ thi đấu bóng chuyền là $17-5= 12$ em. Vậy số học sinh thi cầu lông là $40-16-12-5=7$ em.

Có thể sử dụng biểu đồ Venn để làm.
