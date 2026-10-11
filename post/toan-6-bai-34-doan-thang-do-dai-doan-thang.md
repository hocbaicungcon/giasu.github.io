---
title: 'Toán 6 Bài 34: Đoạn thẳng. Độ dài đoạn thẳng - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 34 Đoạn thẳng và độ dài đoạn thẳng: khái niệm đoạn thẳng, hai đầu mút, hệ thức cộng đoạn thẳng AM + MB = AB, cách xác định điểm nằm giữa trên tia, công thức đếm n(n-1)/2 đoạn thẳng, 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học
  - Đoạn thẳng
  - Độ dài đoạn thẳng
  - Cộng đoạn thẳng
  - Kết nối tri thức
grade: 6
---

# Bài 34. Đoạn thẳng. Độ dài đoạn thẳng

Nếu đường thẳng là một dải kéo dài vô tận về cả hai phía, và tia là luồng sáng bắn ra từ một điểm gốc kéo dài mãi mãi về một hướng, thì **đoạn thẳng** lại là một hình hình học trọn vẹn và hữu hạn: nó bị chặn lại ở cả hai đầu mút. 

Trong đời sống, hầu như mọi vật thể mà chúng ta đo đạc, chế tạo hay cầm nắm hằng ngày đều mang hình bóng của đoạn thẳng: từ chiếc bút bi, cây thước kẻ, mép cuốn sách, cạnh bàn học cho đến các nhịp cầu vượt hay các thanh dầm thép trong các tòa cao ốc. 

Bài học này sẽ giúp các em nắm vững khái niệm đoạn thẳng, khoảng cách giữa hai điểm, làm chủ **hệ thức cộng đoạn thẳng $AM + MB = AB$**, phương pháp nhận biết điểm nằm giữa trên tia và $5$ chuyên đề học sinh giỏi nâng cao độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 34: ĐOẠN THẲNG & ĐỘ DÀI</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa đoạn thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Gồm hai điểm $A, B$ và tất cả các điểm nằm giữa $A$ và $B$. Bị giới hạn ở cả hai đầu mút.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Độ dài đoạn thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Là một số dương (kèm đơn vị đo). Độ dài $AB$ chính là khoảng cách giữa hai điểm $A$ và $B$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hệ thức cộng đoạn thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">$M$ nằm giữa $A$ và $B \iff AM + MB = AB$.<br>Trên tia $Ox,$ nếu $OA &lt; OB$ thì $A$ nằm giữa $O$ và $B$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Công thức đếm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Với $n$ điểm phân biệt, số đoạn thẳng tạo thành là $\dfrac{n(n - 1)}{2}$ đoạn thẳng.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Trực giác từ phép đo thực tế (5–7 phút)

Hãy bắt đầu bài học bằng 5 câu hỏi tình huống thực tế sau:

**Câu 1 (Phân biệt ba khái niệm):** Hoàn thành bảng so sánh sự khác nhau giữa đường thẳng, tia và đoạn thẳng:
- *Đường thẳng $AB$:* Kéo dài vô tận về **hai phía**, không có điểm mút.
- *Tia $AB$:* Bị giới hạn ở **gốc $A$**, kéo dài vô tận về phía $B.$
- *Đoạn thẳng $AB$:* Bị giới hạn ở **cả hai đầu mút $A$ và $B$**, có độ dài xác định.

**Câu 2 (Ước lượng và đo đạc):** Dùng thước kẻ có vạch chia xăng-ti-mét đo chiều dài của một chiếc bút bi. Số đo nhận được có phải là một số dương không? Có bao giờ độ dài đoạn thẳng là số âm không?
- *Trả lời:* Độ dài của bút bi đo được khoảng $14\text{ cm}.$ Độ dài đoạn thẳng **luôn luôn là một số dương** (lớn hơn $0$). Không bao giờ có độ dài mang giá trị âm.

**Câu 3 (Hành trình nối tuyến):** Một chuyến tàu hỏa đi từ ga Hà Nội ($A$) đến ga Hải Phòng ($B$) và dừng nghỉ tại ga Hải Dương ($C$). Biết rằng ba ga này thẳng hàng và ga Hải Dương nằm giữa hai ga kia. Quãng đường từ Hà Nội đến Hải Phòng có bằng tổng hai quãng đường $AC$ và $CB$ không?
- *Trả lời:* Có, quãng đường $AB$ đúng bằng quãng đường $AC$ cộng với quãng đường $CB$:
  $$AB = AC + CB.$$

**Câu 4 (Quan sát điểm trên tia):** Trên tia $Ox,$ ta đánh dấu vạch $3\text{ cm}$ là điểm $M$ và vạch $7\text{ cm}$ là điểm $N.$ Trong ba điểm $O, M, N,$ điểm nào nằm giữa hai điểm còn lại?
- *Trả lời:* Vì $3\text{ cm} < 7\text{ cm}$ nên điểm $M$ nằm giữa hai điểm $O$ và $N.$

**Câu 5 (Bài toán đếm nhanh):** Cho $3$ điểm $A, B, C$ thẳng hàng. Có bao nhiêu đoạn thẳng có hai đầu mút là hai trong ba điểm đó?
- *Trả lời:* Có $3$ đoạn thẳng là: $AB, BC, AC.$

---

## A. Lý thuyết trọng tâm

### 1. Đoạn thẳng

#### a) Định nghĩa
- **Đoạn thẳng $AB$** (hay đoạn thẳng $BA$) là hình gồm hai điểm $A, B$ và tất cả các điểm nằm giữa $A$ và $B.$
- Hai điểm $A$ và $B$ được gọi là **hai đầu mút** (hoặc gọi tắt là hai mút) của đoạn thẳng $AB.$

```
                A                              B
                •──────────────────────────────•
                         Đoạn thẳng AB
```

> [!NOTE]
> Đoạn thẳng $AB$ và đoạn thẳng $BA$ là cùng một hình. Thứ tự gọi tên hai đầu mút không làm thay đổi đoạn thẳng.

#### b) Phân biệt đường thẳng, tia và đoạn thẳng

| Hình hình học | Giới hạn về các phía | Điểm đầu mút | Có đo được độ dài không? |
| :--- | :--- | :--- | :---: |
| **Đường thẳng $AB$** | Không bị giới hạn về cả hai phía | Không có | **Không** (vô hạn) |
| **Tia $AB$** | Bị giới hạn ở gốc $A,$ không giới hạn về phía $B$ | Có gốc $A$ | **Không** (vô hạn) |
| **Đoạn thẳng $AB$** | Bị giới hạn ở cả hai đầu $A$ và $B$ | Có $2$ mút $A, B$ | **Có** (số dương xác định) |

---

### 2. Độ dài đoạn thẳng

#### a) Khái niệm độ dài
- Mỗi đoạn thẳng có một **độ dài**. Độ dài đoạn thẳng là một **số dương** gắn liền với một đơn vị đo xác định (chẳng hạn: $\text{mm}, \text{cm}, \text{dm}, \text{m}, \text{km}$).
- Độ dài đoạn thẳng $AB$ còn được gọi là **khoảng cách giữa hai điểm $A$ và $B$**.
- Quy ước: Khoảng cách giữa hai điểm trùng nhau bằng $0.$

#### b) Ký hiệu viết tắt
Người ta thường viết gọn câu *"Đoạn thẳng $AB$ có độ dài bằng $6\text{ cm}$"* thành:
$$AB = 6\text{ cm}\quad \text{(hoặc } BA = 6\text{ cm)}.$$

---

### 3. So sánh hai đoạn thẳng

Ta so sánh hai đoạn thẳng dựa vào việc so sánh các số đo độ dài của chúng:
- **Hai đoạn thẳng bằng nhau:** Nếu chúng có cùng độ dài.
  $$AB = CD.$$
- **Đoạn thẳng ngắn hơn / dài hơn:**
  - Nếu độ dài của $AB$ nhỏ hơn độ dài của $CD,$ ta nói đoạn thẳng $AB$ **ngắn hơn** đoạn thẳng $CD$ (hay đoạn thẳng $CD$ **dài hơn** đoạn thẳng $AB$), kí hiệu:
  $$AB < CD\quad \text{(hay } CD > AB\text{)}.$$

**Ví dụ 1:** Cho $AB = 5\text{ cm};\; CD = 5\text{ cm};\; EF = 7\text{ cm}.$
- Ta viết: $AB = CD$ (hai đoạn thẳng bằng nhau).
- $AB < EF$ và $CD < EF$ (đoạn thẳng $EF$ dài hơn hai đoạn thẳng $AB$ và $CD$).

---

### 4. Hệ thức cộng đoạn thẳng

#### a) Định lý then chốt
> [!IMPORTANT]
> **Định lý cộng đoạn thẳng:**
> Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì:
> $$AM + MB = AB.$$
> Ngược lại, nếu ba điểm $A, M, B$ thỏa mãn đẳng thức $AM + MB = AB$ thì **điểm $M$ nằm giữa hai điểm $A$ và $B$**.

```
                A               M               B
                •───────────────•───────────────•
                ├─── AM ────────┼──── MB ───────┤
                ├────────────── AB ─────────────┤
```

Từ hệ thức $AM + MB = AB,$ khi biết độ dài của hai trong ba đoạn thẳng, ta dễ dàng tính được độ dài đoạn thẳng còn lại:
- Tính đoạn tổng: $AB = AM + MB.$
- Tính đoạn thành phần:
  $$AM = AB - MB$$
  $$MB = AB - AM$$

#### b) Dấu hiệu nhận biết điểm nằm giữa trên tia
> [!TIP]
> **Quy tắc so sánh độ dài trên tia:**
> Trên tia $Ox,$ lấy hai điểm $A$ và $B$ sao cho $OA < OB$ thì:
> **Điểm $A$ nằm giữa hai điểm $O$ và $B$.**
> Khi đó: $OA + AB = OB \implies AB = OB - OA.$

```
                O             A                   B             x
                •─────────────•───────────────────•─────────────>
                ├─── OA ──────┤
                ├──────────────── OB ─────────────┤
                Vì OA < OB nên điểm A nằm giữa O và B
```

---

### 5. Công thức đếm số đoạn thẳng

Cho $n$ điểm phân biệt trên mặt phẳng (hoặc trên cùng một đường thẳng):
- Chọn một điểm làm mút thứ nhất: có $n$ cách chọn.
- Chọn một điểm làm mút thứ hai: có $(n - 1)$ cách chọn.
- Số cặp điểm là $n(n - 1).$
- Vì mỗi đoạn thẳng $AB$ và $BA$ bị đếm $2$ lần, nên số đoạn thẳng phân biệt là:
$$S = \dfrac{n(n - 1)}{2}\text{ (đoạn thẳng)}.$$

**Bảng tra cứu số đoạn thẳng:**

| Số điểm ($n$) | $2$ | $3$ | $4$ | $5$ | $6$ | $10$ | $n$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Số đoạn thẳng ($S$)** | $1$ | $3$ | $6$ | $10$ | $15$ | $45$ | $\dfrac{n(n-1)}{2}$ |

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Nhận biết và đếm số đoạn thẳng

#### Phương pháp giải:
- Để đếm không sót, không trùng: Liệt kê các đoạn thẳng theo từng đầu mút từ trái sang phải.
- Hoặc áp dụng công thức $S = \dfrac{n(n - 1)}{2}$ nếu có $n$ điểm phân biệt.

---

**Ví dụ 1:**
Trên đường thẳng $d,$ lấy $4$ điểm phân biệt $A, B, C, D$ theo thứ tự đó.
a) Kể tên tất cả các đoạn thẳng có trong hình.
b) Điểm $B$ là đầu mút của những đoạn thẳng nào?
c) Điểm $C$ nằm trên những đoạn thẳng nào?

**Lời giải:**
a) Với $n = 4$ điểm, số đoạn thẳng là: $\dfrac{4 \cdot 3}{2} = 6$ đoạn thẳng.
Liệt kê:
- Các đoạn thẳng có một đầu mút là $A$: $AB, AC, AD.$
- Các đoạn thẳng có một đầu mút là $B$ (không kể $A$): $BC, BD.$
- Đoạn thẳng còn lại: $CD.$
Vậy $6$ đoạn thẳng là: **$AB, AC, AD, BC, BD, CD$**.

b) Điểm $B$ là đầu mút của các đoạn thẳng: **$BA$ (hay $AB$), $BC, BD$** (gồm $3$ đoạn thẳng).

c) Điểm $C$ nằm trên các đoạn thẳng mà nó là đầu mút hoặc nằm giữa:
- Là đầu mút: $AC, BC, CD.$
- Nằm giữa: $AD$ (vì thứ tự $A, B, C, D$ nên $C$ nằm giữa $A$ và $D$), $BD$ (vì $C$ nằm giữa $B$ và $D$).
Vậy điểm $C$ nằm trên các đoạn thẳng: **$AC, BC, CD, AD, BD$**.

---

### Dạng 2: Tính độ dài đoạn thẳng bằng hệ thức cộng

#### Phương pháp giải:
- **Bước 1:** Chỉ ra điểm nằm giữa hai điểm kia (do đề bài cho, hoặc do so sánh hai độ dài trên cùng một tia: $OA < OB$).
- **Bước 2:** Viết hệ thức cộng đoạn thẳng: $AM + MB = AB.$
- **Bước 3:** Thay số và tính độ dài đoạn thẳng cần tìm.

---

**Ví dụ 2:**
Trên tia $Ox,$ lấy hai điểm $M$ và $N$ sao cho $OM = 3\text{ cm}$ và $ON = 8\text{ cm}.$
a) Điểm nào nằm giữa hai điểm còn lại? Vì sao?
b) Tính độ dài đoạn thẳng $MN.$
c) Trên tia đối của tia $Ox,$ lấy điểm $P$ sao cho $OP = 4\text{ cm}.$ Tính độ dài đoạn thẳng $PM.$

**Lời giải:**
a) Hai điểm $M$ và $N$ cùng thuộc tia $Ox.$
Vì $OM < ON$ (do $3\text{ cm} < 8\text{ cm}$) nên **điểm $M$ nằm giữa hai điểm $O$ và $N$**.

b) Vì điểm $M$ nằm giữa hai điểm $O$ và $N$ nên:
$$OM + MN = ON.$$
Thay số:
$$3 + MN = 8 \implies MN = 8 - 3 = 5\text{ cm}.$$

c)
- Điểm $P$ thuộc tia đối của tia $Ox,$ còn điểm $M$ thuộc tia $Ox.$
- Do đó hai tia $OP$ và $OM$ đối nhau, suy ra **điểm $O$ nằm giữa hai điểm $P$ và $M$**.
- Ta có hệ thức cộng:
$$PM = PO + OM.$$
Thay số:
$$PM = 4 + 3 = 7\text{ cm}.$$

---

### Dạng 3: So sánh độ dài các đoạn thẳng

#### Phương pháp giải:
- Tính độ dài của từng đoạn thẳng cần so sánh.
- So sánh các số đo và kết luận dùng các ký hiệu $=, <, >.$

---

**Ví dụ 3:**
Cho đoạn thẳng $AB = 9\text{ cm}.$ Lấy điểm $C$ thuộc đoạn thẳng $AB$ sao cho $AC = 4\text{ cm}.$
a) Tính độ dài đoạn thẳng $CB.$
b) So sánh độ dài hai đoạn thẳng $AC$ và $CB.$

**Lời giải:**
a) Vì điểm $C$ thuộc đoạn thẳng $AB$ nên điểm $C$ nằm giữa hai điểm $A$ và $B.$
Ta có:
$$AC + CB = AB.$$
Thay số:
$$4 + CB = 9 \implies CB = 9 - 4 = 5\text{ cm}.$$

b) Ta có $AC = 4\text{ cm}$ và $CB = 5\text{ cm}.$
Vì $4\text{ cm} < 5\text{ cm}$ nên:
$$AC < CB.$$

---

### Dạng 4: Bài toán đặt điểm từ hai đầu mút đối diện

#### Phương pháp giải:
- Vẽ đoạn thẳng tổng $AB.$
- Đặt điểm $C$ trên tia $AB$ (gốc $A$) với độ dài $AC.$
- Đặt điểm $D$ trên tia $BA$ (gốc $B$) với độ dài $BD.$
- Xác định thứ tự các điểm bằng cách so sánh $AC + BD$ với $AB$:
  - Nếu $AC + BD < AB$: Hai điểm $C$ và $D$ không vượt qua nhau (thứ tự $A, C, D, B$), khi đó $CD = AB - (AC + BD).$
  - Nếu $AC + BD > AB$: Hai điểm $C$ và $D$ bắt chéo qua nhau (thứ tự $A, D, C, B$), khi đó $CD = (AC + BD) - AB.$

---

**Ví dụ 4:**
Cho đoạn thẳng $AB = 12\text{ cm}.$ Trên tia $AB$ lấy điểm $C$ sao cho $AC = 5\text{ cm}.$ Trên tia $BA$ lấy điểm $D$ sao cho $BD = 4\text{ cm}.$
a) Chứng tỏ rằng điểm $C$ nằm giữa hai điểm $A$ và $B.$
b) Tính độ dài đoạn thẳng $CD.$

**Lời giải:**
a)
- Điểm $C$ thuộc tia $AB$ và điểm $B$ cũng thuộc tia $AB.$
- Vì $AC < AB$ (do $5\text{ cm} < 12\text{ cm}$) nên **điểm $C$ nằm giữa hai điểm $A$ và $B$**.
- Suy ra:
  $$CB = AB - AC = 12 - 5 = 7\text{ cm}.$$

b)
- Xét trên tia $BA$: Điểm $D$ và điểm $C$ cùng thuộc tia $BA.$
- Ta có $BD = 4\text{ cm}$ và $BC = 7\text{ cm}.$
- Vì $BD < BC$ (do $4\text{ cm} < 7\text{ cm}$) nên **điểm $D$ nằm giữa hai điểm $B$ và $C$**.
- Ta có hệ thức cộng:
  $$CD + DB = CB \implies CD = CB - DB = 7 - 4 = 3\text{ cm}.$$
Vậy $CD = 3\text{ cm}.$

---

### Dạng 5: Bài toán ứng dụng thực tế đo đạc và chuyển động

#### Phương pháp giải:
- Quy đổi các đại lượng về cùng một đơn vị đo độ dài.
- Mô hình hóa vị trí các điểm trên một đường thẳng và áp dụng hệ thức cộng đoạn thẳng.

---

**Ví dụ 5:**
Một cây cầu dây văng dài $1{,}2\text{ km}.$ Một người đi bộ xuất phát từ đầu cầu $A,$ đi được $450\text{ m}$ thì dừng lại ở trụ tháp $T_1$ để chụp ảnh. Sau đó người đó đi tiếp $500\text{ m}$ nữa đến trụ tháp $T_2.$
a) Trụ tháp $T_2$ cách đầu cầu $A$ bao nhiêu mét?
b) Người đó còn phải đi tiếp bao nhiêu mét nữa thì đến đầu cầu $B$ bên kia?

**Lời giải:**
a) Đổi $1{,}2\text{ km} = 1\,200\text{ m}.$
Vì các điểm $A, T_1, T_2, B$ cùng nằm trên một đường thẳng theo thứ tự hành trình:
- Trụ tháp $T_1$ nằm giữa $A$ và $T_2.$
- Khoảng cách từ đầu cầu $A$ đến trụ tháp $T_2$ là:
  $$AT_2 = AT_1 + T_1T_2 = 450 + 500 = 950\text{ m}.$$

b)
- Điểm $T_2$ nằm giữa $A$ và $B.$
- Khoảng cách từ trụ tháp $T_2$ đến đầu cầu $B$ là:
  $$T_2B = AB - AT_2 = 1\,200 - 950 = 250\text{ m}.$$
Vậy người đó còn phải đi tiếp $250\text{ m}$ nữa thì sang đến đầu cầu $B.$

---

## C. Phiếu bài tập tự luyện toàn diện (Có lời giải chi tiết)

### Đề bài tự luyện

**Bài 1 (Đếm đoạn thẳng):**
a) Cho $5$ điểm phân biệt nằm trên một đường thẳng. Có tất cả bao nhiêu đoạn thẳng? Kể tên.
b) Cho $7$ điểm phân biệt trong đó không có ba điểm nào thẳng hàng. Nối từng cặp điểm, hỏi vẽ được bao nhiêu đoạn thẳng?

**Bài 2 (Đo và so sánh):**
Cho các đoạn thẳng: $AB = 6\text{ cm};\; CD = 4{,}5\text{ cm};\; EF = 60\text{ mm};\; GH = 0{,}8\text{ dm}.$
a) Đổi các số đo về cùng đơn vị xăng-ti-mét.
b) Sắp xếp các đoạn thẳng theo thứ tự độ dài tăng dần.
c) Chỉ ra các cặp đoạn thẳng bằng nhau.

**Bài 3 (Tính độ dài cơ bản):**
Cho điểm $O$ nằm giữa hai điểm $A$ và $B.$ Biết $OA = 3{,}5\text{ cm}$ và $OB = 4{,}5\text{ cm}.$ Tính độ dài đoạn thẳng $AB.$

**Bài 4 (Tính độ dài có phép trừ):**
Cho đoạn thẳng $MN = 10\text{ cm}.$ Lấy điểm $I$ thuộc đoạn thẳng $MN$ sao cho $MI = 6\text{ cm}.$
a) Tính độ dài đoạn thẳng $IN.$
b) So sánh $MI$ và $IN.$

**Bài 5 (So sánh trên tia):**
Trên tia $Ox,$ lấy hai điểm $A$ và $B$ sao cho $OA = 4\text{ cm}$ và $OB = 7\text{ cm}.$
a) Điểm $A$ có nằm giữa hai điểm $O$ và $B$ không? Vì sao?
b) Tính độ dài đoạn thẳng $AB.$

**Bài 6 (Phát hiện lỗi sai):**
Bạn Bình nói: *"Cho ba điểm $A, B, C.$ Biết $AB = 5\text{ cm}$ và $BC = 3\text{ cm},$ chắc chắn đoạn thẳng $AC$ dài $8\text{ cm}$."*
Theo em, bạn Bình nói đúng hay sai? Vì sao?

**Bài 7 (Hai điểm từ hai phía tia):**
Trên tia $Ox,$ lấy điểm $A$ sao cho $OA = 5\text{ cm}.$ Trên tia đối của tia $Ox,$ lấy điểm $B$ sao cho $OB = 3\text{ cm}.$
a) Điểm nào nằm giữa hai điểm còn lại? Vì sao?
b) Tính độ dài đoạn thẳng $AB.$

**Bài 8 (Ba điểm liên tiếp trên tia):**
Trên tia $Ox,$ lấy ba điểm $A, B, C$ sao cho $OA = 2\text{ cm};\; OB = 6\text{ cm};\; OC = 9\text{ cm}.$
a) Tính độ dài các đoạn thẳng $AB$ và $BC.$
b) Điểm $B$ có nằm giữa hai điểm $A$ và $C$ không? Vì sao?

**Bài 9 (Hai điểm đặt từ hai đầu mút):**
Cho đoạn thẳng $AB = 10\text{ cm}.$ Trên tia $AB$ lấy điểm $M$ sao cho $AM = 6\text{ cm}.$ Trên tia $BA$ lấy điểm $N$ sao cho $BN = 6\text{ cm}.$
a) Chứng minh điểm $N$ nằm giữa hai điểm $A$ và $M.$
b) Tính độ dài đoạn thẳng $MN.$

**Bài 10 (Bài toán thực tế cắt gỗ):**
Một thanh gỗ dài $3\text{ m}.$ Bác thợ mộc cưa thanh gỗ thành ba đoạn: đoạn thứ nhất dài $80\text{ cm},$ đoạn thứ hai dài gấp đôi đoạn thứ nhất. Hỏi đoạn gỗ thứ ba dài bao nhiêu xăng-ti-mét?

---

### Lời giải chi tiết bài tập tự luyện

**Bài 1:**
a) Với $5$ điểm $A, B, C, D, E$ trên đường thẳng:
- Số đoạn thẳng: $\dfrac{5 \cdot 4}{2} = 10$ đoạn thẳng.
- Danh sách: $AB, AC, AD, AE, BC, BD, BE, CD, CE, DE.$
b) Với $7$ điểm không có $3$ điểm thẳng hàng:
- Số đoạn thẳng: $\dfrac{7 \cdot 6}{2} = 21$ đoạn thẳng.

**Bài 2:**
a) Đổi về đơn vị $\text{cm}$:
- $AB = 6\text{ cm}.$
- $CD = 4{,}5\text{ cm}.$
- $EF = 60\text{ mm} = 6\text{ cm}.$
- $GH = 0{,}8\text{ dm} = 8\text{ cm}.$
b) Sắp xếp tăng dần:
$$CD < AB = EF < GH\quad (4{,}5\text{ cm} < 6\text{ cm} = 6\text{ cm} < 8\text{ cm}).$$
c) Cặp đoạn thẳng bằng nhau: **$AB = EF$** (cùng bằng $6\text{ cm}$).

**Bài 3:**
Vì điểm $O$ nằm giữa hai điểm $A$ và $B$ nên:
$$AB = OA + OB = 3{,}5 + 4{,}5 = 8\text{ cm}.$$

**Bài 4:**
a) Vì $I$ thuộc đoạn thẳng $MN$ nên $I$ nằm giữa $M$ và $N$:
$$MI + IN = MN \implies IN = MN - MI = 10 - 6 = 4\text{ cm}.$$
b) Ta có $MI = 6\text{ cm}$ và $IN = 4\text{ cm}.$ Vì $6\text{ cm} > 4\text{ cm}$ nên $MI > IN.$

**Bài 5:**
a) Hai điểm $A$ và $B$ cùng thuộc tia $Ox.$ Vì $OA < OB$ (do $4\text{ cm} < 7\text{ cm}$) nên **điểm $A$ nằm giữa hai điểm $O$ và $B$**.
b) Ta có:
$$OA + AB = OB \implies AB = OB - OA = 7 - 4 = 3\text{ cm}.$$

**Bài 6:**
Bạn Bình nói **sai**.
*Lý do:* Hệ thức $AC = AB + BC$ chỉ đúng khi **điểm $B$ nằm giữa hai điểm $A$ và $C$**. Đề bài chưa khẳng định ba điểm $A, B, C$ có thẳng hàng hay không và điểm nào nằm giữa điểm nào:
- Nếu $C$ nằm giữa $A$ và $B$ thì $AC = AB - BC = 5 - 3 = 2\text{ cm}.$
- Nếu $A, B, C$ không thẳng hàng thì $AC < AB + BC = 8\text{ cm}$ (theo bất đẳng thức tam giác).
Do đó không thể kết luận chắc chắn $AC = 8\text{ cm}.$

**Bài 7:**
a) Điểm $A$ thuộc tia $Ox,$ điểm $B$ thuộc tia đối của tia $Ox,$ do đó hai tia $OA$ và $OB$ là hai tia đối nhau.
Suy ra **điểm $O$ nằm giữa hai điểm $A$ và $B$**.
b) Vì $O$ nằm giữa $A$ và $B$ nên:
$$AB = OA + OB = 5 + 3 = 8\text{ cm}.$$

**Bài 8:**
a)
- Trên tia $Ox,$ vì $OA < OB$ ($2\text{ cm} < 6\text{ cm}$) nên $A$ nằm giữa $O$ và $B$:
  $$AB = OB - OA = 6 - 2 = 4\text{ cm}.$$
- Trên tia $Ox,$ vì $OB < OC$ ($6\text{ cm} < 9\text{ cm}$) nên $B$ nằm giữa $O$ và $C$:
  $$BC = OC - OB = 9 - 6 = 3\text{ cm}.$$
b) Ta tính $AC$: Trên tia $Ox,$ vì $OA < OC$ ($2\text{ cm} < 9\text{ cm}$) nên $A$ nằm giữa $O$ và $C$:
  $$AC = OC - OA = 9 - 2 = 7\text{ cm}.$$
Ta thấy: $AB + BC = 4 + 3 = 7\text{ cm} = AC.$
Vì $AB + BC = AC$ nên **điểm $B$ nằm giữa hai điểm $A$ và $C$**.

**Bài 9:**
a)
- Điểm $M \in AB$ với $AM = 6\text{ cm} < AB = 10\text{ cm} \implies M$ nằm giữa $A$ và $B,$ do đó $MB = 10 - 6 = 4\text{ cm}.$
- Trên tia $BA,$ ta có $BN = 6\text{ cm}$ và $BM = 4\text{ cm}.$
- Vì $BM < BN$ ($4\text{ cm} < 6\text{ cm}$) nên **điểm $M$ nằm giữa hai điểm $B$ và $N$** (hay điểm $N$ nằm giữa hai điểm $A$ và $M$).
b) Do $M$ nằm giữa $B$ và $N$ nên:
$$BM + MN = BN \implies MN = BN - BM = 6 - 4 = 2\text{ cm}.$$

**Bài 10:**
Đổi $3\text{ m} = 300\text{ cm}.$
- Chiều dài đoạn thứ nhất: $80\text{ cm}.$
- Chiều dài đoạn thứ hai: $80 \cdot 2 = 160\text{ cm}.$
- Tổng chiều dài hai đoạn đầu: $80 + 160 = 240\text{ cm}.$
- Chiều dài đoạn gỗ thứ ba là:
  $$300 - 240 = 60\text{ cm}.$$

---

## D. 5 Chuyên đề nâng cao học sinh giỏi (Độc bản 100%)

### Chuyên đề 1: Bất đẳng thức đoạn thẳng — Điều kiện ba điểm thẳng hàng

> [!NOTE]
> **Bất đẳng thức ba điểm:**
> Với ba điểm $A, B, C$ bất kì trên mặt phẳng, ta luôn có:
> $$AC \le AB + BC.$$
> Dấu đẳng thức $AC = AB + BC$ xảy ra **khi và chỉ khi điểm $B$ nằm giữa hai điểm $A$ và $C$** (nghĩa là ba điểm $A, B, C$ thẳng hàng theo thứ tự đó).

**Bài toán 1:**
Cho ba điểm $A, B, C.$ Biết $AB = 3{,}6\text{ cm};\; BC = 4{,}8\text{ cm};\; AC = 8{,}4\text{ cm}.$
a) Hỏi ba điểm $A, B, C$ có thẳng hàng không? Điểm nào nằm giữa hai điểm còn lại?
b) Nếu thay đổi số đo $AC = 7\text{ cm}$ thì ba điểm $A, B, C$ có thẳng hàng không? Vì sao?

**Lời giải chi tiết:**
a) Ta xét tổng hai đoạn thẳng ngắn hơn:
$$AB + BC = 3{,}6 + 4{,}8 = 8{,}4\text{ cm}.$$
Ta thấy: $AB + BC = AC$ (vì cùng bằng $8{,}4\text{ cm}$).
Theo định lý đảo của hệ thức cộng đoạn thẳng: **Ba điểm $A, B, C$ thẳng hàng và điểm $B$ nằm giữa hai điểm $A$ và $C$**.

b) Nếu $AC = 7\text{ cm}$:
Ta có: $AB + BC = 8{,}4\text{ cm} > 7\text{ cm} = AC.$
Lại có:
- $AC + AB = 7 + 3{,}6 = 10{,}6\text{ cm} > 4{,}8\text{ cm} = BC.$
- $AC + BC = 7 + 4{,}8 = 11{,}8\text{ cm} > 3{,}6\text{ cm} = AB.$
Tổng hai đoạn bất kì luôn lớn hơn đoạn còn lại (thỏa mãn bất đẳng thức tam giác ngặt).
Do đó, không có điểm nào nằm giữa hai điểm còn lại $\implies$ **Ba điểm $A, B, C$ không thẳng hàng** (chúng tạo thành một tam giác).

---

### Chuyên đề 2: Bài toán phương trình đoạn thẳng kết hợp tỉ số

**Bài toán 2:**
Cho đoạn thẳng $AB = 15\text{ cm}.$ Điểm $C$ nằm giữa hai điểm $A$ và $B$ sao cho độ dài đoạn thẳng $AC$ bằng $\dfrac{2}{3}$ độ dài đoạn thẳng $CB.$
a) Tính độ dài các đoạn thẳng $AC$ và $CB.$
b) Trên tia đối của tia $BA,$ lấy điểm $D$ sao cho $BD = 4\text{ cm}.$ Tính độ dài đoạn thẳng $CD.$

**Lời giải chi tiết:**
a)
- Vì $C$ nằm giữa $A$ và $B$ nên:
  $$AC + CB = AB = 15\text{ cm}.$$
- Ta có tỉ số: $\dfrac{AC}{CB} = \dfrac{2}{3}.$
- Coi $AC$ là $2$ phần bằng nhau thì $CB$ là $3$ phần như thế.
  Tổng số phần bằng nhau là:
  $$2 + 3 = 5\text{ phần}.$$
- Giá trị của một phần là:
  $$15 : 5 = 3\text{ cm}.$$
- Độ dài các đoạn thẳng:
  $$AC = 3 \cdot 2 = 6\text{ cm}.$$
  $$CB = 3 \cdot 3 = 9\text{ cm}.$$

b)
- Tia $BA$ và tia đối của tia $BA$ là hai tia đối nhau gốc $B.$
- Điểm $C$ thuộc đoạn thẳng $AB$ nên $C$ thuộc tia $BA.$
- Điểm $D$ thuộc tia đối của tia $BA.$
- Do đó hai tia $BC$ và $BD$ đối nhau $\implies$ **điểm $B$ nằm giữa hai điểm $C$ và $D$**.
- Ta có hệ thức cộng:
  $$CD = CB + BD = 9 + 4 = 13\text{ cm}.$$

---

### Chuyên đề 3: Bài toán tổ hợp bắt tay và đấu cờ ứng dụng công thức đoạn thẳng

> [!TIP]
> **Mô hình hóa thực tế:**
> Cứ $2$ người bắt tay nhau (hoặc đấu cờ với nhau đúng $1$ ván) tương ứng với đúng **$1$ đoạn thẳng** nối hai điểm đại diện cho hai người.

**Bài toán 3:**
Trong một giải cờ vua giao hữu của khối 6, mỗi kỳ thủ đều phải thi đấu với từng kỳ thủ khác đúng một ván. Ban tổ chức ghi nhận tổng cộng có $66$ ván đấu đã diễn ra.
a) Hỏi giải đấu có bao nhiêu kỳ thủ tham gia?
b) Nếu sau đó có thêm $2$ kỳ thủ nữa đăng ký bổ sung và cũng thi đấu đủ với tất cả các kỳ thủ đã có, hỏi số ván đấu tăng thêm bao nhiêu ván?

**Lời giải chi tiết:**
a)
- Gọi số kỳ thủ tham gia là $n$ ($n \in \mathbb{N}^*, n \ge 2$).
- Cứ $2$ kỳ thủ đấu $1$ ván, số ván đấu bằng số đoạn thẳng tạo bởi $n$ điểm:
  $$S = \dfrac{n(n - 1)}{2} = 66 \iff n(n - 1) = 132.$$
- Ta phân tích $132$ thành tích của hai số tự nhiên liên tiếp:
  $$132 = 12 \cdot 11.$$
- Suy ra $n = 12.$
Vậy giải đấu có **$12$ kỳ thủ** tham gia.

b)
- Khi có thêm $2$ kỳ thủ mới, tổng số kỳ thủ là $12 + 2 = 14$ người.
- Tổng số ván đấu mới là:
  $$S' = \dfrac{14 \cdot 13}{2} = 91\text{ ván}.$$
- Số ván đấu tăng thêm là:
  $$91 - 66 = 25\text{ ván}.$$
*(Cách khác: Mỗi kỳ thủ mới phải đấu với 12 kỳ thủ cũ và đấu với nhau: $2 \cdot 12 + 1 = 25$ ván).*

---

### Chuyên đề 4: Bài toán tối ưu hóa vị trí — Tìm điểm có tổng khoảng cách nhỏ nhất

**Bài toán 4:**
Dọc theo một con kênh thẳng có $4$ trang trại đặt tại các vị trí $A, B, C, D$ theo thứ tự đó với $AB = 2\text{ km};\; BC = 3\text{ km};\; CD = 4\text{ km}.$ Người ta muốn xây dựng một trạm bơm nước tại vị trí $M$ trên bờ kênh sao cho tổng chiều dài đường ống dẫn nước từ trạm bơm đến cả $4$ trang trại là ngắn nhất:
$$\min(MA + MB + MC + MD).$$
Hỏi trạm bơm $M$ nên đặt ở vị trí nào? Tổng chiều dài đường ống nhỏ nhất đó bằng bao nhiêu?

**Lời giải chi tiết:**
- Nhóm tổng khoảng cách thành hai cặp:
  $$S = (MA + MD) + (MB + MC).$$
- Áp dụng bất đẳng thức đoạn thẳng:
  - Với hai điểm $A$ và $D$: Ta luôn có $MA + MD \ge AD.$
    Dấu bằng xảy ra khi và chỉ khi **$M$ thuộc đoạn thẳng $AD$**.
  - Với hai điểm $B$ và $C$: Ta luôn có $MB + MC \ge BC.$
    Dấu bằng xảy ra khi và chỉ khi **$M$ thuộc đoạn thẳng $BC$**.
- Để tổng $S$ đạt giá trị nhỏ nhất thì dấu bằng ở cả hai bất đẳng thức phải xảy ra đồng thời:
  $M$ phải vừa thuộc đoạn thẳng $AD,$ vừa thuộc đoạn thẳng $BC.$
  Vì đoạn thẳng $BC$ nằm hoàn toàn bên trong đoạn thẳng $AD$ nên điều kiện đồng thời là:
  **$M$ thuộc đoạn thẳng $BC$** (bất kì vị trí nào trên đoạn thẳng nối trang trại $B$ và $C$).
- Khi đó, tổng khoảng cách ngắn nhất là:
  $$S_{\min} = AD + BC.$$
  Ta có:
  $$AD = AB + BC + CD = 2 + 3 + 4 = 9\text{ km}.$$
  $$BC = 3\text{ km}.$$
  $$S_{\min} = 9 + 3 = 12\text{ km}.$$
Vậy trạm bơm có thể đặt ở bất kì vị trí nào trên đoạn kênh giữa hai trang trại $B$ và $C,$ tổng chiều dài đường ống ngắn nhất là **$12\text{ km}$**.

---

### Chuyên đề 5: Hệ điểm đối xứng và các đẳng thức độ dài liên hoàn

**Bài toán 5:**
Trên đường thẳng $d,$ cho đoạn thẳng $AB = 2a.$ Lấy điểm $O$ là trung điểm của $AB.$ Lấy điểm $M$ bất kì thuộc đường thẳng $d.$
Chứng minh rằng:
a) Nếu $M$ thuộc đoạn thẳng $AB$ thì $MA + MB = 2a$ và $|MA - MB| = 2 \cdot OM.$
b) Nếu $M$ nằm ngoài đoạn thẳng $AB$ thì $|MA - MB| = 2a$ và $MA + MB = 2 \cdot OM.$

**Lời giải chi tiết:**
Vì $O$ là trung điểm của $AB$ nên $OA = OB = a.$
a) **Trường hợp $M$ thuộc đoạn thẳng $AB$:**
- Vì $M$ nằm giữa $A$ và $B$ nên hiển nhiên:
  $$MA + MB = AB = 2a.$$
- Giả sử $M$ nằm giữa $O$ và $B$ (khi đó $OM = MB - OB$ hoặc $OM = a - MB$):
  - $MA = OA + OM = a + OM.$
  - $MB = OB - OM = a - OM.$
  - Hiệu độ dài:
    $$MA - MB = (a + OM) - (a - OM) = 2 \cdot OM.$$
  - Trường hợp $M$ nằm giữa $O$ và $A$ tương tự, ta có: $|MA - MB| = 2 \cdot OM$ (Đpcm).

b) **Trường hợp $M$ nằm ngoài đoạn thẳng $AB$:**
- Giả sử $M$ nằm về phía $B$ (thứ tự $A, O, B, M$):
  - Khi đó $B$ nằm giữa $A$ và $M \implies AM - MB = AB = 2a.$
  - Mặt khác:
    $$MA = OM + OA = OM + a.$$
    $$MB = OM - OB = OM - a.$$
  - Tổng độ dài:
    $$MA + MB = (OM + a) + (OM - a) = 2 \cdot OM.$$
  - Trường hợp $M$ nằm về phía $A$ chứng minh hoàn toàn tương tự.
Vậy đẳng thức được chứng minh trọn vẹn trong mọi trường hợp.

---

## E. Bộ câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Đoạn thẳng $AB$ là hình gồm:'
options:
  - 'Hai điểm A và B'
  - 'Tất cả các điểm nằm giữa A và B'
  - 'Hai điểm A, B và tất cả các điểm nằm giữa A và B'
  - 'Đường thẳng đi qua hai điểm A và B'
answer: 3
explanation: 'Đoạn thẳng AB là hình gồm hai điểm A, B và tất cả các điểm nằm giữa A và B.'
```

```quiz
type: choice
question: 'Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì hệ thức nào sau đây là ĐÚNG?'
options:
  - 'AM + AB = MB'
  - 'AM + MB = AB'
  - 'MB + AB = AM'
  - 'AM - MB = AB'
answer: 2
explanation: 'Nếu M nằm giữa A và B thì AM + MB = AB.'
```

```quiz
type: choice
question: 'Cho 6 điểm phân biệt, trong đó không có 3 điểm nào thẳng hàng. Số đoạn thẳng vẽ được là:'
options:
  - '6'
  - '12'
  - '15'
  - '30'
answer: 3
explanation: 'Số đoạn thẳng = 6 * 5 / 2 = 15 đoạn thẳng.'
```

```quiz
type: choice
question: 'Trên tia $Ox$ lấy hai điểm $A$ và $B$ sao cho $OA = 3\text{ cm}, OB = 7\text{ cm}$. Độ dài đoạn thẳng $AB$ là:'
options:
  - '10 cm'
  - '4 cm'
  - '3 cm'
  - '7 cm'
answer: 2
explanation: 'Vì OA < OB nên A nằm giữa O và B => AB = OB - OA = 7 - 3 = 4 cm.'
```

```quiz
type: choice
question: 'Điểm $I$ nằm giữa hai điểm $M$ và $N$. Biết $MN = 12\text{ cm}, MI = 5\text{ cm}$. Độ dài $IN$ là:'
options:
  - '17 cm'
  - '7 cm'
  - '6 cm'
  - '8 cm'
answer: 2
explanation: 'IN = MN - MI = 12 - 5 = 7 cm.'
```

```quiz
type: choice
question: 'Cho $AB = 6\text{ cm}, CD = 60\text{ mm}$. Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'AB > CD'
  - 'AB < CD'
  - 'AB = CD'
  - 'Không so sánh được'
answer: 3
explanation: 'Đổi 60 mm = 6 cm. Do đó AB = CD.'
```

```quiz
type: choice
question: 'Trong một buổi giao lưu có 10 người, mỗi người bắt tay với tất cả những người còn lại 1 lần. Tổng số cái bắt tay là:'
options:
  - '90'
  - '45'
  - '20'
  - '10'
answer: 2
explanation: 'Số cái bắt tay = 10 * 9 / 2 = 45 cái bắt tay.'
```

```quiz
type: choice
question: 'Cho ba điểm $A, B, C$ thẳng hàng có $AB = 4\text{ cm}, BC = 6\text{ cm}, AC = 10\text{ cm}$. Điểm nằm giữa hai điểm còn lại là:'
options:
  - 'Điểm A'
  - 'Điểm B'
  - 'Điểm C'
  - 'Không có điểm nào'
answer: 2
explanation: 'Vì AB + BC = 4 + 6 = 10 = AC nên điểm B nằm giữa A và C.'
```

```quiz
type: choice
question: 'Khoảng cách giữa hai điểm trùng nhau bằng:'
options:
  - '1'
  - '0'
  - 'Vô cực'
  - 'Không xác định'
answer: 2
explanation: 'Theo quy ước hình học, khoảng cách giữa hai điểm trùng nhau bằng 0.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - 'Đoạn thẳng bị giới hạn ở cả hai đầu mút'
  - 'Độ dài đoạn thẳng luôn là một số dương'
  - 'Nếu AM + MB > AB thì M nằm giữa A và B'
  - 'Đoạn thẳng AB và đoạn thẳng BA là một hình'
answer: 3
explanation: 'M chỉ nằm giữa A và B khi và chỉ khi AM + MB = AB. Nếu AM + MB > AB thì M không nằm giữa A và B.'
```

---

## F. Đề kiểm tra 15 phút đánh giá năng lực (Có ma trận & lời giải)

### Đề kiểm tra 15 phút

**Phần I: Trắc nghiệm (3.0 điểm — Mỗi câu 0.75 điểm)**

**Câu 1:** Hai đầu mút của đoạn thẳng $MN$ là:
A. Điểm $M$ và điểm $N$
B. Điểm $O$ và điểm $M$
C. Điểm $M$ và hướng $N$
D. Toàn bộ đường thẳng $MN$

**Câu 2:** Cho $5$ điểm phân biệt cùng nằm trên một đường thẳng. Số đoạn thẳng đếm được là:
A. $5$
B. $10$
C. $20$
D. $15$

**Câu 3:** Điểm $K$ nằm giữa hai điểm $E$ và $F.$ Biết $EK = 4\text{ cm}$ và $KF = 5\text{ cm}.$ Độ dài $EF$ là:
A. $1\text{ cm}$
B. $9\text{ cm}$
C. $20\text{ cm}$
D. $4{,}5\text{ cm}$

**Câu 4:** Trên tia $Ox,$ lấy hai điểm $A$ và $B$ sao cho $OA = 5\text{ cm}, OB = 9\text{ cm}.$ Khẳng định nào sau đây là ĐÚNG?
A. Điểm $B$ nằm giữa $O$ và $A$
B. Điểm $A$ nằm giữa $O$ và $B$
C. Điểm $O$ nằm giữa $A$ và $B$
D. $AB = 14\text{ cm}$

---

**Phần II: Tự luận (7.0 điểm)**

**Bài 1 (2.0 điểm):**
Cho đoạn thẳng $AB = 8\text{ cm}.$ Lấy điểm $C$ thuộc đoạn thẳng $AB$ sao cho $AC = 3\text{ cm}.$
a) Tính độ dài đoạn thẳng $CB.$
b) So sánh độ dài hai đoạn thẳng $AC$ và $CB.$

**Bài 2 (2.0 điểm):**
Trên tia $Ox,$ lấy hai điểm $M$ và $N$ sao cho $OM = 4\text{ cm}$ và $ON = 10\text{ cm}.$
a) Tính độ dài đoạn thẳng $MN.$
b) Lấy điểm $P$ thuộc tia đối của tia $Ox$ sao cho $OP = 3\text{ cm}.$ Tính độ dài đoạn thẳng $PM.$

**Bài 3 (2.0 điểm — Thực tế):**
Một cây thước gỗ dài $1\text{ m}.$ Bạn An dùng bút chì đánh dấu điểm $M$ cách đầu $A$ một đoạn $35\text{ cm},$ và điểm $N$ cách đầu $B$ một đoạn $45\text{ cm}.$
a) Tính khoảng cách từ điểm $M$ đến điểm $N.$
b) Điểm $M$ và điểm $N$ có trùng nhau không?

**Bài 4 (1.0 điểm — Vận dụng cao):**
Cho $n$ điểm phân biệt trên một đường thẳng. Biết rằng số đoạn thẳng đếm được là $36$ đoạn thẳng. Tìm số điểm $n.$

---

### Đáp án và biểu điểm chi tiết

**Phần I: Trắc nghiệm (3.0 điểm)**
- Câu 1: **A** (Điểm $M$ và điểm $N$). *(0.75 điểm)*
- Câu 2: **B** ($\dfrac{5 \cdot 4}{2} = 10$ đoạn thẳng). *(0.75 điểm)*
- Câu 3: **B** ($EF = 4 + 5 = 9\text{ cm}$). *(0.75 điểm)*
- Câu 4: **B** ($A$ nằm giữa $O$ và $B$). *(0.75 điểm)*

**Phần II: Tự luận (7.0 điểm)**
- **Bài 1 (2.0 điểm):**
  - a) Vì $C$ thuộc đoạn thẳng $AB$ nên $C$ nằm giữa $A$ và $B$:
       $$AC + CB = AB \implies CB = AB - AC = 8 - 3 = 5\text{ cm}.\quad (1.0\text{ điểm})$$
  - b) Vì $3\text{ cm} < 5\text{ cm}$ nên $AC < CB.$ *(1.0 điểm)*
- **Bài 2 (2.0 điểm):**
  - a) Trên tia $Ox,$ vì $OM < ON$ ($4\text{ cm} < 10\text{ cm}$) nên $M$ nằm giữa $O$ và $N$:
       $$MN = ON - OM = 10 - 4 = 6\text{ cm}.\quad (1.0\text{ điểm})$$
  - b) Vì $P$ thuộc tia đối của $Ox$ còn $M$ thuộc $Ox$ nên $O$ nằm giữa $P$ và $M$:
       $$PM = PO + OM = 3 + 4 = 7\text{ cm}.\quad (1.0\text{ điểm})$$
- **Bài 3 (2.0 điểm):**
  - a) Đổi $1\text{ m} = 100\text{ cm}.$
       Điểm $M$ cách $A$ là $35\text{ cm},$ điểm $N$ cách $B$ là $45\text{ cm}.$
       Tổng khoảng cách từ hai đầu: $35 + 45 = 80\text{ cm} < 100\text{ cm}.$
       Do đó $M$ và $N$ nằm theo thứ tự $A, M, N, B.$
       Khoảng cách $MN = 100 - (35 + 45) = 20\text{ cm}.$ *(1.5 điểm)*
  - b) Vì $MN = 20\text{ cm} > 0$ nên hai điểm $M$ và $N$ **không trùng nhau**. *(0.5 điểm)*
- **Bài 4 (1.0 điểm):**
  - Ta có công thức:
    $$\dfrac{n(n - 1)}{2} = 36 \iff n(n - 1) = 72.$$ *(0.5 điểm)*
  - Vì $n$ và $(n - 1)$ là hai số tự nhiên liên tiếp, và $9 \cdot 8 = 72,$ suy ra $n = 9.$
  - Vậy có **$9$ điểm**. *(0.5 điểm)*
