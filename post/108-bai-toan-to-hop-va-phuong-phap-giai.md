---
title: "108 bài toán tổ hợp và phương pháp giải: Đánh thức đam mê tư duy"
description: "Tuyển tập 108 bài toán tổ hợp và phương pháp giải chi tiết: Bài toán đếm, nguyên lý Dirichlet, quy tắc cộng nhân, bài toán logic thi chuyên toán và HSG."
category: Toán học
type: Bài tập
date: "2026-10-17"
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
> - **Mục đích:** Bồi dưỡng học sinh khá giỏi THCS & THPT, rèn luyện tư duy logic, tổ hợp và phương pháp giải toán sáng tạo.

---

## Những lời giải đánh thức đam mê!

Thay cho lời nói đầu chúng tôi xin phép các bạn đọc được giới thiệu **BÀI TOÁN HAY – LỜI GIẢI ĐẸP...** của một số bài tập lựa chọn từ quyển: *"108 bài tập toán tổ hợp cho tất cả mọi người"* (viết tắt là Q1).

### Bài 5 (Q1)
*Tôi nghĩ một số nguyên $x$ với $0 < x < 17$. Phải cần ít nhất bao nhiêu câu hỏi mà chỉ được phép trả lời đúng - sai để người ta xác định được tôi nghĩ đến số nào?*

**Lời giải:** Cần 4 câu hỏi.

Ta thay cho hỏi các số từ 1 đến 16 bằng từ 0 đến 15 (thay vì hỏi cho $x$, ta hỏi cho số $x - 1$ vì lý do kỹ thuật trong trình bày).

Ta trình bày lời giải cho các bạn yêu tin học: Chuyển các số từ 0 đến 15 về dạng hệ đếm cơ số 2. Như vậy ta có các số $0, 1, 10, 11, 100, \dots, 1111$. Như vậy chúng ta cần 4 ô vừa đủ để biểu thị các số từ 0 đến 15. Các dãy kí tự cần xét đến là $0000, 0001, 0010, 0011, \dots, 1110, 1111$. Chỉ cần đặt 4 câu hỏi:
- Kí tự ở vị trí thứ $i$ là 1? (Hỏi như vậy 4 lần với $i = 1, 2, 3, 4$).

Câu trả lời chỉ có thể là 0 hoặc 1. Ghép 4 chữ số ta nhận được số cần tìm.

Ta chuyển sang cách hỏi dạng thông thường:
Chia các số thành hai nhóm A và B rồi đặt câu hỏi: *"Số cần tìm có trong nhóm A?"*. Sau khi ta nhận được thông tin, ta lại chia phần có chứa số cần tìm thành hai nhóm và tiếp tục câu hỏi trước.

Cách làm này cũng chỉ ra số câu hỏi cần thiết là 4 và không thể ít hơn 4, vì mỗi vị trí cần một câu hỏi để xác định.

Lời giải này có thể tổng quát hóa: nếu có $n$ vật cần tìm và $2^{k-1} < n \le 2^k$ thì cần $k$ câu hỏi. Đây cũng là một thuật toán cơ bản trong khoa học máy tính (tìm kiếm nhị phân - binary search).

---

### Bài 7 (Q1)
*Tôi nghĩ hai số giữa 1 và 10. Hỏi phải cần bao nhiêu câu hỏi (dạng đúng - sai) để bạn có thể biết hai số tôi nghĩ là gì?*

**Lời giải:** Cần 6 câu hỏi.

Sử dụng kết quả của bài trên, ta chỉ cần xét có bao nhiêu cặp số: $C_{10}^2 = 45$. Vì $2^5 < 45 < 2^6$ nên cần 6 câu hỏi.

> [!NOTE] Ghi chú
> Với cách đưa tổ hợp vào trong xây dựng lời giải, những công việc tưởng chừng như vô cùng rắc rối bỗng trở thành mạch lạc. Việc chọn 2 hay nhiều hơn các đồ vật không còn gây khó khăn, vì đã có thuật toán đơn giản.

---

### Bài 8 (Q1)
*Trên bàn cờ $8 \times 8$ có bao nhiêu hình chữ nhật?*

**Lời giải:** $C_9^2 \cdot C_9^2 = 36 \cdot 36 = 1296$.

Có nhiều cách đếm thú vị:
- Ta có thể tính bằng tích số đoạn thẳng nằm ngang $C_9^2$ và số đoạn thẳng nằm dọc $C_9^2$.
- Hoặc cũng có thể minh họa lời giải bằng tích số cách chọn hai đường thẳng nằm ngang và số cách chọn hai đường thẳng nằm dọc.

> [!TIP] Mở rộng
> Bài toán sẽ phức tạp và thú vị hơn khi ta thay hình chữ nhật bằng hình vuông: *Trên bàn cờ $8 \times 8$ có bao nhiêu hình vuông?*
> Công việc bây giờ là ghép các đoạn thẳng cùng độ dài nằm ngang với các đoạn thẳng cùng độ dài nhưng nằm dọc. Ta sẽ có công thức mở rộng cho bàn cờ kích thước $n \times n$:
> $$S = 1^2 + 2^2 + \dots + n^2$$
> Với $n = 8$: $S = 1^2 + 2^2 + \dots + 8^2 = 204$.

---

### Bài 9 (Q1)
*Trên giá có 10 quyển sách. Có bao nhiêu cách để lấy xuống 3 quyển sách không có hai quyển nào đã đứng cạnh nhau?*

**Lời giải:** Có $C_8^3$ cách chọn. Nếu dùng cách liệt kê, bài này tương đối khó.

Cách tiếp cận vấn đề mới sau đây làm cho lời giải trở thành đẹp lung linh: Ta lội ngược quy trình. Thay cho việc lấy xuống 3 quyển sách, ta làm công việc đặt sách lên giá. Bài toán sẽ là: *Trên giá có 7 quyển sách. Có bao nhiêu cách để đặt thêm 3 quyển sách sao cho các quyển mới đặt không có hai quyển nào đứng cạnh nhau?*

Từ đây lời giải cho bài toán trở nên rất đơn giản: Giữa các quyển sách trên giá có tổng cộng 8 vị trí trống (trước và sau hàng cũng có thể đặt). Chỉ việc chọn ra 3 vị trí để đặt sách mới vào. Kết quả hiển nhiên là:
$$C_8^3 = 56$$

Cách suy nghĩ đi ngược chiều thời gian như bài trên gợi cho chúng ta một phong cách: **PHƯƠNG PHÁP TRUY HỒI**. Bài toán sau thể hiện rất rõ tác dụng khó thiếu được của phương pháp này.

---

### Bài 12 (Q1)
*Có bao nhiêu cách đi lên một cầu thang 8 bậc sao cho mỗi lần chỉ được bước 1 hoặc 2 bậc?*

**Lời giải:**
Ta bắt đầu từ bậc thứ 8 (thứ $n$). Để bước được bước cuối cùng đến bậc 8 (bậc $n$) có hai cách:
- Hoặc bước một bước từ bậc 7 (bậc thứ $n - 1$)
- Hoặc bước 2 bậc liền từ bậc 6 (từ bậc $n - 2$).

Vậy số cách đến bậc $n$ ký hiệu là $F(n)$, bằng tổng số cách từ bậc $(n - 1)$ và từ $(n - 2)$. Nếu ở bậc 0 là một cách, thì từ 0 đến bậc 1 có 1 cách. Từ 0 lên bậc 2 có $1 + 1 = 2$ cách và ta nhận được công thức truy hồi:
$$F(n) = F(n-1) + F(n-2)$$
Đây chính là dãy số Fibonacci nổi tiếng! Với bậc 8: $F(8) = 34$ (hoặc 55 tùy theo quy ước bậc ban đầu).

---

> [!IMPORTANT] Đưa khoa học máy tính vào trường phổ thông
> Ở các nước phát triển bắt đầu từ cuối thế kỉ XX đầu thế kỉ XXI, một cuộc đua ngầm nhưng vô cùng sôi động đang diễn ra giữa các quốc gia: **Đưa khoa học máy tính vào trường phổ thông**.
> Đây mới chính là "mệnh lệnh tối mật" của cuộc cải cách giáo dục hiện tại đang diễn ra vô cùng gấp rút tại các cường quốc. Nước nào tụt hậu trong cuộc chạy đua này, quốc gia đó vĩnh viễn bị xếp vào "hạng sau" mà khoảng cách vốn đã xa cách nay càng nới rộng... Nước ta không phải là nước nghèo tri thức, đã đến lúc con cháu mình cần phải tiếp cận với khoa học thế giới mà cụ thể đó là trào lưu khoa học máy tính, nếu chúng ta không muốn thực sự là lực lượng hạng hai!

---

## 1. Biểu đồ Venn – Logic

**Bài 1.** Giữa các số tự nhiên từ 1 đến 1000 có bao nhiêu số chia hết cho:
- a) Ít nhất một số
- b) Đúng một số
- c) Ít nhất hai số
- d) Đúng hai số
từ các số 2, 3, 5.

**Bài 2.** Có bao nhiêu số nguyên tố cùng nhau với 1200 và không quá 1200?

**Bài 3.** Có bao nhiêu số có:
- a) ba chữ số
- b) bốn chữ số
- c) $n$ chữ số
biết rằng các chữ số của nó chỉ là 1, 2, 3 nhưng tất cả đều có mặt ít nhất một lần?

**Bài 4.** Có bao nhiêu số có 4 chữ số mà trong các chữ số của nó các chữ số 1 hoặc 2 ít nhất có một số tham gia?

**Bài 5.** Người ta ghi các số tự nhiên từ 1 đến 10000 lên bảng. Sau đó người ta xóa các số có chứa chữ số 0 hoặc 1. Hỏi các số bị xóa và các số còn lại nhóm nào nhiều hơn?

**Bài 6.** Bình không chú ý đến đồng phục của mình. Trên chiếc áo có diện tích tổng thể là $1\text{ m}^2$ đã 5 lần mẹ bạn ấy phải vá năm miếng vải mỗi miếng diện tích $30\text{ dm}^2$, sáu lần phải vá các miếng vải $20\text{ dm}^2$. Hỏi có tồn tại không hai miếng vải phủ đè lên nhau ít nhất $3\text{ dm}^2$?

**Bài 7.** Có bao nhiêu cách bỏ nhầm năm lá thư vào 5 chiếc phong bì sao cho không có phong bì nào có địa chỉ đúng của lá thư cần gửi?
*Đáp số:* 
$$5! - 5 \cdot 4! + C_5^2 \cdot 3! - C_5^3 \cdot 2! + C_5^4 \cdot 1! - C_5^5 \cdot 0! = 44$$

**Bài 8.** Năm cặp vợ chồng ngồi xung quanh một chiếc bàn tròn. Hỏi có bao nhiêu cách sắp xếp sao cho các bà không ngồi cạnh chồng mình (các cách sắp xếp nhận được từ nhau bởi phép quay không tính là khác nhau)?
*Đáp số:*
$$9! - 5 \cdot 2 \cdot 8! + C_5^2 \cdot 2^2 \cdot 7! - C_5^3 \cdot 2^3 \cdot 6! + C_5^4 \cdot 2^4 \cdot 5! - C_5^5 \cdot 2^5 \cdot 4!$$

**Bài 9.** Một đàn lạc đà 7 con đang đi theo hàng dọc trên sa mạc. Để cho hành trình khỏi nhàm chán ông chủ lữ hành mỗi hôm lại thay đổi thứ tự các con lạc đà sao cho ngày hôm nay không có con nào phải thấy con hôm qua đi trước nó. Tất nhiên con đi đầu thì có thể giữ nguyên. Hỏi có bao nhiêu cách sắp xếp du hành đoàn để không hôm nào giống hôm nào?
*Đáp số:*
$$7! - 6 \cdot 6! + C_6^2 \cdot 5! - C_6^3 \cdot 4! + C_6^4 \cdot 3! - C_6^5 \cdot 2! + C_6^6 \cdot 1!$$

---

## 2. Nguyên lý Dirichlet (chuồng và thỏ) I

**Bài 10.** Nhiều nhất có thể cho bao nhiêu số nguyên tố khác nhau, sao cho giữa chúng cứ bất kì ba số đều có tổng là một số nguyên tố?

**Bài 11.** Có thể lấp đầy các ô của bảng $5 \times 5$ bằng các số 1 và $(-1)$ sao cho tổng các số ở mỗi hàng và mỗi cột là khác nhau?

**Bài 12.** Giả sử rằng giữa một số các đồ vật hai loại màu khác nhau, có hai loại hình dạng khác nhau. Chứng minh rằng trong chúng tồn tại hai đồ vật khác nhau cả về hình dạng và màu sắc.
*(Đáp số: đã có lời giải trên forum BTH - LGĐ...)*

**Bài 13.** Chứng minh rằng:
- a) Từ ba số bất kì luôn tìm được 2 số có tổng chia hết cho 2.
- b) Từ năm số bất kì luôn tìm được 3 số có tổng chia hết cho 3.
- c) Từ bảy số bất kì luôn tìm được 4 số có tổng chia hết cho 4.

**Bài 14.** Trên hình lưới ô vuông có 40 hình vuông nhỏ được tô màu. Hỏi từ các hình vuông được tô màu này có luôn tìm được 10 hình vuông sao cho không hai hình nào có điểm chung (không chung cả đỉnh)?
*Hướng dẫn:* Chia mặt phẳng lưới thành những bàn cờ $2 \times 2$. Đánh dấu các vị trí tương đối theo các số I, II, III và IV...

**Bài 15.** Từ bao nhiêu số chính phương ta có thể chọn được hai số sao cho hiệu của chúng chia hết:
- a) Cho 3
- b) Cho 4
- c) Cho 8.

**Bài 16.** Chứng minh rằng trong phần thập phân của số $\pi$ có bộ ba số liên tiếp nhau và bộ số này xuất hiện nhiều vô cùng lần.
*Hướng dẫn:* Số bộ ba chữ số là hữu hạn, còn các số sau dấu phẩy của số $\pi$ là vô hạn.

**Bài 17.** Có 21 số nguyên dương khác nhau và đều nhỏ hơn 70. Chứng minh rằng trong tập các hiệu của hai số nào đó giữa 21 số trên, có ít nhất 4 số bằng nhau.

**Bài 18\*.** Có 7 số tự nhiên khác nhau có tổng là 100. Chứng minh rằng có 3 số có tổng tối thiểu là 50.

**Bài 19\*.** Có 20 số nguyên dương khác nhau và đều nhỏ hơn 70. Chứng minh rằng trong tập các hiệu của hai số nào đó giữa 20 số trên, có ít nhất 4 số bằng nhau.

**Bài 20\*.** Bạn Nam có 100 cái đĩa nhỏ, mỗi cái được đánh một số khác nhau từ 1 đến 100. Nam muốn đặt ra bàn bốn chiếc sao cho tổng các số ở hai chiếc này bằng tổng các số của hai chiếc kia. Ví dụ: $(1) + (7) = (3) + (5)$. Nhưng rất đáng tiếc 75 chiếc đĩa bị thất lạc. Hỏi với 25 chiếc còn lại công việc còn thực hiện được không?

**Bài 21.** Sơn các điểm trên mặt phẳng bằng hai màu xanh và đỏ. Chứng minh rằng tồn tại hai điểm cùng màu có khoảng cách là 1.

**Bài 22.** Sơn các điểm trên mặt phẳng bằng 3 màu. Chỉ ra rằng có một màu nào đó có vô số điểm được sơn.

**Bài 23.** Sơn các điểm trên mặt phẳng bằng 2 màu. Chứng minh rằng với bất kì $n$ nguyên dương, tồn tại đa giác lồi có $n$ đỉnh cùng màu.

**Bài 24.** 
- a) Sơn tất cả các điểm bằng hai màu. Chứng minh rằng tồn tại hình chữ nhật có các đỉnh đồng màu.
- b) Giải bài toán với $n$ màu?
- c) Trong phần a) và b) nói trên, bài toán có thể chứng minh được với một số $k$ cố định (nhiều hữu hạn) các điểm được sơn trên mặt phẳng, cùng đều có hình chữ nhật có các đỉnh cùng màu. Hãy chỉ ra số $k$ trong từng trường hợp.

*Đáp số:*
- a) Lưới ô vuông $3 \times 7$ thỏa mãn điều kiện này.
- b) Lưới ô vuông kích thước $(n+1)(n \cdot C_{n+1}^2 + 1)$.

**Bài 25.** Khoảng cách đôi một của tập nhiều vô cùng các điểm cũng có nhiều vô cùng giá trị khác nhau.

**Bài 26.** 
- a) Trong mặt phẳng lưới ô vuông có thể cho nhiều nhất bao nhiêu điểm nút lưới để trung điểm của các đoạn thẳng các điểm này không nằm trên nút lưới?
- b) Cũng câu hỏi đó với hệ lưới lập phương.

**Bài 27.** Trong hình vuông cạnh 300 đơn vị cho 10 điểm. Chứng minh rằng giữa chúng tìm được 2 điểm có khoảng cách nhỏ hơn 142 đơn vị.

**Bài 28.** Trên mặt phẳng hình vuông cạnh 70 cm có vết của 50 phát đạn. Hãy chỉ ra rằng có hai vết đạn cách nhau không quá 15 cm.

**Bài 29.** Ở giải bóng đá V-Landi sân bóng có chiều rộng 39m, chiều dài 91m. Chứng minh rằng trong quá trình thi đấu luôn được hai cầu thủ có vị trí cách nhau không quá:
- a) 19 m
- b) 15 m.

**Bài 30.** Trong hình vuông cạnh đơn vị cho 51 điểm bất kì. Chứng minh rằng tồn tại 3 điểm nằm trong một vòng tròn bán kính $\frac{1}{7}$.

---

## 3. Nguyên lý Dirichlet II

**Bài 31.** Trong bảng ô vuông $100 \times 100$ người ta điền một trong ba số 1, 2, 3 vào các ô vuông nhỏ, sau đó tính tổng các số của từng hàng, từng cột và hai đường chéo rồi ghi riêng biệt các kết quả. Chứng minh rằng luôn tìm được hai số bằng nhau.

**Bài 32.** Từ các đỉnh của một đa giác đều 13 cạnh có thể chọn được không 5 đỉnh, sao cho bất kì hai đỉnh nào trong 5 đỉnh này có khoảng cách khác nhau?
*Đáp án:* Không.

**Bài 33.** Có một chiếc cân hai đĩa, một bên đặt vật cần cân và một bên đặt các quả cân. Người ta muốn cân các vật có khối lượng nguyên từ 1 đến 15 kg mà chỉ dùng số lượng quả cân ít nhất. Cần phải chọn những quả cân có khối lượng như thế nào? Ít nhất bao nhiêu quả?

**Bài 34.** Ở chợ trời "Đừng thắc mắc" người ta thường cân bằng cân 2 đĩa, một bên đặt vật cần cân và một bên đặt không quá 2 quả cân. Muốn cân các trọng lượng nguyên từ 1 đến 16 kg các cao thủ chợ đêm cần dùng những quả cân như thế nào? Ít nhất bao nhiêu quả?
*Đáp số:* 6 quả cân.

**Bài 35.** Ở chợ trời "Sành điệu" người ta thường cân bằng cân 2 đĩa, và sử dụng không quá 2 quả cân. Để cân thuận tiện người ta thường đặt một bên là các quả cân một bên vật cần cân và (nếu cần) có thể đặt thêm chỉ một quả cân. Muốn cân các trọng lượng nguyên từ 1 đến 17 kg các cao thủ chợ đêm cần dùng những quả cân như thế nào? Tối thiểu bao nhiêu quả?
*Đáp số:* 5 quả cân.

**Bài 36.** Dãy số 9 hạng tử $(1, 2, 3, 4, 5, 6, 7, 8, 9)$ được kiến tạo bằng cách lấy tổng của các dãy số 9 hạng tử khác mà trong mỗi dãy đó chỉ hai chữ số có mặt, ví dụ $(0, 2, 2, 0, 0, 2, 2, 0, 0)$. Và phép lấy tổng được thực hiện trên từng hạng tử:
$$(0, 2, 2, 0, 0, 2, 2, 0, 0) + (1, 0, 0, 0, 1, 1, 1, 0, 1) = (1, 2, 2, 0, 1, 3, 3, 0, 1)$$
Hỏi ít nhất phải dùng bao nhiêu dãy số thỏa mãn điều kiện trên?
*Đáp số:* Cần ít nhất 4 dãy thích hợp.

**Bài 37.** Một hình chữ nhật có các cạnh là 5 và 9. Người ta chia thành 10 hình chữ nhật nhỏ có độ dài các cạnh là các số nguyên. Chứng minh rằng có hai hình có diện tích bằng nhau trong các hình chữ nhật này!

**Bài 38.** Trên mặt phẳng cho 100 điểm không có 3 điểm nào thẳng hàng. Các đoạn thẳng nối các điểm đều được sơn màu xanh hoặc đỏ. Chứng minh rằng trong các điểm trên luôn chọn được ít nhất 2 điểm mà từ đó số đoạn thẳng đỏ xuất phát bằng nhau.

**Bài 39.** Chứng minh rằng trong một nhóm 6 người luôn luôn chọn được 3 người hoặc cùng quen nhau hoặc cùng không quen nhau.

**Bài 40.** Có 17 nhà bác học trao đổi với nhau bằng 3 thứ tiếng Anh, Pháp, Việt (hai người chỉ trao đổi bằng một thứ tiếng chung). Chứng minh rằng luôn chọn được 3 người trao đổi với nhau bằng cùng một thứ tiếng.

**Bài 41.** Có 66 diễn viên, bất kì 2 người nào đều đã biểu diễn chung cùng một thể loại nhà hát, lồng tiếng, đóng phim, hay vô tuyến. Biết rằng mỗi cặp hai người chỉ biểu diễn chung một thể loại. Chứng minh rằng có ba diễn viên biểu diễn với nhau cùng thể loại.

**Bài 42.** Trong một thung lũng có 65 con bò của hai làng đang gặm cỏ: gồm các loại nâu, trắng, đen và loang lổ. Chứng minh rằng nếu không có 5 con bò nào cùng độ tuổi, cùng màu lông, thì luôn tìm được 3 con bò cùng màu lông, cùng độ tuổi và ở cùng một làng.

**Bài 43.** Trong một tập thể 9 người, người nào cũng quen 7 người khác. Hãy chỉ ra rằng cứ 4 người bất kỳ đều có chung ít nhất một người quen.

**Bài 44.** Loại Toto bóng đá 13 trận, kết quả $(1, X, 2)$. Cần phải chơi ít nhất bao nhiêu vé để trong các vé đã chơi có ít nhất một cột có ít nhất 5 kết quả đúng?

**Bài 45.** Chứng minh rằng trong một đa giác lồi 10 cạnh (thập giác) luôn tồn tại một đường chéo không song song với bất kì cạnh nào của đa giác.
*Hướng dẫn:* Mỗi cạnh có không quá ba đường chéo song song với nó.

**Bài 46.** Một bàn cờ $12 \times 12$ có một số ô được sơn màu đen hoặc màu trắng. Màu của mỗi ô có thể được thay đổi sang màu ngược lại, nếu trong mỗi lượt người ta đổi màu cả một cột hay cả một hàng. Hỏi trong mọi trường hợp luôn có thể đổi màu sao cho bàn cờ cuối cùng chỉ còn toàn màu đen?
*Đáp số:* Có cấu hình không thể thực hiện được.

**Bài 47.** Trên các ô của bàn cờ $8 \times 8$ được ghi các số nguyên. Mỗi lượt người ta tăng giá trị của một bảng $3 \times 3$ hoặc $4 \times 4$ mỗi ô lên một đơn vị. Hỏi mục đích tất cả các ô có giá trị chia hết cho 10 có luôn luôn đạt được hay không?
*Hướng dẫn:* Không thể. Có 36 bảng $3 \times 3$ và 25 bảng $4 \times 4$, mỗi bảng có 10 cách biến đổi. Do đó có thể tạo thành $10^{36+25} = 10^{61}$ cấu hình có thể tạo được. Từ 64 ô có $10^{64}$ cấu hình.

**Bài 48\*.** Trong một trường học, người ta chia các bạn học sinh vào các đội 10 người. Một học sinh có thể tham gia nhiều đội hoặc không tham gia bất cứ đội nào. Số đội là 500. Chứng minh rằng có thể chia các bạn học sinh vào hai phòng sao cho trong cả hai phòng mỗi đội đều có người của mình.
*Đáp số:* Có thể.

---

## 4. Các bài toán trên bàn cờ

**Bài 49.** Trên bàn cờ vua có thể đi quân mã liên tiếp vào mỗi ô một lần rồi quay lại vị trí ban đầu? Cái gì xảy ra với các bàn cờ $4 \times 4, 5 \times 5, 8 \times 8$?

**Bài 50.** Trên bàn cờ $5 \times 5$ mỗi ô có một con cánh cam. Sau hiệu còi các con cánh cam chuyển sang một ô có chung cạnh với ô vừa đứng. Liệu sau khi đi mỗi ô của bàn cờ vẫn có một con không?

**Bài 51.** Một bàn cờ $8 \times 8$ ở hai góc đối diện mỗi góc một quân cờ. Hỏi có thể phủ kín phần còn lại của bàn cờ bằng những quân domino kích thước $1 \times 2$?

**Bài 52.** Một bàn cờ ở một góc có một quân cờ. Hỏi có thể phủ kín phần còn lại của bàn cờ bằng những quân domino kích thước $1 \times 3$?

**Bài 53.** Có thể đặt một quân cờ vào bàn cờ để phần còn lại có thể phủ kín bằng những quân domino kích thước $1 \times 3$?

**Bài 54.** Có thể phủ bàn cờ $10 \times 10$ bằng các quân domino $1 \times 4$?

> [!NOTE] Định nghĩa Polimino
> **Polimino** là hình được ghép liền cạnh của các hình vuông đơn vị.

**Bài 55.** Có bao nhiêu quân polimino có bề mặt 4 đơn vị (ghép cạnh với cạnh bằng 4 hình vuông)?
*Đáp số:* 5 hình (các tetromino).

**Bài 56.** Tất cả các quân polimino 4 đơn vị mỗi quân sử dụng một lần có thể ghép lại được một hình chữ nhật không?
*Đáp số:* Không được. *(Chú ý: Polimino hình chữ T và cách tô màu bàn cờ).*

**Bài 57.** Có bao nhiêu quân polimino 5 đơn vị?
*Đáp số:* 12 quân (các pentomino).

**Bài 58.** Từ tất cả các quân polimino 5 đơn vị mỗi quân sử dụng một lần có thể ghép lại được một hình chữ nhật. Minh họa bằng hình vẽ. Hình chữ nhật đó kích thước bao nhiêu?
*Đáp số:* Được. Ví dụ $10 \times 6$ hoặc $5 \times 12$.

---

## 5. Hình học tổ hợp

**Bài 59.** Trên mặt phẳng cho $n$ điểm không có 3 điểm nào thẳng hàng. Chứng minh rằng:
- a) Tồn tại một đường thẳng phân chia $k$ điểm riêng biệt từ các điểm còn lại.
- b) Tồn tại đường tròn chứa đúng $k$ điểm bên trong.

**Bài 60.** Cho $n$ điểm tổng quát trên mặt phẳng (không có ba điểm nào thẳng hàng). Chứng minh rằng tồn tại một vòng tròn chạy qua ít nhất ba điểm mà không chứa điểm nào bên trong.

**Bài 61.** Cho 5 điểm tổng quát trên mặt phẳng không cùng nằm trên một đường tròn. Chứng minh rằng có thể chọn ra 2 điểm sao cho đường tròn đi qua ba điểm còn lại phân chia hai điểm nói trên (một bên trong, một bên ngoài).

**Bài 62.** Cho 6 điểm tổng quát trên mặt phẳng. Nối tất cả các cặp hai điểm bằng những đoạn thẳng. Có thể sơn các đoạn thẳng bằng 5 màu sao cho từ mỗi đỉnh luôn có năm cạnh xuất phát hay không?

**Bài 63.** Cho $n$ điểm tổng quát trên mặt phẳng. Chứng minh rằng có thể sơn bằng $k$ màu sao cho khi nối các điểm cùng màu bằng đoạn thẳng có chính màu ở đỉnh thì các đoạn thẳng khác màu không cắt nhau.

**Bài 64.** Trên mặt phẳng cho $n$ điểm tổng quát. Hỏi có thể kẻ nhiều nhất bao nhiêu đường thẳng từ các điểm này?

**Bài 65.** Cho 6 điểm. Các đường thẳng qua trung điểm các đoạn thẳng được xác định bởi sáu điểm trên có thể tạo nên bao nhiêu giao điểm?

**Bài 66.** Cho 5 đường thẳng. Xét các đường phân giác của các đường thẳng này. Hỏi các đường này có thể có nhiều nhất bao nhiêu giao điểm?
*Đáp số:* $40 + 60 + 10 = 110$ giao điểm.

**Bài 67.** Xét một đa giác lồi. Giả sử không có 3 đường chéo nào đồng quy. Hỏi các đường chéo cắt nhau tại bao nhiêu điểm?
*Đáp số:* $C_n^4$.

**Bài 68.** Vẽ trên mặt phẳng $n$ đường tròn. Hãy sơn những phần mặt phẳng giới hạn bởi các cung tròn bằng 2 màu sao cho những phần mặt phẳng có chung cung tròn thì có màu sơn khác nhau.

**Bài 69.** Một cái bánh ga tô hình hộp chữ nhật một chiều bị cắt bằng 5 nhát và một chiều khác bị cắt bằng 8 nhát. Peter được cắt một nhát theo một đường thẳng. Cậu ta được lấy tất cả các phần mà dao chạm phải. Hỏi nhiều nhất có thể được ăn bao nhiêu miếng?

**Bài 70.** $n$ đường thẳng chia mặt phẳng nhiều nhất thành bao nhiêu miền?

---

## 6. Chuyên đề số học

**Bài 71.** Từ các số $1, 2, 3, \dots, 10$ có thể chọn nhiều nhất bao nhiêu số sao cho trong các số này hiệu của bất kỳ hai số đều cho giá trị khác nhau?

**Bài 72.** Từ các số $1, 2, 3, \dots, 10$ có thể chọn nhiều nhất bao nhiêu số sao cho trong các số này tổng của bất kỳ hai số đều cho giá trị khác nhau?

**Bài 73.** Từ các số $1, 2, 3, \dots, 20$ có thể chọn nhiều nhất bao nhiêu số sao cho trong các số này tổng của bất kỳ hai số không nằm trong các số đã chọn?

**Bài 74.** Từ các số $1, 2, 3, \dots, 20$ có thể chọn nhiều nhất bao nhiêu số sao cho trong các số này hiệu của bất kỳ hai số không là 7?

**Bài 75.** Từ các số $1, 2, 3, \dots, 20$ có thể chọn nhiều nhất bao nhiêu số sao cho không có số nào là ước của tích của các số còn lại?

**Bài 76.** Từ các số $1, 2, 3, \dots, 20$ có thể chọn nhiều nhất bao nhiêu số sao cho không có 2 số nào mà một số là ước của số kia?

**Bài 77.** Từ các số $1, 2, 3, \dots, 20$ có thể chọn nhiều nhất bao nhiêu số sao cho không có 2 số nào mà một số gấp 2 lần số kia?

**Bài 78.** Từ các số $1, 2, 3, \dots, 20$ có thể chọn nhiều nhất bao nhiêu số sao cho tích của chúng không chia hết cho 10?

**Bài 79.** Bỏ một số trong các số $1, 2, 3, \dots, 10$ sao cho từ các số còn lại có thể chia thành hai nhóm, mà tích các số trong mỗi nhóm bằng nhau. Số bị loại là số nào?

**Bài 80.** Bỏ một số trong các số $1, 2, 3, \dots, 16$ sao cho từ các số còn lại có thể chia thành hai nhóm, mà tích các số trong mỗi nhóm bằng nhau. Số bị loại là số nào?

---

## 7. Trò chơi – Games

**Bài 81.** Cho một đa giác lồi 12 đỉnh. Hai người chơi. Họ thay nhau nối các đường chéo sao cho những đường chéo mới nối không cắt các đường chéo đã có ở miền trong của đa giác. Người thua là người không thể tiếp tục vẽ thêm. Hỏi người nào có chiến thuật để luôn thắng trận? Tại sao?
*Hướng dẫn:* Dùng đối xứng.

**Bài 82.** Có một thanh sô-cô-la hình bàn cờ $8 \times 8$ và ô phía trên bên trái bị nhiễm độc. Hai người chơi. Đến lượt ai, người đó chọn một ô rồi bẻ hết phần sô-cô-la từ ô đó sang bên phải và xuống dưới. Người thua cuộc là người phải chọn ô bị nhiễm độc. Hãy chỉ ra thuật toán luôn đảm bảo người đi đầu tiên thắng trận.

**Bài 83.** Hai người chơi mỗi người có một màu đen hoặc đỏ, họ thay nhau tô mỗi lần 3 cạnh của một khối hộp lập phương bằng màu của mình. Người thắng trận là người sơn được cả 4 cạnh của một mặt nào đó bằng màu của mình. Hỏi ai có khả năng thắng trận?
*Đáp số:* Người đi thứ 2 có thể cứu vãn tình thế bằng thủ hòa.

**Bài 84.** Trên bàn cờ lưới ô vuông $8 \times 9$. Hai người chơi. Mỗi lần đến lượt người nào đi, người đó phải chọn ra 3 điểm lưới (nút lưới ô vuông) để có thể vẽ được một tam giác không có điểm chung với các tam giác đã vẽ. Người thắng là người đi sau cùng. Ai có thể thắng trận?

**Bài 85.** Hai người chơi. Từ các số $1, 2, 3, \dots, 101$ mỗi người lấy 9 số. Sau 11 lần đi còn lại 2 số. Người đầu tiên thắng nếu hiệu của hai số này là 55. Liệu người đầu tiên luôn luôn thắng trận?
*Đáp số:* Có thể.

**Bài 86.** Trên bàn có 24 viên sỏi. Có thể lấy $k$ viên ($k > 0$) nếu $k$ và số sỏi trên bàn nguyên tố cùng nhau. Hai người chơi. Người lấy viên cuối cùng là người thắng trận. Ai có thể thắng trận? Nếu số sỏi thay đổi các giá trị $n$ khác thì sao?

**Bài 87.** Peter và Pal cùng chơi: Trước tiên Peter nói một số nguyên có một chữ số lớn hơn 1, sau đó Pal nhân số này với một số nguyên có một chữ số lớn hơn 1. Sau đó Peter cũng lại làm như vậy lấy kết quả của Pal nhân với một số nguyên có một chữ số lớn hơn 1. Cuộc chơi cứ tiếp tục như vậy cho đến khi có một người nào đó đạt được kết quả là một số lớn hơn 2000. Hỏi Peter phải bắt đầu bằng số nào để luôn thắng trận?

**Bài 88.** Hai người chơi. Mỗi người lần lượt chiếm một số nguyên. Người thắng cuộc là người chiếm được trước một bộ có ba chữ số liền nhau. Ai có khả năng thắng trận?

**Bài 89.** Có hai nắm sỏi trên bàn: một nắm 8 viên và nắm kia 12 viên. Hai người chơi. Mỗi lần mỗi người chỉ được lấy từ một đống nào đó vài viên (ít nhất 1 viên). Hỏi ai có khả năng thắng trận?

**Bài 90.** Có vài nắm sỏi trên bàn. Ví dụ các nắm có 4, 6, 11, 15, 17, 18 viên. Hai người chơi. Mỗi lần mỗi người được lấy từ một số nắm, mỗi nắm chỉ 1 viên. Ai là người thắng trận?

**Bài 91.** Viết các số nguyên dương thành hàng trên mặt phẳng. Đặt một vòng tròn xanh vào số 8 và vòng tròn đỏ vào số 13. Hai người chơi. Mỗi người chọn một trong hai cái vòng và thay đổi chỗ sao cho luôn đặt vào số bé hơn trước đó và số có vòng xanh luôn lớn hơn số có vòng đỏ. Người thắng là người sau khi đi có đỏ ở số 1 và xanh ở số 2. Ai là người thắng cuộc?

---

## 8. Quy nạp

**Bài 92.** Có thể xếp không các tập hợp con của một tập hợp $n$ phần tử lên một đường tròn sao cho các tập con cạnh nhau có không quá một phần tử khác nhau?

**Bài 93.** Cho $H = \{2, 3, \dots, n\}$, xét tất cả những tập hợp con không rỗng của $H$, trong mỗi tập hợp nhân tất cả các phần tử với nhau rồi lấy tổng nghịch đảo của các giá trị đó. Hỏi kết quả nhận được là bao nhiêu?
*Ví dụ:* Với $n = 4$ thì:
$$\frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{6} + \frac{1}{8} + \frac{1}{12} + \frac{1}{24} = \frac{3}{2}$$

**Bài 94.** Người ta muốn mắc một rèm cửa sổ. Để chia các khoảng cách cho thật đều nhau, đầu tiên người ta mắc ở hai đầu tấm rèm rồi chia đôi và mắc tại điểm giữa, cứ tiếp tục như thế, người ta mắc điểm giữa của các đoạn tiếp theo. Hỏi cần có bao nhiêu cái mắc để phương pháp này thực hiện được?

**Bài 95.** Chia một tam giác thành các tam giác nhỏ không có điểm trong chung sao cho không có ba đỉnh nào thẳng hàng. Chứng minh rằng số tam giác nhỏ chỉ có thể là số lẻ.

**Bài 96.** Có bốn bà, mỗi bà biết một chuyện nhưng chỉ có thể nói chuyện được với nhau qua điện thoại để trao đổi với bạn câu chuyện của mình (hai chiều). Hỏi cần ít nhất bao nhiêu cú điện thoại để tất cả mọi người biết được các câu chuyện của mỗi người (mỗi bà kể chuyện của mình và những chuyện đã được nghe từ bà khác trước đó)?

**Bài 97.** Chứng minh rằng từ các số $1, 2, \dots, 3^k$ luôn có thể chọn $2^k$ các số khác nhau sao cho trung bình cộng của bất kỳ hai số được chọn không nằm trong các số đã chọn.

**Bài 98.** 
- a) Những số chẵn nào có thể viết được thành tổng của hai số chẵn dương và các số này là hợp số?
- b) Số chẵn nào có thể viết thành tổng của ba số dương lẻ mà các số này đều là hợp số?

---

## 9. Tổng hợp

**Bài 99.** 
- a) Hãy đặt 15 điểm đỏ lên các cạnh của một lục giác sao cho mỗi cạnh có số điểm đỏ bằng nhau.
- b) Giải bài toán trong trường hợp 16 điểm.
- c) Trường hợp 2003 điểm.
- d) 15 điểm đối với một thất giác (7 đỉnh).

**Bài 100.** Đặt 10 điểm đỏ và 14 điểm xanh lên các cạnh của một hình lục giác sao cho trên mỗi cạnh số điểm đỏ bằng số điểm xanh.

**Bài 101.** Hai người chơi thay đổi nhau họ ghi các dấu $(-), (+)$ vào dãy sau (kể cả trước số 1):
$$1 \quad 2 \quad 3 \quad 4 \quad 5 \quad 6 \quad 7 \quad 8 \quad 9$$
- a) Người bắt đầu chơi mục đích là kết thúc bằng tổng đại số cuối cùng của dãy không chia hết cho 3. Người thứ hai thì cố gắng để tổng chia hết cho 3. Hỏi phải chơi như thế nào? Ai có lợi thế hơn?
- b) Tình trạng sẽ thế nào nếu thay đổi vai trò người đi đầu thắng nếu tổng không chia hết cho 3?

**Bài 102.** Kết thúc một cuộc chơi tất cả mọi người bắt tay nhau ra về. Giữa chừng có một người quen của một vị khách đến đón bạn, người đó bắt tay với những người mà anh ta quen biết. Vì thế có tổng cộng 68 cái bắt tay. Hỏi người mới đến quen bao nhiêu người trong cuộc chơi?

**Bài 103.** Sáu đội bóng tham gia một giải bóng tất cả các đội đều gặp nhau một lần. Kết thúc giải các đội đạt được 12, 10, 9, 8, 7 và 6 điểm. Hỏi bên thắng trận được bao nhiêu điểm nếu hòa được 1 điểm, thua được 0 điểm?

**Bài 104.** Hai người chơi, người ta thay nhau vẽ các đường chéo của một đa giác đều 2000 đỉnh. Cấm không được vẽ những đường chéo cắt các đường chéo đã vẽ trước đó. Người thua là người sau bước đi của anh ta thì xuất hiện một tứ giác mà chưa có đường chéo nào được vẽ. Ai có chiến thuật để thắng trận?

**Bài 105.** Có hay không một buổi gặp mặt mà bất cứ người nào cũng có đúng 6 người bạn và bất kỳ hai người nào đều có đúng hai người bạn chung?

**Bài 106.** 
- a) Lotto ở vương quốc Ngọc Anh: từ 7 số người ta lấy ra 3 số làm giải thưởng. Hỏi phải mua bao nhiêu vé để chắc chắn có ít nhất một vé có 2 số trúng thưởng (mỗi vé được đánh 3 số tùy ý)?
- b) Cũng ở vương quốc này có một trò chơi khác: từ bẩy số người ta chỉ rút ra hai số làm giải thưởng nhưng người chơi trên mỗi vé được đánh 3 số. Hỏi cần mua bao nhiêu vé để chắc chắn trúng giải (trúng cả hai số)?

**Bài 107.** Ngọc Anh được các bạn cùng lớp tặng cho 3 bông hoa: 1 bông hồng, 1 bông thủy tiên, 1 bông lan. Cô ta có 3 bình đựng hoa: một bình sứ Trung Quốc, một bình sứ Bát Tràng, một bình sứ Ấn Độ.
- a) Nếu mỗi bình chỉ cắm một bông hoa thì có bao nhiêu cách?
- b) Nếu không có điều kiện ràng buộc trên thì có bao nhiêu cách?

**Bài 108.** Ở vương quốc Ngọc Anh người ta tổ chức Tombola. Rút ra 3 số từ 45 số: $1, 2, 3, \dots, 45$.
- a) Người ta tính rằng nếu mỗi công dân ghi một vé phiếu một cách khác nhau thì có thể xảy ra trường hợp không ai trúng giải độc đắc. Hỏi vương quốc này có nhiều nhất bao nhiêu công dân?
- b) Ở vương quốc này bác John có tất cả các vé số ghi ba số. Hỏi có bao nhiêu phiếu trúng thưởng ít nhất hai số?
- c) Bây giờ ở xứ Ngọc Anh thay đổi cách chơi lotto: từ 45 số phải rút ra 42 số. Hỏi phải chơi bao nhiêu vé để chắc chắn được giải full (tìm được tất cả các số)?
- d) Có bao nhiêu vé khác nhau chung 41 số? Chung 40 số?

---

## 10. Thêm thêm

![Bậc thang tri thức](/assets/images/108-to-hop-pp/them-them-ladder.png)

**Bài 108.1.** Bản đồ dưới đây là thành phố Henry Potter đang sinh sống. Hệ thống đường giao thông là các đường thẳng của lưới ô vuông. Mỗi khối nhà có bề mặt 100m. Các bạn của Potter ở các vị trí A, B, C, D (trên hình vẽ). Hỏi họ tập trung hội họp chỗ nào để tổng chiều dài quãng đường mỗi người phải đi là ít nhất?

<div style="text-align: center; margin: 20px 0;">
  <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
    <rect x="40" y="40" width="200" height="200" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <line x1="80" y1="40" x2="80" y2="240" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="120" y1="40" x2="120" y2="240" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="160" y1="40" x2="160" y2="240" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="200" y1="40" x2="200" y2="240" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="40" y1="80" x2="240" y2="80" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="40" y1="120" x2="240" y2="120" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="40" y1="160" x2="240" y2="160" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="40" y1="200" x2="240" y2="200" stroke="#1e293b" stroke-width="1.5"/>
    <circle cx="40" cy="160" r="5" fill="#1e293b"/>
    <circle cx="160" cy="240" r="5" fill="#1e293b"/>
    <circle cx="240" cy="80" r="5" fill="#1e293b"/>
    <circle cx="120" cy="40" r="5" fill="#1e293b"/>
    <text x="25" y="165" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="end">A</text>
    <text x="160" y="260" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">B</text>
    <text x="255" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="start">C</text>
    <text x="120" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">D</text>
  </svg>
</div>

**Bài 108.2.** Bản đồ xứ "Không Không Thấy" có 35 thành phố (các dấu tròn trên bản đồ) – các đường giao thông là các đường nối các thành phố. Các thành phố cạnh nhau có khoảng cách là 5km. Nhà Vua có hứa với dân chúng là sẽ chọn một số thành phố và ở đó xây dựng các trạm cứu hỏa sao cho không có thành phố nào cách trạm cứu hỏa gần nhất quá 5km.
Hỏi cần có ít nhất bao nhiêu trạm cứu hỏa để đáp ứng dự án này?

<div style="text-align: center; margin: 20px 0;">
  <svg width="270" height="270" viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
    <line x1="35" y1="35" x2="225" y2="35" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="35" y1="73" x2="225" y2="73" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="35" y1="111" x2="225" y2="111" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="35" y1="149" x2="225" y2="149" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="35" y1="187" x2="225" y2="187" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="35" y1="225" x2="187" y2="225" stroke="#1e293b" stroke-width="1.5"/>

    <line x1="35" y1="35" x2="35" y2="225" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="73" y1="35" x2="73" y2="225" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="111" y1="35" x2="111" y2="225" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="149" y1="35" x2="149" y2="225" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="187" y1="35" x2="187" y2="225" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="225" y1="35" x2="225" y2="187" stroke="#1e293b" stroke-width="1.5"/>

    <!-- 35 thành phố -->
    <circle cx="35" cy="35" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="73" cy="35" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="111" cy="35" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="149" cy="35" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="187" cy="35" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="225" cy="35" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>

    <circle cx="35" cy="73" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="73" cy="73" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="111" cy="73" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="149" cy="73" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="187" cy="73" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="225" cy="73" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>

    <circle cx="35" cy="111" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="73" cy="111" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="111" cy="111" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="149" cy="111" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="187" cy="111" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="225" cy="111" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>

    <circle cx="35" cy="149" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="73" cy="149" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="111" cy="149" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="149" cy="149" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="187" cy="149" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="225" cy="149" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>

    <circle cx="35" cy="187" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="73" cy="187" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="111" cy="187" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="149" cy="187" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="187" cy="187" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="225" cy="187" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>

    <circle cx="35" cy="225" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="73" cy="225" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="111" cy="225" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="149" cy="225" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <circle cx="187" cy="225" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
  </svg>
</div>

**Bài 108.3.** Trong hình là bản đồ của hòn đảo Cyberland có 9 thành phố. Khoảng cách các con đường từ thành phố này sang thành phố khác được ghi trên sơ đồ. Trong các cuộc dạo chơi xuất phát từ một địa điểm và tham quan cả 9 thành phố rồi quay lại nơi xuất phát. Hành trình nào có chiều dài nhỏ nhất (tiết kiệm km nhất)?

<div style="text-align: center; margin: 20px 0;">
  <svg width="270" height="270" viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
    <!-- Các cạnh đồ thị -->
    <line x1="135" y1="35" x2="50" y2="85" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="135" y1="35" x2="220" y2="85" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="135" y1="35" x2="135" y2="85" stroke="#1e293b" stroke-width="1.8"/>
    
    <line x1="50" y1="85" x2="135" y2="85" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="135" y1="85" x2="220" y2="85" stroke="#1e293b" stroke-width="1.8"/>
    
    <line x1="50" y1="85" x2="50" y2="185" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="220" y1="85" x2="220" y2="185" stroke="#1e293b" stroke-width="1.8"/>

    <line x1="50" y1="85" x2="90" y2="155" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="220" y1="85" x2="180" y2="155" stroke="#1e293b" stroke-width="1.8"/>

    <line x1="135" y1="85" x2="90" y2="155" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="135" y1="85" x2="180" y2="155" stroke="#1e293b" stroke-width="1.8"/>

    <line x1="50" y1="185" x2="90" y2="155" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="220" y1="185" x2="180" y2="155" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="90" y1="155" x2="180" y2="155" stroke="#1e293b" stroke-width="1.8"/>

    <line x1="50" y1="185" x2="135" y2="235" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="220" y1="185" x2="135" y2="235" stroke="#1e293b" stroke-width="1.8"/>

    <line x1="90" y1="155" x2="135" y2="235" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="180" y1="155" x2="135" y2="235" stroke="#1e293b" stroke-width="1.8"/>

    <!-- Trọng số -->
    <text x="85" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">13</text>
    <text x="180" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">13</text>
    <text x="142" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">5</text>
    <text x="92" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="175" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="35" y="140" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">13</text>
    <text x="228" y="140" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">13</text>
    <text x="75" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="195" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="105" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="165" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="65" y="170" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">5</text>
    <text x="200" y="170" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">5</text>
    <text x="135" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">12</text>
    <text x="105" y="200" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="165" y="200" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>
    <text x="80" y="220" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">13</text>
    <text x="185" y="220" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">13</text>

    <!-- 9 đỉnh -->
    <circle cx="135" cy="35" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="50" cy="85" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="220" cy="85" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="135" cy="85" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="90" cy="155" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="180" cy="155" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="50" cy="185" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="220" cy="185" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="135" cy="235" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  </svg>
</div>

**Bài 108.4.** Từ hòn đảo C = "Cướp Biển" đến đảo K = "Kho báu" có thể đi bằng tàu thủy qua các đảo lân cận. Giá vé mỗi quãng đường được ghi trong sơ đồ. Hỏi cần ít nhất bao nhiêu tiền để có thể đi từ C đến K?

<div style="text-align: center; margin: 20px 0;">
  <svg width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
    <line x1="50" y1="90" x2="110" y2="45" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="50" y1="90" x2="130" y2="155" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="110" y1="45" x2="130" y2="155" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="110" y1="45" x2="205" y2="95" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="130" y1="155" x2="205" y2="95" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="130" y1="155" x2="280" y2="145" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="205" y1="95" x2="280" y2="45" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="205" y1="95" x2="280" y2="145" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="280" y1="145" x2="280" y2="45" stroke="#1e293b" stroke-width="1.8"/>

    <!-- Trọng số -->
    <text x="75" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">20</text>
    <text x="80" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">80</text>
    <text x="127" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">60</text>
    <text x="160" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">10</text>
    <text x="160" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">30</text>
    <text x="205" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">20</text>
    <text x="240" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">70</text>
    <text x="250" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">60</text>
    <text x="288" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">10</text>

    <!-- Các đỉnh -->
    <circle cx="50" cy="90" r="7" fill="#1e293b"/>
    <circle cx="110" cy="45" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="130" cy="155" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="205" cy="95" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="280" cy="145" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="280" cy="45" r="7" fill="#1e293b"/>

    <!-- Nhãn đỉnh -->
    <text x="50" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Cướp biển</text>
    <text x="280" y="30" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Kho báu</text>
  </svg>
</div>

**Bài 108.5.** Từ làng Hencida đến làng Boncida có thể đi bằng xe Buýt qua các làng lân cận. Giá vé được ghi trên sơ đồ. Hỏi cách đi rẻ nhất để đến được từ H đến B?

<div style="text-align: center; margin: 20px 0;">
  <svg width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
    <!-- Đường đi cong và thẳng -->
    <path d="M 40,120 Q 80,85 125,65" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 40,120 Q 90,155 145,110" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 125,65 Q 120,90 145,110" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 125,65 Q 200,30 270,55" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 125,65 Q 185,75 240,95" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 145,110 L 240,95" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 240,95 L 270,55" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 240,95 L 305,150" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 145,110 Q 185,160 305,150" fill="none" stroke="#1e293b" stroke-width="1.8"/>
    <path d="M 270,55 Q 320,100 305,150" fill="none" stroke="#1e293b" stroke-width="1.8"/>

    <!-- Trọng số -->
    <text x="80" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">14</text>
    <text x="90" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">9</text>
    <text x="135" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">4</text>
    <text x="200" y="45" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">9</text>
    <text x="180" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">16</text>
    <text x="190" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">18</text>
    <text x="260" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">4</text>
    <text x="280" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">6</text>
    <text x="220" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">24</text>
    <text x="312" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">12</text>

    <!-- Đỉnh -->
    <circle cx="40" cy="120" r="7" fill="#1e293b"/>
    <circle cx="125" cy="65" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="145" cy="110" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="240" cy="95" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="270" cy="55" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <circle cx="305" cy="150" r="7" fill="#1e293b"/>

    <!-- Nhãn đỉnh -->
    <text x="40" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Hencida</text>
    <text x="305" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Boncida</text>
  </svg>
</div>

---

## 11. Những viên ngọc của xứ sở kim cương

![Những viên ngọc kim cương](/assets/images/108-to-hop-pp/nhung-vien-ngoc-kim-cuong.png)

**Bài 108.6.** Công chúa Ngọc Anh chuẩn bị cho ngày trọng đại. Nàng cất trong két hồng ngọc của mình bộ sưu tầm vòng cổ kim cương quý giá (nhiều hơn 1 bộ). Trên mỗi vòng có số lượng các viên kim cương như nhau. Nếu ta biết có bao nhiêu viên kim cương có trong két ngọc, thì chúng ta cũng biết công chúa có bao nhiêu vòng cổ? Và tất nhiên mỗi vòng cổ được làm từ bao nhiêu viên kim cương?
Ta còn biết số viên kim cương trong tủ có từ 200 đến 300 viên.
Hỏi công chúa có bao nhiêu vòng cổ trước giờ đại sự?

**Bài 108.7.** Số Học hỏi mẹ, những số nào là những số mẹ thích? Mẹ cho Số Học biết hai số nguyên dương may mắn của mình (không nhất thiết khác nhau). Khi gặp, Số Học nói thầm vào tai anh mình – Đại Số tổng của hai số này. Sau đó, nói thầm vào tai em mình – Hình Học tích của hai số này. Hai người kia không ai nghe được số của nhau. Khi ba anh em gặp nhau, Đại Số nói:
- *Tôi không tìm ra các số.*
Lúc đó Hình Học cũng nói:
- *Tôi cũng không tìm ra.*
Đại Số sau một lát suy nghĩ thì kêu lên:
- *Vậy tôi đã biết đó là hai số nào!*
Vậy hai số may mắn của Mẹ là số nào? Đại Số có tìm ra các số này không?

**Bài 108.8.** Công chúa Ngọc Anh có 8 viên kim cương trọng lượng khác nhau. Hãy giúp công chúa xác định viên nặng nhất và viên nhẹ nhất đồng thời với số lần cân ít nhất!

---

> [!TIP] Lời khuyên học tập
> Để giải quyết các bài toán tổ hợp khó, hãy luôn tìm kiếm các yếu tố bất biến (invariants), tính đối xứng hoặc chia bài toán về các mô hình đồ thị, ma trận quen thuộc. Đừng ngại thử nghiệm với những trường hợp nhỏ trước khi đi đến lời giải tổng quát!
