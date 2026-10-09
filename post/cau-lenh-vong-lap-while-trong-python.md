---
title: Bài 7. Câu lệnh vòng lặp while trong Python
description: Trong bài trước, chúng ta đã tìm hiểu về vòng lặp for trong Python, bài
  này chúng ta tìm hiểu về vòng lặp while (while loops) - vòng lặp với số lần lặp
  không
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- Vòng lặp while
- CNTT
grade: 10
---

# Câu lệnh vòng lặp while trong Python

Trong bài trước, chúng ta đã tìm hiểu về [vòng lặp for](/bai-viet/cau-lenh-vong-lap-for-trong-python.html) trong Python, bài này chúng ta tìm hiểu về vòng lặp while ([while loops](https://www.w3schools.com/python/python_while_loops.asp)) – vòng lặp với số lần lặp không biết trước.

## 1. Vòng lặp while trong Python

Vòng lặp while có cấu trúc:

while <điều kiện> :
      <khối lệnh>
Trong đó, <điều kiện> là các biểu thức logic hoặc các biểu thức trả về kết quả là kiểu bool. Để thoát khỏi vòng lặp while ta cũng sử dụng lệnh break.

Khi biểu thức điều kiện <điều kiện> trả về giá trị True thì các câu lệnh trong<khối lệnh> sẽ được thực thi và sẽ được chạy lặp đi lặp lại cho tới khi nào <điều kiện> trả về giá trị **không** phải là True.

Ví dụ dưới đây sử dụng vòng lặp while để hiện thi các số từ 0 cho tới 4:

number = 0
while number < 5:
    print(number)
    number += 1
Khi bạn mắc phải lỗi logic, gây ra tình trạng vòng lặp while lặp vô hạn lần, thì để chủ động dừng chương trình, có thể sử dụng tổ hợp phím Ctrl + C. Chẳng hạn như ví dụ sau đây thì biến a luôn luôn bằng 0, tức điều kiện của vòng lặp while luôn xảy ra và câu lệnh sẽ được thực thi vô hạn lần! Khi đó để dừng chương trình, ta phải bấm đồng thời hai phím Ctrl và C.

a = 0
while (a==0): print ("It is 0!")
Chú ý rằng trong Python không có câu lệnh repeat until*,* mà thay vào đó, ta có thể sử dụng vòng lặp while với điều kiện luôn luôn đúng và câu lệnh break để thoát khỏi vòng lặp, cú pháp như sau.

while True:
      <khối lệnh>
      if <điều kiện>:
            break
Với cách làm này thì <khối lệnh> sẽ luôn luôn được thực hiện, cho đến khi nó gặp <điều kiện> thì mới kết thúc vòng lặp. Chẳng hạn, chương trình sau sẽ in ra tất cả các số nguyên chẵn nhỏ hơn 1000 và chia hết cho 3.

i = 0
while True:
      if i % 3 == 0:
            print(i)
      i += 2
      if i == 1000:
            break
Tuy nhiên, cách làm trên chỉ để minh hoạ cho cách viết theo phong cách của câu lệnh repeat until nên *khá* phức tạp, chúng ta có thể làm ngắn gọn hơn như sau:

i = 0
while i < 1000:
      if i % 3 == 0:
            print(i)
      i += 2

## Kết hợp while với else

Giống như [vòng lặp for](/bai-viet/cau-lenh-vong-lap-for-trong-python.html), bạn cũng có thể kết hợp else với while. Trong trường hợp này, <khối lệnh 2> của else sẽ được thực hiện khi điều kiện của while là False.

while <điều kiện> :
    <khối lệnh 1>
else:
    <khối lệnh 2>
Ví dụ sau Đếm và in các số nhỏ hơn 5

n = 0
while n < 5:
    print(n,"nhỏ hơn 5")
    n = n + 1
else:
    print (n,"không nhỏ hơn 5")

## Vòng lặp while trên một dòng

Nếu <khối lệnh> trong vòng lặp while chỉ có một lệnh duy nhất thì có thể viết trên cùng một dòng như ví dụ sau:

a = 0
while (a==0): print ("It is 0!")

## 2. Bài tập vòng lặp while

**Bài 1.** Chia dãy số nguyên không âm a1, a2,…,an, với n > 1 cho trước thành hai đoạn có tổng các phần tử trong mỗi đoạn bằng nhau.

**Bài 2.**In ra tất cả các xâu nhị phân[[1]](#_ftn1) có độ dài n, ví dụ với n = 4 thì kết quả in ra màn hình là:

0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111.
Bạn đọc tham khảo lời giải tại đây [Thuật toán sinh các dãy nhị phân có độ dài n](/bai-viet/thuat-toan-sinh-cac-day-nhi-phan-co-do-dai-n.html)

[[1]](#_ftnref1)     Xâu nhị phân độ dài n là xâu có độ dài bằng n và chỉ được tạo nên từ hai kí tự 0 và 1, ví dụ 10010110 là xâu nhị phân có độ dài bằng 8.
