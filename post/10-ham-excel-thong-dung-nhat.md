---
title: 10 HÀM EXCEL THÔNG DỤNG NHẤT
description: 10 HÀM EXCEL THÔNG DỤNG NHẤT gồm SUM, SUMIF, MATCH, LOOKUP, INDEX, IF
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- CNTT
- Tin học văn phòng
- Excel
---

Sau đây là 10 hàm Excel mà mọi người đọc nhiều nhất.

| HÀM | MÔ TẢ | VÍ DỤ |
| --- | --- | --- |
| `SUM` | - Dùng hàm này để cộng giá trị trong các ô.  - Cú pháp: `SUM(Range)` trong đó `Range` là các ô mà bạn muốn tính giá trị. | `=SUM(A1,A2,B1:B7)` Tính tổng giá trị của các ô A1, A2 và từ B1, B2,… đến B7) |
| `SUMIF` | - Dùng hàm này để tính tổng giá trị trong các ô thỏa mãn điều kiện.  - Cú pháp: `SUMIF(Range, Criteria, Sum_range)`  - Trong đó:  `Range`: Là hàng hoặc cột mà bạn đã chọn.  - `Criteria`: Đặt điều kiện, điều kiện này bạn có thể đặt là số, là biểu thức hoặc là chuỗi đều được.  - `Sum_range`: Là các ô mà bạn thực sự cần tính tổng. | `=SUMIF(B3:B8,"<=8")` Tính tổng của các giá trị trong vùng chọn từ B2 đến B5 và với điều kiện là các giá trị nhỏ hơn hoặc bằng 8. |
| `IF` | - Dùng hàm này để trả về một giá trị nếu một điều kiện là đúng và giá trị khác nếu điều kiện là sai.  - Cú pháp: `=IF(Điều kiện; Giá trị 1, Giá trị 2)`  - Nếu đúng với điều kiện thì kết quả sẽ trả về là `Giá trị 1`, còn nếu sai thì sẽ trả về là `Giá trị 2`. | `=IF(D6=120;"CÓ","KHÔNG")` Trả về giá trị là xâu kí tự “CÓ” nếu ô D6 có giá trị bằng 120, nếu không thì trả về “KHÔNG” |
| `LOOKUP` | - Sử dụng để tra cứu và tham chiếu, khi bạn cần xem một hàng hay một cột và tìm một giá trị từ cùng một vị trí trong hàng hay cột thứ hai.  - Cú pháp: `LOOKUP(lookup_value, lookup_vector, [result_vector])`  - `lookup_value` Bắt buộc. Giá trị mà hàm LOOKUP tìm kiếm trong `lookup_vector`.  - `lookup_vector` Bắt buộc. Phạm vi chỉ chứa một hàng hoặc một cột. Các giá trị trong `lookup_vector` phải được xếp theo thứ tự tăng dần: …, -2, -1, 0, 1, 2, …, A-Z, FALSE, TRUE. Văn bản chữ hoa và chữ thường tương đương nhau.  - `result_vector` Tùy chọn. Phạm vi chỉ chứa một hàng hay một cột. |  |
| `VLOOKUP` | - Hàm `VLOOKUP` là hàm tìm kiếm giá trị theo cột kèm theo điều kiện tham chiếu.  - Cú pháp: `VLOOKUP (điều kiện tìm kiếm,vùng dữ liệu cần tìm kiếm,số cột tìm kiếm,kiểu tìm kiếm 0/1)`  - Trong đó:  0 – là kiểu tìm kiếm chính xác  - 1 – kiểu tìm kiếm tương đối |  |
| `MATCH` | - Sử dụng hàm này để tìm kiếm một mục trong một phạm vi ô, rồi trả về vị trí tương đối của mục đó trong phạm vi. | Ví dụ, nếu phạm vi A1: A3 có chứa các giá trị 5, 7 và 38, thì công thức = MATCH (7, A1: A3, 0) trả về số 2, vì 7 là mục thứ hai trong phạm vi. |
| `CHOOSE` | - Dùng hàm này để chọn một trong tối đa 254 giá trị dựa trên số chỉ mục. | Ví dụ, nếu value1 đến hết value7 là các ngày trong tuần, CHOOSE trả về một trong các ngày khi dùng một số từ 1 đến 7 làm index_num. |
| `DATE` | - Dùng hàm này để trả về số sê-ri lần lượt đại diện cho một ngày cụ thể. Hàm này hữu ích nhất trong những trường hợp mà năm, tháng và ngày được cung cấp bởi các công thức hoặc tham chiếu ô.  - Dùng hàm DATEDIF để tính toán số ngày, tháng hoặc năm giữa hai ngày. | Ví dụ, bạn có thể có một trang tính chứa ngày tháng theo định dạng mà Excel không nhận ra, chẳng hạn như YYYYMMDD. |
| `DAYS` | - Dùng hàm này để trả về số ngày giữa hai ngày. |  |
| `FIND` `FINDB` | - Tìm và FINDB xác định vị trí một chuỗi văn bản trong chuỗi văn bản thứ hai.  - Chúng trả về số của vị trí bắt đầu của chuỗi văn bản đầu tiên từ ký tự đầu tiên của chuỗi văn bản thứ hai. |  |
| `INDEX` | - Dùng hàm này để trả về một giá trị hoặc tham chiếu tới một giá trị từ trong bảng hoặc phạm vi. |  |
