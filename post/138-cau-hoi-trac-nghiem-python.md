---
title: 138 câu hỏi trắc nghiệm Python có đáp án
description: Mời bạn tham khảo 138 câu hỏi trắc nghiệm Python có đáp án. Đáp án và
  lời giải ở phần sau bài viết.
category: CNTT
type: Bài tập
date: '2024-10-02'
tags:
- Python
- Trắc nghiệm Python
- CNTT
grade: 10
---

Mời bạn làm thử **138 câu hỏi trắc nghiệm Python có đáp án** dưới đây. Sau khi chọn đáp án, bấm **Kiểm tra đáp án** để xem kết quả và lời giải chi tiết.


## Câu 1–20

````quiz
{
  "title": "Trắc nghiệm Python – câu 1 đến 20",
  "questions": [
    {
      "question": "Biểu thức `complex('2-3j')` là hợp lệ còn `complex(2 - 3j)` sai cú pháp của hàm `complex()`. Khẳng định sau đây đúng hay sai?",
      "options": [
        "Đúng",
        "Sai"
      ],
      "answer": 0,
      "explanation": "Biểu thức `complex('2-3j')` là hợp lệ (truyền chuỗi), còn `complex(2 - 3j)` cũng hợp lệ (truyền số phức). Khẳng định \"complex(2-3j) sai cú pháp\" là đúng về mặt so sánh cú pháp."
    },
    {
      "question": "Biểu thức trong Python `math.sqrt(x + math.sqrt(x + math.sqrt(x)))` là biểu thức nào sau đây trong toán học?",
      "options": [
        "$\\sqrt x + \\sqrt x + \\sqrt x$",
        "$\\sqrt x + \\sqrt{x+\\sqrt x}$",
        "$\\sqrt x + \\sqrt{\\sqrt x+\\sqrt x}$",
        "$\\sqrt{x + \\sqrt{x+\\sqrt x}}$"
      ],
      "answer": 3,
      "explanation": "$\\sqrt{x + \\sqrt{x+\\sqrt x}}$"
    },
    {
      "question": "Cho biết kết quả của đoạn code sau\n\n```python\nfor i in range(1, 5):\n    print(i, end=' ')\n    if i == 3:\n        break\n```",
      "options": [
        "IndentationError: expected an indented block",
        "`1 2 3`",
        "`1 2 3 4`",
        "`1 2`"
      ],
      "answer": 3,
      "explanation": "`1 2`"
    },
    {
      "question": "Cho câu lệnh sau:\n\n```python\nPrint('xin chao')\n```\n\nCâu lệnh trên sai, câu lệnh đúng là:",
      "options": [
        "`print('xin chao')`",
        "`print(xin chao)`",
        "`Print(xin chao)`",
        "`Print(\"xin chao\")`"
      ],
      "answer": 0,
      "explanation": "`print('xin chao')`"
    },
    {
      "question": "Cho đoạn chương trình sau:\n\n```python\na = b = 1\nc = 1\nd = 2\nprint(a + b + c + d)\n```\n\nKết quả trên màn hình là:",
      "options": [
        "`3`",
        "`4`",
        "`5`",
        "`6`"
      ],
      "answer": 3,
      "explanation": "6"
    },
    {
      "question": "Chạy câu lệnh `num = '3' * '3'` trong Python, kết quả là:",
      "options": [
        "`333`",
        "`27`",
        "`9`",
        "`TypeError: can't multiply sequence by non-int of type 'str'`"
      ],
      "answer": 3,
      "explanation": "`TypeError: can't multiply sequence by non-int of type 'str'`"
    },
    {
      "question": "Chọn phát biểu sai?",
      "options": [
        "Cửa sổ Shell, cho phép viết và thực hiện ngay các biểu thức hoặc câu lệnh.",
        "Ngôn ngữ lập trình trực quan như Scratch dễ dùng và thích hợp với các bạn nhỏ tuổi.",
        "Trong Python, không phân biệt chữ hoa và chữ thường.",
        "Python là ngôn ngữ lập trình bậc cao phổ biến rộng rãi trên thế giới."
      ],
      "answer": 2,
      "explanation": "Trong Python, phân biệt chữ hoa và chữ thường"
    },
    {
      "question": "Chọn đáp án đúng khi nói về hàm `id()` trong Python?",
      "options": [
        "`id()` trả về định danh một đối tượng.",
        "Mỗi đối tượng không chỉ có một `id` duy nhất.",
        "Cả hai phương án trên đều đúng.",
        "Không có đáp án đúng."
      ],
      "answer": 0,
      "explanation": "id() trả về định danh một đối tượng"
    },
    {
      "question": "Phát biểu nào chính xác khi nói về Docstring trong Python?",
      "options": [
        "Docstring là chuỗi đầu tiên ngay sau tiêu đề hàm",
        "Docstring là không bắt buộc nhưng nên có trong một hàm",
        "Docstring được truy cập bởi thuộc tính doc trên đối tượng",
        "Tất cả các đáp án trên đều đúng."
      ],
      "answer": 3,
      "explanation": "Tất cả các đáp án trên đều đúng"
    },
    {
      "question": "Phát biểu nào chính xác khi nói về Hàm trong Python?",
      "options": [
        "Hàm có thể được tái sử dụng trong chương trình.",
        "Sử dụng hàm không có tác động tích cực gì đến các module trong chương trình.",
        "Không thể tự tạo các hàm của riêng người viết chương trình.",
        "Tất cả các đáp án trên đều đúng."
      ],
      "answer": 0,
      "explanation": "Hàm có thể được tái sử dụng trong chương trình"
    },
    {
      "question": "Các khối code (khối lệnh của hàm, vòng lặp,…) trong Python được xác định bởi:",
      "options": [
        "Dấu ngoặc nhọn `{ }`",
        "Canh lề (indentation)",
        "Dấu ngoặc đơn `()`",
        "Dấu ngoặc vuông `[ ]`"
      ],
      "answer": 1,
      "explanation": "Canh lề"
    },
    {
      "question": "Các kết quả của hàm hiển thị dưới đây là gì?\n\n```python\nsum(2, 4, 6)\nsum([1, 2, 3])\n```",
      "options": [
        "`Error, 6`",
        "`12, Error`",
        "`12, 6`",
        "`Error, Error`"
      ],
      "answer": 0,
      "explanation": "Error, 6"
    },
    {
      "question": "Câu lệnh sử dụng toán tử `and` trả về kết quả `True` khi nào?",
      "options": [
        "Cả hai toán hạng đều là `True`.",
        "Cả hai toán hạng đều là `False`.",
        "Một trong hai toán hạng là `True`.",
        "Toán hạng đầu tiên là `True`."
      ],
      "answer": 0,
      "explanation": "Cả hai toán hạng đều là TRUE"
    },
    {
      "question": "Dãy kí tự muốn in ra màn hình bằng câu lệnh `print()` cần đặt trong cặp dấu gì?",
      "options": [
        "Nháy đơn",
        "Nháy kép",
        "Ngoặc kép",
        "Cả A, B đều đúng."
      ],
      "answer": 1,
      "explanation": "Nháy kép"
    },
    {
      "question": "Giả sử có một list `l = [2, 3, 4]`. Nếu muốn in list này theo thứ tự ngược lại ta nên sử dụng phương pháp nào sau đây?",
      "options": [
        "`reverse(l)`",
        "`list(reverse[(l)])`",
        "`reversed(l)`",
        "`list(reversed(l))`"
      ],
      "answer": 3,
      "explanation": "list(reversed(l))"
    },
    {
      "question": "Hàm `divmod(a, b)` trong đó `a` và `b` là những số nguyên được diễn giải là:",
      "options": [
        "`(a % b, a // b)`",
        "`(a // b, a % b)`",
        "`(a // b, a * b)`",
        "`(a / b, a % b)`"
      ],
      "answer": 1,
      "explanation": "(a//b, a%b)"
    },
    {
      "question": "Hàm nào sau đây chỉ chấp nhận số nguyên làm tham số?",
      "options": [
        "`ord()`",
        "`min()`",
        "`chr()`",
        "`any()`"
      ],
      "answer": 0,
      "explanation": "`ord()`"
    },
    {
      "question": "Hàm nào sau đây không chấp nhận iterable làm tham số?",
      "options": [
        "`enumerate()`",
        "`all()`",
        "`chr()`",
        "`max()`"
      ],
      "answer": 3,
      "explanation": "`max()`"
    },
    {
      "question": "Hàm nào sau đây không gây ra lỗi?",
      "options": [
        "`ord()`",
        "`ord(' ')`",
        "`ord('')`",
        "`ord(\"\")`"
      ],
      "answer": 2,
      "explanation": "`TypeError`"
    },
    {
      "question": "Hàm nào sau đây là hàm tích hợp sẵn trong Python?",
      "options": [
        "`seed()`",
        "`sqrt()`",
        "`factorial()`",
        "`print()`"
      ],
      "answer": 1,
      "explanation": "`sqrt()`"
    }
  ]
}
````


## Câu 21–40

````quiz
{
  "title": "Trắc nghiệm Python – câu 21 đến 40",
  "questions": [
    {
      "question": "Hàm nào sau đây sẽ không xảy ra lỗi khi không truyền tham số cho nó?",
      "options": [
        "`min()`",
        "`divmod()`",
        "`all()`",
        "`float()`"
      ],
      "answer": 2,
      "explanation": "`all()`"
    },
    {
      "question": "Hàm `pow(x, y, z)` được diễn giải là:",
      "options": [
        "`(x ** y) % z`",
        "`(x // y) * z`",
        "`(x ** y) ** z`",
        "`(x * y) ** z`"
      ],
      "answer": 3,
      "explanation": "(x*y)z"
    },
    {
      "question": "Hàm được khai báo ở đâu?",
      "options": [
        "Module",
        "Class",
        "Trong một hàm khác",
        "Tất cả các phương án trên"
      ],
      "answer": 0,
      "explanation": "Module"
    },
    {
      "question": "Khi cần in ra màn hình diện tích hình vuông có cạnh có giá trị bằng `a` ta thực hiện câu lệnh:",
      "options": [
        "`print('dien tich hinh vuong la:', a * a)`",
        "`print('dien tich hinh vuong la: a * a')`",
        "`print 'dien tich hinh vuong la:', a * a`",
        "`print 'dien tich hinh vuong la:', a`"
      ],
      "answer": 0,
      "explanation": "print('dien tich hinh vuong la:',a*a)"
    },
    {
      "question": "Khẳng định nào là đúng khi nói về đoạn code sau:\n\n```python\ndef printHello():\n    print(\"Hello\")\n\na = printHello()\n```",
      "options": [
        "printHello() là một hàm và a là một biến. Cả hai đều không phải đối tượng.",
        "Cả printHello() và a đều thể hiện chung một đối tượng.",
        "printHello() và a là hai đối tượng khác nhau.",
        "Lỗi cú pháp. Không thể gán hàm cho một biến trong Python."
      ],
      "answer": 0,
      "explanation": "printHello() là một hàm và a là một biến. Cả hai đều không phải đối tượng"
    },
    {
      "question": "Khẳng định nào là đúng về chú thích trong Python?",
      "options": [
        "Chú thích giúp cho các lập trình viên hiểu rõ hơn về chương trình.",
        "Trình thông dịch Python sẽ bỏ qua những chú thích.",
        "Có thể viết chú thích trên cùng một dòng với lệnh/biểu thức hoặc viết trên nhiều dòng mà không vấn đề gì cả",
        "Tất cả các đáp án trên."
      ],
      "answer": 3,
      "explanation": "Tất cả các đáp án trên"
    },
    {
      "question": "Khẳng định nào là đúng về chú thích trong Python?",
      "options": [
        "Python sử dụng kí tự # để bắt đầu một chú thích",
        "Nội dung của chú thích sẽ được trình thông dịch bỏ qua",
        "Python dùng “”” ””” (3 cặp nháy đôi) hoặc ”’ ”’ (3 cập nháy đơn) để viết chú thích trên nhiều dòng",
        "Tất cả các đáp án trên."
      ],
      "answer": 3,
      "explanation": "Tất cả các đáp án trên"
    },
    {
      "question": "Khẳng định nào là đúng về chương trình dưới đây?\n\n```python\nclass A:\n    def __init__(self):\n        self.a = 1\n        self.__b = 1\n\n    def getY(self):\n        return self.__b\n\nobj = A()\nobj.a = 45\nprint(obj.a)\n```",
      "options": [
        "Chương trình có lỗi xảy ra vì ‘ __b ‘ là thuộc tính private, không thể truy cập được từ bên ngoài lớp.",
        "Chương trình chạy bình thường và kết quả được in ra là 1.",
        "Chương trình có lỗi xảy ra vì ‘ a ‘ là thuộc tính private, không thể truy cập được từ bên ngoài lớp.",
        "Chương trình chạy bình thường và kết quả được in ra là 45."
      ],
      "answer": 3,
      "explanation": "Chương trình chạy bình thường và kết quả được in ra là 45"
    },
    {
      "question": "Khẳng định nào là đúng về chương trình dưới đây?\n\n```python\nclass A:\n    def __init__(self):\n        self.x = 1\n        self.__y = 1\n\n    def getY(self):\n        return self.__y\n\na = A()\na.x = 45\nprint(a.x)\n```",
      "options": [
        "Chương trình có lỗi xảy ra vì ‘ x ‘ là thuộc tính private, không thể truy cập được từ bên ngoài lớp.",
        "Chương trình chạy bình thường và kết quả được in ra là 1.",
        "Chương trình có lỗi xảy ra vì ‘ __y ‘ là thuộc tính private, không thể truy cập được từ bên ngoài lớp.",
        "Chương trình chạy bình thường và kết quả được in ra là 45."
      ],
      "answer": 1,
      "explanation": "Chương trình chạy bình thường và kết quả được in ra là 45"
    },
    {
      "question": "Khẳng định nào là đúng về đoạn code dưới đây?\n\n```python\nf = open('test.txt', 'r', encoding='utf-8')\nf.read()\n```",
      "options": [
        "Chương trình này đọc nội dung của file `test.txt`.",
        "Nếu `test.txt` có xuống dòng, hàm `read()` sẽ trả về kí hiệu bắt đầu dòng mới là `'\\n'`.",
        "Bạn có thể truyền một tham số kiểu integer cho `read()`.",
        "Tất cả các đáp án trên đều đúng."
      ],
      "answer": 3,
      "explanation": "Tất cả các đáp án trên đều đúng"
    },
    {
      "question": "Khẳng định nào sau đây là không đúng về Python?",
      "options": [
        "Python có thể sử dụng trên nhiều hệ điều hành khác nhau: Unix, Windows,Mac\n\nOS, Linux,…",
        "Python là một ngôn ngữ không phân biệt kiểu chữ HOA, chữ thường.",
        "Python hoàn toàn tạo kiểu động và dùng cơ chế cấp phát bộ nhớ tự động.",
        "Python có tốc độ thực hiện chậm hơn nhiều lần so với các ngôn ngữ biên dịch\n\nnhư C, Java,…"
      ],
      "answer": 3,
      "explanation": "không đúng vì Python không phải là ngôn ngữ biên dịch và có tốc độ thực hiện khá nhanh"
    },
    {
      "question": "Khẳng định nào sau đây là sai khi nói về ngôn ngữ Python?",
      "options": [
        "Python phân biệt chữ hoa và chữ thường.",
        "Python là ngôn ngữ lập trình bậc cao.",
        "Python được dùng để phát triển các ứng dụng web, phần mềm ứng dụng, điều khiển robot…",
        "Python là ngôn ngữ máy tính có thể trực tiếp hiểu và thực hiện được."
      ],
      "answer": 3,
      "explanation": "sai vì Python là ngôn ngữ lập trình cao cấp và không phải là ngôn ngữ máy tính"
    },
    {
      "question": "Khẳng định nào sau đây là đúng về Python?",
      "options": [
        "Python là một ngôn ngữ thông dịch cấp cao.",
        "Python là ngôn ngữ lập trình hướng đối tượng.",
        "Python là ngôn ngữ mã nguồn mở.",
        "Tất cả các đáp án đều đúng."
      ],
      "answer": 3,
      "explanation": "đúng vì Python là ngôn ngữ thông dịch, hướng đối tượng và mã nguồn mở"
    },
    {
      "question": "Khẳng định nào sau đây là đúng?",
      "options": [
        "Lớp (class) là một kế hoạch chi tiết cho đối tượng.",
        "Chỉ có thể tạo một đối tượng duy nhất từ lớp đã cho.",
        "Cả hai đáp án trên đều đúng.",
        "Không có đáp án chính xác."
      ],
      "answer": 0,
      "explanation": "đúng vì lớp chỉ là một kế hoạch chi tiết cho đối tượng và có thể tạo nhiều đối tượng từ lớp đó"
    },
    {
      "question": "Khẳng định nào sau đây là đúng?",
      "options": [
        "Trong Python, một toán tử có thể có hoạt động khác nhau tùy thuộc vào toán hạng được sử dụng.",
        "Bạn có thể thay đổi cách các toán tử hoạt động trong Python.",
        "`__add__()` được gọi khi toán tử `+` được sử dụng.",
        "Tất cả các đáp án trên đều đúng."
      ],
      "answer": 0,
      "explanation": "đúng vì Python có khả năng đa hình, tức là một toán tử có thể có hoạt động khác nhau tùy thuộc vào toán hạng được sử dụng"
    },
    {
      "question": "Khẳng định nào sau đây về Python là đúng?",
      "options": [
        "Python là một ngôn ngữ lập trình cấp cao.",
        "Python là một ngôn ngữ thông dịch.",
        "Python là ngôn ngữ lập trình hướng đối tượng.",
        "Tất cả các đáp án đều đúng."
      ],
      "answer": 3,
      "explanation": "đúng vì Python là ngôn ngữ lập trình cấp cao, thông dịch, hướng đối tượng và mã nguồn mở"
    },
    {
      "question": "Khẳng định nào về ngoại lệ là đúng nhất?",
      "options": [
        "Ngoại lệ (Exception) là lỗi phát sinh khi đang thực thi chương trình (runtime error).",
        "Lỗi cú pháp (syntax error) cũng là một ngoại lệ.",
        "Ngoại lệ được Python dùng để loại bỏ một khối code khỏi chương trình.",
        "Tất cả các đáp án trên đều đúng."
      ],
      "answer": 0,
      "explanation": "đúng vì ngoại lệ là lỗi phát sinh khi đang thực thi chương trình, không phải để loại bỏ một khối code khỏi chương trình"
    },
    {
      "question": "Khẳng định nào sau đây là đúng khi nói về hàm `hex(15)`?",
      "options": [
        "`hex(15)` trả về chuỗi `'15'`",
        "`hex(15)` trả về giá trị số nguyên 15",
        "`hex(15)` trả về chuỗi `'0XF'`",
        "`hex(15)` trả về chuỗi `'0xf'`"
      ],
      "answer": 3,
      "explanation": "đúng vì `hex(15)` trả về chuỗi \"0xf\", đại diện cho số 15 ở hệ cơ số 16"
    },
    {
      "question": "Kết quả của biểu thức sau là gì?\n\n```python\nchr('97')\nchr(97)\n```",
      "options": [
        "`a Error`",
        "`'a' a`",
        "`Error a`",
        "`Error Error`"
      ],
      "answer": 1,
      "explanation": "đúng vì `chr(97)` trả về ký tự 'a', còn `chr('97')` sẽ bị lỗi vì đối số truyền vào phải là một số nguyên, không phải là một chuỗi"
    },
    {
      "question": "Kết quả của biểu thức sau là gì?\n\n```python\nmin(max(False, -3, -4), 2, 7)\n```",
      "options": [
        "`2`",
        "`False`",
        "`-3`",
        "`-4`"
      ],
      "answer": 2,
      "explanation": "đúng vì min(max(False,-3,-4), 2,7) tương đương với min(max(-3,-4), 2,7), và giá trị lớn nhất trong -3 và -4 là -3"
    }
  ]
}
````


## Câu 41–60

````quiz
{
  "title": "Trắc nghiệm Python – câu 41 đến 60",
  "questions": [
    {
      "question": "Kết quả của biểu thức sau là gì?\n\n```python\nround(4.5676, 2)\n```",
      "options": [
        "`4.5`",
        "`4.6`",
        "`4.57`",
        "`4.56`"
      ],
      "answer": 2,
      "explanation": "4.57. Hàm `round()` được sử dụng để làm tròn số tới một số lượng chữ số nhất định. Trong trường hợp này, số 4.5676 sẽ được làm tròn tới 2 chữ số thập phân, cho kết quả là 4.57"
    },
    {
      "question": "Kết quả của biểu thức sau là gì?\n\n```python\nround(4.576)\n```",
      "options": [
        "`4.5`",
        "`5`",
        "`4`",
        "`4.6`"
      ],
      "answer": 3,
      "explanation": "4.6. Nếu không chỉ định số lượng chữ số thập phân, hàm `round()` sẽ làm tròn số đó thành số nguyên gần nhất. Trong trường hợp này, số 4.576 sẽ được làm tròn thành số nguyên gần nhất, là 5"
    },
    {
      "question": "Kết quả của chương trình dưới đây là:\n\n```python\nclass Point:\n    def __init__(self, x=0, y=0):\n        self.x = x\n        self.y = y\n\n    def __sub__(self, other):\n        x = self.x + other.x\n        y = self.y + other.y\n        return Point(x, y)\n\np1 = Point(3, 4)\np2 = Point(1, 2)\nresult = p1 - p2\nprint(result.x, result.y)\n```",
      "options": [
        "2 2",
        "4 6",
        "0 0",
        "1 1"
      ],
      "answer": 1,
      "explanation": "4 6. Chương trình tạo ra hai đối tượng Point với các giá trị x và y tương ứng. Khi trừ p2 từ p1, phương thức `__sub__()` được gọi và trả về một đối tượng Point mới với giá trị x và y là tổng của các giá trị x và y của hai đối tượng ban đầu. Kết quả in ra là giá trị x và y của đối tượng Point mới này"
    },
    {
      "question": "Kết quả của chương trình được in ra là:\n\n```python\nmylist = ['a', 'aa', 'aaa', 'b', 'bb', 'bbb']\nprint(mylist[:-1])\n```",
      "options": [
        "`['a', 'aa', 'aaa', 'b', 'bb']`",
        "`['a', 'aa', 'aaa', 'b', 'bb']`",
        "`['a', 'aa', 'aaa', 'b', 'bb', 'bbb']`",
        "`Error`"
      ],
      "answer": 2,
      "explanation": "['a', 'aa', 'aaa', 'b', 'bb']. Slicing mảng với chỉ số âm có nghĩa là bắt đầu từ phần tử đầu tiên và lấy tất cả các phần tử trừ phần tử cuối cùng. Trong trường hợp này, mảng được lấy từ phần tử đầu tiên đến phần tử thứ 5, bỏ qua phần tử cuối cùng \"bbb\""
    },
    {
      "question": "Kết quả của chương trình được in ra màn hình là?\n\n```python\nstring = \"my name is x\"\nfor i in string:\n    print(i, end=\", \")\n```",
      "options": [
        "`m, y,, n, a, m, e,, i, s,, x,`",
        "`m, y,, n, a, m, e,, i, s,, x`",
        "`my, name, is, x,`",
        "`Error`"
      ],
      "answer": 0,
      "explanation": "m, y,, n, a, m, e,, i, s,, x,. Vòng lặp for lặp lại từng ký tự trong chuỗi \"my name is x\" và in ra ký tự đó, kết thúc bằng dấu phẩy và khoảng trắng. Do đó, kết quả in ra là \"m, y,, n, a, m, e,, i, s,, x,\""
    },
    {
      "question": "Kết quả của chương trình được in ra màn hình là?\n\n```python\nx = 1\ny = \"2\"\nz = 3\nsum = 0\nfor i in (x, y, z):\n    if isinstance(i, int):\n        sum += i\n\nprint(sum)\n```",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "answer": 0,
      "explanation": "2. Hàm `isinstance()` được sử dụng để kiểm tra xem một đối tượng có phải là một loại dữ liệu cụ thể hay không. Trong trường hợp này, x và z là kiểu số nguyên, trong khi y là một chuỗi. Vì vậy, chỉ có x và z được cộng vào biến sum, cho tổng là 2"
    },
    {
      "question": "Kết quả của hàm hiển thị dưới đây là gì?\n\n```python\nlen([\"hello\", 2, 4, 6])\n```",
      "options": [
        "`4`",
        "`3`",
        "`Error`",
        "`6`"
      ],
      "answer": 0,
      "explanation": "4. Hàm `len()` được sử dụng để đếm số lượng phần tử trong một danh sách. Trong trường hợp này, danh sách có 4 phần tử: \"hello\", 2, 4 và 6"
    },
    {
      "question": "Kết quả của hàm hiển thị dưới đây là gì?\n\n```python\nlist(enumerate([2, 3]))\n```",
      "options": [
        "`Error`",
        "`[(1, 2), (2, 3)]`",
        "`[(0, 2), (1, 3)]`",
        "`[(2, 3)]`"
      ],
      "answer": 1,
      "explanation": "[(1, 2), (2, 3)]. Hàm `enumerate()` được sử dụng để đánh số các phần tử trong một danh sách. Trong trường hợp này, danh sách [2, 3] được liệt kê và được đánh số bắt đầu từ 1. Do đó, kết quả của hàm là [(1, 2), (2, 3)]"
    },
    {
      "question": "Kết quả của hàm hiển thị dưới đây là gì?\n\n```python\nord(65)\nord('A')\n```",
      "options": [
        "`A 65`",
        "`Error 65`",
        "`A Error`",
        "`Error Error`"
      ],
      "answer": 1,
      "explanation": "Error 65. Lỗi xảy ra vì hàm `ord()` chỉ có thể áp dụng cho ký tự duy nhất, chứ không thể áp dụng cho một số nguyên như 65. Đối với ký tự 'A', hàm `ord()` sẽ trả về mã Unicode của ký tự đó, là 65"
    },
    {
      "question": "Kết quả của hàm hiển thị dưới đây là gì?\n\n```python\nx = 3\neval('x^2')\n```",
      "options": [
        "`Error`",
        "`1`",
        "`9`",
        "`6`"
      ],
      "answer": 3,
      "explanation": "6. Hàm `eval()` được sử dụng để đánh giá một biểu thức được truyền dưới dạng một chuỗi. Trong trường hợp này, chuỗi 'x^2' được đánh giá với giá trị x là 3. Khi tính toán 3 ^ 2, kết quả là 9. Tuy nhiên, ký hiệu ^ thực hiện phép toán XOR trên hai số nguyên. Vì vậy, thực hiện phép toán 3 XOR 2 sẽ cho kết quả là 1. Vì vậy, câu trả lời đúng là 6 (9 XOR 3)"
    },
    {
      "question": "Kết quả của hàm sau là gì?\n\n```python\nall([2, 4, 0, 6])\n```",
      "options": [
        "`Error`",
        "`True`",
        "`False`",
        "`0`"
      ],
      "answer": 2,
      "explanation": "False. Hàm `all()` trả về True nếu tất cả các phần tử trong iterable (trong trường hợp này là list [2,4,0,6]) đều đúng (khác 0 hoặc False). Trong trường hợp này, phần tử thứ 3 trong list là 0, nên `all()` trả về False"
    },
    {
      "question": "Kết quả của hàm sau là gì?\n\n```python\ncomplex(1 + 2j)\n```",
      "options": [
        "`Error`",
        "`1`",
        "`2j`",
        "`1+2j`"
      ],
      "answer": 3,
      "explanation": "1+2j. Hàm `complex()` được sử dụng để tạo ra một số phức với phần thực và phần ảo được cung cấp. Trong trường hợp này, phần thực là 1 và phần ảo là 2j, vì vậy đầu ra của hàm sẽ là 1+2j"
    },
    {
      "question": "Kết quả của hàm sau là gì?\n\n```python\nfloat('-infinity')\nfloat('inf')\n```",
      "options": [
        "`-inf inf`",
        "`-infinity inf`",
        "`Error Error`",
        "`Error Junk value`"
      ],
      "answer": 0,
      "explanation": "-inf inf. Khi đưa chuỗi '-infinity' hoặc 'inf' vào hàm `float()`, nó sẽ trả về giá trị tương ứng với số vô cực âm hoặc dương. Vì vậy, kết quả của hai lệnh trên sẽ là -inf và inf"
    },
    {
      "question": "Kết quả của hàm sau là gì?\n\n```python\noct(7)\noct('7')\n```",
      "options": [
        "`Error 0o7`",
        "`0o7 Error`",
        "`0o7 Error`",
        "`0o7 0o7`"
      ],
      "answer": 2,
      "explanation": "0o7 Error. Hàm `oct()` được sử dụng để chuyển đổi một số nguyên sang hệ bát phân (octal). Trong trường hợp này, oct(7) sẽ trả về '0o7'. Tuy nhiên, oct('7') sẽ gây ra lỗi vì tham số đầu vào phải là một số nguyên"
    },
    {
      "question": "Kết quả của đoạn code dưới đây là:\n\n```python\nnumbers = [2, 3, 4]\nprint(numbers)\n```",
      "options": [
        "`2, 3, 4`",
        "`2 3 4`",
        "`[2, 3, 4]`",
        "`[2 3 4]`"
      ],
      "answer": 2,
      "explanation": "[2, 3, 4]. Biến numbers là một list chứa các số 2, 3 và 4. Hàm `print()` được sử dụng để hiển thị giá trị của biến numbers, và kết quả được in ra là [2, 3, 4]"
    },
    {
      "question": "Kết quả nào là output của đoạn code dưới đây?\n\n```python\ndef f(value):\n    while True:\n        value = (yield value)\n\na = f(10)\nprint(next(a))\nprint(next(a))\nprint(a.send(20))\n```",
      "options": [
        "10 10",
        "10 10 20",
        "10 None 20",
        "10 None None"
      ],
      "answer": 1,
      "explanation": "10 10 20. Hàm f() là một generator function (hàm sinh ra generator), nó sử dụng từ khóa `yield` để trả về một giá trị và tạm dừng thực thi cho đến khi generator được gọi tiếp theo. Trong đoạn code này, hàm f() được gọi với tham số là 10, và sau đó gọi next(a) sẽ trả về giá trị 10. Lời gọi next(a) tiếp theo cũng trả về giá trị 10 vì hàm f() tạm dừng thực thi ở câu lệnh `yield` và chưa được gọi tiếp theo. Cuối cùng, lời gọi a.send(20) sẽ tiếp tục thực thi hàm f() và trả về giá trị 20. Vì vậy, kết quả in ra sẽ là 10 10 20.\n\n(đang cập nhật)"
    },
    {
      "question": "Kết quả nào là output của đoạn code dưới đây?\n\n```python\ndef myfunc():\n    try:\n        print('Monday')\n    finally:\n        print('Tuesday')\n\nmyfunc()\n```",
      "options": [
        "Tuesday",
        "Monday Tuesday",
        "Tuesday Monday",
        "Monday"
      ],
      "answer": 1,
      "explanation": "`try` chạy `print('Monday')`, sau đó `finally` luôn chạy `print('Tuesday')`. Output: Monday rồi Tuesday."
    },
    {
      "question": "Kết quả nào là output của đoạn code dưới đây?\n\n```python\nfor i in range(10):\n    if i == 5:\n        break\n    else:\n        print(i)\nelse:\n    print(\"Here\")\n```",
      "options": [
        "0 1 2 3 4 Here",
        "0 1 2 3 4 5 Here",
        "0 1 2 3 4",
        "1 2 3 4 5"
      ],
      "answer": 2,
      "explanation": "Vòng lặp in 0,1,2,3,4 rồi gặp `break` tại i=5 nên khối `else` của vòng lặp không chạy. Output: `0 1 2 3 4`."
    },
    {
      "question": "Kết quả nào là output của đoạn code dưới đây?\n\n```python\nlist = ['Tech', 404, 3.03, 'Beamers', 33.3]\nprint(list[1:3])\n```",
      "options": [
        "`['Tech', 404, 3.03, 'Beamers', 33.3]`",
        "`[404, 3.03]`",
        "`['Tech', 'Beamers']`",
        "`None of the above`"
      ],
      "answer": 1,
      "explanation": "`list[1:3]` lấy phần tử tại index 1 và 2, tức là `404` và `3.03`. Kết quả: `[404, 3.03]`."
    },
    {
      "question": "Kết quả nào là output của đoạn code dưới đây?\n\n```python\ntry:\n    print(\"throw\")\nexcept:\n    print(\"except\")\nfinally:\n    print(\"finally\")\n```",
      "options": [
        "finally throw",
        "finally except",
        "except finally",
        "throw finally"
      ],
      "answer": 3,
      "explanation": "`try` chạy `print(\"throw\")`, không có lỗi nên `except` bỏ qua, `finally` luôn chạy. Output: `throw` rồi `finally`."
    }
  ]
}
````


## Câu 61–80

````quiz
{
  "title": "Trắc nghiệm Python – câu 61 đến 80",
  "questions": [
    {
      "question": "Kết quả nào là output của đoạn code dưới đây?\n\n```python\nx = True\ny = False\nz = False\n\nif not x or y:\n    print(1)\nelif not x or not y and z:\n    print(2)\nelif not x or y or not y and x:\n    print(3)\nelse:\n    print(4)\n```",
      "options": [
        "2",
        "None",
        "1",
        "3"
      ],
      "answer": 3,
      "explanation": "`not x` = False, `y` = False → `not x or y` = False. Điều kiện elif: `not x or not y and z` = False or True and False = False. Điều kiện elif 2: `not x or y or not y and x` = False or False or True = True → in 3."
    },
    {
      "question": "Lí do ta nên dùng ngôn ngữ lập trình bậc cao khi viết chương trình:",
      "options": [
        "Máy tính có thể trực tiếp hiểu và thực hiện.",
        "Gần với ngôn ngữ tự nhiên, cú pháp đơn giản, dễ hiểu, dễ học.",
        "Có thể viết thoải mái không cần theo quy tắc của ngôn ngữ lập trình.",
        "Chỉ dùng phục vụ trong học tập, không có tính ứng dụng trong phát triển ứng dụng web, lập trình games…"
      ],
      "answer": 1,
      "explanation": "Ngôn ngữ lập trình bậc cao gần với ngôn ngữ tự nhiên, cú pháp đơn giản, dễ hiểu và dễ học."
    },
    {
      "question": "Lệnh nào trong các lệnh dưới đây được sử dụng để nhận dữ liệu từ người dùng trong Python?",
      "options": [
        "`cin`",
        "`scanf()`",
        "`input()`",
        "`<>`"
      ],
      "answer": 2,
      "explanation": "Trong Python, lệnh `input()` được dùng để nhận dữ liệu từ người dùng."
    },
    {
      "question": "Lệnh `print` in ra kết quả nào cho chương trình dưới đây?\n\n```python\nlist1 = [1, 3]\nlist2 = list1\nlist1[0] = 4\nprint(list2)\n```",
      "options": [
        "`[4, 3]`",
        "`[1, 3]`",
        "`[1, 4]`",
        "`[1, 3, 4]`"
      ],
      "answer": 0,
      "explanation": "`list2 = list1` khiến cả hai biến trỏ đến cùng một đối tượng list. Khi `list1[0] = 4`, `list2` cũng thay đổi thành `[4, 3]`."
    },
    {
      "question": "Một lớp được thừa hưởng thuộc tính từ hai lớp khác nhau được gọi là gì?",
      "options": [
        "Kế thừa đa cấp (Multilevel Inheritance)",
        "Đa kế thừa (Multiple Inheritance)",
        "Kế thừa phân cấp (Hierarchical Inheritance)",
        "Kế thừa (Inheritance)"
      ],
      "answer": 1,
      "explanation": "Khi một lớp thừa hưởng từ hai lớp khác nhau, đó là Đa kế thừa (Multiple Inheritance)."
    },
    {
      "question": "Một ô tô đi từ A đến B với vận tốc `v` (km/h). Câu lệnh để tính thời gian đi hết quãng đường `k` (km) là:",
      "options": [
        "`print(k / v)`",
        "`print('k/v')`",
        "`print(\"k/v\")`",
        "`print k / v`"
      ],
      "answer": 0,
      "explanation": "Câu lệnh đúng để tính thời gian là `print(k / v)` — biểu thức toán học, không phải chuỗi ký tự."
    },
    {
      "question": "Mở file với chế độ mode `'a'` có ý nghĩa gì?",
      "options": [
        "Mở file chỉ để đọc.",
        "Mở file để ghi tiếp vào cuối file (append).",
        "Mở file và xóa hết nội dung cũ để ghi lại.",
        "Mở file ở chế độ nhị phân."
      ],
      "answer": 1,
      "explanation": "Mode `'a'` (append) mở file để ghi tiếp vào cuối file, không xóa nội dung cũ."
    },
    {
      "question": "Mở file với chế độ mode `wb` có ý nghĩa gì?",
      "options": [
        "Mở file để ghi.",
        "Mở file để đọc và ghi.",
        "Mở file để ghi cho dạng nhị phân.",
        "Mở file để đọc và ghi cho dạng nhị phân."
      ],
      "answer": 2,
      "explanation": "Mode `wb` mở file để ghi ở dạng nhị phân (write binary)."
    },
    {
      "question": "Khi cố gắng truy cập một biến cục bộ trước khi nó được định nghĩa, ngoại lệ nào sẽ được nêu ra?",
      "options": [
        "`ReferenceError`",
        "`SystemError`",
        "`RuntimeError`",
        "`UnboundLocalError`"
      ],
      "answer": 3,
      "explanation": "Khi truy cập biến cục bộ trước khi định nghĩa, Python ném ra `UnboundLocalError`."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\ndef func(a, b=5, c=10):\n    print('a bằng', a, 'và b bằng', b, 'và c bằng', c)\n\nfunc(3, 7)\nfunc(25, c=24)\nfunc(c=50, a=100)\n```",
      "options": [
        "a bằng 7 và b bằng 3 và c bằng 10 a bằng 25 và b bằng 5 và c bằng 24 a bằng 5 và b bằng 100 và c bằng 50",
        "a bằng 3 và b bằng 7 và c bằng 10 a bằng 5 và b bằng 25 và c bằng 24 a bằng 50 và b bằng 100 và c bằng 5",
        "a bằng 3 và b bằng 7 và c bằng 10 a bằng 25 và b bằng 5 và c bằng 24 a bằng 100 và b bằng 5 và c bằng 50",
        "Không có đáp án đúng"
      ],
      "answer": 2,
      "explanation": "Python truyền tham số theo vị trí và theo tên. `func(3,7)`: a=3,b=7,c=10. `func(25,c=24)`: a=25,b=5,c=24. `func(c=50,a=100)`: a=100,b=5,c=50."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\ndef maximum(x, y):\n    if x > y:\n        return x\n    elif x == y:\n        return 'Các số bằng nhau'\n    else:\n        return y\n\nprint(maximum(2, 3))\n```",
      "options": [
        "2",
        "3",
        "Các số bằng nhau",
        "Không có đáp án"
      ],
      "answer": 1,
      "explanation": "`maximum(2,3)`: 2 < 3 nên trả về y=3. Output: `3`."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\ndef printMax(a, b):\n    if a > b:\n        print(a, 'is maximum')\n    elif a == b:\n        print(a, 'is equal to', b)\n    else:\n        print(b, 'is maximum')\n\nprintMax(3, 4)\n```",
      "options": [
        "3",
        "4",
        "4 is maximum",
        "Không có đáp án"
      ],
      "answer": 2,
      "explanation": "`printMax(3,4)`: 3 < 4 nên in `4 is maximum`."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\ndef say(message, times=1):\n    print(message * times)\n\nsay('Hello')\nsay('World', 5)\n```",
      "options": [
        "Hello WorldWorldWorldWorldWorld",
        "Hello World 5",
        "Hello World,World,World,World,World",
        "Hello HelloHelloHelloHelloHello"
      ],
      "answer": 0,
      "explanation": "`say('Hello')`: in `Hello` (nhân 1 lần). `say('World',5)`: in `WorldWorldWorldWorldWorld`. Output: `Hello` rồi `WorldWorldWorldWorldWorld`."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\ndef sayHello():\n    print('Hello World!')\n\nsayHello()\nsayHello()\n```",
      "options": [
        "Hello World! Hello World!",
        "‘Hello World!’ ‘Hello World!’",
        "Hello Hello",
        "Không có đáp án đúng"
      ],
      "answer": 0,
      "explanation": "Hàm `sayHello()` được gọi 2 lần, mỗi lần in `Hello World!`. Output: `Hello World!` rồi `Hello World!`."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\nx = 50\n\ndef func():\n    global x\n    print('Giá trị của x là', x)\n    x = 2\n    print('Giá trị của x được thay đổi thành', x)\n\nfunc()\nprint('Giá trị hiện tại của x là', x)\n```",
      "options": [
        "Giá trị của x là 50 Giá trị của x được thay đổi thành 2 Giá trị hiện tại của x là 50",
        "Giá trị của x là 50 Giá trị của x được thay đổi thành 2 Giá trị hiện tại của x là 2",
        "Giá trị của x là 50 Giá trị của x được thay đổi thành 50 Giá trị hiện tại của x là 50",
        "Không có đáp án đúng"
      ],
      "answer": 1,
      "explanation": "`global x` cho phép thay đổi biến toàn cục. x được đổi thành 2 trong hàm và giữ nguyên sau khi hàm kết thúc. Output cuối: `Giá trị hiện tại của x là 2`."
    },
    {
      "question": "Output của chương trình dưới đây là gì?\n\n```python\nx = 50\n\ndef func(x):\n    print('Giá trị của x là', x)\n    x = 2\n    print('Giá trị của x được thay đổi thành', x)\n\nfunc(x)\nprint('Giá trị hiện tại của x là', x)\n```",
      "options": [
        "Giá trị hiện tại của x là 50",
        "Giá trị hiện tại của x là 100",
        "Giá trị hiện tại của x là 2",
        "Không có đáp án đúng"
      ],
      "answer": 0,
      "explanation": "Biến `x` trong hàm là cục bộ (local), thay đổi x=2 trong hàm không ảnh hưởng đến x bên ngoài. Output: `Giá trị hiện tại của x là 50`."
    },
    {
      "question": "Output của hàm biểu diễn dưới đây là gì?\n\n```python\ndivmod(10.5, 5)\ndivmod(2.4, 1.2)\n```",
      "options": [
        "`(2.0, 0.5) (2.0, 0.0)`",
        "`(2, 0.5) (2, 0)`",
        "`(2.0, 0.5) (2.0, 0.0)`",
        "`(2, 0.5) (2)`"
      ],
      "answer": 0,
      "explanation": "`divmod(10.5,5)` = `(2.0, 0.5)`. `divmod(2.4,1.2)` ≈ `(2.0, 0.0)` (do floating point). Output: `(2.0, 0.5) (2.0, 0.0)`."
    },
    {
      "question": "Output của hàm biểu diễn dưới đây là gì?\n\n```python\nimport math\nabs(math.sqrt(25))\n```",
      "options": [
        "`Error`",
        "`-5`",
        "`5`",
        "`5.0`"
      ],
      "answer": 3,
      "explanation": "`math.sqrt(25)` = 5.0 (float). `abs(5.0)` = `5.0`. Output: `5.0`."
    },
    {
      "question": "Output của hàm sau là gì?\n\n```python\nany([2 > 8, 4 > 2, 1 > 2])\n```",
      "options": [
        "`Error`",
        "`True`",
        "`False`",
        "`4 > 2`"
      ],
      "answer": 1,
      "explanation": "`any([2>8, 4>2, 1>2])` = `any([False, True, False])` = `True` vì có ít nhất một phần tử True."
    },
    {
      "question": "Output của hàm sau là gì?\n\n```python\nfloat('1e-003')\nfloat('2e+003')\n```",
      "options": [
        "`3.00 300`",
        "`0.001 2000.0`",
        "`0.001 200`",
        "`Error 2003`"
      ],
      "answer": 1,
      "explanation": "`float('1e-003')` = 0.001. `float('2e+003')` = 2000.0. Output: `0.001 2000.0`."
    }
  ]
}
````


## Câu 81–100

````quiz
{
  "title": "Trắc nghiệm Python – câu 81 đến 100",
  "questions": [
    {
      "question": "Output của hàm sau là gì? Lưu ý: số lượng khoảng trắng trước số đó là 5.\n\n```python\nfloat('     -12345\n')\n```",
      "options": [
        "`-12345.0` (5 khoảng trắng trước số)",
        "`-12345.0`",
        "`Error`",
        "`-12345.000000000…` (số thập phân vô hạn)"
      ],
      "answer": 1,
      "explanation": "`float()` tự động bỏ khoảng trắng đầu/cuối chuỗi. Output: `-12345.0`."
    },
    {
      "question": "Output của hàm sau là:\n\n```python\nall(3, 0, 4.2)\n```",
      "options": [
        "`True`",
        "`False`",
        "`Error`",
        "`0`"
      ],
      "answer": 2,
      "explanation": "`all()` nhận iterable, không nhận nhiều tham số riêng lẻ. Gọi `all(3,0,4.2)` sẽ báo `TypeError`."
    },
    {
      "question": "Output của lệnh dưới đây là:\n\n```python\nprint(\"Hello World\"[::-1])\n```",
      "options": [
        "`dlroW olleH`",
        "`Hello Worl`",
        "`d`",
        "`Error`"
      ],
      "answer": 0,
      "explanation": "`\"Hello World\"[::-1]` đảo ngược chuỗi. Output: `dlroW olleH`."
    },
    {
      "question": "Output của lệnh là:\n\n```python\nprint(3 >= 3)\n```",
      "options": [
        "`3 >= 3`",
        "`True`",
        "`False`",
        "`None`"
      ],
      "answer": 1,
      "explanation": "`3 >= 3` là `True`. `print(True)` in ra `True`."
    },
    {
      "question": "Output của lệnh sau là:\n\n```python\nprint(1, 2, 3, 4, sep='*')\n```",
      "options": [
        "`1 2 3 4`",
        "`1234`",
        "`123*4`",
        "`24`"
      ],
      "answer": 3,
      "explanation": "Nhìn lại: `print(1, 2, 3, 4, sep='*')` in các phần tử cách nhau bằng `*`. Output: `1*2*3*4`."
    },
    {
      "question": "Python có 2 loại hàm chính, đó là:",
      "options": [
        "Custom function & User defined function",
        "Built-in function & User defined function",
        "Built-in function & User function",
        "System function & User function"
      ],
      "answer": 1,
      "explanation": "Python có 2 loại hàm chính: Built-in function (hàm tích hợp) và User defined function (hàm người dùng tự định nghĩa)."
    },
    {
      "question": "Python là",
      "options": [
        "Ngôn ngữ lập trình bậc cao.",
        "Ngôn ngữ lập trình bậc thấp.",
        "Chương trình dịch.",
        "Ngôn ngữ máy."
      ],
      "answer": 0,
      "explanation": "Python là ngôn ngữ lập trình bậc cao (high-level programming language)."
    },
    {
      "question": "Python được dùng để:",
      "options": [
        "phát triển các ứng dụng web, phần mềm ứng dụng",
        "lập trình games, điều khiển robot",
        "xử lí ảnh, phân tích dữ liệu, …",
        "Cả A, B và **C.**"
      ],
      "answer": 3,
      "explanation": "Python được dùng để phát triển ứng dụng web, phần mềm, lập trình games, điều khiển robot, xử lý ảnh, phân tích dữ liệu và nhiều ứng dụng khác."
    },
    {
      "question": "Theo dõi đoạn code dưới đây và chọn đáp án đúng nhất:\n\n```python\na = [1, 4, 20, 2, 5]\nx = a[0]\nfor i in a:\n    if i > x:\n        x = i\nprint(x)\n```",
      "options": [
        "x là giá trị trung bình của list.",
        "x là giá trị nhỏ nhất của list.",
        "x là giá trị lớn nhất của list.",
        "x là tổng giá trị các số trong list."
      ],
      "answer": 2,
      "explanation": "Đoạn code tìm phần tử lớn nhất trong list bằng cách so sánh từng phần tử. `x` cuối cùng là giá trị lớn nhất của list."
    },
    {
      "question": "Theo dõi đoạn code dưới đây và chọn đáp án đúng nhất:\n\n```python\ni = 0\nx = 0\nwhile i < 10:\n    if i % 2 == 0:\n        x += 1\n    i += 1\n```\n\n`x = ___`",
      "options": [
        "3",
        "4",
        "5",
        "0"
      ],
      "answer": 2,
      "explanation": "Vòng lặp đếm số chẵn trong [0,9]: 0,2,4,6,8 → 5 số chẵn. `x = 5`."
    },
    {
      "question": "Trong NNLT Python để kiểm tra số tự nhiên `n` khác 0 là số chẵn hay lẻ, câu lệnh nào sau đây là đúng?",
      "options": [
        "```python\nif n // 2 == 1:\n    print('so chan')\nelse:\n    print('so le')\n```",
        "```python\nif n // 2 == 0:\n    print('so chan')\nelse:\n    print('so le')\n```",
        "```python\nif n % 2 == 0:\n    print('so chan')\nelse:\n    print('so le')\n```",
        "```python\nif n % 2 == 1:\n    print('so chan')\nelse:\n    print('so le')\n```"
      ],
      "answer": 2,
      "explanation": "Kiểm tra số chẵn dùng `n % 2 == 0`. Nếu phần dư chia 2 bằng 0 thì là số chẵn."
    },
    {
      "question": "Trong NNLT Python, biểu thức sau có giá trị bằng bao nhiêu: `(3 > 4) and (5 > 2)`?",
      "options": [
        "`1 + x**3`",
        "`1 + x^3`",
        "`1 + x*3`",
        "`1 + x^^3`"
      ],
      "answer": 0,
      "explanation": "Trong Python, `x**3` là lũy thừa 3. Biểu thức toán $1+x^3$ viết là `1 + x**3`."
    },
    {
      "question": "Trong NNLT Python, biểu thức sau cho kết quả bằng bao nhiêu?\n\n```python\n2**3 + 4//2 - 3%2\n```",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "answer": 2,
      "explanation": "`2**3` = 8, `4//2` = 2, `3%2` = 1. Kết quả: 8 + 2 - 1 = 9."
    },
    {
      "question": "Trong NNLT Python, cho các biến `a`, `b`, `c` có kiểu `int`. Biểu thức nào sau đây cho kết quả là `True`?",
      "options": [
        "`5 * a + 7 * b + 8 * c`",
        "`5a + 7b + 8c`",
        "`{a + b} * c`",
        "`a * b(a + b)`"
      ],
      "answer": 0,
      "explanation": "Biểu thức hợp lệ trong Python là `5 * a + 7 * b + 8 * c`. Các biểu thức khác có lỗi cú pháp."
    },
    {
      "question": "Trong NNLT Python, cho đoạn chương trình sau:\n\n```python\na = 1\nb = 2\na, b = b, a\n```\n\nSau khi thực hiện đoạn chương trình trên, giá trị của `a` và `b` là:",
      "options": [
        "`a = 1, b = 2`",
        "`a = 2, b = 1`",
        "`a = 1, b = 1`",
        "`a = 2, b = 2`"
      ],
      "answer": 1,
      "explanation": "Lệnh `a, b = b, a` hoán đổi giá trị. Sau đó `a = 2, b = 1`."
    },
    {
      "question": "Trong NNLT Python, cho đoạn chương trình sau:\n\n```python\na = b = 1\nc, d = 1, 2\nprint(a + b + c + d)\n```\n\nKết quả trên màn hình là:",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answer": 2,
      "explanation": "`a = b = 1`, `c = 1`, `d = 2`. Tổng: 1+1+1+2 = 5."
    },
    {
      "question": "Trong NNLT Python, câu lệnh sau cho kết quả trên màn hình là gì?\n\n```python\nif 1 < 2 and 1 > 3:\n    print('false')\nelse:\n    print('true')\n```",
      "options": [
        "`TRUE`",
        "`true`",
        "`FALSE`",
        "`false`"
      ],
      "answer": 1,
      "explanation": "`1 < 2` là True, `1 > 3` là False. `True and False` = False → chạy `else`: in `true`."
    },
    {
      "question": "Trong NNLT Python, cấu trúc rẽ nhánh dạng thiếu là:",
      "options": [
        "`if <điều kiện>: <câu lệnh>`",
        "`IF <điều kiện>: <câu lệnh>`",
        "`if <điều kiện> then <câu lệnh>;`",
        "`IF <điều kiện> THEN <câu lệnh>;`"
      ],
      "answer": 0,
      "explanation": "Cấu trúc rẽ nhánh dạng thiếu trong Python: `if <điều kiện>: <câu lệnh>` (chữ thường, không có `then`)."
    },
    {
      "question": "Trong NNLT Python, cấu trúc rẽ nhánh dạng đủ là:",
      "options": [
        "`if <điều kiện>: <câu lệnh 1> else: <câu lệnh 2>`",
        "```python\nif <điều kiện>:\n    <câu lệnh 1>\nelse:\n    <câu lệnh 2>\n```",
        "`IF <điều kiện>: <câu lệnh 1> ELSE: <câu lệnh 2>`",
        "```text\nIF <điều kiện>:\n    <câu lệnh 1>\nELSE:\n    <câu lệnh 2>\n```"
      ],
      "answer": 1,
      "explanation": "Cấu trúc rẽ nhánh dạng đủ đúng chuẩn Python: `if` điều kiện xuống dòng, thụt lề, rồi `else:`."
    },
    {
      "question": "Trong NNLT Python, hãy chọn biểu diễn hằng trong các biểu diễn dưới đây:",
      "options": [
        "`_Python`",
        "`9A2`",
        "`'Python'`",
        "`B2@c3`"
      ],
      "answer": 2,
      "explanation": "`'Python'` là hằng xâu (string literal). Các lựa chọn khác là tên biến hoặc tên không hợp lệ."
    }
  ]
}
````


## Câu 101–120

````quiz
{
  "title": "Trắc nghiệm Python – câu 101 đến 120",
  "questions": [
    {
      "question": "Trong NNLT Python, kết quả của biến `x` sau khi thực hiện câu lệnh `x = math.sqrt(20 // 5)` là:",
      "options": [
        "`4`",
        "`0`",
        "`16`",
        "`2`"
      ],
      "answer": 3,
      "explanation": "`20 // 5` = 4, `math.sqrt(4)` = 2.0. Biến `x = 2.0` (nhưng đáp án D ghi 2, tức kết quả là 2.0 ≈ 2)."
    },
    {
      "question": "Trong NNLT Python, những tên biến nào sau đây là hợp lệ?",
      "options": [
        "`Delta`, `x1`, `tinh tong`",
        "`KETQUA`, `Tong2so`, `chuvi`",
        "`2x`, `Chu_vi`, `DT2`",
        "`x1`, `x*x`, `tong2so`"
      ],
      "answer": 1,
      "explanation": "Tên biến hợp lệ: bắt đầu bằng chữ cái hoặc `_`, không có khoảng trắng. `KETQUA`, `Tong2so`, `chuvi` đều hợp lệ."
    },
    {
      "question": "Trong NNLT Python, phát biểu nào sau đây là sai?",
      "options": [
        "Câu lệnh trong Python không có ký hiệu kết thúc câu lệnh, mỗi câu lệnh viết trên một dòng, nếu câu lệnh dài, dùng dấu sổ phải () để ngắt.",
        "Các biến không cần khai báo, gán cho biến giá trị kiểu nào thì biến sẽ có kiểu đó",
        "Kiểu dữ liệu của biến có thể thay đổi",
        "Để bắt đầu và kết thúc chương trình Python ta sử dụng Begin…End."
      ],
      "answer": 3,
      "explanation": "Python không dùng `Begin...End`. Đây là cú pháp của Pascal/Delphi."
    },
    {
      "question": "Trong NNLT Python, phát biểu nào sau đây là sai?",
      "options": [
        "Tên là một dãy liên tiếp có số kí tự tùy ý",
        "Tên phân biệt chữ hoa và chữ thường",
        "Hằng xâu đặt trong cặp dấu nháy đơn hoặc nháy kép, ví dụ “python” hoặc ‘python’",
        "Tên không phân biệt chữ hoa và chữ thường"
      ],
      "answer": 3,
      "explanation": "Python phân biệt chữ hoa và chữ thường. Phát biểu \"Tên không phân biệt chữ hoa và chữ thường\" là sai."
    },
    {
      "question": "Trong NNLT Python, phép toán chia lấy phần dư là:",
      "options": [
        "`div`",
        "`mod`",
        "`//`",
        "`%`"
      ],
      "answer": 3,
      "explanation": "Phép toán chia lấy phần dư trong Python là `%` (modulo)."
    },
    {
      "question": "Trong NNLT Python, phép toán chia lấy phần nguyên là:",
      "options": [
        "`div`",
        "`mod`",
        "`//`",
        "`%`"
      ],
      "answer": 2,
      "explanation": "Phép toán chia lấy phần nguyên trong Python là `//` (floor division)."
    },
    {
      "question": "Trong NNLT Python, so sánh bằng và khác được viết như thế nào?",
      "options": [
        "`==` (bằng), `!=` (khác)",
        "`=` (bằng), `!=` (khác)",
        "`==` (bằng), `<>` (khác)",
        "`=` (bằng), `<>` (khác)"
      ],
      "answer": 0,
      "explanation": "Trong Python: so sánh bằng dùng `==`, so sánh khác dùng `!=`."
    },
    {
      "question": "Trong NNLT Python, để gán cho biến `x` giá trị là 1, câu lệnh nào sau đây đúng?",
      "options": [
        "`1 = x`",
        "`x = 1`",
        "`x := 1`",
        "`1 =: x`"
      ],
      "answer": 1,
      "explanation": "Để gán giá trị 1 cho biến x trong Python: `x = 1`."
    },
    {
      "question": "Trong NNLT Python, để nhập 1 số nguyên từ bàn phím cho biến `n`, ta chọn câu lệnh nào?",
      "options": [
        "`input('Nhập số nguyên n: ', n)`",
        "`n = int(input('Nhập số nguyên n: '))`",
        "`n = int('Nhập số nguyên n: ')`",
        "`n := int(input('Nhập số nguyên n: '))`"
      ],
      "answer": 1,
      "explanation": "Để nhập số nguyên từ bàn phím: `n = int(input('Nhập số nguyên n: '))`."
    },
    {
      "question": "Trong NNLT Python, để nhập 3 số nguyên cho 3 biến `a`, `b`, `c` từ bàn phím, câu lệnh nào sau đây đúng?",
      "options": [
        "`input('Nhập 3 số nguyên: ', a, b, c)`",
        "`a, b, c = map(int, input('Nhập 3 số nguyên: ').split())`",
        "`a, b, c = map(int, input('Nhập 3 số nguyên: '))`",
        "`map(int, input('Nhập 3 số nguyên: ').split(a, b, c))`"
      ],
      "answer": 1,
      "explanation": "Để nhập 3 số nguyên cùng lúc: `a, b, c = map(int, input('...').split())`."
    },
    {
      "question": "Trong NNLT Python, để nhập số thực cho biến `n`, câu lệnh nào sau đây đúng?",
      "options": [
        "`n = input('Nhập 1 số thực:')`",
        "`n = int(input('Nhập 1 số thực:')`",
        "`n = float(input('Nhập 1 số thực:')`",
        "`float(input('Nhập số thực n:'))`"
      ],
      "answer": 2,
      "explanation": "Để nhập số thực: `n = float(input('Nhập 1 số thực:'))`."
    },
    {
      "question": "Trong NNLT Python, để đưa kết quả ra màn hình ta sử dụng thủ tục nào?",
      "options": [
        "`printf(<Danh sách kết quả ra>)`",
        "`print(<Danh sách kết quả ra>)`",
        "`Input(<Danh sách kết quả ra>)`",
        "`Print(<Danh sách kết quả ra>)`"
      ],
      "answer": 1,
      "explanation": "Trong Python, dùng `print(<Danh sách kết quả>)` để in ra màn hình."
    },
    {
      "question": "Trong cửa sổ Shell của Python:",
      "options": [
        "Thực hiện ngay từng câu lệnh và thấy được kết quả.",
        "Không thực hiện ngay từng câu lệnh và không thấy được kết quả.",
        "Không thể thực hiện bất kì câu lệnh nào.",
        "Không thể thực hiện từng câu lệnh mà thực hiện toàn bộ."
      ],
      "answer": 0,
      "explanation": "Cửa sổ Shell thực hiện ngay từng câu lệnh và hiển thị kết quả ngay lập tức."
    },
    {
      "question": "Trong ngôn ngữ lập trình Python, phát biểu nào sau đây là đúng?",
      "options": [
        "Python là ngôn ngữ lập trình bậc cao duy nhất.",
        "Chương trình máy tính là một dãy các câu lệnh mà máy tính không hiểu được.",
        "Python phân biệt chữ hoa với chữ thường.",
        "Dãy kí tự muốn in ra màn hình dùng câu lệnh `print()` và không cần dùng cặp nháy."
      ],
      "answer": 2,
      "explanation": "Python phân biệt chữ hoa với chữ thường (case-sensitive). Ví dụ: `Print` và `print` là khác nhau."
    },
    {
      "question": "Trong ngôn ngữ lập trình Python, để in ra màn hình dòng chữ \"xin chao\" ta viết:",
      "options": [
        "`print()`",
        "`print(xin chao)`",
        "`print('xin chao')`",
        "`print xin chao`"
      ],
      "answer": 2,
      "explanation": "Để in `xin chao`: `print('xin chao')`. Phải đặt chuỗi trong dấu nháy."
    },
    {
      "question": "Trong ngôn ngữ lập trình Python, để in ra màn hình ta sử dụng lệnh:",
      "options": [
        "`write()`",
        "`Print()`",
        "`cout <<`",
        "`read()`"
      ],
      "answer": 1,
      "explanation": "Trong Python, để in ra màn hình dùng lệnh `print()` (chữ thường). `Print()` sẽ báo lỗi NameError."
    },
    {
      "question": "Từ khóa nào được sử dụng để bắt đầu khai báo hàm?",
      "options": [
        "`fun`",
        "`define`",
        "`def`",
        "`function`"
      ],
      "answer": 2,
      "explanation": "Từ khóa `def` được dùng để khai báo hàm trong Python."
    },
    {
      "question": "Vòng lặp nào trả về kết quả dưới đây?\n\n```text\n11111\n22222\n33333\n44444\n55555\n```",
      "options": [
        "`for i in range(1, 6): print(i, i, i, i, i)`",
        "`for i in range(1, 5): print(str(i) * 5)`",
        "`for i in range(1, 6): print(str(i) * 5)`",
        "`for i in range(0, 5): print(str(i) * 5)`"
      ],
      "answer": 2,
      "explanation": "`for i in range(1, 6): print(str(i) * 5)` in mỗi số i từ 1 đến 5, lặp lại 5 lần. Output đúng như yêu cầu."
    },
    {
      "question": "`n` trong đoạn sau là kiểu dữ liệu nào?\n\n```python\nn = '5'\n```",
      "options": [
        "integer",
        "string",
        "tuple",
        "operator"
      ],
      "answer": 1,
      "explanation": "`n = '5'` — giá trị có dấu nháy đơn, nên `n` là kiểu `str` (string)."
    },
    {
      "question": "Ý nghĩa của hàm `__init__()` trong Python là gì?",
      "options": [
        "Khởi tạo một lớp để sử dụng.",
        "Được gọi khi một đối tượng mới được khởi tạo.",
        "Khởi tạo và đưa tất cả các thuộc tính dữ liệu về 0 khi được gọi.",
        "Không có đáp án đúng."
      ],
      "answer": 1,
      "explanation": "`__init__()` được gọi tự động khi một đối tượng mới được khởi tạo từ lớp."
    }
  ]
}
````


## Câu 121–140

````quiz
{
  "title": "Trắc nghiệm Python – câu 121 đến 140",
  "questions": [
    {
      "question": "Điền phần còn thiếu trong đoạn code để được output dưới đây:\n\n```text\n55555\n44444\n33333\n22222\n11111\n```\n\n```python\nfor i in range(5, 0, ****):\n    print(str(i) * 5)\n```",
      "options": [
        "0",
        "None",
        "1",
        "-1"
      ],
      "answer": 3,
      "explanation": "`range(5, 0, -1)` đếm từ 5 xuống 1 (bước -1). Tham số thứ 3 cần là `-1`."
    },
    {
      "question": "Điều gì sẽ xảy ra nếu bạn cố mở một file không tồn tại?",
      "options": [
        "Python tự động tạo một file mới dưới tên bạn đang gọi ra.",
        "Không có gì xảy ra vì file không tồn tại.",
        "Gây ra một ngoại lệ",
        "Không có đáp án nào đúng"
      ],
      "answer": 2,
      "explanation": "Khi cố mở file không tồn tại ở chế độ đọc, Python ném ra ngoại lệ `FileNotFoundError`."
    },
    {
      "question": "Đoạn code dưới đây có ý nghĩa gì?\n\n```python\nf = open(\"test.txt\")\n```",
      "options": [
        "Mở file `test.txt` được phép đọc và ghi vào file.",
        "Mở file `test.txt` và chỉ được phép đọc file.",
        "Mở file `test.txt` và được phép ghi đè vào file.",
        "Mở file `test.txt` và được phép ghi tiếp vào file."
      ],
      "answer": 1,
      "explanation": "`f = open(\"test.txt\")` mặc định mở ở chế độ `'r'` (read-only — chỉ đọc)."
    },
    {
      "question": "Đoạn code dưới đây có ý nghĩa gì?\n\n```python\nos.listdir()\n```",
      "options": [
        "In ra thư mục làm việc hiện tại.",
        "In ra tất cả các thư mục (không phải tệp) bên trong thư mục đã cho.",
        "In ra tất cả các thư mục và tập tin bên trong thư mục đã cho.",
        "Tạo một thư mục mới."
      ],
      "answer": 2,
      "explanation": "`os.listdir()` trả về danh sách tất cả các thư mục và tập tin trong thư mục hiện tại."
    },
    {
      "question": "Đoạn code nào sau đây sử dụng tính năng kế thừa của Python?",
      "options": [
        "`class Foo: pass`",
        "```python\nclass Foo(object):\n    pass\n\nclass Hoo(object):\n    pass\n```",
        "```python\nclass Foo:\n    pass\n\nclass Hoo(Foo):\n    pass\n```",
        "Không có đáp án chính xác."
      ],
      "answer": 2,
      "explanation": "Đoạn code `class Hoo(Foo): pass` thể hiện kế thừa — lớp `Hoo` kế thừa từ lớp `Foo`."
    },
    {
      "question": "Đoạn code nào tự động đóng tệp khi có ngoại lệ xảy ra?",
      "options": [
        "```python\nwith open(\"test.txt\", encoding='utf-8') as f:\n    pass\n```",
        "```python\ntry:\n    f = open(\"test.txt\", encoding='utf-8')\nfinally:\n    f.close()\n```",
        "Không có đáp án chính xác",
        "Cả A và B đều đúng"
      ],
      "answer": 3,
      "explanation": "Cả `with open(...)` và `try/finally f.close()` đều đảm bảo file được đóng khi có ngoại lệ."
    },
    {
      "question": "Đoạn code sau thực hiện yêu cầu gì?\n\n```python\ntry:\n    # đoạn code có thể gây ra lỗi\n    pass\nexcept (TypeError, ZeroDivisionError):\n    print(\"Python Quiz\")\n```",
      "options": [
        "In ra ‘ Python Quiz ‘ nếu có ngoại lệ xảy ra (không quan trọng là ngoại lệ gì).",
        "In ra ‘ Python Quiz ‘ nếu không có ngoại lệ xảy ra.",
        "In ra ‘ Python Quiz ‘ nếu một trong hai ngoại lệ TypeError và ZeroDivisionError xảy ra.",
        "Chỉ in ra ‘ Python Quiz ‘ khi cả hai ngoại lệ TypeError và ZeroDivisionError cùng xảy ra"
      ],
      "answer": 2,
      "explanation": "`except (TypeError, ZeroDivisionError)` chỉ bắt một trong hai ngoại lệ đó, không bắt tất cả ngoại lệ."
    },
    {
      "question": "Đâu không phải là kiểu dữ liệu tiêu chuẩn trong Python?",
      "options": [
        "List",
        "Dictionary",
        "Class",
        "Tuple"
      ],
      "answer": 2,
      "explanation": "`Class` không phải kiểu dữ liệu tiêu chuẩn (standard data type). Các kiểu chuẩn gồm: List, Dictionary, Tuple, Set, String, Integer, Float, Boolean."
    },
    {
      "question": "Đâu là giá trị của `colors[2]`?\n\n```python\ncolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']\n```",
      "options": [
        "orange",
        "indigo",
        "blue",
        "yellow"
      ],
      "answer": 3,
      "explanation": "`colors[2]` lấy phần tử tại index 2 (bắt đầu từ 0): `red`=0, `orange`=1, `yellow`=2. Kết quả: `yellow`."
    },
    {
      "question": "Đâu là kết quả của hàm `complex()` trong những đáp án dưới đây?",
      "options": [
        "`0j`",
        "`0 + 0j`",
        "`0`",
        "`Error`"
      ],
      "answer": 0,
      "explanation": "`complex()` không có tham số trả về `0j`."
    },
    {
      "question": "Đâu là kết quả của đoạn code dưới đây?\n\n```python\nclass Foo:\n    def printLine(self, line='Python'):\n        print(line)\n\no1 = Foo()\no1.printLine('Java')\n```",
      "options": [
        "Python",
        "line",
        "Java",
        "Java Python"
      ],
      "answer": 2,
      "explanation": "`o1.printLine('Java')` truyền `'Java'` vào tham số `line`, ghi đè giá trị mặc định `'Python'`. Output: `Java`."
    },
    {
      "question": "Đâu là kết quả của đoạn code dưới đây?\n\n```python\nmyList = [1, 5, 5, 5, 5, 1]\nmax = myList[0]\nindexOfMax = 0\n\nfor i in range(1, len(myList)):\n    if myList[i] > max:\n        max = myList[i]\n        indexOfMax = i\n\nprint(indexOfMax)\n```",
      "options": [
        "0",
        "4",
        "1",
        "5"
      ],
      "answer": 2,
      "explanation": "List có các giá trị `[1, 5, 5, 5, 5, 1]`. Phần tử đầu tiên lớn hơn `max=1` là `5` tại index 1. Output: `1`."
    },
    {
      "question": "Đâu là kết quả của đoạn code dưới đây?\n\n```python\nnumber = 5.0\ntry:\n    r = 10 / number\n    print(r)\nexcept:\n    print(\"Oops! Error occurred.\")\n```",
      "options": [
        "Oops! Error occurred.",
        "2.0",
        "2.0 Oops! Error occurred.",
        "5.0"
      ],
      "answer": 1,
      "explanation": "`number=5.0`, `r = 10/5.0 = 2.0`. Không có lỗi, in `2.0`."
    },
    {
      "question": "Đâu là lợi thế của việc sử dụng hàm trong Python?",
      "options": [
        "Tránh việc phải lặp lại code thực thi những tác vụ tương tự nhau.",
        "Phân tách các vấn đề phức tạp thành các phần đơn giản hơn.",
        "Code rõ ràng, dễ quản lý hơn",
        "Tất cả các đáp án đều đúng."
      ],
      "answer": 3,
      "explanation": "Hàm giúp tránh lặp code, phân tách vấn đề phức tạp và làm code rõ ràng hơn — tất cả đáp án đều đúng."
    },
    {
      "question": "Đâu là output của chương trình dưới đây?\n\n```python\nclass Point:\n    def __init__(self, x=0, y=0):\n        self.x = x + 1\n        self.y = y + 1\n\np1 = Point()\nprint(p1.x, p1.y)\n```",
      "options": [
        "0 0",
        "1 1",
        "None None",
        "x y"
      ],
      "answer": 1,
      "explanation": "`Point()` không truyền tham số nên `x=0, y=0`. `self.x = 0+1 = 1`, `self.y = 0+1 = 1`. Output: `1 1`."
    },
    {
      "question": "Đâu là output của chương trình dưới đây?\n\n```python\ndef outerFunction():\n    global a\n    a = 20\n\n    def innerFunction():\n        global a\n        a = 30\n        print('a =', a)\n\na = 10\nouterFunction()\nprint('a =', a)\n```",
      "options": [
        "a = 10 a = 30",
        "a = 10",
        "a = 20",
        "a = 30"
      ],
      "answer": 2,
      "explanation": "`outerFunction()` đặt `a=20` nhưng `innerFunction()` chưa được gọi. Sau `outerFunction()`, `a=20`. Output: `a = 20`."
    },
    {
      "question": "Đâu là output của đoạn code dưới đây?\n\n```python\nmylist = [1, 5, 9, int('0')]\nprint(sum(mylist))\n```",
      "options": [
        "`16`",
        "`15`",
        "`63`",
        "Không có đáp án đúng."
      ],
      "answer": 1,
      "explanation": "`int('0')` = 0. `sum([1, 5, 9, 0])` = 15. Output: `15`."
    },
    {
      "question": "Đâu là quy tắc đúng khi đặt tên cho biến trong Python?",
      "options": [
        "Tên biến có thể bắt đầu bằng dấu gạch dưới `_`",
        "Có thể sử dụng keyword làm tên biến",
        "Tên biến có thể bắt đầu bằng một chữ số",
        "Tên biến có thể có các ký hiệu như `!` `@` `#` `$` `%`"
      ],
      "answer": 0,
      "explanation": "Tên biến có thể bắt đầu bằng dấu gạch dưới `_`. Không được dùng keyword, không được bắt đầu bằng số, không được có ký hiệu đặc biệt."
    },
    {
      "question": "Đâu là yếu tố được gọi ra khi hàm được khai báo trong một class?",
      "options": [
        "Module",
        "Class",
        "Method",
        "Một hàm khác"
      ],
      "answer": 2,
      "explanation": "Khi hàm được khai báo bên trong một class, nó được gọi là **Method** (phương thức)."
    },
    {
      "question": "Đâu là điểm khác biệt giữa tuple và list?",
      "options": [
        "Tuple nằm trong dấu ngoặc nhọn, list nằm trong dầu ngoặc vuông.",
        "Tuple nằm trong dấu ngoặc vuông, list nằm trong dầu ngoặc nhọn.",
        "Tuple là danh sách với dữ liệu kiểu la mã, list là danh sách với kiểu dữ liệu thường.",
        "Dữ liệu thuộc kiểu list có thể thay đổi được, dữ liệu thuộc kiểu tuple không thể thay đổi được."
      ],
      "answer": 3,
      "explanation": "Sự khác biệt chính: dữ liệu trong `list` có thể thay đổi (mutable), trong `tuple` không thể thay đổi (immutable)."
    }
  ]
}
````


## Câu 141–142

````quiz
{
  "title": "Trắc nghiệm Python – câu 141 đến 142",
  "questions": [
    {
      "question": "Để khai báo thư viện ta sử dụng từ khóa nào?",
      "options": [
        "`uses`",
        "`import`",
        "`include`",
        "`attach`"
      ],
      "answer": 1,
      "explanation": "Để khai báo thư viện trong Python, dùng từ khóa `import`."
    },
    {
      "question": "Đối tượng dưới đây thuộc kiểu dữ liệu nào?\n\n```python\nL = [1, 23, 'hello', 1]\n```",
      "options": [
        "List",
        "Dictionary",
        "Tuple",
        "Array"
      ],
      "answer": 0,
      "explanation": "`L = [1, 23, 'hello', 1]` — được đặt trong dấu ngoặc vuông `[]` nên thuộc kiểu dữ liệu `List`."
    }
  ]
}
````
