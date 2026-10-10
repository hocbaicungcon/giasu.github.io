---
title: 100+ Bài tập Python cơ bản có lời giải
description: 20 bài tập Python cơ bản có lời giải gồm những bài như tìm số lớn nhất
  trong ba số, giải phương trình bậc hai, tính giai thừa, tìm số Fibonacci...
category: CNTT
type: Bài tập
date: '2022-07-01'
tags:
- Python
- Bài tập Python
- CNTT
grade: 10
---

Mời bạn xem phiên bản đầy đủ tại đây [https://divin.dev/python/2022/03/14/20-bai-tap-python.html](https://divin.dev/python/2022/03/14/20-bai-tap-python.html)

Mời bạn xem thêm [Bài tập Python cơ bản lớp 10](/bai-viet/bai-tap-python-co-ban-lop-10.html) được chia theo từng chủ đề.

## Bài tập Python cơ bản

**Bài 1.** In toàn bộ các số chẵn từ 1000 đến 2000.

```python
even_numbers=[]

for i in range(1000, 2001):
    if (i%2=0):
        even_numbers.append(str(i))
print (','.join(even_numbers))
```

**Bài 2.** Viết chương trình tìm tất cả các số chia hết cho `7` nhưng không phải bội số của `5`, nằm trong đoạn `2000` và `3200` (tính cả `2000` và `3200`). Các số thu được sẽ được in thành chuỗi trên một dòng, cách nhau bằng dấu phẩy.

```python
j=[] for i in range(2000, 3201):
  if (i%7==0) and (i%5!=0):
    j.append(str(i))
print (','.join(j))
```

Nếu chỉ cần in ra màn hình kết quả, chúng ta có thể không cần sử dụng `List`.

```python
for i in range(2000, 3201):
    if (i % 7 == 0) and (i % 5 != 0):
        print(i, end=' ')
```

**Bài 3.** Viết một chương trình có thể tính giai thừa của một số cho trước. Kết quả được in thành [chuỗi](/bai-viet/kieu-xau-string-trong-python-kieu-chuoi-trong-python.html) trên một dòng, phân tách bởi dấu phẩy. Ví dụ, số cho trước là `8` thì kết quả đầu ra phải là `40320`.

```python
n = int(input("Nhập số cần tính giai thừa:")) 
def fact(n):
    if n==0:
        return 1
    else:
        return n*fact(n-1)
print(fact(n))
```

Nếu chỉ sử dụng vòng lặp, không sử dụng hàm và lời gọi [đệ quy](/bai-viet/de-quy-la-gi.html), ta có thể làm như sau:

```python
n = int(input('Enter a number '))
factorial = 1
for i in range(1,n+1):
    factorial *= i
print(factorial)
```

**Bài 4.** Với số nguyên `n` nhất định, hãy viết chương trình để tạo ra một dictionary chứa `(i, i*i)` như là số nguyên từ `1` đến `n` (bao gồm cả `1` và `n`) sau đó in ra dictionary này. Ví dụ: Giả sử số `n` là `8` thì đầu ra sẽ là: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}`.

```python
n = int(input('Enter a number '))
d = dict()
for i in range(1, n+1):
    d[i] = i*i
print(d)
```

**Bài 5.** Viết chương trình chấp nhận một chuỗi số, phân tách bằng dấu phẩy từ giao diện điều khiển, tạo ra một `List`  và một `tuple` chứa mọi số.

Ví dụ: Đầu vào được cung cấp là `34,67,55,33,12,98` thì đầu ra là:

`['34', '67', '55', '33', '12', '98']`
`('34', '67', '55', '33', '12', '98')`

Chương trình này chỉ đơn giản là sử dụng hàm `split()` và chuyển một `List` sang một `tuple`.

```python
values=input("Nhập vào các giá trị:") 
l=values.split(",") 
t=tuple(l) 
print (l) 
print (t)
```

**Bài 6.** Viết một hàm tính giá trị bình phương của một số.

```python
# square of a number
x = int(input("Enter a number: "))
def square(x):
    return x * x
```

**Bài 7.** Viết chương trình tính số Fibonacci thứ `n`, với `n` nhập vào từ bàn phím.

```python
# find fibonacci number
n = int(input("Enter a number: "))
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

**Bài 8.** Viết một chương trình nhập vào một danh sách các số và tạo một danh sách mới chỉ gồm phần tử đầu tiên và cuối cùng của danh sách đó. Viết chương trình sử dụng hàm.

Ví dụ, nhập vào danh sách `[5, 10, 15, 20, 25]` thì kết quả trả về là danh sách `[5, 25]`

```python
def list_ends(a_list):
    return [a_list[0], a_list[len(a_list)-1]]
```

**Bài 9.** Viết một hàm nhận vào ba số thực và trả về số lớn nhất trong ba số. Lưu ý, không sử dụng hàm `max()` của Python.

```python
# max of three numbers
def max_of_three(a, b, c):
    if a > b:
        if a > c:
            return a
        else:
            return c
    else:
        if b > c:
            return b
        else:
            return c
```

**Bài 10.** Viết chương trình yêu cầu người dùng nhập vào một chuỗi và in ra màn hình thông báo chuỗi đó có phải là chuỗi **palindrome** hay không. (Chuỗi **Palindrome** là một chuỗi mà đọc xuôi và ngược đều như nhau, ví dụ `ABCDCBA`.)

Cách giải thứ nhất, sử dụng cách đảo ngược xâu:

```python
wrd=input("Please enter a word")
wrd=str(wrd)
rvs=wrd[::-1]
print(rvs)
if wrd == rvs:
    print("This word is a palindrome")
else:
    print("This word is not a palindrome")
```

Cách thứ hai, sử dụng vòng lặp `for`

```python
def reverse(word):
   x = ''
   for i in range(len(word)):
      x += word[len(word)-1-i]
   return x

word = input('give me a word:\n')
x = reverse(word)
if x == word:
   print('This is a Palindrome')
else:
   print('This is NOT a Palindrome')
```

**Bài 11.** Viết chương trình hỏi người dùng một số tự nhiên `n` và in ra tất cả ước số của con số đó.

```python
n = int(input("Enter a number: "))
for i in range(1, n + 1):
    if n % i == 0:
        print(i)
```

**Bài 12.** Viết một chương trình (sử dụng các hàm) yêu cầu người dùng nhập một chuỗi dài gồm nhiều từ. In lại cho người dùng một chuỗi mới với thứ tự từ ngữ được đảo ngược lại với thứ tự ban đầu. Ví dụ, khi người dùng nhập chuỗi: `Toi la Phuong` thì in ra màn hình `Phuong la Toi`

```python
sentense = input("Enter a sentence: ")
words = sentence.split()
words.reverse()
sentence = " ".join(words)
print(sentence)
```

**Bài 13.** Viết chương trình kiểm tra xem số `n` có là số nguyên tố hay không.

```python
# check prime number
n = int(input("Enter a number: "))
for i in range(2, n):
    if n % i == 0:
        print("Not a prime number")
        break
else:
    print("Prime number")
```

**Bài 14.** Viết một chương trình nhập vào hai số tự nhiên `m`, `n`. In ra màn hình mảng hai chiều mà phần tử trong hàng thứ `i` và cột thứ `j` của mảng là `i*j`.

Ví dụ: Giá trị `m`, `n` nhập vào là `3` và `5` thì đầu ra là: `[[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8]]`

```python
m, n = map(int, input('Enter two numbers: ').split())
array2 = [[0 for i in range(n)] for j in range(m)]
for row in range(m):
    for col in range(n):
        array2[row][col] = row * col
print(array2)
```

**Bài 15.** Viết một chương trình nhận chuỗi từ do người dùng nhập vào, phân tách nhau bởi dấu phẩy và in những từ đó thành chuỗi theo thứ tự bảng chữ cái, phân tách nhau bằng dấu phẩy.

Giả sử đầu vào được nhập là: `without,hello,bag,world` thì đầu ra sẽ là `bag,hello,without,world`.

```python
items=[x for x in input("Nhập một chuỗi: ").split(',')]
items.sort()
print (','.join(items))
```

**Bài 16.** Viết chương trình giải phương trình bậc hai $ax^2+bx+c=0$ với `a`, `b`, `c` là số nguyên và được nhập vào từ bàn phím.

```python
a, b, c = map(int, input('Nhập a, b, c cách nhau bằng dấu cách: ').split())
if a == 0:
    if b == 0:
        if c == 0:
            print("Phương trình có vô số nghiệm")
        else:
            print("Phương trình vô nghiệm")
    else:
        print("Phương trình có một nghiệm x =", -c/b)
else:
    delta = b**2 - 4*a* c
    if delta < 0:
        print("Phương trình vô nghiệm")
    elif delta == 0:
        print("Phương trình có nghiệm kép x1 = x2 =", -b/(2*a))
    else:
        print("Phương trình có 2 nghiệm phân biệt x1 =", (-b + delta**0.5)/(2*a), "và x2 =", (-b - delta**0.5)/(2*a))
```

**Bài 17.** Viết chương trình tính tổng của các chữ số của môt số nguyên dương `n` trong Python. Số nguyên dương `n` được nhập từ bàn phím.

```python
def totalDigitsOfNumber(n):
    total = 0;
    while (n > 0):
        total = total + n % 10;
        n = int(n / 10);
    return total;

n = int(input("Nhập số nguyên dương n = "));
print("Tổng các chữ số của", n , "là", totalDigitsOfNumber(n));
```

**Bài 18.** Viết chương trình sinh các xâu nhị phân có độ dài `n`.

Xem lời giải tại đây [Thuật toán sinh các dãy nhị phân có độ dài n](/bai-viet/thuat-toan-sinh-cac-day-nhi-phan-co-do-dai-n.html)

**Bài 19.** Viết chương trình giải bài toán [Bài toán Tháp Hà Nội (Tower of Hanoi)](/bai-viet/bai-toan-thap-ha-noi-tower-of-ha-noi.html)

**Bài 20.** Viết chương trình phân tích số nguyên dương `n` thành thừa số nguyên tố.

```python
def phanTichSoNguyen(n):
    i = 2;
    listNumbers = [];
    # phân tích
    while (n > 1):
        if (n % i == 0):
            n = int(n / i);
            listNumbers.append(i);
        else:
            i = i + 1;
    # nếu listNumbers trống thì add n vào listNumbers
    if (len(listNumbers) == 0):
        listNumbers.append(n);
    return listNumbers;

n = int(input("Nhập số nguyên dương n = "));

listNumbers = phanTichSoNguyen(n);
size = len(listNumbers);
sb = "";
for i in range(0, size - 1):
    sb = sb + str(listNumbers[i]) + " x ";
sb = sb + str(listNumbers[size-1]);
# in kết quả ra màn hình
print("Kết quả:", n, "=", sb);
```

**Bài 21.** Định nghĩa một `class` có ít nhất 2 method:

- `getString`: để nhận một chuỗi do người dùng nhập vào từ giao diện điều khiển.

- `printString`: in chuỗi vừa nhập sang chữ hoa.

Thêm vào các hàm hiểm tra đơn giản để kiểm tra method của class.

Ví dụ: Chuỗi nhập vào là giasu.ai.vn thì đầu ra phải là GIASU.AI.VN

```python
class InputOutString(object):
   def __init__(self):
       self.s = ""

   def getString(self):
       self.s = input("Nhập chuỗi:")
   def printString(self):
       print (self.s.upper())

strObj = InputOutString()
strObj.getString()
strObj.printString()
```

**Bài 22.** Viết chương trình Python tính tổng các phần tử của một danh sách.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]
for i in range(0,n): print(a[i],' ',end='')
print()

tong=0
for i in range(0,n):
    tong+=a[i]
print('Tổng =',tong)
```

**Bài 23.** Viết chương trình Python đếm số lượng các số hạng dương và tổng của các số hạng dương.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

dem=0
tongd=0
for i in range(0,n):
    if a[i]>0:
       dem+=1
       tongd+=a[i]
print('Số hạng dương:',dem)
print('Tổng số dương:',tongd)
```

Hoặc có thể sử dụng hàm:

```python
def count_positive_numbers_and_sum(numbers):
    count = 0
    sum = 0
    for number in numbers:
        if number > 0:
            count += 1
            sum += number
    return count, sum

# Sử dụng hàm trên với một danh sách các số nguyên bất kỳ
numbers = [1, 2, 3, -4, -5, 6, 7, -8, 9]
count, sum = count_positive_numbers_and_sum(numbers)

print("Số lượng các số hạng dương là:", count)
print("Tổng các số hạng dương là:", sum)
```

**Bài 24.** Viết chương trình Python tính trung bình cộng của cả danh sách, trung bình cộng các phần tử dương trong danh sách.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

for i in range(0,n):tong+=a[i]
print('Trung bình cộng của danh sách:',tong)
dem=0
tongd=0
for i in range(0,n):
    if a[i]>0:
       dem+=1
       tongd+=a[i]
print('Trung bình cộng các số dương:',tongd/dem)
```

**Bài 25.** Viết chương trình Python tìm vị trí của phần tử âm đầu tiên trong danh sách.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

i=0
while a[i]>=0:
    i+=1
    if i==n:
       break
if i==n:
    print('Không có phần tử âm')
else:
    print('Vị trí phần tử âm đầu tiên:',i+1)
```

**Bài 26.** Viết chương trình Python tìm vị trí của phần tử dương cuối cùng trong danh sách.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]
i=n-1
while a[i]<=0:
   i-=1
   if i==-1:
      break
if i==-1:
    print('Không có phần tử dương')
else:
    print('Vị trí phần tử dương cuối cùng:',i+1)
```

**Bài 27.** Viết chương trình Python tìm phần tử lớn nhất của danh sách và vị trí phần tử lớn nhất cuối cùng.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

max=a[0]
vt=0
for i in range(1,n-1):
    if a[i]>max:
        max=a[i]
        vt=i
print('Số lớn nhất là',max,'tại vị trí',vt+1)
```

**Bài 28.** Viết chương trình Python tìm phần tử lớn thứ nhì của danh sách và các vị trí của các phần tử đạt giá trị lớn nhì.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

B=a.copy()
m=max(B)
i=0
while i<len(B):
    if B[i]==m:
        B.remove(B[i])
        i-=1
    i+=1
if len(B)==0:
    print("Khong co so lon nhi")
else:
    m=max(B)
    print("So lon nhi la",m,"tai vi tri",end=" ")
    for i in range(len(a)):
        if a[i]==m:
            print(i+1,end=", ")
```

**Bài 29.** Viết chương trình Python tính số lượng các số dương liên tiếp nhiều nhất.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

d=len(a)
i=0
maxd=0
while i<d:
    while a[i]<=0:
        i+=1
        if i==d:break
    if i<d:
        max1=0
        j=i
        while a[j]>0:
            max1+=1
            j+=1
            if j==d: break
        if max1>maxd: 
            maxd=max1
        i=j
    i+=1
print('So duong lien tiep dai nhat =',maxd)
```

**Bài 30.** Viết chương trình Python tính số lượng các số dương liên tiếp có tổng lớn nhất.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

d=len(a)
i=0
sumd=0
while i<d:
    while a[i]<=0:
        i+=1
        if i==d:break
    if i<d:
        sum1=0
        j=i
        while a[j]>0:
            sum1+=a[j]
            j+=1
            if j==d: break
        if sum1>sumd: 
            sumd=sum1
        i=j
    i+=1
print('Tong so duong lien tiep dai nhat =',sumd)
```

**Bài 31.** Viết chương trình Python tính số lượng các phần tử liên tiếp đan dấu nhiều nhất (dãy phần tử liên tiếp được gọi là đan dấu nếu tích hai phần tử liên tiếp âm).

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

d=len(a)
i=0
maxdd=0
for i in range(d-1):
    max1=0
    while a[i]*a[i+1]<0:
        max1+=1
        i+=1
        if i==d-1:break
    if max1>maxdd: maxdd=max1
if maxdd>0: maxdd+=1
print('Day so dan dau dai nhat =',maxdd)
```

**Bài 32.** Viết chương trình Python tính số lượng các phần tử không tăng nhiều nhất.

**Bài 33.** Viết chương trình Python tìm vị trí bắt đầu đoạn con dương liên tiếp có nhiều phần tử nhất.

**Bài 34.** Viết chương trình Python tìm đoạn con có các số hạng dương liên tiếp có tổng lớn nhất. (Nếu có nhiều đoạn con thoả mãn thì đưa ra màn hình: Số đoạn con thoả mãn và các đoạn con đó).

**Bài 35.** Viết chương trình Python đếm số lượng các phần tử bằng giá trị `x` nhập từ bàn phím.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

x=float(input('Nhập 1 số từ bàn phím: '))
dem=0
for i in range(0,n):
    if a[i]==x:
        dem=dem+1
print('Số lượng phần tử bằng',x,':',dem)
```

**Bài 36.** Viết chương trình Python chuyển các phần tử dương của danh sách lên đầu danh sách và in danh sách ra màn hình.

**Bài 37.** Viết chương trình Python tìm số phần tử là dương và là số nguyên tố của danh sách và vị trí của nó trong danh sách.

**Bài 38.** Viết chương trình Python chèn một số m (m nhập vào từ bàn phím ) vào đầu danh sách, cuối danh sách và vị trí thứ 5 của danh sách.

**Bài 39.** Viết chương trình Python chèn danh sách [1,2,3] vào vị trí đầu, cuối và thứ 5 của danh sách.

**Bài 40.** Viết chương trình Python xóa phần tử thứ k (k nhập từ bàn phím) trong danh sách.

**Bài 41.** Viết chương trình Python sắp xếp danh sách theo thứ tự tăng dần, giảm dần.

```python
n=10
a=[2, -4, 1, 9, -3, 6, 3, -2, 6, 8]

x=float(input('Nhập 1 số từ bàn phím: '))
dem=0
for i in range(0,n):
    if a[i]==x:
        dem=dem+1
print('Số lượng phần tử bằng',x,':',dem)
#--------------------------------------------------------
# Bài 41. Sắp xếp danh sách tăng dần, giảm dần
#Sắp xếp danh sách tăng
for i in range(0,n-1):
   for j in range(i+1,n):
      if a[i]>a[j]:
         t=a[i]
         a[i]=a[j]
         a[j]=t
print('Danh sách đã sắp xếp tăng:')
print(a)
#Sắp xếp danh sách giảm
for i in range(0,n-1):
   for j in range(i+1,n):
      if a[i]<a[j]:
         t=a[i]
         a[i]=a[j]
         a[j]=t
print('Danh sách đã sắp xếp giảm:')
print(a)
```

(Còn tiếp)
