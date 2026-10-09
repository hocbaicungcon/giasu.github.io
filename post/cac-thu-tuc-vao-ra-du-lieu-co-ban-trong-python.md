---
title: Bài 4. Các thủ tục vào ra dữ liệu cơ bản trong Python
description: Hàm print trong Python để xuất nội dung xâu string ra màn hình, hàm input
  để nhập một xâu từ bàn phím.
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- Nhập xuất I/O
- CNTT
grade: 10
---

# Các thủ tục vào ra dữ liệu Hàm print trong Python

## 1. Hàm `print()`

- Để in một xâu `string` ra màn hình ta dùng hàm `print()`chẳng hạn:

```python
>>> print('Toi la Phu Ong')
Toi la Phu Ong
```

- Hàm `print()` có các tham số sau

`print(value, sep, end, file, flush)`

Trong đó, `value` là giá trị sẽ được in ra màn hình, giá trị này phải là một xâu kí tự, hoặc chỉ được là các giá trị thuộc cùng một kiểu dữ liệu, nếu có nhiều giá trị thì cách nhau bởi dấu phảy; `sep` là kí tự ngăn cách giữa các giá trị, `end` là kí tự khi kết thúc câu lệnh `print()`.

- Để in nhiều xâu cùng lúc ta có thể sử dụng các toán tử trên xâu. Ở đây xin giới thiệu qua một số cách, chi tiết xin xem chương dữ liệu kiểu xâu.

- Chẳng hạn ta muốn in ra màn hình nội dung của xâu chứa trong biến `temp` và xâu `Tên tôi là`

```python
>>> temp = 'Phu Ong'
>>> print("Tên tôi là", temp)
Tên tôi là Phu Ong
```

- Hoặc có thể sử dụng phép nối xâu để in

```python
>>> temp = 'Phu Ong'
>>> print("Tên tôi là" + temp)
Tên tôi làPhu Ong
```

- Tuy nhiên, nếu sử dụng phép nối xâu, ta thấy kết quả thu được sẽ không có dấu cách giữa các đối số của hàm `print()` như cách trước nữa.

- Phép in nội suy xâu

```python
>>> print("Ten toi la %s va toi nang %d kg!" % ('Phu Ong', 51))
```

Bản chất của câu lệnh trên là ta đã sử dụng các phép toán định dạng xâu, có thể viết như sau cũng thu được cùng một kết quả.

```python
>>> temp = "Ten toi la %s va toi nang %d kg!" % ('Phu Ong', 51)
>>> print(temp)
```

Hoặc sử dụng kiểu mới để định dạng xâu:

```python
print("Ten toi la {} va toi nang {} kg".format('Phu Ong', 51))
```

## 2. Hàm `input()`

- Để nhập dữ liệu trực tiếp từ bàn phím vào chương trình ta dùng hàm `input()`. Kiểu dữ liệu mặc định chương trình nhận vào sẽ là kiểu xâu.

```python
>>> x = input('Ban ten gi? ')
Ban ten gi? Phuong
>>> print(x)
Phuong
```

- Để nhập vào một số nguyên hoặc số thực, hoặc một kiểu có cấu trúc phức tạp hơn, thì ta làm thế nào? Chúng ta phải sử dụng các hàm chuyển đổi kiểu của Python. Chẳng hạn để nhập vào một số nguyên, ta dùng hàm `int()` để chuyển sang kiểu số nguyên, dùng hàm `float()` để chuyển sang kiểu số thực. Ví dụ

```python
>>> a=input('Xin moi nhap mot so: ')
Xin moi nhap mot so: 13
>>> a*2
'1313'
>>> a = int(input('Xin moi nhap mot so: '))
Xin moi nhap mot so: 13
>>> a*2
26
```

- hoặc nhập vào một số thực

```python
>>> a = float(input('Xin moi nhap mot so: '))
Xin moi nhap mot so: 1.3
>>> a*2
2.6
```

- Đối với các kiểu dữ liệu phức tạp hơn, ta phải sử dụng thêm các hàm để xử lý xâu kí tự nhập vào.

- Để nhập một vào nhiều giá trị cùng một lần, các giá trị cách nhau bởi dấu phẩy hoặc một kí tự bất kì, ta dùng vẫn hàm `input()` nhưng phải sử dụng thêm phương thức `split()` của kiểu xâu. Ví dụ, nhập vào hai số nguyên `a, b` cách nhau bởi dấu phẩy.

```python
>>> a, b = input("Xin moi nhap vao hai so:").split(',')
```

hoặc cách nhau bởi dấu cách trắng

```python
>>> a, b = input("Xin moi nhap vao hai so:").split(' ')
```

dĩ nhiên, sau đó ta muốn sử dụng `a, b` như là các số nguyên thì phải chuyển đổi từ kiểu xâu này sang kiểu số nguyên, vì mặc định nhập vào luôn là kiểu xâu.

- Để nhập vào một danh sách *list*, ta nhập vào một xâu, sau đó chuyển xâu đó sang danh sách bằng cách tách rời các phần tử. Ví dụ, người dùng nhập vào một dãy các số nguyên, cách nhau bởi dấu cách trắng, và chúng ta phải chuyển thành một *list*.

```python
>>> a = [int(x) for x in input().split()]
3 4 5
>>> a
[3, 4, 5]
```

nếu cách nhau bởi dấu phẩy

```python
>>> a = [int(x) for x in input().split(',')]
3,4,5
>>> a
[3, 4, 5]
```

Ở cách này, chúng ta phải sử dụng thêm vòng lặp for, bạn có thể xem chi tiết ở chương sau. Hoặc có thể sử dụng hàm `map()` để ánh xạ mỗi giá trị với một phần tử của danh sách.

```python
>>> s = input()
1 2 3 4 5
>>> numbers = list(map(int, s.split()))
>>> numbers
[1, 2, 3, 4, 5]
```

### Bài tập

**Bài 1.** Viết chương trình nhập vào một số nguyên `n` và in ta màn hình giá trị bình phương của số đó.

**Bài 2.** Viết chương trình nhập vào bán kính `r` của đường tròn, là một số thực, và in ra diện tích của hình tròn đó.
