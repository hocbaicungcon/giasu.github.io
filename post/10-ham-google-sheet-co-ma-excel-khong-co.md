---
title: 10 hàm Google Sheet có mà Excel không có!
description: Microsoft Excel là ứng dụng bảng tính được sử dụng phổ biến nhất nhưng
  có những hàm mà chỉ Google Sheets mới có. Dưới đây là 10 hàm Google Sheet có mà
  Excel
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- CNTT
- Tin học văn phòng
- Google Sheets
---

**[Microsoft Excel](/bai-viet/excel-la-phan-mem-gi.html) là ứng dụng bảng tính được sử dụng phổ biến nhất nhưng có những hàm mà chỉ Google Sheets mới có. Dưới đây là 10 hàm Google Sheet có mà Excel không có**!

Mời bạn tham khảo cách sử dụng hai phần mềm bảng tính nói trên:

- [Hướng dẫn Google Sheets nhanh (Google Sheets cheat sheet)](/bai-viet/huong-dan-google-sheets-google-sheets-cheat-sheet.html)

- [10 HÀM EXCEL THÔNG DỤNG NHẤT](/bai-viet/10-ham-excel-thong-dung-nhat.html)

## Các hàm phép tính cộng ADD, trừ MINUS, nhân MULTIPLY, và chia DIVIDE

Bạn có thể cộng, trừ, nhân và chia các số trong Microsoft Excel sử dụng các toán tử (phép toán) là cộng `+`, trừ `-`, nhân `*` và chia `/` mà không phải hàm. Excel có cung cấp hàm SUM, hoạt động giống như ADD, nhưng Google Sheets có một bộ sưu tập các hàm rõ ràng và thống nhất để làm việc dễ dàng hơn.

Cú pháp cho mỗi hàm trong Google Sheets đều giống nhau với tên hàm và hai đối số: `ADD(value1, value2)`, `MINUS(value1, value2,)`. Bạn có thể chèn các giá trị, sử dụng tham chiếu ô hoặc nhập kết hợp cả hai.

Để trừ các giá trị trong ô A1 và A2, bạn có thể sử dụng công thức sau:

```
=MINUS(A1,A2)
```

Để tính 20 trừ 10, bạn có thể sử dụng công thức sau:

```
=MINUS(20,10)
```

## Đếm các giá trị duy nhất COUNTUNIQUE

Nếu bạn cần đếm số lượng các giá trị riêng biệt trong Google Sheets, thì `COUNTUNIQUE` là hàm dành cho bạn. Đếm số lượng khách hàng đã đặt hàng một lần, sản phẩm không có hàng tồn kho hoặc bất kỳ thứ gì khác mà bạn muốn có giá trị duy nhất bằng cách sử dụng hàm này.

Cú pháp của hàm là `COUNTUNIQUE (value1, value2, …)`trong đó đối số đầu tiên là bắt buộc. Bạn có thể sử dụng tham chiếu ô hoặc giá trị.

Để tìm số lượng khách hàng duy nhất trong phạm vi A1 đến A16. Chúng ta có thể xem số lượng người đặt hàng một lần bằng hàm:

```
=COUNTUNIQUE(A1:A10)
```

![10 hàm Google Sheet có mà Excel không có! 1](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-COUNTUNIQUENames-GoogleSheetsFunctionsNotExcel.jpeg)

Để đếm các giá trị duy nhất trong danh sách các giá trị được chèn, bạn có thể sử dụng công thức này:

```
=COUNTUNIQUE(1,2,3,3,3,4)
```

![14 hàm của Google Sheets mà Excel không có 45](https://anonyviet.com/wp-content/uploads/2022/05/COUNTUNIQUEValues-GoogleSheetsFunctionsNotExcel.jpg)

## Hàm làm việc với ngôn ngữ

Hàm DETECTLANGUAGE giúp bạn có thể xác định ngôn ngữ của văn bản và hàm GOOGLETRANSLATE giúp bạn dịch văn bản sang ngôn ngữ khác.

Để xác định ngôn ngữ trong ô A1, bạn có thể sử dụng công thức sau:

```
=DETECTLANGUAGE(A1)
```

Để xác định ngôn ngữ của văn bản cụ thể, bạn sẽ sử dụng hàm này với đối số là văn bản cần xác định đặt giữa cặp dấu ngoặc kép:

```
=DETECTLANGUAGE("Bon Jour")
```

![10 hàm Google Sheet có mà Excel không có! 2](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-DETECTLANGUAGE-GoogleSheetsFunctionsNotExcel.jpeg)

Cú pháp cho hàm dịch ngôn ngữ là

```
GOOGLETRANSLATE(text, from_language, to_language)
```

Với `from_language` là ngôn ngữ nguồn, `to_language` là ngôn ngữ đích. Bạn có thể sử dụng tham chiếu ô hoặc văn bản cho tham số `text`. Đối với các tham số `from_language` và `to_language` bạn cần sử dụng chữ viết tắt gồm hai chữ cái cho tên ngôn ngữ đó, chẳng hạn vi, en, es,… Bạn cũng có thể sử dụng “auto” cho đối số `from_language` để tự động phát hiện ngôn ngữ nguồn.

Để dịch văn bản trong ô A1 từ tiếng Anh sang tiếng Tây Ban Nha, hãy sử dụng công thức sau:

```
=GOOGLETRANSLATE(A1,"en","es")
```

Để dịch một cụm từ nhất định sang tiếng Tây Ban Nha bằng tính năng tự động phát hiện ngôn ngữ, bạn có thể sử dụng công thức sau:

```
=GOOGLETRANSLATE("Hello","auto","es")
```

![10 hàm Google Sheet có mà Excel không có! 3](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-GOOGLETRANSLATE-GoogleSheetsFunctionsNotExcel.jpeg)

## Hàm so sánh lớn hơn, nhỏ hơn và bằng

Excel cũng làm được điều này nhưng phức tạp hơn. Trong Google Sheets, bạn chỉ cần sử dụng các hàm:

- **GT**: Lớn hơn, cú pháp `GT(value1, value2)`

- **GTE**: Lớn hơn hoặc bằng, cú pháp `GTE(value1, value2)`

- **LT**: Nhỏ hơn, cú pháp `LT(value1, value2)`

- **LTE**: Nhỏ hơn hoặc bằng, cú pháp `LTE(value1, value2)`

- **EQ**: Bằng, cú pháp `EQ(value1, value2)`

Kết quả trả về là `True` (đúng) hoặc `False` (sai). Ví dụ: nếu `value1` lớn hơn `value2`, bạn sẽ nhận được kết quả `True`, ngược lại, bạn sẽ nhận được `False`.

Để xem giá trị trong ô A1 có lớn hơn giá trị trong ô A2 hay không, bạn có thể sử dụng công thức sau:

```
=GT(A1,A2)
```

Để xem giá trị đầu tiên có lớn hơn giá trị thứ hai hay không, bạn có thể sử dụng công thức sau:

```
=GT(4,5)
```

Để xem giá trị trong ô A1 có lớn hơn giá trị cung cấp hay không, bạn có thể sử dụng công thức sau:

```
=GT(A1,5)
```

![14 hàm của Google Sheets mà Excel không có 48](https://anonyviet.com/wp-content/uploads/2022/05/GREATERTHAN-GoogleSheetsFunctionsNotExcel.jpg)

## Hàm chèn và tùy chỉnh hình ảnh

Hàm IMAGE cho phép bạn chèn ảnh từ một url cụ thể và tùy chỉnh kích thước của hình ảnh đó.

Cú pháp của hàm là `IMAGE (url, mode, height, width)` trong đó chỉ yêu cầu tham số đầu tiên. Dưới đây là các tùy chọn bạn có thể sử dụng cho tham số mode:

- 1: Điều chỉnh hình ảnh trong ô và giữ nguyên tỉ lệ khung hình (tỉ lệ giữa chiều ngang và chiều dọc của bức ảnh). Đây là chế độ mặc định.

- 2: Kéo giãn hoặc co hình ảnh để vừa với ô mà không giữ tỉ lệ khung hình.

- 3: Giữ hình ảnh ở kích thước ban đầu.

- 4: Sử dụng kích thước tùy chỉnh bằng cách nhập các đối số chiều cao và chiều rộng bằng pixel.

#### Ví dụ, chèn hình ảnh vừa với ô và giữ nguyên tỉ lệ chiều dài và chiều rộng:

`=IMAGE("https://cdn.ablebits.com/_img-blog/google-sheets-functions-not-xl/Strawberry.png")`

![10 hàm Google Sheet có mà Excel không có! 4](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-fit-to-cell.png)

#### Ví dụ 2, chèn hình ảnh vừa với ô không giữ nguyên tỉ lệ dài và rộng của ảnh

`=IMAGE("https://cdn.ablebits.com/_img-blog/google-sheets-functions-not-xl/Blueberry.png", 2)`

![10 hàm Google Sheet có mà Excel không có! 5](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-stretch-to-fit.png)

#### Ví dụ 3, giữ nguyên kích thước ảnh:

`=IMAGE("https://cdn.ablebits.com/_img-blog/google-sheets-functions-not-xl/Blackberry.png", 3)`

![10 hàm Google Sheet có mà Excel không có! 6](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-original-size.png)

#### Ví dụ 4, chèn ảnh với kích thước chiều rộng và chiều cao cụ thể:

`=IMAGE("https://ableb_images.s3.amazonaws.com/_img-blog/google-sheets-functions-not-xl/Raspberry.png", 4, 100, 100)`

![10 hàm Google Sheet có mà Excel không có! 7](assets/images/10-ham-google-sheet-co-ma-excel-khong-co-custom-size.png)

Như trong hình trên, ảnh chèn vào có kích thước 100x100px.

## Các hàm khác của Google Sheets

- Hàm ARRAYFORMULA

- Các hàm về tài chính GOOGLEFINANCE

- Các hàm QUERY

- Hàm vẽ đồ thị Google Sheets SPARKLINE

Các hàm này, chúng tôi xin giới thiệu chi tiết trong một bài viết khác.
