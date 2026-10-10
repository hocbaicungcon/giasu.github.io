---
title: Các phép toán trong Dart (Toán tử Dart/Flutter)
description: Các phép toán trong Dart (các toán tử trong Dart) chính là các phương
  thức method được định nghĩa trong các lớp với một cú pháp đặc biệt. Chẳng hạn, khi
  bạn
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- CNTT
- Lập trình
- Dart
- Flutter
---

Các phép toán trong Dart (các toán tử trong Dart) chính là các phương thức `method` được định nghĩa trong các lớp với một cú pháp đặc biệt. Chẳng hạn, khi bạn sử dụng các toán tử như `x == y`, thì cũng chính là bạn đang gọi phương thức `x. == (y)` để so sánh đẳng thức.

![các phép toán trong dart flutter, toán tử trong dart](assets/images/cac-phep-toan-trong-dart-toan-tu-dart-flutter-dart-operator-cheat-sheet.png)

Các phép toán trong Dart gồm có các loại sau:

- Toán tử số học

- Toán tử tăng và giảm

- Toán tử so sánh

- Toán tử logic

- Toán tử thao trên `bit`

- Toán tử `null safety`

## Toán tử số học trong Dart

Toán tử số học có tác dụng đối với kiểu dữ liệu [số nguyên `int`, số thực `double`](/bai-viet/kieu-so-trong-dart-flutter.html) và kiểu số `num` nói chung.

- `+` Phép cộng. Ví dụ `3 + 1` kết quả `4`

- `-` Phép trừ. Ví dụ `5 - 6` kết quả `-1`

- `*` Phép nhân. Ví dụ `3*  3`  kết quả `9`

- `/` Phép chia. Ví dụ `5 / 6` kết quả `0.8333333333333334`

- `~/` Phép chia lấy phần nguyên (tương tự phép toán `div` trong các ngôn ngữ khác). Ví dụ `6 ~/ 4` kết quả `1`

- `%` Phép chia modulo (lấy phần dư, tương tự phép toán `mod` trong các ngôn ngữ khác). Ví dụ `6 % 4` kết quả `2`

- `-(biểu_thức)` Đổi dấu kết quả của `biểu_thức`. Ví dụ `-(5 - 6)` cho kết quả `1`

## Toán tử tăng và giảm trong Dart

- `++var`

Tăng giá trị của biến `var` lên `1`, tương đương với phép gán`var = var + 1` hoặc `var +=1`.

- Tuy nhiên, toán tử `++` có thể đặt trong các biểu thức tính toán, khi đó việc tăng giá trị này được tiến hành trước khi thực hiện tính toán biểu thức. Ví dụ sau thì biểu thức `b+(++a)` có giá trị `16`

```python
void main() {   
  int a = 5;
  int b = 10;
  print(b +(++a)); //cho kết quả 16
  print(a); //a vẫn có giá trị 6
}
```

- `var++`

Tăng giá trị của biến `var` lên `1`, tương đương với phép gán`var = var + 1` hoặc `var +=1`.

- Tuy nhiên, toán tử `++` có thể đặt trong các biểu thức tính toán, khi đó việc tăng giá trị này được tiến hành sau khi thực hiện biểu thức. Ví dụ sau thì biểu thức `b+(a++)` có giá trị `15` dù sau đó biến `a` vẫn được tăng thêm `1` thành giá trị `6`.

```python
void main() {   
  int a = 5;
  int b = 10;
  print(b +(a++)); //cho kết quả 15
  print(a);//a vẫn có giá trị 6
}
```

- `--var` Tương tự `++var` nhưng là giảm đi `1`.

- `var--` Tương tự `var++` nhưng là giảm đi `1`.

## Phép gán trong Dart

Phép gán là `=`, để thực hiện gán giá trị biểu thức bên phải vào biến ở phía bên trái toán tử `=`.

`biến = biểu_thức;`

Mời các bạn xem chi tiết về phép gán trong bài [Bài 2. Biến và các kiểu dữ liệu trong Dart](/bai-viet/bien-va-cac-kieu-du-lieu-trong-dart.html)

## Phép gán tăng, giảm giá trị

- `var += x` tăng biến `var` lên `x` đơn vị

- `var -= x` giảm biến `var` lên `x` đơn vị

```
void main() { 

  var a = 5;
  print(a+=1); //cho kết quả 6
  print(a-=4); // cho kết quả 2
}
```

## Toán tử so sánh trong Dart

Các toán tử này thực hiện trên biểu thức logic, kết quả là `true` hoặc `false`

- `==`So sánh bằng. Ví dụ `5 == 5` kết quả `true`, `5 == 6` kết quả `false`

- `!=`So sánh không bằng. Ví dụ `5 != 5` kết quả `false`, `5 != 6` kết quả `true`

- `>`So sánh lớn hơn. Ví dụ `5 > 5` kết quả `false`, `6 > 5` kết quả `true`

- `<`So sánh nhỏ hơn. Ví dụ `5 < 5` kết quả `false`, `5 > 6` kết quả `true`

- `<=`So sánh nhỏ hơn hoặc bằng

- `>=`So sánh lớn hơn hoặc bằng

## Toán tử logic Dart

- `|`Phép logic hoặc (toán tử `or` trong Toán học), `a | b` kết quả `true` nếu `a` hoặc `b` là `true`

- `&` Phép logic và (toán tử `and` trong Toán học), `a & b` kết quả `true` nếu `a` và `b` đều `true`

- `!(biểu_thức)`Phép phủ định (toán tử `not` trong Toán học) `!a` nếu `a` là `true` thì kết quả phép toán là `false`

Chi tiết về các toán tử logic, bạn có thể xem ở bài [Kiểu logic `bool` trong Dart/Flutter](/bai-viet/kieu-logic-bool-trong-dart.html). Dưới đây là bảng giá trị chân lý của các phép toán `and`, `or` và `not` trong Toán học.

![toan tu bool trong Python Toán tử Boolean trong Python](assets/images/cac-phep-toan-trong-dart-toan-tu-dart-flutter-toan-tu-bool-trong-Python.png)

## Toán tử điều kiện

`điều_kiện <span style="color: #ff0000;">?</span> biểu_thức_1 : biểu_thức_2`

Nếu `biểu_thức_điều_kiện`đúng thì trả về giá trị của`biểu_thức_1`, ngược lại là `biểu_thức_2`

```
void main() {
  var a = 1; 
  var b = 2;
  print((a > b) ? a : b); //kết quả trả về 2
}
```

`biểu_thức_1 <span style="color: #ff0000;">??</span> biểu_thức_2`

Nếu `biểu_thức_1` khác `null` thì lấy `biểu_thức_1`, ngược lại lấy giá trị từ `biểu_thức_2`

## Một số phép toán trong Dart khác

- `[]`

Truy cập phần tử của danh sách, mảng (kiểu `list`)

- Ví dụ với `List` `temp = [1,12,31]` thì `temp[1]`trả về phần tử thứ hai (có index bằng 1 vì index của phần tử đầu tiên là 0) của mảng, là `12`.

`.`Truy cập phương thức, thuộc tính đối tượng
`as`Chuyển kiểu: `(var as MyClass)`
`is`Kiểm tra kiểu: `(var is MyClass)`
`is!`Kiểm tra kiểu: `(var is! MyClass)`
