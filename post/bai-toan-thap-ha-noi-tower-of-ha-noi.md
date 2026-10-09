---
title: Bài toán Tháp Hà Nội (Tower of Hanoi)
description: Bài toán Tháp Hà Nội (Tower of Ha Noi) là một bài toán rất nổi tiếng
  và kinh điển, rất thích hợp để minh họa cho thuật toán đệ quy.
category: Toán học
type: Khám phá
date: '2024-10-02'
tags:
- Toán học
- Thuật toán
- Trò chơi
---

[Bài toán Tháp Hà Nội](https://vi.wikipedia.org/wiki/Th%C3%A1p_H%C3%A0_N%E1%BB%99i) là một bài toán rất nổi tiếng và kinh điển, rất thích hợp để minh họa cho [thuật toán đệ quy](/bai-viet/de-quy-la-gi.html).

## Bài toán Tháp Hà Nội là gì?

Có 3 chiếc cọc được đánh dấu lần lượt là A, B, C và n chiếc đĩa. Các đĩa này có kích thước (đường kính) khác nhau và mỗi đĩa đều có một lỗ ở giữa để lồng vào cọc. Ban đầu, các đĩa đều nằm ở cọc A, trong đó, đĩa có đường kính nhỏ hơn luôn ở nằm trên đĩa đường kính lớn hơn.

![bài toán tháp hà nội](assets/images/bai-toan-thap-ha-noi-tower-of-ha-noi-bai-toan-thap-ha-noi.png)

**Yêu cầu :** Chuyển n đĩa từ cọc A sang cọc C với các điều kiện sau:

- Mỗi lần chỉ chuyển được 1 đĩa

- Trong quá trình chuyển, đĩa nhỏ phải luôn nằm trên đĩa lớn hơn.

- Cho phép sử dụng cọc B làm cọc trung gian

## Cách giải Bài toán Tháp Hà Nội

Chúng ta sẽ xét các trường hợp của n:

- Trường hợp đơn giản nhất, n=1, ta chỉ cần chuyển 1 đĩa từ cọc A sang cọc C.

- Với n=2, ta chuyển đĩa nhỏ nhất sang cọc B, chuyển đĩa còn lại sang cọc C, và cuối cùng chuyển đĩa nhỏ ở cọc B sang cọc C.

- Với n>2, giả sử ta đã có cách chuyển n-1 đĩa từ một cọc sang một cọc khác. Như vậy, để chuyển n đĩa từ cọc nguồn sang cọc đích, ta cần chuyển n-1 đĩa từ cọc nguồn sang cọc trung gian. Sau đó chuyển đĩa lớn nhất từ cọc nguồn sang cọc đích. Cuối cùng, chuyển n-1 đĩa từ cọc trung gian sang cọc đích.

Ví dụ, với n=3, chúng ta phải chuyển 7 lần tất cả như hình sau.

![cách giải bài toán tháp hà nội](assets/images/bai-toan-thap-ha-noi-tower-of-ha-noi-towershanoialg.jpg)

Mã nguồn chương trình bằng Python:

def TowerOfHanoi(n , source, destination, auxiliary):
   if n==1:
      print("Chuyển đĩa 1 từ cọc",source,"sang cọc",destination)
      return
   TowerOfHanoi(n-1, source, auxiliary, destination)
   print("Chuyển đĩa",n,"từ cọc",source,"sang cọc",destination)
   TowerOfHanoi(n-1, auxiliary, destination, source)

# Ví dụ với n = 4		
n = 4
TowerOfHanoi(n,'A','C','B')
Kết quả chạy chương trình:

Chuyển đĩa 1 từ cọc A sang cọc B
Chuyển đĩa 2 từ cọc A sang cọc C
Chuyển đĩa 1 từ cọc B sang cọc C
Chuyển đĩa 3 từ cọc A sang cọc B
Chuyển đĩa 1 từ cọc C sang cọc A
Chuyển đĩa 2 từ cọc C sang cọc B
Chuyển đĩa 1 từ cọc A sang cọc B
Chuyển đĩa 4 từ cọc A sang cọc C
Chuyển đĩa 1 từ cọc B sang cọc C
Chuyển đĩa 2 từ cọc B sang cọc A
Chuyển đĩa 1 từ cọc C sang cọc A
Chuyển đĩa 3 từ cọc B sang cọc C
Chuyển đĩa 1 từ cọc A sang cọc B
Chuyển đĩa 2 từ cọc A sang cọc C
Chuyển đĩa 1 từ cọc B sang cọc C
