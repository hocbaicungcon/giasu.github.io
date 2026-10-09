---
title: Hướng dẫn chuyển dòng thành cột trong Excel
description: Hướng dẫn cách chuyển dòng thành cột trong Excel (chuyển đổi, hoán vị
  dòng thành cột, hàng thành cột) bằng tính năng Paste Transpose hoặc sử dụng hàm
  TRANSPOSE().
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- CNTT
- Excel
- Tin học văn phòng
---

# Hướng dẫn cách chuyển dòng thành cột trong Excel

Cách chuyển dòng thành cột (chuyển đổi, hoán vị dòng thành cột, chuyển hàng thành cột) trong Excel bằng tính năng **Paste Transpose** hoặc sử dụng hàm **TRANSPOSE().
Xem thêm [Sửa lỗi font tiếng Việt file CSV Google Microsoft Forms](/bai-viet/sua-loi-font-tieng-viet-file-csv-google-microsoft-forms.html)

## 1. Các bước chuyển dòng thành cột trong Excel

Để chuyển đổi hàng (row) thành cột (col – column) ta sử dụng tính năng **Paste Transpose**, cụ thể như sau:

1️⃣ Mở file Excel có nhu cầu chuyển đổi cột thành hàng hoặc ngược lại.

2️⃣ Bôi đen (chọn) những hàng muốn chuyển đổi sang cột, hoặc ngược lại. Nhấn chuột phải và chọn Copy hoặc sử dụng tổ hợp phím Ctrl + C.

3️⃣ Di chuyển con trỏ chuột (dấu nhắc) đến vị trí muốn tạo bảng mới. Lúc này có 2 trường hợp:

- Đối với Excel 2019, 2016 và 2013: Nhấn chuột phải và chọn **Paste Transpose** ở hàng Paste Options như trong hình vẽ sau.

![Hướng dẫn cách chuyển dòng thành cột, chuyển đổi hàng sang cột Paste Transpose trong Excel](assets/images/huong-dan-cach-chuyen-dong-thanh-cot-trong-excel-chuyen-dong-thanh-cot-trong-excel-2019.png)

- Đối với Office cũ (như Excel 2003) thì bấm chuột phải và chọn **Paste Special**. Lúc này, hộp thoại **Paste Special** xuất hiện. Bạn tích chọn vào ô **Transpose**. Cuối cùng, nhấn **OK** để hoàn thành.

![chuyen dong thanh cot trong excel 2003](assets/images/huong-dan-cach-chuyen-dong-thanh-cot-trong-excel-chuyen-dong-thanh-cot-trong-excel-2003.png)

## 2. Hướng dẫn chi tiết cách chuyển dòng thành cột trong Excel

https://youtu.be/6tJkmf27L1o

## 3. Chuyển dòng thành cột bằng hàm TRANSPOSE()

1. Đếm các hàng và cột của bảng (vùng dữ liệu) mà bạn muốn chuyển đổi. Giả sử bảng của chúng ta là **6 cột** và **9 hàng**.

2. Sử dụng chuột để chọn (bôi đen) một các ô trống trong sheet Excel của bạn có kích thước đúng bằng kích thước của bảng *sau khi chuyển đổi*. Vì hàm TRANSPOSE chuyển hướng dọc và ngang (chuyển hàng thành cột và cột thành hàng) của một bảng đã chọn nên bạn cần phải chọn một vùng trống vừa đủ cho số hàng và cột của bạn. Trong ví dụ ở trên, bảng của chúng ta có **6 cột** và **9 hàng** nên khoảng trống phải có đủ chỗ cho **9 cột** và **6 hàng**.

3. Nhấn F2 (hoặc bấm chuột vào ô nhập công thức f(x)) để vào chế độ chỉnh sửa.

4. Nhập hàm **TRANSPOSE** và nhập dải dữ liệu mà bạn muốn chuyển đổi vào trong cặp ngoặc đơn.Ví dụ, bảng của chúng ta bắt đầu từ ô A1 và kết thúc ở ô F9 (hình vẽ) thì nhập **=TRANSPOSE(A1:F9)**.

![chuyen dong thanh cot trong excel bang ham transpose](assets/images/huong-dan-cach-chuyen-dong-thanh-cot-trong-excel-chuyen-dong-thanh-cot-trong-excel-bang-ham-transpose.jpg)

1. Nhấn Ctrl + Shift + Enter .

**Lưu ý:** Bạn cần nhấn Ctrl + Shift + Enter vì đây là một công thức mảng, nhấn *Enter* nó sẽ không hoạt động.

Lúc này, bảng của chúng ta đã xuất hiện và cách dòng đã chuyển thành cột, các cột đã chuyển thành dòng như trong hình dưới đây.

![chuyen dong thanh cot trong excel bang ham transpose khong giu dinh dang](assets/images/huong-dan-cach-chuyen-dong-thanh-cot-trong-excel-chuyen-dong-thanh-cot-trong-excel-bang-ham-transpose-khong-giu-dinh-dang.jpg)

 

**Ưu điểm của hàm TRANSPOSE:
- Bảng mới tạo thành giữ lại kết nối với bảng nguồn và bất cứ dữ liệu nguồn nào bị thay đổi thì bảng mới cũng tự động thay đổi theo.

**Nhược điểm của hàm TRANSPOSE:
- Định dạng bảng ban đầu không được lưu trong bảng chuyển đổi.

- Nếu có bất kỳ ô trống nào trong bảng nguồn, các ô tương ứng trong bảng chuyển đổi sẽ chứa giá trị 0 mặc định, không thể sửa được.

- Không thể chỉnh sửa bất kỳ ô nào trong bảng chuyển đổi, vì mỗi ô là một phần tử của mảng, bạn chỉ có thể thay đổi toàn bộ bảng chuyển đổi bằng cách gõ lại công thức của cả mảng hoặc sửa các ô ở bảng ban đầu.
