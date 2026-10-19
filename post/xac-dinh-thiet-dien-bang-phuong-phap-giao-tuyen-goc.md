---
title: Xác định thiết diện bằng phương pháp giao tuyến gốc
description: 'Phương pháp xác định thiết diện bằng giao tuyến gốc (Trace method) Hình học 11: quy trình 4 bước, bảng tóm tắt phương pháp và 10 ví dụ có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Toán 11
- Hình học không gian
- Thiết diện
grade: 11
---

Để [xác định thiết diện](/bai-viet/thiet-dien-la-gi-va-cac-phuong-phap-tim-thiet-dien.html) của một hình chóp khi cắt bởi một mặt phẳng $(\alpha),$ chúng ta có hai phương pháp nền tảng: **phương pháp giao tuyến gốc (Trace method)** và **phương pháp chiếu xuyên tâm**. 

Bài viết này trình bày quy trình chuẩn và 10 ví dụ minh họa có lời giải chi tiết của phương pháp giao tuyến gốc.

---

## 1. Phương pháp giao tuyến gốc (Trace method) là gì?

**Bài toán:** Xác định thiết diện của hình chóp $S.A_1A_2\dots A_n$ khi cắt bởi mặt phẳng $(\alpha).$

![phuong phap giao tuyen goc](assets/images/xac-dinh-thiet-dien-bang-phuong-phap-giao-tuyen-goc-phuong-phap-giao-tuyen-goc.jpg)

### Quy trình 4 bước tìm thiết diện bằng giao tuyến gốc

| Bước | Thao tác hình học | Mục tiêu đạt được |
| :---: | :--- | :--- |
| **Bước 1** | Xác định một giao tuyến có sẵn $d$ của mặt phẳng $(\alpha)$ với một mặt của hình chóp (thường là mặt đáy $(A_1A_2\dots A_n)$). | Tìm **giao tuyến gốc** làm điểm tựa |
| **Bước 2** | Trong mặt phẳng đáy, kéo dài giao tuyến gốc $d$ để tìm giao điểm với các cạnh đáy hoặc các đường chéo của đáy. | Tạo ra các điểm phụ nằm trên mặt đáy và thuộc $(\alpha)$ |
| **Bước 3** | Nối các điểm phụ với các điểm đã có của $(\alpha)$ nằm trên các mặt bên tương ứng để cắt các cạnh bên. | Xác định thêm các đỉnh mới của thiết diện |
| **Bước 4** | Nối liên tiếp các đoạn giao tuyến tìm được trên từng mặt của khối đa diện thành một đa giác phẳng khép kín. | Kết luận hình dạng đa giác thiết diện |

---

## 2. Các ví dụ minh họa có lời giải chi tiết

**Ví dụ 1.** Cho hình chóp $S.ABCD$ có đáy không là hình thang. Giả sử $M$ là một điểm trên $SD$, xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(ABM).$

![thiet dien dung giao tuyen goc](assets/images/xac-dinh-thiet-dien-bang-phuong-phap-giao-tuyen-goc-thiet-dien-dung-giao-tuyen-goc.jpg)

**Hướng dẫn giải.**
- Mặt phẳng $(ABM)$ có chung với mặt đáy $(ABCD)$ đường thẳng $AB,$ nên chọn $AB$ làm **giao tuyến gốc**.
- Trong $(ABCD),$ vì tứ giác $ABCD$ không phải là hình thang nên hai đường thẳng chứa cạnh đối $AB$ và $CD$ cắt nhau tại điểm $I = AB \cap CD.$
- Điểm $I \in AB \subset (ABM)$ nên $I \in (ABM).$ Lại có $M \in (ABM),$ do đó đường thẳng $IM \subset (ABM).$
- Trong mặt phẳng $(SCD),$ nối $IM$ cắt cạnh $SC$ tại $N = IM \cap SC.$
- Xác định các đoạn giao tuyến của $(ABM)$ với các mặt của hình chóp:
  - $(ABM) \cap (ABCD) = AB$
  - $(ABM) \cap (SBC) = BN$
  - $(ABM) \cap (SCD) = NM$
  - $(ABM) \cap (SAD) = MA$
- **Kết luận:** Thiết diện cần tìm là tứ giác $ABNM.$

---

**Ví dụ 2.** Cho tứ diện $ABCD$ có $M, N$ lần lượt là trung điểm của $AB, CD.$ Giả sử $P$ là một điểm nằm trên cạnh $AD$ ($P$ không là trung điểm của $AD$). Xác định thiết diện của mặt phẳng $(MNP)$ với tứ diện.

**Hướng dẫn giải.**
- Trong mặt phẳng $(ACD),$ đường thẳng $PN$ là giao tuyến có sẵn. Vì $P$ không là trung điểm của $AD$ còn $N$ là trung điểm của $CD$ nên $PN$ không song song với $AC.$
- Kéo dài $PN$ cắt đường thẳng $AC$ tại điểm $E = PN \cap AC.$
- Điểm $E \in PN \subset (MNP)$ và $E \in AC \subset (ABC).$
- Trong mặt phẳng $(ABC),$ nối $EM$ cắt cạnh $BC$ tại điểm $Q = EM \cap BC.$
- Ta có các đoạn giao tuyến:
  - $(MNP) \cap (ABD) = MP$
  - $(MNP) \cap (ACD) = PN$
  - $(MNP) \cap (BCD) = NQ$
  - $(MNP) \cap (ABC) = QM$
- **Kết luận:** Thiết diện là tứ giác $MPNQ.$

---

**Ví dụ 3.** Cho tứ diện $ABCD$ có $I, J$ lần lượt là trọng tâm các tam giác $ABC$ và $ACD.$ Trên cạnh $AB$ lấy điểm $K$ sao cho $AK > BK.$ Xác định thiết diện của tứ diện khi cắt bởi mặt phẳng $(IJK).$

**Hướng dẫn giải.**
- Trong mặt phẳng $(ABC),$ nối $KI$ cắt cạnh $AC$ tại $E$ và cắt $BC$ tại $F.$
- Khi đó $E \in AC \subset (ACD)$ và $E \in KI \subset (IJK).$
- Trong mặt phẳng $(ACD),$ nối $EJ$ cắt cạnh $AD$ tại $G$ và cắt cạnh $CD$ tại $H.$
- Thiết diện được giới hạn bởi các đoạn giao tuyến $KF, FH, HG, GK.$
- **Kết luận:** Thiết diện là tứ giác $KFHG.$

---

**Ví dụ 4.** Cho hình chóp $S.ABCD$ có điểm $M$ là trung điểm $SC,$ $N$ là một điểm trên cạnh $SD$ sao cho $SN < DN.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(AMN).$

**Hướng dẫn giải.**
- Trong mặt phẳng $(SCD),$ vì $\dfrac{SM}{SC} \ne \dfrac{SN}{SD}$ nên đường thẳng $MN$ cắt đường thẳng $CD$ tại điểm $E = MN \cap CD.$
- Điểm $E \in CD \subset (ABCD)$ và $E \in MN \subset (AMN),$ do đó $AE$ là giao tuyến của $(AMN)$ với mặt đáy $(ABCD).$ Chọn $AE$ làm giao tuyến gốc.
- Trong $(ABCD),$ đoạn thẳng $AE$ cắt cạnh $BC$ tại điểm $F = AE \cap BC.$
- Trong mặt phẳng $(SBC),$ nối $FM$ cắt cạnh $SB$ tại điểm $K = FM \cap SB.$
- Các đoạn giao tuyến khép kín: $AK \subset (SAB),$ $KM \subset (SBC),$ $MN \subset (SCD),$ $NA \subset (SAD).$
- **Kết luận:** Thiết diện là tứ giác $AKMN.$

---

**Ví dụ 5.** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P$ lần lượt là trung điểm của $BC, CD$ và $SA.$ Xác định thiết diện của hình chóp và mặt phẳng $(MNP).$

**Hướng dẫn giải.**
- Trong mặt phẳng đáy $(ABCD),$ đoạn thẳng $MN$ nối trung điểm hai cạnh kề của đáy. Ta chọn $MN$ làm giao tuyến gốc.
- Kéo dài $MN$ cắt đường thẳng $AB$ tại $E = MN \cap AB,$ cắt đường thẳng $AD$ tại $F = MN \cap AD.$
- Trong mặt phẳng $(SAB),$ nối $PE$ cắt cạnh $SB$ tại điểm $Q = PE \cap SB.$
- Trong mặt phẳng $(SAD),$ nối $PF$ cắt cạnh $SD$ tại điểm $R = PF \cap SD.$
- Các đoạn giao tuyến trên các mặt:
  - $(MNP) \cap (ABCD) = MN$
  - $(MNP) \cap (SCD) = NR$
  - $(MNP) \cap (SAD) = RP$
  - $(MNP) \cap (SAB) = PQ$
  - $(MNP) \cap (SBC) = QM$
- **Kết luận:** Thiết diện là ngũ giác $MNRPQ.$

---

**Ví dụ 6.** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P$ lần lượt là trung điểm của $CD, BC$ và $SB.$ Xác định thiết diện của hình chóp và mặt phẳng $(MNP).$

**Hướng dẫn giải.**
- Trong mặt phẳng $(ABCD),$ gọi $E = MN \cap AB$ và $F = MN \cap AD.$
- Trong mặt phẳng $(SAB),$ đoạn thẳng $PE$ cắt cạnh $SA$ tại $Q = PE \cap SA.$
- Trong mặt phẳng $(SAD),$ đoạn thẳng $QF$ cắt cạnh $SD$ tại $R = QF \cap SD.$
- **Kết luận:** Thiết diện là ngũ giác $MNPQR.$

---

**Ví dụ 7.** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O.$ Gọi $M, N$ lần lượt là trung điểm của $BC, CD.$ Trên đoạn $SO$ lấy điểm $P$ sao cho $SP > OP.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(MNP).$

**Hướng dẫn giải.**
- Trong mặt phẳng $(ABCD),$ gọi $E = MN \cap AB,$ $F = MN \cap AD,$ $G = MN \cap AC.$
- Trong mặt phẳng $(SAC),$ đường thẳng $GP$ cắt cạnh $SA$ tại $J = GP \cap SA.$
- Trong mặt phẳng $(SAB),$ nối $JE$ cắt cạnh $SB$ tại $K = JE \cap SB.$
- Trong mặt phẳng $(SAD),$ nối $JF$ cắt cạnh $SD$ tại $I = JF \cap SD.$
- **Kết luận:** Thiết diện là ngũ giác $MNIJK.$

---

**Ví dụ 8.** Cho hình chóp $S.ABCD$ có $G$ là trọng tâm tam giác $SCD$ và $M$ là trung điểm cạnh $SD.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(AGM).$

**Hướng dẫn giải.**
- Trong tam giác $SCD,$ $M$ là trung điểm của $SD$ và $G$ là trọng tâm nên đường thẳng đi qua $M$ và $G$ chính là đường trung tuyến $CM.$ Do đó ba điểm $C, G, M$ thẳng hàng $\implies (AGM) \equiv (ACM).$
- Giao tuyến với mặt đáy $(ABCD)$ là đường chéo $AC.$
- Gọi $O = AC \cap BD.$ Trong mặt phẳng $(SBD),$ đoạn thẳng $SO$ cắt $BM$ tại điểm $I = SO \cap BM.$
- Trong mặt phẳng $(SBD),$ đường thẳng nối $AI$ cắt cạnh $SB$ tại $K.$
- **Kết luận:** Thiết diện là tứ giác $ACKM.$

---

**Ví dụ 9.** Cho hình chóp $S.ABCD$ có $G$ là trọng tâm tam giác $SCD,$ $H$ là một điểm thuộc cạnh $SA$ sao cho $SH > AH.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(CGH).$

**Hướng dẫn giải.**
- Trong $\triangle SCD,$ gọi $M$ là trung điểm $SD,$ khi đó $C, G, M$ thẳng hàng $\implies (CGH) \equiv (CMH).$
- Trong mặt phẳng $(SAD),$ nối $HM$ cắt đường thẳng $AD$ tại $E = HM \cap AD.$
- Trong mặt phẳng đáy $(ABCD),$ nối $CE$ cắt cạnh $AB$ tại $K = CE \cap AB.$
- **Kết luận:** Thiết diện là tứ giác $CMHK.$

---

**Ví dụ 10.** Cho hình chóp $S.ABCD$ có $G$ là trọng tâm tam giác $SCD,$ $H$ là một điểm thuộc cạnh $SA$ sao cho $SH < AH.$ Xác định thiết diện của hình chóp khi cắt bởi mặt phẳng $(CGH).$

**Hướng dẫn giải.**
- Gọi $M$ là trung điểm $SD,$ khi đó $C, G, M$ thẳng hàng.
- Trong $(SAD),$ gọi $E = HM \cap AD.$
- Trong $(ABCD),$ gọi $F = CE \cap AB.$
- Trong $(SAB),$ nối $HF$ cắt cạnh $SB$ tại điểm $K = HF \cap SB.$
- **Kết luận:** Thiết diện là ngũ giác $CMHKF$ (hoặc tứ giác tùy theo vị trí tương đối của $F$).
