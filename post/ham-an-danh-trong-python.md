---
title: Hàm ẩn danh trong Python
description: Hàm ẩn danh trong Python là gì? Cách khai báo hàm lambda trong Python.
  Ví dụ về hàm lambda trong Python sử dụng với hàm filter và hàm map() trong Python
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- Lambda
- CNTT
grade: 10
---

Hàm ẩn danh trong [Python](/bai-viet/d/lap-trinh/python.html) là gì? Cách khai báo hàm lambda trong Python. Ví dụ về hàm lambda trong Python sử dụng với hàm filter và hàm map() trong Python.

## Hàm ẩn danh trong Python là gì?

- Hàm ẩn danh trong Python (còn gọi là hàm nặc danh –  anonymous function) là một hàm được định nghĩa mà không có tên và câu lệnh `return`.

- Các hàm bình thường sử dụng từ khóa `def` để định nghĩa thì các hàm ẩn danh được định nghĩa bằng từ khóa `lambda`. Vì vậy các hàm ẩn danh còn được gọi là các Lambda Function.

- Các hàm ẩn danh `lambda`  có thể khai báo, định nghĩa ở bất kỳ đâu và không có khả năng tái sử dụng. Lambda chỉ tồn tại trong phạm vi của biến mà nó được định nghĩa, vì vậy nếu như biến đó vượt ra ngoài phạm vi thì hàm này cũng không còn tác dụng nữa.

- Hàm nặc danh `lambda` thường được dùng để gán vào biến, hay được gán vào hàm, class như một tham số.

## Cách khai báo hàm lambda trong Python

#### Cú pháp của Lambda Function trong python

```html
lambda arguments_list: expression
```

- `lambda` là keyword bắt buộc

- `arguments_list` là các tham số truyền vào lambda

- `expression` là các biểu thức xử lý lambda

Các hàm lambda có thể có bất kỳ số đối số nào nhưng chỉ có một biểu thức `expression`. Các `lambda function` có thể được sử dụng ở bất cứ chỗ nào yêu cầu các đối tượng hàm. Hàm lambda không có câu lệnh return mà chính giá trị của biểu thức `expression` được sử dụng làm kết quả trả về  của hàm.

![Cú pháp khai báo Hàm ẩn danh trong Python là gì](assets/images/ham-an-danh-trong-python-cu-pha-ham-lambda.png)

## Ví dụ về hàm lambda trong Python

Ví dụ sau khai báo một lambda function để tính tổng của 2 biến:

```python
add = lambda a, b: a + b

# sử dụng hàm lambda bằng cách sử dụng biến add
add(3, 4) #kết quả 7
```

Kiểm tra xem hàm lambda ở trên có kiểu dữ liệu là gì:

```python
add = lambda a, b: a + b

type(add) # kết quả function
```

Hàm sau dùng để nhân đôi giá trị của tham số

```python
double = lambda x: x * 2
print(double(5)) #kết quả 10
```

Function này sẽ không có tên. Nó trả về một object được định danh là `double`. Giờ thì chúng ta có thể gọi nó như một hàm bình thường. Ví dụ:

```python
double = lambda x: x * 2
```

Nó sẽ tương tự như các khai báo function như sau:

```python
def double(x):
    return x * 2
```

## Khi nào nên sử dụng hàm nặc danh lambda?

Chúng ta thường sử dụng lambda function khi mà cần một hàm không tên trong một khoảng thời gian ngắn. Ví dụ như sử dụng lambda function làm đối số cho một hàm bậc cao hơn (một hàm mà có thể nhận các hàm khác làm đối số) chẳng hạn hàm `filter()` hàm `map()`…

### Hàm filter trong Python

Hàm `filter()` trong Python lọc ra các phần tử theo điều kiện của hàm func từ [list](/bai-viet/kieu-du-lieu-list-danh-sach-trong-python.html), dict… Hàm này sẽ chỉ trả về những giá trị mà điều kiện trong func chấp nhận (có nghĩa là True). Cú pháp của hàm filter() như thế nào, nó có những tham số gì và cách sử dụng ra sao? Mời bạn đọc theo dõi.

Cú pháp hàm filter() trong Python

`filter(func, iterable)`

Hàm filter() có 2 tham số:

- `func`: là hàm điều kiện để kiểm tra các phần tử trong interable có thỏa mãn điều kiện đó hay không. Kết quả của hàm `func` này là đúng `True` hoặc sai `False`.

- `interable`: là các iterable cần lọc, có thể là set, list, tuple hoặc container.

Đây là một ví dụ sử dụng hàm `filter()` để chỉ lọc ra các số chẵn từ một danh sách.

```python
my_list = [1, 5, 4, 6, 8, 11, 3, 12, 17, 21]

new_list = list(filter(lambda x: (x%2 == 0) , my_list))

print(new_list) #kết quả:  [4, 6, 8, 12]
```

Xem thêm [Kiểu dữ liệu list danh sách trong Python](/bai-viet/kieu-du-lieu-list-danh-sach-trong-python.html)

### Hàm map() trong Python

Hàm `map()` tích hợp sẵn trong Python có tác dụng duyệt tất cả các phần tử của một iterable (list, tuple, dictionary…) qua một hàm cho trước và trả về một list kết quả sau khi thực thi.

Cú pháp hàm map() trong Python

`map(function, iterable, ...)`

- `function`: Hàm thực thi cho từng phần tử trong iterable.

- `iterable`: Một list, tuple, dictionary… muốn duyệt.

Bạn có thể truyền nhiều `iterable` cho hàm map().

Hàm `map()` duyệt tất cả các phần tử của `iterable` qua function và trả về một list kết quả sau khi thực thi.

Giá trị trả về từ `map()` được gọi là map object. Kết quả này có thể được truyền vào các hàm list() (để tạo list trong Python), hay set() (để tạo một set các phần tử mới)…

Ví dụ sau tạo một danh sách mới bằng cách nhân đôi các phần tử của danh sách ban đầu:

```python
my_list = [1, 5, 4, 6, 8, 11, 3, 12]

new_list = list(map(lambda x: x * 2 , my_list))

print(new_list) #Kết quả: [2, 10, 8, 12, 16, 22, 6, 24]
```
