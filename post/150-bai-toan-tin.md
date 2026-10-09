---
title: 150 bài Toán Tin
description: Chúng tôi xin giới thiệu 150 bài Toán Tin của thầy Lê Minh Hoàng (ĐHSP
  Hà Nội) để bạn đọc tham khảo.
category: Toán học
type: Bài tập
date: '2022-07-21'
tags:
- Toán học
- CNTT
- Toán Tin
---

Chúng tôi xin giới thiệu 150 bài Toán Tin của thầy Lê Minh Hoàng (ĐHSP Hà Nội) để bạn đọc tham khảo.

## 01. TÍNH TOÁN SONG SONG

**Biểu thức đủ** là một dãy ký tự gồm các biến ký hiệu bằng chữ cái thường tiếng Anh: a..z, các phép toán cộng ký hiệu +, nhân ký hiệu * và các dấu ngoặc (,). Được định nghĩa như sau:

1. Mỗi biến a,b,…,z là một biểu thức đủ

2. Nếu X và Y là biểu thức đủ thì (X+Y) và (X*Y) cũng là biểu thức đủ.

3. Những biểu thức nào không xây dựng được theo 2 nguyên tắc trên không là biểu thức đủ.

*VD: Theo cách định nghĩa trên thì (a+(b+(c+d))) hoặc ((a+b)+(c* d)) là các biểu thức đủ.
Cho biết thời gian tính phép + là P, thời gian tính phép * là Q, người ta định nghĩa thời gian tính toán một biểu thức đủ như sau:

- Nếu biểu thức đủ chỉ gồm 1 biến (a..z) thì thời gian tính toán là 0

- Nếu X và Y là 2 biểu thức đủ; thời gian tính X là TX thời gian tính Y là TY thì thời gian tính

**(X+Y) là max(TX,TY)+P** thời gian tính **(X*Y) là max(TX,TY)+Q
Từ 1 biểu thức đủ người ta có thể biến đổi về một biểu thức tương đương bằng các luật:

- Giao hoán: (X+Y) ⇔ (Y+X); (X*Y) ⇔ (Y* X)

- Kết hợp: (X+(Y+Z)) ⇔((X+Y)+Z); (X*(Y* Z)) ⇔ ((X*Y)* Z)

Yêu cầu: Cho trước một biểu thức đủ E dưới dạng xâu ký tự hãy viết chương trình:

1. Tìm thời gian tính toán biểu thức E

2. Hãy biến đổi biểu thức E thành biểu thức E’ tương đương với nó sao cho thời gian tính E’ là ít nhất có thể.

Dữ liệu vào được đặt trong file văn bản PO.INP như sau:

- Dòng thứ nhất ghi 2 số P, Q cách nhau 1 dấu cách (P,Q≤100)

- Tiếp theo là một số dòng, mỗi dòng ghi 1 biểu thức đủ. Kết quả ra đặt trong file văn bản PO.OUT như sau:

Với mỗi biểu thức E trong file PO.INP ghi ra file PO.OUT 3 dòng

- Dòng thứ nhất: Ghi thời gian tính toán E

- Dòng thứ hai: Ghi biểu thức E’

- Dòng thứ ba: Ghi thời gian tính toán E’

*Chú ý: Để cho gọn, mỗi biểu thức đủ trong input/output file có thể viết mà không cần đến cặp dấu ngoặc ngoài cùng, dữ liệu vào được coi là đúng đắn và không cần kiểm tra.
**Ví dụ:
![150 bài Toán Tin 1](assets/images/150-bai-toan-tin-150-bai-toan-tin-01.jpg)

## 02. BẢNG SỐ

Cho một bảng hình chữ nhật kích thước M x N với M, N nguyên dương. M, N ≤ 50. Hình chữ nhật này được chia thành M x N ô vuông bằng nhau với kích thước đơn vị bởi các đường song song với các cạnh, trên ô vuông [i, j] ghi số nguyên A[i, j] (2 ≤ A[i, j] ≤ 50).

Từ mảng A ta lập mảng B mà B[i, j] được xây dựng như sau:

Biểu diễn số A[i, j] thành tổng các số nguyên tố với ràng buộc: trong biểu diễn đó có nhiều nhất chỉ một số nguyên tố xuất hiện hai lần. Trong các cách biểu diễn, chọn ra biểu diễn nhiều hạng tử nhất thì B[i, j] bằng số số hạng của biểu diễn này kể cả bội (nếu có).

Ví dụ:

Nếu A[i, j] = 10 = 2 + 3 + 5 thì B[i, j] = 3;

Nếu A[i, j] = 12 = 2 + 2 + 3 + 5 thì B[i, j] = 4;

Chú ý: Không được biểu diễn A[i, j] = 10 = 2 + 2 + 2 + 2 + 2 để có B[i, j] = 5 vì như vậy không thoả mãn ràng buộc

1. Dữ liệu vào được cho bởi Text file INP trong đó:

   - Dòng đầu ghi hai số M, N

   - M dòng sau, dòng thứ i ghi N phần tử trên dòng i của bảng A: A[i, 1], A[i, 2], …, A[i, N] hai phần tử liên tiếp cách nhau ít nhất một dấu trống.

2. Kết quả ghi ra Text file OUT.

   Giá trị bảng B, mỗi dòng của bảng ghi trên một dòng của file, hai phần tử liên tiếp cách nhau ít nhất một dấu trống.

3. Hãy tìm hình chữ nhật lớn nhất được tạo bởi các ô mang giá trị bằng nhau của bảng B. Ghi tiếp ra file OUT.B1 một dòng gồm 5 số là: diện tích lớn nhất tìm được, toạ độ trên trái và dưới phải của hình chữ nhật có diện tích lớn nhất đó.

## 03.   CARGO

Bản đồ một kho hàng hình chữ nhật kích thước mxn được chia thành các ô vuông đơn vị (m hàng, n cột: các hàng đánh số từ trên xuống dưới, các cột đánh số từ trái qua phải). Trên các ô của bản đồ có một số ký hiệu:

- Các ký hiệu # đánh dấu các ô đã có một kiện hàng xếp sẵn,

- Một ký hiệu *: Đánh dấu ô đang có một xe đẩy

- Một ký hiệu $: Đánh dấu ô chứa kiện hàng cần xếp

- Một ký hiệu @: Đánh dấu vị trí ô mà cần phải xếp kiện hàng B vào ô đó

- Các ký hiệu dấu chấm “.”: Cho biết ô đó trống

Cần phải dùng xe đẩy ở * để đẩy kiện hàng ở $ đến vị trí @ sao cho trong quá trình di chuyển cũng như đay hàng, không chạm vào những kiện hàng đã được xếp sẵn. (Xe đay có thể di chuyển sang một trong 4 ô chung cạnh với ô đang đứng). Nếu có nhiều phương án thì chỉ ra một phương án sao cho xe đay phải di chuyển qua ít bước nhất.

Các *hướng di chuyển được chỉ ra trong hình dưới đây
![150 bài toán tin lê minh hoàng](assets/images/150-bai-toan-tin-150-bai-toan-tin.jpg)

**Dữ liệu:** Vào từ file văn bản CARGO.INP

- Dòng 1: Ghi hai số nguyên dương m, n cách nhau một dấu cách (m, n ≤ 80)

- m dòng tiếp theo, dòng thứ i ghi đủ n ký hiệu trên hàng thứ i của bản đồ theo đúng thứ tự từ trái qua phải. Các ký hiệu được ghi liền nhau

**Kết quả**: Ghi ra file văn bản CARGO.OUT

- Dòng 1: Ghi số bước di chuyển xe đNy để thực hiện mục đích yêu cầu, nếu không có phương án khả thi thì dòng này ghi số -1

- Dòng 2: Nếu có phương án khả thi thì dòng này ghi các ký tự liền nhau thể hiện hướng di chuyển của xe đNy R (**East**, **West**, **South**, **North**). Các chữ cái thường (e,w,s,n) thể hiện bước di chuyển không đNy hàng, các chữ cái in hoa (E,W,S,N) thể hiện bước di chuyển có đNy hàng.

**Ví dụ**:

![150 bài Toán Tin 2](assets/images/150-bai-toan-tin-150-bai-toan-tin-03.jpg)

## 04.   DÃY CON

Cho một dãy gồm n ( n ≤ 1000) số nguyên dương A1, A2, …, An và số nguyên dương k (k ≤ 50). Hãy tìm dãy con gồm nhiều phần tử nhất của dãy đã cho sao cho tổng các phần tử của dãy con này chia hết cho k.

Dữ liệu vào: file văn bản DAY.INP

- Dòng đầu tiên chứa hai số n, k ghi cách nhau bởi ít nhất 1 dấu trống.

- Các dòng tiếp theo chứa các số A1, A2, …, An được ghi theo đúng thứ tự cách nhau ít nhất một dấu trống hoặc xuống dòng (CR-LF).

Kết quả: ghi ra file văn bản DAY.OUT

- Dòng đầu tiên ghi m là số phần tử của dãy con tìm được.

- Các dòng tiếp theo ghi dãy m chỉ số các phần tử của dãy đã cho có mặt trong dãy con tìm được. Các chỉ số ghi cách nhau ít nhất một dấu trắng hoặc một dấu xuống dòng.

***Ví dụ:*
| DAY.INP | DAY.OUT |
| --- | --- |
| 10 3 | 9 |
| 2 3 5 7 | 1 |
| 9 6 12 7 | 6 |
| 11 15 |  |

## 05. XÂU FIBINACCI

Xét dãy các xâu F1, F2, F3, …, FN, … trong đó:

F1 = ‘A’

F2 = ‘B’

FK+1 = FK + FK-1 (K ³ 2).

*Ví dụ:
F1 = ‘A’

F2 = ‘B’ F3 = ‘BA’ F4 = ‘BAB’

F5 = ‘BABBA’

F6 = ‘BABBABAB’

F7 = ‘BABBABABBABBA’

F8 = ‘BABBABABBABBABABBABAB’

F9 = ‘BABBABABBABBABABBABABBABBABABBABBA’

Cho xâu S độ dài không quá 25, chỉ bao gồm các ký tự ‘A’ và ‘B’. Hãy xác định số lần xuất hiện xâu S trong xâu FN, N ≤ 35. Chú ý: hai lần xuất hiện của S trong FN không nhất thiết phải là các xâu rời nhau hoàn toàn.

**Dữ liệu:** vào từ file văn bản FIBISTR.INP, bao gồm nhiều dòng, mỗi dòng có dạng N S. Giữa N và S có đúng 1 dấu cách. Dữ liệu vào là chuNn, không cần kiểm tra.

**Kết quả:** Đưa ra file văn bản FIBISTR.OUT, mỗi dòng dữ liệu ứng với một dòng kết quả ra.

## 06.   VÒNG SỐ NGUYÊN TỐ

Một vòng tròn chứa 2n vòng tròn nhỏ (Xem hình vẽ). Các vòng tròn nhỏ được đánh số từ 1 đến n theo chiều kim đồng hồ. Cần điền các số tự nhiên từ 1 đến 2n mỗi số vào một vòng tròn nhỏ sao cho tổng của hai số trên hai vòng tròn nhỏ liên tiếp là số nguyên tố. Số điền ở vòng tròn nhỏ 1 luôn là số 1.

![vong so nguyen to](assets/images/150-bai-toan-tin-vong-so-nguyen-to.jpg)

**Dữ liệu:** Vào từ file văn bản CIRCLE.INP chứa số nguyên dương n (1 < n < 10)

**Kết quả:** Ghi ra file văn bản CIRCLE.OUT:

- Dòng đầu tiên ghi số lượng các cách điền số tìm được (k).

- Dòng thứ i trong số k dòng tiếp theo ghi các số trong các vòng tròn nhỏ bắt đầu từ vòng tròn nhỏ 1 đọc theo thứ tự của các vòng tròn nhỏ.

## 07.   ĐÔI BẠN

Trước kia Tuấn và Mai là hai bạn cùng lớp còn bây giờ hai bạn học khác trường nhau. Cứ mỗi sáng, đúng 6 giờ cả hai đều đi từ nhà tới trường của mình theo con đường mất ít thời gian nhất (có thể có nhiều con đường đi mất thời gian bằng nhau và đều ít nhất). Nhưng hôm nay, hai bạn muốn gặp nhau để bàn việc họp lớp cũ nhân ngày 20-11.

Cho biết sơ đồ giao thông của thành phố gồm N nút giao thông được đánh số từ 1 đến N và M tuyến đường phố (mỗi đường phố nối 2 nút giao thông). Vị trí nhà của Mai và Tuấn cũng như trường của hai bạn đều nằm ở các nút giao thông. Cần xác định xem Mai và Tuấn có cách nào đi thoả mãn yêu cầu nêu ở trên, đồng thời họ lại có thể gặp nhau ở nút giao thông nào đó trên con đường tới trường hay không ? (Ta nói Tuấn và Mai có thể gặp nhau tại một nút giao thông nào đó nếu họ đến nút giao thông này tại cùng một thời điểm). Nếu có nhiều phương án thì hãy chỉ ra phương án để Mai và Tuấn gặp nhau sớm nhất.

Dữ liệu vào được đặt trong tệp FRIEND.INP:

- Dòng đầu tiên chứa 2 số nguyên dương N, M (1 ≤ N ≤ 100);

- Dòng tiếp theo chứa 4 số nguyên dương Ha, Sa, Hb, Sb lần lượt là số hiệu các nút giao thông tương ứng với: Nhà Tuấn, trường của Tuấn, nhà Mai, trường của

- Dòng thứ i trong số M dòng tiếp theo chứa 3 số nguyên dương A, B, T. Trong đó A & B là hai đầu của tuyến đường phố i. Còn T là thời gian (tính bằng giây ≤ 1000) cần thiết để Tuấn (hoặc Mai) đi từ A đến B cũng như từ B đến A.

Giả thiết là sơ đồ giao thông trong thành phố đảm bảo để có thể đi từ một nút giao thông bất kỳ đến tất cả các nút còn lại.

Kết quả : Ghi ra tệp văn bản FRIEND.OUT

- Dòng 1: Ghi từ YES hay NO tuỳ theo có phương án giúp cho hai bạn gặp nhau hay không. Trong trường hợp có phương án:

- Dòng 2: Ghi thời gian ít nhất để Tuấn tới trường

- Dòng 3: Ghi các nút giao thông theo thứ tự Tuấn đi qua

- Dòng 4: Ghi thời gian ít nhất để Mai tới trường

- Dòng 5: Ghi các nút giao thông theo thứ tự Mai đi qua

- Dòng 6: Ghi số hiệu nút giao thông mà hai bạn gặp nhau

- Dòng 7: Thời gian sớm nhất tính bằng giây kể từ 6 giờ sáng mà hai bạn có thể gặp nhau.

Các số trên một dòng của Input/Output file ghi cách nhau ít nhất một dấu cách.

Ví dụ : Với sơ đồ giao thông sau: (N=6,M=7, Ha=1, Sa=6, Hb=2, Sb=5)

![150 bài Toán Tin 3](assets/images/150-bai-toan-tin-doi-ban.jpg)

## 08.   CỬA SỔ VĂN BẢN

Xét văn bản T gồm N ký tự (N ≤ 1000000, N không cho trước) và văn bản P gồm M ký tự (0 < M ≤ 100). Cửa sổ độ dài W là một đoạn văn bản gồm W ký tự liên tiếp của T (M < W ≤ 1000). Nói cửa sổ W chứa mẫu P nếu tồn tại một cách xoá một số ký tự liên tiếp của W để nhận được P.

Hai cửa sổ của T gọi là khác nhau nếu chúng bắt đầu từ những vị trí khác nhau trong T. Hãy xác định số cửa sổ khác nhau trong văn bản T chứa P.

**Dữ liệu:
- File văn bản INP

- Dòng đầu chứa hai số nguyên W, M

- Dòng thứ hai chứa M ký tự của văn bản P;

- File TXT chứa văn bản T

**Kết quả:
Đưa ra file WINDOW.OUT một số nguyên xác định số cửa sổ tìm được theo yêu cầu.

Lưu ý: Đa số trường hợp, file WINDOWT.TXT không phải là Text file, có nghĩa là nó chứa các ký tự trong khoảng  #0..#255 (file of Char). Như vậy tính cả CR(#13) và LF(#10)

| Ví dụ: |  |
| --- | --- |
| WINDOWP.INP |  |
| 4 2 is |  |

## 09. VÒNG TRÒN CON

Cho hai dãy số nguyên a1, a2, …, am và b1, b2, …, bn (2 ≤ m, n ≤ 100)

Các số này được xếp quanh hai vòng tròn A và B: các số ai quanh vòng tròn A và các số bj quanh vòng tròn B. Vòng tròn C được gọi với các số quanh nó c1, c2, …, cp được gọi là vòng tròn con của A (hoặc của B) nếu tồn tại một cách xoá bớt các số của A (hoặc của B) để được vòng tròn C. Hãy tìm vòng tròn C là vòng tròn con của cả A và B với số phần tử (p) lớn nhất có thể.

Chú ý: Các số trên 3 vòng tròn A, B, C được xếp theo đúng thứ tự trong dãy theo cùng một chiều kim đồng hồ.

**Dữ liệu:** Vào từ file văn bản CIRCLE.INP

- Dòng đầu chứa hai số nguyên m, n cách nhau ít nhất một dấu cách.

- m dòng tiếp theo, dòng thứ i ghi số ai

- n dòng tiếp theo, dòng thứ j ghi số bj

**Kết quả:** Đưa ra file văn bản CIRCLE.OUT

- Dòng đầu ghi số nguyên p

- p dòng sau, dòng thứ k ghi số ck.

## 10.   BỐ TRÍ PHÒNG HỌP

Có n cuộc họp đánh số từ 1 đến n đăng ký làm việc tại một phòng hội thảo. Cuộc họp i cần được bắt đầu ngay sau thời điểm si và kết thúc tại thời điểm fi. Hỏi có thể bố trí phòng hội thảo phục vụ được nhiều nhất bao nhiêu cuộc họp, sao cho **khoảng** thời gian làm việc của hai cuộc họp bất kỳ là không giao nhau.

Dữ liệu vào từ file văn bản ACTIVITY.INP

- Dòng đầu tiên chứa số nguyên dương n ( n ≤ 10000)

- Dòng thứ i trong số n dòng tiếp theo chứa hai số nguyên dương si, fi (si < fi ≤ 32000) (i: 1 ≤ i ≤n).

Kết quả: Ghi ra file ACTIVITY.OUT

- Dòng đầu tiên ghi số K là số các cuộc họp được chấp nhận phục vụ

- K dòng tiếp theo liệt kê số hiệu các cuộc họp được chấp nhận theo thứ tự từ cuộc họp đầu tiên tới cuộc họp cuối cùng , mỗi dòng ghi số hiệu một cuộc họp.

## 11.   MUA VÉ TÀU HOẢ

Tuyến đường sắt từ thành phố A đến thành phố B đi qua một số nhà ga. Tuyến đường có thể biểu diễn bởi một đoạn thẳng, các nhà ga là các điểm trên đó. Tuyến đường bắt đầu từ A và kết thúc ở B, vì thế các nhà ga sẽ được đánh số bắt đầu từ A (có số hiệu là 1) và B là nhà ga cuối cùng.

Giá vé đi lại giữa hai nhà ga chỉ phụ thuộc vào khoảng cách giữa chúng. Cách tính giá vé được cho trong bảng sau đây:

| Khoảng cách giữa hai nhà ga (X) | Giá vé |
| --- | --- |
| 0 < X ≤ L1 | C1 |
| L1 < X ≤ L2 | C2 |
| L2 < X ≤ L3 | C3 |

Vé để đi thẳng từ nhà ga này đến nhà ga khác chỉ có thể đặt mua nếu khoảng cách giữa chúng không vượt quá L3. Vì thế nhiều khi để đi từ nhà ga này đến nhà ga khác ta phải đặt mua một số vé. Hơn thế nữa, nhân viên đường sắt yêu cầu hành khách chỉ được giữ đúng một vé khi đi trên tàu và vé đó sẽ bị huỷ khi hành khách xuống tàu.

Ví dụ, trên tuyến đường sắt cho như sau:

![bai toan tin mua ve tau hoa](assets/images/150-bai-toan-tin-bai-toan-tin-mua-ve-tau-hoa.jpg)

Để đi từ ga 2 đến ga 6 không thể mua vé đi thẳng. Có nhiều cách mua vé để đi từ ga 2 đến ga 6: Chẳng hạn đặt mua vé từ ga 2 đến ga 3 mất chi phí C2 sau đó mua vé từ ga 3 đến ga 6 mất chi phí C3, và chi phí tổng cộng khi đi theo cách này là C2 + C3. Hoặc mua vé từ ga 2 đến ga 4 mất chi phí C2, sau đó mua vé từ ga 4 đến ga 5 mất chi phí C2 và mua vé từ ga 5 đến ga 6 mất chi phí C1, như vậy chi phí tổng cộng là 2C2 + C1. Lưu ý rằng mặc dù khoảng cách giữa ga 2 và ga 6 bằng 12 = 2 L2 nhưng không được phép mua 2 vé với giá C2 để đi thẳng từ ga 2 đến ga 6.

**Yêu cầu:** Tìm cách đặt mua vé để đi lại giữa hai nhà ga cho trước với chi phí mua vé là nhỏ nhất.

Dữ liệu vào từ file văn bản RTICKET.INP

- Dòng đầu tiên ghi các số nguyên L1, L2, L3, C1, C2, C3 (1 ≤ L1 < L2 < L3 ≤ 109; 1 ≤ C1 < C2 < C3≤ 109) theo đúng thứ tự liệt kê ở trên.

- Dòng thứ hai chứa số lượng nhà ga N ( 2 ≤ N ≤ 10000).

- Dòng thứ ba ghi hai số nguyên s, f là các chỉ số của hai nhà ga cần tìm cách đặt mua vé với chi phí nhỏ nhất để đi lại giữa chúng.

- Dòng thứ i trong số N – 1 dòng tiếp theo ghi số nguyên là khoảng cách từ nhà ga A (ga 1) đến nhà ga thứ i + 1. Chi phí ít nhất từ nhà ga đầu tiên A đến nhà ga cuối cùng B không vượt quá 109.

Kết quả ghi ra file văn bản RTICKET.OUT chi phí nhỏ nhất tìm được.

## 12.   XIN CHỮ KÝ

Giám đốc một công ty trách nhiệm hữu hạn muốn xin chữ ký của ông Kiến trúc sư trưởng thành phố phê duyệt dự án xây dựng trụ sở làm việc của công ty. Ông kiến trúc sư trưởng chỉ ký vào giấy phép khi bà thư ký của ông ta đã ký duyệt vào giấy phép. Bà thư ký làm việc tại tầng thứ M của toà nhà trụ sở làm việc gồm M tầng của Văn phòng Kiến trúc sư trưởng thành phố. Các tầng của toà nhà được đánh số từ 1 đến M, từ thấp đến cao. Mỗi tầng của toà nhà có N phòng được đánh số từ 1 đến N từ trái qua phải. Trong mỗi phòng chỉ có một nhân viên làm việc. Giấy phép chỉ được bà thư ký ký duyệt khi đã có ít nhất một nhân viên ở tầng M đã ký xác nhận. Ngoài bà thư ký, một nhân viên bất kỳ chỉ ký xác nhận vào giấy phép khi có ít nhất một trong các điều kiện sau được thoả mãn:

1. Nhân viên đó làm việc ở tầng 1

2. Giấy phép đã được ký xác nhận bởi nhân viên làm việc ở cùng số phòng trong tầng sát dưới

3. Giấy phép đã được ký xác nhận bởi nhân viên làm việc ở cùng số phòng trong tầng sát trên

4. Giấy phép đã được ký xác nhận bởi nhân viên làm việc ở phòng bên cạnh

Mỗi một nhân viên (kể cả bà thư ký) khi ký xác nhận đều đòi một khoản lệ phí. Hãy chỉ ra cách xin được chữ ký của Kiến trúc sư trưởng đòi hỏi tổng lệ phí phải trả là nhỏ nhất (giả thiết rằng riêng chữ ký của Kiến trúc sư trưởng không mất lệ phí).

Dữ liệu vào từ file văn bản SIGN.INP

- Dòng đầu tiên chứa ba số M, N, P (1 ≤ M ≤ 50; 1 ≤ N ≤ 100; 1 ≤ P ≤ N) ở đây P là số phòng bà thư ký.

- Dòng thứ i trong số M dòng tiếp theo chứa N số nguyên dương theo thứ tự là lệ phí phải trả cho các nhân viên ở các phòng 1, 2, …, N trên tầng Các số này không vượt quá 109 và giả thiết rằng tổng chi phí cần trả cũng không vượt quá 109.

Kết quả: Ghi ra file văn bản SIGN.OUT
- Dòng đầu tiên ghi 2 số F, K theo thứ tự là chi phí cần trả và số lượng phòng cần đi qua.

- K dòng tiếp theo, mỗi dòng ghi số tầng và số phòng của một phòng theo thứ tự cần đi qua. (Các số trên 1 dòng của input/output file cách nhau ít nhất 1 dấu trống)

## 13.   LẮC NẠM KIM CƯƠNG

Lắc là một đồ trang sức rất được các cô gái ưa chuộng. Chính vì vậy mà chúng phải được chế tạo thật đẹp và đa dạng. Xét việc chế tạo lắc có m mắt xích, mỗi mắt được nạp một viên kim cương. Có n loại viên kim cương khác nhau, n ≤ 7; 2  ≤  m  ≤  27-n + 19.

Hai lắc được gọi là khác nhau nếu ta không thể tìm cách đặt sao cho các mắt tương ứng có kim cương cùng loại. Lưu ý rằng lắc có hình vòng.

Với m và n cho trước, hãy xác định xem có thể tồn tại bao nhiêu loại lắc khác nhau.

Các loại kim cương được ký hiệu là A, B, C, … Một cấu hình lắc được xác định bởi một xâu m ký tự A, B, C, … và bắt đầu bằng ký tự nhỏ nhất.

Cho số thứ tự l, hãy xác định cấu hình tương ứng (Các cấu hình được sắp xếp theo thứ tự từ điển).

Dữ liệu: Vào từ file BRASLET.INP có dạng

m n l1

l2

…

Kết quả: Đưa ra file BRASLET.OUT

K – Số lượng lắc khác nhau s1

s2

… (si xác định cấu hình lắc tương ứng với li)

## 14.   RẢI SỎI

Xét trò chơi rải sỏi với một người chơi như sau: Cho cây T và một đống sỏi gồm K viên ở mỗi bước người ta lấy 1 viên sỏi từ đống sỏi và đặt vào một nút lá tuỳ chọn.

Nếu nút p có r nút lá và tất cả và tất cả các nút lá đều có sỏi thì người ta gom tất cả các viên sỏi ở lá lại, đặt 1 viên ở nút p, xoá các nút lá của nó và hoàn trả r – 1 viên sỏi còn lại vào đống sỏi.

Trò chơi kết thúc khi đã đặt được 1 viên sỏi vào nút gốc.

Nhiệm vụ đặt ra là theo cấu trúc của cây T, xác định số viên sỏi tối thiểu ban đầu để trò chơi có thể kết thúc bình thường. Cây có n nút ( N ≤ 400), nút gốc được đánh số là 1.

Dữ liệu: vào từ file văn bản STONE.INP

- Dòng đầu: số n

- Dòng thứ i trong số n dòng tiếp theo có dạng: i m i1 i2 … im. Trong đó m là số nút con của nút i; i1, i2, …, im: Các nút con của nút i.

***Kết quả: đưa ra file STONE.OUT*** số lượng viên sỏi tối thiểu cần thiết

## 15.   ĐIỆP VIÊN

Địa bàn hoạt động của một điệp viên là một khu phố mà ở đó chỉ có các đường phố ngang, dọc tạo thành một lưới ô vuông. Với mục đích bảo mật, thay vì tên đường phố, điệp viên đánh số các phố ngang từ 0 đến m và các phố dọc từ 0 đến n. ở một số ngã ba hoặc ngã tư có các trạm kiểm soát. Anh ta đang đứng ở nút giao của hai đường (i1, j1) (j1 – đường ngang; i1 – đường dọc) và cần tới điểm hẹn ở giao của hai đường (i2, j2). Để tránh bị theo dõi, đường đi phải không qua các trạm kiểm soát và cứ tới chỗ rẽ thì nhất thiết phải đổi hướng đi, thậm chí có thể sang đường và đi ngược trở lại. Việc đổi hướng chỉ được thực hiện ở ngã ba hoặc ngã tư. Hãy xác định đường đi ngắn nhất tới điểm hẹn hoặc cho biết không có đường đi đáp ứng được yêu cầu đã nêu.

Dữ liệu: vào từ file SPY.INP

Dòng đầu: m n i1 j1 i2 j2 ( 0 ≤ m, n ≤ 100)

Các dòng sau: mỗi dòng 2 số i, j (toạ độ trạm kiểm soát).

Kết quả: đưa ra file SPY.OUT

Dòng đầu: độ dài đường đi ngắn nhất hoặc thông báo NO nếu không có đường đi.

Các dòng sau: mỗi dòng 2 số i, j chỉ nút tiếp theo cần tới theo đường đi tìm được, bắt đầu là i1 j1 và kết thúc là i2 j2.

## 16.   KHOẢNG CÁCH GIỮA HAI XÂU

Cho hai xâu ký tự S1 và S2, mỗi xâu có độ dài không quá 100 ký tự. Cho phép thực hiện các phép biến đổi sau đây đối với xâu ký tự:

1. Thay thế một ký tự nào đó bởi ký tự khác

2. Đổi chỗ hai ký tự liền nhau

3. Chèn một ký tự vào sau vị trí nào đó

4. Xoá bớt 1 ký tự

Ta gọi khoảng cách giữa hai xâu S1 và S2 là số ít nhất các phép biến đổi nêu trên cần áp dụng đối với xâu S1 để biến nó thành xâu S2.

Yêu cầu: Tính khoảng cách giữa 2 xâu S1, S2 cho trước và chỉ ra thứ tự các phép biến đổi.

 **Ví dụ:** Giả sử S1 = ‘Barney’; S2 = ‘brawny’. Khoảng cách giữa 2 xâu là 4. Dãy các phép biến đổi cần thực hiện là:

1. Thay ký tự 1 của S1 (B) bởi b

2. Đổi chỗ ký tự thứ 2 (a) và thứ 3 (r) của S1.

3. Chèn ký tự w vào S1 sau ký tự thứ

4. Xoá ký tự thứ 5 của S1.

Dãy các phép biến đổi có thể mô tả như sau:

‘Barney’ ® ‘barney’ ® ‘braney’ ® ‘brawney’ ® ‘brawny’

Dữ liệu: vào từ file văn bản STREDIT.INP có cấu trúc như sau:

- Dòng đầu tiên chứa xâu S1

- Dòng thứ hai chứa xâu S2

Kết quả: Ghi ra file văn bản STREDIT.OUT

- Dòng đầu tiên ghi số lượng các phép biến đổi cần sử dụng K

- Mỗi dòng i trong số K dòng tiếp theo mô tả phép biến đổi được sử dụng ở lần thứ i gồm các tham số sau: các tham số ghi trên 1 dòng ghi cách nhau 1 dấu cách.

1, P, C (nếu là phép thay ký tự tại vị trí P bằng ký tự C)

- 2, I, I + 1 (nếu là phép đổi chỗ 2 ký tự thứ I và thứ I + 1)

- 3, P, C (nếu là phép chèn ký tự C vào sau vị trí P)

- 4, P (nếu là phép xoá ký tự thứ P)

## 17.   XẾP LẠI BẢNG SỐ

Cho một bảng ô vuông gồm m hàng và n cột. Các ô được đánh chỉ số theo (hàng, cột) từ (0, 0) đến (m – 1, n – 1). Trên m x n ô người ta viết các số tự nhiên từ 0 đến m x n – 1 theo một thứ tự tuỳ ý. Cho phép đổi chỗ hai số đặt trong hai ô ở thế mã giao chân. Cần tìm cách đổi chỗ các số sao cho thu được bảng có tính chất: **Số ở ô (i, j) là n x i + j**.

***Dữ liệu vào từ file văn bản BOARD.INP:*** các số ghi trên 1 dòng cách nhau ít nhất 1 dấu trống.

- Dòng đầu ghi 2 số m, n (5 ≤ m, n ≤ 80)

- m dòng tiếp theo, dòng thứ i ghi n số tự nhiên theo đúng thứ tự các số ghi trên hàng i của bảng.

Kết quả đưa ra file BOARD.OUT

- Dòng thứ i chứa 4 số X1, Y1, X2, Y2 cho biết tại bước thứ i cần đổi chỗ 2 số tại hai ô (X1, Y1) và (X2, Y2)

## 18.   THĂM KHU TRIỂN LÃM

Một khu triển lãm nghệ thuật có mxn phòng được bố trí trong một hình chữ nhật kích thước mxn (2≤m,n≤ 20). Mỗi phòng biểu diễn bởi một ô và đều có cửa thông với các phòng chung cạnh với nó. Với mỗi một phòng, ta đánh chỉ số theo toạ độ (x, y) của ô (1 ≤hàng x≤m; 1≤cột y≤n) và gán cho nó một chữ cái in hoa (‘A’..’Z’) thể hiện loại nghệ thuật trưng bày tại phòng đó. Có thể vào khu triển lãm ở các phòng có toạ độ (x bất kỳ, y = 1) và có thể đi ra ở các phòng có toạ độ (x bất kỳ, y = n)

![150 bài Toán Tin 4](assets/images/150-bai-toan-tin-150-bai-toan-tin-18.jpg)

Ví dụ với m=10 và n=11

Một vị thủ tướng đi thăm triển lãm có sở thích đặc biệt với một loại nghệ thuật. Yêu cầu của ông ta “rất đơn giản” là không nhất thiết phải đi thăm tất cả các phòng chứa loại nghệ thuật mà ông ta thích nhưng không được đi qua các phòng chứa loại nghệ thuật khác.

Ví dụ: Để đi thăm loại nghệ thuật B, Thủ tướng có thể đi:

(1,1), (1,2), (1,3), (1,4), (1,5), (1,6), (2,6), (3,6), (4,6), (4,7), (4,8), (4,9), (4,10), (5,10), (6,10),(6,11).

***Nhưng không phải luôn tồn tại đường đi như vậy, ví dụ : nếu Thủ tướng muốn đi thăm loại nghệ thuật A thì không thể tìm được một đường đi (Bởi cột 6 của bảng không có một chữ A nào).
Để có đường đi của vị thủ tướng đi thăm loại nghệ thuật A thì những người quản lý triển lãm phải tìm cách đổi loại nghệ thuật tại hai phòng nào đó. Trong ví dụ này thì để có đường đi chúng ta có thể đổi loại nghệ thuật B ở phòng (5,6) cho loại nghệ thuật A ở phòng (3,1) hoặc phòng (3,7), (3,8),

…

Trong những cách đổi đó, người ta thường quan tâm đến việc phải đổi sao cho tổng số phòng phải đổi là ít nhất có thể được. Trong những cách đổi với số cặp phòng phải đổi ít nhất hãy chỉ ra cách đổi mà con đường thủ tướng phải đi là ngắn nhất có thể được. Có thể có nhiều nghiệm thì chỉ cần chỉ ra một nghiệm.

**Dữ liệu vào từ file văn bản TL.INP bao gồm:
- Dòng đầu tiên ghi số m, n

- Dòng thứ hai ghi một chữ cái in hoa thể hiện loại nghệ thuật thủ tướng muốn thăm.

- m dòng tiếp theo, dòng thứ i là một xâu ký tự độ dài n biểu diễn các loại nghệ thuật trong các phòng trên hàng i theo đúng thứ tự từ cột 1 đến cột n.

**Kết quả cho ra file văn bản TL.OUT bao gồm:
- Dòng đầu tiên là số cặp phòng cần đổi (p).

- p dòng tiếp theo mỗi dòng gồm 4 số a, b, c, d có nghĩa là ta cần đổi loại nghệ thuật tại phòng (a,b) cho phòng (c,d).

- Dòng tiếp theo ghi số phòng trên con đường đi ngắn nhất tìm được (q).

- q dòng tiếp theo, mỗi dòng ghi toạ độ x,y thể hiện cho con đường ngắn nhất đó theo đúng thứ tự phòng đi qua.

- Nếu không tồn tại phương án đổi phòng để có đường đi thì ghi vào file OUT một dòng:

NO SOLUTION

***Ví dụ: Với khu triển lãm như trên:
| TL.INP | TL.OUT |
| --- | --- |
| 10 11 | 0 |
| B | 16 |
| BBBBBBFFFFF | 1 1 |
| AAAAABDCCFF | 1 2 |
| AFFFABAACFC | 1 3 |
| BFEFABBBBBD | 1 4 |
| FFDEABAAABA | 1 5 |
| EEDEEEEEABB | 1 6 |
| DDDEEEEEAAB | 2 6 |
| DCCFFFCCABA | 3 6 |
| DCCFFFCCAAA | 4 6 |
| CCCCCCCCCCC | 4 7 |
|  | 4 8 |
|  | 4 9 |
|  | 4 10 |
|  | 5 10 |
|  | 6 10 |
|  | 6 11 |

**
| TL.INP | TL.OUT |
| --- | --- |
| 10 11 | 1 |
| A | 5 6 |
| BBBBBBFFFFF | 18 |
| AAAAABDCCFF | 2 1 |
| AFFFABAACFC | 2 2 |
| BFEFABBBBBD | 2 3 |
| FFDEABAAABA | 2 4 |
| EEDEEEEEABB | 2 5 |
| DDDEEEEEAAB | 3 5 |
| DCCFFFCCABA | 4 5 |
| DCCFFFCCAAA | 5 5 |
| CCCCCCCCCCC | 5 6 |
|  | 5 7 |
|  | 5 8 |
|  | 5 9 |
|  | 6 9 |
|  | 7 9 |
|  | 8 9 |
|  | 9 9 |
|  | 9 10 |
|  | 9 11 |

## 19.   DÒ MÌN

Cho một bãi mìn kích thước mxn ô vuông, trên một ô có thể có chứa một quả mìn hoặc không, để biểu diễn bản đồ mìn đó, người ta có hai cách:

- Cách 1: dùng bản đồ đánh dấu: sử dụng một lưới ô vuông kích thước mxn, trên đó tại ô (i, j) ghi số 1 nếu ô đó có mìn, ghi số 0 nếu ô đó không có mìn

- Cách 2: dùng bản đồ mật độ: sử dụng một lưới ô vuông kích thước mxn, trên đó tại ô (i, j) ghi một số trong khoảng từ 0 đến 8 cho biết tổng số mìn trong các ô lân cận với ô (i, j) (ô lân cận với ô (i, j) là ô có chung với ô (i, j) ít nhất 1 đỉnh).

Giả thiết rằng hai bản đồ được ghi chính xác theo tình trạng mìn trên hiện trường.

Ví dụ: Bản đồ đánh dấu và bản đồ mật độ tương ứng: (m = n = 10)

![150 bài Toán Tin 5](assets/images/150-bai-toan-tin-do-min.jpg)

Về nguyên tắc, lúc cài bãi mìn phải vẽ cả bản đồ đánh dấu và bản đồ mật độ, tuy nhiên sau một thời gian dài, khi người ta muốn gỡ mìn ra khỏi bãi thì vấn đề hết sức khó khăn bởi bản đồ đánh dấu đã bị thất lạc !!. ***Công việc của các lập trình viên là: Từ bản đồ mật độ, hãy tái tạo lại bản đồ đánh dấu của bãi mìn.
** Dữ liệu: Vào từ file văn bản MINE.INP, các số trên 1 dòng cách nhau ít nhất 1 dấu cách
- Dòng 1: Ghi 2 số nguyên dương m, n (2 ≤ m, n ≤ 80)

- m dòng tiếp theo, dòng thứ i ghi n số trên hàng i của bản đồ mật độ theo đúng thứ tự từ trái qua phải.

**Kết quả: Ghi ra file văn bản MINE.OUT, các số trên 1 dòng ghi cách nhau ít nhất 1 dấu cách
- Dòng 1: Ghi tổng số lượng mìn trong bãi

- m dòng tiếp theo, dòng thứ i ghi n số trên hàng i của bản đồ đánh dấu theo đúng thứ tự từ trái qua phải.

Các bài tiếp theo, mời bạn đọc tải tại đây [150 BAI TOAN TIN – LE MINH HOANG](/assets/docs/150-BAI-TOAN-TIN-LE-MINH-HOANG.pdf)
