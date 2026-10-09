---
title: Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất
description: Chúng tôi xin giới thiệu Bài tập Các sự kiện ngẫu nhiên và phép tính
  xác suất của ĐH Bách Khoa Hà Nội để bạn đọc tham khảo.
category: Toán học
type: Bài tập
date: '2024-10-02'
tags:
- Toán học
- Toán 12
- Xác suất
- Biến cố ngẫu nhiên
grade: 12
---

Chúng tôi xin giới thiệu Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất của ĐH Bách Khoa Hà Nội để bạn đọc tham khảo.

## 1. Giải tích tổ hợp. Sự kiện ngẫu nhiên. Định nghĩa xác suất.

**Bài tập 1.1.** Một hộp có 10 quả cầu cùng kích cỡ được đánh số từ 0 đến 9. Từ hộp người ta lấy ngẫu nhiên 1 quả ra và ghi lại số của quả đó, sau đó trả lại vào trong hộp. Làm như vậy 5 lần ta thu được một dãy số có 5 chữ số.

1. Có bao nhiêu kết quả cho dãy số đó?

2. Có bao nhiêu kết quả cho dãy số đó sao cho các chữ số trong đó là khác nhau?

**Hướng dẫn.**

1. Số kết quả cho dãy đó là 10^5.

2. Số kết quả cho dãy có các chữ số khác nhau là 10.9.8.7.6 = 30240.

**Bài tập 1.2.** Có 6 bạn Hoa, Trang, Vân, Anh, Thái, Trung ngồi quanh một bàn tròn để uống cà phê, trong đó bạn Trang và Vân không ngồi cạnh nhau.

1. Có bao nhiêu cách xếp 6 bạn này trên bàn tròn nếu tất cả các ghế là không phân biệt?

2. Có bao nhiêu cách xếp 6 bạn này trên bàn tròn nếu tất cả các ghế có phân biệt?

**Hướng dẫn.**

1. Số cách xếp để Trang và Vân không ngồi cạnh nhau là 5! – 2.4! = 72.

2. Số cách xếp nếu các ghế có phân biệt là 6! – 6.2.4! = 432.

**Bài tập 1.3.** Từ một bộ bài tú lơ khơ 52 cây rút ngẫu nhiên và không quan tâm đến thứ tự 4 cây. Có bao nhiêu khả năng xảy ra trường hợp trong 4 cây đó:

1. 4 cây đều là át;

2. có duy nhất 1 cây át;

3. có ít nhất 1 cây át;

4. có đủ 4 loại rô, cơ, bích, nhép.

**Hướng dẫn.**

1. Chỉ có 1 khả năng do một bộ bài chỉ có 4 con át.

2. Có 4 cách lấy ra 1 con át, có 40C3 cách chọn 3 lá bài còn lại. Như vậy, số cách lấy ra 4 lá để có duy nhất 1 con át là 4×48C3=69184

3. Số cách chọn ra 4 lá từ bộ bài là 52C3. Số cách để chọn ra 4 lá bài trong đó không có cây át nào là 48C3 (không xét thứ tự). Suy ra số khả năng là 52C3 – 48C3 = 76145.

4. Số cách lấy 1 lá bài cơ là 13C1 = 13. Tương tự với các loại rô, bích, nhép. Suy ra số khả năng là 13^4 = 28561.

**Bài** **tập** **1.4.** Có 20 sinh viên. Có bao nhiêu cách chọn ra 4 sinh viên (không xét tới tính thứ tự) tham gia câu lạc bộ Văn và 4 sinh viên tham gia câu lạc bộ Toán trong trường hợp:

1. một sinh viên chỉ tham gia nhiều nhất một câu lạc bộ;

2. một sinh viên có thể tham gia cả hai câu lạc bộ.

**Hướng dẫn.**

1. Chọn 4 học sinh tham gia câu lạc bộ Văn có 20C4 cách. Do 1 sinh viên không thể tham gia cùng lúc 2 câu lạc bộ, nên số cách chọn 4 sinh viên tham gia câu lạc bộ Toán là C16 4 . Số khả năng là 20C4×16C4 = 8817900

2. Chọn 4 học sinh tham gia câu lạc bộ Văn có 20C4 cách. Do 1 sinh viên có thể tham gia cùng lúc 2 câu lạc bộ, nên số cách chọn 4 sinh viên

   tham gia câu lạc bộ Toán là 20C4. Số khả năng là  20C4×20C4= 23474025.

**Bài tập 1.5.** Cho phương trình x + y + z = 100. Phương trình đã cho có bao nhiêu nghiệm:

1. nguyên dương;

2. nguyên không âm.

**Hướng dẫn.**

1. Ta đánh dấu trên trục số từ số 1 đến 100 bởi 100 số 1 cách đều nhau 1 đơn vị. Khi đó, ta có 99 khoảng giữa 2 số 1 liên tiếp. Nếu chia đoạn thẳng [1, 100] này bởi 2 điểm chia nằm trong đoạn thì ta sẽ có 3 phần có độ dài ít nhất là 1.

   Có thể thấy rằng ta có song ánh giữa bài toán chia đoạn này với bài toán tìm nghiệm nguyên dương của phương trình x + y + z = 100.

   Như vậy, số nghiệm của phương trình này bằng số cách chia, và bằng 99C2.

2. Sử dụng phàn trên, a = x + 1, b = y + 1, c = z + 1 thì a, b, c  là số nguyên dương và a+b+c=103. Do đó, số nghiệm của nguyên không âm là 102C2.

**Bài tập 1.6.** Thực hiện một phép thử tung 2 con xúc xắc, rồi ghi lại số chấm xuất hiện trên mỗi con. Gọi x, y là số chấm xuất hiện tương ứng trên con xúc xắc thứ nhất và thứ hai. Ký hiệu không gian mẫu Ω = {(x, y) : 1 ≤ x, y ≤ 6}. Hãy liệt kê các phần tử của các sự kiện sau:

1. A : “tổng số chấm xuất hiện lớn hơn 8”;

2. B : “có ít nhất một con xúc xắc ra mặt 2 chấm”;

3. C : “con xúc xắc thứ nhất có số chấm lớn hơn 4”;

4. A + B, A + C, B + C, A + B + C, sau đó thể hiện thông qua sơ đồ Venn;

5. AB, AC, BC, ABC, sau đó thể hiện thông qua sơ đồ Venn.

**Hướng dẫn.**

1. A = {(3, 6), (4, 5), (5, 4), (6, 3), (4, 6), (5, 5), (6, 4), (5, 6), (6, 5), (6, 6)}

2. B = {(2, 2), (2, 1), (2, 3), (2, 4), (2, 5), (2, 6), (1, 2), (3, 2), (4, 2), (5, 2), (6, 2)}

3. C = {(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6)}

4. A + B, A + C, B + C, A + B + C

5. AB = ⌀

   AC = {(5, 4), (5, 5), (5, 6), (6, 3), (6, 4), (6, 5), (6, 6)}

   BC = {(5, 2), (6, 2)}

   ABC = ⌀

**Bài tập 1.7.** Số lượng nhân viên của công ty A được phân loại theo lứa tuổi và giới tính như sau:

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-bai-tap-xac-suat-thong-ke.jpg)

Tìm xác suất để lấy ngẫu nhiên một người của công ty thì được:

1. một nhân viên trong độ tuổi 30 – 40;

2. một nam nhân viên trên 40 tuổi;

3. một nữ nhân viên từ 40 tuổi trở xuống.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 1](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-16.png)

**Bài tập 1.8.** Một kiện hàng có 24 sản phẩm, trong số đó có 14 sản phẩm loại I, 8 sản phẩm loại II và 2 sản phẩm loại III. Người ta chọn ngẫu nhiên 4 sản phẩm để kiểm tra. Tính xác suất trong 4 sản phẩm đó:

1. có 3 sản phẩm loại I và 1 sản phẩm loại II;

2. có ít nhất 3 sản phẩm loại I;

3. có ít nhất 1 sản phẩm loại III.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 2](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-18.png)

**Bài tập 1.9.** Có 30 tấm thẻ đánh số từ 1 tới 30. Chọn ngẫu nhiên ra 10 tấm thẻ. Tính xác suất để:

1. tất cả tấm thẻ đều mang số chẵn;

2. có đúng 5 số chia hết cho 3;

3. có 5 tấm thẻ mang số lẻ, 5 tấm thẻ mang số chẵn trong đó chỉ có một số chia hết cho 10.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 3](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-19.png)

**Bài** **tập** **1.10.** Việt Nam có 64 tỉnh thành, mỗi tỉnh thành có 2 đại biểu quốc hội. Người ta chọn ngẫu nhiên 64 đại biểu quốc hội để thành lập một ủy ban. Tính xác suất để:

1. trong ủy ban có ít nhất một người của thành phố Hà Nội;

2. mỗi tỉnh có đúng một đại biểu trong ủy ban.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 4](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-20.png)

**Bài tập 1.11.** Một đoàn tàu có 4 toa được đánh số I, II, III, IV đỗ ở sân ga. Có 6 hành khách từ sân ga lên tàu. Mỗi người độc lập với nhau chọn ngẫu nhiên một toa. Tính xác suất để:

1. toa I có 3 người, toa II có 2 người và toa III có 1 người;

2. một toa có 3 người, một toa 2 người, một toa có 1 người;

3. mỗi toa có ít nhất 1 người.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 5](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-21.png)

**Bài tập 1.12.** Gieo hai con xúc xắc cân đối và đồng chất. Một con xúc xắc có số chấm các mặt là 1, 2, 3, 4, 5, 6, con xúc xắc còn lại có số chấm các mặt là 2, 3, 4, 5, 6, 6. Tính xác suất:

1. có đúng 1 con xúc xắc ra mặt 6 chấm;

2. có ít nhất 1 con xúc xắc ra mặt 6 chấm;

3. tổng số chấm xuất hiện bằng 7.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 6](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-22.png)

**Bài tập 1.13.** Trong một thành phố có 5 khách sạn. Có 3 khách du lịch đến thành phố đó, mỗi người chọn ngẫu nhiên một khách sạn. Tìm xác suất để:

1. mỗi người ở một khách sạn khác nhau;

2. có đúng 2 người ở cùng một khách sạn.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 7](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-23.png)

**Bài tập 1.14.** Một lớp có 3 tổ sinh viên: tổ I có 12 người, tổ II có 10 người và tổ III có 15 người. Chọn hú họa ra một nhóm sinh viên gồm 4 người.

1. Tính xác suất để trong nhóm có đúng một sinh viên tổ I.

2. Biết trong nhóm có đúng một sinh viên tổ I, tính xác suất để trong nhóm đó có đúng một sinh viên tổ III.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 8](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-24.png)

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 9](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-25.png)

**Bài tập 1.15.** Ba nữ nhân viên phục vụ A, B và C thay nhau rửa đĩa chén và giả sử ba người này đều “khéo léo” như nhau. Trong một tháng có 4 chén bị vỡ. Tìm xác suất để:

1. chị A đánh vỡ 3 chén và chị B đánh vỡ 1 chén;

2. một trong ba người đánh vỡ 3 chén;

3. một trong ba người đánh vỡ cả 4 chén.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 10](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-26.png)

**Bài tập 1.16.** Đội A có 3 người và đội B có 3 người tham gia vào một cuộc chạy thi, 6 người có khả năng như nhau và xuất phát cùng nhau. Tính xác suất để 3 người đội A về vị trí nhất, nhì, ba.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 11](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-27.png)

**Bài tập 1.17.** Phân phối ngẫu nhiên n viên bi vào n chiếc hộp (biết rằng mỗi hộp có thể chứa cả n viên bi). Tính xác suất để:

1. Hộp nào cũng có bi;

2. Có đúng một hộp không có bi.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 12](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-28.png)

**Bài tập 1.18.** Hai người hẹn gặp nhau ở công viên trong khoảng thời gian từ 5h00 đến 6h00 để cùng đi tập thể dục. Hai người quy ước ai đến không thấy người kia sẽ chỉ chờ trong vòng 10 phút. Giả sử rằng thời điểm hai người đến công viên là ngẫu nhiên trong khoảng từ 5h00 đến 6h00. Tính xác suất để hai người gặp nhau.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 13](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-29.png)

**Bài tập 1.19.** Cho đoạn thẳng AB có độ dài 10cm. Lấy một điểm C bất kỳ trên đoạn thẳng đó. Tính xác suất chênh lệch độ dài giữa hai đoạn thẳng AC và CB không vượt quá 4cm.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 14](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-30.png)

**Bài tập 1.20.** Cho đoạn thẳng AB độ dài 10cm. Lấy hai điểm C, D bất kỳ trên đoạn AB (C nằm giữa A và D). Tính xác suất độ dài AC, CD, DB tạo thành 3 cạnh một tam giác.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 15](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-31.png)

## 2. Công thức cộng và nhân xác suất, công thức Becnulli

**Bài tập 1.21.** Cho các sự kiện $A, B$ với $P(A) = P(B) = 1/2; P(A\overline{B}) = 1/8$. Tìm:

- $P(\overline{A} + \overline{B})$;

- $P(\overline{A}B), P(A + \overline{B})$.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 16](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-32.png)

**Bài tập 1.22.** Cho các sự kiện $A, B, C$ thỏa mãn:

- $P(A) = 0{,}3$,

- $P(B|A) = 0{,}75$,

- $P(B|\overline{A}) = 0{,}2$,

- $P(C|AB) = 0{,}2$,

- $P(C|\overline{AB}) = 0{,}15$,

- $P(C|A\overline{B}) = 0{,}8$,

- $P(CAB) = 0, 9$.

Tính $P(ABC), P(\overline{B}C), P(C), P(A|\overline{B}C)$.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 17](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-33.png)

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 18](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-34.png)

**Bài tập 1.23.** Trong cùng một phép thử, A và B là các sự kiện thỏa mãn P(A) = 1/4, P(B) = 1/2. Tính xác suất để A không xảy ra nhưng B xảy ra trong các trường hợp sau:

1. A và B xung khắc;

2. A suy ra B;

3. P(AB) = 1/8.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 19](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-35.png)

**Bài tập 1.24.** Cho hai sự kiện A và B trong đó P(A) = 0, 4 và P(B) = 0, 7. Xác định giá trị lớn nhất và nhỏ nhất của P(AB) và P(A + B) và điều kiện đạt được các giá trị đó.

![Bài tập Các sự kiện ngẫu nhiên và phép tính xác suất 20](assets/images/bai-tap-cac-su-kien-ngau-nhien-va-phep-tinh-xac-suat-image-36.png)

**Bài tập 1.25.** Ba người A, B và C lần lượt tung một đồng xu. Giả sử rằng A tung đồng xu đầu tiên, B tung thứ hai và thứ ba C tung. Quá trình lặp đi lặp lại cho đến khi ai thắng bằng việc trở thành người đầu tiên thu được mặt ngửa. Xác định khả năng mà mỗi người sẽ giành chiến thắng.

**Bài tập 1.26.** Trong một thùng kín có 6 quả cầu đỏ, 5 quả cầu trắng, 4 quả cầu vàng. Lấy ngẫu nhiên lần lượt từng quả cầu cho đến khi lấy được cầu đỏ thì dừng lại. Tính xác suất để:

1. Lấy được 2 cầu trắng, 1 cầu vàng.

2. Không có quả cầu trắng nào được lấy

**Bài tập 1.27.** Ba xạ thủ A, B, C độc lập với nhau cùng bắn súng vào bia. Xác suất bắn trúng bia của 3 người A, B và C tương ứng là 0,7, 0,6 và 0,9. Tính xác suất để:

1. có duy nhất một xạ thủ bắn trúng bia;

2. có đúng hai xạ thủ bắn trúng bia;

3. có ít nhất một xạ thủ bắn trúng bia;

4. xạ thủ A bắn trúng bia biết rằng có hai xạ thủ bắn trúng bia.

**Bài tập 1.28.** Trên một bảng quảng cáo, người ta mắc hai hệ thống bóng đèn độc lập. Hệ thống I gồm 4 bóng mắc nối tiếp, hệ thống II gồm 3 bóng mắc song song. Khả năng bị hỏng của mỗi bóng trong 18 giờ thắp sáng liên tục là 0,1. Việc hỏng của mỗi bóng của mỗi hệ thống được xem như độc lập. Tính xác suất để trong 18 giờ thắp sáng liên tục:

1. cả hai hệ thống bị hỏng;

2. chỉ có một hệ thống bị hỏng.

**Bài tập 1.29.** Một máy bay ném bom một mục tiêu phải bay qua ba tuyến phòng thủ. Xác suất để mỗi tuyến phòng thủ tiêu diệt được máy bay là 0,8.

1. Tìm xác suất máy bay rơi trước khi đến mục tiêu.

2. Giả sử máy bay bị rơi, tìm xác suất để tuyến I bắn rơi.

3. Muốn bảo vệ mục tiêu với xác suất 99,99% cần tổ chức bao nhiêu tuyến phòng thủ.

**Bài tập 1.30.** Có 6 khẩu súng cũ và 4 khẩu súng mới, trong đó xác suất trúng khi bắn bằng súng cũ là 0,8, còn súng mới là 0,95. Bắn hú họa bằng một khẩu súng vào một mục tiêu thì thấy trúng. Điều gì có khả năng xảy ra lớn hơn: bắn bằng khẩu súng mới hay bắn bằng khẩu súng cũ?

**Bài tập 1.31.** Theo thống kê xác suất để hai ngày liên tiếp có mưa ở một thành phố vào mùa hè là 0,5; còn không mưa là 0,3. Biết các sự kiện có một ngày mưa, một ngày không mưa là đồng khả năng. Tính xác suất để ngày thứ hai có mưa, biết ngày đầu không mưa.

**Bài tập 1.32.** Một hộp chứa a quả bóng màu đỏ và b quả bóng màu xanh. Một quả bóng được chọn ngẫu nhiên và quan sát màu sắc của nó. Sau đó bóng được trả lại cho vào hộp và k bóng cùng màu cũng được thêm vào hộp. Một quả bóng thứ hai sau đó được chọn một cách ngẫu nhiên, màu sắc của nó được quan sát, và nó được trả lại cho vào hộp với k bóng bổ sung cùng một màu. Quá trình này được lặp đi lặp lại 4 lần. Tính xác suất để ba quả bóng đầu tiên sẽ có màu đỏ và quả bóng thứ tư có màu xanh.

**Bài tập 1.33.** Một cửa hàng sách ước lượng rằng: trong tổng số các khách hàng đến cửa hàng có 30% khách cần hỏi nhân viên bán hàng, 20% khách mua sách và 15% khách thực hiện cả hai điều trên. Gặp ngẫu nhiên một khách trong nhà sách. Tính xác suất để người này:

1. không thực hiện cả hai điều trên;

2. không mua sách, biết rằng người này đã hỏi nhân viên bán hàng.

**Bài** **tập** **1.34.** Một cuộc khảo sát 1000 người về hoạt động thể dục thấy có 80% số người thích đi bộ và 60% thích đạp xe vào buổi sáng và tất cả mọi người đều tham gia ít nhất một trong hai hoạt động trên. Chọn ngẫu nhiên một người hoạt động thể dục. Nếu gặp được người thích đi xe đạp thì xác suất mà người đó không thích đi bộ là bao nhiêu?

**Bài tập 1.35.** Để thành lập đội tuyển quốc gia về một môn học, người ta tổ chức một cuộc thi tuyển gồm 3 vòng. Vòng thứ nhất lấy 80% thí sinh; vòng thứ hai lấy 70% thí sinh đã qua vòng thứ nhất và vòng thứ ba lấy 45% thí sinh đã qua vòng thứ hai. Để vào được đội tuyển, thí sinh phải vượt qua được cả 3 vòng thi. Tính xác suất để một thí sinh bất kỳ:

1. được vào đội tuyển;

2. bị loại ở vòng thứ ba;

3. bị loại ở vòng thứ hai, biết rằng thí sinh này bị loại.

**Bài tập 1.36.** Theo thống kê ở các gia đình có hai con thì xác suất để con thứ nhất và con thứ hai đều là trai là 0,27 và hai con đều là gái là 0,23, còn xác suất con thứ nhất và con thứ hai có một trai và một gái là đồng khả năng. Biết sự kiện khi xét một gia đình được chọn ngẫu nhiên có con thứ nhất là gái, tìm xác suất để con thứ hai là trai.

**Bài tập 1.37.** Một tổ có 15 sinh viên trong đó có 5 sinh viên học giỏi môn “Xác suất thống kê”. Cần chia làm 5 nhóm, mỗi nhóm 3 sinh viên. Tính xác suất để nhóm nào cũng có một sinh viên học giỏi môn “Xác suất thống kê”.

**Bài tập 1.38.** Hai vận động viên bóng bàn A và B đấu một trận gồm tối đa 5 ván (không có kết quả hòa sau mỗi ván và trận đấu sẽ dừng nếu một người nào đó thắng trước 3 ván). Xác suất để A thắng được ở một ván là 0,7.

1. Tính các xác suất để A thắng sau x ván (x = 3, 4, 5).

2. Tính xác suất để trận đấu kết thúc sau 5 ván.

**Bài tập 1.39.** Một bài thi trắc nghiệm (multiple-choice test) gồm 12 câu hỏi, mỗi câu hỏi cho 5 phương án trả lời, trong đó chỉ có 1 phương án đúng. Giả sử một câu trả lời đúng được 4 điểm và mỗi câu trả lời sai bị trừ đi 1 điểm. Một học sinh kém làm bài bằng cách chọn hú họa câu trả lời. Tìm xác suất để:

1. Học sinh đó được 13 điểm.

2. Học sinh đó bị điểm âm.

**Bài tập 1.40.** Một nhân viên bán hàng mỗi ngày đi chào hàng ở 10 nơi với xác suất bán được hàng ở mỗi nơi là 0,2. Tìm xác suất để:

1. người đó bán được hàng ở 2 nơi;

2. người đó bán được hàng ở ít nhất 1 nơi.

**Bài tập 1.41.** Một người có hai bao diêm trong túi, mỗi bao có n que. Mỗi khi cần diêm anh ta rút hú họa ra một bao. Tính xác suất sao cho người đó lần đầu rút phải bao rỗng thì bao kia còn đúng k que k = 1, 2, . . . , n.

**Bài tập 1.42.** Xác suất trúng đích của một lần bắn là 0,4. Cần phải bắn bao nhiêu phát đạn để xác suất có ít nhất một viên bắn trúng sẽ lớn hơn 0,95?

**Bài tập 1.43.** Hai cầu thủ bóng rổ, mỗi người ném bóng 2 lần vào rổ. Xác suất ném trúng rổ của mỗi cầu thủ theo thứ tự lần lượt là 0,6 và 0,7. Tìm xác suất để

1. số lần ném trúng rổ của hai người bằng nhau;

2. số lần ném trúng rổ của cầu thủ thứ nhất nhiều hơn số lần ném trúng rổ của cầu thủ thứ hai.

**Bài tập 1.44.** Xác suất sản xuất ra phế phẩm của một máy là 0,005. Tìm xác suất để trong 800 sản phẩm của máy đó có đúng 3 phế phẩm.

**Bài** **tập** **1.45.** Một công nhân đứng máy 1000 ống sợi. Xác suất mỗi ống bị đứt trong vòng một giờ là 0,005. Tính xác suất để trong vòng một giờ:

1. 40 ống sợi bị đứt;

2. không quá 40 ống sợi bị đứt.

**Bài tập 1.46.** Xác suất ném trúng rổ của một cầu thủ là 0,8. Tìm xác suất để trong 100 lần cầu thủ đó:

1. ném trúng 75 lần;

2. ném trúng không ít hơn 75 lần.

## 3. Công thức xác suất đầy đủ, công thức Bayes

Bạn đọc tham khảo các ví dụ trong bài [Xác suất có điều kiện – Công thức Bayes](/bai-viet/xac-suat-co-dieu-kien-cong-thuc-bayes.html)

**Bài tập 1.47.** Một phân xưởng có 3 máy tự động: máy I sản xuất 25%, máy II sản xuất 30%, máy III sản xuất 45% số sản phẩm. Tỷ lệ phế phẩm tương ứng của các máy lần lượt là 0,1%, 0,2% và 0,3%. Chọn ngẫu nhiên ra một sản phẩm của phân xưởng.

1. Tìm xác suất nó là phế phẩm.

2. Biết nó là phế phẩm. Tính xác suất để sản phẩm đó do máy I sản xuất.

**Bài tập 1.48.** Có 3 hộp đựng bi: hộp thứ nhất có 3 bi đỏ, 2 bi trắng; hộp thứ hai có 2 bi đỏ, 2 bi trắng; hộp thứ ba không có viên nào. Lấy ngẫu nhiên 1 viên bi từ hộp thứ nhất và 1 viên bi từ hộp thứ hai bỏ vào hộp thứ ba. Sau đó từ hộp thứ ba lấy ngẫu nhiên ra 1 viên bi.

1. Tính xác suất để viên bi đó màu đỏ.

2. Biết rằng viên bi lấy ra từ hộp thứ ba màu đỏ, tính xác suất để lúc đầu ta lấy được viên bi đỏ từ hộp thứ nhất bỏ vào hộp thứ ba.

**Bài tập 1.49.** Hộp I có 4 viên bi đỏ, 2 viên bi xanh; hộp II có 3 viên bi đỏ, 3 viên bi xanh. Bỏ ngẫu nhiên một viên bi từ hộp I sang hộp II, sau đó lại bỏ ngẫu nhiên một viên bi từ hộp II sang hộp I. Cuối cùng rút ngẫu nhiên từ hộp I ra một viên bi.

1. Tính xác suất để viên bi rút ra sau cùng màu đỏ.

2. Nếu viên rút ra sau cùng màu đỏ, tìm xác suất lúc ban đầu rút được viên bi đỏ ở hộp I cho vào hộp II.

**Bài tập 1.50.** Trong một kho rượu, số lượng rượu loại A và loại B bằng nhau. Người ta chọn ngẫu nhiên một chai và đưa cho 5 người nếm thử. Biết xác suất đoán đúng của mỗi người là 0,8. Có 3 người kết luận rượu loại A, 2 người kết luận rượu loại B. Hỏi khi đó xác suất chai rượu đó thuộc loại A là bao nhiêu?

**Bài tập 1.51.** Có 3 hộp đựng bóng. Hộp I chứa 2 bóng xanh và 5 bóng đỏ. Hộp II chứa 5 bóng xanh và 3 bóng đỏ. Hộp III đựng 4 bóng đỏ và 4 bóng xanh. Gieo một con xúc xắc cân đối đồng chất một lần: nếu thu được mặt một chấm thì lấy ngẫu nhiên ra một bóng từ hộp I, nếu số chấm thu được là 2, 3, 4 thì lấy ngẫu nhiên ra một bóng từ hộp II và nếu số chấm là 5, 6 thì lấy ngẫu nhiên một bóng từ hộp III. Tính xác suất quả bóng đỏ được lấy ra.

**Bài tập 1.52.** Có hai lô sản phẩm: lô I có 7 chính phẩm 3 phế phẩm; lô II có 6 chính phẩm 2 phế phẩm. Lấy ngẫu nhiên 2 sản phẩm từ lô I sang lô II, sau đó từ lô II lấy ngẫu nhiên ra 2 sản phẩm được 2 chính phẩm. Tính xác suất để 2 chính phẩm lấy ra sau cùng là của lô I.

**Bài tập 1.53.** Có hai lô sản phẩm: lô I có 7 chính phẩm, 3 phế phẩm; lô II có 8 chính phẩm, 2 phế phẩm. Từ lô I lấy ngẫu nhiên ra 2 sản phẩm, từ lô II lấy ngẫu nhiên ra 3 sản phẩm. Sau đó từ số sản phẩm này lại lấy ngẫu nhiên 2 sản phẩm. Tính xác suất để trong 2 sản phẩm lấy ra sau cùng có ít nhất 1 chính phẩm.

**Bài tập 1.54.** Có ba kiện hàng (mỗi kiện hàng có 20 sản phẩm) với số sản phẩm tốt tương ứng của mỗi kiện là 18, 16, 12. Lấy ngẫu nhiên một kiện hàng, rồi từ đó lấy ngẫu nhiên một sản phẩm thì được sản phẩm tốt. Trả sản phẩm này lại kiện hàng vừa lấy, sau đó lại lấy ngẫu nhiên một sản phẩm thì được sản phẩm tốt. Tính xác suất để các sản phẩm tốt đó được lấy từ kiện hàng thứ nhất.

**Bài tập 1.55.** Có 10 sinh viên đi thi trong đó có 3 sinh viên thuộc loại giỏi, 4 sinh viên thuộc loại khá và 3 sinh viên thuộc loại trung bình. Trong phiếu thi thi có 20 câu hỏi. Sinh viên loại giỏi trả lời được cả 20 câu, loại khá trả lời được 16 câu và loại trung bình trả lời được 10 câu. Gọi ngẫu nhiên 1 sinh viên. Sinh viên đó trả lời được 3 câu hỏi trong phiếu thi. Tính xác suất đó là sinh viên thuộc loại trung bình.

**Bài tập 1.56.** Tỷ lệ người nghiện thuốc là ở một vùng là 30%. Biết rằng tỷ lệ người bị viêm họng trong số những người nghiện thuốc là 60%, còn tỷ lệ người bị viêm họng trong số những người không nghiện là 40%.

1. Lấy ngẫu nhiên một người thấy người ấy bị viêm họng. Tính xác suất người đó nghiện thuốc lá.

2. Nếu người đó không bị viêm họng, tính xác suất người đó nghiện thuốc lá.

**Bài tập 1.57.** Một công nhân đi làm ở thành phố khi trở về nhà có 2 cách: hoặc đi theo đường ngầm hoặc đi qua cầu. Biết rằng ông ta đi lối đường ngầm trong 1/3 các trường hợp, còn lại đi lối cầu. Nếu đi lối đường ngầm 75% trường hợp ông ta về đến nhà trước 6 giờ tối; còn nếu đi lối cầu chỉ có 70% trường hợp (nhưng đi lối cầu thích hơn). Tìm xác suất để công nhân đó đã đi lối cầu biết rằng ông ta về đến nhà sau 6 giờ tối.

**Bài tập 1.58.** Tại một phòng khám chuyên khoa tỷ lệ người đến khám có bệnh là 0,8. Người ta áp dụng phương pháp chẩn đoán mới thì thấy nếu khẳng định có bệnh thì đúng 9 trên 10 trường hợp; còn nếu khẳng định không bệnh thì đúng 5 trên 10 trường hợp. Tính xác suất để

1. chẩn đoán có bệnh;

2. chẩn đoán đúng;

**Bài** **tập** **1.59.** Tại một bệnh viện tỷ lệ mắc bệnh A là 10%. Để chẩn đoán xác định người ta làm phản ứng miễn dịch, nếu không bị bệnh thì phản ứng dương tính chỉ có 10%, nếu bị bệnh thì phản ứng dương tính là 95%.

1. Tìm xác suất dương tính của phản ứng.

2. Tìm xác suất chẩn đoán đúng của phản ứng.

**Bài tập 1.60.** Một hãng hàng không cho biết rằng 5% số khách đặt trước vé cho các chuyến đã định sẽ hoãn không đi chuyến bay đó. Do đó hãng đã đưa ra một chính sách là sẽ bán 52 ghế cho một chuyến bay mà trong đó mỗi chuyến chỉ trở được 50 khách hàng. Tìm xác suất để tất cả các khách đặt chỗ trước và không hoãn chuyến bay đều có ghế. Biết rằng xác suất bán được 51 vé hoặc 52 vé là như nhau và bằng 10%.

**Bài tập 1.61.** Một trạm chỉ phát hai loại tín hiệu A và B với xác suất tương ứng là 0,84 và 0,16. Do có nhiễu trên đường truyền nên 1/6 tín hiệu A bị méo và được thu như là tín hiệu B, còn 1/8 tín hiệu B bị méo thành tín hiệu A.

1. Tìm xác suất thu được tín hiệu A;

2. Giả sử thu được tín hiệu A, tìm xác suất để thu được đúng tín hiệu lúc phát.

**Bài tập 1.62.** Lớp học phần “Xác suất thống kê” có 50 sinh viên, trong đó có 18 sinh viên thuộc nhóm I và 32 sinh viên thuộc nhóm II. Xác suất để một sinh viên trong nhóm I, II đạt điểm giỏi tương ứng là 0,8; 0,7.

1. Gọi ngẫu nhiên một sinh viên trong lớp, tính xác suất để sinh viên đó đạt điểm giỏi.

2. Gọi ngẫu nhiên hai sinh viên trong lớp thì xác suất để cả hai sinh viên đó đạt điểm giỏi là bao nhiêu?

**Bài tập 1.63.** Một người có ba chỗ ưa thích như nhau để câu cá. Xác suất để câu được cá ở mỗi chỗ tương ứng là 0,6; 0,7 và 0,8. Biết rằng đến một chỗ người đó thả câu 3 lần và chỉ câu được một con cá. Tính xác suất để cá câu được ở chỗ thứ nhất.

**Bài tập 1.64.** Trong học kỳ I năm học 2018-2019, sinh viên phải thi 4 học phần. Xác suất để sinh viên thi đạt một học phần trong mỗi lần thi đều là 0,8. Nếu thi không đạt học phần nào phải thi lại học phần đó. Tính xác suất để một sinh viên thi đạt cả 4 học phần trong đó không có học phần nào thi quá 2 lần.

**Bài tập 1.65.** Ba người thợ cùng may một loại áo với xác suất may được sản phẩm chất lượng cao tương ứng là 0,9; 0,9 và 0,8. Biết một người khi may 8 áo thì có 6 sản phẩm chất lượng cao. Tìm xác suất để người đó may 8 áo nữa thì có 6 áo chất lượng cao.
