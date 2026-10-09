---
title: Sửa lỗi font tiếng Việt file CSV Google Microsoft Forms
description: Hướng dẫn sửa lỗi font tiếng Việt các file CSV tải từ Google forms, cách
  sửa lỗi phông tiếng Việt khi tải tệp từ Microsoft Forms khi mở bằng MS Excel.
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- CNTT
- Tin học văn phòng
- Font tiếng Việt
- CSV
---

Khi thầy cô sử dụng Microsoft Forms hoặc Google Forms, các dữ liệu phản hồi biểu mẫu (các câu trả lời bài làm của học sinh, các câu trả lời khảo sát…) được lưu dưới dạng file .csv

## 1. Nguyên nhân lỗi font tiếng Việt của file CSV

Các file CSV này thưởng bị lỗi font tiếng Việt khi mở bằng phần mềm MS Excel. Nguyên nhân là do Excel mặc định chọn bảng mã cho tệp csv này là encoding của châu Âu, còn file CSV chúng ta được lưu ở bảng mã UTF-8.

## 2. Cách sửa lỗi font file csv bằng Excel

Chúng ta không mở trực tiếp tệp vừa tài về, mà thực hiện như sau:

**Bước 1.** Tạo 1 file Excel mới

**Bước 2.** Chọn thẻ **Data** rồi chọn tiếp **Import from Text/CSV**(Chỗ tô màu vàng trong hình vẽ sau)

![Cách sửa lỗi font tiếng Việt file CSV](assets/images/sua-loi-font-tieng-viet-file-csv-google-microsoft-forms-Cách-sửa-lỗi-font-tiếng-Việt-file-CSV.jpg)

**Bước 3.** Chọn file csv bị lỗi font mà các thầy cô đã tải về. Ô **File Origin** chọn là **65001: Unicode (UTF-8)** như hình vẽ sau.

![Hướng dẫn cách sửa lỗi font tiếng Việt file CSV khi mở trong Excel](assets/images/sua-loi-font-tieng-viet-file-csv-google-microsoft-forms-Hướng-dẫn-cách-sửa-lỗi-font-tiếng-Việt-file-CSV-khi-mở-trong-Excel.jpg)

**Bước 4.** Ấn chọn Load và chờ Excel nạp file này. Sau đó, thầy cô lưu lại file Excel mới này và sử dụng bình thường.

Hướng dẫn chi tiết cách sửa lỗi font file csv, cách chỉnh lỗi font file CSV mời thầy cô xem trong video sau đây:

Xem thêm:

- [Hướng dẫn sử dụng Microsoft Forms tạo khảo sát, bài kiểm tra](/bai-viet/huong-dan-su-dung-microsoft-forms-tao-bai-khao-sat.html)

- [Tạo bài kiểm tra tự chấm điểm sử dụng Google Form](/bai-viet/tao-bai-kiem-tra-tu-cham-diem-su-dung-google-form.html)
