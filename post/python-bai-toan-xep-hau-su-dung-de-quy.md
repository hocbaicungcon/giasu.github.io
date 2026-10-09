---
title: 'Python: Bài toán xếp hậu sử dụng đệ quy'
description: Bài toán xếp hậu là một bài toán kinh điển thường được giới thiệu trong
  các cuốn sách về thuật toán. Ở đây, chúng ta sẽ giải quyết bài toán bằng các sử
  dụng đệ quy và thuật toán quay lui (vét cạn).
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Tin học
- Python
- Đệ quy
- Thuật toán quay lui
- Bài toán 8 quân hậu
grade: 11
---

**Bài toán xếp hậu** là một bài toán kinh điển thường được giới thiệu trong các cuốn sách về thuật toán. Ở đây, chúng ta sẽ giải quyết bài toán bằng các sử dụng [giải thuật đệ quy](/bai-viet/de-quy-la-gi.html) và [thuật toán quay lui](/bai-viet/thuat-toan-quay-lui-va-minh-hoa.html) (vét cạn).

Xem thêm: [Thuật toán giải sudoku bằng quay lui backtracking](/bai-viet/thuat-toan-giai-sudoku-bang-quay-lui-backtracking.html)

Xét bàn cờ tổng quát kích thước `nxn`. Một quân hậu trên bàn cờ có thể ăn được các quân khác nằm tại các ô cùng hàng, cùng cột hoặc cùng đường chéo. Hãy tìm các xếp `n` quân hậu trên bàn cờ sao cho không quân nào ăn quân nào.

Ví dụ một cách xếp với `n = 8`

![bài toán xếp hậu với n=8](assets/images/python-bai-toan-xep-hau-su-dung-de-quy-bai-toan-xep-hau.jpg)

## 1. Giải bài toán xếp hậu sử dụng đệ quy

Để giải quyết bài toán xếp 8 quân hậu này, chúng ta sử dụng list (mảng) `a` có kích thước bằng `8` với quy ước `a[i]=j` để đánh dấu vị trí xếp quân hậu thuộc dòng `i` ở cột thứ `j`.

### 1.1. Tạo danh sách để lưu vị trí các quân hậu

Để khởi tạo mảng `a`, chúng ta dùng lệnh

```python
n = 8
a = n*[0]
```

Lưu ý rằng các list danh sách trong Python được đánh chỉ số từ `0`, do đó vị trí của quân hậu ở dòng thứ nhất được lưu ở `a[0]`

Ví dụ `a=[0, 4, 7, 5, 2, 6, 1, 3]`có ý nghĩa, quân hậu ở dòng thứ nhất sẽ ở cột thứ nhất, quân hậu ở dòng thứ hai sẽ ở cột thứ 5, quân hậu ở dòng thứ 3 sẽ ở cột thứ 8…

### 1.2. Viết hàm in vị trí các quân hậu dạng ma trận

Chúng ta sẽ viết một hàm `print_board()` để in ra màn hình vị trí các quân hậu dạng ma trận (bảng), ví dụ với mảng `a` ở trên, in ra màn hình được:

```python
1 0 0 0 0 0 0 0 
0 0 0 0 1 0 0 0 
0 0 0 0 0 0 0 1 
0 0 0 0 0 1 0 0 
0 0 1 0 0 0 0 0 
0 0 0 0 0 0 1 0 
0 1 0 0 0 0 0 0 
0 0 0 1 0 0 0 0
```

Hàm in vị trí các quân hậu như sau:

```python
def print_board(b):
   l = len(b)
   for i in range(l):
      for j in range(l):
         if j == a[i]:
            print(1, end = " ")
         else:
            print(0, end = " ")
      print()
```

### 1.3. Viết hàm kiểm tra vị trí (d,c) có còn đặt được quân hậu mới không?

Chúng ta quy ước `d` và`c` là vị trí của dòng và cột đang xét để xem có khả năng đặt được quân hậu mới hay không.

Rõ ràng, ta chỉ cần kiểm tra xem trong các dòng từ `0` tới `d-1` đã có quân hậu nào mà có thể ăn được quân hậu nếu đặt ở ô đang xét hay không, do đó chỉ cần duyệt từ các dòng có chỉ số thuộc `range(d)`.

Chúng ta viết hàm `possible(d,c)` để kiểm tra vị trí `d,c` còn có khả năng đặt hậu hay không. Khi đó, kết quả trả về là False nếu một trong 3 khả năng sau xảy ra:

- Tại cột `c` đã có quân hậu ở dòng `i` nào đó, điều kiện là `a[i] == c`

- Tại 2 đường chéo đi qua điểm `(d,c)` đã có một quân hậu nào đó.

Lưu ý rằng các đường chéo sẽ song song hoặc trùng với các tia phân giác của góc phần tư trong hệ tọa độ `Oxy`. Các tia phân giác có phương trình là `y = x` hoặc `y = - x`. Do đó phương trình các đường chéo đi qua điểm có tọa độ `(d,c)` sẽ là `c - d =y -x`  hoặc `c + d = y  + x`. Từ đó suy ra điều kiện:

```python
a[i] == c  or c - d == a[i] - i or c + d == a[i] + i
```

Mã nguồn của hàm kiểm tra vị trí có thể đặt hậu như sau:

```python
def possible(x, y):
   for i in range(x):      
      if a[i] == y  or y - x == a[i] - i or y + x == a[i] + i:
         return False
   return True
```

### 1.4. Hàm đệ quy để sinh ra các vị trí đặt quân hậu

```python
def gen(i, n):
   for j in range(n):
      if possible(i,j):
         a[i] = j
         if i == n - 1:
            print(a)
         gen(i+1, n)
```

Chương trình bắt đầu với lời gọi `gen(0, n)`.

Mã nguồn hoàn chỉnh bằng Python của bài toán xếp hậu như sau:

```python
n = 8
a = n*[0]

def print_board(b):
   l = len(b)
   for i in range(l):
      for j in range(l):
         if j == a[i]:
            print(1, end = " ")
         else:
            print(0, end = " ")
      print()

def possible(d, c):
   for i in range(d):
      # if a[i] == y or abs(i - x) == abs(a[i] - y):
      if a[i] == c  or c - d == a[i] - i or c + d == a[i] + i:
         return False
   return True

def gen(i, n):
   for j in range(n):
      if possible(i,j):
         a[i] = j
         if i == n - 1:
            print(a)
         gen(i+1, n)

gen(0, n)
```

Kết quả trả về là tất cả các phương án mỗi phương án là một danh sách chứa vị trí các quân hậu. Nếu muốn in một phương án nào đó, chúng ta sử dụng hàm `print_board()`

## 2. Bài toán xếp hậu quay lui

Chúng tôi giới thiệu thêm bài toán xếp hậu sử dụng thuật toán quay lui để bạn đọc tham khảo. Cách làm này có thời gian chạy khá chậm, và mỗi lần chỉ in ra một phương án xếp các quân hậu. Muốn tìm được phương án khác, chúng ta cần thay đổi giá trị của mảng board ban đầu.

Cách giải này tôi có tham khảo từ bài viết [này](https://medium.com/@egemenokte/solving-the-8-queens-puzzle-recursively-with-python-6440078b68ad).

```python
board = [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]
      ]

def print_board(bo):
    for d in bo:        
        for c in d:
            print(c, end = " ")
        print()

def solve(bo):
   l = len(bo)
   for d in range(l):
      for c in range(l):
         if bo[d][c] == 0:
            if possible(bo, d, c):
               bo[d][c] = 1
               solve(bo)
            if sum(sum(a) for a in bo) == l:
               return bo
            else:
               bo[d][c] = 0
   return bo		

def possible(bo, d, c):
   l = len(bo)
   for i in range(l):
      if bo[i][c] == 1:
         return False
   for i in range(l):
      if bo[d][i] == 1:
         return False
   for i in range(l):
      for j in range(l):
         if bo[i][j] == 1:
            if c-d == j-i or c+d == i+j:
               return False
   return True

solve(board)
print_board(board)
```
