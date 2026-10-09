---
title: Kiểu dữ liệu list danh sách trong Python
description: Danh sách trong Python, kiểu list được đặt trong cặp ngoặc vuông [] và
  có các hàm, phương thức như del pop append remove map filter...
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- List
- CNTT
grade: 10
---

Danh sách trong Python kí hiệu là `list`, hiểu đơn là một tập hợp các đối tượng có chung một tính chất nào đó. Ví dụ danh sách các món ăn trên bàn tiệc, danh sách các bài hát của một album, danh sách học sinh trong một lớp học…

Ta thấy ngay, mỗi danh sách đều gồm có các phần tử khác nhau, để liệt kê chúng, chẳng hạn liệt kê các thực phẩm cần mua cho bữa liên hoan, bạn sẽ sử dụng dấu phẩy để ngăn cách các phần tử này. Python cũng vậy, tuy nhiên, các danh sách các phần tử cần được đặt trong cặp ngoặc vuông `[]`.

## 1. Giới thiệu kiểu danh sách trong Python

Để khai báo một danh sách, chúng ta dùng liệt kê các phần tử của danh sách, được đặt trong cặp ngoặc vuông `[]`, các phần tử được ngăn cách nhau bởi dấu phảy `,`. Mỗi phần tử trong danh sách có thể có kiểu bất kỳ như `str`, `float`, hay `int`…

Ví dụ sau tạo một danh sách `mon_an` gồm có các phần tử kiểu xâu `str` là các món `canh cua`, `cà pháo`, `cá kho` và `thịt rán`.

```python
>>> mon_an = ['canh cua', 'ca phao', 'ca kho', 'thit ran']
```

Một danh sách không có thể phần tử, gọi là danh sách rỗng.

```python
>>> ban_gai = []
>>> ban_gai
[]
```

Để truy cập vào một phần tử của danh sách `list` trong Python, ta dùng tên danh sách theo sau là chỉ số `index` của phần tử đó được đặt trong cặp ngoặc vuông.

```python
>>> mon_an[3]
'thit ran'
```

Cũng giống như [kiểu xâu `str`](/bai-viet/kieu-xau-string-trong-python-kieu-chuoi-trong-python.html), các chỉ số `index` của một danh sách `list` được đánh số bắt đầu từ `0`. Kiểu danh sách có thể hiểu gần giống như kiểu mảng `array` trong các ngôn ngữ lập trình khác.

Không như kiểu xâu `str`, là những đối tượng *immutable*, thì kiểu danh sách là đối tượng *mutable*, tức ta có thể thay đổi các phần tử của một danh sách. Chẳng hạn, thay `cà pháo` bằng dưa muối, ta sẽ gán giá trị mới cho phần tử `mon_an[1]`.

```python
>>> mon_an[1] = 'dua muoi'
>>> mon_an
['canh cua', 'dua muoi', 'ca kho', 'thit ran']
```

## 2. Các phép toán và phương thức của kiểu danh sách

Cũng giống như kiểu xâu `str`, kiểu danh sách `list` cũng có các phép toán và phương thức đặc thù. Chúng ta sẽ lần lượt tìm hiểu các toán tử và phương thức/hàm của kiểu danh sách trong Python.

### 2.1. Toán tử `in`

Toán tử `in` dùng để kiểm tra xem một phần tử có nằm trong danh sách hay không, kết quả trả về của toán tử này là [kiểu `boolean`](/bai-viet/kieu-logic-boolean-trong-python.html) đúng `True` hoặc sai `False`.

```python
>>> mon_an = ['canh cua', 'ca phao', 'ca kho', 'thit ran']
>>> 'canh cua' in mon_an
True
>>> 3000 in mon_an
False
```

Bạn cũng có thể sử dụng toán tử `in` để duyệt danh sách trong [vòng lặp](/bai-viet/cau-lenh-vong-lap-for-trong-python.html)`for` như sau.

```python
>>> for i in mon_an:
...     print(i)
...
canh cua
ca phao
ca kho
thit ran
```

### 2.2. Toán tử `+`

Toán tử `+` cho phép ghép nối hai danh sách với nhau. Lưu ý rằng toán tử `+` này tương tự phép *cộng* hai xâu (chuỗi, `string`) chứ không giống như toán tử cộng các số.

```python
>>> a = [1, 2, 3]
>>> b = ['x', 'y', 'z', 'a']
>>> a + b
[1, 2, 3, 'x', 'y', 'z', 'a']
```

### 2.3. Toán tử `*`

Tương tự toán tử `*` dùng để lặp lại các phần tử trong danh sách lên `k` lần.

```python
>>> a = [0] * 4
>>> a
[0, 0, 0, 0]
```

### 2.4. Phương thức `append()`

Phương thức `<ds>.append(<pt>)` này sẽ thêm phần tử `<pt>` vào cuối danh sách `<ds>`.

```python
>>> ds = [1, 2, 3, 4]
>>> ds.append(5)
>>> ds
[1, 2, 3, 4, 5]
```

### 2.5. Phương thức `extend()`

Phương thức `<ds1>.extend(<ds2>)` này sẽ thêm các phần tử của danh sách `<ds2>` vào cuối của danh sách `<ds1>`

```python
>>> l1 = [1, 2, 3]
>>> l2 = [4, 5, 6, 7]
>>> l1.extend(l2)
>>> print(l1)
[1, 2, 3, 4, 5, 6, 7]
```

### 2.6. Phương thức `sort()`

Phương thức `<ds>.sort()` giúp sắp xếp các phần tử của danh sách `<ds>` theo thứ tự phần tử từ nhỏ đến lớn, đối với kiểu chuỗi thì sắp theo thứ tự alphabet. Lưu ý rằng các phần tử của danh sách phải thuộc cùng một kiểu dữ liệu, cùng kiểu chuỗi hoặc cùng kiểu số…, tức là các phần tử của danh sách phải so sánh được với nhau.

```python
>>> ds_so = [1, 5, 7, 3, 2, 9]
>>> ds_so.sort()
>>> ds_so
[1, 2, 3, 5, 7, 9]
>>> ds_xau = ['a', 'e', 'b', 'g', 'i', 'Aa']
>>> ds_xau.sort()
>>> ds_xau
['Aa', 'a', 'b', 'e', 'g', 'i']
```

### 2.7. Phương thức `pop()`

Phương thức `<ds>.pop(i)` xóa phần tử có chỉ số `i` của danh sách `<ds>`, kết quả trả về chính là giá trị của phần tử có chỉ số `i` đó. Nhắc lại rằng, các phần tử của danh sách được đánh chỉ số từ `0`

```python
>>> ds = [1, 5, 7, 3, 2, 9]
>>> ds.pop(1)
5
>>> ds
[1, 7, 3, 2, 9]
```

### 2.8. Toán tử `del`

Toán tử `del <ds>[i]` để xóa phần tử có chỉ số `i` của danh sách `<ds>` hoặc `del <ds>[i:j]` một phần của danh sách từ chỉ số`i` đến chỉ số `j`.

```python
>>> ds = [1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> del ds[0]
>>> ds
[2, 3, 4, 5, 6, 7, 8, 9]
>>> del ds[1:3]
>>> ds
[2, 5, 6, 7, 8, 9]
```

### 2.9. Phương thức `remove()`

Phương thức `pop()` xóa bỏ phần tử của danh sách dựa trên chỉ số của phần tử đó, thì phương thức `<ds>.remove(<pt>)` sẽ xóa bỏ phần tử có giá trị `<pt>` *đầu tiên* của danh sách `<ds>` khỏi danh sách đó. Giá trị trả về của phương thức `remove()` là `None`.

```python
ds = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
>>> ds.remove(8)
>>> ds
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Nếu bạn muốn xóa bỏ tất cả các phần tử có giá trị `<pt>` khỏi danh sách `<ds>`, có thể làm như sau:

```python
>>> ds = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
>>> while 8 in ds: ds.remove(8)
>>> ds
[1, 2, 3, 4, 5, 6, 7, 9]
```

## 3. Xử lý danh sách trong Python

Các thao tác thường được thực hiện trên list trong Python là xử lý từng phần tử của `list`, lọc lấy một số phần tử thỏa điều kiện nào đó, tính toán trên tất cả các phần tử của `list`.

Để đơn giản việc xử lý danh sách `list`, Python hỗ trợ một số hàm có sẵn để thực hiện các tác vụ trên gồm `map()`, `filter()`, `reduce()`

### 3.1. Hàm `map()` để xử lý danh sách trong Python

Sử dụng câu lệnh `map(func, seq)` sẽ áp dụng hàm `func` cho mỗi phần tử của `seq` và trả về list kết quả.

Ví dụ, tính bình phương các số có trong list `a` sử dụng `map():`

```python
a = [1, 2, 3, 4, 5]
def binh_phuong(x):
   return x*x
print(list(map(binh_phuong,a)))
```

Có thể sử dụng hàm nặc danh `lamda` thay vì viết riêng một hàm `binh_phuong`.

```python
>>> a = [1, 2, 3, 4, 5]
>>> print(list(map(lambda x: x*x, a)))
[1, 4, 9, 16, 25]
```

Thêm một ví dụ nữa, chúng ta sẽ cộng tương ứng từng phần tử của hai danh sách có cùng số lượng phần tử:

```python
numbers1 = [1, 2, 3] 
numbers2 = [4, 5, 6] 

result = map(lambda x, y: x + y, numbers1, numbers2) 
print(list(result))
```

### 3.2. Hàm `filter()` xử lý kiểu dữ liệu danh sách trong Python

Hàm `filter(func, list)` sẽ  lần lượt gọi hàm `func` với tham số lần lượt là từng phần tử của danh sách `list` và trả về danh sách gồm các phần tử thỏa mãn hàm `func`. Lưu ý rằng hàm `func` phải là hàm mà kết quả trả về thuộc kiểu Boolean `True` hoặc `False`, tức là hàm `func` như là một hàm điều kiện để lọc ra các phần tử của danh sách `list` thỏa mãn điều kiện đó.

Ví dụ lọc ra các số chẵn từ danh sách a.

```python
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

def so_chan(number):
   if number % 2 == 0:
      return True
   else:
      return False

print (list(filter(so_chan, a)))
```

Hoặc, sử dụng hàm nặc danh `lambda`, ta có thể viết chương trình gọn hơn như sau:

```python
>>> a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> print (list(filter(lambda x: x%2 == 0, a)))
[2, 4, 6, 8]
```

Thêm một ví dụ nữa, sử dụng hàm filter() để in ra các nguyên âm trong một danh sách:

```python
def nguyen_am(x): 
    ds_nguyen_am = ['a', 'e', 'i', 'o', 'u'] 
    if (x in ds_nguyen_am): 
        return True
    else: 
        return False

ds = ['g', 'e', 'e', 'j', 'k', 's', 'p', 'r'] 

kq = filter(nguyen_am, ds) 

for s in kq: 
    print(s)
```

### 3.3. Hàm `reduce()` xử lý kiểu dữ liệu danh sách trong Python

Hàm `reduce(func, <ds>)` sẽ tính toán, áp dụng hàm `func` với các phần tử của danh sách và trả về kết quả của.

Hàm `func` là một hàm nhận vào 2 tham số có dạng `func(arg1, arg2)` trong đó `arg1` là kết quả tính toán với các phần tử trước, `arg2` là giá trị của phần tử của danh sách đang được tính toán.

Cách thức hoạt động của hàm `reduce()` chi tiết như sau:

- Ở bước đầu tiên, hai phần tử đầu tiên của danh sách `<ds>` được lấy và cung cấp cho hàm `func` thu được một kết quả `kq`.

- Bước tiếp theo, hàm `func` nhận tham số là kết quả `kq` đạt được ở bước trước và phần tử tiếp theo của danh sách `<ds>`, kết quả tính toán lại được sử dụng như một tham số cho bước tiếp theo.

- Quá trình này tiếp tục cho đến khi không còn phần tử nào trong danh sách `<ds>`.

- Kết quả trả về của hàm `reduce()` là kết quả ở bước cuối cùng của hàm `func`.

Lưu ý rằng, hàm `reduce` nằm trong thư viện `functools`, nên cần phải khai báo `import functools` trước khi sử dụng hàm `reduce()`.

Ví dụ sau in ra tổng các giá trị của danh sách và phần tử lớn nhất của danh sách.

```python
from functools import *

ds = [ 1 , 3, 5, 6, 2, ] 

print ("Tong cac phan tu cua danh sach la: ",end="") 
print (reduce(lambda a,b : a+b, ds)) 

print ("Phan tu lon nhat cua danh sach la: ",end="") 
print (reduce(lambda a,b : a if a > b else b, ds))
```

Ví dụ tính tổng bình phương của các phần tử trong danh sách `a`

```python
a = [1, 2, 3, 4, 5]

def tong_binh_phuong(kq, x):
   return kq + x*x

print(reduce(tong_binh_phuong, a))
```

## 4. Danh sách của danh sách, kiểu danh sách nhiều chiều trong Python

Các phần tử của một danh sách danh sách trong Python lại có thể là một danh sách, chẳng hạn

```python
>>> A = [[1,2,3], [4,5,6], [7,8,9,10,11]]
>>> A[1]
[4, 5, 6]
>>> A[1][2]
6
>>> A[2][4]
11
>>> A[1][5]
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

Danh sách `A` gồm có ba phần tử, mỗi phần tử lại là một danh sách `[1,2,3]`, `[4,5,6]`, `[7,8,9,10,11]`. Khi đó, để truy cập đến phần tử `j` của danh sách `A[i]` nằm trong danh sách  `A` ta dùng cú pháp `A[i][j]`.

Kiểu dữ liệu này tương ứng với kiểu mảng hai chiều `array`, hoặc là ma trận, trong các ngôn ngữ khác. Tuy nhiên, nếu một ma trận thì, nếu xét riêng từng dòng, bắt buộc các dòng phải có số cột như nhau. Nhưng ở đây thì khác, nếu ta viết lại list A ở trên, mỗi phần tử viết trên một dòng thì ta sẽ có dạng gần giống ma trận, do số cột của từng dòng là khác nhau

```python
[1,2,3]
[4,5,6]
[7,8,9,10,11]
```

Rõ ràng, kiểu danh sách của danh sách này linh hoạt hơn – nhưng cũng đồng nghĩa với khó kiểm soát hơn – kiểu mảng hai chiều trong các ngôn ngữ khác.

## 5. Danh sách và chuỗi

Bạn có thể kết hợp danh sách và chuỗi để tách các ký tự trong chuỗi thành một danh sách, sử dụng hàm ép kiểu `list()` như sau.

```python
>>> s = 'phan van phuong'
>>> list(s)
['p', 'h', 'a', 'n', ' ', 'v', 'a', 'n', ' ', 'p', 'h', 'u', 'o', 'n', 'g']
```

Hoặc có thể tách một chuỗi thành danh sách gồm các phần tử cách nhau bởi `<kí_tự_tách>` bằng hàm `split(<kí_tự_tách>)`, mặc định `<kí_tự_tách>` là khoảng trắng.

```python
>>> s = 'phan van phuong'
>>> s.split()
['phan', 'van', 'phuong']
>>> s.split('n')
['pha', ' va', ' phuo', 'g']
```

## 6. Bài tập kiểu list danh sách trong Python

**Bài 1.** Cho một *list* các số nguyên. Viết chương trình tìm phần tử lớn nhất của *list* đó.

**Bài 2.** Cho một *list* các số nguyên. Viết chương trình in ra tất cả các phần tử lớn là số chẵn và lớn hơn 10 của *list* đó.

**Bài 3.** Viết chương trình tính số trung bình các giá trị của một *list* số nguyên.

**Bài 4.** Tạo một *list* gồm *n* số nguyên không âm ngẫu nhiên.

Xem thêm về các kiểu dữ liệu list (danh sách trong Python) tại [https://www.w3schools.com/python/python_lists.asp](https://www.w3schools.com/python/python_lists.asp)
