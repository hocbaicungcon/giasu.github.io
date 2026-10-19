---
title: 'Chứng Minh Ba Đường Thẳng Đồng Quy Trong Không Gian (Toán 11)'
description: 'Phương pháp chứng minh ba đường thẳng đồng quy trong không gian bằng định lý giao tuyến 3 mặt phẳng và tìm giao điểm kèm các bài toán có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Toán học
- Hình học không gian
- Đồng quy
- Toán 11
grade: 11
---

**Chứng minh ba đường thẳng đồng quy trong không gian** là một dạng toán quan trọng của chương trình Hình học không gian [Toán lớp 11](/lop-11.html). Dạng toán này thường được kết hợp với bài toán chứng minh ba điểm thẳng hàng và tìm thiết diện của hình chóp, tứ diện.

Dưới đây là 2 phương pháp chứng minh chuẩn tắc cùng các ví dụ và bài tập có lời giải chi tiết.

---

## 1. Phương pháp chứng minh ba đường thẳng đồng quy

### Cách 1: Sử dụng giao điểm của hai đường thẳng
Để chứng minh ba đường thẳng $a, b, c$ đồng quy:
1. **Bước 1:** Tìm giao điểm $I$ của hai đường thẳng $a$ và $b$ ($I = a \cap b$).
2. **Bước 2:** Chứng minh điểm $I$ thuộc đường thẳng thứ ba $c$.
   - Thông thường, ta chỉ ra $c$ là giao tuyến của hai mặt phẳng phân biệt $(\alpha)$ và $(\beta)$.
   - Chứng minh $I \in (\alpha)$ (vì $I \in a \subset (\alpha)$) và $I \in (\beta)$ (vì $I \in b \subset (\beta)$).
   - Suy ra $I$ là điểm chung của $(\alpha)$ và $(\beta)$, do đó $I \in c$.
3. **Bước 3:** Kết luận ba đường thẳng $a, b, c$ đồng quy tại điểm $I$.

---

### Cách 2: Sử dụng định lý về giao tuyến của ba mặt phẳng
> **Định lý (Về giao tuyến của ba mặt phẳng phân biệt):**
> Nếu ba mặt phẳng phân biệt đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó **hoặc đồng quy, hoặc đôi một song song**.
>
> $$\begin{cases} (\alpha) \cap (\beta) = a \\ (\beta) \cap (\gamma) = b \\ (\gamma) \cap (\alpha) = c \end{cases} \implies a, b, c \text{ đồng quy hoặc } a \parallel b \parallel c$$

Nếu ta đã chỉ ra hai trong ba đường thẳng cắt nhau tại điểm $I$ ($a \cap b = I$), thì khả năng đôi một song song bị loại trừ. Khi đó, đường thẳng thứ ba $c$ bắt buộc phải đi qua điểm $I$, tức là **ba giao tuyến đồng quy tại $I$**.

![Định lý giao tuyến của 3 mặt phẳng](assets/images/chung-minh-ba-duong-thang-dong-quy-trong-khong-gian-giao-tuyen-cua-3-mat-phang.png)

Xem thêm: [Cách chứng minh ba điểm thẳng hàng trong không gian](/bai-viet/cach-chung-minh-thang-hang-trong-hinh-hoc-khong-gian.html)

---

## 2. Các ví dụ minh họa có lời giải chi tiết

### Ví dụ 1
Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Mặt phẳng $(P)$ đi qua $MN$ cắt các cạnh $AD, BC$ lần lượt tại $P$ và $Q$. Giả sử $MP$ cắt $NQ$ tại $I$. Chứng minh rằng ba đường thẳng $MP, NQ$ và $BD$ đồng quy tại điểm $I$.

![Chứng minh ba đường thẳng đồng quy](assets/images/chung-minh-ba-duong-thang-dong-quy-trong-khong-gian-cach-chung-minh-3-diem-thang-hang-3-duong-thang-dong-quy.png)

**Lời giải chi tiết:**
Xét hai mặt phẳng $(ABD)$ và $(BCD)$:
- Ta có giao tuyến của hai mặt phẳng là: $(ABD) \cap (BCD) = BD$.
- Vì $M \in AB \subset (ABD)$ và $P \in AD \subset (ABD)$ nên đường thẳng $MP \subset (ABD)$.
  Do $I \in MP \implies I \in (ABD)$.
- Vì $N \in CD \subset (BCD)$ và $Q \in BC \subset (BCD)$ nên đường thẳng $NQ \subset (BCD)$.
  Do $I \in NQ \implies I \in (BCD)$.

Từ đó suy ra $I$ là điểm chung của hai mặt phẳng phân biệt $(ABD)$ và $(BCD)$.
Do vậy, điểm $I$ phải thuộc giao tuyến của hai mặt phẳng đó, tức là $I \in BD$.

Vậy ba đường thẳng $MP, NQ$ và $BD$ cùng đi qua điểm $I$, tức là chúng đồng quy tại $I$ (đpcm).

---

### Ví dụ 2
Cho tứ diện $ABCD$. Mặt phẳng $(P)$ không song song với $AB$ và $CD$, cắt các cạnh $AC, BC, BD, AD$ lần lượt tại bốn điểm $M, N, R, S$.
1. Chứng minh ba đường thẳng $AB, MN, RS$ đồng quy.
2. Chứng minh ba đường thẳng $CD, MS, NR$ đồng quy.

**Lời giải chi tiết:**
1. **Chứng minh $AB, MN, RS$ đồng quy:**
   - Trong mặt phẳng $(ABC)$, gọi $I = AB \cap MN$ (do $MN$ không song song với $AB$).
   - Xét ba mặt phẳng: $(ABC), (ABD)$ và mặt phẳng $(P) \equiv (MNRS)$:
     - $(ABC) \cap (ABD) = AB$
     - $(ABC) \cap (P) = MN$
     - $(ABD) \cap (P) = RS$
   - Ba mặt phẳng phân biệt cắt nhau theo ba giao tuyến $AB, MN, RS$.
   - Mà $AB$ và $MN$ đã cắt nhau tại $I$, nên theo định lý giao tuyến của ba mặt phẳng, giao tuyến thứ ba $RS$ bắt buộc phải đi qua $I$.
   - Vậy $AB, MN, RS$ đồng quy tại $I$.

2. **Chứng minh $CD, MS, NR$ đồng quy:**
   - Hoàn toàn tương tự, xét ba mặt phẳng: $(ACD), (BCD)$ và mặt phẳng $(P)$:
     - $(ACD) \cap (BCD) = CD$
     - $(ACD) \cap (P) = MS$
     - $(BCD) \cap (P) = NR$
   - Ba giao tuyến này cắt nhau từng đôi một, do đó chúng đồng quy tại một điểm $J = CD \cap MS \cap NR$ (đpcm).

---

### Ví dụ 3
Cho hình thang $ABCD$ ($AB \parallel CD$, $AB < CD$). Điểm $S$ nằm ngoài mặt phẳng chứa $ABCD$. Gọi $O = AC \cap BD$ là giao điểm hai đường chéo của đáy. Trên các cạnh $SC, SD$ lấy lần lượt các trung điểm $M, N$. Gọi $K = AM \cap BN$. Chứng minh rằng ba đường thẳng $SO, AM, BN$ đồng quy tại $K$.

**Lời giải chi tiết:**
Xét ba mặt phẳng phân biệt: $(SAC), (SBD)$ và $(ABMN)$:
1. Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $SO$ (vì $S$ là điểm chung và $O = AC \cap BD$ là điểm chung thứ hai).
2. Giao tuyến của $(SAC)$ và $(ABMN)$ là đường thẳng $AM$ (vì $A \in (SAC) \cap (ABMN)$ và $M \in SC \subset (SAC), M \in (ABMN)$).
3. Giao tuyến của $(SBD)$ và $(ABMN)$ là đường thẳng $BN$ (vì $B \in (SBD) \cap (ABMN)$ và $N \in SD \subset (SBD), N \in (ABMN)$).

Theo giả thiết, trong mặt phẳng $(ABMN)$, hai đường thẳng $AM$ và $BN$ cắt nhau tại điểm $K$.
Theo định lý về giao tuyến của ba mặt phẳng, ba giao tuyến $SO, AM, BN$ phải đồng quy tại điểm $K$.
Vậy $SO, AM, BN$ đồng quy tại $K$ (đpcm).

---

## Bài viết liên quan
- [Thiết diện là gì và các phương pháp tìm thiết diện](/bai-viet/thiet-dien-la-gi-va-cac-phuong-phap-tim-thiet-dien.html)
- [Cách tìm giao tuyến của hai mặt phẳng trong không gian](/bai-viet/cach-tim-giao-tuyen-cua-hai-mat-phang.html)
- [Góc giữa hai đường thẳng trong không gian lớp 11](/bai-viet/goc-giua-hai-duong-thang-trong-khong-gian.html)
