---
title: Cách chứng minh đường thẳng song song với mặt phẳng
description: 'Cách chứng minh đường thẳng song song với mặt phẳng Hình học 11: lý thuyết, phương pháp tìm đường song song, bảng tổng hợp và ví dụ có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Hình học không gian
- Đường thẳng song song mặt phẳng
grade: 11
---

Thành thạo phương pháp **chứng minh đường thẳng song song với mặt phẳng** là nền tảng cốt lõi trong chương trình Hình học không gian lớp 11, giúp học sinh giải quyết trọn vẹn các bài toán chứng minh hai mặt phẳng song song, xác định thiết diện và tính khoảng cách.

Xem thêm: [3 cách chứng minh hai mặt phẳng song song](/bai-viet/cach-chung-minh-hai-mat-phang-song-song.html)

## 1. Vị trí tương đối của đường thẳng và mặt phẳng

![duong thang va mat phang song song](assets/images/chung-minh-duong-thang-song-song-voi-mat-phang-duong-thang-va-mat-phang-song-song.jpg)

Trong không gian, xét một đường thẳng $d$ và mặt phẳng $(\alpha)$ thì có đúng ba vị trí tương đối:

| Vị trí tương đối | Ký hiệu | Số điểm chung | Hình vẽ minh họa |
| :--- | :---: | :---: | :--- |
| **$d$ cắt $(\alpha)$** | $d \cap (\alpha) = \{A\}$ | Duy nhất $1$ điểm | Đường thẳng đâm xuyên qua mặt phẳng |
| **$d$ nằm trong $(\alpha)$** | $d \subset (\alpha)$ | Vô số điểm chung | Mọi điểm thuộc $d$ đều thuộc $(\alpha)$ |
| **$d$ song song $(\alpha)$** | $d \parallel (\alpha)$ | Không có điểm chung | $d \cap (\alpha) = \varnothing$ |

### Định nghĩa và tính chất cơ bản

- **Định lý 1 (Dấu hiệu nhận biết):** Nếu đường thẳng $d$ không nằm trong mặt phẳng $(\alpha)$ và song song với một đường thẳng $a$ nằm trong $(\alpha)$ thì $d$ song song với $(\alpha)$:
  $$
  \begin{cases} d\not\subset (\alpha)\\ d\parallel a\\ a\subset (\alpha) \end{cases} \implies d \parallel (\alpha)
  $$

![cách chứng minh đường thẳng song song với mặt phẳng](assets/images/chung-minh-duong-thang-song-song-voi-mat-phang-chung-minh-duong-thang-va-mat-phang-song-song.jpg)

- **Định lý 2 (Giao tuyến song song):** Nếu đường thẳng $d$ song song với $(\alpha)$ thì mọi mặt phẳng $(\beta)$ chứa $d$ mà cắt $(\alpha)$ theo giao tuyến $b$ thì $b$ song song với $d$:
  $$
  \begin{cases} d \parallel (\alpha)\\ d \subset (\beta)\\ (\alpha) \cap (\beta) = b \end{cases} \implies d \parallel b
  $$

- **Hệ quả:** Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó:
  $$
  \begin{cases} (P) \parallel a\\ (Q) \parallel a\\ (P) \cap (Q) = \Delta \end{cases} \implies \Delta \parallel a
  $$

## 2. Các phương pháp chứng minh đường thẳng song song với mặt phẳng

| Phương pháp | Nội dung áp dụng | Công cụ hình học thường dùng |
| :--- | :--- | :--- |
| **Phương pháp 1 (Trọng tâm)** | Tìm một đường thẳng $a \subset (\alpha)$ sao cho $d \parallel a$ | Đường trung bình tam giác, định lý Ta-lét đảo, hình bình hành |
| **Phương pháp 2 (Dùng mặt phẳng song song)** | Chứng minh $d \subset (\beta)$ mà $(\beta) \parallel (\alpha)$ | Chứng minh $(\beta)$ chứa 2 đường thẳng cắt nhau cùng song song $(\alpha)$ |
| **Phương pháp 3 (Dùng giao tuyến)** | Dùng định lý giao tuyến của 3 mặt phẳng hoặc giao tuyến song song | Tìm giao tuyến song song dựa vào cặp cạnh đối song song |

---

## 3. Các ví dụ minh họa có lời giải chi tiết

**Ví dụ 1.** Cho hình chóp $S.ABCD$ có $M, N$ lần lượt là trung điểm của $SA$ và $SB.$ Chứng minh rằng $MN \parallel (ABCD).$

**Hướng dẫn giải.**
- Trong tam giác $SAB,$ đoạn thẳng $MN$ nối trung điểm hai cạnh $SA$ và $SB$ nên $MN$ là đường trung bình của tam giác $\triangle SAB.$
- Suy ra $MN \parallel AB.$
- Ta có:
  $$
  \begin{cases} 
  MN \not\subset (ABCD) \\ 
  MN \parallel AB \\ 
  AB \subset (ABCD) 
  \end{cases} \implies MN \parallel (ABCD).
  $$

**Ví dụ 2.** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $AB, CD.$ Chứng minh rằng $MN \parallel (SBC)$ và $MN \parallel (SAD).$ Gọi $P$ là trung điểm $SA,$ chứng minh rằng $SB$ và $SC$ cùng song song với mặt phẳng $(MNP).$ Gọi $G_1, G_2$ lần lượt là trọng tâm tam giác $ABC$ và $SBC.$ Chứng minh rằng $G_1G_2 \parallel (SAB).$

**Hướng dẫn giải.**
1. **Chứng minh $MN \parallel (SBC)$ và $MN \parallel (SAD)$:**
   - Vì tứ giác $ABCD$ là hình bình hành nên $AB \parallel CD$ và $AB = CD.$
   - Do $M, N$ lần lượt là trung điểm của $AB, CD$ nên tứ giác $AMND$ và $MBCN$ là các hình bình hành.
   - Suy ra $MN \parallel BC$ và $MN \parallel AD.$
   - Vì $\begin{cases} MN \not\subset (SBC) \\ MN \parallel BC \subset (SBC) \end{cases} \implies MN \parallel (SBC).$
   - Tương tự, $\begin{cases} MN \not\subset (SAD) \\ MN \parallel AD \subset (SAD) \end{cases} \implies MN \parallel (SAD).$

2. **Chứng minh $SB \parallel (MNP)$ và $SC \parallel (MNP)$:**
   - Trong $\triangle SAB,$ $P$ là trung điểm $SA,$ $M$ là trung điểm $AB$ nên $PM$ là đường trung bình $\implies PM \parallel SB.$
   - Mà $PM \subset (MNP)$ và $SB \not\subset (MNP) \implies SB \parallel (MNP).$
   - Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD.$ Vì $ABCD$ là hình bình hành nên $O$ là trung điểm của $AC$ và cũng là trung điểm của $MN.$ Do đó $O \in MN \subset (MNP).$
   - Trong $\triangle SAC,$ $P$ là trung điểm $SA,$ $O$ là trung điểm $AC$ nên $PO$ là đường trung bình $\implies PO \parallel SC.$
   - Mà $PO \subset (MNP)$ và $SC \not\subset (MNP) \implies SC \parallel (MNP).$

3. **Chứng minh $G_1G_2 \parallel (SAB)$:**
   - Gọi $I$ là trung điểm của cạnh chung $BC.$
   - Vì $G_1$ là trọng tâm $\triangle ABC$ nên $\dfrac{IG_1}{IA} = \dfrac{1}{3}.$
   - Vì $G_2$ là trọng tâm $\triangle SBC$ nên $\dfrac{IG_2}{IS} = \dfrac{1}{3}.$
   - Trong $\triangle SAI,$ ta có $\dfrac{IG_1}{IA} = \dfrac{IG_2}{IS} = \dfrac{1}{3} \implies G_1G_2 \parallel SA$ (theo định lý Ta-lét đảo).
   - Mà $SA \subset (SAB)$ và $G_1G_2 \not\subset (SAB) \implies G_1G_2 \parallel (SAB).$

**Ví dụ 3.** Cho tứ diện $ABCD$ có $G$ là trọng tâm tam giác $ABD.$ Lấy điểm $M$ thuộc cạnh $BC$ sao cho $MB = 2MC.$ Chứng minh rằng $MG \parallel (ACD).$

**Hướng dẫn giải.**
- Gọi $E$ là trung điểm của cạnh $AD.$ Vì $G$ là trọng tâm $\triangle ABD$ nên $B, G, E$ thẳng hàng và:
  $$
  \frac{BG}{BE} = \frac{2}{3}.
  $$
- Theo giả thiết $MB = 2MC \implies \dfrac{BM}{BC} = \dfrac{2}{3}.$
- Xét tam giác $\triangle BCE,$ ta có:
  $$
  \frac{BG}{BE} = \frac{BM}{BC} = \frac{2}{3} \implies MG \parallel CE \text{ (theo định lý Ta-lét đảo).}
  $$
- Mặt khác, $E \in AD \subset (ACD) \implies CE \subset (ACD).$
- Kết hợp với $MG \not\subset (ACD),$ suy ra $MG \parallel (ACD)$ (đpcm).

**Ví dụ 4.** Cho hai hình bình hành $ABCD$ và $ABEF$ không đồng phẳng. Chứng minh rằng bốn điểm $C, D, E, F$ đồng phẳng. Gọi $O, I$ lần lượt là tâm các hình bình hành $ABCD, ABEF.$ Chứng minh rằng $OI \parallel (BCE)$ và $OI \parallel (ADF).$ Gọi $M, N$ lần lượt là trọng tâm tam giác $ABD, ABF.$ Chứng minh rằng $MN \parallel (CDFE).$

**Hướng dẫn giải.**
1. **Chứng minh $C, D, E, F$ đồng phẳng:**
   - Do $ABCD$ là hình bình hành nên $CD \parallel AB$ và $CD = AB.$
   - Do $ABEF$ là hình bình hành nên $EF \parallel AB$ và $EF = AB.$
   - Suy ra $CD \parallel EF$ và $CD = EF,$ do đó tứ giác $CDFE$ là hình bình hành. Vậy bốn điểm $C, D, E, F$ đồng phẳng.
2. **Chứng minh $OI \parallel (BCE)$ và $OI \parallel (ADF)$:**
   - Trong $\triangle ACE,$ $O$ là trung điểm $AC,$ $I$ là trung điểm $AE$ nên $OI$ là đường trung bình $\implies OI \parallel CE.$
   - Mà $CE \subset (BCE)$ và $OI \not\subset (BCE) \implies OI \parallel (BCE).$
   - Tương tự trong $\triangle BDF,$ $O$ là trung điểm $BD,$ $I$ là trung điểm $BF$ nên $OI$ là đường trung bình $\implies OI \parallel DF.$
   - Mà $DF \subset (ADF)$ và $OI \not\subset (ADF) \implies OI \parallel (ADF).$
3. **Chứng minh $MN \parallel (CDFE)$:**
   - Gọi $K$ là trung điểm của cạnh chung $AB.$
   - Vì $M$ là trọng tâm $\triangle ABD$ nên $\dfrac{KM}{KD} = \dfrac{1}{3}.$
   - Vì $N$ là trọng tâm $\triangle ABF$ nên $\dfrac{KN}{KF} = \dfrac{1}{3}.$
   - Trong $\triangle KDF,$ ta có $\dfrac{KM}{KD} = \dfrac{KN}{KF} = \dfrac{1}{3} \implies MN \parallel DF.$
   - Mà $DF \subset (CDFE)$ và $MN \not\subset (CDFE) \implies MN \parallel (CDFE).$

**Ví dụ 5.** Hai hình bình hành $ABCD, ABEF$ có chung cạnh $AB$ và không đồng phẳng. Trên các cạnh $AD, BE$ lần lượt lấy các điểm $M, N$ sao cho $\dfrac{AM}{AD} = \dfrac{BN}{BE}.$ Chứng minh đường thẳng $MN$ song song với mặt phẳng $(CDFE).$

**Hướng dẫn giải.**
- Đặt tỉ số $\dfrac{AM}{AD} = \dfrac{BN}{BE} = k$ ($0 < k < 1$).
- Trên cạnh $BC$ lấy điểm $M'$ sao cho $\dfrac{BM'}{BC} = k.$
- Vì $ABCD$ là hình bình hành nên $AD \parallel BC$ và $AD = BC.$ Do $\dfrac{AM}{AD} = \dfrac{BM'}{BC} = k$ nên $AM \parallel BM'$ và $AM = BM' \implies ABM'M$ là hình bình hành $\implies MM' \parallel AB$ và $MM' = AB.$
- Tương tự, vì $ABEF$ là hình bình hành nên $AB \parallel EF$ và $AB = EF.$
- Trong $\triangle BCE,$ xét đoạn thẳng $M'N$: ta có $\dfrac{BM'}{BC} = \dfrac{BN}{BE} = k \implies M'N \parallel CE$ (Ta-lét đảo).
- Vì $CE \subset (CDFE) \implies M'N \parallel (CDFE).$
- Lại có $MM' \parallel AB \parallel CD \subset (CDFE) \implies MM' \parallel (CDFE).$
- Mặt phẳng $(MM'N)$ chứa hai đường thẳng cắt nhau $MM'$ và $M'N$ cùng song song với $(CDFE)$ nên $(MM'N) \parallel (CDFE).$
- Do đường thẳng $MN \subset (MM'N)$ nên suy ra $MN \parallel (CDFE)$ (đpcm).

**Ví dụ 6.** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành, $G$ là trọng tâm của tam giác $SAB$ và $E$ là điểm trên cạnh $AD$ sao cho $DE = 2EA.$ Chứng minh rằng $GE \parallel (SCD).$

**Hướng dẫn giải.**
- Gọi $M$ là trung điểm của $AB.$ Vì $G$ là trọng tâm $\triangle SAB$ nên $S, G, M$ thẳng hàng và:
  $$
  \frac{SG}{SM} = \frac{2}{3} \implies \frac{MG}{MS} = \frac{1}{3}.
  $$
- Theo giả thiết $DE = 2EA \implies \dfrac{AE}{AD} = \dfrac{1}{3}.$
- Lấy điểm $N$ là trung điểm của $CD.$ Khi đó tứ giác $AMND$ là hình bình hành (vì $AM \parallel DN$ và $AM = DN = \dfrac{1}{2}AB$).
- Suy ra $MN \parallel AD$ và $MN = AD.$
- Lấy điểm $H$ trên đoạn $MN$ sao cho $\dfrac{MH}{MN} = \dfrac{1}{3}.$ Khi đó tứ giác $AMEH$ là hình bình hành $\implies EH \parallel AM \parallel CD \subset (SCD).$
- Trong $\triangle SMN,$ xét đoạn thẳng $GH$: ta có $\dfrac{MG}{MS} = \dfrac{MH}{MN} = \dfrac{1}{3} \implies GH \parallel SN$ (theo định lý Ta-lét đảo).
- Mà $SN \subset (SCD)$ nên $GH \parallel (SCD).$
- Mặt phẳng $(GEH)$ chứa hai đường thẳng cắt nhau $EH$ và $GH$ mà:
  $$
  EH \parallel CD \subset (SCD) \quad \text{và} \quad GH \parallel SN \subset (SCD)
  $$
- Do đó $(GEH) \parallel (SCD).$
- Vì đường thẳng $GE \subset (GEH)$ nên suy ra $GE \parallel (SCD)$ (đpcm).

## 4. Bài tập chứng minh đường thẳng song song với mặt phẳng

**Bài 1.** Cho hình chóp $S.ABCD$ đáy là hình bình hành. Gọi $M, N, P$ lần lượt là trung điểm $AB, CD, SA.$ Chứng minh: $MN \parallel (SBC); MN \parallel (SAD)$; $SB \parallel (MNP); SC \parallel (MNP).$ Gọi $I, J$ là trọng tâm tam giác $ACD,SCD.$ Chứng minh: $IJ \parallel (SAB), IJ \parallel (SAD), IJ \parallel (SAC).$

**Bài 2.** Cho hình chóp $S.ABCD$ đáy là hình bình hành tâm $O.$ Gọi $I, J$ là trung điểm $BC, SC$ và $K\in SD$ sao cho $KD=2SK.$ Chứng minh: $OJ \parallel (SAD), OJ \parallel (SAB)$; $IO \parallel (SCD), IJ \parallel (SBD).$ Gọi $M$ là giao điểm của $AI$ và $BD.$ Chứng minh: $MK \parallel (SBC).$

**Bài 3.** Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$ và $M, N, P$ là trung điểm $SB, SO, OD.$ Chứng minh: $MN \parallel (ABCD), MO \parallel (SCD)$; $NP \parallel (SAD),$ tứ giác $NPOM$ là hình gì? Gọi $I\in SD$ sao cho $SD = 4ID.$ Chứng minh $PI \parallel (SBC), PI \parallel (SAB).$
