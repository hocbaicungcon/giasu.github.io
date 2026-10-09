---
title: Chuỗi trong Python (Kiểu xâu string trong Python)
description: Chuỗi trong Python (string in python) là kiểu dữ liệu quan trọng. Các
  khai báo, gán chuỗi, chỉ số, phương thức hàm của xâu trong ngôn ngữ lập trình Python.
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- String
- CNTT
grade: 10
---

Kiểu xâu trong Python kí hiệu là str*,* nó còn được gọi là **kiểu chuỗi trong Python.** Đây là một kiểu dữ liệu chúng ta thường gặp nhất, dùng để biểu thị các kí tự, các từ, các câu văn… Tải ebook đầy đủ tại đây: [15 Cuốn sách học Python miễn phí](/bai-viet/15-cuon-sach-hoc-python-mien-phi.html)

Xem thêm:

- [100+ Bài tập Python cơ bản có lời giải](/bai-viet/bai-tap-python-co-ban-co-loi-giai.html) (có code mẫu)

- [Bài tập Python cơ bản lớp 10](/bai-viet/bai-tap-python-co-ban-lop-10.html) (có chia theo từng chủ đề và code mẫu)

- [Kiểu dữ liệu list danh sách trong Python](/bai-viet/kieu-du-lieu-list-danh-sach-trong-python.html)

- [Kiểu dữ liệu tập hợp set trong Python](/bai-viet/kieu-du-lieu-tap-hop-set-trong-python.html)

- [Kiểu logic Boolean trong Python](/bai-viet/kieu-logic-boolean-trong-python.html)

## 1. Giới thiệu về string – chuỗi trong Python

- Để tạo một string, chúng ta có thể dùng một cặp dấu nháy đơn ', cặp dấu nháy kép " hoặc cặp ba dấu nháy kép""".

- Chuỗi 'xin chào' cũng giống như "xin chào" dù bạn có dùng cặp dấu nháy đơn hay nháy kép.

- Khi dùng ba dấu nháy kép, chúng ta có thể viết stringchuỗi trong Python trên nhiều dòng mà không cần dùng ký tự thoát \. Lưu ý rằng, cặp dấu nháy dùng để mở và đóng chuỗi này phải cùng loại, cùng là nháy đơn, cùng là nháy kép chẳng hạn, không được trộn lẫn.

>>> a = 'Xin chao'
>>> a
'Xin chao'
>>> b = "Toi la Phu Ong"
>>> b
'Toi la Phu Ong'
>>> c = """Day la string
... tren
... nhieu dong"""
>>> c
'Day la string\ntren\nnhieu dong'

- Để sử dụng dấu nháy trong một string, bạn có thể bao nó bằng một cặp dấu nháy khác loại. Chẳng hạn muốn sử dụng dấu nháy kép, thì bạn đặt cả string đó vào trong cặp nháy đơn và ngược lại.

>>> "I'm Phuong."
"I'm Phuong."
Một cách khác là sử dụng kí tự điều khiển \, chẳng hạn

>>> 'I\'m Phuong'
"I'm Phuong"
>>> '\'\"'
'\'"

## 2. Gán chuỗi cho một biến

Việc gán một chuỗi trong Python cho một biến được thực hiện với tên biến theo sau là dấu bằng và chuỗi, ví dụ

>>> a = "Hello"
>>> print(a)
Hello

## 3. Chỉ số index và cắt lát slice() chuỗi trong Python

Giống như các ngôn ngữ lập trình khác, chuỗi trong Python cũng được đánh chỉ số của các kí tự từ 0. Chẳng hạn

>>> s = "Phuong"
>>> s[0]
'P'
>>> s[1]
'h'
Như ta thấy, xâu “Phuong” gồm có 6 kí tự, và kí tự đầu tiên là ‘P‘ ở vị trí s[0] chứ không phải là s[1].

Để lấy ra một xâu con của xâu <string>, chúng ta sẽ chỉ ra chính xác vị trí bắt đầu và kết thúc của xâu con, sử dụng cú pháp

<string>[i:j]

trong đó, i là vị trí bắt đầu còn j là vị trí kết thúc của xâu con.

s = '1234567abcde'
>>> s[1:6]
'23456'
Nếu muốn lấy từ vị trí đầu tiên, ta có thể lược bỏ tham số i, còn muốn lấy đến vị trí cuối cùng của xâu ta có thể lược bỏ tham số j.

>>> s = '1234567abcde'
>>> s[:6]
'123456'
>>> s[6:]
'7abcde'
>>> s[:]
'1234567abcde'
Đấy là trong trường hợp chúng ta lấy theo chiều tăng của index, còn muốn lấy theo chiều giảm của chỉ số hoặc muốn lấy các kí tự ở những vị trí cách quãng nhau, ta dùng cú pháp

<string>[i:j:k]

trong đó, i là vị trí bắt đầu, j là vị trí kết thúc còn k là bước nhảy (có thể là số âm – để lấy theo chiều giảm của index).

>>> s = '1234567abcde'
>>> s[1:5:2]
'24'
>>> s[6:0:-1]
'765432'
Do đó, muốn đảo ngược một xâu, ta chỉ cần đơn giản là dùng cách lấy toàn bộ xâu đó với bước nhảy k bằng -1.

>>> s = '1234567abcde'
>>> s[::-1]
'edcba7654321'
Cần lưu ý rằng, kiểu xâu string là kiểu dữ liệu **immutable** *không thay đổi được* , tức là bạn không thể thay đổi được xâu đã tạo ra như một số ngôn ngữ khác, Pascal chẳng hạn, trừ khi bạn gán giá trị mới cho biến đã tạo đó. Để dễ hiểu, ta xét ví dụ xâu s = "Phu ong", chúng ta không thể thay đổi xâu s thành "phu ong" bằng phép gán s[0] = 'p' được. Lúc này, muốn thay đổi bắt buộc ta phải *gán* đè nội dung mới cho biến s, và đương nhiên một biến s mới sẽ được tạo ra tại một địa chỉ bộ nhớ mới. Để hiểu rõ hơn, xin mời xem ví dụ sau đây.

>>> s = 'Phu Ong'
>>> id(s)
2281456950328
>>> s[0]
'P'
>>> s[0] = 'p'
Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
>>> s = 'phu ong'
>>> id(s)
2281456951056
>>> s += ' is my name!'
>>> s
'phu ong is my name!'
>>> id(s)
2281456947112
Đầu tiên khi khởi tạo biến s = 'Phu Ong' thì máy tính sẽ tham chiếu định danh (biến) s đến vùng ô nhớ có địa chỉ 2281456950328, lưu ý rằng ở máy tính của bạn địa chỉ này có thể khác. Và chúng ta không thể sửa đổi nội dung xâu trong biến s này, chẳng hạn ta thử sửa chữ P thành p bằng phép gán s[0] = 'p', máy báo lỗi ngay. Sau đó, ta bắt buộc phải thực hiện phép gán mới, nếu muốn biến s tham chiếu đến nội dung khác, đương nhiên sẽ được lưu ở vùng bộ nhớ có địa chỉ mới, lần này là 2281456951056. Thậm chí, khi ta thực hiện các phép toán trên xâu s, tổng quát là các hàm, các phương thức, mà làm cho dữ liệu của biến s thay đổi, thì thực ra là máy đã tham chiếu tên biến s đến một vùng ô nhớ mới. Điều này khác hoàn toàn với kiểu dữ liệu **mutable***thay đổi được,* kiểu danh sách list chẳng hạn. Để tìm hiểu kĩ hơn về kiểu danh sách xin mời xem phần sau.

>>> L = [1, 3, 8]
>>> id(L)
2281456980424
>>> L.append(2)
>>> L
[1, 3, 8, 2]
>>> id(L)
2281456980424
Sau khi thực hiện phương thức thêm vào *danh sách* L phần tử 2 thì địa chỉ ô nhớ của biến L vẫn như cũ, không hề thay đổi.

Trong Python có hai kiểu dữ liệu là không thay đổi được *immutable* và thay đổi được *mutable*. Kiểu dữ liệu *immutable* gồm có kiểu số nguyên int, kiểu số thực float và decimal, kiểu số phức complex, kiểu logic bool, kiểu xâu string, kiểu bộ tuple, kiểu khoảng range, kiểu tập hợp đóng băng frozenset, kiểu số nguyên bytes. Còn kiểu *mutable* gồm có danh sách list, từ điển dict, tập hợp set, mảng số nguyên bytearray, và các lớp do người dùng định nghĩa (trừ trường hợp chỉ rõ lớp đó là *immutable*). Chúng ta sẽ lần lượt xét tính thay đổi được hay không của từng kiểu dữ liệu khi học đến chúng.

Ưu điểm lớn nhất của kiểu *immutable* là máy tính sẽ sử dụng bộ nhớ đúng để biểu diễn dữ liệu của biến đó, như vậy sẽ tiết kiệm bộ nhớ hơn là việc phải dành sẵn một dung lượng bộ nhớ lớn hơn dữ liệu hiện tại biến đó đang tham chiếu đến.

Ngoài cách dùng câu lệnh <string>[i:j], bạn cũng có thể dùng hàm slice() để cắt lát một phần của chuỗi (hàm slice() này có thể áp dụng không chỉ cho chuỗi mà cho các đối tượng khác có đánh chỉ số). Cú pháp là slice(stop) hoặc slice(start, stop, step)

## 4. Tách và gộp chuỗi trong Python

Phương thức <string>.("<kí tự>") dùng để tách <string> thành các xâu con, mà mỗi xâu con này phân cách nhau bởi kí tự <kí tự>. Kết quả trả về được đặt trong một danh sách list, bạn có thể xem phần kiểu dữ liệu danh sách ở phần sau để hiểu rõ hơn về danh sách. Nếu phương thức split này không có tham số truyền vào, thì mặc định, Python sẽ sử dụng dấu cách trắng để làm kí tự tách.

>>> s = "We all love Python"
>>> s.split(" ")
['We', 'all', 'love', 'Python']
>>> s.split()
['We', 'all', 'love', 'Python']
Ở ví dụ trên, chúng ta tách xâu thành các xâu con, mà mỗi xâu con được cách nhau bởi dấu cách trắng. Còn ví dụ sau chúng ta quy định kí tự để tách là dấu chấm.

>>> pi = "3.1415926"
>>> pi.split('.')
['3', '1415926']
Đôi khi, chúng ta cần tách từng kí tự của một xâu, khi đó ta phải sử dụng phương pháp chuyển đổi một xâu sang danh sách, sử dụng hàm list(). Chẳng hạn

>>> s = "Phuong"
>>> list(s)
['P', 'h', 'u', 'o', 'n', 'g']
Vấn đề này xin tìm hiểu thêm ở phần kiểu dữ liệu danh sách list.

Ngược lại của tách, chúng ta có thể nối nhiều xâu thành một xâu bằng cách dùng phương thức , sử dụng cú pháp sau

<kí tự nối>.join(<danh_sách>)

Phương thức này sẽ nối các phần tử của <danh_sách> lại với nhau thành một xâu mới, giữa các phần tử của <danh_sách> ở trong xâu mới sẽ được cách nhau bởi <kí tự nối>.

>>> "-".join(["Toi","la","Phu","Ong"])
'Toi-la-Phu-Ong'

## 5. Các phương thức khác của string chuỗi trong Python

Đối với string kiểu xâu (kiểu chuỗi) trong Python, chúng ta có một số phương thức – hàm hay sử dụng sau đây:

- Hàm <string>.title() dùng để chuyển các kí tự đầu của mỗi từ trong <string> thành kiểu chữ hoa.

>>> s = "i'm phu ong"
>>> s.title()
"I'm Phu Ong"

- Hàm <string>.upper() dùng để chuyển tất cả các kí tự trong chuỗi <string> thành kiểu chữ hoa.

>>> s = "i'm phu ong"
>>> s.upper()
"I'M PHU ONG"

- Hàm <string>.capitalize() dùng để chuyển chữ cái đầu tiên của chuỗi <string> thành kiểu chữ in hoa.

- Hàm <string>.lower() dùng để chuyển tất cả các kí tự trong <string> thành kiểu chữ thường.

>>> s = "I'm Phu Ong"
>>> s.lower()
"i'm phu ong"

- Hàm <string>.swapcase() dùng để hoán đổi kí tự hoa thành thường và thường thành hoa cuủa tất cả các kí tự trong <string>.

>> s = "I'm Phu Ong"
>>> s.swapcase()
"i'M pHU oNG"

- Hàm <string>.center(length, character) trả về một chuỗi mới có độ dài length sẽ chứa chuỗi <string> được căn giữa, sử dụng kí tự character(mặc định là khoảng trắng) như ký tự lấp đầy.

>>> s='phuong'
>>> s.center(30,'.')
'............phuong............'
>>> s.center(30)
'            phuong            '
>>> s.center(30,'~')
'~~~~~~~~~~~~phuong~~~~~~~~~~~~'

- Hàm <string>.isalnum() dùng để kiểm tra xem <string> có chỉ gồm các kí tự thuộc bảng chữ cái a-Z hoặc chữ số 0-9 hay không, tức là có không chứa các kí tự đặc biệt như !@#$%… hay không.

>>> s = "qwerty123"
>>> s.isalnum()
True
>>> s = "qwerty$%"
>>> s.isalnum()
False
Chú ý rằng, kể cả xâu của chúng ta có chứa kí tự cách trắng thì kết quả trả về cũng là False.

- Tương tự, hàm <string>.digit() dùng để kiểm tra xem <string> có phải chỉ chứa các kí tự số 0-9 hay không.

>>> s="123"
>>> s.isdigit()
True
>>> s="123.45"
>>> s.isdigit()
False

- Hàm <string>.alpha() dùng để kiểm tra xem <string> có phải chỉ chứa các kí tự thuộc bảng chữ cái a-Z hay không, kết quả trả về là [kiểu Boolean](/bai-viet/kieu-logic-boolean-trong-python.html). Ở ví dụ sau nếu xâu có chứa dấu cách thì kết quả trả về là False.

>>> s="Alphabet"
>>> s.isalpha()
True
>>> s="Alphabet ABC"
>>> s.isalpha()
False

- Hàm <string>.islower()và<string>.isupper() dùng để kiểm tra xem <string> có phải chỉ chứa các kí tự chữ thường/chữ hoa hay không. Tương tự, chúng ta cũng có hàm <string>.istitle() để kiểm tra xem các từ trong <string> có được viết hoa chữ cái đầu mỗi *từ* hay không.

>>> s = 'Toi La Phu Ong'
>>> s.isupper()
False
>>> s.islower()
False
>>> s.istitle()
True

- Hàm len(<string>) trả về độ dài (số lượng kí tự) của <string>.

- Phương thức <string>.trip() dùng để loại bỏ các khoảng trắng (dấu cách, dấu Tab, kí tự xuống dòng) ở đầu và cuối xâu. Tương tự, phương thức sẽ loại bỏ các khoảng trắng ở bên trái của xâu, tức ở đầu xâu, còn sẽ loại bỏ ở cuối xâu.

>>> s = ' Toi la Phu Ong \n'
>>> s.strip()
'Toi la Phu Ong'
>>> s.lstrip()
'Toi la Phu Ong \n'
>>> s.rstrip()
' Toi la Phu Ong'
Như ta thấy, kết quả trả về không ảnh hưởng gì tới biến s cả, vì biến s có kiểu xâu là kiểu dữ liệu *immutable,* nên các hàm, phương thức không thể làm thay đổi được dữ liệu lưu trong biến s.

- Hàm <string>.(<string con>) dùng để tìm kiếm ký tự hoặc xâu <string con> trong <string>. Kết quả trả về là vị trí đầu tiên xuất hiện <string con> trong <string>, nếu không tìm thấy thì kết quả là -1.

>>> s = 'Toi la Phu Ong'
>>> s.find('Phu')
7
>>> s.find('PhuOng')
-1

- Trong các phương thức tìm kiếm, còn có hai phương thức là <string>.startswith(<string con>) và <string>.endswith(<string con>) dùng để kiểm tra xem xâu <string> có bắt đầu hoặc kết thúc bởi <string con> hay không, đương nhiên kết quả trả về là kiểu bool.

>>> s = 'Toi la Phu Ong'
>>> s.startswith('Toi')
True
>>> s.endswith('g')
True
Ngoài ra những phương thức-hàm kể trên, kiểu chuỗi trong Python còn một số phương thức khác, mời bạn xem tại [đây](https://www.w3schools.com/python/python_ref_string.asp).
