---
title: 100 đề Toán Tin (Tin học & Nhà trường)
description: GIA SƯ THÔNG MINH xin gửi tới bạn đọc TUYỂN TẬP 100 ĐỀ TOÁN TIN (100 đề Toán
  Tin được trích từ tạp chí Tin học & Nhà trường). Bản PDF và Word, mời các bạn tải
category: CNTT
type: Bài tập
date: '2024-10-02'
tags:
- CNTT
- Tin học
- Toán Tin
- Tin học nhà trường
---

GIA SƯ THÔNG MINH xin gửi tới bạn đọc TUYỂN TẬP 100 ĐỀ TOÁN TIN (100 đề Toán Tin được trích từ tạp chí Tin học & Nhà trường). Bản PDF và Word, mời các bạn tải ở cuối bài viết

## Phần 1: ĐỀ BÀI 100 đề Toán Tin (Tin học & Nhà trường)

### Bài 1/1999 – Trò chơi cùng nhau qua cầu

(Dành cho học sinh Tiểu học)

Bốn người cần đi qua một chiếc cầu. Do cầu yếu nên mỗi lần đi không quá hai người, và vì trời tối nên phải cầm đèn mới đi được. Bốn người đi nhanh chậm khác nhau, qua cầu với thời gian tương ứng là 10 phút, 5 phút, 2 phút và 1 phút. Vì chỉ có một chiếc đèn nên mỗi lần qua cầu phải có người mang đèn trở về cho những người kế tiếp. Khi hai người đi cùng nhau thì qua cầu với thời gian của người đi chậm hơn. Ví dụ sau đây là một cách đi:

- Người 10 phút đi với người 5 phút qua cầu, mất 10 phút.

- Người 5 phút cầm đèn quay về, mất 5 phút.

- Người 5 phút đi với người 2 phút qua cầu, mất 5 phút.

- Người 2 phút cầm đèn quay về, mất 2 phút.

- Người 2 phút đi với người 1 phút qua cầu, mất 2 phút.

Thời gian tổng cộng là `10+5+5+2+2 = 24` phút.

Em hãy tìm cách đi khác với tổng thời gian càng ít càng tốt, và nếu dưới `19` phút thì thật tuyệt vời!

### Bài 2/1999 – Tổ chức tham quan

(Dành cho học sinh THCS)

Trong đợt tổ chức đi tham quan danh lam thắng cảnh của thành phố Hồ Chí Minh, Ban tổ chức hội thi Tin học trẻ tổ chức cho $N$ đoàn (đánh từ số $1$ đến $N$) mỗi đoàn đi thăm quan một địa điểm khác nhau. Đoàn thứ $i$ đi thăm địa điểm ở cách Khách sạn Hoàng Đế $d_i$ km ($i=1,2,…,N$). Hội thi có $M$ xe taxi đánh số từ $1$ đến $M$ ($M\geqslant N$) để phục vụ việc đưa các đoàn đi thăm quan. Xe thứ $j$ có mức tiêu thụ xăng là $v_j$ đơn vị thể tích/km.

**Yêu cầu:** Hãy chọn $N$ xe để phục vụ việc đưa các đoàn đi thăm quan, mỗi xe chỉ phục vụ một đoàn, sao cho tổng chi phí xăng cần sử dụng là ít nhất.

Dữ liệu: File văn bản P2.INP:

- Dòng đầu tiên chứa hai số nguyên dương $N$, $M$ ($N \leqslant M\leqslant 200$)

- Dòng thứ hai chứa các số nguyên dương $d_1, d_2, …, d_N$

- Dòng thứ ba chứa các số nguyên dương $v_1, v_2, …, V_M$

- Các số trên cùng một dòng được ghi khác nhau bởi dấu trắng

Kết quả: Ghi ra file văn bản P2.OUT:

- Dòng đầu tiên chứa tổng lượng xăng dầu cần dùng cho việc đưa các đoàn đi thăm quan (không tính lượt về);

- Dòng thứ i trong số $N$ dòng tiếp theo ghi chỉ số xe phục vụ đoàn $i$ ($i=1, 2, …, N$).

Ví dụ:

| P2.INP |  | P2.OUT |
| --- | --- | --- |
| 3 4 7 5 9 17 13 15 10 |  | 256 2 3 4 |

### Bài 3/1999 – Mạng tế bào

(Dành cho học sinh THPT)

Mạng tế bào có dạng một lưới ô vuông hình chữ nhật. Tại mỗi nhịp thời gian: mỗi ô của lưới chứa tín hiệu là 0 hoặc 1 và có thể truyền tín hiệu trong nó cho một số ô kề cạnh theo một qui luật cho trước. Ô ở góc trên bên trái có thể nhận tín hiệu từ bên ngoài đưa vào. Sau nhịp thời gian đó, tín hiệu ở một ô sẽ là 0 nếu tất cả các tín hiệu truyền đến nó là 0, còn trong trường hợp ngược lại tín hiệu trong nó sẽ là 1. Một ô không nhận được tín hiệu nào từ các ô kề cạnh với nó sẽ giữ nguyên tín hiệu đang có trong nó. Riêng đối với ô trên trái, sau khi truyền tín hiệu chứa trong nó đi, nếu có tín hiệu vào thì ô trên trái sẽ chỉ nhận tín hiệu này, còn nếu không có tín hiệu nào thì ô trên trái cũng hoạt động giống như các ô khác. ở trạng thái đầu tín hiệu trong tất cả các ô là 0.

**Yêu cầu:** Cho trước số nhịp thời gian $T$ và dãy tín hiệu vào $S$ là một dãy gồm T ký hiệu $S_1$,…, $S_T$, trong đó $S_i$ là `0` hoặc `1` thể hiện có tín hiệu vào, ngược lại $S_i$ là $X$ thể hiện không có tín hiệu vào tại nhịp thời gian thứ $i$ ($1 \leqslant i \leqslant T$), hãy xác định trạng thái của lưới sau nhịp thời gian thứ $T.$

Dữ liệu: vào từ file văn bản P3.INP:

- Dòng đầu tiên chứa 3 số nguyên $M$, $N$, $T$ theo thứ tự là số dòng, số cột của lưới và số nhịp thời gian ($1<M, N \leqslant 200$; $T \leqslant 100$);

- Dòng thứ hai chứa xâu tín hiệu vào $S$;

- $M$ dòng tiếp theo mô tả qui luật truyền tin. Dòng thứ $i$ trong số $M$ dòng này chứa $N$ số $a_{i1}, a_{i2}, …, a_{iN}$, trong đó giá trị của $a_{ij}$ sẽ là `1, 2, 3, 4, 5, 6, 7, 8` tương ứng lần lượt nếu ô $(i, j)$ phải truyền tin cho ô kề cạnh bên trái, bên phải, bên trên, bên dưới, bên trên và bên dưới, bên trái và bên phải, bên trên và bên trái, bên dưới và bên phải (xem hình vẽ); còn nếu ô $(i, j)$ không phải truyền tín hiệu thì $a_{ij}=0.$

![tuyển tập 100 đề toán tin](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image001-2.png)

Kết quả: Ghi ra file văn bản P3.OUT gồm M dòng, mỗi dòng là một xâu gồm N ký tự 0 hoặc 1 mô tả trạng thái của lưới sau nhịp thời gian thứ T.

Ví dụ:

| P3.INP |  | P3.OUT |
| --- | --- | --- |
| 2 2 5 101XX 2 4 2 1 |  | 11 01 |

Quá trình biến đổi trạng thái được diễn tả trong hình dưới đây:

| 0 | 0 |  |  | 1 | 0 |  |  | 0 | 1 |  |  | 1 | 0 |  |  | 1 | 1 |  |  | 1 | 1 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 |  |  | 0 | 0 |  |  | 0 | 0 |  |  | 0 | 1 |  |  | 1 | 0 |  |  | 0 | 1 |  |  |

### Bài 4/1999 – Trò chơi bốc sỏi

(Dành cho học sinh Tiểu học)

Trên mặt đất có một đống sỏi có 101 viên. Hai em học sinh Hoàng và Huy chơi trò chơi như sau: Mỗi em đến lượt đi phải bốc ra từ đống sỏi trên tối thiểu là 1 viên và tối đa là 4 viên. Người thua là người phải bốc viên sỏi cuối cùng. Giả sử Hoàng là người được bốc trước, Huy bốc sau. Các em thử nghĩ xem ai là người thắng cuộc, Hoàng hay Huy? Và người thắng cuộc phải suy nghĩ gì và thực hiện các bước đi của mình ra sao?

### Bài 5/1999 – 12 viên bi

(Dành cho học sinh THCS)

Có 12 hòn bi giống hệt nhau về kích thước, hình dáng và khối lượng. Tuy nhiên trong chúng lại có đúng một hòn bi kém chất lượng: hoặc nhẹ hơn hoặc nặng hơn bình thường. Dùng một cân bàn hai bên, bạn hãy dùng 3 lần cân để tìm ra được viên bi đó. Cần chỉ rõ rằng viên bi đó là nặng hơn hay nhẹ hơn.

Viết chương trình mô phỏng việc tổ chức cân các hòn bi trên. Dữ liệu về hòn bi kém chất lượng do người sử dụng chương trình nắm giữ. Yêu cầu trình bày chương trình đẹp và mỹ thuật.

### Bài 6/1999 – Giao điểm các đường thẳng

(Dành cho học sinh THPT)

Trên mặt phẳng cho trước n đường thẳng. Hãy tính số giao điểm của các đường thẳng này. Yêu cầu tính càng chính xác càng tốt.

Các đường thẳng trên mặt phẳng được cho bởi 3 số thực A, B, C với phương trình Ax + By + C = 0, ở đây các số A, B không đồng thời bằng 0.

Dữ liệu vào của bài toán cho trong tệp B6.INP có dạng sau:

- Dòng đầu tiên ghi số n

- n dòng tiếp theo, mỗi dòng ghi 3 số thực A, B, C cách nhau bởi dấu cách.

- Kết quả của bài toán thể hiện trên màn hình.

### Bài 7/1999 – Miền mặt phẳng chia bởi các đường thẳng

(Dành cho học sinh THPT)

Xét bài toán tương tự như bài 6/1999 nhưng yêu cầu tính số miền mặt phẳng được chia bởi n đường thẳng này:

Trên mặt phẳng cho trước n đường thẳng. Hãy tính số miền mặt phẳng được chia bởi các đường thẳng này. Yêu cầu tính càng chính xác càng tốt.

Các đường thẳng trên mặt phẳng được cho bởi 3 số thực `A`, `B`, `C` với phương trình `Ax + By + C = 0`, ở đây các số `A`, `B` không đồng thời bằng `0`.

Dữ liệu vào của bài toán cho trong tệp B7.INP có dạng sau:

- Dòng đầu tiên ghi số `n`

- `n` dòng tiếp theo, mỗi dòng ghi 3 số thực `A`, `B`, `C` cách nhau bởi dấu cách.

Kết quả của bài toán thể hiện trên màn hình.

### Bài 8/1999 – Cân táo

(Dành cho học sinh Tiểu học)

Mẹ đi chợ về mua cho Nga 27 quả táo giống hệt nhau về kích thước và khối lượng. Tuy nhiên người bán hàng nói rằng trong số các quả táo trên có đúng một quả có khối lượng nhẹ hơn. Em hãy dùng một chiếc cân bàn hai bên để tìm ra quả táo nhẹ đó. Yêu cầu số lần cân là nhỏ nhất.

Các em hãy giúp bạn Nga tìm ra quả táo nhẹ đó đi. Nếu các em tìm ra quả táo đó sau ít hơn 5 lần cân thì đã là tốt lắm rồi.

### Bài 9/1999 – Bốc diêm

(Dành cho học sinh Tiểu học)

Trên bàn có 3 dãy que diêm, số lượng que diêm của các dãy này lần lượt là 3, 5 và 8. Hai bạn Nga và An chơi trò chơi sau: Mỗi bạn đến lượt mình được quyền (và phải) bốc một số que diêm bất kỳ từ một dãy trên. Người thắng là người bốc được que diêm cuối cùng.

Ai là người thắng cuộc trong trò chơi trên? Và bạn đó phải bốc diêm như thế nào? Các bạn hãy cùng suy nghĩ với Nga và An nhé.

### Bài 10/1999 – Dãy số nguyên

(Dành cho học sinh THCS)

Dãy các số tự nhiên được viết ra thành một dãy vô hạn trên đường thẳng:

`1234567891011121314...` (1)

Hỏi số ở vị trí thứ 1000 trong dãy trên là số nào?

Em hãy làm bài này theo hai cách: Cách 1 dùng suy luận logic và cách 2 viết chương trình để tính toán và so sánh hai kết quả với nhau.

Tổng quát bài toán trên: Chương trình yêu cầu nhập số K từ bàn phím và in ra trên màn hình kết quả là số nằm ở vị trì thứ K trong dãy (1) trên. Yêu cầu chương trình chạy càng nhanh càng tốt.

### Bài 11/1999 – Dãy số Fibonaci

(Dành cho học sinh THCS)

Như các bạn đã biết dãy số Fibonaci là dãy 1, 1, 2, 3, 5, 8, …. Dãy này cho bởi công thức đệ qui sau:

F1 = 1, F2 =1, Fn = Fn-1 + Fn-2 với n > 2

1. Chứng minh khẳng định sau:

Mọi số tự nhiên N đều có thể biểu diễn duy nhất dưới dạng tổng của một số số trong dãy số Fibonaci.

N = akFk + ak-1Fk-1 +…+a1F1

Với biểu diễn như trên ta nói N có biểu diễn Fibonaci là akak-1a2a1

2. Cho trước số tự nhiên N, hãy tìm biểu diễn Fibonaci của số N.

Input:

Tệp văn bản P11.INP bao gồm nhiều dòng. Mỗi dòng ghi một số tự nhiên.

Output:

Tệp P11.OUT ghi kết quả của chương trình: trên mỗi dòng ghi lại biểu diễn Fibonaci của các số tự nhiên tương ứng trong tệp P11.INP.

### Bài 12/1999 – N-mino

(Dành cho học sinh THPT)

N-mino là hình thu được từ N hình vuông $1\times 1$ ghép lại (cạnh kề cạnh). Hai n-mino được gọi là đồng nhất nếu chúng có thể đặt chồng khít lên nhau.

Bạn hãy lập chương trình tính và vẽ ra tất cả các N-mino trên màn hình. Số n nhập từ bàn phím.

Ví dụ: Với N=3 chỉ có hai loại N-mino sau đây:

![100 đề Toán Tin (Tin học & Nhà trường)](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image002.png)

3-mino thẳng    và      3-mino hình thước thợ

Chú ý: Gọi Mn là số các n-mino khác nhau thì ta có M1=1, M2=1, M3=2, M4=5, M5=12, M6=35,…

Yêu cầu bài giải đúng và trình bày đẹp.

### Bài 13/1999 – Phân hoạch hình chữ nhật

(Dành cho học sinh THPT)

Một hình vuông có thể chia thành nhiều hình chữ nhật có các cạnh song song với cạnh hình vuông (xem Hình vẽ). Xây dựng cấu trúc dữ liệu và lập chương trình mô tả phép chia đó. Tính xem có bao nhiêu cách chia như vậy.

![100 đề Toán Tin (Tin học & Nhà trường) 1](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image003-2.png)

Input

Dữ liệu nhập vào từ tệp P13.INP bao gồm hai số tự nhiên là n, m – kích thước hình chữ nhật.

Output

Dữ liệu ra nằm trong tệp P13.OUT có dạng sau:

- Dòng đầu tiên ghi số K là tổng số các phép phân hoạch.

- Tiếp theo là K nhóm, mỗi nhóm cách nhau bằng một dòng trống.

- Mỗi nhóm dữ liệu bao gồm các cặp tọa độ của các hình chữ nhật nằm trong phân hoạch.

### Bài 14/2000 – Tìm số trang sách của một quyển sách

(Dành cho học sinh Tiểu học)

Để đánh số các trang sách của 1 quyển sách cần tất cả 1392 chữ số. Hỏi quyển sách có tất cả bao nhiêu trang?

### Bài 15/2000 – Hội nghị đội viên

(Dành cho học sinh Tiểu học)

Trong một hội nghị liên chi đội có một số bạn nam và nữ. Biết rằng mỗi bạn trai đều quen với N các bạn gái và mỗi bạn gái đều quen với đúng N bạn trai. Hãy lập luận để chứng tỏ rằng trong hội nghị đó số các bạn trai và các bạn gái là như nhau.

### Bài 16/2000 – Chia số

(Dành cho học sinh THCS)

Bạn hãy chia N2 số 1, 2, 3, …., N2-1, N2 thành N nhóm sao cho mỗi nhóm có số các số hạng như nhau và có tổng các số này cũng bằng nhau.

### Bài 17/2000 – Số nguyên tố tương đương

(Dành cho học sinh THCS)

Hai số tự nhiên được gọi là Nguyên tố tương đương nếu chúng có chung các ước số nguyên tố. Error: Reference source not foundVí dụ các số 75 và 15 là nguyên tố tương đương vì cùng có các ước nguyên tố là 3 và 5. Cho trước hai số tự nhiên N, M. Hãy viết chương trình kiểm tra xem các số này có là nguyên tố tương đương với nhau hay không.

### Bài 18/2000 – Sên bò

(Dành cho học sinh THCS và THPT)

Trên lưới ô vuông một con sên xuất phát từ đỉnh (0,0) cần phải đi đến điểm kết thúc tại (N,0) (N là số tự nhiên cho trước).

Qui tắc đi: Mỗi bước (x1, y1) –> (x2, y2) thoả mãn điều kiện (sên bò):

- x2 = x1 + 1

- y1 – 1 <= y2 <= y1 + 1

Tìm một cách đi sao cho trong quá trình đi nó có thể lên cao nhất trên trục tung (tức là tọa độ y đạt cực đại). Chỉ cần đưa ra một nghiệm.

Input

Số N được nhập từ bàn phím.

Output

Output ra file P5.OUT có dạng:

- Dòng đầu tiên ghi 2 số: m, h. Trong đó m là số các bước đi của con sên để đến được vị trí đích, h ghi lại độ cao cực đại đạt được của con sên.

- m dòng tiếp theo, mỗi dòng ghi ra lần lượt các tọa độ (x,y) là các bước đi của sên trên lưới.

Yêu cầu kỹ thuật

Các bạn có thể mô tả các bước đi của con sên trên màn hình đồ họa. Để đạt được mục đích đó số N cần được chọn không vượt quá 50. Mặc dù không yêu cầu nhưng những lời giải có mô phỏng đồ họa sẽ có điểm cao hơn nếu không mô phỏng đồ họa.

### Bài 19/2000 – Đa giác

(Dành cho học sinh THPT)

Hãy tìm điều kiện cần và đủ để N số thực dương a1, a2, …, aN tạo thành các cạnh liên tiếp của một đa giác N cạnh trên mặt phẳng. Giả sử cho trước N số a1, a2, …, aN thỏa mãn điều kiện là các cạnh của đa giác, bạn hãy lập chương trình biểu diễn và vẽ đa giác trên.

Input

Input của bài toán là tệp P6.INP bao gồm 2 dòng, dòng đầu tiên ghi số N, dòng thứ hai ghi N số thực cách nhau bởi dấu cách.

Output

Đầu ra của bài toán thể hiện trên màn hình.

Chú ý: Phần lý thuyết của bài toán cần được chứng minh một cách chặt chẽ.

### Bài 20/2000 – Bạn Lan ở căn hộ số mấy?

(Dành cho học sinh Tiểu học)

Nhà Lan ở trong một ngôi nhà 8 tầng, mỗi tầng có 8 căn hộ. Một hôm, các bạn trong lớp hỏi Lan:

“Nhà bạn ở căn hộ số mấy?”.

“Các bạn hãy thử hỏi một số câu, mình sẽ trả lời tất cả câu hỏi của các bạn, nhưng chỉ nói “đúng” hoặc “không” thôi. Qua các câu hỏi đó các bạn thử đoán xem mình ở căn hộ số bao nhiêu”- Lan trả lời.

Bạn Huy nói:

“Mình sẽ hỏi, có phải bạn ở căn hộ số 1, số 2,…, số 63 không. Như vậy với nhiều nhất 63 câu hỏi mình sẽ biết được bạn căn hộ nào.”

Bạn Nam nói:

“Còn mình chỉ cần đến 14 câu, 7 câu đủ để biết bạn ở tầng mấy và 7 câu có thể biết chính xác bạn ở căn hộ số mấy”.

Còn em, em phải hỏi nhiều nhất mấy lần để biết được bạn Lan ở căn hộ số bao nhiêu?

### Bài 21/2000 – Những trang sách bị rơi

(Dành cho học sinh Tiểu học)

Một cuốn sách bị rơi mất một mảng. Trang bị rơi thứ nhất có số 387, còn trang cuối cũng gồm 3 chữ số 3, 8, 7 nhưng được viết theo một thứ tự khác.

Hỏi có bao nhiêu trang sách bị rơi ra?

### Bài 22/2000 – Đếm đường đi

(Dành cho học sinh THCS)

Cho hình sau:

a) Bạn hãy đếm tất cả các đường đi từ A đến B. Mỗi đường đi chỉ được đi qua mỗi đỉnh nhiều nhất là 1 lần.

b) Bạn hãy tìm tất cả các đường đi từ A đến D, sao cho đường đi đó qua mỗi cạnh đúng một lần.

c) Bạn hãy tìm tất cả các đường đi qua tất cảc các cạnh của hình, mỗi cạnh đúng một lần, sao cho:

- Điểm bắt đầu và điểm kết thúc trùng nhau.

- Điểm bắt đầu và điểm kết thúc không trùng nhau

### Bài 23/2000 – Quay Rubic

(Dành cho học sinh THPT)

Rubic là một khối lập phương gồm 3´3´3 = 27 khối lập phương con. Mỗi mặt rubic gồm 3´3 = 9 mặt của một lớp 9 khối lập phương con. ở trạng thái ban đầu, mỗi mặt rubic được tô một màu. Các mặt khác nhau được tô các màu khác nhau. Giả sử ta đang nhìn vào một mặt trước của rubic. Có thể kí hiệu màu các mặt như sau: F: màu mặt trước là mặt ta đang nhìn; U: màu mặt trên; R: màu mặt phải; B: màu mặt sau; L: màu mặt bên trái; D: màu mặt dưới.

Một lớp gồm 3´3 khối lập phương con có thể quay 90 độ nhiều lần, trục quay đi qua tâm và vuông góc với mặt đang xét. Kết quả sau khi quay là khối lập phương 3´3´3 với các màu mặt đã bị đổi khác.

Một xâu vòng quay liên tiếp rubic có thể mô tả bằng xâu các chữ cái của U, R, F, D, B, L, trong đó mỗi chữ cái là kí hiệu một vòng quay cơ sở: quay mặt tương ứng 90 độ theo chiều kim đồng hồ. Hãy viết chương trình giải 3 bài toán dưới đây:

1. Cho 2 xâu INPUT khác nhau, kiểm tra xem liệu nếu áp dụng với trạng thái đầu có cho cùng một kết quả hay không?

2. Cho một xâu vào, hãy xác định số lần cần áp dụng xâu vào đó cho trạng thái đầu rubic để lại nhận được trạng thái đầu đó.

1. Cho 2 xâu INPUT khác nhau, kiểm tra xem liệu nếu áp dụng với trạng thái đầu có cho cùng một kết quả hay không?

2. Cho một xâu vào, hãy xác định số lần cần áp dụng xâu vào đó cho trạng thái đầu rubic để lại nhận được trạng thái đầu đó.

### Bài 24/2000 – Sắp xếp dãy số

(Dành cho học sinh Tiểu học)

Cho dãy số: 3, 1, 7, 9, 5. Cho phép 3 lần đổi chỗ, mỗi, lần được đổi chỗ hai số bất kỳ. Em hãy sắp xếp lại dãy số trên theo thứ tự tăng dần.

### Bài 25/2000 – Xây dựng số

(Dành cho học sinh THCS)

Cho các số sau: 1, 2, 3, 5, 7. Chỉ dùng phép toán cộng hãy dùng dãy trên để tạo ra số: 43, 52.

Ví dụ để tạo số 130 bạn có thể làm như sau: 123 + 7 = 130.

### Bài 26/2000 – Tô màu

(Dành cho học sinh THCS)

Cho lưới ô vuông 4×4, cần phải tô màu các ô của lưới. Được phép dùng 3 màu: Xanh, đỏ, vàng. Điều kiện tô màu là ba ô bất kỳ liền nhau theo chiều dọc và ngang phải khác màu nhau. Hỏi có bao nhiêu cách như vậy, hãy liệt kê tất cả các cách.

### Bài 27/2000 – Bàn cờ

(Dành cho học sinh THPT)

Cho một bàn cờ vuông 8×8, trên đó cho trước một số quân cờ. Ví dụ hình vẽ sau là một bàn cờ như vậy:

![100 bai toan tin - ban co](assets/images/100-de-toan-tin-tin-hoc-nha-truong-100-bai-toan-tin-ban-co.jpg)

Dữ liệu nhập được ghi trên tệp BANCO.TXT bao gồm 8 dòng, mỗi dòng là một sâu nhị phân có độ dài bằng 8. Vị trí các quân cờ ứng với số 1, các ô trống ứng với số 0. Ví dụ tệp BANCO.TXT ứng với bàn cờ trên:

```python
01010100
10011001
10100011
00010100
00100000
01010001
10011000
01000110
```

Hãy viết chương trình tính số quân cờ liên tục lớn nhất nằm trên một đường thẳng trên bàn cờ. Đường thẳng ở đây có thể là đường thẳng đứng. đường nằm ngang hoặc đường chéo. Kết quả thể hiện trên màn hình.

Với ví dụ nêu trên, chương trình phải in trên màn hình kết quả là 4.

### Bài 28/2000 – Đổi tiền

(Dành cho học sinh Tiểu học)

Giả sử bạn có nhiều tờ tiền loại 1, 2 và 5 ngàn đồng. Hỏi với các tờ tiền đó bạn có bao nhiêu cách đổi tờ 10 ngàn đồng? Hãy liệt kê các cách đổi.

### Bài 29/2000 – Chọn bạn

(Dành cho học sinh THCS)

Trong một trại hè người ta tình cờ chọn ra một nhóm 6 học sinh. Chứng minh rằng sẽ tìm được 3 trong số 6 bạn đó sao cho 3 bạn này hoặc đã quen nhau (đôi một) từ trước hoặc chưa hề quen nhau. Em hãy chỉ ra cách tìm 3 bạn đó.

### Bài 30/2000 – Phần tử yên ngựa

(Dành cho học sinh THCS)

Cho bảng A kích thước MxN. Phần tử Aij được gọi là phần tử yên ngựa nếu nó là phần tử nhỏ nhất trong hàng của nó đồng thời là phần tử lớn nhất trong cột của nó. Ví dụ trong bảng số sau đây:

```python
15 3 9
55 4 6
76 1 2
```

thì phần tử A22 chính là phần tử yên ngựa.

Bạn hãy lập chương trình nhập từ bàn phím một bảng số kích thước MxN và kiểm tra xem nó có phần tử yên ngựa hay không?

### Bài 31/2000 – Biểu diễn phân số

(Dành cho học sinh PTTH)

Một phân số luôn luôn có thể được viết dưới số thập phân hữu hạn hoặc vô hạn tuần hoàn. Ví dụ:

23/5 = 4.6

3/8 = 0.375

1/3 = 0.(3)

45/56 = 0.803(571428)

….

Trong các ví dụ trên thì các chữ số đặt trong dấu ngoặc chỉ phần tuần hoàn của số thập phân.

Nhiệm vụ của bạn là viết một chương trình nhập tử số (N) và nhập mẫu số (D), sau đó đưa ra kết quả là dạng thập phân của phân số N/D.

Ví dụ chạy chương trình:

Nhap N, D:1 7

1/7 = 0.(142857)_

### Bài 32/2000 – Bài toán 8 hậu

(Dành cho học sinh Tiểu học)

Trên bàn cờ vua hãy sẵp xếp đúng 8 quân Hậu sao cho không còn con nào có thể ăn được con nào. Hãy tìm ra nhiều cách sắp nhất?

### Bài 33/2000 – Mã hoá văn bản

(Dành cho học sinh THCS)

Bài toán sau mô tả một thuật toán mã hoá đơn giản (để tiện ta lấy ví dụ tiếng Anh, các bạn có thể mở rộng cho tiếng Việt):

Tập hợp các chữ cái tiếng Anh bao gồm 26 chữ cái được đánh sô thứ tự từ 0 đến 25 như sau:

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | Z |

Quy tắc mã hoá một ký tự như sau (lấy ví dụ ký tự X):

– Tìm số thứ tự tương ứng của ký tự ta được 23

– Tăng giá trị số này lên 5 ta được 28

– Tìm số dư trong phép chia số này cho 26 ta được 2

– Tra ngược bảng chữ cái ta thu được C.

a. Sử dụng quy tắc trên để mã hoá các dòng chữ sau:

PEACE

HEAL THE WORLD

I LOVE SPRING

b. Hãy tìm ra quy tắc giải mã các dòng chữ sau:

N FR F XYZIJSY

NSKTVRFYNHX

MFSTN SFYNTSFQ ZSNBJVXNYD

### Bài 34/2000 – Mã hoá và giải mã

(Dành cho học sinh THCS)

Theo quy tắc mã hoá ở bài trên (33/2000), hãy viết chương trình cho phép:

– Nhập một xâu ký tự và in ra xâu ký tự đã được mã hóa

– Nhập một xâu ký tự đã được mã hoá và in ra sâu ký tự đã được giải mã.

Ví dụ khi chạy chương trình:

Nhap xau ky tu:

PEACE

Xau ky tu tren duoc ma hoa la:

UJFHJ

Nhap xau ky tu can giai ma:

FR

Xau ky tu tren duoc giai ma la:

AM_

### Bài 35/2000 – Các phân số được sắp xếp

(Dành cho học sinh THPT)

Xét tập F(N) tất cả các số hữu tỷ trong đoạn [0,1] với mẫu số không vượt quá N.

Ví dụ tập F(5):

0/1 1/5 1/4 1/3 2/5 1/2 3/5 2/3 3/4 4/5 1/1

Hãy viết chương trình cho phép nhập số nguyên N nằm trong khoẳng từ 1 đến 100 và xuất ra theo thứ tự tăng dần các phân số trong tập F(N) cùng số lượng các phân số đó.

Ví dụ khi chạy chương trình:

Nhap so N: 5

0/1 1/5 1/4 1/3 2/5 1/2 3/5 2/3 3/4 4/5 1/1

Tat ca co 11 phan so_

### Bài 36/2000 – Anh chàng hà tiện

(Dành cho học sinh Tiểu học)

Một chàng hà tiện ra hiệu may quần áo. Người chủ hiệu biết tính khách nên nói với anh ta: “Tôi tính tiền công theo 2 cách: cách thứ nhất là lấy đúng 11700 đồng. Cách thứ hai là lấy theo tiền cúc: chiếc cúc thứ nhất tôi lấy 1 đồng, chiếc cúc thứ 2 tôi lấy 2 đồng gấp đôi chiếc thứ nhất, chiếc cúc thứ 3 tôi lấy 4 đống gấp đôi lần chiếc cúc thứ 2 và cứ tiếp tục như thế cho đến hết. áo của anh có 18 chiếc cúc. Nếu anh thấy cách thứ nhất là đắt thì anh có thể trả tôi theo cách thứ hai.”

Sau một hồi suy nghĩ chàng hà tiện quyết định chọn theo cách thứ hai. Hỏi anh ta phải trả bao nhiêu tiền và anh ta có bị “hố” hay không?

### Bài 37/2000 – Số siêu nguyên tố

(Dành cho học sinh THCS)

Số siêu nguyên tố là số nguyên tố mà khi bỏ một số tuỳ ý các chữ số bên phải của nó thì phần còn lại vẫn tạo thành một số nguyên tố.

Ví dụ 7331 là một số siêu nguyên tố có 4 chữ số vì 733, 73, 7 cũng là các số nguyên tố.

Nhiệm vụ của bạn là viết chương trình nhập dữ liệu vào là một số nguyên N (0< N <10) và đưa ra kết quả là một số siêu nguyên tố có N chữ số cùng số lượng của chúng.

Ví dụ khi chạy chương trình:

Nhap so N: 4

Cac so sieu nguyen to có 4 chu so la: 2333 2339 2393 2399 2939 3119 3137 3733 3739 3793 3797 5939 7193 7331 7333 7393

Tat ca co 16 so_

### Bài 38/2000 – Tam giác số

(Dành cho học sinh THPT)

Hình sau mô tả một tam giác số có số hàng N=5:

|  |  |  |  | 7 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | 3 |  | 8 |  |  |  |
|  |  | 8 |  | 1 |  | 0 |  |  |
|  | 2 |  | 7 |  | 4 |  | 4 |  |
| 4 |  | 5 |  | 2 |  | 6 |  | 5 |

Đi từ đỉnh (số 7) đến đáy tam giác bằng một đường gấp khúc, mỗi bước chỉ được đi từ số ở hàng trên xuống một trong hai số đứng kề bên phải hay bên trái ở hàng dưới, và cộng các số trên đường đi lại ta được một tổng.

Ví dụ: đường đi 7 8 1 4 6 có tổng là S=26, đường đi 7 3 1 7 5 có tổng là S=23

Trong hình trên, tổng Smax=30 theo đường đi 7 3 8 7 5 là tổng lớn nhất trong tất cả các tổng.

Nhiệm vụ của bạn và viết chương trình nhận dữ liệu vào là một tam giác số chứa trong text file INPUT.TXT và đưa ra kết quả là giá trị của tổng Smax trên màn hình.

File INPUT.TXT có dạng như sau:

Dòng thứ 1: có duy nhất 1 số N là số hàng của tam giác số (0<N<100).

N dòng tiếp theo, từ dòng thứ 2 đến dòng thứ N+1: dòng thứ i có (i-1) số cách nhau bởi dấu trống (space).

Ví dụ: với nội dung của file INPUT.TXT là

```python
5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5
```

thì kết quả chạy chương trình sẽ là: Smax=30.

### Bài 39/2000 – Ô chữ

(Dành cho học sinh THCS và THPT)

Trò chơi ô chữ thông dụng 30 năm trước của trẻ em gồm một khung ô chữ kích thước 5×5 chứa 24 hình vương nhỏ kích thước như nhau. Trên mặt mỗi hình vuông nhỏ có in một chữ cái trong bảng chữ cái. Vì chỉ có 24 hình vuông trong ô chữ nên trong ô chữ còn thừa ra một ô trống, có kích thước đúng bằng kích thước các hình vuông. Một hình vuông có thể đẩy trượt vào ô trống đó nếu nó nằm ngay sát bên trái, bên phải, bên trên hay bên dưới ô trống. Mục tiêu của trò chơi là trượt các hình vuông vào ô trống sao cho cuối cùng các chữ cái trong ô chữ được xếp theo đúng thứ tự của chúng trong bảng chữ cái. Hình sau đây minh hoạ một ô chữ với cấu hình ban đầu và cấu hình của nó sau 6 nước đi sau:

1.Trượt hình vuông phía trên ô trống.

2.Trượt hình vuông bên phải ô trống.

3.Trượt hình vuông bên phải ô trống.

4.Trượt hình vuông phía dưới ô trống.

5.Trượt hình vuông phía dưới ô trống.

6.Trượt hình vuông bên trái ô trống.

![100 đề Toán Tin (Tin học & Nhà trường) 2](assets/images/100-de-toan-tin-tin-hoc-nha-truong-100-bai-toan-tin-o-chu-bai-39.jpg)

Bạn hãy viết một chương trình của bạn chứa cấu hình ban đầu của ô chữ cùng các nước đi để vẽ ra ô chữ kết quả.

Input

Đầu vào của chương trình của bạn chứa cấu hình ban đầu của một ô chữ và một dẫy các nước đi trong ô chữ đó.

Năm dòng đầu tiên mô tả cấu hình ban đầu của ô chữ, mỗi dòng tương ứng với một hàng của ô chữ và chứa đúng 5 ký tự tương ứng với 5 hình vuông của ô chữ trên hàng đó. Ô trống được diễn tả bằng một dấu cách.

Các dòng tiếp theo sau là dẫy các nước đi. Dãy các nước đi được ghi bằng dãy các chữ A,B,R và L để thể hiện hình vuông nào được trượt vào ô trống. A thể hiện hình vuông phía trên ô trống được trượt vào ô trống, tương ứng: B-phía dưới, R-bên phải, L-bên trái. Có thể có những nước đi không hợp cách, ngay cả khi nó được biểu thị bằng những chữ cái trên. Nếu xuất hiện một nước đi không hợp cách thì ô chữ coi như không có cấu hình kết quả. Dãy các nước đi có thể chiếm một số dòng, nhưng nó sẽ được xem là kết thúc ngay khi gặp một số 0.

Out put

Nếu ô chữ không có cấu hình kết quả thì thông báo ‘This puzzle has no final configuration.’; ngược lại thì hiển thị cấu hình ô chữ kết quả. Định dạng mỗi dòng kết quả bằng cách đặt một dấu cách vào giữa hai kí tự kế tiếp nhau. Ô trống cũng được sử lý như vậy. Ví dụ nếu ô trống nằm bên trong hàng thì nó được xuất hiện dưới dạng 3 dấu cách: một để ngăn cách nó với kí tự bên trái, một để thể hiện chính ô trống đó, còn một để ngăn cách nó với kí tự bên phải.

Chú ý: Input mẫu đầu tiên tương ứng với ô chữ được minh hoạ trong ví dụ trên.

Sample Input 1

```python
TRGSJ
XDOKI
M VLN
WPABE
UQHCF
ARRBBL0
```

Sample Output 1

T R G S J

X O K L I

M D V B N

W P A E

U Q H C F

Sample Input 2

AB C DE

F G H I J

KLMNO

PQRS

TUVWX

AAA

LLLL0

Sample Output 2

A B C D

F G H I E

K L M N J

P Q R S O

T U V W X

Sample Input 3

ABCDE

FGHIJ

KLMNO

PQRS

TUVWX

AAAAABBRRRLL0

Sample Output 3

This puzzle has no final configuration.

### Bài 40/2000 – Máy định vị Radio

Một con tàu được trang bị ăng-ten định hướng có thể xác định vị trí hiện thời của mình nhờ các lần đọc đèn hiệu địa phương. Mỗi đèn hiệu được đặt ở một vị trí đã biết và phát ra một tín hiệu đơn nhất. Mỗi khi bắt được tín hiệu, tàu liền quay ăng-ten của mình cho đến khi đạt được tín hiệu cực đại. Điều đó cho phép xác định được phương vị tương đối của đèn hiệu. Cho biết dữ liệu của lần đọc trước (thời gian, phương vị tương đối, vị trí của đèn), một lần đọc mới đủ để xác định vị trí hiện thời của tàu. Bạn phải viết một chương trình xác định vị trí hiện thời của tàu từ hai lần đọc đèn hiệu.

Vị trí của các đèn hiệu và các con tàu được cho trong hệ toạ độ vuông góc, trục Ox hướng về phía đông, còn Oy hướng về phía bắc. Hướng đi của con tàu được đo bằng độ, theo chiều kim đồng hồ tính từ hướng bắc. Như vậy, hướng bắc sẽ là 00, hướng đông là 900, hướng nam là 1800 và hướng tây là 2700. Phương vị tương đối của đèn hiệu cũng được đo bằng độ, tương đối với hướng đi của tàu và theo chiều kim đồng hồ. ăng ten không thể chỉ ra đèn hiệu nằm ở hướng nào trên phương vị. Như vậy, một phương vị 900 có nghĩa là đèn hiệu có thể nằm ở hướng 900 hoặc 2700.

**Input
Dòng đầu tiên của input là một số nguyên chỉ số lượng các đèn hiệu (nhiều nhất là 30). Mỗi dòng tiếp theo cho một đèn hiệu. Mỗi dòng bắt đầu bằng tên đèn (là một chuỗi kí tự không vượt quá 20 kí tự), sau đó là vị trí của đèn cho bằng hoành độ và tung độ. Các trường này phân cách bởi một dấu cách.

Dòng tiếp theo ngay sau các dữ liệu về đèn hiệu là một số nguyên chỉ số lượng các kịch bản đường đi của tàu. Mỗi kịch bản chứa 3 dòng gồm một dòng cho biết hướng đi của tàu so với hướng Bắc và vận tốc vận tốc thực của tàu, và hai dòng chỉ hai lần đọc đèn hiệu. Thời gian được đo bằng phút, tính từ lúc nửa đêm trong vòng 24 giờ. Vận tốc đo bằng đơn vị độ dài (như các đơn vị của hệ trục toạ độ) trên đơn vị thời gian. Dòng thứ hai của kịch bản là lần đọc thứ nhất gồm thời gian (là một số nguyên), tên đèn và góc phương vị tương đối với hướng đi của tàu. Ba trường được ngăn cách nhau bởi một dấu cách. Dòng thứ ba của kịch bản là lần đọc thứ hai. Thời gian của lần đọc này luôn lớn hơn lần đọc thứ nhất.

**Output
Với mỗi kịch bản, chương trình của bạn phải chỉ ra được số thứ tự của kịch bản (Scenario 1, Scenario 2,…), và một thông báo về vị trí của con tàu (được làm tròn đến hai chữ số thập phân) tại thời điểm của lần đọc thứ hai. Nếu vị trí của tàu không thể xác định thì thông báo: ”Position cannot be determined.”

Mẫu input và output chính xác tương ứng được cho như sau:

Sample Input

4

First 2.0 4.0

Second 6.0 2.0

Third 6.0 7.0

Fourth 10.0 5.0

2

0.0 1.0

1 First 270.0

2 Fourth 90.0

116.5651 2.2361

4 Third 126.8699

5 First 319.3987

Sample Output

Scenario 1: Position cannot be determined

Scenario 2: Position is (6.00, 5.00)

### Bài 41/2000 – Cờ Othello

(Dành cho học sinh THCS và THPT)

Cờ Othello là trò chơi cho 2 người trên một bàn cờ kích thước 8×8 ô, dùng những quân tròn một mặt đen, một mặt trắng. Các đấu thủ sẽ được lần lượt đi một quân vào ô còn trống trên bàn cờ. Khi đi một quân, đấu thủ phải lật được ít nhất một quân của đấu thủ kia. Các quân sẽ lật được nếu chúng nằm liên tiếp trên cùng một đường thẳng (ngang, dọc hoặc chéo) mà ở hai đầu của đường đó là hai quân có mầu của đấu thủ đang đi. Khi xong một lượt đi, tất cả các quân đã bị lật đã được đổi sang màu của đấu thủ vừa đi. Trong một lượt đi có thể lật được nhiều hàng.

Ví dụ: Nếu thế cờ hiện thời ở bàn cờ bên trái và lượt đi là của đấu thủ trắng, thì anh ta có thể đi được một trong các nước sau: (3,5) (4,6) (5,3) (6,4). Nếu anh ta đi nước (3,5) thì sau nước đi thế cờ sẽ như ở bàn cờ bên phải.

Vẽ bàn cờ

Bạn hãy viết một chương trình để đọc một ván cờ từ một text file có qui cách:

8 dòng đầu tiên là bàn cờ thế, mỗi dòng chứa 8 kí tự, mỗi kí tự có thể là:

‘-‘ thể hiện một ô trống,

‘B’ thể hiện một ô có quân đen,

‘W’ thể hiện một ô có quân trắng.

Dòng thứ 9 chứa một trong hai kí tự ‘B’ hoặc ‘W’ để chỉ nước đi thuộc về đấu thủ nào.

Các dòng tiếp theo là các lệnh. Mỗi lệnh có thể là: liệt kê tất cả các nước đi có thể của đấu thủ hiện thời, thực hiện một nước đi, hay thôi chơi ván cờ đó. Mỗi lệnh ghi trên một dòng theo qui cách sau:

Liệt kê tất cả các nước đi có thể của đấu thủ hiện thời:

Lệnh là một chữ ‘L’ ở cột đầu tiên của dòng. Chương trình phải kiểm tra cả bàn cờ và in ra tất cả các nước đi hợp lệ của đấu thủ hiện thời theo dạng (x,y) trong đó x là hàng và y là cột của nước đi. Các nước đi này phải được in theo qui cách:

+ Mọi nước đi trên hàng i sẽ được in trước mỗi nước đi trên hàng j nếu j>i.

+ Nếu trên hàng i có nhiều hơn 1 nước đi thì các nước đi được in theo thứ tự của cột.

Mọi nước đi hợp lệ phải in trên một dòng. Nếu không có nước đi nào hợp lệ vì đấu thủ hiện thời không thể lật bất cứ một quân nào thì phải in ra thông báo ‘No legal move’.

Thực hiện một nước đi

Lệnh là một chữ ‘M’ ở cột đầu tiên của dòng, tiếp theo sau là 2 chữ số ở cột thứ hai và thứ ba của dòng. Các chữ số chỉ ra hàng và cột của ô trống trên bàn cờ nơi đấu thủ hiện thời sẽ đặt quân của mình, trừ phi anh ta không có nước đi hơp lệ nào. Nếu đấu thủ hiện thời không có nước đi hợp lệ nào thì anh ta được thay bởi đấu thủ kia và bây giờ nước đi là của đấu thủ mới. Chương trình phải kiểm tra khi đó nước đi là hợp lệ. Bạn sẽ phải ghi nhận sự thay đổi trên bàn cờ, kể cả việc thêm các quân mới lẫn việc thay đổi màu sắc quân cờ bị lật. Cuối mỗi nước đi hãy in ra số lượng tất cả các quân cờ mỗi màu trên bàn cờ theo qui cách ‘Black – xx White – yy, trong đó xx là số lượng các quân đen còn yy là số lượng các quân trắng. Sau một nước đi, đấu thủ hiện thời được thay bởi đấu thủ kia.

Thôi chơi ván cờ đó

Lệnh là một chữ ‘Q’ ở cột đầu tiên của dòng, dòng lệnh này kết thúc Input cho ván cờ đang xét. Chương trình phải in thế cờ cuối cùng của ván cờ theo qui cách được dùng ở input.

Bạn phải kiểm tra tính chính xác của các lệnh. Không được để dòng trắng ở bất cứ nơi nào trong output.

### Bài 42/2000 – Một chút về tư duy số học

(Dành cho học sinh Tiểu học)

Tìm số tự nhiên nhỏ nhất khi chia cho 2, 3, 4, 5, 6, 7, 8, 9, 10 cho phần dư tương ứng là 1, 2, 3, 4, 5, 6, 7, 8, 9.

### Bài 43/2000 – Kim giờ và phút gặp nhau bao nhiêu lần trong ngày

(Dành cho học sinh Tiểu học)

Đồng hồ quả lắc có 2 kim: giờ và phút. Tính xem trong vòng 1 ngày đêm (từ 0h – 24h) có bao nhiêu lần 2 kim gặp nhau và đó là những lúc nào.

### Bài 44/2000 – Tạo ma trận số

(Dành cho học sinh THCS)

Cho trước số nguyên dương N bất kỳ. Hãy viết thuật toán và chương trình để tạo lập bảng NxN phần tử nguyên dương theo quy luật được cho trong ví dụ sau:

1 2 3 4 5 6

2 4 6 8 10 12

3 6 9 12 2 4

4 8 12 2 4 6

5 10 2 4 6 8

6 12 4 6 8 10

Thực hiện chương trình đó trên máy với N=12, đưa ra màn hình ma trận kết quả (có dạng như trong ví dụ).

### Bài 45/2000 – Các vòng tròn Olimpic

(Dành cho học sinh THPT)

Có 5 vòng tròn Olimpic chia mặt phẳng thành 15 phần (không kể phần vô hạn) (hình vẽ). Hãy đặt vào mỗi phần đó một số sao cho tổng số các số trong mỗi vòng tròn bằng 39.

Lập chương trình giải quyết bài toán trên và cho biết có bao nhiêu cách xếp như vậy.

### Bài 46/2000 – Đảo chữ cái

(Dành cho học sinh THCS và THPT)

Bạn phải viết chương trình đưa ra tất cả các từ có thể có phát sinh từ một tập các chữ cái.

Ví dụ: Cho từ “abc”, chương trình của bạn phải đưa ra được các từ “abc”, “acb”, “bac”, “bca”, “cab” và “cba” (bằng cách khảo sát tất cả các trường hợp khác nhau của tổ hợp ba chữ cái đã cho).

Input

Dữ liệu vào được cho trong tệp input.txt chứa một số từ. Dòng đầu tiên là một số tự nhiên cho biết số từ được cho ở dưới. Mỗi dòng tiếp theo chứa một từ. Trong đó, một từ có thể chứa cả chữ cái thường hoặc hoa từ A đến Z. Các chữ thường và hoa được coi như là khác nhau. Một chữ cái nào đó có thể xuất hiện nhiều hơn một lần.

Output

Với mỗi từ đã cho trong file Input.txt, kết quả nhận được ra file Output.txt phải chứa tất cả các từ khác nhau được sinh từ các chữ cái của từ đó. Các từ được sinh ra từ một từ đã cho phải được đưa ra theo thứ tự tăng dần của bảng chữ cái.

Sample Input

2

abc

acba

Sample Output

abc

acb

bac

bca

cab

cba

aabc

aacb

abac

abca

acab

acba

baac

baca

bcaa

caab

caba

cbaa

### Bài 47/2000 – Xoá số trên vòng tròn

(Dành cho học sinh THCS và PTTH)

Các số từ 1 đến 2000 được xếp theo thứ tự tăng dần trên một đường tròn theo chiều kim đồng hồ. Bắt đầu từ số 1, chuyển động theo chiều kim đồng hồ, cứ bước qua một số lại xoá đi một số. Công việc đó tiếp diễn cho đến khi trên vòng tròn còn lại đúng một số. Lập chương trình tính và in ra số đó.

### Bài 48/2000 – Những chiếc gậy

(Dành cho học sinh THCS và THPT)

George có những chiếc gậy với chiều dài như nhau và chặt chúng thành những đoạn có chiều dài ngẫu nhiên cho đến khi tất cả các phần trở thành đều có chiều dài tối đa là 50 đơn vị. Bây giờ anh ta muốn ghép các đoạn lại như ban đầu nhưng lại quên mất nó như thế nào và chiều dài ban đầu của chúng là bao nhiêu. Hãy giúp George thiết kế chương trình để ước tính nhỏ nhất có thể của chiều dài những cái gậy này. Tất cả chiều dài được biểu diễn bằng đơn vị là những số nguyên lớn hơn 0.

Input

Dữ liệu vào trong file Input.txt chứa các khối mỗi khối 2 dòng. Dòng đầu tiên chứa số phần của chiếc gậy sau khi cắt. Dòng thứ 2 là chiều dài của các phần này cách nhau bởi một dấu cách. Dòng cuối cùng kết thúc file Input là số 0.

Output

Kết quả ra trong file Output.txt chứa chiều dài nhỏ nhất có thể của những cái gậy, mỗi chiếc trong mỗi khối trên một dòng.

Sample Input

9

5 2 1 5 2 1 5 2 1

4

1 2 3 4

0

Sample Output

6

5

### Bài 49/2001 – Một chút nhanh trí

(Dành cho học sinh Tiểu học)

Số tự nhiên A có tính chất là khi chia A và lập phương của A cho một số lẻ bất kỳ thì nhận được số dư như nhau. Tìm tất cả các số tự nhiên như vậy.

### Bài 50/2001 – Bài toán đổi màu bi

(Dành cho học sinh THCS và THPT)

Trên bàn có N1 hòn bi xanh, N2 hòn bi đỏ và N3 hòn bi vàng. Luật chơi như sau:

Nếu 2 hòn bi khác màu nhau chạm nhau thì chúng sẽ cùng biến thành màu thứ 3 (ví dụ: xanh, vàng –> đỏ, đỏ).

Tìm thuật toán và lập chương trình cho biết rằng có thể biến tất cả các hòn bi đó thành một màu đỏ có được không?

### Bài 51/2001 – Thay thế từ

(Dành cho học sinh THCS và PTTH)

Hai file INPUT1.TXT và INPUT2.TXT được cho như sau: File INPUT1.TXT chứa một đoạn văn bản bất kì. File INPUT2.TXT chứa không quá 50 dòng, mỗi dòng gồm hai từ: từ đầu là từ đích và từ sau là từ nguồn. Hãy tìm trong file INPUT1.TXT tất cả các từ là từ đích và thay thế chúng bằng các từ nguồn tương ứng. Kết quả ghi vào file KQ.OUT (sẽ là một đoạn văn bản tương tự như trong file INPUT1.TXT nhưng đã được thay thế từ đích bởi từ nguồn).

Sample INPUT

- File INPUT1.TXT chứa đoạn văn bản sau:

Nam moi sap den roi, ban co zui khong?

Chuc cac ban don mot cai Tet that vui ve va hanh phuc.

Chuc ban luon hoc gioi!

- File INPUT2.TXT chứa các dòng sau:

```
ban em
zui vui
```

Sample OUTPUT

- File KQ.OUT sẽ chứa đoạn văn bản sau:

```
Nam moi sap den roi, em co vui khong?
Chuc cac em don mot cai Tet that vui ve va hanh phuc.
Chuc em luon hoc gioi!
```

### Bài 52/2001 – Xác định các tứ giác đồng hồ trong ma trận

(Dành cho học sinh THCS và THPT)

Cho ma trận vuông A[i,j] (i,j = 1, 2 … n). Các phần tử của A được đánh số từ 1 đến nn.

Gọi S là số l­ượng các “tứ giác” có bốn đỉnh là: A[i,j]; A[i,j+1]; A[i+1,j]; A[i+1,j+1] sao cho các số ở đỉnh của nó xếp theo thứ tự tăng dần theo chiều kim đồng hồ (tính từ một đỉnh nào đó).

1) Lập ch­ương trình tính số l­ượng S.

2) Lập thuật toán xác định A sao cho số S là:

a. Lớn nhất.

b. Nhỏ nhất.

### Bài 53/2001 – Lập lịch tháng kỳ ảo

(Dành cho học sinh THCS và THPT)

Lịch của các tháng đ­ược biểu diễn bằng một ma trận có số cột bằng 7 và số hàng nhỏ hơn hoặc bằng 6.

|  |  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 |
| 20 | 21 | 22 | 23 | 24 | 25 | 26 |
| 27 | 28 | 29 | 30 |  |  |  |

Ví dụ: Trong hình vẽ, lịch này thỏa mãn tính chất sau: Mọi ma trận con 33 không có ô trống đều là ma trận “kỳ ảo” theo nghĩa: Tổng các số của mỗi đ­ường chéo bằng tổng của trung bình cộng của tất cả các cột và hàng. Hãy xây dựng tất cả các lịch tháng có tính chất nh­ư trên. Lập ch­ương trình mô tả tất cả các khả năng xảy ra.

### Bài 54/2001 – Bạn hãy gạch số

(Dành cho học sinh Tiểu học và THCS)

Chúng ta viết liên tiếp 10 số nguyên tố đầu tiên theo thứ tự tăng để tạo thành một số có nhiều chữ số. Trong số này hãy gạch đi một nửa số chữ số để số còn lại là:

a. Nhỏ nhất

b. Lớn nhất

Trong từng trường hợp phải nêu cụ thể thuật giải (tại sao lại gạch như vậy)?

### Bài 55/2001 – Bài toán che mắt mèo

(Dành cho học sinh THCS và THPT)

Trên bàn cờ ô vuông NxN tại mỗi ô có thể xếp hoặc một con mèo con, hoặc một quân cờ. Hai con mèo trên bàn cờ sẽ nhìn thấy nhau nếu trên đ­ường thẳng nối chúng theo hàng ngang, hàng dọc hay đ­ường chéo không có quân cờ nào cả.

Hãy tìm cách xếp mèo và quân cờ nh­ư trên sao cho số mèo lớn nhất mà không có hai con mèo nào nhìn thấy nhau?

### Bài 56/2001 – Chia l­ưới

(Dành cho học sinh THPT)

Cho l­ưới MN (m, n <= 20) ô vuông, trong mỗi ô cho trước một số tự nhiên. Hãy tìm cách chia lưới trên làm hai phần (chia theo cạnh l­ưới) sao cho trị tuyệt đối hiệu số của tổng các số trong mỗi phần có giá trị nhỏ nhất (như hình dưới đây).

|  |  |  |  | 7 |  |
| --- | --- | --- | --- | --- | --- |
|  | 1 | 3 | 5 |  |  |
|  | 12 | 2 | 5 |  |  |
|  | 9 | 2 | 10 |  |  |
|  |  |  |  |  |  |

Dữ liệu được cho trong file LUOI.INP, được cho như sau:

– Dòng đầu tiên gồm 2 số m, n là kích thước của ô lưới.

– m dòng tiếp theo, mỗi dòng gồm n số cách nhau bởi dấu cách, ô nào không có giá trị được cho bằng 0.

Dữ liệu ra trong file LUOI.OUT miêu tả lưới sau khi chia thành hai phần: là một ma trận kích thước mn gồm các số 0 và 1 (số 0 kí hiệu cho các ô tương ứng với phần thứ nhất, và số 1 kí hiệu cho các ô tương ứng với phần thứ hai).

Sample Input:

Dữ liệu cho sau đây tương ứng với hình trên:

5 6

0 0 0 0 7 0

0 1 3 5 0 0

0 12 2 5 0 0

0 9 2 10 0 0

0 0 0 0 0 0

Sample Output:

0 1 1 1 1 1

0 1 0 1 1 1

0 0 0 1 1 1

0 0 0 1 1 1

0 0 0 0 0 1

### Bài 57/2001 – Chọn số

(Dành cho học sinh Tiểu học và THCS )

Cho 2000 số a1, a2,…, a2000 mỗi số là +1 hoặc -1. Hỏi có thể hay không từ 2000 số đó chọn ra các số nào đó để tổng các số được chọn ra bằng tổng các số còn lại? Giả sử cho 2001 số, liệu có thể có cách chọn không? Nêu cách giải tổng quát.

### Bài 58/2001 – Tổng các số tự nhiên liên tiếp

(Dành cho học sinh THCS và THPT)

Cho trước số tự nhiên n. Lập thuật toán cho biết n có thể biểu diễn thành tổng của hai hoặc nhiều số tự nhiên liên tiếp hay không?

Trong trường hợp có, hãy thể hiện tất cả các cách có thể có.

### Bài 59/2001 – Đếm số ô vuông

(Dành cho học sinh THCS và THPT)

Cho một bảng vuông gồm NxN điểm nằm trên các mắt lưới ô vuông. Các điểm kề nhau trên một hàng hay một cột có thể được nối với nhau bằng một đoạn thẳng hoặc không được nối. Các đoạn đó sẽ tạo ra các ô vuông trên bảng. Ví dụ với bảng sau đây thì n = 4 và có 3 ô vuông:

![100 đề Toán Tin (Tin học & Nhà trường) 3](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image009-2.png)

Trên mỗi hàng có thể có nhiều nhất n-1 đoạn thẳng nằm ngang và có tất cả n hàng như vậy. Tương tự như vậy có tất cả n-1 hàng các đoạn thẳng nằm dọc và trên mỗi hàng có thể có nhiều nhất n đoạn.

Để mô tả người ta dùng hai mảng nhị phân: một mảng ghi các đoạn nằm ngang kích thước n x (n-1), và một mảng ghi các đoạn nằm dọc kích thước (n-1) xn. Trong mảng, số 1 dùng để mô tả đoạn thẳng nối giữa 2 điểm, còn số 0 miêu tả giữa hai điểm không có đoạn thẳng nối. Trong ví dụ trên thì ma trận “ngang” là:

và ma trận “dọc” là:

Cho trước ma trận “ngang” và ma trận “dọc”, dữ liệu nhập từ các tệp văn bản có tên là NGANG.INP và DOC.INP. Hãy lập trình đếm số các ô vuông trên bảng.

### Bài 60/2001 – Tìm số dư của phép chia

(Dành cho học sinh Tiểu học)

Một số nguyên khi chia cho 1976 và 1977 đều dư 76. Hỏi số đó khi chia cho 39 dư bao nhiêu?

### Bài 61/2001 – Thuật toán điền số vào ma trận

(Dành cho học sinh THCS và THPT)

Hãy lập thuật toán điền các phần tử của ma trận NN các số 0, 1 và -1 sao cho:

a) Tổng các số của mọi hình vuông con 2×2 đều bằng 0.

b) Tổng các số của ma trận trên là lớn nhất.

### Bài 62/2001 – Chèn Xâu

(Dành cho học sinh THCS và THPT)

Cho một xâu S = ’123456789’ hãy tìm cách chèn vào S các dấu ‘+’ hoặc ‘-‘ để thu được số M cho trước (nếu có thể). Số M nguyên được nhập từ bàn phím. Trong file Output Chenxau.Out ghi tất cả các phương án chèn (nếu có) và ghi “Khong co” nếu như không thể thu được M từ cách làm trên.

Ví dụ: Nhập M = 8, một trong các phương án đó là: ‘-1+2-3+4+5-6+7’;

M = -28, một trong các phương án đó là: ‘-1+2-34+5’;

(Đề ra của bạn: Lê Nhân Tâm – 12 Tin Trường THPT Lam Sơn)

### Bài 63/2001 – Tìm số nhỏ nhất

(Dành cho học sinh Tiểu học)

Hãy viết ra số nhỏ nhất bao gồm tất cả các chữ số 0, 1, 2, 3, … 9 mà nó:

- a. Chia hết cho 9

- b. Chia hết cho 5

- c. Chia hết cho 20

Có giải thích cho từng trường hợp?

### Bài 64/2001 – Đổi ma trận số

(Dành cho học sinh THCS và THPT)

Cho mảng số thực vuông A kích thước 2nx2n. Hãy lập các mảng mới bằng cách đổi chỗ các khối vuông kích thước nxn của A theo các cách sau:

![100 đề Toán Tin (Tin học & Nhà trường) 4](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image015-1.png)

 

![100 đề Toán Tin (Tin học & Nhà trường) 5](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image017-1.png)

### Bài 65/2001 – Lưới ô vuông vô hạn

(Dành cho học sinh THCS và THPT)

Cho lưới ô vuông vô hạn về hai phía (trên và phải). Các ô của lưới được đánh số theo quy tắc sau:

- Ô trái dưới – vị trí (0,0) – được đánh số 0.

- Các ô còn lại được đánh số theo nguyên tắc lan toả từ vị trí (0,0) và theo quy tắc: tại một vị trí số được điền vào là số nguyên không âm nhỏ nhất chưa được điền trên hàng và cột chứa ô hiện thời. Ví dụ, ta có hình dạng của một số ô của lưới như sau:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 3 | 2 | 1 | 0 |  |
| 2 | 3 | 0 | 1 |  |
| 1 | 0 | 3 | 2 |  |
| 0 | 1 | 2 | 3 |  |

Cho trước cặp số tự nhiên M, N – kích thước ô lưới. Hãy viết chương trình mô tả lưới trên, kết quả được ghi vào file KQ.TXT.

### Bài 66/2001 – Bảng số 9 x 9

(Dành cho học sinh Tiểu họcvà THCS)

Hãy xếp các số 1, 2, 3, …, 81 vào bảng 9 x 9 sao cho:

a) Trên mỗi hàng các số được xếp theo thứ tự tăng dần (từ trái qua phải).

b) Tổng các số ở cột 5 là lớn nhất.

Yêu cầu:

- Đối với các bạn học sinh khối Tiểu học chỉ cần viết ra bảng số thoả mãn tính chất trên.

- Các bạn học sinh khối THCS thì phải lập trình hiển thị kết quả ra màn hình.

### Bài 67/2001 – Về các phép biến đổi “Nhân 2 trừ 1”

(Dành cho học sinh THCS và THPT)

Cho ma trận A kích thước M x N, Aij – là các số tự nhiên. Các phép biến đổi có thể là:

- Nhân tất cả các số của một hàng với 2.

- Trừ tất cả các số của một cột cho 1.

Tìm thuật toán sao cho sau một số phép biến đổi trên ma trận A trở thành toàn số 0.

### Bài 68/2001 – Hình tròn và bảng vuông

(Dành cho học sinh THPT)

Một đường tròn đường kính 2n -1 đơn vị được vẽ giữa bàn cờ 2n2n. Với n = 3 được minh hoạ như dưới đây:

![100 đề Toán Tin (Tin học & Nhà trường) 6](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image020.png)

Viết chương trình xác định số ô vuông của bảng bị cắt bởi hình tròn và số ô vuông nằm hoàn toàn trong hình tròn. 

Dữ liệu vào trong file Input.txt bao gồm: Mỗi dòng là một số nguyên dương không lớn hơn 150 – là các giá trị của n.

Dữ liệu ra trong file Output.txt: Với mỗi giá trị vào n, kết quả ra phải tính được số ô vuông bị cắt bởi hình tròn và số ô vuông nằm hoàn toàn trong hình tròn, mỗi số trên một dòng. Mỗi kết quả tương ứng với một giá trị n phải cách nhau một dòng.

Sample Input

3

4

Sample Output

20

12

28

24

### Bài 69/2001 – Bội của 36

(Dành cho học sinh Tiểu học)

Tìm số tự nhiên nhỏ nhất chia hết cho 36 mà trong dạng viết thập phân của nó có chứa tất cả các chữ số từ 1 tới 9.

### Bài 70/2001 – Mã hoá theo khoá

(Dành cho học sinh THCS và THPT)

Cho trước khoá là một hoán vị của n số (1, 2, …, n). Khi đó để mã hoá một xâu kí tự ta có thể chia xâu thànhtừng nhóm n kí tự (riêng nếu nhóm cuối cùng không đủ n kí tự thì ta coa thể thêm các dấu cách vào sau cho đủ) rồi hoán vị các kí tự trong từng nhóm. Sau đó, ghép lại theo thứ tự các nhóm ta được một xâu đã mã hoá.

Chẳng hạn: với khoá 3241 (n=4) thì ta có thể mã hoá xâu ‘english’ thành ‘gnlehs i’.

Hãy viết chương trình mã hoá một xâu kí tự cho trước.

### Bài 71/2001 – Thực hiện phép nhân

(Dành cho học sinh THCS và THPT)

Bạn hãy lập chương trình nhập 2 số nguyên dương a và b. Sau đó thực hiện phép nhân (a x b) như cách nhân bằng tay thông thường. Ví dụ:

![100 đề Toán Tin (Tin học & Nhà trường) 7](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image022-1.jpg)

### Bài 72/2001 – Biến đổi trên lưới số

(Dành cho học sinh THCS và THPT)

Trên một lưới N x N các ô được đánh số 1 hoặc -1. Lưới trên được biến đổi theo quy tắc sau: một ô nào đó được thay thế bằng tích của các số trong các ô kề nó (kề cạnh). Lập chương trình thực hiện sao cho sau một số bước toàn lưới còn lại chữ số 1.

### Bài 73/2001 – Bài toán chuỗi số

(Dành cho học sinh Tiểu họcvà THCS)

Cho một chuỗi số có quy luật. Bạn có thể tìm được hai số cuối của dãy không, thay thế chúng trong dấu hỏi chấm (?). Bài toán không dễ dàng lắm đâu, vì chúng được tạo ra bởi một quy luật rất phức tạp. Bạn thử sức xem?

5 8 11 14 17 23 27 32 35 41 49 52 ? ?

### Bài 74/2001 – Hai hàng số kỳ ảo

(Dành cho học sinh THCS và THPT)

Hãy xếp 2N số tự nhiên 1, 2, …, 2N thành 2 hàng số:

A1, A2 … An

B1, B2 … Bn

Thỏa mãn điều kiện: tổng các số theo n cột bằng nhau, tổng các số theo các hàng bằng nhau.

### Bài 75/2001 – Trò chơi Tích – Tắc vuông

(Dành cho học sinh THCS và THPT)

Trên một lưới kẻ ô vuông có 2 người chơi như sau: người thứ nhất mỗi lần chơi sẽ đánh dấu x vào 1 ô trống. Người thứ hai được đánh dấu 0 vào 1 ô trống. Người thứ nhất muốn đạt được mục đích là đánh được 4 dấu x tạo thành 4 đỉnh của 1 hình vuông. Người thứ hai có nhiệm vụ ngăn cản mục đích đó của người thứ nhất.

Lập chương trình tìm thuật toán tối ưu cho người thứ nhất (người thứ nhất có thể luôn thắng).

Chú ý: Lưới ô vuông được coi là vô­ hạn về cả hai phía.

### Bài76/2001 – Đoạn thẳng và hình chữ nhật

(Dành cho học sinh THPT)

Hãy viết một chương trình xác định xem một đoạn thẳng có cắt hình chữ nhật hay không?

Ví dụ:

Cho tọa độ điểm bắt đầu và điểm kết thúc của đường thẳng: (4,9) và (11,2);

Và tọa độ đỉnh trái trên và đỉnh phải dưới của hình chữ nhật: (1,5) và (7,1);

![100 đề Toán Tin (Tin học & Nhà trường) 8](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image023-1.png)

Đoạn thẳng không cắt hình chữ nhật

Đoạn thẳng được gọi là cắt hình chữ nhật nếu đoạn thẳng và hình chữ nhật có ít nhất một điểm chung. 

Chú ý: mặc dù tất cả dữ liệu vào đều là số nguyên, nhưng tọa độ của các giao điểm tính ra chưa chắc là số nguyên. 

Input

Dữ liệu vào trong file Input.Inp kiểm tra N trường hợp (N <= 1000). Dòng đầu tiên của file dữ liệu vào là số N. Mỗi dòng tiếp theo chứa một trường hợp kiểm tra theo quy cách sau:

xstart ystart xend yend xleft ytop xright yboottm

trong đó: (xstart, ystart) là điểm bắt đầu và (xend, yend) là điểm kết thúc của đoạn thẳng. Và (xleft, ytop) là đỉnh trái trên, (xright, ybottom) là đỉnh phải dưới của hình chữ nhật. 8 số này được cách nhau bởi một dấu cách. 

Output

Với mỗi một trường hợp kiểm tra trong file Input.txt, dữ liệu ra trong file Output.out phải đưa ra một dòng gồm hoặc là chữ cái “T” nếu đoạn thẳng cắt hình chữ nhật, hoặc là “F” nếu đoạn thẳng không cắt hình chữ nhật. 

Ví dụ

Input.Inp

1

4 9 11 2 1 5 7 1

Output.out

F

### Bài 77/2001 – Xoá số trên bảng

(Dành cho học sinh Tiểu học)

Trên bảng đen cô giáo ghi lên 23 số tự nhiên: 1, 2, 3, …, 23

Các bạn được phép xoá đi 2 số bất kỳ trên bảng và thay vào đó một số mới là hiệu của chúng.

1. Hỏi có thể thực hiện sau một số bước trên bảng còn lại toàn số 0 hay không? Nếu được hãy chỉ ra một cách làm cụ thể.

2. Bài toán còn đúng không nếu thay số 23 bằng 25.

### Bài 78/2001 – Cà rốt và những chú thỏ

(Dành cho học sinh Tiểu học)

Các số ở mỗi ô trong hình thoi dưới đây biểu thị số lượng củ cà rốt. Chú thỏ đi từ góc dưới với 14 củ cà rốt và đi lên đỉnh trên với 13 củ cà rốt, chỉ được đi theo đường chéo, đi đến đâu ăn hết tổng số cà rốt trong ô đó. Hỏi rằng chú thỏ có thể ăn được nhiều nhất bao nhiêu củ cà rốt?

![100 đề Toán Tin (Tin học & Nhà trường) 9](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image024.png)

### Bài 79/2001 – Về một ma trận số

(Dành cho học sinh THCS)

Mô tả thuật toán, lập chương trình xây dựng ma trận A[10,10] thoả mãn các tính chất:

- A[i,j] là các số nguyên từ 0..9 (1 <= i, j <= 10),

- Mỗi số từ 0..9 được gặp 10 lần trong ma trận A,

- Mỗi hàng và mỗi cột của A chứa không quá 4 số khác nhau.

### Bài 80/2001 – Xếp số 1 trên lưới

(Dành cho học sinh THCS)

Hãy xếp 16 số 1 lên ma trận 10×10 sao cho nếu xoá đi bất kỳ 5 hàng và 5 cột thì vẫn còn lại ít nhất là một số 1. Nêu thuật toán và lập trình hiển thị ra màn hình kết quả ma trận thoả mãn tính chất trên.

### Bài 81/2001 – Dãy nghịch thế

(Dành cho học sinh THPT)

Cho dãy số (a1, a2, a3, …, an) là một hoán vị bất kỳ của tập hợp (1, 2, 3, …, n). Dãy số (b1, b2, b3, …, bn) gọi là nghịch thế của dãy a nếu bi là các phần tử đứng trước số i trong dãy a mà lớn hơn i.

Ví dụ:

Dãy a là: 3 2 5 7 1 4 6

Dãy b là: 4 1 0 2 0 1 0

a. Cho dãy a, hãy xây dựng chương trình tìm dãy b.

b. Cho dãy b, xây dựng chương trình tìm dãy a.

Dữ liệu vào trong file NGICH.INP với nội dung:

Dòng đầu tiên là số n (1 <= n <= 10 000).

Các dòng tiếp theo là n số của dãy a, mỗi số cách nhau một dấu cách,

Các dòng tiếp theo là n số của dãy b, mỗi số cách nhau bởi một dấu cách.

Dữ liệu ra trong file NGHICH.OUT với nội dung:

n số đầu tiên là kết quả của câu a,

Tiếp đó là một dòng trống và sau đó là n số kết quả của câu b (nếu tìm được dãy a).

### Bài 82/2001 – Gặp gỡ

(Dành cho học sinh THPT)

Trên một lưới ô vuông kích thước MN (M dòng, N cột) người ta đặt k rôbôt. Rôbôt thứ i được đặt ở ô (xi,,yi). Mỗi ô của lưới có thể đặt một vật cản hay không. Tại mỗi bước, mỗi rôbôt chỉ có thể di chuyển theo các hướng lên, xuống, trái, phải – vào các ô kề cạnh không có vật cản. k rôbôt sẽ gặp nhau nếu chúng cùng đứng trong một ô. k rôbôt bắt đầu di chuyển đồng thời và mỗi lượt cả k rôbôt đều phải thực hiện việc di chuyển (nghĩa là không cho phép một rôbôt dừng lại một ô nào đó trong khi rôbôt khác thực hiện bước di chuyển). Bài toán đặt ra là tìm số bước di chuyển ít nhất mà k rôbôt phải thực hiện để có thể gặp nhau. Chú ý rằng, tùy trạng thái của lưới, k rôbôt có thể không khi nào gặp được nhau.

Dữ liệu vào cho trong file văn bản MEET.INP, bao gồm:

+ Dòng đầu tiên chứa 3 số M,N và k (M,N<=50;k<=10)

+ k dòng sau, dòng thứ i gồm 2 số xi,yi là vị trí của rôbốt thứ i.

+ M dòng tiếp theo, mỗi dòng ghi N số gồm 0 và 1 mô tả trạng thái dòng tương ứng của lưới, trong đó mỗi số mô tả một ô với quy ước: 0 – không có vật cản, 1 – có vật cản.

Các số trên cùng một dòng của file dữ liệu được ghi cách nhau ít nhất một dấu trắng.

Dữ liệu ra ghi lên file văn bản MEET.OUT: nếu k rôbôt không thể gặp nhau thì ghi một dòng gồm một ký tự #, trái lại ghi k dòng, mỗi dòng là một dãy các ký tự viết liền nhau mô tả các bước đi của rôbôt: U-lên trên, D-xuống dưới, L-sang trái, R-sang phải.

Ví dụ:

MEET.INP

4 6 2

1 1

4 6

0 1 1 0 0 0

0 0 0 0 0 1

0 0 1 0 0 1

0 1 0 1 0 0

MEET.OUT

DRRR

LUUL

### Bài 83/2001 – Các đường tròn đồng tâm

(Dành cho học sinh Tiểu học)

Ba đường tròn đồng tâm, mỗi hình được chia thành 8 phần (như hình dưới).

Hãy đặt các số trong danh sách dưới đây vào các phần trong các hình tròn sao cho: mỗi đường tròn gồm 8 số trong tám phần có tổng bằng 80, mỗi phần của hình tròn ngoài gồm 3 số (mỗi phần của hình tròn ngoài chứa cả phần của hai hình tròn trong) có tổng bằng 30.

Các số bạn được sử dụng là:

14, 11, 10, 12, 7, 9, 9, 8, 9, 9, 11, 11, 10, 10, 10, 10, 14, 9, 7, 11, 10, 8, 12, 9.

![100 đề Toán Tin (Tin học & Nhà trường) 10](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image025-1.png)

### Bài 84/2001 – Cùng một tích

(Dành cho học sinh THCS và THPT)

Cho n số x1, x2, …, xn chỉ nhận một trong các giá trị -1, 0, 1. Và cho một số nguyên P. Hãy tính số lượng tất cả các cách gán giá trị khác nhau của n số trên sao cho: $\sum x_i x_j = P$ (với i =1..n, j =1..n, i $\ne$ j). Hai cách gán được gọi là khác nhau nếu số lượng các số xi­ = 0 là khác nhau.

Input: gồm 2 số n, P.

Output: số các cách chọn khác nhau.

Giới hạn: 2 <= n <= 1010 ; |P| <= 1010.

(Đề ra của bạn Lý Quốc Vinh – Tp. Hồ Chí Minh)

### Bài 85/2001 – Biến đổi 0 – 1

(Dành cho học sinh THPT)

Cho 2 lưới ô vuông A và B cùng kích thước M xN, mỗi ô có chỉ nhận các giá trị 0 hoặc 1 (A khác B). Các ô lưới được đánh số từ trên xuống dưới, từ trái qua phải bắt đầu từ 1. Cho phép thực hiện phép biến đổi sau đây với lưới A:

– Chọn ô (i, j) và đảo giá trị của ô đó và các ô chung cạnh với nó (0 thành 1, 1 thành 0).

Hãy xác định xem bằng cách áp dụng dãy biến đổi trên có thể đưa A về B được hay không? Nếu có hãy chỉ ra cách sử dụng một số ít nhất phép biến đổi.

Dữ liệu nhập vào từ file văn bản BIENDOI.INP:

- Dòng đầu tiên ghi hai số M, N – kích thước ô lưới (M, N <= 100),

- M dòng tiếp theo, mỗi dòng một xâu N kí tự 0, 1 ứng với dòng tương ứng của A,

- Tiếp theo là một dòng trống,

- M dòng cuối mỗi dòng 1 xâu N kí tự 0, 1 ứng với dòng tương ứng của B.

Dữ liệu ra trong file BIENDOI.OUT:

- Dòng đầu số nguyên k là số lượng phép biến đổi ít nhất cần áp dụng (k = 0 nếu không biến đổi được)

- Dòng thứ i trong số k dòng tiếp theo ghi hai số nguyên xác định ô cần chọn để thực hiện phép biến đổi.

Ví dụ:

BIENDOI. INP

```
4 5
1 0 0 0 0
1 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0
```

BIENDOI.OUT

```
2
2 1
3 2
```

(Đề ra của bạn Nguyễn Văn Đức – Cần Thơ)

### Bài 86/2001 – Dãy số tự nhiên logic

(Dành cho học sinh Tiểu học)

Đây là một chuỗi các số tự nhiên được sắp xếp theo một logic nào đó. Hãy tìm con số đầu tiên và cuối cùng của dãy số để thay thế cho dấu ?

`? 12 14 15 16 18 20 21 22 ?`

### Bài 87/2001 – Ghi số trên bảng

(Dành cho học sinh THCS)

Trên bảng ghi số 0. Mỗi lần được tăng số đã viết lên bảng thêm 1 đơn vị hoặc tăng gấp đôi. Hỏi sau ít nhất là bao nhiêu bước sẽ thu được số nguyên dương N?

### Bài 88/2001 – Về các số đặc biệt có 10 chữ số

(Dành cho học sinh THCS và THPT)

Lập chương trình tính (và chỉ ra) tất cả các số có 10 chữ số a0a1a2…a9 thoả mãn các tính chất sau:

a0 bằng số chữ số 0 của số trên;

a1 bằng số chữ số 1 của số trên;

a2 bằng số chữ số 2 của số trên;

…….

a9 bằng số chữ số 9 của số trên;

### Bài 89/2001 – Chữ số thứ N

(Dành cho học sinh THCS và THPT)

Khi viết các số tự nhiên tăng dần từ 1, 2, 3,… liên tiếp nhau, ta nhận được một dãy các chữ số thập phân vô hạn, ví dụ:

`234567891011121314151617181920...`

Yêu cầu: Hãy tìm chữ số thứ N của dãy số vô hạn trên.

Dữ liệu vào từ file ‘Number.inp’ gồm một số dòng, mỗi dòng ghi một số nguyên dương N (N<109).

Kết quả ra file ’Number.out’, với mỗi số N đọc được từ file Number.inp, ghi trên dòng tương ứng chữ số thứ N của dãy.

Ví dụ:

| Number.inp | Number.out |
| --- | --- |
| 5 10 54 | 5 1 3 |

### Bài 90/2002 – Thay số trong bảng 9 ô

(Dành cho học sinh Tiểu học)

Cho một bảng vuông gồm 9 ô. Đầu tiên các ô được điền bởi các chữ cái I, S, M. Bạn hãy thay những số thích hợp vào các ô sao cho tổng các số trong các ô điền cùng chữ cái ban đầu là bằng nhau và là một số chia hết cho 4.

Chú ý: các ô cùng chữ cái phải thay bởi những số như nhau.

![100 đề Toán Tin (Tin học & Nhà trường) 11](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image030.png)

### Bài 91/2002 – Các số lặp

(Dành cho học sinh THCS và THPT)

Cho dãy số nguyên gồm N phần tử. Lập chương trình in ra số được lặp nhiều nhất trong dãy.

### Bài 92/2002 – Dãy chia hết

(Dành cho học sinh THPT)

Xét một dãy gồm N số nguyên tuỳ ý. Giữa các số nguyên đó ta có thể đặt các dấu + hoặc – để thu được các biểu thức số học khác nhau. Ta nói dãy số là chia hết cho K nếu một trong các biểu thức thu được chia hết cho K. Hãy viết chương trình xác định tính chia hết của một dãy số đã cho.

Dữ liệu vào: Lấy từ một file văn bản có tên là DIV.INP có cấu trúc như sau:

– Dòng đầu là hai số N và K (2 ≤ N ≤ 10 000, 2 ≤ K ≤ 100), cách nhau bởi dấu trống.

– Các dòng tiếp theo là dãy N số có trị tuyệt đối không quá 10 000 cách nhau bởi dấu trống hoặc dấu xuống dòng.

Dữ liệu ra: Ghi ra file văn bản DIV.OUT số 1 nếu dãy đã cho chia hết cho K và số 0 nếu ngược lại.

Ví dụ:

DIV.INP DIV.OUT DIV.INP DIV.OUT

4 6 0 4 7 1

1 2 3 5 1 2 3 5

(Đề ra của bạn Trần Đình Trung – Lớp 11A Tin – Khối PTCT – ĐH Vinh)

### Bài 93/2002 – Trò chơi bắn bi

(Dành cho học sinh Tiểu học)

Cho bảng bắn bi sau:

![100 đề Toán Tin (Tin học & Nhà trường) 12](assets/images/100-de-toan-tin-tin-hoc-nha-truong-image031-1.png)

Bạn có thể bắn bi vào từ một trong số các đỉnh ở ngoài cùng. Khi được bắn vào trong, hòn bi chỉ có thể tiếp tục đi vào trong ở đỉnh gần đó nhất hoặc lăn theo nhiều nhất là một cạnh để đi vào ở đỉnh kề đó. Biết rằng khi đến hình chữ nhật trong cùng, hòn bi không đ­ợc lăn trên một cạnh nào mà phải đi thẳng vào tâm.

Hãy tìm đường đi sao cho tổng số điểm mà nó đi qua là lớn nhất và có bao nhiêu đường đi để có được số điểm đó.

### Bài 94/2002 – Biểu diễn tổng các số Fibonaci

(Dành cho học sinh THCS)

Cho số tự nhiên N và dãy số Fibonaci: 1, 1, 2, 3, 5, 8, ….

Bạn hãy viết ch­ơng trình kiểm tra xem N có thể biểu diễn thành tổng của của các số Fibonaci khác nhau hay không?

### Bài 95/2002 – Dãy con có tổng lớn nhất

(Dành cho học sinh THPT)

Cho dãy gồm n số nguyên a1, a2, …, an. Tìm dãy con gồm một hoặc một số phần tử liên tiếp của dãy đã cho với tổng các phần tử trong dãy là lớn nhất.

Dữ liệu: Vào từ file văn bản SUBSEQ.INP

- Dòng đầu tiền chứa số nguyên d­ơng n (n < 106).

- Dòng thứ i trong số n dòng tiếp theo chứa số ai (|ai|  1000).

Kết quả: Ghi ra file văn bản SUBSEQ.OUT

- Dòng đầu tiên ghi vị trí của phần tử đầu tiên của dãy con tìm được.

- Dòng thứ hai ghi vị trí của phần tử cuối cùng của dãy con tìm được

- Dòng thứ ba ghi tổng các phần tử của dãy con tìm được.

Ví dụ:

| SUBSEQ.INP | SUBSEQ.OUT |
| --- | --- |
| 8 12 -14 1 23 -6 22 -34 13 | 3 6 40 |

### Bài 96/2002 – Số chung lớn nhất

(Dành cho học sinh THPT)

Cho 2 xâu:

X = x1x2..xM. (Với xi là các kí tự số từ ‘0’ đến ‘9’)

Y = y1y2..yN.( Với yi là các kí tự số từ ‘0’ đến ‘9’)

(M, N <= 250)

Ta gọi: Z = z1z2..zk là xâu chung của 2 xâu X, Y nếu xâu Z nhận đ­ợc từ xâu X bằng cách xoá đi một số kí tự và cũng nhận được từ xâu Y bằng cách xoá đi một số kí tự.

Yêu cầu: Tìm một xâu chung của 2 xâu X, Y sao cho xâu nhận được tạo thành một số lớn nhất có thể được.

Dữ liệu vào file: String.inp

Gồm 2 dòng, dòng 1 là xâu X, dòng 2 là xâu Y.

Kết quả ra file: String.out

Gồm 1 dòng duy nhất là số lớn nhất có thể nhận được.

Ví dụ:

| String.inp | String.out |
| --- | --- |
| 19012304 034012 | 34 |

### Bài 97/2002 – Thay số trong bảng

(Dành cho học sinh Tiểu học)

Bảng dưới gồm 9 ô, ban đầu được điền bởi các chữ cái. Bạn hãy thay các chữ cái bởi các chữ số từ 0 đến 8 vào ô sao cho tất cả các số theo hàng ngang, hàng dọc đều là số có 3 chữ số (chữ số hàng trăm phải khác 0) và thoả mãn:

4

5

6

 1 2 3

| a | b | c |
| --- | --- | --- |
| d | e | f |
| g | h | i |

Ngang

4 – Bội số nguyên của 8;

5 – Tích của các số tự nhiên liên tiếp đầu tiên;

6 – Tích các số nguyên tố kề nhau

Dọc

1 – Bội nguyên của 11;

2 – Tích của nhiều thừa số 2;

3 – Bội số nguyên của 11.

(Đề ra của bạn Đào Tuấn Anh – Lớp 10A Trường THPT Năng Khiếu Ngô Sĩ Liên – thị xã Bắc Giang)

### Bài 98/2002 – Số phản nguyên tố

(Dành cho học sinh THCS và THPT)

Một số n gọi là số phản nguyên tố nếu số ước số của nó là nhiều nhất trong n số tự nhiên đầu tiên. Cho số K (K <= 2 tỷ). Hãy ghi ra số phản nguyên tố lớn nhất nhỏ hơn hoặc bằng K.

Dữ liệu vào trong file PNT.INP nội dung gồm:

– Dòng đầu tiên là số M (1 < M <= 100) – số các số cần tìm số phản nguyên tố lớn nhất của nó;

– M dòng tiếp theo lần lượt là các số K1, K2, K3, …, KM;

Dữ liệu ra trong file PNT.OUT gồm M dòng: dòng thứ i là số phản nguyên tố lớn nhất nhỏ hơn hoặc bằng Ki.

Ví dụ:

PNT.INP

1

1000

PNT.OUT

840

(Tác giả: Master – gửi bài qua Website của Tin học & Nhà trường)

### Bài 99/2002 – Bài toán chúc Tết

(Dành cho học sinh THPT)

Một người quyết định dành một ngày Tết để đến chúc Tết các bạn của mình. Để chắc chắn, hôm trước anh ta đã điện thoại đến từng người để hỏi khoảng thời gian mà người đó có thể tiếp mình. Giả sử có N người được hỏi (đánh số từ 1 đến N), người thứ i cho biết thời gian có thể tiếp trong ngày là từ Ai đến Bi (i = 1, 2, …, N). Giả thiết rằng, khoảng thời gian cần thiết cho mỗi cuộc gặp là H và khoảng thời gian chuẩn bị từ một cuộc gặp đến một cuộc gặp kế tiếp là T. Bạn hãy xây dựng giúp một lịch chúc Tết để anh ta có thể chúc Tết được nhiều người nhất.

File dữ liệu vào trong file CHUCTET.INP gồm dòng đầu ghi số N, dòng thứ i trong số N dòng tiếp theo ghi khoảng thời gian có thể tiếp khách của người i gồm 2 số thực Ai và Bi (cách nhau ít nhất một dấu trắng). Dòng tiếp theo ghi giá trị H (số thực) và dòng cuối cùng ghi giá trị T (số thực). Giả thiết rằng các giá trị thời gian đều được viết dưới dạng thập phân theo đơn vị giờ, tính đến 1 số lẻ (thí dụ 10.5 có nghĩa là m­ời giờ r­ỡi) và đều nằm trong khoảng từ 8 đến 21 (từ 8 giờ sáng đến 9 giờ tối). Số khách tối đa không quá 30.

Kết quả ghi ra file CHUCTET.OUT gồm dòng đầu ghi K là số người được thăm, K dòng tiếp theo ghi trình tự đi thăm, mỗi dòng gồm 2 số (ghi cách nhau ít nhất một dấu trắng): số đầu là số hiệu người được thăm, số tiếp theo là thời điểm gặp tương ứng.

Thí dụ:

CHUCTET.INP

20

10.5 12.6

15.5 16.6

14.0 14.1

17.5 21.0

15.0 16.1

10.5 10.6

19.0 21.0

10.5 13.6

12.5 12.6

11.5 13.6

12.5 15.6

16.0 18.1

13.5 14.6

12.5 17.6

13.0 13.1

18.5 21.0

9.0 13.1

10.5 11.6

10.5 12.6

18.0 21.0

0.5

0.1

CHUCTET.OUT

16

17 9.0

1 10.5

18 11.1

19 11.7

8 12.3

10 12.9

11 13.5

13 14.1

5 15.0

2 15.6

12 16.2

14 16.8

4 17.5

7 19.0

16 19.6

20 20.2

(Đề ra của bạn Đinh Quang Huy – ĐHKHTN – ĐHQG Hà Nội )

### Bài 100/2002 – Mời khách dự tiệc

(Dành cho học sinh THPT)

Công ty trách nhiệm hữu hạn “Vui vẻ” có n cán bộ đánh số từ 1 đến n. Cán bộ i có đánh giá độ vui tính là vi (i = 1, 2, …, n). Ngoại trừ Giám đốc Công ty, mỗi cán bộ có 1 thủ trưởng trực tiếp của mình.

Bạn chỉ cần giúp Công ty mời một nhóm cán bộ đến dự dạ tiệc “Vui vẻ” sao cho trong số những người được mời không đồng thời có mặt nhân viên và thủ trưởng trực tiếp và đồng thời tổng đánh giá độ vui tính của những người dự tiệc là lớn nhất.

Giả thiết rằng mỗi một thủ trưởng có không quá 20 cán bộ trực tiếp dưới quyền.

Dữ liệu: Vào từ file văn bản GUEST.INP

- Dòng đầu tiên ghi số cán bộ của Công ty: n (1 < n < 1001);

- Dòng thứ i trong số n dòng tiếp theo ghi hai số nguyên dương ti, vi; trong đó ti là số hiệu của thủ trưởng trực tiếp và vi là độ vui tính của cán bộ i (i = 1, 2, …, n). Quy ước ti = 0 nếu i là số hiệu của Giám đốc Công ty.

Kết quả: Ghi ra file văn bản GUEST.OUT

- Dòng đầu tiên ghi hai số m, v; trong đó m là tổng số cán bộ được mời còn v là tổng độ vui tính của các cán bộ được mời dự tiệc;

- Dòng thứ i trong số m dòng tiếp theo ghi số hiệu của cán bộ được mời thứ i (i = 1, 2, …, m).

Ví dụ:

| GUEST.INP | GUEST.OUT |
| --- | --- |
| 3 0 3 1 6 2 4 | 2 7 1 3 |

| GUEST.INP | GUEST.OUT |
| --- | --- |
| 7 0 1 1 1 1 12 2 50 2 1 3 1 3 1 | 3 63 3 4 5 |

(Đề ra của bạn Lưu Văn Minh)

## Phần 2: LỜI GIẢI 100 đề Toán Tin (Tin học & Nhà trường)

Lời giải cho các bài toán, mời bạn đọc xem trong file: [File PDF: Lời giải 100 đề Toán Tin](/assets/docs/100DeToanTin-giasu.ai.vn.pdf)
