---
title: 'Chuyên đề Số học THCS bồi dưỡng học sinh giỏi: Lý thuyết và 108 bài tập'
description: 'Tuyển tập 108 bài toán Số học THCS bồi dưỡng học sinh giỏi: Tính chia hết, số ước số, chữ số tận cùng của lũy thừa, số nguyên tố, số chính phương, phương trình Diophante, nguyên lý Dirichlet và các hệ đếm.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Số học
  - Toán 6
  - Toán 7
  - Học sinh giỏi
  - Chia hết
  - Số nguyên tố
  - Số chính phương
  - TS. Nguyễn Văn Lợi
  - Sigma-Maths
grade: 6
---

# Số học I (Trung học cơ sở): Lý thuyết và 108 bài tập bồi dưỡng học sinh giỏi

> [!NOTE] Thông tin tác giả & Bản quyền tài liệu
> - **Tác giả / Chủ biên:** TS. Nguyễn Văn Lợi và Nhóm Sigma-Maths
> - **Email liên hệ:** sigmathsgroup@gmail.com / loiscenter@gmail.com
> - **Đơn vị phát hành:** Sigma-Maths / Lợi Center (Hà Nội, 05/04/2017)
> - **Mục đích:** Bồi dưỡng học sinh khá giỏi, rèn luyện tư duy logic số học, phát triển kỹ năng giải toán sáng tạo từ lớp 6 đến lớp 9.

---

## Lời nói đầu

Tập tài liệu này được sưu tầm và biên soạn phục vụ cho công nghệ giáo dục của nhóm **Sigma-Maths**. Các bài tập và ví dụ được xây dựng như những giờ học trên lớp. Khung kiến thức là các bài tập đã trải qua nhiều thử nghiệm, phần lý thuyết chúng tôi dành cho sự sáng tạo của các giáo viên thực hiện.

Từ một thực tế hiển nhiên, hầu hết học sinh tiếp thu kiến thức thông qua lời giảng của thầy cô và củng cố kiến thức thông qua bài tập, rất ít em học từ đọc sách, nên hầu như những giáo trình đầy đủ chưa phát huy tác dụng (nhất là với học sinh từ lớp 6 đến lớp 10, ít học sinh đọc, có đọc cũng hoa mắt vì không có bản lĩnh đọc, chưa thể cảm nhận được tiêu chuẩn không thể thiếu và không được thừa của một công trình khoa học).

Với phương châm viết vừa phải, dạy vừa đủ, giữ lấy cái hay cái đẹp của toán học và thổi niềm say mê sáng tạo cho học sinh, giúp các em học sinh trang bị lượng kiến thức vừa đủ, để nhanh chóng tiếp cận và tập làm chủ với luồng tri thức mới của thế kỉ 21 đang ngày càng lan tỏa với tốc độ ánh sáng.

Việc đăng tải các tư liệu giảng dạy của mình, chúng tôi chỉ nhằm mục đích giúp các bạn giáo viên, các bạn học sinh, các gia đình hiểu, làm quen với công nghệ giáo dục chúng tôi lựa chọn, trên cơ sở đó cùng cộng tác, tham gia, góp ý với chúng tôi để ngày càng hoàn thiện công nghệ giáo dục của mình:

> **HAY – ĐẸP – SAY – THỰC DỤNG – THÀNH QUẢ**

*Hà Nội, 05/04/2017*  
*Ý kiến xin chuyển về: sigmathsgroup@gmail.com / loiscenter@gmail.com*

---

## Mục lục

1. [Các bài toán chia hết (Bài 1 – Bài 8)](#1-các-bài-toán-chia-hết)
2. [Số ước số của một số (Bài 9 – Bài 14)](#2-số-ước-số-của-một-số)
3. [Các bài toán về số học (Bài 15 – Bài 20)](#3-các-bài-toán-về-số-học)
4. [Tận cùng của các số lũy thừa (Bài 21 – Bài 30)](#4-tận-cùng-của-các-số-lũy-thừa)
5. [Các số nguyên tố I (Bài 31 – Bài 40)](#5-các-số-nguyên-tố-i)
6. [Các số nguyên tố II (Bài 41 – Bài 44)](#6-các-số-nguyên-tố-ii)
7. [Tại sao không phải là số chính phương (Bài 45 – Bài 51)](#7-tại-sao-không-phải-là-số-chính-phương)
8. [Số chính phương (Bài 52 – Bài 58)](#8-số-chính-phương)
9. [Phương trình nghiệm nguyên (DIOPHANT) (Bài 59 – Bài 64)](#9-phương-trình-nghiệm-nguyên-diophant)
10. [Nguyên lý Dirichlet trong số học (Bài 65 – Bài 68)](#10-nguyên-lý-dirichlet-trong-số-học)
11. [Chữ số của một số (Bài 69 – Bài 80)](#11-chữ-số-của-một-số)
12. [Các hệ đếm có cơ số khác nhau (Bài 81 – Bài 108)](#12-các-hệ-đếm-có-cơ-số-khác-nhau)
13. [Một số định nghĩa và định lý cần thiết](#13-một-số-định-nghĩa-và-định-lý-cần-thiết)
14. [Thay cho lời kết](#14-thay-cho-lời-kết)

---

## 1 Các bài toán chia hết

**Ví dụ 1.** Chứng minh rằng $72 \mid (10^{20} + 8)$.  
*Lời giải:* $10^{20} + 8$ có ba chữ số tận cùng là $008$ vậy chia hết cho 8 (quy tắc chia hết cho 8) và tổng các chữ số của nó bằng $1 + 0 + 8 = 9$ chia hết cho 9. Do $\gcd(8, 9) = 1$ nên $72 \mid (10^{20} + 8)$.

**Bài 1.** Số nào là ước số có hai chữ số lớn nhất của $22227777$?

**Bài 2.** Chứng minh rằng:
- a) $9 \mid (10^{33} - 1)$;
- b) $6 \mid (10^{10} + 14)$.

**Bài 3.** Tìm các cặp $(x, y)$ sao cho:
- a) $36 \mid \overline{52x2y}$;
- b) $72 \mid \overline{x378y}$;
- c) $45 \mid \overline{24x68y}$.

**Bài 4.** Từ các số $1, 2, 3, 4, 5, 6$ theo một trật tự nào đó hãy viết một số nguyên tố có 6 chữ số.

**Ví dụ 2.** Một số có 6 chữ số gồm các số từ 1 đến 6 viết theo thứ tự nào đó. Hai số đầu tiên hợp lại thành một số chia hết cho 2; 3 số đầu tiên hợp lại thành số chia hết cho 3; và cứ tiếp như vậy ($2 \le k \le 6$). Hỏi số này có thể là số nào?  
*Đáp án:* $123654$ và $321654$.

**Bài 5.** Số nào là số có 9 chữ số nhỏ nhất có tính chất sau: với $k$ chữ số đầu tiên hợp lại thành số chia hết cho $k$ ($2 \le k \le 9$)?

**Bài 6.** Hãy cho 3 số đầu tiên của dãy các số có tính chất sau:
- a) Là bội của 15.
- b) Tổng các chữ số bằng 15.

**Ví dụ 3.** Số nào là số nhỏ nhất chia hết cho 36 và các chữ số của nó là các số chẵn?  
*Gợi ý:* Tổng các chữ số chia hết cho 9 và số đó chia hết cho 4. Đáp số: $288$.

**Bài 7.** Tìm số nhỏ nhất chia hết cho 45 và chỉ chứa các chữ số 0 và 8.

**Bài 8.** Số tự nhiên nhỏ nhất nào chia hết cho tất cả các số $1, 2, \dots, 9, 10$?

---

## 2 Số ước số của một số

**Ví dụ 1.** Liệt kê tất cả các ước số của 72.  
*Đáp số:* 72 có 12 ước số (chỉ xét các ước số dương).  
*Ghi chú:* Ta nhận được số ước số của một số nếu trong phân tích ra thừa số nguyên tố của số đó, từ mỗi thừa số lấy số mũ cộng thêm 1 rồi nhân tất cả các số này với nhau:  
Nếu $N = p_1^{\alpha_1} p_2^{\alpha_2} \dots p_k^{\alpha_k}$ thì số ước số là $d(N) = (\alpha_1 + 1)(\alpha_2 + 1)\dots(\alpha_k + 1)$.

**Bài 9.** Số $16200$ có bao nhiêu ước số?

**Bài 10.** Những số có ba chữ số nào có đúng 5 ước số?

**Ví dụ 2.** Số tự nhiên nhỏ nhất nào có đúng 12 ước số?  
*Đáp số:* 60.

**Bài 11.** Tìm số tự nhiên nhỏ nhất có 18 ước số?

**Bài 12.** Xác định số tự nhiên nhỏ nhất có 42 ước số và chia hết cho 42?

**Ví dụ 3.** Hãy chứng minh rằng một số có số ước số là số lẻ khi và chỉ khi số đó là số chính phương.  
*Gợi ý:* Khi phân tích ra thừa số nguyên tố thì các số mũ của các thừa số là chẵn.

**Bài 13.** Số $7777777$ có $1995$ ước số được không?

**Bài 14.** Một lãnh chúa nhân ngày sinh nhật của mình, ông ta muốn phóng thích một số tù nhân. Trong nhà tù có 100 ngăn và 100 cai ngục. Cai ngục đầu tiên mở tất cả các cánh cửa của các ngăn. Cai ngục thứ 2 đóng tất cả các cánh cửa chia hết cho 2. Cai ngục thứ ba lại xem các cánh cửa có số thứ tự chia hết cho 3, cái nào mở thì đóng lại và cái nào đóng thì mở ra. Các cai ngục $4, 5, \dots, k, \dots$ cũng tiếp tục làm như vậy: nếu số thứ tự của cánh cửa chia hết cho $k$ mà đóng thì mở ra, nếu mở thì đóng lại. Hỏi cuối cùng những ngăn nào cửa sẽ được mở?

---

## 3 Các bài toán về số học

**Ví dụ 1.** Những số nguyên $x$ nào thỏa mãn $\dfrac{x + 3}{x - 5}$ cũng là số nguyên?  
*Hướng dẫn:* $\dfrac{x + 3}{x - 5} = 1 + \dfrac{8}{x - 5}$.

**Bài 15.** Có bao nhiêu số tự nhiên $n$, sao cho $x = \dfrac{n + 1}{n - 3}$ cũng là số tự nhiên?

**Bài 16.** Những số nguyên $x$ nào sao cho $\dfrac{4x + 3}{x - 3}$ cũng là số nguyên?

**Ví dụ 2.** Có thể viết số $2^{20}$ thành tổng của các số (ít nhất hai số) nguyên dương liên tiếp không?  
*Đáp số:* Không thể.  
*Câu hỏi thêm:* Có thể viết số $2^{20}$ thành tổng của các số (ít nhất hai số) nguyên liên tiếp không?  
*Câu trả lời là có thể.*

**Bài 17.** Có bao nhiêu cách có thể viết $1989$ thành tổng của một số số nguyên dương liên tiếp?

**Bài 18.** Có bao nhiêu cách có thể viết $1995$ thành tổng của một số số nguyên dương lẻ liên tiếp?

**Ví dụ 3.** Tối giản số $\dfrac{100!}{2^{100}}$. Hỏi mẫu số sau khi tối giản là bao nhiêu?  
*Bổ sung:* Có thể giới thiệu thêm về định lý Legendre/Polignac và ứng dụng tìm số mũ của số nguyên tố trong $n!$.

**Bài 19.** Mẫu số của phân số $\dfrac{100!}{6^{50}}$ sau khi đã tối giản là bao nhiêu?

**Bài 20.** Nhân 100 số nguyên dương đầu tiên ($100!$). Hỏi trong kết quả chữ số thứ 24 tính từ bên phải là số nào (trên hệ đếm cơ số 10)?

---

## 4 Tận cùng của các số lũy thừa

**Ví dụ 1.** Hãy chỉ ra rằng tổng của 5 số chính phương liên tiếp thì luôn luôn chia hết cho 5.  
*Hướng dẫn:* Các số tận cùng của dãy các số chính phương liên tiếp lập thành dãy số tuần hoàn.

**Bài 21.** Số tận cùng của tích sau là bao nhiêu: $1^1 \cdot 2^2 \cdot 3^3 \dots 9^9$?

**Bài 22.** $N = 1^2 + 2^2 + 3^2 + \dots + 1996^2$ có tận cùng bằng bao nhiêu?

**Bài 23.** Hãy chỉ ra rằng nếu $a$ là một số nguyên thì hoặc $a^3 - a$ hoặc $a^3 + a$ chia hết cho 10.

**Ví dụ 2.** Hãy chỉ ra rằng $N = 100! + 7$ không phải là số chính phương.  
*Hướng dẫn:* Xét chữ số tận cùng của các số chính phương (chỉ có thể là $0, 1, 4, 5, 6, 9$).

**Bài 24.** Chỉ ra rằng $N = 11^7 + 11^6 + 11^5 + \dots + 11 + 1$ không là số chính phương.

**Ví dụ 3.** $2^{1986}$ tận cùng bằng số nào? Giải thích!  
*Đáp số:* 4.

**Bài 25.** Số $1992^{1991}$ tận cùng bằng số nào?

**Bài 26.** Với giá trị nào của $n$ thì biểu thức $1^n + 9^n + 9^n + 6^n$ chia hết cho 5 (tính nhanh)?

**Bài 27.** Biểu thức $1^{1994} \cdot 2^{1994} \dots 997^{1994}$ có tận cùng bằng số nào (tính nhanh)?

**Bài 28.** $32^{23} + 23^{32}$ có tận cùng bằng số nào?

**Bài 29.** Tổng $7^{73} + 37^{37}$ có chia hết cho 10 hay không?

**Bài 30.** Xác định số tận cùng của $N = 2 + 2^2 + 2^3 + \dots + 2^{1995}$?

---

## 5 Các số nguyên tố I

**Bài 31.** Tổng của 100 số nguyên tố đầu tiên chẵn hay lẻ?

**Bài 32.** Hãy cho hai số nguyên dương sao cho tổng và tích của chúng đều là số nguyên tố.

**Bài 33.** Ba số nguyên lập thành một cấp số cộng và tích của chúng là số nguyên tố. Những số này là số nào?

**Bài 34.** Hãy cho hai số nguyên tố $P$ và $Q$ sao cho $P + Q$ và $P - Q$ cũng là số nguyên tố.

**Bài 35.** Có hay không 6 số nguyên tố liên tiếp nhau sao cho tổng của chúng cũng là số nguyên tố?

**Ví dụ 1.** Tổng của 9 số liên tiếp có thể là số nguyên tố hay không?  
*Đáp số:* Không là số nguyên tố.

**Bài 36.** Tổng của 8 số liên tiếp có thể là số nguyên tố hay không?

**Bài 37.** Tổng của 7 số liên tiếp có thể là số nguyên tố hay không?

**Ví dụ 2.** Từ 9 số nguyên tố đầu tiên có thể lập thành bảng kích thước $3 \times 3$ sao cho: tổng các hàng, tổng các cột và tổng hai đường chéo bằng nhau được hay không? (Bảng có tính chất như vậy còn được gọi là bảng ma phương).  
*Lời giải:* Không thể được vì hai hàng và cột có số 2 có tổng là số chẵn. Các hàng và cột khác có tổng lẻ.

**Ví dụ 3.** Trong một cái bình có 67 viên bi trắng và đỏ. Có loại bé và loại lớn. Biết rằng:
- a) Số bi đỏ chia hết cho 5.
- b) Số bi đỏ lớn bằng số bi trắng.
- c) Số bi trắng nhỏ có ít nhất.
- d) Số của tất cả các loại bi đều là số nguyên tố.

Hỏi mỗi loại có bao nhiêu viên bi?  
*Đáp số:* 7 đỏ lớn, 53 đỏ nhỏ, 5 trắng lớn và 2 trắng nhỏ có trong bình.

**Bài 38.** Tại sao 1997 không thể là tổng của hai số nguyên tố?

**Bài 39.** Tổng của ba số nguyên tố là 1996, trong ba số, số nhỏ nhất là số nào?

**Bài 40.** Trong dãy số $7, 19, 25, \dots$ (mỗi số lớn hơn số trước nó 6 đơn vị). Hỏi trong các số của dãy có số nào viết được thành hiệu của hai số nguyên tố?

---

## 6 Các số nguyên tố II

**Ví dụ 1.** Hãy chỉ ra rằng nếu số nguyên tố $p > 3$ thì: $3 \mid (p^2 - 1)$.  
*Hướng dẫn:* Định lý Fermat nhỏ, hay xét số dư khi chia cho 3.

**Ví dụ 2.** Với các số nguyên tố $p, q$ nào thì các số $p + q$ và $p^2 + q^2$ cũng là các số nguyên tố?  
*Hướng dẫn:* $q = 2$.

**Bài 41.** Cho $p$ là số nguyên tố bất kỳ. Chứng minh rằng $p^2 + 26$ là hợp số.

**Bài 42.** Tìm tất cả các số nguyên tố $p$ và $q$ sao cho $p^2 + q^2 + 16$ cũng là số nguyên tố.

**Ví dụ 3.** Hãy chỉ ra rằng nếu $p$ và $p^2 + 8$ là các số nguyên tố thì $p^2 + p + 1$ cũng là số nguyên tố.  
*Hướng dẫn:* Tính $p$. (Xét số dư khi chia cho 3, suy ra $p = 3$).

**Bài 43.** Hãy chỉ ra rằng nếu $p$ và $8p^2 + 1$ là số nguyên tố thì $8p^2 + 2p + 1$ cũng là số nguyên tố.

**Ví dụ 4.** Với số nguyên tố $p$ nào thì tất cả các số $2p + 1, 3p + 2, 4p + 3, 6p + 1$ là số nguyên tố?  
*Hướng dẫn:* Tính $p$.

**Bài 44.** Có hay không số nguyên dương $k$ sao cho $k + 5, k + 7, k + 15$ đều là số nguyên tố?

---

## 7 Tại sao không phải là số chính phương

**Ví dụ 1.** Tại sao $10^{10} + 2$ không là số chính phương?  
*Hướng dẫn:* Xét số tận cùng (tận cùng bằng 2 không thể là số chính phương).

**Bài 45.** Tại sao các số sau không là số chính phương?
- a) $100! + 50! + 10!$
- b) $100^{100} + 10^{50} + 1$
- c) $3 + 3^2 + \dots + 3^{100}$

**Ví dụ 2.** $\overline{abcabc}$ không là số chính phương, tại sao?  
*Hướng dẫn:* Vì $\overline{abcabc} = \overline{abc} \cdot 1001 = \overline{abc} \cdot 7 \cdot 11 \cdot 13$, chứa các thừa số nguyên tố bậc 1 nếu $\overline{abc}$ không chứa chúng.

**Bài 46.** Tại sao các số có sau không là số chính phương?
- a) $\overline{abab}$
- b) $\overline{ababab}$

**Ví dụ 3.** Tại sao các số được tạo thành từ các số $2, 3, 4, 5, 6$ (mỗi số một lần) không là số chính phương?  
*Hướng dẫn:* Tổng các chữ số chia 3 dư 2.

**Ví dụ 4.** Tổng của hai số chính phương lẻ tại sao không là số chính phương?  
*Hướng dẫn:* Tổng chia 4 dư 2.

**Bài 47.** Tại sao 30 số 1 và một vài số 0 không tạo thành được số chính phương?

**Bài 48.** Số $11\dots11$ (100 con số 1) không là số chính phương?

**Bài 49.** Tổng $1^2 + 2^2 + 3^2 + \dots + 56^2$ không là số chính phương?

**Bài 50.** Một số có 4 chữ số tận cùng giống nhau và khác 0 không thể là số chính phương!

**Bài 51.** Tại sao tổng của ba số chính phương liên tiếp không là số chính phương?

---

## 8 Số chính phương

**Ví dụ 1.** Với số nguyên dương $n$ nào thì số $n^2 + n + 41$ là số chính phương?  
*Đáp số:* $n = 40$.

**Bài 52.** Với $n$ nguyên dương nào thì $n^2 + n - 2$ là số chính phương?

**Bài 53.** Trong các số dưới đây, số nào là số chính phương?
- a) $3\,669\,517\,136\,205\,224$;
- b) $1\,898\,732\,825\,398\,318$;
- c) $4\,751\,006\,864\,295\,101$.

**Bài 54.** Có bao nhiêu số chính phương có tổng các chữ số bằng 1995?

**Bài 55.** Hãy cho một dãy cấp số cộng có các phần tử là các số nguyên dương khác nhau từng đôi một và có vô hạn các phần tử sao cho giữa chúng không có số chính phương nào?

**Ví dụ 2.** Số có 4 chữ số nào là bình phương của một số nguyên mà 2 chữ số đầu tiên bằng nhau và 2 chữ số cuối cùng cũng bằng nhau?  
*Đáp số:* $88^2 = 7744$.

**Bài 56.** Hãy chỉ ra rằng bất kỳ lũy thừa nào của 10 cũng có thể phân tích được thành tổng của hai số chính phương.

**Bài 57.** Số $1020304030201$ (có 13 chữ số) có phải là số chính phương hay không?

**Ví dụ 3.** Các phương trình sau có thể giải được trong tập các số nguyên hay không?
- a) $x^2 + y^2 = 1987$;
- b) $x^2 + y^2 = 1986$;
- c) $x^2 + y^2 = 1989$;
- d) $x^2 - y^2 = 1989$;
- e) $x^2 - y^2 = 1990$.

**Bài 58.** Chứng minh rằng có nhiều vô cùng các số tự nhiên không viết được dưới dạng:
- a) Tổng hai số chính phương.
- b) Tổng hai số lập phương.

---

## 9 Phương trình nghiệm nguyên (DIOPHANT)

**Ví dụ 1.** Căn phòng của An là hình chữ nhật có số đo các cạnh là các số nguyên (m) và số đo diện tích ($m^2$) là một số ít hơn 1 đơn vị so với độ lớn của chu vi (m). Hỏi chiều dài và chiều rộng của căn phòng?  
*Lời giải:* $ab + 1 = 2(a + b) \implies ab - 2(a + b) + 4 = 3 \implies (a - 2)(b - 2) = 3$.

**Ví dụ 2.** Tích của ba số nguyên tố bằng 5 lần tổng của chúng. Hỏi ba số nguyên tố này là những số nào?  
*Hướng dẫn:* $abc = 5(a + b + c)$, vậy có một số bằng 5. $(b - 1)(c - 1) = 6$.

**Bài 59.** Một hình chữ nhật có số đo của chu vi bằng số đo của diện tích. Các cạnh là các số nguyên. Hỏi diện tích của hình chữ nhật?

**Bài 60.** Giải phương trình nghiệm nguyên dương:
$$ab + 2a + 3b = 36$$

**Bài 61.** Giải phương trình nghiệm nguyên dương:
$$abc + ab + ac + bc + a + b + c = 1000$$

**Bài 62.** Giải phương trình nghiệm nguyên dương:
$$\dfrac{1}{a} + \dfrac{1}{b} = \dfrac{1}{7}$$

**Ví dụ 3.** Tìm các nghiệm nguyên dương của phương trình: $x^2 - 4y^2 = 116$.  
*Đáp số:* $x = 30, y = 15$.

**Bài 63.** Hai số nguyên dương nào mà hiệu bình phương của chúng bằng 1993?

**Ví dụ 4.** Tìm những số có ba chữ số bằng 19 lần tổng của các chữ số của nó?

**Bài 64.** Một số bằng 17 lần tổng các chữ số của nó. Hỏi số đó là số nào?

---

## 10 Nguyên lý Dirichlet trong số học

*Nguyên lý Dirichlet hay còn gọi là nguyên lý chuồng và thỏ.*

**Ví dụ 1.** Hãy chỉ ra rằng từ 5 số nguyên tố lớn hơn 10, luôn chọn được 2 số có hiệu chia hết cho 10.

**Bài 65.** Chứng minh rằng từ 11 số nguyên luôn chọn được 2 số có hiệu chia hết cho 10.

**Bài 66.** Chứng minh rằng từ bình phương của 7 số khác nhau, luôn chọn được 2 số có hiệu chia hết cho 10.

**Ví dụ 2.** Chứng minh rằng từ 20 số nguyên bất kì luôn chọn được 2 số có hiệu chia hết cho 19.

**Bài 67.** Chứng minh rằng từ 7 số nguyên, luôn chọn được 2 số có hiệu chia hết cho 6.

**Ví dụ 3.** Từ 3 số chính phương, luôn chọn được 2 số có hiệu chia hết cho 3?

**Bài 68.** Mệnh đề sau đúng hay sai: Từ 3 số chính phương luôn chọn được 2 số có hiệu chia hết cho 4?

---

## 11 Chữ số của một số

**Bài 69.** Người ta nhân ba số nguyên dương lẻ liên tiếp với nhau, và nhân kết quả nhận được với 5 thì được số có dạng $\overline{ABABAB}$ trong đó $A$ và $B$ là các chữ số. Hỏi ba số đầu tiên là những số nào?

**Bài 70.** Người ta ghi chữ số 0 vào sau một số có hai chữ số bất kì sau đó lại ghi tiếp số có hai chữ số lúc trước. Hãy chỉ ra rằng số có năm chữ số vừa nhận được chia hết cho 11 và 13.

**Bài 71.** Một số trong hệ đếm cơ số 10 bằng 17 lần tổng của các chữ số của nó. Hỏi số đó là số nào?

**Bài 72.** Chứng minh rằng nếu ghi một số có 3 chữ số hai lần cạnh nhau, ta luôn nhận được một số chia hết cho 7, 11 và 13.

**Bài 73.** Cho $A, B$ và $C$ là ba chữ số khác nhau. Có khi nào cả hai số có ba chữ số $\overline{ABC}$ và $\overline{CBA}$ cùng chia hết cho 7?

**Bài 74.** Các góc trong của một tam giác có số đo theo độ là những số nguyên. Góc thứ nhất có số đo là một số có ba chữ số, các góc khác nhận được bằng cách xóa chữ số ở giữa, hoặc chữ số cuối cùng của số đo của góc thứ nhất. Hỏi số đo của ba góc của tam giác là bao nhiêu?

**Bài 75.** Tổng của hai số có ba chữ số chia hết cho 37. Nếu ghi hai số cạnh nhau ta được một số có sáu chữ số. Chứng minh rằng số này cũng chia hết cho 37.

**Bài 76.** Một số chính phương có bốn chữ số. Biết rằng chữ số đầu tiên và chữ số thứ hai, chữ số thứ ba và chữ số thứ tư giống nhau. Hỏi số đó là số nào?

**Bài 77.** Có tồn tại số palindrom có bốn chữ số và là số chính phương hay không? (Số palindrom là số đọc xuôi cũng như đọc ngược đều như nhau - hay còn gọi là số đối xứng).

**Bài 78.** Có tồn tại hay không số có bốn chữ số $\overline{abcd}$ sao cho $\overline{abcd} - \overline{dcba} = 1008$?

**Bài 79.** Các số chính phương có thể có tận cùng là số có hai chữ số nào?

**Bài 80.** Hãy tìm số tự nhiên có tổng các chữ số chia hết cho 13 và số tiếp theo của nó cũng có tính chất tương tự!

---

## 12 Các hệ đếm có cơ số khác nhau

**Bài 81.** Viết tất cả các số từ 1 đến 20 trong hệ đếm cơ số:
- a) 2;
- b) 3;
- c) 4;
- d) 5.

**Bài 82.** Trong hệ đếm cơ số 2, số nào là số:
- a) Nhỏ nhất có 2 chữ số;
- b) Lớn nhất có 2 chữ số;
- c) Lớn nhất có 3 chữ số.  
Hãy viết các số này trong hệ đếm cơ số 10.
- d) Trong hệ đếm cơ số 2 có bao nhiêu số có 2, 3, 4 chữ số?

**Bài 83.** Trong hệ đếm cơ số 5, số nào là số:
- a) Nhỏ nhất có 2 chữ số;
- b) Lớn nhất có 2 chữ số;
- c) Lớn nhất có 3 chữ số.  
Hãy viết các số này dưới trong hệ đếm cơ số 10.
- d) Trong hệ đếm cơ số 5 có bao nhiêu số có 2, 3, 4 chữ số?

**Bài 84.** Điền các số còn thiếu trong các phép tính sau:
- a) Phép cộng trong hệ cơ số 7:
$$\begin{array}{r}
22_7 \\
+\quad ..5_7 \\
\hline
1043_4
\end{array}$$
- b) Phép nhân trong hệ cơ số 4:
$$\begin{array}{r}
123_4 \\
\times\quad \dots_4 \\
\hline
1101 \\
312\phantom{0} \\
\hline
\dots_4
\end{array}$$

**Bài 85.** Bố nói với mọi người: *"Tôi năm nay 113 tuổi. Tôi có ba người con trai: 35, 34 và 32 tuổi. Khi tôi 34 tuổi thì cháu lớn nhất của tôi ra đời"*.
- a) Hỏi ông bố nói tuổi theo hệ đếm cơ số nào?
- b) Nếu điều kiện cuối cùng thay đổi: *"Khi tôi 45 tuổi thì con trai cả của tôi sinh ra"*. Hỏi ông bố đang nói trong hệ đếm nào? Bố và các con bao nhiêu tuổi?
- c) Nếu điều kiện cuối cùng thay đổi: *"Khi tôi 56 tuổi thì con trai cả của tôi sinh ra"*. Hỏi ông bố đang nói trong hệ đếm nào? Bố và các con bao nhiêu tuổi?

**Bài 86.** Các đẳng thức sau đúng trong hệ đếm cơ số nào?
- a) $3 + 4 = 11$;
- b) $30 + 40 = 110$;
- c) $100 + 100 = 1000$;
- d) $200 + 200 = 2000$;
- e) $62 + 16 = 100$;
- f) $50 \cdot 5 = 500$;
- g) $50 \cdot 5 = 410$;
- h) $50 \cdot 5 = 310$.

**Bài 87.** Số $2004$ trong một hệ đếm khác là $13140$. Hệ đếm đó là hệ nào?

**Bài 88.** Điền những chữ số thích hợp vào ô trống, sao cho đẳng thức đúng:
$$3\underline{\phantom{0}}1_4 = 1\underline{\phantom{0}}\underline{\phantom{0}}_3$$

**Bài 89.** Hãy tìm xem phép tính sau được thực hiện trong hệ đếm cơ số nào? Các chữ cái có giá trị là bao nhiêu (trong cùng phép tính các chữ giống nhau có giá trị giống nhau, các chữ khác nhau có giá trị khác nhau)?
- a) $\overline{ABBA} + \overline{AAAA} = \overline{AABBB}$;
- b) $\overline{ABCD} \cdot \overline{DC} = \overline{ABCDC}$;
- c) $\overline{5BC} + \overline{4CA} = \overline{ABBA}$.

**Bài 90.** Thêm vào các chỗ còn trống các chữ số sao cho ta nhận được các số chia hết cho 2 (chẵn):
$$73\underline{\phantom{0}}_8, \quad 101\underline{\phantom{0}}_8, \quad 73\underline{\phantom{0}}_9, \quad 73\underline{\phantom{0}}_4, \quad 101\underline{\phantom{0}}_2, \quad 73\underline{\phantom{0}}_5$$

**Bài 91.** Tìm dấu hiệu chia hết cho 2 của các số trong hệ đếm cơ số:
- a) 2;
- b) 3;
- c) 5;
- d) 6;
- e) Trong trường hợp tổng quát, làm thế nào để nhận biết được một số là số chẵn?

**Bài 92.** Phát biểu và chứng minh quy luật nhận biết một số khi nào chia hết cho 3 trong một số hệ đếm, ví dụ: hệ đếm cơ số 3; 4; 5; 6; 9.

**Bài 93.** Trong hệ đếm cơ số $a$, tìm điều kiện để một số chia hết cho một ước của $a$?

**Bài 94.** Trong hệ đếm cơ số $a$, tìm điều kiện để một số chia hết cho $a^2, a^3$ và các ước số của chúng.

**Bài 95.** Trong hệ đếm cơ số $a$, phát biểu điều kiện để một số chia hết cho $(a - 1)$ hoặc $(a + 1)$?

**Bài 96.** Có 8 số trong hệ đếm cơ số 5 là: $321; 342; 424; 410; 403; 444; 340; 301$. Từ 8 số này có thể tạo được 4 cặp số mà tổng của chúng trong hệ đếm cơ số 10 là 200. Các cặp số này là những cặp số nào?

**Bài 97.** Hai bạn học sinh vui tính nói về mình:
- A: Tổng cộng 11 năm tôi phải học mẫu giáo và nhà trẻ. Cho đến nay tôi đi học phổ thông đã 12 năm và phải đi tiếp 10 năm nữa cho đến khi kết thúc.
- B: Tôi cũng 111 tuổi như bạn.  
Hỏi các bạn học sinh bao nhiêu tuổi (trong hệ đếm cơ số 10)?

**Bài 98.** Hãy viết tất cả các số về cơ số 10 nếu ở cơ số 11 số này có dạng $\overline{a0b}$ và ở cơ số 9 có dạng $\overline{b0a}$.

**Bài 99.** Số 740 khi chuyển sang cơ số $x$ ta được một số có 4 chữ số mà chữ số cuối cùng là 5. Hãy tìm giá trị của $x$ và các chữ số còn thiếu.

**Bài 100.** Trong hệ đếm cơ số nào mà khi chia 4634 cho 555 được thương là 5 và số dư là 530?

**Ví dụ 1.** Chuyển $0{,}125$ sang hệ đếm cơ số 6.  
*Lời giải:*
$$\begin{array}{l}
0{,}125 \times 6 = \mathbf{0}{,}75 \\
0{,}75 \times 6 = \mathbf{4}{,}50 \\
0{,}5 \times 6 = \mathbf{3}{,}0 \\
0{,}0 \times 6 = \mathbf{0}
\end{array}$$
*Kết quả:* $0{,}125 = 0{,}043_6$.

**Ví dụ 2.** Chuyển $73{,}73$ sang hệ đếm cơ số 6.  
*Lời giải:* Ta chia thành hai phần: nguyên và phân: $73{,}73 = 73 + 0{,}73$.
- *Phần nguyên:*  
  $73 : 6 = 12$ (dư 1) $\to 12 : 6 = 2$ (dư 0) $\to 2 : 6 = 0$ (dư 2).  
  Vậy: $73 = 201_6$.
- *Phần phân:*  
  $0{,}73 \times 6 = \mathbf{4}{,}38 \to 0{,}38 \times 6 = \mathbf{2}{,}28 \to 0{,}28 \times 6 = \mathbf{1}{,}68 \to 0{,}68 \times 6 = \mathbf{4}{,}08 \to 0{,}08 \times 6 = \mathbf{0}{,}48 \to 0{,}48 \times 6 = \mathbf{2}{,}88 \to 0{,}88 \times 6 = \mathbf{5}{,}28 \to 0{,}28 \times 6 = \mathbf{1}{,}68 \dots$  
  Vậy: $0{,}73 = 0{,}042(14025)_6$.  
*Kết quả:* $73{,}73 = 201{,}042(14025)_6$.

**Bài 101.** Chuyển hệ đếm:
- a) Các số $0{,}1; 0{,}01; 0{,}001$ từ hệ đếm cơ số 2 sang hệ đếm cơ số 10.
- b) Các số $0{,}1; 0{,}2; 0{,}3; 0{,}4$ từ hệ đếm cơ số 5 sang hệ đếm cơ số 10.
- c) Các số $0{,}1; 0{,}2; 0{,}3; 0{,}4; 0{,}5$ từ hệ đếm cơ số 6 sang hệ đếm cơ số 10.

**Bài 102.** Chuyển hệ đếm các số $0{,}1; 0{,}2; 0{,}3; \dots; 0{,}9$ từ hệ đếm cơ số 10 sang hệ đếm cơ số 2; 5 và 6.

**Bài 103.** Chuyển $123{,}456$ (cơ số 10) sang hệ đếm cơ số 2, 3, 4, 5 và 6.

**Bài 104.** Đẳng thức đúng trong hệ đếm cơ số nào?
- a) $10 + 10 = 100$;
- b) $10 \cdot 10 = 100$;
- c) $1010 : 10 = 101$.

**Bài 105.** Người ta viết cùng một số trong hai hệ đếm cơ số khác nhau thì nhận được các đẳng thức sau:
- a) $1010_a = 11_b$. Hỏi cặp số $(a, b)$ có thể là cặp số nào?
- b) $100_a = 10_b$. Hỏi cặp số $(a, b)$ có thể là cặp số nào?

**Bài 106.** Phép tính sau đúng trong hệ đếm cơ số nào?
$$2 \cdot (333 + 222) = 3102$$

**Bài 107.** Các đẳng thức sau đúng trong hệ đếm cơ số nào?
- a) $12_x + 13_x = 30_x$;
- b) $6_x + 6_x = 51_x$.

**Bài 108.** Số tự nhiên nhỏ nhất nào mà khi viết trong hệ đếm cơ số 8 có tận cùng bằng 3 và trong hệ đếm cơ số 9 có tận cùng bằng 4?

---

## 13 Một số định nghĩa và định lý cần thiết

**Định nghĩa 1.** Một số nguyên $a$ được gọi là chia hết cho một số nguyên $b$ (khác không) nếu tồn tại một số nguyên $x$ sao cho $a = bx$. Khi đó ta còn nói $a$ là bội số của $b$, hoặc $b$ là ước số của $a$ và kí hiệu $a \ \vdots \ b$ (hoặc $b \mid a$).

**Định nghĩa 2.** Một số nguyên dương $p > 1$ được gọi là một số nguyên tố nếu $p$ chỉ có hai ước số dương là 1 và chính nó. Một số nguyên dương $a > 1$ không phải là số nguyên tố gọi là một hợp số.

**Định lý 3.** Một số nguyên dương khác 1 luôn được biểu diễn duy nhất dưới dạng tích của các số nguyên tố (không xét đến vị trí của các số nguyên tố trong tích).

**Định lý 4.** *(Thuật toán chia)* Cho $a, b$ là các số nguyên bất kì, $a > 0$. Khi đó tồn tại duy nhất các số nguyên $q, r$ sao cho:
$$b = qa + r \quad \text{và} \quad 0 \le r < a$$
Nếu $b$ không chia hết cho $a$ thì $r$ thỏa mãn bất đẳng thức $0 < r < a$.

**Định lý 5.** *(Biểu diễn cơ số $b$)* Cho $b > 1$ là một số nguyên. Khi đó mọi số nguyên dương $N$ đều có thể biểu diễn duy nhất dưới dạng:
$$N = a_k b^k + a_{k-1} b^{k-1} + \dots + a_1 b + a_0$$
trong đó $a_1, a_2, \dots, a_k$ là các số nguyên thỏa mãn $0 \le a_i \le b - 1$ với mọi $i = 0, 1, \dots, k$ và $a_k \ne 0$.

**Định nghĩa 6.** Số nguyên $d$ được gọi là ước số chung của $a$ và $b$ nếu $d \mid a$ và $d \mid b$. Nếu ít nhất một trong hai số $a$ và $b$ khác 0 thì số lớn nhất trong tất cả các ước chung của $a$ và $b$ được gọi là ước số chung lớn nhất của $a$ và $b$, kí hiệu $\gcd(a, b)$ hay $(a, b)$.  
Tương tự ta kí hiệu ước số chung lớn nhất của các số nguyên $b_1, b_2, \dots, b_n$ không đồng thời bằng 0 bởi $(b_1, b_2, \dots, b_n)$.

**Định nghĩa 7.** Hai số nguyên $a$ và $b$ gọi là nguyên tố cùng nhau nếu $\text{ƯCLN}(a, b) = 1$ và được viết là $(a, b) = 1$.  
Các số nguyên $a_1, a_2, \dots, a_n$ được gọi là nguyên tố cùng nhau nếu với mỗi cặp $(i, j)$ thỏa mãn $1 \le i, j \le n, i \ne j$, ta có $(a_i, a_j) = 1$.

**Định lý 8.** Cho $a, b$ là các số nguyên, $d$ là ước số chung lớn nhất của $a$ và $b$. Khi đó tồn tại các số nguyên $x_0, y_0$ thỏa mãn:
$$d = ax_0 + by_0$$

**Định lý 9.** *(Thuật toán Euclid)*  
Cho $a, b$ là các số nguyên, $b > 0$. Từ định lý 4 ta có dãy các đẳng thức sau:
$$\begin{aligned}
a &= bq_1 + r_1 \quad &(0 < r_1 < b) \\
b &= r_1 q_2 + r_2 \quad &(0 < r_2 < r_1) \\
r_1 &= r_2 q_3 + r_3 \quad &(0 < r_3 < r_2) \\
&\dots \\
r_{n-2} &= r_{n-1} q_n + r_n \quad &(0 < r_n < r_{n-1}) \\
r_{n-1} &= r_n q_{n+1}
\end{aligned}$$
Khi đó:
- a) $r_n = (a, b)$.
- b) Các giá trị $x_0, y_0$ thỏa mãn $(a, b) = ax_0 + by_0$ trong định lý 8 có thể thu được bằng cách biểu diễn $r_i$ như tổ hợp tuyến tính của $a, b$.

**Định nghĩa 10.** Số nguyên $b$ được gọi là bội số chung của các số nguyên (đồng thời khác 0) $a_1, a_2, \dots, a_n$ nếu $a_i \mid b$ với mọi $i = 1, 2, \dots, n$.  
Số nhỏ nhất trong các bội số chung nguyên dương được gọi là bội số chung nhỏ nhất và được kí hiệu là $[a_1, a_2, \dots, a_n]$.

**Định lý 11.** Cho $a_1, a_2, \dots, a_n$ là các số nguyên không đồng thời bằng 0 và $b$ là một bội số chung của tất cả $a_1, a_2, \dots, a_n$ và $h = [a_1, a_2, \dots, a_n]$. Khi đó:
- a) $b \ \vdots \ h$.
- b) Tập hợp $\{0, \pm h, \pm 2h, \pm 3h, \dots\}$ là tập tất cả các bội số chung của $a_1, a_2, \dots, a_n$.

---

## 14 Thay cho lời kết

> *"Trong những năm gần đây sự phát triển của tin học làm thay đổi nhiều ngành của Lý thuyết số. Nếu như trước thập kỷ 70, số học vẫn được xem là một trong những lý thuyết xa rời thực tiễn nhất, thì ngày nay, nhiều thành tựu mới nhất của số học có ứng dụng trực tiếp vào đời sống, như thông tin, mật mã, kỹ thuật máy tính. Một phương hướng mới của số học ra đời và phát triển mạnh mẽ: Số học thuật toán. Có thể nói đó là chiếc cầu nối giữa số học và tin học. Với việc sử dụng rộng rãi máy tính trong nghiên cứu số học, nhiều người cho rằng số học ngày nay đã và đang trở thành một khoa học thực nghiệm!"*  
> *(Lược trích lời nói đầu của cuốn sách: Hà Huy Khoái – Phạm Huy Điển, **Số Học Thuật Toán**, NXB Đại học Quốc gia Hà Nội, 2003).*

Những người làm công tác sư phạm hiểu hơn ai hết, cái đẩy nhẹ hôm nay cho các bạn học sinh trên con đường học tập sẽ là động lực to lớn cho các con ngày mai trong sự nghiệp. Người thầy không chỉ làm tròn công việc truyền tải kiến thức, mà còn có một sứ mệnh lớn lao là hướng đạo. Muốn làm được việc này bản thân người thầy cũng phải luôn luôn học hỏi và cập nhật kiến thức mới. Có như vậy mới có đủ lòng tin và khả năng thực sự làm tốt trách nhiệm giúp học sinh định hướng tương lai.

*Hà Nội, 05/04/2017.*  
**Nhóm Sigma-Maths sưu tầm và biên soạn**

---

> [!TIP] Lời khuyên học tập
> Chuyên đề Số học THCS là nền tảng cốt lõi trong các kỳ thi học sinh giỏi và thi vào lớp 10 chuyên Toán. Hãy bắt đầu từ việc hiểu sâu tính chất chia hết, nguyên lý Dirichlet, trước khi vận dụng vào giải phương trình nghiệm nguyên Diophante hay các bài toán biến đổi cơ số. Chúc các em học tập thật tốt!
