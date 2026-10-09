---
title: Bài 1. Giới thiệu và cài đặt Python
description: Giới thiệu và hướng dẫn cài đặt Python - một ngôn ngữ lập trình đa năng,
  được tạo ra bởi Guido van Rossum từ năm cuối những năm 1980.
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- Cài đặt
- CNTT
grade: 10
---

## Bài 1. Giới thiệu và cài đặt Python

## 1.1 Lịch sử ngôn ngữ Python

Python là một ngôn ngữ lập trình đa năng, được tạo ra bởi **Guido van Rossum** từ năm cuối những năm 1980. Phiên bản đầu tiên được phát hành năm 1991, hiện nay các phiên bản của Python gồm có hai nhánh chính là Python 2.x và Python 3.x. Hiện tại, Python được phát triển trong một dự án mã mở, do tổ chức phi lợi nhuận Python Software Foundation quản lý.

## 1.2 Ưu điểm của ngôn ngữ Python

Python là một ngôn ngữ lập trình bậc rất cao và có một số đặc điểm nổi bật sau:

- đa mục đích – bạn có thể sử dụng Python để phát triển ứng dụng desktop, web, machine learning, mobile, IoT…;

- hướng đối tượng;

- là ngôn ngữ lập trình dạng thông dịch (Interpreter Language);

- đa nền tảng;

- hoàn toàn tạo kiểu dữ liệu động và dùng cơ chế cấp phát – thu gom bộ nhớ tự động;

- cú pháp đơn giản, dễ đọc, có ít từ khóa, phân tách các khối lệnh (lệnh ghép) bằng khoảng trắng chứ không bằng cặp ngoặc {} như trong C, hoặc các từ khóa begin end như trong Pascal…, không sử dụng dấu chấm phảy (;) để kết thúc một lệnh;

- các thư viện hỗ trợ phong phú, có thể tìm được các thư viện phục vụ cho hầu hết mọi nhu cầu của bạn và tất cả đều miễn phí.

## 1.3 Cài đặt

Để cài đặt **Python**, bạn vào trang chủ của Python tại [https://python.org/](https://python.org/) và tải về phiên bản phù hợp với hệ điều hành đang dùng. Ở đây tôi không đi vào chi tiết cách cài đặt, cá nhân tôi sử dụng phiên bản 3.6 cho Windows 64 bit và cài vào thư mục C:\Python36 chỉ lưu ý các bạn khi cài đặt nên tích chọn để đưa **Python** vào biến môi trường (**System Path**). Nếu không, bạn phải thêm thư mục Python vào **System Path** một cách thủ công như sau:

- Bấm chuột phải vào **My Computer**(hoặc **This PC**) ngoài Desktop và chọn **Properties**; hoặc bấm tổ hợp phím ÿ + Break; hoặc vào **Control Panel\System and Security\System**.

- Chọn thẻ **Advanced System Setting**để mở hộp thoại **System Properties****.**

- Chọn thẻ **Advanced**rồi chọn nút **Environment Variables…**

- Trong thẻ **System variables**, chọn dòng **Path** và bấm **Edit.**

- Tiếp tục chọn **New**và gõ vào đường dẫn đến thư mục cài đặt Python, ở đây, của tôi là **C:\Python36\**

- Chọn tiếp **New**và thêm tiếp thư mục chứa các Scripts, ở đây, máy của tôi là **C:\Python36\Scripts\**

- Bấm **OK**.

![Hướng dẫn cài đặt Python - Hop thoai System Properties](assets/images/gioi-thieu-cai-dat-python-Cai-dat-Python-Hop-thoai-System-Properties.png)

Hình 1: Hộp thoại System Properties

Để kiểm tra đã thêm Python vào **System Path** chưa, bạn mở[1](#sdfootnote1sym) hộp thoại **Run** của Windows và gõ python, sau đó bấm Enter:

![Hình 2: Hộp thoại Run](assets/images/gioi-thieu-cai-dat-python-Hop-thoai-Run-tren-Windows.png)

Hình 2: Hộp thoại Run

nếu hiện cửa sổ như sau là thành công:

![Hình 3: Trình biên dịch Python](assets/images/gioi-thieu-cai-dat-python-Cửa-số-Trình-biên-dịch-Python.png)

Hình 3: Trình biên dịch Python

Sau khi cài đặt xong trình biên dịch Python, mặc định sẽ có một trình soạn thảo đi kèm là **IDLE**, tuy nhiên trình soạn thảo này khá cơ bản và không hỗ trợ nhiều cho người sử dụng như gợi ý các từ khóa, quản lý project, gỡ lỗi… nên tôi khuyên bạn nên sử dụng thêm một trình soạn thảo như **Notepad++, Sublime Text**, **Visual Studio Code**, **Pycharm**, **Eclipse**… Có rất nhiều chương trình như vậy, cả miễn phí và trả phí, nhưng cá nhân tôi thường sử dụng **Visual Studio Code** của Microsoft, đôi khi cũng sử dụng thêm cả **Sublime Text 3**.

Nếu mới làm quen với Python, bạn có thể cài đặt **Anaconda** tại [https://www.continuum.io](https://www.continuum.io/) là một môi trường Python đã bao gồm cả trình dịch Python, trình soạn thảo với rất nhiều tính năng cao cấp chuyên dụng giành cho **Data Science,**và được cài sẵn rất nhiều thư viện, đặc biệt là các thư viện cho **Machine Learning**, **Data Science** như numpy, jupyter, matplotlib…

## 1.4 Chạy một chương trình Python

Như đã nói ở trên, Python là ngôn ngữ **thông dịch** – tức là thực hiện một chương trình được viết bởi ngôn ngữ bậc cao bằng cách dịch nó theo từng dòng một –, nên để chạy một chương trình Python, bạn có thể sử dụng một trong hai cách:

- Chạy trực tiếp từng dòng lệnh ở trong chương trình dịch Python,

- Tạo một tệp tin với phần mở rộng là .py và chạy tệp này bằng chương trình dịch Python, những tệp này còn được gọi là các kịch bản script.

Chúng ta sẽ lần lượt tìm hiểu cả hai cách này.

### Chạy trình thông dịch

Cách thứ nhất, bạn chạy trình biên dịch Python tại[2](#sdfootnote2sym) đường dẫn C:\Python36\python.exe hoặc nếu đã cài đặt Python vào biến môi trường thì chỉ việc mở hộp thoại **Run** hoặc cửa sổ Command Line (từ đây sẽ viết tắt là CMD) và gõ python. Nếu thành công, bạn sẽ nhận được một cửa sổ như ở Hình 3. Bây giờ, hãy gõ vào sau dấu nhắc >>> dòng lệnh:

>>>print("Xin chào thế giới Python!")
Sẽ thu được kết quả như hình sau:

![Chạy Chương trình Python đầu tiên](assets/images/gioi-thieu-cai-dat-python-Chương-trình-Python-đầu-tiên.png)

Hình 4: Chương trình Python đầu tiên

Chúc mừng! Bạn đã thực hiện thành công chương trình đầu tiên của Python.

### Chạy các script

Cách thứ hai, bạn dùng một trình soạn thảo văn bản bất kì (Notepad chẳng hạn), gõ dòng lệnh

print("Xin chào thế giới Python!")
và lưu lại với đuôi mở rộng là .py – mà ta sẽ gọi là các *script*, ví dụ, tôi lưu lại thành tệp xin_chao.py tại thư mục C:\Python36, rồi mở cửa sổ **CMD** và gõ lệnh python C:\Python36\xin_chao.py hoặc chỉ cần gõ C:\Python36\xin_chao.py sẽ thu được kết quả như hình sau:

![Chạy script .py bằng chương trình dịch Python](assets/images/gioi-thieu-cai-dat-python-Chạy-script-.py-bằng-chương-trình-dịch-Python.png)

Hình 5: Chạy script .py bằng chương trình dịch Python

Ngoài ra, nếu bạn sử dụng **Sublime Text** để soạn *script*, thì có thể chạy một script bằng cách sử dụng phím tắt **Ctrl + B** để build *script* hoặc vào chọn Tools – Build.

Còn nếu sử dụng **Visual Studio Code** để soạn thảo script thì bấm chuột phải vào vùng soạn thảo và chọn **Run Python File in Terminal**.

![Chạy script Python trong Visual Studio Code](assets/images/gioi-thieu-cai-dat-python-Chạy-script-Python-trong-Visual-Studio-Code.png)

Hình 6: Chạy script Python trong Visual Studio Code

Trong hai cách trên, cần chú ý rằng, bạn phải lưu *script* vào đĩa cứng trước khi chạy.

Trong tài liệu này, những đoạn mã có dấu >>> thì bạn có thể thực hiện trực triếp ở trong chương trình thông dịch Python, mà không cần tạo *script*.

### Bài tập

1. Hãy tự cài đặt chương trình dịch Python phù hợp với hệ điều hành của mình.

2. Khởi chạy trình thông dịch Python và kiểm tra phiên bản đang sử dụng.

3. Khởi động chương trình thông dịch Python và tìm hiểu xem các lệnh help() có tác dụng gì. Sau đó, sử dụng lệnh help() này để tìm hiểu xem kiểu số nguyên int có những phương thức method nào.

4. Hãy sử dụng nó như một máy tính cầm tay để thực hiện các tính toán đơn giản, với các phép toán cộng +, trừ -, nhân *, chia / và lũy thừa **.

5. Viết chương trình in ra màn hình dòng chữ sau bằng hai cách, thực hiện trực tiếp trong trình thông dịch Python và viết script.

   

Twinkle, twinkle, little star,
   How I wonder what you are!
   Up above the world so high,
   Like a diamond in the sky.
   Twinkle, twinkle, little star,
   How I wonder what you are…

6. Hãy sử dụng trình soạn thảo **Visual Studio Code** và cài thêm các gói hỗ trợ lập trình Python. Google để tìm hiểu thêm.

[1](#sdfootnote1anc) Để mở hộp thoại Run có thể bấm tổ hợp phím **Windows** + **R**, hoặc bấm Start và gõ run sau đó chọn Run – ở đây tôi sử dụng Windows 10.

[2](#sdfootnote2anc) Ở đây, tôi sử dụng Python phiên bản 3.6, cài đặt vào thư mục C:\Python36\, trong máy của bạn có thể khác.
