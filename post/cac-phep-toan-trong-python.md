---
title: Bài 3. Các phép toán trong Python
description: 'Các phép toán trong Python: phép gán giá trị, phép toán số học, toán
  tử so sánh, toán tử dịch chuyển bit...'
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- Phép toán
- CNTT
grade: 10
---

# Các phép toán trong Python

**Biểu thức** trong Python là một tập hợp các **toán hạng** và các **toán tử** được sắp xếp theo thứ tự nhất định. **Toán hạng** ở đây chính là các biến số, hằng số, các tên hàm hoặc các con số cụ thể. Còn **toán tử** chính là các phép toán, gồm có phép gán giá trị, các phép toán số học, phép toán logic, phép so sánh hoặc các phép toán trên các kiểu dữ liệu đặc biệt. Ví dụ trong biểu thức sau

`2 + 3 * sin(pi)`

thì `2 3 sin(pi)` là các toán hạng, còn `+ *` là các toán tử.

Trong phần này, chúng ta chưa tìm hiểu sâu về các kiểu dữ liệu cơ bản của Python. Do đó, nếu có nói đến kiểu số thì bạn hiểu đó là các con số thông thường như số thực, số nguyên,… còn nếu nói đến dữ liệu kiểu xâu `str` thì bạn hiểu đó chính là các chữ cái, các từ, các câu… được đặt trong cặp ngoặc nháy đơn, nháy kép.

[](#_ftnref1)Lưu ý rằng Python sử dụng dấu chấm để ngăn cách phần nguyên và phần thập phân, chẳng hạn số π có giá trị gần đúng là `π = 3.1415926`

Tải ebook đầy đủ tại đây: [15 Cuốn sách học Python miễn phí](/bai-viet/15-cuon-sach-hoc-python-mien-phi.html)

Xem thêm: [20 Bài tập Python cơ bản có lời giải](/bai-viet/bai-tap-python-co-ban-co-loi-giai.html)

## 1. Phép gán giá trị trong Python

Khái niệm biến số, hằng số được hiểu giống như trong toán học, chúng ta sẽ không đi sâu vào các khái niệm này. Mỗi một biến, hằng đều mang một giá trị nào đó. Phép gán **assignment** được dùng để gán giá trị `value` cho biến số hoặc hằng số có tên `name`, chúng ta sử dụng cú pháp:

`name = value`

Ví dụ sau đây (thực hiện trực tiếp trên trình thông dịch Python) gán giá trị bằng `3` vào biến có tên là `a` và giá trị `3.14` vào biến có tên là `pi`. Sau đó thực hiện phép cộng số học `a + pi`. Ví dụ tiếp theo gán giá trị kiểu xâu str “`Phu`” vào biến có tên là `ho`, giá trị “`Ong`” vào biến có tên là `ten` và thực hiện phép cộng hai xâu  `ho + ten`

```python
>>> a = 3
>>> pi = 3.14
>>> a + pi
6.140000000000000
>>> ho = "Phu"
>>> ten = "Ong"
>>> ho + ten
'PhuOng'
```

Chú ý cần phân biệt *phép gán* `=` với phép *so sánh bằng nhau, so sánh đồng nhất* `==`.

Về biến số, ta có các khái niệm biến toàn cục và biến địa phương. Phần này sẽ thảo luận sau khi tìm hiểu về hàm `function` và lớp `class`.

Chúng ta có thể gán đồng thời nhiều giá trị cho nhiều biến cùng một lúc, ta gọi là phép gán đa biến*(* multiple assignment*), sử dụng cú pháp sau*

`name1, name2 = value1, value2`

Chẳng hạn, hãy xem ví dụ sau

```python
>>> a, b = 10, 5
>>> ten, tuoi, sdt = 'Phu Ong', 31, '0123456789'
```

Chính nhờ ưu điểm này, mà để hoán đổi giá trị của hai biến, ta có thể chỉ sử dụng một câu lệnh và cũng không cần phải sử dụng thêm các biến trung gian như các ngôn ngữ khác, chỉ đơn giản như sau

```python
>>> a, b = b, a
```

Chúng ta cũng có thể gán một giá trị cho đồng thời nhiều biến

```python
>>> a = b = c = 300
>>> print(a, b, c)
300 300 300
```

### Kiểu dữ liệu của biến trong Python

Nhiều ngôn ngữ lập trình như C, Dart,…, sử dụng kiểu dữ liệu tĩnh (static), tức là một biến chỉ có thể nhận các giá trị của cùng một kiểu. Python thì trái lại, các biến trong Python có thể nhận mọi giá trị thuộc bất kì kiểu nào.

```python
>>> var = 23.5
>>> print(var)
23.5
>>> var = "Đây là một xâu này"
>>> print(var)
Đây là một xâu này
```

### Bài tập

Hãy tự đặt 10 tên biến khác nhau và sử dụng trình thông dịch Python để kiểm tra xem tên đó có hợp lệ không.

*Gợi ý. Sử dụng phép gán để kiểm tra tên có hợp lệ không, nếu gán thành công là hợp lệ, ngược lại là không hợp lệ.*

Ngoài phép gán trực tiếp như trên, chúng ta còn có thể kết hợp phép gán với các phép toán khác như trong bảng dưới đây:

| Toán tử | Giải thích | Ví dụ |
| --- | --- | --- |
| `+=` | Cộng giá trị của toán hạng bên trái với toán hạng bên phải và gán kết quả vào toán hạng bên trái. | `c += a` tương đương với `c=c+a` |
| `-=` | Trừ giá trị của toán hạng bên trái đi toán hạng bên phải rồi gán kết quả vào toán hạng bên trái. | `c -= a` tương đương với `c=c-a` |
| `*=` | Nhân giá trị của toán hạng bên trái với toán hạng bên phải rồi gán kết quả vào toán hạng bên trái. | `c* = a` tương đương với `c=c*a` |
| `/=` | Chia giá trị của toán hạng bên trái cho toán hạng bên phải rồi gán kết quả vào toán hạng bên trái. | `c /= a` tương đương với `c=c/a` |
| `%=` | Chia lấy dư toán hạng bên trái cho toán hạng bên phải rồi gán kết quả vào toán hạng bên trái. | `c %= a` tương đương với `c=c%a` |
| `**=` | Lũy thừa toán hạng bên trái với số mũ là toán hạng bên phải rồi gán kết quả vào toán hạng bên trái. | `c** = a` tương đương với `c=c**a` |
| `//=` | Chia lấy phần nguyên toán hạng bên trái cho toán hạng bên phải rồi gán kết quả vào toán hạng bên trái. | `c //= a` tương đương với `c=c//a` |

## 2. Phép toán số học trong Python

Python cung cấp các phép toán số học sau:

- **Phép cộng `+`** Tùy vào các toán hạng là kiểu số hay xâu mà phép cộng có tác dụng như phép cộng trong toán học, hoặc sẽ có tác dụng nối hai **xâu** `str` lại với nhau (phép cộng xâu), hoặc phép lấy hợp hai tập hợp. Ví dụ:

```python
>>> 1 + 2
3
>>> "Phu" + "Ong"
'PhuOng'
```

- **Phép trừ `-`** Phép trừ có tác dụng như phép trừ trong toán học, áp dụng cho kiểu số. Nếu áp dụng phép trừ cho các toán hạng [kiểu tập hợp](/bai-viet/kieu-du-lieu-tap-hop-set-trong-python.html) `set` thì ta có phép lấy hiệu hai tập hợp.

```python
>>> 3 - 6
-3
```

- **Phép nhân `*`**Nếu cả hai toán hạng là kiểu số thì phép nhân có tác dụng như phép nhân trong toán học. Còn nếu một trong hai toán hạng là xâu `str`, toán hạng còn lại là một số nguyên dương `k` thì phép nhân sẽ có tác dụng lặp lại** xâu** `str` đó thêm `k` lần.

```python
>>> 2*3
6
>>> "Phu Ong"*3
'Phu OngPhu Ong Phu Ong'
>>> 3*"Phu Ong"
'Phu OngPhu Ong Phu Ong'
```

- **Phép chia `/`** Phép chia áp dụng cho kiểu số. Nếu các toán hạng là số thực hoặc số nguyên thì kết quả trả về luôn là số thực. Lưu ý, trong **Python 2** thì phép chia này có tác dụng như phép chia lấy phần nguyên. Khi đó, muốn kết quả là một số thực bạn phải ép kiểu một trong hai toán hạng sang kiểu số thực `float`, chẳng hạn thay vì viết `1/2` bạn phải viết `1/2.` hoặc `1./2`

```python
>>> 1/2
0.5
>>> 1/7
0.14285714285714285
```

- **Phép chia lấy phần nguyên `//`** Phép chia `//` này tương ứng với phép toán `div` trong toán học và các ngôn ngữ khác. Khi chia số nguyên `a` cho số nguyên `b` ta được thương là `q` và số dư là `r`.

`a = b*q + r`

Kết quả của phép chia `//` này chính là thương `q` trong định nghĩa trên.

```python
>>> 12//4
3
>>> 13//4
3
>>> 15//4
3
```

- **Phép chia lấy phần dư `%`**

Khi chia số nguyên `a` cho số nguyên `b` ta được thương là `q` và số dư là `r`. Thì kết quả của phép chia lấy dư `%` chính là số `r` trong biểu thức đã nêu ở phần trước.

```python
>>> 12 % 4
0
>>> 13 % 4
1
>>> 15 % 4
3
```

- **Phép lũy thừa `**`**

Đây chính là phép tính lũy thừa trong toán học, `a**b` trả về kết quả là ab.

```python
>>>2**10
1024
```

Chú ý, `a^b` trong Python không phải là phép tính lũy thừa hoặc mũ, mà là phép toán dịch chuyển bit, xem phần sau để rõ hơn.

### Bài tập

Sử dụng trình thông dịch Python và các phép toán số học để kiểm tra xem năm 2017 có là năm nhuận hay không.

## 3. Phép toán logic

Phép toán logic làm việc trên các toán tử logic, tức là các biến, biểu thức chỉ có hai khả năng đúng `True` hoặc sai `False`. Xin xem [kiểu dữ liệu logic](/bai-viet/kieu-logic-boolean-trong-python.html) `bool` để hiểu rõ. Python cung cấp các phép toán logic `and or not`.

- Phép toán `and` sẽ trả về kết quả `True` nếu cả hai toán hạng đều là `True`. Bảng giá trị chân lý của phép toán and như sau:

| `A` | `B` | `A and B` |
| --- | --- | --- |
| `True` | `True` | `True` |
| `True` | `False` | `False` |
| `False` | `True` | `False` |
| `False` | `False` | `False` |

- Phép toán `or` sẽ trả về kết quả `True` nếu một trong hai toán hạng là `True`. Bảng giá trị chân lý của phép toán or như sau:

| `A` | `B` | `A or B` |
| --- | --- | --- |
| `True` | `True` | `True` |
| `True` | `False` | `True` |
| `False` | `True` | `True` |
| `False` | `False` | `False` |

- Phép toán `not` được sử dụng để đảo ngược giá trị chân lý của một biểu thức. Bảng giả trị chân lý của phép toán not như sau:

| `A` | `not A` |
| --- | --- |
| `True` | `False` |
| `False` | `True` |

Sau đây là một vài ví dụ minh họa, tất cả đều chạy trực tiếp trong trình thông dịch của Python.

```python
>>> True and False
False
>>> True or False
True
>>> not False
True
```

## 4. Phép toán so sánh trong Python

Kết quả trả về của một phép toán so sánh là `True` (đúng) hoặc `False` (sai), hai giá trị này thuộc [kiểu dữ liệu logic](/bai-viet/kieu-logic-boolean-trong-python.html) `bool`. Python cung cấp các phép toán so sánh sau đây:

- **So sánh đồng nhất (giống nhau, bằng nhau) `==`******Cần chú ý rằng phép so sánh đồng nhất khác với phép toán `is`

- **So sánh lớn hơn****`>`**

- **So sánh lớn hơn hoặc bằng****`>=`**

- **So sánh nhỏ hơn****`<`**

- **So sánh nhỏ hơn hoặc bằng****`<=`**

- **So sánh không bằng (khác nhau)****`!=`**

Giả sử biến `a` có giá trị `10` và biến `b` có giá trị `20`, thì:

| Toán tử | Giải thích | Thí dụ |
| --- | --- | --- |
| `==` | Nếu giá trị của hai toán hạng bằng nhau thì trả về kết quả `True` | `(a == b)` có kết quả `False` |
| `!=` | Nếu giá trị của hai toán hạng không bằng nhau thì trả về kết quả `True` | `(a != b)` có kết quả `True` |
| `>` | Nếu giá trị của toán hạng bên trái lớn hơn giá trị của toán hạng bên phải, thì trả về kết quả `True` | `(a > b)` có kết quả `False` |
| `<` | Nếu giá trị của toán hạng bên trái nhỏ hơn giá trị của toán hạng bên phải, thì trả về kết quả `True` | `(a < b)` có kết quả `True` |
| `>=` | Nếu giá trị của toán hạng bên trái lớn hơn hoặc bằng giá trị của toán hạng bên phải, thì trả về kết quả `True` | `(a >= b)` có kết quả `False` |
| `<=` | Nếu giá trị của toán hạng bên trái nhỏ hơn hoặc bằng giá trị của toán hạng bên phải, thì trả về kết quả `True` | `(a <= b)` có kết quả `True` |

## 5. Phép toán thao tác bit

Thông thường, trong cuộc sống chúng ta sử dụng hệ đếm thâp phân, cơ số 10 gồm các 10 chữ số từ 0 đến 9. Nhưng để biểu diễn thông tin trong máy tính, chúng ta sử dụng các bóng bán dẫn, chỉ có hai trạng thái bật hoặc tắt, tương ứng với hai giá trị 1 và 0 của hệ đếm cơ số 2, tức hệ nhị phân.

Theo [wiki](https://vi.wikipedia.org/wiki/Ph%C3%A9p_to%C3%A1n_thao_t%C3%A1c_bit) thì “Các phép toán trên thao tác bit (bitwise operation) được thực hiện trên một hoặc nhiều chuỗi bit hoặc số nhị phân tại cấp độ của từng bit riêng biệt. Các phép toán này được thực hiện nhanh, ưu tiên, được hỗ trợ trực tiếp bởi vi xử lý, và được dùng để điều khiển các giá trị dùng cho so sánh và tính toán. Đối với các loại vi xử lý rẻ tiền, thường thì các phép toán trên thao tác bit nhanh hơn phép chia đáng kể, đôi khi nhanh hơn phép nhân, và đôi khi nhanh hơn phép cộng đáng kể. Trong khi các vi xử lý hiện đại thường thực hiện phép nhân và phép cộng nhanh tương đương các phép toán trên thao tác bit nhờ vào cấu trúc đường ống lệnh của chúng dài hơn và cũng nhờ vào các lựa chọn trong thiết kế cấu trúc, các phép toán trên thao tác bit thường sử dụng ít năng lượng hơn vì sử dụng ít tài nguyên hơn.”

Tuy nhiên, trong Python chúng ta ít khi sử dụng các phép toán thao tác trên bit. Chẳng hạn xét trong hệ nhị phân `a = 0011 1100` và `b = 0000 1101` thì kết quả của một số phép toán như sau:

```python
a&b = 0000 1100

a|b = 0011 1101

a^b = 0011 0001

~a = 1100 0011
```

Để chuyển một số sang hệ nhị phân, chúng ta dùng hàm `bin()`, chẳng hạn với `a = 60` và `b = 13`

```python
>>> a = 60
>>> b= 13
>>> bin(a)
'0b111100'
>>> bin(b)
'0b1101'
```

Chúng ta có các phép toán chuyển đổi bit như sau:

- **Phép nghịch đảo `~`** có tác dụng đổi các bit từ `0` sang `1` và ngược lại.

```python
>>> a = 1988
>>> ~a
-1989
>>> bin(a)
'0b11111000100'
>>> bin(~a)
'-0b11111000101'
```

- **Phép dịch chuyển bit.** Xét dãy bit `00110` khi dịch sang trái sẽ được `01100`, còn dịch sang phải sẽ được `00011`. Phép dịch bit sang trái còn mang ý nghĩa là nhân một số cho `2`, còn dịch sang phải mang ý nghĩa chia một số cho `2`.**

```python
>>>a=2021
>>>bin(a)
'0b11111100101'
>>>bin(a^2)
'0b11111100111'
>>>bin(a>>1)
'0b1111110010'
>>>bin(a>>2)
'0b111111001'
>>>bin(a<<3)
'0b11111100101000'
```

## 6. Các phép toán membership

Các phép toán chính là phép kiểm tra một phần tử có thuộc/không thuộc tập (set, List…) nào đó hay không.

| Toán tử | Mô tả |
| --- | --- |
| `in` | Trả về `True` nếu một (nhiều) phần tử thuộc tập hợp, chuỗi cần kiểm tra. |
| `not in` | Trae về `True` nếu một (nhiều) phần tử có trong tập, chuỗi cần kiểm tra. |

```python
>>>a = [1,2,3,4,5,6,7,8,9,10]
>>>1 in a
True
>>>[1,3] in a
False
>>>[1,2,3] in a
False
>>>b = (1,2,3,4,5,6,7,8,9,10)
>>>1 in b
True
>>>2 in b
True
>>>(1,2) in b
False
>>>c = 'PHUONG'
>>>'H' in c
True
>>>'PH' in c
True
>>>'UN' in c
False
```

Phép toán kiểm tra `in` còn được sử dụng trong vòng lặp `for`. Xin mời xem chi tiết tại [Bài 6. Câu lệnh vòng lặp for trong Python](/bai-viet/cau-lenh-vong-lap-for-trong-python.html)

Ngoài ra, còn có các phép toán trên tập hợp, xin mời các bạn xem thêm trong bài [Kiểu dữ liệu tập hợp `set` trong Python](/bai-viet/kieu-du-lieu-tap-hop-set-trong-python.html).

## 7. Thứ tự ưu tiên các phép toán

Khi thực hiện một câu lệnh Python, các phép toán được thực hiện theo một thứ tự nhất định. Thứ tự ưu tiên các phép toán, lần lượt từ ưu tiên cao xuống thấp, trong Python như sau:

| Toán tử | Giải thích |
| --- | --- |
| `<span class="pre">(expressions...)</span>`, `<span class="pre">[expressions...]</span>`, `<span class="pre">{key:</span> <span class="pre">value...}</span>`, `<span class="pre">{expressions...}</span>` | Các nhóm biểu thức trong ngoặc đơn, biểu thức trong các phần tử của danh sách, từ điển, tập hợp. |
| `<span class="pre">x[index]</span>`, `<span class="pre">x[index:index]</span>`, `<span class="pre">x(arguments...)</span>`, `<span class="pre">x.attribute</span>` | Phép truy cập phần tư, cắt khoảng phần tử và lời gọi đến các phương thức, thuộc tính |
| `<span class="pre">await</span>` `<span class="pre">x</span>` | Biểu thức `await` |
| `<span class="pre">**</span>` | Phép lũy thừa |
| `<span class="pre">+x</span>`, `<span class="pre">-x</span>`, `<span class="pre">~x</span>` | Phép cộng thêm, trừ bớt, phép lấy số đối và phép toán bitwise NOT |
| `<span class="pre">*</span>`, `<span class="pre">@</span>`, `<span class="pre">/</span>`, `<span class="pre">//</span>`, `<span class="pre">%</span>` | Phép nhân, phép nhân ma trận, phép chia, chia lấy phần nguyên, chia lấy phần dư |
| `<span class="pre">+</span>`, `<span class="pre">-</span>` | Phép cộng, phép trừ |
| `<span class="pre"><<</span>`, `<span class="pre">>></span>` | Phép dịch bit |
| `<span class="pre">&</span>` | Phép toán bitwise AND |
| `<span class="pre">^</span>` | Phép toán bitwise XOR |
| `<span class="pre">|</span>` | Phép toán bitwise OR |
| `<span class="pre">in</span>`, `<span class="pre">not</span> <span class="pre">in</span>`, `<span class="pre">is</span>`, `<span class="pre">is</span> <span class="pre">not</span>`, `<span class="pre"><</span>`, `<span class="pre"><=</span>`, `<span class="pre">></span>`, `<span class="pre">>=</span>`, `<span class="pre">!=</span>`, `<span class="pre">==</span>` | Phép toán so sánh, kiểm tra thành viên… |
| `<span class="pre">not</span>` `<span class="pre">x</span>` | Phép toán logic NOT |
| `<span class="pre">and</span>` | Phép toán logic AND |
| `<span class="pre">or</span>` | Phép toán logic OR |
| `<span class="pre">if</span>` – `<span class="pre">else</span>` | Câu lệnh điều kiện được thực hiện sau khi các biểu thức điều kiện của nó thực hiện xong |
| `<span class="pre">lambda</span>` | Hàm nặc danh |
| `<span class="pre">:=</span>` | Phép gán |

Trong bảng trên, nằm cùng hàng với nhau có mức độ ưu tiên bằng nhau, khi đó chúng sẽ được thực hiện lần lượt từ trái qua phải.
