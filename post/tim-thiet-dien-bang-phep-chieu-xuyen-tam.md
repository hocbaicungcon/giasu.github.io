---
title: Phương pháp tìm thiết diện bằng phép chiếu xuyên tâm
description: Khi mà học sinh chưa được học về quan hệ song song trong không gian thì
  bài toán xác định thiết diện của hình chóp khi cắt bởi một mặt phẳng khá hạn chế.
  Lúc
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 11
- Hình học không gian
- Thiết diện
- Phép chiếu xuyên tâm
grade: 11
---

Khi mà học sinh chưa được học về quan hệ song song trong không gian thì bài toán [xác định thiết diện](/bai-viet/thiet-dien-la-gi-va-cac-phuong-phap-tim-thiet-dien.html) của hình chóp khi cắt bởi một mặt phẳng khá hạn chế. Lúc đó, để giải quyết các bài toán mà đáy là hình bình hành, hình thoi, hình chữ nhật… chúng ta phải sử dụng đến phương pháp phép chiếu xuyên tâm (còn được gọi là *Phương pháp đường gióng – đường dóng*).

Xem thêm:

- [Thiết diện là gì và các phương pháp tìm thiết diện](/bai-viet/thiet-dien-la-gi-va-cac-phuong-phap-tim-thiet-dien.html)

- [Xác định thiết diện sử dụng quan hệ vuông góc trong không gian](/bai-viet/xac-dinh-thiet-dien-su-dung-quan-he-vuong-goc.html)

## 1. Phép chiếu xuyên tâm là gì?

**Phép chiếu xuyên tâm** (còn được gọi là phép phối cảnh, tiếng Anh: *inner projection*) được giới thiệu ngay từ lớp 8, trong chương trình công nghệ – vẽ kỹ thuật.

Trong không gian, cho một điểm S và một mặt phẳng (P) không đi qua S. Quy tắc biến mỗi điểm M trong không gian thành điểm M’ là giao điểm của mặt phẳng (P) và đường thẳng SM được gọi là phép chiếu xuyên tâm (tâm S) xuống mặt phẳng (P).

![định nghĩa khái niệm phép chiếu xuyên tâm là gì](assets/images/tim-thiet-dien-bang-phep-chieu-xuyen-tam-phep-chieu-xuyen-tam.jpg)

- Trong phép chiếu này, các điểm M nằm trong mặt phẳng (Q) đi qua S và song song với (P) thì không có ảnh. Trong chương trình vẽ kỹ thuật, để cho mọi điểm trong không gian đều có ảnh, người ta bổ sung cho (P) một đường thẳng ở vô tận, coi như giao của (P) và (Q).

- Nếu ta hạn chế chỉ xét phép chiếu trên một mặt (R) nào đó trong không gian thì phép chiếu xuyên tâm nói trên gọi là phép chiếu xuyên tâm (tâm S) từ mặt (R) xuống mặt phẳng (P).

- Phép chiếu xuyên tâm bảo toàn tỉ số kép.

## 2. Các ví dụ xác định thiết diện bằng phép chiếu xuyên tâm

**Bài toán.** Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(\alpha)$.

### Phương pháp phép chiếu xuyên tâm (Inner Projection Method)

- Chọn một tam giác trên mặt phẳng $(\alpha)$, gọi là *tam giác cơ sở* và xác định hình chiếu của tam giác cơ sở đó lên mặt đáy qua phép chiếu xuyên tâm với tâm là đỉnh của hình chóp.

- Xác định các giao điểm của tam giác hình chiếu với các cạnh, đường chéo của đáy.

- Dựa vào quan hệ liên thuộc, tìm các điểm trên mặt phẳng $(\alpha)$ tương ứng với các điểm ở dưới mặt đáy.

**Ví dụ 1.** Cho hình chóp $S.ABCD$ có $C’$ là một điểm trên cạnh $SC.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(ABC’).$

![giao tuyen phep chieu xuyen tam](assets/images/tim-thiet-dien-bang-phep-chieu-xuyen-tam-giao-tuyen-phep-chieu-xuyen-tam.jpg)

**Hướng dẫn.
- Rõ ràng vì đáy là một tứ giác bất kỳ, nên có nhiều khả năng kéo dài các cạnh đáy chúng sẽ không thể cắt nhau. Do đó ta không thể sử dụng [phương pháp giao tuyến gốc](/bai-viet/xac-dinh-thiet-dien-bang-phuong-phap-giao-tuyen-goc.html).

- Trong mặt phẳng $(ABC’)$, ta chọn một tam giác làm tam giác cơ sở, chính là tam giác $ABC’$  luôn. Ta tìm ảnh của nó qua phép chiếu xuyên tâm $S$ lên mặt phẳng đáy, chính là tam giác $ABC$.

- Tiếp theo, ta xác định giao điểm của tam giác $ABC$ này với các cạnh và đường chéo của đáy. Ta tìm thấy $O$ là giao điểm của $AC$ và $BD$.

  Lưu ý rằng, điểm $O$ trên mặt phẳng đáy, mà $O$ thuộc vào cạnh $AC$, cạnh $AC$ lại là ảnh của cạnh $AC’$ qua phép chiếu. Điều này chứng tỏ phải có một điểm nào đó (tạm đặt tên là $I$), mà qua phép chiếu thì tạo thành điểm $O$. Mục đích của ta là đi tìm điểm $I$ này.

- Trong mặt phẳng $(SAC)$ giao điểm của $SO$ và $AC’$ chính là điểm $I$ nói trên. Lúc này, mặt phẳng $(ABC,)$ xuất hiện một đường thẳng mới là đường thẳng $BI$, mà đường thẳng này có thể cắt được $SD.$

- Trong mặt phẳng $(SBD)$ gọi $D’$ là giao điểm của $BI$ và $SD.$

- Dễ dàng chỉ ra thiết diện cần tìm là tứ giác $ABC’D’.$

**Ví dụ 2.** Cho hình chóp $S.ABCD$ có ba điểm $M,N,P$ lần lượt thuộc $SA,SB,SC.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(MNP).$

**Ví dụ 3.** Cho hình chóp $S.ABCD$ có $M$ là một điểm thuộc miền trong tam giác $SCD.$ Tìm thiết diện của hình chóp khi cắt bởi mặt phẳng $(ABM).$

**Ví dụ 4.** Cho hình chóp $S.ABCD$ có đáy là hình bình hành và $M$ là trung điểm $SB.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(AMD).$

**Ví dụ 5.** Cho hình chóp $S.ABCD$ có $M$ là một điểm thuộc miền trong tam giác $SCD.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(ABM).$

**Hướng dẫn.
Trong mặt phẳng $(SCD)$ gọi $E=SM\cap CD,$ trong mặt phẳng $(ABCD)$ gọi $F=AC\cap BE,$ trong mặt phẳng $(SBE)$ gọi $I=BM\cap SF,$ trong mặt phẳng $(SAC)$ gọi $N=AI\cap SC,$ trong mặt phẳng $(SCD)$ gọi $H=MN\cap SD.$ Thiết diện là tứ giác $ABNH.$

## 3. Bài tập tìm thiết diện sử dụng phép chiếu xuyên tâm
