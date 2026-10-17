---
title: '108 bài toán tổ hợp và phương pháp giải: Đánh thức đam mê tư duy'
description: 'Tuyển tập 108 bài toán tổ hợp và phương pháp giải chi tiết: Bài toán đếm, nguyên lý Dirichlet, quy tắc cộng nhân, bài toán logic thi chuyên toán và HSG.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Tổ hợp
  - Toán 9
  - Học sinh giỏi
  - Dirichlet
  - Phương pháp giải
  - TS. Nguyễn Văn Lợi
  - LOISCENTER
grade: 9
---

# 108 bài toán tổ hợp và phương pháp giải: Đánh thức đam mê tư duy

> [!NOTE] Thông tin tác giả & Bản quyền tài liệu
> - **Tác giả / Chủ biên:** TS. Nguyễn Văn Lợi (chủ biên), Ngô Thị Nhã
> - **Đơn vị phát hành:** LOISCENTER / Sigma-Maths
> - **Mục đích:** Bồi dưỡng học sinh khá giỏi, rèn luyện tư duy logic, kỹ năng giải toán sáng tạo và nâng cao năng lực toán học cho học sinh phổ thông.

---

Những lời giải đánh thức đam mê!
Thay cho lời nói đầu chúng tôi xin phép các bạn đọc được giới thiệu BÀI
TOÁN HAY - LỜI GIAI DẸP... của một số bài tập lựa chọn từ quyển: i108
bài tập toán tổ hợp cho tất cả mọi người". (viết tắt là Q1).
Bài 5(Q1). Tôi nghĩ một số nguyên x với 0 < x < 17. Phải cần ít nhất bao
nhiêu câu hỏi mà chỉ được phép trả lời đúng - sai để người ta xác định được tôi
nghĩ đến số nào?
Lời giải: Cần 4 câu hỏi.
Ta thay cho hỏi các số từ 1 đến 16 bằng từ 0 đến 15 (thay vì hỏi cho x, ta hỏi
cho số x - 1. Vì lý do kỹ thuật trong trình bày).
Ta trình bày lời giải cho các bạn yêu tin học. Chuyển các số từ 0 đến 15 về
dạng hệ đếm cơ số 2. Nhưng vậy ta có các số 0,1, 10, 11, 100,...., 1111. Như
vậy chúng ta cần 4 ô vừa đủ để biểu thị các số từ 0 đến 15.Các dãy kí tự cần
xét đến là 0000, 0001, 0010, 0011, ...., 1110, 1111. Chỉ cần đặt 4 câu hỏi:
- Kí tự ở vị trí thứ i là 1? (Hỏi như vậy 4 lần với i = 1,2,3,4).
Câu trả lời chỉ có thể là 0 hoặc 1. Ghép 4 chữ số ta nhận dược số cần tìm.
Ta chuyển sang cách hỏi dạng thông thường:
Chia các số thành hai nhóm A và B rồi đặt câu hỏi: Số cần tìm có trong nhóm
A? Sau khi ta nhận dược thông tin, ta lại chia phần có chứa số cần tìm thành
hai nhóm và tiếp tục câu hỏi trước.
Cách làm này cũng chỉ ra số câu hỏi cần thiết là 4 và không thế ít hơn 4, vì
mỗi vị trí cần một câu hỏi để xác định.
Lời giải này có thể tổng quát hóa: nếu có n vật cần tìm và 2k-1 < n ≤ 2k thì
cần k câu hỏi.
Dây cũng là một thuật toán cơ bản trong khoa học máy tính.
Bài 7(Q1). Tôi nghĩ hai số giữa 1 và 10. Hỏi phải cần bao nhiêu câu hỏi (dạng
đúng sai) đề bạn có thể biết hai số tôi nghĩ là gì?
Lời giải: Cần 6 câu hỏi.
Sử dụng kết quả của bài trên, ta chỉ cần xét có bao nhiêu cặp số C1,2 = 45. Vì
25 < 45 < 26 nên cần 6 câu hỏi.
Ghi chú: Với cách đưa tố hợp vào trong xây dựng lời giải những công việc tưởng
chừng như vô cùng rắc rối bỗng trở thành mạch lạc. Việc chọn 2 hay nhiều hơn
các đồ vật không còn gây khó khăn, vì dã có thuật toán đơn giản.
Bài 8(Q1). Trên bàn cờ 8 x 8 có bao nhiêu hình chữ nhật?
Lời giải: C, C = 36 · 36 = 1296.
Có nhiều cách đếm thú vị. Ta có thể tính bằng tích số đoạn thắng nằm ngang
C, và số đoạn thẳng nằm dọc C,. Hoặc cũng có thể minh họa lời giải bằng
tích số cách chọn hai đường thẳng nằm ngang và số các cách chọn hai đường
thắng nằm dọc.
Ghi chú: Bài toán sẽ phức tạp và thú vị hơn khi ta thay hình chữ nhật bằng
hình vuông: Trên bàn cờ 8 x 8 có bao nhiêu hình vuông?
Công việc bây giờ là ghép các đoạn thắng cùng độ dài nằm ngang với các đoạn
thẳng cùng độ dài nhưng nằm dọc. Ta sẽ có công thức - có thể mở rộng cho
bàn cờ kích thước n x n:
S = 12 + 22 + ..· + 82.
Bài 9(Q1). Trên giá có 10 quyển sách. Có bao nhiêu cách để lấy xuống 3 quyển
sách không có hai quyển nào đã đứng cạnh nhau?
Lời giải. Có C3 cách chọn. Nếu dùng cách liệt kê, bài này tương đối khó.
Cách tiếp cận vấn đề mới sau đây làm cho lời giải trở thành đẹp lung linh.
Ta lội ngược quy trình. Thay cho việc lấy xuống 3 quyển sách, ta làm công việc
đặt sách lên giá. Bài toán sẽ là: Trên giá có 7 quyến sách. Có bao nhiều cách
để đặt thêm 3 quyển sách sao cho các quyển mới đặt không có hai quyển nào
đứng cạnh nhau?
Từ đây lời giải cho bài toán trở nên rất đơn giản. Giữa các quyền sách trên giá
có tổng cộng 8 vị trí trống (trước và sau hàng cũng có thể đặt). Chỉ việc chọn
ra 3 vị trí để đặt sách mới vào. Kết quả hiển nhiên là Cg = 56.
Cách suy nghĩ đi ngược chiều thời gian như bài trên gợi cho chúng ta một phong
cách: PHƯƠNG PHÁP TRUY HỒI.
Bài toán sau thể hiện rất rõ tác dụng khó thiếu được của phương pháp này.
Bài 12(Q1). Có bao nhiêu cách đi lên một cầu thang 8 bậc sao cho mỗi lần
chỉ được bước 1 hoặc 2 bậc?
Lời giải.
Ta bắt đầu từ bậc thứ 8 (thứ n). Để bước dược buớc cuối cùng đến bậc 8 (bậc
n) có hai cách: hoặc bước một bước từ bậc 7 (bậc thứ n - 1) hoặc bước 2 bậc
liền từ bậc 6 (từ bậc n - 2). Vậy số cách đến bậc n (với F (n) bằng tổng số cách
từ bậc (n - 1) và từ (n - 2)). Nếu ở bậc 0 là một cách, thì từ 0 đến bậc 1 có 1
cách. Từ 0 lên bậc 2 có 1+1= 2 cách và ta nhận được công thức truy hỗi:
F (n) = F(n-1) + F(n -2)
Dây chính là bài toán Fibonaci nổi tiếng.
Ở các nước phát triển bắt đầu từ cuối thế kỉ XX dầu thế kỉ XXI một trào lưu
chạy đua ngầm nhưng vô cùng sinh động dang diễn ra giữa các quốc gia:
Đưa khoa học máy tính vào trường phổ thông.
Dây mới chính là "mệnh lệnh tối mật" của cuộc cải cách giáo dục hiện tại đang
diễn ra vô cùng gấp rút tại các cường quốc. Nước nào tụt hậu trong cuộc chạy
đua này, quốc gia đó vĩnh viễn bị xếp vào "hạng sau" mà khoảng cách vốn đã
xa cách nay càng nới rộng ....
Nước ta không phải là nước nghèo tri thức, đã đến lúc con cháu mình cần phải
tiếp cận với khoa học thế giới mà cụ thể đó là trào lưu khoa học máy tính, nếu
chúng ta không muốn thực sự là lực lượng hạng hai!

## 1 Biểu đồ Venn - Logic

## 2 Nguyên lý Dirichlet (chuồng và thỏ) I.

## 3 Nguyên lý dirichlet II

## 4 Các bài Toán trên bàn cờ.

## 5 Hình học tố hợp

## 6 Chuyên đề số học.

## 7 Trò chơi - Games

## 8 Quy nạp

## 9 Tổng hợp

10 Thêm thêm
11 Những viên ngọc của xứ sở kim cương

## 1 Biểu đồ Venn - Logic

**Bài 1.** Giữa các số tự nhiên từ 1 đến 1000 có bao nhiêu số chia hết cho:
- a) Ít nhất một số
- b) Đúng một số
- c) Ít nhất hai số
- d) Đúng hai số
  từ các số 2,3,5.

**Bài 2.** Có bao nhiêu số nguyên tố cùng nhau với 1200 và không quá 1200?

**Bài 3.** Có bao nhiêu số có ....
- a) ba chữ số
- b) bốn chữ số
- c) n chữ số
  biết rằng các chữ số của nó chỉ là 1, 2, 3 nhưng tất cả đều có mặt ít nhất một lần?

**Bài 4.** Có bao nhiêu số có 4 chữ số mà trong các chữ số của nó các chữ số 1 hoặc 2
  ít nhất có một số tham gia?

**Bài 5.** Người ta ghi các số tự nhiên từ 1 đến 10000 lên bảng. Sau đó người ta xóa
  các số có chứa chữ số 0 hoặc 1. Hỏi các số bị xóa và các số còn lại nhóm nào
  nhiều hơn?

**Bài 6.** Bình không chú ý đến đồng phục của mình. Trên chiếc áo có diện tích tổng
  thể là 1m^2 đã 5 lần mẹ bạn ấy phải vá năm miếng vải mỗi miếng diện tích
  30dm', sáu lần phải vá các miêng vải 20dm'. Hỏi có tôn tại không hai miêng
  vái phú đè lên nhau ít nhât 3dm'?

**Bài 7.** Có bao nhiêu cách bỏ nhầm năm lá thư vào 5 chiếc phong bì sao cho không
  có phong bì nào có địa chỉ đúng của lá thư cần gửi?
  Đáp số: 5! - 5.4! + C35.3! - C35.2! + C45.1! - C55.0!

**Bài 8.** Năm cặp vợ chồng ngồi xung quanh một chiếc bàn tròn. Hỏi có bao nhiêu
  cách xắp xếp sao cho các bà không ngồi cạnh chồng mình (các cách sắp xếp
  nhận được từ nhau bởi phép quay không tính là khác nhau)?
  Đáp số: 9! - 5.2.8! + C2 5.22.7! - C3 5.23.6! + C45.24.5! - C5 5.25.4!

**Bài 9.** Một đàn lạc đà 7 con dang đi theo hàng dọc trên xa mạc. Để cho hành trình
  khỏi nhàm chán ông chủ lữ hành mỗi hôm lại thay đổi thứ tự các con lạc đà
  sao cho ngày hôm nay không có con nào phải thầy con hôm qua đi trước nó.
  Tất nhiên con đi đầu thì có thể giữ nguyên. Hỏi có bao nhiêu cách sắp xếp du
  hành đoàn để không hôm nào giống hôm nào?
  Dáp số: 7! - 6.6! + C26.5! - C36.4! + C46.3! - C 6.2! + C66.1!

## 2 Nguyên lý Dirichlet (chuồng và thỏ) I.

**Bài 10.** Nhiều nhất có thể cho bao nhiêu số nguyên tố khác nhau, sao cho giữa
  chúng cứ bất kì ba số đều có tống là một số nguyên tố?

**Bài 11.** Có thể lấp đầy các ô của bảng 5 × 5 bằng các số 1 và (-1) sao cho tổng các
  số ở mỗi hàng và mỗi cột là khác nhau?

**Bài 12.** Giả sử rằng giữa một số các đồ vật hai loại màu khác nhau, có hai loại hình
  dạng khác nhau. CMR trong chúng tồn tại hai đồ vật khác nhau cả về hình
  dạng và màu sắc.
  Dáp số: đã có lời giải trên forum BTH - LGD ....

**Bài 13.** CMR:
- a) Từ ba số bất kì luôn tìm được 2 số có tổng chia hết cho 2.
- b) Từ năm số bất kì luôn tìm được 3 số có tổng chia hết cho 3.
- c) Từ bảy số bất kì luôn tìm được 4 số có tổng chia hết cho 4.

**Bài 14.** Trên hình lưới ô vuông có 40 hình vuông nhỏ được tô màu. Hỏi từ các hình
  vuông được tô màu này có luôn tìm được 10 hình vuông sao cho không hai hình
  nào có điểm chung (không chung cả dính)?
  Hướng dẫn. Chia mặt phẳng lưới thành những bàn cờ 2 x 2. Dánh đấu các vị
  trí tương đối theo các số I,II, III và IV ....

**Bài 15.** Từ bao nhiêu số chính phương ta có thể chọn được hai số sao cho hiệu của
  chúng chia hết:
- a) cho 3
- b) cho 4
- c) cho 8.

**Bài 16.** CMR trong phần phân của số n có bộ ba số liên tiếp nhau và bộ số này
  xuất hiện nhiều vòng cùng lân.
  Hướng dẫn. Số bộ ba chữ số là hữu hạn các số sau dấu phẩy của số n là vô hạn.

**Bài 17.** Có 21 số nguyên dương khác nhau và đều nhỏ hơn 70. CMR trong tập các
  hiệu của hai số nào đó giữa 21 số trên, có ít nhất 4 số bằng nhau.
  18*. Có 7 số tự nhiên khác nhau có tổng là 100. Chứng minh rằng có 3 số có
  tổng tối thiểu là 50.
  19*. Có 20 số nguyên dương khác nhau và đều nhỏ hơn 70. CMR trong tập
  các hiệu của hai số nào đó giữa 20 số trên, có ít nhất 4 số bằng nhau.
  20*. Bạn Nam có 100 cái đĩa nhỏ, mỗi cái được đánh một số khác nhau từ 1
  đến 100. Nam muốn đặt ra bàn bốn chiếc sao cho tổng các số ở hai chiếc này
  bằng tổng các số của hai chiếc kia. Ví dụ: (1) + (7) = (3) + (5).
  Nhưng rất đáng tiếc 75 chiếc đĩa bị thất lạc. Hỏi với 25 chiếc còn lại công việc
  còn thực hiện được không?

**Bài 21.** Sơn các điểm trên mặt phẳng bằng hai mầu xanh và đỏ. CMR tồn tại hai
  điểm cùng màu có khoảng cách là 1.

**Bài 22.** Sơn các điếm trên mặt phăng bằng 3 màu. Chỉ ra rằng có một màu nào đó
  có vô số điểm được sơn.

**Bài 23.** Sơn các điểm trên mặt phẳng bằng 2 mẩu. CMR với bất kì n nguyên dương,
  tồn tại da giác lỗi có n đỉnh cùng màu.

**Bài 24.** a) Sơn tất cả các điểm bằng hai mầu. CMR tồn tại hình chữ nhật có các
  đỉnh đồng mẫu.
- b) Giải bài toán với n mầu?
- c) Trong phần a) và b) nói trên bài toán có thể chứng minh được với một số k
  cố định (nhiều hữu hạn) các điểm được sơn trên mặt phắng, cùng đều có hình
  chữ nhật có các đỉnh cùng mầu. Hãy chỉ ra số k trong từng trường hợp.
  Đáp số: a) Lưới ô vuông 3 x 7 TMĐK này.
- b) Lưới ô vuông kích thước (n + 1) (n.C n+1 + 1).

**Bài 25.** Khoảng cách dôi một của tập nhiều vô cùng các điễm cũng có nhiều vô
  cùng giá trị khác nhau.

**Bài 26.** a) Trong mặt phẳng lưới ô vuông có thể cho nhiều nhất bao nhiêu điểm
  nút lưới để trung điểm của các đoạn thắng các điễm này không nằm trên nút
  lưới.
- b) Cũng câu hỏi đó với hệ lưới lập phương.

**Bài 27.** Trong hình vuông cạnh 300 đơn vị cho 10 điểm. CMR giữa chúng tìm dược

## 2 điểm có khoảng cách nhỏ hơn 142 đơn vị.

**Bài 28.** Trên mặt phắng hình vuông cạnh 70 cm có vết của 50 phát đạn. Hãy chỉ
  ra rằng có hai vết đạn cách nhau không quá 15 cm.

**Bài 29.** Ở giải bóng đá V-Landi sân bóng có chiều rộng 39m, chiều dài 91m. CMR
  trong quá trình thi đấu luôn được hai cầu thủ có vị trí cách nhau không quá
- a) 19 m
- b) 15 m.

**Bài 30.** Trong hình vuông cạnh đơn vị cho 51 điểm bất kì. CMR tồn tại 3 điểm
  nằm trong một vòng tròn bán kính -

## 3 Nguyên lý dirichlet II

**Bài 31.** Trong bảng ô vuông 100 x 100 người ta điền một trong ba số 1,2,3 vào
  các ô vuông nhỏ, sau đó tính tổng các số của từng hàng, từng cột và hai đường
  chéo rồi ghi riêng biệt các kết quả. CMR luôn tìm được hai số bằng nhau.

**Bài 32.** Từ các đỉnh của một đa giác đều 13 cạnh có thế chọn được không 5 đỉnh,
  sao cho bất kì hai đỉnh nào trong 5 đỉnh này có khoảng cách khác nhau?
  Đáp án: không.

**Bài 33.** Có một chiếc cân hai dĩa, một bên dặt vật cần cân và một bên đặt các quả
  cân. Người ta muốn cân các vật có khối lượng nguyên từ 1 đến 15 kg mà chỉ
  dùng số lượng quả cân ít nhất. Cần phải chọn những quả cân có khối lượng
  như thế nào? Ít nhất bao nhiêu quả?

**Bài 34.** Ở chợ trời "Dừng thắc mắc" người ta thường cân bằng cân 2 dĩa, một bên
  đặt vật cần cân và một bên đặt không quá 2 quả cân. Muốn cân các trọng lượng
  nguyên từ 1 đến 16 kg các cao thủ chợ đêm cần dùng những quả cân như thế
  nào? Ít nhất bao nhiêu quả?
  Đáp số: 6 quả cân.

**Bài 35.** Ở chợ trời "Sành diệu" người ta thường cân bằng cân 2 đĩa, và sử dụng
  không quá 2 quả cân. Dể cân thuận tiện người ta thường đặt một bên là các
  quả cân một bên vật cần cân và (nếu cần) có thể đặt thêm chỉ một quả cân.
  Muốn cân các trọng lượng nguyên từ 1 đến 17 kg các cao thủ chợ đêm cần dùng
  những quả cân như thế nào? Tối thiếu bao nhiêu quả?
  Đáp số: 5 quả cân.

**Bài 36.** Dãy số 9 hạng tử (1,2,3,4,5,6,7,8,9) được kiến tạo bằng cách lấy tổng
  của các dãy số 9 hạng tử khác mà trong mỗi dãy đó chỉ hai chữ số có mặt ví
  dụ (0,2, 2, 0,0,2,2, 0,0). Và phép lấy tổng được thực hiện trên từng hạng tử:
  (0,2, 2,0,0,2,2,0,0) + (1,0,0,0, 1, 1, 1,0,1) = (1, 2,2,0, 1,3, 3,0,1). Hỏi ít nhât
  phải dùng bao nhiêu dãy số thỏa mãn điều kiện trên?
  Đáp số: cần ít nhất 4 dãy thích hợp.

**Bài 37.** Một hình chữ nhật có các cạnh là 5 và 9. Người ta chia thành 10 hình chữ
  nhật nhỏ có độ dài các cạnh là các số nguyên. Chứng minh rằng có hai hình có
  diện tích bằng nhau trong các hình chữ nhật này!

**Bài 38.** Trên mặt phăng cho 100 điểm không có 3 điếm nào thắng hàng. Các đoạn
  thẳng nối các điểm đều được sơn màu xanh hoặc đỏ. Chứng minh rằng trong
  các điểm trên luôn chọn được ít nhất 2 điểm mà từ đó số đoạn thẳng đỏ xuất
  phát bằng nhau.

**Bài 39.** CMR trong một nhóm 6 người luôn luôn chọn được 3 người hoặc cùng quen
  nhau hoặc cùng không quen nhau.

**Bài 40.** Có 17 nhà bác học trao đổi với nhau bằng 3 thứ tiếng Anh , Pháp, Việt (hai
  người chỉ trao đổi bằng một thứ tiếng chung). CMR luôn chọn được 3 người
  trao đổi với nhau bằng cùng một thứ tiếng.

**Bài 41.** Có 66 diễn viên, bất kì 2 người nào đều dã biểu diễn chung cùng một thể
  loại nhà hát, lồng tiếng, đóng phim, hay vô tuyến. Biết rằng mỗi cặp hai người
  chỉ biểu diễn chung một thể loại. Chứng minh rằng có ba diễn viên biểu diễn
  với nhau cùng thể loại.

**Bài 42.** Trong một thung lũng có 65 con bò của hai làng dang gặm cỏ: gồm các
  loại nâu, trắng, den và loang lổ. CMR nếu không có 5 con bò nào cùng độ tuổi,
  cùng màu lông, thì luôn tìm dược 3 con bò cùng màu lông, cùng độ tuổi và ở
  cùng một làng.

**Bài 43.** Trong một tập thế 9 người, người nào cũng quen 7 người khác. Hãy chỉ ra
  rằng cứ 4 người bất kỳ đều có chung ít nhất một người quen.

**Bài 44.** Loại Toto bóng đá 13 trận, kêt quả (1, 1,2). Cân phải chơi ít nhât bao
  nhiều vé dê trong các vé dã chơi có ít nhât một cột có ít nhât 5 kêt quá dúng.

**Bài 45.** Chứng minh rằng trong một da giác lồi 10 cạnh (thập giác) luôn tồn tại
  một đường chéo không song song với bất kì cạnh nào của da giác.
  Hướng dẫn: Mỗi cạnh có không quá ba đường chéo song song với nó.

**Bài 46.** Một bàn cờ 12 x 12 có một số ô được sơn mầu đen hoặc màu trắng. Màu
  của mỗi ô có thể được thay đổi sang màu ngược lại, nếu trong mỗi lượt người
  ta đổi màu cả một cột hay cả một hàng. Hỏi trong mọi trường hợp luôn có thể
  đổi mầu sao cho bàn cờ cuối cùng chỉ còn toàn mầu đen?
  Dáp số: Có cấu hình không thế thực hiện được.

**Bài 47.** Trên các ô của bàn cờ 8x8 được ghi các số nguyên. Mỗi lượt người ta tăng
  giá trị của một bảng 3 x 3 hoặc 4 x 4 mỗi ô lên một đơn vị. Hỏi mục đích tất
  cả các ô có giá trị chia hết cho 10 có luôn luôn đạt được hay không?
  Hướng dẫn: Không thể. Có 36 bảng 3 x 3 và 25 bảng 4 × 4, mỗi bảng có 10 cách
  biến đổi. Dó đó có thể tạo thành 1036 + 25 = 1061 cấu hình có thể tạo được.
  Từ 64 ô có 1064 có 64 cấu hình.
  48*. Trong một trường học, người ta chia các bạn học sinh vào các đội 10
  người. Một học sinh có thể tham gia nhiều đội hoặc không tham gia bất cứ đội
  nào. Số đội là 500. CMR có thể chia các bạn học sinh vào hai phòng sao cho
  trong cả hai phòng mỗi đội đều có người của mình.
  Dáp số: có thế.

## 4 Các bài Toán trên bàn cờ.

**Bài 49.** Trên bàn cờ vua có thế đi quân mã liên tiếp vào mỗi ô một lần rồi quay lại
  vị trí ban đầu? Cái gì xảy ra với các bàn cờ 4 x 4,5 x 5,8 x 8.

**Bài 50.** Trên bàn cờ 5 x 5 mỗi ô có một con cánh cam. Sau hiệu còi các con cánh
  cam chuyển sang một ô có chung cạnh với ô vừa đứng. Liệu sau khi di mỗi ô
  của bàn cờ vẫn có một con không?

**Bài 51.** Một bàn cờ 8 x 8 ở hai góc đối diện mỗi góc một quân cờ. Hỏi có thế phủ
  kín phần còn lại của bàn cờ bằng những quân đomino kích thước 1 x 2?

**Bài 52.** Một bàn cờ ở một góc có một quân cờ. Hỏi có thế phủ kín phần còn lại của
  bàn cờ bằng những quân domino kích thước 1 x 3?

**Bài 53.** Có thể dặt một quân cờ vào bàn cờ để phần còn lại có thể phủ kín bằng
  những quân domino kích thước 1 x 3?

**Bài 54.** Có thể phủ bàn cờ 10 × 10 bằng các quân domino 1 × 4?
  Định nghĩa: Polimino là hình được ghép liền cạnh của các hình vuông đơn vị.

**Bài 55.** Có bao nhiêu quân polimino có bề mặt 4 đơn vị (ghép cạnh với cạnh bằng

## 4 hình vuông).

Dáp số: 5 hình.

**Bài 56.** Tất cả các quân polimino 4 đơn vị mỗi quân sử dụng một lần có thể ghép
  lại được một hình chữ nhật không?
  Đáp số: Không được. Chú ý: Polimino hình chữ T và cách tô màu bàn cờ.

**Bài 57.** Có bao nhiêu quân polimino 5 đơn vị?
  Dáp số: 12 quân.

**Bài 58.** Từ tất cả các quân polimino 5 đơn vị mỗi quân sử dụng một lần có thể ghép
  lại được một hình chữ nhật. Minh họa bằng hình vẽ. Hình chữ nhật đó kích
  thước bao nhiêu?
  Đáp số: được. VD 10 x 6 hoặc 5 x 12

## 5 Hình học tố hợp

**Bài 59.** Trên mặt phẳng cho n điểm không có 3 điểm nào thẳng hàng. CMR:
- a) Tồn tại một đường thắng phân chia k điểm riêng biệt từ các điểm còn lại.
- b) Tồn tại đường tròn chứa dúng k điểm bên trong.

**Bài 60.** Cho n điểm tổng quát trên mặt phẳng (không có ba điểm nào thẳng hàng).
  CMR tồn tại một vòng tròn chạy qua ít nhất ba điếm mà không chứa điểm nào
  ben trong.

**Bài 61.** Cho 5 điểm tổng quát trên mặt phăng không cùng năm trên một đường
  tròn. CMR có thể chọn ra 2 điểm sao cho đường tròn đi qua ba điểm còn lại
  phân chia hai điểm nói trên (một bên trong, một bên ngoài).

**Bài 62.** Cho 6 điểm tổng quát trên mặt phẳng. Nối tất cả các cặp hai điểm bằng
  những đoạn thẳng. Có thể sơn các đoạn thẳng bằng 5 màu sao cho từ mỗi đỉnh
  luôn có năm cạnh xuất phát hay không?

**Bài 63.** Cho n điểm tổng quát trên mặt phắng. CMR có thế sơn bằng k màu sao
  cho khi nối các điểm cùng màu bằng đoạn thẳng có chính màu ở đỉnh thì các
  đoạn thắng khác màu không cắt nhau.

**Bài 64.** Trên mặt phắng cho n điểm tổng quát. Hỏi có thể kẻ nhiều nhất bao nhiêu
  đường thẳng từ các điểm này?

**Bài 65.** Cho 6 điễm. Các đường thắng qua trung điểm các đoạn thắng được xác
  định bởi sáu điểm trên có thể tạo nên bao nhiêu giao điểm^2

**Bài 66.** Cho 5 đường thắng. Xét các đường phân giác của các đường thắng này. Hỏi
  các đường này có thể có nhiều nhất bao nhiêu giao điểm^2
  Đáp số: 40 + 60 + 10 = 110 giao điểm.

**Bài 67.** Xét một đa giác lồi. Giả sử không có 3 dường chéo nào đồng quy. Hỏi các
  đường chéo cắt nhau tại bao nhiêu điểm^2
  Dáp số: C410-

**Bài 68.** Vẽ trên mặt phẳng n đường tròn. Hãy sơn những phần mặt phắng giới hạn
  bởi các cung tròn bằng 2 màu sao cho những phần mặt phẳng có chung cung
  tròn thì có màu sơn khác nhau.

**Bài 69.** Một cái bánh ga tô hình hộp chữ nhật một chiều bị cắt bằng 5 nhát và
  một chiều khác bị cắt bằng 8 nhát. Peter dược cắt một nhát theo một dường
  thăng. Cậu ta được lấy tất cả các phần mà dao chạm phải. Hỏi nhiều nhất có
  thể được ăn bao nhiêu miếng?

**Bài 70.** N đường thắng chia mặt phắng nhiều nhất thành bao nhiêu miền?

## 6 Chuyên đề số học.

**Bài 71.** Từ các số 1,2, 3, ..· , 10 có thể chọn nhiều nhất bao nhiêu số sao cho trong
  các số này hiệu của bất kỳ hai số đều cho giá trị khác nhau?

**Bài 72.** Từ các số 1,2,3, .· , 10 có thể chọn nhiều nhất bao nhiêu số sao cho trong
  các số này tổng của bất kỳ hai số đều cho giá trị khác nhau?

**Bài 73.** Từ các số 1,2,3, ..· , 20 có thế chọn nhiều nhất bao nhiêu số sao cho trong
  các số này tổng của bất kỳ hai số không nằm trong các số đã chọn?

**Bài 74.** Từ các số 1,2,3, ... , 20 có thể chọn nhiều nhất bao nhiêu số sao cho trong
  các số này hiệu của bất kỳ hai số không là 7?

**Bài 75.** Từ các số 1,2,3, ... ,20 có thế chọn nhiều nhất bao nhiêu số sao cho không
  có số nào là ước của tích của các số còn lại?

**Bài 76.** Từ các số 1,2, 3, ..· ,20 có thể chọn nhiều nhất bao nhiêu số sao cho không
  có 2 số nào mà một số là ước của số kia?

**Bài 77.** Từ các số 1,2,3,... ,20 có thể chọn nhiều nhất bao nhiêu số sao cho không
  có 2 số nào mà một số gấp 2 lần số kia?

**Bài 78.** Từ các số 1,2,3,... ,20 có thể chọn nhiều nhất bao nhiêu số sao cho tích
  của chúng không chia hết cho 10?

**Bài 79.** Bỏ một số trong các số 1,2,3,... , 10 sao cho từ các số còn lại có thể chia
  thành hai nhóm, mà tích các số trong mỗi nhóm bằng nhau. Số bị loại là số nào?

**Bài 80.** Bỏ một số trong các số 1,2,3, ... , 16 sao cho từ các số còn lại có thể chia
  thành hai nhóm, mà tích các số trong mỗi nhóm bằng nhau. Số bị loại là số
  nào?

## 7 Trò chơi - Games

**Bài 81.** Cho một đa giác lồi 12 đỉnh. Hai người chơi. Họ thay nhau nối các đường
  chéo sao cho những đường chéo mới nối không cắt các đường chéo đã có ở miền
  trong của đa giác. Người thua là người không thế tiếp tục vẽ thêm. Hỏi người
  nào có chiến thuật để luôn thắng trận? Tại sao?
  Hướng dẫn: dùng đối xứng.

**Bài 82.** Có một thanh sô-cô-la hình bàn cờ 8 x 8 và ô phía trên bên trái bị nhiểm
  độc. Hai người chơi. Dến lượt ai, người đó chọn một ô rồi bẻ hết phần sô - cô -
  la từ ô đó sang bên phải và xuống dưới. Người thua cuộc là người phải chọn ô
  bị nhiễm độc. Hãy chỉ ra thuật toán luôn đảm bảo người đi đầu tiên thắng trận.

**Bài 83.** Hai người chơi mỗi người có một mẫu đen hoặc đỏ, họ thay nhau tô mỗi
  lần 3 cạnh của một khối hộp lập phương bằng màu của mình. Người thắng trận
  là người sơn được cả 4 cạnh của một mặt nào đó bằng màu của mình. Hỏi ai
  có khả năng thắng trận?
  Đáp số: Người đi thứ 2 có thể cứu vãn tình thế bằng thủ hòa.

**Bài 84.** Trên bàn cờ lưới ô vuông 8 x 9. Hai người chơi. Mỗi lần đến lượt người nào
  đi, người đó phải chọn ra 3 điểm lưới (nút lưới ô vuông) để có thể vẽ được một
  tam giác không có điểm chung với các tam giác đã vẽ. Người thắng là người đi
  sau cùng. Ai có thể thắng trận?

**Bài 85.** Hai người chơi. Từ các số 1,2, 3,..., 101 mỗi người lấy 9 số. Sau 11 lần đi
  còn lại 2 số. Người đầu tiên thắng nếu hiệu của hai số này là 55. Liệu người
  dầu tiên luôn luôn thắng trận?
  Dáp số: Có thế.

**Bài 86.** Trên bàn có 24 viên sỏi. Có thể lấy k viên (k > 0) nếu k và số sỏi trên bàn
  nguyên tố cùng nhau. Hai người chơi. Người lấy viên cuối cùng là người thắng
  trận. Ai có thể thắng trận? Nếu số sỏi thay đối các giá trị n khác thì sao?

**Bài 87.** Peter và Pal cùng chơi: Trước tiên Peter nói một số nguyên có một chữ số
  lớn hơn 1, sau đó Pal nhân số này với một số nguyên có một chữ số lớn hơn 1.
  Sau đó Peter cũng lại làm như vậy lấy kết quả của Pal nhân với một số nguyên
  có một chữ số lớn hơn 1. Cuộc chơi cứ tiếp tục như vậy cho đến khi có một
  người nào đó đạt được kết quả là một số lớn hơn 2000. Hỏi Peter phải bắt đầu
  bằng số nào để luôn thắng trận?

**Bài 88.** Hai người chơi. Mỗi người lần lượt chiếm một số nguyên. Người thắng cuộc
  là người chiếm được trước một bộ có ba chữ số liền nhau. Ai có khả năng thắng
  trận?

**Bài 89.** Có hai nắm sỏi trên bàn. Một năm 8 viên và nắm kia 12 viên. Hai người
  chơi. Mỗi lần mỗi người chỉ được lấy từ một đống nào đó vài viên (ít nhất 1
  viên). Hỏi ai có khả năng thăng trận?

**Bài 90.** Có vài nắm sỏi trên bàn. Ví dụ các nắm có 4, 6, 11, 15, 17, 18 viên. Hai người
  chơi. Mỗi lần mỗi người được lấy từ một số nắm, mỗi nắm chỉ 1 viên. Ai là
  người thắng trận?

**Bài 91.** Viết các số nguyên dương thành hàng trên mặt phẳng. Đặt một vòng tròn
  xanh vào số 8 và vòng tròn đỏ vào số 13. Hai người chơi. Mỗi người chọn một
  trong hai cái vòng và thay đổi chỗ sao cho luôn đặt vào số bé hơn trước đó và
  số có vòng xanh luôn lớn hơn số có vòng đỏ. Người thắng là người sau khi đi
  có đỏ ở số 1 và xanh ở số 2. Ai là người thắng cuộc?

## 8 Quy nạp

**Bài 92.** Có thể xếp không các tập hợp con của một tập hợp n phần tử lên một
  đường tròn sao cho các tập con cạnh nhau có không quá một phần tử khác
  nhau?

**Bài 93.** Cho H = {2,3,...,n}, xét tất cả những tập hợp con không rỗng của H,
  trong mỗi tập hợp nhân tất cả các phần tử với nhau rồi lấy tổng nghịch đảo
  của các giá trị đó. Hỏi kết quả nhận được là bao nhiêu? Ví dụ: n = 4 thì:
  +3+4+6+8+12+21
  = 2

**Bài 94.** Người ta muốn mắc một rèm cửa sổ. Để chia các khoảng cách cho thật đều
  nhau, đầu tiên người ta mắc ở hai đầu tấm rèm rồi chia đôi và mắc tại điểm
  giữa, cứ tiếp tục như thế, người ta mắc điểm giữa của các đoạn tiếp theo. Hỏi
  cần có bao nhiêu cái mắc để phương pháp này thực hiện được?

**Bài 95.** Chia một tam giác thành các tam giác nhỏ không có điểm trong chung sao
  cho không có ba đỉnh nào thắng hàng. Chứng minh rằng số tam giác nhỏ chỉ
  có thể là số lẻ.

**Bài 96.** Có bốn bà, mỗi bà biết một chuyện nhưng chỉ có thể nói chuyện dược với
  nhau qua điện thoại để trao đổi với bạn câu chuyện của mình (hai chiều). Hỏi
  cần ít nhất bao nhiêu cú điện thoại để tất cả mọi người biết được các câu chuyện
  của mỗi người (mỗi bà kể chuyện của mình và những chuyện đã được nghe từ
  bà khác trước đó)?

**Bài 97.** Chứng minh rằng từ các số 1,2,..., 3* luôn có thể chọn 2k các số khác nhau
  sao cho trung bình cộng của bất kỳ hai số được chọn không nằm trong các số
  đã chọn.

**Bài 98.** a) Những số chẵn nào có thể viết được thành tổng của hai số chẵn dương
  và các số này là hợp số.
- b) Số chẵn nào có thể viết thành tổng của ba số dương lẻ mà các số này đều là
  hợp số?

## 9 Tổng hợp

**Bài 99.** a) Hãy đặt 15 điểm đỏ lên các cạnh của một lục giác sao cho mỗi cạnh có
  số điểm đỏ bằng nhau.
- b) Giải bài toán trong trường hợp 16 điểm.
- c) Trường hợp 2003 điểm.
- d) 15 điểm đối với một thất giác (7 đỉnh).

**Bài 100.** Đặt 10 điểm đỏ và 14 điểm xanh lên các cạnh của một hình lục giác sao
  cho trên mỗi cạnh số điểm đỏ bằng số điếm xanh.

**Bài 101.** Hai người chơi thay đối nhau họ ghi các dấu (-), (+) vào dãy sau (kể cả
  trước số 1):
- a) Người bắt đầu chơi mục đích là kết thúc bằng tổng đại số cuối cùng của dãy
  không chia hết cho 3. Người thứ hai thì cố gắng để tổng chia hết cho 3. Hỏi
  phải chơi như thế nào? Ai có lợi thế hơn?
- b) Tình trạng sẽ thế nào nếu thay đổi vai trò người đi dầu thắng nếu tổng
  không chia hết cho 3.

**Bài 102.** Kết thúc một cuộc chơi tất cả mọi người bắt tay nhau ra về. Giữa chừng
  có một người quen của một vị khách đến đón bạn người đó bắt tay với những
  người mà anh ta quen biết. Vì thế có tổng cộng 68 cái bắt tay. Hỏi người mới
  đến quen bao nhiêu người trong cuộc chơi?

**Bài 103.** Sáu đội bóng tham gia một giải bóng tất cả các đội đều gặp nhau một
  lần. Kết thúc giải các đội đạt được 12, 10, 9,8,7 và 6 điểm. Hỏi bên thắng trận
  được bao nhiêu điểm nếu hòa dược 1 điểm, thua được 0 điểm^2

**Bài 104.** Hai người chơi, người ta thay nhau vẽ các đường chéo của một đa giác
  đều 2000 đỉnh. Cấm không được vẽ những đường chéo cắt các đường chéo đã
  vẽ trước đó. Người thua là người sau bước đi của anh ta thì xuất hiện một tứ
  giác mà chưa có đường chéo nào được vẽ. Ai có chiến thuật để thắng trận?

**Bài 105.** Có hay không một buổi gặp mặt mà bất cứ người nào cũng có đúng 6
  người bạn và bất kỳ hai người nào đều có đúng hai người bạn chung?

**Bài 106.** a) Lotto ở vương quốc Ngọc Anh từ 7 số người ta lấy ra 3 số làm giải
  thưởng. Hỏi phải mua bao nhiêu vé để chắc chắn có ít nhất một vé có 2 số
  trúng thưởng (mỗi vé được đánh 3 số tùy ý)?
- b) Cũng ở vương quốc này có một trò chơi khác từ bẩy số người ta chỉ rút ra
  hai số làm giải thưởng nhưng người chơi trên mỗi vé được dánh 3 số. Hỏi cần
  mua bao nhiêu vé để chắc chắn trúng giải (trúng cả hai số)?

**Bài 107.** Ngọc Anh được các bạn cùng lớp tặng cho 3 bông hoa: 1 bông hồng, 1
  bông thủy tiên, 1 bông lan. Cô ta có 3 bình đựng hoa: một bình sứ Trung Quốc,
  một bình xứ Bát Tràng, một bính xứ Ấn Dộ.
- a) Nếu mỗi bình chỉ cắm một bông hoa thì có bao nhiêu cách?
- b) Nếu không có điều kiện ràng buộc trên thì có bao nhiêu cách?

**Bài 108.** Ở vương quốc Ngọc Anh người ta tổ chức Tombola. Rút ra 3 số từ 45 số:
  1,2,3,.., 45.
- a) Người ta tính rằng nếu mỗi công dân ghi một vé phiếu một cách khác nhau.
  Thì có thể xảy ra trường hợp không ai trúng giải độc đắc. Hỏi vương quốc này
  có nhiều nhất bao nhiêu công dân?
- b) Ở vương quốc này bác John có tất cả các vé số ghi ba số. Hỏi có bao nhiêu
  phiếu trúng thưởng ít nhất hai số.
- c) Bây giờ ở xứ Ngọc Anh thay đổi cách chơi lotto, từ 45 số phải rút ra 42 số.
  Hỏi phải chơi bao nhiêu vé để chắc chắn được giải full (tìm được tất cả các số).
- c) Có bao nhiêu vé khác nhau chung 41 số? Chung 40 số?
  10 Thêm thêm
  108.1. Bản đồ dưới dây là thanh phố Henry Poter dang sinh sống. Hệ thống
  đường giao thông là các đường thắng của lưới ô vuông. Mỗi khối nhà có bề mặt
  100m. Các bạn của Poter ở các vị trí A, B, C, D (trên hình vẽ). Hỏi họ tập
  trung hội họp chỗ nào để tổng chiều dài quãng đường mỗi người phải di là ít
  nhất?
  D
  ·C
  108.2. Bản đồ xứ "Không Không Thấy" có 35 thành phố (các dấu tròn trên
  bản đồ)- các đường giao thông là các đường nối các thành phố. Các thành phố
  cạnh nhau có khoảng cách là 5km. Nhà Vua có hứa với dân chúng là sẽ chọn
  một số thành phố và ở đó xây dựng các trạm cứu hỏa sao cho không có thành
  phố nào cách trạm cứu hỏa gần nhất quá 5km.
  Hỏi cần có ít nhất bao nhiêu trạm cứu hỏa để đáp ứng dự án này?
  108.3. Trong hình là bản đồ của hòn đảo Cyberland có 9 thành phố. Khoảng
  cách các con dường từ thành phố này sang thành phố khác dược ghi trên sơ đồ.
  Trong các cuộc dạo chơi xuất phát từ một dịa điểm và tham quan cả 9 thành
  phố rồi quay lại nơi xuất phát. Hành trình nào có chiều dài nhỏ nhất ( tiết
  kiệm km nhất)?
  108.4. Từ hòn đảo C— "Cướp Biển" den đảo K= "kho báu" co thể đi bằng tàu
  thủy qua các đảo lân cận. Giá vé mỗi quãng đường dược ghi trong sơ đồ. Hỏi
  cần ít nhất bao nhiêu tiền để có thể đi từ C đến K?
  Kho báu
  CƯớpO
  biến
  108.5. Từ làng Hencida đến làng Boncida có thể đi bằng xe Buýt qua các làng
  lân cận. Giá vé được ghi trên sơ đồ.
  Hỏi cách đi rẻ nhất để đến được từ H đến B?
  Boncida
  11 Những viên ngọc của xứ sở kim cương
  108.6. Công chúa Ngọc Anh chuấn bị cho ngày trọng đại. Nàng cất trong két
  hồng ngọc của mình bộ sưu tầm vòng cổ kim cương quý giá ( nhiều hơn 1 bộ).
  Trên mỗi vòng có số lượng các viên kim cương như nhau. Nếu ta biết có bao
  nhiêu viên kim cương có trong két ngọc, thì chúng ta cũng biết công chúa có
  bao nhiêu vòng cổ? Và tất nhiên mỗi vòng cổ được làm từ bao nhiêu viên kim
  cương?
  Ta còn biết số viên kim cương trong tủ có từ 200 đến 300 viên.
  Hỏi công chúa có bao nhiêu vòng cổ trước giờ đại sự?
  108.7. Số Học hỏi mẹ, những số nào là những số mẹ thích? Mẹ cho Số Học biết
  hai số nguyên dương may mắn của mình (không nhất thiết khác nhau). Khi
  gặp, Số Học nói thầm vào tai anh mình - Đại Số tổng của hai số này. Sau đó,
  nói thầm vào tai em mình - Hình Học tích của hai số này. Hai người kia không
  ai nghe được số của nhau. Khi ba anh em gặp nhau, Dại Số nói:
  - Tôi không tìm ra các số.
  Lúc đó Hình Học cũng nói:
  - Tôi cũng không tìm ra.
  Dại Số sau một lát suy nghĩ thì kêu lên:
  - Vậy tôi đã biết đó là hai số nào.
  Vậy hai số may mắn của Mẹ là số nào? Dại Số có tìm ra các số này không?
  108.8. Công chúa Ngọc Anh có 8 viên kim cương trọng lượng khác nhau. Hãy
  giúp công chúa xác định viên nặng nhất và viên nhẹ nhất đồng thời với số lần
  cân ít nhất!
  Xin chân thành cảm ơn sự quan tâm của bạn đọc!
  .......... ** .......... HẾT......... **.........

---

> [!TIP] Lời khuyên học tập
> Để đạt hiệu quả cao nhất với tuyển tập bài toán này, các em học sinh nên tự mình tư duy và làm ra nháp trước khi xem hướng dẫn giải. Chúc các em luôn giữ vững niềm say mê và tình yêu với môn Toán!
