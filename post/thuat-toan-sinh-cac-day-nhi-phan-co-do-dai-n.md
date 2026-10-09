---
title: Thuật toán sinh các dãy nhị phân có độ dài n
description: Trong bài viết này chúng ta sẽ tìm cách liệt kê toàn bộ các dãy nhị phân
  có độ dài n cho trước.
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Tin học
- Thuật toán sinh
- Dãy nhị phân
- C++
- Python
grade: 11
---

Trong bài viết này chúng ta sẽ tìm cách liệt kê toàn bộ các dãy nhị phân có độ dài `n` cho trước.

- **Yêu cầu:** Liệt kê tất cả các dãy nhị phân có độ dài `n`. (dãy nhị phân là dãy chỉ gồm hai số `0` và `1`)

- **Input:** Nhập vào `n` – độ dài của chuỗi nhị phân cần in ra.

- **Output :** In ra màn hình tất cả các chuỗi nhị phân có độ dài `n` nhập từ đầu vào.

Ví dụ:

- **Input:** `3`

- **Output:
- 

```
000   001   010   011   100   101   110   111
```

## 1. Liệt kê các dãy nhị phân độ dài n bằng phương pháp sinh tuần tự

Phương pháp sinh tuần tự sử dụng để liệt kê tất cả các phương án [cấu hình] của bài toán tổ hợp, sao cho các bài toán đó thỏa mãn:

- Có thể xác định được một thứ tự trên tập các cấu hình tổ hợp cần liệt kê. Từ đó có thể biết đượccấu hình đầu tiên và cấu hình cuối cùng trong thứ tự đó.

- Xây dựng được thuật toán từ một cấu hình chưa phải cấu hình cuối, sinh ra được cấu hình kế tiếp nó.

Theo đó, thuật toán sinh tuần tự các cấu hình được mô tả như sau:

```python
<Xây dựng cấu hình đầu tiên>
while True:
   <Đưa ra cấu hình đang có>
   <Từ cấu hình đang có sinh ra cấu hình kế tiếp nếu còn>
   if <hết cấu hình>:
      break
```

Lưu ý rằng, Python không có câu lệnh điều khiển luồn `repeat... until` như một số ngôn ngữ khác, nên ta phải sử dụng vòng lặp `while` (Xem chi tiết trong bài [Bài 7. Câu lệnh vòng lặp while trong Python](/bai-viet/cau-lenh-vong-lap-while-trong-python.html))

Vì kiểu [xâu string](/bai-viet/kieu-xau-string-trong-python-kieu-chuoi-trong-python.html) là immutable nên chúng ta sẽ sử dụng [kiểu danh sách list](/bai-viet/kieu-du-lieu-list-danh-sach-trong-python.html) để thao tác trên đó, và định nghĩa hàm `fine_print()` để in toàn bộ các phần tử của danh sách dưới dạng xâu kí tự.

Một lưu ý là các chỉ số `index` trong Python luôn được đánh số từ `0`, do đó phần tử thứ nhất của một danh sách list `x` sẽ có chỉ số là `0`, tức là phần tử `x[0]`

```python
n = 3
s = n*[0]

def fill_char(s,i):
   for j in range(i,n):
      s[j] = 0
def fine_print(x):
   tmp = ''
   for i in x:
      tmp += str(i)
   return tmp

while True:
   print(fine_print(s))
   i = n - 1
   while (i > -1) and s[i] == 1:
      i = i - 1
   s[i] = 1
   fill_char(s,i+1)
   if i == -1:
      break
```

Kết quả thu được như sau:

```
000
001
010
011
100
101
110
111
```

## 2. Sinh các dãy nhị phân độ dài n bằng thuật toán quay lui (Backtracking)

![liệt kê các chuỗi nhị phân bằng thuật toán quay lui](assets/images/thuat-toan-sinh-cac-day-nhi-phan-co-do-dai-n-cay-quay-lui-nhi-phan-e1610464340433.png)

Vẫn sử dụng kiểu danh sách list và hàm `fine_print()` như ở phần trên, chúng ta có chương trình liệt kê tất cả các xâu nhị phân có độ dài `n` sử dụng thuật toán quay lui như sau:

```python
n = 3
x = n*[0]

def fine_print(x):
   tmp = ''
   for i in x:
      tmp += str(i)
   return tmp

def bin_gen(i):
   for j in range(0,2):
      x[i] = j
      if i == n-1:
         print(fine_print(x))
      else:
         bin_gen(i+1)

bin_gen(0)
```

Thuật toán quay lui có ưu điểm là rất dễ cài đặt so với phương pháp sinh tuần tự, hơn nữa có thể dễ dàng mở rộng để giải quyết nhiều bài toán khác nhau. Chẳng hạn, ta dễ dàng giải quyết bài toán sinh các dãy tam phân bằng cách thay `range(0,2)` bởi `range(0,3)`. Kết quả thu được như sau:

```
000
001
002
010
011
012
020
021
022
100
101
102
110
111
112
120
121
122
200
201
202
210
211
212
220
221
222
```
